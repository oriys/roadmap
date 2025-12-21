import type { QuizQuestion } from "../types";

export const week2: Record<string, QuizQuestion[]> = {
  // Lesson 1: Markdown 与可复用模板 (8题)
  "tw-w2-1": [
    {
      id: "tw-w2-1-q1",
      question: "在 Markdown 中创建一级标题的正确语法是什么？",
      options: [
        "在文本前添加一个井号和空格，如 '# 标题'",
        "在文本前后各添加一个井号，如 '#标题#'",
        "使用 HTML 标签 <h1>标题</h1>",
        "在文本下方添加等号，如 '标题\\n==='",
      ],
      answer: 0,
      rationale:
        "Markdown Guide: 使用井号创建标题，井号数量对应标题级别。最佳实践是在井号与文本间保留空格。",
    },
    {
      id: "tw-w2-1-q2",
      question: "在 Markdown 中创建换行的最佳实践是什么？",
      options: [
        "在行末添加两个或更多空格后按回车键",
        "连续按两次回车键",
        "使用反斜杠 \\\\ 表示换行",
        "使用 \\n 转义字符",
      ],
      answer: 0,
      rationale:
        "Markdown Guide: 创建换行需在行末添加两个或更多空格后按回车键，或使用 <br> 标签。",
    },
    {
      id: "tw-w2-1-q3",
      question: "为什么 Markdown 在技术文档中广泛使用？",
      options: [
        "纯文本格式易于版本控制，语法简单且专注于内容结构",
        "因为它支持复杂的排版效果",
        "因为它是唯一能在 GitHub 上显示的格式",
        "因为它可以直接编译成可执行程序",
      ],
      answer: 0,
      rationale:
        "Markdown 是纯文本格式，易于 Git 版本控制，语法简单直观，让作者专注于内容而非排版。",
    },
    {
      id: "tw-w2-1-q4",
      question: "在 Markdown 中如何正确创建超链接？",
      options: [
        "[链接文本](URL \"可选标题\")",
        "<a href=\"URL\">链接文本</a>",
        "[[链接文本|URL]]",
        "{链接文本}(URL)",
      ],
      answer: 0,
      rationale:
        "Markdown 链接语法：[文本](URL \"可选标题\")。方括号包含显示文本，圆括号包含 URL。",
    },
    {
      id: "tw-w2-1-q5",
      question: "Markdown 代码块的正确创建方式是什么？",
      options: [
        "使用三个反引号包围代码，可在开头反引号后指定语言",
        "使用三个单引号包围代码",
        "在每行代码前添加制表符",
        "使用 <code> 标签",
      ],
      answer: 0,
      rationale:
        "围栏式代码块使用三个反引号，可在开头指定语言以启用语法高亮，如 ```python。",
    },
    {
      id: "tw-w2-1-q6",
      question: "CommonMark 规范的主要目标是什么？",
      options: [
        "为 Markdown 提供统一的、无歧义的语法标准",
        "创建一种全新的标记语言替代 Markdown",
        "让 Markdown 支持更多高级功能",
        "统一所有文档格式为单一标准",
      ],
      answer: 0,
      rationale:
        "CommonMark 致力于为 Markdown 创建明确的规范，解决不同实现之间的歧义和不一致问题。",
    },
    {
      id: "tw-w2-1-q7",
      question: "在 Markdown 中使用星号 (*) 和下划线 (_) 进行强调时，最佳实践是什么？",
      options: [
        "在单词中间强调时使用星号而非下划线，以确保兼容性",
        "始终使用下划线因为更明显",
        "两种符号可以随意混用",
        "强调时应避免使用任何符号，改用 HTML 标签",
      ],
      answer: 0,
      rationale:
        "Markdown Guide: 为确保兼容性，在单词中间进行强调时推荐使用星号（*）而非下划线（_）。",
    },
    {
      id: "tw-w2-1-q8",
      question: "Markdown 列表嵌套的正确方式是什么？",
      options: [
        "通过缩进（四个空格或一个制表符）创建嵌套列表",
        "使用不同的符号（如 - 和 *）区分层级",
        "在列表项后添加冒号表示嵌套",
        "Markdown 不支持嵌套列表",
      ],
      answer: 0,
      rationale:
        "Markdown Guide: 可通过缩进（四个空格或一个制表符）创建嵌套列表。",
    },
  ],
  // Lesson 2: Git 基础与协作评审 (8题)
  "tw-w2-2": [
    {
      id: "tw-w2-2-q1",
      question: "什么是 Pull Request（PR）？",
      options: [
        "一种代码合并提案机制，让团队在合并前讨论和审查变更",
        "从远程仓库下载代码的命令",
        "一种强制推送代码到主分支的方式",
        "Git 的一种分支命名规范",
      ],
      answer: 0,
      rationale:
        "GitHub: Pull requests are proposals to merge code changes into a project, enabling teams to discuss and review changes before merging them.",
    },
    {
      id: "tw-w2-2-q2",
      question: "Draft Pull Request（草稿 PR）的主要用途是什么？",
      options: [
        "分享进行中的工作但阻止合并，不自动通知代码所有者",
        "用于紧急合并绕过代码审查",
        "标记 PR 为低优先级",
        "自动运行所有 CI 检查但跳过审查",
      ],
      answer: 0,
      rationale:
        "GitHub: Draft PRs 阻止合并并跳过自动通知代码所有者，支持分享进行中的工作而无需正式审查请求。",
    },
    {
      id: "tw-w2-2-q3",
      question: "PR 的 'Files Changed' 标签页显示什么内容？",
      options: [
        "提议代码与现有代码之间的差异（Diff）",
        "所有项目文件的列表",
        "已合并的历史变更",
        "待处理的冲突文件",
      ],
      answer: 0,
      rationale:
        "GitHub: Files Changed 标签页显示代码差异，帮助审查者理解具体的变更内容。",
    },
    {
      id: "tw-w2-2-q4",
      question: "Git 版本控制对文档协作的主要价值是什么？",
      options: [
        "变更可追踪、可评审、可回滚，保留完整的修订历史",
        "自动修复文档中的语法错误",
        "让文档自动翻译成多种语言",
        "自动生成文档目录结构",
      ],
      answer: 0,
      rationale:
        "Git 让每次变更都有记录，可以查看谁改了什么、为何改、并能在需要时回滚到任何历史版本。",
    },
    {
      id: "tw-w2-2-q5",
      question: "PR 中的 'Checks' 标签页主要显示什么？",
      options: [
        "自动化测试和 CI 工作流程的状态",
        "代码审查者的评论和建议",
        "文件变更的统计数据",
        "合并冲突的详细信息",
      ],
      answer: 0,
      rationale:
        "GitHub: Checks 标签页显示自动化测试和 CI 工作流程的状态，确保代码质量标准。",
    },
    {
      id: "tw-w2-2-q6",
      question: "Git 分支（Branch）的主要作用是什么？",
      options: [
        "允许在独立的工作流中开发新功能或修复，不影响主分支",
        "自动备份代码到云端",
        "加密敏感文件",
        "压缩代码以节省存储空间",
      ],
      answer: 0,
      rationale:
        "分支让开发者可以在隔离的环境中工作，完成后再将变更合并回主分支。",
    },
    {
      id: "tw-w2-2-q7",
      question: "代码审查（Code Review）在文档协作中的作用是什么？",
      options: [
        "在合并前发现问题、保持质量标准、促进知识共享",
        "自动修复代码风格问题",
        "生成文档的 PDF 版本",
        "统计代码行数",
      ],
      answer: 0,
      rationale:
        "GitHub: PRs help teams work together, catch issues early, and maintain code quality through structured discussion and review processes.",
    },
    {
      id: "tw-w2-2-q8",
      question: "Git 中的 'commit' 代表什么？",
      options: [
        "项目在特定时间点的快照，包含变更说明",
        "将代码上传到远程服务器",
        "删除不需要的文件",
        "创建新的分支",
      ],
      answer: 0,
      rationale:
        "Commit 是 Git 中的核心概念，记录对仓库的更改，创建项目历史的快照。",
    },
  ],
  // Lesson 3: 静态站点与发布（SSG）(7题)
  "tw-w2-3": [
    {
      id: "tw-w2-3-q1",
      question: "Docusaurus 作为静态站点生成器的核心优势是什么？",
      options: [
        "让开发者用 Markdown 专注于内容创作，自动生成具有快速导航的单页应用",
        "提供所见即所得的可视化编辑器",
        "自动将文档翻译成 50 种语言",
        "内置数据库管理功能",
      ],
      answer: 0,
      rationale:
        "Docusaurus: 它构建具有快速客户端导航的单页应用程序，让开发者专注于用 Markdown 编写内容。",
    },
    {
      id: "tw-w2-3-q2",
      question: "静态站点生成器（SSG）与传统动态网站的主要区别是什么？",
      options: [
        "SSG 在构建时生成静态 HTML 文件，无需服务器端运行时处理",
        "SSG 必须使用数据库",
        "SSG 不支持 JavaScript",
        "SSG 只能用于博客",
      ],
      answer: 0,
      rationale:
        "SSG 在构建时生成所有 HTML 页面，部署后无需服务器端处理，加载速度快且易于托管。",
    },
    {
      id: "tw-w2-3-q3",
      question: "Docusaurus 支持的文档特性包括哪些？",
      options: [
        "文档版本管理、多语言国际化、全站搜索、MDX 支持",
        "实时协作编辑、语音输入、AI 写作辅助",
        "自动代码生成、数据库集成、用户认证",
        "视频托管、直播功能、在线会议",
      ],
      answer: 0,
      rationale:
        "Docusaurus: 提供文档版本管理、多语言国际化支持（i18n）、全站搜索功能、MDX 驱动的交互式内容。",
    },
    {
      id: "tw-w2-3-q4",
      question: "MDX 相对于纯 Markdown 的主要优势是什么？",
      options: [
        "支持在 Markdown 中嵌入 React 组件，创建交互式内容",
        "文件体积更小",
        "兼容更多的编辑器",
        "自动生成目录",
      ],
      answer: 0,
      rationale:
        "Docusaurus: MDX 驱动，支持嵌入 React 组件的交互式内容，超越了纯 Markdown 的静态限制。",
    },
    {
      id: "tw-w2-3-q5",
      question: "选择 Docusaurus 而非 MkDocs 的主要考虑因素是什么？",
      options: [
        "需要单页应用（SPA）体验和 React 生态系统支持",
        "需要 Python 环境",
        "只想要最简单的静态页面",
        "需要使用 reStructuredText 格式",
      ],
      answer: 0,
      rationale:
        "Docusaurus: MkDocs 适合无需 SPA 的项目，而 Docusaurus 基于 React 提供更丰富的交互体验。",
    },
    {
      id: "tw-w2-3-q6",
      question: "静态站点生成器的 SEO 优势是什么？",
      options: [
        "生成静态 HTML 文件便于搜索引擎爬取和索引",
        "自动购买搜索广告",
        "隐藏内容不被搜索引擎发现",
        "强制用户必须登录才能访问",
      ],
      answer: 0,
      rationale:
        "Docusaurus: SEO 友好的静态 HTML 生成，搜索引擎可以直接爬取预渲染的内容。",
    },
    {
      id: "tw-w2-3-q7",
      question: "PRPL 模式在文档站点中的作用是什么？",
      options: [
        "确保内容加载速度快：预加载、渲染、预缓存、懒加载",
        "用于代码压缩和混淆",
        "管理用户权限和角色",
        "处理多语言翻译",
      ],
      answer: 0,
      rationale:
        "Docusaurus: 遵循 PRPL 模式（Push, Render, Pre-cache, Lazy-load）确保内容加载速度快。",
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
