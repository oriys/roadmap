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
            "文档指标的核心价值：把'感觉文档不好'变成可量化的数据，用数据驱动改进决策，而非依赖主观判断。",
            "常见的文档指标：搜索失败率（用户搜索后没找到结果）、页面跳出率（用户进入后立即离开）、页面停留时间、用户反馈评分。",
            "反馈收集渠道：页面底部的'这篇文章有帮助吗？'评分、Issue 模板、社区讨论、支持工单分析。",
            "反馈闭环：收集反馈 → 分类优先级 → 改进文档 → 验证效果 → 收集反馈。没有闭环的反馈收集是浪费用户时间。"
        ],
        keyDifficulties: [
            "选择正确的指标：不是所有可测量的都值得测量。关键是识别与用户成功相关的指标，而非虚荣指标（如页面浏览量）。",
            "避免数据误读：停留时间长可能是用户认真阅读，也可能是用户困惑。需要结合多个指标和定性反馈理解。",
            "反馈的分类和优先级：用户反馈可能涉及准确性、完整性、可用性、组织结构等。需要建立分类体系确定改进优先级。",
            "隐私和合规：收集用户行为数据需要考虑隐私法规（GDPR 等）和用户同意。"
        ],
        handsOnPath: [
            "为你的文档站点添加基础分析：Google Analytics 或 Plausible，追踪页面浏览量、跳出率、搜索查询。",
            "添加反馈组件：在每页底部添加'这篇文章有帮助吗？'的 👍/👎 按钮，可选地收集评论。",
            "分析现有数据：识别跳出率最高的 3 个页面，分析可能的原因（内容过时？结构混乱？标题误导？）并改进。",
            "建立反馈处理流程：定期（如每周）审查反馈，分类优先级，分配给相应负责人。"
        ],
        selfCheck: [
            "你是否知道用户最常搜索什么？搜索失败率是多少？",
            "你是否知道跳出率最高的页面是哪些？是否分析了原因？",
            "你的文档是否有反馈入口？用户能否报告问题或建议改进？",
            "收集到的反馈是否有处理流程？是否形成了闭环？",
            "你是否定期审查文档指标？是否用数据驱动改进决策？"
        ],
        extensions: [
            "学习 Write the Docs 的分析指南：https://www.writethedocs.org/guide/docs-as-code/",
            "研究 Nielsen Norman Group 的 UX 指标：https://www.nngroup.com/topic/analytics-and-metrics/",
            "探索 Hotjar 或 FullStory 等工具理解用户行为（热力图、会话回放）。",
            "建立文档健康仪表盘：可视化关键指标，定期审查趋势。"
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
            "DocsOps 是将 DevOps 实践应用于文档的理念：自动化构建、测试、部署，减少手动操作和沟通成本。",
            "预览部署（Preview Deployments）：每个 PR 自动生成一个预览链接，审查者可以看到实际效果，而非想象 Markdown 渲染后的样子。",
            "持续部署（Continuous Deployment）：合并到主分支后自动发布到生产环境，确保文档与代码同步更新。",
            "常用平台：GitHub Pages（免费、简单）、Netlify（预览部署、表单）、Vercel（高性能、分析）、Cloudflare Pages（全球 CDN）。"
        ],
        keyDifficulties: [
            "CI/CD 配置：GitHub Actions、GitLab CI 的 YAML 语法学习曲线。需要理解触发条件、构建步骤、部署目标。",
            "预览部署的权限控制：公开仓库的 PR 预览谁都能访问。敏感内容需要考虑访问控制或延迟发布。",
            "构建失败的处理：链接检查、Markdown 校验失败时如何处理？是阻止合并还是仅发出警告？",
            "多环境管理：开发、预览、生产环境的配置差异（API endpoint、分析 ID 等）如何管理？"
        ],
        handsOnPath: [
            "配置 GitHub Actions 自动构建：每次 push 运行 build，验证文档能成功生成。",
            "配置预览部署：使用 Netlify 或 Vercel，每个 PR 自动生成预览链接，链接显示在 PR 评论中。",
            "添加构建前检查：在部署前运行 markdownlint、链接检查、拼写检查，失败时阻止部署。",
            "配置自动发布：合并到 main 分支后自动部署到生产环境，配置自定义域名和 HTTPS。"
        ],
        selfCheck: [
            "你的文档是否有自动构建？每次 push 是否验证构建成功？",
            "PR 是否有预览部署？审查者能否看到实际渲染效果？",
            "构建前是否运行了质量检查（lint、链接检查）？失败是否阻止合并？",
            "合并后是否自动部署到生产？文档与代码是否同步更新？",
            "你是否配置了自定义域名和 HTTPS？"
        ],
        extensions: [
            "学习 GitHub Actions 文档：https://docs.github.com/en/actions",
            "探索 Netlify 的文档部署功能：https://docs.netlify.com/",
            "研究 Vercel 的 Preview Deployments：https://vercel.com/docs/deployments/preview-deployments",
            "配置 Slack/Discord 通知：部署成功或失败时通知团队。"
        ],
        sourceUrls: [
            "https://docs.github.com/en/actions",
            "https://docs.netlify.com/",
            "https://vercel.com/docs"
        ]
    }
}
