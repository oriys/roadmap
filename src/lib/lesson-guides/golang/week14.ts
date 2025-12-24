import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week14Guides: Record<string, LessonGuide> = {
    "go-w14-1": {
        lessonId: "go-w14-1",
        background: [
            "【io 接口】io.Reader 和 io.Writer 是核心 I/O 接口。",
            "【os 包】os.Open/Create 打开和创建文件。",
            "【bufio 包】提供带缓冲的 I/O 操作，提高性能。"
        ],
        keyDifficulties: ["【关闭文件】使用 defer f.Close() 确保关闭。", "【错误处理】每个 I/O 操作都需要检查错误。"],
        handsOnPath: ["读写文件", "使用 bufio 提高性能", "实现 io.Reader 接口"],
        selfCheck: ["io.Reader 接口有什么方法？", "为什么用 bufio？"],
        extensions: ["学习 io.Copy, io.TeeReader"],
        sourceUrls: ["https://gobyexample.com/reading-files", "https://gobyexample.com/writing-files", "https://pkg.go.dev/io"]
    },
    "go-w14-2": {
        lessonId: "go-w14-2",
        background: [
            "【json.Marshal】将 Go 值编码为 JSON 字节切片。",
            "【json.Unmarshal】将 JSON 字节切片解码为 Go 值。",
            "【struct tag】使用 `json:\"name\"` 控制字段映射。"
        ],
        keyDifficulties: ["【未导出字段】小写字段不会被序列化。", "【数字类型】JSON 数字默认解码为 float64。"],
        handsOnPath: ["编码和解码 JSON", "使用 struct tag", "处理未知结构的 JSON"],
        selfCheck: ["omitempty 标签的作用？", "如何处理任意 JSON？"],
        extensions: ["学习 json.RawMessage 延迟解码"],
        sourceUrls: ["https://gobyexample.com/json", "https://go.dev/blog/json", "https://pkg.go.dev/encoding/json"]
    },
    "go-w14-3": {
        lessonId: "go-w14-3",
        background: [
            "【time 包】处理时间和持续时间。",
            "【slog 包】Go 1.21+ 的结构化日志。",
            "【regexp 包】正则表达式匹配。"
        ],
        keyDifficulties: ["【时间格式】Go 使用参考时间 2006-01-02 15:04:05。", "【时区】注意 time.Local 和 time.UTC 的区别。"],
        handsOnPath: ["格式化和解析时间", "使用 slog 记录日志", "编译和使用正则表达式"],
        selfCheck: ["Go 的时间格式化有什么特殊？", "slog 相比 log 的优势？"],
        extensions: ["学习 time.Ticker, time.Timer"],
        sourceUrls: ["https://gobyexample.com/time", "https://pkg.go.dev/log/slog", "https://pkg.go.dev/regexp"]
    },
    "go-w14-4": {
        lessonId: "go-w14-4",
        background: [
            "【flag 包】解析命令行参数。",
            "【go:embed】在编译时嵌入文件到二进制。",
            "【embed.FS】嵌入整个目录。"
        ],
        keyDifficulties: ["【flag.Parse】必须在读取 flag 前调用。", "【embed 限制】只能嵌入当前模块的文件。"],
        handsOnPath: ["定义和解析命令行参数", "使用 go:embed 嵌入文件", "嵌入目录并访问"],
        selfCheck: ["flag.String 返回什么类型？", "go:embed 有什么限制？"],
        extensions: ["学习 Cobra 构建复杂 CLI"],
        sourceUrls: ["https://gobyexample.com/command-line-flags", "https://go.dev/blog/embed", "https://pkg.go.dev/embed"]
    }
}

export const week14Quizzes: Record<string, QuizQuestion[]> = {
    "go-w14-1": [
        { id: "go-w14-1-q1", question: "io.Reader 接口有几个方法？", options: ["0个", "1个：Read", "2个", "3个"], answer: 1, rationale: "io.Reader 只有一个 Read(p []byte) (n int, err error) 方法。" }
    ],
    "go-w14-2": [
        { id: "go-w14-2-q1", question: "json.Unmarshal 将 JSON 数字默认解码为什么类型？", options: ["int", "int64", "float64", "string"], answer: 2, rationale: "JSON 数字没有整数/浮点区分，Go 默认解码为 float64。" }
    ],
    "go-w14-3": [
        { id: "go-w14-3-q1", question: "Go 时间格式化使用什么参考时间？", options: ["2000-01-01", "2006-01-02 15:04:05", "1970-01-01", "YYYY-MM-DD"], answer: 1, rationale: "Go 使用 2006-01-02 15:04:05 作为参考时间，每个数字是固定的。" }
    ],
    "go-w14-4": [
        { id: "go-w14-4-q1", question: "go:embed 指令的作用是什么？", options: ["动态加载文件", "编译时嵌入文件到二进制", "压缩文件", "加密文件"], answer: 1, rationale: "//go:embed 在编译时将文件内容嵌入到二进制中。" }
    ]
}
