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
        practice: "为作品集站点加“反馈入口”与“变更日志”，并用数据挑 1 页做优化复盘。",
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
]

export const technicalWriterRoadmap: RoadmapDefinition = {
    id: "technical-writer",
    label: "Technical Writer",
    title: "技术写作与 Docs-as-Code 路线",
    durationLabel: "8 个主题",
    description:
        "按 8 个主题打造可复用的技术写作体系：写作基础与模板 → Docs-as-Code 工具链/协作 → API/CLI 文档可复现 → 内容体系与质量线 → 发布运营与作品集。每个主题都可打卡并保存测验记录，持续迭代作品。",
    heroBadge: "Docs-as-Code Bootcamp",
    stages: technicalWriterStages,
    knowledgeCards: technicalWriterKnowledgeCards,
    examQuestions: technicalWriterExamQuestions,
    suggestion: (percent: number) => {
        if (percent < 25) {
            return "先补齐第 1 阶段：读者分析 + 写作模板 + 风格指南，确保“可用”优先。"
        }
        if (percent < 50) {
            return "把 docs-as-code 跑起来：Git + PR + 自动检查 + 预览发布，形成协作闭环。"
        }
        if (percent < 75) {
            return "重点练 API/CLI 文档：认证/错误模型/示例可复现，并补齐四类文档模板。"
        }
        return "开始做作品集：挑 1 个真实项目做信息架构与发布，并用反馈/数据做一次迭代复盘。"
    },
    resourceGuide: {
        environment: "Markdown 编辑器 + Git 仓库（可选：静态站点生成器），能运行示例命令并产出截图/链接。",
        fallbackKeyPoints: [
            "先写大纲再写正文：标题层级、导航与交叉链接优先。",
            "每一步都可复现：前置条件、版本、命令与预期输出齐全。",
            "术语一致与示例可运行，比“写得很长”更重要。",
        ],
        handsOnSteps: [
            "阅读原文，提炼目标读者、前置条件与验收标准，先写 5-10 行大纲。",
            "写一份最小可用内容（Quickstart/How-to/Reference 任选其一），补齐示例与预期输出/截图。",
            "用 checklist 自检（结构/术语/链接/示例可复现），提交 PR 并邀请评审。",
        ],
        selfChecks: [
            "读者是谁？看完能完成什么任务？成功/失败如何验证？",
            "步骤是否可复制粘贴、可复现？是否遗漏版本/环境差异？",
            "术语、命名与示例是否一致？链接与截图是否可用？",
        ],
        extensions: [
            "把本节产出沉淀为模板（Quickstart/How-to/Reference/Explanation），后续复用。",
            "为仓库加上自动化检查：link check + style linter（如 Vale）+ PR 预览。",
            "补一页 Troubleshooting/FAQ，把高频问题写成可搜索的答案。",
        ],
        lessonQuizAdvice: "建议：把错题对应的概念/模板写成一段可复用示例，并用真实场景验证可用性。",
    },
}
