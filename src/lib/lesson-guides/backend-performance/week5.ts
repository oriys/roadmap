import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "bp-w5-1": {
        lessonId: "bp-w5-1",
        background: [
            "【熔断器定义】Martin Fowler：'You wrap a protected function call in a circuit breaker object, which monitors for failures'——熔断器包装受保护的调用并监控故障，防止级联失败。",
            "【熔断器三态】熔断器包含三种状态：Closed（关闭，正常运行）→ Open（开启，拒绝请求）→ Half-Open（半开，试探性恢复）。失败次数达阈值时 Closed→Open，超时后 Open→Half-Open 进行试探。",
            "【熔断器作用】在 Open 状态下立即返回错误，无需等待超时。防止对故障服务的持续调用，避免耗尽线程池或连接资源，隔离故障保护整个系统稳定性。",
            "【指数退避公式】AWS 建议：delay = base × 2^attempt + random_jitter。第一次重试等 1 秒，第二次 2 秒，第三次 4 秒，逐步增加避免压垮恢复中的系统。",
            "【抖动必要性】AWS 强调：没有抖动的指数退避会导致同步重试（synchronized retries），多客户端同时重试压垮刚恢复的服务。抖动分散重试请求的时间分布。",
            "【重试最佳实践】AWS 建议：只对瞬时故障重试，区分暂时性中断和永久错误（如 401、400 级错误不应重试）；设置最大重试次数和最大等待时间。"
        ],
        keyDifficulties: [
            "【熔断阈值设置】阈值过低会误熔断正常波动，过高则无法及时保护。需要根据服务 SLO 和历史错误率设置合理阈值，并配合监控动态调整。",
            "【Half-Open 探测策略】半开状态下允许少量请求探测下游健康。探测请求失败则重新 Open，成功则 Reset 计数器回到 Closed。探测比例和频率需要权衡。",
            "【重试与幂等性】重试可能导致重复执行，非幂等操作（如扣款）需要使用幂等键或去重机制。AWS 建议'Design APIs to be idempotent when possible'。",
            "【超时与熔断协调】超时是单次请求级别的保护，熔断是服务级别的保护。超时过长会导致资源占用，过短会误判正常请求；熔断统计多次请求的失败模式。",
            "【重试放大效应】Google SRE 警告：不当的重试可能导致流量指数级增长。建议单请求最多重试 3 次，客户端重试比例不超过 10%。"
        ],
        handsOnPath: [
            "使用 Resilience4j（Java）或 Polly（.NET）实现熔断器：配置失败阈值（如 5 次/10 秒）、Open 持续时间（如 30 秒）、Half-Open 允许的探测请求数。",
            "实现指数退避重试：base_delay=1s，max_delay=60s，max_attempts=5，每次重试延迟加上 0-500ms 的随机抖动。",
            "配置 Istio 熔断策略：设置 outlierDetection 的 consecutiveErrors、interval、baseEjectionTime、maxEjectionPercent 参数。",
            "监控熔断器状态：暴露 Prometheus 指标记录 Open/Closed/Half-Open 状态转换次数，设置告警当熔断频繁触发时通知。",
            "实现请求关键性分级：参考 Google SRE，将请求分为 CRITICAL_PLUS → CRITICAL → SHEDDABLE_PLUS → SHEDDABLE，过载时优先丢弃低关键性请求。",
            "测试重试行为：使用混沌工程工具（如 Chaos Monkey）注入故障，验证重试和熔断策略是否正确生效。"
        ],
        selfCheck: [
            "熔断器的三种状态分别是什么？状态之间如何转换？",
            "为什么指数退避需要添加抖动（jitter）？没有抖动会有什么问题？",
            "什么类型的错误应该重试？什么类型不应该重试？",
            "熔断器和超时机制各自保护什么层面？它们如何协作？",
            "Google SRE 对重试次数和比例有什么建议？为什么？",
            "如何设计 API 使其支持安全重试？什么是幂等性？"
        ],
        extensions: [
            "学习 Netflix Hystrix 的设计原理（虽已停止维护，但架构思想仍有价值），理解线程池隔离、信号量隔离的差异。",
            "研究 Envoy 的熔断和重试配置，了解 Service Mesh 层面的弹性模式实现。",
            "探索自适应限流算法（如 TCP Vegas 的拥塞控制思想），根据系统负载动态调整限流阈值。",
            "学习 Google 的 Client-side Throttling 机制，客户端根据拒绝率自动调节发送速率。"
        ],
        sourceUrls: [
            "https://martinfowler.com/bliki/CircuitBreaker.html",
            "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/",
            "https://sre.google/sre-book/handling-overload/"
        ]
    },
    "bp-w5-2": {
        lessonId: "bp-w5-2",
        background: [
            "【Stale-While-Revalidate】SWR 是平衡性能和数据新鲜度的缓存策略：'allows servers to serve expired cached content immediately while simultaneously fetching updated data for future requests'——立即返回过期缓存，后台异步更新。",
            "【SWR 三态模型】Fresh（新鲜，直接使用）→ Stale（过期但可用，使用的同时后台更新）→ Rotten（太旧，必须等待新数据）。max-age 控制 Fresh→Stale 边界，stale-while-revalidate 控制 Stale→Rotten 边界。",
            "【Feature Toggles 四类】Martin Fowler 定义：Release Toggles（发布开关，短期）、Experiment Toggles（A/B 测试）、Ops Toggles（运维开关/Kill Switch）、Permissioning Toggles（权限开关，长期）。",
            "【降级策略设计】Google SRE：系统应该'仅接受能处理的请求并优雅拒绝其余请求'而非完全停止服务。降级可以是返回精度较低或数据较少的响应。",
            "【请求关键性分级】Google SRE 定义四级：CRITICAL_PLUS → CRITICAL → SHEDDABLE_PLUS → SHEDDABLE。过载时按优先级丢弃请求，'拒绝所有较低关键性请求'后才拒绝高关键性请求。",
            "【Feature Toggle 管理】Martin Fowler 强调：toggles 是'inventory which comes with a carrying cost'——应该最小化数量，为 Release Toggle 设置过期日期，使用'time bombs'强制清理。"
        ],
        keyDifficulties: [
            "【SWR 不适用场景】实时库存、实时价格、登录令牌、协作编辑等需要强一致性的场景不适合 SWR，可能导致用户看到过期数据。",
            "【降级粒度选择】整体降级（关闭非核心功能）vs 精细降级（返回缓存/默认值）。需要预先定义降级矩阵，明确各功能的降级策略和优先级。",
            "【Toggle 技术债务】长期存在的 Feature Toggle 增加代码复杂度和测试负担。应该在 CI/CD 中测试多种 toggle 配置组合，及时清理不再需要的 toggle。",
            "【Kill Switch 设计】Ops Toggle 需要能够快速生效（秒级），通常需要配置中心或 Feature Flag 服务支持热更新，而非重启应用。",
            "【缓存兜底一致性】使用缓存作为降级兜底时，需要考虑缓存数据的有效期和一致性。可能需要分层缓存策略：本地缓存 → 分布式缓存 → 降级静态响应。"
        ],
        handsOnPath: [
            "配置 Nginx 的 stale-while-revalidate：proxy_cache_use_stale updating; 允许在后台更新时返回过期缓存。",
            "实现 Feature Toggle 服务：集成 LaunchDarkly、Unleash 或自建的配置中心，支持按用户、百分比、环境切换功能。",
            "设计降级矩阵：列出所有服务依赖，为每个依赖定义降级策略（返回缓存、返回默认值、关闭功能）和触发条件。",
            "实现 Kill Switch：为非核心功能添加开关，可以通过配置快速关闭，减少故障影响范围。",
            "配置多级缓存兜底：本地 Caffeine 缓存（毫秒级）→ Redis 缓存（秒级）→ 静态默认响应（最终兜底）。",
            "实现请求优先级：在请求头或上下文中传递关键性级别，过载时根据优先级选择性丢弃请求。"
        ],
        selfCheck: [
            "Stale-While-Revalidate 的三态模型（Fresh/Stale/Rotten）如何配置？",
            "Feature Toggle 有哪四种类型？它们各自的生命周期是多长？",
            "什么场景不适合使用 SWR 缓存策略？为什么？",
            "如何设计 Kill Switch 使其能够快速生效？",
            "Google SRE 的请求关键性分级有哪四个级别？过载时如何使用？",
            "为什么需要及时清理不再需要的 Feature Toggle？"
        ],
        extensions: [
            "学习 Cloudflare 的 stale-if-error 指令，在源站错误时返回过期缓存，与 SWR 配合使用。",
            "研究 Canary Release 和 Blue-Green Deployment 的实现，了解如何安全地发布新版本。",
            "探索 OpenFeature 规范，了解 Feature Flag 的标准化接口和跨厂商互操作性。",
            "学习 Chaos Engineering 原则，通过故障注入验证降级策略的有效性。"
        ],
        sourceUrls: [
            "https://www.debugbear.com/docs/stale-while-revalidate",
            "https://martinfowler.com/articles/feature-toggles.html",
            "https://sre.google/sre-book/handling-overload/"
        ]
    },
    "bp-w5-3": {
        lessonId: "bp-w5-3",
        background: [
            "【HPA 基础】Kubernetes 官方文档：Horizontal Pod Autoscaler（HPA）根据观测到的 CPU 利用率或其他指标自动扩缩 Deployment、ReplicaSet 的 Pod 副本数。",
            "【HPA 算法】HPA 使用公式：desiredReplicas = ceil[currentReplicas × (currentMetricValue / desiredMetricValue)]。当前值超过目标时扩容，低于目标时缩容。",
            "【自定义指标】Kubernetes 支持三类指标：Resource（CPU/内存）、Pods（Pod 级自定义指标）、Object/External（外部系统指标如队列长度）。自定义指标通过 Metrics API 暴露。",
            "【Prometheus Adapter】prometheus-adapter 是常用的 Custom Metrics API 实现，将 Prometheus 指标转换为 Kubernetes metrics.k8s.io API，供 HPA 消费。",
            "【KEDA 扩展】KEDA（Kubernetes Event-driven Autoscaling）扩展了 HPA 能力，支持基于事件源（Kafka、RabbitMQ、Redis 等）的自动扩缩，可以缩至零副本。",
            "【扩缩容延迟】HPA 默认每 15 秒检查一次指标（--horizontal-pod-autoscaler-sync-period）。扩容是即时的，但缩容有 5 分钟稳定窗口（stabilizationWindowSeconds）防止震荡。"
        ],
        keyDifficulties: [
            "【指标选择】CPU 是延迟指标（lagging indicator），负载上升时 CPU 先升高，但可能已经影响响应时间。应考虑使用业务指标（如 QPS、队列深度）作为领先指标（leading indicator）。",
            "【冷启动延迟】新 Pod 启动需要时间（拉取镜像、初始化、预热）。如果扩容速度跟不上流量增长，可能导致级联故障。应优化启动时间并考虑预扩容。",
            "【缩容震荡】负载波动可能导致频繁扩缩容（flapping）。使用 stabilizationWindowSeconds 设置缩容冷却期，或 behavior.scaleDown.policies 限制缩容速率。",
            "【多指标冲突】HPA 支持多指标时取最大 desiredReplicas。如果 CPU 指标要求 5 副本，QPS 指标要求 10 副本，最终会扩到 10 副本。需要平衡各指标权重。",
            "【VPA 与 HPA 冲突】Vertical Pod Autoscaler（VPA）调整 Pod 资源请求，可能与 HPA 的 CPU 指标冲突。Kubernetes 建议对同一 Deployment 不同时使用 VPA 和基于 CPU 的 HPA。"
        ],
        handsOnPath: [
            "部署 prometheus-adapter：安装 helm chart，配置 rules 将 Prometheus 指标映射为 custom.metrics.k8s.io API。",
            "创建基于 QPS 的 HPA：使用 http_requests_per_second 指标替代 CPU，设置目标值如 1000 请求/秒/Pod。",
            "配置缩容策略：设置 behavior.scaleDown.stabilizationWindowSeconds: 300 和 policies 限制每分钟最多缩容 10% 或 1 个 Pod。",
            "部署 KEDA ScaledObject：配置基于 Kafka consumer lag 或 Redis list length 的自动扩缩，支持缩至零。",
            "监控 HPA 状态：kubectl get hpa -w 观察 TARGETS 列的当前值/目标值，确认扩缩容决策符合预期。",
            "测试扩容响应时间：使用压测工具产生负载，测量从负载开始到新 Pod Ready 的时间，优化启动速度。"
        ],
        selfCheck: [
            "HPA 计算 desiredReplicas 的公式是什么？",
            "为什么 CPU 不是理想的扩缩容指标？什么是更好的领先指标？",
            "如何防止 HPA 缩容震荡（flapping）？",
            "prometheus-adapter 的作用是什么？它如何连接 Prometheus 和 HPA？",
            "KEDA 相比原生 HPA 有什么优势？",
            "VPA 和 HPA 为什么不建议同时使用在基于 CPU 的场景？"
        ],
        extensions: [
            "学习 Knative Serving 的自动扩缩实现，了解其基于并发请求数的扩缩策略和 activator 组件。",
            "研究 AWS Karpenter 节点自动扩缩器，了解其相比 Cluster Autoscaler 的改进。",
            "探索 Predictive HPA 实现，基于历史数据预测负载并提前扩容。",
            "学习 VPA 的 recommender、updater、admission-controller 三个组件的工作原理。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
            "https://github.com/kubernetes-sigs/prometheus-adapter",
            "https://keda.sh/docs/concepts/",
            "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w5-1": [
        {
            id: "bp-w5-1-q1",
            question: "Martin Fowler 对熔断器模式的核心描述是什么？",
            options: [
                "熔断器用于数据加密",
                "You wrap a protected function call in a circuit breaker object, which monitors for failures",
                "熔断器用于负载均衡",
                "熔断器用于数据压缩"
            ],
            answer: 1,
            rationale: "Martin Fowler 定义：'You wrap a protected function call in a circuit breaker object, which monitors for failures'——熔断器包装调用并监控故障。"
        },
        {
            id: "bp-w5-1-q2",
            question: "熔断器的三种状态及其转换顺序是什么？",
            options: [
                "Open → Closed → Half-Open",
                "Closed → Open → Half-Open（失败达阈值 Open，超时后 Half-Open 探测）",
                "Half-Open → Open → Closed",
                "Closed → Half-Open → Open"
            ],
            answer: 1,
            rationale: "熔断器状态：Closed（正常）→ Open（拒绝，失败达阈值）→ Half-Open（探测，超时后）。探测成功回到 Closed，失败重新 Open。"
        },
        {
            id: "bp-w5-1-q3",
            question: "熔断器在 Open 状态下的主要作用是什么？",
            options: [
                "继续尝试调用下游服务",
                "立即返回错误，无需等待超时，保护资源不被耗尽",
                "将请求缓存起来",
                "将请求转发到其他服务"
            ],
            answer: 1,
            rationale: "Martin Fowler：在 Open 状态下立即返回错误，无需等待超时。防止对故障服务的持续调用，避免耗尽线程池或连接资源。"
        },
        {
            id: "bp-w5-1-q4",
            question: "AWS 推荐的指数退避公式是什么？",
            options: [
                "delay = base + attempt",
                "delay = base × 2^attempt + random_jitter",
                "delay = base / attempt",
                "delay = base × attempt"
            ],
            answer: 1,
            rationale: "AWS 建议：delay = base × 2^attempt + random_jitter。第一次 1 秒，第二次 2 秒，第三次 4 秒，逐步增加并添加随机抖动。"
        },
        {
            id: "bp-w5-1-q5",
            question: "为什么指数退避需要添加抖动（jitter）？",
            options: [
                "提高安全性",
                "防止多客户端同步重试（synchronized retries）压垮恢复中的服务",
                "减少网络带宽",
                "提高压缩效率"
            ],
            answer: 1,
            rationale: "AWS 强调：没有抖动的指数退避会导致同步重试，多客户端同时重试压垮刚恢复的服务。抖动分散重试请求的时间分布。"
        },
        {
            id: "bp-w5-1-q6",
            question: "什么类型的错误不应该重试？",
            options: [
                "网络超时",
                "服务暂时不可用（503）",
                "认证失败（401）、请求格式错误（400）等永久性错误",
                "连接重置"
            ],
            answer: 2,
            rationale: "AWS 建议只对瞬时故障重试，区分暂时性中断和永久错误。认证失败、请求格式错误等 400 级错误不应重试，重试也不会成功。"
        },
        {
            id: "bp-w5-1-q7",
            question: "Google SRE 对单请求重试次数的建议是什么？",
            options: [
                "无限重试直到成功",
                "单请求最多重试 3 次，客户端重试比例不超过 10%",
                "重试 1 次即可",
                "重试 10 次"
            ],
            answer: 1,
            rationale: "Google SRE 建议：单请求最多重试 3 次，客户端重试比例不超过 10%，避免重试引发的指数级流量增长。"
        },
        {
            id: "bp-w5-1-q8",
            question: "熔断器和超时机制的主要区别是什么？",
            options: [
                "两者完全相同",
                "超时是单次请求级别保护，熔断是服务级别保护（统计多次请求的失败模式）",
                "熔断只用于数据库，超时用于 HTTP",
                "超时更安全"
            ],
            answer: 1,
            rationale: "超时是单次请求级别的保护，熔断是服务级别的保护。熔断统计多次请求的失败模式，达到阈值后整体拒绝，而非等待每次超时。"
        },
        {
            id: "bp-w5-1-q9",
            question: "Half-Open 状态的作用是什么？",
            options: [
                "完全拒绝所有请求",
                "允许少量探测请求检验下游是否恢复，成功则关闭熔断，失败则重新打开",
                "无限期等待",
                "将请求缓存起来"
            ],
            answer: 1,
            rationale: "Half-Open 状态下允许少量请求探测下游健康。探测请求失败则重新 Open，成功则 Reset 计数器回到 Closed。"
        },
        {
            id: "bp-w5-1-q10",
            question: "AWS 对 API 设计的建议是什么以支持安全重试？",
            options: [
                "使用 WebSocket",
                "Design APIs to be idempotent when possible",
                "使用 GraphQL",
                "禁止所有重试"
            ],
            answer: 1,
            rationale: "AWS 建议：'Design APIs to be idempotent when possible'——幂等设计允许安全重试，重复执行不会产生副作用。"
        },
        {
            id: "bp-w5-1-q11",
            question: "Google SRE 建议的请求关键性分级有几个级别？",
            options: [
                "2 个级别",
                "3 个级别",
                "4 个级别（CRITICAL_PLUS → CRITICAL → SHEDDABLE_PLUS → SHEDDABLE）",
                "5 个级别"
            ],
            answer: 2,
            rationale: "Google SRE 定义四级关键性：CRITICAL_PLUS → CRITICAL → SHEDDABLE_PLUS → SHEDDABLE。过载时按优先级丢弃请求。"
        },
        {
            id: "bp-w5-1-q12",
            question: "如果不设置最大退避时间，指数退避会有什么问题？",
            options: [
                "没有问题",
                "退避时间会无限增长，导致请求长时间等待",
                "退避时间会变成 0",
                "会导致内存溢出"
            ],
            answer: 1,
            rationale: "AWS 建议设置最大退避时间（如 30-60 秒），避免指数增长导致无限等待。unbounded backoff intervals 是常见的实现错误。"
        }
    ],
    "bp-w5-2": [
        {
            id: "bp-w5-2-q1",
            question: "Stale-While-Revalidate (SWR) 策略的核心行为是什么？",
            options: [
                "总是等待新数据",
                "Allows servers to serve expired cached content immediately while simultaneously fetching updated data",
                "永远不使用缓存",
                "只在错误时使用缓存"
            ],
            answer: 1,
            rationale: "SWR 策略：'allows servers to serve expired cached content immediately while simultaneously fetching updated data for future requests'——立即返回过期缓存，后台更新。"
        },
        {
            id: "bp-w5-2-q2",
            question: "SWR 的三态模型中，max-age 和 stale-while-revalidate 分别控制什么边界？",
            options: [
                "max-age 控制 Stale→Rotten，SWR 控制 Fresh→Stale",
                "max-age 控制 Fresh→Stale，stale-while-revalidate 控制 Stale→Rotten",
                "两者控制相同的边界",
                "与缓存状态无关"
            ],
            answer: 1,
            rationale: "max-age 控制 Fresh→Stale 边界，stale-while-revalidate 控制 Stale→Rotten 边界。Stale 期间使用缓存同时后台更新，Rotten 必须等待新数据。"
        },
        {
            id: "bp-w5-2-q3",
            question: "Cache-Control: max-age=60, stale-while-revalidate=300 的含义是什么？",
            options: [
                "缓存 360 秒",
                "0-60 秒直接使用缓存，60-360 秒使用缓存同时后台更新，超过 360 秒必须等待新数据",
                "60 秒后缓存失效",
                "最多缓存 300 个请求"
            ],
            answer: 1,
            rationale: "max-age=60 表示 60 秒内是 Fresh，stale-while-revalidate=300 表示 60-360 秒是 Stale（使用缓存同时更新），超过 360 秒是 Rotten。"
        },
        {
            id: "bp-w5-2-q4",
            question: "什么场景不适合使用 SWR 缓存策略？",
            options: [
                "博客文章",
                "静态资源（CSS、JS）",
                "实时库存、实时价格、登录令牌等需要强一致性的数据",
                "用户资料"
            ],
            answer: 2,
            rationale: "实时库存、实时价格、登录令牌、协作编辑等需要强一致性的场景不适合 SWR，返回过期数据可能导致严重问题。"
        },
        {
            id: "bp-w5-2-q5",
            question: "Martin Fowler 定义的 Feature Toggle 四种类型是什么？",
            options: [
                "Debug, Release, Test, Production",
                "Release Toggles, Experiment Toggles, Ops Toggles, Permissioning Toggles",
                "Enable, Disable, Pause, Resume",
                "Frontend, Backend, Database, Network"
            ],
            answer: 1,
            rationale: "Martin Fowler 定义四类：Release Toggles（发布开关）、Experiment Toggles（A/B 测试）、Ops Toggles（运维/Kill Switch）、Permissioning Toggles（权限开关）。"
        },
        {
            id: "bp-w5-2-q6",
            question: "Martin Fowler 对 Feature Toggle 管理的建议是什么？",
            options: [
                "保留所有 toggles 以备将来使用",
                "Toggles are inventory which comes with a carrying cost——应最小化数量，设置过期日期",
                "toggles 越多越好",
                "toggles 永远不应该删除"
            ],
            answer: 1,
            rationale: "Martin Fowler 强调：toggles 是'inventory which comes with a carrying cost'——应该最小化数量，为 Release Toggle 设置过期日期，使用'time bombs'强制清理。"
        },
        {
            id: "bp-w5-2-q7",
            question: "Google SRE 对过载处理的核心建议是什么？",
            options: [
                "完全停止服务",
                "仅接受能处理的请求并优雅拒绝其余请求，而非完全停止服务",
                "拒绝所有请求",
                "无限扩容"
            ],
            answer: 1,
            rationale: "Google SRE：系统应该'仅接受能处理的请求并优雅拒绝其余请求'而非完全停止服务，最大化吞吐量和用户体验。"
        },
        {
            id: "bp-w5-2-q8",
            question: "Ops Toggle（运维开关/Kill Switch）的主要特点是什么？",
            options: [
                "用于 A/B 测试",
                "用于快速关闭非核心功能，需要能够秒级生效",
                "用于权限控制",
                "用于代码部署"
            ],
            answer: 1,
            rationale: "Ops Toggle 用于快速关闭非核心功能，需要能够秒级生效。通常需要配置中心或 Feature Flag 服务支持热更新，而非重启应用。"
        },
        {
            id: "bp-w5-2-q9",
            question: "降级策略中，返回精度较低或数据较少的响应属于什么类型的降级？",
            options: [
                "完全关闭功能",
                "优雅降级（Graceful Degradation）——降低服务质量但保持可用",
                "熔断",
                "限流"
            ],
            answer: 1,
            rationale: "Google SRE 建议的降级可以是返回精度较低或数据较少的响应，例如搜索仅查询候选集的一小部分而非全部语料库——这是优雅降级。"
        },
        {
            id: "bp-w5-2-q10",
            question: "Experiment Toggle 的典型生命周期是多长？",
            options: [
                "永久存在",
                "数小时到数周（用于 A/B 测试）",
                "数年",
                "只用一次"
            ],
            answer: 1,
            rationale: "Martin Fowler 指出 Experiment Toggle 用于 A/B 测试，'Highly dynamic, lasting hours to weeks'——生命周期较短，测试结束后应删除。"
        },
        {
            id: "bp-w5-2-q11",
            question: "为什么需要在 CI/CD 中测试多种 toggle 配置组合？",
            options: [
                "减少测试时间",
                "长期存在的 Feature Toggle 增加代码复杂度，需要验证各种组合都能正常工作",
                "节省存储空间",
                "提高编译速度"
            ],
            answer: 1,
            rationale: "长期存在的 Feature Toggle 增加代码复杂度和测试负担。需要在 CI/CD 中测试多种 toggle 配置组合，确保各种场景都能正常工作。"
        },
        {
            id: "bp-w5-2-q12",
            question: "Google SRE 建议的资源消耗度量方式是什么？",
            options: [
                "每秒查询数（QPS）",
                "直接测量 CPU 和内存等实际资源，而非 QPS",
                "请求大小",
                "响应时间"
            ],
            answer: 1,
            rationale: "Google SRE 指出'以每秒查询数建模容量...往往是糟糕的指标'，改而直接测量 CPU 和内存等实际资源，因为不同请求消耗的资源差异很大。"
        }
    ],
    "bp-w5-3": [
        {
            id: "bp-w5-3-q1",
            question: "Kubernetes HPA 计算期望副本数的公式是什么？",
            options: [
                "desiredReplicas = currentReplicas + currentMetricValue",
                "desiredReplicas = ceil[currentReplicas × (currentMetricValue / desiredMetricValue)]",
                "desiredReplicas = currentMetricValue / desiredMetricValue",
                "desiredReplicas = max(currentReplicas, desiredMetricValue)"
            ],
            answer: 1,
            rationale: "HPA 公式：desiredReplicas = ceil[currentReplicas × (currentMetricValue / desiredMetricValue)]。当前值超过目标时扩容，低于目标时缩容。"
        },
        {
            id: "bp-w5-3-q2",
            question: "HPA 默认每多长时间检查一次指标？",
            options: [
                "1 秒",
                "15 秒",
                "1 分钟",
                "5 分钟"
            ],
            answer: 1,
            rationale: "HPA 默认每 15 秒检查一次指标（--horizontal-pod-autoscaler-sync-period）。可以根据需要调整此参数。"
        },
        {
            id: "bp-w5-3-q3",
            question: "为什么 CPU 不是理想的扩缩容指标？",
            options: [
                "CPU 指标不准确",
                "CPU 是延迟指标（lagging indicator），负载上升时可能已经影响响应时间",
                "CPU 无法测量",
                "CPU 不支持 HPA"
            ],
            answer: 1,
            rationale: "CPU 是延迟指标（lagging indicator），负载上升时 CPU 先升高，但可能已经影响响应时间。应考虑使用业务指标（如 QPS）作为领先指标。"
        },
        {
            id: "bp-w5-3-q4",
            question: "prometheus-adapter 的作用是什么？",
            options: [
                "部署 Prometheus",
                "将 Prometheus 指标转换为 Kubernetes metrics.k8s.io API，供 HPA 消费",
                "监控 Kubernetes 集群",
                "存储指标数据"
            ],
            answer: 1,
            rationale: "prometheus-adapter 是 Custom Metrics API 的实现，将 Prometheus 指标转换为 Kubernetes metrics.k8s.io API，使 HPA 能够使用自定义指标。"
        },
        {
            id: "bp-w5-3-q5",
            question: "KEDA 相比原生 HPA 有什么主要优势？",
            options: [
                "更快的扩缩容速度",
                "支持基于事件源（Kafka、RabbitMQ 等）的自动扩缩，可以缩至零副本",
                "更低的资源消耗",
                "更简单的配置"
            ],
            answer: 1,
            rationale: "KEDA 扩展了 HPA 能力，支持基于事件源（Kafka、RabbitMQ、Redis 等）的自动扩缩，最重要的是可以缩至零副本，原生 HPA 最少保留 1 个副本。"
        },
        {
            id: "bp-w5-3-q6",
            question: "如何防止 HPA 缩容震荡（flapping）？",
            options: [
                "禁用 HPA",
                "设置 stabilizationWindowSeconds 缩容冷却期，或限制缩容速率",
                "增加 CPU 配额",
                "减少副本数"
            ],
            answer: 1,
            rationale: "使用 stabilizationWindowSeconds 设置缩容冷却期（默认 5 分钟），或 behavior.scaleDown.policies 限制缩容速率，防止负载波动导致频繁扩缩容。"
        },
        {
            id: "bp-w5-3-q7",
            question: "HPA 支持多个指标时如何决定最终副本数？",
            options: [
                "取平均值",
                "取最大 desiredReplicas",
                "取最小值",
                "随机选择"
            ],
            answer: 1,
            rationale: "HPA 支持多指标时取最大 desiredReplicas。如果 CPU 指标要求 5 副本，QPS 指标要求 10 副本，最终会扩到 10 副本。"
        },
        {
            id: "bp-w5-3-q8",
            question: "为什么 VPA 和基于 CPU 的 HPA 不建议同时使用？",
            options: [
                "它们使用相同的 API",
                "VPA 调整资源请求会影响 HPA 的 CPU 利用率计算，可能导致冲突",
                "VPA 不支持 CPU",
                "HPA 会覆盖 VPA 设置"
            ],
            answer: 1,
            rationale: "VPA 调整 Pod 资源请求，会影响 CPU 利用率的计算基数，可能与 HPA 的 CPU 指标冲突。Kubernetes 建议对同一 Deployment 不同时使用两者。"
        },
        {
            id: "bp-w5-3-q9",
            question: "Kubernetes HPA 支持哪三类指标？",
            options: [
                "CPU、内存、磁盘",
                "Resource（CPU/内存）、Pods（Pod 级自定义指标）、Object/External（外部系统指标）",
                "Request、Response、Error",
                "Input、Output、Throughput"
            ],
            answer: 1,
            rationale: "HPA 支持三类指标：Resource（CPU/内存）、Pods（Pod 级自定义指标）、Object/External（外部系统指标如队列长度）。"
        },
        {
            id: "bp-w5-3-q10",
            question: "新 Pod 启动延迟（冷启动）为什么会影响 HPA 效果？",
            options: [
                "HPA 会跳过新 Pod",
                "如果扩容速度跟不上流量增长，可能导致级联故障",
                "新 Pod 不计入副本数",
                "冷启动不影响 HPA"
            ],
            answer: 1,
            rationale: "新 Pod 启动需要时间（拉取镜像、初始化、预热）。如果扩容速度跟不上流量增长，可能导致级联故障。应优化启动时间并考虑预扩容。"
        },
        {
            id: "bp-w5-3-q11",
            question: "HPA 的默认缩容稳定窗口是多长？",
            options: [
                "1 分钟",
                "5 分钟",
                "10 分钟",
                "30 分钟"
            ],
            answer: 1,
            rationale: "HPA 默认缩容有 5 分钟稳定窗口（stabilizationWindowSeconds: 300）防止震荡。扩容是即时的，无稳定窗口。"
        },
        {
            id: "bp-w5-3-q12",
            question: "如何使用 kubectl 观察 HPA 的实时状态？",
            options: [
                "kubectl describe pod",
                "kubectl get hpa -w（观察 TARGETS 列的当前值/目标值）",
                "kubectl logs",
                "kubectl top nodes"
            ],
            answer: 1,
            rationale: "kubectl get hpa -w 可以实时观察 HPA 状态，TARGETS 列显示当前指标值/目标值，REPLICAS 列显示当前/期望副本数。"
        }
    ]
}
