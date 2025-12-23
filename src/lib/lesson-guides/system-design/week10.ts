import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "w10-1": {
        lessonId: "w10-1",
        background: [
            "【Redis 五大核心数据类型】Redis 提供五种基础数据类型：String（字符串，支持数值操作）、List（双向链表）、Set（无序集合）、Hash（哈希表）、Sorted Set（有序集合，简称 ZSet）。每种类型都有专门的命令集和适用场景。",
            "【String 类型特性】String 是最基础的类型，可存储文本、序列化对象或二进制数据。关键操作复杂度：GET/SET 为 O(1)；INCR/DECR 支持原子递增/递减。常用于计数器、分布式锁、缓存对象。",
            "【List 类型特性】List 是双端链表结构，LPUSH/RPUSH 和 LPOP/RPOP 均为 O(1)。支持阻塞操作 BLPOP/BRPOP，常用于消息队列和最新消息列表。LRANGE 获取范围元素复杂度为 O(N)。",
            "【Set 与 Sorted Set】Set 存储唯一元素，SADD/SISMEMBER 为 O(1)，支持交集、并集、差集运算。Sorted Set 在 Set 基础上增加分数排序，ZADD 为 O(log N)，适合排行榜、优先队列。",
            "【Hash 类型特性】Hash 适合存储对象字段，HGET/HSET 为 O(1)。相比将对象 JSON 序列化存为 String，Hash 可以只读写单个字段，节省带宽和解析开销。"
        ],
        keyDifficulties: [
            "【大 Key 问题】单个 Key 存储过多数据（如百万级 List 元素）会导致：阻塞其他命令、删除时造成卡顿、主从同步延迟。解决方案：拆分为多个小 Key、使用 SCAN 渐进遍历、UNLINK 异步删除。",
            "【持久化选择】RDB 创建时间点快照，恢复快但可能丢失最后一次快照后的数据；AOF 记录每个写命令，数据更安全但文件更大。生产环境推荐混合模式：AOF 保证安全性 + RDB 加速重启恢复。",
            "【内存淘汰策略】当达到 maxmemory 限制时，Redis 提供多种淘汰策略：volatile-lru（只淘汰设置过期时间的键）、allkeys-lru（淘汰所有键中最少使用的）、volatile-ttl（优先淘汰 TTL 短的）。缓存场景常用 allkeys-lru。",
            "【Sorted Set 的复合分数】ZADD 只支持单一 double 分数。需要多字段排序时，可将多个值编码为一个分数（如时间戳 + 序号），或使用 Lua 脚本实现自定义排序逻辑。"
        ],
        handsOnPath: [
            "使用 String 实现分布式计数器：SET counter 0; INCR counter; GET counter; 观察原子递增行为。",
            "使用 List 实现简单队列：RPUSH queue task1 task2; LPOP queue; BLPOP queue 5（阻塞 5 秒等待新元素）。",
            "使用 Sorted Set 实现排行榜：ZADD leaderboard 100 user1 200 user2; ZREVRANGE leaderboard 0 9 WITHSCORES。",
            "使用 Hash 存储用户信息：HSET user:1 name 'Alice' age 30; HGET user:1 name; HINCRBY user:1 age 1。",
            "配置持久化策略：在 redis.conf 中设置 appendonly yes 启用 AOF，设置 appendfsync everysec 平衡性能和安全。"
        ],
        selfCheck: [
            "Redis 五种基础数据类型各适合什么场景？",
            "LPUSH 和 ZADD 的时间复杂度分别是多少？",
            "RDB 和 AOF 持久化的优缺点是什么？",
            "如何解决 Redis 大 Key 问题？",
            "maxmemory-policy 的常用策略有哪些？"
        ],
        extensions: [
            "研究 Redis Streams 数据类型及其在消息队列中的应用。",
            "学习 Redis 的 HyperLogLog 和 Bloom Filter 概率数据结构。",
            "了解 Redis 6.0 的多线程 IO 如何提升性能。",
            "研究 Redis 的 Pub/Sub 与 Streams 的对比选择。"
        ],
        sourceUrls: [
            "https://redis.io/docs/latest/develop/data-types/",
            "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",
            "https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/"
        ]
    },
    "w10-2": {
        lessonId: "w10-2",
        background: [
            "【文档模型核心】MongoDB 存储 BSON 文档（Binary JSON），支持嵌套结构和数组。文档模型的核心设计原则是：'data that is accessed together should be stored together'——一起访问的数据应该存储在一起。",
            "【嵌入式文档模式】将相关数据嵌入同一文档（Embedded Documents），如将订单项嵌入订单文档。优势：单次读取获取所有数据、原子更新、无需 JOIN。适用于一对一和一对少量的关系。",
            "【引用模式】使用 ObjectId 引用其他文档（References），类似关系型外键。需要额外查询获取关联数据，但避免了文档膨胀。适用于一对多、多对多关系，以及频繁更新的共享数据。",
            "【混合模式】实践中常结合两种模式：嵌入常用字段、引用完整数据。例如：订单中嵌入商品名称和价格快照，但引用完整商品信息。这种反范式化优化读取性能。",
            "【索引策略】MongoDB 支持多种索引类型：单字段索引、复合索引、多键索引（数组字段）、文本索引、地理空间索引。复合索引遵循最左前缀原则，查询优化器自动选择最佳索引。"
        ],
        keyDifficulties: [
            "【16MB 文档限制】MongoDB 单文档最大 16MB。嵌入式设计需要评估数据增长，如果嵌入数组会无限增长（如评论列表），应使用引用模式或分桶模式。",
            "【嵌入 vs 引用决策】选择标准：数据是否总是一起读取？更新频率如何？是否存在多对多关系？频繁单独更新或被多处引用的数据应使用引用模式。",
            "【分片键选择】分片键决定数据分布，一旦选定无法更改。好的分片键应该：有高基数（cardinality）、写入分布均匀、支持常见查询模式。避免单调递增键（如 ObjectId）导致热点。",
            "【事务与性能权衡】MongoDB 4.0+ 支持多文档事务，但事务会增加延迟和锁竞争。最佳实践是通过文档模型设计减少事务需求——将原子性边界对齐到单个文档。"
        ],
        handsOnPath: [
            "设计嵌入式文档：创建包含嵌套地址信息的用户文档 { name: 'Alice', address: { city: 'Beijing', zip: '100000' } }。",
            "设计引用关系：创建订单引用用户 { userId: ObjectId('...'), items: [...] }，使用 $lookup 实现 JOIN 查询。",
            "创建复合索引：db.orders.createIndex({ userId: 1, createdAt: -1 }); 使用 explain() 验证索引使用。",
            "测试分片：在测试环境配置 sh.enableSharding('mydb'); sh.shardCollection('mydb.orders', { userId: 'hashed' })。",
            "实现分桶模式：将时序数据按小时分桶 { hour: ISODate('...'), readings: [...] }，限制数组大小。"
        ],
        selfCheck: [
            "嵌入式文档和引用模式各适合什么场景？",
            "MongoDB 单文档大小限制是多少？如何应对？",
            "如何选择合适的分片键？",
            "MongoDB 复合索引如何支持查询？",
            "为什么要将原子性边界对齐到文档级别？"
        ],
        extensions: [
            "研究 MongoDB 的 Change Streams 实现事件驱动架构。",
            "学习 Bucket Pattern 处理时序数据的最佳实践。",
            "了解 MongoDB Atlas 的全球分布和 Zone Sharding。",
            "研究 Schema Versioning Pattern 处理文档结构演进。"
        ],
        sourceUrls: [
            "https://www.mongodb.com/docs/manual/data-modeling/",
            "https://www.mongodb.com/docs/manual/indexes/",
            "https://www.mongodb.com/docs/manual/sharding/"
        ]
    },
    "w10-3": {
        lessonId: "w10-3",
        background: [
            "【Cassandra 核心定位】Apache Cassandra 是分布式宽列存储数据库，设计目标是高可用和线性扩展。没有单点故障，所有节点对等。适合高写入吞吐、地理分布、时序数据等场景。",
            "【一致性级别】Cassandra 提供可调一致性：ONE（一个副本确认）、QUORUM（多数副本确认）、ALL（全部副本确认）、LOCAL_QUORUM（本地数据中心多数确认）。强一致性需满足：R + W > N。",
            "【数据模型设计原则】Cassandra 是查询驱动设计：'model the data around the questions you want to ask, not around the entities'。每个查询模式可能需要独立的表，接受数据冗余换取读取性能。",
            "【分区键与聚簇键】Primary Key = Partition Key + Clustering Columns。分区键决定数据在哪个节点；聚簇键决定分区内的排序。设计要点：分区键应高基数且分布均匀，避免热点分区。",
            "【写入路径】Cassandra 写入流程：MemTable（内存）→ Commit Log（持久化）→ SSTable（磁盘刷写）。写入只追加不原地更新，读取时合并多个 SSTable 版本，通过 Compaction 整理数据。"
        ],
        keyDifficulties: [
            "【反范式化思维转变】习惯 RDBMS 的开发者常犯错误：试图用最少的表建模。Cassandra 需要为每个查询模式创建表，接受数据冗余。JOIN 不受支持，必须在写入时反范式化。",
            "【分区热点问题】如果分区键选择不当（如按日期分区时序数据），会导致某些分区过大或写入集中。解决方案：使用复合分区键添加桶（如 sensor_id + date_bucket）。",
            "【一致性与可用性权衡】QUORUM 保证强一致但增加延迟和对网络分区的敏感性；ONE 速度快但可能读到旧数据。跨数据中心场景推荐 LOCAL_QUORUM 平衡一致性和延迟。",
            "【Tombstone 问题】删除操作创建 Tombstone 标记而非真正删除，需要等待 Compaction 清理。大量删除会导致读取性能下降（需要跳过 Tombstone）。避免在高删除场景使用 Cassandra。"
        ],
        handsOnPath: [
            "设计查询驱动的表：根据'按用户查询最近订单'需求，创建 CREATE TABLE orders_by_user (user_id UUID, order_time TIMESTAMP, ..., PRIMARY KEY (user_id, order_time)) WITH CLUSTERING ORDER BY (order_time DESC);",
            "测试一致性级别：写入时使用 CONSISTENCY ALL，读取时使用 CONSISTENCY ONE，观察行为差异。",
            "使用 nodetool 监控：nodetool status 查看集群状态，nodetool tablestats 查看表统计，nodetool compactionstats 查看 Compaction 进度。",
            "模拟分区热点：创建按日期分区的表，大量写入今天数据，观察节点负载不均。重新设计使用复合分区键。",
            "配置多数据中心：在 cassandra.yaml 配置 NetworkTopologyStrategy，设置每个数据中心的副本数。"
        ],
        selfCheck: [
            "Cassandra 的一致性级别 ONE、QUORUM、ALL 分别意味着什么？",
            "什么是查询驱动的数据建模？为什么 Cassandra 需要这种方式？",
            "分区键和聚簇键的作用分别是什么？",
            "什么是 Tombstone？它会带来什么问题？",
            "R + W > N 公式的含义是什么？"
        ],
        extensions: [
            "研究 Cassandra 的 Lightweight Transactions（LWT）及其性能影响。",
            "学习 DataStax Astra 托管 Cassandra 服务的特点。",
            "了解 ScyllaDB 作为 Cassandra 兼容替代品的优势。",
            "研究 Cassandra 的 Materialized Views 和 Secondary Indexes 的适用场景。"
        ],
        sourceUrls: [
            "https://cassandra.apache.org/doc/latest/cassandra/architecture/overview.html",
            "https://cassandra.apache.org/doc/latest/cassandra/data_modeling/data_modeling_rdbms.html",
            "https://cassandra.apache.org/doc/latest/cassandra/architecture/dynamo.html"
        ]
    },
    "w10-4": {
        lessonId: "w10-4",
        background: [
            "【图数据库核心概念】Neo4j 是原生图数据库，使用属性图模型：Nodes（节点）代表实体，Relationships（关系）连接节点并具有方向和类型，Properties（属性）是节点和关系上的键值对。",
            "【Cypher 查询语言】Neo4j 使用 Cypher 声明式查询语言。基本模式：MATCH (p:Person)-[:KNOWS]->(f:Person) WHERE p.name = 'Alice' RETURN f.name。节点用圆括号，关系用方括号和箭头表示方向。",
            "【图数据库优势场景】图数据库擅长处理高度连接的数据和多跳遍历查询：社交网络（好友推荐）、知识图谱、欺诈检测、推荐引擎、网络拓扑分析。关系型数据库的多表 JOIN 在这些场景下性能急剧下降。",
            "【时序数据库核心概念】InfluxDB 是专为时序数据设计的数据库。数据模型：Measurement（度量，类似表）、Tags（标签，索引维度）、Fields（字段，实际数据值）、Timestamp（时间戳）。",
            "【时序数据库优化】时序数据库针对写入和时间范围查询优化：数据按时间分区、自动数据降采样（downsampling）、数据保留策略（retention policies）自动过期旧数据。InfluxDB 使用 TSM（Time-Structured Merge Tree）存储引擎。"
        ],
        keyDifficulties: [
            "【图遍历性能】图数据库的遍历复杂度与数据规模关系不大，主要取决于遍历的深度和每步的扇出。Neo4j 使用 index-free adjacency：每个节点直接指向其邻居，遍历不需要索引查找。",
            "【图建模陷阱】常见错误：将所有属性放在节点上（应考虑是否需要建模为独立节点）；创建超级节点（如'所有用户'节点连接百万边）；忽略关系方向的语义意义。",
            "【时序数据高基数问题】Tags 用于索引，高基数 Tag（如用户 ID）会导致索引膨胀。InfluxDB 建议 Tag 用于低基数的维度（如 region、host），高基数值放入 Fields。",
            "【时序查询模式】时序数据库优化的查询模式：时间范围查询、聚合（mean、max、min）、分组（GROUP BY tag, time）。点查询（按精确时间戳查单条）不是最优场景。"
        ],
        handsOnPath: [
            "在 Neo4j 中创建图数据：CREATE (alice:Person {name: 'Alice'})-[:KNOWS {since: 2020}]->(bob:Person {name: 'Bob'});",
            "查询社交关系：MATCH (p:Person)-[:KNOWS*1..3]-(friend) WHERE p.name = 'Alice' RETURN friend.name, length(shortestPath((p)-[*]-(friend)));",
            "写入 InfluxDB 时序数据：使用 Line Protocol: cpu,host=server01,region=us-west usage=80.5 1609459200000000000",
            "查询 InfluxDB 聚合数据：SELECT mean(usage) FROM cpu WHERE time > now() - 1h GROUP BY time(5m), host;",
            "配置 InfluxDB 保留策略：CREATE RETENTION POLICY 'one_week' ON 'mydb' DURATION 7d REPLICATION 1 DEFAULT;"
        ],
        selfCheck: [
            "图数据库的属性图模型包含哪些核心元素？",
            "Cypher 查询语言如何表示节点和关系？",
            "时序数据库的 Tags 和 Fields 有什么区别？",
            "什么是高基数问题？如何避免？",
            "图数据库相比关系型数据库在什么场景有优势？"
        ],
        extensions: [
            "研究 Neo4j 的图算法库：PageRank、社区检测、最短路径。",
            "学习 Amazon Neptune 托管图数据库服务。",
            "了解 TimescaleDB 如何在 PostgreSQL 上实现时序扩展。",
            "研究 InfluxDB 3.0 的列式存储和 SQL 支持。"
        ],
        sourceUrls: [
            "https://neo4j.com/docs/getting-started/",
            "https://docs.influxdata.com/influxdb/",
            "https://docs.timescale.com/"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "w10-1": [
        {
            id: "w10-1-q1",
            question: "Redis 中 Sorted Set (ZSet) 的 ZADD 操作时间复杂度是多少？",
            options: [
                "O(1)",
                "O(log N)",
                "O(N)",
                "O(N log N)"
            ],
            answer: 1,
            rationale: "Sorted Set 使用跳表实现有序存储，ZADD 的时间复杂度为 O(log N)，其中 N 是集合中的元素数量。"
        },
        {
            id: "w10-1-q2",
            question: "Redis 的哪种持久化方式记录每个写命令？",
            options: [
                "RDB",
                "AOF",
                "混合模式",
                "MemTable"
            ],
            answer: 1,
            rationale: "AOF (Append Only File) 记录每个写命令，恢复时重放命令重建数据。RDB 是时间点快照。"
        },
        {
            id: "w10-1-q3",
            question: "Redis List 的 LPUSH/RPUSH 操作时间复杂度是多少？",
            options: [
                "O(log N)",
                "O(N)",
                "O(1)",
                "O(N log N)"
            ],
            answer: 2,
            rationale: "List 是双端链表结构，在头部或尾部插入元素的时间复杂度为 O(1)。"
        },
        {
            id: "w10-1-q4",
            question: "Redis Cluster 使用多少个哈希槽进行数据分片？",
            options: [
                "1024",
                "4096",
                "16384",
                "65536"
            ],
            answer: 2,
            rationale: "Redis Cluster 使用 16384 个哈希槽，通过 CRC16(key) mod 16384 确定 key 属于哪个槽。"
        },
        {
            id: "w10-1-q5",
            question: "以下哪种 Redis 内存淘汰策略只淘汰设置了过期时间的键？",
            options: [
                "allkeys-lru",
                "allkeys-random",
                "volatile-lru",
                "noeviction"
            ],
            answer: 2,
            rationale: "volatile-lru 只在设置了过期时间的键中选择最少使用的进行淘汰；allkeys-lru 则在所有键中选择。"
        },
        {
            id: "w10-1-q6",
            question: "Redis 大 Key 问题的解决方案不包括？",
            options: [
                "拆分为多个小 Key",
                "使用 SCAN 渐进遍历",
                "使用 UNLINK 异步删除",
                "增加 maxmemory 配置"
            ],
            answer: 3,
            rationale: "增加内存不能解决大 Key 导致的阻塞和同步问题。应该拆分 Key、使用 SCAN 遍历、UNLINK 异步删除。"
        },
        {
            id: "w10-1-q7",
            question: "Redis Hash 类型相比将对象 JSON 序列化存为 String 的优势是什么？",
            options: [
                "存储空间更小",
                "可以只读写单个字段，节省带宽",
                "支持更多数据类型",
                "自动过期"
            ],
            answer: 1,
            rationale: "Hash 可以使用 HGET/HSET 单独读写字段，无需获取和解析整个对象，节省网络带宽和解析开销。"
        },
        {
            id: "w10-1-q8",
            question: "RDB 持久化的主要缺点是什么？",
            options: [
                "文件太大",
                "恢复速度慢",
                "可能丢失最后一次快照后的数据",
                "不支持压缩"
            ],
            answer: 2,
            rationale: "RDB 是时间点快照，如果 Redis 在两次快照之间崩溃，会丢失这段时间的所有写入数据。"
        },
        {
            id: "w10-1-q9",
            question: "Redis AOF 的 appendfsync 设置为什么值可以平衡性能和安全？",
            options: [
                "always",
                "everysec",
                "no",
                "auto"
            ],
            answer: 1,
            rationale: "appendfsync everysec 每秒同步一次，最多丢失 1 秒数据，是性能和安全的平衡点。always 最安全但性能差。"
        },
        {
            id: "w10-1-q10",
            question: "Redis Set 类型支持的操作不包括？",
            options: [
                "交集 (SINTER)",
                "并集 (SUNION)",
                "差集 (SDIFF)",
                "排序 (SORT BY SCORE)"
            ],
            answer: 3,
            rationale: "Set 是无序集合，不支持按分数排序。需要排序功能应使用 Sorted Set (ZSet)。"
        },
        {
            id: "w10-1-q11",
            question: "Redis 生产环境推荐的持久化策略是什么？",
            options: [
                "只使用 RDB",
                "只使用 AOF",
                "混合模式：AOF 保证安全性 + RDB 加速重启",
                "不使用持久化"
            ],
            answer: 2,
            rationale: "混合模式结合两者优点：AOF 保证数据安全（最多丢失 1 秒），RDB 在重启时提供快速恢复基础。"
        },
        {
            id: "w10-1-q12",
            question: "BLPOP 命令的作用是什么？",
            options: [
                "批量弹出所有元素",
                "阻塞等待 List 非空然后弹出",
                "从列表中间删除元素",
                "清空整个列表"
            ],
            answer: 1,
            rationale: "BLPOP 是阻塞式弹出命令，如果列表为空则阻塞等待，直到有元素可弹出或超时。常用于消息队列场景。"
        }
    ],
    "w10-2": [
        {
            id: "w10-2-q1",
            question: "MongoDB 文档模型的核心设计原则是什么？",
            options: [
                "数据应该尽可能范式化",
                "一起访问的数据应该存储在一起",
                "每个实体必须独立存储",
                "避免嵌套结构"
            ],
            answer: 1,
            rationale: "MongoDB 文档模型核心原则是 'data that is accessed together should be stored together'——减少查询次数，提高读取效率。"
        },
        {
            id: "w10-2-q2",
            question: "MongoDB 单文档的最大大小限制是多少？",
            options: [
                "4MB",
                "8MB",
                "16MB",
                "32MB"
            ],
            answer: 2,
            rationale: "MongoDB 单文档最大 16MB。嵌入式设计需要评估数据增长，避免超过此限制。"
        },
        {
            id: "w10-2-q3",
            question: "以下哪种场景更适合使用引用模式而非嵌入式模式？",
            options: [
                "用户与其地址信息（一对一）",
                "订单与订单项（一对少量）",
                "商品被多个订单引用（多对多）",
                "博客文章与作者名称"
            ],
            answer: 2,
            rationale: "多对多关系、频繁更新的共享数据应使用引用模式，避免数据冗余导致的更新困难。"
        },
        {
            id: "w10-2-q4",
            question: "MongoDB 使用什么操作实现类似 SQL JOIN 的功能？",
            options: [
                "$match",
                "$group",
                "$lookup",
                "$project"
            ],
            answer: 2,
            rationale: "$lookup 用于在聚合管道中执行左外连接，将其他集合的文档关联进来。"
        },
        {
            id: "w10-2-q5",
            question: "选择 MongoDB 分片键时应避免什么？",
            options: [
                "高基数的字段",
                "写入分布均匀的字段",
                "单调递增的字段（如 ObjectId）",
                "常见查询条件中的字段"
            ],
            answer: 2,
            rationale: "单调递增的分片键会导致所有新写入集中在一个分片上形成热点。应选择分布均匀的键。"
        },
        {
            id: "w10-2-q6",
            question: "MongoDB 复合索引遵循什么原则？",
            options: [
                "最右前缀原则",
                "最左前缀原则",
                "中间优先原则",
                "随机匹配原则"
            ],
            answer: 1,
            rationale: "MongoDB 复合索引遵循最左前缀原则，查询必须从索引最左侧字段开始才能有效使用索引。"
        },
        {
            id: "w10-2-q7",
            question: "为什么 MongoDB 建议将原子性边界对齐到文档级别？",
            options: [
                "文档级操作更快",
                "避免使用多文档事务带来的延迟和锁竞争",
                "MongoDB 不支持事务",
                "节省存储空间"
            ],
            answer: 1,
            rationale: "MongoDB 4.0+ 支持多文档事务但会增加延迟和锁竞争。通过文档模型设计实现单文档原子性是最佳实践。"
        },
        {
            id: "w10-2-q8",
            question: "嵌入式文档模式的主要优势是什么？",
            options: [
                "节省存储空间",
                "单次读取获取所有数据、原子更新、无需 JOIN",
                "支持更复杂的查询",
                "更容易维护数据一致性"
            ],
            answer: 1,
            rationale: "嵌入式模式将相关数据放在一个文档中，一次读取即可获取所有数据，且单文档更新天然原子。"
        },
        {
            id: "w10-2-q9",
            question: "什么是 MongoDB 的分桶模式（Bucket Pattern）？",
            options: [
                "将数据随机分配到不同集合",
                "将时序数据按时间段分组存储在数组中",
                "使用不同的存储引擎",
                "压缩存储数据"
            ],
            answer: 1,
            rationale: "分桶模式将时序数据按时间段（如每小时）分组到一个文档的数组中，减少文档数量并限制单文档大小。"
        },
        {
            id: "w10-2-q10",
            question: "使用 explain() 方法的目的是什么？",
            options: [
                "解释查询语法",
                "验证索引使用情况和查询执行计划",
                "解释文档结构",
                "生成查询文档"
            ],
            answer: 1,
            rationale: "explain() 返回查询执行计划，显示是否使用索引、扫描文档数等信息，用于查询性能优化。"
        },
        {
            id: "w10-2-q11",
            question: "MongoDB 多键索引用于什么场景？",
            options: [
                "多个字段的复合索引",
                "数组字段的索引",
                "多个集合的联合索引",
                "多主键索引"
            ],
            answer: 1,
            rationale: "多键索引（Multikey Index）用于索引数组字段，为数组中的每个元素创建索引条目。"
        },
        {
            id: "w10-2-q12",
            question: "如果嵌入的评论数组会无限增长，应该采用什么设计？",
            options: [
                "继续使用嵌入式设计",
                "使用引用模式或分桶模式",
                "增加文档大小限制",
                "使用压缩"
            ],
            answer: 1,
            rationale: "无限增长的数组会超过 16MB 文档限制。应使用引用模式（评论独立集合）或分桶模式（按时间段分组）。"
        }
    ],
    "w10-3": [
        {
            id: "w10-3-q1",
            question: "Cassandra 的 QUORUM 一致性级别意味着什么？",
            options: [
                "只需一个副本确认",
                "需要多数副本确认",
                "需要全部副本确认",
                "需要主节点确认"
            ],
            answer: 1,
            rationale: "QUORUM 需要 (replication_factor / 2) + 1 个副本确认，即多数副本。这是强一致性的常用选择。"
        },
        {
            id: "w10-3-q2",
            question: "Cassandra 数据建模的核心原则是什么？",
            options: [
                "基于实体关系建模",
                "查询驱动建模，每个查询模式一张表",
                "尽量减少表的数量",
                "先设计表再考虑查询"
            ],
            answer: 1,
            rationale: "Cassandra 是查询驱动设计：'model the data around the questions you want to ask, not around the entities'。"
        },
        {
            id: "w10-3-q3",
            question: "Cassandra 中分区键（Partition Key）的作用是什么？",
            options: [
                "决定分区内的排序",
                "决定数据在哪个节点",
                "决定数据的过期时间",
                "决定数据的压缩方式"
            ],
            answer: 1,
            rationale: "分区键通过哈希决定数据存储在哪个节点。聚簇键（Clustering Key）决定分区内的排序。"
        },
        {
            id: "w10-3-q4",
            question: "什么是 Cassandra 的 Tombstone？",
            options: [
                "数据备份",
                "删除操作创建的标记",
                "索引类型",
                "压缩算法"
            ],
            answer: 1,
            rationale: "删除操作创建 Tombstone 标记而非真正删除，需要等待 Compaction 清理。大量 Tombstone 会影响读取性能。"
        },
        {
            id: "w10-3-q5",
            question: "强一致性需要满足什么公式？",
            options: [
                "R + W = N",
                "R + W > N",
                "R + W < N",
                "R * W > N"
            ],
            answer: 1,
            rationale: "当 R（读副本数）+ W（写副本数）> N（总副本数）时，读写有重叠，保证强一致性。"
        },
        {
            id: "w10-3-q6",
            question: "跨数据中心场景推荐使用什么一致性级别？",
            options: [
                "ONE",
                "QUORUM",
                "ALL",
                "LOCAL_QUORUM"
            ],
            answer: 3,
            rationale: "LOCAL_QUORUM 只等待本地数据中心的多数副本确认，平衡了一致性和跨数据中心延迟。"
        },
        {
            id: "w10-3-q7",
            question: "Cassandra 的写入路径顺序是什么？",
            options: [
                "SSTable → MemTable → Commit Log",
                "MemTable → Commit Log → SSTable",
                "Commit Log → MemTable → SSTable",
                "MemTable → SSTable → Commit Log"
            ],
            answer: 1,
            rationale: "写入先到 MemTable（内存）和 Commit Log（持久化），当 MemTable 满时刷写到 SSTable（磁盘）。"
        },
        {
            id: "w10-3-q8",
            question: "如何避免 Cassandra 分区热点问题？",
            options: [
                "使用更多节点",
                "使用复合分区键添加桶",
                "增加副本数",
                "使用更快的磁盘"
            ],
            answer: 1,
            rationale: "使用复合分区键（如 sensor_id + date_bucket）将数据分散到多个分区，避免单一分区过大或写入集中。"
        },
        {
            id: "w10-3-q9",
            question: "Cassandra 不支持什么操作？",
            options: [
                "二级索引",
                "物化视图",
                "JOIN 操作",
                "批量写入"
            ],
            answer: 2,
            rationale: "Cassandra 不支持 JOIN，需要在写入时反范式化数据，为每个查询模式创建独立的表。"
        },
        {
            id: "w10-3-q10",
            question: "使用 nodetool tablestats 命令可以查看什么信息？",
            options: [
                "集群状态",
                "表统计信息",
                "Compaction 进度",
                "网络延迟"
            ],
            answer: 1,
            rationale: "nodetool tablestats 显示表的统计信息，如读写次数、延迟、SSTable 数量等。"
        },
        {
            id: "w10-3-q11",
            question: "Cassandra 中 ALL 一致性级别的缺点是什么？",
            options: [
                "可能读到旧数据",
                "任何一个节点不可用就会失败",
                "写入速度慢",
                "不支持跨数据中心"
            ],
            answer: 1,
            rationale: "ALL 需要所有副本确认，如果任何一个节点不可用，操作就会失败，降低了可用性。"
        },
        {
            id: "w10-3-q12",
            question: "为什么应该避免在高删除场景使用 Cassandra？",
            options: [
                "删除操作很慢",
                "删除会产生 Tombstone 影响读取性能",
                "删除需要所有节点在线",
                "删除不支持并发"
            ],
            answer: 1,
            rationale: "大量删除产生 Tombstone，需要等待 Compaction 清理。读取时需要跳过 Tombstone，导致性能下降。"
        }
    ],
    "w10-4": [
        {
            id: "w10-4-q1",
            question: "Neo4j 的属性图模型包含哪些核心元素？",
            options: [
                "表、行、列",
                "节点、关系、属性",
                "文档、集合、索引",
                "键、值、分区"
            ],
            answer: 1,
            rationale: "属性图模型包含：Nodes（节点）代表实体，Relationships（关系）连接节点，Properties（属性）是键值对。"
        },
        {
            id: "w10-4-q2",
            question: "Cypher 查询语言中如何表示有向关系？",
            options: [
                "使用大括号 {}",
                "使用方括号和箭头 -[:TYPE]->",
                "使用小括号 ()",
                "使用尖括号 <>"
            ],
            answer: 1,
            rationale: "Cypher 使用 -[:TYPE]-> 表示有向关系，如 (a)-[:KNOWS]->(b) 表示 a 认识 b。"
        },
        {
            id: "w10-4-q3",
            question: "InfluxDB 数据模型中 Tags 和 Fields 的主要区别是什么？",
            options: [
                "Tags 存储数值，Fields 存储字符串",
                "Tags 用于索引（低基数），Fields 存储实际数据",
                "Tags 不能修改，Fields 可以修改",
                "没有区别"
            ],
            answer: 1,
            rationale: "Tags 用于索引和分组查询（应为低基数），Fields 存储实际测量数据值（可以是高基数）。"
        },
        {
            id: "w10-4-q4",
            question: "什么是 InfluxDB 的高基数问题？",
            options: [
                "数据量太大",
                "Tag 值种类太多导致索引膨胀",
                "查询太复杂",
                "时间戳精度太高"
            ],
            answer: 1,
            rationale: "高基数 Tag（如用户 ID）会导致索引膨胀。建议将高基数值放入 Fields 而非 Tags。"
        },
        {
            id: "w10-4-q5",
            question: "图数据库相比关系型数据库在什么场景有明显优势？",
            options: [
                "简单的 CRUD 操作",
                "多跳遍历和高度连接的数据查询",
                "事务处理",
                "报表生成"
            ],
            answer: 1,
            rationale: "图数据库擅长处理高度连接的数据和多跳遍历，如社交网络、知识图谱。关系型多表 JOIN 性能会急剧下降。"
        },
        {
            id: "w10-4-q6",
            question: "Neo4j 的 index-free adjacency 是什么意思？",
            options: [
                "不使用任何索引",
                "每个节点直接指向其邻居，遍历不需要索引查找",
                "邻居关系自动索引",
                "禁用索引优化"
            ],
            answer: 1,
            rationale: "index-free adjacency 指节点存储直接指向邻居节点的指针，遍历时不需要通过索引查找，效率极高。"
        },
        {
            id: "w10-4-q7",
            question: "InfluxDB 的保留策略（Retention Policy）用于什么？",
            options: [
                "设置数据访问权限",
                "自动过期旧数据",
                "配置数据压缩",
                "设置复制因子"
            ],
            answer: 1,
            rationale: "保留策略定义数据保留时间，过期数据自动删除。例如 DURATION 7d 表示只保留 7 天数据。"
        },
        {
            id: "w10-4-q8",
            question: "以下哪个是图数据库建模的常见陷阱？",
            options: [
                "使用太多节点类型",
                "创建超级节点（如百万边的单一节点）",
                "使用复合属性",
                "为关系添加属性"
            ],
            answer: 1,
            rationale: "超级节点（如'所有用户'节点连接百万边）会导致遍历性能问题，应重新设计数据模型避免。"
        },
        {
            id: "w10-4-q9",
            question: "InfluxDB 使用什么存储引擎？",
            options: [
                "B-Tree",
                "LSM Tree",
                "TSM (Time-Structured Merge Tree)",
                "Hash Index"
            ],
            answer: 2,
            rationale: "InfluxDB 使用 TSM（Time-Structured Merge Tree）存储引擎，专门针对时序数据写入和压缩优化。"
        },
        {
            id: "w10-4-q10",
            question: "Cypher 查询 MATCH (p:Person)-[:KNOWS*1..3]-(f) 中 *1..3 表示什么？",
            options: [
                "返回 1 到 3 个结果",
                "遍历 1 到 3 跳的关系",
                "匹配 1 到 3 个节点",
                "限制查询 1 到 3 秒"
            ],
            answer: 1,
            rationale: "*1..3 表示可变长度路径，匹配 1 到 3 跳的 KNOWS 关系，用于查找多度人脉关系。"
        },
        {
            id: "w10-4-q11",
            question: "时序数据库最优化的查询模式是什么？",
            options: [
                "按精确时间戳查单条记录",
                "时间范围查询和聚合",
                "全表扫描",
                "随机访问"
            ],
            answer: 1,
            rationale: "时序数据库针对时间范围查询、聚合（mean、max、min）、分组（GROUP BY time）进行优化，不是点查询。"
        },
        {
            id: "w10-4-q12",
            question: "Neo4j 的图算法库不包括以下哪种算法？",
            options: [
                "PageRank",
                "最短路径",
                "社区检测",
                "B-Tree 平衡"
            ],
            answer: 3,
            rationale: "Neo4j 图算法库包含 PageRank、最短路径、社区检测等图分析算法，B-Tree 平衡不是图算法。"
        }
    ]
}
