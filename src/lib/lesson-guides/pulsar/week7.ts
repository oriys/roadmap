import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "pulsar-w7-1": {
        lessonId: "pulsar-w7-1",
        background: [
            "【同步发送机制】官方文档：Producer.send() 方法会阻塞等待 Broker 确认，返回 MessageId 表示消息已成功持久化到 BookKeeper。同步发送适合对可靠性要求高的场景。",
            "【异步发送机制】Producer.sendAsync() 方法立即返回 CompletableFuture<MessageId>，不阻塞调用线程。通过回调或 Future 处理发送结果，适合高吞吐场景。",
            "【发送超时配置】官方文档：sendTimeout 配置控制发送操作的超时时间，默认 30 秒。超时后会触发重试或返回异常，需要根据网络状况合理配置。",
            "【Pending Queue】异步发送时消息先进入 Pending Queue，当队列满时新发送会阻塞或失败。maxPendingMessages 配置控制队列大小，默认 1000。",
            "【发送确认语义】Broker 确认意味着消息已写入 BookKeeper 的多个副本（由 Write Quorum 和 Ack Quorum 决定），而非仅写入单节点。"
        ],
        keyDifficulties: [
            "【同步 vs 异步选择】同步发送简单可靠但吞吐低，异步发送吞吐高但需要正确处理回调异常。高吞吐场景应使用异步发送配合批量发送。",
            "【异步发送错误处理】异步发送的异常需要在回调中处理，常见错误包括：ProducerQueueIsFullError（队列满）、TimeoutException（超时）、TopicDoesNotExistException 等。",
            "【背压处理】当 Pending Queue 满时，可选择 blockIfQueueFull(true) 阻塞等待，或让发送立即失败。需要根据业务容忍度选择。",
            "【发送重试机制】Producer 内置重试机制，可通过 sendRetries 配置重试次数。但重试可能导致消息重复，需要配合消息去重使用。"
        ],
        handsOnPath: [
            "编写对比测试：分别使用同步和异步方式发送 10000 条消息，对比发送耗时和吞吐量差异。",
            "实现异步发送的完整错误处理：捕获各种异常，记录日志，实现重试逻辑。",
            "测试 Pending Queue 满的场景：设置较小的 maxPendingMessages，高速发送消息观察行为。",
            "使用 blockIfQueueFull 配置，观察背压时生产者的表现。"
        ],
        selfCheck: [
            "同步发送和异步发送的返回值分别是什么？各自适用什么场景？",
            "异步发送时消息存储在哪里等待发送？队列满了会怎样？",
            "sendTimeout 配置的作用是什么？超时后会发生什么？",
            "如何正确处理异步发送的异常？需要捕获哪些常见异常？",
            "Producer 的发送重试机制是怎样的？重试可能带来什么问题？"
        ],
        extensions: [
            "研究 Pulsar 客户端的线程模型，了解异步发送如何利用 Netty 的事件循环。",
            "探索 Producer 的 interceptor 机制，实现发送前后的自定义逻辑。",
            "学习如何使用 OpenTelemetry 追踪异步发送的完整链路。",
            "研究 Producer 的内存管理，了解消息缓冲如何影响 GC。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/client-libraries-java/#producer",
            "https://pulsar.apache.org/docs/client-libraries-java/#configure-producer"
        ]
    },
    "pulsar-w7-2": {
        lessonId: "pulsar-w7-2",
        background: [
            "【批量发送原理】官方文档：当启用 batching 时，Producer 将多条消息打包成一个批次发送，减少网络往返次数，显著提高吞吐量。",
            "【批量触发条件】批次发送由三个条件触发（满足任一即发送）：batchingMaxMessages（消息数量）、batchingMaxBytes（字节大小）、batchingMaxPublishDelay（等待时间）。",
            "【默认批量配置】官方文档：默认启用 batching，batchingMaxPublishDelay 默认 1ms，batchingMaxMessages 默认 1000，batchingMaxBytes 默认 128KB。",
            "【批量与消息 ID】批量发送的消息共享同一个 Ledger Entry，每条消息通过 batchIndex 区分。MessageId 格式：ledgerId:entryId:partitionIndex:batchIndex。",
            "【批量发送与压缩】批量发送与消息压缩配合使用效果更佳，整个批次一起压缩可以获得更高的压缩率。"
        ],
        keyDifficulties: [
            "【延迟与吞吐权衡】batchingMaxPublishDelay 越大，批次越大，吞吐越高，但单条消息延迟也越高。需要根据业务对延迟的容忍度调整。",
            "【批量与顺序保证】同一批次内的消息顺序由 Producer 决定，但不同批次之间的顺序取决于 Broker 接收顺序。使用 messageRoutingMode(SinglePartition) 可保证分区内顺序。",
            "【批量失败处理】如果一个批次发送失败，整个批次的所有消息都需要重试。批次过大可能导致失败后重试成本高。",
            "【Key-based batching】使用 batcherBuilder(BatcherBuilder.KEY_BASED) 可以按 Key 分组批量，保证相同 Key 的消息在同一批次，有助于 Key_Shared 订阅的性能。"
        ],
        handsOnPath: [
            "对比测试：分别设置 batchingMaxPublishDelay 为 1ms、10ms、100ms，观察吞吐量和延迟变化。",
            "测试不同 batchingMaxMessages 配置下的批次大小和发送频率。",
            "使用 KEY_BASED batching，发送带有不同 Key 的消息，观察批次组织方式。",
            "结合压缩配置测试批量发送的压缩效果，对比不同压缩算法的性能。"
        ],
        selfCheck: [
            "批量发送的三个触发条件是什么？它们之间是什么关系？",
            "批量发送如何影响消息的 MessageId 格式？",
            "batchingMaxPublishDelay 配置过大或过小分别有什么影响？",
            "KEY_BASED batching 是什么？适用于什么场景？",
            "批量发送失败时，消息如何处理？"
        ],
        extensions: [
            "研究 Pulsar 的 Chunking 功能，了解超大消息如何与批量发送配合。",
            "探索 Broker 端的批量消息处理逻辑，了解批量消息如何存储和分发。",
            "学习 Consumer 端的批量消息接收，了解 batchReceive API 的使用。",
            "研究批量发送在 Kafka 和 Pulsar 中的实现差异。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#batching",
            "https://pulsar.apache.org/docs/client-libraries-java/#batching"
        ]
    },
    "pulsar-w7-3": {
        lessonId: "pulsar-w7-3",
        background: [
            "【消息路由概念】官方文档：对于分区 Topic，Producer 需要决定每条消息发往哪个分区。Pulsar 提供多种内置路由模式和自定义路由能力。",
            "【RoundRobinPartition】默认路由模式，消息轮询发送到各分区。如果消息有 Key，则根据 Key 哈希选择分区；无 Key 则按批次轮询。",
            "【SinglePartition】所有消息发送到单个分区（随机选择或由 Key 决定）。适用于需要严格顺序的场景。",
            "【CustomPartition】通过实现 MessageRouter 接口自定义路由逻辑，可基于消息内容、属性、时间等任意条件决定分区。",
            "【Key 与分区的关系】当消息设置了 Key，大多数路由模式会使用 Key 的哈希值选择分区，确保相同 Key 的消息发往同一分区。"
        ],
        keyDifficulties: [
            "【路由与顺序保证】RoundRobinPartition 无法保证全局顺序，只能保证同一 Key 的消息顺序。如需严格全局顺序，使用非分区 Topic 或 SinglePartition。",
            "【分区热点问题】如果 Key 分布不均匀，可能导致某些分区负载过高。需要设计合理的 Key 策略或使用 CustomPartition 实现负载均衡。",
            "【动态分区增加】分区 Topic 增加分区后，RoundRobinPartition 会自动感知新分区，但已有消息的 Key 到分区的映射可能变化。",
            "【路由与 Key_Shared 订阅】Key_Shared 订阅依赖消息 Key 来分配消费者，路由策略需要确保设置了合适的 Key。"
        ],
        handsOnPath: [
            "创建 8 分区 Topic，使用 RoundRobinPartition 发送消息，观察消息在各分区的分布。",
            "发送带 Key 的消息，验证相同 Key 的消息是否发往同一分区。",
            "实现 CustomPartition，根据消息属性（如优先级）路由到不同分区。",
            "测试分区增加后消息路由的变化，观察 Key 到分区映射的变化。"
        ],
        selfCheck: [
            "Pulsar 提供哪几种内置的消息路由模式？各自的特点是什么？",
            "RoundRobinPartition 模式下，有 Key 和无 Key 的消息路由有何不同？",
            "如何保证相同 Key 的消息被发送到同一分区？",
            "什么情况下需要使用 CustomPartition？如何实现？",
            "分区增加后对消息路由有什么影响？"
        ],
        extensions: [
            "研究 Kafka 的分区策略，对比与 Pulsar 的实现差异。",
            "探索 Pulsar 的 Topic 自动负载均衡机制，了解 Broker 如何分配分区。",
            "学习如何监控分区的负载均衡情况，识别分区热点。",
            "研究 Key 哈希算法的选择，了解不同算法对分布均匀性的影响。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#routing-modes",
            "https://pulsar.apache.org/docs/client-libraries-java/#custom-message-router"
        ]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w7-1": [
        {
            id: "pulsar-w7-1-q1",
            question: "Producer.send() 同步发送方法的返回值是什么？",
            options: [
                "void",
                "MessageId",
                "CompletableFuture<MessageId>",
                "boolean"
            ],
            answer: 1,
            rationale: "同步发送方法 send() 返回 MessageId，表示消息已成功持久化到 BookKeeper 并获得 Broker 确认。"
        },
        {
            id: "pulsar-w7-1-q2",
            question: "异步发送方法 sendAsync() 的返回值是什么？",
            options: [
                "MessageId",
                "void",
                "CompletableFuture<MessageId>",
                "Future<void>"
            ],
            answer: 2,
            rationale: "异步发送方法 sendAsync() 返回 CompletableFuture<MessageId>，可以通过回调或 Future 处理发送结果。"
        },
        {
            id: "pulsar-w7-1-q3",
            question: "Producer 的 sendTimeout 默认值是多少？",
            options: [
                "10 秒",
                "30 秒",
                "60 秒",
                "无超时"
            ],
            answer: 1,
            rationale: "官方文档指出 sendTimeout 默认值为 30 秒，超时后会触发重试或返回异常。"
        },
        {
            id: "pulsar-w7-1-q4",
            question: "maxPendingMessages 配置的作用是什么？",
            options: [
                "控制批量发送的消息数",
                "控制异步发送时 Pending Queue 的大小",
                "控制重试次数",
                "控制压缩级别"
            ],
            answer: 1,
            rationale: "maxPendingMessages 配置控制异步发送时 Pending Queue 的大小，默认 1000。队列满时新发送会阻塞或失败。"
        },
        {
            id: "pulsar-w7-1-q5",
            question: "当 Pending Queue 满时，blockIfQueueFull(true) 配置会导致什么行为？",
            options: [
                "立即抛出异常",
                "丢弃消息",
                "阻塞等待直到队列有空间",
                "自动扩展队列"
            ],
            answer: 2,
            rationale: "blockIfQueueFull(true) 配置会使生产者在队列满时阻塞等待，直到队列有空间可以继续发送。"
        },
        {
            id: "pulsar-w7-1-q6",
            question: "Broker 确认消息意味着什么？",
            options: [
                "消息已写入单个节点",
                "消息已写入 BookKeeper 的多个副本",
                "消息已被消费",
                "消息已压缩"
            ],
            answer: 1,
            rationale: "Broker 确认意味着消息已写入 BookKeeper 的多个副本（由 Write Quorum 和 Ack Quorum 决定），而非仅写入单节点。"
        },
        {
            id: "pulsar-w7-1-q7",
            question: "异步发送时 ProducerQueueIsFullError 异常表示什么？",
            options: [
                "Topic 不存在",
                "网络超时",
                "Pending Queue 已满",
                "Broker 不可用"
            ],
            answer: 2,
            rationale: "ProducerQueueIsFullError 异常表示 Pending Queue 已满，需要等待或增加队列大小。"
        },
        {
            id: "pulsar-w7-1-q8",
            question: "同步发送相比异步发送的主要缺点是什么？",
            options: [
                "可靠性低",
                "吞吐量低",
                "代码复杂",
                "不支持重试"
            ],
            answer: 1,
            rationale: "同步发送每次都要等待 Broker 确认，吞吐量较低。异步发送可以流水线发送，吞吐量更高。"
        },
        {
            id: "pulsar-w7-1-q9",
            question: "Producer 的发送重试可能带来什么问题？",
            options: [
                "消息丢失",
                "消息重复",
                "消息乱序",
                "性能下降"
            ],
            answer: 1,
            rationale: "发送重试可能导致消息重复，因为原始发送可能已成功但确认丢失。需要配合消息去重使用。"
        },
        {
            id: "pulsar-w7-1-q10",
            question: "高吞吐场景应该使用什么发送模式？",
            options: [
                "同步发送",
                "异步发送配合批量发送",
                "禁用批量的同步发送",
                "单条异步发送"
            ],
            answer: 1,
            rationale: "高吞吐场景应使用异步发送配合批量发送，可以最大化利用网络带宽和减少往返延迟。"
        },
        {
            id: "pulsar-w7-1-q11",
            question: "sendRetries 配置的作用是什么？",
            options: [
                "配置消费重试次数",
                "配置发送失败的重试次数",
                "配置连接重试次数",
                "配置批量重试次数"
            ],
            answer: 1,
            rationale: "sendRetries 配置 Producer 发送失败时的重试次数，内置重试机制可以处理临时故障。"
        },
        {
            id: "pulsar-w7-1-q12",
            question: "异步发送的异常应该在哪里处理？",
            options: [
                "主线程的 try-catch",
                "回调函数或 Future 的 exceptionally 处理",
                "全局异常处理器",
                "忽略异常"
            ],
            answer: 1,
            rationale: "异步发送的异常需要在回调函数或 CompletableFuture 的 exceptionally/handle 方法中处理。"
        }
    ],
    "pulsar-w7-2": [
        {
            id: "pulsar-w7-2-q1",
            question: "批量发送的主要目的是什么？",
            options: [
                "减少消息大小",
                "减少网络往返次数，提高吞吐量",
                "提高消息可靠性",
                "简化代码"
            ],
            answer: 1,
            rationale: "批量发送将多条消息打包成一个批次发送，减少网络往返次数，显著提高吞吐量。"
        },
        {
            id: "pulsar-w7-2-q2",
            question: "批量发送的触发条件有哪些？",
            options: [
                "只有消息数量",
                "只有时间",
                "消息数量、字节大小、等待时间（满足任一即发送）",
                "只有字节大小"
            ],
            answer: 2,
            rationale: "批次发送由三个条件触发（满足任一即发送）：batchingMaxMessages、batchingMaxBytes、batchingMaxPublishDelay。"
        },
        {
            id: "pulsar-w7-2-q3",
            question: "batchingMaxPublishDelay 的默认值是多少？",
            options: [
                "10ms",
                "1ms",
                "100ms",
                "1s"
            ],
            answer: 1,
            rationale: "官方文档指出 batchingMaxPublishDelay 默认值为 1ms。"
        },
        {
            id: "pulsar-w7-2-q4",
            question: "批量发送的消息如何在 MessageId 中区分？",
            options: [
                "使用不同的 ledgerId",
                "使用不同的 entryId",
                "使用 batchIndex",
                "无法区分"
            ],
            answer: 2,
            rationale: "批量发送的消息共享同一个 Ledger Entry，每条消息通过 batchIndex 区分。"
        },
        {
            id: "pulsar-w7-2-q5",
            question: "batchingMaxPublishDelay 配置过大会导致什么问题？",
            options: [
                "消息丢失",
                "单条消息延迟增加",
                "吞吐量下降",
                "内存不足"
            ],
            answer: 1,
            rationale: "batchingMaxPublishDelay 越大，批次越大，但单条消息延迟也越高，需要根据业务容忍度调整。"
        },
        {
            id: "pulsar-w7-2-q6",
            question: "KEY_BASED batching 的作用是什么？",
            options: [
                "禁用批量发送",
                "按 Key 分组批量，相同 Key 的消息在同一批次",
                "随机分组批量",
                "按时间分组批量"
            ],
            answer: 1,
            rationale: "KEY_BASED batching 按 Key 分组批量，保证相同 Key 的消息在同一批次，有助于 Key_Shared 订阅的性能。"
        },
        {
            id: "pulsar-w7-2-q7",
            question: "批量发送失败时，消息如何处理？",
            options: [
                "只重试失败的消息",
                "整个批次的所有消息都需要重试",
                "丢弃失败的消息",
                "跳过失败的消息"
            ],
            answer: 1,
            rationale: "如果一个批次发送失败，整个批次的所有消息都需要重试。批次过大可能导致重试成本高。"
        },
        {
            id: "pulsar-w7-2-q8",
            question: "batchingMaxMessages 的默认值是多少？",
            options: [
                "100",
                "500",
                "1000",
                "10000"
            ],
            answer: 2,
            rationale: "官方文档指出 batchingMaxMessages 默认值为 1000。"
        },
        {
            id: "pulsar-w7-2-q9",
            question: "批量发送与消息压缩配合使用有什么优势？",
            options: [
                "无优势",
                "整个批次一起压缩可以获得更高的压缩率",
                "可以禁用压缩",
                "减少压缩开销"
            ],
            answer: 1,
            rationale: "批量发送与消息压缩配合使用效果更佳，整个批次一起压缩可以利用消息间的相似性获得更高的压缩率。"
        },
        {
            id: "pulsar-w7-2-q10",
            question: "batchingMaxBytes 的默认值是多少？",
            options: [
                "64KB",
                "128KB",
                "256KB",
                "1MB"
            ],
            answer: 1,
            rationale: "官方文档指出 batchingMaxBytes 默认值为 128KB。"
        },
        {
            id: "pulsar-w7-2-q11",
            question: "Pulsar 默认是否启用批量发送？",
            options: [
                "默认禁用",
                "默认启用",
                "需要手动配置",
                "取决于 Topic 类型"
            ],
            answer: 1,
            rationale: "官方文档指出 Pulsar 默认启用 batching（batchingEnabled = true）。"
        },
        {
            id: "pulsar-w7-2-q12",
            question: "如何在 Producer 中启用 KEY_BASED batching？",
            options: [
                "batchingEnabled(true)",
                "batcherBuilder(BatcherBuilder.KEY_BASED)",
                "keyBasedBatching(true)",
                "setBatchingMode(KEY_BASED)"
            ],
            answer: 1,
            rationale: "使用 batcherBuilder(BatcherBuilder.KEY_BASED) 可以启用按 Key 分组的批量发送。"
        }
    ],
    "pulsar-w7-3": [
        {
            id: "pulsar-w7-3-q1",
            question: "Pulsar 的默认消息路由模式是什么？",
            options: [
                "SinglePartition",
                "RoundRobinPartition",
                "CustomPartition",
                "RandomPartition"
            ],
            answer: 1,
            rationale: "RoundRobinPartition 是默认路由模式，消息轮询发送到各分区。"
        },
        {
            id: "pulsar-w7-3-q2",
            question: "RoundRobinPartition 模式下，有 Key 的消息如何路由？",
            options: [
                "随机选择分区",
                "轮询选择分区",
                "根据 Key 哈希选择分区",
                "发送到第一个分区"
            ],
            answer: 2,
            rationale: "RoundRobinPartition 模式下，如果消息有 Key，则根据 Key 哈希选择分区；无 Key 则按批次轮询。"
        },
        {
            id: "pulsar-w7-3-q3",
            question: "SinglePartition 模式适用于什么场景？",
            options: [
                "高吞吐场景",
                "需要严格顺序的场景",
                "负载均衡场景",
                "多消费者场景"
            ],
            answer: 1,
            rationale: "SinglePartition 将所有消息发送到单个分区，适用于需要严格顺序的场景。"
        },
        {
            id: "pulsar-w7-3-q4",
            question: "如何实现自定义消息路由？",
            options: [
                "修改 Broker 配置",
                "实现 MessageRouter 接口",
                "使用 SQL 查询",
                "配置 Topic 属性"
            ],
            answer: 1,
            rationale: "通过实现 MessageRouter 接口可以自定义路由逻辑，基于消息内容、属性等任意条件决定分区。"
        },
        {
            id: "pulsar-w7-3-q5",
            question: "相同 Key 的消息是否保证发往同一分区？",
            options: [
                "不保证",
                "是的，Key 哈希决定分区",
                "取决于路由模式",
                "只在 SinglePartition 模式下保证"
            ],
            answer: 2,
            rationale: "是否保证取决于路由模式。大多数路由模式（如 RoundRobinPartition）会使用 Key 哈希选择分区。"
        },
        {
            id: "pulsar-w7-3-q6",
            question: "RoundRobinPartition 模式能保证全局消息顺序吗？",
            options: [
                "能",
                "不能，只能保证同一 Key 的消息顺序",
                "取决于分区数",
                "取决于消费者数"
            ],
            answer: 1,
            rationale: "RoundRobinPartition 无法保证全局顺序，只能保证同一 Key 的消息顺序。如需全局顺序，使用非分区 Topic 或 SinglePartition。"
        },
        {
            id: "pulsar-w7-3-q7",
            question: "分区热点问题的常见原因是什么？",
            options: [
                "网络问题",
                "Key 分布不均匀",
                "Broker 配置错误",
                "Topic 配置错误"
            ],
            answer: 1,
            rationale: "如果 Key 分布不均匀，可能导致某些分区负载过高，形成热点问题。"
        },
        {
            id: "pulsar-w7-3-q8",
            question: "分区 Topic 增加分区后，RoundRobinPartition 如何处理？",
            options: [
                "需要重启 Producer",
                "自动感知新分区",
                "需要手动配置",
                "无法增加分区"
            ],
            answer: 1,
            rationale: "分区 Topic 增加分区后，RoundRobinPartition 会自动感知新分区，但已有消息的 Key 到分区映射可能变化。"
        },
        {
            id: "pulsar-w7-3-q9",
            question: "CustomPartition 可以基于什么条件路由？",
            options: [
                "只能基于 Key",
                "只能基于消息内容",
                "消息内容、属性、时间等任意条件",
                "只能随机路由"
            ],
            answer: 2,
            rationale: "CustomPartition 通过实现 MessageRouter 接口，可基于消息内容、属性、时间等任意条件决定分区。"
        },
        {
            id: "pulsar-w7-3-q10",
            question: "Key_Shared 订阅对消息路由有什么要求？",
            options: [
                "无要求",
                "消息必须设置 Key",
                "必须使用 SinglePartition",
                "必须禁用批量发送"
            ],
            answer: 1,
            rationale: "Key_Shared 订阅依赖消息 Key 来分配消费者，路由策略需要确保设置了合适的 Key。"
        },
        {
            id: "pulsar-w7-3-q11",
            question: "如何监控分区的负载均衡情况？",
            options: [
                "无法监控",
                "查看 Topic 各分区的统计信息",
                "只能手动计算",
                "通过日志分析"
            ],
            answer: 1,
            rationale: "可以通过 pulsar-admin topics partitioned-stats 查看各分区的统计信息，识别负载不均衡情况。"
        },
        {
            id: "pulsar-w7-3-q12",
            question: "消息路由发生在哪个阶段？",
            options: [
                "Broker 端",
                "Consumer 端",
                "Producer 端",
                "BookKeeper 端"
            ],
            answer: 2,
            rationale: "消息路由发生在 Producer 端，Producer 决定每条消息发往哪个分区。"
        }
    ]
}
