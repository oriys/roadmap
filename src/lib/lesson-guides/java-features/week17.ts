import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week17Guides: Record<string, LessonGuide> = {
    "jf-w17-1": {
        lessonId: "jf-w17-1",
        background: [
            "【ScopedValue 定义】JEP 446：Scoped values enable sharing of immutable data within and across threads——在线程间安全共享不可变数据。",
            "【核心 API】JEP 446：ScopedValue.where(V, value).run(() -> { V.get(); })——绑定值后执行代码。",
            "【不可变性】JEP 446：Immutable, write-once——值一旦绑定不可修改。",
            "【有界生命周期】JEP 446：Bounded (scope duration)——值只在 run/call 作用域内有效。",
            "【Java 21 预览】ScopedValue 在 Java 21 为预览特性（JEP 446）。"
        ],
        keyDifficulties: [
            "【where 语义】where() 创建绑定，不立即生效，需要 run() 或 call() 激活。",
            "【get 限制】只能在绑定作用域内调用 get()，否则抛出 NoSuchElementException。",
            "【isBound 检查】使用 isBound() 检查当前线程是否有绑定。",
            "【嵌套绑定】内层可以重新绑定值，不影响外层。"
        ],
        handsOnPath: [
            "声明：private static final ScopedValue<User> CURRENT_USER = ScopedValue.newInstance();",
            "绑定运行：ScopedValue.where(CURRENT_USER, user).run(() -> { process(); });",
            "获取值：User user = CURRENT_USER.get();",
            "带返回值：String result = ScopedValue.where(CURRENT_USER, user).call(() -> compute());",
            "检查绑定：if (CURRENT_USER.isBound()) { ... }",
            "嵌套：ScopedValue.where(CURRENT_USER, admin).run(() -> { ... ScopedValue.where(CURRENT_USER, guest).run(...); });"
        ],
        selfCheck: [
            "ScopedValue 解决了什么问题？",
            "where().run() 的执行流程是什么？",
            "在作用域外调用 get() 会怎样？",
            "如何检查 ScopedValue 是否有绑定？",
            "嵌套绑定如何工作？"
        ],
        extensions: [
            "研究 ScopedValue 的实现原理。",
            "了解 ScopedValue 与虚拟线程的关系。",
            "探索 ScopedValue 在 Web 框架中的应用。",
            "学习 ScopedValue 的性能特征。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/446",
            "https://dev.java/learn/scoped-values/"
        ]
    },
    "jf-w17-2": {
        lessonId: "jf-w17-2",
        background: [
            "【不可变 vs 可变】JEP 446：ScopedValue immutable, ThreadLocal mutable via set()——ScopedValue 不可变，ThreadLocal 可变。",
            "【生命周期】JEP 446：ScopedValue bounded, ThreadLocal unbounded——ScopedValue 有界，ThreadLocal 无界。",
            "【继承效率】JEP 446：ScopedValue zero-copy sharing via StructuredTaskScope——子线程零拷贝继承。",
            "【内存效率】JEP 446：ThreadLocal significant footprint with many threads——ThreadLocal 在虚拟线程中占用大量内存。",
            "【读取性能】JEP 446：Reading is often as fast as reading a local variable——读取性能接近本地变量。"
        ],
        keyDifficulties: [
            "【内存问题】百万虚拟线程各自的 ThreadLocal 副本会占用 GB 级内存。",
            "【泄漏风险】ThreadLocal 忘记 remove() 会导致内存泄漏，ScopedValue 自动清理。",
            "【继承开销】InheritableThreadLocal 复制所有值到子线程，ScopedValue 共享引用。",
            "【安全性】ThreadLocal 可被任意修改，ScopedValue 只读，单向数据流。"
        ],
        handsOnPath: [
            "ThreadLocal（旧）：ThreadLocal<User> ctx = new ThreadLocal<>(); ctx.set(user); ctx.get(); ctx.remove();",
            "ScopedValue（新）：ScopedValue.where(CTX, user).run(() -> { CTX.get(); });",
            "子线程继承：scope.fork(() -> { CURRENT_USER.get(); }); // 自动继承",
            "避免泄漏：ScopedValue 作用域结束自动清理，无需手动 remove",
            "性能对比：ScopedValue.get() 性能接近字段访问",
            "迁移检查：将 ThreadLocal.set/get/remove 替换为 ScopedValue.where/run/get"
        ],
        selfCheck: [
            "ScopedValue 与 ThreadLocal 的主要区别是什么？",
            "为什么 ThreadLocal 在虚拟线程中有问题？",
            "ScopedValue 如何实现子线程继承？",
            "如何从 ThreadLocal 迁移到 ScopedValue？",
            "ScopedValue 的读取性能如何？"
        ],
        extensions: [
            "研究 ThreadLocal 内存泄漏的案例。",
            "了解 ScopedValue 在高并发场景的表现。",
            "探索 ScopedValue 与 StructuredTaskScope 的配合。",
            "学习 ScopedValue 的最佳实践。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/446",
            "https://dev.java/learn/scoped-values/"
        ]
    },
    "jf-w17-3": {
        lessonId: "jf-w17-3",
        background: [
            "【请求上下文】传递用户信息、租户 ID、追踪 ID 等请求级上下文。",
            "【结构化并发配合】JEP 446：Child threads via StructuredTaskScope automatically inherit——子任务自动继承父任务的绑定。",
            "【递归检测】使用 ScopedValue 检测递归调用，防止无限循环。",
            "【事务上下文】嵌套事务可以用嵌套绑定实现。",
            "【日志上下文】MDC 风格的日志上下文传递。"
        ],
        keyDifficulties: [
            "【Web 请求】在请求开始时绑定用户/租户，整个请求处理链可访问。",
            "【并发任务】fork 的子任务自动继承上下文，无需手动传递。",
            "【优先于参数传递】避免在深层调用链中传递上下文参数。",
            "【框架集成】Spring 等框架正在添加 ScopedValue 支持。"
        ],
        handsOnPath: [
            "请求上下文：ScopedValue.where(USER, user).where(TENANT, tenant).run(this::handleRequest);",
            "服务访问：public void process() { User user = USER.get(); /* 无需参数 */ }",
            "子任务继承：scope.fork(() -> { log(\"User: \" + USER.get()); });",
            "递归检测：ScopedValue.where(IN_PROGRESS, true).run(() -> { if (IN_PROGRESS.orElse(false)) return; });",
            "日志上下文：ScopedValue.where(TRACE_ID, id).run(() -> { logger.info(\"Processing\"); });",
            "嵌套事务：ScopedValue.where(TX, newTx).run(() -> { /* 新事务 */ });"
        ],
        selfCheck: [
            "ScopedValue 如何传递请求上下文？",
            "子任务如何获取父任务的 ScopedValue？",
            "ScopedValue 相比方法参数传递上下文有什么优势？",
            "如何使用 ScopedValue 实现递归检测？",
            "ScopedValue 在日志追踪中的应用？"
        ],
        extensions: [
            "研究 ScopedValue 在微服务追踪中的应用。",
            "了解 Spring 对 ScopedValue 的支持计划。",
            "探索 ScopedValue 在多租户系统中的应用。",
            "学习 ScopedValue 的测试策略。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/446",
            "https://dev.java/learn/scoped-values/"
        ]
    }
}

export const week17Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w17-1": [
        {
            id: "jf-w17-1-q1",
            question: "ScopedValue 的核心 API 模式是什么？",
            options: [
                "set/get/remove",
                "where(key, value).run(() -> { key.get() })",
                "put/get/delete",
                "bind/execute/unbind"
            ],
            answer: 1,
            rationale: "JEP 446：ScopedValue.where(V, value).run(() -> { V.get() }) 是核心 API 模式。"
        },
        {
            id: "jf-w17-1-q2",
            question: "ScopedValue 的值可以修改吗？",
            options: [
                "可以，使用 set()",
                "不可以，绑定后不可变",
                "只能在作用域内修改",
                "取决于类型"
            ],
            answer: 1,
            rationale: "JEP 446：Immutable, write-once——ScopedValue 的值一旦绑定不可修改。"
        },
        {
            id: "jf-w17-1-q3",
            question: "在作用域外调用 ScopedValue.get() 会怎样？",
            options: [
                "返回 null",
                "返回默认值",
                "抛出 NoSuchElementException",
                "阻塞等待"
            ],
            answer: 2,
            rationale: "在没有绑定的作用域内调用 get() 会抛出 NoSuchElementException。"
        },
        {
            id: "jf-w17-1-q4",
            question: "如何检查 ScopedValue 是否有绑定？",
            options: [
                "isSet()",
                "isBound()",
                "hasValue()",
                "exists()"
            ],
            answer: 1,
            rationale: "使用 isBound() 检查当前线程是否有该 ScopedValue 的绑定。"
        },
        {
            id: "jf-w17-1-q5",
            question: "where() 方法做了什么？",
            options: [
                "立即绑定值",
                "创建绑定配置，等待 run/call 激活",
                "修改现有绑定",
                "删除绑定"
            ],
            answer: 1,
            rationale: "where() 创建绑定配置，需要 run() 或 call() 才能激活绑定。"
        },
        {
            id: "jf-w17-1-q6",
            question: "ScopedValue 的生命周期是什么？",
            options: [
                "线程生命周期",
                "应用生命周期",
                "run/call 作用域",
                "无限"
            ],
            answer: 2,
            rationale: "JEP 446：Bounded (scope duration)——值只在 run/call 的作用域内有效。"
        },
        {
            id: "jf-w17-1-q7",
            question: "如何创建 ScopedValue 实例？",
            options: [
                "new ScopedValue<>()",
                "ScopedValue.newInstance()",
                "ScopedValue.create()",
                "ScopedValue.of()"
            ],
            answer: 1,
            rationale: "使用 ScopedValue.newInstance() 创建新的 ScopedValue 实例。"
        },
        {
            id: "jf-w17-1-q8",
            question: "嵌套绑定的行为是什么？",
            options: [
                "抛出异常",
                "内层覆盖外层，退出内层后恢复外层值",
                "忽略内层",
                "合并值"
            ],
            answer: 1,
            rationale: "内层可以重新绑定值，退出内层作用域后自动恢复外层的绑定。"
        },
        {
            id: "jf-w17-1-q9",
            question: "ScopedValue 通常声明为什么？",
            options: [
                "实例字段",
                "static final 字段",
                "局部变量",
                "方法参数"
            ],
            answer: 1,
            rationale: "ScopedValue 通常声明为 private static final 字段，作为共享的键。"
        },
        {
            id: "jf-w17-1-q10",
            question: "run() 和 call() 的区别是什么？",
            options: [
                "run 更快",
                "run 无返回值，call 有返回值",
                "call 是异步的",
                "没有区别"
            ],
            answer: 1,
            rationale: "run() 执行 Runnable 无返回值，call() 执行 Callable 有返回值。"
        },
        {
            id: "jf-w17-1-q11",
            question: "orElse(defaultValue) 的作用是什么？",
            options: [
                "设置默认值",
                "在无绑定时返回默认值",
                "修改绑定",
                "抛出异常"
            ],
            answer: 1,
            rationale: "orElse(defaultValue) 在没有绑定时返回默认值，避免抛出异常。"
        },
        {
            id: "jf-w17-1-q12",
            question: "多个 ScopedValue 可以同时绑定吗？",
            options: [
                "不可以",
                "可以，使用链式 where().where()",
                "需要特殊配置",
                "只能绑定两个"
            ],
            answer: 1,
            rationale: "可以链式调用：ScopedValue.where(A, a).where(B, b).run(...)。"
        }
    ],
    "jf-w17-2": [
        {
            id: "jf-w17-2-q1",
            question: "ScopedValue 与 ThreadLocal 的主要区别是什么？",
            options: [
                "性能不同",
                "ScopedValue 不可变有界，ThreadLocal 可变无界",
                "语法不同",
                "没有区别"
            ],
            answer: 1,
            rationale: "JEP 446：ScopedValue 不可变、有界生命周期；ThreadLocal 可变、无界生命周期。"
        },
        {
            id: "jf-w17-2-q2",
            question: "为什么 ThreadLocal 在虚拟线程中有问题？",
            options: [
                "不支持虚拟线程",
                "百万虚拟线程各自副本占用大量内存",
                "性能差",
                "会导致死锁"
            ],
            answer: 1,
            rationale: "JEP 446：ThreadLocal significant footprint with many threads——内存占用问题。"
        },
        {
            id: "jf-w17-2-q3",
            question: "ScopedValue 如何实现子线程继承？",
            options: [
                "复制所有值",
                "通过 StructuredTaskScope 零拷贝共享",
                "不支持继承",
                "手动传递"
            ],
            answer: 1,
            rationale: "JEP 446：Zero-copy sharing via StructuredTaskScope——零拷贝共享引用。"
        },
        {
            id: "jf-w17-2-q4",
            question: "ThreadLocal 的泄漏风险是什么？",
            options: [
                "没有泄漏风险",
                "忘记调用 remove() 导致值残留",
                "只在虚拟线程中有",
                "自动清理"
            ],
            answer: 1,
            rationale: "ThreadLocal 需要手动 remove()，忘记会导致内存泄漏，尤其在线程池中。"
        },
        {
            id: "jf-w17-2-q5",
            question: "ScopedValue 的读取性能如何？",
            options: [
                "比 ThreadLocal 慢",
                "接近本地变量的访问速度",
                "需要同步，较慢",
                "取决于值类型"
            ],
            answer: 1,
            rationale: "JEP 446：Reading is often as fast as reading a local variable。"
        },
        {
            id: "jf-w17-2-q6",
            question: "InheritableThreadLocal 的问题是什么？",
            options: [
                "不支持继承",
                "复制所有值到子线程，开销大",
                "只支持平台线程",
                "值会丢失"
            ],
            answer: 1,
            rationale: "InheritableThreadLocal 复制所有值到子线程，ScopedValue 共享引用更高效。"
        },
        {
            id: "jf-w17-2-q7",
            question: "ScopedValue 的安全优势是什么？",
            options: [
                "加密存储",
                "只读，单向数据流，不能被任意修改",
                "权限控制",
                "没有安全优势"
            ],
            answer: 1,
            rationale: "JEP 446：ScopedValue 只读，防止子任务意外修改父任务的上下文。"
        },
        {
            id: "jf-w17-2-q8",
            question: "如何从 ThreadLocal 迁移到 ScopedValue？",
            options: [
                "自动迁移",
                "将 set/get/remove 替换为 where/run/get",
                "不兼容，无法迁移",
                "只改变类型"
            ],
            answer: 1,
            rationale: "迁移需要重构：ThreadLocal 的 set/get/remove 模式改为 where/run/get 模式。"
        },
        {
            id: "jf-w17-2-q9",
            question: "ScopedValue 何时自动清理？",
            options: [
                "GC 时",
                "run/call 作用域结束时",
                "手动调用 remove",
                "线程结束时"
            ],
            answer: 1,
            rationale: "ScopedValue 在 run/call 作用域结束时自动清理绑定。"
        },
        {
            id: "jf-w17-2-q10",
            question: "ScopedValue 与 StructuredTaskScope 的关系是什么？",
            options: [
                "无关",
                "StructuredTaskScope fork 的子任务自动继承 ScopedValue",
                "冲突，不能一起使用",
                "ScopedValue 包含 StructuredTaskScope"
            ],
            answer: 1,
            rationale: "JEP 446：通过 StructuredTaskScope 创建的子任务自动继承父任务的 ScopedValue。"
        },
        {
            id: "jf-w17-2-q11",
            question: "为什么说 ScopedValue 是单向数据流？",
            options: [
                "只能向下传递",
                "绑定后不可修改，子任务不能影响父任务",
                "只能读取一次",
                "数据流是加密的"
            ],
            answer: 1,
            rationale: "JEP 446：One-way data flow prevents unauthorized access or modification。"
        },
        {
            id: "jf-w17-2-q12",
            question: "ScopedValue 适合替代 ThreadLocal 的哪些场景？",
            options: [
                "所有场景",
                "常量数据传递、请求上下文、递归检测",
                "可变状态",
                "缓存"
            ],
            answer: 1,
            rationale: "JEP 446：Constant data transmission, recursion detection, nested transactions。"
        }
    ],
    "jf-w17-3": [
        {
            id: "jf-w17-3-q1",
            question: "ScopedValue 如何传递请求上下文？",
            options: [
                "全局变量",
                "where(USER, user).run(handleRequest)",
                "方法参数",
                "HTTP Header"
            ],
            answer: 1,
            rationale: "在请求入口绑定用户/租户，整个请求处理链通过 get() 访问。"
        },
        {
            id: "jf-w17-3-q2",
            question: "子任务如何获取父任务的 ScopedValue？",
            options: [
                "手动传递",
                "StructuredTaskScope fork 的子任务自动继承",
                "重新绑定",
                "无法获取"
            ],
            answer: 1,
            rationale: "JEP 446：Child threads via StructuredTaskScope automatically inherit。"
        },
        {
            id: "jf-w17-3-q3",
            question: "ScopedValue 相比参数传递的优势是什么？",
            options: [
                "性能更好",
                "避免在深层调用链中传递上下文参数",
                "类型更安全",
                "更容易测试"
            ],
            answer: 1,
            rationale: "深层调用无需逐层传递参数，直接 get() 获取上下文。"
        },
        {
            id: "jf-w17-3-q4",
            question: "如何使用 ScopedValue 实现递归检测？",
            options: [
                "计数器",
                "绑定标记值，检查 isBound 或 orElse",
                "异常处理",
                "无法实现"
            ],
            answer: 1,
            rationale: "绑定 IN_PROGRESS=true，递归时检查是否已绑定来检测递归。"
        },
        {
            id: "jf-w17-3-q5",
            question: "ScopedValue 在日志追踪中的应用是什么？",
            options: [
                "记录时间",
                "传递 traceId 到所有日志调用",
                "过滤日志",
                "压缩日志"
            ],
            answer: 1,
            rationale: "绑定 TRACE_ID，所有日志调用通过 get() 获取 traceId 添加到日志。"
        },
        {
            id: "jf-w17-3-q6",
            question: "嵌套事务如何用 ScopedValue 实现？",
            options: [
                "无法实现",
                "嵌套 where().run() 绑定新事务",
                "共享同一事务",
                "使用 ThreadLocal"
            ],
            answer: 1,
            rationale: "内层 where(TX, newTx).run() 绑定新事务，退出后恢复外层事务。"
        },
        {
            id: "jf-w17-3-q7",
            question: "多租户系统中 ScopedValue 的用途是什么？",
            options: [
                "数据隔离",
                "传递租户 ID 到数据访问层",
                "权限验证",
                "计费"
            ],
            answer: 1,
            rationale: "绑定 TENANT_ID，数据访问层自动获取当前租户进行数据隔离。"
        },
        {
            id: "jf-w17-3-q8",
            question: "同时绑定多个 ScopedValue 的语法是什么？",
            options: [
                "where(A, a, B, b)",
                "where(A, a).where(B, b).run(...)",
                "whereAll(map)",
                "不支持"
            ],
            answer: 1,
            rationale: "链式调用 where().where() 可以同时绑定多个 ScopedValue。"
        },
        {
            id: "jf-w17-3-q9",
            question: "服务层方法如何访问请求上下文？",
            options: [
                "通过参数",
                "直接调用 CURRENT_USER.get()",
                "注入依赖",
                "查询数据库"
            ],
            answer: 1,
            rationale: "服务方法直接调用 get() 获取上下文，无需通过参数传递。"
        },
        {
            id: "jf-w17-3-q10",
            question: "ScopedValue 在微服务追踪中的作用是什么？",
            options: [
                "监控性能",
                "传递分布式追踪 ID 到所有子任务",
                "负载均衡",
                "服务发现"
            ],
            answer: 1,
            rationale: "绑定追踪 ID，所有并发子任务自动继承，便于分布式追踪。"
        },
        {
            id: "jf-w17-3-q11",
            question: "框架对 ScopedValue 的支持情况如何？",
            options: [
                "完全不支持",
                "Spring 等框架正在添加支持",
                "只有 JDK 支持",
                "需要第三方库"
            ],
            answer: 1,
            rationale: "Spring Framework 等主流框架正在添加对 ScopedValue 的支持。"
        },
        {
            id: "jf-w17-3-q12",
            question: "如何测试使用 ScopedValue 的代码？",
            options: [
                "无法测试",
                "在测试中使用 where().run() 绑定测试值",
                "Mock ScopedValue",
                "禁用 ScopedValue"
            ],
            answer: 1,
            rationale: "测试中使用 where().run() 绑定测试所需的上下文值。"
        }
    ]
}
