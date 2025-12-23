import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "w2-4": {
        lessonId: "w2-4",
        background: [
            "【MySQL 复制的三种模式】MySQL 默认使用异步复制——主库提交事务后不等待从库确认。半同步复制（Semisynchronous）要求至少一个从库确认收到日志后才返回。同步复制仅在 MySQL NDB Cluster 中可用。选择取决于数据安全性需求与延迟容忍度的权衡。",
            "【PostgreSQL 的同步控制】PostgreSQL 流复制默认异步——'如果主库崩溃，部分已提交事务可能未复制到备库，导致数据丢失'。同步复制确保事务在至少一个备库确认写入磁盘后才算提交。代价是'响应时间增加和更高的锁竞争'。",
            "【MongoDB 的双重维度】MongoDB 通过 Read Concern 和 Write Concern 分别控制读写一致性。Write Concern w:'majority' 确保多数节点确认；Read Concern 'linearizable' 提供线性一致性但最慢。两者组合决定整体一致性级别。",
            "【Cassandra 的可调一致性】Cassandra 采用 Dynamo 的 R+W>N 模型。ONE 最快但可能读到旧数据；QUORUM（n/2+1）保证多数派；ALL 最强但任一节点故障即不可用。'写操作总是发送到所有副本，一致性级别只控制协调器等待多少响应'。",
            "【一致性配置的通用权衡】所有数据库都面临相同的权衡：强一致性需要等待更多节点确认，增加延迟并降低可用性；弱一致性提高性能但可能读到过期数据。没有万能配置，只有适合特定业务需求的选择。"
        ],
        keyDifficulties: [
            "【MySQL GTID 的优势】GTID（全局事务标识符）简化了故障转移——不需要手动同步 binlog 位置。'保证主库的所有事务都会应用到从库'。新部署强烈推荐使用 GTID 模式而非传统的 binlog 位置复制。",
            "【MongoDB majority vs linearizable】majority 只保证读到'多数节点确认的数据'，可能不是最新的（如果最新写入未达多数）。linearizable 保证读到最新的 majority-committed 数据，但需要额外的等待开销，是最慢的读选项。",
            "【Cassandra LOCAL_QUORUM 的陷阱】在多数据中心部署时，LOCAL_QUORUM 只等待本地数据中心的多数响应。如果本地数据中心与其他数据中心网络分区，可能导致跨数据中心的数据不一致。EACH_QUORUM 更安全但延迟更高。",
            "【同步复制不等于零数据丢失】即使 PostgreSQL 配置同步复制，也需要注意：'级联复制目前是异步的，同步复制设置对级联复制无效'。此外，网络分区时同步复制会导致主库阻塞。"
        ],
        handsOnPath: [
            "搭建 MySQL 主从复制，配置 rpl_semi_sync_source_wait_for_slave_count=1，测量半同步对写入延迟的影响。",
            "使用 mongosh 测试不同 Read Concern 和 Write Concern 组合：{w:'majority', j:true} + readConcern:'majority' vs 默认配置的性能差异。",
            "部署三节点 Cassandra 集群，使用 cqlsh 的 CONSISTENCY 命令切换级别，比较 ONE、QUORUM、ALL 的查询延迟。",
            "配置 PostgreSQL synchronous_commit 参数（off/local/remote_write/remote_apply），测量各级别的提交延迟。",
            "设计一个混合一致性策略：用户登录使用强一致性，用户 Feed 使用最终一致性，说明配置差异。"
        ],
        selfCheck: [
            "MySQL 半同步复制与异步复制的核心区别是什么？什么场景需要半同步？",
            "解释 MongoDB 的 Read Concern 'majority' 和 'linearizable' 的区别？",
            "Cassandra 的 QUORUM 一致性级别意味着什么？如果 N=3，QUORUM 需要多少节点响应？",
            "为什么说 PostgreSQL 同步复制会'增加响应时间和更高的锁竞争'？",
            "如何为电商订单系统和社交媒体 Feed 分别选择合适的一致性配置？"
        ],
        extensions: [
            "研究 MySQL Group Replication（组复制）如何实现多主写入和自动故障转移。",
            "学习 CockroachDB 如何通过 Raft 实现分布式 SQL 的强一致性。",
            "阅读 Jepsen 对 MongoDB、Cassandra 等数据库一致性声明的实际测试报告。",
            "研究 TiDB 如何结合 Raft 和 MVCC 实现分布式事务。"
        ],
        sourceUrls: [
            "https://dev.mysql.com/doc/refman/8.0/en/replication.html",
            "https://www.mongodb.com/docs/manual/reference/read-concern/",
            "https://cassandra.apache.org/doc/latest/cassandra/architecture/dynamo.html"
        ]
    },
    "w2-3": {
        lessonId: "w2-3",
        background: [
            "【一致性模型的定义】Jepsen 定义一致性模型为'系统可以合法执行的历史集合'（a consistency model defines a set of histories that a system can legally execute）。这是一个声明性的安全属性——它定义了系统「不应该」做什么，而非如何实现。",
            "【强一致性光谱的顶端】线性一致性（Linearizability）是单对象操作的实时保证：'写入应该看起来是瞬时完成的，一旦写入完成，所有后续读取都应返回该值或更晚写入的值'。这里的「后续」由物理时钟定义，因此线性一致性也称为「原子一致性」（CAP 中的 C）。",
            "【可串行化与事务】可串行化（Serializability）是多对象事务级别的保证：'事务的执行等价于某个串行顺序'。它来自数据库社区，是 ACID 中的 I（Isolation）。关键区别：可串行化不保证实时顺序，只保证存在某个等价的串行执行。",
            "【严格可串行化】将线性一致性与可串行化结合，得到严格可串行化（Strict Serializability）——事务等价于某个串行执行，且该串行顺序与实时顺序一致。这是分布式数据库的黄金标准，也被称为外部一致性（External Consistency）。",
            "【最终一致性的精确定义】Werner Vogels 定义最终一致性为：'如果没有新的更新，最终所有访问都将返回最后更新的值'。这是弱一致性的特定形式——它只保证收敛，不保证何时收敛。"
        ],
        keyDifficulties: [
            "【线性一致性 vs 顺序一致性】两者的关键区别在于时间语义：线性一致性关心实时（wall-clock），顺序一致性关心程序顺序（program order）。'linearizability cares about time and sequential consistency cares about program order'——如果你无法观察物理时间，两者不可区分。",
            "【术语混淆的根源】混淆来自不同社区：线性一致性来自分布式系统和并发编程社区，可串行化来自数据库社区。今天几乎所有人都同时使用分布式系统和数据库，导致术语重载（如'一致性'在 CAP、ACID、复制中含义不同）。",
            "【N/W/R 法则】Vogels 引入复制系统的关键公式：N=副本数，W=写确认数，R=读取副本数。当 W+R > N 时，读写集合必有交集，可保证强一致性；当 W+R ≤ N 时，可能读不到最新值，只能保证最终一致性。",
            "【会话级别保证】介于强一致性和最终一致性之间，存在多个会话级别保证：Read-Your-Writes（总能读到自己的写入）、Monotonic Reads（不会看到时光倒流）、Monotonic Writes（写入按顺序应用）、Write-Follows-Reads（因果顺序）。"
        ],
        handsOnPath: [
            "使用 Redis 单机模式验证线性一致性：同时启动多个客户端读写同一个 key，验证后读的值总是不早于先写的值。",
            "配置 MySQL 的 SERIALIZABLE 隔离级别，使用两个事务验证可串行化：一个事务修改多行，另一个事务读取，观察加锁行为。",
            "搭建 3 节点 Cassandra 集群，设置 N=3，分别测试 W=1,R=1（最终一致性）和 W=2,R=2（强一致性）的读写行为。",
            "模拟 Read-Your-Writes 失效：在无此保证的系统中，写入后立即刷新页面读取，观察是否读到自己的写入。",
            "绘制一致性模型的偏序图（partial order）：从严格可串行化到最终一致性，标注每个模型的关键特性和典型系统。"
        ],
        selfCheck: [
            "线性一致性和顺序一致性的核心区别是什么？为什么说'如果不能观察物理时间，两者不可区分'？",
            "可串行化为什么不保证实时顺序？给出一个可串行化但非线性一致的执行历史。",
            "解释 W+R > N 如何保证强一致性？如果 N=3, W=2, R=1 能保证强一致性吗？",
            "Monotonic Reads 保证了什么？为什么它在用户体验上很重要？",
            "什么是严格可串行化？它与线性一致性和可串行化分别是什么关系？"
        ],
        extensions: [
            "研究因果一致性（Causal Consistency）的形式化定义和实现（如 COPS 系统）。",
            "学习 Google Spanner 如何通过 TrueTime 实现外部一致性（等价于严格可串行化）。",
            "阅读 Jepsen 对各数据库一致性声明的实际测试报告。",
            "研究 CRDTs（Conflict-free Replicated Data Types）如何在最终一致性下避免冲突。"
        ],
        sourceUrls: [
            "https://jepsen.io/consistency",
            "https://www.allthingsdistributed.com/2008/12/eventually_consistent.html",
            "https://xzhu0027.gitbook.io/blog/misc/index/consistency-models-in-distributed-system"
        ]
    },
    "w2-2": {
        lessonId: "w2-2",
        background: [
            "【PACELC 定理的起源】Daniel Abadi 于 2010 年提出 PACELC，2012 年正式发表论文。他指出 CAP 的主要疏漏：'忽略复制系统的一致性/延迟权衡是一个重大失误，因为它在系统运行的所有时间都存在，而 CAP 只在相对罕见的网络分区情况下相关'。",
            "【PACELC 的完整含义】PACELC = if Partition (P), choose Availability (A) or Consistency (C); Else (E), choose Latency (L) or Consistency (C)。这意味着：即使没有分区，设计者也必须在延迟和一致性之间做出权衡——这是 CAP 没有捕捉到的关键点。",
            "【四种 PACELC 配置】PA/EL：分区时选可用性，正常时选低延迟（Dynamo、Cassandra）；PC/EC：始终优先一致性（BigTable、HBase）；PA/EC：分区时选可用性，正常时选一致性（MongoDB 默认）；PC/EL：分区时选一致性，正常时选低延迟（PNUTS）。",
            "【延迟-一致性权衡的本质】一致性需要协调——写入时等待多个副本确认会增加延迟；读取时从所有副本获取最新值也需要额外往返。选择 EL 的系统用本地数据快速响应；选择 EC 的系统等待副本同步后再确认。",
            "【为什么 PACELC 比 CAP 更实用】Abadi 强调：'延迟对实际系统非常重要，但 CAP 完全没有捕捉到这一点。'网络分区相对罕见，但延迟权衡每时每刻都在发生。对于云应用和分布式系统，PACELC 提供了更全面的设计指导。"
        ],
        keyDifficulties: [
            "【EL vs EC 的实际影响】EL 系统（如 Cassandra 默认配置）在写入时只等待一个副本确认，读取时返回本地数据——延迟低但可能读到过期数据。EC 系统（如使用 QUORUM 的配置）等待多数副本确认——延迟高但保证读到最新数据。",
            "【PA vs PC 在分区时的表现】PA 系统在分区时继续服务，可能返回过期数据或接受可能冲突的写入（需要后续解决冲突）；PC 系统在分区时拒绝服务少数派分区的请求，保证不会产生不一致数据但牺牲可用性。",
            "【配置的动态性】同一个数据库可以通过配置改变其 PACELC 特性。例如 Cassandra：设置一致性级别为 ONE 是 PA/EL；设置为 QUORUM 是 PC/EC；设置为 ALL 是严格的 PC/EC 但可用性最低。",
            "【PACELC 与业务需求的匹配】金融交易系统通常需要 PC/EC——宁可慢也不能错；社交媒体 Feed 可以接受 PA/EL——快速响应比完美一致更重要；电商库存可能需要 PC/EL——分区时不能超卖，但正常时需要快速响应。"
        ],
        handsOnPath: [
            "配置 Cassandra 不同一致性级别（ONE、QUORUM、ALL），使用压测工具测量各配置下的延迟差异。",
            "部署 MongoDB 副本集，分别测试默认配置（PA/EC）和 writeConcern: majority + readConcern: linearizable（PC/EC）的行为。",
            "使用网络模拟工具（如 tc 或 toxiproxy）在正常运行的集群中引入延迟，观察 EL 和 EC 配置的响应差异。",
            "设计一个混合系统：用户认证使用 PC/EC（不能出错），用户 Feed 使用 PA/EL（优先速度）。",
            "绘制你当前项目中各组件的 PACELC 分类图，分析是否与业务需求匹配。"
        ],
        selfCheck: [
            "PACELC 中的 E 代表什么？为什么 Abadi 认为这是 CAP 的主要疏漏？",
            "解释 PA/EL 和 PC/EC 系统在用户体验上的区别？",
            "Cassandra 默认是什么 PACELC 配置？如何将其改为 PC/EC？",
            "为什么说延迟-一致性权衡'每时每刻都在发生'而 CAP 只在分区时相关？",
            "给定一个在线支付系统，你会选择什么 PACELC 配置？为什么？"
        ],
        extensions: [
            "阅读 Abadi 的原始论文《Consistency Tradeoffs in Modern Distributed Database System Design》。",
            "研究 Amazon DynamoDB 如何通过配置支持不同的一致性级别。",
            "学习 CockroachDB 如何在保持强一致性的同时优化延迟。",
            "比较 Spanner（PC/EC）和 Cassandra（PA/EL）在全球部署时的性能差异。"
        ],
        sourceUrls: [
            "https://www.cs.umd.edu/~abadi/papers/abadi-pacelc.pdf",
            "https://www.cs.umd.edu/~abadi/papers/abadi-pacelc.pdf",
            "https://jepsen.io/consistency"
        ]
    },
    "w2-1": {
        lessonId: "w2-1",
        background: [
            "【CAP 定理的精确定义】Gilbert 和 Lynch 在 2002 年正式证明了 Brewer 猜想：'在异步网络模型中，不可能实现同时保证可用性（Availability）、原子一致性（Atomic Consistency）和分区容错性（Partition Tolerance）的读写数据对象'。这是一个关于分布式系统基本限制的定理。",
            "【一致性的精确含义】CAP 中的 Consistency 特指线性一致性（Linearizability），即'任何在写操作完成后开始的读操作，必须返回该值或更晚写操作的结果'。这与 ACID 中的 Consistency 完全不同——后者指满足数据库约束。",
            "【可用性的严格定义】CAP 中的 Availability 要求'每个发送到非故障节点的请求都必须收到响应'。注意是每个非故障节点，不是系统整体。大多数'高可用'系统并不满足这个严格定义。",
            "【分区容错的本质】分区容错意味着'网络允许任意丢失节点间发送的消息'。在真实的分布式系统中，网络分区是不可避免的——这不是一个可选项，而是一个必须接受的现实。",
            "【'三选二'的误解】流行的'三选二'说法具有误导性。由于网络分区无法避免，真正的选择是：当分区发生时，选择一致性（CP）还是可用性（AP）？Kleppmann 指出：'如果你使用的是其他一致性或可用性概念，CAP 定理并不适用'。"
        ],
        keyDifficulties: [
            "【CP/AP 标签的局限性】Kleppmann 强调许多系统'既不满足 CAP 一致性也不满足 CAP 可用性'。例如 MongoDB 和单主系统在 CAP 框架下难以归类；ZooKeeper 被描述为'只有 P'——它提供强保证但不符合二元分类。",
            "【CA 系统的不存在】声称一个分布式数据库是 CA 系统，表明对 CAP 定理的误解。单节点系统不会经历网络分区，因此不在 CAP 讨论范围内；真正的分布式系统必须容忍分区，所以只能是 CP 或 AP。",
            "【定理证明的核心矛盾】Gilbert-Lynch 证明使用反证法：假设存在同时满足 CAP 的系统，在网络分区时，客户端向 G₁ 写入新值，G₁ 因可用性要求必须响应，但因分区无法同步到 G₂；随后客户端从 G₂ 读取，G₂ 返回旧值——这违反了一致性。",
            "【实际系统比 CAP 更复杂】CAP 只保证在某些情况下会出现问题，不代表问题常见。大多数时候系统可以同时保持一致和可用——只有在关键故障场景下才需要取舍。应关注具体属性：线性一致性 vs 弱一致性模型、延迟特性、事务隔离级别。"
        ],
        handsOnPath: [
            "使用 Docker 部署一个三节点 Redis 集群，通过 iptables 模拟网络分区，观察集群在分区时的行为（写入是否成功、读取是否一致）。",
            "部署 ZooKeeper 集群，模拟网络分区，验证其 CP 特性：当少数派节点被隔离时，它们是否拒绝写入请求？",
            "使用 Jepsen（https://jepsen.io/）的测试框架对你的分布式系统进行 CAP 相关的一致性测试。",
            "配置 Cassandra 的不同一致性级别（ONE、QUORUM、ALL），在网络分区时测试读写行为的差异。",
            "绘制一个决策流程图：给定业务需求（如金融交易 vs 社交媒体），如何选择 CP 或 AP 系统？"
        ],
        selfCheck: [
            "CAP 定理中的 Consistency 与 ACID 中的 Consistency 有什么本质区别？",
            "为什么说'三选二'是对 CAP 定理的误解？真正的选择是什么？",
            "解释 Gilbert-Lynch 证明中的核心矛盾：为什么网络分区时无法同时保证一致性和可用性？",
            "为什么单节点数据库不在 CAP 讨论范围内？声称分布式数据库是 CA 系统意味着什么？",
            "ZooKeeper 在 CAP 框架下应该如何分类？为什么 Kleppmann 说它是'只有 P'？"
        ],
        extensions: [
            "阅读 Gilbert 和 Lynch 的原始论文《Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services》。",
            "研究 Brewer 后来的反思文章《CAP Twelve Years Later》，了解他对定理被过度简化的看法。",
            "学习 PACELC 模型，它扩展了 CAP 以涵盖正常情况下延迟与一致性的权衡。",
            "研究 Spanner 如何通过 TrueTime 在全球分布式系统中实现外部一致性。"
        ],
        sourceUrls: [
            "https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html",
            "https://users.ece.cmu.edu/~adrian/731-sp04/readings/GL-cap.pdf",
            "https://www.the-paper-trail.org/page/cap-faq/"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "w2-4": [
        {
            id: "w2-4-q1",
            question: "MySQL 默认使用什么复制模式？",
            options: [
                "同步复制",
                "半同步复制",
                "异步复制",
                "组复制"
            ],
            answer: 2,
            rationale: "MySQL 流复制默认是异步的——主库提交事务后不等待从库确认。半同步和组复制需要额外配置启用。"
        },
        {
            id: "w2-4-q2",
            question: "PostgreSQL 同步复制的主要代价是什么？",
            options: [
                "增加磁盘使用",
                "响应时间增加和更高的锁竞争",
                "减少备库数量",
                "不支持 GTID"
            ],
            answer: 1,
            rationale: "文档指出：'synchronous replication will reduce performance for database applications because of increased response times and higher contention'——事务需要等待备库确认，锁持有时间更长。"
        },
        {
            id: "w2-4-q3",
            question: "MongoDB 的哪个 Read Concern 级别提供线性一致性？",
            options: [
                "local",
                "majority",
                "linearizable",
                "available"
            ],
            answer: 2,
            rationale: "linearizable 是最强的 Read Concern，保证读到最新的 majority-committed 数据，具有因果一致性，但也是最慢的选项。"
        },
        {
            id: "w2-4-q4",
            question: "Cassandra 的 QUORUM 一致性级别意味着什么？",
            options: [
                "所有副本必须响应",
                "只需一个副本响应",
                "多数副本（n/2 + 1）必须响应",
                "本地数据中心的副本必须响应"
            ],
            answer: 2,
            rationale: "QUORUM 定义为'A majority (n/2 + 1) of the replicas must respond'。对于 N=3，QUORUM 需要 2 个节点响应。"
        },
        {
            id: "w2-4-q5",
            question: "MySQL GTID 的主要优势是什么？",
            options: [
                "提高查询性能",
                "减少磁盘空间",
                "简化故障转移，不需要手动同步 binlog 位置",
                "支持更多从库"
            ],
            answer: 2,
            rationale: "GTID（全局事务标识符）简化了故障转移——'保证主库的所有事务都会应用到从库'，不再需要手动管理 binlog 位置。"
        },
        {
            id: "w2-4-q6",
            question: "MongoDB Write Concern w:'majority' 的含义是什么？",
            options: [
                "只写入主节点",
                "写入所有节点",
                "等待多数节点确认写入",
                "异步写入所有节点"
            ],
            answer: 2,
            rationale: "w:'majority' 表示等待多数节点确认写入后才返回成功，提供更强的持久性保证但增加延迟。"
        },
        {
            id: "w2-4-q7",
            question: "Cassandra 中，关于写操作和一致性级别，以下说法正确的是？",
            options: [
                "写操作只发送到一致性级别指定的节点数",
                "写操作总是发送到所有副本，一致性级别只控制等待多少响应",
                "写操作只发送到本地数据中心",
                "写操作不受一致性级别影响"
            ],
            answer: 1,
            rationale: "文档明确指出：'Writes are always sent to all replicas, regardless of consistency level. The consistency level simply controls how many responses the coordinator waits for.'"
        },
        {
            id: "w2-4-q8",
            question: "PostgreSQL 级联复制（Cascading Replication）的一致性特点是什么？",
            options: [
                "默认同步",
                "可以配置为同步或异步",
                "目前只支持异步，同步复制设置对其无效",
                "不支持级联复制"
            ],
            answer: 2,
            rationale: "文档指出：'Cascading replication is currently asynchronous. Synchronous replication settings have no effect on cascading replication at present.'"
        },
        {
            id: "w2-4-q9",
            question: "Cassandra 的 LOCAL_QUORUM 在多数据中心部署时的风险是什么？",
            options: [
                "延迟太高",
                "磁盘使用过多",
                "跨数据中心网络分区时可能导致数据不一致",
                "不支持多数据中心"
            ],
            answer: 2,
            rationale: "LOCAL_QUORUM 只等待本地数据中心的多数响应。如果本地数据中心与其他数据中心网络分区，可能导致跨数据中心的数据不一致。"
        },
        {
            id: "w2-4-q10",
            question: "MongoDB Read Concern 'majority' 和 'linearizable' 的区别是什么？",
            options: [
                "没有区别，只是名称不同",
                "majority 更快但可能不是最新；linearizable 保证读到最新的 majority-committed 数据",
                "linearizable 不需要等待",
                "majority 只适用于写操作"
            ],
            answer: 1,
            rationale: "majority 只保证读到多数节点确认的数据，可能不是最新的。linearizable 保证读到最新的 majority-committed 数据，但需要额外等待，是最慢的读选项。"
        },
        {
            id: "w2-4-q11",
            question: "以下哪种 MySQL 复制格式被认为更安全可靠？",
            options: [
                "SBR（基于语句的复制）",
                "RBR（基于行的复制）",
                "MBR（混合模式复制）",
                "以上都一样安全"
            ],
            answer: 1,
            rationale: "RBR（Row-Based Replication）只复制实际变更的行，比 SBR 更可预测和安全。MBR 会在适当时候自动切换到 RBR。"
        },
        {
            id: "w2-4-q12",
            question: "Cassandra 的 ALL 一致性级别的主要缺点是什么？",
            options: [
                "性能最差",
                "任一节点故障即不可用",
                "不支持读操作",
                "只能在单数据中心使用"
            ],
            answer: 1,
            rationale: "ALL 要求所有副本都响应，提供最强一致性。但代价是任一节点故障或网络问题都会导致请求失败，大大降低可用性。"
        }
    ],
    "w2-3": [
        {
            id: "w2-3-q1",
            question: "线性一致性（Linearizability）和顺序一致性（Sequential Consistency）的核心区别是什么？",
            options: [
                "线性一致性只能用于单对象，顺序一致性只能用于多对象",
                "线性一致性关心实时（wall-clock）顺序，顺序一致性只关心程序顺序",
                "线性一致性比顺序一致性更弱",
                "顺序一致性需要网络同步，线性一致性不需要"
            ],
            answer: 1,
            rationale: "核心区别在于时间语义：'linearizability cares about time and sequential consistency cares about program order'。线性一致性要求操作顺序与物理时间一致，顺序一致性只要求与每个进程的程序顺序一致。"
        },
        {
            id: "w2-3-q2",
            question: "可串行化（Serializability）来自哪个技术社区？在 ACID 中对应哪个字母？",
            options: [
                "分布式系统社区，对应 A（Atomicity）",
                "数据库社区，对应 I（Isolation）",
                "并发编程社区，对应 C（Consistency）",
                "网络协议社区，对应 D（Durability）"
            ],
            answer: 1,
            rationale: "可串行化来自数据库社区，是 ACID 中的 I（Isolation）。而线性一致性来自分布式系统和并发编程社区，对应 CAP 中的 C。"
        },
        {
            id: "w2-3-q3",
            question: "Werner Vogels 对最终一致性的定义是什么？",
            options: [
                "所有读操作立即返回最新值",
                "如果没有新的更新，最终所有访问都将返回最后更新的值",
                "写操作完成后所有副本立即一致",
                "每次读取都返回某个有效值"
            ],
            answer: 1,
            rationale: "Vogels 定义最终一致性为'a specific form of weak consistency; the storage system guarantees that if no new updates are made to the object, eventually all accesses will return the last updated value'。"
        },
        {
            id: "w2-3-q4",
            question: "在 N/W/R 模型中，如何保证强一致性？",
            options: [
                "W = N",
                "R = N",
                "W + R > N",
                "W = R"
            ],
            answer: 2,
            rationale: "当 W + R > N 时，读取和写入的副本集必有交集，保证至少读到一个已写入的副本。例如 N=3, W=2, R=2 时，W+R=4>3，可保证强一致性。"
        },
        {
            id: "w2-3-q5",
            question: "什么是严格可串行化（Strict Serializability）？",
            options: [
                "比可串行化更弱的一致性保证",
                "线性一致性的另一个名称",
                "线性一致性和可串行化的结合——事务等价于某个与实时顺序一致的串行执行",
                "只适用于单对象操作的一致性模型"
            ],
            answer: 2,
            rationale: "严格可串行化结合了线性一致性和可串行化：事务行为等价于某个串行执行，且该串行顺序与实时顺序一致。这是分布式数据库的黄金标准，也称外部一致性。"
        },
        {
            id: "w2-3-q6",
            question: "Read-Your-Writes 保证的含义是什么？",
            options: [
                "所有用户都能读到所有人的写入",
                "一个进程总能读到自己之前写入的值",
                "读操作总是返回最新写入的值",
                "写操作在读操作之前完成"
            ],
            answer: 1,
            rationale: "Read-Your-Writes 是会话级别保证：'A process always sees its own updates immediately'——一个进程总能读到自己的写入，即使该写入尚未传播到所有副本。"
        },
        {
            id: "w2-3-q7",
            question: "以下哪个一致性模型是最强的？",
            options: [
                "最终一致性",
                "因果一致性",
                "顺序一致性",
                "严格可串行化"
            ],
            answer: 3,
            rationale: "从强到弱排序：严格可串行化 > 线性一致性 > 顺序一致性 > 因果一致性 > 最终一致性。严格可串行化结合了线性一致性和可串行化，是最强的保证。"
        },
        {
            id: "w2-3-q8",
            question: "为什么说可串行化不保证实时顺序？",
            options: [
                "因为可串行化只是一个理论概念",
                "因为可串行化只要求存在某个等价的串行执行，不要求该顺序与实际时间一致",
                "因为可串行化不支持并发",
                "因为可串行化只适用于单机系统"
            ],
            answer: 1,
            rationale: "可串行化只保证'execution of a set of transactions is equivalent to some serial execution'，这个串行顺序不需要与物理时间一致。两个不重叠的事务可以按任意顺序串行化。"
        },
        {
            id: "w2-3-q9",
            question: "在 N=3 的副本系统中，W=1, R=1 提供什么级别的一致性？",
            options: [
                "强一致性",
                "严格可串行化",
                "最终一致性（因为 W+R=2 ≤ N=3）",
                "线性一致性"
            ],
            answer: 2,
            rationale: "W+R=2 ≤ N=3，读写集合可能没有交集，因此只能保证最终一致性。要保证强一致性，需要 W+R > N，如 W=2, R=2。"
        },
        {
            id: "w2-3-q10",
            question: "Monotonic Reads 保证了什么？",
            options: [
                "读取速度越来越快",
                "进程不会看到比之前读到的更旧的值（不会时光倒流）",
                "所有读操作返回相同的值",
                "读操作总是成功"
            ],
            answer: 1,
            rationale: "Monotonic Reads 保证'processes never see older values after viewing newer ones'——如果你读到了版本 5，后续读取不会返回版本 4 或更早的值。"
        },
        {
            id: "w2-3-q11",
            question: "线性一致性（Linearizability）也被称为什么？",
            options: [
                "可串行化",
                "原子一致性（Atomic Consistency），CAP 中的 C",
                "严格一致性",
                "ACID 一致性"
            ],
            answer: 1,
            rationale: "线性一致性'is synonymous with the term atomic consistency and is the C, or consistency, in Gilbert and Lynch's proof of the CAP Theorem'。注意它与 ACID 中的 C（数据库约束）完全不同。"
        },
        {
            id: "w2-3-q12",
            question: "关于一致性模型的可组合性（Composability），以下说法正确的是？",
            options: [
                "可串行化是可组合的，线性一致性不是",
                "线性一致性是可组合的——如果每个对象的操作都是线性一致的，整个系统就是线性一致的",
                "两者都不可组合",
                "两者都可组合"
            ],
            answer: 1,
            rationale: "线性一致性是可组合的（local）：'if operations on each object in a system are linearizable, then all operations in the system are linearizable'。可串行化不可组合，多个可串行化的子系统组合可能不是可串行化的。"
        }
    ],
    "w2-2": [
        {
            id: "w2-2-q1",
            question: "PACELC 中的 'E' 代表什么？",
            options: [
                "Error（错误）",
                "Else（否则，即没有分区时）",
                "Efficiency（效率）",
                "Eventual（最终）"
            ],
            answer: 1,
            rationale: "PACELC = if Partition, choose A or C; Else, choose L or C。'E' 代表 Else，即在没有网络分区的正常运行情况下。"
        },
        {
            id: "w2-2-q2",
            question: "Daniel Abadi 认为 CAP 定理的主要疏漏是什么？",
            options: [
                "没有考虑安全性",
                "没有考虑扩展性",
                "忽略了正常运行时延迟与一致性的权衡",
                "没有考虑成本因素"
            ],
            answer: 2,
            rationale: "Abadi 指出：'忽略复制系统的一致性/延迟权衡是一个重大失误，因为它在系统运行的所有时间都存在，而 CAP 只在相对罕见的网络分区情况下相关'。"
        },
        {
            id: "w2-2-q3",
            question: "以下哪个数据库默认是 PA/EL 配置？",
            options: [
                "BigTable",
                "HBase",
                "Cassandra",
                "PostgreSQL"
            ],
            answer: 2,
            rationale: "Cassandra 和 Dynamo 默认是 PA/EL：分区时选择可用性，正常运行时选择低延迟（用本地数据快速响应）。BigTable 和 HBase 是 PC/EC。"
        },
        {
            id: "w2-2-q4",
            question: "MongoDB 的默认 PACELC 配置是什么？",
            options: [
                "PA/EL",
                "PC/EC",
                "PA/EC",
                "PC/EL"
            ],
            answer: 2,
            rationale: "MongoDB 默认是 PA/EC：'在网络分区时选择可用性，但在其他情况下保证一致性'。"
        },
        {
            id: "w2-2-q5",
            question: "PC/EC 系统的特点是什么？",
            options: [
                "始终优先速度，牺牲一致性",
                "始终优先一致性，牺牲可用性和延迟",
                "分区时选可用性，正常时选一致性",
                "分区时选一致性，正常时选延迟"
            ],
            answer: 1,
            rationale: "PC/EC 系统（如 BigTable、HBase）始终优先一致性，'不会放弃一致性，而是付出可用性和延迟的代价来实现它'。"
        },
        {
            id: "w2-2-q6",
            question: "PACELC 定理是在哪一年首次提出的？",
            options: [
                "2002 年",
                "2008 年",
                "2010 年",
                "2015 年"
            ],
            answer: 2,
            rationale: "Daniel Abadi 于 2010 年在博客中首次提出 PACELC，2012 年正式发表论文。"
        },
        {
            id: "w2-2-q7",
            question: "EL（Else Latency）配置的系统在正常运行时会如何响应读请求？",
            options: [
                "等待所有副本同步后再响应",
                "用本地数据快速响应，可能返回过期数据",
                "拒绝请求直到达成共识",
                "随机选择一个副本的数据"
            ],
            answer: 1,
            rationale: "EL 系统在正常运行时优先低延迟，'用本地数据快速响应'，可能读到过期数据但响应速度快。"
        },
        {
            id: "w2-2-q8",
            question: "如何将 Cassandra 从 PA/EL 改为 PC/EC？",
            options: [
                "升级到最新版本",
                "增加节点数量",
                "设置一致性级别为 QUORUM 或 ALL",
                "启用压缩"
            ],
            answer: 2,
            rationale: "Cassandra 可通过配置改变 PACELC 特性：设置一致性级别为 ONE 是 PA/EL；设置为 QUORUM 或 ALL 是 PC/EC。"
        },
        {
            id: "w2-2-q9",
            question: "对于金融交易系统，通常推荐什么 PACELC 配置？",
            options: [
                "PA/EL——优先速度",
                "PC/EC——宁可慢也不能错",
                "PA/EC——分区时保持可用",
                "PC/EL——分区时保持一致"
            ],
            answer: 1,
            rationale: "金融交易系统通常需要 PC/EC——'宁可慢也不能错'，因为数据一致性对金融业务至关重要。"
        },
        {
            id: "w2-2-q10",
            question: "PNUTS 系统是什么 PACELC 配置？",
            options: [
                "PA/EL",
                "PC/EC",
                "PA/EC",
                "PC/EL"
            ],
            answer: 3,
            rationale: "PNUTS 是 PC/EL：分区时选择一致性，但正常运行时选择低延迟。这是四种配置中较少见的一种。"
        },
        {
            id: "w2-2-q11",
            question: "为什么 Abadi 认为 PACELC 比 CAP 对实际系统更重要？",
            options: [
                "因为 PACELC 更简单",
                "因为延迟权衡每时每刻都在发生，而分区相对罕见",
                "因为 CAP 已经过时",
                "因为所有系统都是 PA/EL"
            ],
            answer: 1,
            rationale: "Abadi 强调：'网络分区相对罕见，但延迟-一致性权衡每时每刻都在发生'，因此 PACELC 对日常系统设计更有指导意义。"
        },
        {
            id: "w2-2-q12",
            question: "EC（Else Consistency）配置的系统在写入时会如何处理？",
            options: [
                "立即返回成功，异步复制",
                "只写入本地节点",
                "等待多个副本确认后才返回成功",
                "写入缓存后立即返回"
            ],
            answer: 2,
            rationale: "EC 系统等待副本同步后再确认——写入时需要等待多个副本确认，延迟高但保证读到最新数据。"
        }
    ],
    "w2-1": [
        {
            id: "w2-1-q1",
            question: "CAP 定理中的 Consistency（一致性）特指什么？",
            options: [
                "满足数据库的完整性约束",
                "线性一致性（Linearizability）——读操作返回最新写入的值",
                "最终一致性（Eventually Consistent）",
                "ACID 事务的一致性保证"
            ],
            answer: 1,
            rationale: "CAP 中的 Consistency 特指线性一致性，即'任何在写操作完成后开始的读操作，必须返回该值或更晚写操作的结果'，这与 ACID 的 Consistency 完全不同。"
        },
        {
            id: "w2-1-q2",
            question: "根据 Gilbert 和 Lynch 的正式定义，CAP 中的 Availability 要求什么？",
            options: [
                "系统整体的 99.9% 可用性",
                "大多数节点能够响应请求",
                "每个非故障节点都必须响应请求",
                "至少有一个节点能够响应请求"
            ],
            answer: 2,
            rationale: "CAP 中的 Availability 要求'每个发送到非故障节点的请求都必须收到响应'——这是一个非常严格的定义，大多数'高可用'系统并不满足。"
        },
        {
            id: "w2-1-q3",
            question: "为什么说'CAP 三选二'是一个误导性的说法？",
            options: [
                "因为三者都可以同时实现",
                "因为网络分区不可避免，真正的选择是分区时选 C 还是 A",
                "因为 CAP 定理已被证伪",
                "因为只有大型系统才需要考虑 CAP"
            ],
            answer: 1,
            rationale: "网络分区在分布式系统中不可避免，不是一个可选项。真正的选择是：当分区发生时，选择一致性（CP）还是可用性（AP）？"
        },
        {
            id: "w2-1-q4",
            question: "Gilbert-Lynch 的 CAP 定理证明使用了什么方法？",
            options: [
                "数学归纳法",
                "构造性证明",
                "反证法（Proof by Contradiction）",
                "穷举法"
            ],
            answer: 2,
            rationale: "Gilbert-Lynch 使用反证法：假设存在同时满足 CAP 的系统，然后构造网络分区场景，证明在该场景下一致性和可用性必然冲突。"
        },
        {
            id: "w2-1-q5",
            question: "在 Gilbert-Lynch 的证明中，核心矛盾是什么？",
            options: [
                "网络延迟导致超时",
                "分区时 G₁ 写入新值但无法同步到 G₂，G₂ 读取返回旧值违反一致性",
                "服务器计算能力不足",
                "磁盘存储空间不够"
            ],
            answer: 1,
            rationale: "证明的核心：网络分区时，G₁ 因可用性要求必须响应写入，但因分区无法同步到 G₂；客户端从 G₂ 读取时返回旧值，违反了线性一致性。"
        },
        {
            id: "w2-1-q6",
            question: "关于 CA 系统，以下哪个说法是正确的？",
            options: [
                "CA 系统是最理想的分布式系统设计",
                "MySQL 主从架构是典型的 CA 系统",
                "声称分布式数据库是 CA 系统表明对 CAP 的误解",
                "CA 系统通过牺牲性能来实现"
            ],
            answer: 2,
            rationale: "单节点系统不会经历网络分区，不在 CAP 讨论范围内。真正的分布式系统必须容忍分区，所以只能是 CP 或 AP。声称分布式数据库是 CA 是对 CAP 的误解。"
        },
        {
            id: "w2-1-q7",
            question: "根据 Kleppmann 的文章，ZooKeeper 在 CAP 框架下应如何分类？",
            options: [
                "典型的 CP 系统",
                "典型的 AP 系统",
                "'只有 P'——提供强保证但不符合二元分类",
                "CA 系统"
            ],
            answer: 2,
            rationale: "Kleppmann 指出 ZooKeeper 是'只有 P'——它提供强保证但难以简单归类为 CP 或 AP，说明 CAP 的二元分类对真实系统过于简化。"
        },
        {
            id: "w2-1-q8",
            question: "CAP 定理是在哪一年被正式证明的？",
            options: [
                "1998 年",
                "2000 年",
                "2002 年",
                "2012 年"
            ],
            answer: 2,
            rationale: "Brewer 在 2000 年提出 CAP 猜想，Gilbert 和 Lynch 在 2002 年发表正式证明，将其从猜想变为定理。"
        },
        {
            id: "w2-1-q9",
            question: "CAP 定理证明中的系统模型包含几个服务器节点？",
            options: [
                "1 个",
                "2 个",
                "3 个",
                "5 个"
            ],
            answer: 1,
            rationale: "Gilbert-Lynch 的证明使用最简单的模型：两个服务器 G₁ 和 G₂，它们维护同一个变量 v。证明网络分区时即使两个节点也无法同时满足 CAP。"
        },
        {
            id: "w2-1-q10",
            question: "Kleppmann 建议用什么替代简单的 CP/AP 标签？",
            options: [
                "使用更复杂的三字母标签",
                "关注具体属性：线性一致性、延迟特性、事务隔离级别等",
                "完全放弃 CAP 框架",
                "使用性能基准测试结果"
            ],
            answer: 1,
            rationale: "Kleppmann 建议不要强行将系统归类，而是关注具体属性：线性一致性 vs 弱一致性模型、延迟特性、事务隔离级别、不同故障类型的容错能力等。"
        },
        {
            id: "w2-1-q11",
            question: "CAP 定理关于问题发生的频率说了什么？",
            options: [
                "问题会持续发生",
                "问题只在大规模系统中发生",
                "只保证某些情况下会出现问题，不代表问题常见",
                "问题每天至少发生一次"
            ],
            answer: 2,
            rationale: "CAP 只保证在某些情况下（如网络分区时）会出现问题，不代表问题常见。大多数时候系统可以同时保持一致和可用——只有在关键故障场景下才需要取舍。"
        },
        {
            id: "w2-1-q12",
            question: "CAP 定理中的 Partition Tolerance 意味着什么？",
            options: [
                "系统可以被分割成独立的子系统",
                "网络允许任意丢失节点间发送的消息",
                "数据可以被分片存储",
                "系统可以容忍部分节点故障"
            ],
            answer: 1,
            rationale: "Partition Tolerance 指'网络允许任意丢失节点间发送的消息'。在真实分布式系统中，网络分区不可避免——这不是可选项，而是必须接受的现实。"
        }
    ]
}
