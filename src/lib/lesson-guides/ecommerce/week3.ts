import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "w3-1": {
        lessonId: "w3-1",
        background: [
            "【核心实体】电商数据库 ER 图包含九大核心实体：Customer（用户）、Product（商品）、Category（分类）、Order（订单）、Order_Item（订单项）、Payment（支付）、Shipment（物流）、Cart（购物车）、Wishlist（心愿单）。",
            "【规范化原则】电商数据库模型应遵循第三范式（3NF）——'the third normal form to maintain data integrity during concurrent transactions'，确保并发事务下的数据完整性和一致性。",
            "【代理键设计】推荐使用代理主键（Surrogate Key）而非自然键——每个实体使用 table_name_id 格式的替代主键，提供更好的灵活性应对需求变化。",
            "【PostgreSQL 优势】PostgreSQL 提供完整的 ACID 事务支持、MVCC 并发控制、丰富的数据类型（JSONB、Array、UUID）、强大的索引能力（B-Tree、GIN、GiST），是电商系统的理想选择。",
            "【索引核心观点】Use The Index, Luke 强调 'SQL indexing is the most effective tuning method—yet it is often neglected during development'——索引是最有效的性能调优手段，但常被开发阶段忽视。"
        ],
        keyDifficulties: [
            "【实体关系设计】理解一对多关系：一个用户多个订单、一个订单多个订单项、一个分类多个商品。Order_Item 是 Order 的依赖实体，没有订单就不存在订单项。",
            "【索引架构】B-Tree 索引使用双向链表组织叶子节点，支持高效的等值查询和范围查询。理解索引的物理存储与逻辑组织是优化的基础。",
            "【规范化 vs 反规范化】电商系统需要权衡：核心交易表（订单、支付）保持规范化确保一致性；查询热点表（商品展示）可适度反规范化提升读取性能。",
            "【并发控制】PostgreSQL 的 MVCC（多版本并发控制）实现了读写不阻塞，但需要理解事务隔离级别对电商场景（库存扣减、订单创建）的影响。"
        ],
        handsOnPath: [
            "使用 dbdiagram.io 或 Mermaid 绘制电商 ER 图，标注实体、属性、关系。",
            "创建 PostgreSQL 数据库，按顺序创建表：users → categories → products → orders → order_items → payments。",
            "为每个表添加约束：主键（PRIMARY KEY）、外键（FOREIGN KEY）、唯一约束（UNIQUE）、检查约束（CHECK）。",
            "为高频查询字段创建索引：orders(user_id, created_at)、products(category_id)、order_items(order_id)。",
            "使用 EXPLAIN ANALYZE 分析查询计划，验证索引是否被正确使用。",
            "实现软删除机制：添加 deleted_at TIMESTAMP 字段，创建部分索引排除已删除记录。"
        ],
        selfCheck: [
            "电商数据库的九大核心实体分别是什么？它们之间有什么关系？",
            "为什么推荐使用代理键（Surrogate Key）而非自然键作为主键？",
            "什么是第三范式？电商系统为什么要遵循它？",
            "B-Tree 索引的叶子节点是如何组织的？为什么支持范围查询？",
            "什么场景下应该反规范化？反规范化的代价是什么？",
            "如何使用 EXPLAIN ANALYZE 验证索引是否被正确使用？"
        ],
        extensions: [
            "研究 PostgreSQL 的分区表（Partition）机制，用于订单历史数据的水平分割。",
            "深入学习 PostgreSQL 的全文搜索（Full Text Search）功能，为商品搜索做准备。",
            "探索 PostgreSQL 的逻辑复制（Logical Replication）用于读写分离架构。",
            "了解 Citus 分布式 PostgreSQL 扩展，为超大规模电商数据库做准备。"
        ],
        sourceUrls: [
            "https://www.postgresql.org/docs/current/index.html",
            "https://www.red-gate.com/blog/er-diagram-for-online-shop/",
            "https://use-the-index-luke.com/"
        ]
    },
    "w3-2": {
        lessonId: "w3-2",
        background: [
            "【SKU 定义】SKU（Stock Keeping Unit）是 'a unique identifier for each distinct product variant'——每个独特商品变体的唯一标识符，用于追踪库存和销售表现。",
            "【SPU 与 SKU 关系】SPU（Standard Product Unit）是商品的抽象概念（如 iPhone 15），SKU 是具体的可销售单元（如 iPhone 15 256GB 黑色）。一个 SPU 对应多个 SKU。",
            "【JSONB 优势】PostgreSQL JSONB 是 '分解的二进制格式'，相比 JSON 类型：查询更快（无需重新解析）、支持索引（GIN 索引）、更适合电商属性存储。",
            "【GIN 索引】GIN（Generalized Inverted Index）索引支持 JSONB 的包含查询（@>）、键存在查询（?）、路径查询（@?），是实现灵活商品属性搜索的关键。",
            "【Spree Commerce 参考】Spree 是成熟的开源电商框架，采用 'modular product framework' 支持物理/数字商品、多币种、多语言，其商品变体系统值得参考。"
        ],
        keyDifficulties: [
            "【EAV vs JSONB】EAV（Entity-Attribute-Value）模型灵活但查询复杂、性能差；JSONB 结合了灵活性和查询性能，但需要注意文档大小和更新频率。",
            "【JSONB 索引选择】默认 GIN 索引支持多种操作符；jsonb_path_ops 索引更小更快但只支持 @> 操作符。根据查询模式选择合适的索引。",
            "【变体组合算法】SKU 由规格组合生成（颜色 × 尺寸 × 版本），需要实现笛卡尔积算法，并处理部分规格组合不可用的情况。",
            "【库存关联】每个 SKU 独立管理库存，需要设计 sku_id → inventory 的关联关系，支持多仓库库存分配。"
        ],
        handsOnPath: [
            "设计 SPU/SKU 表结构：products（SPU 信息）、product_variants（SKU 信息）、product_options（规格选项）。",
            "使用 JSONB 存储商品动态属性：attributes JSONB NOT NULL DEFAULT '{}'。",
            "创建 GIN 索引支持属性查询：CREATE INDEX idx_products_attrs USING GIN (attributes)。",
            "实现属性查询：SELECT * FROM products WHERE attributes @> '{\"color\": \"black\"}'。",
            "设计规格选项表：颜色、尺寸、版本等，支持不同分类有不同规格组合。",
            "实现 SKU 生成算法：根据 SPU 和规格选项组合生成所有可能的 SKU。"
        ],
        selfCheck: [
            "SPU 和 SKU 的区别是什么？举一个实际例子说明。",
            "JSONB 相比 JSON 类型有哪些优势？为什么更适合电商属性存储？",
            "EAV 模型的优缺点是什么？什么场景下应该使用 JSONB 替代？",
            "如何为 JSONB 字段创建索引？jsonb_path_ops 和默认 GIN 索引有什么区别？",
            "如何设计规格选项系统支持不同分类有不同规格？",
            "SKU 生成的笛卡尔积算法如何实现？"
        ],
        extensions: [
            "研究 Shopify 的商品变体系统 API，了解大规模电商的 SKU 设计。",
            "探索 PostgreSQL 数组类型结合 GIN 索引实现标签系统。",
            "学习 Elasticsearch 与 PostgreSQL 的数据同步方案，为商品搜索做准备。",
            "了解商品属性继承机制：分类属性 → SPU 属性 → SKU 属性的覆盖规则。"
        ],
        sourceUrls: [
            "https://www.shopify.com/blog/what-is-a-sku",
            "https://www.postgresql.org/docs/current/datatype-json.html",
            "https://github.com/spree/spree"
        ]
    },
    "w3-3": {
        lessonId: "w3-3",
        background: [
            "【状态机定义】状态机是 'a model that describes the sequential logic of some process'——描述流程顺序逻辑的模型，由状态（States）和转换（Transitions）组成。",
            "【电商状态机示例】Sylius 的订单状态机包含：cart → addressed → shipping_selected → payment_selected → completed，每个转换有严格的前置条件。",
            "【状态机优势】相比直接修改实体属性，状态机能 'prevent invalid transitions'——验证转换是否合法后再执行，避免非法状态。",
            "【Payment Intent】Stripe Payment Intent 是 'the central object managing complex payment flows'——管理复杂支付流程的核心对象，封装了金额、货币、支付方式等信息。",
            "【事务隔离级别】PostgreSQL 支持四种事务隔离级别：Read Uncommitted、Read Committed（默认）、Repeatable Read、Serializable。电商订单处理通常需要 Repeatable Read 或 Serializable。"
        ],
        keyDifficulties: [
            "【订单状态设计】核心状态：pending_payment → paid → processing → shipped → delivered → completed；异常状态：cancelled、refunding、refunded。需要定义清晰的状态转换规则和触发事件。",
            "【订单快照】订单创建时需要快照商品信息（名称、价格、规格），防止商品修改影响历史订单。通常在 order_items 表中冗余存储。",
            "【事务一致性】订单创建涉及多表操作（orders、order_items、inventory），需要使用事务确保原子性。Repeatable Read 级别可防止不可重复读。",
            "【支付记录设计】支付记录需要存储：payment_intent_id、amount、currency、status、metadata、created_at。需要处理支付回调的幂等性。"
        ],
        handsOnPath: [
            "设计订单表结构：orders（订单主表）、order_items（订单项，包含商品快照）、order_status_logs（状态变更日志）。",
            "使用 PostgreSQL ENUM 或单独的状态表定义订单状态。",
            "创建支付记录表：payments，包含 payment_intent_id、order_id、amount、status 等字段。",
            "实现订单创建事务：BEGIN → INSERT orders → INSERT order_items → UPDATE inventory → COMMIT。",
            "设置事务隔离级别：SET TRANSACTION ISOLATION LEVEL REPEATABLE READ。",
            "使用触发器或应用层实现状态变更日志记录。"
        ],
        selfCheck: [
            "状态机的两个核心组成部分是什么？电商订单状态机有哪些典型状态？",
            "为什么订单需要存储商品快照而不是只存储商品 ID？",
            "PostgreSQL 的四种事务隔离级别分别是什么？订单处理应该使用哪个级别？",
            "什么是幻读（Phantom Read）？Repeatable Read 能否防止幻读？",
            "如何设计支付记录表来支持 Stripe Payment Intent 的完整生命周期？",
            "订单状态变更日志应该记录哪些信息？"
        ],
        extensions: [
            "研究 XState 或 Robot 等前端状态机库在订单管理中的应用。",
            "学习 Saga 模式处理跨服务的分布式事务（库存服务 → 订单服务 → 支付服务）。",
            "探索事件溯源（Event Sourcing）在订单系统中的应用，实现完整的审计追踪。",
            "了解 PostgreSQL 的 Advisory Lock 在防止订单重复创建中的应用。"
        ],
        sourceUrls: [
            "https://sylius.com/blog/what-is-state-machine-and-why-is-it-useful-in-modeling-ecommerce-processes/",
            "https://docs.stripe.com/payments/payment-intents",
            "https://www.postgresql.org/docs/current/transaction-iso.html"
        ]
    },
    "w3-4": {
        lessonId: "w3-4",
        background: [
            "【Prisma 核心】Prisma Schema 是 'the main method of configuration for your Prisma ORM setup'——包含数据源、生成器和数据模型定义，提供类型安全的数据库访问。",
            "【TypeORM 特点】TypeORM 提供 'Flexible Patterns' 支持 DataMapper 和 ActiveRecord 两种模式，使用装饰器定义实体（@Entity、@Column、@PrimaryGeneratedColumn）。",
            "【迁移原则】golang-migrate 强调 'Drivers are dumb, migrate glues everything together'——迁移工具负责版本管理和执行顺序，数据库驱动只负责执行 SQL。",
            "【迁移文件结构】每个迁移需要成对的文件：{timestamp}_migration_name.up.sql（前进）和 {timestamp}_migration_name.down.sql（回滚），确保可逆性。",
            "【类型安全】Prisma 'enables developers to query your database with an ergonomic TypeScript client'——生成类型安全的客户端代码，编译时捕获查询错误。"
        ],
        keyDifficulties: [
            "【Prisma vs TypeORM】Prisma 使用声明式 Schema + 代码生成，类型安全更强；TypeORM 使用装饰器 + 运行时反射，更灵活但类型安全较弱。根据项目规模和团队偏好选择。",
            "【迁移最佳实践】迁移应该是幂等的、可回滚的、版本化的。避免在迁移中包含数据变更，将 Schema 变更和数据变更分开。",
            "【关系映射】理解 ORM 的关系映射：一对一（@OneToOne）、一对多（@OneToMany/@ManyToOne）、多对多（@ManyToMany），以及延迟加载 vs 急切加载。",
            "【N+1 问题】ORM 常见的 N+1 查询问题：查询 N 条订单后再逐一查询订单项，导致 N+1 次数据库调用。需要使用 JOIN 或预加载解决。"
        ],
        handsOnPath: [
            "初始化 Prisma 项目：npx prisma init --datasource-provider postgresql。",
            "定义 Prisma Schema：User、Product、Order、OrderItem 模型及其关系。",
            "生成并执行迁移：npx prisma migrate dev --name init_ecommerce_tables。",
            "使用 Prisma Client 实现 CRUD：prisma.order.create({ data: { ... }, include: { items: true } })。",
            "比较：使用 TypeORM 实现相同的模型定义和 CRUD 操作。",
            "解决 N+1 问题：使用 Prisma 的 include 或 TypeORM 的 relations 预加载关联数据。"
        ],
        selfCheck: [
            "Prisma 和 TypeORM 的主要区别是什么？各自的优势在哪里？",
            "数据库迁移文件为什么需要 up 和 down 两个版本？",
            "什么是 N+1 查询问题？如何在 ORM 中解决？",
            "Prisma Schema 的三个主要组成部分是什么？",
            "TypeORM 的 DataMapper 和 ActiveRecord 模式有什么区别？",
            "迁移最佳实践中，为什么要将 Schema 变更和数据变更分开？"
        ],
        extensions: [
            "研究 Prisma Accelerate 的连接池和查询缓存功能。",
            "学习 TypeORM 的 QueryBuilder 实现复杂查询。",
            "探索 Drizzle ORM 作为轻量级替代方案。",
            "了解数据库迁移在 CI/CD 流水线中的自动化部署。"
        ],
        sourceUrls: [
            "https://www.prisma.io/docs",
            "https://typeorm.io/",
            "https://github.com/golang-migrate/migrate"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "w3-1": [
        {
            id: "w3-1-q1",
            question: "电商数据库 ER 图包含几个核心实体？",
            options: ["5 个", "7 个", "9 个", "12 个"],
            answer: 2,
            rationale: "电商数据库包含九大核心实体：Customer、Product、Category、Order、Order_Item、Payment、Shipment、Cart、Wishlist。"
        },
        {
            id: "w3-1-q2",
            question: "电商数据库模型应该遵循哪个范式以确保事务一致性？",
            options: ["第一范式（1NF）", "第二范式（2NF）", "第三范式（3NF）", "BC 范式（BCNF）"],
            answer: 2,
            rationale: "电商数据库应遵循第三范式（3NF），以 'maintain data integrity during concurrent transactions'。"
        },
        {
            id: "w3-1-q3",
            question: "为什么推荐使用代理键（Surrogate Key）作为主键？",
            options: ["性能更好", "存储空间更小", "提供更好的灵活性应对需求变化", "符合规范化要求"],
            answer: 2,
            rationale: "代理主键（Surrogate Key）使用 table_name_id 格式，提供更好的灵活性应对需求变化，不受业务规则影响。"
        },
        {
            id: "w3-1-q4",
            question: "B-Tree 索引的叶子节点是如何组织的？",
            options: ["单向链表", "双向链表", "数组", "哈希表"],
            answer: 1,
            rationale: "Use The Index, Luke 指出索引使用 'a doubly linked list' 组织叶子节点，支持高效的范围查询。"
        },
        {
            id: "w3-1-q5",
            question: "Order_Item 与 Order 的关系是？",
            options: ["一对一", "多对多", "Order_Item 是 Order 的依赖实体", "两者相互独立"],
            answer: 2,
            rationale: "Order_Item 是 Order 的依赖实体（Dependent Entity），'has no reason to exist if an order does not exist'。"
        },
        {
            id: "w3-1-q6",
            question: "PostgreSQL 的 MVCC 实现了什么效果？",
            options: ["读写相互阻塞", "读写不阻塞", "只支持读操作", "只支持写操作"],
            answer: 1,
            rationale: "PostgreSQL 的 MVCC（多版本并发控制）实现了读写不阻塞，提高并发性能。"
        },
        {
            id: "w3-1-q7",
            question: "Use The Index, Luke 认为 SQL 索引优化在开发阶段的地位是？",
            options: ["最重要的工作", "最有效但常被忽视", "可以延后处理", "不需要考虑"],
            answer: 1,
            rationale: "Use The Index, Luke 强调 'SQL indexing is the most effective tuning method—yet it is often neglected during development'。"
        },
        {
            id: "w3-1-q8",
            question: "以下哪个不是 PostgreSQL 支持的索引类型？",
            options: ["B-Tree", "GIN", "GiST", "R-Tree"],
            answer: 3,
            rationale: "PostgreSQL 支持 B-Tree、GIN、GiST、BRIN 等索引类型，R-Tree 不是 PostgreSQL 的原生索引类型。"
        },
        {
            id: "w3-1-q9",
            question: "实现软删除的推荐方式是？",
            options: ["直接 DELETE", "添加 is_deleted 布尔字段", "添加 deleted_at 时间戳字段", "移动到归档表"],
            answer: 2,
            rationale: "推荐使用 deleted_at TIMESTAMP 字段实现软删除，既能标记删除状态又能记录删除时间。"
        },
        {
            id: "w3-1-q10",
            question: "分析查询计划使用什么命令？",
            options: ["DESCRIBE", "EXPLAIN ANALYZE", "SHOW PLAN", "DEBUG QUERY"],
            answer: 1,
            rationale: "使用 EXPLAIN ANALYZE 命令分析查询计划，验证索引是否被正确使用。"
        },
        {
            id: "w3-1-q11",
            question: "电商系统中，哪些表应该保持规范化？",
            options: ["商品展示表", "核心交易表（订单、支付）", "缓存表", "日志表"],
            answer: 1,
            rationale: "核心交易表（订单、支付）应保持规范化确保一致性；商品展示表可适度反规范化提升读取性能。"
        },
        {
            id: "w3-1-q12",
            question: "PostgreSQL 支持以下哪种数据类型？",
            options: ["只有 JSON", "只有 JSONB", "JSON 和 JSONB", "不支持 JSON"],
            answer: 2,
            rationale: "PostgreSQL 同时支持 JSON 和 JSONB 数据类型，JSONB 更适合需要索引和频繁查询的场景。"
        }
    ],
    "w3-2": [
        {
            id: "w3-2-q1",
            question: "SKU 的定义是什么？",
            options: ["商品名称", "每个独特商品变体的唯一标识符", "商品分类编码", "库存数量"],
            answer: 1,
            rationale: "SKU（Stock Keeping Unit）是 'a unique identifier for each distinct product variant'——每个独特商品变体的唯一标识符。"
        },
        {
            id: "w3-2-q2",
            question: "SPU 和 SKU 的关系是？",
            options: ["一对一", "一个 SPU 对应多个 SKU", "一个 SKU 对应多个 SPU", "多对多"],
            answer: 1,
            rationale: "一个 SPU（Standard Product Unit）对应多个 SKU，如 iPhone 15（SPU）对应多个颜色/容量组合（SKU）。"
        },
        {
            id: "w3-2-q3",
            question: "JSONB 相比 JSON 类型的主要优势是？",
            options: ["保留空白和键顺序", "存储更快", "查询更快且支持索引", "支持更大的文档"],
            answer: 2,
            rationale: "JSONB 使用分解的二进制格式，查询更快（无需重新解析）且支持 GIN 索引。"
        },
        {
            id: "w3-2-q4",
            question: "以下哪个操作符用于 JSONB 的包含性测试？",
            options: ["=", "@>", "LIKE", "IN"],
            answer: 1,
            rationale: "@> 操作符用于 JSONB 的包含性测试，如 attributes @> '{\"color\": \"black\"}' 查询。"
        },
        {
            id: "w3-2-q5",
            question: "jsonb_path_ops 索引相比默认 GIN 索引的特点是？",
            options: ["支持更多操作符", "索引更小更快但只支持 @> 操作符", "占用更多空间", "不支持索引"],
            answer: 1,
            rationale: "jsonb_path_ops 索引更小、查询更快，但只支持 @> 操作符，不支持 ?、?|、?& 操作符。"
        },
        {
            id: "w3-2-q6",
            question: "EAV 模型的主要缺点是？",
            options: ["不够灵活", "查询复杂、性能差", "不支持多值属性", "占用空间大"],
            answer: 1,
            rationale: "EAV（Entity-Attribute-Value）模型虽然灵活，但查询需要多表 JOIN，复杂且性能差。"
        },
        {
            id: "w3-2-q7",
            question: "为 JSONB 字段创建索引的正确语法是？",
            options: ["CREATE INDEX USING BTREE", "CREATE INDEX USING GIN", "CREATE INDEX USING HASH", "CREATE INDEX USING BRIN"],
            answer: 1,
            rationale: "JSONB 字段使用 GIN（Generalized Inverted Index）索引：CREATE INDEX USING GIN (jsonb_column)。"
        },
        {
            id: "w3-2-q8",
            question: "JSONB 的键存在性测试使用哪个操作符？",
            options: ["@>", "?", "->", "->>"],
            answer: 1,
            rationale: "? 操作符用于检查 JSONB 中是否存在指定的键，如 attributes ? 'color'。"
        },
        {
            id: "w3-2-q9",
            question: "Spree Commerce 的商品框架特点是？",
            options: ["固定的数据结构", "模块化、可定制", "只支持物理商品", "不支持多语言"],
            answer: 1,
            rationale: "Spree 采用 'modular product framework'，支持 'pick and choose parts you want to use'。"
        },
        {
            id: "w3-2-q10",
            question: "SKU 生成算法的核心是什么？",
            options: ["随机生成", "规格组合的笛卡尔积", "哈希计算", "递增序号"],
            answer: 1,
            rationale: "SKU 由规格组合（颜色 × 尺寸 × 版本）的笛卡尔积生成，需要处理部分组合不可用的情况。"
        },
        {
            id: "w3-2-q11",
            question: "PostgreSQL 14+ 支持的 JSONB 访问语法是？",
            options: ["jsonb_field.key", "jsonb_field['key']", "jsonb_field->key", "jsonb_field::key"],
            answer: 1,
            rationale: "PostgreSQL 14+ 支持下标访问语法：jsonb_field['key']，更直观简洁。"
        },
        {
            id: "w3-2-q12",
            question: "JSONB 类型对哪些值有限制？",
            options: ["字符串长度", "\\u0000、NaN 和 infinity", "数组大小", "嵌套深度"],
            answer: 1,
            rationale: "JSONB 禁用 \\u0000、NaN 和 infinity，只接受小写的 true 和 false。"
        }
    ],
    "w3-3": [
        {
            id: "w3-3-q1",
            question: "状态机的两个核心组成部分是？",
            options: ["输入和输出", "状态（States）和转换（Transitions）", "事件和处理器", "条件和动作"],
            answer: 1,
            rationale: "状态机由 'states (distinct conditions an entity can occupy) and transitions (movements between states)' 组成。"
        },
        {
            id: "w3-3-q2",
            question: "Sylius 订单状态机的起始状态是？",
            options: ["pending", "cart", "new", "created"],
            answer: 1,
            rationale: "Sylius 的订单状态机从 cart 状态开始：cart → addressed → shipping_selected → payment_selected → completed。"
        },
        {
            id: "w3-3-q3",
            question: "状态机相比直接修改实体属性的优势是？",
            options: ["代码更简单", "能防止非法状态转换", "性能更好", "存储更少"],
            answer: 1,
            rationale: "状态机能 'prevent invalid transitions'——验证转换是否合法后再执行，避免非法状态。"
        },
        {
            id: "w3-3-q4",
            question: "Stripe Payment Intent 的主要作用是？",
            options: ["存储用户信息", "管理复杂支付流程", "生成发票", "计算税费"],
            answer: 1,
            rationale: "Payment Intent 是 'the central object managing complex payment flows'，封装金额、货币、支付方式等信息。"
        },
        {
            id: "w3-3-q5",
            question: "PostgreSQL 的默认事务隔离级别是？",
            options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
            answer: 1,
            rationale: "PostgreSQL 的默认事务隔离级别是 Read Committed，每个 SQL 语句获取新的快照。"
        },
        {
            id: "w3-3-q6",
            question: "Repeatable Read 相比 Read Committed 的区别是？",
            options: ["不支持并发", "整个事务使用同一个快照", "只支持读操作", "性能更好"],
            answer: 1,
            rationale: "Read Committed 每个语句获取新快照；Repeatable Read 整个事务使用同一个快照，确保可重复读。"
        },
        {
            id: "w3-3-q7",
            question: "订单快照存储的主要目的是？",
            options: ["节省存储空间", "防止商品修改影响历史订单", "提高查询速度", "支持全文搜索"],
            answer: 1,
            rationale: "订单快照记录下单时的商品信息（名称、价格、规格），即使商品后来修改，历史订单仍能正确显示。"
        },
        {
            id: "w3-3-q8",
            question: "Serializable 隔离级别使用什么技术检测冲突？",
            options: ["乐观锁", "悲观锁", "Predicate Locking", "MVCC"],
            answer: 2,
            rationale: "Serializable 使用 Predicate Locking 检测读写依赖冲突，在 pg_locks 中显示为 SIReadLock。"
        },
        {
            id: "w3-3-q9",
            question: "支付记录表应该包含以下哪个字段来支持 Stripe 集成？",
            options: ["user_password", "payment_intent_id", "credit_card_number", "cvv"],
            answer: 1,
            rationale: "支付记录应存储 payment_intent_id 关联 Stripe 支付，不应存储敏感卡信息（由 Stripe 处理）。"
        },
        {
            id: "w3-3-q10",
            question: "订单状态变更日志应该记录什么？",
            options: ["只记录最终状态", "状态、变更时间、操作者、变更原因", "只记录异常状态", "不需要日志"],
            answer: 1,
            rationale: "状态变更日志应记录完整信息：原状态、新状态、变更时间、操作者、变更原因，实现审计追踪。"
        },
        {
            id: "w3-3-q11",
            question: "PostgreSQL 的 Serializable 隔离级别发生冲突时会？",
            options: ["自动重试", "阻塞等待", "抛出错误要求应用重试", "忽略冲突"],
            answer: 2,
            rationale: "Serializable 冲突时抛出 'could not serialize access due to read/write dependencies' 错误，应用需要重试事务。"
        },
        {
            id: "w3-3-q12",
            question: "订单核心状态流程正确的顺序是？",
            options: ["paid → pending → shipped", "pending_payment → paid → processing → shipped → delivered", "created → processing → paid", "shipped → paid → completed"],
            answer: 1,
            rationale: "正确的订单状态流程：pending_payment → paid → processing → shipped → delivered → completed。"
        }
    ],
    "w3-4": [
        {
            id: "w3-4-q1",
            question: "Prisma Schema 的主要作用是？",
            options: ["数据库备份", "ORM 配置的主要方法", "API 生成", "测试数据生成"],
            answer: 1,
            rationale: "Prisma Schema 是 'the main method of configuration for your Prisma ORM setup'，包含数据源、生成器和数据模型。"
        },
        {
            id: "w3-4-q2",
            question: "TypeORM 支持哪两种编程模式？",
            options: ["MVC 和 MVVM", "DataMapper 和 ActiveRecord", "Repository 和 Service", "Factory 和 Singleton"],
            answer: 1,
            rationale: "TypeORM 提供 'Flexible Patterns' 支持 DataMapper 和 ActiveRecord 两种模式，开发者可根据项目需求选择。"
        },
        {
            id: "w3-4-q3",
            question: "数据库迁移文件为什么需要 up 和 down 两个版本？",
            options: ["提高性能", "确保可回滚", "减少存储", "支持并行"],
            answer: 1,
            rationale: "迁移需要成对的 up.sql（前进变更）和 down.sql（回滚变更）文件，确保迁移可逆。"
        },
        {
            id: "w3-4-q4",
            question: "golang-migrate 对数据库驱动的设计原则是？",
            options: ["驱动应该智能处理", "Drivers are dumb, migrate glues everything together", "驱动负责所有逻辑", "不使用驱动"],
            answer: 1,
            rationale: "golang-migrate 强调 'Drivers are dumb, migrate glues everything together'——驱动只负责执行 SQL，迁移工具负责版本管理。"
        },
        {
            id: "w3-4-q5",
            question: "N+1 查询问题是指？",
            options: ["查询 N 条记录后再逐一查询关联数据", "查询 N+1 个表", "N 个用户同时查询", "查询超时 N+1 秒"],
            answer: 0,
            rationale: "N+1 问题：查询 N 条订单后再逐一查询订单项，导致 N+1 次数据库调用，应使用 JOIN 或预加载解决。"
        },
        {
            id: "w3-4-q6",
            question: "Prisma 生成迁移的命令是？",
            options: ["prisma generate", "prisma migrate dev", "prisma init", "prisma deploy"],
            answer: 1,
            rationale: "使用 'npx prisma migrate dev --name migration_name' 命令生成并执行数据库迁移。"
        },
        {
            id: "w3-4-q7",
            question: "TypeORM 使用什么方式定义实体？",
            options: ["YAML 配置", "JSON Schema", "装饰器（Decorators）", "XML 配置"],
            answer: 2,
            rationale: "TypeORM 使用装饰器模式定义实体：@Entity()、@PrimaryGeneratedColumn()、@Column() 等。"
        },
        {
            id: "w3-4-q8",
            question: "Prisma 的类型安全优势体现在？",
            options: ["运行时检查", "编译时捕获查询错误", "数据库层验证", "不需要类型"],
            answer: 1,
            rationale: "Prisma 'enables developers to query your database with an ergonomic TypeScript client'——生成类型安全的客户端代码，编译时捕获错误。"
        },
        {
            id: "w3-4-q9",
            question: "迁移最佳实践建议？",
            options: ["Schema 变更和数据变更放在一起", "将 Schema 变更和数据变更分开", "不需要版本控制", "直接修改数据库"],
            answer: 1,
            rationale: "迁移最佳实践：将 Schema 变更和数据变更分开，迁移应该是幂等的、可回滚的、版本化的。"
        },
        {
            id: "w3-4-q10",
            question: "解决 N+1 问题在 Prisma 中使用什么选项？",
            options: ["where", "include", "select", "orderBy"],
            answer: 1,
            rationale: "Prisma 使用 include 选项预加载关联数据：prisma.order.findMany({ include: { items: true } })。"
        },
        {
            id: "w3-4-q11",
            question: "Prisma Schema 的三个主要组成部分是？",
            options: ["表、视图、索引", "数据源、生成器、数据模型", "查询、变更、订阅", "实体、仓库、服务"],
            answer: 1,
            rationale: "Prisma Schema 包含：data sources（数据源）、generators（生成器）、data model（数据模型）。"
        },
        {
            id: "w3-4-q12",
            question: "golang-migrate 支持多少种数据库？",
            options: ["5 种", "10 种", "15 种", "20+ 种"],
            answer: 3,
            rationale: "golang-migrate 支持 20+ 种数据库，包括 PostgreSQL、MySQL、MongoDB、CockroachDB 等。"
        }
    ]
}
