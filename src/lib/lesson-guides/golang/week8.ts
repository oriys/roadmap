import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "go-w8-1": {
        lessonId: "go-w8-1",
        background: [
            "【泛型语法】func Name[T any](v T) T {} 定义泛型函数。",
            "【类型参数】方括号中定义类型参数，any 是最宽松的约束。",
            "【类型推断】调用泛型函数时通常可以省略类型参数。"
        ],
        keyDifficulties: ["【约束限制】any 约束太宽松，无法使用 + 等运算符。", "【何时用泛型】容器、算法等需要类型安全时使用。"],
        handsOnPath: ["编写泛型函数", "使用类型推断调用", "对比泛型和接口"],
        selfCheck: ["泛型函数的语法是什么？", "什么时候应该使用泛型？"],
        extensions: ["学习 slices 和 maps 包的泛型函数"],
        sourceUrls: ["https://gobyexample.com/generics", "https://go.dev/blog/intro-generics", "https://go.dev/doc/tutorial/generics"]
    },
    "go-w8-2": {
        lessonId: "go-w8-2",
        background: [
            "【泛型类型】type Stack[T any] struct {} 定义泛型类型。",
            "【类型约束】约束可以是接口，也可以使用 | 组合类型。",
            "【constraints 包】提供 Ordered、Signed 等常用约束。"
        ],
        keyDifficulties: ["【约束语法】~int 表示底层类型是 int 的所有类型。", "【方法约束】接口约束可以包含方法签名。"],
        handsOnPath: ["定义泛型类型", "使用自定义约束", "使用 constraints 包"],
        selfCheck: ["如何定义泛型类型？", "~ 在约束中的含义？"],
        extensions: ["学习约束类型推断"],
        sourceUrls: ["https://go.dev/ref/spec#Type_parameter_declarations", "https://pkg.go.dev/golang.org/x/exp/constraints", "https://go.dev/blog/when-generics"]
    },
    "go-w8-3": {
        lessonId: "go-w8-3",
        background: [
            "【泛型指导】优先考虑接口，泛型用于类型安全的容器和算法。",
            "【避免过度】不要为了泛型而泛型，保持代码简单。",
            "【编译成本】泛型可能增加编译时间，权衡使用。"
        ],
        keyDifficulties: ["【接口 vs 泛型】运行时多态用接口，编译时类型安全用泛型。", "【代码膨胀】泛型实例化可能导致二进制增大。"],
        handsOnPath: ["重构代码对比接口和泛型方案", "测量泛型对编译时间的影响", "阅读标准库泛型代码"],
        selfCheck: ["何时用接口何时用泛型？", "泛型有什么缺点？"],
        extensions: ["学习泛型的实现原理"],
        sourceUrls: ["https://go.dev/blog/when-generics", "https://go-proverbs.github.io/", "https://go.dev/doc/effective_go"]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "go-w8-1": [
        { id: "go-w8-1-q1", question: "Go 泛型是哪个版本引入的？", options: ["Go 1.0", "Go 1.18", "Go 1.11", "Go 2.0"], answer: 1, rationale: "Go 1.18 引入了泛型支持。" },
        { id: "go-w8-1-q2", question: "any 是什么约束？", options: ["只允许字符串", "interface{} 的别名，最宽松约束", "只允许数值", "不允许任何类型"], answer: 1, rationale: "any 是 interface{} 的别名，是最宽松的类型约束。" }
    ],
    "go-w8-2": [
        { id: "go-w8-2-q1", question: "~int 在类型约束中表示什么？", options: ["int 指针", "底层类型是 int 的所有类型", "只有 int", "int 或 nil"], answer: 1, rationale: "~ 表示底层类型约束，~int 匹配所有底层类型是 int 的类型。" },
        { id: "go-w8-2-q2", question: "constraints.Ordered 约束包含什么类型？", options: ["只有整数", "支持 < > 比较的类型", "所有类型", "只有字符串"], answer: 1, rationale: "Ordered 约束包含所有支持 < > <= >= 比较运算符的类型。" }
    ],
    "go-w8-3": [
        { id: "go-w8-3-q1", question: "什么场景更适合用接口而非泛型？", options: ["类型安全容器", "编译时类型检查", "运行时多态行为", "算法实现"], answer: 2, rationale: "需要运行时多态行为时用接口，编译时类型安全用泛型。" }
    ]
}
