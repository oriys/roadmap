import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week20Guides: Record<string, LessonGuide> = {
    "go-w20-1": {
        lessonId: "go-w20-1",
        background: [
            "【unsafe.Pointer】unsafe.Pointer 是通用指针类型，可以与任何指针类型互相转换，绕过 Go 的类型系统。",
            "【内存布局】unsafe.Sizeof 返回类型大小，Alignof 返回对齐要求，Offsetof 返回结构体字段偏移量。",
            "【转换规则】Go 定义了 6 种 unsafe.Pointer 合法转换模式，违反规则会导致未定义行为。",
            "【uintptr】uintptr 是整数类型，可以存储指针值但不阻止 GC 回收，必须在同一表达式中完成转换。",
            "【使用场景】性能关键代码、与 C 代码交互、实现特殊数据结构时可能需要 unsafe。"
        ],
        keyDifficulties: [
            "【GC 安全】uintptr 不是指针，GC 可能移动对象导致 uintptr 失效，必须在单个表达式中完成转换。",
            "【对齐问题】访问未对齐的内存可能导致性能下降或崩溃（某些架构）。",
            "【版本兼容】unsafe 操作依赖内部实现，Go 版本升级可能破坏代码。",
            "【调试困难】unsafe 代码出问题时难以调试，错误可能在运行时才暴露。"
        ],
        handsOnPath: [
            "使用 unsafe.Sizeof 和 unsafe.Alignof 检查类型内存布局",
            "通过 unsafe.Pointer 实现不同指针类型转换",
            "使用 unsafe.Offsetof 访问结构体字段",
            "实现零拷贝的 string 和 []byte 转换"
        ],
        selfCheck: [
            "unsafe.Pointer 的合法转换规则有哪些？",
            "为什么 uintptr 必须在同一表达式中转回指针？",
            "unsafe.Sizeof 和 reflect.TypeOf().Size() 的区别？",
            "何时应该使用 unsafe 包？"
        ],
        extensions: [
            "学习 go101.org 的 unsafe 使用模式详解",
            "研究标准库中 unsafe 的使用（如 sync.Pool、strings.Builder）",
            "了解 Go 1.20 引入的 unsafe.StringData 等新函数"
        ],
        sourceUrls: [
            "https://pkg.go.dev/unsafe",
            "https://go.dev/ref/spec#Package_unsafe",
            "https://go101.org/article/unsafe.html"
        ]
    },
    "go-w20-2": {
        lessonId: "go-w20-2",
        background: [
            "【CGO 启用】import \"C\" 启用 CGO，紧邻的注释块定义 C 代码、头文件引用和编译指令。",
            "【类型映射】C.int、C.char 等映射到 C 类型，Go 字符串需转换为 C.CString（需手动释放）。",
            "【内存管理】C 分配的内存不受 Go GC 管理，必须使用 C.free 手动释放。",
            "【构建过程】CGO 需要 C 编译器（gcc/clang），交叉编译更复杂。",
            "【性能开销】Go 调用 C 函数有 ~100ns 开销，频繁调用需要批处理优化。"
        ],
        keyDifficulties: [
            "【指针传递】Go 指针传入 C 有限制：指向的内存不能包含 Go 指针（cgo pointer passing rules）。",
            "【回调函数】C 调用 Go 函数需要 export 注释，且有额外的栈切换开销。",
            "【错误处理】C 错误（如 errno）需要显式检查，不会自动转为 Go error。",
            "【调试复杂】CGO 代码难以调试，需要同时理解 Go 和 C 的行为。"
        ],
        handsOnPath: [
            "编写简单的 CGO 程序调用 C 标准库函数",
            "在 Go 中使用 C 结构体和函数",
            "处理 C 字符串和 Go string 的转换",
            "链接外部 C 库（如 sqlite3）"
        ],
        selfCheck: [
            "如何在 Go 中调用 C 函数？",
            "C.CString 为什么需要手动释放？",
            "CGO 的性能开销来自哪里？",
            "Go 指针传入 C 有什么限制？"
        ],
        extensions: [
            "阅读 Dave Cheney 的 'CGO is not Go' 文章",
            "学习使用 purego 实现纯 Go 的 C 库调用",
            "研究 SWIG 自动生成 CGO 绑定"
        ],
        sourceUrls: [
            "https://go.dev/cmd/cgo/",
            "https://go.dev/wiki/cgo",
            "https://dave.cheney.net/2016/01/18/cgo-is-not-go"
        ]
    },
    "go-w20-3": {
        lessonId: "go-w20-3",
        background: [
            "【-gcflags】传递给 Go 编译器的标志，如 -N 禁用优化、-l 禁用内联、-m 显示逃逸分析。",
            "【-ldflags】传递给链接器的标志，如 -s 去符号表、-w 去 DWARF、-X 注入变量值。",
            "【构建模式】-buildmode 控制输出类型：default（可执行）、c-shared（动态库）、plugin 等。",
            "【调试构建】go build -gcflags='all=-N -l' 禁用所有包的优化，便于 delve 调试。",
            "【版本注入】go build -ldflags=\"-X main.version=v1.0.0\" 在编译时注入版本信息。"
        ],
        keyDifficulties: [
            "【all= 语法】-gcflags='all=-N -l' 对所有包生效，否则只对 main 包生效。",
            "【优化权衡】禁用优化会显著增大二进制体积和降低性能，仅用于调试。",
            "【strip 风险】-s -w 去除调试信息后无法使用 pprof 的行号信息。",
            "【构建缓存】修改 flags 可能导致缓存失效，重新编译所有依赖。"
        ],
        handsOnPath: [
            "使用 -gcflags='-m' 查看逃逸分析和内联决策",
            "使用 -ldflags='-s -w' 减小二进制体积",
            "通过 -ldflags='-X' 注入构建版本和时间",
            "对比优化和未优化构建的性能差异"
        ],
        selfCheck: [
            "-gcflags 和 -ldflags 的区别是什么？",
            "如何注入编译时变量？",
            "禁用优化对调试有什么帮助？",
            "-s 和 -w 标志分别去除什么？"
        ],
        extensions: [
            "学习 go tool compile 的所有标志",
            "研究 -trimpath 用于可重现构建",
            "了解 -race 的实现原理"
        ],
        sourceUrls: [
            "https://go.dev/cmd/compile/",
            "https://go.dev/cmd/link/",
            "https://go.dev/cmd/go/#hdr-Build_modes"
        ]
    },
    "go-w20-4": {
        lessonId: "go-w20-4",
        background: [
            "【plugin 包】Go 1.8 引入 plugin 包，支持在运行时加载 .so 共享对象文件。",
            "【构建插件】go build -buildmode=plugin 生成 .so 文件，只能导出 main 包中的符号。",
            "【加载插件】plugin.Open 加载 .so 文件，plugin.Lookup 按名称获取导出的变量或函数。",
            "【平台限制】plugin 仅支持 Linux、FreeBSD 和 macOS，不支持 Windows。",
            "【版本匹配】插件和主程序必须使用相同版本的 Go 编译，依赖版本也必须一致。"
        ],
        keyDifficulties: [
            "【无法卸载】加载的插件无法卸载，重复加载相同路径的插件返回相同句柄。",
            "【依赖冲突】插件和主程序的依赖版本必须完全一致，否则加载失败。",
            "【调试困难】插件内的 panic 和错误难以追踪。",
            "【类型断言】Lookup 返回 interface{}，需要类型断言转换为具体类型。"
        ],
        handsOnPath: [
            "创建一个导出函数的插件",
            "使用 -buildmode=plugin 构建插件",
            "在主程序中加载插件并调用函数",
            "实现基于插件的可扩展架构"
        ],
        selfCheck: [
            "如何构建 Go 插件？",
            "plugin 包的平台限制是什么？",
            "为什么插件无法卸载？",
            "Lookup 返回什么类型？"
        ],
        extensions: [
            "研究 HashiCorp 的 go-plugin RPC 方案",
            "学习使用 Yaegi 实现 Go 解释器",
            "了解 WASM 作为跨平台插件方案"
        ],
        sourceUrls: [
            "https://pkg.go.dev/plugin",
            "https://go.dev/blog/plugins",
            "https://go.dev/cmd/go/#hdr-Build_modes"
        ]
    }
}

export const week20Quizzes: Record<string, QuizQuestion[]> = {
    "go-w20-1": [
        {
            id: "go-w20-1-q1",
            question: "unsafe.Pointer 可以做什么？",
            options: [
                "只能转换为 uintptr",
                "与任何指针类型互相转换",
                "自动管理内存",
                "只读访问内存"
            ],
            answer: 1,
            rationale: "unsafe.Pointer 是通用指针类型，可以与任何指针类型互相转换，绕过类型系统。"
        },
        {
            id: "go-w20-1-q2",
            question: "为什么 uintptr 不能长期保存？",
            options: [
                "会溢出",
                "GC 可能移动对象导致失效",
                "编译器不允许",
                "性能太差"
            ],
            answer: 1,
            rationale: "uintptr 是整数不是指针，GC 可能移动对象导致 uintptr 指向的地址失效。"
        },
        {
            id: "go-w20-1-q3",
            question: "unsafe.Sizeof 返回什么？",
            options: [
                "运行时实际占用内存",
                "类型的内存大小（字节）",
                "对齐要求",
                "字段偏移量"
            ],
            answer: 1,
            rationale: "unsafe.Sizeof 返回类型的内存大小（字节），是编译时常量。"
        },
        {
            id: "go-w20-1-q4",
            question: "以下哪个不是 unsafe 包的函数？",
            options: [
                "Sizeof",
                "Alignof",
                "Offsetof",
                "Typeof"
            ],
            answer: 3,
            rationale: "unsafe 包提供 Sizeof、Alignof、Offsetof，没有 Typeof（那是 reflect 包的）。"
        }
    ],
    "go-w20-2": [
        {
            id: "go-w20-2-q1",
            question: "如何启用 CGO？",
            options: [
                "设置 CGO_ENABLED=1",
                "import \"C\"",
                "使用 go build -cgo",
                "在 go.mod 中声明"
            ],
            answer: 1,
            rationale: "在 Go 文件中 import \"C\" 启用 CGO，紧邻的注释块定义 C 代码。"
        },
        {
            id: "go-w20-2-q2",
            question: "C.CString 返回的内存由谁管理？",
            options: [
                "Go GC 自动回收",
                "C 运行时自动回收",
                "需要调用 C.free 手动释放",
                "不需要释放"
            ],
            answer: 2,
            rationale: "C.CString 分配的内存在 C 堆上，不受 Go GC 管理，必须用 C.free 手动释放。"
        },
        {
            id: "go-w20-2-q3",
            question: "Go 调用 C 函数的开销大约是多少？",
            options: [
                "约 1ns",
                "约 10ns",
                "约 100ns",
                "约 1ms"
            ],
            answer: 2,
            rationale: "Go 调用 C 函数有约 100ns 的开销，因为需要切换栈和保存寄存器。"
        }
    ],
    "go-w20-3": [
        {
            id: "go-w20-3-q1",
            question: "如何在编译时注入版本号？",
            options: [
                "go build -version=v1.0",
                "go build -ldflags=\"-X main.version=v1.0\"",
                "go build -gcflags=\"-version v1.0\"",
                "在 go.mod 中指定"
            ],
            answer: 1,
            rationale: "使用 -ldflags=\"-X main.version=v1.0\" 在链接阶段注入字符串变量值。"
        },
        {
            id: "go-w20-3-q2",
            question: "-gcflags='-m' 显示什么信息？",
            options: [
                "内存使用",
                "逃逸分析和内联决策",
                "编译时间",
                "依赖关系"
            ],
            answer: 1,
            rationale: "-gcflags='-m' 让编译器输出逃逸分析和内联决策信息。"
        },
        {
            id: "go-w20-3-q3",
            question: "-ldflags='-s -w' 的作用是什么？",
            options: [
                "静态链接",
                "去除符号表和 DWARF 调试信息",
                "启用优化",
                "跨平台编译"
            ],
            answer: 1,
            rationale: "-s 去除符号表，-w 去除 DWARF 调试信息，可以显著减小二进制体积。"
        }
    ],
    "go-w20-4": [
        {
            id: "go-w20-4-q1",
            question: "如何构建 Go 插件？",
            options: [
                "go build -o plugin.so",
                "go build -buildmode=plugin",
                "go plugin build",
                "go build -shared"
            ],
            answer: 1,
            rationale: "使用 go build -buildmode=plugin 构建 .so 插件文件。"
        },
        {
            id: "go-w20-4-q2",
            question: "Go plugin 的平台限制是什么？",
            options: [
                "仅 Linux",
                "仅 Linux 和 macOS",
                "Linux、FreeBSD 和 macOS",
                "所有平台"
            ],
            answer: 2,
            rationale: "Go plugin 仅支持 Linux、FreeBSD 和 macOS，不支持 Windows。"
        },
        {
            id: "go-w20-4-q3",
            question: "plugin.Lookup 返回什么类型？",
            options: [
                "具体类型",
                "unsafe.Pointer",
                "interface{}",
                "reflect.Value"
            ],
            answer: 2,
            rationale: "plugin.Lookup 返回 interface{}，需要类型断言转换为具体类型使用。"
        }
    ]
}
