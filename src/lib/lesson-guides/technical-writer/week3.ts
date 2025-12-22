import type { LessonGuide } from "../types"

export const week3Guides: Record<string, LessonGuide> = {
    "tw-w3-1": {
        lessonId: "tw-w3-1",
        background: [
            "【HTTP 本质】MDN 定义：HTTP 是应用层协议，采用客户端-服务器模型——客户端发起请求，服务器返回响应。它是无状态协议（Stateless），服务器不在请求间保留会话数据，可通过 Cookie/Session 添加状态。",
            "【请求方法语义】九种标准方法：GET（读取，幂等）、POST（创建/提交）、PUT（完全替换，幂等）、PATCH（部分更新）、DELETE（删除，幂等）、HEAD（只获取元数据）、OPTIONS（查询支持的方法）、CONNECT（建立隧道）、TRACE（诊断追踪）。",
            "【状态码五分类】1xx（信息性）、2xx（成功：200 OK、201 Created、204 No Content）、3xx（重定向：301 永久、302 临时、304 未修改）、4xx（客户端错误：400 Bad Request、401 未认证、403 无权限、404 不存在）、5xx（服务器错误：500 内部错误、502 网关错误、503 服务不可用）。",
            "【JSON 规范定义】ECMA-404 标准：'JSON is a lightweight data-interchange format'——轻量级数据交换格式。基于两个结构：对象（{} 名值对无序集合）和数组（[] 有序值集合）。",
            "【JSON 数据类型】六种值类型：字符串（必须双引号）、数字（不支持八进制/十六进制）、布尔值（true/false）、null、对象（嵌套）、数组（嵌套）。独立于编程语言，采用 C 语言族约定。"
        ],
        keyDifficulties: [
            "【状态码易混淆组】401 Unauthorized（未认证，需要登录）vs 403 Forbidden（已认证但无权限）；404 Not Found（资源不存在）vs 410 Gone（资源曾存在但已永久删除）；200 OK vs 201 Created vs 204 No Content。",
            "【幂等性理解】GET、PUT、DELETE 是幂等的（多次执行结果相同），POST 不是幂等的（每次可能创建新资源）。PATCH 的幂等性取决于具体实现。文档要准确描述每个端点的行为。",
            "【JSON 格式严格性】键名必须用双引号（不能单引号）、不支持注释、尾随逗号非法、不支持 undefined。文档中的 JSON 示例必须是有效 JSON——可用 jsonlint 验证。",
            "【Headers 文档化】哪些 Header 是必需的（如 Authorization、Content-Type）？哪些是可选的？默认值是什么？Accept 头如何影响响应格式？文档要清晰说明。"
        ],
        handsOnPath: [
            "用 curl -v 发送 GET 请求到 https://api.github.com，观察完整的请求头和响应头。记录状态码、Content-Type、Cache-Control 等关键头。理解 HTTP 交互的完整结构。",
            "用 curl -X POST -H 'Content-Type: application/json' -d '{\"key\":\"value\"}' 发送 POST 请求。观察请求体如何发送，响应如何返回。对比 GET 和 POST 的差异。",
            "为一个 API 端点写完整文档：URL、方法、请求头表格、请求体 JSON Schema、响应状态码表格（200/400/401/404/500）、响应体示例。确保 JSON 示例可复制粘贴使用。",
            "故意构造错误请求（缺少必需参数、无效 JSON、错误认证），记录错误响应的状态码和响应体。为每种错误场景补充文档说明。"
        ],
        selfCheck: [
            "【方法语义】你能否解释 GET、POST、PUT、PATCH、DELETE 的语义差异？知道哪些是幂等的？",
            "【状态码区分】你能否区分 200/201/204、401/403、404/410 的使用场景？",
            "【JSON 有效性】你文档中的 JSON 示例是否都是有效 JSON？是否用工具验证过？",
            "【Headers 完整性】你是否清晰描述了每个 API 需要的 Headers？哪些必需、哪些可选？",
            "【错误文档化】你是否记录了常见的错误响应？状态码、错误消息、解决建议是否齐全？"
        ],
        extensions: [
            "【HTTP 演进】了解 HTTP/1.1 → HTTP/2（多路复用、头部压缩、二进制帧）→ HTTP/3（基于 QUIC，更低延迟）的演进，理解为什么需要新版本。",
            "【RESTful 设计】学习 RESTful API 设计最佳实践：资源命名（复数名词）、版本控制（/v1/）、分页（offset/limit 或 cursor）、过滤与排序。",
            "【OpenAPI 规范】使用 OpenAPI/Swagger 结构化描述 API：paths、schemas、securityDefinitions。可自动生成文档和客户端 SDK。",
            "【工具链】Postman/Insomnia 测试 API 并生成可分享的请求集合；httpie 作为 curl 的现代替代。"
        ],
        sourceUrls: [
            "https://developer.mozilla.org/en-US/docs/Web/HTTP",
            "https://www.rfc-editor.org/rfc/rfc9110",
            "https://www.json.org/json-en.html"
        ]
    },
    "tw-w3-2": {
        lessonId: "tw-w3-2",
        background: [
            "【Bash 基础】The Art of Command Line 强调：'type `man bash` and at least skim the whole thing; it's pretty easy to follow and not that long'——系统学习 Bash 是命令行熟练的基础，而非零散技巧。",
            "【curl 定位】curl 是命令行数据传输的标准工具，支持 HTTP、FTP 等协议。它是 API 文档中演示请求的事实标准——几乎所有 API 文档都用 curl 示例。",
            "【管道与重定向】'`>` overwrites output files while `>>` appends, `|` chains commands'——管道连接命令形成数据处理流水线，重定向控制输出去向。stdout 和 stderr 需要区分处理。",
            "【可复现性原则】技术文档中的命令示例必须'可复制粘贴即运行'——用户不应该需要猜测、调整或补充任何内容。这是文档可用性的硬指标。",
            "【环境变量模式】用 $API_KEY、$BASE_URL 等环境变量替代硬编码值，让命令示例更安全（不暴露密钥）、更灵活（用户替换自己的值），也更易于跨环境复用。"
        ],
        keyDifficulties: [
            "【复现性三要素】路径（相对 vs 绝对）、环境配置（依赖、版本）、权限要求（sudo、文件权限）——任一缺失都会导致'在我机器上能跑'但读者失败。",
            "【占位符标注】用户需要替换的值必须明确标注：大写变量名（API_KEY）、尖括号（<your-token>）、或行内注释说明。不能假设用户能'猜到'哪些需要替换。",
            "【多行命令续行】长命令换行时用反斜杠（\\\\）续行，但必须明确说明这是'一条完整命令'。Windows 和 Unix 续行符不同（^ vs \\\\），跨平台文档需要注明。",
            "【输出呈现平衡】命令输出应足够让用户验证成功，但不能太长。curl -v 的完整输出可能有 50+ 行，文档中应截取关键部分并用省略号（...）标记。"
        ],
        handsOnPath: [
            "用 curl -v https://api.github.com 观察完整的 HTTP 交互：请求头、响应头、响应体。理解 -v 输出中 > 表示发送、< 表示接收的含义。",
            "用 curl -X POST -H 'Content-Type: application/json' -d '{\"key\":\"value\"}' 发送 POST 请求，对比 -d 和 -F 的区别（表单 vs JSON）。",
            "为同一 API 写两版命令：硬编码版（curl -H 'Authorization: Bearer sk-xxx'）和环境变量版（curl -H \"Authorization: Bearer $API_KEY\"），并说明 export API_KEY=xxx 的设置方式。",
            "使用管道处理 JSON 响应：curl -s https://api.github.com | jq '.current_user_url'，展示 -s（静默）和 jq 的组合用法。",
            "写一个三步骤的命令教程：(1) 检查工具版本 curl --version，(2) 发送请求，(3) 验证响应。每步附上预期输出的关键行。"
        ],
        selfCheck: [
            "【复制测试】你的命令示例是否可以直接复制粘贴执行？找一个没看过文档的人测试。",
            "【占位符清晰】用户需要替换的部分是否用大写或尖括号明确标注？是否说明了替换规则？",
            "【依赖说明】你是否说明了命令需要的工具（curl、jq）及其版本要求？是否提供了安装指引？",
            "【输出验证】你的预期输出是否足够让用户确认成功？是否截取了关键部分而非全量输出？",
            "【跨平台兼容】你的命令在 macOS、Linux、Windows（Git Bash/WSL）上都能运行吗？是否注明了平台差异？"
        ],
        extensions: [
            "【curl 高级】学习 curl 的代理（-x）、Cookie（-c/-b）、限速（--limit-rate）、断点续传（-C -）等高级功能：https://curl.se/docs/manual.html",
            "【jq 处理】掌握 jq 命令行 JSON 处理：https://stedolan.github.io/jq/ —— 提取（.field）、过滤（select）、转换（map）JSON 数据。",
            "【命令行艺术】The Art of Command Line 完整指南：https://github.com/jlevy/the-art-of-command-line —— 键盘快捷键、历史搜索、进程管理等效率技巧。",
            "【httpie 替代】现代 HTTP 客户端 httpie：语法更简洁（http GET api.com）、输出更美观（自动语法高亮），适合教学场景。"
        ],
        sourceUrls: [
            "https://github.com/jlevy/the-art-of-command-line",
            "https://curl.se/docs/manual.html",
            "https://www.writethedocs.org/guide/writing/reStructuredText.html"
        ]
    },
    "tw-w3-3": {
        lessonId: "tw-w3-3",
        background: [
            "【排错文档本质】排错文档帮助用户从症状定位原因——它是用户遇到问题时最需要的文档类型。核心结构：症状描述 → 可能原因 → 解决步骤 → 验证方法。",
            "【Google 通知四分类】Note（相关但非关键信息）、Caution（建议谨慎操作）、Warning（不可逆操作或重大风险）、Success（仅用于交互式内容）。每种类型有明确的使用场景。",
            "【通知使用克制】Google 风格指南强调：'Readers skip elements on the page, including notices, that are outside their focus of interest'——过度使用会降低视觉区分度和有效性。",
            "【模板价值】Write the Docs 指出模板是'established patterns for common documentation types'——包括 quickstarts、how-to、troubleshooting、release notes 等，帮助作者避免空白页焦虑。",
            "【快速绕过优先】好的排错文档优先给出'快速绕过'方案（Workaround），让时间紧迫的用户先解除阻塞，再提供根因分析和完整修复。"
        ],
        keyDifficulties: [
            "【症状描述准确性】用用户可能搜索的关键词描述症状——错误消息原文、现象描述、操作场景。用户的描述方式可能与技术术语不同。",
            "【多因一果处理】同一症状可能由多个原因导致，需按'最常见 → 最罕见'顺序列出。每个原因配对应的诊断步骤和解决方案。",
            "【Warning 适度使用】Google：Warning 仅用于'irreversible actions or significant risks—potential data loss, security breaches, or financial harm'。过多 Warning 会让用户麻木。",
            "【复现步骤完整性】复现步骤必须包含：环境信息（OS、版本）、操作序列、预期结果、实际结果。缺少任何一项都会影响问题定位。"
        ],
        handsOnPath: [
            "收集项目中最常见的 5 个用户问题（从 Issue、支持工单、社区提问），按'症状 → 可能原因（按概率排序）→ 解决方案 → 验证方法'格式记录。",
            "为一个真实的错误消息写排错文档：完整引用错误消息文本（便于搜索匹配）、列出 2-3 个可能原因、每个原因对应具体的解决步骤。",
            "在排错文档中适当添加通知：用 Note 补充背景信息、用 Caution 提醒可能的副作用、用 Warning 标记数据丢失风险。对比有无通知的阅读体验。",
            "创建'快速检查清单'：用户遇到问题时首先检查的 5 个常见原因（如：网络连接、认证过期、版本兼容性、权限不足、配置错误）。"
        ],
        selfCheck: [
            "【可搜索性】用户能否通过搜索错误消息找到你的排错文档？症状描述是否用了用户的语言而非技术术语？",
            "【原因排序】多个可能原因是否按概率排序？用户能否快速排除不相关的原因？",
            "【验证闭环】每个解决步骤是否有验证方法？用户如何知道问题已经解决？",
            "【绕过优先】是否提供了'快速绕过'方案？还是只有需要深入理解的根因分析？",
            "【通知适度】Warning 是否只用于真正危险的操作？是否避免了过度使用导致的'狼来了'效应？"
        ],
        extensions: [
            "【决策树排错】学习用决策树组织复杂的排错流程：'如果 A 则检查 B，否则检查 C'的分支结构，适合多因一果场景。",
            "【AWS/Azure 排错参考】研究 AWS、Azure、GCP 的故障排除指南组织方式——它们是行业最佳实践的代表。",
            "【FAQ 到正式文档】建立 FAQ 到正式排错文档的转化流程：高频问题应该升级为正式文档，而非堆积在 FAQ 中。",
            "【提交问题入口】在排错文档末尾添加'仍然无法解决？'入口：引导用户提供完整信息（环境、步骤、日志），减少支持团队的来回沟通。"
        ],
        sourceUrls: [
            "https://developers.google.com/style/notices",
            "https://podcast.writethedocs.org/2020/07/19/episode-30-documentation-templates/",
            "https://keepachangelog.com/en/1.1.0/"
        ]
    },
    "tw-w3-4": {
        lessonId: "tw-w3-4",
        background: [
            "Mermaid 是基于 JavaScript 的图表工具——用类 Markdown 的文本定义生成图表。它让图表可以版本控制、可以 diff、可以协作编辑。",
            "Mermaid 支持多种图表类型：流程图（Flowchart）、时序图（Sequence Diagram）、类图（Class Diagram）、状态图、ER 图、甘特图、思维导图等。",
            "Diátaxis 框架中的 Explanation 文档需要图表来'建立连接'——在不同概念间织造理解网络，帮助读者建立心智模型。",
            "图表的核心价值：将复杂的系统结构、流程、关系可视化，降低理解门槛。一图胜千言，尤其适合架构和流程说明。"
        ],
        keyDifficulties: [
            "图表类型选择：流程图展示步骤、时序图展示交互、类图展示结构、状态图展示转换——选错类型会让读者更困惑。",
            "抽象层级把控：图表应该简化复杂性，而非展示所有细节。关键是识别'读者需要理解什么'，省略不必要的细节。",
            "可维护性：图片（PNG/JPG）难以更新，文本化的图表（Mermaid）可以随代码一起版本控制和 review。",
            "可访问性：图表需要配合文字说明。视觉障碍用户依赖图表的 alt 文本或等效的文字描述。"
        ],
        handsOnPath: [
            "用 Mermaid 画一个简单的流程图：展示一个功能的工作流程（如用户登录流程），包含决策分支和结果。",
            "用 Mermaid 画一个时序图：展示多个组件之间的交互（如 API 请求的处理流程），标注每个步骤。",
            "在你的文档中嵌入 Mermaid 图表：确保在 GitHub、文档站点上都能正确渲染。",
            "为图表添加文字说明：在图表前后用文字解释要点，确保不看图也能理解核心信息。"
        ],
        selfCheck: [
            "你选择的图表类型是否适合要表达的内容？流程用流程图、交互用时序图、结构用类图？",
            "图表是否足够简洁？是否只展示了读者需要理解的关键信息？",
            "图表是否使用文本格式（如 Mermaid）而非图片？能否随文档一起版本控制？",
            "图表是否配合文字说明？不看图能否理解核心要点？",
            "图表在不同平台（GitHub、文档站点、暗色主题）上渲染是否正常？"
        ],
        extensions: [
            "深入学习 Mermaid 语法：https://mermaid.js.org/ —— 探索更多图表类型和自定义选项。",
            "了解 PlantUML：https://plantuml.com/ —— 另一个流行的文本化图表工具，支持更多 UML 图表。",
            "学习 C4 Model：https://c4model.com/ —— 一种描述软件架构的可视化方法，从上下文到代码分层展示。",
            "配置 VS Code 的 Mermaid 预览插件，实时查看图表效果。"
        ],
        sourceUrls: [
            "https://mermaid.js.org/",
            "https://plantuml.com/",
            "https://diataxis.fr/explanation/"
        ]
    }
}
