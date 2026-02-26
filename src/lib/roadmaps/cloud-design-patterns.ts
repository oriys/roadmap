import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const cloudDesignPatternsStages: Stage[] = [
    {
        id: "phase1",
        title: "第一阶段：弹性与可靠性模式",
        duration: "第 1-2 周",
        goal: "掌握云原生应用的核心弹性模式，构建能够优雅处理故障的系统。",
        weeks: [
            {
                id: "w1",
                title: "第 1 周：基础弹性模式",
                summary: "学习处理临时故障和防止级联故障的核心模式。",
                overview: "在分布式云环境中，故障是常态而非例外。本周学习 Retry、Circuit Breaker、Bulkhead 等弹性模式，这些是构建可靠云应用的基石。理解每个模式解决的问题、适用场景和实现权衡。",
                keyPoints: [
                    "Retry 模式：通过重试处理临时故障，但需要考虑幂等性和退避策略。",
                    "Circuit Breaker 模式：通过熔断防止故障级联，快速失败优于无尽等待。",
                    "Bulkhead 模式：通过隔离限制故障影响范围，像船舱的水密隔板一样。",
                ],
                lessons: [
                    {
                        id: "w1-1",
                        title: "Retry 模式：优雅处理临时故障",
                        detail: "学习如何设计重试策略，包括指数退避、抖动、最大重试次数等，以及如何区分可重试和不可重试的错误。",
                        keyPoints: [
                            "指数退避与抖动：逐步增加重试间隔并添加随机抖动，避免多个客户端同时重试导致的「重试风暴」。",
                            "幂等性保证：重试前提是操作幂等，否则可能导致重复处理，需要通过幂等键或去重机制保障。",
                            "可重试 vs 不可重试：网络超时、5xx 错误可重试，4xx 客户端错误（如 400/403）不应重试。",
                        ],
                        resources: [
                            { title: "Retry Pattern - Azure Architecture", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/retry" },
                            { title: "Exponential Backoff And Jitter - AWS", url: "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/" },
                            { title: "Resilience4j Retry", url: "https://resilience4j.readme.io/docs/retry" },
                        ],
                    },
                    {
                        id: "w1-2",
                        title: "Circuit Breaker 模式：防止级联故障",
                        detail: "深入理解熔断器的三态（Closed/Open/Half-Open）转换，学习配置阈值、超时和监控的最佳实践。",
                        keyPoints: [
                            "三态转换：Closed（正常计数失败）→ Open（直接拒绝请求）→ Half-Open（放行少量探测请求验证恢复）。",
                            "阈值配置：需要根据服务 SLA 设定失败率阈值和超时窗口，过于敏感会频繁熔断，过于宽松则无法保护系统。",
                            "降级策略：熔断触发后应返回缓存数据、默认值或友好错误提示，而非直接抛出异常。",
                        ],
                        resources: [
                            { title: "Circuit Breaker Pattern - Azure Architecture", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker" },
                            { title: "Circuit Breaker - Martin Fowler", url: "https://martinfowler.com/bliki/CircuitBreaker.html" },
                            { title: "Resilience4j Circuit Breaker", url: "https://resilience4j.readme.io/docs/circuitbreaker" },
                        ],
                    },
                    {
                        id: "w1-3",
                        title: "Bulkhead 模式：隔离故障影响",
                        detail: "学习如何通过资源隔离（线程池、进程、容器）限制故障的影响范围，防止单点故障拖垮整个系统。",
                        keyPoints: [
                            "线程池隔离：为不同下游服务分配独立线程池，一个服务超时不会耗尽所有线程影响其他服务。",
                            "进程/容器隔离：通过独立进程或容器运行关键组件，实现更强的资源隔离和故障边界。",
                            "隔离粒度权衡：隔离越细保护越强，但资源利用率降低，需根据服务重要性合理划分。",
                        ],
                        resources: [
                            { title: "Bulkhead Pattern - Azure Architecture", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead" },
                            { title: "Resilience4j Bulkhead", url: "https://resilience4j.readme.io/docs/bulkhead" },
                            { title: "Bulkhead Pattern Explained", url: "https://www.baeldung.com/resilience4j-bulkhead" },
                        ],
                    },
                    {
                        id: "w1-4",
                        title: "Rate Limiting 与 Throttling：控制资源消耗",
                        detail: "学习如何通过限流和节流保护系统免受过载，理解令牌桶、漏桶等算法的实现和适用场景。",
                        keyPoints: [
                            "令牌桶算法：按固定速率补充令牌，允许突发流量但限制平均速率，适合大部分 API 限流场景。",
                            "漏桶算法：请求进入队列按固定速率处理，流量更平滑但不允许突发，适合对下游速率敏感的场景。",
                            "多维度限流：可按用户、IP、API 路径等多个维度组合限流，结合 429 状态码和 Retry-After 响应头。",
                        ],
                        resources: [
                            { title: "Throttling Pattern - Azure Architecture", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/throttling" },
                            { title: "Rate Limiting Pattern - Azure Architecture", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/rate-limiting-pattern" },
                            { title: "Rate Limiting Fundamentals - ByteByteGo", url: "https://blog.bytebytego.com/p/rate-limiting-fundamentals" },
                        ],
                    },
                ],
            },
            {
                id: "w2",
                title: "第 2 周：高级可靠性模式",
                summary: "学习补偿事务、健康检查和领导选举等高级可靠性模式。",
                overview: "本周深入学习分布式系统中更复杂的可靠性模式。补偿事务处理失败回滚，健康检查监控服务状态，领导选举协调分布式操作。这些模式共同构成了云应用可靠性的完整图景。",
                keyPoints: [
                    "Compensating Transaction：在无法回滚的分布式操作中，通过补偿操作实现「逻辑回滚」。",
                    "Health Endpoint Monitoring：通过专门的健康端点监控服务及其依赖的状态。",
                    "Leader Election：在分布式环境中协调任务执行，确保只有一个实例执行关键操作。",
                ],
                lessons: [
                    {
                        id: "w2-1",
                        title: "Compensating Transaction 模式：撤销已完成的操作",
                        detail: "学习如何设计补偿事务来撤销一系列步骤中已完成的工作，理解与数据库回滚的区别和设计挑战。",
                        resources: [
                            { title: "Compensating Transaction Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction" },
                            { title: "Saga Pattern - microservices.io", url: "https://microservices.io/patterns/data/saga.html" },
                            { title: "Sagas - NServiceBus Docs", url: "https://docs.particular.net/nservicebus/sagas/" },
                        ],
                    },
                    {
                        id: "w2-2",
                        title: "Health Endpoint Monitoring 模式：服务健康检查",
                        detail: "学习设计有效的健康检查端点，包括浅层检查和深层检查，以及与负载均衡器和编排系统的集成。",
                        resources: [
                            { title: "Health Endpoint Monitoring - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/health-endpoint-monitoring" },
                            { title: "Health Check API - microservices.io", url: "https://microservices.io/patterns/observability/health-check-api.html" },
                            { title: "Kubernetes Liveness and Readiness Probes", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/" },
                        ],
                    },
                    {
                        id: "w2-3",
                        title: "Leader Election 模式：协调分布式操作",
                        detail: "学习在分布式系统中选举领导者的算法和实现，确保只有一个实例执行关键任务。",
                        resources: [
                            { title: "Leader Election Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/leader-election" },
                            { title: "Raft Consensus Algorithm", url: "https://raft.github.io/" },
                            { title: "etcd Leader Election", url: "https://etcd.io/docs/v3.5/dev-guide/api_concurrency_reference_v3/" },
                        ],
                    },
                    {
                        id: "w2-4",
                        title: "Scheduler Agent Supervisor 模式：协调复杂工作流",
                        detail: "学习如何协调分布式服务和资源中的一组操作，使系统能够从故障中恢复并重试失败的操作。",
                        resources: [
                            { title: "Scheduler Agent Supervisor - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/scheduler-agent-supervisor" },
                            { title: "Temporal Workflows", url: "https://docs.temporal.io/workflows" },
                            { title: "Apache Airflow", url: "https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/overview.html" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase2",
        title: "第二阶段：消息与通信模式",
        duration: "第 3-4 周",
        goal: "掌握异步消息传递和服务间通信的核心模式，构建松耦合的分布式系统。",
        weeks: [
            {
                id: "w3",
                title: "第 3 周：消息队列模式",
                summary: "学习基于消息队列的异步通信模式，实现服务解耦和负载均衡。",
                overview: "消息队列是云原生架构的基石。本周学习 Queue-Based Load Leveling、Competing Consumers、Priority Queue 等模式，理解如何通过消息传递实现服务解耦、负载均衡和弹性扩展。",
                keyPoints: [
                    "Queue-Based Load Leveling：使用队列作为缓冲区，平滑间歇性重负载。",
                    "Competing Consumers：多个消费者竞争处理消息，实现水平扩展。",
                    "Priority Queue：根据优先级处理消息，确保重要任务优先执行。",
                ],
                lessons: [
                    {
                        id: "w3-1",
                        title: "Queue-Based Load Leveling 模式：平滑负载峰值",
                        detail: "学习如何使用消息队列作为缓冲区，在任务和服务之间解耦，平滑间歇性重负载对系统的冲击。",
                        keyPoints: [
                            "缓冲作用：队列吸收突发请求峰值，消费者按自身能力从队列拉取处理，保护后端服务不被冲垮。",
                            "解耦优势：生产者和消费者独立扩展、独立部署，生产者无需等待消费者处理完成。",
                            "队列积压监控：需要监控队列深度和消费延迟，及时扩展消费者避免消息积压过久。",
                        ],
                        resources: [
                            { title: "Queue-Based Load Leveling - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling" },
                            { title: "Message Queue Patterns", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageChannel.html" },
                            { title: "AWS SQS Best Practices", url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-best-practices.html" },
                        ],
                    },
                    {
                        id: "w3-2",
                        title: "Competing Consumers 模式：并行消息处理",
                        detail: "学习如何启用多个并发消费者处理同一消息通道的消息，实现水平扩展和高可用。",
                        keyPoints: [
                            "水平扩展：增加消费者实例即可提高消息处理吞吐量，消费者之间自动负载均衡。",
                            "消息确认机制：消费者处理完毕后才确认消息，未确认的消息会重新分配给其他消费者。",
                            "顺序性挑战：多消费者并行处理时无法保证全局顺序，需要分区或 Session 机制实现部分有序。",
                        ],
                        resources: [
                            { title: "Competing Consumers Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/competing-consumers" },
                            { title: "Competing Consumers - EIP", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/CompetingConsumers.html" },
                            { title: "Kafka Consumer Groups", url: "https://kafka.apache.org/documentation/#intro_consumers" },
                        ],
                    },
                    {
                        id: "w3-3",
                        title: "Priority Queue 模式：优先级消息处理",
                        detail: "学习如何对服务请求进行优先级排序，确保高优先级请求比低优先级请求更快地被接收和处理。",
                        resources: [
                            { title: "Priority Queue Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/priority-queue" },
                            { title: "RabbitMQ Priority Queues", url: "https://www.rabbitmq.com/priority.html" },
                            { title: "Priority Queue Implementations", url: "https://www.baeldung.com/java-priority-blocking-queue" },
                        ],
                    },
                    {
                        id: "w3-4",
                        title: "Sequential Convoy 模式：有序消息处理",
                        detail: "学习如何按定义的顺序处理一组相关消息，同时不阻塞其他消息组的并行处理。",
                        resources: [
                            { title: "Sequential Convoy Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/sequential-convoy" },
                            { title: "Message Sequencing", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageSequence.html" },
                            { title: "Kafka Consumer Design", url: "https://docs.confluent.io/kafka/design/consumer-design.html" },
                        ],
                    },
                ],
            },
            {
                id: "w4",
                title: "第 4 周：发布订阅与消息优化",
                summary: "学习事件驱动架构和消息优化模式。",
                overview: "本周学习 Publisher/Subscriber 模式实现事件驱动架构，Claim Check 模式优化大消息传输，Messaging Bridge 模式集成不同消息系统。这些模式帮助构建更灵活、更高效的分布式系统。",
                keyPoints: [
                    "Publisher/Subscriber：通过事件广播实现一对多通信，支持松耦合的事件驱动架构。",
                    "Claim Check：将大消息拆分为引用和负载，避免消息总线过载。",
                    "Choreography：让各服务自主响应事件，实现去中心化的业务流程编排。",
                ],
                lessons: [
                    {
                        id: "w4-1",
                        title: "Publisher/Subscriber 模式：事件驱动通信",
                        detail: "学习发布订阅模式的原理，理解如何通过事件广播实现服务间的松耦合通信和事件驱动架构。",
                        resources: [
                            { title: "Publisher-Subscriber Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber" },
                            { title: "Event-Driven Architecture", url: "https://martinfowler.com/articles/201701-event-driven.html" },
                            { title: "Apache Kafka Pub/Sub", url: "https://kafka.apache.org/documentation/#intro_topics" },
                        ],
                    },
                    {
                        id: "w4-2",
                        title: "Claim Check 模式：大消息处理",
                        detail: "学习如何将大消息拆分为声明检查（引用）和负载，通过外部存储传输大数据，避免消息总线过载。",
                        resources: [
                            { title: "Claim-Check Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/claim-check" },
                            { title: "Claim Check - EIP", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/StoreInLibrary.html" },
                            { title: "Large Message Handling", url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-s3-messages.html" },
                        ],
                    },
                    {
                        id: "w4-3",
                        title: "Choreography 模式：去中心化编排",
                        detail: "学习让各服务自主决定业务操作的处理时机，而不依赖中央编排器，实现更松耦合的系统。",
                        resources: [
                            { title: "Choreography Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/choreography" },
                            { title: "Choreography vs Orchestration", url: "https://temporal.io/blog/to-choreograph-or-orchestrate-your-saga-that-is-the-question" },
                            { title: "Event-Driven Choreography", url: "https://microservices.io/patterns/data/saga.html#choreography" },
                        ],
                    },
                    {
                        id: "w4-4",
                        title: "Messaging Bridge 模式：系统集成",
                        detail: "学习如何构建中介以实现不兼容消息系统之间的通信，支持异构系统的集成。",
                        resources: [
                            { title: "Messaging Bridge Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/messaging-bridge" },
                            { title: "Messaging Bridge - EIP", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessagingBridge.html" },
                            { title: "Apache Camel EIPs", url: "https://camel.apache.org/components/4.14.x/eips/enterprise-integration-patterns.html" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase3",
        title: "第三阶段：数据管理模式",
        duration: "第 5-6 周",
        goal: "掌握云原生应用的数据管理模式，包括缓存、分片、CQRS 和事件溯源。",
        weeks: [
            {
                id: "w5",
                title: "第 5 周：缓存与数据分区",
                summary: "学习缓存策略和数据分区模式，优化数据访问性能。",
                overview: "数据访问性能是云应用的关键挑战。本周学习 Cache-Aside、Index Table、Sharding 等模式，理解如何通过缓存减少数据库负载，通过分片实现水平扩展。",
                keyPoints: [
                    "Cache-Aside：按需加载数据到缓存，是最常用的缓存模式。",
                    "Index Table：为查询频繁引用的字段创建索引，优化查询性能。",
                    "Sharding：将数据水平分区到多个数据库，实现大规模数据的水平扩展。",
                ],
                lessons: [
                    {
                        id: "w5-1",
                        title: "Cache-Aside 模式：按需缓存",
                        detail: "学习 Cache-Aside 模式的实现，理解缓存失效策略、缓存穿透、缓存雪崩等问题的解决方案。",
                        keyPoints: [
                            "读取流程：先查缓存，命中则返回；未命中则查数据库，写入缓存后返回，实现按需加载。",
                            "缓存穿透防护：对不存在的 Key 缓存空值或使用布隆过滤器，防止恶意请求绕过缓存直击数据库。",
                            "缓存雪崩预防：为缓存 Key 设置随机过期时间，避免大量 Key 同时失效导致数据库压力激增。",
                        ],
                        resources: [
                            { title: "Cache-Aside Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside" },
                            { title: "Caching Best Practices - AWS", url: "https://aws.amazon.com/caching/best-practices/" },
                            { title: "Redis Caching Strategies - AWS", url: "https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies-using-redis/caching-patterns.html" },
                        ],
                    },
                    {
                        id: "w5-2",
                        title: "Index Table 模式：优化查询性能",
                        detail: "学习如何在数据存储中为查询频繁引用的字段创建索引表，权衡读取优化和写入开销。",
                        resources: [
                            { title: "Index Table Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/index-table" },
                            { title: "Secondary Indexes in DynamoDB", url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html" },
                            { title: "Database Indexing Strategies", url: "https://use-the-index-luke.com/" },
                        ],
                    },
                    {
                        id: "w5-3",
                        title: "Sharding 模式：数据水平分区",
                        detail: "学习数据分片的策略（范围、哈希、目录），理解分片键的选择和跨分片查询的挑战。",
                        keyPoints: [
                            "分片策略：范围分片适合范围查询，哈希分片分布更均匀，目录分片最灵活但引入额外查找。",
                            "分片键选择：应确保数据均匀分布避免热点，同时支持最常见的查询模式减少跨分片查询。",
                            "跨分片难题：跨分片的 JOIN、事务和聚合查询代价高昂，设计时应尽量将相关数据放在同一分片。",
                        ],
                        resources: [
                            { title: "Sharding Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/sharding" },
                            { title: "Database Sharding Explained", url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding" },
                            { title: "MongoDB Sharding", url: "https://www.mongodb.com/docs/manual/sharding/" },
                        ],
                    },
                    {
                        id: "w5-4",
                        title: "Materialized View 模式：预计算查询结果",
                        detail: "学习如何生成预填充的视图以优化查询操作，特别适用于数据格式不适合查询需求的场景。",
                        resources: [
                            { title: "Materialized View Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/materialized-view" },
                            { title: "Materialized Views in PostgreSQL", url: "https://www.postgresql.org/docs/current/rules-materializedviews.html" },
                            { title: "CQRS and Materialized Views", url: "https://martinfowler.com/bliki/CQRS.html" },
                        ],
                    },
                ],
            },
            {
                id: "w6",
                title: "第 6 周：CQRS 与事件溯源",
                summary: "学习高级数据管理模式，分离读写模型，记录完整的状态变更历史。",
                overview: "CQRS 和 Event Sourcing 是构建复杂领域系统的强大模式。本周深入学习如何分离命令和查询模型，如何使用事件流记录状态变更，以及这两个模式如何结合使用。",
                keyPoints: [
                    "CQRS：将读取和写入操作分离为不同的模型，各自优化。",
                    "Event Sourcing：将状态变更记录为不可变事件序列，支持完整的审计追踪和时间旅行。",
                    "Saga 模式：通过一系列本地事务实现跨服务的数据一致性。",
                ],
                lessons: [
                    {
                        id: "w6-1",
                        title: "CQRS 模式：命令查询职责分离",
                        detail: "深入理解 CQRS 模式的原理，学会设计独立的读写模型，理解何时使用和何时避免这个模式。",
                        resources: [
                            { title: "CQRS Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs" },
                            { title: "CQRS - Martin Fowler", url: "https://martinfowler.com/bliki/CQRS.html" },
                            { title: "CQRS Journey - Microsoft", url: "https://learn.microsoft.com/en-us/previous-versions/msp-n-p/jj554200(v=pandp.10)" },
                        ],
                    },
                    {
                        id: "w6-2",
                        title: "Event Sourcing 模式：事件作为数据源",
                        detail: "学习事件溯源的核心思想，理解如何从事件流重建状态，以及与 CQRS 的天然结合。",
                        resources: [
                            { title: "Event Sourcing Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing" },
                            { title: "Event Sourcing - Martin Fowler", url: "https://martinfowler.com/eaaDev/EventSourcing.html" },
                            { title: "Event Store Database", url: "https://www.eventstore.com/event-sourcing" },
                        ],
                    },
                    {
                        id: "w6-3",
                        title: "Saga 模式：分布式事务管理",
                        detail: "学习 Saga 模式的两种实现（编排式和协同式），理解如何通过一系列本地事务实现跨服务的数据一致性。",
                        resources: [
                            { title: "Saga Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga" },
                            { title: "Saga Pattern - microservices.io", url: "https://microservices.io/patterns/data/saga.html" },
                            { title: "Implementing Sagas with Temporal", url: "https://docs.temporal.io/workflows" },
                        ],
                    },
                    {
                        id: "w6-4",
                        title: "Pipes and Filters 模式：数据处理流水线",
                        detail: "学习如何将复杂的数据处理任务分解为可重用的独立元素，支持灵活的数据处理流水线。",
                        resources: [
                            { title: "Pipes and Filters Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters" },
                            { title: "Pipes and Filters - EIP", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/PipesAndFilters.html" },
                            { title: "Apache Kafka Streams", url: "https://kafka.apache.org/documentation/streams/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase4",
        title: "第四阶段：网关与代理模式",
        duration: "第 7 周",
        goal: "掌握 API 网关、服务代理和边车模式，构建统一的服务入口和横切关注点。",
        weeks: [
            {
                id: "w7",
                title: "第 7 周：网关与代理模式",
                summary: "学习 API 网关、Ambassador、Sidecar 等代理模式。",
                overview: "网关和代理模式是微服务架构的关键组件。本周学习如何通过 Gateway 统一服务入口，通过 Ambassador 和 Sidecar 处理横切关注点，通过 BFF 为不同客户端提供定制化 API。",
                keyPoints: [
                    "Gateway 模式（Aggregation/Offloading/Routing）：统一服务入口，处理聚合、卸载和路由。",
                    "Ambassador 模式：创建辅助服务代表消费者服务发送网络请求。",
                    "Sidecar 模式：将组件部署到单独的进程或容器，处理横切关注点。",
                ],
                lessons: [
                    {
                        id: "w7-1",
                        title: "Gateway Aggregation 模式：请求聚合",
                        detail: "学习如何使用网关将多个后端请求聚合为单个请求，减少客户端和后端之间的往返次数。",
                        keyPoints: [
                            "减少往返：客户端发送一次请求，网关并行调用多个后端服务并聚合结果，降低网络延迟。",
                            "聚合策略：支持并行扇出、顺序依赖、部分失败降级等多种聚合策略，需权衡复杂度。",
                            "性能风险：聚合请求的延迟取决于最慢的后端服务，需设置合理的超时和降级机制。",
                        ],
                        resources: [
                            { title: "Gateway Aggregation Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway-aggregation" },
                            { title: "API Gateway Pattern - microservices.io", url: "https://microservices.io/patterns/apigateway.html" },
                            { title: "Apollo Federation", url: "https://www.apollographql.com/docs/federation/" },
                        ],
                    },
                    {
                        id: "w7-2",
                        title: "Gateway Offloading 与 Routing 模式",
                        detail: "学习如何将共享功能（SSL、认证）卸载到网关，以及如何使用单个端点将请求路由到多个服务。",
                        resources: [
                            { title: "Gateway Offloading Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway-offloading" },
                            { title: "Gateway Routing Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway-routing" },
                            { title: "Kong Gateway Documentation", url: "https://developer.konghq.com/gateway/" },
                        ],
                    },
                    {
                        id: "w7-3",
                        title: "Ambassador 模式：代理服务",
                        detail: "学习如何创建辅助服务（Ambassador）代表消费者服务发送网络请求，处理连接管理、监控、重试等。",
                        keyPoints: [
                            "代理职责：Ambassador 处理重试、熔断、TLS 终止、日志等横切关注点，主服务保持简洁。",
                            "部署方式：通常作为 Sidecar 与主服务部署在同一主机或 Pod，通过 localhost 通信。",
                            "Service Mesh 基础：Envoy 代理正是 Ambassador 模式的实现，是 Istio 等服务网格的核心组件。",
                        ],
                        resources: [
                            { title: "Ambassador Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/ambassador" },
                            { title: "Envoy Proxy", url: "https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy" },
                            { title: "Istio Architecture - Service Mesh", url: "https://istio.io/latest/docs/ops/deployment/architecture/" },
                        ],
                    },
                    {
                        id: "w7-4",
                        title: "Sidecar 与 Backends for Frontends 模式",
                        detail: "学习 Sidecar 模式处理横切关注点，以及 BFF 模式为不同客户端（Web/Mobile）提供定制化后端。",
                        resources: [
                            { title: "Sidecar Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar" },
                            { title: "Backends for Frontends - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends" },
                            { title: "BFF Pattern - Sam Newman", url: "https://samnewman.io/patterns/architectural/bff/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase5",
        title: "第五阶段：部署与迁移模式",
        duration: "第 8 周",
        goal: "掌握云应用的部署模式和遗留系统迁移策略。",
        weeks: [
            {
                id: "w8",
                title: "第 8 周：部署、配置与迁移模式",
                summary: "学习部署戳、外部配置、渐进式迁移等模式。",
                overview: "本周学习云应用的部署和运维模式。Deployment Stamps 实现全球部署，External Configuration Store 集中管理配置，Strangler Fig 和 Anti-Corruption Layer 支持渐进式迁移。",
                keyPoints: [
                    "Deployment Stamps：部署应用组件的多个独立副本，支持地理分布和租户隔离。",
                    "External Configuration Store：将配置信息集中存储，支持不同环境的配置管理。",
                    "Strangler Fig：逐步用新系统替换旧系统的功能，实现渐进式迁移。",
                ],
                lessons: [
                    {
                        id: "w8-1",
                        title: "Deployment Stamps 模式：多实例部署",
                        detail: "学习如何部署应用组件的多个独立副本（包括数据存储），支持地理分布、租户隔离和弹性扩展。",
                        resources: [
                            { title: "Deployment Stamps Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/deployment-stamp" },
                            { title: "Geode Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/geodes" },
                            { title: "Multi-Region Deployment", url: "https://docs.aws.amazon.com/whitepapers/latest/aws-multi-region-fundamentals/aws-multi-region-fundamentals.html" },
                        ],
                    },
                    {
                        id: "w8-2",
                        title: "External Configuration Store 模式",
                        detail: "学习如何将配置信息从应用部署包移出到集中位置，支持配置的动态更新和环境隔离。",
                        resources: [
                            { title: "External Configuration Store - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/external-configuration-store" },
                            { title: "Spring Cloud Config", url: "https://spring.io/projects/spring-cloud-config" },
                            { title: "HashiCorp Consul KV", url: "https://developer.hashicorp.com/consul/docs/dynamic-app-config/kv" },
                        ],
                    },
                    {
                        id: "w8-3",
                        title: "Strangler Fig 模式：渐进式迁移",
                        detail: "学习如何逐步用新应用替换遗留系统的功能，像绞杀榕一样逐步「绞杀」旧系统。",
                        resources: [
                            { title: "Strangler Fig Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig" },
                            { title: "Strangler Fig - Martin Fowler", url: "https://martinfowler.com/bliki/StranglerFigApplication.html" },
                            { title: "Legacy System Migration", url: "https://martinfowler.com/articles/break-monolith-into-microservices.html" },
                        ],
                    },
                    {
                        id: "w8-4",
                        title: "Anti-Corruption Layer 模式：隔离遗留系统",
                        detail: "学习如何在现代应用和遗留系统之间实现隔离层，防止遗留系统的设计污染新系统。",
                        resources: [
                            { title: "Anti-Corruption Layer Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer" },
                            { title: "Anti-Corruption Layer - DDD", url: "https://docs.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis" },
                            { title: "Adapter Pattern for Integration", url: "https://refactoring.guru/design-patterns/adapter" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase6",
        title: "第六阶段：安全与成本优化模式",
        duration: "第 9 周",
        goal: "掌握云应用的安全模式和成本优化策略。",
        weeks: [
            {
                id: "w9",
                title: "第 9 周：安全、身份与成本优化",
                summary: "学习联合身份、资源访问控制和静态内容托管等模式。",
                overview: "本周学习云应用的安全和成本优化模式。Federated Identity 委托身份验证，Valet Key 提供受限的直接资源访问，Static Content Hosting 将静态内容卸载到专用存储。",
                keyPoints: [
                    "Federated Identity：将身份验证委托给外部身份提供商，简化用户管理。",
                    "Valet Key：使用令牌为客户端提供对特定资源的有限直接访问。",
                    "Static Content Hosting：将静态内容部署到云存储服务，减少计算资源消耗。",
                ],
                lessons: [
                    {
                        id: "w9-1",
                        title: "Federated Identity 模式：委托身份验证",
                        detail: "学习如何将身份验证委托给外部身份提供商（如 Azure AD、Auth0），实现单点登录和简化用户管理。",
                        keyPoints: [
                            "委托认证：应用不直接管理用户凭据，而是将认证委托给受信任的 IdP（如 Azure AD、Okta）。",
                            "单点登录（SSO）：用户一次登录后可访问多个应用，减少密码疲劳和安全风险。",
                            "标准协议：基于 OAuth 2.0 / OpenID Connect / SAML 等标准协议，确保互操作性。",
                        ],
                        resources: [
                            { title: "Federated Identity Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/federated-identity" },
                            { title: "OAuth 2.0 and OpenID Connect", url: "https://oauth.net/2/" },
                            { title: "Auth0 Documentation", url: "https://auth0.com/docs/get-started" },
                        ],
                    },
                    {
                        id: "w9-2",
                        title: "Valet Key 模式：受限资源访问",
                        detail: "学习如何使用令牌或密钥为客户端提供对特定资源的有限直接访问，减少服务器负载。",
                        resources: [
                            { title: "Valet Key Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/valet-key" },
                            { title: "AWS S3 Presigned URLs", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html" },
                            { title: "Azure SAS Tokens", url: "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview" },
                        ],
                    },
                    {
                        id: "w9-3",
                        title: "Quarantine 模式：资源隔离检疫",
                        detail: "学习如何确保外部资产在被系统使用前满足团队定义的质量标准，防止恶意或不合规资源进入系统。",
                        keyPoints: [
                            "隔离验证：外部资产（容器镜像、依赖包）先进入隔离区，通过安全扫描和合规检查后才允许使用。",
                            "供应链安全：防止恶意依赖或受损镜像进入生产环境，是零信任安全策略的重要组成部分。",
                            "自动化门控：将安全扫描集成到 CI/CD 流水线，不合格资产自动拦截，减少人工审核成本。",
                        ],
                        resources: [
                            { title: "Quarantine Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/quarantine" },
                            { title: "Container Image Security", url: "https://docs.docker.com/scout/" },
                            { title: "Supply Chain Security", url: "https://slsa.dev/" },
                        ],
                    },
                    {
                        id: "w9-4",
                        title: "Static Content Hosting 与 Compute Resource Consolidation",
                        detail: "学习将静态内容部署到云存储服务以节省计算成本，以及如何整合计算资源提高效率。",
                        resources: [
                            { title: "Static Content Hosting - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/static-content-hosting" },
                            { title: "Compute Resource Consolidation - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/compute-resource-consolidation" },
                            { title: "AWS CloudFront + S3", url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStartedS3.html" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase7",
        title: "第七阶段：高级架构模式",
        duration: "第 10 周",
        goal: "掌握地理分布、异步通信和 AI 编排等高级架构模式。",
        weeks: [
            {
                id: "w10",
                title: "第 10 周：高级架构模式",
                summary: "学习地理分布、异步请求-回复等高级模式。",
                overview: "最后一周学习高级架构模式。Geode 模式实现跨地理区域的后端部署，Asynchronous Request-Reply 实现长时间操作的异步处理。这些模式帮助构建全球规模的高性能应用。",
                keyPoints: [
                    "Geode 模式：跨地理分布节点部署后端服务，优化全球用户的访问延迟。",
                    "Asynchronous Request-Reply：将后端处理与前端解耦，支持长时间运行的操作。",
                    "综合应用：结合多个模式构建复杂的云原生应用架构。",
                ],
                lessons: [
                    {
                        id: "w10-1",
                        title: "Geode 模式：全球地理分布",
                        detail: "学习如何跨地理区域部署后端服务，通过数据复制和智能路由优化全球用户的访问延迟。",
                        resources: [
                            { title: "Geode Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/geodes" },
                            { title: "Global Data Distribution - Cosmos DB", url: "https://learn.microsoft.com/en-us/azure/cosmos-db/distribute-data-globally" },
                            { title: "Multi-Region Architecture", url: "https://docs.aws.amazon.com/whitepapers/latest/aws-multi-region-fundamentals/aws-multi-region-fundamentals.html" },
                        ],
                    },
                    {
                        id: "w10-2",
                        title: "Asynchronous Request-Reply 模式",
                        detail: "学习如何将后端处理与前端解耦，通过轮询或回调获取长时间运行操作的结果。",
                        resources: [
                            { title: "Async Request-Reply Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/async-request-reply" },
                            { title: "Long Running Operations", url: "https://cloud.google.com/apis/design/standard_methods#long_running_operations" },
                            { title: "WebSocket for Real-time Updates", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
                        ],
                    },
                    {
                        id: "w10-3",
                        title: "模式组合：构建复杂系统",
                        detail: "学习如何组合多个云设计模式构建复杂的分布式系统，理解模式之间的关系和权衡。",
                        resources: [
                            { title: "Cloud Design Patterns Overview - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/" },
                            { title: "Microservices Pattern Language", url: "https://microservices.io/patterns/" },
                            { title: "Building Microservices - Sam Newman", url: "https://samnewman.io/books/building_microservices_2nd_edition/" },
                        ],
                    },
                    {
                        id: "w10-4",
                        title: "云架构最佳实践与回顾",
                        detail: "回顾所有学习的模式，理解它们在 Azure Well-Architected Framework 中的位置和应用场景。",
                        resources: [
                            { title: "Azure Well-Architected Framework", url: "https://learn.microsoft.com/en-us/azure/well-architected/" },
                            { title: "AWS Well-Architected Framework", url: "https://aws.amazon.com/architecture/well-architected/" },
                            { title: "Google Cloud Architecture Framework", url: "https://cloud.google.com/architecture/framework" },
                        ],
                    },
                ],
            },
        ],
    },
]

export const cloudDesignPatternsCards: KnowledgeCard[] = [
    {
        id: "card1",
        title: "弹性模式三剑客",
        summary: "Retry、Circuit Breaker、Bulkhead 是构建弹性云应用的三个核心模式，相互补充形成完整的故障处理策略。",
        points: [
            "Retry：处理临时故障，通过指数退避和抖动避免雪崩效应。",
            "Circuit Breaker：防止故障级联，在服务不健康时快速失败。",
            "Bulkhead：隔离故障影响范围，防止单点故障拖垮整个系统。",
        ],
        practice: "使用 Resilience4j 在一个服务中实现这三个模式，模拟下游服务故障观察其行为。",
    },
    {
        id: "card2",
        title: "消息队列的核心价值",
        summary: "消息队列是云原生架构的基石，提供服务解耦、负载均衡、弹性扩展和可靠传输。",
        points: [
            "解耦：生产者和消费者不需要同时在线，不需要知道彼此的存在。",
            "削峰填谷：Queue-Based Load Leveling 平滑负载峰值，保护后端服务。",
            "并行处理：Competing Consumers 支持消费者水平扩展，提高吞吐量。",
        ],
        practice: "搭建一个基于 RabbitMQ 或 Kafka 的消息系统，实现 Competing Consumers 模式。",
    },
    {
        id: "card3",
        title: "CQRS 与 Event Sourcing",
        summary: "CQRS 分离读写模型，Event Sourcing 将状态记录为事件序列，两者天然结合适合复杂领域。",
        points: [
            "CQRS：Command（写）和 Query（读）使用不同的模型，各自优化性能。",
            "Event Sourcing：状态 = 初始状态 + 所有事件，支持时间旅行和完整审计。",
            "适用场景：复杂领域、高并发读写分离、需要审计追踪的系统。",
        ],
        practice: "为一个银行账户实现 Event Sourcing，记录存款、取款事件，从事件流重建余额。",
    },
    {
        id: "card4",
        title: "API Gateway 的核心职责",
        summary: "API Gateway 是微服务的统一入口，承担路由、认证、限流等横切关注点。",
        points: [
            "Gateway Aggregation：聚合多个后端请求，减少客户端往返。",
            "Gateway Offloading：将 SSL、认证等共享功能卸载到网关。",
            "Gateway Routing：单个端点路由到多个后端服务。",
        ],
        practice: "使用 Kong 或 AWS API Gateway 搭建一个网关，配置路由、认证和限流。",
    },
    {
        id: "card5",
        title: "Sidecar 与 Ambassador 模式",
        summary: "Sidecar 和 Ambassador 是处理横切关注点的两种代理模式，是 Service Mesh 的基础。",
        points: [
            "Sidecar：与主应用部署在同一 Pod/VM，处理日志、监控、安全等。",
            "Ambassador：代表主应用发送请求，处理连接管理、重试、监控。",
            "Service Mesh：Istio/Linkerd 将 Sidecar 模式推广到整个集群。",
        ],
        practice: "在 Kubernetes 中部署一个带有 Envoy Sidecar 的应用，观察其代理行为。",
    },
    {
        id: "card6",
        title: "Strangler Fig 渐进式迁移",
        summary: "Strangler Fig 模式像绞杀榕一样逐步用新系统替换旧系统，是最安全的遗留系统迁移策略。",
        points: [
            "渐进式替换：一次迁移一个功能，持续交付价值，降低风险。",
            "流量切换：通过路由或代理逐步将流量从旧系统切换到新系统。",
            "Anti-Corruption Layer：在新旧系统之间建立隔离层，防止设计污染。",
        ],
        practice: "设计一个将单体应用迁移到微服务的 Strangler Fig 策略，识别首批迁移的功能。",
    },
    {
        id: "card7",
        title: "Valet Key 安全访问",
        summary: "Valet Key 模式使用令牌为客户端提供对资源的有限直接访问，减少服务器负载。",
        points: [
            "直接访问：客户端直接访问存储（如 S3），绕过应用服务器。",
            "有限权限：令牌只授予特定资源的特定操作权限，有过期时间。",
            "典型实现：AWS S3 Presigned URLs、Azure SAS Tokens。",
        ],
        practice: "实现一个文件上传功能，使用 S3 Presigned URL 让客户端直接上传到 S3。",
    },
    {
        id: "card8",
        title: "Deployment Stamps 多实例部署",
        summary: "Deployment Stamps 模式部署应用的多个独立副本，支持地理分布、租户隔离和弹性扩展。",
        points: [
            "独立副本：每个 Stamp 包含完整的应用和数据存储，相互独立。",
            "地理分布：不同区域的 Stamp 服务当地用户，降低延迟。",
            "租户隔离：每个租户或租户组使用独立的 Stamp，实现数据隔离。",
        ],
        practice: "设计一个多租户 SaaS 应用的 Deployment Stamps 架构，支持租户隔离和地理分布。",
    },
    {
        id: "card9",
        title: "模式分类：Well-Architected Framework",
        summary: "Azure 云设计模式按 Well-Architected Framework 的五大支柱分类：可靠性、安全性、成本、运营、性能。",
        points: [
            "可靠性：Retry、Circuit Breaker、Bulkhead、Health Check 等。",
            "安全性：Federated Identity、Valet Key、Quarantine 等。",
            "性能效率：Cache-Aside、CQRS、Sharding、Queue-Based Load Leveling 等。",
        ],
        practice: "评估你当前的系统，识别每个支柱下可以应用的云设计模式。",
    },
    {
        id: "card10",
        title: "模式组合的艺术",
        summary: "云设计模式很少单独使用，理解模式之间的关系和组合方式是架构设计的关键。",
        points: [
            "弹性组合：Retry + Circuit Breaker + Bulkhead 形成完整的故障处理策略。",
            "网关组合：Gateway Routing + Gateway Offloading + Gateway Aggregation 构成完整 API 网关。",
            "数据模式组合：CQRS + Event Sourcing + Saga 处理复杂领域的数据管理。",
        ],
        practice: "为一个电商订单系统设计架构，识别需要使用的模式组合及其交互方式。",
    },
]

export const cloudDesignPatternsExamQuestions: QuizQuestion[] = [
    {
        id: "q1",
        question: "Retry 模式中，为什么需要使用指数退避（Exponential Backoff）？",
        options: ["为了简化代码实现", "避免重试风暴导致服务过载", "减少内存使用", "提高重试成功率"],
        answer: 1,
        rationale: "指数退避通过逐渐增加重试间隔，避免大量客户端同时重试导致的「重试风暴」，给服务恢复的时间。",
    },
    {
        id: "q2",
        question: "Circuit Breaker 处于 Half-Open 状态时会发生什么？",
        options: ["所有请求都被拒绝", "所有请求都正常转发", "允许少量请求测试服务是否恢复", "请求被排队等待"],
        answer: 2,
        rationale: "Half-Open 状态允许少量探测请求通过，如果成功则转为 Closed，如果失败则回到 Open。",
    },
    {
        id: "q3",
        question: "Bulkhead 模式的名称来源于什么？",
        options: ["一种设计模式书籍", "船舶的水密隔舱", "电路板的隔离设计", "数据库的分区技术"],
        answer: 1,
        rationale: "Bulkhead（舱壁）来源于船舶设计，水密隔舱确保一个舱室进水不会导致整艘船沉没。",
    },
    {
        id: "q4",
        question: "Queue-Based Load Leveling 模式的主要作用是什么？",
        options: ["提高消息处理速度", "平滑间歇性重负载对服务的冲击", "减少消息存储空间", "加密消息传输"],
        answer: 1,
        rationale: "该模式使用队列作为缓冲区，在任务和服务之间解耦，平滑负载峰值。",
    },
    {
        id: "q5",
        question: "Competing Consumers 模式中，如何保证消息只被处理一次？",
        options: ["使用 FIFO 队列", "消息确认机制（Acknowledgment）", "禁用并行消费", "使用数据库锁"],
        answer: 1,
        rationale: "通过消息确认机制，消费者处理完成后才确认消息，未确认的消息会被重新投递给其他消费者。",
    },
    {
        id: "q6",
        question: "Claim Check 模式解决什么问题？",
        options: ["消息加密", "消息路由", "大消息传输导致消息总线过载", "消息顺序"],
        answer: 2,
        rationale: "Claim Check 将大消息的负载存储到外部存储，只通过消息总线传递引用（声明检查），避免消息总线过载。",
    },
    {
        id: "q7",
        question: "CQRS 模式将什么分离？",
        options: ["前端和后端", "数据库和缓存", "命令（写入）和查询（读取）操作", "同步和异步处理"],
        answer: 2,
        rationale: "CQRS（Command Query Responsibility Segregation）将数据的读取操作和写入操作分离为不同的模型。",
    },
    {
        id: "q8",
        question: "Event Sourcing 模式的核心思想是什么？",
        options: ["使用事件触发器", "将状态变更记录为不可变事件序列", "实时事件处理", "事件驱动通信"],
        answer: 1,
        rationale: "Event Sourcing 将所有状态变更记录为事件，当前状态 = 初始状态 + 所有事件的回放。",
    },
    {
        id: "q9",
        question: "以下哪个不是 API Gateway 的典型职责？",
        options: ["请求路由", "认证授权", "业务逻辑处理", "限流熔断"],
        answer: 2,
        rationale: "API Gateway 应聚焦横切关注点（路由、认证、限流），复杂的业务逻辑应留在后端服务中。",
    },
    {
        id: "q10",
        question: "Sidecar 模式中，Sidecar 容器与主应用容器的关系是？",
        options: ["部署在不同的节点", "部署在同一个 Pod 中，共享网络和存储", "通过消息队列通信", "使用 RPC 远程调用"],
        answer: 1,
        rationale: "Sidecar 与主应用部署在同一 Pod 中，共享网络命名空间和存储卷，可以通过 localhost 通信。",
    },
    {
        id: "q11",
        question: "Strangler Fig 模式的名称来源于什么？",
        options: ["一种软件架构书籍", "绞杀榕（一种植物）", "一种重构技术", "一位计算机科学家"],
        answer: 1,
        rationale: "Strangler Fig 来源于绞杀榕，这种植物会逐渐包裹宿主树，最终取代它。比喻新系统逐步替换旧系统。",
    },
    {
        id: "q12",
        question: "Anti-Corruption Layer 模式的作用是什么？",
        options: ["防止 SQL 注入", "隔离新旧系统，防止设计污染", "数据加密", "防止 DDoS 攻击"],
        answer: 1,
        rationale: "Anti-Corruption Layer 在新系统和遗留系统之间建立隔离层，通过适配器翻译数据和调用，防止遗留设计影响新系统。",
    },
    {
        id: "q13",
        question: "Valet Key 模式的典型实现是什么？",
        options: ["OAuth 令牌", "AWS S3 Presigned URLs", "数据库连接池", "API Key"],
        answer: 1,
        rationale: "Valet Key 的典型实现包括 AWS S3 Presigned URLs 和 Azure SAS Tokens，允许客户端直接访问存储资源。",
    },
    {
        id: "q14",
        question: "Deployment Stamps 模式的主要用途不包括？",
        options: ["地理分布部署", "租户隔离", "代码版本管理", "弹性扩展"],
        answer: 2,
        rationale: "Deployment Stamps 用于地理分布、租户隔离和弹性扩展，代码版本管理是独立的问题。",
    },
    {
        id: "q15",
        question: "Cache-Aside 模式的缓存更新策略是？",
        options: ["写入时更新缓存", "读取时按需加载到缓存", "定时刷新缓存", "写入时同时更新数据库和缓存"],
        answer: 1,
        rationale: "Cache-Aside 模式在读取时检查缓存，缓存未命中则从数据库加载并放入缓存。",
    },
    {
        id: "q16",
        question: "Sharding 模式中，选择分片键（Shard Key）最重要的考虑因素是？",
        options: ["键的长度", "数据分布的均匀性和查询模式", "键的类型", "键的创建顺序"],
        answer: 1,
        rationale: "分片键的选择应确保数据均匀分布（避免热点），并支持常见的查询模式（避免跨分片查询）。",
    },
    {
        id: "q17",
        question: "Publisher/Subscriber 模式与点对点消息的主要区别是？",
        options: ["消息格式不同", "一条消息可以被多个订阅者接收", "消息存储方式不同", "消息优先级不同"],
        answer: 1,
        rationale: "Pub/Sub 模式支持一对多通信，一条消息可以被所有订阅该主题的消费者接收。",
    },
    {
        id: "q18",
        question: "Health Endpoint Monitoring 中，浅层检查（Shallow Check）和深层检查（Deep Check）的区别是？",
        options: ["检查频率不同", "浅层只检查服务本身，深层还检查依赖项", "检查协议不同", "权限要求不同"],
        answer: 1,
        rationale: "浅层检查只验证服务本身是否响应，深层检查还会验证数据库、缓存等依赖项的健康状态。",
    },
    {
        id: "q19",
        question: "Saga 模式相比传统分布式事务（2PC）的主要优势是？",
        options: ["更强的一致性保证", "更好的性能和可用性", "更简单的实现", "更少的代码量"],
        answer: 1,
        rationale: "Saga 通过最终一致性和补偿事务实现，避免了 2PC 的长锁和协调开销，性能和可用性更好。",
    },
    {
        id: "q20",
        question: "Compensating Transaction 与数据库回滚的主要区别是？",
        options: ["补偿事务是新的前向操作，数据库回滚是撤销操作", "没有区别，只是叫法不同", "补偿事务更快", "数据库回滚更可靠"],
        answer: 0,
        rationale: "补偿事务是语义上的「撤销」，是新的前向操作（如退款），不同于数据库回滚的物理撤销。",
    },
    {
        id: "q21",
        question: "Geode 模式的主要目的是什么？",
        options: ["数据库分片", "跨地理区域部署以降低延迟", "负载均衡", "故障转移"],
        answer: 1,
        rationale: "Geode 模式将后端服务部署到多个地理区域，通过智能路由将请求发送到最近的节点，降低延迟。",
    },
    {
        id: "q22",
        question: "External Configuration Store 模式解决什么问题？",
        options: ["配置加密", "配置集中管理和动态更新", "配置版本控制", "配置格式转换"],
        answer: 1,
        rationale: "该模式将配置从应用部署包移出到集中位置，支持不同环境的配置管理和无需重启的动态更新。",
    },
    {
        id: "q23",
        question: "Backends for Frontends (BFF) 模式的主要目的是？",
        options: ["提高后端性能", "为不同客户端（Web/Mobile）提供定制化 API", "简化后端架构", "统一前端框架"],
        answer: 1,
        rationale: "BFF 为 Web、Mobile、IoT 等不同客户端创建专属的后端服务，优化各端的数据获取和交互。",
    },
    {
        id: "q24",
        question: "Throttling 模式与 Rate Limiting 模式的关系是？",
        options: ["完全相同的模式", "Throttling 更关注资源消耗控制，Rate Limiting 更关注请求数量限制", "互斥的模式", "Throttling 是 Rate Limiting 的子集"],
        answer: 1,
        rationale: "两者相关但侧重不同：Rate Limiting 限制请求速率，Throttling 更广泛地控制资源消耗（CPU、内存、带宽等）。",
    },
    {
        id: "q25",
        question: "在 Azure Well-Architected Framework 中，以下哪个不是五大支柱之一？",
        options: ["可靠性", "安全性", "敏捷性", "成本优化"],
        answer: 2,
        rationale: "五大支柱是：可靠性（Reliability）、安全性（Security）、成本优化（Cost Optimization）、卓越运营（Operational Excellence）、性能效率（Performance Efficiency）。",
    },
]

export const cloudDesignPatternsRoadmap: RoadmapDefinition = {
    id: "cloud-design-patterns",
    label: "云设计模式",
    title: "云设计模式",
    durationLabel: "10 周完整学习路线",
    description:
        "基于 Microsoft Azure 架构模式，系统学习云原生应用的设计模式。从弹性模式到消息通信，从数据管理到网关代理，从部署迁移到安全优化，构建完整的云架构知识体系。",
    heroBadge: "10 周 · 40 主题 · 面向云架构师",
    stages: cloudDesignPatternsStages,
    knowledgeCards: cloudDesignPatternsCards,
    examQuestions: cloudDesignPatternsExamQuestions,
    suggestion: (percent: number) => {
        if (percent < 25) {
            return "建议先完成弹性模式的学习，这是云原生应用的基石。"
        }
        if (percent < 50) {
            return "继续学习消息和数据管理模式，理解异步通信和数据一致性的处理。"
        }
        if (percent < 75) {
            return "深入网关和部署模式，理解如何构建统一的服务入口和渐进式迁移。"
        }
        return "通过安全和高级模式巩固所学，准备在实际项目中应用云设计模式。"
    },
    resourceGuide: {
        environment: "建议在 Azure、AWS 或 GCP 上搭建实验环境，实践各个模式的实现。",
        fallbackKeyPoints: [
            "模式不是银弹：每个模式都有其适用场景和权衡，理解何时使用和何时避免。",
            "模式组合使用：云设计模式很少单独使用，理解模式之间的关系和组合方式。",
            "Well-Architected Framework：将模式与架构支柱（可靠性、安全性、成本、运营、性能）对应。",
        ],
        handsOnSteps: [
            "阅读 Azure 架构文档中的模式描述，理解问题、解决方案和注意事项。",
            "在云平台上实现该模式，观察其实际行为和性能影响。",
            "思考该模式在你实际项目中的适用性和变体。",
        ],
        selfChecks: [
            "能否用自己的话解释这个模式解决什么问题？",
            "这个模式的主要权衡是什么？在什么情况下不适用？",
            "这个模式与哪些其他模式经常一起使用？",
        ],
        extensions: [
            "阅读《Cloud Native Patterns》等专业书籍，获取更深入的讲解。",
            "学习 AWS、GCP 的类似模式实现，理解云厂商的差异。",
            "分析知名公司（Netflix、Uber、Amazon）的云架构实践案例。",
        ],
        lessonQuizAdvice: "错题通常反映对模式权衡的理解不足，建议回到 Azure 文档重新阅读相关模式。",
    },
}
