import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "api-w2-1": {
        lessonId: "api-w2-1",
        background: [
            "【语义版本控制】SemVer 规范定义版本号格式为 MAJOR.MINOR.PATCH：MAJOR 版本表示不兼容的 API 变更，MINOR 版本表示向后兼容的功能新增，PATCH 版本表示向后兼容的 bug 修复。",
            "【Google API 版本策略】Google AIP-185 规定：'APIs must not expose minor or patch version numbers'——只暴露主版本号（v1、v2），次版本和补丁版本对用户透明，用户自动获得向后兼容的更新。",
            "【URI 版本控制】在路径中包含版本号（如 /v1/users），优点是版本明确、易于缓存、便于调试；缺点是 URI 繁杂、不够 RESTful、HATEOAS 实现复杂。",
            "【Header 版本控制】通过请求头传递版本（如 Api-Version: 2），优点是 URI 干净、更符合 REST 原则；缺点是对浏览器不友好、缓存困难、需要 L7 负载均衡器支持。",
            "【Media Type 版本控制】在 Accept 头使用自定义媒体类型（如 application/vnd.api.v2+json），最符合 REST 精神，适合 HATEOAS，但实现最复杂。",
            "【版本共存策略】同一 API 的多个版本应该在合理过渡期内共存，允许客户端按自己节奏迁移。Google 建议旧版本需要经过'reasonable, well-communicated deprecation period'。"
        ],
        keyDifficulties: [
            "【版本选择困难】URI 版本最简单直观但不够优雅，Header 版本更 RESTful 但调试困难，Media Type 版本最理想但实现复杂。需要根据团队能力和客户端特点选择。",
            "【版本粒度】过于频繁发布新主版本会增加维护负担，过于保守则限制 API 演进。建议累积足够多的破坏性变更再发布新主版本，而非每个变更一个版本。",
            "【多版本维护成本】同时维护多个 API 版本的成本随版本数量线性增长。需要建立版本淘汰机制，限制同时支持的版本数量（如最多 2-3 个主版本）。",
            "【预发布版本管理】Alpha/Beta 版本如何过渡到稳定版？Google 建议使用频道策略（v1alpha、v1beta、v1）或基于发布的策略（v1beta1、v1beta2）。",
            "【版本自动固定】Stripe 策略：用户首次请求时自动固定到当时的最新版本，后续请求沿用该版本。这需要记录每个用户的版本偏好并支持覆盖。"
        ],
        handsOnPath: [
            "选择版本策略：评估团队需求，选择 URI 版本（简单直观）或 Header 版本（更灵活），在 OpenAPI 规范中明确版本信息。",
            "实现版本路由：在 API 网关或框架中配置版本路由，将 /v1/* 和 /v2/* 路由到不同的服务或处理器。",
            "配置版本协商：如果使用 Header 版本，设置默认版本和版本范围验证，返回 400 错误处理无效版本。",
            "实现版本变换层：参考 Stripe 模式，创建版本变换模块，将新版本响应转换为旧版本格式，减少代码重复。",
            "设置版本监控：记录各版本的使用量和错误率，识别低使用量版本以便淘汰，监控版本迁移进度。",
            "文档版本关联：为每个 API 版本生成独立文档，突出显示版本差异和迁移说明，参考 Stripe 的版本化文档策略。"
        ],
        selfCheck: [
            "语义版本控制（SemVer）的 MAJOR、MINOR、PATCH 各代表什么？",
            "URI 版本控制和 Header 版本控制各有什么优缺点？",
            "Google API 为什么只暴露主版本号而不暴露次版本号？",
            "Stripe 的日期版本策略有什么优点？如何实现版本自动固定？",
            "如何在 API 网关中配置多版本路由？",
            "预发布版本（Alpha/Beta）应该如何管理和过渡？"
        ],
        extensions: [
            "研究 GitHub API 的版本策略，了解其从 v3 到 GraphQL 的演进过程。",
            "学习 Kubernetes API 的版本管理，理解 API Group 和版本优先级。",
            "探索 API 版本兼容性检测工具如 openapi-diff、oasdiff，在 CI 中自动检测破坏性变更。",
            "研究 gRPC 的版本管理策略，对比 REST API 版本控制的差异。"
        ],
        sourceUrls: [
            "https://google.aip.dev/185",
            "https://semver.org/",
            "https://roadmap.sh/api-design"
        ]
    },
    "api-w2-2": {
        lessonId: "api-w2-2",
        background: [
            "【向后兼容定义】Google AIP-180：向后兼容的变更不会破坏现有客户端。可以添加新的接口、方法、字段、枚举值，但不能删除或重命名现有组件。",
            "【破坏性变更类型】常见破坏性变更：删除或重命名字段/方法/端点、更改字段类型、将可选字段改为必需、更改默认值、更改错误码含义。这些都需要新主版本。",
            "【弃用周期】最佳实践建议 6-12 个月的弃用通知期。Google 建议 Beta 功能的弃用周期至少 180 天。弃用期间保持功能可用，只是标记为将被移除。",
            "【Stripe 版本变换】Stripe 使用版本变换模块封装破坏性变更，每个模块记录变更内容、定义响应转换逻辑。系统按时间顺序执行变换直到目标版本。",
            "【特性开关集成】将破坏性变更放在特性开关后面，先对内部用户或 Beta 测试者开放，收集反馈后再全量发布。降低风险并允许快速回滚。",
            "【双写策略】在迁移期间同时支持旧格式和新格式的写入，确保新旧客户端都能正常工作。迁移完成后移除旧格式支持。"
        ],
        keyDifficulties: [
            "【添加必需字段】Google AIP-180 明确禁止向现有请求消息添加必需字段——这会破坏不发送该字段的现有客户端。只能添加可选字段。",
            "【字段类型变更】即使新类型在语义上兼容（如 int32 改为 int64），也不应该更改字段类型。不同语言的代码生成器可能无法正确处理。",
            "【枚举值添加】请求消息中的枚举可以自由添加新值，但响应消息中添加新枚举值需要谨慎——旧客户端可能无法处理未知的枚举值。",
            "【默认值陷阱】不能更改字段的默认值，因为这会改变未设置该字段时的资源行为。如果需要更改默认行为，只能引入新字段。",
            "【资源名称不可变】资源名称（ID、路径结构）在版本间必须保持一致，甚至跨越主版本。用户可能已经存储了这些名称作为引用。"
        ],
        handsOnPath: [
            "建立弃用流程：定义弃用公告模板（包含弃用日期、移除日期、迁移说明），在 OpenAPI 中使用 deprecated: true 标记。",
            "实现版本变换：创建变换函数将 v2 响应转换为 v1 格式，使用适配器模式隔离版本差异，支持向后兼容。",
            "配置弃用告警：在响应头中添加 Deprecation 和 Sunset 头（RFC 8594），监控弃用 API 的使用量，主动通知活跃用户。",
            "实现字段演进：演示如何安全添加可选字段、如何引入新字段替代旧字段、如何处理字段重命名场景。",
            "设置迁移仪表板：创建 Dashboard 显示各版本使用量、弃用 API 调用趋势、客户端迁移进度。",
            "编写迁移指南：为每个破坏性变更编写详细的迁移文档，包含代码示例、常见问题、时间线。"
        ],
        selfCheck: [
            "什么是向后兼容的变更？什么是破坏性变更？",
            "为什么不能向现有请求消息添加必需字段？",
            "弃用 API 功能时应该提前多长时间通知用户？",
            "Stripe 的版本变换模块如何工作？有什么优点？",
            "如何使用 HTTP 头告知客户端 API 即将弃用？",
            "资源名称为什么在版本间必须保持一致？"
        ],
        extensions: [
            "学习 GraphQL 的 @deprecated 指令，了解 Schema 级别的弃用机制。",
            "研究 Kubernetes 的 API 弃用政策，了解其版本移除流程。",
            "探索 API 变更日志自动生成工具，从 OpenAPI diff 生成 Changelog。",
            "学习 gRPC 的字段演进规则，理解 Protobuf 的向后兼容保证。"
        ],
        sourceUrls: [
            "https://zuplo.com/learning-center/api-versioning-backward-compatibility-best-practices",
            "https://google.aip.dev/180",
            "https://stripe.com/blog/api-versioning"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "api-w2-1": [
        {
            id: "api-w2-1-q1",
            question: "语义版本控制（SemVer）中，什么情况下应该增加 MAJOR 版本号？",
            options: [
                "添加向后兼容的新功能",
                "修复向后兼容的 bug",
                "进行不兼容的 API 变更",
                "更新文档"
            ],
            answer: 2,
            rationale: "SemVer 规范：'increment the MAJOR version when you make incompatible API changes'——不兼容的 API 变更需要增加主版本号。"
        },
        {
            id: "api-w2-1-q2",
            question: "Google API 为什么不对外暴露次版本号和补丁版本号？",
            options: [
                "为了简化实现",
                "用户自动获得向后兼容的更新，无需迁移",
                "次版本号没有意义",
                "为了兼容旧系统"
            ],
            answer: 1,
            rationale: "Google AIP-185 规定 API 只暴露主版本号。用户接收的是原地升级，包含功能增强而无需迁移，次版本更新对用户透明。"
        },
        {
            id: "api-w2-1-q3",
            question: "URI 版本控制（如 /v1/users）的主要优点是什么？",
            options: [
                "最符合 REST 原则",
                "对浏览器友好，版本明确可见，易于缓存和调试",
                "实现最复杂",
                "不需要修改代码"
            ],
            answer: 1,
            rationale: "URI 版本控制的优点：版本明确、易于缓存、便于调试、对浏览器友好。缺点是 URI 繁杂、不够 RESTful。"
        },
        {
            id: "api-w2-1-q4",
            question: "Header 版本控制相比 URI 版本控制的缺点是什么？",
            options: [
                "版本号太长",
                "对浏览器不友好、缓存困难、需要 L7 负载均衡器支持",
                "不支持多版本",
                "无法与 OpenAPI 集成"
            ],
            answer: 1,
            rationale: "Header 版本控制的缺点：对浏览器不友好（无法直接在地址栏测试）、缓存困难（需要 Vary 头）、需要 L7 负载均衡器解析 Header。"
        },
        {
            id: "api-w2-1-q5",
            question: "Stripe 使用什么格式的版本号？",
            options: [
                "语义版本号（v1.0.0）",
                "主版本号（v1、v2）",
                "日期版本号（如 2017-05-25）",
                "数字递增版本号"
            ],
            answer: 2,
            rationale: "Stripe 使用滚动日期版本（如 2017-05-25）而非传统的 v1/v2 方案，使增量升级更容易同时保持向后兼容。"
        },
        {
            id: "api-w2-1-q6",
            question: "Stripe 的版本自动固定机制是如何工作的？",
            options: [
                "用户需要手动指定版本",
                "总是使用最新版本",
                "用户首次请求时自动固定到当时的版本，后续沿用",
                "每次请求随机选择版本"
            ],
            answer: 2,
            rationale: "Stripe 在用户首次请求时自动将账户固定到当时的最新 API 版本。用户可以通过 Stripe-Version 头覆盖或在仪表板中升级。"
        },
        {
            id: "api-w2-1-q7",
            question: "Google 建议 API 的 Alpha 和 Beta 版本应该如何标识？",
            options: [
                "不需要特殊标识",
                "使用 v1alpha、v1beta 后缀或 v1beta1、v1beta2 编号",
                "使用 v0.1、v0.2 版本号",
                "使用预发布日期"
            ],
            answer: 1,
            rationale: "Google 建议使用频道策略（v1alpha、v1beta、v1）或基于发布的策略（v1beta1、v1beta2），稳定频道不附加后缀。"
        },
        {
            id: "api-w2-1-q8",
            question: "Media Type 版本控制的格式是什么？",
            options: [
                "Accept: application/json; version=2",
                "Accept: application/vnd.api.v2+json",
                "Accept: v2/json",
                "X-Version: 2"
            ],
            answer: 1,
            rationale: "Media Type 版本控制在 Accept 头使用自定义媒体类型（如 application/vnd.contoso.v2+json），最符合 REST 精神但实现最复杂。"
        },
        {
            id: "api-w2-1-q9",
            question: "SemVer 中，版本 0.y.z 有什么特殊含义？",
            options: [
                "表示正式发布",
                "表示初始开发阶段，API 可以自由变更",
                "表示 bug 修复版本",
                "表示预发布版本"
            ],
            answer: 1,
            rationale: "SemVer 规定版本 0.y.z 保留给初始开发阶段，此时 API 变更可以自由发生，不受向后兼容约束。"
        },
        {
            id: "api-w2-1-q10",
            question: "同时维护多个 API 版本时，建议的最大版本数量是多少？",
            options: [
                "不限制",
                "只维护 1 个版本",
                "2-3 个主版本",
                "10 个以上"
            ],
            answer: 2,
            rationale: "同时维护多个版本的成本随版本数量线性增长。建议限制同时支持的版本数量（如 2-3 个主版本），建立版本淘汰机制。"
        },
        {
            id: "api-w2-1-q11",
            question: "SemVer 预发布版本的格式是什么？",
            options: [
                "1.0.0.alpha",
                "1.0.0-alpha",
                "1.0.0_alpha",
                "alpha-1.0.0"
            ],
            answer: 1,
            rationale: "SemVer 使用连字符语法表示预发布版本：1.0.0-alpha。预发布版本的优先级低于对应的正式版本（1.0.0-alpha < 1.0.0）。"
        },
        {
            id: "api-w2-1-q12",
            question: "选择 API 版本策略时应该考虑哪些因素？",
            options: [
                "只考虑实现复杂度",
                "API 受众、更新频率、复杂度、团队能力、客户端特点",
                "只考虑性能",
                "只考虑安全性"
            ],
            answer: 1,
            rationale: "选择版本策略需要综合考虑：API 受众（内部/外部）、更新频率、API 复杂度、团队能力、客户端特点（浏览器/移动端/服务端）。"
        }
    ],
    "api-w2-2": [
        {
            id: "api-w2-2-q1",
            question: "根据 Google AIP-180，以下哪种变更是向后兼容的？",
            options: [
                "删除一个字段",
                "重命名一个方法",
                "添加一个新的可选字段",
                "将可选字段改为必需"
            ],
            answer: 2,
            rationale: "Google AIP-180：可以在同一主版本中添加新的字段（必须是可选的）。删除、重命名、改变必需性都是破坏性变更。"
        },
        {
            id: "api-w2-2-q2",
            question: "为什么不能向现有请求消息添加必需字段？",
            options: [
                "会增加消息大小",
                "会破坏不发送该字段的现有客户端",
                "技术上无法实现",
                "会降低性能"
            ],
            answer: 1,
            rationale: "Google AIP-180 明确禁止：'新的必需字段不能添加到现有请求消息或资源中'——这会破坏不发送该字段的现有客户端。"
        },
        {
            id: "api-w2-2-q3",
            question: "弃用 API 功能时，建议的通知周期是多长？",
            options: [
                "1-2 周",
                "1 个月",
                "6-12 个月",
                "不需要通知"
            ],
            answer: 2,
            rationale: "最佳实践建议 6-12 个月的弃用通知期。Google 建议 Beta 功能的弃用周期至少 180 天，给用户足够的迁移时间。"
        },
        {
            id: "api-w2-2-q4",
            question: "Stripe 的版本变换模块有什么作用？",
            options: [
                "加密 API 响应",
                "将新版本响应转换为旧版本格式，支持多版本共存",
                "压缩数据",
                "记录日志"
            ],
            answer: 1,
            rationale: "Stripe 使用版本变换模块封装破坏性变更，定义响应转换逻辑。系统按时间顺序执行变换直到目标版本，减少代码重复。"
        },
        {
            id: "api-w2-2-q5",
            question: "为什么即使新类型语义兼容也不应该更改字段类型？",
            options: [
                "性能原因",
                "不同语言的代码生成器可能无法正确处理类型变更",
                "安全原因",
                "没有理由，可以更改"
            ],
            answer: 1,
            rationale: "Google AIP-180 禁止更改字段类型，即使新类型向后兼容（如 int32 改为 int64）。不同语言的代码生成器可能无法正确处理。"
        },
        {
            id: "api-w2-2-q6",
            question: "向响应消息的枚举类型添加新值时需要注意什么？",
            options: [
                "没有任何限制",
                "需要谨慎，旧客户端可能无法处理未知的枚举值",
                "必须同时更新客户端",
                "只能在主版本升级时添加"
            ],
            answer: 1,
            rationale: "Google AIP-180：请求消息枚举可以自由添加新值，但响应消息枚举需要谨慎——旧客户端代码可能无法优雅处理未知枚举值。"
        },
        {
            id: "api-w2-2-q7",
            question: "为什么不能更改字段的默认值？",
            options: [
                "技术上不可能",
                "会改变未设置该字段时的资源行为，破坏向后兼容",
                "会增加消息大小",
                "安全原因"
            ],
            answer: 1,
            rationale: "Google AIP-180：不能更改默认值，因为这会改变未设置该字段时的资源行为。如果需要更改默认行为，只能引入新字段。"
        },
        {
            id: "api-w2-2-q8",
            question: "哪些 HTTP 头可以用来通知客户端 API 即将弃用？",
            options: [
                "Content-Type 和 Accept",
                "Deprecation 和 Sunset（RFC 8594）",
                "Cache-Control 和 Expires",
                "Authorization 和 Cookie"
            ],
            answer: 1,
            rationale: "RFC 8594 定义了 Deprecation 头（表示 API 已弃用）和 Sunset 头（表示 API 将在何时停止服务），用于通知客户端迁移。"
        },
        {
            id: "api-w2-2-q9",
            question: "资源名称（如 ID、路径结构）在版本间有什么要求？",
            options: [
                "每个版本可以不同",
                "必须保持一致，即使跨越主版本",
                "只在同一主版本内一致",
                "没有要求"
            ],
            answer: 1,
            rationale: "Google AIP-180：资源名称在版本间必须保持一致，甚至跨越主版本变更。用户可能已经存储了这些名称作为引用。"
        },
        {
            id: "api-w2-2-q10",
            question: "什么是双写策略？",
            options: [
                "同时向两个数据库写入",
                "在迁移期间同时支持旧格式和新格式的写入",
                "写入两次以确保可靠性",
                "同时发送两个请求"
            ],
            answer: 1,
            rationale: "双写策略：在迁移期间同时支持旧格式和新格式的写入，确保新旧客户端都能正常工作。迁移完成后移除旧格式支持。"
        },
        {
            id: "api-w2-2-q11",
            question: "在 OpenAPI 规范中如何标记已弃用的操作？",
            options: [
                "使用 obsolete: true",
                "使用 deprecated: true",
                "添加 @deprecated 注释",
                "在描述中注明"
            ],
            answer: 1,
            rationale: "OpenAPI 规范使用 deprecated: true 字段标记已弃用的操作、参数或 Schema。工具会在文档中突出显示弃用状态。"
        },
        {
            id: "api-w2-2-q12",
            question: "Google 建议已弃用的 Beta 功能应该在多长时间后移除？",
            options: [
                "30 天",
                "90 天",
                "180 天",
                "1 年"
            ],
            answer: 2,
            rationale: "Google 建议 Beta 频道的弃用功能在 180 天后移除。已弃用的功能不能从 alpha 升级到 beta，也不能从 beta 升级到稳定版。"
        }
    ]
}
