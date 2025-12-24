import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week20Guides: Record<string, LessonGuide> = {
    "w20-1": {
        lessonId: "w20-1",
        background: [
            "【OAuth 2.0 定义】OAuth 2.0 是授权框架（RFC 6749），定义了四种角色：Resource Owner（资源所有者，通常是用户）、Client（请求资源的应用）、Authorization Server（颁发令牌）、Resource Server（托管受保护资源）。",
            "【四种授权类型】OAuth 2.0 定义四种授权流程：Authorization Code（最安全，用于 Web 应用）、Implicit（已废弃，用于纯前端）、Password Credentials（高信任场景）、Client Credentials（服务间通信）。",
            "【JWT 三部分结构】JWT 由三部分组成：Header（声明类型和签名算法）、Payload（包含 Claims）、Signature（防篡改签名）。每部分使用 Base64URL 编码，用点号分隔。",
            "【Claims 分类】JWT Payload 包含三类 Claims：Registered Claims（预定义如 iss、exp、sub、aud）、Public Claims（在 IANA 注册的自定义声明）、Private Claims（双方约定的私有声明）。",
            "【无状态认证】JWT 实现无状态认证：服务端不需要存储会话，从 Token 中直接获取用户信息。但无法主动撤销（需要黑名单或短过期时间 + Refresh Token）。"
        ],
        keyDifficulties: [
            "【Authorization Code + PKCE】移动和单页应用使用 Authorization Code with PKCE（Proof Key for Code Exchange）替代 Implicit Flow。PKCE 使用 code_verifier 和 code_challenge 防止授权码截获攻击。",
            "【JWT 安全警告】'Because signed tokens expose their content to anyone, developers should avoid storing sensitive information in the payload'。JWT 只防篡改不防窥视，敏感数据需要加密（JWE）或不放入 Token。",
            "【刷新令牌策略】Access Token 短有效期（分钟级），Refresh Token 长有效期（天/周级）。Refresh Token 只用于换取新 Access Token，应存储在安全位置。实现 Refresh Token Rotation 防止泄露。",
            "【验证 vs 校验】JWT Validation 检查格式和 Claims（过期时间、签发时间）；Verification 验证签名真实性和完整性。两者都需要执行。签名算法必须严格指定，避免 'alg: none' 攻击。"
        ],
        handsOnPath: [
            "实现 Authorization Code Flow：1) 重定向到 /authorize?response_type=code&client_id=xxx&redirect_uri=xxx&scope=xxx 2) 获取 code 3) POST /token 换取 access_token",
            "生成 JWT：const token = jwt.sign({ sub: userId, role: 'admin' }, secret, { expiresIn: '15m', issuer: 'api.example.com' });",
            "验证 JWT：jwt.verify(token, secret, { issuer: 'api.example.com', audience: 'app.example.com' });",
            "实现 Refresh Token 轮换：每次使用 Refresh Token 时生成新的 Refresh Token，旧的立即失效。",
            "实现 PKCE：生成 code_verifier（随机字符串）→ 计算 code_challenge = BASE64URL(SHA256(code_verifier)) → 授权请求带 code_challenge → Token 请求带 code_verifier"
        ],
        selfCheck: [
            "OAuth 2.0 的四种角色分别是什么？",
            "Authorization Code Flow 为什么比 Implicit Flow 更安全？",
            "JWT 的三部分结构是什么？",
            "为什么 JWT 签名只防篡改不防窥视？",
            "Refresh Token 的安全策略有哪些？"
        ],
        extensions: [
            "研究 OpenID Connect（OIDC）在 OAuth 2.0 上增加的身份层。",
            "学习 OAuth 2.1 草案的简化和安全增强。",
            "了解 JWT 的 JWE（加密）和 JWK（密钥分发）规范。",
            "研究 Token Binding 和 DPoP 防止 Token 盗用。"
        ],
        sourceUrls: [
            "https://datatracker.ietf.org/doc/html/rfc6749",
            "https://jwt.io/introduction",
            "https://oauth.net/2/oauth-best-practice/"
        ]
    },
    "w20-2": {
        lessonId: "w20-2",
        background: [
            "【限流核心概念】限流系统包含三个要素：Limit（时间窗口内允许的请求数）、Window（时间窗口大小）、Identifier（识别调用者的唯一属性，如用户 ID、IP 地址）。",
            "【固定窗口算法】Fixed Window Counter 将时间划分为固定间隔，每个间隔一个计数器。'Once the counter reaches the threshold, subsequent requests are blocked until the new time window begins'。缺点：窗口边界可能出现流量突刺。",
            "【滑动窗口算法】Sliding Window 解决固定窗口的边界问题：基于日志（精确但内存大）或基于计数器的加权（近似但高效）。滑动窗口提供更平滑的流量控制。",
            "【令牌桶算法】Token Bucket 以固定速率向桶中添加令牌，每个请求消耗一个令牌，桶满时新令牌丢弃。允许一定程度的突发流量（桶内累积的令牌），同时限制平均速率。",
            "【漏桶算法】Leaky Bucket 请求进入队列，以固定速率处理。无论输入流量多大，输出流量恒定。适合需要平滑流量的场景，但不允许任何突发。"
        ],
        keyDifficulties: [
            "【分布式限流挑战】单机限流简单，分布式限流需要共享状态。解决方案：1) 集中式存储（Redis）2) 每节点独立配额（总配额 / 节点数）3) 本地限流 + 全局限流两级防护。",
            "【Redis + Lua 原子操作】分布式限流需要原子操作：MULTI/EXEC 或 Lua 脚本。示例：INCR key → 如果首次则 EXPIRE → 检查是否超限。Lua 脚本确保原子性。",
            "【本地 vs 全局限流】Envoy 文档：'Local rate limiting can be used in conjunction with global rate limiting to reduce load on the global rate limiting service'。本地限流吸收突发，全局限流保护全局资源。",
            "【限流响应设计】被限流时返回 429 Too Many Requests，响应头包含：Retry-After（重试等待时间）、X-RateLimit-Limit（配额）、X-RateLimit-Remaining（剩余）、X-RateLimit-Reset（重置时间）。"
        ],
        handsOnPath: [
            "实现固定窗口：const key = `ratelimit:${userId}:${Math.floor(Date.now() / 60000)}`; const count = await redis.incr(key); if (count === 1) await redis.expire(key, 60);",
            "实现令牌桶：EVAL 'local tokens = redis.call(\"get\", KEYS[1]) or ARGV[2]; tokens = math.min(tokens + (now - lastRefill) * rate, maxTokens); if tokens >= 1 then tokens = tokens - 1; return 1 else return 0 end' ...",
            "配置 Envoy 全局限流：rate_limit_service: { grpc_service: { envoy_grpc: { cluster_name: rate_limit_cluster } } }",
            "实现限流响应头：res.set({ 'X-RateLimit-Limit': limit, 'X-RateLimit-Remaining': Math.max(0, limit - count), 'Retry-After': resetSeconds });",
            "实现分级限流：每用户 100 req/min，每 IP 1000 req/min，全局 10000 req/min。"
        ],
        selfCheck: [
            "固定窗口算法的边界问题是什么？",
            "令牌桶和漏桶算法的区别是什么？",
            "分布式限流有哪些实现方案？",
            "为什么使用 Lua 脚本实现限流？",
            "被限流时应该返回什么响应？"
        ],
        extensions: [
            "研究 Stripe 的分布式限流实现。",
            "学习 Envoy 的本地限流和全局限流配置。",
            "了解自适应限流（Adaptive Rate Limiting）。",
            "研究公平限流（Fair Queuing）算法。"
        ],
        sourceUrls: [
            "https://blog.bytebytego.com/p/rate-limiting-fundamentals",
            "https://redis.io/glossary/rate-limiting/",
            "https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/other_features/global_rate_limiting"
        ]
    },
    "w20-3": {
        lessonId: "w20-3",
        background: [
            "【OWASP API Security Top 10】2023 版 API 安全十大风险：BOLA（对象级授权失效）、Broken Authentication（认证失效）、BOPLA（对象属性级授权失效）、Unrestricted Resource Consumption（资源消耗无限制）、BFLA（功能级授权失效）等。",
            "【BOLA 最常见风险】Broken Object Level Authorization：'攻击者可通过操纵请求中发送的对象 ID 来利用易受攻击的 API 端点'。示例：修改 /shops/{shopName}/revenue 中的 shopName 访问其他店铺数据。",
            "【CORS 机制】跨域资源共享使用 HTTP 头控制跨域访问。简单请求直接发送；复杂请求先发 OPTIONS 预检。关键头：Access-Control-Allow-Origin、Access-Control-Allow-Methods、Access-Control-Allow-Headers。",
            "【预检请求】Preflight Request 在以下情况触发：非简单方法（PUT/DELETE）、自定义头（如 Authorization）、非简单 Content-Type（如 application/json）。服务端返回允许的方法和头部。",
            "【凭证请求安全】带凭证的跨域请求（cookies、Authorization header）必须满足：Access-Control-Allow-Credentials: true，且 Access-Control-Allow-Origin 不能是通配符 *，必须指定具体来源。"
        ],
        keyDifficulties: [
            "【BOLA 防护】防护措施：1) 每个函数检查用户对资源的访问权限 2) 使用不可预测的 ID（GUID 而非自增 ID）3) 编写授权测试 4) 实现基于策略的访问控制。",
            "【注入攻击防护】API 注入包括 SQL 注入、NoSQL 注入、命令注入、LDAP 注入。防护：参数化查询、ORM、输入验证和净化、最小权限原则。",
            "【API 版本与资产管理】OWASP API9 Improper Inventory Management：未下线的旧版本 API、未记录的端点、暴露的调试端点。需要 API 资产清单、版本生命周期管理。",
            "【第三方 API 消费】OWASP API10 Unsafe Consumption of APIs：信任来自第三方 API 的数据。应该验证和净化所有外部输入，即使来自'可信'的合作伙伴 API。"
        ],
        handsOnPath: [
            "实现对象级授权检查：const resource = await db.getResource(req.params.id); if (resource.ownerId !== req.user.id) throw new ForbiddenError();",
            "配置 CORS：app.use(cors({ origin: 'https://trusted.example.com', credentials: true, methods: ['GET', 'POST', 'PUT', 'DELETE'] }));",
            "实现输入验证：const schema = Joi.object({ email: Joi.string().email().required(), age: Joi.number().integer().min(0).max(150) }); const { error, value } = schema.validate(req.body);",
            "配置安全头：app.use(helmet({ contentSecurityPolicy: true, hsts: { maxAge: 31536000 } }));",
            "实现速率限制阻止枚举：限制 /users/{id} 端点每 IP 的请求频率，防止 ID 枚举攻击。"
        ],
        selfCheck: [
            "OWASP API Security Top 10 的前三位是什么？",
            "什么是 BOLA 攻击？如何防护？",
            "CORS 预检请求在什么情况下触发？",
            "为什么带凭证请求不能使用通配符 origin？",
            "如何防止 API 端点枚举攻击？"
        ],
        extensions: [
            "研究 OWASP ZAP 进行 API 安全测试。",
            "学习 API 安全网关的威胁防护能力。",
            "了解 GraphQL 特有的安全风险。",
            "研究 API 安全的合规要求（PCI DSS、GDPR）。"
        ],
        sourceUrls: [
            "https://owasp.org/API-Security/editions/2023/en/0x00-header/",
            "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html",
            "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
        ]
    },
    "w20-4": {
        lessonId: "w20-4",
        background: [
            "【API 网关安全层】API 网关提供统一的安全入口：认证授权、限流熔断、WAF 防护、Bot 检测、审计日志。将安全逻辑从业务服务中解耦。",
            "【WAF 核心概念】Web Application Firewall 检查 HTTP 请求：Web ACL（访问控制列表）定义规则、规则组可重用、托管规则提供预构建防护。支持 IP 匹配、地理匹配、速率限制、SQL 注入/XSS 检测。",
            "【Bot 检测】Bot Management 区分好机器人（搜索引擎爬虫）和恶意机器人（爬取、撞库、DDoS）。检测方法：行为分析、机器学习、JavaScript 挑战、CAPTCHA。Bot Score 表示请求来自机器人的可能性。",
            "【请求签名】API 请求签名验证请求完整性和来源：客户端用密钥签名请求（时间戳 + 方法 + 路径 + 参数 + Body），服务端验签。防止请求篡改和重放攻击。AWS Signature V4 是典型实现。",
            "【审计日志】记录所有 API 调用：谁（身份）在何时（时间戳）从哪里（IP、设备）对什么资源（端点、参数）做了什么操作（方法）结果如何（状态码）。用于合规审计、安全分析、问题排查。"
        ],
        keyDifficulties: [
            "【WAF 规则优先级】AWS WAF 规则按 Web ACL 中的顺序评估。优先级策略：1) 白名单规则优先 2) 黑名单规则其次 3) 托管规则再次 4) 默认动作最后。WCU（Web ACL Capacity Units）限制规则复杂度。",
            "【误报与漏报平衡】WAF 规则过严导致误报（正常请求被拦截），过松导致漏报（攻击未被检测）。需要监控和调优：分析被拦截请求、使用计数模式测试规则、逐步收紧。",
            "【Bot 检测挑战】高级机器人可以：模拟真实用户行为、执行 JavaScript、解决 CAPTCHA、使用住宅代理。防护需要多层：行为分析 + 设备指纹 + 机器学习 + 持续对抗。",
            "【审计日志安全】审计日志本身需要保护：不可篡改（Write-Once 存储）、访问控制（只有审计员可读）、完整性验证（哈希链或签名）、长期保存（合规要求通常 7 年）。"
        ],
        handsOnPath: [
            "配置 AWS WAF 规则：创建 Web ACL → 添加托管规则组（如 AWSManagedRulesCommonRuleSet）→ 添加自定义速率限制规则 → 关联到 API Gateway",
            "实现请求签名：const stringToSign = `${timestamp}\\n${method}\\n${path}\\n${queryString}\\n${bodyHash}`; const signature = hmacSha256(secret, stringToSign);",
            "验证签名：if (requestTime > now + 5min || requestTime < now - 5min) reject('时间戳过期'); if (computedSignature !== requestSignature) reject('签名无效');",
            "配置审计日志：记录 { requestId, userId, method, path, queryParams, statusCode, responseTime, clientIp, userAgent, timestamp }",
            "实现日志完整性：每条日志追加前一条的哈希，形成链式结构，定期对整体计算签名。"
        ],
        selfCheck: [
            "API 网关提供哪些安全能力？",
            "WAF Web ACL 中规则的评估顺序是什么？",
            "Bot 检测有哪些常用方法？",
            "请求签名如何防止重放攻击？",
            "审计日志应该包含哪些信息？"
        ],
        extensions: [
            "研究 Cloudflare Workers 实现边缘安全逻辑。",
            "学习 API 网关的限流熔断与服务降级。",
            "了解 Zero Trust 架构中的 API 安全。",
            "研究 API 网关的可观测性集成。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html",
            "https://developers.cloudflare.com/bots/",
            "https://cloud.google.com/api-gateway/docs/audit-logging"
        ]
    }
}

export const week20Quizzes: Record<string, QuizQuestion[]> = {
    "w20-1": [
        {
            id: "w20-1-q1",
            question: "OAuth 2.0 定义的四种角色不包括？",
            options: [
                "Resource Owner",
                "Client",
                "Token Issuer",
                "Authorization Server"
            ],
            answer: 2,
            rationale: "OAuth 2.0 四种角色：Resource Owner、Client、Authorization Server、Resource Server。没有 Token Issuer 这个角色。"
        },
        {
            id: "w20-1-q2",
            question: "哪种 OAuth 2.0 授权流程最适合服务间通信？",
            options: [
                "Authorization Code",
                "Implicit",
                "Client Credentials",
                "Password Credentials"
            ],
            answer: 2,
            rationale: "Client Credentials Flow 用于服务间通信，应用以自己的身份获取访问令牌，不涉及用户。"
        },
        {
            id: "w20-1-q3",
            question: "JWT 的三部分结构是什么？",
            options: [
                "Header、Body、Footer",
                "Header、Payload、Signature",
                "Type、Claims、Hash",
                "Algorithm、Data、Checksum"
            ],
            answer: 1,
            rationale: "JWT 由 Header（声明类型和算法）、Payload（Claims）、Signature（签名）三部分组成。"
        },
        {
            id: "w20-1-q4",
            question: "JWT Registered Claims 中 'exp' 表示什么？",
            options: [
                "签发者",
                "过期时间",
                "主题",
                "受众"
            ],
            answer: 1,
            rationale: "Registered Claims 包括：iss（issuer）、exp（expiration）、sub（subject）、aud（audience）。"
        },
        {
            id: "w20-1-q5",
            question: "为什么说 JWT 签名只防篡改不防窥视？",
            options: [
                "签名算法有缺陷",
                "JWT 使用 Base64URL 编码，内容可解码查看",
                "JWT 没有加密",
                "B 和 C 都对"
            ],
            answer: 3,
            rationale: "'Because signed tokens expose their content to anyone'——JWT 使用 Base64URL 编码（不是加密），任何人都可以解码查看内容。"
        },
        {
            id: "w20-1-q6",
            question: "PKCE 的主要作用是什么？",
            options: [
                "加密 Token",
                "防止授权码被截获利用",
                "提高性能",
                "简化流程"
            ],
            answer: 1,
            rationale: "PKCE（Proof Key for Code Exchange）使用 code_verifier 和 code_challenge 防止授权码截获攻击，特别适用于移动和单页应用。"
        },
        {
            id: "w20-1-q7",
            question: "Refresh Token 的正确使用方式是什么？",
            options: [
                "每次 API 请求都携带",
                "存储在 localStorage",
                "只用于换取新 Access Token，实现轮换机制",
                "公开分享给前端"
            ],
            answer: 2,
            rationale: "Refresh Token 只用于换取新 Access Token，应存储在安全位置，实现 Refresh Token Rotation 防止泄露。"
        },
        {
            id: "w20-1-q8",
            question: "JWT 验证（Verification）检查什么？",
            options: [
                "只检查格式",
                "只检查过期时间",
                "验证签名真实性和完整性",
                "只检查 Claims"
            ],
            answer: 2,
            rationale: "Verification 验证签名真实性和完整性，Validation 检查格式和 Claims（过期时间、签发时间）。两者都需要执行。"
        },
        {
            id: "w20-1-q9",
            question: "'alg: none' 攻击是什么？",
            options: [
                "DDoS 攻击",
                "攻击者将算法设为 none 绕过签名验证",
                "SQL 注入",
                "中间人攻击"
            ],
            answer: 1,
            rationale: "攻击者将 JWT Header 中的 alg 设为 'none'，如果服务端不严格校验算法，可能接受无签名的 Token。"
        },
        {
            id: "w20-1-q10",
            question: "Access Token 和 Refresh Token 的有效期设计原则是什么？",
            options: [
                "两者一样长",
                "Access Token 长，Refresh Token 短",
                "Access Token 短（分钟级），Refresh Token 长（天/周级）",
                "都应该永不过期"
            ],
            answer: 2,
            rationale: "Access Token 短有效期（分钟级）限制泄露影响，Refresh Token 长有效期（天/周级）减少重新登录频率。"
        },
        {
            id: "w20-1-q11",
            question: "Implicit Flow 为什么不推荐使用？",
            options: [
                "太复杂",
                "Token 直接暴露在 URL 中，容易泄露",
                "不支持刷新",
                "B 和 C 都对"
            ],
            answer: 3,
            rationale: "Implicit Flow 将 access_token 直接放在 URL fragment 中，容易通过浏览器历史、Referrer 等泄露，且不支持 Refresh Token。"
        },
        {
            id: "w20-1-q12",
            question: "JWT 中存储敏感信息的正确做法是什么？",
            options: [
                "直接放在 Payload 中",
                "使用 JWE 加密或不放入 Token",
                "Base64 编码",
                "使用更强的签名算法"
            ],
            answer: 1,
            rationale: "'Developers should avoid storing sensitive information in the payload'——敏感数据需要使用 JWE 加密，或者根本不放入 Token。"
        }
    ],
    "w20-2": [
        {
            id: "w20-2-q1",
            question: "限流系统的三个核心要素是什么？",
            options: [
                "用户、请求、响应",
                "Limit、Window、Identifier",
                "算法、存储、配置",
                "入口、处理、出口"
            ],
            answer: 1,
            rationale: "限流系统三要素：Limit（允许的请求数）、Window（时间窗口）、Identifier（识别调用者的唯一属性）。"
        },
        {
            id: "w20-2-q2",
            question: "固定窗口算法的主要缺点是什么？",
            options: [
                "实现复杂",
                "内存占用大",
                "窗口边界可能出现流量突刺",
                "不支持分布式"
            ],
            answer: 2,
            rationale: "固定窗口在窗口边界可能出现突刺：如果限制 100 req/min，在第一分钟最后一秒和第二分钟第一秒各发 100 个请求，实际 2 秒内有 200 个请求。"
        },
        {
            id: "w20-2-q3",
            question: "令牌桶算法的特点是什么？",
            options: [
                "不允许任何突发流量",
                "允许一定程度的突发流量",
                "输出流量完全恒定",
                "只能用于单机"
            ],
            answer: 1,
            rationale: "令牌桶允许一定程度的突发流量（桶内累积的令牌），同时限制平均速率。漏桶则输出流量恒定，不允许突发。"
        },
        {
            id: "w20-2-q4",
            question: "漏桶算法的输出特点是什么？",
            options: [
                "随输入变化",
                "以固定速率输出，无论输入多大",
                "突发输出",
                "无法预测"
            ],
            answer: 1,
            rationale: "Leaky Bucket 请求进入队列，以固定速率处理。无论输入流量多大，输出流量恒定。适合需要平滑流量的场景。"
        },
        {
            id: "w20-2-q5",
            question: "分布式限流为什么需要 Redis + Lua？",
            options: [
                "性能更好",
                "确保原子性，避免竞态条件",
                "节省内存",
                "简化代码"
            ],
            answer: 1,
            rationale: "分布式限流需要原子操作：INCR + EXPIRE 需要在一个原子操作中完成，否则可能出现竞态条件。Lua 脚本确保原子性。"
        },
        {
            id: "w20-2-q6",
            question: "被限流时应该返回什么 HTTP 状态码？",
            options: [
                "400 Bad Request",
                "403 Forbidden",
                "429 Too Many Requests",
                "503 Service Unavailable"
            ],
            answer: 2,
            rationale: "被限流时返回 429 Too Many Requests，响应头包含 Retry-After、X-RateLimit-* 等信息。"
        },
        {
            id: "w20-2-q7",
            question: "本地限流与全局限流的关系是什么？",
            options: [
                "只能二选一",
                "可以配合使用，本地限流减少全局限流服务负载",
                "全局限流更重要",
                "本地限流更准确"
            ],
            answer: 1,
            rationale: "Envoy 文档：'Local rate limiting can be used in conjunction with global rate limiting to reduce load on the global rate limiting service'。"
        },
        {
            id: "w20-2-q8",
            question: "滑动窗口算法相比固定窗口的优势是什么？",
            options: [
                "实现更简单",
                "内存更少",
                "解决边界突刺问题，提供更平滑的流量控制",
                "速度更快"
            ],
            answer: 2,
            rationale: "滑动窗口解决固定窗口的边界问题，提供更平滑的流量控制。"
        },
        {
            id: "w20-2-q9",
            question: "X-RateLimit-Remaining 响应头表示什么？",
            options: [
                "总配额",
                "当前窗口剩余配额",
                "重置时间",
                "重试等待时间"
            ],
            answer: 1,
            rationale: "X-RateLimit-Remaining 表示当前窗口剩余配额，X-RateLimit-Limit 表示总配额，X-RateLimit-Reset 表示重置时间。"
        },
        {
            id: "w20-2-q10",
            question: "分布式限流使用集中式存储（Redis）的优缺点是什么？",
            options: [
                "无缺点",
                "精确但增加了单点故障风险和网络延迟",
                "快但不精确",
                "只适合小规模"
            ],
            answer: 1,
            rationale: "集中式存储（Redis）提供精确的全局计数，但增加了单点故障风险和每次请求的网络往返延迟。"
        },
        {
            id: "w20-2-q11",
            question: "Envoy 全局限流服务使用什么协议？",
            options: [
                "REST API",
                "gRPC",
                "GraphQL",
                "WebSocket"
            ],
            answer: 1,
            rationale: "Envoy 集成 gRPC 限流服务，参考实现使用 Go 语言开发，后端采用 Redis。"
        },
        {
            id: "w20-2-q12",
            question: "分级限流的典型设计是什么？",
            options: [
                "只限制全局",
                "只限制用户",
                "每用户、每 IP、全局多层限制",
                "随机限制"
            ],
            answer: 2,
            rationale: "分级限流通常包括：每用户限流（防止单用户滥用）、每 IP 限流（防止未认证攻击）、全局限流（保护系统容量）。"
        }
    ],
    "w20-3": [
        {
            id: "w20-3-q1",
            question: "OWASP API Security Top 10 2023 排名第一的风险是什么？",
            options: [
                "Broken Authentication",
                "Broken Object Level Authorization (BOLA)",
                "Injection",
                "Security Misconfiguration"
            ],
            answer: 1,
            rationale: "API1:2023 是 Broken Object Level Authorization (BOLA)，攻击者通过操纵对象 ID 访问未授权资源。"
        },
        {
            id: "w20-3-q2",
            question: "BOLA 攻击的典型示例是什么？",
            options: [
                "SQL 注入",
                "修改 URL 中的对象 ID 访问其他用户数据",
                "暴力破解密码",
                "XSS 攻击"
            ],
            answer: 1,
            rationale: "'攻击者可通过操纵请求中发送的对象 ID 来利用易受攻击的 API 端点'，如修改 /shops/{shopName}/revenue 中的 shopName。"
        },
        {
            id: "w20-3-q3",
            question: "CORS 预检请求在什么情况下触发？",
            options: [
                "所有跨域请求",
                "非简单方法、自定义头、非简单 Content-Type",
                "只有 POST 请求",
                "只有认证请求"
            ],
            answer: 1,
            rationale: "预检请求触发条件：非简单方法（PUT/DELETE）、自定义头（如 Authorization）、非简单 Content-Type（如 application/json）。"
        },
        {
            id: "w20-3-q4",
            question: "带凭证的跨域请求有什么限制？",
            options: [
                "无限制",
                "Access-Control-Allow-Origin 不能是通配符 *",
                "必须使用 HTTPS",
                "只支持 GET 请求"
            ],
            answer: 1,
            rationale: "带凭证请求的响应中，Access-Control-Allow-Origin、Access-Control-Allow-Methods、Access-Control-Allow-Headers 都不能使用通配符 *。"
        },
        {
            id: "w20-3-q5",
            question: "防止 BOLA 攻击的有效措施是什么？",
            options: [
                "使用 HTTPS",
                "在每个函数中检查用户对资源的访问权限",
                "增加密码强度",
                "使用 CAPTCHA"
            ],
            answer: 1,
            rationale: "BOLA 防护：每个函数检查用户访问权限、使用不可预测的 ID（GUID）、编写授权测试。"
        },
        {
            id: "w20-3-q6",
            question: "Access-Control-Max-Age 头的作用是什么？",
            options: [
                "设置 Token 过期时间",
                "设置预检请求结果的缓存时间",
                "设置响应缓存时间",
                "设置 Cookie 过期时间"
            ],
            answer: 1,
            rationale: "Access-Control-Max-Age 指定预检请求结果可以缓存多长时间（秒），减少预检请求次数。"
        },
        {
            id: "w20-3-q7",
            question: "OWASP API9 Improper Inventory Management 指什么？",
            options: [
                "库存管理错误",
                "未下线的旧版本 API、未记录的端点、暴露的调试端点",
                "资产丢失",
                "内存泄漏"
            ],
            answer: 1,
            rationale: "API9 指 API 资产管理不当：未下线的旧版本 API、未记录的端点、暴露的调试端点等。"
        },
        {
            id: "w20-3-q8",
            question: "为什么使用 GUID 而非自增 ID？",
            options: [
                "性能更好",
                "不可预测，防止 ID 枚举攻击",
                "节省存储",
                "更易读"
            ],
            answer: 1,
            rationale: "GUID 不可预测，攻击者无法通过递增 ID 枚举资源。自增 ID 容易被猜测：如果看到 id=100，可以尝试 id=99、id=101。"
        },
        {
            id: "w20-3-q9",
            question: "API 注入攻击的防护措施是什么？",
            options: [
                "增加限流",
                "参数化查询、ORM、输入验证",
                "使用 HTTPS",
                "增加认证"
            ],
            answer: 1,
            rationale: "API 注入防护：参数化查询（防 SQL 注入）、使用 ORM、输入验证和净化、最小权限原则。"
        },
        {
            id: "w20-3-q10",
            question: "OWASP API10 Unsafe Consumption of APIs 指什么？",
            options: [
                "API 调用太多",
                "盲目信任来自第三方 API 的数据",
                "API 响应太慢",
                "API 版本过旧"
            ],
            answer: 1,
            rationale: "API10 指信任来自第三方 API 的数据。应该验证和净化所有外部输入，即使来自'可信'的合作伙伴 API。"
        },
        {
            id: "w20-3-q11",
            question: "CORS 简单请求的 Content-Type 限制是什么？",
            options: [
                "只有 application/json",
                "application/x-www-form-urlencoded、multipart/form-data、text/plain",
                "任意类型",
                "只有 text/html"
            ],
            answer: 1,
            rationale: "简单请求的 Content-Type 只能是：application/x-www-form-urlencoded、multipart/form-data、text/plain。"
        },
        {
            id: "w20-3-q12",
            question: "Access-Control-Expose-Headers 的作用是什么？",
            options: [
                "设置允许的请求头",
                "设置 JavaScript 可以访问的响应头",
                "设置缓存头",
                "设置安全头"
            ],
            answer: 1,
            rationale: "Access-Control-Expose-Headers 指定哪些响应头可以被 JavaScript 的 Response.headers 访问。"
        }
    ],
    "w20-4": [
        {
            id: "w20-4-q1",
            question: "API 网关提供的安全能力不包括？",
            options: [
                "认证授权",
                "限流熔断",
                "数据库优化",
                "WAF 防护"
            ],
            answer: 2,
            rationale: "API 网关安全能力：认证授权、限流熔断、WAF 防护、Bot 检测、审计日志。数据库优化不是网关职责。"
        },
        {
            id: "w20-4-q2",
            question: "WAF Web ACL 的作用是什么？",
            options: [
                "存储用户数据",
                "定义和应用保护规则",
                "负载均衡",
                "缓存响应"
            ],
            answer: 1,
            rationale: "Web ACL（Web 访问控制列表）是 AWS WAF 的基础配置单元，用于定义和应用保护规则到受保护资源。"
        },
        {
            id: "w20-4-q3",
            question: "Bot 检测的常用方法不包括？",
            options: [
                "行为分析",
                "JavaScript 挑战",
                "SQL 查询",
                "机器学习"
            ],
            answer: 2,
            rationale: "Bot 检测方法：行为分析、机器学习、JavaScript 挑战、CAPTCHA、设备指纹。SQL 查询不是 Bot 检测方法。"
        },
        {
            id: "w20-4-q4",
            question: "请求签名如何防止重放攻击？",
            options: [
                "使用 HTTPS",
                "签名中包含时间戳，服务端检查时间戳是否在有效窗口内",
                "增加密码强度",
                "使用 CAPTCHA"
            ],
            answer: 1,
            rationale: "请求签名包含时间戳，服务端检查时间戳是否在有效窗口内（如 ±5 分钟）。过期的签名会被拒绝，防止重放。"
        },
        {
            id: "w20-4-q5",
            question: "审计日志应该包含哪些信息？",
            options: [
                "只有时间戳",
                "谁、何时、从哪里、对什么资源、做了什么、结果如何",
                "只有错误信息",
                "只有用户 ID"
            ],
            answer: 1,
            rationale: "审计日志记录：谁（身份）在何时（时间戳）从哪里（IP、设备）对什么资源（端点、参数）做了什么操作（方法）结果如何（状态码）。"
        },
        {
            id: "w20-4-q6",
            question: "WAF 规则评估顺序的最佳实践是什么？",
            options: [
                "随机顺序",
                "白名单 → 黑名单 → 托管规则 → 默认动作",
                "黑名单优先",
                "托管规则优先"
            ],
            answer: 1,
            rationale: "WAF 规则优先级策略：1) 白名单规则优先 2) 黑名单规则其次 3) 托管规则再次 4) 默认动作最后。"
        },
        {
            id: "w20-4-q7",
            question: "WAF 误报的含义是什么？",
            options: [
                "攻击未被检测",
                "正常请求被错误拦截",
                "规则配置错误",
                "系统崩溃"
            ],
            answer: 1,
            rationale: "误报（False Positive）指正常请求被错误拦截，漏报（False Negative）指攻击未被检测。需要在两者间平衡。"
        },
        {
            id: "w20-4-q8",
            question: "Bot Score 的含义是什么？",
            options: [
                "机器人数量",
                "请求来自机器人的可能性分数",
                "机器人类型",
                "检测时间"
            ],
            answer: 1,
            rationale: "Bot Score 表示请求来自机器人的可能性，通常是 0-100 的分数。分数越高，越可能是机器人。"
        },
        {
            id: "w20-4-q9",
            question: "审计日志的不可篡改性如何保证？",
            options: [
                "使用加密",
                "使用 Write-Once 存储、哈希链或签名",
                "定期备份",
                "访问控制"
            ],
            answer: 1,
            rationale: "审计日志不可篡改性：Write-Once 存储（只写不改）、哈希链（每条日志包含前一条的哈希）、数字签名。"
        },
        {
            id: "w20-4-q10",
            question: "AWS WAF WCU 的含义是什么？",
            options: [
                "Web Cache Unit",
                "Web ACL Capacity Units，测量规则复杂度",
                "WAF Configuration Update",
                "Web Connection Unit"
            ],
            answer: 1,
            rationale: "WCU（Web ACL Capacity Units）测量规则复杂度，限制 Web ACL 中规则的总复杂度。"
        },
        {
            id: "w20-4-q11",
            question: "高级机器人的对抗能力不包括？",
            options: [
                "模拟真实用户行为",
                "执行 JavaScript",
                "突破物理防火墙",
                "使用住宅代理"
            ],
            answer: 2,
            rationale: "高级机器人可以：模拟真实用户行为、执行 JavaScript、解决 CAPTCHA、使用住宅代理。但不能突破物理防火墙。"
        },
        {
            id: "w20-4-q12",
            question: "请求签名的典型实现是什么？",
            options: [
                "只用用户名密码",
                "HMAC-SHA256 签名包含时间戳、方法、路径、参数",
                "只用 Token",
                "只用 IP 验证"
            ],
            answer: 1,
            rationale: "请求签名典型实现：stringToSign = timestamp + method + path + queryString + bodyHash，signature = HMAC-SHA256(secret, stringToSign)。"
        }
    ]
}
