import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const ecommerceStages: Stage[] = [
    {
        id: "phase1",
        title: "第一阶段：基础架构与技术选型",
        duration: "第 1-3 周",
        goal: "理解电商平台的核心业务逻辑，掌握技术架构设计与数据库建模。",
        weeks: [
            {
                id: "w1",
                title: "第 1 周：电商平台概述与需求分析",
                summary: "理解电商平台的业务模型、核心流程与系统边界。",
                overview: "电商平台是一个复杂的分布式系统，涉及用户、商品、订单、支付、物流等多个业务领域。本周从业务视角出发，理解电商系统的核心流程与非功能需求。",
                keyPoints: [
                    "电商业务模型：B2C、B2B、C2C、O2O 的核心差异与技术挑战。",
                    "核心业务流程：浏览 → 加购 → 下单 → 支付 → 履约 → 售后，每个环节的关键指标。",
                    "非功能需求：高并发（秒杀）、高可用（99.99%）、数据一致性、安全合规。",
                ],
                lessons: [
                    {
                        id: "w1-1",
                        title: "电商业务模型与平台架构总览",
                        detail: "理解不同电商模式（B2C/B2B/C2C/O2O）的业务特点，以及典型电商平台的系统边界与核心模块。",
                        keyPoints: [
                            "B2C 模式：面向消费者的直营模式，核心挑战在于高并发商品浏览和订单处理能力。",
                            "C2C/平台模式：连接买卖双方的平台，需要解决信任、评价、纠纷仲裁等平台治理问题。",
                            "系统边界：典型电商包含用户中心、商品中心、交易中心、支付中心、物流中心等核心模块。",
                        ],
                        resources: [
                            { title: "Scalable E-Commerce Platform Project（roadmap.sh）", url: "https://roadmap.sh/projects/scalable-ecommerce-platform" },
                            { title: "E-commerce Architecture Best Practices", url: "https://www.elastic.co/enterprise-search/ecommerce" },
                            { title: "电商系统架构概览", url: "https://github.com/donnemartin/system-design-primer" },
                        ],
                    },
                    {
                        id: "w1-2",
                        title: "核心业务流程与领域建模",
                        detail: "分析电商核心业务流程：商品浏览、购物车、订单创建、支付、履约、售后，建立领域模型。",
                        keyPoints: [
                            "领域建模：使用 DDD 战略设计识别核心域（交易）、支撑域（物流）、通用域（用户认证）。",
                            "事件风暴：通过领域事件驱动建模，识别关键业务事件如「订单已创建」「支付已完成」。",
                            "聚合边界：商品、订单、支付各为独立聚合，通过领域事件实现跨聚合的最终一致性。",
                        ],
                        resources: [
                            { title: "Domain-Driven Design（DDD）概述", url: "https://martinfowler.com/bliki/DomainDrivenDesign.html" },
                            { title: "电商领域模型设计", url: "https://microservices.io/patterns/decomposition/decompose-by-subdomain.html" },
                            { title: "Event Storming 建模方法", url: "https://www.eventstorming.com/" },
                        ],
                    },
                    {
                        id: "w1-3",
                        title: "非功能需求：高并发与高可用",
                        detail: "理解电商系统的非功能需求：秒杀场景的高并发、支付环节的高可用、库存的强一致性。",
                        resources: [
                            { title: "High Scalability Blog", url: "http://highscalability.com/" },
                            { title: "Google SRE Book - SLOs", url: "https://sre.google/sre-book/service-level-objectives/" },
                            { title: "秒杀系统设计", url: "https://www.designgurus.io/course-play/grokking-system-design-interview-ii/doc/design-a-flash-sale-for-an-ecommerce-site" },
                        ],
                    },
                    {
                        id: "w1-4",
                        title: "电商安全与合规要求",
                        detail: "了解电商平台的安全要求：PCI-DSS 支付合规、GDPR 数据保护、防欺诈机制。",
                        resources: [
                            { title: "PCI DSS 合规指南", url: "https://www.pcisecuritystandards.org/document_library/" },
                            { title: "OWASP Top 10 安全风险", url: "https://owasp.org/Top10/2025/" },
                            { title: "电商反欺诈策略", url: "https://docs.stripe.com/radar" },
                        ],
                    },
                ],
            },
            {
                id: "w2",
                title: "第 2 周：技术架构设计与选型",
                summary: "掌握电商平台的技术栈选型与架构设计原则。",
                overview: "技术选型决定了系统的上限与维护成本。本周从前端到后端，从数据库到缓存，建立技术栈选型的决策框架。",
                keyPoints: [
                    "前端技术栈：React/Next.js 的 SSR/SSG 优势，移动端适配策略。",
                    "后端技术栈：Node.js/Java/Go 的适用场景，微服务 vs 单体的权衡。",
                    "数据存储：关系型（MySQL/PostgreSQL）vs NoSQL（MongoDB/Redis）的选型原则。",
                ],
                lessons: [
                    {
                        id: "w2-1",
                        title: "前端技术栈：Next.js 与现代电商前端",
                        detail: "理解 Next.js 的 SSR/SSG/ISR 模式，以及在电商场景的应用：SEO 优化、首屏性能、动态内容。",
                        resources: [
                            { title: "Next.js 官方文档", url: "https://nextjs.org/docs" },
                            { title: "Next.js Commerce 模板", url: "https://vercel.com/templates/next.js/nextjs-commerce" },
                            { title: "Next.js Learn 教程", url: "https://nextjs.org/learn" },
                        ],
                    },
                    {
                        id: "w2-2",
                        title: "后端技术栈：Node.js/Express RESTful API",
                        detail: "掌握 Node.js + Express 构建 RESTful API 的最佳实践，包括路由设计、中间件、错误处理。",
                        resources: [
                            { title: "Express.js 官方指南", url: "https://expressjs.com/en/guide/routing.html" },
                            { title: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices" },
                            { title: "REST API 设计最佳实践", url: "https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/" },
                        ],
                    },
                    {
                        id: "w2-3",
                        title: "微服务架构：拆分策略与通信模式",
                        detail: "理解电商系统的微服务拆分策略：按业务领域拆分（用户、商品、订单、支付），以及服务间通信（REST/gRPC/消息队列）。",
                        resources: [
                            { title: "Microservices Pattern（Chris Richardson）", url: "https://microservices.io/patterns/index.html" },
                            { title: "E-commerce Microservices Architecture", url: "https://www.scnsoft.com/ecommerce/microservices" },
                            { title: "Google 微服务电商教程", url: "https://developers.google.com/learn/pathways/solution-ecommerce-microservices-kubernetes" },
                        ],
                    },
                    {
                        id: "w2-4",
                        title: "项目工程化：Monorepo 与开发规范",
                        detail: "掌握现代前后端项目的工程化实践：Monorepo（Turborepo/Nx）、代码规范（ESLint/Prettier）、Git 工作流。",
                        resources: [
                            { title: "Turborepo 官方文档", url: "https://turborepo.com/repo/docs" },
                            { title: "ESLint 配置指南", url: "https://eslint.org/docs/latest/use/configure/" },
                            { title: "Git Flow 工作流", url: "https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow" },
                        ],
                    },
                ],
            },
            {
                id: "w3",
                title: "第 3 周：数据库设计与建模",
                summary: "掌握电商平台的数据库设计原则与核心表结构。",
                overview: "数据模型是业务逻辑的基础。本周从 ER 建模到表结构设计，建立电商数据库设计的最佳实践。",
                keyPoints: [
                    "核心实体：用户、商品、SKU、订单、订单项、支付、地址的关系设计。",
                    "设计原则：规范化 vs 反规范化、索引策略、软删除与审计日志。",
                    "扩展性：分库分表预留、多租户设计、国际化支持。",
                ],
                lessons: [
                    {
                        id: "w3-1",
                        title: "电商核心表结构设计",
                        detail: "设计电商核心表：users、products、categories、skus、orders、order_items、payments、addresses。",
                        resources: [
                            { title: "PostgreSQL 官方文档", url: "https://www.postgresql.org/docs/current/index.html" },
                            { title: "Database Design for E-commerce", url: "https://www.red-gate.com/blog/er-diagram-for-online-shop/" },
                            { title: "Use The Index, Luke", url: "https://use-the-index-luke.com/" },
                        ],
                    },
                    {
                        id: "w3-2",
                        title: "商品与 SKU 模型设计",
                        detail: "理解 SPU（标准产品单元）与 SKU（库存单元）的关系，设计灵活的商品属性与变体系统。",
                        resources: [
                            { title: "SKU 设计最佳实践", url: "https://www.shopify.com/blog/what-is-a-sku" },
                            { title: "EAV 模型 vs JSONB 属性", url: "https://www.postgresql.org/docs/current/datatype-json.html" },
                            { title: "商品变体设计", url: "https://github.com/spree/spree" },
                        ],
                    },
                    {
                        id: "w3-3",
                        title: "订单与支付表设计",
                        detail: "设计订单状态机、订单项快照、支付记录，确保数据一致性与可审计性。",
                        resources: [
                            { title: "Order State Machine 设计", url: "https://sylius.com/blog/what-is-state-machine-and-why-is-it-useful-in-modeling-ecommerce-processes/" },
                            { title: "支付记录设计", url: "https://docs.stripe.com/payments/payment-intents" },
                            { title: "事务与数据一致性", url: "https://www.postgresql.org/docs/current/transaction-iso.html" },
                        ],
                    },
                    {
                        id: "w3-4",
                        title: "ORM 与数据库迁移",
                        detail: "掌握 Prisma/TypeORM 等 ORM 工具的使用，以及数据库迁移的最佳实践。",
                        resources: [
                            { title: "Prisma 官方文档", url: "https://www.prisma.io/docs" },
                            { title: "TypeORM 指南", url: "https://typeorm.io/" },
                            { title: "数据库迁移最佳实践", url: "https://github.com/golang-migrate/migrate" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase2",
        title: "第二阶段：核心模块开发",
        duration: "第 4-7 周",
        goal: "实现电商平台的核心功能模块：用户系统、商品系统、购物车、订单与支付。",
        weeks: [
            {
                id: "w4",
                title: "第 4 周：用户系统与身份认证",
                summary: "实现用户注册、登录、认证授权的完整流程。",
                overview: "用户系统是电商平台的入口。本周实现基于 JWT 的身份认证、OAuth2 社交登录、权限控制。",
                keyPoints: [
                    "认证方式：JWT 无状态认证的实现与刷新机制，Session 的适用场景。",
                    "社交登录：OAuth2 授权码流程，Google/微信登录集成。",
                    "安全实践：密码哈希（bcrypt）、防暴力破解、双因素认证。",
                ],
                lessons: [
                    {
                        id: "w4-1",
                        title: "JWT 认证：实现与安全考量",
                        detail: "实现基于 JWT 的用户认证系统，包括 Token 生成、验证、刷新机制，以及安全存储策略。",
                        keyPoints: [
                            "JWT 结构：Header.Payload.Signature 三部分组成，Payload 携带用户 ID 和角色等声明信息。",
                            "Token 刷新：Access Token 短有效期（15 分钟）+ Refresh Token 长有效期（7 天），兼顾安全与体验。",
                            "存储策略：Access Token 存内存，Refresh Token 存 HttpOnly Cookie，防止 XSS 窃取。",
                        ],
                        resources: [
                            { title: "JWT.io 介绍", url: "https://jwt.io/introduction" },
                            { title: "OAuth 2.0 最佳实践", url: "https://oauth.net/2/oauth-best-practice/" },
                            { title: "OWASP 认证安全", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
                        ],
                    },
                    {
                        id: "w4-2",
                        title: "OAuth2 社交登录集成",
                        detail: "实现 Google、GitHub 等第三方 OAuth2 登录，理解授权码流程与安全考量。",
                        keyPoints: [
                            "授权码流程：用户授权 → 获取 Authorization Code → 后端用 Code 换取 Access Token，避免前端暴露密钥。",
                            "State 参数：使用随机 State 值防止 CSRF 攻击，授权回调时验证 State 一致性。",
                            "账号关联：社交登录需处理账号合并场景，同一邮箱绑定多个社交账号的策略设计。",
                        ],
                        resources: [
                            { title: "OAuth 2.0 RFC 6749", url: "https://datatracker.ietf.org/doc/html/rfc6749" },
                            { title: "Google OAuth2 文档", url: "https://developers.google.com/identity/protocols/oauth2" },
                            { title: "Passport.js OAuth 策略", url: "http://www.passportjs.org/packages/passport-oauth2/" },
                        ],
                    },
                    {
                        id: "w4-3",
                        title: "用户权限与 RBAC 设计",
                        detail: "实现基于角色的访问控制（RBAC），设计权限模型：用户、角色、权限的关系。",
                        resources: [
                            { title: "RBAC 设计模式", url: "https://auth0.com/docs/manage-users/access-control/rbac" },
                            { title: "CASL 权限库", url: "https://casl.js.org/v6/en/" },
                            { title: "API 授权最佳实践", url: "https://cloud.google.com/apis/design/design_patterns" },
                        ],
                    },
                    {
                        id: "w4-4",
                        title: "用户资料与地址管理",
                        detail: "实现用户资料 CRUD、多地址管理、默认地址设置。",
                        resources: [
                            { title: "RESTful API 设计指南", url: "https://cloud.google.com/apis/design" },
                            { title: "表单验证（Zod）", url: "https://zod.dev/" },
                            { title: "地址格式标准化", url: "https://developers.google.com/maps/documentation/address-validation" },
                        ],
                    },
                ],
            },
            {
                id: "w5",
                title: "第 5 周：商品系统与分类管理",
                summary: "实现商品的 CRUD、分类树、属性管理与图片上传。",
                overview: "商品系统是电商的核心。本周实现商品信息管理、多级分类、商品属性与变体、图片上传与 CDN 分发。",
                keyPoints: [
                    "分类管理：多级分类树的存储（邻接表/闭包表/物化路径），递归查询优化。",
                    "商品属性：SPU/SKU 模型、动态属性（EAV vs JSONB）、库存关联。",
                    "图片处理：上传、压缩、多尺寸生成、CDN 分发。",
                ],
                lessons: [
                    {
                        id: "w5-1",
                        title: "多级分类树的设计与实现",
                        detail: "实现商品分类的树形结构，比较邻接表、嵌套集、闭包表、物化路径的优劣。",
                        keyPoints: [
                            "邻接表：最简单的 parent_id 方式，适合写多读少场景，查询子树需要递归 CTE。",
                            "物化路径：存储完整路径如 /1/3/7/，查询祖先和后代极快，移动节点需更新所有子节点。",
                            "PostgreSQL ltree：原生树类型支持，提供路径匹配和索引，适合中等规模分类树。",
                        ],
                        resources: [
                            { title: "树形结构存储方案对比", url: "https://schinckel.net/2014/09/13/postgres-tree-shootout-part-2:-adjacency-list-vs-ltree-vs-recursive-cte/" },
                            { title: "PostgreSQL ltree 模块", url: "https://www.postgresql.org/docs/current/ltree.html" },
                            { title: "分类树递归查询", url: "https://www.postgresql.org/docs/current/queries-with.html" },
                        ],
                    },
                    {
                        id: "w5-2",
                        title: "商品 SPU/SKU 模型实现",
                        detail: "实现 SPU（商品主体）和 SKU（规格变体）的关系，支持多规格商品（颜色、尺寸等）。",
                        keyPoints: [
                            "SPU/SKU 关系：SPU 是商品抽象（iPhone 15），SKU 是具体变体（iPhone 15 256GB 黑色），一对多关系。",
                            "规格笛卡尔积：颜色 × 尺寸 × 版本自动生成 SKU 组合，前端需展示规格选择矩阵。",
                            "库存与价格：每个 SKU 独立管理库存数量和销售价格，支持不同规格差异化定价。",
                        ],
                        resources: [
                            { title: "商品 SKU 设计", url: "https://www.shopify.com/blog/what-is-a-sku" },
                            { title: "变体组合算法", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" },
                            { title: "Spree 商品模型", url: "https://spreecommerce.org/docs" },
                        ],
                    },
                    {
                        id: "w5-3",
                        title: "商品图片上传与 CDN",
                        detail: "实现图片上传、压缩、多尺寸生成，集成云存储（S3/OSS）与 CDN 分发。",
                        resources: [
                            { title: "AWS S3 官方文档", url: "https://docs.aws.amazon.com/s3/index.html" },
                            { title: "Sharp 图片处理库", url: "https://sharp.pixelplumbing.com/" },
                            { title: "Cloudflare Images", url: "https://developers.cloudflare.com/images/" },
                        ],
                    },
                    {
                        id: "w5-4",
                        title: "商品搜索与筛选",
                        detail: "实现商品列表的分页、排序、多条件筛选，为后续 Elasticsearch 集成做准备。",
                        resources: [
                            { title: "PostgreSQL 全文搜索", url: "https://www.postgresql.org/docs/current/textsearch.html" },
                            { title: "分页最佳实践", url: "https://use-the-index-luke.com/no-offset" },
                            { title: "GraphQL 过滤与分页", url: "https://graphql.org/learn/pagination/" },
                        ],
                    },
                ],
            },
            {
                id: "w6",
                title: "第 6 周：购物车与订单系统",
                summary: "实现购物车状态管理与订单全生命周期管理。",
                overview: "购物车和订单是电商转化的关键环节。本周实现购物车的状态管理、订单创建与状态机、库存扣减的一致性保证。",
                keyPoints: [
                    "购物车设计：匿名购物车 vs 登录购物车、合并策略、Redis 缓存。",
                    "订单状态机：状态定义、状态转移、事件驱动的状态变更。",
                    "库存一致性：下单锁库存、支付确认扣减、超时释放。",
                ],
                lessons: [
                    {
                        id: "w6-1",
                        title: "购物车：Redis 实现与状态管理",
                        detail: "使用 Redis 实现高性能购物车，处理匿名/登录购物车合并、商品失效检测。",
                        keyPoints: [
                            "Redis Hash 存储：用户 ID 作为 Key，商品 SKU ID 作为 Field，数量作为 Value，读写 O(1) 复杂度。",
                            "匿名购物车合并：用户登录时将 Cookie 中的匿名购物车与账户购物车合并，处理重复商品。",
                            "商品失效检测：定时或访问时检查商品是否下架、库存是否不足，标记失效商品提示用户。",
                        ],
                        resources: [
                            { title: "Redis 购物车设计", url: "https://redis.io/learn/howtos/shoppingcart" },
                            { title: "Redis Hash 数据结构", url: "https://redis.io/docs/latest/develop/data-types/hashes/" },
                            { title: "购物车状态管理（Zustand）", url: "https://github.com/pmndrs/zustand" },
                        ],
                    },
                    {
                        id: "w6-2",
                        title: "订单状态机设计与实现",
                        detail: "设计订单状态机（待支付 → 已支付 → 待发货 → 已发货 → 已完成/已取消），实现状态转移与事件处理。",
                        resources: [
                            { title: "状态机在电商中的应用", url: "https://sylius.com/blog/what-is-state-machine-and-why-is-it-useful-in-modeling-ecommerce-processes/" },
                            { title: "XState 状态机库", url: "https://xstate.js.org/docs/" },
                            { title: "订单工作流设计", url: "https://docs.commercetools.com/learning-model-your-business-structure/state-machines/state-machines-page" },
                        ],
                    },
                    {
                        id: "w6-3",
                        title: "库存扣减与一致性保证",
                        detail: "实现下单锁定库存、支付确认扣减、超时自动释放，处理并发扣减的一致性问题。",
                        keyPoints: [
                            "预扣库存：下单时使用乐观锁或 Redis 原子操作锁定库存，防止超卖但允许少卖。",
                            "超时释放：未支付订单 15-30 分钟后自动取消，通过延迟队列或定时任务释放预留库存。",
                            "并发控制：高并发场景使用 Redis Lua 脚本实现原子性扣减，避免竞态条件。",
                        ],
                        resources: [
                            { title: "库存管理系统设计", url: "https://www.cockroachlabs.com/blog/inventory-management-reference-architecture/" },
                            { title: "乐观锁 vs 悲观锁", url: "https://www.postgresql.org/docs/current/explicit-locking.html" },
                            { title: "分布式锁（Redis）", url: "https://redis.io/docs/latest/develop/use/patterns/distributed-locks/" },
                        ],
                    },
                    {
                        id: "w6-4",
                        title: "订单详情与历史记录",
                        detail: "实现订单详情查询、订单列表分页、订单快照存储（商品信息冻结）。",
                        resources: [
                            { title: "订单快照设计", url: "https://martinfowler.com/eaaDev/EventSourcing.html" },
                            { title: "分页查询优化", url: "https://use-the-index-luke.com/sql/partial-results/fetch-next-page" },
                            { title: "时间线查询设计", url: "https://www.postgresql.org/docs/current/functions-datetime.html" },
                        ],
                    },
                ],
            },
            {
                id: "w7",
                title: "第 7 周：支付系统集成",
                summary: "集成第三方支付平台，实现安全可靠的支付流程。",
                overview: "支付是电商的命脉。本周集成 Stripe/支付宝/微信支付，实现支付流程、异步通知、退款处理。",
                keyPoints: [
                    "支付流程：Payment Intent 模型、支付状态追踪、幂等性设计。",
                    "Webhook 处理：异步通知接收、签名验证、重试机制。",
                    "退款与对账：退款流程、交易记录、财务对账。",
                ],
                lessons: [
                    {
                        id: "w7-1",
                        title: "Stripe 支付集成",
                        detail: "集成 Stripe Payment Intent API，实现信用卡支付、支付状态追踪、错误处理。",
                        keyPoints: [
                            "Payment Intent 生命周期：created → requires_payment_method → requires_confirmation → succeeded/failed，全流程状态追踪。",
                            "客户端安全：使用 Stripe Elements 在前端安全收集卡号，敏感数据不经过自己的服务器，满足 PCI 合规。",
                            "幂等性处理：为每次支付请求设置 Idempotency Key，防止网络重试导致的重复扣款。",
                        ],
                        resources: [
                            { title: "Stripe 官方文档", url: "https://docs.stripe.com" },
                            { title: "Payment Intents API", url: "https://docs.stripe.com/payments/payment-intents" },
                            { title: "Stripe Elements（前端）", url: "https://docs.stripe.com/payments/payment-element" },
                        ],
                    },
                    {
                        id: "w7-2",
                        title: "Webhook 处理与异步通知",
                        detail: "实现 Webhook 接收端点，处理支付成功/失败通知，确保消息幂等处理。",
                        keyPoints: [
                            "签名验证：使用 Webhook Secret 验证请求签名，确保通知确实来自 Stripe，防止伪造回调。",
                            "幂等消费：记录已处理的事件 ID，重复投递时直接跳过，避免重复发货或重复退款。",
                            "异步可靠处理：Webhook 端点应快速返回 200，将耗时业务逻辑放入消息队列异步处理。",
                        ],
                        resources: [
                            { title: "Stripe Webhooks", url: "https://docs.stripe.com/webhooks" },
                            { title: "Webhook 签名验证", url: "https://docs.stripe.com/webhooks/signatures" },
                            { title: "幂等性设计", url: "https://microservices.io/patterns/communication-style/idempotent-consumer.html" },
                        ],
                    },
                    {
                        id: "w7-3",
                        title: "退款流程与异常处理",
                        detail: "实现退款申请、退款审核、退款执行，处理部分退款与退款失败场景。",
                        resources: [
                            { title: "Stripe Refunds", url: "https://docs.stripe.com/refunds" },
                            { title: "退款状态机设计", url: "https://docs.stripe.com/api/refunds" },
                            { title: "争议处理", url: "https://docs.stripe.com/disputes" },
                        ],
                    },
                    {
                        id: "w7-4",
                        title: "交易记录与财务对账",
                        detail: "设计支付记录表结构，实现交易流水查询、每日对账、财务报表。",
                        resources: [
                            { title: "Stripe Balance Transactions", url: "https://docs.stripe.com/api/balance_transactions" },
                            { title: "财务系统设计", url: "https://docs.stripe.com/reports" },
                            { title: "对账最佳实践", url: "https://docs.stripe.com/bank-reconciliation" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase3",
        title: "第三阶段：高级功能实现",
        duration: "第 8-10 周",
        goal: "实现电商平台的高级功能：搜索推荐、库存物流、营销促销。",
        weeks: [
            {
                id: "w8",
                title: "第 8 周：搜索与推荐系统",
                summary: "集成 Elasticsearch 实现商品搜索，设计基础推荐算法。",
                overview: "搜索是电商转化的关键入口。本周集成 Elasticsearch 实现全文搜索、分面导航、搜索建议，并设计基础的商品推荐算法。",
                keyPoints: [
                    "Elasticsearch 集成：索引设计、映射配置、中文分词。",
                    "搜索功能：全文搜索、Facet 聚合、搜索建议（Autocomplete）。",
                    "推荐算法：协同过滤基础、基于内容的推荐、热门/新品推荐。",
                ],
                lessons: [
                    {
                        id: "w8-1",
                        title: "Elasticsearch 索引设计与集成",
                        detail: "设计商品索引结构，配置映射（Mapping），实现数据同步（全量/增量）。",
                        resources: [
                            { title: "Elasticsearch 官方文档", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html" },
                            { title: "电商搜索索引设计", url: "https://www.elastic.co/search-labs/blog/hybrid-search-ecommerce" },
                            { title: "IK 中文分词", url: "https://github.com/medcl/elasticsearch-analysis-ik" },
                        ],
                    },
                    {
                        id: "w8-2",
                        title: "全文搜索与分面导航",
                        detail: "实现商品全文搜索、多条件过滤、Facet 聚合（品牌、价格区间、属性筛选）。",
                        resources: [
                            { title: "Elasticsearch Query DSL", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html" },
                            { title: "Aggregations 聚合", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html" },
                            { title: "Search UI 组件", url: "https://www.elastic.co/docs/current/search-ui/solutions/ecommerce" },
                        ],
                    },
                    {
                        id: "w8-3",
                        title: "搜索建议与自动补全",
                        detail: "实现搜索框自动补全、搜索历史、热门搜索词推荐。",
                        resources: [
                            { title: "Elasticsearch Suggesters", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters.html" },
                            { title: "Completion Suggester", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters.html#completion-suggester" },
                            { title: "搜索词分析", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-analyzers.html" },
                        ],
                    },
                    {
                        id: "w8-4",
                        title: "商品推荐：基础算法实现",
                        detail: "实现「猜你喜欢」、「看了又看」、「买了又买」等基础推荐功能。",
                        resources: [
                            { title: "推荐系统入门", url: "https://developers.google.com/machine-learning/recommendation" },
                            { title: "协同过滤算法", url: "https://en.wikipedia.org/wiki/Collaborative_filtering" },
                            { title: "Amazon 推荐系统论文", url: "https://www.cs.umd.edu/~samir/498/Amazon-Recommendations.pdf" },
                        ],
                    },
                ],
            },
            {
                id: "w9",
                title: "第 9 周：库存管理与物流",
                summary: "实现多仓库存管理与物流跟踪系统。",
                overview: "库存和物流是电商履约的核心。本周实现多仓库存管理、库存预警、物流公司对接、物流轨迹查询。",
                keyPoints: [
                    "库存管理：多仓库存分配、库存预警、库存盘点。",
                    "物流对接：物流公司 API 集成、电子面单、运费计算。",
                    "物流追踪：物流轨迹查询、状态推送、签收确认。",
                ],
                lessons: [
                    {
                        id: "w9-1",
                        title: "多仓库存管理系统",
                        detail: "设计多仓库存模型，实现库存分配策略、库存调拨、库存预警。",
                        resources: [
                            { title: "库存管理系统设计", url: "https://ddi-dev.com/blog/case/how-we-created-an-inventory-management-system-for-ecommerce-business/" },
                            { title: "多仓库存分配算法", url: "https://www.shipbob.com/ecommerce-inventory/guide/" },
                            { title: "库存实时更新", url: "https://redis.io/learn/howtos/solutions/microservices/cqrs" },
                        ],
                    },
                    {
                        id: "w9-2",
                        title: "物流公司 API 集成",
                        detail: "集成主流物流公司 API（顺丰、四通一达），实现下单、取消、查询等功能。",
                        resources: [
                            { title: "快递100 API", url: "https://api.kuaidi100.com/document/" },
                            { title: "顺丰开放平台", url: "https://open.sf-express.com/" },
                            { title: "物流 API 设计最佳实践", url: "https://www.shipengine.com/docs/" },
                        ],
                    },
                    {
                        id: "w9-3",
                        title: "运费计算与模板设计",
                        detail: "实现基于重量/体积/地区的运费计算，支持多种运费模板配置。",
                        resources: [
                            { title: "运费计算指南", url: "https://www.shopify.com/blog/common-shipping-questions" },
                            { title: "中国行政区划代码", url: "https://en.wikipedia.org/wiki/Administrative_division_codes_of_the_People's_Republic_of_China" },
                            { title: "体积重量计算", url: "https://www.shipbob.com/ecommerce-shipping/calculate-shipping-costs/" },
                        ],
                    },
                    {
                        id: "w9-4",
                        title: "物流轨迹追踪",
                        detail: "实现物流轨迹查询、状态变更通知、签收确认流程。",
                        resources: [
                            { title: "物流轨迹推送设计", url: "https://api.kuaidi100.com/document/5eb9f73ea6f71f6ad3a3b7be" },
                            { title: "Webhook 回调处理", url: "https://docs.stripe.com/webhooks/best-practices" },
                            { title: "物流状态机设计", url: "https://experienceleague.adobe.com/en/docs/commerce-admin/stores-sales/order-management/orders/order-processing" },
                        ],
                    },
                ],
            },
            {
                id: "w10",
                title: "第 10 周：营销与促销系统",
                summary: "实现优惠券、满减、限时折扣等促销功能。",
                overview: "营销是电商增长的引擎。本周实现优惠券系统、满减规则、限时秒杀、组合促销等营销功能。",
                keyPoints: [
                    "优惠券系统：优惠券生成、发放、核销、叠加规则。",
                    "促销规则引擎：满减、折扣、赠品的规则配置与计算。",
                    "秒杀设计：高并发下的库存扣减、订单限流、防刷策略。",
                ],
                lessons: [
                    {
                        id: "w10-1",
                        title: "优惠券系统设计",
                        detail: "设计优惠券模型（满减券、折扣券、无门槛券），实现发放、领取、核销流程。",
                        keyPoints: [
                            "优惠券模型：区分优惠券模板（规则定义）和优惠券实例（用户领取的具体券），支持批量发放。",
                            "防重领取：数据库唯一索引（用户 ID + 券模板 ID）保证同一用户不会重复领取同一类优惠券。",
                            "核销规则：验证有效期、使用门槛、适用品类，支持订单取消后自动退还未使用的优惠券。",
                        ],
                        resources: [
                            { title: "优惠券系统设计", url: "https://www.geeksforgeeks.org/system-design/design-coupon-and-voucher-management-system/" },
                            { title: "Stripe Coupons API", url: "https://docs.stripe.com/api/coupons" },
                            { title: "优惠券防刷策略", url: "https://docs.stripe.com/radar/rules" },
                        ],
                    },
                    {
                        id: "w10-2",
                        title: "促销规则引擎",
                        detail: "实现灵活的促销规则配置：满减、折扣、买赠、组合优惠，以及优惠互斥与叠加规则。",
                        resources: [
                            { title: "规则引擎设计", url: "https://martinfowler.com/bliki/RulesEngine.html" },
                            { title: "价格计算策略模式", url: "https://refactoring.guru/design-patterns/strategy" },
                            { title: "促销系统架构", url: "https://www.nected.ai/us/blog-us/rules-engine-design-pattern" },
                        ],
                    },
                    {
                        id: "w10-3",
                        title: "限时秒杀系统",
                        detail: "设计秒杀系统架构：预热、限流、排队、库存扣减，应对高并发场景。",
                        keyPoints: [
                            "流量削峰：前端答题验证 + 后端令牌桶限流 + 消息队列排队，层层过滤减少到达数据库的请求量。",
                            "库存预热：秒杀开始前将库存从数据库加载到 Redis，使用 DECR 原子操作扣减，避免数据库瓶颈。",
                            "异步下单：库存扣减成功后发送消息到队列，异步创建订单，前端轮询或 WebSocket 获取结果。",
                        ],
                        resources: [
                            { title: "秒杀系统设计", url: "https://www.designgurus.io/course-play/grokking-system-design-interview-ii/doc/design-a-flash-sale-for-an-ecommerce-site" },
                            { title: "Redis 原子扣减", url: "https://redis.io/commands/decr/" },
                            { title: "限流算法", url: "https://blog.bytebytego.com/p/rate-limiting-fundamentals" },
                        ],
                    },
                    {
                        id: "w10-4",
                        title: "营销数据分析",
                        detail: "实现营销活动效果分析：转化率、ROI、用户分群，为精准营销提供数据支撑。",
                        resources: [
                            { title: "电商数据分析指标", url: "https://amplitude.com/blog/ecommerce-analytics" },
                            { title: "用户分群分析", url: "https://contentsquare.com/guides/user-segmentation/" },
                            { title: "A/B 测试设计", url: "https://www.optimizely.com/optimization-glossary/ab-testing/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase4",
        title: "第四阶段：优化与运维",
        duration: "第 11-12 周",
        goal: "优化系统性能，构建可观测性体系，实现容器化部署与微服务演进。",
        weeks: [
            {
                id: "w11",
                title: "第 11 周：性能优化与缓存策略",
                summary: "系统性能调优，构建多级缓存架构。",
                overview: "性能是电商体验的基础。本周从前端到后端，从数据库到缓存，进行全链路性能优化。",
                keyPoints: [
                    "前端优化：代码分割、图片懒加载、CDN 静态资源、Core Web Vitals。",
                    "后端优化：数据库查询优化、N+1 问题、连接池配置。",
                    "缓存策略：多级缓存（本地 + Redis）、缓存穿透/击穿/雪崩防护。",
                ],
                lessons: [
                    {
                        id: "w11-1",
                        title: "前端性能优化",
                        detail: "优化 Next.js 应用性能：代码分割、Image 组件、静态生成、CDN 部署。",
                        resources: [
                            { title: "Next.js 性能优化", url: "https://nextjs.org/docs/app/building-your-application/optimizing" },
                            { title: "Web Vitals", url: "https://web.dev/vitals/" },
                            { title: "Lighthouse 性能审计", url: "https://developer.chrome.com/docs/lighthouse/overview/" },
                        ],
                    },
                    {
                        id: "w11-2",
                        title: "数据库查询优化",
                        detail: "优化 SQL 查询性能：索引优化、EXPLAIN 分析、慢查询排查、连接池配置。",
                        resources: [
                            { title: "PostgreSQL 性能优化", url: "https://www.postgresql.org/docs/current/performance-tips.html" },
                            { title: "EXPLAIN 分析指南", url: "https://www.postgresql.org/docs/current/using-explain.html" },
                            { title: "连接池配置（PgBouncer）", url: "https://www.pgbouncer.org/" },
                        ],
                    },
                    {
                        id: "w11-3",
                        title: "Redis 缓存架构",
                        detail: "设计多级缓存架构，实现缓存预热、失效策略、分布式缓存一致性。",
                        resources: [
                            { title: "Redis 缓存模式", url: "https://redis.io/docs/latest/develop/use/patterns/" },
                            { title: "缓存穿透/击穿/雪崩", url: "https://blog.bytebytego.com/p/a-crash-course-in-caching-part-1" },
                            { title: "缓存一致性方案", url: "https://martinfowler.com/bliki/TwoHardThings.html" },
                        ],
                    },
                    {
                        id: "w11-4",
                        title: "API 性能与限流",
                        detail: "实现 API 限流、熔断、降级，保护后端服务稳定性。",
                        resources: [
                            { title: "限流算法对比", url: "https://blog.bytebytego.com/p/rate-limiting-fundamentals" },
                            { title: "熔断器模式", url: "https://martinfowler.com/bliki/CircuitBreaker.html" },
                            { title: "Resilience4j", url: "https://resilience4j.readme.io/" },
                        ],
                    },
                ],
            },
            {
                id: "w12",
                title: "第 12 周：部署、监控与微服务演进",
                summary: "容器化部署，构建可观测性体系，规划微服务架构演进。",
                overview: "从开发到生产的最后一公里。本周实现 Docker 容器化、Kubernetes 部署、监控告警、日志收集。",
                keyPoints: [
                    "容器化：Dockerfile 编写、多阶段构建、镜像优化。",
                    "Kubernetes 部署：Deployment、Service、Ingress、ConfigMap/Secret。",
                    "可观测性：Prometheus 指标、Grafana 仪表盘、日志收集、分布式追踪。",
                ],
                lessons: [
                    {
                        id: "w12-1",
                        title: "Docker 容器化",
                        detail: "编写生产级 Dockerfile，实现多阶段构建、镜像瘦身、安全加固。",
                        resources: [
                            { title: "Docker 官方最佳实践", url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/" },
                            { title: "多阶段构建", url: "https://docs.docker.com/build/building/multi-stage/" },
                            { title: "Node.js Docker Best Practices", url: "https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md" },
                        ],
                    },
                    {
                        id: "w12-2",
                        title: "Kubernetes 部署",
                        detail: "使用 Kubernetes 部署电商应用，配置 Deployment、Service、Ingress、HPA。",
                        resources: [
                            { title: "Kubernetes 官方文档", url: "https://kubernetes.io/docs/home/" },
                            { title: "电商 K8s 部署案例", url: "https://developers.google.com/learn/pathways/solution-ecommerce-microservices-kubernetes" },
                            { title: "Helm Charts", url: "https://helm.sh/docs/" },
                        ],
                    },
                    {
                        id: "w12-3",
                        title: "监控与告警",
                        detail: "集成 Prometheus + Grafana 监控体系，配置关键指标告警。",
                        resources: [
                            { title: "Prometheus 入门", url: "https://prometheus.io/docs/introduction/overview/" },
                            { title: "Grafana Dashboard 设计", url: "https://grafana.com/docs/grafana/latest/dashboards/" },
                            { title: "告警最佳实践", url: "https://sre.google/sre-book/practical-alerting/" },
                        ],
                    },
                    {
                        id: "w12-4",
                        title: "日志与分布式追踪",
                        detail: "实现结构化日志、ELK/Loki 日志收集、OpenTelemetry 分布式追踪。",
                        resources: [
                            { title: "OpenTelemetry 入门", url: "https://opentelemetry.io/docs/" },
                            { title: "Grafana Loki", url: "https://grafana.com/docs/loki/latest/" },
                            { title: "Jaeger 分布式追踪", url: "https://www.jaegertracing.io/docs/" },
                        ],
                    },
                ],
            },
        ],
    },
]

export const ecommerceKnowledgeCards: KnowledgeCard[] = [
    {
        id: "card1",
        title: "SPU 与 SKU 模型",
        summary: "SPU 是标准产品单元，SKU 是库存单元，理解两者关系是电商数据建模的基础。",
        points: [
            "SPU（Standard Product Unit）：商品的抽象，如「iPhone 15 Pro」，包含品牌、名称、描述等。",
            "SKU（Stock Keeping Unit）：SPU 的具体变体，如「iPhone 15 Pro 256GB 黑色」，关联库存与价格。",
            "一个 SPU 对应多个 SKU，SKU 由规格组合（颜色 × 尺寸 × 版本）唯一确定。",
        ],
        practice: "设计一个服装商品的 SPU/SKU 模型，支持颜色、尺码两个规格维度，并实现 SKU 笛卡尔积生成。",
    },
    {
        id: "card2",
        title: "订单状态机",
        summary: "订单状态机定义了订单从创建到完成的所有合法状态与转移路径。",
        points: [
            "核心状态：待支付 → 已支付 → 待发货 → 已发货 → 已签收 → 已完成。",
            "异常状态：已取消、退款中、已退款、争议中。",
            "状态转移由事件触发：支付成功、发货、签收、取消、退款等。",
        ],
        practice: "使用 XState 实现一个完整的订单状态机，包含状态定义、转移事件、副作用处理。",
    },
    {
        id: "card3",
        title: "库存一致性",
        summary: "电商库存管理的核心挑战是在高并发下保证库存扣减的一致性。",
        points: [
            "下单锁库存：创建订单时预留库存，防止超卖。",
            "支付确认扣减：支付成功后正式扣减库存，失败则释放预留。",
            "超时自动释放：未支付订单超时后自动释放库存，通常 15-30 分钟。",
        ],
        practice: "使用 Redis WATCH/MULTI 或 Lua 脚本实现原子库存扣减，处理并发场景。",
    },
    {
        id: "card4",
        title: "购物车设计",
        summary: "购物车是电商转化的关键环节，需要平衡性能与功能。",
        points: [
            "存储选择：Redis Hash（高性能） vs 数据库（持久化），通常使用 Redis 缓存 + 数据库落盘。",
            "匿名 vs 登录：匿名购物车使用 Session/Cookie，登录后需要合并策略。",
            "商品失效处理：定期检查商品状态（下架、库存不足），提示用户。",
        ],
        practice: "实现一个购物车服务，支持添加、删除、修改数量，并处理匿名/登录用户合并。",
    },
    {
        id: "card5",
        title: "支付幂等性",
        summary: "支付系统必须保证幂等性，防止重复扣款或重复发货。",
        points: [
            "幂等键：使用订单号或支付请求 ID 作为幂等键，防止重复提交。",
            "状态校验：支付前检查订单状态，已支付/已取消的订单拒绝支付。",
            "Webhook 幂等：记录已处理的 Webhook 事件 ID，避免重复处理。",
        ],
        practice: "设计支付回调的幂等处理逻辑，使用 Redis SETNX 或数据库唯一索引实现。",
    },
    {
        id: "card6",
        title: "Elasticsearch 电商搜索",
        summary: "Elasticsearch 是电商商品搜索的标配，关键在于索引设计与相关性调优。",
        points: [
            "索引设计：商品名称、描述用 text 类型，品牌、分类用 keyword 类型。",
            "中文分词：使用 IK 分词器，支持「智能切分」和「最细粒度切分」两种模式。",
            "相关性调优：通过 boost 权重调整字段重要性，商品名匹配权重高于描述。",
        ],
        practice: "设计一个商品索引 Mapping，实现带分面筛选（品牌、价格区间、属性）的搜索接口。",
    },
    {
        id: "card7",
        title: "优惠计算规则",
        summary: "促销优惠计算需要清晰的规则优先级与叠加策略。",
        points: [
            "优惠类型：满减、折扣、无门槛券、运费券，各有计算逻辑。",
            "叠加规则：平台优惠 + 店铺优惠可叠加，同类优惠通常互斥取最优。",
            "计算顺序：先计算商品折扣，再应用满减，最后使用优惠券。",
        ],
        practice: "实现一个购物车优惠计算引擎，支持多种优惠类型与叠加规则配置。",
    },
    {
        id: "card8",
        title: "秒杀系统设计",
        summary: "秒杀是电商最具挑战的场景，核心在于流量控制与库存扣减。",
        points: [
            "流量削峰：答题验证、排队机制、令牌桶限流，减少瞬时压力。",
            "库存预热：秒杀开始前将库存加载到 Redis，减少数据库压力。",
            "原子扣减：使用 Redis DECR 或 Lua 脚本保证原子性，扣减成功再创建订单。",
        ],
        practice: "设计一个秒杀系统的技术方案，包括预热、限流、扣减、订单创建的完整流程。",
    },
    {
        id: "card9",
        title: "分布式事务：Saga 模式",
        summary: "电商下单涉及多个服务（库存、订单、支付），需要分布式事务保证一致性。",
        points: [
            "Saga 模式：将长事务拆分为多个本地事务，每个事务有对应的补偿操作。",
            "编排 vs 协同：编排式由中心协调器驱动，协同式由事件驱动。",
            "补偿事务：扣库存失败需释放，支付失败需取消订单并回补库存。",
        ],
        practice: "使用事件驱动的方式实现一个下单 Saga：库存扣减 → 订单创建 → 支付处理，包含补偿逻辑。",
    },
    {
        id: "card10",
        title: "电商系统可观测性",
        summary: "完善的可观测性是保障电商系统稳定性的基础。",
        points: [
            "核心指标：QPS、延迟（P99）、错误率、订单转化率、支付成功率。",
            "日志规范：结构化日志、TraceID 贯穿、敏感信息脱敏。",
            "追踪链路：用户请求 → API Gateway → 服务 → 数据库/缓存，完整追踪。",
        ],
        practice: "为电商 API 集成 OpenTelemetry，实现 Metrics + Logs + Traces 的统一可观测性。",
    },
]

export const ecommerceExamQuestions: QuizQuestion[] = [
    {
        id: "eq1",
        question: "在电商系统中，SPU 和 SKU 的关系是？",
        options: ["一对一", "一对多", "多对一", "多对多"],
        answer: 1,
        rationale: "一个 SPU（标准产品单元）对应多个 SKU（库存单元），例如「iPhone 15」对应多个颜色和容量的 SKU。",
    },
    {
        id: "eq2",
        question: "下单时锁定库存，支付成功后扣减库存，这种模式叫做？",
        options: ["乐观锁", "悲观锁", "预扣库存", "延迟扣减"],
        answer: 2,
        rationale: "预扣库存模式在下单时锁定（预留）库存，支付成功后正式扣减，超时未支付则释放。",
    },
    {
        id: "eq3",
        question: "以下哪种存储最适合实现高性能购物车？",
        options: ["MySQL", "Redis Hash", "MongoDB", "Elasticsearch"],
        answer: 1,
        rationale: "Redis Hash 非常适合购物车场景：商品 ID 作为 field，数量作为 value，读写性能极高。",
    },
    {
        id: "eq4",
        question: "JWT 认证相比 Session 认证的主要优势是？",
        options: ["更安全", "无状态，易于水平扩展", "支持更多用户", "更简单"],
        answer: 1,
        rationale: "JWT 是无状态认证，服务端不需要存储 Session，更容易实现水平扩展。",
    },
    {
        id: "eq5",
        question: "电商分类树存储方案中，「物化路径」的特点是？",
        options: ["查询慢，更新快", "查询快，更新需要更新所有子节点路径", "不支持多级分类", "只能存储二叉树"],
        answer: 1,
        rationale: "物化路径（如 /1/3/7/）查询祖先和子孙非常快，但移动节点需要更新所有子节点的路径。",
    },
    {
        id: "eq6",
        question: "Stripe Payment Intent 的主要作用是？",
        options: ["存储用户信息", "跟踪支付生命周期", "计算运费", "生成发票"],
        answer: 1,
        rationale: "Payment Intent 是 Stripe 的核心支付对象，用于跟踪支付从创建到完成的整个生命周期。",
    },
    {
        id: "eq7",
        question: "处理支付 Webhook 时，最关键的安全措施是？",
        options: ["使用 HTTPS", "验证签名", "限制 IP", "设置超时"],
        answer: 1,
        rationale: "验证 Webhook 签名是最关键的，确保请求真的来自支付平台，防止伪造支付成功通知。",
    },
    {
        id: "eq8",
        question: "Elasticsearch 中，用于商品品牌筛选的字段类型应该是？",
        options: ["text", "keyword", "integer", "nested"],
        answer: 1,
        rationale: "品牌名称用于精确匹配和聚合，应使用 keyword 类型，不需要分词。",
    },
    {
        id: "eq9",
        question: "秒杀系统中，使用 Redis 进行库存扣减时，最佳实践是？",
        options: ["GET 后 SET", "INCR", "DECR 或 Lua 脚本", "直接操作数据库"],
        answer: 2,
        rationale: "使用 Redis DECR 或 Lua 脚本可以保证原子性，避免超卖问题。",
    },
    {
        id: "eq10",
        question: "订单状态机中，「已发货」状态可以转移到？",
        options: ["待支付", "已签收", "待发货", "已取消"],
        answer: 1,
        rationale: "已发货后，正常流程只能转移到已签收。退货需要通过售后流程处理。",
    },
    {
        id: "eq11",
        question: "优惠券系统中，防止同一用户重复领取的最佳方案是？",
        options: ["前端限制", "数据库唯一索引（用户 ID + 优惠券 ID）", "IP 限制", "Cookie 标记"],
        answer: 1,
        rationale: "数据库层面使用唯一索引是最可靠的方案，前端限制和 Cookie 都可以被绑过。",
    },
    {
        id: "eq12",
        question: "电商系统中，处理跨服务事务（库存、订单、支付）的推荐模式是？",
        options: ["2PC", "XA 事务", "Saga", "直接调用"],
        answer: 2,
        rationale: "Saga 模式通过补偿事务实现最终一致性，适合微服务架构下的长事务场景。",
    },
    {
        id: "eq13",
        question: "缓存穿透是指？",
        options: ["大量请求同时访问同一个热点 Key", "Key 过期瞬间大量请求打到数据库", "查询不存在的数据，请求直接穿透到数据库", "缓存和数据库数据不一致"],
        answer: 2,
        rationale: "缓存穿透是指查询一定不存在的数据，由于缓存不命中，每次都查询数据库。",
    },
    {
        id: "eq14",
        question: "Next.js 的 ISR（增量静态再生）最适合哪种电商页面？",
        options: ["购物车页面", "商品详情页", "支付页面", "用户订单列表"],
        answer: 1,
        rationale: "商品详情页内容相对稳定但需要 SEO，ISR 可以在保证性能的同时定期更新内容。",
    },
    {
        id: "eq15",
        question: "电商系统的 P99 延迟是指？",
        options: ["平均延迟", "99% 的请求延迟低于此值", "最大延迟", "最小延迟"],
        answer: 1,
        rationale: "P99 表示 99% 的请求延迟低于此值，是衡量用户体验的重要指标。",
    },
    {
        id: "eq16",
        question: "Kubernetes 中，用于管理敏感配置（如数据库密码）的资源是？",
        options: ["ConfigMap", "Secret", "Deployment", "Service"],
        answer: 1,
        rationale: "Secret 用于存储敏感信息，如密码、Token 等，数据会进行 Base64 编码。",
    },
    {
        id: "eq17",
        question: "物流轨迹查询通常采用什么模式获取更新？",
        options: ["客户端轮询", "物流公司 Webhook 推送", "WebSocket 长连接", "以上都可以"],
        answer: 3,
        rationale: "轮询适合简单场景，Webhook 推送效率更高，WebSocket 适合需要实时展示的场景。",
    },
    {
        id: "eq18",
        question: "商品搜索结果的「相关性」主要由什么决定？",
        options: ["商品价格", "Elasticsearch 的评分算法", "商品销量", "上架时间"],
        answer: 1,
        rationale: "Elasticsearch 使用 BM25 等评分算法计算文档与查询的相关性，可通过 boost 调整权重。",
    },
    {
        id: "eq19",
        question: "电商促销规则「满 200 减 30」属于哪种类型？",
        options: ["折扣券", "满减券", "无门槛券", "运费券"],
        answer: 1,
        rationale: "满减券是指订单金额达到一定门槛后减免固定金额，「满 200 减 30」是典型的满减规则。",
    },
    {
        id: "eq20",
        question: "分布式追踪中，用于关联跨服务请求的标识是？",
        options: ["Session ID", "Trace ID", "User ID", "Request ID"],
        answer: 1,
        rationale: "Trace ID 在请求入口生成，贯穿整个调用链路，用于关联跨服务的请求。",
    },
    {
        id: "eq21",
        question: "Redis 缓存与数据库一致性的「延迟双删」策略是指？",
        options: ["删除缓存两次", "更新数据库后先删缓存，延迟一段时间再删一次", "双写缓存和数据库", "使用两个缓存实例"],
        answer: 1,
        rationale: "延迟双删在更新数据库后删除缓存，延迟一段时间（如 500ms）后再删一次，应对并发读取旧数据写入缓存的问题。",
    },
    {
        id: "eq22",
        question: "电商系统中，订单快照存储的主要目的是？",
        options: ["节省存储空间", "保留下单时的商品信息，防止商品修改影响历史订单", "提高查询速度", "支持全文搜索"],
        answer: 1,
        rationale: "订单快照记录下单时的商品信息（名称、价格、规格等），即使商品后来修改或下架，历史订单仍能正确显示。",
    },
    {
        id: "eq23",
        question: "OAuth2 授权码模式中，用户授权后返回的是？",
        options: ["Access Token", "Refresh Token", "Authorization Code", "User Info"],
        answer: 2,
        rationale: "授权码模式下，用户授权后返回 Authorization Code，后端再用 Code 换取 Access Token，更安全。",
    },
    {
        id: "eq24",
        question: "Prometheus 采集指标的模式是？",
        options: ["Push", "Pull", "Pub/Sub", "Streaming"],
        answer: 1,
        rationale: "Prometheus 使用 Pull 模式，主动从目标的 /metrics 端点拉取指标数据。",
    },
    {
        id: "eq25",
        question: "Docker 多阶段构建的主要目的是？",
        options: ["加快构建速度", "减小最终镜像体积", "支持多种操作系统", "并行构建"],
        answer: 1,
        rationale: "多阶段构建可以在构建阶段使用完整的编译环境，最终镜像只包含运行时必需的文件，大幅减小体积。",
    },
]

export const ecommerceRoadmap: RoadmapDefinition = {
    id: "ecommerce",
    label: "电商平台",
    title: "电商平台开发",
    durationLabel: "12 周完整学习路线",
    description:
        "从零构建现代电商平台：需求分析 → 技术选型 → 核心模块开发 → 高级功能 → 性能优化 → 部署运维。覆盖用户系统、商品管理、购物车、订单支付、搜索推荐、营销促销、库存物流等完整电商业务。",
    heroBadge: "12 周 · 48 主题 · 全栈实战",
    stages: ecommerceStages,
    knowledgeCards: ecommerceKnowledgeCards,
    examQuestions: ecommerceExamQuestions,
    suggestion: (percent: number) => {
        if (percent < 25) {
            return "建议先完成第一阶段的基础架构设计，理解电商业务模型与技术选型。"
        }
        if (percent < 50) {
            return "继续学习核心模块开发，重点掌握用户认证、商品管理、订单与支付流程。"
        }
        if (percent < 75) {
            return "深入高级功能实现，包括搜索推荐、库存管理、营销促销系统。"
        }
        return "通过性能优化与部署运维巩固所学，准备上线一个完整的电商项目。"
    },
    resourceGuide: {
        environment: "推荐技术栈：Next.js（前端）+ Node.js/Express（后端）+ PostgreSQL + Redis + Elasticsearch。开发环境使用 Docker Compose 统一管理。",
        fallbackKeyPoints: [
            "电商系统的核心是交易闭环：商品展示 → 购物车 → 下单 → 支付 → 履约。",
            "数据一致性是关键：库存扣减、支付状态、订单状态必须保持一致。",
            "性能决定体验：首屏加载、搜索响应、秒杀并发都需要精心优化。",
        ],
        handsOnSteps: [
            "搭建开发环境：Docker Compose 启动 PostgreSQL、Redis、Elasticsearch。",
            "阅读文档，理解核心概念和 API 设计。",
            "编写代码实现功能，先跑通主流程，再处理边界情况。",
            "编写单元测试和集成测试，确保功能正确性。",
        ],
        selfChecks: [
            "能否完整描述一个订单从创建到完成的状态变化？",
            "如何处理支付回调的幂等性问题？",
            "秒杀场景下如何保证库存不超卖？",
        ],
        extensions: [
            "研究主流电商平台（淘宝、京东、Shopify）的技术架构博客。",
            "深入学习 Elasticsearch 的搜索优化与推荐算法。",
            "探索 Serverless 架构在电商场景的应用。",
        ],
        lessonQuizAdvice: "错题通常反映对业务逻辑或技术实现的理解偏差，建议结合实际编码加深理解。",
    },
}
