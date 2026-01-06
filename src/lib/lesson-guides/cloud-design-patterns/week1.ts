import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "w1-1": {
        lessonId: "w1-1",
        background: [
            "【核心概念】Azure 架构文档：Retry 模式处理云环境中的'transient faults'（瞬态故障），这些故障通常是'self-correcting'（自纠正的），短时间后重试会成功。瞬态故障包括网络连接暂时中断、服务临时不可用、服务繁忙导致的超时、节流限制（throttling）。",
            "【三种重试策略】Azure 文档定义：Cancel（取消）——非瞬态故障立即报告异常不重试；Retry Immediately（立即重试）——罕见故障如数据包损坏无延迟重试；Retry After Delay（延迟重试）——常见故障等待后重试，延迟可递增或指数增长。",
            "【指数退避算法】AWS 架构博客：Exponential Backoff 通过'base delay multiplied by an exponential factor'增加重试间隔，每次失败后延迟指数增长（2^attempt），防止系统在故障期间被重试请求压垮。",
            "【抖动策略】AWS 文档介绍三种 Jitter 策略：Full Jitter（random(0, backoff)最大变异）、Equal Jitter（backoff/2 + random）、Decorrelated Jitter（基于前次延迟计算）。Jitter 通过引入随机性解决'thundering herd'问题——防止多客户端同时重试导致服务再次崩溃。",
            "【幂等性要求】Azure 文档强调：'operations that are retried should be idempotent'——重试可能导致操作执行多次，必须确保操作可安全重复执行。例如信用卡扣款必须确保只执行一次。",
            "【Resilience4j 实现】Resilience4j Retry 模块提供 maxAttempts（最大尝试次数，默认 3）、waitDuration（重试间隔，默认 500ms）、intervalFunction（间隔函数，支持指数退避）、retryOnResultPredicate（结果判断）、retryExceptions/ignoreExceptions（异常分类）等配置。"
        ],
        keyDifficulties: [
            "【重试风暴风险】Azure 文档警告：激进的重试策略可能加重已超载的服务负担，多层嵌套重试会导致延迟指数级增加。必须设置合理的 cap（最大延迟）和 maxAttempts（最大次数）。",
            "【可重试 vs 不可重试】不同异常类型需要不同处理策略：瞬态故障（超时、503）适合重试；永久性故障（400 业务错误、401 认证失败）不应重试。Resilience4j 通过 retryExceptions/ignoreExceptions 配置实现精确分类。",
            "【与 Circuit Breaker 协同】Azure 文档建议：'Use circuit breakers to detect when faults aren't transient'——当故障预期长期存在时，应使用 Circuit Breaker 而非持续重试。两个模式互补：Retry 处理短期瞬态故障，Circuit Breaker 处理长期故障。",
            "【日志记录策略】Azure 文档建议：早期失败记为信息日志（informational），最后一次失败记为错误日志（error），避免过度告警导致真正问题被淹没。",
            "【事务一致性】重试策略需要考虑事务边界：调整重试策略以最大化事务成功概率，减少撤销整个事务步骤的需要。部分成功后的重试可能导致数据不一致。"
        ],
        handsOnPath: [
            "使用 Resilience4j 创建基本 Retry 配置：RetryConfig.custom().maxAttempts(3).waitDuration(Duration.ofMillis(500)).build()，包装一个模拟失败的服务调用。",
            "实现指数退避策略：使用 IntervalFunction.ofExponentialBackoff(initialInterval, multiplier) 配置递增重试间隔，观察重试时间间隔变化。",
            "添加抖动（Jitter）：配置 IntervalFunction.ofExponentialRandomBackoff()，对比有无 Jitter 时多个并发客户端的重试时间分布。",
            "配置异常分类：使用 retryExceptions(IOException.class, TimeoutException.class) 和 ignoreExceptions(BusinessException.class) 精确控制哪些异常触发重试。",
            "监控重试事件：通过 retry.getEventPublisher().onRetry(event -> log.info()) 记录重试事件，分析重试模式识别潜在问题。",
            "组合 Retry 和 Circuit Breaker：在重试失败后触发熔断，通过 Decorators.ofSupplier(supplier).withRetry(retry).withCircuitBreaker(circuitBreaker) 组合。"
        ],
        selfCheck: [
            "什么是瞬态故障（transient fault）？列举三种常见的瞬态故障类型。",
            "为什么指数退避（Exponential Backoff）比固定间隔重试更好？抖动（Jitter）解决什么问题？",
            "什么情况下不应该使用重试模式？如何区分可重试和不可重试的错误？",
            "Resilience4j Retry 的 maxAttempts 参数包含初始调用吗？如果设置为 3，实际最多调用几次？",
            "为什么重试操作必须是幂等的？举例说明非幂等操作重试会造成什么问题。",
            "Retry 模式和 Circuit Breaker 模式如何协同工作？各自适合处理什么类型的故障？"
        ],
        extensions: [
            "研究 AWS SDK 和 Azure SDK 中内置的重试策略实现，理解生产级重试配置的最佳实践。",
            "阅读 Google Cloud 的 Truncated Exponential Backoff 文档，了解在实际云服务中如何应用退避算法。",
            "探索 Spring Retry 框架与 Resilience4j Retry 的差异，选择适合项目需求的实现。",
            "学习分布式系统中的幂等性设计模式，如 Idempotency Key 和去重机制。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/retry",
            "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/",
            "https://resilience4j.readme.io/docs/retry"
        ]
    },
    "w1-2": {
        lessonId: "w1-2",
        background: [
            "【核心概念】Azure 架构文档：Circuit Breaker 模式通过'temporarily blocking access to a faulty service'防止应用程序反复尝试可能失败的操作。像电路断路器一样，在检测到故障后快速失败，避免资源耗尽和级联故障。",
            "【三态模型】Azure 文档定义三种状态：Closed（正常）——请求正常转发，失败计数器监控错误率；Open（熔断）——请求立即失败返回异常，系统进入恢复等待期；Half-Open（半开）——允许少量探测请求测试服务是否恢复。",
            "【状态转换机制】Azure 文档：Closed 状态下失败超过阈值转为 Open；Open 状态超时后转为 Half-Open；Half-Open 中请求成功转回 Closed，失败则重回 Open。转换由失败率阈值和超时时间控制。",
            "【Martin Fowler 定义】Fowler 将 Circuit Breaker 定义为保护机制：'You wrap a protected function call in a circuit breaker object, which monitors for failures'——通过包装调用并监控失败来保护系统。",
            "【Resilience4j 实现】Circuit Breaker 支持两种滑动窗口：Count-Based（基于调用次数，O(1) 快照）和 Time-Based（基于时间，近乎恒定内存）。关键配置：failureRateThreshold（失败率阈值，默认 50%）、slowCallRateThreshold（慢调用阈值）、waitDurationInOpenState（Open 状态等待时间，默认 60s）。",
            "【线程安全】Resilience4j 文档：实现使用 AtomicReference 进行状态管理，确保线程安全的状态更新。但函数调用本身不同步——如需限制并发执行需配合 Bulkhead。"
        ],
        keyDifficulties: [
            "【阈值配置权衡】failureRateThreshold 太低会过于敏感频繁熔断，太高则无法有效保护。Azure 文档建议：不同错误类型使用不同触发阈值（如超时 10 次 vs 连接失败 3 次），根据服务 SLA 调整。",
            "【Half-Open 状态风险】Azure 文档警告：Half-Open 状态的探测请求数量（permittedNumberOfCallsInHalfOpenState）需要平衡——太少可能误判服务已恢复，太多可能给恢复中的服务带来压力。",
            "【minimumNumberOfCalls 陷阱】Resilience4j 文档：只有调用次数达到 minimumNumberOfCalls（默认 100）后才开始计算失败率。低流量服务可能永远无法触发熔断，需要根据实际流量调低此值。",
            "【HTTP 状态码处理】Azure 文档：需要正确处理 429（Too Many Requests）和 503（Service Unavailable），这些通常提供 Retry-After 头，可用于加速熔断决策或指导恢复时间。",
            "【多实例协调】多个应用实例共享同一个熔断器时需要分布式状态协调。简单方案是每个实例独立熔断，复杂场景可考虑基于 Redis 的分布式熔断器。",
            "【降级策略设计】Open 状态下应返回有意义的默认值或缓存响应，而非总是抛出异常。Azure 文档建议实现 graceful degradation（优雅降级）。"
        ],
        handsOnPath: [
            "创建基本 Circuit Breaker：CircuitBreakerConfig.custom().failureRateThreshold(50).waitDurationInOpenState(Duration.ofMillis(1000)).build()，观察状态转换。",
            "配置滑动窗口：使用 slidingWindowType(COUNT_BASED) 和 slidingWindowSize(10) 基于最近 10 次调用计算失败率。",
            "测试状态转换：编写测试用例模拟连续失败触发 Open，等待超时后进入 Half-Open，成功请求后恢复 Closed。",
            "配置慢调用检测：使用 slowCallDurationThreshold(Duration.ofSeconds(2)) 和 slowCallRateThreshold(50) 检测响应缓慢的服务。",
            "监听状态事件：通过 circuitBreaker.getEventPublisher().onStateTransition(event -> log.info()) 记录状态变化，设置告警。",
            "实现降级策略：使用 Try.of(decorated).recover(throwable -> fallbackValue) 在熔断时返回降级响应。"
        ],
        selfCheck: [
            "Circuit Breaker 的三种状态是什么？各状态下请求如何被处理？",
            "从 Closed 到 Open 的转换条件是什么？从 Half-Open 如何决定下一个状态？",
            "failureRateThreshold 和 minimumNumberOfCalls 如何配合工作？为什么 minimumNumberOfCalls 很重要？",
            "什么是慢调用（slow call）？为什么需要单独配置慢调用阈值？",
            "Circuit Breaker 与 Retry 模式的区别是什么？应该如何组合使用？",
            "在 Open 状态下，应该如何处理请求？什么是优雅降级？"
        ],
        extensions: [
            "研究 Netflix Hystrix 的 Circuit Breaker 实现（虽已停止维护但概念经典），对比与 Resilience4j 的差异。",
            "探索 Istio Service Mesh 中的 Circuit Breaker 配置，了解基础设施层面的熔断实现。",
            "学习如何基于 Redis 实现分布式 Circuit Breaker，支持多实例共享熔断状态。",
            "研究自适应熔断算法，使用机器学习动态调整阈值适应流量模式变化。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker",
            "https://martinfowler.com/bliki/CircuitBreaker.html",
            "https://resilience4j.readme.io/docs/circuitbreaker"
        ]
    },
    "w1-3": {
        lessonId: "w1-3",
        background: [
            "【核心概念】Azure 架构文档：Bulkhead 模式（舱壁模式）通过'isolating elements into pools'将应用程序元素隔离到不同的池中，使得一个故障不会导致整个系统崩溃。名称来源于船舶的分隔舱壁——即使一个舱室进水也不会沉船。",
            "【问题场景】Azure 文档描述三个核心问题：1) 一个服务故障影响所有消费者——级联故障风险；2) 单个客户端高负载耗尽所有资源——资源耗尽；3) 连接池满后影响其他服务请求——多服务场景。",
            "【隔离策略】Azure 文档列举多种隔离对象：消费者端（进程、线程池、信号量）、服务端（虚拟机、容器、进程）、队列（异步消息独立队列）、连接池（每服务专用连接池）。",
            "【Resilience4j 两种实现】SemaphoreBulkhead——使用 Java Semaphore 限制并发执行数，在当前线程执行；ThreadPoolBulkhead——使用有界队列和线程池，在独立线程执行。两者适用不同场景。",
            "【SemaphoreBulkhead 配置】maxConcurrentCalls（最大并发数，默认 25）——'Max amount of parallel executions allowed'；maxWaitDuration（最大等待时间，默认 0）——'Max amount of time a thread should be blocked'。",
            "【ThreadPoolBulkhead 配置】maxThreadPoolSize（最大线程数）、coreThreadPoolSize（核心线程数）、queueCapacity（队列容量，默认 100）、keepAliveDuration（空闲线程超时，默认 20ms）。"
        ],
        keyDifficulties: [
            "【Semaphore vs ThreadPool 选择】Semaphore 在调用线程执行适合同步场景，开销小但无法隔离调用线程；ThreadPool 在独立线程执行适合异步场景，提供真正的线程隔离但有线程切换开销。",
            "【资源浪费风险】Azure 文档警告：Bulkhead 可能导致资源利用效率降低——为每个服务预留专用资源可能造成浪费。需要根据实际负载模式调整池大小。",
            "【maxWaitDuration 策略】设为 0 时拒绝所有超出限制的请求（fail-fast）；设为正值时请求会等待直到有可用槽位或超时。等待可能导致请求堆积，需要根据 SLA 选择。",
            "【队列容量权衡】ThreadPoolBulkhead 的 queueCapacity 太大会导致请求延迟增加，太小会频繁拒绝请求。Azure 建议配合 Queue-Based Load Leveling 模式平滑负载。",
            "【粒度决策】Azure 文档：需要确定隔离级别——按租户、按服务类型、按关键程度。过粗粒度无法有效隔离，过细粒度增加管理复杂性和资源开销。",
            "【与 Circuit Breaker 配合】Resilience4j 文档：Circuit Breaker 确保状态更新线程安全，但函数调用本身不同步。使用 Bulkhead 限制并发执行是必要的补充。"
        ],
        handsOnPath: [
            "创建 SemaphoreBulkhead：BulkheadConfig.custom().maxConcurrentCalls(10).maxWaitDuration(Duration.ofMillis(500)).build()，测试并发限制效果。",
            "创建 ThreadPoolBulkhead：ThreadPoolBulkheadConfig.custom().maxThreadPoolSize(10).coreThreadPoolSize(5).queueCapacity(20).build()，观察线程池行为。",
            "测试超限拒绝：发起超过 maxConcurrentCalls 的并发请求，观察 BulkheadFullException 异常和等待行为。",
            "使用注解配置：在 Spring Boot 中使用 @Bulkhead(name = \"backend\", type = Bulkhead.Type.THREADPOOL) 注解声明式配置。",
            "监控 Bulkhead 事件：通过 bulkhead.getEventPublisher().onCallPermitted/onCallRejected/onCallFinished 监控并发状态。",
            "组合多个模式：Decorators.ofSupplier(supplier).withBulkhead(bulkhead).withCircuitBreaker(circuitBreaker).withRetry(retry) 构建完整弹性策略。"
        ],
        selfCheck: [
            "Bulkhead 模式的名称来源是什么？它解决什么问题？",
            "SemaphoreBulkhead 和 ThreadPoolBulkhead 的主要区别是什么？各适合什么场景？",
            "maxConcurrentCalls 和 maxWaitDuration 如何配合工作？maxWaitDuration 设为 0 的效果是什么？",
            "为什么 Bulkhead 可能导致资源利用效率降低？如何在隔离和效率之间取得平衡？",
            "在 Kubernetes 环境中，如何使用容器资源限制实现 Bulkhead？",
            "Bulkhead、Circuit Breaker、Retry 三个模式如何组合使用？执行顺序是什么？"
        ],
        extensions: [
            "研究 Kubernetes 的资源限制（requests/limits）和 LimitRange 如何在容器层面实现 Bulkhead。",
            "探索 Istio 的 ConnectionPoolSettings 配置，了解 Service Mesh 层面的连接池隔离。",
            "学习 Domain-Driven Design 的 Bounded Context 概念，理解如何围绕业务边界设计 Bulkhead。",
            "研究 Netflix 的 Concurrency Limits 库，了解自适应并发控制算法。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead",
            "https://resilience4j.readme.io/docs/bulkhead",
            "https://www.baeldung.com/resilience4j-bulkhead"
        ]
    },
    "w1-4": {
        lessonId: "w1-4",
        background: [
            "【Throttling 核心概念】Azure 架构文档：Throttling 模式通过'limiting how much an instance, tenant, or service can use resources'控制资源消耗，在极端负载下维持系统功能和 SLA。",
            "【问题场景】Azure 文档：云应用负载随用户和活动变化，突发流量可能超过可用容量。没有限制时系统性能下降或失败，违反 SLA。自动扩展有延迟，无法应对瞬时峰值。",
            "【六种节流策略】Azure 文档列举：1) Request Rejection——拒绝超限请求；2) Functionality Degradation——禁用非核心服务；3) Load Leveling——使用队列平滑负载；4) Priority Queuing——优先处理高价值请求；5) Operation Deferral——延迟低优先级操作；6) Rate Limiting——限制对不可靠服务的并发请求。",
            "【Rate Limiting 核心概念】Azure 文档：Rate Limiting 模式控制应用访问节流服务的速率，减少错误并提高吞吐量可预测性。特别适用于大规模批处理任务。通过消息队列作为缓冲层，Job Processor 以受控速率读取并处理。",
            "【HTTP 状态码】Azure 文档：429（Too Many Requests）——客户端超过预定限制；503（Server Too Busy）——服务遇到意外负载峰值。应包含 Retry-After 头指导客户端重试策略。",
            "【常见限流算法】ByteByteGo 文档：Fixed Window Counter（固定窗口计数）、Sliding Window Log（滑动窗口日志）、Sliding Window Counter（滑动窗口计数）、Token Bucket（令牌桶，允许突发）、Leaky Bucket（漏桶，恒定速率输出）。"
        ],
        keyDifficulties: [
            "【设计阶段决策】Azure 文档警告：Throttling 必须在设计阶段考虑，'difficult to retrofit after implementation'——后期改造困难。需要提前规划限流点和策略。",
            "【与自动扩展配合】Azure 文档：Throttling 是自动扩展的补充而非替代。在扩展延迟期间使用 Throttling 临时控制负载，防止系统在扩展完成前崩溃。",
            "【操作成本差异】Azure 文档：不同操作有不同执行成本（如数据库写入比读取昂贵）。限流策略应考虑操作权重，而非简单计数。",
            "【多进程协调】Azure Rate Limiting 文档：多个进程共享节流服务时需要分布式协调。方案包括：容量分区（如 500 req/s 分成 20 个 25 req/s 的分区）、分布式锁（Azure Storage blob lease、Redis/Redsync、etcd）。",
            "【窗口边界问题】ByteByteGo 文档：Fixed Window 算法在窗口边界容易出现突发（如两个窗口交界处瞬间 2x 请求）。Sliding Window 更精确但实现复杂、内存开销大。",
            "【Token Bucket vs Leaky Bucket】Token Bucket 允许一定程度的突发流量（桶中有令牌时），适合需要弹性的场景；Leaky Bucket 强制恒定速率输出，适合需要平滑流量的场景。"
        ],
        handsOnPath: [
            "实现 Token Bucket 算法：创建一个以固定速率生成令牌的桶，请求消耗令牌，无令牌时拒绝或等待。测试突发流量处理能力。",
            "实现 Sliding Window Counter：维护当前窗口和前一窗口的计数，使用加权计算得到更精确的速率估计。",
            "使用 Resilience4j RateLimiter：RateLimiterConfig.custom().limitForPeriod(10).limitRefreshPeriod(Duration.ofSeconds(1)).build() 配置每秒 10 次限制。",
            "配置 429 响应处理：客户端收到 429 时解析 Retry-After 头，使用指数退避重试或进入队列等待。",
            "实现优先级队列：为 VIP 用户和普通用户分配不同的速率配额，VIP 用户获得更高的 limitForPeriod。",
            "监控限流指标：记录被限流的请求数量、等待时间分布、限流触发原因，用于容量规划。"
        ],
        selfCheck: [
            "Throttling 和 Rate Limiting 的区别是什么？各自侧重解决什么问题？",
            "列举 Azure 文档提到的六种节流策略，各适用于什么场景？",
            "Token Bucket 和 Leaky Bucket 算法的主要区别是什么？各有什么优缺点？",
            "为什么 Fixed Window 算法在窗口边界容易出现突发？Sliding Window 如何解决这个问题？",
            "收到 429 响应时应该如何处理？Retry-After 头有什么作用？",
            "多个应用实例如何协调共享一个节流服务的配额？"
        ],
        extensions: [
            "研究 API Gateway（如 Kong、AWS API Gateway）的限流配置，了解生产环境的限流实践。",
            "探索 Redis 实现的分布式限流算法，如 Redis Cell 模块或 Lua 脚本实现的滑动窗口。",
            "学习 Google Cloud 的自适应限流（Adaptive Throttling），了解如何根据后端负载动态调整限流阈值。",
            "研究 TCP 拥塞控制算法（如 AIMD）与应用层限流的相似性，理解反馈控制原理。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/throttling",
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/rate-limiting-pattern",
            "https://blog.bytebytego.com/p/rate-limiting-fundamentals"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "w1-1": [
        {
            id: "w1-1-q1",
            question: "Azure 架构文档对 Retry 模式处理的故障类型的定义是什么？",
            options: [
                "处理所有类型的系统故障",
                "处理 transient faults（瞬态故障），这些故障通常是 self-correcting（自纠正的）",
                "处理永久性的硬件故障",
                "处理业务逻辑错误"
            ],
            answer: 1,
            rationale: "Azure 文档明确指出 Retry 模式处理'transient faults'（瞬态故障），这些故障'通常是自纠正的'，短时间后重试会成功。"
        },
        {
            id: "w1-1-q2",
            question: "Azure 文档定义的三种重试策略中，'Retry After Delay'策略适用于什么场景？",
            options: [
                "非瞬态故障，立即报告异常",
                "罕见故障如数据包损坏，无延迟重试",
                "常见故障如连接问题或服务繁忙，等待后重试",
                "永久性故障，直接放弃"
            ],
            answer: 2,
            rationale: "Azure 文档：Retry After Delay 适用于'more common connectivity or busy failures'，等待后重试，延迟可递增或指数增长。"
        },
        {
            id: "w1-1-q3",
            question: "AWS 架构博客介绍的 Full Jitter 策略的计算公式是什么？",
            options: [
                "sleep(min(cap, 2^attempt * base))",
                "sleep(random(0, min(cap, 2^attempt * base)))",
                "sleep(temp/2 + random(0, temp/2))",
                "sleep(base * attempt)"
            ],
            answer: 1,
            rationale: "AWS 文档：Full Jitter 公式为'sleep(random(0, min(cap, 2^attempt * base)))'，在 0 到指数退避值之间随机选择延迟。"
        },
        {
            id: "w1-1-q4",
            question: "AWS 文档中 Jitter（抖动）解决的核心问题是什么？",
            options: [
                "提高重试成功率",
                "减少内存使用",
                "防止 thundering herd（雷霆兽群）问题——多客户端同时重试导致服务再次崩溃",
                "加密重试请求"
            ],
            answer: 2,
            rationale: "AWS 文档：Jitter 通过引入随机性解决'thundering herd problem'——防止多客户端在服务恢复后同时重试导致服务再次崩溃。"
        },
        {
            id: "w1-1-q5",
            question: "Azure 文档强调重试操作必须满足什么要求？",
            options: [
                "必须是异步操作",
                "必须是 idempotent（幂等的）",
                "必须在 1 秒内完成",
                "必须使用 HTTPS 协议"
            ],
            answer: 1,
            rationale: "Azure 文档强调：'operations that are retried should be idempotent'——重试可能导致操作执行多次，必须确保操作可安全重复执行。"
        },
        {
            id: "w1-1-q6",
            question: "Resilience4j Retry 的 maxAttempts 参数默认值是多少？它包含初始调用吗？",
            options: [
                "默认 3，不包含初始调用（最多重试 3 次）",
                "默认 3，包含初始调用（最多调用 3 次）",
                "默认 5，不包含初始调用",
                "默认 1，只尝试一次"
            ],
            answer: 1,
            rationale: "Resilience4j 文档：maxAttempts 默认值为 3，且'including the initial call as the first attempt'——包含初始调用，最多调用 3 次。"
        },
        {
            id: "w1-1-q7",
            question: "Azure 文档建议如何处理重试日志记录？",
            options: [
                "所有重试都记录为错误日志",
                "所有重试都记录为警告日志",
                "早期失败记为信息日志，最后一次失败记为错误日志",
                "不记录重试日志以节省存储"
            ],
            answer: 2,
            rationale: "Azure 文档建议：早期失败记为'informational'（信息日志），最后一次失败记为'error'（错误日志），避免过度告警。"
        },
        {
            id: "w1-1-q8",
            question: "Azure 文档建议在什么情况下应该停止使用 Retry 模式，改用其他模式？",
            options: [
                "当重试成功率超过 90% 时",
                "当故障预期长期存在时，应使用 Circuit Breaker 模式",
                "当网络延迟超过 100ms 时",
                "当服务器返回 200 状态码时"
            ],
            answer: 1,
            rationale: "Azure 文档建议：'Use circuit breakers to detect when faults aren't transient'——当故障预期长期存在时应使用 Circuit Breaker 而非持续重试。"
        },
        {
            id: "w1-1-q9",
            question: "Resilience4j Retry 的 waitDuration 参数默认值是多少？",
            options: [
                "100ms",
                "500ms",
                "1000ms",
                "0ms（立即重试）"
            ],
            answer: 1,
            rationale: "Resilience4j 文档：waitDuration 默认值为 500ms，表示重试之间的'Fixed pause between retry attempts'。"
        },
        {
            id: "w1-1-q10",
            question: "以下哪种情况不适合使用 Retry 模式？",
            options: [
                "网络连接暂时中断",
                "服务返回 503 Service Unavailable",
                "服务返回 400 Bad Request（业务逻辑错误）",
                "服务因负载过高超时"
            ],
            answer: 2,
            rationale: "Azure 文档：Retry 适用于瞬态故障。400 Bad Request 通常表示业务逻辑错误（如参数无效），重试不会改变结果，不应使用 Retry。"
        },
        {
            id: "w1-1-q11",
            question: "Azure 文档警告激进的重试策略可能造成什么问题？",
            options: [
                "增加网络带宽消耗",
                "可能加重已超载的服务负担",
                "增加客户端 CPU 使用",
                "导致缓存失效"
            ],
            answer: 1,
            rationale: "Azure 文档警告：'aggressive retry strategy can further burden an already overloaded service'——激进的重试策略可能加重已超载服务的负担。"
        },
        {
            id: "w1-1-q12",
            question: "Resilience4j 提供的 IntervalFunction 支持哪种退避策略？",
            options: [
                "仅支持固定间隔",
                "仅支持线性增长",
                "支持指数退避和随机延迟",
                "仅支持随机间隔"
            ],
            answer: 2,
            rationale: "Resilience4j 文档：提供'Factory methods for calculating waits'包括 Fixed intervals、Exponential backoff (configurable multiplier)、Randomized delays 等。"
        }
    ],
    "w1-2": [
        {
            id: "w1-2-q1",
            question: "Azure 架构文档对 Circuit Breaker 模式核心作用的描述是什么？",
            options: [
                "加速远程服务调用",
                "temporarily blocking access to a faulty service——临时阻止对故障服务的访问",
                "加密服务间通信",
                "负载均衡请求分发"
            ],
            answer: 1,
            rationale: "Azure 文档明确：Circuit Breaker 通过'temporarily blocking access to a faulty service'防止应用程序反复尝试可能失败的操作。"
        },
        {
            id: "w1-2-q2",
            question: "Circuit Breaker 处于 Open 状态时，请求如何被处理？",
            options: [
                "请求被排队等待服务恢复",
                "请求正常转发到服务",
                "请求立即失败，返回异常",
                "请求被路由到备用服务"
            ],
            answer: 2,
            rationale: "Azure 文档：Open 状态下'Requests fail immediately; exception returned to application'——请求立即失败返回异常，避免资源耗尽。"
        },
        {
            id: "w1-2-q3",
            question: "Circuit Breaker 从 Open 状态转换到下一个状态的触发条件是什么？",
            options: [
                "收到管理员手动重置命令",
                "等待超时（waitDurationInOpenState）后转为 Half-Open",
                "下游服务发送恢复通知",
                "失败计数器清零"
            ],
            answer: 1,
            rationale: "Azure 文档：Open 状态'System time-out begins'，超时后'transitions to Half-Open'——等待超时后自动转为 Half-Open 状态。"
        },
        {
            id: "w1-2-q4",
            question: "Martin Fowler 对 Circuit Breaker 的定义是什么？",
            options: [
                "一种负载均衡算法",
                "You wrap a protected function call in a circuit breaker object, which monitors for failures",
                "一种加密通信协议",
                "一种数据库连接池管理机制"
            ],
            answer: 1,
            rationale: "Fowler 定义：'You wrap a protected function call in a circuit breaker object, which monitors for failures'——通过包装调用并监控失败来保护系统。"
        },
        {
            id: "w1-2-q5",
            question: "Resilience4j Circuit Breaker 的 failureRateThreshold 默认值是多少？",
            options: [
                "25%",
                "50%",
                "75%",
                "100%"
            ],
            answer: 1,
            rationale: "Resilience4j 文档：failureRateThreshold 默认值为 50%，'Triggers OPEN state when exceeded'——超过 50% 失败率时触发 Open 状态。"
        },
        {
            id: "w1-2-q6",
            question: "Resilience4j Circuit Breaker 支持的两种滑动窗口类型是什么？",
            options: [
                "Time-Based 和 Size-Based",
                "Count-Based 和 Time-Based",
                "Fixed 和 Sliding",
                "Memory-Based 和 Disk-Based"
            ],
            answer: 1,
            rationale: "Resilience4j 文档：支持'Count-Based'（基于调用次数）和'Time-Based'（基于时间）两种滑动窗口类型。"
        },
        {
            id: "w1-2-q7",
            question: "Resilience4j 的 minimumNumberOfCalls 参数的作用是什么？",
            options: [
                "设置 Half-Open 状态允许的探测请求数",
                "设置触发熔断前需要的最小调用次数，达到后才开始计算失败率",
                "设置 Open 状态的最小持续时间",
                "设置重试的最小次数"
            ],
            answer: 1,
            rationale: "Resilience4j 文档：minimumNumberOfCalls 默认 100，'Required calls before evaluating thresholds'——只有调用次数达到此值后才开始计算失败率。"
        },
        {
            id: "w1-2-q8",
            question: "在 Half-Open 状态下，如果探测请求失败，Circuit Breaker 会转换到什么状态？",
            options: [
                "保持 Half-Open 继续探测",
                "转为 Closed 恢复正常",
                "转回 Open 状态，重启计时器",
                "进入 Disabled 状态"
            ],
            answer: 2,
            rationale: "Azure 文档：Half-Open 状态'If any request fails → reverts to Open, restarts timer'——任何失败都会重回 Open 状态并重启超时计时器。"
        },
        {
            id: "w1-2-q9",
            question: "Azure 文档建议如何处理 HTTP 429 状态码？",
            options: [
                "忽略并继续发送请求",
                "立即终止所有请求",
                "正确处理并利用 Retry-After 头加速熔断决策",
                "将请求重定向到其他服务"
            ],
            answer: 2,
            rationale: "Azure 文档：需要正确处理 429（Too Many Requests），'这些通常提供 Retry-After 头，可用于加速熔断决策或指导恢复时间'。"
        },
        {
            id: "w1-2-q10",
            question: "Resilience4j 文档指出 Circuit Breaker 的线程安全是如何实现的？",
            options: [
                "使用 synchronized 关键字",
                "使用 AtomicReference 进行状态管理",
                "使用 Lock 接口",
                "不支持多线程"
            ],
            answer: 1,
            rationale: "Resilience4j 文档：'uses AtomicReference for state management with atomic operations, ensuring thread-safe state updates'。"
        },
        {
            id: "w1-2-q11",
            question: "Azure 文档建议在 Open 状态下应该如何处理请求？",
            options: [
                "总是抛出异常",
                "返回有意义的默认值或缓存响应（graceful degradation）",
                "无限等待直到服务恢复",
                "记录日志但不做任何处理"
            ],
            answer: 1,
            rationale: "Azure 文档建议：'Return meaningful default values or cached responses in Open state rather than always raising exceptions'——实现优雅降级。"
        },
        {
            id: "w1-2-q12",
            question: "Resilience4j 的 slowCallDurationThreshold 参数默认值是多少？",
            options: [
                "1000ms（1 秒）",
                "30000ms（30 秒）",
                "60000ms（60 秒）",
                "5000ms（5 秒）"
            ],
            answer: 2,
            rationale: "Resilience4j 文档：slowCallDurationThreshold 默认值为 60000ms（60 秒），'Defines what constitutes a slow call'。"
        }
    ],
    "w1-3": [
        {
            id: "w1-3-q1",
            question: "Azure 架构文档对 Bulkhead 模式名称来源的解释是什么？",
            options: [
                "来源于电路板的隔离设计",
                "来源于船舶的分隔舱壁——即使一个舱室进水也不会沉船",
                "来源于建筑的防火墙设计",
                "来源于软件设计模式书籍"
            ],
            answer: 1,
            rationale: "Azure 文档明确：名称来源于'ship hull sections'——船舶的分隔舱壁，即使一个舱室进水也不会导致整艘船沉没。"
        },
        {
            id: "w1-3-q2",
            question: "Azure 文档描述 Bulkhead 模式解决的核心问题是什么？",
            options: [
                "提高单个服务的处理速度",
                "通过将元素隔离到不同池中，使一个故障不会导致整个系统崩溃",
                "减少网络延迟",
                "加密服务间通信"
            ],
            answer: 1,
            rationale: "Azure 文档：Bulkhead 通过'isolating elements into pools'将应用元素隔离到不同池中，使得一个故障不会导致整个系统崩溃。"
        },
        {
            id: "w1-3-q3",
            question: "Resilience4j 提供的两种 Bulkhead 实现类型是什么？",
            options: [
                "ProcessBulkhead 和 ContainerBulkhead",
                "SemaphoreBulkhead 和 ThreadPoolBulkhead",
                "MemoryBulkhead 和 CPUBulkhead",
                "SyncBulkhead 和 AsyncBulkhead"
            ],
            answer: 1,
            rationale: "Resilience4j 文档：提供 SemaphoreBulkhead（使用信号量限制并发）和 ThreadPoolBulkhead（使用有界队列和线程池）两种实现。"
        },
        {
            id: "w1-3-q4",
            question: "Resilience4j SemaphoreBulkhead 的 maxConcurrentCalls 默认值是多少？",
            options: [
                "10",
                "25",
                "50",
                "100"
            ],
            answer: 1,
            rationale: "Resilience4j 文档：maxConcurrentCalls 默认值为 25，'Max amount of parallel executions allowed by the bulkhead'。"
        },
        {
            id: "w1-3-q5",
            question: "SemaphoreBulkhead 和 ThreadPoolBulkhead 的主要区别是什么？",
            options: [
                "SemaphoreBulkhead 更快，ThreadPoolBulkhead 更安全",
                "SemaphoreBulkhead 在调用线程执行，ThreadPoolBulkhead 在独立线程执行",
                "SemaphoreBulkhead 用于同步调用，ThreadPoolBulkhead 用于批处理",
                "两者功能完全相同，只是命名不同"
            ],
            answer: 1,
            rationale: "Resilience4j 文档：SemaphoreBulkhead'executes your code on the current thread'；ThreadPoolBulkhead'uses a thread from a thread pool to execute our code'。"
        },
        {
            id: "w1-3-q6",
            question: "Resilience4j SemaphoreBulkhead 的 maxWaitDuration 默认值是多少？设为 0 的效果是什么？",
            options: [
                "默认 0，超限请求立即被拒绝（fail-fast）",
                "默认 1000ms，超限请求等待 1 秒",
                "默认 -1，超限请求无限等待",
                "默认 500ms，超限请求等待半秒"
            ],
            answer: 0,
            rationale: "Resilience4j 文档：maxWaitDuration 默认值为 0，表示超限请求不等待直接被拒绝，实现 fail-fast 行为。"
        },
        {
            id: "w1-3-q7",
            question: "Azure 文档列举的 Bulkhead 隔离策略不包括以下哪项？",
            options: [
                "线程池隔离",
                "容器隔离",
                "数据库隔离",
                "队列隔离"
            ],
            answer: 2,
            rationale: "Azure 文档列举的隔离策略包括：消费者端（进程、线程池、信号量）、服务端（虚拟机、容器、进程）、队列和连接池，不包括数据库隔离。"
        },
        {
            id: "w1-3-q8",
            question: "Azure 文档警告 Bulkhead 模式可能导致什么问题？",
            options: [
                "增加网络延迟",
                "资源利用效率降低——为每个服务预留专用资源可能造成浪费",
                "降低系统安全性",
                "增加代码复杂度"
            ],
            answer: 1,
            rationale: "Azure 文档警告：Bulkhead 可能导致'less efficient use of resources'——为每个服务预留专用资源可能在低负载时造成浪费。"
        },
        {
            id: "w1-3-q9",
            question: "ThreadPoolBulkhead 的 queueCapacity 默认值是多少？",
            options: [
                "50",
                "100",
                "200",
                "无限制"
            ],
            answer: 1,
            rationale: "Resilience4j 文档：ThreadPoolBulkhead 的 queueCapacity 默认值为 100，'Queue size limit'。"
        },
        {
            id: "w1-3-q10",
            question: "当 Bulkhead 达到并发限制时会抛出什么异常？",
            options: [
                "TimeoutException",
                "BulkheadFullException",
                "ConcurrencyLimitException",
                "ResourceExhaustedException"
            ],
            answer: 1,
            rationale: "Resilience4j 文档：当 Bulkhead 满时会抛出 BulkheadFullException，表示达到并发限制无法接受新请求。"
        },
        {
            id: "w1-3-q11",
            question: "Azure 文档建议 Bulkhead 的粒度决策应该考虑什么？",
            options: [
                "只考虑技术实现难度",
                "围绕业务和技术需求，与 DDD 的界定上下文对齐",
                "只考虑服务器硬件配置",
                "只考虑网络拓扑结构"
            ],
            answer: 1,
            rationale: "Azure 文档：'Define boundaries around business and technical requirements'，需要确定隔离级别——按租户、按服务类型、与 DDD Bounded Context 对齐。"
        },
        {
            id: "w1-3-q12",
            question: "在 Spring Boot 中使用 @Bulkhead 注解时，如何指定使用 ThreadPoolBulkhead？",
            options: [
                "@Bulkhead(name = \"backend\", mode = \"threadpool\")",
                "@Bulkhead(name = \"backend\", type = Bulkhead.Type.THREADPOOL)",
                "@ThreadPoolBulkhead(name = \"backend\")",
                "@Bulkhead(name = \"backend\", async = true)"
            ],
            answer: 1,
            rationale: "Resilience4j 文档：使用 @Bulkhead(name = \"backend\", type = Bulkhead.Type.THREADPOOL) 注解指定使用 ThreadPoolBulkhead 实现。"
        }
    ],
    "w1-4": [
        {
            id: "w1-4-q1",
            question: "Azure 架构文档对 Throttling 模式核心作用的描述是什么？",
            options: [
                "提高系统处理速度",
                "limiting how much an instance, tenant, or service can use resources——限制资源消耗",
                "加密数据传输",
                "负载均衡请求分发"
            ],
            answer: 1,
            rationale: "Azure 文档明确：Throttling 通过'limiting how much an instance, tenant, or service can use resources'控制资源消耗。"
        },
        {
            id: "w1-4-q2",
            question: "Azure 文档列举的 Throttling 策略中，'Functionality Degradation'是什么意思？",
            options: [
                "拒绝所有超限请求",
                "禁用非核心服务以保证核心功能",
                "将请求排队等待处理",
                "降低请求的优先级"
            ],
            answer: 1,
            rationale: "Azure 文档：Functionality Degradation 策略是'disable non-essential services'——禁用非核心服务（如降低视频分辨率）以保证核心功能。"
        },
        {
            id: "w1-4-q3",
            question: "Azure 文档指出 Throttling 必须在什么阶段考虑？",
            options: [
                "运维阶段",
                "测试阶段",
                "设计阶段，因为后期改造困难",
                "部署阶段"
            ],
            answer: 2,
            rationale: "Azure 文档警告：Throttling 必须在'design phase'考虑，'difficult to retrofit after implementation'——后期改造困难。"
        },
        {
            id: "w1-4-q4",
            question: "Azure Rate Limiting 文档描述的主要应用场景是什么？",
            options: [
                "实时通信系统",
                "大规模批处理任务访问节流服务",
                "静态网站托管",
                "数据库备份"
            ],
            answer: 1,
            rationale: "Azure 文档：Rate Limiting 模式'particularly useful for large-scale batch processing tasks'——控制应用访问节流服务的速率，减少错误。"
        },
        {
            id: "w1-4-q5",
            question: "HTTP 429 状态码表示什么？应该如何处理？",
            options: [
                "服务器内部错误，应立即报警",
                "Too Many Requests——客户端超过限制，应解析 Retry-After 头后重试",
                "请求格式错误，应修改请求参数",
                "身份验证失败，应重新登录"
            ],
            answer: 1,
            rationale: "Azure 文档：429 表示'Too Many Requests'——客户端超过预定限制，应包含 Retry-After 头指导重试策略。"
        },
        {
            id: "w1-4-q6",
            question: "ByteByteGo 文档介绍的 Token Bucket 算法有什么特点？",
            options: [
                "强制恒定速率输出，不允许任何突发",
                "允许一定程度的突发流量（桶中有令牌时）",
                "完全随机处理请求",
                "只能用于单机环境"
            ],
            answer: 1,
            rationale: "ByteByteGo 文档：Token Bucket'Permits controlled bursts while maintaining average rate limits'——允许受控的突发流量。"
        },
        {
            id: "w1-4-q7",
            question: "ByteByteGo 文档指出 Fixed Window Counter 算法的主要缺点是什么？",
            options: [
                "实现复杂，内存开销大",
                "在窗口边界容易出现突发（两个窗口交界处瞬间 2x 请求）",
                "无法支持分布式环境",
                "只能用于读操作"
            ],
            answer: 1,
            rationale: "ByteByteGo 文档：Fixed Window'vulnerable to burst traffic at window boundaries'——在窗口边界容易出现突发流量问题。"
        },
        {
            id: "w1-4-q8",
            question: "Token Bucket 和 Leaky Bucket 算法的主要区别是什么？",
            options: [
                "Token Bucket 更安全，Leaky Bucket 更快",
                "Token Bucket 允许突发，Leaky Bucket 强制恒定速率输出",
                "Token Bucket 用于读操作，Leaky Bucket 用于写操作",
                "两者功能完全相同"
            ],
            answer: 1,
            rationale: "ByteByteGo 文档：Token Bucket 允许突发（'Permits controlled bursts'）；Leaky Bucket 'processed at a constant rate'强制恒定输出。"
        },
        {
            id: "w1-4-q9",
            question: "Azure 文档建议 Throttling 与什么机制配合使用？",
            options: [
                "数据库复制",
                "自动扩展（Autoscaling）——在扩展延迟期间临时控制负载",
                "CDN 缓存",
                "DNS 负载均衡"
            ],
            answer: 1,
            rationale: "Azure 文档：Throttling 是自动扩展的补充，'Use throttling temporarily while scaling'——在扩展延迟期间临时控制负载。"
        },
        {
            id: "w1-4-q10",
            question: "Azure Rate Limiting 文档建议多进程如何协调共享节流服务的配额？",
            options: [
                "每个进程独立计数，不需要协调",
                "使用分布式锁（如 Azure Storage blob lease、Redis、etcd）",
                "由中央服务器统一分配",
                "通过消息队列同步"
            ],
            answer: 1,
            rationale: "Azure 文档：多进程协调方案包括'Azure Storage blob leases (exclusive 15-second leases)'、'Zookeeper, Consul, etcd, Redis/Redsync'等分布式锁。"
        },
        {
            id: "w1-4-q11",
            question: "Azure Throttling 文档提到的 503 状态码表示什么？",
            options: [
                "请求被永久拒绝",
                "Server Too Busy——服务遇到意外负载峰值",
                "请求格式错误",
                "身份验证失败"
            ],
            answer: 1,
            rationale: "Azure 文档：503 表示'Server Too Busy'——服务遇到意外负载峰值，与 429（客户端超限）含义不同。"
        },
        {
            id: "w1-4-q12",
            question: "Azure Rate Limiting 文档建议的细粒度释放策略是什么？",
            options: [
                "每秒释放所有允许的请求",
                "使用更细粒度的间隔（如 200ms 释放 20 次，而非 1 秒释放 100 次）",
                "随机间隔释放请求",
                "按请求大小决定释放时机"
            ],
            answer: 1,
            rationale: "Azure 文档建议'Release 20 operations every 200 milliseconds (vs. all 100 at once)'——使用细粒度间隔平滑资源消耗。"
        }
    ]
}
