import type { LessonGuide } from "../types"

export const week7Guides: Record<string, LessonGuide> = {
    "tw-w7-1": {
        lessonId: "tw-w7-1",
        background: [
            "【信息架构定义】Nielsen Norman Group：信息架构是'组织、结构化和标注内容的实践'——设计产品结构的基础工作。",
            "【三大建模方式】信息架构包含三种关键模型：导航系统、分类体系和完整的 IA 结构，共同支撑产品的组织方式。",
            "【链接认知负担】Google：'每个链接都会给读者增加认知负担'——应优先在页面内提供上下文，而非依赖外部链接。",
            "【链接文本原则】Google：'不要使用此文档、此文章或点击此处等短语'——使用准确反映目标内容的简短短语，让链接独立有意义。",
            "【Write the Docs 理念】社区驱动的资源，作为'活的、有呼吸的指南'，强调信息架构需要持续改进和社区贡献。"
        ],
        keyDifficulties: [
            "【层级深度选择】网站可采用扁平或深层次的信息层级，各有优缺点。通常建议不超过 3 层，太深用户会迷失。",
            "【多层级设计】单个项目可在多个 IA 类别中出现，支持不同用户心智模型——同一内容可从多个入口访问。",
            "【信息嗅觉标签】使用具有强'信息嗅觉'的标签，避免模糊的行动动词，让用户能预测链接目标。",
            "【链接介绍语言】标准用法：'更多信息，见...'或'关于...的更多信息，见...'。避免用'on'替代'about'。"
        ],
        handsOnPath: [
            "绘制文档结构图：使用卡片分类法理解用户如何自然分类信息，创建符合用户心智模型的架构。",
            "进行树形测试：评估导航层级和类别标签的有效性，分析成功率、首次点击和直接性指标。",
            "优化链接文本：检查所有链接是否使用描述性短语，是否避免了'点击这里'、'此文档'等模糊用语。",
            "配置链接样式：对链接文本使用对比色和下划线，使用色盲友好的色彩变化区分已访问链接。",
            "检查链接行为：新标签页仅在必要时使用，并明确告知读者'在新标签页打开'。"
        ],
        selfCheck: [
            "【层级深度】页面层级是否不超过 3 层？是否有孤立页面？",
            "【标签设计】导航标签是否具有强'信息嗅觉'？用户能否预测链接目标？",
            "【链接文本】是否避免了'点击这里'、'此文档'等模糊链接文本？",
            "【链接介绍】是否使用了'更多信息，见...'的标准格式？",
            "【链接样式】链接是否有对比色和下划线？是否考虑了色盲友好性？",
            "【多入口访问】重要内容是否可从多个入口访问？"
        ],
        extensions: [
            "【Nielsen Norman Group 信息架构】深入学习：https://www.nngroup.com/topic/information-architecture/",
            "【卡片分类法】学习如何使用卡片分类验证导航结构是否符合用户心智模型。",
            "【树形测试】了解 Treejack 等工具进行树形测试，评估导航有效性。",
            "【Algolia DocSearch】探索如何提升文档可发现性。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/guide/index.html",
            "https://www.nngroup.com/topic/information-architecture/",
            "https://developers.google.com/style/cross-references"
        ]
    },
    "tw-w7-2": {
        lessonId: "tw-w7-2",
        background: [
            "【Changelog 核心原则】Keep a Changelog：'Changelogs are for humans, not machines'——变更日志是为人类编写的，不是 git log 的复制粘贴。",
            "【六类变更分类】标准分类：Added（新功能）、Changed（功能修改）、Deprecated（即将移除）、Removed（已移除）、Fixed（bug修复）、Security（安全补丁）。",
            "【语义化版本格式】SemVer：MAJOR.MINOR.PATCH。主版本=不兼容变更，次版本=向后兼容的新功能，补丁=向后兼容的 bug 修复。",
            "【Unreleased 部分】保持顶部的 Unreleased 部分追踪即将发布的变更——用户可预览未来版本，也简化版本发布准备工作。",
            "【日期格式】Keep a Changelog：使用 YYYY-MM-DD 格式（如 2017-07-17），遵循 ISO 8601 标准，从大到小排列单位。"
        ],
        keyDifficulties: [
            "【版本号决策】次版本递增时应重置补丁版本为 0；主版本递增时应重置次和补丁版本为 0。",
            "【预发布版本】通过连字符和标识符表示，如 1.0.0-alpha、1.0.0-alpha.1。预发布版本优先级低于正式版本。",
            "【变更筛选】不是所有 commit 都应进入 changelog——用户关心行为变化，不是内部重构或代码清理。",
            "【反模式避免】避免：使用 commit log diff、忽略 deprecations、使用模糊日期格式、维护不一致的变更文档。"
        ],
        handsOnPath: [
            "创建 CHANGELOG.md：使用 Keep a Changelog 格式，按六类分组，最新版本在最前面，每个版本有日期。",
            "添加 Unreleased 部分：在顶部维护未发布变更，每个 PR 合并时更新，发布时移至新版本。",
            "审查 Breaking Changes：列出所有不兼容变更，每个都说明：旧行为、新行为、迁移步骤。",
            "验证版本号：检查版本号是否遵循 SemVer——主次补丁版本递增规则是否正确。",
            "为变更添加链接：使版本号和章节可链接，便于用户直接跳转到特定版本。"
        ],
        selfCheck: [
            "【变更分类】是否使用了 Added/Changed/Deprecated/Removed/Fixed/Security 标准分类？",
            "【日期格式】每个版本是否有日期？是否使用 ISO 8601 格式（YYYY-MM-DD）？",
            "【版本顺序】是否最新版本在最前面？",
            "【Unreleased】是否维护了 Unreleased 部分？",
            "【Breaking Changes】不兼容变更是否有明确的迁移指南？",
            "【版本号规范】版本号是否遵循语义化版本规范？"
        ],
        extensions: [
            "【Keep a Changelog】完整规范：https://keepachangelog.com/ —— Changelog 的事实标准。",
            "【Semantic Versioning】深入理解：https://semver.org/ —— 版本号的权威规范。",
            "【自动生成工具】探索 Conventional Commits + standard-version 自动生成 Changelog。",
            "【优秀案例】研究 Tailwind CSS、Next.js、Stripe 的版本发布公告。"
        ],
        sourceUrls: [
            "https://keepachangelog.com/en/1.1.0/",
            "https://semver.org/",
            "https://developers.google.com/style/release-notes"
        ]
    },
    "tw-w7-3": {
        lessonId: "tw-w7-3",
        background: [
            "【数据驱动决策】文档指标的核心价值：把'感觉文档不好'变成可量化的数据，用数据驱动改进决策，而非依赖主观判断。",
            "【指标类型区分】Nielsen Norman Group 区分宏观转化（直接贡献业务目标的行为）与微观转化（发生在宏观转化之前的频繁行为），文档指标同样需要区分层次。",
            "【NPS 评分体系】Net Promoter Score 将用户分为三类：Promoters（9-10分，忠诚拥护者）、Passives（7-8分，满意但不热情）、Detractors（0-6分，可能传播负面评价）。",
            "【反馈闭环原则】收集反馈 → 分类优先级 → 改进文档 → 验证效果 → 再次收集。没有闭环的反馈收集是浪费用户时间——'close the feedback loop for every feedback'。",
            "【Time-to-Insight】衡量从提出问题到找到可行见解的时间。更快的 time-to-insight 意味着更快的决策，这是竞争优势。"
        ],
        keyDifficulties: [
            "【指标选择悖论】不是所有可测量的都值得测量。NN/g 指出 UX 团队常犯错误是'跟踪错误的指标或过多指标'——应将测量与组织目标对齐。",
            "【数据解读陷阱】停留时间长可能是用户认真阅读，也可能是用户困惑。需要结合多个指标和定性反馈理解，避免单一指标误导决策。",
            "【反馈疲劳管理】NPS 调查最佳实践：每 90-180 天进行一次关系调查，避免过于频繁导致用户疲劳。问卷保持 2-6 个问题，最佳是 3 个问题。",
            "【隐私合规边界】收集用户行为数据需要考虑 GDPR 等隐私法规。MIT Sloan 指出 AI 增强的 KPI 需要更谨慎地处理数据伦理问题。"
        ],
        handsOnPath: [
            "配置分析工具：部署 Google Analytics 或 Plausible，追踪页面浏览量、跳出率、搜索查询、用户路径。",
            "实现低摩擦反馈：在每页底部添加'这篇文章有帮助吗？'评分组件，研究表明 3 个问题的问卷可获得 40%-60% 响应率。",
            "识别问题页面：分析跳出率最高的页面，结合搜索失败率识别内容缺口，优先改进高流量低满意度页面。",
            "建立反馈处理 SOP：定期（如每周）审查反馈，使用分类体系（准确性/完整性/可用性/结构）确定优先级。",
            "追踪改进效果：改进后持续监控相关指标，验证假设是否正确，形成数据驱动的持续改进循环。"
        ],
        selfCheck: [
            "【搜索分析】你是否知道用户最常搜索什么？搜索失败率（零结果查询）是多少？",
            "【跳出率诊断】你是否知道跳出率最高的页面？是否结合其他指标分析了原因？",
            "【反馈入口】你的文档是否有低摩擦的反馈入口？是否收集了定性评论？",
            "【闭环验证】收集到的反馈是否进入了可追踪的改进流程？改进后是否验证了效果？",
            "【指标对齐】你追踪的指标是否与用户成功和业务目标对齐？是否避免了虚荣指标？",
            "【NPS 基准】如果使用 NPS，你的分数与行业基准（技术领域约 +64）相比如何？"
        ],
        extensions: [
            "【NN/g UX 指标】深入学习：https://www.nngroup.com/topic/analytics-and-metrics/ —— UX 测量的权威资源。",
            "【HEART 框架】Google 的 HEART 模型：Happiness、Engagement、Adoption、Retention、Task Success。",
            "【行为分析工具】探索 Hotjar、FullStory 等工具的热力图和会话回放功能，理解用户实际行为。",
            "【AI 增强 KPI】MIT Sloan 2024 报告：描述性、预测性、规范性 KPI 的演进，AI 如何增强传统指标。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/guide/docs-as-code/",
            "https://www.nngroup.com/topic/analytics-and-metrics/",
            "https://developers.google.com/style"
        ]
    },
    "tw-w7-4": {
        lessonId: "tw-w7-4",
        background: [
            "【DocsOps 理念】将 DevOps 实践应用于文档：自动化构建、测试、部署，减少手动操作和沟通成本。文档与代码享有同等的 CI/CD 待遇。",
            "【GitHub Actions 核心】'A workflow is a configurable automated process made up of one or more jobs'——工作流由 Triggers、Jobs、Steps、Actions、Runners 组成。",
            "【Preview Deployments】Vercel/Netlify 的核心价值：每个 PR 自动生成预览 URL，审查者无需本地构建即可看到实际渲染效果，'Share in-progress content before production launch'。",
            "【Instant Rollback】Vercel：支持即时回滚到之前的部署，'swift recovery from production incidents'——让团队敢于频繁发布，出问题时能立即恢复。",
            "【Git 集成自动化】Vercel/Netlify 支持 GitHub、GitLab、Bitbucket 等平台的原生集成，push 到 main 分支自动触发生产部署，PR 自动创建预览环境。"
        ],
        keyDifficulties: [
            "【YAML 工作流配置】GitHub Actions 使用 YAML 定义工作流，需要理解触发条件（on: push/pull_request）、jobs、steps、环境变量、secrets 管理等概念。",
            "【预览环境权限控制】公开仓库的 PR 预览谁都能访问。Vercel 提供 Deployment Protection：密码保护、可信 IP、身份验证等方式保护敏感预览内容。",
            "【多环境配置管理】开发、预览、生产环境的配置差异（API endpoint、分析 ID、功能开关）如何管理？Vercel 支持 environment-specific 的环境变量。",
            "【构建失败处理策略】链接检查、Markdown 校验、拼写检查失败时如何处理？是阻止合并（blocking）还是仅发出警告（non-blocking）？需要根据规则重要性决定。"
        ],
        handsOnPath: [
            "配置 GitHub Actions：创建 .github/workflows/docs.yml，定义 push/PR 触发的自动化构建和检查流程。",
            "连接托管平台：在 Vercel/Netlify 中导入 Git 仓库，配置自动部署触发条件和环境变量。",
            "验证预览部署：提交 PR 后确认预览 URL 自动生成并显示在 PR 评论中，测试预览环境的渲染效果。",
            "添加质量门禁：在工作流中集成 markdownlint、链接检查、拼写检查，配置 branch protection 要求检查通过才能合并。",
            "配置回滚策略：了解 Instant Rollback 功能，测试从生产问题快速恢复到上一个稳定版本。",
            "设置自定义域名：配置 HTTPS、DNS 指向托管平台，验证 SSL 证书自动配置。"
        ],
        selfCheck: [
            "【CI 配置】你的文档是否有 GitHub Actions 工作流？每次 push 是否验证构建成功？",
            "【预览部署】PR 是否有自动预览部署？审查者能否看到实际渲染效果而非 Markdown 源码？",
            "【质量门禁】构建前是否运行了 lint、链接检查？失败是否阻止 PR 合并？",
            "【生产部署】合并到 main 后是否自动部署到生产？文档与代码更新是否同步？",
            "【回滚能力】如果新部署有问题，能否快速回滚到之前的版本？",
            "【域名 HTTPS】是否配置了自定义域名？HTTPS 是否自动配置和续期？"
        ],
        extensions: [
            "【GitHub Actions 文档】深入学习：https://docs.github.com/en/actions —— 工作流语法、secrets 管理、矩阵构建。",
            "【Vercel Preview Deployments】详细配置：https://vercel.com/docs/deployments/preview-deployments —— 预览保护、评论集成。",
            "【Netlify Build Hooks】探索：https://docs.netlify.com/configure-builds/build-hooks/ —— 程序化触发部署的 webhook。",
            "【Rolling Releases】Vercel 的渐进式发布：逐步将流量切换到新版本，降低全量发布风险。"
        ],
        sourceUrls: [
            "https://docs.github.com/en/actions",
            "https://docs.netlify.com/",
            "https://vercel.com/docs"
        ]
    }
}
