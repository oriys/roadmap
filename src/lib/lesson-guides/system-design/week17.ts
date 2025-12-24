import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week17Guides: Record<string, LessonGuide> = {
    "w17-1": {
        lessonId: "w17-1",
        background: [
            "【REST 核心约束】REST（Representational State Transfer）由 Roy Fielding 在博士论文中提出，定义了六大架构约束：客户端-服务器分离、无状态、可缓存、统一接口、分层系统、按需代码（可选）。",
            "【统一接口原则】REST 的核心是统一接口，包含四个子约束：资源标识（URI）、通过表示操作资源、自描述消息、超媒体作为应用状态引擎（HATEOAS）。",
            "【Richardson 成熟度模型】Martin Fowler 介绍的 REST 成熟度模型分四级：Level 0（HTTP 隧道）、Level 1（资源）、Level 2（HTTP 动词）、Level 3（超媒体控制/HATEOAS）。大多数 API 在 Level 2。",
            "【RFC 7807 问题详情】RFC 7807 定义了标准化的错误响应格式：'HTTP status codes are sometimes not sufficient to convey enough information about an error'。标准字段包括 type、title、status、detail、instance。",
            "【错误响应设计】使用 application/problem+json 媒体类型返回结构化错误。type 字段作为问题类型的主要标识符，title 是人类可读的摘要，detail 提供具体的解决建议而非调试信息。"
        ],
        keyDifficulties: [
            "【REST vs RPC 风格】REST 以资源为中心（名词），RPC 以操作为中心（动词）。REST 更适合 CRUD 场景，RPC 更适合复杂业务操作。选择取决于业务模型和团队习惯。",
            "【HATEOAS 的争议】Level 3 的 HATEOAS 理论上实现了客户端与服务器的解耦，但实践中很少使用：增加响应体积、客户端仍需硬编码业务逻辑、ROI 不高。",
            "【无状态的代价】无状态要求每次请求携带完整上下文（如 JWT），增加了网络开销。但带来了水平扩展能力——任何服务器都能处理任何请求。",
            "【错误信息安全】错误响应不应暴露内部实现细节（如堆栈跟踪、SQL 语句）。生产环境应返回通用错误信息，详细日志记录在服务端。"
        ],
        handsOnPath: [
            "分析 Level 2 API：GET /users（获取列表）、POST /users（创建）、GET /users/{id}（获取单个）、PUT /users/{id}（更新）、DELETE /users/{id}（删除）。",
            "实现 RFC 7807 错误响应：{ \"type\": \"https://api.example.com/errors/user-not-found\", \"title\": \"User Not Found\", \"status\": 404, \"detail\": \"User with ID 123 does not exist\" }",
            "添加 HATEOAS 链接：在响应中包含 _links: { self: { href: \"/users/123\" }, orders: { href: \"/users/123/orders\" } }",
            "设计无状态认证：使用 JWT Bearer Token 替代服务器端 Session，每次请求在 Authorization 头携带 token。",
            "测试 REST 约束：使用 Postman 验证 GET 请求的幂等性、缓存头的正确性、错误响应的格式。"
        ],
        selfCheck: [
            "REST 的六大架构约束是什么？",
            "Richardson 成熟度模型的四个级别分别是什么？",
            "RFC 7807 的标准字段有哪些？",
            "为什么 HATEOAS 在实践中很少使用？",
            "无状态约束带来什么好处和代价？"
        ],
        extensions: [
            "研究 JSON:API 规范的资源序列化标准。",
            "学习 HAL（Hypertext Application Language）超媒体格式。",
            "了解 OpenAPI/Swagger 规范描述 REST API。",
            "研究 AsyncAPI 描述事件驱动 API。"
        ],
        sourceUrls: [
            "https://restfulapi.net/resource-naming/",
            "https://www.rfc-editor.org/rfc/rfc7807"
        ]
    },
    "w17-2": {
        lessonId: "w17-2",
        background: [
            "【资源命名原则】RESTful URI 应该引用'事物'（名词）而不是'动作'（动词）：'RESTful URI should refer to a resource that is a thing (noun) instead of referring to an action (verb)'。HTTP 方法（GET/POST/PUT/DELETE）充当动词。",
            "【四种资源原型】REST 定义四种资源类型：Document（单个资源，如 /users/{id}）、Collection（资源集合，如 /users）、Store（客户端管理的仓库，如 /playlists）、Controller（过程式概念，如 /checkout）。",
            "【URL 命名规范】使用连字符提高可读性（/device-management 而非 /deviceManagement）、使用小写字母、使用正斜杠表示层级（/customers/{id}/accounts）、避免尾随斜杠、不使用文件扩展名。",
            "【Google API 设计指南】Google 强调资源导向设计：先定义资源和它们的关系，再映射到 HTTP 方法。标准方法（List、Get、Create、Update、Delete）覆盖大部分场景。",
            "【嵌套资源设计】嵌套资源表示归属关系：/customers/{id}/orders 表示客户的订单。但过深的嵌套（超过 3 层）会降低可用性，可以使用顶级资源 + 过滤参数替代。"
        ],
        keyDifficulties: [
            "【集合 vs 单个资源】集合用复数（/users）、单个资源用标识符（/users/123）。POST 到集合创建资源，GET 单个资源返回完整表示。保持一致性是关键。",
            "【嵌套深度权衡】嵌套资源 /users/123/posts/456/comments 语义清晰但 URL 过长。替代方案：扁平化 /comments?post=456 或 /posts/456/comments。选择取决于访问模式和缓存需求。",
            "【动作资源（Controller）】某些操作不适合 CRUD 模型，如 /users/123/activate。Google 建议使用自定义方法：POST /users/123:activate。冒号语法区分自定义方法和子资源。",
            "【查询参数设计】过滤、排序、分页应使用查询参数：/devices?region=USA&sort=date&page=2。避免为每种过滤条件创建新端点。"
        ],
        handsOnPath: [
            "设计资源 URL：GET /products（列表）、POST /products（创建）、GET /products/{id}（单个）、PUT /products/{id}（更新）、DELETE /products/{id}（删除）。",
            "设计嵌套资源：GET /users/{userId}/orders（用户订单列表）、POST /users/{userId}/orders（创建订单）、GET /orders/{orderId}（订单详情，扁平化访问）。",
            "设计自定义方法：POST /documents/{id}:publish（发布文档）、POST /orders/{id}:cancel（取消订单）。",
            "设计查询参数：GET /products?category=electronics&minPrice=100&maxPrice=500&sort=-price&limit=20&offset=40。",
            "验证 URL 规范：检查是否使用连字符、小写、避免动词、无尾随斜杠。"
        ],
        selfCheck: [
            "REST 资源命名的核心原则是什么？",
            "四种资源原型分别是什么？",
            "嵌套资源过深会带来什么问题？",
            "如何处理不适合 CRUD 的操作？",
            "过滤、排序、分页应该放在 URL 还是查询参数？"
        ],
        extensions: [
            "研究 Microsoft REST API Guidelines 的资源命名规范。",
            "学习 Zalando RESTful API Guidelines。",
            "了解 GraphQL 的资源建模方式与 REST 的对比。",
            "研究 URL 设计对 CDN 缓存的影响。"
        ],
        sourceUrls: [
            "https://cloud.google.com/apis/design",
            "https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md",
            "https://opensource.zalando.com/restful-api-guidelines/"
        ]
    },
    "w17-3": {
        lessonId: "w17-3",
        background: [
            "【HTTP 状态码分类】HTTP 状态码分为五类：1xx 信息响应（100-199）、2xx 成功响应（200-299）、3xx 重定向（300-399）、4xx 客户端错误（400-499）、5xx 服务器错误（500-599）。",
            "【常用 2xx 状态码】200 OK（通用成功）、201 Created（资源创建成功，POST/PUT）、204 No Content（成功但无响应体）、206 Partial Content（范围请求，用于视频流和大文件下载）。",
            "【常用 4xx 状态码】400 Bad Request（请求格式错误）、401 Unauthorized（需要认证）、403 Forbidden（已认证但无权限）、404 Not Found（资源不存在）、429 Too Many Requests（限流触发）。",
            "【HTTP 方法语义】RFC 9110 定义 HTTP 方法语义：GET（安全、幂等）、POST（非安全、非幂等）、PUT（非安全、幂等）、DELETE（非安全、幂等）、PATCH（非安全、非幂等）。",
            "【幂等性定义】幂等操作执行多次与执行一次效果相同。GET、PUT、DELETE 是幂等的，POST、PATCH 不是。幂等性对于重试机制和故障恢复至关重要。"
        ],
        keyDifficulties: [
            "【401 vs 403 区别】401 Unauthorized 表示未认证（需要登录），403 Forbidden 表示已认证但无权限（权限不足）。命名有历史问题，401 实际上是'Unauthenticated'。",
            "【PUT vs PATCH 区别】PUT 是完整替换（需要发送整个资源）、PATCH 是部分更新（只发送变更字段）。PUT 是幂等的，PATCH 不一定是（如 increment 操作）。",
            "【重定向语义】301/302 可能改变请求方法（POST 变 GET），307/308 保持原方法。永久重定向用 301/308，临时重定向用 302/307。",
            "【自定义头部规范】自定义头部应使用 X- 前缀（已废弃）或直接命名。重要头部：X-Request-ID（请求追踪）、X-RateLimit-*（限流信息）。"
        ],
        handsOnPath: [
            "实现 CRUD 状态码：GET 返回 200、POST 返回 201 + Location 头、PUT 返回 200 或 204、DELETE 返回 204。",
            "实现认证流程：无 Token 返回 401、Token 无效返回 401、权限不足返回 403。",
            "实现限流响应：429 Too Many Requests + Retry-After 头 + X-RateLimit-Remaining 头。",
            "实现部分更新：PATCH /users/123 { \"email\": \"new@example.com\" } 只更新 email 字段。",
            "添加请求追踪：生成 X-Request-ID 头，在响应中返回，记录到日志中用于问题排查。"
        ],
        selfCheck: [
            "HTTP 状态码的五个分类是什么？",
            "401 和 403 的区别是什么？",
            "PUT 和 PATCH 的区别是什么？",
            "什么是幂等性？哪些 HTTP 方法是幂等的？",
            "307 和 302 重定向的区别是什么？"
        ],
        extensions: [
            "研究 HTTP/2 的语义与 HTTP/1.1 的差异。",
            "学习条件请求（If-Match、If-None-Match）的使用。",
            "了解 Content-Negotiation 和 Accept 头的作用。",
            "研究 CORS 预检请求（OPTIONS）的机制。"
        ],
        sourceUrls: [
            "https://www.rfc-editor.org/rfc/rfc9110",
            "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
            "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"
        ]
    },
    "w17-4": {
        lessonId: "w17-4",
        background: [
            "【版本策略类型】API 版本管理有三种主流策略：URL 路径版本（/v1/users）、请求头版本（Accept: application/vnd.api+json; version=1）、查询参数版本（/users?version=1）。",
            "【Stripe 版本策略】Stripe 使用日期版本：'API versions are named with the date they were released'。客户端通过 Stripe-Version 头指定版本，默认使用账户创建时的版本。这种策略避免了主版本号的心理负担。",
            "【向后兼容原则】新增字段是向后兼容的，删除或重命名字段不兼容。Google 建议：'Adding a new field is generally backward-compatible'。遵循 Postel 法则：发送严格，接收宽容。",
            "【废弃与迁移】API 废弃需要足够的过渡期。Google 建议使用 Deprecated 注解并提供迁移指南。Stripe 提供版本升级工具和变更日志帮助客户迁移。",
            "【语义化版本】SemVer（MAJOR.MINOR.PATCH）：MAJOR 表示不兼容变更、MINOR 表示向后兼容的新功能、PATCH 表示向后兼容的 bug 修复。但 REST API 版本通常只用 MAJOR。"
        ],
        keyDifficulties: [
            "【URL 版本的争议】URL 版本（/v1/users）简单直观但违反 REST 原则（同一资源多个 URL）。替代方案是内容协商（Accept 头），但实现复杂且不利于调试。",
            "【版本爆炸问题】维护多个版本成本高。策略：限制同时支持的版本数（如最多 3 个）、设置版本生命周期（如 2 年）、强制升级通知。",
            "【Breaking Change 定义】什么算 Breaking Change：删除端点、删除字段、修改字段类型、修改必填性、修改错误码。什么不算：新增端点、新增可选字段、修改描述。",
            "【测试兼容性】自动化测试版本兼容性：使用 OpenAPI diff 工具检测破坏性变更、维护多版本测试套件、使用契约测试（Pact）。"
        ],
        handsOnPath: [
            "实现 URL 版本：/v1/users 和 /v2/users 共存，v2 新增字段 profile_picture。",
            "实现头部版本：Accept: application/vnd.myapi.v2+json，根据头部路由到不同处理器。",
            "实现 Stripe 风格版本：API-Version: 2024-01-15，使用日期版本避免版本号焦虑。",
            "添加废弃警告：响应头 Deprecation: true、Sunset: Sat, 01 Jan 2025 00:00:00 GMT。",
            "生成变更日志：使用 OpenAPI 对比工具自动生成版本间的差异报告。"
        ],
        selfCheck: [
            "API 版本管理有哪些主流策略？",
            "Stripe 的日期版本策略有什么优势？",
            "什么是 Breaking Change？哪些变更是向后兼容的？",
            "如何优雅地废弃 API 版本？",
            "SemVer 的三个数字分别代表什么？"
        ],
        extensions: [
            "研究 GraphQL 的无版本演进策略。",
            "学习 API 变更检测工具（OpenAPI diff）。",
            "了解契约测试（Pact）在 API 版本管理中的应用。",
            "研究 API 网关在版本路由中的作用。"
        ],
        sourceUrls: [
            "https://www.postman.com/api-platform/api-versioning/",
            "https://stripe.com/docs/api/versioning",
            "https://cloud.google.com/apis/design/design_patterns#versioning"
        ]
    }
}

export const week17Quizzes: Record<string, QuizQuestion[]> = {
    "w17-1": [
        {
            id: "w17-1-q1",
            question: "REST 架构的核心约束不包括？",
            options: [
                "无状态",
                "统一接口",
                "强类型契约",
                "可缓存"
            ],
            answer: 2,
            rationale: "REST 六大约束：客户端-服务器分离、无状态、可缓存、统一接口、分层系统、按需代码（可选）。强类型契约是 RPC 的特点。"
        },
        {
            id: "w17-1-q2",
            question: "Richardson 成熟度模型的 Level 2 表示什么？",
            options: [
                "HTTP 隧道",
                "资源",
                "HTTP 动词",
                "超媒体控制"
            ],
            answer: 2,
            rationale: "Level 0 HTTP 隧道、Level 1 资源、Level 2 HTTP 动词、Level 3 超媒体控制（HATEOAS）。"
        },
        {
            id: "w17-1-q3",
            question: "RFC 7807 定义的问题详情标准字段不包括？",
            options: [
                "type",
                "title",
                "stackTrace",
                "detail"
            ],
            answer: 2,
            rationale: "RFC 7807 标准字段：type、title、status、detail、instance。stackTrace 不应暴露给客户端。"
        },
        {
            id: "w17-1-q4",
            question: "RFC 7807 问题详情的媒体类型是什么？",
            options: [
                "application/json",
                "application/error+json",
                "application/problem+json",
                "application/api-error"
            ],
            answer: 2,
            rationale: "RFC 7807 定义的媒体类型是 application/problem+json（JSON）和 application/problem+xml（XML）。"
        },
        {
            id: "w17-1-q5",
            question: "为什么 HATEOAS 在实践中很少使用？",
            options: [
                "技术上无法实现",
                "增加响应体积、客户端仍需硬编码业务逻辑、ROI 不高",
                "浏览器不支持",
                "安全性问题"
            ],
            answer: 1,
            rationale: "HATEOAS 理论上实现解耦，但实践中增加响应体积、客户端仍需硬编码业务逻辑、投资回报率不高。"
        },
        {
            id: "w17-1-q6",
            question: "无状态约束的主要好处是什么？",
            options: [
                "减少网络开销",
                "水平扩展能力——任何服务器都能处理任何请求",
                "提高安全性",
                "减少数据库访问"
            ],
            answer: 1,
            rationale: "无状态使得任何服务器都能处理任何请求，实现水平扩展。代价是每次请求需要携带完整上下文。"
        },
        {
            id: "w17-1-q7",
            question: "RFC 7807 中哪个字段是问题类型的主要标识符？",
            options: [
                "title",
                "type",
                "status",
                "detail"
            ],
            answer: 1,
            rationale: "'Consumers MUST use the type string as the primary identifier for the problem type; the title string is advisory'。"
        },
        {
            id: "w17-1-q8",
            question: "REST 与 RPC 的主要区别是什么？",
            options: [
                "REST 更快",
                "RPC 更安全",
                "REST 以资源为中心（名词），RPC 以操作为中心（动词）",
                "REST 只能用 JSON"
            ],
            answer: 2,
            rationale: "REST 以资源为中心适合 CRUD 场景，RPC 以操作为中心适合复杂业务操作。"
        },
        {
            id: "w17-1-q9",
            question: "统一接口的子约束不包括？",
            options: [
                "资源标识",
                "通过表示操作资源",
                "强类型验证",
                "自描述消息"
            ],
            answer: 2,
            rationale: "统一接口包含：资源标识（URI）、通过表示操作资源、自描述消息、HATEOAS。强类型验证不是其中之一。"
        },
        {
            id: "w17-1-q10",
            question: "错误响应中应该避免什么？",
            options: [
                "HTTP 状态码",
                "错误类型标识",
                "内部实现细节（如堆栈跟踪、SQL 语句）",
                "人类可读的描述"
            ],
            answer: 2,
            rationale: "错误响应不应暴露内部实现细节，生产环境应返回通用错误信息，详细日志记录在服务端。"
        },
        {
            id: "w17-1-q11",
            question: "RFC 7807 的 detail 字段应该包含什么？",
            options: [
                "调试信息",
                "具体的解决建议而非调试信息",
                "堆栈跟踪",
                "源代码位置"
            ],
            answer: 1,
            rationale: "detail 提供'occurrence-specific explanation focusing on resolution rather than debugging'。"
        },
        {
            id: "w17-1-q12",
            question: "大多数 REST API 处于 Richardson 成熟度模型的哪个级别？",
            options: [
                "Level 0",
                "Level 1",
                "Level 2",
                "Level 3"
            ],
            answer: 2,
            rationale: "大多数 API 在 Level 2（使用 HTTP 动词），Level 3（HATEOAS）在实践中很少使用。"
        }
    ],
    "w17-2": [
        {
            id: "w17-2-q1",
            question: "RESTful URI 应该引用什么？",
            options: [
                "动作（动词）",
                "事物（名词）",
                "状态",
                "方法"
            ],
            answer: 1,
            rationale: "'RESTful URI should refer to a resource that is a thing (noun) instead of referring to an action (verb)'。"
        },
        {
            id: "w17-2-q2",
            question: "REST 定义的四种资源原型不包括？",
            options: [
                "Document",
                "Collection",
                "Action",
                "Store"
            ],
            answer: 2,
            rationale: "四种资源原型：Document（单个资源）、Collection（集合）、Store（客户端管理的仓库）、Controller（过程式概念）。"
        },
        {
            id: "w17-2-q3",
            question: "URL 命名应该使用什么提高可读性？",
            options: [
                "下划线 _",
                "连字符 -",
                "驼峰命名",
                "点号 ."
            ],
            answer: 1,
            rationale: "使用连字符提高可读性：/device-management/managed-devices 而非下划线或驼峰命名。"
        },
        {
            id: "w17-2-q4",
            question: "嵌套资源过深会带来什么问题？",
            options: [
                "安全性降低",
                "降低可用性，URL 过长",
                "数据库压力增大",
                "无法缓存"
            ],
            answer: 1,
            rationale: "过深的嵌套（超过 3 层）会降低可用性，可以使用顶级资源 + 过滤参数替代。"
        },
        {
            id: "w17-2-q5",
            question: "Google API 设计指南如何表示自定义方法？",
            options: [
                "使用动词 URL",
                "使用冒号语法：POST /users/123:activate",
                "使用查询参数",
                "使用特殊头部"
            ],
            answer: 1,
            rationale: "Google 建议使用冒号语法区分自定义方法和子资源：POST /users/123:activate。"
        },
        {
            id: "w17-2-q6",
            question: "集合资源应该使用什么命名？",
            options: [
                "单数名词",
                "复数名词",
                "动词",
                "形容词"
            ],
            answer: 1,
            rationale: "集合用复数（/users）、单个资源用标识符（/users/123）。"
        },
        {
            id: "w17-2-q7",
            question: "过滤、排序、分页应该放在哪里？",
            options: [
                "URL 路径",
                "请求体",
                "查询参数",
                "自定义头部"
            ],
            answer: 2,
            rationale: "过滤、排序、分页应使用查询参数：/devices?region=USA&sort=date&page=2。"
        },
        {
            id: "w17-2-q8",
            question: "URL 命名规范要求什么？",
            options: [
                "使用大写字母",
                "使用小写字母、避免尾随斜杠、不使用文件扩展名",
                "使用下划线分隔",
                "使用驼峰命名"
            ],
            answer: 1,
            rationale: "使用小写字母、使用正斜杠表示层级、避免尾随斜杠、不使用文件扩展名。"
        },
        {
            id: "w17-2-q9",
            question: "正斜杠在 URL 中表示什么？",
            options: [
                "可选参数",
                "层级关系",
                "版本号",
                "查询条件"
            ],
            answer: 1,
            rationale: "使用正斜杠表示层级：/customers/{id}/accounts 表示客户下的账户。"
        },
        {
            id: "w17-2-q10",
            question: "客户端管理的仓库资源类型叫什么？",
            options: [
                "Document",
                "Collection",
                "Store",
                "Controller"
            ],
            answer: 2,
            rationale: "Store 是客户端管理的仓库，如 /playlists（用户管理的播放列表）。"
        },
        {
            id: "w17-2-q11",
            question: "Controller 资源类型用于什么场景？",
            options: [
                "表示单个实体",
                "表示资源集合",
                "表示过程式概念（不适合 CRUD 的操作）",
                "表示客户端存储"
            ],
            answer: 2,
            rationale: "Controller 用于过程式概念，如 /checkout、/calculate，某些操作不适合 CRUD 模型。"
        },
        {
            id: "w17-2-q12",
            question: "嵌套资源的替代方案是什么？",
            options: [
                "使用更长的 URL",
                "扁平化设计 + 查询参数过滤",
                "使用数字 ID",
                "使用 POST 请求体"
            ],
            answer: 1,
            rationale: "替代方案：扁平化 /comments?post=456 或限制嵌套层数，选择取决于访问模式和缓存需求。"
        }
    ],
    "w17-3": [
        {
            id: "w17-3-q1",
            question: "HTTP 状态码的五个分类是什么？",
            options: [
                "信息、成功、重定向、客户端错误、服务器错误",
                "请求、响应、确认、拒绝、超时",
                "GET、POST、PUT、DELETE、PATCH",
                "认证、授权、验证、拒绝、重试"
            ],
            answer: 0,
            rationale: "五类：1xx 信息响应、2xx 成功、3xx 重定向、4xx 客户端错误、5xx 服务器错误。"
        },
        {
            id: "w17-3-q2",
            question: "201 Created 状态码用于什么场景？",
            options: [
                "获取资源成功",
                "资源创建成功（POST/PUT）",
                "资源更新成功",
                "资源删除成功"
            ],
            answer: 1,
            rationale: "201 Created 表示资源创建成功，通常用于 POST 请求，应返回 Location 头指向新资源。"
        },
        {
            id: "w17-3-q3",
            question: "401 和 403 的区别是什么？",
            options: [
                "401 是服务器错误，403 是客户端错误",
                "401 需要认证，403 已认证但无权限",
                "401 是临时错误，403 是永久错误",
                "没有区别"
            ],
            answer: 1,
            rationale: "401 Unauthorized 表示需要认证（未登录），403 Forbidden 表示已认证但无权限。"
        },
        {
            id: "w17-3-q4",
            question: "哪些 HTTP 方法是幂等的？",
            options: [
                "GET、POST、PUT",
                "GET、PUT、DELETE",
                "POST、PUT、DELETE",
                "GET、POST、DELETE"
            ],
            answer: 1,
            rationale: "GET、PUT、DELETE 是幂等的（执行多次与执行一次效果相同）；POST、PATCH 不是幂等的。"
        },
        {
            id: "w17-3-q5",
            question: "PUT 和 PATCH 的区别是什么？",
            options: [
                "PUT 更快",
                "PUT 完整替换，PATCH 部分更新",
                "PATCH 更安全",
                "没有区别"
            ],
            answer: 1,
            rationale: "PUT 是完整替换（需要发送整个资源），PATCH 是部分更新（只发送变更字段）。"
        },
        {
            id: "w17-3-q6",
            question: "429 状态码表示什么？",
            options: [
                "请求格式错误",
                "未授权",
                "限流触发（Too Many Requests）",
                "服务不可用"
            ],
            answer: 2,
            rationale: "429 Too Many Requests 表示限流触发，支持可选的 Retry-After 头。"
        },
        {
            id: "w17-3-q7",
            question: "307 和 302 重定向的区别是什么？",
            options: [
                "307 是永久重定向",
                "307 保持原 HTTP 方法，302 可能改变",
                "302 更安全",
                "没有区别"
            ],
            answer: 1,
            rationale: "307/308 保持原方法，301/302 可能将 POST 变 GET。永久重定向用 301/308，临时用 302/307。"
        },
        {
            id: "w17-3-q8",
            question: "204 No Content 状态码用于什么场景？",
            options: [
                "创建资源成功",
                "成功但无响应体（如 DELETE）",
                "资源不存在",
                "请求被接受但未处理"
            ],
            answer: 1,
            rationale: "204 No Content 表示成功但无响应体，常用于 DELETE 或不需要返回数据的 PUT/PATCH。"
        },
        {
            id: "w17-3-q9",
            question: "什么是幂等性？",
            options: [
                "操作必须成功",
                "操作执行多次与执行一次效果相同",
                "操作不会修改数据",
                "操作是原子的"
            ],
            answer: 1,
            rationale: "幂等操作执行多次与执行一次效果相同，对于重试机制和故障恢复至关重要。"
        },
        {
            id: "w17-3-q10",
            question: "HTTP 状态码由哪个 RFC 定义？",
            options: [
                "RFC 7807",
                "RFC 9110",
                "RFC 6749",
                "RFC 6455"
            ],
            answer: 1,
            rationale: "HTTP 语义（包括状态码）由 RFC 9110 定义。"
        },
        {
            id: "w17-3-q11",
            question: "X-Request-ID 头的作用是什么？",
            options: [
                "认证",
                "限流",
                "请求追踪",
                "版本控制"
            ],
            answer: 2,
            rationale: "X-Request-ID 用于请求追踪，在响应中返回，记录到日志中用于问题排查。"
        },
        {
            id: "w17-3-q12",
            question: "304 Not Modified 状态码用于什么？",
            options: [
                "资源已删除",
                "资源未变化，使用缓存",
                "请求被重定向",
                "服务器错误"
            ],
            answer: 1,
            rationale: "304 Not Modified 表示缓存的响应仍然有效，用于 ETags 和条件请求。"
        }
    ],
    "w17-4": [
        {
            id: "w17-4-q1",
            question: "API 版本管理的主流策略不包括？",
            options: [
                "URL 路径版本",
                "请求头版本",
                "响应体版本",
                "查询参数版本"
            ],
            answer: 2,
            rationale: "三种主流策略：URL 路径版本（/v1/users）、请求头版本、查询参数版本。响应体不用于版本控制。"
        },
        {
            id: "w17-4-q2",
            question: "Stripe 使用什么版本策略？",
            options: [
                "数字版本号",
                "日期版本",
                "语义化版本",
                "无版本"
            ],
            answer: 1,
            rationale: "'API versions are named with the date they were released'——Stripe 使用日期版本避免版本号焦虑。"
        },
        {
            id: "w17-4-q3",
            question: "以下哪种变更是向后兼容的？",
            options: [
                "删除字段",
                "修改字段类型",
                "新增可选字段",
                "修改必填性"
            ],
            answer: 2,
            rationale: "'Adding a new field is generally backward-compatible'。删除字段、修改类型、修改必填性都是 Breaking Change。"
        },
        {
            id: "w17-4-q4",
            question: "SemVer 的 MAJOR 版本号表示什么？",
            options: [
                "Bug 修复",
                "向后兼容的新功能",
                "不兼容的变更",
                "安全更新"
            ],
            answer: 2,
            rationale: "SemVer：MAJOR 不兼容变更、MINOR 向后兼容的新功能、PATCH 向后兼容的 bug 修复。"
        },
        {
            id: "w17-4-q5",
            question: "URL 版本的争议是什么？",
            options: [
                "技术上无法实现",
                "违反 REST 原则（同一资源多个 URL）",
                "性能问题",
                "安全性问题"
            ],
            answer: 1,
            rationale: "URL 版本简单直观但违反 REST 原则——同一资源不应有多个 URI。替代方案是内容协商。"
        },
        {
            id: "w17-4-q6",
            question: "如何表示 API 即将废弃？",
            options: [
                "删除端点",
                "返回 500 错误",
                "使用 Deprecation 和 Sunset 响应头",
                "不做任何标记"
            ],
            answer: 2,
            rationale: "使用响应头：Deprecation: true、Sunset: <日期> 通知客户端 API 即将废弃。"
        },
        {
            id: "w17-4-q7",
            question: "Breaking Change 不包括？",
            options: [
                "删除端点",
                "删除字段",
                "新增可选字段",
                "修改错误码"
            ],
            answer: 2,
            rationale: "Breaking Change 包括：删除端点、删除字段、修改字段类型、修改必填性、修改错误码。新增可选字段不是。"
        },
        {
            id: "w17-4-q8",
            question: "版本爆炸问题的解决策略不包括？",
            options: [
                "限制同时支持的版本数",
                "设置版本生命周期",
                "永久支持所有版本",
                "强制升级通知"
            ],
            answer: 2,
            rationale: "维护多个版本成本高。策略：限制版本数（如最多 3 个）、设置生命周期、强制升级通知。"
        },
        {
            id: "w17-4-q9",
            question: "Postel 法则是什么？",
            options: [
                "所有字段必须严格验证",
                "发送严格，接收宽容",
                "只接受最新版本",
                "拒绝所有未知字段"
            ],
            answer: 1,
            rationale: "Postel 法则（鲁棒性原则）：发送时严格遵守规范，接收时宽容处理输入。"
        },
        {
            id: "w17-4-q10",
            question: "Stripe 的客户端默认使用什么版本？",
            options: [
                "最新版本",
                "最旧版本",
                "账户创建时的版本",
                "无默认版本"
            ],
            answer: 2,
            rationale: "Stripe 客户端默认使用账户创建时的版本，通过 Stripe-Version 头可以指定其他版本。"
        },
        {
            id: "w17-4-q11",
            question: "如何自动检测 Breaking Change？",
            options: [
                "人工审查",
                "使用 OpenAPI diff 工具对比规范",
                "发布后观察错误",
                "客户反馈"
            ],
            answer: 1,
            rationale: "使用 OpenAPI diff 工具自动检测破坏性变更，维护多版本测试套件，使用契约测试。"
        },
        {
            id: "w17-4-q12",
            question: "内容协商版本控制使用什么头部？",
            options: [
                "Content-Type",
                "Accept",
                "Authorization",
                "X-API-Version"
            ],
            answer: 1,
            rationale: "内容协商使用 Accept 头：Accept: application/vnd.myapi.v2+json，根据头部路由到不同处理器。"
        }
    ]
}
