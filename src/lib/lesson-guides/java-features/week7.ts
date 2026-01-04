import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "jf-w7-1": {
        lessonId: "jf-w7-1",
        background: [
            "【HttpClient 定义】Oracle 文档：An HTTP Client that sends requests and retrieves responses——Java 11 标准化的 HTTP 客户端，支持 HTTP/1.1 和 HTTP/2。",
            "【不可变设计】Oracle 文档：HttpClient is immutable once built, and can be reused for multiple requests——客户端构建后不可变，可安全复用。",
            "【Builder 模式】使用 HttpClient.newBuilder() 配置客户端：协议版本、重定向策略、代理、超时、认证等。",
            "【默认客户端】HttpClient.newHttpClient() 返回默认配置的客户端：HTTP/2 优先、不跟随重定向、默认代理和 SSL。",
            "【请求构建】HttpRequest.newBuilder() 构建请求：URI、方法（GET/POST/PUT/DELETE）、请求头、请求体、超时。"
        ],
        keyDifficulties: [
            "【请求不可变】OpenJDK 文档：Once built an HttpRequest is immutable, and can be sent multiple times——请求对象不可变，可重复发送。",
            "【BodyHandler 作用】BodyHandler 决定如何处理响应体：ofString() 返回字符串、ofFile() 写入文件、ofByteArray() 返回字节数组。",
            "【阻塞特性】send() 方法是同步阻塞的，会等待响应完成。对于 UI 线程或高并发场景，应使用 sendAsync()。",
            "【资源管理】HttpClient 内部管理连接池，无需手动关闭连接。但需要确保正确处理响应体。"
        ],
        handsOnPath: [
            "创建默认客户端：HttpClient client = HttpClient.newHttpClient();",
            "构建 GET 请求：HttpRequest request = HttpRequest.newBuilder().uri(URI.create(\"https://api.example.com\")).GET().build();",
            "发送同步请求：HttpResponse<String> response = client.send(request, BodyHandlers.ofString());",
            "获取响应信息：response.statusCode()、response.body()、response.headers();",
            "设置请求头：request.newBuilder().header(\"Content-Type\", \"application/json\").build();",
            "设置超时：HttpRequest.newBuilder().timeout(Duration.ofSeconds(10)).build();"
        ],
        selfCheck: [
            "HttpClient.newHttpClient() 和 HttpClient.newBuilder().build() 有什么区别？",
            "HttpRequest 构建后可以修改吗？为什么这样设计？",
            "BodyHandlers.ofString() 的作用是什么？还有哪些 BodyHandler？",
            "send() 方法是阻塞的还是非阻塞的？",
            "如何设置请求超时？"
        ],
        extensions: [
            "研究 BodyHandlers.ofInputStream() 处理大响应的流式读取。",
            "了解 BodyHandlers.discarding() 丢弃响应体的场景。",
            "探索自定义 BodyHandler 实现。",
            "学习 HttpResponse.BodySubscribers 底层 API。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpClient.html",
            "https://openjdk.org/groups/net/httpclient/intro.html"
        ]
    },
    "jf-w7-2": {
        lessonId: "jf-w7-2",
        background: [
            "【sendAsync 方法】OpenJDK 文档：Returns immediately with a CompletableFuture that completes with HttpResponse——异步发送请求，立即返回 CompletableFuture。",
            "【CompletableFuture 组合】可使用 thenApply()、thenAccept()、thenCompose() 等方法链式处理异步结果。",
            "【HTTP/2 默认】Oracle 文档：By default, client tries HTTP/2, falls back to HTTP/1.1 if server doesn't support——默认尝试 HTTP/2，自动降级。",
            "【HTTP/2 优势】OpenJDK 文档：header compression, single persistent connections, multiplexing multiple requests——头压缩、持久连接、多路复用。",
            "【线程池】Oracle 文档：sendAsync uses executor service, customizable via HttpClient.Builder::executor——异步请求使用线程池，可自定义。"
        ],
        keyDifficulties: [
            "【非阻塞本质】sendAsync 立即返回，不等待网络响应。真正的 I/O 在后台线程执行，通过 CompletableFuture 回调处理结果。",
            "【异常处理】使用 exceptionally() 或 handle() 处理异步操作中的异常：future.exceptionally(ex -> fallback)。",
            "【多请求并发】可以同时发起多个 sendAsync，使用 CompletableFuture.allOf() 等待全部完成。",
            "【HTTP/2 多路复用】OpenJDK 文档：multiplexing multiple requests simultaneously——单个连接上并行处理多个请求，减少连接开销。"
        ],
        handsOnPath: [
            "异步发送：CompletableFuture<HttpResponse<String>> future = client.sendAsync(request, BodyHandlers.ofString());",
            "链式处理：future.thenApply(HttpResponse::body).thenAccept(System.out::println);",
            "等待结果：String body = future.get(); // 阻塞等待",
            "异常处理：future.exceptionally(ex -> { ex.printStackTrace(); return null; });",
            "强制 HTTP/2：HttpClient.newBuilder().version(HttpClient.Version.HTTP_2).build();",
            "并发请求：CompletableFuture.allOf(future1, future2, future3).join();"
        ],
        selfCheck: [
            "sendAsync 返回什么类型？什么时候实际发送请求？",
            "如何处理 sendAsync 中的异常？",
            "HTTP/2 相比 HTTP/1.1 的主要优势是什么？",
            "多路复用是什么意思？有什么好处？",
            "如何并发发送多个异步请求并等待全部完成？"
        ],
        extensions: [
            "研究 HTTP/2 Server Push：sendAsync 的三参数形式支持推送处理。",
            "了解 CompletableFuture 的 thenCompose 与 thenApply 区别。",
            "探索 WebSocket 客户端 API（同一模块）。",
            "学习 Reactive Streams 与 HTTP Client 的集成。"
        ],
        sourceUrls: [
            "https://openjdk.org/groups/net/httpclient/intro.html",
            "https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpClient.html"
        ]
    },
    "jf-w7-3": {
        lessonId: "jf-w7-3",
        background: [
            "【请求体发布者】Oracle 文档：BodyPublishers factory methods for common body types——ofString、ofFile、ofByteArray、ofInputStream 创建请求体。",
            "【POST 请求】使用 POST(BodyPublisher) 方法发送请求体，常用于提交表单或 JSON 数据。",
            "【请求头设置】header(name, value) 设置单个头，headers(k1, v1, k2, v2) 批量设置。",
            "【超时配置】Oracle 文档：timeout(Duration) sets request timeout——请求级超时；connectTimeout() 设置客户端连接超时。",
            "【认证支持】Oracle 文档：Authenticator handles authentication challenges——通过 Authenticator 处理基本认证和摘要认证。"
        ],
        keyDifficulties: [
            "【ofInputStream 特殊性】Oracle 文档：Takes a Supplier<InputStream> for request retry support——使用 Supplier 以支持请求重试。",
            "【Content-Type 重要性】发送 JSON 必须设置 header(\"Content-Type\", \"application/json\")，否则服务器可能无法正确解析。",
            "【表单数据】发送表单数据使用 application/x-www-form-urlencoded，需要手动编码参数。",
            "【重定向策略】Oracle 文档：followRedirects(Redirect.NORMAL) 自动跟随 3xx 重定向——默认不跟随，需显式配置。"
        ],
        handsOnPath: [
            "POST JSON：HttpRequest.newBuilder().uri(uri).header(\"Content-Type\", \"application/json\").POST(BodyPublishers.ofString(json)).build();",
            "POST 文件：HttpRequest.newBuilder().POST(BodyPublishers.ofFile(Path.of(\"data.json\"))).build();",
            "设置多个头：request.newBuilder().headers(\"Accept\", \"application/json\", \"Authorization\", \"Bearer token\").build();",
            "请求超时：HttpRequest.newBuilder().timeout(Duration.ofSeconds(30)).build();",
            "连接超时：HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();",
            "自动重定向：HttpClient.newBuilder().followRedirects(HttpClient.Redirect.ALWAYS).build();"
        ],
        selfCheck: [
            "BodyPublishers.ofString() 和 ofFile() 分别用于什么场景？",
            "发送 JSON 数据时需要设置什么请求头？",
            "请求超时和连接超时有什么区别？在哪里设置？",
            "followRedirects 的选项有哪些？默认行为是什么？",
            "如何实现 HTTP Basic 认证？"
        ],
        extensions: [
            "研究 multipart/form-data 请求的手动构建。",
            "了解 BodyPublishers.ofByteArrays(Iterable) 发送分块数据。",
            "探索 CookieHandler 管理 Cookie。",
            "学习 SSL/TLS 配置：SSLContext 和 SSLParameters。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpRequest.BodyPublishers.html",
            "https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpClient.html"
        ]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w7-1": [
        {
            id: "jf-w7-1-q1",
            question: "HttpClient.newHttpClient() 创建的客户端有什么特点？",
            options: [
                "只支持 HTTP/1.1",
                "默认配置：HTTP/2 优先、不跟随重定向",
                "自动跟随所有重定向",
                "每次请求创建新连接"
            ],
            answer: 1,
            rationale: "Oracle 文档：Returns client with default settings (HTTP/2 preference, NEVER redirect policy)——默认 HTTP/2 优先，不跟随重定向。"
        },
        {
            id: "jf-w7-1-q2",
            question: "HttpRequest 构建后可以修改吗？",
            options: [
                "可以通过 setter 方法修改",
                "不可以，HttpRequest 是不可变的",
                "只能修改请求头",
                "只能修改请求体"
            ],
            answer: 1,
            rationale: "OpenJDK 文档：Once built an HttpRequest is immutable, and can be sent multiple times——请求对象不可变，可重复发送。"
        },
        {
            id: "jf-w7-1-q3",
            question: "BodyHandlers.ofString() 的作用是什么？",
            options: [
                "将请求体转换为字符串",
                "将响应体作为 String 返回",
                "验证响应是否为字符串",
                "设置 Content-Type 为 text/plain"
            ],
            answer: 1,
            rationale: "BodyHandlers.ofString() 是 BodyHandler，决定如何处理响应体——将响应体读取为 String。"
        },
        {
            id: "jf-w7-1-q4",
            question: "client.send(request, handler) 方法是什么特性？",
            options: [
                "异步非阻塞",
                "同步阻塞，等待响应完成",
                "半双工",
                "只发送不接收"
            ],
            answer: 1,
            rationale: "OpenJDK 文档：The synchronous API blocks until the HttpResponse is available——send() 是同步阻塞方法。"
        },
        {
            id: "jf-w7-1-q5",
            question: "如何获取 HTTP 响应的状态码？",
            options: [
                "response.getStatus()",
                "response.statusCode()",
                "response.code()",
                "response.getStatusCode()"
            ],
            answer: 1,
            rationale: "HttpResponse 提供 statusCode() 方法获取 HTTP 状态码（如 200、404、500）。"
        },
        {
            id: "jf-w7-1-q6",
            question: "HttpClient 实例可以复用吗？",
            options: [
                "不可以，每次请求需要新建",
                "可以，HttpClient 是线程安全的可复用",
                "只能复用于相同 URL",
                "只能复用于 GET 请求"
            ],
            answer: 1,
            rationale: "Oracle 文档：HttpClient is immutable and can be reused for multiple requests——客户端线程安全，可复用。"
        },
        {
            id: "jf-w7-1-q7",
            question: "如何设置请求的超时时间？",
            options: [
                "HttpClient.newBuilder().timeout(Duration)",
                "HttpRequest.newBuilder().timeout(Duration)",
                "HttpRequest.setTimeout(Duration)",
                "无法设置超时"
            ],
            answer: 1,
            rationale: "Oracle 文档：HttpRequest.newBuilder().timeout(Duration) sets request timeout——请求级超时在请求构建器设置。"
        },
        {
            id: "jf-w7-1-q8",
            question: "默认的 HTTP 请求方法是什么？",
            options: [
                "POST",
                "PUT",
                "GET",
                "HEAD"
            ],
            answer: 2,
            rationale: "HttpRequest.newBuilder() 默认使用 GET 方法，无需显式调用 .GET()。"
        },
        {
            id: "jf-w7-1-q9",
            question: "如何构建一个 DELETE 请求？",
            options: [
                "HttpRequest.newBuilder().DELETE()",
                "HttpRequest.newBuilder().method(\"DELETE\", BodyPublishers.noBody())",
                "HttpRequest.delete(uri)",
                "无法发送 DELETE 请求"
            ],
            answer: 1,
            rationale: "DELETE 没有专用方法，使用 method(\"DELETE\", BodyPublishers.noBody()) 构建。"
        },
        {
            id: "jf-w7-1-q10",
            question: "HttpResponse 提供哪些信息？",
            options: [
                "只有响应体",
                "状态码、响应头和响应体",
                "只有状态码",
                "只有响应头"
            ],
            answer: 1,
            rationale: "HttpResponse 提供完整信息：statusCode()、headers()、body()、uri()、version() 等。"
        },
        {
            id: "jf-w7-1-q11",
            question: "Java HTTP Client 在哪个版本标准化？",
            options: [
                "Java 9（孵化）",
                "Java 10",
                "Java 11（标准化）",
                "Java 8"
            ],
            answer: 2,
            rationale: "HTTP Client 在 Java 9 作为孵化模块引入，Java 11 正式标准化到 java.net.http 模块。"
        },
        {
            id: "jf-w7-1-q12",
            question: "BodyHandlers.ofFile(Path) 的作用是什么？",
            options: [
                "从文件读取请求体",
                "将响应体直接写入指定文件",
                "验证文件是否存在",
                "设置 Content-Type 为 application/octet-stream"
            ],
            answer: 1,
            rationale: "BodyHandlers.ofFile(Path) 将响应体直接写入指定路径的文件，适合下载场景。"
        }
    ],
    "jf-w7-2": [
        {
            id: "jf-w7-2-q1",
            question: "sendAsync 方法返回什么类型？",
            options: [
                "HttpResponse<T>",
                "Future<HttpResponse<T>>",
                "CompletableFuture<HttpResponse<T>>",
                "Promise<HttpResponse<T>>"
            ],
            answer: 2,
            rationale: "Oracle 文档：sendAsync returns CompletableFuture<HttpResponse<T>>——返回可组合的异步结果。"
        },
        {
            id: "jf-w7-2-q2",
            question: "sendAsync 调用后请求何时发送？",
            options: [
                "立即发送",
                "调用 get() 时发送",
                "调用 thenApply 时发送",
                "需要手动触发"
            ],
            answer: 0,
            rationale: "OpenJDK 文档：sendAsync returns immediately——调用后立即发送，不等待响应返回。"
        },
        {
            id: "jf-w7-2-q3",
            question: "HttpClient 默认使用哪个 HTTP 版本？",
            options: [
                "HTTP/1.0",
                "HTTP/1.1",
                "HTTP/2（自动降级到 HTTP/1.1）",
                "取决于服务器"
            ],
            answer: 2,
            rationale: "Oracle 文档：By default, client tries HTTP/2, falls back to HTTP/1.1——默认 HTTP/2，服务器不支持时自动降级。"
        },
        {
            id: "jf-w7-2-q4",
            question: "HTTP/2 多路复用的含义是什么？",
            options: [
                "多个客户端共享连接",
                "单个连接并行处理多个请求",
                "自动负载均衡",
                "请求自动重试"
            ],
            answer: 1,
            rationale: "OpenJDK 文档：multiplexing multiple requests simultaneously——单个 TCP 连接上并行处理多个 HTTP 请求。"
        },
        {
            id: "jf-w7-2-q5",
            question: "如何处理 sendAsync 的异常？",
            options: [
                "try-catch 包围",
                "future.exceptionally(ex -> fallback)",
                "future.onError(handler)",
                "无法处理异常"
            ],
            answer: 1,
            rationale: "使用 CompletableFuture 的 exceptionally() 或 handle() 方法处理异步操作中的异常。"
        },
        {
            id: "jf-w7-2-q6",
            question: "thenApply 和 thenAccept 的区别是什么？",
            options: [
                "没有区别",
                "thenApply 有返回值，thenAccept 无返回值",
                "thenAccept 更快",
                "thenApply 是异步的"
            ],
            answer: 1,
            rationale: "thenApply(Function) 转换结果有返回值，thenAccept(Consumer) 消费结果无返回值（返回 Void）。"
        },
        {
            id: "jf-w7-2-q7",
            question: "如何等待多个异步请求全部完成？",
            options: [
                "逐个调用 get()",
                "CompletableFuture.allOf(futures).join()",
                "Thread.sleep()",
                "futures.waitAll()"
            ],
            answer: 1,
            rationale: "使用 CompletableFuture.allOf() 等待多个 CompletableFuture 全部完成，join() 阻塞等待。"
        },
        {
            id: "jf-w7-2-q8",
            question: "HTTP/2 相比 HTTP/1.1 的优势不包括？",
            options: [
                "头压缩",
                "多路复用",
                "更简单的文本协议",
                "服务器推送"
            ],
            answer: 2,
            rationale: "HTTP/2 使用二进制协议（更紧凑高效），不是文本协议。其他都是 HTTP/2 的优势。"
        },
        {
            id: "jf-w7-2-q9",
            question: "如何强制使用 HTTP/1.1？",
            options: [
                "HttpClient.newBuilder().version(Version.HTTP_1_1)",
                "HttpRequest.newBuilder().http11()",
                "无法强制",
                "设置请求头 Version: 1.1"
            ],
            answer: 0,
            rationale: "HttpClient.newBuilder().version(HttpClient.Version.HTTP_1_1).build() 强制使用 HTTP/1.1。"
        },
        {
            id: "jf-w7-2-q10",
            question: "sendAsync 默认使用什么线程池？",
            options: [
                "主线程",
                "ForkJoinPool.commonPool()",
                "JVM 内部线程池",
                "新建的单线程池"
            ],
            answer: 2,
            rationale: "Oracle 文档：sendAsync uses executor service deep in the JVM——默认使用 JVM 内部线程池，可通过 executor() 自定义。"
        },
        {
            id: "jf-w7-2-q11",
            question: "future.get() 的作用是什么？",
            options: [
                "非阻塞获取结果",
                "阻塞等待并获取结果",
                "取消请求",
                "检查是否完成"
            ],
            answer: 1,
            rationale: "CompletableFuture.get() 会阻塞当前线程直到异步操作完成并返回结果。"
        },
        {
            id: "jf-w7-2-q12",
            question: "如何自定义异步请求的线程池？",
            options: [
                "HttpRequest.newBuilder().executor(pool)",
                "HttpClient.newBuilder().executor(pool)",
                "sendAsync(request, handler, pool)",
                "无法自定义"
            ],
            answer: 1,
            rationale: "HttpClient.Builder.executor(Executor) 设置用于异步任务的自定义线程池。"
        }
    ],
    "jf-w7-3": [
        {
            id: "jf-w7-3-q1",
            question: "BodyPublishers.ofString(json) 的作用是什么？",
            options: [
                "解析 JSON 字符串",
                "创建字符串类型的请求体发布者",
                "设置响应类型为 JSON",
                "验证 JSON 格式"
            ],
            answer: 1,
            rationale: "Oracle 文档：ofString returns a request body publisher whose body is the given String——创建字符串请求体。"
        },
        {
            id: "jf-w7-3-q2",
            question: "发送 JSON 数据时应该设置什么请求头？",
            options: [
                "Accept: application/json",
                "Content-Type: application/json",
                "Data-Type: json",
                "Format: JSON"
            ],
            answer: 1,
            rationale: "发送 JSON 必须设置 Content-Type: application/json，告知服务器请求体格式。"
        },
        {
            id: "jf-w7-3-q3",
            question: "请求超时和连接超时有什么区别？",
            options: [
                "没有区别",
                "请求超时限制整个请求，连接超时只限制建立连接",
                "连接超时更长",
                "请求超时只用于 POST"
            ],
            answer: 1,
            rationale: "connectTimeout 限制建立 TCP 连接的时间，timeout 限制整个请求（包括发送和接收）的时间。"
        },
        {
            id: "jf-w7-3-q4",
            question: "followRedirects(Redirect.NORMAL) 的含义是什么？",
            options: [
                "不跟随重定向",
                "跟随除 HTTPS→HTTP 外的重定向",
                "跟随所有重定向",
                "只跟随 301 重定向"
            ],
            answer: 1,
            rationale: "Redirect.NORMAL 跟随重定向但不允许从 HTTPS 降级到 HTTP（安全考虑）。ALWAYS 跟随所有。"
        },
        {
            id: "jf-w7-3-q5",
            question: "如何发送 POST 请求体从文件读取？",
            options: [
                "POST(BodyPublishers.ofString(Files.readString(path)))",
                "POST(BodyPublishers.ofFile(path))",
                "POST(new File(path))",
                "POST().file(path)"
            ],
            answer: 1,
            rationale: "Oracle 文档：BodyPublishers.ofFile(Path) takes data from contents of a File——直接从文件创建请求体。"
        },
        {
            id: "jf-w7-3-q6",
            question: "BodyPublishers.ofInputStream 为什么接收 Supplier？",
            options: [
                "性能优化",
                "支持请求重试时重新获取流",
                "延迟加载",
                "线程安全"
            ],
            answer: 1,
            rationale: "Oracle 文档：Takes a Supplier<InputStream> for request retry support——请求重试时需要新的 InputStream。"
        },
        {
            id: "jf-w7-3-q7",
            question: "默认的重定向策略是什么？",
            options: [
                "ALWAYS",
                "NORMAL",
                "NEVER",
                "AUTO"
            ],
            answer: 2,
            rationale: "Oracle 文档：Default redirect policy is NEVER——默认不跟随重定向，需要显式配置 followRedirects。"
        },
        {
            id: "jf-w7-3-q8",
            question: "如何批量设置多个请求头？",
            options: [
                "多次调用 header()",
                "headers(k1, v1, k2, v2, ...)",
                "setHeaders(Map)",
                "addHeaders(List)"
            ],
            answer: 1,
            rationale: "HttpRequest.Builder.headers(String...) 接收 key-value 对批量设置请求头。"
        },
        {
            id: "jf-w7-3-q9",
            question: "连接超时在哪里设置？",
            options: [
                "HttpRequest.newBuilder().connectTimeout()",
                "HttpClient.newBuilder().connectTimeout()",
                "HttpResponse.connectTimeout()",
                "URI.create().timeout()"
            ],
            answer: 1,
            rationale: "connectTimeout 是客户端级别配置，在 HttpClient.Builder 设置，适用于该客户端所有请求。"
        },
        {
            id: "jf-w7-3-q10",
            question: "BodyPublishers.noBody() 的作用是什么？",
            options: [
                "删除请求体",
                "创建空请求体（用于 DELETE 等无体请求）",
                "验证请求无体",
                "忽略响应体"
            ],
            answer: 1,
            rationale: "noBody() 返回不发送任何请求体的发布者，用于 DELETE、HEAD 等不需要请求体的方法。"
        },
        {
            id: "jf-w7-3-q11",
            question: "如何实现 HTTP Basic 认证？",
            options: [
                "设置 Authorization 头为 Base64 编码的用户名密码",
                "使用 HttpClient.Builder.authenticator()",
                "两种方式都可以",
                "HTTP Client 不支持认证"
            ],
            answer: 2,
            rationale: "可以手动设置 Authorization 头，也可以使用 Authenticator 让客户端自动处理认证挑战。"
        },
        {
            id: "jf-w7-3-q12",
            question: "BodyPublishers.ofString 默认使用什么编码？",
            options: [
                "系统默认编码",
                "ISO-8859-1",
                "UTF-8",
                "ASCII"
            ],
            answer: 2,
            rationale: "Oracle 文档：ofString(String body) converts using UTF-8 character set——默认 UTF-8，可通过重载方法指定其他编码。"
        }
    ]
}
