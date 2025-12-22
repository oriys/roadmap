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
            "静态站点生成器（SSG）将 Markdown 文件转换为可部署的 HTML 网站，是 Docs-as-Code 的核心工具。",
            "Docusaurus 是 Meta 开源的文档站点生成器，基于 React，支持版本管理、国际化、全站搜索，适合大型文档项目。",
            "MkDocs 是 Python 生态的文档生成器，以'fast, simple and downright gorgeous'著称，配置简单（单个 YAML 文件），适合快速上手。",
            "VitePress 是 Vue 生态的文档生成器，基于 Vite 构建，启动速度极快，支持在 Markdown 中使用 Vue 组件，适合 Vue 技术栈团队。"
        ],
        keyDifficulties: [
            "工具选型：Docusaurus（React 生态，功能丰富）、MkDocs（Python 生态，简单快速）、VitePress（Vue 生态，性能优先）——根据团队技术栈和需求选择。",
            "配置复杂度：SSG 工具功能丰富意味着配置项多。建议从最小配置开始，按需添加功能（导航、搜索、版本管理）。",
            "部署和 CI/CD：需要配置自动构建和部署流程（GitHub Pages、Netlify、Vercel）。关键是理解构建产物（dist/build 目录）和部署目标。",
            "自定义主题：默认主题通常够用，但深度定制需要了解底层框架（React/Vue）。评估定制需求再决定投入。"
        ],
        handsOnPath: [
            "选择一个 SSG 工具（推荐先试 VitePress 或 MkDocs），用官方脚手架创建一个文档项目，在本地运行并预览。",
            "将你之前写的 Markdown 文档迁移到 SSG 项目中，配置导航栏和侧边栏，组织文档结构。",
            "部署到 GitHub Pages：配置 GitHub Actions，实现 push 到 main 分支后自动构建和部署。",
            "尝试一个高级功能：添加搜索（Algolia DocSearch 或内置搜索）、多版本文档、或国际化支持。"
        ],
        selfCheck: [
            "你能否在 10 分钟内用 SSG 工具创建一个可运行的文档站点？",
            "你的文档站点是否有清晰的导航结构？用户能否快速找到所需内容？",
            "你是否配置了自动部署？push 代码后文档是否自动更新？",
            "你的文档站点是否有搜索功能？用户能否通过关键词快速定位？",
            "你是否了解如何自定义主题或添加插件？"
        ],
        extensions: [
            "深入学习 Docusaurus：https://docusaurus.io/docs —— 适合需要版本管理和国际化的大型项目。",
            "了解 MkDocs Material 主题：https://squidfunk.github.io/mkdocs-material/ —— MkDocs 最流行的主题。",
            "学习 VitePress 自定义主题：https://vitepress.dev/guide/custom-theme —— 使用 Vue 组件扩展功能。",
            "配置 Algolia DocSearch：免费为开源项目提供强大的文档搜索功能。"
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
            "CONTRIBUTING.md 是开源项目的核心文档之一——'help collaborators make meaningful, useful contributions to a project'（帮助协作者做出有意义的贡献）。",
            "Changelog 是'a curated, chronologically ordered list of notable changes for each version'——按时间顺序记录每个版本重要变化的精选文档。",
            "Write the Docs 社区强调建立'文档文化'：从工程团队开始推动文档意识，定期举行会议，收集多方意见，降低参与门槛。",
            "健康的开源项目需要一套完整的社区文档：README、CONTRIBUTING、CODE_OF_CONDUCT、LICENSE、CHANGELOG、Issue/PR 模板。"
        ],
        keyDifficulties: [
            "CONTRIBUTING 的粒度：太简单没有指导作用，太复杂吓跑贡献者。关键是覆盖'如何开始'、'代码/文档规范'、'提交流程'三个核心问题。",
            "Changelog 的维护成本：手动维护容易遗漏或过时。建议维护一个'Unreleased'部分追踪待发布变更，发布时再移至新版本。",
            "规范的执行：有规范但没人遵守等于没有。需要通过 CI 检查（linter、模板）和 PR 审查强制执行。",
            "平衡灵活性与一致性：规范太死板会限制创造力，太灵活又导致混乱。核心规则强制执行，细节留有余地。"
        ],
        handsOnPath: [
            "为你的项目创建 CONTRIBUTING.md：包含开发环境设置、代码规范、提交信息格式、PR 流程、沟通渠道。",
            "创建 CHANGELOG.md：按 Keep a Changelog 格式，用 Added/Changed/Deprecated/Removed/Fixed/Security 分类记录变更。",
            "配置 Issue 和 PR 模板（.github/ISSUE_TEMPLATE/、.github/PULL_REQUEST_TEMPLATE.md），引导贡献者提供必要信息。",
            "用 commitlint 或类似工具强制提交信息格式（如 Conventional Commits：feat:/fix:/docs:）。"
        ],
        selfCheck: [
            "新贡献者能否通过 CONTRIBUTING.md 独立完成第一次贡献？",
            "你的 Changelog 是否清晰记录了每个版本的重要变化？用户能否快速了解版本差异？",
            "你的 Issue/PR 模板是否引导贡献者提供足够的信息？",
            "你的提交信息是否有统一的格式？能否从提交历史快速了解变更类型？",
            "规范是否通过 CI 检查自动执行？"
        ],
        extensions: [
            "学习 Conventional Commits 规范：https://www.conventionalcommits.org/ —— 结构化的提交信息格式。",
            "了解 Semantic Versioning：https://semver.org/ —— 版本号的语义化规则。",
            "研究优秀开源项目的 CONTRIBUTING（如 React、Vue、Kubernetes），学习它们的组织方式。",
            "配置自动生成 Changelog 的工具（如 standard-version、semantic-release）。"
        ],
        sourceUrls: [
            "https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions",
            "https://keepachangelog.com/en/1.1.0/",
            "https://www.writethedocs.org/guide/index.html"
        ]
    }
}
