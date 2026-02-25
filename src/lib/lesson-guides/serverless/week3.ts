import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "w3-1": {
        lessonId: "w3-1",
        background: [
            "【REST API】API Gateway REST API 功能最全面：支持请求验证、API 密钥、使用计划、WAF 集成、边缘优化端点，适合需要完整 API 管理的场景。",
            "【HTTP API】API Gateway HTTP API 是轻量级替代方案：延迟更低（约低 60%）、成本更低（约低 70%），支持 JWT 授权和 CORS 自动配置，适合简单 API。",
            "【功能差异】REST API 独有功能：请求/响应转换、API 缓存、资源策略、客户端证书、WAF 集成。HTTP API 不支持这些但性能和成本更优。",
            "【端点类型】REST API 支持三种端点类型：Edge-optimized（CloudFront 加速）、Regional（区域内访问）、Private（VPC 内部访问）。",
            "【集成方式】两种 API 类型都支持 Lambda 代理集成（直接转发请求到 Lambda），REST API 还支持非代理集成（请求/响应映射模板）。"
        ],
        keyDifficulties: [
            "【选型决策】多数新项目应首选 HTTP API（更快更便宜），只有需要 API 缓存、WAF、请求转换等高级功能时才选 REST API。",
            "【延迟对比】HTTP API 的 P99 延迟约 10ms，REST API 约 29ms。对延迟敏感的应用优先选 HTTP API。",
            "【授权差异】HTTP API 支持 JWT Authorizer 和 Lambda Authorizer；REST API 额外支持 IAM Authorizer 和 Cognito User Pool Authorizer。",
            "【CORS 配置】HTTP API 提供内置 CORS 配置，一行参数搞定；REST API 需要手动配置 OPTIONS 方法和响应头。"
        ],
        handsOnPath: [
            "在 AWS 控制台分别创建 HTTP API 和 REST API，各集成一个 Lambda 函数。",
            "使用 curl 或 Postman 测试两种 API，对比响应延迟。",
            "为 HTTP API 配置 CORS，验证浏览器跨域请求。",
            "查看 API Gateway 的 CloudWatch 指标：延迟、4xx/5xx 错误率、请求数。"
        ],
        selfCheck: [
            "HTTP API 和 REST API 在延迟和成本上的差异有多大？",
            "什么场景下应该选择 REST API 而非 HTTP API？",
            "REST API 的三种端点类型分别适用于什么场景？",
            "如何为 HTTP API 配置 CORS？"
        ],
        extensions: [
            "研究 API Gateway WebSocket API 的使用场景和实现方式。",
            "了解 API Gateway 的请求限流和配额管理功能。",
            "探索 CloudFront + API Gateway 的全球加速方案。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html",
            "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html",
            "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-rest-api.html"
        ]
    },
    "w3-2": {
        lessonId: "w3-2",
        background: [
            "【代理集成】Lambda 代理集成：API Gateway 将完整的 HTTP 请求直接转发给 Lambda（包含路径、查询参数、Headers、Body），Lambda 返回标准格式响应。",
            "【非代理集成】非代理集成：通过映射模板（VTL）在 API Gateway 层转换请求和响应，可以在不修改 Lambda 代码的情况下调整 API 契约。",
            "【代理集成优势】代理集成更简单直接：Lambda 接收完整请求上下文，自行解析和处理。90% 以上的 Serverless 项目使用代理集成。",
            "【请求格式】代理集成的 event 对象包含：httpMethod、path、queryStringParameters、headers、body、pathParameters、requestContext 等字段。",
            "【响应格式】代理集成要求 Lambda 返回固定格式：{ statusCode: 200, headers: {}, body: JSON.stringify(data) }。statusCode 必须是整数。"
        ],
        keyDifficulties: [
            "【映射模板】非代理集成使用 VTL（Velocity Template Language）编写映射模板，学习成本高且调试困难，仅在需要请求/响应转换时使用。",
            "【Base64 编码】代理集成中，二进制内容需要 Base64 编码传输。通过设置 isBase64Encoded: true 和配置 Binary Media Types 支持。",
            "【多值参数】多值查询参数和多值 Headers 需要使用 multiValueQueryStringParameters 和 multiValueHeaders 字段。",
            "【错误响应格式】如果 Lambda 返回格式不正确（如缺少 statusCode），API Gateway 返回 502 Bad Gateway，需严格遵守响应格式。"
        ],
        handsOnPath: [
            "创建 Lambda 代理集成 API，返回完整 event 对象内容以了解其结构。",
            "实现一个 REST API 端点，解析路径参数和查询参数进行业务处理。",
            "尝试返回格式错误的响应，观察 502 Bad Gateway 错误。",
            "配置非代理集成，使用简单的映射模板转换请求参数。"
        ],
        selfCheck: [
            "Lambda 代理集成和非代理集成的核心区别是什么？",
            "代理集成中 Lambda 必须返回什么格式的响应？",
            "什么情况下 API Gateway 会返回 502 Bad Gateway？",
            "如何通过代理集成处理二进制内容（如图片上传）？"
        ],
        extensions: [
            "研究 API Gateway 请求验证器，在 API 层验证请求格式。",
            "了解 API Gateway 的 Stage Variables 和模板变量。",
            "探索使用 OpenAPI（Swagger）定义 API Gateway 接口。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html",
            "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-from-example.html",
            "https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-lambda-integration.html"
        ]
    },
    "w3-3": {
        lessonId: "w3-3",
        background: [
            "【S3 触发】S3 事件通知在对象创建、删除、恢复等操作时触发 Lambda。常见用例：图片缩略图生成、日志分析、数据 ETL。",
            "【SQS 触发】SQS 作为事件源时，Lambda 通过轮询拉取消息批量处理。支持批量大小配置（1-10000）、部分批次失败报告。",
            "【SNS 触发】SNS 推送模式：当消息发布到 SNS Topic 时，直接推送到 Lambda 函数。适合扇出（Fan-out）模式。",
            "【EventBridge 触发】EventBridge 是高级事件路由器，支持基于事件内容的规则匹配、Schedule（定时任务）、第三方 SaaS 事件集成。",
            "【推送 vs 拉取】S3/SNS/EventBridge 是推送模式（服务主动调用 Lambda），SQS/DynamoDB Streams/Kinesis 是拉取模式（Lambda 轮询获取数据）。"
        ],
        keyDifficulties: [
            "【批处理语义】SQS/Kinesis 拉取模式支持批量处理多条记录。如果批次中部分记录失败，需要使用 ReportBatchItemFailures 功能避免重复处理成功记录。",
            "【事件过滤】Lambda 支持事件过滤模式，在事件源映射层过滤事件，避免函数被不相关的事件触发，降低成本和 Lambda 调用次数。",
            "【S3 递归触发】如果 Lambda 在处理 S3 事件时写入同一桶的相同前缀，可能触发无限递归调用。需要使用不同前缀或桶避免。",
            "【死信队列】异步调用失败后（默认重试 2 次），事件发送到死信队列（DLQ）。需要配置 DLQ 或 on-failure destination 避免事件丢失。"
        ],
        handsOnPath: [
            "配置 S3 桶的 ObjectCreated 事件触发 Lambda，上传文件验证触发。",
            "创建 SQS 队列并配置为 Lambda 事件源，发送消息观察批量处理行为。",
            "配置 EventBridge 定时规则（每 5 分钟），触发 Lambda 执行定时任务。",
            "为 Lambda 配置事件过滤器，只处理特定前缀的 S3 对象。"
        ],
        selfCheck: [
            "推送模式和拉取模式的事件源各有哪些？它们的调用语义有何不同？",
            "SQS 批量处理时，如何处理部分记录失败的情况？",
            "什么是 S3 递归触发问题？如何避免？",
            "Lambda 异步调用失败后，事件会被如何处理？"
        ],
        extensions: [
            "研究 Lambda 事件源映射的过滤表达式语法。",
            "了解 Kinesis Data Streams 作为 Lambda 事件源的特点。",
            "探索 EventBridge Scheduler 的高级定时调度功能。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents.html"
        ]
    },
    "w3-4": {
        lessonId: "w3-4",
        background: [
            "【执行角色】Lambda 执行角色（Execution Role）是 IAM 角色，授予函数访问 AWS 服务的权限。函数使用该角色的临时凭证调用 AWS API。",
            "【资源策略】资源策略（Resource-based Policy）附加在 Lambda 函数上，控制哪些 AWS 服务或账户可以调用该函数。",
            "【最小权限】安全最佳实践：每个 Lambda 函数应有独立的执行角色，只授予必要的最小权限。避免使用 AdministratorAccess 等宽泛策略。",
            "【托管策略】AWS 提供预定义的 Lambda 托管策略：AWSLambdaBasicExecutionRole（CloudWatch Logs）、AWSLambdaVPCAccessExecutionRole（VPC 网络）。",
            "【权限边界】Permission Boundary 是 IAM 高级功能，为角色设置权限上限。即使策略授予更多权限，实际权限不会超过边界。"
        ],
        keyDifficulties: [
            "【执行角色 vs 资源策略】执行角色控制「Lambda 能做什么」（出站权限），资源策略控制「谁能调用 Lambda」（入站权限）。两者需要同时正确配置。",
            "【权限范围】IAM 策略中的 Resource 应精确到具体 ARN，而非使用通配符 *。例如只允许访问特定 DynamoDB 表而非所有表。",
            "【跨账户调用】通过资源策略授权其他 AWS 账户调用 Lambda 函数。需要同时在两端配置权限。",
            "【STS 临时凭证】Lambda 执行角色使用 STS AssumeRole 获取临时凭证，有效期最长 12 小时。函数不应硬编码 Access Key。"
        ],
        handsOnPath: [
            "创建一个自定义 IAM 角色，只授予 CloudWatch Logs 和特定 DynamoDB 表的读权限。",
            "将该角色分配给 Lambda 函数，验证函数可以读取 DynamoDB 但不能写入。",
            "查看 Lambda 的资源策略，理解 API Gateway 是如何获得调用权限的。",
            "故意移除执行角色的 DynamoDB 权限，观察函数调用时的错误信息。"
        ],
        selfCheck: [
            "Lambda 执行角色和资源策略分别控制什么方向的权限？",
            "为什么每个 Lambda 函数应该有独立的执行角色？",
            "IAM 策略中的 Resource 为什么不应使用通配符 *？",
            "AWSLambdaBasicExecutionRole 授予了哪些权限？"
        ],
        extensions: [
            "研究 IAM Access Analyzer 自动生成最小权限策略。",
            "了解 Lambda 函数 URL（Function URL）的认证机制。",
            "探索 AWS Organizations SCP 对 Lambda 权限的约束。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html",
            "https://www.serverless.com/blog/abcs-of-iam-permissions"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "w3-1": [
        {
            id: "sl-w3-1-q1",
            question: "API Gateway HTTP API 相比 REST API 的主要优势是什么？",
            options: [
                "支持更多高级功能",
                "延迟更低（约低 60%）且成本更低（约低 70%）",
                "支持 WebSocket",
                "支持 API 缓存"
            ],
            answer: 1,
            rationale: "HTTP API 相比 REST API 延迟降低约 60%、成本降低约 70%，但不支持 API 缓存、WAF 集成、请求/响应转换等高级功能。"
        },
        {
            id: "sl-w3-1-q2",
            question: "以下哪个功能是 REST API 独有的，HTTP API 不支持？",
            options: [
                "Lambda 代理集成",
                "JWT 授权",
                "API 缓存和 WAF 集成",
                "CORS 配置"
            ],
            answer: 2,
            rationale: "API 缓存、WAF 集成、请求/响应转换模板、资源策略、客户端证书等是 REST API 独有的高级功能。"
        },
        {
            id: "sl-w3-1-q3",
            question: "新建 Serverless HTTP API 项目时，默认应该选择哪种 API 类型？",
            options: [
                "始终选择 REST API",
                "始终选择 HTTP API",
                "优先选择 HTTP API，除非需要 REST API 独有的高级功能",
                "两者可以随意混用"
            ],
            answer: 2,
            rationale: "多数新项目应首选 HTTP API（更快更便宜），只有需要 API 缓存、WAF、请求转换等高级功能时才选 REST API。"
        }
    ],
    "w3-2": [
        {
            id: "sl-w3-2-q1",
            question: "Lambda 代理集成中，Lambda 返回格式错误会导致什么结果？",
            options: [
                "API Gateway 自动修正格式",
                "API Gateway 返回 502 Bad Gateway",
                "请求被忽略",
                "Lambda 自动重试"
            ],
            answer: 1,
            rationale: "如果 Lambda 返回格式不正确（如缺少 statusCode 字段），API Gateway 无法解析响应，直接返回 502 Bad Gateway 错误。"
        },
        {
            id: "sl-w3-2-q2",
            question: "Lambda 代理集成中，Lambda 必须返回的核心字段是什么？",
            options: [
                "只需要 body",
                "statusCode 和 body",
                "statusCode、headers 和 body",
                "只需要 statusCode"
            ],
            answer: 2,
            rationale: "代理集成要求返回 { statusCode: 200, headers: {...}, body: '...' } 格式，statusCode 是必须的，headers 和 body 推荐包含。"
        },
        {
            id: "sl-w3-2-q3",
            question: "非代理集成使用什么技术进行请求/响应转换？",
            options: [
                "JavaScript 转换函数",
                "VTL（Velocity Template Language）映射模板",
                "GraphQL Schema",
                "SQL 查询"
            ],
            answer: 1,
            rationale: "非代理集成通过 VTL（Velocity Template Language）编写映射模板，在 API Gateway 层转换请求和响应格式。"
        }
    ],
    "w3-3": [
        {
            id: "sl-w3-3-q1",
            question: "S3 事件触发 Lambda 属于推送模式还是拉取模式？",
            options: [
                "拉取模式，Lambda 轮询 S3",
                "推送模式，S3 主动调用 Lambda",
                "两者都支持",
                "既不是推送也不是拉取"
            ],
            answer: 1,
            rationale: "S3、SNS、EventBridge 是推送模式（服务主动调用 Lambda），SQS、DynamoDB Streams、Kinesis 是拉取模式（Lambda 轮询获取数据）。"
        },
        {
            id: "sl-w3-3-q2",
            question: "如何避免 S3 事件触发 Lambda 的无限递归调用？",
            options: [
                "限制 Lambda 并发数",
                "将 Lambda 输出写入不同的 S3 桶或不同前缀",
                "增加 Lambda 超时时间",
                "使用同步调用模式"
            ],
            answer: 1,
            rationale: "如果 Lambda 处理 S3 事件后写入同一桶的相同前缀，会再次触发自身形成无限循环。使用不同桶或不同前缀可避免。"
        },
        {
            id: "sl-w3-3-q3",
            question: "Lambda 异步调用失败后，默认的重试行为是什么？",
            options: [
                "不重试，直接丢弃事件",
                "自动重试 2 次，之后发送到死信队列",
                "无限重试直到成功",
                "重试 10 次后丢弃"
            ],
            answer: 1,
            rationale: "Lambda 异步调用默认重试 2 次（共 3 次尝试）。全部失败后，如果配置了死信队列（DLQ）或 on-failure destination，事件会被发送到那里。"
        }
    ],
    "w3-4": [
        {
            id: "sl-w3-4-q1",
            question: "Lambda 执行角色和资源策略分别控制什么？",
            options: [
                "都控制谁能调用 Lambda",
                "执行角色控制 Lambda 能访问哪些 AWS 服务，资源策略控制谁能调用 Lambda",
                "都控制 Lambda 的执行时间",
                "执行角色控制计费，资源策略控制部署"
            ],
            answer: 1,
            rationale: "执行角色控制「Lambda 能做什么」（出站权限，如访问 DynamoDB），资源策略控制「谁能调用 Lambda」（入站权限，如 API Gateway 调用）。"
        },
        {
            id: "sl-w3-4-q2",
            question: "为什么每个 Lambda 函数应该有独立的 IAM 执行角色？",
            options: [
                "为了节省成本",
                "为了遵循最小权限原则，每个函数只获得必要的权限",
                "AWS 强制要求",
                "为了提高执行速度"
            ],
            answer: 1,
            rationale: "最小权限原则要求每个函数只有完成工作所需的最少权限。共享角色意味着所有函数获得所有权限，增加安全风险。"
        },
        {
            id: "sl-w3-4-q3",
            question: "IAM 策略中 Resource 字段使用通配符 * 有什么风险？",
            options: [
                "没有风险",
                "可能导致函数性能下降",
                "授予了过于宽泛的权限，违反最小权限原则",
                "会导致编译错误"
            ],
            answer: 2,
            rationale: "Resource 使用 * 意味着函数对所有同类资源（如所有 DynamoDB 表）都有权限，远超实际需要。应精确到具体资源 ARN。"
        }
    ]
}
