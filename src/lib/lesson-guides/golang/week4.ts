import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "go-w4-1": {
        lessonId: "go-w4-1",
        background: [
            "【if 语句】Go 的 if 不需要括号包围条件，但大括号必须。可在条件前声明变量。",
            "【switch 语句】switch 默认每个 case 后 break，使用 fallthrough 继续执行下一个 case。",
            "【无表达式 switch】switch 不加表达式时等价于 switch true，可替代 if-else if 链。"
        ],
        keyDifficulties: [
            "【if 初始化】if err := doSomething(); err != nil {} 中 err 作用域限于 if-else 块。",
            "【fallthrough】与 C 不同，Go switch 默认 break。需要 fallthrough 才会继续执行。",
            "【类型 switch】switch v := i.(type) 可以根据接口的实际类型进行分支。"
        ],
        handsOnPath: ["使用 if 初始化语法", "编写无表达式 switch", "使用 fallthrough"],
        selfCheck: ["Go if 语句与 C 的区别？", "switch 为什么不需要 break？"],
        extensions: ["学习类型 switch 处理接口"],
        sourceUrls: ["https://gobyexample.com/if-else", "https://gobyexample.com/switch", "https://go.dev/doc/effective_go#control-structures"]
    },
    "go-w4-2": {
        lessonId: "go-w4-2",
        background: [
            "【for 唯一循环】Go 只有 for 一种循环关键字，可以模拟 while 和无限循环。",
            "【三种形式】for init; cond; post {}（标准）、for cond {}（while）、for {}（无限）。",
            "【break/continue】break 退出循环，continue 跳过本次迭代。可配合标签使用。"
        ],
        keyDifficulties: [
            "【无限循环】for {} 是无限循环，需要 break 或 return 退出。",
            "【标签】break label 和 continue label 可以跳出或继续外层循环。",
            "【goto】Go 支持 goto，但不鼓励使用，容易造成混乱。"
        ],
        handsOnPath: ["编写三种形式的 for 循环", "使用标签跳出嵌套循环", "用 for 替代 while"],
        selfCheck: ["Go 有几种循环关键字？", "如何实现 while 循环？"],
        extensions: ["了解 goto 的合理使用场景（如错误处理跳转）"],
        sourceUrls: ["https://gobyexample.com/for", "https://go.dev/ref/spec#For_statements", "https://go.dev/doc/effective_go#for"]
    },
    "go-w4-3": {
        lessonId: "go-w4-3",
        background: [
            "【for range】for range 用于遍历切片、数组、map、字符串、channel。",
            "【返回值】遍历切片返回 index 和 value；遍历 map 返回 key 和 value。",
            "【字符串遍历】for range 遍历字符串按 rune 迭代，非按字节。"
        ],
        keyDifficulties: [
            "【值复制】range 返回的 value 是副本，修改不影响原集合。",
            "【map 顺序】遍历 map 顺序是随机的。",
            "【循环变量】Go 1.22 前循环变量每次迭代是同一个地址，闭包需注意。"
        ],
        handsOnPath: ["遍历切片、map、字符串", "对比 range 字符串和 []byte", "测试 map 遍历顺序随机性"],
        selfCheck: ["range 遍历字符串返回什么？", "为什么修改 range 的 value 不影响原切片？"],
        extensions: ["学习 Go 1.22 的循环变量语义改变"],
        sourceUrls: ["https://gobyexample.com/range", "https://go.dev/wiki/Range", "https://go.dev/ref/spec#RangeClause"]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "go-w4-1": [
        { id: "go-w4-1-q1", question: "Go switch 语句默认行为是什么？", options: ["继续执行下一个 case", "每个 case 后自动 break", "报错", "返回 nil"], answer: 1, rationale: "Go switch 默认每个 case 后 break，需要 fallthrough 才会继续。" },
        { id: "go-w4-1-q2", question: "if err := f(); err != nil {} 中 err 的作用域是？", options: ["整个函数", "if-else 块", "包级别", "文件级别"], answer: 1, rationale: "if 初始化声明的变量作用域限于 if-else 块。" }
    ],
    "go-w4-2": [
        { id: "go-w4-2-q1", question: "Go 有几种循环关键字？", options: ["3种（for/while/do）", "1种（只有 for）", "2种（for/while）", "4种"], answer: 1, rationale: "Go 只有 for 一种循环关键字，可以模拟其他语言的 while 等。" },
        { id: "go-w4-2-q2", question: "如何在 Go 中实现 while 循环？", options: ["使用 while 关键字", "for condition {}", "loop {}", "repeat until"], answer: 1, rationale: "for condition {} 等价于其他语言的 while 循环。" }
    ],
    "go-w4-3": [
        { id: "go-w4-3-q1", question: "for range 遍历字符串返回什么类型的元素？", options: ["byte", "rune", "string", "int8"], answer: 1, rationale: "for range 遍历字符串按 rune（Unicode 码点）迭代，不是按字节。" },
        { id: "go-w4-3-q2", question: "for range 遍历 map 的顺序是？", options: ["插入顺序", "键排序", "随机顺序", "值排序"], answer: 2, rationale: "Go 故意将 map 遍历顺序随机化，避免程序依赖顺序。" }
    ]
}
