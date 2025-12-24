import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "bp-w11-1": {
        lessonId: "bp-w11-1",
        background: [
            "【加密的 CPU 开销】加密算法消耗 CPU 资源。RSA 2048 位密钥的签名操作约需 1-2ms；AES-256-GCM 在无硬件加速时约 1GB/s，有 AES-NI 时可达 10GB/s 以上。",
            "【非对称 vs 对称加密】RSA 等非对称加密远慢于 AES 等对称加密。TLS 握手使用非对称加密协商会话密钥，后续通信使用对称加密，这是性能与安全的平衡。",
            "【AES-NI 硬件加速】Intel AES-NI 指令集提供硬件级 AES 加速，性能提升 10-100 倍。使用 openssl speed aes-256-gcm 可测试当前系统的加密性能。",
            "【椭圆曲线密码学】ECDSA/ECDH 比 RSA 在同等安全级别下密钥更短、运算更快。256 位 ECC 等效于 3072 位 RSA。现代 TLS 配置推荐使用 ECDHE 密钥交换。",
            "【密码哈希函数】bcrypt、Argon2 等密码哈希函数故意设计成慢速，防止暴力破解。登录验证时每次调用约 100-500ms，高并发登录可能成为瓶颈。",
            "【加密算法选择】CloudFlare 文档：在支持 AES-NI 的服务器上使用 AES-GCM；在移动设备等无硬件加速场景使用 ChaCha20-Poly1305，它的软件实现更快。"
        ],
        keyDifficulties: [
            "【密钥长度权衡】更长的密钥更安全但更慢。RSA 4096 比 2048 慢约 6 倍。应根据数据敏感度和保护期限选择合适的密钥长度。",
            "【批量加密优化】对大量小数据加密时，初始化开销占比大。可以复用加密上下文（如 AES-GCM 的 nonce 派生），减少 key schedule 开销。",
            "【加密卸载】Nginx 支持 SSL 硬件加速卡；AWS 提供 CloudHSM 和 Nitro System 卸载加密；CDN 在边缘终止 TLS 减轻源站负担。",
            "【bcrypt 并发问题】bcrypt 是 CPU 密集型操作。高并发登录验证时，bcrypt 可能耗尽 CPU。可以使用队列限流，或分离认证服务独立扩容。",
            "【加密与压缩顺序】先压缩后加密可以减少需要加密的数据量，提高性能。但对 TLS 流量先压缩可能导致 CRIME 攻击，应禁用 TLS 压缩。"
        ],
        handsOnPath: [
            "测试加密性能：使用 openssl speed -evp aes-256-gcm 测试 AES 吞吐量；openssl speed rsa2048 测试 RSA 签名/验证速度。",
            "检查 AES-NI 支持：cat /proc/cpuinfo | grep aes 确认 CPU 支持 AES-NI；确保 OpenSSL 编译时启用了 AES-NI。",
            "优化 TLS 加密套件：Nginx 配置 ssl_ciphers 优先使用 AES-GCM 和 ECDHE，如 ECDHE-ECDSA-AES128-GCM-SHA256。",
            "配置 ECDSA 证书：使用 openssl ecparam -genkey -name prime256v1 生成 ECDSA 密钥，替代 RSA 证书。",
            "限流 bcrypt 验证：实现登录队列，限制并发 bcrypt 验证数量，或使用单独的认证服务池。",
            "测量加密开销：使用 perf top 观察加密相关函数的 CPU 占比；使用火焰图定位加密热点。",
            "配置 CDN TLS 终止：在 CloudFlare 或 AWS CloudFront 启用 TLS 终止，源站使用 HTTP 或低开销的内部 TLS。"
        ],
        selfCheck: [
            "为什么 TLS 握手使用非对称加密，后续通信使用对称加密？",
            "什么是 AES-NI？它对加密性能有多大影响？",
            "ECDSA 相比 RSA 有什么性能优势？",
            "bcrypt 为什么慢？在高并发场景下如何处理？",
            "如何测试系统的加密性能？",
            "什么场景适合使用硬件加密加速？"
        ],
        extensions: [
            "学习 Intel QAT（QuickAssist Technology）加密加速卡的使用。",
            "研究 AWS Nitro System 如何在虚拟化层卸载加密操作。",
            "探索同态加密（Homomorphic Encryption）的性能挑战和应用场景。",
            "学习 Argon2 密码哈希算法，理解其内存硬度设计如何防止 GPU 攻击。"
        ],
        sourceUrls: [
            "https://blog.cloudflare.com/it-takes-two-to-chacha-poly/",
            "https://www.intel.com/content/www/us/en/developer/articles/technical/advanced-encryption-standard-instructions-aes-ni.html",
            "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
            "https://wiki.openssl.org/index.php/EVP_Symmetric_Encryption_and_Decryption"
        ]
    },
    "bp-w11-2": {
        lessonId: "bp-w11-2",
        background: [
            "【WAF 定位】OWASP：'A Web Application Firewall (WAF) filters, monitors and blocks HTTP traffic to and from a web application'——WAF 过滤恶意请求，防止 SQL 注入、XSS 等攻击。",
            "【WAF 延迟影响】每层安全过滤都增加延迟。CloudFlare 报告其 WAF 增加约 1ms 延迟；复杂规则集或自定义规则可能增加更多。规则越多，匹配时间越长。",
            "【规则引擎性能】WAF 规则通常使用正则表达式匹配。复杂正则（如回溯密集型）可能导致 ReDoS（正则表达式拒绝服务）。应使用高效的规则引擎如 Hyperscan。",
            "【误报与漏报权衡】WAF 规则过严导致误报（False Positive），阻拦正常请求；过松导致漏报（False Negative），放过攻击。需要根据业务场景调优。",
            "【DDoS 防护层次】L3/L4 DDoS 防护在网络层过滤；L7 防护检查 HTTP 内容，开销更大。应分层防护：边缘过滤流量洪泛，应用层处理复杂攻击。",
            "【速率限制位置】速率限制可在多个位置实施：CDN 边缘、WAF、负载均衡器、应用层。越靠近边缘过滤效率越高，但规则灵活性越低。"
        ],
        keyDifficulties: [
            "【WAF 规则优先级】规则按优先级顺序匹配，高频规则应放前面。使用 deny-first 策略可以尽早拦截恶意请求，减少后续规则的匹配开销。",
            "【正则表达式优化】避免使用 .* 等贪婪匹配；使用原子分组或占有型量词防止回溯；考虑使用字符串匹配替代复杂正则。",
            "【WAF 旁路模式】在确认规则安全后可开启 bypass 模式，只记录不拦截，减少延迟。监控日志确认无误报后再切换到拦截模式。",
            "【API 网关与 WAF】API 网关通常包含基础安全功能（认证、限流）。与 WAF 配合时需避免重复检查，或将 WAF 集成到网关中减少网络跳数。",
            "【机器学习 WAF】ML 增强的 WAF 可以检测未知攻击模式，但推理延迟更高。应将 ML 检测作为二级防线，对可疑请求深度分析。"
        ],
        handsOnPath: [
            "测量 WAF 延迟：对比启用和禁用 WAF 时的请求延迟；使用 curl -w '%{time_total}' 多次测量取平均值。",
            "优化 WAF 规则顺序：分析 WAF 日志，将命中率高的规则移到前面；禁用不需要的规则集。",
            "配置速率限制：在 Nginx 或 AWS WAF 配置基于 IP 的速率限制，如每秒 100 请求，超过返回 429。",
            "实现渐进式安全：先在监控模式运行 WAF 规则，分析误报；调优后切换到拦截模式。",
            "分层防护配置：CDN 处理 L3/L4 DDoS 和基础速率限制；WAF 处理 OWASP Top 10 攻击；应用层实现业务逻辑防护。",
            "监控安全开销：使用 APM 跟踪安全相关中间件的延迟贡献；建立安全延迟预算。",
            "测试正则性能：使用 regex101.com 分析正则复杂度；使用性能测试工具验证大规模输入下的匹配时间。"
        ],
        selfCheck: [
            "WAF 增加延迟的主要原因是什么？如何优化？",
            "什么是 ReDoS？如何编写高效的 WAF 正则规则？",
            "WAF 的误报和漏报如何权衡？",
            "速率限制应该放在哪一层实施？各有什么权衡？",
            "监控模式（旁路模式）有什么作用？",
            "如何分层部署安全防护以平衡性能？"
        ],
        extensions: [
            "学习 ModSecurity Core Rule Set (CRS) 的优化配置。",
            "研究 Hyperscan 正则表达式引擎的性能优化原理。",
            "探索 Cloudflare Workers 在边缘实现自定义安全逻辑。",
            "学习 API 安全的 OWASP API Security Top 10 风险。"
        ],
        sourceUrls: [
            "https://owasp.org/www-project-web-security-testing-guide/",
            "https://coreruleset.org/",
            "https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-testing.html",
            "https://blog.cloudflare.com/the-history-of-the-url/"
        ]
    },
    "bp-w11-3": {
        lessonId: "bp-w11-3",
        background: [
            "【JWT 验证开销】JWT 验证包含：Base64 解码、签名验证（HMAC 或 RSA）、Claims 校验。RS256 签名验证约 0.1-0.5ms；HS256 更快但安全性稍低。",
            "【Token 缓存策略】JWT 验证结果可以缓存。对于无状态 JWT，可缓存验证通过的 token 直到过期；对于需要即时撤销的场景，需要查询撤销列表。",
            "【会话 vs Token】传统会话存储在服务端（Redis），每次请求需要查询；JWT 无状态但无法即时撤销。Refresh Token + 短期 Access Token 是常见折中方案。",
            "【OAuth 2.0 流程开销】OAuth 2.0 授权码流程需要多次重定向和 Token 交换。首次登录较慢，但获取 Token 后后续请求只需验证 Token。",
            "【RBAC 权限检查】基于角色的访问控制（RBAC）需要查询用户角色和权限。频繁检查可使用缓存；复杂权限模型（ABAC）需要更多计算。",
            "【认证服务分离】将认证服务（Identity Provider）独立部署，与业务服务分离。支持独立扩容，避免认证操作影响业务服务性能。"
        ],
        keyDifficulties: [
            "【JWT 大小问题】JWT 包含 Claims 信息，可能变得很大（数 KB）。每次请求都携带 JWT 增加带宽消耗。应只包含必要的 Claims。",
            "【Token 撤销挑战】无状态 JWT 无法即时撤销。解决方案：短过期时间 + Refresh Token；维护撤销列表（黑名单）；使用有状态 Token（如 Opaque Token）。",
            "【缓存一致性】缓存认证结果时需考虑：权限变更后缓存失效；用户被禁用后立即生效；避免缓存穿透攻击。",
            "【密钥轮换】JWT 签名密钥需要定期轮换。轮换期间需要支持新旧密钥并存验证，直到旧 Token 全部过期。",
            "【单点登录（SSO）延迟】SSO 首次登录需要重定向到 IdP，获取 Token 后返回。增加首次访问延迟，但提升用户体验和安全性。"
        ],
        handsOnPath: [
            "测量 JWT 验证时间：使用微基准测试对比 HS256 和 RS256 验证速度；测量包含不同 Claims 数量的 Token 解析时间。",
            "实现 Token 缓存：使用 Redis 缓存验证通过的 JWT，key 为 Token 哈希，value 为用户信息，TTL 小于 Token 过期时间。",
            "配置 Refresh Token 机制：Access Token 15 分钟过期，Refresh Token 7 天过期；实现 Token 刷新端点和自动刷新逻辑。",
            "实现撤销列表：使用 Redis Set 存储已撤销的 Token jti；验证时检查 jti 是否在撤销列表中。",
            "优化 RBAC 查询：缓存用户角色和权限到 Redis，设置合理的 TTL；权限变更时主动失效相关缓存。",
            "监控认证性能：跟踪登录延迟、Token 验证延迟、权限检查延迟；建立认证 SLO。",
            "实现密钥轮换：支持多密钥验证，新签发使用新密钥，验证时尝试所有有效密钥。"
        ],
        selfCheck: [
            "JWT 验证的主要开销在哪里？HS256 和 RS256 有什么区别？",
            "无状态 JWT 如何实现即时撤销？有哪些方案？",
            "为什么使用 Refresh Token + 短期 Access Token 的组合？",
            "Token 缓存需要考虑哪些一致性问题？",
            "RBAC 权限检查如何优化性能？",
            "JWT 签名密钥轮换如何实现无缝切换？"
        ],
        extensions: [
            "学习 PASETO（Platform-Agnostic Security Tokens）作为 JWT 的替代方案。",
            "研究 OAuth 2.0 的 Token Introspection 和 Token Revocation 规范。",
            "探索 OpenID Connect 的 Discovery 和 JWKS 机制自动化密钥轮换。",
            "学习 Zero Trust 架构中的持续验证（Continuous Verification）模式。"
        ],
        sourceUrls: [
            "https://auth0.com/docs/security/tokens/json-web-tokens",
            "https://datatracker.ietf.org/doc/html/rfc7519",
            "https://oauth.net/2/",
            "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"
        ]
    }
}

export const week11Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w11-1": [
        {
            id: "bp-w11-1-q1",
            question: "为什么 TLS 握手使用非对称加密，后续通信使用对称加密？",
            options: [
                "非对称更安全",
                "非对称加密慢但可安全交换密钥，对称加密快适合数据传输",
                "对称加密更安全",
                "没有区别"
            ],
            answer: 1,
            rationale: "非对称加密（如 RSA）可以安全交换密钥但速度慢；对称加密（如 AES）速度快适合大量数据传输。两者结合平衡安全与性能。"
        },
        {
            id: "bp-w11-1-q2",
            question: "AES-NI 指令集对加密性能有多大影响？",
            options: [
                "无影响",
                "提升 10-100 倍",
                "提升 2 倍",
                "降低性能"
            ],
            answer: 1,
            rationale: "Intel AES-NI 提供硬件级 AES 加速，性能提升 10-100 倍。有 AES-NI 时 AES-GCM 可达 10GB/s 以上。"
        },
        {
            id: "bp-w11-1-q3",
            question: "ECDSA 相比 RSA 有什么优势？",
            options: [
                "更古老更可靠",
                "同等安全级别下密钥更短、运算更快",
                "更容易实现",
                "不需要私钥"
            ],
            answer: 1,
            rationale: "ECDSA 使用椭圆曲线密码学，256 位 ECC 等效于 3072 位 RSA，密钥更短、签名更快。"
        },
        {
            id: "bp-w11-1-q4",
            question: "bcrypt 为什么设计成慢速？",
            options: [
                "实现有 bug",
                "故意设计慢速以防止暴力破解",
                "使用了过时的算法",
                "节省内存"
            ],
            answer: 1,
            rationale: "bcrypt 等密码哈希函数故意设计成慢速（约 100-500ms），增加暴力破解的成本。"
        },
        {
            id: "bp-w11-1-q5",
            question: "如何测试系统的 AES 加密性能？",
            options: [
                "ping 命令",
                "openssl speed aes-256-gcm",
                "top 命令",
                "netstat"
            ],
            answer: 1,
            rationale: "使用 openssl speed -evp aes-256-gcm 可以测试系统的 AES 加密吞吐量。"
        },
        {
            id: "bp-w11-1-q6",
            question: "RSA 4096 相比 RSA 2048 有什么性能影响？",
            options: [
                "快 2 倍",
                "慢约 6 倍",
                "无区别",
                "快 6 倍"
            ],
            answer: 1,
            rationale: "更长的密钥更安全但更慢。RSA 4096 比 2048 慢约 6 倍，应根据数据敏感度选择。"
        },
        {
            id: "bp-w11-1-q7",
            question: "什么场景适合使用 ChaCha20-Poly1305 而非 AES-GCM？",
            options: [
                "所有场景",
                "无 AES 硬件加速的设备（如移动设备）",
                "只有服务器",
                "只有桌面"
            ],
            answer: 1,
            rationale: "ChaCha20-Poly1305 的软件实现比 AES-GCM 更快，适合无 AES-NI 硬件加速的移动设备。"
        },
        {
            id: "bp-w11-1-q8",
            question: "如何检查 CPU 是否支持 AES-NI？",
            options: [
                "查看 CPU 温度",
                "cat /proc/cpuinfo | grep aes",
                "查看内存大小",
                "查看磁盘空间"
            ],
            answer: 1,
            rationale: "使用 cat /proc/cpuinfo | grep aes 可以检查 CPU 是否支持 AES-NI 指令集。"
        },
        {
            id: "bp-w11-1-q9",
            question: "高并发登录场景下 bcrypt 验证可能导致什么问题？",
            options: [
                "内存不足",
                "CPU 耗尽，验证队列堆积",
                "网络拥塞",
                "磁盘 I/O 瓶颈"
            ],
            answer: 1,
            rationale: "bcrypt 是 CPU 密集型操作，高并发登录可能耗尽 CPU。需要限流或分离认证服务独立扩容。"
        },
        {
            id: "bp-w11-1-q10",
            question: "CDN TLS 终止有什么作用？",
            options: [
                "增加延迟",
                "在边缘处理 TLS 加解密，减轻源站负担",
                "增加安全性",
                "减少带宽"
            ],
            answer: 1,
            rationale: "CDN 在边缘终止 TLS，源站可以使用 HTTP 或低开销的内部 TLS，减轻加解密负担。"
        },
        {
            id: "bp-w11-1-q11",
            question: "为什么应该禁用 TLS 压缩？",
            options: [
                "增加延迟",
                "可能导致 CRIME 攻击",
                "减少安全性",
                "不兼容"
            ],
            answer: 1,
            rationale: "TLS 压缩可能导致 CRIME 攻击，攻击者可通过压缩率变化推断加密内容。应禁用 TLS 压缩。"
        },
        {
            id: "bp-w11-1-q12",
            question: "批量加密小数据时如何优化性能？",
            options: [
                "使用更大的密钥",
                "复用加密上下文，减少 key schedule 开销",
                "禁用加密",
                "使用更慢的算法"
            ],
            answer: 1,
            rationale: "对大量小数据加密时，初始化开销占比大。复用加密上下文可以减少 key schedule 开销。"
        }
    ],
    "bp-w11-2": [
        {
            id: "bp-w11-2-q1",
            question: "WAF 的主要功能是什么？",
            options: [
                "加速网络",
                "过滤恶意 HTTP 请求，防止 SQL 注入、XSS 等攻击",
                "压缩数据",
                "负载均衡"
            ],
            answer: 1,
            rationale: "OWASP 定义：'A WAF filters, monitors and blocks HTTP traffic to and from a web application'——过滤恶意请求。"
        },
        {
            id: "bp-w11-2-q2",
            question: "WAF 增加延迟的主要原因是什么？",
            options: [
                "网络传输",
                "规则匹配和正则表达式计算",
                "日志记录",
                "数据库查询"
            ],
            answer: 1,
            rationale: "WAF 需要对每个请求进行规则匹配，复杂的正则表达式和大量规则会增加匹配时间。"
        },
        {
            id: "bp-w11-2-q3",
            question: "什么是 ReDoS？",
            options: [
                "网络攻击",
                "正则表达式拒绝服务，复杂正则导致 CPU 消耗",
                "数据库攻击",
                "缓存攻击"
            ],
            answer: 1,
            rationale: "ReDoS（Regular Expression Denial of Service）是回溯密集型正则表达式在特定输入下导致 CPU 消耗过大。"
        },
        {
            id: "bp-w11-2-q4",
            question: "WAF 的误报（False Positive）和漏报（False Negative）如何权衡？",
            options: [
                "只考虑安全，全部拦截",
                "规则过严导致误报阻拦正常请求，过松导致漏报放过攻击",
                "只考虑性能，全部放行",
                "无法权衡"
            ],
            answer: 1,
            rationale: "需要根据业务场景调优：高安全场景接受更多误报；高可用场景可能接受一定漏报风险。"
        },
        {
            id: "bp-w11-2-q5",
            question: "速率限制应该放在哪一层实施效率最高？",
            options: [
                "应用层",
                "CDN 边缘",
                "数据库层",
                "操作系统层"
            ],
            answer: 1,
            rationale: "越靠近边缘过滤效率越高，恶意流量不会消耗后端资源。但边缘规则灵活性较低。"
        },
        {
            id: "bp-w11-2-q6",
            question: "WAF 监控模式（旁路模式）有什么作用？",
            options: [
                "提高性能",
                "只记录不拦截，用于调优规则确认无误报",
                "增加安全性",
                "减少日志"
            ],
            answer: 1,
            rationale: "监控模式下 WAF 只记录匹配的请求但不拦截，可以分析误报率，调优后再切换到拦截模式。"
        },
        {
            id: "bp-w11-2-q7",
            question: "如何优化 WAF 正则表达式性能？",
            options: [
                "使用更长的正则",
                "避免贪婪匹配，使用原子分组，考虑字符串匹配替代",
                "增加规则数量",
                "使用更复杂的正则"
            ],
            answer: 1,
            rationale: "避免 .* 等贪婪匹配；使用原子分组防止回溯；简单匹配可用字符串匹配替代正则。"
        },
        {
            id: "bp-w11-2-q8",
            question: "L3/L4 和 L7 DDoS 防护有什么区别？",
            options: [
                "没有区别",
                "L3/L4 在网络层过滤效率高，L7 检查 HTTP 内容开销更大",
                "L7 更快",
                "L3/L4 更慢"
            ],
            answer: 1,
            rationale: "L3/L4 在网络层过滤流量洪泛（如 SYN flood）；L7 检查 HTTP 内容检测应用层攻击，开销更大。"
        },
        {
            id: "bp-w11-2-q9",
            question: "如何测量 WAF 增加的延迟？",
            options: [
                "查看 CPU 使用率",
                "对比启用和禁用 WAF 时的请求延迟",
                "查看磁盘使用",
                "查看内存使用"
            ],
            answer: 1,
            rationale: "使用 curl -w '%{time_total}' 分别测试启用和禁用 WAF 时的请求延迟，取平均值对比。"
        },
        {
            id: "bp-w11-2-q10",
            question: "WAF 规则优先级应该如何设置？",
            options: [
                "随机顺序",
                "高频命中的规则放前面，deny-first 策略",
                "按字母顺序",
                "按创建时间"
            ],
            answer: 1,
            rationale: "高频规则放前面减少匹配次数；deny-first 可以尽早拦截恶意请求，减少后续规则开销。"
        },
        {
            id: "bp-w11-2-q11",
            question: "机器学习增强的 WAF 有什么权衡？",
            options: [
                "完全无延迟",
                "可以检测未知攻击但推理延迟更高",
                "完全替代规则",
                "不需要训练"
            ],
            answer: 1,
            rationale: "ML 增强的 WAF 可以检测未知攻击模式，但 ML 推理延迟更高。应作为二级防线对可疑请求深度分析。"
        },
        {
            id: "bp-w11-2-q12",
            question: "API 网关与 WAF 如何配合？",
            options: [
                "功能完全相同",
                "避免重复检查，或将 WAF 集成到网关减少网络跳数",
                "不能同时使用",
                "API 网关替代 WAF"
            ],
            answer: 1,
            rationale: "API 网关包含基础安全功能。与 WAF 配合时需避免重复检查，或将 WAF 集成到网关中减少跳数。"
        }
    ],
    "bp-w11-3": [
        {
            id: "bp-w11-3-q1",
            question: "JWT 验证的主要开销在哪里？",
            options: [
                "网络传输",
                "Base64 解码、签名验证、Claims 校验",
                "数据库查询",
                "文件读取"
            ],
            answer: 1,
            rationale: "JWT 验证包含：Base64 解码、签名验证（HMAC 或 RSA）、Claims 校验（过期时间、issuer 等）。"
        },
        {
            id: "bp-w11-3-q2",
            question: "HS256 和 RS256 签名验证有什么区别？",
            options: [
                "没有区别",
                "HS256 使用对称密钥更快，RS256 使用非对称密钥可公开验证",
                "RS256 更快",
                "HS256 更安全"
            ],
            answer: 1,
            rationale: "HS256 使用对称密钥（HMAC），验证更快但密钥需保密；RS256 使用非对称密钥，公钥可公开验证。"
        },
        {
            id: "bp-w11-3-q3",
            question: "无状态 JWT 如何实现即时撤销？",
            options: [
                "无法实现",
                "短过期时间 + Refresh Token，或维护撤销列表（黑名单）",
                "删除 Token",
                "通知用户"
            ],
            answer: 1,
            rationale: "无状态 JWT 本身无法撤销。解决方案：短过期时间配合 Refresh Token；维护 Token 撤销列表。"
        },
        {
            id: "bp-w11-3-q4",
            question: "为什么使用 Refresh Token + 短期 Access Token？",
            options: [
                "更简单",
                "Access Token 短期降低泄露风险，Refresh Token 实现长期登录和撤销能力",
                "节省带宽",
                "减少数据库查询"
            ],
            answer: 1,
            rationale: "Access Token 短期过期（如 15 分钟）降低泄露风险；Refresh Token 长期有效支持刷新和撤销。"
        },
        {
            id: "bp-w11-3-q5",
            question: "JWT 大小问题如何解决？",
            options: [
                "无法解决",
                "只包含必要的 Claims，减少 Payload 大小",
                "使用压缩",
                "分片传输"
            ],
            answer: 1,
            rationale: "JWT 包含 Claims 可能变得很大。应只包含必要的 Claims（如用户 ID、角色），避免包含完整用户信息。"
        },
        {
            id: "bp-w11-3-q6",
            question: "Token 缓存需要考虑什么问题？",
            options: [
                "无问题",
                "权限变更后缓存失效、用户禁用立即生效、避免缓存穿透",
                "只考虑性能",
                "只考虑安全"
            ],
            answer: 1,
            rationale: "缓存认证结果需考虑：权限变更后主动失效缓存；用户被禁用后立即生效；防止恶意 Token 的缓存穿透。"
        },
        {
            id: "bp-w11-3-q7",
            question: "JWT 签名密钥轮换如何实现无缝切换？",
            options: [
                "直接更换",
                "支持多密钥验证，新签发使用新密钥，验证时尝试所有有效密钥",
                "停止服务更换",
                "无法轮换"
            ],
            answer: 1,
            rationale: "轮换期间新旧密钥并存：新签发的 Token 使用新密钥，验证时尝试所有有效密钥，直到旧 Token 过期。"
        },
        {
            id: "bp-w11-3-q8",
            question: "RBAC 权限检查如何优化性能？",
            options: [
                "每次查询数据库",
                "缓存用户角色和权限到 Redis，权限变更时主动失效",
                "不做权限检查",
                "硬编码权限"
            ],
            answer: 1,
            rationale: "频繁的权限查询可使用缓存，设置合理 TTL；权限变更时主动失效相关缓存保证一致性。"
        },
        {
            id: "bp-w11-3-q9",
            question: "OAuth 2.0 授权码流程对性能有什么影响？",
            options: [
                "无影响",
                "首次登录需多次重定向和 Token 交换较慢，后续只需验证 Token",
                "每次请求都慢",
                "只影响登出"
            ],
            answer: 1,
            rationale: "OAuth 2.0 授权码流程首次需要重定向到 IdP 获取授权码、交换 Token，较慢。后续请求只需验证 Token。"
        },
        {
            id: "bp-w11-3-q10",
            question: "认证服务分离有什么好处？",
            options: [
                "增加复杂度",
                "支持独立扩容，避免认证操作影响业务服务性能",
                "减少安全性",
                "增加延迟"
            ],
            answer: 1,
            rationale: "独立的认证服务（Identity Provider）可以独立扩容，bcrypt 等 CPU 密集操作不会影响业务服务。"
        },
        {
            id: "bp-w11-3-q11",
            question: "如何使用 Redis 实现 Token 撤销列表？",
            options: [
                "存储所有 Token",
                "使用 Set 存储已撤销的 Token jti，验证时检查是否在列表中",
                "删除 Token",
                "无法实现"
            ],
            answer: 1,
            rationale: "使用 Redis Set 存储已撤销的 Token 的 jti（JWT ID），验证时检查 jti 是否在撤销列表中。"
        },
        {
            id: "bp-w11-3-q12",
            question: "RS256 签名验证大约需要多长时间？",
            options: [
                "0.001ms",
                "0.1-0.5ms",
                "10ms",
                "100ms"
            ],
            answer: 1,
            rationale: "RS256（RSA 签名）验证约需 0.1-0.5ms。HS256（HMAC）更快，但密钥需要保密。"
        }
    ]
}
