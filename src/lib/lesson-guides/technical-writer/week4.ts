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
            "【OpenAPI 定义】OAS 官方定义：'The OpenAPI Specification defines a standard, programming language-agnostic interface description for HTTP APIs'——让人类和机器都能理解 API 能力，无需访问源码。",
            "【Swagger 定位】Swagger 是'a set of open-source tools built around the OpenAPI Specification'——包括 Editor（浏览器编写）、UI（交互式文档）、Codegen（40+ 语言代码生成）、Parser（解析库）。",
            "【OpenAPI 描述内容】可描述：端点（/users）及其操作、每个操作的参数和输入输出、安全与认证方式、API 元数据（联系人、许可证、服务条款）。",
            "【核心结构组件】Root Object 包含：openapi（版本号，必需）、info（API 元数据，必需）、paths（端点定义）、components（可复用 schema）、servers（服务器连接）、security（认证机制）、webhooks（回调端点）。",
            "【设计优先工作流】Design-First：先写 OpenAPI 定义，自动生成服务器骨架和客户端库——API 定义成为'单一真相来源'（Single Source of Truth）。"
        ],
        keyDifficulties: [
            "【必需字段理解】规范要求 components、paths 或 webhooks 至少存在一个；info 对象必须包含 title 和 version 字符串。",
            "【服务器变量替换】servers 对象支持模板化 URL，使用花括号语法进行变量替换（如 {environment}.api.example.com）。",
            "【多文档引用】3.2.0 版本强调通过 URI 引用支持多文档，$self 字段可显式指定基础 URI 用于跨分布式描述的正确引用解析。",
            "【版本兼容性】OpenAPI 2.0（原 Swagger）vs 3.0 vs 3.1 vs 3.2——新版本功能更强但需考虑工具链兼容性。",
            "【描述格式】description 字段支持 CommonMark markdown 格式——可在 API 描述中使用丰富的文档格式。"
        ],
        handsOnPath: [
            "用 Swagger Editor（https://editor.swagger.io/）创建 OpenAPI 定义：包含一个 GET 和一个 POST 端点，体验实时验证和预览。",
            "定义 info 对象：填写 title、version、description、contact、license，理解元数据的作用。",
            "创建 components/schemas：定义可复用的数据模型（如 User、Error），用 $ref 在多个端点中引用，避免重复。",
            "添加 security 定义：配置 API Key 或 OAuth2 认证，在 securitySchemes 中定义，在操作或全局级别应用。",
            "用 Swagger UI 预览文档并测试 API：体验交互式文档，直接在浏览器中发送请求并查看响应。"
        ],
        selfCheck: [
            "【结构理解】你能否识别 OpenAPI 文件的各个部分：openapi、info、servers、paths、components、security？",
            "【必需字段】你的定义是否包含所有必需字段：openapi 版本、info.title、info.version？",
            "【复用实践】你是否使用 components/schemas 定义可复用模型？是否用 $ref 引用而非复制粘贴？",
            "【安全定义】你是否在 securitySchemes 中定义认证方式？是否在需要认证的操作中应用？",
            "【工具验证】你的 OpenAPI 定义是否能在 Swagger Editor 中通过验证？能否用 Swagger UI 正确渲染？"
        ],
        extensions: [
            "【OpenAPI 3.2 完整规范】深入学习最新版本：https://spec.openapis.org/oas/latest.html —— 理解多文档支持和 URI 引用。",
            "【Redocly 美化文档】更精美的 API 文档生成：https://redocly.com/ —— 提供更好的阅读体验和自定义主题。",
            "【代码生成实践】用 Swagger Codegen 生成客户端 SDK：支持 40+ 种语言，体验从定义到代码的自动化。",
            "【CI 集成验证】在 CI/CD 中自动验证 OpenAPI 定义的有效性：使用 spectral 或 redocly lint 工具。"
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
            "【代码示例核心原则】Microsoft：代码示例应'address real problems developers are trying to solve'——解决开发者实际问题，而非仅仅演示功能。",
            "【Google 格式规范】使用空格而非制表符缩进（通常每级 2 个空格），行宽不超过 80 字符以确保可读性，尤其在窄窗口或打印文档中。",
            "【省略代码处理】Google：用语言特定的注释表示省略（如 // ...），不使用省略号字符（...或…）；包含省略的代码块不应设为可点击复制。",
            "【引导文本标点】Google：直接引入代码用冒号结尾，如有中间内容（如链接说明）则用句号。这影响读者对代码块与文字关系的理解。",
            "【Microsoft 规划原则】从简单开始（Start simple），优先处理常用且难理解的功能，避免演示显而易见的场景，为扫描优化（Optimize for scanning）。"
        ],
        keyDifficulties: [
            "【可复制可运行】示例必须能直接复制粘贴运行——依赖版本、环境变量、前置条件都要说明清楚。",
            "【简洁性平衡】展示最小可用代码，避免不必要复杂性。错误处理仅在'intrinsic to the example'时展示，否则单独说明。",
            "【多语言维护成本】API 文档通常需要多语言示例（curl、Python、JavaScript、Go 等），需同步更新。考虑自动生成或代码生成工具。",
            "【安全代码实践】Microsoft：验证用户输入、永不硬编码密码、使用代码分析工具——示例代码也应遵循安全最佳实践。",
            "【测试验证】Microsoft：'Always compile and test code before publishing'——发布前必须编译和测试，确保示例实际可运行。"
        ],
        handsOnPath: [
            "为一个 API 端点写三种语言的代码示例：curl、Python、JavaScript。确保每个都能直接复制粘贴运行。",
            "为示例添加引导文本：解释代码做了什么、需要什么前置条件、预期输出是什么。注意冒号和句号的使用规则。",
            "展示预期输出：在代码后或代码注释中显示运行结果，让用户知道成功时应看到什么。",
            "演示错误处理：在单独的代码块中展示如何捕获和处理 API 返回的错误，避免与主路径混在一起。",
            "测试所有代码示例：实际运行每个示例，确保输出与文档描述一致。记录测试时的环境版本信息。"
        ],
        selfCheck: [
            "【可运行性】你的代码示例是否可以直接复制粘贴运行？是否说明了依赖和前置条件？",
            "【风格一致性】代码示例是否遵循该语言的风格指南？格式（缩进、行宽）是否一致？",
            "【多语言覆盖】是否提供了多语言示例？覆盖了主要用户群体（curl、Python、JavaScript）？",
            "【简洁聚焦】示例是否足够简洁？是否只展示了核心逻辑？复杂功能是否有单独的扩展示例？",
            "【实际测试】你是否实际运行过每个代码示例？是否记录了测试环境？"
        ],
        extensions: [
            "【Google 代码示例指南】完整规范：https://developers.google.com/style/code-samples —— 了解更多格式细节和语言特定规则。",
            "【Microsoft 开发者内容】深入学习：https://learn.microsoft.com/en-us/style-guide/developer-content/ —— 涵盖 SDK 文档的完整写法。",
            "【自动生成工具】探索从 OpenAPI 定义自动生成多语言代码示例的工具，减少手动维护成本。",
            "【交互式示例】学习使用 Jupyter Notebook 或 Colab 提供可交互的代码示例，让用户直接修改和运行。"
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
