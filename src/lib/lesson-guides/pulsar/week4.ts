import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "pulsar-w4-1": {
        lessonId: "pulsar-w4-1",
        background: [
            "【Exclusive 订阅】官方文档：Exclusive 是默认订阅类型，'only a single consumer is allowed to attach to the subscription'——只允许单个消费者连接，保证严格的消息顺序。",
            "【Failover 订阅】官方文档：Failover 模式下多个消费者可以连接，但'only one consumer (the master consumer) receives messages'——只有主消费者接收消息，其他消费者作为备用。",
            "【故障转移机制】当主消费者断开连接时，消息会自动转发到下一个消费者（备用消费者）。Pulsar 按消费者连接顺序确定优先级。",
            "【分区 Topic 行为】对于分区 Topic，Exclusive 和 Failover 的行为有所不同：每个分区独立应用订阅规则，可以有多个消费者各负责一个分区。",
            "【顺序保证】两种模式都保证消息按发送顺序消费，适用于需要严格顺序的场景如订单处理、事件日志等。"
        ],
        keyDifficulties: [
            "【Exclusive 连接限制】尝试第二个消费者连接 Exclusive 订阅会失败，抛出 ConsumerBusyException——必须确保同时只有一个消费者。",
            "【Failover 切换延迟】主消费者断开到备用消费者接管之间可能有短暂延迟，这期间消息会暂停投递，需要在设计中考虑这种情况。",
            "【分区与消费者映射】Failover 模式下，分区 Topic 的每个分区会映射到一个消费者。消费者数量不应超过分区数，否则部分消费者会空闲。",
            "【主消费者选择】Pulsar 按照消费者的优先级（consumerPriority）和连接顺序选择主消费者。可以通过设置优先级来控制故障转移行为。"
        ],
        handsOnPath: [
            "创建 Exclusive 订阅：consumer.subscribe(topic, 'exclusive-sub', ConsumerType.Exclusive)",
            "尝试启动第二个 Exclusive 消费者，观察 ConsumerBusyException 异常。",
            "创建 Failover 订阅并启动多个消费者，观察只有主消费者收到消息。",
            "手动断开主消费者，验证备用消费者自动接管并继续消费。"
        ],
        selfCheck: [
            "Exclusive 订阅的核心特点是什么？尝试第二个消费者连接会发生什么？",
            "Failover 订阅中，主消费者是如何选择的？",
            "主消费者断开后，消息投递会有什么变化？",
            "分区 Topic 使用 Failover 时，消费者和分区的映射关系是什么？",
            "这两种订阅类型分别适用于什么场景？"
        ],
        extensions: [
            "研究 consumerPriority 参数，了解如何控制故障转移的优先级。",
            "探索 Exclusive 订阅在分区 Topic 上的行为。",
            "比较 Pulsar Failover 和 Kafka 消费者组的主备机制。",
            "研究如何监控订阅的消费者状态和故障转移事件。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#exclusive",
            "https://pulsar.apache.org/docs/concepts-messaging/#failover"
        ]
    },
    "pulsar-w4-2": {
        lessonId: "pulsar-w4-2",
        background: [
            "【Shared 订阅定义】官方文档：'Messages are delivered in a round-robin distribution across consumers'——消息以轮询方式分发给多个消费者，实现负载均衡。",
            "【水平扩展】Shared 模式的主要优势是可以通过增加消费者来线性提高消费吞吐量，非常适合高负载场景。",
            "【无顺序保证】官方文档警告：Shared 模式不保证消息顺序，因为不同消息可能被不同消费者并行处理。如需顺序，应使用 Exclusive 或 Key_Shared。",
            "【消息确认机制】Shared 模式下每条消息必须单独确认（Individual ACK），不支持累积确认（Cumulative ACK）。",
            "【消息分发算法】默认使用 Round-robin 算法分发消息。当消费者的接收队列满时，消息会跳过该消费者分发给下一个。"
        ],
        keyDifficulties: [
            "【并行度限制】消费者数量没有上限，但实际并行度受限于消息产生速度和处理能力。消费者过多可能导致部分空闲。",
            "【消息重投影响】如果一个消费者处理失败触发重投，消息可能被另一个消费者处理，导致处理顺序更加不确定。",
            "【Receiver Queue 影响】receiverQueueSize 设置影响预取消息数量。设置过大可能导致消息分布不均，过小影响吞吐量。",
            "【ACK 超时处理】消费者如果在 ackTimeout 内未确认消息，消息会重投给其他消费者。需要合理设置超时避免消息重复处理。"
        ],
        handsOnPath: [
            "创建 Shared 订阅：consumer.subscribe(topic, 'shared-sub', ConsumerType.Shared)",
            "启动多个 Shared 消费者，发送多条消息，观察消息在消费者间的分布。",
            "让一个消费者处理变慢，观察消息分发是否会跳过该消费者。",
            "测试消费者 crash 场景，验证消息如何被其他消费者重新消费。"
        ],
        selfCheck: [
            "Shared 订阅的消息分发方式是什么？",
            "为什么 Shared 模式不保证消息顺序？",
            "Shared 模式下必须使用什么确认方式？为什么？",
            "如何通过增加消费者来提高 Shared 订阅的消费吞吐量？",
            "receiverQueueSize 参数如何影响消息分发？"
        ],
        extensions: [
            "研究如何使用消费者组实现更复杂的负载均衡策略。",
            "探索 Pulsar 的消费者限流功能，控制单个消费者的消费速率。",
            "比较 Pulsar Shared 和 Kafka 消费者组的区别。",
            "研究如何监控 Shared 订阅的负载分布。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#shared",
            "https://pulsar.apache.org/docs/concepts-messaging/#consumer"
        ]
    },
    "pulsar-w4-3": {
        lessonId: "pulsar-w4-3",
        background: [
            "【Key_Shared 定义】官方文档：Key_Shared 结合了 Shared 的扩展性和顺序保证——'messages with the same key are delivered to the same consumer'。",
            "【Key 路由机制】消息根据其 Key 进行哈希计算，相同 Key 的消息始终路由到同一个消费者，保证单个 Key 的消息顺序。",
            "【两种分配模式】Auto_Split（自动分割）：动态分配 Key 范围；Sticky（粘性）：固定 Key 到消费者的映射，减少重平衡影响。",
            "【扩展性与顺序平衡】Key_Shared 在多消费者间分摊负载的同时，保证同一 Key 的消息顺序，适合需要按用户/订单等维度保序的场景。",
            "【Key 分布重要性】如果消息 Key 分布不均（如热点用户），可能导致负载不均衡。需要在设计 Key 时考虑分布均匀性。"
        ],
        keyDifficulties: [
            "【消费者变化影响】消费者加入或离开时，部分 Key 需要重新映射。Sticky 模式可以减少重映射范围，但可能导致短暂的负载不均。",
            "【Key 要求】消息必须设置 Key（orderingKey 或 messageKey），否则会被随机分配——这与 Shared 不同。",
            "【一致性哈希】Pulsar 使用一致性哈希算法将 Key 映射到消费者。理解这个机制有助于预测 Key 分布和故障影响。",
            "【allowOutOfOrderDelivery】此参数允许在消费者变化时临时打破顺序保证，提高可用性，但需要业务层处理可能的乱序。"
        ],
        handsOnPath: [
            "创建 Key_Shared 订阅：consumer.subscribe(topic, 'key-shared-sub', ConsumerType.Key_Shared)",
            "发送带不同 Key 的消息，观察相同 Key 的消息是否路由到同一消费者。",
            "动态增减消费者，观察 Key 重新分配的行为。",
            "测试热点 Key 场景，观察负载不均衡现象。"
        ],
        selfCheck: [
            "Key_Shared 订阅如何保证消息顺序？",
            "Auto_Split 和 Sticky 两种模式有什么区别？",
            "消费者变化时，Key_Shared 订阅的行为是什么？",
            "消息没有 Key 时，Key_Shared 如何处理？",
            "Key 分布不均会导致什么问题？如何避免？"
        ],
        extensions: [
            "研究 Key_Shared 的一致性哈希实现细节。",
            "探索如何设计好的消息 Key 以实现均匀分布。",
            "比较 Pulsar Key_Shared 和 Kafka 基于 Key 的分区策略。",
            "研究 Key_Shared 在消费者故障时的恢复机制。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#key_shared"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w4-1": [
        {
            id: "pulsar-w4-1-q1",
            question: "Exclusive 订阅的核心特点是什么？",
            options: [
                "消息轮询分发",
                "只允许单个消费者连接",
                "按 Key 分发消息",
                "支持多个主消费者"
            ],
            answer: 1,
            rationale: "官方文档：'only a single consumer is allowed to attach to the subscription'——只允许单个消费者连接。"
        },
        {
            id: "pulsar-w4-1-q2",
            question: "Failover 订阅中，消息如何分发？",
            options: [
                "轮询分发给所有消费者",
                "只有主消费者接收消息",
                "按 Key 分发",
                "随机分发"
            ],
            answer: 1,
            rationale: "官方文档：'only one consumer (the master consumer) receives messages'——只有主消费者接收消息。"
        },
        {
            id: "pulsar-w4-1-q3",
            question: "尝试第二个消费者连接 Exclusive 订阅会发生什么？",
            options: [
                "连接成功但不接收消息",
                "抛出 ConsumerBusyException",
                "替换第一个消费者",
                "自动转换为 Shared 模式"
            ],
            answer: 1,
            rationale: "尝试第二个消费者连接 Exclusive 订阅会失败，抛出 ConsumerBusyException。"
        },
        {
            id: "pulsar-w4-1-q4",
            question: "Failover 模式下主消费者如何选择？",
            options: [
                "随机选择",
                "按消费者优先级和连接顺序",
                "按消息 Key",
                "由生产者指定"
            ],
            answer: 1,
            rationale: "Pulsar 按照消费者的优先级（consumerPriority）和连接顺序选择主消费者。"
        },
        {
            id: "pulsar-w4-1-q5",
            question: "Exclusive 和 Failover 订阅的共同特点是什么？",
            options: [
                "支持负载均衡",
                "保证消息按发送顺序消费",
                "不保证顺序",
                "按 Key 路由"
            ],
            answer: 1,
            rationale: "两种模式都保证消息按发送顺序消费，适用于需要严格顺序的场景。"
        },
        {
            id: "pulsar-w4-1-q6",
            question: "分区 Topic 使用 Failover 时，消费者和分区的关系是什么？",
            options: [
                "所有消费者共享所有分区",
                "每个分区映射到一个消费者",
                "每个消费者只能消费一条消息",
                "分区和消费者无关"
            ],
            answer: 1,
            rationale: "Failover 模式下，分区 Topic 的每个分区会映射到一个消费者。"
        },
        {
            id: "pulsar-w4-1-q7",
            question: "Pulsar 默认的订阅类型是什么？",
            options: [
                "Shared",
                "Exclusive",
                "Failover",
                "Key_Shared"
            ],
            answer: 1,
            rationale: "官方文档：Exclusive 是默认订阅类型。"
        },
        {
            id: "pulsar-w4-1-q8",
            question: "主消费者断开后，Failover 订阅会发生什么？",
            options: [
                "消息丢失",
                "备用消费者自动接管",
                "订阅被删除",
                "需要手动切换"
            ],
            answer: 1,
            rationale: "当主消费者断开连接时，消息会自动转发到下一个消费者（备用消费者）。"
        },
        {
            id: "pulsar-w4-1-q9",
            question: "如何控制 Failover 模式的故障转移优先级？",
            options: [
                "无法控制",
                "设置 consumerPriority 参数",
                "修改配置文件",
                "使用特殊的消费者名称"
            ],
            answer: 1,
            rationale: "可以通过设置 consumerPriority 参数来控制故障转移行为。"
        },
        {
            id: "pulsar-w4-1-q10",
            question: "Exclusive 订阅适用于什么场景？",
            options: [
                "高吞吐负载均衡",
                "需要严格顺序的场景如订单处理",
                "多消费者并行处理",
                "按用户分组处理"
            ],
            answer: 1,
            rationale: "Exclusive 适用于需要严格顺序的场景如订单处理、事件日志等。"
        },
        {
            id: "pulsar-w4-1-q11",
            question: "Failover 订阅中备用消费者的状态是什么？",
            options: [
                "接收部分消息",
                "空闲等待，不接收消息",
                "与主消费者相同",
                "处理重复消息"
            ],
            answer: 1,
            rationale: "Failover 模式下备用消费者空闲等待，只有主消费者断开后才会接管。"
        },
        {
            id: "pulsar-w4-1-q12",
            question: "主消费者断开到备用消费者接管期间会发生什么？",
            options: [
                "消息继续正常投递",
                "消息可能暂停投递直到备用接管",
                "消息会丢失",
                "订阅自动删除"
            ],
            answer: 1,
            rationale: "主消费者断开到备用消费者接管之间可能有短暂延迟，这期间消息会暂停投递。"
        }
    ],
    "pulsar-w4-2": [
        {
            id: "pulsar-w4-2-q1",
            question: "Shared 订阅的消息分发方式是什么？",
            options: [
                "按 Key 分发",
                "round-robin 轮询分发",
                "只发给一个消费者",
                "广播给所有消费者"
            ],
            answer: 1,
            rationale: "官方文档：'Messages are delivered in a round-robin distribution across consumers'。"
        },
        {
            id: "pulsar-w4-2-q2",
            question: "Shared 订阅是否保证消息顺序？",
            options: [
                "保证严格顺序",
                "不保证顺序，消息可能被并行处理",
                "保证同一 Key 的顺序",
                "只在单分区时保证"
            ],
            answer: 1,
            rationale: "官方文档警告：Shared 模式不保证消息顺序，因为不同消息可能被不同消费者并行处理。"
        },
        {
            id: "pulsar-w4-2-q3",
            question: "Shared 模式下必须使用什么确认方式？",
            options: [
                "Cumulative ACK",
                "Individual ACK",
                "Batch ACK",
                "Auto ACK"
            ],
            answer: 1,
            rationale: "Shared 模式下每条消息必须单独确认（Individual ACK），不支持累积确认。"
        },
        {
            id: "pulsar-w4-2-q4",
            question: "Shared 订阅的主要优势是什么？",
            options: [
                "严格顺序保证",
                "可通过增加消费者线性提高消费吞吐量",
                "消息不会重复",
                "自动负载均衡到分区"
            ],
            answer: 1,
            rationale: "Shared 模式的主要优势是可以通过增加消费者来线性提高消费吞吐量。"
        },
        {
            id: "pulsar-w4-2-q5",
            question: "当消费者的接收队列满时，消息如何分发？",
            options: [
                "消息被丢弃",
                "消息跳过该消费者分发给下一个",
                "等待队列空闲",
                "触发异常"
            ],
            answer: 1,
            rationale: "当消费者的接收队列满时，消息会跳过该消费者分发给下一个。"
        },
        {
            id: "pulsar-w4-2-q6",
            question: "receiverQueueSize 设置过大可能导致什么问题？",
            options: [
                "消息丢失",
                "消息在消费者间分布不均",
                "订阅被删除",
                "连接断开"
            ],
            answer: 1,
            rationale: "receiverQueueSize 设置过大可能导致消息分布不均，因为消息会预取到单个消费者的队列中。"
        },
        {
            id: "pulsar-w4-2-q7",
            question: "消费者在 ackTimeout 内未确认消息会发生什么？",
            options: [
                "消息被丢弃",
                "消息重投给其他消费者",
                "订阅暂停",
                "消费者断开"
            ],
            answer: 1,
            rationale: "消费者如果在 ackTimeout 内未确认消息，消息会重投给其他消费者。"
        },
        {
            id: "pulsar-w4-2-q8",
            question: "Shared 订阅的消费者数量有限制吗？",
            options: [
                "最多 10 个",
                "没有上限",
                "必须等于分区数",
                "最多 100 个"
            ],
            answer: 1,
            rationale: "消费者数量没有上限，但实际并行度受限于消息产生速度和处理能力。"
        },
        {
            id: "pulsar-w4-2-q9",
            question: "消息处理失败触发重投后，消息可能被谁处理？",
            options: [
                "只能被原消费者处理",
                "可能被另一个消费者处理",
                "被丢弃",
                "发送到死信队列"
            ],
            answer: 1,
            rationale: "如果一个消费者处理失败触发重投，消息可能被另一个消费者处理。"
        },
        {
            id: "pulsar-w4-2-q10",
            question: "Shared 订阅适用于什么场景？",
            options: [
                "需要严格顺序的场景",
                "高负载需要水平扩展的场景",
                "只有单个消费者的场景",
                "需要消息广播的场景"
            ],
            answer: 1,
            rationale: "Shared 模式非常适合高负载场景，可以通过增加消费者来提高吞吐量。"
        },
        {
            id: "pulsar-w4-2-q11",
            question: "如果需要顺序消费，应该使用什么订阅类型？",
            options: [
                "Shared",
                "Exclusive 或 Key_Shared",
                "只能用 Shared",
                "无法保证顺序"
            ],
            answer: 1,
            rationale: "如需顺序消费，应使用 Exclusive（全局顺序）或 Key_Shared（按 Key 顺序）。"
        },
        {
            id: "pulsar-w4-2-q12",
            question: "Shared 模式默认使用什么消息分发算法？",
            options: [
                "随机分发",
                "Round-robin 轮询",
                "按 Key 哈希",
                "最小负载分发"
            ],
            answer: 1,
            rationale: "默认使用 Round-robin 算法分发消息。"
        }
    ],
    "pulsar-w4-3": [
        {
            id: "pulsar-w4-3-q1",
            question: "Key_Shared 订阅的核心特点是什么？",
            options: [
                "消息随机分发",
                "相同 Key 的消息发送到同一消费者",
                "消息广播给所有消费者",
                "只有一个消费者"
            ],
            answer: 1,
            rationale: "官方文档：'messages with the same key are delivered to the same consumer'。"
        },
        {
            id: "pulsar-w4-3-q2",
            question: "Key_Shared 如何确定消息路由到哪个消费者？",
            options: [
                "随机选择",
                "根据 Key 进行哈希计算",
                "轮询分发",
                "按消费者优先级"
            ],
            answer: 1,
            rationale: "消息根据其 Key 进行哈希计算，相同 Key 的消息始终路由到同一个消费者。"
        },
        {
            id: "pulsar-w4-3-q3",
            question: "Key_Shared 的两种分配模式是什么？",
            options: [
                "Exclusive 和 Shared",
                "Auto_Split 和 Sticky",
                "Round-robin 和 Hash",
                "Primary 和 Secondary"
            ],
            answer: 1,
            rationale: "两种模式：Auto_Split（自动分割）动态分配 Key 范围；Sticky（粘性）固定 Key 到消费者的映射。"
        },
        {
            id: "pulsar-w4-3-q4",
            question: "消息没有设置 Key 时，Key_Shared 如何处理？",
            options: [
                "拒绝消息",
                "随机分配给消费者",
                "发送给所有消费者",
                "发送到死信队列"
            ],
            answer: 1,
            rationale: "消息必须设置 Key，否则会被随机分配。"
        },
        {
            id: "pulsar-w4-3-q5",
            question: "Key_Shared 相比 Shared 的优势是什么？",
            options: [
                "更高的吞吐量",
                "保证同一 Key 的消息顺序",
                "更少的消费者",
                "更简单的配置"
            ],
            answer: 1,
            rationale: "Key_Shared 在多消费者间分摊负载的同时，保证同一 Key 的消息顺序。"
        },
        {
            id: "pulsar-w4-3-q6",
            question: "Key 分布不均会导致什么问题？",
            options: [
                "消息丢失",
                "负载不均衡",
                "订阅失败",
                "消息重复"
            ],
            answer: 1,
            rationale: "如果消息 Key 分布不均（如热点用户），可能导致负载不均衡。"
        },
        {
            id: "pulsar-w4-3-q7",
            question: "消费者加入或离开时，Key_Shared 如何处理？",
            options: [
                "所有消息暂停",
                "部分 Key 需要重新映射",
                "订阅被重建",
                "不受影响"
            ],
            answer: 1,
            rationale: "消费者加入或离开时，部分 Key 需要重新映射到不同的消费者。"
        },
        {
            id: "pulsar-w4-3-q8",
            question: "Sticky 模式相比 Auto_Split 的优势是什么？",
            options: [
                "更高的吞吐量",
                "减少 Key 重映射范围",
                "更简单的配置",
                "支持更多消费者"
            ],
            answer: 1,
            rationale: "Sticky 模式可以减少消费者变化时的重映射范围。"
        },
        {
            id: "pulsar-w4-3-q9",
            question: "Key_Shared 适用于什么场景？",
            options: [
                "不需要顺序的场景",
                "需要按用户/订单等维度保序的场景",
                "只有单个消费者的场景",
                "消息广播场景"
            ],
            answer: 1,
            rationale: "适合需要按用户/订单等维度保序的场景，如用户行为处理、订单状态更新等。"
        },
        {
            id: "pulsar-w4-3-q10",
            question: "Pulsar 使用什么算法将 Key 映射到消费者？",
            options: [
                "随机算法",
                "一致性哈希算法",
                "轮询算法",
                "最小连接算法"
            ],
            answer: 1,
            rationale: "Pulsar 使用一致性哈希算法将 Key 映射到消费者。"
        },
        {
            id: "pulsar-w4-3-q11",
            question: "allowOutOfOrderDelivery 参数的作用是什么？",
            options: [
                "禁用 Key_Shared",
                "允许消费者变化时临时打破顺序保证",
                "启用消息压缩",
                "增加消费者数量"
            ],
            answer: 1,
            rationale: "此参数允许在消费者变化时临时打破顺序保证，提高可用性。"
        },
        {
            id: "pulsar-w4-3-q12",
            question: "设置消息 Key 的两种方式是什么？",
            options: [
                "header 和 body",
                "orderingKey 或 messageKey",
                "partition 和 offset",
                "id 和 timestamp"
            ],
            answer: 1,
            rationale: "可以通过 orderingKey 或 messageKey 设置消息的 Key。"
        }
    ]
}
