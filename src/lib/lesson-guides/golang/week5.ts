import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "go-w5-1": {
        lessonId: "go-w5-1",
        background: [
            "【函数声明】func name(params) (returns) {} 是函数声明语法。",
            "【多返回值】Go 函数可以返回多个值，常用于返回结果和错误。",
            "【命名返回值】可以给返回值命名，简化 return 语句。"
        ],
        keyDifficulties: ["【值传递】Go 是值传递，参数是副本。要修改原值需传指针。", "【命名返回陷阱】命名返回值会被零值初始化，可能导致意外。"],
        handsOnPath: ["编写多返回值函数", "使用命名返回值", "对比值传递和指针传递"],
        selfCheck: ["Go 函数如何返回多个值？", "什么是命名返回值？"],
        extensions: ["学习函数作为值和类型"],
        sourceUrls: ["https://gobyexample.com/functions", "https://gobyexample.com/multiple-return-values", "https://go.dev/doc/effective_go#functions"]
    },
    "go-w5-2": {
        lessonId: "go-w5-2",
        background: [
            "【可变参数】使用 ...T 接收可变数量的参数，函数内部是切片。",
            "【展开切片】使用 slice... 展开切片传递给可变参数函数。",
            "【匿名函数】func() {} 定义匿名函数，可以立即调用或赋值给变量。"
        ],
        keyDifficulties: ["【可变参数位置】可变参数必须是最后一个参数。", "【匿名函数闭包】匿名函数可以捕获外部变量。"],
        handsOnPath: ["编写可变参数函数", "展开切片传参", "使用匿名函数"],
        selfCheck: ["可变参数在函数内是什么类型？", "如何将切片传递给可变参数？"],
        extensions: ["学习闭包的内存模型"],
        sourceUrls: ["https://gobyexample.com/variadic-functions", "https://gobyexample.com/closures", "https://go.dev/ref/spec#Function_types"]
    },
    "go-w5-3": {
        lessonId: "go-w5-3",
        background: [
            "【闭包定义】闭包是引用了外部变量的函数，变量生命周期被延长。",
            "【循环变量陷阱】循环变量在闭包中共享地址，需要局部副本或传参。",
            "【defer 语句】defer 延迟执行到函数返回前，多个 defer 按 LIFO 顺序执行。"
        ],
        keyDifficulties: ["【闭包捕获】闭包捕获变量的引用而非值，修改会影响闭包内的值。", "【defer 参数】defer 的参数在声明时求值，不是执行时。"],
        handsOnPath: ["创建返回闭包的函数", "演示循环变量陷阱及解决方案", "使用 defer 进行资源清理"],
        selfCheck: ["闭包捕获变量的方式是什么？", "defer 多个语句的执行顺序是？"],
        extensions: ["学习 defer 的性能考量"],
        sourceUrls: ["https://go.dev/doc/faq#closures_and_goroutines", "https://gobyexample.com/defer", "https://go.dev/doc/effective_go#defer"]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "go-w5-1": [
        { id: "go-w5-1-q1", question: "Go 是值传递还是引用传递？", options: ["引用传递", "值传递", "两者都支持", "取决于类型"], answer: 1, rationale: "Go 是值传递，函数参数是原值的副本。" },
        { id: "go-w5-1-q2", question: "命名返回值有什么作用？", options: ["提高性能", "简化 return 语句，返回值被零值初始化", "必须使用", "无作用"], answer: 1, rationale: "命名返回值会被零值初始化，可以简化 return。" }
    ],
    "go-w5-2": [
        { id: "go-w5-2-q1", question: "可变参数在函数内部是什么类型？", options: ["数组", "切片", "指针", "map"], answer: 1, rationale: "可变参数 ...T 在函数内部是 []T 切片类型。" },
        { id: "go-w5-2-q2", question: "如何将切片传递给可变参数函数？", options: ["直接传递", "使用 slice...", "使用 &slice", "使用 *slice"], answer: 1, rationale: "使用 slice... 展开切片传递给可变参数函数。" }
    ],
    "go-w5-3": [
        { id: "go-w5-3-q1", question: "多个 defer 语句的执行顺序是？", options: ["FIFO（先进先出）", "LIFO（后进先出）", "随机", "并行"], answer: 1, rationale: "defer 按 LIFO（后进先出）顺序执行，最后 defer 的最先执行。" },
        { id: "go-w5-3-q2", question: "defer 语句的参数何时求值？", options: ["执行时", "声明时", "函数返回时", "取决于类型"], answer: 1, rationale: "defer 的参数在声明时立即求值，不是执行时。" }
    ]
}
