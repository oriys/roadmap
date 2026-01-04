import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "jvm-w8-1": {
        lessonId: "jvm-w8-1",
        background: [
            "【对象内存布局】在 HotSpot 中，对象在内存中的布局分为三部分：对象头（Object Header）、实例数据（Instance Data）、对齐填充（Padding）。理解对象布局对于内存优化和性能调优很重要。",
            "【Mark Word】对象头的第一部分是 Mark Word，存储对象自身的运行时数据：哈希码（HashCode）、GC 分代年龄、锁状态标志、偏向线程 ID、偏向时间戳等。32 位 JVM 占 4 字节，64 位 JVM 占 8 字节。",
            "【类型指针】对象头的第二部分是类型指针（Klass Pointer），指向对象的类元数据，JVM 通过它确定对象是哪个类的实例。启用压缩指针时占 4 字节，否则 8 字节。",
            "【数组长度】如果对象是数组，对象头还需要额外的 4 字节存储数组长度。因为 JVM 无法从类元数据推断数组大小，必须显式存储。",
            "【实例数据】实例数据是对象真正存储的有效信息，包括父类继承的和子类定义的字段。字段存储顺序受 -XX:FieldsAllocationStyle 和 -XX:+CompactFields 影响。"
        ],
        keyDifficulties: [
            "【Mark Word 的复用】Mark Word 在不同状态下存储不同内容。无锁状态存储哈希码和 GC 年龄；偏向锁存储线程 ID；轻量级锁存储锁记录指针；重量级锁存储 Monitor 指针；GC 标记阶段可能存储转发指针。",
            "【对象大小计算】普通对象大小 = 对象头（12 字节，压缩指针）+ 实例数据 + 对齐填充。数组对象额外 +4 字节。对齐到 8 字节边界。可用 JOL（Java Object Layout）工具精确分析。",
            "【字段重排序】HotSpot 会对字段重新排序以减少内存浪费。默认策略：long/double → int/float → short/char → byte/boolean → 引用。父类字段在子类字段之前。",
            "【对象头与锁】synchronized 的锁升级过程体现在 Mark Word 的变化：无锁 → 偏向锁 → 轻量级锁 → 重量级锁。每种状态 Mark Word 存储不同内容。"
        ],
        handsOnPath: [
            "添加 JOL 依赖，使用 ClassLayout.parseClass(MyClass.class).toPrintable() 查看对象布局。",
            "对比空对象和有字段对象的大小差异，观察对齐填充。",
            "添加不同类型字段，观察字段重排序和内存布局变化。",
            "使用 -XX:-UseCompressedOops 禁用压缩指针，对比对象大小变化。",
            "使用 synchronized 锁对象，通过 JOL 观察 Mark Word 的变化。"
        ],
        selfCheck: [
            "对象在内存中分为哪三部分？",
            "Mark Word 存储哪些信息？在不同锁状态下存储什么？",
            "类型指针的作用是什么？启用压缩指针时占多少字节？",
            "数组对象与普通对象在对象头上有什么区别？",
            "HotSpot 如何对字段进行重排序？",
            "如何使用 JOL 工具分析对象布局？"
        ],
        extensions: [
            "研究 Project Lilliput 如何将对象头压缩到 4 字节。",
            "了解 Valhalla 项目的 Value Types 如何改变对象布局。",
            "探索不同 GC 对对象头的使用差异（如 Shenandoah 的 Brooks 指针）。",
            "研究对象头与 java.lang.Object 的 hashCode()、wait()、notify() 的关系。"
        ],
        sourceUrls: [
            "https://www.baeldung.com/java-memory-layout",
            "https://wiki.openjdk.org/display/HotSpot/Synchronization",
            "https://shipilev.net/jvm/objects-inside-out/"
        ]
    },
    "jvm-w8-2": {
        lessonId: "jvm-w8-2",
        background: [
            "【指针压缩背景】64 位 JVM 的指针从 32 位扩展到 64 位，导致对象引用和对象头占用更多内存。指针压缩（Compressed Oops）通过使用 32 位值表示 64 位指针，在保持大堆的同时减少内存开销。",
            "【CompressedOops 原理】JVM 对象按 8 字节对齐，低 3 位总是 0。32 位值左移 3 位可以寻址 32GB（2^32 × 8 = 32GB）。解压时：address = compressed_oop << 3 + heap_base。",
            "【启用条件】-XX:+UseCompressedOops 默认启用。堆大小 ≤32GB 时生效，超过 32GB 自动禁用。启用时对象引用占 4 字节而非 8 字节，显著减少内存使用。",
            "【CompressedClassPointers】-XX:+UseCompressedClassPointers 压缩类型指针，将 Klass 指针从 8 字节压缩到 4 字节。需要 CompressedOops 先启用。Klass 存储在专用的 Compressed Class Space。",
            "【零基压缩】当堆起始地址为 0 且堆大小 <4GB 时，可以使用零基压缩（Zero-based Compressed Oops），解压更简单高效：address = compressed_oop << 3。"
        ],
        keyDifficulties: [
            "【32GB 边界】压缩指针只能寻址 32GB（2^35 字节）。堆超过 32GB 时指针压缩失效，每个引用从 4 字节变回 8 字节。有时减少堆大小到 32GB 以下反而能存储更多对象。",
            "【对象对齐影响】-XX:ObjectAlignmentInBytes 可以调整对象对齐（默认 8）。设为 16 时可寻址 64GB，但会增加对齐填充浪费。需要权衡寻址范围和内存利用率。",
            "【性能影响】压缩指针需要解压操作，理论上有 CPU 开销。但减少的内存占用带来更好的缓存利用率，通常总体性能更好。禁用压缩可能因为更多 GC 导致性能下降。",
            "【Narrow Klass 编码】压缩类指针使用不同的编码方式：klass_addr = narrow_klass << 3 + klass_base。Compressed Class Space 固定位置，大小由 -XX:CompressedClassSpaceSize 设置。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintCompressedOopsMode 查看压缩指针的模式和基地址。",
            "对比 -Xmx31g 和 -Xmx33g 时的对象大小差异（32GB 边界）。",
            "使用 JOL 对比启用和禁用压缩指针时的对象布局。",
            "观察 -XX:ObjectAlignmentInBytes=16 对对象大小和寻址范围的影响。",
            "使用 jcmd <pid> VM.info 查看压缩指针配置。"
        ],
        selfCheck: [
            "为什么需要指针压缩？它解决什么问题？",
            "CompressedOops 的工作原理是什么？为什么能寻址 32GB？",
            "堆大小超过 32GB 时会发生什么？",
            "什么是零基压缩？它有什么优势？",
            "CompressedClassPointers 和 CompressedOops 有什么区别？",
            "如何调整对象对齐以支持更大的压缩指针范围？"
        ],
        extensions: [
            "研究 JEP 450：Compact Object Headers 如何进一步压缩对象头。",
            "了解 ZGC 的多映射（Multi-Mapping）技术如何处理大堆。",
            "探索 Shenandoah 如何在压缩指针下实现并发压缩。",
            "研究 -XX:HeapBaseMinAddress 对压缩指针模式的影响。"
        ],
        sourceUrls: [
            "https://wiki.openjdk.org/display/HotSpot/CompressedOops",
            "https://www.baeldung.com/java-compressed-oops",
            "https://shipilev.net/jvm/anatomy-quarks/23-compressed-references/"
        ]
    },
    "jvm-w8-3": {
        lessonId: "jvm-w8-3",
        background: [
            "【对象分配流程】对象分配的典型流程：尝试 TLAB 分配（快速路径）→ TLAB 空间不足则尝试 Eden 分配 → Eden 空间不足则触发 Minor GC → 仍不足则尝试老年代分配或 Full GC。",
            "【TLAB 概念】TLAB（Thread Local Allocation Buffer）是每个线程在 Eden 区预先分配的私有内存块。线程分配对象时在自己的 TLAB 中进行，无需同步，大幅提高分配效率。",
            "【TLAB 分配优化】TLAB 内的分配是指针碰撞（Bump Pointer）：将指针向前移动对象大小即可。这比 CAS 操作快得多。TLAB 用完后申请新的 TLAB 或走慢速路径。",
            "【大对象处理】超过 TLAB 大小的对象直接在 Eden 或老年代分配（需要同步）。超过 -XX:PretenureSizeThreshold 的大对象可能直接分配到老年代，避免在新生代来回复制。",
            "【逃逸分析】JIT 编译器通过逃逸分析（Escape Analysis）判断对象是否逃逸出方法或线程。未逃逸的对象可能栈上分配（Stack Allocation）或标量替换（Scalar Replacement），完全避免堆分配。"
        ],
        keyDifficulties: [
            "【TLAB 大小调整】TLAB 大小是动态调整的，基于线程的分配历史。-XX:TLABSize 设置初始大小，-XX:+ResizeTLAB 启用动态调整（默认）。太大浪费空间，太小频繁申请新 TLAB。",
            "【栈上分配条件】对象栈上分配的条件：1）必须启用逃逸分析（-XX:+DoEscapeAnalysis，默认）；2）对象不逃逸出方法；3）JIT 编译后的代码中。解释执行不会栈上分配。",
            "【标量替换】当对象不逃逸且可以被分解为标量（基本类型或引用）时，JIT 可能直接将对象的字段分配到栈或寄存器，称为标量替换。这比栈上分配更彻底，对象根本不存在。",
            "【分配失败处理】当 Eden 和 Survivor 都满时，触发 Minor GC。如果 GC 后仍无法分配，检查老年代空间是否足够进行晋升担保。担保失败则触发 Full GC。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintTLAB 观察 TLAB 的使用情况和分配统计。",
            "编写分配大量小对象的程序，对比启用和禁用 TLAB 的性能差异。",
            "使用 -XX:-DoEscapeAnalysis 禁用逃逸分析，对比堆分配数量变化。",
            "使用 -XX:+PrintEscapeAnalysis（调试版 JVM）观察逃逸分析结果。",
            "编写对象不逃逸的方法，通过 JMH 验证是否发生栈上分配。"
        ],
        selfCheck: [
            "对象分配的完整流程是什么？",
            "TLAB 是什么？它如何提高分配效率？",
            "什么情况下对象会直接分配到老年代？",
            "什么是逃逸分析？它有什么优化作用？",
            "栈上分配和标量替换有什么区别？",
            "TLAB 用完后会发生什么？"
        ],
        extensions: [
            "研究 C2 编译器的逃逸分析算法和局限性。",
            "了解 Graal 编译器的部分逃逸分析（Partial Escape Analysis）。",
            "探索 -XX:+EliminateAllocations 选项的作用。",
            "研究锁消除（Lock Elision）如何与逃逸分析配合。"
        ],
        sourceUrls: [
            "https://alidg.me/blog/2019/6/21/tlab-jvm",
            "https://shipilev.net/jvm/anatomy-quarks/4-tlab-allocation/",
            "https://www.baeldung.com/java-escape-analysis"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w8-1": [
        {
            id: "jvm-w8-1-q1",
            question: "对象在内存中分为哪三部分？",
            options: [
                "堆、栈、方法区",
                "对象头、实例数据、对齐填充",
                "Mark Word、Klass、Data",
                "头部、主体、尾部"
            ],
            answer: 1,
            rationale: "对象在内存中分为：对象头（Object Header）、实例数据（Instance Data）、对齐填充（Padding）。"
        },
        {
            id: "jvm-w8-1-q2",
            question: "Mark Word 存储哪些信息？",
            options: [
                "只有哈希码",
                "哈希码、GC 年龄、锁状态、偏向线程 ID 等",
                "只有锁状态",
                "只有类信息"
            ],
            answer: 1,
            rationale: "Mark Word 存储对象运行时数据：哈希码、GC 分代年龄、锁状态标志、偏向线程 ID、偏向时间戳等。"
        },
        {
            id: "jvm-w8-1-q3",
            question: "启用压缩指针时，64 位 JVM 的对象头占多少字节？",
            options: [
                "8 字节",
                "12 字节",
                "16 字节",
                "20 字节"
            ],
            answer: 1,
            rationale: "启用压缩指针时，Mark Word 8 字节 + Klass Pointer 4 字节 = 12 字节。数组额外 +4 字节。"
        },
        {
            id: "jvm-w8-1-q4",
            question: "数组对象与普通对象在对象头上有什么区别？",
            options: [
                "没有区别",
                "数组对象额外存储 4 字节的数组长度",
                "数组对象没有 Mark Word",
                "数组对象没有类型指针"
            ],
            answer: 1,
            rationale: "数组对象需要额外 4 字节存储数组长度，因为 JVM 无法从类元数据推断数组大小。"
        },
        {
            id: "jvm-w8-1-q5",
            question: "什么工具可以精确分析对象布局？",
            options: [
                "jmap",
                "JOL（Java Object Layout）",
                "jstack",
                "jstat"
            ],
            answer: 1,
            rationale: "JOL 是分析 Java 对象内存布局的工具，可以显示对象头、字段、对齐填充等详细信息。"
        },
        {
            id: "jvm-w8-1-q6",
            question: "HotSpot 如何对字段进行重排序？",
            options: [
                "按字段声明顺序",
                "long/double → int/float → short/char → byte/boolean → 引用",
                "按字母顺序",
                "随机排序"
            ],
            answer: 1,
            rationale: "HotSpot 对字段重排序以减少内存浪费：long/double → int/float → short/char → byte/boolean → 引用。"
        },
        {
            id: "jvm-w8-1-q7",
            question: "偏向锁状态下 Mark Word 存储什么？",
            options: [
                "哈希码",
                "偏向线程 ID",
                "Monitor 指针",
                "锁记录指针"
            ],
            answer: 1,
            rationale: "偏向锁状态下 Mark Word 存储偏向线程 ID 和偏向时间戳，用于快速判断是否可以偏向。"
        },
        {
            id: "jvm-w8-1-q8",
            question: "对象对齐到几字节边界？",
            options: [
                "4 字节",
                "8 字节",
                "16 字节",
                "32 字节"
            ],
            answer: 1,
            rationale: "HotSpot 默认对象对齐到 8 字节边界（-XX:ObjectAlignmentInBytes=8），不足的部分用填充补齐。"
        },
        {
            id: "jvm-w8-1-q9",
            question: "类型指针（Klass Pointer）的作用是什么？",
            options: [
                "存储哈希码",
                "指向类元数据，确定对象是哪个类的实例",
                "存储对象大小",
                "指向父类"
            ],
            answer: 1,
            rationale: "类型指针指向对象的类元数据（Klass），JVM 通过它确定对象是哪个类的实例。"
        },
        {
            id: "jvm-w8-1-q10",
            question: "锁升级过程中 Mark Word 如何变化？",
            options: [
                "不变化",
                "无锁 → 偏向锁 → 轻量级锁 → 重量级锁",
                "直接变为重量级锁",
                "随机变化"
            ],
            answer: 1,
            rationale: "synchronized 的锁升级体现在 Mark Word 变化：无锁 → 偏向锁 → 轻量级锁 → 重量级锁。"
        },
        {
            id: "jvm-w8-1-q11",
            question: "32 位 JVM 的 Mark Word 占多少字节？",
            options: [
                "2 字节",
                "4 字节",
                "8 字节",
                "16 字节"
            ],
            answer: 1,
            rationale: "32 位 JVM 的 Mark Word 占 4 字节，64 位 JVM 占 8 字节。"
        },
        {
            id: "jvm-w8-1-q12",
            question: "Project Lilliput 的目标是什么？",
            options: [
                "增加对象头大小",
                "将对象头压缩到 4 字节",
                "移除对象头",
                "增加字段数量"
            ],
            answer: 1,
            rationale: "Project Lilliput 是 OpenJDK 项目，目标是将对象头从 12-16 字节压缩到 4-8 字节。"
        }
    ],
    "jvm-w8-2": [
        {
            id: "jvm-w8-2-q1",
            question: "为什么需要指针压缩？",
            options: [
                "加快执行速度",
                "减少 64 位 JVM 中指针和对象头占用的内存",
                "支持更多线程",
                "提高 GC 效率"
            ],
            answer: 1,
            rationale: "64 位 JVM 指针从 32 位扩展到 64 位，导致更多内存开销。压缩指针用 32 位表示 64 位指针减少内存使用。"
        },
        {
            id: "jvm-w8-2-q2",
            question: "CompressedOops 为什么能寻址 32GB？",
            options: [
                "使用特殊的内存技术",
                "对象 8 字节对齐，32 位值左移 3 位可寻址 2^35 字节",
                "使用双指针",
                "压缩算法"
            ],
            answer: 1,
            rationale: "对象按 8 字节对齐，低 3 位总是 0。32 位值左移 3 位：2^32 × 8 = 32GB。"
        },
        {
            id: "jvm-w8-2-q3",
            question: "堆大小超过 32GB 时会发生什么？",
            options: [
                "JVM 崩溃",
                "压缩指针自动禁用，每个引用变回 8 字节",
                "性能提升",
                "没有影响"
            ],
            answer: 1,
            rationale: "堆超过 32GB 时压缩指针失效，每个引用从 4 字节变回 8 字节。有时减小堆反而能存储更多对象。"
        },
        {
            id: "jvm-w8-2-q4",
            question: "-XX:+UseCompressedOops 默认是否启用？",
            options: [
                "否",
                "是",
                "取决于 JVM 版本",
                "取决于操作系统"
            ],
            answer: 1,
            rationale: "-XX:+UseCompressedOops 默认启用。堆大小 ≤32GB 时生效。"
        },
        {
            id: "jvm-w8-2-q5",
            question: "什么是零基压缩？",
            options: [
                "不使用基地址",
                "堆起始地址为 0 且堆 <4GB 时的简化解压方式",
                "压缩率为零",
                "不压缩"
            ],
            answer: 1,
            rationale: "当堆起始地址为 0 且堆 <4GB 时，使用零基压缩：address = compressed_oop << 3，解压更高效。"
        },
        {
            id: "jvm-w8-2-q6",
            question: "如何调整对象对齐以支持更大堆？",
            options: [
                "无法调整",
                "-XX:ObjectAlignmentInBytes=16 可寻址 64GB",
                "增加堆大小参数",
                "使用 32 位 JVM"
            ],
            answer: 1,
            rationale: "-XX:ObjectAlignmentInBytes 可调整对齐。设为 16 时可寻址 64GB，但会增加对齐填充浪费。"
        },
        {
            id: "jvm-w8-2-q7",
            question: "启用压缩指针后，对象引用占几字节？",
            options: [
                "2 字节",
                "4 字节",
                "8 字节",
                "16 字节"
            ],
            answer: 1,
            rationale: "启用压缩指针后，对象引用从 8 字节压缩到 4 字节，显著减少内存使用。"
        },
        {
            id: "jvm-w8-2-q8",
            question: "CompressedClassPointers 和 CompressedOops 的关系？",
            options: [
                "完全独立",
                "CompressedClassPointers 需要 CompressedOops 先启用",
                "互斥",
                "完全相同"
            ],
            answer: 1,
            rationale: "CompressedClassPointers 压缩类型指针，需要 CompressedOops 先启用。Klass 存储在专用 Compressed Class Space。"
        },
        {
            id: "jvm-w8-2-q9",
            question: "压缩指针有什么性能影响？",
            options: [
                "只有开销没有好处",
                "解压有 CPU 开销，但更好的缓存利用率通常使总体性能更好",
                "没有任何影响",
                "总是降低性能"
            ],
            answer: 1,
            rationale: "压缩指针需要解压有 CPU 开销，但减少的内存占用带来更好的缓存利用率，通常总体性能更好。"
        },
        {
            id: "jvm-w8-2-q10",
            question: "使用什么命令查看压缩指针模式？",
            options: [
                "-XX:+PrintGC",
                "-XX:+PrintCompressedOopsMode",
                "-XX:+PrintFlagsFinal",
                "-XX:+PrintMemory"
            ],
            answer: 1,
            rationale: "-XX:+PrintCompressedOopsMode 可以查看压缩指针的模式（零基、偏移等）和基地址。"
        },
        {
            id: "jvm-w8-2-q11",
            question: "Compressed Class Space 的默认大小是多少？",
            options: [
                "256MB",
                "512MB",
                "1GB",
                "2GB"
            ],
            answer: 2,
            rationale: "Compressed Class Space 默认 1GB，由 -XX:CompressedClassSpaceSize 设置。超出会报 Metaspace OOM。"
        },
        {
            id: "jvm-w8-2-q12",
            question: "为什么有时减少堆大小到 32GB 以下反而更好？",
            options: [
                "GC 更快",
                "启用压缩指针后可以存储更多对象",
                "JVM 要求",
                "操作系统限制"
            ],
            answer: 1,
            rationale: "堆超过 32GB 禁用压缩指针，每个引用多 4 字节。减到 32GB 以下启用压缩可能反而存储更多对象。"
        }
    ],
    "jvm-w8-3": [
        {
            id: "jvm-w8-3-q1",
            question: "TLAB 是什么？",
            options: [
                "线程局部分配缓冲区，每个线程私有的分配区域",
                "全局内存池",
                "垃圾收集区域",
                "类加载区域"
            ],
            answer: 0,
            rationale: "TLAB（Thread Local Allocation Buffer）是每个线程在 Eden 区预先分配的私有内存块，无需同步即可分配对象。"
        },
        {
            id: "jvm-w8-3-q2",
            question: "TLAB 内的分配方式是什么？",
            options: [
                "链表分配",
                "指针碰撞（Bump Pointer）",
                "空闲列表",
                "分页分配"
            ],
            answer: 1,
            rationale: "TLAB 内分配是指针碰撞：将指针向前移动对象大小即可，比 CAS 操作快得多。"
        },
        {
            id: "jvm-w8-3-q3",
            question: "大对象可能直接分配到哪里？",
            options: [
                "只能在 TLAB",
                "老年代",
                "Metaspace",
                "栈"
            ],
            answer: 1,
            rationale: "超过 -XX:PretenureSizeThreshold 的大对象可能直接分配到老年代，避免在新生代来回复制。"
        },
        {
            id: "jvm-w8-3-q4",
            question: "逃逸分析的作用是什么？",
            options: [
                "分析内存泄漏",
                "判断对象是否逃逸出方法/线程，优化分配策略",
                "分析线程安全",
                "分析 GC 效率"
            ],
            answer: 1,
            rationale: "逃逸分析判断对象是否逃逸出方法或线程。未逃逸的对象可能栈上分配或标量替换，避免堆分配。"
        },
        {
            id: "jvm-w8-3-q5",
            question: "栈上分配的条件是什么？",
            options: [
                "所有对象都可以栈上分配",
                "启用逃逸分析、对象不逃逸、JIT 编译后的代码",
                "只需要启用逃逸分析",
                "手动指定"
            ],
            answer: 1,
            rationale: "栈上分配条件：启用逃逸分析（默认）、对象不逃逸出方法、JIT 编译后的代码中。解释执行不会栈上分配。"
        },
        {
            id: "jvm-w8-3-q6",
            question: "标量替换和栈上分配有什么区别？",
            options: [
                "完全相同",
                "标量替换将对象分解为字段分配到栈/寄存器，对象不存在",
                "栈上分配更彻底",
                "标量替换只用于数组"
            ],
            answer: 1,
            rationale: "标量替换比栈上分配更彻底：将对象分解为标量（基本类型或引用），直接分配到栈或寄存器，对象根本不存在。"
        },
        {
            id: "jvm-w8-3-q7",
            question: "TLAB 用完后会发生什么？",
            options: [
                "程序崩溃",
                "申请新 TLAB 或走慢速路径分配",
                "触发 Full GC",
                "等待其他线程释放"
            ],
            answer: 1,
            rationale: "TLAB 用完后申请新的 TLAB 或走慢速路径（在 Eden 区 CAS 分配或触发 GC）。"
        },
        {
            id: "jvm-w8-3-q8",
            question: "使用什么参数观察 TLAB 使用情况？",
            options: [
                "-XX:+PrintGC",
                "-XX:+PrintTLAB",
                "-XX:+PrintHeap",
                "-XX:+PrintAlloc"
            ],
            answer: 1,
            rationale: "-XX:+PrintTLAB 可以观察 TLAB 的使用情况和分配统计。"
        },
        {
            id: "jvm-w8-3-q9",
            question: "-XX:+DoEscapeAnalysis 默认是否启用？",
            options: [
                "否",
                "是",
                "取决于 GC",
                "取决于堆大小"
            ],
            answer: 1,
            rationale: "-XX:+DoEscapeAnalysis 默认启用。禁用后对象不会栈上分配或标量替换。"
        },
        {
            id: "jvm-w8-3-q10",
            question: "对象分配的快速路径是什么？",
            options: [
                "直接老年代分配",
                "TLAB 分配",
                "Eden CAS 分配",
                "Metaspace 分配"
            ],
            answer: 1,
            rationale: "快速路径是 TLAB 分配：检查 TLAB 剩余空间 → 指针碰撞 → 返回引用，无需同步。"
        },
        {
            id: "jvm-w8-3-q11",
            question: "分配失败时的处理顺序是什么？",
            options: [
                "直接 Full GC",
                "TLAB → Eden → Minor GC → 老年代/Full GC",
                "先老年代再新生代",
                "随机选择"
            ],
            answer: 1,
            rationale: "分配流程：TLAB 分配 → Eden 分配 → 触发 Minor GC → 检查晋升担保 → 老年代分配或 Full GC。"
        },
        {
            id: "jvm-w8-3-q12",
            question: "锁消除与逃逸分析的关系是什么？",
            options: [
                "无关",
                "基于逃逸分析，对不逃逸的对象消除不必要的锁",
                "锁消除是逃逸分析的前提",
                "互相冲突"
            ],
            answer: 1,
            rationale: "锁消除（Lock Elision）基于逃逸分析：如果对象不逃逸出线程，synchronized 可以被消除。"
        }
    ]
}
