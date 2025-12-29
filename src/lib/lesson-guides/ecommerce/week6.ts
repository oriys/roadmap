import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "w6-1": {
        lessonId: "w6-1",
        background: [
            "【Redis Hash 数据结构】Redis 官方定义 Hash 为 'collections of field-value pairs'——字段-值对的集合，非常适合表示对象结构。购物车使用 HSET cart:{userId} product:{productId} quantity 存储，一个 Hash 对应一个用户的购物车。",
            "【购物车存储模式】Redis 官方教程推荐将临时购物车存储在 Redis 而非数据库，实现 'sub-200ms backend response times'——亚 200 毫秒的后端响应时间，同时减少数据库负载。",
            "【Session 存储策略】与使用 Cookie（每次请求都携带）不同，购物车数据存储在 Redis 中，Session 只保存 cartId。这样可以减少请求体积、提升性能、支持多进程扩展。",
            "【过期处理机制】Redis 支持对购物车设置过期时间 EXPIRE cart:{cartId} 604800（7 天），自动清理废弃购物车。也可以使用 Redis 7.4+ 的字段级别 TTL 功能。",
            "【Zustand 状态管理】Zustand 是 'a small, fast and scalable bearbones state-management solution using simplified flux principles'——轻量级状态管理方案，无需 Provider 包裹，组件只在相关状态变化时重渲染。",
            "【前后端状态同步】购物车需要前后端状态同步：前端使用 Zustand 管理本地状态（快速响应 UI），后端使用 Redis 持久化（防止刷新丢失），两者通过 API 保持同步。"
        ],
        keyDifficulties: [
            "【匿名购物车处理】未登录用户的购物车存储策略：使用随机生成的 cartId 存入 Session/Cookie，登录后需要合并到用户购物车。合并策略包括：覆盖、合并（数量相加）、保留最新。",
            "【商品失效检测】购物车中的商品可能下架、价格变动、库存不足。需要定期检查或在展示时实时验证商品状态，并给用户清晰的失效提示。",
            "【Redis Hash 操作原子性】HINCRBY 可原子地增减商品数量，但批量操作（如结算时扣减多个商品库存）需要使用 MULTI/EXEC 事务或 Lua 脚本保证原子性。",
            "【数据一致性】购物车价格与商品实际价格可能不一致（促销活动、价格调整）。建议购物车只存储商品 ID 和数量，价格在展示和结算时实时查询。",
            "【购物车与 Redis JSON】Redis 官方教程中除了 Hash，还可以使用 JSON 数据类型存储丰富的商品信息 JSON.SET product:{productId} $ '{...}'，适合需要存储复杂商品属性的场景。"
        ],
        handsOnPath: [
            "使用 Docker 启动 Redis 服务 docker run -d -p 6379:6379 redis:latest，使用 redis-cli 练习 Hash 命令：HSET、HGET、HGETALL、HINCRBY、HDEL。",
            "实现 Node.js + Express 购物车 API：POST /cart/add（添加商品）、DELETE /cart/remove（删除商品）、PATCH /cart/update（更新数量）、GET /cart（获取购物车）。",
            "使用 express-session + connect-redis 实现 Session 存储，将 cartId 保存在 Session 中，支持未登录用户的购物车持久化。",
            "实现购物车合并逻辑：用户登录后调用 mergeCart API，将匿名购物车数据合并到用户购物车，处理商品重复的情况。",
            "使用 Zustand 创建前端购物车 Store：定义 items、addItem、removeItem、updateQuantity、clearCart 等状态和操作。",
            "实现商品有效性检查：在获取购物车时批量查询商品状态，标记失效商品（下架、库存不足），前端展示失效提示。",
            "编写购物车过期策略：设置 Redis key 的 TTL，或使用定时任务清理超过 30 天未活跃的购物车。"
        ],
        selfCheck: [
            "为什么电商购物车适合使用 Redis Hash 存储而不是关系型数据库？",
            "Redis Hash 的 HSET、HGET、HINCRBY、HDEL 命令各有什么作用？",
            "匿名用户的购物车如何存储？登录后如何合并？",
            "购物车中商品价格变动了怎么处理？应该在购物车中存储价格吗？",
            "如何检测购物车中的商品是否已下架或库存不足？",
            "Zustand 相比 Redux 有什么优势？为什么适合购物车状态管理？",
            "如何设置购物车的过期时间？为什么需要清理废弃购物车？",
            "购物车的前后端状态如何保持同步？"
        ],
        extensions: [
            "研究 Redis 的 JSON 数据类型，了解 RedisJSON 模块如何存储复杂的购物车商品信息。",
            "探索购物车的持久化策略：何时将 Redis 数据落盘到数据库，如何处理 Redis 故障恢复。",
            "学习购物车的缓存预热：用户登录时预加载购物车数据，减少首次访问延迟。",
            "研究大型电商（如淘宝、京东）的购物车架构，了解购物车微服务的设计。",
            "探索购物车的实时同步：使用 WebSocket 或 Server-Sent Events 实现多端购物车同步。"
        ],
        sourceUrls: [
            "https://redis.io/learn/howtos/shoppingcart",
            "https://redis.io/docs/latest/develop/data-types/hashes/",
            "https://github.com/pmndrs/zustand"
        ]
    },
    "w6-2": {
        lessonId: "w6-2",
        background: [
            "【状态机定义】Sylius 定义状态机为 'a model that describes the sequential logic of some process'——描述流程顺序逻辑的模型，由严格定义的状态（States）和转移（Transitions）组成。",
            "【电商状态机价值】状态机 'gives you a standard way to configure and execute business processes'——提供配置和执行业务流程的标准方式，防止无效的工作流转移，确保业务流程合规。",
            "【订单状态示例】典型电商订单状态流程：cart（购物车）→ addressed（已填地址）→ shipping_selected（已选配送）→ payment_selected（已选支付）→ completed（已完成）。",
            "【XState 核心概念】XState 实现 'state machines, statecharts, and the actor model'——状态机、状态图和 Actor 模型。核心组件包括：states（状态）、events（事件）、transitions（转移）、context（上下文数据）。",
            "【Commercetools 最佳实践】Commercetools 强调状态机是 'a powerful design pattern for modeling systems with discrete, event-driven behavior'——对离散事件驱动系统建模的强大设计模式。",
            "【状态转移验证】状态机系统会验证转移合法性，只有预定义的转移才被允许，'preventing invalid workflows'——防止无效工作流，保证业务流程的一致性。"
        ],
        keyDifficulties: [
            "【复杂状态流转】订单状态并非简单线性：可能从「待支付」超时转为「已取消」，从「已发货」因拒收转为「退货中」。需要考虑所有可能的状态转移路径。",
            "【状态与子状态】复杂订单可能需要嵌套状态：「退款中」可能包含子状态「待审核」→「审核中」→「退款处理中」→「已退款」。XState 支持 hierarchical states。",
            "【并发状态处理】一个订单可能同时处于多个状态维度：支付状态（已支付/退款中）和物流状态（待发货/已发货）。XState 的 parallel states 可以处理这种场景。",
            "【状态转移副作用】状态转移通常伴随副作用：支付成功需发送通知、扣减库存；发货需生成物流单号、更新库存位置。XState 使用 entry actions 和 exit actions 处理。",
            "【幂等性保证】Commercetools 强调 'idempotency'——状态转移必须幂等，重复的事件不应导致多次转移。需要记录已处理的事件 ID。"
        ],
        handsOnPath: [
            "使用 XState 定义订单状态机：createMachine({ id: 'order', initial: 'pending', states: { pending, paid, shipped, delivered, cancelled } })。",
            "配置状态转移事件：PAY（待支付→已支付）、SHIP（已支付→已发货）、DELIVER（已发货→已签收）、CANCEL（待支付→已取消）、TIMEOUT（待支付→已取消）。",
            "实现状态转移的 entry actions：支付成功时 assign context 更新支付时间、调用通知服务发送订单确认邮件。",
            "使用 XState Visualizer（stately.ai/viz）可视化状态机，验证所有状态转移路径的正确性。",
            "实现订单状态持久化：将状态机当前状态存储到数据库，应用重启后能恢复状态。",
            "编写状态转移的 guards（守卫条件）：如 canShip 检查是否已支付、库存是否充足、地址是否完整。",
            "实现超时自动取消：使用 XState 的 delayed transitions，待支付订单 30 分钟后自动转为已取消。"
        ],
        selfCheck: [
            "什么是状态机？它在电商订单管理中解决什么问题？",
            "订单的核心状态有哪些？每个状态可以转移到哪些状态？",
            "XState 中的 states、events、transitions、context 分别是什么？",
            "如何使用 XState 的 entry actions 处理状态转移的副作用？",
            "什么是 guards？如何使用它来控制状态转移的条件？",
            "如何实现订单超时自动取消？XState 提供了什么机制？",
            "订单状态机如何持久化？应用重启后如何恢复？",
            "为什么状态转移需要保证幂等性？如何实现？"
        ],
        extensions: [
            "研究 XState 的 parallel states，了解如何建模订单的支付状态和物流状态同时演进。",
            "探索 BPMN（Business Process Model and Notation）标准，了解工作流引擎如 Camunda 的应用。",
            "学习 Event Sourcing 与状态机的结合，通过事件重放恢复订单状态。",
            "研究分布式状态机的实现，了解跨服务的状态一致性保证。",
            "探索 Temporal 等工作流编排工具，了解长时间运行的订单处理流程如何实现。"
        ],
        sourceUrls: [
            "https://sylius.com/blog/what-is-state-machine-and-why-is-it-useful-in-modeling-ecommerce-processes/",
            "https://xstate.js.org/docs/",
            "https://docs.commercetools.com/learning-model-your-business-structure/state-machines/state-machines-page"
        ]
    },
    "w6-3": {
        lessonId: "w6-3",
        background: [
            "【库存管理核心目标】CockroachDB 库存管理文章指出核心目标是 'sell inventory to zero but never sell beyond zero'——卖到零但绝不超卖，这是电商库存系统的第一原则。",
            "【临时锁定机制】文章描述的常见方案：'mark the item as temporarily sold (reducing the available stock temporarily), pending either completion of the sale or the expiration of a timer'——临时标记为已售，等待交易完成或定时器过期。",
            "【PostgreSQL 锁机制】PostgreSQL 提供多种锁模式：FOR UPDATE（排他锁，阻止其他事务修改/删除）、FOR SHARE（共享锁）、FOR NO KEY UPDATE（弱排他锁）、FOR KEY SHARE（弱共享锁）。",
            "【Redis 分布式锁】Redis 官方推荐使用 SET key unique_value EX timeout NX 获取锁，NX 保证只有不存在时才设置（原子性），EX 设置过期时间防止死锁。",
            "【Redlock 算法】对于高可靠性场景，Redis 官方推荐 Redlock 算法：在多个独立 Redis 节点上获取锁，需要在大多数节点（n/2+1）上成功才算获取成功。",
            "【CDC 架构模式】CockroachDB 文章推荐使用 CDC（Change Data Capture）将库存变更推送到消息队列（如 Kafka），微服务消费变更事件而非持续查询数据库。"
        ],
        keyDifficulties: [
            "【乐观锁 vs 悲观锁】PostgreSQL 文档：悲观锁通过 SELECT FOR UPDATE 在查询时锁定行；乐观锁通过版本号（version 字段）在更新时检测冲突。高并发秒杀场景通常用乐观锁+Redis。",
            "【死锁问题】PostgreSQL 文档警告：多个事务以不同顺序获取锁可能导致死锁。'PostgreSQL automatically detects deadlock situations and resolves them by aborting one of the transactions involved'——自动检测并中止其中一个事务。",
            "【锁释放安全性】Redis 分布式锁释放必须验证锁的所有者：使用 Lua 脚本 if redis.call('get', key) == unique_value then redis.call('del', key)，防止误删其他进程的锁。",
            "【库存预扣与回滚】下单时预扣库存（available_stock - locked_stock），支付超时需要自动释放。需要可靠的定时任务或消息队列实现超时回滚。",
            "【实时库存同步】CockroachDB 文章强调：'real-time inventory synchronization prevents race conditions where multiple customers could simultaneously purchase out-of-stock items'——实时同步防止并发超卖。"
        ],
        handsOnPath: [
            "使用 PostgreSQL 实现悲观锁库存扣减：BEGIN; SELECT stock FROM products WHERE id = ? FOR UPDATE; UPDATE products SET stock = stock - ? WHERE id = ?; COMMIT;",
            "使用 PostgreSQL 实现乐观锁：UPDATE products SET stock = stock - ?, version = version + 1 WHERE id = ? AND version = ? AND stock >= ?，检查受影响行数判断成功。",
            "实现 Redis 分布式锁：获取锁 SET lock:product:{id} {uuid} EX 30 NX，释放锁使用 Lua 脚本验证 uuid 后删除。",
            "设计库存表结构：products(id, name, total_stock, available_stock, locked_stock)，available_stock = total_stock - locked_stock。",
            "实现库存预扣服务：下单时 locked_stock += quantity，available_stock -= quantity；支付成功 total_stock -= quantity, locked_stock -= quantity；超时释放 locked_stock -= quantity, available_stock += quantity。",
            "使用 Redis Lua 脚本实现原子库存扣减：先检查库存是否充足，再扣减，返回扣减结果，整个过程原子执行。",
            "编写库存超时释放定时任务：扫描超过 30 分钟未支付的订单，释放预扣的库存。"
        ],
        selfCheck: [
            "库存系统的核心目标是什么？为什么超卖是严重问题？",
            "乐观锁和悲观锁的区别是什么？各自适用于什么场景？",
            "PostgreSQL 的 SELECT FOR UPDATE 有什么作用？会产生什么锁？",
            "Redis 分布式锁为什么需要设置过期时间？如何安全地释放锁？",
            "什么是 Redlock 算法？它解决了什么问题？",
            "库存预扣机制是如何工作的？支付超时后如何释放库存？",
            "如何使用 Lua 脚本实现 Redis 原子库存扣减？",
            "CDC 模式在库存系统中有什么应用？"
        ],
        extensions: [
            "研究电商秒杀场景的库存扣减方案：Redis 预扣 + 消息队列异步落库。",
            "探索分布式事务在库存扣减中的应用：TCC（Try-Confirm-Cancel）模式。",
            "学习 CockroachDB 等分布式数据库如何保证库存一致性。",
            "研究库存分层：总库存 → 仓库库存 → 渠道库存，如何保证多级库存一致。",
            "探索 CQRS 模式在库存系统中的应用：写入库存主库，查询库存从缓存读取。"
        ],
        sourceUrls: [
            "https://www.cockroachlabs.com/blog/inventory-management-reference-architecture/",
            "https://www.postgresql.org/docs/current/explicit-locking.html",
            "https://redis.io/docs/latest/develop/use/patterns/distributed-locks/"
        ]
    },
    "w6-4": {
        lessonId: "w6-4",
        background: [
            "【Event Sourcing 定义】Martin Fowler 定义：'captures all changes to application state as a sequence of events'——将应用状态的所有变更捕获为事件序列，而非只存储当前状态。",
            "【事件即权威】Event Sourcing 中事件日志是系统的权威记录：'application state being purely derivable from the event log'——应用状态完全可从事件日志推导出来。",
            "【状态重建能力】Event Sourcing 提供三种关键能力：Complete Rebuild（完全重建）、Temporal Query（时间点查询）、Event Replay（事件重放修正错误）。",
            "【快照优化】Martin Fowler 提到：与其重放所有事件，系统可以定期创建状态快照。'A crashed system restarts from the overnight snapshot and replays only recent events'——崩溃后从快照恢复并只重放近期事件。",
            "【Keyset Pagination】Use The Index Luke 文章指出：传统 OFFSET 分页随着页数增加性能下降，'the database must count all rows from the beginning'——数据库必须从头计数。Keyset Pagination 使用上一页的值作为分隔符，性能恒定。",
            "【PostgreSQL 日期函数】PostgreSQL 提供丰富的日期时间函数：EXTRACT 提取字段、date_trunc 截断精度、age 计算时间差、AT TIME ZONE 时区转换，用于订单时间线查询。"
        ],
        keyDifficulties: [
            "【订单快照设计】订单快照需要冻结下单时的商品信息（名称、价格、规格、图片），即使商品后来修改或下架，历史订单仍能正确显示。通常使用 JSONB 存储快照。",
            "【OFFSET vs Keyset】Use The Index Luke 分析：OFFSET 在前几页表现正常，但'the difference is clearly visible from about page 20 onwards'——从第 20 页开始差异明显，Keyset 保持恒定性能。",
            "【Keyset 分页要求】Keyset Pagination 要求'deterministic sort order'——确定性排序。使用 (created_at, order_id) 组合排序，确保相同时间的订单也能稳定排序。",
            "【Event Sourcing 权衡】Martin Fowler 指出挑战：'Complex external system integration'——复杂的外部系统集成、'Code changes require careful handling during replay'——代码变更需要谨慎处理重放兼容性。",
            "【时区处理】PostgreSQL 文档强调时区处理复杂性：TIMESTAMP 不含时区、TIMESTAMPTZ 含时区，AT TIME ZONE 用于转换。订单系统需要统一使用 UTC 存储，展示时转换为用户时区。"
        ],
        handsOnPath: [
            "设计订单表结构：orders(id, user_id, status, total_amount, snapshot, created_at, updated_at)，snapshot 使用 JSONB 存储商品快照。",
            "实现订单创建时的快照生成：查询购物车商品的当前信息（名称、价格、规格、图片 URL），序列化为 JSON 存入 snapshot 字段。",
            "实现 Keyset 分页的订单列表 API：WHERE (created_at, id) < (?, ?) ORDER BY created_at DESC, id DESC LIMIT 20，返回 next_cursor 供下一页使用。",
            "设计订单事件表：order_events(id, order_id, event_type, payload, created_at)，记录订单生命周期的所有事件：created、paid、shipped、delivered、cancelled。",
            "实现订单详情查询：JOIN 订单表和订单项表，解析 snapshot JSON 展示商品信息。",
            "使用 PostgreSQL 日期函数实现订单统计：按日/周/月聚合订单数量和金额，使用 date_trunc 进行时间分组。",
            "实现订单搜索功能：支持按订单号、时间范围、状态筛选，使用复合索引优化查询。"
        ],
        selfCheck: [
            "为什么订单需要存储商品快照？如果不存储会有什么问题？",
            "Event Sourcing 的核心思想是什么？它与传统 CRUD 有什么区别？",
            "Event Sourcing 提供的三种能力（Complete Rebuild、Temporal Query、Event Replay）各有什么用途？",
            "OFFSET 分页在大数据量时有什么性能问题？Keyset Pagination 如何解决？",
            "Keyset Pagination 对排序有什么要求？为什么需要确定性排序？",
            "PostgreSQL 的 TIMESTAMP 和 TIMESTAMPTZ 有什么区别？订单系统应该用哪个？",
            "如何设计订单事件表？记录哪些事件类型？",
            "快照机制如何优化 Event Sourcing 的性能？"
        ],
        extensions: [
            "研究 Event Sourcing 的实际应用案例：银行交易系统、审计日志、协作编辑。",
            "探索 CQRS 与 Event Sourcing 的结合，分离订单写入和查询模型。",
            "学习 PostgreSQL 的 JSONB 索引：GIN 索引支持 JSONB 内部字段的高效查询。",
            "研究订单数据的归档策略：历史订单迁移到冷存储，保持主表性能。",
            "探索 GraphQL Cursor Pagination 实现，了解 Relay 规范的分页设计。"
        ],
        sourceUrls: [
            "https://martinfowler.com/eaaDev/EventSourcing.html",
            "https://use-the-index-luke.com/sql/partial-results/fetch-next-page",
            "https://www.postgresql.org/docs/current/functions-datetime.html"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "w6-1": [
        {
            id: "w6-1-q1",
            question: "Redis 官方教程推荐使用什么数据结构存储购物车？",
            options: [
                "String（字符串）",
                "List（列表）",
                "Hash（哈希）",
                "Set（集合）"
            ],
            answer: 2,
            rationale: "Redis 官方教程使用 Hash 存储购物车：HSET cart:{cartId} product:{productId} quantity，一个 Hash 对应一个用户的购物车，字段为商品 ID，值为数量。"
        },
        {
            id: "w6-1-q2",
            question: "Redis Hash 中用于原子增减商品数量的命令是？",
            options: [
                "HSET",
                "HGET",
                "HINCRBY",
                "HDEL"
            ],
            answer: 2,
            rationale: "HINCRBY 可以原子地增加或减少 Hash 字段的数值，如 HINCRBY cart:user123 product:1 -1 将商品数量减 1。"
        },
        {
            id: "w6-1-q3",
            question: "Redis 官方教程推荐将购物车存储在 Redis 而非数据库的主要原因是？",
            options: [
                "Redis 存储更安全",
                "实现 'sub-200ms backend response times'——亚 200 毫秒响应时间",
                "Redis 存储更便宜",
                "数据库不支持购物车功能"
            ],
            answer: 1,
            rationale: "Redis 官方教程指出将临时购物车存储在 Redis 可以实现 'sub-200ms backend response times'，同时减少数据库负载。"
        },
        {
            id: "w6-1-q4",
            question: "Zustand 状态管理库的官方描述是什么？",
            options: [
                "企业级状态管理框架",
                "'a small, fast and scalable bearbones state-management solution'——轻量快速可扩展的状态管理方案",
                "React 官方状态管理库",
                "仅用于大型应用的状态管理"
            ],
            answer: 1,
            rationale: "Zustand 官方描述为 'a small, fast and scalable bearbones state-management solution using simplified flux principles'——轻量级、基于简化 Flux 原则的状态管理方案。"
        },
        {
            id: "w6-1-q5",
            question: "处理未登录用户购物车的常见方案是？",
            options: [
                "不支持未登录用户的购物车",
                "使用随机 cartId 存入 Session/Cookie，登录后合并",
                "强制用户登录才能使用购物车",
                "将购物车数据存储在 URL 中"
            ],
            answer: 1,
            rationale: "常见方案是为未登录用户生成随机 cartId 存入 Session/Cookie，购物车数据存储在 Redis 中，用户登录后将匿名购物车合并到用户账户。"
        },
        {
            id: "w6-1-q6",
            question: "购物车中应该存储商品价格吗？为什么？",
            options: [
                "应该存储，避免价格变动影响用户",
                "应该存储，减少数据库查询",
                "不建议存储，价格在展示和结算时实时查询，避免不一致",
                "不建议存储，节省存储空间"
            ],
            answer: 2,
            rationale: "购物车建议只存储商品 ID 和数量，价格在展示和结算时实时查询。这样可以确保用户看到的价格与实际支付价格一致，避免促销活动或价格调整导致的不一致问题。"
        },
        {
            id: "w6-1-q7",
            question: "Redis Hash 的 HDEL 命令的作用是？",
            options: [
                "删除整个 Hash",
                "删除 Hash 中的一个或多个字段",
                "减少字段的数值",
                "清空 Hash 的所有字段但保留 key"
            ],
            answer: 1,
            rationale: "HDEL 用于删除 Hash 中的一个或多个字段，如 HDEL cart:user123 product:1 删除购物车中的某个商品。删除整个 Hash 应该使用 DEL 命令。"
        },
        {
            id: "w6-1-q8",
            question: "Zustand 相比传统 Redux 的主要优势是？",
            options: [
                "更复杂的 API",
                "需要更多的样板代码",
                "无需 Provider 包裹，组件只在相关状态变化时重渲染",
                "仅支持同步操作"
            ],
            answer: 2,
            rationale: "Zustand 的优势包括：无需 Context Provider 包裹应用、组件只在选择的状态变化时重渲染、API 简洁（minimal boilerplate）、支持异步操作。"
        },
        {
            id: "w6-1-q9",
            question: "如何设置 Redis 购物车的过期时间？",
            options: [
                "使用 SETEX 命令",
                "使用 EXPIRE cart:{cartId} 秒数 命令",
                "使用 TIMEOUT 命令",
                "Redis 不支持设置过期时间"
            ],
            answer: 1,
            rationale: "使用 EXPIRE 命令设置 key 的过期时间，如 EXPIRE cart:user123 604800 设置购物车 7 天后过期。也可以在 SET 时使用 EX 参数。"
        },
        {
            id: "w6-1-q10",
            question: "购物车合并时，如果同一商品在匿名购物车和用户购物车中都存在，应该如何处理？",
            options: [
                "只保留匿名购物车的数量",
                "只保留用户购物车的数量",
                "随机选择一个",
                "根据业务策略选择：覆盖、数量相加、或保留最新"
            ],
            answer: 3,
            rationale: "购物车合并策略取决于业务需求：覆盖（用其中一个替换另一个）、合并（数量相加）、保留最新（比较更新时间）。需要根据具体业务场景选择合适的策略。"
        },
        {
            id: "w6-1-q11",
            question: "Redis 官方教程中提到除了 Hash，还可以使用什么数据类型存储商品信息？",
            options: [
                "String",
                "List",
                "JSON（RedisJSON 模块）",
                "Stream"
            ],
            answer: 2,
            rationale: "Redis 官方教程提到可以使用 JSON 数据类型存储丰富的商品信息：JSON.SET product:{productId} $ '{...product details...}'，适合需要存储复杂商品属性的场景。"
        },
        {
            id: "w6-1-q12",
            question: "购物车中商品下架后应该如何处理？",
            options: [
                "自动从购物车删除，不通知用户",
                "保留在购物车，但标记为失效并提示用户",
                "阻止用户访问购物车",
                "自动替换为类似商品"
            ],
            answer: 1,
            rationale: "商品下架后应保留在购物车中但标记为失效，并给用户清晰的失效提示。这样用户可以看到之前添加过什么商品，也不会误以为还能购买。"
        }
    ],
    "w6-2": [
        {
            id: "w6-2-q1",
            question: "Sylius 对状态机的定义是什么？",
            options: [
                "一种数据库设计模式",
                "'a model that describes the sequential logic of some process'——描述流程顺序逻辑的模型",
                "一种前端组件库",
                "一种缓存策略"
            ],
            answer: 1,
            rationale: "Sylius 定义状态机为 'a model that describes the sequential logic of some process'——描述流程顺序逻辑的模型，由严格定义的状态和转移组成。"
        },
        {
            id: "w6-2-q2",
            question: "XState 实现的三个核心概念是什么？",
            options: [
                "MVC、MVP、MVVM",
                "状态机、状态图、Actor 模型",
                "组件、属性、状态",
                "路由、中间件、控制器"
            ],
            answer: 1,
            rationale: "XState 官方文档说明它实现 'state machines, statecharts, and the actor model'——状态机、状态图和 Actor 模型。"
        },
        {
            id: "w6-2-q3",
            question: "状态机在电商系统中的核心价值是什么？",
            options: [
                "提升数据库性能",
                "'gives you a standard way to configure and execute business processes'——提供配置和执行业务流程的标准方式",
                "减少代码量",
                "简化前端开发"
            ],
            answer: 1,
            rationale: "状态机 'gives you a standard way to configure and execute business processes'，可以防止无效的工作流转移，确保业务流程合规。"
        },
        {
            id: "w6-2-q4",
            question: "XState 中用于创建状态机的函数是？",
            options: [
                "createStore()",
                "createMachine()",
                "createState()",
                "createFlow()"
            ],
            answer: 1,
            rationale: "XState 使用 createMachine() 函数创建状态机，配置包括 id、initial（初始状态）、context（上下文数据）、states（状态定义）等。"
        },
        {
            id: "w6-2-q5",
            question: "XState 中处理状态转移时执行副作用（如发送通知）的机制是？",
            options: [
                "使用 middleware",
                "使用 entry actions 和 exit actions",
                "使用 callbacks",
                "使用 observers"
            ],
            answer: 1,
            rationale: "XState 使用 entry actions（进入状态时执行）和 exit actions（离开状态时执行）处理状态转移的副作用，如发送通知、更新数据等。"
        },
        {
            id: "w6-2-q6",
            question: "Commercetools 强调状态转移必须保证什么特性？",
            options: [
                "高性能",
                "幂等性（idempotency）",
                "异步执行",
                "可撤销"
            ],
            answer: 1,
            rationale: "Commercetools 强调 'idempotency'——状态转移必须幂等，重复的事件不应导致多次转移。需要记录已处理的事件 ID 防止重复处理。"
        },
        {
            id: "w6-2-q7",
            question: "XState 中用于控制状态转移条件的机制是？",
            options: [
                "validators",
                "guards（守卫）",
                "interceptors",
                "filters"
            ],
            answer: 1,
            rationale: "XState 使用 guards（守卫条件）控制状态转移是否允许发生，如 canShip 检查是否已支付、库存是否充足等前置条件。"
        },
        {
            id: "w6-2-q8",
            question: "如何使用 XState 实现订单超时自动取消？",
            options: [
                "使用外部定时器",
                "使用 XState 的 delayed transitions",
                "使用数据库触发器",
                "使用轮询机制"
            ],
            answer: 1,
            rationale: "XState 提供 delayed transitions（延迟转移）机制，可以配置在指定时间后自动触发状态转移，如待支付订单 30 分钟后自动转为已取消。"
        },
        {
            id: "w6-2-q9",
            question: "典型电商订单从「已支付」状态可以转移到哪个状态？",
            options: [
                "购物车",
                "待支付",
                "已发货/待发货",
                "已退款"
            ],
            answer: 2,
            rationale: "已支付状态通常转移到「待发货」或「已发货」状态。不能回退到「购物车」或「待支付」。退款需要通过售后流程，通常会进入「退款中」状态。"
        },
        {
            id: "w6-2-q10",
            question: "XState 中用于存储订单金额、用户 ID 等数据的机制是？",
            options: [
                "state",
                "context",
                "payload",
                "data"
            ],
            answer: 1,
            rationale: "XState 的 context 用于存储与状态机相关的数据，如订单金额、用户 ID、支付时间等。context 可以通过 assign() 函数在状态转移时更新。"
        },
        {
            id: "w6-2-q11",
            question: "如何处理订单的支付状态和物流状态同时演进的场景？",
            options: [
                "使用两个独立的状态机",
                "使用 XState 的 parallel states",
                "使用嵌套的 if-else",
                "不支持这种场景"
            ],
            answer: 1,
            rationale: "XState 支持 parallel states（并行状态），可以建模订单同时处于多个状态维度，如支付状态（已支付/退款中）和物流状态（待发货/已发货）同时演进。"
        },
        {
            id: "w6-2-q12",
            question: "状态机系统如何验证状态转移的合法性？",
            options: [
                "不验证，允许任意转移",
                "只有预定义的转移才被允许，防止无效工作流",
                "由前端验证",
                "由数据库约束验证"
            ],
            answer: 1,
            rationale: "状态机系统只允许预定义的状态转移，'preventing invalid workflows'——防止无效工作流。如订单不能从「已签收」直接转为「待支付」。"
        }
    ],
    "w6-3": [
        {
            id: "w6-3-q1",
            question: "CockroachDB 库存管理文章指出库存系统的核心目标是什么？",
            options: [
                "尽可能多卖",
                "'sell inventory to zero but never sell beyond zero'——卖到零但绝不超卖",
                "保持库存充足",
                "最大化利润"
            ],
            answer: 1,
            rationale: "CockroachDB 文章明确指出核心目标是 'sell inventory to zero but never sell beyond zero'——既要卖到零实现销售最大化，又绝不能超卖。"
        },
        {
            id: "w6-3-q2",
            question: "PostgreSQL 中用于锁定查询行的命令是？",
            options: [
                "SELECT ... LOCK ROW",
                "SELECT ... FOR UPDATE",
                "SELECT ... WITH LOCK",
                "LOCK SELECT ..."
            ],
            answer: 1,
            rationale: "PostgreSQL 使用 SELECT ... FOR UPDATE 锁定查询的行，阻止其他事务修改或删除这些行，直到当前事务结束。"
        },
        {
            id: "w6-3-q3",
            question: "Redis 分布式锁获取时使用的参数 NX 的作用是？",
            options: [
                "设置过期时间",
                "只有 key 不存在时才设置（原子性）",
                "设置锁的名称",
                "指定锁的超时时间"
            ],
            answer: 1,
            rationale: "NX 参数表示 'only set if not exists'——只有 key 不存在时才设置成功，保证获取锁的原子性，防止多个进程同时获取同一把锁。"
        },
        {
            id: "w6-3-q4",
            question: "Redis 官方推荐的高可靠分布式锁算法是？",
            options: [
                "SingleLock",
                "Redlock",
                "MasterLock",
                "DistLock"
            ],
            answer: 1,
            rationale: "Redis 官方推荐 Redlock 算法：在多个独立 Redis 节点上获取锁，需要在大多数节点（n/2+1）上成功才算获取成功，提高锁的可靠性和容错能力。"
        },
        {
            id: "w6-3-q5",
            question: "释放 Redis 分布式锁时为什么需要验证锁的所有者？",
            options: [
                "提高性能",
                "防止误删其他进程的锁",
                "简化代码",
                "满足 Redis 要求"
            ],
            answer: 1,
            rationale: "如果不验证锁的所有者，A 进程的锁可能在超时后被自动释放，然后 B 进程获取了锁，此时 A 进程执行释放操作会误删 B 进程的锁。使用 unique_value 验证可以防止这种情况。"
        },
        {
            id: "w6-3-q6",
            question: "PostgreSQL 如何处理死锁？",
            options: [
                "不处理，等待人工干预",
                "'automatically detects deadlock and resolves them by aborting one of the transactions'——自动检测并中止其中一个事务",
                "重启数据库",
                "杀死所有涉及的进程"
            ],
            answer: 1,
            rationale: "PostgreSQL 文档指出：'PostgreSQL automatically detects deadlock situations and resolves them by aborting one of the transactions involved'——自动检测死锁并中止其中一个事务来解决。"
        },
        {
            id: "w6-3-q7",
            question: "乐观锁和悲观锁的核心区别是什么？",
            options: [
                "乐观锁性能更好，悲观锁更安全",
                "悲观锁在查询时锁定，乐观锁在更新时检测冲突",
                "乐观锁只能用于读操作",
                "悲观锁只能用于写操作"
            ],
            answer: 1,
            rationale: "悲观锁通过 SELECT FOR UPDATE 在查询时就锁定行，阻止并发修改；乐观锁不锁定行，而是通过版本号（version 字段）在更新时检测是否有冲突。"
        },
        {
            id: "w6-3-q8",
            question: "库存预扣机制中，支付超时后应该如何处理预扣的库存？",
            options: [
                "保持锁定状态",
                "自动释放，恢复可用库存",
                "标记为损耗",
                "转移到其他订单"
            ],
            answer: 1,
            rationale: "支付超时后需要自动释放预扣的库存：locked_stock -= quantity, available_stock += quantity，让其他用户可以购买。通常通过定时任务或消息队列实现超时回滚。"
        },
        {
            id: "w6-3-q9",
            question: "为什么使用 Lua 脚本实现 Redis 库存扣减？",
            options: [
                "Lua 脚本更快",
                "保证检查库存和扣减操作的原子性",
                "Lua 语法更简洁",
                "Redis 只支持 Lua"
            ],
            answer: 1,
            rationale: "Lua 脚本在 Redis 中原子执行，可以保证「检查库存是否充足」和「扣减库存」两个操作的原子性，防止并发场景下的超卖问题。"
        },
        {
            id: "w6-3-q10",
            question: "CockroachDB 文章推荐使用什么模式将库存变更推送给微服务？",
            options: [
                "轮询（Polling）",
                "CDC（Change Data Capture）+ 消息队列",
                "直接调用",
                "WebSocket"
            ],
            answer: 1,
            rationale: "CockroachDB 文章推荐使用 CDC（Change Data Capture）将库存变更推送到消息队列（如 Kafka），微服务消费变更事件而非持续查询数据库，实现解耦。"
        },
        {
            id: "w6-3-q11",
            question: "设计库存表时，available_stock 与 total_stock、locked_stock 的关系是？",
            options: [
                "available_stock = total_stock + locked_stock",
                "available_stock = total_stock - locked_stock",
                "available_stock = locked_stock - total_stock",
                "三者相互独立"
            ],
            answer: 1,
            rationale: "available_stock = total_stock - locked_stock。total_stock 是总库存，locked_stock 是已被订单锁定但未支付的库存，available_stock 是当前可售库存。"
        },
        {
            id: "w6-3-q12",
            question: "PostgreSQL 的 FOR NO KEY UPDATE 与 FOR UPDATE 的区别是？",
            options: [
                "FOR NO KEY UPDATE 不锁定任何行",
                "FOR NO KEY UPDATE 是弱排他锁，不阻止 FOR KEY SHARE",
                "FOR NO KEY UPDATE 只锁定主键",
                "两者完全相同"
            ],
            answer: 1,
            rationale: "FOR NO KEY UPDATE 是比 FOR UPDATE 更弱的排他锁，它不阻止 FOR KEY SHARE 锁，适用于不需要完全独占的场景，可以提高并发性。"
        }
    ],
    "w6-4": [
        {
            id: "w6-4-q1",
            question: "Martin Fowler 对 Event Sourcing 的定义是什么？",
            options: [
                "一种数据库备份策略",
                "'captures all changes to application state as a sequence of events'——将应用状态的所有变更捕获为事件序列",
                "一种日志分析工具",
                "一种消息队列模式"
            ],
            answer: 1,
            rationale: "Martin Fowler 定义 Event Sourcing：'captures all changes to application state as a sequence of events'——不只存储当前状态，而是记录所有导致状态变化的事件。"
        },
        {
            id: "w6-4-q2",
            question: "Event Sourcing 中，系统的权威数据来源是什么？",
            options: [
                "当前状态表",
                "事件日志",
                "缓存数据",
                "配置文件"
            ],
            answer: 1,
            rationale: "Event Sourcing 中事件日志是权威记录：'application state being purely derivable from the event log'——应用状态完全可从事件日志推导出来。"
        },
        {
            id: "w6-4-q3",
            question: "Use The Index Luke 文章指出 OFFSET 分页的问题是什么？",
            options: [
                "语法复杂",
                "'the database must count all rows from the beginning'——数据库必须从头计数，性能随页数下降",
                "不支持排序",
                "只能用于小数据量"
            ],
            answer: 1,
            rationale: "Use The Index Luke 指出：传统 OFFSET 分页随着页数增加性能下降，因为 'the database must count all rows from the beginning until it reaches the requested page'。"
        },
        {
            id: "w6-4-q4",
            question: "Keyset Pagination 的核心思想是？",
            options: [
                "使用页码定位",
                "使用上一页的值作为分隔符定位下一页",
                "使用随机数定位",
                "使用缓存加速"
            ],
            answer: 1,
            rationale: "Keyset Pagination 使用 'the values of the previous page as a delimiter'——上一页的值作为分隔符，如 WHERE (created_at, id) < (?, ?) 直接定位，性能恒定。"
        },
        {
            id: "w6-4-q5",
            question: "订单快照存储的主要目的是？",
            options: [
                "减少数据库查询",
                "保留下单时的商品信息，即使商品后来修改或下架也能正确显示",
                "提高查询性能",
                "节省存储空间"
            ],
            answer: 1,
            rationale: "订单快照记录下单时的商品信息（名称、价格、规格等），即使商品后来修改或下架，历史订单仍能正确显示当时的购买内容。"
        },
        {
            id: "w6-4-q6",
            question: "Event Sourcing 提供的三种关键能力是？",
            options: [
                "读、写、删除",
                "Complete Rebuild、Temporal Query、Event Replay",
                "增、删、改",
                "查询、聚合、统计"
            ],
            answer: 1,
            rationale: "Martin Fowler 指出 Event Sourcing 提供三种能力：Complete Rebuild（完全重建状态）、Temporal Query（查询任意时间点状态）、Event Replay（重放事件修正错误）。"
        },
        {
            id: "w6-4-q7",
            question: "Keyset Pagination 对排序有什么要求？",
            options: [
                "必须降序排列",
                "必须升序排列",
                "需要 'deterministic sort order'——确定性排序",
                "不需要排序"
            ],
            answer: 2,
            rationale: "Use The Index Luke 强调 Keyset Pagination 要求 'deterministic sort order'——确定性排序，否则相同值的记录顺序不稳定会导致分页不一致。"
        },
        {
            id: "w6-4-q8",
            question: "Martin Fowler 提到的快照优化机制是什么？",
            options: [
                "每次请求都创建快照",
                "定期创建状态快照，崩溃后从快照恢复并只重放近期事件",
                "不创建快照，总是重放所有事件",
                "只在用户请求时创建快照"
            ],
            answer: 1,
            rationale: "Martin Fowler 提到：'A crashed system restarts from the overnight snapshot and replays only recent events'——系统崩溃后从快照恢复并只重放近期事件，而非重放所有历史事件。"
        },
        {
            id: "w6-4-q9",
            question: "PostgreSQL 中用于提取日期字段（如年、月）的函数是？",
            options: [
                "GET_FIELD()",
                "EXTRACT()",
                "DATE_FIELD()",
                "PARSE_DATE()"
            ],
            answer: 1,
            rationale: "PostgreSQL 使用 EXTRACT(field FROM source) 提取日期时间的子字段，如 EXTRACT(YEAR FROM created_at) 提取年份，EXTRACT(MONTH FROM created_at) 提取月份。"
        },
        {
            id: "w6-4-q10",
            question: "PostgreSQL 的 TIMESTAMP 和 TIMESTAMPTZ 的区别是？",
            options: [
                "两者完全相同",
                "TIMESTAMP 不含时区，TIMESTAMPTZ 含时区",
                "TIMESTAMP 精度更高",
                "TIMESTAMPTZ 不支持时区转换"
            ],
            answer: 1,
            rationale: "PostgreSQL 的 TIMESTAMP 不含时区信息，TIMESTAMPTZ（TIMESTAMP WITH TIME ZONE）含时区信息。订单系统建议使用 TIMESTAMPTZ 并统一存储 UTC 时间。"
        },
        {
            id: "w6-4-q11",
            question: "Use The Index Luke 文章指出从第几页开始 OFFSET 和 Keyset 性能差异明显？",
            options: [
                "第 5 页",
                "第 10 页",
                "第 20 页",
                "第 100 页"
            ],
            answer: 2,
            rationale: "文章指出：'the difference is clearly visible from about page 20 onwards'——从大约第 20 页开始差异明显，Keyset 保持恒定性能而 OFFSET 性能下降。"
        },
        {
            id: "w6-4-q12",
            question: "订单事件表应该记录哪些事件类型？",
            options: [
                "只记录创建事件",
                "只记录最终状态",
                "记录订单生命周期的所有事件：created、paid、shipped、delivered、cancelled 等",
                "只记录错误事件"
            ],
            answer: 2,
            rationale: "订单事件表应记录订单生命周期的所有事件：created（创建）、paid（支付）、shipped（发货）、delivered（签收）、cancelled（取消）、refunded（退款）等，提供完整的审计追踪。"
        }
    ]
}
