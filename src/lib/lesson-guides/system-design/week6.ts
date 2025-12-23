import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "w6-1": {
        lessonId: "w6-1",
        background: [
            "【CDN 核心定义】CDN（Content Delivery Network）是'a network of interconnected servers that speeds up webpage loading for data-heavy applications'。通过在全球部署边缘服务器，将内容缓存到离用户最近的位置，减少延迟和源站负载。",
            "【边缘节点架构】CDN 采用分层架构：Edge Nodes（L1）直接服务用户，Regional Nodes（L2）作为内容分发点处理边缘节点的缓存未命中。这种层级设计'reduces latency for end-users and distributes the load efficiently'。",
            "【PoP 部署策略】Points of Presence（PoP）是'areas with high internet traffic and near major internet exchange points (IXPs)'的战略部署点。Amazon CloudFront 拥有 450+ 全球分布的 PoP，每个 PoP 包含多台边缘服务器以实现冗余和负载分担。",
            "【回源机制】当边缘节点没有缓存内容时，需要回源（Origin Fetch）获取。CDN 优化了边缘到源站的连接：'If the nearby CDN server forwards the request to the origin server, they would already have an ongoing, trusted connection established'，避免了重复握手开销。",
            "【Anycast 路由】Anycast 是'a network addressing and routing methodology in which a single IP address is shared by devices in multiple locations'。路由器根据 BGP 协议将请求发送到拓扑上最近的节点，实现就近接入和负载均衡。"
        ],
        keyDifficulties: [
            "【Anycast vs Unicast】Unicast 采用一对一模式，每个 IP 固定关联一个服务器。Anycast 虽然也路由到单一目标，但'routes the sender to one specific node even though multiple nodes are available'——可选择地理上最近的节点。IPv4 不原生支持 Anycast，需通过 BGP 变通实现；IPv6 原生支持。",
            "【BGP 与 Anycast 实现】'Each server advertises the same IP, and BGP determines the optimal route based on routing policies and network topology, not just physical distance'。当服务器下线时 BGP 停止宣告该路由，请求自动转向下一个最佳节点——这是 Anycast 高可用的关键。",
            "【Anycast 的有状态连接问题】Anycast 对无状态请求效果最佳，但'real-time applications like voice calls, video conferencing, or financial transactions that depend on long-lived, stateful connections can sometimes experience disruptions if routing changes mid-session'。",
            "【CDN 部署复杂性】建立真正的 Anycast 网络'requires that a CDN provider maintains their own network hardware, builds direct relationships with their upstream carriers, and tunes their networking routes to ensure traffic doesn't flap between multiple locations'——这就是为什么 CDN 服务通常由大型厂商提供。"
        ],
        handsOnPath: [
            "使用 dig 或 nslookup 查询 CDN 域名（如 cdn.cloudflare.com），观察返回的 IP 地址；从不同地理位置（或使用 VPN）重复查询，比较结果。",
            "使用 traceroute 追踪到 CDN 节点的路径，观察请求经过的网络跳数和延迟。",
            "使用浏览器开发者工具检查网站资源的 HTTP 响应头，识别 CDN 特征头（如 CF-Ray、X-Cache、Via）。",
            "在 WebPageTest 或 GTmetrix 上测试同一网站从不同地理位置的加载性能，对比首字节时间（TTFB）差异。",
            "研究 Cloudflare 或 AWS CloudFront 的 PoP 分布地图，理解边缘节点的全球覆盖策略。"
        ],
        selfCheck: [
            "CDN 的边缘节点层级结构是什么？L1 和 L2 各自的职责？",
            "什么是 PoP？它们通常部署在什么位置？",
            "Anycast 如何实现就近接入？它与 Unicast 的核心区别是什么？",
            "BGP 在 Anycast 实现中扮演什么角色？",
            "为什么 Anycast 不适合有状态的长连接应用？"
        ],
        extensions: [
            "研究 Akamai、Cloudflare、AWS CloudFront 三大 CDN 的架构差异。",
            "学习 Internet Exchange Point（IXP）在 CDN 部署中的作用。",
            "了解 CDN 如何与 DNS 配合实现智能路由（GeoDNS + Anycast）。",
            "研究 CDN 的 DDoS 防护能力：Anycast 如何分散攻击流量。"
        ],
        sourceUrls: [
            "https://aws.amazon.com/what-is/cdn/",
            "https://edgeone.ai/learning/cdn-architecture",
            "https://www.keycdn.com/support/anycast"
        ]
    },
    "w6-2": {
        lessonId: "w6-2",
        background: [
            "【缓存类型】HTTP 缓存分为两大类：Private Cache（私有缓存）绑定特定客户端如浏览器，存储个性化响应；Shared Cache（共享缓存）包括 Proxy 缓存和 Managed 缓存（CDN、反向代理），服务多用户。",
            "【Cache-Control 核心指令】max-age 定义缓存新鲜期（秒）；no-cache 表示'returned responses can't be used for subsequent requests before checking if server responses have changed'——必须重新验证；no-store 完全禁止缓存；public 允许共享缓存存储；private 限制仅私有缓存。",
            "【s-maxage 指令】s-maxage 专门覆盖共享缓存（CDN）的 max-age 设置。例如 Cache-Control: max-age=60, s-maxage=3600 表示浏览器缓存 1 分钟，CDN 缓存 1 小时。这允许对不同缓存层设置不同策略。",
            "【ETag 验证机制】ETag 提供高效的缓存重新验证。服务器返回 ETag: \"33a64df5\"，客户端缓存过期后发送 If-None-Match: \"33a64df5\"，服务器若内容未变返回 304 Not Modified，避免重复传输整个资源。",
            "【Cache Busting 策略】静态资源使用版本化 URL 实现长期缓存：bundle.v123.js 可设置 Cache-Control: public, max-age=31536000, immutable。内容变更时更新 URL（而非清除缓存），确保用户立即获取新版本。"
        ],
        keyDifficulties: [
            "【no-cache vs no-store】no-cache 并非'不缓存'，而是'每次使用前必须验证'——响应仍被存储。no-store 才是真正禁止任何形式的缓存存储。常见误解导致配置错误。",
            "【Vary 头的缓存分裂】Vary 头告诉缓存根据指定请求头分别存储响应。Vary: Accept-Language 会为每种语言创建独立缓存条目。过度使用 Vary 会导致缓存碎片化，降低命中率。",
            "【HTML 无法 Cache Busting】HTML 文件的 URL 通常固定（如 /index.html），无法通过版本化 URL 实现长期缓存。最佳实践是使用 Cache-Control: no-cache 配合 ETag/Last-Modified 进行验证。",
            "【CDN 缓存清除的限制】Cloudflare 等 CDN 对 Purge 请求有频率限制：免费版 5 次/分钟，企业版 50 次/秒。大规模清除需要考虑'token bucket rate limiting'机制，避免超限被拒绝。"
        ],
        handsOnPath: [
            "使用浏览器开发者工具 Network 面板检查请求的缓存状态：观察 disk cache、memory cache、304 Not Modified。",
            "配置 NGINX 或 Apache 为静态资源设置 Cache-Control 头：expires 指令设置过期时间，add_header 添加自定义头。",
            "使用 curl -I 检查 HTTP 响应头：观察 Cache-Control、ETag、Last-Modified、Vary 等缓存相关头。",
            "在 Cloudflare Dashboard 中配置 Page Rules 设置不同路径的缓存策略，使用 Purge Cache 功能清除特定 URL。",
            "实现 Cache Busting：修改构建工具配置（Webpack/Vite）为输出文件添加内容哈希，如 bundle.[contenthash].js。"
        ],
        selfCheck: [
            "Cache-Control: no-cache 和 no-store 的区别是什么？",
            "max-age 和 s-maxage 的区别是什么？各自影响哪些缓存？",
            "ETag 验证流程是怎样的？304 响应意味着什么？",
            "为什么静态资源推荐使用 Cache Busting 而非短 TTL？",
            "Vary 头如何影响缓存行为？过度使用有什么问题？"
        ],
        extensions: [
            "研究 stale-while-revalidate 和 stale-if-error 指令的用法。",
            "学习 Service Worker 如何实现更精细的缓存控制。",
            "了解 CDN 的 Cache Tags 和 Surrogate Keys 实现精准清除。",
            "研究 HTTP/2 Push 与缓存的交互问题。"
        ],
        sourceUrls: [
            "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
            "https://www.keycdn.com/blog/http-cache-headers",
            "https://developers.cloudflare.com/cache/how-to/purge-cache/"
        ]
    },
    "w6-3": {
        lessonId: "w6-3",
        background: [
            "【动态内容加速】传统 CDN 主要缓存静态内容，对于无法缓存的动态内容（API 响应、个性化页面），DSA（Dynamic Site Acceleration）通过优化传输路径和协议来加速。",
            "【Argo Smart Routing】Cloudflare 的 Argo 利用其网络每秒处理'平均 7800 万 HTTP 请求'的海量数据，'detects and routes around real-time network congestion for 30% (on average) faster web app performance'。它实时检测最快路径，而非依赖静态路由。",
            "【边缘计算概念】边缘计算将代码运行在 CDN 边缘节点而非中心源站。Cloudflare Workers 是'serverless platform for building, deploying, and scaling apps across Cloudflare's global network'，无需管理基础设施。",
            "【Lambda@Edge 触发器】AWS Lambda@Edge 在 CloudFront 边缘执行函数，支持四种触发类型：Viewer Request（用户请求到达）、Origin Request（请求转发到源站前）、Origin Response（源站响应后）、Viewer Response（响应返回用户前）。",
            "【边缘计算用例】典型应用包括：动态添加安全头、SEO 预渲染、智能路由（根据用户特征分流）、图片按设备类型实时调整、A/B 测试、边缘认证授权、流量高峰时用户优先级控制。"
        ],
        keyDifficulties: [
            "【DSA vs 传统 CDN】传统 CDN 的价值在于缓存命中，DSA 的价值在于路径优化。对于 API 等每次都需回源的内容，DSA 通过智能路由减少延迟，但无法像缓存那样消除源站负载。",
            "【边缘计算的冷启动】边缘函数首次执行或长时间未调用后会经历冷启动延迟。Cloudflare Workers 使用 V8 Isolates 而非容器，冷启动时间极短（毫秒级），这是其相对 Lambda@Edge 的优势。",
            "【边缘计算的限制】边缘函数有执行时间限制（Workers 免费版 10ms CPU 时间）、内存限制、无法访问传统文件系统。需要使用专门的边缘存储（KV、Durable Objects）替代数据库直连。",
            "【全球一致性挑战】边缘计算分布在全球数百节点，维护全局状态一致性是难题。Cloudflare Durable Objects 提供强一致性但增加延迟；KV 提供最终一致性但读取更快。"
        ],
        handsOnPath: [
            "注册 Cloudflare 账号，使用 Wrangler CLI 创建并部署第一个 Worker：wrangler init my-worker && wrangler deploy。",
            "在 Worker 中实现简单的 A/B 测试逻辑：根据 cookie 或随机分配返回不同响应。",
            "配置 Lambda@Edge 函数：在 CloudFront Distribution 的 Behavior 中关联 Lambda 函数，选择触发类型。",
            "使用边缘函数添加安全头：Content-Security-Policy、X-Frame-Options、Strict-Transport-Security。",
            "测量边缘计算的性能：对比直接访问源站 vs 通过边缘函数处理的延迟差异。"
        ],
        selfCheck: [
            "DSA 如何加速无法缓存的动态内容？",
            "边缘计算与传统服务器端渲染的核心区别是什么？",
            "Lambda@Edge 的四种触发类型分别在什么时机执行？",
            "边缘函数有哪些常见限制？如何应对？",
            "什么场景适合使用边缘计算？什么场景不适合？"
        ],
        extensions: [
            "研究 Cloudflare Workers 的 V8 Isolates 隔离模型。",
            "学习 Durable Objects 如何实现边缘状态管理。",
            "了解 Vercel Edge Functions 和 Netlify Edge Functions 的差异。",
            "研究 WebAssembly 在边缘计算中的应用。"
        ],
        sourceUrls: [
            "https://www.cloudflare.com/application-services/products/argo-smart-routing/",
            "https://developers.cloudflare.com/workers/",
            "https://aws.amazon.com/lambda/edge/"
        ]
    },
    "w6-4": {
        lessonId: "w6-4",
        background: [
            "【Multi-CDN 架构】Multi-CDN 使用多个 CDN 提供商分担流量，可实现高达'99.999% uptime（五个九）'——年停机时间不到 5.26 分钟，相比单一 CDN 的 99.9%（年停机 8.76 小时）大幅提升可用性。",
            "【流量分配策略】Multi-CDN 的流量分配方法包括：Content Partitioning（按内容类型分配，如视频走 A 厂商、图片走 B 厂商）、DNS 负载均衡、基于实时性能的动态路由、地理位置路由。",
            "【CDN Stacking】CDN 堆叠是一种分层模式，将一个 CDN 放在另一个 CDN 后面，整合多厂商请求。这种策略'improves global cache hit rates and reduces total cost of ownership'，但不适合直播等动态内容。",
            "【渐进式迁移】实施 Multi-CDN 时应采用渐进策略：'Begin by directing only 5-10% of traffic to the new provider while your leading provider handles 90-95%'。根据性能结果逐步增加新提供商份额。",
            "【特性平衡】Multi-CDN 架构应确保 feature parity（功能对等）。如果使用一个基础 CDN 和多个高级 CDN，'you'll only be able to use a basic feature set across your multi-CDN architecture'——功能被最弱的一环限制。"
        ],
        keyDifficulties: [
            "【缓存一致性】多 CDN 环境下保持缓存一致性是挑战。内容更新时需要同时清除所有 CDN 的缓存，不同厂商的 Purge API 和延迟各异。需要'automated tools to synchronize content across all CDNs'。",
            "【监控统一】不同 CDN 的监控指标和日志格式不一致。最佳实践是'using consistent monitoring parameters makes it easier and faster to compare CDN performance between providers'——标准化监控参数。",
            "【保持缓存预热】永远不要完全停止任何 CDN 的流量，因为'Never completely starve any provider, as this reduces the effectiveness of your multi-CDN architecture'。保持少量流量维持缓存热度。",
            "【DNS 冗余】Multi-CDN 架构应使用'two authoritative providers that employ an anycast-based approach'——双 DNS 提供商避免 DNS 成为单点故障。"
        ],
        handsOnPath: [
            "使用 WebPageTest 从全球多个位置测试网站性能：比较不同 CDN 的 TTFB、完全加载时间。",
            "配置 DNS 负载均衡实现简单的 Multi-CDN：使用 Route 53 或 Cloudflare 的加权路由。",
            "实现基于 Content Partitioning 的 Multi-CDN：静态资源走 CDN A，API 走 CDN B。",
            "搭建统一监控：使用 Datadog 或 Grafana 聚合多个 CDN 的性能指标。",
            "设计缓存失效流程：编写脚本同时调用多个 CDN 的 Purge API。"
        ],
        selfCheck: [
            "Multi-CDN 相比单一 CDN 的核心优势是什么？",
            "什么是 CDN Stacking？它适合什么场景？",
            "实施 Multi-CDN 时为什么要采用渐进式迁移？",
            "如何解决多 CDN 环境下的缓存一致性问题？",
            "为什么要保持所有 CDN 始终有流量？"
        ],
        extensions: [
            "研究 Cedexis/Citrix ITM 等智能流量管理平台。",
            "学习 Multi-CDN 的成本优化策略。",
            "了解大型流媒体平台（Netflix、Disney+）的 Multi-CDN 实践。",
            "研究 CDN 故障的真实案例及其对业务的影响。"
        ],
        sourceUrls: [
            "https://www.fastly.com/blog/best-practices-multi-cdn-implementations",
            "https://cloudinary.com/guides/web-performance/multi-cdn-8-amazing-benefits-methods-and-best-practices",
            "https://www.ioriver.io/blog/multi-cdn-strategy"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "w6-1": [
        {
            id: "w6-1-q1",
            question: "CDN 边缘节点的主要层级结构是什么？",
            options: [
                "只有一层边缘节点",
                "Edge Nodes（L1）直接服务用户，Regional Nodes（L2）处理缓存未命中",
                "所有节点平等对待",
                "源站直接服务所有请求"
            ],
            answer: 1,
            rationale: "CDN 采用分层架构：'Edge Nodes (L1) directly interact with end-users. Regional Nodes (L2) serve as content distribution points and handle cache misses from edge nodes'。"
        },
        {
            id: "w6-1-q2",
            question: "PoP（Points of Presence）通常部署在什么位置？",
            options: [
                "数据中心内部",
                "高互联网流量区域和主要互联网交换点（IXP）附近",
                "用户家中",
                "源站服务器机房"
            ],
            answer: 1,
            rationale: "PoP 部署在'areas with high internet traffic and near major internet exchange points (IXPs)'以优化覆盖和连接性。"
        },
        {
            id: "w6-1-q3",
            question: "Anycast 路由的核心特点是什么？",
            options: [
                "每个 IP 地址只关联一个服务器",
                "同一 IP 地址由多个地理位置的设备共享，路由器选择最近的节点",
                "所有请求都发送到同一服务器",
                "使用 DNS 负载均衡"
            ],
            answer: 1,
            rationale: "Anycast 是'a network addressing and routing methodology in which a single IP address is shared by devices in multiple locations'，路由器选择拓扑上最近的节点。"
        },
        {
            id: "w6-1-q4",
            question: "Anycast 与 Unicast 的核心区别是什么？",
            options: [
                "Anycast 更慢",
                "Unicast 每个 IP 固定关联一个服务器，Anycast 可选择地理上最近的节点",
                "Anycast 不支持 TCP",
                "Unicast 只用于 IPv6"
            ],
            answer: 1,
            rationale: "Unicast 采用一对一模式，而 Anycast'routes the sender to one specific node even though multiple nodes are available for use'——可动态选择最近节点。"
        },
        {
            id: "w6-1-q5",
            question: "BGP 在 Anycast 实现中的作用是什么？",
            options: [
                "加密数据传输",
                "确定最优路由，当服务器下线时停止宣告路由实现自动故障转移",
                "缓存静态内容",
                "压缩数据包"
            ],
            answer: 1,
            rationale: "'Each server advertises the same IP, and BGP determines the optimal route. If a server goes offline, BGP stops advertising it. The request is automatically routed to the next-best server'。"
        },
        {
            id: "w6-1-q6",
            question: "IPv4 如何支持 Anycast？",
            options: [
                "原生支持",
                "通过 BGP 变通实现",
                "完全不支持",
                "需要特殊硬件"
            ],
            answer: 1,
            rationale: "'Anycast is not officially supported in IPv4 however, this can be worked around through using BGP'，而 IPv6 原生支持 anycast。"
        },
        {
            id: "w6-1-q7",
            question: "CDN 回源时，边缘节点与源站之间的连接有什么优势？",
            options: [
                "每次都建立新连接",
                "已建立持久的信任连接，避免重复握手开销",
                "使用 UDP 协议",
                "不需要连接源站"
            ],
            answer: 1,
            rationale: "'If the nearby CDN server forwards the request to the origin server, they would already have an ongoing, trusted connection established'，避免了重复握手。"
        },
        {
            id: "w6-1-q8",
            question: "Amazon CloudFront 的全球 PoP 数量约为多少？",
            options: [
                "50+",
                "150+",
                "450+",
                "1000+"
            ],
            answer: 2,
            rationale: "'Amazon CloudFront delivers data through 450+ globally dispersed points of presence (POPs)'。"
        },
        {
            id: "w6-1-q9",
            question: "Anycast 不适合什么类型的应用？",
            options: [
                "静态网页",
                "图片和视频分发",
                "实时语音/视频通话等依赖长连接的有状态应用",
                "API 请求"
            ],
            answer: 2,
            rationale: "'Real-time applications like voice calls, video conferencing, or financial transactions that depend on long-lived, stateful connections can sometimes experience disruptions if routing changes mid-session'。"
        },
        {
            id: "w6-1-q10",
            question: "Anycast 如何提供 DDoS 防护？",
            options: [
                "阻止所有流量",
                "在多个服务器间分散攻击流量，降低单点压力",
                "加密所有数据",
                "限制用户访问"
            ],
            answer: 1,
            rationale: "Anycast 通过在多个服务器间分散流量实现 DDoS 防护，'traffic is automatically routed to the nearest available server, reducing the impact of the attack'。"
        },
        {
            id: "w6-1-q11",
            question: "建立真正的 Anycast CDN 网络需要什么条件？",
            options: [
                "只需租用云服务器",
                "维护自有网络硬件、与上游运营商建立直接关系、调优网络路由",
                "使用开源软件即可",
                "购买域名"
            ],
            answer: 1,
            rationale: "'Proper implementation requires that a CDN provider maintains their own network hardware, builds direct relationships with their upstream carriers, and tunes their networking routes'。"
        },
        {
            id: "w6-1-q12",
            question: "CDN 处理动态内容时使用什么机制加速？",
            options: [
                "只能缓存",
                "优化边缘服务器与源站之间的连接",
                "放弃加速",
                "将动态内容转为静态"
            ],
            answer: 1,
            rationale: "CDN 通过'Dynamic Acceleration'优化边缘到源站的连接，'optimizes connections between edge servers and origin servers for real-time content'。"
        }
    ],
    "w6-2": [
        {
            id: "w6-2-q1",
            question: "Cache-Control: no-cache 的真正含义是什么？",
            options: [
                "完全不缓存响应",
                "响应可以缓存，但每次使用前必须向服务器验证",
                "只缓存 1 分钟",
                "只在浏览器中缓存"
            ],
            answer: 1,
            rationale: "no-cache 意味着'returned responses can't be used for subsequent requests before checking if server responses have changed'——响应被缓存但每次使用前必须验证。"
        },
        {
            id: "w6-2-q2",
            question: "s-maxage 指令的作用是什么？",
            options: [
                "设置浏览器缓存时间",
                "设置服务器处理时间",
                "覆盖共享缓存（CDN）的 max-age 设置",
                "设置 Cookie 有效期"
            ],
            answer: 2,
            rationale: "s-maxage 专门用于共享缓存（CDN），可以让 CDN 缓存时间与浏览器缓存时间不同。"
        },
        {
            id: "w6-2-q3",
            question: "ETag 验证成功时服务器返回什么状态码？",
            options: [
                "200 OK",
                "301 Moved Permanently",
                "304 Not Modified",
                "404 Not Found"
            ],
            answer: 2,
            rationale: "当客户端发送 If-None-Match 且内容未变时，服务器返回 304 Not Modified，避免重复传输整个资源。"
        },
        {
            id: "w6-2-q4",
            question: "Cache Busting 的核心思想是什么？",
            options: [
                "频繁清除 CDN 缓存",
                "使用短 TTL",
                "在资源 URL 中包含版本号或哈希，内容变更时更新 URL",
                "禁用所有缓存"
            ],
            answer: 2,
            rationale: "Cache Busting 通过版本化 URL（如 bundle.v123.js）实现长期缓存，内容变更时更新 URL 而非清除缓存。"
        },
        {
            id: "w6-2-q5",
            question: "Vary: Accept-Language 头的效果是什么？",
            options: [
                "只接受特定语言的请求",
                "为每种语言创建独立的缓存条目",
                "翻译响应内容",
                "设置响应语言"
            ],
            answer: 1,
            rationale: "Vary 头告诉缓存根据指定请求头分别存储响应，Accept-Language 会导致每种语言有独立的缓存条目。"
        },
        {
            id: "w6-2-q6",
            question: "为什么 HTML 文件不适合使用 Cache Busting？",
            options: [
                "HTML 文件太大",
                "HTML 文件的 URL 通常固定，无法在 URL 中嵌入版本号",
                "浏览器不支持缓存 HTML",
                "HTML 变化太频繁"
            ],
            answer: 1,
            rationale: "HTML 文件的 URL 通常固定（如 /index.html），无法通过版本化 URL 实现长期缓存，最佳实践是使用 no-cache 配合 ETag。"
        },
        {
            id: "w6-2-q7",
            question: "Cache-Control: public 的作用是什么？",
            options: [
                "任何人都可以访问",
                "允许共享缓存（CDN）存储响应，即使请求带有 Authorization 头",
                "公开响应内容",
                "不设置任何限制"
            ],
            answer: 1,
            rationale: "public 允许共享缓存存储响应，即使请求包含 Authorization 头（默认情况下带认证的请求不会被共享缓存存储）。"
        },
        {
            id: "w6-2-q8",
            question: "Cache-Control: immutable 的作用是什么？",
            options: [
                "禁止修改缓存",
                "在页面刷新时禁止条件验证，因为内容永不改变",
                "永久缓存",
                "只读缓存"
            ],
            answer: 1,
            rationale: "immutable 告诉浏览器该资源永不改变，即使用户刷新页面也不需要发送条件验证请求。"
        },
        {
            id: "w6-2-q9",
            question: "Cloudflare 免费版的 Purge 请求频率限制是多少？",
            options: [
                "1 次/分钟",
                "5 次/分钟",
                "50 次/分钟",
                "无限制"
            ],
            answer: 1,
            rationale: "Cloudflare 对 Purge 请求有频率限制：免费版 5 次/分钟，企业版可达 50 次/秒。"
        },
        {
            id: "w6-2-q10",
            question: "must-revalidate 指令的作用是什么？",
            options: [
                "每次都重新下载",
                "缓存过期后必须向源站验证，不能使用过期内容",
                "必须使用 ETag",
                "必须使用 HTTPS"
            ],
            answer: 1,
            rationale: "must-revalidate 确保缓存过期后必须与源站验证，不能在源站不可达时使用过期的缓存内容。"
        },
        {
            id: "w6-2-q11",
            question: "Private Cache 和 Shared Cache 的区别是什么？",
            options: [
                "Private 更安全",
                "Private 绑定单一客户端，Shared 可服务多用户（如 CDN）",
                "Private 更快",
                "Shared 只能存储静态内容"
            ],
            answer: 1,
            rationale: "Private Cache 绑定特定客户端（如浏览器），Shared Cache 包括 CDN、反向代理，可服务多个用户。"
        },
        {
            id: "w6-2-q12",
            question: "对于包含用户个性化内容的响应，应该使用什么 Cache-Control？",
            options: [
                "public, max-age=3600",
                "no-cache, private",
                "no-store, public",
                "max-age=0"
            ],
            answer: 1,
            rationale: "个性化内容应使用 private 防止共享缓存存储，配合 no-cache 确保每次验证，避免用户看到他人的个性化内容。"
        }
    ],
    "w6-3": [
        {
            id: "w6-3-q1",
            question: "DSA（Dynamic Site Acceleration）如何加速动态内容？",
            options: [
                "缓存动态内容",
                "将动态内容转为静态",
                "通过优化传输路径和协议减少延迟",
                "压缩所有内容"
            ],
            answer: 2,
            rationale: "DSA 不依赖缓存，而是通过智能路由、协议优化等方式加速无法缓存的动态内容传输。"
        },
        {
            id: "w6-3-q2",
            question: "Argo Smart Routing 声称平均可以提升多少性能？",
            options: [
                "10%",
                "20%",
                "30%",
                "50%"
            ],
            answer: 2,
            rationale: "Argo'detects and routes around real-time network congestion for 30% (on average) faster web app performance'。"
        },
        {
            id: "w6-3-q3",
            question: "Lambda@Edge 的 Viewer Request 触发器在什么时机执行？",
            options: [
                "请求转发到源站后",
                "源站响应后",
                "CloudFront 收到用户请求时",
                "响应返回用户后"
            ],
            answer: 2,
            rationale: "Viewer Request 在 CloudFront 收到用户请求时触发，可以在请求到达源站前进行处理。"
        },
        {
            id: "w6-3-q4",
            question: "Cloudflare Workers 相比 Lambda@Edge 的主要优势是什么？",
            options: [
                "更便宜",
                "使用 V8 Isolates，冷启动时间极短（毫秒级）",
                "支持更多语言",
                "更多内存"
            ],
            answer: 1,
            rationale: "Workers 使用 V8 Isolates 而非容器，冷启动时间极短（毫秒级），这是其相对 Lambda@Edge 的主要优势。"
        },
        {
            id: "w6-3-q5",
            question: "边缘计算不适合什么场景？",
            options: [
                "A/B 测试",
                "添加安全头",
                "需要访问关系型数据库的复杂查询",
                "图片处理"
            ],
            answer: 2,
            rationale: "边缘函数无法直接访问传统数据库，需要使用专门的边缘存储（KV、Durable Objects），不适合需要复杂数据库操作的场景。"
        },
        {
            id: "w6-3-q6",
            question: "Lambda@Edge 支持几种触发类型？",
            options: [
                "2 种",
                "3 种",
                "4 种",
                "5 种"
            ],
            answer: 2,
            rationale: "Lambda@Edge 支持四种触发类型：Viewer Request、Origin Request、Origin Response、Viewer Response。"
        },
        {
            id: "w6-3-q7",
            question: "边缘计算的主要优势是什么？",
            options: [
                "降低存储成本",
                "减少用户延迟，代码运行在离用户最近的边缘节点",
                "简化代码逻辑",
                "增加安全性"
            ],
            answer: 1,
            rationale: "边缘计算将代码'run closer to users of your application, which improves performance and reduces latency'。"
        },
        {
            id: "w6-3-q8",
            question: "Cloudflare Durable Objects 和 KV 的主要区别是什么？",
            options: [
                "价格不同",
                "Durable Objects 提供强一致性，KV 提供最终一致性",
                "存储容量不同",
                "支持的数据类型不同"
            ],
            answer: 1,
            rationale: "Durable Objects 提供强一致性但增加延迟；KV 提供最终一致性但读取更快。"
        },
        {
            id: "w6-3-q9",
            question: "边缘函数的典型用例不包括？",
            options: [
                "动态添加安全头",
                "A/B 测试",
                "运行机器学习训练任务",
                "智能路由"
            ],
            answer: 2,
            rationale: "边缘函数有执行时间和资源限制，不适合长时间运行的任务如机器学习训练。"
        },
        {
            id: "w6-3-q10",
            question: "Origin Request 触发器在什么时机执行？",
            options: [
                "用户请求到达时",
                "请求转发到源站前",
                "源站响应后",
                "响应返回用户前"
            ],
            answer: 1,
            rationale: "Origin Request 在 CloudFront 准备将请求转发到源站之前触发，可以修改发往源站的请求。"
        },
        {
            id: "w6-3-q11",
            question: "Cloudflare 网络每秒处理的 HTTP 请求数量约为？",
            options: [
                "100 万",
                "1000 万",
                "7800 万",
                "1 亿"
            ],
            answer: 2,
            rationale: "Argo 利用 Cloudflare 网络'an average of 78 million HTTP requests per second'的海量数据进行路由优化。"
        },
        {
            id: "w6-3-q12",
            question: "Cloudflare Workers 免费版的 CPU 时间限制是？",
            options: [
                "1ms",
                "10ms",
                "50ms",
                "100ms"
            ],
            answer: 1,
            rationale: "Workers 免费版有 10ms CPU 时间限制，需要优化代码或升级付费版以执行更复杂的计算。"
        }
    ],
    "w6-4": [
        {
            id: "w6-4-q1",
            question: "Multi-CDN 架构可以实现的最高可用性约为？",
            options: [
                "99.9%（三个九）",
                "99.99%（四个九）",
                "99.999%（五个九）",
                "100%"
            ],
            answer: 2,
            rationale: "Multi-CDN 可实现'99.999% uptime（五个九）'——年停机时间不到 5.26 分钟。"
        },
        {
            id: "w6-4-q2",
            question: "什么是 CDN Stacking？",
            options: [
                "将多个 CDN 并行使用",
                "将一个 CDN 放在另一个 CDN 后面，形成分层结构",
                "堆叠多个缓存层",
                "使用多个源站"
            ],
            answer: 1,
            rationale: "CDN Stacking 是'tiered model places one CDN behind another'，整合多厂商请求以提高缓存命中率。"
        },
        {
            id: "w6-4-q3",
            question: "实施 Multi-CDN 时，初始流量分配建议是？",
            options: [
                "50/50 平分",
                "新提供商 5-10%，主提供商 90-95%",
                "新提供商 30%，主提供商 70%",
                "完全切换到新提供商"
            ],
            answer: 1,
            rationale: "'Begin by directing only 5-10% of traffic to the new provider while your leading provider handles 90-95%'，渐进式迁移降低风险。"
        },
        {
            id: "w6-4-q4",
            question: "Multi-CDN 架构中为什么不应该完全停止任何 CDN 的流量？",
            options: [
                "会违反合同",
                "会增加成本",
                "会导致该 CDN 的缓存变冷，降低架构有效性",
                "会影响监控"
            ],
            answer: 2,
            rationale: "'Never completely starve any provider, as this reduces the effectiveness of your multi-CDN architecture'——保持流量维持缓存热度。"
        },
        {
            id: "w6-4-q5",
            question: "Content Partitioning 是什么策略？",
            options: [
                "将内容分割成小块",
                "按内容类型分配到不同 CDN（如视频走 A、图片走 B）",
                "按地区分配内容",
                "按时间分配内容"
            ],
            answer: 1,
            rationale: "Content Partitioning 将内容按类型（HTML、JS、CSS、图片、视频）分组，分配给不同 CDN 厂商。"
        },
        {
            id: "w6-4-q6",
            question: "Multi-CDN 架构应如何配置 DNS？",
            options: [
                "使用单一 DNS 提供商",
                "使用两个采用 Anycast 的权威 DNS 提供商",
                "禁用 DNS 缓存",
                "使用最便宜的 DNS"
            ],
            answer: 1,
            rationale: "应使用'two authoritative providers that employ an anycast-based approach'——双 DNS 提供商避免单点故障。"
        },
        {
            id: "w6-4-q7",
            question: "Feature Parity 在 Multi-CDN 中为什么重要？",
            options: [
                "可以降低成本",
                "功能被最弱的 CDN 限制，需要确保所有 CDN 功能对等",
                "可以简化配置",
                "可以提高性能"
            ],
            answer: 1,
            rationale: "如果使用功能不一的 CDN，'you'll only be able to use a basic feature set across your multi-CDN architecture'。"
        },
        {
            id: "w6-4-q8",
            question: "Multi-CDN 环境下如何解决缓存一致性问题？",
            options: [
                "禁用缓存",
                "使用自动化工具同时清除所有 CDN 的缓存",
                "只使用一个 CDN 的缓存",
                "缩短 TTL"
            ],
            answer: 1,
            rationale: "需要'automated tools to synchronize content across all CDNs'，同时调用多个 CDN 的 Purge API。"
        },
        {
            id: "w6-4-q9",
            question: "单一 CDN 的典型可用性（三个九）意味着年停机时间约为？",
            options: [
                "5 分钟",
                "52 分钟",
                "8.76 小时",
                "3.65 天"
            ],
            answer: 2,
            rationale: "99.9% 可用性对应年停机约 8.76 小时，而五个九（99.999%）仅 5.26 分钟。"
        },
        {
            id: "w6-4-q10",
            question: "CDN Stacking 不适合什么场景？",
            options: [
                "静态网站",
                "图片分发",
                "直播流媒体",
                "软件下载"
            ],
            answer: 2,
            rationale: "CDN Stacking'proves less effective for live-streaming scenarios where content remains dynamic'。"
        },
        {
            id: "w6-4-q11",
            question: "Multi-CDN 监控的最佳实践是什么？",
            options: [
                "使用每个 CDN 自己的监控",
                "使用一致的监控参数，便于跨厂商性能比较",
                "只监控主 CDN",
                "使用最便宜的监控方案"
            ],
            answer: 1,
            rationale: "'Using consistent monitoring parameters makes it easier and faster to compare CDN performance between providers'。"
        },
        {
            id: "w6-4-q12",
            question: "基于变量的负载均衡（Variable-driven）考虑哪些因素？",
            options: [
                "只考虑成本",
                "只考虑性能",
                "成本、性能、位置、权重等多种因素进行实时路由决策",
                "只考虑地理位置"
            ],
            answer: 2,
            rationale: "Variable-driven load balancing'leverages multiple factors such as cost, performance, location, weights, and other criteria'进行实时决策。"
        }
    ]
}
