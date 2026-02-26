import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const locksStages: Stage[] = [
    {
        id: "phase1",
        title: "第一阶段：并发基础与锁原理",
        duration: "第 1-3 周",
        goal: "理解并发编程的核心问题，掌握各类锁的原理与适用场景。",
        weeks: [
            {
                id: "w1",
                title: "第 1 周：并发编程基础",
                summary: "从进程/线程到临界区，理解为什么需要锁。",
                overview: "并发是现代软件的基石，但共享资源的访问带来了竞态条件。本周建立并发编程的心智模型：理解临界区、竞态条件、内存可见性问题，以及原子操作如何在硬件层面保证正确性。",
                keyPoints: [
                    "进程隔离 vs 线程共享内存 vs 协程轻量调度，不同并发模型的权衡。",
                    "临界区（Critical Section）的定义：同一时刻只能有一个执行单元访问的代码段。",
                    "happens-before 关系与内存可见性：为什么 CPU 缓存和编译器优化会导致数据不一致。",
                    "原子操作（Atomic）与内存屏障（Memory Barrier）的硬件支持。",
                ],
                lessons: [
                    {
                        id: "w1-1",
                        title: "进程、线程与协程：并发模型的演进",
                        detail: "理解操作系统如何调度执行单元，进程隔离的代价，线程共享内存的便利与风险，以及协程的用户态调度优势。",
                        keyPoints: [
                            "进程拥有独立地址空间，切换开销大但隔离性强；线程共享地址空间，切换快但需同步。",
                            "协程（goroutine/coroutine）在用户态调度，避免内核态切换开销，支持百万级并发。",
                            "并发模型的选择取决于隔离需求、通信方式和性能要求。",
                        ],
                        resources: [
                            { title: "Operating Systems: Three Easy Pieces - Concurrency", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf" },
                            { title: "The Linux Kernel - Processes", url: "https://www.kernel.org/doc/html/latest/admin-guide/mm/concepts.html" },
                            { title: "Go Concurrency Patterns (Google I/O)", url: "https://go.dev/talks/2012/concurrency.slide" },
                        ],
                    },
                    {
                        id: "w1-2",
                        title: "临界区与竞态条件：数据竞争的根源",
                        detail: "多线程同时读写共享变量会导致不可预测的结果。通过银行转账、计数器递增等经典案例，理解竞态条件的危害。",
                        keyPoints: [
                            "竞态条件（Race Condition）的本质是非原子的「检查-操作」序列被并发打断。",
                            "数据竞争（Data Race）是竞态条件的子集：两个线程同时访问同一内存且至少一个是写操作。",
                            "工具检测是发现数据竞争的关键：Go race detector、ThreadSanitizer 可在运行时捕获。",
                        ],
                        resources: [
                            { title: "CWE-362: Race Condition", url: "https://cwe.mitre.org/data/definitions/362.html" },
                            { title: "Data Race Detector (Go)", url: "https://go.dev/doc/articles/race_detector" },
                            { title: "ThreadSanitizer (C/C++)", url: "https://clang.llvm.org/docs/ThreadSanitizer.html" },
                        ],
                    },
                    {
                        id: "w1-3",
                        title: "内存可见性与 Happens-Before 关系",
                        detail: "CPU 缓存、编译器重排序、指令乱序执行都可能导致线程看到「过期」数据。理解 Java/Go/C++ 的内存模型与 happens-before 规则。",
                        keyPoints: [
                            "每个 CPU 核心有独立缓存（L1/L2），写入可能不会立即对其他核心可见。",
                            "Happens-before 是内存模型的核心抽象：如果 A happens-before B，则 A 的效果对 B 可见。",
                            "volatile（Java）、atomic（C++/Go）通过内存屏障建立 happens-before 关系。",
                        ],
                        resources: [
                            { title: "The Java Memory Model", url: "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.4" },
                            { title: "The Go Memory Model", url: "https://go.dev/ref/mem" },
                            { title: "C++ Memory Model", url: "https://en.cppreference.com/w/cpp/language/memory_model" },
                        ],
                    },
                    {
                        id: "w1-4",
                        title: "原子操作与内存屏障：硬件层面的保障",
                        detail: "现代 CPU 提供 CAS、LL/SC 等原子指令，内存屏障确保操作顺序。这是所有高级同步原语的基础。",
                        keyPoints: [
                            "CAS（Compare-And-Swap）是最常用的原子指令，x86 用 CMPXCHG，ARM 用 LL/SC 对实现。",
                            "内存屏障分为读屏障、写屏障和全屏障，防止 CPU 和编译器对指令重排序。",
                            "原子操作是锁、信号量、无锁数据结构等所有同步机制的底层基石。",
                        ],
                        resources: [
                            { title: "std::atomic (C++ Reference)", url: "https://en.cppreference.com/w/cpp/atomic/atomic" },
                            { title: "java.util.concurrent.atomic (Java)", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/package-summary.html" },
                            { title: "sync/atomic (Go)", url: "https://pkg.go.dev/sync/atomic" },
                        ],
                    },
                ],
            },
            {
                id: "w2",
                title: "第 2 周：锁的基本类型与实现",
                summary: "互斥锁、读写锁、自旋锁、条件变量的原理与场景。",
                overview: "锁是保护临界区最直接的工具。本周深入理解各类锁的实现原理、性能特点与适用场景：互斥锁的排他性、读写锁的读写分离、自旋锁的忙等待、条件变量的等待-通知机制。",
                keyPoints: [
                    "互斥锁（Mutex）：最基础的排他锁，保证同一时刻只有一个线程进入临界区。",
                    "读写锁（RWLock）：读多写少场景的优化，允许多个读者同时访问。",
                    "自旋锁（Spinlock）：忙等待而非阻塞，适合临界区极短的场景。",
                    "条件变量（Condition Variable）：线程间的等待-通知协作机制。",
                ],
                lessons: [
                    {
                        id: "w2-1",
                        title: "互斥锁（Mutex）：排他访问的基石",
                        detail: "从 Peterson 算法到 Futex，理解互斥锁如何保证互斥性。探讨公平锁 vs 非公平锁、可重入锁的设计。",
                        keyPoints: [
                            "Futex（Fast Userspace Mutex）结合用户态自旋与内核态阻塞，是 Linux 互斥锁的核心实现。",
                            "公平锁按申请顺序授予锁，避免饥饿但吞吐量较低；非公平锁允许插队，吞吐量更高。",
                            "可重入锁允许同一线程多次获取同一把锁而不死锁，需维护持有计数。",
                        ],
                        resources: [
                            { title: "pthread_mutex (POSIX)", url: "https://man7.org/linux/man-pages/man3/pthread_mutex_lock.3p.html" },
                            { title: "sync.Mutex (Go)", url: "https://pkg.go.dev/sync#Mutex" },
                            { title: "Futex Overview (Linux)", url: "https://man7.org/linux/man-pages/man2/futex.2.html" },
                        ],
                    },
                    {
                        id: "w2-2",
                        title: "读写锁（RWLock）：读多写少的优化",
                        detail: "允许并发读取但独占写入。理解读者优先 vs 写者优先策略，以及写饥饿问题。",
                        keyPoints: [
                            "读锁（共享锁）允许多个读者同时持有；写锁（排他锁）要求独占访问。",
                            "读者优先策略可能导致写者饥饿；写者优先策略可能导致读者等待时间增加。",
                            "读写锁适合读写比例悬殊的场景，若写操作频繁则退化为互斥锁甚至更差。",
                        ],
                        resources: [
                            { title: "sync.RWMutex (Go)", url: "https://pkg.go.dev/sync#RWMutex" },
                            { title: "ReentrantReadWriteLock (Java)", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html" },
                            { title: "pthread_rwlock (POSIX)", url: "https://man7.org/linux/man-pages/man3/pthread_rwlock_rdlock.3p.html" },
                        ],
                    },
                    {
                        id: "w2-3",
                        title: "自旋锁与混合锁：忙等待的权衡",
                        detail: "自旋锁在等待时不让出 CPU，适合持锁时间极短的场景。现代锁常采用先自旋后阻塞的混合策略。",
                        keyPoints: [
                            "自旋锁在持锁时间小于两次上下文切换的开销时更高效。",
                            "混合锁（Adaptive Lock）先自旋若干次，超时后再进入内核阻塞等待。",
                            "在单核 CPU 上使用自旋锁无意义，因为持锁线程无法在自旋线程运行时释放锁。",
                        ],
                        resources: [
                            { title: "Spinlock (Linux Kernel)", url: "https://www.kernel.org/doc/html/latest/locking/spinlocks.html" },
                            { title: "Adaptive Spinning (JVM)", url: "https://wiki.openjdk.org/display/HotSpot/Synchronization" },
                            { title: "Go runtime Mutex 实现", url: "https://github.com/golang/go/blob/master/src/runtime/lock_futex.go" },
                        ],
                    },
                    {
                        id: "w2-4",
                        title: "条件变量：等待与通知的协作",
                        detail: "条件变量允许线程在特定条件不满足时等待，并在条件满足时被唤醒。理解 wait/signal/broadcast 的语义与虚假唤醒。",
                        resources: [
                            { title: "pthread_cond (POSIX)", url: "https://man7.org/linux/man-pages/man3/pthread_cond_wait.3p.html" },
                            { title: "sync.Cond (Go)", url: "https://pkg.go.dev/sync#Cond" },
                            { title: "Condition (Java)", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/Condition.html" },
                        ],
                    },
                ],
            },
            {
                id: "w3",
                title: "第 3 周：死锁、活锁与饥饿",
                summary: "并发程序的典型病症：如何预防、检测与恢复。",
                overview: "锁使用不当会导致死锁（互相等待）、活锁（无进展的忙碌）、饥饿（无限等待）。本周学习这些问题的识别方法与解决策略。",
                keyPoints: [
                    "死锁的四个必要条件：互斥、占有等待、非抢占、循环等待。",
                    "死锁预防（破坏必要条件）、避免（银行家算法）、检测与恢复。",
                    "活锁：线程在不断重试中消耗 CPU 却无法前进。",
                    "饥饿：低优先级线程永远得不到资源。",
                ],
                lessons: [
                    {
                        id: "w3-1",
                        title: "死锁的四个必要条件与经典案例",
                        detail: "哲学家就餐问题是死锁的经典模型。理解互斥、占有等待、非抢占、循环等待如何共同导致死锁。",
                        keyPoints: [
                            "四个必要条件缺一不可：互斥、占有等待、非抢占、循环等待同时成立才会死锁。",
                            "哲学家就餐问题中每人先拿左叉再拿右叉，形成循环等待导致死锁。",
                            "破坏任意一个条件即可预防死锁，如统一锁的获取顺序可破坏循环等待。",
                        ],
                        resources: [
                            { title: "Deadlock (Wikipedia)", url: "https://en.wikipedia.org/wiki/Deadlock" },
                            { title: "Dining Philosophers Problem", url: "https://en.wikipedia.org/wiki/Dining_philosophers_problem" },
                            { title: "OSTEP - Deadlock", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-bugs.pdf" },
                        ],
                    },
                    {
                        id: "w3-2",
                        title: "死锁预防与避免：银行家算法",
                        detail: "通过破坏死锁的必要条件来预防，或使用银行家算法动态避免不安全状态。理解安全状态与资源分配图。",
                        keyPoints: [
                            "银行家算法在每次资源请求前模拟分配，检查系统是否仍处于安全状态。",
                            "安全状态意味着存在至少一种调度顺序让所有进程都能完成。",
                            "实际工程中银行家算法开销较大，更常用锁排序和超时机制来预防死锁。",
                        ],
                        resources: [
                            { title: "Banker's Algorithm (Wikipedia)", url: "https://en.wikipedia.org/wiki/Banker%27s_algorithm" },
                            { title: "Deadlock Prevention (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/deadlock-prevention/" },
                            { title: "Resource Allocation Graph", url: "https://www.geeksforgeeks.org/resource-allocation-graph-rag-in-operating-system/" },
                        ],
                    },
                    {
                        id: "w3-3",
                        title: "死锁检测与恢复策略",
                        detail: "当无法预防或避免时，需要检测死锁并恢复。理解等待图、超时机制、进程终止与资源抢占策略。",
                        resources: [
                            { title: "Deadlock Detection Algorithm", url: "https://www.geeksforgeeks.org/deadlock-detection-algorithm-in-operating-system/" },
                            { title: "MySQL InnoDB Deadlock Detection", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-deadlock-detection.html" },
                            { title: "Go runtime Deadlock Detection", url: "https://go.dev/ref/spec#Program_execution" },
                        ],
                    },
                    {
                        id: "w3-4",
                        title: "活锁与饥饿：其他并发陷阱",
                        detail: "活锁中线程不断重试但无法前进；饥饿中低优先级线程永远等待。理解退避策略与公平调度。",
                        resources: [
                            { title: "Livelock (Wikipedia)", url: "https://en.wikipedia.org/wiki/Deadlock#Livelock" },
                            { title: "Starvation (Wikipedia)", url: "https://en.wikipedia.org/wiki/Starvation_(computer_science)" },
                            { title: "Exponential Backoff", url: "https://en.wikipedia.org/wiki/Exponential_backoff" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase2",
        title: "第二阶段：编程语言中的锁",
        duration: "第 4-6 周",
        goal: "掌握主流语言的并发原语，理解无锁编程的原理与实践。",
        weeks: [
            {
                id: "w4",
                title: "第 4 周：Java 并发锁体系",
                summary: "synchronized、ReentrantLock、StampedLock 与原子类。",
                overview: "Java 提供了丰富的并发工具：从内置的 synchronized 到灵活的 Lock 接口，从悲观锁到乐观读的 StampedLock。本周系统学习 Java 并发锁的设计与最佳实践。",
                keyPoints: [
                    "synchronized 与 intrinsic lock：简单但功能有限，JVM 做了大量优化（偏向锁、轻量级锁）。",
                    "ReentrantLock：可中断、可超时、可公平，tryLock 支持非阻塞获取。",
                    "StampedLock：乐观读避免读锁开销，适合读远多于写的场景。",
                    "Atomic 类：基于 CAS 的无锁原子操作，适合简单计数器场景。",
                ],
                lessons: [
                    {
                        id: "w4-1",
                        title: "synchronized 与内置锁优化",
                        detail: "synchronized 是 Java 最基础的同步机制。理解监视器锁、偏向锁、轻量级锁、重量级锁的升级过程。",
                        keyPoints: [
                            "JVM 对 synchronized 做了三级优化：偏向锁→轻量级锁→重量级锁，按竞争程度升级。",
                            "偏向锁假设只有一个线程访问，无竞争时几乎零开销；出现竞争则撤销升级。",
                            "synchronized 的 monitor 关联对象头的 Mark Word，通过 CAS 实现锁状态转换。",
                        ],
                        resources: [
                            { title: "Intrinsic Locks and Synchronization (Oracle)", url: "https://docs.oracle.com/javase/tutorial/essential/concurrency/locksync.html" },
                            { title: "Biased Locking (JVM)", url: "https://wiki.openjdk.org/display/HotSpot/Synchronization" },
                            { title: "Java synchronized 原理", url: "https://www.baeldung.com/java-synchronized" },
                        ],
                    },
                    {
                        id: "w4-2",
                        title: "ReentrantLock：灵活的显式锁",
                        detail: "ReentrantLock 提供了 synchronized 所缺少的特性：可中断获取、超时获取、公平模式、多条件变量。",
                        keyPoints: [
                            "lockInterruptibly() 允许等待锁时响应中断，避免线程无限阻塞。",
                            "tryLock(timeout) 支持超时获取锁，适合需要快速失败的场景。",
                            "ReentrantLock 基于 AQS（AbstractQueuedSynchronizer）实现，理解 AQS 是掌握 Java 并发的关键。",
                        ],
                        resources: [
                            { title: "ReentrantLock (Java SE 21)", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html" },
                            { title: "Lock Objects (Oracle Tutorial)", url: "https://docs.oracle.com/javase/tutorial/essential/concurrency/newlocks.html" },
                            { title: "ReentrantLock vs synchronized", url: "https://www.baeldung.com/java-concurrent-locks" },
                        ],
                    },
                    {
                        id: "w4-3",
                        title: "StampedLock 与乐观读",
                        detail: "StampedLock 的乐观读模式在无竞争时几乎无开销。理解 stamp 验证机制与升级为悲观锁的时机。",
                        resources: [
                            { title: "StampedLock (Java SE 21)", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html" },
                            { title: "StampedLock Guide (Baeldung)", url: "https://www.baeldung.com/java-stamped-lock" },
                            { title: "Optimistic Locking Pattern", url: "https://martinfowler.com/eaaCatalog/optimisticOfflineLock.html" },
                        ],
                    },
                    {
                        id: "w4-4",
                        title: "Atomic 类与 CAS 操作",
                        detail: "AtomicInteger、AtomicReference 等类基于 CAS 实现无锁原子操作。理解 ABA 问题与 AtomicStampedReference。",
                        resources: [
                            { title: "java.util.concurrent.atomic (Java SE 21)", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/package-summary.html" },
                            { title: "Atomic Variables (Oracle Tutorial)", url: "https://docs.oracle.com/javase/tutorial/essential/concurrency/atomicvars.html" },
                            { title: "AtomicStampedReference", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicStampedReference.html" },
                        ],
                    },
                ],
            },
            {
                id: "w5",
                title: "第 5 周：Go 并发原语",
                summary: "Mutex、RWMutex、WaitGroup、Channel 与 sync.Map。",
                overview: "Go 以「通过通信共享内存」为设计理念，但仍提供了传统的锁机制。本周学习 Go 的并发原语与 channel 的取舍。",
                keyPoints: [
                    "sync.Mutex / sync.RWMutex：Go 的基础互斥锁与读写锁，不支持重入。",
                    "sync.WaitGroup：等待一组 goroutine 完成，常用于并发任务编排。",
                    "sync.Cond：条件变量，与 Mutex 配合实现等待-通知。",
                    "sync.Map：为特定场景优化的并发安全 map（读多写少、key 稳定）。",
                ],
                lessons: [
                    {
                        id: "w5-1",
                        title: "sync.Mutex 与 sync.RWMutex 实践",
                        detail: "Go 的 Mutex 简洁高效但不支持重入。RWMutex 适合读多写少场景。理解锁的正确使用模式与常见错误。",
                        keyPoints: [
                            "Go 的 Mutex 不可重入，同一 goroutine 重复 Lock() 会直接死锁。",
                            "惯用模式是 mu.Lock(); defer mu.Unlock()，确保异常路径也能释放锁。",
                            "RWMutex 的写锁会等待所有已持有的读锁释放，读锁过多时写操作可能饥饿。",
                        ],
                        resources: [
                            { title: "sync.Mutex (Go)", url: "https://pkg.go.dev/sync#Mutex" },
                            { title: "sync.RWMutex (Go)", url: "https://pkg.go.dev/sync#RWMutex" },
                            { title: "Go by Example: Mutexes", url: "https://gobyexample.com/mutexes" },
                        ],
                    },
                    {
                        id: "w5-2",
                        title: "WaitGroup、Once 与并发编排",
                        detail: "WaitGroup 等待多个 goroutine 完成；Once 确保初始化只执行一次。掌握 goroutine 生命周期管理。",
                        keyPoints: [
                            "WaitGroup.Add() 必须在 goroutine 启动前调用，否则可能在 Wait() 之前来不及注册。",
                            "sync.Once 保证函数只执行一次，即使多个 goroutine 同时调用，适合懒初始化。",
                            "goroutine 泄漏是常见问题，必须确保每个 goroutine 有明确的退出条件。",
                        ],
                        resources: [
                            { title: "sync.WaitGroup (Go)", url: "https://pkg.go.dev/sync#WaitGroup" },
                            { title: "sync.Once (Go)", url: "https://pkg.go.dev/sync#Once" },
                            { title: "Go by Example: WaitGroups", url: "https://gobyexample.com/waitgroups" },
                        ],
                    },
                    {
                        id: "w5-3",
                        title: "sync.Cond 与 Channel 的选择",
                        detail: "条件变量适合复杂的等待条件；Channel 更符合 Go 的并发哲学。理解两者的适用场景与权衡。",
                        resources: [
                            { title: "sync.Cond (Go)", url: "https://pkg.go.dev/sync#Cond" },
                            { title: "Go Concurrency Patterns", url: "https://go.dev/blog/pipelines" },
                            { title: "Share Memory By Communicating", url: "https://go.dev/blog/codelab-share" },
                        ],
                    },
                    {
                        id: "w5-4",
                        title: "sync.Map 与并发安全集合",
                        detail: "sync.Map 为特定场景优化，不适合所有并发 map 需求。理解其内部结构与使用场景。",
                        resources: [
                            { title: "sync.Map (Go)", url: "https://pkg.go.dev/sync#Map" },
                            { title: "sync.Pool (Go)", url: "https://pkg.go.dev/sync#Pool" },
                            { title: "When to use sync.Map", url: "https://medium.com/@deckarep/the-new-kid-in-town-gos-sync-map-de24a6bf7c2c" },
                        ],
                    },
                ],
            },
            {
                id: "w6",
                title: "第 6 周：无锁编程与原子操作",
                summary: "CAS、ABA 问题、无锁数据结构与内存顺序。",
                overview: "无锁编程避免了锁的开销与死锁风险，但实现复杂且易出错。本周深入 CAS 原理、ABA 问题、无锁队列等高级话题。",
                keyPoints: [
                    "CAS（Compare-And-Swap）：无锁编程的基石，硬件级别的原子操作。",
                    "ABA 问题：值从 A 变 B 再变 A，CAS 无法感知。解决方案：版本号、引用标记。",
                    "无锁数据结构：无锁队列（Michael-Scott Queue）、无锁栈等。",
                    "内存顺序（Memory Order）：acquire/release/seq_cst 的语义与选择。",
                ],
                lessons: [
                    {
                        id: "w6-1",
                        title: "CAS 原理与无锁编程基础",
                        detail: "CAS 是无锁编程的核心：比较并交换，失败则重试。理解 CAS loop 模式与其局限性。",
                        keyPoints: [
                            "CAS loop 模式：读取旧值→计算新值→CAS 尝试更新→失败则重试，直到成功。",
                            "高竞争下 CAS 重试次数增多，性能可能不如锁；需评估竞争程度再选择方案。",
                            "无锁（Lock-Free）保证至少一个线程能进展，但不保证所有线程都能进展（非 Wait-Free）。",
                        ],
                        resources: [
                            { title: "Compare-and-swap (Wikipedia)", url: "https://en.wikipedia.org/wiki/Compare-and-swap" },
                            { title: "Lock-Free Programming (Baeldung)", url: "https://www.baeldung.com/lock-free-programming" },
                            { title: "LWN: Lockless patterns", url: "https://lwn.net/Articles/847973/" },
                        ],
                    },
                    {
                        id: "w6-2",
                        title: "ABA 问题与解决方案",
                        detail: "ABA 问题是 CAS 的经典陷阱。理解问题场景，学习版本号（AtomicStampedReference）与标记引用等解决方案。",
                        keyPoints: [
                            "ABA 问题在无锁栈/队列中尤为危险：节点被回收又重新分配到同一地址。",
                            "AtomicStampedReference 为每次 CAS 附加一个单调递增的版本号，彻底避免 ABA。",
                            "Hazard Pointer 是另一种方案，通过延迟回收确保被引用的节点不会被复用。",
                        ],
                        resources: [
                            { title: "ABA Problem (Wikipedia)", url: "https://en.wikipedia.org/wiki/ABA_problem" },
                            { title: "AtomicStampedReference (Java)", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicStampedReference.html" },
                            { title: "Hazard Pointers", url: "https://en.wikipedia.org/wiki/Hazard_pointer" },
                        ],
                    },
                    {
                        id: "w6-3",
                        title: "无锁队列与栈的实现",
                        detail: "Michael-Scott 无锁队列是经典实现。理解无锁数据结构的设计思路与正确性证明。",
                        resources: [
                            { title: "Michael-Scott Queue (Paper)", url: "https://www.cs.rochester.edu/~scott/papers/1996_PODC_queues.pdf" },
                            { title: "ConcurrentLinkedQueue (Java)", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentLinkedQueue.html" },
                            { title: "Lock-Free Stack", url: "https://en.wikipedia.org/wiki/Treiber_stack" },
                        ],
                    },
                    {
                        id: "w6-4",
                        title: "内存顺序与 Memory Order",
                        detail: "不同的内存顺序提供不同的同步保证。理解 relaxed/acquire/release/seq_cst 的语义与性能影响。",
                        resources: [
                            { title: "std::memory_order (C++)", url: "https://en.cppreference.com/w/cpp/atomic/memory_order" },
                            { title: "Memory Ordering (Go)", url: "https://go.dev/ref/mem" },
                            { title: "Memory Barriers (Linux Kernel)", url: "https://www.kernel.org/doc/html/latest/core-api/wrappers/memory-barriers.html" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase3",
        title: "第三阶段：数据库锁机制",
        duration: "第 7-8 周",
        goal: "深入理解数据库事务隔离与锁机制，掌握 MVCC 与锁优化。",
        weeks: [
            {
                id: "w7",
                title: "第 7 周：数据库事务与隔离级别",
                summary: "ACID、隔离级别、MVCC 与乐观/悲观锁。",
                overview: "数据库需要在并发访问下保证数据一致性。本周学习事务的 ACID 特性、四种隔离级别、MVCC 如何实现非阻塞读，以及乐观锁与悲观锁的选择。",
                keyPoints: [
                    "ACID：原子性、一致性、隔离性、持久性是事务的基本保证。",
                    "隔离级别：Read Uncommitted → Read Committed → Repeatable Read → Serializable。",
                    "脏读、不可重复读、幻读：不同隔离级别允许的异常现象。",
                    "MVCC：多版本并发控制，读不阻塞写、写不阻塞读。",
                ],
                lessons: [
                    {
                        id: "w7-1",
                        title: "ACID 与事务基础",
                        detail: "事务是数据库操作的逻辑单元，ACID 确保其正确性。理解 commit/rollback、事务日志（WAL）与崩溃恢复。",
                        keyPoints: [
                            "WAL（Write-Ahead Logging）先写日志再写数据，崩溃后通过重放日志恢复一致状态。",
                            "原子性通过 undo log 实现回滚，持久性通过 redo log 保证已提交数据不丢失。",
                            "事务应尽量短小，长事务会持有锁时间过长并消耗大量 MVCC 版本资源。",
                        ],
                        resources: [
                            { title: "ACID (Wikipedia)", url: "https://en.wikipedia.org/wiki/ACID" },
                            { title: "PostgreSQL Transactions", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html" },
                            { title: "MySQL InnoDB Transactions", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-model.html" },
                        ],
                    },
                    {
                        id: "w7-2",
                        title: "隔离级别与并发异常",
                        detail: "四种隔离级别在一致性与性能间权衡。理解脏读、不可重复读、幻读的场景与危害。",
                        resources: [
                            { title: "PostgreSQL Transaction Isolation", url: "https://www.postgresql.org/docs/current/transaction-iso.html" },
                            { title: "MySQL InnoDB Transaction Isolation", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-isolation-levels.html" },
                            { title: "Isolation (Database) Wikipedia", url: "https://en.wikipedia.org/wiki/Isolation_(database_systems)" },
                        ],
                    },
                    {
                        id: "w7-3",
                        title: "MVCC：多版本并发控制",
                        detail: "MVCC 让读取操作看到一致的快照，无需阻塞写入。理解 PostgreSQL 与 MySQL 的 MVCC 实现差异。",
                        resources: [
                            { title: "PostgreSQL MVCC", url: "https://www.postgresql.org/docs/current/mvcc-intro.html" },
                            { title: "MySQL InnoDB MVCC", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-multi-versioning.html" },
                            { title: "MVCC (Wikipedia)", url: "https://en.wikipedia.org/wiki/Multiversion_concurrency_control" },
                        ],
                    },
                    {
                        id: "w7-4",
                        title: "乐观锁 vs 悲观锁",
                        detail: "悲观锁先锁定再操作；乐观锁先操作后验证。理解版本号、时间戳等乐观锁实现方式与冲突处理。",
                        resources: [
                            { title: "Optimistic Locking (Martin Fowler)", url: "https://martinfowler.com/eaaCatalog/optimisticOfflineLock.html" },
                            { title: "Pessimistic Locking", url: "https://www.baeldung.com/jpa-pessimistic-locking" },
                            { title: "SELECT ... FOR UPDATE", url: "https://www.postgresql.org/docs/current/sql-select.html#SQL-FOR-UPDATE-SHARE" },
                        ],
                    },
                ],
            },
            {
                id: "w8",
                title: "第 8 周：数据库锁类型与优化",
                summary: "行锁、表锁、间隙锁、意向锁与死锁处理。",
                overview: "数据库提供多种粒度的锁来平衡并发与一致性。本周深入各类锁的机制、死锁检测与锁优化策略。",
                keyPoints: [
                    "锁粒度：行锁 vs 页锁 vs 表锁，粒度越细并发越高但开销越大。",
                    "意向锁（Intent Lock）：表级意向锁避免逐行检查冲突。",
                    "间隙锁（Gap Lock）与 Next-Key Lock：防止幻读的关键机制。",
                    "死锁检测与处理：等待图、超时、自动回滚。",
                ],
                lessons: [
                    {
                        id: "w8-1",
                        title: "行锁、页锁与表锁",
                        detail: "不同粒度的锁在并发度与开销间权衡。理解 InnoDB 行锁、MyISAM 表锁、锁升级等概念。",
                        keyPoints: [
                            "InnoDB 默认使用行锁，通过索引定位记录；无索引查询会退化为表锁。",
                            "MyISAM 只支持表锁，适合读密集但不适合高并发写入场景。",
                            "锁升级（Lock Escalation）是数据库在行锁过多时自动升级为表锁以减少开销。",
                        ],
                        resources: [
                            { title: "PostgreSQL Explicit Locking", url: "https://www.postgresql.org/docs/current/explicit-locking.html" },
                            { title: "MySQL InnoDB Locking", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-locking.html" },
                            { title: "Lock Escalation (SQL Server)", url: "https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide" },
                        ],
                    },
                    {
                        id: "w8-2",
                        title: "意向锁与兼容性矩阵",
                        detail: "意向锁表明事务打算在更细粒度上加锁。理解 IS/IX 锁的作用与锁兼容性矩阵。",
                        resources: [
                            { title: "InnoDB Intent Locks", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-locking.html#innodb-intention-locks" },
                            { title: "PostgreSQL Table-Level Locks", url: "https://www.postgresql.org/docs/current/explicit-locking.html#LOCKING-TABLES" },
                            { title: "Lock Compatibility", url: "https://www.postgresql.org/docs/current/explicit-locking.html#EXPLICIT-LOCKING" },
                        ],
                    },
                    {
                        id: "w8-3",
                        title: "间隙锁与 Next-Key Lock",
                        detail: "InnoDB 使用间隙锁和 Next-Key Lock 防止幻读。理解其工作原理与对并发的影响。",
                        resources: [
                            { title: "InnoDB Gap Locks", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-locking.html#innodb-gap-locks" },
                            { title: "InnoDB Next-Key Locks", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-locking.html#innodb-next-key-locks" },
                            { title: "Phantom Reads", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-next-key-locking.html" },
                        ],
                    },
                    {
                        id: "w8-4",
                        title: "数据库死锁检测与优化",
                        detail: "数据库自动检测死锁并回滚牺牲者。理解死锁日志分析、索引优化、事务设计等避免策略。",
                        resources: [
                            { title: "MySQL Deadlock Detection", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-deadlock-detection.html" },
                            { title: "PostgreSQL Deadlocks", url: "https://www.postgresql.org/docs/current/explicit-locking.html#LOCKING-DEADLOCKS" },
                            { title: "InnoDB Deadlock Example", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-deadlock-example.html" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase4",
        title: "第四阶段：分布式锁",
        duration: "第 9-10 周",
        goal: "掌握分布式环境下的锁实现、正确性分析与生产最佳实践。",
        weeks: [
            {
                id: "w9",
                title: "第 9 周：Redis 分布式锁",
                summary: "SETNX、Redlock 算法、锁续期与看门狗机制。",
                overview: "Redis 因其高性能常被用作分布式锁的基础。本周学习 Redis 分布式锁的实现方式、Redlock 算法的争议，以及生产环境的最佳实践。",
                keyPoints: [
                    "SETNX + EXPIRE：最简单的分布式锁实现，但存在原子性问题。",
                    "SET NX PX：原子设置锁和过期时间，避免锁永不释放。",
                    "Redlock 算法：跨多个 Redis 实例的分布式锁，提高可用性但存在争议。",
                    "看门狗机制：自动续期防止业务未完成锁已过期。",
                ],
                lessons: [
                    {
                        id: "w9-1",
                        title: "Redis 分布式锁基础",
                        detail: "使用 SET NX PX 实现分布式锁。理解锁的获取、释放、原子性保证与常见陷阱。",
                        keyPoints: [
                            "SET key value NX PX milliseconds 原子完成「仅当 key 不存在时设置并附加过期时间」。",
                            "释放锁必须用 Lua 脚本原子地检查 value 再删除，防止误删其他客户端的锁。",
                            "单节点 Redis 锁在主从切换时可能丢失，不适合对正确性要求极高的场景。",
                        ],
                        resources: [
                            { title: "Distributed Locks with Redis", url: "https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/" },
                            { title: "Redis SET Command", url: "https://redis.io/docs/latest/commands/set/" },
                            { title: "Redis Lock Glossary", url: "https://redis.io/glossary/redis-lock/" },
                        ],
                    },
                    {
                        id: "w9-2",
                        title: "Redlock 算法与争议",
                        detail: "Redlock 尝试在多个独立 Redis 节点上获取锁以提高可靠性。理解其算法原理与 Martin Kleppmann 的批评。",
                        resources: [
                            { title: "Redlock Algorithm (Redis)", url: "https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/#the-redlock-algorithm" },
                            { title: "How to do distributed locking (Martin Kleppmann)", url: "https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html" },
                            { title: "Is Redlock Safe? (Antirez)", url: "http://antirez.com/news/101" },
                        ],
                    },
                    {
                        id: "w9-3",
                        title: "锁续期与看门狗机制",
                        detail: "业务执行时间可能超过锁过期时间。看门狗机制自动续期，确保业务完成前锁不会丢失。",
                        resources: [
                            { title: "Redisson Watchdog", url: "https://github.com/redisson/redisson/wiki/8.-Distributed-locks-and-synchronizers" },
                            { title: "Lock Renewal Best Practices", url: "https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/#safety-arguments" },
                            { title: "Fencing Tokens", url: "https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html" },
                        ],
                    },
                    {
                        id: "w9-4",
                        title: "Redis 分布式锁客户端实践",
                        detail: "Redisson (Java)、redsync (Go) 等客户端封装了最佳实践。理解其 API 与内部实现。",
                        resources: [
                            { title: "Redisson Distributed Locks", url: "https://redisson.org/articles/distributed-locks-and-synchronizers-with-redis-and-redisson.html" },
                            { title: "redsync (Go)", url: "https://github.com/go-redsync/redsync" },
                            { title: "node-redlock (Node.js)", url: "https://github.com/mike-marcacci/node-redlock" },
                        ],
                    },
                ],
            },
            {
                id: "w10",
                title: "第 10 周：强一致性分布式锁",
                summary: "ZooKeeper、etcd 分布式锁与生产最佳实践。",
                overview: "当需要更强的一致性保证时，基于共识算法的系统（ZooKeeper、etcd）是更好的选择。本周学习其锁实现原理、正确性分析与生产环境指南。",
                keyPoints: [
                    "ZooKeeper 临时顺序节点：利用 ephemeral + sequential 节点实现公平锁。",
                    "etcd 租约机制：lease + revision 实现分布式锁，支持锁等待与自动释放。",
                    "Fencing Token：防止锁过期后的「僵尸」客户端造成数据不一致。",
                    "生产最佳实践：选型指南、监控告警、故障处理。",
                ],
                lessons: [
                    {
                        id: "w10-1",
                        title: "ZooKeeper 分布式锁",
                        detail: "ZooKeeper 的临时顺序节点天然适合实现分布式锁。理解 Curator 的 InterProcessMutex 实现。",
                        keyPoints: [
                            "每个客户端在锁路径下创建临时顺序节点，序号最小者获得锁。",
                            "未获锁的客户端只监听（watch）前一个序号的节点，避免惊群效应。",
                            "临时节点在客户端会话断开时自动删除，天然实现锁的自动释放。",
                        ],
                        resources: [
                            { title: "ZooKeeper Recipes - Locks", url: "https://zookeeper.apache.org/doc/current/recipes.html#sc_recipes_Locks" },
                            { title: "Curator InterProcessMutex", url: "https://curator.apache.org/docs/guides/lock" },
                            { title: "ZooKeeper Ephemeral Nodes", url: "https://zookeeper.apache.org/doc/current/zookeeperProgrammers.html#Ephemeral+Nodes" },
                        ],
                    },
                    {
                        id: "w10-2",
                        title: "etcd 分布式锁",
                        detail: "etcd 基于 Raft 共识提供强一致性。理解 lease 租约机制与 concurrency 包的锁实现。",
                        resources: [
                            { title: "etcd How to Create Locks", url: "https://etcd.io/docs/v3.5/tutorials/how-to-create-locks/" },
                            { title: "etcd Concurrency API", url: "https://etcd.io/docs/v3.6/dev-guide/api_concurrency_reference_v3/" },
                            { title: "etcd Go Concurrency Package", url: "https://pkg.go.dev/go.etcd.io/etcd/client/v3/concurrency" },
                        ],
                    },
                    {
                        id: "w10-3",
                        title: "Fencing Token 与正确性分析",
                        detail: "分布式锁的核心问题是「锁过期但客户端不知道」。Fencing Token 是解决此问题的关键机制。",
                        resources: [
                            { title: "Fencing Tokens (Martin Kleppmann)", url: "https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html" },
                            { title: "Designing Data-Intensive Applications", url: "https://dataintensive.net/" },
                            { title: "Distributed Systems for Fun and Profit", url: "http://book.mixu.net/distsys/single-page.html" },
                        ],
                    },
                    {
                        id: "w10-4",
                        title: "分布式锁生产最佳实践",
                        detail: "选型（Redis vs ZK vs etcd）、监控指标、故障处理、锁粒度设计等生产环境指南。",
                        resources: [
                            { title: "Redis vs ZooKeeper for Locking", url: "https://www.alibabacloud.com/blog/implementation-principles-and-best-practices-of-distributed-lock_600811" },
                            { title: "Distributed Lock Best Practices", url: "https://www.architecture-weekly.com/p/distributed-locking-a-practical-guide" },
                            { title: "etcd vs ZooKeeper", url: "https://etcd.io/docs/v3.5/learning/why/" },
                        ],
                    },
                ],
            },
        ],
    },
]

export const locksKnowledgeCards: KnowledgeCard[] = [
    {
        id: "phase1",
        title: "锁的本质是序列化并发访问",
        summary: "锁将并发访问临界区的操作序列化，确保同一时刻只有一个执行者。理解这一点能让你正确选择锁的粒度与类型。",
        points: [
            "临界区越大，持锁时间越长，并发度越低；但临界区过小可能导致逻辑错误。",
            "读写锁分离读写操作：读多写少时可大幅提升吞吐量。",
            "条件变量让线程在条件不满足时高效等待，避免忙等浪费 CPU。",
        ],
        practice: "用不同类型的锁实现一个线程安全的计数器，对比性能差异。",
    },
    {
        id: "phase2",
        title: "选择锁还是无锁取决于场景",
        summary: "锁简单可靠但有开销与死锁风险；无锁高性能但实现复杂易出错。根据场景做权衡。",
        points: [
            "简单场景用锁：代码可读性好，正确性容易验证。",
            "高竞争场景考虑无锁：CAS 避免线程挂起与上下文切换。",
            "ABA 问题是 CAS 的陷阱：使用版本号或标记引用解决。",
        ],
        practice: "用 Atomic 类实现一个无锁计数器，与锁版本对比性能。",
    },
    {
        id: "phase3",
        title: "数据库锁是事务隔离的基础",
        summary: "数据库通过锁和 MVCC 在并发下保证数据一致性。理解锁机制能帮你优化 SQL 性能、避免死锁。",
        points: [
            "MVCC 让读操作不阻塞写操作，大幅提升并发读性能。",
            "行锁并发高但开销大；表锁开销小但并发低。",
            "间隙锁防止幻读，但也可能导致意外的锁等待。",
        ],
        practice: "在 MySQL 中模拟死锁场景，分析 SHOW ENGINE INNODB STATUS 的死锁日志。",
    },
    {
        id: "phase4",
        title: "分布式锁需要更强的正确性保证",
        summary: "网络分区、时钟漂移、进程崩溃让分布式锁比本地锁复杂得多。理解 CAP 权衡与 Fencing Token 机制。",
        points: [
            "Redis 锁适合效率场景（如防重复提交），对正确性要求不高。",
            "ZooKeeper/etcd 锁适合正确性场景（如分布式协调），基于共识算法。",
            "Fencing Token 是防止僵尸客户端的关键：锁服务返回单调递增的 token，资源服务拒绝旧 token。",
        ],
        practice: "用 Redis 和 etcd 分别实现分布式锁，模拟网络分区场景对比行为。",
    },
    {
        id: "card5",
        title: "锁的粒度决定了并发度与复杂度",
        summary: "锁的粒度越细并发度越高，但管理锁的复杂度和开销也越大。选择合适的锁粒度是并发设计的核心决策。",
        points: [
            "粗粒度锁（如全局锁）实现简单但吞吐量低，适合竞争不激烈的场景。",
            "细粒度锁（如分段锁、行锁）并发度高但容易引入死锁与复杂的锁序问题。",
            "锁拆分与锁分离（Lock Splitting/Striping）是优化热点锁的常用手段。",
        ],
        practice: "将一个全局锁保护的 HashMap 改造为分段锁版本，压测对比吞吐量差异。",
    },
    {
        id: "card6",
        title: "条件同步是锁的高级应用",
        summary: "条件变量和 Channel 将锁从互斥工具扩展为协作工具，让线程在满足条件时才继续执行。",
        points: [
            "条件变量必须配合互斥锁使用，先获取锁、检查条件、再等待。",
            "虚假唤醒（Spurious Wakeup）要求等待必须在 while 循环中进行。",
            "Go 的 Channel 提供了更安全的通信方式，避免了显式锁与条件变量的复杂性。",
        ],
        practice: "用条件变量实现一个有界阻塞队列，验证生产者-消费者模式的正确性。",
    },
    {
        id: "card7",
        title: "锁的性能优化需要量化分析",
        summary: "锁优化不能靠直觉，需要通过性能剖析工具定位瓶颈，针对性地选择优化策略。",
        points: [
            "锁竞争（Lock Contention）是并发瓶颈的常见来源，perf/pprof 可定位热点锁。",
            "减少持锁时间、缩小临界区、避免在锁内做 I/O 是基本优化原则。",
            "JVM 的偏向锁、轻量级锁等优化会根据竞争程度自动升级，理解升级路径有助于调优。",
        ],
        practice: "使用 Go pprof 或 Java JFR 分析一个高并发服务的锁竞争情况，找出热点锁并优化。",
    },
    {
        id: "card8",
        title: "分布式锁的可靠性依赖于故障处理",
        summary: "分布式环境中网络分区、进程崩溃、时钟偏移是常态，锁的正确性取决于故障场景的处理。",
        points: [
            "锁必须有过期时间（TTL），否则持有者崩溃会导致锁永远无法释放。",
            "看门狗续期与 Fencing Token 缺一不可：续期保证业务完成前不丢锁，Token 保证丢锁后不写脏数据。",
            "监控锁的获取耗时、持有时长、续期失败率是生产环境的必备指标。",
        ],
        practice: "为分布式锁服务添加 Prometheus 监控指标，覆盖获取、释放、超时和续期场景。",
    },
]

export const locksExamQuestions: QuizQuestion[] = [
    {
        id: "q1",
        question: "以下哪种锁最适合读多写少的场景？",
        options: [
            "互斥锁（Mutex）",
            "读写锁（RWLock）",
            "自旋锁（Spinlock）",
            "条件变量（Condition Variable）",
        ],
        answer: 1,
        rationale: "读写锁允许多个读者同时访问，只在写操作时互斥，非常适合读多写少的场景。",
    },
    {
        id: "q2",
        question: "死锁的四个必要条件不包括以下哪一个？",
        options: [
            "互斥条件",
            "占有等待",
            "优先级反转",
            "循环等待",
        ],
        answer: 2,
        rationale: "死锁的四个必要条件是：互斥、占有等待、非抢占、循环等待。优先级反转是另一个并发问题，不是死锁的必要条件。",
    },
    {
        id: "q3",
        question: "Java 中 ReentrantLock 相比 synchronized 的优势是？",
        options: [
            "性能更好",
            "支持可中断获取、超时获取、公平模式",
            "不需要手动释放锁",
            "自动避免死锁",
        ],
        answer: 1,
        rationale: "ReentrantLock 提供了 synchronized 不具备的特性：lockInterruptibly()、tryLock(timeout)、公平锁等。",
    },
    {
        id: "q4",
        question: "CAS 操作的 ABA 问题是指？",
        options: [
            "CAS 操作失败后需要重试",
            "值从 A 变成 B 再变回 A，CAS 无法感知这个变化",
            "CAS 在多核 CPU 上性能差",
            "CAS 不支持复合操作",
        ],
        answer: 1,
        rationale: "ABA 问题是 CAS 的经典陷阱：值看起来没变（A→B→A），但实际上发生过变化，可能导致逻辑错误。",
    },
    {
        id: "q5",
        question: "MySQL InnoDB 中，哪种锁用于防止幻读？",
        options: [
            "行锁（Record Lock）",
            "表锁（Table Lock）",
            "间隙锁（Gap Lock）",
            "意向锁（Intent Lock）",
        ],
        answer: 2,
        rationale: "间隙锁（Gap Lock）和 Next-Key Lock 锁定索引记录之间的间隙，防止其他事务插入新行，从而避免幻读。",
    },
    {
        id: "q6",
        question: "MVCC 的核心优势是？",
        options: [
            "减少存储空间",
            "读操作不阻塞写操作，写操作不阻塞读操作",
            "自动解决死锁",
            "提高写入性能",
        ],
        answer: 1,
        rationale: "MVCC 通过保存数据的多个版本，让读取操作看到一致的快照，无需阻塞写入，大幅提升并发性能。",
    },
    {
        id: "q7",
        question: "Redis 分布式锁中，SET NX PX 命令的作用是？",
        options: [
            "设置一个永不过期的键",
            "原子性地设置键（仅当键不存在时）并设置过期时间",
            "获取键的值",
            "删除已过期的键",
        ],
        answer: 1,
        rationale: "SET key value NX PX milliseconds 原子地完成：仅当 key 不存在时设置值，并设置过期时间。这是 Redis 分布式锁的基础。",
    },
    {
        id: "q8",
        question: "Redlock 算法需要在多少个 Redis 实例上成功获取锁才算成功？",
        options: [
            "全部实例",
            "超过一半的实例",
            "任意一个实例",
            "至少两个实例",
        ],
        answer: 1,
        rationale: "Redlock 要求在 N 个实例中的大多数（N/2+1）上成功获取锁，且总耗时小于锁的有效期。",
    },
    {
        id: "q9",
        question: "ZooKeeper 实现分布式锁时，使用什么类型的节点？",
        options: [
            "持久节点",
            "临时节点",
            "临时顺序节点",
            "持久顺序节点",
        ],
        answer: 2,
        rationale: "临时顺序节点（Ephemeral + Sequential）可以在客户端断开时自动删除（释放锁），顺序号用于实现公平锁。",
    },
    {
        id: "q10",
        question: "Fencing Token 的作用是？",
        options: [
            "加密锁的内容",
            "防止锁被其他客户端抢占",
            "防止锁过期后僵尸客户端的写入",
            "提高锁的获取速度",
        ],
        answer: 2,
        rationale: "Fencing Token 是单调递增的版本号，资源服务拒绝使用旧 token 的请求，防止锁过期后的僵尸客户端造成数据不一致。",
    },
    {
        id: "q11",
        question: "Go 语言中 sync.Mutex 的特点是？",
        options: [
            "支持递归加锁",
            "不支持递归加锁，同一 goroutine 重复加锁会死锁",
            "自动检测死锁并恢复",
            "只能在单核 CPU 上使用",
        ],
        answer: 1,
        rationale: "Go 的 sync.Mutex 不支持重入，如果同一个 goroutine 尝试重复加锁，会导致死锁。",
    },
    {
        id: "q12",
        question: "乐观锁与悲观锁的主要区别是？",
        options: [
            "乐观锁更安全，悲观锁更快",
            "悲观锁先获取锁再操作，乐观锁先操作后检验冲突",
            "乐观锁只能用于数据库，悲观锁只能用于内存",
            "悲观锁不会发生死锁",
        ],
        answer: 1,
        rationale: "悲观锁假设会发生冲突，先锁定再操作；乐观锁假设不会冲突，先操作后通过版本号等检验是否发生冲突。",
    },
    {
        id: "q13",
        question: "以下哪种情况最适合使用自旋锁？",
        options: [
            "临界区执行时间很长",
            "临界区执行时间很短",
            "需要跨进程同步",
            "需要条件等待",
        ],
        answer: 1,
        rationale: "自旋锁在等待时不让出 CPU，如果持锁时间短，自旋比挂起/唤醒线程更高效。",
    },
    {
        id: "q14",
        question: "条件变量使用时为什么通常需要在 while 循环中检查条件？",
        options: [
            "提高性能",
            "防止虚假唤醒和信号丢失",
            "减少锁竞争",
            "支持超时等待",
        ],
        answer: 1,
        rationale: "操作系统可能会虚假唤醒线程，或者多个等待线程被唤醒但只有一个应该继续执行，因此需要在循环中重新检查条件。",
    },
    {
        id: "q15",
        question: "分布式锁选型时，如果对正确性要求很高，应该选择？",
        options: [
            "Redis 单节点锁",
            "Redlock 算法",
            "ZooKeeper 或 etcd",
            "数据库行锁",
        ],
        answer: 2,
        rationale: "ZooKeeper 和 etcd 基于共识算法（Paxos/Raft），提供强一致性保证，更适合对正确性要求高的场景。",
    },
    {
        id: "q16",
        question: "Java 中 StampedLock 的乐观读模式的特点是？",
        options: [
            "获取锁时会阻塞其他线程",
            "读取时不加锁，事后验证数据是否被修改",
            "只支持写操作",
            "自动升级为悲观锁",
        ],
        answer: 1,
        rationale: "StampedLock 的乐观读不获取任何锁，只获取一个 stamp。读取后验证 stamp 是否有效，无效则需要升级为悲观读。",
    },
    {
        id: "q17",
        question: "数据库事务隔离级别从低到高的正确顺序是？",
        options: [
            "Serializable → Repeatable Read → Read Committed → Read Uncommitted",
            "Read Uncommitted → Read Committed → Repeatable Read → Serializable",
            "Read Committed → Read Uncommitted → Serializable → Repeatable Read",
            "Repeatable Read → Serializable → Read Uncommitted → Read Committed",
        ],
        answer: 1,
        rationale: "从低到高：Read Uncommitted（可脏读）→ Read Committed → Repeatable Read → Serializable（最严格）。",
    },
    {
        id: "q18",
        question: "关于 etcd 分布式锁，以下说法正确的是？",
        options: [
            "基于 Redis 协议实现",
            "使用临时节点实现锁自动释放",
            "基于 Lease 租约机制，客户端断开后锁自动释放",
            "不支持锁等待功能",
        ],
        answer: 2,
        rationale: "etcd 使用 Lease 机制，锁关联到一个有 TTL 的租约。客户端断开或租约过期时，锁自动释放。",
    },
    {
        id: "q19",
        question: "银行家算法的主要作用是？",
        options: [
            "检测已经发生的死锁",
            "在资源分配前判断是否会导致不安全状态，从而避免死锁",
            "恢复死锁中的进程",
            "提高资源利用率",
        ],
        answer: 1,
        rationale: "银行家算法是死锁避免算法，在分配资源前检查系统是否仍处于安全状态，拒绝可能导致死锁的请求。",
    },
    {
        id: "q20",
        question: "分布式锁的看门狗（Watchdog）机制的作用是？",
        options: [
            "监控锁的使用情况",
            "自动续期锁的过期时间，防止业务未完成锁已过期",
            "检测死锁",
            "加速锁的获取",
        ],
        answer: 1,
        rationale: "看门狗机制在后台定期续期锁的 TTL，确保业务正常执行期间锁不会因过期而被其他客户端获取。",
    },
]

export const locksRoadmap: RoadmapDefinition = {
    id: "locks",
    label: "锁机制",
    title: "锁与并发控制",
    durationLabel: "10 周完整学习路线",
    description:
        "从并发编程基础到分布式锁，系统掌握锁的原理与实践。涵盖互斥锁、读写锁、自旋锁、条件变量等基础概念，Java/Go 语言的并发原语，无锁编程与 CAS，数据库事务与锁机制，以及 Redis、ZooKeeper、etcd 分布式锁的实现与选型。",
    heroBadge: "10 周 · 40 主题",
    stages: locksStages,
    knowledgeCards: locksKnowledgeCards,
    examQuestions: locksExamQuestions,
    suggestion: (percent: number) => {
        if (percent < 25) {
            return "建议先完成并发基础与锁原理阶段，理解临界区、竞态条件、死锁等核心概念。"
        }
        if (percent < 50) {
            return "继续学习 Java/Go 并发原语与无锁编程，在实践中加深理解。"
        }
        if (percent < 75) {
            return "深入数据库锁机制，理解 MVCC、隔离级别与各类锁的使用场景。"
        }
        return "完成分布式锁章节，重点理解 Fencing Token 与生产最佳实践。"
    },
    resourceGuide: {
        environment: "本地 Java/Go 开发环境，MySQL/PostgreSQL 数据库，Redis/etcd 单机或集群。",
        fallbackKeyPoints: [
            "先理解锁的本质：序列化并发访问临界区，保证数据一致性。",
            "每种锁都有其适用场景：互斥锁通用、读写锁读多写少、自旋锁短临界区。",
            "分布式锁比本地锁复杂得多：网络分区、时钟漂移、进程崩溃都需考虑。",
        ],
        handsOnSteps: [
            "用不同类型的锁实现线程安全的数据结构，对比性能与正确性。",
            "在数据库中模拟并发事务，观察不同隔离级别下的行为差异。",
            "部署 Redis 集群，实现 Redlock 并模拟节点故障场景。",
        ],
        selfChecks: [
            "能否解释为什么需要锁？不用锁会发生什么？",
            "能否识别代码中潜在的死锁风险？如何预防？",
            "Redis 分布式锁和 ZooKeeper 分布式锁各有什么优缺点？",
        ],
        extensions: [
            "阅读 Java Doug Lea 的并发包源码，理解 AQS 框架。",
            "研究 Linux 内核的自旋锁与读写锁实现。",
            "阅读 Martin Kleppmann 的《数据密集型应用系统设计》中关于分布式锁的章节。",
        ],
        lessonQuizAdvice: "建议：动手实现比死记硬背更重要，多写并发代码并用工具检测问题。",
    },
}
