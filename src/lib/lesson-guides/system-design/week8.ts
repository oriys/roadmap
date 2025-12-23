import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "w8-1": {
        lessonId: "w8-1",
        background: [
            "【反向代理定义】反向代理是'sits in front of web servers and forwards client requests to those web servers'的服务器。与正向代理代表客户端不同，反向代理代表服务器接收请求——客户端不知道真实服务器的存在。",
            "【正向代理 vs 反向代理】正向代理'sits in front of client machines'，代表客户端访问互联网，隐藏客户端身份。反向代理'sits in front of web servers'，代表服务器接收请求，隐藏服务器身份。核心区别在于服务对象不同。",
            "【NGINX 反向代理机制】NGINX 反向代理工作流程：'Sends the request to a specified proxy server, Fetches the response, Sends the response back to the client'。核心指令 proxy_pass 将请求路由到上游服务器。",
            "【SSL 终止概念】SSL Termination 是'decrypting encrypted data at the absolute border of the network before forwarding to backend servers'的过程。在负载均衡器或反向代理处解密 HTTPS，后端接收明文 HTTP。",
            "【SSL 终止优势】SSL 终止带来多重好处：卸载解密可'reduce backend CPU by ~40%'；集中管理证书'at one location'而非每台服务器；简化后端配置，后端只需处理 HTTP。"
        ],
        keyDifficulties: [
            "【SSL 终止 vs 透传 vs 桥接】三种 SSL 处理模式：Termination（解密后明文转发）、Passthrough（不解密直接转发）、Bridging（解密后重新加密转发）。选择依据：'If end-to-end encryption is required, prioritize passthrough or re-encryption architectures'。",
            "【内部网络安全权衡】SSL 终止后内部流量为明文：'the security stops there, and the data is transferred in plain text between the load balancer and your app'。需确保内部网络可信，否则应使用 SSL Bridging 重新加密。",
            "【证书热更新】HAProxy 支持证书热更新：'perform a hitless reload to load the new SSL/TLS certificate without dropping active connections'。生产环境需要实现零停机证书轮换。",
            "【proxy_set_header 必要性】NGINX 默认修改 Host 和 Connection 头。为保留客户端真实 IP 需配置：'proxy_set_header X-Real-IP $remote_addr'，否则后端只能看到代理 IP。"
        ],
        handsOnPath: [
            "配置 NGINX 基础反向代理：在 location 块中使用 proxy_pass http://backend_server; 将请求转发到后端。",
            "传递真实客户端信息：配置 proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;",
            "配置响应缓冲：设置 proxy_buffering on; proxy_buffers 16 4k; proxy_buffer_size 2k; 优化响应传输。",
            "配置 SSL 终止：在 server 块中配置 ssl_certificate 和 ssl_certificate_key，监听 443 端口处理 HTTPS。",
            "测试 SSL 配置：使用 openssl s_client -connect server:443 验证证书链，使用 curl -v https://server 检查响应头。"
        ],
        selfCheck: [
            "正向代理和反向代理的核心区别是什么？各自服务于谁？",
            "NGINX 的 proxy_pass 指令如何工作？",
            "SSL 终止发生在哪里？解密后流量如何处理？",
            "SSL Termination、Passthrough、Bridging 三种模式的区别？",
            "为什么需要 proxy_set_header X-Real-IP？"
        ],
        extensions: [
            "研究 NGINX 的 upstream 模块如何配置多后端负载均衡。",
            "学习 Let's Encrypt 自动化证书管理与 certbot 集成。",
            "了解 HTTP/2 和 HTTP/3 在反向代理中的配置差异。",
            "研究 mTLS（双向 TLS）在零信任架构中的应用。"
        ],
        sourceUrls: [
            "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/",
            "https://www.haproxy.com/blog/haproxy-ssl-termination",
            "https://www.geeksforgeeks.org/computer-networks/ssl-termination/"
        ]
    },
    "w8-2": {
        lessonId: "w8-2",
        background: [
            "【API 网关定义】API Gateway'acts as a single entry point into the application, routing and composing requests to services'。它是微服务架构的统一入口，将客户端与内部服务解耦。",
            "【解决的核心问题】API 网关解决：客户端需要从多个服务获取数据（多次请求）；不同客户端有不同需求（移动端 vs Web）；服务位置动态变化；内部服务可能使用不兼容协议。",
            "【核心职责】API 网关负责：'Routes straightforward requests to appropriate services, Fans out to multiple services for complex requests, Adapts APIs for specific client requirements, Implements security and authorization checks'。",
            "【BFF 模式】Backends for Frontends 是 API 网关的变体：'deploys separate gateways—one each for web applications, mobile clients, and external third-party access'。每个网关为其消费者类型提供优化的 API。",
            "【AWS API Gateway 类型】AWS 提供三种 API 类型：REST API（标准 HTTP 方法）、HTTP API（轻量级）、WebSocket API（'有状态、全双工通信，基于消息内容路由'）。"
        ],
        keyDifficulties: [
            "【额外延迟权衡】API 网关引入'an extra network hop'，增加延迟。但文档指出通常'insignificant'，需要权衡集中管理的便利性与额外延迟的代价。",
            "【单点故障风险】API 网关成为'another component requiring deployment and maintenance'。必须实现网关层的高可用，否则整个系统不可用。",
            "【过度耦合陷阱】网关可能变成'神类'，承担过多业务逻辑。最佳实践是网关只处理横切关注点（认证、限流、日志），业务逻辑留在服务中。",
            "【协议转换复杂性】当内部服务使用不同协议（gRPC、SOAP）时，网关需要进行协议转换。这增加了网关的复杂度和潜在的性能开销。"
        ],
        handsOnPath: [
            "使用 Kong 或 APISIX 部署本地 API 网关：docker run -d --name kong kong:latest 快速启动。",
            "配置基础路由：创建 Service 和 Route，将 /api/users 路由到用户服务后端。",
            "添加认证插件：配置 Key Auth 或 JWT 插件，要求请求携带有效凭证。",
            "配置限流插件：设置 rate-limiting 插件，限制每分钟请求数。",
            "集成 Prometheus 监控：启用 prometheus 插件，采集网关指标。"
        ],
        selfCheck: [
            "API 网关解决了微服务架构中的哪些问题？",
            "API 网关的核心职责有哪些？",
            "什么是 BFF（Backend for Frontend）模式？它与标准 API 网关的区别？",
            "API 网关引入的额外复杂性和潜在问题有哪些？",
            "AWS API Gateway 的三种类型分别适用于什么场景？"
        ],
        extensions: [
            "研究 Kong、APISIX、Envoy Gateway 的功能对比。",
            "学习 GraphQL Federation 如何替代传统 API 网关的聚合功能。",
            "了解服务网格（Service Mesh）与 API 网关的职责划分。",
            "研究 API 版本管理策略：URL 版本、Header 版本、Query 参数版本。"
        ],
        sourceUrls: [
            "https://microservices.io/patterns/apigateway.html",
            "https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html",
            "https://developer.konghq.com/gateway/"
        ]
    },
    "w8-3": {
        lessonId: "w8-3",
        background: [
            "【限流核心要素】限流器包含三个基本元素：'Limit（时间段内最大请求数）、Window（执行时间窗口）、Identifier（区分因子如用户 ID、IP 地址）'。这三者共同定义限流策略。",
            "【限流响应策略】超过阈值时有三种处理方式：Blocking（'requests exceeding the limit are denied，返回 HTTP 429'）、Throttling（降速或延迟）、Shaping（降低优先级但仍处理）。",
            "【五种限流算法】常见算法包括：Fixed Window Counter（固定窗口计数）、Sliding Window Log（滑动窗口日志）、Sliding Window Counter（滑动窗口计数）、Token Bucket（令牌桶）、Leaky Bucket（漏桶）。",
            "【熔断器定义】熔断器模式通过'monitoring for failures'保护系统。当故障达到阈值时断开电路，'preventing further calls from executing'，避免级联故障导致整个系统崩溃。",
            "【熔断器三态模型】熔断器是有限状态机：Closed（正常调用）→ Open（故障时拒绝调用，返回错误）→ Half-Open（超时后尝试恢复）。成功恢复回到 Closed，失败则保持 Open。"
        ],
        keyDifficulties: [
            "【令牌桶 vs 漏桶】令牌桶允许突发流量（只要桶中有令牌），适合有突发需求的场景；漏桶以恒定速率处理请求，适合需要平滑流量的场景。选择取决于业务对突发流量的容忍度。",
            "【滑动窗口精度权衡】Sliding Window Log 精确但内存消耗大（存储每个请求时间戳）；Sliding Window Counter 结合了固定窗口效率和滑动窗口精度，是生产环境常用选择。",
            "【熔断器阈值配置】Resilience4j 默认配置：'failureRateThreshold 50%'、'waitDurationInOpenState 60000ms'、'slidingWindowSize 100'。阈值设置需要根据服务特性调整——太敏感导致误开，太迟钝无法及时保护。",
            "【分布式限流挑战】单机限流简单，分布式限流需要共享状态（Redis）。这引入了额外延迟和单点故障风险。可考虑本地限流+全局限流的混合策略。"
        ],
        handsOnPath: [
            "使用 Redis 实现令牌桶限流：利用 Redis 的 INCR 和 EXPIRE 命令实现原子计数。",
            "配置 NGINX 限流：使用 limit_req_zone 和 limit_req 指令配置请求速率限制。",
            "集成 Resilience4j 熔断器：配置 failureRateThreshold、waitDurationInOpenState 等参数。",
            "监控熔断器状态：使用 getEventPublisher() 订阅状态转换事件，集成 Prometheus 指标。",
            "测试熔断行为：模拟后端故障，观察熔断器状态转换和恢复过程。"
        ],
        selfCheck: [
            "限流的三个核心要素是什么？",
            "令牌桶和漏桶算法的区别？各自适用于什么场景？",
            "熔断器的三个状态是什么？状态转换条件是什么？",
            "滑动窗口计数器相比固定窗口和滑动窗口日志的优势是什么？",
            "分布式限流面临的主要挑战是什么？"
        ],
        extensions: [
            "研究 Sentinel（阿里巴巴）的流量控制和熔断降级能力。",
            "学习自适应限流（如 Netflix Concurrency Limits）如何动态调整阈值。",
            "了解 Service Mesh 中 Envoy 的限流和熔断配置。",
            "研究舱壁模式（Bulkhead）如何与熔断器配合实现更完善的容错。"
        ],
        sourceUrls: [
            "https://blog.bytebytego.com/p/rate-limiting-fundamentals",
            "https://martinfowler.com/bliki/CircuitBreaker.html",
            "https://resilience4j.readme.io/docs/circuitbreaker"
        ]
    },
    "w8-4": {
        lessonId: "w8-4",
        background: [
            "【服务发现定义】Service Discovery'helps you discover, track, and monitor the health of services within a network'。它维护一个服务目录，作为所有服务的单一真实信息来源（Single Source of Truth）。",
            "【两种发现模式】客户端侧发现：服务消费者直接查询服务目录，自行选择健康实例；服务端侧发现：消费者通过中介（如 Consul）查询，中介负责路由请求。API 网关通常采用服务端侧发现。",
            "【服务发现核心功能】提供：'动态 IP 和端口发现、简化水平扩展、通过健康检查确保可靠通信、跨健康实例负载均衡、自动服务注册和注销'。",
            "【APISIX 服务发现集成】APISIX 支持多种服务发现：Eureka、DNS、Consul、Consul KV、Nacos、Kubernetes。配置 upstream 时指定 service_name 和 discovery_type 即可自动获取实例列表。",
            "【动态配置热更新】服务发现与动态配置结合：'When the service starts, it will report information such as service name, IP, and port to the registry'。网关动态获取实例列表，'eliminating manual upstream maintenance'。"
        ],
        keyDifficulties: [
            "【服务注册时机】服务启动后何时注册？太早可能服务还未就绪；太晚可能错过流量。最佳实践是健康检查通过后再注册，确保只有健康实例接收流量。",
            "【服务注销与优雅关闭】服务关闭时需要先从注册中心注销，等待进行中的请求完成，然后才能终止。这涉及与 Kubernetes preStop hook 和负载均衡器健康检查的协调。",
            "【跨平台兼容性】Consul 是'platform-agnostic solution that supports various environments'，包括虚拟机、容器、Kubernetes、甚至遗留系统。但不同环境的集成方式和复杂度差异大。",
            "【配置中心与服务发现分离】Consul 等工具同时提供服务发现和配置管理（KV Store）。是否将两者放在同一系统需要权衡——单一工具简化运维，但也增加了耦合和单点故障风险。"
        ],
        handsOnPath: [
            "部署 Consul 服务发现：使用 docker run consul agent -dev 快速启动开发模式 Consul。",
            "注册服务到 Consul：使用 HTTP API 或配置文件注册服务，包含 name、address、port、health check。",
            "配置 APISIX 集成 Consul：在 config.yaml 中配置 discovery.consul，在 upstream 中指定 discovery_type: consul。",
            "测试服务发现：启动多个服务实例，观察 APISIX 如何自动发现并负载均衡。",
            "配置健康检查：定义 HTTP 或 TCP 健康检查，测试服务故障时的自动剔除。"
        ],
        selfCheck: [
            "服务发现解决了微服务架构中的什么问题？",
            "客户端侧发现和服务端侧发现的区别是什么？",
            "服务注册的最佳时机是什么？为什么？",
            "如何确保服务关闭时的优雅下线？",
            "APISIX 如何与 Consul 集成实现动态服务发现？"
        ],
        extensions: [
            "研究 Kubernetes 原生服务发现（Service、Endpoints）与外部服务发现的对比。",
            "学习 Nacos 作为服务发现和配置中心的一体化方案。",
            "了解 DNS-based 服务发现（CoreDNS）在 Kubernetes 中的实现。",
            "研究多数据中心服务发现的挑战与解决方案（Consul Federation）。"
        ],
        sourceUrls: [
            "https://developer.hashicorp.com/consul/docs/concepts/service-discovery",
            "https://apisix.apache.org/docs/apisix/discovery/"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "w8-1": [
        {
            id: "w8-1-q1",
            question: "反向代理和正向代理的核心区别是什么？",
            options: [
                "反向代理更快，正向代理更安全",
                "正向代理代表客户端访问互联网，反向代理代表服务器接收请求",
                "正向代理用于 HTTPS，反向代理用于 HTTP",
                "没有本质区别，只是部署位置不同"
            ],
            answer: 1,
            rationale: "正向代理'sits in front of client machines'代表客户端，反向代理'sits in front of web servers'代表服务器。核心区别在于服务对象不同。"
        },
        {
            id: "w8-1-q2",
            question: "NGINX 反向代理的核心工作流程是什么？",
            options: [
                "缓存请求、压缩响应、返回客户端",
                "发送请求到代理服务器、获取响应、返回给客户端",
                "验证请求、转换协议、加密响应",
                "解析 URL、查询 DNS、建立连接"
            ],
            answer: 1,
            rationale: "NGINX 反向代理工作流程：'Sends the request to a specified proxy server, Fetches the response, Sends the response back to the client'。"
        },
        {
            id: "w8-1-q3",
            question: "SSL 终止（SSL Termination）是什么？",
            options: [
                "关闭 SSL 连接",
                "在网络边界解密加密流量，然后转发明文到后端服务器",
                "生成 SSL 证书",
                "升级 SSL 到 TLS"
            ],
            answer: 1,
            rationale: "SSL Termination 是'decrypting encrypted data at the absolute border of the network before forwarding to backend servers'的过程。"
        },
        {
            id: "w8-1-q4",
            question: "SSL 终止可以减少后端服务器多少 CPU 负载？",
            options: [
                "约 10%",
                "约 20%",
                "约 40%",
                "约 60%"
            ],
            answer: 2,
            rationale: "SSL 终止通过卸载解密工作可'reduce backend CPU by ~40%'，显著降低后端负载。"
        },
        {
            id: "w8-1-q5",
            question: "SSL Passthrough 模式的特点是什么？",
            options: [
                "负载均衡器解密流量后重新加密",
                "负载均衡器不解密，直接转发加密流量到后端",
                "只允许 HTTP 流量通过",
                "需要在每台后端服务器安装相同证书"
            ],
            answer: 1,
            rationale: "SSL Passthrough 模式下负载均衡器'doesn't decrypt incoming HTTPS traffic and forwards it to the backend server as it is'。"
        },
        {
            id: "w8-1-q6",
            question: "SSL Bridging 模式的工作方式是什么？",
            options: [
                "完全不处理 SSL",
                "只在入口解密",
                "解密后重新加密再转发到后端",
                "使用不同的加密协议"
            ],
            answer: 2,
            rationale: "SSL Bridging 模式'decrypts incoming HTTPS traffic and re-encrypts it before forwarding it to the backend server'，实现端到端加密。"
        },
        {
            id: "w8-1-q7",
            question: "NGINX 中 proxy_set_header X-Real-IP 的作用是什么？",
            options: [
                "设置代理服务器 IP",
                "将客户端真实 IP 传递给后端服务器",
                "修改响应头",
                "配置 SSL 证书"
            ],
            answer: 1,
            rationale: "配置'proxy_set_header X-Real-IP $remote_addr'将客户端真实 IP 传递给后端，否则后端只能看到代理 IP。"
        },
        {
            id: "w8-1-q8",
            question: "HAProxy 更新证书时需要完全重启吗？",
            options: [
                "是，必须完全重启",
                "否，可以执行热加载而不丢弃活跃连接",
                "只能在维护窗口更新",
                "需要先停止所有流量"
            ],
            answer: 1,
            rationale: "HAProxy 支持证书热更新：'perform a hitless reload to load the new SSL/TLS certificate without dropping active connections'。"
        },
        {
            id: "w8-1-q9",
            question: "SSL 终止后内部流量的安全风险是什么？",
            options: [
                "没有风险",
                "流量以明文传输，如果内部网络不可信可能被窃听",
                "证书可能泄露",
                "后端服务器会过载"
            ],
            answer: 1,
            rationale: "SSL 终止后'the security stops there, and the data is transferred in plain text between the load balancer and your app'，需确保内部网络可信。"
        },
        {
            id: "w8-1-q10",
            question: "反向代理的主要优势不包括？",
            options: [
                "负载均衡和流量分发",
                "隐藏后端服务器身份",
                "直接访问客户端内网",
                "缓存和 SSL 终止"
            ],
            answer: 2,
            rationale: "反向代理代表服务器工作，不能访问客户端内网。它的优势包括负载均衡、隐藏服务器、缓存、SSL 终止等。"
        },
        {
            id: "w8-1-q11",
            question: "NGINX 的 proxy_buffering 指令的默认值是什么？",
            options: [
                "off",
                "on",
                "auto",
                "disabled"
            ],
            answer: 1,
            rationale: "NGINX proxy_buffering 默认为 on，启用响应缓冲以优化传输效率。"
        },
        {
            id: "w8-1-q12",
            question: "何时应该选择 SSL Passthrough 而非 SSL Termination？",
            options: [
                "需要负载均衡器检查 HTTP 内容时",
                "需要端到端加密且后端能处理 SSL 时",
                "后端服务器性能不足时",
                "需要简化证书管理时"
            ],
            answer: 1,
            rationale: "'If end-to-end encryption is required, prioritize passthrough or re-encryption architectures'。当安全要求高且后端能处理 SSL 时使用 Passthrough。"
        }
    ],
    "w8-2": [
        {
            id: "w8-2-q1",
            question: "API 网关的核心定义是什么？",
            options: [
                "一个数据库代理服务器",
                "作为应用的单一入口点，路由和组合请求到服务",
                "一个静态文件服务器",
                "一个消息队列中间件"
            ],
            answer: 1,
            rationale: "API Gateway'acts as a single entry point into the application, routing and composing requests to services'。"
        },
        {
            id: "w8-2-q2",
            question: "API 网关解决的问题不包括？",
            options: [
                "客户端需要从多个服务获取数据",
                "不同客户端有不同需求",
                "数据库读写分离",
                "服务位置动态变化"
            ],
            answer: 2,
            rationale: "API 网关解决的问题包括：多服务数据聚合、客户端差异化需求、动态服务位置、协议不兼容。数据库读写分离是数据层问题。"
        },
        {
            id: "w8-2-q3",
            question: "什么是 BFF（Backend for Frontend）模式？",
            options: [
                "一个前端框架",
                "为不同类型客户端部署独立的 API 网关",
                "后端服务的测试模式",
                "数据库连接池"
            ],
            answer: 1,
            rationale: "BFF'deploys separate gateways—one each for web applications, mobile clients, and external third-party access'，每个网关为其消费者提供优化的 API。"
        },
        {
            id: "w8-2-q4",
            question: "API 网关的核心职责包括？",
            options: [
                "数据持久化存储",
                "路由、限流、认证、协议转换",
                "代码编译和部署",
                "日志文件压缩"
            ],
            answer: 1,
            rationale: "API 网关负责：'Routes requests, Fans out to multiple services, Adapts APIs, Implements security and authorization checks'。"
        },
        {
            id: "w8-2-q5",
            question: "API 网关引入的潜在问题是什么？",
            options: [
                "提高了系统性能",
                "额外的网络跳跃和延迟，增加运维复杂度",
                "减少了代码量",
                "简化了客户端实现"
            ],
            answer: 1,
            rationale: "API 网关'introduces architectural complexity and operational overhead'，并'adds latency through an extra network hop'。"
        },
        {
            id: "w8-2-q6",
            question: "AWS API Gateway 支持哪种有状态的双向通信协议？",
            options: [
                "REST API",
                "HTTP API",
                "WebSocket API",
                "GraphQL API"
            ],
            answer: 2,
            rationale: "WebSocket API 支持'有状态、全双工通信，基于消息内容路由'，适合实时应用场景。"
        },
        {
            id: "w8-2-q7",
            question: "API 网关为什么能减少客户端与服务端的往返次数？",
            options: [
                "使用更快的网络协议",
                "可以将多个服务请求聚合为单次请求",
                "缓存所有响应",
                "压缩请求数据"
            ],
            answer: 1,
            rationale: "API 网关能'Fans out to multiple services for complex requests'，将多个内部服务调用聚合为单次客户端请求。"
        },
        {
            id: "w8-2-q8",
            question: "API 网关变成'神类'的问题是什么？",
            options: [
                "性能太好难以替换",
                "承担过多业务逻辑导致过度耦合",
                "配置太简单",
                "无法扩展"
            ],
            answer: 1,
            rationale: "网关可能承担过多业务逻辑。最佳实践是网关只处理横切关注点（认证、限流、日志），业务逻辑留在服务中。"
        },
        {
            id: "w8-2-q9",
            question: "API 网关的优势是什么？",
            options: [
                "增加系统复杂度",
                "隔离客户端与服务分区细节，集中处理横切关注点",
                "需要更多服务器",
                "增加开发时间"
            ],
            answer: 1,
            rationale: "API 网关的优势：'Insulates clients from service partition details, Reduces roundtrips, Centralizes cross-cutting concerns'。"
        },
        {
            id: "w8-2-q10",
            question: "AWS API Gateway 支持的认证方式不包括？",
            options: [
                "AWS IAM 策略",
                "Lambda 授权函数",
                "Amazon Cognito 用户池",
                "本地文件认证"
            ],
            answer: 3,
            rationale: "AWS API Gateway 支持 IAM 策略、Lambda 授权函数、Cognito 用户池，不支持本地文件认证。"
        },
        {
            id: "w8-2-q11",
            question: "API 网关引入的额外延迟通常是？",
            options: [
                "非常显著，需要避免使用",
                "通常不显著（insignificant）",
                "完全没有延迟",
                "只在高峰期有延迟"
            ],
            answer: 1,
            rationale: "文档指出额外延迟'typically insignificant'，需要权衡集中管理的便利性与额外延迟的代价。"
        },
        {
            id: "w8-2-q12",
            question: "当内部服务使用不同协议（如 gRPC、SOAP）时，API 网关需要做什么？",
            options: [
                "拒绝请求",
                "协议转换",
                "直接转发",
                "忽略协议差异"
            ],
            answer: 1,
            rationale: "API 网关需要进行协议转换，将外部统一的 HTTP/REST 请求转换为内部服务使用的不同协议。"
        }
    ],
    "w8-3": [
        {
            id: "w8-3-q1",
            question: "限流器的三个基本要素是什么？",
            options: [
                "速度、容量、带宽",
                "Limit（限制）、Window（窗口）、Identifier（标识符）",
                "CPU、内存、磁盘",
                "请求、响应、超时"
            ],
            answer: 1,
            rationale: "限流器包含三个基本元素：'Limit（时间段内最大请求数）、Window（执行时间窗口）、Identifier（区分因子如用户 ID、IP 地址）'。"
        },
        {
            id: "w8-3-q2",
            question: "当请求超过限流阈值时，Blocking 策略的行为是什么？",
            options: [
                "降低请求优先级",
                "延迟处理请求",
                "拒绝请求并返回 HTTP 429",
                "将请求放入队列"
            ],
            answer: 2,
            rationale: "Blocking 策略：'requests exceeding the limit are denied access to the resource'，通常返回 HTTP 429 状态码。"
        },
        {
            id: "w8-3-q3",
            question: "熔断器模式的三个状态是什么？",
            options: [
                "Open、Closed、Error",
                "Closed、Open、Half-Open",
                "Active、Inactive、Pending",
                "Running、Stopped、Paused"
            ],
            answer: 1,
            rationale: "熔断器是有限状态机：Closed（正常调用）→ Open（拒绝调用）→ Half-Open（尝试恢复）。"
        },
        {
            id: "w8-3-q4",
            question: "令牌桶算法相比漏桶算法的主要区别是什么？",
            options: [
                "令牌桶更简单",
                "令牌桶允许突发流量",
                "漏桶更快",
                "没有区别"
            ],
            answer: 1,
            rationale: "令牌桶允许突发流量（只要桶中有令牌），漏桶以恒定速率处理请求。选择取决于业务对突发流量的容忍度。"
        },
        {
            id: "w8-3-q5",
            question: "Resilience4j 熔断器的默认 failureRateThreshold 是多少？",
            options: [
                "30%",
                "40%",
                "50%",
                "60%"
            ],
            answer: 2,
            rationale: "Resilience4j 默认配置：'failureRateThreshold 50%'，超过此阈值会触发 Open 状态。"
        },
        {
            id: "w8-3-q6",
            question: "熔断器从 Open 状态转换到 Half-Open 状态的条件是什么？",
            options: [
                "管理员手动触发",
                "等待 waitDurationInOpenState 时间后",
                "收到新请求时",
                "后端服务恢复时"
            ],
            answer: 1,
            rationale: "熔断器在 Open 状态等待'waitDurationInOpenState'（默认 60000ms）后自动进入 Half-Open 尝试恢复。"
        },
        {
            id: "w8-3-q7",
            question: "Sliding Window Counter 算法的优势是什么？",
            options: [
                "最简单的实现",
                "结合固定窗口效率和滑动窗口精度",
                "不需要存储任何状态",
                "只适用于单机"
            ],
            answer: 1,
            rationale: "Sliding Window Counter'结合了固定窗口效率和滑动窗口精度'，是生产环境常用选择。"
        },
        {
            id: "w8-3-q8",
            question: "熔断器模式解决的核心问题是什么？",
            options: [
                "提高系统性能",
                "防止故障级联导致整个系统崩溃",
                "减少代码量",
                "简化部署流程"
            ],
            answer: 1,
            rationale: "熔断器通过'monitoring for failures'，当故障达阈值时断开电路，'preventing further calls from executing'，避免级联故障。"
        },
        {
            id: "w8-3-q9",
            question: "限流的 Throttling 策略与 Blocking 的区别是什么？",
            options: [
                "Throttling 完全拒绝请求",
                "Throttling 降速或延迟处理，而非直接拒绝",
                "Throttling 只用于 HTTP",
                "没有区别"
            ],
            answer: 1,
            rationale: "Blocking 直接拒绝并返回 429，而 Throttling 是'Slowing or delaying excess requests'，如降低视频流质量。"
        },
        {
            id: "w8-3-q10",
            question: "分布式限流面临的主要挑战是什么？",
            options: [
                "算法太复杂",
                "需要共享状态（如 Redis），引入额外延迟和单点故障风险",
                "不支持高并发",
                "无法配置阈值"
            ],
            answer: 1,
            rationale: "分布式限流需要共享状态（Redis），这引入了额外延迟和单点故障风险。可考虑本地限流+全局限流的混合策略。"
        },
        {
            id: "w8-3-q11",
            question: "Resilience4j 熔断器支持哪两种滑动窗口类型？",
            options: [
                "时间窗口和空间窗口",
                "Count-based 和 Time-based",
                "固定窗口和动态窗口",
                "本地窗口和分布式窗口"
            ],
            answer: 1,
            rationale: "Resilience4j 支持 Count-based（基于调用次数）和 Time-based（基于时间）两种滑动窗口类型。"
        },
        {
            id: "w8-3-q12",
            question: "漏桶算法的特点是什么？",
            options: [
                "允许突发流量",
                "以恒定速率处理请求，平滑流量",
                "完全不限制流量",
                "只记录日志不做限制"
            ],
            answer: 1,
            rationale: "漏桶算法'processes requests at constant rate from a queue'，以恒定速率处理请求，适合需要平滑流量的场景。"
        }
    ],
    "w8-4": [
        {
            id: "w8-4-q1",
            question: "服务发现的核心定义是什么？",
            options: [
                "发现网络中的安全漏洞",
                "发现、追踪和监控网络中服务的健康状态",
                "发现可用的硬件资源",
                "发现代码中的 bug"
            ],
            answer: 1,
            rationale: "Service Discovery'helps you discover, track, and monitor the health of services within a network'。"
        },
        {
            id: "w8-4-q2",
            question: "客户端侧服务发现和服务端侧服务发现的区别是什么？",
            options: [
                "没有区别",
                "客户端侧由消费者直接查询目录；服务端侧通过中介查询和路由",
                "客户端侧更安全",
                "服务端侧只支持 HTTP"
            ],
            answer: 1,
            rationale: "客户端侧发现：消费者直接查询目录自行选择实例；服务端侧发现：通过中介（如 Consul）查询，中介负责路由。"
        },
        {
            id: "w8-4-q3",
            question: "服务发现系统提供的核心功能不包括？",
            options: [
                "动态 IP 和端口发现",
                "通过健康检查确保可靠通信",
                "数据库查询优化",
                "自动服务注册和注销"
            ],
            answer: 2,
            rationale: "服务发现提供：动态发现、健康检查、负载均衡、自动注册注销。数据库查询优化不是服务发现的功能。"
        },
        {
            id: "w8-4-q4",
            question: "APISIX 支持哪些服务发现类型？",
            options: [
                "只支持 Kubernetes",
                "Eureka、DNS、Consul、Nacos、Kubernetes 等",
                "只支持 DNS",
                "只支持 Eureka"
            ],
            answer: 1,
            rationale: "APISIX 支持多种服务发现：'Eureka、DNS、Consul、Consul KV、Nacos、Kubernetes、Control Plane'等。"
        },
        {
            id: "w8-4-q5",
            question: "服务注册的最佳时机是什么？",
            options: [
                "服务启动时立即注册",
                "健康检查通过后再注册",
                "收到第一个请求时注册",
                "管理员手动触发"
            ],
            answer: 1,
            rationale: "最佳实践是健康检查通过后再注册，确保只有健康实例接收流量，避免太早注册导致请求失败。"
        },
        {
            id: "w8-4-q6",
            question: "Consul 的主要优势是什么？",
            options: [
                "只支持 Kubernetes",
                "平台无关，支持虚拟机、容器、Kubernetes 等多种环境",
                "只支持 Java 应用",
                "只能在云环境使用"
            ],
            answer: 1,
            rationale: "Consul 是'platform-agnostic solution that supports various environments'，包括虚拟机、容器、Kubernetes、甚至遗留系统。"
        },
        {
            id: "w8-4-q7",
            question: "服务关闭时的优雅下线应该如何处理？",
            options: [
                "直接终止进程",
                "先从注册中心注销，等待进行中请求完成，然后终止",
                "不需要任何处理",
                "只通知负载均衡器"
            ],
            answer: 1,
            rationale: "服务关闭时需要先从注册中心注销，等待进行中的请求完成，然后才能终止。这涉及与 preStop hook 的协调。"
        },
        {
            id: "w8-4-q8",
            question: "APISIX 如何与服务发现集成？",
            options: [
                "不支持服务发现",
                "在 upstream 中指定 service_name 和 discovery_type",
                "只能使用静态 IP 配置",
                "需要额外的插件"
            ],
            answer: 1,
            rationale: "APISIX 在 upstream 配置中指定'service_name 和 discovery_type'即可自动获取实例列表。"
        },
        {
            id: "w8-4-q9",
            question: "服务发现中的服务目录（Service Directory）的作用是什么？",
            options: [
                "存储源代码",
                "作为所有服务的单一真实信息来源",
                "存储日志文件",
                "管理数据库连接"
            ],
            answer: 1,
            rationale: "服务目录'acts as the single source of truth for all services'，维护所有服务的信息。"
        },
        {
            id: "w8-4-q10",
            question: "为什么服务发现对微服务架构至关重要？",
            options: [
                "减少代码量",
                "服务实例频繁变化，需要动态发现可用实例",
                "提高开发速度",
                "简化数据库设计"
            ],
            answer: 1,
            rationale: "在动态环境中，'活跃服务实例频繁变化'。服务发现确保健康、可扩展且响应迅速的应用运行。"
        },
        {
            id: "w8-4-q11",
            question: "将服务发现和配置中心放在同一系统的权衡是什么？",
            options: [
                "没有任何影响",
                "单一工具简化运维，但增加耦合和单点故障风险",
                "性能更好",
                "更安全"
            ],
            answer: 1,
            rationale: "是否将两者放在同一系统需要权衡——单一工具简化运维，但也增加了耦合和单点故障风险。"
        },
        {
            id: "w8-4-q12",
            question: "服务启动时向注册中心报告什么信息？",
            options: [
                "只报告服务名称",
                "服务名称、IP 和端口等信息",
                "只报告 IP 地址",
                "只报告健康状态"
            ],
            answer: 1,
            rationale: "'When the service starts, it will report information such as service name, IP, and port to the registry'。"
        }
    ]
}
