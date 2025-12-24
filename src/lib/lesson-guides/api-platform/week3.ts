import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "api-w3-1": {
        lessonId: "api-w3-1",
        background: [
            "【OWASP API Security Top 10】2023 年版本列出 API 十大安全风险：BOLA（对象级授权破坏）占 API 攻击的 40%，是最常见威胁；其他包括认证破坏、对象属性级授权破坏、资源消耗不受限等。",
            "【OAuth 2.0 安全实践】RFC 9700 更新了 OAuth 2.0 安全最佳实践：所有客户端应使用 PKCE（Proof Key for Code Exchange）防止授权码拦截攻击，公共客户端（移动端、SPA）必须使用。",
            "【认证 vs 授权】认证（Authentication）验证用户身份——你是谁；授权（Authorization）验证用户权限——你能做什么。两者必须分开处理，认证通过不代表有授权。",
            "【API Key vs OAuth2】API Key 适合机器对机器的简单场景，但无法限制权限范围；OAuth2 支持细粒度的 scope 控制，适合需要用户授权的场景。敏感操作应使用 OAuth2。",
            "【JWT 安全】JWT 令牌应该：设置合理的过期时间、验证签名算法（避免 alg=none 攻击）、验证 iss/aud/exp 声明、不存储敏感数据在 payload（因为只是编码非加密）。",
            "【最小权限原则】RFC 9700 强调：访问令牌的权限应限制到最小必需。这防止客户端超越资源所有者授权的权限，降低令牌泄露的影响。"
        ],
        keyDifficulties: [
            "【BOLA 防护】Broken Object Level Authorization：确保每个 API 端点都验证用户是否有权访问请求的对象。不能仅依赖客户端传递的对象 ID，必须验证所有权。",
            "【重定向 URI 验证】OAuth2 重定向 URI 验证不足会导致授权码或令牌被窃取。必须精确匹配注册的 redirect_uri，不能使用通配符或宽松的模式匹配。",
            "【令牌存储】访问令牌和刷新令牌必须安全存储，永不明文传输。浏览器中应使用 HttpOnly Cookie 或安全的 session storage，移动端使用系统 keychain。",
            "【CSRF 防护】OAuth2 流程中必须使用 state 参数携带一次性 CSRF 令牌，并与用户会话绑定。服务器必须验证返回的 state 与发送的一致。",
            "【令牌绑定】RFC 9700 建议使用发送者约束（Sender-Constraining）机制如 mTLS 或 DPoP 防止令牌重放。刷新令牌应该绑定发送者或使用轮换机制。"
        ],
        handsOnPath: [
            "实现 OAuth2 Authorization Code Flow + PKCE：生成 code_verifier 和 code_challenge，在授权请求和令牌交换中使用，防止授权码拦截。",
            "配置 JWT 验证：验证签名（禁止 alg=none）、验证 issuer、验证 audience、检查过期时间，使用成熟的 JWT 库而非自行实现。",
            "实现对象级授权：在每个 API 端点验证用户是否有权访问请求的资源，使用中间件统一处理授权逻辑。",
            "设置 OAuth2 客户端：注册 redirect_uri 白名单、配置允许的 scope、启用 PKCE 要求、设置令牌过期时间。",
            "实现 API Key 认证：为机器客户端生成唯一 API Key，支持按 key 限流，记录使用日志用于审计。",
            "配置令牌安全存储：使用 HttpOnly + Secure + SameSite Cookie 存储令牌，或使用 BFF（Backend For Frontend）模式管理令牌。"
        ],
        selfCheck: [
            "OWASP API Security Top 10 2023 的第一大风险是什么？如何防护？",
            "OAuth2 中为什么所有客户端都应该使用 PKCE？",
            "API Key 和 OAuth2 各适合什么场景？",
            "JWT 验证时需要检查哪些声明？为什么？",
            "什么是 BOLA（Broken Object Level Authorization）？如何防护？",
            "OAuth2 的 state 参数有什么作用？"
        ],
        extensions: [
            "学习 OpenID Connect (OIDC) 协议，了解其在 OAuth2 基础上添加的身份层。",
            "研究 mTLS（双向 TLS）认证，适用于服务对服务的高安全场景。",
            "探索零信任架构中的 API 安全实践，包括持续验证和最小权限。",
            "学习 PASETO（Platform-Agnostic Security Tokens）作为 JWT 的替代方案。"
        ],
        sourceUrls: [
            "https://roadmap.sh/api-security-best-practices",
            "https://datatracker.ietf.org/doc/html/rfc6819",
            "https://owasp.org/API-Security/"
        ]
    },
    "api-w3-2": {
        lessonId: "api-w3-2",
        background: [
            "【输入验证时机】OWASP 建议：'Input validation should happen as early as possible in the data flow'——输入验证应在数据流最早阶段进行，最好在收到外部数据时立即验证。",
            "【白名单优于黑名单】黑名单方式有根本缺陷——攻击者容易绕过针对特定字符的过滤。白名单方式定义什么是被允许的，其他一切默认不允许。",
            "【语法 vs 语义验证】输入验证包含两层：语法验证（格式是否正确，如日期格式）和语义验证（业务逻辑是否合理，如结束日期不能早于开始日期）。",
            "【速率限制】OWASP API4:2023 Unrestricted Resource Consumption：API 必须限制请求频率、响应大小、执行时间，防止 DoS 和资源滥用。常用算法有令牌桶、滑动窗口等。",
            "【服务端验证必需】客户端 JavaScript 验证仅用于用户体验，可以被绕过。服务端验证是必需的安全控制，两者不能相互替代。",
            "【审计日志】高风险操作必须记录审计日志：谁（用户/系统）在什么时间对什么资源做了什么操作，结果如何。日志应包含足够信息支持安全调查。"
        ],
        keyDifficulties: [
            "【注入攻击防护】输入验证补充但不能替代主要防御。SQL 注入需要参数化查询，XSS 需要输出编码，命令注入需要避免 shell 调用。输入验证是额外防线。",
            "【文件上传安全】文件上传需要：扩展名白名单、随机重命名、内容扫描、正确的 Content-Type 响应、隔离存储。不能信任客户端提供的文件名或类型。",
            "【Unicode 处理】自由文本输入不能简单过滤字符。应使用 Unicode 规范化、字符类别白名单（字母、数字）、选择性允许特定字符。避免破坏合法输入如 O'Brian。",
            "【限流粒度】限流可以在多个层面：全局（所有请求）、用户级（每用户）、IP 级、端点级。不同层面组合使用，敏感操作应有更严格限制。",
            "【日志安全】审计日志不能包含敏感数据（密码、令牌、PII）。应使用结构化日志格式便于分析，确保日志不可篡改，保留足够时间满足合规要求。"
        ],
        handsOnPath: [
            "实现输入验证中间件：使用 JSON Schema 或验证库（如 Joi、Zod）定义请求体 Schema，在控制器前统一验证。",
            "配置 API 网关限流：在 Nginx/Kong/Envoy 配置请求速率限制，设置不同端点的限制阈值，返回 429 Too Many Requests。",
            "实现参数化查询：使用 ORM 或预处理语句防止 SQL 注入，避免字符串拼接构建查询。",
            "设置审计日志：为敏感操作（登录、数据修改、权限变更）记录结构化日志，包含用户、时间、操作、结果、IP 地址。",
            "实现文件上传验证：限制文件类型和大小，使用 UUID 重命名，扫描文件内容，存储到隔离目录。",
            "配置 WAF 规则：在 API 网关前部署 WAF，配置 OWASP ModSecurity 规则集，阻止常见攻击模式。"
        ],
        selfCheck: [
            "为什么白名单验证优于黑名单验证？",
            "客户端验证和服务端验证各有什么作用？能否只用一种？",
            "输入验证能否完全防止 SQL 注入？还需要什么防护措施？",
            "API 限流有哪些常用算法？如何选择限流粒度？",
            "审计日志应该包含哪些信息？不应该包含什么？",
            "文件上传需要哪些安全验证？"
        ],
        extensions: [
            "学习 GraphQL 的输入验证和查询复杂度限制，对比 REST API 的差异。",
            "研究 WAF（Web Application Firewall）的工作原理和常见规则集。",
            "探索 SIEM（Security Information and Event Management）系统的日志分析能力。",
            "学习 API 网关的高级安全功能：bot 检测、异常检测、地理封锁。"
        ],
        sourceUrls: [
            "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html",
            "https://docs.nginx.com/nginx/admin-guide/security-controls/controlling-access-by-key/",
            "https://roadmap.sh/api-security-best-practices"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "api-w3-1": [
        {
            id: "api-w3-1-q1",
            question: "OWASP API Security Top 10 2023 的第一大风险是什么？",
            options: [
                "SQL 注入",
                "Broken Object Level Authorization (BOLA)",
                "跨站脚本 (XSS)",
                "不安全的直接对象引用"
            ],
            answer: 1,
            rationale: "BOLA（对象级授权破坏）占 API 攻击的约 40%，自 2019 年以来一直是 OWASP API 安全的第一大风险。"
        },
        {
            id: "api-w3-1-q2",
            question: "RFC 9700 建议所有 OAuth2 客户端使用什么机制？",
            options: [
                "只使用 client_secret",
                "PKCE (Proof Key for Code Exchange)",
                "只使用 API Key",
                "基本认证"
            ],
            answer: 1,
            rationale: "RFC 9700 建议所有客户端使用 PKCE，特别是公共客户端（移动端、SPA）必须使用，防止授权码拦截攻击。"
        },
        {
            id: "api-w3-1-q3",
            question: "OAuth2 中 state 参数的主要作用是什么？",
            options: [
                "存储用户数据",
                "防止 CSRF 攻击",
                "加密令牌",
                "设置过期时间"
            ],
            answer: 1,
            rationale: "OAuth2 的 state 参数用于携带一次性 CSRF 令牌，与用户会话绑定，服务器验证返回的 state 与发送的一致以防止 CSRF 攻击。"
        },
        {
            id: "api-w3-1-q4",
            question: "JWT 验证时必须检查哪些内容？",
            options: [
                "只检查签名",
                "签名、issuer、audience、过期时间",
                "只检查过期时间",
                "只检查 payload 内容"
            ],
            answer: 1,
            rationale: "JWT 验证必须检查：签名（禁止 alg=none）、issuer（签发者）、audience（接收者）、exp（过期时间）等声明，防止伪造和过期令牌。"
        },
        {
            id: "api-w3-1-q5",
            question: "什么是 BOLA 攻击？",
            options: [
                "暴力破解密码",
                "用户访问其无权访问的对象，API 未验证对象所有权",
                "SQL 注入攻击",
                "跨站脚本攻击"
            ],
            answer: 1,
            rationale: "BOLA（Broken Object Level Authorization）：API 端点未验证用户是否有权访问请求的对象，攻击者可以通过修改对象 ID 访问他人数据。"
        },
        {
            id: "api-w3-1-q6",
            question: "API Key 和 OAuth2 各适合什么场景？",
            options: [
                "都适合所有场景",
                "API Key 适合简单的机器对机器场景，OAuth2 适合需要用户授权和细粒度权限的场景",
                "OAuth2 只适合移动应用",
                "API Key 更安全"
            ],
            answer: 1,
            rationale: "API Key 适合机器对机器的简单场景但无法限制权限范围；OAuth2 支持细粒度的 scope 控制，适合需要用户授权的场景。"
        },
        {
            id: "api-w3-1-q7",
            question: "OAuth2 redirect_uri 验证应该使用什么策略？",
            options: [
                "通配符匹配",
                "精确匹配注册的 URI",
                "前缀匹配",
                "不需要验证"
            ],
            answer: 1,
            rationale: "redirect_uri 必须精确匹配注册的 URI，不能使用通配符或宽松的模式匹配。验证不足会导致授权码或令牌被攻击者窃取。"
        },
        {
            id: "api-w3-1-q8",
            question: "浏览器中应该如何安全存储访问令牌？",
            options: [
                "存储在 localStorage",
                "使用 HttpOnly + Secure + SameSite Cookie 或 BFF 模式",
                "存储在 URL 参数中",
                "存储在全局变量中"
            ],
            answer: 1,
            rationale: "浏览器中应使用 HttpOnly Cookie（防止 JS 访问）+ Secure（仅 HTTPS）+ SameSite（防止 CSRF），或使用 BFF 模式在服务端管理令牌。"
        },
        {
            id: "api-w3-1-q9",
            question: "JWT 为什么不应该存储敏感数据？",
            options: [
                "会增加令牌大小",
                "payload 只是 Base64 编码，非加密，任何人都可以解码查看",
                "会导致性能问题",
                "签名会失效"
            ],
            answer: 1,
            rationale: "JWT 的 payload 只是 Base64 编码而非加密，任何人都可以解码查看内容。敏感数据应存储在服务端，JWT 只存储必要的标识信息。"
        },
        {
            id: "api-w3-1-q10",
            question: "RFC 9700 建议使用什么机制防止令牌重放？",
            options: [
                "缩短过期时间",
                "发送者约束机制如 mTLS 或 DPoP",
                "增加令牌长度",
                "使用 HTTP 而非 HTTPS"
            ],
            answer: 1,
            rationale: "RFC 9700 建议使用发送者约束（Sender-Constraining）机制如 mTLS 或 DPoP 防止令牌重放，将令牌绑定到特定客户端。"
        },
        {
            id: "api-w3-1-q11",
            question: "OWASP API3:2023 是什么风险？",
            options: [
                "认证破坏",
                "对象属性级授权破坏（合并了过度数据暴露和批量赋值）",
                "SQL 注入",
                "跨站请求伪造"
            ],
            answer: 1,
            rationale: "API3:2023 Broken Object Property Level Authorization 合并了 2019 版的 Excessive Data Exposure 和 Mass Assignment，强调对象属性级别的细粒度访问控制。"
        },
        {
            id: "api-w3-1-q12",
            question: "最小权限原则在 OAuth2 中如何体现？",
            options: [
                "使用最长的令牌过期时间",
                "访问令牌的权限（scope）应限制到最小必需",
                "给所有用户相同权限",
                "不使用 scope"
            ],
            answer: 1,
            rationale: "RFC 9700 强调访问令牌的权限应限制到最小必需，防止客户端超越授权权限，降低令牌泄露的影响范围。"
        }
    ],
    "api-w3-2": [
        {
            id: "api-w3-2-q1",
            question: "OWASP 建议输入验证应该在什么时候进行？",
            options: [
                "在数据库写入之前",
                "在数据流最早阶段，收到外部数据时立即验证",
                "在返回响应之前",
                "只在客户端进行"
            ],
            answer: 1,
            rationale: "OWASP 建议：'Input validation should happen as early as possible in the data flow'——在收到外部数据时立即验证，越早越好。"
        },
        {
            id: "api-w3-2-q2",
            question: "为什么白名单验证优于黑名单验证？",
            options: [
                "白名单更容易实现",
                "黑名单容易被绕过，白名单定义什么是允许的，其他默认不允许",
                "白名单性能更好",
                "没有区别"
            ],
            answer: 1,
            rationale: "黑名单方式有根本缺陷——攻击者容易绕过针对特定字符的过滤。白名单定义什么是被允许的，其他一切默认不允许，更加安全。"
        },
        {
            id: "api-w3-2-q3",
            question: "客户端验证和服务端验证的关系是什么？",
            options: [
                "只需要客户端验证",
                "客户端验证用于 UX，服务端验证是必需的安全控制，两者不能替代",
                "只需要服务端验证",
                "两者完全相同"
            ],
            answer: 1,
            rationale: "客户端 JavaScript 验证仅用于用户体验，可以被绕过。服务端验证是必需的安全控制，两者都需要但目的不同，不能相互替代。"
        },
        {
            id: "api-w3-2-q4",
            question: "输入验证能否完全防止 SQL 注入？",
            options: [
                "可以，只要验证足够严格",
                "不能，必须使用参数化查询/预处理语句，输入验证只是额外防线",
                "可以，使用正则表达式过滤",
                "不需要防止 SQL 注入"
            ],
            answer: 1,
            rationale: "输入验证补充但不能替代主要防御。SQL 注入必须使用参数化查询/预处理语句，输入验证只是额外防线。"
        },
        {
            id: "api-w3-2-q5",
            question: "文件上传需要哪些安全验证？",
            options: [
                "只验证文件大小",
                "扩展名白名单、随机重命名、内容扫描、正确 Content-Type、隔离存储",
                "只验证扩展名",
                "信任客户端提供的文件类型"
            ],
            answer: 1,
            rationale: "文件上传需要：扩展名白名单、随机重命名、内容扫描、正确的 Content-Type 响应、隔离存储。不能信任客户端提供的文件名或类型。"
        },
        {
            id: "api-w3-2-q6",
            question: "API 限流返回什么 HTTP 状态码？",
            options: [
                "400 Bad Request",
                "429 Too Many Requests",
                "503 Service Unavailable",
                "401 Unauthorized"
            ],
            answer: 1,
            rationale: "当请求超过速率限制时，API 应返回 429 Too Many Requests 状态码，通常还包含 Retry-After 头指示客户端何时可以重试。"
        },
        {
            id: "api-w3-2-q7",
            question: "审计日志不应该包含什么信息？",
            options: [
                "用户标识",
                "密码、令牌、PII 等敏感数据",
                "操作时间",
                "操作结果"
            ],
            answer: 1,
            rationale: "审计日志不能包含敏感数据如密码、访问令牌、PII（个人身份信息）。这些信息泄露会造成严重安全风险。"
        },
        {
            id: "api-w3-2-q8",
            question: "OWASP API4:2023 Unrestricted Resource Consumption 指什么？",
            options: [
                "内存泄漏",
                "API 未限制请求频率、响应大小、执行时间，可能导致 DoS",
                "数据库连接泄漏",
                "日志过多"
            ],
            answer: 1,
            rationale: "API4:2023 指 API 未限制资源消耗（请求频率、响应大小、执行时间），可能被滥用导致拒绝服务（DoS）或高额费用。"
        },
        {
            id: "api-w3-2-q9",
            question: "处理 Unicode 自由文本输入时应该怎么做？",
            options: [
                "过滤所有特殊字符",
                "使用 Unicode 规范化、字符类别白名单、选择性允许特定字符",
                "禁止 Unicode",
                "转换为 ASCII"
            ],
            answer: 1,
            rationale: "自由文本不能简单过滤字符（会破坏合法输入如 O'Brian）。应使用 Unicode 规范化、字符类别白名单（字母、数字）、选择性允许特定字符。"
        },
        {
            id: "api-w3-2-q10",
            question: "限流可以在哪些粒度进行？",
            options: [
                "只能全局限流",
                "全局、用户级、IP 级、端点级，不同层面组合使用",
                "只能按 IP 限流",
                "只能按用户限流"
            ],
            answer: 1,
            rationale: "限流可以在多个层面：全局（所有请求）、用户级（每用户）、IP 级、端点级。不同层面组合使用，敏感操作应有更严格限制。"
        },
        {
            id: "api-w3-2-q11",
            question: "语法验证和语义验证的区别是什么？",
            options: [
                "没有区别",
                "语法验证检查格式正确性，语义验证检查业务逻辑合理性",
                "语法验证更重要",
                "语义验证是可选的"
            ],
            answer: 1,
            rationale: "语法验证检查格式是否正确（如日期格式）；语义验证检查业务逻辑是否合理（如结束日期不能早于开始日期）。两者都必需。"
        },
        {
            id: "api-w3-2-q12",
            question: "WAF 在 API 安全中的作用是什么？",
            options: [
                "替代输入验证",
                "在 API 网关前提供额外防护层，阻止常见攻击模式",
                "只用于静态网站",
                "替代认证"
            ],
            answer: 1,
            rationale: "WAF（Web Application Firewall）在 API 网关前部署，使用规则集（如 OWASP ModSecurity）阻止常见攻击模式，提供额外防护层。"
        }
    ]
}
