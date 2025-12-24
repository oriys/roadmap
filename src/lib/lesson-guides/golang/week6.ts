import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "go-w6-1": {
        lessonId: "go-w6-1",
        background: [
            "【指针语法】*T 是指向 T 类型的指针，&v 取变量地址，*p 解引用获取值。",
            "【安全指针】Go 指针不支持算术运算，比 C 更安全。",
            "【nil 指针】nil 是指针的零值，解引用 nil 指针会 panic。"
        ],
        keyDifficulties: ["【何时用指针】修改原值、避免大结构体复制、表示可选值时使用指针。", "【指针接收者】方法需要修改接收者时使用指针接收者。"],
        handsOnPath: ["声明和使用指针", "对比值传递和指针传递", "使用指针修改函数外的变量"],
        selfCheck: ["& 和 * 运算符的作用？", "Go 指针为什么比 C 更安全？"],
        extensions: ["学习 unsafe.Pointer 用于底层操作"],
        sourceUrls: ["https://gobyexample.com/pointers", "https://go.dev/tour/moretypes/1", "https://go.dev/doc/effective_go#pointers_vs_values"]
    },
    "go-w6-2": {
        lessonId: "go-w6-2",
        background: [
            "【结构体指针】使用指针接收者方法时，自动解引用 p.Field 等价于 (*p).Field。",
            "【切片和 Map】切片和 Map 本身是引用类型，通常不需要指针。",
            "【大结构体】传递大结构体时使用指针避免复制开销。"
        ],
        keyDifficulties: ["【引用语义】切片、map、channel 本身包含指针，传递不复制底层数据。", "【nil 检查】使用指针参数时需要检查 nil。"],
        handsOnPath: ["使用指针接收者修改结构体", "对比传递大小结构体的性能", "理解切片和 map 的引用语义"],
        selfCheck: ["切片为什么不需要指针？", "什么情况下使用指针接收者？"],
        extensions: ["学习接口值的内部表示（类型+值指针）"],
        sourceUrls: ["https://gobyexample.com/methods", "https://research.swtch.com/godata", "https://go.dev/doc/faq#pass_by_value"]
    },
    "go-w6-3": {
        lessonId: "go-w6-3",
        background: [
            "【垃圾回收】Go 使用并发三色标记清除 GC，自动管理内存。",
            "【逃逸分析】编译器决定变量在栈还是堆上分配。",
            "【内存模型】Go 内存模型定义了并发程序的可见性规则。"
        ],
        keyDifficulties: ["【逃逸】返回局部变量指针会导致逃逸到堆。", "【GC 调优】GOGC 环境变量控制 GC 频率。"],
        handsOnPath: ["使用 go build -gcflags='-m' 查看逃逸分析", "使用 runtime.GC() 手动触发 GC", "使用 runtime.ReadMemStats 查看内存统计"],
        selfCheck: ["什么是逃逸分析？", "Go GC 是什么类型？"],
        extensions: ["学习 pprof 进行内存分析"],
        sourceUrls: ["https://go.dev/blog/ismmkeynote", "https://tip.golang.org/doc/gc-guide", "https://go.dev/ref/mem"]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "go-w6-1": [
        { id: "go-w6-1-q1", question: "Go 指针支持算术运算吗？", options: ["是", "否，比 C 更安全", "只支持加法", "只支持减法"], answer: 1, rationale: "Go 指针不支持算术运算，这是设计决策使其更安全。" },
        { id: "go-w6-1-q2", question: "指针的零值是什么？", options: ["0", "nil", "undefined", "null"], answer: 1, rationale: "nil 是指针的零值，解引用 nil 指针会导致 panic。" }
    ],
    "go-w6-2": [
        { id: "go-w6-2-q1", question: "切片需要使用指针传递吗？", options: ["是", "否，切片本身是引用类型", "取决于大小", "总是需要"], answer: 1, rationale: "切片本身包含指针，传递切片不会复制底层数组。" },
        { id: "go-w6-2-q2", question: "什么时候应该使用指针接收者？", options: ["总是", "需要修改接收者或避免复制大结构体时", "从不", "只用于切片"], answer: 1, rationale: "需要修改接收者字段或避免复制大结构体时使用指针接收者。" }
    ],
    "go-w6-3": [
        { id: "go-w6-3-q1", question: "Go 使用什么类型的垃圾回收？", options: ["引用计数", "并发三色标记清除", "手动内存管理", "无 GC"], answer: 1, rationale: "Go 使用并发三色标记清除 GC，自动管理内存。" },
        { id: "go-w6-3-q2", question: "如何查看变量是否逃逸到堆？", options: ["go run -escape", "go build -gcflags='-m'", "go vet", "go fmt"], answer: 1, rationale: "使用 go build -gcflags='-m' 可以查看编译器的逃逸分析结果。" }
    ]
}
