import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "api-w1-1": {
        lessonId: "api-w1-1",
        background: [
            "【资源建模原则】Microsoft API 设计指南强调：'使用名词而非动词'——路径应表示资源（如 /orders、/users），HTTP 方法（GET/POST/PUT/DELETE）表示对资源的操作，避免 RPC 风格的 /getUser、/createOrder。",
            "【统一接口约束】REST 架构的核心是统一接口：使用标准 HTTP 动词操作资源，每个资源有唯一 URI 标识，响应包含资源的表现形式（JSON/XML），服务器无状态。",
            "【HTTP 方法语义】GET 获取资源（幂等）、POST 创建资源（非幂等）、PUT 完整更新资源（幂等）、PATCH 部分更新资源、DELETE 删除资源（幂等）。幂等性意味着多次执行结果相同。",
            "【Richardson 成熟度模型】Level 0（单一 URI + POST）→ Level 1（独立资源 URI）→ Level 2（HTTP 方法语义）→ Level 3（HATEOAS 超媒体驱动）。Level 2 是大多数 API 的实践标准。",
            "【路径设计规范】使用复数名词（/customers 而非 /customer），保持层级简洁（避免超过 /collection/item/collection），不暴露数据库结构，路径表示抽象资源而非实现细节。",
            "【错误响应标准化】RFC 7807 Problem Details 定义了标准错误格式：type（错误类型 URI）、title（简短描述）、status（HTTP 状态码）、detail（详细说明）、instance（问题实例 URI）。"
        ],
        keyDifficulties: [
            "【幂等性判断】PUT 和 DELETE 是幂等的，POST 不是。设计 API 时需考虑：如果客户端重试会发生什么？非幂等操作需要使用幂等键（Idempotency-Key）防止重复处理。",
            "【状态码选择】常见误用：200 用于所有成功（应区分 200/201/204）、500 用于所有错误（应区分 4xx 客户端错误和 5xx 服务端错误）。201 Created 需要返回 Location 头。",
            "【PATCH 两种格式】JSON Merge Patch（RFC 7396）结构与原资源相同，null 表示删除字段；JSON Patch（RFC 6902）使用操作序列（add/remove/replace）。两者语义不同，需要明确使用哪种。",
            "【嵌套资源深度】GET /customers/5/orders/99/items/123 过于复杂，增加耦合。建议使用扁平化设计或通过查询参数关联：GET /order-items/123 或 GET /items?orderId=99。",
            "【异步操作处理】长时间操作应返回 202 Accepted + Location 头指向状态端点，客户端轮询直到收到 303 See Other 重定向到最终资源。避免同步等待超时。"
        ],
        handsOnPath: [
            "设计一个电商订单 API：定义 /orders（GET 列表、POST 创建）、/orders/{id}（GET 详情、PUT 更新、DELETE 删除），确保使用正确的 HTTP 方法和状态码。",
            "实现错误响应：使用 RFC 7807 Problem Details 格式，返回结构化错误：{\"type\": \"/errors/validation\", \"title\": \"Validation Error\", \"status\": 400, \"detail\": \"...\"}。",
            "处理异步操作：为耗时的订单处理实现 202 Accepted 响应，返回 Location: /orders/status/12345，客户端轮询直到完成。",
            "设计分页 API：使用 ?limit=25&offset=0 或游标分页 ?cursor=abc123，响应包含 next/prev 链接。设置默认值和最大限制防止 DoS。",
            "实现内容协商：根据 Accept 头返回 JSON 或 XML，使用 Content-Type 明确响应格式，处理 406 Not Acceptable。",
            "添加 HATEOAS 链接：在订单响应中包含 links 数组，指向相关操作（取消订单、查看客户、查看商品），减少客户端硬编码。"
        ],
        selfCheck: [
            "GET、POST、PUT、PATCH、DELETE 各自的语义是什么？哪些是幂等的？",
            "什么是 Richardson 成熟度模型？各级别的特点是什么？",
            "设计 URI 时应该使用单数还是复数名词？为什么？",
            "201 Created 和 200 OK 的区别是什么？201 需要返回什么额外信息？",
            "什么是 RFC 7807 Problem Details？如何使用它规范错误响应？",
            "长时间运行的 API 操作应该如何设计？为什么不能同步等待？"
        ],
        extensions: [
            "学习 HATEOAS 的完整实现，研究 HAL（Hypertext Application Language）和 JSON-LD 格式。",
            "研究 Google Cloud API 设计指南，了解大规模 API 设计的实践经验。",
            "探索 gRPC 与 REST 的对比，理解何时选择哪种 API 风格。",
            "学习 API 网关的路由和转换功能，如 Kong、Envoy 的请求/响应修改。"
        ],
        sourceUrls: [
            "https://roadmap.sh/api-design",
            "https://learn.microsoft.com/azure/architecture/best-practices/api-design",
            "https://developer.mozilla.org/docs/Web/HTTP/Status"
        ]
    },
    "api-w1-2": {
        lessonId: "api-w1-2",
        background: [
            "【OpenAPI 定义】OpenAPI Specification (OAS) 是'a standard, programming language-agnostic interface description for HTTP APIs'——用于描述 HTTP API 的语言无关标准，使人和机器都能理解 API 能力而无需访问源码。",
            "【契约优先开发】Design-First 方法：先编写 OpenAPI 规范定义 API 契约，再生成服务端骨架和客户端 SDK。相比 Code-First，更容易在设计阶段发现问题并保持一致性。",
            "【OpenAPI 结构】根对象包含 openapi（版本）、info（元数据）、servers（服务器地址）、paths（端点定义）、components（可复用组件）。paths 和 components 至少需要一个。",
            "【Schema 定义】使用 JSON Schema（Draft 2020-12）定义请求/响应结构，支持基础类型、数组、对象、组合模式（allOf、oneOf、anyOf）、引用（$ref）复用定义。",
            "【参数位置】OpenAPI 支持五种参数位置：path（路径参数 /users/{id}）、query（查询参数 ?page=1）、header（请求头）、cookie（Cookie）。每种有不同的序列化规则。",
            "【Spectral Linting】Spectral 是 API 规范的 linter 工具，内置 OpenAPI/AsyncAPI 规则集，支持自定义规则，可集成到 CI/CD 流水线自动检查规范合规性。"
        ],
        keyDifficulties: [
            "【$ref 循环引用】组件相互引用可能导致无限循环。工具通常能处理，但设计时应避免深层嵌套引用，保持 Schema 结构清晰。",
            "【版本兼容性】OpenAPI 3.0 与 3.1 有语法差异（如 nullable vs type: [string, null]）。选择版本时需考虑工具链支持情况。",
            "【描述与示例】description 使用 CommonMark 格式，example 提供具体值帮助理解。没有充分的描述和示例会降低 API 可用性。",
            "【Security Scheme 选择】支持 HTTP Basic、API Key、OAuth2、OpenID Connect、mTLS。不同场景需要不同方案：机器对机器用 OAuth2 Client Credentials，用户认证用 OIDC。",
            "【Spectral 规则设计】规则需要平衡严格性和可用性。过于严格会阻碍开发，过于宽松则失去意义。建议分层：error（必须修复）、warn（建议修复）、info（提示）。"
        ],
        handsOnPath: [
            "编写订单 API 的 OpenAPI 3.1 规范：定义 /orders 路径、Order Schema、分页参数、错误响应，使用 $ref 复用组件。",
            "配置 Spectral 规则集：创建 .spectral.yaml，继承 spectral:oas，添加自定义规则如 operation-operationId（要求所有操作有 operationId）。",
            "设置 CI Linting：在 GitHub Actions 中使用 spectral-action，在 PR 时自动检查 OpenAPI 变更，阻止不合规的变更合并。",
            "生成 SDK 和文档：使用 openapi-generator 从规范生成 TypeScript/Python 客户端，使用 Redoc 或 Swagger UI 生成交互式文档。",
            "添加安全定义：在 components.securitySchemes 中定义 OAuth2 和 API Key 方案，在 paths 中通过 security 字段应用。",
            "使用 example 和 examples：为请求/响应添加真实示例数据，帮助开发者理解 API 用法，也便于 Mock 服务器生成测试数据。"
        ],
        selfCheck: [
            "什么是 OpenAPI Specification？它解决什么问题？",
            "Design-First 和 Code-First 开发方式各有什么优缺点？",
            "OpenAPI 文档的核心结构包括哪些部分？",
            "如何使用 $ref 复用 Schema 定义？有什么注意事项？",
            "Spectral 是什么？如何将它集成到 CI/CD 流水线？",
            "OpenAPI 支持哪些安全认证方案？如何选择？"
        ],
        extensions: [
            "学习 AsyncAPI 规范，了解如何描述事件驱动的 API（Kafka、WebSocket）。",
            "研究 Prism（Stoplight）的 Mock 服务器功能，基于 OpenAPI 规范自动生成 Mock 响应。",
            "探索 OpenAPI 与 GraphQL Schema 的互转工具，理解两种规范的映射关系。",
            "学习 API 变更检测工具如 optic、oasdiff，在 CI 中检测破坏性变更。"
        ],
        sourceUrls: [
            "https://spec.openapis.org/oas/latest.html",
            "https://github.com/stoplightio/spectral",
            "https://roadmap.sh/api-design"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "api-w1-1": [
        {
            id: "api-w1-1-q1",
            question: "根据 Microsoft API 设计指南，RESTful API 路径应该使用什么？",
            options: [
                "动词表示操作，如 /getUsers、/createOrder",
                "名词表示资源，如 /users、/orders，用 HTTP 方法表示操作",
                "混合使用动词和名词",
                "使用数字编码表示操作类型"
            ],
            answer: 1,
            rationale: "Microsoft API 设计指南明确指出：使用名词而非动词。路径表示资源（/orders），HTTP 方法（GET/POST/PUT/DELETE）表示操作。"
        },
        {
            id: "api-w1-1-q2",
            question: "以下哪些 HTTP 方法是幂等的？",
            options: [
                "只有 GET 是幂等的",
                "GET、PUT、DELETE 是幂等的，POST 不是",
                "所有 HTTP 方法都是幂等的",
                "只有 POST 是幂等的"
            ],
            answer: 1,
            rationale: "GET、PUT、DELETE 是幂等操作，多次执行结果相同。POST 是非幂等的，每次执行可能创建新资源。"
        },
        {
            id: "api-w1-1-q3",
            question: "成功创建资源后应该返回什么 HTTP 状态码？",
            options: [
                "200 OK",
                "201 Created，并在 Location 头返回新资源 URI",
                "202 Accepted",
                "204 No Content"
            ],
            answer: 1,
            rationale: "Microsoft API 设计指南：POST 创建资源成功应返回 201 Created，Location 头包含新创建资源的 URI。"
        },
        {
            id: "api-w1-1-q4",
            question: "Richardson 成熟度模型的 Level 2 要求是什么？",
            options: [
                "所有操作使用单一 URI 和 POST",
                "为每个资源使用独立 URI",
                "使用 HTTP 方法语义（GET、POST、PUT、DELETE）操作资源",
                "实现 HATEOAS 超媒体驱动"
            ],
            answer: 2,
            rationale: "Richardson 模型：Level 0（单一 URI）→ Level 1（独立资源 URI）→ Level 2（HTTP 方法语义）→ Level 3（HATEOAS）。Level 2 要求正确使用 HTTP 方法。"
        },
        {
            id: "api-w1-1-q5",
            question: "设计 API 路径时，应该使用单数还是复数名词？",
            options: [
                "单数名词，如 /customer、/order",
                "复数名词，如 /customers、/orders",
                "混合使用，集合用复数，单个资源用单数",
                "使用动词，如 /getCustomers"
            ],
            answer: 1,
            rationale: "Microsoft API 设计指南建议：使用复数名词（/customers 而非 /customer），保持一致性，集合和单个资源使用相同的基础路径。"
        },
        {
            id: "api-w1-1-q6",
            question: "RFC 7807 Problem Details 标准错误格式包含哪些字段？",
            options: [
                "只有 message 字段",
                "error 和 description 字段",
                "type、title、status、detail、instance 等标准字段",
                "code 和 data 字段"
            ],
            answer: 2,
            rationale: "RFC 7807 定义的 Problem Details 格式包含：type（错误类型 URI）、title（简短描述）、status（HTTP 状态码）、detail（详细说明）、instance（问题实例 URI）。"
        },
        {
            id: "api-w1-1-q7",
            question: "对于长时间运行的 API 操作，推荐的设计模式是什么？",
            options: [
                "同步等待直到操作完成",
                "返回 202 Accepted + Location 头，客户端轮询状态端点",
                "使用 WebSocket 推送结果",
                "返回 200 OK 并立即完成"
            ],
            answer: 1,
            rationale: "Microsoft API 设计指南：长时间操作应返回 202 Accepted，Location 头指向状态查询端点，客户端轮询直到收到 303 重定向到最终资源。"
        },
        {
            id: "api-w1-1-q8",
            question: "PATCH 请求的两种标准格式是什么？",
            options: [
                "JSON 和 XML",
                "JSON Merge Patch (RFC 7396) 和 JSON Patch (RFC 6902)",
                "Form Data 和 JSON",
                "Binary 和 Text"
            ],
            answer: 1,
            rationale: "PATCH 支持两种格式：JSON Merge Patch（结构与原资源相同，null 删除字段）和 JSON Patch（使用 add/remove/replace 操作序列）。"
        },
        {
            id: "api-w1-1-q9",
            question: "API 分页推荐使用什么参数？",
            options: [
                "只使用 page 参数",
                "使用 limit 和 offset，或游标分页（cursor）",
                "不需要分页参数",
                "使用 start 和 end 参数"
            ],
            answer: 1,
            rationale: "Microsoft API 设计指南推荐使用 limit（单页返回数量）和 offset（起始位置），或游标分页。需要设置最大限制防止 DoS 攻击。"
        },
        {
            id: "api-w1-1-q10",
            question: "什么是 HATEOAS？",
            options: [
                "一种数据库技术",
                "响应包含后续操作的 URI 和方法，无需客户端硬编码 URL",
                "一种加密算法",
                "API 版本控制策略"
            ],
            answer: 1,
            rationale: "HATEOAS（Hypermedia as the Engine of Application State）：响应包含 links 数组，指向相关操作的 URI 和方法，客户端无需硬编码 URL。"
        },
        {
            id: "api-w1-1-q11",
            question: "401 Unauthorized 和 403 Forbidden 的区别是什么？",
            options: [
                "没有区别，可以互换使用",
                "401 表示需要身份验证，403 表示已认证但无权限",
                "401 表示服务器错误，403 表示客户端错误",
                "401 用于 GET 请求，403 用于 POST 请求"
            ],
            answer: 1,
            rationale: "MDN HTTP 状态码：401 Unauthorized 表示需要身份验证（未登录），403 Forbidden 表示客户端身份已知但没有访问权限。"
        },
        {
            id: "api-w1-1-q12",
            question: "设计嵌套资源 URI 时，建议的最大深度是多少？",
            options: [
                "没有限制，越深越好",
                "不建议超过 /collection/item/collection 的深度",
                "只允许一层",
                "建议至少 5 层"
            ],
            answer: 1,
            rationale: "Microsoft API 设计指南：避免超过 /collection/item/collection 的深度（如 /customers/5/orders），过深的嵌套增加耦合和复杂度。"
        }
    ],
    "api-w1-2": [
        {
            id: "api-w1-2-q1",
            question: "OpenAPI Specification 的定义是什么？",
            options: [
                "一种编程语言",
                "A standard, programming language-agnostic interface description for HTTP APIs",
                "一种数据库规范",
                "一种前端框架"
            ],
            answer: 1,
            rationale: "OpenAPI 规范定义自己为'a standard, programming language-agnostic interface description for HTTP APIs'——用于描述 HTTP API 的语言无关标准。"
        },
        {
            id: "api-w1-2-q2",
            question: "OpenAPI 文档的根对象必须包含什么？",
            options: [
                "只需要 openapi 版本字段",
                "openapi 版本、info 元数据，以及 paths/components/webhooks 中至少一个",
                "只需要 paths 定义",
                "只需要 servers 配置"
            ],
            answer: 1,
            rationale: "OpenAPI 规范：根对象必须包含 openapi（版本）、info（元数据），以及 paths、components、webhooks 中至少一个。"
        },
        {
            id: "api-w1-2-q3",
            question: "Design-First 开发方式的特点是什么？",
            options: [
                "先写代码，再生成文档",
                "先编写 OpenAPI 规范，再生成服务端和客户端代码",
                "不需要任何文档",
                "只在开发完成后编写文档"
            ],
            answer: 1,
            rationale: "Design-First/Contract-First：先编写 OpenAPI 规范定义 API 契约，再生成服务端骨架和客户端 SDK，更容易在设计阶段发现问题。"
        },
        {
            id: "api-w1-2-q4",
            question: "OpenAPI 中 $ref 的作用是什么？",
            options: [
                "定义变量",
                "引用和复用其他位置定义的组件（如 Schema、Parameter）",
                "执行远程调用",
                "定义安全策略"
            ],
            answer: 1,
            rationale: "OpenAPI 使用 $ref 引用 components 中定义的可复用组件，如 Schema、Parameter、Response，避免重复定义，保持一致性。"
        },
        {
            id: "api-w1-2-q5",
            question: "OpenAPI 支持哪些参数位置（in）？",
            options: [
                "只有 query 和 body",
                "path、query、header、cookie（body 使用 requestBody）",
                "只有 path 和 query",
                "只有 header"
            ],
            answer: 1,
            rationale: "OpenAPI 参数支持四种位置：path（路径参数）、query（查询参数）、header（请求头）、cookie。请求体使用单独的 requestBody 定义。"
        },
        {
            id: "api-w1-2-q6",
            question: "Spectral 是什么工具？",
            options: [
                "代码编译器",
                "API 规范的 JSON/YAML linter，用于自动化风格检查",
                "数据库管理工具",
                "前端构建工具"
            ],
            answer: 1,
            rationale: "Spectral 是 Stoplight 开发的 JSON/YAML linter，内置 OpenAPI/AsyncAPI 规则集，支持自定义规则，可集成到 CI/CD 自动检查 API 规范。"
        },
        {
            id: "api-w1-2-q7",
            question: "Spectral 规则的 severity 级别有哪些？",
            options: [
                "只有 error",
                "error、warn、info、off",
                "只有 warn 和 error",
                "只有 info"
            ],
            answer: 1,
            rationale: "Spectral 规则支持四个 severity 级别：error（错误，通常阻止 CI）、warn（警告）、info（提示）、off（关闭规则）。"
        },
        {
            id: "api-w1-2-q8",
            question: "OpenAPI 3.1 使用什么标准定义 Schema？",
            options: [
                "自定义格式",
                "JSON Schema Draft 2020-12",
                "XML Schema",
                "Protobuf"
            ],
            answer: 1,
            rationale: "OpenAPI 3.1 完全兼容 JSON Schema Draft 2020-12，用于定义请求/响应结构，支持类型、格式、验证规则等。"
        },
        {
            id: "api-w1-2-q9",
            question: "OpenAPI 的 securitySchemes 支持哪些认证类型？",
            options: [
                "只有 API Key",
                "HTTP Basic、API Key、OAuth2、OpenID Connect、mTLS",
                "只有 OAuth2",
                "只有用户名密码"
            ],
            answer: 1,
            rationale: "OpenAPI securitySchemes 支持：http（Basic/Bearer）、apiKey（header/query/cookie）、oauth2（多种 flow）、openIdConnect、mutualTLS。"
        },
        {
            id: "api-w1-2-q10",
            question: "如何在 CI/CD 中使用 Spectral 进行自动化检查？",
            options: [
                "手动运行命令",
                "使用 spectral-action（GitHub Actions）或在 CI 脚本中运行 spectral lint",
                "只能在本地运行",
                "不支持 CI/CD 集成"
            ],
            answer: 1,
            rationale: "Spectral 提供官方 GitHub Action（spectral-action），也可在任何 CI 环境中运行 'spectral lint' 命令，自动检查 API 规范变更。"
        },
        {
            id: "api-w1-2-q11",
            question: "OpenAPI 中的 example 和 examples 有什么用途？",
            options: [
                "没有实际用途",
                "提供真实示例数据，帮助开发者理解 API 用法，便于 Mock 生成",
                "用于定义变量",
                "用于安全认证"
            ],
            answer: 1,
            rationale: "example/examples 提供请求/响应的真实示例数据，帮助开发者理解 API 用法，也被 Mock 服务器用来生成测试数据。"
        },
        {
            id: "api-w1-2-q12",
            question: "哪些知名公司发布了 Spectral 规则集作为 API 风格指南？",
            options: [
                "没有公司使用 Spectral",
                "Adidas、Azure、Box、DigitalOcean、Zalando 等",
                "只有小公司使用",
                "只有 Google 使用"
            ],
            answer: 1,
            rationale: "Spectral 被广泛采用，Adidas、Azure、Box、DigitalOcean、Zalando 等公司发布了公开的规则集作为 API 治理标准参考。"
        }
    ]
}
