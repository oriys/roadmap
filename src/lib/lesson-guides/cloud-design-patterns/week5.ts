import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "w5-1": {
        lessonId: "w5-1",
        background: [
            "【核心概念】Azure 官方文档：Cache-Aside 是'按需加载数据到缓存'的模式，用于'提升性能并维护缓存与数据存储之间的一致性'。应用先检查缓存，缓存未命中时从数据存储读取数据，再写入缓存供后续请求使用。",
            "【工作流程】官方文档定义三步流程：1) 应用尝试从缓存读取数据；2) 缓存未命中时从数据存储检索数据；3) 将数据添加到缓存并返回给调用者。这种被动/反应式方法确保缓存只存储实际请求的数据。",
            "【Lazy Loading 等价性】AWS 文档指出：Cache-Aside 也称为 Lazy Loading（惰性加载），是'most common approach: populate the cache only when an object is actually requested'——只在对象被实际请求时才填充缓存。",
            "【Write-Through 对比】AWS 文档：Write-Through 是主动方法，'data is pushed to cache simultaneously with database updates'——数据库更新时同步推送到缓存。相比 Cache-Aside 的被动加载，Write-Through 可防止缓存未命中但增加缓存体积。",
            "【Well-Architected 对齐】Azure 文档指出该模式支持：可靠性（RE:05）——缓存复制数据，当原始存储临时不可用时保持可用性；性能效率（PE:08, PE:12）——优化读密集、低频变化且容忍陈旧数据的场景。"
        ],
        keyDifficulties: [
            "【更新顺序陷阱】Azure 官方文档强调：'必须先更新数据存储再删除缓存'，否则会导致短暂的竞态条件和陈旧数据。正确顺序：UpdateDataStore() → DeleteCache()，不是 DeleteCache() → UpdateDataStore()。",
            "【缓存过期策略权衡】官方文档警告：'避免过期期限过短（频繁重新加载）或过长（数据陈旧）'。需要根据数据变更频率和业务对数据新鲜度的容忍度来平衡。",
            "【Thundering Herd 问题】AWS 文档描述：'Many different application processes simultaneously request a cache key, get a cache miss, and then each hits the same database query in parallel'——大量进程同时遭遇缓存未命中，并发查询数据库。解决方案：预热缓存或使用分布式锁。",
            "【本地缓存一致性风险】Azure 文档指出：在 Web 服务器集群中使用本地缓存，'不同应用实例各自缓存数据易导致不一致'。建议使用分布式缓存（如 Azure Managed Redis）确保一致性。",
            "【不适用场景】官方明确列出：1) 敏感或安全相关数据不应缓存；2) 静态数据集应在启动时预加载而非按需加载；3) 缓存命中率低的场景增加开销无收益；4) Web 服务器集群中的会话状态不适合本地 Cache-Aside。"
        ],
        handsOnPath: [
            "实现基础 Cache-Aside 读取逻辑：使用 Redis 客户端库（如 StackExchange.Redis 或 ioredis），编写 GetEntityAsync 方法。先调用 cache.StringGetAsync(key) 检查缓存，未命中时查询数据库，然后调用 cache.StringSetAsync 写入缓存。",
            "配置合理的过期时间：使用 cache.KeyExpireAsync(key, TimeSpan.FromMinutes(5)) 设置 TTL。测试不同过期时间对缓存命中率和数据新鲜度的影响。参考官方示例中的 DefaultExpirationTimeInMinutes = 5.0。",
            "实现更新时的缓存失效：编写 UpdateEntityAsync 方法，严格按照'先更新数据存储，再删除缓存'的顺序执行。使用 cache.KeyDeleteAsync(key) 使缓存失效，而不是尝试更新缓存值。",
            "结合 Write-Through 优化热点数据：对于已知的热点数据，在写入数据库后主动写入缓存（Write-Through），避免首次读取的缓存未命中延迟。实现混合策略：Write-Through + Cache-Aside 作为后备。",
            "模拟 Thundering Herd 场景：使用并发测试工具（如 k6 或 Artillery）模拟大量并发请求访问同一未缓存数据。观察数据库压力，然后实现缓存预热或分布式锁（如 Redis SETNX）解决问题。"
        ],
        selfCheck: [
            "Cache-Aside 模式的三个核心步骤是什么？为什么称之为'按需加载'或'惰性加载'？",
            "更新数据时为什么要'先更新数据存储，再删除缓存'？如果顺序反过来会发生什么问题？",
            "Cache-Aside 和 Write-Through 两种缓存策略各有什么优缺点？什么场景下应该结合使用？",
            "什么是 Thundering Herd 问题？在 Cache-Aside 模式中如何避免这个问题？",
            "根据官方文档，Cache-Aside 模式不适用于哪些场景？为什么？"
        ],
        extensions: [
            "研究 Read-Through 和 Write-Behind 缓存模式：了解缓存层如何完全接管数据访问，应用只与缓存交互。对比这些模式与 Cache-Aside 的复杂度和适用场景。",
            "学习缓存预热策略：了解如何在应用启动时或根据访问预测提前加载热点数据，减少冷启动时的缓存未命中率。",
            "探索语义缓存（Semantic Caching）：Azure 文档提到可基于语义而非精确键检索，适合减少 LLM 请求。了解向量数据库在语义缓存中的应用。",
            "研究 Redis 的驱逐策略：了解 LRU、LFU、TTL-based 等驱逐策略，以及如何根据访问模式选择合适的策略。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
            "https://aws.amazon.com/caching/best-practices/",
            "https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies-using-redis/caching-patterns.html"
        ]
    },
    "w5-2": {
        lessonId: "w5-2",
        background: [
            "【核心概念】Azure 官方文档：Index Table 模式通过'在数据存储中为查询频繁引用的字段创建索引'来优化查询性能。当数据存储不支持二级索引或按主键以外的字段查询效率低时，手动创建索引表来加速检索。",
            "【问题场景】官方文档指出：'数据存储按主键组织，无法高效按其他字段检索数据'。某些 NoSQL 存储不支持二级索引，对非主键字段的查询需要全表扫描，性能很差。",
            "【DynamoDB 二级索引】AWS 官方定义：'二级索引是一种数据结构，包含表中属性的子集和一个备用键，用于支持对非主键属性的高效查询'。DynamoDB 自动维护索引，基表数据变更时索引同步更新。",
            "【GSI vs LSI】DynamoDB 文档区分两种索引：全局二级索引（GSI）'分区键可与基表不同，跨越整个表的所有分区'；本地二级索引（LSI）'分区键必须与基表相同，限于单个分区内'。GSI 更灵活但仅支持最终一致性，LSI 支持强一致性但有 10GB 限制。",
            "【索引即开发任务】Use The Index, Luke 强调：'indexing is fundamentally a development task, not merely an administrative concern'——索引是开发者的核心职责，而非仅仅是 DBA 的管理任务。理解索引结构（B-tree、双向链表）对性能优化至关重要。"
        ],
        keyDifficulties: [
            "【三种实现策略权衡】Azure 文档描述三种策略：1) 完全反规范化——复制全部数据到每个索引表，单次查询但存储开销大；2) 规范化引用——索引表仅存引用，节省空间但需两次查询；3) 部分反规范化——复制常用字段，平衡速度和存储。选择取决于查询模式和数据变更频率。",
            "【低区分度索引问题】官方文档警告：'Secondary key is non-discriminating (few unique values, e.g., gender)'——如果索引字段只有少量不同值（如性别），索引几乎无效。类似地，'Data distribution is highly skewed (90% same value)'——数据高度倾斜时索引帮助有限。",
            "【维护开销权衡】官方文档指出：'Maintenance overhead exceeds performance gains'——当数据高度易变时，索引维护成本可能超过查询优化收益。每次写入都需要更新所有相关索引表，写入性能下降。",
            "【GSI 容量独立】DynamoDB 文档强调：GSI '独立的读写容量单位'，需要单独监控和配置。如果 GSI 吞吐量不足，会导致基表写入被限流（throttling）。",
            "【索引覆盖查询优化】Use The Index, Luke 提到：'Covering indexes enabling index-only scans without table access'——覆盖索引包含查询所需的所有列，无需回表查询。在 DynamoDB 中通过'投影属性'实现类似效果。"
        ],
        handsOnPath: [
            "设计 Azure Table Storage 索引方案：参考官方电影应用示例——主表按 Genre（电影类型）分区，创建 Actor 索引表按演员名分区。索引表存储常用字段（合作演员、上映日期）并引用主表分区键获取完整信息。",
            "在 DynamoDB 中创建 GSI：使用 AWS CLI 或控制台为现有表添加全局二级索引。选择合适的分区键和排序键，配置投影属性（KEYS_ONLY、INCLUDE、ALL）。观察索引创建进度和状态。",
            "测试索引查询性能：对比使用 Scan（全表扫描）和 Query（索引查询）的性能差异。使用 DynamoDB 的 ConsumedCapacity 返回值分析读取消耗的容量单位。",
            "实现最终一致性更新：使用消息队列（如 SQS 或 Azure Queue）异步更新索引表。主表写入成功后发送消息，后台 worker 消费消息更新索引。理解最终一致性模型的延迟和权衡。",
            "练习 SQL 数据库索引优化：使用 EXPLAIN 或 EXPLAIN ANALYZE 分析查询执行计划。创建组合索引（multi-column index）优化 WHERE 子句多条件查询，观察索引选择和扫描行数变化。"
        ],
        selfCheck: [
            "Index Table 模式解决什么问题？什么情况下需要手动创建索引表而不是依赖数据库内置索引？",
            "Azure 文档描述的三种索引实现策略各有什么优缺点？如何根据场景选择？",
            "DynamoDB 的 GSI 和 LSI 有什么区别？一致性、容量、限制方面各有什么不同？",
            "为什么说'索引字段区分度低'的情况不适合创建索引？举一个具体例子说明。",
            "什么是'覆盖索引'或'索引覆盖查询'？在 DynamoDB 中如何通过投影属性实现类似效果？"
        ],
        extensions: [
            "深入学习 DynamoDB 单表设计：了解如何通过 GSI 重载和复合排序键在一个表中支持多种访问模式，减少索引数量和成本。",
            "研究 Elasticsearch 倒排索引：了解搜索引擎如何使用倒排索引实现全文搜索，与数据库 B-tree 索引的原理区别。",
            "学习 PostgreSQL 多种索引类型：B-tree、Hash、GiST、GIN 各适用于什么场景？了解 JSONB 字段的 GIN 索引如何支持文档查询。",
            "探索 Change Data Capture（CDC）：了解如何使用 DynamoDB Streams 或数据库 CDC 工具自动同步索引表，保证数据一致性。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/index-table",
            "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html",
            "https://use-the-index-luke.com/"
        ]
    },
    "w5-3": {
        lessonId: "w5-3",
        background: [
            "【核心概念】Azure 官方文档：Sharding 是'将数据水平分区到多个数据库'的模式，'每个分片包含相同 schema 的数据子集'。通过将数据分散到多个节点，突破单服务器的存储、计算和网络带宽限制。",
            "【解决的问题】官方文档列出四个核心问题：1) 单服务器存储空间限制；2) 计算资源无法支撑并发用户；3) 网络带宽成为瓶颈；4) 地理分布要求（合规和延迟）。",
            "【水平 vs 垂直分区】DigitalOcean 文档区分：水平分区（Sharding）按行拆分，每个分片存储一部分记录；垂直分区按列拆分，每个分区存储部分字段。Sharding 特指水平分区。",
            "【MongoDB 分片架构】官方文档描述三个组件：Shard（分片）——存储数据子集的独立副本集；Config Servers（配置服务器）——存储集群元数据和分片映射；Mongos（路由器）——客户端入口点，根据分片键路由查询。",
            "【Well-Architected 对齐】Azure 文档指出该模式支持：可靠性——故障隔离到单个分片；成本优化——多个商用服务器替代昂贵的单服务器；性能效率——并行处理、减少竞争、地理优化。"
        ],
        keyDifficulties: [
            "【三种分片策略对比】Azure 文档详述：1) Lookup（查找策略）——使用映射表定位分片，灵活但增加查找开销；2) Range（范围策略）——按值范围分配，便于范围查询但易产生热点；3) Hash（哈希策略）——哈希函数均匀分布数据，减少热点但范围查询需扫描所有分片。",
            "【分片键选择至关重要】MongoDB 文档强调分片键必须具备：高基数——大量不同的值；均匀分布——避免热点数据；便于查询——常用于过滤条件。官方警告：'单调递增的分片键（如时间戳）导致热点'。",
            "【跨分片查询复杂性】Azure 文档指出：当查询不包含分片键时，需要'fan-out/parallel queries'——向所有分片发送查询并合并结果。这增加延迟和资源消耗，应尽量设计查询匹配分片键。",
            "【数据再平衡挑战】DigitalOcean 文档警告：'Difficulty in rebalancing data during resharding operations'——数据再平衡操作复杂。Range 策略最难再平衡，Lookup 策略通过虚拟分片提供灵活性。",
            "【强一致性难以保证】Azure 文档指出：'Eventual consistency often required instead of strong consistency'——跨分片事务复杂，通常需要接受最终一致性。引用完整性（referential integrity）在分片间难以维护。"
        ],
        handsOnPath: [
            "设计分片方案：选择一个示例场景（如图书目录或订单系统），分析访问模式确定分片键。参考 Azure 文档的 ISBN 校验位示例——11 个逻辑分片映射到 3 个物理数据库。",
            "实现 Lookup 分片策略：创建分片映射表（ShardKey → DatabaseServer），编写 OpenShardConnectionForKeyAsync 方法根据分片键查找并连接正确的数据库。测试不同分片键的路由结果。",
            "配置 MongoDB 分片集群：使用 Docker Compose 搭建包含 mongos、config servers 和多个 shard 的集群。执行 sh.enableSharding() 启用数据库分片，sh.shardCollection() 对集合分片。",
            "测试分片键选择影响：在 MongoDB 中创建两个分片集合，分别使用哈希分片键和范围分片键。插入大量数据后使用 sh.status() 查看数据分布，观察是否有热点分片。",
            "实现跨分片查询（Fan-Out）：编写 Parallel.ForEachAsync 代码向所有分片发送查询并合并结果。对比单分片查询和全分片查询的响应时间，理解扇出查询的性能影响。"
        ],
        selfCheck: [
            "Sharding 模式解决哪四个核心问题？为什么单服务器扩展最终会遇到瓶颈？",
            "Lookup、Range、Hash 三种分片策略各有什么优缺点？什么场景下应该选择哪种策略？",
            "为什么说'分片键选择是最重要的设计决策'？好的分片键应该具备哪些特征？",
            "什么是'热点分片'问题？为什么单调递增的分片键（如时间戳或自增 ID）会导致热点？",
            "跨分片查询（Fan-Out Query）有什么性能问题？如何设计系统减少跨分片查询？"
        ],
        extensions: [
            "研究一致性哈希（Consistent Hashing）：了解如何在节点增减时最小化数据迁移，是分布式系统的核心算法。",
            "学习 Vitess 分片中间件：了解 YouTube 如何使用 Vitess 对 MySQL 进行水平分片，支持海量数据的 OLTP 场景。",
            "探索 CockroachDB 和 TiDB：了解 NewSQL 数据库如何自动处理分片和分布式事务，简化开发者的分片管理负担。",
            "研究 Azure Elastic Database：了解 Azure SQL Database 的弹性数据库客户端库如何简化分片管理，包括分片映射管理和数据依赖路由。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/sharding",
            "https://www.digitalocean.com/community/tutorials/understanding-database-sharding",
            "https://www.mongodb.com/docs/manual/sharding/"
        ]
    },
    "w5-4": {
        lessonId: "w5-4",
        background: [
            "【核心概念】Azure 官方文档：Materialized View 是'在源数据格式不适合查询时，提前生成并存储预填充的数据视图'。与普通视图不同，物化视图'持久化存储查询结果'，应用查询物化视图而非实时计算。",
            "【关键特性】官方文档强调三点：1) 完全可重建——可从源数据重新生成；2) 应用不直接更新——属于特殊的缓存机制；3) 仅包含查询所需的数据——为特定查询优化。",
            "【PostgreSQL 定义】官方文档：物化视图'持久化存储查询结果，类似于表的形式，但具有视图的特性'。与表的区别：不能直接更新；与视图的区别：数据实际存储而非每次查询时计算。",
            "【CQRS 关联】Martin Fowler 解释：CQRS 将'读取和写入操作分离为不同的模型'，物化视图是实现读模型的常用技术。写入操作更新主数据，读取操作查询预计算的物化视图。",
            "【性能提升数据】PostgreSQL 文档示例显示：使用物化视图后，精确查询从 188ms 降低到 0.117ms（1600 倍+），模糊搜索从 1431ms 降低到 198ms（7 倍+）。"
        ],
        keyDifficulties: [
            "【更新策略选择】Azure 文档列出四种更新方式：1) 事件驱动——源数据变化时自动触发（可能高开销）；2) 定时任务——按计划定期更新；3) 手动触发——由外部系统或人工触发；4) 事件溯源——配合 Event Sourcing 模式维护。选择取决于数据新鲜度要求和更新成本。",
            "【适用与不适用场景】官方文档明确：适用于复杂查询、性能优化、离线场景、数据安全限制、微服务跨服务整合。不适用于：源数据简单易查询、源数据变化频繁（更新开销大）、高度一致性要求（视图可能与源数据不一致）。",
            "【一致性权衡】Azure 文档警告：物化视图'可能与源数据不一致'，存在数据延迟。对于需要实时数据的场景，物化视图不合适。需要在查询性能和数据新鲜度之间权衡。",
            "【PostgreSQL 刷新操作】官方文档：使用 REFRESH MATERIALIZED VIEW 重新生成数据。刷新期间视图可能锁定或返回旧数据，需要考虑刷新策略对应用的影响。",
            "【存储位置灵活性】Azure 文档指出：物化视图'无需与源数据位置相同'，可存储在缓存或不同分区，支持二级索引优化性能。这提供了存储优化的灵活性。"
        ],
        handsOnPath: [
            "在 PostgreSQL 中创建物化视图：参考官方销售汇总示例，使用 CREATE MATERIALIZED VIEW 创建聚合查询的物化视图。在视图上创建索引（CREATE UNIQUE INDEX）提高查询性能。",
            "测试查询性能提升：对比直接查询源表和查询物化视图的响应时间。使用 EXPLAIN ANALYZE 分析执行计划，观察全表扫描 vs 索引扫描的差异。",
            "实现定时刷新策略：使用 pg_cron 或外部调度工具（如 cron、Kubernetes CronJob）定期执行 REFRESH MATERIALIZED VIEW。测试刷新期间的查询行为。",
            "设计事件驱动更新：使用数据库触发器或 Change Data Capture（CDC）工具，在源数据变更时触发物化视图更新。理解同步更新 vs 异步更新的权衡。",
            "在 NoSQL 场景应用物化视图模式：在 DynamoDB 中设计预聚合表——主表存储原始数据，聚合表存储按不同维度汇总的结果。使用 DynamoDB Streams 触发 Lambda 更新聚合表。"
        ],
        selfCheck: [
            "Materialized View 与普通数据库视图有什么区别？为什么说它是'特殊的缓存机制'？",
            "物化视图的四种更新策略各有什么优缺点？如何根据场景选择合适的更新策略？",
            "根据官方文档，物化视图适用于哪些场景？不适用于哪些场景？",
            "物化视图模式与 CQRS 模式有什么关系？在 CQRS 架构中物化视图扮演什么角色？",
            "PostgreSQL 文档中的性能测试显示了多大的查询性能提升？这种提升的代价是什么？"
        ],
        extensions: [
            "研究 Event Sourcing 与 Materialized View 结合：了解如何从事件流重建物化视图，支持时间旅行查询和完整审计追踪。",
            "学习流处理系统中的物化视图：了解 Apache Kafka Streams、Apache Flink 如何实现持续更新的物化视图，支持实时分析场景。",
            "探索 ClickHouse 物化视图：了解 OLAP 数据库如何使用物化视图预聚合数据，支持超大规模数据的实时分析查询。",
            "研究 GraphQL 与物化视图：了解如何使用 Hasura 等工具自动生成基于数据库视图的 GraphQL API，简化 API 开发。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/materialized-view",
            "https://www.postgresql.org/docs/current/rules-materializedviews.html",
            "https://martinfowler.com/bliki/CQRS.html"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "w5-1": [
        {
            id: "w5-1-q1",
            question: "Azure 官方文档对 Cache-Aside 模式的核心定义是什么？",
            options: [
                "写入数据时同步更新缓存",
                "按需加载数据到缓存，提升性能并维护缓存与数据存储之间的一致性",
                "将所有数据预加载到缓存中",
                "使用缓存替代数据库存储"
            ],
            answer: 1,
            rationale: "Azure 官方文档明确定义 Cache-Aside 是'按需加载数据到缓存'的模式，用于'提升性能并维护缓存与数据存储之间的一致性'。"
        },
        {
            id: "w5-1-q2",
            question: "Cache-Aside 模式的正确工作流程是什么？",
            options: [
                "写入缓存 → 缓存同步到数据库 → 返回结果",
                "检查缓存 → 缓存未命中时查询数据库 → 写入缓存并返回",
                "直接查询数据库 → 异步写入缓存",
                "预加载所有数据到缓存 → 直接从缓存读取"
            ],
            answer: 1,
            rationale: "官方文档定义三步流程：1) 应用尝试从缓存读取数据；2) 缓存未命中时从数据存储检索数据；3) 将数据添加到缓存并返回给调用者。"
        },
        {
            id: "w5-1-q3",
            question: "AWS 文档中 Cache-Aside 的另一个名称是什么？",
            options: [
                "Write-Through",
                "Read-Through",
                "Lazy Loading（惰性加载）",
                "Write-Behind"
            ],
            answer: 2,
            rationale: "AWS 文档指出：Cache-Aside 也称为 Lazy Loading（惰性加载），是'most common approach: populate the cache only when an object is actually requested'。"
        },
        {
            id: "w5-1-q4",
            question: "更新数据时，Cache-Aside 模式要求的正确操作顺序是什么？",
            options: [
                "先删除缓存，再更新数据库",
                "先更新缓存，再更新数据库",
                "先更新数据库，再删除缓存",
                "只更新缓存，数据库异步更新"
            ],
            answer: 2,
            rationale: "Azure 官方文档强调：'必须先更新数据存储再删除缓存'，否则会导致短暂的竞态条件和陈旧数据。"
        },
        {
            id: "w5-1-q5",
            question: "AWS 文档描述的 Thundering Herd 问题是什么？",
            options: [
                "缓存服务器过载崩溃",
                "大量进程同时遭遇缓存未命中，并发查询数据库",
                "缓存数据过期后无法刷新",
                "缓存和数据库数据不一致"
            ],
            answer: 1,
            rationale: "AWS 文档描述：'Many different application processes simultaneously request a cache key, get a cache miss, and then each hits the same database query in parallel'。"
        },
        {
            id: "w5-1-q6",
            question: "根据 Azure 官方文档，以下哪种场景不适合使用 Cache-Aside 模式？",
            options: [
                "读取频繁但写入较少的数据",
                "可以容忍短暂数据陈旧的场景",
                "敏感或安全相关数据",
                "资源需求不可预测的场景"
            ],
            answer: 2,
            rationale: "Azure 官方文档明确列出不适用场景包括：'敏感或安全相关数据不应缓存'，特别是多应用共享缓存时。"
        },
        {
            id: "w5-1-q7",
            question: "Write-Through 缓存策略与 Cache-Aside 的主要区别是什么？",
            options: [
                "Write-Through 不使用缓存",
                "Write-Through 在数据库更新时主动推送到缓存",
                "Write-Through 只缓存读取的数据",
                "Write-Through 使用本地缓存"
            ],
            answer: 1,
            rationale: "AWS 文档指出：Write-Through 是主动方法，'data is pushed to cache simultaneously with database updates'——数据库更新时同步推送到缓存。"
        },
        {
            id: "w5-1-q8",
            question: "Azure 官方文档关于缓存过期策略的警告是什么？",
            options: [
                "不应该设置任何过期时间",
                "避免过期期限过短（频繁重新加载）或过长（数据陈旧）",
                "所有缓存项应该使用相同的过期时间",
                "过期时间应该与数据库事务超时一致"
            ],
            answer: 1,
            rationale: "官方文档警告：'避免过期期限过短（频繁重新加载）或过长（数据陈旧）'。需要根据数据变更频率和业务容忍度平衡。"
        },
        {
            id: "w5-1-q9",
            question: "根据 Azure Well-Architected Framework，Cache-Aside 模式支持哪些架构支柱？",
            options: [
                "仅支持性能效率",
                "可靠性和性能效率",
                "仅支持成本优化",
                "安全性和合规性"
            ],
            answer: 1,
            rationale: "Azure 文档指出该模式支持：可靠性（RE:05）——缓存复制数据保持可用性；性能效率（PE:08, PE:12）——优化读密集场景。"
        },
        {
            id: "w5-1-q10",
            question: "为什么在 Web 服务器集群中不建议使用本地 Cache-Aside 缓存？",
            options: [
                "本地缓存性能不够好",
                "不同应用实例各自缓存数据易导致不一致",
                "本地缓存不支持过期策略",
                "本地缓存无法存储复杂对象"
            ],
            answer: 1,
            rationale: "Azure 文档指出：在 Web 服务器集群中使用本地缓存，'不同应用实例各自缓存数据易导致不一致'。建议使用分布式缓存。"
        },
        {
            id: "w5-1-q11",
            question: "AWS 文档建议如何结合 Write-Through 和 Cache-Aside 两种策略？",
            options: [
                "只使用其中一种，不要混合使用",
                "Write-Through 主动更新缓存，Cache-Aside 处理缓存过期或缺失",
                "Cache-Aside 用于写入，Write-Through 用于读取",
                "根据数据类型选择，同一系统只用一种"
            ],
            answer: 1,
            rationale: "AWS 文档指出高效的缓存策略应结合使用：Write-Through 主动更新缓存，Lazy Loading（Cache-Aside）处理缓存过期或缺失的情况。"
        },
        {
            id: "w5-1-q12",
            question: "根据官方文档，以下哪种数据适合在应用启动时预加载而非使用 Cache-Aside？",
            options: [
                "用户个人资料数据",
                "实时交易数据",
                "静态配置数据集",
                "社交媒体动态"
            ],
            answer: 2,
            rationale: "Azure 官方文档指出：'静态数据集应在启动时预加载而非按需加载'，因为这类数据不会变化，预加载可以避免首次访问的延迟。"
        }
    ],
    "w5-2": [
        {
            id: "w5-2-q1",
            question: "Azure 官方文档对 Index Table 模式的核心定义是什么？",
            options: [
                "将数据复制到多个数据库",
                "在数据存储中为查询频繁引用的字段创建索引",
                "将大表拆分成多个小表",
                "为每个查询创建独立的数据库"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：Index Table 模式通过'在数据存储中为查询频繁引用的字段创建索引'来优化查询性能。"
        },
        {
            id: "w5-2-q2",
            question: "DynamoDB 官方文档对二级索引的定义是什么？",
            options: [
                "数据库的备份副本",
                "包含表中属性的子集和备用键，用于支持对非主键属性的高效查询",
                "用于加密数据的安全机制",
                "数据库的只读副本"
            ],
            answer: 1,
            rationale: "AWS 官方定义：'二级索引是一种数据结构，包含表中属性的子集和一个备用键，用于支持对非主键属性的高效查询'。"
        },
        {
            id: "w5-2-q3",
            question: "Azure 文档描述的三种 Index Table 实现策略中，哪种平衡了查询速度和存储效率？",
            options: [
                "完全反规范化",
                "规范化引用",
                "部分反规范化",
                "哈希索引"
            ],
            answer: 2,
            rationale: "Azure 文档描述部分反规范化：'复制常用字段，引用不常用字段'，平衡了单次查询的速度和存储开销。"
        },
        {
            id: "w5-2-q4",
            question: "DynamoDB 的全局二级索引（GSI）和本地二级索引（LSI）的主要区别是什么？",
            options: [
                "GSI 仅支持字符串类型，LSI 支持所有类型",
                "GSI 分区键可与基表不同，LSI 分区键必须与基表相同",
                "GSI 不支持查询，LSI 支持查询",
                "GSI 是免费的，LSI 需要付费"
            ],
            answer: 1,
            rationale: "DynamoDB 文档区分：GSI '分区键可与基表不同，跨越整个表的所有分区'；LSI '分区键必须与基表相同，限于单个分区内'。"
        },
        {
            id: "w5-2-q5",
            question: "根据 Azure 文档，以下哪种情况不适合创建 Index Table？",
            options: [
                "应用频繁按非主键字段查询",
                "索引字段只有少量不同值（如性别）",
                "需要提高查询性能",
                "数据相对静态"
            ],
            answer: 1,
            rationale: "官方文档警告：'Secondary key is non-discriminating (few unique values, e.g., gender)'——如果索引字段只有少量不同值，索引几乎无效。"
        },
        {
            id: "w5-2-q6",
            question: "Use The Index, Luke 强调索引是什么类型的任务？",
            options: [
                "仅仅是 DBA 的管理任务",
                "fundamentally a development task（根本上是开发任务）",
                "只在生产环境需要考虑",
                "自动化工具可以完全处理"
            ],
            answer: 1,
            rationale: "Use The Index, Luke 强调：'indexing is fundamentally a development task, not merely an administrative concern'——索引是开发者的核心职责。"
        },
        {
            id: "w5-2-q7",
            question: "DynamoDB 文档中，GSI 的一致性模型是什么？",
            options: [
                "仅支持强一致性",
                "仅支持最终一致性",
                "支持强一致性和最终一致性",
                "不支持任何一致性保证"
            ],
            answer: 1,
            rationale: "DynamoDB 文档指出：GSI '仅支持最终一致性'，而 LSI '支持最终一致性或强一致性'。"
        },
        {
            id: "w5-2-q8",
            question: "根据官方文档，完全反规范化策略的主要缺点是什么？",
            options: [
                "查询需要两次往返",
                "高存储开销，维护成本高",
                "不支持范围查询",
                "无法使用缓存"
            ],
            answer: 1,
            rationale: "Azure 文档描述完全反规范化：'复制全部数据到每个索引表，单次查询但存储开销大，expensive maintenance for dynamic data'。"
        },
        {
            id: "w5-2-q9",
            question: "DynamoDB 官方文档中，每个表最多可以有多少个全局二级索引（默认）？",
            options: [
                "5 个",
                "10 个",
                "20 个",
                "无限制"
            ],
            answer: 2,
            rationale: "DynamoDB 文档指出配额限制：'每表最多 20 个全局二级索引（默认）'，每表最多 5 个本地二级索引。"
        },
        {
            id: "w5-2-q10",
            question: "什么是覆盖索引（Covering Index）的主要优势？",
            options: [
                "减少存储空间",
                "enabling index-only scans without table access（无需回表查询）",
                "自动更新数据",
                "支持跨表查询"
            ],
            answer: 1,
            rationale: "Use The Index, Luke 提到：'Covering indexes enabling index-only scans without table access'——覆盖索引包含查询所需的所有列，无需回表。"
        },
        {
            id: "w5-2-q11",
            question: "当数据高度易变时，Index Table 模式可能带来什么问题？",
            options: [
                "查询速度变慢",
                "索引维护成本可能超过查询优化收益",
                "无法创建索引",
                "数据会丢失"
            ],
            answer: 1,
            rationale: "官方文档指出：'Maintenance overhead exceeds performance gains'——当数据高度易变时，索引维护成本可能超过查询优化收益。"
        },
        {
            id: "w5-2-q12",
            question: "DynamoDB 文档中，如果 GSI 吞吐量不足会发生什么？",
            options: [
                "GSI 自动扩容",
                "查询返回空结果",
                "导致基表写入被限流（throttling）",
                "GSI 会被自动删除"
            ],
            answer: 2,
            rationale: "DynamoDB 文档强调：GSI '独立的读写容量单位'，需要单独监控。如果 GSI 吞吐量不足，会导致基表写入被限流。"
        }
    ],
    "w5-3": [
        {
            id: "w5-3-q1",
            question: "Azure 官方文档对 Sharding 模式的核心定义是什么？",
            options: [
                "将数据垂直拆分到多个表",
                "将数据水平分区到多个数据库，每个分片包含相同 schema 的数据子集",
                "创建数据的只读副本",
                "将数据压缩存储"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：Sharding 是'将数据水平分区到多个数据库'的模式，'每个分片包含相同 schema 的数据子集'。"
        },
        {
            id: "w5-3-q2",
            question: "根据 Azure 文档，Sharding 模式主要解决哪四个核心问题？",
            options: [
                "数据加密、访问控制、审计日志、备份恢复",
                "存储空间限制、计算资源约束、网络带宽瓶颈、地理分布要求",
                "查询优化、索引管理、事务处理、并发控制",
                "数据建模、模式设计、规范化、反规范化"
            ],
            answer: 1,
            rationale: "官方文档列出四个核心问题：1) 单服务器存储空间限制；2) 计算资源无法支撑并发用户；3) 网络带宽瓶颈；4) 地理分布要求。"
        },
        {
            id: "w5-3-q3",
            question: "MongoDB 分片架构的三个核心组件是什么？",
            options: [
                "Primary、Secondary、Arbiter",
                "Shard、Config Servers、Mongos",
                "Master、Slave、Proxy",
                "Leader、Follower、Observer"
            ],
            answer: 1,
            rationale: "MongoDB 官方文档描述三个组件：Shard（存储数据子集）、Config Servers（存储集群元数据）、Mongos（客户端入口路由器）。"
        },
        {
            id: "w5-3-q4",
            question: "Azure 文档描述的三种分片策略中，哪种最适合范围查询？",
            options: [
                "Lookup（查找策略）",
                "Range（范围策略）",
                "Hash（哈希策略）",
                "Round-Robin（轮询策略）"
            ],
            answer: 1,
            rationale: "Azure 文档详述 Range 策略：'按值范围分配，便于范围查询但易产生热点'——相关数据在同一分片，范围查询效率高。"
        },
        {
            id: "w5-3-q5",
            question: "MongoDB 文档警告哪种类型的分片键会导致热点问题？",
            options: [
                "随机生成的 UUID",
                "单调递增的分片键（如时间戳）",
                "哈希后的用户 ID",
                "地理位置字段"
            ],
            answer: 1,
            rationale: "MongoDB 文档警告：'单调递增的分片键（如时间戳）导致热点'——所有新数据都写入同一个分片。"
        },
        {
            id: "w5-3-q6",
            question: "根据 Azure 文档，当查询不包含分片键时会发生什么？",
            options: [
                "查询会失败",
                "需要 fan-out/parallel queries 向所有分片发送查询",
                "自动使用默认分片",
                "查询会被缓存"
            ],
            answer: 1,
            rationale: "Azure 文档指出：当查询不包含分片键时，需要'fan-out/parallel queries'——向所有分片发送查询并合并结果。"
        },
        {
            id: "w5-3-q7",
            question: "Hash 分片策略的主要优势是什么？",
            options: [
                "支持高效的范围查询",
                "数据分布均匀，减少热点",
                "查找速度最快",
                "支持跨分片事务"
            ],
            answer: 1,
            rationale: "Azure 文档描述 Hash 策略：'哈希函数均匀分布数据，减少热点'，但范围查询需扫描所有分片。"
        },
        {
            id: "w5-3-q8",
            question: "DigitalOcean 文档指出 Sharding 的主要缺点之一是什么？",
            options: [
                "无法支持大数据量",
                "数据再平衡操作复杂（resharding）",
                "不支持并发访问",
                "查询延迟过高"
            ],
            answer: 1,
            rationale: "DigitalOcean 文档警告：'Difficulty in rebalancing data during resharding operations'——数据再平衡操作复杂。"
        },
        {
            id: "w5-3-q9",
            question: "根据 Azure 文档，Sharding 模式对数据一致性有什么影响？",
            options: [
                "保证强一致性",
                "通常需要接受最终一致性",
                "不影响一致性",
                "只支持读取一致性"
            ],
            answer: 1,
            rationale: "Azure 文档指出：'Eventual consistency often required instead of strong consistency'——跨分片事务复杂，通常需要接受最终一致性。"
        },
        {
            id: "w5-3-q10",
            question: "Azure 文档中的 Lookup 分片策略有什么优势？",
            options: [
                "不需要维护映射表",
                "支持虚拟分片，提供灵活的再平衡能力",
                "查询速度最快",
                "自动处理热点"
            ],
            answer: 1,
            rationale: "Azure 文档描述 Lookup 策略：'Maps shard keys to physical storage using a lookup table，支持 virtual sharding (flexible, allows rebalancing without code changes)'。"
        },
        {
            id: "w5-3-q11",
            question: "根据 MongoDB 文档，好的分片键应该具备哪些特征？",
            options: [
                "简短、可变、不唯一",
                "高基数、均匀分布、便于查询",
                "固定长度、加密、只读",
                "自增、时间相关、可排序"
            ],
            answer: 1,
            rationale: "MongoDB 文档强调分片键必须具备：高基数——大量不同的值；均匀分布——避免热点数据；便于查询——常用于过滤条件。"
        },
        {
            id: "w5-3-q12",
            question: "Azure Well-Architected Framework 中，Sharding 模式如何支持成本优化？",
            options: [
                "减少存储空间使用",
                "使用多个商用服务器替代昂贵的单服务器",
                "减少网络流量",
                "降低开发成本"
            ],
            answer: 1,
            rationale: "Azure 文档指出 Sharding 支持成本优化：'Multiple commodity servers vs. expensive single server'——多个商用服务器替代昂贵的单服务器。"
        }
    ],
    "w5-4": [
        {
            id: "w5-4-q1",
            question: "Azure 官方文档对 Materialized View 的核心定义是什么？",
            options: [
                "数据库的实时视图",
                "在源数据格式不适合查询时，提前生成并存储预填充的数据视图",
                "数据库的备份副本",
                "用于数据加密的安全视图"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：Materialized View 是'在源数据格式不适合查询时，提前生成并存储预填充的数据视图'。"
        },
        {
            id: "w5-4-q2",
            question: "根据官方文档，Materialized View 的三个关键特性是什么？",
            options: [
                "加密存储、访问控制、审计日志",
                "完全可重建、应用不直接更新、仅包含查询所需数据",
                "实时更新、强一致性、高可用性",
                "分布式存储、自动扩展、自动备份"
            ],
            answer: 1,
            rationale: "官方文档强调三点：1) 完全可重建——可从源数据重新生成；2) 应用不直接更新——属于特殊缓存机制；3) 仅包含查询所需数据。"
        },
        {
            id: "w5-4-q3",
            question: "PostgreSQL 官方文档中，物化视图与普通视图的主要区别是什么？",
            options: [
                "物化视图支持事务，普通视图不支持",
                "物化视图持久化存储数据，普通视图每次查询时计算",
                "物化视图可以直接更新，普通视图不能",
                "物化视图是只读的，普通视图可读写"
            ],
            answer: 1,
            rationale: "PostgreSQL 文档指出：物化视图'持久化存储查询结果'，与普通视图的区别是'数据实际存储而非每次查询时计算'。"
        },
        {
            id: "w5-4-q4",
            question: "Azure 文档列出的四种物化视图更新策略是什么？",
            options: [
                "同步、异步、批量、增量",
                "事件驱动、定时任务、手动触发、事件溯源",
                "全量、增量、差异、快照",
                "实时、延迟、定期、按需"
            ],
            answer: 1,
            rationale: "Azure 文档列出四种更新方式：1) 事件驱动——源数据变化时自动触发；2) 定时任务——按计划定期更新；3) 手动触发；4) 事件溯源配合。"
        },
        {
            id: "w5-4-q5",
            question: "根据 PostgreSQL 文档示例，使用物化视图后精确查询的性能提升是多少？",
            options: [
                "2 倍",
                "10 倍",
                "1600 倍以上（从 188ms 到 0.117ms）",
                "100 倍"
            ],
            answer: 2,
            rationale: "PostgreSQL 文档示例显示：使用物化视图后，精确查询从 188ms 降低到 0.117ms（1600 倍+）。"
        },
        {
            id: "w5-4-q6",
            question: "根据 Azure 文档，以下哪种场景不适合使用 Materialized View？",
            options: [
                "复杂查询场景",
                "源数据变化频繁",
                "离线场景",
                "微服务跨服务整合"
            ],
            answer: 1,
            rationale: "官方文档明确：不适用于'源数据变化频繁（更新开销大）'的场景。每次源数据变化都需要更新物化视图，成本过高。"
        },
        {
            id: "w5-4-q7",
            question: "Martin Fowler 关于 CQRS 与 Materialized View 的关系是什么？",
            options: [
                "两者完全无关",
                "CQRS 分离读写模型，物化视图是实现读模型的常用技术",
                "物化视图取代了 CQRS",
                "CQRS 只能使用物化视图"
            ],
            answer: 1,
            rationale: "Martin Fowler 解释：CQRS 将'读取和写入操作分离为不同的模型'，物化视图是实现读模型的常用技术。"
        },
        {
            id: "w5-4-q8",
            question: "PostgreSQL 中如何更新物化视图的数据？",
            options: [
                "使用 UPDATE 语句",
                "使用 REFRESH MATERIALIZED VIEW 命令",
                "自动实时更新",
                "使用 INSERT 语句"
            ],
            answer: 1,
            rationale: "PostgreSQL 官方文档：使用 REFRESH MATERIALIZED VIEW 重新生成最新数据，物化视图不能直接 UPDATE。"
        },
        {
            id: "w5-4-q9",
            question: "根据 Azure 文档，Materialized View 为什么被称为'特殊的缓存机制'？",
            options: [
                "因为它存储在内存中",
                "因为应用不直接更新，数据可从源重建",
                "因为它有过期时间",
                "因为它支持分布式存储"
            ],
            answer: 1,
            rationale: "官方文档强调：物化视图'应用不直接更新，属于特殊的缓存机制'，数据可以从源数据完全重建。"
        },
        {
            id: "w5-4-q10",
            question: "Azure 文档指出物化视图的存储位置有什么灵活性？",
            options: [
                "必须与源数据在同一位置",
                "无需与源数据位置相同，可存储在缓存或不同分区",
                "只能存储在内存中",
                "必须存储在关系数据库中"
            ],
            answer: 1,
            rationale: "Azure 文档指出：物化视图'无需与源数据位置相同'，可存储在缓存或不同分区，支持二级索引优化性能。"
        },
        {
            id: "w5-4-q11",
            question: "根据官方文档，物化视图模式的主要一致性权衡是什么？",
            options: [
                "保证强一致性但性能差",
                "视图可能与源数据不一致，存在数据延迟",
                "只支持最终一致性",
                "不支持任何一致性保证"
            ],
            answer: 1,
            rationale: "Azure 文档警告：物化视图'可能与源数据不一致'，存在数据延迟。对于需要实时数据的场景，物化视图不合适。"
        },
        {
            id: "w5-4-q12",
            question: "根据 Azure 文档，Materialized View 适用于哪种微服务场景？",
            options: [
                "服务间的同步调用",
                "跨服务整合数据，保持服务间松耦合",
                "服务注册与发现",
                "服务网格通信"
            ],
            answer: 1,
            rationale: "Azure 文档列出适用场景包括：'微服务架构：跨服务整合数据，保持服务间松耦合'。物化视图聚合多个服务的数据供查询。"
        }
    ]
}
