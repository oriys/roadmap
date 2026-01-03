import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
  "pm-w10-1": {
    lessonId: "pm-w10-1",
    background: [
      "【产品战略定义】SVPG 将产品战略定义为回答「我们应该解决哪些问题」的关键问题。更正式地说，产品战略是「如何在满足公司需求的同时，将产品愿景变为现实」。战略代表整体方法和理由，而非实施细节。",
      "【愿景-战略-路线图层级】SVPG 建立了清晰的层级关系：愿景（Vision）是产品要实现的长期目标；战略（Strategy）是实现愿景的路径选择；路线图（Roadmap）是战术执行细节。许多组织有目标和路线图，却缺乏战略。",
      "【好战略的四要素】SVPG 指出有效的产品战略需要四个要素：专注（Focus）——决定做什么不做什么；洞察（Insights）——通过研究、数据分析和用户学习生成；行动（Action）——将洞察转化为决策；管理（Management）——积极参与但不微观管理。",
      "【战略需要取舍】好的战略意味着做出艰难的取舍（Trade-offs）。Richard Rumelt 在《好战略/坏战略》中指出：「坏战略是主动逃避制定好战略的艰苦工作」。不做取舍的「战略」不是真正的战略。",
      "【产品团队 vs 功能团队】SVPG 强调产品战略需要赋能型产品团队（Product Teams）而非功能团队（Feature Teams）来执行。产品团队被赋予问题去解决，而功能团队只是被分配功能去实现。",
    ],
    keyDifficulties: [
      "【战略与目标混淆】很多公司把「增长 50%」当作战略，但这只是目标。战略是实现目标的路径和方法论。没有战略的目标只是愿望清单。",
      "【缺乏专注】SVPG 强调专注是「决定你真正需要做的几件事，因此也是你不会做的所有事」。同时追求 50 多个计划是缺乏战略的表现。",
      "【战略与战术脱节】有了战略却不能转化为团队的具体行动，战略就变成了纸上谈兵。每个团队需要理解他们的工作如何服务于整体战略。",
      "【愿景模糊】如果产品愿景不清晰，战略就失去了方向。愿景应该描述 3-5 年后产品要实现的状态，并激励团队。",
    ],
    handsOnPath: [
      "1. 写下你产品的愿景陈述（Vision Statement），确保它描述了 3-5 年后的期望状态",
      "2. 列出当前产品面临的 3-5 个最关键的问题或机会",
      "3. 对每个问题进行优先级排序，选择最重要的 2-3 个作为战略重点",
      "4. 为每个战略重点定义成功指标和关键结果（OKR）",
      "5. 识别需要放弃或延后的计划（战略取舍）",
      "6. 与团队讨论：每个人是否清楚战略重点？如何知道我们在正确的方向上？",
      "7. 建立季度战略回顾机制，定期评估和调整",
    ],
    selfCheck: [
      "你能用一句话说清楚产品愿景和产品战略的区别吗？",
      "你的产品战略有明确的取舍吗？有什么是你决定不做的？",
      "团队成员是否都清楚当前的战略重点？",
      "你的战略是基于什么洞察（Insights）制定的？",
      "你多久回顾和调整一次产品战略？",
      "你的产品团队是赋能型团队还是功能团队？",
    ],
    extensions: [
      "阅读 Richard Rumelt 的《好战略/坏战略》深入理解战略本质",
      "学习 Gibson Biddle 的 DHM 模型（Delight, Hard-to-copy, Margin-enhancing）",
      "研究 SVPG 的产品战略系列文章，理解产品战略的完整框架",
      "探索 OKR 框架如何将战略转化为可执行的目标和关键结果",
    ],
    sourceUrls: [
      "https://www.svpg.com/product-strategy-overview/",
      "https://gibsonbiddle.medium.com/intro-to-product-strategy-60bdf72b17e3",
      "https://www.atlassian.com/agile/product-management/product-strategy",
    ],
  },
  "pm-w10-2": {
    lessonId: "pm-w10-2",
    background: [
      "【商业模式画布定义】Strategyzer 将商业模式画布定义为「一个战略管理和创业工具」，它「允许你描述、设计、挑战、发明和转型你的商业模式」。这个工具源自畅销书《Business Model Generation》，被全球领先企业和初创公司广泛应用。",
      "【九大模块】商业模式画布包含九个核心模块：客户细分（Customer Segments）、价值主张（Value Propositions）、渠道通路（Channels）、客户关系（Customer Relationships）、收入来源（Revenue Streams）、核心资源（Key Resources）、关键活动（Key Activities）、关键合作（Key Partnerships）、成本结构（Cost Structure）。",
      "【Lean Canvas 适应】Ash Maurya 创建的 Lean Canvas 是商业模式画布的创业适应版本，更聚焦于问题、解决方案和关键指标。Lean Canvas「被全球超过 100 万创业者使用」，可以在约 20 分钟内完成初稿。",
      "【价值创造与获取】商业模式的核心是价值创造（为客户创造价值）和价值获取（从中获得收益）的平衡。Strategyzer 强调画布帮助「可视化和传达你现有商业模式的简单故事」。",
      "【验证假设】商业模式画布不仅是描述工具，更是验证工具。使用画布可以识别商业模式中的关键假设，并系统地验证这些假设。",
    ],
    keyDifficulties: [
      "【混淆产品和商业模式】很多人只关注产品本身，忽略了商业模式的其他要素。好产品配上错误的商业模式同样会失败。需要系统思考所有九个模块。",
      "【客户细分不够精准】泛泛地定义「所有人」为目标客户是常见错误。好的客户细分应该具体到可以描述典型用户的一天。",
      "【价值主张与客户需求脱节】价值主张必须与客户的实际任务（Jobs）、痛点（Pains）和收益期望（Gains）对应。使用价值主张画布可以确保这种匹配。",
      "【忽视成本结构】很多创业者过度关注收入而忽视成本。商业模式的可持续性取决于收入能否覆盖成本并产生利润。",
    ],
    handsOnPath: [
      "1. 下载或打印商业模式画布模板",
      "2. 从客户细分开始：描述你的目标客户是谁，他们有什么特征？",
      "3. 定义价值主张：你为客户解决什么问题？提供什么独特价值？",
      "4. 填写渠道和客户关系：如何触达客户？如何维护关系？",
      "5. 明确收入来源：客户为什么价值付费？采用什么定价模式？",
      "6. 列出核心资源、关键活动和关键合作伙伴",
      "7. 分析成本结构：主要成本来自哪里？是成本驱动还是价值驱动？",
    ],
    selfCheck: [
      "你能画出你产品的商业模式画布吗？每个模块都填写了吗？",
      "你的客户细分足够具体吗？能描述典型客户的一天吗？",
      "你的价值主张与客户的真实痛点对应吗？",
      "你的收入来源能覆盖成本结构吗？利润率如何？",
      "商业模式中最大的风险或假设是什么？如何验证？",
      "你的商业模式与竞品有什么本质区别？",
    ],
    extensions: [
      "使用价值主张画布（Value Proposition Canvas）深入分析客户需求与价值匹配",
      "学习 Lean Canvas 的使用方法，适合早期创业项目",
      "阅读《Business Model Generation》了解更多商业模式案例和设计方法",
      "探索商业模式创新的模式库（Pattern Library）",
    ],
    sourceUrls: [
      "https://www.strategyzer.com/canvas/business-model-canvas",
      "https://www.strategyzer.com/library/the-business-model-canvas",
      "https://leanstack.com/lean-canvas",
    ],
  },
  "pm-w10-3": {
    lessonId: "pm-w10-3",
    background: [
      "【价值定价定义】价值定价（Value-based Pricing）是根据产品的感知价值而非历史价格或成本来定价的策略。这是一种「以客户为中心的策略，根据客户对产品价值的感知来定价——它对他们值多少钱」。",
      "【三种定价策略对比】成本加成定价（Cost-plus）简单但忽视客户价值；竞争定价（Competitive）根据竞品定价但容易陷入价格战；价值定价关注客户愿意支付的价格，能获得更高利润。",
      "【Freemium 模式设计】Freemium 是「通过免费产品吸引客户，然后将他们转化为付费计划」的策略。关键洞察：Freemium 不是变现方式，而是获客方式——它是「把客户放入销售漏斗，希望将他们转化为付费用户」。",
      "【Freemium 转化率挑战】平均 Freemium 转化率只有 1-2%，远低于免费试用的 17%。因此 Freemium 需要非常大的市场规模才能成功。Slack 凭借其 30% 的转化率成为 SaaS 领域的佼佼者。",
      "【定价实验重要性】定价不是一次性决策，需要持续实验和优化。市场研究是定价策略的核心——「你需要了解客户愿意为什么付费，以及免费用户需要什么最小功能来保持回访」。",
    ],
    keyDifficulties: [
      "【价值感知难以量化】价值定价需要准确评估客户的感知价值，这「涉及猜测工作，本质上更偏定性」。客户认为有价值的东西可能随时间变化。",
      "【Freemium 边界设计困难】给太多功能会降低升级动力，给太少会无法展示价值。需要找到「既能驱动获客、激活和留存，又能吸引用户升级」的平衡点。",
      "【免费用户群体复杂】免费用户群体从「第一次试用的个人用户到不愿升级的大公司」都有。需要理解不同子群体并创建不同的用户画像。",
      "【定价变更的信任风险】一旦定价策略失误，移除免费功能可能「打破客户信任，导致他们在首次付费前就流失」。",
    ],
    handsOnPath: [
      "1. 分析你当前的定价策略：是成本加成、竞争定价还是价值定价？",
      "2. 进行客户支付意愿调研：客户认为产品值多少钱？他们为什么功能愿意付费？",
      "3. 分析竞品定价：他们的定价模式是什么？价格区间如何？",
      "4. 如果考虑 Freemium，设计免费版和付费版的功能边界",
      "5. 设计定价实验：A/B 测试不同价格点对转化率的影响",
      "6. 建立定价监控指标：转化率、ARPU、客户流失率等",
      "7. 制定定期回顾机制，根据数据调整定价策略",
    ],
    selfCheck: [
      "你的定价策略是基于成本、竞品还是客户价值？",
      "你知道客户愿意为你的产品支付多少吗？依据是什么？",
      "如果采用 Freemium，免费版应该包含哪些功能？为什么？",
      "你的 Freemium 转化率是多少？与行业基准相比如何？",
      "你多久回顾和调整一次定价策略？",
      "定价变更对客户信任有什么影响？如何管理这种风险？",
    ],
    extensions: [
      "学习心理定价策略：锚定效应、诱饵定价、价格尾数等",
      "研究 SaaS 定价最佳实践：分层定价、按用量计费、混合模式",
      "探索 Slack、Zoom、HubSpot 等公司的 Freemium 成功案例",
      "学习如何进行价格敏感度分析（Van Westendorp 方法）",
    ],
    sourceUrls: [
      "https://www.priceintelligently.com/",
      "https://www.paddle.com/resources/pricing-strategy",
      "https://en.wikipedia.org/wiki/Value-based_pricing",
    ],
  },
  "pm-w10-4": {
    lessonId: "pm-w10-4",
    background: [
      "【产品组合管理定义】产品组合管理是「将所有产品作为单一战略投资组合来管理的实践」。它是「分析、优先排序和管理公司产品或服务集合的战略流程，旨在通过将产品与整体业务目标、市场需求和资源配置对齐来最大化组合价值」。",
      "【波士顿矩阵（BCG Matrix）】BCG 矩阵由 Bruce Henderson 于 1968 年创建，是产品组合分析的经典框架。它根据市场份额和市场增长率将产品分为四类：明星（Stars）、金牛（Cash Cows）、问号（Question Marks）、瘦狗（Dogs）。",
      "【四象限策略】BCG 战略的核心是「挤奶金牛，不要在瘦狗上浪费金钱，投资明星，给问号一些实验资金看它们能否成为明星」。金牛产品的现金流应该用于培育明星和问号产品。",
      "【资源配置原则】有效的产品组合管理需要「静态资源配置会扼杀组合表现」的认识。需要灵活性来随着机会出现或优先级变化而转移资源。定期资源审查确保不会「资助昨天的优先级」。",
      "【风险分散】产品组合管理旨在通过「多元化投资组合，将投资分散到多个产品或服务」来降低风险。拥有「处于不同生命周期阶段、不同市场细分或不同风险特征」的产品可以降低市场波动和技术颠覆的风险。",
    ],
    keyDifficulties: [
      "【BCG 矩阵的局限性】批评者认为矩阵「将复杂的市场动态简化为过于简单的分类」，且只考虑市场份额和增长两个因素，忽略了其他重要因素。静态分析无法反映快速变化的商业环境。",
      "【放弃瘦狗产品的情感困难】对曾经成功的产品做出「下架」决策在情感上很困难，但过度投入衰退期产品会拖累整体业务表现。",
      "【问号产品的不确定性】问号产品可能成为明星也可能变成瘦狗。需要设定明确的里程碑和决策点，避免无限期投入资源。",
      "【组合平衡的动态性】产品组合需要持续再平衡，「淘汰表现不佳的产品，投资有前景的新机会」。这需要建立定期审查和决策机制。",
    ],
    handsOnPath: [
      "1. 列出你公司/团队负责的所有产品或产品线",
      "2. 收集每个产品的市场份额和市场增长率数据",
      "3. 将每个产品绘制在 BCG 矩阵的相应象限中",
      "4. 分析当前资源分配：各象限产品获得多少投资？",
      "5. 识别组合中的不平衡：是否缺少明星产品？是否在瘦狗上投入过多？",
      "6. 制定再平衡策略：哪些产品需要增加投资？哪些需要收缩或退出？",
      "7. 建立季度产品组合审查机制，跟踪执行并调整策略",
    ],
    selfCheck: [
      "你能画出你产品组合的 BCG 矩阵吗？",
      "你的产品组合中有多少明星产品？多少金牛产品？",
      "金牛产品的现金流是否在投资明星和问号产品？",
      "你有没有在瘦狗产品上投入过多资源？",
      "多久进行一次产品组合审查？",
      "你有清晰的产品退出策略吗？",
    ],
    extensions: [
      "学习 GE-McKinsey 九宫格矩阵，提供比 BCG 更细致的分析",
      "探索产品生命周期管理与产品组合管理的结合",
      "研究如何在不同产品间进行资源再分配",
      "学习如何制定产品退出策略和执行计划",
    ],
    sourceUrls: [
      "https://en.wikipedia.org/wiki/Growth%E2%80%93share_matrix",
      "https://www.productplan.com/glossary/product-portfolio-management/",
      "https://en.wikipedia.org/wiki/GE_multifactorial_analysis",
    ],
  },
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
  "pm-w10-1": [
    {
      id: "pm-w10-1-q1",
      question: "根据 SVPG，产品战略回答的核心问题是什么？",
      options: [
        "我们应该雇佣多少工程师？",
        "我们应该解决哪些问题？",
        "我们的收入目标是多少？",
        "我们的竞争对手是谁？",
      ],
      answer: 1,
      rationale:
        "SVPG 明确指出产品战略回答的核心问题是「which problems should product teams solve」（我们应该解决哪些问题）。这是战略与目标的关键区别。",
    },
    {
      id: "pm-w10-1-q2",
      question: "产品愿景、产品战略、产品路线图的正确层级关系是什么？",
      options: [
        "路线图 → 战略 → 愿景",
        "愿景 → 路线图 → 战略",
        "愿景 → 战略 → 路线图",
        "战略 → 愿景 → 路线图",
      ],
      answer: 2,
      rationale:
        "SVPG 建立了清晰的层级：愿景（Vision）是期望的终态，战略（Strategy）是如何实现愿景，路线图（Roadmap）是战术执行细节。",
    },
    {
      id: "pm-w10-1-q3",
      question: "SVPG 提出的好战略四要素不包括以下哪项？",
      options: [
        "专注（Focus）",
        "洞察（Insights）",
        "预算（Budget）",
        "行动（Action）",
      ],
      answer: 2,
      rationale:
        "SVPG 提出的四要素是：专注（Focus）、洞察（Insights）、行动（Action）、管理（Management）。预算不是其中之一。",
    },
    {
      id: "pm-w10-1-q4",
      question: "根据 SVPG，「专注」在产品战略中意味着什么？",
      options: [
        "每天工作更长时间",
        "只关注技术实现",
        "决定做什么不做什么，选择关键目标而非追求 50+ 个计划",
        "只关注短期目标",
      ],
      answer: 2,
      rationale:
        "SVPG 定义专注为「Deciding what few things you really need to do, and therefore all the things you won't do」，强调战略取舍。",
    },
    {
      id: "pm-w10-1-q5",
      question: "Richard Rumelt 在《好战略/坏战略》中如何定义坏战略？",
      options: [
        "执行不力的战略",
        "没有预算支持的战略",
        "主动逃避制定好战略的艰苦工作",
        "竞争对手已经采用的战略",
      ],
      answer: 2,
      rationale:
        "SVPG 引用 Richard Rumelt 的观点：「Bad strategy is the active avoidance of the hard work of crafting a good strategy」。",
    },
    {
      id: "pm-w10-1-q6",
      question: "SVPG 区分的「产品团队」和「功能团队」的核心区别是什么？",
      options: [
        "团队规模不同",
        "产品团队被赋予问题去解决，功能团队被分配功能去实现",
        "薪资水平不同",
        "汇报对象不同",
      ],
      answer: 1,
      rationale:
        "SVPG 强调产品团队（Product Teams）被赋予问题去解决并自主决策，而功能团队（Feature Teams）只是执行上级指令实现功能。",
    },
    {
      id: "pm-w10-1-q7",
      question: "「我们明年要增长 50%」是战略还是目标？",
      options: [
        "这是一个好战略",
        "这是目标，不是战略",
        "这既是目标也是战略",
        "这是路线图",
      ],
      answer: 1,
      rationale:
        "增长 50% 只是目标（Goal），战略是实现目标的路径和方法论。没有说明「如何」实现增长的目标不是战略。",
    },
    {
      id: "pm-w10-1-q8",
      question: "根据 SVPG，产品战略中的「洞察」来源于什么？",
      options: [
        "只来源于竞品分析",
        "来源于研究、数据分析和用户学习",
        "只来源于高管指示",
        "只来源于销售反馈",
      ],
      answer: 1,
      rationale:
        "SVPG 指出洞察「Generated through study, data analysis, and customer learning regarding market dynamics, capabilities, and competitive landscape」。",
    },
    {
      id: "pm-w10-1-q9",
      question: "SVPG 认为很多组织的战略问题是什么？",
      options: [
        "预算太少",
        "有目标和路线图，但缺乏战略",
        "团队太小",
        "技术太落后",
      ],
      answer: 1,
      rationale:
        "SVPG 指出许多组织「a goal (like doubling revenue), and they have a product roadmap (the tactics), yet no product strategy to be found」。",
    },
    {
      id: "pm-w10-1-q10",
      question: "好的产品愿景应该描述多长时间后的状态？",
      options: [
        "6 个月",
        "1 年",
        "3-5 年",
        "10 年以上",
      ],
      answer: 2,
      rationale:
        "产品愿景通常应该描述 3-5 年后产品要实现的状态，足够远以提供方向，但又足够近以保持相关性。",
    },
    {
      id: "pm-w10-1-q11",
      question: "战略中的「管理」要素强调什么样的领导风格？",
      options: [
        "命令和控制型管理",
        "完全放手不管",
        "积极参与的仆人式领导，但不微观管理",
        "只关注结果不关注过程",
      ],
      answer: 2,
      rationale:
        "SVPG 强调管理应该是「Active, engaged leadership using servant-leadership without micromanagement」。",
    },
    {
      id: "pm-w10-1-q12",
      question: "以下哪种情况表明缺乏产品战略？",
      options: [
        "团队清楚知道优先级",
        "同时追求 50 多个计划",
        "有明确的战略取舍",
        "定期回顾和调整方向",
      ],
      answer: 1,
      rationale:
        "SVPG 指出同时追求 50 多个计划是缺乏战略专注的表现。好的战略应该「Deciding what few things you really need to do」。",
    },
  ],
  "pm-w10-2": [
    {
      id: "pm-w10-2-q1",
      question: "Strategyzer 对商业模式画布的定义是什么？",
      options: [
        "一个财务分析工具",
        "一个战略管理和创业工具，用于描述、设计、挑战和转型商业模式",
        "一个项目管理工具",
        "一个用户研究工具",
      ],
      answer: 1,
      rationale:
        "Strategyzer 定义商业模式画布为「a strategic management and entrepreneurial tool」that「allows you to describe, design, challenge, invent, and pivot your business model」。",
    },
    {
      id: "pm-w10-2-q2",
      question: "商业模式画布包含几个核心模块？",
      options: [
        "6 个",
        "7 个",
        "9 个",
        "12 个",
      ],
      answer: 2,
      rationale:
        "商业模式画布包含 9 个核心模块：客户细分、价值主张、渠道通路、客户关系、收入来源、核心资源、关键活动、关键合作、成本结构。",
    },
    {
      id: "pm-w10-2-q3",
      question: "以下哪个不是商业模式画布的九大模块之一？",
      options: [
        "客户细分（Customer Segments）",
        "价值主张（Value Propositions）",
        "竞品分析（Competitor Analysis）",
        "收入来源（Revenue Streams）",
      ],
      answer: 2,
      rationale:
        "竞品分析不是商业模式画布的组成部分。九大模块包括客户细分、价值主张、渠道、客户关系、收入来源、核心资源、关键活动、关键合作、成本结构。",
    },
    {
      id: "pm-w10-2-q4",
      question: "Lean Canvas 是由谁创建的？",
      options: [
        "Alexander Osterwalder",
        "Steve Blank",
        "Ash Maurya",
        "Eric Ries",
      ],
      answer: 2,
      rationale:
        "Lean Canvas 是「a 1-page business modeling tool created by Ash Maurya」，是商业模式画布的创业适应版本。",
    },
    {
      id: "pm-w10-2-q5",
      question: "商业模式的核心是什么？",
      options: [
        "技术创新",
        "价值创造与价值获取的平衡",
        "市场份额",
        "用户数量",
      ],
      answer: 1,
      rationale:
        "商业模式的核心是价值创造（为客户创造价值）和价值获取（从中获得收益）的平衡。这决定了商业模式的可持续性。",
    },
    {
      id: "pm-w10-2-q6",
      question: "Strategyzer 强调商业模式画布的主要用途是什么？",
      options: [
        "只用于融资演示",
        "可视化和传达商业模式的简单故事",
        "只用于初创公司",
        "只用于竞品分析",
      ],
      answer: 1,
      rationale:
        "Strategyzer 强调画布能「Visualize and communicate a simple story of your existing business model」。",
    },
    {
      id: "pm-w10-2-q7",
      question: "Lean Canvas 被多少创业者使用？",
      options: [
        "超过 10 万",
        "超过 50 万",
        "超过 100 万",
        "超过 500 万",
      ],
      answer: 2,
      rationale:
        "Lean Canvas 平台强调其工具「used by over 1 million entrepreneurs worldwide」。",
    },
    {
      id: "pm-w10-2-q8",
      question: "在填写商业模式画布时，应该从哪个模块开始？",
      options: [
        "成本结构",
        "收入来源",
        "客户细分",
        "关键活动",
      ],
      answer: 2,
      rationale:
        "通常建议从客户细分开始，因为了解目标客户是定义价值主张和其他模块的基础。",
    },
    {
      id: "pm-w10-2-q9",
      question: "关于客户细分，以下哪种做法是正确的？",
      options: [
        "定义为「所有人」以覆盖最大市场",
        "具体到可以描述典型用户的一天",
        "只关注付费能力最强的客户",
        "只关注最容易触达的客户",
      ],
      answer: 1,
      rationale:
        "好的客户细分应该具体到可以描述典型用户的一天，而不是泛泛地定义「所有人」为目标客户。",
    },
    {
      id: "pm-w10-2-q10",
      question: "价值主张画布包含哪两个部分？",
      options: [
        "产品侧和销售侧",
        "客户侧和价值主张侧",
        "成本侧和收入侧",
        "内部侧和外部侧",
      ],
      answer: 1,
      rationale:
        "价值主张画布包含两部分：客户侧（任务、痛点、收益）和价值主张侧（产品服务、痛点缓解、收益创造）。",
    },
    {
      id: "pm-w10-2-q11",
      question: "完成一份 Lean Canvas 初稿大约需要多长时间？",
      options: [
        "5 分钟",
        "约 20 分钟",
        "2 小时",
        "1 天",
      ],
      answer: 1,
      rationale:
        "Lean Canvas 设计为帮助创业者「build and validate business models systematically within approximately 20 minutes」。",
    },
    {
      id: "pm-w10-2-q12",
      question: "商业模式画布最重要的应用场景是什么？",
      options: [
        "只用于记录现有商业模式",
        "识别关键假设并系统验证",
        "只用于向投资者演示",
        "只用于内部培训",
      ],
      answer: 1,
      rationale:
        "商业模式画布不仅是描述工具，更是验证工具。使用画布可以识别商业模式中的关键假设，并系统地验证这些假设。",
    },
  ],
  "pm-w10-3": [
    {
      id: "pm-w10-3-q1",
      question: "价值定价（Value-based Pricing）的核心是什么？",
      options: [
        "根据生产成本定价",
        "根据竞品价格定价",
        "根据客户对产品价值的感知定价",
        "根据市场份额定价",
      ],
      answer: 2,
      rationale:
        "价值定价是「根据产品的感知价值而非历史价格或成本来定价的策略」，核心是「客户对产品价值的感知——它对他们值多少钱」。",
    },
    {
      id: "pm-w10-3-q2",
      question: "以下哪个是价值定价的优势？",
      options: [
        "实施简单，不需要市场研究",
        "可以提高品牌价值和利润率",
        "完全不受竞争影响",
        "适用于所有市场",
      ],
      answer: 1,
      rationale:
        "价值定价的优势包括「Increased Brand Value」（提升品牌价值）和「Higher Profits」（更高利润），因为可以根据客户感知收取更高价格。",
    },
    {
      id: "pm-w10-3-q3",
      question: "Freemium 模式的本质是什么？",
      options: [
        "一种变现方式",
        "一种获客方式，将客户放入销售漏斗",
        "一种降低成本的方式",
        "一种提高产品质量的方式",
      ],
      answer: 1,
      rationale:
        "关键洞察：「Freemium isn't a way of monetizing your customers, it's a way of acquiring them. More specifically, it's a way of putting them into your sales funnel」。",
    },
    {
      id: "pm-w10-3-q4",
      question: "SaaS 行业平均 Freemium 转化率是多少？",
      options: [
        "10-15%",
        "5-10%",
        "1-2%",
        "15-20%",
      ],
      answer: 2,
      rationale:
        "「The average freemium conversion rate for a SaaS company is as low as 1-2%」，远低于免费试用的 17% 平均转化率。",
    },
    {
      id: "pm-w10-3-q5",
      question: "Slack 的 Freemium 转化率约为多少？",
      options: [
        "5%",
        "10%",
        "20%",
        "30%",
      ],
      answer: 3,
      rationale:
        "Slack「drives its impressive 30% conversion rate from free to paid plans, significantly outperforming industry averages in the SaaS market」。",
    },
    {
      id: "pm-w10-3-q6",
      question: "价值定价相比成本加成定价的主要劣势是什么？",
      options: [
        "利润更低",
        "难以评估感知价值，实施成本更高",
        "客户不接受",
        "无法竞争",
      ],
      answer: 1,
      rationale:
        "价值定价的劣势包括「Difficult to Implement」（难以实施）和「Higher Implementation Costs」（实施成本更高），因为需要大量研究来评估感知价值。",
    },
    {
      id: "pm-w10-3-q7",
      question: "以下哪个品牌是价值定价的典型案例？",
      options: [
        "沃尔玛",
        "苹果",
        "拼多多",
        "淘宝",
      ],
      answer: 1,
      rationale:
        "「Apple is globally renowned for successfully implementing a value-based pricing strategy」，通过独特功能、设计和用户体验创造感知价值。",
    },
    {
      id: "pm-w10-3-q8",
      question: "设计 Freemium 模式时最关键的挑战是什么？",
      options: [
        "技术实现困难",
        "找到「既能驱动获客又能吸引升级」的功能边界平衡",
        "市场太小",
        "竞品太多",
      ],
      answer: 1,
      rationale:
        "Freemium 设计需要「Tread the line between giving too much and too little by providing functionalities that drive acquisition, activation, and retention for free while still enticing people to upgrade」。",
    },
    {
      id: "pm-w10-3-q9",
      question: "移除免费功能可能带来什么风险？",
      options: [
        "增加开发成本",
        "打破客户信任，导致流失",
        "提高服务器成本",
        "增加竞争压力",
      ],
      answer: 1,
      rationale:
        "「removing free features can break the trust of your customers, causing them to churn before their first purchase」。这是 Freemium 策略失误的严重后果。",
    },
    {
      id: "pm-w10-3-q10",
      question: "Zoom 的增长成功归因于什么 Freemium 策略？",
      options: [
        "低价策略",
        "在核心用例中注入病毒性传播",
        "大量广告投放",
        "并购竞争对手",
      ],
      answer: 1,
      rationale:
        "「Zoom's growth is a textbook example of leveraging this user-acquisition motion by enhancing the freemium model with virality in its core use case」。",
    },
    {
      id: "pm-w10-3-q11",
      question: "价值定价在什么市场环境下效果最好？",
      options: [
        "高度饱和的市场",
        "竞品很少的市场",
        "价格战激烈的市场",
        "衰退期市场",
      ],
      answer: 1,
      rationale:
        "「Value-based pricing works best when a company has few competitors selling similar products」。市场越饱和，越难通过价值竞争。",
    },
    {
      id: "pm-w10-3-q12",
      question: "Freemium 模式成功需要什么前提条件？",
      options: [
        "高单价产品",
        "非常大的市场规模",
        "复杂的产品功能",
        "强大的销售团队",
      ],
      answer: 1,
      rationale:
        "「Freemium is a tough game, and requires a very large market size to truly be successful」，因为转化率只有 1-2%，需要大量免费用户基数。",
    },
  ],
  "pm-w10-4": [
    {
      id: "pm-w10-4-q1",
      question: "产品组合管理的核心定义是什么？",
      options: [
        "管理单个产品的生命周期",
        "将所有产品作为单一战略投资组合来管理",
        "只关注最赚钱的产品",
        "只关注新产品开发",
      ],
      answer: 1,
      rationale:
        "产品组合管理是「将所有产品作为单一战略投资组合来管理的实践」，而非孤立地管理每个产品。",
    },
    {
      id: "pm-w10-4-q2",
      question: "BCG 矩阵是由谁在什么时候创建的？",
      options: [
        "Michael Porter，1979 年",
        "Bruce Henderson，1968 年",
        "Peter Drucker，1954 年",
        "Philip Kotler，1970 年",
      ],
      answer: 1,
      rationale:
        "「The growth share matrix was created in 1968 by BCG's founder Bruce Henderson」，是产品组合分析的经典框架。",
    },
    {
      id: "pm-w10-4-q3",
      question: "BCG 矩阵的两个维度是什么？",
      options: [
        "利润和成本",
        "市场份额和市场增长率",
        "客户满意度和收入",
        "技术先进性和市场规模",
      ],
      answer: 1,
      rationale:
        "BCG 矩阵「outlines four strategic quadrants across two axes」：市场份额（Market Share）和市场增长率（Market Growth Rate）。",
    },
    {
      id: "pm-w10-4-q4",
      question: "在 BCG 矩阵中，「明星」产品的特征是什么？",
      options: [
        "高市场份额，低增长市场",
        "低市场份额，高增长市场",
        "高市场份额，高增长市场",
        "低市场份额，低增长市场",
      ],
      answer: 2,
      rationale:
        "「Stars are units with a high market share in a fast-growing industry」。明星产品具有垄断性竞争优势，是非常有价值的资产。",
    },
    {
      id: "pm-w10-4-q5",
      question: "BCG 矩阵中「金牛」产品的战略是什么？",
      options: [
        "大量投资以扩大市场份额",
        "以尽可能少的投资「挤奶」，获取现金流",
        "立即退出市场",
        "进行激进的营销推广",
      ],
      answer: 1,
      rationale:
        "金牛产品「are to be 'milked' continuously with as little investment as possible」，用产生的现金流投资其他产品。",
    },
    {
      id: "pm-w10-4-q6",
      question: "「问号」产品（Question Marks）的特征和发展方向是什么？",
      options: [
        "高份额低增长，应该维持",
        "低份额高增长，可能成为明星或瘦狗",
        "低份额低增长，应该退出",
        "高份额高增长，应该大量投资",
      ],
      answer: 1,
      rationale:
        "问号产品「operating with low market share in a high-growth market」，「have potential to gain market share and become stars」或退化为瘦狗。",
    },
    {
      id: "pm-w10-4-q7",
      question: "BCG 战略的核心原则是什么？",
      options: [
        "平均投资所有产品",
        "挤奶金牛，投资明星，给问号实验资金，不在瘦狗上浪费钱",
        "只投资明星产品",
        "尽快退出所有瘦狗产品",
      ],
      answer: 1,
      rationale:
        "BCG 战略核心是「milk the cows, don't waste money on the dogs, invest in the stars and give the question marks some experimental funds」。",
    },
    {
      id: "pm-w10-4-q8",
      question: "为什么「静态资源配置会扼杀组合表现」？",
      options: [
        "因为成本太高",
        "因为需要灵活性来随机会或优先级变化而转移资源",
        "因为团队不喜欢变化",
        "因为管理太复杂",
      ],
      answer: 1,
      rationale:
        "有效的产品组合管理需要「flexibility to shift resources as opportunities emerge or priorities change」，避免「资助昨天的优先级」。",
    },
    {
      id: "pm-w10-4-q9",
      question: "产品组合管理如何帮助降低风险？",
      options: [
        "通过减少产品数量",
        "通过多元化投资，拥有不同生命周期阶段和风险特征的产品",
        "通过只投资明星产品",
        "通过避免新产品开发",
      ],
      answer: 1,
      rationale:
        "产品组合管理通过「diversifying the portfolio and spreading investments across multiple products」来降低「market fluctuations, technological disruptions」等风险。",
    },
    {
      id: "pm-w10-4-q10",
      question: "BCG 矩阵的主要局限性是什么？",
      options: [
        "太复杂难以使用",
        "将复杂市场动态简化为过于简单的分类，只考虑两个因素",
        "不适用于 B2B 产品",
        "只适用于初创公司",
      ],
      answer: 1,
      rationale:
        "批评者认为矩阵「reduces complex market dynamics into overly simplistic categories」，且「only two factors needed to assess a product's value」忽略了其他重要因素。",
    },
    {
      id: "pm-w10-4-q11",
      question: "GE-McKinsey 矩阵与 BCG 矩阵相比有什么优势？",
      options: [
        "更简单易用",
        "使用更多维度提供更细致的分析（如行业吸引力和竞争实力）",
        "不需要数据支持",
        "只关注成本",
      ],
      answer: 1,
      rationale:
        "GE-McKinsey 九宫格矩阵「evaluates products using criteria like industry attractiveness and competitive strength」，比 BCG 的两个维度更细致。",
    },
    {
      id: "pm-w10-4-q12",
      question: "产品组合应该多久进行一次审查和再平衡？",
      options: [
        "每年一次",
        "只在问题出现时",
        "定期（如每季度），根据执行情况调整策略",
        "从不需要调整",
      ],
      answer: 2,
      rationale:
        "产品组合需要「regularly reviewing and rebalancing the portfolio to phase out underperforming products and invest in promising new opportunities」，建议建立季度审查机制。",
    },
  ],
}
