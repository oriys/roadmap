import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week13Guides: Record<string, LessonGuide> = {
    "go-w13-1": {
        lessonId: "go-w13-1",
        background: [
            "【Fan-out】多个 goroutine 从同一 channel 读取任务并行处理。",
            "【Fan-in】多个 channel 的结果合并到一个 channel。",
            "【适用场景】CPU 密集型任务的并行处理。"
        ],
        keyDifficulties: ["【负载均衡】Go 调度器自动平衡 goroutine 负载。", "【结果顺序】fan-in 不保证结果顺序。"],
        handsOnPath: ["实现 fan-out 并行处理", "实现 fan-in 结果合并", "结合实际场景"],
        selfCheck: ["fan-out 和 fan-in 的区别？", "什么场景适合使用？"],
        extensions: ["学习 errgroup 同步错误"],
        sourceUrls: ["https://go.dev/blog/pipelines", "https://go.dev/talks/2012/concurrency.slide", "https://go.dev/talks/2013/advconc.slide"]
    },
    "go-w13-2": {
        lessonId: "go-w13-2",
        background: [
            "【Pipeline】每个阶段是一个 goroutine，通过 channel 连接。",
            "【可组合】阶段可以轻松添加、移除或重组。",
            "【背压】下游消费慢时上游自然阻塞。"
        ],
        keyDifficulties: ["【取消传播】使用 Context 或 done channel 传播取消。", "【错误处理】需要设计错误传播机制。"],
        handsOnPath: ["实现多阶段 pipeline", "添加取消机制", "处理阶段错误"],
        selfCheck: ["pipeline 模式的优点？", "如何正确关闭 pipeline？"],
        extensions: ["学习 errgroup 处理 pipeline 错误"],
        sourceUrls: ["https://go.dev/blog/pipelines", "https://pkg.go.dev/golang.org/x/sync/errgroup", "https://go.dev/wiki/Pipelines"]
    },
    "go-w13-3": {
        lessonId: "go-w13-3",
        background: [
            "【竞态检测】go run/build/test -race 启用检测器。",
            "【数据竞争】多个 goroutine 并发访问同一变量且至少一个写入。",
            "【报告内容】检测器报告竞争位置和堆栈。"
        ],
        keyDifficulties: ["【性能开销】-race 有较大性能开销，不用于生产。", "【非确定性】竞态检测依赖实际执行，可能漏检。"],
        handsOnPath: ["编写有竞态的代码", "使用 -race 检测", "修复竞态问题"],
        selfCheck: ["什么是数据竞争？", "-race 的局限性？"],
        extensions: ["学习 ThreadSanitizer 原理"],
        sourceUrls: ["https://go.dev/blog/race-detector", "https://go.dev/doc/articles/race_detector", "https://go.dev/wiki/DataRaceBugs"]
    }
}

export const week13Quizzes: Record<string, QuizQuestion[]> = {
    "go-w13-1": [
        { id: "go-w13-1-q1", question: "fan-out 模式的特点是什么？", options: ["单一 worker", "多个 goroutine 从同一 channel 读取任务", "串行处理", "无 channel"], answer: 1, rationale: "fan-out 让多个 goroutine 从同一任务 channel 获取工作并行处理。" },
        { id: "go-w13-1-q2", question: "fan-in 模式的作用是什么？", options: ["分发任务", "将多个 channel 的结果合并到一个 channel", "创建 goroutine", "关闭 channel"], answer: 1, rationale: "fan-in 将多个 goroutine 的输出合并到一个 channel 中统一处理。" },
        { id: "go-w13-1-q3", question: "fan-in 通常使用什么来合并多个 channel？", options: ["for 循环", "select 语句或 sync.WaitGroup", "mutex", "全局变量"], answer: 1, rationale: "fan-in 通常使用 select 监听多个 channel，或用 WaitGroup 协调合并。" }
    ],
    "go-w13-2": [
        { id: "go-w13-2-q1", question: "pipeline 模式中阶段如何连接？", options: ["函数调用", "通过 channel 连接", "共享内存", "HTTP 请求"], answer: 1, rationale: "pipeline 的每个阶段是 goroutine，通过 channel 连接传递数据。" },
        { id: "go-w13-2-q2", question: "pipeline 中某个阶段失败时如何通知其他阶段？", options: ["panic", "通过关闭 done channel 或 context 取消", "忽略", "重启程序"], answer: 1, rationale: "通常通过关闭 done channel 或 context.Cancel 来通知其他阶段停止。" },
        { id: "go-w13-2-q3", question: "pipeline 模式的每个阶段通常是什么？", options: ["一个文件", "一个接收输入 channel 并返回输出 channel 的函数", "一个 HTTP 服务", "一个数据库查询"], answer: 1, rationale: "每个 pipeline 阶段是一个函数，接收输入 channel，处理数据后通过输出 channel 传递。" }
    ],
    "go-w13-3": [
        { id: "go-w13-3-q1", question: "如何启用 Go 的竞态检测？", options: ["go detect -race", "go run/build/test -race", "go vet -race", "自动启用"], answer: 1, rationale: "使用 -race 标志启用竞态检测器：go run -race, go build -race, go test -race。" },
        { id: "go-w13-3-q2", question: "-race 检测器适合在生产环境使用吗？", options: ["是", "否，有较大性能开销", "只用于 web 服务", "只用于 CLI"], answer: 1, rationale: "-race 有 2-10 倍的性能开销和更多内存消耗，不适合生产环境。" }
    ]
}
