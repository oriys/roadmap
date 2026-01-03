import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week12Guides: Record<string, LessonGuide> = {
  "pm-w12-1": {
    lessonId: "pm-w12-1",
    background: [
      "【职业阶梯】产品经理的典型职业发展路径为：APM（Associate PM）→ PM → Senior PM → Lead/Staff PM → Director of PM → VP of Product → CPO。Levels.fyi 数据显示美国 PM 的中位数总薪酬为 $220,000，从第 10 百分位的 $131K 到第 90 百分位的 $431K 不等。",
      "【两条发展线】PM 职业发展有两条主线：管理线（Management Track）侧重团队领导、战略规划和组织建设；个人贡献者线（IC Track）侧重深度专业能力、技术产品或特定领域专精。",
      "【薪酬结构】Levels.fyi 显示 PM 薪酬由三部分组成：基本工资（中位数 $182K）、股权激励（中位数 $10K，90 百分位可达 $150K）、绩效奖金（中位数 $13.6K）。高级别 PM 的股权占比显著提升。",
      "【行业与公司差异】不同公司对 PM 的定位和职级体系差异很大。大厂（如 Google、Meta）有完善的职级体系和明确的晋升标准；创业公司的 PM 往往需要身兼多职，但成长空间和影响力更大。",
      "【技能迁移】PM 的核心技能（用户洞察、数据分析、跨团队协作、战略思维）具有良好的可迁移性。许多 PM 成功转型为创始人、投资人、咨询顾问或产品领域的内容创作者。",
    ],
    keyDifficulties: [
      "【晋升瓶颈】从 Senior PM 到 Lead/Director 是常见的晋升瓶颈。这个阶段需要从「做好产品」转变为「培养团队」和「制定战略」，很多人在这个转变中遇到困难。",
      "【管理 vs IC 选择】选择管理线还是 IC 线是重要的职业决策。管理线需要放弃部分动手做产品的乐趣；IC 线在某些公司可能面临天花板或边缘化的风险。",
      "【行业切换成本】跨行业跳槽时，领域知识的积累可能无法完全迁移。例如从 B2C 转 B2B，或从消费互联网转金融科技，需要重新建立行业认知。",
      "【远程/混合工作影响】疫情后的工作模式变化影响了 PM 的职业发展。远程工作可能减少非正式沟通和曝光度，影响晋升机会；但也打开了全球化就业的可能性。",
    ],
    handsOnPath: [
      "1. 在 Levels.fyi 上研究你目标公司的 PM 职级体系和薪酬范围",
      "2. 绘制你的 5 年职业发展路线图，明确每个阶段的目标和所需能力",
      "3. 识别你当前职级与下一职级的能力差距，制定提升计划",
      "4. 与已经达到你目标职级的 PM 进行 1:1 交流，了解他们的成长路径",
      "5. 评估你更适合管理线还是 IC 线，考虑个人兴趣、优势和市场机会",
      "6. 建立个人品牌：写博客、做分享、参与社区，增加职业可见度",
    ],
    selfCheck: [
      "你能说出 PM 的典型职业阶梯吗？你目前处于哪个阶段？",
      "你的下一个职业目标是什么？需要多长时间达到？",
      "管理线和 IC 线，你更倾向于哪条路径？为什么？",
      "你的核心竞争力是什么？这个优势在市场上的稀缺程度如何？",
      "如果要换行业，你的哪些技能可以迁移，哪些需要重新学习？",
      "你有在建立个人品牌吗？你在 PM 社区的影响力如何？",
    ],
    extensions: [
      "研究不同公司（Google、Meta、Amazon、字节跳动）的 PM 职级对照",
      "了解 PM 转型创始人的常见路径和挑战",
      "探索 PM 教练、顾问、内容创作等替代职业路径",
      "学习如何谈判薪酬和股权",
    ],
    sourceUrls: [
      "https://www.coursera.org/resources/job-leveling-matrix-for-product-management-career-pathways",
      "https://www.levels.fyi/t/product-manager",
      "https://www.theproductfolks.com/product-management-blog/skills-required-for-a-product-manager-unveiling-core-competencies",
    ],
  },
  "pm-w12-2": {
    lessonId: "pm-w12-2",
    background: [
      "【八大题型】IGotAnOffer 总结 PM 面试的八大题型：行为领导力题（Behavioral）、产品设计题（Product Sense）、数据分析题（Metrics）、策略题（Strategy）、估算题（Estimation）、优先级排序题（Prioritization）、技术题（Technical）、通用匹配题（Fit）。",
      "【STAR 方法】行为面试的标准回答框架是 STAR：Situation（情境）、Task（任务）、Action（行动）、Result（结果）。IGotAnOffer 建议每个回答控制在 5 分钟以内，结构清晰。",
      "【产品设计流程】产品设计题需要展示从用户理解到解决方案的完整思考过程。候选人应该准备在面试中「画出粗略的设计草图和线框图」，展示具体化的思考能力。",
      "【数据分析重点】数据分析题关注的指标维度包括：激活（Activation）、采用（Adoption）、参与（Engagement）、留存（Retention）、质量（Quality）。面试官评估的是「你的思考过程和解释能力」而非标准答案。",
      "【技术理解要求】PM 不需要会写代码，但需要「理解大的技术模块如何协同工作」。这帮助 PM 与工程师有效沟通，做出可行的产品决策。",
    ],
    keyDifficulties: [
      "【产品设计题的深度】很多候选人在产品设计题中停留在表面，列出功能但缺乏用户洞察和优先级思考。好的回答应该展示「为什么」而非仅仅「是什么」。",
      "【数据题的结构化】数据分析题需要结构化思考：先明确指标定义，再拆解影响因素，最后提出假设和验证方法。很多人直接跳到答案而忽略了思考过程。",
      "【行为题的具体性】行为题需要真实、具体的例子，而非泛泛而谈。用数据量化结果（「用户增长 30%」而非「用户增长很多」）更有说服力。",
      "【模拟面试的价值】IGotAnOffer 指出专业教练的反馈质量「远高于」同伴练习。模拟面试帮助识别盲点和改进表达方式。",
    ],
    handsOnPath: [
      "1. 梳理 3-5 个你最有代表性的项目经历，用 STAR 框架准备好",
      "2. 练习产品设计题：选择一个熟悉的产品，练习从 0 到 1 设计一个新功能",
      "3. 练习数据分析题：选择一个场景（如某指标下降 20%），结构化分析原因",
      "4. 研究目标公司的产品和使命，准备「为什么选择这家公司」的答案",
      "5. 进行至少 3 次模拟面试，获取反馈并迭代改进",
      "6. 阅读《Cracking the PM Interview》和《Swipe to Unlock》补充知识",
    ],
    selfCheck: [
      "你能说出 PM 面试的主要题型吗？",
      "你有 3-5 个用 STAR 框架准备好的项目经历吗？",
      "面对产品设计题，你的回答结构是什么？",
      "你如何处理「某指标下降 X%」这类数据分析题？",
      "你对目标公司的产品和使命了解多少？",
      "你做过多少次模拟面试？从中学到了什么？",
    ],
    extensions: [
      "观看 IGotAnOffer YouTube 频道的模拟面试视频学习优秀回答",
      "使用 Exponent 等平台进行系统性的面试准备",
      "研究 Amazon 的 Leadership Principles 作为行为面试参考",
      "准备一个「30 秒自我介绍」和「2 分钟职业故事」",
    ],
    sourceUrls: [
      "https://igotanoffer.com/blogs/product-manager/pm-interview-prep",
      "https://www.tryexponent.com/courses/pm-interview",
      "https://productschool.com/blog/skills/product-manager-interview-guide",
    ],
  },
  "pm-w12-3": {
    lessonId: "pm-w12-3",
    background: [
      "【Portfolio 的必要性】CareerFoundry 指出，虽然 Portfolio 在 UX 和开发领域更成熟，但在产品管理领域「越来越重要」。对于转行者来说，Portfolio「从锦上添花变成了必需品」。",
      "【展示思考过程】好的 PM Portfolio 不仅展示结果，更展示思考过程。包括：问题定义、用户研究、假设验证、决策权衡、迭代改进。这展示了你的 PM 思维方式。",
      "【STAR/CAR 方法】描述项目经历时使用 STAR（Situation, Task, Action, Result）或 CAR（Challenge, Action, Result）方法，确保结构清晰、逻辑连贯。",
      "【量化成果】用数据量化你的成果：「将用户留存提升 15%」「减少 30% 的客户投诉」「带来 $2M 的新增收入」。没有数据的成果描述缺乏说服力。",
      "【工具选择】常用的 Portfolio 工具包括：Notion（灵活且易于更新）、个人网站（更专业但维护成本高）、LinkedIn 长文（曝光度高）、Medium 文章（可持续积累）。",
    ],
    keyDifficulties: [
      "【保密性挑战】很多 PM 工作涉及公司机密，无法完整披露。解决方法：概括性描述业务成果、隐去具体数字、聚焦于方法论和思考过程。",
      "【项目归因】产品成功是团队努力的结果。在展示时既要突出个人贡献，又不能过度邀功。使用「我主导了...」「我与团队协作...」等表述区分角色。",
      "【更新频率】Portfolio 需要持续更新，但很多人做完一版就不管了。建议每个季度回顾一次，添加新项目、更新数据。",
      "【深度 vs 广度】展示 3-5 个深度案例比展示 10 个浅层项目更有效。选择最能体现你核心能力的项目深入讲述。",
    ],
    handsOnPath: [
      "1. 盘点你过去 2-3 年的主要项目，选择 3-5 个最有代表性的",
      "2. 为每个项目收集数据：业务指标变化、用户反馈、技术复杂度等",
      "3. 用 STAR/CAR 框架撰写每个项目的案例描述",
      "4. 选择一个工具（推荐 Notion）创建你的 Portfolio",
      "5. 请 2-3 位同行或导师审阅并给出反馈",
      "6. 在 LinkedIn 或个人网站发布，持续更新",
    ],
    selfCheck: [
      "你有一个展示你 PM 能力的 Portfolio 吗？",
      "你的 Portfolio 中有多少个案例？是否足够深入？",
      "每个案例是否有量化的成果数据？",
      "你如何处理涉及公司机密的项目描述？",
      "你的 Portfolio 上次更新是什么时候？",
      "你收到过他人对你 Portfolio 的反馈吗？",
    ],
    extensions: [
      "研究优秀 PM 的 Portfolio 案例（参考 CareerFoundry 的 9 个范例）",
      "学习如何用 Notion 创建交互式 Portfolio",
      "探索用 Side Project 补充 Portfolio 的方法",
      "了解如何在面试中有效地讲述你的 Portfolio 案例",
    ],
    sourceUrls: [
      "https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/",
      "https://www.notion.so/templates/product-manager-portfolio",
      "https://medium.com/the-year-of-the-looking-glass/building-a-strong-pm-portfolio-9dd9cb1cc11a",
    ],
  },
  "pm-w12-4": {
    lessonId: "pm-w12-4",
    background: [
      "【Lenny's Newsletter】Lenny Rachitsky 的 Newsletter 是 PM 领域最受欢迎的订阅内容之一，拥有超过 110 万订阅者。内容覆盖产品构建、增长策略和职业发展，强调「具体、可执行、战术性的建议」。",
      "【Mind the Product】Mind the Product 是全球最大的产品管理社区之一，拥有超过 30 万成员。提供文章、播客（The Product Experience）、线下活动（ProductTank Meetups）、年度大会（#mtpcon）等资源。",
      "【SVPG】Silicon Valley Product Group 由 Marty Cagan 创立，是产品管理思想领导力的重要来源。其文章涵盖产品运营模型、产品发现、团队建设、AI 时代的产品开发等主题，强调赋能型产品团队的理念。",
      "【Product School】Product School 提供系统化的 PM 培训课程，包括免费和付费内容。其博客和资源库覆盖 PM 技能、面试准备、职业发展等话题，是入门和进阶学习的好资源。",
      "【持续学习的必要性】产品管理领域快速演变，特别是 AI 时代带来的变革。Mind the Product 特别推出了「Practical AI for Product Managers」等课程，帮助 PM 适应新技术环境。",
    ],
    keyDifficulties: [
      "【信息过载】PM 领域的内容太多，很容易陷入「学习焦虑」或「收藏不读」的陷阱。关键是选择几个高质量来源深入学习，而非泛泛浏览所有内容。",
      "【理论 vs 实践】很多 PM 学了很多理论但不知道如何应用。解决方法：每学一个方法论就在工作中尝试应用，记录效果和心得。",
      "【社区参与门槛】参与社区分享（写文章、做演讲）需要克服心理障碍。建议从小处开始：先在内部分享，再尝试写短文，逐步建立信心。",
      "【时间投入】持续学习需要投入时间，但 PM 工作本身就很忙。建议将学习融入日常：通勤时听播客、每天阅读 15 分钟、周末做一次深度学习。",
    ],
    handsOnPath: [
      "1. 订阅 3-5 个高质量的 PM Newsletter（推荐 Lenny's、SVPG、Mind the Product）",
      "2. 加入一个 PM 社区（ProductTank、PM 微信群、Slack 社群等）",
      "3. 选择一本 PM 经典书籍阅读（《Inspired》《Continuous Discovery Habits》）",
      "4. 每周留出固定时间进行学习（如周日早上 1 小时）",
      "5. 尝试输出：写一篇博客或在社区分享一个学习心得",
      "6. 参加一次 PM 线下活动或在线会议，扩展人脉",
    ],
    selfCheck: [
      "你订阅了哪些 PM Newsletter 或博客？真的在读吗？",
      "你参与了哪些 PM 社区？活跃程度如何？",
      "你最近读的一本 PM 相关书籍是什么？有什么收获？",
      "你每周花多少时间在 PM 学习上？",
      "你有没有输出过（博客、分享、演讲）？如果没有，是什么阻碍了你？",
      "你认识多少位可以交流 PM 话题的朋友或导师？",
    ],
    extensions: [
      "创建个人学习知识库（用 Notion 或 Obsidian）",
      "找一位 PM 导师进行定期 1:1 交流",
      "尝试在 Medium 或公众号写 PM 相关文章",
      "申请成为 ProductTank 的分享嘉宾或志愿者",
    ],
    sourceUrls: [
      "https://www.lennysnewsletter.com/",
      "https://www.mindtheproduct.com/",
      "https://productschool.com/",
      "https://www.svpg.com/articles/",
    ],
  },
}

export const week12Quizzes: Record<string, QuizQuestion[]> = {
  "pm-w12-1": [
    {
      id: "pm-w12-1-q1",
      question: "根据 Levels.fyi 数据，美国 PM 的中位数总薪酬是多少？",
      options: [
        "$150,000",
        "$180,000",
        "$220,000",
        "$280,000",
      ],
      answer: 2,
      rationale:
        "Levels.fyi 数据显示美国 PM 的中位数总薪酬为 $220,000，基于 382 名技术行业从业者的样本。",
    },
    {
      id: "pm-w12-1-q2",
      question: "PM 职业发展的两条主线是什么？",
      options: [
        "技术线和业务线",
        "管理线（Management Track）和个人贡献者线（IC Track）",
        "产品线和运营线",
        "内部发展线和外部跳槽线",
      ],
      answer: 1,
      rationale:
        "PM 职业发展有两条主线：管理线侧重团队领导和战略规划；个人贡献者线（IC Track）侧重深度专业能力和特定领域专精。",
    },
    {
      id: "pm-w12-1-q3",
      question: "根据 Levels.fyi，PM 薪酬的三个组成部分是什么？",
      options: [
        "基本工资、加班费、年终奖",
        "基本工资、股权激励、绩效奖金",
        "基本工资、项目奖金、签约奖金",
        "时薪、提成、期权",
      ],
      answer: 1,
      rationale:
        "Levels.fyi 显示 PM 薪酬由三部分组成：基本工资（中位数 $182K）、股权激励（中位数 $10K）、绩效奖金（中位数 $13.6K）。",
    },
    {
      id: "pm-w12-1-q4",
      question: "PM 典型的职业阶梯顺序是什么？",
      options: [
        "PM → APM → Senior PM → Director → VP → CPO",
        "APM → PM → Senior PM → Lead PM → Director → VP → CPO",
        "Junior PM → PM → Staff PM → Principal PM → VP",
        "PM → Lead PM → Group PM → Director → SVP",
      ],
      answer: 1,
      rationale:
        "典型的 PM 职业阶梯为：APM（Associate PM）→ PM → Senior PM → Lead/Staff PM → Director of PM → VP of Product → CPO。",
    },
    {
      id: "pm-w12-1-q5",
      question: "从 Senior PM 晋升到 Lead/Director 的主要挑战是什么？",
      options: [
        "需要学习更多技术知识",
        "需要从「做好产品」转变为「培养团队」和「制定战略」",
        "需要管理更大的预算",
        "需要更多的出差和客户拜访",
      ],
      answer: 1,
      rationale:
        "从 Senior PM 到 Lead/Director 是常见的晋升瓶颈，需要从「做好产品」转变为「培养团队」和「制定战略」，这是一个重大的角色转变。",
    },
    {
      id: "pm-w12-1-q6",
      question: "Levels.fyi 数据显示，PM 的基本工资在 90 百分位通常不超过多少？",
      options: [
        "$180,000",
        "$200,000",
        "$250,000",
        "$300,000",
      ],
      answer: 2,
      rationale:
        "Levels.fyi 数据显示高级 PM 的基本工资通常在 $250K 左右达到上限，更高的薪酬增长主要来自股权激励。",
    },
    {
      id: "pm-w12-1-q7",
      question: "关于 PM 的技能迁移性，以下哪个说法是正确的？",
      options: [
        "PM 技能只适用于互联网行业",
        "PM 的核心技能（用户洞察、数据分析、跨团队协作）具有良好的可迁移性",
        "PM 转行通常需要从零开始",
        "PM 只能在同类型公司之间跳槽",
      ],
      answer: 1,
      rationale:
        "PM 的核心技能（用户洞察、数据分析、跨团队协作、战略思维）具有良好的可迁移性，许多 PM 成功转型为创始人、投资人或咨询顾问。",
    },
    {
      id: "pm-w12-1-q8",
      question: "选择 IC 线（个人贡献者线）发展的潜在风险是什么？",
      options: [
        "薪酬增长空间有限",
        "在某些公司可能面临天花板或边缘化的风险",
        "无法参与产品决策",
        "必须学习编程",
      ],
      answer: 1,
      rationale:
        "选择 IC 线在某些公司可能面临天花板或边缘化的风险，因为有些组织更重视管理职位。",
    },
    {
      id: "pm-w12-1-q9",
      question: "跨行业跳槽时 PM 可能面临什么挑战？",
      options: [
        "技术技能完全不可用",
        "沟通能力需要重新学习",
        "领域知识的积累可能无法完全迁移",
        "必须降薪入职",
      ],
      answer: 2,
      rationale:
        "跨行业跳槽时，领域知识的积累可能无法完全迁移。例如从 B2C 转 B2B，需要重新建立行业认知。",
    },
    {
      id: "pm-w12-1-q10",
      question: "远程/混合工作模式对 PM 职业发展可能有什么影响？",
      options: [
        "完全没有影响",
        "只有正面影响",
        "可能减少非正式沟通和曝光度，但也打开了全球化就业的可能性",
        "会导致所有 PM 失业",
      ],
      answer: 2,
      rationale:
        "远程工作可能减少非正式沟通和曝光度，影响晋升机会；但也打开了全球化就业的可能性，是一把双刃剑。",
    },
    {
      id: "pm-w12-1-q11",
      question: "建立个人品牌对 PM 职业发展有什么帮助？",
      options: [
        "只对想当网红的 PM 有用",
        "帮助增加职业可见度，获得更多机会",
        "会分散工作精力，不建议做",
        "只对高级 PM 有意义",
      ],
      answer: 1,
      rationale:
        "建立个人品牌（写博客、做分享、参与社区）可以增加职业可见度，帮助 PM 获得更多职业机会。",
    },
    {
      id: "pm-w12-1-q12",
      question: "根据 Levels.fyi，股权激励在 PM 薪酬中的特点是什么？",
      options: [
        "所有 PM 的股权激励都差不多",
        "股权激励波动很大，从零到 $150K 不等",
        "只有 CPO 才有股权激励",
        "股权激励只在创业公司存在",
      ],
      answer: 1,
      rationale:
        "Levels.fyi 数据显示股权激励的差异很大，从第 25 百分位的 $0 到第 90 百分位的 $150K，高级别 PM 的股权占比显著提升。",
    },
  ],
  "pm-w12-2": [
    {
      id: "pm-w12-2-q1",
      question: "根据 IGotAnOffer，PM 面试包含几大题型？",
      options: [
        "4 种",
        "6 种",
        "8 种",
        "10 种",
      ],
      answer: 2,
      rationale:
        "IGotAnOffer 总结 PM 面试的八大题型：行为领导力、产品设计、数据分析、策略、估算、优先级排序、技术、通用匹配。",
    },
    {
      id: "pm-w12-2-q2",
      question: "STAR 方法用于回答什么类型的面试题？",
      options: [
        "技术题",
        "估算题",
        "行为面试题",
        "产品设计题",
      ],
      answer: 2,
      rationale:
        "STAR（Situation, Task, Action, Result）是行为面试的标准回答框架，用于结构化地讲述过往经历。",
    },
    {
      id: "pm-w12-2-q3",
      question: "IGotAnOffer 建议行为面试的每个回答应该控制在多长时间内？",
      options: [
        "2 分钟以内",
        "5 分钟以内",
        "10 分钟以内",
        "没有时间限制",
      ],
      answer: 1,
      rationale:
        "IGotAnOffer 建议每个行为面试的回答控制在「5 分钟以内」，保持结构清晰、重点突出。",
    },
    {
      id: "pm-w12-2-q4",
      question: "在产品设计面试中，候选人应该准备做什么？",
      options: [
        "只口头描述想法",
        "画出粗略的设计草图和线框图",
        "提供完整的 Figma 设计稿",
        "编写产品代码原型",
      ],
      answer: 1,
      rationale:
        "IGotAnOffer 指出候选人应该准备在面试中「画出粗略的设计草图和线框图」，展示具体化的思考能力。",
    },
    {
      id: "pm-w12-2-q5",
      question: "数据分析面试题关注的指标维度不包括以下哪个？",
      options: [
        "激活（Activation）",
        "留存（Retention）",
        "盈利（Profitability）",
        "参与（Engagement）",
      ],
      answer: 2,
      rationale:
        "IGotAnOffer 列出的数据分析指标维度包括：激活、采用、参与、留存、质量。盈利不在其列表中。",
    },
    {
      id: "pm-w12-2-q6",
      question: "IGotAnOffer 关于技术理解的建议是什么？",
      options: [
        "PM 需要会写代码",
        "PM 需要「理解大的技术模块如何协同工作」但不需要编程",
        "PM 不需要任何技术理解",
        "PM 只需要了解前端技术",
      ],
      answer: 1,
      rationale:
        "IGotAnOffer 指出 PM 不需要会写代码，但需要「理解大的技术模块如何协同工作」，帮助与工程师有效沟通。",
    },
    {
      id: "pm-w12-2-q7",
      question: "IGotAnOffer 推荐用什么作为行为面试准备的参考框架？",
      options: [
        "Google 的 OKR 体系",
        "Amazon 的 Leadership Principles",
        "Facebook 的 Move Fast 原则",
        "Apple 的设计原则",
      ],
      answer: 1,
      rationale:
        "IGotAnOffer 建议使用 Amazon 的 Leadership Principles 作为行为面试准备的参考指南。",
    },
    {
      id: "pm-w12-2-q8",
      question: "关于模拟面试，IGotAnOffer 的观点是什么？",
      options: [
        "同伴练习和专业教练效果一样",
        "模拟面试没有意义",
        "专业教练的反馈质量「远高于」同伴练习",
        "只需要自己对着镜子练习",
      ],
      answer: 2,
      rationale:
        "IGotAnOffer 指出专业教练的反馈质量「远高于」同伴练习，模拟面试帮助识别盲点和改进表达方式。",
    },
    {
      id: "pm-w12-2-q9",
      question: "IGotAnOffer 推荐的 PM 面试准备书籍包括以下哪些？",
      options: [
        "《Inspired》和《Empowered》",
        "《Cracking the PM Interview》和《Swipe to Unlock》",
        "《The Lean Startup》和《Zero to One》",
        "《Good to Great》和《Built to Last》",
      ],
      answer: 1,
      rationale:
        "IGotAnOffer 推荐《Cracking the PM Interview》（McDowell & Bavaro）和《Swipe to Unlock》（技术策略入门）作为面试准备书籍。",
    },
    {
      id: "pm-w12-2-q10",
      question: "在公司研究方面，IGotAnOffer 建议候选人做什么？",
      options: [
        "只了解公司产品",
        "只了解面试官背景",
        "在面试中引用公司的使命",
        "不需要做公司研究",
      ],
      answer: 2,
      rationale:
        "IGotAnOffer 建议候选人在面试中「引用公司的使命」，展示对公司的了解和认同。",
    },
    {
      id: "pm-w12-2-q11",
      question: "产品设计题面试通常持续多长时间？",
      options: [
        "15-20 分钟",
        "30-45 分钟",
        "45-60 分钟",
        "90 分钟以上",
      ],
      answer: 2,
      rationale:
        "IGotAnOffer 指出产品设计题通常持续「45-60 分钟」，需要展示完整的从用户理解到解决方案的思考过程。",
    },
    {
      id: "pm-w12-2-q12",
      question: "在数据分析面试中，面试官主要评估什么？",
      options: [
        "候选人知道的指标公式",
        "候选人的 SQL 能力",
        "候选人的思考过程和解释能力",
        "候选人使用的分析工具",
      ],
      answer: 2,
      rationale:
        "IGotAnOffer 指出数据分析面试评估的是「你的思考过程和解释能力」而非标准答案。",
    },
  ],
  "pm-w12-3": [
    {
      id: "pm-w12-3-q1",
      question: "根据 CareerFoundry，对于转行者来说 PM Portfolio 的重要性如何？",
      options: [
        "完全不需要",
        "锦上添花",
        "从锦上添花变成了必需品",
        "只有大公司才看",
      ],
      answer: 2,
      rationale:
        "CareerFoundry 指出对于转行者来说，Portfolio「从锦上添花变成了必需品」，因为它能证明你的 PM 能力。",
    },
    {
      id: "pm-w12-3-q2",
      question: "好的 PM Portfolio 应该展示什么？",
      options: [
        "只展示最终产品",
        "只展示结果数据",
        "不仅展示结果，更展示思考过程",
        "只展示团队合影",
      ],
      answer: 2,
      rationale:
        "好的 PM Portfolio 不仅展示结果，更展示思考过程，包括：问题定义、用户研究、假设验证、决策权衡等。",
    },
    {
      id: "pm-w12-3-q3",
      question: "STAR 方法中的 A 代表什么？",
      options: [
        "Analysis（分析）",
        "Action（行动）",
        "Achievement（成就）",
        "Approach（方法）",
      ],
      answer: 1,
      rationale:
        "STAR 代表 Situation（情境）、Task（任务）、Action（行动）、Result（结果），A 代表你采取的具体行动。",
    },
    {
      id: "pm-w12-3-q4",
      question: "以下哪个是量化成果的好例子？",
      options: [
        "「用户增长很多」",
        "「大家都说产品变好了」",
        "「将用户留存提升 15%」",
        "「功能很受欢迎」",
      ],
      answer: 2,
      rationale:
        "用数据量化成果更有说服力。「将用户留存提升 15%」是一个具体、可衡量的成果描述。",
    },
    {
      id: "pm-w12-3-q5",
      question: "常用的 Portfolio 工具不包括以下哪个？",
      options: [
        "Notion",
        "个人网站",
        "LinkedIn 长文",
        "PowerPoint",
      ],
      answer: 3,
      rationale:
        "常用的 Portfolio 工具包括 Notion（灵活）、个人网站（专业）、LinkedIn 长文（曝光度高）、Medium 文章。PowerPoint 通常用于演示而非 Portfolio。",
    },
    {
      id: "pm-w12-3-q6",
      question: "如何处理涉及公司机密的项目描述？",
      options: [
        "完全不能写入 Portfolio",
        "原封不动地写入",
        "概括性描述、隐去具体数字、聚焦于方法论和思考过程",
        "用假数据替代真实数据",
      ],
      answer: 2,
      rationale:
        "处理保密性挑战的方法是：概括性描述业务成果、隐去具体数字、聚焦于方法论和思考过程。",
    },
    {
      id: "pm-w12-3-q7",
      question: "在展示项目时如何正确归因？",
      options: [
        "把所有成果都归功于自己",
        "不提及任何个人贡献",
        "既突出个人贡献，又不过度邀功",
        "只说团队贡献",
      ],
      answer: 2,
      rationale:
        "在展示时既要突出个人贡献，又不能过度邀功。使用「我主导了...」「我与团队协作...」等表述区分角色。",
    },
    {
      id: "pm-w12-3-q8",
      question: "Portfolio 的更新频率建议是什么？",
      options: [
        "做完一版就不用管了",
        "每个季度回顾一次",
        "每年更新一次",
        "每周更新",
      ],
      answer: 1,
      rationale:
        "建议每个季度回顾一次 Portfolio，添加新项目、更新数据，保持内容的时效性。",
    },
    {
      id: "pm-w12-3-q9",
      question: "关于 Portfolio 的深度和广度，哪个做法更有效？",
      options: [
        "展示尽可能多的项目",
        "展示 3-5 个深度案例比展示 10 个浅层项目更有效",
        "只展示一个最好的项目",
        "数量越多越好",
      ],
      answer: 1,
      rationale:
        "展示 3-5 个深度案例比展示 10 个浅层项目更有效。选择最能体现你核心能力的项目深入讲述。",
    },
    {
      id: "pm-w12-3-q10",
      question: "CAR 方法中的 C 代表什么？",
      options: [
        "Context（背景）",
        "Challenge（挑战）",
        "Company（公司）",
        "Customer（客户）",
      ],
      answer: 1,
      rationale:
        "CAR 代表 Challenge（挑战）、Action（行动）、Result（结果），是 STAR 方法的简化版本。",
    },
    {
      id: "pm-w12-3-q11",
      question: "创建 PM Portfolio 的第一步应该是什么？",
      options: [
        "选择工具",
        "设计视觉风格",
        "盘点过去 2-3 年的主要项目，选择最有代表性的",
        "发布到社交媒体",
      ],
      answer: 2,
      rationale:
        "创建 Portfolio 的第一步是盘点你过去 2-3 年的主要项目，选择 3-5 个最有代表性的进行展示。",
    },
    {
      id: "pm-w12-3-q12",
      question: "CareerFoundry 的文章提供了多少个 Portfolio 范例？",
      options: [
        "5 个",
        "7 个",
        "9 个",
        "12 个",
      ],
      answer: 2,
      rationale:
        "CareerFoundry 的文章标题为「9 Great Product Manager Portfolio Examples」，提供了 9 个 Portfolio 范例供学习。",
    },
  ],
  "pm-w12-4": [
    {
      id: "pm-w12-4-q1",
      question: "Lenny's Newsletter 目前拥有多少订阅者？",
      options: [
        "超过 10 万",
        "超过 50 万",
        "超过 110 万",
        "超过 500 万",
      ],
      answer: 2,
      rationale:
        "Lenny's Newsletter 拥有超过 110 万订阅者，是 PM 领域最受欢迎的订阅内容之一。",
    },
    {
      id: "pm-w12-4-q2",
      question: "Mind the Product 社区拥有多少成员？",
      options: [
        "超过 10 万",
        "超过 30 万",
        "超过 100 万",
        "超过 500 万",
      ],
      answer: 1,
      rationale:
        "Mind the Product 是全球最大的产品管理社区之一，拥有超过 30 万成员。",
    },
    {
      id: "pm-w12-4-q3",
      question: "SVPG 由谁创立？",
      options: [
        "Lenny Rachitsky",
        "Teresa Torres",
        "Marty Cagan",
        "Ravi Mehta",
      ],
      answer: 2,
      rationale:
        "Silicon Valley Product Group（SVPG）由 Marty Cagan 创立，是产品管理思想领导力的重要来源。",
    },
    {
      id: "pm-w12-4-q4",
      question: "Mind the Product 的播客叫什么名字？",
      options: [
        "The PM Podcast",
        "The Product Experience",
        "Product Talk",
        "Mind the Podcast",
      ],
      answer: 1,
      rationale:
        "Mind the Product 的播客名为「The Product Experience」，邀请行业领导者分享经验。",
    },
    {
      id: "pm-w12-4-q5",
      question: "Lenny's Newsletter 强调什么类型的建议？",
      options: [
        "理论性的、学术性的",
        "具体、可执行、战术性的",
        "抽象的、哲学性的",
        "只适用于创业公司的",
      ],
      answer: 1,
      rationale:
        "Lenny's Newsletter 强调「具体、可执行、战术性的建议」，帮助 PM 在实际工作中应用。",
    },
    {
      id: "pm-w12-4-q6",
      question: "Mind the Product 的线下活动叫什么？",
      options: [
        "PM Meetups",
        "ProductTank",
        "Product Gathering",
        "Mind Meetups",
      ],
      answer: 1,
      rationale:
        "Mind the Product 的线下活动品牌是「ProductTank」，在全球各地举办本地聚会。",
    },
    {
      id: "pm-w12-4-q7",
      question: "关于信息过载问题，正确的做法是什么？",
      options: [
        "尽可能订阅所有 PM 相关内容",
        "选择几个高质量来源深入学习，而非泛泛浏览所有内容",
        "完全不订阅任何内容",
        "只看视频，不看文章",
      ],
      answer: 1,
      rationale:
        "PM 领域的内容太多，关键是选择几个高质量来源深入学习，而非泛泛浏览所有内容。",
    },
    {
      id: "pm-w12-4-q8",
      question: "如何将学习融入忙碌的日常？",
      options: [
        "等有空的时候再学习",
        "辞职专门学习",
        "通勤时听播客、每天阅读 15 分钟、周末做深度学习",
        "只在年假时学习",
      ],
      answer: 2,
      rationale:
        "建议将学习融入日常：通勤时听播客、每天阅读 15 分钟、周末做一次深度学习，保持持续性。",
    },
    {
      id: "pm-w12-4-q9",
      question: "Mind the Product 推出了什么 AI 相关课程？",
      options: [
        "AI for Developers",
        "Practical AI for Product Managers",
        "AI Coding Bootcamp",
        "AI Marketing Course",
      ],
      answer: 1,
      rationale:
        "Mind the Product 推出了「Practical AI for Product Managers」等课程，帮助 PM 适应 AI 时代。",
    },
    {
      id: "pm-w12-4-q10",
      question: "SVPG 文章库涵盖多少个主题分类？",
      options: [
        "5 个",
        "8 个",
        "13 个",
        "20 个",
      ],
      answer: 2,
      rationale:
        "SVPG 的文章库可以按 13 个主题分类进行筛选，涵盖产品运营模型、发现、领导力等领域。",
    },
    {
      id: "pm-w12-4-q11",
      question: "Lenny's Newsletter 的付费年订阅价格是多少？",
      options: [
        "$100/年",
        "$150/年",
        "$200/年",
        "$300/年",
      ],
      answer: 2,
      rationale:
        "Lenny's Newsletter 的付费年订阅价格为 $200/年（或 $20/月），包含社区和额外资源。",
    },
    {
      id: "pm-w12-4-q12",
      question: "克服社区参与门槛的建议是什么？",
      options: [
        "直接在大会上做主题演讲",
        "从小处开始：先在内部分享，再尝试写短文，逐步建立信心",
        "等到成为专家再分享",
        "只在匿名平台分享",
      ],
      answer: 1,
      rationale:
        "建议从小处开始：先在内部分享，再尝试写短文，逐步建立信心，最终参与更大的社区活动。",
    },
  ],
}
