import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "w3-1": {
        lessonId: "w3-1",
        background: [
            "【核心概念】Azure 官方文档：Queue-Based Load Leveling 模式'uses a queue as a buffer between tasks and services to smooth intermittent heavy loads'——使用队列作为任务和服务之间的缓冲区，平滑间歇性重负载，防止服务过载或超时。",
            "【问题背景】官方文档指出问题：'Services subjected to intermittent heavy loads experience performance and reliability issues'——承受间歇性重负载的服务会出现性能和可靠性问题。多个并发任务使请求量不可预测，导致服务过载甚至失败。",
            "【解决方案】官方文档描述方案：'Tasks post messages to a queue asynchronously'——任务异步地将消息发布到队列，队列存储消息直到服务检索它们，服务按自己的节奏处理消息，从而平滑可变的请求速率。",
            "【消息通道原理】Enterprise Integration Patterns 官方：'Connect the applications using a Message Channel, where one application writes information to the channel and the other one reads that information from the channel'——使用消息通道连接应用程序，一个应用写入信息，另一个读取。",
            "【AWS SQS 最佳实践】AWS 官方文档建议：使用死信队列（dead-letter queues）处理处理错误，应用消息去重策略防止重复处理，使用长轮询（long polling）减少空响应并提高效率。"
        ],
        keyDifficulties: [
            "【速率控制】官方文档强调：'Implement logic to control message processing rate to avoid overwhelming resources'——需要实现逻辑控制消息处理速率，避免压垮下游资源。自动扩展可能增加竞争并降低模式的有效性。",
            "【单向通信限制】官方文档警告：'Message queues are one-way; implement response mechanisms if needed'——消息队列是单向的。如果需要双向通信，必须实现响应机制（如回复队列或回调）。",
            "【积压风险】官方文档提醒：'System may continually lag behind incoming requests with high variability'——在高变异性情况下，系统可能持续落后于传入请求。需要监控队列深度并设置告警。",
            "【数据丢失防护】官方文档要求：'Consider queue persistence and guaranteed delivery requirements'——需要考虑队列持久化和消息送达保证。根据业务需求选择持久化模式和确认机制。",
            "【架构支柱对齐】官方文档说明 Well-Architected Framework 对齐：可靠性支柱——对需求峰值的弹性，解耦接收和处理；成本优化支柱——减少峰值负载配置需求；性能效率支柱——实现有意的吞吐量设计。"
        ],
        handsOnPath: [
            "使用 Azure Service Bus 或 AWS SQS 创建队列：在云控制台创建标准队列，配置消息保留期和可见性超时。使用 CLI 发送测试消息，观察消息在队列中的状态变化。",
            "实现简单的生产者-消费者模型：编写生产者应用发送消息到队列，编写消费者应用从队列读取消息。观察队列深度如何随生产和消费速率变化。",
            "模拟负载峰值场景：在短时间内发送大量消息（模拟流量峰值），观察队列如何缓冲消息。调整消费者数量，观察队列深度如何恢复到正常水平。",
            "配置死信队列（DLQ）：创建死信队列，配置主队列的重试策略和 DLQ 关联。故意发送会导致处理失败的消息，观察消息如何进入 DLQ。",
            "使用 Azure Functions 或 AWS Lambda 实现消费者：配置函数使用队列触发器，观察无服务器平台如何根据队列深度自动扩展消费者实例。"
        ],
        selfCheck: [
            "Queue-Based Load Leveling 模式解决什么问题？为什么说消息队列是'任务和服务之间的缓冲区'？",
            "官方文档提到的四个主要收益是什么？每个收益如何体现？",
            "为什么官方文档说'自动扩展可能增加竞争并降低有效性'？什么情况下应该谨慎使用自动扩展？",
            "消息队列是单向通信机制，如果需要返回处理结果给调用方，应该如何设计？",
            "官方文档说'在高变异性情况下系统可能持续落后'，如何监控和解决这个问题？"
        ],
        extensions: [
            "研究 Azure Service Bus 的高级特性：分区队列提高吞吐量，会话（Sessions）支持有序处理，自动转发（Auto-forward）构建消息流水线。",
            "学习 AWS SQS 的 FIFO 队列：了解如何保证消息顺序，消息去重的工作原理，以及与标准队列的性能差异。",
            "探索消息格式设计：研究消息体的最佳实践，包括消息版本控制、元数据设计、消息大小限制和分块传输。",
            "学习可观测性最佳实践：配置队列深度监控和告警，实现消息追踪和端到端延迟监控，建立 SLO 和 SLA 指标。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling",
            "https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageChannel.html",
            "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-best-practices.html"
        ]
    },
    "w3-2": {
        lessonId: "w3-2",
        background: [
            "【核心概念】Azure 官方文档：Competing Consumers 模式'enables multiple concurrent consumers to process messages from the same messaging channel'——允许多个并发消费者处理同一消息通道的消息，优化吞吐量、可扩展性和可用性。",
            "【问题背景】官方文档指出：'Cloud applications handle large, variable request volumes'——云应用处理大量可变的请求量，单个消费者实例可能在峰值负载时成为瓶颈。工作负载波动显著（峰值每秒数百个请求，低谷几乎没有）。",
            "【解决方案】官方文档描述：'Use a message queue as a communication channel between the application and multiple consumer service instances'——使用消息队列作为应用和多个消费者服务实例之间的通信通道。队列分发工作并确保每条消息只传递给一个消费者。",
            "【EIP 核心观点】Enterprise Integration Patterns 官方：'Create multiple Competing Consumers on a single channel so that the consumers can process multiple messages concurrently'——在单个通道上创建多个竞争消费者，使消费者能够并发处理多条消息。",
            "【Kafka 消费者组】Confluent 官方文档：'each partition is consumed by exactly one consumer within each consumer group at any given time'——在任何给定时间，每个分区只被消费者组内的一个消费者消费。组协调器（Group coordinator）管理负载分配和成员变更时的重平衡。"
        ],
        keyDifficulties: [
            "【消息顺序】官方文档警告：'Message ordering is not guaranteed; design for idempotent processing'——消息顺序不保证。必须设计幂等处理逻辑，同一消息处理多次的结果应与处理一次相同。",
            "【毒消息处理】官方文档强调：'Route malformed/failing messages to dead-letter queues'——将格式错误或持续失败的消息路由到死信队列。防止毒消息阻塞正常消息处理。",
            "【EIP 重要限制】EIP 官方文档警告：'This pattern only functions with Point-to-Point Channels. Using it with Publish-Subscribe Channels simply duplicates messages'——此模式仅适用于点对点通道，在发布订阅通道上使用只会复制消息而非分发。",
            "【Kafka 分区限制】Confluent 官方文档说明：消费者数量不能超过分区数量。'the number of competing consumers cannot exceed the number of available partitions'——如果消费者多于分区，多余的消费者将处于空闲状态。",
            "【重平衡开销】Confluent 官方文档：Kafka 支持两种重平衡协议——经典协议（客户端分配）和消费者协议（4.0 引入，服务端分配）。新协议减少了重平衡期间的中断，但仍需理解其影响。"
        ],
        handsOnPath: [
            "创建多消费者应用：在 Azure Service Bus 或 AWS SQS 上配置队列，启动多个消费者实例处理同一队列。观察消息如何分配给不同的消费者。",
            "测试负载均衡效果：发送大量消息到队列，监控每个消费者处理的消息数量。调整消费者数量，观察吞吐量变化。",
            "实现 Kafka 消费者组：创建 Kafka 主题（多分区），编写消费者应用指定相同的 group.id。观察分区如何分配给消费者，测试增减消费者时的重平衡行为。",
            "处理消费者故障：运行多个消费者后，主动终止其中一个。观察消息是否被其他消费者接管，验证'没有消息丢失'的特性。",
            "配置 PeekLock 模式（Azure Service Bus）：使用 PeekLock 而非 ReceiveAndDelete 模式，实现消息确认机制。模拟处理失败场景，观察消息如何返回队列被其他消费者重新处理。"
        ],
        selfCheck: [
            "Competing Consumers 模式与 Pub/Sub 模式的本质区别是什么？为什么前者适合负载均衡而后者适合事件广播？",
            "官方文档说'消息顺序不保证'，如果业务确实需要顺序处理应该怎么办？",
            "什么是'毒消息'？为什么需要死信队列？如何设计毒消息的处理流程？",
            "Kafka 消费者组中，消费者数量超过分区数量会怎样？如何合理规划分区数和消费者数？",
            "官方文档提到的五个关键收益分别是什么？每个收益如何体现？"
        ],
        extensions: [
            "研究 Azure Service Bus 的 Session 功能：了解如何在 Competing Consumers 基础上保证特定会话的消息顺序，适用于需要按客户或订单分组处理的场景。",
            "学习 Kafka 消费者偏移量管理：理解 offset 的提交时机（自动 vs 手动），at-least-once 和 at-most-once 语义的实现，以及 exactly-once 语义的挑战。",
            "探索无服务器实现：使用 Azure Functions 或 AWS Lambda 实现消费者，了解云平台如何根据队列深度自动扩展消费者实例。",
            "研究消费者预取（Prefetch）策略：了解预取如何提高吞吐量，但也可能影响负载均衡的公平性。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/competing-consumers",
            "https://www.enterpriseintegrationpatterns.com/patterns/messaging/CompetingConsumers.html",
            "https://docs.confluent.io/kafka/design/consumer-design.html"
        ]
    },
    "w3-3": {
        lessonId: "w3-3",
        background: [
            "【核心概念】Azure 官方文档：Priority Queue 模式'enables workloads to process high-priority tasks before lower-priority ones, rather than following first-in-first-out (FIFO) order'——使工作负载能够在低优先级任务之前处理高优先级任务，而不是遵循先进先出顺序。",
            "【问题背景】官方文档说明：'Workloads need to manage tasks with varying levels of importance and urgency'——工作负载需要管理具有不同重要性和紧迫性级别的任务。传统 FIFO 队列不考虑任务的关键性，可能导致 SLA 违约。",
            "【两种实现方式】官方文档描述两种方案：1) 单队列——所有消息发送到一个队列，每条消息分配优先级；2) 多队列——每个优先级级别使用单独的队列，消息根据优先级定向到适当的队列。",
            "【RabbitMQ 实现】RabbitMQ 官方文档：优先级队列'deliver messages in the order of message priorities'——按消息优先级顺序投递消息。经典队列支持 0-255 范围，但'using a single digit number of priorities is highly recommended'——强烈建议使用个位数的优先级数量以减少资源开销。",
            "【仲裁队列简化】RabbitMQ 官方文档：'Quorum Queues internally simplify to two tiers—normal (0-4) and high (5+)'——仲裁队列内部简化为两层：普通（0-4）和高（5+），降低复杂性同时保持优先级功能。"
        ],
        keyDifficulties: [
            "【多队列策略选择】官方文档提供两种多队列实现：1) 多消费者池——每个队列有专用消费者资源；2) 单消费者池——共享消费者优先处理高优先级队列。选择取决于隔离需求、成本和复杂性权衡。",
            "【饥饿预防】RabbitMQ 官方文档：'RabbitMQ prevents resource starvation by cycling through priority levels'——通过轮询优先级级别防止资源饥饿，确保低优先级消息最终被投递。需要在优先级和公平性之间平衡。",
            "【消费者预取影响】RabbitMQ 官方文档警告：'Messages may wait behind lower-priority ones if consumer prefetch limits are exhausted'——如果消费者预取限制用尽，消息可能在低优先级消息后面等待。必须使用 basic.qos 在手动确认模式下启用优先级。",
            "【策略限制】RabbitMQ 官方文档：'Policies cannot be used to configure priorities because policies are dynamic'——策略不能用于配置优先级，因为策略是动态的，而优先级计数在声明后不能更改。",
            "【优先级老化】Azure 官方文档建议：'Implement aging: increase priority of old low-priority messages'——实现老化机制，提高旧的低优先级消息的优先级以确保最终处理。"
        ],
        handsOnPath: [
            "创建 RabbitMQ 优先级队列：使用 RabbitMQ 管理界面或代码声明带有 x-max-priority 参数的队列。发送不同优先级的消息，观察消费顺序。",
            "实现多队列优先级系统：创建 high-priority 和 low-priority 两个队列。编写消费者优先从高优先级队列读取，只有高优先级队列为空时才处理低优先级队列。",
            "测试预取对优先级的影响：配置不同的 prefetch count，发送混合优先级的消息。观察预取设置如何影响消息的实际处理顺序。",
            "模拟 SLA 场景：定义高优先级任务必须在 10 秒内处理的 SLA。发送混合优先级的负载，监控高优先级任务的处理时间是否满足 SLA。",
            "使用 Azure Service Bus 实现：创建两个队列（high/low priority），使用 Azure Functions 配置不同的触发器，观察消息处理行为。"
        ],
        selfCheck: [
            "单队列方案和多队列方案各有什么优缺点？什么场景下应该选择哪种方案？",
            "RabbitMQ 为什么'强烈建议使用个位数的优先级数量'？过多的优先级级别会带来什么问题？",
            "什么是优先级饥饿？RabbitMQ 如何防止低优先级消息永远得不到处理？",
            "消费者预取（prefetch）设置为什么会影响优先级队列的行为？应该如何配置？",
            "官方文档建议实现'优先级老化'，这是什么意思？为什么需要这个机制？"
        ],
        extensions: [
            "研究 Kafka 的优先级实现：Kafka 原生不支持优先级队列，了解如何通过多主题或分区策略模拟优先级行为。",
            "探索动态优先级调整：研究如何根据消息等待时间、系统负载或业务规则动态调整消息优先级。",
            "学习 RabbitMQ 的替代方案：官方文档建议'consider multiple separate queues or streams'——考虑多个独立队列或流，了解何时这种方案优于优先级队列。",
            "研究 Java PriorityBlockingQueue：了解应用层面如何实现线程安全的优先级队列，适用于内存中的任务调度场景。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/priority-queue",
            "https://www.rabbitmq.com/priority.html",
            "https://www.baeldung.com/java-priority-blocking-queue"
        ]
    },
    "w3-4": {
        lessonId: "w3-4",
        background: [
            "【核心概念】Azure 官方文档：Sequential Convoy 模式'enables ordered processing of related messages while maintaining scalability across independent workers'——在保持跨独立工作者可扩展性的同时，实现相关消息的有序处理。",
            "【问题背景】官方文档举例：'Order tracking system where operations (create, add, modify, delete) must execute in FIFO order per order, but messages arrive interleaved for multiple orders'——订单跟踪系统中，每个订单的操作必须按 FIFO 顺序执行，但多个订单的消息交错到达。",
            "【解决方案】官方文档描述：'Push related messages into categories within the queuing system'——将相关消息推入队列系统中的类别。队列监听器锁定并一次从一个类别拉取，在该类别内逐条处理，同时允许不同类别并行处理。",
            "【消息序列模式】EIP 官方文档：'send the data as a Message Sequence and mark each message with sequence identification fields'——将数据作为消息序列发送，并用序列标识字段标记每条消息。包含三个关键字段：序列标识符、位置标识符、大小或结束指示符。",
            "【Kafka 顺序保证】Confluent 官方文档：Kafka 在单个分区内保证严格的 FIFO 顺序。使用相同键的消息总是发送到同一分区，从而确保该键的所有消息有序。"
        ],
        keyDifficulties: [
            "【类别/扩展单元设计】官方文档提问：'What message property enables scaling?'——什么消息属性能够实现扩展？例如订单 ID、客户 ID。选择正确的分类属性是设计关键。",
            "【吞吐量权衡】官方文档警告：'Very high throughput may conflict with FIFO requirements'——非常高的吞吐量可能与 FIFO 要求冲突。'Extremely high throughput (millions of messages/minute)—FIFO requirements limit scaling'——FIFO 要求限制了扩展能力。",
            "【乱序风险】官方文档提醒：'Network latency may cause out-of-order delivery; use sequence numbers or end of sequence flags'——网络延迟可能导致乱序投递，需要使用序列号或'序列结束'标志来检测和处理。",
            "【EIP 三个关键字段】EIP 官方文档定义：1) Sequence identifier——区分不同的消息组；2) Position identifier——建立顺序和唯一性；3) Size or End indicator——指定总消息数或标记最后一条消息。",
            "【服务能力要求】官方文档强调：'Queue system must support one-at-a-time category processing'——队列系统必须支持一次一个类别的处理。Azure Service Bus 的 Sessions 功能专门支持这种模式。"
        ],
        handsOnPath: [
            "使用 Azure Service Bus Sessions：创建启用会话的 Service Bus 队列，发送带有 SessionId（如订单 ID）的消息。观察如何按会话分组和顺序处理消息。",
            "实现 Kafka 键分区策略：创建多分区 Kafka 主题，发送带有相同键的消息。验证同一键的消息总是到达同一分区并按顺序处理。",
            "模拟订单处理场景：模拟多个订单的并发操作（创建、添加商品、修改、删除）。验证每个订单的操作按正确顺序执行，同时不同订单可以并行处理。",
            "测试乱序场景：人为引入网络延迟或重试，观察消息是否乱序到达。实现序列号检测和处理乱序消息的逻辑。",
            "实现 Ledger 队列架构（参考 Azure 示例）：创建主队列接收所有交易，Ledger Processor 按订单 ID 设置 SessionId 并发送到二级队列，多个消费者按会话处理。"
        ],
        selfCheck: [
            "Sequential Convoy 模式与简单的 FIFO 队列有什么区别？为什么需要'类别'的概念？",
            "官方文档说'非常高的吞吐量可能与 FIFO 要求冲突'，这是什么意思？如何权衡？",
            "EIP 定义的消息序列三个标识字段各有什么作用？为什么都需要？",
            "如何选择正确的消息分类属性（扩展单元）？选择不当会带来什么问题？",
            "Azure Service Bus 的 Sessions 功能如何支持 Sequential Convoy 模式？与 Kafka 分区策略有什么异同？"
        ],
        extensions: [
            "研究 Azure Durable Functions：了解如何使用 Durable Functions 实现有状态的顺序工作流，作为 Sequential Convoy 的替代方案。",
            "探索 CQRS 结合 Event Sourcing：这种模式天然需要事件的顺序处理，了解如何设计事件存储和重放机制。",
            "学习分布式事务的顺序问题：研究 Saga 模式中如何处理跨服务的操作顺序，以及补偿事务的执行顺序。",
            "研究 Kafka Streams 的窗口操作：了解如何在流处理中处理乱序到达的事件，包括水印（Watermark）和延迟容忍。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/sequential-convoy",
            "https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageSequence.html",
            "https://docs.confluent.io/kafka/design/consumer-design.html"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "w3-1": [
        {
            id: "w3-1-q1",
            question: "Azure 官方文档对 Queue-Based Load Leveling 模式的定义是什么？",
            options: [
                "一种数据库分片策略",
                "'uses a queue as a buffer between tasks and services to smooth intermittent heavy loads'——使用队列作为缓冲区平滑间歇性重负载",
                "一种负载均衡算法",
                "一种缓存策略"
            ],
            answer: 1,
            rationale: "Azure 官方文档明确定义：Queue-Based Load Leveling 模式'uses a queue as a buffer between tasks and services to smooth intermittent heavy loads'——使用队列作为任务和服务之间的缓冲区，平滑间歇性重负载。"
        },
        {
            id: "w3-1-q2",
            question: "根据官方文档，Queue-Based Load Leveling 模式解决什么问题？",
            options: [
                "数据一致性问题",
                "安全认证问题",
                "'Services subjected to intermittent heavy loads experience performance and reliability issues'——服务承受间歇性重负载时的性能和可靠性问题",
                "网络延迟问题"
            ],
            answer: 2,
            rationale: "官方文档指出问题背景：'Services subjected to intermittent heavy loads experience performance and reliability issues'——承受间歇性重负载的服务会出现性能和可靠性问题。"
        },
        {
            id: "w3-1-q3",
            question: "Enterprise Integration Patterns 对 Message Channel 的描述是什么？",
            options: [
                "'Connect the applications using a Message Channel, where one application writes information to the channel and the other one reads'",
                "消息通道是一种数据库连接",
                "消息通道只能单向通信",
                "消息通道必须使用 HTTP 协议"
            ],
            answer: 0,
            rationale: "EIP 官方文档描述：'Connect the applications using a Message Channel, where one application writes information to the channel and the other one reads that information from the channel'。"
        },
        {
            id: "w3-1-q4",
            question: "根据官方文档，该模式对可靠性（Reliability）支柱的支持是什么？",
            options: [
                "减少代码复杂度",
                "提高数据库性能",
                "'Resilience against demand spikes; decouples intake from processing'——对需求峰值的弹性，解耦接收和处理",
                "增强安全性"
            ],
            answer: 2,
            rationale: "官方文档在 Well-Architected Framework 对齐部分说明：可靠性支柱——'Resilience against demand spikes; decouples intake from processing'——对需求峰值的弹性，解耦接收和处理。"
        },
        {
            id: "w3-1-q5",
            question: "官方文档对'自动扩展'的警告是什么？",
            options: [
                "自动扩展总是最佳选择",
                "'Autoscaling can increase contention and reduce effectiveness'——自动扩展可能增加竞争并降低有效性",
                "自动扩展不支持消息队列",
                "自动扩展会增加成本"
            ],
            answer: 1,
            rationale: "官方文档警告：'Autoscaling Caution: Autoscaling can increase contention and reduce effectiveness'——自动扩展可能增加资源竞争并降低模式的有效性。"
        },
        {
            id: "w3-1-q6",
            question: "AWS SQS 最佳实践建议如何处理消息处理错误？",
            options: [
                "忽略错误继续处理",
                "立即停止所有消费者",
                "使用死信队列（dead-letter queues）捕获和管理失败的消息",
                "重新发送到原队列"
            ],
            answer: 2,
            rationale: "AWS 官方文档最佳实践建议：实现'dead-letter queues to handle processing errors'——使用死信队列处理处理错误，捕获和管理失败的消息。"
        },
        {
            id: "w3-1-q7",
            question: "官方文档对该模式的成本优化（Cost Optimization）收益描述是什么？",
            options: [
                "减少服务器数量",
                "'Reduces need for peak-load provisioning'——减少峰值负载配置需求",
                "降低网络费用",
                "减少存储成本"
            ],
            answer: 1,
            rationale: "官方文档 Well-Architected Framework 对齐中说明：成本优化支柱——'Reduces need for peak-load provisioning'——服务只需要为平均负载配置容量，而非峰值负载。"
        },
        {
            id: "w3-1-q8",
            question: "根据官方文档，什么情况下不应使用 Queue-Based Load Leveling 模式？",
            options: [
                "当工作负载很高时",
                "'Application requires immediate responses with minimal latency'——应用需要最小延迟的即时响应时",
                "当使用云服务时",
                "当有多个消费者时"
            ],
            answer: 1,
            rationale: "官方文档明确指出不适用场景：'Don't use when: Application requires immediate responses with minimal latency'——当应用需要最小延迟的即时响应时不应使用。"
        },
        {
            id: "w3-1-q9",
            question: "官方文档对消息队列通信方向的说明是什么？",
            options: [
                "消息队列支持双向通信",
                "'Message queues are one-way; implement response mechanisms if needed'——消息队列是单向的，如需响应需要单独实现",
                "消息队列自动支持回复",
                "只有 FIFO 队列支持双向"
            ],
            answer: 1,
            rationale: "官方文档实现考虑中说明：'Two-Way Communication: Message queues are one-way; implement response mechanisms if needed'——消息队列是单向的，如需双向通信需要实现响应机制。"
        },
        {
            id: "w3-1-q10",
            question: "官方文档对'积压风险'的描述是什么？",
            options: [
                "积压不会影响系统",
                "'System may continually lag behind incoming requests with high variability'——在高变异性情况下系统可能持续落后于传入请求",
                "积压只影响低优先级消息",
                "积压可以通过增加队列大小解决"
            ],
            answer: 1,
            rationale: "官方文档警告：'Backlog Risk: System may continually lag behind incoming requests with high variability'——在高变异性情况下，系统可能持续落后于传入请求。"
        },
        {
            id: "w3-1-q11",
            question: "AWS SQS 最佳实践建议使用什么来减少空响应？",
            options: [
                "短轮询",
                "消息批处理",
                "'Use long polling to reduce empty responses and improve efficiency'——使用长轮询减少空响应并提高效率",
                "增加队列数量"
            ],
            answer: 2,
            rationale: "AWS 官方文档最佳实践建议：'Use long polling to reduce empty responses and improve efficiency'——使用长轮询减少空响应并提高效率。"
        },
        {
            id: "w3-1-q12",
            question: "官方文档对性能效率（Performance Efficiency）支柱的支持描述是什么？",
            options: [
                "提高代码执行速度",
                "'Enables intentional throughput design; request intake doesn't correlate to processing rate'——实现有意的吞吐量设计，请求接收与处理速率不相关",
                "减少内存使用",
                "优化数据库查询"
            ],
            answer: 1,
            rationale: "官方文档说明：性能效率支柱——'Enables intentional throughput design; request intake doesn't correlate to processing rate'——实现有意的吞吐量设计，请求接收与处理速率不相关。"
        }
    ],
    "w3-2": [
        {
            id: "w3-2-q1",
            question: "Azure 官方文档对 Competing Consumers 模式的定义是什么？",
            options: [
                "多个消费者订阅不同的主题",
                "'enables multiple concurrent consumers to process messages from the same messaging channel'——允许多个并发消费者处理同一消息通道的消息",
                "消费者之间相互竞争资源",
                "只有一个消费者可以处理消息"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：Competing Consumers 模式'enables multiple concurrent consumers to process messages from the same messaging channel'——允许多个并发消费者处理同一消息通道的消息。"
        },
        {
            id: "w3-2-q2",
            question: "EIP 官方文档对 Competing Consumers 的核心描述是什么？",
            options: [
                "'Create multiple Competing Consumers on a single channel so that the consumers can process multiple messages concurrently'",
                "消费者必须使用不同的通道",
                "每条消息被所有消费者处理",
                "消费者按优先级排序"
            ],
            answer: 0,
            rationale: "EIP 官方文档描述：'Create multiple Competing Consumers on a single channel so that the consumers can process multiple messages concurrently'——在单个通道上创建多个竞争消费者并发处理消息。"
        },
        {
            id: "w3-2-q3",
            question: "EIP 官方文档对该模式的重要限制是什么？",
            options: [
                "只能用于 HTTP 通信",
                "'This pattern only functions with Point-to-Point Channels. Using it with Publish-Subscribe Channels simply duplicates messages'",
                "只能有两个消费者",
                "不支持消息持久化"
            ],
            answer: 1,
            rationale: "EIP 官方文档警告：'This pattern only functions with Point-to-Point Channels. Using it with Publish-Subscribe Channels simply duplicates messages rather than distributing them'。"
        },
        {
            id: "w3-2-q4",
            question: "Confluent 官方文档对 Kafka 消费者组分区分配的描述是什么？",
            options: [
                "每个分区可以被多个消费者同时消费",
                "'each partition is consumed by exactly one consumer within each consumer group at any given time'——每个分区在任何时刻只被组内一个消费者消费",
                "分区和消费者没有对应关系",
                "消费者可以选择任意分区"
            ],
            answer: 1,
            rationale: "Confluent 官方文档明确说明：'each partition is consumed by exactly one consumer within each consumer group at any given time'——在任何给定时间，每个分区只被消费者组内的一个消费者消费。"
        },
        {
            id: "w3-2-q5",
            question: "官方文档对消息顺序的说明是什么？",
            options: [
                "消息顺序总是保证的",
                "'Message ordering is not guaranteed; design for idempotent processing'——消息顺序不保证，需要设计幂等处理",
                "只有第一条消息顺序保证",
                "顺序由消费者数量决定"
            ],
            answer: 1,
            rationale: "官方文档实现考虑中说明：'Message Ordering: Not guaranteed; design for idempotent processing'——消息顺序不保证，需要设计幂等处理逻辑。"
        },
        {
            id: "w3-2-q6",
            question: "官方文档建议如何处理毒消息（Poison Messages）？",
            options: [
                "忽略这些消息",
                "'Route malformed/failing messages to dead-letter queues'——将格式错误或失败的消息路由到死信队列",
                "立即重试处理",
                "删除这些消息"
            ],
            answer: 1,
            rationale: "官方文档实现考虑：'Poison Messages: Route malformed/failing messages to dead-letter queues'——将格式错误或持续失败的消息路由到死信队列。"
        },
        {
            id: "w3-2-q7",
            question: "Confluent 文档对 Kafka offset 的定义是什么？",
            options: [
                "消息的大小",
                "'a unique identifier, an integer, which marks the next record that should be read by the consumer in a partition'——标记消费者在分区中应读取的下一条记录的唯一整数标识符",
                "消费者的 ID",
                "分区的数量"
            ],
            answer: 1,
            rationale: "Confluent 官方文档定义：offset 是'a unique identifier, an integer, which marks the next record that should be read by the consumer in a partition'——标记消费者在分区中应读取的下一条记录的唯一整数标识符。"
        },
        {
            id: "w3-2-q8",
            question: "根据官方文档，什么情况下不应使用 Competing Consumers 模式？",
            options: [
                "当消息量很大时",
                "当使用云服务时",
                "'Tasks are tightly dependent with high interdependence'——任务之间高度相互依赖时",
                "当需要高可用时"
            ],
            answer: 2,
            rationale: "官方文档指出不适用场景：'Avoid when: Tasks are tightly dependent with high interdependence'——当任务之间高度相互依赖时不应使用该模式。"
        },
        {
            id: "w3-2-q9",
            question: "Confluent 文档对 Kafka 消费者组协调器的描述是什么？",
            options: [
                "消费者自行协调",
                "'A broker-side Group coordinator manages load distribution across group members'——服务端组协调器管理组成员间的负载分配",
                "生产者负责协调",
                "没有协调机制"
            ],
            answer: 1,
            rationale: "Confluent 官方文档说明：'A broker-side Group coordinator manages load distribution across group members and rebalancing when membership changes occur'——服务端组协调器管理负载分配和成员变更时的重平衡。"
        },
        {
            id: "w3-2-q10",
            question: "官方文档列出的 Competing Consumers 模式五个关键收益是什么？",
            options: [
                "安全、隔离、加密、压缩、监控",
                "Load Leveling、Reliability、Simple Coordination、Scalability、Resiliency",
                "速度、容量、成本、可用性、安全性",
                "部署、测试、监控、告警、恢复"
            ],
            answer: 1,
            rationale: "官方文档列出五个关键收益：Load Leveling（负载均衡）、Reliability（可靠性）、Simple Coordination（简单协调）、Scalability（可扩展性）、Resiliency（弹性）。"
        },
        {
            id: "w3-2-q11",
            question: "Confluent 文档提到 Kafka 支持哪两种重平衡协议？",
            options: [
                "HTTP 和 gRPC 协议",
                "Classic Protocol（经典协议）和 Consumer Protocol（消费者协议，4.0 引入）",
                "同步和异步协议",
                "TCP 和 UDP 协议"
            ],
            answer: 1,
            rationale: "Confluent 文档说明：Kafka 支持两种重平衡协议——Classic Protocol（客户端分配）和 Consumer Protocol（4.0 引入，服务端分配），新协议减少了重平衡期间的中断。"
        },
        {
            id: "w3-2-q12",
            question: "官方文档对 Azure Service Bus PeekLock 模式的描述是什么？",
            options: [
                "消息被立即删除",
                "'Hides message from other consumers; returns it if processing fails'——对其他消费者隐藏消息，处理失败时返回",
                "所有消费者都能看到消息",
                "消息被复制到所有消费者"
            ],
            answer: 1,
            rationale: "官方文档说明 Azure 实现关键特性：'PeekLock mode: Hides message from other consumers; returns it if processing fails'——对其他消费者隐藏消息，如果处理失败则返回队列。"
        }
    ],
    "w3-3": [
        {
            id: "w3-3-q1",
            question: "Azure 官方文档对 Priority Queue 模式的定义是什么？",
            options: [
                "按时间顺序处理消息",
                "'enables workloads to process high-priority tasks before lower-priority ones, rather than following FIFO order'——使工作负载能够在低优先级任务之前处理高优先级任务",
                "所有消息具有相同优先级",
                "只处理高优先级消息"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：Priority Queue 模式'enables workloads to process high-priority tasks before lower-priority ones, rather than following first-in-first-out (FIFO) order'。"
        },
        {
            id: "w3-3-q2",
            question: "RabbitMQ 官方文档对优先级数量的建议是什么？",
            options: [
                "使用尽可能多的优先级",
                "'using a single digit number of priorities is highly recommended'——强烈建议使用个位数的优先级数量",
                "必须使用 256 个优先级",
                "优先级数量不影响性能"
            ],
            answer: 1,
            rationale: "RabbitMQ 官方文档建议：经典队列支持 0-255 范围，但'using a single digit number of priorities is highly recommended'——强烈建议使用个位数的优先级数量以减少 CPU 和内存开销。"
        },
        {
            id: "w3-3-q3",
            question: "RabbitMQ 官方文档对 Quorum Queue 优先级的描述是什么？",
            options: [
                "不支持优先级",
                "'Quorum Queues internally simplify to two tiers—normal (0-4) and high (5+)'——内部简化为两层：普通和高",
                "支持 256 个优先级",
                "与经典队列相同"
            ],
            answer: 1,
            rationale: "RabbitMQ 官方文档说明：'Quorum Queues internally simplify to two tiers—normal (0-4) and high (5+)'——仲裁队列内部简化为两层：普通（0-4）和高（5+）。"
        },
        {
            id: "w3-3-q4",
            question: "RabbitMQ 官方文档如何描述饥饿预防机制？",
            options: [
                "不提供饥饿预防",
                "'RabbitMQ prevents resource starvation by cycling through priority levels'——通过轮询优先级级别防止资源饥饿",
                "低优先级消息永远不会被处理",
                "只在队列满时处理低优先级"
            ],
            answer: 1,
            rationale: "RabbitMQ 官方文档说明：'RabbitMQ prevents resource starvation by cycling through priority levels'——通过轮询优先级级别防止资源饥饿，确保低优先级消息最终被投递。"
        },
        {
            id: "w3-3-q5",
            question: "RabbitMQ 官方文档对消费者预取（prefetch）影响优先级的警告是什么？",
            options: [
                "预取不影响优先级",
                "'Messages may wait behind lower-priority ones if consumer prefetch limits are exhausted'——如果预取限制用尽，消息可能在低优先级消息后等待",
                "预取总是提高优先级效果",
                "预取只影响吞吐量"
            ],
            answer: 1,
            rationale: "RabbitMQ 官方文档警告：'Messages may wait behind lower-priority ones if consumer prefetch limits are exhausted'——如果消费者预取限制用尽，消息可能在低优先级消息后面等待。"
        },
        {
            id: "w3-3-q6",
            question: "官方文档描述的多队列优先级实现的两种方式是什么？",
            options: [
                "同步和异步方式",
                "Multiple Consumer Pools（多消费者池）和 Single Consumer Pool（单消费者池）",
                "HTTP 和 gRPC 方式",
                "本地和远程方式"
            ],
            answer: 1,
            rationale: "官方文档描述多队列两种实现：Multiple Consumer Pools——每个队列有专用消费者资源；Single Consumer Pool——共享消费者优先处理高优先级队列。"
        },
        {
            id: "w3-3-q7",
            question: "RabbitMQ 官方文档对策略配置优先级的说明是什么？",
            options: [
                "策略可以动态配置优先级",
                "'Policies cannot be used to configure priorities because policies are dynamic'——策略不能用于配置优先级因为策略是动态的",
                "策略是配置优先级的唯一方式",
                "策略优先于队列声明"
            ],
            answer: 1,
            rationale: "RabbitMQ 官方文档说明：'Policies cannot be used to configure priorities because policies are dynamic'——策略不能用于配置优先级，因为策略是动态的而优先级计数在声明后不能更改。"
        },
        {
            id: "w3-3-q8",
            question: "Azure 官方文档建议的'优先级老化'机制是什么？",
            options: [
                "删除老的消息",
                "'Implement aging: increase priority of old low-priority messages'——提高旧的低优先级消息的优先级以确保最终处理",
                "忽略老的消息",
                "将老消息移到另一个队列"
            ],
            answer: 1,
            rationale: "Azure 官方文档建议：'Implement aging: increase priority of old low-priority messages to ensure eventual processing'——实现老化机制，提高旧的低优先级消息的优先级以确保最终处理。"
        },
        {
            id: "w3-3-q9",
            question: "根据官方文档，什么场景适合使用单消费者池（Single Consumer Pool）？",
            options: [
                "需要严格性能隔离时",
                "'Simple management and setup needed; Similar processing characteristics for tasks'——需要简单管理且任务处理特性相似时",
                "处理大量消息时",
                "需要高可用时"
            ],
            answer: 1,
            rationale: "官方文档指出单消费者池适用场景：'Simple management and setup needed; Similar processing characteristics for tasks; Cost optimization priority'——需要简单管理、任务处理特性相似、成本优化优先时。"
        },
        {
            id: "w3-3-q10",
            question: "RabbitMQ 官方文档建议在采用优先级队列之前考虑什么替代方案？",
            options: [
                "使用更多消费者",
                "'consider multiple separate queues or streams'——考虑多个独立队列或流",
                "增加队列大小",
                "使用更快的硬件"
            ],
            answer: 1,
            rationale: "RabbitMQ 官方文档建议：'Before adopting priorities, consider multiple separate queues or streams, which often provide better parallelism and simpler reasoning about delivery order'。"
        },
        {
            id: "w3-3-q11",
            question: "官方文档对 Priority Queue 模式在可靠性（Reliability）支柱的支持描述是什么？",
            options: [
                "增加冗余",
                "'Focus resilience efforts on critical work; support critical flows'——将弹性工作重点放在关键工作上，支持关键流程",
                "自动故障转移",
                "数据备份"
            ],
            answer: 1,
            rationale: "官方文档 Well-Architected Framework 对齐说明：可靠性支柱——'Focus resilience efforts on critical work; support critical flows'——将弹性工作重点放在关键工作上。"
        },
        {
            id: "w3-3-q12",
            question: "如何在 RabbitMQ 中创建优先级队列？",
            options: [
                "使用特殊的队列名称",
                "通过声明队列时设置 x-max-priority 参数",
                "通过管理策略配置",
                "默认所有队列都支持优先级"
            ],
            answer: 1,
            rationale: "RabbitMQ 官方文档示例：使用 Java 客户端声明优先级队列时，设置'args.put(\"x-max-priority\", 4)'，然后调用 queueDeclare 创建队列。"
        }
    ],
    "w3-4": [
        {
            id: "w3-4-q1",
            question: "Azure 官方文档对 Sequential Convoy 模式的定义是什么？",
            options: [
                "所有消息按全局顺序处理",
                "'enables ordered processing of related messages while maintaining scalability across independent workers'——在保持可扩展性的同时实现相关消息的有序处理",
                "消息随机分配给工作者",
                "只处理最新的消息"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：Sequential Convoy 模式'enables ordered processing of related messages while maintaining scalability across independent workers'——在保持跨独立工作者可扩展性的同时，实现相关消息的有序处理。"
        },
        {
            id: "w3-4-q2",
            question: "EIP 官方文档对 Message Sequence 模式的三个关键字段是什么？",
            options: [
                "发送者、接收者、内容",
                "Sequence identifier（序列标识符）、Position identifier（位置标识符）、Size or End indicator（大小或结束指示符）",
                "时间戳、ID、优先级",
                "来源、目的地、路由"
            ],
            answer: 1,
            rationale: "EIP 官方文档定义三个关键字段：1) Sequence identifier——区分不同消息组；2) Position identifier——建立顺序和唯一性；3) Size or End indicator——指定总数或标记最后一条。"
        },
        {
            id: "w3-4-q3",
            question: "官方文档对'乱序风险'的描述是什么？",
            options: [
                "乱序不会发生",
                "'Network latency may cause out-of-order delivery; use sequence numbers or end of sequence flags'——网络延迟可能导致乱序，需使用序列号或结束标志",
                "乱序只影响低优先级消息",
                "消息系统会自动处理乱序"
            ],
            answer: 1,
            rationale: "官方文档提醒：'Out-of-Order Risk: Network latency may cause out-of-order delivery; use sequence numbers or end of sequence flags'——网络延迟可能导致乱序投递，需要使用序列号或结束标志。"
        },
        {
            id: "w3-4-q4",
            question: "官方文档对高吞吐量与 FIFO 要求的关系描述是什么？",
            options: [
                "两者没有冲突",
                "'Very high throughput may conflict with FIFO requirements'——非常高的吞吐量可能与 FIFO 要求冲突",
                "高吞吐量总是优先",
                "FIFO 提高吞吐量"
            ],
            answer: 1,
            rationale: "官方文档警告：'Throughput: Very high throughput may conflict with FIFO requirements'——非常高的吞吐量可能与 FIFO 要求冲突，'FIFO requirements limit scaling'。"
        },
        {
            id: "w3-4-q5",
            question: "Confluent 官方文档对 Kafka 分区内消息顺序的描述是什么？",
            options: [
                "不保证任何顺序",
                "Kafka 在单个分区内保证严格的 FIFO 顺序，使用相同键的消息总是发送到同一分区",
                "顺序由消费者决定",
                "只保证生产者顺序"
            ],
            answer: 1,
            rationale: "Confluent 官方文档说明：Kafka 在单个分区内保证严格的 FIFO 顺序。使用相同键的消息总是发送到同一分区，从而确保该键的所有消息有序。"
        },
        {
            id: "w3-4-q6",
            question: "官方文档对'类别/扩展单元'设计的关键问题是什么？",
            options: [
                "'What message property enables scaling?'——什么消息属性能够实现扩展？",
                "使用什么编程语言",
                "选择什么云平台",
                "需要多少服务器"
            ],
            answer: 0,
            rationale: "官方文档实现考虑中的关键问题：'Category/Scale Unit: What message property enables scaling?'——什么消息属性能够实现扩展？例如订单 ID、客户 ID。"
        },
        {
            id: "w3-4-q7",
            question: "EIP 官方文档对 Message Sequence 模式解决什么问题的描述是什么？",
            options: [
                "消息加密问题",
                "'My application needs to send a huge amount of data to another process, more than may fit in a single message'——应用需要发送大量数据，超过单条消息容量",
                "消息路由问题",
                "消息格式转换"
            ],
            answer: 1,
            rationale: "EIP 官方文档描述问题：'My application needs to send a huge amount of data to another process, more than may fit in a single message'——应用需要发送大量数据，超过单条消息容量。"
        },
        {
            id: "w3-4-q8",
            question: "官方文档对服务能力的要求是什么？",
            options: [
                "任何队列系统都可以",
                "'Queue system must support one-at-a-time category processing'——队列系统必须支持一次一个类别的处理",
                "只需要高吞吐量",
                "只需要持久化"
            ],
            answer: 1,
            rationale: "官方文档实现考虑：'Service Capabilities: Queue system must support one-at-a-time category processing'——队列系统必须支持一次一个类别的处理。Azure Service Bus Sessions 专门支持这种模式。"
        },
        {
            id: "w3-4-q9",
            question: "官方文档描述的 Azure 示例架构中，Ledger Processor 的作用是什么？",
            options: [
                "存储所有交易",
                "读取每个交易，设置 Session ID = Order ID，发送到二级队列",
                "直接处理订单",
                "监控队列深度"
            ],
            answer: 1,
            rationale: "官方文档示例架构说明：Ledger Processor 读取每个交易，按订单 ID 设置 SessionId，发送到按 Order ID（session）组织的二级队列，多个消费者按会话顺序处理。"
        },
        {
            id: "w3-4-q10",
            question: "根据官方文档，什么情况下不应使用 Sequential Convoy 模式？",
            options: [
                "当需要顺序处理时",
                "当消息量较小时",
                "'Extremely high throughput (millions of messages/minute or second)—FIFO requirements limit scaling'——极高吞吐量时，FIFO 要求限制扩展",
                "当使用云服务时"
            ],
            answer: 2,
            rationale: "官方文档指出不适用场景：'Avoid when: Extremely high throughput (millions of messages/minute or second)—FIFO requirements limit scaling'——极高吞吐量场景，FIFO 要求限制扩展能力。"
        },
        {
            id: "w3-4-q11",
            question: "官方文档对 Well-Architected Framework 可靠性支柱的支持描述是什么？",
            options: [
                "自动故障转移",
                "'Eliminates race conditions in message ordering; Prevents incorrectly ordered message processing'——消除消息排序中的竞态条件，防止消息处理顺序错误",
                "数据冗余备份",
                "负载均衡"
            ],
            answer: 1,
            rationale: "官方文档 Well-Architected Framework 对齐说明：可靠性支柱——'Eliminates race conditions in message ordering; Prevents incorrectly ordered message processing'——消除竞态条件，防止顺序错误。"
        },
        {
            id: "w3-4-q12",
            question: "官方文档推荐的 Azure 技术栈是什么？",
            options: [
                "Azure Cosmos DB 和 Azure Functions",
                "Azure Service Bus message sessions 和 Azure Functions/Logic Apps",
                "Azure Event Hubs 和 Azure Batch",
                "Azure Storage Queue 和 Azure Container Instances"
            ],
            answer: 1,
            rationale: "官方文档 Azure 实现推荐技术栈：消息总线使用 Azure Service Bus message sessions，消费者使用 Logic Apps（带 Service Bus peek-lock connector）或 Azure Functions（带 Service Bus trigger）。"
        }
    ]
}
