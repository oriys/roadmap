import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week15Guides: Record<string, LessonGuide> = {
    "jvm-w15-1": {
        lessonId: "jvm-w15-1",
        background: [
            "【JIT 编译器概述】HotSpot JVM 有两个 JIT 编译器：C1（Client Compiler）和 C2（Server Compiler）。C1 编译快但优化程度低；C2 编译慢但优化深入。两者配合实现分层编译。",
            "【C1 编译器】C1 是轻量级编译器，编译速度快，适合启动阶段。C1 的优化包括：局部优化、方法内联（有限）、基于 profiling 的简单优化。生成代码质量中等。",
            "【C2 编译器】C2 是高度优化编译器，编译时间长，适合热点代码。C2 的优化包括：全局优化、激进内联、逃逸分析、循环优化、向量化。生成代码质量高。",
            "【分层编译】分层编译（Tiered Compilation）结合 C1 和 C2 的优势：启动时用解释器和 C1 快速执行，热点代码逐步由 C2 编译。-XX:+TieredCompilation 启用（默认开启）。",
            "【编译线程】JIT 编译在后台线程进行，不阻塞应用。-XX:CICompilerCount 设置编译器线程数。编译队列满时，新的编译请求会被丢弃或等待。"
        ],
        keyDifficulties: [
            "【C1 vs C2 权衡】C1 编译快启动好，但代码质量不如 C2。C2 代码质量高，但编译开销大。分层编译通过让代码从 C1 晋升到 C2，实现两者的平衡。",
            "【编译阈值】-XX:CompileThreshold 设置触发编译的调用次数阈值。分层编译时各层级有不同阈值。-XX:Tier4InvocationThreshold 等参数可以精细控制。",
            "【代码缓存】编译后的代码存储在 Code Cache 中。-XX:ReservedCodeCacheSize 设置大小（默认 240MB）。Code Cache 满会导致编译停止，性能下降。",
            "【编译策略】-XX:-TieredCompilation 禁用分层编译，只用 C2。-XX:TieredStopAtLevel=1 只用 C1。不同策略适用于不同场景（启动优先 vs 吞吐量优先）。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintCompilation 观察方法的编译级别（0-4）。",
            "使用 -XX:-TieredCompilation 禁用分层编译，对比启动时间和峰值性能。",
            "使用 -XX:+PrintCodeCache 查看代码缓存使用情况。",
            "使用 jcmd <pid> Compiler.codecache 查看代码缓存统计。",
            "调整 -XX:ReservedCodeCacheSize 观察对编译行为的影响。"
        ],
        selfCheck: [
            "C1 和 C2 编译器有什么区别？",
            "什么是分层编译？它解决什么问题？",
            "-XX:+TieredCompilation 是否默认启用？",
            "编译后的代码存储在哪里？",
            "Code Cache 满了会发生什么？",
            "什么场景下应该禁用分层编译？"
        ],
        extensions: [
            "研究 C2 编译器的中间表示（Ideal Graph）。",
            "了解 C1 编译器的 HIR 和 LIR。",
            "探索编译线程调度策略。",
            "研究 AOT（Ahead-of-Time）编译与 JIT 的对比。"
        ],
        sourceUrls: [
            "https://www.infoq.com/articles/OpenJDK-HotSpot-What-the-JIT/",
            "https://docs.oracle.com/en/java/javase/21/vm/java-virtual-machine-technology-overview.html",
            "https://wiki.openjdk.org/display/HotSpot/Compiler"
        ]
    },
    "jvm-w15-2": {
        lessonId: "jvm-w15-2",
        background: [
            "【编译级别概述】分层编译定义了 5 个级别：Level 0（解释执行）、Level 1-3（C1 编译）、Level 4（C2 编译）。代码从低级别逐步晋升到高级别，获得更多优化。",
            "【Level 0】Level 0 是解释执行。解释器收集 profiling 数据（类型信息、分支频率），为后续编译优化提供依据。所有方法都从 Level 0 开始。",
            "【Level 1-3】Level 1：C1 编译，无 profiling。Level 2：C1 编译，有限 profiling。Level 3：C1 编译，完整 profiling。通常代码从 Level 0 直接到 Level 3。",
            "【Level 4】Level 4 是 C2 完全优化编译。基于 Level 0 或 Level 3 收集的 profiling 数据进行激进优化。生成最高质量的机器代码。",
            "【级别跳转】代码不一定经过所有级别。常见路径：0→3→4（标准路径）、0→2→3→4（C1 队列满时）、0→4（C1 不可用或禁用）。"
        ],
        keyDifficulties: [
            "【Profiling 重要性】Profiling 数据对优化至关重要。包括：实际运行时类型（用于去虚拟化）、分支跳转频率（用于分支预测优化）、调用次数（识别热点）。",
            "【投机优化】C2 基于 profiling 数据进行投机优化（Speculative Optimization）：假设运行时行为与 profiling 一致。如果假设失败，需要逆优化（Deoptimization）。",
            "【逆优化】当投机假设不成立时（如类型变化），JVM 会逆优化：丢弃编译代码，回到解释执行，重新收集 profiling，再编译。频繁逆优化影响性能。",
            "【编译状态】-XX:+PrintCompilation 输出的标记：% 表示 OSR 编译，! 表示有异常处理，s 表示同步方法，n 表示 native 方法，made zombie/made not entrant 表示代码失效。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintCompilation 观察方法从 Level 0 到 Level 4 的晋升过程。",
            "编写代码触发逆优化，观察 'made not entrant' 日志。",
            "使用 -XX:TieredStopAtLevel=3 限制只使用 C1，观察性能差异。",
            "使用 JITWatch 可视化分析编译日志。",
            "使用 -XX:+TraceDeoptimization 跟踪逆优化事件。"
        ],
        selfCheck: [
            "分层编译有几个级别？各是什么？",
            "Profiling 数据包含什么信息？",
            "什么是投机优化？",
            "什么情况下会发生逆优化？",
            "代码晋升的标准路径是什么？",
            "-XX:+PrintCompilation 输出中的 % 符号表示什么？"
        ],
        extensions: [
            "研究 C2 的投机优化具体包括哪些类型。",
            "了解如何通过 JFR 分析编译事件。",
            "探索 -XX:CompileCommand 控制特定方法的编译行为。",
            "研究编译重放（Compile Replay）用于问题诊断。"
        ],
        sourceUrls: [
            "https://www.baeldung.com/java-tiered-compilation",
            "https://shipilev.net/jvm/anatomy-quarks/1-lock-coarsening-for-loops/",
            "https://www.oracle.com/technical-resources/articles/java/architect-evans-pt1.html"
        ]
    },
    "jvm-w15-3": {
        lessonId: "jvm-w15-3",
        background: [
            "【Graal 简介】Graal 是用 Java 编写的 JIT 编译器，可以作为 HotSpot C2 的替代。Graal 代码更现代、更容易维护，支持更激进的优化（如部分逃逸分析）。",
            "【JVMCI】JVMCI（JVM Compiler Interface，JEP 243）是 Graal 与 JVM 交互的接口。JVMCI 允许用 Java 编写的编译器接入 HotSpot。-XX:+EnableJVMCI 启用。",
            "【作为 C2 替代】在 HotSpot 中使用 Graal 替代 C2：-XX:+UseJVMCICompiler。Graal 编译器会处理 Level 4 的编译任务。需要 GraalVM 或配置 Graal 模块。",
            "【GraalVM】GraalVM 是一个多语言虚拟机，Graal 编译器是其核心组件。GraalVM 支持 Java、JavaScript、Python、Ruby 等多种语言，通过 Graal 编译器统一优化。",
            "【Native Image】GraalVM Native Image 可以将 Java 应用编译为原生可执行文件（AOT 编译）。启动时间毫秒级，内存占用低，但没有 JIT 的运行时优化。"
        ],
        keyDifficulties: [
            "【部分逃逸分析】Graal 支持部分逃逸分析（Partial Escape Analysis）：即使对象在某些路径上逃逸，也可以在不逃逸的路径上进行标量替换。比 C2 的逃逸分析更强大。",
            "【编译时间】Graal 编译通常比 C2 慢（因为是 Java 实现），但生成的代码在某些场景下更优。需要权衡编译时间和代码质量。",
            "【兼容性】Graal 可能与某些库或框架存在兼容性问题。生产环境使用前需要充分测试。特别是使用了特殊 JVM 内部机制的代码。",
            "【GraalVM 版本】GraalVM 有 Community Edition（免费）和 Enterprise Edition（付费）。Enterprise 版提供更多优化和功能。"
        ],
        handsOnPath: [
            "下载 GraalVM，使用 -XX:+UseJVMCICompiler 启用 Graal 编译器。",
            "对比 Graal 和 C2 在基准测试中的性能差异。",
            "使用 GraalVM Native Image 将简单应用编译为原生可执行文件。",
            "使用 -XX:+PrintCompilation 观察 Graal 的编译行为。",
            "使用 Graal 的诊断选项分析编译决策。"
        ],
        selfCheck: [
            "Graal 编译器是用什么语言编写的？",
            "什么是 JVMCI？它的作用是什么？",
            "如何在 HotSpot 中使用 Graal 替代 C2？",
            "什么是部分逃逸分析？",
            "GraalVM Native Image 的优势是什么？",
            "Graal 相比 C2 有什么优缺点？"
        ],
        extensions: [
            "研究 Graal 的 Ideal Graph 表示和优化过程。",
            "了解 Truffle 框架如何利用 Graal 实现语言间优化。",
            "探索 GraalVM Native Image 的限制和解决方案。",
            "研究 Graal 在云原生场景中的应用（如 Quarkus、Micronaut）。"
        ],
        sourceUrls: [
            "https://www.graalvm.org/latest/reference-manual/java/compiler/",
            "https://www.baeldung.com/graal-java-jit-compiler",
            "https://openjdk.org/jeps/243"
        ]
    }
}

export const week15Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w15-1": [
        {
            id: "jvm-w15-1-q1",
            question: "HotSpot JVM 有几个 JIT 编译器？",
            options: [
                "1 个",
                "2 个（C1 和 C2）",
                "3 个",
                "4 个"
            ],
            answer: 1,
            rationale: "HotSpot JVM 有两个 JIT 编译器：C1（Client Compiler）和 C2（Server Compiler）。"
        },
        {
            id: "jvm-w15-1-q2",
            question: "C1 和 C2 的主要区别是什么？",
            options: [
                "完全相同",
                "C1 编译快优化少，C2 编译慢优化深",
                "C1 用于服务器，C2 用于客户端",
                "C1 不能编译"
            ],
            answer: 1,
            rationale: "C1 编译快但优化程度低，适合启动阶段。C2 编译慢但优化深入，适合热点代码。"
        },
        {
            id: "jvm-w15-1-q3",
            question: "-XX:+TieredCompilation 是否默认启用？",
            options: [
                "否",
                "是",
                "取决于 JDK 版本",
                "取决于操作系统"
            ],
            answer: 1,
            rationale: "-XX:+TieredCompilation 分层编译默认启用。结合 C1 和 C2 的优势。"
        },
        {
            id: "jvm-w15-1-q4",
            question: "编译后的代码存储在哪里？",
            options: [
                "堆",
                "Code Cache",
                "Metaspace",
                "栈"
            ],
            answer: 1,
            rationale: "编译后的代码存储在 Code Cache 中。-XX:ReservedCodeCacheSize 设置其大小。"
        },
        {
            id: "jvm-w15-1-q5",
            question: "Code Cache 满了会发生什么？",
            options: [
                "自动扩容",
                "编译停止，性能下降",
                "JVM 崩溃",
                "没有影响"
            ],
            answer: 1,
            rationale: "Code Cache 满会导致 JIT 编译停止，代码只能解释执行，性能显著下降。"
        },
        {
            id: "jvm-w15-1-q6",
            question: "-XX:ReservedCodeCacheSize 的默认值大约是多少？",
            options: [
                "48MB",
                "128MB",
                "240MB",
                "512MB"
            ],
            answer: 2,
            rationale: "-XX:ReservedCodeCacheSize 默认值约为 240MB（不同 JDK 版本可能略有差异）。"
        },
        {
            id: "jvm-w15-1-q7",
            question: "如何禁用分层编译只使用 C2？",
            options: [
                "-XX:+TieredCompilation",
                "-XX:-TieredCompilation",
                "-XX:TieredStopAtLevel=4",
                "-XX:+UseC2Only"
            ],
            answer: 1,
            rationale: "-XX:-TieredCompilation 禁用分层编译，只使用 C2 编译器。"
        },
        {
            id: "jvm-w15-1-q8",
            question: "-XX:TieredStopAtLevel=1 的效果是什么？",
            options: [
                "只使用解释器",
                "只使用 C1 编译",
                "只使用 C2 编译",
                "禁用所有编译"
            ],
            answer: 1,
            rationale: "-XX:TieredStopAtLevel=1 限制编译最高到 Level 1，只使用 C1 编译，不使用 C2。"
        },
        {
            id: "jvm-w15-1-q9",
            question: "什么参数设置编译器线程数？",
            options: [
                "-XX:ParallelGCThreads",
                "-XX:CICompilerCount",
                "-XX:CompilerThreads",
                "-XX:JITThreads"
            ],
            answer: 1,
            rationale: "-XX:CICompilerCount 设置编译器线程数。编译在后台线程进行，不阻塞应用。"
        },
        {
            id: "jvm-w15-1-q10",
            question: "C2 编译器的优化包括什么？",
            options: [
                "只有内联",
                "全局优化、激进内联、逃逸分析、循环优化、向量化",
                "只有循环优化",
                "没有优化"
            ],
            answer: 1,
            rationale: "C2 的优化包括：全局优化、激进内联、逃逸分析、循环优化、向量化等。生成高质量代码。"
        },
        {
            id: "jvm-w15-1-q11",
            question: "使用什么命令查看代码缓存统计？",
            options: [
                "jstat -gc",
                "jcmd <pid> Compiler.codecache",
                "jmap -heap",
                "jstack"
            ],
            answer: 1,
            rationale: "jcmd <pid> Compiler.codecache 可以查看代码缓存的统计信息。"
        },
        {
            id: "jvm-w15-1-q12",
            question: "启动优先的场景应该如何配置编译器？",
            options: [
                "只使用 C2",
                "使用分层编译或只使用 C1",
                "禁用所有编译",
                "增大 Code Cache"
            ],
            answer: 1,
            rationale: "启动优先场景使用分层编译（默认）或只使用 C1（-XX:TieredStopAtLevel=1）可以加快启动。"
        }
    ],
    "jvm-w15-2": [
        {
            id: "jvm-w15-2-q1",
            question: "分层编译有几个级别？",
            options: [
                "3 个",
                "4 个",
                "5 个（Level 0-4）",
                "6 个"
            ],
            answer: 2,
            rationale: "分层编译有 5 个级别：Level 0（解释执行）、Level 1-3（C1 编译）、Level 4（C2 编译）。"
        },
        {
            id: "jvm-w15-2-q2",
            question: "Level 0 是什么？",
            options: [
                "C1 编译",
                "解释执行",
                "C2 编译",
                "Native 代码"
            ],
            answer: 1,
            rationale: "Level 0 是解释执行。解释器收集 profiling 数据，为后续编译优化提供依据。"
        },
        {
            id: "jvm-w15-2-q3",
            question: "Level 4 使用什么编译器？",
            options: [
                "C1",
                "C2",
                "解释器",
                "Graal"
            ],
            answer: 1,
            rationale: "Level 4 使用 C2 编译器进行完全优化编译，生成最高质量的机器代码。"
        },
        {
            id: "jvm-w15-2-q4",
            question: "Profiling 数据包含什么信息？",
            options: [
                "只有调用次数",
                "运行时类型、分支频率、调用次数",
                "只有类型信息",
                "GC 统计"
            ],
            answer: 1,
            rationale: "Profiling 数据包括：实际运行时类型、分支跳转频率、调用次数。这些数据指导编译器优化。"
        },
        {
            id: "jvm-w15-2-q5",
            question: "什么是投机优化？",
            options: [
                "随机优化",
                "基于 profiling 数据假设运行时行为并优化",
                "只优化热点",
                "编译器猜测"
            ],
            answer: 1,
            rationale: "投机优化基于 profiling 数据假设运行时行为与之一致，进行激进优化。假设失败则逆优化。"
        },
        {
            id: "jvm-w15-2-q6",
            question: "什么情况下会发生逆优化？",
            options: [
                "代码太热",
                "投机假设失败（如类型变化）",
                "内存不足",
                "永远不会"
            ],
            answer: 1,
            rationale: "当投机假设不成立时（如运行时类型与 profiling 不符），JVM 会逆优化：丢弃编译代码，回到解释执行。"
        },
        {
            id: "jvm-w15-2-q7",
            question: "-XX:+PrintCompilation 输出中 % 表示什么？",
            options: [
                "编译进度",
                "OSR 编译",
                "编译失败",
                "Level 4"
            ],
            answer: 1,
            rationale: "% 符号表示 OSR（On-Stack Replacement）编译，即在方法执行过程中触发的编译。"
        },
        {
            id: "jvm-w15-2-q8",
            question: "代码晋升的标准路径是什么？",
            options: [
                "0→1→2→3→4",
                "0→3→4",
                "0→4",
                "1→2→3→4"
            ],
            answer: 1,
            rationale: "标准路径是 0→3→4：Level 0 解释执行收集 profiling，Level 3 C1 编译（完整 profiling），Level 4 C2 深度优化。"
        },
        {
            id: "jvm-w15-2-q9",
            question: "'made not entrant' 日志表示什么？",
            options: [
                "编译成功",
                "编译代码失效，不再被调用",
                "编译进行中",
                "编译失败"
            ],
            answer: 1,
            rationale: "'made not entrant' 表示编译代码失效，新的调用不会进入这个编译版本。通常是逆优化的结果。"
        },
        {
            id: "jvm-w15-2-q10",
            question: "频繁逆优化会有什么影响？",
            options: [
                "性能提升",
                "性能下降",
                "没有影响",
                "内存增加"
            ],
            answer: 1,
            rationale: "频繁逆优化会导致性能下降：每次逆优化都需要丢弃编译代码，回到解释执行，重新收集 profiling 和编译。"
        },
        {
            id: "jvm-w15-2-q11",
            question: "什么工具可以可视化分析编译日志？",
            options: [
                "jstat",
                "JITWatch",
                "jmap",
                "jstack"
            ],
            answer: 1,
            rationale: "JITWatch 是分析编译日志的可视化工具，可以展示编译决策、内联、逆优化等信息。"
        },
        {
            id: "jvm-w15-2-q12",
            question: "Level 1 和 Level 3 的区别是什么？",
            options: [
                "使用不同编译器",
                "Level 1 无 profiling，Level 3 有完整 profiling",
                "编译速度不同",
                "没有区别"
            ],
            answer: 1,
            rationale: "Level 1 是 C1 编译无 profiling；Level 3 是 C1 编译有完整 profiling。Level 3 收集的 profiling 数据供 C2 使用。"
        }
    ],
    "jvm-w15-3": [
        {
            id: "jvm-w15-3-q1",
            question: "Graal 编译器是用什么语言编写的？",
            options: [
                "C++",
                "Java",
                "C",
                "Rust"
            ],
            answer: 1,
            rationale: "Graal 是用 Java 编写的 JIT 编译器，代码更现代、更容易维护。"
        },
        {
            id: "jvm-w15-3-q2",
            question: "什么是 JVMCI？",
            options: [
                "JVM 配置接口",
                "JVM 编译器接口，允许 Java 编写的编译器接入 HotSpot",
                "JVM 内存接口",
                "JVM 监控接口"
            ],
            answer: 1,
            rationale: "JVMCI（JVM Compiler Interface）是 Graal 与 JVM 交互的接口，允许用 Java 编写的编译器接入 HotSpot。"
        },
        {
            id: "jvm-w15-3-q3",
            question: "如何在 HotSpot 中使用 Graal 替代 C2？",
            options: [
                "-XX:+UseG1GC",
                "-XX:+UseJVMCICompiler",
                "-XX:+UseGraalCompiler",
                "-XX:+EnableGraal"
            ],
            answer: 1,
            rationale: "使用 -XX:+UseJVMCICompiler 可以让 Graal 替代 C2 处理 Level 4 编译任务。"
        },
        {
            id: "jvm-w15-3-q4",
            question: "什么是部分逃逸分析？",
            options: [
                "只分析部分对象",
                "即使对象在某些路径上逃逸，也可以在不逃逸的路径上优化",
                "逃逸分析的一部分",
                "不完整的分析"
            ],
            answer: 1,
            rationale: "部分逃逸分析：即使对象在某些路径上逃逸，也可以在不逃逸的路径上进行标量替换。比 C2 的逃逸分析更强大。"
        },
        {
            id: "jvm-w15-3-q5",
            question: "GraalVM Native Image 的优势是什么？",
            options: [
                "运行时优化",
                "启动时间毫秒级，内存占用低",
                "支持所有 Java 特性",
                "无需编译"
            ],
            answer: 1,
            rationale: "GraalVM Native Image 将应用编译为原生可执行文件，启动时间毫秒级，内存占用低。适合云原生和微服务。"
        },
        {
            id: "jvm-w15-3-q6",
            question: "Graal 相比 C2 的缺点是什么？",
            options: [
                "代码质量差",
                "编译时间通常更长",
                "不支持优化",
                "没有缺点"
            ],
            answer: 1,
            rationale: "Graal 是 Java 实现，编译时间通常比 C2 长。但在某些场景下生成的代码更优。"
        },
        {
            id: "jvm-w15-3-q7",
            question: "GraalVM 支持哪些语言？",
            options: [
                "只有 Java",
                "Java、JavaScript、Python、Ruby 等",
                "只有 JavaScript",
                "只有 C++"
            ],
            answer: 1,
            rationale: "GraalVM 是多语言虚拟机，支持 Java、JavaScript、Python、Ruby、R 等多种语言。"
        },
        {
            id: "jvm-w15-3-q8",
            question: "什么是 JEP 243？",
            options: [
                "Graal 编译器",
                "JVMCI（JVM Compiler Interface）",
                "Native Image",
                "分层编译"
            ],
            answer: 1,
            rationale: "JEP 243 定义了 JVMCI（JVM Compiler Interface），允许用 Java 编写的编译器接入 JVM。"
        },
        {
            id: "jvm-w15-3-q9",
            question: "GraalVM 有哪两个版本？",
            options: [
                "Free 和 Paid",
                "Community Edition 和 Enterprise Edition",
                "Standard 和 Professional",
                "Basic 和 Advanced"
            ],
            answer: 1,
            rationale: "GraalVM 有 Community Edition（免费）和 Enterprise Edition（付费，提供更多优化和功能）。"
        },
        {
            id: "jvm-w15-3-q10",
            question: "Native Image 的限制是什么？",
            options: [
                "启动慢",
                "没有 JIT 运行时优化，反射等需要特殊配置",
                "内存占用高",
                "不支持 Java"
            ],
            answer: 1,
            rationale: "Native Image 是 AOT 编译，没有 JIT 的运行时优化。反射、动态代理等需要特殊配置。"
        },
        {
            id: "jvm-w15-3-q11",
            question: "使用 Graal 前需要注意什么？",
            options: [
                "无需注意",
                "可能存在兼容性问题，需要充分测试",
                "只能在 Linux 使用",
                "必须禁用 GC"
            ],
            answer: 1,
            rationale: "Graal 可能与某些库或框架存在兼容性问题，生产环境使用前需要充分测试。"
        },
        {
            id: "jvm-w15-3-q12",
            question: "什么是 Truffle？",
            options: [
                "一种巧克力",
                "GraalVM 的语言实现框架，支持多语言优化",
                "编译器优化",
                "内存管理"
            ],
            answer: 1,
            rationale: "Truffle 是 GraalVM 的语言实现框架，可以用它实现新语言并利用 Graal 进行优化。"
        }
    ]
}
