import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
  "pm-w1-1": {
    lessonId: "pm-w1-1",
    background: [
      "【角色定义】产品经理是连接业务、用户体验和技术的桥梁，负责定义产品愿景、制定策略并推动产品落地。roadmap.sh 指出 PM 'guides a product through its entire lifecycle—from conception through launch and beyond'。",
      "【核心职责】PM 负责产品的 What（做什么）和 Why（为什么），而非 How（怎么做）。这是与工程师和设计师分工的关键区别——工程师负责 How，设计师负责用户体验。",
      "【Product Owner 角色】Scrum.org 定义 PO 为 'accountable for maximizing the value of the product resulting from the work of the Scrum Team'。PO 在 Scrum 框架中更聚焦于 Backlog 管理，而 PM 通常关注更宏观的产品战略。",
      "【SVPG 产品模型】Silicon Valley Product Group 提出 PM 负责 'value risk'（用户是否需要）和 'viability risk'（商业是否可行），设计师负责 'usability risk'，工程师负责 'feasibility risk'。",
      "【决策权下放】SVPG 强调现代产品模型的核心是将决策权下放给产品团队（product teams），而非让功能团队（feature teams）执行上级指令。",
    ],
    keyDifficulties: [
      "【PM vs PO 混淆】很多组织混用 PM 和 PO 角色。关键区别：PO 是 Scrum 框架中的角色，聚焦于 Backlog 管理；PM 是更广泛的职能，涵盖战略、市场、用户研究等。小公司可能一人兼任，大公司则明确分工。",
      "【四类风险的平衡】产品团队需要同时管理价值风险、可行性风险、可用性风险和商业可行性风险。PM 不能只关注用户需求而忽视商业可行性，也不能只听老板指令而忽视用户价值。",
      "【避免「功能工厂」】Scrum.org 提到 PO 需要 'earn the respect of the entire organization'。如果 PM/PO 只是被动接收需求、排列优先级，就沦为了「功能工厂」的一环。",
      "【利益相关者管理】roadmap.sh 强调 PM 需要 'identifying and engaging stakeholders across the organization'。这需要同时具备技术理解力和商业敏感度。",
    ],
    handsOnPath: [
      "1. 绘制你所在组织的产品团队结构图，标注 PM、PO、设计师、工程师的职责边界",
      "2. 列出你当前产品面临的四类风险（价值、可用性、可行性、商业），评估每类风险的严重程度",
      "3. 与团队讨论：谁负责 What/Why，谁负责 How？是否存在职责模糊地带？",
      "4. 识别你的关键利益相关者，绘制利益相关者地图（影响力 vs 利益相关度）",
      "5. 回顾最近一个月的工作，统计你花在「战略思考」vs「执行协调」的时间比例",
    ],
    selfCheck: [
      "你能用一句话清晰地描述 PM 和 PO 的核心区别吗？",
      "你所在的产品团队是「赋能型团队」还是「功能工厂」？有哪些证据？",
      "你最近做的产品决策中，有多少是基于用户价值，多少是基于老板/销售的要求？",
      "你能说出 SVPG 提出的四类产品风险分别是什么吗？",
      "你与工程师、设计师的协作边界清晰吗？是否存在越界或推诿的情况？",
      "你的产品愿景是什么？团队成员是否都清楚？",
    ],
    extensions: [
      "阅读 Marty Cagan 的《Inspired》深入理解产品团队的运作模式",
      "学习 Scrum Guide 官方文档，理解 PO 在 Scrum 框架中的完整职责",
      "探索不同公司的 PM 职级体系（如 Google、Meta、Airbnb）",
      "研究 PM 与 TPM（技术项目经理）的区别与协作",
    ],
    sourceUrls: [
      "https://roadmap.sh/product-manager",
      "https://www.scrum.org/resources/what-is-a-product-owner",
      "https://www.svpg.com/product-model-competencies/",
    ],
  },
  "pm-w1-2": {
    lessonId: "pm-w1-2",
    background: [
      "【12 项能力模型】Ravi Mehta 提出 PM 的 12 项核心能力分为四大领域：产品执行（构建卓越产品）、客户洞察（理解和满足客户需求）、产品战略（通过创新驱动商业影响）、人员影响力（团队协作与领导）。",
      "【尖锐个人 vs 完整团队】Ravi Mehta 的核心观点是 '个人应该尖锐（Spiky），团队应该完整（Well-rounded）'。基于麦肯锡研究，卓越人才应在自然优势领域精专，而非平衡发展所有能力。",
      "【18 项技能清单】Product School 列出 PM 的 18 项核心技能，包括战略思维、市场敏感度、用户中心设计、技术理解、数据分析、敏捷方法论、路线图制定、优先级排序、沟通能力、团队领导等。",
      "【四种 PM 原型】Ravi Mehta 识别出四种常见 PM 类型：项目经理型（执行强但战略弱）、人员管理型（领导力强但产品能力弱）、增长黑客型（数据驱动但缺乏长期愿景）、产品创新者型（战略眼光独到但执行力弱）。",
      "【能力评估三层级】能力评估采用三层级：需要改进（Needs Focus）、持续发展（On Track）、超群表现（Outperform）。",
    ],
    keyDifficulties: [
      "【避免平庸发展】很多 PM 试图在所有能力上平衡发展，结果变成「样样通，样样松」。Ravi Mehta 建议找到自己的 2-3 个优势能力深耕，其他能力达到基本线即可。",
      "【技术深度的把握】Product School 指出 PM 需要 'grasping technology stacks and development processes'，但不是要成为工程师。关键是能与工程师有效沟通，理解技术约束和可行性。",
      "【软技能 vs 硬技能】PM 的成功往往更依赖软技能（沟通、影响力、同理心）而非硬技能（数据分析、技术理解）。但面试中硬技能更容易评估，导致很多人忽视软技能的培养。",
      "【不同阶段的能力侧重】初级 PM 应侧重产品执行和客户洞察；高级 PM 应侧重产品战略和人员影响力。但很多人在晋升后仍沉迷于执行细节。",
    ],
    handsOnPath: [
      "1. 使用 Ravi Mehta 的 12 项能力模型对自己进行评估，识别优势和待提升领域",
      "2. 找一位信任的同事或上级，请他们从第三方视角评估你的能力",
      "3. 根据评估结果，选择 1-2 个优势能力制定深耕计划",
      "4. 识别你的 PM 原型（项目经理型/人员管理型/增长黑客型/产品创新者型）",
      "5. 制定一个 90 天的能力提升计划，聚焦于最需要改进的 1-2 项能力",
    ],
    selfCheck: [
      "你能说出 PM 的四大能力领域分别是什么吗？",
      "你的优势能力是什么？你有证据支持吗？",
      "你属于哪种 PM 原型？这个原型的典型优势和劣势是什么？",
      "你最近一次主动提升某项 PM 技能是什么时候？学了什么？",
      "你的团队是否「完整」？缺失哪些能力？如何弥补？",
      "如果要给自己的 PM 能力打分（1-10），你会打几分？为什么？",
    ],
    extensions: [
      "使用 Reforge 的 PM Skills Grader 工具进行更详细的能力评估",
      "研究你目标公司的 PM 职级要求，对比自己的能力差距",
      "找一位资深 PM 进行 1:1 交流，请教他们的能力成长路径",
      "阅读《The Product Book》系统学习 PM 的完整技能体系",
    ],
    sourceUrls: [
      "https://www.ravi-mehta.com/product-manager-roles/",
      "https://productschool.com/blog/skills/product-manager-skills",
    ],
  },
  "pm-w1-3": {
    lessonId: "pm-w1-3",
    background: [
      "【生命周期定义】产品生命周期（Product Life Cycle, PLC）是描述产品从进入市场到退出市场的管理框架。Corporate Finance Institute 定义为 'the stages that a product moves through in the marketplace as it enters, becomes established, and exits'。",
      "【六个阶段】HubSpot 将产品生命周期细分为六个阶段：开发期（Development）、引入期（Introduction）、成长期（Growth）、成熟期（Maturity）、饱和期（Saturation）、衰退期（Decline）。",
      "【引入期特点】产品刚上市时，销售量低且增长缓慢，用户认知度低。HubSpot 指出此阶段有两种定价策略：撇脂定价（高价逐步降低）和渗透定价（低价快速占领市场）。",
      "【成长期特点】市场接受度提升，销售快速增长，利润上升。HubSpot 提到 'sales revenue usually grows exponentially from the take-off point'，同时竞争者开始进入市场。",
      "【成熟期挑战】销售趋于平稳，利润率最高但增长停滞。HubSpot 强调 'the biggest challenge is trying to maintain profitability and prevent sales from declining'，客户忠诚度和品牌差异化成为关键。",
      "【衰退期选择】销售下滑，市场萎缩。PM 需要决定是继续投入创新、重新定位，还是逐步退出市场。",
    ],
    keyDifficulties: [
      "【阶段判断困难】很难精确判断产品处于哪个阶段，不同指标可能给出不同信号。销售增长放缓可能是进入成熟期，也可能是暂时的市场波动。",
      "【过早优化】在成长期过早追求利润最大化（如提价、削减研发）可能错失市场机会。反之，在成熟期仍大量投入增长可能浪费资源。",
      "【产品组合平衡】单一产品难以支撑长期业务。需要用成熟期产品的现金流投资新产品，但投资比例和时机很难把握。",
      "【衰退期决策】放弃一个曾经成功的产品在情感上很困难。但过度投入衰退期产品会拖累整体业务。",
    ],
    handsOnPath: [
      "1. 分析你当前负责的产品处于生命周期的哪个阶段，列出支持判断的数据证据",
      "2. 绘制产品的销售/用户增长曲线，识别关键转折点",
      "3. 根据产品所处阶段，评估当前的资源投入是否合理",
      "4. 如果你负责多个产品，绘制产品组合矩阵（波士顿矩阵或 GE 矩阵）",
      "5. 制定一个基于生命周期阶段的策略调整方案",
    ],
    selfCheck: [
      "你能说出产品生命周期的四个核心阶段吗？",
      "你当前的产品处于哪个阶段？你有什么数据支持？",
      "不同阶段的 PM 工作重点有什么区别？",
      "你的产品组合是否健康？是否有足够的「成长期」产品储备？",
      "如果产品进入衰退期，你会如何决策？",
      "撇脂定价和渗透定价分别适用于什么场景？",
    ],
    extensions: [
      "学习波士顿矩阵（BCG Matrix）进行产品组合分析",
      "研究经典案例：柯达胶卷、诺基亚手机的生命周期与决策失误",
      "探索「产品更新」vs「产品退出」的决策框架",
      "学习 AIPMM 的产品管理知识体系（ProdBOK）",
    ],
    sourceUrls: [
      "https://aipmm.com/certification",
      "https://blog.hubspot.com/marketing/product-life-cycle",
      "https://corporatefinanceinstitute.com/resources/management/product-life-cycle/",
    ],
  },
  "pm-w1-4": {
    lessonId: "pm-w1-4",
    background: [
      "【产品发现定义】Teresa Torres 将产品发现定义为 'the work that we do to make decisions about what to build'，与产品交付（执行阶段）形成对比。产品发现回答「做什么」，产品交付回答「怎么做」。",
      "【功能工厂定义】John Cutler 创造的术语「功能工厂」（Feature Factory）指那些只关注交付功能而不关注用户价值的组织。Amplitude 指出这类组织 'prioritize shipping features over understanding their impact'。",
      "【产品思维核心】Product School 定义产品思维为 'developing an independent mindset about customer desires; giving equal weight to form as well as function'。核心是挑战传统假设，如「客户永远是对的」或「功能越多越好」。",
      "【持续发现重要性】Teresa Torres 强调数字产品可以持续迭代改进，因此用户研究不应只在项目开始时进行一次，而应成为持续的习惯。团队应该每周至少与用户有一次交流。",
      "【知识的诅咒】Teresa Torres 提到 'curse of knowledge'——随着产品团队对产品越来越熟悉，他们会逐渐失去用户视角，做出脱离用户需求的决策。",
    ],
    keyDifficulties: [
      "【功能工厂的 12 个信号】Amplitude 列出功能工厂的特征：缺乏结果导向、高 WIP、规定性路线图、有限迭代、孤立的洞察、缺乏一致性、反应式救火、薄弱的决策回顾、过度约束的流程、缺乏共同理解、初级团队隔离、成功表演。",
      "【产品思维 vs 产品管理】Product School 指出产品思维是必要但不充分的条件。PM 还需要商业头脑、利益相关者管理、行业专长、技术流畅度等能力。",
      "【简单 vs 复杂】Product School 强调最成功的产品往往专注于做好一件事，而非试图成为万能解决方案。这与很多组织「加功能」的惯性思维相悖。",
      "【用户反馈的陷阱】产品思维要求超越表面的用户反馈，使用 Jobs-To-Be-Done 等方法理解用户真正的需求，而非简单执行用户的功能请求。",
    ],
    handsOnPath: [
      "1. 对照 Amplitude 的 12 个信号，评估你的团队是否存在「功能工厂」特征",
      "2. 回顾最近发布的 3 个功能，统计有多少是基于用户研究，多少是基于内部需求",
      "3. 设计一个简单的机制，确保团队每周至少与一位用户交流",
      "4. 选择一个即将开发的功能，用 Jobs-To-Be-Done 框架重新定义用户需求",
      "5. 尝试「减法」：识别产品中可以删除或简化的功能",
    ],
    selfCheck: [
      "你能说出「功能工厂」的 3 个典型特征吗？",
      "你的团队最近一次与真实用户交流是什么时候？",
      "你能区分「用户要什么」和「用户需要什么」吗？举一个例子。",
      "你的产品是否存在功能过多、复杂度过高的问题？",
      "什么是「知识的诅咒」？你的团队如何避免？",
      "产品思维和产品管理有什么区别？",
    ],
    extensions: [
      "阅读 Teresa Torres 的《Continuous Discovery Habits》深入学习持续发现方法",
      "学习 Jobs-To-Be-Done 框架，理解用户真正的「任务」",
      "研究成功的「减法」案例：如 Basecamp、Notion 的产品哲学",
      "探索 North Star Metric 框架，建立以价值为导向的度量体系",
    ],
    sourceUrls: [
      "https://www.producttalk.org/2021/08/product-discovery/",
      "https://amplitude.com/blog/12-signs-youre-working-in-a-feature-factory-3-years-later",
      "https://productschool.com/blog/product-fundamentals/product-thinking-vs-product-management",
    ],
  },
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
  "pm-w1-1": [
    {
      id: "pm-w1-1-q1",
      question: "根据 SVPG 的产品模型，产品经理主要负责哪两类风险？",
      options: [
        "可用性风险（Usability Risk）和可行性风险（Feasibility Risk）",
        "价值风险（Value Risk）和商业可行性风险（Viability Risk）",
        "技术风险（Technical Risk）和市场风险（Market Risk）",
        "执行风险（Execution Risk）和战略风险（Strategy Risk）",
      ],
      answer: 1,
      rationale:
        "SVPG 明确指出 Product Manager 'owns value and viability risks'，即价值风险（用户是否需要）和商业可行性风险（对业务是否可行）。可用性风险由设计师负责，可行性风险由工程师负责。",
    },
    {
      id: "pm-w1-1-q2",
      question: "根据 Scrum.org 的定义，Product Owner 的核心职责是什么？",
      options: [
        "编写代码并进行技术决策",
        "管理团队成员的日常工作",
        "最大化产品价值，管理 Product Backlog",
        "设计用户界面和用户体验",
      ],
      answer: 2,
      rationale:
        "Scrum.org 明确定义 Product Owner 'is accountable for maximizing the value of the product resulting from the work of the Scrum Team'，并负责 Product Backlog 的管理。",
    },
    {
      id: "pm-w1-1-q3",
      question: "产品经理主要负责产品的哪两个方面？",
      options: [
        "What（做什么）和 How（怎么做）",
        "What（做什么）和 Why（为什么）",
        "How（怎么做）和 When（什么时候）",
        "Why（为什么）和 Who（给谁做）",
      ],
      answer: 1,
      rationale:
        "roadmap.sh 指出产品经理负责产品的 What（做什么）和 Why（为什么做），而 How（怎么做）通常由工程师和设计师负责。这是 PM 与其他角色的关键分工。",
    },
    {
      id: "pm-w1-1-q4",
      question: "SVPG 提出的现代产品模型强调什么核心转变？",
      options: [
        "从敏捷开发转向瀑布开发",
        "从功能团队执行上级指令转向产品团队自主决策",
        "从用户研究转向数据分析",
        "从产品经理主导转向工程师主导",
      ],
      answer: 1,
      rationale:
        "SVPG 强调现代产品模型的核心是 'pushing decision-making responsibility to product teams rather than having feature teams serve business mandates'，即赋能产品团队自主决策。",
    },
    {
      id: "pm-w1-1-q5",
      question: "根据 Scrum.org，Product Owner 在组织中需要获得什么？",
      options: [
        "最高的薪资待遇",
        "独立的办公空间",
        "整个组织的尊重和支持",
        "技术团队的代码审查权",
      ],
      answer: 2,
      rationale:
        "Scrum.org 指出 Product Owner 必须 'earn the respect of the entire organization' 才能有效地做出产品决策并获得支持。",
    },
    {
      id: "pm-w1-1-q6",
      question: "roadmap.sh 指出产品经理需要管理哪些利益相关者？",
      options: [
        "只需要管理工程团队",
        "只需要管理用户和客户",
        "需要识别和管理整个组织的利益相关者",
        "只需要管理直接上级",
      ],
      answer: 2,
      rationale:
        "roadmap.sh 强调 PM 需要 'identifying and engaging stakeholders across the organization'，包括跨部门的各类利益相关者。",
    },
    {
      id: "pm-w1-1-q7",
      question: "以下哪个不是 SVPG 产品模型中的四类风险之一？",
      options: [
        "价值风险（Value Risk）",
        "可用性风险（Usability Risk）",
        "竞争风险（Competition Risk）",
        "可行性风险（Feasibility Risk）",
      ],
      answer: 2,
      rationale:
        "SVPG 的四类风险是：Value Risk（用户需求）、Viability Risk（商业可行性）、Usability Risk（可用性）、Feasibility Risk（技术可行性）。竞争风险不在其中。",
    },
    {
      id: "pm-w1-1-q8",
      question: "Scrum.org 指出 Product Owner 可以采用哪些「姿态」（Stances）？",
      options: [
        "只有决策者一种姿态",
        "愿景者、协作者、客户代表、决策者、实验者、影响者",
        "只有项目经理和产品经理两种姿态",
        "技术专家、设计师、运营者",
      ],
      answer: 1,
      rationale:
        "Scrum.org 指出 Product Owner 可以采用多种姿态：Visionary, Collaborator, Customer Representative, Decision Maker, Experimenter, and Influencer，根据情境灵活切换。",
    },
    {
      id: "pm-w1-1-q9",
      question: "关于 Product Owner 的决策权，Scrum.org 强调什么？",
      options: [
        "所有决策需要委员会投票",
        "PO 是一个人而非委员会，拥有最终决策权",
        "决策权归 Scrum Master 所有",
        "决策权归开发团队所有",
      ],
      answer: 1,
      rationale:
        "Scrum.org 明确指出 'The Product Owner is one person, not a committee'，强调 PO 对 Backlog 拥有最终决策权。",
    },
    {
      id: "pm-w1-1-q10",
      question: "SVPG 产品模型中，谁负责「可用性风险」（Usability Risk）？",
      options: [
        "产品经理",
        "产品设计师",
        "技术负责人",
        "项目经理",
      ],
      answer: 1,
      rationale:
        "SVPG 明确指出 Product Designer 'owns usability risk'，负责确保用户能够理解和使用产品。",
    },
    {
      id: "pm-w1-1-q11",
      question: "roadmap.sh 列出的 PM 核心能力领域包括以下哪些？",
      options: [
        "编程、设计、测试、运维",
        "战略规划、开发执行、指标分析、利益相关者管理",
        "财务、法务、人事、行政",
        "销售、市场、客服、物流",
      ],
      answer: 1,
      rationale:
        "roadmap.sh 列出的 PM 核心领域包括：Product Strategy & Planning（战略规划）、Development & Execution（开发执行）、Metrics & Analysis（指标分析）、Stakeholder Management（利益相关者管理）。",
    },
    {
      id: "pm-w1-1-q12",
      question: "根据 SVPG，产品领导者（Product Leaders）的核心职责是什么？",
      options: [
        "亲自编写所有产品需求文档",
        "招募、辅导团队成员，制定产品愿景和战略",
        "只负责日常会议协调",
        "只负责向上级汇报进展",
      ],
      answer: 1,
      rationale:
        "SVPG 指出产品领导者的职责是 'recruit, coach, and develop team members while creating product vision, strategy, and team structure'。",
    },
  ],
  "pm-w1-2": [
    {
      id: "pm-w1-2-q1",
      question: "Ravi Mehta 提出的 PM 能力模型包含几项核心能力？",
      options: [
        "6 项",
        "12 项",
        "18 项",
        "24 项",
      ],
      answer: 1,
      rationale:
        "Ravi Mehta 提出的 PM 能力框架包含 12 项核心能力，分为四大领域：产品执行、客户洞察、产品战略、人员影响力。",
    },
    {
      id: "pm-w1-2-q2",
      question: "Ravi Mehta 关于个人能力发展的核心观点是什么？",
      options: [
        "个人应该平衡发展所有能力",
        "个人应该「尖锐」（Spiky），团队应该「完整」（Well-rounded）",
        "所有人都应该成为全能型 PM",
        "能力发展不重要，经验最重要",
      ],
      answer: 1,
      rationale:
        "Ravi Mehta 的核心观点是 '个人应该尖锐（Spiky），团队应该完整（Well-rounded）'，即个人应在优势领域深耕，而非平均发展。",
    },
    {
      id: "pm-w1-2-q3",
      question: "根据 Product School，以下哪项不是 PM 的 18 项核心技能之一？",
      options: [
        "战略思维（Strategic Thinking）",
        "数据分析（Data Analysis）",
        "编程能力（Programming）",
        "同理心（Empathy）",
      ],
      answer: 2,
      rationale:
        "Product School 列出的 18 项技能包括战略思维、数据分析、同理心等，但不包括编程能力。PM 需要技术理解力，但不需要编程。",
    },
    {
      id: "pm-w1-2-q4",
      question: "Ravi Mehta 识别的四种 PM 原型中，「项目经理型」PM 的典型特征是什么？",
      options: [
        "战略眼光独到但执行力弱",
        "执行能力强但缺乏战略思维",
        "数据驱动、快速迭代优化",
        "领导力强但产品能力薄弱",
      ],
      answer: 1,
      rationale:
        "Ravi Mehta 指出「项目经理型」PM 的特点是执行能力强但缺乏战略思维，需要强化客户洞察与产品战略能力。",
    },
    {
      id: "pm-w1-2-q5",
      question: "Ravi Mehta 的能力评估采用几个层级？",
      options: [
        "两个层级：通过/不通过",
        "三个层级：需要改进、持续发展、超群表现",
        "四个层级：初级、中级、高级、专家",
        "五个层级：很差、差、一般、好、很好",
      ],
      answer: 1,
      rationale:
        "Ravi Mehta 的能力评估采用三层级：Needs Focus（需要改进）、On Track（持续发展）、Outperform（超群表现）。",
    },
    {
      id: "pm-w1-2-q6",
      question: "Product School 指出 PM 在技术方面需要具备什么能力？",
      options: [
        "能够独立完成所有编程任务",
        "理解技术栈和开发流程，能与工程师有效沟通",
        "不需要任何技术理解",
        "需要通过技术认证考试",
      ],
      answer: 1,
      rationale:
        "Product School 指出 PM 需要 'grasping technology stacks and development processes'，关键是能与工程师有效沟通，而非亲自编程。",
    },
    {
      id: "pm-w1-2-q7",
      question: "Ravi Mehta 的 12 项能力分为哪四大领域？",
      options: [
        "技术、设计、运营、销售",
        "产品执行、客户洞察、产品战略、人员影响力",
        "规划、开发、测试、发布",
        "用户研究、竞品分析、需求管理、项目管理",
      ],
      answer: 1,
      rationale:
        "Ravi Mehta 的 12 项能力分为四大领域：产品执行（构建卓越产品）、客户洞察（理解客户需求）、产品战略（驱动商业影响）、人员影响力（团队协作与领导）。",
    },
    {
      id: "pm-w1-2-q8",
      question: "根据 Product School，「市场敏感度」（Market Sensitivity）指什么？",
      options: [
        "对股票市场的了解",
        "理解市场趋势、竞争动态和消费者行为变化",
        "销售产品的能力",
        "定价策略的制定",
      ],
      answer: 1,
      rationale:
        "Product School 定义市场敏感度为 'understanding trends, competitive dynamics, and consumer behavior shifts'。",
    },
    {
      id: "pm-w1-2-q9",
      question: "「增长黑客型」PM 的典型特征和发展方向是什么？",
      options: [
        "执行能力强，需要强化战略思维",
        "数据驱动、快速迭代优化，可补强创新与长期愿景能力",
        "领导力强，需要发展产品设计能力",
        "战略眼光独到，需要配备执行型搭档",
      ],
      answer: 1,
      rationale:
        "Ravi Mehta 指出「增长黑客型」PM 的特点是数据驱动、快速迭代优化，发展方向是补强创新与长期愿景能力。",
    },
    {
      id: "pm-w1-2-q10",
      question: "Product School 列出的 PM 软技能包括以下哪些？",
      options: [
        "编程、设计、测试",
        "问题解决创造力、适应性、同理心",
        "财务分析、法律知识、人事管理",
        "硬件维护、网络配置、系统管理",
      ],
      answer: 1,
      rationale:
        "Product School 列出的软技能包括 Problem-Solving Creativity（问题解决创造力）、Adaptability（适应性）、Empathy（同理心）。",
    },
    {
      id: "pm-w1-2-q11",
      question: "Ravi Mehta 的能力框架基于哪家咨询公司的研究？",
      options: [
        "波士顿咨询（BCG）",
        "麦肯锡（McKinsey）",
        "贝恩（Bain）",
        "埃森哲（Accenture）",
      ],
      answer: 1,
      rationale:
        "Ravi Mehta 的框架基于麦肯锡（McKinsey）的研究，该研究表明卓越人才应在自然优势领域精专，而非平衡发展。",
    },
    {
      id: "pm-w1-2-q12",
      question: "Product School 指出「路线图制定」（Roadmapping）能力的核心是什么？",
      options: [
        "制定详细的项目计划表",
        "定义产品随时间发展的路径，结合战略愿景",
        "跟踪团队成员的工作时间",
        "管理产品的技术架构",
      ],
      answer: 1,
      rationale:
        "Product School 定义 Roadmapping 为 'defining the path a product will take over time with strategic vision'。",
    },
  ],
  "pm-w1-3": [
    {
      id: "pm-w1-3-q1",
      question: "产品生命周期（PLC）的四个核心阶段是什么？",
      options: [
        "计划、开发、测试、发布",
        "引入期、成长期、成熟期、衰退期",
        "设计、实现、验证、维护",
        "调研、分析、执行、复盘",
      ],
      answer: 1,
      rationale:
        "产品生命周期的四个核心阶段是：Introduction（引入期）、Growth（成长期）、Maturity（成熟期）、Decline（衰退期）。",
    },
    {
      id: "pm-w1-3-q2",
      question: "根据 HubSpot，引入期有哪两种主要的定价策略？",
      options: [
        "成本定价和竞争定价",
        "撇脂定价（Price Skimming）和渗透定价（Price Penetration）",
        "高端定价和低端定价",
        "固定定价和动态定价",
      ],
      answer: 1,
      rationale:
        "HubSpot 指出引入期有两种定价策略：Price Skimming（撇脂定价，高价逐步降低）和 Price Penetration（渗透定价，低价快速占领市场）。",
    },
    {
      id: "pm-w1-3-q3",
      question: "HubSpot 将产品生命周期细分为几个阶段？",
      options: [
        "4 个阶段",
        "5 个阶段",
        "6 个阶段",
        "7 个阶段",
      ],
      answer: 2,
      rationale:
        "HubSpot 将产品生命周期细分为 6 个阶段：Development（开发期）、Introduction（引入期）、Growth（成长期）、Maturity（成熟期）、Saturation（饱和期）、Decline（衰退期）。",
    },
    {
      id: "pm-w1-3-q4",
      question: "根据 HubSpot，成长期的典型特征是什么？",
      options: [
        "销售下滑，利润减少",
        "销售快速增长，利润上升，竞争者开始进入",
        "销售稳定，利润最高",
        "产品尚未上市",
      ],
      answer: 1,
      rationale:
        "HubSpot 指出成长期 'sales revenue usually grows exponentially from the take-off point'，同时竞争者开始进入市场。",
    },
    {
      id: "pm-w1-3-q5",
      question: "成熟期面临的最大挑战是什么？",
      options: [
        "如何获取第一批用户",
        "如何维持盈利能力并防止销售下滑",
        "如何完成产品开发",
        "如何退出市场",
      ],
      answer: 1,
      rationale:
        "HubSpot 明确指出成熟期 'the biggest challenge is trying to maintain profitability and prevent sales from declining'。",
    },
    {
      id: "pm-w1-3-q6",
      question: "产品生命周期概念是由谁在哪一年提出的？",
      options: [
        "Peter Drucker，1954 年",
        "Theodore Levitt，1965 年",
        "Philip Kotler，1970 年",
        "Michael Porter，1980 年",
      ],
      answer: 1,
      rationale:
        "搜索结果显示 'The concept of the product life cycle was introduced in 1965 by a German economist — Theodore Levitt'。",
    },
    {
      id: "pm-w1-3-q7",
      question: "以下哪个是打字机产品生命周期的正确描述？",
      options: [
        "打字机仍处于成长期",
        "打字机从 19 世纪末引入，20 世纪成熟，80 年代后被电脑取代而衰退",
        "打字机从未进入成熟期",
        "打字机目前处于饱和期",
      ],
      answer: 1,
      rationale:
        "搜索结果显示打字机 '1800s commercial typewriters were available（引入期）→ adoption spread（成长期）→ stayed dominant through much of the 20th century（成熟期）→ 1980s personal computers took over（衰退期）'。",
    },
    {
      id: "pm-w1-3-q8",
      question: "根据 Corporate Finance Institute，PM 可以利用 PLC 模型做什么？",
      options: [
        "只能用于制定价格",
        "分配资源、确定优先级、规划营销预算、识别创新机会",
        "只能用于预测销售",
        "只能用于竞品分析",
      ],
      answer: 1,
      rationale:
        "Corporate Finance Institute 指出 PM 可以利用 PLC 'allocate resources, prioritize initiatives, determine marketing budgets, and identify innovation opportunities'。",
    },
    {
      id: "pm-w1-3-q9",
      question: "在饱和期，HubSpot 建议采用什么策略？",
      options: [
        "大幅提高价格",
        "停止所有营销投入",
        "实施细分策略和忠诚度计划",
        "立即退出市场",
      ],
      answer: 2,
      rationale:
        "HubSpot 建议在饱和期 'implement segmentation strategies and loyalty programs' 以维持市场份额。",
    },
    {
      id: "pm-w1-3-q10",
      question: "AIPMM 强调其认证适用于什么范围的产品？",
      options: [
        "只适用于软件产品",
        "只适用于消费品",
        "适用于任何行业或产品阶段",
        "只适用于医药产品",
      ],
      answer: 2,
      rationale:
        "AIPMM 强调其认证适用于 '任何行业或产品阶段'——从医药产品开发到制造设备零件退役的全生命周期。",
    },
    {
      id: "pm-w1-3-q11",
      question: "HubSpot 建议在引入期采用什么营销策略？",
      options: [
        "大规模广告投放",
        "内容营销和影响者合作进行教育",
        "价格战",
        "停止所有营销活动",
      ],
      answer: 1,
      rationale:
        "HubSpot 建议在引入期 'Use content marketing and influencer partnerships for education' 来建立用户认知。",
    },
    {
      id: "pm-w1-3-q12",
      question: "根据案例，电动汽车目前处于产品生命周期的哪个阶段？",
      options: [
        "引入期",
        "成长期",
        "成熟期",
        "衰退期",
      ],
      answer: 1,
      rationale:
        "搜索结果明确指出 'Electric vehicles are currently in the growth stage, therefore, their demand is picking up'。",
    },
  ],
  "pm-w1-4": [
    {
      id: "pm-w1-4-q1",
      question: "根据 Teresa Torres，「产品发现」的定义是什么？",
      options: [
        "编写代码的过程",
        "决定「做什么」的工作",
        "测试产品的过程",
        "销售产品的活动",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 定义产品发现为 'the work that we do to make decisions about what to build'，即决定「做什么」的工作。",
    },
    {
      id: "pm-w1-4-q2",
      question: "「功能工厂」（Feature Factory）这个术语是由谁创造的？",
      options: [
        "Teresa Torres",
        "Marty Cagan",
        "John Cutler",
        "Ravi Mehta",
      ],
      answer: 2,
      rationale:
        "搜索结果显示 'Feature factory is a term coined by John Cutler'，他在听到开发者朋友的抱怨后创造了这个术语。",
    },
    {
      id: "pm-w1-4-q3",
      question: "根据 Amplitude，功能工厂的核心问题是什么？",
      options: [
        "开发速度太慢",
        "优先考虑交付功能而非理解其影响",
        "团队人数太少",
        "技术栈太旧",
      ],
      answer: 1,
      rationale:
        "Amplitude 指出功能工厂 'prioritize shipping features over understanding their impact'，即只关注交付而不关注价值。",
    },
    {
      id: "pm-w1-4-q4",
      question: "Teresa Torres 建议产品团队多久与用户交流一次？",
      options: [
        "每年一次",
        "每季度一次",
        "每周至少一次",
        "只在项目开始时",
      ],
      answer: 2,
      rationale:
        "Teresa Torres 强调团队应该 'every week at least have one conversation with a customer'，将用户研究变成持续的习惯。",
    },
    {
      id: "pm-w1-4-q5",
      question: "Product School 定义的「产品思维」的核心是什么？",
      options: [
        "尽可能多地添加功能",
        "发展独立的用户需求理解，同等重视形式和功能",
        "只关注技术实现",
        "只听从客户的所有要求",
      ],
      answer: 1,
      rationale:
        "Product School 定义产品思维为 'developing an independent mindset about customer desires; giving equal weight to form as well as function'。",
    },
    {
      id: "pm-w1-4-q6",
      question: "根据 Amplitude，以下哪个是功能工厂的典型特征？",
      options: [
        "低在制品（WIP）数量",
        "高在制品（WIP）数量，优化让人保持忙碌",
        "频繁的用户访谈",
        "灵活的路线图",
      ],
      answer: 1,
      rationale:
        "Amplitude 指出 'Running high WIP and optimizing for keeping people busy is at the heart of many feature factory anti-patterns'。",
    },
    {
      id: "pm-w1-4-q7",
      question: "Teresa Torres 提到的「知识的诅咒」指什么？",
      options: [
        "学习太多知识会变笨",
        "团队对产品越熟悉，越容易失去用户视角",
        "知识产权的法律问题",
        "技术知识过时的问题",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 提到 'curse of knowledge'——随着产品团队对产品越来越熟悉，他们会逐渐失去用户视角。",
    },
    {
      id: "pm-w1-4-q8",
      question: "Product School 认为产品思维和产品管理的关系是什么？",
      options: [
        "产品思维和产品管理是同一回事",
        "产品思维是产品管理的充分条件",
        "产品思维是产品管理的必要但不充分条件",
        "产品思维和产品管理没有关系",
      ],
      answer: 2,
      rationale:
        "Product School 明确指出 'Product Thinking is a necessary but not sufficient condition to call yourself a Product Manager'。",
    },
    {
      id: "pm-w1-4-q9",
      question: "根据 Product School，产品思维要求挑战哪些传统假设？",
      options: [
        "技术永远在进步",
        "「客户永远是对的」和「功能越多越好」",
        "市场总是在增长",
        "竞争对手总是更强",
      ],
      answer: 1,
      rationale:
        "Product School 指出产品思维要求 'Challenge Legacy Approaches' 如 'the customer is always right' 和 'more features are better'。",
    },
    {
      id: "pm-w1-4-q10",
      question: "根据 Amplitude，避免功能工厂的方法包括以下哪些？",
      options: [
        "增加 WIP、加快交付速度",
        "降低 WIP、建立共同词汇、进行决策回顾",
        "减少与客户的接触",
        "让管理层做所有决策",
      ],
      answer: 1,
      rationale:
        "Amplitude 建议 'Lower WIP'、'Build shared vocabulary'、'Conduct decision reviews' 等方法来避免功能工厂。",
    },
    {
      id: "pm-w1-4-q11",
      question: "Teresa Torres 提出的产品发现三阶段是什么？",
      options: [
        "设计、开发、测试",
        "从结果出发、发现机会、测试解决方案",
        "调研、分析、执行",
        "规划、实施、复盘",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 的框架是三阶段：Start with outcomes（从结果出发）、Discover opportunities（发现机会）、Test solutions（测试解决方案）。",
    },
    {
      id: "pm-w1-4-q12",
      question: "根据搜索结果，从功能工厂转型为价值导向型组织通常需要多长时间？",
      options: [
        "1-2 个月",
        "3-6 个月",
        "12-18 个月",
        "3-5 年",
      ],
      answer: 2,
      rationale:
        "Amplitude 指出结果导向的工作需要技能培养，'typically 12-18 months' 才能完成转型。",
    },
  ],
}
