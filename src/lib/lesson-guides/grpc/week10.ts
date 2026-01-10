import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "grpc-w10-1": {
        lessonId: "grpc-w10-1",
        background: [
            "【Stub 和 Channel 复用】gRPC 官方文档：'Always re-use stubs and channels when possible'——始终尽可能复用 stub 和 channel，这是减少重复建立连接开销的基础实践。",
            "【Keepalive 机制】gRPC 官方文档：gRPC 使用 HTTP/2 PING 帧在空闲期间维护连接，与 TCP keepalive 不同，gRPC keepalive 依赖于'timeout (equivalent to interval x retry)'而非独立的间隔和重试设置。",
            "【Channel 概念】gRPC 官方文档：'A channel establishes connectivity to a gRPC server at a specific host and port'——Channel 建立到特定主机和端口的 gRPC 服务器连接，是创建客户端 stub 的基础。",
            "【高负载下的多 Channel】gRPC 官方文档：当 HTTP/2 连接限制并发流数量时，应用应考虑为高负载区域创建独立 Channel 或实现 Channel 池来分散流量。",
            "【连接状态】gRPC 官方文档：Channel 维护状态（如'connected'或'idle'），虽然状态管理是语言相关的，但理解连接状态对于调试连接问题很重要。"
        ],
        keyDifficulties: [
            "【Keepalive 参数配置】KEEPALIVE_TIME 定义 PING 帧之间的间隔（客户端默认禁用，服务端默认 2 小时）；KEEPALIVE_TIMEOUT 定义 PING 确认超时（默认 20 秒）；配置低于 1 分钟的值会被劝阻以防止 DDoS。",
            "【服务端 Keepalive 限制】PERMIT_KEEPALIVE_TIME 设置服务端允许的最小 PING 间隔（默认 5 分钟），客户端配置必须与此协调；PERMIT_KEEPALIVE_WITHOUT_CALLS 控制是否允许无活跃流时的 PING。",
            "【连接生命周期管理】MAX_CONNECTION_IDLE 在空闲后关闭连接；MAX_CONNECTION_AGE 限制 Channel 最大生命周期；MAX_CONNECTION_AGE_GRACE 提供到达最大年龄后的优雅期，这些参数影响连接池行为。",
            "【流复用与连接限制】gRPC 通过 HTTP/2 的流复用在单个连接上支持多个并发 RPC，但每个连接有流数量限制（通常 100-1000），超出限制需要额外连接。"
        ],
        handsOnPath: [
            "实现 Channel 复用模式：创建全局或应用级别的 Channel 实例，通过它创建多个 stub，验证复用减少了连接建立次数。",
            "配置客户端 Keepalive 参数：设置 KEEPALIVE_TIME 为 30 秒，KEEPALIVE_TIMEOUT 为 10 秒，使用 Wireshark 或日志观察 PING 帧的发送。",
            "配置服务端 Keepalive 限制：调整 PERMIT_KEEPALIVE_TIME 和 MAX_CONNECTION_IDLE，测试客户端配置与服务端限制不匹配时的行为。",
            "实现 Channel 池：当单个 Channel 无法满足高并发需求时，创建 Channel 池来分散负载，实现简单的轮询或最少连接选择策略。",
            "监控连接状态：使用 Channelz 或语言特定的 API 观察 Channel 状态变化，理解 IDLE、CONNECTING、READY、TRANSIENT_FAILURE 等状态的含义。",
            "测试连接中断恢复：模拟网络中断，观察 gRPC 客户端如何检测断开并重新建立连接，记录恢复时间和重试行为。"
        ],
        selfCheck: [
            "为什么官方文档强调始终复用 stub 和 channel？频繁创建新连接有什么开销？",
            "gRPC Keepalive 与 TCP Keepalive 有什么区别？各自适用于什么场景？",
            "客户端和服务端的 Keepalive 参数如何协调？配置不匹配会导致什么问题？",
            "什么情况下需要使用多个 Channel？Channel 池如何帮助提高并发能力？",
            "MAX_CONNECTION_AGE 参数的作用是什么？在什么场景下应该配置它？",
            "gRPC 的 HTTP/2 流复用如何工作？单个连接能支持多少并发 RPC？"
        ],
        extensions: [
            "研究 gRPC 的连接预热（Connection Warming）：了解如何在流量到来前预先建立连接，减少首次请求的延迟。",
            "探索 gRPC 的 Subchannel 概念：理解在负载均衡场景下如何管理到多个后端的连接。",
            "学习 HTTP/2 的流量控制和流复用机制：了解 gRPC 底层传输协议的工作原理。",
            "研究云环境中的连接管理：了解 GCP/AWS 负载均衡器与 gRPC 长连接的交互。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/guides/performance/",
            "https://grpc.io/docs/guides/keepalive/",
            "https://grpc.io/docs/what-is-grpc/core-concepts/"
        ]
    },
    "grpc-w10-2": {
        lessonId: "grpc-w10-2",
        background: [
            "【压缩目的】gRPC 官方文档：'Compression is used to reduce the amount of bandwidth used when communicating between peers'——压缩用于减少对等端通信时使用的带宽。",
            "【压缩级别】gRPC 官方文档：压缩可以在调用级别、消息级别和 Channel 级别（部分语言）进行控制，不同语言支持不同的压缩算法，包括自定义压缩器。",
            "【禁用压缩防攻击】gRPC 官方文档：可以按消息禁用压缩，这有助于'prevent BEAST and CRIME attacks'——防止 BEAST 和 CRIME 攻击，适用于 unary 和 streaming 场景。",
            "【流控制定义】gRPC 官方文档：'Flow control is a mechanism to ensure that a receiver of messages does not get overwhelmed by a fast sender'——流控制确保消息接收方不会被快速发送方淹没。",
            "【流控制作用域】gRPC 官方文档：流控制防止数据丢失、提高性能、增加可靠性，仅适用于流式 RPC（streaming RPCs only）。"
        ],
        keyDifficulties: [
            "【非对称压缩】gRPC 官方文档：'A gRPC peer may choose to respond using a different compression method to that of the request, or not compressed at all'——服务端可以选择与请求不同的压缩方法响应，甚至不压缩。",
            "【压缩协商】服务端通过 grpc-accept-encoding header 告知支持的压缩算法；如果客户端使用不支持的压缩方法，服务端返回 UNIMPLEMENTED 状态码。",
            "【死锁风险】gRPC 官方文档警告：'There is the potential for a deadlock if both the client and server are doing synchronous reads or using manual flow control and both try to do a lot of writing without doing any reads'。",
            "【框架缓冲行为】gRPC 官方文档：写入流不意味着数据已经离开网络——数据被传递给框架进行缓冲和传输。当接收方过载时，框架可能在写入调用返回前暂停。"
        ],
        handsOnPath: [
            "配置 gRPC 压缩：在客户端启用 gzip 压缩，通过网络抓包或日志验证请求/响应是否被压缩。",
            "测试压缩效果：对比压缩和未压缩模式下相同消息的传输大小，测量不同消息类型（文本、二进制、结构化数据）的压缩率。",
            "实现按消息禁用压缩：在包含敏感数据的消息上禁用压缩，验证压缩策略的灵活性。",
            "观察流控制行为：创建一个快速生产者和慢速消费者的场景，观察 gRPC 如何自动管理背压（backpressure）。",
            "测试手动流控制（Java）：如果使用 Java，探索手动流控制 API，理解显式控制消息接收的场景。",
            "分析压缩与 CPU 的权衡：测量压缩对 CPU 使用率的影响，找到带宽节省和计算开销的平衡点。"
        ],
        selfCheck: [
            "gRPC 支持哪些压缩算法？如何在不同级别配置压缩？",
            "为什么有时需要禁用压缩？BEAST 和 CRIME 攻击与压缩有什么关系？",
            "服务端和客户端的压缩算法不匹配时会发生什么？如何进行压缩协商？",
            "gRPC 流控制的工作原理是什么？它如何防止接收方被淹没？",
            "什么情况下可能发生流控制死锁？如何避免？",
            "压缩与 CPU 使用率之间如何权衡？什么场景下应该禁用压缩？"
        ],
        extensions: [
            "研究 Protobuf 编码效率：了解 Protobuf 的 varint 编码和字段编号设计如何减少消息大小。",
            "探索 gRPC 的 Deadline 和 Timeout：了解超时机制如何与流控制配合工作。",
            "学习 HTTP/2 的流量控制机制：了解 WINDOW_UPDATE 帧和连接/流级别的流量控制。",
            "研究大消息传输策略：了解如何处理超过默认 4MB 限制的大消息，以及流式传输的替代方案。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/guides/compression/",
            "https://grpc.io/docs/guides/flow-control/",
            "https://grpc.io/docs/guides/performance/"
        ]
    },
    "grpc-w10-3": {
        lessonId: "grpc-w10-3",
        background: [
            "【设计目标】gRPC 官方文档：'gRPC is designed for both high-performance and high-productivity design of distributed applications'——gRPC 为分布式应用的高性能和高生产力设计。",
            "【持续性能测试】gRPC 官方文档：持续性能测试每隔几小时针对 master 分支运行，结果显示在仪表板上，确保性能回归能被及时发现。",
            "【基准测试服务】gRPC 使用两个关键服务进行性能测试：WorkerService 指导 worker 作为客户端或服务端运行；BenchmarkService 包含 UnaryCall（简单 unary RPC）和 StreamingCall（流式 RPC）两个方法。",
            "【测试覆盖语言】gRPC 官方文档：持续性能测试覆盖 C++、Java、Go、C#、Node.js、Python 和 Ruby 的客户端和服务端实现。",
            "【测试基础设施】gRPC 官方文档：'All performance benchmarks are run in our dedicated GKE cluster, where each benchmark worker gets scheduled to different GKE node'——在专用 GKE 集群中运行，每个 worker 调度到不同节点。"
        ],
        keyDifficulties: [
            "【延迟测试场景】Contentionless latency 测试：单客户端发送单消息，测量中位数和尾部响应时间，用于评估最佳情况下的延迟。",
            "【QPS 测试场景】QPS 测试使用 2 个客户端、64 个 Channel、100 个未完成消息，测量每秒消息数，用于评估吞吐量。",
            "【语言性能差异】gRPC 官方文档建议：C++ 避免同步 API，偏好回调 API；Java 使用非阻塞 stub 配合自定义线程执行器；Python 偏好 asyncio 实现，避免 future API 模式。",
            "【Streaming 权衡】gRPC 官方文档：Streaming 消除了重复 RPC 发起的开销，但流启动后无法重新负载均衡，且调试更困难。Python 中 streaming 由于创建额外线程实际上比 unary 调用更慢。"
        ],
        handsOnPath: [
            "使用 ghz 或类似工具进行 gRPC 基准测试：配置不同的并发数、请求数，测量延迟分布和吞吐量。",
            "对比 unary 和 streaming 的性能：实现相同功能的 unary 和 streaming 版本，测量在不同负载下的性能差异。",
            "分析延迟分布：收集 P50、P90、P99 延迟数据，识别尾部延迟的来源（GC、调度、网络抖动）。",
            "测试不同压缩算法的影响：对比 gzip、snappy、无压缩在不同消息大小下的性能表现。",
            "使用 pprof 进行 CPU 和内存分析（Go/Java）：识别热点函数和内存分配模式，找出优化机会。",
            "配置和分析 Channelz 指标：查看 RPC 统计、延迟分布、错误率等指标，建立性能基线。"
        ],
        selfCheck: [
            "gRPC 官方基准测试覆盖哪些场景？延迟测试和 QPS 测试各有什么特点？",
            "不同语言的 gRPC 性能最佳实践有什么差异？为什么 Python streaming 比 unary 慢？",
            "使用 streaming RPC 的性能优势和劣势分别是什么？什么场景下应该使用 streaming？",
            "如何解读 gRPC 的延迟分布数据？P99 延迟比 P50 高很多通常意味着什么？",
            "哪些工具可以用于 gRPC 性能分析？各自的优缺点是什么？",
            "如何建立 gRPC 服务的性能基线？应该监控哪些关键指标？"
        ],
        extensions: [
            "研究 gRPC 的异步 API：了解不同语言的异步模式（CompletableFuture、goroutine、asyncio）如何影响性能。",
            "探索 gRPC 的 Interceptor 性能影响：测量添加拦截器（日志、追踪、认证）对延迟的影响。",
            "学习 JVM 调优对 gRPC-Java 的影响：了解 GC 选择、堆大小、线程池配置对 gRPC 性能的影响。",
            "研究服务网格对 gRPC 性能的影响：测量 Istio/Linkerd sidecar 代理增加的延迟开销。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/guides/benchmarking/",
            "https://grpc.io/docs/guides/performance/",
            "https://grpc.io/docs/guides/debugging/"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "grpc-w10-1": [
        {
            id: "grpc-w10-1-q1",
            question: "gRPC 官方文档对 stub 和 channel 复用的建议是什么？",
            options: [
                "每次 RPC 都创建新的 channel",
                "只在测试环境复用",
                "'Always re-use stubs and channels when possible'——始终尽可能复用",
                "只复用 stub，不复用 channel"
            ],
            answer: 2,
            rationale: "gRPC 官方文档明确建议：'Always re-use stubs and channels when possible'——始终尽可能复用 stub 和 channel，这是减少连接开销的基础实践。"
        },
        {
            id: "grpc-w10-1-q2",
            question: "gRPC Keepalive 使用什么机制维护连接？",
            options: [
                "TCP Keepalive",
                "WebSocket ping",
                "HTTP/2 PING 帧",
                "自定义心跳消息"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：gRPC uses HTTP/2 PING frames to maintain connections during idle periods，与 TCP keepalive 依赖于不同的机制。"
        },
        {
            id: "grpc-w10-1-q3",
            question: "KEEPALIVE_TIME 参数的客户端默认值是什么？",
            options: [
                "30 秒",
                "INT_MAX（禁用）",
                "5 分钟",
                "2 小时"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：KEEPALIVE_TIME 的 Client Default 是 INT_MAX (Disabled)，即默认禁用客户端 keepalive ping。"
        },
        {
            id: "grpc-w10-1-q4",
            question: "gRPC 官方文档对 Channel 的定义是什么？",
            options: [
                "消息的序列化格式",
                "'A channel establishes connectivity to a gRPC server at a specific host and port'——建立到特定主机和端口的连接",
                "负载均衡策略",
                "TLS 配置容器"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：'A channel establishes connectivity to a gRPC server at a specific host and port'——Channel 建立到特定主机和端口的 gRPC 服务器连接。"
        },
        {
            id: "grpc-w10-1-q5",
            question: "服务端的 PERMIT_KEEPALIVE_TIME 默认值是多少？",
            options: [
                "20 秒",
                "1 分钟",
                "5 分钟（300000 ms）",
                "2 小时"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：PERMIT_KEEPALIVE_TIME 是'Minimum allowed time between a server receiving successive ping frames'，默认值为 300000 ms（5 分钟）。"
        },
        {
            id: "grpc-w10-1-q6",
            question: "为什么 gRPC 官方劝阻配置低于 1 分钟的 Keepalive 间隔？",
            options: [
                "会导致内存泄漏",
                "会破坏 TLS 连接",
                "为防止 DDoS 攻击",
                "会影响消息序列化"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：Configurations below one minute are discouraged to prevent DDoS——配置低于 1 分钟的值会被劝阻以防止 DDoS 攻击。"
        },
        {
            id: "grpc-w10-1-q7",
            question: "什么情况下应该考虑使用多个 Channel？",
            options: [
                "始终使用多个 Channel",
                "只在测试时使用多个 Channel",
                "当 HTTP/2 连接限制并发流数量时，为高负载区域创建独立 Channel 或 Channel 池",
                "只在使用 TLS 时需要多个 Channel"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：When HTTP/2 connection limits constrain concurrent streams, applications should consider creating separate channels for high-load areas or implementing a channel pool。"
        },
        {
            id: "grpc-w10-1-q8",
            question: "MAX_CONNECTION_AGE 参数的作用是什么？",
            options: [
                "设置消息的最大年龄",
                "设置 Channel 的最大生命周期",
                "设置 TLS 证书的有效期",
                "设置重试的最大次数"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：MAX_CONNECTION_AGE 是 Maximum channel lifetime——限制 Channel 的最大生命周期。"
        },
        {
            id: "grpc-w10-1-q9",
            question: "KEEPALIVE_TIMEOUT 的默认值是多少？",
            options: [
                "5 秒",
                "10 秒",
                "20 秒（20000 ms）",
                "60 秒"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：KEEPALIVE_TIMEOUT 是'The timeout in milliseconds for a PING frame to be acknowledged'，客户端和服务端默认都是 20000 ms。"
        },
        {
            id: "grpc-w10-1-q10",
            question: "服务端的 KEEPALIVE_TIME 默认值是多少？",
            options: [
                "禁用",
                "5 分钟",
                "2 小时（7200000 ms）",
                "24 小时"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：服务端 KEEPALIVE_TIME 的 Server Default 是 7200000 ms，即 2 小时。"
        },
        {
            id: "grpc-w10-1-q11",
            question: "Channel 可以维护哪些状态？",
            options: [
                "只有 connected 状态",
                "connected、idle 等状态",
                "只有 active 状态",
                "Channel 不维护状态"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Channels maintain state (such as'connected'or'idle')，虽然状态管理是语言相关的。"
        },
        {
            id: "grpc-w10-1-q12",
            question: "MAX_CONNECTION_AGE_GRACE 参数的作用是什么？",
            options: [
                "设置连接建立的超时",
                "设置 TLS 握手的超时",
                "提供到达最大年龄后的优雅期",
                "设置消息重试的间隔"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：MAX_CONNECTION_AGE_GRACE 是 Grace period after reaching max age——提供到达最大年龄后的优雅期。"
        }
    ],
    "grpc-w10-2": [
        {
            id: "grpc-w10-2-q1",
            question: "gRPC 官方文档对压缩目的的描述是什么？",
            options: [
                "加快序列化速度",
                "'Compression is used to reduce the amount of bandwidth used when communicating between peers'——减少带宽使用",
                "提高安全性",
                "简化消息格式"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：'Compression is used to reduce the amount of bandwidth used when communicating between peers'——压缩用于减少对等端通信时使用的带宽。"
        },
        {
            id: "grpc-w10-2-q2",
            question: "gRPC 官方文档对流控制的定义是什么？",
            options: [
                "控制消息的发送顺序",
                "'A mechanism to ensure that a receiver of messages does not get overwhelmed by a fast sender'——确保接收方不被快速发送方淹没",
                "控制压缩算法的选择",
                "控制连接的建立顺序"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：'Flow control is a mechanism to ensure that a receiver of messages does not get overwhelmed by a fast sender'——流控制确保接收方不被淹没。"
        },
        {
            id: "grpc-w10-2-q3",
            question: "为什么有时需要按消息禁用压缩？",
            options: [
                "为了提高性能",
                "为了减少内存使用",
                "为了'prevent BEAST and CRIME attacks'——防止安全攻击",
                "为了简化调试"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：可以按消息禁用压缩，这有助于'prevent BEAST and CRIME attacks'——防止 BEAST 和 CRIME 攻击。"
        },
        {
            id: "grpc-w10-2-q4",
            question: "gRPC 服务端可以使用与请求不同的压缩方法响应吗？",
            options: [
                "不可以，必须匹配",
                "'A gRPC peer may choose to respond using a different compression method to that of the request, or not compressed at all'——可以不同或不压缩",
                "只有使用 gzip 时可以",
                "只在流式调用中可以"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：'A gRPC peer may choose to respond using a different compression method to that of the request, or not compressed at all'——服务端可以选择不同的压缩方法或不压缩。"
        },
        {
            id: "grpc-w10-2-q5",
            question: "当客户端使用服务端不支持的压缩方法时会发生什么？",
            options: [
                "自动降级到无压缩",
                "连接断开",
                "服务端返回 UNIMPLEMENTED 状态码",
                "消息被丢弃"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：If a client uses an unsupported compression method, the server returns an'UNIMPLEMENTED'error status。"
        },
        {
            id: "grpc-w10-2-q6",
            question: "gRPC 流控制适用于什么类型的 RPC？",
            options: [
                "所有类型的 RPC",
                "只适用于 unary RPC",
                "只适用于 streaming RPCs（流式 RPC）",
                "只适用于双向流"
            ],
            answer: 2,
            rationale: "gRPC 官方文档明确指出流控制'for streaming RPCs only'——仅适用于流式 RPC。"
        },
        {
            id: "grpc-w10-2-q7",
            question: "gRPC 官方文档警告的流控制死锁风险是什么？",
            options: [
                "同时使用压缩和加密时",
                "客户端和服务端都做同步读取或手动流控制，且都在大量写入而不读取时可能死锁",
                "使用多个 Channel 时",
                "跨时区通信时"
            ],
            answer: 1,
            rationale: "gRPC 官方文档警告：'There is the potential for a deadlock if both the client and server are doing synchronous reads or using manual flow control and both try to do a lot of writing without doing any reads'。"
        },
        {
            id: "grpc-w10-2-q8",
            question: "gRPC 压缩可以在哪些级别配置？",
            options: [
                "只能在 Channel 级别",
                "只能在消息级别",
                "调用级别、消息级别和 Channel 级别（部分语言）",
                "只能全局配置"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：压缩可以在 call level、message level 和 channel level (for some languages) 进行控制。"
        },
        {
            id: "grpc-w10-2-q9",
            question: "服务端如何告知客户端支持的压缩算法？",
            options: [
                "通过 TLS 握手",
                "通过 grpc-accept-encoding header",
                "通过 DNS 记录",
                "通过健康检查响应"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Servers send a'grpc-accept-encoding'header indicating supported algorithms——服务端通过此 header 告知支持的算法。"
        },
        {
            id: "grpc-w10-2-q10",
            question: "gRPC 官方文档对写入流的行为描述是什么？",
            options: [
                "写入立即发送到网络",
                "写入流不意味着数据已经离开网络——数据被传递给框架进行缓冲和传输",
                "写入会阻塞直到对端确认",
                "写入会立即返回错误如果网络不可用"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Writing to a stream doesn't mean data has left the network—it's passed to the framework for buffering and transmission。"
        },
        {
            id: "grpc-w10-2-q11",
            question: "gRPC 流控制的主要好处是什么？",
            options: [
                "加快消息序列化",
                "防止数据丢失、提高性能、增加可靠性",
                "减少 TLS 握手时间",
                "简化错误处理"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：流控制 prevents data loss, improves performance, and increases reliability——防止数据丢失、提高性能、增加可靠性。"
        },
        {
            id: "grpc-w10-2-q12",
            question: "哪种语言有手动流控制的文档示例？",
            options: [
                "C++",
                "Python",
                "Java",
                "Go"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：Currently, Java is the documented language with manual flow control examples available——目前只有 Java 有手动流控制的文档示例。"
        }
    ],
    "grpc-w10-3": [
        {
            id: "grpc-w10-3-q1",
            question: "gRPC 官方文档对 gRPC 设计目标的描述是什么？",
            options: [
                "只关注高性能",
                "只关注易用性",
                "'gRPC is designed for both high-performance and high-productivity design of distributed applications'",
                "只关注安全性"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：'gRPC is designed for both high-performance and high-productivity design of distributed applications'——为分布式应用的高性能和高生产力设计。"
        },
        {
            id: "grpc-w10-3-q2",
            question: "gRPC 基准测试使用的 BenchmarkService 包含哪些方法？",
            options: [
                "只有 UnaryCall",
                "只有 StreamingCall",
                "UnaryCall 和 StreamingCall",
                "GetStatus 和 SetConfig"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：BenchmarkService contains two methods: UnaryCall (simple unary RPC returning specified response bytes) and StreamingCall (streaming RPC enabling repeated request-response exchanges)。"
        },
        {
            id: "grpc-w10-3-q3",
            question: "gRPC 官方基准测试在什么环境中运行？",
            options: [
                "本地开发机器",
                "AWS EC2 实例",
                "'All performance benchmarks are run in our dedicated GKE cluster'——专用 GKE 集群",
                "Azure VMs"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：'All performance benchmarks are run in our dedicated GKE cluster, where each benchmark worker gets scheduled to different GKE node'。"
        },
        {
            id: "grpc-w10-3-q4",
            question: "gRPC QPS 测试使用什么配置？",
            options: [
                "1 个客户端、1 个 Channel",
                "2 个客户端、64 个 Channel、100 个未完成消息",
                "10 个客户端、10 个 Channel",
                "4 个客户端、32 个 Channel"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：QPS tests use 2 clients, 64 channels, 100 outstanding messages to measure messages per second。"
        },
        {
            id: "grpc-w10-3-q5",
            question: "gRPC 官方对 C++ 性能的建议是什么？",
            options: [
                "使用同步 API",
                "使用 completion-queue async",
                "避免同步 API，偏好回调 API",
                "使用 Python 绑定"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：C++: Avoid synchronous APIs for performance-sensitive servers; favor callback APIs over completion-queue async approaches for most workloads。"
        },
        {
            id: "grpc-w10-3-q6",
            question: "gRPC 官方对 Python streaming 性能的说明是什么？",
            options: [
                "streaming 比 unary 快得多",
                "streaming 和 unary 性能相同",
                "streaming 由于创建额外线程实际上比 unary 调用更慢",
                "只在使用 asyncio 时更快"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：Python Exception: Streaming creates additional receive/send threads in Python, making streaming substantially slower than unary calls—unlike other supported languages。"
        },
        {
            id: "grpc-w10-3-q7",
            question: "使用 streaming RPC 的主要权衡是什么？",
            options: [
                "更高的延迟",
                "消除重复 RPC 发起开销，但流启动后无法重新负载均衡且调试更困难",
                "需要更多内存",
                "不支持压缩"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Streaming RPCs eliminate repeated RPC initiation overhead，但 streams cannot be rebalanced after starting and present debugging challenges。"
        },
        {
            id: "grpc-w10-3-q8",
            question: "gRPC 持续性能测试覆盖哪些语言？",
            options: [
                "只有 C++ 和 Java",
                "C++、Java、Go、C#、Node.js、Python 和 Ruby",
                "所有编程语言",
                "只有 Go 和 Rust"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Continuous performance testing covers both client and server implementations for C++, Java, Go, C#, Node.js, Python, and Ruby。"
        },
        {
            id: "grpc-w10-3-q9",
            question: "Contentionless latency 测试的配置是什么？",
            options: [
                "多客户端高并发",
                "单客户端发送单消息，测量中位数和尾部响应时间",
                "streaming 调用",
                "无压缩模式"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Contentionless latency tests median and tail response times with single client sending one message。"
        },
        {
            id: "grpc-w10-3-q10",
            question: "gRPC 官方对 Java 性能的建议是什么？",
            options: [
                "使用阻塞 stub",
                "使用非阻塞 stub 配合自定义线程执行器",
                "使用默认线程池",
                "避免使用线程"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Java: Use non-blocking stubs with custom thread executors matched to specific workload characteristics。"
        },
        {
            id: "grpc-w10-3-q11",
            question: "gRPC 基准测试使用多少核心的机器？",
            options: [
                "只使用 2 核机器",
                "只使用 4 核机器",
                "大多数使用 8 核系统，C++ 和 Java 额外支持 32 核 QPS 测试",
                "只使用 16 核机器"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：Most instances use 8-core systems; C++ and Java additionally support 32-core QPS testing。"
        },
        {
            id: "grpc-w10-3-q12",
            question: "gRPC 官方对 Python 性能的建议是什么？",
            options: [
                "使用 future API 模式",
                "使用同步 API",
                "偏好 asyncio 实现，避免 future API 模式",
                "使用多进程"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：Python: Prefer asyncio implementations and avoid future API patterns due to thread creation overhead。"
        }
    ]
}
