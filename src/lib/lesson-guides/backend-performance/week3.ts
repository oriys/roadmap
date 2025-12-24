import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "bp-w3-1": {
        lessonId: "bp-w3-1",
        background: [
            "【Look-Aside Cache 模式】Facebook Memcache 论文：应用先查缓存，缓存未命中时查数据库，然后将结果写入缓存。写入时'after updating the database for a particular key, they don't update the cache. Instead, they delete the data'——删除比更新更安全，因为 delete 是幂等的。",
            "【Leasing 机制】Facebook 使用 64-bit token 解决缓存击穿（thundering herds）和陈旧写入（stale sets）问题。缓存未命中时发放 lease，只有持有 lease 的客户端才能写入。系统限制 token 发放频率（如每 10 秒/key 一次），其他客户端等待 lease 持有者填充。",
            "【懒加载策略】AWS 文档：Lazy Loading 只缓存被请求的数据。优点是资源高效、容错性强；缺点是缓存未命中时需要 3 次往返（缓存请求 → 数据库查询 → 写入缓存）。",
            "【写穿策略】AWS 文档：Write-Through 在写入数据库时同时更新缓存。优点是数据始终最新；缺点是冷启动时缺少历史数据，且可能缓存大量未读数据（缓存污染）。",
            "【TTL 抖动】Redis 最佳实践：'add some time jitter to your TTLs'——在 TTL 基础上添加随机偏移，避免大量 key 同时过期导致缓存雪崩，减少数据库瞬时负载。",
            "【多级缓存架构】Facebook 架构包含 Region（全球区域）→ Frontend Cluster（Web + Memcached）→ Storage Cluster（数据库）三级。多个 Frontend Cluster 共享一个 Storage Cluster，通过一致性哈希分布数据。"
        ],
        keyDifficulties: [
            "【缓存击穿防护】Facebook 的 Leasing 机制将数据库峰值查询从 17K/秒降到 1.3K/秒。核心思想：缓存未命中时只让一个客户端回源填充，其他客户端等待，避免同时请求压垮数据库。",
            "【懒加载 vs 写穿权衡】懒加载适合读多写少、可容忍短暂过期的场景；写穿适合实时性要求高的场景但写延迟增加。实践中通常结合使用：写穿保证一致性 + TTL 防止缓存污染。",
            "【跨区域一致性】Facebook 使用'remote markers'标记跨区域写入期间的陈旧数据。副本区域读取时检测到 marker 会将请求重定向到主区域，牺牲延迟换取一致性。",
            "【缓存失效复杂性】Facebook 使用 mcsqueal 守护进程监控数据库提交，通过 mcrouter 代理批量向多个 Frontend Cluster 发送删除命令。失效顺序需与数据库复制协调，避免竞态条件。",
            "【热点 Key 问题】当某个 key 被高频访问时，单个 Memcached 节点成为瓶颈。解决方案包括：key 复制到多个节点、本地缓存、或拆分为多个子 key。"
        ],
        handsOnPath: [
            "实现基础的 Look-Aside Cache 模式：先查 Redis，未命中则查数据库，将结果写入 Redis 并设置 TTL。",
            "实现缓存击穿防护：使用 Redis 的 SETNX（SET if Not eXists）或 Redlock 获取填充锁，避免多请求同时回源。",
            "为 TTL 添加抖动：base_ttl + random(0, base_ttl * 0.1)，避免批量 key 同时过期。",
            "实现 Write-Through + TTL 策略：数据库更新成功后立即更新缓存，同时设置过期时间防止无效数据积累。",
            "配置 Redis 驱逐策略：对有 TTL 的缓存使用 volatile-ttl 策略，优先驱逐即将过期的 key。",
            "监控缓存命中率：使用 Redis INFO 命令获取 keyspace_hits/keyspace_misses，计算命中率并设置告警阈值（如 < 80%）。"
        ],
        selfCheck: [
            "什么是 Look-Aside Cache 模式？为什么 Facebook 选择删除缓存而不是更新缓存？",
            "什么是缓存击穿（thundering herds）？Facebook 的 Leasing 机制如何解决这个问题？",
            "Lazy Loading 和 Write-Through 策略各有什么优缺点？什么场景下应该选择哪种策略？",
            "为什么要给 TTL 添加抖动？不添加会导致什么问题？",
            "Facebook 如何处理跨区域缓存一致性问题？什么是 remote markers？",
            "如何监控缓存健康度？缓存命中率低于多少应该告警？"
        ],
        extensions: [
            "研究 Facebook 的 Tao 系统，了解其如何扩展 Memcache 支持社交图谱的多跳查询和写入传播。",
            "学习 Redis Cluster 的数据分片和故障转移机制，理解分布式缓存的高可用设计。",
            "探索 Local Cache + Remote Cache 双层架构，如 Caffeine + Redis，减少网络往返延迟。",
            "研究 Cache-Aside 与 Read-Through/Write-Through 模式的实现差异和适用场景。"
        ],
        sourceUrls: [
            "https://newsletter.systemdesigncodex.com/p/facebook-memcache-breakdown",
            "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Strategies.html",
            "https://redis.io/docs/latest/develop/reference/eviction/"
        ]
    },
    "bp-w3-2": {
        lessonId: "bp-w3-2",
        background: [
            "【索引核心原理】Use The Index, Luke 指出：'SQL indexing is the most effective tuning method—yet it is often neglected during development'——索引是最有效的调优手段，但开发中常被忽视。B-Tree 索引的叶子节点组织为双向链表，便于范围查询。",
            "【N+1 查询问题】ORM 中常见的性能陷阱：查询 N 条主记录后，遍历访问关联属性时触发 N 次额外查询。解决方案包括 JOIN FETCH、@BatchSize、@Fetch(FetchMode.SUBSELECT)。",
            "【@BatchSize 优化】Hibernate 批量获取：使用 IN 子句批量加载关联实体，将 N+1 查询降为 N/M+1（M 为批量大小）。配置：@BatchSize(size = 25) 或全局设置 hibernate.default_batch_fetch_size。",
            "【SUBSELECT 策略】@Fetch(FetchMode.SUBSELECT) 让 Hibernate 只用 1+1 次查询获取所有关联数据。相比 @BatchSize，无需调优批量参数；相比 JOIN FETCH，关联仍是懒加载，只在访问时触发。",
            "【VACUUM 作用】PostgreSQL 文档：VACUUM 回收被删除或更新行占用的空间（死元组）。'We recommend that all databases be vacuumed regularly in order to remove dead rows'——频繁更新的表需要更频繁执行 VACUUM。",
            "【VACUUM 两种模式】普通 VACUUM 不需要排他锁，可与读写并行；VACUUM FULL 重写整个表，需要 ACCESS EXCLUSIVE 锁但能回收更多空间。Autovacuum 自动处理日常维护。"
        ],
        keyDifficulties: [
            "【索引反模式】Use The Index, Luke 识别的常见问题：1) 在索引列上使用函数导致索引失效；2) 数据类型不匹配；3) 冗余索引浪费空间和写入性能；4) 通过数学运算混淆条件。",
            "【批量大小调优】@BatchSize 需要平衡：太小则查询次数仍多，太大可能导致 IN 子句超长（MySQL 限制 1000 值）或内存溢出。建议范围 25-50，根据数据量和内存调整。",
            "【VACUUM FULL 风险】需要 ACCESS EXCLUSIVE 锁阻塞所有读写操作，执行速度慢，且需要额外磁盘空间。只在需要大量回收空间时使用，日常维护用普通 VACUUM。",
            "【Autovacuum 调优】关键参数：vacuum_cost_delay 控制 I/O 节流，autovacuum_vacuum_scale_factor 决定触发阈值。高写入表可能需要降低 scale_factor 使 autovacuum 更频繁触发。",
            "【JOIN FETCH 分页冲突】使用 JOIN FETCH 加载集合时不能使用分页（setMaxResults），因为 Hibernate 会在内存中过滤。此时应使用 @BatchSize 或子查询。"
        ],
        handsOnPath: [
            "使用 EXPLAIN ANALYZE 识别全表扫描，为 WHERE 条件列添加索引，对比执行计划和实际执行时间。",
            "检测 N+1 问题：启用 Hibernate SQL 日志（hibernate.show_sql=true），观察遍历关联时产生的额外查询。",
            "实现 @BatchSize 优化：在关联属性上添加 @BatchSize(size=25)，或全局配置 hibernate.default_batch_fetch_size，对比查询次数。",
            "配置 PostgreSQL autovacuum：调整 autovacuum_vacuum_scale_factor（默认 0.2）和 autovacuum_vacuum_threshold（默认 50）以适应表的更新频率。",
            "监控 VACUUM 进度：查询 pg_stat_progress_vacuum 视图观察正在进行的 VACUUM 操作，或使用 pg_stat_user_tables 的 n_dead_tup 监控死元组数量。",
            "对比索引性能：使用 EXPLAIN 的 Buffers 选项，对比有索引和无索引时的 shared hit 和 read 数量。"
        ],
        selfCheck: [
            "什么是 N+1 查询问题？@BatchSize 和 @Fetch(FetchMode.SUBSELECT) 分别如何解决它？",
            "在索引列上使用函数（如 UPPER(column)）会导致什么问题？如何避免？",
            "PostgreSQL 的 VACUUM 和 VACUUM FULL 有什么区别？各自在什么场景下使用？",
            "@BatchSize 的批量大小设置过大会有什么风险？",
            "为什么使用 JOIN FETCH 加载集合时不能使用分页？应该怎么解决？",
            "如何监控 PostgreSQL 表中的死元组数量？Autovacuum 何时会触发？"
        ],
        extensions: [
            "学习 PostgreSQL 的部分索引（Partial Index）和表达式索引，优化特定查询场景。",
            "研究 Hibernate 的二级缓存和查询缓存配置，理解 ORM 层缓存与数据库缓存的协作。",
            "探索 pg_stat_statements 扩展，自动收集查询执行统计，识别需要优化的高频慢查询。",
            "学习 MySQL 的 InnoDB Buffer Pool 监控，理解数据库内部的缓存机制和命中率优化。"
        ],
        sourceUrls: [
            "https://use-the-index-luke.com/",
            "https://www.postgresql.org/docs/current/sql-vacuum.html",
            "https://thorben-janssen.com/hibernate-tips-how-to-fetch-associations-in-batches/"
        ]
    },
    "bp-w3-3": {
        lessonId: "bp-w3-3",
        background: [
            "【CQRS 定义】Martin Fowler：'CQRS stands for Command Query Responsibility Segregation...the idea is that you can use a different model to update information than the model you use to read information'——读写使用不同的数据模型和存储。",
            "【CQRS 适用场景】Microsoft 文档：CQRS 适合读写负载差异大、复杂业务逻辑的系统。写入端可以使用规范化模型保证一致性，读取端使用反规范化视图优化查询性能。",
            "【分库分表策略】数据库分片（Sharding）将数据水平切分到多个数据库实例。常见策略：范围分片（Range）、哈希分片（Hash）、目录分片（Directory）。每种策略有不同的数据分布和查询特点。",
            "【Redis Hot Key 问题】Redis 官方文档：热点 Key 是指被高频访问的单个 Key，可能导致单个节点过载。解决方案包括：本地缓存、读副本、Key 拆分（如 key_1, key_2...key_n 轮询）。",
            "【Redis Big Key 问题】Redis 官方建议单个 Key 的 Value 不超过 10KB。大 Key 会导致：网络带宽占用、主线程阻塞、集群数据倾斜、过期删除耗时长。使用 redis-cli --bigkeys 扫描检测。",
            "【分布式 ID 生成】分库分表后需要全局唯一 ID。常见方案：Snowflake（Twitter 雪花算法）、UUID、数据库自增（步长错开）、Redis 原子递增。Snowflake 生成有序 ID 便于索引。"
        ],
        keyDifficulties: [
            "【CQRS 最终一致性】写入和读取模型同步存在延迟，需要接受最终一致性。适合对实时性要求不高的场景；对于强一致性需求，可能需要同步更新或使用事务发件箱模式。",
            "【分片键选择】分片键决定数据分布和查询效率。选择高基数（cardinality）、查询频繁的字段。避免选择会导致数据倾斜的字段（如注册日期会导致新数据集中在少数分片）。",
            "【跨分片查询】分库分表后，跨分片的 JOIN 和聚合查询变得复杂。需要在应用层聚合、使用中间件（如 ShardingSphere）、或维护冗余数据。这是分库分表的主要代价。",
            "【Hot Key 识别】Redis 4.0+ 的 --hotkeys 选项需要开启 maxmemory-policy 为 LFU 系列。也可以通过代理层（如 Twemproxy）统计访问频率，或使用 MONITOR 命令采样分析。",
            "【Big Key 删除风险】直接 DEL 大 Key 会阻塞 Redis 主线程。Redis 4.0+ 推荐使用 UNLINK 异步删除；对于 Hash/Set/ZSet，使用 SCAN + HDEL/SREM/ZREM 分批删除。"
        ],
        handsOnPath: [
            "设计 CQRS 架构：写入使用关系型数据库（如 PostgreSQL），读取使用 Elasticsearch 或 Redis。通过事件驱动（如 Kafka CDC）同步数据。",
            "实现分库分表：使用 ShardingSphere-JDBC 或 Vitess 配置水平分片。选择合适的分片键，测试数据分布均匀性。",
            "检测 Redis Big Key：使用 redis-cli --bigkeys 扫描，或 MEMORY USAGE <key> 查看单个 Key 内存占用。设置告警阈值。",
            "处理 Hot Key：实现本地缓存（如 Caffeine）减少 Redis 访问；或将热点 Key 复制到多个节点，客户端轮询访问。",
            "设计分布式 ID 生成器：实现 Snowflake 算法，配置 Worker ID 和 Datacenter ID。测试 ID 唯一性和有序性。",
            "监控分片数据均衡：定期统计各分片的数据量和 QPS，发现数据倾斜及时调整分片策略或进行数据迁移。"
        ],
        selfCheck: [
            "什么是 CQRS？它适合什么样的系统？",
            "分库分表的三种常见分片策略是什么？各有什么优缺点？",
            "什么是 Redis Hot Key 问题？有哪些解决方案？",
            "为什么 Redis Big Key 会影响性能？如何检测和处理 Big Key？",
            "分片键选择需要考虑哪些因素？什么样的字段不适合作为分片键？",
            "Snowflake 算法生成的 ID 有什么特点？为什么它适合分库分表场景？"
        ],
        extensions: [
            "研究 Event Sourcing 模式，了解其与 CQRS 的配合使用和事件溯源的优势。",
            "学习 TiDB 等分布式 NewSQL 数据库，了解其如何透明支持分布式事务和自动分片。",
            "探索 Redis Cluster 的 Hash Slot 机制，理解其数据分片和故障转移原理。",
            "研究 Consistent Hashing（一致性哈希）算法，理解其在分布式缓存中解决扩缩容问题的原理。"
        ],
        sourceUrls: [
            "https://martinfowler.com/bliki/CQRS.html",
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs",
            "https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/memory-optimization/",
            "https://shardingsphere.apache.org/document/current/en/overview/"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w3-1": [
        {
            id: "bp-w3-1-q1",
            question: "Facebook Memcache 在数据更新后选择如何处理缓存？",
            options: [
                "更新缓存中的数据",
                "删除缓存中的数据（delete is idempotent）",
                "让缓存自然过期",
                "同时更新缓存和数据库"
            ],
            answer: 1,
            rationale: "Facebook 选择删除而非更新缓存，因为'delete is idempotent'——多次删除请求只有第一次有效，更容易保证一致性。"
        },
        {
            id: "bp-w3-1-q2",
            question: "Facebook 的 Leasing 机制主要解决什么问题？",
            options: [
                "数据加密问题",
                "Thundering herds（缓存击穿）和 stale sets（陈旧写入）",
                "网络延迟问题",
                "数据压缩问题"
            ],
            answer: 1,
            rationale: "Leasing 机制通过 64-bit token 控制缓存填充权限，解决 thundering herds（多请求同时回源）和 stale sets（过期数据覆盖新数据）问题。"
        },
        {
            id: "bp-w3-1-q3",
            question: "Facebook 的 Leasing 机制对数据库查询峰值的影响是什么？",
            options: [
                "从 1.3K/秒增加到 17K/秒",
                "从 17K/秒降低到 1.3K/秒",
                "没有明显变化",
                "增加了 10 倍"
            ],
            answer: 1,
            rationale: "Facebook 论文显示：实施 Leasing 机制后，数据库峰值查询从 17K/秒降低到 1.3K/秒，有效防止了缓存击穿导致的数据库过载。"
        },
        {
            id: "bp-w3-1-q4",
            question: "AWS 文档指出 Lazy Loading 策略的主要缺点是什么？",
            options: [
                "占用太多内存",
                "缓存未命中时需要 3 次往返（缓存请求 → 数据库查询 → 写入缓存）",
                "不支持 TTL",
                "只能用于读操作"
            ],
            answer: 1,
            rationale: "AWS 文档指出 Lazy Loading 的缺点：缓存未命中时需要 3 次往返——初始缓存请求、数据库查询、将结果写入缓存。"
        },
        {
            id: "bp-w3-1-q5",
            question: "Write-Through 策略的主要缺点是什么？",
            options: [
                "数据不一致",
                "冷启动时缺少历史数据，且可能缓存大量未读数据（缓存污染）",
                "不支持写操作",
                "延迟太低"
            ],
            answer: 1,
            rationale: "AWS 文档指出 Write-Through 的缺点：冷启动问题（新节点缺少历史数据）和缓存污染（缓存大量从未被读取的数据）。"
        },
        {
            id: "bp-w3-1-q6",
            question: "为什么 Redis 最佳实践建议给 TTL 添加抖动（jitter）？",
            options: [
                "提高随机性增加安全性",
                "避免大量 key 同时过期导致缓存雪崩，减少数据库瞬时负载",
                "减少内存使用",
                "加快过期检测速度"
            ],
            answer: 1,
            rationale: "Redis 最佳实践：'add some time jitter to your TTLs'——随机化 TTL 避免批量 key 同时过期，防止缓存雪崩压垮数据库。"
        },
        {
            id: "bp-w3-1-q7",
            question: "Facebook 如何处理跨区域缓存一致性问题？",
            options: [
                "禁止跨区域写入",
                "使用 remote markers 标记陈旧数据，将读请求重定向到主区域",
                "所有写入都发往所有区域",
                "不关心跨区域一致性"
            ],
            answer: 1,
            rationale: "Facebook 使用 remote markers 标记跨区域写入期间的陈旧数据。副本区域读取时检测到 marker 会将请求重定向到主区域，牺牲延迟换取一致性。"
        },
        {
            id: "bp-w3-1-q8",
            question: "Redis 的 volatile-ttl 驱逐策略有什么特点？",
            options: [
                "驱逐所有 key",
                "优先驱逐最近最少使用的 key",
                "优先驱逐剩余 TTL 最短的 key",
                "随机驱逐 key"
            ],
            answer: 2,
            rationale: "Redis 文档：volatile-ttl 策略'Evict keys with the shortest remaining time-to-live (TTL) value'——优先驱逐即将过期的 key。"
        },
        {
            id: "bp-w3-1-q9",
            question: "什么场景下应该结合使用 Write-Through 和 TTL 策略？",
            options: [
                "只读数据场景",
                "需要数据一致性，同时要防止缓存污染的场景",
                "数据量很小的场景",
                "不需要缓存的场景"
            ],
            answer: 1,
            rationale: "AWS 建议：Write-Through + TTL 结合懒加载的容错性和写穿的数据新鲜度，同时通过 TTL 过期清理无效数据，防止缓存污染。"
        },
        {
            id: "bp-w3-1-q10",
            question: "Facebook 的 Gutter 服务器起什么作用？",
            options: [
                "存储所有数据的备份",
                "当 Memcached 服务器故障时吸收负载，存储临时条目快速过期",
                "处理跨区域请求",
                "监控系统健康"
            ],
            answer: 1,
            rationale: "Facebook 使用 Gutter 服务器（约 1% 容量）在 Memcached 故障时吸收负载，存储临时条目并快速过期，避免失效开销。"
        },
        {
            id: "bp-w3-1-q11",
            question: "缓存命中率低于多少时通常需要告警？",
            options: [
                "低于 50%",
                "低于 80%",
                "低于 95%",
                "低于 99%"
            ],
            answer: 1,
            rationale: "行业最佳实践：缓存命中率低于 80% 时应该复盘缓存策略，检查 TTL 设置、热点 key 分布、缓存容量等问题。"
        },
        {
            id: "bp-w3-1-q12",
            question: "Facebook 使用什么组件批量向多个 Frontend Cluster 发送缓存删除命令？",
            options: [
                "直接数据库触发器",
                "mcsqueal 守护进程 + mcrouter 代理",
                "定时任务",
                "客户端广播"
            ],
            answer: 1,
            rationale: "Facebook 使用 mcsqueal 守护进程监控数据库提交，通过 mcrouter 代理批量向多个 Frontend Cluster 发送删除命令，保证失效效率。"
        }
    ],
    "bp-w3-2": [
        {
            id: "bp-w3-2-q1",
            question: "Use The Index, Luke 对 SQL 索引重要性的描述是什么？",
            options: [
                "索引是可选的优化手段",
                "SQL indexing is the most effective tuning method—yet it is often neglected during development",
                "索引只对大表有用",
                "索引会降低查询性能"
            ],
            answer: 1,
            rationale: "Use The Index, Luke 指出：'SQL indexing is the most effective tuning method—yet it is often neglected during development'——索引是最有效的调优手段但常被忽视。"
        },
        {
            id: "bp-w3-2-q2",
            question: "什么是 N+1 查询问题？",
            options: [
                "查询返回 N+1 条记录",
                "查询 N 条主记录后，遍历访问关联属性时触发 N 次额外查询",
                "需要 N+1 个数据库连接",
                "索引需要 N+1 次 I/O"
            ],
            answer: 1,
            rationale: "N+1 问题：查询 N 条主记录（1 次查询），遍历访问关联属性时触发 N 次额外查询，导致 1+N 次数据库往返，严重影响性能。"
        },
        {
            id: "bp-w3-2-q3",
            question: "@BatchSize(size=25) 如何降低 N+1 问题的影响？",
            options: [
                "禁用懒加载",
                "使用 IN 子句批量加载关联实体，将 N+1 查询降为 N/25+1",
                "缓存所有关联数据",
                "自动生成 JOIN 查询"
            ],
            answer: 1,
            rationale: "Hibernate 的 @BatchSize 使用 IN 子句批量加载关联实体。如 @BatchSize(size=25)，将 N+1 查询降为 N/25+1 次查询。"
        },
        {
            id: "bp-w3-2-q4",
            question: "@Fetch(FetchMode.SUBSELECT) 相比 @BatchSize 有什么优势？",
            options: [
                "支持分页",
                "无需调优批量参数，只用 1+1 次查询获取所有关联数据",
                "支持更大的数据集",
                "更快的单次查询"
            ],
            answer: 1,
            rationale: "@Fetch(FetchMode.SUBSELECT) 只用 1+1 次查询获取所有关联数据。相比 @BatchSize 无需调优批量参数，相比 JOIN FETCH 关联仍是懒加载。"
        },
        {
            id: "bp-w3-2-q5",
            question: "@BatchSize 设置过大可能导致什么问题？",
            options: [
                "查询变慢因为批量太小",
                "IN 子句超长（如 MySQL 限制 1000 值）或内存溢出",
                "无法使用懒加载",
                "数据库连接耗尽"
            ],
            answer: 1,
            rationale: "批量大小过大可能导致 IN 子句超长（MySQL 限制 1000 值）、内存溢出、或大数据集加载导致性能下降。建议范围 25-50。"
        },
        {
            id: "bp-w3-2-q6",
            question: "PostgreSQL VACUUM 的主要作用是什么？",
            options: [
                "压缩数据库文件",
                "回收被删除或更新行占用的空间（死元组）",
                "备份数据库",
                "更新索引"
            ],
            answer: 1,
            rationale: "PostgreSQL 文档：VACUUM 回收死元组占用的空间。'We recommend that all databases be vacuumed regularly in order to remove dead rows'。"
        },
        {
            id: "bp-w3-2-q7",
            question: "VACUUM 和 VACUUM FULL 的主要区别是什么？",
            options: [
                "VACUUM FULL 更快",
                "VACUUM 不需要排他锁可并行执行；VACUUM FULL 需要 ACCESS EXCLUSIVE 锁但回收更多空间",
                "VACUUM 只能用于小表",
                "VACUUM FULL 不更新统计信息"
            ],
            answer: 1,
            rationale: "PostgreSQL 文档：普通 VACUUM 不需要排他锁，可与读写并行；VACUUM FULL 需要 ACCESS EXCLUSIVE 锁重写整个表，但能回收更多空间。"
        },
        {
            id: "bp-w3-2-q8",
            question: "在索引列上使用函数（如 UPPER(column)）会导致什么问题？",
            options: [
                "查询结果不正确",
                "索引无法使用，导致全表扫描",
                "索引被自动删除",
                "数据库崩溃"
            ],
            answer: 1,
            rationale: "Use The Index, Luke 识别的反模式：在索引列上使用函数会导致索引失效，数据库无法使用索引优化查询，转为全表扫描。"
        },
        {
            id: "bp-w3-2-q9",
            question: "为什么使用 JOIN FETCH 加载集合时不能使用分页？",
            options: [
                "语法不支持",
                "Hibernate 会在内存中过滤，而非数据库分页",
                "会产生重复数据",
                "分页对集合无意义"
            ],
            answer: 1,
            rationale: "使用 JOIN FETCH 加载集合时设置 setMaxResults，Hibernate 会将全部数据加载到内存后过滤，而非数据库层面分页，可能导致内存溢出。"
        },
        {
            id: "bp-w3-2-q10",
            question: "如何全局配置 Hibernate 的批量获取大小？",
            options: [
                "@BatchSize 只能用于单个实体",
                "设置 hibernate.default_batch_fetch_size 配置项",
                "修改数据库配置",
                "使用 SQL 提示"
            ],
            answer: 1,
            rationale: "对于有大量关联的应用，全局设置 hibernate.default_batch_fetch_size 比在每个实体上添加 @BatchSize 更高效。"
        },
        {
            id: "bp-w3-2-q11",
            question: "PostgreSQL 的 autovacuum_vacuum_scale_factor 参数控制什么？",
            options: [
                "VACUUM 的执行速度",
                "触发 autovacuum 的死元组比例阈值",
                "VACUUM 使用的内存大小",
                "并行 VACUUM 的工作进程数"
            ],
            answer: 1,
            rationale: "autovacuum_vacuum_scale_factor（默认 0.2）决定死元组占表比例达到多少时触发 autovacuum。高写入表可能需要降低此值。"
        },
        {
            id: "bp-w3-2-q12",
            question: "如何监控 PostgreSQL 表中的死元组数量？",
            options: [
                "查询 pg_tables",
                "查询 pg_stat_user_tables 的 n_dead_tup 列",
                "运行 EXPLAIN ANALYZE",
                "查看数据库日志"
            ],
            answer: 1,
            rationale: "通过查询 pg_stat_user_tables 视图的 n_dead_tup 列可以监控表中的死元组数量，评估是否需要手动触发 VACUUM。"
        }
    ],
    "bp-w3-3": [
        {
            id: "bp-w3-3-q1",
            question: "Martin Fowler 对 CQRS 模式的核心定义是什么？",
            options: [
                "读写使用相同的数据模型",
                "Use a different model to update information than the model you use to read information",
                "只使用命令模式",
                "只使用查询模式"
            ],
            answer: 1,
            rationale: "Martin Fowler：'CQRS stands for Command Query Responsibility Segregation...the idea is that you can use a different model to update information than the model you use to read information'。"
        },
        {
            id: "bp-w3-3-q2",
            question: "分库分表的三种常见分片策略是什么？",
            options: [
                "水平、垂直、混合",
                "范围分片（Range）、哈希分片（Hash）、目录分片（Directory）",
                "主从、读写、备份",
                "热、温、冷"
            ],
            answer: 1,
            rationale: "常见的分片策略：范围分片（按数值范围）、哈希分片（按 Key 哈希值）、目录分片（维护映射表）。每种策略有不同的数据分布和查询特点。"
        },
        {
            id: "bp-w3-3-q3",
            question: "Redis Big Key 的建议大小阈值是多少？",
            options: [
                "不超过 1KB",
                "不超过 10KB",
                "不超过 1MB",
                "没有限制"
            ],
            answer: 1,
            rationale: "Redis 官方建议单个 Key 的 Value 不超过 10KB。大 Key 会导致网络带宽占用、主线程阻塞、集群数据倾斜等问题。"
        },
        {
            id: "bp-w3-3-q4",
            question: "如何检测 Redis 中的 Big Key？",
            options: [
                "只能手动查看",
                "使用 redis-cli --bigkeys 扫描，或 MEMORY USAGE <key> 查看",
                "查看 Redis 日志",
                "Big Key 无法检测"
            ],
            answer: 1,
            rationale: "使用 redis-cli --bigkeys 可以扫描整个 Redis 实例找出各类型最大的 Key；MEMORY USAGE <key> 可以查看特定 Key 的内存占用。"
        },
        {
            id: "bp-w3-3-q5",
            question: "解决 Redis Hot Key 问题的常见方案有哪些？",
            options: [
                "只能升级 Redis 实例",
                "本地缓存、读副本、Key 拆分（轮询访问多个 Key）",
                "删除热点数据",
                "限制访问频率"
            ],
            answer: 1,
            rationale: "Hot Key 解决方案：使用本地缓存（如 Caffeine）减少 Redis 访问；使用读副本分担负载；将热点 Key 拆分为多个（如 key_1, key_2）轮询访问。"
        },
        {
            id: "bp-w3-3-q6",
            question: "为什么直接 DEL 大 Key 有风险？应该如何处理？",
            options: [
                "DEL 不会删除数据",
                "会阻塞 Redis 主线程；应使用 UNLINK 异步删除或分批删除",
                "会导致数据丢失",
                "没有任何风险"
            ],
            answer: 1,
            rationale: "直接 DEL 大 Key 会阻塞 Redis 主线程。Redis 4.0+ 推荐使用 UNLINK 异步删除；对于 Hash/Set/ZSet，使用 SCAN + HDEL/SREM/ZREM 分批删除。"
        },
        {
            id: "bp-w3-3-q7",
            question: "CQRS 模式的主要代价是什么？",
            options: [
                "读取性能下降",
                "写入和读取模型同步存在延迟，需要接受最终一致性",
                "无法使用关系型数据库",
                "代码量减少"
            ],
            answer: 1,
            rationale: "CQRS 的主要代价是读写模型同步存在延迟，需要接受最终一致性。适合对实时性要求不高的场景；强一致性需求需要额外处理。"
        },
        {
            id: "bp-w3-3-q8",
            question: "分库分表后，跨分片查询的主要挑战是什么？",
            options: [
                "网络延迟增加",
                "跨分片的 JOIN 和聚合查询变得复杂，需要在应用层聚合",
                "无法使用 SQL",
                "数据会丢失"
            ],
            answer: 1,
            rationale: "分库分表后，跨分片的 JOIN 和聚合查询变得复杂。需要在应用层聚合、使用中间件（如 ShardingSphere）、或维护冗余数据。这是分库分表的主要代价。"
        },
        {
            id: "bp-w3-3-q9",
            question: "分片键选择应该避免什么？",
            options: [
                "高基数字段",
                "会导致数据倾斜的字段（如注册日期导致新数据集中在少数分片）",
                "查询频繁的字段",
                "主键字段"
            ],
            answer: 1,
            rationale: "分片键应选择高基数、查询频繁的字段。避免选择会导致数据倾斜的字段，如注册日期会导致新数据集中在少数分片。"
        },
        {
            id: "bp-w3-3-q10",
            question: "Snowflake 算法生成的 ID 有什么特点？",
            options: [
                "完全随机，无序",
                "全局唯一、趋势有序，便于数据库索引",
                "只包含数字",
                "长度固定为 32 位"
            ],
            answer: 1,
            rationale: "Snowflake 算法生成的 ID 全局唯一且趋势有序（包含时间戳），便于数据库索引和分布式场景下的 ID 生成。"
        },
        {
            id: "bp-w3-3-q11",
            question: "如何识别 Redis 中的 Hot Key？",
            options: [
                "只能通过日志分析",
                "使用 redis-cli --hotkeys（需 LFU 策略）、代理层统计、或 MONITOR 采样",
                "Hot Key 无法识别",
                "查看 CPU 使用率"
            ],
            answer: 1,
            rationale: "Redis 4.0+ 的 --hotkeys 需要开启 LFU 策略。也可以通过代理层（如 Twemproxy）统计访问频率，或使用 MONITOR 命令采样分析。"
        },
        {
            id: "bp-w3-3-q12",
            question: "Microsoft 文档指出 CQRS 适合什么样的系统？",
            options: [
                "读写负载相近的系统",
                "读写负载差异大、复杂业务逻辑的系统",
                "只有读操作的系统",
                "小型单体应用"
            ],
            answer: 1,
            rationale: "Microsoft 文档：CQRS 适合读写负载差异大、复杂业务逻辑的系统。写入端保证一致性，读取端优化查询性能。"
        }
    ]
}
