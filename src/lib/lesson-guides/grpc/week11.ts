import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "grpc-w11-1": {
        lessonId: "grpc-w11-1",
        background: [
            "【健康检查服务定义】gRPC 官方文档：gRPC 实现了标准化的健康检查服务 API（health/v1），服务器可以暴露此服务，支持两种操作模式：Unary Calls 和 Streaming Updates。",
            "【Unary 健康检查】gRPC 官方文档：'Useful for centralized monitoring or load balancing solutions, but does not scale to support a fleet of gRPC client constantly making health checks'——适用于集中式监控或负载均衡，但不适合大量客户端持续检查。",
            "【Watch RPC】gRPC 官方文档：客户端使用 Watch RPC 端点接收来自服务器的持续健康状态通知，当连接建立时客户端会调用 Watch RPC。",
            "【健康状态类型】gRPC 官方文档定义了三种主要状态：SERVING（服务可用并接受请求）、NOT_SERVING（服务当前无法处理请求）、空字符串（代表整个服务器的健康状态而非单个服务）。",
            "【子通道状态】gRPC 官方文档：底层子通道根据服务器报告的健康状况在 IDLE、CONNECTING、READY、TRANSIENT_FAILURE 之间转换，使负载均衡器能够将流量路由离不健康的实例。"
        ],
        keyDifficulties: [
            "【客户端健康检查流程】当客户端通过 Service Config 启用健康检查时，会在连接建立后额外调用 Watch RPC，在收到健康状态前不会发送请求。如果之前健康的服务变得不健康，客户端会自动暂停通信。",
            "【服务级别 vs 服务器级别】健康检查可以针对特定服务名称或整个服务器。空字符串服务名代表服务器整体健康，而具体服务名（如 'grpc.health.v1.Health'）代表该服务的健康状态。",
            "【实现要求】服务器必须通过健康检查库主动维护健康状态，并在服务状态变化和关闭事件时通知库。被动地忽略健康状态更新会导致负载均衡器无法正确路由流量。",
            "【与负载均衡集成】健康检查状态直接影响负载均衡决策：READY 状态的子通道接收流量，TRANSIENT_FAILURE 状态的子通道被排除。这使得服务端可以通过健康状态实现优雅的流量切换。"
        ],
        handsOnPath: [
            "在 gRPC 服务中实现健康检查服务：注册 grpc.health.v1.Health 服务，根据应用状态更新健康状态。",
            "使用 grpcurl 测试健康检查：运行 grpcurl localhost:50051 grpc.health.v1.Health/Check 验证服务健康状态。",
            "配置客户端健康检查：在 Service Config 中启用健康检查，观察客户端如何根据健康状态调整连接行为。",
            "模拟服务降级：将服务状态设置为 NOT_SERVING，观察客户端和负载均衡器的响应行为。",
            "实现多服务健康检查：为服务器上的多个服务分别维护健康状态，测试独立的服务级别健康检查。",
            "使用 grpc-health-probe 进行 Kubernetes 就绪探测：配置 livenessProbe 和 readinessProbe 使用 gRPC 健康检查。"
        ],
        selfCheck: [
            "gRPC 健康检查服务支持哪两种操作模式？各自适用于什么场景？",
            "SERVING、NOT_SERVING 和空字符串健康状态各代表什么含义？",
            "客户端启用健康检查后的行为流程是什么？它如何影响 RPC 发送？",
            "健康检查状态如何与负载均衡器集成？子通道状态如何受影响？",
            "在 Kubernetes 中如何配置 gRPC 健康检查探测？",
            "服务器端实现健康检查需要主动做什么？被动忽略会有什么后果？"
        ],
        extensions: [
            "研究 gRPC 的 Graceful Shutdown：了解如何在关闭前将健康状态设为 NOT_SERVING，允许现有请求完成。",
            "探索 Kubernetes 的 gRPC 原生健康检查：了解 Kubernetes 1.24+ 的内置 gRPC 探测支持。",
            "学习健康检查的级联模式：了解如何根据下游依赖的健康状态更新自身健康状态。",
            "研究 Envoy 的 gRPC 健康检查：了解服务网格中如何自动进行健康检查。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/guides/health-checking/",
            "https://grpc.io/docs/guides/service-config/",
            "https://grpc.io/docs/guides/graceful-shutdown/"
        ]
    },
    "grpc-w11-2": {
        lessonId: "grpc-w11-2",
        background: [
            "【OpenTelemetry 定义】OpenTelemetry 官方文档：'A vendor-neutral open source Observability framework for instrumenting, generating, collecting, and exporting telemetry data such as traces, metrics, and logs'——厂商中立的开源可观测性框架。",
            "【gRPC 插件支持】gRPC 官方文档：gRPC 提供 OpenTelemetry 插件支持，帮助用户排查系统问题、提升性能、建立持续监控和告警能力。gRPC 从 OpenCensus（已停止）过渡到 OpenTelemetry。",
            "【Meter 创建】gRPC 官方文档：插件接受 MeterProvider 并使用 OpenTelemetry API 创建标识 gRPC 库的 Meter（如 'grpc-c++' version 1.57.1）。",
            "【遥测信号类型】OpenTelemetry 收集三种主要类型的可观测性数据：Traces（跟踪请求在系统中的流动）、Metrics（系统行为的定量测量）、Logs（带有上下文信息的事件记录）。",
            "【行业标准】OpenTelemetry 官方文档：该框架获得广泛采用，超过 90 家可观测性供应商支持，并集成到众多库、服务和应用中。"
        ],
        keyDifficulties: [
            "【Per-Call vs Per-Attempt 指标】Client Per-Call 指标测量从应用视角的端到端 RPC 完成时间；Client Per-Attempt 指标测量单次尝试的持续时间，包括子通道选择。两者在重试场景下会有差异。",
            "【关键标签/属性】grpc.method（完整方法名 package.service/method）、grpc.status（服务器状态码 OK、CANCELLED 等）、grpc.target（规范化的目标 URI）是分析 gRPC 指标的关键维度。",
            "【负载均衡指标】Weighted Round Robin 策略指标跟踪端点权重、降级事件和可用性；Pick First 策略指标跟踪连接尝试、断开连接、成功/失败计数。",
            "【吞吐量和错误率计算】gRPC 官方文档：吞吐量计算使用延迟直方图指标的 count 聚合；错误率计算通过过滤 grpc.status != OK 的延迟指标。"
        ],
        handsOnPath: [
            "在 gRPC 服务中集成 OpenTelemetry：配置 MeterProvider 和 TracerProvider，启用自动指标收集。",
            "配置 Prometheus 导出器：将 gRPC 指标导出到 Prometheus，使用 Grafana 创建 gRPC 性能仪表板。",
            "实现分布式追踪：配置 Jaeger 或 Zipkin 作为追踪后端，观察跨服务的请求追踪。",
            "分析关键指标：收集 grpc.client.attempt.duration 和 grpc.server.call.duration 指标，识别延迟异常。",
            "配置日志关联：将 trace_id 和 span_id 注入到结构化日志中，实现日志-追踪关联。",
            "创建告警规则：基于 gRPC 错误率和延迟 P99 配置 Prometheus 告警规则。"
        ],
        selfCheck: [
            "OpenTelemetry 收集哪三种类型的遥测数据？各自的用途是什么？",
            "gRPC 的 Per-Call 和 Per-Attempt 指标有什么区别？在什么场景下会观察到差异？",
            "分析 gRPC 指标时，哪些标签/属性是最重要的？如何用它们进行故障排查？",
            "如何使用 gRPC 指标计算服务的吞吐量和错误率？",
            "gRPC 从 OpenCensus 过渡到 OpenTelemetry 的原因是什么？",
            "如何实现 gRPC 的日志-追踪-指标关联？"
        ],
        extensions: [
            "研究 OpenTelemetry Collector：了解如何使用 Collector 作为遥测数据的中间层，支持多种导出目标。",
            "探索 gRPC 的 xDS 客户端指标：了解服务网格环境中的配置发现指标。",
            "学习 Continuous Profiling：了解如何结合指标和 profiling 数据定位性能瓶颈。",
            "研究 SLO 定义和 Error Budget：了解如何基于 gRPC 指标定义服务级别目标。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/guides/opentelemetry-metrics/",
            "https://grpc.io/docs/guides/reflection/",
            "https://opentelemetry.io/docs/"
        ]
    },
    "grpc-w11-3": {
        lessonId: "grpc-w11-3",
        background: [
            "【grpcdebug 工具】gRPC 官方文档：grpcdebug 是主要的 gRPC 调试工具，'fetches the internal states of the gRPC library from the application via gRPC protocol and provides a human-friendly UX to browse them'——通过 gRPC 协议获取库的内部状态并提供友好的浏览界面。",
            "【三个管理服务】gRPC 官方文档：grpcdebug 支持三个关键管理服务：Channelz（RPC 活动统计）、Health Checking（服务健康状态监控）、CSDS（配置发现服务，检查活跃的 xDS 配置）。",
            "【Reflection 协议】gRPC 官方文档：'Reflection is a protocol that gRPC servers can use to declare the protobuf-defined APIs they export over a standardized RPC service'——反射协议允许服务器声明其导出的 protobuf 定义的 API。",
            "【grpcurl 工具】grpcurl 是'curl for gRPC servers'——gRPC 服务器的 curl，使用 JSON 格式的请求与 gRPC 端点交互，自动转换为 Protocol Buffer 二进制格式进行传输。",
            "【服务发现】gRPC 官方文档：Reflection 允许客户端自动发现可用的 RPC 服务及其消息定义，无需预先获取和协调 protobuf 定义。'One coming from the REST world might compare the gRPC reflection API to serving an OpenAPI document'。"
        ],
        keyDifficulties: [
            "【Channelz 统计】Channelz 提供 RPC 活动统计，包括给定 Channel 上发送了多少 RPC、有多少失败。这对于诊断连接问题和性能瓶颈非常有价值。",
            "【Reflection 安全考虑】gRPC 官方文档警告：'If your gRPC API is accessible to public users, you may not want to expose the reflection service, as you may consider this a security issue'——对公共用户可访问的 API 可能不应暴露反射服务。",
            "【手动 gRPC 交互的挑战】gRPC 官方文档：没有 Reflection，手动与 gRPC 服务器交互需要知道暴露的 RPC 服务、理解请求和响应消息的 protobuf 定义、手工构造二进制编码的请求并解码响应。",
            "【grpcurl 功能】grpcurl 支持所有 RPC 方法类型（unary、server streaming、client streaming、bidirectional streaming），支持 TLS 和 plaintext 连接，支持服务浏览和类型信息查看。"
        ],
        handsOnPath: [
            "安装并使用 grpcurl：运行 grpcurl localhost:50051 list 列出服务，使用 describe 命令查看服务和消息定义。",
            "在服务中启用 Reflection：添加反射服务注册代码，使 grpcurl 可以自动发现服务定义。",
            "使用 grpcdebug 检查 Channelz：查看 Channel 和 Subchannel 的统计信息，分析 RPC 成功/失败计数和延迟分布。",
            "模拟调试场景：故意引入一个会导致 RPC 失败的问题，使用 grpcdebug 和日志定位根因。",
            "配置 gRPC 详细日志：通过环境变量（如 GRPC_GO_LOG_SEVERITY_LEVEL=info）启用详细日志，理解 gRPC 内部行为。",
            "使用 grpcurl 测试流式 RPC：通过 stdin 输入多个消息测试 client streaming，观察 server streaming 的输出。"
        ],
        selfCheck: [
            "grpcdebug 工具支持哪三个管理服务？各自提供什么信息？",
            "gRPC Reflection 协议的作用是什么？为什么官方文档警告在公共 API 上不要启用？",
            "Channelz 提供哪些统计信息？如何用它诊断连接问题？",
            "grpcurl 如何支持不同类型的 RPC（unary、streaming）？",
            "没有 Reflection 时，手动与 gRPC 服务交互有什么挑战？",
            "如何启用 gRPC 的详细日志？日志中应该关注哪些信息？"
        ],
        extensions: [
            "研究 Postman 的 gRPC 支持：了解如何使用 GUI 工具测试 gRPC 服务。",
            "探索 gRPC 的 Admin Service：了解如何在生产环境安全地暴露管理接口。",
            "学习 gRPC Web 调试：了解如何调试浏览器中的 gRPC-Web 调用。",
            "研究分布式追踪与 gRPC 调试的结合：了解如何通过 trace ID 关联跨服务的调试信息。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/guides/debugging/",
            "https://grpc.io/docs/guides/reflection/",
            "https://github.com/fullstorydev/grpcurl"
        ]
    }
}

export const week11Quizzes: Record<string, QuizQuestion[]> = {
    "grpc-w11-1": [
        {
            id: "grpc-w11-1-q1",
            question: "gRPC 健康检查服务支持哪两种操作模式？",
            options: [
                "Sync 和 Async",
                "Unary Calls 和 Streaming Updates（Watch）",
                "HTTP 和 gRPC",
                "TCP 和 UDP"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：健康检查服务支持两种操作模式：Unary Calls 和 Streaming Updates（通过 Watch RPC）。"
        },
        {
            id: "grpc-w11-1-q2",
            question: "gRPC 官方文档对 Unary 健康检查的描述是什么？",
            options: [
                "适用于所有场景",
                "'Useful for centralized monitoring or load balancing solutions, but does not scale to support a fleet of gRPC client constantly making health checks'",
                "只用于开发环境",
                "比 Watch 更高效"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Unary 模式'Useful for centralized monitoring or load balancing solutions, but does not scale to support a fleet of gRPC client constantly making health checks'。"
        },
        {
            id: "grpc-w11-1-q3",
            question: "健康状态中空字符串服务名代表什么？",
            options: [
                "服务不存在",
                "配置错误",
                "代表整个服务器的健康状态而非单个服务",
                "需要重新初始化"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：'Empty string (\"\") indicator - Represents the health of the entire server rather than individual services'。"
        },
        {
            id: "grpc-w11-1-q4",
            question: "客户端启用健康检查后的行为是什么？",
            options: [
                "立即发送 RPC 请求",
                "等待服务端主动推送",
                "连接建立后调用 Watch RPC，收到健康状态前不发送请求",
                "只检查一次后不再检查"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：客户端'will additionally call the Watch RPC on the health check service when a connection is established'，并在收到健康状态前不发送请求。"
        },
        {
            id: "grpc-w11-1-q5",
            question: "SERVING 健康状态表示什么？",
            options: [
                "服务正在启动",
                "服务正在关闭",
                "服务可用并接受请求",
                "服务需要维护"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：SERVING - The service is operational and accepting requests——服务可用并接受请求。"
        },
        {
            id: "grpc-w11-1-q6",
            question: "健康检查状态如何影响子通道？",
            options: [
                "不影响子通道",
                "子通道根据健康状况在 IDLE、CONNECTING、READY、TRANSIENT_FAILURE 之间转换",
                "只影响新建的子通道",
                "子通道会被立即关闭"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：The underlying subchannel transitions through states (IDLE, CONNECTING, READY, TRANSIENT_FAILURE) based on the server's reported health condition。"
        },
        {
            id: "grpc-w11-1-q7",
            question: "服务器实现健康检查需要做什么？",
            options: [
                "只需注册服务即可",
                "必须通过健康检查库主动维护健康状态，并在状态变化时通知",
                "不需要任何额外操作",
                "只需响应健康检查请求"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Servers must actively maintain health status through the provided health check library and notify it of service state changes and shutdown events。"
        },
        {
            id: "grpc-w11-1-q8",
            question: "当之前健康的服务变得不健康时，客户端会怎样？",
            options: [
                "继续发送请求",
                "立即断开连接",
                "自动暂停通信",
                "重新建立连接"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：If a previously healthy service becomes unhealthy, the client automatically suspends communication。"
        },
        {
            id: "grpc-w11-1-q9",
            question: "NOT_SERVING 状态表示什么？",
            options: [
                "服务已永久停止",
                "服务当前无法处理请求",
                "服务正在初始化",
                "服务配置错误"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：NOT_SERVING - The service cannot currently handle requests——服务当前无法处理请求。"
        },
        {
            id: "grpc-w11-1-q10",
            question: "如何在 Service Config 中启用健康检查？",
            options: [
                "设置 healthCheck: true",
                "配置 healthCheckTimeout",
                "提供健康检查名称（health checking name）",
                "设置 enableHealthCheck: true"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：'A client can be configured to perform health checking by providing a health checking name'——通过提供健康检查名称配置。"
        },
        {
            id: "grpc-w11-1-q11",
            question: "健康检查与负载均衡的关系是什么？",
            options: [
                "相互独立",
                "健康检查状态使负载均衡器能够将流量路由离不健康的实例",
                "负载均衡器不使用健康检查信息",
                "只在启动时检查一次"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：健康检查状态 enabling load balancers to route traffic away from unhealthy instances——使负载均衡器能够将流量路由离不健康的实例。"
        },
        {
            id: "grpc-w11-1-q12",
            question: "Watch RPC 的作用是什么？",
            options: [
                "监控 RPC 调用次数",
                "接收来自服务器的持续健康状态通知",
                "观察网络延迟",
                "记录 RPC 日志"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Streaming Updates - Clients use the Watch RPC endpoint to receive continuous health status notifications from the server。"
        }
    ],
    "grpc-w11-2": [
        {
            id: "grpc-w11-2-q1",
            question: "OpenTelemetry 官方对其定义是什么？",
            options: [
                "一个日志框架",
                "'A vendor-neutral open source Observability framework for instrumenting, generating, collecting, and exporting telemetry data'",
                "一个性能测试工具",
                "一个安全审计系统"
            ],
            answer: 1,
            rationale: "OpenTelemetry 官方文档：'A vendor-neutral open source Observability framework for instrumenting, generating, collecting, and exporting telemetry data such as traces, metrics, and logs'。"
        },
        {
            id: "grpc-w11-2-q2",
            question: "OpenTelemetry 收集哪三种类型的遥测数据？",
            options: [
                "CPU、内存、磁盘",
                "Traces、Metrics、Logs",
                "请求、响应、错误",
                "输入、处理、输出"
            ],
            answer: 1,
            rationale: "OpenTelemetry 官方文档：OTel collects three primary types of observability data: Traces, Metrics, Logs。"
        },
        {
            id: "grpc-w11-2-q3",
            question: "gRPC 从什么框架过渡到 OpenTelemetry？",
            options: [
                "Prometheus",
                "Jaeger",
                "OpenCensus（已停止）",
                "Zipkin"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：gRPC transitioned from OpenCensus (now sunsetted) to OpenTelemetry for observability support。"
        },
        {
            id: "grpc-w11-2-q4",
            question: "Client Per-Call 和 Client Per-Attempt 指标的区别是什么？",
            options: [
                "完全相同",
                "Per-Call 测量端到端完成时间，Per-Attempt 测量单次尝试包括子通道选择",
                "Per-Attempt 只计算失败的调用",
                "Per-Call 只用于 streaming"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Client Per-Call 测量从应用视角的端到端 RPC 完成时间；Client Per-Attempt 测量单次尝试的持续时间，包括子通道选择。"
        },
        {
            id: "grpc-w11-2-q5",
            question: "grpc.method 标签的格式是什么？",
            options: [
                "只有方法名",
                "服务名/方法名",
                "完整方法名 package.service/method",
                "package.method"
            ],
            answer: 2,
            rationale: "gRPC 官方文档：grpc.method 是 Full method name (package.service/method)——完整方法名格式。"
        },
        {
            id: "grpc-w11-2-q6",
            question: "如何使用 gRPC 指标计算吞吐量？",
            options: [
                "使用请求计数指标",
                "'Use a count aggregation on the latency histogram metrics'——对延迟直方图指标使用 count 聚合",
                "使用字节数指标",
                "使用连接数指标"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Throughput calculation: 'Use a count aggregation on the latency histogram metrics'。"
        },
        {
            id: "grpc-w11-2-q7",
            question: "如何计算 gRPC 错误率？",
            options: [
                "计算超时请求数",
                "过滤 grpc.status != OK 的延迟指标",
                "计算重试次数",
                "使用专用错误计数器"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Error rate determination: Filter latency metrics where grpc.status != OK。"
        },
        {
            id: "grpc-w11-2-q8",
            question: "gRPC OpenTelemetry 插件如何创建 Meter？",
            options: [
                "使用默认 Meter",
                "插件接受 MeterProvider 并使用 OpenTelemetry API 创建标识 gRPC 库的 Meter",
                "自动创建全局 Meter",
                "从配置文件读取"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：The plugin accepts a MeterProvider and uses the OpenTelemetry API to create a Meter identifying the gRPC library (e.g., 'grpc-c++' version 1.57.1)。"
        },
        {
            id: "grpc-w11-2-q9",
            question: "grpc.status 标签包含什么信息？",
            options: [
                "HTTP 状态码",
                "服务器状态码（OK、CANCELLED 等）",
                "网络状态",
                "TLS 状态"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：grpc.status 是 Server status codes (OK, CANCELLED, etc.)——服务器状态码。"
        },
        {
            id: "grpc-w11-2-q10",
            question: "Weighted Round Robin 负载均衡策略的指标跟踪什么？",
            options: [
                "只跟踪请求数",
                "端点权重、降级事件和可用性",
                "只跟踪延迟",
                "只跟踪错误"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Weighted Round Robin: Endpoint weights, fallback events, and usability tracking。"
        },
        {
            id: "grpc-w11-2-q11",
            question: "OpenTelemetry 支持多少家可观测性供应商？",
            options: [
                "约 10 家",
                "约 30 家",
                "超过 90 家",
                "只有 3 家"
            ],
            answer: 2,
            rationale: "OpenTelemetry 官方文档：The framework has achieved broad adoption, with support from over 90 observability vendors。"
        },
        {
            id: "grpc-w11-2-q12",
            question: "grpc.target 标签表示什么？",
            options: [
                "目标服务名称",
                "规范化的目标 URI",
                "目标 IP 地址",
                "目标端口"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：grpc.target 是 Canonicalized target URI——规范化的目标 URI。"
        }
    ],
    "grpc-w11-3": [
        {
            id: "grpc-w11-3-q1",
            question: "gRPC 官方文档对 grpcdebug 工具的描述是什么？",
            options: [
                "一个性能测试工具",
                "'Fetches the internal states of the gRPC library from the application via gRPC protocol and provides a human-friendly UX'",
                "一个代码生成工具",
                "一个负载均衡器"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：grpcdebug'fetches the internal states of the gRPC library from the application via gRPC protocol and provides a human-friendly UX to browse them'。"
        },
        {
            id: "grpc-w11-3-q2",
            question: "grpcdebug 支持哪三个管理服务？",
            options: [
                "Logging、Tracing、Metrics",
                "Channelz、Health Checking、CSDS",
                "Auth、TLS、Compression",
                "Load Balancing、Routing、Discovery"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：grpcdebug supports three key admin services: Channelz, Health Checking, CSDS (Configuration Discovery Service)。"
        },
        {
            id: "grpc-w11-3-q3",
            question: "gRPC 官方对 Reflection 协议的定义是什么？",
            options: [
                "一种压缩协议",
                "'A protocol that gRPC servers can use to declare the protobuf-defined APIs they export over a standardized RPC service'",
                "一种认证协议",
                "一种加密协议"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：'Reflection is a protocol that gRPC servers can use to declare the protobuf-defined APIs they export over a standardized RPC service'。"
        },
        {
            id: "grpc-w11-3-q4",
            question: "gRPC 官方对公共 API 暴露 Reflection 的警告是什么？",
            options: [
                "没有警告",
                "'If your gRPC API is accessible to public users, you may not want to expose the reflection service, as you may consider this a security issue'",
                "必须启用 Reflection",
                "Reflection 已被废弃"
            ],
            answer: 1,
            rationale: "gRPC 官方文档警告：'If your gRPC API is accessible to public users, you may not want to expose the reflection service, as you may consider this a security issue'。"
        },
        {
            id: "grpc-w11-3-q5",
            question: "grpcurl 工具的主要功能是什么？",
            options: [
                "编译 protobuf 文件",
                "'curl for gRPC servers'——使用 JSON 格式与 gRPC 端点交互",
                "生成客户端代码",
                "管理 TLS 证书"
            ],
            answer: 1,
            rationale: "grpcurl 是'curl for gRPC servers'——gRPC 服务器的 curl，使用 JSON 格式的请求与 gRPC 端点交互。"
        },
        {
            id: "grpc-w11-3-q6",
            question: "Channelz 提供什么信息？",
            options: [
                "代码覆盖率",
                "RPC 活动统计，包括发送了多少 RPC、有多少失败",
                "内存使用情况",
                "CPU 使用率"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Channelz - Provides statistics on RPC activity, including how many RPCs have been sent or failed on a given channel。"
        },
        {
            id: "grpc-w11-3-q7",
            question: "没有 Reflection 时，手动与 gRPC 服务交互需要什么？",
            options: [
                "只需要服务地址",
                "知道 RPC 服务、理解 protobuf 定义、手工构造二进制请求并解码响应",
                "只需要方法名",
                "只需要 TLS 证书"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Without reflection, manual interaction requires knowing exposed RPC services, understanding request/response protobuf definitions, hand-crafting binary-encoded requests and decoding responses。"
        },
        {
            id: "grpc-w11-3-q8",
            question: "gRPC 官方将 Reflection API 比作什么？",
            options: [
                "GraphQL Schema",
                "'Serving an OpenAPI document on the HTTP server'——提供 OpenAPI 文档",
                "WSDL 文件",
                "JSON Schema"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：'One coming from the REST world might compare the gRPC reflection API to serving an OpenAPI document on the HTTP server presenting the REST API being described'。"
        },
        {
            id: "grpc-w11-3-q9",
            question: "grpcurl 支持哪些 RPC 方法类型？",
            options: [
                "只支持 unary",
                "unary、server streaming、client streaming、bidirectional streaming",
                "只支持 streaming",
                "只支持 unary 和 server streaming"
            ],
            answer: 1,
            rationale: "grpcurl 支持 all RPC method types, including unary, server streaming, client streaming, and bidirectional streaming。"
        },
        {
            id: "grpc-w11-3-q10",
            question: "CSDS（Configuration Discovery Service）的作用是什么？",
            options: [
                "管理 TLS 配置",
                "允许检查活跃的 xDS 配置，指导 RPC 路由",
                "管理压缩配置",
                "管理超时配置"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：CSDS (Configuration Discovery Service) - Allows inspection of active xDS configuration that directs RPC routing。"
        },
        {
            id: "grpc-w11-3-q11",
            question: "Reflection 是否默认启用？",
            options: [
                "是，默认启用",
                "否，服务器作者必须显式调用额外函数激活",
                "取决于语言实现",
                "只在开发模式启用"
            ],
            answer: 1,
            rationale: "gRPC 官方文档：Reflection is not enabled by default. Server authors must explicitly call additional functions to activate the reflection service。"
        },
        {
            id: "grpc-w11-3-q12",
            question: "grpcurl 如何与不支持 Reflection 的服务器交互？",
            options: [
                "无法交互",
                "接受 .proto 源文件或编译的 protoset 文件",
                "只能使用二进制模式",
                "需要额外的配置服务器"
            ],
            answer: 1,
            rationale: "grpcurl 文档：For non-reflective servers, it accepts .proto source files or compiled protoset files containing serialized descriptors。"
        }
    ]
}
