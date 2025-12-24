import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "api-w4-1": {
        lessonId: "api-w4-1",
        background: [
            "【审计日志目的】Google Cloud 文档：审计日志帮助回答'who did what, where, and when?'——谁在什么时间、什么地点做了什么。这对安全、审计和合规实体监控数据和系统至关重要。",
            "【审计日志类型】Google Cloud 区分两类审计日志：Admin Activity logs（管理操作，默认开启）和 Data Access logs（数据访问，默认关闭）。Data Access logs 可能很大，需要根据敏感度选择性开启。",
            "【最小权限原则】审计日志的 IAM 权限应遵循最小权限原则：移除非必要用户、仅授予必要的最小权限、使用细粒度访问控制限制对特定资源的访问。",
            "【结构化日志】API 日志应该使用结构化格式（JSON）而非纯文本，便于查询和分析。包含固定字段如时间戳、用户 ID、操作类型、资源 ID、结果、来源 IP。",
            "【日志分析集成】审计日志应与 SIEM（安全信息与事件管理）工具或监控系统集成，分析异常、可疑活动和合规违规。配置告警通知关键事件如未授权访问尝试。",
            "【日志存储与访问控制】日志存储在日志桶（log buckets）中，使用日志视图（log views）控制访问权限。可以为不同项目的用户配置不同的日志访问范围。",
            "【熔断器模式】Circuit Breaker 是 API 韧性的关键：当下游服务故障率超过阈值时，熔断器打开，快速失败而非等待超时。状态：Closed（正常）→ Open（熔断）→ Half-Open（探测恢复）。",
            "【幂等性设计】Idempotency-Key 确保请求安全重试：客户端生成唯一 ID 放在请求头，服务端存储（Key, Response）映射，相同 Key 直接返回缓存结果。Stripe、PayPal 等支付 API 必备。",
            "【凭证安全管理】永不在代码、环境变量、配置文件中明文存储 API Key 和密码。使用 HashiCorp Vault、AWS Secrets Manager 等工具动态注入凭证，支持自动轮换和访问审计。"
        ],
        keyDifficulties: [
            "【Data Access 日志成本】Data Access 日志可能非常大，产生额外存储成本。应评估哪些服务需要开启，排除开发环境中不必要的日志，使用成本告警监控。",
            "【日志敏感数据脱敏】审计日志不能包含敏感数据（密码、令牌、PII）。需要在记录前脱敏或使用引用 ID 替代实际值。",
            "【72 小时通知要求】GDPR 要求数据泄露后 72 小时内通知监管机构。这需要有效的日志监控和告警机制，快速检测和响应安全事件。",
            "【日志完整性】审计日志必须防篡改，使用只追加存储、数字签名或不可变存储。日志导出应加密并控制访问权限。",
            "【告警疲劳】过多的安全告警会导致疲劳和忽视。应调优告警阈值，分级处理（严重/警告/信息），聚合相关事件减少噪音。",
            "【熔断阈值调优】熔断器阈值设置需要平衡：过于敏感会误触发，过于宽松则无法保护。需要根据历史数据分析正常错误率，设置合理的故障百分比和时间窗口。",
            "【幂等性存储】Idempotency-Key 响应需要存储，存储时间需要平衡：太短可能客户端重试时已过期，太长占用存储。建议 24-48 小时，使用 Redis 或数据库存储。",
            "【Secrets 轮换挑战】凭证自动轮换需要确保所有使用该凭证的服务同时更新。需要设计零停机轮换策略，如短暂支持新旧两个版本。"
        ],
        handsOnPath: [
            "配置 API 审计日志：为关键 API 操作（认证、授权、数据修改）记录结构化日志，包含 traceId、userId、action、resource、result、timestamp。",
            "实现日志脱敏：在记录前移除或掩码敏感字段（密码、令牌、信用卡号），使用正则表达式或专用脱敏库。",
            "配置日志告警：设置告警规则检测异常模式（多次登录失败、权限提升、批量数据访问），发送通知到 Slack/PagerDuty。",
            "集成 SIEM 系统：将 API 日志导出到 Elasticsearch/Splunk/Google SecOps，创建仪表板可视化安全指标。",
            "实现请求追踪：在 API 网关注入 X-Request-ID 和 X-Trace-ID，在所有服务间传递，便于关联分析。",
            "配置日志保留策略：根据合规要求设置不同类型日志的保留期（如安全日志保留 1 年），配置自动归档和删除。",
            "配置 API 网关熔断器：在 Kong/Envoy 中配置 Circuit Breaker，设置故障阈值、熔断时间、恢复探测策略。",
            "实现幂等性支持：创建 Idempotency-Key 中间件，使用 Redis 存储 (key, response) 映射，相同请求直接返回缓存结果。",
            "配置 Secrets 管理：部署 HashiCorp Vault 或使用 AWS Secrets Manager，配置应用通过 SDK 动态获取凭证，设置自动轮换策略。"
        ],
        selfCheck: [
            "审计日志应该回答哪些问题？",
            "Admin Activity logs 和 Data Access logs 的区别是什么？",
            "审计日志为什么不能包含密码和令牌等敏感数据？",
            "如何与 SIEM 系统集成进行安全分析？",
            "告警疲劳是什么？如何避免？",
            "日志的完整性为什么重要？如何保证？",
            "熔断器的三种状态及其转换条件是什么？",
            "Idempotency-Key 如何确保请求安全重试？响应应该缓存多长时间？",
            "为什么不应该在环境变量中明文存储 API Key？应该使用什么替代方案？"
        ],
        extensions: [
            "学习 ELK Stack（Elasticsearch、Logstash、Kibana）的日志分析能力。",
            "研究 OpenTelemetry 的日志规范，了解可观测性三支柱的统一。",
            "探索 AI/ML 在安全日志分析中的应用，如异常检测和威胁预测。",
            "学习 SOC（安全运营中心）的日志处理流程和事件响应机制。",
            "深入学习 Resilience4j 或 Polly 等熔断器库的高级配置。",
            "研究 Stripe 的 Idempotency-Key 实现细节和最佳实践。",
            "学习 HashiCorp Vault 的高级功能：动态密钥、PKI、数据库凭证轮换。"
        ],
        sourceUrls: [
            "https://cloud.google.com/architecture/security-logging-best-practices",
            "https://www.elastic.co/security",
            "https://owasp.org/API-Security/",
            "https://learn.microsoft.com/azure/architecture/patterns/circuit-breaker",
            "https://stripe.com/docs/api/idempotent_requests",
            "https://developer.hashicorp.com/vault/docs"
        ]
    },
    "api-w4-2": {
        lessonId: "api-w4-2",
        background: [
            "【GDPR 核心原则】GDPR 要求数据处理必须有合法依据和透明度：进行数据流审计、选择六种合法理由之一、记录处理活动、使用清晰语言在隐私政策中说明。",
            "【用户数据权利】GDPR 保障七项用户权利：访问权、更正权、删除权（被遗忘权）、限制处理权、数据可携带权、反对权、自动化决策保护。组织必须在约一个月内响应。",
            "【传输中加密】TLS 是保护传输中数据的金标准，确保机密性、完整性和认证。API 必须强制使用 HTTPS，推荐 TLS 1.3 或更新版本。",
            "【静态数据加密】存储中的数据使用 AES-256 等标准加密。AWS S3、Azure Storage 等云服务默认提供静态加密选项，可使用客户管理密钥（CMK）增强控制。",
            "【数据分类】数据分类是识别和归类数据敏感度的过程，是风险管理的关键组成。根据分类确定适当的保护和保留控制措施。",
            "【密钥管理】使用 AWS KMS、Azure Key Vault 等服务管理加密密钥。密钥应定期轮换，使用细粒度权限控制访问，永不硬编码在代码中。"
        ],
        keyDifficulties: [
            "【数据主体请求处理】GDPR 要求在约 30 天内响应用户的数据访问/删除请求。需要建立自动化流程定位和导出/删除用户数据，跨多个系统协调。",
            "【被遗忘权实现】删除用户数据看似简单，但需要处理：备份中的数据、日志中的引用、关联数据、第三方共享的数据。需要定义数据保留和删除策略。",
            "【跨境数据传输】GDPR 限制向欧盟以外传输数据。需要使用标准合同条款（SCC）、绑定企业规则（BCR）或确认目的地有充分保护。",
            "【TLS 配置安全】必须禁用旧版本（TLS 1.0/1.1）和弱密码套件。使用 HSTS 头强制 HTTPS，配置 Certificate Transparency 防止证书欺骗。",
            "【密钥泄露响应】密钥泄露需要立即轮换并撤销受影响的访问。应该有密钥轮换的自动化流程，最小化泄露窗口。"
        ],
        handsOnPath: [
            "实现数据导出 API：创建端点允许用户下载其所有数据（符合可携带权），使用标准格式（JSON/CSV），包含元数据说明。",
            "实现数据删除 API：创建端点处理删除请求，软删除+保留期+硬删除流程，记录删除日志满足审计要求。",
            "配置 TLS：在 API 网关配置 TLS 1.3，禁用弱密码套件，启用 HSTS，设置合理的证书更新流程。",
            "配置静态加密：为数据库和对象存储启用加密，使用云服务的 KMS 管理密钥，配置密钥自动轮换。",
            "实现数据分类：定义数据分类标准（公开/内部/机密/受限），在 API 响应中标记数据敏感度。",
            "配置隐私策略端点：创建 /privacy-policy 和 /data-processing 端点返回合规信息，包含处理目的和用户权利说明。"
        ],
        selfCheck: [
            "GDPR 保障用户哪些数据权利？",
            "什么是数据可携带权？API 如何支持？",
            "TLS 1.3 相比 TLS 1.2 有什么改进？",
            "静态数据加密和传输中加密的区别是什么？",
            "如何处理跨境数据传输的合规要求？",
            "密钥管理的最佳实践是什么？"
        ],
        extensions: [
            "学习 CCPA（加州消费者隐私法案）与 GDPR 的差异。",
            "研究 PCI DSS 支付卡行业数据安全标准的 API 要求。",
            "探索 HIPAA（健康信息可携带与责任法案）对医疗 API 的要求。",
            "学习零知识证明等新兴隐私增强技术（PET）在 API 中的应用。"
        ],
        sourceUrls: [
            "https://gdpr.eu/checklist/",
            "https://cloud.google.com/architecture/encrypting-data-at-rest",
            "https://roadmap.sh/api-security-best-practices"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "api-w4-1": [
        {
            id: "api-w4-1-q1",
            question: "根据 Google Cloud，审计日志帮助回答什么问题？",
            options: [
                "系统性能如何",
                "Who did what, where, and when（谁在什么时间地点做了什么）",
                "数据存储位置",
                "API 响应时间"
            ],
            answer: 1,
            rationale: "Google Cloud 文档：审计日志帮助回答'who did what, where, and when?'——这对安全、审计和合规至关重要。"
        },
        {
            id: "api-w4-1-q2",
            question: "Google Cloud 的 Data Access audit logs 默认是什么状态？",
            options: [
                "默认开启",
                "默认关闭，需要显式启用",
                "只在生产环境开启",
                "根据数据类型自动决定"
            ],
            answer: 1,
            rationale: "Google Cloud 文档：Data Access audit logs 默认关闭，需要显式启用。因为它们可能很大，会产生额外存储成本。"
        },
        {
            id: "api-w4-1-q3",
            question: "审计日志为什么不能包含密码和令牌？",
            options: [
                "会增加日志大小",
                "敏感数据泄露会造成严重安全风险",
                "技术上不可能记录",
                "会影响日志查询性能"
            ],
            answer: 1,
            rationale: "审计日志不能包含密码、令牌、PII 等敏感数据，因为日志泄露或被未授权访问会导致这些敏感信息暴露，造成严重安全风险。"
        },
        {
            id: "api-w4-1-q4",
            question: "日志应该使用什么格式以便于分析？",
            options: [
                "纯文本",
                "结构化格式如 JSON",
                "XML",
                "二进制格式"
            ],
            answer: 1,
            rationale: "API 日志应使用结构化格式（JSON）而非纯文本，便于查询和分析。包含固定字段如时间戳、用户 ID、操作类型、资源 ID、结果。"
        },
        {
            id: "api-w4-1-q5",
            question: "审计日志应该与什么系统集成进行安全分析？",
            options: [
                "版本控制系统",
                "SIEM（安全信息与事件管理）系统",
                "代码编辑器",
                "项目管理工具"
            ],
            answer: 1,
            rationale: "审计日志应与 SIEM 工具（如 Splunk、Elasticsearch）集成，分析异常、可疑活动和合规违规，配置告警通知关键安全事件。"
        },
        {
            id: "api-w4-1-q6",
            question: "什么是告警疲劳？如何避免？",
            options: [
                "告警系统故障",
                "过多告警导致忽视，应调优阈值、分级处理、聚合相关事件",
                "告警延迟",
                "告警格式错误"
            ],
            answer: 1,
            rationale: "告警疲劳是过多安全告警导致团队忽视。应调优告警阈值、分级处理（严重/警告/信息）、聚合相关事件减少噪音。"
        },
        {
            id: "api-w4-1-q7",
            question: "Google Cloud 建议如何管理 Data Access 日志的成本？",
            options: [
                "完全禁用",
                "排除不必要的日志如开发环境，使用成本告警监控",
                "压缩所有日志",
                "减少日志字段"
            ],
            answer: 1,
            rationale: "Google Cloud 建议：评估哪些服务需要 Data Access 日志，排除开发环境中不必要的日志，查看使用数据并配置成本告警。"
        },
        {
            id: "api-w4-1-q8",
            question: "日志视图（log views）的作用是什么？",
            options: [
                "美化日志显示",
                "控制不同用户对不同日志的访问权限",
                "压缩日志",
                "加密日志"
            ],
            answer: 1,
            rationale: "日志视图让你控制不同用户对日志桶中日志的访问权限，可以为不同项目的用户配置不同的日志访问范围。"
        },
        {
            id: "api-w4-1-q9",
            question: "如何确保审计日志的完整性？",
            options: [
                "定期备份",
                "使用只追加存储、数字签名或不可变存储",
                "加密传输",
                "限制访问"
            ],
            answer: 1,
            rationale: "审计日志必须防篡改以确保完整性。使用只追加存储（append-only）、数字签名或不可变存储，日志导出应加密并控制访问。"
        },
        {
            id: "api-w4-1-q10",
            question: "X-Request-ID 和 X-Trace-ID 的作用是什么？",
            options: [
                "认证用户",
                "在服务间传递追踪标识，便于关联分析请求链路",
                "加密请求",
                "限流"
            ],
            answer: 1,
            rationale: "X-Request-ID 和 X-Trace-ID 用于分布式追踪，在所有服务间传递，便于将分散的日志关联起来分析完整的请求链路。"
        },
        {
            id: "api-w4-1-q11",
            question: "GDPR 要求数据泄露后多长时间内通知监管机构？",
            options: [
                "24 小时",
                "72 小时",
                "7 天",
                "30 天"
            ],
            answer: 1,
            rationale: "GDPR 要求数据泄露后 72 小时内通知监管机构。这需要有效的日志监控和告警机制，快速检测和响应安全事件。"
        },
        {
            id: "api-w4-1-q12",
            question: "Google Cloud 建议通过什么方式将日志导出到第三方服务？",
            options: [
                "定期下载",
                "创建 sink 转发到 Pub/Sub topic",
                "API 轮询",
                "文件复制"
            ],
            answer: 1,
            rationale: "Google Cloud 建议：创建 sink 将日志转发到 Pub/Sub topic 是导出 Cloud Audit Logs 到第三方服务的推荐方法。"
        },
        {
            id: "api-w4-1-q13",
            question: "熔断器（Circuit Breaker）的三种状态是什么？",
            options: [
                "Open、Closed、Error",
                "Closed（正常）、Open（熔断）、Half-Open（探测恢复）",
                "Active、Inactive、Pending",
                "Running、Stopped、Paused"
            ],
            answer: 1,
            rationale: "熔断器三种状态：Closed（正常请求通过）→ Open（故障率超阈值，快速失败）→ Half-Open（探测下游是否恢复）→ 根据结果回到 Closed 或 Open。"
        },
        {
            id: "api-w4-1-q14",
            question: "Idempotency-Key 的工作原理是什么？",
            options: [
                "加密请求数据",
                "客户端生成唯一 ID，服务端存储 (Key, Response) 映射，相同 Key 返回缓存结果",
                "验证用户身份",
                "限制请求频率"
            ],
            answer: 1,
            rationale: "Idempotency-Key 机制：客户端生成唯一 ID 放在请求头，服务端存储 (Key, Response) 映射，相同 Key 直接返回缓存结果，确保请求安全重试。"
        },
        {
            id: "api-w4-1-q15",
            question: "为什么不应该在环境变量中明文存储 API Key？",
            options: [
                "环境变量太长",
                "环境变量容易泄露（日志、错误信息、进程列表），无法审计访问和自动轮换",
                "环境变量性能差",
                "环境变量不支持特殊字符"
            ],
            answer: 1,
            rationale: "环境变量存储 API Key 的问题：容易通过日志、错误信息、进程列表泄露，无法审计谁访问了凭证，无法自动轮换。应使用 Vault 等 Secrets 管理工具。"
        }
    ],
    "api-w4-2": [
        {
            id: "api-w4-2-q1",
            question: "GDPR 保障用户多少项数据权利？",
            options: [
                "3 项",
                "5 项",
                "7 项",
                "10 项"
            ],
            answer: 2,
            rationale: "GDPR 保障七项用户权利：访问权、更正权、删除权、限制处理权、数据可携带权、反对权、自动化决策保护。"
        },
        {
            id: "api-w4-2-q2",
            question: "GDPR 要求组织在多长时间内响应用户的数据请求？",
            options: [
                "24 小时",
                "7 天",
                "约一个月",
                "90 天"
            ],
            answer: 2,
            rationale: "GDPR 要求组织必须在约一个月（30 天）内响应用户的数据访问、删除等请求。"
        },
        {
            id: "api-w4-2-q3",
            question: "保护传输中数据的金标准是什么？",
            options: [
                "Base64 编码",
                "TLS（Transport Layer Security）",
                "压缩",
                "分片"
            ],
            answer: 1,
            rationale: "TLS 是保护传输中数据的金标准，确保机密性、完整性和认证。API 必须强制使用 HTTPS，推荐 TLS 1.3。"
        },
        {
            id: "api-w4-2-q4",
            question: "静态数据加密通常使用什么标准？",
            options: [
                "MD5",
                "AES-256",
                "SHA-256",
                "Base64"
            ],
            answer: 1,
            rationale: "静态数据加密通常使用 AES-256（256 位高级加密标准）。AWS S3、Azure Storage 等云服务默认使用此标准。"
        },
        {
            id: "api-w4-2-q5",
            question: "什么是数据可携带权？",
            options: [
                "删除自己数据的权利",
                "以可转移格式接收自己数据的权利",
                "拒绝数据收集的权利",
                "纠正数据错误的权利"
            ],
            answer: 1,
            rationale: "数据可携带权允许用户以可转移的格式（如 JSON、CSV）接收其个人数据，便于转移到其他服务提供商。"
        },
        {
            id: "api-w4-2-q6",
            question: "被遗忘权（删除权）实现时需要考虑什么？",
            options: [
                "只删除主表数据即可",
                "备份、日志、关联数据、第三方共享的数据都需要处理",
                "不需要真正删除",
                "立即物理删除"
            ],
            answer: 1,
            rationale: "被遗忘权实现需要处理：备份中的数据、日志中的引用、关联数据、第三方共享的数据。需要定义完整的数据保留和删除策略。"
        },
        {
            id: "api-w4-2-q7",
            question: "GDPR 对跨境数据传输有什么限制？",
            options: [
                "完全禁止跨境传输",
                "限制向欧盟以外传输，需要使用 SCC 或确认目的地有充分保护",
                "没有限制",
                "只允许向美国传输"
            ],
            answer: 1,
            rationale: "GDPR 限制向欧盟以外传输数据。需要使用标准合同条款（SCC）、绑定企业规则（BCR）或确认目的地有充分保护。"
        },
        {
            id: "api-w4-2-q8",
            question: "密钥管理的最佳实践是什么？",
            options: [
                "硬编码在代码中",
                "使用 KMS 管理、定期轮换、细粒度权限控制",
                "共享同一个密钥",
                "永不更换密钥"
            ],
            answer: 1,
            rationale: "密钥管理最佳实践：使用 AWS KMS/Azure Key Vault 管理、定期轮换、使用细粒度权限控制访问、永不硬编码在代码中。"
        },
        {
            id: "api-w4-2-q9",
            question: "TLS 配置时应该禁用什么？",
            options: [
                "最新版本",
                "旧版本（TLS 1.0/1.1）和弱密码套件",
                "证书验证",
                "HTTPS"
            ],
            answer: 1,
            rationale: "TLS 配置必须禁用旧版本（TLS 1.0/1.1）和弱密码套件，使用 HSTS 头强制 HTTPS，推荐使用 TLS 1.3。"
        },
        {
            id: "api-w4-2-q10",
            question: "什么是数据分类？",
            options: [
                "压缩数据",
                "根据敏感度识别和归类数据，确定适当的保护措施",
                "加密数据",
                "删除数据"
            ],
            answer: 1,
            rationale: "数据分类是识别和归类数据敏感度的过程（如公开/内部/机密/受限），是风险管理的关键，根据分类确定保护措施。"
        },
        {
            id: "api-w4-2-q11",
            question: "API 如何支持数据可携带权？",
            options: [
                "只提供数据查看",
                "创建端点允许用户下载其所有数据，使用标准格式（JSON/CSV）",
                "不需要支持",
                "只提供纸质打印"
            ],
            answer: 1,
            rationale: "API 应创建端点允许用户下载其所有数据（符合可携带权），使用标准格式（JSON/CSV），包含元数据说明便于理解。"
        },
        {
            id: "api-w4-2-q12",
            question: "密钥泄露后应该立即做什么？",
            options: [
                "继续使用",
                "立即轮换密钥并撤销受影响的访问",
                "等待下次定期轮换",
                "只记录日志"
            ],
            answer: 1,
            rationale: "密钥泄露需要立即轮换并撤销受影响的访问。应该有密钥轮换的自动化流程，最小化泄露窗口。"
        }
    ]
}
