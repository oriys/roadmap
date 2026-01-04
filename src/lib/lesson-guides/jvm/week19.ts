import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week19Guides: Record<string, LessonGuide> = {
    "jvm-w19-1": {
        lessonId: "jvm-w19-1",
        background: [
            "【堆内存参数】-Xms：初始堆大小。-Xmx：最大堆大小。生产环境通常设置 -Xms=-Xmx 避免堆动态调整开销。根据应用实际需求和物理内存设置，通常不超过物理内存的 70%。",
            "【堆外内存】-XX:MaxDirectMemorySize：DirectByteBuffer 的最大大小，默认约等于 -Xmx。-XX:MaxMetaspaceSize：Metaspace 最大大小，建议设置上限避免无限增长。",
            "【栈大小】-Xss：线程栈大小，默认 1MB（64 位系统）。减小可以创建更多线程，但可能导致 StackOverflowError。增大可以支持更深的调用链。",
            "【代码缓存】-XX:ReservedCodeCacheSize：JIT 编译代码缓存大小，默认 240MB。代码多或使用分层编译时可能需要增大。Code Cache 满会导致编译停止。",
            "【内存相关诊断】-XX:NativeMemoryTracking=summary/detail：启用本地内存跟踪，可用 jcmd VM.native_memory 查看。-XX:+HeapDumpOnOutOfMemoryError：OOM 时自动生成堆转储。"
        ],
        keyDifficulties: [
            "【容器环境】容器中 JVM 默认只看到物理内存。JDK 10+ 使用 -XX:+UseContainerSupport（默认开启）识别容器限制。JDK 8u191+ 使用 -XX:+UseCGroupMemoryLimitForHeap。",
            "【堆大小选择】太小：GC 频繁，吞吐量下降。太大：GC 暂停时间长，浪费内存。根据应用负载、对象存活时间、延迟要求选择。使用监控数据指导调优。",
            "【Metaspace 管理】-XX:MetaspaceSize：初始 Metaspace 大小（也是第一次 Full GC 阈值）。-XX:MaxMetaspaceSize：最大值。动态类生成（如 Spring AOP、Groovy）需要更大 Metaspace。",
            "【NUMA 支持】-XX:+UseNUMA：启用 NUMA 感知内存分配。对于 NUMA 架构的多核服务器，可以提升内存访问性能。G1 和 ZGC 都支持 NUMA。"
        ],
        handsOnPath: [
            "使用 java -XX:+PrintFlagsFinal 查看所有 JVM 参数默认值。",
            "调整 -Xms/-Xmx，使用 jstat 和 GC 日志观察堆使用情况。",
            "使用 -XX:NativeMemoryTracking 跟踪 JVM 内存使用明细。",
            "在 Docker 容器中验证 JVM 对内存限制的识别。",
            "调整 -XX:ReservedCodeCacheSize，观察对 JIT 编译的影响。"
        ],
        selfCheck: [
            "-Xms 和 -Xmx 的作用是什么？",
            "为什么生产环境通常设置 -Xms=-Xmx？",
            "-Xss 设置什么？设置过小会怎样？",
            "容器环境下 JVM 如何识别内存限制？",
            "Metaspace 相关的参数有哪些？",
            "Code Cache 满了会发生什么？"
        ],
        extensions: [
            "研究 JVM Ergonomics 自动调优机制。",
            "了解 Large Pages（-XX:+UseLargePages）对性能的影响。",
            "探索 JEP 346: Promptly Return Unused Committed Memory。",
            "研究 ZGC 的堆大小动态调整机制。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html",
            "https://www.baeldung.com/jvm-parameters",
            "https://docs.oracle.com/en/java/javase/21/gctuning/factors-affecting-garbage-collection-performance.html"
        ]
    },
    "jvm-w19-2": {
        lessonId: "jvm-w19-2",
        background: [
            "【GC 选择】-XX:+UseG1GC（JDK 9+ 默认）、-XX:+UseZGC、-XX:+UseShenandoahGC、-XX:+UseParallelGC（JDK 8 默认）。根据应用特点选择：延迟敏感用 ZGC/Shenandoah，吞吐量优先用 Parallel。",
            "【G1 调优】-XX:MaxGCPauseMillis=200（目标暂停时间）。-XX:G1HeapRegionSize（Region 大小）。-XX:InitiatingHeapOccupancyPercent=45（触发并发标记的堆占用率）。",
            "【ZGC 调优】-XX:+UseZGC。Java 21+：-XX:+ZGenerational（分代 ZGC）。ZGC 大部分参数自动调优，通常只需设置堆大小。-XX:SoftMaxHeapSize 可以设置软上限。",
            "【GC 日志】-Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=10m。生产环境必须启用 GC 日志。JDK 8：-XX:+PrintGCDetails -XX:+PrintGCDateStamps -Xloggc:gc.log。",
            "【GC 线程】-XX:ParallelGCThreads：STW 阶段并行线程数。-XX:ConcGCThreads：并发阶段线程数。默认基于 CPU 核数计算，容器中可能需要手动设置。"
        ],
        keyDifficulties: [
            "【暂停时间 vs 吞吐量】-XX:MaxGCPauseMillis 设置暂停目标，但可能降低吞吐量。-XX:GCTimeRatio=99 表示 GC 时间不超过 1%（吞吐量 99%）。两者是权衡关系。",
            "【年轻代大小】G1 动态调整年轻代。-XX:G1NewSizePercent/-XX:G1MaxNewSizePercent 设置范围。固定年轻代（-Xmn）会禁用动态调整，可能影响暂停时间目标。",
            "【避免 Full GC】Full GC 是 G1 的退化行为，应尽量避免。原因：堆太小、分配速度超过回收速度、Humongous 分配。解决：增大堆、提前触发并发标记、减少大对象。",
            "【GC 参数简化】现代 GC（G1、ZGC、Shenandoah）自动调优能力强。过多参数可能适得其反。建议：先用默认值，有问题再针对性调整。"
        ],
        handsOnPath: [
            "对比不同 GC（G1、ZGC、Parallel）的性能特点。",
            "调整 -XX:MaxGCPauseMillis，观察暂停时间和吞吐量变化。",
            "使用 GCEasy 分析 GC 日志，识别调优机会。",
            "模拟高负载，观察不同 GC 参数下的行为。",
            "在容器环境中配置 GC 线程数。"
        ],
        selfCheck: [
            "如何选择合适的垃圾收集器？",
            "-XX:MaxGCPauseMillis 的作用和限制是什么？",
            "G1 的关键调优参数有哪些？",
            "ZGC 需要调优什么参数？",
            "如何避免 G1 Full GC？",
            "为什么不建议过度调优 GC 参数？"
        ],
        extensions: [
            "研究 G1 的自适应 IHOP 机制。",
            "了解 ZGC 的软最大堆大小（SoftMaxHeapSize）。",
            "探索 Shenandoah 的 Compact 模式。",
            "研究 GC 参数在不同 JDK 版本的变化。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/gctuning/",
            "https://www.baeldung.com/jvm-garbage-collectors",
            "https://wiki.openjdk.org/display/zgc/Main"
        ]
    },
    "jvm-w19-3": {
        lessonId: "jvm-w19-3",
        background: [
            "【分层编译】-XX:+TieredCompilation（默认开启）：结合 C1 和 C2 编译器。-XX:-TieredCompilation：禁用分层编译，只用 C2。-XX:TieredStopAtLevel=1：只用 C1（快速启动）。",
            "【编译阈值】-XX:CompileThreshold：触发编译的调用次数阈值。分层编译时此参数被忽略，使用 -XX:Tier3InvocationThreshold、-XX:Tier4InvocationThreshold 等。",
            "【内联参数】-XX:MaxInlineSize=35：普通方法内联大小阈值。-XX:FreqInlineSize=325：热点方法内联大小阈值。-XX:MaxInlineLevel=9：内联嵌套深度。",
            "【逃逸分析】-XX:+DoEscapeAnalysis（默认开启）：启用逃逸分析。-XX:+EliminateAllocations：启用标量替换。-XX:+EliminateLocks：启用锁消除。这些优化默认都是开启的。",
            "【诊断参数】-XX:+PrintCompilation：打印编译事件。-XX:+PrintInlining：打印内联决策。-XX:+UnlockDiagnosticVMOptions：解锁诊断参数。"
        ],
        keyDifficulties: [
            "【启动优化】快速启动场景：-XX:TieredStopAtLevel=1 只用 C1，或使用 CDS/AOT。容器短生命周期应用、Serverless 场景可以考虑。牺牲峰值性能换取启动速度。",
            "【Graal 编译器】-XX:+UseJVMCICompiler：使用 Graal 替代 C2。GraalVM 提供更多优化（如部分逃逸分析）。需要 GraalVM 或配置 JVMCI。",
            "【CompileCommand】-XX:CompileCommand=exclude,*ClassName.methodName：排除编译。=print：打印汇编。=inline/dontinline：控制内联。用于诊断和实验。",
            "【预热问题】JIT 编译需要时间，应用刚启动时性能较低（预热期）。解决方案：预热脚本、CDS（类数据共享）、AOT 编译、分层编译。"
        ],
        handsOnPath: [
            "使用 -XX:TieredStopAtLevel=1 对比启动时间和峰值性能。",
            "使用 -XX:+PrintCompilation 观察编译行为。",
            "调整 -XX:MaxInlineSize 观察对内联的影响。",
            "使用 -XX:CompileCommand 排除特定方法的编译。",
            "使用 JITWatch 分析编译日志和内联决策。"
        ],
        selfCheck: [
            "分层编译的各级别是什么？",
            "如何优化应用启动时间？",
            "内联相关的参数有哪些？",
            "-XX:CompileCommand 的用法是什么？",
            "什么是预热问题？如何解决？",
            "如何使用 Graal 编译器？"
        ],
        extensions: [
            "研究 CDS（Class Data Sharing）加速启动。",
            "了解 GraalVM Native Image AOT 编译。",
            "探索 JEP 295: AOT Compilation 的使用。",
            "研究 Project Leyden 的启动优化目标。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/vm/java-virtual-machine-technology-overview.html",
            "https://www.baeldung.com/jvm-tiered-compilation",
            "https://www.graalvm.org/latest/reference-manual/java/compiler/"
        ]
    }
}

export const week19Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w19-1": [
        {
            id: "jvm-w19-1-q1",
            question: "-Xms 和 -Xmx 分别设置什么？",
            options: [
                "栈大小",
                "初始堆大小和最大堆大小",
                "Metaspace 大小",
                "线程数"
            ],
            answer: 1,
            rationale: "-Xms 设置初始堆大小，-Xmx 设置最大堆大小。"
        },
        {
            id: "jvm-w19-1-q2",
            question: "为什么生产环境通常设置 -Xms=-Xmx？",
            options: [
                "节省内存",
                "避免堆动态调整的开销",
                "加快 GC",
                "没有原因"
            ],
            answer: 1,
            rationale: "设置 -Xms=-Xmx 可以避免运行时堆大小动态调整带来的开销和暂停。"
        },
        {
            id: "jvm-w19-1-q3",
            question: "-Xss 设置什么？",
            options: [
                "堆大小",
                "线程栈大小",
                "Metaspace 大小",
                "Code Cache 大小"
            ],
            answer: 1,
            rationale: "-Xss 设置线程栈大小，默认 1MB（64 位系统）。"
        },
        {
            id: "jvm-w19-1-q4",
            question: "-Xss 设置过小会怎样？",
            options: [
                "OOM",
                "StackOverflowError",
                "GC 频繁",
                "启动慢"
            ],
            answer: 1,
            rationale: "-Xss 过小可能导致 StackOverflowError，因为栈空间不足以支持深调用链。"
        },
        {
            id: "jvm-w19-1-q5",
            question: "容器环境下 JVM 如何识别内存限制？",
            options: [
                "自动识别",
                "JDK 10+ 使用 -XX:+UseContainerSupport（默认开启）",
                "无法识别",
                "只看物理内存"
            ],
            answer: 1,
            rationale: "JDK 10+ 使用 -XX:+UseContainerSupport（默认开启）识别容器内存限制。"
        },
        {
            id: "jvm-w19-1-q6",
            question: "-XX:ReservedCodeCacheSize 设置什么？",
            options: [
                "堆大小",
                "JIT 编译代码缓存大小",
                "Metaspace 大小",
                "栈大小"
            ],
            answer: 1,
            rationale: "-XX:ReservedCodeCacheSize 设置 JIT 编译代码缓存大小，默认 240MB。"
        },
        {
            id: "jvm-w19-1-q7",
            question: "Code Cache 满了会发生什么？",
            options: [
                "OOM",
                "编译停止，性能下降",
                "GC 频繁",
                "没有影响"
            ],
            answer: 1,
            rationale: "Code Cache 满会导致 JIT 编译停止，代码只能解释执行，性能显著下降。"
        },
        {
            id: "jvm-w19-1-q8",
            question: "如何查看 JVM 所有参数的默认值？",
            options: [
                "java -help",
                "java -XX:+PrintFlagsFinal",
                "jinfo",
                "jstat"
            ],
            answer: 1,
            rationale: "java -XX:+PrintFlagsFinal 可以打印所有 JVM 参数及其默认值。"
        },
        {
            id: "jvm-w19-1-q9",
            question: "-XX:MaxMetaspaceSize 的作用是什么？",
            options: [
                "设置堆大小",
                "设置 Metaspace 最大大小，防止无限增长",
                "设置 Code Cache",
                "设置栈大小"
            ],
            answer: 1,
            rationale: "-XX:MaxMetaspaceSize 设置 Metaspace 最大大小，建议设置上限避免无限增长。"
        },
        {
            id: "jvm-w19-1-q10",
            question: "如何启用本地内存跟踪？",
            options: [
                "-XX:+PrintGC",
                "-XX:NativeMemoryTracking=summary",
                "-XX:+HeapDumpOnOutOfMemoryError",
                "-verbose:gc"
            ],
            answer: 1,
            rationale: "-XX:NativeMemoryTracking=summary/detail 启用本地内存跟踪，可用 jcmd VM.native_memory 查看。"
        },
        {
            id: "jvm-w19-1-q11",
            question: "堆大小设置过大有什么问题？",
            options: [
                "GC 频繁",
                "GC 暂停时间长，浪费内存",
                "启动慢",
                "编译慢"
            ],
            answer: 1,
            rationale: "堆太大可能导致 GC 暂停时间长，且浪费内存。需要根据应用实际需求设置。"
        },
        {
            id: "jvm-w19-1-q12",
            question: "-XX:+UseNUMA 的作用是什么？",
            options: [
                "使用 NUMA 感知内存分配，提升多核性能",
                "启用 GC",
                "启用 JIT",
                "启用压缩指针"
            ],
            answer: 0,
            rationale: "-XX:+UseNUMA 启用 NUMA 感知内存分配，对于 NUMA 架构的多核服务器可以提升性能。"
        }
    ],
    "jvm-w19-2": [
        {
            id: "jvm-w19-2-q1",
            question: "JDK 9+ 默认使用什么垃圾收集器？",
            options: [
                "Parallel GC",
                "G1GC",
                "ZGC",
                "CMS"
            ],
            answer: 1,
            rationale: "JDK 9+ 默认使用 G1GC。JDK 8 默认是 Parallel GC。"
        },
        {
            id: "jvm-w19-2-q2",
            question: "-XX:MaxGCPauseMillis 的作用是什么？",
            options: [
                "设置最大堆大小",
                "设置 GC 目标暂停时间",
                "设置 GC 频率",
                "设置 GC 线程数"
            ],
            answer: 1,
            rationale: "-XX:MaxGCPauseMillis 设置 GC 目标暂停时间，G1 会尽量满足但不保证。"
        },
        {
            id: "jvm-w19-2-q3",
            question: "延迟敏感应用应该选择什么 GC？",
            options: [
                "Parallel GC",
                "ZGC 或 Shenandoah",
                "Serial GC",
                "CMS"
            ],
            answer: 1,
            rationale: "延迟敏感应用应选择低延迟 GC：ZGC 或 Shenandoah，暂停时间可控制在 1ms 以内。"
        },
        {
            id: "jvm-w19-2-q4",
            question: "G1 的 -XX:InitiatingHeapOccupancyPercent 默认值是多少？",
            options: [
                "30",
                "45",
                "60",
                "75"
            ],
            answer: 1,
            rationale: "-XX:InitiatingHeapOccupancyPercent 默认 45，表示堆使用率达到 45% 时触发并发标记。"
        },
        {
            id: "jvm-w19-2-q5",
            question: "ZGC 需要调优什么参数？",
            options: [
                "很多参数",
                "通常只需设置堆大小，大部分自动调优",
                "必须设置所有 GC 参数",
                "无法调优"
            ],
            answer: 1,
            rationale: "ZGC 自动调优能力强，通常只需设置堆大小。大部分参数使用默认值即可。"
        },
        {
            id: "jvm-w19-2-q6",
            question: "如何启用分代 ZGC（Java 21+）？",
            options: [
                "-XX:+UseZGC",
                "-XX:+UseZGC -XX:+ZGenerational",
                "-XX:+UseG1GC",
                "-XX:+UseGenerationalZGC"
            ],
            answer: 1,
            rationale: "Java 21 使用 -XX:+UseZGC -XX:+ZGenerational 启用分代 ZGC。Java 23+ 默认启用。"
        },
        {
            id: "jvm-w19-2-q7",
            question: "-XX:ParallelGCThreads 设置什么？",
            options: [
                "应用线程数",
                "STW 阶段的并行 GC 线程数",
                "并发 GC 线程数",
                "编译线程数"
            ],
            answer: 1,
            rationale: "-XX:ParallelGCThreads 设置 STW 阶段的并行 GC 线程数。"
        },
        {
            id: "jvm-w19-2-q8",
            question: "G1 Full GC 的常见原因是什么？",
            options: [
                "正常行为",
                "堆太小、分配速度超过回收速度、Humongous 分配",
                "GC 线程太少",
                "Code Cache 满"
            ],
            answer: 1,
            rationale: "G1 Full GC 常见原因：堆太小、分配速度超过并发标记/回收速度、大量 Humongous 分配。"
        },
        {
            id: "jvm-w19-2-q9",
            question: "为什么不建议过度调优 GC 参数？",
            options: [
                "没有效果",
                "现代 GC 自动调优能力强，过多参数可能适得其反",
                "会导致 OOM",
                "会导致崩溃"
            ],
            answer: 1,
            rationale: "现代 GC（G1、ZGC）自动调优能力强。过多参数可能干扰自适应机制，适得其反。"
        },
        {
            id: "jvm-w19-2-q10",
            question: "-XX:GCTimeRatio=99 表示什么？",
            options: [
                "GC 时间 99%",
                "GC 时间不超过 1%（吞吐量目标 99%）",
                "暂停时间 99ms",
                "GC 频率"
            ],
            answer: 1,
            rationale: "-XX:GCTimeRatio=99 表示 GC 时间不超过 1/(1+99)=1%，即吞吐量目标是 99%。"
        },
        {
            id: "jvm-w19-2-q11",
            question: "固定年轻代大小（-Xmn）对 G1 有什么影响？",
            options: [
                "性能提升",
                "禁用动态调整，可能影响暂停时间目标",
                "没有影响",
                "启用并发 GC"
            ],
            answer: 1,
            rationale: "使用 -Xmn 固定年轻代会禁用 G1 的动态年轻代调整，可能影响暂停时间目标的达成。"
        },
        {
            id: "jvm-w19-2-q12",
            question: "吞吐量优先应该选择什么 GC？",
            options: [
                "ZGC",
                "Parallel GC",
                "Shenandoah",
                "Serial GC"
            ],
            answer: 1,
            rationale: "吞吐量优先场景应选择 Parallel GC，它专注于最大化吞吐量，适合批处理任务。"
        }
    ],
    "jvm-w19-3": [
        {
            id: "jvm-w19-3-q1",
            question: "-XX:+TieredCompilation 是否默认开启？",
            options: [
                "否",
                "是",
                "取决于 JDK 版本",
                "取决于 GC"
            ],
            answer: 1,
            rationale: "-XX:+TieredCompilation 分层编译默认开启，结合 C1 和 C2 编译器的优势。"
        },
        {
            id: "jvm-w19-3-q2",
            question: "-XX:TieredStopAtLevel=1 的效果是什么？",
            options: [
                "只用 C2",
                "只用 C1 编译，加快启动但降低峰值性能",
                "禁用编译",
                "只用解释器"
            ],
            answer: 1,
            rationale: "-XX:TieredStopAtLevel=1 只使用 C1 编译，启动快但峰值性能不如 C2。"
        },
        {
            id: "jvm-w19-3-q3",
            question: "-XX:MaxInlineSize 的默认值是多少？",
            options: [
                "25 字节",
                "35 字节",
                "45 字节",
                "325 字节"
            ],
            answer: 1,
            rationale: "-XX:MaxInlineSize 默认 35 字节，小于此大小的方法会被考虑内联。"
        },
        {
            id: "jvm-w19-3-q4",
            question: "如何排除特定方法的编译？",
            options: [
                "-XX:+PrintCompilation",
                "-XX:CompileCommand=exclude,*ClassName.methodName",
                "-XX:-TieredCompilation",
                "无法排除"
            ],
            answer: 1,
            rationale: "-XX:CompileCommand=exclude,*ClassName.methodName 可以排除特定方法的编译。"
        },
        {
            id: "jvm-w19-3-q5",
            question: "什么是预热问题？",
            options: [
                "JVM 启动慢",
                "JIT 编译需要时间，应用刚启动时性能较低",
                "内存不足",
                "GC 频繁"
            ],
            answer: 1,
            rationale: "预热问题：JIT 编译需要时间，应用刚启动时代码是解释执行的，性能较低。"
        },
        {
            id: "jvm-w19-3-q6",
            question: "如何使用 Graal 编译器？",
            options: [
                "-XX:+UseG1GC",
                "-XX:+UseJVMCICompiler（需要 GraalVM）",
                "-XX:+UseGraalCompiler",
                "默认使用"
            ],
            answer: 1,
            rationale: "-XX:+UseJVMCICompiler 使用 Graal 替代 C2，需要 GraalVM 或配置 JVMCI。"
        },
        {
            id: "jvm-w19-3-q7",
            question: "-XX:+DoEscapeAnalysis 是否默认开启？",
            options: [
                "否",
                "是",
                "取决于 GC",
                "取决于堆大小"
            ],
            answer: 1,
            rationale: "-XX:+DoEscapeAnalysis 默认开启，启用逃逸分析优化。"
        },
        {
            id: "jvm-w19-3-q8",
            question: "-XX:+PrintCompilation 的作用是什么？",
            options: [
                "打印 GC 日志",
                "打印编译事件（方法编译级别、时间等）",
                "打印内存信息",
                "打印线程信息"
            ],
            answer: 1,
            rationale: "-XX:+PrintCompilation 打印编译事件，包括编译 ID、级别、方法名等。"
        },
        {
            id: "jvm-w19-3-q9",
            question: "解决预热问题的方案有哪些？",
            options: [
                "只有增大堆",
                "预热脚本、CDS、AOT 编译、分层编译",
                "只有 GC 调优",
                "无法解决"
            ],
            answer: 1,
            rationale: "解决预热问题：预热脚本模拟负载、CDS 类数据共享、AOT 提前编译、分层编译。"
        },
        {
            id: "jvm-w19-3-q10",
            question: "-XX:+UnlockDiagnosticVMOptions 的作用是什么？",
            options: [
                "启用 GC",
                "解锁诊断参数，允许使用更多诊断选项",
                "启用日志",
                "启用监控"
            ],
            answer: 1,
            rationale: "-XX:+UnlockDiagnosticVMOptions 解锁诊断参数，允许使用 PrintInlining 等诊断选项。"
        },
        {
            id: "jvm-w19-3-q11",
            question: "快速启动场景应该如何配置？",
            options: [
                "使用默认配置",
                "-XX:TieredStopAtLevel=1 或使用 CDS/AOT",
                "增大堆",
                "使用 ZGC"
            ],
            answer: 1,
            rationale: "快速启动场景：-XX:TieredStopAtLevel=1 只用 C1，或使用 CDS/AOT 减少启动时间。"
        },
        {
            id: "jvm-w19-3-q12",
            question: "-XX:FreqInlineSize 和 -XX:MaxInlineSize 的区别是什么？",
            options: [
                "没有区别",
                "FreqInlineSize 用于热点方法，阈值更大（325 vs 35）",
                "MaxInlineSize 更大",
                "FreqInlineSize 用于小方法"
            ],
            answer: 1,
            rationale: "-XX:FreqInlineSize（默认 325）用于频繁调用的热点方法，-XX:MaxInlineSize（默认 35）用于普通方法。"
        }
    ]
}
