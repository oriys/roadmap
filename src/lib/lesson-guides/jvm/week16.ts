import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week16Guides: Record<string, LessonGuide> = {
    "jvm-w16-1": {
        lessonId: "jvm-w16-1",
        background: [
            "【方法内联概念】方法内联（Method Inlining）是 JIT 最重要的优化之一。将被调用方法的代码直接嵌入调用处，消除方法调用开销（栈帧创建、参数传递、返回值处理）。",
            "【内联的好处】内联不仅消除调用开销，更重要的是为后续优化创造条件。内联后可以进行常量传播、死代码消除、循环优化等，整体优化效果远超单纯消除调用开销。",
            "【内联决策】JIT 编译器根据多种因素决定是否内联：方法大小、调用频率、调用链深度、是否热点等。-XX:MaxInlineSize（默认 35 字节）和 -XX:FreqInlineSize（默认 325 字节）控制内联阈值。",
            "【多态内联】对于虚方法调用，如果 profiling 数据显示只有一两个实际类型，JIT 可以进行投机内联（Speculative Inlining）。如果运行时类型变化，需要逆优化。",
            "【内联缓存】内联缓存（Inline Cache）记录虚方法调用的实际接收者类型。单态（Monomorphic）只有一个类型；双态（Bimorphic）有两个；多态（Polymorphic）有多个；超多态（Megamorphic）放弃优化。"
        ],
        keyDifficulties: [
            "【内联深度】-XX:MaxInlineLevel（默认 9）限制内联的嵌套深度。过深的内联会导致编译后代码膨胀，可能超出 Code Cache，反而降低性能。",
            "【强制内联】@ForceInline 注解（JDK 内部使用）强制内联。@DontInline 禁止内联。普通代码可以通过 -XX:CompileCommand=inline,... 控制特定方法的内联行为。",
            "【内联与多态】高度多态的代码难以内联。接口调用、反射调用、动态代理通常无法内联。设计时应考虑内联友好性：减少继承层次，使用 final 修饰符。",
            "【内联膨胀】过度内联会导致代码膨胀（Code Bloat）。编译后代码变大，可能导致 CPU 缓存效率下降、Code Cache 压力增大。需要平衡内联收益和代码大小。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintInlining 查看方法内联决策和原因。",
            "使用 -XX:+UnlockDiagnosticVMOptions -XX:+PrintInlining 观察热点方法的内联情况。",
            "调整 -XX:MaxInlineSize 观察对小方法内联的影响。",
            "使用 JITWatch 可视化分析内联决策。",
            "编写多态代码，观察内联缓存的状态变化（单态→多态→超多态）。"
        ],
        selfCheck: [
            "什么是方法内联？它的好处是什么？",
            "JIT 根据哪些因素决定是否内联？",
            "什么是投机内联？它有什么风险？",
            "内联缓存的几种状态是什么？",
            "-XX:MaxInlineSize 和 -XX:FreqInlineSize 的区别是什么？",
            "为什么过度内联可能降低性能？"
        ],
        extensions: [
            "研究 JVM 的 CHA（Class Hierarchy Analysis）如何帮助内联决策。",
            "了解 Graal 编译器的内联策略与 C2 的区别。",
            "探索 @CompilerControl 注解的使用。",
            "研究内联对 Lambda 表达式和方法引用的处理。"
        ],
        sourceUrls: [
            "https://www.baeldung.com/jvm-method-inlining",
            "https://shipilev.net/jvm/anatomy-quarks/16-megamorphic-virtual-calls/",
            "https://wiki.openjdk.org/display/HotSpot/PerformanceTechniques"
        ]
    },
    "jvm-w16-2": {
        lessonId: "jvm-w16-2",
        background: [
            "【逃逸分析概念】逃逸分析（Escape Analysis）分析对象的作用域，判断对象是否逃逸出方法或线程。不逃逸的对象可以进行栈上分配、标量替换、锁消除等优化。",
            "【逃逸类型】方法逃逸：对象被作为返回值或参数传递到其他方法。线程逃逸：对象被其他线程访问（如赋值给类变量、放入共享集合）。无逃逸的对象优化空间最大。",
            "【栈上分配】如果对象不逃逸出方法，可以在栈上分配而不是堆上。栈上分配随方法返回自动释放，无需 GC。但 HotSpot 实际通过标量替换实现类似效果。",
            "【标量替换】标量替换（Scalar Replacement）将对象拆解为基本类型（标量）。不创建对象，而是用局部变量存储对象的字段。消除了对象分配和 GC 开销。",
            "【锁消除】如果对象不逃逸出线程，对它的同步操作可以消除。例如 StringBuffer 在方法内部使用时，其 synchronized 方法的锁可以被消除。"
        ],
        keyDifficulties: [
            "【逃逸分析限制】逃逸分析需要全局数据流分析，计算开销大。大方法、复杂控制流可能导致分析不精确或放弃分析。内联是逃逸分析的前提——只有内联后才能看到完整的对象生命周期。",
            "【部分逃逸分析】Graal 支持部分逃逸分析（Partial Escape Analysis）：即使对象在某些路径上逃逸，也可以在不逃逸的路径上优化。比 C2 的逃逸分析更强大。",
            "【JVM 参数】-XX:+DoEscapeAnalysis（默认开启）启用逃逸分析。-XX:+EliminateAllocations 启用标量替换。-XX:+EliminateLocks 启用锁消除。",
            "【分析失败情况】调用非内联方法、对象赋值给字段、放入集合、作为返回值、抛出异常携带的对象等，都会导致对象逃逸，无法优化。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintEscapeAnalysis 查看逃逸分析结果（需要 debug 版 JVM）。",
            "编写不逃逸对象的代码，使用 JMH 对比开启/关闭逃逸分析的性能差异。",
            "使用 -XX:-DoEscapeAnalysis 禁用逃逸分析，观察 GC 频率变化。",
            "使用 -XX:+PrintEliminateAllocations 查看标量替换情况。",
            "编写线程封闭的同步代码，观察锁消除效果。"
        ],
        selfCheck: [
            "什么是逃逸分析？分析什么？",
            "方法逃逸和线程逃逸的区别是什么？",
            "什么是标量替换？为什么 HotSpot 用它代替栈上分配？",
            "锁消除的前提是什么？",
            "逃逸分析的局限性有哪些？",
            "什么是部分逃逸分析？"
        ],
        extensions: [
            "研究 C2 逃逸分析的实现算法。",
            "了解 Graal 部分逃逸分析的原理。",
            "探索逃逸分析对 Lambda 表达式和闭包的处理。",
            "研究逃逸分析在实际应用中的性能收益案例。"
        ],
        sourceUrls: [
            "https://www.baeldung.com/java-escape-analysis",
            "https://shipilev.net/jvm/anatomy-quarks/18-scalar-replacement/",
            "https://blogs.oracle.com/javamagazine/post/escape-analysis-in-the-hotspot-jit-compiler"
        ]
    },
    "jvm-w16-3": {
        lessonId: "jvm-w16-3",
        background: [
            "【编译日志概述】JIT 编译日志记录了方法的编译过程、内联决策、优化应用、逆优化事件等。是诊断 JIT 行为、理解性能问题的重要工具。",
            "【PrintCompilation】-XX:+PrintCompilation 输出编译事件。格式：时间戳、编译 ID、属性标记（%=OSR, s=同步, !=有异常, b=阻塞, n=native）、编译级别（0-4）、方法名。",
            "【LogCompilation】-XX:+UnlockDiagnosticVMOptions -XX:+LogCompilation 生成详细的 XML 格式编译日志（hotspot_pidXXX.log）。包含内联决策、优化细节、逆优化原因等完整信息。",
            "【JITWatch】JITWatch 是开源的 JIT 日志分析工具，可视化展示编译日志。支持查看内联决策、热点方法、字节码到机器码的映射、代码缓存使用等。",
            "【编译命令】-XX:CompileCommand 可以控制特定方法的编译行为：print（打印汇编）、exclude（排除编译）、inline（强制内联）、dontinline（禁止内联）、log（记录日志）。"
        ],
        keyDifficulties: [
            "【理解编译标记】PrintCompilation 输出的标记：% 表示 OSR 编译，s 表示同步方法，! 表示有异常处理器，b 表示阻塞编译，n 表示 native 方法包装。made not entrant/made zombie 表示代码失效。",
            "【逆优化分析】逆优化日志显示 uncommon_trap 和 reason。常见原因：class_check（类型检查失败）、null_check（空指针）、range_check（数组越界）、unloaded（类卸载）。频繁逆优化需要关注。",
            "【内联失败原因】常见内联失败原因：too big（方法太大）、already compiled into a big method（目标方法太大）、hot method too big（热点方法太大）、no static binding（无法静态绑定）。",
            "【汇编输出】-XX:+PrintAssembly 输出编译后的汇编代码（需要 hsdis 库）。结合 JITWatch 可以将字节码与汇编对应，深入分析 JIT 优化效果。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintCompilation 运行应用，观察方法编译级别和时机。",
            "使用 -XX:+LogCompilation 生成完整编译日志，用 JITWatch 分析。",
            "使用 -XX:CompileCommand=print,*ClassName.methodName 查看特定方法的编译结果。",
            "使用 -XX:+TraceDeoptimization 跟踪逆优化事件。",
            "配置 hsdis，使用 -XX:+PrintAssembly 查看热点方法的汇编代码。"
        ],
        selfCheck: [
            "-XX:+PrintCompilation 输出的各列含义是什么？",
            "编译标记 % 和 ! 分别表示什么？",
            "如何生成详细的 XML 编译日志？",
            "JITWatch 可以分析哪些信息？",
            "常见的逆优化原因有哪些？",
            "如何使用 CompileCommand 控制编译行为？"
        ],
        extensions: [
            "研究 JITWatch 的高级功能（Suggestion、TriView）。",
            "了解如何编译和配置 hsdis 查看汇编。",
            "探索 -XX:+PrintOptoAssembly 输出 C2 IR。",
            "研究使用 JMH 的 -prof perfasm 分析热点汇编。"
        ],
        sourceUrls: [
            "https://github.com/AdoptOpenJDK/jitwatch",
            "https://www.baeldung.com/jvm-tiered-compilation#logging",
            "https://wiki.openjdk.org/display/HotSpot/PrintAssembly"
        ]
    }
}

export const week16Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w16-1": [
        {
            id: "jvm-w16-1-q1",
            question: "什么是方法内联？",
            options: [
                "方法压缩",
                "将被调用方法的代码直接嵌入调用处",
                "方法缓存",
                "方法合并"
            ],
            answer: 1,
            rationale: "方法内联将被调用方法的代码直接嵌入调用处，消除方法调用开销，并为后续优化创造条件。"
        },
        {
            id: "jvm-w16-1-q2",
            question: "方法内联除了消除调用开销，还有什么好处？",
            options: [
                "减少内存使用",
                "为后续优化（常量传播、死代码消除等）创造条件",
                "减少代码行数",
                "提高安全性"
            ],
            answer: 1,
            rationale: "内联后可以进行常量传播、死代码消除、循环优化等，整体优化效果远超单纯消除调用开销。"
        },
        {
            id: "jvm-w16-1-q3",
            question: "-XX:MaxInlineSize 的默认值是多少？",
            options: [
                "25 字节",
                "35 字节",
                "45 字节",
                "325 字节"
            ],
            answer: 1,
            rationale: "-XX:MaxInlineSize 默认值是 35 字节，小于此大小的方法会被考虑内联。"
        },
        {
            id: "jvm-w16-1-q4",
            question: "什么是投机内联？",
            options: [
                "随机内联",
                "基于 profiling 数据对虚方法进行的内联，假设类型不变",
                "强制内联",
                "延迟内联"
            ],
            answer: 1,
            rationale: "投机内联基于 profiling 数据，假设虚方法调用的实际类型与观察到的一致，进行内联。如果类型变化需要逆优化。"
        },
        {
            id: "jvm-w16-1-q5",
            question: "内联缓存的单态状态表示什么？",
            options: [
                "多个类型",
                "只有一个实际接收者类型",
                "没有类型",
                "所有类型"
            ],
            answer: 1,
            rationale: "单态（Monomorphic）内联缓存表示虚方法调用只有一个实际接收者类型，最容易优化。"
        },
        {
            id: "jvm-w16-1-q6",
            question: "超多态（Megamorphic）状态下会怎样？",
            options: [
                "最高效优化",
                "放弃优化，使用虚方法表",
                "强制内联",
                "重新编译"
            ],
            answer: 1,
            rationale: "超多态状态下类型太多，JIT 放弃投机优化，退回到使用虚方法表进行调度。"
        },
        {
            id: "jvm-w16-1-q7",
            question: "-XX:MaxInlineLevel 的作用是什么？",
            options: [
                "设置内联大小",
                "限制内联的嵌套深度",
                "设置内联频率",
                "禁用内联"
            ],
            answer: 1,
            rationale: "-XX:MaxInlineLevel（默认 9）限制内联的嵌套深度，防止代码膨胀。"
        },
        {
            id: "jvm-w16-1-q8",
            question: "什么因素会阻碍方法内联？",
            options: [
                "方法太小",
                "高度多态、反射调用、动态代理",
                "方法是 final",
                "方法是 static"
            ],
            answer: 1,
            rationale: "高度多态的代码、接口调用、反射调用、动态代理通常无法内联。final 和 static 方法反而更容易内联。"
        },
        {
            id: "jvm-w16-1-q9",
            question: "使用什么参数查看内联决策？",
            options: [
                "-XX:+PrintCompilation",
                "-XX:+PrintInlining",
                "-XX:+PrintGC",
                "-XX:+PrintAssembly"
            ],
            answer: 1,
            rationale: "-XX:+PrintInlining 可以查看方法内联决策，包括内联成功或失败的原因。"
        },
        {
            id: "jvm-w16-1-q10",
            question: "-XX:FreqInlineSize 的作用是什么？",
            options: [
                "设置内联频率",
                "设置频繁调用的热点方法的内联大小阈值",
                "设置最小内联大小",
                "禁用频繁内联"
            ],
            answer: 1,
            rationale: "-XX:FreqInlineSize（默认 325 字节）是频繁调用的热点方法的内联大小阈值，比 MaxInlineSize 大。"
        },
        {
            id: "jvm-w16-1-q11",
            question: "过度内联的问题是什么？",
            options: [
                "编译太快",
                "代码膨胀、CPU 缓存效率下降、Code Cache 压力增大",
                "内存减少",
                "没有问题"
            ],
            answer: 1,
            rationale: "过度内联导致代码膨胀，可能使 CPU 缓存效率下降，Code Cache 压力增大，反而降低性能。"
        },
        {
            id: "jvm-w16-1-q12",
            question: "如何禁止特定方法被内联？",
            options: [
                "-XX:MaxInlineSize=0",
                "-XX:CompileCommand=dontinline,*ClassName.methodName",
                "-XX:-PrintInlining",
                "无法禁止"
            ],
            answer: 1,
            rationale: "使用 -XX:CompileCommand=dontinline,*ClassName.methodName 可以禁止特定方法被内联。"
        }
    ],
    "jvm-w16-2": [
        {
            id: "jvm-w16-2-q1",
            question: "什么是逃逸分析？",
            options: [
                "分析对象大小",
                "分析对象是否逃逸出方法或线程的作用域",
                "分析内存泄漏",
                "分析 GC 效率"
            ],
            answer: 1,
            rationale: "逃逸分析判断对象是否逃逸出方法或线程。不逃逸的对象可以进行栈上分配、标量替换、锁消除等优化。"
        },
        {
            id: "jvm-w16-2-q2",
            question: "方法逃逸和线程逃逸的区别是什么？",
            options: [
                "没有区别",
                "方法逃逸是传递到其他方法，线程逃逸是被其他线程访问",
                "方法逃逸更严重",
                "线程逃逸更容易"
            ],
            answer: 1,
            rationale: "方法逃逸：对象作为返回值或参数传递。线程逃逸：对象被其他线程访问。线程逃逸比方法逃逸更严重。"
        },
        {
            id: "jvm-w16-2-q3",
            question: "什么是标量替换？",
            options: [
                "替换对象类型",
                "将对象拆解为基本类型，用局部变量存储字段",
                "替换内存地址",
                "替换引用"
            ],
            answer: 1,
            rationale: "标量替换将对象拆解为基本类型（标量），不创建对象，用局部变量存储字段，消除对象分配和 GC 开销。"
        },
        {
            id: "jvm-w16-2-q4",
            question: "锁消除的前提是什么？",
            options: [
                "锁是 ReentrantLock",
                "对象不逃逸出线程",
                "方法是 synchronized",
                "没有前提"
            ],
            answer: 1,
            rationale: "如果对象不逃逸出线程，说明只有一个线程访问，同步操作没有必要，可以消除锁。"
        },
        {
            id: "jvm-w16-2-q5",
            question: "HotSpot 为什么用标量替换而不是真正的栈上分配？",
            options: [
                "栈空间不够",
                "标量替换更灵活，可以只分配实际使用的字段",
                "栈上分配太复杂",
                "两者完全相同"
            ],
            answer: 1,
            rationale: "标量替换更灵活，可以只为实际使用的字段分配空间，未使用的字段可以完全消除，优化效果更好。"
        },
        {
            id: "jvm-w16-2-q6",
            question: "哪个参数启用逃逸分析？",
            options: [
                "-XX:+UseEscapeAnalysis",
                "-XX:+DoEscapeAnalysis",
                "-XX:+EnableEscape",
                "-XX:+EscapeAnalysis"
            ],
            answer: 1,
            rationale: "-XX:+DoEscapeAnalysis 启用逃逸分析，默认是开启的。"
        },
        {
            id: "jvm-w16-2-q7",
            question: "什么情况会导致逃逸分析失败？",
            options: [
                "对象太小",
                "调用非内联方法、对象赋值给字段、放入集合",
                "对象是 final",
                "对象是基本类型"
            ],
            answer: 1,
            rationale: "调用非内联方法、对象赋值给字段、放入集合、作为返回值等都会导致对象逃逸，无法优化。"
        },
        {
            id: "jvm-w16-2-q8",
            question: "什么是部分逃逸分析？",
            options: [
                "只分析部分对象",
                "即使对象在某些路径上逃逸，也在不逃逸的路径上优化",
                "分析一部分方法",
                "分析到一半停止"
            ],
            answer: 1,
            rationale: "部分逃逸分析：即使对象在某些路径上逃逸，也可以在不逃逸的路径上进行优化。Graal 支持此特性。"
        },
        {
            id: "jvm-w16-2-q9",
            question: "逃逸分析的前提是什么？",
            options: [
                "大堆内存",
                "方法内联",
                "GC 调优",
                "多线程"
            ],
            answer: 1,
            rationale: "内联是逃逸分析的前提——只有内联后才能看到完整的对象生命周期，判断是否逃逸。"
        },
        {
            id: "jvm-w16-2-q10",
            question: "哪个参数启用标量替换？",
            options: [
                "-XX:+DoEscapeAnalysis",
                "-XX:+EliminateAllocations",
                "-XX:+ScalarReplacement",
                "-XX:+EnableScalar"
            ],
            answer: 1,
            rationale: "-XX:+EliminateAllocations 启用标量替换，需要先启用逃逸分析。"
        },
        {
            id: "jvm-w16-2-q11",
            question: "StringBuffer 在方法内部使用时可能发生什么优化？",
            options: [
                "字符串池化",
                "锁消除（synchronized 方法的锁被消除）",
                "字符串压缩",
                "没有优化"
            ],
            answer: 1,
            rationale: "StringBuffer 在方法内部使用时不逃逸出线程，其 synchronized 方法的锁可以被消除。"
        },
        {
            id: "jvm-w16-2-q12",
            question: "逃逸分析对哪种代码效果最好？",
            options: [
                "多态代码",
                "在方法内创建并使用后丢弃的临时对象",
                "共享对象",
                "静态变量"
            ],
            answer: 1,
            rationale: "在方法内创建、使用后丢弃的临时对象最适合逃逸分析优化，可以完全消除堆分配。"
        }
    ],
    "jvm-w16-3": [
        {
            id: "jvm-w16-3-q1",
            question: "-XX:+PrintCompilation 输出什么信息？",
            options: [
                "GC 日志",
                "方法编译事件、编译 ID、级别、方法名",
                "内存使用",
                "线程信息"
            ],
            answer: 1,
            rationale: "-XX:+PrintCompilation 输出编译事件，包括时间戳、编译 ID、属性标记、编译级别、方法名。"
        },
        {
            id: "jvm-w16-3-q2",
            question: "PrintCompilation 中 % 标记表示什么？",
            options: [
                "编译进度",
                "OSR 编译（On-Stack Replacement）",
                "编译百分比",
                "编译失败"
            ],
            answer: 1,
            rationale: "% 标记表示 OSR（On-Stack Replacement）编译，即在方法执行过程中（如循环中）触发的编译。"
        },
        {
            id: "jvm-w16-3-q3",
            question: "如何生成详细的 XML 格式编译日志？",
            options: [
                "-XX:+PrintCompilation",
                "-XX:+UnlockDiagnosticVMOptions -XX:+LogCompilation",
                "-XX:+PrintGC",
                "-XX:+PrintAssembly"
            ],
            answer: 1,
            rationale: "-XX:+LogCompilation（需要先 -XX:+UnlockDiagnosticVMOptions）生成详细的 XML 格式编译日志。"
        },
        {
            id: "jvm-w16-3-q4",
            question: "JITWatch 是什么工具？",
            options: [
                "GC 分析工具",
                "JIT 编译日志可视化分析工具",
                "性能监控工具",
                "内存分析工具"
            ],
            answer: 1,
            rationale: "JITWatch 是开源的 JIT 日志分析工具，可视化展示编译日志、内联决策、热点方法、字节码到机器码映射等。"
        },
        {
            id: "jvm-w16-3-q5",
            question: "PrintCompilation 中 ! 标记表示什么？",
            options: [
                "错误",
                "方法有异常处理器",
                "警告",
                "重要"
            ],
            answer: 1,
            rationale: "! 标记表示方法有异常处理器（exception handlers）。"
        },
        {
            id: "jvm-w16-3-q6",
            question: "'made not entrant' 日志表示什么？",
            options: [
                "编译成功",
                "编译代码失效，不再被调用",
                "编译进行中",
                "编译优化"
            ],
            answer: 1,
            rationale: "'made not entrant' 表示编译代码失效，新的调用不会进入这个编译版本，通常是逆优化的结果。"
        },
        {
            id: "jvm-w16-3-q7",
            question: "常见的逆优化原因 class_check 表示什么？",
            options: [
                "类加载失败",
                "类型检查失败（实际类型与投机假设不符）",
                "类缺失",
                "类冲突"
            ],
            answer: 1,
            rationale: "class_check 表示运行时类型与编译时的投机假设不符，需要逆优化回到解释执行。"
        },
        {
            id: "jvm-w16-3-q8",
            question: "内联失败原因 'too big' 表示什么？",
            options: [
                "调用太频繁",
                "被调用方法太大，超过内联阈值",
                "堆太大",
                "参数太多"
            ],
            answer: 1,
            rationale: "'too big' 表示被调用方法的字节码大小超过了内联阈值（如 MaxInlineSize），不能内联。"
        },
        {
            id: "jvm-w16-3-q9",
            question: "如何查看特定方法的编译汇编输出？",
            options: [
                "-XX:+PrintCompilation",
                "-XX:CompileCommand=print,*ClassName.methodName",
                "-XX:+LogCompilation",
                "-XX:+PrintGC"
            ],
            answer: 1,
            rationale: "-XX:CompileCommand=print,*ClassName.methodName 可以输出特定方法的编译结果和汇编代码。"
        },
        {
            id: "jvm-w16-3-q10",
            question: "什么参数跟踪逆优化事件？",
            options: [
                "-XX:+PrintCompilation",
                "-XX:+TraceDeoptimization",
                "-XX:+PrintGC",
                "-XX:+PrintInlining"
            ],
            answer: 1,
            rationale: "-XX:+TraceDeoptimization 可以跟踪逆优化事件，显示逆优化的原因和位置。"
        },
        {
            id: "jvm-w16-3-q11",
            question: "查看汇编代码需要什么库？",
            options: [
                "JNI 库",
                "hsdis 库",
                "native 库",
                "不需要额外库"
            ],
            answer: 1,
            rationale: "-XX:+PrintAssembly 需要 hsdis（HotSpot Disassembler）库才能输出编译后的汇编代码。"
        },
        {
            id: "jvm-w16-3-q12",
            question: "CompileCommand 的 exclude 选项作用是什么？",
            options: [
                "只编译该方法",
                "排除该方法，不进行编译",
                "包含该方法",
                "优化该方法"
            ],
            answer: 1,
            rationale: "-XX:CompileCommand=exclude,*ClassName.methodName 排除该方法，使其始终解释执行，不进行 JIT 编译。"
        }
    ]
}
