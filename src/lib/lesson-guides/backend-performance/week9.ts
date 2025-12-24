import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "bp-w9-1": {
        lessonId: "bp-w9-1",
        background: [
            "【连接池价值】数据库连接的创建成本很高：TCP 握手、认证、协议协商。HikariCP 文档指出：'A connection pool is a cache of database connections maintained so that connections can be reused'——连接池缓存连接避免重复创建。",
            "【最佳连接数】HikariCP 作者 Brett Wooldridge 的文章 'About Pool Sizing' 指出：连接数并非越多越好。'Fewer connections equals much better performance'——过多连接导致数据库上下文切换和锁竞争增加。",
            "【连接数公式】PostgreSQL 文档建议公式：connections = ((core_count × 2) + effective_spindle_count)。对于 4 核 SSD 服务器，约 9-10 个连接即可达到最佳吞吐量。",
            "【连接池监控指标】关键指标包括：活跃连接数（active）、空闲连接数（idle）、等待线程数（pending）、连接获取时间（acquisition time）、连接超时次数。",
            "【连接泄漏检测】长时间未归还的连接可能是泄漏。HikariCP 的 leakDetectionThreshold 参数可在连接持有超过阈值时输出警告堆栈，帮助定位泄漏代码。",
            "【连接验证】连接池需要验证连接有效性。HikariCP 使用 JDBC4 的 isValid() 方法（无需 SQL 查询），或可配置 connectionTestQuery 执行 SELECT 1。"
        ],
        keyDifficulties: [
            "【连接池过大的危害】PostgreSQL Wiki 解释：大量连接导致更多上下文切换、更大的锁竞争、更多的内存消耗（每个连接约 10MB）。超过 CPU 核心数的连接通常不会提升性能。",
            "【minimumIdle 设置】HikariCP 建议 minimumIdle = maximumPoolSize，即固定大小池。原因：动态调整连接数的开销大于保持空闲连接的成本。",
            "【connectionTimeout 设置】连接获取超时应小于应用请求超时。如请求超时 5 秒，connectionTimeout 可设为 3 秒，留出处理和响应时间。",
            "【多数据源连接分配】微服务访问多个数据库时，需要合理分配连接数。各服务实例的连接数之和不应超过数据库最大连接数限制。",
            "【连接预热】应用启动时连接池为空，首批请求需要等待连接创建。可在启动时通过 initializationFailTimeout 或 warmup 查询预创建连接。"
        ],
        handsOnPath: [
            "计算最佳连接数：使用公式 ((core_count × 2) + spindle_count) 计算基准值，然后通过压测验证。4 核 SSD 约 9 个连接。",
            "配置 HikariCP：设置 maximumPoolSize=10、minimumIdle=10（固定池大小）、connectionTimeout=3000、idleTimeout=600000。",
            "启用连接泄漏检测：设置 leakDetectionThreshold=60000（60 秒），超时未归还的连接会输出警告日志和获取堆栈。",
            "配置连接验证：HikariCP 默认使用 isValid()；对不支持 JDBC4 的驱动设置 connectionTestQuery=SELECT 1。",
            "监控连接池：使用 HikariCP 的 JMX 或 Micrometer 集成导出指标，创建 Grafana 仪表板监控活跃/空闲/等待连接数。",
            "实现连接预热：在应用 readiness check 前执行简单查询预创建连接，或使用 initializationFailTimeout 配置启动时验证。",
            "验证连接数效果：使用 pgbench 或 sysbench 对比不同连接池大小的 TPS 和响应时间，找出最佳配置。"
        ],
        selfCheck: [
            "为什么数据库连接数不是越多越好？过多连接会导致什么问题？",
            "HikariCP 建议的连接数计算公式是什么？4 核 SSD 服务器应该配置多少连接？",
            "什么是连接泄漏？如何检测和定位泄漏代码？",
            "HikariCP 的 minimumIdle 参数建议设置为什么值？为什么？",
            "connectionTimeout 应该如何设置？与请求超时的关系是什么？",
            "如何验证连接池中的连接是否有效？"
        ],
        extensions: [
            "学习 PgBouncer 等外部连接池代理，在多应用共享数据库时统一管理连接。",
            "研究 PostgreSQL 的 pg_stat_activity 视图，监控数据库端的连接状态和查询。",
            "探索 Druid 连接池的监控功能和 SQL 防火墙特性。",
            "学习连接池的分布式管理，如何在 Kubernetes 中合理配置各 Pod 的连接数。"
        ],
        sourceUrls: [
            "https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing",
            "https://wiki.postgresql.org/wiki/Number_Of_Database_Connections",
            "https://github.com/brettwooldridge/HikariCP",
            "https://jdbc.postgresql.org/documentation/"
        ]
    },
    "bp-w9-2": {
        lessonId: "bp-w9-2",
        background: [
            "【TLS 握手开销】HTTPS 比 HTTP 慢主要因为 TLS 握手。完整 TLS 1.2 握手需要 2 个 RTT（往返时间），包含密钥交换、证书验证、加密协商等步骤。",
            "【TLS 1.3 优化】RFC 8446 (TLS 1.3) 将握手减少到 1 RTT。移除了不安全的加密套件，简化了握手流程，并支持 0-RTT 恢复（有重放攻击风险）。",
            "【Session Resumption】会话复用避免完整握手。TLS 1.2 使用 Session ID 或 Session Ticket；TLS 1.3 使用 PSK（Pre-Shared Key）。复用时握手可减少到 1 RTT 甚至 0 RTT。",
            "【OCSP Stapling】在线证书状态协议（OCSP）验证证书是否吊销。传统方式客户端需额外请求 OCSP 服务器；OCSP Stapling 由服务端预获取并发送，减少延迟。",
            "【加密算法性能】不同加密算法性能差异大。AES-GCM 在支持 AES-NI 的 CPU 上非常快；ChaCha20-Poly1305 在无硬件加速时更快。RSA 密钥交换比 ECDHE 慢很多。",
            "【证书链优化】证书链过长增加握手数据量和验证时间。应只包含必要的中间证书，避免交叉签名导致的冗余证书。"
        ],
        keyDifficulties: [
            "【0-RTT 安全权衡】TLS 1.3 的 0-RTT 早期数据有重放攻击风险，不应用于非幂等请求（如支付）。Cloudflare 文档建议只对安全的读操作启用 0-RTT。",
            "【Session Ticket 轮换】Session Ticket 密钥需要定期轮换（如每小时），否则长期有效的密钥泄露会影响所有会话。多服务器需要同步 Ticket 密钥。",
            "【TLS 版本兼容】并非所有客户端支持 TLS 1.3。应配置 TLS 1.2 为最低版本，1.0/1.1 已不安全且被主流浏览器弃用。使用 Qualys SSL Labs 测试兼容性。",
            "【证书私钥保护】私钥泄露可导致中间人攻击。应使用 HSM 或 TPM 保护密钥，启用 HSTS 防止降级攻击，考虑使用前向保密（Forward Secrecy）的密钥交换。",
            "【TCP Fast Open 与 TLS】TCP Fast Open (TFO) 可减少 TCP 握手 RTT，与 TLS 1.3 配合使用可显著减少连接建立时间。需要内核支持和客户端支持。"
        ],
        handsOnPath: [
            "启用 TLS 1.3：Nginx 配置 ssl_protocols TLSv1.2 TLSv1.3;，确保 OpenSSL 1.1.1+ 版本。",
            "配置 Session Ticket：Nginx 设置 ssl_session_tickets on; ssl_session_timeout 1d;，配置 ssl_session_ticket_key 用于多服务器同步。",
            "启用 OCSP Stapling：Nginx 配置 ssl_stapling on; ssl_stapling_verify on; resolver 8.8.8.8;，减少客户端 OCSP 查询。",
            "优化加密套件：配置 ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256'; 优先使用 ECDHE 和 AES-GCM。",
            "使用 SSL Labs 测试：访问 ssllabs.com/ssltest 测试服务器 TLS 配置，目标 A+ 评分。",
            "测量握手时间：使用 openssl s_client -connect host:443 -servername host 观察握手过程；使用 curl -w '%{time_connect} %{time_appconnect}' 测量时间。",
            "启用 HSTS：设置 Strict-Transport-Security: max-age=31536000; includeSubDomains; preload 防止降级攻击。"
        ],
        selfCheck: [
            "TLS 1.2 和 TLS 1.3 握手分别需要多少 RTT？",
            "什么是 Session Resumption？它如何减少握手时间？",
            "TLS 1.3 的 0-RTT 有什么安全风险？应该如何使用？",
            "什么是 OCSP Stapling？它解决什么问题？",
            "为什么推荐使用 ECDHE 而非 RSA 密钥交换？",
            "如何使用工具测试和优化 TLS 配置？"
        ],
        extensions: [
            "学习 BoringSSL 对 TLS 的优化实现，Google 如何在大规模部署中优化 HTTPS 性能。",
            "研究 Certificate Transparency (CT) 机制，理解证书透明度如何提高 PKI 安全性。",
            "探索 ECH (Encrypted Client Hello) 扩展，解决 SNI 泄露隐私的问题。",
            "学习 mTLS（双向 TLS）在服务网格中的应用，如 Istio 的安全模型。"
        ],
        sourceUrls: [
            "https://www.rfc-editor.org/rfc/rfc8446",
            "https://www.ssllabs.com/ssltest/",
            "https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a/",
            "https://nginx.org/en/docs/http/configuring_https_servers.html",
            "https://wiki.mozilla.org/Security/Server_Side_TLS"
        ]
    },
    "bp-w9-3": {
        lessonId: "bp-w9-3",
        background: [
            "【TCP 队头阻塞】HTTP/2 在单个 TCP 连接上多路复用，但 TCP 层的丢包会阻塞所有流。RFC 9000 (QUIC) 指出：'QUIC provides multiplexing without head-of-line blocking'——QUIC 在 UDP 上实现独立流。",
            "【QUIC 协议设计】QUIC 是 Google 设计的传输层协议，现为 IETF 标准 (RFC 9000)。在 UDP 上实现类似 TCP 的可靠传输，但每个流独立处理丢包，不会相互阻塞。",
            "【0-RTT 连接恢复】QUIC 内置 TLS 1.3，首次连接需要 1 RTT；后续连接可 0-RTT 恢复，发送数据的同时完成握手。适合移动网络等频繁重连的场景。",
            "【连接迁移】QUIC 使用 Connection ID 而非 IP:Port 标识连接。用户从 WiFi 切换到 4G 时，连接可以无缝迁移，无需重新握手。",
            "【HTTP/3 定位】HTTP/3 (RFC 9114) 是 HTTP over QUIC。语法与 HTTP/2 相似（二进制帧、头部压缩 QPACK），但底层使用 QUIC 代替 TCP+TLS。",
            "【弱网性能优势】在高延迟或丢包的移动网络环境，QUIC 的独立流和快速重传机制显著优于 TCP。Google 报告 QUIC 使 YouTube 视频在弱网下减少 30% 的重缓冲。"
        ],
        keyDifficulties: [
            "【UDP 防火墙问题】部分企业网络和防火墙阻止 UDP 流量或限制 UDP 速率。QUIC 实现需要回退到 HTTP/2 over TCP 的能力。Alt-Svc 头用于协商协议。",
            "【服务端资源】QUIC 在用户态实现连接管理，比内核 TCP 消耗更多 CPU。需要优化加密（使用 AES-NI）和数据包处理。Cloudflare 使用 Rust 优化实现。",
            "【调试复杂性】QUIC 加密了几乎所有头信息，传统网络工具（如 tcpdump）难以分析。需要使用 qlog 标准格式记录 QUIC 事件，用 qvis 可视化。",
            "【拥塞控制算法】QUIC 允许实现自定义拥塞控制。默认通常使用 Cubic 或 BBR。选择不当可能导致与 TCP 流量的公平性问题或性能下降。",
            "【版本协商】QUIC 支持版本协商和加密协商，增加了协议复杂性。旧版 gQUIC 与 IETF QUIC 不兼容，需确保使用标准化版本。"
        ],
        handsOnPath: [
            "启用 Nginx HTTP/3：编译 Nginx with quic 支持，配置 listen 443 quic reuseport; 和 add_header Alt-Svc 'h3=\":443\"; ma=86400';",
            "使用 curl 测试 HTTP/3：curl --http3 https://example.com 测试 QUIC 连接（需要 curl 7.66+ 和 HTTP/3 支持）。",
            "配置 Caddy HTTP/3：Caddy 2.5+ 默认支持 HTTP/3，无需额外配置即可自动启用。",
            "测量 QUIC 性能：使用 WebPageTest 或 Lighthouse 对比 HTTP/2 和 HTTP/3 的加载时间，特别是在模拟弱网环境下。",
            "启用 qlog 日志：配置 QUIC 服务器输出 qlog 格式日志，使用 qvis.edm.uhasselt.be 可视化连接状态和性能。",
            "检查浏览器支持：在 Chrome 使用 chrome://net-internals/#quic 查看 QUIC 会话状态和统计信息。",
            "配置回退机制：使用 Alt-Svc 头广告 HTTP/3 支持，确保不支持 QUIC 的客户端可以回退到 HTTP/2。"
        ],
        selfCheck: [
            "什么是 TCP 队头阻塞？QUIC 如何解决这个问题？",
            "QUIC 为什么选择基于 UDP 而非 TCP？",
            "QUIC 的 0-RTT 连接恢复如何工作？有什么安全考虑？",
            "什么是连接迁移？它对移动应用有什么好处？",
            "部署 HTTP/3 可能遇到什么障碍？如何处理？",
            "如何测试和调试 QUIC 连接？"
        ],
        extensions: [
            "学习 Cloudflare 的 quiche 库，了解高性能 QUIC 实现的设计考量。",
            "研究 WebTransport 协议，基于 HTTP/3 的双向通信能力，可能取代 WebSocket。",
            "探索 BBR 拥塞控制算法，理解其在 QUIC 和 TCP 中的应用。",
            "学习 Multipath QUIC 扩展，同时使用多个网络路径提高带宽和可靠性。"
        ],
        sourceUrls: [
            "https://www.rfc-editor.org/rfc/rfc9000",
            "https://www.rfc-editor.org/rfc/rfc9114",
            "https://blog.cloudflare.com/the-road-to-quic/",
            "https://quic.xargs.org/",
            "https://http3-explained.haxx.se/"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w9-1": [
        {
            id: "bp-w9-1-q1",
            question: "为什么数据库连接池中的连接数不是越多越好？",
            options: [
                "会消耗更多内存",
                "过多连接导致上下文切换和锁竞争增加，性能反而下降",
                "数据库不支持",
                "会影响网络带宽"
            ],
            answer: 1,
            rationale: "HikariCP 作者指出：'Fewer connections equals much better performance'。过多连接导致数据库上下文切换和锁竞争增加。"
        },
        {
            id: "bp-w9-1-q2",
            question: "PostgreSQL 建议的连接数计算公式是什么？",
            options: [
                "connections = CPU 核数",
                "connections = ((core_count × 2) + effective_spindle_count)",
                "connections = 内存 / 10MB",
                "connections = 并发用户数"
            ],
            answer: 1,
            rationale: "PostgreSQL 文档建议：connections = ((core_count × 2) + effective_spindle_count)。4 核 SSD 约 9-10 个连接。"
        },
        {
            id: "bp-w9-1-q3",
            question: "HikariCP 的 leakDetectionThreshold 参数用于什么？",
            options: [
                "设置连接超时",
                "检测长时间未归还的连接并输出警告堆栈",
                "限制最大连接数",
                "设置空闲超时"
            ],
            answer: 1,
            rationale: "leakDetectionThreshold 设置连接持有超过阈值时输出警告堆栈，帮助定位连接泄漏的代码位置。"
        },
        {
            id: "bp-w9-1-q4",
            question: "HikariCP 建议 minimumIdle 参数设置为什么值？",
            options: [
                "0",
                "与 maximumPoolSize 相等（固定大小池）",
                "1",
                "maximumPoolSize 的一半"
            ],
            answer: 1,
            rationale: "HikariCP 建议 minimumIdle = maximumPoolSize，即固定大小池。动态调整连接数的开销大于保持空闲连接的成本。"
        },
        {
            id: "bp-w9-1-q5",
            question: "connectionTimeout 应该如何设置？",
            options: [
                "越大越好",
                "小于应用请求超时，留出处理和响应时间",
                "固定 30 秒",
                "与数据库查询超时相同"
            ],
            answer: 1,
            rationale: "connectionTimeout 应小于应用请求超时。如请求超时 5 秒，connectionTimeout 可设为 3 秒，留出处理时间。"
        },
        {
            id: "bp-w9-1-q6",
            question: "每个 PostgreSQL 连接大约消耗多少内存？",
            options: [
                "1KB",
                "100KB",
                "约 10MB",
                "100MB"
            ],
            answer: 2,
            rationale: "PostgreSQL Wiki 指出每个连接约消耗 10MB 内存。大量连接会显著增加内存消耗。"
        },
        {
            id: "bp-w9-1-q7",
            question: "如何验证连接池中的连接是否有效？",
            options: [
                "无需验证",
                "HikariCP 使用 JDBC4 的 isValid() 方法或配置 connectionTestQuery",
                "每次使用前重建连接",
                "检查 TCP 状态"
            ],
            answer: 1,
            rationale: "HikariCP 默认使用 JDBC4 的 isValid() 方法验证连接，不需要 SQL 查询。也可配置 connectionTestQuery 执行 SELECT 1。"
        },
        {
            id: "bp-w9-1-q8",
            question: "多个服务实例共享数据库时如何配置连接数？",
            options: [
                "每个实例使用最大连接数",
                "各服务实例的连接数之和不应超过数据库最大连接数限制",
                "只允许一个实例连接",
                "使用无限制连接"
            ],
            answer: 1,
            rationale: "微服务场景下，各服务实例的连接数之和不应超过数据库最大连接数限制，需要合理分配。"
        },
        {
            id: "bp-w9-1-q9",
            question: "什么是连接预热（Connection Warmup）？",
            options: [
                "加热服务器硬件",
                "启动时预创建连接，避免首批请求等待连接创建",
                "清空连接池",
                "增加 CPU 温度"
            ],
            answer: 1,
            rationale: "连接预热是在应用启动时预创建连接，避免首批请求因等待连接创建而延迟。可通过 warmup 查询或配置实现。"
        },
        {
            id: "bp-w9-1-q10",
            question: "HikariCP 监控应该关注哪些指标？",
            options: [
                "只关注错误数",
                "活跃连接数、空闲连接数、等待线程数、连接获取时间",
                "只关注连接数",
                "只关注内存使用"
            ],
            answer: 1,
            rationale: "关键指标包括：活跃连接数、空闲连接数、等待线程数、连接获取时间、连接超时次数等。"
        },
        {
            id: "bp-w9-1-q11",
            question: "什么是连接泄漏（Connection Leak）？",
            options: [
                "连接密码泄露",
                "连接长时间被持有而未归还到池中",
                "连接数据泄露",
                "网络数据泄露"
            ],
            answer: 1,
            rationale: "连接泄漏是指代码获取连接后未正确归还，导致连接被长时间持有。最终可能耗尽连接池。"
        },
        {
            id: "bp-w9-1-q12",
            question: "为什么使用连接池而不是每次创建新连接？",
            options: [
                "更安全",
                "创建连接成本高（TCP 握手、认证、协议协商）",
                "数据库强制要求",
                "减少代码量"
            ],
            answer: 1,
            rationale: "数据库连接创建成本高，包括 TCP 握手、认证、协议协商等。连接池缓存连接避免重复创建这些开销。"
        }
    ],
    "bp-w9-2": [
        {
            id: "bp-w9-2-q1",
            question: "完整的 TLS 1.2 握手需要多少 RTT？",
            options: [
                "0 RTT",
                "1 RTT",
                "2 RTT",
                "4 RTT"
            ],
            answer: 2,
            rationale: "完整的 TLS 1.2 握手需要 2 个 RTT，包含 ClientHello/ServerHello、证书交换、密钥交换、Finished 等步骤。"
        },
        {
            id: "bp-w9-2-q2",
            question: "TLS 1.3 相比 TLS 1.2 有什么主要改进？",
            options: [
                "更多加密算法",
                "将握手减少到 1 RTT，移除不安全算法，支持 0-RTT",
                "更长的密钥",
                "更多证书类型"
            ],
            answer: 1,
            rationale: "TLS 1.3 (RFC 8446) 将握手减少到 1 RTT，移除了不安全的加密套件，简化了握手流程，并支持 0-RTT 恢复。"
        },
        {
            id: "bp-w9-2-q3",
            question: "什么是 Session Resumption？",
            options: [
                "恢复中断的会话",
                "使用之前的会话参数避免完整握手",
                "重新启动服务器",
                "恢复用户登录"
            ],
            answer: 1,
            rationale: "Session Resumption 使用 Session ID/Ticket 或 PSK 复用之前的会话参数，避免完整握手，减少到 1 RTT 甚至 0 RTT。"
        },
        {
            id: "bp-w9-2-q4",
            question: "TLS 1.3 的 0-RTT 有什么安全风险？",
            options: [
                "密钥泄露",
                "重放攻击风险，不应用于非幂等请求",
                "证书失效",
                "无任何风险"
            ],
            answer: 1,
            rationale: "0-RTT 早期数据有重放攻击风险，攻击者可能重放请求。应只对安全的读操作（幂等请求）启用 0-RTT。"
        },
        {
            id: "bp-w9-2-q5",
            question: "什么是 OCSP Stapling？",
            options: [
                "证书压缩技术",
                "服务端预获取证书状态并发送给客户端，减少额外 OCSP 查询",
                "证书链优化",
                "密钥交换优化"
            ],
            answer: 1,
            rationale: "OCSP Stapling 由服务端预获取 OCSP 响应并在握手时发送给客户端，避免客户端额外请求 OCSP 服务器，减少延迟。"
        },
        {
            id: "bp-w9-2-q6",
            question: "为什么推荐使用 ECDHE 而非 RSA 密钥交换？",
            options: [
                "更简单",
                "ECDHE 提供前向保密且性能更好",
                "RSA 不安全",
                "ECDHE 密钥更短"
            ],
            answer: 1,
            rationale: "ECDHE 提供前向保密（即使私钥泄露也无法解密历史会话），且椭圆曲线运算比 RSA 更快。"
        },
        {
            id: "bp-w9-2-q7",
            question: "如何测试 TLS 配置的安全性和性能？",
            options: [
                "只看证书过期时间",
                "使用 Qualys SSL Labs 测试，目标 A+ 评分",
                "检查服务器日志",
                "测试网站速度"
            ],
            answer: 1,
            rationale: "Qualys SSL Labs (ssllabs.com/ssltest) 提供详细的 TLS 配置分析，包括协议版本、加密套件、证书链等，目标 A+ 评分。"
        },
        {
            id: "bp-w9-2-q8",
            question: "Session Ticket 密钥需要注意什么？",
            options: [
                "永不更换",
                "需要定期轮换，多服务器需同步密钥",
                "越长越好",
                "使用默认密钥"
            ],
            answer: 1,
            rationale: "Session Ticket 密钥需要定期轮换（如每小时），否则泄露会影响所有会话。多服务器需要同步 Ticket 密钥。"
        },
        {
            id: "bp-w9-2-q9",
            question: "什么是 HSTS？",
            options: [
                "一种加密算法",
                "HTTP Strict Transport Security，强制浏览器使用 HTTPS",
                "一种证书类型",
                "服务器配置"
            ],
            answer: 1,
            rationale: "HSTS (Strict-Transport-Security) 告诉浏览器只能通过 HTTPS 访问该站点，防止 SSL 剥离等降级攻击。"
        },
        {
            id: "bp-w9-2-q10",
            question: "AES-GCM 在什么情况下性能最好？",
            options: [
                "任何情况",
                "CPU 支持 AES-NI 硬件加速时",
                "使用更长密钥时",
                "网络带宽高时"
            ],
            answer: 1,
            rationale: "AES-GCM 在支持 AES-NI 指令集的 CPU 上非常快。无硬件加速时，ChaCha20-Poly1305 可能更快。"
        },
        {
            id: "bp-w9-2-q11",
            question: "TLS 1.0 和 1.1 的现状如何？",
            options: [
                "仍然推荐使用",
                "已不安全，被主流浏览器弃用",
                "性能最好",
                "只用于内部网络"
            ],
            answer: 1,
            rationale: "TLS 1.0/1.1 存在已知安全漏洞，被主流浏览器弃用。应配置 TLS 1.2 为最低版本。"
        },
        {
            id: "bp-w9-2-q12",
            question: "如何测量 TLS 握手时间？",
            options: [
                "ping 命令",
                "curl -w '%{time_appconnect}' 或 openssl s_client",
                "netstat",
                "top 命令"
            ],
            answer: 1,
            rationale: "使用 curl -w '%{time_connect} %{time_appconnect}' 可测量 TCP 和 TLS 握手时间；openssl s_client 可详细观察握手过程。"
        }
    ],
    "bp-w9-3": [
        {
            id: "bp-w9-3-q1",
            question: "什么是 TCP 队头阻塞（Head-of-line blocking）？",
            options: [
                "TCP 连接数限制",
                "TCP 层丢包导致所有复用的流都被阻塞",
                "HTTP 请求排队",
                "DNS 解析阻塞"
            ],
            answer: 1,
            rationale: "HTTP/2 在单个 TCP 连接上多路复用，但 TCP 层的丢包会阻塞所有流，必须等待重传完成。这就是 TCP 队头阻塞。"
        },
        {
            id: "bp-w9-3-q2",
            question: "QUIC 如何解决 TCP 队头阻塞？",
            options: [
                "使用更多 TCP 连接",
                "在 UDP 上实现独立流，各流独立处理丢包",
                "禁用重传",
                "使用更大的缓冲区"
            ],
            answer: 1,
            rationale: "QUIC 在 UDP 上实现独立的流，每个流独立处理丢包和重传，不会相互阻塞。这是 QUIC 的核心优势。"
        },
        {
            id: "bp-w9-3-q3",
            question: "QUIC 的 0-RTT 连接恢复有什么好处？",
            options: [
                "更安全",
                "后续连接可在发送数据的同时完成握手，减少延迟",
                "节省带宽",
                "减少 CPU 使用"
            ],
            answer: 1,
            rationale: "QUIC 的 0-RTT 允许后续连接在发送数据的同时完成握手，适合移动网络等频繁重连的场景。"
        },
        {
            id: "bp-w9-3-q4",
            question: "什么是 QUIC 的连接迁移？",
            options: [
                "服务器迁移",
                "用户网络切换时（如 WiFi 到 4G）连接可以无缝继续",
                "数据中心迁移",
                "证书迁移"
            ],
            answer: 1,
            rationale: "QUIC 使用 Connection ID 标识连接，而非 IP:Port。网络切换时连接可以无缝迁移，无需重新握手。"
        },
        {
            id: "bp-w9-3-q5",
            question: "部署 QUIC/HTTP/3 可能遇到什么障碍？",
            options: [
                "浏览器不支持",
                "部分防火墙阻止或限制 UDP 流量",
                "证书不兼容",
                "服务器不支持"
            ],
            answer: 1,
            rationale: "部分企业网络和防火墙阻止 UDP 流量或限制 UDP 速率。QUIC 实现需要回退到 HTTP/2 over TCP 的能力。"
        },
        {
            id: "bp-w9-3-q6",
            question: "HTTP/3 与 HTTP/2 的主要区别是什么？",
            options: [
                "语法完全不同",
                "HTTP/3 底层使用 QUIC 代替 TCP+TLS",
                "HTTP/3 不支持头部压缩",
                "HTTP/3 是文本协议"
            ],
            answer: 1,
            rationale: "HTTP/3 (RFC 9114) 语法与 HTTP/2 相似（二进制帧、QPACK 头部压缩），但底层使用 QUIC 代替 TCP+TLS。"
        },
        {
            id: "bp-w9-3-q7",
            question: "QUIC 为什么选择基于 UDP？",
            options: [
                "UDP 更可靠",
                "UDP 不需要内核修改，便于在用户态实现和快速迭代",
                "UDP 更安全",
                "UDP 更快"
            ],
            answer: 1,
            rationale: "UDP 允许在用户态实现传输层功能，无需修改操作系统内核。这使得 QUIC 可以快速迭代和部署。"
        },
        {
            id: "bp-w9-3-q8",
            question: "如何调试 QUIC 连接？",
            options: [
                "使用 tcpdump",
                "使用 qlog 标准格式记录事件，用 qvis 可视化",
                "查看 HTTP 日志",
                "使用 ping"
            ],
            answer: 1,
            rationale: "QUIC 加密了几乎所有头信息，传统工具难以分析。使用 qlog 标准格式记录 QUIC 事件，用 qvis 可视化分析。"
        },
        {
            id: "bp-w9-3-q9",
            question: "Google 报告 QUIC 对 YouTube 视频有什么改善？",
            options: [
                "视频质量更好",
                "在弱网下减少 30% 的重缓冲",
                "视频文件更小",
                "广告更少"
            ],
            answer: 1,
            rationale: "Google 报告 QUIC 使 YouTube 视频在弱网下减少 30% 的重缓冲，这得益于 QUIC 的独立流和快速重传机制。"
        },
        {
            id: "bp-w9-3-q10",
            question: "Alt-Svc 头在 HTTP/3 部署中有什么作用？",
            options: [
                "设置缓存策略",
                "广告 HTTP/3 支持，用于协议协商和回退",
                "设置安全策略",
                "压缩响应"
            ],
            answer: 1,
            rationale: "Alt-Svc 头用于广告服务器支持的替代服务（如 HTTP/3），客户端可据此升级协议或在不支持时回退。"
        },
        {
            id: "bp-w9-3-q11",
            question: "QUIC 内置什么加密协议？",
            options: [
                "TLS 1.2",
                "TLS 1.3",
                "SSL 3.0",
                "无加密"
            ],
            answer: 1,
            rationale: "QUIC 内置 TLS 1.3，加密是协议的必要组成部分。所有 QUIC 连接都是加密的。"
        },
        {
            id: "bp-w9-3-q12",
            question: "QUIC 使用什么标识连接，使连接迁移成为可能？",
            options: [
                "IP 地址",
                "Connection ID",
                "MAC 地址",
                "端口号"
            ],
            answer: 1,
            rationale: "QUIC 使用 Connection ID 而非 IP:Port 标识连接。这使得用户网络切换时连接可以无缝继续。"
        }
    ]
}
