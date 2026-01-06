import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "w2-1": {
        lessonId: "w2-1",
        background: [
            "【核心概念】Azure 官方文档：'Compensating Transaction is undo the work performed by a series of steps, which together define an eventually consistent operation, if one or more of the steps fail'——补偿事务用于在多步骤最终一致性操作中，当某个步骤失败时撤销已完成的工作。",
            "【设计原理】官方文档强调：云应用跨多个地理位置的数据源修改数据，为避免竞争并提高性能，应采用最终一致性（Eventually Consistent）而非强事务一致性。补偿事务是实现这种模式的关键机制。",
            "【与数据库回滚的区别】官方文档：补偿事务不是简单地恢复到操作前的状态，因为这样可能覆盖其他实例的并发修改。补偿是新的前向操作（如退款），是语义上的「撤销」而非物理撤销。",
            "【Saga 模式关联】microservices.io 文档：'Implement transactions using a saga, which is sequence of local transactions'——Saga 是一系列本地事务的序列，每个步骤都有对应的补偿事务。补偿事务是 Saga 模式的核心组成部分。",
            "【NServiceBus 最佳实践】官方文档：'Saga should not access a database, call out to web services, or access other resources - neither directly nor indirectly'——Saga 不应直接访问数据库或调用外部服务，而应通过消息编排其他服务执行操作。"
        ],
        keyDifficulties: [
            "【幂等性要求】Azure 官方文档：'define idempotent commands'——补偿步骤必须设计为幂等命令，可安全重复执行。这是因为补偿事务本身也可能失败，需要支持重试。",
            "【补偿顺序】官方文档：补偿步骤不必完全按原始操作的相反顺序执行。某些撤销步骤可以并行执行，应优先补偿对数据一致性更敏感的存储。",
            "【三类事务】microservices.io 文档：Saga 包含三类事务——Compensatable transactions（可补偿事务）、Pivot transaction（关键转折点，成功后不再补偿）、Retryable transactions（必须成功的收尾事务）。理解这三者的划分是设计 Saga 的关键。",
            "【并发冲突】官方文档警告：'may not be possible to simply restore the original data'——由于其他实例可能已修改数据，无法简单回滚。需要设计智能补偿流程，考虑并发操作的影响。",
            "【超时与重试】NServiceBus 文档：设置合理的超时时间，如果步骤未在规定时间内完成，触发补偿逻辑。超时请求一旦发起无法撤销（'once we request a timeout we cannot revoke the request'）。"
        ],
        handsOnPath: [
            "设计旅行预订场景：模拟预订航班 + 酒店的多步骤操作。定义每个步骤的正向操作（预订）和补偿操作（取消预订）。考虑部分成功的场景（航班预订成功但酒店满房）。",
            "实现基于工作流的补偿逻辑：使用状态机记录每个步骤的状态（Pending/Completed/Failed/Compensated）。当某步骤失败时，反向遍历已完成步骤执行补偿。",
            "测试幂等性：故意让补偿操作失败后重试，验证重复执行不会产生副作用。使用唯一标识符（如订单 ID）实现去重逻辑。",
            "实现超时机制：为每个步骤设置 complete-by 时间，超时后标记为失败并触发补偿。使用消息队列的延迟消息或定时任务实现超时检测。",
            "研究 Saga 框架（可选）：探索 NServiceBus、Temporal 等框架如何简化 Saga 实现，理解框架提供的消息相关性、持久化、重试等能力。"
        ],
        selfCheck: [
            "补偿事务与数据库回滚的本质区别是什么？为什么不能简单地恢复到操作前的状态？",
            "为什么补偿操作必须是幂等的？如何实现补偿操作的幂等性？",
            "Saga 模式中的 Pivot transaction 是什么？为什么它是 Saga 的关键转折点？",
            "如何处理补偿事务本身失败的情况？什么情况下需要人工介入？",
            "编排式（Orchestration）和协同式（Choreography）Saga 各有什么优缺点？"
        ],
        extensions: [
            "研究 Temporal Workflows：了解 Temporal 如何通过持久化执行历史和自动重试简化 Saga 实现，支持长时间运行的工作流。",
            "学习 AWS Step Functions：了解如何使用状态机定义工作流，配置错误处理和补偿逻辑。",
            "探索 Outbox 模式：解决「原子性更新数据库并发布消息」的问题，这是 Saga 实现的常见挑战。",
            "研究分布式事务的 CAP 权衡：理解为什么在分布式系统中选择最终一致性而非强一致性。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction",
            "https://microservices.io/patterns/data/saga.html",
            "https://docs.particular.net/nservicebus/sagas/"
        ]
    },
    "w2-2": {
        lessonId: "w2-2",
        background: [
            "【核心概念】Azure 官方文档：'Health Endpoint Monitoring implements functional checks in an application that external tools can access through exposed endpoints at regular intervals'——通过暴露端点供外部工具定期访问，验证应用和服务的可用性。",
            "【问题背景】官方文档：云服务监控比本地服务更困难——没有完全控制、依赖第三方服务。多种因素影响可用性：网络延迟、计算存储性能、网络带宽。需要定期验证服务是否满足 SLA 要求。",
            "【microservices.io 定义】Health Check API 文档：'A service has an health check API endpoint that returns the health of the service'——服务应暴露返回健康状态的 API 端点。服务实例可能在运行但无法处理请求（如数据库连接耗尽）。",
            "【Kubernetes 探针类型】官方文档定义三种探针：Liveness Probe（检测容器是否需要重启）、Readiness Probe（检测容器是否准备好接收流量）、Startup Probe（支持慢启动应用，防止过早被 liveness 杀死）。",
            "【浅层与深层检查】Azure 文档：浅层检查只验证服务本身是否响应；深层检查还会验证数据库、缓存、外部 API 等依赖项的健康状态。根据场景选择合适的检查深度。"
        ],
        keyDifficulties: [
            "【检查内容设计】Azure 官方文档列出关键检查项：响应码验证（HTTP 200 OK）、响应内容检查（即使 200 也可能有错误）、响应时间、外部依赖检查、TLS 证书有效期、DNS 查询延迟。",
            "【Liveness vs Readiness 区分】Kubernetes 文档：Liveness 失败会重启容器，Readiness 失败只会从负载均衡中移除。错误配置可能导致级联重启。应使用相同端点但不同 failureThreshold。",
            "【避免级联故障】Kubernetes 最佳实践：过于激进的 liveness 探针可能在高负载时导致级联重启，减少应用可扩展性。应区分暂时性问题和真正的故障。",
            "【端点安全】Azure 文档建议：配置认证方式（API 密钥、OAuth）、隐藏或模糊端点、参数验证（不认识的参数返回 404）、使用 HTTPS 加密敏感数据。",
            "【缓存检查结果】官方文档：避免每次请求都执行完整检查，应缓存健康检查结果并定期更新。利用现有的性能计数器和错误处理器。"
        ],
        handsOnPath: [
            "实现基础健康端点：创建 /health 或 /healthz 端点，返回 HTTP 200 和简单的 JSON 响应 {\"status\": \"healthy\"}。理解最小可行的健康检查实现。",
            "添加依赖项检查：扩展健康端点，检查数据库连接、Redis 缓存、外部 API 的可用性。返回每个依赖项的状态和整体健康状态。",
            "配置 Kubernetes 探针：为应用配置 livenessProbe、readinessProbe 和 startupProbe。测试不同配置（initialDelaySeconds、periodSeconds、failureThreshold）对行为的影响。",
            "模拟故障场景：故意断开数据库连接或让应用进入假死状态，观察 Kubernetes 如何响应（重启容器、从 Service 移除 Pod）。",
            "集成监控系统：将健康端点与 Prometheus、Datadog 或云厂商监控服务集成，配置告警规则在服务不健康时通知。"
        ],
        selfCheck: [
            "浅层健康检查和深层健康检查各适用于什么场景？如何设计检查的粒度？",
            "Kubernetes 的 Liveness、Readiness、Startup 探针各有什么作用？配置错误会导致什么问题？",
            "如何防止健康检查本身成为性能瓶颈？应该缓存检查结果吗？",
            "健康检查端点应该如何保护？需要认证吗？",
            "从多个地理位置运行健康检查有什么好处？如何实现？"
        ],
        extensions: [
            "研究 ASP.NET Core Health Checks：了解内置的健康检查中间件，以及如何自定义 IHealthCheck 实现。",
            "探索 Azure Traffic Manager 健康检查：了解如何配置流量管理器根据健康检查结果自动故障转移。",
            "学习 Consul 服务发现：了解 Consul 如何使用健康检查决定服务实例的注册和注销。",
            "研究 gRPC 健康检查协议：了解 gRPC 的标准健康检查协议和 Kubernetes 原生支持。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/health-endpoint-monitoring",
            "https://microservices.io/patterns/observability/health-check-api.html",
            "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"
        ]
    },
    "w2-3": {
        lessonId: "w2-3",
        background: [
            "【核心概念】Azure 官方文档：'Leader Election coordinates the actions performed by a collection of collaborating instances in a distributed application by electing one instance as the leader'——在分布式应用中选举一个实例作为领导者，负责协调其他实例的行动。",
            "【问题背景】官方文档：云应用中多个任务实例并行运行，需要协调行动。实例都是对等的，没有自然的领导者。需要防止实例之间的冲突、资源竞争和工作干扰。",
            "【Raft 共识算法】官方文档：'Raft is a consensus algorithm that is designed to be easy to understand. It is equivalent to Paxos in fault-tolerance and performance'——Raft 是易于理解的共识算法，与 Paxos 在容错性和性能上等价。",
            "【etcd 选举机制】官方文档：etcd 提供 Election 服务，核心方法包括 Campaign（竞选领导者）、Proclaim（更新领导者信息）、Leader（获取当前领导者）、Observe（监听领导者变化）、Resign（主动放弃领导权）。",
            "【租约机制】etcd 文档：领导权与租约（Lease）绑定。如果租约过期或被撤销，领导权自动转移给下一个竞选者。这确保了即使领导者崩溃，系统也能继续运行。"
        ],
        keyDifficulties: [
            "【分布式互斥锁实现】Azure 官方文档：常见实现方式是使用分布式互斥锁，第一个获得锁的实例成为领导者。需要处理领导者故障时的锁释放问题。",
            "【租约续期策略】Azure 示例代码展示：领导者需要定期续期租约（KeepRenewingLease），同时执行领导者任务。任意一个失败都应取消另一个，确保不会出现无效领导者。",
            "【单点故障风险】Azure 文档警告：如果用于选举的服务（如 Blob Storage）不可用，则无法进行选举。需要评估该服务的 SLA 是否满足业务需求。",
            "【非确定性】官方文档：无法预测哪个实例会成为领导者。如果业务逻辑依赖于特定实例成为领导者，Leader Election 模式不适用。",
            "【Raft 日志复制】Raft 文档：共识算法确保所有状态机按相同顺序执行相同命令。领导者负责将日志条目复制到跟随者，只有多数节点确认后才提交。"
        ],
        handsOnPath: [
            "使用 etcd 实现领导选举：部署 etcd 集群（可用 Docker Compose），编写客户端代码调用 Campaign API 竞选领导者。模拟领导者崩溃，观察领导权转移。",
            "使用云存储实现选举：按 Azure 示例，使用 Blob 租约实现分布式锁。获取租约的实例成为领导者，定期续期租约保持领导权。",
            "实现心跳机制：领导者定期发送心跳，跟随者监听心跳超时。如果超时未收到心跳，触发新一轮选举。",
            "测试故障场景：模拟网络分区、领导者崩溃、租约过期等场景，验证系统能否正确选出新领导者并恢复正常运行。",
            "探索 Raft 可视化（可选）：访问 raft.github.io 的交互式演示，理解 Raft 算法的领导选举、日志复制和安全性保证。"
        ],
        selfCheck: [
            "Leader Election 模式解决什么问题？在什么场景下需要选举领导者？",
            "使用分布式锁实现领导选举有什么优缺点？需要注意什么问题？",
            "Raft 算法如何保证在网络分区时系统的一致性？什么是脑裂问题？",
            "etcd 的 Lease 机制如何确保领导权在领导者崩溃后能够转移？",
            "领导者应该承担所有工作还是只负责协调？为什么？"
        ],
        extensions: [
            "研究 Apache ZooKeeper 选举：了解 ZooKeeper 的 Sequential Ephemeral ZNode 如何实现领导选举，与 etcd 的差异。",
            "学习 Kubernetes Leader Election：了解 Kubernetes 控制器如何使用 ConfigMap/Lease 实现领导选举，确保高可用。",
            "探索 Redis RedLock：了解 Redis 作者提出的分布式锁算法，以及其争议和改进方案。",
            "研究 Paxos 算法：作为 Raft 的理论基础，理解 Paxos 的 Prepare-Promise-Accept-Accepted 流程。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/leader-election",
            "https://raft.github.io/",
            "https://etcd.io/docs/v3.5/dev-guide/api_concurrency_reference_v3/"
        ]
    },
    "w2-4": {
        lessonId: "w2-4",
        background: [
            "【核心概念】Azure 官方文档：'Scheduler Agent Supervisor coordinates a set of distributed actions as a single operation. If any of the actions fail, try to handle the failures transparently, or else undo the work that was performed'——协调一组分布式操作作为单一业务流程，处理故障或撤销已完成的工作。",
            "【三组件架构】官方文档定义三个核心组件：Scheduler（调度器，编排任务步骤）、Agent（代理，封装对远程服务的调用）、Supervisor（监督器，监控任务状态并触发恢复）。",
            "【Temporal Workflows】官方文档：'A Workflow Definition specifies the logic of your workflow'——工作流定义描述业务逻辑。工作流执行具有持久性，'can run—and keeping running—for years, even if the underlying infrastructure fails'——即使基础设施故障也能持续运行。",
            "【Apache Airflow】官方文档：'Airflow is a platform that lets you build and run workflows'——工作流表示为 DAG（有向无环图），包含 Tasks（任务单元）。Scheduler 触发工作流并提交任务到执行器。",
            "【幂等性要求】Azure 文档强调：Agent 执行的操作必须是幂等的，支持跨重试尝试的稳定标识符用于去重。这是分布式系统容错的基础。"
        ],
        keyDifficulties: [
            "【Scheduler 职责】官方文档：Scheduler 编排任务步骤执行，维护工作流状态（未开始/运行中/已完成），管理 complete-by 时间（完成期限），与 Agent 异步通信。",
            "【Agent 职责】官方文档：Agent 封装对远程服务的调用，实现错误处理和重试逻辑，在超时前停止处理，使用稳定标识符支持去重。",
            "【Supervisor 职责】官方文档：Supervisor 定期监控任务步骤状态，检测超时或失败的步骤，触发恢复或补偿操作，管理重试次数阈值。",
            "【状态管理】官方文档示例：状态存储记录 OrderID、LockedBy（处理实例）、CompleteBy（期限）、ProcessState、FailureCount。恢复逻辑依赖持久化状态。",
            "【自愈机制】官方文档：组件失败后可自动启动新实例继续处理，Supervisor 自动检测并触发恢复，状态存储可复制以提高容错能力。"
        ],
        handsOnPath: [
            "设计订单处理工作流：定义多步骤流程（验证订单 → 扣减库存 → 创建支付 → 发送通知），为每个步骤指定 Agent 和超时时间。",
            "实现简单的 Scheduler：使用消息队列（如 RabbitMQ）实现任务调度，将每个步骤作为消息发送给对应的 Agent。记录步骤状态到数据库。",
            "实现 Supervisor 监控：创建定时任务轮询状态存储，检测超时或失败的步骤。超过重试阈值时触发补偿事务或告警。",
            "使用 Temporal 实现工作流（推荐）：安装 Temporal 服务，使用 SDK 定义 Workflow 和 Activities。体验 Temporal 如何自动处理重试、超时和持久化。",
            "使用 Airflow 实现 DAG（可选）：定义 DAG 描述任务依赖关系，配置任务重试策略和告警。通过 Web UI 监控工作流执行。"
        ],
        selfCheck: [
            "Scheduler、Agent、Supervisor 三个组件各自的职责是什么？它们如何协作？",
            "为什么 Agent 执行的操作必须是幂等的？如何设计幂等操作？",
            "Supervisor 检测到步骤超时后应该执行什么操作？重试还是补偿？如何决定？",
            "Temporal Workflows 如何实现即使基础设施故障也能持续运行？",
            "Airflow 的 DAG 和 Task 概念如何对应 Scheduler Agent Supervisor 模式？"
        ],
        extensions: [
            "研究 Temporal 高级特性：了解 Signals（外部输入）、Queries（状态查询）、Child Workflows（子工作流）、Continue-As-New（长时间运行工作流）。",
            "探索 AWS Step Functions：了解如何使用 Amazon States Language 定义状态机，配置错误处理和重试策略。",
            "学习 Cadence vs Temporal：理解 Temporal 的前身 Cadence 的设计理念，以及 Temporal 的改进之处。",
            "研究 Saga 与 SAS 模式的结合：了解如何在 Scheduler Agent Supervisor 架构中实现 Saga 补偿逻辑。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/scheduler-agent-supervisor",
            "https://docs.temporal.io/workflows",
            "https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/overview.html"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "w2-1": [
        {
            id: "w2-1-q1",
            question: "Azure 官方文档对 Compensating Transaction 模式的定义是什么？",
            options: [
                "一种数据库事务优化技术",
                "用于在多步骤最终一致性操作中，当某个步骤失败时撤销已完成的工作",
                "一种消息队列模式",
                "一种缓存失效策略"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：'Compensating Transaction is undo the work performed by a series of steps, which together define an eventually consistent operation, if one or more of the steps fail'。"
        },
        {
            id: "w2-1-q2",
            question: "补偿事务与数据库回滚的本质区别是什么？",
            options: [
                "补偿事务更快",
                "数据库回滚更安全",
                "补偿事务是新的前向操作（语义撤销），数据库回滚是物理撤销",
                "两者完全相同"
            ],
            answer: 2,
            rationale: "官方文档强调：补偿事务不能简单地恢复到操作前的状态，因为可能覆盖其他实例的并发修改。补偿是新的前向操作（如退款），是语义上的「撤销」。"
        },
        {
            id: "w2-1-q3",
            question: "Azure 官方文档对补偿步骤设计的核心要求是什么？",
            options: [
                "必须使用数据库事务",
                "'define idempotent commands'——补偿步骤必须是幂等命令",
                "必须按原始顺序的完全相反执行",
                "补偿步骤不能失败"
            ],
            answer: 1,
            rationale: "Azure 官方文档强调：'define idempotent commands'——补偿步骤必须设计为幂等命令，可安全重复执行，因为补偿事务本身也可能失败需要重试。"
        },
        {
            id: "w2-1-q4",
            question: "microservices.io 文档中，Saga 模式的核心定义是什么？",
            options: [
                "使用分布式锁实现事务",
                "'Implement transactions using a saga, which is sequence of local transactions'——使用本地事务序列实现事务",
                "使用两阶段提交协议",
                "使用全局事务管理器"
            ],
            answer: 1,
            rationale: "microservices.io 文档定义：'Implement transactions using a saga, which is sequence of local transactions'——Saga 是一系列本地事务的序列，每个步骤都有对应的补偿事务。"
        },
        {
            id: "w2-1-q5",
            question: "NServiceBus 文档对 Saga 访问外部资源的建议是什么？",
            options: [
                "鼓励直接访问数据库提高性能",
                "应该缓存所有外部调用结果",
                "'Saga should not access a database, call out to web services, or access other resources'——不应直接访问数据库或调用外部服务",
                "只能访问只读资源"
            ],
            answer: 2,
            rationale: "NServiceBus 官方文档明确：'Saga should not access a database, call out to web services, or access other resources - neither directly nor indirectly'——Saga 应通过消息编排其他服务执行操作。"
        },
        {
            id: "w2-1-q6",
            question: "Azure 官方文档对补偿步骤执行顺序的说明是什么？",
            options: [
                "必须严格按原始操作的相反顺序执行",
                "必须并行执行所有补偿步骤",
                "补偿步骤不必完全按相反顺序，某些可以并行执行",
                "只能顺序执行，不能并行"
            ],
            answer: 2,
            rationale: "Azure 官方文档说明：补偿步骤不必完全按原始操作的相反顺序执行。某些撤销步骤可以并行执行，应优先补偿对数据一致性更敏感的存储。"
        },
        {
            id: "w2-1-q7",
            question: "microservices.io 文档中，Saga 的三类事务是什么？",
            options: [
                "读事务、写事务、混合事务",
                "Compensatable transactions、Pivot transaction、Retryable transactions",
                "本地事务、远程事务、分布式事务",
                "同步事务、异步事务、批量事务"
            ],
            answer: 1,
            rationale: "microservices.io 文档定义三类事务：Compensatable transactions（可补偿事务）、Pivot transaction（关键转折点）、Retryable transactions（必须成功的收尾事务）。"
        },
        {
            id: "w2-1-q8",
            question: "NServiceBus 文档对超时请求的说明是什么？",
            options: [
                "超时请求可以随时取消",
                "超时请求会自动重试",
                "'once we request a timeout we cannot revoke the request'——超时请求一旦发起无法撤销",
                "超时请求只用于测试环境"
            ],
            answer: 2,
            rationale: "NServiceBus 文档明确：'once we request a timeout we cannot revoke the request'——超时请求一旦发起无法撤销，需要在设计时考虑这一约束。"
        },
        {
            id: "w2-1-q9",
            question: "Azure 官方文档对补偿事务失败的处理建议是什么？",
            options: [
                "忽略失败继续执行",
                "补偿事务不会失败",
                "需要支持恢复机制，某些情况需要人工介入",
                "自动回滚所有操作"
            ],
            answer: 2,
            rationale: "Azure 官方文档指出：补偿事务本身可能失败，需支持恢复机制。系统应记录详细失败信息用于告警，某些情况需要人工介入。"
        },
        {
            id: "w2-1-q10",
            question: "microservices.io 文档中，Saga 模式相比两阶段提交（2PC）的主要优势是什么？",
            options: [
                "实现更简单",
                "一致性更强",
                "更好的性能和可用性，避免长锁和协调开销",
                "不需要补偿逻辑"
            ],
            answer: 2,
            rationale: "microservices.io 文档说明：Saga 通过最终一致性和补偿事务实现，避免了 2PC 的长锁和协调开销，性能和可用性更好。"
        },
        {
            id: "w2-1-q11",
            question: "Azure 官方文档建议如何获取操作所需资源？",
            options: [
                "按需获取，用完释放",
                "使用全局锁",
                "提前获取所有资源，使用短期基于超时的锁",
                "不需要考虑资源管理"
            ],
            answer: 2,
            rationale: "Azure 官方文档建议：提前获取操作所需资源，使用短期基于超时的锁，获取所有资源后再执行工作，确保操作的原子性。"
        },
        {
            id: "w2-1-q12",
            question: "microservices.io 文档提到的 Saga 协调方式有哪两种？",
            options: [
                "同步和异步",
                "编排式（Orchestration）和协同式（Choreography）",
                "主动和被动",
                "集中式和分布式"
            ],
            answer: 1,
            rationale: "microservices.io 文档定义两种协调方式：Choreography-based（服务发布事件，其他服务响应）和 Orchestration-based（中央编排器指挥各服务）。"
        }
    ],
    "w2-2": [
        {
            id: "w2-2-q1",
            question: "Azure 官方文档对 Health Endpoint Monitoring 模式的定义是什么？",
            options: [
                "通过日志分析监控应用健康",
                "'implements functional checks in an application that external tools can access through exposed endpoints'——通过暴露端点供外部工具定期访问验证可用性",
                "通过 CPU 使用率判断健康状态",
                "通过用户反馈监控应用健康"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：'Health Endpoint Monitoring implements functional checks in an application that external tools can access through exposed endpoints at regular intervals'。"
        },
        {
            id: "w2-2-q2",
            question: "microservices.io 文档指出服务健康检查的必要性是什么？",
            options: [
                "提高性能",
                "减少内存使用",
                "服务实例可能在运行但无法处理请求（如数据库连接耗尽）",
                "满足合规要求"
            ],
            answer: 2,
            rationale: "microservices.io 文档指出：'A service instance may be running but unable to handle requests'——服务实例可能在运行但无法处理请求，因此需要健康检查验证服务真正的可用性。"
        },
        {
            id: "w2-2-q3",
            question: "Kubernetes 文档定义的三种探针类型是什么？",
            options: [
                "CPU Probe、Memory Probe、Network Probe",
                "Liveness Probe、Readiness Probe、Startup Probe",
                "Health Probe、Status Probe、Ready Probe",
                "Init Probe、Run Probe、Stop Probe"
            ],
            answer: 1,
            rationale: "Kubernetes 官方文档定义三种探针：Liveness Probe（检测是否需要重启）、Readiness Probe（检测是否准备好接收流量）、Startup Probe（支持慢启动应用）。"
        },
        {
            id: "w2-2-q4",
            question: "Kubernetes 文档对 Liveness Probe 失败的处理方式是什么？",
            options: [
                "从 Service 中移除 Pod",
                "发送告警",
                "Kubelet kills and restarts the container——杀死并重启容器",
                "标记 Pod 为不健康"
            ],
            answer: 2,
            rationale: "Kubernetes 文档明确：Liveness Probe 失败时，'Kubelet kills and restarts the container if the probe fails'——Kubelet 会杀死并重启容器。"
        },
        {
            id: "w2-2-q5",
            question: "Kubernetes 文档对 Readiness Probe 失败的处理方式是什么？",
            options: [
                "重启容器",
                "删除 Pod",
                "Removes Pod from load balancers——从负载均衡中移除 Pod",
                "扩容更多 Pod"
            ],
            answer: 2,
            rationale: "Kubernetes 文档说明：Readiness Probe 失败时，'Removes Pod from load balancers when not ready'——Pod 的 Ready 状态变为 false，从 Service 端点中移除。"
        },
        {
            id: "w2-2-q6",
            question: "Kubernetes 最佳实践对过于激进的 Liveness 探针的警告是什么？",
            options: [
                "会增加网络延迟",
                "可能在高负载时导致级联重启，减少应用可扩展性",
                "会消耗过多 CPU",
                "会导致日志过多"
            ],
            answer: 1,
            rationale: "Kubernetes 最佳实践警告：'Can cause cascading restarts under load'——过于激进的 liveness 探针可能在高负载时导致级联重启，减少应用可扩展性。"
        },
        {
            id: "w2-2-q7",
            question: "Azure 文档对浅层检查和深层检查的区分是什么？",
            options: [
                "浅层检查更慢，深层检查更快",
                "浅层只检查服务本身，深层还检查数据库、缓存等依赖项",
                "浅层用于生产，深层用于测试",
                "浅层检查 CPU，深层检查内存"
            ],
            answer: 1,
            rationale: "Azure 文档说明：浅层检查只验证服务本身是否响应；深层检查还会验证数据库、缓存、外部 API 等依赖项的健康状态。"
        },
        {
            id: "w2-2-q8",
            question: "Azure 文档对健康检查端点安全的建议包括哪些？",
            options: [
                "不需要任何安全措施",
                "只使用 HTTP",
                "配置认证、隐藏端点、参数验证、使用 HTTPS",
                "只允许内网访问"
            ],
            answer: 2,
            rationale: "Azure 文档建议：配置认证方式（API 密钥、OAuth）、隐藏或模糊端点、参数验证（不认识的参数返回 404）、使用 HTTPS 加密敏感数据。"
        },
        {
            id: "w2-2-q9",
            question: "Azure 文档列出的健康检查关键检查项有哪些？",
            options: [
                "只检查 CPU 使用率",
                "响应码、响应内容、响应时间、外部依赖、TLS 证书、DNS 延迟",
                "只检查内存使用率",
                "只检查磁盘空间"
            ],
            answer: 1,
            rationale: "Azure 文档列出关键检查项：响应码验证、响应内容检查、响应时间、外部依赖检查、TLS 证书有效期、DNS 查询延迟。"
        },
        {
            id: "w2-2-q10",
            question: "Kubernetes 文档对 Startup Probe 的用途说明是什么？",
            options: [
                "检测容器是否需要重启",
                "检测容器是否准备好接收流量",
                "'Indicate when a container application has started'——支持慢启动应用，防止被 liveness 过早杀死",
                "检测容器是否需要扩容"
            ],
            answer: 2,
            rationale: "Kubernetes 文档说明：Startup Probe 'Indicate when a container application has started'——支持慢启动应用，在应用启动完成前阻止 liveness 和 readiness 探针。"
        },
        {
            id: "w2-2-q11",
            question: "Azure 文档对健康检查结果缓存的建议是什么？",
            options: [
                "永远不应该缓存",
                "应缓存检查结果并定期更新，避免每次请求都执行完整检查",
                "只缓存失败结果",
                "缓存时间越长越好"
            ],
            answer: 1,
            rationale: "Azure 文档建议：避免每次请求都执行完整检查，应缓存健康检查结果并定期更新。利用现有的性能计数器和错误处理器。"
        },
        {
            id: "w2-2-q12",
            question: "Kubernetes 文档对 Liveness 和 Readiness 探针的最佳实践建议是什么？",
            options: [
                "使用完全不同的端点和配置",
                "只配置 Liveness 探针",
                "使用相同端点但不同 failureThreshold，Readiness 阈值更低",
                "只配置 Readiness 探针"
            ],
            answer: 2,
            rationale: "Kubernetes 最佳实践建议：使用相同的端点进行 liveness 和 readiness 探针，但配置不同的 failureThreshold——Readiness 阈值更低（快速检测），Liveness 阈值更高（避免级联故障）。"
        }
    ],
    "w2-3": [
        {
            id: "w2-3-q1",
            question: "Azure 官方文档对 Leader Election 模式的定义是什么？",
            options: [
                "一种负载均衡策略",
                "'coordinates the actions performed by a collection of collaborating instances by electing one instance as the leader'——选举一个实例作为领导者协调其他实例",
                "一种缓存策略",
                "一种数据库分片策略"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：'Leader Election coordinates the actions performed by a collection of collaborating instances in a distributed application by electing one instance as the leader'。"
        },
        {
            id: "w2-3-q2",
            question: "Raft 官方文档对 Raft 算法的描述是什么？",
            options: [
                "'a consensus algorithm that is designed to be easy to understand, equivalent to Paxos in fault-tolerance and performance'",
                "一种消息队列协议",
                "一种数据库事务协议",
                "一种网络路由协议"
            ],
            answer: 0,
            rationale: "Raft 官方文档明确：'Raft is a consensus algorithm that is designed to be easy to understand. It is equivalent to Paxos in fault-tolerance and performance'——与 Paxos 在容错性和性能上等价。"
        },
        {
            id: "w2-3-q3",
            question: "etcd 文档中 Campaign 方法的作用是什么？",
            options: [
                "更新领导者信息",
                "获取当前领导者",
                "'waits to acquire leadership in an election'——等待获取选举中的领导权",
                "放弃领导权"
            ],
            answer: 2,
            rationale: "etcd 文档说明：Campaign 方法 'waits to acquire leadership in an election, returning a LeaderKey representing the leadership if successful'——等待获取领导权。"
        },
        {
            id: "w2-3-q4",
            question: "etcd 文档中领导权与什么机制绑定？",
            options: [
                "数据库事务",
                "Lease（租约）——租约过期或撤销时领导权自动转移",
                "消息队列",
                "文件锁"
            ],
            answer: 1,
            rationale: "etcd 文档说明：'Leadership is tied to a lease. If the lease expires or is revoked before resignation, leadership transfers to the next campaigner automatically'——领导权与租约绑定。"
        },
        {
            id: "w2-3-q5",
            question: "Azure 官方文档对使用分布式互斥锁实现领导选举的说明是什么？",
            options: [
                "不推荐使用分布式锁",
                "第一个获得锁的实例成为领导者，需处理领导者故障时的锁释放",
                "所有实例同时成为领导者",
                "使用投票方式选举"
            ],
            answer: 1,
            rationale: "Azure 文档说明：常见实现方式是使用分布式互斥锁，第一个获得锁的实例成为领导者。需要处理领导者故障时的锁释放问题。"
        },
        {
            id: "w2-3-q6",
            question: "Azure 示例代码中领导者任务和租约续期的关系是什么？",
            options: [
                "完全独立运行",
                "租约续期先于领导者任务",
                "任意一个失败都应取消另一个，确保不会出现无效领导者",
                "领导者任务先于租约续期"
            ],
            answer: 2,
            rationale: "Azure 示例代码展示：领导者需要同时运行领导者任务和租约续期任务，'任意一个完成都会取消另一个'，确保不会出现无效领导者持有租约。"
        },
        {
            id: "w2-3-q7",
            question: "Azure 文档对 Leader Election 模式的单点故障风险警告是什么？",
            options: [
                "没有单点故障风险",
                "用于选举的服务（如 Blob Storage）不可用时无法进行选举",
                "领导者崩溃后系统无法恢复",
                "只有网络分区才会导致问题"
            ],
            answer: 1,
            rationale: "Azure 文档警告：如果用于选举的服务（如 Blob Storage）不可用，则无法进行选举。需要评估该服务的 SLA 是否满足业务需求。"
        },
        {
            id: "w2-3-q8",
            question: "Raft 文档对共识机制中多数节点要求的说明是什么？",
            options: [
                "需要所有节点同意",
                "只需要一个节点同意",
                "一旦多数服务器可用，系统就能继续运作（如 5 台服务器允许 2 台故障）",
                "需要超级多数（三分之二）同意"
            ],
            answer: 2,
            rationale: "Raft 文档说明：'Once a majority of servers are available, the system continues to operate'——例如 5 台服务器的集群即使 2 台故障仍可继续运行。"
        },
        {
            id: "w2-3-q9",
            question: "etcd 文档中 Resign 方法的作用是什么？",
            options: [
                "竞选领导者",
                "更新领导者信息",
                "'Releases leadership so other candidates can acquire it'——主动放弃领导权",
                "监听领导者变化"
            ],
            answer: 2,
            rationale: "etcd 文档说明：Resign 方法 'Releases leadership so other candidates can acquire it'——主动放弃领导权，允许其他竞选者获取领导权。"
        },
        {
            id: "w2-3-q10",
            question: "Azure 文档对领导者工作负担的建议是什么？",
            options: [
                "领导者应该承担所有工作",
                "领导者不必参与所有工作，仅负责协调，避免成为瓶颈",
                "领导者应该是最强大的实例",
                "领导者不应该做任何工作"
            ],
            answer: 1,
            rationale: "Azure 文档建议：领导者不必参与所有工作，仅负责协调其他工作实例。让领导者执行全部工作可能成为瓶颈。"
        },
        {
            id: "w2-3-q11",
            question: "Azure 文档对 Leader Election 模式非确定性的说明是什么？",
            options: [
                "总是选择第一个启动的实例",
                "按字母顺序选择实例",
                "无法预测哪个实例会成为领导者",
                "总是选择最新的实例"
            ],
            answer: 2,
            rationale: "Azure 文档说明：无法预测哪个实例会成为领导者。如果业务逻辑依赖于特定实例成为领导者，Leader Election 模式不适用。"
        },
        {
            id: "w2-3-q12",
            question: "etcd 文档中 LeaderKey 包含哪些关键信息？",
            options: [
                "只有选举名称",
                "只有租约 ID",
                "name（选举名称）、key（所有权键）、rev（创建版本）、lease（租约 ID）",
                "只有创建版本"
            ],
            answer: 2,
            rationale: "etcd 文档说明 LeaderKey 包含：name（选举标识符）、key（不透明所有权键，删除表示领导权丢失）、rev（创建版本用于事务验证）、lease（租约 ID）。"
        }
    ],
    "w2-4": [
        {
            id: "w2-4-q1",
            question: "Azure 官方文档对 Scheduler Agent Supervisor 模式的定义是什么？",
            options: [
                "一种任务调度算法",
                "'coordinates a set of distributed actions as a single operation'——协调一组分布式操作作为单一业务流程",
                "一种消息队列模式",
                "一种数据库事务模式"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：'Scheduler Agent Supervisor coordinates a set of distributed actions as a single operation. If any of the actions fail, try to handle the failures transparently, or else undo the work that was performed'。"
        },
        {
            id: "w2-4-q2",
            question: "Azure 文档定义的三个核心组件是什么？",
            options: [
                "Producer、Consumer、Queue",
                "Scheduler（调度器）、Agent（代理）、Supervisor（监督器）",
                "Master、Worker、Coordinator",
                "Leader、Follower、Observer"
            ],
            answer: 1,
            rationale: "Azure 文档定义三个核心组件：Scheduler（编排任务步骤）、Agent（封装对远程服务的调用）、Supervisor（监控任务状态并触发恢复）。"
        },
        {
            id: "w2-4-q3",
            question: "Azure 文档对 Scheduler 组件职责的描述是什么？",
            options: [
                "执行远程服务调用",
                "监控任务状态",
                "编排任务步骤执行、维护工作流状态、管理 complete-by 时间、与 Agent 异步通信",
                "处理错误和重试"
            ],
            answer: 2,
            rationale: "Azure 文档说明 Scheduler 职责：编排任务步骤执行，维护工作流状态（未开始/运行中/已完成），管理 complete-by 时间（完成期限），与 Agent 异步通信。"
        },
        {
            id: "w2-4-q4",
            question: "Azure 文档对 Agent 执行操作的核心要求是什么？",
            options: [
                "必须同步执行",
                "必须使用数据库事务",
                "必须是幂等的，支持稳定标识符用于去重",
                "必须使用消息队列"
            ],
            answer: 2,
            rationale: "Azure 文档强调：Agent 执行的操作必须是幂等的（'idempotent'），支持跨重试尝试的稳定标识符用于去重。这是分布式系统容错的基础。"
        },
        {
            id: "w2-4-q5",
            question: "Temporal 文档对 Workflow 持久性的描述是什么？",
            options: [
                "工作流只能运行几分钟",
                "工作流需要手动重启",
                "'can run—and keeping running—for years, even if the underlying infrastructure fails'——即使基础设施故障也能持续运行",
                "工作流必须在一天内完成"
            ],
            answer: 2,
            rationale: "Temporal 文档强调工作流的持久性：'They can run—and keeping running—for years, even if the underlying infrastructure fails'——即使基础设施故障也能持续运行。"
        },
        {
            id: "w2-4-q6",
            question: "Apache Airflow 文档对 DAG 的定义是什么？",
            options: [
                "一种数据库类型",
                "'Directed Acyclic Graph'——有向无环图，包含 Tasks 和依赖关系",
                "一种消息格式",
                "一种网络协议"
            ],
            answer: 1,
            rationale: "Airflow 文档说明：工作流表示为 DAG（Directed Acyclic Graph，有向无环图），'containing individual units of work called Tasks'——包含称为 Tasks 的工作单元。"
        },
        {
            id: "w2-4-q7",
            question: "Azure 文档对 Supervisor 组件职责的描述是什么？",
            options: [
                "执行业务逻辑",
                "编排任务步骤",
                "定期监控任务步骤状态、检测超时或失败、触发恢复或补偿、管理重试阈值",
                "调用远程服务"
            ],
            answer: 2,
            rationale: "Azure 文档说明 Supervisor 职责：定期监控任务步骤状态，检测超时或失败的步骤，触发恢复或补偿操作，管理重试次数阈值。"
        },
        {
            id: "w2-4-q8",
            question: "Airflow 文档对 Scheduler 组件的描述是什么？",
            options: [
                "只负责日志记录",
                "'Triggers workflows and submits tasks to executors'——触发工作流并提交任务到执行器",
                "只负责用户界面",
                "只负责数据存储"
            ],
            answer: 1,
            rationale: "Airflow 文档说明：Scheduler 组件 'Triggers workflows and submits tasks to executors'——触发工作流并将任务提交给执行器执行。"
        },
        {
            id: "w2-4-q9",
            question: "Azure 文档示例中状态存储记录哪些关键信息？",
            options: [
                "只有订单 ID",
                "OrderID、LockedBy（处理实例）、CompleteBy（期限）、ProcessState、FailureCount",
                "只有处理状态",
                "只有失败次数"
            ],
            answer: 1,
            rationale: "Azure 文档示例说明状态存储记录：OrderID、LockedBy（处理实例 ID）、CompleteBy（完成期限）、ProcessState（处理状态）、FailureCount（失败次数）。"
        },
        {
            id: "w2-4-q10",
            question: "Azure 文档对系统自愈机制的描述是什么？",
            options: [
                "需要人工重启所有组件",
                "组件失败后可自动启动新实例继续处理，Supervisor 自动检测并触发恢复",
                "系统无法自愈",
                "只有 Scheduler 支持自愈"
            ],
            answer: 1,
            rationale: "Azure 文档说明自愈机制：组件失败后可自动启动新实例继续处理，Supervisor 自动检测并触发恢复，状态存储可复制以提高容错能力。"
        },
        {
            id: "w2-4-q11",
            question: "Temporal 文档对 Workflow Definition 的定义是什么？",
            options: [
                "数据库模式",
                "'specifies the logic of your workflow'——定义工作流的业务逻辑",
                "网络配置",
                "用户界面设计"
            ],
            answer: 1,
            rationale: "Temporal 文档定义：'A Workflow Definition specifies the logic of your workflow'——工作流定义描述业务逻辑，可以多次执行并提供不同的输入。"
        },
        {
            id: "w2-4-q12",
            question: "Airflow 文档对任务通信的描述是什么？",
            options: [
                "任务直接共享内存",
                "任务通过 XComs 传递元数据或使用外部存储传输大文件",
                "任务不能通信",
                "任务只能通过数据库通信"
            ],
            answer: 1,
            rationale: "Airflow 文档说明：Tasks 通过 XComs（cross-communications）传递元数据，或使用外部存储传输大文件。任务不一定在同一台机器上运行。"
        }
    ]
}
