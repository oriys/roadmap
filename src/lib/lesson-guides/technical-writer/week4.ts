import type { LessonGuide } from "../types"

export const week4Guides: Record<string, LessonGuide> = {
    "tw-w4-1": {
        lessonId: "tw-w4-1",
        background: [
            "【API 文档必需内容】Google 规范要求：每个类/接口、每个常量/字段/枚举、每个方法及其参数/返回值/异常都必须有完整描述。",
            "【方法描述动词选择】Google：操作并返回数据用动作动词开头；布尔 getter 用'Checks whether...'；其他 getter 用'Gets the...'；无返回值用'Sets'/'Updates'/'Deletes'等。",
            "【RFC 7807 Problem Details】标准化 API 错误响应格式：type（问题类型 URI）、title（人可读摘要）、status（HTTP 状态码）、detail（具体说明）、instance（实例 URI）。",
            "【Stripe OpenAPI 参考】Stripe 维护的 OpenAPI 规范是业界典范，定义了 x-expandableFields、x-expansionResources 等自定义扩展字段，支持对象扩展功能。",
            "【API 文档核心结构】概览（Overview）、认证（Authentication）、速率限制（Rate Limiting）、错误模型（Error Model）、版本与变更（Versioning）——缺一不可。"
        ],
        keyDifficulties: [
            "【描述一致性】现在时态（'Returns a bird' 非 'Returned'）、首句简洁独特、避免重复类名、避免'this class will...'等模式。",
            "【参数文档完整性】非布尔参数以'The'或'A'开头；布尔参数需说明 true/false 两种情况（'If true, ...; if false, ...'）；包含默认值说明（'Default: ...'）。",
            "【弃用处理】Google：弃用时必须'告知用户应使用何种替代方案'，说明首次弃用的版本，仅第一句出现在摘要中。",
            "【错误响应设计】RFC 7807：'Consumers MUST use the type string as the primary identifier'——type 是主标识符，title 是辅助说明。"
        ],
        handsOnPath: [
            "为一个 API 端点写完整文档：方法描述（动词开头）、请求参数（类型/必需/默认值）、响应字段、状态码、错误响应（RFC 7807 格式）。",
            "设计错误响应格式（参考 RFC 7807）：包含 type（问题类型 URI）、title、status、detail、instance，为常见错误定义标准类型 URI。",
            "研究 Stripe API 文档：观察其端点组织、参数描述、响应示例、错误处理的呈现方式。",
            "为一个方法添加弃用标记：说明替代方案、废弃版本、迁移步骤，确保首句可独立出现在摘要中。"
        ],
        selfCheck: [
            "【动词使用】你的方法描述是否以正确的动词开头？Getter 用'Gets'，操作用动作动词？",
            "【参数完整】参数文档是否包含：类型、是否必需、默认值、约束条件？布尔参数是否说明了两种情况？",
            "【错误格式】错误响应是否使用统一格式（如 RFC 7807）？type 字段是否指向可解析的 URI？",
            "【弃用处理】废弃的 API 是否明确说明了替代方案和迁移路径？",
            "【首句独立】类/方法的首句是否可以独立出现在摘要中？是否简洁且不重复名称？"
        ],
        extensions: [
            "【RFC 7807 深入】学习 Problem Details 完整规范：https://www.rfc-editor.org/rfc/rfc7807 —— 理解扩展成员和安全考量。",
            "【Google AIP】API 改进提案：https://google.aip.dev/ —— Google 的 API 设计最佳实践集合。",
            "【Stripe 学习】研究 Stripe OpenAPI 仓库：https://github.com/stripe/openapi —— 理解其自定义扩展字段的设计。",
            "【版本控制策略】学习 API 版本管理：URL 路径 vs Header vs 查询参数的优劣对比。"
        ],
        sourceUrls: [
            "https://developers.google.com/style/api-reference-comments",
            "https://github.com/stripe/openapi",
            "https://www.rfc-editor.org/rfc/rfc7807"
        ]
    },
    "tw-w4-2": {
        lessonId: "tw-w4-2",
        background: [
            "OpenAPI Specification（原 Swagger Specification）是描述 REST API 的标准格式，用 YAML 或 JSON 编写，易于人类和机器理解。",
            "OpenAPI 可以描述：端点和操作（GET /users、POST /users）、操作参数、输入输出格式、认证方法、联系信息和许可证。",
            "Swagger 工具集：Swagger Editor（浏览器编辑器）、Swagger UI（生成交互式文档）、Swagger Codegen（生成服务器/客户端代码）。",
            "OpenAPI 的核心价值：单一真相来源（Single Source of Truth）——从同一份定义生成文档、客户端库、测试用例、Mock 服务器。"
        ],
        keyDifficulties: [
            "OpenAPI 结构理解：info（元信息）、servers（服务器地址）、paths（端点定义）、components（可复用组件）、security（安全定义）。",
            "Schema 定义：如何用 JSON Schema 描述请求/响应的数据结构，包括类型、必需字段、枚举、嵌套对象。",
            "从现有 API 生成 OpenAPI：手动编写 vs 从代码注解生成 vs 从流量捕获推断——各有优劣。",
            "OpenAPI 版本差异：2.0（Swagger）vs 3.0 vs 3.1——新版本支持更多功能但工具兼容性需考虑。"
        ],
        handsOnPath: [
            "用 Swagger Editor 创建一个简单 API 的 OpenAPI 定义：至少包含一个 GET 和一个 POST 端点。",
            "用 Swagger UI 预览你的 API 文档，尝试发送测试请求。",
            "定义 components/schemas：创建可复用的数据模型（如 User、Error），在多个端点中引用。",
            "为 API 添加安全定义：API Key 或 OAuth2，说明如何认证。"
        ],
        selfCheck: [
            "你能否读懂一份 OpenAPI 定义文件？知道每个字段的作用？",
            "你的 OpenAPI 定义是否完整描述了所有端点、参数、响应？",
            "你是否使用了 components 来避免重复定义？",
            "你的 OpenAPI 定义是否可以用 Swagger UI 正确渲染？",
            "你是否为 API 定义了安全方案？"
        ],
        extensions: [
            "深入学习 OpenAPI 3.1 规范：https://spec.openapis.org/oas/latest.html",
            "了解 Redocly：https://redocly.com/ —— 更美观的 API 文档生成工具。",
            "学习 API-first 开发流程：先写 OpenAPI 定义，再实现代码。",
            "配置 CI 自动验证 OpenAPI 定义的有效性。"
        ],
        sourceUrls: [
            "https://spec.openapis.org/oas/latest.html",
            "https://swagger.io/docs/specification/about/",
            "https://redocly.com/docs/"
        ]
    },
    "tw-w4-3": {
        lessonId: "tw-w4-3",
        background: [
            "代码示例是 API 文档可用性的关键——用户需要复制粘贴能运行的代码。'Show, don't tell' 是核心原则。",
            "Google 风格指南要求：遵循语言风格指南、每级缩进两个空格、80 字符换行、代码块使用 preformatted text。",
            "代码省略处理：使用该语言的注释表示省略（如 // ...），不使用省略号；包含省略的代码块不应设置为可复制。",
            "多语言示例：API 文档通常需要提供多种语言的代码示例（curl、Python、JavaScript、Go 等），覆盖主要用户群体。"
        ],
        keyDifficulties: [
            "示例的可运行性：示例必须能直接复制粘贴运行。注意：依赖版本、环境变量、前置条件都要说明。",
            "示例的简洁性：展示最小可用代码，避免不必要的复杂性。错误处理可以简化或单独示例。",
            "多语言维护成本：多语言示例需要同步更新，容易出现不一致。考虑自动生成或使用代码生成工具。",
            "SDK vs Raw API：是展示直接 HTTP 调用还是官方 SDK？通常两者都需要，满足不同用户需求。"
        ],
        handsOnPath: [
            "为一个 API 端点写三种语言的代码示例：curl、Python、JavaScript。确保每个都能直接运行。",
            "为示例添加介绍性说明：解释代码做了什么、需要什么前置条件、预期输出是什么。",
            "展示错误处理：在单独的代码块中展示如何捕获和处理 API 返回的错误。",
            "测试你的代码示例：实际运行每个示例，确保输出与文档描述一致。"
        ],
        selfCheck: [
            "你的代码示例是否可以直接复制粘贴运行？是否说明了依赖和前置条件？",
            "代码示例是否遵循了该语言的风格指南？格式是否一致？",
            "是否提供了多语言示例？覆盖了主要用户群体？",
            "示例是否足够简洁？是否只展示了核心逻辑？",
            "你是否实际运行过每个代码示例？"
        ],
        extensions: [
            "学习 Google 代码示例风格指南：https://developers.google.com/style/code-samples",
            "了解 SDK 文档的写法：https://learn.microsoft.com/en-us/style-guide/developer-content/",
            "探索代码示例自动化工具：从 OpenAPI 定义生成多语言示例。",
            "学习使用 Jupyter Notebook 或 Colab 提供可交互的代码示例。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/guide/writing/reStructuredText.html",
            "https://developers.google.com/style/code-samples",
            "https://learn.microsoft.com/en-us/style-guide/developer-content/code-examples"
        ]
    },
    "tw-w4-4": {
        lessonId: "tw-w4-4",
        background: [
            "CLI（命令行接口）文档的核心：命令用途、参数说明（短/长选项）、示例、返回值/退出码、错误信息。",
            "GNU 命令行选项标准：短选项用单破折号（-v）、长选项用双破折号（--verbose）、选项可以有参数、选项顺序通常不敏感。",
            "CLI 框架（Cobra、Click）提供了自动生成帮助信息的能力，但仍需要手动编写详细的使用指南和示例。",
            "CLI 文档的层次：快速参考（常用命令速查）、完整参考（所有命令和选项）、教程（常见任务的步骤）。"
        ],
        keyDifficulties: [
            "命令层级组织：子命令的嵌套（git remote add）、全局选项 vs 子命令选项、如何让用户快速找到所需命令。",
            "参数格式说明：必需 vs 可选（用 [] 表示可选）、多值参数、互斥选项、默认值。",
            "退出码文档：不同退出码代表什么（0 成功、非 0 失败）、用户如何在脚本中使用退出码。",
            "环境变量与配置：CLI 支持的环境变量、配置文件位置、优先级规则（命令行 > 环境变量 > 配置文件）。"
        ],
        handsOnPath: [
            "为一个 CLI 工具写命令参考：包含所有命令、选项、参数、默认值，按逻辑分组。",
            "为最常用的 5 个命令写详细示例：展示输入、输出、常见选项组合。",
            "记录退出码：列出所有可能的退出码和含义，说明如何在脚本中检查。",
            "写一份 CLI 快速入门：5 分钟内完成安装和第一次使用，覆盖最核心的功能。"
        ],
        selfCheck: [
            "用户能否从文档快速找到所需命令？命令是否按逻辑分组？",
            "每个命令是否说明了：用途、必需参数、可选参数、默认值？",
            "是否有足够的示例？示例是否覆盖了常见使用场景？",
            "退出码是否有文档？用户能否在脚本中正确使用？",
            "环境变量和配置文件是否有说明？优先级是否清晰？"
        ],
        extensions: [
            "学习 GNU 命令行标准：https://www.gnu.org/prep/standards/html_node/Command_002dLine-Interfaces.html",
            "了解 POSIX 命令约定：选项、参数、操作数的标准格式。",
            "研究 kubectl、docker、git 的 CLI 文档组织方式。",
            "使用 CLI 框架（Cobra、Click）自动生成基础文档，再手动补充示例。"
        ],
        sourceUrls: [
            "https://www.gnu.org/prep/standards/html_node/Command_002dLine-Interfaces.html",
            "https://cobra.dev/",
            "https://click.palletsprojects.com/"
        ]
    }
}
