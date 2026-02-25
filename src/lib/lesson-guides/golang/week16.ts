import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week16Guides: Record<string, LessonGuide> = {
    "go-w16-1": {
        lessonId: "go-w16-1",
        background: [
            "【net/http】Go 标准库提供完整的 HTTP 服务器和客户端。",
            "【http.HandleFunc】注册路由处理函数。",
            "【http.ListenAndServe】启动 HTTP 服务器。"
        ],
        keyDifficulties: ["【Handler 接口】实现 ServeHTTP 方法即可。", "【中间件】通过函数包装实现中间件模式。"],
        handsOnPath: ["创建简单 HTTP 服务器", "添加多个路由", "实现中间件"],
        selfCheck: ["http.Handler 接口是什么？", "如何添加中间件？"],
        extensions: ["学习 http.Server 配置选项"],
        sourceUrls: ["https://gobyexample.com/http-servers", "https://gobyexample.com/http-clients", "https://pkg.go.dev/net/http"]
    },
    "go-w16-2": {
        lessonId: "go-w16-2",
        background: [
            "【Gin】高性能 Web 框架，丰富的中间件生态。",
            "【Echo】简洁 API，内置验证和绑定。",
            "【Fiber】Express 风格，基于 fasthttp。"
        ],
        keyDifficulties: ["【框架选择】根据项目需求选择合适框架。", "【标准库够用】很多场景标准库足够。"],
        handsOnPath: ["使用 Gin 创建 REST API", "添加中间件", "处理 JSON 请求响应"],
        selfCheck: ["Gin 的路由语法？", "何时需要框架？"],
        extensions: ["学习框架性能对比"],
        sourceUrls: ["https://gin-gonic.com/docs/", "https://echo.labstack.com/", "https://docs.gofiber.io/"]
    },
    "go-w16-3": {
        lessonId: "go-w16-3",
        background: [
            "【gRPC】高性能 RPC 框架，使用 Protocol Buffers。",
            "【protoc】Protocol Buffers 编译器生成 Go 代码。",
            "【流式 RPC】支持服务端流、客户端流、双向流。"
        ],
        keyDifficulties: ["【proto 文件】需要定义 .proto 文件。", "【代码生成】需要安装 protoc 和 Go 插件。"],
        handsOnPath: ["定义 proto 文件", "生成 Go 代码", "实现 gRPC 服务"],
        selfCheck: ["gRPC 相比 REST 的优势？", "流式 RPC 的场景？"],
        extensions: ["学习 gRPC 拦截器"],
        sourceUrls: ["https://grpc.io/docs/languages/go/quickstart/", "https://protobuf.dev/getting-started/gotutorial/", "https://grpc.io/docs/guides/performance/"]
    }
}

export const week16Quizzes: Record<string, QuizQuestion[]> = {
    "go-w16-1": [
        { id: "go-w16-1-q1", question: "http.Handler 接口有什么方法？", options: ["Handle()", "ServeHTTP(ResponseWriter, *Request)", "Listen()", "Serve()"], answer: 1, rationale: "Handler 接口只有 ServeHTTP(ResponseWriter, *Request) 方法。" },
        { id: "go-w16-1-q2", question: "http.HandleFunc 的作用是什么？", options: ["创建客户端", "注册路由处理函数", "启动服务器", "解析请求"], answer: 1, rationale: "HandleFunc 将一个函数注册为指定路径的 HTTP 处理器。" },
        { id: "go-w16-1-q3", question: "Go 1.22 对 net/http 路由做了什么改进？", options: ["移除路由功能", "支持方法匹配和路径参数", "引入中间件", "支持 WebSocket"], answer: 1, rationale: "Go 1.22 增强了默认路由器，支持 HTTP 方法匹配和路径参数提取。" }
    ],
    "go-w16-2": [
        { id: "go-w16-2-q1", question: "Gin 框架的主要特点是什么？", options: ["最简单", "高性能，丰富的中间件生态", "官方框架", "无依赖"], answer: 1, rationale: "Gin 以高性能著称，有丰富的中间件和验证功能。" },
        { id: "go-w16-2-q2", question: "Echo 框架与 Gin 相比的主要区别是什么？", options: ["更慢", "更注重 API 设计和灵活性", "不支持中间件", "只支持 JSON"], answer: 1, rationale: "Echo 注重 API 设计的简洁性和扩展灵活性，两者性能相当。" },
        { id: "go-w16-2-q3", question: "选择 Web 框架时最重要的考虑因素是什么？", options: ["Star 数量最多", "团队熟悉度和项目需求", "最新发布的", "代码行数最少"], answer: 1, rationale: "选择框架应优先考虑团队熟悉度、社区活跃度和项目实际需求。" }
    ],
    "go-w16-3": [
        { id: "go-w16-3-q1", question: "gRPC 使用什么序列化格式？", options: ["JSON", "XML", "Protocol Buffers", "YAML"], answer: 2, rationale: "gRPC 默认使用 Protocol Buffers 进行二进制序列化。" },
        { id: "go-w16-3-q2", question: "gRPC 相比 REST 的主要优势是什么？", options: ["更简单", "更高性能和强类型契约", "更好的浏览器支持", "无需定义接口"], answer: 1, rationale: "gRPC 使用 HTTP/2 和二进制序列化，性能更高，且通过 proto 文件定义强类型契约。" },
        { id: "go-w16-3-q3", question: "protoc 工具的作用是什么？", options: ["运行 gRPC 服务", "将 .proto 文件编译为 Go 代码", "测试 gRPC 接口", "部署服务"], answer: 1, rationale: "protoc 是 Protocol Buffers 编译器，将 .proto 定义文件生成对应语言的代码。" }
    ]
}
