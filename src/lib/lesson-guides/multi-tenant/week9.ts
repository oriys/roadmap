import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "w9-1": {
        lessonId: "w9-1",
        background: [
            "【单体多租户】在单体应用中通过租户上下文实现隔离，所有租户共享同一应用实例。",
            "【租户上下文】请求级别的租户信息，贯穿整个请求处理流程。",
            "【数据过滤】在数据访问层自动添加租户过滤条件。",
            "【Spring 多租户】Spring Data JPA 支持 Hibernate 多租户特性。",
        ],
        keyDifficulties: [
            "【上下文传播】确保租户上下文在整个请求链路中正确传递。",
            "【异步处理】异步任务和线程池中的上下文传播。",
            "【代码侵入】多租户逻辑可能侵入业务代码。",
            "【测试复杂】需要测试多租户场景的正确性。",
        ],
        handsOnPath: [
            "实现 TenantContextHolder 管理租户上下文",
            "配置 Spring Filter 注入租户上下文",
            "集成 Hibernate 多租户支持",
            "实现租户感知的 Repository",
        ],
        selfCheck: [
            "单体应用如何实现多租户隔离？",
            "Hibernate 支持哪些多租户策略？",
            "如何确保租户上下文在异步处理中正确传递？",
        ],
        extensions: [
            "研究 Django Tenants 多租户实现",
            "了解 Rails Apartment gem 的多租户支持",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/considerations",
            "https://spring.io/blog/2022/07/31/how-to-integrate-hibernates-multitenant-feature-with-spring-data-jpa-in-a-spring-boot-application",
            "https://django-tenants.readthedocs.io/en/latest/",
        ],
    },
    "w9-2": {
        lessonId: "w9-2",
        background: [
            "【微服务多租户】租户上下文需要跨服务传播，每个服务独立处理多租户。",
            "【Service Mesh】Istio 等服务网格可以帮助管理跨服务的租户上下文传播。",
            "【租户路由】基于租户的服务路由和负载均衡。",
            "【EKS 多租户】Amazon EKS 支持多种多租户部署模式。",
        ],
        keyDifficulties: [
            "【上下文传播】确保租户上下文在服务调用链中不丢失。",
            "【服务隔离】决定服务级别的隔离策略。",
            "【版本管理】不同租户可能需要不同版本的服务。",
            "【监控区分】按租户区分服务监控和日志。",
        ],
        handsOnPath: [
            "配置 Feign 拦截器传播租户 Header",
            "设置 Istio Header 传播规则",
            "实现租户级别的服务路由",
            "配置按租户的服务监控",
        ],
        selfCheck: [
            "微服务架构中如何传播租户上下文？",
            "Istio 如何帮助多租户实现？",
            "服务级别的多租户隔离有哪些选择？",
        ],
        extensions: [
            "研究 Linkerd 的多租户支持",
            "了解 Consul 服务网格的租户路由",
        ],
        sourceUrls: [
            "https://aws.amazon.com/blogs/apn/building-a-multi-tenant-saas-solution-using-amazon-eks/",
            "https://istio.io/latest/docs/ops/deployment/deployment-models/#multiple-clusters",
            "https://www.w3.org/TR/trace-context/",
        ],
    },
    "w9-3": {
        lessonId: "w9-3",
        background: [
            "【Serverless 多租户】函数即服务（FaaS）的多租户实现，每次调用独立。",
            "【Lambda 隔离】AWS Lambda 函数天然具有调用级别的隔离。",
            "【冷启动】函数首次调用的启动延迟，影响租户体验。",
            "【资源限制】为不同租户设置不同的并发和执行时间限制。",
        ],
        keyDifficulties: [
            "【状态管理】Serverless 无状态，租户状态需要外部存储。",
            "【冷启动优化】减少冷启动对租户体验的影响。",
            "【成本追踪】按租户追踪函数调用成本。",
            "【限流】实现租户级别的函数并发限制。",
        ],
        handsOnPath: [
            "设计 Lambda 多租户架构",
            "实现租户级别的并发控制",
            "配置冷启动优化策略",
            "设置租户函数成本追踪",
        ],
        selfCheck: [
            "Serverless 架构如何实现多租户？",
            "冷启动问题如何缓解？",
            "如何实现租户级别的资源限制？",
        ],
        extensions: [
            "研究 AWS Step Functions 的多租户工作流",
            "了解 Cloudflare Workers 的多租户模式",
        ],
        sourceUrls: [
            "https://aws.amazon.com/blogs/apn/building-a-multi-tenant-saas-solution-using-aws-serverless-services/",
            "https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/multi-tenancy.html",
            "https://aws.amazon.com/blogs/compute/operating-lambda-performance-optimization-part-1/",
        ],
    },
    "w9-4": {
        lessonId: "w9-4",
        background: [
            "【架构演进】从单租户到多租户，或从单体到微服务的演进路径。",
            "【Strangler Pattern】逐步替换遗留系统的模式，适用于多租户迁移。",
            "【双运行】新旧系统并行运行，逐步迁移租户。",
            "【特性标记】使用特性开关控制租户使用新旧功能。",
        ],
        keyDifficulties: [
            "【数据迁移】租户数据从旧系统迁移到新系统。",
            "【兼容性】新系统需要兼容旧的 API 和数据格式。",
            "【回滚计划】迁移失败时的回滚策略。",
            "【租户沟通】与租户沟通迁移计划和影响。",
        ],
        handsOnPath: [
            "设计多租户迁移路线图",
            "实现 Strangler 模式的路由层",
            "配置租户级别的特性开关",
            "创建迁移验证检查清单",
        ],
        selfCheck: [
            "Strangler Pattern 如何应用于多租户迁移？",
            "架构演进过程中如何保证服务连续性？",
            "租户迁移的关键步骤是什么？",
        ],
        extensions: [
            "研究 Shopify 的多租户架构演进",
            "了解 Slack 的企业级多租户实现",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/considerations",
            "https://martinfowler.com/bliki/StranglerFigApplication.html",
            "https://aws.amazon.com/blogs/apn/saas-migration-strategies/",
        ],
    },
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "w9-1": [
        { id: "w9-1-q1", question: "单体多租户应用如何实现隔离？", options: ["独立部署", "通过租户上下文和数据过滤", "独立数据库", "物理隔离"], answer: 1, rationale: "单体应用通过请求级租户上下文实现逻辑隔离。" },
        { id: "w9-1-q2", question: "Hibernate 支持哪些多租户策略？", options: ["只有 Schema", "DATABASE、SCHEMA、DISCRIMINATOR", "只有表", "不支持"], answer: 1, rationale: "Hibernate 原生支持三种多租户策略。" },
        { id: "w9-1-q3", question: "租户上下文通常存储在哪里？", options: ["数据库", "ThreadLocal 或类似的请求级存储", "文件", "缓存"], answer: 1, rationale: "ThreadLocal 适合存储请求级别的租户信息。" },
        { id: "w9-1-q4", question: "Spring Filter 在多租户中的作用是什么？", options: ["数据过滤", "在请求入口解析和设置租户上下文", "日志过滤", "安全过滤"], answer: 1, rationale: "Filter 可以从请求中提取租户信息并设置上下文。" },
        { id: "w9-1-q5", question: "异步任务中如何传递租户上下文？", options: ["自动传递", "需要手动传递或使用 TaskDecorator", "不需要传递", "通过数据库"], answer: 1, rationale: "异步线程需要专门的机制传递上下文。" },
        { id: "w9-1-q6", question: "Django Tenants 使用什么隔离策略？", options: ["共享表", "PostgreSQL Schema 隔离", "独立数据库", "文件隔离"], answer: 1, rationale: "Django Tenants 主要使用 Schema 隔离。" },
        { id: "w9-1-q7", question: "多租户代码侵入如何减少？", options: ["不处理", "通过 AOP 或框架抽象隔离多租户逻辑", "直接写入业务代码", "忽略多租户"], answer: 1, rationale: "AOP 可以将多租户逻辑与业务代码分离。" },
        { id: "w9-1-q8", question: "DISCRIMINATOR 策略是什么？", options: ["独立数据库", "共享表通过字段区分租户", "独立 Schema", "独立文件"], answer: 1, rationale: "使用鉴别字段（如 tenant_id）区分租户数据。" },
        { id: "w9-1-q9", question: "多租户测试应该覆盖什么？", options: ["只测功能", "租户隔离、上下文传播、数据过滤", "只测性能", "只测安全"], answer: 1, rationale: "需要专门测试多租户相关的场景。" },
        { id: "w9-1-q10", question: "CurrentTenantIdentifierResolver 的作用是什么？", options: ["创建租户", "告诉 Hibernate 当前租户标识", "删除租户", "更新租户"], answer: 1, rationale: "Hibernate 用它获取当前的租户标识。" },
        { id: "w9-1-q11", question: "Rails Apartment gem 支持什么？", options: ["只有 MySQL", "多数据库和 Schema 多租户", "只有文件", "不支持多租户"], answer: 1, rationale: "Apartment 支持多种 Rails 多租户策略。" },
        { id: "w9-1-q12", question: "租户上下文生命周期应该如何？", options: ["永久保持", "请求开始设置，请求结束清理", "随机", "手动管理"], answer: 1, rationale: "上下文应与请求生命周期一致。" },
    ],
    "w9-2": [
        { id: "w9-2-q1", question: "微服务多租户的核心挑战是什么？", options: ["太简单", "租户上下文跨服务传播", "性能太好", "安全太强"], answer: 1, rationale: "确保租户上下文在服务调用链中不丢失是关键。" },
        { id: "w9-2-q2", question: "Istio 如何帮助多租户实现？", options: ["数据存储", "Header 传播和流量管理", "代码生成", "数据库管理"], answer: 1, rationale: "Istio 可以配置自动传播租户 Header。" },
        { id: "w9-2-q3", question: "Feign 拦截器在多租户中的作用是什么？", options: ["负载均衡", "在服务调用时添加租户 Header", "数据序列化", "错误处理"], answer: 1, rationale: "拦截器可以自动添加租户标识到请求 Header。" },
        { id: "w9-2-q4", question: "Amazon EKS 支持的多租户模式有哪些？", options: ["只有一种", "Namespace 隔离、集群隔离等多种", "不支持", "只有物理隔离"], answer: 1, rationale: "EKS 支持从软隔离到硬隔离的多种模式。" },
        { id: "w9-2-q5", question: "服务级别隔离有哪些选择？", options: ["只有共享", "共享服务、租户专属服务、混合", "只有独立", "无选择"], answer: 1, rationale: "可以根据需要选择不同级别的服务隔离。" },
        { id: "w9-2-q6", question: "W3C Trace Context 在多租户中的应用是什么？", options: ["数据存储", "标准化的跨服务上下文传播", "代码规范", "API 设计"], answer: 1, rationale: "Trace Context 提供跨服务上下文传播的标准。" },
        { id: "w9-2-q7", question: "不同租户使用不同服务版本如何实现？", options: ["不支持", "通过路由规则和部署策略", "手动切换", "随机分配"], answer: 1, rationale: "可以通过流量路由实现版本差异化。" },
        { id: "w9-2-q8", question: "微服务监控如何按租户区分？", options: ["不区分", "在指标中添加租户标签", "独立监控系统", "不监控"], answer: 1, rationale: "在指标和日志中包含租户标识。" },
        { id: "w9-2-q9", question: "gRPC 服务如何传递租户信息？", options: ["请求体", "通过 Metadata", "URL 参数", "Cookie"], answer: 1, rationale: "gRPC 使用 Metadata 传递元数据。" },
        { id: "w9-2-q10", question: "Linkerd 与 Istio 的主要区别是什么？", options: ["功能相同", "Linkerd 更轻量，Istio 更全面", "Linkerd 更重", "无区别"], answer: 1, rationale: "Linkerd 以简单和轻量著称。" },
        { id: "w9-2-q11", question: "服务网格如何简化多租户？", options: ["不简化", "统一处理跨服务的上下文传播和策略", "增加复杂度", "只用于安全"], answer: 1, rationale: "Service Mesh 在基础设施层处理跨切面关注点。" },
        { id: "w9-2-q12", question: "租户级别路由的实现方式有哪些？", options: ["只有 DNS", "Header 路由、Cookie 路由、URL 路由", "只有负载均衡", "随机路由"], answer: 1, rationale: "可以基于多种标识实现租户路由。" },
    ],
    "w9-3": [
        { id: "w9-3-q1", question: "Serverless 多租户的天然优势是什么？", options: ["持久状态", "调用级别的隔离", "长连接", "共享内存"], answer: 1, rationale: "每次函数调用独立，天然具有隔离性。" },
        { id: "w9-3-q2", question: "Lambda 冷启动的影响是什么？", options: ["成本降低", "首次调用延迟增加", "性能提升", "安全增强"], answer: 1, rationale: "冷启动导致首次调用需要更长时间。" },
        { id: "w9-3-q3", question: "如何优化 Lambda 冷启动？", options: ["增加代码", "Provisioned Concurrency、代码优化", "减少内存", "增加超时"], answer: 1, rationale: "预置并发和代码优化可以减少冷启动影响。" },
        { id: "w9-3-q4", question: "Serverless 租户状态如何管理？", options: ["函数内存", "外部存储（DynamoDB、S3 等）", "本地文件", "环境变量"], answer: 1, rationale: "无状态函数需要外部存储管理状态。" },
        { id: "w9-3-q5", question: "租户级别并发控制如何实现？", options: ["不控制", "Reserved Concurrency 或应用层限流", "无法实现", "自动控制"], answer: 1, rationale: "可以为不同租户设置不同的并发限制。" },
        { id: "w9-3-q6", question: "Serverless 成本追踪的挑战是什么？", options: ["成本固定", "需要在调用级别关联租户", "自动追踪", "不需要追踪"], answer: 1, rationale: "需要在每次调用中记录租户信息用于成本分摊。" },
        { id: "w9-3-q7", question: "Step Functions 在多租户中的应用是什么？", options: ["数据存储", "编排租户工作流", "代码执行", "日志管理"], answer: 1, rationale: "Step Functions 可以编排多租户的复杂工作流。" },
        { id: "w9-3-q8", question: "Cloudflare Workers 的特点是什么？", options: ["只支持 Node", "边缘计算、全球分布", "只在数据中心", "只支持 Python"], answer: 1, rationale: "Workers 在边缘节点执行，延迟更低。" },
        { id: "w9-3-q9", question: "Lambda 执行时间限制对多租户有什么影响？", options: ["无影响", "长任务需要分解或使用其他服务", "限制太长", "不需要考虑"], answer: 1, rationale: "Lambda 有最大执行时间限制。" },
        { id: "w9-3-q10", question: "Serverless 多租户的计费模型是什么？", options: ["固定费用", "按调用次数和执行时间计费", "按租户数计费", "免费"], answer: 1, rationale: "Serverless 按实际使用量计费。" },
        { id: "w9-3-q11", question: "Lambda Layers 在多租户中的应用是什么？", options: ["数据存储", "共享代码和依赖", "日志存储", "配置管理"], answer: 1, rationale: "Layers 可以共享公共代码减少部署包大小。" },
        { id: "w9-3-q12", question: "Serverless 日志如何按租户区分？", options: ["不区分", "在日志中包含租户标识", "独立日志流", "不记录日志"], answer: 1, rationale: "需要在日志中添加租户信息便于查询。" },
    ],
    "w9-4": [
        { id: "w9-4-q1", question: "Strangler Pattern 的核心思想是什么？", options: ["一次性替换", "逐步替换遗留系统", "完全重写", "保持不变"], answer: 1, rationale: "Strangler 模式逐步用新系统替换旧系统。" },
        { id: "w9-4-q2", question: "双运行期间如何保证数据一致？", options: ["不保证", "数据同步或双写", "只用新系统", "只用旧系统"], answer: 1, rationale: "需要同步机制确保新旧系统数据一致。" },
        { id: "w9-4-q3", question: "特性标记在迁移中的作用是什么？", options: ["代码注释", "控制租户使用新旧功能", "性能标记", "安全标记"], answer: 1, rationale: "Feature Flag 可以按租户控制功能版本。" },
        { id: "w9-4-q4", question: "架构演进的回滚计划应该包含什么？", options: ["不需要回滚", "回滚步骤、触发条件、验证方法", "自动回滚", "忽略回滚"], answer: 1, rationale: "完整的回滚计划确保迁移失败时可以恢复。" },
        { id: "w9-4-q5", question: "与租户沟通迁移的时机是什么？", options: ["迁移后", "迁移前充分沟通计划和影响", "不沟通", "只沟通问题"], answer: 1, rationale: "提前沟通让租户有时间准备和测试。" },
        { id: "w9-4-q6", question: "Shopify 多租户架构的特点是什么？", options: ["单一架构", "从共享演进到分片的多租户", "完全隔离", "无多租户"], answer: 1, rationale: "Shopify 有著名的多租户架构演进案例。" },
        { id: "w9-4-q7", question: "迁移验证检查清单应该包含什么？", options: ["只有功能", "功能、性能、数据完整性、安全", "只有安全", "只有性能"], answer: 1, rationale: "全面的检查确保迁移质量。" },
        { id: "w9-4-q8", question: "API 兼容性在迁移中为什么重要？", options: ["不重要", "确保租户集成不中断", "只影响文档", "自动兼容"], answer: 1, rationale: "破坏 API 兼容会影响租户的集成。" },
        { id: "w9-4-q9", question: "逐步迁移租户的好处是什么？", options: ["更慢", "降低风险、及时发现问题", "更复杂", "更贵"], answer: 1, rationale: "分批迁移可以控制风险和快速响应问题。" },
        { id: "w9-4-q10", question: "路由层在 Strangler 模式中的作用是什么？", options: ["数据存储", "决定请求发往新旧系统", "代码执行", "日志记录"], answer: 1, rationale: "路由层控制流量在新旧系统间的分配。" },
        { id: "w9-4-q11", question: "从单租户到多租户的挑战是什么？", options: ["太简单", "数据隔离、资源共享、隔离验证", "无挑战", "只是配置"], answer: 1, rationale: "需要重新设计隔离和共享机制。" },
        { id: "w9-4-q12", question: "迁移成功的衡量标准是什么？", options: ["迁移完成", "功能正常、性能达标、无数据丢失", "速度最快", "成本最低"], answer: 1, rationale: "需要全面验证迁移的质量。" },
    ],
}
