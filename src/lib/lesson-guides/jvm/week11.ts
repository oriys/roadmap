import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "jvm-w11-1": {
        lessonId: "jvm-w11-1",
        background: [
            "【可达性分析概念】可达性分析（Reachability Analysis）是 JVM 判断对象是否存活的核心算法。从 GC Roots 开始，沿着引用链遍历，能到达的对象是存活的，不能到达的对象是可回收的。",
            "【GC Roots】GC Roots 是可达性分析的起点，包括：虚拟机栈中的引用（局部变量）、静态变量、常量池引用、JNI 引用、锁持有的对象、类加载器、Thread 对象等。",
            "【引用链】从 GC Roots 出发，沿着对象的引用关系遍历，形成引用链（Reference Chain）。如果一个对象到任何 GC Root 都没有引用链相连，则该对象不可达。",
            "【三色标记】现代 GC 使用三色标记算法：白色表示未访问，灰色表示已访问但子节点未全部访问，黑色表示已访问且子节点全部访问完毕。标记结束后，白色对象可回收。",
            "【finalize 方法】对象被判定为不可达后，如果重写了 finalize 方法且未被调用过，会被放入 F-Queue 等待执行 finalize。finalize 中可以让对象重新被引用从而复活，但不推荐使用。"
        ],
        keyDifficulties: [
            "【并发标记的挑战】在并发标记过程中，应用线程可能修改引用关系。如果黑色对象新增了对白色对象的引用，且灰色对象删除了对该白色对象的引用，会导致白色对象被错误回收（对象消失问题）。",
            "【写屏障与 SATB】解决并发标记问题的两种方案：增量更新（Incremental Update，CMS 使用）记录新增引用；原始快照（SATB，G1 使用）记录删除前的引用。两者都通过写屏障实现。",
            "【OopMap】JVM 使用 OopMap 记录栈帧中哪些位置存放引用。OopMap 在编译时生成，GC 时直接查找而不需要扫描整个栈，大幅加速 GC Roots 枚举。",
            "【记忆集与跨代引用】如果老年代对象引用新生代对象，Minor GC 时需要扫描老年代。记忆集（Remembered Set）记录这些跨代引用，避免全堆扫描。"
        ],
        handsOnPath: [
            "使用 Eclipse MAT 查看对象的 GC Roots 路径，理解为什么对象无法被回收。",
            "编写代码让对象在 finalize 中复活，观察 GC 行为（不推荐在生产中使用）。",
            "使用 -XX:+PrintGCDetails 观察 GC 日志中的存活对象统计。",
            "使用 jmap -histo 查看堆中各类对象的数量和占用内存。",
            "分析内存泄漏案例，追踪对象的引用链。"
        ],
        selfCheck: [
            "什么是可达性分析？GC Roots 包括哪些？",
            "什么是三色标记算法？各颜色代表什么？",
            "并发标记时的对象消失问题是什么？如何解决？",
            "什么是 OopMap？它如何加速 GC？",
            "finalize 方法在 GC 中的作用是什么？为什么不推荐使用？",
            "什么是记忆集？它解决什么问题？"
        ],
        extensions: [
            "研究 G1 的 SATB 写屏障实现细节。",
            "了解 ZGC 的 Colored Pointers 如何简化并发标记。",
            "探索 Shenandoah 的 Brooks Pointer 机制。",
            "研究 Cleaner 和 PhantomReference 替代 finalize 的方案。"
        ],
        sourceUrls: [
            "https://www.baeldung.com/java-gc-roots",
            "https://help.eclipse.org/latest/index.jsp?topic=/org.eclipse.mat.ui.help/concepts/gcroots.html",
            "https://shipilev.net/jvm/anatomy-quarks/12-native-memory-tracking/"
        ]
    },
    "jvm-w11-2": {
        lessonId: "jvm-w11-2",
        background: [
            "【标记-清除算法】标记-清除（Mark-Sweep）是最基本的 GC 算法：首先标记所有存活对象，然后清除未标记对象。优点是简单；缺点是产生内存碎片，分配效率低。",
            "【复制算法】复制算法（Copying）将内存分为两块，只使用其中一块。GC 时将存活对象复制到另一块，然后清空当前块。优点是没有碎片，分配快；缺点是空间利用率只有 50%。",
            "【标记-整理算法】标记-整理（Mark-Compact）标记存活对象后，将它们移动到内存一端，然后清除边界外的内存。优点是没有碎片；缺点是移动对象有开销，STW 时间较长。",
            "【分代收集】分代收集（Generational Collection）根据对象存活时间将堆分为新生代和老年代。新生代用复制算法（存活率低），老年代用标记-清除或标记-整理（存活率高）。",
            "【增量收集】增量收集（Incremental Collection）将 GC 工作分成多个小步骤，与应用线程交替执行，减少单次暂停时间。但总体吞吐量可能下降。"
        ],
        keyDifficulties: [
            "【空间换时间】复制算法用空间换时间，适合存活率低的场景。HotSpot 新生代用 8:1:1 的 Eden:Survivor 比例，只浪费 10% 空间。这是基于 90% 以上对象朝生夕死的假设。",
            "【移动 vs 不移动】不移动对象（标记-清除）分配慢但 GC 快；移动对象（复制、标记-整理）分配快但 GC 慢。根据应用特点选择。",
            "【并发 vs 并行】并行 GC（Parallel）多个 GC 线程同时工作，但应用暂停。并发 GC（Concurrent）GC 与应用同时运行，暂停时间短但吞吐量可能下降。",
            "【分配担保】Minor GC 前需要检查老年代是否有足够空间容纳所有新生代对象（最坏情况）。如果不够，可能直接触发 Full GC 或尝试冒险（Handle Promotion Failure）。"
        ],
        handsOnPath: [
            "编写分配大量短命对象的程序，观察新生代 GC 频率和效率。",
            "编写分配长期存活对象的程序，观察老年代 GC 行为。",
            "使用 -XX:+UseSerialGC 对比串行 GC 的性能特点。",
            "使用 -XX:+UseParallelGC 对比并行 GC 的吞吐量。",
            "使用 jstat -gcutil 实时监控各代空间使用和 GC 统计。"
        ],
        selfCheck: [
            "标记-清除算法的优缺点是什么？",
            "复制算法为什么适合新生代？",
            "标记-整理算法的主要开销是什么？",
            "为什么需要分代收集？基于什么假设？",
            "新生代 Eden:Survivor 8:1:1 的比例是怎么来的？",
            "什么是分配担保？"
        ],
        extensions: [
            "研究 Cheney 算法（两指针复制算法）的实现细节。",
            "了解 Lisp 2 算法如何实现标记-整理。",
            "探索 G1 的 Region 设计如何突破传统分代边界。",
            "研究无分代 GC（如 ZGC）的设计权衡。"
        ],
        sourceUrls: [
            "https://www.baeldung.com/jvm-garbage-collectors#gc-implementations",
            "https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html",
            "https://en.wikipedia.org/wiki/Cheney%27s_algorithm"
        ]
    },
    "jvm-w11-3": {
        lessonId: "jvm-w11-3",
        background: [
            "【强引用】强引用（Strong Reference）是最常见的引用类型：Object obj = new Object()。只要强引用存在，对象就不会被回收。这是默认的引用类型。",
            "【软引用】软引用（SoftReference）用于缓存场景。只有在内存不足时才会回收软引用对象。JVM 会尽量保留软引用对象直到内存紧张。SoftReference<Object> soft = new SoftReference<>(obj)。",
            "【弱引用】弱引用（WeakReference）比软引用更弱。只要发生 GC，无论内存是否充足，弱引用对象都会被回收。WeakHashMap 使用弱引用作为 key，适合临时缓存。",
            "【虚引用】虚引用（PhantomReference）是最弱的引用，无法通过虚引用获取对象。虚引用唯一的用途是在对象被回收时收到通知，用于资源清理。必须配合 ReferenceQueue 使用。",
            "【引用队列】ReferenceQueue 用于跟踪引用对象被回收的时机。当软引用、弱引用、虚引用指向的对象被回收时，引用对象本身会被加入关联的 ReferenceQueue。"
        ],
        keyDifficulties: [
            "【软引用回收时机】软引用回收时机与 -XX:SoftRefLRUPolicyMSPerMB 相关。这个参数表示每 MB 空闲内存允许软引用存活的毫秒数。内存越紧张，软引用越早被回收。",
            "【弱引用的应用】WeakHashMap 在 key 不再被强引用时自动移除 entry。ThreadLocal 使用 WeakReference 避免内存泄漏（但 value 仍需手动 remove）。",
            "【Cleaner 机制】Java 9 引入 Cleaner 替代 finalize，基于 PhantomReference 实现。Cleaner 注册清理动作，在对象变为虚可达时执行，更可靠且不影响 GC。",
            "【引用类型与 GC】不同引用类型影响可达性判断：强可达 > 软可达 > 弱可达 > 虚可达 > 不可达。对象可能同时有多种引用，取最强的可达性。"
        ],
        handsOnPath: [
            "编写软引用缓存示例，观察内存不足时的回收行为。",
            "使用 WeakHashMap，验证 key 被回收后 entry 自动移除。",
            "编写 PhantomReference + ReferenceQueue 示例，观察回收通知。",
            "使用 Cleaner 实现资源清理，对比 finalize 的行为。",
            "使用 -XX:SoftRefLRUPolicyMSPerMB 调整软引用回收策略。"
        ],
        selfCheck: [
            "四种引用类型的强弱顺序是什么？",
            "软引用适用于什么场景？什么时候被回收？",
            "弱引用和软引用的区别是什么？",
            "虚引用的用途是什么？如何使用？",
            "WeakHashMap 的工作原理是什么？",
            "Cleaner 相比 finalize 有什么优势？"
        ],
        extensions: [
            "研究 Guava Cache 如何使用软引用和弱引用。",
            "了解 Java NIO DirectByteBuffer 如何使用 Cleaner 释放本地内存。",
            "探索 Android 中 WeakReference 在避免内存泄漏中的应用。",
            "研究 Caffeine 缓存的引用策略选择。"
        ],
        sourceUrls: [
            "https://www.baeldung.com/java-weak-reference",
            "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/SoftReference.html",
            "https://www.baeldung.com/java-phantom-reference"
        ]
    }
}

export const week11Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w11-1": [
        {
            id: "jvm-w11-1-q1",
            question: "什么是可达性分析？",
            options: [
                "检查对象是否有引用",
                "从 GC Roots 出发遍历引用链，判断对象是否存活",
                "计算对象的引用次数",
                "检查对象是否在堆中"
            ],
            answer: 1,
            rationale: "可达性分析从 GC Roots 出发，沿着引用链遍历。能到达的对象是存活的，不能到达的对象可回收。"
        },
        {
            id: "jvm-w11-1-q2",
            question: "以下哪个不是 GC Roots？",
            options: [
                "虚拟机栈中的引用",
                "静态变量",
                "堆中普通对象的实例变量",
                "JNI 引用"
            ],
            answer: 2,
            rationale: "GC Roots 包括：栈帧引用、静态变量、JNI 引用、锁持有对象等。堆中普通对象不是 GC Root。"
        },
        {
            id: "jvm-w11-1-q3",
            question: "三色标记中，黑色表示什么？",
            options: [
                "未访问",
                "可回收",
                "已访问且子节点全部访问完毕",
                "已访问但子节点未全部访问"
            ],
            answer: 2,
            rationale: "三色标记：白色（未访问）、灰色（已访问但子节点未全部访问）、黑色（已访问且子节点全部访问完毕）。"
        },
        {
            id: "jvm-w11-1-q4",
            question: "并发标记时的对象消失问题是什么？",
            options: [
                "对象被删除",
                "黑色对象引用白色对象，灰色对象删除对白色对象的引用，导致白色对象被错误回收",
                "GC 线程丢失对象",
                "对象移动导致引用失效"
            ],
            answer: 1,
            rationale: "对象消失问题：黑色对象新增对白色对象的引用，同时灰色对象删除对该白色对象的引用，导致白色对象无法被标记。"
        },
        {
            id: "jvm-w11-1-q5",
            question: "G1 使用什么机制解决并发标记问题？",
            options: [
                "增量更新",
                "写屏障 + SATB（原始快照）",
                "重新标记",
                "STW"
            ],
            answer: 1,
            rationale: "G1 使用 SATB（Snapshot At The Beginning）原始快照，通过写屏障记录删除前的引用。CMS 使用增量更新。"
        },
        {
            id: "jvm-w11-1-q6",
            question: "什么是 OopMap？",
            options: [
                "对象到对象的映射",
                "记录栈帧中哪些位置存放引用的数据结构",
                "内存映射表",
                "GC 日志"
            ],
            answer: 1,
            rationale: "OopMap 记录栈帧中哪些位置存放引用。GC 时直接查找 OopMap 而不需要扫描整个栈，加速 GC Roots 枚举。"
        },
        {
            id: "jvm-w11-1-q7",
            question: "finalize 方法的问题是什么？",
            options: [
                "执行太快",
                "执行时间不确定、可能让对象复活、影响 GC 效率",
                "不能被重写",
                "只能执行一次"
            ],
            answer: 1,
            rationale: "finalize 问题：执行时间不确定、可能让对象复活导致 GC 复杂、影响效率。不推荐使用，用 Cleaner 替代。"
        },
        {
            id: "jvm-w11-1-q8",
            question: "什么是记忆集（Remembered Set）？",
            options: [
                "记录所有对象",
                "记录跨代引用，避免全堆扫描",
                "记录 GC 日志",
                "记录对象大小"
            ],
            answer: 1,
            rationale: "记忆集记录跨代引用（如老年代引用新生代）。Minor GC 时只需扫描记忆集而不是整个老年代。"
        },
        {
            id: "jvm-w11-1-q9",
            question: "使用什么工具查看对象的 GC Roots 路径？",
            options: [
                "jstack",
                "Eclipse MAT",
                "jstat",
                "jcmd"
            ],
            answer: 1,
            rationale: "Eclipse MAT 可以分析堆转储，查看对象的 GC Roots 路径，帮助诊断内存泄漏。"
        },
        {
            id: "jvm-w11-1-q10",
            question: "如果对象只有虚引用，它是否可达？",
            options: [
                "强可达",
                "软可达",
                "虚可达，等同于不可达",
                "弱可达"
            ],
            answer: 2,
            rationale: "虚引用是最弱的引用，虚可达的对象实际上等同于不可达，随时可能被回收。"
        },
        {
            id: "jvm-w11-1-q11",
            question: "写屏障的作用是什么？",
            options: [
                "防止写入",
                "在引用更新时执行额外操作（如维护卡表、记录引用变化）",
                "限制写入速度",
                "加密写入数据"
            ],
            answer: 1,
            rationale: "写屏障在引用更新时执行额外操作：维护卡表记录跨代引用、实现 SATB/增量更新解决并发标记问题。"
        },
        {
            id: "jvm-w11-1-q12",
            question: "CMS 和 G1 解决并发标记问题的方式有什么区别？",
            options: [
                "完全相同",
                "CMS 用增量更新，G1 用 SATB",
                "CMS 用 SATB，G1 用增量更新",
                "都不使用写屏障"
            ],
            answer: 1,
            rationale: "CMS 使用增量更新（记录新增引用），G1 使用 SATB（记录删除前的引用）。SATB 需要更多内存但重新标记更快。"
        }
    ],
    "jvm-w11-2": [
        {
            id: "jvm-w11-2-q1",
            question: "标记-清除算法的主要缺点是什么？",
            options: [
                "效率太高",
                "产生内存碎片",
                "空间浪费 50%",
                "需要移动对象"
            ],
            answer: 1,
            rationale: "标记-清除算法清除后会产生内存碎片，导致大对象分配困难，分配效率降低。"
        },
        {
            id: "jvm-w11-2-q2",
            question: "复制算法为什么适合新生代？",
            options: [
                "实现简单",
                "新生代对象存活率低，复制少量存活对象效率高",
                "新生代空间大",
                "复制算法最快"
            ],
            answer: 1,
            rationale: "新生代 90% 以上对象朝生夕死，存活率很低。复制算法只需复制少量存活对象，效率很高。"
        },
        {
            id: "jvm-w11-2-q3",
            question: "新生代 Eden:Survivor 比例为什么是 8:1:1？",
            options: [
                "随意设定的",
                "基于 90% 以上对象朝生夕死的假设，只浪费 10% 空间",
                "历史原因",
                "8 是吉利数字"
            ],
            answer: 1,
            rationale: "90% 以上新生代对象第一次 GC 就死亡，只需要一个 10% 的 Survivor 保存存活对象，总浪费只有 10%。"
        },
        {
            id: "jvm-w11-2-q4",
            question: "标记-整理算法与标记-清除的区别是什么？",
            options: [
                "没有区别",
                "标记-整理会移动存活对象到一端，消除碎片",
                "标记-整理更快",
                "标记-整理不需要标记"
            ],
            answer: 1,
            rationale: "标记-整理在标记后移动存活对象到内存一端，然后清除边界外内存。消除了碎片但移动对象有开销。"
        },
        {
            id: "jvm-w11-2-q5",
            question: "什么是分配担保？",
            options: [
                "保证分配成功",
                "Minor GC 前检查老年代是否有足够空间容纳所有新生代对象",
                "担保不发生 OOM",
                "担保 GC 时间"
            ],
            answer: 1,
            rationale: "分配担保在 Minor GC 前检查老年代剩余空间是否大于新生代所有对象总大小，决定是否安全执行 Minor GC。"
        },
        {
            id: "jvm-w11-2-q6",
            question: "并行 GC 和并发 GC 的区别是什么？",
            options: [
                "完全相同",
                "并行 GC 多线程但暂停应用，并发 GC 与应用同时运行",
                "并发 GC 更慢",
                "并行 GC 单线程"
            ],
            answer: 1,
            rationale: "并行 GC 使用多个 GC 线程同时工作，但应用暂停。并发 GC 的 GC 线程与应用线程同时运行，减少暂停时间。"
        },
        {
            id: "jvm-w11-2-q7",
            question: "哪种算法适合老年代？",
            options: [
                "复制算法",
                "标记-清除或标记-整理",
                "引用计数",
                "增量 GC"
            ],
            answer: 1,
            rationale: "老年代对象存活率高，复制算法需要复制大量对象效率低。标记-清除或标记-整理更适合老年代。"
        },
        {
            id: "jvm-w11-2-q8",
            question: "分代收集的理论基础是什么？",
            options: [
                "堆内存有限",
                "分代假说：大多数对象朝生夕死，少数长期存活",
                "分代更容易实现",
                "历史原因"
            ],
            answer: 1,
            rationale: "分代收集基于分代假说：弱分代假说（大多数对象朝生夕死）和强分代假说（熬过多次 GC 的对象更难死亡）。"
        },
        {
            id: "jvm-w11-2-q9",
            question: "使用什么命令监控 GC 统计？",
            options: [
                "jstack",
                "jstat -gcutil <pid>",
                "jmap",
                "jinfo"
            ],
            answer: 1,
            rationale: "jstat -gcutil <pid> 可以实时监控各代空间使用率、GC 次数、GC 时间等统计信息。"
        },
        {
            id: "jvm-w11-2-q10",
            question: "复制算法的主要缺点是什么？",
            options: [
                "产生碎片",
                "空间利用率只有 50%",
                "速度慢",
                "实现复杂"
            ],
            answer: 1,
            rationale: "标准复制算法需要将内存分为两半，只使用其中一半，空间利用率只有 50%。"
        },
        {
            id: "jvm-w11-2-q11",
            question: "-XX:+UseSerialGC 启用什么收集器？",
            options: [
                "并行收集器",
                "串行收集器（单线程）",
                "G1",
                "ZGC"
            ],
            answer: 1,
            rationale: "-XX:+UseSerialGC 启用串行收集器，使用单线程进行 GC。适合单 CPU 或小内存环境。"
        },
        {
            id: "jvm-w11-2-q12",
            question: "增量收集的目的是什么？",
            options: [
                "提高吞吐量",
                "将 GC 工作分成小步骤，减少单次暂停时间",
                "减少内存使用",
                "简化实现"
            ],
            answer: 1,
            rationale: "增量收集将 GC 工作分成多个小步骤，与应用交替执行，减少单次暂停时间。但总体吞吐量可能下降。"
        }
    ],
    "jvm-w11-3": [
        {
            id: "jvm-w11-3-q1",
            question: "四种引用类型的强弱顺序是什么？",
            options: [
                "软 > 弱 > 虚 > 强",
                "强 > 软 > 弱 > 虚",
                "虚 > 弱 > 软 > 强",
                "强 > 弱 > 软 > 虚"
            ],
            answer: 1,
            rationale: "引用强弱顺序：强引用 > 软引用 > 弱引用 > 虚引用。强引用最强，虚引用最弱。"
        },
        {
            id: "jvm-w11-3-q2",
            question: "软引用在什么时候被回收？",
            options: [
                "任何 GC 时",
                "只有在内存不足时",
                "永远不回收",
                "创建后立即回收"
            ],
            answer: 1,
            rationale: "软引用只有在内存不足时才会被回收。JVM 会尽量保留软引用对象直到内存紧张。"
        },
        {
            id: "jvm-w11-3-q3",
            question: "弱引用和软引用的主要区别是什么？",
            options: [
                "没有区别",
                "弱引用在任何 GC 时都会被回收，软引用只在内存不足时",
                "弱引用更强",
                "软引用更快被回收"
            ],
            answer: 1,
            rationale: "弱引用在任何 GC 时都会被回收，无论内存是否充足。软引用只在内存不足时才被回收。"
        },
        {
            id: "jvm-w11-3-q4",
            question: "虚引用的用途是什么？",
            options: [
                "获取对象",
                "在对象被回收时收到通知，用于资源清理",
                "加速 GC",
                "防止对象被回收"
            ],
            answer: 1,
            rationale: "虚引用无法通过 get() 获取对象。唯一用途是配合 ReferenceQueue 在对象被回收时收到通知，用于资源清理。"
        },
        {
            id: "jvm-w11-3-q5",
            question: "WeakHashMap 的特点是什么？",
            options: [
                "比 HashMap 更快",
                "key 不再被强引用时，entry 自动移除",
                "value 是弱引用",
                "线程安全"
            ],
            answer: 1,
            rationale: "WeakHashMap 使用 WeakReference 作为 key。当 key 不再被强引用时，entry 会在下次操作时自动移除。"
        },
        {
            id: "jvm-w11-3-q6",
            question: "什么是 ReferenceQueue？",
            options: [
                "引用的队列",
                "跟踪引用对象被回收时机的队列",
                "GC 队列",
                "等待队列"
            ],
            answer: 1,
            rationale: "ReferenceQueue 用于跟踪引用对象被回收的时机。当引用指向的对象被回收时，引用本身会被加入关联的 ReferenceQueue。"
        },
        {
            id: "jvm-w11-3-q7",
            question: "Cleaner 相比 finalize 有什么优势？",
            options: [
                "执行更慢",
                "执行时机更可控、不影响 GC、不能复活对象",
                "可以复活对象",
                "是 finalize 的别名"
            ],
            answer: 1,
            rationale: "Cleaner 基于 PhantomReference，执行时机更可控，不影响 GC 效率，且不能让对象复活（更可靠）。"
        },
        {
            id: "jvm-w11-3-q8",
            question: "-XX:SoftRefLRUPolicyMSPerMB 的作用是什么？",
            options: [
                "设置堆大小",
                "设置每 MB 空闲内存允许软引用存活的毫秒数",
                "设置 GC 频率",
                "禁用软引用"
            ],
            answer: 1,
            rationale: "SoftRefLRUPolicyMSPerMB 表示每 MB 空闲内存允许软引用存活的毫秒数。内存越紧张，软引用越早被回收。"
        },
        {
            id: "jvm-w11-3-q9",
            question: "ThreadLocal 使用什么引用类型避免内存泄漏？",
            options: [
                "强引用",
                "弱引用（WeakReference）作为 key",
                "软引用",
                "虚引用"
            ],
            answer: 1,
            rationale: "ThreadLocal 的 ThreadLocalMap 使用 WeakReference 作为 key。但 value 仍是强引用，需要手动 remove 避免泄漏。"
        },
        {
            id: "jvm-w11-3-q10",
            question: "软引用适用于什么场景？",
            options: [
                "临时对象",
                "缓存",
                "资源清理",
                "所有场景"
            ],
            answer: 1,
            rationale: "软引用适用于缓存场景：内存充足时保留缓存提高性能，内存不足时自动回收避免 OOM。"
        },
        {
            id: "jvm-w11-3-q11",
            question: "PhantomReference.get() 返回什么？",
            options: [
                "引用的对象",
                "总是返回 null",
                "对象的副本",
                "引用队列"
            ],
            answer: 1,
            rationale: "PhantomReference.get() 总是返回 null。虚引用无法用于获取对象，只能用于回收通知。"
        },
        {
            id: "jvm-w11-3-q12",
            question: "DirectByteBuffer 如何释放本地内存？",
            options: [
                "GC 自动释放",
                "使用 Cleaner 在 GC 回收时释放本地内存",
                "手动调用 free",
                "不需要释放"
            ],
            answer: 1,
            rationale: "DirectByteBuffer 使用 Cleaner 机制。当 DirectByteBuffer 对象被 GC 回收时，Cleaner 会自动释放对应的本地内存。"
        }
    ]
}
