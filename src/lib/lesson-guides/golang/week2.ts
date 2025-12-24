import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "go-w2-1": {
        lessonId: "go-w2-1",
        background: [
            "【var 声明】Go by Example：'var declares 1 or more variables'——var 关键字用于声明变量，支持类型推断和多变量声明。",
            "【短声明】':= 语法是声明和初始化变量的简写形式'——只能在函数内部使用，自动推断类型。",
            "【零值机制】'Variables declared without a corresponding initialization are zero-valued'——未初始化的变量自动获得零值：int 为 0，string 为空，bool 为 false。",
            "【const 常量】常量使用 const 关键字声明，可以是带类型或无类型的。无类型常量支持高精度计算。",
            "【iota 枚举】iota 是常量生成器，在 const 块中从 0 开始递增，用于创建枚举值。"
        ],
        keyDifficulties: [
            "【var vs :=】var 可在函数外使用（包级变量），:= 只能在函数内使用。:= 是声明+初始化，var 可以只声明不初始化。",
            "【类型推断】Go 编译器会根据右侧值推断变量类型。数字字面量默认为 int 或 float64。",
            "【常量精度】无类型数值常量具有任意精度，只在赋值或使用时才确定具体类型。",
            "【iota 技巧】可以使用 _ = iota 跳过值，或使用表达式如 1 << iota 创建位标志。"
        ],
        handsOnPath: [
            "使用 var 声明多个变量：`var x, y int = 1, 2`",
            "使用 := 短声明：`name := \"Go\"`",
            "观察零值：声明 `var n int` 后打印，输出 0",
            "创建 const 常量：`const Pi = 3.14159`",
            "使用 iota 创建枚举：`const (A = iota; B; C)`"
        ],
        selfCheck: [
            "var 和 := 的主要区别是什么？",
            "什么是零值？int、string、bool 的零值分别是什么？",
            "iota 在 const 块中如何工作？",
            "无类型常量有什么优势？"
        ],
        extensions: [
            "学习 Effective Go 中关于常量的最佳实践",
            "探索 iota 的高级用法如位运算和跳过值",
            "了解 Go 的类型推断机制"
        ],
        sourceUrls: [
            "https://gobyexample.com/variables",
            "https://gobyexample.com/constants",
            "https://go.dev/doc/effective_go#constants"
        ]
    },
    "go-w2-2": {
        lessonId: "go-w2-2",
        background: [
            "【词法作用域】Go 使用词法作用域（静态作用域），变量的可见性由代码位置决定。",
            "【作用域层级】Go 有四个作用域层级：宇宙级（内置）、包级、文件级（import）、块级。",
            "【变量遮蔽】内层块可以声明与外层同名的变量，会遮蔽外层变量，可能导致难以发现的 bug。",
            "【:= 陷阱】在内层块中使用 := 可能意外创建新变量而非修改外层变量。"
        ],
        keyDifficulties: [
            "【遮蔽检测】使用 go vet -shadow 或 staticcheck 检测变量遮蔽问题。",
            "【if 作用域】if 语句的初始化变量作用域限于 if-else 块。",
            "【循环变量】for 循环变量在每次迭代中是同一个变量（Go 1.22 之前），闭包中需要特别注意。"
        ],
        handsOnPath: [
            "创建包级变量和函数级变量，观察作用域",
            "在 if 块中声明同名变量，观察遮蔽行为",
            "使用 go vet 检查遮蔽问题",
            "编写闭包捕获循环变量的示例"
        ],
        selfCheck: [
            "Go 有哪些作用域层级？",
            "什么是变量遮蔽？如何避免？",
            "如何检测代码中的变量遮蔽问题？"
        ],
        extensions: [
            "学习 staticcheck 静态分析工具",
            "了解 Go 1.22 对循环变量语义的改变"
        ],
        sourceUrls: [
            "https://go.dev/ref/spec#Declarations_and_scope",
            "https://pkg.go.dev/golang.org/x/tools/go/analysis/passes/shadow",
            "https://go.dev/doc/effective_go"
        ]
    },
    "go-w2-3": {
        lessonId: "go-w2-3",
        background: [
            "【基本类型】Go 的基本类型包括：bool、string、int 系列、uint 系列、float 系列、complex 系列、byte、rune。",
            "【整数类型】有符号：int8, int16, int32, int64；无符号：uint8, uint16, uint32, uint64。int 和 uint 大小取决于平台。",
            "【浮点类型】float32 和 float64 遵循 IEEE 754 标准。推荐使用 float64。",
            "【rune 类型】rune 是 int32 的别名，表示一个 Unicode 码点。byte 是 uint8 的别名。"
        ],
        keyDifficulties: [
            "【平台相关】int 和 uint 在 32 位系统是 32 位，64 位系统是 64 位。需要确定大小时使用 int64。",
            "【浮点精度】浮点数有精度问题，不能直接用 == 比较。比较时应使用误差范围。",
            "【溢出行为】整数溢出会回绕，不会报错。使用 math 包的边界常量检查。"
        ],
        handsOnPath: [
            "打印各类型的零值和大小：`fmt.Printf(\"%T: %v\\n\", x, x)`",
            "使用 unsafe.Sizeof 查看类型大小",
            "测试整数溢出行为",
            "使用 unicode/utf8 包处理 rune"
        ],
        selfCheck: [
            "int 和 int64 有什么区别？",
            "为什么推荐使用 float64 而不是 float32？",
            "rune 和 byte 分别表示什么？"
        ],
        extensions: [
            "学习 Go 的 complex 复数类型",
            "了解 math 包提供的数值常量和函数"
        ],
        sourceUrls: [
            "https://go.dev/ref/spec#Types",
            "https://gobyexample.com/strings",
            "https://go.dev/blog/strings"
        ]
    },
    "go-w2-4": {
        lessonId: "go-w2-4",
        background: [
            "【字符串类型】Go 字符串是不可变的字节序列，通常包含 UTF-8 编码的文本。",
            "【原始字符串】使用反引号 `` 创建原始字符串，保留所有字符包括换行和反斜杠。",
            "【解释字符串】使用双引号 \"\" 创建，支持转义序列如 \\n、\\t、\\\"。",
            "【类型转换】Go 不支持隐式类型转换，必须使用 T(v) 语法显式转换。"
        ],
        keyDifficulties: [
            "【字符串底层】字符串是只读的字节切片。修改需要转换为 []byte 或 []rune。",
            "【长度计算】len(s) 返回字节数，不是字符数。使用 utf8.RuneCountInString 获取字符数。",
            "【转换规则】数值类型之间可以转换。字符串和 []byte/[]rune 可以互转。"
        ],
        handsOnPath: [
            "创建原始字符串和解释字符串对比",
            "计算包含中文的字符串长度",
            "进行各种类型转换操作",
            "使用 strings 包的函数处理字符串"
        ],
        selfCheck: [
            "原始字符串和解释字符串有什么区别？",
            "如何获取 UTF-8 字符串的字符数？",
            "Go 为什么要求显式类型转换？"
        ],
        extensions: [
            "学习 strings 和 strconv 包的常用函数",
            "了解 Unicode 规范化"
        ],
        sourceUrls: [
            "https://gobyexample.com/string-functions",
            "https://go.dev/ref/spec#Conversions",
            "https://pkg.go.dev/strings"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "go-w2-1": [
        {
            id: "go-w2-1-q1",
            question: ":= 短声明语法只能在哪里使用？",
            options: ["包级别", "函数内部", "任何地方", "只能在 main 函数中"],
            answer: 1,
            rationale: ":= 是函数内部的简写声明语法，不能在函数外（包级别）使用。"
        },
        {
            id: "go-w2-1-q2",
            question: "未初始化的 int 变量的零值是什么？",
            options: ["nil", "0", "undefined", "-1"],
            answer: 1,
            rationale: "Go 中未初始化的变量会自动获得零值，int 的零值是 0。"
        },
        {
            id: "go-w2-1-q3",
            question: "iota 在 const 块中的初始值是什么？",
            options: ["1", "0", "-1", "undefined"],
            answer: 1,
            rationale: "iota 在每个 const 块开始时从 0 开始，每新增一行递增 1。"
        }
    ],
    "go-w2-2": [
        {
            id: "go-w2-2-q1",
            question: "Go 使用什么类型的作用域？",
            options: ["动态作用域", "词法作用域（静态作用域）", "全局作用域", "无作用域"],
            answer: 1,
            rationale: "Go 使用词法作用域（静态作用域），变量的可见性由代码位置决定。"
        },
        {
            id: "go-w2-2-q2",
            question: "如何检测代码中的变量遮蔽问题？",
            options: ["go build", "go vet -shadow", "go run", "go fmt"],
            answer: 1,
            rationale: "使用 go vet -shadow 或 staticcheck 可以检测变量遮蔽问题。"
        }
    ],
    "go-w2-3": [
        {
            id: "go-w2-3-q1",
            question: "rune 是什么类型的别名？",
            options: ["int8", "int16", "int32", "int64"],
            answer: 2,
            rationale: "rune 是 int32 的别名，用于表示一个 Unicode 码点。"
        },
        {
            id: "go-w2-3-q2",
            question: "int 类型的大小是固定的吗？",
            options: ["是，固定 32 位", "是，固定 64 位", "否，取决于平台", "是，固定 8 位"],
            answer: 2,
            rationale: "int 和 uint 的大小取决于平台：32 位系统是 32 位，64 位系统是 64 位。"
        }
    ],
    "go-w2-4": [
        {
            id: "go-w2-4-q1",
            question: "Go 支持隐式类型转换吗？",
            options: ["是", "否，必须显式转换", "只有数值类型支持", "只有字符串支持"],
            answer: 1,
            rationale: "Go 不支持隐式类型转换，必须使用 T(v) 语法显式转换。"
        },
        {
            id: "go-w2-4-q2",
            question: "如何创建包含换行符的原始字符串？",
            options: ["使用双引号和 \\n", "使用反引号", "使用单引号", "不可能"],
            answer: 1,
            rationale: "使用反引号 `` 创建原始字符串，可以直接包含换行符和其他特殊字符。"
        }
    ]
}
