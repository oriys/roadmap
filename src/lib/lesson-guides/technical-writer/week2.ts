import type { LessonGuide } from "../types"

export const week2Guides: Record<string, LessonGuide> = {
    "tw-w2-1": {
        lessonId: "tw-w2-1",
        background: [
            "【设计哲学】Markdown 由 John Gruber 于 2004 年创建，核心设计目标是'易读易写'——源文件本身就是可读的纯文本，同时能转换为结构化的 HTML。这种'纯文本即文档'的理念是 Docs-as-Code 的基石。",
            "【CommonMark 统一标准】原始 Markdown 规范存在大量歧义，导致不同解析器行为不一致。CommonMark（2014 年启动）提供了严格的规范和测试套件，解决了'同一文档不同平台渲染不同'的问题。从 2014 至 2024 持续迭代，是 Markdown 的事实标准。",
            "【GitHub Flavored Markdown】GFM 在 CommonMark 基础上扩展：表格（`| col1 | col2 |`）、任务列表（`- [ ]`）、删除线（`~~text~~`）、代码高亮（```language）、自动链接（URL 自动转为可点击链接）。这些扩展已成为技术文档的标配。",
            "【Docs-as-Code 范式】用 Git 管理文档版本，用 PR 进行评审，用 CI/CD 自动发布——让文档享受与代码相同的工程实践：可追溯、可回滚、可协作、可自动化。Markdown 是这个范式的基础格式。",
            "【模板化思维】模板不是限制创造力，而是沉淀最佳实践。Quickstart、How-to、API Reference 各有固定结构，模板确保一致性，降低认知负荷，让作者聚焦内容而非格式。"
        ],
        keyDifficulties: [
            "【Markdown 方言兼容性】GitHub、GitLab、Notion、Obsidian 对 Markdown 的扩展不同。解决方案：(1) 坚持 CommonMark 核心语法确保可移植性，(2) 明确目标平台，(3) 用 linter 检测不兼容语法。",
            "【空行和空格的陷阱】Markdown 对空行和行尾空格敏感：段落需要空行分隔，列表嵌套需要正确缩进，行尾两空格才是换行。这些'隐形'规则是初学者常见的困惑点。",
            "【资源管理策略】图片和链接管理：(1) 相对路径适合 Git 管理但构建后可能失效，(2) CDN 链接稳定但外部依赖，(3) 外部链接会腐烂（link rot）。建议：内部资源用相对路径 + 构建时检查，外部链接定期验证。",
            "【模板的灵活边界】模板必须区分'必须统一'（标题层级、元数据）和'可以灵活'（正文内容、示例选择）。过度模板化会让文档变成填空题，失去针对性。"
        ],
        handsOnPath: [
            "创建一份完整的 README.md：项目描述（一句话价值主张）→ 快速开始（3-5 步）→ 功能特性（列表）→ 安装说明（代码块）→ 使用示例（代码块 + 输出）→ 贡献指南（链接）→ 许可证。",
            "创建三个可复用模板并保存为团队资源：(1) Quickstart 模板（前置条件 → 安装 → 最小示例 → 预期输出 → 下一步），(2) How-to 模板（目标 → 前置条件 → 步骤 → 验证 → 常见问题），(3) API Reference 模板（端点 → 参数表格 → 请求示例 → 响应示例 → 错误码）。",
            "在 GitHub 仓库中实践 GFM 扩展：创建一个 README 包含任务列表、表格、代码高亮（至少 2 种语言）、折叠部分（<details>）、Mermaid 图表（流程图或时序图）。",
            "配置 markdownlint：安装 VS Code 插件或命令行工具，创建 .markdownlint.json 配置文件，运行检查并修复所有警告。将配置提交到仓库作为团队规范。",
            "执行'渲染一致性测试'：将同一份 Markdown 文件在 GitHub、VS Code 预览、目标 SSG 工具中渲染，对比差异，修复不一致的地方。"
        ],
        selfCheck: [
            "【核心语法掌握】你能否不查文档写出：标题（6 级）、有序/无序列表、链接、图片、代码块（行内/块级）、表格、引用？",
            "【平台兼容性】你的 Markdown 在 GitHub、VS Code、目标 SSG 的渲染结果是否一致？是否有平台特定语法？",
            "【模板可用性】你是否有一套可复用的模板？新文档是否能在 5 分钟内用模板创建骨架？",
            "【资源管理】你的图片和链接是否使用相对路径？是否有机制检测失效链接？",
            "【自动化检查】你是否配置了 markdownlint？团队是否遵循相同的 Markdown 规范？"
        ],
        extensions: [
            "【扩展语法】Markdown 扩展语法指南（https://www.markdownguide.org/extended-syntax/）——脚注、定义列表、任务列表等高级功能。",
            "【规范细节】CommonMark 规范（https://spec.commonmark.org/）——理解边缘情况的处理，如嵌套列表、链接解析优先级。",
            "【图表能力】Mermaid 图表语法（https://mermaid.js.org/）——用 Markdown 画流程图、时序图、甘特图、ER 图。",
            "【工具链】VS Code Markdown 插件推荐：Markdown All in One（快捷键）、markdownlint（检查）、Markdown Preview Enhanced（增强预览）。"
        ],
        sourceUrls: [
            "https://www.markdownguide.org/basic-syntax/",
            "https://spec.commonmark.org/",
            "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github"
        ]
    },
    "tw-w2-2": {
        lessonId: "tw-w2-2",
        background: [
            "【Git 分布式本质】Git 是分布式版本控制系统，三大核心特性：Fast（快速）、Everything is local（本地化）、Local branching on the cheap（廉价分支）。每个开发者拥有完整的代码库副本，支持离线工作。",
            "【Pull Request 协作模型】GitHub 官方定义：'Pull requests are proposals to merge code changes into a project'。它是 GitHub 的'foundational collaboration feature'，让团队在合并前讨论和审查变更。",
            "【PR 四标签页架构】Conversation（讨论中心，追踪反馈进度）、Commits（按时间顺序显示提交历史）、Checks（自动化测试和 CI/CD 状态）、Files changed（差异对比，显示具体修改内容）。",
            "【Docs as Code 哲学】Write the Docs 定义：'Documentation as Code refers to a philosophy that you should be writing documentation with the same tools as code'——版本控制（Git）、纯文本标记语言、代码审查、自动化测试。",
            "【行业验证】Google、Microsoft、Rackspace、AWS、UK Government Digital Service 等组织已成功实施 Docs as Code，证明其广泛的行业认可度和有效性。"
        ],
        keyDifficulties: [
            "【分支策略选择】main-only（极简）、GitFlow（复杂产品）、GitHub Flow（持续部署）各有适用场景。文档项目通常用简单的 main + feature branch 模式——一个功能一个分支，PR 合并后删除。",
            "【合并冲突解决】多人同时编辑同一文件会产生冲突。文档冲突通常是结构性的（如两人都加了新章节），需要人工判断合并顺序。关键命令：git merge、git rebase、手动编辑冲突标记。",
            "【PR 粒度把控】PR 太大难以审查（reviewer fatigue），太小增加管理成本。文档 PR 建议按'一个主题一个 PR'组织，保持 Files changed 在可审查范围内。",
            "【Draft PR 的正确使用】GitHub Draft PR 阻止合并且不自动通知代码所有者——适合分享进行中的工作（WIP）以获取早期反馈，而非正式请求审查。转为 ready-for-review 才触发通知。"
        ],
        handsOnPath: [
            "在 GitHub 上 fork 一个开源文档项目（如 kubernetes/website 或 facebook/docusaurus），创建分支修复一个 typo 或补充一段说明，提交你的第一个文档 PR。体验完整流程。",
            "练习完整的 PR 流程：git checkout -b feature/xxx → 修改文件 → git add → git commit -m '描述' → git push -u origin feature/xxx → GitHub 创建 PR → 请求审查 → 根据反馈修改 → Squash and merge。",
            "故意制造一个冲突并解决它：两个分支修改同一文件的同一行，尝试合并时会出现冲突标记（<<<<<<<、=======、>>>>>>>），手动编辑选择保留内容，然后 git add + git commit 完成合并。",
            "为你的文档仓库配置 PR 模板（.github/PULL_REQUEST_TEMPLATE.md），包含：变更类型（docs/fix/feat）、变更描述、关联 Issue、检查清单（□ 本地构建通过、□ 链接有效、□ 拼写检查）。",
            "体验 Draft PR：创建一个 Draft PR 分享早期想法，收集反馈后再标记为 Ready for review。观察通知行为的差异。"
        ],
        selfCheck: [
            "【Git 基础命令】你是否能熟练使用 git branch、git checkout（或 git switch）、git merge、git pull、git push、git log、git diff？",
            "【PR 描述质量】你的 PR 描述是否清晰说明了'改了什么'（What）和'为什么改'（Why）？审查者能否仅凭描述理解变更意图？",
            "【CI 状态意识】你是否在合并前确保所有自动检查（Checks）都通过？你是否理解每个检查项的含义？",
            "【冲突解决能力】你是否知道如何解决合并冲突？是否理解冲突标记的含义？是否尝试过 rebase 而非 merge？",
            "【团队流程规范】你的团队是否有 PR 审查的流程和标准？是否有 CODEOWNERS 文件自动分配审查者？"
        ],
        extensions: [
            "【深度学习】阅读 Pro Git 书籍（免费）：https://git-scm.com/book/en/v2 —— 理解 Git 内部机制（对象模型、引用、packfiles）。",
            "【工作流对比】学习 GitHub Flow：https://docs.github.com/en/get-started/quickstart/github-flow —— 对比 GitFlow 和 Trunk-based Development 的适用场景。",
            "【自动化钩子】配置 Git Hooks（pre-commit）自动运行检查：拼写（cspell）、链接（lychee）、格式（prettier）。推荐使用 husky + lint-staged。",
            "【持续部署】学习使用 GitHub Actions 自动化文档构建和部署：on push to main → build → deploy to GitHub Pages/Netlify/Vercel。"
        ],
        sourceUrls: [
            "https://git-scm.com/book/en/v2",
            "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",
            "https://www.writethedocs.org/guide/docs-as-code/"
        ]
    },
    "tw-w2-3": {
        lessonId: "tw-w2-3",
        background: [
            "【SSG 核心价值】静态站点生成器（SSG）将 Markdown 文件转换为可部署的静态 HTML 网站——构建时生成所有页面，部署后无需服务器端处理，加载速度快且易于托管（GitHub Pages、Netlify、Vercel）。",
            "【Docusaurus 定位】Meta 开源的文档优先（documentation-first）静态站点生成器，核心理念：'ship a beautiful documentation site in no time'、'focus on your content and just write Markdown files'。基于 React，支持 MDX 嵌入交互式组件。",
            "【MkDocs 特点】Python 生态的文档生成器，以'fast, simple and downright gorgeous'著称。单一 YAML 配置文件（mkdocs.yml），内置开发服务器提供实时预览，文件变更时自动刷新浏览器。",
            "【VitePress 优势】Vue 生态的文档生成器，由 Vite 驱动——'Instant server start, lightning fast hot updates'。支持在 Markdown 中直接使用 Vue 语法和组件，适合需要深度定制的 Vue 技术栈团队。",
            "【PRPL 模式】Docusaurus 遵循的性能优化策略：Push（推送关键资源）、Render（渲染初始路由）、Pre-cache（预缓存剩余路由）、Lazy-load（懒加载按需路由）——确保首屏加载和后续导航都快速。"
        ],
        keyDifficulties: [
            "【工具选型决策树】Docusaurus（React 生态，功能丰富，适合需要版本管理和 i18n 的大型项目）、MkDocs（Python 生态，配置简单，适合快速上手）、VitePress（Vue 生态，Vite 驱动，适合需要 Vue 组件深度定制的项目）。根据团队技术栈和需求选择。",
            "【配置复杂度管理】SSG 工具功能丰富意味着配置项多。建议：从最小配置开始（最小可用 → 可运行 → 可导航），按需添加功能（搜索 → 版本管理 → i18n），避免一开始就追求完美配置。",
            "【部署与 CI/CD】需要理解：构建产物（dist/build 目录）、部署目标（GitHub Pages、Netlify、Vercel）、CI/CD 触发（on push to main → build → deploy）。关键是配置好 GitHub Actions workflow。",
            "【自定义主题边界】默认主题通常够用，深度定制需要了解底层框架（React/Vue）。评估定制需求再决定投入——过早定制是常见的时间陷阱。"
        ],
        handsOnPath: [
            "选择一个 SSG 工具（推荐先试 VitePress 或 MkDocs），用官方脚手架创建项目：npx create-docusaurus / npm create vitepress / pip install mkdocs && mkdocs new。在本地运行并预览。",
            "将你之前写的 Markdown 文档迁移到 SSG 项目中，配置导航栏（nav）和侧边栏（sidebar），组织文档结构。理解配置文件如何控制导航。",
            "部署到 GitHub Pages：创建 .github/workflows/deploy.yml，配置 GitHub Actions 实现 push 到 main 分支后自动构建和部署。验证部署成功。",
            "尝试一个高级功能：添加搜索（Algolia DocSearch 或内置搜索）、多版本文档（docs-versioning）、或国际化支持（i18n）。选择一个与项目需求匹配的功能深入实践。",
            "比较三个工具：分别用 Docusaurus、MkDocs、VitePress 创建最小项目，对比开发体验（启动速度、配置复杂度、预览效果）。形成自己的工具偏好。"
        ],
        selfCheck: [
            "【快速启动能力】你能否在 10 分钟内用 SSG 工具创建一个可运行的文档站点？知道用什么命令初始化和启动开发服务器？",
            "【导航结构理解】你的文档站点是否有清晰的导航结构（nav + sidebar）？用户能否快速找到所需内容？配置文件中如何定义导航？",
            "【自动部署配置】你是否配置了自动部署？push 代码后文档是否自动更新？GitHub Actions workflow 文件在哪里？",
            "【搜索功能集成】你的文档站点是否有搜索功能？用户能否通过关键词快速定位内容？使用的是内置搜索还是 Algolia？",
            "【定制能力边界】你是否了解如何自定义主题或添加插件？知道什么时候该定制、什么时候该使用默认配置？"
        ],
        extensions: [
            "【Docusaurus 深入】完整阅读 Docusaurus 官方文档：https://docusaurus.io/docs —— 特别是 Versioning、i18n、Search 章节，适合需要这些功能的大型项目。",
            "【MkDocs Material】了解 MkDocs 最流行的主题 Material：https://squidfunk.github.io/mkdocs-material/ —— 提供丰富的功能扩展和美观的默认样式。",
            "【VitePress 定制】学习 VitePress 自定义主题：https://vitepress.dev/guide/custom-theme —— 使用 Vue 组件扩展功能，适合 Vue 技术栈团队。",
            "【Algolia DocSearch】配置 Algolia DocSearch：免费为开源项目提供强大的文档搜索功能，需要申请并配置 API Key。"
        ],
        sourceUrls: [
            "https://docusaurus.io/docs",
            "https://www.mkdocs.org/",
            "https://vitepress.dev/"
        ]
    },
    "tw-w2-4": {
        lessonId: "tw-w2-4",
        background: [
            "【CONTRIBUTING.md 核心价值】GitHub 官方定义：'Repository maintainers can set contributing guidelines to help collaborators make meaningful, useful contributions to a project'——帮助协作者做出有意义的贡献，降低参与门槛。",
            "【Changelog 精确定义】Keep a Changelog：'A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version'——为人类（非机器）编写的精选变更记录，不是 Git commit log 的导出。",
            "【变更类型六分类】Keep a Changelog 标准分类：Added（新功能）、Changed（修改）、Deprecated（弃用预告）、Removed（已移除）、Fixed（修复）、Security（安全补丁）——覆盖软件演进的所有变更类型。",
            "【GitHub 社区健康九要素】Code of Conduct（行为准则）、Contributing Guidelines（贡献指南）、License（许可证）、Issue Templates（Issue 模板）、PR Templates（PR 模板）、Support Resources（支持渠道）、Community Profile（社区档案）、Health Files（健康文件）、Contribution Labels（贡献标签）。",
            "【文档文化建设】Write the Docs 强调：'Quality software documentation requires intentional processes, community collaboration'——文档需要刻意的流程设计和社区协作，不是副产品。"
        ],
        keyDifficulties: [
            "【CONTRIBUTING 粒度把控】太简单没有指导作用，太复杂吓跑贡献者。关键覆盖三个核心问题：如何开始（环境设置）、代码/文档规范（风格指南）、提交流程（PR 流程）。保持简洁但完整。",
            "【Changelog 维护成本】手动维护容易遗漏或过时。最佳实践：维护'Unreleased'部分追踪待发布变更，发布时再移至新版本号下。避免直接使用 Git log（太吵杂，面向机器而非人类）。",
            "【规范的执行保障】有规范但没人遵守等于没有。需要通过 CI 检查（linter、模板校验）和 PR 审查强制执行。规范必须可自动化验证。",
            "【日期格式统一】Keep a Changelog 推荐 ISO 8601 格式（YYYY-MM-DD），避免 MM/DD/YYYY 或 DD/MM/YYYY 的地区歧义。"
        ],
        handsOnPath: [
            "为你的项目创建 CONTRIBUTING.md：包含开发环境设置（依赖、工具、版本）、代码规范（风格指南链接）、提交信息格式（Conventional Commits）、PR 流程（分支命名、审查要求）、沟通渠道（Issue、Discussion、Slack）。",
            "创建 CHANGELOG.md：按 Keep a Changelog 格式，顶部维护 [Unreleased] 部分，用 Added/Changed/Deprecated/Removed/Fixed/Security 分类记录变更。为历史版本补充至少 3 个版本的记录。",
            "配置 Issue 和 PR 模板：创建 .github/ISSUE_TEMPLATE/bug_report.md 和 feature_request.md，创建 .github/PULL_REQUEST_TEMPLATE.md。包含必要的信息字段和检查清单。",
            "设置 commitlint 强制提交格式：安装 @commitlint/cli 和 @commitlint/config-conventional，配置 husky 在 commit-msg 钩子中运行检查。确保所有提交遵循 Conventional Commits（feat:/fix:/docs:）。",
            "添加 CODE_OF_CONDUCT.md：使用 Contributor Covenant（https://www.contributor-covenant.org/）模板，明确行为准则和违规处理流程。"
        ],
        selfCheck: [
            "【贡献者自助能力】新贡献者能否通过 CONTRIBUTING.md 独立完成第一次贡献？是否需要额外询问才能开始？",
            "【Changelog 可读性】你的 Changelog 是否清晰记录了每个版本的重要变化？用户能否快速了解版本差异和升级影响？",
            "【模板引导效果】你的 Issue/PR 模板是否引导贡献者提供足够的信息？是否减少了'信息不足'的来回沟通？",
            "【提交信息一致性】你的提交信息是否有统一的格式？能否从提交历史快速了解变更类型（feat/fix/docs）？",
            "【规范自动化验证】规范是否通过 CI 检查自动执行？违反规范的提交是否会被阻止？"
        ],
        extensions: [
            "【Conventional Commits】学习标准化提交格式：https://www.conventionalcommits.org/ —— feat:、fix:、docs:、chore:、refactor: 等前缀让提交历史结构化，支持自动生成 Changelog。",
            "【Semantic Versioning】了解语义化版本规则：https://semver.org/ —— MAJOR.MINOR.PATCH 的含义，何时需要升级主版本号（Breaking Changes）。",
            "【优秀案例研究】研究 React、Vue、Kubernetes 的 CONTRIBUTING 文件——它们如何组织内容、如何平衡详尽与简洁、如何分层提供信息。",
            "【自动化 Changelog】配置 standard-version 或 semantic-release 自动生成 Changelog：基于 Conventional Commits 提取变更，自动创建版本号和 Git Tag。"
        ],
        sourceUrls: [
            "https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions",
            "https://keepachangelog.com/en/1.1.0/",
            "https://www.writethedocs.org/guide/index.html"
        ]
    }
}
