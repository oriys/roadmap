#!/usr/bin/env python3
from __future__ import annotations

"""
快速检查仓库里出现的 http(s) URL 是否失效。

示例：
  python3 scripts/check_urls.py
  python3 scripts/check_urls.py src/App.tsx --fail-only
  python3 scripts/check_urls.py . --timeout 8 --workers 25 --fail-only

默认会跳过 localhost/内网地址；如需检查可加 --include-private。
"""

import argparse
import concurrent.futures
import dataclasses
import ipaddress
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import defaultdict
from typing import DefaultDict, Iterable


URL_RE = re.compile(r"https?://[^\s<>\"]+")

DEFAULT_EXTENSIONS = {
    ".md",
    ".txt",
    ".html",
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".json",
    ".yml",
    ".yaml",
}

DEFAULT_EXCLUDE_DIRS = {
    ".git",
    "dist",
    "node_modules",
    ".pnpm-store",
}

DEFAULT_SKIP_HOSTS = {
    "localhost",
    "0.0.0.0",
    "127.0.0.1",
    "kubernetes.default.svc",
    "example.com",
    "example.org",
    "example.net",
}

DEFAULT_SKIP_HOST_SUFFIXES = {
    ".local",
    ".internal",
    ".svc",
    ".cluster.local",
}


@dataclasses.dataclass(frozen=True)
class Occurrence:
    path: str
    line: int
    column: int


@dataclasses.dataclass(frozen=True)
class CheckResult:
    url: str
    ok: bool
    status: int | None
    final_url: str | None
    error: str | None
    elapsed_ms: int

    @property
    def is_redirect(self) -> bool:
        return (
            self.ok
            and self.final_url is not None
            and canonical_url(self.final_url) != canonical_url(self.url)
        )


def _strip_unbalanced(text: str, open_char: str, close_char: str) -> str:
    while text.endswith(close_char) and text.count(close_char) > text.count(open_char):
        text = text[:-1]
    return text


def normalize_url(raw_url: str) -> str:
    url = raw_url.strip()
    if url.startswith("<") and url.endswith(">"):
        url = url[1:-1].strip()

    while url and url[-1] in ".,;:!?\"'":
        url = url[:-1]

    url = _strip_unbalanced(url, "(", ")")
    url = _strip_unbalanced(url, "[", "]")
    url = _strip_unbalanced(url, "{", "}")
    return url


def iter_files(
    roots: Iterable[str],
    *,
    extensions: set[str],
    exclude_dirs: set[str],
) -> Iterable[str]:
    for root in roots:
        if os.path.isfile(root):
            yield root
            continue

        for dirpath, dirnames, filenames in os.walk(root):
            dirnames[:] = [d for d in dirnames if d not in exclude_dirs]
            for name in filenames:
                _, ext = os.path.splitext(name)
                if ext.lower() not in extensions:
                    continue
                yield os.path.join(dirpath, name)


def extract_urls_from_file(path: str) -> list[tuple[str, Occurrence]]:
    matches: list[tuple[str, Occurrence]] = []
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        for line_no, line in enumerate(f, start=1):
            for m in URL_RE.finditer(line):
                url = normalize_url(m.group(0))
                if not url:
                    continue
                matches.append(
                    (
                        url,
                        Occurrence(
                            path=path,
                            line=line_no,
                            column=m.start() + 1,
                        ),
                    )
                )
    return matches


def is_public_host(hostname: str) -> bool:
    host = hostname.strip().lower()
    if not host:
        return False

    if host in DEFAULT_SKIP_HOSTS:
        return False
    for suffix in DEFAULT_SKIP_HOST_SUFFIXES:
        if host.endswith(suffix):
            return False

    try:
        ip = ipaddress.ip_address(host)
    except ValueError:
        return True
    return ip.is_global


def to_request_url(url: str) -> str:
    split = urllib.parse.urlsplit(url)
    if not split.scheme or not split.netloc:
        return url

    hostname = split.hostname or ""
    try:
        hostname_ascii = hostname.encode("idna").decode("ascii") if hostname else ""
    except Exception:
        hostname_ascii = hostname

    userinfo = ""
    if split.username is not None:
        userinfo = split.username
        if split.password is not None:
            userinfo += f":{split.password}"
        userinfo += "@"

    netloc = f"{userinfo}{hostname_ascii}"
    if split.port is not None:
        netloc += f":{split.port}"

    path = urllib.parse.quote(split.path, safe="/:@-._~!$&'()*+,;=%")
    query = urllib.parse.quote(split.query, safe="=&:@-._~!$&'()*+,;=%")
    return urllib.parse.urlunsplit((split.scheme, netloc, path, query, ""))


def canonical_url(url: str) -> str:
    try:
        return to_request_url(url).rstrip("/")
    except Exception:
        return url.rstrip("/")


def _urlopen(
    req: urllib.request.Request,
    *,
    timeout_s: float,
) -> tuple[int, str]:
    with urllib.request.urlopen(req, timeout=timeout_s) as resp:
        status = getattr(resp, "status", None) or resp.getcode()
        final_url = resp.geturl()
        return int(status), final_url


def check_url(
    url: str,
    *,
    timeout_s: float,
    retries: int,
    user_agent: str,
) -> CheckResult:
    start = time.time()
    request_url = to_request_url(url)

    def done(
        *,
        ok: bool,
        status: int | None,
        final_url: str | None,
        error: str | None,
    ) -> CheckResult:
        elapsed_ms = int((time.time() - start) * 1000)
        return CheckResult(
            url=url,
            ok=ok,
            status=status,
            final_url=final_url,
            error=error,
            elapsed_ms=elapsed_ms,
        )

    last_error: str | None = None
    for attempt in range(retries + 1):
        try:
            req = urllib.request.Request(
                request_url,
                method="HEAD",
                headers={
                    "User-Agent": user_agent,
                    "Accept": "*/*",
                },
            )
            status, final_url = _urlopen(req, timeout_s=timeout_s)
            if 200 <= status < 400:
                return done(ok=True, status=status, final_url=final_url, error=None)

            if status in {403, 405, 429, 501}:
                raise urllib.error.HTTPError(
                    url=request_url,
                    code=status,
                    msg="HEAD not usable; trying GET",
                    hdrs=None,
                    fp=None,
                )
            return done(ok=False, status=status, final_url=final_url, error=None)
        except urllib.error.HTTPError as e:
            status = int(getattr(e, "code", 0) or 0) or None
            final_url = getattr(e, "geturl", lambda: None)() or None

            if status in {403, 405, 429, 501}:
                try:
                    req = urllib.request.Request(
                        request_url,
                        method="GET",
                        headers={
                            "User-Agent": user_agent,
                            "Accept": "*/*",
                            "Range": "bytes=0-0",
                        },
                    )
                    get_status, get_final_url = _urlopen(req, timeout_s=timeout_s)
                    if 200 <= get_status < 400:
                        return done(
                            ok=True,
                            status=get_status,
                            final_url=get_final_url,
                            error=None,
                        )
                    return done(
                        ok=False,
                        status=get_status,
                        final_url=get_final_url,
                        error=None,
                    )
                except urllib.error.HTTPError as get_e:
                    get_status = int(getattr(get_e, "code", 0) or 0) or None
                    get_final_url = getattr(get_e, "geturl", lambda: None)() or None
                    return done(
                        ok=False,
                        status=get_status,
                        final_url=get_final_url,
                        error=None,
                    )
                except Exception as get_ex:
                    last_error = f"GET error: {type(get_ex).__name__}: {get_ex}"
            else:
                return done(ok=False, status=status, final_url=final_url, error=None)
        except Exception as ex:
            last_error = f"{type(ex).__name__}: {ex}"

        if attempt < retries:
            time.sleep(0.2 * (attempt + 1))

    return done(ok=False, status=None, final_url=None, error=last_error)


def format_location(occ: Occurrence) -> str:
    rel = os.path.relpath(occ.path)
    return f"{rel}:{occ.line}:{occ.column}"


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(
        description="Scan files for http(s) URLs and check whether they are still reachable.",
    )
    parser.add_argument(
        "paths",
        nargs="*",
        default=["."],
        help="Paths to scan (files or directories). Default: current directory.",
    )
    parser.add_argument(
        "--workers",
        type=int,
        default=20,
        help="Max concurrent URL checks (default: 20).",
    )
    parser.add_argument(
        "--timeout",
        type=float,
        default=10.0,
        help="Per-request timeout in seconds (default: 10).",
    )
    parser.add_argument(
        "--retries",
        type=int,
        default=1,
        help="Retries per URL on network errors (default: 1).",
    )
    parser.add_argument(
        "--user-agent",
        default="Mozilla/5.0 (compatible; RoadmapURLChecker/1.0)",
        help="User-Agent header used for requests.",
    )
    parser.add_argument(
        "--include-private",
        action="store_true",
        help="Also check localhost/private/intranet hosts (default: skip).",
    )
    parser.add_argument(
        "--extensions",
        default=",".join(sorted(DEFAULT_EXTENSIONS)),
        help="Comma-separated extensions to scan.",
    )
    parser.add_argument(
        "--exclude-dirs",
        default=",".join(sorted(DEFAULT_EXCLUDE_DIRS)),
        help="Comma-separated directory names to skip.",
    )
    parser.add_argument(
        "--fail-only",
        action="store_true",
        help="Only print failed URLs.",
    )
    parser.add_argument(
        "--max-locations",
        type=int,
        default=3,
        help="Max locations to print per URL (default: 3).",
    )
    args = parser.parse_args(argv)

    extensions = {e.strip() for e in args.extensions.split(",") if e.strip()}
    exclude_dirs = {d.strip() for d in args.exclude_dirs.split(",") if d.strip()}

    occurrences: DefaultDict[str, list[Occurrence]] = defaultdict(list)
    for path in iter_files(args.paths, extensions=extensions, exclude_dirs=exclude_dirs):
        for url, occ in extract_urls_from_file(path):
            occurrences[url].append(occ)

    urls = sorted(occurrences.keys())
    if not args.include_private:
        urls = [
            u
            for u in urls
            if is_public_host(urllib.parse.urlsplit(u).hostname or "")
        ]

    if not urls:
        print("No URLs found.")
        return 0

    results: dict[str, CheckResult] = {}

    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
        future_to_url = {
            pool.submit(
                check_url,
                url,
                timeout_s=args.timeout,
                retries=args.retries,
                user_agent=args.user_agent,
            ): url
            for url in urls
        }
        for future in concurrent.futures.as_completed(future_to_url):
            url = future_to_url[future]
            try:
                results[url] = future.result()
            except Exception as ex:
                results[url] = CheckResult(
                    url=url,
                    ok=False,
                    status=None,
                    final_url=None,
                    error=f"{type(ex).__name__}: {ex}",
                    elapsed_ms=0,
                )

    ok_count = sum(1 for r in results.values() if r.ok and not r.is_redirect)
    redirect_count = sum(1 for r in results.values() if r.ok and r.is_redirect)
    failed_count = sum(1 for r in results.values() if not r.ok)

    print(
        f"Checked {len(results)} URLs: ok={ok_count}, redirected={redirect_count}, failed={failed_count}"
    )

    def sort_key(item: tuple[str, CheckResult]) -> tuple[int, int, str]:
        _, r = item
        # failed first, then redirects, then ok
        group = 0 if not r.ok else (1 if r.is_redirect else 2)
        status = r.status if r.status is not None else 999
        return (group, status, r.url)

    for url, r in sorted(results.items(), key=sort_key):
        if args.fail_only and r.ok:
            continue

        status = str(r.status) if r.status is not None else "ERR"
        tag = "OK" if r.ok else "FAIL"
        if r.ok and r.is_redirect:
            tag = "REDIR"

        line = f"[{tag}] {status} {url}"
        if r.is_redirect and r.final_url:
            line += f" -> {r.final_url}"
        if (not r.ok) and r.error:
            line += f" ({r.error})"
        print(line)

        locs = occurrences.get(url, [])
        for occ in locs[: max(0, args.max_locations)]:
            print(f"  - {format_location(occ)}")
        if args.max_locations >= 0 and len(locs) > args.max_locations:
            print(f"  - (+{len(locs) - args.max_locations} more)")

    return 1 if failed_count > 0 else 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
