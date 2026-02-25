import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "w10-1": {
        lessonId: "w10-1",
        background: [
            "【最小权限原则】每个 Lambda 函数应有独立的 IAM 执行角色，只授予完成工作所需的最少权限。Action 和 Resource 都应精确到具体操作和资源 ARN。",
            "【权限边界】IAM Permission Boundary 为角色设置权限上限。即使策略授予更多权限，实际权限不会超过边界。适合限制开发者创建的角色。",
            "【IAM Access Analyzer】自动分析 IAM 策略，识别过于宽泛的权限。可以基于 CloudTrail 日志自动生成最小权限策略。",
            "【VPC 安全】将 Lambda 部署在 VPC 中可以访问 VPC 内部资源（如 RDS），同时通过安全组和网络 ACL 控制网络访问。",
            "【输入验证】Lambda 函数必须验证所有输入数据：事件参数类型检查、SQL 注入防护、XSS 过滤。不信任任何外部输入。"
        ],
        keyDifficulties: [
            "【权限粒度】IAM 策略应该精确到 Action 和 Resource 级别。如 dynamodb:GetItem 只对特定表的 ARN，而非 dynamodb:* 对所有表。",
            "【共享角色风险】多个函数共享同一个执行角色时，所有函数都拥有所有权限。一个函数被攻破意味着攻击者获得所有函数的权限。",
            "【VPC 网络成本】VPC 中的 Lambda 需要 NAT Gateway 访问公网（如 AWS API），NAT Gateway 费用约 $32/月 + 数据传输费。",
            "【依赖安全】第三方依赖可能包含已知漏洞。应定期扫描依赖（npm audit、pip-audit），使用 Lambda Layers 统一管理和更新依赖。"
        ],
        handsOnPath: [
            "为一个 DynamoDB 读取函数创建最小权限 IAM 策略：只允许 GetItem 对特定表。",
            "使用 IAM Access Analyzer 分析现有 Lambda 执行角色，识别过于宽泛的权限。",
            "为执行角色配置 Permission Boundary，限制最大权限范围。",
            "运行 npm audit 或 pip-audit 扫描 Lambda 依赖的安全漏洞。"
        ],
        selfCheck: [
            "最小权限原则在 Lambda IAM 策略中如何体现？",
            "Permission Boundary 解决什么问题？与常规 IAM 策略有何不同？",
            "为什么不推荐多个 Lambda 函数共享执行角色？",
            "Lambda 部署在 VPC 中有哪些安全优势和额外成本？"
        ],
        extensions: [
            "研究 AWS IAM Identity Center（原 SSO）在 Serverless 开发中的应用。",
            "了解 AWS WAF 与 API Gateway 的集成，保护 Serverless API。",
            "探索 Lambda 函数的代码签名（Code Signing）确保部署完整性。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/lambda-security.html",
            "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
            "https://www.serverless.com/blog/abcs-of-iam-permissions"
        ]
    },
    "w10-2": {
        lessonId: "w10-2",
        background: [
            "【Secrets Manager】全托管的密钥管理服务：自动轮转数据库凭证、API 密钥等敏感信息。Lambda 通过 SDK 或 Lambda Extension 获取密钥。",
            "【Parameter Store】AWS Systems Manager 的配置存储服务，支持明文和加密（SecureString）参数。免费（Standard 参数），适合存储配置和低敏感度信息。",
            "【环境变量加密】Lambda 环境变量默认使用 AWS 托管的 KMS 密钥加密。可配置自定义 KMS 密钥实现更精细的访问控制。",
            "【Lambda Extension 缓存】AWS Parameters and Secrets Lambda Extension 提供本地缓存，避免每次调用都访问 Secrets Manager/Parameter Store，降低延迟和成本。",
            "【轮转策略】Secrets Manager 支持自动密钥轮转：定期（如每 30 天）自动更换数据库密码，无需修改代码或重新部署。"
        ],
        keyDifficulties: [
            "【环境变量 vs Secrets Manager】简单配置（非密钥）使用环境变量；数据库密码、API Key 等敏感信息必须使用 Secrets Manager，因为环境变量在控制台可见。",
            "【成本对比】Secrets Manager：$0.40/密钥/月 + $0.05/10000 次 API 调用。Parameter Store Standard 免费，Advanced $0.05/参数/月。根据敏感度和轮转需求选择。",
            "【缓存策略】Lambda Extension 缓存 TTL 默认 300 秒。太短增加 API 调用成本，太长延迟密钥轮转生效。需要根据业务安全要求平衡。",
            "【跨账户访问】生产密钥应存储在专用安全账户中，Lambda 通过跨账户 IAM 角色访问。避免将生产密钥存储在开发账户。"
        ],
        handsOnPath: [
            "在 Secrets Manager 中创建一个数据库凭证密钥。",
            "在 Lambda 中使用 boto3/SDK 获取密钥并建立数据库连接。",
            "安装 AWS Parameters and Secrets Lambda Extension，配置本地缓存。",
            "在 Parameter Store 中存储应用配置，在 Lambda 中读取使用。"
        ],
        selfCheck: [
            "Secrets Manager 和 Parameter Store 各自适合存储什么类型的信息？",
            "为什么敏感信息不应该使用 Lambda 环境变量存储？",
            "Lambda Extension 缓存如何降低密钥获取的延迟和成本？",
            "Secrets Manager 的自动轮转功能解决什么问题？"
        ],
        extensions: [
            "研究 Secrets Manager 与 RDS 的自动轮转集成。",
            "了解 AWS KMS 客户端加密（Client-side Encryption）在 Lambda 中的应用。",
            "探索 HashiCorp Vault 作为外部密钥管理方案。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets_lambda.html",
            "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption"
        ]
    },
    "w10-3": {
        lessonId: "w10-3",
        background: [
            "【Lambda 计费模型】Lambda 按调用次数（$0.20/百万次）和执行时长（GB-秒，$0.0000166667/GB-秒）计费。免费额度：100 万次调用 + 40 万 GB-秒/月。",
            "【内存调优】使用 Lambda Power Tuning 找到最优内存配置：在速度和成本之间找到甜蜜点。内存过低执行慢、总 GB-秒多；内存过高单价贵。",
            "【超时优化】合理设置超时时间避免异常函数长时间占用资源。基于 P99 延迟设置超时（如 P99 × 2），不要使用默认的最大值。",
            "【Compute Savings Plans】AWS Savings Plans 对 Lambda 提供最高 17% 的折扣。承诺每小时最低使用量，适合稳定的 Lambda 工作负载。",
            "【成本分析】使用 AWS Cost Explorer 按 Lambda 函数分析成本。通过标签（Tags）标记函数归属的团队和项目，实现成本分摊。"
        ],
        keyDifficulties: [
            "【隐藏成本】Lambda 的总成本不仅是函数本身：还包括 API Gateway（$1/百万请求）、CloudWatch Logs、X-Ray 追踪、VPC NAT Gateway 等。",
            "【架构级优化】减少 Lambda 调用次数可能比优化单次调用更有效。如批量处理代替逐条处理、SQS 批次大小优化、EventBridge 事件过滤。",
            "【GB-秒计算】GB-秒 = 内存(GB) × 执行时间(秒)。128MB 函数执行 1 秒 = 0.125 GB-秒，1024MB 函数执行 0.1 秒 = 0.1024 GB-秒。后者虽然内存大但可能更便宜。",
            "【免费额度利用】个人项目和低流量应用可能完全在 Lambda 免费额度内运行。但 API Gateway、DynamoDB 等关联服务仍可能产生费用。"
        ],
        handsOnPath: [
            "使用 AWS Cost Explorer 查看当前 Lambda 的成本构成。",
            "对主要函数运行 Lambda Power Tuning，找到最优内存配置。",
            "对比调优前后的月成本差异。",
            "为 Lambda 函数添加 Cost Allocation Tags，按团队分析成本。"
        ],
        selfCheck: [
            "Lambda 的计费由哪两部分组成？免费额度是多少？",
            "为什么增加内存有时反而降低成本？如何找到最优配置？",
            "除了 Lambda 本身，Serverless 应用还有哪些隐藏成本？",
            "Compute Savings Plans 对 Lambda 有多少折扣？"
        ],
        extensions: [
            "研究 Graviton2（arm64）对 Lambda 成本的影响。",
            "了解 AWS Billing Conductor 实现精细化成本管理。",
            "探索 Serverless 应用的总拥有成本（TCO）计算方法。"
        ],
        sourceUrls: [
            "https://aws.amazon.com/lambda/pricing/",
            "https://github.com/alexcasalboni/aws-lambda-power-tuning",
            "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html"
        ]
    },
    "w10-4": {
        lessonId: "w10-4",
        background: [
            "【故障排查流程】Lambda 故障排查：1) 查看 CloudWatch Logs 错误信息 2) 检查 X-Ray 追踪定位瓶颈 3) 验证 IAM 权限 4) 检查网络连接（VPC/安全组）。",
            "【常见故障】超时（Timeout）：函数执行超过配置的超时时间。权限错误（AccessDenied）：IAM 策略不足。OOM（Out of Memory）：内存配置过低。",
            "【Serverless 架构模式】事件驱动微服务、API 组合模式、扇出/扇入模式、异步队列处理、编排（Step Functions）vs 协调（事件驱动）。",
            "【反模式】Lambda 单体（一个函数处理所有路由）、同步瀑布（Lambda 链式同步调用）、不必要的 VPC 部署、过度使用 Step Functions。",
            "【Well-Architected】AWS Well-Architected Serverless Lens 定义了五个支柱的最佳实践：运营卓越、安全性、可靠性、性能效率、成本优化。"
        ],
        keyDifficulties: [
            "【超时诊断】超时可能由下游服务慢（DynamoDB 延迟、外部 API 超时）或代码死循环导致。使用 X-Ray 追踪和 context.getRemainingTimeInMillis() 诊断。",
            "【OOM 诊断】Lambda OOM 不输出错误详情，只在日志中显示 'Runtime exited with error: signal: killed'。需增加内存或优化数据处理方式。",
            "【同步调用链】Lambda A 同步调用 Lambda B 再调用 Lambda C 是反模式：总延迟叠加、错误处理复杂、成本翻倍。应使用异步模式或 Step Functions。",
            "【函数粒度】函数不应太大（单体）也不应太小（纳米函数）。按业务领域和独立部署需求划分函数边界。"
        ],
        handsOnPath: [
            "模拟一个 Lambda 超时场景，通过 CloudWatch Logs 和 X-Ray 诊断原因。",
            "模拟一个 IAM 权限不足的错误，阅读错误信息并修复策略。",
            "阅读 AWS Well-Architected Serverless Lens 的核心最佳实践。",
            "分析一个现有 Serverless 项目，识别其中的反模式并提出改进方案。"
        ],
        selfCheck: [
            "Lambda 超时的常见原因有哪些？如何诊断？",
            "Lambda OOM 错误在日志中是什么表现？如何解决？",
            "为什么不推荐 Lambda 链式同步调用？有什么替代方案？",
            "AWS Well-Architected Serverless Lens 的五个支柱分别是什么？"
        ],
        extensions: [
            "研究 Serverless 应用的混沌工程测试方案。",
            "了解 Serverless 应用的灾难恢复（DR）策略。",
            "探索 Serverless 与容器（ECS/Fargate）的混合架构模式。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/troubleshooting.html",
            "https://serverlessland.com/patterns",
            "https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/welcome.html"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "w10-1": [
        {
            id: "sl-w10-1-q1",
            question: "最小权限原则在 Lambda IAM 策略中如何体现？",
            options: [
                "为所有函数使用 AdministratorAccess",
                "每个函数独立角色，Action 和 Resource 精确到具体操作和资源 ARN",
                "所有函数共享一个角色",
                "只限制 Action 不限制 Resource"
            ],
            answer: 1,
            rationale: "最小权限要求每个函数有独立角色，Action 精确到具体操作（如 dynamodb:GetItem 而非 dynamodb:*），Resource 精确到具体表 ARN。"
        },
        {
            id: "sl-w10-1-q2",
            question: "IAM Permission Boundary 的作用是什么？",
            options: [
                "增加角色的权限",
                "为角色设置权限上限，实际权限不会超过边界",
                "替代 IAM 策略",
                "管理 Lambda 并发"
            ],
            answer: 1,
            rationale: "Permission Boundary 是权限天花板：即使附加的策略授予更多权限，角色的实际权限也不会超过 Boundary 的范围。适合限制开发者创建的角色。"
        },
        {
            id: "sl-w10-1-q3",
            question: "Lambda 部署在 VPC 中需要注意什么额外成本？",
            options: [
                "不产生额外成本",
                "需要 NAT Gateway 访问公网，约 $32/月 + 数据传输费",
                "VPC 本身收费",
                "需要购买专用硬件"
            ],
            answer: 1,
            rationale: "VPC 内的 Lambda 无法直接访问公网。需要 NAT Gateway（约 $32/月固定费用 + 数据传输费用）或 VPC Endpoints 才能调用 AWS API。"
        }
    ],
    "w10-2": [
        {
            id: "sl-w10-2-q1",
            question: "为什么敏感信息（如数据库密码）不应存储在 Lambda 环境变量中？",
            options: [
                "环境变量不支持字符串",
                "环境变量在 Lambda 控制台和 API 响应中可见，且无法自动轮转",
                "环境变量无法被函数读取",
                "环境变量会增加冷启动时间"
            ],
            answer: 1,
            rationale: "环境变量虽然支持加密，但在 Lambda 控制台和 GetFunction API 中可见。且无法自动轮转。应使用 Secrets Manager 存储敏感信息。"
        },
        {
            id: "sl-w10-2-q2",
            question: "Secrets Manager 和 Parameter Store 的核心区别是什么？",
            options: [
                "功能完全相同",
                "Secrets Manager 支持自动轮转且收费，Parameter Store 免费但无轮转功能",
                "Parameter Store 更安全",
                "Secrets Manager 只支持数据库密码"
            ],
            answer: 1,
            rationale: "Secrets Manager 支持自动密钥轮转（如 RDS 密码），$0.40/密钥/月。Parameter Store Standard 免费，适合非敏感配置。根据需求选择。"
        },
        {
            id: "sl-w10-2-q3",
            question: "AWS Parameters and Secrets Lambda Extension 的核心作用是什么？",
            options: [
                "加密环境变量",
                "提供本地缓存，避免每次调用都访问 Secrets Manager/Parameter Store",
                "自动轮转密钥",
                "管理 Lambda 版本"
            ],
            answer: 1,
            rationale: "Lambda Extension 在 Lambda 执行环境中提供本地缓存层（默认 TTL 300 秒），减少对 Secrets Manager/Parameter Store 的 API 调用次数。"
        }
    ],
    "w10-3": [
        {
            id: "sl-w10-3-q1",
            question: "Lambda 的 GB-秒是如何计算的？",
            options: [
                "GB-秒 = 调用次数 × 内存",
                "GB-秒 = 配置内存(GB) × 执行时间(秒)",
                "GB-秒 = 代码大小(GB) × 部署次数",
                "GB-秒 = 并发数 × 超时时间"
            ],
            answer: 1,
            rationale: "GB-秒 = 配置内存(GB) × 实际执行时间(秒)。如 512MB 函数执行 0.5 秒 = 0.5 × 0.5 = 0.25 GB-秒。Lambda 按 GB-秒计费。"
        },
        {
            id: "sl-w10-3-q2",
            question: "除了 Lambda 本身，Serverless 应用的隐藏成本有哪些？",
            options: [
                "没有隐藏成本",
                "API Gateway、CloudWatch Logs、X-Ray、NAT Gateway、DynamoDB 等",
                "只有存储成本",
                "只有网络成本"
            ],
            answer: 1,
            rationale: "Serverless 总成本包括 Lambda（调用+执行）、API Gateway（$1/百万请求）、CloudWatch Logs（$0.50/GB）、X-Ray、VPC NAT Gateway 等多项费用。"
        },
        {
            id: "sl-w10-3-q3",
            question: "如何在架构层面优化 Lambda 成本？",
            options: [
                "增加所有函数的内存",
                "减少调用次数：批量处理、事件过滤、SQS 批次优化",
                "删除监控和日志",
                "使用同步调用替代异步"
            ],
            answer: 1,
            rationale: "架构级优化比单函数优化更有效：批量处理减少调用次数、EventBridge 事件过滤避免不必要的触发、SQS 增大批次大小减少 Lambda 调用。"
        }
    ],
    "w10-4": [
        {
            id: "sl-w10-4-q1",
            question: "Lambda 超时的常见原因是什么？",
            options: [
                "代码语法错误",
                "下游服务响应慢、外部 API 超时、代码死循环",
                "内存不足",
                "部署包太大"
            ],
            answer: 1,
            rationale: "超时通常由下游服务延迟（DynamoDB 高延迟、外部 API 不可用）、网络连接超时（VPC 配置错误）或代码无限循环导致。需用 X-Ray 追踪诊断。"
        },
        {
            id: "sl-w10-4-q2",
            question: "为什么 Lambda 链式同步调用是反模式？",
            options: [
                "Lambda 不支持调用其他 Lambda",
                "总延迟叠加、错误处理复杂、两个函数同时计费导致成本翻倍",
                "会导致冷启动",
                "只有一个函数会执行"
            ],
            answer: 1,
            rationale: "A 同步调用 B 时，A 在等待 B 的过程中仍在计费，总延迟 = A + B。应使用 Step Functions 编排或异步事件解耦。"
        },
        {
            id: "sl-w10-4-q3",
            question: "Lambda OOM（内存不足）错误在日志中通常表现为什么？",
            options: [
                "明确的 OutOfMemoryError 消息",
                "'Runtime exited with error: signal: killed'，无详细错误信息",
                "'Timeout' 错误",
                "'Permission denied' 错误"
            ],
            answer: 1,
            rationale: "Lambda OOM 时操作系统直接 kill 进程，日志只显示 'Runtime exited with error: signal: killed'，不提供详细内存使用信息。需增加内存或优化数据处理。"
        }
    ]
}
