import type { QuizQuestion } from "../types";

export const week7: Record<string, QuizQuestion[]> = {
  // Lesson 1: 信息架构与导航优化 (12题，答案随机分布)
  "tw-w7-1": [
    {
      id: "tw-w7-1-q1",
      question: "Nielsen Norman Group 对信息架构的定义是什么？",
      options: [
        "服务器的技术架构设计",
        "组织、结构化和标注内容的实践",
        "数据库的表设计",
        "代码的模块划分",
      ],
      answer: 1,
      rationale:
        "Nielsen Norman Group 定义信息架构是'组织、结构化和标注内容的实践'——设计产品结构的基础工作。",
    },
    {
      id: "tw-w7-1-q2",
      question: "信息架构包含哪三种关键建模方式？",
      options: [
        "前端、后端、数据库",
        "HTML、CSS、JavaScript",
        "导航系统、分类体系和完整的 IA 结构",
        "标题、段落、链接",
      ],
      answer: 2,
      rationale:
        "信息架构包含三种关键模型：导航系统、分类体系和完整的 IA 结构，共同支撑产品的组织方式。",
    },
    {
      id: "tw-w7-1-q3",
      question: "Google 关于链接对读者影响的核心观点是什么？",
      options: [
        "链接越多越好",
        "每个链接都会给读者增加认知负担",
        "链接不影响阅读体验",
        "只有外部链接有影响",
      ],
      answer: 1,
      rationale:
        "Google：'每个链接都会给读者增加认知负担'——应优先在页面内提供上下文，而非依赖外部链接。",
    },
    {
      id: "tw-w7-1-q4",
      question: "Google 建议避免使用什么样的链接文本？",
      options: [
        "页面标题",
        "描述性短语",
        "'此文档'、'此文章'或'点击此处'等模糊短语",
        "目标页面的摘要",
      ],
      answer: 2,
      rationale:
        "Google：'不要使用此文档、此文章或点击此处等短语'——使用准确反映目标内容的简短短语。",
    },
    {
      id: "tw-w7-1-q5",
      question: "网站信息层级通常建议不超过多少层？",
      options: [
        "2 层",
        "3 层",
        "5 层",
        "没有限制",
      ],
      answer: 1,
      rationale:
        "通常建议不超过 3 层——太深用户会迷失，太浅会导致类别过于宽泛。",
    },
    {
      id: "tw-w7-1-q6",
      question: "什么是'信息嗅觉'强的标签？",
      options: [
        "使用技术术语的标签",
        "让用户能预测链接目标的清晰标签",
        "最短的标签",
        "使用动词的标签",
      ],
      answer: 1,
      rationale:
        "使用具有强'信息嗅觉'的标签，避免模糊的行动动词，让用户能预测链接目标。",
    },
    {
      id: "tw-w7-1-q7",
      question: "卡片分类法（Card Sorting）的主要目的是什么？",
      options: [
        "理解用户如何自然分类信息，创建符合用户心智模型的架构",
        "对卡片进行物理排序",
        "测试页面加载速度",
        "检查链接有效性",
      ],
      answer: 0,
      rationale:
        "卡片分类法帮助理解用户如何自然分类信息，创建符合用户心智模型的架构。",
    },
    {
      id: "tw-w7-1-q8",
      question: "树形测试（Tree Testing）评估什么？",
      options: [
        "页面加载性能",
        "代码质量",
        "导航层级和类别标签的有效性",
        "内容的SEO效果",
      ],
      answer: 2,
      rationale:
        "树形测试评估导航层级和类别标签的有效性，分析成功率、首次点击和直接性指标。",
    },
    {
      id: "tw-w7-1-q9",
      question: "Google 建议的链接介绍标准用法是什么？",
      options: [
        "'点击这里了解更多'",
        "'更多信息，见...'或'关于...的更多信息，见...'",
        "'请参阅以下链接'",
        "'详情请看'",
      ],
      answer: 1,
      rationale:
        "标准用法：'更多信息，见...'或'关于...的更多信息，见...'。避免用'on'替代'about'。",
    },
    {
      id: "tw-w7-1-q10",
      question: "链接应该在什么情况下在新标签页打开？",
      options: [
        "所有外部链接都应该",
        "所有链接都应该",
        "仅在必要时，并明确告知读者",
        "永远不应该",
      ],
      answer: 2,
      rationale:
        "Google：新标签页仅在必要时使用，并明确告知读者'在新标签页打开'。",
    },
    {
      id: "tw-w7-1-q11",
      question: "链接样式应该如何设计以确保可访问性？",
      options: [
        "只使用颜色区分",
        "使用对比色和下划线，考虑色盲友好性",
        "使用粗体文字",
        "使用斜体文字",
      ],
      answer: 1,
      rationale:
        "对链接文本使用对比色和下划线，使用色盲友好的色彩变化区分已访问链接。",
    },
    {
      id: "tw-w7-1-q12",
      question: "为什么单个内容项应该可以从多个入口访问？",
      options: [
        "增加页面数量",
        "提高 SEO 排名",
        "支持不同用户的心智模型",
        "减少服务器负载",
      ],
      answer: 2,
      rationale:
        "单个项目可在多个 IA 类别中出现，支持不同用户心智模型——同一内容可从多个入口访问。",
    },
  ],
  // Lesson 2: 发布说明与变更日志 (12题，答案随机分布)
  "tw-w7-2": [
    {
      id: "tw-w7-2-q1",
      question: "Keep a Changelog 的核心理念是什么？",
      options: [
        "Changelogs 应该由机器自动生成",
        "Changelogs 就是 git log 的复制",
        "Changelogs are for humans, not machines——为人类编写",
        "Changelogs 越详细越好",
      ],
      answer: 2,
      rationale:
        "Keep a Changelog：'Changelogs are for humans, not machines'——变更日志是为人类编写的，需要精选和筛选。",
    },
    {
      id: "tw-w7-2-q2",
      question: "Keep a Changelog 定义的六类变更不包括以下哪项？",
      options: [
        "Added（新功能）",
        "Changed（功能修改）",
        "Refactored（重构）",
        "Security（安全补丁）",
      ],
      answer: 2,
      rationale:
        "标准六类：Added、Changed、Deprecated、Removed、Fixed、Security。Refactored 不是标准分类。",
    },
    {
      id: "tw-w7-2-q3",
      question: "语义化版本 MAJOR.MINOR.PATCH 中，MAJOR 版本何时递增？",
      options: [
        "添加新功能时",
        "修复 bug 时",
        "引入不兼容的 API 变更时",
        "更新文档时",
      ],
      answer: 2,
      rationale:
        "SemVer：主版本（MAJOR）在引入不兼容的 API 变更时递增。",
    },
    {
      id: "tw-w7-2-q4",
      question: "根据语义化版本，MINOR 版本递增时应该怎样处理 PATCH 版本？",
      options: [
        "保持不变",
        "重置为 0",
        "递增 1",
        "删除",
      ],
      answer: 1,
      rationale:
        "SemVer：次版本递增时应重置补丁版本为 0；主版本递增时应重置次和补丁版本为 0。",
    },
    {
      id: "tw-w7-2-q5",
      question: "预发布版本（如 1.0.0-alpha）的格式特点是什么？",
      options: [
        "使用加号连接",
        "通过连字符和标识符表示，优先级低于正式版本",
        "使用下划线连接",
        "优先级高于正式版本",
      ],
      answer: 1,
      rationale:
        "预发布版本通过连字符和标识符表示，如 1.0.0-alpha。预发布版本优先级低于正式版本。",
    },
    {
      id: "tw-w7-2-q6",
      question: "Changelog 应该使用什么日期格式？",
      options: [
        "MM/DD/YYYY",
        "DD/MM/YYYY",
        "YYYY-MM-DD（ISO 8601）",
        "自然语言日期",
      ],
      answer: 2,
      rationale:
        "Keep a Changelog：使用 YYYY-MM-DD 格式，遵循 ISO 8601 标准，从大到小排列单位。",
    },
    {
      id: "tw-w7-2-q7",
      question: "Changelog 中版本的排列顺序应该是什么？",
      options: [
        "最旧版本在最前面",
        "按字母顺序",
        "最新版本在最前面",
        "按版本号大小",
      ],
      answer: 2,
      rationale:
        "Keep a Changelog：最新版本应置于首位，用户通常只关心最近的变更。",
    },
    {
      id: "tw-w7-2-q8",
      question: "Unreleased 部分的作用是什么？",
      options: [
        "用于存储已删除的功能",
        "追踪即将发布的变更，用户可预览未来版本",
        "记录历史版本",
        "存储内部备注",
      ],
      answer: 1,
      rationale:
        "保持顶部的 Unreleased 部分追踪即将发布的变更——用户可预览未来版本，也简化版本发布准备工作。",
    },
    {
      id: "tw-w7-2-q9",
      question: "Keep a Changelog 列出的反模式不包括以下哪项？",
      options: [
        "使用 commit log diff",
        "忽略 deprecations",
        "使用描述性变更说明",
        "使用模糊日期格式",
      ],
      answer: 2,
      rationale:
        "反模式包括：使用 commit log diff、忽略 deprecations、使用模糊日期格式、维护不一致的变更文档。描述性说明是最佳实践。",
    },
    {
      id: "tw-w7-2-q10",
      question: "根据语义化版本，PATCH 版本何时递增？",
      options: [
        "进行向后兼容的 bug 修复时",
        "添加新功能时",
        "引入破坏性变更时",
        "更新依赖时",
      ],
      answer: 0,
      rationale:
        "SemVer：补丁版本（PATCH）仅当引入向后兼容的 bug 修复时递增。",
    },
    {
      id: "tw-w7-2-q11",
      question: "Changelog 文件的推荐命名是什么？",
      options: [
        "VERSION.md",
        "CHANGELOG.md",
        "HISTORY.txt",
        "UPDATES.md",
      ],
      answer: 1,
      rationale:
        "Keep a Changelog：使用 CHANGELOG.md 作为文件名以便发现，虽然 HISTORY 或 NEWS 也存在。",
    },
    {
      id: "tw-w7-2-q12",
      question: "Deprecated 分类的作用是什么？",
      options: [
        "标记已删除的功能",
        "标记即将移除的功能，给用户迁移时间",
        "标记新增的功能",
        "标记有 bug 的功能",
      ],
      answer: 1,
      rationale:
        "Deprecated 标记即将移除的功能，给用户迁移时间，在实际移除前提前警告。",
    },
  ],
  // Lesson 3: 反馈与数据：文档指标 (12题，答案随机分布)
  "tw-w7-3": [
    {
      id: "tw-w7-3-q1",
      question: "Nielsen Norman Group 关于 UX 团队指标选择的警告是什么？",
      options: [
        "指标越多越好，覆盖面广",
        "只需要跟踪页面浏览量即可",
        "常常跟踪错误的指标或过多指标，应将测量与组织目标对齐",
        "不需要任何指标，依赖直觉即可",
      ],
      answer: 2,
      rationale:
        "NN/g 指出 UX 团队常犯的错误是'跟踪错误的指标或过多指标'——应将测量与组织目标结合以展示真实影响。",
    },
    {
      id: "tw-w7-3-q2",
      question: "Net Promoter Score (NPS) 将用户分为哪三类？",
      options: [
        "新用户、活跃用户、流失用户",
        "Promoters（9-10分）、Passives（7-8分）、Detractors（0-6分）",
        "初级、中级、高级用户",
        "免费用户、付费用户、企业用户",
      ],
      answer: 1,
      rationale:
        "NPS 将用户分为三类：Promoters（9-10分，忠诚拥护者）、Passives（7-8分，满意但不热情）、Detractors（0-6分，可能传播负面评价）。",
    },
    {
      id: "tw-w7-3-q3",
      question: "NPS 调查问卷的最佳问题数量是多少？",
      options: [
        "10-15 个问题以收集全面数据",
        "1 个问题足够",
        "2-6 个问题，最佳是 3 个问题，可获得 40%-60% 响应率",
        "越多越好，没有上限",
      ],
      answer: 2,
      rationale:
        "研究表明 2-6 个问题是最佳范围，最好是 3 个问题。过多问题会导致响应率下降和用户疲劳。",
    },
    {
      id: "tw-w7-3-q4",
      question: "宏观转化（Macro Conversion）与微观转化（Micro Conversion）的区别是什么？",
      options: [
        "宏观转化是直接贡献业务主要目标的行为，微观转化是发生在宏观转化之前的更频繁行为",
        "宏观转化发生在网站上，微观转化发生在移动端",
        "宏观转化是付费行为，微观转化是免费行为",
        "两者没有区别，可以互换使用",
      ],
      answer: 0,
      rationale:
        "NN/g 定义：宏观转化是直接为业务主要目标做出贡献的用户行为，微观转化是发生在宏观转化之前且更频繁的用户行为。",
    },
    {
      id: "tw-w7-3-q5",
      question: "页面停留时间（Time on Page）指标应该如何解读？",
      options: [
        "停留时间越长越好",
        "停留时间越短越好",
        "需要结合内容类型分析，参考页面应快速查到，教程需要时间学习",
        "停留时间没有参考价值",
      ],
      answer: 2,
      rationale:
        "停留时间长短的好坏取决于内容类型。参考手册应让用户快速查到信息（短停留），教程需要时间学习（长停留）。",
    },
    {
      id: "tw-w7-3-q6",
      question: "技术领域一个'优秀'的 NPS 分数大约是多少？",
      options: [
        "0 以上就算好",
        "20-30 分",
        "40-50 分是平均水平",
        "约 +64 分被认为是技术领域的优秀分数",
      ],
      answer: 3,
      rationale:
        "研究表明 B2B SaaS 公司的平均 NPS 在 40-50 分范围。技术领域约 +64 分被认为是优秀的 NPS 分数。",
    },
    {
      id: "tw-w7-3-q7",
      question: "NPS 关系调查（Relationship Survey）的推荐频率是什么？",
      options: [
        "每天发送",
        "每周发送",
        "每 90-180 天发送一次，避免用户疲劳",
        "只在用户投诉时发送",
      ],
      answer: 2,
      rationale:
        "最佳实践是每 90-180 天进行一次关系调查，给予足够的反馈间隔而不导致用户疲劳。事务性调查可在关键接触点后立即发送。",
    },
    {
      id: "tw-w7-3-q8",
      question: "搜索分析能揭示什么文档问题？",
      options: [
        "用户在寻找什么内容，哪些搜索没有返回结果（内容缺口）",
        "用户的地理位置和设备类型",
        "用户的年龄和性别",
        "服务器的性能问题",
      ],
      answer: 0,
      rationale:
        "搜索分析揭示用户需求，失败的搜索查询（零结果查询）指出内容缺口，高频搜索指出重要内容的优先级。",
    },
    {
      id: "tw-w7-3-q9",
      question: "'Time-to-Insight' 指标衡量什么？",
      options: [
        "页面加载时间",
        "用户注册到首次购买的时间",
        "从提出问题到找到可行见解的时间",
        "文档更新的周期",
      ],
      answer: 2,
      rationale:
        "Time-to-insight 衡量从提出问题到找到可行见解的时间。更快的 time-to-insight 意味着更快的决策能力。",
    },
    {
      id: "tw-w7-3-q10",
      question: "反馈闭环（Closing the Feedback Loop）为什么重要？",
      options: [
        "只是形式上的要求",
        "当用户看到你尝试改进服务时，可以将 Detractors 转化为 Promoters",
        "可以减少服务器负载",
        "只对大公司有意义",
      ],
      answer: 1,
      rationale:
        "NPS 最佳实践强调：'close the feedback loop for every feedback'。当用户看到你尝试改进时，可以挽回不满用户甚至将 Detractors 转化为 Promoters。",
    },
    {
      id: "tw-w7-3-q11",
      question: "MIT Sloan 2024 报告指出传统 KPI 存在什么问题？",
      options: [
        "传统 KPI 完全过时，应该废弃",
        "传统 KPI 太简单，需要更复杂的指标",
        "传统 KPI 越来越难以提供领导者所需的信息和洞察，AI 增强的 KPI 可以改进",
        "传统 KPI 只适用于制造业",
      ],
      answer: 2,
      rationale:
        "MIT Sloan 报告指出传统 KPI 在追踪进度、对齐人员和流程、优先资源分配方面越来越不足。AI 增强的 KPI 提供描述性、预测性和规范性三种改进方式。",
    },
    {
      id: "tw-w7-3-q12",
      question: "高跳出率通常意味着什么文档问题？",
      options: [
        "用户快速找到了答案并离开",
        "可能意味着内容不匹配用户预期、导航不清或内容质量问题",
        "服务器响应太慢",
        "跳出率高总是好事",
      ],
      answer: 1,
      rationale:
        "高跳出率可能表示内容不匹配用户预期、导航不清或内容质量问题。但需要结合其他指标具体分析——有时快速找到答案也会导致高跳出率。",
    },
  ],
  // Lesson 4: DocsOps：预览与自动发布 (7题)
  "tw-w7-4": [
    {
      id: "tw-w7-4-q1",
      question: "PR 预览环境的主要价值是什么？",
      options: [
        "让审阅者在合并前预览实际渲染效果，减少来回沟通",
        "自动修复格式问题",
        "替代本地开发环境",
        "加速构建速度",
      ],
      answer: 0,
      rationale:
        "预览环境让审阅者所见即所得，不需要本地构建就能看到变更效果，提高审阅效率。",
    },
    {
      id: "tw-w7-4-q2",
      question: "持续部署（CD）对文档站点的好处是什么？",
      options: [
        "合并后自动发布，确保用户始终看到最新内容",
        "减少存储成本",
        "提高安全性",
        "只对代码有用",
      ],
      answer: 0,
      rationale:
        "自动部署消除手动发布步骤，确保文档更新及时发布，减少人为错误。",
    },
    {
      id: "tw-w7-4-q3",
      question: "GitHub Actions 在文档工作流中的典型用途是什么？",
      options: [
        "运行自动化检查、构建预览、部署到托管平台",
        "编写文档内容",
        "翻译文档",
        "审核文档",
      ],
      answer: 0,
      rationale:
        "GitHub Actions 可在 PR 时运行 lint 检查和构建预览，合并后自动部署到托管平台。",
    },
    {
      id: "tw-w7-4-q4",
      question: "为什么要将文档托管在独立域名而非主产品域名下？",
      options: [
        "便于单独缓存和 CDN 优化，也便于在不影响产品的情况下更新",
        "让文档看起来更独立",
        "节省域名费用",
        "没有区别",
      ],
      answer: 0,
      rationale:
        "独立域名允许对文档单独优化缓存、部署和版本控制，不受产品发布周期限制。",
    },
    {
      id: "tw-w7-4-q5",
      question: "文档版本化（Versioning）的主要目的是什么？",
      options: [
        "让使用旧版本产品的用户能访问对应版本的文档",
        "让文档看起来更专业",
        "增加页面数量",
        "满足合规要求",
      ],
      answer: 0,
      rationale:
        "产品通常有多个版本在使用，文档版本化确保每个版本的用户都能找到准确的信息。",
    },
    {
      id: "tw-w7-4-q6",
      question: "Netlify、Vercel 等托管平台的优势是什么？",
      options: [
        "自动构建部署、PR 预览、全球 CDN、开箱即用的 HTTPS",
        "只是免费托管",
        "只支持静态文件",
        "需要管理服务器",
      ],
      answer: 0,
      rationale:
        "这些平台提供 Git 集成、自动构建、PR 预览、全球 CDN 等功能，简化文档运维。",
    },
    {
      id: "tw-w7-4-q7",
      question: "回滚（Rollback）能力为什么重要？",
      options: [
        "如果新部署有问题，能快速恢复到上一个正常版本",
        "可以删除不需要的内容",
        "节省存储空间",
        "只对代码仓库重要",
      ],
      answer: 0,
      rationale:
        "快速回滚能力让团队敢于频繁发布，出问题时能立即恢复，降低发布风险。",
    },
  ],
};
