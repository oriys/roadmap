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
