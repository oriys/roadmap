import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "w3-1": {
        lessonId: "w3-1",
        background: [
            "【租户识别】多租户系统需要在请求入口处识别当前请求属于哪个租户，常见方式包括子域名、URL 路径、HTTP Header、JWT Claims 等。",
            "【子域名方式】如 tenant1.example.com，优点是直观、易于配置 DNS 和 SSL，缺点是需要通配符证书、DNS 配置复杂。",
            "【Header 方式】如 X-Tenant-ID，适合 API 调用场景，不影响 URL 结构，但需要客户端配合传递。",
            "【JWT Claims】在认证令牌中嵌入租户信息，如 tenant_id claim，实现认证与租户识别一体化。",
            "【路径方式】如 /api/tenant1/resource，优点是简单直接，缺点是 URL 结构固定、不够灵活。",
        ],
        keyDifficulties: [
            "【一致性】确保所有入口点（Web、API、WebSocket）使用统一的租户识别策略。",
            "【安全性】防止租户 ID 被篡改，特别是使用 Header 方式时需要验证。",
            "【子域名证书】通配符证书只支持一级子域名，多级子域名需要额外配置。",
            "【缓存污染】CDN 和代理缓存需要感知租户，避免跨租户内容泄露。",
        ],
        handsOnPath: [
            "配置 Nginx 子域名路由：使用 server_name 匹配 *.example.com",
            "实现 JWT 租户 Claims 验证中间件",
            "设置 API Gateway 租户 Header 提取规则",
            "配置 CDN 按租户 Header 分离缓存",
        ],
        selfCheck: [
            "四种租户识别方式各有什么优缺点？",
            "如何防止 Header 中的租户 ID 被伪造？",
            "子域名方式需要什么类型的 SSL 证书？",
        ],
        extensions: [
            "研究 Auth0 的多租户应用配置",
            "了解 Cloudflare 的租户感知缓存策略",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/tenant-resolution",
            "https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks/",
            "https://auth0.com/docs/manage-users/access-control/multi-tenant-applications",
        ],
    },
    "w3-2": {
        lessonId: "w3-2",
        background: [
            "【上下文存储】租户上下文需要在请求处理期间随时可访问，常用 ThreadLocal（同步）或 Context（异步）存储。",
            "【ThreadLocal】Java/JVM 平台常用 ThreadLocal 存储请求级数据，但在异步场景下会丢失。",
            "【Reactor Context】响应式编程中使用 Context 在订阅链中传递数据，支持异步场景。",
            "【生命周期】上下文应在请求入口设置、请求结束清理，防止内存泄漏和数据污染。",
        ],
        keyDifficulties: [
            "【线程切换】异步操作、线程池调度时 ThreadLocal 数据会丢失，需要手动传播。",
            "【内存泄漏】ThreadLocal 未清理可能导致内存泄漏，特别是在线程池场景。",
            "【嵌套调用】同一请求内的多次服务调用需要共享同一上下文。",
        ],
        handsOnPath: [
            "实现 TenantContextHolder 使用 ThreadLocal 存储租户信息",
            "配置 Spring 拦截器在请求入口设置租户上下文",
            "实现 TaskDecorator 传播租户上下文到异步任务",
            "使用 Reactor Context 在响应式流中传递租户信息",
        ],
        selfCheck: [
            "ThreadLocal 在什么场景下会丢失数据？",
            "如何在 Spring @Async 方法中传播租户上下文？",
            "Reactor Context 与 ThreadLocal 的区别是什么？",
        ],
        extensions: [
            "研究 Spring Cloud Sleuth 的 Baggage 传播机制",
            "了解 Micrometer Context Propagation 库",
        ],
        sourceUrls: [
            "https://www.baeldung.com/spring-request-response-body",
            "https://docs.oracle.com/javase/8/docs/api/java/lang/ThreadLocal.html",
            "https://projectreactor.io/docs/core/release/reference/#context",
        ],
    },
    "w3-3": {
        lessonId: "w3-3",
        background: [
            "【W3C Trace Context】标准化的分布式追踪上下文传播格式，traceparent 和 tracestate Header。",
            "【HTTP Header】跨服务 HTTP 调用通过自定义 Header（如 X-Tenant-ID）传递租户信息。",
            "【gRPC Metadata】gRPC 使用 Metadata 传递元数据，类似 HTTP Header 但有专门的 API。",
            "【消息 Header】Kafka、RabbitMQ 等消息队列支持消息级 Header 传递租户上下文。",
        ],
        keyDifficulties: [
            "【一致性】确保所有服务使用相同的 Header 名称和格式。",
            "【丢失防护】服务间调用时容易遗漏上下文传递，需要框架级支持。",
            "【异步消息】消息消费时需要从消息 Header 恢复租户上下文。",
        ],
        handsOnPath: [
            "配置 RestTemplate/Feign 拦截器自动添加租户 Header",
            "实现 gRPC ClientInterceptor 注入租户 Metadata",
            "配置 Kafka Producer/Consumer 传播租户 Header",
            "集成 OpenTelemetry Baggage 传递租户信息",
        ],
        selfCheck: [
            "W3C Trace Context 定义了哪些标准 Header？",
            "如何确保微服务间调用不丢失租户上下文？",
            "消息队列场景如何传播租户信息？",
        ],
        extensions: [
            "研究 Istio Service Mesh 的 Header 传播",
            "了解 OpenTelemetry 的 Baggage 规范",
        ],
        sourceUrls: [
            "https://www.w3.org/TR/trace-context/",
            "https://grpc.io/docs/guides/metadata/",
            "https://kafka.apache.org/documentation/#recordheader",
        ],
    },
    "w3-4": {
        lessonId: "w3-4",
        background: [
            "【审计日志】多租户审计日志必须包含租户标识，支持按租户过滤和合规报告。",
            "【OpenTelemetry Baggage】在 Span 中携带租户信息，实现跨服务的租户级追踪。",
            "【SOC 2 合规】审计日志是 SOC 2 合规的关键要求，需要记录谁在何时访问了什么数据。",
            "【日志隔离】某些合规场景要求租户日志物理隔离存储。",
        ],
        keyDifficulties: [
            "【高基数】租户 ID 作为日志标签会产生高基数问题，影响查询性能。",
            "【敏感信息】审计日志可能包含敏感信息，需要脱敏处理。",
            "【保留策略】不同租户可能有不同的日志保留要求。",
        ],
        handsOnPath: [
            "配置结构化日志自动包含租户 ID 字段",
            "设置 OpenTelemetry Span 属性记录租户信息",
            "实现租户级别的日志查询 API",
            "设计 SOC 2 合规的审计日志格式",
        ],
        selfCheck: [
            "审计日志应该包含哪些必要字段？",
            "如何处理租户 ID 高基数问题？",
            "SOC 2 对审计日志有什么要求？",
        ],
        extensions: [
            "研究 SIEM 系统的多租户日志集成",
            "了解 GDPR 对日志保留的要求",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/audit-logs",
            "https://opentelemetry.io/docs/concepts/signals/baggage/",
            "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome",
        ],
    },
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "w3-1": [
        { id: "w3-1-q1", question: "子域名租户识别方式（如 tenant1.example.com）的主要优点是什么？", options: ["成本最低", "直观易理解，便于配置 DNS 和 SSL", "不需要客户端配合", "支持无限级子域名"], answer: 1, rationale: "子域名方式直观，每个租户有独立的域名，便于 DNS 路由和 SSL 证书配置。" },
        { id: "w3-1-q2", question: "使用 HTTP Header（如 X-Tenant-ID）传递租户 ID 的主要风险是什么？", options: ["性能开销大", "需要验证防止伪造", "不支持 HTTPS", "无法与 CDN 配合"], answer: 1, rationale: "Header 可以被客户端任意设置，需要在服务端验证其合法性，防止租户 ID 伪造。" },
        { id: "w3-1-q3", question: "JWT Claims 租户识别方式的优势是什么？", options: ["不需要认证", "认证与租户识别一体化", "支持匿名访问", "实现最简单"], answer: 1, rationale: "JWT Claims 将租户信息嵌入认证令牌，实现认证与租户识别的统一，安全性高。" },
        { id: "w3-1-q4", question: "通配符 SSL 证书（*.example.com）支持哪种子域名？", options: ["所有级别子域名", "只支持一级子域名", "只支持两级子域名", "不支持子域名"], answer: 1, rationale: "通配符证书只匹配一级子域名，如 tenant.example.com，不匹配 a.tenant.example.com。" },
        { id: "w3-1-q5", question: "CDN 缓存在多租户场景下需要注意什么问题？", options: ["带宽限制", "跨租户内容泄露", "延迟过高", "成本过高"], answer: 1, rationale: "CDN 需要感知租户，按租户隔离缓存，否则可能导致一个租户看到另一个租户的缓存内容。" },
        { id: "w3-1-q6", question: "URL 路径租户识别方式（如 /api/tenant1/resource）的主要缺点是什么？", options: ["安全性低", "URL 结构固定不够灵活", "不支持 REST", "性能差"], answer: 1, rationale: "路径方式将租户 ID 硬编码在 URL 中，改变结构需要修改所有客户端，灵活性较低。" },
        { id: "w3-1-q7", question: "多入口点（Web、API、WebSocket）租户识别的关键要求是什么？", options: ["使用不同策略", "使用统一的识别策略", "只在 API 识别", "只在 Web 识别"], answer: 1, rationale: "所有入口点应使用一致的租户识别策略，确保租户上下文在整个系统中统一。" },
        { id: "w3-1-q8", question: "Auth0 多租户应用中，租户通常通过什么方式识别？", options: ["IP 地址", "Organization 或 tenant_id claim", "User-Agent", "Cookie"], answer: 1, rationale: "Auth0 支持 Organization 特性或在 JWT 中添加 tenant_id claim 来识别租户。" },
        { id: "w3-1-q9", question: "子域名方式需要什么 DNS 配置？", options: ["A 记录", "通配符 DNS 记录（*.example.com）", "MX 记录", "TXT 记录"], answer: 1, rationale: "子域名方式需要配置通配符 DNS 记录，将所有子域名指向同一服务器。" },
        { id: "w3-1-q10", question: "API Gateway 在租户识别中的作用是什么？", options: ["存储租户数据", "统一提取和验证租户标识", "管理租户计费", "部署租户代码"], answer: 1, rationale: "API Gateway 作为入口点，负责从请求中提取租户标识并传递给后端服务。" },
        { id: "w3-1-q11", question: "哪种租户识别方式最适合纯 API 服务（无 Web UI）？", options: ["子域名", "Cookie", "HTTP Header 或 JWT Claims", "URL 路径"], answer: 2, rationale: "纯 API 服务通常使用 Header 或 JWT 传递租户信息，不依赖浏览器特性。" },
        { id: "w3-1-q12", question: "租户识别失败时应该如何处理？", options: ["使用默认租户", "返回 400/401 错误", "重定向到首页", "忽略继续处理"], answer: 1, rationale: "无法识别租户时应返回错误，拒绝请求，防止未授权访问或数据混乱。" },
    ],
    "w3-2": [
        { id: "w3-2-q1", question: "Java 中 ThreadLocal 存储租户上下文的主要问题是什么？", options: ["内存占用大", "异步/线程池场景下数据会丢失", "不支持多线程", "性能差"], answer: 1, rationale: "ThreadLocal 与线程绑定，当任务被线程池调度到其他线程时，数据无法自动传播。" },
        { id: "w3-2-q2", question: "Reactor Context 相比 ThreadLocal 的优势是什么？", options: ["性能更高", "支持响应式异步流的上下文传递", "更节省内存", "更易使用"], answer: 1, rationale: "Reactor Context 在订阅链中传递数据，天然支持异步响应式编程场景。" },
        { id: "w3-2-q3", question: "ThreadLocal 未清理可能导致什么问题？", options: ["编译错误", "内存泄漏和数据污染", "网络超时", "CPU 过载"], answer: 1, rationale: "线程池中线程复用时，未清理的 ThreadLocal 会导致内存泄漏和跨请求数据污染。" },
        { id: "w3-2-q4", question: "Spring 中如何在请求入口设置租户上下文？", options: ["Filter", "HandlerInterceptor 或 Filter", "Controller", "Service"], answer: 1, rationale: "通常使用 Filter 或 HandlerInterceptor 在请求入口解析并设置租户上下文。" },
        { id: "w3-2-q5", question: "Spring @Async 方法如何获取租户上下文？", options: ["自动传播", "通过 TaskDecorator 传播", "无法获取", "通过参数传递"], answer: 1, rationale: "需要配置 TaskDecorator 将当前线程的租户上下文复制到异步执行线程。" },
        { id: "w3-2-q6", question: "租户上下文的生命周期应该如何管理？", options: ["应用启动时创建", "请求入口设置，请求结束清理", "永久保持", "每秒刷新"], answer: 1, rationale: "租户上下文应在请求入口设置，请求处理完成后清理，避免污染和泄漏。" },
        { id: "w3-2-q7", question: "TenantContextHolder 通常提供哪些方法？", options: ["只有 get", "setTenant, getTenant, clear", "只有 set", "只有 clear"], answer: 1, rationale: "完整的 TenantContextHolder 需要提供设置、获取和清理租户上下文的方法。" },
        { id: "w3-2-q8", question: "CompletableFuture 异步操作如何传播租户上下文？", options: ["自动传播", "需要在提交前捕获并在执行时恢复", "无法传播", "通过返回值传递"], answer: 1, rationale: "需要在创建异步任务前捕获当前上下文，在异步执行时恢复到新线程。" },
        { id: "w3-2-q9", question: "使用 InheritableThreadLocal 解决上下文传播的局限是什么？", options: ["无局限", "只支持父子线程，不支持线程池", "性能太差", "内存占用大"], answer: 1, rationale: "InheritableThreadLocal 只在创建子线程时复制数据，线程池复用线程时不会重新复制。" },
        { id: "w3-2-q10", question: "请求结束时忘记清理 ThreadLocal 会导致什么问题？", options: ["无影响", "下一个请求可能看到上一个请求的租户数据", "服务器崩溃", "网络中断"], answer: 1, rationale: "线程池复用线程时，未清理的数据会被下一个请求看到，导致数据污染。" },
        { id: "w3-2-q11", question: "Micrometer Context Propagation 库解决什么问题？", options: ["监控告警", "跨异步边界自动传播上下文", "日志格式化", "性能优化"], answer: 1, rationale: "该库提供通用的上下文传播机制，自动在各种异步边界传播上下文数据。" },
        { id: "w3-2-q12", question: "嵌套服务调用（A→B→C）中如何共享租户上下文？", options: ["每次重新解析", "通过 ThreadLocal/Context 在调用链中共享", "通过数据库", "通过文件"], answer: 1, rationale: "同一请求内的嵌套调用通过 ThreadLocal 或 Context 共享同一租户上下文。" },
    ],
    "w3-3": [
        { id: "w3-3-q1", question: "W3C Trace Context 标准定义了哪些 HTTP Header？", options: ["X-Tenant-ID", "traceparent 和 tracestate", "Authorization", "Content-Type"], answer: 1, rationale: "W3C Trace Context 定义了 traceparent（追踪 ID）和 tracestate（厂商特定数据）两个标准 Header。" },
        { id: "w3-3-q2", question: "gRPC 中传递元数据使用什么机制？", options: ["HTTP Header", "Metadata API", "Query Parameter", "Request Body"], answer: 1, rationale: "gRPC 有专门的 Metadata API 用于在客户端和服务端之间传递元数据。" },
        { id: "w3-3-q3", question: "Kafka 消息如何携带租户信息？", options: ["消息 Key", "消息 Header", "Topic 名称", "Partition ID"], answer: 1, rationale: "Kafka 支持消息级 Header，可以在 Header 中携带租户 ID 等元数据。" },
        { id: "w3-3-q4", question: "OpenTelemetry Baggage 的作用是什么？", options: ["存储 Trace ID", "跨服务传播自定义键值对", "记录指标", "管理日志"], answer: 1, rationale: "Baggage 用于在分布式追踪中跨服务传播自定义键值对，如租户 ID。" },
        { id: "w3-3-q5", question: "RestTemplate 如何自动添加租户 Header？", options: ["手动添加每个请求", "配置 ClientHttpRequestInterceptor", "使用 Filter", "修改源码"], answer: 1, rationale: "通过配置 ClientHttpRequestInterceptor 可以自动为所有请求添加租户 Header。" },
        { id: "w3-3-q6", question: "Feign Client 如何传播租户上下文？", options: ["自动传播", "配置 RequestInterceptor", "手动添加参数", "无法传播"], answer: 1, rationale: "Feign 通过 RequestInterceptor 可以自动从当前上下文获取租户信息并添加到请求 Header。" },
        { id: "w3-3-q7", question: "gRPC ClientInterceptor 的作用是什么？", options: ["拦截响应", "在 RPC 调用前注入 Metadata", "处理错误", "管理连接"], answer: 1, rationale: "ClientInterceptor 可以在每次 RPC 调用前将租户信息注入到 Metadata 中。" },
        { id: "w3-3-q8", question: "消息消费者如何恢复租户上下文？", options: ["自动恢复", "从消息 Header 中提取并设置到当前上下文", "查询数据库", "调用 API"], answer: 1, rationale: "消费者需要从消息 Header 中提取租户 ID，然后设置到当前处理线程的上下文中。" },
        { id: "w3-3-q9", question: "Istio Service Mesh 如何帮助传播 Header？", options: ["自动加密", "配置 Header 传播规则自动转发", "不支持", "需要手动配置每个服务"], answer: 1, rationale: "Istio 可以配置 Header 传播规则，自动在服务间转发指定的 Header。" },
        { id: "w3-3-q10", question: "跨服务调用时租户上下文丢失的常见原因是什么？", options: ["网络问题", "调用方没有添加 Header/Metadata", "服务器重启", "数据库故障"], answer: 1, rationale: "最常见的原因是调用方忘记将租户信息添加到请求 Header 或 Metadata 中。" },
        { id: "w3-3-q11", question: "RabbitMQ 消息如何传递租户信息？", options: ["Queue 名称", "Message Properties（Header）", "Exchange 名称", "Routing Key"], answer: 1, rationale: "RabbitMQ 消息的 Properties 中包含 Headers 字段，可用于传递租户信息。" },
        { id: "w3-3-q12", question: "确保所有服务使用相同租户 Header 名称的最佳实践是什么？", options: ["口头约定", "在共享库/SDK 中定义常量", "文档说明", "不需要统一"], answer: 1, rationale: "将 Header 名称定义在共享库或 SDK 中，确保所有服务使用相同的常量。" },
    ],
    "w3-4": [
        { id: "w3-4-q1", question: "多租户审计日志必须包含什么信息？", options: ["只需要时间戳", "租户标识、用户、操作、时间、结果", "只需要用户 ID", "只需要操作类型"], answer: 1, rationale: "完整的审计日志需要记录租户 ID、用户身份、操作类型、时间戳、操作结果等。" },
        { id: "w3-4-q2", question: "租户 ID 作为日志标签会产生什么问题？", options: ["日志太少", "高基数问题，影响查询性能", "无法查询", "安全风险"], answer: 1, rationale: "租户数量多时，以租户 ID 为标签会产生高基数，增加存储和查询成本。" },
        { id: "w3-4-q3", question: "SOC 2 对审计日志的基本要求是什么？", options: ["可选记录", "记录谁在何时访问了什么数据", "只记录错误", "只记录管理员操作"], answer: 1, rationale: "SOC 2 要求记录完整的访问日志，包括用户身份、访问时间、访问内容。" },
        { id: "w3-4-q4", question: "OpenTelemetry Span 属性如何支持租户追踪？", options: ["不支持", "将租户 ID 添加为 Span 属性", "只支持 Trace ID", "只支持日志"], answer: 1, rationale: "可以将租户 ID 作为 Span 属性添加，实现跨服务的租户级追踪分析。" },
        { id: "w3-4-q5", question: "审计日志中的敏感信息应该如何处理？", options: ["直接记录", "脱敏处理", "不记录任何信息", "加密整个日志"], answer: 1, rationale: "敏感信息（如密码、个人数据）应该脱敏处理后再记录到审计日志。" },
        { id: "w3-4-q6", question: "不同租户可能有不同的日志保留要求，如何处理？", options: ["统一保留期", "按租户配置保留策略", "不保留任何日志", "全部永久保留"], answer: 1, rationale: "应支持按租户配置日志保留策略，满足不同合规要求。" },
        { id: "w3-4-q7", question: "结构化日志（如 JSON）相比文本日志的优势是什么？", options: ["体积更小", "便于按字段查询和分析", "更易阅读", "写入更快"], answer: 1, rationale: "结构化日志可以按字段（如租户 ID）进行精确查询和聚合分析。" },
        { id: "w3-4-q8", question: "GDPR 对日志保留有什么影响？", options: ["必须永久保留", "需要支持删除用户数据和合理的保留期限", "禁止记录日志", "只能保留 24 小时"], answer: 1, rationale: "GDPR 要求合理的数据保留期限，并支持用户数据删除请求。" },
        { id: "w3-4-q9", question: "某些合规场景要求租户日志如何存储？", options: ["统一存储", "物理隔离存储", "不存储", "只存在内存"], answer: 1, rationale: "某些高合规场景（如金融、医疗）可能要求租户日志物理隔离存储。" },
        { id: "w3-4-q10", question: "SIEM 系统在多租户审计中的作用是什么？", options: ["存储代码", "集中分析安全事件和审计日志", "管理部署", "处理支付"], answer: 1, rationale: "SIEM（安全信息与事件管理）系统集中收集、分析多租户的安全事件和审计日志。" },
        { id: "w3-4-q11", question: "如何解决租户 ID 高基数导致的日志查询性能问题？", options: ["不记录租户 ID", "使用分区存储、采样、或专用日志索引", "减少日志量", "使用文本搜索"], answer: 1, rationale: "可以使用分区存储按租户分片、采样策略或专门的高基数日志索引解决。" },
        { id: "w3-4-q12", question: "租户级别合规报告通常包含什么内容？", options: ["只有错误统计", "访问统计、安全事件、数据访问记录", "只有性能数据", "只有成本数据"], answer: 1, rationale: "合规报告需要包含租户的访问统计、安全事件、敏感数据访问记录等。" },
    ],
}
