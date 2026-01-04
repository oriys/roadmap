import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "jvm-w7-1": {
        lessonId: "jvm-w7-1",
        background: [
            "【堆内存概述】堆（Heap）是 JVM 管理的最大内存区域，所有线程共享。几乎所有对象实例和数组都在堆上分配。堆是垃圾收集器管理的主要区域，因此也被称为'GC 堆'。",
            "【分代假说】大多数对象'朝生夕死'，只有少数长期存活。基于这个假说，HotSpot 将堆分为新生代（Young Generation）和老年代（Old Generation）。新生代 GC 频繁但快速，老年代 GC 少但耗时。",
            "【新生代结构】新生代分为 Eden 区和两个 Survivor 区（S0、S1）。新对象首先在 Eden 分配；Minor GC 后存活对象复制到 Survivor；经过多次 GC 后晋升到老年代。默认 Eden:S0:S1 = 8:1:1。",
            "【老年代】老年代存储长期存活的对象和大对象。当老年代空间不足时触发 Major GC（或 Full GC）。老年代容量通常是新生代的 2 倍左右。老年代 GC 通常比 Minor GC 慢 10 倍以上。",
            "【堆大小配置】-Xms 设置堆的初始大小，-Xmx 设置最大大小。建议将两者设为相同值以避免堆大小调整的开销。-Xmn 可以设置新生代大小。-XX:NewRatio 设置老年代与新生代的比例。"
        ],
        keyDifficulties: [
            "【对象分配快速路径】正常对象分配使用快速路径（Fast Path）：检查 TLAB 剩余空间 → 指针碰撞分配 → 返回对象引用。只有 TLAB 空间不足或大对象才走慢速路径（需要同步）。",
            "【晋升年龄】对象在 Survivor 区每熬过一次 GC，年龄加 1。当年龄达到阈值（默认 15，由 -XX:MaxTenuringThreshold 设置）时晋升到老年代。动态年龄判断可能提前晋升。",
            "【空间分配担保】Minor GC 前，JVM 检查老年代最大可用连续空间是否大于新生代所有对象总空间。如果不满足，根据 HandlePromotionFailure 决定是否冒险 Minor GC 或直接 Full GC。",
            "【ZGC/Shenandoah 不分代】ZGC 和 Shenandoah（在某些版本）不使用分代设计，而是将整个堆作为一个整体管理。这简化了内存管理但需要更复杂的并发技术。"
        ],
        handsOnPath: [
            "使用 -Xms256m -Xmx256m 设置固定堆大小，观察 GC 行为。",
            "使用 jmap -heap <pid> 查看堆的详细配置和使用情况。",
            "使用 -XX:+PrintGCDetails 观察 Eden、Survivor、Old 区的变化。",
            "编写分配大量短命对象的程序，观察 Minor GC 频率。",
            "编写分配大对象的程序，观察是否直接进入老年代（-XX:PretenureSizeThreshold）。"
        ],
        selfCheck: [
            "堆内存分为哪几个区域？各有什么作用？",
            "为什么要将堆分为新生代和老年代？基于什么假说？",
            "Eden 区和 Survivor 区的默认比例是多少？",
            "对象什么时候会晋升到老年代？",
            "-Xms 和 -Xmx 分别表示什么？为什么建议设为相同值？",
            "什么是空间分配担保？"
        ],
        extensions: [
            "研究 G1 的 Region 设计如何突破传统分代边界。",
            "了解 ZGC 的着色指针（Colored Pointers）技术。",
            "探索 Shenandoah 的 Brooks 指针如何实现并发压缩。",
            "研究 JEP 404：Generational ZGC 如何结合分代和并发。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.5.3",
            "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-collector-implementation.html",
            "https://www.baeldung.com/java-stack-heap"
        ]
    },
    "jvm-w7-2": {
        lessonId: "jvm-w7-2",
        background: [
            "【虚拟机栈概述】虚拟机栈（JVM Stack）是线程私有的，生命周期与线程相同。每个方法调用创建一个栈帧（Stack Frame），方法返回时栈帧弹出。栈描述的是方法执行的内存模型。",
            "【栈帧结构】栈帧包含：局部变量表（Local Variable Table）存储方法参数和局部变量；操作数栈（Operand Stack）执行字节码时的工作区；动态链接（Dynamic Linking）指向运行时常量池；返回地址。",
            "【局部变量表】局部变量表是一个以槽（Slot）为单位的数组。基本类型和引用占 1 个槽，long 和 double 占 2 个槽。实例方法的槽 0 存储 this 引用。槽可以复用，超出作用域的变量槽会被后续变量使用。",
            "【操作数栈】操作数栈是后进先出（LIFO）的栈结构。字节码指令从栈中取操作数，将结果压回栈。栈的最大深度在编译期确定，存储在 Code 属性的 max_stack 中。",
            "【栈大小配置】-Xss 设置每个线程的栈大小（如 -Xss512k）。栈空间不足时抛出 StackOverflowError；无法创建新栈时抛出 OutOfMemoryError。线程多时需要注意总栈空间。"
        ],
        keyDifficulties: [
            "【栈帧重叠】两个相邻栈帧可能有部分重叠：当前方法的操作数栈与被调用方法的局部变量表可能共享部分内存。这是调用时参数传递的优化。",
            "【局部变量表复用】当一个局部变量超出作用域后，它的槽可以被后续定义的变量复用。这在 javap 输出中可能看到同一个槽被多个变量使用。",
            "【StackOverflowError】递归调用深度过大或局部变量过多会导致栈溢出。JVM 可以检测并抛出 StackOverflowError，而不是让程序崩溃。-Xss 可以调整栈大小。",
            "【本地方法栈】除了虚拟机栈，还有本地方法栈（Native Method Stack）执行 JNI 调用的本地方法。HotSpot 将两者合并实现。本地方法栈也可能抛出 StackOverflowError。"
        ],
        handsOnPath: [
            "编写递归方法，故意触发 StackOverflowError，观察调用深度。",
            "调整 -Xss 大小，对比允许的递归深度变化。",
            "使用 javap -v 查看方法的 max_stack 和 max_locals，理解栈帧大小计算。",
            "使用 jstack <pid> 查看线程的调用栈，观察栈帧结构。",
            "编写包含大量局部变量的方法，观察局部变量表大小。"
        ],
        selfCheck: [
            "虚拟机栈和堆的主要区别是什么？",
            "栈帧包含哪四个部分？各有什么作用？",
            "局部变量表的槽（Slot）是什么？long 和 double 占几个槽？",
            "什么情况下会抛出 StackOverflowError？",
            "-Xss 参数的作用是什么？",
            "什么是栈帧重叠？它有什么作用？"
        ],
        extensions: [
            "研究虚拟线程（Virtual Threads，Java 21）如何影响栈内存使用。",
            "了解 Continuation 如何实现协程式的栈管理。",
            "探索 GraalVM 的 Truffle 框架如何管理多语言的栈帧。",
            "研究 JFR 如何采样栈帧用于性能分析。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.5.2",
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.6",
            "https://www.baeldung.com/java-stack-heap#stack-memory-in-java"
        ]
    },
    "jvm-w7-3": {
        lessonId: "jvm-w7-3",
        background: [
            "【方法区概述】方法区（Method Area）是所有线程共享的内存区域，存储类的结构信息：类名、访问修饰符、字段描述、方法描述、运行时常量池、静态变量、JIT 编译后的代码等。",
            "【永久代历史】Java 8 之前，HotSpot 用永久代（Permanent Generation）实现方法区，是堆的一部分。永久代有固定大小，容易导致 OOM。类卸载困难，性能问题较多。",
            "【Metaspace】Java 8 移除永久代，用 Metaspace（元空间）替代。Metaspace 使用本地内存（Native Memory），不受 -Xmx 限制。默认只受系统内存限制，更灵活但需要注意监控。",
            "【运行时常量池】运行时常量池（Runtime Constant Pool）是方法区的一部分，存储 Class 文件常量池的运行时表示。字符串常量池在 Java 7 后移到堆中。",
            "【类卸载】当类的所有实例被回收、类加载器被回收、Class 对象不可达时，类才可能被卸载。由于条件严格，类卸载很少发生，这也是动态生成类可能导致 Metaspace OOM 的原因。"
        ],
        keyDifficulties: [
            "【Metaspace 内存管理】Metaspace 使用 Chunk 分配内存，有 Class Space（存储 Klass 结构，需压缩类指针）和 Non-Class Space（存储其他元数据）。-XX:MetaspaceSize 是触发 GC 的阈值，不是初始大小。",
            "【字符串常量池变迁】Java 6：字符串常量池在永久代。Java 7：字符串常量池移到堆中。Java 8：永久代消失，其他类元数据移到 Metaspace。注意区分字符串常量池和运行时常量池。",
            "【CompressedClassSpaceSize】启用 -XX:+UseCompressedClassPointers 时，Klass 指针被压缩为 32 位。CompressedClassSpace 固定位置，默认 1GB。超出会报 Metaspace OOM。",
            "【Metaspace OOM 排查】常见原因：大量动态生成类（如 CGLIB 代理）、类加载器泄漏、频繁重新部署。使用 jcmd <pid> GC.class_stats 或 jmap -clstats 分析。"
        ],
        handsOnPath: [
            "使用 jcmd <pid> VM.metaspace 查看 Metaspace 使用情况。",
            "使用 -XX:MaxMetaspaceSize=64m 限制 Metaspace 大小，观察 OOM。",
            "使用 CGLIB 或 ByteBuddy 动态生成大量类，触发 Metaspace OOM。",
            "使用 jmap -clstats <pid> 分析类加载器和加载的类数量。",
            "对比 Java 7 和 Java 8+ 中字符串常量池的位置（通过 -XX:+PrintStringTableStatistics）。"
        ],
        selfCheck: [
            "方法区存储哪些信息？",
            "永久代和 Metaspace 有什么区别？",
            "Metaspace 使用什么内存？受 -Xmx 限制吗？",
            "字符串常量池在 Java 7、8 分别在哪里？",
            "类在什么条件下才能被卸载？",
            "-XX:MetaspaceSize 和 -XX:MaxMetaspaceSize 有什么区别？"
        ],
        extensions: [
            "研究 CDS（Class Data Sharing）如何减少 Metaspace 使用和加速启动。",
            "了解 AppCDS（Application Class Data Sharing）的配置和使用。",
            "探索 GraalVM Native Image 如何在编译时处理类元数据。",
            "研究 JEP 387：Elastic Metaspace 如何改进内存管理。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.5.4",
            "https://www.baeldung.com/java-permgen-metaspace",
            "https://stuefe.de/posts/metaspace/what-is-metaspace/"
        ]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w7-1": [
        {
            id: "jvm-w7-1-q1",
            question: "堆内存被哪些线程共享？",
            options: [
                "只有主线程",
                "所有线程共享",
                "每个线程有独立的堆",
                "只有 GC 线程"
            ],
            answer: 1,
            rationale: "堆是 JVM 管理的最大内存区域，所有线程共享。几乎所有对象实例和数组都在堆上分配。"
        },
        {
            id: "jvm-w7-1-q2",
            question: "新生代分为哪几个区域？",
            options: [
                "只有 Eden",
                "Eden 和一个 Survivor",
                "Eden 和两个 Survivor（S0、S1）",
                "Eden、Survivor 和 Old"
            ],
            answer: 2,
            rationale: "新生代分为 Eden 区和两个 Survivor 区（S0、S1）。默认比例 Eden:S0:S1 = 8:1:1。"
        },
        {
            id: "jvm-w7-1-q3",
            question: "对象默认经过多少次 GC 后晋升到老年代？",
            options: [
                "5 次",
                "10 次",
                "15 次",
                "20 次"
            ],
            answer: 2,
            rationale: "对象在 Survivor 区每熬过一次 GC 年龄加 1，默认达到 15（-XX:MaxTenuringThreshold）时晋升到老年代。"
        },
        {
            id: "jvm-w7-1-q4",
            question: "-Xms 和 -Xmx 分别表示什么？",
            options: [
                "最大栈大小和最小栈大小",
                "堆的初始大小和最大大小",
                "Metaspace 的初始和最大大小",
                "新生代和老年代大小"
            ],
            answer: 1,
            rationale: "-Xms 设置堆的初始大小，-Xmx 设置最大大小。建议将两者设为相同值以避免堆调整开销。"
        },
        {
            id: "jvm-w7-1-q5",
            question: "分代假说的核心观点是什么？",
            options: [
                "所有对象都是长期存活的",
                "大多数对象朝生夕死，只有少数长期存活",
                "对象存活时间均匀分布",
                "老对象比新对象更容易回收"
            ],
            answer: 1,
            rationale: "分代假说认为大多数对象'朝生夕死'，只有少数长期存活。这是分代收集的理论基础。"
        },
        {
            id: "jvm-w7-1-q6",
            question: "什么是空间分配担保？",
            options: [
                "保证每个对象都能分配成功",
                "Minor GC 前检查老年代是否有足够空间容纳所有新生代对象",
                "保证 Metaspace 不会溢出",
                "保证栈空间充足"
            ],
            answer: 1,
            rationale: "空间分配担保在 Minor GC 前检查老年代最大可用连续空间是否大于新生代所有对象总空间，决定是否安全执行 Minor GC。"
        },
        {
            id: "jvm-w7-1-q7",
            question: "使用什么命令查看堆的详细配置？",
            options: [
                "jstack",
                "jmap -heap <pid>",
                "jstat",
                "jcmd"
            ],
            answer: 1,
            rationale: "jmap -heap <pid> 可以查看堆的详细配置和使用情况，包括各代的大小和使用率。"
        },
        {
            id: "jvm-w7-1-q8",
            question: "大对象可能直接分配到哪里？",
            options: [
                "Eden 区",
                "Survivor 区",
                "老年代",
                "Metaspace"
            ],
            answer: 2,
            rationale: "超过阈值（-XX:PretenureSizeThreshold）的大对象可能直接分配到老年代，避免在新生代来回复制。"
        },
        {
            id: "jvm-w7-1-q9",
            question: "-Xmn 参数的作用是什么？",
            options: [
                "设置最大线程数",
                "设置新生代大小",
                "设置 Metaspace 大小",
                "设置栈大小"
            ],
            answer: 1,
            rationale: "-Xmn 设置新生代大小。也可以用 -XX:NewRatio 设置老年代与新生代的比例。"
        },
        {
            id: "jvm-w7-1-q10",
            question: "ZGC 和传统 GC 在堆管理上有什么不同？",
            options: [
                "完全相同",
                "ZGC 不使用分代设计，整个堆作为一个整体管理",
                "ZGC 只管理新生代",
                "ZGC 不使用堆"
            ],
            answer: 1,
            rationale: "ZGC 和 Shenandoah（某些版本）不使用传统分代设计，而是将整个堆作为一个整体管理，使用更复杂的并发技术。"
        },
        {
            id: "jvm-w7-1-q11",
            question: "为什么建议将 -Xms 和 -Xmx 设为相同值？",
            options: [
                "减少配置复杂度",
                "避免堆大小调整带来的性能开销",
                "系统要求",
                "便于监控"
            ],
            answer: 1,
            rationale: "将 -Xms 和 -Xmx 设为相同值可以避免 JVM 在运行时调整堆大小带来的性能开销和停顿。"
        },
        {
            id: "jvm-w7-1-q12",
            question: "Eden 区和 Survivor 区的默认比例是多少？",
            options: [
                "6:1:1",
                "7:1:1",
                "8:1:1",
                "9:1:1"
            ],
            answer: 2,
            rationale: "新生代中 Eden 和两个 Survivor 区的默认比例是 8:1:1，可通过 -XX:SurvivorRatio 调整。"
        }
    ],
    "jvm-w7-2": [
        {
            id: "jvm-w7-2-q1",
            question: "虚拟机栈是线程私有还是共享的？",
            options: [
                "所有线程共享",
                "线程私有",
                "部分共享部分私有",
                "取决于配置"
            ],
            answer: 1,
            rationale: "虚拟机栈是线程私有的，每个线程有独立的栈。生命周期与线程相同。"
        },
        {
            id: "jvm-w7-2-q2",
            question: "栈帧包含哪四个部分？",
            options: [
                "堆、栈、方法区、常量池",
                "局部变量表、操作数栈、动态链接、返回地址",
                "Eden、Survivor、Old、Metaspace",
                "类信息、字段、方法、常量"
            ],
            answer: 1,
            rationale: "栈帧包含：局部变量表、操作数栈、动态链接、返回地址。"
        },
        {
            id: "jvm-w7-2-q3",
            question: "long 和 double 在局部变量表中占几个槽？",
            options: [
                "1 个",
                "2 个",
                "4 个",
                "8 个"
            ],
            answer: 1,
            rationale: "long 和 double 是 64 位类型，在局部变量表中占 2 个槽。其他基本类型和引用占 1 个槽。"
        },
        {
            id: "jvm-w7-2-q4",
            question: "实例方法的局部变量表槽 0 存储什么？",
            options: [
                "第一个参数",
                "返回值",
                "this 引用",
                "方法名"
            ],
            answer: 2,
            rationale: "实例方法的局部变量表槽 0 存储 this 引用，参数从槽 1 开始。静态方法没有 this，参数从槽 0 开始。"
        },
        {
            id: "jvm-w7-2-q5",
            question: "-Xss 参数的作用是什么？",
            options: [
                "设置堆大小",
                "设置每个线程的栈大小",
                "设置 Metaspace 大小",
                "设置 Survivor 大小"
            ],
            answer: 1,
            rationale: "-Xss 设置每个线程的栈大小，如 -Xss512k。栈空间不足时抛出 StackOverflowError。"
        },
        {
            id: "jvm-w7-2-q6",
            question: "什么情况下会抛出 StackOverflowError？",
            options: [
                "堆内存不足",
                "递归调用深度过大或局部变量过多导致栈溢出",
                "Metaspace 满了",
                "线程数过多"
            ],
            answer: 1,
            rationale: "递归调用深度过大或局部变量过多会导致栈空间耗尽，JVM 抛出 StackOverflowError。"
        },
        {
            id: "jvm-w7-2-q7",
            question: "操作数栈的数据结构是什么？",
            options: [
                "先进先出（FIFO）",
                "后进先出（LIFO）",
                "随机访问",
                "链表"
            ],
            answer: 1,
            rationale: "操作数栈是后进先出（LIFO）的栈结构。字节码指令从栈中取操作数，将结果压回栈。"
        },
        {
            id: "jvm-w7-2-q8",
            question: "使用什么命令查看线程的调用栈？",
            options: [
                "jmap",
                "jstack <pid>",
                "jstat",
                "jinfo"
            ],
            answer: 1,
            rationale: "jstack <pid> 可以查看线程的调用栈，显示每个线程的栈帧信息，用于诊断死锁和性能问题。"
        },
        {
            id: "jvm-w7-2-q9",
            question: "本地方法栈的作用是什么？",
            options: [
                "存储本地变量",
                "执行 JNI 调用的本地方法",
                "存储本地文件",
                "管理本地内存"
            ],
            answer: 1,
            rationale: "本地方法栈（Native Method Stack）执行 JNI 调用的本地方法。HotSpot 将本地方法栈和虚拟机栈合并实现。"
        },
        {
            id: "jvm-w7-2-q10",
            question: "什么是栈帧重叠？",
            options: [
                "两个线程共享栈帧",
                "当前方法的操作数栈与被调用方法的局部变量表共享部分内存",
                "栈帧被压缩",
                "栈帧被缓存"
            ],
            answer: 1,
            rationale: "栈帧重叠是指当前方法的操作数栈与被调用方法的局部变量表可能共享部分内存，是参数传递的优化。"
        },
        {
            id: "jvm-w7-2-q11",
            question: "动态链接在栈帧中的作用是什么？",
            options: [
                "连接网络",
                "指向运行时常量池，用于将符号引用转为直接引用",
                "动态调整栈大小",
                "连接其他线程"
            ],
            answer: 1,
            rationale: "动态链接指向当前方法所属类的运行时常量池，用于在执行时将符号引用转换为直接引用。"
        },
        {
            id: "jvm-w7-2-q12",
            question: "javap 输出中的 max_locals 表示什么？",
            options: [
                "最大局部变量数",
                "局部变量表的槽数（大小）",
                "最大本地方法数",
                "最大本地线程数"
            ],
            answer: 1,
            rationale: "max_locals 表示方法的局部变量表的槽数，包括参数和局部变量。JVM 根据这个值分配空间。"
        }
    ],
    "jvm-w7-3": [
        {
            id: "jvm-w7-3-q1",
            question: "方法区存储哪些信息？",
            options: [
                "对象实例",
                "类的结构信息、运行时常量池、静态变量",
                "线程栈帧",
                "GC 日志"
            ],
            answer: 1,
            rationale: "方法区存储类的结构信息：类名、访问修饰符、字段描述、方法描述、运行时常量池、静态变量、JIT 编译后的代码等。"
        },
        {
            id: "jvm-w7-3-q2",
            question: "Java 8 之前 HotSpot 用什么实现方法区？",
            options: [
                "Metaspace",
                "永久代（Permanent Generation）",
                "堆",
                "本地内存"
            ],
            answer: 1,
            rationale: "Java 8 之前，HotSpot 用永久代实现方法区，是堆的一部分。Java 8 后改为 Metaspace。"
        },
        {
            id: "jvm-w7-3-q3",
            question: "Metaspace 使用什么内存？",
            options: [
                "堆内存",
                "本地内存（Native Memory）",
                "栈内存",
                "显存"
            ],
            answer: 1,
            rationale: "Metaspace 使用本地内存，不受 -Xmx 限制。默认只受系统内存限制，更灵活但需要监控。"
        },
        {
            id: "jvm-w7-3-q4",
            question: "Java 8 后字符串常量池在哪里？",
            options: [
                "Metaspace",
                "堆",
                "栈",
                "永久代"
            ],
            answer: 1,
            rationale: "Java 7 开始字符串常量池移到堆中，Java 8 后仍在堆中。注意区分字符串常量池和运行时常量池。"
        },
        {
            id: "jvm-w7-3-q5",
            question: "类在什么条件下才能被卸载？",
            options: [
                "随时可以卸载",
                "所有实例被回收、类加载器被回收、Class 对象不可达",
                "GC 时自动卸载",
                "手动调用 unload 方法"
            ],
            answer: 1,
            rationale: "类卸载条件严格：所有实例被回收、类加载器被回收、Class 对象不可达。因此类卸载很少发生。"
        },
        {
            id: "jvm-w7-3-q6",
            question: "-XX:MetaspaceSize 的作用是什么？",
            options: [
                "设置 Metaspace 初始大小",
                "设置触发 Metaspace GC 的阈值",
                "设置 Metaspace 最大大小",
                "禁用 Metaspace"
            ],
            answer: 1,
            rationale: "-XX:MetaspaceSize 是触发 Metaspace GC 的阈值，不是初始大小。-XX:MaxMetaspaceSize 设置最大值。"
        },
        {
            id: "jvm-w7-3-q7",
            question: "Metaspace OOM 的常见原因是什么？",
            options: [
                "堆内存不足",
                "大量动态生成类、类加载器泄漏",
                "线程过多",
                "文件描述符不足"
            ],
            answer: 1,
            rationale: "Metaspace OOM 常见原因：大量动态生成类（如 CGLIB 代理）、类加载器泄漏、频繁重新部署。"
        },
        {
            id: "jvm-w7-3-q8",
            question: "使用什么命令分析类加载器信息？",
            options: [
                "jstack",
                "jmap -clstats <pid>",
                "jstat",
                "jinfo"
            ],
            answer: 1,
            rationale: "jmap -clstats <pid> 可以分析类加载器和加载的类数量，帮助排查 Metaspace 问题。"
        },
        {
            id: "jvm-w7-3-q9",
            question: "永久代和 Metaspace 的主要区别是什么？",
            options: [
                "完全相同",
                "永久代是堆的一部分，Metaspace 使用本地内存",
                "Metaspace 是堆的一部分",
                "永久代更快"
            ],
            answer: 1,
            rationale: "永久代是堆的一部分，有固定大小限制；Metaspace 使用本地内存，默认只受系统内存限制，更灵活。"
        },
        {
            id: "jvm-w7-3-q10",
            question: "CompressedClassSpaceSize 的默认值是多少？",
            options: [
                "256MB",
                "512MB",
                "1GB",
                "2GB"
            ],
            answer: 2,
            rationale: "启用压缩类指针时，CompressedClassSpace 默认 1GB。超出会报 Metaspace OOM。"
        },
        {
            id: "jvm-w7-3-q11",
            question: "运行时常量池和字符串常量池的关系是什么？",
            options: [
                "完全相同",
                "运行时常量池在方法区，字符串常量池在堆（Java 7+）",
                "都在堆中",
                "都在栈中"
            ],
            answer: 1,
            rationale: "运行时常量池是方法区（Metaspace）的一部分；字符串常量池从 Java 7 开始移到堆中。"
        },
        {
            id: "jvm-w7-3-q12",
            question: "CDS（Class Data Sharing）的作用是什么？",
            options: [
                "共享类的实例",
                "减少 Metaspace 使用和加速启动",
                "共享线程",
                "共享堆内存"
            ],
            answer: 1,
            rationale: "CDS 将类元数据存储在共享归档文件中，多个 JVM 实例可以共享，减少 Metaspace 使用和加速启动。"
        }
    ]
}
