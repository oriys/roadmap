import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

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
            "【Mermaid 定位】Mermaid 是 JavaScript 工具，将'Markdown-inspired text definitions'转换为图表。它获得了 2019 年 JavaScript 开源奖'最令人兴奋的技术应用'。",
            "【Mermaid 图表类型】支持 25+ 种图表：流程图、时序图、类图、状态图、Git Graph、甘特图、ER 图、C4 架构图、思维导图、Kanban、User Journey 等。",
            "【PlantUML 定位】PlantUML 是开源工具，'通过简单的文本描述来绘制精美的 UML 图表'——支持 9 种标准 UML 图和多种非 UML 图（JSON/YAML、Gantt、思维导图等）。",
            "【文本图表优势】文本格式的图表可以纳入 Git 仓库、与代码一起版本控制、通过 PR 进行代码审查——这是二进制图片文件无法实现的。",
            "【Explanation 中的图表】Diátaxis：Explanation 文档'深化和拓展读者对主题的理解，带来 clarity、光线和背景'——图表帮助建立连接、织就理解网络。"
        ],
        keyDifficulties: [
            "【图表类型选择】流程图展示步骤和决策、时序图展示组件交互、类图展示结构关系、状态图展示状态转换——选错类型会让读者更困惑而非更清晰。",
            "【抽象层级把控】图表应简化复杂性而非展示所有细节。关键问题：'读者需要理解什么？'省略不必要的细节，聚焦核心概念。",
            "【可访问性要求】图表需要配合文字说明——视觉障碍用户依赖 alt 文本或等效的文字描述。不看图也应能理解核心要点。",
            "【渲染兼容性】Mermaid 在不同平台（GitHub、GitLab、文档站点、暗色主题）的渲染可能有差异，需要测试验证。"
        ],
        handsOnPath: [
            "用 Mermaid 画一个流程图：展示一个功能的工作流程（如用户登录流程），包含决策分支（菱形）和结果（矩形）。",
            "用 Mermaid 画一个时序图：展示多个组件之间的交互（如 API 请求处理流程：Client → API Gateway → Service → Database）。",
            "在 GitHub README 中嵌入 Mermaid 图表（使用 ```mermaid 代码块），验证渲染效果。",
            "为图表添加文字说明：在图表前后用文字解释要点，确保不看图也能理解核心信息——满足可访问性要求。",
            "对比 Mermaid 和 PlantUML：用两种工具画同一个时序图，体验语法和渲染效果的差异。"
        ],
        selfCheck: [
            "【类型适配】你选择的图表类型是否适合要表达的内容？流程用流程图、交互用时序图、结构用类图？",
            "【简洁聚焦】图表是否足够简洁？是否只展示了读者需要理解的关键信息？是否省略了不必要的细节？",
            "【文本格式】图表是否使用文本格式（如 Mermaid）而非图片？能否随文档一起版本控制和代码审查？",
            "【文字配合】图表是否配合文字说明？不看图能否理解核心要点？是否提供了 alt 文本？",
            "【跨平台验证】图表在 GitHub、文档站点、暗色/亮色主题下渲染是否正常？"
        ],
        extensions: [
            "【Mermaid 深入】完整语法指南：https://mermaid.js.org/ —— 探索主题定制、交互式图表、更多图表类型。",
            "【PlantUML 参考】PlantUML 语言指南：https://plantuml.com/ —— 支持更多 UML 标准图表，适合正式的架构文档。",
            "【C4 Model】软件架构可视化方法：https://c4model.com/ —— Context → Container → Component → Code 四层抽象，适合描述系统架构。",
            "【VS Code 插件】安装 Mermaid Preview 或 PlantUML 插件，实现实时预览和语法高亮。"
        ],
        sourceUrls: [
            "https://mermaid.js.org/",
            "https://plantuml.com/",
            "https://diataxis.fr/explanation/"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "tw-w3-1": [
        {
            id: "tw-w3-1-q1",
            question: "HTTP 状态码 401 和 403 的核心区别是什么？",
            options: [
                "401 表示服务器错误，403 表示客户端错误",
                "401 表示未认证（需要登录），403 表示已认证但无权限",
                "401 表示资源不存在，403 表示资源被删除",
                "两者没有区别，可以互换使用"
            ],
            answer: 1,
            rationale: "401 Unauthorized 表示未认证（需要登录），403 Forbidden 表示已认证但无权限。这是状态码中最容易混淆的一组。"
        },
        {
            id: "tw-w3-1-q2",
            question: "JSON 格式中，以下哪项是非法的？",
            options: [
                "使用双引号作为键名",
                "嵌套对象和数组",
                "使用单引号作为键名或在末尾添加逗号",
                "使用 null 作为值"
            ],
            answer: 2,
            rationale: "JSON 格式严格要求：键名必须用双引号（不能单引号）、不支持注释、尾随逗号非法、不支持 undefined。文档中的 JSON 示例必须是有效 JSON。"
        },
        {
            id: "tw-w3-1-q3",
            question: "HTTP 方法中，哪些方法具有幂等性（多次执行结果相同）？",
            options: [
                "只有 GET 是幂等的",
                "GET、PUT、DELETE 是幂等的，POST 不是",
                "所有方法都是幂等的",
                "只有 POST 和 PUT 是幂等的"
            ],
            answer: 1,
            rationale: "GET、PUT、DELETE 是幂等的（多次执行结果相同），POST 不是幂等的（每次可能创建新资源）。文档要准确描述每个端点的行为。"
        }
    ],
    "tw-w3-2": [
        {
            id: "tw-w3-2-q1",
            question: "在技术文档中，为什么推荐使用环境变量（如 $API_KEY）替代硬编码值？",
            options: [
                "环境变量运行更快",
                "更安全（不暴露密钥）、更灵活（用户替换自己的值）、更易跨环境复用",
                "环境变量更容易在搜索引擎中被发现",
                "硬编码值会导致编译错误"
            ],
            answer: 1,
            rationale: "用 $API_KEY、$BASE_URL 等环境变量替代硬编码值，让命令示例更安全（不暴露密钥）、更灵活（用户替换自己的值），也更易于跨环境复用。"
        },
        {
            id: "tw-w3-2-q2",
            question: "命令示例的'可复现性三要素'包括哪些？",
            options: [
                "速度、准确性、美观性",
                "路径、环境配置、权限要求",
                "语法、缩进、注释",
                "编程语言、操作系统、浏览器"
            ],
            answer: 1,
            rationale: "复现性三要素：路径（相对 vs 绝对）、环境配置（依赖、版本）、权限要求（sudo、文件权限）——任一缺失都会导致读者无法成功执行命令。"
        },
        {
            id: "tw-w3-2-q3",
            question: "文档中用户需要替换的占位符应该如何标注？",
            options: [
                "不需要特别标注，用户会自己判断",
                "用大写变量名（API_KEY）、尖括号（<your-token>）或行内注释明确标注",
                "用小写字母和下划线标注",
                "用粗体字标注"
            ],
            answer: 1,
            rationale: "用户需要替换的值必须明确标注：大写变量名（API_KEY）、尖括号（<your-token>）、或行内注释说明。不能假设用户能'猜到'哪些需要替换。"
        }
    ],
    "tw-w3-3": [
        {
            id: "tw-w3-3-q1",
            question: "排错文档的核心结构是什么？",
            options: [
                "功能介绍 → 使用方法 → 常见问题",
                "症状描述 → 可能原因 → 解决步骤 → 验证方法",
                "问题 → 回答 → 参考链接",
                "错误码 → 错误信息 → 联系支持"
            ],
            answer: 1,
            rationale: "排错文档帮助用户从症状定位原因，核心结构为：症状描述 → 可能原因 → 解决步骤 → 验证方法。"
        },
        {
            id: "tw-w3-3-q2",
            question: "Google 风格指南的 Warning 通知应该在什么场景使用？",
            options: [
                "任何重要信息都应该用 Warning 标记",
                "仅用于不可逆操作或重大风险——如数据丢失、安全漏洞、经济损失",
                "用于提示用户阅读其他文档",
                "用于标记新功能或更新"
            ],
            answer: 1,
            rationale: "Google：Warning 仅用于'不可逆操作或重大风险——潜在数据丢失、安全漏洞或经济损失'。过多 Warning 会让用户麻木（'狼来了'效应）。"
        },
        {
            id: "tw-w3-3-q3",
            question: "好的排错文档为什么应该优先提供'快速绕过'方案？",
            options: [
                "因为根因分析太复杂不值得写",
                "让时间紧迫的用户先解除阻塞，再提供根因分析和完整修复",
                "因为用户不关心根本原因",
                "因为快速绕过方案比根因修复更好"
            ],
            answer: 1,
            rationale: "好的排错文档优先给出快速绕过方案（Workaround），让时间紧迫的用户先解除阻塞，再提供根因分析和完整修复。"
        }
    ],
    "tw-w3-4": [
        {
            id: "tw-w3-4-q1",
            question: "文本格式图表（如 Mermaid）相比二进制图片文件的核心优势是什么？",
            options: [
                "文本格式图表渲染更美观",
                "可纳入 Git 仓库、版本控制、通过 PR 进行代码审查",
                "文本格式图表加载速度更快",
                "文本格式图表支持更多颜色和样式"
            ],
            answer: 1,
            rationale: "文本格式的图表可以纳入 Git 仓库、与代码一起版本控制、通过 PR 进行代码审查——这是二进制图片文件无法实现的。"
        },
        {
            id: "tw-w3-4-q2",
            question: "为什么图表需要配合文字说明？",
            options: [
                "因为图表本身不够美观",
                "因为视觉障碍用户依赖 alt 文本或等效的文字描述，不看图也应能理解核心要点",
                "因为图表容易过时需要文字补充",
                "因为搜索引擎无法索引图表内容"
            ],
            answer: 1,
            rationale: "图表需要配合文字说明——视觉障碍用户依赖 alt 文本或等效的文字描述。不看图也应能理解核心要点，这是可访问性的基本要求。"
        },
        {
            id: "tw-w3-4-q3",
            question: "选择图表类型时，时序图最适合展示什么内容？",
            options: [
                "步骤和决策分支",
                "多个组件之间的交互顺序",
                "类与类之间的继承关系",
                "系统状态的转换过程"
            ],
            answer: 1,
            rationale: "流程图展示步骤和决策、时序图展示组件交互、类图展示结构关系、状态图展示状态转换——选错类型会让读者更困惑。"
        }
    ]
}
