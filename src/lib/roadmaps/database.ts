import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const databaseStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：数据库基础与设计（第 1-3 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "db-foundation",
    title: "阶段一：数据库基础与设计",
    duration: "第 1-3 周",
    goal: "掌握关系型数据库核心概念、事务特性、索引原理与架构设计。",
    weeks: [
      {
        id: "db-w1",
        title: "第 1 周：关系型数据库基础",
        summary: "理解关系模型、SQL 语言与事务特性。",
        overview: "本周介绍关系型数据库的理论基础，涵盖关系模型、SQL 语言分类、事务的 ACID 特性，以及四种隔离级别对并发控制的影响。",
        keyPoints: [
          "关系模型是数据库的理论基础，表是核心抽象。",
          "ACID 特性保证事务的可靠性。",
          "隔离级别平衡一致性与并发性能。",
        ],
        lessons: [
          {
            id: "db-w1-1",
            title: "关系模型与 SQL 基础",
            detail: "理解关系模型的核心概念与 SQL 语言。",
            keyPoints: [
              "关系（Relation）= 表，元组（Tuple）= 行，属性（Attribute）= 列。",
              "主键唯一标识行，外键建立表间关联。",
              "SQL 分类：DDL（定义）、DML（操作）、DCL（控制）、TCL（事务）。",
            ],
            resources: [
              { title: "PostgreSQL: SQL Language", url: "https://www.postgresql.org/docs/current/sql.html" },
              { title: "MySQL: SQL Statements", url: "https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html" },
              { title: "SQL Tutorial", url: "https://www.sqltutorial.org/" },
            ],
          },
          {
            id: "db-w1-2",
            title: "事务与 ACID 特性",
            detail: "理解事务的概念与 ACID 保证。",
            keyPoints: [
              "原子性（Atomicity）：事务全部成功或全部回滚。",
              "一致性（Consistency）：事务前后数据库状态一致。",
              "隔离性（Isolation）：并发事务互不干扰。",
              "持久性（Durability）：提交的事务永久保存。",
            ],
            resources: [
              { title: "PostgreSQL: Transactions", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html" },
              { title: "MySQL: InnoDB and ACID", url: "https://dev.mysql.com/doc/refman/8.0/en/mysql-acid.html" },
              { title: "ACID Properties", url: "https://www.databricks.com/glossary/acid-transactions" },
            ],
          },
          {
            id: "db-w1-3",
            title: "隔离级别与并发控制",
            detail: "理解四种事务隔离级别的差异，分析脏读、不可重复读与幻读等并发问题。",
            keyPoints: [
              "读未提交（Read Uncommitted）：可能脏读。",
              "读已提交（Read Committed）：可能不可重复读。",
              "可重复读（Repeatable Read）：可能幻读。",
              "串行化（Serializable）：完全隔离，性能最低。",
            ],
            resources: [
              { title: "PostgreSQL: Transaction Isolation", url: "https://www.postgresql.org/docs/current/transaction-iso.html" },
              { title: "MySQL: Transaction Isolation Levels", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-isolation-levels.html" },
              { title: "Isolation Levels Explained", url: "https://www.postgresql.org/docs/current/mvcc.html" },
            ],
          },
        ],
      },
      {
        id: "db-w2",
        title: "第 2 周：数据库设计",
        summary: "掌握数据库范式、索引原理与查询优化。",
        overview: "本周深入数据库设计核心，学习范式化与反范式化的取舍，理解 B+Tree、Hash 等索引结构的原理，并掌握通过执行计划分析和优化查询的方法。",
        keyPoints: [
          "范式减少冗余，反范式提高读取性能。",
          "索引是查询优化的核心，但会增加写入开销。",
          "执行计划是理解查询性能的关键。",
        ],
        lessons: [
          {
            id: "db-w2-1",
            title: "范式与反范式",
            detail: "理解数据库规范化与反规范化设计。",
            keyPoints: [
              "第一范式（1NF）：列原子性，无重复组。",
              "第二范式（2NF）：消除部分依赖。",
              "第三范式（3NF）：消除传递依赖。",
              "反范式：适度冗余提升读取性能。",
            ],
            resources: [
              { title: "Database Normalization", url: "https://www.guru99.com/database-normalization.html" },
              { title: "When to Denormalize", url: "https://www.vertabelo.com/blog/denormalization-when-why-and-how/" },
              { title: "Normal Forms", url: "https://www.geeksforgeeks.org/normal-forms-in-dbms/" },
            ],
          },
          {
            id: "db-w2-2",
            title: "索引原理",
            detail: "深入理解各类索引的数据结构与适用场景。",
            keyPoints: [
              "B+Tree：有序，支持范围查询，最常用。",
              "Hash：精确匹配快，不支持范围查询。",
              "GIN/GiST：全文搜索、数组、JSON 索引。",
              "覆盖索引：索引包含所有查询列，无需回表。",
            ],
            resources: [
              { title: "PostgreSQL: Indexes", url: "https://www.postgresql.org/docs/current/indexes.html" },
              { title: "MySQL: InnoDB Indexes", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-index-types.html" },
              { title: "Use The Index, Luke!", url: "https://use-the-index-luke.com/" },
            ],
          },
          {
            id: "db-w2-3",
            title: "查询优化与执行计划",
            detail: "通过 EXPLAIN 分析查询执行计划，识别全表扫描等性能瓶颈并进行优化。",
            keyPoints: [
              "EXPLAIN 显示查询执行计划。",
              "关注扫描类型：Seq Scan vs Index Scan。",
              "估算成本与实际执行时间对比。",
              "常见优化：添加索引、重写查询、调整统计信息。",
            ],
            resources: [
              { title: "PostgreSQL: EXPLAIN", url: "https://www.postgresql.org/docs/current/using-explain.html" },
              { title: "MySQL: EXPLAIN Output", url: "https://dev.mysql.com/doc/refman/8.0/en/explain-output.html" },
              { title: "Query Optimization", url: "https://use-the-index-luke.com/sql/explain-plan" },
            ],
          },
        ],
      },
      {
        id: "db-w3",
        title: "第 3 周：数据库架构",
        summary: "掌握复制、分片与连接管理。",
        overview: "本周学习数据库分布式架构的关键技术，包括主从复制与读写分离、水平与垂直分片策略，以及连接池与负载均衡的配置与管理。",
        keyPoints: [
          "主从复制实现读写分离和高可用。",
          "分库分表解决单库容量和性能瓶颈。",
          "连接池减少连接开销，提高并发能力。",
        ],
        lessons: [
          {
            id: "db-w3-1",
            title: "主从复制与读写分离",
            detail: "理解数据库复制机制与读写分离架构。",
            keyPoints: [
              "主从复制：主库写入，从库复制，异步或同步。",
              "读写分离：写主读从，提升读取性能。",
              "复制延迟：异步复制可能导致读取旧数据。",
            ],
            resources: [
              { title: "PostgreSQL: Replication", url: "https://www.postgresql.org/docs/current/high-availability.html" },
              { title: "MySQL: Replication", url: "https://dev.mysql.com/doc/refman/8.0/en/replication.html" },
              { title: "Read Replicas", url: "https://aws.amazon.com/rds/features/read-replicas/" },
            ],
          },
          {
            id: "db-w3-2",
            title: "分库分表策略",
            detail: "设计水平分表与垂直分库策略，选择合适的分片键实现数据均匀分布。",
            keyPoints: [
              "垂直分库：按业务拆分，不同业务不同库。",
              "水平分表：按规则拆分数据到多个表/库。",
              "分片键选择：均匀分布、避免热点、支持查询。",
              "跨分片查询：聚合、JOIN 复杂度增加。",
            ],
            resources: [
              { title: "Database Sharding", url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding" },
              { title: "Sharding Strategies", url: "https://www.cockroachlabs.com/blog/how-to-shard-a-database/" },
              { title: "Vitess Sharding", url: "https://vitess.io/docs/concepts/shard/" },
            ],
          },
          {
            id: "db-w3-3",
            title: "连接池与负载均衡",
            detail: "优化数据库连接管理与请求分发。",
            keyPoints: [
              "连接池：复用连接，减少建立开销。",
              "PgBouncer/ProxySQL：外部连接池代理。",
              "负载均衡：多副本间分发读请求。",
            ],
            resources: [
              { title: "PgBouncer", url: "https://www.pgbouncer.org/" },
              { title: "ProxySQL", url: "https://proxysql.com/" },
              { title: "Connection Pooling", url: "https://www.postgresql.org/docs/current/libpq-connect.html" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：PostgreSQL 深入（第 4-7 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "db-postgresql",
    title: "阶段二：PostgreSQL 深入",
    duration: "第 4-7 周",
    goal: "深入掌握 PostgreSQL 架构、新特性与性能调优。",
    weeks: [
      {
        id: "db-w4",
        title: "第 4 周：PostgreSQL 架构",
        summary: "理解 PostgreSQL 的进程模型、内存结构与存储机制。",
        overview: "本周深入 PostgreSQL 内部架构，了解多进程模型与共享内存管理、WAL 日志的写入与恢复机制，以及 MVCC 多版本并发控制的实现原理。",
        keyPoints: [
          "PostgreSQL 采用多进程架构，每个连接一个进程。",
          "WAL（Write-Ahead Logging）保证数据持久性。",
          "MVCC 实现高并发读写不阻塞。",
        ],
        lessons: [
          {
            id: "db-w4-1",
            title: "进程架构与内存结构",
            detail: "理解 PostgreSQL 的进程模型与共享内存。",
            keyPoints: [
              "Postmaster：主进程，管理子进程。",
              "Backend：每个连接一个后端进程。",
              "共享缓冲区（shared_buffers）：数据页缓存。",
              "WAL 缓冲区、工作内存（work_mem）。",
            ],
            resources: [
              { title: "PostgreSQL Architecture", url: "https://www.postgresql.org/docs/current/tutorial-arch.html" },
              { title: "Memory Configuration", url: "https://www.postgresql.org/docs/current/runtime-config-resource.html" },
              { title: "PostgreSQL Internals", url: "https://www.interdb.jp/pg/" },
            ],
          },
          {
            id: "db-w4-2",
            title: "WAL 与崩溃恢复",
            detail: "理解 Write-Ahead Logging 机制与恢复过程。",
            keyPoints: [
              "WAL：先写日志再写数据，保证持久性。",
              "Checkpoint：定期将脏页刷入磁盘。",
              "崩溃恢复：从最近 Checkpoint 重放 WAL。",
              "归档与 PITR：时间点恢复。",
            ],
            resources: [
              { title: "WAL Configuration", url: "https://www.postgresql.org/docs/current/wal-configuration.html" },
              { title: "Continuous Archiving", url: "https://www.postgresql.org/docs/current/continuous-archiving.html" },
              { title: "WAL Internals", url: "https://www.interdb.jp/pg/pgsql09.html" },
            ],
          },
          {
            id: "db-w4-3",
            title: "MVCC 实现",
            detail: "理解 PostgreSQL 的多版本并发控制。",
            keyPoints: [
              "每行有 xmin/xmax 标记创建/删除事务。",
              "读取不阻塞写入，写入不阻塞读取。",
              "死元组需要 VACUUM 清理。",
              "事务快照决定可见性。",
            ],
            resources: [
              { title: "MVCC", url: "https://www.postgresql.org/docs/current/mvcc-intro.html" },
              { title: "MVCC Internals", url: "https://www.interdb.jp/pg/pgsql05.html" },
              { title: "Transaction Visibility", url: "https://www.postgresql.org/docs/current/routine-vacuuming.html" },
            ],
          },
        ],
      },
      {
        id: "db-w5",
        title: "第 5 周：PostgreSQL 17 新特性",
        summary: "掌握 PostgreSQL 17 的重要新功能。",
        overview: "本周聚焦 PostgreSQL 17 的重要新特性，包括 SQL/JSON 标准函数、pg_basebackup 增量备份，以及逻辑复制槽在高可用场景的 Failover 支持。",
        keyPoints: [
          "JSON_TABLE 将 JSON 数据转换为关系表。",
          "增量备份减少备份时间和存储空间。",
          "逻辑复制槽 Failover 支持高可用场景。",
        ],
        lessons: [
          {
            id: "db-w5-1",
            title: "JSON_TABLE 与 SQL/JSON",
            detail: "使用 SQL/JSON 函数处理 JSON 数据。",
            keyPoints: [
              "JSON_TABLE：将 JSON 转换为表格形式。",
              "JSON_EXISTS：检查键或值是否存在。",
              "JSON_QUERY/JSON_VALUE：提取 JSON 片段或值。",
              "符合 SQL:2016 标准。",
            ],
            resources: [
              { title: "PostgreSQL 17: JSON_TABLE", url: "https://www.postgresql.org/docs/17/functions-json.html" },
              { title: "SQL/JSON in PostgreSQL", url: "https://www.postgresql.org/docs/17/functions-json.html#FUNCTIONS-SQLJSON-TABLE" },
              { title: "JSON Features", url: "https://www.enterprisedb.com/blog/exploring-postgresql-17-new-features-enhancements" },
            ],
          },
          {
            id: "db-w5-2",
            title: "增量备份（pg_basebackup）",
            detail: "使用 pg_basebackup 增量备份与 pg_combinebackup 合并，减少备份时间与存储开销。",
            keyPoints: [
              "pg_basebackup 支持增量备份。",
              "pg_combinebackup 合并增量备份。",
              "减少备份时间和存储空间。",
              "pg_dump --filter 选择性导出对象。",
            ],
            resources: [
              { title: "pg_basebackup", url: "https://www.postgresql.org/docs/17/app-pgbasebackup.html" },
              { title: "Incremental Backup", url: "https://www.postgresql.org/docs/17/continuous-archiving.html" },
              { title: "pg_combinebackup", url: "https://www.postgresql.org/docs/17/app-pgcombinebackup.html" },
            ],
          },
          {
            id: "db-w5-3",
            title: "逻辑复制槽 Failover",
            detail: "在高可用场景中使用逻辑复制槽。",
            keyPoints: [
              "逻辑复制槽可以在 Failover 时保留。",
              "pg_create_logical_replication_slot 支持 failover 参数。",
              "订阅依赖在升级时迁移。",
              "改进高可用架构的复制能力。",
            ],
            resources: [
              { title: "Logical Replication", url: "https://www.postgresql.org/docs/17/logical-replication.html" },
              { title: "Replication Slots", url: "https://www.postgresql.org/docs/17/logicaldecoding-explanation.html" },
              { title: "PostgreSQL 17 Release Notes", url: "https://www.postgresql.org/docs/17/release-17.html" },
            ],
          },
        ],
      },
      {
        id: "db-w6",
        title: "第 6 周：PostgreSQL 高级特性",
        summary: "掌握分区表、扩展生态与全文搜索。",
        overview: "本周探索 PostgreSQL 高级特性，学习范围、列表和哈希分区表的使用，了解 PostGIS 和 pg_vector 等扩展生态，并掌握内置全文搜索功能。",
        keyPoints: [
          "分区表按规则将大表拆分为小表。",
          "PostgreSQL 扩展生态丰富，如 PostGIS、pg_vector。",
          "内置全文搜索支持多语言分词。",
        ],
        lessons: [
          {
            id: "db-w6-1",
            title: "分区表与继承",
            detail: "使用范围、列表和哈希分区策略管理大规模数据，通过分区裁剪提升查询性能。",
            keyPoints: [
              "范围分区：按时间、ID 范围分区。",
              "列表分区：按离散值分区。",
              "哈希分区：均匀分布数据。",
              "分区裁剪：查询时只扫描相关分区。",
            ],
            resources: [
              { title: "Table Partitioning", url: "https://www.postgresql.org/docs/current/ddl-partitioning.html" },
              { title: "Partition Pruning", url: "https://www.postgresql.org/docs/current/ddl-partitioning.html#DDL-PARTITION-PRUNING" },
              { title: "Partitioning Best Practices", url: "https://www.enterprisedb.com/blog/postgresql-partitioning-guide" },
            ],
          },
          {
            id: "db-w6-2",
            title: "扩展生态（PostGIS、pg_vector）",
            detail: "使用 PostgreSQL 扩展增强功能。",
            keyPoints: [
              "PostGIS：地理空间数据处理。",
              "pg_vector：向量相似度搜索，支持 AI 应用。",
              "TimescaleDB：时序数据扩展。",
              "Citus：分布式 PostgreSQL。",
            ],
            resources: [
              { title: "PostGIS", url: "https://postgis.net/" },
              { title: "pgvector", url: "https://github.com/pgvector/pgvector" },
              { title: "PostgreSQL Extensions", url: "https://www.postgresql.org/docs/current/extend-extensions.html" },
            ],
          },
          {
            id: "db-w6-3",
            title: "全文搜索",
            detail: "使用 PostgreSQL 内置全文搜索功能。",
            keyPoints: [
              "tsvector：文档的词素表示。",
              "tsquery：搜索查询表达式。",
              "GIN 索引：加速全文搜索。",
              "多语言支持：不同语言的分词配置。",
            ],
            resources: [
              { title: "Full Text Search", url: "https://www.postgresql.org/docs/current/textsearch.html" },
              { title: "GIN Indexes", url: "https://www.postgresql.org/docs/current/gin.html" },
              { title: "Text Search Configuration", url: "https://www.postgresql.org/docs/current/textsearch-configuration.html" },
            ],
          },
        ],
      },
      {
        id: "db-w7",
        title: "第 7 周：PostgreSQL 性能调优",
        summary: "掌握 PostgreSQL 性能分析与调优技术。",
        overview: "本周专注于 PostgreSQL 性能调优，深入分析 EXPLAIN 执行计划，理解 VACUUM 与自动清理机制，并根据工作负载调整关键配置参数。",
        keyPoints: [
          "EXPLAIN ANALYZE 是性能分析的核心工具。",
          "VACUUM 清理死元组，维护表健康。",
          "参数调优需要根据工作负载特点。",
        ],
        lessons: [
          {
            id: "db-w7-1",
            title: "EXPLAIN ANALYZE 深入",
            detail: "深入分析查询执行计划与性能瓶颈。",
            keyPoints: [
              "EXPLAIN：显示计划，ANALYZE 实际执行。",
              "BUFFERS：显示缓冲区命中与读取。",
              "SERIALIZE/MEMORY（PG17）：网络传输与内存使用。",
              "识别慢节点：实际时间 vs 估计时间。",
            ],
            resources: [
              { title: "EXPLAIN", url: "https://www.postgresql.org/docs/current/sql-explain.html" },
              { title: "Execution Plan Analysis", url: "https://www.postgresql.org/docs/current/using-explain.html" },
              { title: "explain.depesz.com", url: "https://explain.depesz.com/" },
            ],
          },
          {
            id: "db-w7-2",
            title: "VACUUM 与 Autovacuum",
            detail: "理解和配置 VACUUM 以维护表健康。",
            keyPoints: [
              "VACUUM：清理死元组，回收空间。",
              "VACUUM FULL：重写表，回收所有空间但锁表。",
              "Autovacuum：自动执行 VACUUM 和 ANALYZE。",
              "PG17：VACUUM 内存使用减少 20 倍。",
            ],
            resources: [
              { title: "VACUUM", url: "https://www.postgresql.org/docs/current/sql-vacuum.html" },
              { title: "Routine Vacuuming", url: "https://www.postgresql.org/docs/current/routine-vacuuming.html" },
              { title: "Autovacuum Tuning", url: "https://www.postgresql.org/docs/current/routine-vacuuming.html#AUTOVACUUM" },
            ],
          },
          {
            id: "db-w7-3",
            title: "参数调优与监控",
            detail: "根据工作负载调优 PostgreSQL 参数。",
            keyPoints: [
              "shared_buffers：通常设为内存的 25%。",
              "work_mem：排序和哈希操作的内存。",
              "effective_cache_size：规划器参考的缓存估计。",
              "pg_stat_* 视图：监控数据库活动。",
            ],
            resources: [
              { title: "Resource Configuration", url: "https://www.postgresql.org/docs/current/runtime-config-resource.html" },
              { title: "Tuning Guide", url: "https://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server" },
              { title: "Monitoring Statistics", url: "https://www.postgresql.org/docs/current/monitoring-stats.html" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：MySQL（第 8-10 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "db-mysql",
    title: "阶段三：MySQL",
    duration: "第 8-10 周",
    goal: "掌握 MySQL/InnoDB 架构、复制与性能调优。",
    weeks: [
      {
        id: "db-w8",
        title: "第 8 周：MySQL 架构",
        summary: "理解 InnoDB 存储引擎的架构与工作原理。",
        overview: "本周深入 MySQL InnoDB 存储引擎，理解其 B+Tree 聚簇索引架构、Buffer Pool 与 Change Buffer 等内存结构，以及 redo log 和 undo log 的崩溃恢复机制。",
        keyPoints: [
          "InnoDB 是 MySQL 默认存储引擎，支持事务和外键。",
          "Buffer Pool 是性能的关键，缓存数据和索引。",
          "Redo/Undo Log 保证事务的持久性和原子性。",
        ],
        lessons: [
          {
            id: "db-w8-1",
            title: "InnoDB 存储引擎",
            detail: "理解 InnoDB 的核心特性与架构。",
            keyPoints: [
              "聚簇索引：数据按主键顺序存储。",
              "二级索引：叶子节点存储主键值。",
              "行锁：并发控制，支持高并发写入。",
              "MVCC：实现可重复读隔离级别。",
            ],
            resources: [
              { title: "InnoDB Architecture", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-architecture.html" },
              { title: "InnoDB Introduction", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-introduction.html" },
              { title: "InnoDB Storage Engine", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html" },
            ],
          },
          {
            id: "db-w8-2",
            title: "Buffer Pool 与变更缓冲",
            detail: "理解 InnoDB 的内存结构与缓存机制。",
            keyPoints: [
              "Buffer Pool：缓存数据页和索引页。",
              "LRU 算法：管理缓冲区页面淘汰。",
              "Change Buffer：缓存二级索引的变更。",
              "Adaptive Hash Index：自动创建哈希索引。",
            ],
            resources: [
              { title: "Buffer Pool", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-buffer-pool.html" },
              { title: "Change Buffer", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-change-buffer.html" },
              { title: "Buffer Pool Configuration", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-buffer-pool-resize.html" },
            ],
          },
          {
            id: "db-w8-3",
            title: "Redo/Undo Log",
            detail: "理解 InnoDB 的日志机制与崩溃恢复。",
            keyPoints: [
              "Redo Log：记录物理变更，保证持久性。",
              "Undo Log：记录逻辑变更，支持回滚和 MVCC。",
              "Doublewrite Buffer：防止部分写入损坏。",
              "崩溃恢复：先回滚未提交，再重做已提交。",
            ],
            resources: [
              { title: "Redo Log", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-redo-log.html" },
              { title: "Undo Log", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-undo-logs.html" },
              { title: "Crash Recovery", url: "https://dev.mysql.com/doc/refman/8.0/en/innodb-recovery.html" },
            ],
          },
        ],
      },
      {
        id: "db-w9",
        title: "第 9 周：MySQL 复制与高可用",
        summary: "掌握 MySQL 复制机制与高可用方案。",
        overview: "本周学习 MySQL 高可用方案，涵盖基于 binlog 和 GTID 的主从复制、Paxos 协议的组复制，以及 InnoDB Cluster 的部署与自动故障转移。",
        keyPoints: [
          "GTID 简化复制管理，支持自动故障转移。",
          "组复制提供多主高可用能力。",
          "InnoDB Cluster 是官方高可用解决方案。",
        ],
        lessons: [
          {
            id: "db-w9-1",
            title: "主从复制与 GTID",
            detail: "理解 MySQL 复制原理与 GTID 模式。",
            keyPoints: [
              "binlog：记录所有数据变更。",
              "复制流程：Master binlog → Slave relay log → 重放。",
              "GTID：全局事务 ID，简化复制拓扑管理。",
              "半同步复制：至少一个从库确认才返回。",
            ],
            resources: [
              { title: "MySQL Replication", url: "https://dev.mysql.com/doc/refman/8.0/en/replication.html" },
              { title: "GTID Replication", url: "https://dev.mysql.com/doc/refman/8.0/en/replication-gtids.html" },
              { title: "Semisynchronous Replication", url: "https://dev.mysql.com/doc/refman/8.0/en/replication-semisync.html" },
            ],
          },
          {
            id: "db-w9-2",
            title: "组复制（Group Replication）",
            detail: "基于 Paxos 协议的组复制机制，实现多主写入与自动故障检测的高可用架构。",
            keyPoints: [
              "Paxos 协议：保证数据一致性。",
              "单主模式：自动选举主节点。",
              "多主模式：所有节点可写。",
              "冲突检测：自动处理写冲突。",
            ],
            resources: [
              { title: "Group Replication", url: "https://dev.mysql.com/doc/refman/8.0/en/group-replication.html" },
              { title: "Group Replication Modes", url: "https://dev.mysql.com/doc/refman/8.0/en/group-replication-single-primary-mode.html" },
              { title: "Group Replication Requirements", url: "https://dev.mysql.com/doc/refman/8.0/en/group-replication-requirements.html" },
            ],
          },
          {
            id: "db-w9-3",
            title: "InnoDB Cluster",
            detail: "部署和管理 MySQL InnoDB Cluster。",
            keyPoints: [
              "InnoDB Cluster = Group Replication + MySQL Router + MySQL Shell。",
              "MySQL Router：自动路由读写请求。",
              "MySQL Shell：集群管理工具。",
              "自动故障转移与恢复。",
            ],
            resources: [
              { title: "InnoDB Cluster", url: "https://dev.mysql.com/doc/refman/8.0/en/mysql-innodb-cluster-introduction.html" },
              { title: "MySQL Router", url: "https://dev.mysql.com/doc/mysql-router/8.0/en/" },
              { title: "MySQL Shell", url: "https://dev.mysql.com/doc/mysql-shell/8.0/en/" },
            ],
          },
        ],
      },
      {
        id: "db-w10",
        title: "第 10 周：MySQL 性能调优",
        summary: "掌握 MySQL 查询优化与性能调优。",
        overview: "本周掌握 MySQL 性能调优实践，包括复合索引与覆盖索引的设计策略、慢查询日志的分析定位，以及连接管理与线程池的并发优化。",
        keyPoints: [
          "索引设计是 MySQL 性能的关键。",
          "慢查询日志帮助定位性能问题。",
          "连接管理和线程池影响高并发性能。",
        ],
        lessons: [
          {
            id: "db-w10-1",
            title: "索引优化与覆盖索引",
            detail: "设计高效的复合索引与覆盖索引策略，利用最左前缀原则和索引下推优化查询。",
            keyPoints: [
              "最左前缀原则：复合索引从左到右匹配。",
              "覆盖索引：索引包含所有查询列。",
              "索引下推（ICP）：在存储引擎层过滤。",
              "避免索引失效：函数、类型转换、LIKE '%...'。",
            ],
            resources: [
              { title: "Index Optimization", url: "https://dev.mysql.com/doc/refman/8.0/en/optimization-indexes.html" },
              { title: "Covering Index", url: "https://dev.mysql.com/doc/refman/8.0/en/glossary.html#glos_covering_index" },
              { title: "Index Condition Pushdown", url: "https://dev.mysql.com/doc/refman/8.0/en/index-condition-pushdown-optimization.html" },
            ],
          },
          {
            id: "db-w10-2",
            title: "慢查询分析",
            detail: "启用慢查询日志并使用分析工具定位性能瓶颈，结合执行计划优化慢查询。",
            keyPoints: [
              "slow_query_log：启用慢查询日志。",
              "long_query_time：定义慢查询阈值。",
              "mysqldumpslow/pt-query-digest：分析工具。",
              "EXPLAIN 分析慢查询执行计划。",
            ],
            resources: [
              { title: "Slow Query Log", url: "https://dev.mysql.com/doc/refman/8.0/en/slow-query-log.html" },
              { title: "pt-query-digest", url: "https://docs.percona.com/percona-toolkit/pt-query-digest.html" },
              { title: "Query Profiling", url: "https://dev.mysql.com/doc/refman/8.0/en/performance-schema-query-profiling.html" },
            ],
          },
          {
            id: "db-w10-3",
            title: "连接管理与线程池",
            detail: "优化 MySQL 连接管理提升并发能力。",
            keyPoints: [
              "max_connections：最大连接数。",
              "线程缓存：thread_cache_size。",
              "企业版线程池：限制并发线程数。",
              "连接池：应用层复用连接。",
            ],
            resources: [
              { title: "Connection Management", url: "https://dev.mysql.com/doc/refman/8.0/en/connection-management.html" },
              { title: "Thread Pool", url: "https://dev.mysql.com/doc/refman/8.0/en/thread-pool.html" },
              { title: "Connection Pooling", url: "https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-usagenotes-j2ee-concepts-connection-pooling.html" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：Redis（第 11-13 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "db-redis",
    title: "阶段四：Redis",
    duration: "第 11-13 周",
    goal: "掌握 Redis 数据结构、Redis 8 新特性与高可用架构。",
    weeks: [
      {
        id: "db-w11",
        title: "第 11 周：Redis 数据结构",
        summary: "深入理解 Redis 数据结构与应用场景。",
        keyPoints: [
          "Redis 五大基础类型各有适用场景。",
          "Streams 支持消息队列场景。",
          "特殊数据结构如 HyperLogLog、Bitmap 适合统计场景。",
        ],
        lessons: [
          {
            id: "db-w11-1",
            title: "五大基础类型深入",
            detail: "深入理解 String、List、Set、Hash、ZSet 的实现与应用。",
            keyPoints: [
              "String：SDS 实现，二进制安全，支持原子操作。",
              "List：双向链表/压缩列表，消息队列场景。",
              "Hash：适合存储对象，field 级别操作。",
              "ZSet：跳表实现，有序集合，排行榜场景。",
            ],
            resources: [
              { title: "Redis Data Types", url: "https://redis.io/docs/latest/develop/data-types/" },
              { title: "Strings", url: "https://redis.io/docs/latest/develop/data-types/strings/" },
              { title: "Sorted Sets", url: "https://redis.io/docs/latest/develop/data-types/sorted-sets/" },
            ],
          },
          {
            id: "db-w11-2",
            title: "Streams 与消息队列",
            detail: "使用 Redis Streams 实现消息队列。",
            keyPoints: [
              "Streams：追加日志结构，类似 Kafka。",
              "Consumer Groups：消费者组，负载均衡。",
              "消息确认：XACK 确认消费。",
              "Redis 8.2：XACKDEL、XDELEX 新命令。",
            ],
            resources: [
              { title: "Redis Streams", url: "https://redis.io/docs/latest/develop/data-types/streams/" },
              { title: "Streams Tutorial", url: "https://redis.io/docs/latest/develop/data-types/streams-tutorial/" },
              { title: "Consumer Groups", url: "https://redis.io/docs/latest/develop/data-types/streams/#consumer-groups" },
            ],
          },
          {
            id: "db-w11-3",
            title: "HyperLogLog、Bitmap、Geo",
            detail: "使用特殊数据结构解决统计和地理问题。",
            keyPoints: [
              "HyperLogLog：基数估计，UV 统计。",
              "Bitmap：位操作，签到、状态标记。",
              "Geo：地理位置存储与查询。",
              "Redis 8.2：新 Bitmap 操作符（DIFF、ANDOR）。",
            ],
            resources: [
              { title: "HyperLogLog", url: "https://redis.io/docs/latest/develop/data-types/hyperloglogs/" },
              { title: "Bitmaps", url: "https://redis.io/docs/latest/develop/data-types/bitmaps/" },
              { title: "Geospatial", url: "https://redis.io/docs/latest/develop/data-types/geospatial/" },
            ],
          },
        ],
      },
      {
        id: "db-w12",
        title: "第 12 周：Redis 8 新特性",
        summary: "掌握 Redis 8 的重要新功能。",
        keyPoints: [
          "Vector Set 支持向量相似度搜索，适合 AI 应用。",
          "Redis Query Engine 提供二级索引和全文搜索。",
          "原 RediSearch、RedisJSON 等模块已内置。",
        ],
        lessons: [
          {
            id: "db-w12-1",
            title: "Vector Set（向量搜索）",
            detail: "使用 Vector Set 进行向量相似度搜索。",
            keyPoints: [
              "Vector Set：存储和查询高维向量嵌入。",
              "相似度搜索：支持语义搜索和推荐系统。",
              "由 Redis 创始人 Salvatore Sanfilippo 开发。",
              "支持 AI/ML 应用的向量检索需求。",
            ],
            resources: [
              { title: "Redis 8 Vector Set", url: "https://redis.io/blog/redis-8-ga/" },
              { title: "Vector Similarity", url: "https://redis.io/docs/latest/develop/interact/search-and-query/query/vector-search/" },
              { title: "AI with Redis", url: "https://redis.io/solutions/ai/" },
            ],
          },
          {
            id: "db-w12-2",
            title: "Redis Query Engine（二级索引）",
            detail: "使用 Redis Query Engine 进行复杂查询。",
            keyPoints: [
              "二级索引：对 Hash 和 JSON 数据创建索引。",
              "全文搜索：支持词干、同义词、模糊匹配。",
              "聚合查询：GROUP BY、排序、分页。",
              "替代 RediSearch 模块。",
            ],
            resources: [
              { title: "Query Engine", url: "https://redis.io/docs/latest/develop/interact/search-and-query/" },
              { title: "Indexing", url: "https://redis.io/docs/latest/develop/interact/search-and-query/indexing/" },
              { title: "Full-Text Search", url: "https://redis.io/docs/latest/develop/interact/search-and-query/query/full-text/" },
            ],
          },
          {
            id: "db-w12-3",
            title: "JSON、TimeSeries、Bloom 内置",
            detail: "使用 Redis 8 内置的数据类型。",
            keyPoints: [
              "JSON：原生 JSON 支持，路径查询。",
              "TimeSeries：时序数据存储与聚合。",
              "Bloom Filter：概率性数据结构，成员检测。",
              "无需单独安装模块。",
            ],
            resources: [
              { title: "Redis JSON", url: "https://redis.io/docs/latest/develop/data-types/json/" },
              { title: "Time Series", url: "https://redis.io/docs/latest/develop/data-types/timeseries/" },
              { title: "Bloom Filters", url: "https://redis.io/docs/latest/develop/data-types/probabilistic/bloom-filter/" },
            ],
          },
        ],
      },
      {
        id: "db-w13",
        title: "第 13 周：Redis 高可用与集群",
        summary: "掌握 Redis 高可用方案与集群架构。",
        keyPoints: [
          "主从复制是高可用的基础。",
          "Sentinel 提供自动故障转移。",
          "Redis Cluster 实现数据分片和水平扩展。",
        ],
        lessons: [
          {
            id: "db-w13-1",
            title: "主从复制与 Sentinel",
            detail: "配置 Redis 主从复制与自动故障转移。",
            keyPoints: [
              "主从复制：异步复制，从节点只读。",
              "Sentinel：监控、通知、自动故障转移。",
              "选举机制：多个 Sentinel 投票选主。",
              "客户端发现：通过 Sentinel 获取主节点地址。",
            ],
            resources: [
              { title: "Redis Replication", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/replication/" },
              { title: "Sentinel", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/" },
              { title: "High Availability", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/#high-availability-with-redis-sentinel" },
            ],
          },
          {
            id: "db-w13-2",
            title: "Redis Cluster 分片",
            detail: "使用 Redis Cluster 实现水平扩展。",
            keyPoints: [
              "16384 个槽位：数据按 CRC16 分布。",
              "多主多从：每个主节点负责部分槽位。",
              "自动分片：客户端重定向（MOVED/ASK）。",
              "在线扩缩容：迁移槽位到新节点。",
            ],
            resources: [
              { title: "Redis Cluster", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/" },
              { title: "Cluster Specification", url: "https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/" },
              { title: "Cluster Tutorial", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/#create-and-use-a-redis-cluster" },
            ],
          },
          {
            id: "db-w13-3",
            title: "持久化策略（RDB/AOF）",
            detail: "配置 Redis 持久化保证数据安全。",
            keyPoints: [
              "RDB：定时快照，恢复快，可能丢失数据。",
              "AOF：追加日志，数据安全，文件大。",
              "混合持久化：RDB + AOF 增量。",
              "持久化与性能权衡。",
            ],
            resources: [
              { title: "Persistence", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/" },
              { title: "RDB", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/#snapshotting" },
              { title: "AOF", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/#append-only-file" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段五：Elasticsearch（第 14-16 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "db-elasticsearch",
    title: "阶段五：Elasticsearch",
    duration: "第 14-16 周",
    goal: "掌握 Elasticsearch 分布式搜索引擎的架构与应用。",
    weeks: [
      {
        id: "db-w14",
        title: "第 14 周：Elasticsearch 架构",
        summary: "理解 Elasticsearch 的分布式架构与核心概念。",
        keyPoints: [
          "Elasticsearch 是分布式搜索和分析引擎。",
          "倒排索引是全文搜索的核心数据结构。",
          "Mapping 定义文档结构和字段类型。",
        ],
        lessons: [
          {
            id: "db-w14-1",
            title: "分布式架构与分片",
            detail: "理解 Elasticsearch 的集群架构与数据分布。",
            keyPoints: [
              "Node 类型：Master、Data、Ingest、Coordinating。",
              "Index：文档的集合，类似数据库。",
              "Shard：索引的分片，分布在不同节点。",
              "Replica：分片的副本，提供高可用和读扩展。",
            ],
            resources: [
              { title: "Cluster Architecture", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/scalability.html" },
              { title: "Shards and Replicas", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/documents-indices.html" },
              { title: "Node Roles", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html" },
            ],
          },
          {
            id: "db-w14-2",
            title: "倒排索引与分词",
            detail: "理解 Elasticsearch 的索引机制。",
            keyPoints: [
              "倒排索引：词项 → 文档列表映射。",
              "分词器（Analyzer）：字符过滤、分词、词项过滤。",
              "内置分词器：Standard、Simple、Whitespace。",
              "中文分词：IK、HanLP。",
            ],
            resources: [
              { title: "Inverted Index", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/documents-indices.html" },
              { title: "Analysis", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis.html" },
              { title: "Analyzers", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-analyzers.html" },
            ],
          },
          {
            id: "db-w14-3",
            title: "Mapping 与数据建模",
            detail: "设计合理的 Mapping 和数据模型。",
            keyPoints: [
              "Mapping：定义字段类型和索引方式。",
              "动态映射：自动推断字段类型。",
              "显式映射：手动定义精确控制。",
              "字段类型：text、keyword、数值、日期、对象等。",
            ],
            resources: [
              { title: "Mapping", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html" },
              { title: "Field Data Types", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html" },
              { title: "Dynamic Mapping", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/dynamic-mapping.html" },
            ],
          },
        ],
      },
      {
        id: "db-w15",
        title: "第 15 周：Elasticsearch 9 新特性",
        summary: "掌握 Elasticsearch 9 的重要新功能。",
        keyPoints: [
          "BBQ 向量量化提供高性能向量搜索。",
          "ES|QL 提供类 SQL 的查询语言。",
          "Lucene 10 带来底层性能提升。",
        ],
        lessons: [
          {
            id: "db-w15-1",
            title: "BBQ 向量量化",
            detail: "使用 Better Binary Quantization 进行向量搜索。",
            keyPoints: [
              "BBQ：高性能向量量化技术。",
              "比 OpenSearch FAISS 快 5 倍。",
              "保持相同准确率的同时提升性能。",
              "DiskBBQ（9.2）：从磁盘搜索，减少内存需求。",
            ],
            resources: [
              { title: "Vector Search", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/dense-vector.html" },
              { title: "BBQ", url: "https://www.elastic.co/blog/whats-new-elastic-search-9-0-0" },
              { title: "kNN Search", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/knn-search.html" },
            ],
          },
          {
            id: "db-w15-2",
            title: "ES|QL 查询语言",
            detail: "使用 ES|QL 进行数据查询和分析。",
            keyPoints: [
              "ES|QL：Elasticsearch Query Language。",
              "类 SQL 语法，更易学习。",
              "支持实时 JOIN 数据。",
              "KQL 过滤与语义搜索。",
            ],
            resources: [
              { title: "ES|QL", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/esql.html" },
              { title: "ES|QL Syntax", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-syntax.html" },
              { title: "ES|QL Functions", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-functions-operators.html" },
            ],
          },
          {
            id: "db-w15-3",
            title: "Lucene 10 性能提升",
            detail: "了解 Lucene 10 带来的底层改进。",
            keyPoints: [
              "更好的并行处理能力。",
              "更智能的索引策略。",
              "硬件优化利用。",
              "ColPali/ColBERT 多阶段交互模型支持。",
            ],
            resources: [
              { title: "Elasticsearch 9.0", url: "https://www.elastic.co/guide/en/elastic-stack/9.0/release-notes-elasticsearch-9.0.0.html" },
              { title: "Apache Lucene", url: "https://lucene.apache.org/" },
              { title: "What's New in ES 9", url: "https://www.elastic.co/blog/whats-new-elastic-9-0-0" },
            ],
          },
        ],
      },
      {
        id: "db-w16",
        title: "第 16 周：Elasticsearch 实战",
        summary: "掌握 Elasticsearch 查询与运维实践。",
        keyPoints: [
          "Query DSL 是 Elasticsearch 的核心查询方式。",
          "相关性调优提升搜索质量。",
          "索引生命周期管理优化存储成本。",
        ],
        lessons: [
          {
            id: "db-w16-1",
            title: "Query DSL 与聚合",
            detail: "使用 Query DSL 进行复杂查询和聚合。",
            keyPoints: [
              "Query Context vs Filter Context：评分 vs 过滤。",
              "复合查询：bool（must、should、must_not、filter）。",
              "聚合：Bucket、Metric、Pipeline。",
              "分页：from/size、search_after、scroll。",
            ],
            resources: [
              { title: "Query DSL", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html" },
              { title: "Aggregations", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html" },
              { title: "Paginate Search Results", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/paginate-search-results.html" },
            ],
          },
          {
            id: "db-w16-2",
            title: "搜索相关性调优",
            detail: "利用 BM25 评分算法、Boosting 权重调整和自定义评分函数提升搜索相关性。",
            keyPoints: [
              "TF-IDF 与 BM25：相关性评分算法。",
              "Boosting：提升特定字段或查询的权重。",
              "Function Score：自定义评分函数。",
              "Synonym、Stemming：同义词和词干。",
            ],
            resources: [
              { title: "Relevance", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/query-filter-context.html" },
              { title: "Function Score Query", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html" },
              { title: "Tuning Relevance", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/relevance-intro.html" },
            ],
          },
          {
            id: "db-w16-3",
            title: "索引生命周期管理",
            detail: "使用 ILM 管理索引生命周期。",
            keyPoints: [
              "ILM 阶段：Hot → Warm → Cold → Frozen → Delete。",
              "自动滚动：按大小或时间创建新索引。",
              "数据层：SSD、HDD、对象存储分层。",
              "快照与恢复：备份与灾难恢复。",
            ],
            resources: [
              { title: "Index Lifecycle Management", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index-lifecycle-management.html" },
              { title: "ILM Policies", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/ilm-policy-definition.html" },
              { title: "Data Tiers", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/data-tiers.html" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段六：新型数据库（第 17-18 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "db-modern",
    title: "阶段六：新型数据库",
    duration: "第 17-18 周",
    goal: "了解时序数据库、向量数据库与数据库选型方法。",
    weeks: [
      {
        id: "db-w17",
        title: "第 17 周：时序数据库",
        summary: "理解时序数据的特点与专用数据库。",
        keyPoints: [
          "时序数据有时间戳、追加写入、批量查询特点。",
          "时序数据库针对这些特点进行优化。",
          "降采样和数据保留策略管理存储成本。",
        ],
        lessons: [
          {
            id: "db-w17-1",
            title: "时序数据特点与建模",
            detail: "理解时序数据的特点与建模方法。",
            keyPoints: [
              "时序数据：带时间戳的测量值序列。",
              "高写入：设备/传感器持续产生数据。",
              "范围查询：按时间范围聚合分析。",
              "Tags/Labels：区分不同数据源。",
            ],
            resources: [
              { title: "Time Series Data", url: "https://www.influxdata.com/what-is-time-series-data/" },
              { title: "TSDB Concepts", url: "https://docs.timescale.com/use-timescale/latest/time-series/" },
              { title: "Data Modeling", url: "https://docs.influxdata.com/influxdb/v2/write-data/best-practices/schema-design/" },
            ],
          },
          {
            id: "db-w17-2",
            title: "InfluxDB / TimescaleDB",
            detail: "对比 InfluxDB、TimescaleDB 和 Prometheus 等主流时序数据库的架构特点与适用场景。",
            keyPoints: [
              "InfluxDB：专用时序数据库，Flux 查询语言。",
              "TimescaleDB：PostgreSQL 扩展，SQL 兼容。",
              "Prometheus：监控场景，拉取模型。",
              "选型：生态、查询语言、扩展性。",
            ],
            resources: [
              { title: "InfluxDB", url: "https://docs.influxdata.com/influxdb/v2/" },
              { title: "TimescaleDB", url: "https://docs.timescale.com/" },
              { title: "TSDB Comparison", url: "https://db-engines.com/en/ranking/time+series+dbms" },
            ],
          },
          {
            id: "db-w17-3",
            title: "降采样与数据保留",
            detail: "通过降采样聚合历史数据、配置数据保留策略和分层存储来管理时序数据的存储成本。",
            keyPoints: [
              "降采样：聚合历史数据，减少存储。",
              "数据保留策略：自动删除过期数据。",
              "分层存储：热数据 SSD，冷数据对象存储。",
              "压缩算法：时序专用压缩。",
            ],
            resources: [
              { title: "InfluxDB Retention", url: "https://docs.influxdata.com/influxdb/v2/reference/internals/data-retention/" },
              { title: "TimescaleDB Compression", url: "https://docs.timescale.com/use-timescale/latest/compression/" },
              { title: "Downsampling", url: "https://docs.influxdata.com/influxdb/v2/process-data/downsample-data/" },
            ],
          },
        ],
      },
      {
        id: "db-w18",
        title: "第 18 周：向量数据库与数据库选型",
        summary: "了解向量数据库与数据库选型决策方法。",
        keyPoints: [
          "向量数据库是 AI 应用的基础设施。",
          "多模数据库趋势：一个数据库支持多种数据模型。",
          "数据库选型需要综合考虑多种因素。",
        ],
        lessons: [
          {
            id: "db-w18-1",
            title: "向量数据库原理",
            detail: "理解向量数据库的工作原理与应用。",
            keyPoints: [
              "向量嵌入：将文本/图像转换为高维向量。",
              "相似度搜索：找到最近的向量。",
              "索引算法：HNSW、IVF、PQ。",
              "RAG 应用：检索增强生成。",
            ],
            resources: [
              { title: "Vector Database", url: "https://www.pinecone.io/learn/vector-database/" },
              { title: "Milvus", url: "https://milvus.io/docs" },
              { title: "HNSW Algorithm", url: "https://www.pinecone.io/learn/series/faiss/hnsw/" },
            ],
          },
          {
            id: "db-w18-2",
            title: "多模数据库趋势",
            detail: "了解多模数据库的发展趋势，分析一站式数据平台与专用数据库的选型权衡。",
            keyPoints: [
              "PostgreSQL：关系 + JSON + 向量 + 全文。",
              "Redis 8：KV + JSON + 时序 + 向量。",
              "MongoDB：文档 + 搜索 + 向量。",
              "一站式 vs 专用：权衡。",
            ],
            resources: [
              { title: "Multi-Model Database", url: "https://www.arangodb.com/resources/white-paper/multi-model-database/" },
              { title: "PostgreSQL Extensions", url: "https://www.postgresql.org/docs/current/extend-extensions.html" },
              { title: "Database Convergence", url: "https://www.infoq.com/articles/database-convergence/" },
            ],
          },
          {
            id: "db-w18-3",
            title: "数据库选型决策",
            detail: "综合数据模型、一致性需求、扩展性和运维成本等因素，选择最适合业务场景的数据库。",
            keyPoints: [
              "数据模型：关系、文档、KV、图、时序。",
              "一致性需求：强一致 vs 最终一致。",
              "扩展性：垂直扩展 vs 水平扩展。",
              "运维成本：自建 vs 托管服务。",
            ],
            resources: [
              { title: "Database Selection", url: "https://www.mongodb.com/resources/compare/databases" },
              { title: "CAP Theorem", url: "https://www.ibm.com/topics/cap-theorem" },
              { title: "DB-Engines Ranking", url: "https://db-engines.com/en/ranking" },
            ],
          },
        ],
      },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════
// 知识卡片
// ═══════════════════════════════════════════════════════════════
export const databaseKnowledgeCards: KnowledgeCard[] = [
  {
    id: "db-kc-1",
    title: "ACID 特性",
    summary: "事务的四个特性：原子性、一致性、隔离性、持久性。",
    points: [
      "原子性：事务全部成功或全部回滚",
      "一致性：事务前后数据库状态一致",
      "隔离性：并发事务互不干扰",
      "持久性：提交的事务永久保存",
    ],
    practice: "编写一个转账事务，验证 ACID 特性。",
  },
  {
    id: "db-kc-2",
    title: "索引类型",
    summary: "不同索引类型适用于不同查询场景。",
    points: [
      "B+Tree：有序，支持范围查询，最常用",
      "Hash：精确匹配快，不支持范围查询",
      "GIN：全文搜索、数组、JSON 索引",
      "覆盖索引：索引包含所有查询列，无需回表",
    ],
    practice: "为一个查询设计合适的索引，对比有无索引的执行计划。",
  },
  {
    id: "db-kc-3",
    title: "PostgreSQL MVCC",
    summary: "多版本并发控制实现高并发读写。",
    points: [
      "每行有 xmin/xmax 标记创建/删除事务",
      "读取不阻塞写入，写入不阻塞读取",
      "事务快照决定可见性",
      "死元组需要 VACUUM 清理",
    ],
    practice: "开启两个事务，观察 MVCC 的可见性行为。",
  },
  {
    id: "db-kc-4",
    title: "InnoDB Buffer Pool",
    summary: "Buffer Pool 是 MySQL/InnoDB 性能的关键。",
    points: [
      "缓存数据页和索引页",
      "LRU 算法管理页面淘汰",
      "通常设为可用内存的 70-80%",
      "命中率是重要性能指标",
    ],
    practice: "调整 innodb_buffer_pool_size，观察命中率变化。",
  },
  {
    id: "db-kc-5",
    title: "Redis 数据结构",
    summary: "Redis 五大基础数据类型各有适用场景。",
    points: [
      "String：缓存、计数器、分布式锁",
      "List：消息队列、最新列表",
      "Hash：对象存储",
      "ZSet：排行榜、延迟队列",
    ],
    practice: "使用 ZSet 实现一个实时排行榜。",
  },
  {
    id: "db-kc-6",
    title: "Redis 8 Vector Set",
    summary: "Vector Set 支持向量相似度搜索。",
    points: [
      "存储高维向量嵌入",
      "支持语义搜索和推荐系统",
      "由 Redis 创始人开发",
      "替代独立向量数据库",
    ],
    practice: "使用 Vector Set 实现一个语义搜索功能。",
  },
  {
    id: "db-kc-7",
    title: "Elasticsearch 倒排索引",
    summary: "倒排索引是全文搜索的核心数据结构。",
    points: [
      "词项 → 文档列表映射",
      "分词器将文本拆分为词项",
      "TF-IDF/BM25 计算相关性评分",
      "支持快速全文搜索",
    ],
    practice: "创建自定义分词器，观察分词结果。",
  },
  {
    id: "db-kc-8",
    title: "数据库选型",
    summary: "根据需求选择合适的数据库。",
    points: [
      "关系型：事务、复杂查询 → PostgreSQL/MySQL",
      "文档型：灵活 Schema → MongoDB",
      "缓存/KV：高性能读写 → Redis",
      "搜索：全文搜索 → Elasticsearch",
    ],
    practice: "为一个新项目分析数据库选型。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const databaseExamQuestions: QuizQuestion[] = [
  {
    id: "db-q1",
    question: "ACID 中的 I 代表什么？",
    options: ["Integrity", "Isolation", "Index", "Identity"],
    answer: 1,
    rationale: "ACID 中的 I 代表 Isolation（隔离性），确保并发事务互不干扰。",
  },
  {
    id: "db-q2",
    question: "哪种隔离级别可能发生脏读？",
    options: ["Read Committed", "Read Uncommitted", "Repeatable Read", "Serializable"],
    answer: 1,
    rationale: "Read Uncommitted 是最低隔离级别，可以读取其他事务未提交的数据，可能发生脏读。",
  },
  {
    id: "db-q3",
    question: "B+Tree 索引相比 Hash 索引的优势是什么？",
    options: ["精确匹配更快", "支持范围查询", "占用空间更小", "更新更快"],
    answer: 1,
    rationale: "B+Tree 索引是有序的，支持范围查询（>、<、BETWEEN），而 Hash 索引只支持精确匹配。",
  },
  {
    id: "db-q4",
    question: "PostgreSQL 的 MVCC 通过什么机制实现？",
    options: ["锁定整表", "xmin/xmax 事务标记", "乐观锁", "两阶段锁"],
    answer: 1,
    rationale: "PostgreSQL MVCC 通过 xmin/xmax 标记行版本，xmin 是创建事务 ID，xmax 是删除事务 ID。",
  },
  {
    id: "db-q5",
    question: "PostgreSQL 17 新增的哪个函数可以将 JSON 转换为表？",
    options: ["JSON_TO_TABLE", "JSON_TABLE", "JSONB_RECORD", "JSON_PARSE"],
    answer: 1,
    rationale: "PostgreSQL 17 新增了 JSON_TABLE 函数，可以将 JSON 数据转换为关系表形式。",
  },
  {
    id: "db-q6",
    question: "InnoDB 的聚簇索引是基于什么组织的？",
    options: ["二级索引", "主键", "外键", "唯一索引"],
    answer: 1,
    rationale: "InnoDB 的聚簇索引基于主键组织数据，数据行按主键顺序存储在 B+Tree 叶子节点。",
  },
  {
    id: "db-q7",
    question: "MySQL 的 GTID 主要用于什么？",
    options: ["查询优化", "简化复制管理", "数据压缩", "权限控制"],
    answer: 1,
    rationale: "GTID（Global Transaction ID）为每个事务分配全局唯一 ID，简化复制拓扑管理和故障转移。",
  },
  {
    id: "db-q8",
    question: "Redis 中用于排行榜场景的数据结构是？",
    options: ["List", "Set", "Hash", "ZSet"],
    answer: 3,
    rationale: "ZSet（有序集合）支持按分数排序，非常适合排行榜、延迟队列等场景。",
  },
  {
    id: "db-q9",
    question: "Redis 8 新增的 Vector Set 主要用于什么？",
    options: ["时序数据", "向量相似度搜索", "图数据", "地理位置"],
    answer: 1,
    rationale: "Redis 8 新增的 Vector Set 用于存储和查询高维向量嵌入，支持语义搜索和推荐系统。",
  },
  {
    id: "db-q10",
    question: "Redis Cluster 使用多少个槽位进行数据分片？",
    options: ["1024", "4096", "16384", "65536"],
    answer: 2,
    rationale: "Redis Cluster 使用 16384 个槽位，每个 key 通过 CRC16 哈希后对 16384 取模分配槽位。",
  },
  {
    id: "db-q11",
    question: "Elasticsearch 的核心数据结构是什么？",
    options: ["B+Tree", "倒排索引", "哈希表", "跳表"],
    answer: 1,
    rationale: "Elasticsearch 使用倒排索引，将词项映射到包含该词的文档列表，支持快速全文搜索。",
  },
  {
    id: "db-q12",
    question: "Elasticsearch 9 的 BBQ 相比 OpenSearch FAISS 快多少？",
    options: ["2 倍", "3 倍", "5 倍", "10 倍"],
    answer: 2,
    rationale: "Elasticsearch 9 的 BBQ（Better Binary Quantization）比 OpenSearch FAISS 快 5 倍。",
  },
  {
    id: "db-q13",
    question: "ES|QL 是什么？",
    options: ["一种编程语言", "Elasticsearch 的查询语言", "数据库类型", "索引算法"],
    answer: 1,
    rationale: "ES|QL 是 Elasticsearch Query Language，提供类 SQL 语法进行数据查询和分析。",
  },
  {
    id: "db-q14",
    question: "时序数据库的典型特点不包括哪项？",
    options: ["高写入吞吐", "时间范围查询", "频繁更新", "数据降采样"],
    answer: 2,
    rationale: "时序数据通常是追加写入，很少更新。频繁更新不是时序数据的典型特点。",
  },
  {
    id: "db-q15",
    question: "TimescaleDB 是基于什么数据库的扩展？",
    options: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    answer: 2,
    rationale: "TimescaleDB 是 PostgreSQL 的扩展，提供时序数据处理能力，同时保持 SQL 兼容。",
  },
  {
    id: "db-q16",
    question: "向量数据库中 HNSW 是什么的缩写？",
    options: [
      "High Noise Signal Weight",
      "Hierarchical Navigable Small World",
      "Hash Network Search Window",
      "Hybrid Nearest Similarity Weight",
    ],
    answer: 1,
    rationale: "HNSW 是 Hierarchical Navigable Small World 的缩写，是一种高效的向量索引算法。",
  },
  {
    id: "db-q17",
    question: "PostgreSQL 的 VACUUM 命令主要用于什么？",
    options: ["创建索引", "清理死元组", "备份数据", "优化查询"],
    answer: 1,
    rationale: "VACUUM 用于清理 MVCC 产生的死元组，回收存储空间，维护表健康。",
  },
  {
    id: "db-q18",
    question: "MySQL InnoDB Cluster 由哪些组件组成？",
    options: [
      "Replication + Proxy",
      "Group Replication + MySQL Router + MySQL Shell",
      "Sentinel + Cluster",
      "Primary + Secondary + Arbiter",
    ],
    answer: 1,
    rationale: "InnoDB Cluster = Group Replication + MySQL Router + MySQL Shell，是 MySQL 官方高可用方案。",
  },
  {
    id: "db-q19",
    question: "Redis 的 RDB 持久化的特点是什么？",
    options: ["实时持久化", "定时快照", "追加日志", "同步复制"],
    answer: 1,
    rationale: "RDB 是定时快照持久化，按配置的间隔生成数据快照，恢复快但可能丢失最近数据。",
  },
  {
    id: "db-q20",
    question: "Elasticsearch ILM 的阶段顺序正确的是？",
    options: [
      "Hot → Cold → Warm → Delete",
      "Hot → Warm → Cold → Frozen → Delete",
      "Warm → Hot → Cold → Delete",
      "Hot → Frozen → Warm → Cold → Delete",
    ],
    answer: 1,
    rationale: "ILM 阶段顺序是 Hot → Warm → Cold → Frozen → Delete，数据从热到冷逐步迁移。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const databaseRoadmap: RoadmapDefinition = {
  id: "database",
  label: "数据库与数据存储",
  title: "数据库与数据存储",
  durationLabel: "18 个主题",
  description:
    "从数据库基础与设计出发，深入 PostgreSQL 17、MySQL/InnoDB、Redis 8，掌握 Elasticsearch 9 搜索引擎，了解时序数据库与向量数据库，形成完整的数据存储知识体系。",
  heroBadge: "PostgreSQL · MySQL · Redis · Elasticsearch · 向量数据库",
  stages: databaseStages,
  knowledgeCards: databaseKnowledgeCards,
  examQuestions: databaseExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始数据库学习之旅！先从关系型数据库基础和 ACID 开始。"
    if (percent < 25) return "继续深入 PostgreSQL，理解 MVCC 和新特性。"
    if (percent < 50) return "MySQL 和 Redis 是后端必备技能，重点掌握。"
    if (percent < 75) return "Elasticsearch 是搜索场景的首选，掌握其核心概念。"
    if (percent < 100) return "即将完成！时序和向量数据库是新兴领域。"
    return "恭喜完成！你已掌握主流数据库的核心知识。"
  },
  resourceGuide: {
    environment:
      "推荐使用 Docker 本地部署 PostgreSQL、MySQL、Redis、Elasticsearch 进行实践。各云厂商提供免费试用。",
    fallbackKeyPoints: [
      "ACID 是关系型数据库事务的核心保证",
      "索引是查询优化的关键，但会增加写入开销",
      "PostgreSQL MVCC 通过 xmin/xmax 实现多版本并发",
      "Redis 数据结构选择决定性能和功能",
      "Elasticsearch 倒排索引是全文搜索的基础",
    ],
    handsOnSteps: [
      "使用 EXPLAIN ANALYZE 分析查询执行计划",
      "配置 PostgreSQL 主从复制",
      "使用 Redis ZSet 实现排行榜",
      "创建 Elasticsearch 索引并执行搜索",
      "使用 pg_vector 或 Redis Vector Set 实现向量搜索",
    ],
    selfChecks: [
      "能否解释四种隔离级别的区别？",
      "能否设计合理的索引策略？",
      "能否配置 MySQL InnoDB Cluster？",
      "能否使用 Redis 实现分布式锁？",
      "能否优化 Elasticsearch 搜索相关性？",
    ],
    extensions: [
      "深入 PostgreSQL 源码和内核",
      "学习 NewSQL 数据库（CockroachDB、TiDB）",
      "探索图数据库（Neo4j、DGraph）",
      "研究数据库内核开发",
    ],
    lessonQuizAdvice: "每周完成后测验，重点关注事务隔离、索引原理和各数据库特性。",
  },
}
