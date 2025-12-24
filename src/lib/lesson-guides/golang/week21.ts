import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week21Guides: Record<string, LessonGuide> = {
    "go-w21-1": {
        lessonId: "go-w21-1",
        background: [
            "【GMP 模型】Go 调度器使用 G（Goroutine）、M（Machine/OS线程）、P（Processor/逻辑处理器）三级结构。",
            "【G 结构体】runtime.g 包含栈指针、程序计数器、当前 M、状态等信息。",
            "【M 结构体】runtime.m 表示操作系统线程，包含当前 G、关联的 P、系统调用状态等。",
            "【P 结构体】runtime.p 管理本地 G 队列（runq），GOMAXPROCS 决定 P 的数量。",
            "【全局队列】除了 P 的本地队列，还有全局运行队列供所有 P 共享。"
        ],
        keyDifficulties: [
            "【M:P 绑定】M 必须绑定 P 才能执行 G，系统调用时 M 可能释放 P。",
            "【工作窃取】P 本地队列为空时，从全局队列或其他 P 窃取 G。",
            "【自旋 M】空闲 M 会自旋等待新任务，避免频繁休眠/唤醒开销。",
            "【Hand Off】M 进入系统调用时，会把 P 交给其他 M 继续执行。"
        ],
        handsOnPath: [
            "使用 GODEBUG=schedtrace=1000 观察调度器状态",
            "阅读 runtime/proc.go 中的 schedule 函数",
            "使用 go tool trace 可视化调度过程",
            "编写代码触发工作窃取场景"
        ],
        selfCheck: [
            "G、M、P 分别代表什么？",
            "GOMAXPROCS 控制的是什么？",
            "什么是工作窃取？",
            "M 进入系统调用时 P 会怎样？"
        ],
        extensions: [
            "阅读 Go 调度器设计文档",
            "研究 NUMA 感知调度提案",
            "了解协程与线程的性能差异"
        ],
        sourceUrls: [
            "https://go.dev/src/runtime/HACKING.md",
            "https://go.dev/src/runtime/proc.go",
            "https://docs.google.com/document/d/1TTj4T2JO42uD5ID9e89oa0sLKhJYD0Y_kqxDv3I3XMw"
        ]
    },
    "go-w21-2": {
        lessonId: "go-w21-2",
        background: [
            "【schedule 函数】调度器主循环，选择下一个要执行的 G。",
            "【findrunnable】按优先级查找可运行的 G：本地队列 → 全局队列 → 网络轮询 → 工作窃取。",
            "【runqget/runqput】操作 P 本地运行队列的函数。",
            "【globrunqget】从全局队列批量获取 G 到本地队列。",
            "【stealWork】从其他 P 窃取一半的 G。"
        ],
        keyDifficulties: [
            "【公平调度】每 61 次调度检查一次全局队列，防止饥饿。",
            "【批量操作】从全局队列获取时批量获取以减少锁竞争。",
            "【随机窃取】工作窃取从随机位置开始，避免冲突。",
            "【网络轮询集成】findrunnable 会检查网络就绪的 G。"
        ],
        handsOnPath: [
            "阅读 schedule() 函数源码",
            "跟踪 findrunnable() 的执行路径",
            "使用 runtime.Gosched() 手动让出",
            "分析工作窃取的触发条件"
        ],
        selfCheck: [
            "schedule 函数的主要职责是什么？",
            "findrunnable 的查找顺序是什么？",
            "如何避免全局队列饥饿？",
            "工作窃取偷取多少 G？"
        ],
        extensions: [
            "研究调度器的锁优化",
            "了解调度延迟分析",
            "学习 schedtrace 输出解读"
        ],
        sourceUrls: [
            "https://go.dev/src/runtime/proc.go",
            "https://go.dev/doc/diagnostics#execution-tracer",
            "https://pkg.go.dev/runtime#hdr-Environment_Variables"
        ]
    },
    "go-w21-3": {
        lessonId: "go-w21-3",
        background: [
            "【sysmon】系统监控线程，独立于 GMP 模型，不需要 P 就能运行。",
            "【抢占检测】sysmon 检测运行超过 10ms 的 G，触发抢占。",
            "【网络轮询】定期轮询网络，唤醒等待 I/O 的 G。",
            "【强制 GC】如果超过 2 分钟没有 GC，sysmon 会强制触发。",
            "【Go 1.14 信号抢占】使用 SIGURG 信号实现异步抢占，解决紧密循环问题。"
        ],
        keyDifficulties: [
            "【协作式 vs 抢占式】Go 1.14 前是协作式抢占，依赖函数调用时的栈检查。",
            "【safe point】信号抢占需要在安全点注入，避免破坏程序状态。",
            "【retake】sysmon 可以从长时间系统调用的 M 上抢夺 P。",
            "【频率控制】sysmon 根据系统负载动态调整检查频率。"
        ],
        handsOnPath: [
            "编写紧密循环代码，观察 Go 1.14+ 的抢占行为",
            "使用 GODEBUG=asyncpreemptoff=1 禁用信号抢占",
            "阅读 sysmon 函数源码",
            "分析 preemptone 函数的实现"
        ],
        selfCheck: [
            "sysmon 线程的作用是什么？",
            "Go 1.14 引入了什么新的抢占机制？",
            "协作式和抢占式调度的区别？",
            "为什么紧密循环在旧版本无法被抢占？"
        ],
        extensions: [
            "阅读信号抢占设计文档",
            "研究其他语言的抢占机制",
            "了解实时系统的调度要求"
        ],
        sourceUrls: [
            "https://go.dev/src/runtime/proc.go",
            "https://go.dev/design/24543-non-cooperative-preemption",
            "https://pkg.go.dev/runtime"
        ]
    },
    "go-w21-4": {
        lessonId: "go-w21-4",
        background: [
            "【runtime2.go】定义了 G、M、P 等核心数据结构。",
            "【g.status】Goroutine 状态：_Grunnable、_Grunning、_Gwaiting、_Gsyscall 等。",
            "【m.curg】M 当前运行的 G。",
            "【p.runq】P 的本地运行队列，是一个环形缓冲区。",
            "【GODEBUG】环境变量控制运行时调试输出。"
        ],
        keyDifficulties: [
            "【状态机】G 的状态转换复杂，需要理解各种转换场景。",
            "【锁策略】运行时使用多种锁和原子操作保证并发安全。",
            "【调试困难】运行时代码使用特殊编译，难以直接调试。",
            "【版本变化】内部结构在不同版本可能变化。"
        ],
        handsOnPath: [
            "使用 GODEBUG=schedtrace=1000,scheddetail=1 查看详细信息",
            "阅读 runtime2.go 中的结构体定义",
            "使用 runtime.NumGoroutine() 监控 G 数量",
            "使用 runtime.Stack() 获取所有 G 的栈"
        ],
        selfCheck: [
            "G 有哪些主要状态？",
            "如何获取当前 Goroutine 数量？",
            "GODEBUG 如何使用？",
            "如何获取所有 Goroutine 的栈信息？"
        ],
        extensions: [
            "学习 delve 调试器的使用",
            "研究 runtime metrics",
            "了解 runtime/debug 包"
        ],
        sourceUrls: [
            "https://go.dev/src/runtime/runtime2.go",
            "https://pkg.go.dev/runtime#hdr-Environment_Variables",
            "https://go.dev/doc/diagnostics"
        ]
    }
}

export const week21Quizzes: Record<string, QuizQuestion[]> = {
    "go-w21-1": [
        {
            id: "go-w21-1-q1",
            question: "GMP 模型中，G 代表什么？",
            options: ["Global", "Goroutine", "Generator", "Garbage"],
            answer: 1,
            rationale: "G 代表 Goroutine，是 Go 的轻量级协程。"
        },
        {
            id: "go-w21-1-q2",
            question: "GOMAXPROCS 控制的是什么？",
            options: ["G 的数量", "M 的数量", "P 的数量", "CPU 核心数"],
            answer: 2,
            rationale: "GOMAXPROCS 控制 P（逻辑处理器）的数量，决定并行度。"
        },
        {
            id: "go-w21-1-q3",
            question: "M 进入系统调用时，P 会怎样？",
            options: ["一起阻塞", "被释放给其他 M", "被销毁", "继续执行"],
            answer: 1,
            rationale: "M 进入系统调用时会通过 Hand Off 将 P 交给其他 M，避免阻塞。"
        }
    ],
    "go-w21-2": [
        {
            id: "go-w21-2-q1",
            question: "findrunnable 首先在哪里查找可运行的 G？",
            options: ["全局队列", "P 的本地队列", "网络轮询", "其他 P"],
            answer: 1,
            rationale: "findrunnable 首先检查 P 的本地队列，然后是全局队列等。"
        },
        {
            id: "go-w21-2-q2",
            question: "工作窃取会从目标 P 偷取多少 G？",
            options: ["1 个", "一半", "全部", "随机数量"],
            answer: 1,
            rationale: "工作窃取会偷取目标 P 本地队列中一半的 G。"
        }
    ],
    "go-w21-3": [
        {
            id: "go-w21-3-q1",
            question: "sysmon 使用什么信号实现异步抢占？",
            options: ["SIGINT", "SIGTERM", "SIGURG", "SIGKILL"],
            answer: 2,
            rationale: "Go 1.14 使用 SIGURG 信号实现异步抢占。"
        },
        {
            id: "go-w21-3-q2",
            question: "sysmon 检测到 G 运行超过多久会触发抢占？",
            options: ["1ms", "10ms", "100ms", "1s"],
            answer: 1,
            rationale: "sysmon 检测运行超过 10ms 的 G 并触发抢占。"
        }
    ],
    "go-w21-4": [
        {
            id: "go-w21-4-q1",
            question: "如何获取当前 Goroutine 数量？",
            options: ["runtime.GOMAXPROCS()", "runtime.NumGoroutine()", "runtime.NumCPU()", "runtime.GC()"],
            answer: 1,
            rationale: "runtime.NumGoroutine() 返回当前存在的 Goroutine 数量。"
        },
        {
            id: "go-w21-4-q2",
            question: "哪个环境变量用于调试运行时？",
            options: ["GOPATH", "GOROOT", "GODEBUG", "GOOS"],
            answer: 2,
            rationale: "GODEBUG 环境变量控制运行时的调试输出。"
        }
    ]
}
