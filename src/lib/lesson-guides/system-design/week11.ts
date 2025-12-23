import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "w11-1": {
        lessonId: "w11-1",
        background: [
            "【分片模式定义】Microsoft 文档定义分片为：'Divide a data store into a set of horizontal partitions or shards'。每个分片具有相同的 schema 但持有不同的数据子集，作为独立的数据存储运行。",
            "【三种分片策略】Azure 架构模式提出三种策略：Lookup Strategy（查找策略，使用分片映射）、Range Strategy（范围策略，按范围分配）、Hash Strategy（哈希策略，通过哈希函数计算分片位置）。",
            "【Lookup 策略特点】查找策略使用 'shard map that routes data requests to the shard that contains that data'。虚拟分区提供灵活性：'Remapping virtual partitions to physical partitions is easier if using virtual partitions'——简化再平衡操作。",
            "【Range 策略特点】范围策略将相关数据分组到同一分片：'Groups related items together in the same shard, and orders them by shard key'。支持高效范围查询，但连续键可能导致热点。",
            "【Hash 策略特点】哈希策略提供均匀分布：'reduces the chance of hot spots because it generates a more even distribution of data across shards'。缺点是无法支持范围查询，且不需要维护分片映射。"
        ],
        keyDifficulties: [
            "【策略选择权衡】没有最佳策略，只有最适合的策略。Lookup 策略'provides more control over how shards are configured and used'但需要维护映射；Hash 策略简单但牺牲范围查询能力。",
            "【跨分片查询复杂性】Microsoft 警告：'An application might need to merge results from multiple shards, which can make it difficult to maintain consistent data views'。跨分片 JOIN 和聚合是主要挑战。",
            "【热点问题识别】Range 策略的热点风险：'If the shard key is based on date-time, then all activity for a day will be directed to a single shard'。需要监控分片负载分布。",
            "【分片与分区区别】分片（Sharding）是跨多个数据库实例的水平分区；分区（Partitioning）可以在单个数据库内部。分片涉及网络通信和分布式事务复杂性。"
        ],
        handsOnPath: [
            "分析业务查询模式：识别主要查询是点查询还是范围查询，决定 Hash 还是 Range 策略。",
            "设计分片映射表：创建 shard_key -> shard_id 的映射，考虑虚拟分片层以简化再平衡。",
            "实现 Hash 分片路由：hash(key) % num_shards，测试数据分布均匀性。",
            "实现 Range 分片路由：定义分片边界，如 [0-1000) -> shard1, [1000-2000) -> shard2。",
            "监控分片负载：收集每个分片的 QPS、数据量、延迟指标，识别热点分片。"
        ],
        selfCheck: [
            "三种分片策略的核心区别是什么？",
            "为什么 Lookup 策略使用虚拟分片可以简化再平衡？",
            "Hash 策略为什么不支持范围查询？",
            "Range 策略在什么情况下会产生热点？",
            "跨分片查询面临哪些挑战？"
        ],
        extensions: [
            "研究 Consistent Hashing 如何改进传统 Hash 分片的再平衡问题。",
            "学习 Vitess 的 vindex 机制如何实现灵活的分片路由。",
            "了解 CockroachDB 的自动分片如何平衡负载。",
            "研究 TiDB 的 Region 分裂和合并机制。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/sharding",
            "https://vitess.io/docs/concepts/shard/"
        ]
    },
    "w11-2": {
        lessonId: "w11-2",
        background: [
            "【分片键重要性】分片键决定数据分布，一旦选定难以更改。MongoDB 文档强调：'shard key determines how the documents in the collection are distributed among the shards in the cluster'。选择错误的分片键会导致性能灾难。",
            "【高基数原则】分片键需要高基数（cardinality）：'A shard key with low cardinality can result in unbalanced data distribution'。例如，使用布尔值作为分片键只能分到两个分片。",
            "【写分布均匀性】分片键应保证写入均匀分布：'avoid keys that cause a small number of shards to receive a disproportionately large number of writes'。单调递增键（如自增 ID）会导致热点。",
            "【查询亲和性】分片键应支持常见查询模式：'Choose a shard key that allows most queries to include the shard key'。包含分片键的查询可以直接路由到目标分片，避免扇出查询。",
            "【Vitess vindex 机制】Vitess 使用 vindex 将列值映射到 keyspace ID：'A vindex provides a way to map a column value to a keyspace ID'。支持多种类型：hash（xxhash64）、binary、lookup 等。"
        ],
        keyDifficulties: [
            "【复合分片键设计】单一字段可能无法同时满足高基数和查询亲和性。解决方案是复合分片键：'compound shard key combines multiple fields to address different query patterns'——但增加了写入开销。",
            "【热点避免策略】避免使用时间戳或自增 ID：'Monotonically increasing values create insertion hotspots'。替代方案：哈希前缀、随机盐值、复合键打散。",
            "【分片键不可变性】大多数系统不允许更改已有文档的分片键值：'Once a document is inserted, you cannot change the shard key value'。这要求在设计阶段深思熟虑。",
            "【Vitess 哈希 vindex 的十六进制表示】Vitess 使用十六进制表示分片范围：'-80' 表示 keyspace ID < 0x80，'80-' 表示 >= 0x80。'The notation is hexadecimal and the value ranges are left-closed and right-open'。"
        ],
        handsOnPath: [
            "分析候选分片键：评估 user_id、order_id、timestamp 等字段的基数和查询模式。",
            "测试数据分布：使用 MongoDB explain() 或 Vitess debug 查看查询路由。",
            "配置 Vitess vindex：CREATE TABLE 时指定 PRIMARY KEY (id) VINDEX (user_id) USING hash;",
            "实现 scatter-gather 查询：测试不包含分片键的查询性能，理解扇出开销。",
            "监控热点：使用 Vitess vtctld 或 MongoDB sh.status() 查看分片数据分布。"
        ],
        selfCheck: [
            "选择分片键需要考虑哪些因素？",
            "为什么自增 ID 不适合作为分片键？",
            "什么是 scatter-gather 查询？它的性能问题是什么？",
            "Vitess 的 vindex 如何将列值映射到分片？",
            "如何设计复合分片键以平衡写分布和查询亲和性？"
        ],
        extensions: [
            "研究 MongoDB 的 hashed shard key 与 ranged shard key 对比。",
            "学习 Spanner 的 interleaving 如何优化父子表的分片。",
            "了解 YugabyteDB 的 hash 和 range 分片选项。",
            "研究 PlanetScale 的分片最佳实践。"
        ],
        sourceUrls: [
            "https://www.mongodb.com/docs/manual/core/sharding-shard-key/",
            "https://vitess.io/docs/reference/features/vindexes/"
        ]
    },
    "w11-3": {
        lessonId: "w11-3",
        background: [
            "【单主复制模式】MySQL Group Replication 的单主模式：'Only one server (the primary) accepts updates. All other group members are secondaries that process read workloads'。主节点故障时自动选举新主。",
            "【多主复制模式】多主模式允许所有节点写入：'All servers in the group are primaries. Members can accept updates at the same time'。需要处理写冲突，适合地理分布场景。",
            "【无主复制架构】Cassandra 和 DynamoDB 使用无主复制：'All replicas can accept writes, with conflicts resolved using timestamps or vector clocks'。通过 quorum 读写保证一致性。",
            "【Raft 共识协议】CockroachDB 使用 Raft 实现复制：'Each range is replicated using the Raft consensus protocol'。Raft 保证在大多数节点可用时系统继续运行，提供强一致性。",
            "【MySQL Group Replication 成员服务】Group Replication 内置成员管理：'built-in group membership service that keeps the view of the group consistent and available'。自动处理节点加入和离开。"
        ],
        keyDifficulties: [
            "【单主 vs 多主选择】单主模式简单但主节点是瓶颈：'Single-primary mode provides a familiar failover model but limits write throughput'。多主模式提高写吞吐但引入冲突处理复杂性。",
            "【写冲突处理】多主模式的冲突检测：MySQL Group Replication 使用'certification-based conflict detection'，在事务提交时检查冲突。第一个提交的事务获胜，后续冲突事务回滚。",
            "【Raft 的性能权衡】Raft 需要 majority 节点确认才能提交：'A write is only committed when a majority of replicas acknowledge it'。这增加了写延迟但保证了强一致性。",
            "【复制拓扑与网络延迟】跨数据中心复制面临网络延迟挑战。CockroachDB 允许配置 replica placement：'configure replica placement to ensure low-latency reads in specific regions'。"
        ],
        handsOnPath: [
            "配置 MySQL Group Replication 单主模式：设置 group_replication_single_primary_mode=ON。",
            "测试主节点故障转移：停止主节点，观察自动选举过程，测量故障转移时间。",
            "配置多主模式：设置 group_replication_single_primary_mode=OFF，测试并发写入。",
            "模拟写冲突：在多主模式下同时更新同一行，观察冲突检测和回滚行为。",
            "监控复制延迟：使用 SHOW REPLICA STATUS 或 CockroachDB 的 metrics 监控复制滞后。"
        ],
        selfCheck: [
            "单主复制和多主复制各自的优缺点是什么？",
            "MySQL Group Replication 如何检测和处理写冲突？",
            "Raft 共识协议如何保证强一致性？",
            "无主复制架构如何实现一致性？",
            "跨数据中心复制的主要挑战是什么？"
        ],
        extensions: [
            "研究 PostgreSQL 的 logical replication 和 physical replication 对比。",
            "学习 Galera Cluster 的同步复制机制。",
            "了解 Amazon Aurora 的分布式存储复制架构。",
            "研究 Paxos 与 Raft 共识协议的差异。"
        ],
        sourceUrls: [
            "https://dev.mysql.com/doc/refman/8.0/en/group-replication.html",
            "https://www.cockroachlabs.com/docs/stable/architecture/replication-layer.html"
        ]
    },
    "w11-4": {
        lessonId: "w11-4",
        background: [
            "【再平衡定义】再平衡是在分片间重新分配数据的过程：'Rebalancing redistributes data across shards to maintain even load distribution'。触发条件包括：添加/移除节点、热点出现、数据倾斜。",
            "【Vitess resharding】Vitess 支持在线分片调整：'Vitess supports resharding, in which the number of shards is changed on a live cluster'。可以将一个分片拆分为多个，或将多个分片合并。",
            "【在线迁移挑战】数据迁移期间系统需要保持可用：'The system must continue serving reads and writes during migration'。需要处理迁移期间的数据一致性和路由切换。",
            "【分片拆分流程】Vitess 分片拆分步骤：1) 创建目标分片 2) 复制数据 3) 保持同步 4) 验证数据 5) 切换流量 6) 清理旧分片。'The resharding workflow is designed to be minimally disruptive'。",
            "【虚拟分片的价值】使用虚拟分片简化再平衡：'Virtual partitions decouple logical sharding from physical storage'。移动虚拟分片只需更新映射，无需移动数据。"
        ],
        keyDifficulties: [
            "【数据一致性保证】迁移期间需要双写或 binlog 追踪：'During migration, changes to source shards must be captured and applied to target shards'。确保不丢失迁移期间的写入。",
            "【路由切换原子性】流量切换需要原子操作：'Traffic cutover must be atomic to avoid split-brain scenarios'。Vitess 使用 workflow 状态机管理切换过程。",
            "【回滚策略】需要能够回滚失败的迁移：'If issues are discovered, the migration can be rolled back before the cutover is finalized'。保留旧分片直到验证完成。",
            "【迁移期间的性能影响】数据复制消耗 IO 和网络资源：'Background data copying can impact cluster performance'。需要限流和调度控制，避免影响在线业务。"
        ],
        handsOnPath: [
            "规划分片拆分：确定源分片和目标分片，计算数据量和预计时间。",
            "执行 Vitess Reshard：使用 vtctlclient Reshard 命令启动分片拆分工作流。",
            "监控迁移进度：使用 vtctlclient Workflow show 查看复制状态和延迟。",
            "验证数据一致性：使用 VDiff 比较源和目标分片的数据。",
            "完成流量切换：执行 SwitchTraffic 切换读写流量到新分片。"
        ],
        selfCheck: [
            "什么情况下需要触发再平衡？",
            "在线迁移需要解决哪些技术挑战？",
            "Vitess 的分片拆分流程有哪些步骤？",
            "如何保证迁移期间的数据一致性？",
            "虚拟分片如何简化再平衡操作？"
        ],
        extensions: [
            "研究 Kafka 的分区再平衡机制。",
            "学习 Elasticsearch 的 shard rebalancing。",
            "了解 Redis Cluster 的 slot migration。",
            "研究 TiDB 的 Region 自动调度。"
        ],
        sourceUrls: [
            "https://vitess.io/docs/user-guides/migration/move-tables/",
            "https://vitess.io/docs/reference/vreplication/reshard/"
        ]
    }
}

export const week11Quizzes: Record<string, QuizQuestion[]> = {
    "w11-1": [
        {
            id: "w11-1-q1",
            question: "Microsoft 定义的三种分片策略中，哪种使用分片映射来路由请求？",
            options: [
                "Range Strategy",
                "Hash Strategy",
                "Lookup Strategy",
                "Composite Strategy"
            ],
            answer: 2,
            rationale: "Lookup Strategy 使用 'shard map that routes data requests to the shard that contains that data'。"
        },
        {
            id: "w11-1-q2",
            question: "Hash 分片策略相比 Range 策略的主要优势是什么？",
            options: [
                "支持范围查询",
                "减少热点，数据分布更均匀",
                "不需要哈希计算",
                "维护更简单"
            ],
            answer: 1,
            rationale: "Hash 策略 'reduces the chance of hot spots because it generates a more even distribution of data across shards'。"
        },
        {
            id: "w11-1-q3",
            question: "Range 分片策略的主要风险是什么？",
            options: [
                "无法支持点查询",
                "需要维护分片映射",
                "顺序键可能导致写入热点",
                "哈希计算开销大"
            ],
            answer: 2,
            rationale: "Range 策略风险：'If the shard key is based on date-time, then all activity for a day will be directed to a single shard'。"
        },
        {
            id: "w11-1-q4",
            question: "Lookup 策略使用虚拟分片的好处是什么？",
            options: [
                "提高查询性能",
                "简化再平衡操作",
                "减少存储空间",
                "增强安全性"
            ],
            answer: 1,
            rationale: "'Remapping virtual partitions to physical partitions is easier if using virtual partitions'——简化再平衡操作。"
        },
        {
            id: "w11-1-q5",
            question: "分片与分区（Partitioning）的区别是什么？",
            options: [
                "分片更快",
                "分区只能在单个数据库内部",
                "分片不需要网络通信",
                "分区支持更多数据"
            ],
            answer: 1,
            rationale: "分片是跨多个数据库实例的水平分区；分区可以在单个数据库内部。分片涉及网络通信。"
        },
        {
            id: "w11-1-q6",
            question: "跨分片查询的主要挑战是什么？",
            options: [
                "网络延迟",
                "难以维护一致的数据视图和合并结果",
                "存储成本高",
                "配置复杂"
            ],
            answer: 1,
            rationale: "'An application might need to merge results from multiple shards, which can make it difficult to maintain consistent data views'。"
        },
        {
            id: "w11-1-q7",
            question: "Hash 分片策略为什么不支持范围查询？",
            options: [
                "哈希计算太慢",
                "哈希值破坏了数据的自然顺序",
                "范围查询需要索引",
                "Hash 不支持数字类型"
            ],
            answer: 1,
            rationale: "哈希函数将相邻的键值映射到不同的分片，破坏了数据的自然顺序，无法高效支持范围查询。"
        },
        {
            id: "w11-1-q8",
            question: "选择分片策略时，Lookup Strategy 的主要优势是什么？",
            options: [
                "性能最高",
                "对分片配置和使用有更多控制",
                "不需要维护映射",
                "天然支持范围查询"
            ],
            answer: 1,
            rationale: "Lookup 策略 'provides more control over how shards are configured and used'。"
        },
        {
            id: "w11-1-q9",
            question: "以下哪种场景最适合使用 Range 分片策略？",
            options: [
                "用户 ID 的点查询",
                "时间范围的日志查询",
                "随机访问的键值存储",
                "高并发写入场景"
            ],
            answer: 1,
            rationale: "Range 策略 'Groups related items together in the same shard'，适合范围查询场景。"
        },
        {
            id: "w11-1-q10",
            question: "Vitess 使用什么表示法定义分片范围？",
            options: [
                "十进制",
                "二进制",
                "十六进制",
                "八进制"
            ],
            answer: 2,
            rationale: "Vitess 'The notation is hexadecimal'，如 '-80' 表示 keyspace ID < 0x80。"
        },
        {
            id: "w11-1-q11",
            question: "分片设计中，'扇出查询'(fan-out query) 指的是什么？",
            options: [
                "只查询一个分片",
                "需要查询所有分片然后合并结果",
                "缓存查询结果",
                "并行写入多个分片"
            ],
            answer: 1,
            rationale: "扇出查询需要向所有分片发送请求，等待所有响应后合并结果，性能开销大。"
        },
        {
            id: "w11-1-q12",
            question: "Microsoft 文档建议在哪种情况下使用 Hash 策略？",
            options: [
                "需要范围查询",
                "需要均匀分布且不需要范围查询",
                "数据量较小",
                "只有一个分片"
            ],
            answer: 1,
            rationale: "Hash 策略适合需要均匀分布的场景，缺点是不支持范围查询。"
        }
    ],
    "w11-2": [
        {
            id: "w11-2-q1",
            question: "选择分片键时最重要的考虑因素是什么？",
            options: [
                "字段名称长度",
                "高基数、写分布均匀、查询亲和性",
                "是否为主键",
                "数据类型"
            ],
            answer: 1,
            rationale: "分片键需要高基数、保证写入均匀分布、支持常见查询模式。"
        },
        {
            id: "w11-2-q2",
            question: "为什么自增 ID 不适合作为分片键？",
            options: [
                "数值太大",
                "会导致所有新写入集中在一个分片",
                "不支持索引",
                "占用存储空间"
            ],
            answer: 1,
            rationale: "'Monotonically increasing values create insertion hotspots'——单调递增值会导致写入热点。"
        },
        {
            id: "w11-2-q3",
            question: "Vitess 的 vindex 的作用是什么？",
            options: [
                "创建索引",
                "将列值映射到 keyspace ID",
                "压缩数据",
                "加密分片键"
            ],
            answer: 1,
            rationale: "'A vindex provides a way to map a column value to a keyspace ID'。"
        },
        {
            id: "w11-2-q4",
            question: "什么是 scatter-gather 查询？",
            options: [
                "只查询主分片",
                "不包含分片键的查询需要访问所有分片",
                "批量写入查询",
                "缓存查询"
            ],
            answer: 1,
            rationale: "不包含分片键的查询需要扇出到所有分片（scatter），然后聚合结果（gather）。"
        },
        {
            id: "w11-2-q5",
            question: "低基数分片键的问题是什么？",
            options: [
                "查询太慢",
                "导致数据分布不均衡",
                "占用内存大",
                "不支持事务"
            ],
            answer: 1,
            rationale: "'A shard key with low cardinality can result in unbalanced data distribution'。"
        },
        {
            id: "w11-2-q6",
            question: "Vitess 分片范围 '-80' 表示什么？",
            options: [
                "keyspace ID 大于 0x80",
                "keyspace ID 小于 0x80",
                "keyspace ID 等于 80",
                "80 个分片"
            ],
            answer: 1,
            rationale: "Vitess 使用十六进制，'-80' 表示 keyspace ID < 0x80，范围是左闭右开。"
        },
        {
            id: "w11-2-q7",
            question: "为什么大多数系统不允许更改已有文档的分片键值？",
            options: [
                "技术限制",
                "更改分片键需要移动数据到不同分片",
                "安全原因",
                "性能考虑"
            ],
            answer: 1,
            rationale: "'Once a document is inserted, you cannot change the shard key value'——更改分片键意味着数据需要迁移。"
        },
        {
            id: "w11-2-q8",
            question: "如何避免时间戳分片键导致的热点？",
            options: [
                "使用更精确的时间戳",
                "添加哈希前缀或随机盐值",
                "使用更大的分片",
                "增加副本数"
            ],
            answer: 1,
            rationale: "避免热点的策略包括：哈希前缀、随机盐值、复合键打散等。"
        },
        {
            id: "w11-2-q9",
            question: "复合分片键的优势是什么？",
            options: [
                "简化查询",
                "可以同时满足高基数和查询亲和性",
                "减少存储空间",
                "提高安全性"
            ],
            answer: 1,
            rationale: "复合分片键 'combines multiple fields to address different query patterns'。"
        },
        {
            id: "w11-2-q10",
            question: "Vitess 支持哪种类型的 vindex？",
            options: [
                "只支持 hash",
                "hash、binary、lookup 等多种类型",
                "只支持 range",
                "只支持 lookup"
            ],
            answer: 1,
            rationale: "Vitess 支持多种 vindex 类型：hash（xxhash64）、binary、lookup 等。"
        },
        {
            id: "w11-2-q11",
            question: "查询亲和性（query affinity）指的是什么？",
            options: [
                "查询结果的准确性",
                "查询可以直接路由到目标分片",
                "查询的缓存效率",
                "查询的安全级别"
            ],
            answer: 1,
            rationale: "包含分片键的查询可以直接路由到目标分片，避免扇出查询。"
        },
        {
            id: "w11-2-q12",
            question: "使用布尔值作为分片键的问题是什么？",
            options: [
                "不支持布尔类型",
                "只能分到两个分片，基数太低",
                "布尔值太短",
                "无法索引"
            ],
            answer: 1,
            rationale: "布尔值只有 true/false 两个值，基数极低，无法有效分片。"
        }
    ],
    "w11-3": [
        {
            id: "w11-3-q1",
            question: "MySQL Group Replication 单主模式的特点是什么？",
            options: [
                "所有节点都可以写入",
                "只有主节点接受更新，其他节点处理读请求",
                "不支持读操作",
                "没有主节点"
            ],
            answer: 1,
            rationale: "'Only one server (the primary) accepts updates. All other group members are secondaries that process read workloads'。"
        },
        {
            id: "w11-3-q2",
            question: "CockroachDB 使用什么协议实现复制？",
            options: [
                "Paxos",
                "2PC",
                "Raft",
                "MVCC"
            ],
            answer: 2,
            rationale: "'Each range is replicated using the Raft consensus protocol'。"
        },
        {
            id: "w11-3-q3",
            question: "多主复制模式的主要挑战是什么？",
            options: [
                "读取性能差",
                "需要处理写冲突",
                "不支持事务",
                "配置复杂"
            ],
            answer: 1,
            rationale: "多主模式 'All servers can accept updates'，需要处理并发写入导致的冲突。"
        },
        {
            id: "w11-3-q4",
            question: "MySQL Group Replication 如何检测写冲突？",
            options: [
                "锁机制",
                "基于认证的冲突检测（certification-based）",
                "乐观锁",
                "版本号"
            ],
            answer: 1,
            rationale: "MySQL Group Replication 使用 'certification-based conflict detection'。"
        },
        {
            id: "w11-3-q5",
            question: "Raft 协议需要多少节点确认才能提交写入？",
            options: [
                "所有节点",
                "多数节点（majority）",
                "一个节点",
                "主节点"
            ],
            answer: 1,
            rationale: "'A write is only committed when a majority of replicas acknowledge it'。"
        },
        {
            id: "w11-3-q6",
            question: "无主复制架构的代表是哪些系统？",
            options: [
                "MySQL 和 PostgreSQL",
                "Cassandra 和 DynamoDB",
                "MongoDB 和 Redis",
                "Oracle 和 SQL Server"
            ],
            answer: 1,
            rationale: "Cassandra 和 DynamoDB 使用无主复制架构。"
        },
        {
            id: "w11-3-q7",
            question: "单主复制的主要瓶颈是什么？",
            options: [
                "读取性能",
                "主节点成为写入瓶颈",
                "存储空间",
                "网络带宽"
            ],
            answer: 1,
            rationale: "'Single-primary mode provides a familiar failover model but limits write throughput'。"
        },
        {
            id: "w11-3-q8",
            question: "MySQL Group Replication 的成员服务提供什么功能？",
            options: [
                "数据压缩",
                "保持组视图一致并处理节点加入/离开",
                "查询优化",
                "日志管理"
            ],
            answer: 1,
            rationale: "'built-in group membership service that keeps the view of the group consistent and available'。"
        },
        {
            id: "w11-3-q9",
            question: "当多主模式下发生写冲突时，哪个事务会获胜？",
            options: [
                "最后提交的",
                "第一个提交的",
                "随机选择",
                "主节点决定"
            ],
            answer: 1,
            rationale: "在 certification-based 冲突检测中，第一个提交的事务获胜，后续冲突事务回滚。"
        },
        {
            id: "w11-3-q10",
            question: "跨数据中心复制的主要挑战是什么？",
            options: [
                "存储成本",
                "网络延迟",
                "配置复杂度",
                "安全性"
            ],
            answer: 1,
            rationale: "跨数据中心复制面临网络延迟挑战，需要配置 replica placement 优化延迟。"
        },
        {
            id: "w11-3-q11",
            question: "无主复制如何保证一致性？",
            options: [
                "锁机制",
                "quorum 读写",
                "两阶段提交",
                "主节点仲裁"
            ],
            answer: 1,
            rationale: "'All replicas can accept writes, with conflicts resolved using timestamps or vector clocks'，通过 quorum 读写保证一致性。"
        },
        {
            id: "w11-3-q12",
            question: "Raft 协议增加写延迟的原因是什么？",
            options: [
                "需要加密数据",
                "需要等待多数节点确认",
                "需要压缩日志",
                "需要验证权限"
            ],
            answer: 1,
            rationale: "Raft 需要 majority 节点确认才能提交，这增加了写延迟但保证了强一致性。"
        }
    ],
    "w11-4": [
        {
            id: "w11-4-q1",
            question: "什么情况下需要触发再平衡？",
            options: [
                "定期执行",
                "添加/移除节点、热点出现、数据倾斜",
                "用户请求",
                "备份完成后"
            ],
            answer: 1,
            rationale: "再平衡触发条件包括：添加/移除节点、热点出现、数据倾斜。"
        },
        {
            id: "w11-4-q2",
            question: "Vitess 的 resharding 功能支持什么操作？",
            options: [
                "只支持分片拆分",
                "在线调整分片数量（拆分和合并）",
                "只支持分片合并",
                "只支持离线调整"
            ],
            answer: 1,
            rationale: "'Vitess supports resharding, in which the number of shards is changed on a live cluster'。"
        },
        {
            id: "w11-4-q3",
            question: "在线迁移的主要挑战是什么？",
            options: [
                "存储空间不足",
                "迁移期间保持系统可用和数据一致",
                "网络带宽",
                "CPU 性能"
            ],
            answer: 1,
            rationale: "'The system must continue serving reads and writes during migration'，同时保证数据一致性。"
        },
        {
            id: "w11-4-q4",
            question: "Vitess 分片拆分的正确流程是什么？",
            options: [
                "直接切换流量",
                "创建目标分片 → 复制数据 → 保持同步 → 验证 → 切换流量 → 清理",
                "停止服务 → 迁移数据 → 启动服务",
                "备份 → 恢复 → 切换"
            ],
            answer: 1,
            rationale: "Vitess 分片拆分步骤：创建目标分片、复制数据、保持同步、验证数据、切换流量、清理旧分片。"
        },
        {
            id: "w11-4-q5",
            question: "虚拟分片如何简化再平衡？",
            options: [
                "减少数据量",
                "移动虚拟分片只需更新映射，无需移动数据",
                "加速查询",
                "减少网络流量"
            ],
            answer: 1,
            rationale: "'Virtual partitions decouple logical sharding from physical storage'——移动虚拟分片只需更新映射。"
        },
        {
            id: "w11-4-q6",
            question: "迁移期间如何保证不丢失写入？",
            options: [
                "暂停写入",
                "双写或 binlog 追踪",
                "只允许读取",
                "使用缓存"
            ],
            answer: 1,
            rationale: "'During migration, changes to source shards must be captured and applied to target shards'。"
        },
        {
            id: "w11-4-q7",
            question: "流量切换（cutover）需要满足什么条件？",
            options: [
                "用户确认",
                "原子操作，避免脑裂",
                "低峰期执行",
                "备份完成"
            ],
            answer: 1,
            rationale: "'Traffic cutover must be atomic to avoid split-brain scenarios'。"
        },
        {
            id: "w11-4-q8",
            question: "Vitess 使用什么验证迁移数据的一致性？",
            options: [
                "手动检查",
                "VDiff",
                "MD5 校验",
                "日志对比"
            ],
            answer: 1,
            rationale: "使用 VDiff 比较源和目标分片的数据一致性。"
        },
        {
            id: "w11-4-q9",
            question: "为什么需要保留旧分片直到验证完成？",
            options: [
                "节省存储",
                "支持回滚失败的迁移",
                "提高性能",
                "法规要求"
            ],
            answer: 1,
            rationale: "'If issues are discovered, the migration can be rolled back before the cutover is finalized'。"
        },
        {
            id: "w11-4-q10",
            question: "数据复制对集群的影响是什么？",
            options: [
                "没有影响",
                "消耗 IO 和网络资源，可能影响在线业务",
                "只影响读取",
                "只影响写入"
            ],
            answer: 1,
            rationale: "'Background data copying can impact cluster performance'——需要限流控制。"
        },
        {
            id: "w11-4-q11",
            question: "Vitess 使用什么管理切换过程？",
            options: [
                "脚本",
                "workflow 状态机",
                "定时任务",
                "手动操作"
            ],
            answer: 1,
            rationale: "Vitess 使用 workflow 状态机管理切换过程，确保操作的原子性和可追踪性。"
        },
        {
            id: "w11-4-q12",
            question: "执行 Vitess SwitchTraffic 命令的作用是什么？",
            options: [
                "开始数据复制",
                "切换读写流量到新分片",
                "验证数据",
                "清理旧分片"
            ],
            answer: 1,
            rationale: "SwitchTraffic 切换读写流量到新分片，是迁移流程的关键步骤。"
        }
    ]
}
