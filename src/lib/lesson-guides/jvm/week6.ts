import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "jvm-w6-1": {
        lessonId: "jvm-w6-1",
        background: [
            "【执行引擎概述】执行引擎是 JVM 的核心组件，负责执行 Class 文件中的字节码指令。执行引擎可以选择解释执行（逐条翻译执行）或编译执行（将字节码编译为本地代码后执行）。",
            "【解释器工作原理】解释器逐条读取字节码指令，翻译为对应的机器操作并执行。每次遇到相同指令都要重新翻译。优点是启动快、内存占用小；缺点是运行速度慢。",
            "【模板解释器】HotSpot 使用模板解释器（Template Interpreter）优化解释执行。每条字节码对应一个预编译的本地代码模板，解释时直接执行模板代码，比纯解释快很多。",
            "【解释器的价值】虽然 JIT 编译后性能更高，但解释器仍然重要：启动阶段快速执行代码、为 JIT 编译争取时间、支持逆优化回退、执行不常用代码（避免编译开销）。",
            "【混合模式】HotSpot 默认使用混合模式（-Xmixed）：解释执行和编译执行结合。可以通过 -Xint 强制纯解释执行，或 -Xcomp 强制编译执行（实际仍需解释器配合）。"
        ],
        keyDifficulties: [
            "【解释器实现】HotSpot 有两种解释器实现：C++ 解释器（较慢但可移植）和模板解释器（汇编实现，性能好）。模板解释器在启动时为每条字节码生成对应的本地代码存根。",
            "【指令分派】解释器的核心是指令分派（Dispatch）：读取下一条指令 → 跳转到对应处理代码 → 执行 → 循环。分派方式有：switch 分派、直接线程分派（Direct Threading）、间接线程分派。",
            "【栈帧结构】每个方法调用创建一个栈帧（Stack Frame），包含：局部变量表（存储参数和局部变量）、操作数栈（存储计算中间值）、动态链接（指向常量池）、返回地址。",
            "【解释执行的代价】解释执行的主要开销：指令分派开销（每条指令一次分派）、缺乏全局优化（无法跨指令优化）、频繁的内存访问（栈操作）。JIT 编译可消除这些开销。"
        ],
        handsOnPath: [
            "使用 java -Xint 强制解释执行，对比默认混合模式的性能差异。",
            "使用 -XX:+PrintInterpreter（调试版 JVM）查看解释器生成的模板代码。",
            "编写简单循环，对比解释执行和 JIT 编译后的执行时间差异。",
            "使用 -XX:+TraceBytecodes（调试版 JVM）跟踪每条字节码的执行。",
            "观察启动时间：-Xint 启动最快，-Xcomp 启动最慢（需要编译大量代码）。"
        ],
        selfCheck: [
            "解释执行和编译执行的主要区别是什么？",
            "什么是模板解释器？它如何优化解释执行？",
            "为什么有了 JIT 编译器，仍然需要解释器？",
            "-Xint、-Xmixed、-Xcomp 三种模式有什么区别？",
            "栈帧包含哪些部分？各有什么作用？",
            "解释执行的主要性能开销是什么？"
        ],
        extensions: [
            "研究 GraalVM 的 Truffle 框架如何实现高效的多语言解释器。",
            "了解 Zero 解释器（无汇编依赖的纯 C++ 解释器）的用途。",
            "探索 JIT 编译器如何与解释器协作实现分层编译。",
            "研究 JVM 启动优化技术：CDS（Class Data Sharing）、AppCDS、AOT。"
        ],
        sourceUrls: [
            "https://wiki.openjdk.org/display/HotSpot/Interpreter",
            "https://www.artima.com/insidejvm/ed2/jvm2.html",
            "https://docs.oracle.com/en/java/javase/21/vm/java-virtual-machine-technology-overview.html"
        ]
    },
    "jvm-w6-2": {
        lessonId: "jvm-w6-2",
        background: [
            "【热点探测概念】HotSpot JVM 的核心技术是热点探测：在运行时识别频繁执行的'热点'代码，然后对这些代码进行 JIT 编译优化。只编译热点代码可以平衡编译开销和执行效率。",
            "【方法调用计数器】JVM 为每个方法维护调用计数器（Invocation Counter），记录方法被调用的次数。当计数器超过阈值时，触发 JIT 编译。阈值由 -XX:CompileThreshold 设置（默认 10000）。",
            "【回边计数器】回边（Back Edge）是循环中跳回循环开头的控制流边。回边计数器（Back Edge Counter）统计循环执行次数。循环热点可能在方法调用计数器达到阈值之前就需要优化。",
            "【OSR 编译】OSR（On-Stack Replacement，栈上替换）允许在方法执行过程中，将解释执行的栈帧替换为编译后代码的栈帧。这对于长时间运行的循环特别重要，无需等待方法重新调用。",
            "【计数器衰减】为了反映代码的'热度'变化，计数器会定期衰减（减半）。如果一段时间内代码不再频繁执行，它可能被'冷却'，编译后的代码可能被丢弃以节省内存。"
        ],
        keyDifficulties: [
            "【编译触发条件】编译触发条件是：方法调用计数器 + 回边计数器 > 编译阈值。-XX:CompileThreshold=10000 意味着方法需要累计 10000 次'热度'才会被编译。分层编译时，不同层级有不同阈值。",
            "【分层编译级别】HotSpot 的分层编译（Tiered Compilation）有 5 个级别：Level 0（解释执行）→ Level 1-3（C1 编译，不同程度 profiling）→ Level 4（C2 完全优化）。代码从低级别晋升到高级别。",
            "【Profiling 数据】JVM 在解释执行和 C1 编译时收集 profiling 数据：类型信息（实际运行时类型）、分支跳转频率、方法调用次数。这些数据指导 C2 编译器做投机优化。",
            "【编译策略】不同的编译策略平衡启动时间和峰值性能：分层编译（默认）快速启动并逐步优化；仅 C2 编译启动慢但峰值高；仅 C1 编译启动快但峰值低。可用 -XX:TieredStopAtLevel 控制。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintCompilation 观察哪些方法被编译，注意编译级别（0-4）。",
            "编写热循环代码，观察 OSR 编译触发（输出中显示 % 符号表示 OSR）。",
            "调整 -XX:CompileThreshold 值，观察编译触发时机的变化。",
            "使用 -XX:TieredStopAtLevel=1 只使用 C1 编译，对比完整分层编译的性能。",
            "使用 jstat -compiler <pid> 监控 JIT 编译统计信息。"
        ],
        selfCheck: [
            "什么是热点代码？JVM 如何识别热点代码？",
            "方法调用计数器和回边计数器各有什么作用？",
            "什么是 OSR？为什么需要 OSR？",
            "分层编译有哪几个级别？各有什么特点？",
            "Profiling 数据包含哪些信息？如何指导优化？",
            "-XX:CompileThreshold 的默认值是多少？"
        ],
        extensions: [
            "研究 JIT 编译队列：方法如何排队等待编译、优先级如何确定。",
            "了解编译阻塞（Compilation Blocking）和异步编译的权衡。",
            "探索 -XX:+PrintInlining 了解方法内联决策。",
            "研究 Graal 编译器作为 C2 替代的性能特点。"
        ],
        sourceUrls: [
            "https://wiki.openjdk.org/display/HotSpot/MethodCounters",
            "https://docs.oracle.com/en/java/javase/21/vm/java-virtual-machine-technology-overview.html",
            "https://openjdk.org/groups/hotspot/docs/HotSpotGlossary.html"
        ]
    },
    "jvm-w6-3": {
        lessonId: "jvm-w6-3",
        background: [
            "【方法调用指令】JVM 有 5 种方法调用指令：invokestatic（静态方法）、invokespecial（构造器、私有方法、super）、invokevirtual（实例虚方法）、invokeinterface（接口方法）、invokedynamic（动态调用）。",
            "【静态绑定】invokestatic 和 invokespecial 调用的方法在编译期可以确定，称为静态绑定（Static Binding）或早期绑定。这些调用不需要动态分派，可以直接跳转到目标方法。",
            "【动态分派】invokevirtual 和 invokeinterface 需要在运行时根据对象的实际类型确定调用哪个方法实现，称为动态分派（Dynamic Dispatch）或晚期绑定。这是多态的实现基础。",
            "【虚方法表】为了加速动态分派，JVM 为每个类维护虚方法表（vtable）。方法在 vtable 中的索引固定，调用时根据对象的类找到 vtable，再用索引定位方法。invokevirtual 使用 vtable。",
            "【接口方法表】接口方法使用 itable（Interface Method Table）。由于一个类可能实现多个接口，itable 查找比 vtable 复杂：先找到对应接口的 itable，再查找方法。invokeinterface 通常比 invokevirtual 慢。"
        ],
        keyDifficulties: [
            "【invokedynamic 原理】invokedynamic 不直接指定目标方法，而是指定引导方法（Bootstrap Method）。首次执行时调用引导方法，返回 CallSite 对象持有 MethodHandle。后续调用直接使用缓存的 CallSite。",
            "【Lambda 表达式实现】Java 8 的 Lambda 使用 invokedynamic 实现。编译时生成 invokedynamic 指令，运行时由 LambdaMetafactory 引导方法生成实现类。这比每次都生成内部类更高效。",
            "【内联缓存】JVM 使用内联缓存（Inline Cache）优化虚方法调用。单态内联缓存假设调用点只有一种类型，直接跳转；多态内联缓存处理少数几种类型；超态则回退到 vtable 查找。",
            "【方法解析 vs 方法选择】解析（Resolution）是将符号引用转为直接引用，发生在链接阶段。选择（Selection）是在运行时根据实际类型选择方法实现，发生在 invokevirtual/invokeinterface 执行时。"
        ],
        handsOnPath: [
            "编写包含各种方法调用的代码，用 javap -c 观察生成的 invoke* 指令。",
            "编写继承层次结构，用 -XX:+PrintInlining 观察虚方法调用的内联决策。",
            "编写 Lambda 表达式，用 javap -v 观察 invokedynamic 指令和 BootstrapMethods 属性。",
            "使用 JMH 基准测试对比 invokevirtual 和 invokeinterface 的性能差异。",
            "使用 -XX:+TraceBiasedLocking 观察偏向锁对方法调用的影响。"
        ],
        selfCheck: [
            "JVM 的 5 种方法调用指令分别用于什么场景？",
            "什么是静态绑定？什么是动态绑定？",
            "虚方法表（vtable）如何加速动态分派？",
            "invokedynamic 的工作原理是什么？",
            "Lambda 表达式在字节码层面如何实现？",
            "什么是内联缓存？它如何优化虚方法调用？"
        ],
        extensions: [
            "研究 MethodHandle 和 VarHandle 的实现原理。",
            "了解 JDK 9+ 的 Indify 项目如何用 invokedynamic 优化字符串拼接。",
            "探索 Kotlin、Scala 等 JVM 语言如何利用 invokedynamic。",
            "研究 JIT 编译器如何进行虚调用的去虚拟化（Devirtualization）优化。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-6.html#jvms-6.5.invokevirtual",
            "https://wiki.openjdk.org/display/HotSpot/VirtualCalls",
            "https://www.baeldung.com/java-invoke-dynamic"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w6-1": [
        {
            id: "jvm-w6-1-q1",
            question: "解释执行的主要优点是什么？",
            options: [
                "运行速度快",
                "启动快、内存占用小",
                "代码优化程度高",
                "支持多线程"
            ],
            answer: 1,
            rationale: "解释执行的优点是启动快（无需编译）、内存占用小（无需存储编译后代码）。缺点是运行速度慢。"
        },
        {
            id: "jvm-w6-1-q2",
            question: "什么是模板解释器？",
            options: [
                "使用模板引擎的解释器",
                "每条字节码对应预编译的本地代码模板",
                "只能解释模板代码的解释器",
                "用于代码生成的解释器"
            ],
            answer: 1,
            rationale: "模板解释器为每条字节码预编译对应的本地代码模板，解释时直接执行模板代码，比纯解释快很多。"
        },
        {
            id: "jvm-w6-1-q3",
            question: "-Xint 参数的作用是什么？",
            options: [
                "启用交互模式",
                "强制纯解释执行",
                "设置整数精度",
                "启用国际化"
            ],
            answer: 1,
            rationale: "-Xint 强制 JVM 使用纯解释执行，禁用 JIT 编译。主要用于调试或特殊场景。"
        },
        {
            id: "jvm-w6-1-q4",
            question: "栈帧（Stack Frame）包含哪些部分？",
            options: [
                "只有局部变量表",
                "局部变量表、操作数栈、动态链接、返回地址",
                "只有操作数栈和返回地址",
                "方法代码和常量池"
            ],
            answer: 1,
            rationale: "栈帧包含：局部变量表（存储参数和局部变量）、操作数栈（存储计算中间值）、动态链接（指向常量池）、返回地址。"
        },
        {
            id: "jvm-w6-1-q5",
            question: "为什么有了 JIT 编译器仍需要解释器？",
            options: [
                "JIT 编译器不稳定",
                "启动快、支持逆优化回退、执行不常用代码",
                "解释执行更快",
                "JIT 编译器不支持所有指令"
            ],
            answer: 1,
            rationale: "解释器的价值：启动阶段快速执行、为 JIT 编译争取时间、支持逆优化回退、执行不常用代码（避免编译开销）。"
        },
        {
            id: "jvm-w6-1-q6",
            question: "HotSpot 默认使用什么执行模式？",
            options: [
                "-Xint（纯解释）",
                "-Xmixed（混合模式）",
                "-Xcomp（纯编译）",
                "-Xfast（快速模式）"
            ],
            answer: 1,
            rationale: "HotSpot 默认使用 -Xmixed 混合模式，结合解释执行和 JIT 编译执行的优势。"
        },
        {
            id: "jvm-w6-1-q7",
            question: "解释执行的主要性能开销是什么？",
            options: [
                "内存分配",
                "指令分派开销、缺乏全局优化、频繁内存访问",
                "网络通信",
                "文件 I/O"
            ],
            answer: 1,
            rationale: "解释执行的主要开销：指令分派开销（每条指令一次分派）、缺乏全局优化、频繁的内存访问（栈操作）。"
        },
        {
            id: "jvm-w6-1-q8",
            question: "局部变量表存储什么内容？",
            options: [
                "字节码指令",
                "方法参数和局部变量",
                "常量池引用",
                "类的静态变量"
            ],
            answer: 1,
            rationale: "局部变量表存储方法的参数和局部变量。对于实例方法，索引 0 存储 this 引用。"
        },
        {
            id: "jvm-w6-1-q9",
            question: "-Xcomp 模式的特点是什么？",
            options: [
                "启动最快",
                "强制编译执行，启动慢但运行快",
                "不支持调试",
                "只能用于服务器"
            ],
            answer: 1,
            rationale: "-Xcomp 强制编译执行，启动时需要编译大量代码所以启动慢，但运行时性能较好。实际仍需解释器配合。"
        },
        {
            id: "jvm-w6-1-q10",
            question: "操作数栈的作用是什么？",
            options: [
                "存储方法参数",
                "存储计算的中间值",
                "存储返回地址",
                "存储类的元数据"
            ],
            answer: 1,
            rationale: "操作数栈用于存储计算的中间值。字节码指令从栈中取操作数，将结果压回栈中。"
        },
        {
            id: "jvm-w6-1-q11",
            question: "Zero 解释器的特点是什么？",
            options: [
                "最快的解释器",
                "无汇编依赖的纯 C++ 解释器",
                "只能解释零值",
                "零开销解释器"
            ],
            answer: 1,
            rationale: "Zero 解释器是无汇编依赖的纯 C++ 解释器，可移植性好但性能较差，用于不支持模板解释器的平台。"
        },
        {
            id: "jvm-w6-1-q12",
            question: "动态链接在栈帧中的作用是什么？",
            options: [
                "连接网络",
                "指向当前方法所属类的常量池",
                "连接其他线程",
                "连接数据库"
            ],
            answer: 1,
            rationale: "动态链接指向当前方法所属类的运行时常量池，用于在执行时将符号引用转换为直接引用。"
        }
    ],
    "jvm-w6-2": [
        {
            id: "jvm-w6-2-q1",
            question: "什么是热点代码？",
            options: [
                "温度高的代码",
                "频繁执行的代码",
                "最新编写的代码",
                "核心业务代码"
            ],
            answer: 1,
            rationale: "热点代码是运行时频繁执行的代码，JVM 通过计数器识别热点并进行 JIT 编译优化。"
        },
        {
            id: "jvm-w6-2-q2",
            question: "方法调用计数器的作用是什么？",
            options: [
                "统计方法的代码行数",
                "记录方法被调用的次数",
                "统计方法的参数数量",
                "记录方法的执行时间"
            ],
            answer: 1,
            rationale: "方法调用计数器记录方法被调用的次数，当超过阈值时触发 JIT 编译。"
        },
        {
            id: "jvm-w6-2-q3",
            question: "-XX:CompileThreshold 的默认值是多少？",
            options: [
                "1000",
                "5000",
                "10000",
                "100000"
            ],
            answer: 2,
            rationale: "-XX:CompileThreshold 默认值是 10000，意味着方法需要累计 10000 次热度才会被编译。"
        },
        {
            id: "jvm-w6-2-q4",
            question: "什么是 OSR（On-Stack Replacement）？",
            options: [
                "在线服务替换",
                "在方法执行过程中将解释帧替换为编译帧",
                "操作系统资源",
                "对象存储替换"
            ],
            answer: 1,
            rationale: "OSR 允许在方法执行过程中，将解释执行的栈帧替换为编译后代码的栈帧，无需等待方法重新调用。"
        },
        {
            id: "jvm-w6-2-q5",
            question: "回边计数器统计什么？",
            options: [
                "方法调用次数",
                "循环执行次数",
                "异常次数",
                "GC 次数"
            ],
            answer: 1,
            rationale: "回边计数器统计循环的执行次数。回边（Back Edge）是循环中跳回循环开头的控制流边。"
        },
        {
            id: "jvm-w6-2-q6",
            question: "分层编译有几个级别？",
            options: [
                "3 个",
                "4 个",
                "5 个",
                "6 个"
            ],
            answer: 2,
            rationale: "HotSpot 分层编译有 5 个级别：Level 0（解释）、Level 1-3（C1 不同程度 profiling）、Level 4（C2 完全优化）。"
        },
        {
            id: "jvm-w6-2-q7",
            question: "Profiling 数据包含哪些信息？",
            options: [
                "源代码",
                "类型信息、分支跳转频率、方法调用次数",
                "编译后的机器码",
                "GC 日志"
            ],
            answer: 1,
            rationale: "Profiling 数据包括：运行时类型信息、分支跳转频率、方法调用次数等，指导 JIT 编译器做优化。"
        },
        {
            id: "jvm-w6-2-q8",
            question: "为什么需要计数器衰减？",
            options: [
                "节省内存",
                "反映代码热度变化，让不再频繁执行的代码可以被冷却",
                "防止计数器溢出",
                "提高性能"
            ],
            answer: 1,
            rationale: "计数器定期衰减是为了反映代码热度变化。如果代码不再频繁执行，它会被冷却，编译代码可能被丢弃。"
        },
        {
            id: "jvm-w6-2-q9",
            question: "-XX:+PrintCompilation 输出中的 % 符号表示什么？",
            options: [
                "编译进度",
                "OSR 编译",
                "编译失败",
                "代码覆盖率"
            ],
            answer: 1,
            rationale: "-XX:+PrintCompilation 输出中的 % 符号表示 OSR（On-Stack Replacement）编译，即循环中触发的编译。"
        },
        {
            id: "jvm-w6-2-q10",
            question: "-XX:TieredStopAtLevel=1 的作用是什么？",
            options: [
                "禁用所有编译",
                "只使用 C1 编译，不使用 C2",
                "只使用 C2 编译",
                "禁用分层编译"
            ],
            answer: 1,
            rationale: "-XX:TieredStopAtLevel=1 限制编译只到 Level 1（C1 简单编译），不会进行 C2 深度优化。"
        },
        {
            id: "jvm-w6-2-q11",
            question: "编译触发条件是什么？",
            options: [
                "只看方法调用次数",
                "方法调用计数器 + 回边计数器 > 编译阈值",
                "只看循环次数",
                "由程序员手动触发"
            ],
            answer: 1,
            rationale: "编译触发条件是：方法调用计数器 + 回边计数器的和超过编译阈值（CompileThreshold）。"
        },
        {
            id: "jvm-w6-2-q12",
            question: "使用什么命令监控 JIT 编译统计？",
            options: [
                "jps",
                "jstat -compiler <pid>",
                "jmap",
                "jstack"
            ],
            answer: 1,
            rationale: "jstat -compiler <pid> 可以监控 JIT 编译统计信息，包括编译次数、编译时间、失败次数等。"
        }
    ],
    "jvm-w6-3": [
        {
            id: "jvm-w6-3-q1",
            question: "JVM 有几种方法调用指令？",
            options: [
                "3 种",
                "4 种",
                "5 种",
                "6 种"
            ],
            answer: 2,
            rationale: "JVM 有 5 种方法调用指令：invokestatic、invokespecial、invokevirtual、invokeinterface、invokedynamic。"
        },
        {
            id: "jvm-w6-3-q2",
            question: "invokestatic 用于调用什么方法？",
            options: [
                "实例方法",
                "静态方法",
                "构造器",
                "接口方法"
            ],
            answer: 1,
            rationale: "invokestatic 用于调用静态方法（static method），这类方法在编译期就可以确定调用目标。"
        },
        {
            id: "jvm-w6-3-q3",
            question: "invokespecial 用于调用什么方法？",
            options: [
                "静态方法",
                "构造器、私有方法、super 方法",
                "接口方法",
                "动态方法"
            ],
            answer: 1,
            rationale: "invokespecial 用于调用构造器（<init>）、私有方法、父类方法（super.method()）。这些方法不需要动态分派。"
        },
        {
            id: "jvm-w6-3-q4",
            question: "什么是动态分派？",
            options: [
                "编译期确定调用目标",
                "运行时根据对象实际类型确定调用哪个方法实现",
                "随机选择方法",
                "按顺序调用方法"
            ],
            answer: 1,
            rationale: "动态分派是在运行时根据对象的实际类型确定调用哪个方法实现，是多态的实现基础。"
        },
        {
            id: "jvm-w6-3-q5",
            question: "虚方法表（vtable）的作用是什么？",
            options: [
                "存储虚拟内存地址",
                "加速动态分派，通过索引直接定位方法",
                "存储虚拟机状态",
                "管理虚拟线程"
            ],
            answer: 1,
            rationale: "vtable 为每个类维护方法表，方法在表中索引固定。调用时根据对象类找到 vtable，用索引定位方法，加速动态分派。"
        },
        {
            id: "jvm-w6-3-q6",
            question: "invokeinterface 为什么通常比 invokevirtual 慢？",
            options: [
                "接口方法更复杂",
                "需要先查找接口的 itable，再查找方法",
                "接口方法没有优化",
                "接口方法不能内联"
            ],
            answer: 1,
            rationale: "invokeinterface 使用 itable 查找，由于一个类可能实现多个接口，需要先找到对应接口的 itable 再查找方法，比 vtable 复杂。"
        },
        {
            id: "jvm-w6-3-q7",
            question: "invokedynamic 的工作原理是什么？",
            options: [
                "直接调用目标方法",
                "调用引导方法返回 CallSite，后续使用缓存的 CallSite",
                "每次都重新解析方法",
                "只能调用动态语言方法"
            ],
            answer: 1,
            rationale: "invokedynamic 首次执行时调用引导方法（Bootstrap Method）返回 CallSite，后续调用直接使用缓存的 CallSite。"
        },
        {
            id: "jvm-w6-3-q8",
            question: "Java 8 的 Lambda 表达式在字节码层面使用什么指令？",
            options: [
                "invokevirtual",
                "invokedynamic",
                "invokestatic",
                "invokespecial"
            ],
            answer: 1,
            rationale: "Lambda 表达式使用 invokedynamic 实现。运行时由 LambdaMetafactory 引导方法生成实现类，比每次生成内部类更高效。"
        },
        {
            id: "jvm-w6-3-q9",
            question: "什么是内联缓存（Inline Cache）？",
            options: [
                "方法内联的缓存",
                "缓存虚方法调用的类型信息以加速分派",
                "CPU 缓存优化",
                "常量池缓存"
            ],
            answer: 1,
            rationale: "内联缓存缓存虚方法调用点的类型信息。单态缓存假设只有一种类型直接跳转；多态缓存处理少数几种类型。"
        },
        {
            id: "jvm-w6-3-q10",
            question: "方法解析和方法选择有什么区别？",
            options: [
                "完全相同",
                "解析在链接阶段将符号转直接引用，选择在运行时根据实际类型选方法",
                "解析更快",
                "选择在编译期发生"
            ],
            answer: 1,
            rationale: "解析（Resolution）在链接阶段将符号引用转为直接引用；选择（Selection）在运行时根据实际类型选择方法实现。"
        },
        {
            id: "jvm-w6-3-q11",
            question: "LambdaMetafactory 的作用是什么？",
            options: [
                "编译 Lambda 表达式",
                "作为引导方法在运行时生成 Lambda 实现类",
                "优化 Lambda 性能",
                "验证 Lambda 正确性"
            ],
            answer: 1,
            rationale: "LambdaMetafactory 是 Lambda 表达式的引导方法，在运行时动态生成实现函数式接口的类。"
        },
        {
            id: "jvm-w6-3-q12",
            question: "JDK 9+ 用什么技术优化字符串拼接？",
            options: [
                "StringBuilder",
                "invokedynamic（Indify String Concatenation）",
                "StringBuffer",
                "String.format"
            ],
            answer: 1,
            rationale: "JDK 9+ 使用 invokedynamic 实现字符串拼接（Indify），由 StringConcatFactory 引导方法生成优化的拼接代码。"
        }
    ]
}
