import type { QuizQuestion } from "../types";

export const week4: Record<string, QuizQuestion[]> = {
  // Lesson 1: API 文档结构与规范 (12题，答案随机分布)
  "tw-w4-1": [
    {
      id: "tw-w4-1-q1",
      question: "根据 Google API 文档规范，方法描述应该以什么形式开头？",
      options: [
        "以'This method will...'开头",
        "动作动词开头，如 'Gets'、'Creates'、'Deletes'、'Updates'",
        "以方法名本身开头",
        "以名词短语'The method...'开头",
      ],
      answer: 1,
      rationale:
        "Google API Style: 方法描述应以动作动词开头——操作并返回数据用动作动词，Getter 用'Gets the...'，无返回值用'Sets'/'Updates'/'Deletes'等。",
    },
    {
      id: "tw-w4-1-q2",
      question: "RFC 7807 Problem Details 标准定义的 API 错误响应中，哪个字段是主标识符？",
      options: [
        "type（问题类型 URI）是主标识符，客户端必须用它来识别错误类型",
        "title 是主标识符，因为它是人可读的",
        "status 是主标识符，因为它是 HTTP 状态码",
        "detail 是主标识符，因为它包含具体错误信息",
      ],
      answer: 0,
      rationale:
        "RFC 7807 明确规定：'Consumers MUST use the type string as the primary identifier'——type 是主标识符，title 是辅助说明。",
    },
    {
      id: "tw-w4-1-q3",
      question: "Google API 文档规范对布尔类型参数的描述有什么要求？",
      options: [
        "假设开发者知道布尔值的含义即可",
        "只需要说明参数名称和类型",
        "只描述 true 的情况",
        "必须说明 true 和 false 两种情况：'If true, ...; if false, ...'",
      ],
      answer: 3,
      rationale:
        "Google API Style: 布尔参数需说明 true/false 两种情况——'If true, ...; if false, ...'，包含默认值说明'Default: ...'。",
    },
    {
      id: "tw-w4-1-q4",
      question: "RFC 7807 Problem Details 标准包含哪五个核心字段？",
      options: [
        "error、message、code、data、timestamp",
        "type、title、status、detail、instance",
        "name、description、http_code、info、url",
        "kind、summary、code、explanation、path",
      ],
      answer: 1,
      rationale:
        "RFC 7807 定义五个核心字段：type（问题类型 URI）、title（人可读摘要）、status（HTTP 状态码）、detail（具体说明）、instance（实例 URI）。",
    },
    {
      id: "tw-w4-1-q5",
      question: "Google API 文档规范对弃用（Deprecated）元素的首句有什么特殊要求？",
      options: [
        "弃用说明不需要特殊格式",
        "可以在任何位置说明弃用信息",
        "首句应包含完整的迁移步骤",
        "仅首句出现在摘要中，必须告知替代方案和首次弃用版本",
      ],
      answer: 3,
      rationale:
        "Google：弃用时必须'告知用户应使用何种替代方案'，说明首次弃用的版本，且仅第一句出现在摘要中。",
    },
    {
      id: "tw-w4-1-q6",
      question: "Stripe OpenAPI 规范中定义的自定义扩展字段 x-expandableFields 的作用是什么？",
      options: [
        "定义可以自动展开的嵌套对象字段",
        "标记已弃用的字段",
        "指定必填字段",
        "配置字段的验证规则",
      ],
      answer: 0,
      rationale:
        "Stripe OpenAPI 规范定义了 x-expandableFields、x-expansionResources 等自定义扩展字段，支持对象扩展功能，是业界典范。",
    },
    {
      id: "tw-w4-1-q7",
      question: "API 文档中描述非布尔类型参数时，应该以什么开头？",
      options: [
        "以参数类型开头",
        "以参数名称开头",
        "以'The'或'A'开头",
        "以动作动词开头",
      ],
      answer: 2,
      rationale:
        "Google API Style: 非布尔参数以'The'或'A'开头；布尔参数需说明 true/false 两种情况。",
    },
    {
      id: "tw-w4-1-q8",
      question: "一份完整的 API 文档应该包含哪些核心结构部分？",
      options: [
        "只需要端点列表和参数说明",
        "代码实现和数据库结构",
        "概览、认证、速率限制、错误模型、版本与变更——缺一不可",
        "公司介绍和技术团队信息",
      ],
      answer: 2,
      rationale:
        "API 文档核心结构：概览（Overview）、认证（Authentication）、速率限制（Rate Limiting）、错误模型（Error Model）、版本与变更（Versioning）。",
    },
    {
      id: "tw-w4-1-q9",
      question: "Google API 文档规范要求每个接口必须完整描述哪些内容？",
      options: [
        "只需要描述公开的方法",
        "只需要描述主要功能",
        "每个类/接口、每个常量/字段/枚举、每个方法及其参数/返回值/异常",
        "只需要描述可能出错的地方",
      ],
      answer: 2,
      rationale:
        "Google 规范要求：每个类/接口、每个常量/字段/枚举、每个方法及其参数/返回值/异常都必须有完整描述。",
    },
    {
      id: "tw-w4-1-q10",
      question: "Google API 文档规范对方法描述的时态有什么要求？",
      options: [
        "可以使用任何时态",
        "使用现在时态，如'Returns a bird'而非'Returned a bird'",
        "使用将来时态，如'This method will return...'",
        "使用过去时态描述已完成的操作",
      ],
      answer: 1,
      rationale:
        "Google 规范要求描述一致性：使用现在时态（'Returns a bird' 非 'Returned'），首句简洁独特，避免重复类名。",
    },
    {
      id: "tw-w4-1-q11",
      question: "RFC 7807 Problem Details 中的 type 字段应该是什么格式？",
      options: [
        "纯文本错误码",
        "数字错误码",
        "JSON 对象",
        "指向问题类型定义的 URI",
      ],
      answer: 3,
      rationale:
        "RFC 7807：type 是问题类型的 URI，指向描述该错误类型的文档。客户端使用 type 作为主标识符来识别和处理不同类型的错误。",
    },
    {
      id: "tw-w4-1-q12",
      question: "根据 Google API 文档规范，布尔类型的 getter 方法应该如何描述？",
      options: [
        "用'Checks whether...'开头",
        "用'Gets the boolean...'开头",
        "用'Returns true if...'开头",
        "用'Verifies that...'开头",
      ],
      answer: 0,
      rationale:
        "Google 规范：布尔 getter 用'Checks whether...'开头；其他 getter 用'Gets the...'开头；操作并返回数据用动作动词开头。",
    },
  ],
  // Lesson 2: OpenAPI / Swagger 入门 (12题，答案随机分布)
  "tw-w4-2": [
    {
      id: "tw-w4-2-q1",
      question: "OpenAPI Specification 的官方定义是什么？",
      options: [
        "一种用于前端界面设计的工具",
        "a standard, programming language-agnostic interface description for HTTP APIs",
        "一种数据库设计规范",
        "一种项目管理方法论",
      ],
      answer: 1,
      rationale:
        "OAS 官方定义：'The OpenAPI Specification defines a standard, programming language-agnostic interface description for HTTP APIs'——语言无关的 HTTP API 接口描述标准。",
    },
    {
      id: "tw-w4-2-q2",
      question: "Swagger 工具集中，Swagger Codegen 的功能是什么？",
      options: [
        "生成服务器骨架和 40+ 种语言的客户端库",
        "只能编写 OpenAPI 定义文件",
        "只能生成交互式文档",
        "只能验证 API 定义的正确性",
      ],
      answer: 0,
      rationale:
        "Swagger Codegen 可从 OpenAPI 定义自动生成服务端代码骨架和 40+ 种编程语言的客户端 SDK。",
    },
    {
      id: "tw-w4-2-q3",
      question: "OpenAPI Root Object 中，哪些字段是必需的？",
      options: [
        "servers 和 security",
        "paths 和 webhooks",
        "openapi（版本号）和 info（API 元数据）",
        "components 和 tags",
      ],
      answer: 2,
      rationale:
        "Root Object 必需字段：openapi（版本号）和 info（API 元数据，且 info 必须包含 title 和 version）。",
    },
    {
      id: "tw-w4-2-q4",
      question: "OpenAPI 规范要求 Root Object 必须包含以下哪组字段中的至少一个？",
      options: [
        "servers 或 security",
        "info 或 tags",
        "components、paths 或 webhooks",
        "contact 或 license",
      ],
      answer: 2,
      rationale:
        "规范要求 components、paths 或 webhooks 至少存在一个，否则 API 定义没有实际内容。",
    },
    {
      id: "tw-w4-2-q5",
      question: "Swagger 官方对 Swagger 的定位描述是什么？",
      options: [
        "一个独立的 API 开发框架",
        "a set of open-source tools built around the OpenAPI Specification",
        "一种私有的 API 格式标准",
        "只是一个文档编辑器",
      ],
      answer: 1,
      rationale:
        "Swagger 是'a set of open-source tools built around the OpenAPI Specification'——围绕 OpenAPI 规范构建的开源工具集。",
    },
    {
      id: "tw-w4-2-q6",
      question: "OpenAPI 3.2.0 版本引入的 $self 字段的作用是什么？",
      options: [
        "用于自动生成 API 客户端",
        "用于定义自引用的循环数据结构",
        "显式指定基础 URI，用于跨分布式描述的正确引用解析",
        "用于标记已弃用的字段",
      ],
      answer: 2,
      rationale:
        "3.2.0 版本强调多文档支持，$self 字段可显式指定基础 URI（base URI）用于跨分布式描述的正确引用解析。",
    },
    {
      id: "tw-w4-2-q7",
      question: "OpenAPI 中 description 字段支持什么格式？",
      options: [
        "纯文本格式",
        "HTML 格式",
        "CommonMark markdown 格式",
        "XML 格式",
      ],
      answer: 2,
      rationale:
        "OpenAPI 规范指出 description 字段支持 CommonMark markdown 格式，可在 API 描述中使用丰富的文档格式。",
    },
    {
      id: "tw-w4-2-q8",
      question: "Design-First（设计优先）的 API 开发方式的核心理念是什么？",
      options: [
        "先实现代码，再根据代码生成文档",
        "先进行性能测试，再编写 API",
        "先设计数据库，再定义 API",
        "先写 OpenAPI 定义，再自动生成服务器骨架和客户端库",
      ],
      answer: 3,
      rationale:
        "Design-First 工作流：先写 OpenAPI 定义，API 定义成为'单一真相来源'（Single Source of Truth），再自动生成代码。",
    },
    {
      id: "tw-w4-2-q9",
      question: "OpenAPI servers 对象支持什么特性？",
      options: [
        "只能定义一个固定的服务器地址",
        "支持模板化 URL，使用花括号语法进行变量替换",
        "只能使用 HTTPS 协议",
        "必须使用完整的域名",
      ],
      answer: 1,
      rationale:
        "servers 对象支持模板化 URL，使用花括号语法进行变量替换（如 {environment}.api.example.com）。",
    },
    {
      id: "tw-w4-2-q10",
      question: "Swagger 工具集包括哪些核心工具？",
      options: [
        "只有 Swagger UI",
        "Editor（编辑器）、UI（交互式文档）、Codegen（代码生成）、Parser（解析库）",
        "只有代码生成工具",
        "只有文档验证工具",
      ],
      answer: 1,
      rationale:
        "Swagger 工具集包括：Editor（浏览器编写）、UI（生成交互式文档）、Codegen（40+ 语言代码生成）、Parser（解析库）。",
    },
    {
      id: "tw-w4-2-q11",
      question: "OpenAPI info 对象必须包含哪些字段？",
      options: [
        "contact 和 license",
        "description 和 termsOfService",
        "title 和 version",
        "summary 和 tags",
      ],
      answer: 2,
      rationale:
        "OpenAPI 规范要求 info 对象必须包含 title（API 标题）和 version（API 版本）两个字符串字段。",
    },
    {
      id: "tw-w4-2-q12",
      question: "OpenAPI 可以描述的内容不包括以下哪项？",
      options: [
        "端点及其操作（如 GET /users）",
        "安全与认证方式",
        "API 元数据（联系人、许可证）",
        "后端数据库表结构",
      ],
      answer: 3,
      rationale:
        "OpenAPI 描述：端点及操作、参数和输入输出、安全与认证、API 元数据。数据库表结构不在 OpenAPI 描述范围内。",
    },
  ],
  // Lesson 3: 示例、SDK 与代码样例写法 (12题，答案随机分布)
  "tw-w4-3": [
    {
      id: "tw-w4-3-q1",
      question: "根据 Microsoft 风格指南，代码示例的核心目的是什么？",
      options: [
        "展示语言的所有高级特性",
        "address real problems developers are trying to solve——解决开发者实际问题",
        "演示显而易见的功能用法",
        "展示尽可能多的代码量",
      ],
      answer: 1,
      rationale:
        "Microsoft：代码示例应'address real problems developers are trying to solve'——解决开发者实际问题，而非仅仅演示功能。",
    },
    {
      id: "tw-w4-3-q2",
      question: "根据 Google 代码示例规范，代码块的最大行宽应该是多少？",
      options: [
        "80 个字符，以确保在各种环境下的可读性",
        "没有限制，越长越好",
        "40 个字符",
        "120 个字符",
      ],
      answer: 0,
      rationale:
        "Google：行宽不超过 80 字符以确保可读性，尤其在窄窗口或打印文档中。",
    },
    {
      id: "tw-w4-3-q3",
      question: "Google 规范中，如何在代码示例中表示省略的代码？",
      options: [
        "使用三个点 '...'",
        "使用省略号字符 '…'",
        "使用该语言的注释语法（如 // ...），不使用省略号字符",
        "直接留空",
      ],
      answer: 2,
      rationale:
        "Google：用语言特定的注释表示省略（如 // ...），'Don't use three dots or the ellipsis character'。",
    },
    {
      id: "tw-w4-3-q4",
      question: "包含省略代码的代码块应该如何处理复制功能？",
      options: [
        "始终提供复制功能方便用户",
        "只复制非省略部分",
        "复制时自动填充省略内容",
        "不应格式化为可点击复制，防止用户复制不完整代码",
      ],
      answer: 3,
      rationale:
        "Google：'If a code block contains an omission, don't format the block as click-to-copy'——防止用户复制不完整代码。",
    },
    {
      id: "tw-w4-3-q5",
      question: "代码示例的引导文本应该以什么标点结尾？",
      options: [
        "始终用句号",
        "始终用冒号",
        "不需要标点",
        "直接接代码块用冒号，如有中间内容则用句号",
      ],
      answer: 3,
      rationale:
        "Google：直接引入代码用冒号结尾，如有中间内容（如链接说明）则用句号。",
    },
    {
      id: "tw-w4-3-q6",
      question: "Microsoft 对代码示例的规划建议是什么？",
      options: [
        "从复杂开始展示完整功能",
        "Start simple——从简单开始，逐步增加复杂性",
        "演示所有可能的用法",
        "只写最高级的用法",
      ],
      answer: 1,
      rationale:
        "Microsoft：'Start simple'——从简单开始，优先处理常用且难理解的功能，避免演示显而易见的场景。",
    },
    {
      id: "tw-w4-3-q7",
      question: "代码示例中的缩进应该使用什么？",
      options: [
        "使用空格而非制表符，通常每级 2 个空格",
        "使用制表符",
        "不需要缩进",
        "每级 8 个空格",
      ],
      answer: 0,
      rationale:
        "Google：使用空格而非制表符缩进（通常每级 2 个空格，某些场景用 4 个），确保跨环境一致性。",
    },
    {
      id: "tw-w4-3-q8",
      question: "Microsoft 对代码示例中错误处理的建议是什么？",
      options: [
        "每个示例都必须包含完整的错误处理",
        "完全忽略错误处理",
        "只在错误处理是示例固有部分（intrinsic to the example）时才展示",
        "只在文档末尾统一说明错误处理",
      ],
      answer: 2,
      rationale:
        "Microsoft：'Handle exceptions appropriately: Only show exception handling when intrinsic to the example'——仅在必要时展示。",
    },
    {
      id: "tw-w4-3-q9",
      question: "Microsoft 对代码示例发布前的要求是什么？",
      options: [
        "只需检查语法正确性",
        "只需让同事审查",
        "发布后再测试修复问题",
        "Always compile and test code before publishing——必须编译和测试",
      ],
      answer: 3,
      rationale:
        "Microsoft：'Always compile and test code before publishing'——发布前必须编译和测试，确保示例实际可运行。",
    },
    {
      id: "tw-w4-3-q10",
      question: "Microsoft 对代码示例安全性的建议包括什么？",
      options: [
        "安全性不是代码示例需要考虑的",
        "验证用户输入、永不硬编码密码、使用代码分析工具",
        "只需添加安全声明即可",
        "安全问题留给用户自己处理",
      ],
      answer: 1,
      rationale:
        "Microsoft：'Write secure code'——验证用户输入、永不硬编码密码、使用代码分析工具。示例代码也应遵循安全最佳实践。",
    },
    {
      id: "tw-w4-3-q11",
      question: "Microsoft 建议如何展示代码示例的预期输出？",
      options: [
        "不需要展示输出",
        "在代码后或代码注释中显示运行结果",
        "只口头描述输出",
        "让用户自己运行查看",
      ],
      answer: 1,
      rationale:
        "Microsoft：'Show expected output: Display results either after the example or within code comments'——让用户知道成功时应看到什么。",
    },
    {
      id: "tw-w4-3-q12",
      question: "关于多语言代码示例的维护，以下哪项是主要挑战？",
      options: [
        "不同语言的语法差异",
        "代码高亮支持问题",
        "多语言示例需要同步更新，容易出现不一致",
        "用户只使用一种语言",
      ],
      answer: 2,
      rationale:
        "API 文档通常需要多语言示例（curl、Python、JavaScript、Go 等），需同步更新，容易出现不一致。考虑自动生成工具减少维护成本。",
    },
  ],
  // Lesson 4: CLI 文档与命令参考 (7题)
  "tw-w4-4": [
    {
      id: "tw-w4-4-q1",
      question: "CLI 文档中，命令参考应该包含哪些核心信息？",
      options: [
        "命令用途、语法、参数说明、示例、返回值/退出码",
        "只需要命令名称",
        "只需要参数列表",
        "只需要一个示例",
      ],
      answer: 0,
      rationale:
        "完整的命令参考需要让用户理解命令做什么、如何使用、各参数含义，以及如何判断执行结果。",
    },
    {
      id: "tw-w4-4-q2",
      question: "CLI 帮助信息（--help）的设计原则是什么？",
      options: [
        "简洁、可扫描、在终端中直接查看而无需离开工作环境",
        "越详细越好",
        "与在线文档完全相同",
        "只显示版本号",
      ],
      answer: 0,
      rationale:
        "--help 面向正在工作中的用户，需要快速查阅，应简洁列出关键信息，详细说明链接到在线文档。",
    },
    {
      id: "tw-w4-4-q3",
      question: "CLI 命令的退出码（Exit Code）在文档中为什么重要？",
      options: [
        "让用户在脚本中判断命令是否成功执行，实现自动化处理",
        "只是技术细节，用户不需要知道",
        "用于统计命令使用次数",
        "用于显示帮助信息",
      ],
      answer: 0,
      rationale:
        "退出码是脚本自动化的基础，用户需要知道哪些退出码表示成功，哪些表示特定错误类型。",
    },
    {
      id: "tw-w4-4-q4",
      question: "CLI 文档中的参数说明应该包含什么？",
      options: [
        "参数名、类型、是否必需、默认值、取值范围/格式、示例",
        "只需要参数名",
        "只需要说明参数是必需还是可选",
        "参数的内部实现细节",
      ],
      answer: 0,
      rationale:
        "参数文档应让用户清楚知道如何提供正确的参数值，包括格式要求、默认行为和有效范围。",
    },
    {
      id: "tw-w4-4-q5",
      question: "CLI 命令示例应该覆盖哪些场景？",
      options: [
        "最常用的基本用法，以及常见的组合选项和错误处理场景",
        "只需要一个最简单的示例",
        "所有可能的参数组合",
        "只展示高级用法",
      ],
      answer: 0,
      rationale:
        "示例应覆盖典型用法帮助快速上手，同时展示常见组合和错误处理，但不需要穷举所有可能。",
    },
    {
      id: "tw-w4-4-q6",
      question: "CLI 文档中如何处理子命令（Subcommands）的文档？",
      options: [
        "每个子命令有独立的文档页面，同时在主命令中列出所有子命令概览",
        "所有子命令放在同一页面",
        "子命令不需要单独文档",
        "只记录最常用的子命令",
      ],
      answer: 0,
      rationale:
        "子命令应有独立文档便于搜索和阅读，主命令页面提供子命令列表和简要说明便于发现。",
    },
    {
      id: "tw-w4-4-q7",
      question: "CLI 工具的环境变量文档应该说明什么？",
      options: [
        "变量名、用途、默认值、与命令行参数的优先级关系",
        "只列出变量名",
        "环境变量不需要文档",
        "只说明如何设置环境变量",
      ],
      answer: 0,
      rationale:
        "用户需要知道哪些环境变量会影响工具行为，以及它们与命令行参数的优先级关系。",
    },
  ],
};
