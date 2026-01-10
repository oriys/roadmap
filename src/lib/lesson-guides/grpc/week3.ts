import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "grpc-w3-1": {
        lessonId: "grpc-w3-1",
        background: [
            "【服务定义语法】在 .proto 文件中使用 service 关键字定义服务，每个服务包含一组 RPC 方法。方法指定请求和响应消息类型，以及通信模式（unary/streaming）。",
            "【四种 RPC 模式】gRPC 支持：1) Unary（单一请求-响应）2) Server Streaming（服务端流）3) Client Streaming（客户端流）4) Bidirectional Streaming（双向流）。",
            "【stream 关键字】在请求或响应类型前加 stream 表示流式通信。server streaming 在响应前加 stream，client streaming 在请求前加 stream，双向流两边都加。",
            "【生成代码结构】protoc 生成服务端接口（需实现）和客户端 Stub（直接使用）。Go 生成 Server 接口和 Client 接口，Java 生成 ImplBase 基类和 Stub 类。",
            "【跨语言一致性】同一 .proto 文件可生成多种语言代码，保证跨语言调用的类型安全和协议一致性。这是微服务多语言架构的基础。"
        ],
        keyDifficulties: [
            "【方法签名设计】RPC 方法应该是细粒度操作而非粗粒度过程。每个方法应有明确的职责，请求/响应消息应只包含必要字段。",
            "【命名规范】服务和方法名使用 CamelCase，消息名使用 CamelCase，字段名使用 snake_case。遵循命名规范保证生成代码的可读性。",
            "【版本兼容】服务接口演进需要考虑向后兼容：新增方法安全，删除方法会破坏客户端，修改方法签名需谨慎。使用字段编号而非名称匹配保证兼容性。",
            "【错误设计】gRPC 使用状态码表示错误，应在服务设计时考虑错误场景。常见错误码：NOT_FOUND、INVALID_ARGUMENT、PERMISSION_DENIED 等。"
        ],
        handsOnPath: [
            "定义一个简单的 CRUD 服务：UserService 包含 CreateUser、GetUser、UpdateUser、DeleteUser 方法。",
            "使用 protoc 生成 Go/Java/Python 代码，观察生成的接口和 Stub 结构。",
            "定义流式方法：ListUsers（server streaming）返回用户列表流，UploadUsers（client streaming）批量上传用户。",
            "定义双向流方法：Chat 服务支持客户端和服务端互相发送消息。",
            "使用 buf lint 检查 proto 文件的规范性，修复 lint 警告。",
            "版本演进实验：向已有服务添加新方法，验证旧客户端仍能正常调用原有方法。"
        ],
        selfCheck: [
            "如何在 .proto 文件中定义一个 gRPC 服务？service 关键字的作用是什么？",
            "四种 RPC 模式如何用 .proto 语法表示？stream 关键字放在什么位置？",
            "protoc 为服务生成了哪些代码？服务端和客户端分别需要什么？",
            "设计 gRPC 服务接口时有哪些最佳实践？方法粒度如何把握？",
            "如何保证服务接口的向后兼容性？哪些变更是安全的？",
            "gRPC 服务和 REST API 在接口设计上有什么不同？"
        ],
        extensions: [
            "学习 Google API Design Guide，了解 Google 内部的 API 设计规范。",
            "研究 buf CLI 的 breaking change 检测功能，自动化兼容性检查。",
            "探索 gRPC reflection API，实现服务的自描述和动态调用。",
            "了解 gRPC 拦截器（Interceptor）如何在服务级别添加日志、认证等横切关注点。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/languages/go/quickstart/",
            "https://grpc.io/docs/languages/java/quickstart/",
            "https://grpc.io/docs/languages/python/quickstart/"
        ]
    },
    "grpc-w3-2": {
        lessonId: "grpc-w3-2",
        background: [
            "【Server 实现模式】服务端实现生成的接口（Go）或继承基类（Java/Python）。每个 RPC 方法是一个函数，接收请求参数，返回响应或通过 StreamObserver 发送。",
            "【Go Server 签名】Unary：Foo(ctx, *Request) (*Response, error)；Server Streaming：Foo(*Request, grpc.ServerStreamingServer) error；流式方法通过 Send() 发送消息。",
            "【Java Server 签名】方法接收 Request 和 StreamObserver<Response>，通过 onNext() 发送响应，onCompleted() 结束调用，onError() 报告错误。",
            "【Python Server 签名】继承 Servicer 基类，实现方法。Unary 方法直接返回响应对象，streaming 方法使用 yield 生成响应序列。",
            "【Server 启动】创建 Server 实例，注册服务实现，绑定监听地址，调用 Start() 开始服务。通常使用 grpc.NewServer()（Go）或 grpc.server()（Python）。"
        ],
        keyDifficulties: [
            "【Context 传递】Go 的每个 RPC 方法都接收 context.Context，包含 deadline、取消信号、metadata 等信息。应正确传递 context 到下游调用。",
            "【错误处理】使用 status 包构造 gRPC 错误：status.Error(codes.NotFound, \"resource not found\")。Java 使用 Status 类，Python 使用 context.abort()。",
            "【并发处理】gRPC Server 默认并发处理请求。服务实现必须是线程安全的，避免共享可变状态或使用适当的同步机制。",
            "【流式方法实现】streaming 方法需要循环调用 Recv()（client streaming）或 Send()（server streaming）。注意检查 EOF/完成信号。"
        ],
        handsOnPath: [
            "实现简单的 Unary 服务：Greeter 服务的 SayHello 方法，返回问候语。",
            "添加错误处理：GetUser 方法在用户不存在时返回 NOT_FOUND 错误。",
            "实现 Server Streaming：ListUsers 方法逐条返回用户列表，使用 Send() 发送每条记录。",
            "实现 Client Streaming：UploadUsers 方法接收用户流，循环 Recv() 直到 EOF，返回处理结果。",
            "配置 Server 选项：设置最大消息大小、keepalive 参数、拦截器等。",
            "实现优雅关闭：监听系统信号，调用 GracefulStop() 等待正在处理的请求完成。"
        ],
        selfCheck: [
            "Go/Java/Python 中 gRPC Server 方法的签名分别是什么？",
            "如何在服务实现中返回 gRPC 错误？常用的错误码有哪些？",
            "Context 在 gRPC 中的作用是什么？包含哪些信息？",
            "Server Streaming 和 Client Streaming 的实现有什么不同？",
            "gRPC Server 如何处理并发请求？实现时需要注意什么？",
            "如何实现 gRPC Server 的优雅关闭？"
        ],
        extensions: [
            "学习 gRPC 拦截器（Interceptor/Middleware）的实现，添加日志、监控、认证等功能。",
            "研究 gRPC Health Checking Protocol，实现标准的健康检查接口。",
            "探索 gRPC 的 Compression 支持，为大消息启用压缩。",
            "了解 gRPC 的 Connection Multiplexing，理解连接和流的关系。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/languages/go/basics/",
            "https://grpc.io/docs/languages/java/basics/",
            "https://grpc.io/docs/languages/python/basics/"
        ]
    },
    "grpc-w3-3": {
        lessonId: "grpc-w3-3",
        background: [
            "【Client Stub】protoc 生成的客户端 Stub 封装了网络通信细节。调用 Stub 方法就像调用本地函数，框架负责序列化、发送、接收、反序列化。",
            "【Channel 创建】客户端首先创建 Channel（连接）到服务端地址。Go 使用 grpc.NewClient()，Java 使用 ManagedChannelBuilder，Python 使用 grpc.insecure_channel()。",
            "【Stub 类型】Go 生成单一 Client 接口；Java 生成 blocking stub（同步）和 async stub（异步）；Python 的 stub 方法支持同步和异步调用。",
            "【调用选项】可以为单次调用设置选项：超时/deadline、metadata、压缩方式等。Go 使用 CallOption，Java 使用 CallOptions，Python 使用关键字参数。",
            "【Channel 复用】Channel 应该被复用而非每次调用创建。Channel 是线程安全的，可以在多个 goroutine/线程中共享使用。"
        ],
        keyDifficulties: [
            "【连接管理】Channel 维护到服务端的连接池。理解 Channel 的状态（IDLE、CONNECTING、READY、TRANSIENT_FAILURE）对调试连接问题很重要。",
            "【错误处理】调用失败时捕获 StatusRuntimeException（Java）或检查 error（Go）。从错误中提取状态码和详细信息进行相应处理。",
            "【流式客户端】streaming 调用返回流对象，通过 Send()/Recv() 收发消息。注意检查流的结束信号和错误。",
            "【Deadline 传播】客户端设置的 deadline 应该传播到下游服务。链式调用时需要计算剩余时间，避免级联超时。"
        ],
        handsOnPath: [
            "创建简单客户端：连接到 Greeter 服务，调用 SayHello 方法，打印响应。",
            "设置调用超时：使用 context.WithTimeout()（Go）或 deadlineAfter()（Java）限制调用时间。",
            "处理调用错误：捕获错误，检查状态码，根据错误类型决定重试或报错。",
            "实现 Server Streaming 客户端：循环调用 Recv() 接收消息流，直到返回 EOF。",
            "实现 Client Streaming 客户端：循环调用 Send() 发送消息，最后调用 CloseAndRecv() 获取响应。",
            "实现双向 Streaming 客户端：创建两个 goroutine 分别处理发送和接收。",
            "Channel 配置：设置 keepalive、重试策略、负载均衡策略等高级选项。"
        ],
        selfCheck: [
            "gRPC 客户端的 Channel 和 Stub 分别是什么？如何创建和使用？",
            "Java 的 blocking stub 和 async stub 有什么区别？各自的使用场景是什么？",
            "如何为 gRPC 调用设置超时？Deadline 和 Timeout 的区别是什么？",
            "客户端如何处理 gRPC 调用错误？如何获取错误码和详细信息？",
            "为什么应该复用 Channel 而不是每次调用创建新的？",
            "流式客户端调用与 Unary 调用的代码结构有什么不同？"
        ],
        extensions: [
            "学习客户端负载均衡策略：round_robin、pick_first、以及自定义策略。",
            "研究 gRPC 的重试机制：配置重试策略、可重试状态码、退避算法。",
            "探索客户端拦截器，实现请求日志、监控指标收集。",
            "了解 gRPC 名称解析（Name Resolution）机制，与服务发现系统集成。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/languages/go/basics/",
            "https://grpc.io/docs/languages/go/generated-code/",
            "https://grpc.io/docs/languages/"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "grpc-w3-1": [
        {
            id: "grpc-w3-1-q1",
            question: "在 .proto 文件中如何定义 Server Streaming RPC？",
            options: [
                "在请求类型前加 stream 关键字",
                "在响应类型前加 stream 关键字",
                "在方法名前加 stream 关键字",
                "在服务名前加 stream 关键字"
            ],
            answer: 1,
            rationale: "gRPC 文档指出：'you specify a server-side streaming method by placing the stream keyword before the response type'。"
        },
        {
            id: "grpc-w3-1-q2",
            question: "gRPC 支持的四种 RPC 模式不包括？",
            options: [
                "Unary RPC",
                "Server Streaming RPC",
                "Publish-Subscribe RPC",
                "Bidirectional Streaming RPC"
            ],
            answer: 2,
            rationale: "gRPC 支持四种模式：Unary、Server Streaming、Client Streaming、Bidirectional Streaming。Publish-Subscribe 不是 gRPC 原生模式。"
        },
        {
            id: "grpc-w3-1-q3",
            question: "gRPC 双向流（Bidirectional Streaming）的特点是什么？",
            options: [
                "只有服务端可以发送消息",
                "客户端和服务端必须交替发送消息",
                "both sides send a sequence of messages using a read-write stream，独立操作",
                "消息必须按严格顺序到达"
            ],
            answer: 2,
            rationale: "gRPC Core Concepts 文档指出：'both sides send a sequence of messages using a read-write stream' with independent operation。"
        },
        {
            id: "grpc-w3-1-q4",
            question: "protoc 为 gRPC 服务生成了哪些代码？",
            options: [
                "只生成服务端代码",
                "只生成客户端代码",
                "生成服务端接口和客户端 Stub",
                "只生成消息序列化代码"
            ],
            answer: 2,
            rationale: "gRPC 文档说明 protoc 生成'server and client interfaces'或'base service class and stub classes'，服务端实现接口，客户端使用 Stub。"
        },
        {
            id: "grpc-w3-1-q5",
            question: "Client Streaming RPC 如何在 .proto 中定义？",
            options: [
                "在响应类型前加 stream",
                "在请求类型前加 stream",
                "请求和响应都加 stream",
                "不需要 stream 关键字"
            ],
            answer: 1,
            rationale: "gRPC 文档指出 client-side streaming'The method uses the stream keyword before the request type'。"
        },
        {
            id: "grpc-w3-1-q6",
            question: "以下哪个不是 gRPC 服务定义的最佳实践？",
            options: [
                "使用 CamelCase 命名服务和方法",
                "每个方法应有明确的单一职责",
                "将所有功能放在一个大方法中",
                "考虑向后兼容性"
            ],
            answer: 2,
            rationale: "gRPC 服务设计应遵循细粒度原则，每个方法有明确职责。将所有功能放在一个大方法中违反了这个原则。"
        },
        {
            id: "grpc-w3-1-q7",
            question: "关于 gRPC 服务的版本兼容性，以下哪项是正确的？",
            options: [
                "删除方法不会影响现有客户端",
                "新增方法可能破坏现有客户端",
                "新增方法是安全的，删除方法会破坏客户端",
                "任何修改都会破坏兼容性"
            ],
            answer: 2,
            rationale: "gRPC 使用字段编号而非名称匹配，新增方法/字段是安全的，删除会破坏依赖它的客户端。"
        },
        {
            id: "grpc-w3-1-q8",
            question: "gRPC RouteGuide 示例服务展示了哪几种 RPC 模式？",
            options: [
                "只有 Unary",
                "Unary 和 Server Streaming",
                "所有四种 RPC 模式",
                "只有 Streaming 模式"
            ],
            answer: 2,
            rationale: "gRPC Basics Tutorial 中的 RouteGuide 服务展示了全部四种 RPC 模式：Simple RPC、Server-side streaming、Client-side streaming、Bidirectional streaming。"
        },
        {
            id: "grpc-w3-1-q9",
            question: "gRPC 服务定义与 REST API 的主要区别是什么？",
            options: [
                "gRPC 只支持 GET 和 POST",
                "gRPC 使用强类型的方法定义而非 URL + HTTP 动词",
                "REST API 性能更好",
                "gRPC 不支持 JSON"
            ],
            answer: 1,
            rationale: "gRPC 通过 .proto 文件定义强类型的方法和消息，而 REST 使用 URL 路径和 HTTP 动词的组合，类型定义相对松散。"
        },
        {
            id: "grpc-w3-1-q10",
            question: "Simple RPC（Unary RPC）的特点是什么？",
            options: [
                "客户端发送多条消息",
                "服务端返回消息流",
                "The client sends a single request and gets a single response back",
                "支持取消操作"
            ],
            answer: 2,
            rationale: "gRPC Core Concepts 描述 Unary RPC：'the client sends a single request to the server and gets a single response back, just like a normal function call'。"
        },
        {
            id: "grpc-w3-1-q11",
            question: "在 gRPC 服务设计中，错误应该如何处理？",
            options: [
                "总是返回 HTTP 500",
                "使用 gRPC 状态码表示不同类型的错误",
                "在响应消息中包含错误字段",
                "错误不需要特别处理"
            ],
            answer: 1,
            rationale: "gRPC 定义了标准状态码（如 NOT_FOUND、INVALID_ARGUMENT、PERMISSION_DENIED），应使用这些状态码表示不同类型的错误。"
        },
        {
            id: "grpc-w3-1-q12",
            question: ".proto 文件中的命名规范是什么？",
            options: [
                "全部使用小写字母",
                "服务/方法用 CamelCase，字段用 snake_case",
                "全部使用 snake_case",
                "没有命名规范要求"
            ],
            answer: 1,
            rationale: "Protocol Buffers 风格指南：服务名、方法名、消息名使用 CamelCase，字段名使用 snake_case（如 user_name）。"
        }
    ],
    "grpc-w3-2": [
        {
            id: "grpc-w3-2-q1",
            question: "Go 语言 gRPC Server Streaming 方法的签名是什么？",
            options: [
                "Foo(ctx context.Context, req *Request) (*Response, error)",
                "Foo(*Request, grpc.ServerStreamingServer[*Response]) error",
                "Foo(stream grpc.Stream) error",
                "Foo() (*Response, error)"
            ],
            answer: 1,
            rationale: "Go Generated Code 文档指出 Server-streaming 签名为：'Foo(*RequestMsg, grpc.ServerStreamingServer[*ResponseMsg]) error'。"
        },
        {
            id: "grpc-w3-2-q2",
            question: "Java gRPC 服务端如何发送响应给客户端？",
            options: [
                "直接 return 响应对象",
                "通过 StreamObserver 的 onNext() 发送响应，onCompleted() 结束",
                "写入 OutputStream",
                "调用 response.send()"
            ],
            answer: 1,
            rationale: "gRPC Java Basics 说明：'Server methods use StreamObserver for handling responses...methods call responseObserver.onNext() with data and onCompleted() to finish'。"
        },
        {
            id: "grpc-w3-2-q3",
            question: "Python gRPC 服务端实现 streaming 方法使用什么机制？",
            options: [
                "返回列表",
                "使用 yield 生成响应序列",
                "调用 send() 方法",
                "返回迭代器对象"
            ],
            answer: 1,
            rationale: "gRPC Python Basics 指出：'Streaming methods use yield for responses'，Python 使用生成器语法实现流式响应。"
        },
        {
            id: "grpc-w3-2-q4",
            question: "如何在 Go gRPC 服务实现中返回 NOT_FOUND 错误？",
            options: [
                "return nil, errors.New(\"not found\")",
                "return nil, status.Error(codes.NotFound, \"resource not found\")",
                "panic(\"not found\")",
                "return notFoundResponse, nil"
            ],
            answer: 1,
            rationale: "gRPC 错误处理使用 status 包：status.Error(codes.NotFound, \"resource not found\")，这样客户端可以正确识别错误类型。"
        },
        {
            id: "grpc-w3-2-q5",
            question: "gRPC Go 服务方法的 context.Context 参数包含什么信息？",
            options: [
                "只有请求 ID",
                "deadline、取消信号、metadata 等信息",
                "只有认证信息",
                "请求体内容"
            ],
            answer: 1,
            rationale: "Context 包含 deadline（截止时间）、cancellation signal（取消信号）、metadata（元数据）等 RPC 相关信息，是 Go gRPC 的重要参数。"
        },
        {
            id: "grpc-w3-2-q6",
            question: "gRPC Server 如何处理并发请求？",
            options: [
                "串行处理，一次一个请求",
                "默认并发处理，服务实现必须是线程安全的",
                "需要手动配置才能并发",
                "每个请求创建新的服务实例"
            ],
            answer: 1,
            rationale: "gRPC Server 默认并发处理请求，服务实现必须是线程安全的，避免共享可变状态或使用适当的同步机制。"
        },
        {
            id: "grpc-w3-2-q7",
            question: "Go gRPC Client Streaming 服务端如何读取客户端消息？",
            options: [
                "从参数中直接获取消息列表",
                "循环调用 stream.Recv() 直到返回 io.EOF",
                "监听 channel",
                "调用 stream.ReadAll()"
            ],
            answer: 1,
            rationale: "gRPC Go Basics 说明：'servers receive special stream objects enabling message transmission...methods using Recv() to read client messages'，循环调用直到 EOF。"
        },
        {
            id: "grpc-w3-2-q8",
            question: "Python gRPC 服务端如何启动？",
            options: [
                "直接运行 .proto 文件",
                "创建 server、注册 servicer、add_insecure_port、start()",
                "使用 flask.run()",
                "调用 grpc.serve()"
            ],
            answer: 1,
            rationale: "gRPC Python Basics 示例：创建 grpc.server()，注册 add_*Servicer_to_server()，add_insecure_port()，最后 server.start()。"
        },
        {
            id: "grpc-w3-2-q9",
            question: "Java gRPC 服务端继承什么基类？",
            options: [
                "GrpcService",
                "AbstractService",
                "*Grpc.*ImplBase（如 GreeterGrpc.GreeterImplBase）",
                "RpcServiceBase"
            ],
            answer: 2,
            rationale: "gRPC Java Quickstart 指出：'Developers extend GreeterGrpc.GreeterImplBase and override RPC methods'来实现服务端。"
        },
        {
            id: "grpc-w3-2-q10",
            question: "Go gRPC Server Streaming 方法如何发送消息？",
            options: [
                "return 多个响应",
                "调用 stream.Send(msg) 发送每条消息",
                "写入返回的 channel",
                "使用 yield"
            ],
            answer: 1,
            rationale: "Go Generated Code 文档说明 Server Streaming 使用'Send()' 发送消息，方法签名中的 ServerStreamingServer 接口提供 Send() 方法。"
        },
        {
            id: "grpc-w3-2-q11",
            question: "实现 gRPC Server 的优雅关闭应该怎么做？",
            options: [
                "直接调用 os.Exit()",
                "监听系统信号，调用 GracefulStop() 等待正在处理的请求完成",
                "关闭监听端口即可",
                "gRPC Server 自动处理关闭"
            ],
            answer: 1,
            rationale: "优雅关闭需要监听 SIGINT/SIGTERM 等信号，调用 GracefulStop()（Go）或 shutdown()（Java/Python）等待正在处理的请求完成后再退出。"
        },
        {
            id: "grpc-w3-2-q12",
            question: "Python gRPC 服务端使用什么并发模型？",
            options: [
                "单线程同步模型",
                "ThreadPoolExecutor 线程池",
                "asyncio 协程",
                "多进程模型"
            ],
            answer: 1,
            rationale: "gRPC Python Basics 示例：'server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))'，使用线程池处理并发请求。"
        }
    ],
    "grpc-w3-3": [
        {
            id: "grpc-w3-3-q1",
            question: "Go gRPC 客户端如何创建连接？",
            options: [
                "grpc.Dial()",
                "grpc.NewClient()",
                "grpc.Connect()",
                "new GrpcClient()"
            ],
            answer: 1,
            rationale: "gRPC Go Basics 指出：'Clients create channels via grpc.NewClient()'，这是推荐的连接创建方式。"
        },
        {
            id: "grpc-w3-3-q2",
            question: "Java gRPC 提供了哪两种类型的 Stub？",
            options: [
                "sync stub 和 async stub",
                "blocking stub 和 asynchronous stub",
                "simple stub 和 streaming stub",
                "local stub 和 remote stub"
            ],
            answer: 1,
            rationale: "gRPC Java Basics 说明：'generate blocking or asynchronous stubs. Blocking stubs work like local method calls; asynchronous stubs handle streaming through StreamObserver callbacks'。"
        },
        {
            id: "grpc-w3-3-q3",
            question: "关于 gRPC Channel 复用，以下哪项是正确的？",
            options: [
                "每次调用应创建新的 Channel",
                "Channel 不是线程安全的",
                "Channel 应该被复用，它是线程安全的",
                "Channel 只能用于一次调用"
            ],
            answer: 2,
            rationale: "gRPC Performance 文档强调：'Always re-use stubs and channels when possible'，Channel 是线程安全的，应该复用。"
        },
        {
            id: "grpc-w3-3-q4",
            question: "gRPC Go Unary 客户端方法的签名是什么？",
            options: [
                "Foo() (*Response, error)",
                "(ctx context.Context, in *Request, opts ...grpc.CallOption) (*Response, error)",
                "Foo(req *Request) *Response",
                "Foo(stream grpc.Stream) error"
            ],
            answer: 1,
            rationale: "Go Generated Code 文档指出 Unary 客户端签名：'(ctx context.Context, in *RequestMsg, opts ...grpc.CallOption) (*ResponseMsg, error)'。"
        },
        {
            id: "grpc-w3-3-q5",
            question: "Java gRPC 客户端调用失败时抛出什么异常？",
            options: [
                "IOException",
                "StatusRuntimeException",
                "RpcException",
                "GrpcException"
            ],
            answer: 1,
            rationale: "gRPC Java Quickstart 指出客户端需要'error handling for StatusRuntimeException when RPCs fail'。"
        },
        {
            id: "grpc-w3-3-q6",
            question: "gRPC 流式调用的特点是什么？",
            options: [
                "individual streams do not support concurrent reads or concurrent writes",
                "流支持并发读写",
                "流只能单向传输",
                "流不需要关闭"
            ],
            answer: 0,
            rationale: "Go Generated Code 文档指出：'individual streams do not support concurrent reads or concurrent writes' but reads safely operate concurrently with writes。"
        },
        {
            id: "grpc-w3-3-q7",
            question: "Go gRPC Server Streaming 客户端如何接收消息？",
            options: [
                "调用返回所有消息的切片",
                "返回 grpc.ServerStreamingClient，循环调用 Recv() 直到返回 io.EOF",
                "注册回调函数",
                "监听 channel"
            ],
            answer: 1,
            rationale: "Go Generated Code 指出 Server-streaming 返回'grpc.ServerStreamingClient[*ResponseMsg]'，客户端循环调用 Recv() 接收消息。"
        },
        {
            id: "grpc-w3-3-q8",
            question: "Python gRPC 客户端如何创建 channel？",
            options: [
                "grpc.channel()",
                "grpc.insecure_channel() 或 grpc.secure_channel()",
                "GrpcChannel()",
                "grpc.connect()"
            ],
            answer: 1,
            rationale: "gRPC Python Basics 示例使用 grpc.insecure_channel() 创建不安全连接，生产环境应使用 grpc.secure_channel() 启用 TLS。"
        },
        {
            id: "grpc-w3-3-q9",
            question: "Python gRPC response-streaming 客户端调用返回什么？",
            options: [
                "响应列表",
                "单个响应对象",
                "可迭代的响应对象（iterator）",
                "Future 对象"
            ],
            answer: 2,
            rationale: "gRPC Python Basics 指出：'Response-streaming calls return iterators'，客户端可以迭代接收响应。"
        },
        {
            id: "grpc-w3-3-q10",
            question: "Go gRPC Client Streaming 客户端如何发送消息和接收响应？",
            options: [
                "先发送所有消息，然后一次性接收响应",
                "循环调用 Send() 发送消息，最后调用 CloseAndRecv() 获取响应",
                "使用 SendAndRecv() 同时操作",
                "每次 Send() 后立即 Recv()"
            ],
            answer: 1,
            rationale: "Go gRPC Client Streaming 使用 ClientStreamingClient 接口，循环 Send() 发送消息，完成后调用 CloseAndRecv() 关闭发送流并接收响应。"
        },
        {
            id: "grpc-w3-3-q11",
            question: "如何为 Go gRPC 调用设置超时？",
            options: [
                "在 Stub 上设置 timeout 属性",
                "使用 context.WithTimeout() 或 context.WithDeadline() 创建带超时的 context",
                "在 Channel 创建时设置",
                "gRPC 不支持超时"
            ],
            answer: 1,
            rationale: "Go gRPC 使用 context 机制传递超时，通过 context.WithTimeout() 或 context.WithDeadline() 创建带超时的 context，传递给 RPC 方法。"
        },
        {
            id: "grpc-w3-3-q12",
            question: "gRPC 客户端负载均衡的常见策略不包括？",
            options: [
                "round_robin",
                "pick_first",
                "least_connections",
                "自定义策略"
            ],
            answer: 2,
            rationale: "gRPC 内置支持 round_robin、pick_first 等策略，也支持自定义策略。least_connections 需要额外实现，不是内置策略。"
        }
    ]
}
