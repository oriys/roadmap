import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week18Guides: Record<string, LessonGuide> = {
    "w18-1": {
        lessonId: "w18-1",
        background: [
            "【RPC 的抽象目标】RPC（Remote Procedure Call）让远程调用看起来像本地函数调用。Jim Waldo 在'A Note on Distributed Computing'中警告：本地和远程调用有本质差异，忽视这种差异会导致脆弱的系统。",
            "【网络透明性的代价】RPC 试图隐藏网络复杂性，但网络是不可靠的：延迟、丢包、分区。'Differences in latency, memory access, partial failure, and concurrency make distributed computing fundamentally different from local computing'。",
            "【RPC vs REST】RPC 是过程调用风格（动词为中心），REST 是资源操作风格（名词为中心）。RPC 适合强类型契约和复杂业务操作，REST 适合松耦合和 Web 集成场景。",
            "【序列化协议】RPC 需要序列化/反序列化。常见协议：JSON（可读但大）、Protocol Buffers（小且快）、Thrift（支持多语言）、Avro（动态 Schema）。选择影响性能和跨语言支持。",
            "【存根生成】RPC 框架从 IDL（接口定义语言）生成客户端存根（stub）和服务端骨架（skeleton）。存根封装网络调用，让调用者像调用本地方法一样调用远程服务。"
        ],
        keyDifficulties: [
            "【分布式系统的八大谬误】Peter Deutsch 总结的谬误：网络可靠、延迟为零、带宽无限、网络安全、拓扑不变、只有一个管理员、传输成本为零、网络同质化。RPC 不能掩盖这些现实。",
            "【部分失败处理】分布式系统的特有问题：请求可能已到达服务端但响应丢失。如何知道操作是否成功？需要幂等设计或事务语义。",
            "【版本兼容性】服务端升级时如何兼容旧客户端？Protocol Buffers 支持向后兼容：新增字段设为 optional，删除字段保留字段号。",
            "【服务发现与负载均衡】客户端如何知道服务端地址？需要服务注册中心（如 Consul、etcd）和负载均衡（客户端 LB 或服务端 LB）。"
        ],
        handsOnPath: [
            "对比 REST 和 RPC：设计一个订单服务，REST 用 POST /orders 创建，RPC 用 OrderService.CreateOrder(request) 调用。",
            "使用 Thrift 定义服务：service OrderService { Order createOrder(1: CreateOrderRequest request) }",
            "模拟网络故障：在调用中注入延迟和错误，观察客户端的重试和超时行为。",
            "实现幂等接口：使用请求 ID 去重，确保重试不会导致重复操作。",
            "对比序列化性能：分别使用 JSON 和 Protocol Buffers 序列化相同数据，对比体积和速度。"
        ],
        selfCheck: [
            "RPC 的抽象目标是什么？",
            "网络透明性带来什么问题？",
            "分布式系统的八大谬误是什么？",
            "如何处理 RPC 的部分失败？",
            "RPC 和 REST 各自适合什么场景？"
        ],
        extensions: [
            "阅读 Jim Waldo 的 'A Note on Distributed Computing' 原文。",
            "研究 CAP 定理与分布式系统设计的关系。",
            "了解 Thrift 和 Avro 的 Schema 演进机制。",
            "研究服务网格（Service Mesh）如何简化 RPC 通信。"
        ],
        sourceUrls: [
            "https://scholar.harvard.edu/files/waldo/files/waldo-94.pdf",
            "https://blog.bytebytego.com/p/ep57-rest-api-vs-graphql-vs-grpc",
            "https://thrift.apache.org/docs/"
        ]
    },
    "w18-2": {
        lessonId: "w18-2",
        background: [
            "【gRPC 定义】gRPC 是 Google 开源的高性能 RPC 框架：'gRPC uses Protocol Buffers as its Interface Definition Language and its underlying message interchange format'。基于 HTTP/2 实现多路复用和流控。",
            "【Protocol Buffers】Protocol Buffers 是二进制序列化协议：定义消息结构（.proto 文件）→ 生成代码 → 序列化/反序列化。比 JSON 更小更快，但不可读。",
            "【HTTP/2 多路复用】HTTP/2 在单个 TCP 连接上复用多个流：'A single connection can carry any number of bidirectional streams'。解决了 HTTP/1.1 的队头阻塞问题，减少连接开销。",
            "【gRPC 元数据】Metadata 是'key-value pairs'形式的请求/响应附加信息：类似 HTTP 头，用于传递认证信息、追踪 ID、自定义数据。分为初始元数据和尾随元数据。",
            "【Channel 概念】gRPC Channel 是到服务端的虚拟连接：'represents a virtual connection to an endpoint'。Channel 管理连接池、负载均衡、重试策略。客户端从 Channel 创建 Stub。"
        ],
        keyDifficulties: [
            "【Proto3 语法】Proto3 简化了语法：所有字段默认 optional、没有 required、不支持默认值（使用零值）。字段号不能复用，删除字段应使用 reserved 保留。",
            "【HTTP/2 帧格式】HTTP/2 将消息分解为帧：HEADERS 帧（请求头）、DATA 帧（消息体）、SETTINGS 帧（配置）、PING 帧（保活）。理解帧格式有助于调试。",
            "【gRPC 与代理兼容性】某些代理/负载均衡器不支持 HTTP/2。解决方案：gRPC-Web（使用 HTTP/1.1）、Envoy 代理（原生支持 gRPC）、使用 TLS 绕过中间代理。",
            "【调试困难】二进制协议不易调试。工具：grpcurl（命令行客户端）、grpcui（Web UI）、Wireshark（协议分析）。需要访问 .proto 文件才能解析。"
        ],
        handsOnPath: [
            "定义 Proto 服务：syntax = \"proto3\"; service Greeter { rpc SayHello (HelloRequest) returns (HelloReply); }",
            "生成代码：protoc --go_out=. --go-grpc_out=. hello.proto（Go 语言示例）",
            "创建 Channel：ManagedChannel channel = ManagedChannelBuilder.forAddress(\"localhost\", 50051).usePlaintext().build();",
            "发送元数据：Metadata metadata = new Metadata(); metadata.put(key, \"value\"); stub.withInterceptors(MetadataUtils.newAttachHeadersInterceptor(metadata));",
            "使用 grpcurl 测试：grpcurl -plaintext -d '{\"name\": \"World\"}' localhost:50051 greeter.Greeter/SayHello"
        ],
        selfCheck: [
            "gRPC 使用什么作为序列化协议？",
            "HTTP/2 多路复用解决了什么问题？",
            "gRPC Metadata 的作用是什么？",
            "Channel 在 gRPC 中代表什么？",
            "Proto3 与 Proto2 的主要区别是什么？"
        ],
        extensions: [
            "研究 Protocol Buffers 的编码格式（Varint、Length-delimited）。",
            "学习 HTTP/2 的流控制机制。",
            "了解 gRPC 反射（Reflection）服务的使用。",
            "研究 gRPC-Web 在浏览器中的应用。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/what-is-grpc/core-concepts/",
            "https://protobuf.dev/programming-guides/",
            "https://grpc.io/blog/grpc-load-balancing/#http2-with-grpc"
        ]
    },
    "w18-3": {
        lessonId: "w18-3",
        background: [
            "【四种通信模式】gRPC 支持四种 RPC 模式：Unary（一元）、Server Streaming（服务端流）、Client Streaming（客户端流）、Bidirectional Streaming（双向流）。",
            "【Unary RPC】最简单的模式：'The client sends a single request to the server and gets a single response back'。类似传统函数调用，适合简单的请求-响应场景。",
            "【Server Streaming】客户端发送一个请求，服务端返回一个流：适合下载大文件、实时更新推送、日志流。服务端可以发送多个响应直到完成。",
            "【Client Streaming】客户端发送一个流，服务端返回一个响应：适合上传大文件、批量数据提交。服务端在客户端完成后返回聚合结果。",
            "【Bidirectional Streaming】双向独立的流：'Both sides can read and write in whatever order they like'。适合聊天应用、游戏实时通信、协作编辑。两个流相互独立。"
        ],
        keyDifficulties: [
            "【流的生命周期】流有打开、数据传输、半关闭、完全关闭四个阶段。客户端和服务端可以独立关闭各自的流。理解生命周期对于资源管理很重要。",
            "【背压处理】流式 RPC 需要处理背压：生产者速度超过消费者。gRPC 使用 HTTP/2 流控制：窗口大小限制未确认数据量，防止内存溢出。",
            "【错误传播】流中的错误会立即终止流。服务端错误通过 Status 传播给客户端。客户端取消会通知服务端停止处理。",
            "【选择合适的模式】Unary：简单查询、CRUD 操作；Server Streaming：实时订阅、大响应；Client Streaming：文件上传、批量操作；Bidirectional：实时协作、聊天。"
        ],
        handsOnPath: [
            "定义 Unary RPC：rpc GetUser (GetUserRequest) returns (User);",
            "定义 Server Streaming：rpc ListUsers (ListUsersRequest) returns (stream User);",
            "定义 Client Streaming：rpc UploadFile (stream FileChunk) returns (UploadStatus);",
            "定义 Bidirectional Streaming：rpc Chat (stream ChatMessage) returns (stream ChatMessage);",
            "实现 Server Streaming：for (User user : users) { responseObserver.onNext(user); } responseObserver.onCompleted();"
        ],
        selfCheck: [
            "gRPC 的四种通信模式是什么？",
            "Server Streaming 适合什么场景？",
            "Client Streaming 和 Server Streaming 的区别是什么？",
            "Bidirectional Streaming 有什么特点？",
            "gRPC 如何处理流式 RPC 的背压？"
        ],
        extensions: [
            "研究 gRPC 流与 WebSocket 的对比。",
            "学习 Reactor 或 RxJava 与 gRPC 流的集成。",
            "了解 gRPC 流在机器学习推理中的应用。",
            "研究流式 RPC 的测试策略。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/what-is-grpc/core-concepts/#rpc-life-cycle",
            "https://github.com/grpc/grpc/tree/master/examples",
            "https://grpc.io/docs/guides/performance/"
        ]
    },
    "w18-4": {
        lessonId: "w18-4",
        background: [
            "【gRPC 状态码】gRPC 定义了一组状态码：OK（成功）、CANCELLED（取消）、INVALID_ARGUMENT（参数错误）、DEADLINE_EXCEEDED（超时）、NOT_FOUND（未找到）、INTERNAL（内部错误）等。与 HTTP 状态码独立。",
            "【Deadline 与 Timeout】'Deadlines and timeouts allow gRPC clients to specify how long they are willing to wait'。Deadline 是绝对时间点，Timeout 是相对时间。超时后 RPC 以 DEADLINE_EXCEEDED 终止。",
            "【客户端负载均衡】gRPC 支持客户端负载均衡：'The client is aware of multiple backends and chooses one to use for each RPC'。策略包括 Round Robin、Pick First、自定义策略。需要服务发现配合。",
            "【健康检查协议】gRPC 定义了标准健康检查协议：grpc.health.v1.Health 服务。服务端实现 Check 和 Watch 方法，客户端或负载均衡器调用检查服务状态。",
            "【重试策略】gRPC 支持自动重试：配置 retryPolicy 指定最大重试次数、可重试状态码、退避策略。注意只有幂等操作才能安全重试。"
        ],
        keyDifficulties: [
            "【Deadline 传播】Deadline 在调用链中传播：服务 A 设置 5 秒 deadline，调用服务 B 时 B 继承剩余时间。如果 A 已用 3 秒，B 只有 2 秒。避免设置过短的 deadline。",
            "【状态码映射】gRPC 状态码与 HTTP 状态码不同。INVALID_ARGUMENT → 400，NOT_FOUND → 404，INTERNAL → 500。代理层需要正确映射。",
            "【负载均衡与服务发现】客户端 LB 需要服务发现：DNS（简单但缓存问题）、Consul/etcd（动态但复杂）、Kubernetes Service（云原生）。选择影响系统架构。",
            "【Hedged Requests】高级重试策略：在第一个请求未及时响应时，发送额外请求（hedging）。能降低尾延迟，但增加服务器负载。需要谨慎使用。"
        ],
        handsOnPath: [
            "设置 Deadline：stub.withDeadlineAfter(5, TimeUnit.SECONDS).getUser(request);",
            "处理超时：catch (StatusRuntimeException e) { if (e.getStatus().getCode() == Status.Code.DEADLINE_EXCEEDED) { /* 处理超时 */ } }",
            "配置重试策略：\"retryPolicy\": { \"maxAttempts\": 3, \"retryableStatusCodes\": [\"UNAVAILABLE\"], \"backoffMultiplier\": 2 }",
            "实现健康检查：HealthCheckResponse.newBuilder().setStatus(ServingStatus.SERVING).build();",
            "配置客户端 LB：ManagedChannelBuilder.forTarget(\"dns:///myservice\").defaultLoadBalancingPolicy(\"round_robin\").build();"
        ],
        selfCheck: [
            "gRPC 的主要状态码有哪些？",
            "Deadline 和 Timeout 的区别是什么？",
            "Deadline 如何在调用链中传播？",
            "gRPC 健康检查协议的作用是什么？",
            "客户端负载均衡有哪些策略？"
        ],
        extensions: [
            "研究 gRPC 拦截器（Interceptor）的使用。",
            "学习 Envoy 作为 gRPC 代理的配置。",
            "了解 gRPC 与 OpenTelemetry 的集成。",
            "研究 gRPC 在 Kubernetes 中的最佳实践。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/guides/error/",
            "https://grpc.io/blog/grpc-load-balancing/",
            "https://grpc.io/docs/guides/health-checking/"
        ]
    }
}

export const week18Quizzes: Record<string, QuizQuestion[]> = {
    "w18-1": [
        {
            id: "w18-1-q1",
            question: "RPC 的抽象目标是什么？",
            options: [
                "提高网络性能",
                "让远程调用看起来像本地函数调用",
                "简化数据库访问",
                "实现负载均衡"
            ],
            answer: 1,
            rationale: "RPC（Remote Procedure Call）让远程调用看起来像本地函数调用，隐藏网络复杂性。"
        },
        {
            id: "w18-1-q2",
            question: "Jim Waldo 在 'A Note on Distributed Computing' 中警告什么？",
            options: [
                "RPC 性能太低",
                "本地和远程调用有本质差异，忽视会导致脆弱的系统",
                "应该避免使用 RPC",
                "网络总是可靠的"
            ],
            answer: 1,
            rationale: "'Differences in latency, memory access, partial failure make distributed computing fundamentally different from local computing'。"
        },
        {
            id: "w18-1-q3",
            question: "分布式系统的八大谬误不包括？",
            options: [
                "网络是可靠的",
                "延迟为零",
                "服务总是可用的",
                "带宽是无限的"
            ],
            answer: 2,
            rationale: "八大谬误：网络可靠、延迟为零、带宽无限、网络安全、拓扑不变、只有一个管理员、传输成本为零、网络同质化。"
        },
        {
            id: "w18-1-q4",
            question: "RPC 中的部分失败指什么？",
            options: [
                "部分数据丢失",
                "请求可能已到达服务端但响应丢失，无法确定操作是否成功",
                "部分服务不可用",
                "部分字段未填写"
            ],
            answer: 1,
            rationale: "分布式系统特有问题：请求可能已到达服务端但响应丢失，如何知道操作是否成功？需要幂等设计。"
        },
        {
            id: "w18-1-q5",
            question: "RPC 和 REST 的主要区别是什么？",
            options: [
                "RPC 更安全",
                "RPC 是过程调用风格（动词），REST 是资源操作风格（名词）",
                "REST 更快",
                "没有区别"
            ],
            answer: 1,
            rationale: "RPC 以操作为中心（动词），REST 以资源为中心（名词）。RPC 适合复杂业务操作，REST 适合 Web 集成。"
        },
        {
            id: "w18-1-q6",
            question: "Protocol Buffers 相比 JSON 的优势是什么？",
            options: [
                "更易读",
                "更小更快",
                "更容易调试",
                "更灵活"
            ],
            answer: 1,
            rationale: "Protocol Buffers 是二进制协议，比 JSON 更小更快，但不可读，调试需要工具支持。"
        },
        {
            id: "w18-1-q7",
            question: "RPC 中存根（Stub）的作用是什么？",
            options: [
                "存储数据",
                "封装网络调用，让调用者像调用本地方法一样调用远程服务",
                "验证参数",
                "日志记录"
            ],
            answer: 1,
            rationale: "存根封装网络调用细节，让调用者像调用本地方法一样调用远程服务，简化客户端代码。"
        },
        {
            id: "w18-1-q8",
            question: "如何处理 RPC 的部分失败问题？",
            options: [
                "增加超时时间",
                "使用幂等设计或事务语义",
                "忽略错误",
                "重启服务"
            ],
            answer: 1,
            rationale: "幂等设计确保重试安全，或使用事务语义保证一致性。"
        },
        {
            id: "w18-1-q9",
            question: "Protocol Buffers 如何保证向后兼容？",
            options: [
                "不支持向后兼容",
                "新增字段设为 optional，删除字段保留字段号",
                "强制升级所有客户端",
                "使用版本号"
            ],
            answer: 1,
            rationale: "新增字段设为 optional（或使用 reserved 保留删除的字段号），确保旧客户端可以忽略新字段。"
        },
        {
            id: "w18-1-q10",
            question: "IDL（接口定义语言）的作用是什么？",
            options: [
                "定义数据库 Schema",
                "定义服务接口，用于生成客户端和服务端代码",
                "定义网络协议",
                "定义 UI 布局"
            ],
            answer: 1,
            rationale: "IDL 定义服务接口和消息结构，RPC 框架从 IDL 生成客户端存根和服务端骨架。"
        },
        {
            id: "w18-1-q11",
            question: "RPC 需要什么基础设施支持服务发现？",
            options: [
                "DNS 服务器",
                "服务注册中心（如 Consul、etcd）",
                "负载均衡器",
                "以上都是"
            ],
            answer: 3,
            rationale: "RPC 需要服务注册中心进行服务发现、DNS 或负载均衡器进行路由。"
        },
        {
            id: "w18-1-q12",
            question: "哪种序列化协议支持动态 Schema？",
            options: [
                "JSON",
                "Protocol Buffers",
                "Avro",
                "Thrift"
            ],
            answer: 2,
            rationale: "Avro 支持动态 Schema，读写时可以使用不同的 Schema，适合大数据场景。"
        }
    ],
    "w18-2": [
        {
            id: "w18-2-q1",
            question: "gRPC 使用什么作为序列化协议？",
            options: [
                "JSON",
                "XML",
                "Protocol Buffers",
                "Thrift"
            ],
            answer: 2,
            rationale: "'gRPC uses Protocol Buffers as its Interface Definition Language and its underlying message interchange format'。"
        },
        {
            id: "w18-2-q2",
            question: "HTTP/2 多路复用解决了什么问题？",
            options: [
                "安全性问题",
                "HTTP/1.1 的队头阻塞问题",
                "数据压缩问题",
                "认证问题"
            ],
            answer: 1,
            rationale: "HTTP/2 在单个 TCP 连接上复用多个流，解决了 HTTP/1.1 的队头阻塞问题，减少连接开销。"
        },
        {
            id: "w18-2-q3",
            question: "gRPC Metadata 的形式是什么？",
            options: [
                "JSON 对象",
                "key-value pairs",
                "XML 节点",
                "二进制数据"
            ],
            answer: 1,
            rationale: "Metadata 是'key-value pairs'形式的附加信息，类似 HTTP 头，用于传递认证信息、追踪 ID 等。"
        },
        {
            id: "w18-2-q4",
            question: "gRPC Channel 代表什么？",
            options: [
                "数据通道",
                "到服务端的虚拟连接",
                "消息队列",
                "数据库连接"
            ],
            answer: 1,
            rationale: "Channel 'represents a virtual connection to an endpoint'，管理连接池、负载均衡、重试策略。"
        },
        {
            id: "w18-2-q5",
            question: "Proto3 相比 Proto2 的主要变化是什么？",
            options: [
                "性能更好",
                "所有字段默认 optional，没有 required，不支持默认值",
                "支持更多语言",
                "文件更小"
            ],
            answer: 1,
            rationale: "Proto3 简化语法：所有字段默认 optional、没有 required、不支持默认值（使用零值）。"
        },
        {
            id: "w18-2-q6",
            question: "为什么 gRPC 的二进制协议难以调试？",
            options: [
                "加密了",
                "压缩了",
                "不可读，需要 .proto 文件和工具才能解析",
                "太大了"
            ],
            answer: 2,
            rationale: "二进制协议不易直接阅读，需要使用 grpcurl、grpcui 等工具，并访问 .proto 文件才能解析。"
        },
        {
            id: "w18-2-q7",
            question: "gRPC-Web 的作用是什么？",
            options: [
                "提高性能",
                "让浏览器可以使用 gRPC（通过 HTTP/1.1）",
                "增加安全性",
                "简化开发"
            ],
            answer: 1,
            rationale: "某些代理不支持 HTTP/2，gRPC-Web 使用 HTTP/1.1 让浏览器也能使用 gRPC。"
        },
        {
            id: "w18-2-q8",
            question: "Proto 文件中删除字段应该如何处理？",
            options: [
                "直接删除",
                "使用 reserved 保留字段号",
                "改名",
                "设为空"
            ],
            answer: 1,
            rationale: "删除字段应使用 reserved 保留字段号，避免未来复用导致兼容性问题。"
        },
        {
            id: "w18-2-q9",
            question: "HTTP/2 使用什么传输请求头？",
            options: [
                "纯文本",
                "HEADERS 帧",
                "DATA 帧",
                "JSON"
            ],
            answer: 1,
            rationale: "HTTP/2 将消息分解为帧：HEADERS 帧传输请求头、DATA 帧传输消息体。"
        },
        {
            id: "w18-2-q10",
            question: "grpcurl 工具的作用是什么？",
            options: [
                "生成代码",
                "命令行 gRPC 客户端，用于测试和调试",
                "监控性能",
                "部署服务"
            ],
            answer: 1,
            rationale: "grpcurl 是命令行 gRPC 客户端，类似 curl，用于测试和调试 gRPC 服务。"
        },
        {
            id: "w18-2-q11",
            question: "gRPC 使用什么传输协议？",
            options: [
                "HTTP/1.1",
                "HTTP/2",
                "TCP",
                "UDP"
            ],
            answer: 1,
            rationale: "gRPC 基于 HTTP/2 实现，利用其多路复用和流控特性。"
        },
        {
            id: "w18-2-q12",
            question: "从 Channel 创建什么对象来调用服务？",
            options: [
                "Connection",
                "Stub",
                "Stream",
                "Session"
            ],
            answer: 1,
            rationale: "客户端从 Channel 创建 Stub，Stub 封装了对服务的调用。"
        }
    ],
    "w18-3": [
        {
            id: "w18-3-q1",
            question: "gRPC 支持几种通信模式？",
            options: [
                "2 种",
                "3 种",
                "4 种",
                "5 种"
            ],
            answer: 2,
            rationale: "四种模式：Unary、Server Streaming、Client Streaming、Bidirectional Streaming。"
        },
        {
            id: "w18-3-q2",
            question: "Unary RPC 的特点是什么？",
            options: [
                "客户端发送流",
                "服务端返回流",
                "客户端发送单个请求，获取单个响应",
                "双向流"
            ],
            answer: 2,
            rationale: "'The client sends a single request to the server and gets a single response back'。"
        },
        {
            id: "w18-3-q3",
            question: "Server Streaming 适合什么场景？",
            options: [
                "简单查询",
                "下载大文件、实时更新推送、日志流",
                "表单提交",
                "认证"
            ],
            answer: 1,
            rationale: "Server Streaming 客户端发送一个请求，服务端返回多个响应，适合下载大文件、实时更新。"
        },
        {
            id: "w18-3-q4",
            question: "Client Streaming 适合什么场景？",
            options: [
                "实时聊天",
                "上传大文件、批量数据提交",
                "日志查询",
                "配置获取"
            ],
            answer: 1,
            rationale: "Client Streaming 客户端发送多个请求，服务端返回一个聚合响应，适合上传大文件、批量操作。"
        },
        {
            id: "w18-3-q5",
            question: "Bidirectional Streaming 的特点是什么？",
            options: [
                "半双工通信",
                "两个流相互依赖",
                "双向独立的流，两侧可以按任意顺序读写",
                "单向通信"
            ],
            answer: 2,
            rationale: "'Both sides can read and write in whatever order they like'——两个流相互独立。"
        },
        {
            id: "w18-3-q6",
            question: "gRPC 流式 RPC 如何处理背压？",
            options: [
                "丢弃数据",
                "使用 HTTP/2 流控制，窗口大小限制未确认数据量",
                "无限缓冲",
                "阻塞发送"
            ],
            answer: 1,
            rationale: "gRPC 使用 HTTP/2 流控制：窗口大小限制未确认数据量，防止内存溢出。"
        },
        {
            id: "w18-3-q7",
            question: "流中发生错误会怎样？",
            options: [
                "忽略错误继续",
                "错误立即终止流，通过 Status 传播",
                "重试",
                "记录日志"
            ],
            answer: 1,
            rationale: "流中的错误会立即终止流，服务端错误通过 Status 传播给客户端。"
        },
        {
            id: "w18-3-q8",
            question: "流的生命周期包括哪些阶段？",
            options: [
                "开始、结束",
                "打开、数据传输、半关闭、完全关闭",
                "请求、响应",
                "连接、断开"
            ],
            answer: 1,
            rationale: "流有打开、数据传输、半关闭（一侧完成）、完全关闭四个阶段。"
        },
        {
            id: "w18-3-q9",
            question: "定义 Server Streaming RPC 的语法是什么？",
            options: [
                "rpc Method (Request) returns (Response);",
                "rpc Method (Request) returns (stream Response);",
                "rpc Method (stream Request) returns (Response);",
                "rpc Method (stream Request) returns (stream Response);"
            ],
            answer: 1,
            rationale: "Server Streaming 在返回类型前加 stream：rpc ListUsers (Request) returns (stream User);"
        },
        {
            id: "w18-3-q10",
            question: "Bidirectional Streaming 适合什么场景？",
            options: [
                "文件下载",
                "聊天应用、游戏实时通信、协作编辑",
                "数据查询",
                "配置更新"
            ],
            answer: 1,
            rationale: "Bidirectional Streaming 适合需要双向实时通信的场景，如聊天、游戏、协作编辑。"
        },
        {
            id: "w18-3-q11",
            question: "客户端取消流会发生什么？",
            options: [
                "服务端继续处理",
                "服务端收到通知并停止处理",
                "连接保持",
                "数据丢失"
            ],
            answer: 1,
            rationale: "客户端取消会通知服务端停止处理，避免浪费资源。"
        },
        {
            id: "w18-3-q12",
            question: "定义 Client Streaming RPC 的语法是什么？",
            options: [
                "rpc Method (Request) returns (Response);",
                "rpc Method (Request) returns (stream Response);",
                "rpc Method (stream Request) returns (Response);",
                "rpc Method (stream Request) returns (stream Response);"
            ],
            answer: 2,
            rationale: "Client Streaming 在请求类型前加 stream：rpc UploadFile (stream Chunk) returns (Status);"
        }
    ],
    "w18-4": [
        {
            id: "w18-4-q1",
            question: "gRPC 超时后返回什么状态码？",
            options: [
                "CANCELLED",
                "DEADLINE_EXCEEDED",
                "TIMEOUT",
                "UNAVAILABLE"
            ],
            answer: 1,
            rationale: "'RPCs terminate with DEADLINE_EXCEEDED error if exceeded'。"
        },
        {
            id: "w18-4-q2",
            question: "Deadline 和 Timeout 的区别是什么？",
            options: [
                "没有区别",
                "Deadline 是绝对时间点，Timeout 是相对时间",
                "Timeout 更精确",
                "Deadline 更短"
            ],
            answer: 1,
            rationale: "Deadline 是绝对时间点（如某个时刻），Timeout 是相对时间（如 5 秒后）。"
        },
        {
            id: "w18-4-q3",
            question: "Deadline 如何在调用链中传播？",
            options: [
                "不传播",
                "每个服务独立设置",
                "继承剩余时间，如 A 用了 3 秒，B 只有 2 秒",
                "固定 5 秒"
            ],
            answer: 2,
            rationale: "Deadline 在调用链中传播，下游服务继承上游的剩余时间，避免级联超时。"
        },
        {
            id: "w18-4-q4",
            question: "gRPC 健康检查服务的名称是什么？",
            options: [
                "grpc.health.Health",
                "grpc.health.v1.Health",
                "grpc.healthcheck.Service",
                "grpc.status.Health"
            ],
            answer: 1,
            rationale: "gRPC 标准健康检查协议：grpc.health.v1.Health 服务，实现 Check 和 Watch 方法。"
        },
        {
            id: "w18-4-q5",
            question: "gRPC 客户端负载均衡策略不包括？",
            options: [
                "Round Robin",
                "Pick First",
                "Least Connections",
                "自定义策略"
            ],
            answer: 2,
            rationale: "gRPC 内置 Round Robin、Pick First，支持自定义策略。Least Connections 需要自己实现。"
        },
        {
            id: "w18-4-q6",
            question: "gRPC 重试策略应该只用于什么类型的操作？",
            options: [
                "所有操作",
                "幂等操作",
                "写操作",
                "读操作"
            ],
            answer: 1,
            rationale: "只有幂等操作才能安全重试，非幂等操作重试可能导致重复执行。"
        },
        {
            id: "w18-4-q7",
            question: "INVALID_ARGUMENT 状态码对应什么 HTTP 状态码？",
            options: [
                "401",
                "403",
                "400",
                "404"
            ],
            answer: 2,
            rationale: "gRPC 状态码映射：INVALID_ARGUMENT → 400，NOT_FOUND → 404，INTERNAL → 500。"
        },
        {
            id: "w18-4-q8",
            question: "Hedged Requests 是什么？",
            options: [
                "重试失败的请求",
                "在第一个请求未及时响应时发送额外请求",
                "缓存请求",
                "批量请求"
            ],
            answer: 1,
            rationale: "Hedged Requests 在第一个请求未及时响应时发送额外请求，能降低尾延迟但增加服务器负载。"
        },
        {
            id: "w18-4-q9",
            question: "gRPC 服务发现常用什么组件？",
            options: [
                "只能用 DNS",
                "Consul、etcd、Kubernetes Service",
                "只能硬编码",
                "只能用负载均衡器"
            ],
            answer: 1,
            rationale: "客户端 LB 需要服务发现：DNS、Consul/etcd、Kubernetes Service 都是常用选择。"
        },
        {
            id: "w18-4-q10",
            question: "避免设置过短 Deadline 的原因是什么？",
            options: [
                "性能问题",
                "下游服务可能没有足够时间处理",
                "安全问题",
                "兼容性问题"
            ],
            answer: 1,
            rationale: "Deadline 传播时下游服务只继承剩余时间，设置过短可能导致下游服务超时。"
        },
        {
            id: "w18-4-q11",
            question: "gRPC 重试策略配置哪些参数？",
            options: [
                "只有重试次数",
                "最大重试次数、可重试状态码、退避策略",
                "只有超时时间",
                "只有状态码"
            ],
            answer: 1,
            rationale: "retryPolicy 配置：maxAttempts（最大重试次数）、retryableStatusCodes、backoffMultiplier。"
        },
        {
            id: "w18-4-q12",
            question: "gRPC 使用什么负载均衡策略作为默认？",
            options: [
                "Round Robin",
                "Pick First",
                "Random",
                "Least Connections"
            ],
            answer: 1,
            rationale: "gRPC 默认使用 Pick First 策略（选择第一个可用的服务端），需要显式配置 Round Robin。"
        }
    ]
}
