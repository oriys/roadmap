import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "bp-w10-1": {
        lessonId: "bp-w10-1",
        background: [
            "【读写分离动机】单机数据库 I/O 达到极限时，读写分离是常见扩展方案。主库（Primary）处理写操作，多个从库（Replica）处理读操作，通过复制同步数据。",
            "【MySQL 复制机制】MySQL 支持异步复制、半同步复制（Semi-sync）和组复制（Group Replication）。异步复制延迟最低但可能丢数据；半同步至少等一个从库确认。",
            "【复制延迟问题】主从复制存在延迟（Replication Lag）。写入主库后立即从从库读取可能读不到最新数据。MySQL 的 SHOW REPLICA STATUS 显示 Seconds_Behind_Source。",
            "【分库分表策略】垂直拆分按业务模块分库（如用户库、订单库）；水平拆分按分片键（Sharding Key）将同一表的数据分散到多个库。常用算法：取模、范围、一致性哈希。",
            "【ShardingSphere 定位】Apache ShardingSphere 是分布式数据库中间件，提供数据分片、读写分离、分布式事务、弹性伸缩等功能。支持 JDBC 和 Proxy 两种接入模式。",
            "【分片键选择】分片键决定数据分布均匀性和查询效率。理想分片键：高基数、查询频繁使用、分布均匀。用户 ID 常作为分片键，但需处理热点用户问题。"
        ],
        keyDifficulties: [
            "【读写分离一致性】强一致性读必须走主库；最终一致性读可走从库。应用需要根据业务场景选择。写后读（Read-Your-Writes）场景需要特殊处理。",
            "【跨分片查询】不带分片键的查询需要扫描所有分片（Scatter-Gather），性能差。应设计 API 使查询都包含分片键，或使用全局表、广播表。",
            "【分布式事务】跨分片事务需要 2PC 或 Saga 模式，性能和复杂度都增加。应尽量将事务内操作限制在单分片，或接受最终一致性。",
            "【扩容与缩容】增加或减少分片需要数据迁移。一致性哈希可以减少迁移量，但仍需要平滑迁移机制。ShardingSphere 的 Scaling 功能支持在线迁移。",
            "【复制延迟监控】复制延迟超过阈值时应告警。可使用 pt-heartbeat 工具精确测量延迟，或配置 ProxySQL 自动将延迟过高的从库移出负载均衡。"
        ],
        handsOnPath: [
            "配置 MySQL 主从复制：在从库执行 CHANGE REPLICATION SOURCE TO，启动 START REPLICA。使用 SHOW REPLICA STATUS 监控复制状态。",
            "配置 ShardingSphere 读写分离：定义 loadBalancers（如 ROUND_ROBIN），配置 writeDataSourceName 和 readDataSourceNames。",
            "设计分片规则：选择分片键（如 user_id），配置 ShardingSphere 的 shardingAlgorithms 使用 MOD 或 HASH_MOD 算法。",
            "处理跨分片查询：对需要聚合的查询，使用 ShardingSphere 的路由引擎，理解 Scatter-Gather 执行过程。",
            "监控复制延迟：部署 pt-heartbeat 写入心跳表，从从库读取计算延迟；配置 Prometheus 告警规则。",
            "测试数据迁移：使用 ShardingSphere 的 Scaling 功能模拟在线扩容，观察数据迁移过程和流量切换。",
            "实现写后读一致性：在代码层面标记写操作后强制读主库，或使用会话级别的强制路由。"
        ],
        selfCheck: [
            "读写分离解决什么问题？主从复制有哪些模式？各有什么权衡？",
            "什么是复制延迟（Replication Lag）？如何监控和处理？",
            "垂直拆分和水平拆分有什么区别？各适合什么场景？",
            "分片键应该如何选择？有哪些常用的分片算法？",
            "跨分片查询有什么性能问题？如何避免？",
            "分布式事务有哪些实现方式？为什么要尽量避免？"
        ],
        extensions: [
            "学习 Vitess（YouTube 开源）如何在 MySQL 之上实现大规模分片和水平扩展。",
            "研究 TiDB 的分布式架构，了解 NewSQL 数据库如何透明地提供分片能力。",
            "探索 PostgreSQL 的 Citus 扩展，实现分布式 PostgreSQL。",
            "学习 ProxySQL 的查询路由和连接池管理功能。"
        ],
        sourceUrls: [
            "https://dev.mysql.com/doc/refman/8.0/en/replication.html",
            "https://shardingsphere.apache.org/document/current/en/overview/",
            "https://www.percona.com/software/database-tools/percona-toolkit",
            "https://github.com/vitessio/vitess"
        ]
    },
    "bp-w10-2": {
        lessonId: "bp-w10-2",
        background: [
            "【CQRS 定义】Martin Fowler：'CQRS stands for Command Query Responsibility Segregation. It's a pattern that separates read and update operations for a data store'——命令（写）和查询（读）使用不同的模型。",
            "【CQRS 动机】复杂业务中，读和写的模型需求差异大。写操作需要复杂验证和业务逻辑；读操作需要灵活查询和聚合。分离后可以独立优化。",
            "【读模型存储选择】写入用关系型数据库（如 MySQL）保证事务一致性；查询用搜索引擎（如 Elasticsearch）或文档数据库（如 MongoDB）提供灵活查询。数据通过事件同步。",
            "【Event Sourcing】事件溯源是 CQRS 的常见配套模式。不存储当前状态，而是存储所有状态变更事件。当前状态通过回放事件重建。Kafka 等事件流平台常用于此。",
            "【最终一致性】CQRS 中读模型通常是最终一致的。写入命令后，读模型需要时间同步更新。UI 需要处理这种延迟，如乐观更新或显示处理中状态。",
            "【投影（Projection）】从事件流构建读模型的过程称为投影。每种查询需求可以有独立的投影，存储为不同的物化视图。投影可以重建（Replay）。"
        ],
        keyDifficulties: [
            "【数据同步延迟】读模型更新有延迟。用户写入后立即查询可能看不到最新数据。需要在 UI 层处理：乐观更新、Loading 状态、或强制等待同步完成。",
            "【事件版本管理】Event Sourcing 中事件 Schema 会演进。需要支持事件的向上兼容（Upcasting）或版本化处理，否则历史事件无法正确回放。",
            "【投影重建成本】如果投影逻辑变更，需要从头回放所有事件重建读模型。历史事件量大时，重建可能需要数小时。需要快照（Snapshot）机制加速。",
            "【复杂度增加】CQRS 增加了架构复杂度：需要维护多个数据存储、事件同步机制、投影逻辑。对简单 CRUD 应用不必要，只在复杂业务场景使用。",
            "【事务边界】命令处理通常在单个聚合根内保证事务。跨聚合的操作需要 Saga 或 Process Manager 协调，增加复杂度。"
        ],
        handsOnPath: [
            "设计命令和事件：定义 Command（如 CreateOrder）和 Event（如 OrderCreated），Command 表示意图，Event 表示已发生的事实。",
            "实现命令处理器：接收 Command，执行业务验证，操作聚合根，发布 Event 到消息队列（如 Kafka）。",
            "构建读模型投影：消费 Event，更新读模型（如 Elasticsearch 索引）。实现幂等性，处理重复消费。",
            "配置 Kafka Connect：使用 Debezium 捕获 MySQL 变更事件，或使用 Kafka Connect Elasticsearch Sink 同步到搜索引擎。",
            "实现事件回放：记录投影消费位置（offset），支持从指定位置重放事件重建读模型。",
            "处理最终一致性 UI：在前端实现乐观更新，写入成功后立即在本地更新 UI，同时轮询或订阅确认同步完成。",
            "监控同步延迟：跟踪写入时间和读模型更新时间的差异，配置告警。"
        ],
        selfCheck: [
            "什么是 CQRS？它解决什么问题？",
            "为什么读模型和写模型可以使用不同的存储技术？",
            "什么是 Event Sourcing？它与 CQRS 有什么关系？",
            "CQRS 中的最终一致性对 UI 设计有什么影响？",
            "什么是投影（Projection）？投影重建有什么挑战？",
            "CQRS 增加了哪些复杂度？什么场景适合使用？"
        ],
        extensions: [
            "学习 Axon Framework（Java）的 CQRS 和 Event Sourcing 实现。",
            "研究 EventStoreDB 作为专门的事件存储数据库。",
            "探索 Debezium 的 CDC（Change Data Capture）机制，实现数据库变更到事件流的桥接。",
            "学习 DDD（领域驱动设计）中的聚合根、领域事件等概念，与 CQRS 结合。"
        ],
        sourceUrls: [
            "https://martinfowler.com/bliki/CQRS.html",
            "https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs",
            "https://debezium.io/documentation/",
            "https://www.eventstore.com/"
        ]
    },
    "bp-w10-3": {
        lessonId: "bp-w10-3",
        background: [
            "【流处理定位】Apache Flink 文档：'Flink is a framework and distributed processing engine for stateful computations over unbounded and bounded data streams'——对无界和有界数据流进行有状态计算。",
            "【背压机制】Flink 的背压（Backpressure）是自动的流量控制机制。当下游算子处理速度跟不上上游时，压力向上游传递，减缓数据发送速度，避免缓冲区溢出。",
            "【Flink 窗口类型】Flink 支持多种窗口：Tumbling（滚动，不重叠）、Sliding（滑动，可重叠）、Session（会话，间隔触发）、Global（全局，自定义触发器）。",
            "【Watermark 机制】处理乱序事件需要 Watermark。Watermark 表示事件时间进度，声明该时间之前的事件已全部到达。允许一定延迟容忍（allowedLateness）。",
            "【状态后端】Flink 的有状态计算依赖状态后端：MemoryStateBackend（测试用）、HashMapStateBackend（堆内存）、EmbeddedRocksDBStateBackend（大状态，支持增量 checkpoint）。",
            "【Checkpoint 机制】Flink 通过 Checkpoint 实现容错。定期快照算子状态，失败时从最近 Checkpoint 恢复。Checkpoint 间隔影响恢复时间和性能开销。"
        ],
        keyDifficulties: [
            "【背压定位】Flink Web UI 显示背压状态（OK/LOW/HIGH）。背压可能来自：下游算子慢、状态访问开销、外部系统瓶颈（如 Kafka、数据库）。需要逐步排查。",
            "【窗口性能优化】大窗口积累大量数据会消耗内存。可使用增量聚合（ReduceFunction/AggregateFunction）而非 ProcessWindowFunction 全量处理。",
            "【Watermark 策略】Watermark 过于保守会增加延迟，过于激进会丢弃迟到数据。BoundedOutOfOrdernessWatermarks 允许配置最大乱序时间。",
            "【状态大小管理】大状态影响 Checkpoint 速度和恢复时间。应使用 TTL 清理过期状态，避免状态无限增长。RocksDB 支持增量 Checkpoint。",
            "【Exactly-Once 语义】端到端 Exactly-Once 需要 Source（如 Kafka）和 Sink 都支持。Flink 的 TwoPhaseCommitSinkFunction 配合 Kafka 事务实现。"
        ],
        handsOnPath: [
            "观察 Flink 背压：在 Flink Web UI 查看 Task 的 Backpressure 状态，使用 Metrics 面板查看 inputQueueLength 和 outputQueueLength。",
            "配置窗口聚合：使用 AggregateFunction 实现增量聚合，避免 ProcessWindowFunction 的全量数据加载。对比内存使用。",
            "设置 Watermark：使用 WatermarkStrategy.forBoundedOutOfOrderness(Duration.ofSeconds(5)) 允许 5 秒乱序，处理迟到事件。",
            "配置状态后端：使用 EmbeddedRocksDBStateBackend 处理大状态，启用增量 Checkpoint 减少 Checkpoint 时间。",
            "监控 Checkpoint：在 Web UI 查看 Checkpoint 历史，关注 Duration、Size、Alignment Duration。配置 Checkpoint 超时告警。",
            "实现 Exactly-Once：配置 Kafka Source 和 Sink 都使用 Exactly-Once 语义，验证故障恢复后数据不重复。",
            "优化并行度：根据 Kafka 分区数和 CPU 核心数调整 Task 并行度，使用 Slot Sharing Group 隔离资源密集型算子。"
        ],
        selfCheck: [
            "什么是流处理中的背压？Flink 如何自动处理背压？",
            "Flink 的滚动窗口和滑动窗口有什么区别？",
            "什么是 Watermark？它解决什么问题？",
            "为什么推荐使用 AggregateFunction 而非 ProcessWindowFunction？",
            "Flink 的 Checkpoint 机制如何实现容错？",
            "如何实现端到端的 Exactly-Once 语义？"
        ],
        extensions: [
            "学习 Apache Kafka Streams，在 Kafka 生态内实现流处理。",
            "研究 Flink 的 Queryable State，实现外部查询流处理状态。",
            "探索 Flink SQL 和 Table API，使用 SQL 进行流处理开发。",
            "学习 Spark Structured Streaming 与 Flink 的对比，理解微批次和纯流处理的区别。"
        ],
        sourceUrls: [
            "https://nightlies.apache.org/flink/flink-docs-stable/",
            "https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/time/",
            "https://nightlies.apache.org/flink/flink-docs-stable/docs/ops/state/checkpoints/",
            "https://kafka.apache.org/documentation/streams/"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w10-1": [
        {
            id: "bp-w10-1-q1",
            question: "读写分离的主要目的是什么？",
            options: [
                "提高安全性",
                "将读写负载分散到主库和从库，扩展数据库处理能力",
                "减少数据存储",
                "简化代码"
            ],
            answer: 1,
            rationale: "读写分离将写操作集中在主库，读操作分散到多个从库，通过分散负载扩展数据库的处理能力。"
        },
        {
            id: "bp-w10-1-q2",
            question: "MySQL 半同步复制（Semi-sync）有什么特点？",
            options: [
                "完全不等待从库确认",
                "至少等待一个从库确认收到日志后再返回",
                "等待所有从库确认",
                "禁用复制"
            ],
            answer: 1,
            rationale: "半同步复制要求主库至少等待一个从库确认收到 binlog 后才向客户端返回成功，平衡一致性和性能。"
        },
        {
            id: "bp-w10-1-q3",
            question: "什么是复制延迟（Replication Lag）？",
            options: [
                "网络延迟",
                "从库数据落后主库的时间差",
                "查询延迟",
                "连接延迟"
            ],
            answer: 1,
            rationale: "复制延迟是从库数据落后主库的时间。写入主库后立即从从库读取可能读不到最新数据。"
        },
        {
            id: "bp-w10-1-q4",
            question: "垂直拆分和水平拆分的区别是什么？",
            options: [
                "没有区别",
                "垂直按业务模块分库，水平按分片键将同表数据分散",
                "垂直分数据，水平分表",
                "垂直用于读，水平用于写"
            ],
            answer: 1,
            rationale: "垂直拆分按业务模块分库（如用户库、订单库）；水平拆分按分片键将同一表的数据分散到多个库。"
        },
        {
            id: "bp-w10-1-q5",
            question: "分片键（Sharding Key）应该如何选择？",
            options: [
                "随机选择",
                "高基数、查询频繁使用、分布均匀",
                "使用自增 ID",
                "使用日期"
            ],
            answer: 1,
            rationale: "理想分片键：高基数（避免热点）、查询频繁使用（避免跨分片）、分布均匀（避免数据倾斜）。"
        },
        {
            id: "bp-w10-1-q6",
            question: "跨分片查询有什么问题？",
            options: [
                "无问题",
                "需要扫描所有分片（Scatter-Gather），性能差",
                "只影响写入",
                "会导致数据丢失"
            ],
            answer: 1,
            rationale: "不带分片键的查询需要扫描所有分片（Scatter-Gather），然后汇总结果，性能较差。"
        },
        {
            id: "bp-w10-1-q7",
            question: "如何监控 MySQL 复制延迟？",
            options: [
                "查看 CPU 使用率",
                "SHOW REPLICA STATUS 的 Seconds_Behind_Source 或使用 pt-heartbeat",
                "查看磁盘使用率",
                "查看内存使用"
            ],
            answer: 1,
            rationale: "SHOW REPLICA STATUS 显示 Seconds_Behind_Source；pt-heartbeat 通过心跳表更精确地测量延迟。"
        },
        {
            id: "bp-w10-1-q8",
            question: "什么是 Write-After-Read 一致性问题？",
            options: [
                "读取失败",
                "写入后立即读取从库可能读不到刚写入的数据",
                "写入失败",
                "连接失败"
            ],
            answer: 1,
            rationale: "由于复制延迟，写入主库后立即从从库读取可能读不到最新数据。需要强制读主库或等待同步。"
        },
        {
            id: "bp-w10-1-q9",
            question: "Apache ShardingSphere 支持哪些接入模式？",
            options: [
                "只支持 JDBC",
                "JDBC 和 Proxy 两种模式",
                "只支持 Proxy",
                "只支持 REST API"
            ],
            answer: 1,
            rationale: "ShardingSphere 支持 JDBC（应用内嵌）和 Proxy（独立代理）两种接入模式，适应不同部署需求。"
        },
        {
            id: "bp-w10-1-q10",
            question: "分布式事务为什么要尽量避免？",
            options: [
                "无法实现",
                "2PC 或 Saga 增加性能开销和复杂度",
                "不支持回滚",
                "只能用于读操作"
            ],
            answer: 1,
            rationale: "跨分片事务需要 2PC 或 Saga 模式，增加网络往返、锁持有时间和代码复杂度。应尽量限制在单分片内。"
        },
        {
            id: "bp-w10-1-q11",
            question: "一致性哈希分片有什么优势？",
            options: [
                "更简单",
                "扩容/缩容时只需迁移部分数据",
                "更安全",
                "性能更好"
            ],
            answer: 1,
            rationale: "一致性哈希在增减分片时，只需要迁移受影响的部分数据，而非全部重新分布，减少迁移成本。"
        },
        {
            id: "bp-w10-1-q12",
            question: "如何处理热点用户导致的数据倾斜？",
            options: [
                "忽略",
                "对热点用户单独分片或使用复合分片键",
                "删除热点用户",
                "限制热点用户访问"
            ],
            answer: 1,
            rationale: "热点用户（如大 V）数据量大，可能导致单分片过载。可以单独分片或使用复合分片键进一步打散。"
        }
    ],
    "bp-w10-2": [
        {
            id: "bp-w10-2-q1",
            question: "Martin Fowler 对 CQRS 的定义是什么？",
            options: [
                "一种数据库技术",
                "分离读和写操作使用不同的模型",
                "一种缓存策略",
                "一种网络协议"
            ],
            answer: 1,
            rationale: "Martin Fowler：'CQRS separates read and update operations for a data store'——命令（写）和查询（读）使用不同的模型。"
        },
        {
            id: "bp-w10-2-q2",
            question: "CQRS 的主要动机是什么？",
            options: [
                "减少代码量",
                "读和写的模型需求差异大，分离后可独立优化",
                "提高安全性",
                "减少存储成本"
            ],
            answer: 1,
            rationale: "复杂业务中，写操作需要复杂验证和业务逻辑，读操作需要灵活查询。分离后可以针对各自需求独立优化。"
        },
        {
            id: "bp-w10-2-q3",
            question: "什么是 Event Sourcing？",
            options: [
                "一种搜索技术",
                "不存储当前状态，而是存储所有状态变更事件",
                "一种缓存策略",
                "一种日志记录"
            ],
            answer: 1,
            rationale: "Event Sourcing 不存储当前状态，而是存储所有状态变更事件。当前状态通过回放（Replay）事件重建。"
        },
        {
            id: "bp-w10-2-q4",
            question: "CQRS 中的读模型通常有什么特点？",
            options: [
                "强一致性",
                "最终一致性，有同步延迟",
                "无延迟",
                "总是最新"
            ],
            answer: 1,
            rationale: "CQRS 中读模型通常是最终一致的。写入命令后，读模型需要时间同步更新。UI 需要处理这种延迟。"
        },
        {
            id: "bp-w10-2-q5",
            question: "什么是投影（Projection）？",
            options: [
                "数据库视图",
                "从事件流构建读模型的过程",
                "数据备份",
                "数据压缩"
            ],
            answer: 1,
            rationale: "投影是从事件流构建读模型的过程。每种查询需求可以有独立的投影，存储为不同的物化视图。"
        },
        {
            id: "bp-w10-2-q6",
            question: "CQRS 增加了哪些复杂度？",
            options: [
                "无额外复杂度",
                "需要维护多个数据存储、事件同步机制、投影逻辑",
                "只是代码量增加",
                "只是部署复杂"
            ],
            answer: 1,
            rationale: "CQRS 需要维护多个数据存储、事件同步机制、投影逻辑、最终一致性处理等，增加架构复杂度。"
        },
        {
            id: "bp-w10-2-q7",
            question: "如何处理 CQRS 中的数据同步延迟对 UI 的影响？",
            options: [
                "忽略",
                "使用乐观更新、Loading 状态或强制等待同步完成",
                "禁用 UI",
                "只显示缓存数据"
            ],
            answer: 1,
            rationale: "UI 需要处理最终一致性：乐观更新（写入后立即更新本地 UI）、显示 Loading 状态、或轮询确认同步完成。"
        },
        {
            id: "bp-w10-2-q8",
            question: "Event Sourcing 中事件版本管理有什么挑战？",
            options: [
                "无挑战",
                "事件 Schema 演进需要向上兼容，否则历史事件无法正确回放",
                "只是文档问题",
                "自动处理"
            ],
            answer: 1,
            rationale: "事件 Schema 会随业务演进。需要支持事件的向上兼容（Upcasting）或版本化处理，否则历史事件无法正确回放。"
        },
        {
            id: "bp-w10-2-q9",
            question: "投影重建（Replay）有什么挑战？",
            options: [
                "无挑战",
                "历史事件量大时重建可能需要数小时，需要快照机制",
                "只需几秒钟",
                "无法重建"
            ],
            answer: 1,
            rationale: "投影逻辑变更需要从头回放所有事件。历史事件量大时重建耗时长，需要快照（Snapshot）机制加速。"
        },
        {
            id: "bp-w10-2-q10",
            question: "什么场景适合使用 CQRS？",
            options: [
                "所有场景",
                "复杂业务场景，读写需求差异大，需要独立扩展",
                "简单 CRUD 应用",
                "只读应用"
            ],
            answer: 1,
            rationale: "CQRS 适合复杂业务场景，读写需求差异大。对简单 CRUD 应用增加不必要的复杂度。"
        },
        {
            id: "bp-w10-2-q11",
            question: "Debezium 在 CQRS 架构中有什么作用？",
            options: [
                "数据库备份",
                "CDC 捕获数据库变更事件，桥接到 Kafka 事件流",
                "查询优化",
                "缓存管理"
            ],
            answer: 1,
            rationale: "Debezium 通过 CDC（Change Data Capture）捕获数据库变更，发布到 Kafka，用于同步读模型。"
        },
        {
            id: "bp-w10-2-q12",
            question: "Command 和 Event 有什么区别？",
            options: [
                "没有区别",
                "Command 表示意图（希望做什么），Event 表示已发生的事实",
                "Command 用于读，Event 用于写",
                "Command 是同步的，Event 是异步的"
            ],
            answer: 1,
            rationale: "Command 表示意图（如 CreateOrder，可能失败），Event 表示已发生的事实（如 OrderCreated，不可撤销）。"
        }
    ],
    "bp-w10-3": [
        {
            id: "bp-w10-3-q1",
            question: "Apache Flink 的定位是什么？",
            options: [
                "批处理框架",
                "对无界和有界数据流进行有状态计算的分布式处理引擎",
                "数据库",
                "消息队列"
            ],
            answer: 1,
            rationale: "Flink 文档：'A framework and distributed processing engine for stateful computations over unbounded and bounded data streams'。"
        },
        {
            id: "bp-w10-3-q2",
            question: "什么是流处理中的背压（Backpressure）？",
            options: [
                "网络压力",
                "下游处理慢时，压力向上游传递，减缓数据发送速度",
                "内存压力",
                "CPU 压力"
            ],
            answer: 1,
            rationale: "背压是自动流量控制机制。当下游算子处理速度跟不上上游时，压力向上游传递，减缓数据发送速度。"
        },
        {
            id: "bp-w10-3-q3",
            question: "Flink 的滚动窗口（Tumbling）和滑动窗口（Sliding）有什么区别？",
            options: [
                "没有区别",
                "滚动窗口不重叠，滑动窗口可重叠",
                "滚动用于计数，滑动用于时间",
                "滚动更快"
            ],
            answer: 1,
            rationale: "滚动窗口（Tumbling）是不重叠的固定大小窗口；滑动窗口（Sliding）可以重叠，如每 5 秒滑动的 10 秒窗口。"
        },
        {
            id: "bp-w10-3-q4",
            question: "什么是 Watermark？它解决什么问题？",
            options: [
                "数据标记",
                "表示事件时间进度，用于处理乱序事件",
                "日志标记",
                "错误标记"
            ],
            answer: 1,
            rationale: "Watermark 表示事件时间进度，声明该时间之前的事件已全部到达，用于触发窗口计算和处理乱序事件。"
        },
        {
            id: "bp-w10-3-q5",
            question: "为什么推荐使用 AggregateFunction 而非 ProcessWindowFunction？",
            options: [
                "更简单",
                "增量聚合减少内存使用，不需要存储窗口内所有数据",
                "更灵活",
                "更安全"
            ],
            answer: 1,
            rationale: "AggregateFunction 实现增量聚合，只维护中间状态；ProcessWindowFunction 需要存储窗口内所有数据，内存开销大。"
        },
        {
            id: "bp-w10-3-q6",
            question: "Flink 的 Checkpoint 机制有什么作用？",
            options: [
                "数据备份",
                "定期快照算子状态，实现故障恢复容错",
                "性能优化",
                "日志记录"
            ],
            answer: 1,
            rationale: "Checkpoint 定期快照所有算子的状态，失败时可以从最近的 Checkpoint 恢复，实现容错。"
        },
        {
            id: "bp-w10-3-q7",
            question: "EmbeddedRocksDBStateBackend 有什么优势？",
            options: [
                "更简单",
                "支持大状态，状态可以超过内存，支持增量 Checkpoint",
                "更快",
                "更安全"
            ],
            answer: 1,
            rationale: "RocksDB 状态后端支持大状态（超过 JVM 堆内存），支持增量 Checkpoint 减少 Checkpoint 时间。"
        },
        {
            id: "bp-w10-3-q8",
            question: "如何实现端到端的 Exactly-Once 语义？",
            options: [
                "自动实现",
                "Source 和 Sink 都需要支持，如 Kafka 的事务机制",
                "只需要 Checkpoint",
                "无法实现"
            ],
            answer: 1,
            rationale: "端到端 Exactly-Once 需要 Source（如 Kafka）和 Sink 都支持。Flink 配合 Kafka 事务实现。"
        },
        {
            id: "bp-w10-3-q9",
            question: "背压问题可能的原因有哪些？",
            options: [
                "只有网络问题",
                "下游算子慢、状态访问开销、外部系统瓶颈",
                "只有 CPU 不足",
                "只有内存不足"
            ],
            answer: 1,
            rationale: "背压可能来自：下游算子计算慢、状态访问开销大、外部系统瓶颈（如 Kafka、数据库响应慢）。"
        },
        {
            id: "bp-w10-3-q10",
            question: "BoundedOutOfOrdernessWatermarks 有什么作用？",
            options: [
                "排序数据",
                "允许配置最大乱序时间，处理迟到事件",
                "压缩数据",
                "加密数据"
            ],
            answer: 1,
            rationale: "BoundedOutOfOrdernessWatermarks 允许配置最大乱序容忍时间，Watermark = 当前最大事件时间 - 乱序容忍时间。"
        },
        {
            id: "bp-w10-3-q11",
            question: "如何避免状态无限增长？",
            options: [
                "增加内存",
                "使用 State TTL 设置过期时间清理过期状态",
                "禁用状态",
                "定期重启"
            ],
            answer: 1,
            rationale: "应使用 State TTL（Time-To-Live）设置状态过期时间，自动清理过期状态，避免无限增长。"
        },
        {
            id: "bp-w10-3-q12",
            question: "Flink Web UI 中如何观察背压状态？",
            options: [
                "查看日志",
                "查看 Task 的 Backpressure 状态（OK/LOW/HIGH）",
                "查看 CPU 使用率",
                "查看内存使用"
            ],
            answer: 1,
            rationale: "Flink Web UI 的 Task 详情页显示 Backpressure 状态：OK（无背压）、LOW（轻微）、HIGH（严重）。"
        }
    ]
}
