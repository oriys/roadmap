import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "go-w9-1": {
        lessonId: "go-w9-1",
        background: [
            "【error 接口】error 是只有 Error() string 方法的接口。",
            "【errors.New】创建简单错误：errors.New(\"something went wrong\")。",
            "【fmt.Errorf】支持格式化：fmt.Errorf(\"failed: %v\", err)。"
        ],
        keyDifficulties: ["【错误即值】Go 将错误视为普通值，通过返回值传递。", "【nil 检查】if err != nil 是惯用的错误检查模式。"],
        handsOnPath: ["创建和返回错误", "使用 errors.New 和 fmt.Errorf", "编写错误检查代码"],
        selfCheck: ["error 接口有哪些方法？", "如何创建带格式的错误？"],
        extensions: ["学习自定义错误类型"],
        sourceUrls: ["https://gobyexample.com/errors", "https://go.dev/blog/error-handling-and-go", "https://pkg.go.dev/errors"]
    },
    "go-w9-2": {
        lessonId: "go-w9-2",
        background: [
            "【错误包装】使用 %w 包装错误：fmt.Errorf(\"context: %w\", err)。",
            "【errors.Is】检查错误链中是否包含特定错误。",
            "【errors.As】提取错误链中特定类型的错误。"
        ],
        keyDifficulties: ["【错误链】%w 创建错误链，保留原始错误信息。", "【Is vs As】Is 比较值相等，As 进行类型断言。"],
        handsOnPath: ["使用 %w 包装错误", "使用 errors.Is 检查错误", "使用 errors.As 提取错误"],
        selfCheck: ["%w 和 %v 在 fmt.Errorf 中的区别？", "errors.Is 和 == 的区别？"],
        extensions: ["学习 errors.Join 合并多个错误"],
        sourceUrls: ["https://go.dev/blog/go1.13-errors", "https://pkg.go.dev/errors#Is", "https://go.dev/wiki/Errors"]
    },
    "go-w9-3": {
        lessonId: "go-w9-3",
        background: [
            "【panic】panic 会立即停止当前函数并展开调用栈。",
            "【recover】recover 只能在 defer 中调用，用于捕获 panic。",
            "【使用场景】正常错误用 error，panic 用于不可恢复的情况。"
        ],
        keyDifficulties: ["【panic 不是异常】不要用 panic 做常规错误处理。", "【recover 限制】recover 只在 defer 函数中有效。"],
        handsOnPath: ["触发和捕获 panic", "编写 defer-recover 模式", "对比 panic 和 error"],
        selfCheck: ["什么情况应该 panic？", "recover 在哪里有效？"],
        extensions: ["学习 HTTP 服务器如何 recover panic"],
        sourceUrls: ["https://gobyexample.com/panic", "https://gobyexample.com/recover", "https://go.dev/blog/defer-panic-and-recover"]
    },
    "go-w9-4": {
        lessonId: "go-w9-4",
        background: [
            "【哨兵错误】预定义的可比较错误值：var ErrNotFound = errors.New(\"not found\")。",
            "【堆栈信息】runtime/debug.Stack() 获取堆栈追踪。",
            "【调试器】delve 是 Go 的调试器。"
        ],
        keyDifficulties: ["【哨兵问题】哨兵错误暴露实现细节，考虑使用 errors.Is。", "【日志堆栈】记录错误时附带堆栈有助于调试。"],
        handsOnPath: ["定义和使用哨兵错误", "获取并打印堆栈信息", "使用 delve 调试"],
        selfCheck: ["什么是哨兵错误？", "如何获取当前堆栈信息？"],
        extensions: ["学习 pkg/errors 等错误处理库"],
        sourceUrls: ["https://go.dev/wiki/Errors#sentinel-errors", "https://github.com/go-delve/delve", "https://pkg.go.dev/runtime/debug"]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "go-w9-1": [
        { id: "go-w9-1-q1", question: "error 接口有几个方法？", options: ["0个", "1个：Error() string", "2个", "3个"], answer: 1, rationale: "error 接口只有一个方法：Error() string。" },
        { id: "go-w9-1-q2", question: "Go 如何传递错误？", options: ["异常机制", "返回值", "全局变量", "回调函数"], answer: 1, rationale: "Go 通过函数返回值传递错误，不使用异常机制。" }
    ],
    "go-w9-2": [
        { id: "go-w9-2-q1", question: "fmt.Errorf 中 %w 的作用是什么？", options: ["格式化字符串", "包装错误保留错误链", "打印警告", "忽略错误"], answer: 1, rationale: "%w 用于包装错误，保留错误链便于使用 errors.Is/As。" },
        { id: "go-w9-2-q2", question: "errors.Is 和 == 的区别？", options: ["没有区别", "errors.Is 检查整个错误链", "== 更快", "errors.Is 只比较消息"], answer: 1, rationale: "errors.Is 会遍历整个错误链检查，== 只比较顶层错误。" }
    ],
    "go-w9-3": [
        { id: "go-w9-3-q1", question: "recover 在哪里有效？", options: ["任何地方", "只在 defer 函数中", "只在 main 函数中", "只在 goroutine 中"], answer: 1, rationale: "recover 只能在 defer 函数中调用，其他地方调用返回 nil。" },
        { id: "go-w9-3-q2", question: "什么情况应该使用 panic？", options: ["所有错误", "不可恢复的严重错误", "网络错误", "文件未找到"], answer: 1, rationale: "panic 用于不可恢复的情况，正常错误应该用 error 返回值。" }
    ],
    "go-w9-4": [
        { id: "go-w9-4-q1", question: "什么是哨兵错误？", options: ["运行时错误", "预定义的可比较错误值", "panic", "nil"], answer: 1, rationale: "哨兵错误是预定义的错误变量，如 io.EOF、sql.ErrNoRows。" },
        { id: "go-w9-4-q2", question: "如何检查错误是否为特定的哨兵错误？", options: ["err == sentinel", "errors.Is(err, sentinel)", "err.Match(sentinel)", "reflect.DeepEqual(err, sentinel)"], answer: 1, rationale: "errors.Is 会遍历错误链检查是否包含目标哨兵错误。" },
        { id: "go-w9-4-q3", question: "以下哪个是 Go 标准库中的哨兵错误？", options: ["errors.New(\"EOF\")", "io.EOF", "fmt.Error", "os.Panic"], answer: 1, rationale: "io.EOF 是标准库中最常见的哨兵错误，表示输入流结束。" }
    ]
}
