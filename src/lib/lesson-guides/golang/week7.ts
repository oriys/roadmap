import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "go-w7-1": {
        lessonId: "go-w7-1",
        background: [
            "【方法定义】方法是带接收者的函数：func (t T) Method() {}。",
            "【接收者类型】值接收者操作副本，指针接收者操作原值。",
            "【选择规则】需要修改或避免复制时用指针接收者，否则用值接收者。"
        ],
        keyDifficulties: ["【方法集】值类型只有值接收者方法，指针类型有所有方法。", "【一致性】同一类型的所有方法应使用相同类型的接收者。"],
        handsOnPath: ["定义值接收者和指针接收者方法", "测试方法修改接收者的行为", "理解方法集规则"],
        selfCheck: ["值接收者和指针接收者的区别？", "什么时候用指针接收者？"],
        extensions: ["学习方法值和方法表达式"],
        sourceUrls: ["https://gobyexample.com/methods", "https://go.dev/tour/methods/1", "https://go.dev/doc/faq#methods_on_values_or_pointers"]
    },
    "go-w7-2": {
        lessonId: "go-w7-2",
        background: [
            "【接口定义】接口是方法签名的集合：type Reader interface { Read([]byte) (int, error) }。",
            "【隐式实现】类型只需实现接口的所有方法即可满足接口，无需显式声明。",
            "【接口值】接口变量存储具体类型的值和类型信息。"
        ],
        keyDifficulties: ["【nil 接口】nil 接口值与包含 nil 值的接口不同。", "【小接口】Go 提倡小接口，如 io.Reader 只有一个方法。"],
        handsOnPath: ["定义和实现接口", "使用接口作为函数参数", "理解接口的隐式实现"],
        selfCheck: ["Go 接口如何实现多态？", "为什么推荐小接口？"],
        extensions: ["学习标准库的常用接口如 io.Reader/Writer"],
        sourceUrls: ["https://gobyexample.com/interfaces", "https://go.dev/doc/effective_go#interfaces", "https://go.dev/tour/methods/9"]
    },
    "go-w7-3": {
        lessonId: "go-w7-3",
        background: [
            "【接口嵌入】接口可以嵌入其他接口形成更大的接口。",
            "【空接口】interface{} / any 可以存储任意类型的值。",
            "【类型断言】v.(T) 断言接口值的具体类型，v.(type) 用于 type switch。"
        ],
        keyDifficulties: ["【断言失败】类型断言失败会 panic，使用 v, ok := i.(T) 安全检查。", "【类型 switch】用于处理多种可能类型。"],
        handsOnPath: ["使用接口嵌入组合接口", "使用空接口和类型断言", "编写 type switch"],
        selfCheck: ["any 是什么类型的别名？", "如何安全地进行类型断言？"],
        extensions: ["学习 reflect 包进行运行时类型检查"],
        sourceUrls: ["https://gobyexample.com/interfaces", "https://go.dev/ref/spec#Type_assertions", "https://go.dev/blog/error-handling-and-go"]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "go-w7-1": [
        { id: "go-w7-1-q1", question: "值接收者方法能修改接收者的字段吗？", options: ["能", "不能，操作的是副本", "取决于字段类型", "编译错误"], answer: 1, rationale: "值接收者方法操作的是接收者的副本，修改不影响原值。" },
        { id: "go-w7-1-q2", question: "值类型能调用指针接收者方法吗？", options: ["不能", "能，编译器自动取地址", "编译错误", "运行时错误"], answer: 1, rationale: "Go 编译器会自动处理，值类型调用指针方法时自动取地址。" }
    ],
    "go-w7-2": [
        { id: "go-w7-2-q1", question: "Go 接口的实现是显式还是隐式的？", options: ["显式，需要声明 implements", "隐式，只需实现所有方法", "两者都需要", "不支持接口"], answer: 1, rationale: "Go 接口是隐式实现的，只需实现接口定义的所有方法。" },
        { id: "go-w7-2-q2", question: "io.Reader 接口有几个方法？", options: ["3个", "1个", "2个", "0个"], answer: 1, rationale: "io.Reader 只有一个 Read 方法，体现了 Go 小接口的设计哲学。" }
    ],
    "go-w7-3": [
        { id: "go-w7-3-q1", question: "any 是什么类型的别名？", options: ["object", "interface{}", "void", "any 是独立类型"], answer: 1, rationale: "Go 1.18 引入 any 作为 interface{} 的别名。" },
        { id: "go-w7-3-q2", question: "类型断言失败会发生什么？", options: ["返回零值", "panic", "返回 nil", "编译错误"], answer: 1, rationale: "类型断言失败会 panic，使用 v, ok := i.(T) 进行安全检查。" }
    ]
}
