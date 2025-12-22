import type { QuizQuestion } from "../types";

export const week2: Record<string, QuizQuestion[]> = {
  // Lesson 1: Markdown 与可复用模板 (12题，答案随机分布)
  "tw-w2-1": [
    {
      id: "tw-w2-1-q1",
      question: "Markdown 由 John Gruber 于 2004 年创建时的核心设计目标是什么？",
      options: [
        "支持复杂的排版和样式控制",
        "'易读易写'——源文件本身就是可读的纯文本，同时能转换为结构化的 HTML",
        "替代 HTML 成为网页的唯一标记语言",
        "提供所见即所得的编辑体验",
      ],
      answer: 1,
      rationale:
        "Markdown 的核心理念是'纯文本即文档'——源文件无需渲染就能阅读，这种设计哲学是 Docs-as-Code 的基石。",
    },
    {
      id: "tw-w2-1-q2",
      question: "CommonMark 规范（2014 年启动）解决了 Markdown 的什么根本问题？",
      options: [
        "原始 Markdown 规范存在大量歧义，导致不同解析器行为不一致",
        "Markdown 语法太复杂，需要简化",
        "Markdown 无法支持表格和代码高亮",
        "Markdown 文件无法被搜索引擎索引",
      ],
      answer: 0,
      rationale:
        "CommonMark 提供了严格的规范和测试套件，解决了'同一文档不同平台渲染不同'的问题，是 Markdown 的事实标准。",
    },
    {
      id: "tw-w2-1-q3",
      question: "GitHub Flavored Markdown (GFM) 在 CommonMark 基础上扩展了哪些特性？",
      options: [
        "只增加了代码高亮功能",
        "增加了实时协作编辑功能",
        "表格、任务列表、删除线、代码高亮、自动链接",
        "增加了 PDF 导出功能",
      ],
      answer: 2,
      rationale:
        "GFM 扩展包括：表格（| col1 | col2 |）、任务列表（- [ ]）、删除线（~~text~~）、代码高亮（```language）、URL 自动转为可点击链接。",
    },
    {
      id: "tw-w2-1-q4",
      question: "Docs-as-Code 范式的核心价值是什么？",
      options: [
        "减少文档数量以降低维护成本",
        "用 AI 自动生成所有文档",
        "只使用 Word 格式编写文档",
        "用 Git 管理文档版本，用 PR 评审，用 CI/CD 自动发布——让文档享受与代码相同的工程实践",
      ],
      answer: 3,
      rationale:
        "Docs-as-Code 让文档可追溯、可回滚、可协作、可自动化，Markdown 是这个范式的基础格式。",
    },
    {
      id: "tw-w2-1-q5",
      question: "Markdown 中创建换行的'隐形规则'是什么？",
      options: [
        "只需按一次回车即可换行",
        "使用 \\n 转义字符",
        "行尾需要两个空格才会产生换行，否则会被合并为同一段落",
        "使用 HTML 的 <br> 标签是唯一方式",
      ],
      answer: 2,
      rationale:
        "Markdown 对空行和行尾空格敏感：行尾两空格才是换行，这是初学者常见的困惑点之一。",
    },
    {
      id: "tw-w2-1-q6",
      question: "关于 Markdown 中的图片和链接管理，以下哪种策略最合理？",
      options: [
        "始终使用绝对 URL 指向外部 CDN",
        "将所有图片嵌入为 Base64 编码",
        "内部资源用相对路径 + 构建时检查，外部链接定期验证",
        "只使用文字描述，避免使用任何图片",
      ],
      answer: 2,
      rationale:
        "资源管理策略：相对路径适合 Git 管理但需构建检查，CDN 稳定但有外部依赖，外部链接会腐烂（link rot）需定期验证。",
    },
    {
      id: "tw-w2-1-q7",
      question: "为什么模板化写作对技术文档团队很重要？",
      options: [
        "模板限制创造力，不推荐使用",
        "模板沉淀最佳实践，确保一致性，降低认知负荷，让作者聚焦内容而非格式",
        "模板只适用于法律文档",
        "模板会增加文档维护成本",
      ],
      answer: 1,
      rationale:
        "模板不是限制创造力，而是沉淀最佳实践。Quickstart、How-to、API Reference 各有固定结构，模板确保团队产出一致。",
    },
    {
      id: "tw-w2-1-q8",
      question: "Markdown 方言兼容性问题的最佳解决方案是什么？",
      options: [
        "只使用一个特定平台，禁止跨平台使用",
        "坚持 CommonMark 核心语法确保可移植性，明确目标平台，用 linter 检测不兼容语法",
        "完全放弃 Markdown，改用 HTML",
        "为每个平台维护不同版本的文档",
      ],
      answer: 1,
      rationale:
        "GitHub、GitLab、Notion、Obsidian 对 Markdown 的扩展不同。解决方案是坚持核心语法 + 明确目标平台 + 自动化检测。",
    },
    {
      id: "tw-w2-1-q9",
      question: "在 GitHub 上使用 Markdown 时，<details> 标签的作用是什么？",
      options: [
        "创建可折叠/展开的内容区域",
        "添加脚注引用",
        "创建表格的详细描述",
        "插入视频内容",
      ],
      answer: 0,
      rationale:
        "GitHub 支持 HTML 的 <details> 标签创建折叠部分，适合隐藏可选信息或长代码块。",
    },
    {
      id: "tw-w2-1-q10",
      question: "模板的'灵活边界'原则是什么意思？",
      options: [
        "模板的每个字段都可以任意填写",
        "模板只是参考，完全可以忽略",
        "必须区分'必须统一'（标题层级、元数据）和'可以灵活'（正文内容、示例选择）",
        "模板应该每周更新一次",
      ],
      answer: 2,
      rationale:
        "过度模板化会让文档变成填空题，失去针对性。核心结构强制统一，具体内容保留灵活性。",
    },
    {
      id: "tw-w2-1-q11",
      question: "执行'渲染一致性测试'时应该做什么？",
      options: [
        "只在一个编辑器中预览即可",
        "使用自动化工具检查拼写错误",
        "将同一份 Markdown 在 GitHub、VS Code 预览、目标 SSG 工具中渲染，对比差异并修复不一致",
        "确保所有图片都能正常显示",
      ],
      answer: 2,
      rationale:
        "不同平台对 Markdown 的渲染可能存在差异，需要在目标平台上验证实际效果，确保一致性。",
    },
    {
      id: "tw-w2-1-q12",
      question: "Mermaid 图表在 Markdown 文档中的价值是什么？",
      options: [
        "替代所有文字描述",
        "只能画简单的流程图",
        "用纯文本语法画流程图、时序图、甘特图、ER 图，实现'图表即代码'的版本控制",
        "需要安装专门的绘图软件",
      ],
      answer: 2,
      rationale:
        "Mermaid 让图表与文档一起版本控制，无需外部工具即可维护。GitHub 原生支持 Mermaid 代码块渲染。",
    },
  ],
  // Lesson 2: Git 基础与协作评审 (12题，答案随机分布)
  "tw-w2-2": [
    {
      id: "tw-w2-2-q1",
      question: "GitHub 官方对 Pull Request 的定义是什么？",
      options: [
        "一种强制推送代码到主分支的方式",
        "'proposals to merge code changes into a project'——在合并前讨论和审查变更的协作功能",
        "从远程仓库下载代码的命令",
        "Git 的一种分支命名规范",
      ],
      answer: 1,
      rationale:
        "GitHub 官方文档明确指出：Pull requests are proposals to merge code changes，是 GitHub 的'foundational collaboration feature'。",
    },
    {
      id: "tw-w2-2-q2",
      question: "Git 的三大核心特性是什么？",
      options: [
        "Fast（快速）、Everything is local（本地化）、Local branching on the cheap（廉价分支）",
        "Simple（简单）、Secure（安全）、Scalable（可扩展）",
        "Free（免费）、Open（开放）、Cross-platform（跨平台）",
        "Centralized（集中式）、Synchronized（同步）、Structured（结构化）",
      ],
      answer: 0,
      rationale:
        "Pro Git 书籍和 Git 官网强调这三个特性：快速版本控制、本地化操作、轻量级分支创建。",
    },
    {
      id: "tw-w2-2-q3",
      question: "PR 的四个核心标签页中，'Checks' 显示什么内容？",
      options: [
        "代码审查者的评论和建议",
        "文件变更的统计数据",
        "自动化测试和 CI/CD 工作流程的状态",
        "合并冲突的详细信息",
      ],
      answer: 2,
      rationale:
        "GitHub 文档：Checks 标签页显示自动化测试状态、构建结果和 CI/CD 工作流程状态，确保代码质量标准。",
    },
    {
      id: "tw-w2-2-q4",
      question: "Docs as Code 的核心哲学是什么？",
      options: [
        "所有文档必须由开发者编写",
        "文档应该完全自动生成",
        "代码中不应该包含任何注释",
        "用与代码相同的工具写文档：版本控制、纯文本标记语言、代码审查、自动化测试",
      ],
      answer: 3,
      rationale:
        "Write the Docs 定义：'Documentation as Code refers to a philosophy that you should be writing documentation with the same tools as code'。",
    },
    {
      id: "tw-w2-2-q5",
      question: "Draft Pull Request 的独特行为是什么？",
      options: [
        "自动运行所有 CI 检查并立即合并",
        "阻止合并且不自动通知代码所有者，适合分享进行中的工作",
        "跳过所有自动化检查以加快流程",
        "强制要求至少 3 人审核",
      ],
      answer: 1,
      rationale:
        "GitHub 文档：Draft PRs 阻止合并并跳过自动通知代码所有者，支持分享进行中的工作而无需正式审查请求。",
    },
    {
      id: "tw-w2-2-q6",
      question: "关于 PR 粒度把控，文档 PR 的最佳组织方式是什么？",
      options: [
        "尽可能把所有变更放在一个 PR 中，减少管理成本",
        "每修改一行就创建一个 PR",
        "按'一个主题一个 PR'组织，保持 Files changed 在可审查范围内",
        "只在功能完全完成后才创建 PR",
      ],
      answer: 2,
      rationale:
        "PR 太大会导致 reviewer fatigue，太小增加管理成本。文档 PR 建议按'一个主题一个 PR'组织。",
    },
    {
      id: "tw-w2-2-q7",
      question: "Git 合并冲突标记包括哪些符号？",
      options: [
        "@@@@@@@、*******、#######",
        "++++++、------、======",
        "<<<<<<<、=======、>>>>>>>",
        "[[[[[[、]]]]]]、||||||",
      ],
      answer: 2,
      rationale:
        "Git 使用 <<<<<<< 标记当前分支内容开始、======= 分隔两个版本、>>>>>>> 标记合并分支内容结束。",
    },
    {
      id: "tw-w2-2-q8",
      question: "哪些大型组织已成功实施 Docs as Code？",
      options: [
        "只有小型创业公司在使用",
        "Google、Microsoft、AWS、UK Government Digital Service 等",
        "仅限于开源社区",
        "目前没有主流组织采用",
      ],
      answer: 1,
      rationale:
        "Write the Docs 指出：Google、Microsoft、Rackspace、AWS、UK Government Digital Service 等组织已成功实施 Docs as Code。",
    },
    {
      id: "tw-w2-2-q9",
      question: "PR 的 'Files Changed' 标签页的核心价值是什么？",
      options: [
        "显示所有项目文件的列表",
        "显示提议代码与现有代码之间的差异（Diff），帮助审查者理解具体修改",
        "统计代码行数变化",
        "显示文件的创建时间",
      ],
      answer: 1,
      rationale:
        "GitHub 文档：Files Changed 标签页展示代码差异，clarifying what will be modified upon merge。",
    },
    {
      id: "tw-w2-2-q10",
      question: "文档项目的分支策略通常推荐使用什么模式？",
      options: [
        "GitFlow（复杂的多分支模型）",
        "main + feature branch（简单模式，一个功能一个分支）",
        "Trunk-based development（所有人直接提交到 main）",
        "Release branch（为每个版本维护独立分支）",
      ],
      answer: 1,
      rationale:
        "文档项目不需要复杂的分支策略，简单的 main + feature branch 模式足够——一个功能一个分支，PR 合并后删除。",
    },
    {
      id: "tw-w2-2-q11",
      question: "Git 作为分布式版本控制系统的核心优势是什么？",
      options: [
        "必须联网才能工作",
        "每个开发者拥有完整的代码库副本，支持离线工作",
        "只能存储代码，不能存储文档",
        "必须使用 GitHub 才能协作",
      ],
      answer: 1,
      rationale:
        "Git 的 'Everything is local' 特性意味着每个开发者都有完整的代码库副本，可以离线进行大部分操作。",
    },
    {
      id: "tw-w2-2-q12",
      question: "Docs as Code 带来的三大主要优势是什么？",
      options: [
        "减少文档数量、降低存储成本、简化工具链",
        "写作者与开发团队更好融合、开发者贡献初稿、功能合并可依赖文档就绪",
        "自动翻译、AI 校对、即时发布",
        "无需版本控制、无需审核、无需测试",
      ],
      answer: 1,
      rationale:
        "Write the Docs 指出 Docs as Code 的三大优势：(1) 写作者与开发团队更好融合，(2) 开发者常贡献初稿，(3) 功能合并可要求文档就绪。",
    },
  ],
  // Lesson 3: 静态站点与发布（SSG）(12题，答案随机分布)
  "tw-w2-3": [
    {
      id: "tw-w2-3-q1",
      question: "静态站点生成器（SSG）与传统动态网站的核心区别是什么？",
      options: [
        "SSG 必须使用数据库",
        "SSG 在构建时生成静态 HTML 文件，部署后无需服务器端运行时处理",
        "SSG 不支持 JavaScript",
        "SSG 只能用于博客",
      ],
      answer: 1,
      rationale:
        "SSG 在构建时生成所有 HTML 页面，部署后无需服务器端处理，加载速度快且易于托管（GitHub Pages、Netlify、Vercel）。",
    },
    {
      id: "tw-w2-3-q2",
      question: "Docusaurus 官方对自己的定位是什么？",
      options: [
        "'documentation-first static site generator'——文档优先的静态站点生成器",
        "通用的 Web 应用框架",
        "数据库管理工具",
        "代码编辑器插件",
      ],
      answer: 0,
      rationale:
        "Docusaurus 强调自己是'opinionated toward the documentation use-case'，相比 Next.js 或 Gatsby 等通用框架，更专注于文档场景。",
    },
    {
      id: "tw-w2-3-q3",
      question: "MkDocs 的配置方式有什么特点？",
      options: [
        "需要多个 JSON 配置文件",
        "单一 YAML 配置文件（mkdocs.yml），内置开发服务器提供实时预览",
        "必须通过 GUI 界面配置",
        "不支持任何配置定制",
      ],
      answer: 1,
      rationale:
        "MkDocs 以简洁著称——单一 YAML 配置文件，内置开发服务器，文件变更时自动刷新浏览器。",
    },
    {
      id: "tw-w2-3-q4",
      question: "VitePress 相比其他 SSG 工具的独特优势是什么？",
      options: [
        "只支持英文文档",
        "必须使用 React",
        "由 Vite 驱动，实现'Instant server start, lightning fast hot updates'",
        "不支持 Markdown",
      ],
      answer: 2,
      rationale:
        "VitePress 由 Vite 驱动，提供即时服务器启动和闪电般的热更新体验，并支持在 Markdown 中使用 Vue 组件。",
    },
    {
      id: "tw-w2-3-q5",
      question: "Docusaurus 遵循的 PRPL 性能优化模式中，四个字母分别代表什么？",
      options: [
        "Push、Render、Pre-cache、Lazy-load",
        "Parse、Run、Process、Load",
        "Prepare、Read、Print、Link",
        "Package、Release、Publish、Launch",
      ],
      answer: 0,
      rationale:
        "PRPL 是 Google 提出的性能模式：Push（推送关键资源）、Render（渲染初始路由）、Pre-cache（预缓存剩余路由）、Lazy-load（懒加载按需路由）。",
    },
    {
      id: "tw-w2-3-q6",
      question: "选择 SSG 工具时，应该根据什么因素决定？",
      options: [
        "只看工具的 GitHub star 数",
        "团队技术栈（React/Vue/Python）和项目需求（版本管理、i18n、搜索等）",
        "选择最新发布的工具",
        "选择配置最复杂的工具",
      ],
      answer: 1,
      rationale:
        "Docusaurus 适合 React 生态和需要版本管理的大型项目，MkDocs 适合 Python 生态和快速上手，VitePress 适合 Vue 生态和深度定制。",
    },
    {
      id: "tw-w2-3-q7",
      question: "MDX 相对于纯 Markdown 的主要优势是什么？",
      options: [
        "文件体积更小",
        "支持在 Markdown 中嵌入 React 组件，创建交互式内容",
        "加载速度更快",
        "不需要任何构建步骤",
      ],
      answer: 1,
      rationale:
        "Docusaurus 支持 MDX，允许在 Markdown 中嵌入 React 组件，实现交互式文档内容，超越纯 Markdown 的静态限制。",
    },
    {
      id: "tw-w2-3-q8",
      question: "关于 SSG 工具的配置复杂度管理，最佳实践是什么？",
      options: [
        "一开始就配置所有可能需要的功能",
        "从最小配置开始，按需添加功能（搜索 → 版本管理 → i18n）",
        "直接复制其他项目的完整配置",
        "不做任何配置，只使用默认设置",
      ],
      answer: 1,
      rationale:
        "SSG 工具功能丰富意味着配置项多。建议从最小可用配置开始，按需逐步添加功能，避免一开始就追求完美配置。",
    },
    {
      id: "tw-w2-3-q9",
      question: "部署 SSG 站点到 GitHub Pages 需要理解的关键概念是什么？",
      options: [
        "只需要上传源码即可",
        "构建产物（dist/build 目录）、部署目标、CI/CD 触发（on push → build → deploy）",
        "GitHub Pages 会自动从源码构建",
        "不需要任何 CI/CD 配置",
      ],
      answer: 1,
      rationale:
        "需要配置 GitHub Actions workflow：push 到 main 分支触发构建，将构建产物（dist/build）部署到 GitHub Pages。",
    },
    {
      id: "tw-w2-3-q10",
      question: "Docusaurus 提供的文档特有功能包括哪些？",
      options: [
        "只有基础的 Markdown 渲染",
        "文档版本管理、国际化（i18n）、全站搜索、SEO 优化",
        "实时协作编辑",
        "自动代码生成",
      ],
      answer: 1,
      rationale:
        "Docusaurus 提供文档版本管理（同步项目版本）、多语言国际化、全站搜索、SEO 友好的静态 HTML 生成。",
    },
    {
      id: "tw-w2-3-q11",
      question: "MkDocs 的官方宣传语是什么？",
      options: [
        "'The React Framework'",
        "'fast, simple and downright gorgeous'",
        "'Build anything with Vue'",
        "'Ship better products faster'",
      ],
      answer: 1,
      rationale:
        "MkDocs 以'快速、简洁且精美'（fast, simple and downright gorgeous）著称，强调其易用性和美观性。",
    },
    {
      id: "tw-w2-3-q12",
      question: "关于 SSG 工具的自定义主题，正确的态度是什么？",
      options: [
        "必须第一天就完全自定义主题",
        "永远不应该自定义主题",
        "默认主题通常够用，评估定制需求再决定投入——过早定制是常见的时间陷阱",
        "自定义主题不需要了解底层框架",
      ],
      answer: 2,
      rationale:
        "深度定制需要了解底层框架（React/Vue），应该评估真实需求再决定投入。默认主题对大多数项目已经足够。",
    },
  ],
  // Lesson 4: 贡献指南与写作规范 (7题)
  "tw-w2-4": [
    {
      id: "tw-w2-4-q1",
      question: "根据 Keep a Changelog，变更日志的定义是什么？",
      options: [
        "为项目每个版本记录精心整理的、按时间顺序排列的重要变更的文件",
        "Git 提交记录的自动导出",
        "项目所有文件的修改历史",
        "用户反馈和问题的汇总",
      ],
      answer: 0,
      rationale:
        "Keep a Changelog: A changelog is a curated, chronologically ordered list of notable changes for each version.",
    },
    {
      id: "tw-w2-4-q2",
      question: "Keep a Changelog 推荐的变更类型分类有哪些？",
      options: [
        "Added、Changed、Deprecated、Removed、Fixed、Security",
        "Create、Read、Update、Delete",
        "Major、Minor、Patch",
        "Breaking、Non-breaking、Hotfix",
      ],
      answer: 0,
      rationale:
        "Keep a Changelog: 标准分类包括 Added（新功能）、Changed（改动）、Deprecated（弃用）、Removed（移除）、Fixed（修复）、Security（安全）。",
    },
    {
      id: "tw-w2-4-q3",
      question: "为什么不应该直接使用 Git 提交日志作为变更日志？",
      options: [
        "提交日志面向开发者，包含大量技术细节，对用户不友好",
        "提交日志格式不兼容 Markdown",
        "提交日志会自动删除",
        "Git 不支持导出提交日志",
      ],
      answer: 0,
      rationale:
        "Keep a Changelog: 应避免使用提交日志作为变更日志，因为变更日志应面向人类（用户）而非机器。",
    },
    {
      id: "tw-w2-4-q4",
      question: "Docs as Code 方法的核心理念是什么？",
      options: [
        "应该用开发代码相同的工具（版本控制、代码审查、自动化测试）来编写文档",
        "所有文档必须使用编程语言编写",
        "文档应该由 AI 自动生成",
        "代码中不应该包含任何注释",
      ],
      answer: 0,
      rationale:
        "Write the Docs: Docs as Code 指应该用开发代码相同的工具来编写文档，包括版本控制、代码审查、自动化测试等。",
    },
    {
      id: "tw-w2-4-q5",
      question: "Docs as Code 方法带来的主要优势是什么？",
      options: [
        "文档编写者与开发团队更好地融合，建立共同所有权文化",
        "减少文档数量",
        "让文档完全自动化生成",
        "消除对技术写作人员的需求",
      ],
      answer: 0,
      rationale:
        "Write the Docs: Docs as Code 建立共同所有权文化，使编写者与开发者共同致力于提升文档质量。",
    },
    {
      id: "tw-w2-4-q6",
      question: "Keep a Changelog 推荐的日期格式是什么？",
      options: [
        "ISO 8601 格式（YYYY-MM-DD）",
        "美式日期格式（MM/DD/YYYY）",
        "欧式日期格式（DD.MM.YYYY）",
        "Unix 时间戳",
      ],
      answer: 0,
      rationale:
        "Keep a Changelog: 推荐使用 ISO 8601 格式（YYYY-MM-DD），避免日期格式不统一。",
    },
    {
      id: "tw-w2-4-q7",
      question: "CONTRIBUTING 文件的主要作用是什么？",
      options: [
        "说明如何为项目做贡献，包括代码规范、提交流程、行为准则等",
        "列出项目的所有贡献者",
        "记录项目的财务捐赠",
        "展示项目的下载统计",
      ],
      answer: 0,
      rationale:
        "CONTRIBUTING 文件降低贡献门槛，让潜在贡献者了解如何参与、遵循什么规范、如何提交变更。",
    },
  ],
};
