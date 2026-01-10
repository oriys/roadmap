import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "grpc-w1-1": {
        lessonId: "grpc-w1-1",
        background: [
            "【RPC 核心理念】gRPC 官方文档：'a client application can directly call a method on a server application on a different machine as if it were a local object'——远程调用像本地调用一样透明，是分布式系统的基础抽象。",
            "【Protocol Buffers 默认】gRPC 使用 Protocol Buffers 作为默认的接口定义语言（IDL）和序列化机制。官方推荐使用 proto3 版本以获得更广泛的语言支持和兼容性。",
            "【多语言支持】gRPC 支持 Java、Go、Python、Ruby、C++、C#、Dart、Node.js、PHP、Objective-C、Swift 等多种语言，实现真正的跨语言微服务通信。",
            "【四种 RPC 模式】gRPC 支持四种通信模式：Unary（一元）、Server Streaming（服务端流）、Client Streaming（客户端流）、Bidirectional Streaming（双向流），满足不同场景需求。",
            "【CNCF 项目】gRPC 是 CNCF（云原生计算基金会）项目，被 Google、Netflix、Square、Docker、CoreOS 等公司广泛使用，是云原生生态的重要组成部分。"
        ],
        keyDifficulties: [
            "【Stub 概念】客户端通过 Stub（存根）调用远程方法，Stub 封装了网络通信细节。理解 Stub 是同步阻塞还是异步非阻塞对性能调优至关重要。",
            "【Deadline/Timeout 机制】gRPC 的 Deadline 指定 RPC 必须完成的绝对时间点，不同于 Timeout（相对时长）。服务端可查询剩余时间决定是否继续处理。",
            "【Metadata 传递】Metadata 是 RPC 调用的键值对元数据，类似 HTTP Header。Key 不区分大小写，二进制值的 Key 必须以 '-bin' 后缀结尾。",
            "【Channel 状态管理】Channel 是到服务端的连接抽象，有 connected、idle 等状态。理解 Channel 的生命周期对连接池管理和负载均衡至关重要。"
        ],
        handsOnPath: [
            "安装 gRPC 和 Protocol Buffers：根据你的主语言（Go/Java/Python）安装对应的 gRPC 库和 protoc 编译器。",
            "克隆官方示例仓库，运行 helloworld 示例：启动 server，用 client 调用，观察请求响应流程。",
            "使用 grpcurl 或 grpc_cli 工具手动调用 gRPC 服务，体验命令行交互方式。",
            "修改 helloworld.proto，添加新字段或新方法，重新生成代码并测试，理解 proto 文件与代码的关系。",
            "使用 Wireshark 或 tcpdump 抓包观察 gRPC 流量，确认使用的是 HTTP/2 协议。"
        ],
        selfCheck: [
            "gRPC 的名称代表什么？它解决了分布式系统中的什么问题？",
            "gRPC 支持的四种 RPC 模式分别是什么？各自适用于什么场景？",
            "Deadline 和 Timeout 有什么区别？为什么 gRPC 推荐使用 Deadline？",
            "什么是 Stub？阻塞 Stub 和异步 Stub 的区别是什么？",
            "gRPC Metadata 的 Key 命名有什么规则？传递二进制数据时要注意什么？",
            "列举至少三家使用 gRPC 的知名公司。"
        ],
        extensions: [
            "阅读 gRPC 官方博客，了解 gRPC 的设计决策和演进历史。",
            "探索 gRPC-Web，了解如何在浏览器中使用 gRPC（需要代理转换）。",
            "研究 gRPC 与 Service Mesh（如 Istio、Linkerd）的集成方式。",
            "了解 gRPC 的 xDS API，这是 Envoy 代理和 gRPC 无代理负载均衡的基础。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/what-is-grpc/introduction/",
            "https://grpc.io/docs/what-is-grpc/core-concepts/",
            "https://grpc.io/docs/what-is-grpc/faq/"
        ]
    },
    "grpc-w1-2": {
        lessonId: "grpc-w1-2",
        background: [
            "【协议对比】REST 基于 HTTP/1.1，每次请求新建 TCP 连接；gRPC 基于 HTTP/2，使用持久连接和多路复用。gRPC 传输速度比 REST 快 7-10 倍。",
            "【序列化效率】REST 通常使用 JSON（人类可读但体积大）；gRPC 使用 Protocol Buffers（二进制格式，序列化/反序列化速度远超 JSON）。",
            "【契约定义】gRPC 通过 .proto 文件提供'strict contract definition'，消除请求/响应结构的歧义；REST 依赖 OpenAPI/Swagger 等第三方工具。",
            "【代码生成】gRPC 原生支持多语言代码生成，而 REST 需要 Swagger Codegen 等额外工具。gRPC 生成的代码类型安全，编译期发现错误。",
            "【流式支持】gRPC 原生支持双向流式通信，适合实时应用；REST 需要 WebSocket 或 SSE 等额外技术实现类似功能。"
        ],
        keyDifficulties: [
            "【浏览器兼容性】gRPC 不能直接在浏览器中使用（需要 gRPC-Web 代理），而 REST 天然支持浏览器。公开 API 通常选择 REST。",
            "【调试难度】gRPC 使用二进制格式，不如 JSON 直观可读。需要专门工具（grpcurl、BloomRPC）才能方便调试。",
            "【负载均衡挑战】gRPC 的持久连接使传统 L4 负载均衡失效，需要 L7 负载均衡或客户端负载均衡（如 gRPC 的 round-robin 策略）。",
            "【学习曲线】gRPC 需要学习 Protocol Buffers 语法、理解 HTTP/2 特性、掌握流式编程模型，入门门槛高于 REST。"
        ],
        handsOnPath: [
            "用同样的数据结构分别实现一个 REST API 和 gRPC 服务，对比代码量和开发体验。",
            "使用 ab 或 wrk 对 REST 和 gRPC 服务进行压测，对比吞吐量和延迟。",
            "用 JSON 和 Protocol Buffers 序列化同样的数据，对比序列化后的大小和序列化/反序列化耗时。",
            "尝试在浏览器中直接调用 gRPC 服务，理解为什么失败；然后部署 gRPC-Web 代理，成功调用。",
            "实现一个聊天室场景：分别用 REST+WebSocket 和 gRPC 双向流实现，对比代码复杂度。",
            "配置 Nginx 或 Envoy 对 gRPC 服务进行 L7 负载均衡，观察连接分布。"
        ],
        selfCheck: [
            "gRPC 使用什么协议？相比 HTTP/1.1 有哪些优势？",
            "为什么 gRPC 比 REST 更快？从协议层和序列化层分别分析。",
            "什么场景适合用 gRPC？什么场景应该坚持用 REST？",
            "gRPC 在负载均衡方面有什么挑战？如何解决？",
            "gRPC-Web 是什么？为什么浏览器不能直接使用 gRPC？"
        ],
        extensions: [
            "研究 Connect 协议（Buf 公司推出），它如何统一 gRPC 和 REST 的优势。",
            "了解 GraphQL 与 gRPC 的对比，各自的适用场景。",
            "探索 gRPC 网关（grpc-gateway），如何同时暴露 REST 和 gRPC 接口。",
            "学习 gRPC 的 JSON 转码功能，在 gRPC 服务上支持 REST 调用。"
        ],
        sourceUrls: [
            "https://www.infracloud.io/blogs/understanding-grpc-concepts-best-practices/",
            "https://grpc.io/docs/",
            "https://github.com/grpc-ecosystem/awesome-grpc"
        ]
    },
    "grpc-w1-3": {
        lessonId: "grpc-w1-3",
        background: [
            "【多路复用】HTTP/2 在单一 TCP 连接上支持多个并发流（Stream），RFC7540：'A single HTTP/2 connection can contain multiple concurrently open streams'，彻底解决 HTTP/1.1 的队头阻塞问题。",
            "【二进制分帧】HTTP/2 使用二进制帧（Frame）而非文本协议，每帧包含 9 字节头部（类型、标志、流 ID）和可变长载荷，解析效率更高。",
            "【头部压缩】HTTP/2 使用 HPACK 压缩算法，通过 Huffman 编码和索引表大幅减少头部开销。测试显示'页面加载时间减少 45-1142ms'（带宽受限时）。",
            "【流控制】HTTP/2 实现基于信用的流控制，通过 WINDOW_UPDATE 帧通告接收能力，防止接收方被快速发送方淹没。",
            "【流优先级】HTTP/2 支持流依赖和权重，客户端可以表达资源加载优先级，服务端据此优化传输顺序（但不强制遵守）。"
        ],
        keyDifficulties: [
            "【TCP 队头阻塞】虽然 HTTP/2 解决了应用层队头阻塞，但 TCP 层丢包仍会阻塞所有流。这是 HTTP/3（QUIC）出现的原因之一。",
            "【帧类型理解】DATA、HEADERS、PRIORITY、RST_STREAM、SETTINGS、WINDOW_UPDATE 等帧类型各有用途，理解它们是深入 HTTP/2 的关键。",
            "【HPACK 状态管理】HPACK 依赖编解码器的同步状态（动态表），中间代理可能破坏这种状态，需要特别处理。",
            "【Server Push 争议】Server Push 理论上可以预推送资源，但实践中效果不佳（缓存命中问题），Chrome 已移除支持。"
        ],
        handsOnPath: [
            "使用 curl --http2 或 nghttp 工具向支持 HTTP/2 的网站发请求，观察协议协商过程（ALPN）。",
            "用 Wireshark 抓取 HTTP/2 流量，分析帧结构：找到 SETTINGS、HEADERS、DATA 帧，理解流 ID 的作用。",
            "编写简单的 HTTP/1.1 和 HTTP/2 客户端，对同一服务器发起多个并发请求，对比连接数和完成时间。",
            "使用 h2load 工具对 HTTP/2 服务进行压测，观察多路复用的效果。",
            "配置 Nginx 启用 HTTP/2，对比启用前后的页面加载性能（通过 Chrome DevTools）。"
        ],
        selfCheck: [
            "HTTP/2 的多路复用是如何工作的？什么是流（Stream）和帧（Frame）？",
            "HTTP/1.1 的队头阻塞问题是什么？HTTP/2 如何解决？TCP 层的队头阻塞呢？",
            "HPACK 压缩的原理是什么？为什么比 gzip 压缩头部更高效？",
            "HTTP/2 的流控制机制是什么？WINDOW_UPDATE 帧的作用是什么？",
            "为什么 gRPC 选择 HTTP/2 作为传输协议？HTTP/2 的哪些特性对 gRPC 最重要？",
            "Server Push 为什么在实践中效果不佳？"
        ],
        extensions: [
            "学习 HTTP/3 和 QUIC 协议，理解它们如何解决 TCP 队头阻塞问题。",
            "深入研究 HPACK 算法，了解静态表、动态表、Huffman 编码的实现细节。",
            "探索 gRPC 如何映射到 HTTP/2：path、method、header、trailer 的对应关系。",
            "了解 HTTP/2 在长连接场景下的连接管理：PING、GOAWAY 帧的作用。"
        ],
        sourceUrls: [
            "https://www.rfc-editor.org/rfc/rfc7540",
            "https://hpbn.co/http2/",
            "https://grpc.io/docs/what-is-grpc/core-concepts/"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "grpc-w1-1": [
        {
            id: "grpc-w1-1-q1",
            question: "gRPC 官方文档如何描述 gRPC 的核心理念？",
            options: [
                "A client application can directly call a method on a server application on a different machine as if it were a local object",
                "客户端必须通过 REST API 中间层访问服务端",
                "所有通信必须是异步的消息队列模式",
                "客户端和服务端必须使用相同的编程语言"
            ],
            answer: 0,
            rationale: "gRPC 官方文档明确指出：'a client application can directly call a method on a server application on a different machine as if it were a local object'——远程调用透明化是 gRPC 的核心价值。"
        },
        {
            id: "grpc-w1-1-q2",
            question: "gRPC 默认使用什么作为接口定义语言（IDL）和序列化机制？",
            options: [
                "JSON Schema",
                "XML Schema",
                "Protocol Buffers",
                "Apache Thrift"
            ],
            answer: 2,
            rationale: "gRPC 官方推荐使用 Protocol Buffers（特别是 proto3）作为默认的 IDL 和序列化机制，提供跨语言支持和高效的二进制序列化。"
        },
        {
            id: "grpc-w1-1-q3",
            question: "gRPC 支持的四种 RPC 模式不包括哪一种？",
            options: [
                "Unary RPC",
                "Server Streaming RPC",
                "Publish-Subscribe RPC",
                "Bidirectional Streaming RPC"
            ],
            answer: 2,
            rationale: "gRPC 支持四种模式：Unary（一元）、Server Streaming（服务端流）、Client Streaming（客户端流）、Bidirectional Streaming（双向流）。Pub-Sub 不是 gRPC 的原生模式。"
        },
        {
            id: "grpc-w1-1-q4",
            question: "关于 gRPC Metadata 的描述，哪项是正确的？",
            options: [
                "Key 区分大小写，只支持 ASCII 字符",
                "Key 不区分大小写，二进制值的 Key 必须以 '-bin' 后缀结尾",
                "只能在请求头中传递，不能在响应中返回",
                "必须使用 JSON 格式编码"
            ],
            answer: 1,
            rationale: "gRPC 官方文档指出：Metadata 的 Key 是大小写不敏感的 ASCII 字符串，传递二进制数据时 Key 必须以 '-bin' 结尾。"
        },
        {
            id: "grpc-w1-1-q5",
            question: "gRPC 的 Deadline 机制有什么作用？",
            options: [
                "限制客户端的请求频率",
                "指定 RPC 必须完成的绝对时间点，服务端可查询剩余时间",
                "自动重试失败的请求",
                "控制消息的最大大小"
            ],
            answer: 1,
            rationale: "Deadline 指定 RPC 必须完成的绝对时间点，不同于 Timeout（相对时长）。服务端可以查询剩余时间来决定是否继续处理请求。"
        },
        {
            id: "grpc-w1-1-q6",
            question: "以下哪家公司不是 gRPC 的已知使用者？",
            options: [
                "Netflix",
                "Square",
                "Facebook",
                "Docker"
            ],
            answer: 2,
            rationale: "根据 gRPC FAQ，已知使用者包括 Google、Square、Netflix、CoreOS、Docker、CockroachDB、Cisco、Juniper Networks 等。Facebook 主要使用自研的 Thrift。"
        },
        {
            id: "grpc-w1-1-q7",
            question: "gRPC 名称中的 'g' 代表什么？",
            options: [
                "Google",
                "Generic",
                "gRPC（递归定义）",
                "Gateway"
            ],
            answer: 2,
            rationale: "gRPC FAQ 明确指出：gRPC 代表 'gRPC Remote Procedure Calls'，是一个递归定义（类似 GNU）。"
        },
        {
            id: "grpc-w1-1-q8",
            question: "gRPC 相比标准 HTTP 库的独特优势不包括？",
            options: [
                "应用层流控制（application-layer flow-control）",
                "级联调用取消（cascading call-cancellation）",
                "自动 SQL 注入防护",
                "负载均衡和故障转移支持"
            ],
            answer: 2,
            rationale: "gRPC FAQ 列出的优势包括：应用层流控制、级联调用取消、负载均衡/故障转移。SQL 注入防护与 RPC 框架无关。"
        },
        {
            id: "grpc-w1-1-q9",
            question: "关于 gRPC Channel 的描述，哪项是正确的？",
            options: [
                "每次 RPC 调用都会创建新的 Channel",
                "Channel 是到服务端的连接抽象，有 connected、idle 等状态",
                "Channel 只能用于 Unary RPC",
                "Channel 不支持配置行为参数"
            ],
            answer: 1,
            rationale: "Channel 是到 gRPC 服务端的连接抽象，有 connected、idle 等状态，可以配置各种行为参数。应该复用 Channel 而不是每次创建新的。"
        },
        {
            id: "grpc-w1-1-q10",
            question: "gRPC 如何发音？",
            options: [
                "Grip-C",
                "G-R-P-C（逐字母）",
                "Jee-Arr-Pee-See",
                "Gee-RPC"
            ],
            answer: 2,
            rationale: "gRPC FAQ 明确指出正确发音是 'Jee-Arr-Pee-See'。"
        },
        {
            id: "grpc-w1-1-q11",
            question: "gRPC 除了 Protocol Buffers 外，还支持哪些数据格式？",
            options: [
                "只支持 Protocol Buffers",
                "原生支持 JSON，外部支持 FlatBuffers 和 Thrift",
                "原生支持 XML 和 YAML",
                "只支持文本格式"
            ],
            answer: 1,
            rationale: "gRPC FAQ 指出：gRPC 原生支持 Protobuf，同时有外部项目支持 JSON、FlatBuffers 和 Thrift 等格式。"
        },
        {
            id: "grpc-w1-1-q12",
            question: "gRPC 的许可证是什么？",
            options: [
                "MIT License",
                "GPL v3",
                "Apache 2.0",
                "BSD 3-Clause"
            ],
            answer: 2,
            rationale: "gRPC FAQ 明确指出：gRPC 使用 Apache 2.0 许可证开源。"
        }
    ],
    "grpc-w1-2": [
        {
            id: "grpc-w1-2-q1",
            question: "根据性能测试，gRPC 比 REST 快多少倍？",
            options: [
                "1.5 到 2 倍",
                "3 到 5 倍",
                "7 到 10 倍",
                "20 到 30 倍"
            ],
            answer: 2,
            rationale: "根据 InfraCloud 的测试数据，gRPC 传输速度'7 to 10 times faster than that of REST'，主要得益于二进制负载和持久连接。"
        },
        {
            id: "grpc-w1-2-q2",
            question: "gRPC 相比 REST 在契约定义方面的优势是什么？",
            options: [
                "不需要任何契约定义",
                "通过 .proto 文件提供 strict contract definition",
                "使用 JSON Schema 自动生成文档",
                "契约可以在运行时动态修改"
            ],
            answer: 1,
            rationale: "gRPC 通过 .proto 文件提供'strict contract definition'，客户端和服务端共享这个文件，消除了请求/响应结构的歧义。"
        },
        {
            id: "grpc-w1-2-q3",
            question: "为什么 gRPC 不适合直接用于公开的 Web API？",
            options: [
                "gRPC 性能太差",
                "gRPC 不支持身份认证",
                "浏览器不能直接使用 gRPC，需要代理",
                "gRPC 不支持 HTTPS"
            ],
            answer: 2,
            rationale: "gRPC 基于 HTTP/2 的特性（如 trailer）在浏览器中不被完全支持，需要 gRPC-Web 代理进行协议转换。公开 API 通常选择 REST 以保证浏览器兼容性。"
        },
        {
            id: "grpc-w1-2-q4",
            question: "gRPC 在负载均衡方面的主要挑战是什么？",
            options: [
                "gRPC 不支持任何负载均衡",
                "持久连接使传统 L4 负载均衡失效",
                "gRPC 流量无法被代理",
                "gRPC 只能使用 DNS 轮询"
            ],
            answer: 1,
            rationale: "gRPC 的持久连接意味着一旦连接建立，后续请求都在同一连接上，L4 负载均衡器无法感知。需要 L7 负载均衡或客户端负载均衡策略。"
        },
        {
            id: "grpc-w1-2-q5",
            question: "关于 Protocol Buffers 序列化的描述，哪项是正确的？",
            options: [
                "比 JSON 更易人类阅读",
                "序列化和反序列化速度在所有数据大小上都优于 JSON",
                "只适用于小数据量场景",
                "不支持嵌套数据结构"
            ],
            answer: 1,
            rationale: "InfraCloud 文章指出：'serialization and deserialization speed is way better in the case of protocol buffers across all data sizes'——Protobuf 在各种数据大小下都更快。"
        },
        {
            id: "grpc-w1-2-q6",
            question: "选择 REST 而非 gRPC 的最佳场景是？",
            options: [
                "微服务间的内部通信",
                "实时交易平台",
                "构建需要浏览器直接访问的公开 API",
                "带宽受限的移动端应用"
            ],
            answer: 2,
            rationale: "REST 天然支持浏览器，适合构建公开 API。而 gRPC 更适合微服务内部通信、实时应用和带宽受限场景。"
        },
        {
            id: "grpc-w1-2-q7",
            question: "gRPC 代码生成相比 REST 的优势是什么？",
            options: [
                "gRPC 不需要代码生成",
                "gRPC 原生支持多语言代码生成，REST 需要第三方工具",
                "REST 的代码生成更成熟稳定",
                "gRPC 只支持 Java 代码生成"
            ],
            answer: 1,
            rationale: "gRPC 有原生的代码生成能力，直接从 .proto 文件生成多种语言的客户端和服务端代码。REST 需要依赖 Swagger/OpenAPI 等第三方工具。"
        },
        {
            id: "grpc-w1-2-q8",
            question: "gRPC 使用什么传输协议？",
            options: [
                "HTTP/1.1 with Keep-Alive",
                "HTTP/2 with persistent connections",
                "WebSocket",
                "自定义二进制协议"
            ],
            answer: 1,
            rationale: "gRPC 使用 HTTP/2 协议，利用其持久连接和多路复用特性。REST 通常基于 HTTP/1.1，每次请求可能新建连接。"
        },
        {
            id: "grpc-w1-2-q9",
            question: "gRPC 在调试方面的挑战是什么？",
            options: [
                "gRPC 不支持日志记录",
                "gRPC 使用二进制格式，不如 JSON 直观可读",
                "gRPC 没有任何调试工具",
                "gRPC 流量无法被抓包分析"
            ],
            answer: 1,
            rationale: "gRPC 使用 Protocol Buffers 二进制格式，不像 JSON 那样直接可读。需要使用 grpcurl、BloomRPC 等专门工具进行调试。"
        },
        {
            id: "grpc-w1-2-q10",
            question: "gRPC 流式通信相比 REST 的优势是什么？",
            options: [
                "REST 也原生支持流式通信",
                "gRPC 不支持流式通信",
                "gRPC 原生支持双向流，REST 需要 WebSocket 等额外技术",
                "流式通信只对视频传输有用"
            ],
            answer: 2,
            rationale: "gRPC 原生支持四种通信模式，包括双向流式通信。REST 本身不支持流式通信，需要借助 WebSocket 或 Server-Sent Events 等技术。"
        },
        {
            id: "grpc-w1-2-q11",
            question: "选择 gRPC 的最佳场景是？",
            options: [
                "需要快速迭代的原型开发",
                "团队只熟悉 REST 架构",
                "微服务架构需要高效的服务间通信",
                "需要支持 IE 浏览器的 Web 应用"
            ],
            answer: 2,
            rationale: "gRPC 最适合微服务架构中的高效服务间通信、实时应用、带宽受限场景、以及需要多语言支持和代码生成的场景。"
        },
        {
            id: "grpc-w1-2-q12",
            question: "REST 使用的主要数据格式是什么？",
            options: [
                "Protocol Buffers",
                "JSON（人类可读但体积较大）",
                "MessagePack",
                "BSON"
            ],
            answer: 1,
            rationale: "REST API 通常使用 JSON 作为数据交换格式，优点是人类可读、调试方便，缺点是体积相对较大、解析速度较慢。"
        }
    ],
    "grpc-w1-3": [
        {
            id: "grpc-w1-3-q1",
            question: "RFC 7540 对 HTTP/2 多路复用的描述是什么？",
            options: [
                "每个请求必须使用独立的 TCP 连接",
                "A single HTTP/2 connection can contain multiple concurrently open streams",
                "流只能单向传输数据",
                "最多支持 10 个并发流"
            ],
            answer: 1,
            rationale: "RFC 7540 明确指出：'A single HTTP/2 connection can contain multiple concurrently open streams, with either endpoint interleaving frames from multiple streams'——这是解决 HTTP/1.1 队头阻塞的关键。"
        },
        {
            id: "grpc-w1-3-q2",
            question: "HTTP/2 帧（Frame）的头部大小是多少字节？",
            options: [
                "4 字节",
                "9 字节",
                "16 字节",
                "可变长度"
            ],
            answer: 1,
            rationale: "HTTP/2 使用二进制帧，每帧由 9 字节的固定头部（包含长度、类型、标志、流 ID）和可变长载荷组成。"
        },
        {
            id: "grpc-w1-3-q3",
            question: "HTTP/2 的头部压缩使用什么算法？",
            options: [
                "gzip",
                "deflate",
                "HPACK",
                "Brotli"
            ],
            answer: 2,
            rationale: "HTTP/2 使用专门设计的 HPACK 压缩算法，通过 Huffman 编码和索引表（静态表+动态表）压缩头部，测试显示可减少页面加载时间 45-1142ms。"
        },
        {
            id: "grpc-w1-3-q4",
            question: "HTTP/2 流控制机制使用什么帧通告接收能力？",
            options: [
                "DATA 帧",
                "HEADERS 帧",
                "WINDOW_UPDATE 帧",
                "PING 帧"
            ],
            answer: 2,
            rationale: "HTTP/2 使用基于信用的流控制，接收方通过 WINDOW_UPDATE 帧通告可用容量，确保'only data that can be used by a receiver is transmitted'。"
        },
        {
            id: "grpc-w1-3-q5",
            question: "HTTP/1.1 的队头阻塞问题是什么？",
            options: [
                "服务器无法处理大量并发连接",
                "请求必须按顺序完成，前一个请求阻塞后续请求",
                "无法进行头部压缩",
                "不支持持久连接"
            ],
            answer: 1,
            rationale: "HTTP/1.1 在单个连接上请求必须按序完成（队头阻塞），即使使用 pipelining 也会有响应顺序问题。HTTP/2 的多路复用彻底解决了这个问题。"
        },
        {
            id: "grpc-w1-3-q6",
            question: "以下哪个不是 HTTP/2 的帧类型？",
            options: [
                "DATA",
                "HEADERS",
                "JSON",
                "RST_STREAM"
            ],
            answer: 2,
            rationale: "HTTP/2 定义的帧类型包括 DATA、HEADERS、PRIORITY、RST_STREAM、SETTINGS、PUSH_PROMISE、PING、GOAWAY、WINDOW_UPDATE、CONTINUATION。JSON 是数据格式，不是帧类型。"
        },
        {
            id: "grpc-w1-3-q7",
            question: "为什么 HTTP/2 虽然解决了应用层队头阻塞，但 TCP 层仍存在问题？",
            options: [
                "HTTP/2 不使用 TCP",
                "TCP 丢包会阻塞所有流，因为 TCP 保证有序交付",
                "TCP 不支持多路复用",
                "HTTP/2 的队头阻塞比 HTTP/1.1 更严重"
            ],
            answer: 1,
            rationale: "HTTP/2 在应用层实现多路复用，但底层 TCP 需要保证有序交付。一旦发生丢包，TCP 会阻塞后续数据直到重传成功，影响所有流。这是 HTTP/3 使用 QUIC 的原因。"
        },
        {
            id: "grpc-w1-3-q8",
            question: "HTTP/2 相比 HTTP/1.1 测量显示连接利用率有什么变化？",
            options: [
                "只携带单个请求的连接比例从 74% 下降到 25%",
                "连接数量增加了 3 倍",
                "没有明显变化",
                "连接利用率下降了"
            ],
            answer: 0,
            rationale: "性能测试显示，使用 HTTP/2 后'the fraction of connections carrying just a single HTTP transaction plummets to 25%'，而 HTTP/1.1 是 74%，说明连接利用率大幅提升。"
        },
        {
            id: "grpc-w1-3-q9",
            question: "HTTP/2 Server Push 为什么在实践中效果不佳？",
            options: [
                "浏览器不支持 Server Push",
                "推送的资源可能已在客户端缓存中，造成带宽浪费",
                "Server Push 只能推送 HTML",
                "Server Push 会降低页面加载速度"
            ],
            answer: 1,
            rationale: "Server Push 的理论优势是预推送资源，但实践中客户端可能已有缓存，导致推送浪费。Chrome 已在 2022 年移除 Server Push 支持。"
        },
        {
            id: "grpc-w1-3-q10",
            question: "HPACK 压缩为什么比简单的 gzip 压缩头部更高效？",
            options: [
                "gzip 不能压缩 HTTP 头部",
                "HPACK 使用索引表复用重复的头部字段，避免重复传输",
                "HPACK 压缩比 gzip 高 10 倍",
                "HPACK 是无损压缩，gzip 是有损压缩"
            ],
            answer: 1,
            rationale: "HPACK 使用静态表和动态表索引常见的头部字段，对于重复的头部（如 User-Agent）只需传输索引号而非完整内容。这比 gzip 对每个请求独立压缩更高效。"
        },
        {
            id: "grpc-w1-3-q11",
            question: "HTTP/2 的流优先级机制有什么特点？",
            options: [
                "服务端必须严格遵守客户端的优先级设置",
                "客户端可以表达资源依赖和权重，但服务端不强制遵守",
                "优先级只对 DATA 帧有效",
                "所有流必须使用相同的优先级"
            ],
            answer: 1,
            rationale: "HTTP/2 允许客户端通过依赖关系和权重表达优先级建议，但规范不强制服务端遵守，只是'allowing endpoints to suggest resource allocation priorities'。"
        },
        {
            id: "grpc-w1-3-q12",
            question: "gRPC 选择 HTTP/2 的主要原因不包括？",
            options: [
                "多路复用支持并发流",
                "头部压缩减少开销",
                "支持浏览器直接访问",
                "二进制帧格式解析高效"
            ],
            answer: 2,
            rationale: "gRPC 选择 HTTP/2 是因为其多路复用、头部压缩、二进制帧、流控制等特性。但浏览器对 HTTP/2 的某些特性（如 trailer）支持不完整，这正是 gRPC 不能直接在浏览器使用的原因。"
        }
    ]
}
