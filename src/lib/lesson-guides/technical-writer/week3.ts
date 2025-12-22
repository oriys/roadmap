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
            "命令行是技术文档中最常见的示例形式——用户需要复制粘贴命令来完成任务。可复现的命令示例是文档可用性的关键。",
            "curl 是命令行数据传输工具，支持 HTTP、FTP 等多种协议。它是测试 API 和演示请求的标准工具。",
            "环境变量（如 API_KEY、BASE_URL）让命令示例更安全、更灵活。用户可以替换自己的值而不需要修改命令。",
            "管道（|）和重定向（>、<）是命令行的核心概念——将一个命令的输出传递给另一个命令，或保存到文件。"
        ],
        keyDifficulties: [
            "命令的可复现性：示例命令必须能直接复制粘贴执行。需要注意：路径（相对 vs 绝对）、环境变量、权限要求、依赖工具版本。",
            "占位符的表示：用户需要替换的部分（如 API_KEY、YOUR_USERNAME）应该明确标注，通常用大写或尖括号（<your-api-key>）表示。",
            "多行命令的换行：长命令需要换行时，注意使用反斜杠（\\）续行，并说明这是一个完整命令。",
            "输出的呈现：命令输出应该包含足够信息让用户验证成功，但不要太长。可以用省略号（...）表示截断。"
        ],
        handsOnPath: [
            "用 curl 测试一个公开 API，写出完整的命令示例，包含所有必要的参数（-H、-d 等），确保可以直接复制执行。",
            "为同一个 API 调用写两个版本的命令：一个使用硬编码值，一个使用环境变量（如 $API_KEY），说明如何设置环境变量。",
            "写一个多步骤的命令行教程：每步一个命令，附上预期输出，解释每个参数的作用。",
            "用 jq 处理 JSON 响应（如 curl ... | jq '.data'），展示如何提取特定字段，让输出更易读。"
        ],
        selfCheck: [
            "你的命令示例是否可以直接复制粘贴执行？是否有遗漏的参数或前置条件？",
            "用户需要替换的部分是否明确标注？（如 API_KEY、<your-token>）",
            "你是否说明了命令需要的工具版本和安装方式？",
            "多行命令是否正确使用了续行符（\\）？",
            "命令输出是否包含足够信息让用户验证成功？是否过长需要截断？"
        ],
        extensions: [
            "学习更多 curl 技巧：https://curl.se/docs/manual.html —— 代理、Cookie、上传、限速等。",
            "掌握 jq 命令行 JSON 处理：https://stedolan.github.io/jq/ —— 提取、过滤、转换 JSON 数据。",
            "学习命令行艺术：https://github.com/jlevy/the-art-of-command-line —— 提升命令行效率。",
            "为命令示例添加语法高亮和复制按钮（使用 SSG 的代码块功能）。"
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
            "排错文档（Troubleshooting）帮助用户从症状定位原因，快速解决问题。它是用户遇到问题时最需要的文档类型。",
            "排错文档的核心结构：症状描述 → 可能原因 → 解决步骤 → 验证方法。用户应该能快速定位自己的问题。",
            "Google 风格指南强调使用通知元素：Note（补充信息）、Caution（谨慎操作）、Warning（危险警告）——帮助用户识别关键信息。",
            "好的排错文档优先给出'快速绕过'方案，让用户先解决问题，再解释根因。时间紧迫的用户不想看长篇解释。"
        ],
        keyDifficulties: [
            "症状描述的准确性：用户描述问题的方式可能与技术术语不同。需要用用户可能搜索的关键词（错误消息、现象）来描述症状。",
            "多因一果的处理：同一个症状可能由多个原因导致。需要帮助用户快速排除，通常按'最常见'到'最罕见'的顺序列出。",
            "复现步骤的完整性：用户需要知道如何复现问题以验证是否修复。复现步骤要包含：环境、操作、预期结果、实际结果。",
            "警告的适度使用：过多的 Warning 会让用户麻木。只在真正可能导致数据丢失或不可逆后果时使用 Warning。"
        ],
        handsOnPath: [
            "收集你项目中最常见的 5 个用户问题（从 Issue、支持工单、社区提问），按'症状 → 原因 → 解决方案'格式记录。",
            "为一个常见错误消息写排错文档：包含错误消息全文、可能原因（按概率排序）、每个原因的解决步骤、验证方法。",
            "在排错文档中添加适当的通知：用 Note 补充背景信息，用 Warning 提醒可能的风险。",
            "创建一个'快速检查清单'：用户遇到问题时首先检查的 3-5 个常见原因（如：网络连接、权限、版本兼容性）。"
        ],
        selfCheck: [
            "你的排错文档是否从用户视角描述症状？用户能否通过搜索错误消息找到它？",
            "多个可能原因是否按概率排序？用户能否快速排除不相关的原因？",
            "每个解决步骤是否包含验证方法？用户如何知道问题已解决？",
            "你是否提供了'快速绕过'方案？还是只有长篇的根因分析？",
            "Warning 的使用是否适度？是否只用于真正危险的操作？"
        ],
        extensions: [
            "研究优秀的排错文档示例：AWS、Azure、GCP 的故障排除指南组织方式。",
            "学习使用决策树（Decision Tree）组织复杂的排错流程：'如果...那么...'的分支结构。",
            "建立 FAQ 到正式排错文档的转化流程：高频问题应该升级为正式文档。",
            "为排错文档添加'提交问题'入口：当现有方案无法解决时，引导用户提供完整信息。"
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
