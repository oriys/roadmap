import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week14Guides: Record<string, LessonGuide> = {
    "bp-w14-1": {
        lessonId: "bp-w14-1",
        background: [
            "【存储引擎选择】数据库存储引擎决定数据如何在磁盘上组织。B-tree（如 InnoDB、PostgreSQL）适合读多写少；LSM-tree（如 RocksDB、LevelDB）适合写密集场景。",
            "【B-tree 特点】B-tree 保持数据有序，读取时可以直接定位。但写入需要随机 I/O 更新页面，写放大较高。适合 OLTP 事务型负载。",
            "【LSM-tree 特点】LSM-tree 先写内存（MemTable），定期刷盘合并（Compaction）。写入顺序 I/O 性能好，但读取可能需要检查多个层级。适合写密集负载。",
            "【Buffer Pool】数据库使用 Buffer Pool 缓存热点数据页。命中率是关键指标，通常应 > 99%。大小配置需要平衡内存使用和命中率。",
            "【MVCC 原理】多版本并发控制（MVCC）允许读写并发，每个事务看到一致的数据快照。需要理解版本链、可见性判断、垃圾回收（Vacuum）。",
            "【锁与并发】行锁、页锁、表锁粒度不同。死锁检测有开销，高并发下锁竞争可能成为瓶颈。间隙锁（Gap Lock）防止幻读但可能增加锁冲突。"
        ],
        keyDifficulties: [
            "【写放大问题】B-tree 和 LSM-tree 都有写放大。B-tree 修改可能触发页分裂；LSM-tree 的 Compaction 重复读写数据。需要监控实际写入量与逻辑写入量的比值。",
            "【Compaction 调优】LSM-tree 的 Compaction 策略（Leveled、Tiered、FIFO）影响读写性能。需要根据负载特征选择策略，配置触发阈值。",
            "【大事务问题】长事务持有锁时间长，阻塞其他事务；MVCC 下长事务阻止旧版本回收，导致表膨胀。应拆分大事务，设置超时。",
            "【索引膨胀】频繁更新导致索引碎片化，空间和性能下降。需要定期 REINDEX 或使用在线重建工具。PostgreSQL 的 VACUUM 不回收索引空间。",
            "【热点行更新】高并发更新同一行会导致锁竞争。可以使用乐观锁、队列削峰、或将计数器分片到多行。"
        ],
        handsOnPath: [
            "监控 Buffer Pool 命中率：MySQL 查看 Innodb_buffer_pool_read_requests vs Innodb_buffer_pool_reads；PostgreSQL 查看 pg_statio_user_tables。",
            "分析表膨胀：PostgreSQL 使用 pgstattuple 扩展查看表和索引的膨胀率，规划 VACUUM FULL 或 pg_repack。",
            "配置 LSM Compaction：RocksDB 调整 level0_file_num_compaction_trigger、max_bytes_for_level_base 等参数。",
            "监控锁等待：查看 pg_locks 和 pg_stat_activity 分析锁等待；MySQL 查看 SHOW ENGINE INNODB STATUS。",
            "测试写放大：使用 iostat 监控磁盘写入量，对比应用层写入量，计算写放大倍数。",
            "配置事务超时：设置 idle_in_transaction_session_timeout（PostgreSQL）或 innodb_lock_wait_timeout（MySQL）。",
            "实现热点行分片：将单行计数器分散到多行，使用随机或哈希选择，汇总时 SUM 所有分片。"
        ],
        selfCheck: [
            "B-tree 和 LSM-tree 分别适合什么负载？",
            "什么是写放大？如何监控和优化？",
            "Buffer Pool 命中率应该达到多少？如何调优？",
            "MVCC 下长事务有什么影响？",
            "如何处理高并发热点行更新？",
            "LSM-tree 的 Compaction 策略有哪些？如何选择？"
        ],
        extensions: [
            "研究 PostgreSQL 的 HOT（Heap Only Tuple）更新如何减少索引维护。",
            "学习 TiDB 的 TiKV 存储引擎（基于 RocksDB）的设计。",
            "探索列式存储（如 ClickHouse）与行式存储的性能差异。",
            "研究 ZNS SSD 如何优化 LSM-tree 的垃圾回收。"
        ],
        sourceUrls: [
            "https://www.postgresql.org/docs/current/mvcc.html",
            "https://dev.mysql.com/doc/refman/8.0/en/innodb-buffer-pool.html",
            "https://github.com/facebook/rocksdb/wiki/Compaction",
            "https://use-the-index-luke.com/"
        ]
    },
    "bp-w14-2": {
        lessonId: "bp-w14-2",
        background: [
            "【查询优化器】数据库查询优化器根据统计信息选择执行计划。错误的统计信息或复杂查询可能导致次优计划。EXPLAIN ANALYZE 是分析执行计划的核心工具。",
            "【执行计划解读】关注：扫描方式（Seq Scan vs Index Scan）、连接方式（Nested Loop、Hash Join、Merge Join）、估计行数与实际行数差异、每步耗时。",
            "【统计信息更新】ANALYZE 命令更新表统计信息。大量数据变更后应及时更新，否则优化器可能做出错误选择。PostgreSQL 的 autovacuum 会自动更新。",
            "【索引设计原则】最左前缀原则、覆盖索引减少回表、选择性高的列优先、避免过多索引增加写入开销。部分索引（Partial Index）可减少索引大小。",
            "【Join 优化】小表驱动大表、利用索引避免全表扫描、Hash Join 需要足够的 work_mem。大量 Join 时考虑查询分解。",
            "【分区表】水平分区按范围或哈希分布数据，可以减少扫描范围、并行查询、简化数据维护。但跨分区查询可能不如单表高效。"
        ],
        keyDifficulties: [
            "【统计信息失真】数据倾斜、大量 NULL 值、相关列分布可能导致优化器估计错误。可以使用 extended statistics 或 pg_hint_plan 手动干预。",
            "【大表关联优化】多个大表 Join 时，考虑：预计算宽表、物化视图、分批处理、使用专门的分析型数据库。",
            "【索引回表成本】非覆盖索引需要回表获取其他列，大量回表可能不如全表扫描。优化器会根据选择性自动判断。",
            "【分区裁剪失效】分区键上使用函数、类型转换可能导致分区裁剪失效，扫描所有分区。查询条件应直接匹配分区键。",
            "【并行查询调优】PostgreSQL 的并行查询受 max_parallel_workers_per_gather 等参数控制。过多并行可能消耗所有 CPU。"
        ],
        handsOnPath: [
            "使用 EXPLAIN ANALYZE：分析慢查询的执行计划，对比估计行数和实际行数，定位问题节点。",
            "创建覆盖索引：为常用查询创建包含所有需要列的索引，消除回表操作，对比前后性能。",
            "配置 work_mem：增加 work_mem 使 Hash Join 和排序在内存中完成，避免磁盘临时文件。",
            "创建分区表：将大表按时间分区，对比分区裁剪前后的查询性能。",
            "更新统计信息：对数据倾斜的表使用 ALTER TABLE SET STATISTICS 增加采样率。",
            "使用查询提示：在必要时使用 pg_hint_plan 或 MySQL 的 SQL hints 强制使用特定索引或 Join 方式。",
            "监控慢查询：配置 slow query log 或 pg_stat_statements，定期分析 Top N 慢查询。"
        ],
        selfCheck: [
            "如何解读 EXPLAIN ANALYZE 的输出？需要关注哪些指标？",
            "什么情况下优化器会选择错误的执行计划？如何处理？",
            "覆盖索引的优势和适用场景？",
            "Hash Join、Nested Loop、Merge Join 分别适合什么场景？",
            "分区表有什么优势和限制？如何避免分区裁剪失效？",
            "work_mem 设置过大或过小有什么影响？"
        ],
        extensions: [
            "学习 PostgreSQL 的 JIT 编译功能及其对查询性能的影响。",
            "研究 Adaptive Query Execution（如 Spark AQE）的原理。",
            "探索基于机器学习的查询优化（如 Neo、Bao）。",
            "学习使用 pgMustard 或 explain.depesz.com 可视化分析执行计划。"
        ],
        sourceUrls: [
            "https://www.postgresql.org/docs/current/using-explain.html",
            "https://dev.mysql.com/doc/refman/8.0/en/execution-plan-information.html",
            "https://use-the-index-luke.com/sql/explain-plan",
            "https://www.postgresql.org/docs/current/ddl-partitioning.html"
        ]
    },
    "bp-w14-3": {
        lessonId: "bp-w14-3",
        background: [
            "【低延迟系统定义】低延迟系统追求最小化响应时间，典型场景：高频交易（微秒级）、实时竞价（毫秒级）、在线游戏。需要从硬件到软件全栈优化。",
            "【延迟来源分析】延迟 = 网络传输 + 序列化 + 排队 + 处理 + GC 停顿 + 操作系统调度。每个环节都需要优化，木桶效应明显。",
            "【内核旁路（Kernel Bypass）】传统网络通过内核协议栈，增加上下文切换开销。DPDK、RDMA 等技术绕过内核，用户态直接操作网卡。",
            "【Busy Polling】传统中断驱动模式在低负载时高效，但有中断延迟。Busy Polling 持续轮询网卡，消耗 CPU 但延迟更低更稳定。",
            "【NUMA 感知】Non-Uniform Memory Access 架构下，访问本地内存快于远程内存。线程、内存分配需要感知 NUMA 拓扑。",
            "【实时调度】Linux 的 SCHED_FIFO 和 SCHED_RR 提供实时调度。配合 CPU 隔离（isolcpus）和中断亲和性，减少调度抖动。"
        ],
        keyDifficulties: [
            "【尾延迟控制】P99/P999 延迟往往被 GC、调度抖动影响。需要使用无 GC 语言（C/C++/Rust）或极致 GC 调优，使用协程避免线程切换。",
            "【DPDK 复杂度】DPDK 需要专门的网卡支持（Intel、Mellanox），独占 CPU 核心和网卡，用户态实现协议栈，开发复杂度高。",
            "【抖动来源排查】使用 hwlatdetect 检测硬件延迟、ftrace 追踪内核延迟、perf sched 分析调度延迟。系统全方位 hardening。",
            "【时间同步】低延迟系统对时间精度要求高。使用 PTP（Precision Time Protocol）替代 NTP，专用硬件时钟同步。",
            "【可靠性权衡】极致低延迟可能牺牲可靠性（如禁用重传、减少冗余）。需要在延迟和可靠性之间权衡。"
        ],
        handsOnPath: [
            "测量延迟分布：使用 HdrHistogram 记录延迟直方图，关注 P50、P99、P999、Max。",
            "配置 CPU 隔离：使用 isolcpus 内核参数隔离 CPU，关键进程绑定到隔离的 CPU。",
            "配置中断亲和性：使用 irqbalance 或手动配置将网卡中断绑定到特定 CPU。",
            "启用 Busy Polling：设置 net.core.busy_read 和 net.core.busy_poll，测试延迟改善。",
            "使用 DPDK 示例：运行 DPDK 的 l2fwd 示例，测量转发延迟和吞吐量。",
            "检测系统抖动：使用 hwlatdetect 检测硬件延迟，cyclictest 测试调度延迟。",
            "配置大页内存：启用 2MB 或 1GB 大页减少 TLB miss，DPDK 等应用需要大页支持。"
        ],
        selfCheck: [
            "低延迟系统的延迟来源有哪些？如何逐个优化？",
            "什么是内核旁路？有哪些实现方式？",
            "Busy Polling 和中断模式有什么区别？适用场景？",
            "NUMA 架构下如何优化性能？",
            "如何检测和减少系统抖动？",
            "P99 和 P999 延迟控制的关键是什么？"
        ],
        extensions: [
            "研究高频交易系统（HFT）的架构和技术栈。",
            "学习 Aeron 消息系统的低延迟设计。",
            "探索 SPDK（Storage Performance Development Kit）的存储加速。",
            "研究 RDMA 和 InfiniBand 在低延迟场景的应用。"
        ],
        sourceUrls: [
            "https://www.dpdk.org/",
            "https://www.kernel.org/doc/html/latest/scheduler/sched-rt-group.html",
            "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_for_real_time/8/",
            "https://github.com/HdrHistogram/HdrHistogram"
        ]
    }
}

export const week14Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w14-1": [
        {
            id: "bp-w14-1-q1",
            question: "B-tree 和 LSM-tree 分别适合什么负载？",
            options: [
                "都适合所有负载",
                "B-tree 适合读多写少 OLTP，LSM-tree 适合写密集负载",
                "LSM-tree 适合读多写少",
                "B-tree 适合写密集"
            ],
            answer: 1,
            rationale: "B-tree 读取高效但写入有随机 I/O；LSM-tree 写入顺序 I/O 快但读取需检查多层级。"
        },
        {
            id: "bp-w14-1-q2",
            question: "什么是写放大？",
            options: [
                "写入速度变快",
                "实际磁盘写入量大于逻辑写入量的现象",
                "写入失败重试",
                "写入缓存"
            ],
            answer: 1,
            rationale: "写放大指实际写入磁盘的数据量大于应用逻辑写入量，如 LSM-tree 的 Compaction 重复读写数据。"
        },
        {
            id: "bp-w14-1-q3",
            question: "Buffer Pool 命中率应该达到多少？",
            options: [
                "50% 以上",
                "通常应 > 99%",
                "80% 以上",
                "无要求"
            ],
            answer: 1,
            rationale: "Buffer Pool 命中率应尽量高（通常 > 99%），低命中率意味着大量磁盘 I/O。"
        },
        {
            id: "bp-w14-1-q4",
            question: "MVCC 下长事务有什么影响？",
            options: [
                "无影响",
                "阻止旧版本回收，导致表膨胀；长时间持有锁阻塞其他事务",
                "加速查询",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "长事务持有锁阻塞其他事务，MVCC 下还阻止旧版本垃圾回收，导致表膨胀。"
        },
        {
            id: "bp-w14-1-q5",
            question: "如何处理高并发热点行更新？",
            options: [
                "增加重试次数",
                "使用乐观锁、队列削峰、将计数器分片到多行",
                "加大锁超时",
                "使用表锁"
            ],
            answer: 1,
            rationale: "热点行锁竞争严重时可使用乐观锁减少锁持有时间，队列削峰减少并发，或分片到多行分散竞争。"
        },
        {
            id: "bp-w14-1-q6",
            question: "LSM-tree 的 Compaction 策略有哪些？",
            options: [
                "只有一种",
                "Leveled、Tiered、FIFO 等多种策略",
                "无需 Compaction",
                "只有 Leveled"
            ],
            answer: 1,
            rationale: "LSM-tree Compaction 策略包括 Leveled（RocksDB 默认）、Tiered（写优化）、FIFO（时序数据）等。"
        },
        {
            id: "bp-w14-1-q7",
            question: "PostgreSQL 的 VACUUM 有什么作用？",
            options: [
                "压缩数据",
                "回收死元组空间，更新统计信息，防止事务 ID 回卷",
                "备份数据",
                "加密数据"
            ],
            answer: 1,
            rationale: "VACUUM 回收被删除或更新的死元组空间，更新表统计信息，防止事务 ID 回卷问题。"
        },
        {
            id: "bp-w14-1-q8",
            question: "如何监控 MySQL InnoDB Buffer Pool 命中率？",
            options: [
                "查看日志",
                "比较 Innodb_buffer_pool_read_requests 和 Innodb_buffer_pool_reads",
                "查看 CPU 使用率",
                "查看连接数"
            ],
            answer: 1,
            rationale: "命中率 = (read_requests - reads) / read_requests。reads 表示需要从磁盘读取的次数。"
        },
        {
            id: "bp-w14-1-q9",
            question: "间隙锁（Gap Lock）的作用是什么？",
            options: [
                "锁定单行",
                "锁定索引范围间隙，防止幻读",
                "锁定整表",
                "加速查询"
            ],
            answer: 1,
            rationale: "间隙锁锁定索引记录之间的间隙，防止其他事务在范围内插入记录，用于实现可重复读隔离级别。"
        },
        {
            id: "bp-w14-1-q10",
            question: "索引膨胀的原因是什么？",
            options: [
                "索引太小",
                "频繁更新导致索引碎片化，页分裂留下空洞",
                "查询太多",
                "内存不足"
            ],
            answer: 1,
            rationale: "频繁更新和删除导致索引页分裂和空洞，空间利用率下降。需要定期 REINDEX 重建。"
        },
        {
            id: "bp-w14-1-q11",
            question: "RocksDB 的 MemTable 是什么？",
            options: [
                "磁盘上的表",
                "LSM-tree 的内存写缓冲，满后刷盘成 SST 文件",
                "索引表",
                "临时表"
            ],
            answer: 1,
            rationale: "MemTable 是 LSM-tree 的内存写缓冲，写入先到 MemTable，满后刷盘成不可变的 SST 文件。"
        },
        {
            id: "bp-w14-1-q12",
            question: "如何设置事务超时避免长事务？",
            options: [
                "无法设置",
                "PostgreSQL 用 idle_in_transaction_session_timeout，MySQL 用 innodb_lock_wait_timeout",
                "只能手动终止",
                "重启数据库"
            ],
            answer: 1,
            rationale: "PostgreSQL 的 idle_in_transaction_session_timeout 终止空闲事务，MySQL 的 lock_wait_timeout 设置锁等待超时。"
        }
    ],
    "bp-w14-2": [
        {
            id: "bp-w14-2-q1",
            question: "EXPLAIN ANALYZE 相比 EXPLAIN 有什么额外信息？",
            options: [
                "只有执行计划",
                "实际执行时间、实际行数，可以对比估计值找问题",
                "只有估计行数",
                "无区别"
            ],
            answer: 1,
            rationale: "EXPLAIN 只显示计划和估计值；EXPLAIN ANALYZE 实际执行查询并显示真实时间和行数。"
        },
        {
            id: "bp-w14-2-q2",
            question: "什么情况下优化器会选择错误的执行计划？",
            options: [
                "永远不会",
                "统计信息过期、数据倾斜、复杂查询、相关列分布",
                "只有小表",
                "只有大表"
            ],
            answer: 1,
            rationale: "统计信息不准确、数据分布倾斜、多列关联分布等情况可能导致优化器估计错误。"
        },
        {
            id: "bp-w14-2-q3",
            question: "覆盖索引的优势是什么？",
            options: [
                "占用更少空间",
                "索引包含所有需要的列，无需回表读取原始数据",
                "加速写入",
                "减少索引数量"
            ],
            answer: 1,
            rationale: "覆盖索引包含查询需要的所有列，可以直接从索引返回数据，避免回表的随机 I/O。"
        },
        {
            id: "bp-w14-2-q4",
            question: "Hash Join 适合什么场景？",
            options: [
                "所有场景",
                "无索引的等值连接，构建侧较小能放入内存",
                "范围查询",
                "单表查询"
            ],
            answer: 1,
            rationale: "Hash Join 适合无索引的等值连接，将较小表构建哈希表。如果超出 work_mem 会溢出到磁盘。"
        },
        {
            id: "bp-w14-2-q5",
            question: "分区裁剪失效的常见原因是什么？",
            options: [
                "分区太多",
                "分区键上使用函数或类型转换，条件不直接匹配分区键",
                "分区太少",
                "数据太多"
            ],
            answer: 1,
            rationale: "WHERE date_column::date = '2024-01-01' 这样在分区键上使用函数会导致无法裁剪分区。"
        },
        {
            id: "bp-w14-2-q6",
            question: "work_mem 参数的作用是什么？",
            options: [
                "控制连接数",
                "控制排序、Hash Join 等操作的内存，超出则使用磁盘",
                "控制 Buffer Pool 大小",
                "控制日志大小"
            ],
            answer: 1,
            rationale: "work_mem 设置每个操作（如排序、Hash Join）可用的内存量，超出会使用磁盘临时文件。"
        },
        {
            id: "bp-w14-2-q7",
            question: "如何手动更新表的统计信息？",
            options: [
                "VACUUM",
                "ANALYZE 命令更新统计信息",
                "REINDEX",
                "TRUNCATE"
            ],
            answer: 1,
            rationale: "ANALYZE 命令采样表数据并更新 pg_statistic 中的统计信息供优化器使用。"
        },
        {
            id: "bp-w14-2-q8",
            question: "Nested Loop Join 适合什么场景？",
            options: [
                "大表关联",
                "外表较小，内表有索引的场景",
                "无索引的表",
                "所有场景"
            ],
            answer: 1,
            rationale: "Nested Loop 遍历外表每行到内表查找。外表小、内表有索引时效率高；大表无索引时很慢。"
        },
        {
            id: "bp-w14-2-q9",
            question: "部分索引（Partial Index）有什么用？",
            options: [
                "索引部分列",
                "只索引满足条件的行，减少索引大小和维护开销",
                "加速部分查询",
                "备份部分数据"
            ],
            answer: 1,
            rationale: "部分索引使用 WHERE 子句只索引满足条件的行，如 WHERE status = 'active'，减少索引大小。"
        },
        {
            id: "bp-w14-2-q10",
            question: "如何处理多个大表的 Join 性能问题？",
            options: [
                "增加更多索引",
                "预计算宽表、物化视图、分批处理、使用分析型数据库",
                "增加内存",
                "增加 CPU"
            ],
            answer: 1,
            rationale: "多大表 Join 开销大。可以预计算结果存宽表、使用物化视图、分批处理、或使用专门的分析数据库。"
        },
        {
            id: "bp-w14-2-q11",
            question: "pg_stat_statements 扩展的作用是什么？",
            options: [
                "管理权限",
                "跟踪 SQL 执行统计，找出慢查询和高频查询",
                "管理连接",
                "备份恢复"
            ],
            answer: 1,
            rationale: "pg_stat_statements 记录所有执行过的 SQL 的统计信息，如调用次数、总时间、行数等。"
        },
        {
            id: "bp-w14-2-q12",
            question: "Merge Join 的特点是什么？",
            options: [
                "不需要排序",
                "需要两表都按连接键排序，适合大表等值连接",
                "只能用于小表",
                "随机访问"
            ],
            answer: 1,
            rationale: "Merge Join 要求两表按连接键排序，然后并行扫描匹配。如果数据已排序（如索引扫描）效率很高。"
        }
    ],
    "bp-w14-3": [
        {
            id: "bp-w14-3-q1",
            question: "低延迟系统的延迟来源有哪些？",
            options: [
                "只有网络",
                "网络传输、序列化、排队、处理、GC 停顿、OS 调度",
                "只有处理时间",
                "只有 GC"
            ],
            answer: 1,
            rationale: "延迟 = 网络 + 序列化 + 排队 + 处理 + GC + 调度，每个环节都需要优化。"
        },
        {
            id: "bp-w14-3-q2",
            question: "什么是内核旁路（Kernel Bypass）？",
            options: [
                "禁用内核",
                "绕过内核网络栈，用户态直接操作网卡，减少上下文切换",
                "使用更新的内核",
                "内核升级"
            ],
            answer: 1,
            rationale: "DPDK、RDMA 等技术绕过内核协议栈，用户态直接与网卡交互，消除内核开销。"
        },
        {
            id: "bp-w14-3-q3",
            question: "Busy Polling 和中断模式有什么区别？",
            options: [
                "没有区别",
                "Busy Polling 持续轮询消耗 CPU 但延迟低，中断模式节省 CPU 但有中断延迟",
                "中断模式更快",
                "Busy Polling 节省 CPU"
            ],
            answer: 1,
            rationale: "中断模式在数据到达时触发中断，节省 CPU 但有延迟；Busy Polling 持续轮询，延迟更低但消耗 CPU。"
        },
        {
            id: "bp-w14-3-q4",
            question: "NUMA 架构下如何优化性能？",
            options: [
                "忽略 NUMA",
                "线程和内存分配感知 NUMA 拓扑，访问本地内存",
                "只使用远程内存",
                "禁用 NUMA"
            ],
            answer: 1,
            rationale: "NUMA 下访问本地内存比远程内存快。线程应绑定到特定 NUMA 节点，内存分配使用本地节点。"
        },
        {
            id: "bp-w14-3-q5",
            question: "如何检测系统抖动？",
            options: [
                "查看日志",
                "使用 hwlatdetect 检测硬件延迟，cyclictest 测试调度延迟",
                "查看 CPU 使用率",
                "重启系统"
            ],
            answer: 1,
            rationale: "hwlatdetect 检测 SMI 等硬件中断延迟，cyclictest 在实时环境测试调度延迟和抖动。"
        },
        {
            id: "bp-w14-3-q6",
            question: "P99 和 P999 延迟控制的关键是什么？",
            options: [
                "增加资源",
                "消除 GC 停顿、减少调度抖动、使用无锁数据结构",
                "减少请求量",
                "使用更快的语言"
            ],
            answer: 1,
            rationale: "尾延迟受 GC、调度、锁竞争影响。使用无 GC 语言、CPU 隔离、无锁结构可以控制尾延迟。"
        },
        {
            id: "bp-w14-3-q7",
            question: "DPDK 的主要特点是什么？",
            options: [
                "内核模块",
                "用户态网络库，绕过内核，需要独占 CPU 和网卡",
                "Python 库",
                "网络监控工具"
            ],
            answer: 1,
            rationale: "DPDK 是用户态高性能网络库，绕过内核协议栈，需要独占特定 CPU 核心和网卡。"
        },
        {
            id: "bp-w14-3-q8",
            question: "CPU 隔离（isolcpus）有什么作用？",
            options: [
                "加速所有进程",
                "将特定 CPU 隔离，只运行指定进程，减少调度干扰",
                "禁用 CPU",
                "增加 CPU 频率"
            ],
            answer: 1,
            rationale: "isolcpus 将 CPU 从通用调度器移除，只运行明确绑定的进程，减少调度抖动。"
        },
        {
            id: "bp-w14-3-q9",
            question: "大页内存（HugePages）有什么好处？",
            options: [
                "增加内存容量",
                "减少 TLB miss，降低内存访问延迟",
                "压缩内存",
                "加密内存"
            ],
            answer: 1,
            rationale: "大页（2MB/1GB）减少页表条目，降低 TLB miss 概率，对大内存应用如 DPDK 效果显著。"
        },
        {
            id: "bp-w14-3-q10",
            question: "PTP 相比 NTP 有什么优势？",
            options: [
                "更易配置",
                "精度更高（微秒级 vs 毫秒级），适合低延迟系统",
                "更省网络",
                "更安全"
            ],
            answer: 1,
            rationale: "PTP（IEEE 1588）精度可达微秒或亚微秒级，远高于 NTP 的毫秒级，适合低延迟场景。"
        },
        {
            id: "bp-w14-3-q11",
            question: "HdrHistogram 用于什么？",
            options: [
                "生成随机数",
                "记录低开销的延迟直方图，准确捕获尾延迟",
                "压缩数据",
                "加密通信"
            ],
            answer: 1,
            rationale: "HdrHistogram 是高精度低开销的直方图库，特别适合记录延迟分布，准确捕获 P99、P999。"
        },
        {
            id: "bp-w14-3-q12",
            question: "SCHED_FIFO 调度策略的特点是什么？",
            options: [
                "时间片轮转",
                "实时调度，高优先级进程运行直到主动让出或被更高优先级抢占",
                "普通调度",
                "随机调度"
            ],
            answer: 1,
            rationale: "SCHED_FIFO 是实时调度策略，进程按优先级运行，不受时间片限制，适合低延迟场景。"
        }
    ]
}
