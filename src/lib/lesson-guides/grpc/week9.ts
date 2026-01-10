import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "grpc-w9-1": {
        lessonId: "grpc-w9-1",
        background: [
            "【负载均衡策略】gRPC 官方文档：'A load balancing policy receives server addresses from the name resolver and maintains connections (subchannels) while selecting which backend to use for each RPC'——负载均衡策略从名称解析器接收服务器地址，维护子通道连接，并为每个 RPC 选择后端。",
            "【pick_first 策略】gRPC 官方文档：'The default policy that attempts each address sequentially and uses the first successful connection without actual load distribution'——默认策略，按顺序尝试每个地址并使用第一个成功的连接，不进行实际的负载分配。",
            "【round_robin 策略】gRPC 官方文档：'Connects to all available addresses and rotates through the connected backends for each RPC'——连接所有可用地址并为每个 RPC 轮转使用已连接的后端，实现流量均匀分配。",
            "【代理负载均衡】gRPC 官方博客：'The LB keeps track of load on each backend and implements algorithms for distributing load fairly'——代理负载均衡器跟踪每个后端的负载并实现公平分配算法，适用于不可信客户端场景但会引入额外网络跳转。",
            "【客户端负载均衡】gRPC 官方博客：客户端维护后端服务器感知并直接选择端点，服务器向客户端发送负载信息，允许在应用层进行智能路由决策，无需中间代理。"
        ],
        keyDifficulties: [
            "【L3/L4 vs L7 负载均衡】L3/L4 在 TCP 连接层操作，简单转发数据，延迟开销低；L7 终止并解析 HTTP/2 协议，可检查请求内容，支持基于 header/cookie 的复杂路由，能将一个客户端的多个 HTTP/2 流分发到不同后端。",
            "【Thick Client vs Lookaside LB】Thick Client 直接在客户端库中实现负载均衡逻辑，集成服务发现和健康监控；Lookaside LB 由专用服务器提供路由建议，在客户端和基础设施之间平衡复杂度。",
            "【Picker 实现要求】gRPC 官方文档：'This needs to be a fast operation as it is on the RPC call path'——Picker 选择器必须是快速操作，因为它在 RPC 调用路径上。Picker 负责为每个请求选择适当的后端子通道。",
            "【子通道管理】负载均衡器需要维护到后端服务器的连接（子通道），处理连接建立、断开重连、健康状态变化等生命周期事件，确保可用后端池的准确性。"
        ],
        handsOnPath: [
            "在 gRPC 客户端代码中配置 round_robin 负载均衡策略，通过 Service Config 或代码方式指定。启动多个服务端实例，观察请求分布情况。",
            "使用 grpcdebug 工具检查 Channelz 统计信息，了解每个子通道的 RPC 发送数量、成功/失败次数等指标，验证负载均衡效果。",
            "搭建简单的代理负载均衡环境（如使用 Envoy），配置 gRPC 服务路由，对比代理模式与客户端直连模式的延迟差异。",
            "实现一个简单的加权轮询策略：根据后端服务器的权重分配请求比例，理解自定义负载均衡策略的实现要点。",
            "模拟后端故障场景：关闭一个后端实例，观察负载均衡器如何处理连接失败并重新分配流量到健康实例。",
            "配置 keepalive 参数维护长连接，测试连接在空闲期间的保活机制，了解 keepalive 与负载均衡的配合。"
        ],
        selfCheck: [
            "gRPC 内置的 pick_first 和 round_robin 策略各有什么特点？什么场景下应该选择哪种？",
            "代理负载均衡和客户端负载均衡各有什么优缺点？如何根据业务场景选择？",
            "L7 负载均衡相比 L3/L4 能提供哪些额外能力？为什么 gRPC 通常需要 L7 负载均衡？",
            "Lookaside 负载均衡模式是什么？它如何在高性能和集中管理之间取得平衡？",
            "负载均衡策略中的 Picker 组件有什么作用？为什么它的性能很关键？",
            "当后端实例发生故障时，不同负载均衡模式如何响应？重新路由的延迟有什么差异？"
        ],
        extensions: [
            "研究 xDS 协议：了解 gRPC 如何通过 xDS 与服务网格控制平面集成，动态获取负载均衡配置和端点信息。",
            "探索 Envoy 的 gRPC 负载均衡能力：包括 Weighted Round Robin、Least Request、Ring Hash 等高级策略。",
            "学习 gRPC 的 Retry 和 Hedging 策略：了解重试机制如何与负载均衡配合，实现更高的可用性。",
            "研究 AWS ALB/NLB 和 GCP Cloud Load Balancing 对 gRPC 的支持：了解云厂商负载均衡器的 gRPC 特性。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/guides/custom-load-balancing/",
            "https://grpc.io/docs/guides/custom-name-resolution/",
            "https://grpc.io/blog/grpc-load-balancing/"
        ]
    },
    "grpc-w9-2": {
        lessonId: "grpc-w9-2",
        background: [
            "【名称解析机制】gRPC 官方文档：自定义名称解析使 gRPC 能够确定服务名称对应的 IP 地址，虽然 DNS 是默认机制，但 gRPC 通过可插拔接口支持多种解析方式。",
            "【解析器类型】gRPC 官方文档支持多种解析器：DNS（dns:///grpc.io:50051）、Unix Domain Socket（unix:///run/containerd/containerd.sock）、xDS（xds:///wallet.grpcwallet.io）、IPv4（ipv4:198.51.100.123:50051）。",
            "【响应式解析】gRPC 官方文档：自定义解析器提供超越标准 DNS 的响应式能力，支持基于 watch 的更新，能智能响应后端故障、扩缩容事件和动态基础设施变化。",
            "【Service Config】gRPC 官方文档：Service Config 是'JSON object that defines arbitrary configuration specifying how traffic should be routed'——定义流量路由的 JSON 配置对象，可通过名称解析器分发或客户端编程指定。",
            "【重试策略配置】Service Config 支持重试配置，包括最大尝试次数、退避设置、可重试状态码，可针对特定服务或单个方法进行配置。"
        ],
        keyDifficulties: [
            "【解析器与负载均衡器协作】名称解析器输出服务器地址列表，负载均衡器接收这些地址并维护连接。两者需要协调工作：解析器负责发现，负载均衡器负责选择和连接管理。",
            "【Service Config 分发】Service Config 可以通过名称解析器分发（DNS TXT 记录或自定义解析器返回），也可以在客户端代码中指定。优先级：客户端代码 > 解析器返回 > 默认值。",
            "【健康检查集成】Service Config 支持配置健康检查名称，客户端会使用标准 gRPC 健康检查服务监控后端可用性，将健康状态与负载均衡决策结合。",
            "【Wait-for-ready 语义】Service Config 可配置 wait-for-ready 行为：当后端不可用时延迟 RPC 而非立即失败，适用于瞬态不可用场景。"
        ],
        handsOnPath: [
            "分析 gRPC 客户端如何解析 dns:/// 和 ipv4:// 等不同 scheme 的目标地址，理解 URI 格式对解析行为的影响。",
            "配置 Service Config 指定负载均衡策略和重试策略：创建 JSON 配置文件，测试策略是否生效。",
            "实现一个简单的静态名称解析器：返回固定的服务器地址列表，理解解析器的基本接口和生命周期。",
            "探索 DNS 解析器的高级功能：配置 DNS SRV 记录，测试服务发现和端口解析的行为。",
            "配置健康检查集成：在 Service Config 中启用健康检查，观察客户端如何根据健康状态调整连接。",
            "测试 wait-for-ready 行为：配置 waitForReady 选项，模拟后端暂时不可用的场景，验证请求是否会等待而非立即失败。"
        ],
        selfCheck: [
            "gRPC 支持哪些内置的名称解析器？各自的 URI 格式是什么？",
            "自定义名称解析器相比标准 DNS 解析有什么优势？适用于什么场景？",
            "Service Config 可以配置哪些行为？它与名称解析器的关系是什么？",
            "什么是 wait-for-ready 语义？它与立即失败的重试有什么区别？",
            "如何将健康检查与服务发现集成？健康状态如何影响负载均衡决策？",
            "在 Kubernetes 环境中，gRPC 服务发现有哪些常见方案？各自的优缺点是什么？"
        ],
        extensions: [
            "研究 Consul、etcd、ZooKeeper 等服务注册中心与 gRPC 的集成方案，了解生产环境中的服务发现架构。",
            "探索 Kubernetes DNS 和 Headless Service 如何为 gRPC 客户端提供服务发现能力。",
            "学习 xDS API（LDS、RDS、CDS、EDS）：了解服务网格中的动态配置发现机制。",
            "研究 gRPC 的 xds resolver：了解如何通过 xDS 协议获取服务配置和端点信息。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/guides/custom-name-resolution/",
            "https://grpc.io/docs/guides/service-config/",
            "https://grpc.io/docs/guides/"
        ]
    },
    "grpc-w9-3": {
        lessonId: "grpc-w9-3",
        background: [
            "【自定义负载均衡实现】gRPC 官方文档：实现自定义负载均衡器需要在负载均衡器注册表中注册实现，以便通过 Service Config 引用，包含配置解析、子通道管理、Picker 实现等组件。",
            "【后端指标】gRPC 官方文档：'A mechanism in the gRPC library that allows users to inject custom metrics at the gRPC server and consume at gRPC clients to make your custom load balancing algorithms'——允许服务端注入自定义指标并在客户端消费，用于智能负载均衡。",
            "【Per-Query 指标】gRPC 官方文档：服务端在 RPC 完成时将指标数据附加到 trailing metadata 中，适用于短时间的 unary 调用场景。",
            "【Out-of-Band 指标】gRPC 官方文档：服务端独立于 RPC 完成周期性推送指标数据，适用于所有场景（unary、streaming、无活跃 RPC），但无法捕获单次查询的特定成本。",
            "【ORCA 标准】gRPC 实现了 Open Request Cost Aggregation 标准，这是 CNCF xDS 项目定义的开放规范，用于传递后端指标信息。"
        ],
        keyDifficulties: [
            "【Picker 性能要求】gRPC 官方文档强调 Picker 操作必须快速，因为它在每个 RPC 调用路径上执行。避免在 Picker 中进行复杂计算或阻塞操作，应提前计算好权重等信息。",
            "【指标传递时机】Per-Query 指标在 RPC 响应中传递，延迟一个 RTT；Out-of-Band 指标通过独立通道推送，可能更及时但增加复杂度。选择取决于指标更新频率和精度要求。",
            "【状态同步挑战】自定义负载均衡器需要处理异步的状态更新：名称解析器的地址变化、子通道的连接状态变化、后端指标的更新，都需要正确同步到 Picker。",
            "【故障域感知】高级负载均衡策略需要考虑故障域（Zone、Region），在保证低延迟的同时提供故障隔离，避免跨域流量在正常情况下不必要地消耗资源。"
        ],
        handsOnPath: [
            "研究 gRPC 官方提供的自定义负载均衡示例代码（Java/Go），理解负载均衡器的注册、配置解析和 Picker 实现流程。",
            "实现一个基于响应时间的负载均衡策略：记录每个后端的平均延迟，优先选择延迟低的后端。",
            "集成 ORCA 指标：在服务端报告 CPU 使用率或队列深度，在客户端负载均衡器中消费这些指标做出路由决策。",
            "实现 Zone-aware 负载均衡：优先路由到同 Zone 的后端，只在本地 Zone 不可用时才跨 Zone 路由。",
            "测试负载均衡策略的故障恢复能力：模拟后端故障和恢复，观察流量切换行为和恢复时间。",
            "对比不同负载均衡策略的性能：通过基准测试比较 round_robin、weighted round robin、least connections 等策略在不同负载下的表现。"
        ],
        selfCheck: [
            "实现自定义 gRPC 负载均衡器需要哪些核心组件？它们各自的职责是什么？",
            "Per-Query 和 Out-of-Band 两种指标传递方式有什么区别？各自适用于什么场景？",
            "为什么 Picker 的性能很关键？应该如何优化 Picker 的实现？",
            "ORCA 标准是什么？它如何帮助实现智能负载均衡？",
            "如何实现 Zone-aware 或 Locality-aware 的负载均衡策略？",
            "自定义负载均衡策略如何与 Service Config 和 xDS 集成？"
        ],
        extensions: [
            "研究 Envoy 的负载均衡策略实现：包括 Weighted Least Request、Maglev、Ring Hash 等高级算法。",
            "探索 gRPC-LB 协议（grpclb）：了解早期的外部负载均衡方案及其演进到 xDS 的过程。",
            "学习服务网格中的流量管理：了解 Istio/Linkerd 如何实现细粒度的流量控制和负载均衡。",
            "研究 P2C（Power of Two Choices）算法：了解这种在大规模系统中表现优异的负载均衡算法原理。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/guides/custom-load-balancing/",
            "https://grpc.io/docs/guides/custom-backend-metrics/",
            "https://grpc.io/docs/guides/"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "grpc-w9-1": [
        {
            id: "grpc-w9-1-q1",
            question: "gRPC 官方文档对负载均衡策略的描述是什么？",
            options: [
                "从名称解析器接收服务器地址，维护子通道连接，并为每个 RPC 选择后端",
                "只负责监控服务器健康状态",
                "只负责序列化和反序列化消息",
                "只负责管理 TLS 证书"
            ],
            answer: 0,
            rationale: "gRPC 官方文档：'A load balancing policy receives server addresses from the name resolver and maintains connections (subchannels) while selecting which backend to use for each RPC'。"
        },
        {
            id: "grpc-w9-1-q2",
            question: "gRPC 的 pick_first 策略有什么特点？",
            options: [
                "连接所有可用地址并轮转使用",
                "根据后端负载动态选择",
                "随机选择一个后端",
                "按顺序尝试每个地址并使用第一个成功的连接，不进行实际负载分配"
            ],
            answer: 3,
            rationale: "gRPC 官方文档：pick_first 是默认策略，'attempts each address sequentially and uses the first successful connection without actual load distribution'。"
        },
        {
            id: "grpc-w9-1-q3",
            question: "gRPC 官方文档对 round_robin 策略的描述是什么？",
            options: [
                "'Connects to all available addresses and rotates through the connected backends for each RPC'",
                "只使用第一个成功的连接",
                "优先选择延迟最低的后端",
                "随机选择后端"
            ],
            answer: 0,
            rationale: "gRPC 官方文档：round_robin 策略'Connects to all available addresses and rotates through the connected backends for each RPC'——为每个 RPC 轮转使用已连接的后端。"
        },
        {
            id: "grpc-w9-1-q4",
            question: "代理负载均衡（Proxy Load Balancing）的主要特点是什么？",
            options: [
                "客户端直接连接后端",
                "负载均衡器跟踪每个后端的负载并实现公平分配算法，适用于不可信客户端",
                "不需要中间跳转",
                "客户端实现负载均衡逻辑"
            ],
            answer: 1,
            rationale: "gRPC 官方博客：'The LB keeps track of load on each backend and implements algorithms for distributing load fairly'——代理 LB 跟踪负载并公平分配，适用于不可信客户端场景。"
        },
        {
            id: "grpc-w9-1-q5",
            question: "L7 负载均衡相比 L3/L4 的主要优势是什么？",
            options: [
                "延迟更低",
                "配置更简单",
                "不需要 TLS 终止",
                "能终止并解析 HTTP/2 协议，支持基于 header/cookie 的路由，可将多个 HTTP/2 流分发到不同后端"
            ],
            answer: 3,
            rationale: "gRPC 官方博客：L7 LB'terminates and parses the HTTP/2 protocol'，可检查请求内容，支持基于 header/cookie 的复杂路由，能将一个客户端的多个 HTTP/2 流分发到不同后端。"
        },
        {
            id: "grpc-w9-1-q6",
            question: "gRPC 官方文档对 Picker 组件的要求是什么？",
            options: [
                "Picker 操作可以是阻塞的",
                "'This needs to be a fast operation as it is on the RPC call path'——必须是快速操作",
                "Picker 只在启动时运行一次",
                "Picker 负责建立 TCP 连接"
            ],
            answer: 1,
            rationale: "gRPC 官方文档强调 Picker'needs to be a fast operation as it is on the RPC call path'——因为它在每个 RPC 调用路径上执行，必须快速。"
        },
        {
            id: "grpc-w9-1-q7",
            question: "Lookaside Load Balancing 模式的特点是什么？",
            options: [
                "专用 LB 服务器提供路由建议，客户端执行实际连接，在复杂度和性能之间取得平衡",
                "客户端直接实现所有负载均衡逻辑",
                "所有流量都通过代理转发",
                "服务端决定客户端应该连接哪个后端"
            ],
            answer: 0,
            rationale: "gRPC 官方博客：Lookaside LB 由专用服务器提供路由建议给客户端，consolidating state management while allowing clients to execute the actual connections，在客户端和基础设施之间平衡复杂度。"
        },
        {
            id: "grpc-w9-1-q8",
            question: "什么场景推荐使用客户端负载均衡（Thick Client）？",
            options: [
                "面向公共用户的 API",
                "不可信的客户端环境",
                "需要会话粘性的场景",
                "高流量、可信任的环境，如微服务间通信"
            ],
            answer: 3,
            rationale: "gRPC 官方博客建议：High-traffic, trusted environments favor thick client-side load balancing，适用于微服务间的高性能通信场景。"
        },
        {
            id: "grpc-w9-1-q9",
            question: "gRPC 子通道（Subchannel）的作用是什么？",
            options: [
                "用于消息序列化",
                "用于流量加密",
                "负载均衡器维护到后端服务器的连接",
                "用于服务发现"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：负载均衡策略'maintains connections (subchannels)'——子通道是负载均衡器维护的到后端服务器的连接。"
        },
        {
            id: "grpc-w9-1-q10",
            question: "使用多个 Channel 的场景是什么？",
            options: [
                "当 HTTP/2 连接限制了并发流数量，需要创建独立 Channel 或 Channel 池来分散流量",
                "当需要连接不同的服务时",
                "当需要不同的认证方式时",
                "当需要不同的序列化格式时"
            ],
            answer: 0,
            rationale: "gRPC 官方文档：When HTTP/2 connection limits constrain concurrent streams, applications should consider creating separate channels for high-load areas or implementing a channel pool。"
        },
        {
            id: "grpc-w9-1-q11",
            question: "什么是 gRPC 负载均衡中的故障域感知？",
            options: [
                "只在出现故障时才进行负载均衡",
                "检测服务器故障并重启",
                "记录故障日志用于分析",
                "考虑 Zone/Region 等拓扑信息，在保证低延迟的同时提供故障隔离"
            ],
            answer: 3,
            rationale: "高级负载均衡策略需要考虑故障域（Zone、Region），在保证低延迟的同时提供故障隔离，避免跨域流量在正常情况下不必要地消耗资源。"
        },
        {
            id: "grpc-w9-1-q12",
            question: "传统多客户端架构应该选择什么负载均衡方案？",
            options: [
                "只使用客户端负载均衡",
                "使用代理方案（如 HAProxy、GCLB、或需要会话粘性时使用 Envoy）",
                "不需要负载均衡",
                "让每个客户端随机选择后端"
            ],
            answer: 1,
            rationale: "gRPC 官方博客：Traditional multi-client architectures with trust boundaries should use proxy solutions (L3/L4 with HAProxy, GCLB, or L7 with Envoy for session stickiness)。"
        }
    ],
    "grpc-w9-2": [
        {
            id: "grpc-w9-2-q1",
            question: "gRPC 官方文档支持哪些名称解析器类型？",
            options: [
                "只支持 DNS 解析",
                "DNS、Unix Domain Socket、xDS、IPv4 等多种解析器",
                "只支持 IP 地址直连",
                "只支持 Kubernetes Service"
            ],
            answer: 1,
            rationale: "gRPC 官方文档列出支持的解析器：DNS（dns:///）、Unix Domain Socket（unix:///）、xDS（xds:///）、IPv4（ipv4:）等多种类型。"
        },
        {
            id: "grpc-w9-2-q2",
            question: "gRPC 官方文档对 Service Config 的定义是什么？",
            options: [
                "服务端的启动配置文件",
                "'JSON object that defines arbitrary configuration specifying how traffic should be routed'——定义流量路由的 JSON 配置",
                "Protobuf 的编译配置",
                "TLS 证书配置"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Service Config 是'JSON object that defines arbitrary configuration specifying how traffic should be routed'——定义流量如何路由的 JSON 配置对象。"
        },
        {
            id: "grpc-w9-2-q3",
            question: "自定义名称解析器相比标准 DNS 的主要优势是什么？",
            options: [
                "解析速度更快",
                "支持更长的域名",
                "支持基于 watch 的更新，能智能响应后端故障、扩缩容和动态基础设施变化",
                "更低的内存占用"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：自定义解析器提供响应式能力，support watch-based updates，能智能响应后端故障、扩缩容事件和动态基础设施变化。"
        },
        {
            id: "grpc-w9-2-q4",
            question: "Service Config 可以通过哪些方式分发？",
            options: [
                "只能硬编码在客户端代码中",
                "只能通过环境变量配置",
                "通过名称解析器分发或客户端编程指定",
                "只能通过配置中心分发"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：Service Config 可以通过名称解析器分发（如 DNS TXT 记录）或客户端代码指定，Service owners can distribute configs via name resolution or clients can specify them programmatically。"
        },
        {
            id: "grpc-w9-2-q5",
            question: "gRPC 官方文档对 wait-for-ready 语义的描述是什么？",
            options: [
                "等待服务端完成初始化",
                "等待 TLS 握手完成",
                "'Delays RPCs rather than failing immediately when backends are unavailable'——当后端不可用时延迟 RPC 而非立即失败",
                "等待消息序列化完成"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：wait-for-ready 配置会'Delays RPCs rather than failing immediately when backends are unavailable'，适用于瞬态不可用场景。"
        },
        {
            id: "grpc-w9-2-q6",
            question: "Service Config 中的重试策略可以配置哪些参数？",
            options: [
                "只能配置重试次数",
                "最大尝试次数、退避设置、可重试状态码，可针对特定服务或单个方法配置",
                "只能全局配置",
                "只能配置超时时间"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Retry configurations include maximum attempts, backoff settings, and retryable status codes. These settings can target specific services or individual methods。"
        },
        {
            id: "grpc-w9-2-q7",
            question: "如何在 Service Config 中配置健康检查？",
            options: [
                "健康检查不需要配置",
                "'A client can be configured to perform health checking by providing a health checking name'——提供健康检查名称",
                "通过环境变量配置",
                "在服务端配置"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：'A client can be configured to perform health checking by providing a health checking name'——客户端通过提供健康检查名称来配置健康检查。"
        },
        {
            id: "grpc-w9-2-q8",
            question: "DNS 解析器的默认 URI 格式是什么？",
            options: [
                "http://grpc.io:50051",
                "grpc://grpc.io:50051",
                "dns:///grpc.io:50051 或直接 grpc.io:50051",
                "tcp://grpc.io:50051"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：DNS 解析器的 URI 格式为'grpc.io:50051'或'dns:///grpc.io:50051'，DNS 是默认的解析机制。"
        },
        {
            id: "grpc-w9-2-q9",
            question: "名称解析器和负载均衡器的关系是什么？",
            options: [
                "它们是同一个组件",
                "名称解析器输出服务器地址列表，负载均衡器接收这些地址并维护连接",
                "负载均衡器调用名称解析器",
                "它们相互独立，没有交互"
            ],
            answer: 1,
            rationale: "gRPC 架构中，名称解析器负责发现服务器地址并输出地址列表，负载均衡器接收这些地址并维护子通道连接，两者协调工作。"
        },
        {
            id: "grpc-w9-2-q10",
            question: "gRPC 官方文档描述的 Service Config 默认负载均衡策略是什么？",
            options: [
                "round_robin",
                "least_connection",
                "pick_first",
                "random"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：The default policy is'pick_first'，但可以通过 Service Config 指定其他策略如'round_robin'。"
        },
        {
            id: "grpc-w9-2-q11",
            question: "xDS 解析器的 URI 格式是什么？",
            options: [
                "http://wallet.grpcwallet.io",
                "grpc://wallet.grpcwallet.io",
                "xds:///wallet.grpcwallet.io",
                "mesh://wallet.grpcwallet.io"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：xDS 解析器使用'xds:///'scheme，例如'xds:///wallet.grpcwallet.io'，用于与服务网格控制平面集成。"
        },
        {
            id: "grpc-w9-2-q12",
            question: "Service Config 中 Hedging 策略与 Retry 的区别是什么？",
            options: [
                "两者完全相同",
                "Hedging 只用于流式调用",
                "Hedging 是 Retry 的替代方案，指定最大尝试次数和非致命状态码",
                "Retry 只用于 unary 调用"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：Hedging policies 是 retry 的替代方案，with max attempts and non-fatal status codes，两者不能同时使用。"
        }
    ],
    "grpc-w9-3": [
        {
            id: "grpc-w9-3-q1",
            question: "gRPC 官方文档对自定义后端指标的定义是什么？",
            options: [
                "用于日志记录的指标",
                "'A mechanism that allows users to inject custom metrics at the gRPC server and consume at gRPC clients to make custom load balancing algorithms'",
                "用于计费的指标",
                "用于安全审计的指标"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：自定义后端指标是'A mechanism in the gRPC library that allows users to inject custom metrics at the gRPC server and consume at gRPC clients to make your custom load balancing algorithms'。"
        },
        {
            id: "grpc-w9-3-q2",
            question: "Per-Query 指标的传递方式是什么？",
            options: [
                "通过独立的 gRPC 流传递",
                "通过 HTTP Header 传递",
                "服务端在 RPC 完成时将指标数据附加到 trailing metadata 中",
                "通过 WebSocket 推送"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：Per-Query 指标中，Servers attach metrics data in trailing metadata when RPCs complete，适用于短时间的 unary 调用。"
        },
        {
            id: "grpc-w9-3-q3",
            question: "Out-of-Band 指标的主要特点是什么？",
            options: [
                "只能在 RPC 完成时获取",
                "服务端独立于 RPC 完成周期性推送指标，适用于所有场景但无法捕获单次查询成本",
                "只用于 unary 调用",
                "延迟比 Per-Query 更高"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Out-of-Band 指标中，Servers periodically push metrics data to clients independently of RPC completion，适用于所有场景，但 doesn't capture query-specific costs。"
        },
        {
            id: "grpc-w9-3-q4",
            question: "gRPC 实现了什么标准来传递后端指标？",
            options: [
                "Prometheus 标准",
                "OpenMetrics 标准",
                "Open Request Cost Aggregation (ORCA) 标准，由 CNCF xDS 项目定义",
                "StatsD 标准"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：gRPC implements the Open Request Cost Aggregation (ORCA) standard，这是 an open specification for conveying backend metrics information defined by the CNCF xDS project。"
        },
        {
            id: "grpc-w9-3-q5",
            question: "实现自定义负载均衡器需要哪些核心步骤？",
            options: [
                "只需要实现 Picker",
                "注册实现、配置解析、子通道管理、Picker 实现、通过 Service Config 激活",
                "只需要修改服务端代码",
                "只需要配置 DNS"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：实现自定义负载均衡器需要 Registration、Configuration parsing、Subchannel management、Picker implementation、Service config activation。"
        },
        {
            id: "grpc-w9-3-q6",
            question: "为什么 Picker 的性能很关键？",
            options: [
                "因为它只在启动时运行",
                "因为它需要建立 TCP 连接",
                "'This needs to be a fast operation as it is on the RPC call path'——它在每个 RPC 调用路径上执行",
                "因为它需要序列化消息"
            ],
            answer: 2,
            rationale: "gRPC 官方文档强调 Picker'needs to be a fast operation as it is on the RPC call path'——在每个 RPC 调用路径上执行，必须快速。"
        },
        {
            id: "grpc-w9-3-q7",
            question: "Per-Query 指标最适合什么场景？",
            options: [
                "长时间运行的流式 RPC",
                "没有活跃 RPC 的空闲期",
                "短时间的 unary 调用",
                "需要实时指标的场景"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：Per-Query metrics 通过 trailing metadata 传递，making this approach ideal for short unary calls。"
        },
        {
            id: "grpc-w9-3-q8",
            question: "自定义后端指标可以包含哪些信息？",
            options: [
                "只能包含 CPU 使用率",
                "只能包含内存使用率",
                "应用特定信息如队列深度、CPU 使用率等，用于智能路由决策",
                "只能包含错误率"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：This feature enables advanced load balancing by incorporating application-specific knowledge, such as queue depth or CPU utilization, to route traffic more intelligently。"
        },
        {
            id: "grpc-w9-3-q9",
            question: "自定义负载均衡器如何与 Service Config 集成？",
            options: [
                "不需要集成",
                "通过环境变量引用",
                "在负载均衡器注册表中注册实现，以便通过 Service Config 引用",
                "通过命令行参数指定"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：Register your implementation in the load balancer registry so that it can be referred to from the service config。"
        },
        {
            id: "grpc-w9-3-q10",
            question: "哪些语言支持自定义负载均衡和后端指标功能？",
            options: [
                "所有 gRPC 支持的语言",
                "只有 C++",
                "Java 和 Go 有完整示例，C++ 文档即将推出",
                "只有 Python"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：Java (with example available)、Go (with example available)、C++ (documentation upcoming)——Java 和 Go 有完整示例。"
        },
        {
            id: "grpc-w9-3-q11",
            question: "在 xDS/服务网格环境中，自定义负载均衡配置如何获取？",
            options: [
                "仍然通过 Service Config 直接配置",
                "通过 DNS TXT 记录",
                "通过控制平面协调，而非直接的 Service Config",
                "通过配置文件"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：In service mesh environments using xDS protocol, custom load balancer configuration is coordinated through the control plane rather than direct service config。"
        },
        {
            id: "grpc-w9-3-q12",
            question: "Out-of-Band 指标相比 Per-Query 指标的优势是什么？",
            options: [
                "延迟更低",
                "实现更简单",
                "适用于所有场景（unary、streaming、无活跃 RPC），但无法捕获单次查询成本",
                "精度更高"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：Out-of-Band metrics works for all scenarios—unary calls, streaming RPCs, or no active RPCs—though it doesn't capture query-specific costs。"
        }
    ]
}
