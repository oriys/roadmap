import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "jvm-w9-1": {
        lessonId: "jvm-w9-1",
        background: [
            "【JMM 定义】Java 内存模型（Java Memory Model，JMM）是 JVM 规范的一部分，定义了多线程环境下共享变量的可见性和有序性规则。JMM 是一个抽象规范，不描述物理内存结构。",
            "【设计目标】JMM 要平衡两个目标：1）为程序员提供足够强的内存可见性保证，使并发编程可预测；2）给编译器和处理器足够的优化空间。这通过 happens-before 规则实现。",
            "【主内存与工作内存】JMM 抽象出两种内存：主内存（Main Memory）是所有线程共享的；工作内存（Working Memory）是每个线程私有的，存储变量的副本。线程对变量的操作必须在工作内存进行。",
            "【内存交互操作】JMM 定义了 8 种内存交互操作：lock、unlock、read、load、use、assign、store、write。这些操作必须满足特定规则，保证程序正确性。",
            "【与硬件的对应】JMM 的主内存大致对应物理内存/共享缓存，工作内存对应 CPU 寄存器和缓存。但 JMM 是抽象模型，不要与硬件直接对应。"
        ],
        keyDifficulties: [
            "【可见性问题】当一个线程修改共享变量后，其他线程不一定能立即看到新值。因为修改可能只在工作内存中，未刷新到主内存。这是多线程 bug 的常见来源。",
            "【有序性问题】编译器和处理器可能对指令重排序以优化性能。在单线程中重排序不影响结果，但在多线程中可能导致意外行为。JMM 通过 happens-before 规则限制重排序。",
            "【原子性问题】JMM 保证基本类型（除 long/double）的读写是原子的。但复合操作（如 i++）不是原子的。long/double 在 32 位 JVM 上可能非原子（64 位写入分两次）。",
            "【JMM vs 物理内存】JMM 是语言级规范，定义程序行为的约束。物理内存模型（如 x86-TSO）是硬件行为。JVM 负责在不同硬件上实现 JMM 语义。"
        ],
        handsOnPath: [
            "编写可见性问题示例：一个线程修改 flag，另一个线程循环检查，观察是否能看到更新。",
            "使用 JCStress 测试并发代码，检测可见性和有序性问题。",
            "使用 -XX:+UnlockDiagnosticVMOptions -XX:+PrintAssembly 查看生成的内存屏障指令。",
            "编写 DCL（双重检查锁定）单例，对比有无 volatile 的区别。",
            "使用 jcstress-samples 项目学习各种 JMM 边界情况。"
        ],
        selfCheck: [
            "JMM 是什么？它解决什么问题？",
            "主内存和工作内存分别是什么？它们之间如何交互？",
            "可见性问题是什么？如何解决？",
            "有序性问题是什么？什么是重排序？",
            "JMM 保证哪些操作的原子性？",
            "JMM 与物理内存模型有什么关系？"
        ],
        extensions: [
            "研究 JSR 133 的历史：Java 5 之前 JMM 的问题和修复。",
            "了解 C++ 内存模型与 Java 的异同。",
            "探索 Doug Lea 的 JMM Cookbook 了解 JMM 实现细节。",
            "研究 JMM 的 causality（因果性）要求。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.4",
            "https://shipilev.net/blog/2014/jmm-pragmatics/",
            "https://www.cs.umd.edu/~pugh/java/memoryModel/jsr133.pdf"
        ]
    },
    "jvm-w9-2": {
        lessonId: "jvm-w9-2",
        background: [
            "【happens-before 定义】happens-before 是 JMM 的核心概念，定义了操作之间的可见性关系。如果 A happens-before B，则 A 的执行结果对 B 可见，且 A 在 B 之前执行（逻辑上）。",
            "【程序顺序规则】同一线程中，按程序顺序，前面的操作 happens-before 后面的操作。这保证了单线程程序的顺序语义。注意：这不禁止重排序，只要结果等价。",
            "【监视器锁规则】对一个锁的 unlock 操作 happens-before 后续对同一锁的 lock 操作。这保证了 synchronized 块内的修改对后续获取同一锁的线程可见。",
            "【volatile 规则】对 volatile 变量的写 happens-before 后续对同一变量的读。这是 volatile 保证可见性的基础。",
            "【传递性规则】如果 A happens-before B，B happens-before C，则 A happens-before C。传递性使得可以建立复杂的 happens-before 链。"
        ],
        keyDifficulties: [
            "【其他 happens-before 规则】线程启动规则（start() 前的操作 happens-before 子线程的动作）；线程终止规则（线程所有动作 happens-before join() 返回）；中断规则（interrupt() happens-before 检测到中断）；对象终结规则（构造器结束 happens-before finalize）。",
            "【happens-before ≠ 时间顺序】happens-before 是可见性约束，不是时间顺序。A happens-before B 不意味着 A 时间上先执行。它只保证 A 的效果对 B 可见。",
            "【happens-before 与同步】建立 happens-before 关系需要显式同步（synchronized、volatile、Lock、并发集合等）。没有同步时，不同线程的操作没有 happens-before 关系。",
            "【数据竞争】当两个线程访问同一变量，至少一个是写，且没有 happens-before 关系时，存在数据竞争。数据竞争的程序行为是不确定的。"
        ],
        handsOnPath: [
            "编写代码展示监视器锁规则：synchronized 块保证可见性。",
            "编写代码展示 volatile 规则：volatile 变量的写对读可见。",
            "使用 Thread.start() 和 Thread.join() 建立 happens-before 关系。",
            "编写存在数据竞争的代码，使用 JCStress 检测并发问题。",
            "分析复杂程序的 happens-before 链，推导可见性保证。"
        ],
        selfCheck: [
            "什么是 happens-before 关系？它保证什么？",
            "列举常见的 happens-before 规则。",
            "happens-before 和时间顺序有什么区别？",
            "什么是数据竞争？如何避免？",
            "传递性规则有什么用途？",
            "synchronized 如何建立 happens-before 关系？"
        ],
        extensions: [
            "研究 C++11 内存模型中的 happens-before 和 synchronizes-with 关系。",
            "了解 Java 9 的 VarHandle 如何提供更细粒度的 happens-before 控制。",
            "探索 Lamport 的'happens-before'概念在分布式系统中的应用。",
            "研究 JMM 的形式化定义和证明。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.4.5",
            "https://gee.cs.oswego.edu/dl/jmm/cookbook.html",
            "https://www.baeldung.com/java-volatile#happens-before"
        ]
    },
    "jvm-w9-3": {
        lessonId: "jvm-w9-3",
        background: [
            "【重排序概念】为了优化性能，编译器和处理器可能改变指令的执行顺序。只要单线程语义不变，重排序是允许的。但在多线程环境中，重排序可能导致意外行为。",
            "【编译器重排序】编译器（javac、JIT）可能重排没有数据依赖的指令。例如，a = 1; b = 2 可能被重排为 b = 2; a = 1。编译器也可能进行更复杂的优化如公共子表达式消除。",
            "【处理器重排序】现代 CPU 使用乱序执行（Out-of-Order Execution）和写缓冲（Store Buffer）提高性能。不同 CPU 有不同的内存模型：x86 是相对强的 TSO，ARM/POWER 是弱内存模型。",
            "【数据依赖限制】如果两个操作访问同一变量且其中一个是写，则存在数据依赖。编译器和处理器不会重排数据依赖的操作（在单线程中）。",
            "【内存屏障】内存屏障（Memory Barrier/Fence）是禁止特定重排序的 CPU 指令。JVM 根据 JMM 语义在适当位置插入内存屏障。四种基本类型：LoadLoad、LoadStore、StoreLoad、StoreStore。"
        ],
        keyDifficulties: [
            "【as-if-serial 语义】单线程程序的执行结果必须与程序顺序执行相同，这是 as-if-serial 语义。编译器和处理器的优化必须遵守这个约束。但多线程可能观察到重排序效果。",
            "【StoreLoad 屏障】StoreLoad 是最强的屏障，禁止写后读重排序。volatile 写后需要 StoreLoad 屏障，这是 volatile 代价最高的原因。x86 使用 mfence 或 lock 前缀指令。",
            "【x86 vs ARM】x86 只允许 Store-Load 重排序（TSO 模型），其他重排序不需要显式屏障。ARM 允许所有类型重排序，需要更多屏障。这影响 JVM 在不同平台的性能。",
            "【控制依赖重排序】处理器可能对控制依赖的指令进行分支预测执行。if (flag) { x = a; } 中，即使 flag 为 false，x = a 也可能被预测执行。这需要内存屏障处理。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintAssembly 查看 volatile 变量生成的内存屏障指令。",
            "编写可能被重排序的代码，使用 JCStress 测试重排序效果。",
            "在 x86 和 ARM 模拟器上对比同一程序的行为差异。",
            "分析 DCL 单例在没有 volatile 时可能的重排序问题。",
            "使用 JMH 测量内存屏障的性能开销。"
        ],
        selfCheck: [
            "什么是重排序？为什么需要重排序？",
            "编译器重排序和处理器重排序有什么区别？",
            "什么是数据依赖？它如何限制重排序？",
            "四种内存屏障分别禁止什么类型的重排序？",
            "x86 和 ARM 的内存模型有什么区别？",
            "什么是 as-if-serial 语义？"
        ],
        extensions: [
            "研究 Intel 的 x86-TSO 内存模型规范。",
            "了解 ARM 和 POWER 弱内存模型的特点。",
            "探索 Linux 内核的内存屏障使用（barrier()、smp_mb() 等）。",
            "研究 RISC-V 的内存模型设计（RVWMO）。"
        ],
        sourceUrls: [
            "https://shipilev.net/blog/2014/jmm-pragmatics/#_reordering",
            "https://mechanical-sympathy.blogspot.com/2011/07/memory-barriersfences.html",
            "https://gee.cs.oswego.edu/dl/jmm/cookbook.html"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w9-1": [
        {
            id: "jvm-w9-1-q1",
            question: "JMM 是什么？",
            options: [
                "物理内存结构",
                "定义多线程环境下共享变量可见性和有序性规则的规范",
                "JVM 内存配置",
                "垃圾收集算法"
            ],
            answer: 1,
            rationale: "JMM（Java Memory Model）是 JVM 规范的一部分，定义了多线程环境下共享变量的可见性和有序性规则。"
        },
        {
            id: "jvm-w9-1-q2",
            question: "主内存和工作内存分别是什么？",
            options: [
                "堆内存和栈内存",
                "所有线程共享的内存和每个线程私有的内存副本",
                "Eden 和 Survivor",
                "方法区和堆"
            ],
            answer: 1,
            rationale: "主内存是所有线程共享的内存；工作内存是每个线程私有的，存储变量的副本。线程对变量的操作必须在工作内存进行。"
        },
        {
            id: "jvm-w9-1-q3",
            question: "可见性问题是什么？",
            options: [
                "变量名太长看不清",
                "一个线程修改共享变量后，其他线程不一定能立即看到新值",
                "变量没有初始化",
                "变量类型不匹配"
            ],
            answer: 1,
            rationale: "可见性问题：一个线程修改共享变量后，其他线程不一定能立即看到新值，因为修改可能只在工作内存中。"
        },
        {
            id: "jvm-w9-1-q4",
            question: "JMM 保证哪些操作的原子性？",
            options: [
                "所有操作",
                "基本类型（除 long/double）的读写",
                "只有 synchronized 块内的操作",
                "没有任何保证"
            ],
            answer: 1,
            rationale: "JMM 保证基本类型（除 long/double）的读写是原子的。long/double 在 32 位 JVM 上可能非原子。"
        },
        {
            id: "jvm-w9-1-q5",
            question: "有序性问题的原因是什么？",
            options: [
                "程序员写错了代码",
                "编译器和处理器对指令重排序",
                "网络延迟",
                "内存不足"
            ],
            answer: 1,
            rationale: "编译器和处理器可能对指令重排序以优化性能。在多线程中可能导致意外行为。"
        },
        {
            id: "jvm-w9-1-q6",
            question: "JMM 定义了几种内存交互操作？",
            options: [
                "4 种",
                "6 种",
                "8 种",
                "10 种"
            ],
            answer: 2,
            rationale: "JMM 定义了 8 种内存交互操作：lock、unlock、read、load、use、assign、store、write。"
        },
        {
            id: "jvm-w9-1-q7",
            question: "工作内存大致对应什么硬件结构？",
            options: [
                "硬盘",
                "CPU 寄存器和缓存",
                "网卡",
                "显卡"
            ],
            answer: 1,
            rationale: "JMM 的工作内存大致对应 CPU 寄存器和缓存，但 JMM 是抽象模型，不应与硬件直接对应。"
        },
        {
            id: "jvm-w9-1-q8",
            question: "i++ 操作是原子的吗？",
            options: [
                "是",
                "不是，是复合操作",
                "取决于 JVM",
                "只有 volatile 时是"
            ],
            answer: 1,
            rationale: "i++ 是复合操作（读取、加 1、写回），不是原子的。即使变量是 volatile 也不保证原子性。"
        },
        {
            id: "jvm-w9-1-q9",
            question: "JCStress 是什么工具？",
            options: [
                "性能测试工具",
                "并发正确性测试工具",
                "内存分析工具",
                "代码审查工具"
            ],
            answer: 1,
            rationale: "JCStress 是 OpenJDK 的并发正确性测试工具，可以检测 JMM 相关的可见性和有序性问题。"
        },
        {
            id: "jvm-w9-1-q10",
            question: "如何解决可见性问题？",
            options: [
                "增加内存",
                "使用 volatile、synchronized 或其他同步机制",
                "减少线程数",
                "使用更快的 CPU"
            ],
            answer: 1,
            rationale: "可见性问题通过同步机制解决：volatile 保证可见性，synchronized/Lock 提供互斥和可见性。"
        },
        {
            id: "jvm-w9-1-q11",
            question: "long 在 32 位 JVM 上读写可能出现什么问题？",
            options: [
                "性能问题",
                "可能非原子，64 位写入分两次",
                "类型转换问题",
                "精度问题"
            ],
            answer: 1,
            rationale: "long/double 是 64 位，在 32 位 JVM 上写入可能分两次 32 位操作，存在非原子性风险。"
        },
        {
            id: "jvm-w9-1-q12",
            question: "JMM 的两个设计目标是什么？",
            options: [
                "快速和稳定",
                "为程序员提供可见性保证，给编译器优化空间",
                "节省内存和提高性能",
                "支持多语言和跨平台"
            ],
            answer: 1,
            rationale: "JMM 平衡两个目标：为程序员提供足够的内存可见性保证；给编译器和处理器足够的优化空间。"
        }
    ],
    "jvm-w9-2": [
        {
            id: "jvm-w9-2-q1",
            question: "happens-before 关系保证什么？",
            options: [
                "时间顺序",
                "A 的执行结果对 B 可见",
                "A 和 B 不能并发",
                "A 比 B 执行更快"
            ],
            answer: 1,
            rationale: "如果 A happens-before B，则 A 的执行结果对 B 可见，且 A 在 B 之前执行（逻辑上）。"
        },
        {
            id: "jvm-w9-2-q2",
            question: "程序顺序规则是什么？",
            options: [
                "所有程序按顺序执行",
                "同一线程中，前面的操作 happens-before 后面的操作",
                "禁止重排序",
                "保证时间顺序"
            ],
            answer: 1,
            rationale: "程序顺序规则：同一线程中，按程序顺序，前面的操作 happens-before 后面的操作。"
        },
        {
            id: "jvm-w9-2-q3",
            question: "监视器锁规则是什么？",
            options: [
                "锁必须配对使用",
                "unlock happens-before 后续的 lock",
                "同一时间只能有一个锁",
                "锁有超时时间"
            ],
            answer: 1,
            rationale: "监视器锁规则：对一个锁的 unlock 操作 happens-before 后续对同一锁的 lock 操作。"
        },
        {
            id: "jvm-w9-2-q4",
            question: "volatile 规则是什么？",
            options: [
                "volatile 变量不能修改",
                "写 happens-before 后续的读",
                "volatile 变量更快",
                "volatile 变量是线程安全的"
            ],
            answer: 1,
            rationale: "volatile 规则：对 volatile 变量的写 happens-before 后续对同一变量的读。"
        },
        {
            id: "jvm-w9-2-q5",
            question: "happens-before 和时间顺序有什么关系？",
            options: [
                "完全相同",
                "happens-before 是可见性约束，不是时间顺序",
                "时间顺序决定 happens-before",
                "没有关系"
            ],
            answer: 1,
            rationale: "happens-before 是可见性约束，不是时间顺序。A happens-before B 不意味着 A 时间上先执行。"
        },
        {
            id: "jvm-w9-2-q6",
            question: "什么是数据竞争？",
            options: [
                "多线程竞争 CPU",
                "两个线程访问同一变量，至少一个是写，且没有 happens-before 关系",
                "线程之间竞争锁",
                "数据量太大"
            ],
            answer: 1,
            rationale: "数据竞争：两个线程访问同一变量，至少一个是写，且没有 happens-before 关系。数据竞争的程序行为不确定。"
        },
        {
            id: "jvm-w9-2-q7",
            question: "传递性规则有什么用？",
            options: [
                "传递变量值",
                "建立复杂的 happens-before 链",
                "传递锁的所有权",
                "传递线程优先级"
            ],
            answer: 1,
            rationale: "传递性规则：A hb B，B hb C，则 A hb C。可以建立复杂的 happens-before 链。"
        },
        {
            id: "jvm-w9-2-q8",
            question: "线程启动规则是什么？",
            options: [
                "线程必须手动启动",
                "start() 前的操作 happens-before 子线程的动作",
                "主线程先启动",
                "线程启动有顺序"
            ],
            answer: 1,
            rationale: "线程启动规则：主线程 start() 之前的操作 happens-before 子线程中的所有动作。"
        },
        {
            id: "jvm-w9-2-q9",
            question: "线程终止规则是什么？",
            options: [
                "线程必须正常终止",
                "线程所有动作 happens-before join() 返回",
                "终止后不能重启",
                "必须调用 stop()"
            ],
            answer: 1,
            rationale: "线程终止规则：线程中的所有操作 happens-before 其他线程从该线程 join() 返回。"
        },
        {
            id: "jvm-w9-2-q10",
            question: "如何建立 happens-before 关系？",
            options: [
                "自动建立",
                "使用同步机制（synchronized、volatile、Lock 等）",
                "调用特殊方法",
                "设置线程优先级"
            ],
            answer: 1,
            rationale: "建立 happens-before 关系需要显式同步：synchronized、volatile、Lock、并发集合等。"
        },
        {
            id: "jvm-w9-2-q11",
            question: "中断规则是什么？",
            options: [
                "中断会终止线程",
                "interrupt() happens-before 检测到中断",
                "中断必须处理",
                "中断有优先级"
            ],
            answer: 1,
            rationale: "中断规则：线程 interrupt() 调用 happens-before 被中断线程检测到中断（通过抛出异常或 isInterrupted()）。"
        },
        {
            id: "jvm-w9-2-q12",
            question: "对象终结规则是什么？",
            options: [
                "对象必须手动终结",
                "构造器结束 happens-before finalize() 开始",
                "finalize 必须调用",
                "终结后内存立即回收"
            ],
            answer: 1,
            rationale: "对象终结规则：对象构造器结束 happens-before finalize() 方法开始。"
        }
    ],
    "jvm-w9-3": [
        {
            id: "jvm-w9-3-q1",
            question: "什么是重排序？",
            options: [
                "对数组重新排序",
                "编译器和处理器改变指令执行顺序以优化性能",
                "线程调度顺序",
                "GC 顺序"
            ],
            answer: 1,
            rationale: "重排序是编译器和处理器改变指令执行顺序以优化性能。只要单线程语义不变，重排序是允许的。"
        },
        {
            id: "jvm-w9-3-q2",
            question: "编译器重排序和处理器重排序有什么区别？",
            options: [
                "没有区别",
                "编译器在编译时重排序，处理器在运行时重排序",
                "编译器更快",
                "处理器更准确"
            ],
            answer: 1,
            rationale: "编译器重排序发生在编译时；处理器重排序发生在运行时（乱序执行、写缓冲等）。"
        },
        {
            id: "jvm-w9-3-q3",
            question: "什么是数据依赖？",
            options: [
                "变量之间的依赖",
                "两个操作访问同一变量且其中一个是写",
                "线程之间的依赖",
                "模块之间的依赖"
            ],
            answer: 1,
            rationale: "数据依赖：两个操作访问同一变量且其中一个是写。编译器和处理器不会重排数据依赖的操作。"
        },
        {
            id: "jvm-w9-3-q4",
            question: "四种内存屏障分别是什么？",
            options: [
                "Read、Write、Lock、Unlock",
                "LoadLoad、LoadStore、StoreLoad、StoreStore",
                "Start、End、Begin、Finish",
                "In、Out、Up、Down"
            ],
            answer: 1,
            rationale: "四种基本内存屏障：LoadLoad、LoadStore、StoreLoad、StoreStore，分别禁止不同类型的重排序。"
        },
        {
            id: "jvm-w9-3-q5",
            question: "哪种内存屏障开销最大？",
            options: [
                "LoadLoad",
                "StoreLoad",
                "StoreStore",
                "LoadStore"
            ],
            answer: 1,
            rationale: "StoreLoad 是最强的屏障，开销最大。volatile 写后需要 StoreLoad 屏障。x86 使用 mfence 或 lock 前缀。"
        },
        {
            id: "jvm-w9-3-q6",
            question: "x86 和 ARM 内存模型有什么区别？",
            options: [
                "完全相同",
                "x86 只允许 Store-Load 重排序，ARM 允许所有类型重排序",
                "ARM 更强",
                "x86 不需要屏障"
            ],
            answer: 1,
            rationale: "x86 使用 TSO 模型，只允许 Store-Load 重排序。ARM 是弱内存模型，允许所有类型重排序，需要更多屏障。"
        },
        {
            id: "jvm-w9-3-q7",
            question: "什么是 as-if-serial 语义？",
            options: [
                "串行执行",
                "单线程程序的执行结果必须与程序顺序执行相同",
                "没有并行",
                "顺序一致性"
            ],
            answer: 1,
            rationale: "as-if-serial 语义：单线程程序的执行结果必须与程序顺序执行相同。优化必须遵守这个约束。"
        },
        {
            id: "jvm-w9-3-q8",
            question: "使用什么 JVM 参数查看生成的汇编代码？",
            options: [
                "-XX:+PrintGC",
                "-XX:+PrintAssembly",
                "-XX:+PrintCompilation",
                "-XX:+PrintFlags"
            ],
            answer: 1,
            rationale: "-XX:+PrintAssembly 可以查看 JIT 编译生成的汇编代码，包括内存屏障指令。需要 hsdis 插件。"
        },
        {
            id: "jvm-w9-3-q9",
            question: "DCL 单例没有 volatile 可能出现什么问题？",
            options: [
                "性能问题",
                "对象构造重排序，可能返回未完全初始化的对象",
                "编译错误",
                "内存泄漏"
            ],
            answer: 1,
            rationale: "没有 volatile 时，对象构造可能被重排序：先赋值引用再初始化字段。其他线程可能看到未完全初始化的对象。"
        },
        {
            id: "jvm-w9-3-q10",
            question: "什么是控制依赖重排序？",
            options: [
                "if 语句的重排序",
                "分支预测执行可能导致依赖分支条件的操作被提前执行",
                "循环的重排序",
                "switch 的重排序"
            ],
            answer: 1,
            rationale: "处理器可能对控制依赖的指令进行分支预测执行。if 条件为 false 时，内部操作也可能被预测执行。"
        },
        {
            id: "jvm-w9-3-q11",
            question: "JVM 如何实现 JMM 语义？",
            options: [
                "不做任何处理",
                "在适当位置插入内存屏障",
                "禁止所有优化",
                "使用软件模拟"
            ],
            answer: 1,
            rationale: "JVM 根据 JMM 语义在适当位置插入内存屏障，确保在不同硬件平台上实现正确的内存语义。"
        },
        {
            id: "jvm-w9-3-q12",
            question: "为什么 volatile 写比普通写开销大？",
            options: [
                "需要更多内存",
                "需要 StoreLoad 屏障刷新写缓冲",
                "需要加锁",
                "需要 GC"
            ],
            answer: 1,
            rationale: "volatile 写后需要 StoreLoad 屏障，确保写入对其他线程可见。这个屏障开销较大。"
        }
    ]
}
