import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "w9-1": {
        lessonId: "w9-1",
        background: [
            "【EXPLAIN 输出结构】MySQL EXPLAIN 提供 12 列信息：id（SELECT 标识符）、select_type（查询类型）、table（表名）、type（访问类型）、possible_keys（候选索引）、key（实际使用索引）、key_len（索引长度）、ref（比较列）、rows（估算行数）、filtered（过滤百分比）、Extra（额外信息）。",
            "【访问类型效率排序】type 列从最优到最差：system > const > eq_ref > ref > fulltext > ref_or_null > index_merge > range > index > ALL。'ALL' 表示全表扫描，是最差的情况；'const' 表示最多匹配一行，通常用于主键或唯一索引。",
            "【Extra 列关键信息】'Using filesort' 表示需要额外排序（昂贵操作）；'Using temporary' 表示创建临时表；'Using index' 表示覆盖索引扫描（最优）；'Using index condition' 表示使用了 ICP（Index Condition Pushdown）优化。",
            "【B-Tree 索引结构】索引维护平衡树结构实现高效搜索，叶节点组成双向链表支持范围查询和顺序访问。'Use The Index, Luke' 强调：复合索引的列顺序至关重要，特别是对于范围查询。",
            "【PostgreSQL EXPLAIN ANALYZE】PostgreSQL 的 EXPLAIN ANALYZE 不仅显示计划还实际执行查询，对比计划器预估与实际执行情况，帮助识别统计信息不准确导致的性能问题。"
        ],
        keyDifficulties: [
            "【索引失效场景】在索引列上使用函数（如 WHERE YEAR(date_col) = 2024）会导致索引失效；类型不匹配（VARCHAR vs CHAR）阻止索引使用；数学运算（WHERE col + 1 = 10）同样无法利用索引。",
            "【复合索引列顺序】复合索引遵循最左前缀原则。对于索引 (a, b, c)：WHERE a=1 AND b=2 可以完全利用；WHERE b=2 无法使用该索引；范围查询（如 a > 5）之后的列无法利用索引。",
            "【rows 估算与实际差异】EXPLAIN 的 rows 是基于统计信息的估算值，可能与实际相差很大。执行 ANALYZE TABLE 更新统计信息可以改善优化器决策。多表连接的代价估算是各表 rows 的乘积。",
            "【覆盖索引的权衡】覆盖索引（'Using index'）可以避免回表查询，但增加索引列会增加索引大小和写入开销。需要权衡读取性能和写入成本。"
        ],
        handsOnPath: [
            "使用 EXPLAIN 分析简单查询：EXPLAIN SELECT * FROM users WHERE status = 'active' AND age > 30; 观察 type 和 possible_keys。",
            "对比有无索引的执行计划：先执行 EXPLAIN，然后 CREATE INDEX idx_status_age ON users(status, age)，再次执行 EXPLAIN 观察变化。",
            "识别全表扫描：查找 type = ALL 且 rows 值很大的情况，考虑添加索引或优化 WHERE 条件。",
            "测试覆盖索引：CREATE INDEX idx_covering ON orders(user_id, status, created_at); 查询只涉及索引列时应看到 'Using index'。",
            "使用 EXPLAIN ANALYZE（PostgreSQL）或 EXPLAIN FORMAT=JSON（MySQL）获取更详细的执行信息。"
        ],
        selfCheck: [
            "EXPLAIN 输出的 type 列中，哪些值表示高效访问？哪些需要优化？",
            "什么是覆盖索引？它如何提高查询性能？",
            "复合索引 (a, b, c) 能支持哪些 WHERE 条件的查询？",
            "Extra 列中 'Using filesort' 和 'Using temporary' 意味着什么？",
            "为什么在索引列上使用函数会导致索引失效？"
        ],
        extensions: [
            "研究 MySQL 8.0 的新特性：不可见索引、降序索引、函数索引。",
            "学习 PostgreSQL 的 pg_stat_statements 扩展追踪慢查询。",
            "了解查询重写优化器（Query Rewriter）如何自动优化查询。",
            "研究直方图统计（Histogram Statistics）如何改善基数估算。"
        ],
        sourceUrls: [
            "https://dev.mysql.com/doc/refman/8.0/en/explain-output.html",
            "https://use-the-index-luke.com/",
            "https://www.postgresql.org/docs/current/performance-tips.html"
        ]
    },
    "w9-2": {
        lessonId: "w9-2",
        background: [
            "【连接池核心公式】HikariCP 推荐的连接池大小公式：connections = ((core_count × 2) + effective_spindle_count)。对于 4 核 1 磁盘的服务器，9-10 个连接就是最优配置，而非直觉上的 100+。",
            "【小池饱和原则】'You want a small pool, saturated with threads waiting for connections'——小连接池配合饱和等待是正确策略。10000 个并发用户使用 10000 个连接池是'sheer insanity'，因为上下文切换开销会压垮系统。",
            "【事务隔离级别】MySQL InnoDB 默认使用 REPEATABLE READ。四种隔离级别：READ UNCOMMITTED（脏读）、READ COMMITTED（不可重复读）、REPEATABLE READ（幻读，但 InnoDB 通过 next-key locking 防止）、SERIALIZABLE（完全隔离）。",
            "【锁机制差异】REPEATABLE READ 使用 gap locks 和 next-key locks 防止幻读；READ COMMITTED 只锁定索引记录不锁定间隙，允许在锁定记录旁插入新行，但可能出现幻读问题。",
            "【死锁定义】死锁是'多个事务无法继续进行，因为每个事务都持有其他事务需要的锁'的情况。InnoDB 默认启用死锁检测（innodb_deadlock_detect = ON），自动回滚其中一个事务。"
        ],
        keyDifficulties: [
            "【死锁预防策略】避免死锁的关键：所有事务以相同顺序操作多个表；保持事务简短减少持有锁时间；在 SELECT ... FOR UPDATE 和 UPDATE ... WHERE 使用的列上创建索引；隔离级别不影响死锁（死锁由写操作引发）。",
            "【连接池死锁公式】防止连接池死锁：pool size = Tn × (Cm - 1) + 1，其中 Tn = 最大线程数，Cm = 每个线程最大同时连接数。如果应用在一个事务中需要多个连接，必须考虑此公式。",
            "【长事务的危害】长事务持有锁时间长，阻塞其他事务；增加死锁概率；占用连接池资源；undo log 无法及时清理导致表空间膨胀。应尽可能缩短事务范围。",
            "【半一致性读】READ COMMITTED 级别的 UPDATE 使用半一致性读（semi-consistent read）：获取每行的排他锁，释放不匹配条件的行的锁——这减少了死锁概率但可能导致幻读。"
        ],
        handsOnPath: [
            "配置 HikariCP：设置 maximumPoolSize 基于公式计算，通常 10-20 个连接；connectionTimeout 设置为 30 秒；idleTimeout 设置为 10 分钟。",
            "测试事务隔离级别：开两个会话，在 REPEATABLE READ 下测试同一行的并发更新，观察锁等待行为。",
            "模拟死锁：会话 A 锁表 t1 再锁表 t2，会话 B 反向操作，使用 SHOW ENGINE INNODB STATUS 查看死锁信息。",
            "启用死锁日志：SET GLOBAL innodb_print_all_deadlocks = ON; 将所有死锁信息记录到错误日志。",
            "监控连接池：使用 HikariCP 的 metrics 集成，观察 connectionAcquireTime、activeConnections、pendingThreads 等指标。"
        ],
        selfCheck: [
            "HikariCP 推荐的连接池大小公式是什么？为什么不应该使用大连接池？",
            "四种事务隔离级别各自解决什么问题？MySQL 默认使用哪个？",
            "REPEATABLE READ 和 READ COMMITTED 在锁机制上有什么区别？",
            "如何避免数据库死锁？应用层应如何处理死锁？",
            "什么是半一致性读（semi-consistent read）？它在什么场景下起作用？"
        ],
        extensions: [
            "研究 Druid 连接池的监控能力和 SQL 防火墙功能。",
            "学习分布式事务的隔离级别保证（如 Spanner 的外部一致性）。",
            "了解乐观锁与悲观锁的选择策略。",
            "研究 MySQL 8.0 的 NOWAIT 和 SKIP LOCKED 选项。"
        ],
        sourceUrls: [
            "https://github.com/brettwooldridge/HikariCP/wiki",
            "https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-isolation-levels.html",
            "https://dev.mysql.com/doc/refman/8.0/en/innodb-deadlocks.html"
        ]
    },
    "w9-3": {
        lessonId: "w9-3",
        background: [
            "【MySQL 复制架构】MySQL 复制默认是异步的：源服务器执行写入后立即返回，副本异步应用变更。架构为：Source Server → Binary Log → Replica 1/2/3。副本可以处理读请求，实现读扩展。",
            "【复制格式类型】三种 binlog 格式：SBR（Statement-Based，复制 SQL 语句，带宽低）、RBR（Row-Based，只复制变更的行，对所有语句安全）、MBR（Mixed，混合模式，根据语句自动选择）。",
            "【GTID 复制】Global Transaction Identifiers 是推荐的复制方式：事务级别、位置无关、简化故障转移和恢复。只要所有源事务都已应用到副本，就能保证一致性。",
            "【半同步复制】Source COMMIT 后等待至少一个副本确认已记录变更才返回。提供比异步更强的持久性保证，但增加延迟。延迟复制可用于灾难恢复——副本故意落后 N 秒。",
            "【ProxySQL 读写分离】ProxySQL 使用 hostgroups 组织后端服务器：hostgroup 0 用于主库写操作，hostgroup 1 用于从库读操作。通过 mysql_query_rules 配置 SQL 模式匹配实现路由。"
        ],
        keyDifficulties: [
            "【复制延迟问题】从库应用 binlog 需要时间，读写分离可能读到过期数据。解决方案：强制走主库（关键业务）、延迟检测（max_replication_lag）、读自己写（session 粘性）。",
            "【事务内读写处理】ShardingSphere 支持事务感知的读写分离：活跃事务内的查询可能需要路由到主库，防止脏读并保持一致性。这需要配合分布式事务（XA、Seata）使用。",
            "【ProxySQL 查询规则】规则按顺序匹配：^SELECT.* 路由到从库（hostgroup 1），^SELECT.*FOR UPDATE 必须路由到主库（hostgroup 0，优先匹配）。apply=1 表示匹配后停止继续匹配。",
            "【读写分离中间件选型】ProxySQL 支持查询缓存、连接复用、后端健康检查；ShardingSphere 除读写分离外还支持分片、分布式事务。选择取决于是否需要分片能力。"
        ],
        handsOnPath: [
            "配置 MySQL 主从复制：在主库启用 binlog（log_bin = mysql-bin），配置 server-id，创建复制用户，在从库执行 CHANGE REPLICATION SOURCE。",
            "配置 ProxySQL 读写分离：定义 hostgroups，INSERT INTO mysql_servers，配置 mysql_query_rules 匹配 SELECT 模式。",
            "测试复制延迟：SHOW REPLICA STATUS\\G 查看 Seconds_Behind_Source，模拟主库写入压力观察延迟变化。",
            "配置 max_replication_lag：在 ProxySQL 中设置 max_replication_lag=60，延迟超过 60 秒的从库不接收读请求。",
            "使用 ShardingSphere 配置读写分离：在 YAML 中定义 readwrite-splitting 规则，配置负载均衡策略和主库强制路由。"
        ],
        selfCheck: [
            "MySQL 复制的三种 binlog 格式各有什么特点？",
            "什么是 GTID 复制？它相比传统复制有什么优势？",
            "如何处理读写分离中的复制延迟问题？",
            "ProxySQL 的 hostgroup 和 query_rules 如何配合实现读写分离？",
            "为什么事务内的读操作可能需要路由到主库？"
        ],
        extensions: [
            "研究 MySQL Group Replication 的多主架构。",
            "学习 Orchestrator 如何实现 MySQL 高可用和自动故障转移。",
            "了解 Vitess 如何在分片架构上实现读写分离。",
            "研究 AWS Aurora 的读写分离实现和多读副本架构。"
        ],
        sourceUrls: [
            "https://dev.mysql.com/doc/refman/8.0/en/replication.html",
            "https://proxysql.com/documentation/",
            "https://shardingsphere.apache.org/document/current/en/features/readwrite-splitting/"
        ]
    },
    "w9-4": {
        lessonId: "w9-4",
        background: [
            "【分片定义】Vitess 文档定义：'A shard is a subset of a keyspace'——分片是键空间的子集。每个分片通常包含一个 MySQL 主节点和多个副本。分片数量可以在运行时动态调整（resharding）。",
            "【垂直分片 vs 水平分片】垂直分片按业务领域拆分（用户库、订单库）；水平分片将同一表的数据分散到多个节点。分片'splitting your data to reside in smaller chunks across distinct separate buckets'。",
            "【分片键选择】分片键决定数据分布，一旦确定需要'ensure the sharding key is in place throughout your application'。常用方案：客户 ID（SaaS 多租户）、用户 ID（社交应用）、订单 ID（电商系统）。",
            "【Saga 模式】Saga 是'a sequence of local transactions'，每个步骤更新本地数据库并通过消息触发下一步。分为 Choreography（事件驱动）和 Orchestration（中央协调器）两种实现方式。",
            "【补偿事务】与 ACID 事务自动回滚不同，Saga 需要开发者设计显式的补偿事务'undo the changes made by preceding local transactions'。这增加了开发复杂度但实现了跨服务的最终一致性。"
        ],
        keyDifficulties: [
            "【跨分片查询】分片后 JOIN 和聚合变得复杂。替代方案：数据冗余（反规范化）、异步同步到汇总表、在应用层聚合、使用专门的分析数据库。避免跨分片事务是分片设计的核心原则。",
            "【热点问题】即使使用哈希分片，热点数据仍可能导致不均衡。文章建议使用哈希分布'distributes data more evenly'而非范围映射——防止早期客户数据过度集中在少数分片。",
            "【分片 ≠ 节点】'Shards are logical data groupings, not physical servers'——多个分片可以位于同一节点。这允许通过移动分片实现灵活扩展，而无需重构数据模型。",
            "【Saga vs 2PC】两阶段提交（2PC）'is not an option'在分布式系统中——协调器故障会阻塞所有参与者。Saga 通过异步事件或命令协调独立的本地事务，牺牲隔离性换取可用性。"
        ],
        handsOnPath: [
            "设计分片策略：分析业务数据模型，识别适合作为分片键的字段，评估数据分布均匀性。",
            "配置 Vitess 分片：创建 keyspace，定义 vindex（hash/range），配置分片范围（如 -80, 80-）。",
            "实现 Saga 模式：定义服务间的事件流，为每个步骤设计补偿事务，使用消息队列保证可靠传递。",
            "处理跨分片查询：将常用 JOIN 数据冗余到查询侧，或使用 Elasticsearch 等搜索引擎支持复杂查询。",
            "监控分片健康：跟踪各分片的数据量、QPS、延迟，识别热点分片并考虑重新分片。"
        ],
        selfCheck: [
            "垂直分片和水平分片的核心区别是什么？各适用于什么场景？",
            "选择分片键时需要考虑哪些因素？",
            "为什么要避免跨分片事务？有哪些替代方案？",
            "Saga 模式的 Choreography 和 Orchestration 有什么区别？",
            "为什么说两阶段提交不适合微服务架构？"
        ],
        extensions: [
            "研究 CockroachDB 如何实现透明分片和分布式事务。",
            "学习 TiDB 的自动分片和在线扩缩容能力。",
            "了解 Seata 的 AT 模式如何简化分布式事务开发。",
            "研究事件溯源（Event Sourcing）与 Saga 模式的结合使用。"
        ],
        sourceUrls: [
            "https://vitess.io/docs/concepts/shard/",
            "https://www.citusdata.com/blog/2018/01/10/sharding-in-plain-english/",
            "https://microservices.io/patterns/data/saga.html"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "w9-1": [
        {
            id: "w9-1-q1",
            question: "MySQL EXPLAIN 输出的 type 列中，哪个值表示全表扫描？",
            options: [
                "index",
                "range",
                "ALL",
                "ref"
            ],
            answer: 2,
            rationale: "type = ALL 表示全表扫描，是最差的访问类型。从最优到最差排序：system > const > eq_ref > ref > range > index > ALL。"
        },
        {
            id: "w9-1-q2",
            question: "EXPLAIN 输出的 Extra 列中，'Using filesort' 表示什么？",
            options: [
                "使用了覆盖索引",
                "使用了 ICP 优化",
                "需要额外的排序操作（昂贵）",
                "创建了临时表"
            ],
            answer: 2,
            rationale: "'Using filesort' 表示需要额外的排序过程，是昂贵操作；'Using temporary' 表示创建临时表；'Using index' 才表示覆盖索引。"
        },
        {
            id: "w9-1-q3",
            question: "复合索引 (a, b, c) 能够支持以下哪个查询？",
            options: [
                "WHERE b = 2 AND c = 3",
                "WHERE c = 3",
                "WHERE a = 1 AND c = 3",
                "WHERE a = 1 AND b > 2"
            ],
            answer: 3,
            rationale: "复合索引遵循最左前缀原则。WHERE a=1 AND b>2 可以使用索引的 a 和 b 部分。WHERE b=2 或 WHERE c=3 无法使用索引因为缺少最左列 a。"
        },
        {
            id: "w9-1-q4",
            question: "为什么在索引列上使用函数（如 WHERE YEAR(date_col) = 2024）会导致索引失效？",
            options: [
                "函数计算太慢",
                "MySQL 不支持日期函数",
                "函数包裹的列无法直接与索引值比较",
                "需要更多内存"
            ],
            answer: 2,
            rationale: "'Use The Index, Luke' 指出：在索引列上使用函数（wrapping columns in functions）会阻止索引使用，因为优化器无法将函数结果与索引值直接匹配。"
        },
        {
            id: "w9-1-q5",
            question: "什么是覆盖索引（Covering Index）？",
            options: [
                "覆盖所有表的索引",
                "索引包含查询所需的所有列，无需回表",
                "主键索引",
                "唯一索引"
            ],
            answer: 1,
            rationale: "覆盖索引是指索引包含查询所需的全部列，避免回表查询（'index-only scan'）。EXPLAIN 显示 'Using index' 表示使用了覆盖索引。"
        },
        {
            id: "w9-1-q6",
            question: "PostgreSQL 的 EXPLAIN ANALYZE 与 EXPLAIN 有什么区别？",
            options: [
                "EXPLAIN ANALYZE 更快",
                "EXPLAIN ANALYZE 只显示计划不执行",
                "EXPLAIN ANALYZE 实际执行查询并显示真实统计",
                "没有区别"
            ],
            answer: 2,
            rationale: "EXPLAIN 只显示执行计划的预估，EXPLAIN ANALYZE '实际执行查询并显示真实执行统计'，对比计划器预估与实际情况。"
        },
        {
            id: "w9-1-q7",
            question: "EXPLAIN 中 rows 列的值是什么？",
            options: [
                "实际扫描的行数",
                "表的总行数",
                "优化器基于统计信息的估算行数",
                "索引的行数"
            ],
            answer: 2,
            rationale: "rows 是'基于统计信息的估算值'，可能与实际相差很大。执行 ANALYZE TABLE 可以更新统计信息改善估算准确性。"
        },
        {
            id: "w9-1-q8",
            question: "以下哪种情况会导致索引失效？",
            options: [
                "使用等值比较 WHERE col = 'value'",
                "类型不匹配，如 VARCHAR(10) 与 CHAR(15) 比较",
                "使用范围查询 WHERE col > 100",
                "使用主键查询"
            ],
            answer: 1,
            rationale: "MySQL 文档指出类型不匹配（'VARCHAR(10) vs CHAR(15)'）会阻止索引使用。需要统一列类型才能正确使用索引。"
        },
        {
            id: "w9-1-q9",
            question: "EXPLAIN 输出的 type = 'const' 表示什么？",
            options: [
                "使用常量值",
                "最多匹配一行，通常用于主键或唯一索引",
                "全表扫描",
                "使用临时表"
            ],
            answer: 1,
            rationale: "type = const 表示 'AT MOST one matching row'，通常出现在使用主键或唯一索引进行等值查询时，效率非常高。"
        },
        {
            id: "w9-1-q10",
            question: "如何更新 MySQL 的统计信息以改善查询优化？",
            options: [
                "OPTIMIZE TABLE",
                "ANALYZE TABLE",
                "REPAIR TABLE",
                "FLUSH TABLES"
            ],
            answer: 1,
            rationale: "ANALYZE TABLE 命令更新表的统计信息，帮助优化器做出更准确的索引选择和行数估算。"
        },
        {
            id: "w9-1-q11",
            question: "B-Tree 索引叶节点的特殊结构是什么？",
            options: [
                "单向链表",
                "双向链表，支持范围查询和顺序访问",
                "哈希表",
                "二叉树"
            ],
            answer: 1,
            rationale: "'Use The Index, Luke' 描述 B-Tree 索引叶节点'arranged as a linked list'（双向链表），支持高效的范围查询和顺序扫描。"
        },
        {
            id: "w9-1-q12",
            question: "多表连接查询的代价如何估算？",
            options: [
                "各表行数相加",
                "最大表的行数",
                "各表 rows 的乘积",
                "最小表的行数"
            ],
            answer: 2,
            rationale: "连接代价估算为 'rows_product = rows[table1] × rows[table2] × ...'。降低各表的估算行数（如通过索引）可以显著减少连接代价。"
        }
    ],
    "w9-2": [
        {
            id: "w9-2-q1",
            question: "HikariCP 推荐的连接池大小公式是什么？",
            options: [
                "connections = 并发用户数 / 10",
                "connections = ((core_count × 2) + effective_spindle_count)",
                "connections = 100",
                "connections = 数据库表数量"
            ],
            answer: 1,
            rationale: "HikariCP 文档推荐公式：'connections = ((core_count × 2) + effective_spindle_count)'。对于 4 核 1 磁盘服务器，9-10 个连接就是最优配置。"
        },
        {
            id: "w9-2-q2",
            question: "MySQL InnoDB 的默认事务隔离级别是什么？",
            options: [
                "READ UNCOMMITTED",
                "READ COMMITTED",
                "REPEATABLE READ",
                "SERIALIZABLE"
            ],
            answer: 2,
            rationale: "MySQL 官方文档明确：'Default Level: REPEATABLE READ'。在此级别下，同一事务内多次读取结果一致。"
        },
        {
            id: "w9-2-q3",
            question: "死锁（Deadlock）的定义是什么？",
            options: [
                "查询执行太慢",
                "多个事务互相持有对方需要的锁，无法继续进行",
                "连接池耗尽",
                "内存不足"
            ],
            answer: 1,
            rationale: "死锁是'多个事务无法继续进行，因为每个事务都持有其他事务需要的锁'的情况。InnoDB 会自动检测并回滚其中一个事务。"
        },
        {
            id: "w9-2-q4",
            question: "REPEATABLE READ 和 READ COMMITTED 在锁机制上的主要区别是什么？",
            options: [
                "没有区别",
                "REPEATABLE READ 使用 gap locks 防止幻读，READ COMMITTED 只锁记录不锁间隙",
                "READ COMMITTED 更严格",
                "REPEATABLE READ 不使用锁"
            ],
            answer: 1,
            rationale: "'REPEATABLE READ uses gap locks and next-key locks'，而 'READ COMMITTED locks only index records, NOT gaps'，因此 READ COMMITTED 可能出现幻读。"
        },
        {
            id: "w9-2-q5",
            question: "如何避免数据库死锁？",
            options: [
                "使用更高的隔离级别",
                "所有事务以相同顺序操作多个表，保持事务简短",
                "使用更多连接",
                "禁用事务"
            ],
            answer: 1,
            rationale: "MySQL 文档建议：'所有事务以相同顺序操作多个表；保持事务简短减少持有锁时间；在相关列上创建索引'。注意隔离级别不影响死锁。"
        },
        {
            id: "w9-2-q6",
            question: "HikariCP 强调大连接池是错误的原因是什么？",
            options: [
                "占用太多端口",
                "上下文切换开销使大连接池适得其反",
                "配置太复杂",
                "不支持多线程"
            ],
            answer: 1,
            rationale: "HikariCP 文档指出 10000 个连接'would be sheer insanity'，因为上下文切换开销会压垮系统。正确策略是'a small pool, saturated with threads waiting'。"
        },
        {
            id: "w9-2-q7",
            question: "防止连接池死锁的公式是什么？",
            options: [
                "pool size = 线程数 + 1",
                "pool size = Tn × (Cm - 1) + 1",
                "pool size = 表数量",
                "pool size = CPU 核数 × 4"
            ],
            answer: 1,
            rationale: "HikariCP 文档给出公式：'pool size = Tn × (Cm - 1) + 1'，其中 Tn = 最大线程数，Cm = 每个线程最大同时连接数。"
        },
        {
            id: "w9-2-q8",
            question: "READ COMMITTED 级别的 UPDATE 使用什么特殊机制？",
            options: [
                "乐观锁",
                "半一致性读（semi-consistent read）",
                "快照隔离",
                "MVCC"
            ],
            answer: 1,
            rationale: "READ COMMITTED 的 UPDATE 使用'semi-consistent read'：获取每行排他锁，释放不匹配条件的行的锁——这减少死锁概率但可能导致幻读。"
        },
        {
            id: "w9-2-q9",
            question: "如何查看 MySQL 最后一次死锁的信息？",
            options: [
                "SHOW DEADLOCKS",
                "SHOW ENGINE INNODB STATUS",
                "SELECT * FROM mysql.deadlocks",
                "SHOW LOCKS"
            ],
            answer: 1,
            rationale: "'SHOW ENGINE INNODB STATUS\\G' 命令显示最后一个 InnoDB 用户事务中的死锁信息。"
        },
        {
            id: "w9-2-q10",
            question: "READ UNCOMMITTED 隔离级别的问题是什么？",
            options: [
                "性能太差",
                "可能读到未提交的数据（脏读）",
                "不支持并发",
                "锁太多"
            ],
            answer: 1,
            rationale: "READ UNCOMMITTED 'May read uncommitted versions of rows'，也称为'dirty read'（脏读），是最低的隔离级别。"
        },
        {
            id: "w9-2-q11",
            question: "InnoDB 死锁检测默认是什么状态？",
            options: [
                "默认关闭",
                "默认开启（innodb_deadlock_detect = ON）",
                "需要手动启用",
                "只在生产环境开启"
            ],
            answer: 1,
            rationale: "InnoDB 默认启用死锁检测（'innodb_deadlock_detect = ON'），自动检测死锁并回滚其中一个事务（牺牲者）。"
        },
        {
            id: "w9-2-q12",
            question: "SERIALIZABLE 隔离级别的特殊行为是什么？",
            options: [
                "禁用所有锁",
                "将普通 SELECT 隐式转换为 SELECT ... FOR SHARE",
                "不支持事务",
                "只允许读操作"
            ],
            answer: 1,
            rationale: "SERIALIZABLE 级别'Implicitly converts plain SELECT to SELECT ... FOR SHARE'（当 autocommit 禁用时），提供最严格的隔离但性能最差。"
        }
    ],
    "w9-3": [
        {
            id: "w9-3-q1",
            question: "MySQL 复制默认是什么类型？",
            options: [
                "同步复制",
                "异步复制",
                "半同步复制",
                "延迟复制"
            ],
            answer: 1,
            rationale: "MySQL 官方文档说明：'MySQL replication is asynchronous by default'，源服务器执行写入后立即返回，副本异步应用变更。"
        },
        {
            id: "w9-3-q2",
            question: "GTID 复制相比传统复制的主要优势是什么？",
            options: [
                "更快的复制速度",
                "事务级别、位置无关，简化故障转移和恢复",
                "支持更多副本",
                "占用更少磁盘空间"
            ],
            answer: 1,
            rationale: "GTID (Global Transaction Identifiers) 是'transactional and position-independent'，简化了故障转移和恢复过程，是推荐的复制方式。"
        },
        {
            id: "w9-3-q3",
            question: "三种 binlog 格式中，哪种对所有 SQL 语句都安全？",
            options: [
                "SBR (Statement-Based)",
                "RBR (Row-Based)",
                "MBR (Mixed)",
                "TEXT"
            ],
            answer: 1,
            rationale: "RBR (Row-Based Replication) '只复制变更的行，对所有语句安全'。SBR 复制语句本身，某些非确定性语句可能导致不一致。"
        },
        {
            id: "w9-3-q4",
            question: "半同步复制的特点是什么？",
            options: [
                "不等待任何确认就返回",
                "Source COMMIT 后等待至少一个副本确认已记录变更才返回",
                "等待所有副本确认",
                "只在特定时间同步"
            ],
            answer: 1,
            rationale: "半同步复制中 'Source COMMIT 后等待至少一个副本确认已记录变更才返回'，提供比异步更强的持久性保证。"
        },
        {
            id: "w9-3-q5",
            question: "ProxySQL 使用什么机制组织后端服务器？",
            options: [
                "服务器列表",
                "Hostgroups",
                "集群",
                "分片"
            ],
            answer: 1,
            rationale: "ProxySQL 使用 'hostgroups 组织后端服务器'：hostgroup 0 用于主库写操作，hostgroup 1 用于从库读操作。"
        },
        {
            id: "w9-3-q6",
            question: "如何处理读写分离中的复制延迟问题？",
            options: [
                "忽略延迟",
                "强制所有请求走主库",
                "使用 max_replication_lag 设置阈值，延迟过大时不路由到该从库",
                "增加从库数量"
            ],
            answer: 2,
            rationale: "ProxySQL 配置中'max_replication_lag=60'表示延迟超过 60 秒的从库不接收读请求，防止读到过期数据。"
        },
        {
            id: "w9-3-q7",
            question: "ProxySQL 查询规则中 apply=1 的含义是什么？",
            options: [
                "应用缓存",
                "匹配后停止继续匹配后续规则",
                "应用到所有服务器",
                "只应用一次"
            ],
            answer: 1,
            rationale: "在 mysql_query_rules 中 'apply=1 表示匹配后停止继续匹配'。这用于确保规则优先级，如 SELECT ... FOR UPDATE 应优先于普通 SELECT。"
        },
        {
            id: "w9-3-q8",
            question: "MySQL 复制架构中，副本端有哪些关键线程？",
            options: [
                "只有 SQL 线程",
                "IO 线程和 SQL/Applier 线程",
                "只有 IO 线程",
                "Dump 线程"
            ],
            answer: 1,
            rationale: "副本端有 'IO thread (receives binary log events)' 和 'SQL/Applier thread (applies events)'，还可能有 worker threads 支持并行执行。"
        },
        {
            id: "w9-3-q9",
            question: "ShardingSphere 如何处理事务内的读操作？",
            options: [
                "总是路由到从库",
                "总是路由到主库",
                "活跃事务内的查询可能需要路由到主库以保持一致性",
                "随机路由"
            ],
            answer: 2,
            rationale: "ShardingSphere 支持事务感知：'活跃事务内的查询可能需要路由到主库，防止脏读并保持一致性'。"
        },
        {
            id: "w9-3-q10",
            question: "延迟复制（Delayed Replication）的用途是什么？",
            options: [
                "提高性能",
                "降低成本",
                "灾难恢复——副本故意落后 N 秒可用于恢复误删数据",
                "负载均衡"
            ],
            answer: 2,
            rationale: "延迟复制让'副本故意落后 N 秒'，用于灾难恢复场景——如果主库误删数据，可以从延迟副本恢复。"
        },
        {
            id: "w9-3-q11",
            question: "哪个命令可以查看 MySQL 复制状态？",
            options: [
                "SHOW REPLICATION",
                "SHOW REPLICA STATUS",
                "SHOW SLAVE",
                "SHOW BINLOG"
            ],
            answer: 1,
            rationale: "'SHOW REPLICA STATUS\\G' 命令显示复制状态，关键指标包括 Seconds_Behind_Source、Last_Error 等。"
        },
        {
            id: "w9-3-q12",
            question: "ProxySQL 的 ^SELECT.*FOR UPDATE 规则为什么要路由到主库？",
            options: [
                "性能更好",
                "SELECT FOR UPDATE 会加锁，必须在主库执行",
                "从库不支持 SELECT",
                "减少主库压力"
            ],
            answer: 1,
            rationale: "'SELECT ... FOR UPDATE' 会获取排他锁，属于写操作语义，必须路由到主库（hostgroup 0）执行以确保数据一致性。"
        }
    ],
    "w9-4": [
        {
            id: "w9-4-q1",
            question: "Vitess 对分片（Shard）的定义是什么？",
            options: [
                "一个物理服务器",
                "一个数据库表",
                "一个键空间的子集",
                "一个数据中心"
            ],
            answer: 2,
            rationale: "Vitess 文档定义：'A shard is a subset of a keyspace'——分片是键空间的子集，通常包含一个主节点和多个副本。"
        },
        {
            id: "w9-4-q2",
            question: "垂直分片和水平分片的核心区别是什么？",
            options: [
                "垂直分片更快",
                "垂直分片按业务领域拆分，水平分片将同一表数据分散到多个节点",
                "水平分片不需要分片键",
                "没有区别"
            ],
            answer: 1,
            rationale: "垂直分片'按业务领域拆分'（如用户库、订单库），水平分片'将同一表的数据分散到多个节点'。两者可以结合使用。"
        },
        {
            id: "w9-4-q3",
            question: "选择分片键时的关键考虑是什么？",
            options: [
                "键越长越好",
                "一旦确定需要确保分片键贯穿整个应用",
                "随机选择即可",
                "只能使用数字类型"
            ],
            answer: 1,
            rationale: "分片键一旦确定需要'ensure the sharding key is in place throughout your application'——它决定数据分布且难以更改。"
        },
        {
            id: "w9-4-q4",
            question: "为什么推荐使用哈希分片而非范围分片？",
            options: [
                "哈希分片更简单",
                "哈希分布更均匀，避免早期数据过度集中",
                "范围分片不支持",
                "哈希分片更快"
            ],
            answer: 1,
            rationale: "文章建议使用哈希分布'distributes data more evenly'——防止顺序 ID 导致早期客户数据过度集中在少数分片。"
        },
        {
            id: "w9-4-q5",
            question: "Saga 模式的定义是什么？",
            options: [
                "一种缓存策略",
                "一系列本地事务，每个步骤更新数据库并通过消息触发下一步",
                "一种索引类型",
                "一种复制方式"
            ],
            answer: 1,
            rationale: "Saga 是'a sequence of local transactions'，每个步骤更新本地数据库并通过消息触发后续步骤，实现跨服务的最终一致性。"
        },
        {
            id: "w9-4-q6",
            question: "Saga 模式与两阶段提交（2PC）相比的主要区别是什么？",
            options: [
                "Saga 更快",
                "2PC 不可用于分布式系统，Saga 通过异步事件协调",
                "Saga 只支持单节点",
                "没有区别"
            ],
            answer: 1,
            rationale: "文章明确指出'2PC is not an option'在分布式系统中——协调器故障会阻塞参与者。Saga 通过异步事件或命令协调独立事务。"
        },
        {
            id: "w9-4-q7",
            question: "Saga 的 Choreography 和 Orchestration 有什么区别？",
            options: [
                "Choreography 需要中央协调器，Orchestration 通过事件驱动",
                "Choreography 通过事件驱动，Orchestration 使用中央协调器",
                "没有区别",
                "只有 Orchestration 支持补偿"
            ],
            answer: 1,
            rationale: "Choreography '服务发布领域事件自动触发其他服务动作'，Orchestration '中央协调器显式命令参与者执行本地事务'。"
        },
        {
            id: "w9-4-q8",
            question: "分片（Shards）和节点（Nodes）的关系是什么？",
            options: [
                "一个分片就是一个节点",
                "分片是逻辑数据分组，多个分片可以位于同一节点",
                "节点是分片的子集",
                "它们是同一概念"
            ],
            answer: 1,
            rationale: "'Shards are logical data groupings, not physical servers'——多个分片可以位于同一节点，允许灵活扩展。"
        },
        {
            id: "w9-4-q9",
            question: "跨分片 JOIN 的常用替代方案是什么？",
            options: [
                "禁止所有 JOIN",
                "数据冗余（反规范化）、异步同步到汇总表、应用层聚合",
                "使用更大的分片",
                "只使用主键"
            ],
            answer: 1,
            rationale: "跨分片 JOIN 替代方案包括：'数据冗余（反规范化）、异步同步到汇总表、在应用层聚合、使用专门的分析数据库'。"
        },
        {
            id: "w9-4-q10",
            question: "Saga 中的补偿事务是什么？",
            options: [
                "自动回滚",
                "开发者设计的显式操作，用于撤销前序事务的变更",
                "重试失败的事务",
                "日志记录"
            ],
            answer: 1,
            rationale: "与 ACID 事务自动回滚不同，Saga 需要开发者设计'compensating transactions that undo the changes made by preceding local transactions'。"
        },
        {
            id: "w9-4-q11",
            question: "Vitess 的分片命名规则是什么？",
            options: [
                "使用数字 1, 2, 3...",
                "使用十六进制表示法，范围左闭右开",
                "使用字母 A, B, C...",
                "随机命名"
            ],
            answer: 1,
            rationale: "Vitess 分片'notation is hexadecimal'，如 '-80' 表示小于 0x80 的所有值，'80-' 表示大于等于 0x80 的值。"
        },
        {
            id: "w9-4-q12",
            question: "Vitess 支持在运行时动态调整分片吗？",
            options: [
                "不支持，需要停机",
                "支持 resharding，可以在线调整分片数量",
                "只支持增加分片",
                "只支持减少分片"
            ],
            answer: 1,
            rationale: "Vitess 支持'resharding, in which the number of shards is changed on a live cluster'，包括数据复制、验证、切换的完整流程。"
        }
    ]
}
