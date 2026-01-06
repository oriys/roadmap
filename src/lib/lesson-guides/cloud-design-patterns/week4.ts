import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "w4-1": {
        lessonId: "w4-1",
        background: [
            "【核心定义】Azure 官方文档：'Publisher-Subscriber is an asynchronous messaging pattern that allows an application to announce events to multiple interested consumers without coupling the senders to the receivers'——发布订阅是一种异步消息模式，允许应用向多个感兴趣的消费者广播事件，而无需耦合发送者和接收者。",
            "【架构组件】官方文档描述：发布者将事件打包为消息发送到输入通道，每个消费者拥有专用的输出通道，消息代理（Message Broker）负责将消息从输入通道复制到所有订阅者的输出通道。这种架构实现了完全解耦。",
            "【事件驱动分类】Martin Fowler 定义了四种事件驱动模式：Event Notification（事件通知，仅通知变更）、Event-Carried State Transfer（事件携带状态，包含完整数据）、Event Sourcing（事件溯源，状态变更记录为事件）、CQRS（命令查询分离）。理解这些模式的区别对于正确应用发布订阅至关重要。",
            "【Kafka 核心概念】Apache Kafka 官方：'Producers are those client applications that publish (write) events to Kafka, and consumers are those that subscribe to (read and process) these events'——生产者和消费者完全解耦，通过 Topics 进行通信。'Events with the same event key are written to the same partition'——相同 key 的事件写入同一分区，保证顺序。",
            "【消息持久化特性】Kafka 官方：Topics 是'multi-producer and multi-subscriber'并按配置保留数据，而不是消费后立即删除。这与传统消息队列不同，支持消费者按自己的节奏处理消息，也支持重复消费历史数据。"
        ],
        keyDifficulties: [
            "【消息顺序问题】Azure 官方警告：'The order in which consumers receive messages isn't guaranteed'——消费者接收消息的顺序不保证。解决方案：设计幂等的消息处理逻辑，或使用 Kafka 分区保证同一 key 的消息顺序。",
            "【毒消息处理】官方文档推荐：'Use a dead-letter queue to capture messages that can't be processed'——使用死信队列捕获无法处理的消息。Azure Service Bus 原生支持 dead-letter-queue，需要设计补偿机制处理这些消息。",
            "【消息去重机制】官方文档指出：'Implement duplicate detection based on message IDs, or ensure message processing is idempotent'——基于消息 ID 实现重复检测，或确保消息处理逻辑是幂等的。在 at-least-once 语义下，去重是关键挑战。",
            "【Event Notification 的陷阱】Martin Fowler 警告：事件通知模式创建松耦合但'can obscure larger logical flows across systems, making debugging difficult'——可能模糊跨系统的业务流程，使调试变得困难。需要分布式追踪工具辅助。",
            "【Topic vs Queue 选择】Azure 文档对比：Pub/Sub 适合一对多通信和事件广播；Queue（点对点）适合一对一通信和任务分发。选择错误的模式会导致架构问题——如使用 Queue 做广播需要多次发送，效率低下。"
        ],
        handsOnPath: [
            "搭建本地 Kafka 环境：使用 Docker Compose 启动 Kafka 集群（包含 Zookeeper 或 KRaft 模式）。使用 kafka-topics.sh 创建第一个 Topic，观察分区和副本配置。",
            "实现简单的 Pub/Sub：编写 Producer 发送消息到 Topic，编写 Consumer 订阅并消费消息。观察消费者组机制——同组消费者分担分区，不同组消费者各自获得完整消息副本。",
            "测试消息顺序：发送带有相同 key 的多条消息，验证它们被路由到同一分区并保持顺序。发送不同 key 的消息，观察跨分区时顺序无法保证的现象。",
            "配置消息过滤：在 Azure Service Bus 或类似系统中配置 Topic 订阅过滤器，实现基于消息属性的内容过滤。验证不同订阅者只收到符合条件的消息。",
            "处理消费失败场景：故意在消费者中抛出异常，观察消息重试和死信队列行为。设计并实现一个补偿处理器，从 DLQ 中读取失败消息并处理。"
        ],
        selfCheck: [
            "Pub/Sub 模式与点对点消息队列的核心区别是什么？一条消息可以被多少个消费者接收？",
            "Kafka 如何保证同一分区内消息的顺序？为什么跨分区无法保证顺序？",
            "什么是死信队列（DLQ）？它在 Pub/Sub 架构中解决什么问题？",
            "Martin Fowler 定义的四种事件驱动模式分别是什么？它们之间有什么区别？",
            "为什么官方文档推荐消息处理逻辑设计为幂等的？这与消息去重有什么关系？"
        ],
        extensions: [
            "研究 Azure Event Grid 和 Event Hubs 的区别：Event Grid 适合事件路由和分发，Event Hubs 适合高吞吐量事件流处理。了解何时选择哪种服务。",
            "学习 Kafka Streams：了解如何在 Kafka 上构建流处理应用，实现实时数据转换和聚合，无需额外的流处理框架。",
            "探索 Schema Registry：了解如何使用 Confluent Schema Registry 管理消息 Schema 演进，确保生产者和消费者之间的兼容性。",
            "研究 CloudEvents 规范：了解如何使用标准化的事件格式提高跨系统互操作性，简化事件驱动架构的集成。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber",
            "https://martinfowler.com/articles/201701-event-driven.html",
            "https://kafka.apache.org/intro"
        ]
    },
    "w4-2": {
        lessonId: "w4-2",
        background: [
            "【模式定义】Azure 官方文档：'Claim-Check pattern is used to handle large message payloads by storing the payload in an external data store and generating a unique claim-check token'——Claim-Check 模式用于处理大消息负载，将负载存储在外部数据存储中并生成唯一的凭证令牌。",
            "【机场行李类比】Enterprise Integration Patterns 使用机场行李托运作为比喻：'Store message data in a persistent store and pass a Claim Check to subsequent components'——就像托运行李获得行李票，消息系统只传递轻量的「凭证」，实际数据存储在别处。",
            "【五步工作流程】EIP 文档描述完整流程：1) 数据到达，2) Check Luggage 组件生成唯一密钥，3) 数据持久化到文件或数据库，4) 消息简化（移除数据，添加 Claim Check），5) 后续组件通过 Content Enricher 使用凭证检索数据。",
            "【AWS SQS 限制】AWS 官方：SQS 消息大小限制为 256 KB，但使用 Extended Client Library 可以处理 256 KB 到 2 GB 的消息。'Library stores message payloads in S3 and sends a reference to the S3 object in the SQS message'——库将负载存储在 S3，只发送引用。",
            "【自动生命周期管理】AWS 文档：'Configure S3 bucket to automatically delete stored objects after a specified period'——可配置 S3 桶自动删除过期对象，防止存储成本累积。推荐配置 14 天生命周期规则。"
        ],
        keyDifficulties: [
            "【删除策略选择】Azure 官方文档建议两种策略：同步删除（消费后立即删除）和异步删除（独立后台进程删除）。异步删除推荐用于降低处理负载，但需要注意存储成本和数据保留策略。",
            "【条件化实现】官方最佳实践：'Apply the pattern conditionally based on message size'——根据消息大小动态应用模式。小消息直接发送避免额外延迟，大消息才使用 Claim-Check，优化资源利用和性能。",
            "【AWS SDK 限制】AWS 文档警告：'SQS Extended Client Library only supports AWS SDK for Java'——该库仅支持 Java SDK，不支持 CLI、控制台或其他 SDK。使用其他语言需要自行实现 Claim-Check 逻辑。",
            "【消息大小不兼容】Azure 文档指出：不同消息系统有不同的大小限制（MSMQ: 4 MB, Azure Storage Queues: 64 KB）。在跨系统集成时，Claim-Check 模式可以统一处理这些差异。",
            "【安全考量】官方文档强调：'Use unique, obfuscated values for claim-check tokens'——使用唯一、难以猜测的令牌值，并在外部存储上实施适当的访问控制，防止未授权访问敏感数据。"
        ],
        handsOnPath: [
            "实现基础 Claim-Check 流程：使用 AWS S3 或 Azure Blob Storage 作为数据存储，编写代码将大消息的负载存储到对象存储，生成唯一 ID 作为 claim-check，通过消息队列只发送这个 ID。",
            "配置 AWS SQS Extended Client：按照 AWS 文档配置 Maven 依赖和 ExtendedClientConfiguration，设置 payloadSupportEnabled。发送超过 256 KB 的消息，验证自动存储到 S3 的行为。",
            "实现生命周期管理：为 S3 桶配置生命周期规则，设置 14 天后自动删除对象。验证规则生效后旧对象被清理。",
            "测试条件化实现：修改代码实现消息大小检查——小于阈值直接发送，大于阈值使用 Claim-Check。比较两种情况的延迟差异。",
            "实现消费者端检索：编写消费者代码解析 claim-check 消息，从对象存储检索实际负载，处理完成后删除存储对象（同步删除策略）或标记待清理（异步删除策略）。"
        ],
        selfCheck: [
            "Claim-Check 模式解决什么问题？为什么不直接通过消息系统传输大数据？",
            "Enterprise Integration Patterns 用什么比喻来解释 Claim-Check 模式？这个比喻的含义是什么？",
            "同步删除和异步删除两种策略各有什么优缺点？什么场景下选择哪种？",
            "为什么官方建议根据消息大小条件化应用 Claim-Check 模式？",
            "AWS SQS Extended Client Library 有什么限制？如何在其他语言中实现类似功能？"
        ],
        extensions: [
            "研究 NServiceBus DataBus：了解这个框架如何提供开箱即用的 Claim-Check 支持，无需手动管理外部存储和令牌生成。",
            "探索 Split 和 Aggregate 模式：作为 Claim-Check 的替代方案，了解如何将大消息拆分为多个小消息传输，然后在接收端重新组装。",
            "学习 Azure Event Grid + Blob Storage 集成：了解如何使用 Event Grid 在 Blob 上传时自动触发事件通知，简化 Claim-Check 的发布流程。",
            "研究消息压缩技术：了解在应用 Claim-Check 之前，如何通过压缩（gzip、LZ4）减小消息体积，可能避免触发 Claim-Check 的阈值。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/claim-check",
            "https://www.enterpriseintegrationpatterns.com/patterns/messaging/StoreInLibrary.html",
            "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-s3-messages.html"
        ]
    },
    "w4-3": {
        lessonId: "w4-3",
        background: [
            "【核心定义】Azure 官方文档：'Choreography pattern enables distributed systems to coordinate through decentralized workflow logic, where each component autonomously decides and coordinates without a central orchestrator'——编舞模式通过去中心化工作流逻辑实现分布式系统协调，各组件自主决策而无需中央编排器。",
            "【与 Orchestration 对比】Temporal 博客对比：Orchestration 采用中央协调器控制全局，'makes control flow easier to understand'但存在单点故障；Choreography'is decentralized and decoupled'适合高度独立的服务，但调试困难。",
            "【Saga Choreography 实现】microservices.io 官方：'Each local transaction publishes domain events that trigger local transactions in other services'——每个本地事务发布触发其他服务本地事务的域事件。这是实现跨服务数据一致性的关键模式。",
            "【工作流程描述】Azure 文档详细流程：客户端请求进入消息代理队列，各服务订阅/轮询消息代理，根据业务逻辑决定是否处理，处理结果发送新消息，失败通过补偿事务或死信队列处理。",
            "【适用场景】Azure 文档明确：Choreography 适用于处理原子操作的组件、频繁更新替换的组件、Serverless 架构（事件驱动、短生命周期）、不同有界上下文间的通信、中央协调器存在性能瓶颈的场景。"
        ],
        keyDifficulties: [
            "【失败处理复杂性】Azure 官方警告：'A single service failure can affect other services in the workflow'——单个服务失败可能影响其他服务。解决方案：实现补偿事务模式（Compensating Transaction Pattern）回滚已完成的操作。",
            "【顺序依赖问题】官方文档指出：当服务 D 必须等待服务 B 和 C 完成后才能开始时，需要使用带 Session ID 的消息确保顺序处理。设计 Session-aware 队列是关键。",
            "【分布式追踪困难】Azure 文档警告：'When services increase, the workflow complexity grows exponentially'——服务增多时工作流复杂度指数增长。推荐工具：ServiceInsight + NServiceBus、分布式追踪系统（Jaeger、Zipkin）。",
            "【Orchestration vs Choreography 选型】Temporal 博客：Orchestration 适合绑定工作流、有序流程、绿地项目；Choreography 适合迁移单体、高度独立服务。'Choreography is easier initially but harder to maintain ordering logic'——Choreography 初期更简单但维护顺序逻辑困难。",
            "【幂等性要求】Azure 官方最佳实践：'Services must implement idempotent operations (e.g., upsert)'——服务必须实现幂等操作，确保重试不会产生重复资源。这是 Choreography 中消息重复投递的必然要求。"
        ],
        handsOnPath: [
            "设计 Choreography 订单流程：绘制包裹配送系统的 Choreography 流程图——Ingestion Service 发布消息到 Topic，Package Service 和 Drone Scheduler Service 订阅处理，Delivery Service 等待两者完成后处理配送。",
            "实现事件驱动工作流：使用 Azure Service Bus Topics 或 Kafka，实现上述订单流程。每个服务作为独立的消费者，处理消息后发布新的业务事件触发下游服务。",
            "配置 Session-aware 消息：在需要顺序保证的场景中，使用消息 Session ID（绑定到订单 ID）确保相关消息按顺序处理。测试乱序到达时的处理行为。",
            "实现补偿事务：模拟 Drone Scheduler 服务失败场景，设计并实现补偿逻辑——发布补偿事件让 Package Service 回滚已完成的操作。",
            "集成分布式追踪：使用 OpenTelemetry 或类似工具为每个服务添加追踪埋点，在 Jaeger 或类似系统中可视化完整的 Choreography 工作流，定位性能瓶颈。"
        ],
        selfCheck: [
            "Choreography 模式与 Orchestration 模式的核心区别是什么？各有什么优缺点？",
            "Azure 官方文档列出的 Choreography 适用场景有哪些？什么情况下不适合使用？",
            "Saga 模式的 Choreography 实现如何工作？本地事务和域事件的关系是什么？",
            "如何处理 Choreography 中的失败场景？补偿事务模式如何工作？",
            "为什么分布式追踪在 Choreography 架构中特别重要？推荐使用什么工具？"
        ],
        extensions: [
            "研究 Eventuate Tram 框架：了解这个开源框架如何简化 Saga 模式的实现，包括 Choreography 和 Orchestration 两种方式。",
            "探索 Temporal 工作流引擎：了解 Temporal 如何在实现 Orchestration 的同时解决单点故障问题，通过日志记录实现无缝恢复。",
            "学习 AsyncAPI 规范：了解如何使用 AsyncAPI 文档化 Choreography 中的事件和消息接口，提高团队协作效率。",
            "研究 Event Storming 方法：了解如何使用这种协作设计技术识别业务事件和服务边界，更好地设计 Choreography 架构。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/choreography",
            "https://temporal.io/blog/to-choreograph-or-orchestrate-your-saga-that-is-the-question",
            "https://microservices.io/patterns/data/saga.html"
        ]
    },
    "w4-4": {
        lessonId: "w4-4",
        background: [
            "【模式定义】Azure 官方文档：'Messaging Bridge is an integration pattern for connecting systems that use different messaging infrastructures, enabling them to communicate without modifying existing systems'——消息桥是连接使用不同消息基础设施的系统的集成模式，无需修改现有系统即可实现通信。",
            "【EIP 定义】Enterprise Integration Patterns：'Use a Messaging Bridge, a connection between messaging systems, to replicate messages between systems'——使用消息桥（消息系统之间的连接）在系统间复制消息。桥由一组通道适配器组成，连接对应的消息系统通道对。",
            "【工作原理】Azure 文档描述：桥接组件同时连接到两个或多个消息传递基础设施，从一个队列拉取消息，推送到另一个队列。'The bridge acts as a map from one set of channels to the other, and also transforms the message format'——桥充当通道映射器并转换消息格式。",
            "【Apache Camel 集成能力】Apache Camel 官方：Camel 实现了大多数 Enterprise Integration Patterns，支持多种消息系统集成。核心模式包括 Content-Based Router、Splitter、Aggregator、Message Bus 等，可以构建复杂的消息桥接逻辑。",
            "【核心优势】Azure 文档：'Minimum modification to existing systems'——被集成的系统无需感知桥接的存在；'Higher reliability than HTTP'——相比 HTTP 方案，至少一次消息交付保证更可靠；'Flexible migration path'——支持增量迁移而非全量切换。"
        ],
        keyDifficulties: [
            "【分布式事务处理】Azure 官方警告：'If systems rely on DTC (Distributed Transaction Coordinator), you need to implement deduplication mechanisms'——若系统依赖分布式事务协调器，需要实现去重机制。桥接两端无法保证原子性，需要幂等设计。",
            "【消息大小限制差异】官方文档指出：不同消息系统有不同限制（MSMQ: 4 MB, Azure Storage Queues: 64 KB）。设计桥接时必须处理这些不兼容情况，可能需要结合 Claim-Check 模式。",
            "【重试策略差异】Azure 文档：'Standard message components use Retry pattern (with count limits), but Bridge components may need different strategies like Circuit Breaker'——标准消息组件使用有限重试，但桥接组件可能需要熔断器模式处理持续失败。",
            "【队列拓扑选择】官方文档提供两种选项：单队列方式（指定桥接队列作为目标）和多队列对方式（为每个目标队列创建影子队列）。选择取决于现有系统的改造难度和消息路由需求。",
            "【不适用场景】Azure 文档明确：不适合依赖特定基础设施特有功能的系统、需要同步集成及立即响应的场景、有特定安全/隐私要求的场景、数据量超过消息系统容量的场景。"
        ],
        handsOnPath: [
            "分析集成需求：评估需要桥接的两个消息系统（如本地 MSMQ 和云端 Azure Service Bus），记录各自的消息格式、大小限制、认证方式和可用性要求。",
            "使用 Apache Camel 构建桥接：配置 Camel Route 从源消息系统（如 RabbitMQ）消费消息，转换格式后发送到目标系统（如 Kafka）。使用 Camel 的 Error Handler 处理失败场景。",
            "实现消息格式转换：在桥接组件中添加消息转换逻辑，处理两个系统之间的消息格式差异（如 JSON vs XML、不同的消息头字段）。",
            "配置重试和熔断：为桥接组件配置 Retry 策略处理临时故障，配置 Circuit Breaker 在目标系统持续不可用时暂停转发，避免消息积压。",
            "测试增量迁移场景：模拟从旧消息系统逐步迁移到新系统的过程——先配置桥接复制消息，验证新系统正常后逐步切换消费者，最终下线旧系统。"
        ],
        selfCheck: [
            "Messaging Bridge 模式解决什么问题？它的核心价值是什么？",
            "EIP 文档如何描述 Messaging Bridge 的组成？通道适配器的作用是什么？",
            "在桥接不同消息系统时，消息大小限制差异如何处理？",
            "Azure 文档列出的 Messaging Bridge 不适用场景有哪些？",
            "Apache Camel 如何帮助实现消息桥接？它支持哪些企业集成模式？"
        ],
        extensions: [
            "研究 NServiceBus Messaging Bridge：了解这个 .NET 框架如何提供开箱即用的消息桥接能力，支持多种消息技术之间的透明转发。",
            "探索 Kafka Connect：了解 Kafka 生态系统中的连接器如何实现与其他系统（数据库、消息队列、云服务）的双向集成。",
            "学习 Azure Logic Apps 集成：了解如何使用无代码/低代码平台构建消息桥接，连接数百种 SaaS 服务和本地系统。",
            "研究 MuleSoft Anypoint：了解企业级 iPaaS（集成平台即服务）如何处理复杂的多系统集成场景，包括消息桥接、API 管理和数据转换。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/messaging-bridge",
            "https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessagingBridge.html",
            "https://camel.apache.org/components/4.14.x/eips/enterprise-integration-patterns.html"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "w4-1": [
        {
            id: "w4-1-q1",
            question: "Azure 官方文档对 Publisher-Subscriber 模式的定义是什么？",
            options: [
                "一种同步调用模式，要求发送者等待接收者响应",
                "一种异步消息模式，允许应用向多个消费者广播事件而无需耦合发送者和接收者",
                "一种数据库复制技术",
                "一种负载均衡算法"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：'Publisher-Subscriber is an asynchronous messaging pattern that allows an application to announce events to multiple interested consumers without coupling the senders to the receivers'。"
        },
        {
            id: "w4-1-q2",
            question: "Martin Fowler 定义的四种事件驱动模式包括哪些？",
            options: [
                "CRUD、REST、GraphQL、gRPC",
                "Event Notification、Event-Carried State Transfer、Event Sourcing、CQRS",
                "Publish、Subscribe、Queue、Topic",
                "Producer、Consumer、Broker、Channel"
            ],
            answer: 1,
            rationale: "Martin Fowler 文章明确定义了四种事件驱动模式：Event Notification（事件通知）、Event-Carried State Transfer（事件携带状态）、Event Sourcing（事件溯源）、CQRS（命令查询分离）。"
        },
        {
            id: "w4-1-q3",
            question: "Azure 官方文档对消息顺序的警告是什么？",
            options: [
                "消息总是按发送顺序到达",
                "只有使用 FIFO 队列才能保证顺序",
                "'The order in which consumers receive messages isn't guaranteed'——消费者接收消息的顺序不保证",
                "顺序只在同一数据中心内保证"
            ],
            answer: 2,
            rationale: "Azure 官方警告：'The order in which consumers receive messages isn't guaranteed'——在 Pub/Sub 模式中，消费者接收消息的顺序不保证，需要设计幂等处理逻辑。"
        },
        {
            id: "w4-1-q4",
            question: "Kafka 官方文档对生产者和消费者关系的描述是什么？",
            options: [
                "生产者和消费者必须同时在线",
                "'Producers and consumers are fully decoupled'——生产者和消费者完全解耦",
                "生产者控制消费者的处理速度",
                "消费者必须向生产者发送确认"
            ],
            answer: 1,
            rationale: "Kafka 官方文档：'Producers are those client applications that publish (write) events to Kafka, and consumers are those that subscribe to (read and process) these events'——生产者和消费者通过 Topics 完全解耦。"
        },
        {
            id: "w4-1-q5",
            question: "Kafka 官方对相同事件 key 消息路由的描述是什么？",
            options: [
                "随机分配到任意分区",
                "'Events with the same event key are written to the same partition'——写入同一分区",
                "每个 key 创建新的分区",
                "key 不影响分区分配"
            ],
            answer: 1,
            rationale: "Kafka 官方文档：'Events with the same event key are written to the same partition, and Kafka guarantees that any consumer of a given topic-partition will always read that partition's events in exactly the same order'。"
        },
        {
            id: "w4-1-q6",
            question: "Azure 官方推荐如何处理无法处理的消息？",
            options: [
                "直接丢弃消息",
                "无限重试直到成功",
                "'Use a dead-letter queue to capture messages that can't be processed'——使用死信队列",
                "发送错误通知给生产者"
            ],
            answer: 2,
            rationale: "Azure 官方文档推荐：'Use a dead-letter queue to capture messages that can't be processed'——使用死信队列捕获无法处理的消息，Azure Service Bus 原生支持此功能。"
        },
        {
            id: "w4-1-q7",
            question: "Martin Fowler 对 Event Notification 模式的警告是什么？",
            options: [
                "性能开销太大",
                "不支持大规模部署",
                "'Can obscure larger logical flows across systems, making debugging difficult'——可能模糊业务流程使调试困难",
                "安全性不足"
            ],
            answer: 2,
            rationale: "Martin Fowler 警告：Event Notification 模式创建松耦合但'can obscure larger logical flows across systems, making debugging difficult'——可能模糊跨系统的业务流程。"
        },
        {
            id: "w4-1-q8",
            question: "Azure 官方对消息去重的建议是什么？",
            options: [
                "依赖消息系统自动去重",
                "'Implement duplicate detection based on message IDs, or ensure message processing is idempotent'——基于消息 ID 去重或确保幂等",
                "使用数据库唯一约束",
                "在生产者端去重"
            ],
            answer: 1,
            rationale: "Azure 官方文档：'Implement duplicate detection based on message IDs, or ensure message processing is idempotent'——在 at-least-once 语义下，需要基于消息 ID 实现重复检测或确保处理逻辑幂等。"
        },
        {
            id: "w4-1-q9",
            question: "Kafka Topics 与传统消息队列在消息保留上的区别是什么？",
            options: [
                "两者完全相同",
                "Kafka 按配置保留数据而非消费后立即删除，支持重复消费历史数据",
                "Kafka 不保留任何消息",
                "传统队列保留时间更长"
            ],
            answer: 1,
            rationale: "Kafka 官方文档指出 Topics'retain data based on configurable settings rather than deleting after consumption'——按配置保留数据而不是消费后立即删除，这与传统消息队列不同。"
        },
        {
            id: "w4-1-q10",
            question: "Pub/Sub 模式与点对点消息队列的核心区别是什么？",
            options: [
                "消息格式不同",
                "一条消息可以被多个订阅者接收 vs 只能被一个消费者接收",
                "传输协议不同",
                "存储方式不同"
            ],
            answer: 1,
            rationale: "Azure 文档对比：Pub/Sub 适合一对多通信和事件广播，一条消息可以被所有订阅该主题的消费者接收；Queue（点对点）适合一对一通信，消息只被一个消费者处理。"
        },
        {
            id: "w4-1-q11",
            question: "Azure 文档推荐的 Pub/Sub 实现方案有哪些？",
            options: [
                "只能自行开发",
                "Azure Service Bus、Azure Event Hubs、Azure Event Grid，以及 Redis、RabbitMQ、Apache Kafka",
                "只支持 Azure 原生服务",
                "只推荐使用 Kafka"
            ],
            answer: 1,
            rationale: "Azure 官方推荐使用现成服务：Azure Service Bus（完整消息队列和主题订阅）、Event Hubs（高吞吐量事件流）、Event Grid（事件路由分发），以及第三方如 Redis、RabbitMQ、Apache Kafka。"
        },
        {
            id: "w4-1-q12",
            question: "Azure 文档指出 Pub/Sub 模式不适用于什么场景？",
            options: [
                "需要向大量消费者广播信息的场景",
                "支持最终一致性模型的系统",
                "需要近实时交互的场景",
                "与多个独立开发的应用通信"
            ],
            answer: 2,
            rationale: "Azure 官方文档明确指出 Pub/Sub 不适用于'near real-time interaction is required'——需要近实时交互的场景，因为 Pub/Sub 是异步模式，无法提供即时响应。"
        }
    ],
    "w4-2": [
        {
            id: "w4-2-q1",
            question: "Azure 官方文档对 Claim-Check 模式的定义是什么？",
            options: [
                "一种消息加密模式",
                "将大消息负载存储在外部数据存储并生成唯一凭证令牌的模式",
                "一种消息路由模式",
                "一种消息压缩技术"
            ],
            answer: 1,
            rationale: "Azure 官方定义：'Claim-Check pattern is used to handle large message payloads by storing the payload in an external data store and generating a unique claim-check token'。"
        },
        {
            id: "w4-2-q2",
            question: "Enterprise Integration Patterns 用什么比喻解释 Claim-Check 模式？",
            options: [
                "邮递员送信",
                "银行存款取款",
                "机场行李托运——托运行李获得行李票",
                "图书馆借书还书"
            ],
            answer: 2,
            rationale: "EIP 文档使用机场行李托运作为比喻：'Store message data in a persistent store and pass a Claim Check to subsequent components'——就像托运行李获得行李票。"
        },
        {
            id: "w4-2-q3",
            question: "AWS 官方文档说明 SQS 消息大小限制是多少？使用 Extended Client Library 可以处理多大的消息？",
            options: [
                "64 KB，最大 256 KB",
                "256 KB，最大 2 GB",
                "1 MB，最大 10 MB",
                "无限制"
            ],
            answer: 1,
            rationale: "AWS 官方：SQS 消息大小限制为 256 KB，但使用 Extended Client Library 可以处理 256 KB 到 2 GB 的消息，库将负载存储在 S3 中。"
        },
        {
            id: "w4-2-q4",
            question: "Azure 文档建议的两种消息删除策略是什么？",
            options: [
                "立即删除和永不删除",
                "同步删除（消费后立即删除）和异步删除（独立后台进程删除）",
                "手动删除和自动删除",
                "软删除和硬删除"
            ],
            answer: 1,
            rationale: "Azure 官方文档建议两种策略：同步删除（应用消费后立即删除）和异步删除（独立后台进程删除），异步删除推荐用于降低处理负载。"
        },
        {
            id: "w4-2-q5",
            question: "AWS 官方文档对 SQS Extended Client Library 的限制说明是什么？",
            options: [
                "支持所有编程语言",
                "'SQS Extended Client Library only supports AWS SDK for Java'——仅支持 Java SDK",
                "仅支持 Python SDK",
                "支持所有 AWS SDK"
            ],
            answer: 1,
            rationale: "AWS 文档警告：'SQS Extended Client Library only supports AWS SDK for Java'——该库仅支持 Java SDK，不支持 CLI、控制台或其他 SDK。"
        },
        {
            id: "w4-2-q6",
            question: "EIP 文档描述的 Claim-Check 五步工作流程中，第四步是什么？",
            options: [
                "数据到达",
                "生成唯一密钥",
                "持久化存储",
                "消息简化——移除数据，添加 Claim Check"
            ],
            answer: 3,
            rationale: "EIP 文档描述五步流程：1)数据到达，2)生成唯一密钥，3)持久化存储，4)消息简化（移除数据，添加 Claim Check），5)后续组件使用凭证检索数据。"
        },
        {
            id: "w4-2-q7",
            question: "Azure 官方对条件化实现 Claim-Check 的建议是什么？",
            options: [
                "所有消息都应该使用 Claim-Check",
                "'Apply the pattern conditionally based on message size'——根据消息大小动态应用",
                "只在生产环境使用",
                "仅用于敏感数据"
            ],
            answer: 1,
            rationale: "Azure 官方最佳实践：'Apply the pattern conditionally based on message size'——小消息直接发送避免额外延迟，大消息才使用 Claim-Check，优化资源利用和性能。"
        },
        {
            id: "w4-2-q8",
            question: "AWS 文档推荐的 S3 生命周期规则设置是多少天？",
            options: [
                "7 天",
                "14 天",
                "30 天",
                "永不过期"
            ],
            answer: 1,
            rationale: "AWS 文档：'Configure S3 bucket to automatically delete stored objects after a specified period'——推荐配置 14 天生命周期规则，防止存储成本累积。"
        },
        {
            id: "w4-2-q9",
            question: "Azure 官方对 Claim-Check 令牌安全性的建议是什么？",
            options: [
                "使用简单的递增数字作为令牌",
                "'Use unique, obfuscated values for claim-check tokens'——使用唯一、难以猜测的令牌值",
                "使用时间戳作为令牌",
                "不需要考虑令牌安全性"
            ],
            answer: 1,
            rationale: "Azure 官方强调：'Use unique, obfuscated values for claim-check tokens'——使用唯一、难以猜测的令牌值，并在外部存储上实施适当的访问控制。"
        },
        {
            id: "w4-2-q10",
            question: "Azure 文档列出的 Claim-Check 主要用途有哪些？",
            options: [
                "仅用于安全加密",
                "消息大小超过系统限制、性能优化、敏感数据保护、复杂路由场景",
                "仅用于日志记录",
                "仅用于数据备份"
            ],
            answer: 1,
            rationale: "Azure 官方列出主要用途：消息系统限制（消息大小超过限制）、性能优化（大消息影响性能）、敏感数据保护、复杂路由场景（避免多次序列化开销）。"
        },
        {
            id: "w4-2-q11",
            question: "Azure 文档指出不同消息系统的大小限制差异是什么？",
            options: [
                "所有系统限制相同",
                "MSMQ: 4 MB, Azure Storage Queues: 64 KB",
                "没有大小限制",
                "只有 Kafka 有限制"
            ],
            answer: 1,
            rationale: "Azure 文档指出不同消息系统有不同的大小限制：MSMQ 限制 4 MB，Azure Storage Queues 限制 64 KB。在跨系统集成时，Claim-Check 模式可以统一处理这些差异。"
        },
        {
            id: "w4-2-q12",
            question: "Azure 文档对 Claim-Check 的 Well-Architected Framework 支持描述中，成本优化方面的优势是什么？",
            options: [
                "减少开发时间",
                "使用更便宜的消息解决方案（因为消息更小）",
                "不需要额外的存储",
                "减少测试成本"
            ],
            answer: 1,
            rationale: "Azure 官方 Well-Architected Framework 支持表明，成本优化方面：Claim-Check 允许'use cheaper messaging solutions'——使用更便宜的消息解决方案，因为实际通过消息系统传输的数据量大大减少。"
        }
    ],
    "w4-3": [
        {
            id: "w4-3-q1",
            question: "Azure 官方文档对 Choreography 模式的核心定义是什么？",
            options: [
                "使用中央编排器协调所有服务",
                "通过去中心化工作流逻辑实现分布式系统协调，各组件自主决策而无需中央编排器",
                "一种同步调用模式",
                "一种数据库事务模式"
            ],
            answer: 1,
            rationale: "Azure 官方定义：'Choreography pattern enables distributed systems to coordinate through decentralized workflow logic, where each component autonomously decides and coordinates without a central orchestrator'。"
        },
        {
            id: "w4-3-q2",
            question: "Temporal 博客对 Orchestration 模式的描述是什么？",
            options: [
                "去中心化和解耦",
                "'Makes control flow easier to understand'——使控制流更易于理解，但存在单点故障",
                "不需要中央协调器",
                "难以调试"
            ],
            answer: 1,
            rationale: "Temporal 博客对比：Orchestration 采用中央协调器控制全局，'makes control flow easier to understand'使控制流更易于理解，但存在单点故障风险。"
        },
        {
            id: "w4-3-q3",
            question: "microservices.io 对 Saga Choreography 实现的描述是什么？",
            options: [
                "使用中央协调器管理所有事务",
                "'Each local transaction publishes domain events that trigger local transactions in other services'——每个本地事务发布触发其他服务本地事务的域事件",
                "使用两阶段提交保证一致性",
                "所有服务共享同一个数据库"
            ],
            answer: 1,
            rationale: "microservices.io 官方：'Each local transaction publishes domain events that trigger local transactions in other services'——Saga Choreography 通过域事件触发跨服务的本地事务。"
        },
        {
            id: "w4-3-q4",
            question: "Azure 官方文档列出的 Choreography 适用场景有哪些？",
            options: [
                "需要强一致性的场景",
                "处理原子操作的组件、频繁更新替换的组件、Serverless 架构、不同有界上下文间的通信",
                "需要同步调用的场景",
                "单体应用内部通信"
            ],
            answer: 1,
            rationale: "Azure 文档明确：Choreography 适用于处理原子操作的组件、频繁更新替换的组件、Serverless 架构（事件驱动、短生命周期）、不同有界上下文间的通信、中央协调器存在性能瓶颈的场景。"
        },
        {
            id: "w4-3-q5",
            question: "Azure 官方对 Choreography 失败处理的建议是什么？",
            options: [
                "忽略失败继续执行",
                "实现补偿事务模式（Compensating Transaction Pattern）回滚已完成的操作",
                "重启所有服务",
                "使用数据库回滚"
            ],
            answer: 1,
            rationale: "Azure 官方警告单个服务失败可能影响其他服务，解决方案：'Implement Compensating Transaction Pattern'——实现补偿事务模式回滚已完成的操作。"
        },
        {
            id: "w4-3-q6",
            question: "Temporal 博客对 Choreography 初期实现的评价是什么？",
            options: [
                "初期困难但后期简单",
                "'Choreography is easier initially but harder to maintain ordering logic'——初期更简单但维护顺序逻辑困难",
                "始终简单",
                "始终困难"
            ],
            answer: 1,
            rationale: "Temporal 博客指出：'Choreography is easier initially but harder to maintain ordering logic'——Choreography 初期实现更简单，但随着系统复杂度增加，维护消息顺序和业务逻辑变得困难。"
        },
        {
            id: "w4-3-q7",
            question: "Azure 文档对 Choreography 中服务幂等性的要求是什么？",
            options: [
                "不需要考虑幂等性",
                "'Services must implement idempotent operations (e.g., upsert)'——服务必须实现幂等操作",
                "只有写操作需要幂等",
                "幂等性是可选的"
            ],
            answer: 1,
            rationale: "Azure 官方最佳实践：'Services must implement idempotent operations (e.g., upsert)'——服务必须实现幂等操作，确保重试不会产生重复资源。"
        },
        {
            id: "w4-3-q8",
            question: "Azure 文档如何描述 Choreography 中的分布式追踪挑战？",
            options: [
                "分布式追踪很简单",
                "'When services increase, the workflow complexity grows exponentially'——服务增多时工作流复杂度指数增长",
                "不需要追踪",
                "使用日志就足够了"
            ],
            answer: 1,
            rationale: "Azure 文档警告：'When services increase, the workflow complexity grows exponentially'——服务增多时工作流复杂度指数增长，推荐使用 ServiceInsight + NServiceBus 或分布式追踪系统。"
        },
        {
            id: "w4-3-q9",
            question: "Azure 文档列出的 Choreography 不适用场景是什么？",
            options: [
                "Serverless 架构",
                "应用过于复杂需要中央组件处理共享逻辑、不可避免的点对点通信、需要集中处理所有业务逻辑进行验证",
                "事件驱动场景",
                "微服务架构"
            ],
            answer: 1,
            rationale: "Azure 文档明确不适用场景：应用过于复杂需要中央组件处理共享逻辑、不可避免的点对点通信、需要集中处理所有业务逻辑进行验证。"
        },
        {
            id: "w4-3-q10",
            question: "Azure 文档如何解决 Choreography 中的顺序依赖问题？",
            options: [
                "不支持顺序处理",
                "使用带 Session ID 的消息确保顺序处理",
                "使用时间戳排序",
                "强制同步调用"
            ],
            answer: 1,
            rationale: "Azure 官方文档指出：当服务 D 必须等待服务 B 和 C 完成后才能开始时，需要使用带 Session ID 的消息确保顺序处理，设计 Session-aware 队列。"
        },
        {
            id: "w4-3-q11",
            question: "Temporal 博客对 Choreography 调试难度的描述是什么？",
            options: [
                "非常容易调试",
                "'Challenging—control flow unclear'——具有挑战性，控制流不清晰",
                "与 Orchestration 一样容易",
                "使用日志即可解决"
            ],
            answer: 1,
            rationale: "Temporal 博客对比表指出：Choreography 在调试方面'Challenging—control flow unclear'——具有挑战性，因为控制流不清晰，难以追踪完整的业务流程。"
        },
        {
            id: "w4-3-q12",
            question: "Azure 文档中包裹配送系统示例使用了什么消息服务？",
            options: [
                "仅使用 Azure Event Grid",
                "Azure Service Bus Topic 用于命令消息，Azure Event Grid 用于状态变化事件",
                "仅使用 HTTP 调用",
                "仅使用 Kafka"
            ],
            answer: 1,
            rationale: "Azure 文档示例架构：Ingestion Service 发布消息到 Azure Service Bus Topic，两个服务订阅处理，Delivery 服务使用 Session-aware 队列等待完成，发货时发布状态变化事件到 Azure Event Grid。"
        }
    ],
    "w4-4": [
        {
            id: "w4-4-q1",
            question: "Azure 官方文档对 Messaging Bridge 模式的定义是什么？",
            options: [
                "一种消息加密技术",
                "连接使用不同消息基础设施的系统的集成模式，无需修改现有系统即可实现通信",
                "一种负载均衡模式",
                "一种消息压缩技术"
            ],
            answer: 1,
            rationale: "Azure 官方定义：'Messaging Bridge is an integration pattern for connecting systems that use different messaging infrastructures, enabling them to communicate without modifying existing systems'。"
        },
        {
            id: "w4-4-q2",
            question: "Enterprise Integration Patterns 对 Messaging Bridge 的核心描述是什么？",
            options: [
                "直接连接两个应用程序",
                "'Use a Messaging Bridge, a connection between messaging systems, to replicate messages between systems'——使用消息桥在系统间复制消息",
                "使用 HTTP 进行通信",
                "共享同一个数据库"
            ],
            answer: 1,
            rationale: "EIP 定义：'Use a Messaging Bridge, a connection between messaging systems, to replicate messages between systems'——消息桥是消息系统之间的连接，用于在系统间复制消息。"
        },
        {
            id: "w4-4-q3",
            question: "Azure 文档描述的 Messaging Bridge 三大核心优势是什么？",
            options: [
                "性能提升、安全增强、成本降低",
                "最小化修改现有系统、比 HTTP 更可靠、支持增量迁移",
                "实时同步、数据压缩、自动扩展",
                "代码复用、测试简化、部署加速"
            ],
            answer: 1,
            rationale: "Azure 文档核心优势：'Minimum modification to existing systems'（最小化修改）、'Higher reliability than HTTP'（比 HTTP 更可靠的消息交付保证）、'Flexible migration path'（支持增量迁移）。"
        },
        {
            id: "w4-4-q4",
            question: "Azure 官方对 Messaging Bridge 中分布式事务的警告是什么？",
            options: [
                "不需要考虑事务",
                "'If systems rely on DTC, you need to implement deduplication mechanisms'——依赖 DTC 时需要实现去重机制",
                "自动支持分布式事务",
                "使用两阶段提交即可"
            ],
            answer: 1,
            rationale: "Azure 官方警告：'If systems rely on DTC (Distributed Transaction Coordinator), you need to implement deduplication mechanisms'——桥接两端无法保证原子性，需要幂等设计和去重机制。"
        },
        {
            id: "w4-4-q5",
            question: "EIP 文档描述 Messaging Bridge 由什么组成？",
            options: [
                "一个单独的服务器",
                "一组通道适配器（Channel Adapters），连接对应的消息系统通道对",
                "一个数据库",
                "一个 HTTP 代理"
            ],
            answer: 1,
            rationale: "EIP 文档：'The bridge is composed of a set of Channel Adapters'——桥由一组通道适配器组成，连接对应的消息系统通道对，充当从一套通道到另一套通道的映射机制。"
        },
        {
            id: "w4-4-q6",
            question: "Azure 文档对桥接重试策略的建议是什么？",
            options: [
                "使用与普通消息组件相同的重试策略",
                "'Standard message components use Retry pattern, but Bridge components may need Circuit Breaker'——桥接组件可能需要熔断器模式",
                "不需要重试",
                "无限重试直到成功"
            ],
            answer: 1,
            rationale: "Azure 文档：'Standard message components use Retry pattern (with count limits), but Bridge components may need different strategies like Circuit Breaker'——桥接组件可能需要熔断器模式处理持续失败。"
        },
        {
            id: "w4-4-q7",
            question: "Apache Camel 官方对其集成能力的描述是什么？",
            options: [
                "只支持 HTTP 集成",
                "实现了大多数 Enterprise Integration Patterns，支持多种消息系统集成",
                "只支持 Kafka",
                "只支持同步调用"
            ],
            answer: 1,
            rationale: "Apache Camel 官方：Camel 实现了大多数 Enterprise Integration Patterns，核心模式包括 Content-Based Router、Splitter、Aggregator、Message Bus 等，可以构建复杂的消息桥接逻辑。"
        },
        {
            id: "w4-4-q8",
            question: "Azure 文档列出的 Messaging Bridge 不适用场景有哪些？",
            options: [
                "需要集成遗留系统的场景",
                "系统依赖特定基础设施特有功能、需要同步集成及立即响应、有特定安全/隐私要求、数据量超过消息系统容量",
                "需要扩展本地应用至云端的场景",
                "地理分布式系统"
            ],
            answer: 1,
            rationale: "Azure 文档明确不适合的情况：系统依赖某个基础设施的特有功能、需要同步集成及立即响应、有特定的安全/隐私要求、数据量超过消息系统容量。"
        },
        {
            id: "w4-4-q9",
            question: "Azure 文档对队列拓扑提供了哪两种选项？",
            options: [
                "同步队列和异步队列",
                "单队列方式（指定桥接队列作为目标）和多队列对方式（为每个目标队列创建影子队列）",
                "FIFO 队列和标准队列",
                "本地队列和远程队列"
            ],
            answer: 1,
            rationale: "Azure 官方文档提供两种选项：单队列方式（指定桥接队列作为目标）和多队列对方式（为每个目标队列创建影子队列/Shadow Queue），选择取决于现有系统的改造难度。"
        },
        {
            id: "w4-4-q10",
            question: "EIP 文档对 Messaging Bridge 功能的描述是什么？",
            options: [
                "只复制消息内容",
                "'The bridge acts as map from one set of channels to the other, and also transforms the message format'——充当通道映射器并转换消息格式",
                "只传输消息不做任何转换",
                "仅用于消息过滤"
            ],
            answer: 1,
            rationale: "EIP 文档：'The bridge acts as a map from one set of channels to the other, and also transforms the message format of one system to the other'——桥充当通道映射器并转换消息格式。"
        },
        {
            id: "w4-4-q11",
            question: "Azure 文档对 Messaging Bridge 的 Well-Architected Framework 成本优化描述是什么？",
            options: [
                "降低开发成本",
                "延长现有系统生命周期，避免重写",
                "减少云服务费用",
                "降低测试成本"
            ],
            answer: 1,
            rationale: "Azure 官方 Well-Architected Framework 支持表明，成本优化方面：Messaging Bridge 可以'extend lifecycle of existing systems, avoid rewrites'——延长现有系统生命周期，避免昂贵的系统重写。"
        },
        {
            id: "w4-4-q12",
            question: "Azure 文档列出的 Messaging Bridge 适用场景有哪些？",
            options: [
                "只适用于云原生应用",
                "集成现有系统且修改需求最小、集成遗留应用、扩展本地应用至云端、地理分布式系统、增量迁移",
                "只适用于新开发的系统",
                "只适用于同一云平台内部"
            ],
            answer: 1,
            rationale: "Azure 文档适用场景：集成现有系统且修改需求最小、集成无法使用其他消息技术的遗留应用、扩展本地应用至云端组件、地理分布式系统、增量迁移从一个消息基础设施到另一个。"
        }
    ]
}
