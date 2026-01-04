import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week13Guides: Record<string, LessonGuide> = {
    "jf-w13-1": {
        lessonId: "jf-w13-1",
        background: [
            "【虚拟线程定义】JEP 444：Virtual threads are lightweight threads managed by the JVM——虚拟线程是 JVM 管理的轻量级线程。",
            "【M:N 调度】JEP 444：M:N scheduling, mapping many virtual threads onto fewer OS threads——多个虚拟线程映射到少量平台线程。",
            "【载体线程】JEP 444：A carrier thread is a platform thread temporarily assigned to execute a virtual thread——载体线程临时承载虚拟线程执行。",
            "【Java 21 正式】Virtual Threads 在 Java 21 成为正式特性（JEP 444）。",
            "【透明调度】JEP 444：The identity of the carrier is unavailable to the virtual thread——Thread.currentThread() 始终返回虚拟线程本身。"
        ],
        keyDifficulties: [
            "【创建方式】Thread.startVirtualThread(runnable)、Thread.ofVirtual().start(runnable)、Executors.newVirtualThreadPerTaskExecutor()。",
            "【阻塞行为】JEP 444：When blocking, it unmounts from carrier, freeing OS thread——阻塞时自动让出载体线程。",
            "【不要池化】JEP 444：Never pool virtual threads; create new ones per task——每个任务创建新虚拟线程，不复用。",
            "【调度器】使用工作窃取的 ForkJoinPool，FIFO 模式，默认并行度等于处理器数量。"
        ],
        handsOnPath: [
            "快速启动：Thread.startVirtualThread(() -> System.out.println(\"Hello\"));",
            "Builder API：Thread.ofVirtual().name(\"worker-\", 0).start(task);",
            "执行器：try (var exec = Executors.newVirtualThreadPerTaskExecutor()) { exec.submit(task); }",
            "判断虚拟线程：Thread.currentThread().isVirtual();",
            "命名前缀：Thread.ofVirtual().name(\"handler-\", 1).factory();",
            "大规模创建：IntStream.range(0, 100_000).forEach(i -> Thread.startVirtualThread(task));"
        ],
        selfCheck: [
            "虚拟线程与平台线程有什么区别？",
            "虚拟线程如何实现轻量级？",
            "为什么不应该池化虚拟线程？",
            "如何创建和启动虚拟线程？",
            "虚拟线程阻塞时发生什么？"
        ],
        extensions: [
            "研究虚拟线程的调度器实现（ForkJoinPool）。",
            "了解 Continuation 在虚拟线程中的作用。",
            "探索虚拟线程与 Kotlin 协程的对比。",
            "学习虚拟线程在 Web 框架中的应用。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/444",
            "https://dev.java/learn/virtual-threads/"
        ]
    },
    "jf-w13-2": {
        lessonId: "jf-w13-2",
        background: [
            "【ExecutorService】Executors.newVirtualThreadPerTaskExecutor() 创建虚拟线程执行器。",
            "【每任务一线程】JEP 444：Creates new virtual thread per task——每个提交的任务创建一个新虚拟线程。",
            "【AutoCloseable】执行器实现 AutoCloseable，可以使用 try-with-resources 自动关闭。",
            "【I/O 密集型】虚拟线程非常适合 I/O 密集型任务，如网络请求、数据库操作。",
            "【简化并发】用同步风格编写高并发代码，无需 CompletableFuture 的复杂链式调用。"
        ],
        keyDifficulties: [
            "【关闭行为】ExecutorService.close() 会等待所有任务完成。",
            "【资源限制】虽然虚拟线程很多，但后端资源（数据库连接、文件句柄）有限，需要 Semaphore 限流。",
            "【超时控制】使用 invokeAll/invokeAny 或 CompletableFuture 配合虚拟线程。",
            "【不适合 CPU 密集】CPU 密集型任务不会因虚拟线程获益，因为没有阻塞可以让出。"
        ],
        handsOnPath: [
            "基本用法：try (var exec = Executors.newVirtualThreadPerTaskExecutor()) { exec.submit(task); }",
            "批量任务：var futures = tasks.stream().map(exec::submit).toList(); futures.forEach(f -> f.get());",
            "限流：Semaphore sem = new Semaphore(100); exec.submit(() -> { sem.acquire(); try { ... } finally { sem.release(); } });",
            "invokeAll：List<Future<String>> results = exec.invokeAll(callables);",
            "HTTP 客户端：exec.submit(() -> httpClient.send(request, BodyHandlers.ofString()));",
            "数据库查询：exec.submit(() -> jdbcTemplate.queryForList(sql));"
        ],
        selfCheck: [
            "newVirtualThreadPerTaskExecutor 与普通线程池有什么区别？",
            "为什么虚拟线程适合 I/O 密集型任务？",
            "如何限制虚拟线程并发数？为什么需要限制？",
            "try-with-resources 如何帮助管理 ExecutorService？",
            "虚拟线程对 CPU 密集型任务有帮助吗？"
        ],
        extensions: [
            "研究虚拟线程在 Spring Boot 3.x 中的集成。",
            "了解虚拟线程与 JDBC 的配合。",
            "探索虚拟线程在微服务场景的应用。",
            "学习如何监控虚拟线程的运行状态。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/444",
            "https://dev.java/learn/virtual-threads/"
        ]
    },
    "jf-w13-3": {
        lessonId: "jf-w13-3",
        background: [
            "【Pin 问题】JEP 444：Virtual threads pin to carriers when executing synchronized blocks or native code——synchronized 和 native 代码会固定虚拟线程。",
            "【性能影响】JEP 444：Pinning does not make an application incorrect, but it might hinder its scalability——Pin 不影响正确性，但影响可扩展性。",
            "【ThreadLocal 注意】JEP 444：Avoid thread-local variables except after careful consideration——百万虚拟线程会导致 ThreadLocal 占用大量内存。",
            "【锁替代】JEP 444：Replace synchronized blocks with ReentrantLock——用 ReentrantLock 替代 synchronized 避免 Pin。",
            "【不要池化】JEP 444：Use semaphores for concurrency limiting, not thread pools——用信号量限制并发，不用线程池。"
        ],
        keyDifficulties: [
            "【Pin 场景】synchronized 块内阻塞、JNI 调用时虚拟线程固定在载体线程上。",
            "【诊断 Pin】-Djdk.tracePinnedThreads=short/full 打印 Pin 事件。",
            "【锁迁移】将 synchronized 改为 ReentrantLock.lock()/unlock()。",
            "【内存问题】每个虚拟线程独立的 ThreadLocal 副本，百万线程会占用 GB 级内存。"
        ],
        handsOnPath: [
            "避免 Pin：lock.lock(); try { blockingOp(); } finally { lock.unlock(); } // 替代 synchronized",
            "诊断选项：java -Djdk.tracePinnedThreads=short MyApp",
            "Semaphore 限流：Semaphore permits = new Semaphore(100); permits.acquire(); try { ... } finally { permits.release(); }",
            "避免 ThreadLocal：使用 ScopedValue 替代 ThreadLocal（Java 21+）。",
            "检测虚拟线程：if (Thread.currentThread().isVirtual()) { ... }",
            "正确关闭：exec.shutdown(); exec.awaitTermination(1, TimeUnit.MINUTES);"
        ],
        selfCheck: [
            "什么是虚拟线程 Pin？什么情况会发生？",
            "Pin 对应用有什么影响？",
            "如何避免 synchronized 导致的 Pin？",
            "为什么不应该在虚拟线程中大量使用 ThreadLocal？",
            "如何诊断 Pin 问题？"
        ],
        extensions: [
            "研究 JEP 491 的 synchronized Pin 优化（Java 24+）。",
            "了解虚拟线程与锁争用的关系。",
            "探索 ScopedValue 作为 ThreadLocal 替代。",
            "学习虚拟线程性能调优技巧。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/444",
            "https://dev.java/learn/virtual-threads/"
        ]
    }
}

export const week13Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w13-1": [
        {
            id: "jf-w13-1-q1",
            question: "Virtual Threads 在哪个 Java 版本成为正式特性？",
            options: [
                "Java 19（预览）",
                "Java 20（预览）",
                "Java 21（正式）",
                "Java 17"
            ],
            answer: 2,
            rationale: "JEP 444 在 Java 21 成为正式特性，之前在 Java 19-20 为预览版本。"
        },
        {
            id: "jf-w13-1-q2",
            question: "虚拟线程由谁调度？",
            options: [
                "操作系统",
                "JVM",
                "应用程序",
                "用户"
            ],
            answer: 1,
            rationale: "JEP 444：Virtual threads are lightweight threads managed by the JVM——由 JVM 调度。"
        },
        {
            id: "jf-w13-1-q3",
            question: "什么是载体线程（carrier thread）？",
            options: [
                "虚拟线程的别名",
                "临时承载虚拟线程执行的平台线程",
                "守护线程",
                "主线程"
            ],
            answer: 1,
            rationale: "JEP 444：A carrier thread is a platform thread temporarily assigned to execute a virtual thread。"
        },
        {
            id: "jf-w13-1-q4",
            question: "Thread.currentThread() 在虚拟线程中返回什么？",
            options: [
                "载体线程",
                "虚拟线程本身",
                "主线程",
                "null"
            ],
            answer: 1,
            rationale: "JEP 444：The identity of the carrier is unavailable——currentThread() 始终返回虚拟线程本身。"
        },
        {
            id: "jf-w13-1-q5",
            question: "以下哪个是创建虚拟线程的正确方式？",
            options: [
                "new VirtualThread(runnable)",
                "Thread.startVirtualThread(runnable)",
                "Thread.createVirtual(runnable)",
                "VirtualThread.start(runnable)"
            ],
            answer: 1,
            rationale: "Thread.startVirtualThread(runnable) 是创建并启动虚拟线程的工厂方法。"
        },
        {
            id: "jf-w13-1-q6",
            question: "虚拟线程阻塞时发生什么？",
            options: [
                "阻塞载体线程",
                "自动让出载体线程，载体可执行其他虚拟线程",
                "抛出异常",
                "终止虚拟线程"
            ],
            answer: 1,
            rationale: "JEP 444：When blocking, it unmounts from carrier, freeing OS thread for other work。"
        },
        {
            id: "jf-w13-1-q7",
            question: "应该池化虚拟线程吗？",
            options: [
                "是，像平台线程一样",
                "否，每个任务创建新虚拟线程",
                "取决于任务类型",
                "只池化 I/O 任务"
            ],
            answer: 1,
            rationale: "JEP 444：Never pool virtual threads; create new ones per task——不要池化。"
        },
        {
            id: "jf-w13-1-q8",
            question: "虚拟线程的调度器是什么？",
            options: [
                "ThreadPoolExecutor",
                "ScheduledExecutorService",
                "工作窃取的 ForkJoinPool",
                "单线程调度器"
            ],
            answer: 2,
            rationale: "JEP 444：The scheduler is a work-stealing ForkJoinPool operating in FIFO mode。"
        },
        {
            id: "jf-w13-1-q9",
            question: "如何判断当前线程是否是虚拟线程？",
            options: [
                "Thread.isVirtual()",
                "Thread.currentThread().isVirtual()",
                "Thread.currentThread() instanceof VirtualThread",
                "Thread.getType() == VIRTUAL"
            ],
            answer: 1,
            rationale: "使用 Thread.currentThread().isVirtual() 判断当前线程是否是虚拟线程。"
        },
        {
            id: "jf-w13-1-q10",
            question: "虚拟线程最适合什么类型的任务？",
            options: [
                "CPU 密集型",
                "I/O 密集型",
                "实时任务",
                "图形渲染"
            ],
            answer: 1,
            rationale: "虚拟线程阻塞时让出载体，非常适合 I/O 密集型任务，如网络、数据库操作。"
        },
        {
            id: "jf-w13-1-q11",
            question: "一个进程可以创建多少个虚拟线程？",
            options: [
                "与 CPU 核数相等",
                "几百个",
                "百万级",
                "无限"
            ],
            answer: 2,
            rationale: "虚拟线程非常轻量，一个进程可以创建百万级虚拟线程。"
        },
        {
            id: "jf-w13-1-q12",
            question: "Thread.ofVirtual() 返回什么？",
            options: [
                "虚拟线程实例",
                "Thread.Builder",
                "ExecutorService",
                "ThreadFactory"
            ],
            answer: 1,
            rationale: "Thread.ofVirtual() 返回 Builder，可以配置名称、daemon 状态等，然后 start()。"
        }
    ],
    "jf-w13-2": [
        {
            id: "jf-w13-2-q1",
            question: "Executors.newVirtualThreadPerTaskExecutor() 的特点是什么？",
            options: [
                "复用固定数量的虚拟线程",
                "每个任务创建一个新虚拟线程",
                "只创建一个虚拟线程",
                "使用平台线程"
            ],
            answer: 1,
            rationale: "JEP 444：Creates new virtual thread per task——每个提交的任务创建一个新虚拟线程。"
        },
        {
            id: "jf-w13-2-q2",
            question: "ExecutorService 实现了什么接口便于资源管理？",
            options: [
                "Runnable",
                "Callable",
                "AutoCloseable",
                "Serializable"
            ],
            answer: 2,
            rationale: "ExecutorService 实现 AutoCloseable，可以使用 try-with-resources 自动关闭。"
        },
        {
            id: "jf-w13-2-q3",
            question: "如何限制虚拟线程的并发数？",
            options: [
                "使用线程池",
                "使用 Semaphore",
                "设置 JVM 参数",
                "无法限制"
            ],
            answer: 1,
            rationale: "JEP 444：Use semaphores for concurrency limiting, not thread pools。"
        },
        {
            id: "jf-w13-2-q4",
            question: "为什么需要限制虚拟线程并发数？",
            options: [
                "虚拟线程有数量限制",
                "后端资源（数据库连接等）有限",
                "JVM 内存不足",
                "不需要限制"
            ],
            answer: 1,
            rationale: "虽然虚拟线程很多，但后端资源（数据库连接、文件句柄）有限，需要限流。"
        },
        {
            id: "jf-w13-2-q5",
            question: "ExecutorService.close() 的行为是什么？",
            options: [
                "立即终止所有任务",
                "等待所有任务完成",
                "抛出异常",
                "不做任何事"
            ],
            answer: 1,
            rationale: "close() 等待所有已提交的任务完成，然后关闭执行器。"
        },
        {
            id: "jf-w13-2-q6",
            question: "虚拟线程对 CPU 密集型任务有帮助吗？",
            options: [
                "有很大帮助",
                "没有帮助，因为没有阻塞可以让出",
                "取决于任务",
                "会降低性能"
            ],
            answer: 1,
            rationale: "CPU 密集型任务不会因虚拟线程获益，因为没有阻塞操作可以让出载体线程。"
        },
        {
            id: "jf-w13-2-q7",
            question: "以下哪个是正确的 ExecutorService 使用模式？",
            options: [
                "ExecutorService exec = Executors.newVirtualThreadPerTaskExecutor(); exec.submit(task);",
                "try (var exec = Executors.newVirtualThreadPerTaskExecutor()) { exec.submit(task); }",
                "Executors.submit(task);",
                "new VirtualThreadExecutor().submit(task);"
            ],
            answer: 1,
            rationale: "使用 try-with-resources 确保 ExecutorService 正确关闭。"
        },
        {
            id: "jf-w13-2-q8",
            question: "虚拟线程简化了什么编程模式？",
            options: [
                "函数式编程",
                "用同步风格写高并发代码",
                "面向对象编程",
                "响应式编程"
            ],
            answer: 1,
            rationale: "虚拟线程允许用简单的同步风格（阻塞调用）编写高并发代码，无需复杂的异步链。"
        },
        {
            id: "jf-w13-2-q9",
            question: "invokeAll 在虚拟线程执行器中的作用是什么？",
            options: [
                "取消所有任务",
                "提交并等待所有任务完成",
                "只执行第一个任务",
                "异步执行"
            ],
            answer: 1,
            rationale: "invokeAll 提交所有任务并阻塞等待全部完成，返回 Future 列表。"
        },
        {
            id: "jf-w13-2-q10",
            question: "虚拟线程执行器与固定线程池的区别是什么？",
            options: [
                "性能相同",
                "虚拟线程执行器每任务一线程，线程池复用线程",
                "固定线程池更轻量",
                "没有区别"
            ],
            answer: 1,
            rationale: "虚拟线程执行器为每个任务创建新虚拟线程，固定线程池复用平台线程。"
        },
        {
            id: "jf-w13-2-q11",
            question: "虚拟线程适合以下哪种场景？",
            options: [
                "矩阵运算",
                "图像处理",
                "HTTP 请求处理",
                "加密计算"
            ],
            answer: 2,
            rationale: "HTTP 请求涉及网络 I/O，阻塞时让出载体线程，非常适合虚拟线程。"
        },
        {
            id: "jf-w13-2-q12",
            question: "虚拟线程与 CompletableFuture 的关系是什么？",
            options: [
                "必须配合使用",
                "虚拟线程可以简化，不必使用复杂的异步链",
                "不兼容",
                "CompletableFuture 更好"
            ],
            answer: 1,
            rationale: "虚拟线程允许用同步风格写并发代码，可以简化 CompletableFuture 的复杂链式调用。"
        }
    ],
    "jf-w13-3": [
        {
            id: "jf-w13-3-q1",
            question: "什么是虚拟线程 Pin？",
            options: [
                "虚拟线程被删除",
                "虚拟线程固定在载体线程上，无法让出",
                "虚拟线程暂停",
                "虚拟线程重启"
            ],
            answer: 1,
            rationale: "JEP 444：Virtual threads pin to carriers when executing synchronized blocks——固定在载体上。"
        },
        {
            id: "jf-w13-3-q2",
            question: "以下哪种情况会导致 Pin？",
            options: [
                "普通方法调用",
                "synchronized 块内阻塞操作",
                "使用 ReentrantLock",
                "创建新对象"
            ],
            answer: 1,
            rationale: "JEP 444：Pin when executing synchronized blocks or native code。"
        },
        {
            id: "jf-w13-3-q3",
            question: "Pin 对应用有什么影响？",
            options: [
                "导致程序崩溃",
                "不影响正确性，但影响可扩展性",
                "数据丢失",
                "没有影响"
            ],
            answer: 1,
            rationale: "JEP 444：Pinning does not make an application incorrect, but it might hinder its scalability。"
        },
        {
            id: "jf-w13-3-q4",
            question: "如何避免 synchronized 导致的 Pin？",
            options: [
                "使用更多虚拟线程",
                "用 ReentrantLock 替代 synchronized",
                "使用 volatile",
                "无法避免"
            ],
            answer: 1,
            rationale: "JEP 444：Replace synchronized blocks with ReentrantLock to avoid pinning。"
        },
        {
            id: "jf-w13-3-q5",
            question: "如何诊断 Pin 问题？",
            options: [
                "-verbose:pin",
                "-Djdk.tracePinnedThreads=short",
                "-XX:+PrintPinning",
                "无法诊断"
            ],
            answer: 1,
            rationale: "使用 -Djdk.tracePinnedThreads=short 或 full 打印 Pin 事件。"
        },
        {
            id: "jf-w13-3-q6",
            question: "为什么不应该在虚拟线程中大量使用 ThreadLocal？",
            options: [
                "ThreadLocal 不支持虚拟线程",
                "百万虚拟线程会导致 ThreadLocal 占用大量内存",
                "ThreadLocal 会导致死锁",
                "性能更好"
            ],
            answer: 1,
            rationale: "JEP 444：每个虚拟线程独立的 ThreadLocal 副本，百万线程会占用 GB 级内存。"
        },
        {
            id: "jf-w13-3-q7",
            question: "ThreadLocal 的替代方案是什么？",
            options: [
                "全局变量",
                "ScopedValue（Java 21+）",
                "synchronized",
                "volatile"
            ],
            answer: 1,
            rationale: "ScopedValue 是 ThreadLocal 的现代替代，更适合虚拟线程场景。"
        },
        {
            id: "jf-w13-3-q8",
            question: "以下哪个是正确的锁使用模式？",
            options: [
                "synchronized (this) { blockingOp(); }",
                "lock.lock(); try { blockingOp(); } finally { lock.unlock(); }",
                "blockingOp();",
                "wait(); blockingOp();"
            ],
            answer: 1,
            rationale: "使用 ReentrantLock 替代 synchronized，避免 Pin。"
        },
        {
            id: "jf-w13-3-q9",
            question: "JNI 调用会导致 Pin 吗？",
            options: [
                "不会",
                "会，native 代码期间虚拟线程固定在载体上",
                "取决于 native 代码",
                "只有 Windows 会"
            ],
            answer: 1,
            rationale: "JEP 444：Pin when executing native code——JNI 调用期间会 Pin。"
        },
        {
            id: "jf-w13-3-q10",
            question: "Semaphore 在虚拟线程中的作用是什么？",
            options: [
                "创建虚拟线程",
                "限制并发访问资源数",
                "加速执行",
                "诊断问题"
            ],
            answer: 1,
            rationale: "JEP 444：Use semaphores for concurrency limiting——限制对有限资源的并发访问。"
        },
        {
            id: "jf-w13-3-q11",
            question: "Java 24+ 对 synchronized Pin 有什么改进？",
            options: [
                "没有改进",
                "JEP 491 优化，减少 synchronized 的 Pin",
                "移除 synchronized",
                "自动替换为 ReentrantLock"
            ],
            answer: 1,
            rationale: "JEP 491（Java 24+）优化虚拟线程的 synchronized 处理，减少 Pin 情况。"
        },
        {
            id: "jf-w13-3-q12",
            question: "如何正确关闭 ExecutorService？",
            options: [
                "不需要关闭",
                "shutdown() + awaitTermination()",
                "只调用 close()",
                "System.exit()"
            ],
            answer: 1,
            rationale: "调用 shutdown() 停止接受新任务，awaitTermination() 等待已提交任务完成。"
        }
    ]
}
