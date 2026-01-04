import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "w6-1": {
        lessonId: "w6-1",
        background: [
            "【租户级分片】按 tenant_id 分片，同一租户的数据在同一分片，简化单租户查询。",
            "【Citus】PostgreSQL 扩展，支持分布式表和引用表，专为多租户设计。",
            "【分布列】tenant_id 作为分布列，确保租户数据本地化。",
            "【热点租户】大租户可能成为热点，需要特殊处理（独立分片或进一步拆分）。",
        ],
        keyDifficulties: [
            "【数据倾斜】租户数据量差异大，可能导致分片不均衡。",
            "【分片键选择】分片键一旦确定难以更改，需要慎重设计。",
            "【热点处理】大租户的热点问题需要特殊策略。",
            "【事务限制】跨分片事务有性能和一致性挑战。",
        ],
        handsOnPath: [
            "使用 Citus 创建分布式多租户表",
            "配置 tenant_id 作为分布列",
            "实现热点租户隔离策略",
            "设计数据倾斜监控",
        ],
        selfCheck: [
            "租户级分片的优势和挑战是什么？",
            "如何处理热点大租户？",
            "Citus 的分布式表和引用表有什么区别？",
        ],
        extensions: [
            "研究 Vitess 的多租户分片支持",
            "了解 TiDB 的自动分片能力",
        ],
        sourceUrls: [
            "https://vitess.io/docs/concepts/shard/",
            "https://docs.citusdata.com/en/stable/develop/multi_tenant_apps.html",
            "https://aws.amazon.com/blogs/database/sharding-with-amazon-relational-database-service/",
        ],
    },
    "w6-2": {
        lessonId: "w6-2",
        background: [
            "【VTGate】Vitess 的查询路由层，解析 SQL 并路由到正确的分片。",
            "【ShardingSphere】Apache 项目，提供分片、读写分离、数据加密等能力。",
            "【客户端路由】应用层直接连接目标分片，简单但耦合度高。",
            "【代理层路由】通过中间件路由，对应用透明，但增加一跳延迟。",
        ],
        keyDifficulties: [
            "【路由一致性】确保相同租户的请求总是路由到同一分片。",
            "【元数据管理】分片映射信息需要高可用和一致性。",
            "【故障处理】分片不可用时的路由策略和故障转移。",
            "【延迟开销】代理层路由增加的延迟需要优化。",
        ],
        handsOnPath: [
            "部署 Vitess VTGate",
            "配置 ShardingSphere 分片规则",
            "实现租户到分片的映射服务",
            "设计分片故障转移策略",
        ],
        selfCheck: [
            "客户端路由和代理层路由各有什么优劣？",
            "VTGate 如何路由查询到正确的分片？",
            "分片元数据应该如何管理？",
        ],
        extensions: [
            "研究 ProxySQL 的分片能力",
            "了解 MySQL Router 的使用",
        ],
        sourceUrls: [
            "https://vitess.io/docs/concepts/vtgate/",
            "https://shardingsphere.apache.org/document/current/en/overview/",
            "https://proxysql.com/documentation/sharding/",
        ],
    },
    "w6-3": {
        lessonId: "w6-3",
        background: [
            "【Scatter-Gather】跨分片查询模式：向所有分片发送查询，聚合结果。",
            "【引用表】小的、不变的数据（如配置表）复制到所有分片，支持本地 JOIN。",
            "【全局索引】跨分片的二级索引，支持非分片键查询。",
            "【查询限制】某些查询（如不带分片键的聚合）在分布式场景下很昂贵。",
        ],
        keyDifficulties: [
            "【性能开销】Scatter-Gather 模式的延迟是最慢分片的延迟。",
            "【结果合并】聚合、排序、分页在分布式场景下需要特殊处理。",
            "【引用表同步】引用表更新需要同步到所有分片。",
            "【查询优化】需要重写或限制某些查询模式。",
        ],
        handsOnPath: [
            "配置 Citus 引用表",
            "实现跨分片聚合查询",
            "优化 Scatter-Gather 查询性能",
            "设计全局二级索引方案",
        ],
        selfCheck: [
            "Scatter-Gather 模式的性能特点是什么？",
            "引用表适合什么类型的数据？",
            "跨分片分页查询如何实现？",
        ],
        extensions: [
            "研究 Vitess 的 VIndex 设计",
            "了解 CockroachDB 的分布式查询优化",
        ],
        sourceUrls: [
            "https://vitess.io/docs/concepts/query-routing/",
            "https://docs.citusdata.com/en/stable/develop/reference_data.html",
            "https://aws.amazon.com/blogs/database/implement-global-secondary-index-with-amazon-dynamodb/",
        ],
    },
    "w6-4": {
        lessonId: "w6-4",
        background: [
            "【Resharding】分片数量变化时重新分布数据的过程。",
            "【在线迁移】租户迁移过程中保持服务可用，不停机。",
            "【租户隔离】将热点租户迁移到独立分片。",
            "【CDC 同步】使用变更数据捕获保持迁移过程的数据一致性。",
        ],
        keyDifficulties: [
            "【数据一致性】迁移过程中的写入需要同步到新位置。",
            "【切换时机】如何选择最小影响的切换窗口。",
            "【回滚能力】迁移失败时的回滚策略。",
            "【元数据更新】分片映射更新需要原子性。",
        ],
        handsOnPath: [
            "使用 Vitess MoveTables 迁移租户",
            "实现 Citus 租户隔离",
            "设计在线迁移流程",
            "配置 Debezium CDC 同步",
        ],
        selfCheck: [
            "在线租户迁移的关键步骤是什么？",
            "如何保证迁移过程中的数据一致性？",
            "Vitess Resharding 的工作原理是什么？",
        ],
        extensions: [
            "研究 PlanetScale 的分支功能",
            "了解 Spanner 的自动分片平衡",
        ],
        sourceUrls: [
            "https://vitess.io/docs/user-guides/migration/move-tables/",
            "https://docs.citusdata.com/en/stable/admin_guide/cluster_management.html#tenant-isolation",
            "https://debezium.io/documentation/reference/stable/tutorial.html",
        ],
    },
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "w6-1": [
        { id: "w6-1-q1", question: "租户级分片的核心策略是什么？", options: ["随机分片", "按 tenant_id 分片，同租户数据在同分片", "按时间分片", "按数据类型分片"], answer: 1, rationale: "按 tenant_id 分片确保同一租户数据本地化，简化查询。" },
        { id: "w6-1-q2", question: "Citus 是什么类型的数据库？", options: ["NoSQL 数据库", "PostgreSQL 分布式扩展", "内存数据库", "图数据库"], answer: 1, rationale: "Citus 是 PostgreSQL 扩展，提供分布式表能力。" },
        { id: "w6-1-q3", question: "热点租户问题如何解决？", options: ["忽略", "将热点租户迁移到独立分片", "删除数据", "限制访问"], answer: 1, rationale: "大租户可以隔离到独立分片，避免影响其他租户。" },
        { id: "w6-1-q4", question: "分布列选择的重要性是什么？", options: ["无所谓", "影响数据分布和查询性能，难以更改", "只影响安全", "只影响成本"], answer: 1, rationale: "分布列决定数据如何分布，选择后难以更改。" },
        { id: "w6-1-q5", question: "数据倾斜指什么问题？", options: ["数据丢失", "分片间数据量差异大", "数据损坏", "数据重复"], answer: 1, rationale: "租户大小不同导致分片数据量不均衡。" },
        { id: "w6-1-q6", question: "Citus 分布式表的创建命令是什么？", options: ["CREATE TABLE", "SELECT create_distributed_table", "DISTRIBUTE TABLE", "SHARD TABLE"], answer: 1, rationale: "Citus 使用 create_distributed_table 函数创建分布式表。" },
        { id: "w6-1-q7", question: "跨分片事务的挑战是什么？", options: ["太简单", "性能差、一致性难保证", "无挑战", "自动处理"], answer: 1, rationale: "分布式事务需要协调多个分片，开销大。" },
        { id: "w6-1-q8", question: "租户级分片最适合什么查询模式？", options: ["跨租户查询", "单租户查询为主", "随机查询", "全表扫描"], answer: 1, rationale: "大部分查询在单租户范围内，可以本地完成。" },
        { id: "w6-1-q9", question: "如何监控分片倾斜？", options: ["不需要监控", "监控每个分片的数据量和负载", "只监控错误", "只监控延迟"], answer: 1, rationale: "需要监控分片间的数据量和负载差异。" },
        { id: "w6-1-q10", question: "Vitess 多租户分片支持什么功能？", options: ["只支持 MySQL", "支持水平分片和在线迁移", "只支持 PostgreSQL", "不支持多租户"], answer: 1, rationale: "Vitess 支持 MySQL 的水平分片和在线 Resharding。" },
        { id: "w6-1-q11", question: "为什么 tenant_id 是理想的分布列？", options: ["随机性好", "业务查询自然包含租户过滤", "数据小", "索引快"], answer: 1, rationale: "多租户应用的查询自然按租户隔离，tenant_id 是自然的分布键。" },
        { id: "w6-1-q12", question: "分片数量应该如何选择？", options: ["越多越好", "根据数据量和并发需求，预留扩展空间", "越少越好", "固定值"], answer: 1, rationale: "需要根据当前和预期规模选择合适的分片数。" },
    ],
    "w6-2": [
        { id: "w6-2-q1", question: "VTGate 在 Vitess 架构中的角色是什么？", options: ["数据存储", "查询路由和代理层", "备份服务", "监控服务"], answer: 1, rationale: "VTGate 是 Vitess 的代理层，负责 SQL 解析和路由。" },
        { id: "w6-2-q2", question: "ShardingSphere 提供哪些功能？", options: ["只有分片", "分片、读写分离、数据加密等", "只有加密", "只有监控"], answer: 1, rationale: "ShardingSphere 提供全面的数据分片和治理能力。" },
        { id: "w6-2-q3", question: "客户端路由的优点是什么？", options: ["完全透明", "无中间件延迟，性能好", "易于管理", "自动故障转移"], answer: 1, rationale: "直接连接分片，没有代理层的延迟。" },
        { id: "w6-2-q4", question: "代理层路由的优点是什么？", options: ["性能最好", "对应用透明，易于管理", "延迟最低", "成本最低"], answer: 1, rationale: "应用不需要感知分片细节，由代理处理路由。" },
        { id: "w6-2-q5", question: "分片元数据应该如何存储？", options: ["本地文件", "高可用的分布式存储（如 etcd）", "内存中", "代码硬编码"], answer: 1, rationale: "分片映射是关键元数据，需要高可用和一致性。" },
        { id: "w6-2-q6", question: "ProxySQL 支持什么功能？", options: ["只支持路由", "查询路由、连接池、读写分离", "只支持备份", "只支持监控"], answer: 1, rationale: "ProxySQL 是功能丰富的 MySQL 代理。" },
        { id: "w6-2-q7", question: "分片不可用时应该如何处理？", options: ["忽略", "故障转移到副本或返回错误", "重试无限次", "删除分片"], answer: 1, rationale: "需要故障转移机制或优雅降级。" },
        { id: "w6-2-q8", question: "ShardingSphere 的分片规则如何配置？", options: ["硬编码", "通过 YAML 配置或 SQL 语句", "不可配置", "二进制文件"], answer: 1, rationale: "ShardingSphere 支持 YAML 配置和动态 SQL 配置。" },
        { id: "w6-2-q9", question: "路由一致性指什么？", options: ["延迟一致", "相同租户请求路由到同一分片", "负载均衡", "数据一致"], answer: 1, rationale: "确保同一租户的请求总是访问正确的分片。" },
        { id: "w6-2-q10", question: "Vitess 如何保存分片拓扑信息？", options: ["本地文件", "通过 Topology Service（etcd/ZooKeeper）", "内存", "数据库"], answer: 1, rationale: "Vitess 使用 etcd 或 ZooKeeper 存储拓扑信息。" },
        { id: "w6-2-q11", question: "代理层路由的主要开销是什么？", options: ["内存", "增加一跳网络延迟", "CPU", "存储"], answer: 1, rationale: "请求经过代理层会增加网络延迟。" },
        { id: "w6-2-q12", question: "MySQL Router 的用途是什么？", options: ["数据加密", "MySQL 官方的路由中间件", "数据备份", "监控"], answer: 1, rationale: "MySQL Router 提供连接路由和负载均衡。" },
    ],
    "w6-3": [
        { id: "w6-3-q1", question: "Scatter-Gather 查询模式是什么？", options: ["单分片查询", "向所有分片发送查询，聚合结果", "顺序查询", "缓存查询"], answer: 1, rationale: "Scatter-Gather 将查询发送到多个分片，收集并合并结果。" },
        { id: "w6-3-q2", question: "引用表的特点是什么？", options: ["只在一个分片", "复制到所有分片，支持本地 JOIN", "定期同步", "只读"], answer: 1, rationale: "引用表在每个分片都有副本，可以本地 JOIN。" },
        { id: "w6-3-q3", question: "Scatter-Gather 的延迟特点是什么？", options: ["最快分片的延迟", "最慢分片的延迟（木桶效应）", "平均延迟", "固定延迟"], answer: 1, rationale: "需要等待最慢的分片响应，延迟由最慢分片决定。" },
        { id: "w6-3-q4", question: "引用表适合存储什么类型的数据？", options: ["大量频繁变更的数据", "小的、相对静态的数据（如配置）", "用户数据", "日志数据"], answer: 1, rationale: "引用表需要同步到所有分片，适合小且变化少的数据。" },
        { id: "w6-3-q5", question: "全局二级索引的作用是什么？", options: ["主键查询", "支持非分片键的查询", "数据备份", "数据加密"], answer: 1, rationale: "全局索引允许按非分片键字段高效查询。" },
        { id: "w6-3-q6", question: "跨分片分页的挑战是什么？", options: ["无挑战", "需要从每个分片获取数据并在代理层合并排序", "不支持分页", "太简单"], answer: 1, rationale: "LIMIT/OFFSET 需要跨分片收集数据再排序。" },
        { id: "w6-3-q7", question: "Citus 如何创建引用表？", options: ["CREATE TABLE", "SELECT create_reference_table", "REFERENCE TABLE", "REPLICATE TABLE"], answer: 1, rationale: "Citus 使用 create_reference_table 函数。" },
        { id: "w6-3-q8", question: "引用表更新的挑战是什么？", options: ["无挑战", "需要同步更新所有分片的副本", "不能更新", "太快"], answer: 1, rationale: "引用表更新需要传播到所有分片。" },
        { id: "w6-3-q9", question: "Vitess VIndex 的作用是什么？", options: ["数据加密", "提供灵活的分片和路由策略", "数据备份", "监控"], answer: 1, rationale: "VIndex 定义数据如何分布和路由。" },
        { id: "w6-3-q10", question: "如何优化 Scatter-Gather 查询？", options: ["无法优化", "减少涉及的分片数、并行执行、缓存结果", "增加分片", "减少数据"], answer: 1, rationale: "通过减少分片数和并行执行优化性能。" },
        { id: "w6-3-q11", question: "不带分片键的聚合查询为什么昂贵？", options: ["语法复杂", "需要扫描所有分片", "不支持", "太简单"], answer: 1, rationale: "无法定位分片，必须 Scatter-Gather 所有分片。" },
        { id: "w6-3-q12", question: "CockroachDB 如何优化分布式查询？", options: ["不优化", "自动选择最优执行计划，下推计算", "手动优化", "禁止分布式"], answer: 1, rationale: "CockroachDB 有分布式查询优化器，自动优化执行计划。" },
    ],
    "w6-4": [
        { id: "w6-4-q1", question: "Resharding 指什么操作？", options: ["数据备份", "分片数量变化时重新分布数据", "数据加密", "数据删除"], answer: 1, rationale: "Resharding 是调整分片数量并重新分布数据的过程。" },
        { id: "w6-4-q2", question: "在线租户迁移的核心要求是什么？", options: ["停机迁移", "迁移过程中保持服务可用", "数据丢失可接受", "只在深夜进行"], answer: 1, rationale: "在线迁移要求迁移过程中服务不中断。" },
        { id: "w6-4-q3", question: "Vitess MoveTables 的作用是什么？", options: ["创建表", "在分片间迁移数据", "删除表", "备份表"], answer: 1, rationale: "MoveTables 用于在 Vitess 分片间迁移数据。" },
        { id: "w6-4-q4", question: "CDC 在迁移中的作用是什么？", options: ["压缩数据", "捕获变更保持源和目标数据同步", "加密数据", "删除数据"], answer: 1, rationale: "CDC 捕获迁移过程中的变更，同步到目标。" },
        { id: "w6-4-q5", question: "租户隔离（Citus）的含义是什么？", options: ["删除租户", "将租户迁移到独立分片", "加密租户数据", "限制租户访问"], answer: 1, rationale: "Citus 的租户隔离是将租户数据移到专用分片。" },
        { id: "w6-4-q6", question: "迁移切换时机如何选择？", options: ["随时", "选择低峰期，数据同步追上后切换", "高峰期", "固定时间"], answer: 1, rationale: "应选择低峰期，确保数据完全同步后切换。" },
        { id: "w6-4-q7", question: "分片映射更新为什么需要原子性？", options: ["不需要", "避免部分更新导致路由错误", "性能更好", "更简单"], answer: 1, rationale: "非原子更新可能导致数据路由到错误分片。" },
        { id: "w6-4-q8", question: "Debezium 支持哪些数据库？", options: ["只有 MySQL", "MySQL、PostgreSQL、MongoDB 等多种", "只有 PostgreSQL", "只有 Oracle"], answer: 1, rationale: "Debezium 支持多种数据库的 CDC。" },
        { id: "w6-4-q9", question: "迁移回滚的关键准备是什么？", options: ["不需要准备", "保留源数据、记录回滚步骤", "删除源数据", "停止服务"], answer: 1, rationale: "需要保留源数据以便回滚，并有清晰的回滚步骤。" },
        { id: "w6-4-q10", question: "PlanetScale 分支功能的用途是什么？", options: ["代码分支", "数据库 Schema 变更的分支和合并", "日志分支", "配置分支"], answer: 1, rationale: "PlanetScale 支持类似 Git 的数据库 Schema 分支。" },
        { id: "w6-4-q11", question: "在线迁移的双写阶段是什么？", options: ["只写源", "同时写入源和目标", "只写目标", "不写入"], answer: 1, rationale: "双写确保切换前源和目标数据一致。" },
        { id: "w6-4-q12", question: "Spanner 自动分片平衡的优势是什么？", options: ["手动控制", "自动处理数据分布，无需人工干预", "不支持分片", "固定分片"], answer: 1, rationale: "Spanner 自动管理数据分布和负载均衡。" },
    ],
}
