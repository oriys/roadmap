import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "bp-w4-1": {
        lessonId: "bp-w4-1",
        background: [
            "【背压定义】Reactive Manifesto：'When one component is struggling to keep-up, the system as a whole needs to respond in a sensible way'——当下游处理能力不足时，系统需要以合理方式响应，向上游传递压力信号减少输入负载。",
            "【背压作用】背压机制防止系统崩溃，避免组件失败或无控制地丢弃消息。它是重要的反馈机制，帮助系统在高负载下保持韧性而非崩溃，与弹性（Elasticity）相结合实现动态资源管理。",
            "【Node.js Event Loop】Node.js 通过 Event Loop 实现非阻塞 I/O。尽管使用单线程执行 JavaScript，通过将操作卸载到系统内核，实现高并发处理能力。",
            "【Event Loop 六阶段】timers（执行 setTimeout/setInterval 回调）→ pending callbacks → idle/prepare → poll（获取新 I/O 事件）→ check（执行 setImmediate）→ close callbacks。",
            "【process.nextTick 特殊性】process.nextTick() 不属于 Event Loop，nextTickQueue 在当前操作完成后、进入下一阶段前处理。递归调用 nextTick 会饿死 I/O 轮询阶段。",
            "【gRPC 连接复用】gRPC 官方指南强调：'always re-use stubs and channels when possible'——复用连接避免频繁建立 HTTP/2 连接的开销，keepalive 配置防止连接空闲后 RPC 延迟。"
        ],
        keyDifficulties: [
            "【setTimeout vs setImmediate】在 I/O 回调内部，setImmediate 总是先于 setTimeout(0) 执行。在 I/O 回调外部，执行顺序不确定。Node.js 推荐使用 setImmediate，更易于理解执行顺序。",
            "【nextTick 饥饿问题】递归调用 process.nextTick() 会无限阻塞 Event Loop，I/O 事件永远得不到处理。应该用 setImmediate 替代 nextTick 处理递归场景。",
            "【gRPC 流与负载均衡】流式 RPC 一旦建立，会固定在单个连接上，无法利用负载均衡。只有在提供'substantial performance or simplicity benefit'时才使用流式 RPC。",
            "【HTTP/2 并发流限制】每个 HTTP/2 连接有并发流数限制。高负载下需要创建多个 channel 或使用 channel pool 分散连接。",
            "【背压传播延迟】背压可能逐级上升至终端用户，导致响应性能下降。但这是系统设计中可接受的权衡——宁可变慢也不崩溃。"
        ],
        handsOnPath: [
            "编写 Node.js 脚本验证 setTimeout vs setImmediate 的执行顺序：在 fs.readFile 回调内外分别测试，观察输出顺序差异。",
            "实现背压处理：使用 Node.js Stream 的 pipe() 方法自动处理背压，或手动检查 writable.write() 返回值并监听 'drain' 事件。",
            "配置 gRPC keepalive：设置 GRPC_ARG_KEEPALIVE_TIME_MS（默认无穷大）、GRPC_ARG_KEEPALIVE_TIMEOUT_MS（默认 20 秒）防止连接空闲断开。",
            "监控 Event Loop 延迟：使用 monitorEventLoopDelay() API（Node.js 11+）或 perf_hooks 模块检测 Event Loop 阻塞情况。",
            "实现连接池：为 gRPC 客户端创建 channel pool，通过轮询或随机策略选择 channel，分散高并发请求。",
            "使用 Node.js cluster 模块充分利用多核 CPU，每个 worker 进程有独立的 Event Loop，配合负载均衡提高吞吐量。"
        ],
        selfCheck: [
            "什么是背压（Backpressure）？它在响应式系统中起什么作用？",
            "Node.js Event Loop 有哪几个阶段？poll 阶段的作用是什么？",
            "process.nextTick() 和 setImmediate() 有什么区别？为什么推荐使用 setImmediate？",
            "为什么递归调用 process.nextTick() 会饿死 I/O？如何避免？",
            "gRPC 为什么强调复用 channel？流式 RPC 对负载均衡有什么影响？",
            "如何检测和处理 Node.js 中的 Event Loop 阻塞？"
        ],
        extensions: [
            "学习 RxJS 或 Reactor 中的背压策略：onBackpressureBuffer、onBackpressureDrop、onBackpressureLatest。",
            "研究 Kafka Consumer 的背压机制：pause/resume、max.poll.records 配置、流量控制策略。",
            "探索 Go 语言的 goroutine 和 channel 实现的并发模型，对比 Node.js Event Loop 的差异。",
            "学习 libuv 库的实现原理，理解 Node.js Event Loop 的底层机制。"
        ],
        sourceUrls: [
            "https://reactivemanifesto.org/glossary#Back-Pressure",
            "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick",
            "https://grpc.io/docs/guides/performance/"
        ]
    },
    "bp-w4-2": {
        lessonId: "bp-w4-2",
        background: [
            "【Protocol Buffers 流式处理】Protobuf 官方建议：'write the size of each message before you write the message itself'——wire format 本身没有自定界能力，需要手动添加长度前缀以支持多消息流。",
            "【大数据集处理】Protobuf 建议将大型消息拆分为多个小结构单独编码，将复杂结构管理转化为字节字符串集合管理，降低内存压力和编解码复杂度。",
            "【gRPC 流式优化】流式 RPC 避免重复建立 RPC 的开销，适合长连接数据流场景。但一旦建立会失去负载均衡能力，需权衡使用。",
            "【HTTP/2 多路复用】HTTP/2 在单个 TCP 连接上支持多路复用，多个请求并行传输而不需要排队。相比 HTTP/1.1 的队头阻塞，大幅提升并发性能。",
            "【压缩策略选择】gRPC 默认支持 gzip 压缩。对于 CPU 密集型服务，压缩可能增加延迟；对于带宽受限场景，压缩能显著减少传输时间。需要根据实际场景测试选择。",
            "【Protobuf 文件扩展名约定】官方推荐：.txtpb（文本格式）、.binpb（二进制 wire format）、.json（JSON 表示）。统一命名提高代码一致性。"
        ],
        keyDifficulties: [
            "【字段编号优化】Protobuf 字段编号 1-15 只需 1 字节编码，16-2047 需要 2 字节。高频字段应使用 1-15 的编号以减少消息体积。",
            "【Varint 编码理解】Protobuf 使用 Varint 编码整数，小数值占用更少字节。负数会被编码为大整数（sint32/sint64 使用 ZigZag 编码优化负数）。",
            "【repeated 字段打包】默认情况下 repeated 数值字段使用 packed 编码，省去每个元素的 tag 开销。但 repeated string/message 无法打包。",
            "【JSON vs Protobuf 权衡】JSON 可读性好、调试方便，但体积大、解析慢；Protobuf 体积小、解析快，但调试困难。内部服务用 Protobuf，外部 API 用 JSON 是常见策略。",
            "【连接级 vs 流级流控】HTTP/2 有连接级和流级两层流量控制。gRPC 默认流控窗口可能不够大，高吞吐场景需要调整 GRPC_ARG_HTTP2_STREAM_LOOKAHEAD_BYTES。"
        ],
        handsOnPath: [
            "对比 JSON 和 Protobuf 的消息大小和序列化/反序列化性能：准备相同数据结构，分别编码后对比字节数和耗时。",
            "优化 .proto 文件：为高频字段分配 1-15 的编号，使用 sint32/sint64 优化可能为负的整数字段。",
            "配置 gRPC 压缩：在 channel 或 call 级别启用 gzip 压缩，测试不同压缩级别对延迟和吞吐量的影响。",
            "实现 Protobuf 流式传输：使用 writeDelimitedTo/parseDelimitedFrom（Java）或对应语言的长度前缀方法处理多消息流。",
            "监控 HTTP/2 连接指标：使用 gRPC 内置的 channelz 服务查看连接状态、流数量、发送/接收字节数。",
            "测试 HTTP/2 vs HTTP/1.1 性能差异：使用 h2load 或类似工具对比相同负载下的延迟和吞吐量。"
        ],
        selfCheck: [
            "Protobuf 字段编号 1-15 和 16+ 在编码时有什么区别？",
            "为什么 Protobuf 对负数的编码效率较低？sint32/sint64 如何优化？",
            "什么是 Protobuf 的 packed 编码？哪些类型不支持 packed？",
            "gRPC 流式 RPC 相比 Unary RPC 有什么优势和劣势？",
            "HTTP/2 的多路复用如何解决 HTTP/1.1 的队头阻塞问题？",
            "在什么场景下应该启用 gRPC 压缩？什么场景下不应该？"
        ],
        extensions: [
            "学习 FlatBuffers 和 Cap'n Proto 等零拷贝序列化格式，理解其与 Protobuf 的性能差异和适用场景。",
            "研究 HTTP/3 和 QUIC 协议，了解其相比 HTTP/2 在丢包恢复和连接迁移方面的改进。",
            "探索 gRPC-Web 的实现原理，理解浏览器环境下如何使用 gRPC。",
            "学习 Apache Arrow 的列式内存格式，了解大数据分析场景下的序列化优化。"
        ],
        sourceUrls: [
            "https://grpc.io/docs/guides/performance/",
            "https://protobuf.dev/programming-guides/techniques/"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w4-1": [
        {
            id: "bp-w4-1-q1",
            question: "Reactive Manifesto 对背压（Backpressure）的核心描述是什么？",
            options: [
                "当系统负载过高时立即拒绝所有请求",
                "When one component is struggling to keep-up, the system as a whole needs to respond in a sensible way",
                "背压是一种数据压缩技术",
                "背压只适用于消息队列系统"
            ],
            answer: 1,
            rationale: "Reactive Manifesto 定义：'When one component is struggling to keep-up, the system as a whole needs to respond in a sensible way'——系统需以合理方式响应组件过载。"
        },
        {
            id: "bp-w4-1-q2",
            question: "Node.js Event Loop 的 poll 阶段主要做什么？",
            options: [
                "执行 setTimeout 回调",
                "执行 setImmediate 回调",
                "获取新的 I/O 事件，执行 I/O 回调，适当时阻塞等待",
                "执行 process.nextTick 回调"
            ],
            answer: 2,
            rationale: "Node.js 文档：poll 阶段'Retrieves new I/O events; executes I/O callbacks; blocks when appropriate'——是处理 I/O 事件的核心阶段。"
        },
        {
            id: "bp-w4-1-q3",
            question: "在 I/O 回调内部，setTimeout(fn, 0) 和 setImmediate(fn) 哪个先执行？",
            options: [
                "setTimeout 总是先执行",
                "setImmediate 总是先执行",
                "执行顺序不确定",
                "两者同时执行"
            ],
            answer: 1,
            rationale: "Node.js 文档：在 I/O 回调内部，setImmediate 总是先于 setTimeout(0) 执行，因为 setImmediate 在 poll 阶段后的 check 阶段执行。"
        },
        {
            id: "bp-w4-1-q4",
            question: "process.nextTick() 和 Event Loop 的关系是什么？",
            options: [
                "nextTick 是 Event Loop 的一个阶段",
                "nextTick 在 Event Loop 的 timers 阶段执行",
                "nextTick 不属于 Event Loop，在当前操作完成后、进入下一阶段前处理",
                "nextTick 和 setImmediate 完全相同"
            ],
            answer: 2,
            rationale: "Node.js 文档：process.nextTick() is not part of the event loop，nextTickQueue 在当前操作完成后、进入下一阶段前处理。"
        },
        {
            id: "bp-w4-1-q5",
            question: "为什么递归调用 process.nextTick() 会有问题？",
            options: [
                "会导致栈溢出",
                "会饿死 I/O poll 阶段，Event Loop 永远无法进入下一阶段",
                "会消耗过多 CPU",
                "会导致内存泄漏"
            ],
            answer: 1,
            rationale: "Node.js 文档警告：递归 nextTick 调用会无限阻塞 Event Loop，I/O 事件永远得不到处理——'Blocks event loop indefinitely'。"
        },
        {
            id: "bp-w4-1-q6",
            question: "gRPC 官方对 channel 和 stub 复用的建议是什么？",
            options: [
                "每次 RPC 调用创建新的 channel",
                "Always re-use stubs and channels when possible",
                "channel 可以复用但 stub 不能",
                "只在高并发场景下复用"
            ],
            answer: 1,
            rationale: "gRPC 官方指南强调：'always re-use stubs and channels when possible'——复用连接避免频繁建立 HTTP/2 连接的开销。"
        },
        {
            id: "bp-w4-1-q7",
            question: "gRPC 流式 RPC 对负载均衡有什么影响？",
            options: [
                "流式 RPC 能更好地负载均衡",
                "流式 RPC 一旦建立会失去负载均衡能力，固定在单个连接上",
                "流式 RPC 不支持负载均衡",
                "流式 RPC 会自动切换连接实现负载均衡"
            ],
            answer: 1,
            rationale: "gRPC 文档指出：流式 RPC 一旦建立，会固定在单个连接上，无法利用负载均衡。只有在提供'substantial performance or simplicity benefit'时才使用。"
        },
        {
            id: "bp-w4-1-q8",
            question: "Node.js 推荐使用 setImmediate 而非 process.nextTick 的原因是什么？",
            options: [
                "setImmediate 性能更好",
                "setImmediate 更易于理解执行顺序，不会饿死 I/O",
                "nextTick 已被废弃",
                "setImmediate 支持更多参数"
            ],
            answer: 1,
            rationale: "Node.js 文档推荐 setImmediate：'easier to reason about'——执行顺序更可预测，且不会阻塞 Event Loop 导致 I/O 饥饿。"
        },
        {
            id: "bp-w4-1-q9",
            question: "HTTP/2 连接的并发流数限制问题如何解决？",
            options: [
                "升级到 HTTP/3",
                "创建多个 channel 或使用 channel pool 分散连接",
                "增加单连接的流数限制",
                "使用 HTTP/1.1 替代"
            ],
            answer: 1,
            rationale: "gRPC 文档建议：高负载下应'creating separate channels per workload area or using channel pools distributed across multiple connections'。"
        },
        {
            id: "bp-w4-1-q10",
            question: "背压机制可能导致什么用户可感知的影响？",
            options: [
                "数据丢失",
                "响应性能下降（背压逐级上升至终端用户）",
                "连接断开",
                "服务完全不可用"
            ],
            answer: 1,
            rationale: "Reactive Manifesto 指出：背压可能逐级上升至终端用户导致响应性能下降，但这确保系统在高负载下保持韧性而非崩溃。"
        },
        {
            id: "bp-w4-1-q11",
            question: "gRPC 的 keepalive 配置主要解决什么问题？",
            options: [
                "数据加密",
                "防止连接空闲后 RPC 初始化延迟",
                "提高压缩效率",
                "增加并发流数"
            ],
            answer: 1,
            rationale: "gRPC 文档：keepalive 通过 HTTP/2 ping 维护连接，'prevents delays when initiating RPCs after idle periods'——防止连接空闲后的冷启动延迟。"
        },
        {
            id: "bp-w4-1-q12",
            question: "Node.js Event Loop 的 timers 阶段执行什么类型的回调？",
            options: [
                "setImmediate() 回调",
                "setTimeout() 和 setInterval() 回调",
                "process.nextTick() 回调",
                "I/O 回调"
            ],
            answer: 1,
            rationale: "Node.js 文档：timers 阶段'Executes callbacks scheduled by setTimeout() and setInterval()'——执行定时器回调。"
        }
    ],
    "bp-w4-2": [
        {
            id: "bp-w4-2-q1",
            question: "Protocol Buffers 官方对多消息流传输的建议是什么？",
            options: [
                "使用 JSON 分隔符",
                "Write the size of each message before you write the message itself",
                "使用特殊的结束标记",
                "每个消息使用独立连接"
            ],
            answer: 1,
            rationale: "Protobuf 文档：wire format 没有自定界能力，建议'write the size of each message before you write the message itself'——手动添加长度前缀。"
        },
        {
            id: "bp-w4-2-q2",
            question: "Protobuf 字段编号 1-15 和 16+ 在编码时有什么区别？",
            options: [
                "没有区别",
                "1-15 只需 1 字节编码，16-2047 需要 2 字节",
                "16+ 的字段会被忽略",
                "1-15 用于必需字段，16+ 用于可选字段"
            ],
            answer: 1,
            rationale: "Protobuf 编码规则：字段编号 1-15 只需 1 字节编码 tag，16-2047 需要 2 字节。高频字段应使用 1-15 的编号以减少消息体积。"
        },
        {
            id: "bp-w4-2-q3",
            question: "为什么 Protobuf 对负数的 int32/int64 编码效率较低？",
            options: [
                "负数不支持 Varint 编码",
                "Varint 将负数编码为大整数，占用更多字节；应使用 sint32/sint64 的 ZigZag 编码",
                "负数需要额外的符号字节",
                "负数使用固定长度编码"
            ],
            answer: 1,
            rationale: "Protobuf 使用 Varint 编码，负数会被编码为大整数占用更多字节。sint32/sint64 使用 ZigZag 编码优化负数，将负数映射到小正数。"
        },
        {
            id: "bp-w4-2-q4",
            question: "Protobuf 的 packed 编码适用于哪些类型？",
            options: [
                "所有 repeated 字段",
                "repeated 数值字段（int32、float 等），不适用于 string/message",
                "只适用于 string 字段",
                "只适用于嵌套 message"
            ],
            answer: 1,
            rationale: "packed 编码适用于 repeated 数值字段，省去每个元素的 tag 开销。但 repeated string/message 无法打包，因为它们是变长的。"
        },
        {
            id: "bp-w4-2-q5",
            question: "Protobuf 官方推荐的二进制 wire format 文件扩展名是什么？",
            options: [
                ".pb",
                ".proto",
                ".binpb",
                ".bin"
            ],
            answer: 2,
            rationale: "Protobuf 官方推荐：.txtpb（文本格式）、.binpb（二进制 wire format）、.json（JSON 表示）。统一命名提高代码一致性。"
        },
        {
            id: "bp-w4-2-q6",
            question: "gRPC 流式 RPC 相比 Unary RPC 的主要优势是什么？",
            options: [
                "更好的负载均衡",
                "避免重复建立 RPC 的开销，适合长连接数据流",
                "更强的安全性",
                "更小的消息体积"
            ],
            answer: 1,
            rationale: "gRPC 文档：流式 RPC'optimize performance for long-lived data flows by avoiding repeated RPC initialization overhead'——避免重复建立 RPC 的开销。"
        },
        {
            id: "bp-w4-2-q7",
            question: "HTTP/2 多路复用解决了 HTTP/1.1 的什么问题？",
            options: [
                "安全性问题",
                "队头阻塞（Head-of-Line Blocking）",
                "压缩效率问题",
                "连接数限制"
            ],
            answer: 1,
            rationale: "HTTP/2 在单个 TCP 连接上支持多路复用，多个请求并行传输而不需要排队，解决了 HTTP/1.1 的队头阻塞问题。"
        },
        {
            id: "bp-w4-2-q8",
            question: "在什么场景下不应该启用 gRPC 压缩？",
            options: [
                "带宽受限场景",
                "CPU 密集型服务（压缩可能增加延迟）",
                "大消息传输场景",
                "跨数据中心通信"
            ],
            answer: 1,
            rationale: "对于 CPU 密集型服务，压缩会增加 CPU 负担和延迟。需要根据实际场景测试选择：带宽受限用压缩，CPU 受限不用压缩。"
        },
        {
            id: "bp-w4-2-q9",
            question: "Protobuf 如何处理大型数据集？",
            options: [
                "使用更大的缓冲区",
                "将大型消息拆分为多个小结构单独编码",
                "使用压缩减少体积",
                "自动分页处理"
            ],
            answer: 1,
            rationale: "Protobuf 官方建议：将大型消息拆分为多个小结构单独编码，将复杂结构管理转化为字节字符串集合管理，降低内存压力。"
        },
        {
            id: "bp-w4-2-q10",
            question: "JSON 和 Protobuf 在序列化方面的主要权衡是什么？",
            options: [
                "JSON 更安全，Protobuf 更快",
                "JSON 可读性好但体积大、解析慢；Protobuf 体积小、解析快但调试困难",
                "JSON 只支持字符串，Protobuf 支持所有类型",
                "没有显著区别"
            ],
            answer: 1,
            rationale: "JSON 可读性好、调试方便，但体积大、解析慢；Protobuf 体积小、解析快，但调试困难。常见策略：内部服务用 Protobuf，外部 API 用 JSON。"
        },
        {
            id: "bp-w4-2-q11",
            question: "HTTP/2 有哪两层流量控制？",
            options: [
                "客户端级和服务端级",
                "连接级和流级",
                "应用级和传输级",
                "请求级和响应级"
            ],
            answer: 1,
            rationale: "HTTP/2 有连接级和流级两层流量控制。gRPC 默认流控窗口可能不够大，高吞吐场景需要调整 GRPC_ARG_HTTP2_STREAM_LOOKAHEAD_BYTES。"
        },
        {
            id: "bp-w4-2-q12",
            question: "gRPC 的 channelz 服务用于什么目的？",
            options: [
                "数据加密",
                "查看连接状态、流数量、发送/接收字节数等指标",
                "负载均衡",
                "消息压缩"
            ],
            answer: 1,
            rationale: "gRPC 内置的 channelz 服务可以查看连接状态、流数量、发送/接收字节数等指标，用于监控和调试 HTTP/2 连接健康状况。"
        }
    ]
}
