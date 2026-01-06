import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "w8-1": {
        lessonId: "w8-1",
        background: [
            "【核心概念】Azure 官方文档：Deployment Stamps 是一种'通过配置、管理和监控多个独立、相同的资源组合来托管和运营多个工作负载或租户'的模式。每个副本称为'stamp'（邮票/单位），在多租户环境中，每个 stamp 可服务预定数量的租户。",
            "【隐式数据分片】官方文档指出：Deployment Stamps 模式'隐式地对数据进行分片'——每个 stamp 包含特定租户的数据，实现数据隔离而无需复杂的分片逻辑。多个 stamp 可独立部署和更新，支持线性扩展和跨地域部署。",
            "【与 Geode 的区别】Azure 文档明确区分：Deployment Stamps 可以'单个 stamp 独立存在'，数据可能有位置约束，需要'感知数据位置的路由器'；而 Geode 模式'必须至少有两个 geode'，数据在全球复制，任何客户端可连接任意 geode。",
            "【解决的问题】官方文档列出六大驱动场景：1) 组件扩展限制（连接数、TCP 套接字）；2) 非线性扩展成本；3) 租户隔离需求；4) 混合租约模式（大客户独占，小客户共享）；5) 地理/政治数据驻留要求；6) 客户对更新频率的不同容忍度。",
            "【Well-Architected 对齐】Azure 文档指出该模式支持：运营卓越（OE:05, OE:11）——基础设施即代码、不可变基础设施；性能效率（PE:05）——定义扩展单位、按需添加 stamp；可靠性——故障隔离到单个 stamp；安全性——租户隔离、减少故障影响面。"
        ],
        keyDifficulties: [
            "【部署复杂性】Azure 文档强调：Deployment Stamps 的'复杂性在于部署流程'，必须建立'完全自动化的部署流程（IaC）'——使用 Bicep、Terraform 或 ARM Templates 确保每个 stamp 完全一致。官方建议：'部署至少 2 个 stamp 以验证可重复性'。",
            "【流量路由挑战】官方文档描述两种路由方式：1) DNS 直接路由（如 unit1.aus.myapi.contoso.com）——简单但灵活性低；2) 中央路由服务（使用 API Management）——灵活但路由服务本身需要高可用（多地域部署）。路由器必须维护'租户到 stamp 的映射'。",
            "【跨 Stamp 操作困难】Azure 文档警告：'跨 stamp 查询和报表需要建立中央数据仓库或查询聚合层'。租户迁移也很复杂，需要实现'自定义迁移逻辑和跨 stamp 通信'。单个 stamp 内的操作简单，跨 stamp 的操作复杂。",
            "【成本权衡】官方文档指出：Deployment Stamps '成本比单实例更高'，需要进行'成本-收益分析'。最少需要部署 2 个 stamp 验证架构，每个 stamp 包含完整的基础设施（应用、数据库、存储），资源利用率可能不如共享多租户高。",
            "【容量管理】Azure 文档建议：必须'监控 stamp 容量利用率'并制定'自动扩展策略'。当一个 stamp 接近容量上限时，需要预先创建新的 stamp。文档示例：11 个逻辑分片映射到 3 个物理数据库，虚拟分片提供灵活性。"
        ],
        handsOnPath: [
            "设计 Stamp 架构：参考 Azure 官方架构图，为一个 SaaS 应用设计 stamp 结构。每个 stamp 应包含：应用服务（App Service/AKS）、数据库（Azure SQL/Cosmos DB）、存储（Blob Storage）、缓存（Redis）。定义每个 stamp 的租户容量上限。",
            "使用 Bicep 实现 IaC：编写可复用的 Bicep 模块定义 stamp 资源。使用参数化配置（stampName、location、tenantCapacity）确保一致性。参考官方示例创建 resourceGroups、appService、database 模块。",
            "实现租户路由服务：使用 Azure Cosmos DB 存储'租户 → stamp 映射'。创建 API Management 策略，根据请求中的租户标识（如 JWT claims 或 header）查找对应 stamp 并路由请求。实现缓存减少查找延迟。",
            "配置多 Stamp 部署流水线：使用 GitHub Actions 或 Azure Pipelines 实现 stamp 的自动化部署。创建矩阵策略并行部署多个 stamp，实现分阶段更新（先更新 10% 的 stamp，验证后继续）。",
            "建立监控和告警：为每个 stamp 配置 Azure Monitor 收集指标。创建仪表板展示各 stamp 的容量利用率、请求延迟、错误率。配置告警在 stamp 容量达到阈值时通知运维团队创建新 stamp。"
        ],
        selfCheck: [
            "Deployment Stamps 模式与传统的单实例多租户架构有什么区别？各有什么优缺点？",
            "官方文档列出的六大驱动场景分别是什么？你的应用是否存在这些场景？",
            "Deployment Stamps 和 Geode 模式的三个关键区别是什么？什么场景应该选择哪个模式？",
            "为什么官方文档强调'至少部署 2 个 stamp 验证可重复性'？单个 stamp 有什么问题？",
            "跨 Stamp 查询和租户迁移有什么挑战？如何设计系统减少这些操作的需求？"
        ],
        extensions: [
            "研究 Azure 多租户 SaaS 参考架构：了解微软官方推荐的 Deployment Stamps 实现方式，包括身份管理、计费和租户生命周期管理。",
            "学习 Geode 模式深度实现：了解如何使用 Azure Cosmos DB 多区域写入和 Azure Front Door 实现真正的全球主动-主动架构。",
            "探索 AWS 多区域部署：对比 AWS 的 Multi-Region Deployment 策略，了解 Route 53、Global Accelerator 和 DynamoDB Global Tables 的使用。",
            "研究 Kubernetes 多集群管理：了解如何使用 Azure Arc 或 Google Anthos 管理跨地域的多个 Kubernetes 集群，实现 stamp 级别的容器编排。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/deployment-stamp",
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/geodes",
            "https://docs.aws.amazon.com/whitepapers/latest/aws-multi-region-fundamentals/aws-multi-region-fundamentals.html"
        ]
    },
    "w8-2": {
        lessonId: "w8-2",
        background: [
            "【核心概念】Azure 官方文档：External Configuration Store 模式'将配置信息从应用程序部署包中移出，存储在集中式位置'。实现配置管理与应用代码的分离，支持'配置更改无需重新部署应用'。",
            "【解决的问题】官方文档列出四个核心问题：1) 配置更改需要重新部署应用；2) 多个应用实例配置不一致；3) 本地配置难以跨应用共享；4) 多版本配置管理困难。集中式配置存储统一解决这些问题。",
            "【Azure App Configuration】官方推荐方案提供：Key-Value Pairs（命名空间化的键值对）、版本控制（逐个配置值版本化）、Point-in-Time Snapshots（配置快照和回滚）、客户端库自动处理缓存和变更检测。",
            "【Consul KV 特性】HashiCorp 文档描述：Consul KV 是'built-in distributed key-value store'，每个 agent 自带。最大对象大小 512 KB，使用 URL 安全字符作为键名，正斜杠组织数据类似 S3 bucket。支持 Watch 监控变更和 Session 实现分布式锁。",
            "【Well-Architected 对齐】Azure 文档指出该模式支持：运营卓越——环境特定配置、功能开关、安全部署；可靠性——集中管理减少不一致；性能效率——本地缓存提升访问性能；安全性——统一权限控制和加密。"
        ],
        keyDifficulties: [
            "【性能与可靠性权衡】Azure 文档强调：必须'选择高可用、可备份的后端存储'。实现'本地缓存（Cache-Aside 模式）以降低外部存储依赖'。设置配置过期策略定期刷新，平衡性能和数据新鲜度。",
            "【安全性要求】官方文档警告：'严格分离读写权限'——应用通常只需要读取权限。加密敏感配置数据（如连接字符串、API 密钥）。控制访问范围（组织/应用/机器级别），避免配置泄露。",
            "【变更管理复杂性】Azure 文档指出：'使用与应用代码相同的部署流程管理配置变更'。影响多个应用的配置必须进行全面测试和分阶段部署。配置变更应通知缓存应用程序刷新。",
            "【故障处理策略】官方文档建议：'应用启动时应有本地配置文件作为回退'。实现错误处理和默认值策略。处理配置服务暂时不可用的情况——缓存的配置应继续可用。",
            "【Consul 功能完整声明】HashiCorp 文档明确：'The Consul KV API, CLI, and UI are now considered feature complete. No new feature development is planned.'——Consul KV 功能已冻结，选型时需考虑长期演进。"
        ],
        handsOnPath: [
            "创建 Azure App Configuration 实例：使用 Azure Portal 或 CLI 创建 App Configuration 资源。添加配置键值对，使用命名空间组织（如 app:settings:timeout）。设置标签区分环境（Development、Production）。",
            "集成 Spring Cloud Config：参考官方文档配置 Spring Boot 应用连接 Azure App Configuration。添加 azure-spring-cloud-appconfiguration-config 依赖，配置 bootstrap.yml 指定连接字符串和配置前缀。",
            "实现配置热更新：使用 @RefreshScope 注解标记需要动态刷新的 Bean。配置 sentinel key 触发刷新。测试更改配置后应用自动获取新值，无需重启。",
            "设置 Consul KV 配置中心：使用 Docker 启动 Consul 集群。通过 consul kv put 命令添加配置。使用 consul-template 监控配置变更并触发应用重载。",
            "实现配置版本控制和审计：在 Azure App Configuration 中启用历史记录。创建 Point-in-Time 快照保存配置基线。实现配置变更的审计日志，记录谁在什么时间修改了什么配置。"
        ],
        selfCheck: [
            "External Configuration Store 模式解决的四个核心问题分别是什么？你的应用是否存在这些问题？",
            "Azure App Configuration 和 Consul KV 各有什么特点？什么场景应该选择哪个？",
            "为什么官方文档强调'本地缓存'和'回退配置'的重要性？配置服务不可用时应该如何处理？",
            "配置变更管理应该遵循什么流程？为什么要'使用与应用代码相同的部署流程'？",
            "如何确保配置存储的安全性？应该如何管理敏感配置（如数据库密码、API 密钥）？"
        ],
        extensions: [
            "研究 Spring Cloud Config Server：了解如何使用 Git 仓库作为配置后端，实现配置的版本控制和分支管理。",
            "学习 HashiCorp Vault：了解如何使用 Vault 管理敏感配置（secrets），实现动态凭证和自动轮换。",
            "探索 Kubernetes ConfigMap 和 Secrets：了解云原生应用如何使用 Kubernetes 原生机制管理配置和敏感信息。",
            "研究功能开关（Feature Flags）：了解如何使用 Azure App Configuration 或 LaunchDarkly 实现功能开关，支持渐进式发布。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/external-configuration-store",
            "https://spring.io/projects/spring-cloud-config",
            "https://developer.hashicorp.com/consul/docs/dynamic-app-config/kv"
        ]
    },
    "w8-3": {
        lessonId: "w8-3",
        background: [
            "【核心概念】Azure 官方文档：Strangler Fig 模式是一种'增量式迁移策略，通过逐步替换遗留系统的具体功能模块，最终完全用新系统替代旧系统，同时保持对客户端的透明性'。名称来源于绞杀榕——一种依附在宿主树上逐渐取代它的植物。",
            "【Martin Fowler 定义】Fowler 在 2004 年提出这一概念：绞杀榕模式是'逐步的现代化过程'——如同榕树藤蔓依附在宿主树上，逐渐汲取养分直至成为独立系统。关键是在遗留系统之外构建新功能，逐步将业务逻辑迁移到新代码库。",
            "【四项关键活动】Cartwright、Horn 和 Lewis 归纳：1) 明确期望的业务成果；2) 将问题分解为可管理的部分；3) 逐步交付各部分；4) 建立组织能力以持续推进此过程。",
            "【迁移四阶段】Azure 文档描述完整流程：1) 引入外观层（Facade/代理）；2) 增量迁移——逐步将功能转移到新系统；3) 完全替换——所有请求路由到新系统；4) 清理与优化——移除外观层。",
            "【Well-Architected 对齐】Azure 文档指出该模式支持：可靠性——增量迁移降低风险，支持渐进测试；成本优化——优先实现高 ROI 的替换，最大化现有投资；运营卓越——持续改进，避免大规模系统变动。"
        ],
        keyDifficulties: [
            "【外观层设计挑战】Azure 文档警告：外观层'可能成为性能瓶颈或单点故障'。需要持续更新以跟上迁移进度。初期大部分请求路由到遗留系统，外观层必须高可用且低延迟。",
            "【共享资源访问】官方文档强调：必须'确保新旧系统能同时访问共享的服务和数据存储'。数据库迁移是最复杂的部分——新系统可能需要影子写入（双写）和数据同步。",
            "【过渡架构复杂性】Martin Fowler 指出：'虽然新旧系统并存会增加复杂性，但降低的风险和及时的业务价值回报足以抵消成本'。需要接受过渡期的技术债务，但必须有计划地清理。",
            "【识别系统接缝】Fowler 建议：'在遗留系统中找到可分离的组件边界'。并非所有功能都容易迁移，应从'fairly decoupled from the monolith'的能力开始，积累操作经验。",
            "【组织变革】Martin Fowler 强调：'改进开发实践和组织结构，避免新系统重蹈覆辙'。纯技术迁移不够，必须同时改进团队能力和流程。"
        ],
        handsOnPath: [
            "分析遗留系统接缝：使用代码分析工具（如 SonarQube 或自定义脚本）识别遗留系统中耦合度较低的模块。按照'高业务价值 + 经常变更 + 低耦合度'标准选择首批迁移目标。",
            "实现 Strangler Facade：使用 API Gateway（如 Kong、NGINX）或反向代理作为外观层。配置路由规则：初期所有请求转发到遗留系统，逐步添加规则将特定路径转发到新服务。",
            "执行数据库迁移策略：参考 Azure 文档的三阶段方法：1) 新系统依赖遗留数据库；2) 引入新数据库并实现双写和数据同步；3) 切换为新数据库并停用旧数据库。使用 CDC 工具（如 Debezium）同步数据。",
            "实现流量切换：使用功能开关或百分比路由逐步将流量从遗留系统切换到新系统。监控关键指标（错误率、延迟、业务指标），如有问题快速回滚。",
            "清理遗留代码：在功能完全迁移后，移除遗留系统中对应的代码和配置。更新文档和监控。最终移除外观层中的临时路由规则，让客户端直接访问新系统。"
        ],
        selfCheck: [
            "Strangler Fig 模式的名称来源是什么？这个比喻如何帮助理解渐进式迁移？",
            "Azure 文档描述的四个迁移阶段分别是什么？每个阶段的关键任务是什么？",
            "为什么 Martin Fowler 强调'接受过渡架构的复杂性'？这种复杂性带来什么好处？",
            "数据库迁移为什么是最复杂的部分？Azure 文档建议的三阶段方法是什么？",
            "什么是'系统接缝'？如何识别遗留系统中适合首先迁移的模块？"
        ],
        extensions: [
            "研究 Martin Fowler 的微服务拆分指南：了解'Breaking a Monolith into Microservices'的八大原则，如'Start Small'、'Minimize Backward Dependencies'等。",
            "学习 Branch by Abstraction 技术：了解如何在不创建代码分支的情况下逐步替换系统组件，是 Strangler Fig 的代码级实现。",
            "探索 Dark Launching 和 Canary Release：了解如何在生产环境中安全地测试新功能，支持 Strangler Fig 的流量切换。",
            "研究事件溯源在迁移中的应用：了解如何使用事件日志在新旧系统之间同步状态，支持复杂的数据迁移场景。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig",
            "https://martinfowler.com/bliki/StranglerFigApplication.html",
            "https://martinfowler.com/articles/break-monolith-into-microservices.html"
        ]
    },
    "w8-4": {
        lessonId: "w8-4",
        background: [
            "【核心概念】Azure 官方文档：Anti-Corruption Layer（ACL）是一种设计模式，'用于在具有不同语义的不同子系统之间建立隔离层，通过转换请求和数据模型来维持系统设计的纯净性'。充当外观/适配器角色，将一个系统的请求翻译为另一个系统能理解的形式。",
            "【DDD 起源】Eric Evans 在《Domain-Driven Design》中首次描述此模式：'防止遗留系统的复杂性「污染」现代应用设计'。当与不受控的外部系统集成时，ACL 保护核心领域模型不被外部概念侵蚀。",
            "【适配器模式关系】Refactoring Guru 描述：适配器模式'允许对象与不兼容的接口相互协作'，通过组合或继承实现接口转换。ACL 本质上是一个防护性适配器，特别强调'隔离与保护'而非仅仅'兼容性'。",
            "【微服务中的应用】Azure 微服务文档强调：'When an application depends on an external system, there's a risk that the external system's data schema or API can leak into the application.'——外部系统的设计可能泄漏到应用中。使用 ACL 强制执行边界。",
            "【Well-Architected 对齐】Azure 文档指出该模式支持：运营卓越——保持新组件设计不受遗留实现影响；减少新组件的技术债；支持标准化流程和团队协作。"
        ],
        keyDifficulties: [
            "【性能开销】Azure 文档警告：ACL '可能增加系统间调用的延迟'。每个跨系统调用都需要通过 ACL 进行转换，增加了网络往返和处理时间。需要在保护性和性能之间权衡。",
            "【维护成本】官方文档指出：ACL '需要额外的服务管理和维护'。随着两端系统的演进，ACL 中的转换逻辑也需要同步更新。是一个持续的维护负担。",
            "【何时使用判断】Azure 文档明确：ACL 适用于'分阶段迁移'、'语义差异显著'、'与不受控的外部系统集成'。但如果'新旧系统之间没有显著的语义差异'，则不需要 ACL——过度工程。",
            "【数据一致性】官方文档强调：需要'确保事务和数据一致性可被监控'。ACL 中的转换可能引入数据不一致风险，特别是在双向同步场景。",
            "【临时性考量】Azure 文档提问：'在迁移完成后是否需要保留或移除 ACL？'如果是临时隔离（如 Strangler Fig 迁移），应计划清理；如果是永久集成，ACL 成为架构的一部分。"
        ],
        handsOnPath: [
            "识别 ACL 需求：分析系统集成点，识别需要 ACL 的场景。关注点：外部系统的数据模型与内部领域模型差异、外部 API 的不稳定性、技术栈差异（如 SOAP vs REST）。",
            "设计 ACL 接口：定义清晰的内部接口（使用领域语言），ACL 负责将外部概念翻译为内部概念。例如：外部系统的'Customer'可能映射为内部的'Account'+'Profile'两个概念。",
            "实现适配器模式：创建 Adapter 类实现内部接口，包装外部系统客户端。实现数据转换逻辑，处理格式差异（日期格式、枚举值、嵌套结构）。使用工厂模式创建适配器实例。",
            "添加错误处理和监控：ACL 应捕获外部系统的异常并转换为内部异常类型。添加日志记录跟踪转换过程。配置监控告警检测外部系统变更导致的转换失败。",
            "结合 Strangler Fig 使用：在遗留系统迁移中，新服务通过 ACL 调用遗留系统 API。随着迁移进展，逐步将 ACL 中的调用从遗留系统切换到新服务，最终移除 ACL。"
        ],
        selfCheck: [
            "Anti-Corruption Layer 模式的核心目的是什么？为什么称之为'防腐'层？",
            "ACL 与普通适配器模式有什么区别？ACL 额外强调什么？",
            "根据官方文档，什么场景适合使用 ACL？什么场景不需要 ACL？",
            "ACL 的主要性能和维护开销是什么？如何决定是否值得引入这个开销？",
            "ACL 与 Strangler Fig 模式如何配合使用？在迁移完成后 ACL 应该如何处理？"
        ],
        extensions: [
            "深入学习 DDD 中的 Bounded Context：了解如何识别和定义有界上下文，理解 ACL 在上下文映射（Context Mapping）中的位置。",
            "研究 API 版本管理：了解如何使用 ACL 处理 API 版本差异，支持多版本 API 的平滑演进。",
            "探索 Event-Driven ACL：了解如何在事件驱动架构中实现 ACL，通过事件转换而非 API 调用隔离系统。",
            "学习 GraphQL Federation：了解如何使用 GraphQL 作为 ACL，统一多个后端服务的数据模型和 API。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer",
            "https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis",
            "https://refactoring.guru/design-patterns/adapter"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "w8-1": [
        {
            id: "w8-1-q1",
            question: "Azure 官方文档对 Deployment Stamps 模式的核心定义是什么？",
            options: [
                "将应用部署到单个大型服务器",
                "通过配置、管理和监控多个独立、相同的资源组合来托管多个工作负载或租户",
                "使用容器化技术部署应用",
                "将数据复制到多个区域"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：Deployment Stamps 是一种'通过配置、管理和监控多个独立、相同的资源组合来托管和运营多个工作负载或租户'的模式。"
        },
        {
            id: "w8-1-q2",
            question: "Deployment Stamps 模式如何实现数据分片？",
            options: [
                "需要复杂的分片逻辑",
                "隐式分片——每个 stamp 包含特定租户的数据",
                "使用一致性哈希算法",
                "不支持数据分片"
            ],
            answer: 1,
            rationale: "官方文档指出：Deployment Stamps 模式'隐式地对数据进行分片'——每个 stamp 包含特定租户的数据，实现数据隔离而无需复杂的分片逻辑。"
        },
        {
            id: "w8-1-q3",
            question: "Azure 文档中，Deployment Stamps 和 Geode 模式的关键区别是什么？",
            options: [
                "Deployment Stamps 更便宜",
                "Geode 不支持多租户",
                "Deployment Stamps 可单个存在且需要感知数据位置的路由，Geode 必须多个且数据全球复制",
                "两者完全相同"
            ],
            answer: 2,
            rationale: "Azure 文档明确区分：Deployment Stamps 可以'单个 stamp 独立存在'，需要'感知数据位置的路由器'；而 Geode 模式'必须至少有两个 geode'，数据在全球复制，任何客户端可连接任意 geode。"
        },
        {
            id: "w8-1-q4",
            question: "根据官方文档，Deployment Stamps 模式不适用于哪种场景？",
            options: [
                "需要租户隔离的场景",
                "需要地理分布的场景",
                "简单应用，可通过垂直/水平扩展单实例",
                "需要多版本并行运行的场景"
            ],
            answer: 2,
            rationale: "Azure 文档明确列出不适用场景：'简单应用，扩展需求不高'、'可通过垂直/水平扩展单实例（加大 VM、增加数据库容量）'。"
        },
        {
            id: "w8-1-q5",
            question: "Azure 文档描述的两种流量路由方式是什么？",
            options: [
                "同步路由和异步路由",
                "DNS 直接路由和中央路由服务",
                "轮询路由和加权路由",
                "静态路由和动态路由"
            ],
            answer: 1,
            rationale: "官方文档描述两种路由方式：1) DNS 直接路由（如 unit1.aus.myapi.contoso.com）；2) 中央路由服务（使用 API Management）——根据租户查找对应 stamp。"
        },
        {
            id: "w8-1-q6",
            question: "为什么官方文档建议'至少部署 2 个 stamp'？",
            options: [
                "节省成本",
                "验证部署流程的可重复性",
                "提高性能",
                "满足法规要求"
            ],
            answer: 1,
            rationale: "Azure 文档强调必须建立'完全自动化的部署流程'，并建议'部署至少 2 个 stamp 以验证可重复性'——确保 IaC 脚本能正确重复创建一致的 stamp。"
        },
        {
            id: "w8-1-q7",
            question: "Deployment Stamps 模式面临的跨 Stamp 操作挑战是什么？",
            options: [
                "跨 stamp 查询需要中央数据仓库或聚合层，租户迁移需要自定义逻辑",
                "跨 stamp 操作完全自动化",
                "不支持任何跨 stamp 操作",
                "跨 stamp 操作比单 stamp 更快"
            ],
            answer: 0,
            rationale: "Azure 文档警告：'跨 stamp 查询和报表需要建立中央数据仓库或查询聚合层'。租户迁移也需要'自定义迁移逻辑和跨 stamp 通信'。"
        },
        {
            id: "w8-1-q8",
            question: "根据官方文档，使用中央路由服务的主要挑战是什么？",
            options: [
                "成本过高",
                "路由服务本身需要高可用（多地域部署）",
                "不支持租户路由",
                "延迟过高"
            ],
            answer: 1,
            rationale: "Azure 文档指出使用中央路由服务时，'路由服务本身需要高可用（多地域部署）'——如果路由服务不可用，所有租户都无法访问。"
        },
        {
            id: "w8-1-q9",
            question: "Azure 文档列出的六大驱动场景不包括以下哪一项？",
            options: [
                "组件扩展限制（连接数、TCP 套接字）",
                "实时数据分析需求",
                "租户隔离需求",
                "地理/政治数据驻留要求"
            ],
            answer: 1,
            rationale: "官方文档列出六大驱动场景：扩展限制、非线性成本、租户隔离、混合租约模式、地理/政治要求、更新频率差异。实时数据分析不在列表中。"
        },
        {
            id: "w8-1-q10",
            question: "Deployment Stamps 模式在 Well-Architected Framework 中支持哪些支柱？",
            options: [
                "仅性能效率",
                "运营卓越、性能效率、可靠性、安全性",
                "仅安全性和可靠性",
                "仅成本优化"
            ],
            answer: 1,
            rationale: "Azure 文档指出该模式支持：运营卓越（IaC、不可变基础设施）；性能效率（定义扩展单位）；可靠性（故障隔离）；安全性（租户隔离、减少故障影响面）。"
        },
        {
            id: "w8-1-q11",
            question: "官方文档示例中，11 个逻辑分片映射到几个物理数据库？",
            options: [
                "11 个",
                "3 个",
                "1 个",
                "5 个"
            ],
            answer: 1,
            rationale: "Azure 文档示例：'11 个逻辑分片映射到 3 个物理数据库'——虚拟分片提供灵活性，允许在不更改应用代码的情况下调整物理分布。"
        },
        {
            id: "w8-1-q12",
            question: "根据官方文档，Deployment Stamps 模式的成本特点是什么？",
            options: [
                "比单实例更便宜",
                "成本与单实例相同",
                "成本比单实例更高，需要成本-收益分析",
                "免费使用"
            ],
            answer: 2,
            rationale: "Azure 文档指出：Deployment Stamps '成本比单实例更高'，需要进行'成本-收益分析'。每个 stamp 包含完整基础设施，资源利用率可能不如共享多租户高。"
        }
    ],
    "w8-2": [
        {
            id: "w8-2-q1",
            question: "Azure 官方文档对 External Configuration Store 模式的核心定义是什么？",
            options: [
                "将配置嵌入到应用程序代码中",
                "将配置信息从应用程序部署包中移出，存储在集中式位置",
                "使用环境变量存储配置",
                "将配置硬编码到数据库中"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：External Configuration Store 模式'将配置信息从应用程序部署包中移出，存储在集中式位置'，实现配置管理与应用代码的分离。"
        },
        {
            id: "w8-2-q2",
            question: "根据官方文档，External Configuration Store 模式解决的四个核心问题是什么？",
            options: [
                "性能、安全、可用性、成本",
                "配置更改需重新部署、多实例配置不一致、本地配置难共享、多版本配置管理困难",
                "数据存储、网络传输、用户认证、日志记录",
                "代码编译、测试执行、部署发布、监控告警"
            ],
            answer: 1,
            rationale: "官方文档列出四个核心问题：1) 配置更改需要重新部署应用；2) 多个应用实例配置不一致；3) 本地配置难以跨应用共享；4) 多版本配置管理困难。"
        },
        {
            id: "w8-2-q3",
            question: "Azure App Configuration 提供的 Point-in-Time Snapshots 功能用于什么？",
            options: [
                "备份数据库",
                "配置快照和回滚",
                "监控应用性能",
                "加密配置数据"
            ],
            answer: 1,
            rationale: "Azure 官方文档描述 App Configuration 提供：'Point-in-Time Snapshots（配置快照和回滚）'——允许保存配置基线并在需要时回滚到之前的状态。"
        },
        {
            id: "w8-2-q4",
            question: "Consul KV Store 的最大对象大小限制是多少？",
            options: [
                "1 KB",
                "512 KB",
                "1 MB",
                "无限制"
            ],
            answer: 1,
            rationale: "HashiCorp 文档指出：Consul KV 的'Maximum object size: 512 KB'——存储的每个值不能超过 512 KB。"
        },
        {
            id: "w8-2-q5",
            question: "根据 HashiCorp 文档，Consul KV 的功能状态是什么？",
            options: [
                "持续开发新功能",
                "功能已冻结，不再计划新功能开发",
                "即将废弃",
                "处于 Beta 阶段"
            ],
            answer: 1,
            rationale: "HashiCorp 文档明确：'The Consul KV API, CLI, and UI are now considered feature complete. No new feature development is planned.'——功能已冻结。"
        },
        {
            id: "w8-2-q6",
            question: "Azure 文档建议如何处理配置服务不可用的情况？",
            options: [
                "应用直接崩溃",
                "应用启动时应有本地配置文件作为回退",
                "等待配置服务恢复",
                "使用硬编码的默认值"
            ],
            answer: 1,
            rationale: "Azure 官方文档建议：'应用启动时应有本地配置文件作为回退'。实现错误处理和默认值策略，处理配置服务暂时不可用的情况。"
        },
        {
            id: "w8-2-q7",
            question: "根据官方文档，配置存储的安全性应该如何保证？",
            options: [
                "不需要特别的安全措施",
                "严格分离读写权限，加密敏感配置数据",
                "只使用内网访问",
                "定期更换所有配置值"
            ],
            answer: 1,
            rationale: "Azure 文档强调：'严格分离读写权限'——应用通常只需要读取权限。加密敏感配置数据（如连接字符串、API 密钥）。控制访问范围。"
        },
        {
            id: "w8-2-q8",
            question: "Azure 文档建议配置变更应该如何管理？",
            options: [
                "随时直接修改",
                "使用与应用代码相同的部署流程管理",
                "仅由 DBA 管理",
                "每次部署时手动更新"
            ],
            answer: 1,
            rationale: "Azure 文档指出：'使用与应用代码相同的部署流程管理配置变更'。影响多个应用的配置必须进行全面测试和分阶段部署。"
        },
        {
            id: "w8-2-q9",
            question: "为什么官方文档建议实现本地缓存？",
            options: [
                "减少存储成本",
                "降低外部存储依赖，提升访问性能",
                "增加安全性",
                "简化代码"
            ],
            answer: 1,
            rationale: "Azure 文档强调：实现'本地缓存（Cache-Aside 模式）以降低外部存储依赖'。设置配置过期策略定期刷新，平衡性能和数据新鲜度。"
        },
        {
            id: "w8-2-q10",
            question: "Consul KV 使用什么字符组织数据层次结构？",
            options: [
                "反斜杠 (\\)",
                "正斜杠 (/)，类似 S3 bucket",
                "点号 (.)",
                "冒号 (:)"
            ],
            answer: 1,
            rationale: "HashiCorp 文档描述：使用'URL-safe characters like [a-zA-Z0-9-._~]'作为键名，'Forward slashes organize data similar to Amazon S3 buckets'。"
        },
        {
            id: "w8-2-q11",
            question: "Azure 文档中，External Configuration Store 模式支持 Well-Architected Framework 的哪些支柱？",
            options: [
                "仅运营卓越",
                "运营卓越、可靠性、性能效率、安全性",
                "仅安全性",
                "仅成本优化"
            ],
            answer: 1,
            rationale: "Azure 文档指出该模式支持：运营卓越（环境配置、功能开关）；可靠性（集中管理减少不一致）；性能效率（本地缓存）；安全性（统一权限控制和加密）。"
        },
        {
            id: "w8-2-q12",
            question: "Consul KV 支持哪些扩展功能用于配置管理？",
            options: [
                "仅 CLI 访问",
                "Watch 监控变更和 Session 实现分布式锁",
                "仅 UI 访问",
                "仅 HTTP API"
            ],
            answer: 1,
            rationale: "HashiCorp 文档描述 Consul KV 集成：'Consul Template: Triggers scripted actions when values change'、'Watches: Monitor data updates'、'Sessions: Enable distributed locks and leader elections'。"
        }
    ],
    "w8-3": [
        {
            id: "w8-3-q1",
            question: "Strangler Fig 模式的名称来源是什么？",
            options: [
                "一种软件工程书籍",
                "绞杀榕——一种依附在宿主树上逐渐取代它的植物",
                "一位计算机科学家的名字",
                "一种重构技术的缩写"
            ],
            answer: 1,
            rationale: "Martin Fowler 解释：绞杀榕模式的名称来源于绞杀榕——'一种依附在宿主树上，逐渐汲取养分直至成为独立系统'的植物。"
        },
        {
            id: "w8-3-q2",
            question: "Azure 官方文档描述的 Strangler Fig 四个迁移阶段是什么？",
            options: [
                "分析、设计、开发、测试",
                "引入外观层、增量迁移、完全替换、清理与优化",
                "规划、执行、监控、优化",
                "评估、实施、验证、部署"
            ],
            answer: 1,
            rationale: "Azure 文档描述四阶段：1) 引入外观层（Facade/代理）；2) 增量迁移——逐步将功能转移到新系统；3) 完全替换；4) 清理与优化——移除外观层。"
        },
        {
            id: "w8-3-q3",
            question: "Martin Fowler 归纳的增量式现代化四项关键活动是什么？",
            options: [
                "分析需求、编写代码、测试功能、部署上线",
                "明确业务成果、分解问题、逐步交付、建立组织能力",
                "收集数据、设计方案、实施变更、评估效果",
                "识别风险、制定计划、执行迁移、验证结果"
            ],
            answer: 1,
            rationale: "Cartwright、Horn 和 Lewis 归纳四项活动：1) 明确期望的业务成果；2) 将问题分解为可管理的部分；3) 逐步交付各部分；4) 建立组织能力以持续推进。"
        },
        {
            id: "w8-3-q4",
            question: "根据 Azure 文档，Strangler Fig 模式的外观层可能面临什么挑战？",
            options: [
                "成本过高",
                "可能成为性能瓶颈或单点故障",
                "无法处理请求",
                "不支持路由"
            ],
            answer: 1,
            rationale: "Azure 文档警告：外观层'可能成为性能瓶颈或单点故障'。需要持续更新以跟上迁移进度，必须高可用且低延迟。"
        },
        {
            id: "w8-3-q5",
            question: "Martin Fowler 关于过渡架构复杂性的观点是什么？",
            options: [
                "应该完全避免过渡架构",
                "虽然增加复杂性，但降低的风险和业务价值回报足以抵消成本",
                "过渡架构是不可接受的",
                "过渡架构比最终架构更好"
            ],
            answer: 1,
            rationale: "Martin Fowler 指出：'虽然新旧系统并存会增加复杂性，但降低的风险和及时的业务价值回报足以抵消成本'。需要接受过渡期的技术债务。"
        },
        {
            id: "w8-3-q6",
            question: "Azure 文档建议数据库迁移的三阶段方法是什么？",
            options: [
                "备份、恢复、验证",
                "新系统依赖遗留数据库 → 引入新数据库并双写 → 切换为新数据库",
                "导出、导入、同步",
                "复制、切换、删除"
            ],
            answer: 1,
            rationale: "Azure 文档描述三阶段：1) 新系统依赖遗留数据库读写；2) 引入新数据库，ETL 同步数据，影子写入；3) 切换为新数据库，停用旧数据库。"
        },
        {
            id: "w8-3-q7",
            question: "根据官方文档，Strangler Fig 模式不适用于哪种场景？",
            options: [
                "大型系统渐进式现代化",
                "关键组件替换风险较高",
                "无法拦截后端请求",
                "遗留系统需长期并存运行"
            ],
            answer: 2,
            rationale: "Azure 文档明确列出不适用场景：'无法拦截后端请求'——如果不能在请求层面进行路由控制，就无法实现渐进式切换。"
        },
        {
            id: "w8-3-q8",
            question: "Martin Fowler 建议首先迁移什么类型的功能？",
            options: [
                "最复杂的核心功能",
                "与单体耦合度较低的功能（fairly decoupled from the monolith）",
                "所有功能同时迁移",
                "最老的代码"
            ],
            answer: 1,
            rationale: "Fowler 建议：从'fairly decoupled from the monolith'的能力开始——耦合度较低的功能更容易迁移，可以积累操作经验后再处理复杂功能。"
        },
        {
            id: "w8-3-q9",
            question: "Strangler Fig 模式在 Well-Architected Framework 中支持哪些支柱？",
            options: [
                "仅性能效率",
                "可靠性、成本优化、运营卓越",
                "仅安全性",
                "仅可靠性"
            ],
            answer: 1,
            rationale: "Azure 文档指出该模式支持：可靠性——增量迁移降低风险；成本优化——优先实现高 ROI 的替换；运营卓越——持续改进，避免大规模变动。"
        },
        {
            id: "w8-3-q10",
            question: "根据微服务拆分指南，为什么应该'最小化向单体的反向依赖'？",
            options: [
                "减少代码量",
                "避免服务与单体的发布周期耦合",
                "提高性能",
                "简化测试"
            ],
            answer: 1,
            rationale: "微服务拆分指南指出：'Having dependencies to the monolith—data, logic, APIs—couples the service to the monolith's release cycle'——反向依赖会导致发布周期耦合。"
        },
        {
            id: "w8-3-q11",
            question: "Martin Fowler 为什么强调组织变革的重要性？",
            options: [
                "降低成本",
                "改进开发实践和组织结构，避免新系统重蹈覆辙",
                "提高开发速度",
                "满足合规要求"
            ],
            answer: 1,
            rationale: "Martin Fowler 强调：'改进开发实践和组织结构，避免新系统重蹈覆辙'——纯技术迁移不够，必须同时改进团队能力和流程。"
        },
        {
            id: "w8-3-q12",
            question: "迁移完成后，外观层应该如何处理？",
            options: [
                "永久保留",
                "可选：移除外观层，让客户端直接与新系统通信",
                "转换为缓存层",
                "用于日志记录"
            ],
            answer: 1,
            rationale: "Azure 文档描述第四阶段'清理与优化'：'移除外观层'——迁移完成后可以让客户端直接与新系统通信。或保留作为适配器支持遗留客户端。"
        }
    ],
    "w8-4": [
        {
            id: "w8-4-q1",
            question: "Azure 官方文档对 Anti-Corruption Layer 模式的核心定义是什么？",
            options: [
                "防止 SQL 注入攻击",
                "在具有不同语义的子系统之间建立隔离层，通过转换请求和数据模型维持设计纯净性",
                "加密数据传输",
                "防止 DDoS 攻击"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：ACL 是'用于在具有不同语义的不同子系统之间建立隔离层，通过转换请求和数据模型来维持系统设计的纯净性'。"
        },
        {
            id: "w8-4-q2",
            question: "Anti-Corruption Layer 模式最初是在哪本书中描述的？",
            options: [
                "《Design Patterns》",
                "《Domain-Driven Design》by Eric Evans",
                "《Clean Code》",
                "《Refactoring》"
            ],
            answer: 1,
            rationale: "Azure 文档指出：此模式'首次由 Eric Evans 在《Domain-Driven Design》一书中描述'，已成为微服务和系统迁移的标准实践。"
        },
        {
            id: "w8-4-q3",
            question: "根据 Azure 文档，ACL 适用于哪些场景？",
            options: [
                "所有系统集成场景",
                "分阶段迁移、语义差异显著、与不受控的外部系统集成",
                "仅用于数据库访问",
                "仅用于 API 版本管理"
            ],
            answer: 1,
            rationale: "Azure 文档明确：ACL 适用于'分阶段迁移'、'两个或多个子系统具有不同的语义但需要通信'、'与开发团队不控制的外部系统集成'。"
        },
        {
            id: "w8-4-q4",
            question: "根据官方文档，ACL 不适用于什么场景？",
            options: [
                "与遗留系统集成",
                "新旧系统之间没有显著的语义差异",
                "跨团队协作",
                "API 版本管理"
            ],
            answer: 1,
            rationale: "Azure 文档明确：如果'新旧系统之间没有显著的语义差异'，则不需要 ACL——这是过度工程。"
        },
        {
            id: "w8-4-q5",
            question: "ACL 与普通适配器模式的主要区别是什么？",
            options: [
                "ACL 更简单",
                "ACL 特别强调隔离与保护，而非仅仅兼容性",
                "ACL 不进行数据转换",
                "适配器模式已过时"
            ],
            answer: 1,
            rationale: "文档描述：适配器模式'允许对象与不兼容的接口相互协作'。ACL 本质上是一个防护性适配器，特别强调'隔离与保护'而非仅仅'兼容性'。"
        },
        {
            id: "w8-4-q6",
            question: "Azure 文档警告 ACL 可能带来什么性能影响？",
            options: [
                "没有性能影响",
                "可能增加系统间调用的延迟",
                "会提高性能",
                "只影响写入操作"
            ],
            answer: 1,
            rationale: "Azure 文档警告：ACL '可能增加系统间调用的延迟'——每个跨系统调用都需要通过 ACL 进行转换，增加了网络往返和处理时间。"
        },
        {
            id: "w8-4-q7",
            question: "根据 Azure 微服务文档，外部系统的什么可能'泄漏'到应用中？",
            options: [
                "安全漏洞",
                "数据 schema 或 API",
                "性能问题",
                "配置错误"
            ],
            answer: 1,
            rationale: "Azure 微服务文档强调：'When an application depends on an external system, there's a risk that the external system's data schema or API can leak into the application.'——外部系统的设计可能污染内部模型。"
        },
        {
            id: "w8-4-q8",
            question: "ACL 可以以什么形式部署？",
            options: [
                "仅作为独立服务",
                "作为应用程序内的组件或独立服务",
                "仅作为数据库存储过程",
                "仅作为消息队列"
            ],
            answer: 1,
            rationale: "Azure 文档描述部署选项：可以'作为应用程序内的组件实现'或'作为独立服务实现'——根据需求和架构选择合适的部署方式。"
        },
        {
            id: "w8-4-q9",
            question: "根据官方文档，ACL 在 Strangler Fig 迁移中扮演什么角色？",
            options: [
                "不相关",
                "新服务通过 ACL 调用遗留系统，随迁移进展逐步切换",
                "替代外观层",
                "仅用于数据迁移"
            ],
            answer: 1,
            rationale: "Azure 文档列出相关模式：ACL 与 Strangler Fig 配合使用——新服务通过 ACL 调用遗留系统 API，随着迁移进展逐步切换到新服务，最终移除 ACL。"
        },
        {
            id: "w8-4-q10",
            question: "ACL 在 Well-Architected Framework 中支持哪个支柱？",
            options: [
                "成本优化",
                "运营卓越——保持新组件设计不受遗留实现影响",
                "性能效率",
                "安全性"
            ],
            answer: 1,
            rationale: "Azure 文档指出 ACL 支持运营卓越：'保持新组件设计不受遗留实现的影响'、'减少新组件的技术债'、'支持标准化流程和团队协作'。"
        },
        {
            id: "w8-4-q11",
            question: "根据官方文档，迁移完成后 ACL 应该如何处理？",
            options: [
                "必须保留",
                "需要考虑是否保留或移除——取决于是临时隔离还是永久集成",
                "必须移除",
                "转换为缓存"
            ],
            answer: 1,
            rationale: "Azure 文档提问：'在迁移完成后是否需要保留或移除 ACL？'如果是临时隔离（如 Strangler Fig 迁移），应计划清理；如果是永久集成，ACL 成为架构的一部分。"
        },
        {
            id: "w8-4-q12",
            question: "适配器模式的两种实现方式是什么？",
            options: [
                "同步和异步",
                "对象适配器（组合）和类适配器（继承）",
                "读适配器和写适配器",
                "内部和外部"
            ],
            answer: 1,
            rationale: "Refactoring Guru 描述两种实现：'对象适配器'通过组合实现，适配器包装服务对象；'类适配器'通过继承实现，仅适用于支持多继承的语言。"
        }
    ]
}
