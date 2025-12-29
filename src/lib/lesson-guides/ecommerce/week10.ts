import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "w10-1": {
        lessonId: "w10-1",
        background: [
            "【系统架构】GeeksforGeeks 指出优惠券系统采用微服务架构，包含四层：前端层（Web/Mobile）、后端服务层（Coupon Service、Voucher Service、User Service）、数据库层（关系型 + NoSQL）、缓存层（Redis/Memcached）。",
            "【核心服务】优惠券系统包含三大核心服务：Coupon Generation Service（生成优惠券）、Key Generation Service（生成唯一券码，可采用 Twitter Snowflake 算法）、Coupon Claim Service（处理领取和核销）。",
            "【Stripe Coupons】Stripe 的优惠券 API 支持 'percent-off or amount-off discount'，可应用于订阅服务、发票、结账会话、报价单，但不支持一次性收费。",
            "【数据模型】优惠券系统包含两个核心表：Coupon Definition Table（模板表，记录优惠券属性）和 Coupon Instance Table（实例表，记录优惠券与用户的绑定关系）。",
            "【防刷机制】Stripe Radar 提供规则引擎 'allow rules to execute actions when payments match specific criteria'，支持 AI 风险评估、自定义规则、名单管理等多层防护。"
        ],
        keyDifficulties: [
            "【并发领取】高并发场景下防止超发是核心挑战。两种方案：全局计数器（使用 Redis DECR 原子操作）；预生成券池（提前生成券码存入队列，领取时直接绑定用户）。",
            "【唯一性保证】优惠券码需要全局唯一且不可预测。使用 Twitter Snowflake 生成 64 位 ID，或使用 UUID + 业务前缀组合。",
            "【规则配置】优惠券规则复杂多变：使用门槛（满 X 减 Y）、使用范围（全场/指定品类/指定商品）、叠加规则（与其他优惠是否互斥）、有效期（固定时间/领取后 N 天）。",
            "【防刷策略】Stripe Radar 建议规则设计要精确：'block overseas payments with high risk' 而非 'block all overseas payments'——避免误伤正常用户。"
        ],
        handsOnPath: [
            "设计优惠券数据库表结构：coupon_templates（模板）、coupon_instances（实例）、coupon_rules（规则）、user_coupons（用户领取记录）。",
            "实现优惠券生成服务：支持批量生成、单独生成、指定前缀等方式。",
            "使用 Redis 实现优惠券库存管理：SET coupon:{id}:stock 100，领取时 DECR，返回值 < 0 表示已领完。",
            "实现优惠券领取接口：校验用户资格、检查库存、创建领取记录、发送领取成功通知。",
            "实现优惠券核销接口：校验优惠券有效性、检查使用条件、标记为已使用、记录核销订单。",
            "集成 Rate Limiter 防止单用户频繁领取：使用 Redis 滑动窗口限流。"
        ],
        selfCheck: [
            "优惠券系统的两个核心数据表分别存储什么信息？",
            "如何防止高并发场景下优惠券超发？",
            "Twitter Snowflake 算法生成的 ID 有什么特点？",
            "优惠券的使用规则通常包含哪些维度？",
            "Stripe Radar 如何平衡防欺诈和用户体验？",
            "为什么优惠券核销需要记录关联的订单号？"
        ],
        extensions: [
            "研究主流电商平台（淘宝、京东、拼多多）的优惠券玩法：红包雨、叠加券、店铺券等。",
            "学习 Voucherify 等专业优惠券 SaaS 平台的架构设计。",
            "探索优惠券与会员体系的结合：会员专属券、等级折扣等。",
            "了解优惠券的财务处理：优惠券成本分摊、税务处理等。"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/system-design/design-coupon-and-voucher-management-system/",
            "https://docs.stripe.com/api/coupons",
            "https://docs.stripe.com/radar/rules"
        ]
    },
    "w10-2": {
        lessonId: "w10-2",
        background: [
            "【规则引擎定义】Martin Fowler 定义规则引擎为 'a set of production rules, each with a condition and an action'——由条件和动作组成的生产规则集合，引擎按自己的逻辑顺序评估规则。",
            "【策略模式】Strategy Pattern 是 'a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable'——将算法封装成独立类，运行时可互换。",
            "【促销类型】电商促销主要包含：满减（Threshold Discount）、折扣（Percentage Off）、立减（Fixed Amount Off）、买赠（Buy X Get Y）、组合优惠（Bundle Discount）。",
            "【规则引擎架构】Nected 指出规则引擎设计模式 'centralizes and manages business rules within a system, allowing for dynamic rule changes without altering the core application'——集中管理业务规则，支持动态更新。",
            "【计算层次】促销计算通常分层：商品级优惠（单品折扣）→ 订单级优惠（满减）→ 支付优惠（支付立减）→ 优惠券抵扣。"
        ],
        keyDifficulties: [
            "【规则复杂性】Martin Fowler 警告 'rule interactions are often quite complex'——规则间的交互可能产生意外后果，一个小改动可能影响整个系统。建议严格限制规则数量。",
            "【叠加与互斥】促销叠加规则是核心难点：平台优惠 + 店铺优惠可叠加，同类优惠通常互斥取最优。需要明确定义优惠组合的优先级。",
            "【最优选择】当用户有多张可用优惠券时，系统需要自动计算最优组合。这是一个组合优化问题，需要在计算效率和最优解之间权衡。",
            "【规则冲突】多条规则可能产生冲突结果。需要定义规则优先级、互斥组、叠加上限等机制。"
        ],
        handsOnPath: [
            "定义促销规则的数据结构：type（满减/折扣/买赠）、condition（触发条件）、action（优惠动作）、priority（优先级）、exclusive_group（互斥组）。",
            "使用策略模式实现各类促销计算器：ThresholdDiscountStrategy、PercentageOffStrategy、BuyXGetYStrategy。",
            "实现规则引擎核心逻辑：加载规则 → 筛选可用规则 → 按优先级排序 → 依次应用 → 计算最终价格。",
            "实现优惠叠加逻辑：定义互斥组，同组内取最优，不同组可叠加。",
            "实现「最优优惠券推荐」功能：遍历用户所有可用优惠券，计算各组合的最终价格，返回最优方案。",
            "编写单元测试覆盖各种促销场景：单品折扣、满减、叠加、互斥等。"
        ],
        selfCheck: [
            "Martin Fowler 为什么建议避免使用通用规则引擎产品？",
            "策略模式解决了什么问题？在促销系统中如何应用？",
            "促销计算的分层顺序是什么？",
            "如何处理优惠券之间的互斥关系？",
            "「最优优惠」计算的算法复杂度是什么？如何优化？",
            "规则引擎的动态更新有什么优势？"
        ],
        extensions: [
            "研究 Drools、EasyRules 等开源规则引擎的设计思想。",
            "学习电商平台的「凑单」功能实现：推荐商品帮用户达到满减门槛。",
            "探索 DSL（领域特定语言）在促销规则配置中的应用。",
            "了解机器学习在个性化促销推荐中的应用。"
        ],
        sourceUrls: [
            "https://martinfowler.com/bliki/RulesEngine.html",
            "https://refactoring.guru/design-patterns/strategy",
            "https://www.nected.ai/us/blog-us/rules-engine-design-pattern"
        ]
    },
    "w10-3": {
        lessonId: "w10-3",
        background: [
            "【秒杀定义】Design Gurus 定义秒杀为 'short-term sales events where limited inventory is sold to massive numbers of buyers in very short timeframes'——短时间内向大量买家销售有限库存的销售活动。",
            "【核心挑战】秒杀面临极端并发：数十万用户同时访问，百万请求抢购数千件商品。必须保证一致性（不超卖）、低延迟、高可用。",
            "【Redis DECR】Redis DECR 命令 'decrements the number stored at key by one' 是原子操作，时间复杂度 O(1)，非常适合库存扣减场景。如果 key 不存在，先设为 0 再减 1。",
            "【限流算法】ByteByteGo 介绍五种核心限流算法：Fixed Window Counter、Sliding Window Log、Sliding Window Counter、Token Bucket、Leaky Bucket。",
            "【流量控制】限流器操作围绕三要素：Limit（时间窗口内最大请求数）、Window（时间间隔）、Identifier（用户标识，如 User ID、IP）。"
        ],
        keyDifficulties: [
            "【库存一致性】秒杀最大挑战是防止超卖。使用 Redis DECR 原子扣减，返回值 < 0 表示库存不足，需要回滚（INCR）并拒绝请求。",
            "【流量削峰】瞬时流量远超系统承载能力。解决方案：答题验证（延迟分散请求）、排队机制（消息队列异步处理）、令牌桶限流（控制请求速率）。",
            "【公平性保证】防止机器人和黄牛：验证码、IP 限制、设备指纹、用户行为分析。同时要保证普通用户的公平参与机会。",
            "【系统隔离】秒杀流量可能冲击正常业务。需要独立部署秒杀服务，使用独立的 Redis 集群和数据库连接池。"
        ],
        handsOnPath: [
            "设计秒杀系统架构图：CDN 静态化 → 接入层限流 → 排队服务 → 库存服务 → 订单服务。",
            "实现库存预热：秒杀开始前将库存加载到 Redis，使用 SET seckill:{id}:stock 100。",
            "使用 Redis Lua 脚本实现原子库存扣减：判断库存 → 扣减 → 返回结果，整个过程原子执行。",
            "实现令牌桶限流器：使用 Redis + Lua 脚本，控制每秒请求数上限。",
            "实现排队机制：使用 Redis List 或消息队列（RabbitMQ/Kafka）异步处理订单创建。",
            "实现秒杀结果查询：轮询接口或 WebSocket 推送，告知用户抢购结果。"
        ],
        selfCheck: [
            "秒杀系统为什么要把库存放在 Redis 而不是数据库？",
            "Redis DECR 命令的原子性如何保证？",
            "五种限流算法各有什么优缺点？",
            "消息队列在秒杀系统中起什么作用？",
            "如何防止秒杀系统被机器人攻击？",
            "秒杀服务为什么要独立部署？"
        ],
        extensions: [
            "研究阿里巴巴双十一的秒杀技术架构演进历史。",
            "学习 Redis Cluster 的分片机制，理解如何水平扩展缓存层。",
            "探索 Kafka 在秒杀订单异步处理中的应用。",
            "了解服务网格（Service Mesh）在流量控制中的应用。"
        ],
        sourceUrls: [
            "https://www.designgurus.io/course-play/grokking-system-design-interview-ii/doc/design-a-flash-sale-for-an-ecommerce-site",
            "https://redis.io/commands/decr/",
            "https://blog.bytebytego.com/p/rate-limiting-fundamentals"
        ]
    },
    "w10-4": {
        lessonId: "w10-4",
        background: [
            "【电商分析指标】Amplitude 将电商分析指标分为三类：受众分析（人口统计、跳出率、设备渠道）、获取与转化指标（CAC、转化率、AOV、购物车放弃率）、留存与忠诚度（CLV、留存率、流失率、回头客率）。",
            "【核心公式】转化率 = 购买人数 / 访问者总数 x 100%；CAC = 营销支出 / 新客户数；CLV = 平均购买频率 x 平均购买价值；留存率 = (期末客户数 - 新客户数) / 期初客户数 x 100%。",
            "【用户分群】Contentsquare 定义用户分群为 'dividing your user base into distinct groups based on shared characteristics, behaviors, needs, and preferences'——基于共享特征将用户划分为不同群体。",
            "【分群类型】8 种常见分群类型：人口统计、企业属性、地理位置、心理、技术、行为、需求、价值观分群。建议维持 3-8 个分群。",
            "【A/B 测试】Optimizely 定义 A/B 测试为 'show different variations of your website to different people and measure which variation is the most effective'——随机展示不同版本并测量效果。"
        ],
        keyDifficulties: [
            "【统计显著性】A/B 测试需要足够样本量才能得出可靠结论。Optimizely 建议测试运行 '1-2 weeks to account for traffic patterns'，需要考虑基准转化率、最小可检测改进值、置信水平（通常 95%）。",
            "【归因分析】营销归因是难题：用户可能通过多个渠道接触后才转化。常见归因模型：首次触点、末次触点、线性归因、时间衰减、位置归因。",
            "【数据孤岛】用户行为数据分散在多个系统：Web 分析、CRM、订单系统、客服系统。需要数据整合才能获得完整用户画像。",
            "【分群与画像区别】用户画像是 '理想目标受众的半虚构概况'，而分群是 '仅依靠历史数据' 划分的现有用户群体。两者互补使用。"
        ],
        handsOnPath: [
            "设计营销数据仪表盘：展示 GMV、转化率、客单价、新客占比等核心指标。",
            "实现 UTM 参数追踪：记录用户来源渠道（utm_source、utm_medium、utm_campaign）。",
            "实现漏斗分析：浏览 → 加购 → 下单 → 支付，计算各环节转化率和流失原因。",
            "实现用户分群功能：基于 RFM 模型（Recency、Frequency、Monetary）划分用户价值层级。",
            "实现 A/B 测试框架：随机分流、数据收集、显著性检验、结果报告。",
            "实现 ROI 计算：(营销收入 - 营销成本) / 营销成本 x 100%，支持按渠道、活动维度统计。"
        ],
        selfCheck: [
            "CAC、CLV、AOV 这三个指标分别代表什么？如何计算？",
            "A/B 测试为什么需要 1-2 周的运行时间？",
            "用户分群和用户画像有什么区别？",
            "RFM 模型的三个维度分别代表什么？",
            "如何解决营销数据孤岛问题？",
            "为什么建议维持 3-8 个用户分群？"
        ],
        extensions: [
            "学习 Google Analytics 4 的电商分析功能和事件追踪配置。",
            "探索数据仓库（Snowflake、BigQuery）在电商分析中的应用。",
            "研究机器学习在用户流失预测中的应用。",
            "了解 CDP（Customer Data Platform）在用户数据整合中的作用。"
        ],
        sourceUrls: [
            "https://amplitude.com/blog/ecommerce-analytics",
            "https://contentsquare.com/guides/user-segmentation/",
            "https://www.optimizely.com/optimization-glossary/ab-testing/"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "w10-1": [
        {
            id: "w10-1-q1",
            question: "根据 GeeksforGeeks，优惠券系统的微服务架构包含哪四层？",
            options: ["前端层、后端服务层、数据库层、缓存层", "用户层、业务层、数据层、网络层", "展示层、逻辑层、持久层、基础设施层", "接入层、服务层、存储层、监控层"],
            answer: 0,
            rationale: "GeeksforGeeks 指出优惠券系统采用微服务架构，包含四层：前端层（Web/Mobile）、后端服务层、数据库层（关系型 + NoSQL）、缓存层（Redis/Memcached）。"
        },
        {
            id: "w10-1-q2",
            question: "Stripe Coupons API 支持哪两种折扣类型？",
            options: ["满减和折扣", "percent-off 和 amount-off", "固定金额和百分比", "单品折扣和订单折扣"],
            answer: 1,
            rationale: "Stripe 的优惠券 API 支持 'percent-off or amount-off discount'，可应用于订阅服务、发票、结账会话、报价单。"
        },
        {
            id: "w10-1-q3",
            question: "优惠券系统的两个核心数据表分别是什么？",
            options: ["users 表和 orders 表", "Coupon Definition Table 和 Coupon Instance Table", "templates 表和 records 表", "rules 表和 logs 表"],
            answer: 1,
            rationale: "优惠券系统包含两个核心表：Coupon Definition Table（模板表，记录优惠券属性）和 Coupon Instance Table（实例表，记录优惠券与用户的绑定关系）。"
        },
        {
            id: "w10-1-q4",
            question: "使用 Twitter Snowflake 算法生成的 ID 是多少位？",
            options: ["32 位", "48 位", "64 位", "128 位"],
            answer: 2,
            rationale: "Key Generation Service 使用 Twitter Snowflake 算法生成 64 位唯一 ID，保证全局唯一且不可预测。"
        },
        {
            id: "w10-1-q5",
            question: "Stripe Radar 的规则引擎遵循什么语法结构？",
            options: ["IF condition THEN action", "{action} if {attribute} {operator} {value}", "WHEN condition DO action", "action WHERE condition"],
            answer: 1,
            rationale: "Stripe Radar 规则语法为 '{action} if {attribute} {operator} {value}'，支持灵活的条件配置和动作执行。"
        },
        {
            id: "w10-1-q6",
            question: "高并发场景下防止优惠券超发的两种方案是什么？",
            options: ["数据库锁和文件锁", "全局计数器和预生成券池", "乐观锁和悲观锁", "分布式锁和本地锁"],
            answer: 1,
            rationale: "两种防超发方案：全局计数器（使用 Redis DECR 原子操作）；预生成券池（提前生成券码存入队列，领取时直接绑定用户）。"
        },
        {
            id: "w10-1-q7",
            question: "Stripe Radar 在设计防欺诈规则时的建议是什么？",
            options: ["尽可能严格", "规则越多越好", "精确定位，避免误伤正常用户", "完全依赖 AI"],
            answer: 2,
            rationale: "Stripe Radar 建议规则设计要精确：'block overseas payments with high risk' 而非 'block all overseas payments'——避免误伤正常用户。"
        },
        {
            id: "w10-1-q8",
            question: "优惠券的使用规则通常不包括以下哪个维度？",
            options: ["使用门槛", "使用范围", "用户年龄", "有效期"],
            answer: 2,
            rationale: "优惠券规则包括使用门槛（满 X 减 Y）、使用范围（全场/品类/商品）、叠加规则、有效期等，用户年龄通常不是优惠券规则的维度。"
        },
        {
            id: "w10-1-q9",
            question: "使用 Redis 实现优惠券库存管理时，DECR 返回值 < 0 表示什么？",
            options: ["操作失败", "库存不足，已领完", "需要重试", "系统错误"],
            answer: 1,
            rationale: "使用 Redis DECR 扣减库存时，返回值 < 0 表示库存已经耗尽，需要回滚（INCR）并拒绝用户的领取请求。"
        },
        {
            id: "w10-1-q10",
            question: "Stripe Coupons API 不支持应用于以下哪种场景？",
            options: ["订阅服务", "发票", "一次性收费", "报价单"],
            answer: 2,
            rationale: "Stripe 的优惠券可应用于订阅服务、发票、结账会话、报价单，但明确说明不支持一次性收费或支付意图处理。"
        },
        {
            id: "w10-1-q11",
            question: "优惠券系统中 Rate Limiter 的作用是什么？",
            options: ["加速请求处理", "确保系统公平，防止用户滥用", "压缩数据传输", "负载均衡"],
            answer: 1,
            rationale: "Rate Limiter 的作用是保持系统公平并防止用户滥用系统。如果用户每天或每小时只能领取一次优惠券，Rate Limiter 确保这个约束被执行。"
        },
        {
            id: "w10-1-q12",
            question: "优惠券核销时为什么要记录关联的订单号？",
            options: ["方便用户查询", "用于财务对账和审计追踪", "提高查询性能", "满足合规要求"],
            answer: 1,
            rationale: "优惠券核销需要记录关联的订单号，用于财务对账、审计追踪、退款处理等场景，确保优惠券使用的可追溯性。"
        }
    ],
    "w10-2": [
        {
            id: "w10-2-q1",
            question: "Martin Fowler 如何定义规则引擎？",
            options: ["一种数据库查询工具", "由条件和动作组成的生产规则集合", "一种编程语言", "一种测试框架"],
            answer: 1,
            rationale: "Martin Fowler 定义规则引擎为 'a set of production rules, each with a condition and an action'——由条件和动作组成的生产规则集合。"
        },
        {
            id: "w10-2-q2",
            question: "Strategy Pattern 属于哪种设计模式类型？",
            options: ["创建型模式", "结构型模式", "行为型模式", "并发型模式"],
            answer: 2,
            rationale: "Strategy Pattern 是 'a behavioral design pattern'——行为型设计模式，将算法封装成独立类，运行时可互换。"
        },
        {
            id: "w10-2-q3",
            question: "Martin Fowler 对规则引擎的态度是什么？",
            options: ["强烈推荐使用", "建议构建轻量级定制解决方案，避免通用产品", "只适合大型企业", "已经过时"],
            answer: 1,
            rationale: "Martin Fowler 倾向于 'avoid rule engine products'，主张构建针对特定业务范围的轻量级定制解决方案。"
        },
        {
            id: "w10-2-q4",
            question: "促销计算的正确分层顺序是什么？",
            options: ["优惠券 → 满减 → 折扣", "商品级优惠 → 订单级优惠 → 支付优惠 → 优惠券抵扣", "支付优惠 → 订单优惠 → 商品优惠", "随机顺序"],
            answer: 1,
            rationale: "促销计算通常分层：商品级优惠（单品折扣）→ 订单级优惠（满减）→ 支付优惠（支付立减）→ 优惠券抵扣。"
        },
        {
            id: "w10-2-q5",
            question: "Martin Fowler 警告规则引擎的主要风险是什么？",
            options: ["性能太差", "规则间交互复杂，一个小改动可能产生大量意外后果", "不支持并发", "无法持久化"],
            answer: 1,
            rationale: "Martin Fowler 警告 'rule interactions are often quite complex'——规则间的交互可能产生意外后果，一个小改动可能影响整个系统。"
        },
        {
            id: "w10-2-q6",
            question: "电商促销的叠加规则通常是什么？",
            options: ["所有优惠都可叠加", "所有优惠都互斥", "平台优惠 + 店铺优惠可叠加，同类优惠通常互斥取最优", "用户自由选择"],
            answer: 2,
            rationale: "促销叠加规则的常见模式：平台优惠 + 店铺优惠可叠加，同类优惠通常互斥取最优。需要明确定义优惠组合的优先级。"
        },
        {
            id: "w10-2-q7",
            question: "Strategy Pattern 的四个核心组件是什么？",
            options: ["Model、View、Controller、Router", "Context、Strategy Interface、Concrete Strategies、Client", "Factory、Builder、Prototype、Singleton", "Observer、Subject、State、Event"],
            answer: 1,
            rationale: "Strategy Pattern 包含四个核心组件：Context（上下文）、Strategy Interface（策略接口）、Concrete Strategies（具体策略）、Client（客户端）。"
        },
        {
            id: "w10-2-q8",
            question: "规则引擎设计模式的核心优势是什么？",
            options: ["提高性能", "支持动态规则更新，无需修改核心应用", "减少代码量", "简化数据库设计"],
            answer: 1,
            rationale: "规则引擎设计模式 'centralizes and manages business rules, allowing for dynamic rule changes without altering the core application'——支持动态规则更新。"
        },
        {
            id: "w10-2-q9",
            question: "「最优优惠」计算面临什么算法挑战？",
            options: ["数据库查询慢", "是组合优化问题，需要在计算效率和最优解之间权衡", "网络延迟", "并发冲突"],
            answer: 1,
            rationale: "当用户有多张可用优惠券时，系统需要自动计算最优组合。这是一个组合优化问题，需要在计算效率和最优解之间权衡。"
        },
        {
            id: "w10-2-q10",
            question: "以下哪个不是电商促销的常见类型？",
            options: ["满减", "折扣", "买赠", "积分兑换"],
            answer: 3,
            rationale: "电商促销主要包含：满减（Threshold Discount）、折扣（Percentage Off）、立减（Fixed Amount Off）、买赠（Buy X Get Y）、组合优惠（Bundle Discount）。积分兑换属于会员体系。"
        },
        {
            id: "w10-2-q11",
            question: "处理规则冲突的常见机制不包括以下哪项？",
            options: ["规则优先级", "互斥组", "叠加上限", "随机选择"],
            answer: 3,
            rationale: "处理规则冲突的机制包括定义规则优先级、互斥组、叠加上限等，随机选择不是标准的冲突解决机制。"
        },
        {
            id: "w10-2-q12",
            question: "Strategy Pattern 什么时候不适用？",
            options: ["需要运行时切换算法", "有多个相似类只是执行方式不同", "算法简单且很少变化", "需要隔离业务逻辑和实现细节"],
            answer: 2,
            rationale: "Strategy Pattern 的缺点之一是 'adds unnecessary complexity for simple, rarely-changing algorithms'——对于简单且很少变化的算法，增加了不必要的复杂性。"
        }
    ],
    "w10-3": [
        {
            id: "w10-3-q1",
            question: "Design Gurus 如何定义秒杀系统？",
            options: ["普通的促销活动", "短时间内向大量买家销售有限库存的销售活动", "会员专属购物", "预售活动"],
            answer: 1,
            rationale: "Design Gurus 定义秒杀为 'short-term sales events where limited inventory is sold to massive numbers of buyers in very short timeframes'。"
        },
        {
            id: "w10-3-q2",
            question: "Redis DECR 命令的时间复杂度是多少？",
            options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
            answer: 2,
            rationale: "Redis DECR 命令 'decrements the number stored at key by one' 是原子操作，时间复杂度 O(1)，非常适合高并发场景。"
        },
        {
            id: "w10-3-q3",
            question: "ByteByteGo 介绍了几种核心限流算法？",
            options: ["3 种", "4 种", "5 种", "6 种"],
            answer: 2,
            rationale: "ByteByteGo 介绍五种核心限流算法：Fixed Window Counter、Sliding Window Log、Sliding Window Counter、Token Bucket、Leaky Bucket。"
        },
        {
            id: "w10-3-q4",
            question: "限流器操作围绕哪三个核心要素？",
            options: ["用户、时间、空间", "Limit、Window、Identifier", "请求、响应、超时", "并发、延迟、吞吐"],
            answer: 1,
            rationale: "限流器操作围绕三要素：Limit（时间窗口内最大请求数）、Window（时间间隔）、Identifier（用户标识，如 User ID、IP）。"
        },
        {
            id: "w10-3-q5",
            question: "Redis DECR 命令对不存在的 key 如何处理？",
            options: ["返回错误", "先设为 0 再减 1，返回 -1", "返回 null", "创建空字符串"],
            answer: 1,
            rationale: "Redis DECR 如果 key 不存在，先设为 0 再减 1，结果为 -1。这个特性在库存管理中需要特别注意。"
        },
        {
            id: "w10-3-q6",
            question: "秒杀系统中消息队列的主要作用是什么？",
            options: ["存储商品信息", "流量削峰，异步处理订单", "用户认证", "日志记录"],
            answer: 1,
            rationale: "消息队列在秒杀系统中用于流量削峰：将瞬时的大量请求放入队列，由后端服务按能力消费，避免系统被瞬时流量压垮。"
        },
        {
            id: "w10-3-q7",
            question: "秒杀系统为什么要独立部署？",
            options: ["降低成本", "秒杀流量可能冲击正常业务", "方便维护", "合规要求"],
            answer: 1,
            rationale: "秒杀流量可能冲击正常业务。需要独立部署秒杀服务，使用独立的 Redis 集群和数据库连接池，实现系统隔离。"
        },
        {
            id: "w10-3-q8",
            question: "限流器对超出限制的请求有哪三种处理方式？",
            options: ["忽略、重试、报错", "Blocking、Throttling、Shaping", "拒绝、排队、丢弃", "延迟、取消、合并"],
            answer: 1,
            rationale: "限流器有三种处理方式：Blocking（拒绝访问，返回 HTTP 429）、Throttling（降速或延迟）、Shaping（允许但降低优先级）。"
        },
        {
            id: "w10-3-q9",
            question: "秒杀系统防止超卖的核心技术是什么？",
            options: ["数据库事务", "Redis 原子操作（DECR 或 Lua 脚本）", "文件锁", "乐观锁"],
            answer: 1,
            rationale: "使用 Redis DECR 原子扣减或 Lua 脚本，返回值 < 0 表示库存不足，需要回滚并拒绝请求，保证不超卖。"
        },
        {
            id: "w10-3-q10",
            question: "秒杀系统的公平性保证措施不包括以下哪项？",
            options: ["验证码", "IP 限制", "提前泄露开始时间", "设备指纹"],
            answer: 2,
            rationale: "公平性保证措施包括验证码、IP 限制、设备指纹、用户行为分析等。提前泄露开始时间会破坏公平性，让部分用户获得不正当优势。"
        },
        {
            id: "w10-3-q11",
            question: "Redis DECR 命令仅支持什么数据类型？",
            options: ["字符串", "64 位有符号整数", "浮点数", "任意数字"],
            answer: 1,
            rationale: "Redis DECR 仅支持 64 位有符号整数。如果值不是整数格式或超出范围，会返回错误。"
        },
        {
            id: "w10-3-q12",
            question: "秒杀系统架构的正确流程是什么？",
            options: ["订单服务 → 库存服务 → 排队服务", "CDN 静态化 → 接入层限流 → 排队服务 → 库存服务 → 订单服务", "数据库 → 缓存 → 前端", "用户 → API → 数据库"],
            answer: 1,
            rationale: "秒杀系统架构流程：CDN 静态化（减少动态请求）→ 接入层限流（控制流量）→ 排队服务（削峰）→ 库存服务（扣减）→ 订单服务（创建订单）。"
        }
    ],
    "w10-4": [
        {
            id: "w10-4-q1",
            question: "Amplitude 将电商分析指标分为哪三类？",
            options: ["销售、成本、利润", "受众分析、获取与转化指标、留存与忠诚度", "流量、转化、复购", "用户、商品、订单"],
            answer: 1,
            rationale: "Amplitude 将电商分析指标分为三类：受众分析（人口统计、跳出率、设备渠道）、获取与转化指标（CAC、转化率、AOV）、留存与忠诚度（CLV、留存率）。"
        },
        {
            id: "w10-4-q2",
            question: "客户获取成本（CAC）的计算公式是什么？",
            options: ["收入 / 客户数", "营销支出 / 新客户数", "利润 / 营销支出", "新客户数 x 客单价"],
            answer: 1,
            rationale: "CAC（Customer Acquisition Cost）= 营销支出 / 新客户数，衡量获取一个新客户的成本。"
        },
        {
            id: "w10-4-q3",
            question: "Contentsquare 列出了几种常见的用户分群类型？",
            options: ["4 种", "6 种", "8 种", "10 种"],
            answer: 2,
            rationale: "Contentsquare 列出 8 种常见分群类型：人口统计、企业属性、地理位置、心理、技术、行为、需求、价值观分群。"
        },
        {
            id: "w10-4-q4",
            question: "A/B 测试通常需要运行多长时间？",
            options: ["几小时", "1-2 周", "1 个月", "3 个月"],
            answer: 1,
            rationale: "Optimizely 指出测试通常需要 '1-2 weeks to account for traffic patterns'——考虑流量模式变化，需要 1-2 周。"
        },
        {
            id: "w10-4-q5",
            question: "用户分群和用户画像的核心区别是什么？",
            options: ["没有区别", "分群基于历史数据，画像是半虚构的理想客户概况", "画像更精确", "分群更复杂"],
            answer: 1,
            rationale: "用户画像是 '理想目标受众的半虚构概况'，而分群是 '仅依靠历史数据' 划分的现有用户群体。"
        },
        {
            id: "w10-4-q6",
            question: "A/B 测试的统计显著性通常要求多少置信水平？",
            options: ["80%", "90%", "95%", "99%"],
            answer: 2,
            rationale: "A/B 测试的样本量确定需要考虑基准转化率、最小可检测改进值和所需置信水平，通常为 95%。"
        },
        {
            id: "w10-4-q7",
            question: "RFM 模型的三个维度分别是什么？",
            options: ["Revenue、Frequency、Marketing", "Recency、Frequency、Monetary", "Retention、Funnel、Metric", "Rate、Flow、Measure"],
            answer: 1,
            rationale: "RFM 模型的三个维度：Recency（最近购买时间）、Frequency（购买频率）、Monetary（消费金额），用于划分用户价值层级。"
        },
        {
            id: "w10-4-q8",
            question: "建议维持多少个用户分群？",
            options: ["1-2 个", "3-8 个", "10-15 个", "越多越好"],
            answer: 1,
            rationale: "Contentsquare 建议企业维持 3-8 个分群，具体数量取决于产品复杂性、覆盖范围和数据管理能力。"
        },
        {
            id: "w10-4-q9",
            question: "转化率的计算公式是什么？",
            options: ["访问者总数 / 购买人数", "购买人数 / 访问者总数 x 100%", "收入 / 访问者总数", "购买人数 x 客单价"],
            answer: 1,
            rationale: "转化率 = 购买人数 / 访问者总数 x 100%，是衡量营销效果的核心指标。"
        },
        {
            id: "w10-4-q10",
            question: "A/B 测试的实施步骤中，第一步是什么？",
            options: ["设计变体", "数据收集，利用分析工具识别优化机会", "运行实验", "形成假设"],
            answer: 1,
            rationale: "A/B 测试实施步骤：数据收集（识别优化机会）→ 设定目标 → 形成假设 → 设计变体 → 运行实验 → 结果分析。"
        },
        {
            id: "w10-4-q11",
            question: "以下哪个不是常见的营销归因模型？",
            options: ["首次触点", "末次触点", "随机归因", "时间衰减"],
            answer: 2,
            rationale: "常见归因模型包括：首次触点、末次触点、线性归因、时间衰减、位置归因。随机归因不是标准的归因模型。"
        },
        {
            id: "w10-4-q12",
            question: "CLV（客户终身价值）的计算公式是什么？",
            options: ["首单金额 x 复购次数", "平均购买频率 x 平均购买价值", "总收入 / 总客户数", "客单价 x 留存率"],
            answer: 1,
            rationale: "CLV（Customer Lifetime Value）= 平均购买频率 x 平均购买价值，衡量单个客户在整个生命周期内为企业带来的价值。"
        }
    ]
}
