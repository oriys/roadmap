import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week12Guides: Record<string, LessonGuide> = {
    "w12-1": {
        lessonId: "w12-1",
        background: [
            "【两阶段提交定义】Martin Fowler 定义 2PC：'The essence of two-phase commit is that it carries out an update in two phases: a prepare phase and a commit phase'。第一阶段询问所有参与者是否准备好提交，第二阶段实际执行提交。",
            "【Prepare 阶段机制】在准备阶段，协调器向所有参与者发送 prepare 请求。每个参与者执行事务操作但不提交，写入 redo/undo 日志，然后回复 yes（准备好）或 no（中止）。",
            "【Commit 阶段机制】如果所有参与者回复 yes，协调器发送 commit 命令；任何参与者回复 no 或超时，协调器发送 abort 命令。参与者收到命令后执行最终提交或回滚。",
            "【MySQL XA 事务】MySQL InnoDB 存储引擎支持 XA 事务：'InnoDB storage engine supports XA transactions'。XA 是 X/Open 组织定义的分布式事务处理标准，包含 Resource Manager（资源管理器）和 Transaction Manager（事务管理器）。",
            "【XA 事务语法】MySQL XA 命令序列：XA START 'xid'（开始事务）→ 执行 SQL → XA END 'xid'（结束事务）→ XA PREPARE 'xid'（准备提交）→ XA COMMIT 'xid'（提交）或 XA ROLLBACK 'xid'（回滚）。"
        ],
        keyDifficulties: [
            "【阻塞问题】2PC 的致命缺陷是阻塞：'The problem is with failures. The two-phase commit protocol is a blocking protocol'。在准备阶段和提交阶段之间，参与者持有锁等待协调器，如果协调器崩溃，参与者将无限期阻塞。",
            "【协调器单点故障】协调器是单点故障：'If the coordinator fails permanently, some participants will never resolve their transactions'。需要实现协调器高可用或使用恢复机制。",
            "【性能开销】2PC 需要多轮网络通信和磁盘写入（WAL）：准备阶段写日志、确认消息、提交阶段写日志。这导致延迟是单节点事务的数倍。",
            "【隔离级别局限】XA 事务在 MySQL 中有限制：'XA transactions are not fully supported by all storage engines'。只有 InnoDB 支持 XA，且不支持嵌套事务。此外，XA 事务的隔离级别可能与预期不同。"
        ],
        handsOnPath: [
            "执行 MySQL XA 事务：XA START 'test1'; UPDATE accounts SET balance = balance - 100 WHERE id = 1; XA END 'test1'; XA PREPARE 'test1'; XA COMMIT 'test1';",
            "模拟分布式场景：在两个 MySQL 实例上分别执行 XA 事务，使用相同的 xid 前缀，由应用程序作为协调器控制提交顺序。",
            "测试故障恢复：在 XA PREPARE 后模拟应用崩溃，重启后使用 XA RECOVER 查看悬挂事务，然后决定提交或回滚。",
            "分析 XA 事务日志：查看 InnoDB 的 redo log 和 undo log，理解 WAL（Write-Ahead Logging）如何保证持久性。",
            "测量 2PC 延迟：对比单节点事务和 XA 分布式事务的响应时间，量化多轮通信的开销。"
        ],
        selfCheck: [
            "两阶段提交的两个阶段分别做什么？",
            "2PC 的阻塞问题是什么？如何发生？",
            "MySQL XA 事务的命令序列是什么？",
            "协调器故障对 2PC 有什么影响？",
            "为什么说 2PC 有性能开销？"
        ],
        extensions: [
            "研究三阶段提交（3PC）如何缓解 2PC 的阻塞问题。",
            "学习 Paxos Commit 如何用共识协议替代 2PC 协调器。",
            "了解 Percolator 模型（Google）如何优化分布式事务。",
            "研究 Spanner 的 TrueTime 如何实现全球分布式事务。"
        ],
        sourceUrls: [
            "https://martinfowler.com/articles/patterns-of-distributed-systems/two-phase-commit.html",
            "https://dev.mysql.com/doc/refman/8.0/en/xa.html"
        ]
    },
    "w12-2": {
        lessonId: "w12-2",
        background: [
            "【Saga 模式定义】Microservices.io 定义：'A saga is a sequence of local transactions'。每个本地事务更新数据库并发布消息/事件触发下一个事务。Saga 通过补偿事务实现回滚，而非 ACID 的原子回滚。",
            "【Choreography 模式】编排模式中，服务发布领域事件触发其他服务动作：'Each local transaction publishes domain events that trigger local transactions in other services'。无中央协调器，服务间通过事件松散耦合。",
            "【Orchestration 模式】编制模式使用中央协调器：'An orchestrator tells the participants what local transactions to execute'。协调器负责调用参与服务并管理流程状态，逻辑集中但更易理解和调试。",
            "【补偿事务】Saga 回滚需要显式的补偿事务：'compensating transactions that semantically undo the changes made by preceding transactions'。例如，退款是付款的补偿，取消预订是创建预订的补偿。",
            "【Temporal 工作流】Temporal 是 Saga 编制的工业级实现：'A Temporal Workflow defines the overall flow of the saga'。工作流定义步骤顺序，Activity 执行实际操作，框架自动处理重试和补偿。"
        ],
        keyDifficulties: [
            "【缺乏隔离性】Saga 没有 ACID 的隔离性：'Saga transactions are not isolated from each other'。在 Saga 执行过程中，其他事务可以看到中间状态。需要应用层处理脏读和写倾斜问题。",
            "【补偿事务设计复杂】设计正确的补偿事务不简单：有些操作难以补偿（如发送邮件）；补偿事务本身可能失败；需要保证补偿的幂等性和顺序正确性。",
            "【Choreography 的复杂度】当 Saga 步骤增多时，Choreography 变得难以理解：'Difficult to understand, particularly when steps are added'。事件流分散在多个服务中，调试和追踪困难。",
            "【Orchestration 的耦合】Orchestrator 与所有参与服务耦合：'Risk of centralizing too much business logic in the orchestrator'。需要平衡集中控制和服务自治。"
        ],
        handsOnPath: [
            "设计订单 Saga：识别步骤（创建订单、扣库存、扣款、发货），定义每步的补偿事务（取消订单、恢复库存、退款、取消发货）。",
            "实现 Choreography：使用消息队列（Kafka/RabbitMQ）发布领域事件，每个服务订阅相关事件并执行本地事务。",
            "实现 Orchestration：创建 OrderSaga 协调器，按顺序调用各服务 API，失败时按逆序执行补偿。",
            "使用 Temporal 实现 Saga：定义 Workflow 和 Activities，配置重试策略和超时，使用 Temporal UI 观察执行过程。",
            "测试失败场景：模拟中间步骤失败，验证补偿事务正确执行，检查最终状态一致性。"
        ],
        selfCheck: [
            "Saga 模式解决了什么问题？",
            "Choreography 和 Orchestration 的区别是什么？",
            "什么是补偿事务？为什么 Saga 需要它？",
            "Saga 模式的主要缺点是什么？",
            "Temporal 在 Saga 实现中的作用是什么？"
        ],
        extensions: [
            "研究 Saga 的语义锁（Semantic Lock）模式处理隔离性问题。",
            "学习 Saga Execution Coordinator（SEC）的设计模式。",
            "了解 Axon Framework 如何实现 Saga。",
            "研究 Saga 与事件溯源的结合使用。"
        ],
        sourceUrls: [
            "https://microservices.io/patterns/data/saga.html",
            "https://docs.temporal.io/workflows"
        ]
    },
    "w12-3": {
        lessonId: "w12-3",
        background: [
            "【TCC 模式定义】TCC（Try-Confirm-Cancel）是一种柔性事务模式，将业务逻辑分为三个阶段：Try（预留资源）、Confirm（确认执行）、Cancel（取消释放）。相比 Saga 的补偿模式，TCC 通过预留状态避免脏数据。",
            "【Try 阶段】Try 阶段执行业务检查和资源预留：检查业务规则、锁定资源、记录待确认状态。例如，转账场景中 Try 阶段冻结转出账户金额，但不实际扣款。",
            "【Confirm 阶段】Confirm 阶段确认执行业务：将 Try 阶段预留的资源正式提交。例如，将冻结金额真正扣除并转入目标账户。Confirm 必须幂等，因为可能被多次调用。",
            "【Cancel 阶段】Cancel 阶段取消执行：释放 Try 阶段预留的资源，恢复到初始状态。例如，解冻金额。Cancel 也必须幂等。",
            "【TCC vs Saga】TCC 与 Saga 的关键区别：Saga 的补偿是回滚已提交的数据，TCC 的 Cancel 是释放未提交的预留资源。TCC 通过'先预留后确认'的机制避免了脏数据对外暴露。"
        ],
        keyDifficulties: [
            "【业务侵入性】TCC 对业务代码侵入性强：每个业务操作需要拆分为 Try、Confirm、Cancel 三个方法，改造成本高。需要业务系统支持'预留'概念。",
            "【空回滚问题】Try 未执行成功但收到 Cancel 请求：可能因网络超时导致。Cancel 需要识别 Try 是否执行过，避免错误释放资源。通常通过事务日志记录 Try 状态解决。",
            "【悬挂问题】Cancel 比 Try 先到达：Try 请求网络延迟，Cancel 先执行完成后 Try 才到达。如果此时执行 Try，资源将永远被占用。需要通过事务日志阻止'悬挂'的 Try 执行。",
            "【幂等性要求】Confirm 和 Cancel 必须幂等：由于网络问题可能导致重复调用。需要使用事务 ID 去重，确保多次调用结果一致。"
        ],
        handsOnPath: [
            "设计 TCC 接口：为转账业务定义 tryTransfer（冻结金额）、confirmTransfer（确认转账）、cancelTransfer（解冻金额）三个方法。",
            "实现事务日志：记录每个事务的 Try 状态，用于处理空回滚和悬挂问题。",
            "实现幂等控制：使用事务 ID 作为幂等键，在 Confirm/Cancel 执行前检查是否已处理过。",
            "集成 Seata TCC：配置 @TwoPhaseBusinessAction 注解，实现 TCC 参与者接口。",
            "测试异常场景：模拟网络超时、重复请求、Cancel 先于 Try 等场景，验证系统正确处理。"
        ],
        selfCheck: [
            "TCC 的三个阶段分别做什么？",
            "TCC 与 Saga 的本质区别是什么？",
            "什么是空回滚？如何解决？",
            "什么是悬挂问题？如何避免？",
            "为什么 Confirm 和 Cancel 必须幂等？"
        ],
        extensions: [
            "研究 Seata AT 模式与 TCC 模式的对比选择。",
            "学习 DTM 分布式事务框架的 TCC 实现。",
            "了解可靠消息最终一致性与 TCC 的对比。",
            "研究金融场景下 TCC 的最佳实践。"
        ],
        sourceUrls: [
            "https://seata.apache.org/docs/dev/mode/tcc-mode/",
            "https://dtm.pub/practice/tcc.html"
        ]
    },
    "w12-4": {
        lessonId: "w12-4",
        background: [
            "【事件溯源定义】Martin Fowler 定义：'Event Sourcing ensures that all changes to application state are stored as a sequence of events'。不存储当前状态，而是存储导致状态变化的所有事件。当前状态通过回放事件重建。",
            "【事件溯源优势】事件溯源提供完整的审计日志：'provides a complete audit log of changes'。支持时间旅行（查看任意时间点的状态）、事件重放（修复 bug 后重新计算）、领域事件驱动的架构。",
            "【Transactional Outbox 定义】Microservices.io 定义 Outbox 模式：将消息作为数据库事务的一部分写入 OUTBOX 表，然后由独立进程将消息发布到消息代理。这解决了'数据库更新和消息发布原子性'问题。",
            "【Outbox 模式工作流程】业务服务在同一数据库事务中：1) 更新业务表 2) 插入事件到 OUTBOX 表。独立的 Message Relay 进程：轮询或使用 CDC 读取 OUTBOX 表，发布事件到消息代理，然后标记或删除已处理记录。",
            "【Debezium CDC】Debezium 是 CDC（Change Data Capture）平台：'captures row-level changes that insert, update, and delete records'。通过读取数据库事务日志（如 MySQL binlog），实时捕获变更并流式传输到 Kafka。"
        ],
        keyDifficulties: [
            "【事件溯源复杂性】事件溯源增加了系统复杂度：需要设计事件 schema、处理事件版本演进、实现快照机制优化回放性能、CQRS 分离读写模型。学习曲线陡峭。",
            "【Outbox 表清理】OUTBOX 表需要定期清理已发布的事件，否则会无限增长。需要实现清理策略：立即删除、延迟删除（用于故障恢复）、归档到冷存储。",
            "【消息重复与顺序】Outbox 模式需要处理：消息重复（Relay 崩溃重启后重复发送）——消费者需要幂等处理；消息顺序——同一聚合根的事件需要保持顺序，可使用 Kafka 分区键。",
            "【CDC 延迟与资源】Debezium 读取 binlog 有延迟（通常毫秒级），高负载下可能增加。CDC 需要额外的 Kafka 集群和 Connector 资源，增加运维复杂度。"
        ],
        handsOnPath: [
            "设计 OUTBOX 表：CREATE TABLE outbox (id UUID, aggregate_type VARCHAR, aggregate_id VARCHAR, event_type VARCHAR, payload JSONB, created_at TIMESTAMP);",
            "实现 Outbox 写入：在业务事务中同时写入业务表和 OUTBOX 表，使用数据库事务保证原子性。",
            "配置 Debezium Connector：安装 Debezium MySQL Connector，配置捕获 OUTBOX 表的变更，路由到 Kafka topic。",
            "实现消费者幂等：使用事件 ID 作为幂等键，记录已处理的事件 ID，跳过重复事件。",
            "测试端到端流程：创建业务记录，观察 Debezium 捕获变更，Kafka 接收事件，消费者处理事件。"
        ],
        selfCheck: [
            "事件溯源的核心理念是什么？",
            "Outbox 模式解决了什么问题？",
            "Outbox 表的工作流程是什么？",
            "Debezium 如何实现变更数据捕获？",
            "如何处理 Outbox 模式的消息重复问题？"
        ],
        extensions: [
            "研究 EventStoreDB 作为专用事件存储的使用。",
            "学习 CQRS 模式与事件溯源的结合。",
            "了解 Apache Kafka Connect 的其他 CDC connector。",
            "研究 Outbox 模式在 PostgreSQL（LISTEN/NOTIFY）中的实现。"
        ],
        sourceUrls: [
            "https://martinfowler.com/eaaDev/EventSourcing.html",
            "https://microservices.io/patterns/data/transactional-outbox.html",
            "https://debezium.io/documentation/reference/stable/tutorial.html"
        ]
    }
}

export const week12Quizzes: Record<string, QuizQuestion[]> = {
    "w12-1": [
        {
            id: "w12-1-q1",
            question: "两阶段提交的两个阶段分别是什么？",
            options: [
                "Prepare 阶段和 Commit 阶段",
                "Lock 阶段和 Unlock 阶段",
                "Begin 阶段和 End 阶段",
                "Request 阶段和 Response 阶段"
            ],
            answer: 0,
            rationale: "Martin Fowler 定义：'carries out an update in two phases: a prepare phase and a commit phase'。"
        },
        {
            id: "w12-1-q2",
            question: "2PC 的主要缺陷是什么？",
            options: [
                "不支持多数据库",
                "性能太好难以调试",
                "阻塞——参与者持有锁等待协调器",
                "不支持回滚"
            ],
            answer: 2,
            rationale: "'The problem is with failures. The two-phase commit protocol is a blocking protocol'——参与者在等待协调器响应期间持有锁。"
        },
        {
            id: "w12-1-q3",
            question: "MySQL XA 事务的正确命令序列是什么？",
            options: [
                "XA BEGIN → SQL → XA COMMIT",
                "XA START → SQL → XA END → XA PREPARE → XA COMMIT",
                "START TRANSACTION → SQL → XA PREPARE → COMMIT",
                "XA OPEN → SQL → XA CLOSE"
            ],
            answer: 1,
            rationale: "正确序列：XA START → 执行 SQL → XA END → XA PREPARE → XA COMMIT 或 XA ROLLBACK。"
        },
        {
            id: "w12-1-q4",
            question: "如果 2PC 协调器在 Prepare 阶段后永久故障，会发生什么？",
            options: [
                "参与者自动提交",
                "参与者自动回滚",
                "参与者将永远无法解决其事务",
                "系统自动选举新协调器"
            ],
            answer: 2,
            rationale: "'If the coordinator fails permanently, some participants will never resolve their transactions'——协调器是单点故障。"
        },
        {
            id: "w12-1-q5",
            question: "哪个 MySQL 存储引擎支持 XA 事务？",
            options: [
                "MyISAM",
                "InnoDB",
                "Memory",
                "Archive"
            ],
            answer: 1,
            rationale: "'InnoDB storage engine supports XA transactions'，只有 InnoDB 支持 XA。"
        },
        {
            id: "w12-1-q6",
            question: "在 Prepare 阶段，参与者做什么？",
            options: [
                "提交事务并释放锁",
                "执行事务操作但不提交，写入日志，回复是否准备好",
                "只检查数据是否存在",
                "发送 commit 命令给其他参与者"
            ],
            answer: 1,
            rationale: "Prepare 阶段参与者执行事务操作但不提交，写入 redo/undo 日志，然后回复 yes 或 no。"
        },
        {
            id: "w12-1-q7",
            question: "2PC 为什么有性能开销？",
            options: [
                "只需要单轮网络通信",
                "多轮网络通信和磁盘写入（WAL）",
                "不使用日志",
                "完全在内存中执行"
            ],
            answer: 1,
            rationale: "2PC 需要多轮网络通信和磁盘写入（WAL）：准备阶段写日志、确认消息、提交阶段写日志。"
        },
        {
            id: "w12-1-q8",
            question: "XA 事务中的 Resource Manager 是什么？",
            options: [
                "应用程序",
                "数据库等资源",
                "网络设备",
                "监控系统"
            ],
            answer: 1,
            rationale: "XA 架构中 Resource Manager 是管理资源的组件，如数据库；Transaction Manager 是协调器。"
        },
        {
            id: "w12-1-q9",
            question: "如何恢复 MySQL 中的悬挂 XA 事务？",
            options: [
                "重启数据库",
                "使用 XA RECOVER 查看，然后 XA COMMIT 或 XA ROLLBACK",
                "等待自动超时",
                "删除数据库"
            ],
            answer: 1,
            rationale: "使用 XA RECOVER 查看悬挂事务，然后手动决定 XA COMMIT 或 XA ROLLBACK。"
        },
        {
            id: "w12-1-q10",
            question: "如果任何参与者在 Prepare 阶段回复 no，协调器应该怎么做？",
            options: [
                "继续等待",
                "只提交回复 yes 的参与者",
                "发送 abort 命令给所有参与者",
                "重试 prepare"
            ],
            answer: 2,
            rationale: "'任何参与者回复 no 或超时，协调器发送 abort 命令'——所有参与者必须一致。"
        },
        {
            id: "w12-1-q11",
            question: "WAL（Write-Ahead Logging）在 2PC 中的作用是什么？",
            options: [
                "提高性能",
                "保证持久性，允许故障恢复",
                "减少网络通信",
                "压缩数据"
            ],
            answer: 1,
            rationale: "WAL（Write-Ahead Logging）记录事务操作，保证持久性，允许系统在崩溃后恢复事务状态。"
        },
        {
            id: "w12-1-q12",
            question: "2PC 相比单节点事务的延迟特征是什么？",
            options: [
                "延迟更低",
                "延迟相同",
                "延迟是单节点事务的数倍",
                "没有延迟"
            ],
            answer: 2,
            rationale: "2PC 需要多轮网络通信，延迟是单节点事务的数倍。"
        }
    ],
    "w12-2": [
        {
            id: "w12-2-q1",
            question: "Microservices.io 对 Saga 的定义是什么？",
            options: [
                "一个分布式锁",
                "一系列本地事务",
                "一个全局事务",
                "一个消息队列"
            ],
            answer: 1,
            rationale: "'A saga is a sequence of local transactions'——Saga 是一系列本地事务的序列。"
        },
        {
            id: "w12-2-q2",
            question: "Saga 的 Choreography 模式如何协调服务？",
            options: [
                "使用中央协调器",
                "服务发布领域事件触发其他服务",
                "使用两阶段提交",
                "使用分布式锁"
            ],
            answer: 1,
            rationale: "'Each local transaction publishes domain events that trigger local transactions in other services'——通过事件松散耦合。"
        },
        {
            id: "w12-2-q3",
            question: "Saga 的 Orchestration 模式的特点是什么？",
            options: [
                "无中央协调器",
                "使用中央协调器告诉参与者执行什么操作",
                "不需要补偿事务",
                "只支持两个服务"
            ],
            answer: 1,
            rationale: "'An orchestrator tells the participants what local transactions to execute'——Orchestrator 负责协调流程。"
        },
        {
            id: "w12-2-q4",
            question: "什么是补偿事务（Compensating Transaction）？",
            options: [
                "执行两次的事务",
                "语义上撤销前序事务变更的事务",
                "自动回滚的事务",
                "并行执行的事务"
            ],
            answer: 1,
            rationale: "'compensating transactions that semantically undo the changes made by preceding transactions'。"
        },
        {
            id: "w12-2-q5",
            question: "Saga 模式的主要缺点是什么？",
            options: [
                "性能太好",
                "缺乏隔离性，其他事务可以看到中间状态",
                "不支持多服务",
                "需要两阶段提交"
            ],
            answer: 1,
            rationale: "'Saga transactions are not isolated from each other'——在执行过程中其他事务可以看到中间状态。"
        },
        {
            id: "w12-2-q6",
            question: "Choreography 模式在步骤增多时的问题是什么？",
            options: [
                "性能下降",
                "难以理解，事件流分散在多个服务中",
                "无法扩展",
                "不支持补偿"
            ],
            answer: 1,
            rationale: "'Difficult to understand, particularly when steps are added'——事件流分散使调试和追踪困难。"
        },
        {
            id: "w12-2-q7",
            question: "Temporal 在 Saga 实现中的作用是什么？",
            options: [
                "消息队列",
                "Saga 编制的工业级实现，管理工作流和重试",
                "数据库",
                "负载均衡器"
            ],
            answer: 1,
            rationale: "'A Temporal Workflow defines the overall flow of the saga'——Temporal 自动处理重试和补偿。"
        },
        {
            id: "w12-2-q8",
            question: "退款是什么操作的补偿事务？",
            options: [
                "创建订单",
                "付款",
                "发货",
                "登录"
            ],
            answer: 1,
            rationale: "退款是付款的补偿事务，取消预订是创建预订的补偿。"
        },
        {
            id: "w12-2-q9",
            question: "Saga Orchestration 模式的风险是什么？",
            options: [
                "无法追踪流程",
                "在协调器中集中过多业务逻辑",
                "不支持补偿",
                "性能太差"
            ],
            answer: 1,
            rationale: "'Risk of centralizing too much business logic in the orchestrator'——需要平衡集中控制和服务自治。"
        },
        {
            id: "w12-2-q10",
            question: "设计补偿事务的挑战包括什么？",
            options: [
                "补偿很简单不需要考虑",
                "有些操作难以补偿（如发送邮件）、补偿本身可能失败",
                "只需要回滚数据库",
                "不需要幂等性"
            ],
            answer: 1,
            rationale: "补偿设计挑战：有些操作难以补偿；补偿本身可能失败；需要保证幂等性和顺序正确。"
        },
        {
            id: "w12-2-q11",
            question: "Saga 如何处理隔离性问题？",
            options: [
                "使用两阶段提交",
                "Saga 本身不提供隔离性，需要应用层处理脏读和写倾斜",
                "使用分布式锁",
                "忽略隔离性"
            ],
            answer: 1,
            rationale: "Saga 没有 ACID 的隔离性，需要应用层使用语义锁等模式处理。"
        },
        {
            id: "w12-2-q12",
            question: "Saga 与两阶段提交的关键区别是什么？",
            options: [
                "Saga 使用全局锁",
                "Saga 通过补偿事务而非原子回滚实现一致性",
                "两阶段提交不支持分布式",
                "Saga 不支持多服务"
            ],
            answer: 1,
            rationale: "Saga 通过补偿事务实现回滚，而非 ACID 的原子回滚。"
        }
    ],
    "w12-3": [
        {
            id: "w12-3-q1",
            question: "TCC 模式的三个阶段是什么？",
            options: [
                "Prepare、Commit、Rollback",
                "Try、Confirm、Cancel",
                "Begin、Execute、End",
                "Lock、Process、Unlock"
            ],
            answer: 1,
            rationale: "TCC（Try-Confirm-Cancel）将业务逻辑分为三个阶段：Try（预留）、Confirm（确认）、Cancel（取消）。"
        },
        {
            id: "w12-3-q2",
            question: "TCC 的 Try 阶段做什么？",
            options: [
                "提交事务",
                "执行业务检查和资源预留",
                "回滚事务",
                "发送消息"
            ],
            answer: 1,
            rationale: "Try 阶段执行业务检查和资源预留，如冻结转出账户金额但不实际扣款。"
        },
        {
            id: "w12-3-q3",
            question: "TCC 与 Saga 的本质区别是什么？",
            options: [
                "TCC 不需要补偿",
                "Saga 补偿已提交的数据，TCC Cancel 释放未提交的预留资源",
                "Saga 不支持多服务",
                "TCC 使用两阶段提交"
            ],
            answer: 1,
            rationale: "Saga 的补偿是回滚已提交的数据，TCC 的 Cancel 是释放未提交的预留资源，避免脏数据暴露。"
        },
        {
            id: "w12-3-q4",
            question: "什么是 TCC 的空回滚问题？",
            options: [
                "Cancel 执行失败",
                "Try 未执行成功但收到 Cancel 请求",
                "Confirm 重复执行",
                "资源不足"
            ],
            answer: 1,
            rationale: "空回滚：Try 未执行成功但收到 Cancel 请求，可能因网络超时导致。Cancel 需要识别 Try 是否执行过。"
        },
        {
            id: "w12-3-q5",
            question: "什么是 TCC 的悬挂问题？",
            options: [
                "Try 执行太慢",
                "Cancel 比 Try 先到达，Try 在 Cancel 后执行导致资源永久占用",
                "Confirm 失败",
                "网络正常"
            ],
            answer: 1,
            rationale: "悬挂问题：Cancel 比 Try 先到达并执行，如果此时再执行 Try，资源将永远被占用。"
        },
        {
            id: "w12-3-q6",
            question: "为什么 TCC 的 Confirm 和 Cancel 必须幂等？",
            options: [
                "提高性能",
                "网络问题可能导致重复调用",
                "减少代码量",
                "数据库要求"
            ],
            answer: 1,
            rationale: "由于网络问题可能导致重复调用，Confirm 和 Cancel 必须幂等，确保多次调用结果一致。"
        },
        {
            id: "w12-3-q7",
            question: "TCC 模式的主要缺点是什么？",
            options: [
                "性能太好",
                "对业务代码侵入性强，需要拆分为三个方法",
                "不支持分布式",
                "无法回滚"
            ],
            answer: 1,
            rationale: "TCC 对业务代码侵入性强：每个业务操作需要拆分为 Try、Confirm、Cancel 三个方法。"
        },
        {
            id: "w12-3-q8",
            question: "如何解决 TCC 的空回滚问题？",
            options: [
                "忽略空回滚",
                "通过事务日志记录 Try 状态，Cancel 检查后决定是否执行",
                "多次重试 Try",
                "增加超时时间"
            ],
            answer: 1,
            rationale: "通过事务日志记录 Try 是否执行过，Cancel 需要识别 Try 状态避免错误释放资源。"
        },
        {
            id: "w12-3-q9",
            question: "在转账场景中，Try 阶段应该做什么？",
            options: [
                "直接扣款",
                "冻结转出账户金额但不实际扣款",
                "转入目标账户",
                "记录日志"
            ],
            answer: 1,
            rationale: "转账场景中 Try 阶段冻结转出账户金额，但不实际扣款，这是'预留'资源的概念。"
        },
        {
            id: "w12-3-q10",
            question: "如何实现 TCC 的幂等控制？",
            options: [
                "不需要幂等",
                "使用事务 ID 作为幂等键，执行前检查是否已处理",
                "每次重新执行",
                "使用分布式锁"
            ],
            answer: 1,
            rationale: "使用事务 ID 作为幂等键，在 Confirm/Cancel 执行前检查是否已处理过。"
        },
        {
            id: "w12-3-q11",
            question: "TCC 通过什么机制避免脏数据对外暴露？",
            options: [
                "两阶段提交",
                "先预留后确认，预留状态不对外暴露",
                "分布式锁",
                "消息队列"
            ],
            answer: 1,
            rationale: "TCC 通过'先预留后确认'的机制，将资源置于预留状态，避免脏数据对外暴露。"
        },
        {
            id: "w12-3-q12",
            question: "如何避免 TCC 的悬挂问题？",
            options: [
                "增加 Try 超时时间",
                "通过事务日志阻止 Cancel 后到达的 Try 执行",
                "不使用 Cancel",
                "多次重试"
            ],
            answer: 1,
            rationale: "通过事务日志记录 Cancel 已执行，阻止后到达的 Try 执行，避免悬挂问题。"
        }
    ],
    "w12-4": [
        {
            id: "w12-4-q1",
            question: "Martin Fowler 对事件溯源的定义是什么？",
            options: [
                "只存储当前状态",
                "将应用状态的所有变更存储为事件序列",
                "使用消息队列",
                "使用两阶段提交"
            ],
            answer: 1,
            rationale: "'Event Sourcing ensures that all changes to application state are stored as a sequence of events'。"
        },
        {
            id: "w12-4-q2",
            question: "Transactional Outbox 模式解决了什么问题？",
            options: [
                "提高数据库性能",
                "数据库更新和消息发布的原子性问题",
                "减少存储空间",
                "简化代码"
            ],
            answer: 1,
            rationale: "Outbox 模式解决了'数据库更新和消息发布原子性'问题——两者要么都成功要么都失败。"
        },
        {
            id: "w12-4-q3",
            question: "Outbox 模式的工作流程是什么？",
            options: [
                "先发消息再写数据库",
                "在同一事务中写业务表和 OUTBOX 表，独立进程发布事件",
                "只写消息队列",
                "使用两阶段提交"
            ],
            answer: 1,
            rationale: "业务服务在同一事务中写业务表和 OUTBOX 表，独立的 Message Relay 进程发布事件到消息代理。"
        },
        {
            id: "w12-4-q4",
            question: "Debezium 是什么？",
            options: [
                "数据库",
                "CDC 平台，捕获数据库变更并流式传输",
                "消息队列",
                "编程语言"
            ],
            answer: 1,
            rationale: "Debezium 是 CDC 平台：'captures row-level changes that insert, update, and delete records'。"
        },
        {
            id: "w12-4-q5",
            question: "事件溯源如何获取当前状态？",
            options: [
                "直接读取状态表",
                "通过回放事件序列重建状态",
                "使用缓存",
                "查询外部系统"
            ],
            answer: 1,
            rationale: "事件溯源不存储当前状态，而是通过回放事件序列重建当前状态。"
        },
        {
            id: "w12-4-q6",
            question: "事件溯源的优势是什么？",
            options: [
                "减少存储空间",
                "提供完整审计日志、支持时间旅行和事件重放",
                "简化开发",
                "降低延迟"
            ],
            answer: 1,
            rationale: "'provides a complete audit log of changes'，支持时间旅行（查看任意时间点状态）和事件重放。"
        },
        {
            id: "w12-4-q7",
            question: "Outbox 表需要定期做什么？",
            options: [
                "备份",
                "清理已发布的事件，否则会无限增长",
                "压缩",
                "加密"
            ],
            answer: 1,
            rationale: "OUTBOX 表需要定期清理已发布的事件，否则会无限增长。"
        },
        {
            id: "w12-4-q8",
            question: "如何处理 Outbox 模式的消息重复问题？",
            options: [
                "忽略重复",
                "消费者实现幂等处理，使用事件 ID 去重",
                "增加超时",
                "使用更快的网络"
            ],
            answer: 1,
            rationale: "消息重复时消费者需要幂等处理，使用事件 ID 作为幂等键，跳过已处理的事件。"
        },
        {
            id: "w12-4-q9",
            question: "Debezium 如何捕获数据库变更？",
            options: [
                "轮询数据库表",
                "读取数据库事务日志（如 MySQL binlog）",
                "使用触发器",
                "定期全表扫描"
            ],
            answer: 1,
            rationale: "Debezium 通过读取数据库事务日志（如 MySQL binlog），实时捕获变更并流式传输到 Kafka。"
        },
        {
            id: "w12-4-q10",
            question: "事件溯源的复杂性包括什么？",
            options: [
                "太简单不适合复杂场景",
                "事件 schema 设计、版本演进、快照机制、CQRS",
                "不支持分布式",
                "无法审计"
            ],
            answer: 1,
            rationale: "事件溯源需要：设计事件 schema、处理事件版本演进、实现快照机制、CQRS 分离读写。"
        },
        {
            id: "w12-4-q11",
            question: "为什么同一聚合根的事件需要保持顺序？",
            options: [
                "提高性能",
                "保证状态重建的正确性",
                "减少存储",
                "简化代码"
            ],
            answer: 1,
            rationale: "同一聚合根的事件需要按顺序回放才能正确重建状态，可使用 Kafka 分区键保证顺序。"
        },
        {
            id: "w12-4-q12",
            question: "OUTBOX 表通常包含哪些字段？",
            options: [
                "只有 ID",
                "id、aggregate_type、aggregate_id、event_type、payload、created_at",
                "只有 payload",
                "只有 timestamp"
            ],
            answer: 1,
            rationale: "典型 OUTBOX 表：id（事件ID）、aggregate_type（聚合类型）、aggregate_id（聚合ID）、event_type（事件类型）、payload（事件数据）、created_at（创建时间）。"
        }
    ]
}
