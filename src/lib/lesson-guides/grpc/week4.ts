import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "grpc-w4-1": {
        lessonId: "grpc-w4-1",
        background: [
            "【Unary RPC 定义】gRPC Core Concepts：'the client sends a single request to the server and gets a single response back, just like a normal function call'——最基础的 RPC 模式。",
            "【适用场景】Unary RPC 适合简单的请求-响应场景：查询单条数据、提交表单、执行命令等。大多数 API 调用都是 Unary 模式。",
            "【同步 vs 异步】大多数语言实现同时提供同步（blocking）和异步（non-blocking）的 Unary 调用。同步更简单，异步适合高并发场景。",
            "【超时与截止时间】客户端应始终设置超时。gRPC 的 Deadline 是绝对时间点，Timeout 是相对时长，框架自动处理跨服务的 deadline 传播。",
            "【元数据传递】Unary RPC 支持在请求头和响应头/尾中传递 Metadata。常用于传递认证 token、追踪 ID、自定义头部等。"
        ],
        keyDifficulties: [
            "【阻塞调用风险】同步调用会阻塞当前线程等待响应。在高并发场景下可能耗尽线程池，应考虑使用异步调用或合理配置线程池。",
            "【超时传播】链式调用时，上游的 deadline 应传播到下游。Go 的 context 机制自动传播，Java 需要手动提取和设置。",
            "【错误处理粒度】gRPC 状态码是粗粒度的，复杂业务错误应在响应消息中携带详细错误信息，或使用 google.rpc.Status 扩展。",
            "【幂等性设计】网络抖动可能导致请求重试，Unary RPC 应设计为幂等操作，或使用请求 ID 进行去重。"
        ],
        handsOnPath: [
            "实现完整的 Unary RPC 流程：定义 proto、生成代码、实现服务端、编写客户端，完成一次完整调用。",
            "测试超时机制：服务端故意延迟响应，客户端设置短超时，观察 DeadlineExceeded 错误。",
            "传递 Metadata：客户端设置自定义头部（如 x-request-id），服务端读取并记录日志。",
            "实现错误处理：服务端返回不同的错误码（NotFound、InvalidArgument），客户端正确处理每种错误。",
            "压测 Unary RPC：使用 ghz 或 grpcurl 进行压力测试，观察 QPS 和延迟分布。",
            "对比同步和异步调用：测量两种方式在高并发下的性能差异。"
        ],
        selfCheck: [
            "Unary RPC 的通信模式是什么？适用于什么场景？",
            "同步（blocking）和异步（non-blocking）Unary 调用有什么区别？各自的适用场景？",
            "如何在 gRPC 调用中设置超时？Deadline 和 Timeout 的区别？",
            "gRPC Metadata 可以传递什么信息？如何设置和读取？",
            "Unary RPC 的错误处理最佳实践是什么？",
            "为什么 Unary RPC 应该设计为幂等操作？"
        ],
        extensions: [
            "研究 gRPC 的重试策略配置，自动重试可重试错误（如 UNAVAILABLE）。",
            "学习 google.rpc.Status 和 google.rpc.ErrorDetails，实现丰富的错误信息。",
            "探索 gRPC 的请求/响应压缩，减少网络传输体积。",
            "了解 gRPC 的请求限流（rate limiting）机制。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/what-is-grpc/core-concepts/",
            "https://grpc.io/docs/languages/go/basics/",
            "https://grpc.io/docs/languages/java/basics/"
        ]
    },
    "grpc-w4-2": {
        lessonId: "grpc-w4-2",
        background: [
            "【Server Streaming 定义】gRPC Core Concepts：'the client sends a request to the server and gets a stream to read a sequence of messages back'——服务端返回消息流。",
            "【Client Streaming 定义】'the client writes a sequence of messages and sends them to the server...using a provided stream'——客户端发送消息流，服务端返回单一响应。",
            "【适用场景】Server Streaming 适合返回大量数据（分页列表、日志流、事件推送）；Client Streaming 适合批量上传（文件分块、批量写入）。",
            "【流控制】gRPC 内置流控制机制：'As data is read on the receiving side, an acknowledgement is returned to the sender'——接收方通告容量，防止被快速发送方淹没。",
            "【消息顺序】流中的消息保持发送顺序：'message order preserved in each direction'——但读写可以独立进行。"
        ],
        keyDifficulties: [
            "【流式 vs 分页】Server Streaming 与传统分页查询的选择：小数据量用分页更简单，大数据量或实时推送用流更高效。",
            "【流的生命周期】正确管理流的打开、数据传输、关闭。发送方完成后需调用 Close，接收方需处理 EOF 信号。",
            "【错误处理】流式调用中的错误可能在任何时刻发生。需要区分正常结束（EOF）和异常错误，并妥善清理资源。",
            "【背压机制】发送过快会触发背压：'it pauses before returning from write calls'——框架自动处理，但需要理解其对延迟的影响。"
        ],
        handsOnPath: [
            "实现 Server Streaming：ListUsers 方法返回用户流，服务端逐条发送，客户端循环接收并打印。",
            "实现 Client Streaming：UploadData 方法接收数据流，客户端分批发送，服务端统计接收字节数并返回。",
            "测试流控制：客户端故意放慢接收速度，观察服务端发送是否被阻塞。",
            "实现流式进度报告：上传大文件时，客户端每发送一块都收到服务端的确认进度。",
            "错误处理实验：模拟流中途发生错误，验证客户端和服务端的清理逻辑。",
            "对比性能：同样的数据量，比较流式传输和 Unary RPC（一次性传输）的延迟和内存占用。"
        ],
        selfCheck: [
            "Server Streaming 和 Client Streaming 分别适用于什么场景？",
            "gRPC 流控制机制如何工作？什么是背压？",
            "流式调用与 Unary 调用在代码结构上有什么不同？",
            "如何正确关闭流？客户端和服务端分别需要做什么？",
            "流式调用中如何处理错误？如何区分正常结束和异常？",
            "Server Streaming 与传统分页 API 相比有什么优缺点？"
        ],
        extensions: [
            "研究 gRPC 的 keepalive 配置，保持长时间流式连接的活跃。",
            "学习流式调用的取消机制，客户端如何中途取消流。",
            "探索 Server-Sent Events (SSE) 与 gRPC Server Streaming 的对比。",
            "了解流式调用在微服务架构中的链路追踪挑战。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/what-is-grpc/core-concepts/",
            "https://grpc.io/docs/languages/python/basics/",
            "https://grpc.io/docs/guides/flow-control/"
        ]
    },
    "grpc-w4-3": {
        lessonId: "grpc-w4-3",
        background: [
            "【双向流定义】gRPC Core Concepts：'both sides send a sequence of messages using a read-write stream'——客户端和服务端都可以独立发送消息流。",
            "【独立操作】双向流的两个方向是独立的：'with independent operation'——不需要等待对方响应就可以发送，实现真正的全双工通信。",
            "【适用场景】双向流适合实时交互场景：聊天应用、实时协作、游戏通信、双向数据同步等。",
            "【消息顺序】每个方向的消息保持顺序，但两个方向之间没有顺序保证。客户端可能收到服务端的消息，同时还在发送自己的消息。",
            "【流状态管理】双向流需要管理两个独立的流状态，任一方可以先结束自己的发送流，但仍可继续接收对方的消息。"
        ],
        keyDifficulties: [
            "【死锁风险】Flow Control 文档警告：'potential for a deadlock if both sides are doing synchronous reads...and both try to do a lot of writing without doing any reads'——需要正确设计读写逻辑。",
            "【并发模型】双向流通常需要并发处理读和写：Go 使用 goroutine，Java 使用线程或回调，Python 使用线程或 asyncio。",
            "【负载均衡】Performance 文档指出：'streaming cannot be load-balanced once started'——长时间的双向流无法在中途切换后端，需要考虑连接粘性。",
            "【Python 性能】Performance 文档警告：Python 的 streaming RPCs much slower than unary RPCs——由于额外的线程开销，Python 不适合高性能流式场景。"
        ],
        handsOnPath: [
            "实现聊天室：Chat 服务支持多个客户端加入，服务端广播消息给所有客户端。",
            "实现双向数据同步：客户端和服务端各自修改数据，通过双向流实时同步变更。",
            "并发读写：Go 中使用两个 goroutine 分别处理 Send 和 Recv，验证独立操作。",
            "测试流的独立关闭：客户端先关闭发送流，继续接收服务端消息直到服务端也关闭。",
            "实现心跳机制：客户端和服务端定期发送心跳消息，检测连接存活状态。",
            "错误恢复：模拟连接中断，实现客户端自动重连并恢复流。"
        ],
        selfCheck: [
            "双向流与其他三种 RPC 模式有什么本质区别？",
            "双向流的两个方向是如何独立操作的？消息顺序保证是什么？",
            "使用双向流时如何避免死锁？读写逻辑应该如何设计？",
            "为什么双向流不能被负载均衡？这对系统设计有什么影响？",
            "Go/Java/Python 中如何实现双向流的并发读写？",
            "双向流适合什么业务场景？有什么限制？"
        ],
        extensions: [
            "研究 WebSocket 与 gRPC 双向流的对比，各自的适用场景。",
            "学习 gRPC 的连接重试和恢复机制，实现健壮的长连接应用。",
            "探索 gRPC 在游戏服务器中的应用，实时同步游戏状态。",
            "了解 gRPC 双向流在 Service Mesh 环境中的路由和监控挑战。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/what-is-grpc/core-concepts/",
            "https://grpc.io/docs/languages/go/basics/",
            "https://grpc.io/docs/guides/performance/"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "grpc-w4-1": [
        {
            id: "grpc-w4-1-q1",
            question: "gRPC Core Concepts 如何描述 Unary RPC？",
            options: [
                "客户端发送消息流，服务端返回单一响应",
                "服务端推送消息流给客户端",
                "The client sends a single request and gets a single response back, just like a normal function call",
                "双向独立的消息流"
            ],
            answer: 2,
            rationale: "gRPC Core Concepts 描述 Unary RPC：'the client sends a single request to the server and gets a single response back, just like a normal function call'。"
        },
        {
            id: "grpc-w4-1-q2",
            question: "以下哪个场景最适合使用 Unary RPC？",
            options: [
                "实时聊天",
                "大文件上传",
                "查询单个用户信息",
                "服务器日志流推送"
            ],
            answer: 2,
            rationale: "Unary RPC 适合简单的请求-响应场景，如查询单条数据、提交表单等。聊天用双向流，大文件用客户端流，日志推送用服务端流。"
        },
        {
            id: "grpc-w4-1-q3",
            question: "关于 gRPC Deadline 和 Timeout 的区别，以下哪项是正确的？",
            options: [
                "两者完全相同",
                "Deadline 是绝对时间点，Timeout 是相对时长",
                "Timeout 是绝对时间点，Deadline 是相对时长",
                "只有 Java 支持 Deadline"
            ],
            answer: 1,
            rationale: "gRPC 的 Deadline 是绝对时间点（如 2024-01-01 12:00:00），Timeout 是相对时长（如 5 秒）。框架会自动转换和传播 deadline。"
        },
        {
            id: "grpc-w4-1-q4",
            question: "同步（blocking）Unary 调用的主要风险是什么？",
            options: [
                "无法传递 metadata",
                "不支持错误处理",
                "阻塞当前线程，高并发下可能耗尽线程池",
                "不支持超时设置"
            ],
            answer: 2,
            rationale: "同步调用会阻塞当前线程等待响应，在高并发场景下可能耗尽线程池，导致服务无响应。应考虑使用异步调用或合理配置线程池。"
        },
        {
            id: "grpc-w4-1-q5",
            question: "gRPC Metadata 最常用于传递什么信息？",
            options: [
                "请求体数据",
                "认证 token、追踪 ID、自定义头部",
                "响应状态码",
                "Protocol Buffers 版本"
            ],
            answer: 1,
            rationale: "Metadata 用于传递 RPC 调用的元数据，常见用途包括认证 token、追踪 ID（如 trace-id）、自定义头部等，类似 HTTP headers。"
        },
        {
            id: "grpc-w4-1-q6",
            question: "为什么 Unary RPC 应该设计为幂等操作？",
            options: [
                "gRPC 规范强制要求",
                "网络抖动可能导致请求重试，幂等操作保证重试安全",
                "非幂等操作无法使用 gRPC",
                "幂等操作性能更好"
            ],
            answer: 1,
            rationale: "网络抖动、超时重试等可能导致同一请求被执行多次。幂等操作（相同请求多次执行结果相同）可以安全重试，非幂等操作需要额外的去重机制。"
        },
        {
            id: "grpc-w4-1-q7",
            question: "gRPC 状态码的特点是什么？",
            options: [
                "只有成功和失败两种",
                "粗粒度的标准错误码，复杂业务错误需要在响应消息中携带详细信息",
                "与 HTTP 状态码完全相同",
                "每种语言定义不同的状态码"
            ],
            answer: 1,
            rationale: "gRPC 定义了 16 种标准状态码（如 OK、NOT_FOUND、INVALID_ARGUMENT），是粗粒度的。复杂业务错误应在响应消息中携带详情，或使用 google.rpc.Status 扩展。"
        },
        {
            id: "grpc-w4-1-q8",
            question: "在 Go 中如何为 gRPC 调用设置 5 秒超时？",
            options: [
                "grpc.WithTimeout(5 * time.Second)",
                "ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)",
                "client.SetTimeout(5)",
                "stub.timeout = 5s"
            ],
            answer: 1,
            rationale: "Go gRPC 使用 context 传递超时，通过 context.WithTimeout() 创建带超时的 context，然后传递给 RPC 方法调用。"
        },
        {
            id: "grpc-w4-1-q9",
            question: "链式调用时，上游的 deadline 应该如何处理？",
            options: [
                "每个服务设置独立的 deadline",
                "上游 deadline 应传播到下游，Go 的 context 自动传播",
                "只有最后一个服务需要 deadline",
                "deadline 不能跨服务传播"
            ],
            answer: 1,
            rationale: "链式调用时 deadline 应传播到下游，避免级联超时。Go 的 context 机制自动传播 deadline，Java 需要手动提取并设置到下游调用。"
        },
        {
            id: "grpc-w4-1-q10",
            question: "gRPC 的哪种调用方式适合高并发场景？",
            options: [
                "只能使用同步调用",
                "异步（non-blocking）调用",
                "只能使用流式调用",
                "必须使用多进程"
            ],
            answer: 1,
            rationale: "高并发场景应使用异步（non-blocking）调用，避免阻塞线程。同步调用会占用线程等待响应，高并发时可能耗尽线程池。"
        },
        {
            id: "grpc-w4-1-q11",
            question: "Unary RPC 支持在哪些位置传递 Metadata？",
            options: [
                "只在请求头",
                "只在响应头",
                "请求头和响应头/尾",
                "不支持 Metadata"
            ],
            answer: 2,
            rationale: "Unary RPC 支持在请求头（client 发送）和响应头/尾（server 返回）传递 Metadata，双向都可以携带元数据。"
        },
        {
            id: "grpc-w4-1-q12",
            question: "大多数 API 调用应该使用哪种 RPC 模式？",
            options: [
                "Server Streaming",
                "Client Streaming",
                "Unary RPC",
                "Bidirectional Streaming"
            ],
            answer: 2,
            rationale: "大多数 API 调用是简单的请求-响应模式，Unary RPC 最为合适。流式 RPC 适用于特定场景（大数据传输、实时通信等）。"
        }
    ],
    "grpc-w4-2": [
        {
            id: "grpc-w4-2-q1",
            question: "gRPC Core Concepts 如何描述 Server Streaming RPC？",
            options: [
                "客户端发送消息流",
                "The client sends a request and gets a stream to read a sequence of messages back",
                "双向消息流",
                "单一请求单一响应"
            ],
            answer: 1,
            rationale: "gRPC Core Concepts 描述：'the client sends a request to the server and gets a stream to read a sequence of messages back'。"
        },
        {
            id: "grpc-w4-2-q2",
            question: "Client Streaming RPC 的定义是什么？",
            options: [
                "服务端发送消息流",
                "The client writes a sequence of messages and sends them to the server using a provided stream",
                "双向独立的消息流",
                "请求和响应都是单一消息"
            ],
            answer: 1,
            rationale: "gRPC Core Concepts 描述：'the client writes a sequence of messages and sends them to the server...using a provided stream'。"
        },
        {
            id: "grpc-w4-2-q3",
            question: "gRPC 流控制机制是如何工作的？",
            options: [
                "发送方自行控制发送速率",
                "As data is read on the receiving side, an acknowledgement is returned to the sender",
                "使用 TCP 的流控制",
                "不支持流控制"
            ],
            answer: 1,
            rationale: "Flow Control 文档指出：'As data is read on the receiving side, an acknowledgement is returned to the sender letting it know that the receiver has more capacity'。"
        },
        {
            id: "grpc-w4-2-q4",
            question: "当发送方发送过快时，gRPC 流控制会怎么做？",
            options: [
                "丢弃多余消息",
                "It pauses before returning from write calls",
                "抛出异常",
                "强制断开连接"
            ],
            answer: 1,
            rationale: "Flow Control 文档指出：当框架检测到发送过快时，'it pauses before returning from write calls, allowing the receiving end to catch up'。"
        },
        {
            id: "grpc-w4-2-q5",
            question: "Server Streaming 最适合的场景是？",
            options: [
                "提交简单表单",
                "批量文件上传",
                "返回大量数据（分页列表、日志流、事件推送）",
                "实时双向聊天"
            ],
            answer: 2,
            rationale: "Server Streaming 适合服务端需要返回大量数据的场景，如分页列表、日志流、事件推送等。客户端可以流式接收，减少内存占用。"
        },
        {
            id: "grpc-w4-2-q6",
            question: "Client Streaming 最适合的场景是？",
            options: [
                "查询单条记录",
                "批量上传（文件分块、批量写入）",
                "服务端推送通知",
                "获取配置信息"
            ],
            answer: 1,
            rationale: "Client Streaming 适合客户端需要发送大量数据的场景，如文件分块上传、批量数据写入等。服务端在接收完所有数据后返回结果。"
        },
        {
            id: "grpc-w4-2-q7",
            question: "gRPC 流中消息的顺序保证是什么？",
            options: [
                "不保证任何顺序",
                "Message order preserved in each direction",
                "只保证服务端到客户端的顺序",
                "只保证客户端到服务端的顺序"
            ],
            answer: 1,
            rationale: "gRPC 保证每个方向的消息顺序：'message order preserved in each direction'——发送顺序就是接收顺序。"
        },
        {
            id: "grpc-w4-2-q8",
            question: "流式调用中如何正确关闭发送流？",
            options: [
                "直接断开连接",
                "发送方调用 Close/CloseSend，接收方检测到 EOF",
                "不需要显式关闭",
                "发送特殊的结束消息"
            ],
            answer: 1,
            rationale: "发送方完成后需调用 Close（Go 的 CloseSend、Java 的 onCompleted），接收方通过检测 EOF/io.EOF 信号知道流已结束。"
        },
        {
            id: "grpc-w4-2-q9",
            question: "流式调用应用于 Unary 不适用的场景不包括？",
            options: [
                "传输大量数据",
                "实时推送事件",
                "查询单条记录",
                "批量上传文件"
            ],
            answer: 2,
            rationale: "查询单条记录是典型的 Unary RPC 场景。流式调用适用于传输大量数据、实时推送、批量操作等需要多消息传输的场景。"
        },
        {
            id: "grpc-w4-2-q10",
            question: "gRPC 流控制针对什么类型的 RPC？",
            options: [
                "只针对 Unary RPC",
                "只针对 streaming RPCs，不适用于 unary RPCs",
                "所有类型的 RPC",
                "只针对双向流"
            ],
            answer: 1,
            rationale: "Flow Control 文档指出：流控制'applies specifically to streaming RPCs, not unary ones'。Unary RPC 是单一消息，不需要流控制。"
        },
        {
            id: "grpc-w4-2-q11",
            question: "关于写入流的描述，以下哪项是正确的？",
            options: [
                "写入立即发送到网络",
                "Writing to a stream doesn't immediately send data over the network，它先传递给框架缓冲",
                "写入会阻塞直到对方确认",
                "写入必须等待对方响应"
            ],
            answer: 1,
            rationale: "Flow Control 文档指出：'writing to a stream doesn't immediately send data over the network. It has been passed to the framework which will now take care of the nitty gritty details of buffering'。"
        },
        {
            id: "grpc-w4-2-q12",
            question: "Server Streaming 与传统分页 API 相比的优势是？",
            options: [
                "分页 API 总是更好",
                "流式传输无需多次请求，减少延迟，适合大数据量",
                "两者没有区别",
                "流式传输只能用于小数据量"
            ],
            answer: 1,
            rationale: "流式传输无需多次请求-响应往返，减少网络延迟，客户端可以边接收边处理，适合大数据量场景。分页更简单，适合小数据量。"
        }
    ],
    "grpc-w4-3": [
        {
            id: "grpc-w4-3-q1",
            question: "gRPC Core Concepts 如何描述 Bidirectional Streaming RPC？",
            options: [
                "客户端发送单一请求，服务端返回消息流",
                "Both sides send a sequence of messages using a read-write stream",
                "客户端发送消息流，服务端返回单一响应",
                "请求和响应都是单一消息"
            ],
            answer: 1,
            rationale: "gRPC Core Concepts 描述：'both sides send a sequence of messages using a read-write stream'。"
        },
        {
            id: "grpc-w4-3-q2",
            question: "双向流的两个方向有什么特点？",
            options: [
                "必须交替发送消息",
                "With independent operation——独立操作，不需要等待对方响应",
                "服务端必须先响应",
                "客户端必须先发送完所有消息"
            ],
            answer: 1,
            rationale: "gRPC Core Concepts 指出双向流'with independent operation'——两个方向独立操作，不需要等待对方响应就可以发送消息。"
        },
        {
            id: "grpc-w4-3-q3",
            question: "Flow Control 文档警告的双向流死锁风险是什么？",
            options: [
                "使用异步调用会死锁",
                "Potential for a deadlock if both sides are doing synchronous reads and both try to do a lot of writing without doing any reads",
                "发送消息过多会死锁",
                "使用 metadata 会死锁"
            ],
            answer: 1,
            rationale: "Flow Control 文档警告：'potential for a deadlock if both the client and server are doing synchronous reads...and both try to do a lot of writing without doing any reads'。"
        },
        {
            id: "grpc-w4-3-q4",
            question: "双向流最适合的场景是？",
            options: [
                "查询单条数据",
                "批量文件上传",
                "实时聊天、游戏通信、双向数据同步",
                "定时报表生成"
            ],
            answer: 2,
            rationale: "双向流适合实时交互场景：聊天应用、实时协作、游戏通信、双向数据同步等需要全双工通信的场景。"
        },
        {
            id: "grpc-w4-3-q5",
            question: "关于流式调用的负载均衡，Performance 文档指出什么？",
            options: [
                "流式调用可以随时切换后端",
                "Streaming cannot be load-balanced once started",
                "负载均衡对流式调用无影响",
                "只有双向流不能负载均衡"
            ],
            answer: 1,
            rationale: "Performance 文档指出：'streaming cannot be load-balanced once started'——流一旦建立就无法中途切换后端，需要考虑连接粘性。"
        },
        {
            id: "grpc-w4-3-q6",
            question: "Performance 文档对 Python streaming RPC 有什么警告？",
            options: [
                "Python streaming 性能最好",
                "Streaming RPCs much slower than unary RPCs in Python",
                "Python 不支持 streaming",
                "Python streaming 只支持服务端流"
            ],
            answer: 1,
            rationale: "Performance 文档警告：Python 的'streaming RPCs much slower than unary RPCs due to extra threading requirements'——Python 不适合高性能流式场景。"
        },
        {
            id: "grpc-w4-3-q7",
            question: "在 Go 中实现双向流的并发读写通常使用什么机制？",
            options: [
                "单线程顺序处理",
                "两个 goroutine 分别处理 Send 和 Recv",
                "使用锁同步读写",
                "Go 不支持双向流"
            ],
            answer: 1,
            rationale: "Go 中双向流通常使用两个 goroutine 分别处理发送和接收，因为读写可以独立进行，并发处理提高效率。"
        },
        {
            id: "grpc-w4-3-q8",
            question: "双向流中任一方可以先结束自己的发送流吗？",
            options: [
                "不可以，必须同时结束",
                "可以，但结束后也不能接收对方消息",
                "可以，结束发送后仍可继续接收对方消息",
                "只有服务端可以先结束"
            ],
            answer: 2,
            rationale: "双向流的两个方向独立，任一方可以先结束自己的发送流（调用 CloseSend），但仍可以继续接收对方发送的消息直到对方也结束。"
        },
        {
            id: "grpc-w4-3-q9",
            question: "双向流的消息顺序保证是什么？",
            options: [
                "所有消息全局有序",
                "每个方向的消息保持顺序，但两个方向之间没有顺序保证",
                "不保证任何顺序",
                "只保证服务端消息的顺序"
            ],
            answer: 1,
            rationale: "双向流中每个方向的消息保持发送顺序，但两个方向之间没有顺序保证——客户端可能收到服务端消息的同时还在发送自己的消息。"
        },
        {
            id: "grpc-w4-3-q10",
            question: "如何避免双向流中的死锁？",
            options: [
                "只使用同步调用",
                "正确设计读写逻辑，确保不会在发送时阻塞接收",
                "限制消息数量",
                "使用更大的缓冲区"
            ],
            answer: 1,
            rationale: "避免死锁需要正确设计读写逻辑：使用并发读写（goroutine/线程）、避免同步读取时进行大量写入、确保及时消费接收缓冲区。"
        },
        {
            id: "grpc-w4-3-q11",
            question: "双向流相比 WebSocket 的主要优势是？",
            options: [
                "WebSocket 性能更好",
                "gRPC 双向流有强类型定义、原生支持多语言代码生成",
                "两者没有区别",
                "WebSocket 有更好的浏览器支持"
            ],
            answer: 1,
            rationale: "gRPC 双向流基于 Protocol Buffers 提供强类型定义和多语言代码生成，而 WebSocket 是通用的双向通信协议，需要自行处理序列化和类型定义。"
        },
        {
            id: "grpc-w4-3-q12",
            question: "Performance 文档对 gRPC streaming 优化的建议是？",
            options: [
                "总是使用 streaming 代替 unary",
                "Streaming 适合 long-lived logical flow of data，避免连续 RPC 初始化开销",
                "避免使用任何 streaming",
                "只在 Python 中使用 streaming"
            ],
            answer: 1,
            rationale: "Performance 文档指出 streaming 适合'long-lived logical flow of data from the client-to-server, server-to-client, or in both directions'，可以避免连续 RPC 初始化开销。"
        }
    ]
}
