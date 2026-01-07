import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "pulsar-w6-1": {
        lessonId: "pulsar-w6-1",
        background: [
            "【Reader 定义】官方文档：Reader 是一种不创建订阅的消息读取接口。与 Consumer 不同，Reader 不影响其他消费者的消费进度。",
            "【起始位置】Reader 可以从 Earliest（最早）、Latest（最新）或指定的 MessageId 开始读取消息。",
            "【无订阅模式】Reader 不会创建订阅，不会跟踪消费进度，也不需要 ACK 消息。每次创建 Reader 都需要指定起始位置。",
            "【适用场景】Reader 适用于消息重放、审计日志分析、调试等场景。可以多次从同一位置读取消息而不影响正常消费。",
            "【与 Consumer 区别】Consumer 创建订阅并跟踪进度，适合正常消费流程；Reader 不创建订阅，适合一次性读取或特殊场景。"
        ],
        keyDifficulties: [
            "【进度不持久化】Reader 的读取位置不会持久化。应用重启后需要重新指定起始位置，否则会从 Earliest 或 Latest 开始。",
            "【无自动重投】Reader 没有 ACK 机制，因此没有消息重投。如果处理失败，需要应用自行处理重试逻辑。",
            "【资源占用】每个 Reader 都会占用一定的 Broker 资源。大量 Reader 同时读取可能影响 Broker 性能。",
            "【hasMessageAvailable】使用 hasMessageAvailable() 检查是否有新消息可读，避免空轮询。"
        ],
        handsOnPath: [
            "创建从最早位置开始的 Reader：client.newReader(Schema.STRING).topic(topic).startMessageId(MessageId.earliest).create()",
            "创建从指定 MessageId 开始的 Reader：client.newReader(Schema.STRING).topic(topic).startMessageId(specificMessageId).create()",
            "使用 Reader 遍历历史消息，统计消息数量或内容",
            "比较 Reader 和 Consumer 的行为差异，观察是否影响订阅进度"
        ],
        selfCheck: [
            "Reader 与 Consumer 的主要区别是什么？",
            "Reader 可以从哪些位置开始读取？如何指定？",
            "为什么 Reader 适合消息重放和审计场景？",
            "Reader 的读取进度是否持久化？应用重启后会发生什么？",
            "如何检查 Reader 是否有新消息可读？"
        ],
        extensions: [
            "研究 Reader 在分区 Topic 上的行为。",
            "探索如何使用 Reader 实现消息回溯分析。",
            "学习 Reader 的性能优化配置。",
            "研究 TableView 功能，了解如何获取 Topic 的最新状态视图。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#readers",
            "https://pulsar.apache.org/docs/client-libraries-java/#reader"
        ]
    },
    "pulsar-w6-2": {
        lessonId: "pulsar-w6-2",
        background: [
            "【延迟消息定义】官方文档：Delayed Message Delivery 允许消息在指定时间后才对消费者可见，实现定时投递。",
            "【两种延迟方式】deliverAt：指定精确的投递时间戳；deliverAfter：指定从当前时间开始的延迟时长。",
            "【Delayed Message Tracker】Broker 使用 Delayed Message Tracker 管理延迟消息。消息在到达投递时间前不会分发给消费者。",
            "【存储机制】延迟消息存储在普通的 Topic 中，但被标记为延迟状态。Tracker 定期检查并在到期时投递。",
            "【使用场景】延迟消息适用于定时任务、延迟通知、超时处理等场景。例如订单超时取消、延迟推送等。"
        ],
        keyDifficulties: [
            "【精度限制】延迟消息的精度取决于 Tracker 的检查间隔。默认配置下可能有几秒的误差，对精度要求高的场景需要调整配置。",
            "【内存压力】大量延迟消息会增加 Tracker 的内存占用。需要监控延迟消息数量，避免 OOM。",
            "【顺序影响】延迟消息会打破正常的消息顺序。如果需要保序，需要在业务层处理或避免混用延迟和非延迟消息。",
            "【Shared 订阅限制】延迟消息功能在 Shared 订阅模式下工作最佳。Exclusive 和 Failover 模式需要注意消息顺序问题。"
        ],
        handsOnPath: [
            "发送延迟消息（指定延迟时长）：producer.newMessage().deliverAfter(10, TimeUnit.SECONDS).send()",
            "发送延迟消息（指定投递时间）：producer.newMessage().deliverAt(timestamp).send()",
            "创建消费者，观察延迟消息的投递时间",
            "测试大量延迟消息对 Broker 内存的影响"
        ],
        selfCheck: [
            "延迟消息的两种指定方式是什么？各自如何使用？",
            "Delayed Message Tracker 的作用是什么？",
            "延迟消息适用于什么场景？",
            "大量延迟消息可能导致什么问题？如何监控？",
            "延迟消息对消息顺序有什么影响？"
        ],
        extensions: [
            "研究 Delayed Message Tracker 的配置参数和性能调优。",
            "探索延迟消息与定时任务系统的对比。",
            "学习如何监控延迟消息的积压情况。",
            "研究延迟消息在分布式事务中的应用。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#delayed-message-delivery",
            "https://pulsar.apache.org/docs/client-libraries-java/#delayed-messages"
        ]
    },
    "pulsar-w6-3": {
        lessonId: "pulsar-w6-3",
        background: [
            "【Seek 功能】官方文档：seek 允许消费者跳转到 Topic 中的指定位置，可以基于 MessageId 或时间戳。",
            "【seek(MessageId)】跳转到指定的消息位置。消费者会从该位置开始消费，之前的消息被跳过。",
            "【seek(timestamp)】跳转到指定时间点的消息。Pulsar 会找到该时间戳附近的消息位置。",
            "【resetCursor】pulsar-admin 提供 reset-cursor 命令，可以从管理端重置订阅的游标位置。",
            "【使用场景】消息回溯用于重新处理历史消息、故障恢复、数据重放等场景。"
        ],
        keyDifficulties: [
            "【seek 影响范围】seek 会影响订阅的所有消费者。在 Shared 订阅中，所有消费者都会从新位置开始消费。",
            "【时间戳精度】基于时间戳的 seek 依赖消息的 publishTime。精度取决于消息发布的密度。",
            "【消息丢失风险】seek 会跳过中间的消息。如果消息还未处理，seek 后这些消息不会被自动重新投递。",
            "【订阅类型影响】Exclusive 和 Failover 订阅 seek 相对简单；Shared 订阅需要确保所有消费者都准备好处理 seek 后的消息。"
        ],
        handsOnPath: [
            "使用 seek 跳转到最早位置：consumer.seek(MessageId.earliest)",
            "使用 seek 跳转到指定时间：consumer.seek(timestamp)",
            "使用 pulsar-admin 重置游标：pulsar-admin topics reset-cursor --subscription sub --time 10 topic",
            "测试 seek 对多个消费者的影响"
        ],
        selfCheck: [
            "seek(MessageId) 和 seek(timestamp) 的区别是什么？",
            "seek 会影响订阅的哪些消费者？",
            "基于时间戳的 seek 依赖什么？精度如何？",
            "如何从管理端重置订阅的游标？",
            "seek 可能导致什么问题？如何避免？"
        ],
        extensions: [
            "研究 seek 的实现原理和性能影响。",
            "探索如何在生产环境安全地进行消息回溯。",
            "学习如何记录和追踪 seek 操作。",
            "研究 seek 与事务的交互行为。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/admin-api-topics/#skip-all-messages",
            "https://pulsar.apache.org/docs/admin-api-topics/#reset-cursor"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w6-1": [
        {
            id: "pulsar-w6-1-q1",
            question: "Reader 与 Consumer 的主要区别是什么？",
            options: [
                "Reader 更快",
                "Reader 不创建订阅，不影响其他消费者的消费进度",
                "Reader 只能读取新消息",
                "两者完全相同"
            ],
            answer: 1,
            rationale: "Reader 是一种不创建订阅的消息读取接口，不影响其他消费者的消费进度。"
        },
        {
            id: "pulsar-w6-1-q2",
            question: "Reader 可以从哪些位置开始读取？",
            options: [
                "只能从最新位置",
                "Earliest、Latest 或指定的 MessageId",
                "只能从最早位置",
                "只能从指定的 MessageId"
            ],
            answer: 1,
            rationale: "Reader 可以从 Earliest（最早）、Latest（最新）或指定的 MessageId 开始读取。"
        },
        {
            id: "pulsar-w6-1-q3",
            question: "Reader 的读取进度是否持久化？",
            options: [
                "是，与 Consumer 相同",
                "否，应用重启后需要重新指定起始位置",
                "只在配置后持久化",
                "只持久化最后一条消息"
            ],
            answer: 1,
            rationale: "Reader 的读取位置不会持久化，应用重启后需要重新指定起始位置。"
        },
        {
            id: "pulsar-w6-1-q4",
            question: "Reader 适用于什么场景？",
            options: [
                "正常消费流程",
                "消息重放、审计日志分析、调试",
                "高吞吐生产",
                "消息广播"
            ],
            answer: 1,
            rationale: "Reader 适用于消息重放、审计日志分析、调试等需要独立读取的场景。"
        },
        {
            id: "pulsar-w6-1-q5",
            question: "Reader 是否需要 ACK 消息？",
            options: [
                "必须 ACK",
                "不需要 ACK",
                "可选 ACK",
                "自动 ACK"
            ],
            answer: 1,
            rationale: "Reader 不会创建订阅，不需要 ACK 消息。"
        },
        {
            id: "pulsar-w6-1-q6",
            question: "如何检查 Reader 是否有新消息可读？",
            options: [
                "使用 isEmpty()",
                "使用 hasMessageAvailable()",
                "使用 checkMessage()",
                "无法检查"
            ],
            answer: 1,
            rationale: "使用 hasMessageAvailable() 检查是否有新消息可读，避免空轮询。"
        },
        {
            id: "pulsar-w6-1-q7",
            question: "如何创建从最早位置开始的 Reader？",
            options: [
                "client.newReader().topic(topic).create()",
                "client.newReader(Schema.STRING).topic(topic).startMessageId(MessageId.earliest).create()",
                "client.createReader(topic, earliest)",
                "Reader.create(topic)"
            ],
            answer: 1,
            rationale: "使用 startMessageId(MessageId.earliest) 指定从最早位置开始。"
        },
        {
            id: "pulsar-w6-1-q8",
            question: "大量 Reader 同时读取可能导致什么问题？",
            options: [
                "无影响",
                "影响 Broker 性能",
                "消息丢失",
                "订阅被删除"
            ],
            answer: 1,
            rationale: "每个 Reader 都会占用一定的 Broker 资源，大量 Reader 可能影响性能。"
        },
        {
            id: "pulsar-w6-1-q9",
            question: "Reader 没有什么机制？",
            options: [
                "消息读取",
                "ACK 机制和自动重投",
                "Schema 支持",
                "消息过滤"
            ],
            answer: 1,
            rationale: "Reader 没有 ACK 机制，因此没有消息重投。处理失败需要应用自行重试。"
        },
        {
            id: "pulsar-w6-1-q10",
            question: "Reader 每次创建都需要做什么？",
            options: [
                "指定订阅名",
                "指定起始位置",
                "配置 ACK 超时",
                "设置消费者组"
            ],
            answer: 1,
            rationale: "Reader 每次创建都需要指定起始位置，因为它不持久化进度。"
        },
        {
            id: "pulsar-w6-1-q11",
            question: "Reader 读取消息是否会影响正常消费？",
            options: [
                "会影响",
                "不会影响",
                "只在特定条件下影响",
                "取决于配置"
            ],
            answer: 1,
            rationale: "Reader 不创建订阅，不会影响其他消费者的消费进度。"
        },
        {
            id: "pulsar-w6-1-q12",
            question: "Reader 可以多次从同一位置读取消息吗？",
            options: [
                "不可以",
                "可以，不会影响正常消费",
                "只能读取一次",
                "需要管理员权限"
            ],
            answer: 1,
            rationale: "Reader 可以多次从同一位置读取消息而不影响正常消费。"
        }
    ],
    "pulsar-w6-2": [
        {
            id: "pulsar-w6-2-q1",
            question: "延迟消息的两种指定方式是什么？",
            options: [
                "delay 和 schedule",
                "deliverAt 和 deliverAfter",
                "timeout 和 delay",
                "wait 和 schedule"
            ],
            answer: 1,
            rationale: "两种方式：deliverAt 指定精确投递时间戳，deliverAfter 指定延迟时长。"
        },
        {
            id: "pulsar-w6-2-q2",
            question: "Delayed Message Tracker 的作用是什么？",
            options: [
                "存储消息",
                "管理延迟消息，在到达投递时间时分发",
                "压缩消息",
                "加密消息"
            ],
            answer: 1,
            rationale: "Broker 使用 Delayed Message Tracker 管理延迟消息，在到期时投递给消费者。"
        },
        {
            id: "pulsar-w6-2-q3",
            question: "延迟消息存储在哪里？",
            options: [
                "专门的延迟队列",
                "普通 Topic 中，被标记为延迟状态",
                "内存中",
                "外部数据库"
            ],
            answer: 1,
            rationale: "延迟消息存储在普通的 Topic 中，但被标记为延迟状态。"
        },
        {
            id: "pulsar-w6-2-q4",
            question: "延迟消息适用于什么场景？",
            options: [
                "实时交易",
                "定时任务、延迟通知、超时处理",
                "日志收集",
                "数据备份"
            ],
            answer: 1,
            rationale: "延迟消息适用于定时任务、延迟通知、超时处理等场景。"
        },
        {
            id: "pulsar-w6-2-q5",
            question: "大量延迟消息可能导致什么问题？",
            options: [
                "消息丢失",
                "Tracker 内存占用过高，可能 OOM",
                "网络中断",
                "订阅被删除"
            ],
            answer: 1,
            rationale: "大量延迟消息会增加 Tracker 的内存占用，需要监控避免 OOM。"
        },
        {
            id: "pulsar-w6-2-q6",
            question: "如何发送 10 秒后投递的延迟消息？",
            options: [
                "producer.send().delay(10)",
                "producer.newMessage().deliverAfter(10, TimeUnit.SECONDS).send()",
                "producer.delayMessage(10)",
                "producer.schedule(10)"
            ],
            answer: 1,
            rationale: "使用 deliverAfter 方法指定延迟时长：deliverAfter(10, TimeUnit.SECONDS)。"
        },
        {
            id: "pulsar-w6-2-q7",
            question: "延迟消息对消息顺序有什么影响？",
            options: [
                "无影响",
                "会打破正常的消息顺序",
                "保证顺序",
                "只影响分区内顺序"
            ],
            answer: 1,
            rationale: "延迟消息会打破正常的消息顺序，需要在业务层处理。"
        },
        {
            id: "pulsar-w6-2-q8",
            question: "延迟消息功能在哪种订阅模式下工作最佳？",
            options: [
                "Exclusive",
                "Shared",
                "Failover",
                "Key_Shared"
            ],
            answer: 1,
            rationale: "延迟消息功能在 Shared 订阅模式下工作最佳。"
        },
        {
            id: "pulsar-w6-2-q9",
            question: "延迟消息的精度取决于什么？",
            options: [
                "消息大小",
                "Tracker 的检查间隔",
                "网络延迟",
                "消费者数量"
            ],
            answer: 1,
            rationale: "延迟消息的精度取决于 Tracker 的检查间隔，默认配置下可能有几秒误差。"
        },
        {
            id: "pulsar-w6-2-q10",
            question: "deliverAt 方法需要传入什么参数？",
            options: [
                "延迟时长",
                "精确的投递时间戳",
                "消息内容",
                "Topic 名称"
            ],
            answer: 1,
            rationale: "deliverAt 需要传入精确的投递时间戳。"
        },
        {
            id: "pulsar-w6-2-q11",
            question: "消息在到达投递时间前处于什么状态？",
            options: [
                "已投递给消费者",
                "对消费者不可见",
                "被删除",
                "被压缩"
            ],
            answer: 1,
            rationale: "消息在到达投递时间前不会分发给消费者，对消费者不可见。"
        },
        {
            id: "pulsar-w6-2-q12",
            question: "延迟消息的一个典型应用是什么？",
            options: [
                "实时聊天",
                "订单超时取消",
                "日志收集",
                "数据同步"
            ],
            answer: 1,
            rationale: "订单超时取消是延迟消息的典型应用，可以在订单创建后发送延迟消息检查状态。"
        }
    ],
    "pulsar-w6-3": [
        {
            id: "pulsar-w6-3-q1",
            question: "seek 功能的作用是什么？",
            options: [
                "搜索消息内容",
                "跳转到 Topic 中的指定位置",
                "查找消费者",
                "定位 Broker"
            ],
            answer: 1,
            rationale: "seek 允许消费者跳转到 Topic 中的指定位置，可以基于 MessageId 或时间戳。"
        },
        {
            id: "pulsar-w6-3-q2",
            question: "seek(timestamp) 依赖什么？",
            options: [
                "消息内容",
                "消息的 publishTime",
                "消息大小",
                "消费者数量"
            ],
            answer: 1,
            rationale: "基于时间戳的 seek 依赖消息的 publishTime。"
        },
        {
            id: "pulsar-w6-3-q3",
            question: "seek 会影响订阅的哪些消费者？",
            options: [
                "只影响调用 seek 的消费者",
                "影响订阅的所有消费者",
                "不影响任何消费者",
                "只影响主消费者"
            ],
            answer: 1,
            rationale: "seek 会影响订阅的所有消费者，在 Shared 订阅中所有消费者都会从新位置开始。"
        },
        {
            id: "pulsar-w6-3-q4",
            question: "如何从管理端重置订阅的游标？",
            options: [
                "pulsar-admin topics delete-cursor",
                "pulsar-admin topics reset-cursor --subscription sub --time 10 topic",
                "pulsar-admin subscriptions reset",
                "pulsar-admin cursor reset"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin topics reset-cursor 命令可以从管理端重置游标。"
        },
        {
            id: "pulsar-w6-3-q5",
            question: "seek 可能导致什么问题？",
            options: [
                "消息重复",
                "跳过的消息不会被自动重新投递",
                "消费者断开",
                "Topic 被删除"
            ],
            answer: 1,
            rationale: "seek 会跳过中间的消息，这些消息不会被自动重新投递。"
        },
        {
            id: "pulsar-w6-3-q6",
            question: "如何跳转到最早位置？",
            options: [
                "consumer.seek(0)",
                "consumer.seek(MessageId.earliest)",
                "consumer.seekToBeginning()",
                "consumer.reset()"
            ],
            answer: 1,
            rationale: "使用 consumer.seek(MessageId.earliest) 跳转到最早位置。"
        },
        {
            id: "pulsar-w6-3-q7",
            question: "消息回溯适用于什么场景？",
            options: [
                "普通消费",
                "重新处理历史消息、故障恢复、数据重放",
                "消息压缩",
                "负载均衡"
            ],
            answer: 1,
            rationale: "消息回溯用于重新处理历史消息、故障恢复、数据重放等场景。"
        },
        {
            id: "pulsar-w6-3-q8",
            question: "seek(MessageId) 的效果是什么？",
            options: [
                "删除该消息",
                "从该位置开始消费，之前的消息被跳过",
                "发送该消息",
                "确认该消息"
            ],
            answer: 1,
            rationale: "seek 后消费者会从该位置开始消费，之前的消息被跳过。"
        },
        {
            id: "pulsar-w6-3-q9",
            question: "基于时间戳 seek 的精度取决于什么？",
            options: [
                "网络延迟",
                "消息发布的密度",
                "Broker 性能",
                "消费者数量"
            ],
            answer: 1,
            rationale: "精度取决于消息发布的密度，Pulsar 会找到时间戳附近的消息位置。"
        },
        {
            id: "pulsar-w6-3-q10",
            question: "在 Shared 订阅中 seek 后会发生什么？",
            options: [
                "只有一个消费者受影响",
                "所有消费者都会从新位置开始消费",
                "无影响",
                "订阅被删除"
            ],
            answer: 1,
            rationale: "在 Shared 订阅中，所有消费者都会从新位置开始消费。"
        },
        {
            id: "pulsar-w6-3-q11",
            question: "resetCursor 命令的作用是什么？",
            options: [
                "删除游标",
                "从管理端重置订阅的游标位置",
                "创建新游标",
                "查看游标状态"
            ],
            answer: 1,
            rationale: "pulsar-admin 提供 reset-cursor 命令，可以从管理端重置订阅的游标位置。"
        },
        {
            id: "pulsar-w6-3-q12",
            question: "Exclusive 和 Failover 订阅 seek 相比 Shared 有什么特点？",
            options: [
                "无法 seek",
                "相对简单，因为只有一个活跃消费者",
                "更复杂",
                "不支持时间戳 seek"
            ],
            answer: 1,
            rationale: "Exclusive 和 Failover 订阅 seek 相对简单，因为只有一个活跃消费者。"
        }
    ]
}
