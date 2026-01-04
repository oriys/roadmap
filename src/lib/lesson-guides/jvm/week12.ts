import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week12Guides: Record<string, LessonGuide> = {
    "jvm-w12-1": {
        lessonId: "jvm-w12-1",
        background: [
            "【弱分代假说】弱分代假说认为绝大多数对象都是'朝生夕死'的，即大部分对象的生命周期很短。这是新生代使用复制算法的理论基础：只需复制少量存活对象。",
            "【强分代假说】强分代假说认为熬过越多次垃圾收集的对象越难以消亡。这是对象晋升到老年代的理论基础：经过多次 GC 仍存活的对象可能会长期存活。",
            "【Minor GC】Minor GC（Young GC）只回收新生代。由于新生代对象存活率低，Minor GC 通常很快（几毫秒到几十毫秒）。Minor GC 触发条件：Eden 区满。",
            "【Major GC】Major GC 主要回收老年代。由于老年代对象多、存活率高，Major GC 通常比 Minor GC 慢很多。有时 Major GC 和 Full GC 混用，需要根据具体收集器区分。",
            "【Full GC】Full GC 回收整个堆（新生代 + 老年代）和 Metaspace。Full GC 是最慢的 GC 类型，应尽量避免。常见触发原因：老年代满、Metaspace 满、显式调用 System.gc()。"
        ],
        keyDifficulties: [
            "【对象晋升】对象在 Survivor 区每熬过一次 GC，年龄加 1。达到阈值（-XX:MaxTenuringThreshold，默认 15）时晋升到老年代。但如果 Survivor 空间不足，可能提前晋升。",
            "【动态年龄判断】如果 Survivor 区中相同年龄对象的总大小超过 Survivor 空间的一半，大于等于该年龄的对象直接晋升到老年代，不必等到 MaxTenuringThreshold。",
            "【大对象直接进入老年代】超过 -XX:PretenureSizeThreshold 的大对象直接在老年代分配，避免在 Eden 和 Survivor 之间来回复制。但 G1 有 Humongous Region 专门处理大对象。",
            "【跨代引用假说】跨代引用（老年代引用新生代）相对于同代引用来说只占极少数。因此可以用记忆集记录跨代引用，Minor GC 时只扫描记忆集而不是整个老年代。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintTenuringDistribution 查看对象年龄分布和晋升情况。",
            "调整 -XX:MaxTenuringThreshold 观察对象晋升时机的变化。",
            "使用 -XX:PretenureSizeThreshold 设置大对象阈值，观察大对象分配位置。",
            "使用 -Xlog:gc* 观察 Minor GC 和 Full GC 的触发和耗时。",
            "编写长期存活对象程序，观察对象从新生代晋升到老年代的过程。"
        ],
        selfCheck: [
            "弱分代假说和强分代假说分别是什么？",
            "Minor GC 和 Full GC 的区别是什么？",
            "对象什么时候晋升到老年代？",
            "什么是动态年龄判断？",
            "大对象为什么直接分配到老年代？",
            "什么是跨代引用假说？"
        ],
        extensions: [
            "研究 G1 的 Mixed GC 与传统 Major GC 的区别。",
            "了解 ZGC 的非分代设计（以及 Generational ZGC）。",
            "探索 Shenandoah 的分代策略演进。",
            "研究不同应用场景下的分代比例调优。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-collector-implementation.html",
            "https://www.memorymanagement.org/glossary/g.html#term-generational-hypothesis",
            "https://www.baeldung.com/java-gc-minor-major-full"
        ]
    },
    "jvm-w12-2": {
        lessonId: "jvm-w12-2",
        background: [
            "【跨代引用问题】Minor GC 只回收新生代，但老年代对象可能引用新生代对象。如果不扫描老年代，可能错误回收被老年代引用的新生代对象。但扫描整个老年代太慢。",
            "【记忆集概念】记忆集（Remembered Set，RSet）是一种用于记录从非收集区域指向收集区域的指针集合的数据结构。Minor GC 时只需扫描记忆集，而不是整个老年代。",
            "【卡表实现】卡表（Card Table）是记忆集的一种实现。将堆划分为固定大小的卡页（通常 512 字节），每个卡页对应卡表中一个字节。如果卡页中有跨代引用，标记为'脏'（Dirty）。",
            "【写屏障维护】当更新引用时，JVM 通过写屏障（Write Barrier）检查是否产生跨代引用。如果是，标记对应的卡表项为脏。这是一种牺牲写性能换取 GC 性能的权衡。",
            "【G1 的 RSet】G1 的 RSet 更复杂：每个 Region 都有自己的 RSet，记录哪些其他 Region 有指向本 Region 的引用。RSet 使用三种粒度：稀疏、细粒度、粗粒度 PRT。"
        ],
        keyDifficulties: [
            "【伪共享问题】多个线程可能同时更新不同卡页但在同一缓存行的卡表项，导致伪共享（False Sharing）。解决方案：先检查卡表项是否已脏，脏则不写（-XX:+UseCondCardMark）。",
            "【写屏障的代价】写屏障在每次引用更新时执行，有性能开销。写后屏障（Post-Write Barrier）更新卡表；写前屏障（Pre-Write Barrier，SATB）记录原始引用用于并发标记。",
            "【RSet 内存开销】G1 的 RSet 可能占用大量内存（高达堆的 10%-20%），特别是引用关系复杂的应用。可以通过 -XX:G1HeapRegionSize 调整 Region 大小来优化。",
            "【脏卡队列】并发标记时，写屏障将脏卡放入队列而不是立即处理。Refinement 线程后台处理脏卡队列，更新 RSet。如果队列满，应用线程会被迫参与处理。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintGCDetails 观察 Minor GC 时扫描卡表的时间。",
            "使用 jcmd <pid> GC.heap_info 查看 G1 的 RSet 大小。",
            "调整 -XX:G1HeapRegionSize 观察对 RSet 大小的影响。",
            "使用 -XX:+UseCondCardMark 减少卡表伪共享问题。",
            "编写大量跨代引用的代码，观察记忆集的开销。"
        ],
        selfCheck: [
            "为什么 Minor GC 需要扫描老年代？",
            "什么是记忆集？它解决什么问题？",
            "卡表是如何实现记忆集的？",
            "写屏障在记忆集维护中的作用是什么？",
            "G1 的 RSet 与传统卡表有什么区别？",
            "什么是伪共享？如何解决？"
        ],
        extensions: [
            "研究 ZGC 的 Load Barrier 如何替代传统写屏障。",
            "了解 Shenandoah 的 Brooks Pointer 与记忆集的关系。",
            "探索不同 GC 的写屏障实现差异。",
            "研究 G1 RSet 的三种粒度（Sparse、Fine、Coarse）。"
        ],
        sourceUrls: [
            "https://www.oracle.com/technetwork/java/javase/tech/g1-intro-jsp-135488.html",
            "https://wiki.openjdk.org/display/HotSpot/G1GC+Remembered+Sets",
            "https://shipilev.net/jvm/anatomy-quarks/13-intergenerational-barriers/"
        ]
    },
    "jvm-w12-3": {
        lessonId: "jvm-w12-3",
        background: [
            "【SafePoint 概念】SafePoint（安全点）是程序执行过程中的特定位置，在这些位置 JVM 可以安全地进行某些操作（如 GC、偏向锁撤销）。在 SafePoint，所有线程的执行状态是确定的。",
            "【SafePoint 位置】SafePoint 通常设置在：方法调用、循环回边（Back Edge）、异常跳转等位置。这些位置是程序逻辑边界，便于暂停和恢复。不是每条指令都是 SafePoint。",
            "【Stop-The-World】当需要进行 GC 时，JVM 请求所有线程进入 SafePoint（STW）。只有当所有线程都到达 SafePoint 后，GC 才能开始。这个过程叫做'Stop-The-World'暂停。",
            "【SafePoint 轮询】JVM 在 SafePoint 位置插入检查代码（SafePoint Poll）。当需要 STW 时，设置标志位，线程在下一个 SafePoint 检查到标志后主动暂停。",
            "【TTSP】TTSP（Time To SafePoint）是从发起 STW 请求到所有线程都到达 SafePoint 的时间。如果某个线程在执行长循环或本地方法，TTSP 可能很长，影响 GC 延迟。"
        ],
        keyDifficulties: [
            "【可数循环问题】JIT 编译可能不在可数循环（循环次数可确定的循环）中放置 SafePoint，导致长循环延迟 GC。使用 -XX:+UseCountedLoopSafepoints 可以强制在可数循环中放置 SafePoint。",
            "【本地方法问题】执行 JNI 调用时，线程不在 JVM 控制下，无法响应 SafePoint 请求。只有 JNI 调用返回时才能检查。长时间的本地调用会延迟 STW。",
            "【SafePoint 偏差】如果大部分 SafePoint 时间花在等待个别线程，这个线程造成了 SafePoint 偏差。可用 -XX:+SafepointTimeout 和 -XX:SafepointTimeoutDelay 检测。",
            "【Thread Local Handshake】Java 10 引入线程局部握手（JEP 312），允许在单个线程上执行回调而不需要全局 SafePoint。减少了某些操作的 STW 开销。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintSafepointStatistics 查看 SafePoint 统计信息。",
            "编写长循环代码，观察 TTSP 时间。",
            "使用 -XX:+UseCountedLoopSafepoints 对比可数循环的 SafePoint 行为。",
            "使用 async-profiler 的 -e itimer 分析 SafePoint 问题。",
            "使用 JFR 的 safepoint 事件分析 SafePoint 延迟。"
        ],
        selfCheck: [
            "什么是 SafePoint？为什么需要 SafePoint？",
            "SafePoint 通常设置在哪些位置？",
            "什么是 TTSP？它为什么重要？",
            "可数循环为什么可能导致 SafePoint 问题？",
            "本地方法如何影响 SafePoint？",
            "什么是 Thread Local Handshake？"
        ],
        extensions: [
            "研究 JEP 312: Thread-Local Handshakes 的实现细节。",
            "了解 ZGC 如何通过 Load Barrier 减少 SafePoint 依赖。",
            "探索 Shenandoah 的并发处理如何最小化 STW。",
            "研究 Project Loom 虚拟线程与 SafePoint 的关系。"
        ],
        sourceUrls: [
            "https://shipilev.net/jvm/anatomy-quarks/22-safepoint-polls/",
            "https://blog.ragozin.info/2012/10/safepoints-in-hotspot-jvm.html",
            "https://www.baeldung.com/java-gc-time-to-safepoint"
        ]
    }
}

export const week12Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w12-1": [
        {
            id: "jvm-w12-1-q1",
            question: "弱分代假说的核心观点是什么？",
            options: [
                "对象都是长期存活的",
                "绝大多数对象都是'朝生夕死'的",
                "对象存活时间均匀分布",
                "老对象更容易死亡"
            ],
            answer: 1,
            rationale: "弱分代假说认为绝大多数对象都是'朝生夕死'的，即大部分对象的生命周期很短。"
        },
        {
            id: "jvm-w12-1-q2",
            question: "Minor GC 回收哪个区域？",
            options: [
                "老年代",
                "新生代",
                "整个堆",
                "Metaspace"
            ],
            answer: 1,
            rationale: "Minor GC（Young GC）只回收新生代。由于新生代对象存活率低，通常很快。"
        },
        {
            id: "jvm-w12-1-q3",
            question: "Full GC 的触发原因包括什么？",
            options: [
                "只有 Eden 满",
                "老年代满、Metaspace 满、System.gc()",
                "只有 Minor GC 后",
                "任何时候"
            ],
            answer: 1,
            rationale: "Full GC 常见触发原因：老年代满、Metaspace 满、显式调用 System.gc()、分配担保失败等。"
        },
        {
            id: "jvm-w12-1-q4",
            question: "-XX:MaxTenuringThreshold 的默认值是多少？",
            options: [
                "5",
                "10",
                "15",
                "20"
            ],
            answer: 2,
            rationale: "MaxTenuringThreshold 默认值是 15。对象在 Survivor 区熬过 15 次 GC 后晋升到老年代。"
        },
        {
            id: "jvm-w12-1-q5",
            question: "什么是动态年龄判断？",
            options: [
                "根据对象大小决定年龄",
                "相同年龄对象总大小超过 Survivor 一半时，大于等于该年龄的对象直接晋升",
                "年龄自动增加",
                "年龄固定为 15"
            ],
            answer: 1,
            rationale: "动态年龄判断：如果 Survivor 区相同年龄对象总大小超过 Survivor 的一半，该年龄及以上对象直接晋升。"
        },
        {
            id: "jvm-w12-1-q6",
            question: "大对象为什么直接分配到老年代？",
            options: [
                "老年代更快",
                "避免在 Eden 和 Survivor 之间来回复制",
                "新生代不支持大对象",
                "随机决定的"
            ],
            answer: 1,
            rationale: "大对象直接在老年代分配是为了避免在 Eden 和 Survivor 之间来回复制，减少开销。"
        },
        {
            id: "jvm-w12-1-q7",
            question: "强分代假说的核心观点是什么？",
            options: [
                "所有对象都很短命",
                "熬过越多次 GC 的对象越难以消亡",
                "对象年龄越大越容易回收",
                "不存在长期存活的对象"
            ],
            answer: 1,
            rationale: "强分代假说认为熬过越多次垃圾收集的对象越难以消亡，这是对象晋升到老年代的理论基础。"
        },
        {
            id: "jvm-w12-1-q8",
            question: "什么参数设置大对象阈值？",
            options: [
                "-XX:MaxTenuringThreshold",
                "-XX:PretenureSizeThreshold",
                "-XX:SurvivorRatio",
                "-XX:NewRatio"
            ],
            answer: 1,
            rationale: "-XX:PretenureSizeThreshold 设置大对象阈值，超过这个大小的对象直接在老年代分配。"
        },
        {
            id: "jvm-w12-1-q9",
            question: "什么是跨代引用假说？",
            options: [
                "所有引用都是跨代的",
                "跨代引用相对于同代引用只占极少数",
                "跨代引用不存在",
                "跨代引用更重要"
            ],
            answer: 1,
            rationale: "跨代引用假说认为跨代引用相对于同代引用来说只占极少数，因此可以用记忆集高效记录。"
        },
        {
            id: "jvm-w12-1-q10",
            question: "使用什么参数查看对象年龄分布？",
            options: [
                "-XX:+PrintGC",
                "-XX:+PrintTenuringDistribution",
                "-XX:+PrintHeapAtGC",
                "-XX:+PrintGCDetails"
            ],
            answer: 1,
            rationale: "-XX:+PrintTenuringDistribution 可以打印每次 GC 后 Survivor 区中各年龄对象的大小分布。"
        },
        {
            id: "jvm-w12-1-q11",
            question: "Major GC 和 Minor GC 哪个更快？",
            options: [
                "Major GC 更快",
                "Minor GC 更快",
                "速度相同",
                "取决于对象数量"
            ],
            answer: 1,
            rationale: "Minor GC 只回收新生代，对象存活率低，通常很快。Major GC 回收老年代，对象多且存活率高，通常慢很多。"
        },
        {
            id: "jvm-w12-1-q12",
            question: "Minor GC 的触发条件是什么？",
            options: [
                "老年代满",
                "Eden 区满",
                "Survivor 满",
                "定时触发"
            ],
            answer: 1,
            rationale: "Minor GC 的典型触发条件是 Eden 区满，无法分配新对象时触发。"
        }
    ],
    "jvm-w12-2": [
        {
            id: "jvm-w12-2-q1",
            question: "为什么 Minor GC 需要考虑老年代？",
            options: [
                "老年代也需要回收",
                "老年代对象可能引用新生代对象",
                "新生代依赖老年代",
                "不需要考虑"
            ],
            answer: 1,
            rationale: "老年代对象可能引用新生代对象。如果不考虑，可能错误回收被老年代引用的新生代对象。"
        },
        {
            id: "jvm-w12-2-q2",
            question: "什么是记忆集（Remembered Set）？",
            options: [
                "记录所有对象",
                "记录从非收集区域指向收集区域的指针集合",
                "GC 日志",
                "对象年龄表"
            ],
            answer: 1,
            rationale: "记忆集是记录从非收集区域（如老年代）指向收集区域（如新生代）的指针集合，避免全堆扫描。"
        },
        {
            id: "jvm-w12-2-q3",
            question: "卡表是什么？",
            options: [
                "一种新的数据结构",
                "记忆集的一种实现，用字节标记卡页是否有跨代引用",
                "GC 算法",
                "堆内存划分"
            ],
            answer: 1,
            rationale: "卡表是记忆集的一种实现。将堆划分为卡页，每个卡页对应卡表中一个字节，标记是否有跨代引用。"
        },
        {
            id: "jvm-w12-2-q4",
            question: "写屏障在记忆集中的作用是什么？",
            options: [
                "防止写入",
                "在引用更新时检查并更新记忆集",
                "加速写入",
                "压缩数据"
            ],
            answer: 1,
            rationale: "写屏障在每次引用更新时检查是否产生跨代引用，如果是则更新记忆集（如标记卡表为脏）。"
        },
        {
            id: "jvm-w12-2-q5",
            question: "卡页的典型大小是多少？",
            options: [
                "64 字节",
                "512 字节",
                "4KB",
                "1MB"
            ],
            answer: 1,
            rationale: "卡表通常将堆划分为 512 字节的卡页。这是空间和精度的平衡。"
        },
        {
            id: "jvm-w12-2-q6",
            question: "什么是卡表的伪共享问题？",
            options: [
                "多个线程共享卡表",
                "多个线程更新同一缓存行的不同卡表项导致性能下降",
                "卡表太大",
                "卡表不共享"
            ],
            answer: 1,
            rationale: "伪共享：多个线程更新同一缓存行的不同卡表项，导致缓存行频繁失效，性能下降。"
        },
        {
            id: "jvm-w12-2-q7",
            question: "-XX:+UseCondCardMark 的作用是什么？",
            options: [
                "禁用卡表",
                "先检查卡表项是否已脏，已脏则不写，减少伪共享",
                "增大卡页大小",
                "启用新的卡表实现"
            ],
            answer: 1,
            rationale: "UseCondCardMark 在写入前先检查卡表项是否已脏，已脏则跳过写入，减少伪共享导致的缓存失效。"
        },
        {
            id: "jvm-w12-2-q8",
            question: "G1 的 RSet 与传统卡表有什么区别？",
            options: [
                "完全相同",
                "每个 Region 都有自己的 RSet，记录其他 Region 的引用",
                "G1 不使用 RSet",
                "RSet 更简单"
            ],
            answer: 1,
            rationale: "G1 每个 Region 都有独立的 RSet，记录哪些其他 Region 有指向本 Region 的引用，比传统卡表更精细。"
        },
        {
            id: "jvm-w12-2-q9",
            question: "G1 RSet 可能占用多少堆内存？",
            options: [
                "1% 以下",
                "高达 10%-20%",
                "50%",
                "不占用内存"
            ],
            answer: 1,
            rationale: "G1 的 RSet 可能占用大量内存（高达堆的 10%-20%），特别是引用关系复杂的应用。"
        },
        {
            id: "jvm-w12-2-q10",
            question: "什么是脏卡队列？",
            options: [
                "等待清理的卡表",
                "并发标记时存放脏卡的队列，由 Refinement 线程处理",
                "GC 日志队列",
                "对象分配队列"
            ],
            answer: 1,
            rationale: "并发标记时，写屏障将脏卡放入队列。Refinement 线程后台处理队列，更新 RSet。"
        },
        {
            id: "jvm-w12-2-q11",
            question: "写后屏障和写前屏障的区别是什么？",
            options: [
                "没有区别",
                "写后屏障更新卡表，写前屏障记录原始引用（SATB）",
                "写前屏障更快",
                "写后屏障不更新卡表"
            ],
            answer: 1,
            rationale: "写后屏障（Post-Write Barrier）在引用更新后更新卡表；写前屏障（Pre-Write Barrier）在更新前记录原始引用用于 SATB。"
        },
        {
            id: "jvm-w12-2-q12",
            question: "如果脏卡队列满了会发生什么？",
            options: [
                "丢弃脏卡",
                "应用线程被迫参与处理脏卡队列",
                "GC 失败",
                "自动扩容"
            ],
            answer: 1,
            rationale: "如果脏卡队列满，应用线程会被迫停下来参与处理队列，这会影响应用性能。"
        }
    ],
    "jvm-w12-3": [
        {
            id: "jvm-w12-3-q1",
            question: "什么是 SafePoint？",
            options: [
                "安全的内存位置",
                "程序执行中 JVM 可以安全进行 GC 等操作的特定位置",
                "安全的代码",
                "没有 bug 的代码"
            ],
            answer: 1,
            rationale: "SafePoint 是程序执行中的特定位置，在这些位置 JVM 可以安全地进行 GC、偏向锁撤销等操作。"
        },
        {
            id: "jvm-w12-3-q2",
            question: "SafePoint 通常设置在哪些位置？",
            options: [
                "每条指令",
                "方法调用、循环回边、异常跳转",
                "只在方法开始",
                "只在方法结束"
            ],
            answer: 1,
            rationale: "SafePoint 通常设置在方法调用、循环回边（Back Edge）、异常跳转等位置。这些是程序逻辑边界。"
        },
        {
            id: "jvm-w12-3-q3",
            question: "什么是 TTSP？",
            options: [
                "Total Thread Safe Point",
                "从发起 STW 请求到所有线程都到达 SafePoint 的时间",
                "线程暂停时间",
                "GC 总时间"
            ],
            answer: 1,
            rationale: "TTSP（Time To SafePoint）是从发起 STW 请求到所有线程都到达 SafePoint 的时间。"
        },
        {
            id: "jvm-w12-3-q4",
            question: "可数循环为什么可能导致 SafePoint 问题？",
            options: [
                "可数循环太慢",
                "JIT 可能不在可数循环中放置 SafePoint，导致长循环延迟 GC",
                "可数循环不支持 GC",
                "可数循环占用太多内存"
            ],
            answer: 1,
            rationale: "JIT 编译器可能不在可数循环（循环次数确定的循环）中放置 SafePoint 以优化性能，导致长循环延迟 GC。"
        },
        {
            id: "jvm-w12-3-q5",
            question: "什么参数强制在可数循环中放置 SafePoint？",
            options: [
                "-XX:+PrintSafepointStatistics",
                "-XX:+UseCountedLoopSafepoints",
                "-XX:+SafepointTimeout",
                "-XX:+PrintGC"
            ],
            answer: 1,
            rationale: "-XX:+UseCountedLoopSafepoints 强制在可数循环中也放置 SafePoint，避免长循环延迟 GC。"
        },
        {
            id: "jvm-w12-3-q6",
            question: "本地方法如何影响 SafePoint？",
            options: [
                "不影响",
                "执行 JNI 时线程不在 JVM 控制下，无法响应 SafePoint 请求",
                "本地方法更快到达 SafePoint",
                "本地方法不需要 SafePoint"
            ],
            answer: 1,
            rationale: "执行 JNI 调用时，线程不在 JVM 控制下，无法响应 SafePoint 请求。只有 JNI 返回时才能检查。"
        },
        {
            id: "jvm-w12-3-q7",
            question: "什么是 SafePoint 轮询（Poll）？",
            options: [
                "投票决定 SafePoint",
                "线程在 SafePoint 位置检查是否需要暂停的机制",
                "GC 轮询",
                "内存轮询"
            ],
            answer: 1,
            rationale: "JVM 在 SafePoint 位置插入检查代码。当需要 STW 时设置标志位，线程在下一个 SafePoint 检查到标志后主动暂停。"
        },
        {
            id: "jvm-w12-3-q8",
            question: "什么是 Thread Local Handshake？",
            options: [
                "线程握手协议",
                "允许在单个线程上执行回调而不需要全局 SafePoint",
                "线程本地存储",
                "线程同步机制"
            ],
            answer: 1,
            rationale: "Thread Local Handshake（Java 10，JEP 312）允许在单个线程上执行回调而不需要全局 STW，减少开销。"
        },
        {
            id: "jvm-w12-3-q9",
            question: "使用什么参数查看 SafePoint 统计？",
            options: [
                "-XX:+PrintGC",
                "-XX:+PrintSafepointStatistics",
                "-XX:+PrintCompilation",
                "-XX:+PrintHeapAtGC"
            ],
            answer: 1,
            rationale: "-XX:+PrintSafepointStatistics 可以打印 SafePoint 的统计信息，包括 TTSP、暂停时间等。"
        },
        {
            id: "jvm-w12-3-q10",
            question: "Stop-The-World 是什么？",
            options: [
                "停止世界运行",
                "所有应用线程暂停等待 GC 完成",
                "停止 GC",
                "停止一个线程"
            ],
            answer: 1,
            rationale: "Stop-The-World（STW）是 GC 时所有应用线程暂停的状态。只有所有线程都到达 SafePoint 后 GC 才能开始。"
        },
        {
            id: "jvm-w12-3-q11",
            question: "什么是 SafePoint 偏差？",
            options: [
                "SafePoint 位置不正确",
                "大部分 SafePoint 时间花在等待个别线程",
                "SafePoint 太多",
                "SafePoint 太少"
            ],
            answer: 1,
            rationale: "SafePoint 偏差：大部分 STW 时间花在等待个别慢线程到达 SafePoint。可用 SafepointTimeout 检测。"
        },
        {
            id: "jvm-w12-3-q12",
            question: "ZGC 如何减少 SafePoint 依赖？",
            options: [
                "不使用 SafePoint",
                "使用 Load Barrier 实现并发处理，减少 STW",
                "增加 SafePoint 数量",
                "只在方法调用时使用 SafePoint"
            ],
            answer: 1,
            rationale: "ZGC 使用 Load Barrier（加载屏障）在对象访问时处理并发问题，大部分工作并发完成，减少 STW 时间。"
        }
    ]
}
