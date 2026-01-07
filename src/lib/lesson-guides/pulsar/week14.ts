import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week14Guides: Record<string, LessonGuide> = {
    "pulsar-w14-1": {
        lessonId: "pulsar-w14-1",
        background: [
            "【State Store 概念】官方文档：Stateful Functions 可以使用 State Store 存储和检索状态数据，状态持久化在 BookKeeper 中，支持故障恢复。",
            "【状态 API】通过 context.putState(key, value) 存储状态，context.getState(key) 检索状态。状态是每个 Function 实例独立的。",
            "【状态持久化】状态自动持久化到 BookKeeper，无需手动管理。Function 重启后可以恢复之前的状态。",
            "【状态访问模式】支持 key-value 风格的状态访问，适合简单的计数、累加、缓存等场景。",
            "【增量计数器】提供 context.incrCounter(key, amount) 原子增量操作，适合计数场景，避免读-改-写的竞态条件。"
        ],
        keyDifficulties: [
            "【状态隔离】每个 Function 实例有独立的状态空间。相同 Function 的不同实例之间状态不共享，需要设计好分区策略。",
            "【状态大小限制】状态存储在 BookKeeper，大状态会影响性能和恢复时间。应该控制状态大小，或使用外部存储。",
            "【状态一致性】使用 Effectively-once 语义时，状态更新与消息处理是原子的。At-least-once 时状态可能被更新多次。",
            "【状态清理】状态不会自动清理，需要业务逻辑管理状态生命周期，避免状态无限增长。"
        ],
        handsOnPath: [
            "编写一个有状态 Function：统计每个 key 出现的次数。",
            "测试状态持久化：重启 Function，验证状态是否恢复。",
            "使用 incrCounter 实现原子计数器，对比 get-increment-put 的方式。",
            "监控状态存储大小，设置告警避免状态过大。"
        ],
        selfCheck: [
            "如何在 Function 中存储和检索状态？使用什么 API？",
            "状态存储在哪里？如何保证持久化？",
            "不同 Function 实例之间状态是否共享？",
            "incrCounter 相比 getState + putState 有什么优势？",
            "状态大小有什么影响？如何控制？"
        ],
        extensions: [
            "研究状态存储的底层实现，了解 BookKeeper Table Service。",
            "探索如何迁移 Function 状态（增加实例时）。",
            "学习如何监控和管理 Function 状态。",
            "研究外部状态存储（如 Redis）与内置状态存储的对比。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/functions-develop-state/",
            "https://pulsar.apache.org/docs/functions-develop-api/#state-management"
        ]
    },
    "pulsar-w14-2": {
        lessonId: "pulsar-w14-2",
        background: [
            "【窗口函数概念】官方文档：Window Functions 可以对一段时间或一批消息进行聚合计算，而不是逐条处理。",
            "【Tumbling Window】滚动窗口：固定大小的非重叠窗口。例如每 5 分钟一个窗口，窗口之间没有重叠。",
            "【Sliding Window】滑动窗口：固定大小的重叠窗口。例如窗口大小 10 分钟，每 5 分钟滑动一次，窗口之间有重叠。",
            "【窗口配置】通过 windowLengthCount（消息数）或 windowLengthDuration（时间）配置窗口大小；slidingIntervalCount 或 slidingIntervalDuration 配置滑动间隔。",
            "【窗口触发】窗口满足条件（大小或时间）后触发，调用 Function 处理窗口内所有消息。"
        ],
        keyDifficulties: [
            "【窗口类型选择】Tumbling 适合独立统计（如每分钟 PV），Sliding 适合平滑统计（如移动平均）。根据业务需求选择。",
            "【迟到数据处理】窗口关闭后到达的数据会被丢弃。如果业务对迟到数据敏感，需要考虑使用更复杂的流处理框架。",
            "【窗口内存消耗】窗口需要缓存窗口内所有消息，大窗口会消耗大量内存。需要权衡窗口大小和资源消耗。",
            "【窗口与并行度】每个 Function 实例有独立的窗口。增加实例不会合并窗口，需要设计好数据分区。"
        ],
        handsOnPath: [
            "编写 Tumbling Window Function：计算每分钟消息数量。",
            "编写 Sliding Window Function：计算 5 分钟移动平均值。",
            "测试不同窗口配置对内存和延迟的影响。",
            "模拟迟到数据，观察窗口函数的处理行为。"
        ],
        selfCheck: [
            "Tumbling Window 和 Sliding Window 的区别是什么？",
            "如何配置窗口大小和滑动间隔？",
            "窗口什么时候触发计算？",
            "迟到数据如何处理？",
            "窗口函数的内存消耗与什么因素相关？"
        ],
        extensions: [
            "研究 Flink 的窗口机制，对比与 Pulsar Functions 窗口的差异。",
            "探索如何处理迟到数据（Watermark、Allowed Lateness）。",
            "学习 Session Window 的概念和应用场景。",
            "研究窗口函数在实时报表场景的应用。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/functions-develop-api/#window-functions",
            "https://pulsar.apache.org/docs/functions-deploy/#window-functions"
        ]
    },
    "pulsar-w14-3": {
        lessonId: "pulsar-w14-3",
        background: [
            "【处理保证配置】通过 processingGuarantees 配置处理语义：ATLEAST_ONCE（默认）、ATMOST_ONCE、EFFECTIVELY_ONCE。",
            "【并行度调优】parallelism 应该与输入 Topic 分区数匹配。过多会有空闲实例，过少会限制吞吐。",
            "【资源限制】cpu 和 ram 配置控制 Function 资源使用。配置不当可能导致 OOM 或资源浪费。",
            "【自动 ACK 配置】autoAck 配置是否自动确认消息。设为 false 时需要手动调用 context.getCurrentRecord().ack()。",
            "【超时配置】timeoutMs 配置处理超时。超时的消息会被重新投递（At-least-once）或跳过（At-most-once）。"
        ],
        keyDifficulties: [
            "【Effectively-once 开销】Effectively-once 使用事务实现，有额外的延迟和资源开销。只在确实需要时使用。",
            "【资源估算】估算 Function 资源需求需要考虑：消息大小、处理逻辑复杂度、状态大小、并发请求数等。",
            "【弹性伸缩】手动调整 parallelism 需要重新部署。可以使用 Function Mesh 实现自动伸缩。",
            "【失败处理策略】配置 maxMessageRetries 和 deadLetterTopic 处理持续失败的消息，避免阻塞。"
        ],
        handsOnPath: [
            "对比测试三种处理保证的性能差异。",
            "调整资源配置，观察 Function 性能变化和资源使用。",
            "配置死信 Topic，测试失败消息的处理流程。",
            "使用 Prometheus 监控 Function 的详细指标。"
        ],
        selfCheck: [
            "三种处理保证各有什么特点和开销？",
            "如何选择合适的 parallelism 值？",
            "资源配置不当会导致什么问题？",
            "如何处理持续失败的消息？",
            "autoAck 配置的作用是什么？什么时候需要设为 false？"
        ],
        extensions: [
            "研究 Function Mesh 的自动伸缩配置。",
            "探索 Function 的高级监控和告警配置。",
            "学习如何进行 Function 的性能测试和调优。",
            "研究 Function 在生产环境的最佳实践。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/functions-concepts/#processing-guarantees",
            "https://pulsar.apache.org/docs/functions-deploy/#parallelism"
        ]
    }
}

export const week14Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w14-1": [
        {
            id: "pulsar-w14-1-q1",
            question: "Stateful Function 的状态存储在哪里？",
            options: [
                "内存",
                "BookKeeper",
                "ZooKeeper",
                "本地磁盘"
            ],
            answer: 1,
            rationale: "状态自动持久化到 BookKeeper，支持故障恢复。"
        },
        {
            id: "pulsar-w14-1-q2",
            question: "如何在 Function 中存储状态？",
            options: [
                "context.saveState(key, value)",
                "context.putState(key, value)",
                "context.setState(key, value)",
                "context.store(key, value)"
            ],
            answer: 1,
            rationale: "使用 context.putState(key, value) 存储状态。"
        },
        {
            id: "pulsar-w14-1-q3",
            question: "不同 Function 实例之间状态是否共享？",
            options: [
                "共享",
                "不共享，每个实例独立",
                "部分共享",
                "取决于配置"
            ],
            answer: 1,
            rationale: "每个 Function 实例有独立的状态空间，相同 Function 的不同实例之间状态不共享。"
        },
        {
            id: "pulsar-w14-1-q4",
            question: "incrCounter 相比 getState + putState 有什么优势？",
            options: [
                "更快",
                "原子操作，避免竞态条件",
                "更省内存",
                "更易使用"
            ],
            answer: 1,
            rationale: "incrCounter 是原子增量操作，避免读-改-写的竞态条件。"
        },
        {
            id: "pulsar-w14-1-q5",
            question: "Function 重启后状态会怎样？",
            options: [
                "丢失",
                "自动恢复",
                "需要手动恢复",
                "取决于配置"
            ],
            answer: 1,
            rationale: "状态持久化在 BookKeeper，Function 重启后可以自动恢复之前的状态。"
        },
        {
            id: "pulsar-w14-1-q6",
            question: "状态大小过大会有什么影响？",
            options: [
                "无影响",
                "影响性能和恢复时间",
                "自动压缩",
                "自动清理"
            ],
            answer: 1,
            rationale: "大状态会影响性能和恢复时间，应该控制状态大小。"
        },
        {
            id: "pulsar-w14-1-q7",
            question: "状态是否会自动清理？",
            options: [
                "会自动清理",
                "不会，需要业务逻辑管理",
                "按时间自动清理",
                "按大小自动清理"
            ],
            answer: 1,
            rationale: "状态不会自动清理，需要业务逻辑管理状态生命周期，避免无限增长。"
        },
        {
            id: "pulsar-w14-1-q8",
            question: "如何检索状态？",
            options: [
                "context.loadState(key)",
                "context.getState(key)",
                "context.readState(key)",
                "context.fetchState(key)"
            ],
            answer: 1,
            rationale: "使用 context.getState(key) 检索状态。"
        },
        {
            id: "pulsar-w14-1-q9",
            question: "使用 Effectively-once 时，状态更新有什么保证？",
            options: [
                "可能重复更新",
                "与消息处理原子，不会重复",
                "可能丢失",
                "无保证"
            ],
            answer: 1,
            rationale: "使用 Effectively-once 时，状态更新与消息处理是原子的，不会重复更新。"
        },
        {
            id: "pulsar-w14-1-q10",
            question: "状态访问模式是什么风格？",
            options: [
                "SQL 风格",
                "Key-Value 风格",
                "文档风格",
                "图风格"
            ],
            answer: 1,
            rationale: "支持 key-value 风格的状态访问，适合简单的计数、累加、缓存等场景。"
        },
        {
            id: "pulsar-w14-1-q11",
            question: "如何原子增加计数器？",
            options: [
                "context.addCounter(key, amount)",
                "context.incrCounter(key, amount)",
                "context.incrementCounter(key, amount)",
                "context.updateCounter(key, amount)"
            ],
            answer: 1,
            rationale: "使用 context.incrCounter(key, amount) 原子增加计数器。"
        },
        {
            id: "pulsar-w14-1-q12",
            question: "状态存储适合什么场景？",
            options: [
                "复杂查询",
                "简单的计数、累加、缓存等",
                "大数据分析",
                "关系数据"
            ],
            answer: 1,
            rationale: "状态存储适合简单的 key-value 风格场景，如计数、累加、缓存等。"
        }
    ],
    "pulsar-w14-2": [
        {
            id: "pulsar-w14-2-q1",
            question: "Tumbling Window（滚动窗口）的特点是什么？",
            options: [
                "窗口重叠",
                "固定大小的非重叠窗口",
                "窗口大小可变",
                "无窗口边界"
            ],
            answer: 1,
            rationale: "Tumbling Window 是固定大小的非重叠窗口，窗口之间没有重叠。"
        },
        {
            id: "pulsar-w14-2-q2",
            question: "Sliding Window（滑动窗口）的特点是什么？",
            options: [
                "窗口不重叠",
                "固定大小的重叠窗口",
                "窗口大小可变",
                "只有一个窗口"
            ],
            answer: 1,
            rationale: "Sliding Window 是固定大小的重叠窗口，窗口之间有重叠。"
        },
        {
            id: "pulsar-w14-2-q3",
            question: "如何配置窗口大小（基于时间）？",
            options: [
                "windowSize",
                "windowLengthDuration",
                "windowTime",
                "windowDuration"
            ],
            answer: 1,
            rationale: "使用 windowLengthDuration 配置基于时间的窗口大小。"
        },
        {
            id: "pulsar-w14-2-q4",
            question: "窗口什么时候触发计算？",
            options: [
                "每条消息",
                "窗口满足条件（大小或时间）后",
                "手动触发",
                "随机触发"
            ],
            answer: 1,
            rationale: "窗口满足条件（大小或时间）后触发，调用 Function 处理窗口内所有消息。"
        },
        {
            id: "pulsar-w14-2-q5",
            question: "窗口关闭后到达的数据会怎样？",
            options: [
                "等待下一个窗口",
                "被丢弃",
                "加入当前窗口",
                "触发重新计算"
            ],
            answer: 1,
            rationale: "窗口关闭后到达的迟到数据会被丢弃。"
        },
        {
            id: "pulsar-w14-2-q6",
            question: "大窗口有什么影响？",
            options: [
                "无影响",
                "消耗大量内存",
                "提高性能",
                "减少延迟"
            ],
            answer: 1,
            rationale: "大窗口需要缓存窗口内所有消息，会消耗大量内存。"
        },
        {
            id: "pulsar-w14-2-q7",
            question: "Tumbling Window 适合什么场景？",
            options: [
                "移动平均",
                "独立统计（如每分钟 PV）",
                "实时告警",
                "数据清洗"
            ],
            answer: 1,
            rationale: "Tumbling Window 适合独立统计场景，如每分钟 PV、每小时销售额等。"
        },
        {
            id: "pulsar-w14-2-q8",
            question: "Sliding Window 适合什么场景？",
            options: [
                "独立统计",
                "平滑统计（如移动平均）",
                "数据清洗",
                "简单过滤"
            ],
            answer: 1,
            rationale: "Sliding Window 适合平滑统计场景，如移动平均、趋势分析等。"
        },
        {
            id: "pulsar-w14-2-q9",
            question: "如何配置滑动间隔（基于消息数）？",
            options: [
                "slideInterval",
                "slidingIntervalCount",
                "slideCount",
                "intervalCount"
            ],
            answer: 1,
            rationale: "使用 slidingIntervalCount 配置基于消息数的滑动间隔。"
        },
        {
            id: "pulsar-w14-2-q10",
            question: "每个 Function 实例的窗口是否独立？",
            options: [
                "共享窗口",
                "独立窗口",
                "部分共享",
                "取决于配置"
            ],
            answer: 1,
            rationale: "每个 Function 实例有独立的窗口，增加实例不会合并窗口。"
        },
        {
            id: "pulsar-w14-2-q11",
            question: "如何配置窗口大小（基于消息数）？",
            options: [
                "windowSize",
                "windowLengthCount",
                "windowCount",
                "messageCount"
            ],
            answer: 1,
            rationale: "使用 windowLengthCount 配置基于消息数的窗口大小。"
        },
        {
            id: "pulsar-w14-2-q12",
            question: "如果业务对迟到数据敏感应该怎么办？",
            options: [
                "忽略迟到数据",
                "使用更复杂的流处理框架（如 Flink）",
                "增大窗口",
                "减小并行度"
            ],
            answer: 1,
            rationale: "如果对迟到数据敏感，应考虑使用支持 Watermark 和 Allowed Lateness 的流处理框架如 Flink。"
        }
    ],
    "pulsar-w14-3": [
        {
            id: "pulsar-w14-3-q1",
            question: "默认的处理保证是什么？",
            options: [
                "ATMOST_ONCE",
                "ATLEAST_ONCE",
                "EFFECTIVELY_ONCE",
                "无保证"
            ],
            answer: 1,
            rationale: "默认处理保证是 ATLEAST_ONCE。"
        },
        {
            id: "pulsar-w14-3-q2",
            question: "EFFECTIVELY_ONCE 有什么额外开销？",
            options: [
                "无开销",
                "使用事务，有额外延迟和资源开销",
                "只有 CPU 开销",
                "只有内存开销"
            ],
            answer: 1,
            rationale: "EFFECTIVELY_ONCE 使用事务实现，有额外的延迟和资源开销。"
        },
        {
            id: "pulsar-w14-3-q3",
            question: "parallelism 应该如何选择？",
            options: [
                "越大越好",
                "与输入 Topic 分区数匹配",
                "固定为 1",
                "随机选择"
            ],
            answer: 1,
            rationale: "parallelism 应该与输入 Topic 分区数匹配，过多会有空闲实例。"
        },
        {
            id: "pulsar-w14-3-q4",
            question: "autoAck 设为 false 时需要做什么？",
            options: [
                "无需操作",
                "手动调用 ack()",
                "配置死信 Topic",
                "增加超时时间"
            ],
            answer: 1,
            rationale: "autoAck 为 false 时需要手动调用 context.getCurrentRecord().ack() 确认消息。"
        },
        {
            id: "pulsar-w14-3-q5",
            question: "timeoutMs 配置的作用是什么？",
            options: [
                "连接超时",
                "处理超时",
                "发送超时",
                "确认超时"
            ],
            answer: 1,
            rationale: "timeoutMs 配置处理超时，超时的消息会被重新投递或跳过。"
        },
        {
            id: "pulsar-w14-3-q6",
            question: "如何处理持续失败的消息？",
            options: [
                "无法处理",
                "配置 maxMessageRetries 和 deadLetterTopic",
                "忽略",
                "停止 Function"
            ],
            answer: 1,
            rationale: "配置 maxMessageRetries 和 deadLetterTopic 处理持续失败的消息，避免阻塞。"
        },
        {
            id: "pulsar-w14-3-q7",
            question: "资源配置不当可能导致什么问题？",
            options: [
                "无问题",
                "OOM 或资源浪费",
                "只影响性能",
                "只影响可靠性"
            ],
            answer: 1,
            rationale: "资源配置不当可能导致 OOM（配置过小）或资源浪费（配置过大）。"
        },
        {
            id: "pulsar-w14-3-q8",
            question: "如何配置 CPU 限制？",
            options: [
                "--cpu-limit",
                "--cpu",
                "--cores",
                "--processor"
            ],
            answer: 1,
            rationale: "使用 --cpu 参数配置 Function 的 CPU 限制。"
        },
        {
            id: "pulsar-w14-3-q9",
            question: "手动调整 parallelism 需要什么操作？",
            options: [
                "自动生效",
                "重新部署 Function",
                "重启 Broker",
                "修改配置文件"
            ],
            answer: 1,
            rationale: "手动调整 parallelism 需要重新部署 Function。"
        },
        {
            id: "pulsar-w14-3-q10",
            question: "如何实现 Function 自动伸缩？",
            options: [
                "无法实现",
                "使用 Function Mesh",
                "手动监控调整",
                "Broker 自动处理"
            ],
            answer: 1,
            rationale: "可以使用 Function Mesh 实现 Function 的自动伸缩。"
        },
        {
            id: "pulsar-w14-3-q11",
            question: "ATMOST_ONCE 处理超时的消息会怎样？",
            options: [
                "重新投递",
                "跳过（丢弃）",
                "等待",
                "发送到死信"
            ],
            answer: 1,
            rationale: "ATMOST_ONCE 时，超时的消息会被跳过，不会重新投递。"
        },
        {
            id: "pulsar-w14-3-q12",
            question: "如何监控 Function 的详细指标？",
            options: [
                "查看日志",
                "使用 Prometheus",
                "pulsar-admin 命令",
                "无法监控"
            ],
            answer: 1,
            rationale: "可以使用 Prometheus 监控 Function 的详细指标，如处理延迟、失败率等。"
        }
    ]
}
