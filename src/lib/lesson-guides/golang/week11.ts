import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "go-w11-1": {
        lessonId: "go-w11-1",
        background: [
            "【Goroutine】使用 go 关键字启动轻量级并发执行单元。",
            "【调度器】Go 运行时调度 goroutine 到 OS 线程。",
            "【低开销】goroutine 初始栈很小（2KB），可以创建成千上万个。"
        ],
        keyDifficulties: ["【生命周期】main 函数退出时所有 goroutine 被终止。", "【无返回值】goroutine 不能直接返回值，需用 channel。"],
        handsOnPath: ["启动 goroutine", "观察并发执行", "使用 sync.WaitGroup 等待"],
        selfCheck: ["goroutine 和线程的区别？", "如何等待 goroutine 完成？"],
        extensions: ["学习 GOMAXPROCS 控制并行度"],
        sourceUrls: ["https://gobyexample.com/goroutines", "https://go.dev/tour/concurrency/1", "https://go.dev/doc/effective_go#goroutines"]
    },
    "go-w11-2": {
        lessonId: "go-w11-2",
        background: [
            "【Channel 定义】make(chan T) 创建无缓冲 channel。",
            "【阻塞语义】无缓冲 channel 发送和接收都会阻塞直到对方准备好。",
            "【关闭】close(ch) 关闭 channel，可用 range 遍历。"
        ],
        keyDifficulties: ["【关闭规则】只有发送方关闭，接收已关闭 channel 返回零值。", "【死锁】不当使用会导致死锁。"],
        handsOnPath: ["创建和使用 channel", "用 range 遍历 channel", "测试关闭行为"],
        selfCheck: ["无缓冲 channel 何时阻塞？", "谁应该关闭 channel？"],
        extensions: ["学习 channel 的内部实现"],
        sourceUrls: ["https://gobyexample.com/channels", "https://go.dev/tour/concurrency/2", "https://go.dev/doc/effective_go#channels"]
    },
    "go-w11-3": {
        lessonId: "go-w11-3",
        background: [
            "【缓冲 Channel】make(chan T, n) 创建容量为 n 的缓冲 channel。",
            "【非阻塞】缓冲未满时发送不阻塞，非空时接收不阻塞。",
            "【select】同时监听多个 channel，随机选择就绪的执行。"
        ],
        keyDifficulties: ["【default】select 的 default 分支用于非阻塞操作。", "【超时】结合 time.After 实现超时。"],
        handsOnPath: ["创建缓冲 channel", "使用 select 多路复用", "实现超时控制"],
        selfCheck: ["缓冲和无缓冲 channel 的区别？", "select 如何选择分支？"],
        extensions: ["学习 nil channel 在 select 中的作用"],
        sourceUrls: ["https://gobyexample.com/channel-buffering", "https://gobyexample.com/select", "https://go.dev/tour/concurrency/5"]
    }
}

export const week11Quizzes: Record<string, QuizQuestion[]> = {
    "go-w11-1": [
        { id: "go-w11-1-q1", question: "goroutine 的初始栈大小是多少？", options: ["1MB", "约 2KB", "64KB", "无栈"], answer: 1, rationale: "goroutine 初始栈很小（约 2KB），可以根据需要增长。" },
        { id: "go-w11-1-q2", question: "main 函数退出时 goroutine 会怎样？", options: ["继续运行", "被终止", "转为后台", "报错"], answer: 1, rationale: "main 函数退出时所有 goroutine 被立即终止。" }
    ],
    "go-w11-2": [
        { id: "go-w11-2-q1", question: "无缓冲 channel 的特点是什么？", options: ["发送不阻塞", "发送和接收都会阻塞直到对方准备好", "自动缓冲", "异步发送"], answer: 1, rationale: "无缓冲 channel 的发送和接收是同步的，双方都就绪才能进行。" },
        { id: "go-w11-2-q2", question: "从已关闭的 channel 接收会怎样？", options: ["panic", "返回零值和 false", "阻塞", "报错"], answer: 1, rationale: "从已关闭的 channel 接收会立即返回零值，第二个返回值为 false。" }
    ],
    "go-w11-3": [
        { id: "go-w11-3-q1", question: "select 语句如何选择分支？", options: ["按顺序", "随机选择就绪的分支", "选最快的", "选第一个"], answer: 1, rationale: "select 会随机选择一个就绪的分支执行，避免饥饿。" },
        { id: "go-w11-3-q2", question: "select 的 default 分支用于什么？", options: ["错误处理", "非阻塞操作", "必须有", "日志"], answer: 1, rationale: "default 分支在没有其他分支就绪时立即执行，实现非阻塞。" }
    ]
}
