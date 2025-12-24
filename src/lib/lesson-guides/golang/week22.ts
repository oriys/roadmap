import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week22Guides: Record<string, LessonGuide> = {
    "go-w22-1": {
        lessonId: "go-w22-1",
        background: [
            "【Plan9 汇编】Go 使用 Plan9 风格的汇编语法，与 AT&T 和 Intel 语法都不同。",
            "【伪寄存器】FP（帧指针）、SP（栈指针）、SB（静态基址）、PC（程序计数器）。",
            "【TEXT 指令】TEXT symbol(SB), flags, $framesize-argsize 定义函数。",
            "【DATA/GLOBL】DATA 定义数据，GLOBL 声明全局符号。",
            "【架构特定】.s 文件通常按架构命名，如 xxx_amd64.s、xxx_arm64.s。"
        ],
        keyDifficulties: [
            "【寄存器命名】Go 汇编的寄存器名与硬件不完全对应，如 AX 而非 RAX。",
            "【操作数顺序】Plan9 汇编是 源 → 目标，与 Intel 语法相反。",
            "【伪 SP vs 硬件 SP】伪 SP 指向本地变量底部，硬件 SP 是真实栈指针。",
            "【符号引用】使用 symbol(SB) 引用全局符号，symbol(FP) 引用参数。"
        ],
        handsOnPath: [
            "阅读简单的标准库汇编代码（如 math 包）",
            "使用 go tool compile -S 查看编译器生成的汇编",
            "编写一个简单的汇编函数（如加法）",
            "理解 TEXT 指令的各个字段含义"
        ],
        selfCheck: [
            "Plan9 汇编与 Intel 语法的主要区别？",
            "FP、SP、SB、PC 分别代表什么？",
            "如何定义一个汇编函数？",
            "如何引用全局变量？"
        ],
        extensions: [
            "阅读 Plan9 汇编手册",
            "研究 runtime 包中的汇编代码",
            "了解不同架构的汇编差异"
        ],
        sourceUrls: [
            "https://go.dev/doc/asm",
            "https://9p.io/sys/doc/asm.html",
            "https://go.dev/src/runtime/asm_amd64.s"
        ]
    },
    "go-w22-2": {
        lessonId: "go-w22-2",
        background: [
            "【Go 1.17+ ABI】新的寄存器调用约定，参数通过寄存器传递而非栈。",
            "【栈帧布局】返回地址 → 调用者帧指针 → 局部变量 → 参数区。",
            "【NOSPLIT】表示函数不需要栈分裂检查，用于底层运行时代码。",
            "【ABIInternal vs ABI0】内部调用使用 ABIInternal，导出函数使用 ABI0 兼容。",
            "【go:noescape】指示编译器参数不会逃逸，可以放在栈上。"
        ],
        keyDifficulties: [
            "【寄存器分配】不同架构的寄存器分配规则不同。",
            "【栈增长】Go 支持动态栈增长，汇编函数需要正确声明栈大小。",
            "【指针映射】需要声明哪些位置包含指针，供 GC 使用。",
            "【对齐要求】栈和参数需要满足特定对齐要求。"
        ],
        handsOnPath: [
            "分析 Go 1.17+ 的寄存器传参",
            "使用 -gcflags=-S 比较新旧 ABI 差异",
            "编写 NOSPLIT 函数",
            "理解栈帧布局图"
        ],
        selfCheck: [
            "Go 1.17 引入了什么调用约定变化？",
            "NOSPLIT 标志的作用是什么？",
            "为什么需要声明栈帧大小？",
            "ABIInternal 和 ABI0 的区别？"
        ],
        extensions: [
            "阅读 Go 内部 ABI 规范",
            "研究调用约定对性能的影响",
            "了解 CGO 的调用约定"
        ],
        sourceUrls: [
            "https://go.dev/src/cmd/compile/abi-internal.md",
            "https://go.dev/src/runtime/stack.go",
            "https://go.dev/doc/go1.17#compiler"
        ]
    },
    "go-w22-3": {
        lessonId: "go-w22-3",
        background: [
            "【SIMD 指令】Single Instruction Multiple Data，单指令处理多个数据。",
            "【SSE】Streaming SIMD Extensions，128 位寄存器（XMM0-XMM15）。",
            "【AVX】Advanced Vector Extensions，256 位寄存器（YMM0-YMM15）。",
            "【AVX-512】512 位寄存器，更强大但并非所有 CPU 支持。",
            "【向量运算】ADDPS（加法）、MULPS（乘法）、MOVUPS（移动未对齐）等指令。"
        ],
        keyDifficulties: [
            "【对齐要求】SSE 需要 16 字节对齐，AVX 需要 32 字节对齐。",
            "【CPU 特性检测】需要运行时检测 CPU 是否支持特定指令集。",
            "【寄存器保存】调用其他函数时需要保存 XMM/YMM 寄存器。",
            "【可移植性】SIMD 代码通常需要为不同架构编写多个版本。"
        ],
        handsOnPath: [
            "阅读 crypto/aes 的 SIMD 优化代码",
            "使用 internal/cpu 检测 CPU 特性",
            "编写简单的向量加法函数",
            "对比 SIMD 和普通实现的性能"
        ],
        selfCheck: [
            "SSE 和 AVX 的寄存器宽度分别是多少？",
            "为什么需要对齐？",
            "如何检测 CPU 是否支持某指令集？",
            "SIMD 适合什么场景？"
        ],
        extensions: [
            "学习 Intel Intrinsics Guide",
            "研究 SIMD 在 JSON 解析中的应用",
            "了解 ARM NEON 指令集"
        ],
        sourceUrls: [
            "https://go.dev/src/crypto/aes/asm_amd64.s",
            "https://go.dev/src/math/dim_amd64.s",
            "https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html"
        ]
    },
    "go-w22-4": {
        lessonId: "go-w22-4",
        background: [
            "【文件组织】.go 文件声明函数签名，.s 文件实现汇编代码。",
            "【go tool objdump】反汇编可执行文件或目标文件。",
            "【go tool compile -S】输出编译器生成的汇编代码。",
            "【//go:noinline】阻止函数内联，便于调试。",
            "【构建约束】使用 //go:build 限制汇编文件的编译平台。"
        ],
        keyDifficulties: [
            "【调试困难】汇编代码难以使用普通调试器。",
            "【正确性验证】需要编写测试确保汇编实现正确。",
            "【性能测量】使用 benchmark 确认优化效果。",
            "【维护成本】汇编代码维护成本高，需要权衡。"
        ],
        handsOnPath: [
            "编写汇编函数并在 Go 中调用",
            "使用 go tool objdump 检查生成的代码",
            "为汇编函数编写测试和基准测试",
            "使用 //go:noinline 辅助调试"
        ],
        selfCheck: [
            "如何在 Go 中调用汇编函数？",
            "如何查看编译器生成的汇编？",
            "如何反汇编可执行文件？",
            "何时应该使用汇编优化？"
        ],
        extensions: [
            "学习 Go 汇编编写规范",
            "研究标准库中的汇编优化",
            "了解自动向量化"
        ],
        sourceUrls: [
            "https://pkg.go.dev/cmd/objdump",
            "https://pkg.go.dev/cmd/compile",
            "https://go.dev/wiki/AssemblyPolicy"
        ]
    }
}

export const week22Quizzes: Record<string, QuizQuestion[]> = {
    "go-w22-1": [
        {
            id: "go-w22-1-q1",
            question: "Go 汇编使用什么风格的语法？",
            options: ["Intel", "AT&T", "Plan9", "MASM"],
            answer: 2,
            rationale: "Go 使用 Plan9 风格的汇编语法。"
        },
        {
            id: "go-w22-1-q2",
            question: "Plan9 汇编中 SB 伪寄存器代表什么？",
            options: ["栈基址", "静态基址", "段基址", "源基址"],
            answer: 1,
            rationale: "SB 是 Static Base，用于引用全局符号。"
        },
        {
            id: "go-w22-1-q3",
            question: "TEXT 指令用于什么？",
            options: ["定义数据", "定义函数", "定义常量", "定义类型"],
            answer: 1,
            rationale: "TEXT 指令用于定义函数入口点。"
        }
    ],
    "go-w22-2": [
        {
            id: "go-w22-2-q1",
            question: "Go 1.17 对调用约定做了什么改变？",
            options: ["使用栈传参", "使用寄存器传参", "删除返回值", "增加参数限制"],
            answer: 1,
            rationale: "Go 1.17 引入寄存器传参的新 ABI。"
        },
        {
            id: "go-w22-2-q2",
            question: "NOSPLIT 标志表示什么？",
            options: ["不分割字符串", "不需要栈分裂检查", "不允许内联", "不导出符号"],
            answer: 1,
            rationale: "NOSPLIT 表示函数不需要栈分裂检查。"
        }
    ],
    "go-w22-3": [
        {
            id: "go-w22-3-q1",
            question: "SSE 寄存器的宽度是多少位？",
            options: ["64 位", "128 位", "256 位", "512 位"],
            answer: 1,
            rationale: "SSE 使用 128 位的 XMM 寄存器。"
        },
        {
            id: "go-w22-3-q2",
            question: "AVX 指令需要多少字节对齐？",
            options: ["8 字节", "16 字节", "32 字节", "64 字节"],
            answer: 2,
            rationale: "AVX 使用 256 位寄存器，需要 32 字节对齐。"
        }
    ],
    "go-w22-4": [
        {
            id: "go-w22-4-q1",
            question: "如何查看编译器生成的汇编代码？",
            options: ["go build -asm", "go tool compile -S", "go tool objdump", "go asm"],
            answer: 1,
            rationale: "使用 go tool compile -S 可以查看编译器生成的汇编。"
        },
        {
            id: "go-w22-4-q2",
            question: "汇编函数应该放在什么扩展名的文件中？",
            options: [".go", ".s", ".asm", ".a"],
            answer: 1,
            rationale: "Go 汇编代码放在 .s 文件中。"
        }
    ]
}
