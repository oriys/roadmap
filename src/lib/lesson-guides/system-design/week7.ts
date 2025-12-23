import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "w7-1": {
        lessonId: "w7-1",
        background: [
            "【L4 负载均衡定义】L4 负载均衡在传输层（OSI 第四层）工作，基于 IP 地址和端口号做路由决策。'Layer 4 load balancers distribute incoming network traffic based on data from network and transport layer protocols, such as IP address and TCP port'。它不检查应用层内容。",
            "【L7 负载均衡定义】L7 负载均衡在应用层工作，可以检查 HTTP 头、Cookie、URI 等内容。'Layer 7 load balancer distributes requests based upon data found in application layer protocols such as HTTP'。这允许更智能的路由决策。",
            "【NGINX 负载均衡架构】NGINX 作为反向代理实现负载均衡，使用 upstream 块定义后端服务器组。'NGINX distributes HTTP/HTTPS traffic across a group of application servers'，支持多种负载均衡算法。",
            "【HAProxy 双模式支持】HAProxy 同时支持 L4 和 L7 模式：'HAProxy operates in two modes: TCP mode (Layer 4) and HTTP mode (Layer 7)'。TCP 模式适合非 HTTP 协议，HTTP 模式提供更丰富的路由能力。",
            "【连接 vs 请求】L4 处理的是连接（TCP connections），L7 处理的是请求（HTTP requests）。这影响了负载均衡的粒度：'Layer 4 can only balance at the connection level, while Layer 7 can balance individual requests within a connection'。"
        ],
        keyDifficulties: [
            "【性能与功能权衡】L4 速度更快因为不解析应用层数据，但功能有限；L7 功能丰富但有额外开销。'Layer 4 load balancing is faster because it doesn't need to inspect packet content, but Layer 7 provides more intelligent routing capabilities'。",
            "【SSL/TLS 终止位置】L4 负载均衡通常透传 SSL 连接（pass-through），L7 则需要终止 SSL。'With Layer 4, the SSL connection is established directly between the client and the backend server. With Layer 7, the load balancer terminates SSL'——这影响证书管理和性能。",
            "【会话保持机制差异】L4 只能基于源 IP 保持会话，L7 可以使用 Cookie。'Layer 4 uses source IP for session persistence, while Layer 7 can use cookies or other application-layer data'——Cookie 更精确但需要应用配合。",
            "【健康检查深度】L4 只能检查端口连通性，L7 可以发送 HTTP 请求验证应用健康。'Layer 4 health checks verify TCP connectivity, while Layer 7 health checks can verify actual application responses'。"
        ],
        handsOnPath: [
            "配置 NGINX L7 负载均衡：在 upstream 块中定义多个 server，在 location 中使用 proxy_pass 指向 upstream。",
            "使用 HAProxy 配置 L4 模式：设置 mode tcp，定义 backend 和 frontend，观察连接级别的负载分发。",
            "对比测试：使用 wrk 或 ab 分别压测 L4 和 L7 配置，比较吞吐量和延迟差异。",
            "配置基于 URI 的路由：在 NGINX 中使用不同 location 路由到不同 upstream，实现路径级负载均衡。",
            "测试 SSL 终止：配置 NGINX SSL 终止，使用 openssl s_client 验证证书，对比 pass-through 模式的配置复杂度。"
        ],
        selfCheck: [
            "L4 和 L7 负载均衡分别在 OSI 模型的哪一层工作？",
            "为什么 L4 负载均衡通常比 L7 更快？",
            "SSL pass-through 和 SSL 终止各有什么优缺点？",
            "什么场景下必须使用 L7 负载均衡？",
            "NGINX 中 upstream 和 location 如何配合实现负载均衡？"
        ],
        extensions: [
            "研究 DSR（Direct Server Return）模式如何提升 L4 负载均衡性能。",
            "学习 NGINX Plus 的高级 L7 功能：JWT 验证、速率限制、请求排队。",
            "了解 AWS NLB（L4）和 ALB（L7）的架构差异和定价模型。",
            "研究 Envoy 如何实现高性能的 L7 负载均衡。"
        ],
        sourceUrls: [
            "https://www.f5.com/glossary/load-balancer",
            "https://www.haproxy.com/blog/layer-4-vs-layer-7-load-balancing",
            "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/"
        ]
    },
    "w7-2": {
        lessonId: "w7-2",
        background: [
            "【Round Robin 算法】轮询是最简单的负载均衡算法，按顺序将请求分发到每个服务器。NGINX 默认使用此算法：'By default NGINX uses the Round Robin method for load balancing'。适合服务器性能相近的场景。",
            "【加权轮询】Weighted Round Robin 允许为不同服务器分配权重：'servers with higher weights receive more requests'。权重通常基于服务器处理能力设置，如 CPU、内存等。",
            "【最少连接算法】Least Connections 将请求发送到当前连接数最少的服务器：'least_conn directive routes requests to the server with the fewest active connections'。适合请求处理时间差异大的场景。",
            "【一致性哈希原理】一致性哈希使用哈希环（hash ring）将键映射到节点。'Consistent hashing ensures that when a node is added or removed, only a fraction of the keys need to be remapped'。这最小化了节点变更时的缓存失效。",
            "【虚拟节点技术】为解决节点分布不均问题，一致性哈希引入虚拟节点（VNodes）：'Each physical node is assigned multiple virtual nodes on the ring, ensuring a more even distribution of data'。DynamoDB 和 Cassandra 都使用此技术。",
            "【Power of Two Random Choices】该算法随机选择两个服务器，将请求发送到负载较低的那个：'The algorithm picks two random servers and routes the request to the one with fewer connections'。相比纯随机，显著降低了最大负载。"
        ],
        keyDifficulties: [
            "【Round Robin 的局限】轮询假设所有请求等价，但实际中请求处理时间差异大时会导致负载不均。'Round Robin doesn't account for varying request complexity or server processing time differences'。",
            "【一致性哈希的热点问题】即使使用虚拟节点，某些热点键仍可能导致负载不均。'Hot keys can cause load imbalance even with consistent hashing'——需要额外的缓存或键分散策略。",
            "【最少连接的状态追踪】Least Connections 需要实时追踪每个服务器的连接数，增加了负载均衡器的状态管理复杂度。在分布式负载均衡场景下，状态同步是挑战。",
            "【Power of Two 的理论保证】该算法将最大负载从 O(log n / log log n) 降低到 O(log log n)：'bounded the maximum load to O(log log n) with high probability'。这是随机算法中罕见的强理论保证。"
        ],
        handsOnPath: [
            "在 NGINX 中配置不同算法：分别使用 round-robin（默认）、least_conn、ip_hash，对比行为。",
            "实现加权轮询：为 upstream 中的 server 添加 weight 参数，如 server backend1 weight=3。",
            "使用 NGINX 的 hash 指令实现一致性哈希：hash $request_uri consistent;",
            "用 Python 实现简单的一致性哈希 demo，测试节点增减时的键迁移比例。",
            "配置 HAProxy 的 random 负载均衡并启用 Power of Two：balance random(2)"
        ],
        selfCheck: [
            "Round Robin 和 Weighted Round Robin 的区别是什么？",
            "Least Connections 算法适合什么场景？",
            "一致性哈希如何最小化节点变更时的影响？",
            "虚拟节点解决了一致性哈希的什么问题？",
            "Power of Two Random Choices 相比纯随机的优势是什么？"
        ],
        extensions: [
            "研究 Maglev 一致性哈希算法及其在 Google 的应用。",
            "学习 Rendezvous Hashing（HRW）与一致性哈希的对比。",
            "了解 Envoy 的负载均衡策略：Ring Hash、Maglev、Random。",
            "研究 Netflix Ribbon 的负载均衡实现和策略选择。"
        ],
        sourceUrls: [
            "https://blog.algomaster.io/p/consistent-hashing-explained",
            "https://www.haproxy.com/blog/power-of-two-load-balancing",
            "https://samwho.dev/load-balancing/"
        ]
    },
    "w7-3": {
        lessonId: "w7-3",
        background: [
            "【健康检查目的】健康检查确保流量只发送到健康的后端服务器。'Health checks monitor the health of your registered targets so that the load balancer can send requests only to healthy targets'。这是高可用架构的基础。",
            "【主动 vs 被动健康检查】主动健康检查定期发送探测请求，被动检查监控实际请求的响应。AWS ALB 使用主动检查：'The load balancer periodically sends requests to test the status of the targets'。",
            "【AWS ALB 健康检查参数】关键参数包括：HealthCheckPath（检查路径）、HealthCheckIntervalSeconds（间隔）、HealthCheckTimeoutSeconds（超时）、HealthyThresholdCount 和 UnhealthyThresholdCount（阈值）。",
            "【Kubernetes 优雅关闭】Kubernetes 通过 terminationGracePeriodSeconds 控制 Pod 关闭时间：'Kubernetes sends SIGTERM to containers, waits for terminationGracePeriodSeconds (default 30s), then sends SIGKILL if still running'。",
            "【preStop 钩子】preStop hook 在容器收到 SIGTERM 之前执行，用于清理工作。'The preStop hook is called immediately before a container is terminated'——可用于通知服务发现、完成进行中的请求。"
        ],
        keyDifficulties: [
            "【健康检查间隔与敏感度】间隔太短增加负载，太长延迟故障检测。'Shorter intervals detect failures faster but increase load on targets'。需要根据服务 SLA 和资源情况权衡。",
            "【阈值设置策略】UnhealthyThresholdCount 设置太低会导致误判（flapping），太高延迟故障响应。'Setting thresholds too low can cause false positives, while setting them too high delays failure detection'。",
            "【优雅关闭与请求排空】优雅关闭期间，服务应停止接收新请求但完成已有请求。'During graceful shutdown, the application should stop accepting new connections while completing in-flight requests'——这需要应用层配合。",
            "【preStop 与 SIGTERM 的时序】preStop hook 和 SIGTERM 几乎同时发生，preStop 不会延迟 SIGTERM。'The preStop hook runs concurrently with the endpoint removal from the Service'——需要在 preStop 中添加延迟等待流量排空。"
        ],
        handsOnPath: [
            "配置 AWS ALB Target Group 健康检查：设置 path=/health、interval=30s、timeout=5s、healthy=2、unhealthy=3。",
            "实现 /health 端点：返回 200 表示健康，检查数据库连接、磁盘空间等关键依赖。",
            "在 Kubernetes 中配置 readinessProbe 和 livenessProbe，测试探针失败时 Pod 的行为。",
            "实现优雅关闭：在应用中捕获 SIGTERM，停止接收新请求，等待进行中请求完成，然后退出。",
            "配置 preStop hook：lifecycle.preStop.exec.command: ['sh', '-c', 'sleep 10']，确保流量排空。"
        ],
        selfCheck: [
            "主动健康检查和被动健康检查的区别是什么？",
            "AWS ALB 健康检查的关键参数有哪些？各自的作用？",
            "为什么需要 Healthy/Unhealthy Threshold 而不是单次检查？",
            "Kubernetes 中 SIGTERM 和 SIGKILL 的关系是什么？",
            "preStop hook 的执行时机是什么？为什么需要在其中添加 sleep？"
        ],
        extensions: [
            "研究 Envoy 的健康检查机制：主动检查、被动异常检测、熔断集成。",
            "学习 AWS ALB 的 Slow Start 模式如何逐步增加新目标的流量。",
            "了解 Kubernetes 的 Pod Disruption Budget 如何保证滚动更新期间的可用性。",
            "研究服务网格（如 Istio）如何统一管理健康检查和流量排空。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html",
            "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination"
        ]
    },
    "w7-4": {
        lessonId: "w7-4",
        background: [
            "【Keepalived 核心功能】Keepalived 提供基于 VRRP 的高可用和健康检查功能。'Keepalived provides simple and robust facilities for loadbalancing and high-availability to Linux system'。它常用于实现 LVS 和 HAProxy 的高可用。",
            "【VRRP 协议原理】Virtual Router Redundancy Protocol 允许多台路由器共享一个虚拟 IP。'VRRP enables automatic assignment of available routers to hosts, with one router acting as the master and others as backups'。主节点故障时备节点自动接管。",
            "【优先级选举机制】VRRP 通过优先级选择主节点：'The router with the highest priority becomes the master'。优先级范围 1-254，可通过 track_script 动态调整。",
            "【AWS NLB 特性】Network Load Balancer 在 L4 工作，支持极高吞吐量：'NLB can handle millions of requests per second while maintaining ultra-low latencies'。它使用流哈希算法保持连接亲和性。",
            "【AWS ALB 特性】Application Load Balancer 在 L7 工作，支持内容路由：'ALB provides advanced request routing targeted at delivery of modern application architectures'。支持基于 path、host、header 的路由。",
            "【Kubernetes Service 类型】Kubernetes 提供多种 Service 类型：ClusterIP（内部访问）、NodePort（节点端口）、LoadBalancer（外部负载均衡器）、ExternalName（外部 DNS）。"
        ],
        keyDifficulties: [
            "【脑裂问题】网络分区时可能出现多个主节点同时使用虚拟 IP：'Split-brain can occur when network partitions cause multiple nodes to become master'。需要仲裁机制或 fencing 来解决。",
            "【VRRP 与云环境】传统 VRRP 依赖组播，但云环境通常不支持组播。'Cloud environments typically don't support multicast, making traditional VRRP unusable'——需要使用云原生的高可用方案。",
            "【NLB vs ALB 选择】NLB 适合需要极低延迟和高吞吐的场景，ALB 适合需要应用层路由的场景。'Choose NLB for extreme performance, ALB for application-layer features'。成本和功能需要权衡。",
            "【Kubernetes LoadBalancer 的局限】每个 LoadBalancer Service 通常对应一个云负载均衡器，成本高。'Each LoadBalancer service creates a separate cloud load balancer'——Ingress 可以合并多个服务共享一个负载均衡器。"
        ],
        handsOnPath: [
            "配置 Keepalived 主备架构：设置 vrrp_instance，配置 virtual_ipaddress，定义 priority。",
            "编写健康检查脚本：使用 vrrp_script 定期检查应用健康，失败时降低优先级触发切换。",
            "在 AWS 上创建 NLB：配置 TCP 监听器，设置目标组，观察流量分发行为。",
            "创建 Kubernetes LoadBalancer Service：配置 spec.type: LoadBalancer，观察云提供商如何创建负载均衡器。",
            "配置 Kubernetes Ingress：使用 NGINX Ingress Controller，配置多个服务共享一个负载均衡器入口。"
        ],
        selfCheck: [
            "VRRP 如何实现主备切换？优先级的作用是什么？",
            "什么是脑裂问题？如何避免？",
            "AWS NLB 和 ALB 各自适用于什么场景？",
            "Kubernetes 的四种 Service 类型分别是什么？各自的用途？",
            "为什么说 Ingress 比多个 LoadBalancer Service 更经济？"
        ],
        extensions: [
            "研究 ECMP（Equal-Cost Multi-Path）如何实现负载均衡器集群化。",
            "学习 MetalLB 如何在裸机 Kubernetes 集群中实现 LoadBalancer 功能。",
            "了解 AWS Gateway Load Balancer 及其在网络安全设备部署中的应用。",
            "研究 Cilium 的 eBPF 负载均衡如何替代 kube-proxy。"
        ],
        sourceUrls: [
            "https://www.keepalived.org/manpage.html",
            "https://aws.amazon.com/elasticloadbalancing/features/",
            "https://kubernetes.io/docs/concepts/services-networking/service/"
        ]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "w7-1": [
        {
            id: "w7-1-q1",
            question: "L4 负载均衡基于什么信息做路由决策？",
            options: [
                "HTTP 头和 Cookie",
                "IP 地址和端口号",
                "URL 路径",
                "请求体内容"
            ],
            answer: 1,
            rationale: "L4 负载均衡在传输层工作，'distributes incoming network traffic based on data from network and transport layer protocols, such as IP address and TCP port'。"
        },
        {
            id: "w7-1-q2",
            question: "L7 负载均衡相比 L4 的主要优势是什么？",
            options: [
                "更低的延迟",
                "更少的资源消耗",
                "可以基于应用层内容（如 HTTP 头、Cookie）做智能路由",
                "更简单的配置"
            ],
            answer: 2,
            rationale: "L7 负载均衡'distributes requests based upon data found in application layer protocols such as HTTP'，可以做更智能的路由决策。"
        },
        {
            id: "w7-1-q3",
            question: "为什么 L4 负载均衡通常比 L7 更快？",
            options: [
                "L4 使用更好的硬件",
                "L4 不需要解析应用层数据",
                "L4 使用 UDP 协议",
                "L4 不做任何处理"
            ],
            answer: 1,
            rationale: "'Layer 4 load balancing is faster because it doesn't need to inspect packet content'，无需解析 HTTP 等应用层协议。"
        },
        {
            id: "w7-1-q4",
            question: "HAProxy 的 TCP 模式（mode tcp）适合什么场景？",
            options: [
                "需要基于 URL 路由的场景",
                "需要 Cookie 会话保持的场景",
                "非 HTTP 协议或不需要应用层路由的场景",
                "需要修改 HTTP 头的场景"
            ],
            answer: 2,
            rationale: "HAProxy'operates in two modes: TCP mode (Layer 4) and HTTP mode (Layer 7)'，TCP 模式适合非 HTTP 协议。"
        },
        {
            id: "w7-1-q5",
            question: "SSL pass-through 模式下，SSL 连接在哪里终止？",
            options: [
                "负载均衡器",
                "后端服务器",
                "客户端",
                "CDN 边缘节点"
            ],
            answer: 1,
            rationale: "'With Layer 4, the SSL connection is established directly between the client and the backend server'，SSL 在后端服务器终止。"
        },
        {
            id: "w7-1-q6",
            question: "L4 负载均衡的会话保持通常基于什么？",
            options: [
                "Cookie",
                "Session ID",
                "源 IP 地址",
                "JWT Token"
            ],
            answer: 2,
            rationale: "'Layer 4 uses source IP for session persistence, while Layer 7 can use cookies or other application-layer data'。"
        },
        {
            id: "w7-1-q7",
            question: "NGINX 使用什么配置块定义后端服务器组？",
            options: [
                "server",
                "location",
                "upstream",
                "backend"
            ],
            answer: 2,
            rationale: "NGINX 使用'upstream 块定义后端服务器组'，然后在 location 中使用 proxy_pass 指向 upstream。"
        },
        {
            id: "w7-1-q8",
            question: "L7 健康检查相比 L4 的优势是什么？",
            options: [
                "执行速度更快",
                "不需要网络连接",
                "可以发送 HTTP 请求验证应用层健康状态",
                "消耗更少资源"
            ],
            answer: 2,
            rationale: "'Layer 4 health checks verify TCP connectivity, while Layer 7 health checks can verify actual application responses'。"
        },
        {
            id: "w7-1-q9",
            question: "在 NGINX 中，proxy_pass 指令的作用是什么？",
            options: [
                "定义后端服务器",
                "将请求转发到指定的 upstream",
                "设置健康检查",
                "配置 SSL 证书"
            ],
            answer: 1,
            rationale: "NGINX 中'在 location 中使用 proxy_pass 指向 upstream'，实现请求转发。"
        },
        {
            id: "w7-1-q10",
            question: "L7 负载均衡终止 SSL 的好处是什么？",
            options: [
                "更高的安全性",
                "可以检查和修改 HTTP 内容，集中管理证书",
                "更低的延迟",
                "不需要证书"
            ],
            answer: 1,
            rationale: "L7 终止 SSL 后可以'检查 HTTP 头、Cookie、URI 等内容'，实现更智能的路由，同时集中管理证书。"
        },
        {
            id: "w7-1-q11",
            question: "L4 和 L7 负载均衡处理的粒度有什么区别？",
            options: [
                "L4 处理字节，L7 处理数据包",
                "L4 处理连接，L7 处理请求",
                "L4 处理请求，L7 处理连接",
                "没有区别"
            ],
            answer: 1,
            rationale: "'Layer 4 can only balance at the connection level, while Layer 7 can balance individual requests within a connection'。"
        },
        {
            id: "w7-1-q12",
            question: "什么场景下必须使用 L7 负载均衡？",
            options: [
                "需要最低延迟",
                "需要最高吞吐量",
                "需要基于 HTTP 头或路径的路由",
                "后端使用 TCP 协议"
            ],
            answer: 2,
            rationale: "当需要基于应用层内容（HTTP 头、Cookie、URI）做路由决策时，必须使用 L7 负载均衡。"
        }
    ],
    "w7-2": [
        {
            id: "w7-2-q1",
            question: "NGINX 默认使用什么负载均衡算法？",
            options: [
                "Least Connections",
                "IP Hash",
                "Round Robin",
                "Random"
            ],
            answer: 2,
            rationale: "'By default NGINX uses the Round Robin method for load balancing'。"
        },
        {
            id: "w7-2-q2",
            question: "一致性哈希的核心数据结构是什么？",
            options: [
                "链表",
                "二叉树",
                "哈希环（Hash Ring）",
                "数组"
            ],
            answer: 2,
            rationale: "一致性哈希'uses a hash ring to map keys to nodes'，节点和键都映射到环上的位置。"
        },
        {
            id: "w7-2-q3",
            question: "虚拟节点（VNodes）解决了一致性哈希的什么问题？",
            options: [
                "哈希冲突",
                "节点分布不均匀",
                "查询速度慢",
                "内存消耗大"
            ],
            answer: 1,
            rationale: "'Each physical node is assigned multiple virtual nodes on the ring, ensuring a more even distribution of data'。"
        },
        {
            id: "w7-2-q4",
            question: "Least Connections 算法最适合什么场景？",
            options: [
                "所有请求处理时间相同",
                "请求处理时间差异大",
                "服务器性能相同",
                "会话保持场景"
            ],
            answer: 1,
            rationale: "'least_conn directive routes requests to the server with the fewest active connections'，适合请求处理时间差异大的场景。"
        },
        {
            id: "w7-2-q5",
            question: "Power of Two Random Choices 算法的工作方式是什么？",
            options: [
                "随机选择一个服务器",
                "选择负载最低的两个服务器",
                "随机选择两个服务器，将请求发送到负载较低的那个",
                "轮流使用两个服务器"
            ],
            answer: 2,
            rationale: "'The algorithm picks two random servers and routes the request to the one with fewer connections'。"
        },
        {
            id: "w7-2-q6",
            question: "一致性哈希在节点变更时的主要优势是什么？",
            options: [
                "更快的查询速度",
                "只有少部分键需要重新映射",
                "不需要虚拟节点",
                "支持更多节点"
            ],
            answer: 1,
            rationale: "'Consistent hashing ensures that when a node is added or removed, only a fraction of the keys need to be remapped'。"
        },
        {
            id: "w7-2-q7",
            question: "Weighted Round Robin 中权重的作用是什么？",
            options: [
                "决定服务器的启动顺序",
                "决定服务器接收请求的比例",
                "决定健康检查的频率",
                "决定连接超时时间"
            ],
            answer: 1,
            rationale: "'servers with higher weights receive more requests'，权重决定了请求分配比例。"
        },
        {
            id: "w7-2-q8",
            question: "Power of Two Random Choices 将最大负载从 O(log n / log log n) 降低到了什么？",
            options: [
                "O(1)",
                "O(log n)",
                "O(log log n)",
                "O(n)"
            ],
            answer: 2,
            rationale: "该算法'bounded the maximum load to O(log log n) with high probability'。"
        },
        {
            id: "w7-2-q9",
            question: "在 NGINX 中如何配置一致性哈希？",
            options: [
                "least_conn",
                "ip_hash",
                "hash $request_uri consistent",
                "random"
            ],
            answer: 2,
            rationale: "使用'hash $request_uri consistent;'指令在 NGINX 中配置一致性哈希。"
        },
        {
            id: "w7-2-q10",
            question: "Round Robin 算法的主要局限是什么？",
            options: [
                "不支持多个服务器",
                "不考虑请求复杂度和服务器处理时间差异",
                "配置太复杂",
                "不支持健康检查"
            ],
            answer: 1,
            rationale: "'Round Robin doesn't account for varying request complexity or server processing time differences'。"
        },
        {
            id: "w7-2-q11",
            question: "哪些系统使用了一致性哈希和虚拟节点技术？",
            options: [
                "MySQL 和 PostgreSQL",
                "DynamoDB 和 Cassandra",
                "Redis 和 Memcached",
                "Kafka 和 RabbitMQ"
            ],
            answer: 1,
            rationale: "'DynamoDB and Cassandra use this technology'（虚拟节点技术）。"
        },
        {
            id: "w7-2-q12",
            question: "一致性哈希的热点问题是什么？",
            options: [
                "节点过多",
                "某些热点键导致负载不均",
                "哈希计算太慢",
                "不支持删除节点"
            ],
            answer: 1,
            rationale: "'Hot keys can cause load imbalance even with consistent hashing'——需要额外的缓存或键分散策略。"
        }
    ],
    "w7-3": [
        {
            id: "w7-3-q1",
            question: "AWS ALB 健康检查的目的是什么？",
            options: [
                "监控网络带宽",
                "确保流量只发送到健康的后端服务器",
                "收集性能指标",
                "管理 SSL 证书"
            ],
            answer: 1,
            rationale: "'Health checks monitor the health of your registered targets so that the load balancer can send requests only to healthy targets'。"
        },
        {
            id: "w7-3-q2",
            question: "AWS ALB 使用什么类型的健康检查？",
            options: [
                "被动检查",
                "主动检查（定期发送探测请求）",
                "只检查端口连通性",
                "不进行健康检查"
            ],
            answer: 1,
            rationale: "AWS ALB 使用主动检查：'The load balancer periodically sends requests to test the status of the targets'。"
        },
        {
            id: "w7-3-q3",
            question: "Kubernetes 中 terminationGracePeriodSeconds 的默认值是多少？",
            options: [
                "10 秒",
                "30 秒",
                "60 秒",
                "120 秒"
            ],
            answer: 1,
            rationale: "'Kubernetes sends SIGTERM to containers, waits for terminationGracePeriodSeconds (default 30s), then sends SIGKILL if still running'。"
        },
        {
            id: "w7-3-q4",
            question: "preStop hook 在什么时候执行？",
            options: [
                "容器启动时",
                "容器收到 SIGTERM 之前",
                "容器收到 SIGKILL 之后",
                "Pod 创建时"
            ],
            answer: 1,
            rationale: "'The preStop hook is called immediately before a container is terminated'，在 SIGTERM 之前执行。"
        },
        {
            id: "w7-3-q5",
            question: "为什么需要 UnhealthyThresholdCount 而不是单次检查失败就标记不健康？",
            options: [
                "减少检查频率",
                "避免因临时故障导致的误判（flapping）",
                "提高检查速度",
                "节省带宽"
            ],
            answer: 1,
            rationale: "'Setting thresholds too low can cause false positives'，阈值可以避免临时故障导致的误判。"
        },
        {
            id: "w7-3-q6",
            question: "优雅关闭期间，应用应该如何处理请求？",
            options: [
                "立即拒绝所有请求",
                "继续正常处理所有请求",
                "停止接收新请求，完成进行中的请求",
                "重启服务"
            ],
            answer: 2,
            rationale: "'During graceful shutdown, the application should stop accepting new connections while completing in-flight requests'。"
        },
        {
            id: "w7-3-q7",
            question: "AWS ALB 健康检查的 HealthCheckPath 参数指定什么？",
            options: [
                "日志路径",
                "健康检查请求的 URL 路径",
                "配置文件路径",
                "证书路径"
            ],
            answer: 1,
            rationale: "HealthCheckPath 指定健康检查请求的路径，如 /health。"
        },
        {
            id: "w7-3-q8",
            question: "为什么需要在 preStop hook 中添加 sleep？",
            options: [
                "等待容器启动",
                "等待流量从 Service 端点移除（流量排空）",
                "等待日志写入",
                "等待健康检查完成"
            ],
            answer: 1,
            rationale: "'The preStop hook runs concurrently with the endpoint removal from the Service'——需要添加延迟等待流量排空。"
        },
        {
            id: "w7-3-q9",
            question: "健康检查间隔（HealthCheckIntervalSeconds）设置太短会导致什么问题？",
            options: [
                "故障检测变慢",
                "增加目标服务器的负载",
                "减少网络流量",
                "降低可用性"
            ],
            answer: 1,
            rationale: "'Shorter intervals detect failures faster but increase load on targets'。"
        },
        {
            id: "w7-3-q10",
            question: "Kubernetes 在 SIGTERM 超时后会发送什么信号？",
            options: [
                "SIGINT",
                "SIGHUP",
                "SIGKILL",
                "SIGSTOP"
            ],
            answer: 2,
            rationale: "'Kubernetes sends SIGTERM to containers, waits for terminationGracePeriodSeconds, then sends SIGKILL if still running'。"
        },
        {
            id: "w7-3-q11",
            question: "主动健康检查和被动健康检查的区别是什么？",
            options: [
                "主动检查更快",
                "主动检查定期发送探测，被动检查监控实际请求的响应",
                "被动检查更准确",
                "没有区别"
            ],
            answer: 1,
            rationale: "主动健康检查'定期发送探测请求'，被动检查监控实际请求的响应结果。"
        },
        {
            id: "w7-3-q12",
            question: "/health 端点通常应该检查什么？",
            options: [
                "只返回 200 OK",
                "检查数据库连接、磁盘空间等关键依赖",
                "检查 CPU 使用率",
                "检查网络延迟"
            ],
            answer: 1,
            rationale: "健康端点应该'检查数据库连接、磁盘空间等关键依赖'，确保应用真正可用。"
        }
    ],
    "w7-4": [
        {
            id: "w7-4-q1",
            question: "Keepalived 使用什么协议实现高可用？",
            options: [
                "OSPF",
                "BGP",
                "VRRP",
                "RIP"
            ],
            answer: 2,
            rationale: "Keepalived 提供'基于 VRRP 的高可用'功能。"
        },
        {
            id: "w7-4-q2",
            question: "VRRP 协议如何选择主节点？",
            options: [
                "随机选择",
                "按启动顺序",
                "优先级最高的成为主节点",
                "按 IP 地址排序"
            ],
            answer: 2,
            rationale: "'The router with the highest priority becomes the master'，优先级最高的成为主节点。"
        },
        {
            id: "w7-4-q3",
            question: "AWS NLB 的主要特点是什么？",
            options: [
                "支持基于路径的路由",
                "支持极高吞吐量和超低延迟",
                "支持 Cookie 会话保持",
                "支持 WebSocket"
            ],
            answer: 1,
            rationale: "'NLB can handle millions of requests per second while maintaining ultra-low latencies'。"
        },
        {
            id: "w7-4-q4",
            question: "Kubernetes ClusterIP Service 的用途是什么？",
            options: [
                "暴露服务到外部网络",
                "提供集群内部访问",
                "创建云负载均衡器",
                "映射外部 DNS"
            ],
            answer: 1,
            rationale: "ClusterIP 是内部访问类型，只能在集群内部访问。"
        },
        {
            id: "w7-4-q5",
            question: "什么是脑裂问题？",
            options: [
                "网络延迟太高",
                "网络分区时多个节点同时认为自己是主节点",
                "主节点故障",
                "备节点无法启动"
            ],
            answer: 1,
            rationale: "'Split-brain can occur when network partitions cause multiple nodes to become master'。"
        },
        {
            id: "w7-4-q6",
            question: "为什么传统 VRRP 在云环境中难以使用？",
            options: [
                "性能太低",
                "配置太复杂",
                "云环境通常不支持组播",
                "成本太高"
            ],
            answer: 2,
            rationale: "'Cloud environments typically don't support multicast, making traditional VRRP unusable'。"
        },
        {
            id: "w7-4-q7",
            question: "Keepalived 的 vrrp_script 的作用是什么？",
            options: [
                "配置虚拟 IP",
                "定期检查应用健康，失败时降低优先级",
                "设置主备关系",
                "配置网络接口"
            ],
            answer: 1,
            rationale: "vrrp_script 用于'定期检查应用健康，失败时降低优先级触发切换'。"
        },
        {
            id: "w7-4-q8",
            question: "每个 Kubernetes LoadBalancer Service 有什么问题？",
            options: [
                "不支持 TCP",
                "延迟太高",
                "通常对应一个云负载均衡器，成本高",
                "不支持健康检查"
            ],
            answer: 2,
            rationale: "'Each LoadBalancer service creates a separate cloud load balancer'——成本较高。"
        },
        {
            id: "w7-4-q9",
            question: "如何解决多个 LoadBalancer Service 成本高的问题？",
            options: [
                "使用 NodePort",
                "使用 Ingress 共享一个负载均衡器",
                "使用 ClusterIP",
                "增加节点数量"
            ],
            answer: 1,
            rationale: "'Ingress 可以合并多个服务共享一个负载均衡器'，降低成本。"
        },
        {
            id: "w7-4-q10",
            question: "AWS ALB 相比 NLB 的主要优势是什么？",
            options: [
                "更高的吞吐量",
                "更低的延迟",
                "支持内容路由（基于 path、host、header）",
                "更低的成本"
            ],
            answer: 2,
            rationale: "'ALB provides advanced request routing targeted at delivery of modern application architectures'，支持应用层路由。"
        },
        {
            id: "w7-4-q11",
            question: "VRRP 的优先级范围是什么？",
            options: [
                "0-100",
                "1-254",
                "1-255",
                "0-255"
            ],
            answer: 1,
            rationale: "VRRP 优先级范围是 1-254，可通过 track_script 动态调整。"
        },
        {
            id: "w7-4-q12",
            question: "Kubernetes ExternalName Service 的用途是什么？",
            options: [
                "暴露服务到外部",
                "创建云负载均衡器",
                "将 Service 映射到外部 DNS 名称",
                "提供内部访问"
            ],
            answer: 2,
            rationale: "ExternalName 类型将 Service 映射到外部 DNS 名称。"
        }
    ]
}
