import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const technicalWriterStages: Stage[] = [
    {
        id: "tw-phase1",
        title: "第一阶段：写作基础与读者思维",
        duration: "第 1-2 周",
        goal: "掌握技术写作的读者分析、结构化表达与风格一致性。",
        weeks: [
            {
                id: "tw-w1",
                title: "第 1 周：技术写作入门",
                summary: "明确读者与目标，写出可执行、可验证的文档。",
                overview:
                    "理解技术文档的常见类型（Quickstart/教程/How-to/Reference/解释/排错），用“任务 + 证据”驱动写作，并建立可复用的写作模板。",
                keyPoints: [
                    "先回答三件事：写给谁（Persona）、解决什么任务（Task）、如何验收（Evidence）。",
                    "以结构化写作替代“流水账”：标题/前置条件/步骤/预期结果/常见错误。",
                    "术语统一与示例可复现优先于华丽表达。",
                ],
                lessons: [
                    {
                        id: "tw-w1-1",
                        title: "技术写作的目标与交付物",
                        detail: "技术写作旨在帮助用户解决问题（Task-oriented），而非展示文采。文档是产品的核心特性，能降低支持成本、促进开源贡献并反向提升代码设计。",
                        keyPoints: [
                            "为什么写文档：帮助6个月后的自己（记忆外包）、规模化用户支持、吸引开源贡献者。",
                            "避免“FAQ 陷阱”：FAQ 容易过时且难以检索，应尽量将其转化为结构化的正式文档。",
                            "好的文档包含：解决的问题（Why）、安装（Install）、使用示例（Usage）与许可证（License）。",
                        ],
                        resources: [
                            { title: "Write the Docs: Beginner's Guide", url: "https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/" },
                            { title: "Diátaxis: Start Here", url: "https://diataxis.fr/start-here/" },
                            { title: "Google: Technical Writing One", url: "https://developers.google.com/tech-writing/one" },
                        ],
                    },
                    {
                        id: "tw-w1-2",
                        title: "读者分析与任务导向",
                        detail: "Quality = Fitness for purpose. 文档必须服务于特定读者（Persona）的特定目标（Use Case）。核心任务是填补“用户现状”与“目标状态”之间的知识鸿沟。",
                        keyPoints: [
                            "定义读者画像（Persona）：角色（Role）、目标（Goal）、技术背景（Tech Level）与痛点（Pain Points）。",
                            "警惕“知识诅咒”（Curse of Knowledge）：专家往往难以理解初学者的困惑，需显性化隐性知识。",
                            "针对性写作：小白需要教程与类比（Tutorials）；专家需要精确的参考手册（Reference）。永远不要试图在一个文档中满足所有人的需求（The Elastic User）。",
                        ],
                        resources: [
                            { title: "Google: Audience", url: "https://developers.google.com/tech-writing/one#audience" },
                            { title: "NN/G: User Personas", url: "https://www.nngroup.com/articles/persona/" },
                            { title: "Diátaxis: User Needs", url: "https://diataxis.fr/" },
                        ],
                    },
                    {
                        id: "tw-w1-3",
                        title: "结构化写作与 Diátaxis 框架",
                        detail: "摆脱“意识流”写作，采用模块化（Modular）与话题主导（Topic-based）的结构。Diátaxis 框架将文档分为四个象限，分别对应不同的用户需求。",
                        keyPoints: [
                            "Diátaxis 四象限：Tutorials (Learning-oriented), How-to Guides (Problem-oriented), Explanation (Understanding-oriented), Reference (Information-oriented)。",
                            "结构化写作（Structured Writing）：内容与格式分离，强调重用性（Reusability）与一致性（Consistency）。",
                            "Every Page is Page One：假设用户可能通过搜索直接降落在任何页面，因此每个页面都需具备自包含的上下文。",
                        ],
                        resources: [
                            { title: "Diátaxis Framework", url: "https://diataxis.fr/" },
                            { title: "Google: Organizing Documents", url: "https://developers.google.com/tech-writing/one#organizing_documents" },
                            { title: "Write the Docs: Documentation Guide", url: "https://www.writethedocs.org/guide/" },
                        ],
                    },
                    {
                        id: "tw-w1-4",
                        title: "清晰表达与风格指南",
                        detail: "清晰性（Clarity）是技术文档的第一原则。遵循 Style Guide，使用主动语态、简练短句与精准术语。消除歧义，降低用户的认知负荷（Cognitive Load）。",
                        keyPoints: [
                            "风格指南（Style Guide）：团队协作的基石，统一术语（Terminology）、语气（Tone）与格式（Formatting）。",
                            "清晰表达原则：主动语态（Active Voice）、第二人称（You）、现在时（Present Tense）、避免行话（Jargon）。",
                            "信息架构（Structure）：使用标题、列表（Lists）与表格来打破“文字墙”（Wall of Text），提高可扫描性（Scannability）。",
                        ],
                        resources: [
                            { title: "Google Developer Style Guide", url: "https://developers.google.com/style" },
                            { title: "Microsoft Writing Style Guide", url: "https://learn.microsoft.com/en-us/style-guide/welcome/" },
                            { title: "Write the Docs: Style Guides", url: "https://www.writethedocs.org/guide/writing/style-guides/" },
                        ],
                    },
                ],
            },
            {
                id: "tw-w2",
                title: "第 2 周：工具链与 Docs-as-Code",
                summary: "掌握 Markdown + Git + 评审流程，把文档当代码一样维护。",
                overview: "建立最小 docs-as-code 工作流：Markdown → PR Review → 自动检查 → 站点发布。",
                keyPoints: [
                    "写作格式标准化：Markdown 规范、目录结构、图片/链接策略。",
                    "用 Git 管理变更：分支、PR、review、changelog，避免“口头同步”。",
                    "为文档引入自动化质量线：拼写/链接/风格检查与预览环境。",
                ],
                lessons: [
                    {
                        id: "tw-w2-1",
                        title: "Markdown 与可复用模板",
                        detail: "掌握 Markdown 基础语法与可读性排版，沉淀 Quickstart/How-to/Reference 模板。",
                        resources: [
                            { title: "Markdown Guide", url: "https://www.markdownguide.org/basic-syntax/" },
                            { title: "CommonMark Spec", url: "https://spec.commonmark.org/" },
                            {
                                title: "GitHub：Markdown 快速入门",
                                url: "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github",
                            },
                        ],
                    },
                    {
                        id: "tw-w2-2",
                        title: "Git 基础与协作评审",
                        detail: "会用分支、PR、review 与冲突解决，让文档迭代可追踪、可回滚。",
                        resources: [
                            { title: "Pro Git（免费在线）", url: "https://git-scm.com/book/en/v2" },
                            { title: "GitHub：About pull requests", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" },
                            { title: "Write the Docs：Docs as Code", url: "https://www.writethedocs.org/guide/docs-as-code/" },
                        ],
                    },
                    {
                        id: "tw-w2-3",
                        title: "静态站点与发布（SSG）",
                        detail: "了解 Docusaurus/MkDocs/VitePress 等，能把 Markdown 发布成可导航网站。",
                        resources: [
                            { title: "Docusaurus Docs", url: "https://docusaurus.io/docs" },
                            { title: "MkDocs", url: "https://www.mkdocs.org/" },
                            { title: "VitePress", url: "https://vitepress.dev/" },
                        ],
                    },
                    {
                        id: "tw-w2-4",
                        title: "贡献指南与写作规范",
                        detail: "写好 CONTRIBUTING、写作规范与提交约定，让团队协作不靠口口相传。",
                        resources: [
                            { title: "GitHub：CONTRIBUTING guidelines", url: "https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions" },
                            { title: "Keep a Changelog", url: "https://keepachangelog.com/en/1.1.0/" },
                            { title: "Write the Docs：Docs Practices", url: "https://www.writethedocs.org/guide/index.html" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "tw-phase2",
        title: "第二阶段：技术素养与 API 文档",
        duration: "第 3-4 周",
        goal: "补齐基础技术概念与写作方法，能输出可用的 API/CLI 文档与示例。",
        weeks: [
            {
                id: "tw-w3",
                title: "第 3 周：基础技术素养",
                summary: "理解 HTTP/JSON/CLI 等基础，能跑通示例并复现问题。",
                overview: "技术写作需要“能跑起来”：会用命令行、理解请求/响应、能描述复现步骤与预期/实际差异。",
                keyPoints: [
                    "把概念写成可操作：输入、输出、边界条件与错误处理。",
                    "示例必须可复现：命令、返回值、截图与版本信息齐全。",
                    "排错写作优先：先给快速定位，再给深入解释。",
                ],
                lessons: [
                    {
                        id: "tw-w3-1",
                        title: "HTTP/JSON 基础（面向文档）",
                        detail: "理解常见方法、状态码、Headers、JSON 结构，能写出清晰的请求/响应示例。",
                        resources: [
                            { title: "MDN：HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
                            { title: "HTTP Semantics (RFC 9110)", url: "https://www.rfc-editor.org/rfc/rfc9110" },
                            { title: "JSON", url: "https://www.json.org/json-en.html" },
                        ],
                    },
                    {
                        id: "tw-w3-2",
                        title: "命令行与可复现示例",
                        detail: "会用基本命令行工具与环境变量，写出可复制粘贴的操作步骤与输出。",
                        resources: [
                            { title: "The Art of Command Line", url: "https://github.com/jlevy/the-art-of-command-line" },
                            { title: "curl manual", url: "https://curl.se/docs/manual.html" },
                            { title: "Write the Docs：Code Samples", url: "https://www.writethedocs.org/guide/writing/reStructuredText.html" },
                        ],
                    },
                    {
                        id: "tw-w3-3",
                        title: "排错文档（Troubleshooting）写法",
                        detail: "从症状到原因：复现步骤、日志/错误信息、快速绕过与根因说明。",
                        resources: [
                            { title: "Google：Troubleshooting", url: "https://developers.google.com/style/notices" },
                            { title: "Write the Docs：Troubleshooting", url: "https://podcast.writethedocs.org/2020/07/19/episode-30-documentation-templates/" },
                            { title: "Keep a Changelog：Change log guide", url: "https://keepachangelog.com/en/1.1.0/" },
                        ],
                    },
                    {
                        id: "tw-w3-4",
                        title: "图表与示意图（可维护）",
                        detail: "用 Mermaid/PlantUML 画流程/架构/时序图，让复杂概念可视化且可版本化。",
                        resources: [
                            { title: "Mermaid", url: "https://mermaid.js.org/" },
                            { title: "PlantUML", url: "https://plantuml.com/" },
                            { title: "Diátaxis：Explanation", url: "https://diataxis.fr/explanation/" },
                        ],
                    },
                ],
            },
            {
                id: "tw-w4",
                title: "第 4 周：API / CLI 文档体系",
                summary: "写出可用的 API Reference：认证、分页、错误码、示例与最佳实践。",
                overview: "把 API 文档写成“可用说明书”：从概览到认证，再到端点参考、示例与错误处理。",
                keyPoints: [
                    "每个端点写清楚：用途、请求参数、响应字段、错误与示例。",
                    "示例要覆盖主路径与失败路径：最小可用 + 常见错误。",
                    "保持一致性：命名、术语、错误格式与版本策略。",
                ],
                lessons: [
                    {
                        id: "tw-w4-1",
                        title: "API 文档结构与规范",
                        detail: "把 API 文档拆成概览、认证、速率限制、错误模型、版本与变更。",
                        resources: [
                            { title: "Google：API Documentation", url: "https://developers.google.com/style/api-reference-comments" },
                            { title: "Stripe API Docs（参考范例）", url: "https://github.com/stripe/openapi" },
                            { title: "RFC 7807 Problem Details", url: "https://www.rfc-editor.org/rfc/rfc7807" },
                        ],
                    },
                    {
                        id: "tw-w4-2",
                        title: "OpenAPI / Swagger 入门",
                        detail: "理解 OpenAPI 的核心结构，能读懂并用它生成/校验 API 参考文档。",
                        resources: [
                            { title: "OpenAPI Specification", url: "https://spec.openapis.org/oas/latest.html" },
                            { title: "Swagger：Getting Started", url: "https://swagger.io/docs/specification/about/" },
                            { title: "Redocly OpenAPI Guides", url: "https://redocly.com/docs/" },
                        ],
                    },
                    {
                        id: "tw-w4-3",
                        title: "示例、SDK 与代码样例写法",
                        detail: "写出可复制、可运行的代码样例：输入/输出、版本、错误处理与说明文字。",
                        resources: [
                            { title: "Write the Docs：Code Samples", url: "https://www.writethedocs.org/guide/writing/reStructuredText.html" },
                            { title: "Google：Sample code", url: "https://developers.google.com/style/code-samples" },
                            { title: "Microsoft：Code samples", url: "https://learn.microsoft.com/en-us/style-guide/developer-content/code-examples" },
                        ],
                    },
                    {
                        id: "tw-w4-4",
                        title: "CLI 文档与命令参考",
                        detail: "写清命令用途、参数、示例与返回值；覆盖最常见的使用路径与错误。",
                        resources: [
                            { title: "GNU：Command-Line Options", url: "https://www.gnu.org/prep/standards/html_node/Command_002dLine-Interfaces.html" },
                            { title: "Cobra User Guide（参考）", url: "https://cobra.dev/" },
                            { title: "Click Documentation（参考）", url: "https://click.palletsprojects.com/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "tw-phase3",
        title: "第三阶段：内容体系与质量保障",
        duration: "第 5-6 周",
        goal: "掌握教程/How-to/Reference/Explanation 的写法，并建立审阅、可访问性与自动化质量线。",
        weeks: [
            {
                id: "tw-w5",
                title: "第 5 周：内容类型与写作模板",
                summary: "按 Diátaxis 输出四类内容，让文档“可学、可用、可查、可理解”。",
                overview: "同一主题可拆成：Tutorial（学习路径）、How-to（解决任务）、Reference（查参数）、Explanation（理解原理）。",
                keyPoints: [
                    "Tutorial 以学习为主：循序渐进、避免岔路。",
                    "How-to 以任务为主：前置条件明确、步骤短且可验证。",
                    "Reference 以信息为主：完整、准确、一致，少叙述多结构化。",
                ],
                lessons: [
                    {
                        id: "tw-w5-1",
                        title: "Tutorial（教程）写作",
                        detail: "写一篇从 0 到 1 的学习路径：目标、步骤、检查点与复盘。",
                        resources: [
                            { title: "Diátaxis：Tutorials", url: "https://diataxis.fr/tutorials/" },
                            { title: "Google：Tutorials", url: "https://developers.google.com/style/headings" },
                            { title: "Write the Docs：Tutorials", url: "https://www.writethedocs.org/videos/portland/2021/writing-a-perfect-technical-tutorial-jessica-garson.html" },
                        ],
                    },
                    {
                        id: "tw-w5-2",
                        title: "How-to（操作指南）写作",
                        detail: "写成任务清单：最少背景、直接步骤、可验证结果与常见坑。",
                        resources: [
                            { title: "Diátaxis：How-to guides", url: "https://diataxis.fr/how-to-guides/" },
                            { title: "Google：How-to", url: "https://developers.google.com/style/procedures" },
                            { title: "Microsoft：Procedures", url: "https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions" },
                        ],
                    },
                    {
                        id: "tw-w5-3",
                        title: "Reference（参考）写作",
                        detail: "用表格/字段说明写出可查的参考文档：参数、约束、默认值与示例。",
                        resources: [
                            { title: "Diátaxis：Reference", url: "https://diataxis.fr/reference/" },
                            { title: "Google：Reference documents", url: "https://developers.google.com/style/reference-verbs" },
                            { title: "Microsoft：Tables", url: "https://learn.microsoft.com/en-us/style-guide/scannable-content/tables" },
                        ],
                    },
                    {
                        id: "tw-w5-4",
                        title: "Explanation（概念解释）写作",
                        detail: "建立心智模型：定义、背景、边界、权衡与示意图。",
                        resources: [
                            { title: "Diátaxis：Explanation", url: "https://diataxis.fr/explanation/" },
                            { title: "Google：Conceptual docs", url: "https://developers.google.com/style/headings" },
                            { title: "Write the Docs：Conceptual Writing", url: "https://podcast.writethedocs.org/2020/07/19/episode-30-documentation-templates/" },
                        ],
                    },
                ],
            },
            {
                id: "tw-w6",
                title: "第 6 周：质量线与可持续维护",
                summary: "用风格指南、审阅流程与自动化检查保障质量。",
                overview: "建立文档质量线：术语/风格一致、链接可用、示例可运行、可访问性与本地化考虑。",
                keyPoints: [
                    "把主观标准变成可执行规则：style guide + checklist + linter。",
                    "可访问性优先：标题层级、替代文本、对比度与易读语言。",
                    "本地化/国际化要早做：术语表、占位符、避免文化特定隐喻。",
                ],
                lessons: [
                    {
                        id: "tw-w6-1",
                        title: "风格指南与术语表",
                        detail: "建立术语表与写作规范，统一命名、大小写、标点与翻译策略。",
                        resources: [
                            { title: "Google Style Guide", url: "https://developers.google.com/style" },
                            { title: "Microsoft Style Guide", url: "https://learn.microsoft.com/en-us/style-guide/welcome/" },
                            { title: "Write the Docs：Style Guides", url: "https://www.writethedocs.org/guide/writing/style-guides.html" },
                        ],
                    },
                    {
                        id: "tw-w6-2",
                        title: "可访问性与包容性写作",
                        detail: "用可读语言与结构化信息降低理解门槛，避免歧视性表达。",
                        resources: [
                            { title: "W3C：WAI Introduction", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" },
                            { title: "Microsoft：Accessibility", url: "https://learn.microsoft.com/en-us/style-guide/accessibility/accessibility-guidelines-requirements" },
                            { title: "Google：Inclusive language", url: "https://developers.google.com/style/inclusive-documentation" },
                        ],
                    },
                    {
                        id: "tw-w6-3",
                        title: "本地化与国际化（I18n/L10n）",
                        detail: "理解翻译流程与约束，写出“可翻译”的原文：术语一致、避免歧义与硬编码。",
                        resources: [
                            { title: "W3C：Internationalization", url: "https://www.w3.org/International/" },
                            { title: "Google：Writing for a global audience", url: "https://developers.google.com/style/translation" },
                            { title: "Microsoft：Localization", url: "https://learn.microsoft.com/en-us/style-guide/global-communications" },
                        ],
                    },
                    {
                        id: "tw-w6-4",
                        title: "文档 QA 与自动化检查",
                        detail: "用 Vale/markdownlint/link check 等把质量检查自动化，减少人工重复劳动。",
                        resources: [
                            { title: "Vale（Style linter）", url: "https://vale.sh/" },
                            { title: "markdownlint", url: "https://github.com/DavidAnson/markdownlint" },
                            { title: "GitHub Actions", url: "https://docs.github.com/en/actions" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "tw-phase4",
        title: "第四阶段：发布运营与职业作品集",
        duration: "第 7-8 周",
        goal: "把文档发布到可持续维护的站点，建立反馈闭环与个人作品集。",
        weeks: [
            {
                id: "tw-w7",
                title: "第 7 周：发布、反馈与持续改进",
                summary: "用版本与数据驱动迭代：发布说明、变更管理、反馈渠道与指标。",
                overview: "把文档当产品运营：有版本、有发布说明、有反馈闭环，有数据就能迭代。",
                keyPoints: [
                    "发布说明要面向用户：新增/变更/弃用/修复与迁移建议。",
                    "建立反馈入口：issue 模板、评分组件或表单，形成闭环。",
                    "用最小指标衡量：搜索失败率、页面退出、支持工单主题等。",
                ],
                lessons: [
                    {
                        id: "tw-w7-1",
                        title: "信息架构与导航优化",
                        detail: "通过目录、侧边栏、交叉链接与术语表，让文档更易找、更易学。",
                        resources: [
                            { title: "Write the Docs：Information Architecture", url: "https://www.writethedocs.org/guide/index.html" },
                            { title: "Nielsen Norman Group：IA Basics", url: "https://www.nngroup.com/topic/information-architecture/" },
                            { title: "Google：Cross-references", url: "https://developers.google.com/style/cross-references" },
                        ],
                    },
                    {
                        id: "tw-w7-2",
                        title: "发布说明与变更日志",
                        detail: "写清版本变更：Breaking changes、迁移步骤、弃用计划与兼容性说明。",
                        resources: [
                            { title: "Keep a Changelog", url: "https://keepachangelog.com/en/1.1.0/" },
                            { title: "Semantic Versioning", url: "https://semver.org/" },
                            { title: "Google：Release notes", url: "https://developers.google.com/style/release-notes" },
                        ],
                    },
                    {
                        id: "tw-w7-3",
                        title: "反馈与数据：文档指标",
                        detail: "把“感觉”变成数据：收集反馈、定位高跳出页面、优化搜索与导航。",
                        resources: [
                            { title: "Write the Docs：Analytics", url: "https://www.writethedocs.org/guide/docs-as-code/#analytics" },
                            { title: "Nielsen Norman Group：UX Metrics", url: "https://www.nngroup.com/topic/analytics-and-metrics/" },
                            { title: "Google：Search", url: "https://developers.google.com/style" },
                        ],
                    },
                    {
                        id: "tw-w7-4",
                        title: "DocsOps：预览与自动发布",
                        detail: "给每个 PR 提供预览链接，合并后自动发布，减少沟通成本。",
                        resources: [
                            { title: "GitHub Actions", url: "https://docs.github.com/en/actions" },
                            { title: "Netlify Docs（预览/部署）", url: "https://docs.netlify.com/" },
                            { title: "Vercel Docs", url: "https://vercel.com/docs" },
                        ],
                    },
                ],
            },
            {
                id: "tw-w8",
                title: "第 8 周：作品集与面试准备",
                summary: "用一个完整 docs 项目展示能力：信息架构 + 样例 + 质量线 + 发布。",
                overview: "面试最有效的材料是作品：可访问链接、PR 记录、写作测试与复盘。",
                keyPoints: [
                    "作品集需要可展示：在线链接 + 变更记录 + 设计取舍说明。",
                    "写作测试常考：改写、结构优化、补齐缺失信息、示例可复现。",
                    "协作能力同样重要：需求澄清、评审沟通与跨团队推进。",
                ],
                lessons: [
                    {
                        id: "tw-w8-1",
                        title: "作品集项目：从 0 到 1 建一个文档站",
                        detail: "选一个开源或个人项目，完成 IA、关键页面、示例与自动化检查并发布。",
                        resources: [
                            { title: "Write the Docs：Portfolio", url: "https://www.writethedocs.org/hiring-guide/portfolios.html" },
                            { title: "Diátaxis", url: "https://diataxis.fr/" },
                            { title: "GitHub Pages", url: "https://pages.github.com/" },
                        ],
                    },
                    {
                        id: "tw-w8-2",
                        title: "写作测试与复盘方法",
                        detail: "用 checklist 复盘：读者、结构、示例可运行、术语一致、可搜索可维护。",
                        resources: [
                            { title: "Write the Docs：Testing Docs", url: "https://www.writethedocs.org/guide/tools/testing.html" },
                            { title: "Google：Writing tests (guidance)", url: "https://developers.google.com/style" },
                            { title: "Microsoft：Checklist", url: "https://learn.microsoft.com/en-us/style-guide/procedures-instructions" },
                        ],
                    },
                    {
                        id: "tw-w8-3",
                        title: "跨团队协作：与 PM/工程/支持对齐",
                        detail: "学会需求澄清、信息收集与评审沟通，推动文档与产品同步交付。",
                        resources: [
                            { title: "Write the Docs：Working with Engineers", url: "https://www.writethedocs.org/book-club/splunk-product-docs/17-working-with-engineers/" },
                            { title: "Write the Docs：Docs Project Management", url: "https://www.writethedocs.org/guide/doc-ops.html" },
                            { title: "Nielsen Norman Group：Stakeholders", url: "https://www.nngroup.com/articles/stakeholder-interviews/" },
                        ],
                    },
                    {
                        id: "tw-w8-4",
                        title: "职业成长路径",
                        detail: "规划深度与广度：产品理解、技术能力、信息架构与团队影响力。",
                        resources: [
                            { title: "Write the Docs：Career", url: "https://www.writethedocs.org/hiring-guide/" },
                            { title: "roadmap.sh", url: "https://roadmap.sh/" },
                            { title: "Write the Docs：Community", url: "https://www.writethedocs.org/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "tw-phase5",
        title: "第五阶段：内容战略与信息架构",
        duration: "第 9-10 周",
        goal: "从写作者进阶到内容负责人，掌握内容治理、生命周期管理与深度信息架构。",
        weeks: [
            {
                id: "tw-w9",
                title: "第 9 周：内容战略与治理",
                summary: "建立内容生命周期管理、治理框架与单源发布能力。",
                overview: "内容不只是写出来，还要管起来。本周从内容审计到治理框架，建立可持续的内容运营体系。",
                keyPoints: [
                    "内容审计：盘点现有内容，识别过时、重复与缺失。",
                    "内容生命周期：创建→发布→维护→归档→删除的完整流程。",
                    "单源发布：一次编写，多处发布（DITA/Topic-based Authoring）。",
                ],
                lessons: [
                    {
                        id: "tw-w9-1",
                        title: "内容审计与缺口分析",
                        detail: "系统盘点现有文档：覆盖率、准确性、时效性，识别高优先级改进点。",
                        keyPoints: [
                            "内容清单（Content Inventory）：URL、标题、类型、最后更新、负责人。",
                            "缺口分析：对比用户旅程，找出文档缺失的关键节点。",
                            "优先级矩阵：影响×成本，确定改进顺序。",
                        ],
                        resources: [
                            { title: "Content Audits Guide", url: "https://www.nngroup.com/articles/content-audits/" },
                            { title: "Write the Docs: Content Strategy", url: "https://www.writethedocs.org/guide/content/" },
                            { title: "Content Audit Process", url: "https://ahrefs.com/blog/content-audit/" },
                        ],
                    },
                    {
                        id: "tw-w9-2",
                        title: "内容生命周期管理",
                        detail: "定义内容从创建到归档的完整流程：审批、发布、定期审查与淘汰。",
                        keyPoints: [
                            "生命周期阶段：草稿→审核→发布→维护→归档→删除。",
                            "定期审查机制：设置内容过期提醒，避免「僵尸文档」。",
                            "归档 vs 删除：何时保留历史版本，何时彻底移除。",
                        ],
                        resources: [
                            { title: "Content Lifecycle Management", url: "https://www.heretto.com/blog/content-lifecycle-management" },
                            { title: "Docs Expiration Strategy", url: "https://www.egnyte.com/guides/governance/document-retention-policy-guide" },
                            { title: "Write the Docs: Maintaining Docs", url: "https://www.writethedocs.org/guide/writing/mindshare/" },
                        ],
                    },
                    {
                        id: "tw-w9-3",
                        title: "内容治理与标准化",
                        detail: "建立治理框架：谁能创建/修改/删除，审批流程与质量标准。",
                        keyPoints: [
                            "RACI 矩阵：明确内容的 Responsible/Accountable/Consulted/Informed。",
                            "风格指南执行：从建议到强制，用工具保障一致性。",
                            "变更管理：重大内容变更的评审与沟通流程。",
                        ],
                        resources: [
                            { title: "Content Governance Framework", url: "https://www.heretto.com/blog/content-governance" },
                            { title: "Atlassian: Documentation Governance", url: "https://www.atlassian.com/software/confluence/guides/expand-confluence/create-governance" },
                            { title: "RACI Matrix", url: "https://www.projectmanager.com/blog/raci-chart-definitions-uses-and-examples-for-project-managers" },
                        ],
                    },
                    {
                        id: "tw-w9-4",
                        title: "单源发布与内容复用",
                        detail: "一次编写，多处发布：Topic-based Authoring、条件文本与变量。",
                        keyPoints: [
                            "Topic-based Authoring：将内容拆成可复用的独立单元。",
                            "条件文本（Conditional Text）：同一源文件生成不同版本。",
                            "内容复用策略：片段（Snippet）、Transclusion 与继承。",
                        ],
                        resources: [
                            { title: "Single-Sourcing Principles", url: "https://paligo.net/in-depth/the-5-principles-of-single-sourcing/" },
                            { title: "Topic-Based Authoring", url: "https://www.oasis-open.org/committees/dita/" },
                            { title: "Paligo: Content Reuse", url: "https://paligo.net/docs/en/content-reuse.html" },
                        ],
                    },
                ],
            },
            {
                id: "tw-w10",
                title: "第 10 周：信息架构深度",
                summary: "用用户研究方法优化导航、分类与内容组织。",
                overview: "信息架构决定用户能否找到内容。本周从卡片分类到树状测试，用数据驱动 IA 优化。",
                keyPoints: [
                    "分类法（Taxonomy）：建立一致的内容分类体系。",
                    "卡片分类：用用户视角组织内容结构。",
                    "树状测试：验证导航的可发现性。",
                ],
                lessons: [
                    {
                        id: "tw-w10-1",
                        title: "分类法与元数据策略",
                        detail: "设计内容分类体系：标签、类别、产品线与版本的元数据模型。",
                        keyPoints: [
                            "受控词汇表（Controlled Vocabulary）：统一术语与标签。",
                            "多维分类：按产品、用户角色、内容类型多维度组织。",
                            "元数据模型：为内容添加可查询的结构化属性。",
                        ],
                        resources: [
                            { title: "NN/g: Taxonomy Design", url: "https://www.nngroup.com/articles/taxonomy-101/" },
                            { title: "Content Modeling", url: "https://www.contentstack.com/blog/all-about-headless/content-modeling-and-headless-cms" },
                            { title: "Metadata Strategy", url: "https://storyneedle.com/your-content-needs-a-metadata-strategy/" },
                        ],
                    },
                    {
                        id: "tw-w10-2",
                        title: "卡片分类与内容组织",
                        detail: "用卡片分类（Card Sorting）了解用户的心智模型，优化内容分组。",
                        keyPoints: [
                            "开放式 vs 封闭式卡片分类：探索 vs 验证。",
                            "远程工具：Optimal Workshop、UserZoom、Miro。",
                            "分析结果：相似度矩阵与聚类分析。",
                        ],
                        resources: [
                            { title: "NN/g: Card Sorting", url: "https://www.nngroup.com/articles/card-sorting-definition/" },
                            { title: "Optimal Workshop", url: "https://www.optimalworkshop.com/optimalsort/" },
                            { title: "Card Sorting Analysis", url: "https://www.usability.gov/how-to-and-tools/methods/card-sorting.html" },
                        ],
                    },
                    {
                        id: "tw-w10-3",
                        title: "树状测试与导航验证",
                        detail: "用树状测试（Tree Testing）验证用户能否通过导航找到目标内容。",
                        keyPoints: [
                            "任务设计：基于真实用户场景的查找任务。",
                            "成功率与直达率：衡量导航效率的核心指标。",
                            "迭代优化：根据测试结果调整层级与命名。",
                        ],
                        resources: [
                            { title: "NN/g: Tree Testing", url: "https://www.nngroup.com/articles/tree-testing/" },
                            { title: "Optimal Workshop: Treejack", url: "https://www.optimalworkshop.com/treejack/" },
                            { title: "Tree Testing Guide", url: "https://www.usability.gov/how-to-and-tools/methods/tree-testing.html" },
                        ],
                    },
                    {
                        id: "tw-w10-4",
                        title: "导航模式与跨内容链接",
                        detail: "设计多入口导航：侧边栏、面包屑、相关内容与搜索的协同。",
                        keyPoints: [
                            "导航模式：层级导航、分面导航、情境导航。",
                            "交叉链接策略：Related、See Also、Prerequisites 的使用场景。",
                            "搜索与导航互补：当导航失效时，搜索是最后防线。",
                        ],
                        resources: [
                            { title: "NN/g: Navigation Design", url: "https://www.nngroup.com/articles/navigation-you-are-here/" },
                            { title: "Docs Navigation Patterns", url: "https://idratherbewriting.com/learnapidoc/docapis_design_patterns.html" },
                            { title: "Cross-Linking Best Practices", url: "https://developers.google.com/style/cross-references" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "tw-phase6",
        title: "第六阶段：开发者体验与高级 API",
        duration: "第 11-12 周",
        goal: "设计优秀的开发者体验，掌握 GraphQL、SDK 与交互式文档。",
        weeks: [
            {
                id: "tw-w11",
                title: "第 11 周：开发者体验设计",
                summary: "从开发者旅程出发，设计门户、Onboarding 与社区文档。",
                overview: "开发者体验（DX）是文档的上层建筑。本周从旅程地图到门户设计，打造让开发者「爽」的体验。",
                keyPoints: [
                    "开发者旅程：发现→评估→上手→深入→扩展→贡献。",
                    "Onboarding 漏斗：追踪从注册到首次成功调用的转化。",
                    "开发者门户：API 文档 + 控制台 + 社区的一体化入口。",
                ],
                lessons: [
                    {
                        id: "tw-w11-1",
                        title: "开发者旅程地图",
                        detail: "绘制开发者从发现产品到成为贡献者的完整旅程，识别文档触点。",
                        keyPoints: [
                            "旅程阶段：Awareness → Evaluation → Adoption → Expansion → Advocacy。",
                            "触点分析：每个阶段开发者需要什么文档支持。",
                            "痛点识别：哪些环节流失最严重，文档如何补救。",
                        ],
                        resources: [
                            { title: "Developer Journey Map", url: "https://medium.com/codex/developer-relations-the-developer-journey-map-36bd4619f5f3" },
                            { title: "Stripe: API Design", url: "https://stripe.com/blog/payment-api-design" },
                            { title: "Moesif: Developer Journey Tracking", url: "https://www.moesif.com/blog/api-product-management/developer-journey/Tracking-a-Developer's-Journey-From-Visiting-Documentation-Visit-to-First-API-Call/" },
                        ],
                    },
                    {
                        id: "tw-w11-2",
                        title: "Onboarding 优化与 Time-to-First-Success",
                        detail: "设计最短路径让开发者体验成功：注册→获取凭证→首次调用→看到结果。",
                        keyPoints: [
                            "Time-to-Hello-World：从注册到首次成功调用的时间。",
                            "渐进式披露：先给最小可用，再引导深入功能。",
                            "交互式 Quickstart：让用户在文档页面直接尝试。",
                        ],
                        resources: [
                            { title: "What is TTFHW", url: "https://www.moesif.com/blog/technical/api-product-management/What-is-TTFHW/" },
                            { title: "Time to First Call Metric", url: "https://nordicapis.com/why-time-to-first-call-is-a-vital-api-metric/" },
                            { title: "Twilio Quickstart", url: "https://www.twilio.com/docs/usage/tutorials" },
                        ],
                    },
                    {
                        id: "tw-w11-3",
                        title: "开发者门户设计",
                        detail: "设计集 API 文档、控制台、示例与社区于一体的开发者门户。",
                        keyPoints: [
                            "门户核心模块：文档、API Reference、控制台、状态页、Changelog。",
                            "统一身份：跨文档/控制台/社区的登录与个性化。",
                            "搜索优先：全站搜索是开发者的主要入口。",
                        ],
                        resources: [
                            { title: "Developer Portal Best Practices", url: "https://swagger.io/blog/api-development/developer-portal-best-practices/" },
                            { title: "Stripe Developer Dashboard", url: "https://stripe.com/docs" },
                            { title: "Postman Developer Portal", url: "https://www.postman.com/api-platform/api-developer-portal/" },
                        ],
                    },
                    {
                        id: "tw-w11-4",
                        title: "社区驱动文档",
                        detail: "建立社区贡献机制：编辑建议、示例提交与文档翻译。",
                        keyPoints: [
                            "编辑此页（Edit this page）：降低贡献门槛。",
                            "示例征集：让社区贡献多语言/多框架示例。",
                            "翻译社区：众包翻译与质量保障流程。",
                        ],
                        resources: [
                            { title: "Open Source Docs Contribution", url: "https://opensource.guide/how-to-contribute/" },
                            { title: "MDN Contribution Guide", url: "https://developer.mozilla.org/en-US/docs/MDN/Contribute" },
                            { title: "Crowdin for Docs", url: "https://crowdin.com/" },
                        ],
                    },
                ],
            },
            {
                id: "tw-w12",
                title: "第 12 周：高级 API 文档",
                summary: "掌握 GraphQL、SDK 与交互式文档的写法。",
                overview: "超越 REST：GraphQL 有不同的文档范式，SDK 需要多语言支持，交互式探索提升可用性。",
                keyPoints: [
                    "GraphQL 文档：Schema 即文档，但需要补充上下文。",
                    "SDK 文档：多语言示例、安装指南与版本兼容。",
                    "交互式探索：让开发者在文档中直接尝试 API。",
                ],
                lessons: [
                    {
                        id: "tw-w12-1",
                        title: "GraphQL 文档写法",
                        detail: "GraphQL 的自描述特性与文档补充：Schema 注释、查询示例与最佳实践。",
                        keyPoints: [
                            "Schema 注释：用 description 字段为 Type/Field 添加说明。",
                            "查询示例：展示常见查询模式与变量用法。",
                            "错误处理：GraphQL 错误模型与排错指南。",
                        ],
                        resources: [
                            { title: "GraphQL Best Practices: Documentation", url: "https://graphql.org/learn/best-practices/#documentation" },
                            { title: "Apollo GraphQL Docs", url: "https://www.apollographql.com/docs/" },
                            { title: "GitHub GraphQL API Docs", url: "https://docs.github.com/en/graphql" },
                        ],
                    },
                    {
                        id: "tw-w12-2",
                        title: "SDK 文档与多语言示例",
                        detail: "为多语言 SDK 写文档：安装、初始化、核心方法与版本兼容矩阵。",
                        keyPoints: [
                            "语言切换器：让用户选择首选语言查看示例。",
                            "安装指南：npm/pip/gem/maven 等包管理器说明。",
                            "版本兼容：SDK 版本与 API 版本的对应关系。",
                        ],
                        resources: [
                            { title: "Stripe SDKs Docs", url: "https://stripe.com/docs/libraries" },
                            { title: "Twilio SDKs", url: "https://www.twilio.com/docs/libraries" },
                            { title: "SDK Documentation Guide", url: "https://idratherbewriting.com/learnapidoc/docapis_sdks.html" },
                        ],
                    },
                    {
                        id: "tw-w12-3",
                        title: "交互式 API 探索",
                        detail: "在文档中嵌入可运行的 API 调用：Try It、代码沙箱与 Playground。",
                        keyPoints: [
                            "Try It 面板：Swagger UI、Redoc、Stoplight 的交互功能。",
                            "代码沙箱：CodeSandbox、StackBlitz 嵌入式示例。",
                            "Playground：GraphQL Playground、Postman 集成。",
                        ],
                        resources: [
                            { title: "Swagger UI", url: "https://swagger.io/tools/swagger-ui/" },
                            { title: "Redoc Try It", url: "https://redocly.com/docs/redoc/" },
                            { title: "Stoplight", url: "https://stoplight.io/" },
                        ],
                    },
                    {
                        id: "tw-w12-4",
                        title: "API 弃用与迁移指南",
                        detail: "写清弃用计划：时间线、影响范围、迁移步骤与兼容性说明。",
                        keyPoints: [
                            "弃用公告：提前通知、影响评估与迁移时间窗口。",
                            "迁移指南：Before/After 对比、逐步迁移与回滚方案。",
                            "Sunset Header：用 HTTP Header 通知即将弃用。",
                        ],
                        resources: [
                            { title: "API Deprecation Best Practices", url: "https://cloud.google.com/apis/design/compatibility" },
                            { title: "Stripe API Versioning", url: "https://stripe.com/docs/api/versioning" },
                            { title: "Sunset HTTP Header", url: "https://datatracker.ietf.org/doc/html/rfc8594" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "tw-phase7",
        title: "第七阶段：数据驱动与现代工具",
        duration: "第 13-14 周",
        goal: "用指标和用户研究驱动改进，掌握高级工具链与搜索优化。",
        weeks: [
            {
                id: "tw-w13",
                title: "第 13 周：文档指标与用户研究",
                summary: "建立文档 KPI 体系，用用户研究方法持续优化。",
                overview: "从「感觉」到「数据」：本周建立可量化的文档质量指标，并用用户研究方法验证假设。",
                keyPoints: [
                    "文档 KPI：满意度、完成率、Time-to-Success。",
                    "定量分析：页面访问、搜索失败、跳出率。",
                    "定性研究：用户访谈、可用性测试、调查问卷。",
                ],
                lessons: [
                    {
                        id: "tw-w13-1",
                        title: "文档 KPI 体系",
                        detail: "定义核心指标：用户满意度（CSAT）、任务完成率、Time-to-First-Success。",
                        keyPoints: [
                            "CSAT/NPS：页面级反馈「这篇文档有帮助吗？」",
                            "任务完成率：用户能否完成文档引导的任务。",
                            "Time-to-Success：从阅读到成功完成任务的时间。",
                        ],
                        resources: [
                            { title: "Measuring Docs Quality", url: "https://www.writethedocs.org/guide/docs-as-code/#measuring-success" },
                            { title: "Google: Technical Writing KPIs", url: "https://developers.google.com/tech-writing" },
                            { title: "DX Metrics Guide", url: "https://getdx.com/blog/developer-experience/" },
                        ],
                    },
                    {
                        id: "tw-w13-2",
                        title: "定量分析：Analytics 与搜索",
                        detail: "用 Google Analytics、Plausible 分析访问模式；用搜索日志识别内容缺口。",
                        keyPoints: [
                            "高跳出页面：识别需要优化的内容。",
                            "搜索零结果：用户在找什么但找不到。",
                            "用户路径：从入口到目标的典型路径分析。",
                        ],
                        resources: [
                            { title: "Google Analytics for Docs", url: "https://support.google.com/analytics/answer/9306384" },
                            { title: "Algolia Analytics", url: "https://www.algolia.com/doc/guides/search-analytics/overview/" },
                            { title: "Plausible Analytics", url: "https://plausible.io/docs" },
                        ],
                    },
                    {
                        id: "tw-w13-3",
                        title: "用户访谈与可用性测试",
                        detail: "通过访谈了解用户痛点，用可用性测试验证文档是否可用。",
                        keyPoints: [
                            "用户访谈：开放式问题，了解真实使用场景与痛点。",
                            "可用性测试：给任务，观察用户如何使用文档完成。",
                            "Think-aloud 协议：让用户边做边说，暴露认知障碍。",
                        ],
                        resources: [
                            { title: "NN/g: User Interviews", url: "https://www.nngroup.com/articles/user-interviews/" },
                            { title: "NN/g: Usability Testing 101", url: "https://www.nngroup.com/articles/usability-testing-101/" },
                            { title: "Think Aloud Protocol", url: "https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/" },
                        ],
                    },
                    {
                        id: "tw-w13-4",
                        title: "A/B 测试与持续优化",
                        detail: "用 A/B 测试验证文档改进效果：标题、结构、示例的对比实验。",
                        keyPoints: [
                            "假设驱动：明确要验证什么（如「更短的标题提高点击率」）。",
                            "统计显著性：样本量与置信区间的考量。",
                            "迭代循环：测试→分析→优化→再测试。",
                        ],
                        resources: [
                            { title: "A/B Testing for Content", url: "https://www.optimizely.com/optimization-glossary/ab-testing/" },
                            { title: "Google Optimize (sunset alternatives)", url: "https://support.google.com/optimize/answer/6211930" },
                            { title: "Content Experiments", url: "https://www.nngroup.com/articles/ab-testing-vs-usability-testing/" },
                        ],
                    },
                ],
            },
            {
                id: "tw-w14",
                title: "第 14 周：高级工具链",
                summary: "掌握 DITA、CCMS、多版本管理与搜索优化。",
                overview: "企业级文档需要专业工具。本周从结构化写作到搜索优化，掌握大规模文档的技术栈。",
                keyPoints: [
                    "DITA：企业级结构化写作标准。",
                    "CCMS：组件内容管理系统。",
                    "多版本：并行维护多个产品/API 版本的文档。",
                ],
                lessons: [
                    {
                        id: "tw-w14-1",
                        title: "DITA 与结构化写作",
                        detail: "理解 DITA 的 Topic 类型、Map 结构与专业化（Specialization）。",
                        keyPoints: [
                            "Topic 类型：Concept、Task、Reference、Troubleshooting。",
                            "DITA Map：组织 Topic 的层级与导航结构。",
                            "条件处理：用 profiling 属性生成不同版本。",
                        ],
                        resources: [
                            { title: "OASIS DITA", url: "https://www.oasis-open.org/committees/dita/" },
                            { title: "LearningDITA", url: "https://learningdita.com/" },
                            { title: "DITA Style Guide", url: "https://www.oxygenxml.com/dita/styleguide/" },
                        ],
                    },
                    {
                        id: "tw-w14-2",
                        title: "组件内容管理系统（CCMS）",
                        detail: "了解 Paligo、Heretto、SDL 等 CCMS 的能力与适用场景。",
                        keyPoints: [
                            "CCMS vs CMS：组件级复用与版本管理。",
                            "工作流集成：审批、翻译、发布的自动化。",
                            "选型考量：规模、预算、团队技能与集成需求。",
                        ],
                        resources: [
                            { title: "What is a CCMS", url: "https://paligo.net/blog/technical-writing/what-is-a-ccms/" },
                            { title: "Paligo CCMS", url: "https://paligo.net/" },
                            { title: "Heretto CCMS", url: "https://heretto.com/" },
                        ],
                    },
                    {
                        id: "tw-w14-3",
                        title: "多版本文档管理",
                        detail: "并行维护多个版本：版本分支策略、版本选择器与 URL 设计。",
                        keyPoints: [
                            "版本策略：每个版本一个分支 vs 条件文本。",
                            "版本选择器 UI：让用户清楚知道在看哪个版本。",
                            "SEO 考量：canonical URL 与版本间的关系。",
                        ],
                        resources: [
                            { title: "Docusaurus Versioning", url: "https://docusaurus.io/docs/versioning" },
                            { title: "Read the Docs Versioning", url: "https://docs.readthedocs.io/en/stable/versions.html" },
                            { title: "Multi-Version Docs Best Practices", url: "https://idratherbewriting.com/learnapidoc/pubapis_versioning.html" },
                        ],
                    },
                    {
                        id: "tw-w14-4",
                        title: "文档搜索优化",
                        detail: "配置 Algolia DocSearch 或自建搜索：索引策略、同义词与权重调优。",
                        keyPoints: [
                            "Algolia DocSearch：免费开源项目搜索方案。",
                            "索引策略：标题权重 > 正文，代码块特殊处理。",
                            "同义词与纠错：处理用户拼写错误与术语变体。",
                        ],
                        resources: [
                            { title: "Algolia DocSearch", url: "https://docsearch.algolia.com/" },
                            { title: "Meilisearch", url: "https://www.meilisearch.com/" },
                            { title: "Search UX Best Practices", url: "https://www.nngroup.com/articles/search-visible-and-simple/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "tw-phase8",
        title: "第八阶段：前沿技术与领导力",
        duration: "第 15-16 周",
        goal: "掌握 AI、多媒体等前沿技术，建立团队领导与企业级文档能力。",
        weeks: [
            {
                id: "tw-w15",
                title: "第 15 周：AI 与多媒体文档",
                summary: "探索 AI 辅助写作与多媒体内容创作。",
                overview: "AI 正在改变技术写作。本周从 AI 辅助工具到视频脚本，扩展文档的形式边界。",
                keyPoints: [
                    "AI 辅助写作：草稿生成、编辑润色、翻译辅助。",
                    "AI 驱动搜索：语义搜索与文档问答机器人。",
                    "多媒体文档：视频、动画与交互式教程。",
                ],
                lessons: [
                    {
                        id: "tw-w15-1",
                        title: "AI 辅助写作与编辑",
                        detail: "用 AI 工具加速写作：草稿生成、风格统一、语法检查与简化。",
                        keyPoints: [
                            "草稿生成：用 AI 生成初稿，人工审核与优化。",
                            "风格统一：用 AI 检查并统一术语与语气。",
                            "质量把控：AI 输出需要人工验证准确性。",
                        ],
                        resources: [
                            { title: "AI Tools for Documentation", url: "https://document360.com/blog/ai-tools-for-software-documentation/" },
                            { title: "Grammarly for Tech Docs", url: "https://www.grammarly.com/business" },
                            { title: "Writer.com", url: "https://writer.com/" },
                        ],
                    },
                    {
                        id: "tw-w15-2",
                        title: "AI 驱动的文档搜索与问答",
                        detail: "用语义搜索和 RAG 技术构建文档问答机器人。",
                        keyPoints: [
                            "语义搜索：超越关键词匹配，理解用户意图。",
                            "RAG（检索增强生成）：基于文档的精准问答。",
                            "准确性保障：引用来源、置信度与人工回退。",
                        ],
                        resources: [
                            { title: "Docs Chatbot with RAG", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" },
                            { title: "Algolia AI Search", url: "https://www.algolia.com/products/ai-search/" },
                            { title: "Mendable", url: "https://www.mendable.ai/" },
                        ],
                    },
                    {
                        id: "tw-w15-3",
                        title: "视频文档与屏幕录制",
                        detail: "制作教程视频：脚本编写、录制工具与后期编辑。",
                        keyPoints: [
                            "视频脚本：结构化脚本，控制时长与节奏。",
                            "录制工具：Loom、OBS、Camtasia 的选择。",
                            "可维护性：视频更新成本高，适合稳定功能。",
                        ],
                        resources: [
                            { title: "Loom", url: "https://www.loom.com/" },
                            { title: "OBS Studio", url: "https://obsproject.com/" },
                            { title: "Video Documentation Best Practices", url: "https://www.techsmith.com/blog/video-documentation/" },
                        ],
                    },
                    {
                        id: "tw-w15-4",
                        title: "交互式教程与 Playground",
                        detail: "创建可在浏览器中运行的交互式学习环境。",
                        keyPoints: [
                            "代码沙箱：CodeSandbox、StackBlitz、Replit 嵌入。",
                            "交互式教程：Jupyter、Observable 的应用。",
                            "Playground：让用户在安全环境中实验。",
                        ],
                        resources: [
                            { title: "CodeSandbox", url: "https://codesandbox.io/" },
                            { title: "StackBlitz", url: "https://stackblitz.com/" },
                            { title: "Jupyter Book", url: "https://jupyterbook.org/" },
                        ],
                    },
                ],
            },
            {
                id: "tw-w16",
                title: "第 16 周：企业级文档与团队领导力",
                summary: "掌握企业级文档架构与技术写作团队管理。",
                overview: "从个人贡献者到团队领导：本周覆盖多产品文档架构、合规要求与团队建设。",
                keyPoints: [
                    "多产品架构：统一门户、共享组件与品牌一致性。",
                    "合规文档：SOC2、GDPR、行业监管要求。",
                    "团队领导：招聘、培训与跨职能协作。",
                ],
                lessons: [
                    {
                        id: "tw-w16-1",
                        title: "多产品文档架构",
                        detail: "设计支持多产品线的统一文档平台：共享组件、一致体验与独立发布。",
                        keyPoints: [
                            "统一门户：多产品共享导航、搜索与身份。",
                            "共享组件：认证、错误处理等通用内容复用。",
                            "独立发布：各产品团队可独立更新，不互相阻塞。",
                        ],
                        resources: [
                            { title: "Multi-Product Docs Strategy", url: "https://document360.com/blog/multi-product-documentation-strategy/" },
                            { title: "Google Cloud Docs Architecture", url: "https://cloud.google.com/docs" },
                            { title: "AWS Docs", url: "https://docs.aws.amazon.com/" },
                        ],
                    },
                    {
                        id: "tw-w16-2",
                        title: "合规与监管文档",
                        detail: "满足 SOC2、GDPR、HIPAA 等合规要求的文档策略。",
                        keyPoints: [
                            "合规文档类型：隐私政策、安全白皮书、审计报告。",
                            "版本控制与审计追踪：满足合规审查要求。",
                            "敏感信息处理：数据分类与访问控制。",
                        ],
                        resources: [
                            { title: "SOC2 Compliance Docs", url: "https://www.vanta.com/resources/what-is-soc-2" },
                            { title: "GDPR Documentation Requirements", url: "https://gdpr.eu/documentation/" },
                            { title: "Security Documentation", url: "https://www.atlassian.com/trust" },
                        ],
                    },
                    {
                        id: "tw-w16-3",
                        title: "技术写作团队建设",
                        detail: "招聘、培训与发展技术写作团队：能力模型、职级体系与绩效评估。",
                        keyPoints: [
                            "能力模型：写作、技术、工具、协作四个维度。",
                            "职级体系：Junior → Senior → Staff → Principal 的成长路径。",
                            "招聘与面试：写作测试、Portfolio 评审与文化匹配。",
                        ],
                        resources: [
                            { title: "Write the Docs: Hiring Guide", url: "https://www.writethedocs.org/hiring-guide/" },
                            { title: "Tech Writing Career Ladder", url: "https://developers.google.com/tech-writing/resources" },
                            { title: "Building a Docs Team", url: "https://document360.com/blog/technical-writers-team-structure/" },
                        ],
                    },
                    {
                        id: "tw-w16-4",
                        title: "培训工程师写文档",
                        detail: "建立工程师文档贡献的文化与流程：模板、培训与激励机制。",
                        keyPoints: [
                            "降低门槛：提供模板、示例与快速反馈。",
                            "嵌入流程：代码评审包含文档检查。",
                            "认可与激励：公开表彰、贡献统计与晋升考量。",
                        ],
                        resources: [
                            { title: "Engineers and Documentation", url: "https://www.writethedocs.org/guide/writing/mindshare/" },
                            { title: "Google Tech Writing Training", url: "https://developers.google.com/tech-writing" },
                            { title: "Docs Culture at GitLab", url: "https://about.gitlab.com/handbook/engineering/ux/technical-writing/" },
                        ],
                    },
                ],
            },
        ],
    },
]

export const technicalWriterKnowledgeCards: KnowledgeCard[] = [
    {
        id: "tw-phase1",
        title: "写作先看读者与任务",
        summary: "技术写作不是文学创作，而是帮助读者完成任务。先明确读者与验收标准，内容才会“可用”。",
        points: [
            "读者画像 > 术语堆砌：不同读者的前置知识完全不同。",
            "用结构化模板降低沟通成本：前置条件/步骤/预期结果/错误处理。",
            "一句话验收：读者看完能否独立完成任务并验证成功？",
        ],
        practice: "选一个你熟悉的功能，写一页 Quickstart：包含前置条件、3-5 步操作与可验证结果。",
    },
    {
        id: "tw-phase2",
        title: "Docs-as-Code 是效率杠杆",
        summary: "把文档当代码一样：用 Git 管变更，用 PR 做评审，用自动化做质量线，发布就变成流水线。",
        points: [
            "PR 让协作可追踪：谁改了什么、为何改、如何回滚。",
            "自动化检查减少重复劳动：链接、拼写、风格与格式一次性解决。",
            "预览环境让评审更高效：所见即所得，减少来回沟通。",
        ],
        practice: "建一个 docs 仓库：启用 PR 预览 + link check + style linter（如 Vale）。",
    },
    {
        id: "tw-phase3",
        title: "用 Diátaxis 组织内容",
        summary: "同一主题需要不同文档类型：教程教会你，How-to 帮你做事，Reference 让你查，Explanation 让你理解。",
        points: [
            "Tutorial 避免岔路：一步一步走到成功体验。",
            "How-to 只为完成任务：最少背景，强校验结果。",
            "Reference 要“结构化与完整”：表格、字段、约束、默认值。",
        ],
        practice: "给同一功能写 4 份内容：Tutorial/How-to/Reference/Explanation，各 1 页。",
    },
    {
        id: "tw-phase4",
        title: "发布与反馈闭环",
        summary: "文档是长期产品。发布说明、反馈渠道与指标让它持续变好，也让你的能力可展示。",
        points: [
            "发布说明面向用户：Breaking change + 迁移指南。",
            "反馈入口要低摩擦：issue 模板、评分组件或表单。",
            "作品集要可验证：在线链接 + PR 记录 + 取舍复盘。",
        ],
        practice: "为作品集站点加「反馈入口」与「变更日志」，并用数据挑 1 页做优化复盘。",
    },
    {
        id: "tw-phase5",
        title: "内容战略思维",
        summary: "从写作者到内容负责人：不只是写，还要管理内容的生命周期与组织架构。",
        points: [
            "内容审计：定期盘点，识别过时、重复与缺失的内容。",
            "生命周期管理：创建→发布→维护→归档→删除的完整流程。",
            "单源发布：一次编写多处发布，降低维护成本。",
        ],
        practice: "对现有文档做一次内容审计，识别 Top 5 需要改进的页面并制定计划。",
    },
    {
        id: "tw-phase6",
        title: "开发者体验优先",
        summary: "好的 API 文档不止是参考手册，而是完整的开发者体验设计。",
        points: [
            "开发者旅程：从发现到贡献，每个阶段都需要文档支持。",
            "Time-to-First-Success：让开发者尽快体验成功是核心指标。",
            "交互式文档：让开发者在文档中直接尝试 API。",
        ],
        practice: "绘制你产品的开发者旅程地图，标注每个阶段的文档触点与痛点。",
    },
    {
        id: "tw-phase7",
        title: "数据驱动改进",
        summary: "从「感觉好」到「证明好」：用指标和用户研究驱动文档优化。",
        points: [
            "文档 KPI：CSAT、任务完成率、Time-to-Success。",
            "定量+定性：Analytics 看趋势，用户访谈挖原因。",
            "持续迭代：测试→分析→优化→再测试的闭环。",
        ],
        practice: "为文档站点配置 Analytics，识别高跳出页面并做一次可用性测试。",
    },
    {
        id: "tw-phase8",
        title: "团队与领导力",
        summary: "从个人贡献者到团队领导：招聘、培训与建立文档文化。",
        points: [
            "能力模型：写作、技术、工具、协作四个维度的成长路径。",
            "培训工程师：降低门槛、嵌入流程、认可激励。",
            "企业级架构：多产品、多版本、合规要求的统一方案。",
        ],
        practice: "设计一个「工程师文档贡献」培训计划，包括模板、示例与反馈机制。",
    },
]

export const technicalWriterExamQuestions: QuizQuestion[] = [
    {
        id: "tw-q1",
        question: "技术文档最重要的验收标准更接近哪项？",
        options: ["写得足够华丽", "覆盖所有细节", "读者能完成任务并验证成功", "页面排版好看"],
        answer: 2,
        rationale: "技术写作的目标是帮助读者完成任务；是否可复现、可验证是关键。",
    },
    {
        id: "tw-q2",
        question: "Diátaxis 框架中，How-to guide 的核心特征是？",
        options: ["解释原理与背景", "提供完整参数参考", "面向具体任务的可执行步骤", "按章节讲解概念"],
        answer: 2,
        rationale: "How-to 面向完成任务：最少背景、清晰步骤、可验证结果。",
    },
    {
        id: "tw-q3",
        question: "为什么建议用 Docs-as-Code（Git + PR）管理文档？",
        options: ["让写作更有仪式感", "变更可追踪、可评审、可回滚", "避免使用 Markdown", "可以绕过协作沟通"],
        answer: 1,
        rationale: "Git/PR 能追踪变更、进行评审并回滚，降低协作成本。",
    },
    {
        id: "tw-q4",
        question: "一段操作步骤最需要补齐的“证据”通常是？",
        options: ["更多形容词", "预期输出/截图/检查点", "更长的背景故事", "更多抽象概念"],
        answer: 1,
        rationale: "步骤需要可验证：明确预期结果与检查点才能判断是否做对。",
    },
    {
        id: "tw-q5",
        question: "API Reference 文档里，错误处理更推荐怎么写？",
        options: ["只写“发生错误请重试”", "列出错误模型、状态码/错误码与示例", "把错误都放到 FAQ", "完全不写以免吓到读者"],
        answer: 1,
        rationale: "错误模型、常见错误与示例是 API 文档可用性的核心组成。",
    },
    {
        id: "tw-q6",
        question: "写作测试中最常见的“加分项”是？",
        options: ["把每句话都写得更长", "把结构与信息补齐并让示例可复现", "删除所有标题", "只改标点不改内容"],
        answer: 1,
        rationale: "结构化与可复现性直接提升可用性，是写作测试的关键。",
    },
    {
        id: "tw-q7",
        question: "下列哪项更属于 Reference 文档？",
        options: ["从 0 到 1 的完整教程", "面向任务的操作指南", "参数/字段/约束的结构化说明", "原理与背景解释"],
        answer: 2,
        rationale: "Reference 强调结构化信息：参数、字段、约束、默认值与示例。",
    },
    {
        id: "tw-q8",
        question: "为什么要尽早考虑本地化/国际化？",
        options: ["因为翻译越早越便宜", "避免术语不一致与难以翻译的表达", "为了让文档更长", "因为写作必须用英文"],
        answer: 1,
        rationale: "术语与表达如果不一致，会让翻译成本飙升且质量不可控。",
    },
    {
        id: "tw-q9",
        question: "文档的反馈闭环中，最关键的一步是？",
        options: ["开一个群聊", "只收集不处理", "建立低摩擦入口并把改进落到 PR", "把问题都交给支持团队"],
        answer: 2,
        rationale: "反馈要进入可追踪的迭代流程（issue/PR），才能真正改进。",
    },
    {
        id: "tw-q10",
        question: "一个好的 Quickstart 通常包含哪些最小元素？",
        options: ["完整概念史", "前置条件 + 最短步骤 + 可验证结果", "所有高级用法", "至少 20 张截图"],
        answer: 1,
        rationale: "Quickstart 的目标是最短路径跑通成功体验：前置条件、步骤与验证结果。",
    },
    {
        id: "tw-q11",
        question: "内容审计（Content Audit）的首要目标是？",
        options: ["让文档看起来更长", "系统盘点现有内容，识别过时、重复与缺失", "删除所有旧文档", "统一所有文档的字体"],
        answer: 1,
        rationale: "内容审计帮助识别需要更新、合并或补充的内容，是内容战略的基础。",
    },
    {
        id: "tw-q12",
        question: "单源发布（Single-Sourcing）的核心好处是？",
        options: ["让文档更难维护", "一次编写多处发布，降低维护成本与不一致风险", "增加翻译难度", "只能发布一种格式"],
        answer: 1,
        rationale: "单源发布让同一内容可以输出到多个渠道，减少重复工作与版本不一致。",
    },
    {
        id: "tw-q13",
        question: "卡片分类（Card Sorting）主要用于？",
        options: ["测试代码质量", "了解用户的心智模型，优化内容分组与导航", "设计数据库表结构", "评估服务器性能"],
        answer: 1,
        rationale: "卡片分类让用户参与内容组织，帮助设计符合用户期望的信息架构。",
    },
    {
        id: "tw-q14",
        question: "开发者体验（DX）中的 Time-to-First-Success 是指？",
        options: ["产品上线时间", "从注册到首次成功调用 API 的时间", "文档编写时间", "服务器响应时间"],
        answer: 1,
        rationale: "Time-to-First-Success 衡量开发者多快能体验到产品价值，是 DX 的核心指标。",
    },
    {
        id: "tw-q15",
        question: "GraphQL 文档相比 REST 文档的特殊之处是？",
        options: ["不需要任何文档", "Schema 自描述，但仍需补充上下文、示例与最佳实践", "只需要写错误码", "必须用视频形式"],
        answer: 1,
        rationale: "GraphQL Schema 提供类型信息，但查询模式、最佳实践与错误处理仍需文档补充。",
    },
    {
        id: "tw-q16",
        question: "SDK 文档中，版本兼容矩阵的作用是？",
        options: ["装饰页面", "帮助用户了解 SDK 版本与 API 版本的对应关系", "隐藏错误信息", "增加文档长度"],
        answer: 1,
        rationale: "版本兼容矩阵帮助用户选择正确的 SDK 版本，避免兼容性问题。",
    },
    {
        id: "tw-q17",
        question: "文档 KPI 中的 CSAT 是指？",
        options: ["代码覆盖率", "用户满意度（Customer Satisfaction）", "页面加载速度", "文档字数"],
        answer: 1,
        rationale: "CSAT 通过「这篇文档有帮助吗？」等反馈收集用户满意度。",
    },
    {
        id: "tw-q18",
        question: "DITA 中的 Topic 类型不包括？",
        options: ["Concept", "Task", "Reference", "Database"],
        answer: 3,
        rationale: "DITA 标准 Topic 类型包括 Concept、Task、Reference、Troubleshooting 等，不包括 Database。",
    },
    {
        id: "tw-q19",
        question: "用 AI 辅助文档写作时，最重要的是？",
        options: ["完全信任 AI 输出", "人工验证准确性，AI 输出需要审核", "不需要风格指南", "只用 AI 不用人"],
        answer: 1,
        rationale: "AI 可以加速写作，但技术准确性必须由人工验证，尤其是代码和命令。",
    },
    {
        id: "tw-q20",
        question: "企业级多产品文档架构的关键挑战是？",
        options: ["让每个产品用完全不同的风格", "统一体验与独立发布的平衡", "只用一个人维护所有文档", "不需要搜索功能"],
        answer: 1,
        rationale: "多产品架构需要在统一的用户体验与各团队独立发布之间找到平衡。",
    },
]

export const technicalWriterRoadmap: RoadmapDefinition = {
    id: "technical-writer",
    label: "Technical Writer",
    title: "技术写作",
    durationLabel: "16 个主题",
    description:
        "从入门到专家的完整技术写作体系：写作基础与 Diátaxis → Docs-as-Code 工具链 → API/CLI 文档 → 内容体系与质量线 → 发布运营与作品集 → 内容战略与信息架构 → 开发者体验与高级 API → 数据驱动与现代工具 → AI/多媒体与团队领导力。覆盖从个人贡献者到内容负责人的完整成长路径。",
    heroBadge: "入门到专家 · 16 主题",
    stages: technicalWriterStages,
    knowledgeCards: technicalWriterKnowledgeCards,
    examQuestions: technicalWriterExamQuestions,
    suggestion: (percent: number) => {
        if (percent < 15) {
            return "先补齐第 1 阶段：读者分析 + 写作模板 + 风格指南，确保「可用」优先。"
        }
        if (percent < 30) {
            return "把 docs-as-code 跑起来：Git + PR + 自动检查 + 预览发布，形成协作闭环。"
        }
        if (percent < 45) {
            return "重点练 API/CLI 文档：认证/错误模型/示例可复现，并补齐四类文档模板。"
        }
        if (percent < 60) {
            return "开始做作品集：挑 1 个真实项目做信息架构与发布，并用反馈/数据做一次迭代复盘。"
        }
        if (percent < 75) {
            return "进阶内容战略：做一次内容审计，建立生命周期管理与信息架构优化流程。"
        }
        if (percent < 90) {
            return "深入开发者体验：绘制开发者旅程地图，优化 Onboarding 与交互式文档。"
        }
        return "向团队领导迈进：建立文档 KPI 体系，探索 AI 工具，培训工程师写文档。"
    },
    resourceGuide: {
        environment: "Markdown 编辑器 + Git 仓库 + 静态站点生成器 + Analytics（可选：Algolia 搜索、AI 工具）。",
        fallbackKeyPoints: [
            "先写大纲再写正文：标题层级、导航与交叉链接优先。",
            "每一步都可复现：前置条件、版本、命令与预期输出齐全。",
            "术语一致与示例可运行，比「写得很长」更重要。",
            "内容战略：不只是写，还要管理内容的生命周期。",
            "数据驱动：用指标和用户研究验证改进效果。",
        ],
        handsOnSteps: [
            "阅读原文，提炼目标读者、前置条件与验收标准，先写 5-10 行大纲。",
            "写一份最小可用内容（Quickstart/How-to/Reference 任选其一），补齐示例与预期输出/截图。",
            "用 checklist 自检（结构/术语/链接/示例可复现），提交 PR 并邀请评审。",
            "配置 Analytics，识别高跳出页面，做一次内容审计与优化。",
        ],
        selfChecks: [
            "读者是谁？看完能完成什么任务？成功/失败如何验证？",
            "步骤是否可复制粘贴、可复现？是否遗漏版本/环境差异？",
            "术语、命名与示例是否一致？链接与截图是否可用？",
            "有没有定期审查机制？过时内容如何处理？",
            "开发者旅程中，哪个阶段流失最严重？文档能否补救？",
        ],
        extensions: [
            "把本节产出沉淀为模板（Quickstart/How-to/Reference/Explanation），后续复用。",
            "为仓库加上自动化检查：link check + style linter（如 Vale）+ PR 预览。",
            "探索 DITA/CCMS 等企业级工具，评估是否适合团队规模。",
            "尝试 AI 辅助写作工具，建立人机协作的质量把控流程。",
            "设计工程师文档贡献培训计划，推动文档文化。",
        ],
        lessonQuizAdvice: "建议：把错题对应的概念/模板写成一段可复用示例，并用真实场景验证可用性。高级主题的错题可结合实际工作场景深入研究。",
    },
}
