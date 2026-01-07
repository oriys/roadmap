import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "pulsar-w5-1": {
        lessonId: "pulsar-w5-1",
        background: [
            "【确认机制概述】官方文档：消息确认（Acknowledgment）是消费者告知 Broker 消息已成功处理的机制。未确认的消息会被 Broker 保留以便重投。",
            "【Individual ACK】逐条确认模式，消费者对每条消息单独发送确认。支持乱序确认，适合 Shared 订阅。",
            "【Cumulative ACK】累积确认模式，确认该消息及之前所有消息。只适用于 Exclusive 和 Failover 订阅，效率更高但要求顺序处理。",
            "【Cursor 游标】官方文档：游标跟踪每个订阅的消费进度。Pulsar 在 BookKeeper 中持久化游标位置，确保故障恢复后能继续消费。",
            "【ACK 持久化】默认情况下，ACK 会被持久化到 BookKeeper。可以配置 ackReceiptEnabled 来获取 ACK 是否持久化成功的回执。"
        ],
        keyDifficulties: [
            "【ACK 超时】ackTimeout 设置消费者必须在多长时间内确认消息。超时后消息会重投，可能导致重复处理。需要根据处理时长合理设置。",
            "【Negative ACK】消费者可以主动发送 Negative ACK 拒绝消息，触发立即重投。适用于处理失败但不想等待超时的场景。",
            "【ACK 批量优化】频繁的单条 ACK 会产生较大开销。可以使用 acknowledgeCumulative 或配置 ackGroupingTime 来批量确认。",
            "【游标追踪开销】每个订阅的游标需要存储和更新。大量订阅会增加 BookKeeper 负载，需要监控游标相关指标。"
        ],
        handsOnPath: [
            "使用 Individual ACK 消费消息：consumer.acknowledge(message) 或 consumer.acknowledgeAsync(message)",
            "使用 Cumulative ACK：consumer.acknowledgeCumulative(message)，观察之前所有消息的状态变化",
            "测试 ACK 超时：设置较短的 ackTimeout，故意不确认消息，观察消息重投",
            "使用 Negative ACK：consumer.negativeAcknowledge(message)，观察消息立即重投"
        ],
        selfCheck: [
            "Individual ACK 和 Cumulative ACK 的区别是什么？各自适用于什么订阅类型？",
            "游标（Cursor）在 Pulsar 中的作用是什么？它存储在哪里？",
            "ACK 超时会导致什么后果？如何合理设置超时时间？",
            "什么时候应该使用 Negative ACK？与等待超时有什么区别？",
            "如何优化 ACK 的性能开销？"
        ],
        extensions: [
            "研究 ackReceiptEnabled 参数，了解如何确认 ACK 已持久化。",
            "探索游标的持久化机制和故障恢复流程。",
            "学习如何监控订阅的 ACK 延迟和积压量。",
            "研究批量 ACK 的配置和性能影响。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#acknowledgment",
            "https://pulsar.apache.org/docs/concepts-architecture-overview/#cursors",
            "https://pulsar.apache.org/docs/concepts-messaging/#acknowledgment-timeout"
        ]
    },
    "pulsar-w5-2": {
        lessonId: "pulsar-w5-2",
        background: [
            "【消息重投机制】官方文档：三种情况触发消息重投——消费者崩溃、ACK 超时、消费者主动 Negative ACK。每次重投会增加 redeliveryCount。",
            "【重试 Topic】官方文档：Retry Letter Topic 用于存放需要延迟重试的消息。消费失败的消息会被发送到重试 Topic，等待一段时间后再次投递。",
            "【死信 Topic】官方文档：Dead Letter Topic（DLQ）用于存放超过最大重试次数的消息。这些消息被认为无法正常处理，需要人工介入。",
            "【DLQ 命名规则】死信 Topic 默认命名为 <topicname>-<subscriptionname>-DLQ，重试 Topic 命名为 <topicname>-<subscriptionname>-RETRY。",
            "【maxRedeliverCount】配置最大重投次数。超过此次数的消息会被发送到死信 Topic。默认值因客户端而异，建议显式配置。"
        ],
        keyDifficulties: [
            "【重试延迟配置】可以配置重试的延迟时间和重试次数策略。支持固定延迟、指数退避等策略，需要根据业务特点选择。",
            "【DLQ 监控】死信 Topic 需要额外的监控和告警。大量消息进入 DLQ 通常表示系统存在问题，需要及时处理。",
            "【消息幂等处理】因为消息可能被重复投递，消费者必须实现幂等处理逻辑，避免重复执行业务操作。",
            "【重试与 Negative ACK 区别】reconsumeLater 会发送消息到重试 Topic 延迟重试，Negative ACK 会立即重投。选择取决于失败原因。"
        ],
        handsOnPath: [
            "配置死信 Topic：.deadLetterPolicy(DeadLetterPolicy.builder().maxRedeliverCount(3).build())",
            "模拟消费失败，观察消息在重试 Topic 和死信 Topic 之间的流转",
            "使用 reconsumeLater 指定延迟时间：consumer.reconsumeLater(message, 10, TimeUnit.SECONDS)",
            "监控死信 Topic：pulsar-admin topics stats <dlq-topic>"
        ],
        selfCheck: [
            "哪三种情况会触发消息重投？每次重投后消息有什么变化？",
            "重试 Topic 和死信 Topic 的区别是什么？各自存放什么消息？",
            "如何配置最大重试次数？超过次数后消息会怎样？",
            "reconsumeLater 和 Negative ACK 有什么区别？各自适用于什么场景？",
            "为什么消费者需要实现幂等处理？"
        ],
        extensions: [
            "研究重试延迟的指数退避策略配置。",
            "探索如何自动处理死信 Topic 中的消息。",
            "学习如何将死信消息重新投递到原 Topic。",
            "研究消息去重机制，减少幂等处理的复杂度。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#dead-letter-topic",
            "https://pulsar.apache.org/docs/concepts-messaging/#retry-letter-topic",
            "https://pulsar.apache.org/docs/concepts-messaging/#message-redelivery"
        ]
    },
    "pulsar-w5-3": {
        lessonId: "pulsar-w5-3",
        background: [
            "【Producer 去重】官方文档：基于 Sequence ID 的去重机制。Producer 为每条消息分配递增的 Sequence ID，Broker 检测并拒绝重复消息。",
            "【Broker 端去重】官方文档：Message Deduplication 功能在 Broker 端自动检测和丢弃重复消息。需要在 Namespace 或 Topic 级别启用。",
            "【Sequence ID 机制】Producer 维护消息序列号，Broker 跟踪每个 Producer 的最新 Sequence ID。如果收到的序列号小于等于已确认的，消息会被拒绝。",
            "【去重窗口】Broker 只保留有限的去重状态。producerDeduplicationEntriesRetention 配置保留多少条目用于去重检测。",
            "【Consumer 幂等】Producer 去重只能防止发送端重复，消费端的重复处理仍需要业务层实现幂等逻辑。"
        ],
        keyDifficulties: [
            "【去重开销】启用去重会增加 Broker 的内存和存储开销，需要权衡去重保证和性能影响。",
            "【Producer 重启】Producer 重启后 Sequence ID 会重置。如果使用相同的 Producer Name，可能导致去重失效或消息被错误拒绝。",
            "【跨 Producer 去重】Sequence ID 去重只在单个 Producer 范围内有效。跨 Producer 的去重需要使用消息的业务 ID。",
            "【Exactly-once 语义】完整的 Exactly-once 需要结合 Producer 去重、事务和 Consumer 幂等。单独使用去重只能实现部分保证。"
        ],
        handsOnPath: [
            "启用 Namespace 级别去重：pulsar-admin namespaces set-deduplication tenant/namespace --enable",
            "配置 Producer 发送相同 Sequence ID 的消息，观察 Broker 拒绝重复消息",
            "测试 Producer 重启场景，验证去重行为",
            "实现 Consumer 端的幂等处理逻辑，如使用 Message ID 或业务 ID 去重"
        ],
        selfCheck: [
            "Producer 去重的实现原理是什么？Sequence ID 如何工作？",
            "Broker 端去重如何启用？在什么级别配置？",
            "Producer 重启后可能出现什么去重问题？如何避免？",
            "为什么 Producer 去重不能完全保证 Exactly-once？还需要什么？",
            "Consumer 端如何实现幂等处理？"
        ],
        extensions: [
            "研究 Pulsar 事务如何实现 Exactly-once 语义。",
            "探索大规模去重的性能优化策略。",
            "学习如何基于业务 ID 实现跨 Producer 去重。",
            "研究其他消息系统（如 Kafka）的去重机制对比。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#message-deduplication",
            "https://pulsar.apache.org/docs/concepts-messaging/#messages"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w5-1": [
        {
            id: "pulsar-w5-1-q1",
            question: "Individual ACK 和 Cumulative ACK 的区别是什么？",
            options: [
                "两者完全相同",
                "Individual 逐条确认，Cumulative 确认该消息及之前所有消息",
                "Individual 更快",
                "Cumulative 只能用于 Shared 订阅"
            ],
            answer: 1,
            rationale: "Individual ACK 对每条消息单独确认，Cumulative ACK 确认该消息及之前所有消息。"
        },
        {
            id: "pulsar-w5-1-q2",
            question: "Cumulative ACK 适用于什么订阅类型？",
            options: [
                "所有订阅类型",
                "只适用于 Shared",
                "只适用于 Exclusive 和 Failover",
                "只适用于 Key_Shared"
            ],
            answer: 2,
            rationale: "Cumulative ACK 只适用于 Exclusive 和 Failover 订阅，因为这些模式保证顺序处理。"
        },
        {
            id: "pulsar-w5-1-q3",
            question: "游标（Cursor）在 Pulsar 中存储在哪里？",
            options: [
                "消费者内存",
                "BookKeeper",
                "ZooKeeper",
                "本地文件"
            ],
            answer: 1,
            rationale: "Pulsar 在 BookKeeper 中持久化游标位置，确保故障恢复后能继续消费。"
        },
        {
            id: "pulsar-w5-1-q4",
            question: "ACK 超时后会发生什么？",
            options: [
                "消息被丢弃",
                "消息会被重投",
                "订阅被删除",
                "消费者断开"
            ],
            answer: 1,
            rationale: "ACK 超时后消息会被重投，可能导致重复处理。"
        },
        {
            id: "pulsar-w5-1-q5",
            question: "Negative ACK 的作用是什么？",
            options: [
                "确认消息成功处理",
                "主动拒绝消息，触发立即重投",
                "删除消息",
                "暂停消费"
            ],
            answer: 1,
            rationale: "消费者可以主动发送 Negative ACK 拒绝消息，触发立即重投。"
        },
        {
            id: "pulsar-w5-1-q6",
            question: "如何优化频繁 ACK 的性能开销？",
            options: [
                "禁用 ACK",
                "使用 acknowledgeCumulative 或配置 ackGroupingTime 批量确认",
                "增加消费者数量",
                "减少消息大小"
            ],
            answer: 1,
            rationale: "可以使用 acknowledgeCumulative 或配置 ackGroupingTime 来批量确认，减少开销。"
        },
        {
            id: "pulsar-w5-1-q7",
            question: "游标的主要作用是什么？",
            options: [
                "存储消息内容",
                "跟踪每个订阅的消费进度",
                "管理 Producer 连接",
                "负载均衡"
            ],
            answer: 1,
            rationale: "游标跟踪每个订阅的消费进度，记录哪些消息已被确认。"
        },
        {
            id: "pulsar-w5-1-q8",
            question: "ackReceiptEnabled 参数的作用是什么？",
            options: [
                "启用自动 ACK",
                "获取 ACK 是否持久化成功的回执",
                "禁用 ACK",
                "设置 ACK 超时"
            ],
            answer: 1,
            rationale: "配置 ackReceiptEnabled 可以获取 ACK 是否持久化成功的回执。"
        },
        {
            id: "pulsar-w5-1-q9",
            question: "未确认的消息会怎样处理？",
            options: [
                "立即删除",
                "被 Broker 保留以便重投",
                "发送到死信队列",
                "转发给其他 Topic"
            ],
            answer: 1,
            rationale: "未确认的消息会被 Broker 保留以便重投。"
        },
        {
            id: "pulsar-w5-1-q10",
            question: "大量订阅会对系统产生什么影响？",
            options: [
                "无影响",
                "增加 BookKeeper 负载（游标存储和更新）",
                "减少消息吞吐",
                "增加网络延迟"
            ],
            answer: 1,
            rationale: "每个订阅的游标需要存储和更新，大量订阅会增加 BookKeeper 负载。"
        },
        {
            id: "pulsar-w5-1-q11",
            question: "Individual ACK 适合什么订阅类型？",
            options: [
                "只适用于 Exclusive",
                "适合 Shared 订阅，支持乱序确认",
                "只适用于 Failover",
                "不推荐使用"
            ],
            answer: 1,
            rationale: "Individual ACK 支持乱序确认，适合 Shared 订阅。"
        },
        {
            id: "pulsar-w5-1-q12",
            question: "如何设置消费者必须在多长时间内确认消息？",
            options: [
                "无法设置",
                "配置 ackTimeout 参数",
                "修改 Broker 配置",
                "使用系统默认值"
            ],
            answer: 1,
            rationale: "通过 ackTimeout 设置消费者必须在多长时间内确认消息。"
        }
    ],
    "pulsar-w5-2": [
        {
            id: "pulsar-w5-2-q1",
            question: "哪三种情况会触发消息重投？",
            options: [
                "Producer 重发、Consumer 重启、Broker 故障",
                "消费者崩溃、ACK 超时、消费者主动 Negative ACK",
                "网络中断、磁盘故障、内存不足",
                "Topic 删除、Namespace 删除、Tenant 删除"
            ],
            answer: 1,
            rationale: "官方文档描述三种重投触发：消费者崩溃、ACK 超时、消费者主动 Negative ACK。"
        },
        {
            id: "pulsar-w5-2-q2",
            question: "死信 Topic 的默认命名规则是什么？",
            options: [
                "<topicname>-DLQ",
                "<topicname>-<subscriptionname>-DLQ",
                "DLQ-<topicname>",
                "<subscriptionname>-DLQ"
            ],
            answer: 1,
            rationale: "死信 Topic 默认命名为 <topicname>-<subscriptionname>-DLQ。"
        },
        {
            id: "pulsar-w5-2-q3",
            question: "重试 Topic 的作用是什么？",
            options: [
                "存储成功处理的消息",
                "存放需要延迟重试的消息",
                "备份所有消息",
                "存储元数据"
            ],
            answer: 1,
            rationale: "Retry Letter Topic 用于存放需要延迟重试的消息。"
        },
        {
            id: "pulsar-w5-2-q4",
            question: "超过 maxRedeliverCount 的消息会怎样？",
            options: [
                "继续重试",
                "发送到死信 Topic",
                "被丢弃",
                "返回给 Producer"
            ],
            answer: 1,
            rationale: "超过最大重试次数的消息会被发送到死信 Topic。"
        },
        {
            id: "pulsar-w5-2-q5",
            question: "reconsumeLater 和 Negative ACK 的区别是什么？",
            options: [
                "两者相同",
                "reconsumeLater 延迟重试，Negative ACK 立即重投",
                "Negative ACK 更慢",
                "reconsumeLater 不会重试"
            ],
            answer: 1,
            rationale: "reconsumeLater 会发送消息到重试 Topic 延迟重试，Negative ACK 会立即重投。"
        },
        {
            id: "pulsar-w5-2-q6",
            question: "每次重投后消息有什么变化？",
            options: [
                "无变化",
                "redeliveryCount 增加",
                "消息 ID 改变",
                "内容被修改"
            ],
            answer: 1,
            rationale: "每次重投会增加消息的 redeliveryCount。"
        },
        {
            id: "pulsar-w5-2-q7",
            question: "为什么消费者需要实现幂等处理？",
            options: [
                "提高性能",
                "因为消息可能被重复投递",
                "减少网络开销",
                "简化代码"
            ],
            answer: 1,
            rationale: "因为消息可能被重复投递，消费者必须实现幂等处理逻辑。"
        },
        {
            id: "pulsar-w5-2-q8",
            question: "大量消息进入 DLQ 通常表示什么？",
            options: [
                "系统正常运行",
                "系统存在问题，需要及时处理",
                "消费速度太快",
                "Producer 发送太慢"
            ],
            answer: 1,
            rationale: "大量消息进入 DLQ 通常表示系统存在问题，需要及时处理。"
        },
        {
            id: "pulsar-w5-2-q9",
            question: "如何配置重试延迟策略？",
            options: [
                "无法配置",
                "支持固定延迟、指数退避等策略",
                "只能使用默认值",
                "需要修改 Broker 配置"
            ],
            answer: 1,
            rationale: "可以配置重试的延迟时间和重试次数策略，支持固定延迟、指数退避等。"
        },
        {
            id: "pulsar-w5-2-q10",
            question: "如何使用 reconsumeLater 指定延迟时间？",
            options: [
                "consumer.reconsumeLater(message)",
                "consumer.reconsumeLater(message, 10, TimeUnit.SECONDS)",
                "consumer.retry(message, 10)",
                "consumer.delay(message, 10)"
            ],
            answer: 1,
            rationale: "使用 consumer.reconsumeLater(message, delay, unit) 指定延迟时间。"
        },
        {
            id: "pulsar-w5-2-q11",
            question: "重试 Topic 的命名规则是什么？",
            options: [
                "<topicname>-RETRY",
                "<topicname>-<subscriptionname>-RETRY",
                "RETRY-<topicname>",
                "<subscriptionname>-RETRY"
            ],
            answer: 1,
            rationale: "重试 Topic 命名为 <topicname>-<subscriptionname>-RETRY。"
        },
        {
            id: "pulsar-w5-2-q12",
            question: "如何监控死信 Topic？",
            options: [
                "无法监控",
                "pulsar-admin topics stats <dlq-topic>",
                "只能查看日志",
                "使用专门的监控工具"
            ],
            answer: 1,
            rationale: "可以使用 pulsar-admin topics stats 命令监控死信 Topic 的统计信息。"
        }
    ],
    "pulsar-w5-3": [
        {
            id: "pulsar-w5-3-q1",
            question: "Producer 去重的实现原理是什么？",
            options: [
                "基于消息内容哈希",
                "基于 Sequence ID，Broker 检测并拒绝重复消息",
                "基于时间戳",
                "基于消息大小"
            ],
            answer: 1,
            rationale: "Producer 为每条消息分配递增的 Sequence ID，Broker 检测并拒绝重复消息。"
        },
        {
            id: "pulsar-w5-3-q2",
            question: "Broker 端去重在什么级别启用？",
            options: [
                "只能在集群级别",
                "Namespace 或 Topic 级别",
                "只能在 Broker 级别",
                "只能在 Producer 级别"
            ],
            answer: 1,
            rationale: "Message Deduplication 功能需要在 Namespace 或 Topic 级别启用。"
        },
        {
            id: "pulsar-w5-3-q3",
            question: "Producer 重启后可能出现什么去重问题？",
            options: [
                "无影响",
                "Sequence ID 重置可能导致去重失效或消息被错误拒绝",
                "消息丢失",
                "订阅被删除"
            ],
            answer: 1,
            rationale: "Producer 重启后 Sequence ID 会重置，如果使用相同的 Producer Name 可能导致问题。"
        },
        {
            id: "pulsar-w5-3-q4",
            question: "Sequence ID 去重的有效范围是什么？",
            options: [
                "所有 Producer",
                "单个 Producer 范围内",
                "整个集群",
                "单个 Topic"
            ],
            answer: 1,
            rationale: "Sequence ID 去重只在单个 Producer 范围内有效。"
        },
        {
            id: "pulsar-w5-3-q5",
            question: "启用去重会增加什么开销？",
            options: [
                "无开销",
                "Broker 的内存和存储开销",
                "网络开销",
                "客户端开销"
            ],
            answer: 1,
            rationale: "启用去重会增加 Broker 的内存和存储开销，需要权衡性能影响。"
        },
        {
            id: "pulsar-w5-3-q6",
            question: "如何启用 Namespace 级别去重？",
            options: [
                "pulsar-admin namespaces set-deduplication tenant/namespace --enable",
                "pulsar-admin topics enable-dedup",
                "修改配置文件",
                "重启 Broker"
            ],
            answer: 0,
            rationale: "使用 pulsar-admin namespaces set-deduplication tenant/namespace --enable 启用。"
        },
        {
            id: "pulsar-w5-3-q7",
            question: "完整的 Exactly-once 需要什么？",
            options: [
                "只需要 Producer 去重",
                "结合 Producer 去重、事务和 Consumer 幂等",
                "只需要 Consumer 幂等",
                "只需要事务"
            ],
            answer: 1,
            rationale: "完整的 Exactly-once 需要结合 Producer 去重、事务和 Consumer 幂等。"
        },
        {
            id: "pulsar-w5-3-q8",
            question: "去重窗口的配置参数是什么？",
            options: [
                "deduplicationWindow",
                "producerDeduplicationEntriesRetention",
                "maxDeduplicationEntries",
                "deduplicationSize"
            ],
            answer: 1,
            rationale: "producerDeduplicationEntriesRetention 配置保留多少条目用于去重检测。"
        },
        {
            id: "pulsar-w5-3-q9",
            question: "Consumer 端如何实现幂等处理？",
            options: [
                "使用 Producer 去重",
                "使用 Message ID 或业务 ID 去重",
                "依赖 Broker 去重",
                "无需处理"
            ],
            answer: 1,
            rationale: "Consumer 端可以使用 Message ID 或业务 ID 实现幂等处理。"
        },
        {
            id: "pulsar-w5-3-q10",
            question: "跨 Producer 去重需要使用什么？",
            options: [
                "Sequence ID",
                "消息的业务 ID",
                "Producer Name",
                "Topic Name"
            ],
            answer: 1,
            rationale: "跨 Producer 的去重需要使用消息的业务 ID，因为 Sequence ID 只在单个 Producer 范围内有效。"
        },
        {
            id: "pulsar-w5-3-q11",
            question: "Broker 如何检测重复消息？",
            options: [
                "比较消息内容",
                "跟踪每个 Producer 的最新 Sequence ID，拒绝小于等于已确认的序列号",
                "使用时间戳",
                "计算哈希值"
            ],
            answer: 1,
            rationale: "Broker 跟踪每个 Producer 的最新 Sequence ID，如果收到的序列号小于等于已确认的，消息会被拒绝。"
        },
        {
            id: "pulsar-w5-3-q12",
            question: "Producer 去重只能防止什么？",
            options: [
                "所有重复",
                "发送端重复",
                "消费端重复",
                "网络重复"
            ],
            answer: 1,
            rationale: "Producer 去重只能防止发送端重复，消费端的重复处理仍需要业务层实现幂等逻辑。"
        }
    ]
}
