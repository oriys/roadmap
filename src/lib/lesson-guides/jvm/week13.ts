import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week13Guides: Record<string, LessonGuide> = {
    "jvm-w13-1": {
        lessonId: "jvm-w13-1",
        background: [
            "【G1GC 简介】G1GC（Garbage First Garbage Collector）是 Java 9+ 的默认垃圾收集器。设计目标是在大堆（4GB+）上提供可预测的暂停时间，同时保持较高的吞吐量。",
            "【Region 设计】G1 将堆划分为多个大小相等的 Region（1-32MB，默认根据堆大小自动计算）。Region 是 G1 内存管理和回收的基本单位，打破了传统的连续分代设计。",
            "【Region 类型】Region 有四种类型：Eden（新对象分配）、Survivor（存活的年轻对象）、Old（老年代对象）、Humongous（大对象，超过 Region 50% 的对象）。",
            "【Collection Set】Collection Set（CSet）是每次 GC 要回收的 Region 集合。G1 根据 Region 的垃圾比例和回收价值选择 CSet，优先回收垃圾最多的 Region（Garbage First 名称由来）。",
            "【可预测暂停】G1 通过控制 CSet 大小来控制暂停时间。-XX:MaxGCPauseMillis（默认 200ms）设置目标暂停时间，G1 会尽量在这个时间内完成 GC。"
        ],
        keyDifficulties: [
            "【Humongous 对象】超过 Region 50% 的对象是 Humongous 对象，需要连续的 Region 存储。Humongous 对象直接分配在老年代，可能导致碎片和 Full GC。应尽量避免。",
            "【Region 大小选择】Region 大小影响 Humongous 阈值和碎片。太小导致更多 Humongous 对象；太大浪费内存。-XX:G1HeapRegionSize 可以手动设置（必须是 2 的幂）。",
            "【RSet 开销】每个 Region 都有 Remembered Set 记录引入引用。引用关系复杂的应用 RSet 可能占用大量内存（高达堆的 20%）。可通过增大 Region 减少 RSet 数量。",
            "【并发标记】G1 使用 SATB（Snapshot At The Beginning）并发标记算法。标记开始时的对象图快照为基准，标记期间的新引用通过写屏障记录。"
        ],
        handsOnPath: [
            "使用 -XX:+UseG1GC 启用 G1GC（Java 9+ 默认）。",
            "使用 -Xlog:gc*=info 观察 G1 的 GC 日志。",
            "使用 -XX:G1HeapRegionSize 调整 Region 大小，观察对 Humongous 对象的影响。",
            "使用 jcmd <pid> GC.heap_info 查看 Region 分布和 RSet 大小。",
            "编写分配大对象的程序，观察 Humongous Region 的分配。"
        ],
        selfCheck: [
            "G1GC 的设计目标是什么？",
            "什么是 Region？有哪几种类型？",
            "什么是 Collection Set？G1 如何选择要回收的 Region？",
            "什么是 Humongous 对象？它有什么问题？",
            "-XX:MaxGCPauseMillis 的作用是什么？",
            "G1 使用什么并发标记算法？"
        ],
        extensions: [
            "研究 G1 的 IHOP（Initiating Heap Occupancy Percent）自适应调整。",
            "了解 G1 的并发 Refinement 线程工作原理。",
            "探索 Java 21 中 G1 的改进（如 Region pinning）。",
            "研究 G1 与 ZGC 的架构差异。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-first-g1-garbage-collector1.html",
            "https://www.oracle.com/technical-resources/articles/java/g1gc.html",
            "https://www.baeldung.com/jvm-garbage-collectors#g1-garbage-collector"
        ]
    },
    "jvm-w13-2": {
        lessonId: "jvm-w13-2",
        background: [
            "【G1 收集周期】G1 的收集周期包括：Young-only 阶段（只收集 Young Region）和 Space Reclamation 阶段（Mixed GC）。两个阶段交替进行，由堆占用率触发。",
            "【Young GC】Young GC 回收所有 Eden 和 Survivor Region，将存活对象复制到新的 Survivor 或晋升到 Old Region。Young GC 是 STW 的，但通常很快。",
            "【并发标记周期】当堆占用率达到 IHOP（默认 45%）时，启动并发标记。并发标记包括：Initial Mark（STW，标记 GC Roots）、Concurrent Mark（并发遍历）、Final Mark（STW，处理 SATB）、Cleanup（清理空 Region）。",
            "【Mixed GC】并发标记结束后，G1 进入 Mixed GC 阶段。Mixed GC 回收 Young Region + 部分价值高的 Old Region。通过多次 Mixed GC 逐步回收老年代。",
            "【Full GC】当 Mixed GC 无法跟上分配速度时，G1 会退化为 Full GC（串行、STW、整理整个堆）。Full GC 应尽量避免，是 G1 调优的重点。"
        ],
        keyDifficulties: [
            "【IHOP 调整】IHOP（Initiating Heap Occupancy Percent）决定何时开始并发标记。太高可能来不及标记导致 Full GC；太低导致频繁标记浪费 CPU。G1 会自适应调整 IHOP。",
            "【Mixed GC 次数】-XX:G1MixedGCCountTarget（默认 8）设置 Mixed GC 次数目标。次数太少每次回收太多导致暂停长；次数太多延长回收周期。",
            "【年轻代大小】G1 动态调整年轻代大小。-XX:G1NewSizePercent 和 -XX:G1MaxNewSizePercent 设置范围。固定年轻代大小（-Xmn）会禁用动态调整，可能影响暂停时间目标。",
            "【Evacuation Failure】当没有足够空间复制存活对象时发生 Evacuation Failure。对象会被原地标记（保留在原 Region），然后触发 Full GC。"
        ],
        handsOnPath: [
            "使用 -Xlog:gc*=debug 查看详细的 G1 GC 日志。",
            "观察 GC 日志中 Young GC、Concurrent Marking、Mixed GC 的阶段。",
            "调整 -XX:InitiatingHeapOccupancyPercent 观察并发标记触发时机。",
            "使用 GCEasy 或 GCViewer 分析 G1 GC 日志。",
            "模拟内存压力，观察 Evacuation Failure 和 Full GC。"
        ],
        selfCheck: [
            "G1 的收集周期包括哪些阶段？",
            "什么是 Mixed GC？它与 Young GC 有什么区别？",
            "并发标记周期包括哪些步骤？",
            "什么是 IHOP？它如何影响 GC？",
            "什么是 Evacuation Failure？",
            "如何避免 G1 退化为 Full GC？"
        ],
        extensions: [
            "研究 G1 的 Adaptive IHOP 自适应算法。",
            "了解 G1 的 Remembered Set Refinement 机制。",
            "探索 G1 的 String Deduplication 功能。",
            "研究 G1 在不同负载下的性能特征。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-first-g1-garbage-collector1.html#GUID-F1BE86FA-3EDC-4D4F-BDB4-4B044AD83180",
            "https://www.oracle.com/technical-resources/articles/java/g1gc.html#collection-cycle",
            "https://tschatzl.github.io/2024/04/16/jdk22-g1-changes.html"
        ]
    },
    "jvm-w13-3": {
        lessonId: "jvm-w13-3",
        background: [
            "【暂停时间目标】-XX:MaxGCPauseMillis（默认 200ms）设置目标暂停时间。G1 会根据历史数据预测回收时间，选择合适大小的 CSet。这是软目标，不保证一定达到。",
            "【Region 大小】-XX:G1HeapRegionSize 设置 Region 大小（1MB-32MB，必须是 2 的幂）。默认根据堆大小自动计算（约 2048 个 Region）。增大 Region 减少 RSet 开销但增加 Humongous 阈值。",
            "【IHOP 设置】-XX:InitiatingHeapOccupancyPercent 设置触发并发标记的堆占用率。默认 45%。自适应 IHOP 会根据实际情况调整。-XX:-G1UseAdaptiveIHOP 可以禁用自适应。",
            "【GC 线程】-XX:ParallelGCThreads 设置 STW 阶段的并行 GC 线程数。-XX:ConcGCThreads 设置并发标记阶段的线程数（默认为 ParallelGCThreads 的 1/4）。",
            "【日志配置】-Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=10m 配置 GC 日志。GC 日志是调优的基础数据来源。"
        ],
        keyDifficulties: [
            "【暂停时间 vs 吞吐量】暂停时间目标越短，每次 GC 回收的内存越少，GC 频率越高，吞吐量下降。需要根据应用特点平衡。延迟敏感应用设置较短暂停；批处理应用可以接受较长暂停。",
            "【堆大小影响】堆越大，每次 GC 需要处理的对象可能越多，暂停时间可能越长。但 G1 通过控制 CSet 来控制暂停，大堆不一定意味着长暂停。堆太小则 GC 频繁。",
            "【调优原则】避免过度调优：先设置堆大小和暂停目标，观察默认行为。只有出现问题时才调整具体参数。保持配置简单，让 G1 自适应。",
            "【监控指标】关键监控指标：GC 暂停时间、GC 频率、吞吐量、堆使用率、Full GC 次数。使用 JFR、jstat、GC 日志分析工具进行监控。"
        ],
        handsOnPath: [
            "调整 -XX:MaxGCPauseMillis 观察暂停时间和吞吐量的变化。",
            "使用 -XX:G1HeapRegionSize 调整 Region 大小，观察对大对象分配的影响。",
            "使用 jstat -gc <pid> 1000 实时监控 GC 统计。",
            "使用 GCEasy 分析 GC 日志，识别问题和优化机会。",
            "使用 JFR 收集 GC 事件，在 JMC 中分析。"
        ],
        selfCheck: [
            "-XX:MaxGCPauseMillis 的作用是什么？",
            "Region 大小如何影响 GC 行为？",
            "什么是 IHOP？如何设置？",
            "G1 调优应该遵循什么原则？",
            "有哪些重要的 GC 监控指标？",
            "如何配置 G1 的 GC 日志？"
        ],
        extensions: [
            "研究 G1 的各种高级参数（G1ReservePercent、G1MixedGCLiveThresholdPercent 等）。",
            "了解不同场景下的 G1 最佳实践。",
            "探索 G1 调优的常见陷阱和误区。",
            "研究 G1 在容器环境下的调优考虑。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-first-g1-garbage-collector1.html#GUID-082C967F-2DAC-4B59-8A81-0CEC6EEB9016",
            "https://www.baeldung.com/g1-garbage-collector-performance",
            "https://www.oracle.com/technical-resources/articles/java/g1gc.html#recommendations"
        ]
    }
}

export const week13Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w13-1": [
        {
            id: "jvm-w13-1-q1",
            question: "G1GC 从 Java 几开始成为默认垃圾收集器？",
            options: [
                "Java 7",
                "Java 8",
                "Java 9",
                "Java 11"
            ],
            answer: 2,
            rationale: "G1GC 从 Java 9 开始成为默认垃圾收集器，取代了 Parallel GC。"
        },
        {
            id: "jvm-w13-1-q2",
            question: "G1 的 Region 有哪几种类型？",
            options: [
                "只有 Eden 和 Old",
                "Eden、Survivor、Old、Humongous",
                "Young 和 Old",
                "只有 Humongous"
            ],
            answer: 1,
            rationale: "G1 的 Region 有四种类型：Eden（新对象）、Survivor（存活的年轻对象）、Old（老年代）、Humongous（大对象）。"
        },
        {
            id: "jvm-w13-1-q3",
            question: "什么是 Humongous 对象？",
            options: [
                "任何大对象",
                "超过 Region 50% 的对象",
                "超过 1MB 的对象",
                "跨越多个 Region 的对象"
            ],
            answer: 1,
            rationale: "Humongous 对象是超过 Region 大小 50% 的对象，需要连续的 Region 存储。"
        },
        {
            id: "jvm-w13-1-q4",
            question: "什么是 Collection Set（CSet）？",
            options: [
                "所有 Region 的集合",
                "每次 GC 要回收的 Region 集合",
                "存活对象集合",
                "Humongous 对象集合"
            ],
            answer: 1,
            rationale: "Collection Set 是每次 GC 要回收的 Region 集合。G1 根据 Region 的垃圾比例和回收价值选择 CSet。"
        },
        {
            id: "jvm-w13-1-q5",
            question: "-XX:MaxGCPauseMillis 的默认值是多少？",
            options: [
                "100ms",
                "200ms",
                "500ms",
                "1000ms"
            ],
            answer: 1,
            rationale: "-XX:MaxGCPauseMillis 默认值是 200ms。G1 会尽量在这个时间内完成 GC。"
        },
        {
            id: "jvm-w13-1-q6",
            question: "G1 的名称 'Garbage First' 是什么意思？",
            options: [
                "第一个垃圾收集器",
                "优先回收垃圾最多的 Region",
                "垃圾优先分配",
                "第一时间收集垃圾"
            ],
            answer: 1,
            rationale: "Garbage First 意味着 G1 优先回收垃圾最多（回收价值最高）的 Region。"
        },
        {
            id: "jvm-w13-1-q7",
            question: "G1 使用什么并发标记算法？",
            options: [
                "增量更新",
                "SATB（Snapshot At The Beginning）",
                "三色标记",
                "引用计数"
            ],
            answer: 1,
            rationale: "G1 使用 SATB（Snapshot At The Beginning）并发标记算法，以标记开始时的对象图快照为基准。"
        },
        {
            id: "jvm-w13-1-q8",
            question: "Region 大小的范围是多少？",
            options: [
                "512KB - 16MB",
                "1MB - 32MB",
                "2MB - 64MB",
                "4MB - 128MB"
            ],
            answer: 1,
            rationale: "G1 Region 大小范围是 1MB - 32MB，必须是 2 的幂。默认根据堆大小自动计算。"
        },
        {
            id: "jvm-w13-1-q9",
            question: "G1 的 RSet 可能占用多少堆内存？",
            options: [
                "1% 以下",
                "高达 20%",
                "50%",
                "不占用内存"
            ],
            answer: 1,
            rationale: "G1 的 RSet 在引用关系复杂的应用中可能占用大量内存，高达堆的 20%。"
        },
        {
            id: "jvm-w13-1-q10",
            question: "Humongous 对象分配在哪里？",
            options: [
                "Eden",
                "Survivor",
                "Old（专门的 Humongous Region）",
                "堆外内存"
            ],
            answer: 2,
            rationale: "Humongous 对象直接分配在老年代的专门 Humongous Region 中，不经过年轻代。"
        },
        {
            id: "jvm-w13-1-q11",
            question: "什么参数设置 Region 大小？",
            options: [
                "-XX:MaxGCPauseMillis",
                "-XX:G1HeapRegionSize",
                "-XX:NewRatio",
                "-Xmn"
            ],
            answer: 1,
            rationale: "-XX:G1HeapRegionSize 设置 Region 大小，必须是 2 的幂（1MB-32MB）。"
        },
        {
            id: "jvm-w13-1-q12",
            question: "使用什么命令查看 G1 的 Region 分布？",
            options: [
                "jmap -heap",
                "jcmd <pid> GC.heap_info",
                "jstat -gc",
                "jstack"
            ],
            answer: 1,
            rationale: "jcmd <pid> GC.heap_info 可以查看 G1 的 Region 分布、RSet 大小等详细信息。"
        }
    ],
    "jvm-w13-2": [
        {
            id: "jvm-w13-2-q1",
            question: "G1 的收集周期包括哪两个主要阶段？",
            options: [
                "Minor 和 Major",
                "Young-only 和 Space Reclamation（Mixed GC）",
                "Mark 和 Sweep",
                "Compact 和 Copy"
            ],
            answer: 1,
            rationale: "G1 的收集周期包括 Young-only 阶段（只收集 Young Region）和 Space Reclamation 阶段（Mixed GC）。"
        },
        {
            id: "jvm-w13-2-q2",
            question: "什么是 Mixed GC？",
            options: [
                "混合使用多种算法",
                "回收 Young Region + 部分价值高的 Old Region",
                "同时进行标记和清除",
                "混合并发和 STW"
            ],
            answer: 1,
            rationale: "Mixed GC 同时回收 Young Region 和部分价值高的 Old Region，逐步回收老年代。"
        },
        {
            id: "jvm-w13-2-q3",
            question: "什么是 IHOP？",
            options: [
                "一种 GC 算法",
                "触发并发标记的堆占用率阈值",
                "Region 大小",
                "暂停时间目标"
            ],
            answer: 1,
            rationale: "IHOP（Initiating Heap Occupancy Percent）是触发并发标记的堆占用率阈值，默认 45%。"
        },
        {
            id: "jvm-w13-2-q4",
            question: "并发标记周期的第一步是什么？",
            options: [
                "Concurrent Mark",
                "Initial Mark（STW，标记 GC Roots）",
                "Final Mark",
                "Cleanup"
            ],
            answer: 1,
            rationale: "并发标记周期的第一步是 Initial Mark（STW），标记从 GC Roots 直接可达的对象。通常与 Young GC 一起执行。"
        },
        {
            id: "jvm-w13-2-q5",
            question: "什么是 Evacuation Failure？",
            options: [
                "疏散失败",
                "没有足够空间复制存活对象",
                "标记失败",
                "并发失败"
            ],
            answer: 1,
            rationale: "Evacuation Failure 发生在没有足够空间复制存活对象时。对象会被原地标记，然后触发 Full GC。"
        },
        {
            id: "jvm-w13-2-q6",
            question: "-XX:G1MixedGCCountTarget 的默认值是多少？",
            options: [
                "4",
                "8",
                "12",
                "16"
            ],
            answer: 1,
            rationale: "-XX:G1MixedGCCountTarget 默认值是 8，表示目标在 8 次 Mixed GC 内完成老年代回收。"
        },
        {
            id: "jvm-w13-2-q7",
            question: "G1 Full GC 的特点是什么？",
            options: [
                "并发、高效",
                "串行、STW、整理整个堆",
                "只回收老年代",
                "增量进行"
            ],
            answer: 1,
            rationale: "G1 的 Full GC 是退化行为：串行执行、STW、整理整个堆。应尽量避免。"
        },
        {
            id: "jvm-w13-2-q8",
            question: "并发标记包括哪些步骤？",
            options: [
                "只有标记",
                "Initial Mark、Concurrent Mark、Final Mark、Cleanup",
                "标记和清除",
                "标记和复制"
            ],
            answer: 1,
            rationale: "并发标记包括：Initial Mark（STW）、Concurrent Mark（并发）、Final Mark（STW）、Cleanup（清理空 Region）。"
        },
        {
            id: "jvm-w13-2-q9",
            question: "IHOP 默认值是多少？",
            options: [
                "30%",
                "45%",
                "60%",
                "75%"
            ],
            answer: 1,
            rationale: "IHOP（InitiatingHeapOccupancyPercent）默认值是 45%。堆占用率达到此值时启动并发标记。"
        },
        {
            id: "jvm-w13-2-q10",
            question: "如何避免 G1 Full GC？",
            options: [
                "增大 MaxGCPauseMillis",
                "确保并发标记能跟上分配速度、避免 Humongous 分配、合理设置堆大小",
                "禁用并发标记",
                "只使用 Young GC"
            ],
            answer: 1,
            rationale: "避免 Full GC：确保并发标记能跟上分配速度、减少 Humongous 对象、合理设置堆大小、监控和调优。"
        },
        {
            id: "jvm-w13-2-q11",
            question: "G1 年轻代大小是固定的吗？",
            options: [
                "是，固定为堆的 1/3",
                "否，G1 动态调整年轻代大小",
                "是，由 -Xmn 决定",
                "取决于 Region 数量"
            ],
            answer: 1,
            rationale: "G1 动态调整年轻代大小以满足暂停时间目标。-XX:G1NewSizePercent 和 -XX:G1MaxNewSizePercent 设置范围。"
        },
        {
            id: "jvm-w13-2-q12",
            question: "什么工具可以分析 G1 GC 日志？",
            options: [
                "只有命令行",
                "GCEasy、GCViewer",
                "只有 jstat",
                "不能分析"
            ],
            answer: 1,
            rationale: "GCEasy（在线）和 GCViewer（本地）都可以可视化分析 G1 GC 日志，识别问题和优化机会。"
        }
    ],
    "jvm-w13-3": [
        {
            id: "jvm-w13-3-q1",
            question: "-XX:MaxGCPauseMillis 是硬性目标还是软性目标？",
            options: [
                "硬性目标，一定会达到",
                "软性目标，G1 尽量满足但不保证",
                "没有意义",
                "只影响 Full GC"
            ],
            answer: 1,
            rationale: "-XX:MaxGCPauseMillis 是软性目标，G1 会尽量在这个时间内完成 GC，但不保证一定达到。"
        },
        {
            id: "jvm-w13-3-q2",
            question: "增大 Region 大小有什么影响？",
            options: [
                "只有好处",
                "减少 RSet 开销，但增加 Humongous 阈值",
                "只有坏处",
                "没有影响"
            ],
            answer: 1,
            rationale: "增大 Region 减少 RSet 数量和开销，但也增加了 Humongous 阈值，更多对象会被当作大对象处理。"
        },
        {
            id: "jvm-w13-3-q3",
            question: "G1 调优的首要原则是什么？",
            options: [
                "尽可能多调参数",
                "避免过度调优，先设置堆大小和暂停目标，观察默认行为",
                "禁用自适应",
                "使用固定配置"
            ],
            answer: 1,
            rationale: "G1 调优首要原则：避免过度调优。先设置堆大小和暂停目标，观察默认行为，只有出现问题才调整具体参数。"
        },
        {
            id: "jvm-w13-3-q4",
            question: "-XX:ParallelGCThreads 设置什么？",
            options: [
                "并发标记线程数",
                "STW 阶段的并行 GC 线程数",
                "应用线程数",
                "Refinement 线程数"
            ],
            answer: 1,
            rationale: "-XX:ParallelGCThreads 设置 STW 阶段（如 Young GC、Final Mark）的并行 GC 线程数。"
        },
        {
            id: "jvm-w13-3-q5",
            question: "缩短暂停时间目标对吞吐量有什么影响？",
            options: [
                "吞吐量提高",
                "吞吐量下降（GC 更频繁）",
                "没有影响",
                "只影响延迟"
            ],
            answer: 1,
            rationale: "暂停时间目标越短，每次 GC 回收的内存越少，GC 频率越高，吞吐量下降。需要根据应用平衡。"
        },
        {
            id: "jvm-w13-3-q6",
            question: "-XX:ConcGCThreads 的默认值是多少？",
            options: [
                "1",
                "ParallelGCThreads 的 1/4",
                "ParallelGCThreads 的 1/2",
                "与 ParallelGCThreads 相同"
            ],
            answer: 1,
            rationale: "-XX:ConcGCThreads 默认值是 ParallelGCThreads 的 1/4，用于并发标记阶段。"
        },
        {
            id: "jvm-w13-3-q7",
            question: "G1 调优的关键监控指标有哪些？",
            options: [
                "只有暂停时间",
                "GC 暂停时间、GC 频率、吞吐量、堆使用率、Full GC 次数",
                "只有内存使用",
                "只有 CPU 使用"
            ],
            answer: 1,
            rationale: "关键监控指标：GC 暂停时间、GC 频率、吞吐量、堆使用率、Full GC 次数。这些指标反映 GC 健康状况。"
        },
        {
            id: "jvm-w13-3-q8",
            question: "如何禁用 G1 的自适应 IHOP？",
            options: [
                "-XX:+G1UseAdaptiveIHOP",
                "-XX:-G1UseAdaptiveIHOP",
                "无法禁用",
                "-XX:InitiatingHeapOccupancyPercent=0"
            ],
            answer: 1,
            rationale: "-XX:-G1UseAdaptiveIHOP 可以禁用自适应 IHOP，使用固定的 InitiatingHeapOccupancyPercent 值。"
        },
        {
            id: "jvm-w13-3-q9",
            question: "使用什么命令实时监控 GC 统计？",
            options: [
                "jmap",
                "jstat -gc <pid> 1000",
                "jstack",
                "jinfo"
            ],
            answer: 1,
            rationale: "jstat -gc <pid> 1000 可以每秒输出一次 GC 统计信息，实时监控 GC 行为。"
        },
        {
            id: "jvm-w13-3-q10",
            question: "堆大小对 G1 暂停时间有什么影响？",
            options: [
                "堆越大暂停越长",
                "G1 通过控制 CSet 来控制暂停，大堆不一定长暂停",
                "堆越大暂停越短",
                "没有影响"
            ],
            answer: 1,
            rationale: "G1 通过控制 CSet 大小来控制暂停时间，大堆不一定意味着长暂停。但堆太小会导致 GC 频繁。"
        },
        {
            id: "jvm-w13-3-q11",
            question: "延迟敏感应用应该如何设置 MaxGCPauseMillis？",
            options: [
                "尽可能大",
                "设置较短的值（如 50ms-100ms）",
                "使用默认值",
                "禁用此参数"
            ],
            answer: 1,
            rationale: "延迟敏感应用应设置较短的暂停时间目标（如 50ms-100ms），但要注意对吞吐量的影响。"
        },
        {
            id: "jvm-w13-3-q12",
            question: "GC 日志的推荐配置格式是什么？",
            options: [
                "-verbose:gc",
                "-Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=10m",
                "-XX:+PrintGC",
                "不需要配置"
            ],
            answer: 1,
            rationale: "推荐配置：-Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=10m，包含时间戳和日志轮转。"
        }
    ]
}
