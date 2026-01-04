import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "w11-1": {
        lessonId: "w11-1",
        background: [
            "【URL 设计模式】多租户 API URL 有三种主要模式：路径前缀（/tenants/{id}/resources）、子域名（{tenant}.api.example.com）、Header 传递（X-Tenant-ID）。",
            "【资源归属】API 资源必须明确归属于租户，确保资源访问的隔离性。",
            "【RESTful 设计】Google API 设计指南建议资源导向设计，多租户场景需要在资源层级体现租户关系。",
            "【访问控制】每个 API 请求必须验证调用者是否有权访问目标租户的资源。",
        ],
        keyDifficulties: [
            "【租户标识传递】选择 URL 路径、子域名还是 Header 传递租户标识，各有优劣。",
            "【跨租户访问】某些场景需要支持跨租户资源访问（如平台管理员），需要特殊授权。",
            "【URL 冲突】租户自定义子域名可能与系统保留域名冲突。",
            "【安全验证】确保租户标识与认证身份一致，防止租户伪造。",
        ],
        handsOnPath: [
            "设计多租户 API URL 规范",
            "实现租户标识解析中间件",
            "配置租户资源访问控制",
            "实现跨租户访问授权机制",
        ],
        selfCheck: [
            "三种租户标识传递方式各有什么优劣？",
            "如何防止租户 ID 伪造？",
            "API 设计如何体现资源的租户归属？",
        ],
        extensions: [
            "研究 Salesforce API 的多租户设计",
            "了解 Shopify API 的租户隔离实现",
        ],
        sourceUrls: [
            "https://cloud.google.com/apis/design/resources#multi-tenancy",
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/api-design",
            "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html",
        ],
    },
    "w11-2": {
        lessonId: "w11-2",
        background: [
            "【API 版本策略】常见策略包括 URL 路径版本（/v1/）、Header 版本（Accept-Version）、查询参数版本。",
            "【Stripe 版本模式】Stripe 使用日期版本（2023-10-16），租户可以固定版本，新功能通过新版本发布。",
            "【向后兼容】修改 API 时需要确保向后兼容：只添加可选字段、不删除字段、不改变字段语义。",
            "【租户版本固定】允许租户固定使用特定 API 版本，避免自动升级带来的兼容性问题。",
        ],
        keyDifficulties: [
            "【多版本维护】同时维护多个 API 版本增加开发和测试成本。",
            "【版本废弃】如何安全废弃旧版本，确保租户有足够迁移时间。",
            "【文档同步】多版本 API 需要维护多套文档。",
            "【迁移支持】帮助租户从旧版本平滑迁移到新版本。",
        ],
        handsOnPath: [
            "设计 API 版本管理策略",
            "实现版本路由中间件",
            "配置租户默认版本与版本固定",
            "设计版本废弃与迁移通知",
        ],
        selfCheck: [
            "Stripe 的日期版本策略有什么优势？",
            "如何确保 API 向后兼容？",
            "租户版本固定如何实现？",
        ],
        extensions: [
            "研究 GitHub API 的版本演进",
            "了解 GraphQL 的版本策略",
        ],
        sourceUrls: [
            "https://www.postman.com/api-platform/api-versioning/",
            "https://stripe.com/docs/api/versioning",
            "https://cloud.google.com/apis/design/compatibility",
        ],
    },
    "w11-3": {
        lessonId: "w11-3",
        background: [
            "【限流算法】常见算法包括令牌桶（Token Bucket）、漏桶（Leaky Bucket）、滑动窗口（Sliding Window）。",
            "【配额管理】为不同租户层级分配不同的 API 配额，如免费用户 1000 次/天，付费用户 100000 次/天。",
            "【限流响应】超限时返回 429 Too Many Requests，包含 Retry-After Header 告知重试时间。",
            "【Redis 限流】使用 Redis 实现分布式限流，支持多实例部署的一致性限流。",
        ],
        keyDifficulties: [
            "【分布式限流】多实例部署下确保限流计数的准确性。",
            "【配额突发】如何处理合法的突发流量，避免误限正常请求。",
            "【配额分配】如何合理设计不同层级租户的配额。",
            "【超限处理】超限后如何优雅降级而非硬性拒绝。",
        ],
        handsOnPath: [
            "实现基于 Redis 的分布式限流",
            "配置租户级别配额策略",
            "设计限流 Header 响应规范",
            "实现配额监控与告警",
        ],
        selfCheck: [
            "令牌桶和滑动窗口算法有什么区别？",
            "429 响应应该包含哪些 Header？",
            "如何实现分布式环境下的精确限流？",
        ],
        extensions: [
            "研究 Cloudflare 的 Rate Limiting 实现",
            "了解 AWS API Gateway 的限流机制",
        ],
        sourceUrls: [
            "https://blog.bytebytego.com/p/rate-limiting-fundamentals",
            "https://cloud.google.com/docs/quota",
            "https://redis.io/glossary/rate-limiting/",
        ],
    },
    "w11-4": {
        lessonId: "w11-4",
        background: [
            "【Kong Gateway】开源 API 网关，支持多租户部署模式：Workspace 隔离、Consumer 分组。",
            "【AWS API Gateway】支持 Usage Plan 实现租户级限流和配额，API Key 关联租户身份。",
            "【APISIX Consumer】Apache APISIX 使用 Consumer 概念管理 API 消费者，支持租户级别的插件配置。",
            "【网关职责】API 网关在多租户架构中负责认证、限流、路由、监控等跨切面功能。",
        ],
        keyDifficulties: [
            "【网关性能】网关作为流量入口，性能至关重要。",
            "【配置管理】大量租户的网关配置管理复杂度。",
            "【故障隔离】网关故障可能影响所有租户，需要高可用设计。",
            "【插件隔离】租户级别的插件配置需要隔离管理。",
        ],
        handsOnPath: [
            "部署 Kong Gateway 多租户环境",
            "配置 AWS API Gateway Usage Plan",
            "实现 APISIX Consumer 租户隔离",
            "设计网关高可用架构",
        ],
        selfCheck: [
            "API 网关在多租户架构中的核心职责是什么？",
            "Kong Workspace 如何实现租户隔离？",
            "AWS Usage Plan 如何关联租户？",
        ],
        extensions: [
            "研究 Envoy Gateway 的多租户支持",
            "了解 Traefik 的租户路由配置",
        ],
        sourceUrls: [
            "https://docs.konghq.com/gateway/latest/production/deployment-topologies/multi-tenancy/",
            "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-to-api.html",
            "https://apisix.apache.org/docs/apisix/terminology/consumer/",
        ],
    },
}

export const week11Quizzes: Record<string, QuizQuestion[]> = {
    "w11-1": [
        { id: "w11-1-q1", question: "多租户 API URL 设计的三种主要模式是什么？", options: ["路径前缀、子域名、Header", "GET、POST、PUT", "JSON、XML、YAML", "HTTP、HTTPS、WebSocket"], answer: 0, rationale: "路径前缀、子域名、Header 是三种主要的租户标识传递方式。" },
        { id: "w11-1-q2", question: "路径前缀模式（/tenants/{id}/）的优势是什么？", options: ["隐藏租户信息", "URL 结构清晰，易于理解和调试", "性能最好", "最安全"], answer: 1, rationale: "路径前缀使租户关系在 URL 中明确可见。" },
        { id: "w11-1-q3", question: "使用 Header 传递租户标识的优势是什么？", options: ["URL 更简洁，资源路径不受租户影响", "性能最好", "最安全", "最容易实现"], answer: 0, rationale: "Header 方式使 URL 保持干净，租户信息通过元数据传递。" },
        { id: "w11-1-q4", question: "如何防止租户 ID 伪造？", options: ["不需要防止", "验证租户 ID 与认证身份一致", "加密租户 ID", "使用 UUID"], answer: 1, rationale: "必须验证请求中的租户标识与认证身份匹配。" },
        { id: "w11-1-q5", question: "子域名模式的挑战是什么？", options: ["URL 太长", "可能与系统保留域名冲突", "性能差", "不支持 HTTPS"], answer: 1, rationale: "租户自定义子域名可能与 api、www 等保留名冲突。" },
        { id: "w11-1-q6", question: "Google API 设计指南建议什么设计风格？", options: ["RPC 风格", "资源导向设计", "GraphQL", "SOAP"], answer: 1, rationale: "Google API 设计指南推荐资源导向的 RESTful 设计。" },
        { id: "w11-1-q7", question: "跨租户资源访问应该如何处理？", options: ["完全禁止", "需要特殊授权机制（如平台管理员）", "自动允许", "通过 Header 控制"], answer: 1, rationale: "特殊场景需要跨租户访问，需要专门的授权机制。" },
        { id: "w11-1-q8", question: "REST Security Cheat Sheet 建议什么？", options: ["不验证输入", "验证所有输入、使用 HTTPS、正确的认证授权", "只用 GET 方法", "不使用认证"], answer: 1, rationale: "OWASP 建议全面的安全措施保护 REST API。" },
        { id: "w11-1-q9", question: "多租户 API 的资源归属如何体现？", options: ["不需要体现", "资源必须明确关联到租户", "只在数据库体现", "只在文档体现"], answer: 1, rationale: "API 层面必须体现资源与租户的归属关系。" },
        { id: "w11-1-q10", question: "使用子域名标识租户时，SSL 证书如何处理？", options: ["不需要证书", "使用通配符证书或 SNI", "每租户独立证书", "禁用 HTTPS"], answer: 1, rationale: "通配符证书或 SNI 可以支持多租户子域名的 HTTPS。" },
        { id: "w11-1-q11", question: "API 请求验证租户权限的时机是什么？", options: ["响应后", "在处理业务逻辑之前", "只验证写操作", "不验证"], answer: 1, rationale: "必须在处理请求前验证租户权限。" },
        { id: "w11-1-q12", question: "租户标识解析中间件的职责是什么？", options: ["数据存储", "从请求中提取并验证租户标识", "日志记录", "负载均衡"], answer: 1, rationale: "中间件负责统一解析和验证租户标识。" },
    ],
    "w11-2": [
        { id: "w11-2-q1", question: "Stripe API 版本策略的特点是什么？", options: ["数字版本如 v1", "使用日期作为版本号", "无版本控制", "URL 参数版本"], answer: 1, rationale: "Stripe 使用日期版本如 2023-10-16。" },
        { id: "w11-2-q2", question: "API 向后兼容的原则是什么？", options: ["可以删除字段", "只添加可选字段，不删除或改变语义", "可以改变字段类型", "随意修改"], answer: 1, rationale: "向后兼容要求只做加法，不做减法或改变。" },
        { id: "w11-2-q3", question: "租户版本固定的好处是什么？", options: ["强制升级", "避免自动升级带来的兼容性问题", "减少版本数", "简化测试"], answer: 1, rationale: "版本固定让租户控制升级时机，避免意外破坏。" },
        { id: "w11-2-q4", question: "URL 路径版本（/v1/）的优势是什么？", options: ["隐藏版本", "版本清晰可见，易于理解", "性能最好", "最安全"], answer: 1, rationale: "路径版本使版本在 URL 中明确可见。" },
        { id: "w11-2-q5", question: "API 版本废弃应该如何处理？", options: ["立即删除", "提前通知，给租户迁移时间", "不废弃", "自动迁移"], answer: 1, rationale: "废弃版本需要提前通知并给予迁移期。" },
        { id: "w11-2-q6", question: "Stripe 如何让租户指定 API 版本？", options: ["URL 参数", "通过 Stripe-Version Header 或账户设置", "强制最新版", "不支持"], answer: 1, rationale: "Stripe 支持通过 Header 或账户配置指定版本。" },
        { id: "w11-2-q7", question: "多版本 API 维护的挑战是什么？", options: ["无挑战", "开发和测试成本增加", "性能变差", "安全风险"], answer: 1, rationale: "维护多个版本需要更多开发和测试资源。" },
        { id: "w11-2-q8", question: "Google Cloud API 兼容性指南建议什么？", options: ["可以破坏兼容", "遵循严格的兼容性规则", "不需要兼容", "自动兼容"], answer: 1, rationale: "Google 提供详细的 API 兼容性最佳实践。" },
        { id: "w11-2-q9", question: "Header 版本（Accept-Version）的优势是什么？", options: ["URL 保持稳定，版本作为元数据", "更安全", "性能更好", "更简单"], answer: 0, rationale: "Header 版本使 URL 不受版本影响。" },
        { id: "w11-2-q10", question: "API 迁移辅助应该提供什么？", options: ["不提供帮助", "迁移指南、变更日志、兼容性检查工具", "强制迁移", "自动转换"], answer: 1, rationale: "应该提供完整的迁移支持帮助租户升级。" },
        { id: "w11-2-q11", question: "新增可选字段为什么是安全的？", options: ["不安全", "旧客户端可以忽略新字段", "会破坏兼容", "需要版本升级"], answer: 1, rationale: "可选字段不影响现有客户端的解析。" },
        { id: "w11-2-q12", question: "API 版本文档应该如何管理？", options: ["只维护最新版", "为每个活跃版本维护独立文档", "不需要文档", "自动生成"], answer: 1, rationale: "每个版本需要对应的文档支持。" },
    ],
    "w11-3": [
        { id: "w11-3-q1", question: "常见的限流算法有哪些？", options: ["只有计数器", "令牌桶、漏桶、滑动窗口", "只有队列", "只有缓存"], answer: 1, rationale: "令牌桶、漏桶、滑动窗口是三种主流限流算法。" },
        { id: "w11-3-q2", question: "超过限流配额应该返回什么 HTTP 状态码？", options: ["200", "429 Too Many Requests", "500", "403"], answer: 1, rationale: "429 是标准的请求过多响应码。" },
        { id: "w11-3-q3", question: "限流响应应该包含什么 Header？", options: ["无 Header", "Retry-After 告知重试时间", "只有 Content-Type", "只有 Date"], answer: 1, rationale: "Retry-After 帮助客户端知道何时可以重试。" },
        { id: "w11-3-q4", question: "令牌桶算法的特点是什么？", options: ["严格均匀", "允许一定突发流量", "完全限制", "随机限制"], answer: 1, rationale: "令牌桶允许消费积累的令牌处理突发。" },
        { id: "w11-3-q5", question: "分布式限流为什么使用 Redis？", options: ["不需要 Redis", "Redis 提供原子操作和高性能", "本地内存更好", "只用数据库"], answer: 1, rationale: "Redis 的原子操作确保多实例限流准确。" },
        { id: "w11-3-q6", question: "租户配额分层的例子是什么？", options: ["所有租户相同", "免费 1000 次/天，付费 100000 次/天", "无配额", "按时间收费"], answer: 1, rationale: "不同层级租户应有不同配额。" },
        { id: "w11-3-q7", question: "滑动窗口算法的优势是什么？", options: ["最简单", "比固定窗口更平滑，避免边界突发", "性能最好", "不需要存储"], answer: 1, rationale: "滑动窗口避免了固定窗口的边界突发问题。" },
        { id: "w11-3-q8", question: "限流 Header X-RateLimit-Remaining 表示什么？", options: ["总配额", "剩余可用请求数", "已用配额", "限流时间"], answer: 1, rationale: "Remaining 表示当前窗口内剩余的可用次数。" },
        { id: "w11-3-q9", question: "配额突发如何合理处理？", options: ["严格拒绝", "允许短时突发但保持长期平均", "无限制", "队列等待"], answer: 1, rationale: "令牌桶等算法可以允许合理的短期突发。" },
        { id: "w11-3-q10", question: "Google Cloud Quota 的特点是什么？", options: ["无配额", "提供配额管理、监控和调整机制", "固定配额", "无法修改"], answer: 1, rationale: "Google Cloud 提供完整的配额管理体系。" },
        { id: "w11-3-q11", question: "限流监控应该关注什么指标？", options: ["只有错误率", "限流触发次数、接近配额的租户、异常模式", "只有延迟", "只有吞吐量"], answer: 1, rationale: "需要监控限流触发情况和潜在风险租户。" },
        { id: "w11-3-q12", question: "超限后的优雅降级策略是什么？", options: ["完全拒绝", "可以返回缓存数据或降级响应", "无限重试", "忽略限流"], answer: 1, rationale: "优雅降级比硬性拒绝提供更好的用户体验。" },
    ],
    "w11-4": [
        { id: "w11-4-q1", question: "API 网关在多租户架构中的核心职责是什么？", options: ["数据存储", "认证、限流、路由、监控等跨切面功能", "业务逻辑", "数据库访问"], answer: 1, rationale: "网关处理通用的跨切面关注点。" },
        { id: "w11-4-q2", question: "Kong Workspace 的作用是什么？", options: ["代码管理", "实现租户级别的配置和资源隔离", "日志存储", "监控管理"], answer: 1, rationale: "Kong Workspace 提供租户级别的资源隔离。" },
        { id: "w11-4-q3", question: "AWS API Gateway Usage Plan 包含什么？", options: ["只有路由", "限流配额和 API Key 管理", "只有认证", "只有日志"], answer: 1, rationale: "Usage Plan 定义 API 访问配额和节流。" },
        { id: "w11-4-q4", question: "APISIX Consumer 的概念是什么？", options: ["API 提供者", "API 消费者，支持租户级别配置", "路由规则", "插件定义"], answer: 1, rationale: "Consumer 代表 API 消费者，可以关联租户。" },
        { id: "w11-4-q5", question: "API 网关高可用设计的要点是什么？", options: ["单实例", "多实例、负载均衡、故障转移", "无需高可用", "只用主备"], answer: 1, rationale: "网关是关键入口，需要高可用保障。" },
        { id: "w11-4-q6", question: "网关性能优化的方法有哪些？", options: ["增加功能", "缓存、连接复用、异步处理", "减少实例", "禁用日志"], answer: 1, rationale: "多种技术手段优化网关性能。" },
        { id: "w11-4-q7", question: "大量租户的网关配置如何管理？", options: ["手动管理", "配置自动化、模板化、版本控制", "不管理", "固定配置"], answer: 1, rationale: "需要自动化和模板化管理大量配置。" },
        { id: "w11-4-q8", question: "Kong 支持的认证方式有哪些？", options: ["只有 API Key", "API Key、OAuth2、JWT、Basic Auth 等多种", "只有 OAuth", "不支持认证"], answer: 1, rationale: "Kong 支持多种认证插件。" },
        { id: "w11-4-q9", question: "租户级别插件配置的挑战是什么？", options: ["无挑战", "配置隔离和版本管理复杂", "性能太好", "太简单"], answer: 1, rationale: "需要确保租户间插件配置互不影响。" },
        { id: "w11-4-q10", question: "AWS API Gateway 如何关联租户？", options: ["不支持", "通过 API Key 关联 Usage Plan", "通过 URL", "通过 Cookie"], answer: 1, rationale: "API Key 关联到 Usage Plan 实现租户配额。" },
        { id: "w11-4-q11", question: "网关故障的影响是什么？", options: ["无影响", "可能影响所有租户的 API 访问", "只影响部分", "自动恢复"], answer: 1, rationale: "网关是单点，故障影响范围大。" },
        { id: "w11-4-q12", question: "APISIX 的优势是什么？", options: ["只支持 Nginx", "高性能、动态配置、丰富的插件生态", "不支持多租户", "只支持 HTTP"], answer: 1, rationale: "APISIX 基于 OpenResty，性能好且功能丰富。" },
    ],
}
