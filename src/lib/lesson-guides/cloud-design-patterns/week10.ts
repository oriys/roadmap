import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "w10-1": {
        lessonId: "w10-1",
        background: [
            "【核心概念】Azure 架构文档：Geode 模式是一种地理分布式架构模式，名称来源于'GEographical nODEs'（地理节点）。将后端服务部署到多个全球分布的地理节点中，每个节点都可以服务任何区域的任何客户端请求，采用'active-active'（主动-主动）方式提供服务。",
            "【设计原理】Azure 文档：传统架构的三大局限——网络延迟问题（用户需连接远端单一服务端点）、流量管理困难（单一区域需求激增可能导致服务过载）、部署成本高（多区域部署基础设施的复杂度和成本高昂）。Geode 通过'bring compute to data'（将计算带到数据）解决这些问题。",
            "【Geode 特征】Azure 文档定义四个关键特征：Self-contained（自含性）——无依赖外部资源，单个失败不影响其他 Geode；Loosely coupled（松耦合）——通过边缘网络和复制后端通信；Full data availability（全数据可用）——所有请求可从所有 Geode 提供服务；Multiple deployments（多个部署）——生产环境必须至少有 2+ 个 Geode。",
            "【Azure Cosmos DB 全球分布】Microsoft 文档：Cosmos DB 是实现 Geode 模式的关键组件，支持'multi-region writes'（多区域写入），提供 99.999% 读写可用性，P99 延迟小于 10 毫秒。支持在全球任何 Azure 区域透明地复制数据，无需暂停或重新部署应用即可添加/移除区域。",
            "【Cosmos DB 一致性模型】Microsoft 文档：提供 5 种明确定义的一致性模型，在一致性和性能之间进行权衡。支持服务托管故障转移和手动故障转移，实现高可用性和业务连续性。",
            "【AWS 多区域架构】AWS 文档：关键服务包括 Route 53（DNS 故障转移）、DynamoDB Global Tables（全球数据同步）、S3 Cross-Region Replication（对象存储复制）、CloudFormation StackSets（跨区域部署）。实施时需要实施 RTO/RPO 策略和定期进行灾难恢复演练。"
        ],
        keyDifficulties: [
            "【与 Deployment Stamps 的区别】Azure 文档：Geode 模式多个节点并存（生产需 2+），使用地理复制共享数据，适合全球活跃用户；Deployment Stamps 可以独立存在，数据隔离或有限共享，适合区域隔离部署。选择取决于数据共享需求和用户分布。",
            "【数据处理策略权衡】Azure 文档：本地处理——各地区独立处理数据，低延迟但分布式协调复杂；聚合集中处理——单一 Geode 处理，通过 Change Feed 复制全球，需要使用 leasecollectionprefix 实现精细控制。",
            "【不适用场景】Azure 文档警告：有数据驻留限制（如 GDPR 合规）的场景不适合；需要会话状态维持的应用不适合；请求集中在单一区域、无需地理分布的场景不适合；需要改造的遗留系统不适合。",
            "【成本与性能权衡】Azure 文档：Geode 数量需要在性能和成本之间权衡，需进行负载测试。测试增加 Geode 数量 vs 升级 App Service Plan 层级的效果。Cosmos DB 多区域写和可用性区域会增加成本。",
            "【监控挑战】Azure 文档：分布式请求追踪（异步执行）需要完整的日志聚合方案。组件级监控需要覆盖 Azure Front Door、Azure Functions + Application Insights、Azure Cosmos DB + Log Analytics。",
            "【安全分层实施】Azure 文档：Azure Front Door 作为唯一入口，Cosmos DB 仅允许 Function App 流量，Function App 仅允许 Front Door 流量，所有密钥存储在 Key Vault 中。使用 IP 限制或 Microsoft Entra ID 进行访问控制。"
        ],
        handsOnPath: [
            "创建 Azure Cosmos DB 账户并配置全球分布：选择多个区域（如 East US、West Europe、Southeast Asia），启用 multi-region writes。",
            "配置 Azure Front Door 或 Traffic Manager：设置智能路由将用户请求路由到最近的 Geode，配置健康探测和故障转移策略。",
            "部署 Azure Function Apps 到多个区域：每个区域部署相同的函数代码，配置与本地 Cosmos DB 副本的连接。",
            "设置 Cosmos DB Change Feed：配置 Change Feed Processor 监听数据变更，实现跨 Geode 的数据同步和事件驱动处理。",
            "配置安全层：使用 Key Vault 存储连接字符串和密钥，配置 IP 限制确保 Cosmos DB 仅接受 Function App 流量。",
            "设置 Application Insights 和 Log Analytics：配置分布式追踪，创建跨区域的监控仪表板。",
            "测试故障转移：模拟单个区域故障，验证流量自动切换到其他 Geode，测量恢复时间。"
        ],
        selfCheck: [
            "Geode 模式的名称来源是什么？它与 Deployment Stamps 模式的主要区别是什么？",
            "Geode 模式的四个关键特征是什么？为什么生产环境必须至少有 2 个 Geode？",
            "Azure Cosmos DB 如何支持 Geode 模式？它提供哪些一致性模型？",
            "在什么场景下不应该使用 Geode 模式？举例说明数据驻留限制的影响。",
            "如何在 Geode 模式中实现安全分层？描述从 Front Door 到 Cosmos DB 的访问控制链。",
            "Geode 模式中的数据处理策略有哪两种？各有什么优缺点？",
            "如何监控分布式 Geode 部署？需要哪些组件和工具？"
        ],
        extensions: [
            "研究 Windows Active Directory 的多主复制实现，理解早期 Geode 模式的应用案例。",
            "探索 Azure Cosmos DB 的冲突解决策略，理解多区域写入时的数据一致性处理。",
            "学习 AWS Global Accelerator 和 CloudFront 的全球分布能力，对比与 Azure 方案的差异。",
            "研究 Cloudflare Workers 的边缘计算模式，理解将计算分布到全球边缘节点的方案。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/geodes",
            "https://learn.microsoft.com/en-us/azure/cosmos-db/distribute-data-globally",
            "https://docs.aws.amazon.com/whitepapers/latest/aws-multi-region-fundamentals/aws-multi-region-fundamentals.html"
        ]
    },
    "w10-2": {
        lessonId: "w10-2",
        background: [
            "【核心概念】Azure 架构文档：Asynchronous Request-Reply 模式用于'decouple frontend from long-running backend processing'——解耦前端应用与长时间运行的后端处理，同时为前端提供明确的响应。后端 API 处理可能需要数秒至数小时。",
            "【问题场景】Azure 文档：同步等待长时间操作会导致连接长时间占用、客户端响应延迟、系统可扩展性下降。现代应用需要能够处理不确定时长的后端操作而不阻塞用户界面。",
            "【HTTP 202 响应模式】Azure 文档：客户端发送请求后 API 响应 HTTP 202 (Accepted)，响应包含 Location 头指向状态端点，客户端轮询状态端点检查进度。完成时返回 HTTP 302/303 重定向到结果资源。",
            "【关键 HTTP 头】Azure 文档：Location 头提供客户端轮询的状态端点 URL（可使用 SAS 令牌保护）；Retry-After 头提供预计处理完成时间，防止客户端过度轮询。",
            "【Google AIP-151 规范】Google 文档：Long-Running Operations 应返回 google.longrunning.Operation 对象而非最终响应。使用 done 字段指示完成状态，response 字段（包装在 google.protobuf.Any 中）包含结果。metadata 字段在每次 GetOperation 调用时传达进度和部分失败信息。",
            "【WebSocket 替代方案】MDN 文档：WebSocket API 提供双向实时通信能力，适合需要即时推送的场景。关键接口包括 WebSocket（连接服务器、发送/接收数据）、CloseEvent（连接关闭事件）、MessageEvent（接收消息事件）。注意开放的 WebSocket 连接会阻止浏览器缓存（bfcache）。"
        ],
        keyDifficulties: [
            "【适用场景判断】Azure 文档：适用于浏览器应用无法提供回调端点、仅 HTTP 协议可用、需与不支持 WebSocket 的遗留系统集成、防火墙限制回调能力的场景。不适用于需实时流式响应、可使用 Event Grid 等异步通知服务、可使用 WebSocket/SignalR 的场景。",
            "【轮询策略设计】Azure 文档：需要使用指数退避策略避免轮询风暴，Retry-After 头指导客户端合理的轮询间隔。处理时间估计对用户体验很重要，可在 metadata 中提供进度百分比。",
            "【错误处理策略】Google AIP-151：阻止操作启动的错误返回标准错误响应；运行时失败填充 Operation.error 字段（google.rpc.Status）；非终端错误可存放在 metadata 字段中。",
            "【资源可见性设计】Google AIP-151：通过 Long-Running Operations 创建或删除资源时，资源应包含在 List 和 Get 调用中，但应使用状态枚举指示资源尚不可用。",
            "【并发操作处理】Google AIP-151：API 可以队列化多个并发操作或以 ABORTED 状态拒绝。声明式 API 可允许更新操作抢占现有操作。",
            "【时间阈值与过期】Google AIP-151：超过约 10 秒的操作应使用 Long-Running 模式；操作完成后约 30 天可过期删除。修改 response_type 或 metadata_type 是破坏性变更。"
        ],
        handsOnPath: [
            "创建 Azure Function 请求接收器：接收请求后验证参数，生成唯一请求 ID，将任务发送到 Service Bus 队列，返回 HTTP 202 和 Location 头。",
            "实现后端处理器：从 Service Bus 队列读取消息，执行长时间处理，将结果存储到 Blob Storage，记录请求 ID 用于状态查询。",
            "创建状态检查端点：接收请求 ID，检查 Blob Storage 中是否存在结果，存在则返回 HTTP 302 重定向，不存在则返回 HTTP 200 和进度信息。",
            "实现客户端轮询逻辑：解析 202 响应的 Location 头，使用指数退避策略轮询状态端点，处理 Retry-After 头优化轮询间隔。",
            "添加 SAS 令牌保护：为状态端点 URL 生成 SAS 令牌，设置合理的过期时间，防止未授权访问。",
            "实现取消机制：添加取消端点，客户端可以请求取消进行中的操作，后端定期检查取消标记。",
            "设置监控和告警：记录操作开始、完成、失败事件，监控平均处理时间和超时率。"
        ],
        selfCheck: [
            "Asynchronous Request-Reply 模式解决什么问题？HTTP 202 响应表示什么？",
            "Location 头和 Retry-After 头在这个模式中各起什么作用？",
            "状态端点应该返回哪些 HTTP 状态码？各表示什么含义？",
            "什么场景适合使用这个模式？什么场景应该使用 WebSocket 或 SignalR？",
            "Google AIP-151 规范中的 Long-Running Operation 对象包含哪些关键字段？",
            "如何处理长时间运行操作中的错误？终端错误和非终端错误有什么区别？",
            "为什么需要使用指数退避策略进行轮询？如何避免轮询风暴？"
        ],
        extensions: [
            "研究 Azure Logic Apps 的长时间运行任务模式，理解无服务器工作流中的异步处理。",
            "探索 AWS Step Functions 的异步执行模式，对比与 Azure 方案的差异。",
            "学习 GraphQL Subscriptions 的实时推送能力，理解与轮询模式的权衡。",
            "研究 Server-Sent Events (SSE) 作为 WebSocket 的轻量级替代方案。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/async-request-reply",
            "https://cloud.google.com/apis/design/standard_methods#long_running_operations",
            "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
        ]
    },
    "w10-3": {
        lessonId: "w10-3",
        background: [
            "【模式分类体系】Azure 架构文档：云设计模式按 Well-Architected Framework 五大支柱分类——Reliability（可靠性）、Security（安全性）、Cost Optimization（成本优化）、Operational Excellence（卓越运营）、Performance Efficiency（性能效率）。模式是技术无关的解决方案，解决分布式计算的常见挑战。",
            "【可靠性模式组合】Azure 文档：Circuit Breaker（处理变长时间故障）+ Retry（从临时故障恢复）+ Bulkhead（隔离故障防止级联）= 完整的弹性策略。补充 Saga（管理分布式事务）、Leader Election（协调分布式操作）、Health Endpoint Monitoring（检测系统问题）。",
            "【性能与扩展性模式组合】Azure 文档：CQRS（分离读写操作）+ Event Sourcing（追加式事件记录）+ Materialized View（预聚合查询数据）= 高性能数据处理。补充 Cache-Aside（按需加载数据）、Sharding（水平分布数据）、Deployment Stamps/Geode（跨区域独立副本）。",
            "【微服务模式语言】microservices.io 定义 10 个核心领域：架构风格、服务边界、服务协作、事务消息、测试、部署、通信风格、外部 API、服务发现、可观测性与可靠性。模式选择应基于特定约束而非同时应用所有模式。",
            "【模式关系与依赖】microservices.io 文档：服务边界分解先于协作模式；通信风格选择影响 API 网关设计；部署选择影响服务发现需求。'Database per Service'通常与 Saga 或 CQRS 配对；'Event Sourcing'与 Domain Events 和 CQRS 配合。",
            "【Building Microservices 三部曲】Sam Newman 的《Building Microservices》第二版分为三部分：Foundation（基础）——核心概念、建模、分解、通信风格；Implementation（实现）——服务间通信、工作流模式、部署、可观测性、安全性、扩展；People（人员）——组织结构、UI 方法、演进式架构。"
        ],
        keyDifficulties: [
            "【弹性组合顺序】Resilience4j 文档：推荐组合顺序为 Retry → CircuitBreaker → Bulkhead → TimeLimiter → RateLimiter。Retry 在最内层允许重试，CircuitBreaker 防止持续失败，Bulkhead 限制并发，TimeLimiter 控制超时，RateLimiter 在最外层限制速率。",
            "【CQRS + Event Sourcing 权衡】Martin Fowler 文档：这个组合增加复杂性，适合复杂领域、高并发读写分离、需要审计追踪的系统。不适合简单 CRUD 应用、团队缺乏领域驱动设计经验的场景。",
            "【网关组合策略】Azure 文档：Gateway Routing（单端点路由到多服务）+ Gateway Offloading（卸载 SSL、认证等共享功能）+ Gateway Aggregation（聚合多个后端请求）= 完整 API 网关。避免在网关中实现业务逻辑。",
            "【迁移组合策略】Azure 文档：Strangler Fig（渐进式替换旧系统功能）+ Anti-Corruption Layer（新旧系统间隔离层）= 安全的遗留系统迁移。迁移应按功能增量进行，每个功能独立验证。",
            "【多区域组合】Azure 文档：Geode（地理分布节点）+ Deployment Stamps（独立部署副本）+ Sharding（数据水平分区）= 全球规模架构。考虑数据一致性模型（强一致、最终一致）和跨区域延迟。",
            "【AI 工作负载模式】Azure 文档：对于多自主代理的 AI 工作负载，微软提供专门的 AI Agent Orchestration Patterns，扩展传统的 Scheduler Agent Supervisor 和 Choreography 模式。"
        ],
        handsOnPath: [
            "设计电商订单系统的模式组合：识别需要的弹性模式（Retry、Circuit Breaker、Bulkhead）、数据模式（CQRS、Event Sourcing、Saga）、通信模式（Pub/Sub、Queue）。",
            "实现弹性模式组合：使用 Resilience4j 的 Decorators 链式组合 Retry → CircuitBreaker → Bulkhead，测试不同故障场景下的行为。",
            "构建 API 网关层：配置 Kong 或 AWS API Gateway 实现 Routing + Offloading + Aggregation，测试认证、限流、请求聚合功能。",
            "设计遗留系统迁移方案：选择一个功能实施 Strangler Fig 模式，创建 Anti-Corruption Layer 适配器，验证新旧系统并行运行。",
            "实现 CQRS + Event Sourcing：为银行账户领域实现事件存储，创建独立的读模型，测试事件重放和状态重建。",
            "设计多区域部署方案：规划 Geode 或 Deployment Stamps 架构，配置数据复制策略和一致性模型，测试区域故障转移。",
            "创建模式决策树：记录模式选择的决策标准、适用场景、权衡考量，形成团队参考文档。"
        ],
        selfCheck: [
            "Azure Well-Architected Framework 的五大支柱是什么？每个支柱对应哪些典型模式？",
            "弹性模式组合（Retry + Circuit Breaker + Bulkhead）的推荐执行顺序是什么？为什么这样排序？",
            "CQRS 和 Event Sourcing 为什么经常一起使用？这个组合适合和不适合什么场景？",
            "API 网关的三个核心职责（Routing、Offloading、Aggregation）分别解决什么问题？",
            "Strangler Fig 和 Anti-Corruption Layer 如何配合实现安全的遗留系统迁移？",
            "microservices.io 定义的模式语言包含哪些核心领域？模式选择应该基于什么原则？",
            "设计一个系统时，如何决定使用哪些模式组合？需要考虑哪些因素？"
        ],
        extensions: [
            "阅读《Cloud Native Patterns》深入理解模式在云原生环境中的应用。",
            "研究 Netflix 的微服务架构演进，理解 Zuul、Eureka、Hystrix 等组件的模式应用。",
            "学习 Domain-Driven Design 的战略设计，理解 Bounded Context 如何指导模式选择。",
            "探索 Service Mesh（Istio、Linkerd）如何在基础设施层实现弹性和可观测性模式。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/",
            "https://microservices.io/patterns/",
            "https://samnewman.io/books/building_microservices_2nd_edition/"
        ]
    },
    "w10-4": {
        lessonId: "w10-4",
        background: [
            "【Azure Well-Architected Framework 五大支柱】Microsoft 文档：Reliability（可靠性）——通过冗余和规模化弹性确保正常运行时间和恢复目标；Security（安全性）——维护机密性和数据完整性保护工作负载；Cost Optimization（成本优化）——在组织、架构和战术层面控制支出；Operational Excellence（卓越运营）——构建整体可观测性和自动化系统；Performance Efficiency（性能效率）——通过水平扩展和生产前测试适应需求变化。",
            "【AWS Well-Architected Framework 六大支柱】AWS 文档：Operational Excellence（运营卓越）——运行和监控系统，持续改进流程；Security（安全性）——保护信息和系统，强调数据完整性和访问控制；Reliability（可靠性）——工作负载执行预期功能，快速从故障恢复；Performance Efficiency（性能效率）——最优分配 IT 资源，选择适当大小的基础设施；Cost Optimization（成本优化）——避免不必要成本，控制支出和正确配置资源；Sustainability（可持续性）——最小化云工作负载的环境影响。",
            "【Google Cloud Architecture Framework 六大支柱】Google 文档：Operational Excellence（运营卓越）——高效部署、运营、监控和管理云工作负载；Security, Privacy, and Compliance（安全、隐私和合规）——最大化数据安全，符合法规要求；Reliability（可靠性）——设计弹性、高可用系统；Cost Optimization（成本优化）——最大化云投资的业务价值；Performance Optimization（性能优化）——调优资源以获得最佳性能；Sustainability（可持续性）——云运营中的环境责任。",
            "【设计为变化】Google 文档：构建能适应持续演进的系统，通过快速迭代部署。DORA 指标帮助团队监控部署速度、易用性和安全性。",
            "【简化与托管服务】Google 文档：优先选择易于理解的架构，利用完全托管的服务减少运营复杂性和管理开销。",
            "【解耦与无状态】Google 文档：将应用分离为独立组件，支持隔离升级、安全控制和性能管理。无状态应用更快扩展、更好地承受重启，通过共享存储提供更好的用户体验。"
        ],
        keyDifficulties: [
            "【框架差异对比】三大云厂商框架的主要差异：Azure 五支柱 vs AWS 六支柱（增加 Sustainability）vs Google 六支柱（增加 Privacy 和 Compliance）。AWS Well-Architected Tool 提供免费的浏览器评估工具，Google 强调 DORA 指标和声明式配置。",
            "【评估方法选择】Microsoft 提供 Azure Architecture Review 评估工具；AWS 提供 Well-Architected Tool 在 AWS 管理控制台中；Google 通过 Architecture Framework 文档和检查清单。定期评估工作负载、识别高风险问题、跟踪改进是共同的最佳实践。",
            "【支柱间权衡】安全性加强可能影响性能效率（如加密开销）；成本优化可能影响可靠性（如减少冗余）；性能优化可能增加成本（如更大实例）。需要根据业务优先级进行权衡决策。",
            "【工作负载特定指南】Azure 提供 AI、SaaS、Oracle on IaaS、SAP、关键任务、可持续性、VMware、Virtual Desktop 等特定指南；AWS 提供特定 Lens（如机器学习、无服务器、IoT）；Google 提供 AI/ML 和金融服务行业指南。",
            "【文档质量标准】Google 文档：'Quality documentation isn't achieved by producing a specific amount of documentation, but by how clear content is, how useful it is'——质量文档不在于数量而在于清晰度和实用性。文档建立团队间的共同语言。",
            "【演进式架构原则】Sam Newman：微服务架构应支持独立演进，组织结构应与服务边界对齐（康威定律逆用），UI 方法（BFF、GraphQL）应适应不同客户端需求。"
        ],
        handsOnPath: [
            "使用 Azure Architecture Review 工具评估现有工作负载：回答框架问题，生成评估报告，识别改进领域。",
            "使用 AWS Well-Architected Tool 进行评估：在 AWS 控制台中创建工作负载评估，选择相关 Lens，生成改进计划。",
            "对照 Google Cloud Architecture Framework 检查清单：评估运营、安全、可靠性、成本、性能、可持续性各方面。",
            "创建架构决策记录（ADR）：记录重要的模式选择决策，包括上下文、决策、后果和替代方案。",
            "设计可靠性测试计划：规划混沌工程实验（如区域故障、服务故障），验证系统恢复能力。",
            "建立成本监控仪表板：配置云成本分析工具，设置预算告警，识别优化机会。",
            "制定安全基线检查清单：根据框架建议创建安全检查项，定期执行合规审计。",
            "建立性能基准测试：创建负载测试场景，建立性能基线，监控关键指标的变化。"
        ],
        selfCheck: [
            "Azure、AWS、Google Cloud 三大架构框架的支柱有什么异同？",
            "如何使用 AWS Well-Architected Tool 评估工作负载？评估结果如何指导改进？",
            "架构框架的不同支柱之间可能存在什么权衡？举例说明安全性与性能的权衡。",
            "什么是架构决策记录（ADR）？为什么记录架构决策很重要？",
            "Google Cloud Architecture Framework 强调的'Design for Change'原则意味着什么？",
            "为什么'Quality documentation isn't achieved by producing a specific amount'？好文档的标准是什么？",
            "回顾这 10 周学习的云设计模式，哪些模式属于可靠性支柱？哪些属于性能效率支柱？"
        ],
        extensions: [
            "深入学习 DORA 指标（部署频率、变更前置时间、服务恢复时间、变更失败率），理解如何衡量 DevOps 效能。",
            "研究混沌工程原则和 Netflix Chaos Monkey，理解如何通过故障注入提高系统可靠性。",
            "学习 FinOps 框架，理解云成本管理的最佳实践和组织实施方法。",
            "探索 Green Software Foundation 的可持续软件设计原则，理解如何减少软件的碳足迹。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/well-architected/",
            "https://aws.amazon.com/architecture/well-architected/",
            "https://cloud.google.com/architecture/framework"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "w10-1": [
        {
            id: "w10-1-q1",
            question: "Azure 架构文档中，Geode 模式的名称来源是什么？",
            options: [
                "一种矿物晶体的名称",
                "GEographical nODEs（地理节点）的缩写",
                "一个著名架构师的名字",
                "Google Earth Object Distribution Engine 的缩写"
            ],
            answer: 1,
            rationale: "Azure 文档明确：Geode 模式名称来源于'GEographical nODEs'——地理节点的缩写，表示将服务部署到多个地理分布的节点。"
        },
        {
            id: "w10-1-q2",
            question: "Azure 文档定义的 Geode 模式四个关键特征中，'Self-contained'（自含性）意味着什么？",
            options: [
                "每个 Geode 有独立的数据库",
                "每个 Geode 无依赖外部资源，单个失败不影响其他 Geode",
                "每个 Geode 使用不同的编程语言",
                "每个 Geode 有独立的域名"
            ],
            answer: 1,
            rationale: "Azure 文档：Self-contained（自含性）意味着'无依赖外部资源，单个失败不影响其他 Geode'——每个节点独立运行。"
        },
        {
            id: "w10-1-q3",
            question: "Geode 模式采用什么方式提供服务？",
            options: [
                "Active-Passive（主动-被动）",
                "Active-Active（主动-主动）",
                "Primary-Replica（主-副本）",
                "Leader-Follower（领导者-跟随者）"
            ],
            answer: 1,
            rationale: "Azure 文档明确：Geode 模式采用'active-active'（主动-主动）方式，每个节点都可以服务任何区域的任何客户端请求。"
        },
        {
            id: "w10-1-q4",
            question: "Azure Cosmos DB 支持 Geode 模式的关键能力是什么？",
            options: [
                "仅支持 SQL 查询",
                "支持 multi-region writes（多区域写入）和全球数据复制",
                "只能在单一区域部署",
                "仅支持读取操作"
            ],
            answer: 1,
            rationale: "Microsoft 文档：Cosmos DB 支持'multi-region writes'（多区域写入），提供 99.999% 读写可用性，P99 延迟小于 10 毫秒。"
        },
        {
            id: "w10-1-q5",
            question: "Azure 文档指出生产环境 Geode 部署的最低要求是什么？",
            options: [
                "至少 1 个 Geode",
                "至少 2 个 Geode",
                "至少 3 个 Geode",
                "至少 5 个 Geode"
            ],
            answer: 1,
            rationale: "Azure 文档：Multiple deployments 特征要求'生产环境必须至少有 2+ 个 Geode'，以确保高可用性和地理分布。"
        },
        {
            id: "w10-1-q6",
            question: "Azure 文档指出以下哪种场景不适合使用 Geode 模式？",
            options: [
                "全球分布的用户群",
                "需要极高可用性的服务",
                "有数据驻留限制（如 GDPR 合规）的场景",
                "需要多区域故障恢复的应用"
            ],
            answer: 2,
            rationale: "Azure 文档警告：有'数据驻留限制（如 GDPR 合规）'的场景不适合使用 Geode 模式，因为数据会在多个地理区域复制。"
        },
        {
            id: "w10-1-q7",
            question: "Geode 模式与 Deployment Stamps 模式的主要区别是什么？",
            options: [
                "Geode 成本更低",
                "Geode 使用地理复制共享数据，Deployment Stamps 数据隔离或有限共享",
                "Deployment Stamps 只能部署一个实例",
                "两者没有区别，只是命名不同"
            ],
            answer: 1,
            rationale: "Azure 文档：Geode 模式'使用地理复制共享数据'适合全球活跃用户；Deployment Stamps'数据隔离或有限共享'适合区域隔离部署。"
        },
        {
            id: "w10-1-q8",
            question: "Azure 文档建议的 Geode 模式安全分层中，什么应该作为唯一入口？",
            options: [
                "Azure Cosmos DB",
                "Azure Function Apps",
                "Azure Front Door",
                "Azure Key Vault"
            ],
            answer: 2,
            rationale: "Azure 文档：安全分层中'Azure Front Door（唯一入口）'作为第一层，Cosmos DB 仅允许 Function App 流量，Function App 仅允许 Front Door 流量。"
        },
        {
            id: "w10-1-q9",
            question: "Azure Cosmos DB 提供几种一致性模型？",
            options: [
                "2 种",
                "3 种",
                "5 种",
                "7 种"
            ],
            answer: 2,
            rationale: "Microsoft 文档：Cosmos DB 提供'5 种明确定义的一致性模型'，在一致性和性能之间进行权衡选择。"
        },
        {
            id: "w10-1-q10",
            question: "Azure 文档描述的 Geode 模式数据处理策略中，'聚合集中处理'需要使用什么技术？",
            options: [
                "SQL Server Replication",
                "Cosmos DB Change Feed 通过 Change Feed 复制全球",
                "Azure Blob Storage",
                "Azure Service Bus"
            ],
            answer: 1,
            rationale: "Azure 文档：聚合集中处理策略是'单一 Geode 处理，通过 Change Feed 复制全球'，需要使用 leasecollectionprefix 实现精细控制。"
        },
        {
            id: "w10-1-q11",
            question: "Azure 文档提到的早期 Geode 模式实现案例是什么？",
            options: [
                "Amazon DynamoDB",
                "Google Spanner",
                "Windows Active Directory",
                "MongoDB Atlas"
            ],
            answer: 2,
            rationale: "Azure 文档：'Windows Active Directory'是早期 Geode 模式实现，使用多主复制（multi-primary replication），所有节点理论上可处理任何请求。"
        },
        {
            id: "w10-1-q12",
            question: "Azure 文档在 Well-Architected Framework 对齐中，Geode 模式主要支持哪两个支柱？",
            options: [
                "安全性和成本优化",
                "可靠性（Reliability）和性能效率（Performance Efficiency）",
                "运营卓越和可持续性",
                "安全性和合规性"
            ],
            answer: 1,
            rationale: "Azure 文档：Geode 模式支持 Reliability（数据复制支持故障恢复）和 Performance Efficiency（从最近用户区域提供服务，消除长距离延迟）。"
        }
    ],
    "w10-2": [
        {
            id: "w10-2-q1",
            question: "Azure 架构文档对 Asynchronous Request-Reply 模式的核心定义是什么？",
            options: [
                "加速同步请求处理",
                "decouple frontend from long-running backend processing——解耦前端与长时间运行的后端处理",
                "提供实时双向通信",
                "批量处理大量请求"
            ],
            answer: 1,
            rationale: "Azure 文档明确：Asynchronous Request-Reply 模式用于'decouple frontend from long-running backend processing'——解耦前端与长时间运行的后端处理。"
        },
        {
            id: "w10-2-q2",
            question: "客户端发送请求后，API 应该返回什么 HTTP 状态码表示请求已接受？",
            options: [
                "HTTP 200 OK",
                "HTTP 201 Created",
                "HTTP 202 Accepted",
                "HTTP 204 No Content"
            ],
            answer: 2,
            rationale: "Azure 文档：客户端发送请求后'API 响应 HTTP 202 (Accepted)'，表示请求已被接受但尚未处理完成。"
        },
        {
            id: "w10-2-q3",
            question: "Azure 文档中，HTTP 202 响应应该包含什么关键 HTTP 头？",
            options: [
                "Content-Type 和 Content-Length",
                "Location 和 Retry-After",
                "Authorization 和 Accept",
                "Cache-Control 和 ETag"
            ],
            answer: 1,
            rationale: "Azure 文档：HTTP 202 响应包含'Location 头指向状态端点'和'Retry-After 头提供预计处理完成时间'，防止客户端过度轮询。"
        },
        {
            id: "w10-2-q4",
            question: "当长时间运行操作完成时，状态端点应该返回什么 HTTP 状态码？",
            options: [
                "HTTP 200 OK",
                "HTTP 201 Created",
                "HTTP 302/303 重定向到结果资源",
                "HTTP 204 No Content"
            ],
            answer: 2,
            rationale: "Azure 文档：操作完成时'返回 HTTP 302/303 重定向到结果资源'，客户端跟随重定向获取最终结果。"
        },
        {
            id: "w10-2-q5",
            question: "Google AIP-151 规范中，Long-Running Operation 对象使用什么字段指示操作完成？",
            options: [
                "status 字段",
                "finished 字段",
                "done 字段",
                "complete 字段"
            ],
            answer: 2,
            rationale: "Google AIP-151：Long-Running Operations 使用'done 字段指示完成状态'，response 字段包含结果。"
        },
        {
            id: "w10-2-q6",
            question: "Google AIP-151 建议超过多长时间的操作应该使用 Long-Running 模式？",
            options: [
                "约 1 秒",
                "约 5 秒",
                "约 10 秒",
                "约 60 秒"
            ],
            answer: 2,
            rationale: "Google AIP-151：'超过约 10 秒的操作应使用 Long-Running 模式'，避免同步等待导致的超时和资源占用。"
        },
        {
            id: "w10-2-q7",
            question: "Azure 文档指出以下哪种场景不适合使用 Asynchronous Request-Reply 模式？",
            options: [
                "浏览器应用无法提供回调端点",
                "可使用 WebSocket/SignalR 的场景",
                "防火墙限制回调能力",
                "仅 HTTP 协议可用"
            ],
            answer: 1,
            rationale: "Azure 文档：'可使用 WebSocket/SignalR'的场景不适合使用轮询模式，应该使用实时推送获得更好的用户体验。"
        },
        {
            id: "w10-2-q8",
            question: "Google AIP-151 中，运行时失败应该填充到 Operation 对象的什么字段？",
            options: [
                "metadata 字段",
                "response 字段",
                "error 字段（google.rpc.Status）",
                "result 字段"
            ],
            answer: 2,
            rationale: "Google AIP-151：'运行时失败填充 Operation.error 字段（google.rpc.Status）'，区别于阻止操作启动的错误。"
        },
        {
            id: "w10-2-q9",
            question: "MDN 文档指出 WebSocket 相比轮询的主要优势是什么？",
            options: [
                "更低的带宽消耗",
                "提供双向实时通信能力",
                "更好的浏览器兼容性",
                "更简单的服务器实现"
            ],
            answer: 1,
            rationale: "MDN 文档：WebSocket API'提供双向实时通信能力'，适合需要即时推送的场景，避免轮询的延迟和开销。"
        },
        {
            id: "w10-2-q10",
            question: "Azure 文档建议使用什么策略避免轮询风暴？",
            options: [
                "固定间隔轮询",
                "指数退避策略",
                "随机间隔轮询",
                "单次轮询"
            ],
            answer: 1,
            rationale: "Azure 文档：'需要使用指数退避策略避免轮询风暴'，Retry-After 头指导客户端合理的轮询间隔。"
        },
        {
            id: "w10-2-q11",
            question: "Google AIP-151 规范中，Long-Running Operation 完成后约多长时间可以过期删除？",
            options: [
                "约 7 天",
                "约 30 天",
                "约 90 天",
                "永不过期"
            ],
            answer: 1,
            rationale: "Google AIP-151：'操作完成后约 30 天可过期删除'，客户端应在合理时间内获取结果。"
        },
        {
            id: "w10-2-q12",
            question: "MDN 文档警告开放的 WebSocket 连接会影响什么浏览器功能？",
            options: [
                "Cookie 存储",
                "bfcache（浏览器前进后退缓存）",
                "Local Storage",
                "Service Worker"
            ],
            answer: 1,
            rationale: "MDN 文档警告：'开放的 WebSocket 连接阻止浏览器缓存（bfcache）'，用户离开页面时应主动关闭连接。"
        }
    ],
    "w10-3": [
        {
            id: "w10-3-q1",
            question: "Azure 架构文档将云设计模式按什么框架分类？",
            options: [
                "OSI 七层模型",
                "Well-Architected Framework 五大支柱",
                "TOGAF 企业架构框架",
                "12-Factor App 原则"
            ],
            answer: 1,
            rationale: "Azure 文档：云设计模式按'Well-Architected Framework 五大支柱'分类——Reliability、Security、Cost Optimization、Operational Excellence、Performance Efficiency。"
        },
        {
            id: "w10-3-q2",
            question: "Azure 文档推荐的弹性模式组合是什么？",
            options: [
                "Cache-Aside + Sharding + CQRS",
                "Circuit Breaker + Retry + Bulkhead",
                "Gateway Routing + Offloading + Aggregation",
                "Strangler Fig + Anti-Corruption Layer"
            ],
            answer: 1,
            rationale: "Azure 文档：'Circuit Breaker + Retry + Bulkhead = 完整的弹性策略'——处理变长时间故障、从临时故障恢复、隔离故障防止级联。"
        },
        {
            id: "w10-3-q3",
            question: "microservices.io 模式语言定义了多少个核心领域？",
            options: [
                "5 个",
                "8 个",
                "10 个",
                "12 个"
            ],
            answer: 2,
            rationale: "microservices.io 定义'10 个核心领域'：架构风格、服务边界、服务协作、事务消息、测试、部署、通信风格、外部 API、服务发现、可观测性与可靠性。"
        },
        {
            id: "w10-3-q4",
            question: "Resilience4j 推荐的弹性模式组合顺序（从内到外）是什么？",
            options: [
                "RateLimiter → TimeLimiter → Bulkhead → CircuitBreaker → Retry",
                "Retry → CircuitBreaker → Bulkhead → TimeLimiter → RateLimiter",
                "CircuitBreaker → Retry → Bulkhead → RateLimiter → TimeLimiter",
                "Bulkhead → Retry → CircuitBreaker → TimeLimiter → RateLimiter"
            ],
            answer: 1,
            rationale: "Resilience4j 文档推荐顺序：'Retry → CircuitBreaker → Bulkhead → TimeLimiter → RateLimiter'——Retry 在最内层允许重试，RateLimiter 在最外层限制速率。"
        },
        {
            id: "w10-3-q5",
            question: "Azure 文档建议 API 网关应该避免实现什么？",
            options: [
                "路由功能",
                "认证功能",
                "业务逻辑",
                "限流功能"
            ],
            answer: 2,
            rationale: "Azure 文档：'Gateway Routing + Offloading + Aggregation = 完整 API 网关'，但应'避免在网关中实现业务逻辑'——业务逻辑应留在后端服务。"
        },
        {
            id: "w10-3-q6",
            question: "CQRS + Event Sourcing 组合适合什么场景？",
            options: [
                "简单 CRUD 应用",
                "复杂领域、高并发读写分离、需要审计追踪的系统",
                "静态网站",
                "批处理任务"
            ],
            answer: 1,
            rationale: "Martin Fowler 文档：CQRS + Event Sourcing'适合复杂领域、高并发读写分离、需要审计追踪的系统'，不适合简单 CRUD 应用。"
        },
        {
            id: "w10-3-q7",
            question: "Azure 文档建议遗留系统迁移的模式组合是什么？",
            options: [
                "CQRS + Event Sourcing",
                "Strangler Fig + Anti-Corruption Layer",
                "Circuit Breaker + Bulkhead",
                "Cache-Aside + Materialized View"
            ],
            answer: 1,
            rationale: "Azure 文档：'Strangler Fig + Anti-Corruption Layer = 安全的遗留系统迁移'——渐进式替换旧功能，同时隔离新旧系统防止设计污染。"
        },
        {
            id: "w10-3-q8",
            question: "microservices.io 建议'Database per Service'通常与什么模式配对？",
            options: [
                "Cache-Aside",
                "Saga 或 CQRS",
                "Circuit Breaker",
                "Rate Limiting"
            ],
            answer: 1,
            rationale: "microservices.io 文档：'Database per Service'通常与'Saga 或 CQRS 配对'——Saga 处理跨服务事务，CQRS 分离读写优化性能。"
        },
        {
            id: "w10-3-q9",
            question: "Sam Newman 的《Building Microservices》第二版分为几个部分？",
            options: [
                "2 部分：理论和实践",
                "3 部分：Foundation、Implementation、People",
                "4 部分：设计、开发、部署、运维",
                "5 部分：按微服务生命周期划分"
            ],
            answer: 1,
            rationale: "Sam Newman 的书分为'三部分：Foundation（基础）、Implementation（实现）、People（人员）'——从概念到技术实现再到组织结构。"
        },
        {
            id: "w10-3-q10",
            question: "Azure 文档为全球规模架构推荐的模式组合是什么？",
            options: [
                "CQRS + Event Sourcing + Saga",
                "Geode + Deployment Stamps + Sharding",
                "Circuit Breaker + Retry + Bulkhead",
                "Gateway Routing + Offloading + Aggregation"
            ],
            answer: 1,
            rationale: "Azure 文档：'Geode + Deployment Stamps + Sharding = 全球规模架构'——地理分布节点、独立部署副本、数据水平分区。"
        },
        {
            id: "w10-3-q11",
            question: "Azure 文档提到对于 AI 工作负载的多自主代理场景，微软提供什么专门的模式？",
            options: [
                "Machine Learning Patterns",
                "AI Agent Orchestration Patterns",
                "Deep Learning Patterns",
                "Neural Network Patterns"
            ],
            answer: 1,
            rationale: "Azure 文档：'对于多自主代理的 AI 工作负载，微软提供专门的 AI Agent Orchestration Patterns'，扩展传统的 Scheduler Agent Supervisor 和 Choreography 模式。"
        },
        {
            id: "w10-3-q12",
            question: "microservices.io 强调模式选择应该基于什么原则？",
            options: [
                "选择最新的模式",
                "选择最流行的模式",
                "基于特定约束而非同时应用所有模式",
                "选择最简单的模式"
            ],
            answer: 2,
            rationale: "microservices.io 文档强调：'模式选择应基于特定约束而非同时应用所有模式'——实施应从架构决策进展到服务边界再到运营关注点。"
        }
    ],
    "w10-4": [
        {
            id: "w10-4-q1",
            question: "Azure Well-Architected Framework 包含几个支柱？",
            options: [
                "4 个",
                "5 个",
                "6 个",
                "7 个"
            ],
            answer: 1,
            rationale: "Microsoft 文档：Azure Well-Architected Framework 包含'5 大支柱'——Reliability、Security、Cost Optimization、Operational Excellence、Performance Efficiency。"
        },
        {
            id: "w10-4-q2",
            question: "AWS Well-Architected Framework 相比 Azure 框架多了什么支柱？",
            options: [
                "Privacy（隐私）",
                "Compliance（合规）",
                "Sustainability（可持续性）",
                "Agility（敏捷性）"
            ],
            answer: 2,
            rationale: "AWS 文档：AWS Well-Architected Framework 包含六大支柱，比 Azure 多了'Sustainability（可持续性）'——最小化云工作负载的环境影响。"
        },
        {
            id: "w10-4-q3",
            question: "Google Cloud Architecture Framework 的支柱中，哪个与 Azure/AWS 有明显不同？",
            options: [
                "Reliability（可靠性）",
                "Security, Privacy, and Compliance（安全、隐私和合规）",
                "Cost Optimization（成本优化）",
                "Performance Optimization（性能优化）"
            ],
            answer: 1,
            rationale: "Google 文档：Google 的支柱是'Security, Privacy, and Compliance'，比 Azure/AWS 的 Security 支柱更明确地包含了隐私和合规。"
        },
        {
            id: "w10-4-q4",
            question: "Azure Well-Architected Framework 中，Reliability（可靠性）支柱的核心目标是什么？",
            options: [
                "加密所有数据",
                "通过冗余和规模化弹性确保正常运行时间和恢复目标",
                "减少云支出",
                "提高部署频率"
            ],
            answer: 1,
            rationale: "Microsoft 文档：Reliability 支柱'通过冗余和规模化弹性确保正常运行时间和恢复目标'——确保系统能够从故障中恢复。"
        },
        {
            id: "w10-4-q5",
            question: "AWS 提供什么工具来评估工作负载是否符合 Well-Architected Framework？",
            options: [
                "AWS Config",
                "AWS Well-Architected Tool",
                "AWS CloudFormation",
                "AWS Inspector"
            ],
            answer: 1,
            rationale: "AWS 文档：'AWS Well-Architected Tool'是免费的浏览器工具，在 AWS 管理控制台中可用，帮助评估工作负载并生成改进计划。"
        },
        {
            id: "w10-4-q6",
            question: "Google Cloud Architecture Framework 强调的'Design for Change'原则意味着什么？",
            options: [
                "永不更改生产系统",
                "构建能适应持续演进的系统，通过快速迭代部署",
                "每年重新设计一次架构",
                "只使用最新的技术栈"
            ],
            answer: 1,
            rationale: "Google 文档：'Design for Change'意味着'构建能适应持续演进的系统，通过快速迭代部署'，DORA 指标帮助监控部署效能。"
        },
        {
            id: "w10-4-q7",
            question: "Google 文档对'Quality documentation'的定义是什么？",
            options: [
                "文档数量越多越好",
                "文档必须超过 100 页",
                "质量文档不在于数量而在于清晰度和实用性",
                "只需要 API 文档"
            ],
            answer: 2,
            rationale: "Google 文档：'Quality documentation isn't achieved by producing a specific amount of documentation, but by how clear content is, how useful it is'——质量在于清晰和实用。"
        },
        {
            id: "w10-4-q8",
            question: "三大云厂商架构框架的共同最佳实践是什么？",
            options: [
                "只关注成本优化",
                "定期评估工作负载、识别高风险问题、跟踪改进",
                "每月重新部署所有服务",
                "使用相同的技术栈"
            ],
            answer: 1,
            rationale: "三大云厂商共同强调'定期评估工作负载、识别高风险问题、跟踪改进'是持续改进架构的最佳实践。"
        },
        {
            id: "w10-4-q9",
            question: "Azure Well-Architected Framework 中，Operational Excellence（卓越运营）支柱的核心目标是什么？",
            options: [
                "加密所有通信",
                "通过构建整体可观测性和自动化系统减少生产问题",
                "降低云成本",
                "提高系统性能"
            ],
            answer: 1,
            rationale: "Microsoft 文档：Operational Excellence 支柱'通过构建整体可观测性和自动化系统来减少生产问题'——强调监控和自动化。"
        },
        {
            id: "w10-4-q10",
            question: "不同支柱之间可能存在什么样的权衡？",
            options: [
                "支柱之间没有权衡，都可以同时最优化",
                "安全性加强可能影响性能效率（如加密开销）",
                "只有成本和性能存在权衡",
                "只有安全性和可靠性存在权衡"
            ],
            answer: 1,
            rationale: "文档指出：'安全性加强可能影响性能效率（如加密开销）；成本优化可能影响可靠性（如减少冗余）'——需要根据业务优先级权衡。"
        },
        {
            id: "w10-4-q11",
            question: "Azure 提供了哪些工作负载特定的 Well-Architected 指南？",
            options: [
                "只有通用指南",
                "AI、SaaS、Oracle on IaaS、SAP、关键任务等特定指南",
                "只有 Web 应用指南",
                "只有数据库指南"
            ],
            answer: 1,
            rationale: "Microsoft 文档：Azure 提供'AI、SaaS、Oracle on IaaS、SAP、关键任务、可持续性、VMware、Virtual Desktop 等特定指南'。"
        },
        {
            id: "w10-4-q12",
            question: "Google Cloud Architecture Framework 中，什么是 DORA 指标？",
            options: [
                "数据库优化指标",
                "帮助团队监控部署速度、易用性和安全性的 DevOps 效能指标",
                "云成本计算指标",
                "安全合规检查指标"
            ],
            answer: 1,
            rationale: "Google 文档：'DORA 指标帮助团队监控部署速度、易用性和安全性'——包括部署频率、变更前置时间、服务恢复时间、变更失败率。"
        }
    ]
}
