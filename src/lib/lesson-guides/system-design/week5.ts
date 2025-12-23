import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "w5-1": {
        lessonId: "w5-1",
        background: [
            "【DNS 核心功能】DNS（Domain Name System）是互联网的'电话簿'，将人类可读的域名转换为机器可处理的 IP 地址。'Without DNS, we would be navigating the internet by memorizing long strings of numbers instead of easy-to-remember URLs'。",
            "【四类 DNS 服务器】DNS 查询涉及四类服务器：递归解析器（Recursive Resolver）接收客户端请求并负责完整解析；根域名服务器（Root Nameserver）指向顶级域；TLD 服务器管理 .com/.org 等顶级域；权威服务器（Authoritative Nameserver）存储实际的 DNS 记录。",
            "【递归查询 vs 迭代查询】递归查询中，DNS 服务器承担全部工作，必须返回答案或错误。迭代查询中，服务器返回'referral to other DNS servers'，客户端继续查询直到获得最终答案。实际中，客户端到解析器是递归，解析器到其他服务器是迭代。",
            "【常见 DNS 记录类型】A 记录映射域名到 IPv4 地址；AAAA 记录映射到 IPv6；CNAME 是别名记录，指向另一个域名；MX 记录指定邮件服务器；NS 记录指定权威名称服务器；TXT 记录存储任意文本（常用于域名验证）。",
            "【DNS 消息格式】RFC 1035 定义 DNS 消息分为五部分：Header（标识符、操作码）、Question（查询问题）、Answer（答案）、Authority（权威）、Additional（附加）。响应代码（RCODE）指示查询结果：0=无错误，3=名称不存在（NXDOMAIN）。"
        ],
        keyDifficulties: [
            "【UDP 512 字节限制】RFC 1035 规定'UDP 消息限制在 512 字节以内，超长消息被截断并设置 TC 标志'。这导致早期 DNS 响应受限，后来 EDNS 扩展允许更大的 UDP 包（通常 4096 字节），支持 DNSSEC 等需要更多数据的功能。",
            "【TTL 的双刃剑效应】TTL（Time To Live）决定 DNS 记录的缓存时间。长 TTL 减少查询但更新慢（故障切换延迟）；短 TTL 更新快但增加 DNS 流量和延迟。生产环境通常在正常运行时使用长 TTL，计划变更前降低 TTL。",
            "【负缓存（Negative Caching）】RFC 2308 定义了负缓存：当查询返回 NXDOMAIN 时，这个'不存在'的结果也会被缓存。如果 TTL 设置过长，新创建的域名可能长时间无法解析。这就是为什么 SOA 记录的 minimum 字段要谨慎设置。",
            "【递归解析器的信任问题】用户的 DNS 查询默认发送到 ISP 的递归解析器，ISP 可以看到所有查询并可能被劫持。这就是为什么 DNS over HTTPS（DoH）和 DNS over TLS（DoT）变得重要——它们加密了到解析器的查询。"
        ],
        handsOnPath: [
            "使用 dig 命令查询不同记录类型：dig example.com A、dig example.com AAAA、dig example.com MX，观察各部分输出。",
            "追踪 DNS 解析全过程：dig +trace example.com，观察从根服务器到权威服务器的完整路径。",
            "在 messwithdns.net 创建个人子域名，添加各种 DNS 记录，观察实时查询日志。",
            "对比不同 DNS 解析器的性能：使用 DNS Benchmark 工具测试 8.8.8.8、1.1.1.1、114.114.114.114 的响应时间。",
            "使用 Wireshark 捕获 DNS 查询包，分析消息格式和各字段含义。"
        ],
        selfCheck: [
            "DNS 查询涉及哪四类服务器？各自的职责是什么？",
            "递归查询和迭代查询的核心区别是什么？",
            "A 记录、AAAA 记录、CNAME 记录、MX 记录分别用于什么？",
            "为什么 UDP DNS 消息有 512 字节限制？如何突破这个限制？",
            "TTL 设置过长和过短各有什么问题？"
        ],
        extensions: [
            "阅读 RFC 1035 原文，理解 DNS 协议的设计细节。",
            "研究 EDNS（Extension Mechanisms for DNS）如何扩展传统 DNS。",
            "学习 DNS 预取（dns-prefetch）如何优化网页加载性能。",
            "研究 Happy Eyeballs 算法如何在 IPv4/IPv6 双栈环境下优化 DNS 解析。"
        ],
        sourceUrls: [
            "https://uptimerobot.com/knowledge-hub/devops/understanding-dns-queries-a-complete-guide/",
            "https://datatracker.ietf.org/doc/html/rfc1035",
            "https://messwithdns.net/"
        ]
    },
    "w5-2": {
        lessonId: "w5-2",
        background: [
            "【DNS 负载均衡基础】DNS 负载均衡通过返回不同的 IP 地址将流量分发到多个服务器。最简单的形式是 DNS 轮询（Round Robin）：每次查询返回不同顺序的 IP 列表。但 DNS 轮询无法感知服务器健康状态，这就是为什么需要更智能的方案。",
            "【GeoDNS 工作原理】GeoDNS 基于客户端地理位置返回不同的 IP 地址，'directing users to the nearest or most appropriate server'。它通过查询递归解析器的 IP 并匹配 GeoIP 数据库（如 MaxMind）来确定位置。EDNS Client Subnet（ECS）扩展可以传递部分客户端 IP，提高定位精度。",
            "【Route 53 路由策略】AWS Route 53 提供多种路由策略：Simple（单一资源）、Weighted（按权重分配）、Latency（按延迟路由到最优 AWS 区域）、Geolocation（按地理位置）、Failover（主备故障转移）、Multivalue（返回多个健康 IP）。",
            "【GSLB 全局负载均衡】GSLB（Global Server Load Balancing）结合 DNS 和健康检查，在全球范围内分发流量。与简单 GeoDNS 不同，GSLB 可以监控端点健康状态，'自动故障转移到健康的端点'。Cloudflare、AWS Route 53、F5 都提供 GSLB 能力。",
            "【GeoDNS vs BGP Anycast】GeoDNS 在 DNS 层控制路由，依赖 GeoIP 数据库；BGP Anycast 在网络层工作，依赖 BGP 路由协议。GeoDNS'不需要 ISP 支持或网络基础设施变更'，部署更简单；Anycast 更适合 CDN 和 DNS 服务本身的高可用。"
        ],
        keyDifficulties: [
            "【GeoDNS 的定位局限】GeoDNS 依赖递归解析器 IP 来推断用户位置，而非用户真实 IP。当用户使用远程 DNS（如 8.8.8.8）时，可能被路由到错误的服务器。EDNS Client Subnet 部分缓解了这个问题，但并非所有解析器都支持。",
            "【DNS 缓存对负载均衡的影响】DNS 记录被各级缓存（浏览器、OS、ISP），导致流量分配不均匀——一个 ISP 的所有用户可能在 TTL 期间都被路由到同一服务器。这就是为什么 DNS 负载均衡通常与应用层 LB 配合使用。",
            "【Failover 路由的切换延迟】DNS Failover 依赖 TTL 过期才能生效。即使检测到故障并更新 DNS 记录，已缓存的客户端仍会访问故障服务器直到 TTL 过期。低 TTL 可以加快切换但增加 DNS 查询量。",
            "【Weighted 路由的统计偏差】Weighted 路由通过概率返回不同记录，但短期内可能出现显著偏差。例如 50/50 权重配置在 10 个请求中可能出现 7/3 分布。需要足够的请求量才能接近预期权重。"
        ],
        handsOnPath: [
            "使用 dig 查询同一域名多次，观察轮询 DNS 返回的 IP 顺序变化。",
            "配置 AWS Route 53 Weighted 路由：创建两个相同域名的 A 记录，分别指向不同 IP，设置权重比例。",
            "测试 Route 53 Failover：配置主备记录和健康检查，手动使主服务器不健康，观察 DNS 切换。",
            "使用 VPN 切换到不同国家，对比 GeoDNS 配置域名返回的 IP 差异。",
            "配置 Cloudflare Load Balancing：设置 pool、origin 和健康检查，观察流量分发和故障转移。"
        ],
        selfCheck: [
            "GeoDNS 如何确定用户的地理位置？这种方法有什么局限？",
            "Route 53 的 Latency 路由和 Geolocation 路由有什么区别？",
            "DNS 缓存如何影响 DNS 负载均衡的效果？",
            "GSLB 与简单 GeoDNS 的核心区别是什么？",
            "GeoDNS 和 BGP Anycast 各自适用于什么场景？"
        ],
        extensions: [
            "研究 EDNS Client Subnet（RFC 7871）如何改善 GeoDNS 精度。",
            "学习 AWS Global Accelerator 如何结合 Anycast 和 GSLB。",
            "研究 DNS 负载均衡在 CDN 中的应用（如 Akamai GTM）。",
            "了解 Multi-CDN 架构如何使用 DNS 在多个 CDN 间分发流量。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html",
            "https://developers.cloudflare.com/load-balancing/",
            "https://gcore.com/learning/what-is-geo-dns"
        ]
    },
    "w5-3": {
        lessonId: "w5-3",
        background: [
            "【多层缓存架构】DNS 缓存发生在多个层级形成层次结构：'DNS caching occurs at multiple levels, forming a hierarchical structure'——浏览器缓存是第一层，OS 缓存是第二层，ISP 的 DNS 解析器是第三层，最后是权威 DNS 服务器。",
            "【TTL 工作机制】TTL（Time To Live）决定缓存记录的有效期。权威 DNS 服务器为每条记录设置 TTL，计时从 DNS 查询解析时开始，过期后缓存被丢弃需要新查询。'shorter TTLs ensure that updates propagate quickly, while longer TTLs reduce queries and improve efficiency'。",
            "【负缓存的必要性】RFC 2308 定义负缓存为'存储某物不存在的知识'。当查询返回 NXDOMAIN 或 NODATA 时，这个否定结果也会被缓存。负缓存减少了对不存在域名的重复查询，降低了网络流量和服务器负载。",
            "【SOA Minimum 字段】RFC 2308 重新定义了 SOA 记录中 minimum 字段的用途——'用作负响应的生存时间（TTL）'。当权威服务器返回 NXDOMAIN 时，应在响应中包含 SOA 记录，其 TTL 由 SOA MINIMUM 字段与 SOA 本身 TTL 的最小值决定。",
            "【DNS 预取优化】dns-prefetch 是浏览器性能优化技术，'在浏览器请求资源之前预解析域名'。语法是 `<link rel=\"dns-prefetch\" href=\"https://example.com/\">`，仅对跨域有效，可以减少用户感知的延迟。"
        ],
        keyDifficulties: [
            "【TTL 权衡困境】TTL 设置存在根本性权衡：短 TTL 确保记录更新快速传播但增加 DNS 查询量；长 TTL 提升缓存效率但更新延迟大。更糟糕的是，'very short TTLs and aggressive retry strategies became even more vulnerable to cache poisoning'。",
            "【NXDOMAIN vs NODATA】两者都是否定响应但含义不同：NXDOMAIN 表示域名不存在（Name Error），NODATA 表示'名称有效但不存在特定类型记录'。NODATA 需要通过算法从响应内容推导判断，处理更复杂。",
            "【负缓存 TTL 限制】RFC 2308 建议'缓存负响应时应限制 TTL，建议不超过 1-3 小时'。如果负缓存 TTL 过长，新创建的域名可能在很长时间内无法被解析——用户会持续收到 NXDOMAIN。",
            "【preconnect vs dns-prefetch】两者都是资源提示，但作用不同：dns-prefetch 仅做 DNS 解析；preconnect 包含 DNS 解析、TCP 连接、TLS 握手。关键资源应使用 preconnect，非关键资源使用 dns-prefetch。'对于匿名加载的资源如字体需要添加 crossorigin 属性'。"
        ],
        handsOnPath: [
            "检查浏览器 DNS 缓存：Chrome 输入 chrome://net-internals/#dns 查看缓存条目和 TTL。",
            "刷新系统 DNS 缓存：macOS 使用 sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder，Windows 使用 ipconfig /flushdns。",
            "使用 dig 观察 TTL 变化：连续执行 dig example.com 多次，观察 TTL 值随时间递减。",
            "在 HTML 中添加 dns-prefetch：`<link rel=\"dns-prefetch\" href=\"https://fonts.googleapis.com/\">`，用 DevTools Network 面板观察 DNS 解析时间变化。",
            "测试负缓存：查询一个不存在的域名 dig nonexistent12345.example.com，观察 SOA 记录和负缓存 TTL。"
        ],
        selfCheck: [
            "DNS 缓存的四个层级分别是什么？各自的作用？",
            "TTL 设置过长和过短各有什么问题？",
            "什么是负缓存？为什么需要限制负缓存的 TTL？",
            "NXDOMAIN 和 NODATA 响应有什么区别？",
            "dns-prefetch 和 preconnect 的区别是什么？各自适用于什么场景？"
        ],
        extensions: [
            "研究 DNS 缓存投毒（Cache Poisoning）攻击的原理和防护措施。",
            "学习 DNSSEC 如何通过加密签名防止缓存投毒。",
            "研究 DNS 查询的源端口随机化如何增强安全性。",
            "了解 Happy Eyeballs 算法如何优化 IPv4/IPv6 双栈环境下的 DNS 缓存使用。"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/computer-networks/what-is-dns-caching/",
            "https://datatracker.ietf.org/doc/html/rfc2308",
            "https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch"
        ]
    },
    "w5-4": {
        lessonId: "w5-4",
        background: [
            "【DNSSEC 核心机制】DNSSEC 使用公私钥对对 DNS 响应进行数字签名，验证数据的真实性和完整性。'Each DNS zone has a public key and a private key'。当解析器收到 DNS 响应时，可以通过 RRSIG 记录中的签名验证数据未被篡改。",
            "【四种 DNSSEC 记录类型】RRSIG 包含资源记录集的数字签名；DNSKEY 包含用于验证签名的公钥；DS（Delegation Signer）存储子域 DNSKEY 的哈希，建立父子域信任链；NSEC/NSEC3 用于认证不存在的记录。",
            "【ZSK 与 KSK 分离】DNSSEC 使用两种密钥：Zone-Signing Key（ZSK）用于签署区域内的记录；Key-Signing Key（KSK）用于签署 ZSK。'The KSK is used to sign the ZSK, which is used to sign the zone records'。这种分离允许频繁轮换 ZSK 而无需更新父域的 DS 记录。",
            "【信任链构建】DNSSEC 的信任链从根区域开始：'a Delegation Signer (DS) record in a parent domain can be used to verify a DNSKEY record in a subdomain'。解析器从根的 Trust Anchor 开始，逐级验证 .com → example.com → www.example.com。",
            "【DNS over HTTPS (DoH)】DoH 将 DNS 查询'encrypted and sent via the HTTP, HTTP/2 and HTTP/3 protocols'，使用 443 端口与普通 HTTPS 流量混合。与传统明文 DNS 不同，DoH 确保'attackers cannot forge or alter DNS traffic'。"
        ],
        keyDifficulties: [
            "【DNSSEC vs DoH/DoT 的区别】DNSSEC 提供数据完整性验证（防篡改），但不加密查询内容——任何人仍可看到你查询的域名。DoH/DoT 提供传输加密（防窃听），但不验证数据真实性。两者应配合使用：DNSSEC 保证'数据来自正确的源'，DoH 保证'查询过程不被监听'。",
            "【根签名仪式】根区域没有父域 DS 记录，如何建立信任？通过'Root Signing Ceremony'——'several selected individuals from around the world come together and sign the root DNSKEY RRset in a very public and highly audited way'。大多数解析器预配置了根区域公钥作为 Trust Anchor。",
            "【Facebook 2021 宕机教训】Facebook 内部配置变更'影响了整个内部骨干网络'，导致 BGP 路由撤回。当 Facebook 停止宣告 DNS 前缀路由后，全球 DNS 解析器无法连接其名称服务器。用户重试导致'1.1.1.1 收到的流量增加了 30 倍'——故障被放大。",
            "【DoH 的争议】DoH 虽然提供隐私保护，但也带来挑战：企业无法监控/过滤 DNS 流量、ISP 无法实施家长控制、可能绕过本地 DNS 策略。Firefox 和 Chrome 对 DoH 的默认行为采取不同策略。"
        ],
        handsOnPath: [
            "使用 dig 检查域名的 DNSSEC 状态：dig example.com +dnssec，观察 RRSIG 记录和 ad（Authenticated Data）标志。",
            "验证 DNSSEC 信任链：使用 dnsviz.net 可视化工具查看从根到目标域名的完整信任链。",
            "测试 DoH：使用 curl 向 1.1.1.1 发送 DoH 请求：curl -H 'accept: application/dns-json' 'https://1.1.1.1/dns-query?name=example.com'。",
            "在浏览器中启用 DoH：Firefox 设置 → 隐私与安全 → DNS over HTTPS；Chrome 设置 → 安全 → 使用安全 DNS。",
            "分析 DNS 故障：使用 traceroute 和 dig 模拟 DNS 服务器不可达的场景，观察错误传播。"
        ],
        selfCheck: [
            "DNSSEC 的四种记录类型分别是什么？各自的作用？",
            "ZSK 和 KSK 为什么要分开？各自的职责是什么？",
            "DNSSEC 和 DoH 分别解决什么问题？为什么需要同时使用？",
            "DNSSEC 的信任链是如何建立的？从根到子域如何验证？",
            "Facebook 2021 年宕机事件中，DNS 和 BGP 的关系是什么？"
        ],
        extensions: [
            "研究 DNS over TLS (DoT) 与 DNS over HTTPS (DoH) 的差异和各自适用场景。",
            "学习 DNS 劫持、DNS 放大攻击等 DNS 安全威胁的防护措施。",
            "研究企业环境下如何平衡 DoH 隐私保护与网络安全监控需求。",
            "了解 DANE（DNS-Based Authentication of Named Entities）如何使用 DNSSEC 增强 TLS 安全性。"
        ],
        sourceUrls: [
            "https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions",
            "https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/",
            "https://blog.cloudflare.com/october-2021-facebook-outage/"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "w5-1": [
        {
            id: "w5-1-q1",
            question: "DNS 查询涉及的四类服务器按查询顺序是什么？",
            options: [
                "权威服务器 → TLD 服务器 → 根服务器 → 递归解析器",
                "递归解析器 → 根服务器 → TLD 服务器 → 权威服务器",
                "根服务器 → 递归解析器 → TLD 服务器 → 权威服务器",
                "TLD 服务器 → 根服务器 → 递归解析器 → 权威服务器"
            ],
            answer: 1,
            rationale: "DNS 查询顺序：客户端联系递归解析器，解析器依次查询根服务器、TLD 服务器、权威服务器获取最终答案。"
        },
        {
            id: "w5-1-q2",
            question: "递归查询和迭代查询的核心区别是什么？",
            options: [
                "递归查询更快",
                "迭代查询更安全",
                "递归查询中服务器承担全部工作，迭代查询中服务器返回引用让客户端继续查询",
                "递归查询只用于内网"
            ],
            answer: 2,
            rationale: "递归查询'place full responsibility on the DNS server'，迭代查询'shift some burden to the client; the server provides referrals rather than complete answers'。"
        },
        {
            id: "w5-1-q3",
            question: "CNAME 记录的作用是什么？",
            options: [
                "映射域名到 IPv4 地址",
                "映射域名到 IPv6 地址",
                "作为别名指向另一个域名",
                "指定邮件服务器"
            ],
            answer: 2,
            rationale: "CNAME（Canonical Name）是别名记录，'points one fully qualified domain name to another'，例如 www.example.com 指向 example.com。"
        },
        {
            id: "w5-1-q4",
            question: "RFC 1035 规定的 UDP DNS 消息大小限制是多少？",
            options: [
                "256 字节",
                "512 字节",
                "1024 字节",
                "4096 字节"
            ],
            answer: 1,
            rationale: "RFC 1035 规定'UDP 消息限制在 512 字节以内，超长消息被截断并设置 TC 标志'。EDNS 扩展后可支持更大的包。"
        },
        {
            id: "w5-1-q5",
            question: "DNS 响应代码 RCODE=3 表示什么？",
            options: [
                "无错误",
                "格式错误",
                "名称不存在（NXDOMAIN）",
                "服务器拒绝"
            ],
            answer: 2,
            rationale: "RCODE 是 4 位响应代码：0=无错误，1=格式错误，2=服务器故障，3=名称错误（NXDOMAIN），5=被拒绝。"
        },
        {
            id: "w5-1-q6",
            question: "TTL 设置过长会导致什么问题？",
            options: [
                "DNS 流量过大",
                "查询延迟增加",
                "DNS 记录更新后故障切换延迟",
                "安全风险增加"
            ],
            answer: 2,
            rationale: "长 TTL 意味着缓存时间长，DNS 记录更新后需要等待缓存过期才能生效，导致故障切换延迟。"
        },
        {
            id: "w5-1-q7",
            question: "什么是负缓存（Negative Caching）？",
            options: [
                "缓存查询失败的次数",
                "缓存 NXDOMAIN 等不存在的查询结果",
                "禁用 DNS 缓存",
                "缓存过期的记录"
            ],
            answer: 1,
            rationale: "负缓存是缓存'不存在'的结果，当查询返回 NXDOMAIN 时这个结果也会被缓存，避免重复查询不存在的域名。"
        },
        {
            id: "w5-1-q8",
            question: "A 记录和 AAAA 记录的区别是什么？",
            options: [
                "A 记录用于邮件，AAAA 用于网页",
                "A 记录映射 IPv4，AAAA 映射 IPv6",
                "A 记录是别名，AAAA 是主记录",
                "没有区别"
            ],
            answer: 1,
            rationale: "A 记录'maps the requested hostname to the corresponding IPv4 address'，AAAA 记录'works with IPv6 addresses'。"
        },
        {
            id: "w5-1-q9",
            question: "DNS 消息的五个部分不包括哪个？",
            options: [
                "Header",
                "Question",
                "Signature",
                "Additional"
            ],
            answer: 2,
            rationale: "DNS 消息分为五部分：Header、Question、Answer、Authority、Additional。Signature 不是标准 DNS 消息的一部分（DNSSEC 签名在 Answer 等部分中）。"
        },
        {
            id: "w5-1-q10",
            question: "MX 记录的作用是什么？",
            options: [
                "指定域名别名",
                "指定邮件服务器",
                "指定 IPv6 地址",
                "指定权威名称服务器"
            ],
            answer: 1,
            rationale: "MX（Mail Exchange）记录'指定邮件服务器'，用于邮件路由，告诉发送方应该把邮件发到哪个服务器。"
        },
        {
            id: "w5-1-q11",
            question: "为什么 ISP 的 DNS 解析器存在隐私问题？",
            options: [
                "解析速度慢",
                "ISP 可以看到所有 DNS 查询并可能被劫持",
                "不支持 IPv6",
                "缓存时间过短"
            ],
            answer: 1,
            rationale: "用户的 DNS 查询默认发送到 ISP 的递归解析器，ISP 可以看到所有查询内容，这就是 DoH/DoT 变得重要的原因。"
        },
        {
            id: "w5-1-q12",
            question: "dig +trace 命令的作用是什么？",
            options: [
                "测试 DNS 服务器速度",
                "追踪从根服务器到权威服务器的完整解析路径",
                "清除 DNS 缓存",
                "查询所有记录类型"
            ],
            answer: 1,
            rationale: "dig +trace 从根服务器开始追踪整个 DNS 解析过程，显示每一跳的查询和响应，帮助理解 DNS 解析链路。"
        }
    ],
    "w5-2": [
        {
            id: "w5-2-q1",
            question: "GeoDNS 如何确定用户的地理位置？",
            options: [
                "通过用户设备的 GPS",
                "通过查询递归解析器的 IP 并匹配 GeoIP 数据库",
                "通过 HTTP 请求头",
                "通过用户手动输入"
            ],
            answer: 1,
            rationale: "GeoDNS'通过查询递归解析器的 IP 并匹配 GeoIP 数据库（如 MaxMind）来确定位置'，而非直接获取用户 IP。"
        },
        {
            id: "w5-2-q2",
            question: "Route 53 的 Latency 路由策略的作用是什么？",
            options: [
                "按地理位置路由",
                "按延迟性能路由到最优 AWS 区域",
                "按权重分配流量",
                "故障时自动切换"
            ],
            answer: 1,
            rationale: "Latency 路由'根据延迟性能将流量路由到最优 AWS 区域'，自动选择对用户响应最快的区域。"
        },
        {
            id: "w5-2-q3",
            question: "GSLB 与简单 GeoDNS 的核心区别是什么？",
            options: [
                "GSLB 只支持单一区域",
                "GSLB 可以监控端点健康状态并自动故障转移",
                "GeoDNS 更精确",
                "没有区别"
            ],
            answer: 1,
            rationale: "GSLB'结合 DNS 和健康检查，可以监控端点健康状态，自动故障转移到健康的端点'，而简单 GeoDNS 不感知健康状态。"
        },
        {
            id: "w5-2-q4",
            question: "使用远程 DNS（如 8.8.8.8）对 GeoDNS 有什么影响？",
            options: [
                "解析速度更快",
                "可能被路由到错误的服务器",
                "更安全",
                "没有影响"
            ],
            answer: 1,
            rationale: "GeoDNS 依赖递归解析器 IP 推断位置，当用户使用远程 DNS 时，解析器位置可能与用户位置不同，导致路由错误。"
        },
        {
            id: "w5-2-q5",
            question: "EDNS Client Subnet 扩展的作用是什么？",
            options: [
                "加密 DNS 查询",
                "传递部分客户端 IP 提高 GeoDNS 定位精度",
                "增加 DNS 包大小",
                "支持 IPv6"
            ],
            answer: 1,
            rationale: "EDNS Client Subnet（ECS）'传递部分客户端 IP'到权威服务器，使 GeoDNS 能更准确地定位用户而非解析器。"
        },
        {
            id: "w5-2-q6",
            question: "DNS Failover 的切换延迟主要受什么影响？",
            options: [
                "网络带宽",
                "TTL 过期时间",
                "服务器性能",
                "地理距离"
            ],
            answer: 1,
            rationale: "DNS Failover 依赖 TTL 过期才能生效，'已缓存的客户端仍会访问故障服务器直到 TTL 过期'。"
        },
        {
            id: "w5-2-q7",
            question: "GeoDNS 和 BGP Anycast 的主要区别是什么？",
            options: [
                "GeoDNS 更快",
                "GeoDNS 在 DNS 层工作，Anycast 在网络层工作",
                "Anycast 更简单",
                "没有区别"
            ],
            answer: 1,
            rationale: "GeoDNS 在 DNS 层控制路由依赖 GeoIP 数据库；BGP Anycast 在网络层工作依赖 BGP 路由协议。"
        },
        {
            id: "w5-2-q8",
            question: "Route 53 Multivalue 路由策略的特点是什么？",
            options: [
                "只返回一个 IP",
                "随机返回最多 8 条健康 DNS 记录",
                "按权重返回",
                "按延迟返回"
            ],
            answer: 1,
            rationale: "Multivalue 路由'随机返回最多 8 条健康 DNS 记录'供客户端选择，提供简单的负载均衡和故障转移。"
        },
        {
            id: "w5-2-q9",
            question: "DNS 缓存如何影响 DNS 负载均衡的效果？",
            options: [
                "提高负载均衡精度",
                "导致流量分配不均匀，因为同一 ISP 用户可能都被路由到同一服务器",
                "减少服务器负载",
                "没有影响"
            ],
            answer: 1,
            rationale: "DNS 记录被各级缓存，'一个 ISP 的所有用户可能在 TTL 期间都被路由到同一服务器'，导致流量分配不均。"
        },
        {
            id: "w5-2-q10",
            question: "Weighted 路由短期内可能出现什么问题？",
            options: [
                "无法工作",
                "统计偏差，实际分布与预期权重不符",
                "安全风险",
                "延迟增加"
            ],
            answer: 1,
            rationale: "Weighted 路由通过概率返回记录，短期内可能出现统计偏差，'50/50 权重在 10 个请求中可能出现 7/3 分布'。"
        },
        {
            id: "w5-2-q11",
            question: "Route 53 Geolocation 和 Latency 路由的区别是什么？",
            options: [
                "Geolocation 按地理位置，Latency 按网络延迟",
                "两者完全相同",
                "Latency 只支持美国区域",
                "Geolocation 更快"
            ],
            answer: 0,
            rationale: "Geolocation'基于用户地理位置路由'（如国家、大洲），Latency'根据延迟性能路由到最优 AWS 区域'（可能跨区域）。"
        },
        {
            id: "w5-2-q12",
            question: "GeoDNS 部署相比 BGP Anycast 的优势是什么？",
            options: [
                "更高性能",
                "不需要 ISP 支持或网络基础设施变更",
                "更安全",
                "更便宜"
            ],
            answer: 1,
            rationale: "GeoDNS'不需要 ISP 支持或网络基础设施变更'，只需配置 DNS 记录和 GeoIP 数据库即可实现地理路由。"
        }
    ],
    "w5-3": [
        {
            id: "w5-3-q1",
            question: "DNS 缓存的四个层级按查询顺序是什么？",
            options: [
                "权威服务器 → DNS 解析器 → OS 缓存 → 浏览器缓存",
                "浏览器缓存 → OS 缓存 → DNS 解析器 → 权威服务器",
                "DNS 解析器 → 浏览器缓存 → OS 缓存 → 权威服务器",
                "OS 缓存 → 浏览器缓存 → DNS 解析器 → 权威服务器"
            ],
            answer: 1,
            rationale: "DNS 缓存形成层次结构：'浏览器缓存是第一层，OS 缓存是第二层，ISP 的 DNS 解析器是第三层，最后是权威 DNS 服务器'。"
        },
        {
            id: "w5-3-q2",
            question: "TTL（Time To Live）在 DNS 中的作用是什么？",
            options: [
                "限制 DNS 查询的跳数",
                "决定缓存记录的有效期",
                "控制 DNS 服务器的负载",
                "指定 DNS 服务器的优先级"
            ],
            answer: 1,
            rationale: "TTL'决定缓存记录的有效期'。权威 DNS 服务器为每条记录设置 TTL，过期后缓存被丢弃需要新查询。"
        },
        {
            id: "w5-3-q3",
            question: "RFC 2308 定义的负缓存（Negative Caching）是什么？",
            options: [
                "缓存查询失败的次数",
                "缓存某物不存在的知识（如 NXDOMAIN）",
                "禁用 DNS 缓存",
                "缓存被拒绝的查询"
            ],
            answer: 1,
            rationale: "RFC 2308 定义负缓存为'存储某物不存在的知识'。当查询返回 NXDOMAIN 或 NODATA 时，这个否定结果也会被缓存。"
        },
        {
            id: "w5-3-q4",
            question: "SOA 记录中 minimum 字段在 RFC 2308 后的用途是什么？",
            options: [
                "设置最小刷新间隔",
                "用作负响应的生存时间（TTL）",
                "限制最小查询频率",
                "指定最小记录数量"
            ],
            answer: 1,
            rationale: "RFC 2308 重新定义 SOA minimum 字段'用作负响应的生存时间（TTL）'，控制 NXDOMAIN 等否定响应的缓存时间。"
        },
        {
            id: "w5-3-q5",
            question: "NXDOMAIN 和 NODATA 响应的区别是什么？",
            options: [
                "没有区别，都表示查询失败",
                "NXDOMAIN 表示域名不存在，NODATA 表示名称有效但无特定类型记录",
                "NODATA 表示域名不存在，NXDOMAIN 表示无记录",
                "NXDOMAIN 是临时错误，NODATA 是永久错误"
            ],
            answer: 1,
            rationale: "NXDOMAIN 表示域名不存在（Name Error），NODATA 表示'名称有效但不存在特定类型记录'，两者处理方式不同。"
        },
        {
            id: "w5-3-q6",
            question: "RFC 2308 建议负缓存 TTL 应该控制在什么范围？",
            options: [
                "不超过 10 分钟",
                "不超过 1-3 小时",
                "不超过 24 小时",
                "不超过 1 周"
            ],
            answer: 1,
            rationale: "RFC 2308 建议'缓存负响应时应限制 TTL，建议不超过 1-3 小时'，防止新域名长时间无法解析。"
        },
        {
            id: "w5-3-q7",
            question: "dns-prefetch 的作用是什么？",
            options: [
                "预先建立 TCP 连接",
                "在浏览器请求资源之前预解析域名",
                "预先下载 DNS 记录",
                "预先缓存网页内容"
            ],
            answer: 1,
            rationale: "dns-prefetch 是'在浏览器请求资源之前预解析域名'的性能优化技术，减少用户感知的延迟。"
        },
        {
            id: "w5-3-q8",
            question: "dns-prefetch 和 preconnect 的区别是什么？",
            options: [
                "两者功能相同",
                "dns-prefetch 仅做 DNS 解析，preconnect 还包含 TCP 连接和 TLS 握手",
                "preconnect 仅做 DNS 解析，dns-prefetch 包含完整连接",
                "dns-prefetch 用于 HTTP，preconnect 用于 HTTPS"
            ],
            answer: 1,
            rationale: "dns-prefetch 仅做 DNS 解析；preconnect 包含 DNS 解析、TCP 连接、TLS 握手。关键资源应使用 preconnect。"
        },
        {
            id: "w5-3-q9",
            question: "为什么过短的 TTL 反而可能降低安全性？",
            options: [
                "增加服务器负载",
                "非常短的 TTL 和激进的重试策略更容易受到缓存投毒攻击",
                "DNS 解析变慢",
                "增加网络流量"
            ],
            answer: 1,
            rationale: "'very short TTLs and aggressive retry strategies became even more vulnerable to cache poisoning'——频繁查询增加了攻击窗口。"
        },
        {
            id: "w5-3-q10",
            question: "使用 dns-prefetch 时需要注意什么？",
            options: [
                "必须在 body 标签中使用",
                "仅对跨域有效，且对于匿名加载的资源需要 crossorigin 属性",
                "只能用于 HTTP 资源",
                "必须配合 preconnect 使用"
            ],
            answer: 1,
            rationale: "dns-prefetch'仅对跨域有效'，'对于匿名加载的资源如字体需要添加 crossorigin 属性'，否则浏览器仅执行 DNS 查询。"
        },
        {
            id: "w5-3-q11",
            question: "TTL 设置过长会导致什么问题？",
            options: [
                "DNS 流量增加",
                "DNS 记录更新后传播延迟大，故障切换慢",
                "DNS 查询延迟增加",
                "缓存投毒风险增加"
            ],
            answer: 1,
            rationale: "长 TTL 意味着'更新延迟大'，DNS 记录更新后需要等待各级缓存过期才能生效，影响故障切换速度。"
        },
        {
            id: "w5-3-q12",
            question: "如何在 Chrome 浏览器中查看 DNS 缓存？",
            options: [
                "chrome://dns-cache",
                "chrome://net-internals/#dns",
                "chrome://network/dns",
                "chrome://settings/dns"
            ],
            answer: 1,
            rationale: "Chrome 浏览器可以通过 chrome://net-internals/#dns 查看 DNS 缓存条目和 TTL 信息。"
        }
    ],
    "w5-4": [
        {
            id: "w5-4-q1",
            question: "DNSSEC 使用什么机制验证 DNS 响应的真实性？",
            options: [
                "对称加密",
                "公私钥对和数字签名",
                "哈希校验和",
                "TLS 证书"
            ],
            answer: 1,
            rationale: "DNSSEC 使用'公私钥对对 DNS 响应进行数字签名'，'Each DNS zone has a public key and a private key'。"
        },
        {
            id: "w5-4-q2",
            question: "RRSIG 记录的作用是什么？",
            options: [
                "存储公钥",
                "包含资源记录集的数字签名",
                "建立信任链",
                "存储域名哈希"
            ],
            answer: 1,
            rationale: "RRSIG（Resource Record Signature）'包含资源记录集的数字签名'，解析器用它来验证 DNS 响应的完整性。"
        },
        {
            id: "w5-4-q3",
            question: "DS（Delegation Signer）记录的作用是什么？",
            options: [
                "签署区域内的记录",
                "存储子域 DNSKEY 的哈希，建立父子域信任链",
                "加密 DNS 查询",
                "存储域名的 IP 地址"
            ],
            answer: 1,
            rationale: "DS 记录'存储子域 DNSKEY 的哈希'，'a DS record in a parent domain can be used to verify a DNSKEY record in a subdomain'。"
        },
        {
            id: "w5-4-q4",
            question: "ZSK 和 KSK 分离的主要原因是什么？",
            options: [
                "提高加密强度",
                "允许频繁轮换 ZSK 而无需更新父域的 DS 记录",
                "减少存储空间",
                "加快签名速度"
            ],
            answer: 1,
            rationale: "'KSK 用于签署 ZSK，ZSK 用于签署区域记录'。这种分离允许频繁轮换 ZSK 而无需更新父域的 DS 记录。"
        },
        {
            id: "w5-4-q5",
            question: "DNSSEC 的信任链从哪里开始？",
            options: [
                "ISP 的 DNS 服务器",
                "根区域的 Trust Anchor",
                "本地 DNS 缓存",
                "域名注册商"
            ],
            answer: 1,
            rationale: "DNSSEC 信任链'从根区域开始'，'大多数解析器预配置了根区域公钥作为 Trust Anchor'。"
        },
        {
            id: "w5-4-q6",
            question: "根区域的 DNSKEY 是如何被签署的？",
            options: [
                "由父域签署",
                "通过公开审计的根签名仪式由多人共同签署",
                "自动生成",
                "由 ICANN 单独签署"
            ],
            answer: 1,
            rationale: "'Root Signing Ceremony'中，'several selected individuals from around the world come together and sign the root DNSKEY RRset in a very public and highly audited way'。"
        },
        {
            id: "w5-4-q7",
            question: "DNS over HTTPS (DoH) 使用什么端口？",
            options: [
                "53",
                "443",
                "853",
                "8080"
            ],
            answer: 1,
            rationale: "DoH 使用 443 端口（标准 HTTPS 端口），'使 DNS 流量与其他网络通信混合在一起'。"
        },
        {
            id: "w5-4-q8",
            question: "DNSSEC 和 DoH 的核心区别是什么？",
            options: [
                "两者功能相同",
                "DNSSEC 验证数据完整性（防篡改），DoH 加密传输（防窃听）",
                "DoH 验证数据，DNSSEC 加密传输",
                "DNSSEC 更快，DoH 更安全"
            ],
            answer: 1,
            rationale: "DNSSEC 保证'数据来自正确的源'（防篡改），DoH 保证'查询过程不被监听'（防窃听）。两者应配合使用。"
        },
        {
            id: "w5-4-q9",
            question: "Facebook 2021 年宕机事件的根本原因是什么？",
            options: [
                "DNS 服务器被攻击",
                "内部配置变更导致 BGP 路由撤回",
                "数据中心断电",
                "DDoS 攻击"
            ],
            answer: 1,
            rationale: "Facebook'内部配置变更影响了整个内部骨干网络'，导致 BGP 路由撤回，DNS 前缀不再被宣告。"
        },
        {
            id: "w5-4-q10",
            question: "Facebook 宕机期间，Cloudflare 1.1.1.1 的流量增加了多少？",
            options: [
                "增加了 5 倍",
                "增加了 30 倍",
                "增加了 100 倍",
                "增加了 10%"
            ],
            answer: 1,
            rationale: "用户重试导致'1.1.1.1 收到的流量增加了 30 倍'——故障被用户的重试行为放大。"
        },
        {
            id: "w5-4-q11",
            question: "DoH 的主要争议点是什么？",
            options: [
                "性能太差",
                "企业无法监控/过滤 DNS 流量，可能绕过本地 DNS 策略",
                "不支持所有浏览器",
                "需要额外付费"
            ],
            answer: 1,
            rationale: "DoH 虽然提供隐私保护，但'企业无法监控/过滤 DNS 流量、ISP 无法实施家长控制、可能绕过本地 DNS 策略'。"
        },
        {
            id: "w5-4-q12",
            question: "如何使用 dig 检查域名的 DNSSEC 状态？",
            options: [
                "dig example.com +secure",
                "dig example.com +dnssec",
                "dig example.com +verify",
                "dig example.com +sign"
            ],
            answer: 1,
            rationale: "使用 dig example.com +dnssec 可以查看 RRSIG 记录和 ad（Authenticated Data）标志，验证 DNSSEC 状态。"
        }
    ]
}
