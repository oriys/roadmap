import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "w1-1": {
        lessonId: "w1-1",
        background: [
            "【核心架构】roadmap.sh 强调电商平台应采用 'microservices architecture with Docker containerization'——每个业务功能作为独立服务运行，支持独立开发、部署和扩展。",
            "【六大核心服务】典型电商平台包含六个主要微服务：用户服务（User Service）、商品目录服务（Product Catalog Service）、购物车服务（Shopping Cart Service）、订单服务（Order Service）、支付服务（Payment Service）、通知服务（Notification Service）。",
            "【基础设施组件】电商平台必备的基础设施包括：API Gateway（如 Kong、Traefik、NGINX）作为请求路由入口、服务发现（Consul、Eureka）管理动态实例、ELK Stack 集中日志监控、容器编排工具（Docker Compose/Kubernetes）。",
            "【搜索架构】Elastic 官方强调电商搜索应结合 'keyword, vector, and reranking technologies' 实现精准商品发现，支持从传统文本查询到语义理解的多种搜索行为。",
            "【系统设计原则】System Design Primer 核心观点：'Everything is a trade-off'——架构决策是在竞争性需求间寻找平衡，不存在完美方案。"
        ],
        keyDifficulties: [
            "【扩展性挑战】区分性能（Performance）与可扩展性（Scalability）：性能关注单请求响应速度，可扩展性关注处理增长的能力。电商系统需要同时优化两者。",
            "【CAP 权衡】CAP 定理决定数据库策略选择——在一致性（Consistency）、可用性（Availability）、分区容错性（Partition tolerance）之间必须权衡。电商不同场景选择不同：库存需要强一致性，商品展示可以最终一致性。",
            "【缓存策略】多层缓存策略是性能优化的关键，包括客户端缓存、CDN 缓存、应用层缓存（Redis）、数据库缓存，但同时引入缓存一致性问题。",
            "【实时库存】Elastic 强调需要 'time-saving tools to index your data to reflect real-time product availability'——库存数据必须实时同步，这在分布式系统中是重大挑战。"
        ],
        handsOnPath: [
            "使用 Docker Compose 搭建本地开发环境，包含 PostgreSQL、Redis、Elasticsearch 等服务。",
            "创建项目目录结构，按微服务拆分：user-service、product-service、order-service、payment-service。",
            "使用 draw.io 或 Excalidraw 绘制系统架构图，标注各服务边界与通信方式。",
            "实现一个简单的 API Gateway 路由配置（使用 NGINX 或 Express Gateway）。",
            "配置 ELK Stack 或 Grafana Loki 进行日志收集。",
            "编写服务健康检查端点（/health），为后续服务发现做准备。"
        ],
        selfCheck: [
            "能否解释 B2C、B2B、C2C、O2O 四种电商模式的核心差异？",
            "为什么电商平台适合采用微服务架构而非单体架构？",
            "API Gateway 在电商系统中承担哪些职责？",
            "电商系统中哪些数据适合放在 Redis 缓存，哪些必须实时查询数据库？",
            "如何理解 'Everything is a trade-off' 在电商架构设计中的应用？",
            "服务发现（Service Discovery）解决了什么问题？"
        ],
        extensions: [
            "研究 Shopify、淘宝、京东等成熟电商平台的技术架构演进历史。",
            "深入学习 Kubernetes 在电商系统中的应用，理解 Pod、Service、Ingress 概念。",
            "探索 Headless Commerce 架构模式，理解前后端分离的电商架构趋势。",
            "了解 Serverless 在电商场景的应用，如 AWS Lambda 处理订单通知。"
        ],
        sourceUrls: [
            "https://roadmap.sh/projects/scalable-ecommerce-platform",
            "https://www.elastic.co/enterprise-search/ecommerce",
            "https://github.com/donnemartin/system-design-primer"
        ]
    },
    "w1-2": {
        lessonId: "w1-2",
        background: [
            "【DDD 定义】Martin Fowler 定义：'Domain-Driven Design is an approach to software development that centers the development on programming a domain model that has a rich understanding of the processes and rules of a domain.'——以领域模型为中心的软件开发方法。",
            "【统一语言】Ubiquitous Language 是 DDD 的基础概念——软件必须直接嵌入领域术语，在整个产品生命周期中演进，而不仅仅是前期文档。",
            "【Evans 分类】DDD 将对象分为三类：Entities（实体）、Value Objects（值对象）、Service Objects（服务对象），还引入 Aggregates（聚合）概念组织对象群。",
            "【限界上下文】Bounded Context 是战略设计概念，用于将大型领域组织为互连的网络，解决大规模领域组织问题。",
            "【子域拆分】microservices.io 指出服务应对应 DDD 子域，分为三类：Core（核心业务差异化）、Supporting（业务相关但非差异化）、Generic（通用能力）。"
        ],
        keyDifficulties: [
            "【聚合设计】Aggregate 是 DDD 中填补面向对象思维空白的重要概念。在电商中，Order（订单）是典型聚合根，包含 OrderItem（订单项）、ShippingAddress（收货地址）等子实体。",
            "【子域识别】识别子域应从两方面入手：组织结构（不同团队可能对应不同子域）、高层领域模型（子域通常围绕关键领域对象）。需要迭代方法和对业务的深入理解。",
            "【限界上下文边界】同一概念在不同限界上下文中可能有不同含义。如「用户」在用户服务中是完整 Profile，在订单服务中只需要 userId 和 shippingAddress。",
            "【事件风暴】EventStorming 是 'a flexible workshop format for collaborative exploration of complex business domains'——通过事件驱动的方式探索业务流程，识别领域边界。"
        ],
        handsOnPath: [
            "使用便签纸或 Miro 进行事件风暴（Event Storming），识别电商核心业务事件：商品上架、加入购物车、创建订单、支付成功、发货、签收等。",
            "绘制领域模型图，标注实体（Entity）、值对象（Value Object）、聚合（Aggregate）的边界。",
            "识别电商系统的限界上下文：用户上下文、商品上下文、订单上下文、支付上下文、物流上下文。",
            "定义上下文映射（Context Map），标注上下文间的集成关系：共享内核、客户-供应商、防腐层等。",
            "使用 TypeScript 定义领域模型类型，体现实体与值对象的区别。"
        ],
        selfCheck: [
            "什么是 Ubiquitous Language？为什么它对电商系统开发重要？",
            "如何区分 Entity 和 Value Object？举出电商系统中的例子。",
            "Order 作为聚合根应该包含哪些子实体？为什么？",
            "电商系统可以拆分为哪些子域？哪些是核心子域？",
            "Bounded Context 解决了什么问题？",
            "Event Storming 的四种风格分别适用于什么场景？"
        ],
        extensions: [
            "阅读 Eric Evans 的《领域驱动设计》原著，深入理解战略设计和战术设计。",
            "学习 Vaughn Vernon 的《实现领域驱动设计》，获取更多实践指导。",
            "探索 CQRS（命令查询职责分离）模式，理解其与 DDD 的结合应用。",
            "研究事件溯源（Event Sourcing）模式，了解其在电商订单系统中的应用。"
        ],
        sourceUrls: [
            "https://martinfowler.com/bliki/DomainDrivenDesign.html",
            "https://microservices.io/patterns/decomposition/decompose-by-subdomain.html",
            "https://www.eventstorming.com/"
        ]
    },
    "w1-3": {
        lessonId: "w1-3",
        background: [
            "【高可扩展性】High Scalability 强调 'Building bigger, faster, more reliable websites'——构建更大、更快、更可靠的网站系统，核心是可靠性、可扩展性、性能的平衡。",
            "【SLO 定义】Google SRE 定义 SLO 为 'SLI ≤ 目标值' 或 '下限 ≤ SLI ≤ 上限'。SLI 是服务级别指标（可测量的量化数据），SLO 是针对 SLI 的目标值，SLA 是包含违反后果的协议。",
            "【指标分类】不同服务类型有不同关键指标：用户交互服务关注可用性、延迟、吞吐量；存储系统关注延迟、可用性、数据耐久性；大数据处理关注吞吐量、端到端延迟。",
            "【秒杀定义】秒杀是 'short-term sales events where limited inventory is sold to massive numbers of buyers in very short timeframes'——短时间内向大量买家销售有限库存的销售活动。",
            "【秒杀挑战】秒杀系统面临的核心挑战：流量峰值（数十万用户同时访问）、请求量远超库存（百万请求抢购数千件商品）、需要保证一致性（不超卖）、低延迟和高可用。"
        ],
        keyDifficulties: [
            "【SLO 设定原则】Google 建议：不基于现有性能设定、保持简洁（复杂聚合会掩盖变化）、避免绝对承诺（100% 不现实）、少而精（如果永远无法靠某个 SLO 赢得优先级讨论就不值得拥有）、允许迭代改进。",
            "【延迟分析】使用百分位数（P50/P99）而非平均值分析延迟，因为平均值掩盖长尾延迟。例如典型请求 50ms，但 5% 的请求可能慢 20 倍。",
            "【并发控制】秒杀系统需要处理极端并发：阿里巴巴双十一峰值达到约 58.3 万订单/秒。通过 Redis 和消息队列可将 QPS 从 500 提升到 10000。",
            "【库存一致性】秒杀场景的数据一致性是巨大挑战：需要防止超卖、保证公平分配、维持实时库存同步。通常将库存放入 Redis 并使用原子操作扣减。"
        ],
        handsOnPath: [
            "定义电商系统的 SLI 指标：API 延迟（P99 < 200ms）、可用性（99.9%）、错误率（< 0.1%）。",
            "使用 Prometheus + Grafana 搭建监控系统，配置核心业务指标仪表盘。",
            "实现简单的限流器（Token Bucket 或 Sliding Window），限制 API 请求频率。",
            "使用 Redis 实现库存预扣减：WATCH + MULTI 或 Lua 脚本保证原子性。",
            "设计秒杀系统的架构方案：CDN 静态化 → API Gateway 限流 → 消息队列削峰 → Redis 库存 → 异步下单。",
            "编写压力测试脚本（使用 k6 或 Artillery），模拟高并发场景。"
        ],
        selfCheck: [
            "SLI、SLO、SLA 三者的区别是什么？",
            "为什么应该使用 P99 而不是平均值来衡量延迟？",
            "电商系统需要 99.99% 可用性意味着每年可以停机多长时间？",
            "秒杀系统为什么要把库存放在 Redis 而不是数据库？",
            "消息队列在秒杀场景中起什么作用？",
            "如何防止秒杀系统超卖？"
        ],
        extensions: [
            "研究 Netflix 的混沌工程（Chaos Engineering）实践，了解如何测试系统韧性。",
            "深入学习分布式系统一致性协议：Paxos、Raft。",
            "探索 Redis Cluster 的分片机制，理解如何水平扩展缓存层。",
            "了解 Kafka 在电商系统中的应用，实现事件驱动架构。"
        ],
        sourceUrls: [
            "http://highscalability.com/",
            "https://sre.google/sre-book/service-level-objectives/",
            "https://www.designgurus.io/course-play/grokking-system-design-interview-ii/doc/design-a-flash-sale-for-an-ecommerce-site"
        ]
    },
    "w1-4": {
        lessonId: "w1-4",
        background: [
            "【PCI DSS】PCI DSS v4.0.1 是支付卡行业数据安全的核心标准，所有处理信用卡数据的电商平台必须遵守。涵盖网络安全、数据保护、访问控制、监控审计等多个方面。",
            "【OWASP Top 10:2025】十大 Web 应用安全风险：A01-访问控制失效、A02-安全配置错误、A03-软件供应链失败、A04-加密失败、A05-注入、A06-不安全设计、A07-认证失败、A08-软件或数据完整性失败、A09-安全日志和告警失败、A10-异常情况处理不当。",
            "【Stripe Radar】Stripe Radar 通过 AI 算法实时评估交易风险，对所有支付尝试进行筛查，包括卡片、数字钱包、ACH 等多种支付方式。",
            "【Radar 规则配置】Radar for Fraud Teams 提供多层次风险管理：风险阈值调整、自定义规则引擎、信任/高风险名单管理、可疑支付人工审查。"
        ],
        keyDifficulties: [
            "【PCI DSS 范围】PCI DSS 合规要求复杂，电商平台需要确定「Cardholder Data Environment」边界，最小化存储、处理、传输卡数据的范围。使用 Stripe 等第三方可减少合规负担。",
            "【访问控制失效】OWASP A01:2025 访问控制失效是最常见漏洞，包括越权访问（Broken Object Level Authorization）、越权操作等。电商系统需要严格的权限校验。",
            "【注入攻击】A05-注入仍是重大威胁，包括 SQL 注入、NoSQL 注入、命令注入。必须使用参数化查询、ORM、输入验证来防护。",
            "【反欺诈平衡】Stripe Radar 需要在阻止欺诈和避免误伤正常用户之间平衡。过严格会拒绝正常交易，过宽松会增加欺诈损失。"
        ],
        handsOnPath: [
            "使用 Stripe Elements 集成支付，避免直接处理卡号，减少 PCI DSS 合规范围。",
            "配置 Stripe Radar 规则：设置风险阈值、添加信任客户白名单、配置地域限制。",
            "实现 API 认证与授权：JWT Token 验证、RBAC 权限控制、资源级别权限校验。",
            "配置安全响应头：HSTS、CSP、X-Frame-Options、X-Content-Type-Options。",
            "使用 OWASP ZAP 或 Burp Suite 对 API 进行安全扫描。",
            "实现安全日志：记录敏感操作、异常请求、登录尝试，配置告警规则。"
        ],
        selfCheck: [
            "使用 Stripe 处理支付相比自建支付系统，在 PCI DSS 合规上有什么优势？",
            "OWASP Top 10:2025 中的 A01 访问控制失效包含哪些具体漏洞类型？",
            "如何防止 SQL 注入攻击？",
            "Stripe Radar 如何平衡欺诈防护和用户体验？",
            "电商系统需要记录哪些安全日志？",
            "什么是 BOLA（Broken Object Level Authorization）？如何防护？"
        ],
        extensions: [
            "深入学习 OAuth 2.0 和 OpenID Connect 协议，理解现代身份认证标准。",
            "研究 GDPR（通用数据保护条例）对电商平台的要求：用户数据权利、隐私政策、数据处理记录。",
            "探索 Web Application Firewall（WAF）在电商系统中的应用。",
            "了解零信任安全架构（Zero Trust Architecture）在企业电商系统中的实践。"
        ],
        sourceUrls: [
            "https://www.pcisecuritystandards.org/document_library/",
            "https://owasp.org/Top10/2025/",
            "https://docs.stripe.com/radar"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "w1-1": [
        {
            id: "w1-1-q1",
            question: "根据 roadmap.sh，典型电商平台的微服务架构包含几个主要服务？",
            options: ["4 个", "5 个", "6 个", "8 个"],
            answer: 2,
            rationale: "roadmap.sh 明确列出六个主要微服务：User Service、Product Catalog Service、Shopping Cart Service、Order Service、Payment Service、Notification Service。"
        },
        {
            id: "w1-1-q2",
            question: "System Design Primer 强调的系统设计核心观点是什么？",
            options: ["性能优先", "Everything is a trade-off", "简单即美", "微服务是最佳架构"],
            answer: 1,
            rationale: "System Design Primer 核心观点：'Everything is a trade-off'——架构决策是在竞争性需求间寻找平衡，不存在完美方案。"
        },
        {
            id: "w1-1-q3",
            question: "Elastic 官方建议电商搜索应该结合哪些技术？",
            options: ["只用关键词搜索", "keyword, vector, and reranking technologies", "只用向量搜索", "只用 SQL LIKE 查询"],
            answer: 1,
            rationale: "Elastic 官方强调电商搜索应结合 'keyword, vector, and reranking technologies' 实现精准商品发现。"
        },
        {
            id: "w1-1-q4",
            question: "以下哪个不是电商平台必备的基础设施组件？",
            options: ["API Gateway", "服务发现（Service Discovery）", "区块链", "日志系统（ELK Stack）"],
            answer: 2,
            rationale: "roadmap.sh 列出的基础设施组件包括 API Gateway、Service Discovery、ELK Stack、容器编排等，区块链不是必备组件。"
        },
        {
            id: "w1-1-q5",
            question: "CAP 定理中的三个要素是什么？",
            options: ["Consistency, Availability, Performance", "Consistency, Availability, Partition tolerance", "Cache, API, Performance", "Cluster, Availability, Partition"],
            answer: 1,
            rationale: "CAP 定理指的是 Consistency（一致性）、Availability（可用性）、Partition tolerance（分区容错性），分布式系统最多只能同时满足两个。"
        },
        {
            id: "w1-1-q6",
            question: "Performance 和 Scalability 的区别是什么？",
            options: ["没有区别", "Performance 关注单请求响应，Scalability 关注处理增长能力", "Scalability 关注单请求响应，Performance 关注处理增长能力", "两者都是指系统速度"],
            answer: 1,
            rationale: "System Design Primer 区分：Performance 关注系统响应速度（单请求更快），Scalability 关注处理增长的能力（更多请求）。"
        },
        {
            id: "w1-1-q7",
            question: "API Gateway 在电商系统中主要承担什么职责？",
            options: ["数据库管理", "请求路由和入口管理", "支付处理", "商品推荐"],
            answer: 1,
            rationale: "roadmap.sh 描述 API Gateway（如 Kong、Traefik、NGINX）作为 'Request routing and entry point'——请求路由和系统入口。"
        },
        {
            id: "w1-1-q8",
            question: "Elastic 强调电商搜索需要支持什么类型的库存数据？",
            options: ["每周更新", "每日更新", "实时库存（real-time product availability）", "按需更新"],
            answer: 2,
            rationale: "Elastic 强调需要 'time-saving tools to index your data to reflect real-time product availability'——实时反映商品可用性。"
        },
        {
            id: "w1-1-q9",
            question: "以下哪个是 roadmap.sh 推荐的服务发现工具？",
            options: ["MySQL", "Consul", "Redis", "Nginx"],
            answer: 1,
            rationale: "roadmap.sh 列出 Service Discovery（Consul, Eureka）作为动态实例管理工具。"
        },
        {
            id: "w1-1-q10",
            question: "根据 System Design Primer，数据库扩展技术包括什么？",
            options: ["只有垂直扩展", "Master-slave replication、Sharding、Denormalization", "只有分片", "只有复制"],
            answer: 1,
            rationale: "System Design Primer 提到数据库扩展技术包括 Master-slave replication、Sharding（分片）、Denormalization（反规范化）等。"
        },
        {
            id: "w1-1-q11",
            question: "电商平台的开发部署流程中，哪个阶段使用 Docker Compose？",
            options: ["生产部署", "开发环境", "性能测试", "安全审计"],
            answer: 1,
            rationale: "roadmap.sh 说明 'Docker Compose for development; Docker Swarm or Kubernetes for production'——Docker Compose 用于开发，K8s 用于生产。"
        },
        {
            id: "w1-1-q12",
            question: "根据 Elastic，电商搜索的 Learning to Rank（LTR）功能的作用是什么？",
            options: ["压缩图片", "基于用户行为改进搜索结果排序", "发送通知", "管理库存"],
            answer: 1,
            rationale: "Elastic 提到 Learning to Rank 可以 'improve result ordering based on user behavior patterns'——基于用户行为模式改进结果排序。"
        }
    ],
    "w1-2": [
        {
            id: "w1-2-q1",
            question: "Martin Fowler 对 Domain-Driven Design 的定义核心是什么？",
            options: ["以数据库为中心", "以领域模型为中心的软件开发方法", "以 API 为中心", "以用户界面为中心"],
            answer: 1,
            rationale: "Martin Fowler 定义 DDD 为 'an approach to software development that centers the development on programming a domain model'——以领域模型为中心。"
        },
        {
            id: "w1-2-q2",
            question: "DDD 中的 Ubiquitous Language 是指什么？",
            options: ["编程语言", "团队共同使用的业务术语，嵌入到软件中", "SQL 语言", "文档模板"],
            answer: 1,
            rationale: "Ubiquitous Language 是 DDD 基础概念——软件必须直接嵌入领域术语，在整个产品生命周期中演进。"
        },
        {
            id: "w1-2-q3",
            question: "根据 Evans 分类，DDD 将对象分为哪三类？",
            options: ["Controller、Service、Repository", "Entities、Value Objects、Service Objects", "Model、View、Controller", "Data、Logic、Presentation"],
            answer: 1,
            rationale: "Eric Evans 将对象分为三类：Entities（实体）、Value Objects（值对象）、Service Objects（服务对象）。"
        },
        {
            id: "w1-2-q4",
            question: "microservices.io 将子域分为哪三类？",
            options: ["Large、Medium、Small", "Core、Supporting、Generic", "Primary、Secondary、Tertiary", "Main、Sub、Helper"],
            answer: 1,
            rationale: "microservices.io 将子域分为：Core（核心业务差异化）、Supporting（业务相关但非差异化）、Generic（通用能力）。"
        },
        {
            id: "w1-2-q5",
            question: "Bounded Context 在 DDD 中的作用是什么？",
            options: ["定义数据库表结构", "组织大型领域为互连的网络", "设计用户界面", "管理服务器配置"],
            answer: 1,
            rationale: "Bounded Context 是战略设计概念，用于将大型领域组织为互连的网络，解决大规模领域组织问题。"
        },
        {
            id: "w1-2-q6",
            question: "Event Storming 的定义是什么？",
            options: ["一种编程语言", "一种灵活的工作坊格式，用于协作探索复杂业务领域", "一种数据库设计方法", "一种测试框架"],
            answer: 1,
            rationale: "EventStorming 定义为 'a flexible workshop format for collaborative exploration of complex business domains'。"
        },
        {
            id: "w1-2-q7",
            question: "Event Storming 有几种主要风格？",
            options: ["2 种", "3 种", "4 种", "5 种"],
            answer: 2,
            rationale: "Event Storming 有四种主要风格：Improve（改进现有业务）、Envision（探索新生态）、Explore（设计服务）、Design（建模软件行为）。"
        },
        {
            id: "w1-2-q8",
            question: "识别子域应该从哪些方面入手？",
            options: ["只看代码结构", "组织结构和高层领域模型", "只看数据库设计", "只看用户需求"],
            answer: 1,
            rationale: "microservices.io 建议从两方面识别子域：组织结构（不同团队可能对应不同子域）、高层领域模型（子域围绕关键领域对象）。"
        },
        {
            id: "w1-2-q9",
            question: "DDD 中的 Aggregate 概念解决了什么问题？",
            options: ["数据库连接问题", "填补面向对象思维的空白，用于组织相关对象", "网络通信问题", "用户界面渲染问题"],
            answer: 1,
            rationale: "Martin Fowler 指出 Aggregates 是 'conceptual groupings that filled an important gap in object-oriented thinking'——填补面向对象思维空白的概念分组。"
        },
        {
            id: "w1-2-q10",
            question: "DDD 最适合什么类型的项目？",
            options: ["简单 CRUD 应用", "复杂领域逻辑的系统", "静态网站", "纯前端应用"],
            answer: 1,
            rationale: "Martin Fowler 指出 DDD 'particularly valuable when managing intricate, often-ambiguous business logic within software systems'——特别适合复杂业务逻辑系统。"
        },
        {
            id: "w1-2-q11",
            question: "按子域拆分微服务的主要优势是什么？",
            options: ["代码量更少", "架构稳定，团队自治，服务内聚松耦合", "性能更好", "安全性更高"],
            answer: 1,
            rationale: "microservices.io 指出优势：稳定架构（子域相对稳定）、自治团队、内聚松耦合的服务。"
        },
        {
            id: "w1-2-q12",
            question: "DDD 提到的另一种微服务拆分模式是什么？",
            options: ["Decompose by technology", "Decompose by business capability", "Decompose by database", "Decompose by team size"],
            answer: 1,
            rationale: "microservices.io 提到另一种方法是 'Decompose by business capability' 模式，与按子域拆分互补。"
        }
    ],
    "w1-3": [
        {
            id: "w1-3-q1",
            question: "Google SRE 对 SLO 的标准表示形式是什么？",
            options: ["SLO = 目标", "SLI ≤ 目标值 或 下限 ≤ SLI ≤ 上限", "SLA ≤ SLO", "Performance > Target"],
            answer: 1,
            rationale: "Google SRE 定义 SLO 为 'SLI ≤ 目标值' 或 '下限 ≤ SLI ≤ 上限' 的形式。"
        },
        {
            id: "w1-3-q2",
            question: "SLI、SLO、SLA 三者的关系是什么？",
            options: ["三者相同", "SLI 是指标，SLO 是目标值，SLA 是包含违反后果的协议", "SLA 是指标，SLO 是目标值", "SLO 是指标，SLI 是目标值"],
            answer: 1,
            rationale: "Google SRE 区分：SLI 是服务级别指标（可测量的量化数据），SLO 是针对 SLI 的目标值，SLA 是包含违反后果的协议。"
        },
        {
            id: "w1-3-q3",
            question: "Google SRE 建议分析延迟时使用什么方法？",
            options: ["平均值", "百分位数（如 P99）", "最大值", "中位数"],
            answer: 1,
            rationale: "Google SRE 建议使用百分位数而非平均值分析延迟数据，因为平均值可能掩盖长尾延迟。"
        },
        {
            id: "w1-3-q4",
            question: "秒杀系统的定义是什么？",
            options: ["普通的商品销售", "短时间内向大量买家销售有限库存的销售活动", "会员专属购物", "批发采购"],
            answer: 1,
            rationale: "秒杀是 'short-term sales events where limited inventory is sold to massive numbers of buyers in very short timeframes'。"
        },
        {
            id: "w1-3-q5",
            question: "阿里巴巴双十一的订单峰值大约是多少？",
            options: ["每秒 1 万订单", "每秒 10 万订单", "每秒 58.3 万订单", "每秒 100 万订单"],
            answer: 2,
            rationale: "文档提到阿里巴巴双十一峰值达到约 583,000 orders per second（约 58.3 万订单/秒）。"
        },
        {
            id: "w1-3-q6",
            question: "Google SRE 对设定 SLO 的建议不包括以下哪项？",
            options: ["不基于现有性能设定", "保持简洁", "追求 100% 可用性", "少而精"],
            answer: 2,
            rationale: "Google 建议避免绝对承诺，'100% 可用性不现实也不必要'。应该设定合理可达成的目标。"
        },
        {
            id: "w1-3-q7",
            question: "秒杀系统通常将库存放在哪里？",
            options: ["MySQL 数据库", "文件系统", "Redis 缓存", "消息队列"],
            answer: 2,
            rationale: "文档指出 'existing flash-sales architectures usually put inventory in Redis and perform inventory deduction in Redis'——库存放在 Redis 中进行原子扣减。"
        },
        {
            id: "w1-3-q8",
            question: "High Scalability 的核心主题是什么？",
            options: ["只关注安全", "Building bigger, faster, more reliable websites", "只关注成本", "只关注用户体验"],
            answer: 1,
            rationale: "High Scalability 强调 'Building bigger, faster, more reliable websites'——构建更大、更快、更可靠的网站系统。"
        },
        {
            id: "w1-3-q9",
            question: "用户交互服务的关键 SLI 指标包括什么？",
            options: ["只有延迟", "可用性、延迟、吞吐量", "只有可用性", "只有吞吐量"],
            answer: 1,
            rationale: "Google SRE 指出用户交互服务关键指标包括可用性、延迟、吞吐量。"
        },
        {
            id: "w1-3-q10",
            question: "秒杀系统中消息队列的主要作用是什么？",
            options: ["存储商品信息", "解耦请求和后端处理器，实现削峰填谷", "用户认证", "日志记录"],
            answer: 1,
            rationale: "消息队列用于 'decoupling users' flash sale requests from the back-end processor, so as to shift peak load'——解耦请求与后端处理，削峰填谷。"
        },
        {
            id: "w1-3-q11",
            question: "秒杀系统的非功能需求中，关键操作延迟应该控制在多少以内？",
            options: ["1 秒", "500 毫秒", "2 秒", "100 毫秒"],
            answer: 1,
            rationale: "文档指出关键操作 'should complete in under 500ms on average, despite the load'——应在 500ms 内完成。"
        },
        {
            id: "w1-3-q12",
            question: "秒杀系统使用乐观锁（Optimistic Locking）的作用是什么？",
            options: ["提高网络速度", "保证订单不冲突和库存准确，不拖慢系统", "压缩数据", "加密通信"],
            answer: 1,
            rationale: "乐观锁 'helps by making sure orders don't conflict and stock levels stay accurate—without slowing down the system'——保证不冲突且不拖慢系统。"
        }
    ],
    "w1-4": [
        {
            id: "w1-4-q1",
            question: "PCI DSS 的当前版本是什么？",
            options: ["v3.0", "v3.2", "v4.0.1", "v5.0"],
            answer: 2,
            rationale: "PCI Security Standards Council 文档库显示当前核心标准为 PCI DSS v4.0.1。"
        },
        {
            id: "w1-4-q2",
            question: "OWASP Top 10:2025 排名第一的安全风险是什么？",
            options: ["注入攻击", "访问控制失效（Broken Access Control）", "加密失败", "安全配置错误"],
            answer: 1,
            rationale: "OWASP Top 10:2025 中 A01 是 Broken Access Control（访问控制失效），排名第一。"
        },
        {
            id: "w1-4-q3",
            question: "Stripe Radar 使用什么技术实时评估交易风险？",
            options: ["规则引擎", "AI 算法", "人工审核", "区块链"],
            answer: 1,
            rationale: "Stripe Radar 通过 AI 算法实时评估交易风险，对所有支付尝试进行筛查。"
        },
        {
            id: "w1-4-q4",
            question: "OWASP Top 10:2025 中的 A05 是什么风险？",
            options: ["访问控制失效", "安全配置错误", "注入（Injection）", "加密失败"],
            answer: 2,
            rationale: "OWASP Top 10:2025 中 A05 是 Injection（注入），包括 SQL 注入、NoSQL 注入等。"
        },
        {
            id: "w1-4-q5",
            question: "Stripe Radar for Fraud Teams 提供的风险管理功能不包括以下哪项？",
            options: ["风险阈值调整", "自定义规则引擎", "自动发货", "名单管理"],
            answer: 2,
            rationale: "Radar 提供风险阈值调整、自定义规则引擎、名单管理、手动审查，不包括自动发货功能。"
        },
        {
            id: "w1-4-q6",
            question: "OWASP 认为 Top 10 代表什么？",
            options: ["所有安全漏洞", "最关键的 Web 应用安全风险的共识", "政府法规要求", "技术标准"],
            answer: 1,
            rationale: "OWASP 表示 Top 10 'represents a broad consensus about the most critical security risks to web applications'——最关键安全风险的广泛共识。"
        },
        {
            id: "w1-4-q7",
            question: "OWASP Top 10:2025 中与供应链相关的风险是哪一项？",
            options: ["A01", "A03 - Software Supply Chain Failures", "A05", "A10"],
            answer: 1,
            rationale: "A03:2025 是 Software Supply Chain Failures（软件供应链失败），是 2025 版新增的重点关注领域。"
        },
        {
            id: "w1-4-q8",
            question: "使用 Stripe 等第三方支付处理商对 PCI DSS 合规有什么影响？",
            options: ["增加合规负担", "减少合规范围，降低合规复杂度", "不影响合规", "必须自建支付系统"],
            answer: 1,
            rationale: "使用 Stripe 可以减少处理、存储卡数据的范围，从而降低 PCI DSS 合规负担。"
        },
        {
            id: "w1-4-q9",
            question: "Stripe Radar 建议在什么环境中测试欺诈规则？",
            options: ["生产环境", "沙箱环境（Sandbox）", "用户设备", "物理机器"],
            answer: 1,
            rationale: "Stripe 建议在沙箱环境中模拟欺诈交易进行规则验证，避免影响生产环境。"
        },
        {
            id: "w1-4-q10",
            question: "OWASP Top 10:2025 中 A09 关注的是什么问题？",
            options: ["注入攻击", "认证失败", "安全日志和告警失败", "加密失败"],
            answer: 2,
            rationale: "A09:2025 是 Security Logging and Alerting Failures（安全日志和告警失败），强调监控和日志的重要性。"
        },
        {
            id: "w1-4-q11",
            question: "OWASP Top 10:2025 中的 A06 强调的是什么？",
            options: ["代码注入", "不安全设计（Insecure Design）", "配置错误", "数据泄露"],
            answer: 1,
            rationale: "A06:2025 是 Insecure Design（不安全设计），强调安全应该从设计阶段就开始考虑。"
        },
        {
            id: "w1-4-q12",
            question: "Stripe Radar 需要在什么两方面进行平衡？",
            options: ["速度和成本", "阻止欺诈和避免误伤正常用户", "功能和界面", "存储和计算"],
            answer: 1,
            rationale: "Stripe Radar 需要在阻止欺诈和避免误伤正常用户之间平衡，过严格会拒绝正常交易，过宽松会增加损失。"
        }
    ]
}
