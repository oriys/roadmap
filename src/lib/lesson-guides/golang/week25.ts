import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week25Guides: Record<string, LessonGuide> = {
    "go-w25-1": {
        lessonId: "go-w25-1",
        background: [
            "【WebAssembly】可移植的二进制指令格式，在浏览器和服务端运行。",
            "【GOOS=js GOARCH=wasm】编译 Go 代码为 WebAssembly。",
            "【wasm_exec.js】Go 运行时的 JavaScript 支持代码。",
            "【main.wasm】编译产物，需要配合 wasm_exec.js 运行。",
            "【instantiateStreaming】高效加载 WASM 模块的 API。"
        ],
        keyDifficulties: [
            "【文件大小】标准 Go WASM 文件较大（几 MB），需要压缩。",
            "【启动时间】初始化 Go 运行时需要时间。",
            "【内存限制】浏览器对 WASM 内存有限制。",
            "【并发模型】浏览器中 Goroutine 调度受限。"
        ],
        handsOnPath: [
            "编译 Hello World 为 WASM",
            "设置 HTML 页面加载 WASM",
            "在浏览器中运行 Go 程序",
            "配置 HTTP 服务器正确的 MIME 类型"
        ],
        selfCheck: [
            "如何编译 Go 为 WebAssembly？",
            "wasm_exec.js 的作用是什么？",
            "Go WASM 文件为什么比较大？",
            "如何在浏览器中加载 WASM？"
        ],
        extensions: [
            "研究 WASM 压缩和优化",
            "了解 WASI 标准",
            "学习 WASM 多线程提案"
        ],
        sourceUrls: [
            "https://go.dev/wiki/WebAssembly",
            "https://go.dev/misc/wasm/wasm_exec.js",
            "https://golangbot.com/webassembly-using-go/"
        ]
    },
    "go-w25-2": {
        lessonId: "go-w25-2",
        background: [
            "【syscall/js】Go 与 JavaScript 交互的标准库包。",
            "【js.Global()】获取 JavaScript 全局对象（浏览器中是 window）。",
            "【js.Value】表示 JavaScript 值，可以调用方法、获取属性。",
            "【js.FuncOf】创建可被 JavaScript 调用的 Go 函数。",
            "【js.CopyBytesToJS/Go】在 Go 和 JavaScript 之间复制数据。"
        ],
        keyDifficulties: [
            "【回调阻塞】js.FuncOf 创建的回调在调用时会阻塞。",
            "【内存管理】需要注意 JavaScript 和 Go 之间的内存生命周期。",
            "【类型转换】Go 类型和 JavaScript 类型的转换。",
            "【异步处理】JavaScript 的异步模型与 Go 不同。"
        ],
        handsOnPath: [
            "读取和修改 DOM 元素",
            "注册事件监听器",
            "调用 JavaScript 函数",
            "从 JavaScript 调用 Go 函数"
        ],
        selfCheck: [
            "如何获取 document 对象？",
            "js.FuncOf 的用途是什么？",
            "如何操作 DOM？",
            "如何处理 JavaScript Promise？"
        ],
        extensions: [
            "研究 Web Workers 中使用 Go WASM",
            "了解 Canvas 绑定",
            "学习 WebGL 集成"
        ],
        sourceUrls: [
            "https://pkg.go.dev/syscall/js",
            "https://go.dev/wiki/WebAssembly#interacting-with-the-dom",
            "https://go.dev/wiki/WebAssembly#callbacks"
        ]
    },
    "go-w25-3": {
        lessonId: "go-w25-3",
        background: [
            "【TinyGo】针对嵌入式和 WASM 优化的 Go 编译器。",
            "【更小的输出】TinyGo 生成的 WASM 通常在 KB 级别。",
            "【WASI 支持】WebAssembly System Interface，标准化系统接口。",
            "【有限的标准库】部分标准库不完全支持。",
            "【不同的运行时】TinyGo 使用自己的垃圾回收器。"
        ],
        keyDifficulties: [
            "【兼容性】不是所有 Go 代码都能用 TinyGo 编译。",
            "【反射限制】TinyGo 对反射的支持有限。",
            "【goroutine 限制】某些 goroutine 功能受限。",
            "【调试困难】TinyGo 的调试支持不如标准 Go。"
        ],
        handsOnPath: [
            "安装 TinyGo",
            "编译简单程序为 WASM",
            "比较标准 Go 和 TinyGo 输出大小",
            "测试标准库兼容性"
        ],
        selfCheck: [
            "TinyGo 的主要优势是什么？",
            "TinyGo 有什么限制？",
            "什么是 WASI？",
            "何时选择 TinyGo 而非标准 Go？"
        ],
        extensions: [
            "研究 TinyGo 在嵌入式设备的应用",
            "了解 TinyGo 对 WASI 的支持",
            "学习 TinyGo 驱动开发"
        ],
        sourceUrls: [
            "https://tinygo.org/docs/guides/webassembly/",
            "https://tinygo.org/getting-started/install/",
            "https://tinygo.org/docs/guides/webassembly/wasi/"
        ]
    },
    "go-w25-4": {
        lessonId: "go-w25-4",
        background: [
            "【应用场景】计算密集型任务、代码复用、安全沙箱。",
            "【性能优势】WASM 接近原生性能，适合图像处理、加密等。",
            "【框架选择】Vugu、Vecty 等 Go WASM 前端框架。",
            "【调试工具】浏览器开发者工具支持 WASM 调试。",
            "【部署考虑】CDN、压缩、缓存策略。"
        ],
        keyDifficulties: [
            "【状态管理】前端状态管理与后端不同。",
            "【路由处理】客户端路由的实现。",
            "【与 JS 生态集成】如何与现有 JavaScript 库配合。",
            "【构建流程】需要配置构建和部署流程。"
        ],
        handsOnPath: [
            "构建交互式 Web 应用",
            "实现客户端计算功能",
            "集成现有 JavaScript 库",
            "优化加载性能"
        ],
        selfCheck: [
            "Go WASM 适合什么应用场景？",
            "如何调试 WASM 代码？",
            "Go WASM 的性能瓶颈在哪里？",
            "如何优化 WASM 文件大小？"
        ],
        extensions: [
            "研究 WASM GC 提案",
            "了解 WASM 组件模型",
            "学习 Wasmer/Wasmtime 运行时"
        ],
        sourceUrls: [
            "https://github.com/nicholasjackson/go-wasm-example",
            "https://www.vugu.org/",
            "https://github.com/hexops/vecty"
        ]
    }
}

export const week25Quizzes: Record<string, QuizQuestion[]> = {
    "go-w25-1": [
        {
            id: "go-w25-1-q1",
            question: "如何将 Go 编译为 WebAssembly？",
            options: [
                "go build -wasm",
                "GOOS=js GOARCH=wasm go build",
                "go wasm build",
                "go build -target=wasm"
            ],
            answer: 1,
            rationale: "使用 GOOS=js GOARCH=wasm 环境变量编译 Go 为 WebAssembly。"
        },
        {
            id: "go-w25-1-q2",
            question: "wasm_exec.js 的作用是什么？",
            options: ["编译 Go", "压缩 WASM", "提供 Go 运行时支持", "调试 WASM"],
            answer: 2,
            rationale: "wasm_exec.js 提供 Go WASM 运行所需的 JavaScript 运行时支持。"
        }
    ],
    "go-w25-2": [
        {
            id: "go-w25-2-q1",
            question: "如何获取 JavaScript 的 window 对象？",
            options: ["js.Window()", "js.Global()", "js.Document()", "js.GetWindow()"],
            answer: 1,
            rationale: "js.Global() 返回 JavaScript 全局对象，浏览器中是 window。"
        },
        {
            id: "go-w25-2-q2",
            question: "如何创建可被 JavaScript 调用的 Go 函数？",
            options: ["js.NewFunc()", "js.FuncOf()", "js.Callback()", "js.Handler()"],
            answer: 1,
            rationale: "js.FuncOf 创建可被 JavaScript 调用的 Go 回调函数。"
        }
    ],
    "go-w25-3": [
        {
            id: "go-w25-3-q1",
            question: "TinyGo 相比标准 Go 的主要优势是什么？",
            options: ["更快", "更多功能", "更小的输出文件", "更好的调试"],
            answer: 2,
            rationale: "TinyGo 生成的 WASM 文件通常在 KB 级别，远小于标准 Go。"
        },
        {
            id: "go-w25-3-q2",
            question: "WASI 是什么？",
            options: [
                "Web API 标准",
                "WebAssembly System Interface",
                "Windows API",
                "Web Application Security Interface"
            ],
            answer: 1,
            rationale: "WASI 是 WebAssembly System Interface，标准化的系统接口。"
        }
    ],
    "go-w25-4": [
        {
            id: "go-w25-4-q1",
            question: "Go WASM 最适合什么场景？",
            options: ["简单表单", "计算密集型任务", "静态页面", "SEO 优化"],
            answer: 1,
            rationale: "Go WASM 接近原生性能，适合图像处理、加密等计算密集型任务。"
        },
        {
            id: "go-w25-4-q2",
            question: "Vugu 是什么？",
            options: ["Go 测试框架", "Go WASM 前端框架", "Go ORM", "Go 日志库"],
            answer: 1,
            rationale: "Vugu 是一个用 Go 编写的 WASM 前端框架。"
        }
    ]
}
