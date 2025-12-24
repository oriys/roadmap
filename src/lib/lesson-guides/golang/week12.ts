import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week12Guides: Record<string, LessonGuide> = {
    "go-w12-1": {
        lessonId: "go-w12-1",
        background: [
            "【sync.Mutex】互斥锁保护共享资源，Lock() 和 Unlock()。",
            "【sync.RWMutex】读写锁允许多读单写。",
            "【sync.WaitGroup】等待一组 goroutine 完成。"
        ],
        keyDifficulties: ["【死锁】忘记 Unlock 或重复 Lock 导致死锁。", "【defer Unlock】使用 defer mu.Unlock() 确保解锁。"],
        handsOnPath: ["使用 Mutex 保护共享变量", "使用 WaitGroup 等待 goroutine", "对比 RWMutex 和 Mutex"],
        selfCheck: ["Mutex 和 RWMutex 的区别？", "如何正确使用 WaitGroup？"],
        extensions: ["学习 sync.Once、sync.Pool"],
        sourceUrls: ["https://gobyexample.com/mutexes", "https://gobyexample.com/waitgroups", "https://pkg.go.dev/sync"]
    },
    "go-w12-2": {
        lessonId: "go-w12-2",
        background: [
            "【context.Background】根 Context，通常作为起点。",
            "【WithCancel】创建可取消的 Context。",
            "【WithTimeout/Deadline】设置超时和截止时间。"
        ],
        keyDifficulties: ["【传播取消】Context 取消会传播到所有子 Context。", "【第一个参数】Context 应作为函数的第一个参数。"],
        handsOnPath: ["创建和取消 Context", "实现超时控制", "在 HTTP 请求中使用 Context"],
        selfCheck: ["Context 的作用是什么？", "如何传播取消信号？"],
        extensions: ["学习 Context 在中间件中的应用"],
        sourceUrls: ["https://gobyexample.com/context", "https://go.dev/blog/context", "https://pkg.go.dev/context"]
    },
    "go-w12-3": {
        lessonId: "go-w12-3",
        background: [
            "【Worker Pool】固定数量 worker 从任务 channel 获取工作。",
            "【控制并发】限制并发数量避免资源耗尽。",
            "【优雅关闭】关闭输入 channel 并等待所有 worker 完成。"
        ],
        keyDifficulties: ["【通道关闭】只有发送方关闭任务 channel。", "【结果收集】使用结果 channel 收集 worker 输出。"],
        handsOnPath: ["实现简单 Worker Pool", "添加结果收集", "实现优雅关闭"],
        selfCheck: ["Worker Pool 模式的优点？", "如何优雅地关闭 Worker Pool？"],
        extensions: ["学习 errgroup 处理 worker 错误"],
        sourceUrls: ["https://gobyexample.com/worker-pools", "https://go.dev/blog/pipelines", "https://go.dev/talks/2012/concurrency.slide"]
    }
}

export const week12Quizzes: Record<string, QuizQuestion[]> = {
    "go-w12-1": [
        { id: "go-w12-1-q1", question: "sync.RWMutex 相比 Mutex 的优势是什么？", options: ["更快", "允许多个读者同时读取", "自动解锁", "无死锁"], answer: 1, rationale: "RWMutex 允许多个 goroutine 同时读取，只有写时才互斥。" },
        { id: "go-w12-1-q2", question: "WaitGroup 的三个方法是什么？", options: ["Start/Stop/Wait", "Add/Done/Wait", "Begin/End/Join", "Lock/Unlock/Close"], answer: 1, rationale: "WaitGroup 使用 Add 增加计数，Done 减少计数，Wait 阻塞等待。" }
    ],
    "go-w12-2": [
        { id: "go-w12-2-q1", question: "Context 应该作为函数的第几个参数？", options: ["最后一个", "第一个", "任意位置", "不传参数"], answer: 1, rationale: "惯例是将 Context 作为函数的第一个参数。" },
        { id: "go-w12-2-q2", question: "context.WithTimeout 的作用是什么？", options: ["无限等待", "创建带超时的 Context", "取消所有 Context", "延迟执行"], answer: 1, rationale: "WithTimeout 创建一个超时后自动取消的 Context。" }
    ],
    "go-w12-3": [
        { id: "go-w12-3-q1", question: "Worker Pool 模式的主要优点是什么？", options: ["更简单", "控制并发度避免资源耗尽", "更快", "无需 channel"], answer: 1, rationale: "Worker Pool 通过固定数量的 worker 控制并发度。" }
    ]
}
