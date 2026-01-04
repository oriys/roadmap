import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "jvm-w10-1": {
        lessonId: "jvm-w10-1",
        background: [
            "【volatile 定义】volatile 是 Java 的关键字，用于声明变量。volatile 变量的读写具有特殊的内存语义：写入立即刷新到主内存，读取直接从主内存获取。",
            "【可见性保证】volatile 保证可见性：当一个线程修改 volatile 变量后，新值对其他线程立即可见。这是通过禁止缓存和插入内存屏障实现的。",
            "【有序性保证】volatile 保证有序性：禁止 volatile 变量相关的重排序。具体地，volatile 写之前的操作不能重排到写之后；volatile 读之后的操作不能重排到读之前。",
            "【不保证原子性】volatile 不保证复合操作的原子性。例如 i++ 涉及读取、加 1、写回三个步骤，即使 i 是 volatile，多线程下仍可能出现竞态条件。",
            "【内存语义】volatile 写的内存语义：将工作内存中的所有变量刷新到主内存。volatile 读的内存语义：使工作内存无效，从主内存重新读取。这提供了比单纯可见性更强的保证。"
        ],
        keyDifficulties: [
            "【volatile 写-读的 happens-before】volatile 写 happens-before 后续的 volatile 读。利用这个规则可以建立跨线程的可见性：先写 volatile，再读 volatile，之前的所有写对之后的读可见。",
            "【DCL 单例】双重检查锁定（DCL）单例必须使用 volatile：instance = new Singleton() 可能被重排序为先赋值再初始化。其他线程可能看到非空但未完全初始化的对象。",
            "【volatile 数组】volatile 只保证数组引用的可见性，不保证数组元素的可见性。volatile int[] arr 中，arr 引用可见，但 arr[0] 的修改不保证可见。",
            "【性能开销】volatile 读的开销接近普通读（x86 上不需要额外屏障）。volatile 写开销较大，需要 StoreLoad 屏障。高并发写 volatile 可能成为性能瓶颈。"
        ],
        handsOnPath: [
            "编写状态标志示例：一个线程设置 volatile boolean stop = true，另一个线程轮询检测。",
            "验证 volatile 不保证原子性：多线程对 volatile int 进行 i++，观察最终结果。",
            "实现 DCL 单例，使用和不使用 volatile 对比。",
            "使用 JMH 测量 volatile 读写的性能开销。",
            "使用 -XX:+PrintAssembly 查看 volatile 生成的内存屏障。"
        ],
        selfCheck: [
            "volatile 保证什么？不保证什么？",
            "volatile 的内存语义是什么？",
            "为什么 DCL 单例需要 volatile？",
            "volatile 数组有什么特殊性？",
            "volatile 适用于什么场景？",
            "volatile 读和写的性能开销有什么区别？"
        ],
        extensions: [
            "研究 Java 9 VarHandle 提供的更细粒度内存语义。",
            "了解 C++ volatile 与 Java volatile 的区别。",
            "探索 Unsafe.putOrderedLong 等'lazy'写的语义和用途。",
            "研究 Disruptor 框架如何使用 volatile 实现高性能无锁队列。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.4.4",
            "https://www.baeldung.com/java-volatile",
            "https://shipilev.net/blog/2014/jmm-pragmatics/#_volatile"
        ]
    },
    "jvm-w10-2": {
        lessonId: "jvm-w10-2",
        background: [
            "【synchronized 作用】synchronized 是 Java 内置的同步机制，保证原子性（同一时间只有一个线程执行）、可见性（unlock 时刷新变量）、有序性（禁止临界区内外指令重排序）。",
            "【Monitor 概念】每个 Java 对象都关联一个监视器（Monitor）。synchronized 通过获取和释放对象的 Monitor 实现互斥。Monitor 由 ObjectMonitor 类实现（C++ 代码）。",
            "【字节码实现】synchronized 块使用 monitorenter 和 monitorexit 字节码指令。monitorenter 获取 Monitor，monitorexit 释放 Monitor。编译器会生成异常处理确保释放锁。",
            "【synchronized 方法】synchronized 方法通过 ACC_SYNCHRONIZED 方法访问标志实现。JVM 在方法调用时自动获取锁，方法返回时释放锁，无论正常返回还是异常。",
            "【可重入性】synchronized 是可重入的：同一线程可以多次获取同一对象的锁。每次获取锁计数加 1，每次释放减 1，归零时真正释放。这避免了自己死锁。"
        ],
        keyDifficulties: [
            "【对象头与锁状态】锁状态存储在对象头的 Mark Word 中。根据竞争情况，锁有四种状态：无锁、偏向锁、轻量级锁、重量级锁。状态只能升级不能降级。",
            "【Monitor 结构】ObjectMonitor 包含：EntryList（等待获取锁的线程）、WaitSet（调用 wait() 的线程）、Owner（当前持有锁的线程）、计数器。wait/notify 操作这些队列。",
            "【锁的范围】synchronized(this) 锁当前实例；synchronized(Class.class) 锁类对象（静态方法默认）；synchronized(obj) 锁任意对象。不同范围影响并发度。",
            "【死锁风险】多个线程以不同顺序获取多把锁可能死锁。避免方法：固定加锁顺序、使用 tryLock 超时、减少锁粒度。可用 jstack 诊断死锁。"
        ],
        handsOnPath: [
            "使用 javap -v 查看 synchronized 块生成的 monitorenter/monitorexit 指令。",
            "使用 javap -v 查看 synchronized 方法的 ACC_SYNCHRONIZED 标志。",
            "编写可重入锁示例：synchronized 方法调用另一个 synchronized 方法。",
            "使用 jstack 诊断死锁示例。",
            "使用 JOL 观察不同锁状态下 Mark Word 的变化。"
        ],
        selfCheck: [
            "synchronized 保证哪三个特性？",
            "什么是 Monitor？它如何实现互斥？",
            "synchronized 块和方法在字节码层面有什么区别？",
            "什么是锁的可重入性？",
            "锁有哪四种状态？存储在哪里？",
            "如何避免死锁？"
        ],
        extensions: [
            "研究 ReentrantLock 与 synchronized 的区别和选择。",
            "了解 StampedLock 的乐观读锁机制。",
            "探索 Java 21 的虚拟线程如何与 synchronized 交互（Pinning 问题）。",
            "研究 Project Loom 对 synchronized 的优化。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.1",
            "https://wiki.openjdk.org/display/HotSpot/Synchronization",
            "https://www.baeldung.com/java-synchronized#how-synchronization-works"
        ]
    },
    "jvm-w10-3": {
        lessonId: "jvm-w10-3",
        background: [
            "【锁优化背景】synchronized 在早期 JVM 中性能较差，因为总是使用操作系统互斥量。Java 6 引入了大量锁优化，使得无竞争或低竞争场景下 synchronized 性能大幅提升。",
            "【偏向锁】偏向锁针对只有一个线程反复获取同一锁的场景。首次获取锁时，在 Mark Word 中记录线程 ID。后续同一线程获取锁时，只需检查线程 ID，无需 CAS。",
            "【轻量级锁】轻量级锁用于多个线程交替（非竞争）获取锁的场景。在线程栈帧中创建 Lock Record，用 CAS 将 Mark Word 复制到 Lock Record 并更新 Mark Word 指向它。",
            "【自旋锁】当线程获取轻量级锁失败时，不立即阻塞，而是自旋（循环重试）一段时间。如果持有锁的线程很快释放，自旋线程可以立即获取锁，避免线程切换开销。",
            "【锁消除】JIT 编译器通过逃逸分析，如果确定锁对象不会逃逸出线程，则完全消除该锁。例如：方法内创建的 StringBuffer，即使使用 synchronized 方法也可能被消除。"
        ],
        keyDifficulties: [
            "【锁升级过程】无锁 → 偏向锁（第一个线程）→ 轻量级锁（有竞争但不激烈）→ 重量级锁（激烈竞争）。升级是单向的，不会降级（偏向锁可以重偏向或撤销）。",
            "【偏向锁撤销】当其他线程尝试获取偏向锁时，需要撤销偏向。撤销需要等待全局安全点（Safepoint），开销较大。Java 15 开始默认禁用偏向锁（-XX:-UseBiasedLocking）。",
            "【自适应自旋】HotSpot 使用自适应自旋：根据之前自旋的成功率动态调整自旋次数。如果经常成功，增加自旋次数；如果经常失败，减少甚至跳过自旋。",
            "【锁粗化】如果虚拟机检测到一连串操作都对同一对象加锁，会把锁的范围扩展到整个操作序列的外部，只加一次锁。例如循环内的 synchronized。"
        ],
        handsOnPath: [
            "使用 -XX:+PrintFlagsFinal | grep BiasedLock 查看偏向锁相关参数。",
            "使用 JOL 观察对象从无锁 → 偏向锁 → 轻量级锁 → 重量级锁的 Mark Word 变化。",
            "编写高竞争代码，使用 -XX:-UseBiasedLocking 对比启用和禁用偏向锁的性能。",
            "使用 -XX:+PrintEliminateLocks（调试版）观察锁消除。",
            "使用 JMH 测量不同竞争程度下 synchronized 的性能。"
        ],
        selfCheck: [
            "Java 6 引入了哪些锁优化？",
            "偏向锁适用于什么场景？如何工作？",
            "轻量级锁如何实现？使用什么技术？",
            "什么是自适应自旋？",
            "什么是锁消除？需要什么条件？",
            "锁升级的过程是什么？可以降级吗？"
        ],
        extensions: [
            "研究 Java 15 为什么默认禁用偏向锁。",
            "了解 JEP 374：Deprecate and Disable Biased Locking。",
            "探索 Graal 编译器的锁优化技术。",
            "研究 LMAX Disruptor 如何通过无锁设计避免锁开销。"
        ],
        sourceUrls: [
            "https://wiki.openjdk.org/display/HotSpot/Synchronization",
            "https://www.baeldung.com/java-biased-locking",
            "https://openjdk.org/jeps/374"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w10-1": [
        {
            id: "jvm-w10-1-q1",
            question: "volatile 保证什么？",
            options: [
                "原子性、可见性、有序性",
                "可见性和有序性，不保证原子性",
                "只保证原子性",
                "什么都不保证"
            ],
            answer: 1,
            rationale: "volatile 保证可见性（立即刷新/读取主内存）和有序性（禁止相关重排序），但不保证复合操作的原子性。"
        },
        {
            id: "jvm-w10-1-q2",
            question: "volatile 写的内存语义是什么？",
            options: [
                "只写当前变量",
                "将工作内存中的所有变量刷新到主内存",
                "只刷新 volatile 变量",
                "不刷新任何变量"
            ],
            answer: 1,
            rationale: "volatile 写的内存语义是将工作内存中的所有变量刷新到主内存，提供比单纯可见性更强的保证。"
        },
        {
            id: "jvm-w10-1-q3",
            question: "为什么 DCL 单例需要 volatile？",
            options: [
                "提高性能",
                "防止对象构造重排序，避免返回未完全初始化的对象",
                "保证原子性",
                "可选的优化"
            ],
            answer: 1,
            rationale: "new Singleton() 可能被重排序为先赋值再初始化。没有 volatile 可能返回非空但未完全初始化的对象。"
        },
        {
            id: "jvm-w10-1-q4",
            question: "volatile int[] arr 保证什么？",
            options: [
                "数组引用和元素都可见",
                "只保证数组引用可见，不保证元素可见",
                "只保证元素可见",
                "什么都不保证"
            ],
            answer: 1,
            rationale: "volatile 只保证数组引用的可见性，不保证数组元素的可见性。arr[0] 的修改不保证对其他线程可见。"
        },
        {
            id: "jvm-w10-1-q5",
            question: "volatile 读和写的性能开销有什么区别？",
            options: [
                "读开销更大",
                "写开销更大（需要 StoreLoad 屏障）",
                "开销相同",
                "都没有开销"
            ],
            answer: 1,
            rationale: "volatile 读开销接近普通读（x86 不需要额外屏障）。volatile 写需要 StoreLoad 屏障，开销较大。"
        },
        {
            id: "jvm-w10-1-q6",
            question: "volatile 适用于什么场景？",
            options: [
                "计数器",
                "状态标志、一写多读、双重检查锁定",
                "所有并发场景",
                "只用于基本类型"
            ],
            answer: 1,
            rationale: "volatile 适用于状态标志、一个线程写多个线程读、双重检查锁定等不需要原子性的场景。"
        },
        {
            id: "jvm-w10-1-q7",
            question: "多线程对 volatile int i++ 操作结果正确吗？",
            options: [
                "总是正确",
                "不正确，i++ 不是原子操作",
                "取决于线程数",
                "取决于 CPU"
            ],
            answer: 1,
            rationale: "即使 i 是 volatile，i++ 涉及读取、加 1、写回三个步骤，不是原子操作，多线程下会丢失更新。"
        },
        {
            id: "jvm-w10-1-q8",
            question: "volatile 如何保证有序性？",
            options: [
                "禁止所有重排序",
                "禁止 volatile 变量相关的重排序",
                "使用锁",
                "不保证有序性"
            ],
            answer: 1,
            rationale: "volatile 禁止相关重排序：写之前的操作不能重排到写之后；读之后的操作不能重排到读之前。"
        },
        {
            id: "jvm-w10-1-q9",
            question: "volatile 写 happens-before 什么？",
            options: [
                "任何读",
                "后续的 volatile 读",
                "前面的 volatile 读",
                "没有 happens-before"
            ],
            answer: 1,
            rationale: "volatile 写 happens-before 后续的 volatile 读。利用这个规则可以建立跨线程的可见性。"
        },
        {
            id: "jvm-w10-1-q10",
            question: "Java 9 VarHandle 提供什么？",
            options: [
                "替代 volatile",
                "更细粒度的内存语义控制",
                "更快的性能",
                "线程安全"
            ],
            answer: 1,
            rationale: "VarHandle 提供更细粒度的内存语义：plain、opaque、release/acquire、volatile 四种模式。"
        },
        {
            id: "jvm-w10-1-q11",
            question: "Unsafe.putOrderedLong 是什么语义？",
            options: [
                "volatile 语义",
                "lazy 写，只有 StoreStore 屏障",
                "普通写",
                "原子写"
            ],
            answer: 1,
            rationale: "putOrderedLong 是'lazy'写，只插入 StoreStore 屏障，不插入 StoreLoad。比 volatile 写开销小。"
        },
        {
            id: "jvm-w10-1-q12",
            question: "C++ volatile 和 Java volatile 有什么区别？",
            options: [
                "完全相同",
                "C++ volatile 不保证可见性和有序性",
                "C++ volatile 更强",
                "Java volatile 更弱"
            ],
            answer: 1,
            rationale: "C++ volatile 主要用于防止编译器优化（如硬件寄存器访问），不保证内存可见性和有序性。Java volatile 更强。"
        }
    ],
    "jvm-w10-2": [
        {
            id: "jvm-w10-2-q1",
            question: "synchronized 保证哪三个特性？",
            options: [
                "速度、安全、稳定",
                "原子性、可见性、有序性",
                "隔离性、一致性、持久性",
                "封装、继承、多态"
            ],
            answer: 1,
            rationale: "synchronized 保证原子性（互斥访问）、可见性（unlock 时刷新变量）、有序性（禁止临界区内外重排序）。"
        },
        {
            id: "jvm-w10-2-q2",
            question: "什么是 Monitor？",
            options: [
                "显示器",
                "每个对象关联的监视器，用于实现互斥",
                "监控工具",
                "线程调度器"
            ],
            answer: 1,
            rationale: "Monitor 是每个 Java 对象关联的监视器，synchronized 通过获取和释放 Monitor 实现互斥。"
        },
        {
            id: "jvm-w10-2-q3",
            question: "synchronized 块使用什么字节码指令？",
            options: [
                "lock/unlock",
                "monitorenter/monitorexit",
                "sync/unsync",
                "enter/exit"
            ],
            answer: 1,
            rationale: "synchronized 块使用 monitorenter 和 monitorexit 字节码指令获取和释放 Monitor。"
        },
        {
            id: "jvm-w10-2-q4",
            question: "synchronized 方法使用什么标志？",
            options: [
                "monitorenter",
                "ACC_SYNCHRONIZED",
                "ACC_LOCK",
                "ACC_MUTEX"
            ],
            answer: 1,
            rationale: "synchronized 方法通过 ACC_SYNCHRONIZED 方法访问标志实现，JVM 自动获取和释放锁。"
        },
        {
            id: "jvm-w10-2-q5",
            question: "锁状态存储在哪里？",
            options: [
                "栈帧",
                "对象头的 Mark Word",
                "方法区",
                "常量池"
            ],
            answer: 1,
            rationale: "锁状态存储在对象头的 Mark Word 中。根据竞争情况，锁有无锁、偏向锁、轻量级锁、重量级锁四种状态。"
        },
        {
            id: "jvm-w10-2-q6",
            question: "synchronized 是可重入的吗？",
            options: [
                "不是",
                "是，同一线程可多次获取同一锁",
                "取决于 JVM",
                "取决于锁对象"
            ],
            answer: 1,
            rationale: "synchronized 是可重入的：同一线程可以多次获取同一对象的锁，计数加减，归零时真正释放。"
        },
        {
            id: "jvm-w10-2-q7",
            question: "ObjectMonitor 包含哪些结构？",
            options: [
                "只有 Owner",
                "EntryList、WaitSet、Owner、计数器",
                "只有队列",
                "只有计数器"
            ],
            answer: 1,
            rationale: "ObjectMonitor 包含：EntryList（等待获取锁的线程）、WaitSet（wait 的线程）、Owner（持有锁的线程）、计数器。"
        },
        {
            id: "jvm-w10-2-q8",
            question: "如何诊断死锁？",
            options: [
                "重启应用",
                "使用 jstack 查看线程栈",
                "查看 GC 日志",
                "查看 CPU 使用率"
            ],
            answer: 1,
            rationale: "jstack <pid> 可以诊断死锁，会输出死锁的线程和持有/等待的锁信息。"
        },
        {
            id: "jvm-w10-2-q9",
            question: "synchronized(this) 和 synchronized(Class.class) 有什么区别？",
            options: [
                "没有区别",
                "前者锁实例，后者锁类对象（静态锁）",
                "前者更快",
                "后者更安全"
            ],
            answer: 1,
            rationale: "synchronized(this) 锁当前实例；synchronized(Class.class) 锁类对象，相当于静态方法的锁。"
        },
        {
            id: "jvm-w10-2-q10",
            question: "如何避免死锁？",
            options: [
                "使用更多锁",
                "固定加锁顺序、使用 tryLock 超时、减少锁粒度",
                "增加线程数",
                "使用 volatile"
            ],
            answer: 1,
            rationale: "避免死锁的方法：固定加锁顺序、使用 tryLock 超时、减少锁粒度、避免嵌套锁。"
        },
        {
            id: "jvm-w10-2-q11",
            question: "ReentrantLock 和 synchronized 的主要区别？",
            options: [
                "没有区别",
                "ReentrantLock 可中断、可超时、支持公平锁",
                "ReentrantLock 更慢",
                "synchronized 更灵活"
            ],
            answer: 1,
            rationale: "ReentrantLock 提供更多功能：可中断获取、超时获取、公平锁、多个条件变量、非块结构锁。"
        },
        {
            id: "jvm-w10-2-q12",
            question: "虚拟线程使用 synchronized 有什么问题？",
            options: [
                "没有问题",
                "可能导致 Pinning，阻塞平台线程",
                "不支持",
                "性能更好"
            ],
            answer: 1,
            rationale: "虚拟线程在 synchronized 块中阻塞时会 Pin 到平台线程，无法卸载。建议使用 ReentrantLock。"
        }
    ],
    "jvm-w10-3": [
        {
            id: "jvm-w10-3-q1",
            question: "Java 6 引入了哪些锁优化？",
            options: [
                "只有偏向锁",
                "偏向锁、轻量级锁、自旋锁、锁消除、锁粗化",
                "只有锁消除",
                "没有优化"
            ],
            answer: 1,
            rationale: "Java 6 引入了偏向锁、轻量级锁、自适应自旋、锁消除、锁粗化等大量优化。"
        },
        {
            id: "jvm-w10-3-q2",
            question: "偏向锁适用于什么场景？",
            options: [
                "高竞争场景",
                "只有一个线程反复获取同一锁的场景",
                "多线程交替获取锁",
                "所有场景"
            ],
            answer: 1,
            rationale: "偏向锁针对只有一个线程反复获取同一锁的场景。首次获取记录线程 ID，后续只需检查 ID。"
        },
        {
            id: "jvm-w10-3-q3",
            question: "轻量级锁使用什么技术？",
            options: [
                "系统调用",
                "CAS 操作",
                "信号量",
                "管程"
            ],
            answer: 1,
            rationale: "轻量级锁使用 CAS 将 Mark Word 复制到栈帧的 Lock Record 并更新 Mark Word 指向它。"
        },
        {
            id: "jvm-w10-3-q4",
            question: "什么是自适应自旋？",
            options: [
                "固定次数自旋",
                "根据之前自旋成功率动态调整自旋次数",
                "无限自旋",
                "不自旋"
            ],
            answer: 1,
            rationale: "自适应自旋根据之前自旋的成功率动态调整次数：经常成功则增加，经常失败则减少或跳过。"
        },
        {
            id: "jvm-w10-3-q5",
            question: "锁消除需要什么条件？",
            options: [
                "无条件",
                "通过逃逸分析确定锁对象不逃逸出线程",
                "手动标记",
                "使用特定锁"
            ],
            answer: 1,
            rationale: "锁消除需要逃逸分析确定锁对象不逃逸出线程。例如方法内创建的 StringBuffer。"
        },
        {
            id: "jvm-w10-3-q6",
            question: "锁升级的顺序是什么？",
            options: [
                "重量级锁 → 轻量级锁 → 偏向锁 → 无锁",
                "无锁 → 偏向锁 → 轻量级锁 → 重量级锁",
                "随机",
                "双向"
            ],
            answer: 1,
            rationale: "锁升级是单向的：无锁 → 偏向锁 → 轻量级锁 → 重量级锁。不会降级。"
        },
        {
            id: "jvm-w10-3-q7",
            question: "偏向锁撤销需要什么？",
            options: [
                "立即完成",
                "等待全局安全点（Safepoint）",
                "重启 JVM",
                "手动触发"
            ],
            answer: 1,
            rationale: "偏向锁撤销需要等待全局安全点，开销较大。这是 Java 15 默认禁用偏向锁的原因之一。"
        },
        {
            id: "jvm-w10-3-q8",
            question: "Java 15 对偏向锁做了什么？",
            options: [
                "优化偏向锁",
                "默认禁用偏向锁",
                "强制使用偏向锁",
                "移除偏向锁"
            ],
            answer: 1,
            rationale: "Java 15 默认禁用偏向锁（-XX:-UseBiasedLocking），因为偏向锁撤销开销大，现代应用竞争更多。"
        },
        {
            id: "jvm-w10-3-q9",
            question: "什么是锁粗化？",
            options: [
                "使锁更大",
                "将一连串对同一对象的加锁操作合并为一次",
                "使锁更细",
                "移除锁"
            ],
            answer: 1,
            rationale: "锁粗化将一连串对同一对象的加锁操作合并为一次，只加一次锁。例如循环内的 synchronized。"
        },
        {
            id: "jvm-w10-3-q10",
            question: "自旋锁的目的是什么？",
            options: [
                "提高并发度",
                "短暂等待避免线程切换开销",
                "减少锁数量",
                "增加公平性"
            ],
            answer: 1,
            rationale: "自旋锁让线程在获取锁失败时循环重试，如果持锁线程很快释放，可避免线程切换开销。"
        },
        {
            id: "jvm-w10-3-q11",
            question: "如何查看偏向锁相关参数？",
            options: [
                "jstat",
                "-XX:+PrintFlagsFinal | grep BiasedLock",
                "jmap",
                "jstack"
            ],
            answer: 1,
            rationale: "使用 -XX:+PrintFlagsFinal | grep BiasedLock 可以查看偏向锁相关的 JVM 参数设置。"
        },
        {
            id: "jvm-w10-3-q12",
            question: "Disruptor 框架如何避免锁开销？",
            options: [
                "使用更好的锁",
                "无锁设计，使用 CAS 和内存屏障",
                "使用更多线程",
                "使用偏向锁"
            ],
            answer: 1,
            rationale: "LMAX Disruptor 使用无锁设计，通过环形缓冲区、序号、CAS 和内存屏障实现高性能并发。"
        }
    ]
}
