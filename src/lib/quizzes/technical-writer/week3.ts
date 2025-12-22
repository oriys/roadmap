import type { QuizQuestion } from "../types";

export const week3: Record<string, QuizQuestion[]> = {
  // Lesson 1: HTTP/JSON 基础（面向文档）(12题，答案随机分布)
  "tw-w3-1": [
    {
      id: "tw-w3-1-q1",
      question: "MDN 对 HTTP 的核心定义是什么？",
      options: [
        "一种数据库查询语言",
        "应用层协议，采用客户端-服务器模型，客户端发起请求，服务器返回响应",
        "一种文件压缩格式",
        "一种编程语言",
      ],
      answer: 1,
      rationale:
        "HTTP 是应用层协议，采用客户端-服务器模型。它是无状态协议，可通过 Cookie/Session 添加状态。",
    },
    {
      id: "tw-w3-1-q2",
      question: "HTTP 状态码 401 和 403 的区别是什么？",
      options: [
        "401 Unauthorized 表示未认证（需要登录），403 Forbidden 表示已认证但无权限",
        "401 表示服务器错误，403 表示客户端错误",
        "401 是临时性的，403 是永久性的",
        "两者含义完全相同",
      ],
      answer: 0,
      rationale:
        "这是最容易混淆的状态码组：401 需要认证（如登录），403 表示认证成功但没有访问该资源的权限。",
    },
    {
      id: "tw-w3-1-q3",
      question: "HTTP 方法中，哪些是幂等的（多次执行结果相同）？",
      options: [
        "只有 GET 是幂等的",
        "所有方法都是幂等的",
        "GET、PUT、DELETE 是幂等的，POST 不是幂等的",
        "没有方法是幂等的",
      ],
      answer: 2,
      rationale:
        "GET、PUT、DELETE 是幂等操作，多次执行产生相同结果；POST 不是幂等的，每次执行可能创建新资源。",
    },
    {
      id: "tw-w3-1-q4",
      question: "JSON 规范（ECMA-404）对字符串的要求是什么？",
      options: [
        "必须使用双引号包围，不能使用单引号",
        "可以使用单引号或双引号",
        "可以使用反引号",
        "不需要任何引号",
      ],
      answer: 0,
      rationale:
        "JSON 规范严格要求：字符串必须使用双引号包围，单引号不是有效的 JSON 语法。",
    },
    {
      id: "tw-w3-1-q5",
      question: "HTTP 状态码的五大分类是什么？",
      options: [
        "1xx 信息性、2xx 成功、3xx 重定向、4xx 客户端错误、5xx 服务器错误",
        "1xx 错误、2xx 成功、3xx 警告、4xx 信息、5xx 重定向",
        "按字母顺序 A-E 分类",
        "只有 200 和 500 两种分类",
      ],
      answer: 0,
      rationale:
        "HTTP 状态码按首位数字分类：1xx 信息性、2xx 成功、3xx 重定向、4xx 客户端错误、5xx 服务器错误。",
    },
    {
      id: "tw-w3-1-q6",
      question: "JSON 支持哪些基本数据类型？",
      options: [
        "只支持字符串和数字",
        "字符串、整数、浮点数、日期、二进制",
        "字符串、数字、布尔值、null、对象、数组",
        "任何 JavaScript 支持的类型",
      ],
      answer: 2,
      rationale:
        "JSON 支持六种值类型：字符串、数字、布尔值（true/false）、null、对象（嵌套）、数组（嵌套）。",
    },
    {
      id: "tw-w3-1-q7",
      question: "HTTP 状态码 200、201、204 的区别是什么？",
      options: [
        "都表示完全相同的成功状态",
        "200 表示错误，201 表示成功，204 表示警告",
        "200 OK（成功返回数据）、201 Created（资源已创建）、204 No Content（成功但无响应体）",
        "200 用于 GET，201 用于 POST，204 用于 DELETE",
      ],
      answer: 2,
      rationale:
        "200 表示请求成功并返回数据，201 表示成功创建了新资源，204 表示成功但响应体为空（常用于 DELETE）。",
    },
    {
      id: "tw-w3-1-q8",
      question: "Content-Type 头的作用是什么？",
      options: [
        "控制响应的缓存策略",
        "设置跨域访问权限",
        "告知客户端响应体的媒体类型（如 application/json）",
        "指定请求的认证方式",
      ],
      answer: 2,
      rationale:
        "Content-Type 头告知客户端响应体的 MIME 类型，如 application/json、text/html、image/png 等。",
    },
    {
      id: "tw-w3-1-q9",
      question: "JSON 格式有什么严格限制？",
      options: [
        "支持注释、尾随逗号、单引号",
        "键名必须用双引号、不支持注释、尾随逗号非法",
        "可以使用任意格式",
        "只有数组支持嵌套",
      ],
      answer: 1,
      rationale:
        "JSON 格式非常严格：键名必须双引号、不支持注释、尾随逗号非法、不支持 undefined。",
    },
    {
      id: "tw-w3-1-q10",
      question: "HTTP 九种标准请求方法中，OPTIONS 的作用是什么？",
      options: [
        "删除指定资源",
        "创建新资源",
        "查询资源支持的方法（常用于 CORS 预检请求）",
        "建立 WebSocket 连接",
      ],
      answer: 2,
      rationale:
        "OPTIONS 方法用于查询目标资源支持的通信选项，常用于 CORS 预检请求检查服务器是否允许跨域访问。",
    },
    {
      id: "tw-w3-1-q11",
      question: "404 和 410 状态码的区别是什么？",
      options: [
        "404 Not Found 表示资源不存在，410 Gone 表示资源曾存在但已永久删除",
        "两者含义完全相同",
        "404 是服务器错误，410 是客户端错误",
        "404 是临时的，410 是临时的",
      ],
      answer: 0,
      rationale:
        "404 表示资源当前不存在（可能是路径错误），410 表示资源曾经存在但已被永久删除，不会再恢复。",
    },
    {
      id: "tw-w3-1-q12",
      question: "在 API 文档中，Header 应该如何描述？",
      options: [
        "只列出 Header 名称即可",
        "不需要描述 Headers",
        "说明哪些是必需的、哪些是可选的、默认值是什么、Accept 头如何影响响应格式",
        "只描述 Authorization 头",
      ],
      answer: 2,
      rationale:
        "完整的 API 文档应清晰说明每个 Header：是否必需、是否可选、默认值、Accept 头如何影响响应格式等。",
    },
  ],
  // Lesson 2: 命令行与可复现示例 (12题，答案随机分布)
  "tw-w3-2": [
    {
      id: "tw-w3-2-q1",
      question: "The Art of Command Line 对学习 Bash 的建议是什么？",
      options: [
        "只需记住常用的 10 个命令即可",
        "通过视频教程学习最高效",
        "应该系统阅读 man bash，因为它'pretty easy to follow and not that long'",
        "在需要时通过搜索引擎学习即可",
      ],
      answer: 2,
      rationale:
        "The Art of Command Line 明确建议：'type `man bash` and at least skim the whole thing'——系统学习比零散技巧更有效。",
    },
    {
      id: "tw-w3-2-q2",
      question: "curl -v 选项在 API 文档调试中的核心价值是什么？",
      options: [
        "它'outputs lots of info and what it sends and receives'，揭示完整的 HTTP 交互过程",
        "验证 SSL 证书有效性",
        "自动格式化 JSON 输出",
        "只显示 curl 版本信息",
      ],
      answer: 0,
      rationale:
        "curl manual 明确指出：-v 选项'outputs lots of info and what it sends and receives'，是调试 HTTP 请求的标准方式。",
    },
    {
      id: "tw-w3-2-q3",
      question: "重定向符号 > 和 >> 的区别是什么？",
      options: [
        "> 追加内容，>> 覆盖内容",
        "> 输出到标准输出，>> 输出到标准错误",
        "两者功能完全相同",
        "'`>` overwrites output files while `>>` appends'——> 覆盖，>> 追加",
      ],
      answer: 3,
      rationale:
        "The Art of Command Line 明确定义：'`>` overwrites output files while `>>` appends'——这是管道和重定向的基础知识。",
    },
    {
      id: "tw-w3-2-q4",
      question: "curl -o 和 -O 选项的区别是什么？",
      options: [
        "-o 指定自定义文件名保存，-O 使用远程文件的原始名称保存",
        "-o 输出到终端，-O 输出到文件",
        "-o 是静默模式，-O 是详细模式",
        "两者功能完全相同，只是别名",
      ],
      answer: 0,
      rationale:
        "curl manual：'-o filename' 保存为指定文件名，'-O' 自动使用 URL 中的原始文件名。大小写决定命名方式。",
    },
    {
      id: "tw-w3-2-q5",
      question: "技术文档中命令示例的'可复现性'指什么？",
      options: [
        "命令必须在作者的机器上运行过",
        "示例必须'可复制粘贴即运行'——用户不应该需要猜测、调整或补充任何内容",
        "命令必须有详细的原理解释",
        "命令必须支持所有操作系统",
      ],
      answer: 1,
      rationale:
        "可复现性是文档可用性的硬指标——用户直接复制粘贴就能运行，不需要猜测任何内容。",
    },
    {
      id: "tw-w3-2-q6",
      question: "在命令示例中使用环境变量（如 $API_KEY）的主要好处是什么？",
      options: [
        "减少命令长度",
        "避免在文档中暴露真实密钥，同时让用户可以灵活替换自己的值",
        "环境变量运行更快",
        "这是 Unix 系统的强制要求",
      ],
      answer: 1,
      rationale:
        "环境变量模式让命令示例更安全（不暴露密钥）、更灵活（用户替换自己的值）、更易复用。",
    },
    {
      id: "tw-w3-2-q7",
      question: "curl -d 选项的作用是什么？",
      options: [
        "指定下载目录",
        "启用调试模式",
        "设置请求超时时间",
        "发送 POST 请求的数据体（如 JSON 或表单数据）",
      ],
      answer: 3,
      rationale:
        "curl manual：'-d \"data\"' submits form-encoded POST content——它是发送请求体的标准方式。",
    },
    {
      id: "tw-w3-2-q8",
      question: "管道符（|）的作用是什么？",
      options: [
        "将输出重定向到文件",
        "在后台并行运行两个命令",
        "'`|` chains commands'——将前一个命令的输出作为后一个命令的输入",
        "表示逻辑或操作",
      ],
      answer: 2,
      rationale:
        "The Art of Command Line 定义：'`|` chains commands'——管道连接命令形成数据处理流水线。",
    },
    {
      id: "tw-w3-2-q9",
      question: "命令示例中占位符（如 <your-token>）的作用是什么？",
      options: [
        "美化文档格式",
        "明确标注用户需要替换的部分，避免用户猜测",
        "表示可选参数",
        "这是 Markdown 语法要求",
      ],
      answer: 1,
      rationale:
        "占位符（大写变量名或尖括号）明确告诉用户哪些值需要替换，消除猜测，提高可复现性。",
    },
    {
      id: "tw-w3-2-q10",
      question: "curl 中 -H 选项的用途是什么？",
      options: [
        "显示帮助信息",
        "添加自定义 HTTP 请求头（如 Content-Type、Authorization）",
        "启用 HTTPS 模式",
        "设置主机名",
      ],
      answer: 1,
      rationale:
        "curl manual：'-H \"Header: value\"' appends custom headers——这是设置认证、内容类型等头的标准方式。",
    },
    {
      id: "tw-w3-2-q11",
      question: "长命令换行时应该注意什么？",
      options: [
        "直接换行即可，Shell 会自动识别",
        "用反斜杠（\\）续行，并明确说明这是'一条完整命令'；注意 Windows 和 Unix 续行符不同",
        "长命令不应该换行",
        "只能在参数之间换行",
      ],
      answer: 1,
      rationale:
        "多行命令需要续行符，但更重要的是在文档中明确说明这是一条完整命令，避免用户只复制部分内容。",
    },
    {
      id: "tw-w3-2-q12",
      question: "curl -s 选项通常与什么工具配合使用？",
      options: [
        "与 -v 配合显示详细和静默信息",
        "与 jq 配合处理 JSON 响应（curl -s ... | jq '.field'）",
        "与 wget 配合下载文件",
        "与 ssh 配合远程执行",
      ],
      answer: 1,
      rationale:
        "curl -s（静默模式）隐藏进度信息，让输出只包含响应体，便于通过管道传给 jq 等工具处理。",
    },
  ],
  // Lesson 3: 排错文档（Troubleshooting）写法 (7题)
  "tw-w3-3": [
    {
      id: "tw-w3-3-q1",
      question: "排错文档的理想结构是什么？",
      options: [
        "症状描述 → 可能原因 → 诊断步骤 → 解决方案",
        "解决方案 → 原因 → 症状",
        "只列出解决方案即可",
        "按字母顺序排列所有错误",
      ],
      answer: 0,
      rationale:
        "排错文档应从用户观察到的症状开始，然后解释原因，提供诊断步骤，最后给出解决方案。",
    },
    {
      id: "tw-w3-3-q2",
      question: "在排错文档中，错误信息应该如何呈现？",
      options: [
        "完整引用原始错误信息，使用代码块格式，便于用户搜索匹配",
        "用自己的话概括错误",
        "只写错误代码，省略详细信息",
        "翻译成用户的母语",
      ],
      answer: 0,
      rationale:
        "完整引用原始错误信息让用户能通过搜索找到文档，也便于确认是否遇到相同问题。",
    },
    {
      id: "tw-w3-3-q3",
      question: "排错文档中的'快速绕过'（Workaround）应该如何处理？",
      options: [
        "提供快速绕过方案，但同时说明根因和完整修复方法",
        "只提供绕过方案，不需要解释原因",
        "不应该提供绕过方案，只给根本解决方案",
        "绕过方案应该放在文档最后",
      ],
      answer: 0,
      rationale:
        "快速绕过帮助用户先解除阻塞，但也应说明根因和完整修复方法，让用户理解问题本质。",
    },
    {
      id: "tw-w3-3-q4",
      question: "描述复现步骤时，最重要的原则是什么？",
      options: [
        "步骤具体、完整，包含版本信息和环境配置",
        "尽量简短，只写关键步骤",
        "使用技术术语让步骤更专业",
        "只描述成功路径",
      ],
      answer: 0,
      rationale:
        "复现步骤必须足够详细和完整，包括版本、环境等信息，让其他人能够准确重现问题。",
    },
    {
      id: "tw-w3-3-q5",
      question: "排错文档中的日志示例应该如何处理？",
      options: [
        "展示相关的日志片段，高亮关键信息，解释日志含义",
        "展示完整的日志文件",
        "只提供日志文件的路径",
        "不应该在文档中包含日志",
      ],
      answer: 0,
      rationale:
        "展示相关日志片段并解释含义，帮助用户理解如何从日志中诊断问题，而非展示冗长的完整日志。",
    },
    {
      id: "tw-w3-3-q6",
      question: "排错文档的标题应该如何命名？",
      options: [
        "使用用户可能搜索的症状或错误信息作为标题",
        "使用技术内部代码作为标题",
        "使用通用的'故障排除'作为所有标题",
        "使用日期和版本号作为标题",
      ],
      answer: 0,
      rationale:
        "使用用户可能搜索的症状或错误信息作为标题，提高文档的可发现性。",
    },
    {
      id: "tw-w3-3-q7",
      question: "在排错文档中，'预期结果'与'实际结果'的对比有什么作用？",
      options: [
        "帮助用户确认是否遇到相同问题，也帮助支持人员快速理解问题",
        "增加文档的长度显得更专业",
        "只是格式规范的要求",
        "用于统计错误发生率",
      ],
      answer: 0,
      rationale:
        "对比预期和实际结果让用户确认问题，也让支持人员快速理解用户的期望与现实的差距。",
    },
  ],
  // Lesson 4: 图表与示意图（可维护）(7题)
  "tw-w3-4": [
    {
      id: "tw-w3-4-q1",
      question: "Mermaid 图表工具的核心优势是什么？",
      options: [
        "使用 Markdown 风格的文本语法定义图表，可版本控制且易于维护",
        "提供丰富的图形编辑界面",
        "生成的图表文件最小",
        "只支持流程图一种类型",
      ],
      answer: 0,
      rationale:
        "Mermaid 使用文本定义图表，可以用 Git 版本控制，比二进制图片文件更易于维护和协作。",
    },
    {
      id: "tw-w3-4-q2",
      question: "选择使用代码生成图表（如 Mermaid）而非截图的主要原因是什么？",
      options: [
        "代码图表可版本控制、易于更新、且支持自动化生成",
        "代码图表加载速度更快",
        "代码图表更美观",
        "截图无法嵌入到文档中",
      ],
      answer: 0,
      rationale:
        "代码图表可以用 Git 追踪变更，修改时只需编辑文本，且可以集成到 CI/CD 流程自动生成。",
    },
    {
      id: "tw-w3-4-q3",
      question: "Mermaid 支持哪些类型的图表？",
      options: [
        "流程图、时序图、类图、甘特图、实体关系图等 30+ 种类型",
        "只支持流程图",
        "只支持流程图和时序图",
        "只支持简单的框图",
      ],
      answer: 0,
      rationale:
        "Mermaid 支持 30+ 种图表类型，包括流程图、时序图、类图、状态图、甘特图、ER图等。",
    },
    {
      id: "tw-w3-4-q4",
      question: "在技术文档中使用图表的最佳时机是什么？",
      options: [
        "当文字难以清晰表达复杂的流程、架构或关系时",
        "在每个段落后都添加图表",
        "只在文档开头使用图表",
        "图表可以完全替代文字说明",
      ],
      answer: 0,
      rationale:
        "图表应用于补充文字难以表达的内容，如复杂流程、系统架构、数据关系等，而非替代文字说明。",
    },
    {
      id: "tw-w3-4-q5",
      question: "时序图（Sequence Diagram）最适合用于展示什么？",
      options: [
        "多个参与者之间的交互顺序和消息传递",
        "数据的统计分布",
        "项目的进度安排",
        "代码的类继承关系",
      ],
      answer: 0,
      rationale:
        "时序图展示参与者之间按时间顺序的交互过程，适合描述 API 调用流程、系统组件通信等。",
    },
    {
      id: "tw-w3-4-q6",
      question: "图表的替代文本（Alt Text）为什么重要？",
      options: [
        "为视障用户提供无障碍访问，也在图片加载失败时提供信息",
        "用于 SEO 优化",
        "是 Markdown 语法的强制要求",
        "让图表看起来更专业",
      ],
      answer: 0,
      rationale:
        "替代文本是无障碍性的重要组成部分，帮助使用屏幕阅读器的用户理解图表内容。",
    },
    {
      id: "tw-w3-4-q7",
      question: "使用 PlantUML 或 Mermaid 这类工具的可维护性优势是什么？",
      options: [
        "图表定义是文本格式，可以像代码一样进行 diff、review 和版本控制",
        "生成的图片质量更高",
        "支持更多的颜色选项",
        "不需要安装任何工具",
      ],
      answer: 0,
      rationale:
        "文本格式的图表定义可以使用 Git 追踪变更，在 PR 中进行代码审查，比二进制图片更易维护。",
    },
  ],
};
