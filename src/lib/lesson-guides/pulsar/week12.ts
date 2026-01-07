import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week12Guides: Record<string, LessonGuide> = {
    "pulsar-w12-1": {
        lessonId: "pulsar-w12-1",
        background: [
            "【事务定义】官方文档：Pulsar 事务允许在单个原子操作中向多个 Topic 发送消息并确认消息，实现跨 Topic 的 Exactly-once 语义。",
            "【Transaction Coordinator】事务由 Transaction Coordinator（TC）管理，负责事务的创建、状态跟踪和最终提交或回滚。TC 运行在 Broker 上。",
            "【事务 ID】每个事务有全局唯一的 Transaction ID（TxnID），格式为 mostSigBits:leastSigBits，用于跟踪事务状态。",
            "【两阶段提交】Pulsar 事务使用两阶段提交协议：第一阶段准备（消息写入但不可见），第二阶段提交（消息变为可见）或回滚（消息删除）。",
            "【事务日志】事务状态和操作记录在专门的事务日志 Topic 中，确保事务状态可恢复，即使 TC 故障也能正确完成或回滚事务。"
        ],
        keyDifficulties: [
            "【事务范围理解】Pulsar 事务可以跨多个 Topic 和 Subscription，一个事务可以同时发送消息到多个 Topic 并确认其他 Topic 的消息。",
            "【Exactly-once 实现】事务结合消息去重（Producer 端）和事务确认（Consumer 端），实现端到端的 Exactly-once 语义。",
            "【事务隔离级别】事务未提交前，消息对其他 Consumer 不可见（Read Committed）。这确保了数据一致性但增加了延迟。",
            "【TC 故障恢复】如果 TC 故障，待处理的事务会被新的 TC 接管，根据事务日志决定提交或回滚。"
        ],
        handsOnPath: [
            "阅读 Pulsar 事务架构文档，理解两阶段提交的工作流程。",
            "绘制事务生命周期图：创建 → 发送/确认 → 提交/回滚。",
            "研究事务日志 Topic 的设计，理解如何保证事务状态可恢复。",
            "思考你的业务场景哪些需要事务保证，评估使用事务的收益和成本。"
        ],
        selfCheck: [
            "Pulsar 事务可以实现什么功能？它的主要用途是什么？",
            "Transaction Coordinator 的作用是什么？它运行在哪里？",
            "两阶段提交协议是什么？每个阶段做什么？",
            "事务未提交前，消息对其他 Consumer 可见吗？",
            "TC 故障时，待处理的事务如何恢复？"
        ],
        extensions: [
            "研究 Pulsar 事务与 Kafka 事务的实现差异。",
            "探索事务在流处理场景（Pulsar Functions）中的应用。",
            "学习事务的性能开销和优化策略。",
            "研究分布式事务的理论基础：两阶段提交、三阶段提交、Saga 模式等。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/txn-what/",
            "https://pulsar.apache.org/docs/txn-why/"
        ]
    },
    "pulsar-w12-2": {
        lessonId: "pulsar-w12-2",
        background: [
            "【启用事务】使用事务需要在 PulsarClient 创建时启用：PulsarClient.builder().enableTransaction(true).build()。",
            "【创建事务】通过 client.newTransaction().build() 创建事务，返回 Transaction 对象。可以设置事务超时时间。",
            "【事务发送】在事务中发送消息：producer.newMessage(txn).value(msg).send()。消息会被标记为事务消息。",
            "【事务确认】在事务中确认消息：consumer.acknowledgeAsync(messageId, txn)。确认会在事务提交后生效。",
            "【提交和回滚】txn.commit() 提交事务使所有操作生效；txn.abort() 回滚事务撤销所有操作。"
        ],
        keyDifficulties: [
            "【事务中的多操作】一个事务可以包含：向多个 Topic 发送消息、确认多个 Subscription 的消息。所有操作原子生效。",
            "【错误处理】事务操作失败时应该调用 abort() 回滚。不要让事务超时，超时的事务会被强制回滚。",
            "【Consumer 配置】使用事务确认需要 Consumer 启用事务支持并使用特定的确认 API。",
            "【异步 API】推荐使用异步 API（newTransactionAsync、commitAsync、abortAsync）以获得更好的性能。"
        ],
        handsOnPath: [
            "编写代码在事务中向两个 Topic 发送消息，验证原子性：提交后两个 Topic 都能收到消息。",
            "测试事务回滚：在事务中发送消息后调用 abort()，验证消息不可见。",
            "实现消费-处理-发送模式：在事务中确认输入消息并发送输出消息。",
            "测试事务超时：创建事务后不提交，观察超时后的行为。"
        ],
        selfCheck: [
            "如何在 PulsarClient 中启用事务支持？",
            "如何创建一个事务？如何设置事务超时？",
            "如何在事务中发送消息？与普通发送有什么区别？",
            "commit() 和 abort() 的区别是什么？什么时候使用？",
            "一个事务可以包含哪些操作？"
        ],
        extensions: [
            "研究事务消息的存储格式和元数据。",
            "探索事务在 Pulsar Functions 中的使用方式。",
            "学习如何监控事务的执行情况。",
            "研究大事务（包含大量消息）的性能优化。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/txn-use/",
            "https://pulsar.apache.org/docs/client-libraries-java/#transactions"
        ]
    },
    "pulsar-w12-3": {
        lessonId: "pulsar-w12-3",
        background: [
            "【Broker 启用事务】需要在 broker.conf 中配置 transactionCoordinatorEnabled=true 启用事务支持。",
            "【事务超时配置】transactionMetadataStoreProviderClassName 配置事务元数据存储；事务超时默认 3 分钟，可通过客户端配置调整。",
            "【事务缓冲区】事务消息先写入事务缓冲区（Transaction Buffer），提交后才写入实际 Topic。缓冲区大小影响性能。",
            "【TC 分区】Transaction Coordinator 可以分区部署，提高吞吐量和可用性。分区数由 transactionCoordinatorPartitions 配置。",
            "【事务日志保留】事务日志 Topic 需要配置适当的保留策略，太短可能导致恢复问题，太长浪费存储。"
        ],
        keyDifficulties: [
            "【事务性能开销】事务增加了额外的协调开销和延迟。两阶段提交需要额外的网络往返。需要评估是否真正需要事务。",
            "【事务超时设置】超时太短可能导致正常事务被回滚，太长会占用资源。根据业务操作耗时设置合理的超时。",
            "【事务与普通消息混用】同一 Topic 可以同时包含事务消息和普通消息。Consumer 读取时会自动处理。",
            "【事务失败重试】事务失败后的重试需要谨慎，要确保操作的幂等性，避免重复执行产生副作用。"
        ],
        handsOnPath: [
            "配置 Broker 启用事务支持，验证配置生效。",
            "测试不同事务超时配置对行为的影响。",
            "监控事务相关指标：活跃事务数、提交/回滚率、事务延迟。",
            "测试 TC 故障恢复：停止 TC 所在 Broker，观察事务如何恢复。"
        ],
        selfCheck: [
            "如何在 Broker 上启用事务支持？需要哪些配置？",
            "事务超时如何配置？设置不当有什么影响？",
            "Transaction Buffer 的作用是什么？",
            "事务相比普通消息有什么性能开销？",
            "事务失败后如何安全地重试？"
        ],
        extensions: [
            "研究事务在高吞吐场景下的性能调优。",
            "探索 Pulsar 事务与 Flink Exactly-once 的集成。",
            "学习如何设计支持事务的应用架构。",
            "研究事务在微服务架构中的应用模式。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/txn-how/",
            "https://pulsar.apache.org/docs/txn-how/#best-practices"
        ]
    }
}

export const week12Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w12-1": [
        {
            id: "pulsar-w12-1-q1",
            question: "Pulsar 事务的主要作用是什么？",
            options: [
                "加密消息",
                "在单个原子操作中向多个 Topic 发送消息并确认消息",
                "压缩消息",
                "路由消息"
            ],
            answer: 1,
            rationale: "Pulsar 事务允许在单个原子操作中向多个 Topic 发送消息并确认消息，实现跨 Topic 的 Exactly-once 语义。"
        },
        {
            id: "pulsar-w12-1-q2",
            question: "Transaction Coordinator（TC）的作用是什么？",
            options: [
                "存储消息",
                "管理事务的创建、状态跟踪和提交/回滚",
                "路由消息",
                "压缩数据"
            ],
            answer: 1,
            rationale: "Transaction Coordinator 负责事务的创建、状态跟踪和最终提交或回滚。"
        },
        {
            id: "pulsar-w12-1-q3",
            question: "Pulsar 事务使用什么协议保证原子性？",
            options: [
                "单阶段提交",
                "两阶段提交",
                "三阶段提交",
                "Paxos"
            ],
            answer: 1,
            rationale: "Pulsar 事务使用两阶段提交协议：第一阶段准备，第二阶段提交或回滚。"
        },
        {
            id: "pulsar-w12-1-q4",
            question: "事务未提交前，消息对其他 Consumer 可见吗？",
            options: [
                "可见",
                "不可见（Read Committed）",
                "部分可见",
                "取决于配置"
            ],
            answer: 1,
            rationale: "事务未提交前，消息对其他 Consumer 不可见，这是 Read Committed 隔离级别。"
        },
        {
            id: "pulsar-w12-1-q5",
            question: "Transaction ID 的格式是什么？",
            options: [
                "UUID",
                "mostSigBits:leastSigBits",
                "时间戳",
                "随机字符串"
            ],
            answer: 1,
            rationale: "Transaction ID 格式为 mostSigBits:leastSigBits，全局唯一标识一个事务。"
        },
        {
            id: "pulsar-w12-1-q6",
            question: "事务日志的作用是什么？",
            options: [
                "存储消息数据",
                "记录事务状态和操作，确保可恢复",
                "压缩消息",
                "路由消息"
            ],
            answer: 1,
            rationale: "事务状态和操作记录在事务日志 Topic 中，确保事务状态可恢复。"
        },
        {
            id: "pulsar-w12-1-q7",
            question: "两阶段提交的第一阶段做什么？",
            options: [
                "删除消息",
                "消息写入但不可见（准备阶段）",
                "消息变为可见",
                "回滚事务"
            ],
            answer: 1,
            rationale: "两阶段提交第一阶段是准备阶段，消息写入但对 Consumer 不可见。"
        },
        {
            id: "pulsar-w12-1-q8",
            question: "TC 故障时，待处理的事务如何恢复？",
            options: [
                "事务丢失",
                "新的 TC 根据事务日志决定提交或回滚",
                "自动提交",
                "自动回滚"
            ],
            answer: 1,
            rationale: "如果 TC 故障，待处理的事务会被新的 TC 接管，根据事务日志决定提交或回滚。"
        },
        {
            id: "pulsar-w12-1-q9",
            question: "Pulsar 事务可以跨多少个 Topic？",
            options: [
                "只能一个 Topic",
                "最多两个 Topic",
                "可以跨多个 Topic 和 Subscription",
                "无限制但不推荐"
            ],
            answer: 2,
            rationale: "Pulsar 事务可以跨多个 Topic 和 Subscription，所有操作原子生效。"
        },
        {
            id: "pulsar-w12-1-q10",
            question: "Exactly-once 语义是如何实现的？",
            options: [
                "只靠事务",
                "事务结合消息去重和事务确认",
                "只靠消息去重",
                "无法实现"
            ],
            answer: 1,
            rationale: "Exactly-once 通过事务结合 Producer 端消息去重和 Consumer 端事务确认实现。"
        },
        {
            id: "pulsar-w12-1-q11",
            question: "Transaction Coordinator 运行在哪里？",
            options: [
                "独立进程",
                "Broker 上",
                "BookKeeper 上",
                "ZooKeeper 上"
            ],
            answer: 1,
            rationale: "Transaction Coordinator 运行在 Broker 上，是 Broker 的一部分。"
        },
        {
            id: "pulsar-w12-1-q12",
            question: "Read Committed 隔离级别意味着什么？",
            options: [
                "可以读取未提交的数据",
                "只能读取已提交的数据",
                "可以读取所有数据",
                "不能读取任何数据"
            ],
            answer: 1,
            rationale: "Read Committed 意味着只能读取已提交的数据，未提交的事务消息不可见。"
        }
    ],
    "pulsar-w12-2": [
        {
            id: "pulsar-w12-2-q1",
            question: "如何在 PulsarClient 中启用事务支持？",
            options: [
                "默认启用",
                "PulsarClient.builder().enableTransaction(true).build()",
                "在 Broker 配置",
                "在 Topic 上配置"
            ],
            answer: 1,
            rationale: "使用事务需要在 PulsarClient 创建时启用：enableTransaction(true)。"
        },
        {
            id: "pulsar-w12-2-q2",
            question: "如何创建一个事务？",
            options: [
                "new Transaction()",
                "client.newTransaction().build()",
                "producer.createTransaction()",
                "consumer.createTransaction()"
            ],
            answer: 1,
            rationale: "通过 client.newTransaction().build() 创建事务，返回 Transaction 对象。"
        },
        {
            id: "pulsar-w12-2-q3",
            question: "如何在事务中发送消息？",
            options: [
                "producer.send(msg)",
                "producer.newMessage(txn).value(msg).send()",
                "txn.send(msg)",
                "producer.sendTransaction(msg)"
            ],
            answer: 1,
            rationale: "在事务中发送消息：producer.newMessage(txn).value(msg).send()。"
        },
        {
            id: "pulsar-w12-2-q4",
            question: "如何提交事务？",
            options: [
                "txn.complete()",
                "txn.commit()",
                "txn.finish()",
                "txn.end()"
            ],
            answer: 1,
            rationale: "使用 txn.commit() 提交事务，使所有操作生效。"
        },
        {
            id: "pulsar-w12-2-q5",
            question: "如何回滚事务？",
            options: [
                "txn.rollback()",
                "txn.abort()",
                "txn.cancel()",
                "txn.undo()"
            ],
            answer: 1,
            rationale: "使用 txn.abort() 回滚事务，撤销所有操作。"
        },
        {
            id: "pulsar-w12-2-q6",
            question: "事务操作失败时应该怎么做？",
            options: [
                "忽略错误",
                "调用 abort() 回滚",
                "重试操作",
                "等待超时"
            ],
            answer: 1,
            rationale: "事务操作失败时应该调用 abort() 回滚，不要让事务超时。"
        },
        {
            id: "pulsar-w12-2-q7",
            question: "一个事务可以包含哪些操作？",
            options: [
                "只能发送消息",
                "只能确认消息",
                "向多个 Topic 发送消息和确认多个 Subscription 的消息",
                "只能操作一个 Topic"
            ],
            answer: 2,
            rationale: "一个事务可以包含向多个 Topic 发送消息、确认多个 Subscription 的消息。"
        },
        {
            id: "pulsar-w12-2-q8",
            question: "推荐使用什么 API 以获得更好的性能？",
            options: [
                "同步 API",
                "异步 API（commitAsync、abortAsync）",
                "批量 API",
                "流式 API"
            ],
            answer: 1,
            rationale: "推荐使用异步 API（newTransactionAsync、commitAsync、abortAsync）以获得更好的性能。"
        },
        {
            id: "pulsar-w12-2-q9",
            question: "如何在事务中确认消息？",
            options: [
                "consumer.acknowledge(messageId)",
                "consumer.acknowledgeAsync(messageId, txn)",
                "txn.acknowledge(messageId)",
                "producer.acknowledge(messageId)"
            ],
            answer: 1,
            rationale: "在事务中确认消息：consumer.acknowledgeAsync(messageId, txn)。"
        },
        {
            id: "pulsar-w12-2-q10",
            question: "事务超时后会发生什么？",
            options: [
                "自动提交",
                "被强制回滚",
                "继续等待",
                "抛出异常"
            ],
            answer: 1,
            rationale: "超时的事务会被强制回滚，所有操作都不会生效。"
        },
        {
            id: "pulsar-w12-2-q11",
            question: "如何设置事务超时时间？",
            options: [
                "在 Broker 配置",
                "在 client.newTransaction().withTransactionTimeout() 中设置",
                "在 Topic 上配置",
                "无法设置"
            ],
            answer: 1,
            rationale: "可以在创建事务时通过 withTransactionTimeout() 设置超时时间。"
        },
        {
            id: "pulsar-w12-2-q12",
            question: "事务消息与普通消息可以在同一 Topic 中吗？",
            options: [
                "不可以",
                "可以，Consumer 会自动处理",
                "需要特殊配置",
                "会导致错误"
            ],
            answer: 1,
            rationale: "同一 Topic 可以同时包含事务消息和普通消息，Consumer 读取时会自动处理。"
        }
    ],
    "pulsar-w12-3": [
        {
            id: "pulsar-w12-3-q1",
            question: "如何在 Broker 上启用事务支持？",
            options: [
                "默认启用",
                "配置 transactionCoordinatorEnabled=true",
                "在客户端配置",
                "在 ZooKeeper 配置"
            ],
            answer: 1,
            rationale: "需要在 broker.conf 中配置 transactionCoordinatorEnabled=true 启用事务支持。"
        },
        {
            id: "pulsar-w12-3-q2",
            question: "事务的默认超时时间是多少？",
            options: [
                "1 分钟",
                "3 分钟",
                "5 分钟",
                "10 分钟"
            ],
            answer: 1,
            rationale: "事务超时默认 3 分钟，可通过客户端配置调整。"
        },
        {
            id: "pulsar-w12-3-q3",
            question: "Transaction Buffer 的作用是什么？",
            options: [
                "存储已提交的消息",
                "暂存事务消息，提交后才写入实际 Topic",
                "压缩消息",
                "路由消息"
            ],
            answer: 1,
            rationale: "事务消息先写入 Transaction Buffer，提交后才写入实际 Topic。"
        },
        {
            id: "pulsar-w12-3-q4",
            question: "事务相比普通消息有什么性能开销？",
            options: [
                "无开销",
                "额外的协调开销和延迟（两阶段提交需要额外网络往返）",
                "只有存储开销",
                "只有 CPU 开销"
            ],
            answer: 1,
            rationale: "事务增加了额外的协调开销和延迟，两阶段提交需要额外的网络往返。"
        },
        {
            id: "pulsar-w12-3-q5",
            question: "事务超时设置太短有什么影响？",
            options: [
                "无影响",
                "正常事务可能被回滚",
                "性能提高",
                "存储减少"
            ],
            answer: 1,
            rationale: "超时太短可能导致正常事务在完成前被回滚。"
        },
        {
            id: "pulsar-w12-3-q6",
            question: "transactionCoordinatorPartitions 配置什么？",
            options: [
                "事务超时",
                "TC 的分区数",
                "缓冲区大小",
                "日志保留时间"
            ],
            answer: 1,
            rationale: "transactionCoordinatorPartitions 配置 TC 的分区数，提高吞吐量和可用性。"
        },
        {
            id: "pulsar-w12-3-q7",
            question: "事务失败后重试需要注意什么？",
            options: [
                "无需注意",
                "确保操作的幂等性，避免重复执行产生副作用",
                "立即重试",
                "不要重试"
            ],
            answer: 1,
            rationale: "事务失败后重试需要确保操作的幂等性，避免重复执行产生副作用。"
        },
        {
            id: "pulsar-w12-3-q8",
            question: "如何监控事务执行情况？",
            options: [
                "无法监控",
                "监控活跃事务数、提交/回滚率、事务延迟",
                "只能查看日志",
                "重启后查看"
            ],
            answer: 1,
            rationale: "可以监控事务相关指标：活跃事务数、提交/回滚率、事务延迟等。"
        },
        {
            id: "pulsar-w12-3-q9",
            question: "事务日志保留策略设置不当有什么影响？",
            options: [
                "无影响",
                "太短可能导致恢复问题，太长浪费存储",
                "只影响性能",
                "只影响成本"
            ],
            answer: 1,
            rationale: "事务日志保留太短可能导致恢复问题，太长浪费存储空间。"
        },
        {
            id: "pulsar-w12-3-q10",
            question: "什么时候不需要使用事务？",
            options: [
                "需要原子操作时",
                "单 Topic 单消息场景，普通发送已满足需求",
                "需要 Exactly-once 时",
                "跨 Topic 操作时"
            ],
            answer: 1,
            rationale: "单 Topic 单消息场景通常不需要事务，普通发送配合去重已满足需求。"
        },
        {
            id: "pulsar-w12-3-q11",
            question: "TC 可以分区部署吗？",
            options: [
                "不可以",
                "可以，提高吞吐量和可用性",
                "只能单点",
                "取决于 Broker 数量"
            ],
            answer: 1,
            rationale: "TC 可以分区部署，通过 transactionCoordinatorPartitions 配置分区数，提高吞吐量和可用性。"
        },
        {
            id: "pulsar-w12-3-q12",
            question: "事务超时设置太长有什么影响？",
            options: [
                "无影响",
                "占用资源（未完成的事务占用内存和连接）",
                "性能提高",
                "可靠性提高"
            ],
            answer: 1,
            rationale: "超时太长会占用资源，未完成的事务会占用内存和连接。"
        }
    ]
}
