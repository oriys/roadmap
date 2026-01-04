import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week14Guides: Record<string, LessonGuide> = {
    "jf-w14-1": {
        lessonId: "jf-w14-1",
        background: [
            "【结构化并发】JEP 453：Organize related tasks as a cohesive unit——将相关任务组织为一个统一的单元，有明确的入口和出口。",
            "【StructuredTaskScope】JEP 453：The principal class enabling structured concurrent programming——结构化并发的核心类。",
            "【fork/join 模式】JEP 453：fork() starts a subtask, join() blocks until all complete——fork 启动子任务，join 等待全部完成。",
            "【生命周期绑定】JEP 453：If a task splits into concurrent subtasks then they all return to the same place——子任务生命周期绑定到父任务。",
            "【Java 21 预览】Structured Concurrency 在 Java 21 为预览特性（JEP 453）。"
        ],
        keyDifficulties: [
            "【Subtask vs Future】fork() 返回 Subtask 而非 Future，Subtask 有 SUCCESS/FAILED/UNAVAILABLE 状态。",
            "【join 语义】join() 阻塞直到所有子任务完成（成功、失败或取消）。",
            "【自动取消】JEP 453：When one subtask fails, siblings are cancelled if incomplete——一个失败自动取消其他。",
            "【作用域关闭】JEP 453：All subtask threads terminate once the scope closes——作用域关闭时所有子任务线程终止。"
        ],
        handsOnPath: [
            "基本用法：try (var scope = new StructuredTaskScope<String>()) { var task1 = scope.fork(callable1); scope.join(); }",
            "获取结果：String result = task1.get(); // 在 join() 后调用",
            "检查状态：if (task1.state() == Subtask.State.SUCCESS) { ... }",
            "多任务：var t1 = scope.fork(c1); var t2 = scope.fork(c2); scope.join(); combine(t1.get(), t2.get());",
            "超时：scope.joinUntil(Instant.now().plusSeconds(10));",
            "与虚拟线程配合：scope.fork 默认使用虚拟线程执行子任务。"
        ],
        selfCheck: [
            "什么是结构化并发？与传统并发有什么区别？",
            "StructuredTaskScope 的基本用法是什么？",
            "fork() 和 join() 的作用是什么？",
            "Subtask 与 Future 有什么区别？",
            "为什么子任务的生命周期绑定到父任务？"
        ],
        extensions: [
            "研究结构化并发的理论基础。",
            "了解结构化并发与 Go goroutine 的对比。",
            "探索结构化并发在微服务中的应用。",
            "学习嵌套 StructuredTaskScope 的使用。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/453",
            "https://dev.java/learn/structured-concurrency/"
        ]
    },
    "jf-w14-2": {
        lessonId: "jf-w14-2",
        background: [
            "【ShutdownOnFailure】JEP 453：Invoke all pattern, cancels remaining when any fails——任一失败立即取消其他并传播异常。",
            "【ShutdownOnSuccess】JEP 453：Invoke any pattern, cancels unfinished when one succeeds——任一成功立即取消其他并返回结果。",
            "【策略选择】根据业务需求选择：需要所有结果用 ShutdownOnFailure，只需要一个结果用 ShutdownOnSuccess。",
            "【异常聚合】JEP 453：Shutdown policies aggregate and handle failures——策略聚合并处理失败。",
            "【短路求值】JEP 453：Short-circuiting error handling——失败时快速终止，不等待其他任务。"
        ],
        keyDifficulties: [
            "【throwIfFailed】ShutdownOnFailure.throwIfFailed() 检查并抛出聚合异常。",
            "【result 方法】ShutdownOnSuccess.result() 获取第一个成功的结果。",
            "【异常处理】失败的子任务异常会被聚合，可以通过 throwIfFailed 统一处理。",
            "【取消传播】JEP 453：If the owner thread is interrupted, cancellation flows to all subtasks——中断传播到所有子任务。"
        ],
        handsOnPath: [
            "ShutdownOnFailure：try (var scope = new StructuredTaskScope.ShutdownOnFailure()) { scope.fork(t1); scope.fork(t2); scope.join().throwIfFailed(); }",
            "ShutdownOnSuccess：try (var scope = new StructuredTaskScope.ShutdownOnSuccess<String>()) { scope.fork(t1); scope.join(); return scope.result(); }",
            "异常处理：try { scope.join().throwIfFailed(); } catch (ExecutionException e) { handle(e.getCause()); }",
            "结果组合：String r1 = task1.get(); String r2 = task2.get(); return combine(r1, r2);",
            "竞速模式：fork 多个服务，ShutdownOnSuccess 返回最快的响应。",
            "全部完成：fork 多个查询，ShutdownOnFailure 确保全部成功。"
        ],
        selfCheck: [
            "ShutdownOnFailure 和 ShutdownOnSuccess 的区别是什么？",
            "什么场景使用 ShutdownOnFailure？什么场景使用 ShutdownOnSuccess？",
            "如何处理 ShutdownOnFailure 中的异常？",
            "ShutdownOnSuccess.result() 返回什么？",
            "如果所有子任务都失败，ShutdownOnSuccess 会怎样？"
        ],
        extensions: [
            "研究自定义 StructuredTaskScope 策略。",
            "了解异常聚合的实现机制。",
            "探索结构化并发与 Circuit Breaker 模式的结合。",
            "学习超时与取消的最佳实践。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/453",
            "https://dev.java/learn/structured-concurrency/"
        ]
    },
    "jf-w14-3": {
        lessonId: "jf-w14-3",
        background: [
            "【并行服务调用】同时调用多个微服务，汇总结果返回给客户端。",
            "【超时控制】JEP 453：joinUntil(Instant deadline)——设置截止时间，超时自动取消。",
            "【嵌套作用域】子任务内可以再创建 StructuredTaskScope，形成嵌套结构。",
            "【虚拟线程配合】JEP 453：fork defaults to virtual threads——与虚拟线程配合效果最佳。",
            "【资源清理】JEP 453：No thread leaks occur——作用域关闭确保无线程泄漏。"
        ],
        keyDifficulties: [
            "【超时处理】joinUntil 超时后子任务被取消，需要检查结果状态。",
            "【异常传播】内层异常可以传播到外层，保持异常链。",
            "【上下文传递】结合 ScopedValue 传递请求上下文到子任务。",
            "【死锁避免】确保所有子任务最终完成或取消，避免无限阻塞。"
        ],
        handsOnPath: [
            "服务聚合：var user = scope.fork(() -> userService.get(id)); var orders = scope.fork(() -> orderService.list(id)); scope.join(); return new Profile(user.get(), orders.get());",
            "超时控制：scope.joinUntil(Instant.now().plusSeconds(5)); if (task.state() != SUCCESS) { fallback(); }",
            "嵌套作用域：scope.fork(() -> { try (var inner = new StructuredTaskScope<>()) { ... } });",
            "上下文传递：ScopedValue.where(USER, user).run(() -> { scope.fork(task); });",
            "错误回退：catch (TimeoutException e) { return cachedValue; }",
            "日志追踪：记录每个子任务的开始、完成和耗时。"
        ],
        selfCheck: [
            "如何设置结构化并发的超时？",
            "超时后子任务会怎样？",
            "如何在子任务间传递上下文（如用户信息）？",
            "嵌套 StructuredTaskScope 有什么注意事项？",
            "为什么结构化并发与虚拟线程配合效果最佳？"
        ],
        extensions: [
            "研究结构化并发在 API Gateway 中的应用。",
            "了解分布式追踪与结构化并发的集成。",
            "探索结构化并发的性能测试方法。",
            "学习如何优雅处理部分失败。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/453",
            "https://dev.java/learn/structured-concurrency/"
        ]
    }
}

export const week14Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w14-1": [
        {
            id: "jf-w14-1-q1",
            question: "Structured Concurrency 的核心类是什么？",
            options: [
                "ExecutorService",
                "StructuredTaskScope",
                "ForkJoinPool",
                "CompletableFuture"
            ],
            answer: 1,
            rationale: "JEP 453：StructuredTaskScope is the principal class enabling structured concurrent programming。"
        },
        {
            id: "jf-w14-1-q2",
            question: "fork() 方法返回什么？",
            options: [
                "Future",
                "Thread",
                "Subtask",
                "Callable"
            ],
            answer: 2,
            rationale: "JEP 453：fork() returns a Subtask object rather than a Future。"
        },
        {
            id: "jf-w14-1-q3",
            question: "join() 的作用是什么？",
            options: [
                "启动子任务",
                "阻塞直到所有子任务完成",
                "取消子任务",
                "创建线程"
            ],
            answer: 1,
            rationale: "JEP 453：join() blocks until all subtasks complete (successfully, fail, or are cancelled)。"
        },
        {
            id: "jf-w14-1-q4",
            question: "结构化并发的核心理念是什么？",
            options: [
                "最大化并行度",
                "子任务生命周期绑定到父任务",
                "使用线程池",
                "异步回调"
            ],
            answer: 1,
            rationale: "JEP 453：If a task splits into subtasks then they all return to the same place。"
        },
        {
            id: "jf-w14-1-q5",
            question: "Subtask 的状态包括哪些？",
            options: [
                "RUNNING, STOPPED, FAILED",
                "SUCCESS, FAILED, UNAVAILABLE",
                "PENDING, COMPLETED, ERROR",
                "NEW, RUNNING, DONE"
            ],
            answer: 1,
            rationale: "Subtask 有三种状态：SUCCESS、FAILED、UNAVAILABLE。"
        },
        {
            id: "jf-w14-1-q6",
            question: "什么时候可以调用 subtask.get()？",
            options: [
                "任何时候",
                "fork() 之后立即",
                "join() 返回后且状态为 SUCCESS",
                "只有失败时"
            ],
            answer: 2,
            rationale: "JEP 453：get() callable only after successful completion and after join() returns。"
        },
        {
            id: "jf-w14-1-q7",
            question: "作用域关闭时子任务线程会怎样？",
            options: [
                "继续运行",
                "全部终止",
                "暂停",
                "抛出异常"
            ],
            answer: 1,
            rationale: "JEP 453：All subtask threads terminate once the scope closes; no thread leaks occur。"
        },
        {
            id: "jf-w14-1-q8",
            question: "StructuredTaskScope 需要如何关闭？",
            options: [
                "不需要关闭",
                "使用 try-with-resources",
                "调用 stop()",
                "等待超时"
            ],
            answer: 1,
            rationale: "StructuredTaskScope 实现 AutoCloseable，应使用 try-with-resources 确保正确关闭。"
        },
        {
            id: "jf-w14-1-q9",
            question: "fork() 默认使用什么类型的线程？",
            options: [
                "平台线程",
                "虚拟线程",
                "守护线程",
                "主线程"
            ],
            answer: 1,
            rationale: "fork 默认使用虚拟线程执行子任务，与虚拟线程配合效果最佳。"
        },
        {
            id: "jf-w14-1-q10",
            question: "一个子任务失败时，其他子任务会怎样？",
            options: [
                "继续执行",
                "可以被自动取消（取决于策略）",
                "立即成功",
                "重试"
            ],
            answer: 1,
            rationale: "JEP 453：When one subtask fails, siblings are cancelled if incomplete（取决于策略）。"
        },
        {
            id: "jf-w14-1-q11",
            question: "结构化并发与传统并发的主要区别是什么？",
            options: [
                "性能更好",
                "有明确的入口和出口，子任务生命周期受控",
                "使用更多线程",
                "不支持取消"
            ],
            answer: 1,
            rationale: "JEP 453：Well-defined entry and exit points analogous to single-threaded code structure。"
        },
        {
            id: "jf-w14-1-q12",
            question: "如何设置结构化并发的超时？",
            options: [
                "setTimeout()",
                "joinUntil(Instant deadline)",
                "scope.timeout()",
                "Thread.sleep()"
            ],
            answer: 1,
            rationale: "使用 joinUntil(Instant deadline) 设置截止时间，超时自动取消子任务。"
        }
    ],
    "jf-w14-2": [
        {
            id: "jf-w14-2-q1",
            question: "ShutdownOnFailure 的策略是什么？",
            options: [
                "任一成功就返回",
                "任一失败就取消其他并传播异常",
                "等待所有完成",
                "忽略失败"
            ],
            answer: 1,
            rationale: "JEP 453：ShutdownOnFailure cancels remaining when any fails——任一失败立即取消其他。"
        },
        {
            id: "jf-w14-2-q2",
            question: "ShutdownOnSuccess 的策略是什么？",
            options: [
                "任一失败就返回",
                "任一成功就取消其他并返回结果",
                "等待所有成功",
                "重试失败"
            ],
            answer: 1,
            rationale: "JEP 453：ShutdownOnSuccess cancels unfinished when one succeeds——任一成功立即返回。"
        },
        {
            id: "jf-w14-2-q3",
            question: "throwIfFailed() 的作用是什么？",
            options: [
                "抛出所有异常",
                "检查是否有失败，有则抛出聚合异常",
                "忽略失败",
                "重试失败任务"
            ],
            answer: 1,
            rationale: "throwIfFailed() 检查子任务是否有失败，有则抛出 ExecutionException。"
        },
        {
            id: "jf-w14-2-q4",
            question: "ShutdownOnSuccess.result() 返回什么？",
            options: [
                "所有结果的列表",
                "第一个成功的结果",
                "最后一个结果",
                "null"
            ],
            answer: 1,
            rationale: "result() 返回第一个成功完成的子任务的结果。"
        },
        {
            id: "jf-w14-2-q5",
            question: "什么场景适合使用 ShutdownOnFailure？",
            options: [
                "只需要一个结果",
                "需要所有子任务都成功",
                "竞速选最快",
                "不关心结果"
            ],
            answer: 1,
            rationale: "ShutdownOnFailure 适合需要所有结果的场景，任一失败则整体失败。"
        },
        {
            id: "jf-w14-2-q6",
            question: "什么场景适合使用 ShutdownOnSuccess？",
            options: [
                "需要所有结果",
                "竞速多个服务，取最快响应",
                "串行执行",
                "重试所有"
            ],
            answer: 1,
            rationale: "ShutdownOnSuccess 适合竞速场景，如从多个镜像获取数据，取最快的。"
        },
        {
            id: "jf-w14-2-q7",
            question: "如果所有子任务都失败，ShutdownOnSuccess 会怎样？",
            options: [
                "返回 null",
                "抛出异常",
                "返回默认值",
                "无限等待"
            ],
            answer: 1,
            rationale: "所有子任务都失败时，ShutdownOnSuccess 会抛出异常。"
        },
        {
            id: "jf-w14-2-q8",
            question: "中断父线程时子任务会怎样？",
            options: [
                "继续执行",
                "取消传播到所有子任务",
                "暂停",
                "抛出异常"
            ],
            answer: 1,
            rationale: "JEP 453：If the owner thread is interrupted, cancellation flows to all subtasks。"
        },
        {
            id: "jf-w14-2-q9",
            question: "以下哪个是正确的 ShutdownOnFailure 用法？",
            options: [
                "new ShutdownOnFailure().join()",
                "try (var scope = new StructuredTaskScope.ShutdownOnFailure()) { scope.join().throwIfFailed(); }",
                "ShutdownOnFailure.run(task)",
                "scope.shutdownOnFailure()"
            ],
            answer: 1,
            rationale: "使用 try-with-resources 创建 scope，fork 任务，join 后 throwIfFailed 检查异常。"
        },
        {
            id: "jf-w14-2-q10",
            question: "异常聚合的作用是什么？",
            options: [
                "忽略异常",
                "收集多个失败的异常，统一处理",
                "只保留第一个异常",
                "重试失败任务"
            ],
            answer: 1,
            rationale: "JEP 453：Shutdown policies aggregate and handle failures——聚合多个失败异常。"
        },
        {
            id: "jf-w14-2-q11",
            question: "短路求值在 ShutdownOnFailure 中的表现是什么？",
            options: [
                "等待所有完成",
                "一个失败立即停止，不等待其他",
                "并行执行所有",
                "串行执行"
            ],
            answer: 1,
            rationale: "JEP 453：Short-circuiting error handling——失败时快速终止，不等待其他。"
        },
        {
            id: "jf-w14-2-q12",
            question: "如何处理 throwIfFailed() 抛出的异常？",
            options: [
                "不能处理",
                "catch (ExecutionException e) { handle(e.getCause()); }",
                "忽略",
                "重试"
            ],
            answer: 1,
            rationale: "使用 try-catch 捕获 ExecutionException，通过 getCause() 获取原始异常。"
        }
    ],
    "jf-w14-3": [
        {
            id: "jf-w14-3-q1",
            question: "如何并行调用多个微服务并汇总结果？",
            options: [
                "串行调用",
                "使用 StructuredTaskScope fork 多个服务调用，join 后组合结果",
                "使用回调",
                "使用消息队列"
            ],
            answer: 1,
            rationale: "fork 多个服务调用，join 等待全部完成，然后组合各子任务的结果。"
        },
        {
            id: "jf-w14-3-q2",
            question: "joinUntil 超时后会发生什么？",
            options: [
                "等待继续",
                "子任务被取消，抛出 TimeoutException",
                "返回 null",
                "重试"
            ],
            answer: 1,
            rationale: "joinUntil 超时后未完成的子任务被取消，抛出 TimeoutException。"
        },
        {
            id: "jf-w14-3-q3",
            question: "可以在子任务内创建新的 StructuredTaskScope 吗？",
            options: [
                "不可以",
                "可以，形成嵌套作用域",
                "需要特殊权限",
                "只能创建一层"
            ],
            answer: 1,
            rationale: "子任务内可以再创建 StructuredTaskScope，形成嵌套结构。"
        },
        {
            id: "jf-w14-3-q4",
            question: "如何在子任务间传递请求上下文？",
            options: [
                "全局变量",
                "ScopedValue",
                "ThreadLocal（不推荐）",
                "方法参数"
            ],
            answer: 1,
            rationale: "结合 ScopedValue 传递请求上下文到子任务，避免 ThreadLocal 的问题。"
        },
        {
            id: "jf-w14-3-q5",
            question: "为什么结构化并发与虚拟线程配合效果最佳？",
            options: [
                "语法更简单",
                "虚拟线程轻量，可以大量 fork 而不耗尽系统资源",
                "虚拟线程更快",
                "没有特别原因"
            ],
            answer: 1,
            rationale: "虚拟线程轻量级，可以为每个子任务创建虚拟线程而不会耗尽系统资源。"
        },
        {
            id: "jf-w14-3-q6",
            question: "超时后如何提供回退值？",
            options: [
                "无法提供",
                "catch TimeoutException 返回缓存值或默认值",
                "自动提供",
                "重试直到成功"
            ],
            answer: 1,
            rationale: "捕获 TimeoutException，在 catch 块中返回缓存值或默认值作为回退。"
        },
        {
            id: "jf-w14-3-q7",
            question: "结构化并发如何避免线程泄漏？",
            options: [
                "使用线程池",
                "作用域关闭时确保所有子任务线程终止",
                "手动终止",
                "超时自动清理"
            ],
            answer: 1,
            rationale: "JEP 453：All subtask threads terminate once the scope closes; no thread leaks occur。"
        },
        {
            id: "jf-w14-3-q8",
            question: "嵌套作用域中内层异常如何传播？",
            options: [
                "被吞掉",
                "可以传播到外层，保持异常链",
                "只在内层处理",
                "自动重试"
            ],
            answer: 1,
            rationale: "内层异常可以通过抛出传播到外层，保持完整的异常链。"
        },
        {
            id: "jf-w14-3-q9",
            question: "结构化并发在 API Gateway 中的典型应用是什么？",
            options: [
                "日志记录",
                "并行调用多个后端服务，聚合响应",
                "身份验证",
                "缓存管理"
            ],
            answer: 1,
            rationale: "API Gateway 常需要并行调用多个后端服务，结构化并发非常适合这种聚合场景。"
        },
        {
            id: "jf-w14-3-q10",
            question: "如何检查子任务是否因超时被取消？",
            options: [
                "task.isCancelled()",
                "task.state() == UNAVAILABLE",
                "task.isTimeout()",
                "无法检查"
            ],
            answer: 1,
            rationale: "超时后子任务状态变为 UNAVAILABLE，可以通过 state() 检查。"
        },
        {
            id: "jf-w14-3-q11",
            question: "如何记录每个子任务的执行时间？",
            options: [
                "无法记录",
                "在 fork 的 Callable 中添加计时逻辑",
                "自动记录",
                "使用 profiler"
            ],
            answer: 1,
            rationale: "在 fork 的 Callable 中记录开始和结束时间，用于性能分析和日志追踪。"
        },
        {
            id: "jf-w14-3-q12",
            question: "部分失败时如何优雅处理？",
            options: [
                "全部重试",
                "使用自定义策略，根据成功的子任务返回部分结果",
                "忽略失败",
                "抛出异常"
            ],
            answer: 1,
            rationale: "可以自定义策略，检查各子任务状态，对成功的返回结果，失败的使用默认值。"
        }
    ]
}
