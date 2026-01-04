import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const microservicesPatternsStages: Stage[] = [
    {
        id: "phase1",
        title: "第一阶段：架构基础与服务拆分",
        duration: "第 1-3 周",
        goal: "理解微服务架构的本质，掌握从单体到微服务的拆分策略与重构模式。",
        weeks: [
            {
                id: "w1",
                title: "第 1 周：单体架构 vs 微服务架构",
                summary: "理解两种架构风格的本质差异，建立微服务架构的设计直觉。",
                overview: "微服务不是银弹，而是权衡的艺术。本周从单体架构的优劣势出发，理解微服务架构的「暗能量」（分解力量）与「暗物质」（聚合力量），建立架构决策的判断框架。",
                keyPoints: [
                    "单体架构：简单部署、ACID 事务、低延迟通信，但随规模增长面临开发效率和扩展性瓶颈。",
                    "微服务架构：独立部署、团队自治、技术异构，但引入分布式系统的复杂性。",
                    "架构选择的核心：团队规模、业务复杂度、扩展需求决定架构风格，而非技术时髦。",
                ],
                lessons: [
                    {
                        id: "w1-1",
                        title: "单体架构：优势、局限与适用场景",
                        detail: "深入理解单体架构的特点，认识其在小团队和早期产品中的价值，以及随规模增长面临的挑战。",
                        resources: [
                            { title: "Monolithic Architecture Pattern", url: "https://microservices.io/patterns/monolithic.html" },
                            { title: "MonolithFirst - Martin Fowler", url: "https://martinfowler.com/bliki/MonolithFirst.html" },
                            { title: "The Majestic Monolith", url: "https://signalvnoise.com/svn3/the-majestic-monolith/" },
                        ],
                    },
                    {
                        id: "w1-2",
                        title: "微服务架构：定义、原则与核心特征",
                        detail: "掌握微服务架构的定义、核心原则（独立部署、松耦合、业务能力导向），理解 Chris Richardson 的模式语言框架。",
                        resources: [
                            { title: "Microservice Architecture Pattern", url: "https://microservices.io/patterns/microservices.html" },
                            { title: "Microservices - Martin Fowler", url: "https://martinfowler.com/articles/microservices.html" },
                            { title: "Pattern: A pattern language for microservices", url: "https://microservices.io/patterns/" },
                        ],
                    },
                    {
                        id: "w1-3",
                        title: "暗能量与暗物质：架构决策的力量模型",
                        detail: "理解推动服务分解的「暗能量」力量（简单性、团队自治、快速部署）与推动服务聚合的「暗物质」力量（简单交互、高效通信、事务一致性）。",
                        resources: [
                            { title: "Dark Energy and Dark Matter Forces", url: "https://microservices.io/post/microservices/2021/11/30/dark-matter-dark-energy.html" },
                            { title: "Microservices Trade-Offs", url: "https://martinfowler.com/articles/microservice-trade-offs.html" },
                            { title: "When to Use Microservices", url: "https://www.youtube.com/watch?v=GBTdnfD6s5Q" },
                        ],
                    },
                    {
                        id: "w1-4",
                        title: "架构决策框架：何时选择微服务",
                        detail: "建立架构决策的判断框架，理解团队规模、业务复杂度、部署频率等因素如何影响架构选择。",
                        resources: [
                            { title: "Microservices Prerequisites", url: "https://martinfowler.com/bliki/MicroservicePrerequisites.html" },
                            { title: "Don't start with a monolith", url: "https://martinfowler.com/articles/dont-start-monolith.html" },
                            { title: "Microservices Patterns Book", url: "https://microservices.io/book" },
                        ],
                    },
                ],
            },
            {
                id: "w2",
                title: "第 2 周：服务边界与领域驱动设计",
                summary: "掌握服务拆分的核心方法论，学会用 DDD 划分服务边界。",
                overview: "服务如何拆分是微服务架构最关键的决策。本周从领域驱动设计（DDD）出发，掌握按业务能力和子域拆分服务的方法，理解限界上下文与服务的映射关系。",
                keyPoints: [
                    "按业务能力分解：识别组织的核心业务能力，每个能力对应一个服务。",
                    "按子域分解：使用 DDD 的战略设计，识别核心域、支撑域、通用域。",
                    "限界上下文：DDD 的核心概念，定义模型的边界，是服务划分的天然边界。",
                ],
                lessons: [
                    {
                        id: "w2-1",
                        title: "按业务能力分解：识别组织的核心能力",
                        detail: "理解业务能力的定义，学会通过分析组织结构和业务流程识别核心业务能力，并映射到服务边界。",
                        resources: [
                            { title: "Decompose by Business Capability", url: "https://microservices.io/patterns/decomposition/decompose-by-business-capability.html" },
                            { title: "Identifying Microservice Boundaries", url: "https://learn.microsoft.com/en-us/azure/architecture/microservices/model/microservice-boundaries" },
                            { title: "Business Capability", url: "https://www.leanix.net/en/wiki/ea/business-capability" },
                        ],
                    },
                    {
                        id: "w2-2",
                        title: "按子域分解：DDD 战略设计实践",
                        detail: "掌握 DDD 子域的分类（核心域、支撑域、通用域），学会通过事件风暴等技术识别子域边界。",
                        resources: [
                            { title: "Decompose by Subdomain", url: "https://microservices.io/patterns/decomposition/decompose-by-subdomain.html" },
                            { title: "Domain-Driven Design Quickly", url: "https://www.infoq.com/minibooks/domain-driven-design-quickly/" },
                            { title: "Event Storming", url: "https://www.eventstorming.com/" },
                        ],
                    },
                    {
                        id: "w2-3",
                        title: "限界上下文：服务边界的 DDD 视角",
                        detail: "深入理解限界上下文的概念，学会识别上下文边界、定义上下文映射，理解上下文与微服务的关系。",
                        resources: [
                            { title: "BoundedContext - Martin Fowler", url: "https://martinfowler.com/bliki/BoundedContext.html" },
                            { title: "Context Mapping", url: "https://www.infoq.com/articles/ddd-contextmapping/" },
                            { title: "Strategic Domain-Driven Design", url: "https://vaadin.com/blog/ddd-part-1-strategic-domain-driven-design" },
                        ],
                    },
                    {
                        id: "w2-4",
                        title: "自包含服务与团队模式",
                        detail: "理解自包含服务（Self-contained Service）模式和 Service per Team 模式，学会根据团队结构设计服务边界。",
                        resources: [
                            { title: "Self-contained Service", url: "https://microservices.io/patterns/decomposition/self-contained-service.html" },
                            { title: "Service per Team", url: "https://microservices.io/patterns/decomposition/service-per-team.html" },
                            { title: "Team Topologies", url: "https://teamtopologies.com/key-concepts" },
                        ],
                    },
                ],
            },
            {
                id: "w3",
                title: "第 3 周：从单体到微服务的重构策略",
                summary: "掌握渐进式迁移的模式，学会安全地将单体系统演进为微服务架构。",
                overview: "一次性重写是高风险的赌博，渐进式迁移才是明智之选。本周学习 Strangler Fig 模式和防腐层模式，掌握安全、可控的单体拆分策略。",
                keyPoints: [
                    "Strangler Fig 模式：像绞杀榕一样，逐步用新服务替换旧功能，最终「绞杀」单体。",
                    "防腐层模式：在新旧系统之间建立隔离层，防止遗留系统的设计污染新服务。",
                    "渐进式迁移原则：每次迁移一小部分，持续交付价值，降低风险。",
                ],
                lessons: [
                    {
                        id: "w3-1",
                        title: "Strangler Fig 模式：渐进式替换单体",
                        detail: "深入理解 Strangler Fig 模式的原理，学会识别适合提取的功能模块，规划迁移路径。",
                        resources: [
                            { title: "Strangler Fig Application", url: "https://microservices.io/patterns/refactoring/strangler-application.html" },
                            { title: "StranglerFigApplication - Fowler", url: "https://martinfowler.com/bliki/StranglerFigApplication.html" },
                            { title: "Strangler Fig Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig" },
                        ],
                    },
                    {
                        id: "w3-2",
                        title: "防腐层模式：隔离新旧系统",
                        detail: "理解防腐层（Anti-corruption Layer）的作用，学会设计适配器和翻译层，保护新服务免受遗留系统影响。",
                        resources: [
                            { title: "Anti-corruption Layer", url: "https://microservices.io/patterns/refactoring/anti-corruption-layer.html" },
                            { title: "Anti-corruption Layer - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer" },
                            { title: "Legacy System Integration", url: "https://martinfowler.com/articles/break-monolith-into-microservices.html" },
                        ],
                    },
                    {
                        id: "w3-3",
                        title: "数据迁移策略：拆分共享数据库",
                        detail: "学习将单体数据库拆分为多个服务数据库的策略，理解数据同步、双写、CDC 等技术方案。",
                        resources: [
                            { title: "Refactoring Databases", url: "https://martinfowler.com/books/refactoringDatabases.html" },
                            { title: "Database per Service", url: "https://microservices.io/patterns/data/database-per-service.html" },
                            { title: "Monolith to Microservices", url: "https://samnewman.io/books/monolith-to-microservices/" },
                        ],
                    },
                    {
                        id: "w3-4",
                        title: "迁移实践：案例分析与常见陷阱",
                        detail: "通过真实案例学习迁移的最佳实践，了解常见的陷阱和失败模式。",
                        resources: [
                            { title: "Breaking the Monolith", url: "https://martinfowler.com/articles/break-monolith-into-microservices.html" },
                            { title: "Refactoring to Microservices", url: "https://microservices.io/refactoring/" },
                            { title: "Microservices Adoption Antipatterns", url: "https://microservices.io/microservices/antipatterns/-/the/series/2019/06/18/microservices-adoption-antipatterns.html" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase2",
        title: "第二阶段：数据管理与事务模式",
        duration: "第 4-6 周",
        goal: "掌握微服务架构下的数据管理模式，理解分布式事务的实现方案。",
        weeks: [
            {
                id: "w4",
                title: "第 4 周：数据库模式与数据一致性",
                summary: "理解微服务数据管理的核心挑战，掌握 Database per Service 模式。",
                overview: "微服务架构的核心原则之一是数据自治——每个服务拥有自己的数据库。本周深入理解这一模式的优势、挑战，以及与共享数据库模式的权衡。",
                keyPoints: [
                    "Database per Service：服务独占数据库，实现松耦合，但跨服务查询和事务变得复杂。",
                    "Shared Database：多服务共享数据库，简化查询但增加耦合，适合特定场景。",
                    "数据一致性挑战：没有分布式事务，如何保证跨服务的数据一致性？",
                ],
                lessons: [
                    {
                        id: "w4-1",
                        title: "Database per Service：数据自治的核心模式",
                        detail: "深入理解 Database per Service 模式的原理、优势（松耦合、独立扩展、技术选型自由）和挑战（跨服务查询、事务）。",
                        resources: [
                            { title: "Database per Service", url: "https://microservices.io/patterns/data/database-per-service.html" },
                            { title: "Data Management Patterns", url: "https://docs.microsoft.com/en-us/azure/architecture/microservices/design/data-considerations" },
                            { title: "Microservices Database Management", url: "https://www.ibm.com/cloud/learn/microservices-database" },
                        ],
                    },
                    {
                        id: "w4-2",
                        title: "Shared Database：何时共享是合理的",
                        detail: "理解 Shared Database 模式的适用场景（遗留系统迁移、强一致性需求），以及如何避免过度耦合。",
                        resources: [
                            { title: "Shared Database", url: "https://microservices.io/patterns/data/shared-database.html" },
                            { title: "Shared Database Pattern - AWS", url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-data-persistence/shared-database.html" },
                            { title: "When to Share a Database", url: "https://particular.net/blog/when-to-share-data-between-microservices" },
                        ],
                    },
                    {
                        id: "w4-3",
                        title: "API Composition：跨服务数据聚合",
                        detail: "学习 API Composition 模式，理解如何在 API 层聚合多个服务的数据，以及其性能和一致性影响。",
                        resources: [
                            { title: "API Composition", url: "https://microservices.io/patterns/data/api-composition.html" },
                            { title: "API Gateway Pattern", url: "https://microservices.io/patterns/apigateway.html" },
                            { title: "Aggregator Pattern", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/Aggregator.html" },
                        ],
                    },
                    {
                        id: "w4-4",
                        title: "Command-side Replica：优化读取性能",
                        detail: "理解 Command-side Replica 模式，学会通过数据复制优化跨服务查询的性能。",
                        resources: [
                            { title: "Command-side Replica", url: "https://microservices.io/patterns/data/command-side-replica.html" },
                            { title: "CQRS Pattern", url: "https://microservices.io/patterns/data/cqrs.html" },
                            { title: "Materialized View Pattern", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/materialized-view" },
                        ],
                    },
                ],
            },
            {
                id: "w5",
                title: "第 5 周：Saga 模式与分布式事务",
                summary: "掌握 Saga 模式的两种实现方式，学会设计补偿事务。",
                overview: "微服务架构下，传统的 ACID 事务不再适用。Saga 模式通过一系列本地事务和补偿操作，实现跨服务的最终一致性。本周深入学习 Saga 的设计与实现。",
                keyPoints: [
                    "Saga 本质：将分布式事务分解为一系列本地事务，每个事务有对应的补偿操作。",
                    "编排式 Saga：中央协调者控制流程，适合复杂业务流程。",
                    "协同式 Saga：服务通过事件协作，去中心化但追踪困难。",
                ],
                lessons: [
                    {
                        id: "w5-1",
                        title: "Saga 模式原理：从 2PC 到最终一致性",
                        detail: "理解为什么微服务不适合 2PC，学习 Saga 模式的核心思想和设计原则。",
                        resources: [
                            { title: "Saga Pattern", url: "https://microservices.io/patterns/data/saga.html" },
                            { title: "Saga Pattern - Azure", url: "https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga" },
                            { title: "Original Saga Paper", url: "https://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf" },
                        ],
                    },
                    {
                        id: "w5-2",
                        title: "编排式 Saga：中央协调的实现",
                        detail: "学习使用中央编排器（Orchestrator）协调 Saga 流程，理解其优势（清晰的流程控制）和劣势（单点）。",
                        resources: [
                            { title: "Orchestration-based Saga", url: "https://microservices.io/patterns/data/saga.html#orchestration" },
                            { title: "Saga Orchestration Pattern", url: "https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga" },
                            { title: "Temporal for Saga", url: "https://docs.temporal.io/workflows" },
                        ],
                    },
                    {
                        id: "w5-3",
                        title: "协同式 Saga：事件驱动的实现",
                        detail: "学习通过事件（Domain Events）实现服务间协作的 Saga，理解其去中心化的优势和追踪的挑战。",
                        resources: [
                            { title: "Choreography-based Saga", url: "https://microservices.io/patterns/data/saga.html#choreography" },
                            { title: "Saga Choreography - AWS", url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/saga-choreography.html" },
                            { title: "Choreography vs Orchestration", url: "https://temporal.io/blog/to-choreograph-or-orchestrate-your-saga-that-is-the-question" },
                        ],
                    },
                    {
                        id: "w5-4",
                        title: "补偿事务设计：处理失败与回滚",
                        detail: "掌握补偿事务的设计原则，学会处理并发异常、幂等性保证、语义锁等高级话题。",
                        resources: [
                            { title: "Compensating Transaction", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction" },
                            { title: "Saga Pattern Countermeasures", url: "https://microservices.io/patterns/data/saga.html" },
                            { title: "Designing Compensations", url: "https://particular.net/blog/sagas-and-compensating-logic" },
                        ],
                    },
                ],
            },
            {
                id: "w6",
                title: "第 6 周：CQRS、事件溯源与事务性消息",
                summary: "掌握高级数据管理模式，学会保证消息与数据库的一致性。",
                overview: "CQRS 分离读写模型，事件溯源将状态变更记录为事件序列，Transactional Outbox 解决消息发送的一致性问题。本周学习这些互补的高级模式。",
                keyPoints: [
                    "CQRS：命令查询职责分离，读写使用不同的模型，优化各自的性能。",
                    "Event Sourcing：将状态变更记录为不可变事件，实现完整的审计追踪。",
                    "Transactional Outbox：将消息与业务数据在同一事务中写入，保证一致性。",
                ],
                lessons: [
                    {
                        id: "w6-1",
                        title: "CQRS：命令查询职责分离",
                        detail: "深入理解 CQRS 模式的原理，学会设计独立的读写模型，理解其与微服务架构的结合。",
                        resources: [
                            { title: "CQRS Pattern", url: "https://microservices.io/patterns/data/cqrs.html" },
                            { title: "CQRS - Martin Fowler", url: "https://martinfowler.com/bliki/CQRS.html" },
                            { title: "CQRS Journey", url: "https://docs.microsoft.com/en-us/previous-versions/msp-n-p/jj554200(v=pandp.10)" },
                        ],
                    },
                    {
                        id: "w6-2",
                        title: "Event Sourcing：事件作为数据源",
                        detail: "学习事件溯源的核心思想，理解如何从事件流重建状态，以及与 CQRS 的天然结合。",
                        resources: [
                            { title: "Event Sourcing Pattern", url: "https://microservices.io/patterns/data/event-sourcing.html" },
                            { title: "Event Sourcing - Fowler", url: "https://martinfowler.com/eaaDev/EventSourcing.html" },
                            { title: "Event Store", url: "https://www.eventstore.com/event-sourcing" },
                        ],
                    },
                    {
                        id: "w6-3",
                        title: "Transactional Outbox：保证消息一致性",
                        detail: "理解 Outbox 模式如何解决数据库更新与消息发送的一致性问题，学习实现方案。",
                        resources: [
                            { title: "Transactional Outbox", url: "https://microservices.io/patterns/data/transactional-outbox.html" },
                            { title: "Outbox Pattern - Debezium", url: "https://debezium.io/blog/2019/02/19/reliable-microservices-data-exchange-with-the-outbox-pattern/" },
                            { title: "Polling Publisher", url: "https://microservices.io/patterns/data/polling-publisher.html" },
                        ],
                    },
                    {
                        id: "w6-4",
                        title: "Transaction Log Tailing：CDC 实现消息发布",
                        detail: "学习通过数据库事务日志（如 MySQL Binlog）捕获变更并发布消息的方案，理解 Debezium 等工具的应用。",
                        resources: [
                            { title: "Transaction Log Tailing", url: "https://microservices.io/patterns/data/transaction-log-tailing.html" },
                            { title: "Debezium CDC", url: "https://debezium.io/documentation/reference/stable/tutorial.html" },
                            { title: "Change Data Capture", url: "https://www.confluent.io/learn/change-data-capture/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase3",
        title: "第三阶段：通信与 API 模式",
        duration: "第 7-9 周",
        goal: "掌握微服务间的通信模式，设计高效的 API 网关与服务发现机制。",
        weeks: [
            {
                id: "w7",
                title: "第 7 周：服务通信风格",
                summary: "理解同步与异步通信的权衡，掌握 RPC、消息传递等通信模式。",
                overview: "微服务间的通信是架构设计的核心挑战之一。本周从同步 RPC 到异步消息，理解不同通信风格的适用场景和设计模式。",
                keyPoints: [
                    "同步通信：RPC/REST/gRPC，简单直接但增加耦合和延迟敏感性。",
                    "异步消息：通过消息队列解耦，提高弹性但增加复杂性。",
                    "领域特定协议：针对特定场景优化的通信协议。",
                ],
                lessons: [
                    {
                        id: "w7-1",
                        title: "Remote Procedure Invocation：同步调用模式",
                        detail: "理解 RPC 风格的服务调用，比较 REST、gRPC、GraphQL 等技术的适用场景。",
                        resources: [
                            { title: "Remote Procedure Invocation", url: "https://microservices.io/patterns/communication-style/rpi.html" },
                            { title: "REST vs gRPC vs GraphQL", url: "https://konghq.com/blog/engineering/rest-vs-grpc-vs-graphql" },
                            { title: "gRPC Documentation", url: "https://grpc.io/docs/what-is-grpc/introduction/" },
                        ],
                    },
                    {
                        id: "w7-2",
                        title: "Messaging：异步消息传递模式",
                        detail: "学习基于消息的异步通信，理解点对点和发布订阅模式，掌握消息队列的选型。",
                        resources: [
                            { title: "Messaging Pattern", url: "https://microservices.io/patterns/communication-style/messaging.html" },
                            { title: "Enterprise Integration Patterns", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/" },
                            { title: "Kafka vs RabbitMQ", url: "https://aws.amazon.com/compare/the-difference-between-rabbitmq-and-kafka/" },
                        ],
                    },
                    {
                        id: "w7-3",
                        title: "Domain Event：领域事件驱动通信",
                        detail: "理解领域事件的定义，学会设计和发布领域事件，实现服务间的松耦合协作。",
                        resources: [
                            { title: "Domain Event Pattern", url: "https://microservices.io/patterns/data/domain-event.html" },
                            { title: "Domain Events - Fowler", url: "https://martinfowler.com/eaaDev/DomainEvent.html" },
                            { title: "Event-Driven Architecture", url: "https://martinfowler.com/articles/201701-event-driven.html" },
                        ],
                    },
                    {
                        id: "w7-4",
                        title: "Idempotent Consumer：幂等消费者模式",
                        detail: "学习如何设计幂等的消息消费者，处理消息重复投递，保证 Exactly-Once 语义。",
                        resources: [
                            { title: "Idempotent Consumer", url: "https://microservices.io/patterns/communication-style/idempotent-consumer.html" },
                            { title: "Idempotency Patterns", url: "https://particular.net/blog/what-does-idempotent-mean" },
                            { title: "Designing Idempotent APIs", url: "https://docs.stripe.com/api/idempotent_requests" },
                        ],
                    },
                ],
            },
            {
                id: "w8",
                title: "第 8 周：API 网关与 BFF 模式",
                summary: "掌握 API 网关的核心职责，学会为不同客户端设计 BFF。",
                overview: "API 网关是微服务架构的统一入口，承担路由、认证、限流等横切关注点。Backend for Frontend (BFF) 则为不同客户端提供定制化的 API。本周深入这两个核心模式。",
                keyPoints: [
                    "API Gateway：统一入口，处理路由、认证、限流、协议转换等横切关注点。",
                    "BFF 模式：为 Web、Mobile、第三方等不同客户端提供定制化的后端。",
                    "网关选型：Kong、APISIX、AWS API Gateway 等方案的比较。",
                ],
                lessons: [
                    {
                        id: "w8-1",
                        title: "API Gateway：微服务的统一入口",
                        detail: "深入理解 API Gateway 的核心职责，学习路由、负载均衡、认证、限流等功能的实现。",
                        resources: [
                            { title: "API Gateway Pattern", url: "https://microservices.io/patterns/apigateway.html" },
                            { title: "Kong Gateway", url: "https://developer.konghq.com/gateway/" },
                            { title: "AWS API Gateway", url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html" },
                        ],
                    },
                    {
                        id: "w8-2",
                        title: "Backend for Frontend：客户端定制化 API",
                        detail: "学习 BFF 模式的设计原则，理解如何为 Web、Mobile、IoT 等不同客户端设计专属后端。",
                        resources: [
                            { title: "Backends for Frontends", url: "https://microservices.io/patterns/apigateway.html#backends-for-frontends" },
                            { title: "BFF Pattern - Sam Newman", url: "https://samnewman.io/patterns/architectural/bff/" },
                            { title: "BFF at SoundCloud", url: "https://www.thoughtworks.com/insights/blog/bff-soundcloud" },
                        ],
                    },
                    {
                        id: "w8-3",
                        title: "网关安全：认证、授权与限流",
                        detail: "学习在 API Gateway 层实现安全控制，包括 OAuth2/JWT 认证、RBAC 授权、速率限制。",
                        resources: [
                            { title: "Access Token Pattern", url: "https://microservices.io/patterns/security/access-token.html" },
                            { title: "API Gateway Security", url: "https://cheatsheetseries.owasp.org/cheatsheets/Microservices_Security_Cheat_Sheet.html" },
                            { title: "Rate Limiting Patterns", url: "https://blog.bytebytego.com/p/rate-limiting-fundamentals" },
                        ],
                    },
                    {
                        id: "w8-4",
                        title: "网关选型与实践：Kong、APISIX、Envoy",
                        detail: "比较主流 API Gateway 方案的特点，学习实际部署和配置的最佳实践。",
                        resources: [
                            { title: "Kong vs APISIX", url: "https://apisix.apache.org/docs/apisix/getting-started/" },
                            { title: "Envoy Proxy", url: "https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy" },
                            { title: "API Gateway Comparison", url: "https://www.nginx.com/blog/choosing-api-gateway-solution/" },
                        ],
                    },
                ],
            },
            {
                id: "w9",
                title: "第 9 周：服务发现与注册",
                summary: "掌握动态环境下的服务发现机制，理解客户端与服务端发现的权衡。",
                overview: "在容器化和云原生环境中，服务实例动态变化，服务发现是必不可少的基础设施。本周学习 Service Registry、客户端发现、服务端发现等核心模式。",
                keyPoints: [
                    "Service Registry：存储服务实例信息的中心化注册表。",
                    "客户端发现：客户端直接查询注册表，决定路由，如 Netflix Eureka + Ribbon。",
                    "服务端发现：通过负载均衡器或 DNS 路由，客户端无感知，如 Kubernetes Service。",
                ],
                lessons: [
                    {
                        id: "w9-1",
                        title: "Service Registry：服务注册中心",
                        detail: "理解 Service Registry 的核心功能，学习 Consul、Eureka、etcd、Zookeeper 等实现的比较。",
                        resources: [
                            { title: "Service Registry Pattern", url: "https://microservices.io/patterns/service-registry.html" },
                            { title: "Consul Service Discovery", url: "https://developer.hashicorp.com/consul/docs/concepts/service-discovery" },
                            { title: "Netflix Eureka", url: "https://github.com/Netflix/eureka/wiki" },
                        ],
                    },
                    {
                        id: "w9-2",
                        title: "Client-side Discovery：客户端发现模式",
                        detail: "学习客户端发现的实现原理，理解其优势（减少网络跳数）和劣势（客户端复杂度）。",
                        resources: [
                            { title: "Client-side Discovery", url: "https://microservices.io/patterns/client-side-discovery.html" },
                            { title: "Spring Cloud LoadBalancer", url: "https://spring.io/guides/gs/spring-cloud-loadbalancer/" },
                            { title: "gRPC Client-side LB", url: "https://grpc.io/blog/grpc-load-balancing/" },
                        ],
                    },
                    {
                        id: "w9-3",
                        title: "Server-side Discovery：服务端发现模式",
                        detail: "学习通过负载均衡器或服务网格实现服务端发现，理解 Kubernetes Service 的工作原理。",
                        resources: [
                            { title: "Server-side Discovery", url: "https://microservices.io/patterns/server-side-discovery.html" },
                            { title: "Kubernetes Services", url: "https://kubernetes.io/docs/concepts/services-networking/service/" },
                            { title: "AWS ELB Service Discovery", url: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html" },
                        ],
                    },
                    {
                        id: "w9-4",
                        title: "服务注册：Self Registration vs 3rd Party",
                        detail: "比较自注册和第三方注册两种模式，理解各自的适用场景和实现方式。",
                        resources: [
                            { title: "Self Registration", url: "https://microservices.io/patterns/self-registration.html" },
                            { title: "3rd Party Registration", url: "https://microservices.io/patterns/3rd-party-registration.html" },
                            { title: "Service Mesh Registration", url: "https://istio.io/latest/docs/concepts/traffic-management/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase4",
        title: "第四阶段：可靠性、测试与部署",
        duration: "第 10-12 周",
        goal: "掌握微服务的可靠性模式、测试策略和部署最佳实践。",
        weeks: [
            {
                id: "w10",
                title: "第 10 周：可靠性与弹性模式",
                summary: "学习 Circuit Breaker 等可靠性模式，构建具有弹性的微服务系统。",
                overview: "分布式系统中，服务故障是常态而非例外。本周学习 Circuit Breaker、Bulkhead、Retry 等弹性模式，构建能够优雅处理故障的系统。",
                keyPoints: [
                    "Circuit Breaker：熔断器模式，防止故障级联，快速失败。",
                    "Retry with Backoff：带退避的重试，处理临时故障。",
                    "Bulkhead：舱壁模式，隔离故障影响范围。",
                ],
                lessons: [
                    {
                        id: "w10-1",
                        title: "Circuit Breaker：熔断器模式",
                        detail: "深入理解熔断器的三态（Closed/Open/Half-Open）转换，学习配置阈值和超时的最佳实践。",
                        resources: [
                            { title: "Circuit Breaker Pattern", url: "https://microservices.io/patterns/reliability/circuit-breaker.html" },
                            { title: "Circuit Breaker - Fowler", url: "https://martinfowler.com/bliki/CircuitBreaker.html" },
                            { title: "Resilience4j Circuit Breaker", url: "https://resilience4j.readme.io/docs/circuitbreaker" },
                        ],
                    },
                    {
                        id: "w10-2",
                        title: "Retry 与 Timeout：处理临时故障",
                        detail: "学习重试策略的设计（指数退避、抖动），理解超时配置的原则和级联超时问题。",
                        resources: [
                            { title: "Retry Pattern - Azure", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/retry" },
                            { title: "Exponential Backoff", url: "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/" },
                            { title: "Timeout Best Practices", url: "https://particular.net/blog/timeout-patterns" },
                        ],
                    },
                    {
                        id: "w10-3",
                        title: "Bulkhead：故障隔离模式",
                        detail: "理解舱壁模式如何隔离故障影响，学习线程池隔离和信号量隔离的实现。",
                        resources: [
                            { title: "Bulkhead Pattern - Azure", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/bulkhead" },
                            { title: "Resilience4j Bulkhead", url: "https://resilience4j.readme.io/docs/bulkhead" },
                            { title: "Isolation Strategies", url: "https://blog.bytebytego.com/p/a-crash-course-in-caching-part-1" },
                        ],
                    },
                    {
                        id: "w10-4",
                        title: "综合实践：Resilience4j 与 Hystrix",
                        detail: "学习使用 Resilience4j 实现弹性模式，理解已废弃的 Hystrix 的设计思想。",
                        resources: [
                            { title: "Resilience4j Documentation", url: "https://resilience4j.readme.io/docs/getting-started" },
                            { title: "Hystrix Wiki", url: "https://github.com/Netflix/Hystrix/wiki" },
                            { title: "Spring Cloud Circuit Breaker", url: "https://spring.io/projects/spring-cloud-circuitbreaker" },
                        ],
                    },
                ],
            },
            {
                id: "w11",
                title: "第 11 周：微服务测试策略",
                summary: "掌握微服务的测试金字塔，学习契约测试和组件测试。",
                overview: "微服务架构增加了测试的复杂性——如何测试服务间的交互？本周学习 Consumer-driven Contract Test、Service Component Test 等微服务特有的测试模式。",
                keyPoints: [
                    "测试金字塔：单元测试 → 集成测试 → 端到端测试，底层测试越多越好。",
                    "契约测试：验证服务间的 API 契约，避免集成时的意外破坏。",
                    "组件测试：隔离测试单个服务，模拟外部依赖。",
                ],
                lessons: [
                    {
                        id: "w11-1",
                        title: "微服务测试金字塔",
                        detail: "理解测试金字塔在微服务架构中的应用，学会平衡测试覆盖率和测试成本。",
                        resources: [
                            { title: "Testing Strategies in Microservices", url: "https://martinfowler.com/articles/microservice-testing/" },
                            { title: "The Practical Test Pyramid", url: "https://martinfowler.com/articles/practical-test-pyramid.html" },
                            { title: "Microservices Testing Patterns", url: "https://microservices.io/testing/index.html" },
                        ],
                    },
                    {
                        id: "w11-2",
                        title: "Consumer-driven Contract Test：契约测试",
                        detail: "学习消费者驱动的契约测试，使用 Pact 等工具验证服务间的 API 兼容性。",
                        resources: [
                            { title: "Consumer-driven Contract Test", url: "https://microservices.io/patterns/testing/consumer-driven-contract-test.html" },
                            { title: "Pact Documentation", url: "https://docs.pact.io/" },
                            { title: "Contract Testing - Fowler", url: "https://martinfowler.com/bliki/ContractTest.html" },
                        ],
                    },
                    {
                        id: "w11-3",
                        title: "Service Component Test：组件测试",
                        detail: "学习组件测试的实现，使用 Testcontainers 等工具隔离测试单个服务。",
                        resources: [
                            { title: "Service Component Test", url: "https://microservices.io/patterns/testing/service-component-test.html" },
                            { title: "Testcontainers", url: "https://www.testcontainers.org/" },
                            { title: "Component Testing Guide", url: "https://martinfowler.com/articles/microservice-testing/#testing-component-introduction" },
                        ],
                    },
                    {
                        id: "w11-4",
                        title: "Consumer-side Contract Test：消费者端测试",
                        detail: "学习消费者端契约测试的实现，验证服务客户端的正确性。",
                        resources: [
                            { title: "Consumer-side Contract Test", url: "https://microservices.io/patterns/testing/consumer-side-contract-test.html" },
                            { title: "WireMock", url: "https://wiremock.org/docs/getting-started/" },
                            { title: "Service Virtualization", url: "https://martinfowler.com/bliki/SelfInitializingFake.html" },
                        ],
                    },
                ],
            },
            {
                id: "w12",
                title: "第 12 周：部署模式与可观测性",
                summary: "掌握容器化部署模式，学习微服务的可观测性最佳实践。",
                overview: "部署和运维是微服务成功的关键。本周学习容器化部署、服务网格、以及日志聚合、分布式追踪等可观测性模式。",
                keyPoints: [
                    "容器化部署：Docker + Kubernetes 是微服务部署的事实标准。",
                    "Microservice Chassis：提供横切关注点的基础框架。",
                    "可观测性：日志聚合、分布式追踪、健康检查是运维的三大支柱。",
                ],
                lessons: [
                    {
                        id: "w12-1",
                        title: "容器化部署：Docker 与 Kubernetes",
                        detail: "学习 Service instance per Container 和 Serverless 部署模式，理解 Kubernetes 在微服务部署中的作用。",
                        resources: [
                            { title: "Service per Container", url: "https://microservices.io/patterns/deployment/service-per-container.html" },
                            { title: "Serverless Deployment", url: "https://microservices.io/patterns/deployment/serverless-deployment.html" },
                            { title: "Kubernetes Microservices", url: "https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/" },
                        ],
                    },
                    {
                        id: "w12-2",
                        title: "Microservice Chassis：基础框架模式",
                        detail: "理解 Microservice Chassis 如何提供横切关注点（配置、日志、监控），学习 Spring Boot/Cloud 等框架。",
                        resources: [
                            { title: "Microservice Chassis", url: "https://microservices.io/patterns/microservice-chassis.html" },
                            { title: "Externalized Configuration", url: "https://microservices.io/patterns/externalized-configuration.html" },
                            { title: "Spring Cloud", url: "https://spring.io/projects/spring-cloud" },
                        ],
                    },
                    {
                        id: "w12-3",
                        title: "可观测性：日志、追踪与指标",
                        detail: "学习微服务的可观测性三支柱：集中式日志（ELK）、分布式追踪（Jaeger/Zipkin）、应用指标（Prometheus）。",
                        resources: [
                            { title: "Log Aggregation", url: "https://microservices.io/patterns/observability/application-logging.html" },
                            { title: "Distributed Tracing", url: "https://microservices.io/patterns/observability/distributed-tracing.html" },
                            { title: "Application Metrics", url: "https://microservices.io/patterns/observability/application-metrics.html" },
                        ],
                    },
                    {
                        id: "w12-4",
                        title: "健康检查与异常追踪",
                        detail: "学习 Health Check API 的设计，以及异常追踪、审计日志等运维必备模式。",
                        resources: [
                            { title: "Health Check API", url: "https://microservices.io/patterns/observability/health-check-api.html" },
                            { title: "Exception Tracking", url: "https://microservices.io/patterns/observability/exception-tracking.html" },
                            { title: "Audit Logging", url: "https://microservices.io/patterns/observability/audit-logging.html" },
                        ],
                    },
                ],
            },
        ],
    },
]

export const microservicesPatternsCards: KnowledgeCard[] = [
    {
        id: "card1",
        title: "微服务架构的本质",
        summary: "微服务是一种将应用构建为一组松耦合、独立部署服务的架构风格，每个服务围绕业务能力组织。",
        points: [
            "核心原则：独立部署、去中心化治理、围绕业务能力组织。",
            "暗能量（分解力量）：简单性、团队自治、快速部署、技术异构、按特性隔离。",
            "暗物质（聚合力量）：简单交互、高效通信、ACID 事务、避免耦合。",
        ],
        practice: "分析你当前的系统，识别哪些「暗能量」和「暗物质」力量在起作用，判断是否适合微服务架构。",
    },
    {
        id: "card2",
        title: "服务拆分的方法论",
        summary: "服务边界的划分是微服务架构最关键的决策，DDD 的限界上下文是划分边界的最佳指导。",
        points: [
            "按业务能力分解：识别组织的核心业务能力，每个能力对应一个服务。",
            "按子域分解：使用 DDD 识别核心域、支撑域、通用域，映射到服务。",
            "限界上下文：定义模型的边界，是服务划分的天然边界。",
        ],
        practice: "使用事件风暴（Event Storming）技术，识别你系统中的领域事件、聚合和限界上下文。",
    },
    {
        id: "card3",
        title: "Saga 模式的两种实现",
        summary: "Saga 将分布式事务分解为一系列本地事务，每个事务有对应的补偿操作，实现最终一致性。",
        points: [
            "编排式（Orchestration）：中央协调者控制流程，适合复杂业务，但有单点风险。",
            "协同式（Choreography）：服务通过事件协作，去中心化但难以追踪和调试。",
            "补偿事务设计：需要处理幂等性、并发异常、语义锁等挑战。",
        ],
        practice: "设计一个电商订单流程的 Saga，包含库存扣减、订单创建、支付扣款，并设计每步的补偿逻辑。",
    },
    {
        id: "card4",
        title: "API Gateway 的核心职责",
        summary: "API Gateway 是微服务的统一入口，承担路由、认证、限流等横切关注点，简化客户端交互。",
        points: [
            "核心功能：请求路由、负载均衡、认证授权、限流熔断、协议转换。",
            "BFF 模式：为不同客户端（Web/Mobile/IoT）提供定制化的后端 API。",
            "避免过度膨胀：Gateway 应聚焦横切关注点，业务逻辑应留在服务中。",
        ],
        practice: "使用 Kong 或 APISIX 搭建一个 API Gateway，配置路由、JWT 认证和速率限制。",
    },
    {
        id: "card5",
        title: "服务发现的两种模式",
        summary: "在动态环境中，服务实例地址不断变化，服务发现是定位服务实例的关键机制。",
        points: [
            "客户端发现：客户端查询 Service Registry，自行决定路由，减少网络跳数。",
            "服务端发现：通过 Load Balancer 或 DNS 路由，客户端无感知，简化客户端。",
            "Kubernetes 默认使用服务端发现，通过 Service 和 DNS 实现。",
        ],
        practice: "比较 Consul（客户端发现）和 Kubernetes Service（服务端发现）的实现差异。",
    },
    {
        id: "card6",
        title: "Circuit Breaker 状态机",
        summary: "熔断器通过三态转换（Closed/Open/Half-Open）防止故障级联，实现快速失败。",
        points: [
            "Closed：正常状态，请求正常转发，监控失败率。",
            "Open：熔断状态，请求直接失败，防止故障扩散，等待超时。",
            "Half-Open：探测状态，允许少量请求测试服务是否恢复。",
        ],
        practice: "使用 Resilience4j 实现一个熔断器，配置失败率阈值和等待时间，观察状态转换。",
    },
    {
        id: "card7",
        title: "CQRS 与 Event Sourcing",
        summary: "CQRS 分离读写模型优化各自性能，Event Sourcing 将状态变更记录为事件序列。",
        points: [
            "CQRS：Command（写）和 Query（读）使用不同的模型和存储，独立优化。",
            "Event Sourcing：状态 = 初始状态 + 所有事件，实现完整审计追踪。",
            "两者天然结合：事件作为写入，投影（Projection）作为读取模型。",
        ],
        practice: "为一个银行账户实现 Event Sourcing，记录存款、取款事件，并从事件流重建余额。",
    },
    {
        id: "card8",
        title: "Transactional Outbox 模式",
        summary: "Outbox 模式解决数据库更新与消息发送的一致性问题，是微服务数据一致性的关键模式。",
        points: [
            "问题：数据库事务提交后消息发送失败，或消息发送成功但事务回滚，导致不一致。",
            "解决方案：将消息写入本地 Outbox 表，与业务数据在同一事务中提交。",
            "两种发布方式：Polling Publisher（轮询）或 Transaction Log Tailing（CDC）。",
        ],
        practice: "使用 Debezium 实现 Transaction Log Tailing，将数据库变更实时发布到 Kafka。",
    },
    {
        id: "card9",
        title: "微服务测试金字塔",
        summary: "微服务测试需要平衡测试覆盖率和测试成本，契约测试是验证服务间交互的关键。",
        points: [
            "单元测试：测试单个组件，数量最多，速度最快。",
            "组件测试：隔离测试单个服务，模拟外部依赖。",
            "契约测试：验证服务间的 API 契约，避免集成时的意外破坏。",
        ],
        practice: "使用 Pact 为你的服务实现消费者驱动的契约测试，验证 API 兼容性。",
    },
    {
        id: "card10",
        title: "可观测性三支柱",
        summary: "日志、追踪、指标是微服务可观测性的三大支柱，共同支撑故障排查和性能优化。",
        points: [
            "日志聚合：集中收集和分析所有服务的日志，使用 Correlation ID 关联请求。",
            "分布式追踪：记录请求在服务间的完整链路，定位性能瓶颈和故障点。",
            "应用指标：收集 RED（Rate/Error/Duration）指标，支撑告警和容量规划。",
        ],
        practice: "为你的微服务添加 OpenTelemetry 追踪，在 Jaeger 中查看请求的完整链路。",
    },
]

export const microservicesPatternsExamQuestions: QuizQuestion[] = [
    {
        id: "q1",
        question: "微服务架构中，推动服务分解的力量被称为什么？",
        options: ["暗物质（Dark Matter）", "暗能量（Dark Energy）", "引力", "离心力"],
        answer: 1,
        rationale: "Chris Richardson 将推动服务分解的力量（如团队自治、独立部署）称为「暗能量」，将推动服务聚合的力量称为「暗物质」。",
    },
    {
        id: "q2",
        question: "以下哪个不是按业务能力分解服务的优势？",
        options: ["稳定的服务边界", "与组织结构对齐", "自动保证数据一致性", "清晰的业务所有权"],
        answer: 2,
        rationale: "按业务能力分解提供稳定边界和清晰所有权，但数据一致性需要额外的模式（如 Saga）来保证。",
    },
    {
        id: "q3",
        question: "Strangler Fig 模式的核心思想是？",
        options: ["一次性重写整个系统", "渐进式用新服务替换旧功能", "保持单体架构不变", "同时运行两套系统"],
        answer: 1,
        rationale: "Strangler Fig 模式像绞杀榕一样，逐步用新服务替换旧功能，最终「绞杀」单体，降低迁移风险。",
    },
    {
        id: "q4",
        question: "Database per Service 模式的主要挑战是？",
        options: ["数据库性能下降", "跨服务查询和事务变得复杂", "无法使用关系型数据库", "必须使用相同的数据库技术"],
        answer: 1,
        rationale: "Database per Service 实现了数据自治和松耦合，但跨服务的查询和事务需要额外的模式（如 API Composition、Saga）。",
    },
    {
        id: "q5",
        question: "Saga 模式中，编排式（Orchestration）的主要优势是？",
        options: ["完全去中心化", "清晰的流程控制和容易调试", "没有单点故障", "自动实现 ACID 事务"],
        answer: 1,
        rationale: "编排式 Saga 由中央协调者控制流程，流程清晰易于理解和调试，但协调者可能成为单点。",
    },
    {
        id: "q6",
        question: "以下哪个场景最适合使用 Event Sourcing？",
        options: ["简单的 CRUD 应用", "需要完整审计追踪的金融系统", "静态内容网站", "批量数据处理"],
        answer: 1,
        rationale: "Event Sourcing 将所有状态变更记录为事件，特别适合需要完整审计追踪的场景，如金融系统。",
    },
    {
        id: "q7",
        question: "Transactional Outbox 模式解决什么问题？",
        options: ["服务发现", "负载均衡", "数据库更新与消息发送的一致性", "API 版本管理"],
        answer: 2,
        rationale: "Transactional Outbox 将消息写入本地表，与业务数据在同一事务中提交，解决两者的一致性问题。",
    },
    {
        id: "q8",
        question: "API Gateway 不应该承担以下哪个职责？",
        options: ["请求路由", "认证授权", "复杂的业务逻辑", "限流熔断"],
        answer: 2,
        rationale: "API Gateway 应聚焦横切关注点（路由、认证、限流），复杂的业务逻辑应留在后端服务中。",
    },
    {
        id: "q9",
        question: "BFF（Backend for Frontend）模式的目的是？",
        options: ["替代 API Gateway", "为不同客户端提供定制化的后端 API", "实现服务发现", "数据库分片"],
        answer: 1,
        rationale: "BFF 为 Web、Mobile、IoT 等不同客户端提供定制化的后端 API，优化各端的数据获取。",
    },
    {
        id: "q10",
        question: "客户端发现模式相比服务端发现的优势是？",
        options: ["客户端实现更简单", "减少网络跳数", "不需要 Service Registry", "自动负载均衡"],
        answer: 1,
        rationale: "客户端发现直接查询 Registry 并选择实例，减少了通过 Load Balancer 的额外网络跳数。",
    },
    {
        id: "q11",
        question: "Circuit Breaker 处于 Open 状态时会发生什么？",
        options: ["请求正常转发", "请求排队等待", "请求直接失败", "请求重试多次"],
        answer: 2,
        rationale: "Open 状态下，熔断器直接拒绝请求（快速失败），防止故障扩散，等待超时后进入 Half-Open。",
    },
    {
        id: "q12",
        question: "以下哪个不是 Circuit Breaker 的状态？",
        options: ["Closed", "Open", "Half-Open", "Pending"],
        answer: 3,
        rationale: "Circuit Breaker 有三个状态：Closed（正常）、Open（熔断）、Half-Open（探测）。",
    },
    {
        id: "q13",
        question: "Consumer-driven Contract Test 的主要目的是？",
        options: ["测试服务性能", "验证服务间的 API 契约兼容性", "测试数据库连接", "测试 UI 界面"],
        answer: 1,
        rationale: "消费者驱动的契约测试验证服务提供者是否满足消费者的期望，避免 API 变更导致集成失败。",
    },
    {
        id: "q14",
        question: "Microservice Chassis 模式提供什么？",
        options: ["数据库连接池", "横切关注点的基础框架（配置、日志、监控）", "消息队列", "前端框架"],
        answer: 1,
        rationale: "Microservice Chassis 提供配置管理、日志、健康检查、指标等横切关注点的基础框架。",
    },
    {
        id: "q15",
        question: "以下哪个是服务端发现模式的例子？",
        options: ["Netflix Ribbon", "Kubernetes Service", "gRPC 客户端负载均衡", "Spring Cloud LoadBalancer"],
        answer: 1,
        rationale: "Kubernetes Service 通过 DNS 和 kube-proxy 实现服务端发现，客户端无感知。",
    },
    {
        id: "q16",
        question: "CQRS 模式将什么分离？",
        options: ["前端和后端", "命令（写）和查询（读）的模型", "数据库和缓存", "同步和异步操作"],
        answer: 1,
        rationale: "CQRS 将 Command（写操作）和 Query（读操作）使用不同的模型，可以独立优化。",
    },
    {
        id: "q17",
        question: "防腐层（Anti-corruption Layer）的作用是？",
        options: ["防止 SQL 注入", "隔离新旧系统，防止遗留系统设计污染新服务", "数据加密", "防止 DDoS 攻击"],
        answer: 1,
        rationale: "防腐层在新旧系统之间建立隔离层，通过适配器和翻译层保护新服务不受遗留系统影响。",
    },
    {
        id: "q18",
        question: "Transaction Log Tailing 使用什么技术实现？",
        options: ["消息队列轮询", "数据库触发器", "CDC（Change Data Capture）", "定时任务"],
        answer: 2,
        rationale: "Transaction Log Tailing 通过 CDC 工具（如 Debezium）读取数据库事务日志，捕获变更并发布消息。",
    },
    {
        id: "q19",
        question: "以下哪个不是微服务可观测性的三支柱之一？",
        options: ["日志聚合", "分布式追踪", "应用指标", "代码覆盖率"],
        answer: 3,
        rationale: "可观测性三支柱是日志、追踪、指标。代码覆盖率是测试相关指标，不属于可观测性范畴。",
    },
    {
        id: "q20",
        question: "Idempotent Consumer 模式解决什么问题？",
        options: ["消息顺序", "消息重复投递", "消息加密", "消息压缩"],
        answer: 1,
        rationale: "幂等消费者模式确保消息被重复处理时产生相同的结果，解决 At-Least-Once 投递的重复问题。",
    },
    {
        id: "q21",
        question: "Self Registration 模式中，谁负责向 Service Registry 注册？",
        options: ["API Gateway", "服务实例自己", "部署平台", "监控系统"],
        answer: 1,
        rationale: "Self Registration 模式中，服务实例在启动时自行向 Service Registry 注册，关闭时注销。",
    },
    {
        id: "q22",
        question: "以下哪种情况最适合使用共享数据库模式？",
        options: ["新建的微服务系统", "需要强一致性的遗留系统迁移过渡期", "高并发读写场景", "多团队独立开发"],
        answer: 1,
        rationale: "共享数据库适合遗留系统迁移的过渡期，或对强一致性有要求的特定场景，但长期会增加耦合。",
    },
    {
        id: "q23",
        question: "Health Check API 应该返回什么信息？",
        options: ["服务的完整配置", "服务及其依赖的健康状态", "所有用户数据", "源代码"],
        answer: 1,
        rationale: "Health Check API 应返回服务及其关键依赖（数据库、缓存等）的健康状态，供负载均衡器和监控使用。",
    },
    {
        id: "q24",
        question: "在 Saga 中，如果第三步失败，应该执行什么？",
        options: ["重试第三步", "执行第一步和第二步的补偿事务", "回滚整个数据库", "忽略错误继续执行"],
        answer: 1,
        rationale: "Saga 失败时，需要按逆序执行之前步骤的补偿事务，撤销已完成的操作，实现最终一致性。",
    },
    {
        id: "q25",
        question: "Externalized Configuration 模式的主要好处是？",
        options: ["提高代码可读性", "支持不同环境使用不同配置，无需重新构建", "减少配置项数量", "自动生成配置"],
        answer: 1,
        rationale: "外部化配置允许同一构建产物在不同环境（开发、测试、生产）使用不同配置，实现「一次构建，多处部署」。",
    },
]

export const microservicesPatternsRoadmap: RoadmapDefinition = {
    id: "microservices-patterns",
    label: "微服务模式",
    title: "微服务架构模式",
    durationLabel: "12 周完整学习路线",
    description:
        "基于 Chris Richardson 的 microservices.io 模式语言，系统学习微服务架构的核心模式。从架构基础到服务拆分，从数据管理到通信模式，从可靠性设计到部署运维，构建完整的微服务知识体系。",
    heroBadge: "12 周 · 48 主题 · 面向后端架构师",
    stages: microservicesPatternsStages,
    knowledgeCards: microservicesPatternsCards,
    examQuestions: microservicesPatternsExamQuestions,
    suggestion: (percent: number) => {
        if (percent < 25) {
            return "建议先完成第一阶段，理解微服务架构的本质和服务拆分的方法论。"
        }
        if (percent < 50) {
            return "继续学习数据管理模式，重点掌握 Saga 和 CQRS，这是微服务最大的挑战之一。"
        }
        if (percent < 75) {
            return "深入通信和 API 模式，理解 API Gateway、服务发现在实际系统中的应用。"
        }
        return "通过可靠性和测试模式巩固所学，准备在实际项目中应用微服务架构。"
    },
    resourceGuide: {
        environment: "建议搭建一个多服务的示例项目（如电商订单系统），在实践中学习各个模式。",
        fallbackKeyPoints: [
            "微服务不是目的，而是手段：先问「为什么需要微服务」，再问「如何实现微服务」。",
            "服务边界是最重要的决策：错误的边界会导致分布式单体，比单体更糟糕。",
            "拥抱最终一致性：在微服务架构中，强一致性的代价往往太高。",
        ],
        handsOnSteps: [
            "阅读 microservices.io 的模式描述，理解问题、解决方案和权衡。",
            "在示例项目中实现该模式，观察其实际效果。",
            "思考该模式在你实际项目中的适用性和变体。",
        ],
        selfChecks: [
            "能否用自己的话解释这个模式解决什么问题？",
            "这个模式的主要权衡是什么？在什么情况下不适用？",
            "与相关模式（如 Saga vs 2PC、编排 vs 协同）的区别是什么？",
        ],
        extensions: [
            "阅读《Microservices Patterns》书籍，获取更深入的讲解和代码示例。",
            "学习 Spring Cloud、Kubernetes 等技术栈中的模式实现。",
            "分析知名公司（Netflix、Uber、Amazon）的微服务实践案例。",
        ],
        lessonQuizAdvice: "错题通常反映对模式权衡的理解不足，建议回到 microservices.io 重新阅读相关模式。",
    },
}
