import type { QuizQuestion } from "../types";

export const week4: Record<string, QuizQuestion[]> = {
  // Lesson 1: API 文档结构与规范 (8题)
  "tw-w4-1": [
    {
      id: "tw-w4-1-q1",
      question: "一份完整的 API 文档应该包含哪些核心部分？",
      options: [
        "概览、认证方式、端点参考、请求/响应示例、错误处理、版本说明",
        "只需要端点列表和参数说明",
        "代码实现和数据库结构",
        "公司介绍和联系方式",
      ],
      answer: 0,
      rationale:
        "完整的 API 文档需要帮助开发者理解如何认证、调用端点、处理响应和错误，以及版本兼容性。",
    },
    {
      id: "tw-w4-1-q2",
      question: "根据 Google API 文档规范，方法描述应该以什么开头？",
      options: [
        "动作动词，如 'Gets'、'Creates'、'Deletes'、'Updates'",
        "名词，如 'The method...'",
        "'This method will...'",
        "方法名本身",
      ],
      answer: 0,
      rationale:
        "Google API Style: 方法描述应以动作动词开头，如 Getter 用 'Gets the...'，操作用 'Adds...and returns...'。",
    },
    {
      id: "tw-w4-1-q3",
      question: "API 文档中的认证（Authentication）部分应该说明什么？",
      options: [
        "支持的认证方式、如何获取凭证、如何在请求中传递凭证",
        "只需要说明使用 API Key",
        "公司的安全政策",
        "用户的密码复杂度要求",
      ],
      answer: 0,
      rationale:
        "认证文档应完整说明支持的方式（如 OAuth、API Key）、凭证获取流程，以及具体的使用示例。",
    },
    {
      id: "tw-w4-1-q4",
      question: "API 错误响应文档应该包含哪些信息？",
      options: [
        "错误码、错误消息、可能的原因、建议的解决方案",
        "只需要列出 HTTP 状态码",
        "只需要说'请联系技术支持'",
        "错误的内部堆栈跟踪",
      ],
      answer: 0,
      rationale:
        "错误文档应帮助开发者理解错误原因并知道如何处理，包含错误码、消息、原因和解决建议。",
    },
    {
      id: "tw-w4-1-q5",
      question: "Google API 文档规范对弃用（Deprecated）的 API 有什么要求？",
      options: [
        "必须明确说明替代方案，并提供迁移指导",
        "只需要标记为弃用即可",
        "立即删除相关文档",
        "弃用的 API 不需要文档",
      ],
      answer: 0,
      rationale:
        "Google API Style: 弃用的元素必须说明替代方案（what to use as a replacement）并提供迁移指导。",
    },
    {
      id: "tw-w4-1-q6",
      question: "API 参数文档中，布尔类型参数应该如何描述？",
      options: [
        "明确说明 true 和 false 各自的行为，如 'If true, ...; if false, ...'",
        "只需要说明参数名称和类型",
        "假设开发者知道布尔值的含义",
        "只描述 true 的情况",
      ],
      answer: 0,
      rationale:
        "Google API Style: 布尔参数必须清晰说明 true/false 的具体行为差异。",
    },
    {
      id: "tw-w4-1-q7",
      question: "API 文档中的速率限制（Rate Limiting）说明应该包含什么？",
      options: [
        "限制阈值、时间窗口、超限时的响应、如何处理限流",
        "只需要说'有速率限制'",
        "不应该公开速率限制信息",
        "只在错误发生时才说明",
      ],
      answer: 0,
      rationale:
        "开发者需要知道具体的限制规则才能设计合理的调用策略，包括阈值、窗口和处理方法。",
    },
    {
      id: "tw-w4-1-q8",
      question: "API 文档中，类描述的首句应该遵循什么原则？",
      options: [
        "简洁说明用途，不重复类名，因为首句会出现在摘要中",
        "尽可能详细地描述所有功能",
        "以'This class is...'开头",
        "只写类名和版本号",
      ],
      answer: 0,
      rationale:
        "Google API Style: 首句出现在摘要中，必须简洁独特，不重复类名，避免'this class will...'等模式。",
    },
  ],
  // Lesson 2: OpenAPI / Swagger 入门 (8题)
  "tw-w4-2": [
    {
      id: "tw-w4-2-q1",
      question: "OpenAPI 规范（原 Swagger 规范）的主要用途是什么？",
      options: [
        "用标准格式描述 REST API，实现自动化文档生成、代码生成和测试",
        "用于前端界面设计",
        "用于数据库设计",
        "用于项目管理",
      ],
      answer: 0,
      rationale:
        "OpenAPI 是 REST API 的描述格式，支持自动生成交互式文档、服务端/客户端代码和自动化测试。",
    },
    {
      id: "tw-w4-2-q2",
      question: "OpenAPI 规范文件支持哪些格式？",
      options: [
        "YAML 和 JSON，两种格式都兼顾人机可读性",
        "只支持 JSON",
        "只支持 XML",
        "只支持 Markdown",
      ],
      answer: 0,
      rationale:
        "OpenAPI 规范支持 YAML 和 JSON 两种格式，设计上兼顾人类可读性和机器可解析性。",
    },
    {
      id: "tw-w4-2-q3",
      question: "OpenAPI 文件中的 'paths' 部分定义什么？",
      options: [
        "API 的端点路径和每个路径支持的 HTTP 操作",
        "服务器的文件系统路径",
        "用户的导航路径",
        "数据库的表关系",
      ],
      answer: 0,
      rationale:
        "paths 定义 API 的端点（如 /users、/orders）以及每个端点支持的 HTTP 方法（GET、POST 等）。",
    },
    {
      id: "tw-w4-2-q4",
      question: "Swagger UI 工具的主要功能是什么？",
      options: [
        "根据 OpenAPI 定义生成交互式 API 文档，支持在线测试",
        "编写 OpenAPI 定义文件",
        "部署 API 服务器",
        "监控 API 性能",
      ],
      answer: 0,
      rationale:
        "Swagger UI 读取 OpenAPI 定义，生成可交互的 API 文档页面，用户可以直接在界面上测试 API。",
    },
    {
      id: "tw-w4-2-q5",
      question: "OpenAPI 中的 'schemas' 组件用于定义什么？",
      options: [
        "请求和响应中使用的数据模型结构",
        "数据库表结构",
        "用户界面布局",
        "服务器配置",
      ],
      answer: 0,
      rationale:
        "schemas 定义 API 使用的数据模型，包括对象的属性、类型、约束等，可在多处复用。",
    },
    {
      id: "tw-w4-2-q6",
      question: "Swagger Codegen 工具可以做什么？",
      options: [
        "根据 OpenAPI 定义自动生成 40+ 种语言的服务端和客户端代码",
        "只能生成文档",
        "只能验证 API 定义",
        "只能生成测试用例",
      ],
      answer: 0,
      rationale:
        "Swagger Codegen 支持从 OpenAPI 定义自动生成服务端代码骨架和多种语言的客户端 SDK。",
    },
    {
      id: "tw-w4-2-q7",
      question: "OpenAPI 文件中如何描述 API 的安全认证方式？",
      options: [
        "在 'securitySchemes' 中定义认证方式，在 'security' 中应用到端点",
        "在每个端点中重复写认证逻辑",
        "认证不是 OpenAPI 的范围",
        "只能在代码中实现认证",
      ],
      answer: 0,
      rationale:
        "OpenAPI 的 securitySchemes 定义可用的认证方式（如 OAuth、API Key），security 指定哪些端点使用哪种认证。",
    },
    {
      id: "tw-w4-2-q8",
      question: "'设计优先'（Design-First）的 API 开发方式是什么意思？",
      options: [
        "先编写 OpenAPI 定义，再根据定义生成代码和文档",
        "先写代码，再生成文档",
        "先设计界面，再写 API",
        "先测试，再开发",
      ],
      answer: 0,
      rationale:
        "Design-First 指先用 OpenAPI 定义 API 契约，团队根据契约并行开发，文档和代码保持一致。",
    },
  ],
  // Lesson 3: 示例、SDK 与代码样例写法 (7题)
  "tw-w4-3": [
    {
      id: "tw-w4-3-q1",
      question: "根据 Google 代码示例规范，代码块的最大行宽应该是多少？",
      options: [
        "80 个字符，以确保在各种环境下的可读性",
        "没有限制，越长越好",
        "40 个字符",
        "120 个字符",
      ],
      answer: 0,
      rationale:
        "Google Code Samples Style: 代码行应在 80 个字符处换行，确保在不同屏幕和打印时的可读性。",
    },
    {
      id: "tw-w4-3-q2",
      question: "在代码示例中表示省略代码时，应该如何处理？",
      options: [
        "使用该语言的注释语法（如 // ... 或 # ...），不使用省略号字符",
        "使用省略号字符 '…'",
        "使用三个点 '...'",
        "直接留空",
      ],
      answer: 0,
      rationale:
        "Google Code Samples Style: 用语言的注释语法表示省略，不使用省略号字符，保持代码语法正确。",
    },
    {
      id: "tw-w4-3-q3",
      question: "包含省略代码的代码块应该如何处理复制功能？",
      options: [
        "不应该格式化为可点击复制，因为复制不完整的代码可能导致错误",
        "始终提供复制功能",
        "只复制非省略部分",
        "复制时自动填充省略内容",
      ],
      answer: 0,
      rationale:
        "Google Code Samples Style: 包含省略的代码块不应提供一键复制，避免用户复制不完整代码。",
    },
    {
      id: "tw-w4-3-q4",
      question: "代码示例的引导文本应该以什么标点结尾？",
      options: [
        "如果直接接代码块用冒号，如果中间有其他内容用句号",
        "始终用句号",
        "始终用冒号",
        "不需要标点",
      ],
      answer: 0,
      rationale:
        "Google Code Samples Style: 直接引入代码用冒号结尾，如果有注释等中间内容则用句号。",
    },
    {
      id: "tw-w4-3-q5",
      question: "好的代码示例应该具备什么特点？",
      options: [
        "可复制粘贴、可运行、有清晰的注释说明关键步骤",
        "越短越好，省略所有注释",
        "展示尽可能多的高级特性",
        "使用最新的语法特性",
      ],
      answer: 0,
      rationale:
        "代码示例应该可以直接运行，注释解释关键逻辑，帮助用户理解并在自己的代码中应用。",
    },
    {
      id: "tw-w4-3-q6",
      question: "SDK 文档中的快速入门示例应该展示什么？",
      options: [
        "最小可用的端到端流程：安装、配置、第一个 API 调用",
        "所有可用的 API 方法",
        "高级配置选项",
        "性能优化技巧",
      ],
      answer: 0,
      rationale:
        "快速入门应该让用户最快速地跑通第一个成功案例，建立信心后再深入学习更多功能。",
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
        "Google Code Samples Style: 使用空格而非制表符进行缩进，通常每级 2 个空格，确保跨环境一致性。",
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
