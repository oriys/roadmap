import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week23Guides: Record<string, LessonGuide> = {
    "go-w23-1": {
        lessonId: "go-w23-1",
        background: [
            "【net 包】提供 TCP、UDP、Unix Socket 等网络 I/O 的可移植接口。",
            "【Conn 接口】统一的连接抽象，提供 Read、Write、Close 等方法。",
            "【Listener 接口】服务端监听器，Accept 返回新连接。",
            "【Dialer】客户端连接器，支持超时、Keep-Alive 等配置。",
            "【netpoll】Go 运行时的网络轮询器，将阻塞 I/O 转换为非阻塞。"
        ],
        keyDifficulties: [
            "【文件描述符】每个连接消耗一个 fd，需要注意 ulimit 限制。",
            "【超时处理】使用 SetDeadline/SetReadDeadline/SetWriteDeadline 设置超时。",
            "【Goroutine per connection】每个连接一个 Goroutine 的模式。",
            "【优雅关闭】需要正确处理连接关闭和资源释放。"
        ],
        handsOnPath: [
            "实现简单的 TCP echo 服务器",
            "阅读 net.Conn 接口定义",
            "使用 net.Dialer 配置连接参数",
            "分析 netpoll 的实现原理"
        ],
        selfCheck: [
            "Conn 接口定义了哪些方法？",
            "如何设置连接超时？",
            "netpoll 的作用是什么？",
            "为什么 Go 网络 I/O 看起来是阻塞的但实际是非阻塞的？"
        ],
        extensions: [
            "研究 net 包的错误处理",
            "了解 TCP Keep-Alive 机制",
            "学习 Unix Domain Socket"
        ],
        sourceUrls: [
            "https://go.dev/src/net/",
            "https://go.dev/src/runtime/netpoll.go",
            "https://pkg.go.dev/net"
        ]
    },
    "go-w23-2": {
        lessonId: "go-w23-2",
        background: [
            "【netpoll】Go 运行时的 I/O 多路复用封装。",
            "【epoll (Linux)】高效的 I/O 事件通知机制，O(1) 复杂度。",
            "【kqueue (BSD/macOS)】BSD 系统的事件通知机制。",
            "【IOCP (Windows)】Windows 的完成端口模型。",
            "【runtime.netpoll】定期调用检查就绪的 Goroutine。"
        ],
        keyDifficulties: [
            "【边缘触发 vs 水平触发】epoll 支持两种模式，Go 使用边缘触发。",
            "【Goroutine 唤醒】I/O 就绪时，对应的 Goroutine 被唤醒并加入运行队列。",
            "【系统调用开销】每次 epoll_wait 是系统调用，有上下文切换开销。",
            "【批量处理】Go 批量处理就绪事件以减少系统调用次数。"
        ],
        handsOnPath: [
            "阅读 netpoll_epoll.go 源码",
            "使用 strace 观察 epoll 系统调用",
            "比较不同平台的 netpoll 实现",
            "理解 pollDesc 结构体"
        ],
        selfCheck: [
            "Linux 上 Go 使用什么 I/O 多路复用？",
            "epoll 的边缘触发和水平触发区别？",
            "netpoll 如何与调度器集成？",
            "Windows 上使用什么机制？"
        ],
        extensions: [
            "研究 io_uring 新接口",
            "了解 Reactor 和 Proactor 模式",
            "学习 C10K/C10M 问题"
        ],
        sourceUrls: [
            "https://go.dev/src/runtime/netpoll_epoll.go",
            "https://go.dev/src/runtime/netpoll_kqueue.go",
            "https://man7.org/linux/man-pages/man7/epoll.7.html"
        ]
    },
    "go-w23-3": {
        lessonId: "go-w23-3",
        background: [
            "【连接池必要性】建立连接开销大（TCP 握手、TLS 握手），复用连接提升性能。",
            "【database/sql 连接池】标准库的连接池实现是很好的参考。",
            "【http.Transport】HTTP 客户端内置连接复用。",
            "【资源限制】MaxOpenConns、MaxIdleConns、ConnMaxLifetime 等参数。",
            "【健康检查】定期检查连接是否仍然有效。"
        ],
        keyDifficulties: [
            "【连接泄漏】忘记归还连接会导致池耗尽。",
            "【死连接】网络问题可能导致连接失效但未被检测。",
            "【并发安全】连接池需要处理并发获取和归还。",
            "【优雅关闭】关闭池时需要等待所有连接归还。"
        ],
        handsOnPath: [
            "阅读 database/sql 的连接池源码",
            "使用 sql.DB.Stats() 监控连接池状态",
            "实现简单的泛型连接池",
            "配置 http.Transport 的连接复用"
        ],
        selfCheck: [
            "连接池的主要作用是什么？",
            "如何配置数据库连接池参数？",
            "http.Transport 如何复用连接？",
            "如何检测连接是否失效？"
        ],
        extensions: [
            "研究 pgx 连接池实现",
            "了解连接池的预热策略",
            "学习 gRPC 连接管理"
        ],
        sourceUrls: [
            "https://go.dev/src/database/sql/sql.go",
            "https://pkg.go.dev/net/http#Transport",
            "https://go.dev/doc/database/manage-connections"
        ]
    },
    "go-w23-4": {
        lessonId: "go-w23-4",
        background: [
            "【gnet】高性能事件驱动网络框架，使用 Reactor 模式。",
            "【cloudwego/netpoll】字节跳动开源，针对 RPC 场景优化。",
            "【Reactor 模式】主循环监听事件，分发给处理器。",
            "【零拷贝】减少数据在内核和用户空间之间的复制。",
            "【内存池】复用内存减少 GC 压力。"
        ],
        keyDifficulties: [
            "【标准库足够】大多数场景标准库 net 包已经足够。",
            "【复杂度增加】高性能框架增加了代码复杂度。",
            "【适用场景】百万连接、极低延迟等特殊场景。",
            "【权衡取舍】性能 vs 可维护性的权衡。"
        ],
        handsOnPath: [
            "使用 gnet 构建简单服务器",
            "对比 net 包和 gnet 的性能",
            "阅读 netpoll 的设计文档",
            "理解 Reactor 模式的实现"
        ],
        selfCheck: [
            "什么场景需要高性能网络框架？",
            "Reactor 模式的核心思想？",
            "零拷贝如何提升性能？",
            "为什么大多数情况标准库足够？"
        ],
        extensions: [
            "研究 fasthttp 的实现",
            "了解 DPDK 用户态网络",
            "学习内核旁路技术"
        ],
        sourceUrls: [
            "https://github.com/panjf2000/gnet",
            "https://github.com/cloudwego/netpoll",
            "https://go.dev/blog/io2013-talk-concurrency"
        ]
    }
}

export const week23Quizzes: Record<string, QuizQuestion[]> = {
    "go-w23-1": [
        {
            id: "go-w23-1-q1",
            question: "net.Conn 接口提供什么功能？",
            options: ["仅读取", "仅写入", "读写和关闭", "仅关闭"],
            answer: 2,
            rationale: "net.Conn 是通用连接接口，提供 Read、Write、Close 等方法。"
        },
        {
            id: "go-w23-1-q2",
            question: "如何设置连接读取超时？",
            options: ["SetTimeout", "SetReadDeadline", "ReadTimeout", "Timeout"],
            answer: 1,
            rationale: "使用 SetReadDeadline 设置读取超时的截止时间。"
        }
    ],
    "go-w23-2": [
        {
            id: "go-w23-2-q1",
            question: "Linux 上 Go 使用什么进行 I/O 多路复用？",
            options: ["select", "poll", "epoll", "io_uring"],
            answer: 2,
            rationale: "Go 在 Linux 上使用 epoll 进行高效的 I/O 多路复用。"
        },
        {
            id: "go-w23-2-q2",
            question: "macOS 上 Go 使用什么进行 I/O 多路复用？",
            options: ["select", "poll", "epoll", "kqueue"],
            answer: 3,
            rationale: "Go 在 BSD/macOS 上使用 kqueue。"
        }
    ],
    "go-w23-3": [
        {
            id: "go-w23-3-q1",
            question: "连接池的主要作用是什么？",
            options: ["增加连接", "减少连接", "复用连接减少开销", "限制连接"],
            answer: 2,
            rationale: "连接池通过复用连接减少建立连接的开销。"
        },
        {
            id: "go-w23-3-q2",
            question: "哪个参数控制数据库最大打开连接数？",
            options: ["MaxOpenConns", "MaxIdleConns", "ConnMaxLifetime", "MaxConns"],
            answer: 0,
            rationale: "MaxOpenConns 设置数据库的最大打开连接数。"
        }
    ],
    "go-w23-4": [
        {
            id: "go-w23-4-q1",
            question: "gnet 使用什么设计模式？",
            options: ["MVC", "Singleton", "Reactor", "Observer"],
            answer: 2,
            rationale: "gnet 使用 Reactor 模式实现高性能事件驱动。"
        },
        {
            id: "go-w23-4-q2",
            question: "什么场景需要高性能网络框架？",
            options: ["普通 Web 应用", "百万级连接", "简单 API", "小型服务"],
            answer: 1,
            rationale: "百万级连接、极低延迟等特殊场景才需要高性能网络框架。"
        }
    ]
}
