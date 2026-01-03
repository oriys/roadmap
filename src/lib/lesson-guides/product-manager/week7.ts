import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
  "pm-w7-1": {
    lessonId: "pm-w7-1",
    background: [
      "【敏捷宣言四大价值观】敏捷宣言于 2001 年由 17 位软件开发先驱共同制定，提出四大价值观：「个体和互动 高于 流程和工具」「可工作的软件 高于 详尽的文档」「客户合作 高于 合同谈判」「响应变化 高于 遵循计划」。宣言强调「虽然右侧的项目也有价值，但我们更重视左侧的项目」。",
      "【十二条原则之核心】敏捷宣言包含十二条原则，其中「我们最高优先级是通过早期和持续交付有价值的软件来满足客户」被列为第一条。原则还强调「欢迎变化的需求，即使在开发后期」，因为敏捷过程利用变化为客户创造竞争优势。",
      "【持续交付与协作】原则指出「频繁交付可工作的软件，周期从几周到几个月，倾向于更短的周期」。同时强调「业务人员和开发者必须在整个项目中每天一起工作」，打破传统的部门壁垒。",
      "【自组织团队与持续改进】原则明确「最好的架构、需求和设计来自自组织团队」，并要求「团队定期反思如何变得更有效，然后相应调整其行为」。这是敏捷回顾会议的理论基础。",
      "【经验主义三支柱】Scrum Alliance 指出敏捷基于经验主义的三个支柱：透明性（Transparency）、检视（Inspection）、适应（Adaptation）。这意味着决策基于观察到的事实而非预测。",
    ],
    keyDifficulties: [
      "【价值观的误读】很多人误解「可工作的软件 高于 详尽的文档」意味着不需要文档。正确理解是：文档仍有价值，但不应成为交付的障碍。适量的、有用的文档是必要的。",
      "【敏捷 vs 无规划】敏捷不是没有规划，而是「适应性规划」。敏捷强调「响应变化」不等于「没有计划」，而是在保持灵活性的同时有清晰的方向。",
      "【形式主义陷阱】很多团队只是「做敏捷」（Doing Agile）而非「成为敏捷」（Being Agile）。真正的敏捷需要思维方式和文化的转变，而非仅仅采用站会、看板等形式。",
      "【自组织的边界】自组织团队不意味着无人负责或无人管理。产品负责人仍然对产品价值负责，Scrum Master 仍然对过程负责，但执行决策权下放给团队。",
    ],
    handsOnPath: [
      "1. 阅读敏捷宣言原文（agilemanifesto.org），理解每条价值观和原则的含义",
      "2. 评估你当前团队在四大价值观上的表现（1-5 分），识别最需改进的领域",
      "3. 列出团队当前的「反敏捷」实践（如过度文档、长周期发布等）",
      "4. 选择一条原则，设计一个可以在下周实践的改进措施",
      "5. 与团队讨论：我们是「做敏捷」还是「成为敏捷」？有什么证据？",
    ],
    selfCheck: [
      "你能说出敏捷宣言的四大价值观吗？",
      "你能解释「高于」（over）的正确含义吗？",
      "你的团队多久交付一次可工作的软件？符合敏捷原则吗？",
      "业务人员和开发者是否「每天一起工作」？如果没有，障碍是什么？",
      "团队多久进行一次反思和调整？效果如何？",
      "你能说出经验主义的三个支柱吗？",
    ],
    extensions: [
      "阅读《敏捷宣言》十七位作者的访谈，了解背后的思考",
      "学习敏捷与传统瀑布模型的核心区别",
      "探索不同敏捷框架（Scrum、Kanban、XP）如何体现敏捷价值观",
      "研究「敏捷转型」失败的常见原因和教训",
    ],
    sourceUrls: [
      "https://agilemanifesto.org/",
      "https://www.atlassian.com/agile",
      "https://www.scrumalliance.org/about-scrum/overview",
    ],
  },
  "pm-w7-2": {
    lessonId: "pm-w7-2",
    background: [
      "【Scrum 定义】Scrum Guide 定义 Scrum 为「一个轻量级框架，帮助人们、团队和组织通过针对复杂问题的适应性解决方案产生价值」。它起源于 1986 年《哈佛商业评论》的一篇文章，将高绩效团队比喻为橄榄球的 Scrum 阵型。",
      "【三个角色】Scrum 团队由三个角色组成：产品负责人（Product Owner）「对最大化产品价值负责」，开发团队（Developers）「致力于在每个 Sprint 中创建可用增量」，Scrum Master「对建立 Scrum Guide 中定义的 Scrum 负责」并服务于团队和组织。",
      "【五个仪式】Scrum 的五个仪式包括：Sprint（固定时长的容器）、Sprint Planning（确定 Sprint 目标和待办事项，限时 8 小时）、Daily Scrum（15 分钟同步进展）、Sprint Review（检视成果并与利益相关者协作，限时 4 小时）、Sprint Retrospective（反思改进点，限时 3 小时）。",
      "【三个产出物】Scrum 的三个产出物是：Product Backlog（产品待办事项列表，「唯一的工作来源」）、Sprint Backlog（Sprint 待办事项，包含 Sprint 目标、选定项和交付计划）、Increment（符合完成定义的可用产品增量）。",
      "【五个价值观】Scrum 团队体现五个核心价值观：承诺（Commitment）、勇气（Courage）、聚焦（Focus）、开放（Openness）、尊重（Respect）。这些价值观创造了一个成员相互信任、敢于质疑阻碍成功方法的文化。",
    ],
    keyDifficulties: [
      "【Product Owner 的职责边界】很多组织将 PO 降级为「需求传话筒」或「Backlog 管理员」。Scrum Guide 强调 PO 对「最大化产品价值」负责，需要有决策权和商业判断能力，不只是排列优先级。",
      "【Sprint 长度的选择】Sprint 长度通常为 1-4 周，最常见 2 周。太长会降低反馈频率，太短会增加仪式开销。关键是保持一致，让团队建立节奏感。",
      "【完成定义（Definition of Done）】很多团队没有明确的完成定义，导致「完成」含义模糊。完成定义应包括代码审查、测试、文档等质量标准，是产出 Increment 的基准。",
      "【Scrum Master 的价值】Scrum Master 不是项目经理、团队秘书或会议组织者。其核心职责是帮助团队理解和应用 Scrum，移除障碍，促进持续改进。很多组织低估或误用这个角色。",
    ],
    handsOnPath: [
      "1. 绘制你团队的 Scrum 角色分工图，标注每个角色的实际职责",
      "2. 评估团队的五个仪式：是否都在进行？时间限制是否遵守？",
      "3. 检查你的 Product Backlog：是否有明确的产品目标？条目是否按优先级排序？",
      "4. 审视完成定义（DoD）：是否明确？团队是否一致遵守？",
      "5. 观察最近一次 Sprint Retrospective：产出了具体的改进行动吗？",
      "6. 识别当前 Scrum 实践中最需要改进的一个环节",
    ],
    selfCheck: [
      "你能说出 Scrum 的三个角色和各自的核心职责吗？",
      "你能列出 Scrum 的五个仪式及其时间限制吗？",
      "你的团队的 Sprint 长度是多少？为什么选择这个长度？",
      "你们的完成定义是什么？团队是否一致理解和遵守？",
      "Product Owner 是否真正对产品价值负责？还是只是需求传话筒？",
      "Scrum Master 的主要工作是什么？是否发挥了应有的作用？",
    ],
    extensions: [
      "阅读官方 Scrum Guide（scrumguides.org），了解 Scrum 的权威定义",
      "学习 Scrum.org 的 Product Owner 学习路径",
      "探索 Scrum 与其他敏捷框架（如 Kanban、SAFe）的区别和结合",
      "研究常见的「Scrum 反模式」及如何避免",
    ],
    sourceUrls: [
      "https://scrumguides.org/scrum-guide.html",
      "https://www.scrum.org/pathway/product-owner-learning-path",
      "https://www.atlassian.com/agile/scrum",
    ],
  },
  "pm-w7-3": {
    lessonId: "pm-w7-3",
    background: [
      "【Kanban 起源】Kanban 源自日语，意为「视觉信号」或「卡片」。它起源于丰田生产系统（TPS），是一种拉动式生产方法。现代软件开发中的 Kanban 由 David J. Anderson 在 2000 年代推广。",
      "【核心原则一：可视化工作流】Kanban 的首要原则是将工作流程可视化。通过看板（Board）将任务状态一目了然地展示出来，帮助团队「实时获得准确的状态报告」。典型列包括：待办、进行中、已完成。",
      "【核心原则二：限制在制品（WIP）】WIP（Work in Progress）限制是 Kanban 的关键机制。通过限制每个阶段的任务数量，避免多任务切换带来的效率损失，聚焦完成而非开始新任务。",
      "【核心原则三：管理流动】Kanban 强调「加速流动并消除价值流中的浪费」。通过测量周期时间（Cycle Time）和吞吐量（Throughput），识别瓶颈并持续优化流程。",
      "【持续改进文化】Kanban 倡导「按照您认为合适的方式设置流程」，允许自定义工作流，同时通过持续改进不断优化。它不要求激进的变革，而是「从现有状态开始，逐步改进」。",
    ],
    keyDifficulties: [
      "【WIP 限制的执行】很多团队设置了 WIP 限制但不严格执行。WIP 限制的价值在于暴露瓶颈——当某列触及限制时，团队应停止开始新任务，转而帮助解决阻塞。",
      "【Kanban vs Scrum 的选择】Kanban 没有固定的迭代周期，适合持续交付和运维场景；Scrum 有固定 Sprint，适合需要规划和评估的项目。很多团队采用 Scrumban（两者结合）。",
      "【看板设计的陷阱】常见错误是看板过于复杂（太多列）或过于简单（无法反映真实流程）。好的看板应该反映实际工作流程，每一列都有明确的准入和准出标准。",
      "【度量的误用】Cycle Time 和 Throughput 是有价值的度量，但不应成为考核工具。它们的目的是帮助识别系统问题，而非评估个人绩效。",
    ],
    handsOnPath: [
      "1. 绘制你团队当前的工作流程，识别主要阶段（如需求、开发、测试、发布）",
      "2. 创建一个简单的看板，将当前所有进行中的任务可视化",
      "3. 统计每个阶段的任务数量，识别积压最严重的阶段",
      "4. 为每个阶段设置一个初始 WIP 限制（建议：团队人数 × 1.5）",
      "5. 测量最近 10 个任务的周期时间（从开始到完成的天数）",
      "6. 进行一次流程改进讨论：瓶颈在哪里？如何解决？",
    ],
    selfCheck: [
      "你能说出 Kanban 的三个核心原则吗？",
      "什么是 WIP 限制？为什么它很重要？",
      "你的团队有使用看板吗？是否有 WIP 限制？",
      "你知道团队的平均周期时间是多少吗？",
      "Kanban 和 Scrum 的主要区别是什么？各自适用于什么场景？",
      "看板上是否有任务卡停滞很久？原因是什么？",
    ],
    extensions: [
      "学习 Kanban 的「六大实践」和「变革管理原则」",
      "探索如何使用累积流图（Cumulative Flow Diagram）分析流程健康度",
      "研究 Scrumban 如何结合 Scrum 和 Kanban 的优点",
      "学习 Kanban 成熟度模型（KMM）评估组织的 Kanban 实践水平",
    ],
    sourceUrls: [
      "https://businessmap.io/kanban-resources/getting-started/what-is-kanban",
      "https://www.atlassian.com/agile/kanban",
      "https://www.planview.com/resources/guide/introduction-to-kanban/",
    ],
  },
  "pm-w7-4": {
    lessonId: "pm-w7-4",
    background: [
      "【Sprint Planning 定义】Scrum Guide 指出 Sprint Planning「通过规划要在 Sprint 中执行的工作来启动 Sprint」。会议需要回答三个问题：为什么这个 Sprint 有价值？可以完成什么？如何完成选定的工作？",
      "【Sprint 目标的重要性】Sprint Planning 的首要产出是 Sprint Goal（Sprint 目标），它为 Sprint 提供方向和聚焦点。Sprint Goal 应该是一个有意义的目标，而非简单的任务清单汇总。",
      "【Sprint Review 目的】Sprint Review 是「检视 Sprint 成果并确定未来适应方向」的仪式。它不是演示会，而是「工作会议」——团队与利益相关者共同检查完成的工作，讨论产品下一步的方向。",
      "【Sprint Retrospective 价值】Mountain Goat Software 定义 Retrospective 为「在每个 Sprint 结束时，团队反思自己的表现并找到改进方法的专门时间」。推荐使用「开始-停止-继续」（Start-Stop-Continue）框架。",
      "【持续改进循环】三个仪式形成完整的反馈循环：Planning 设定方向，Review 检视产品成果，Retrospective 检视团队过程。这个循环是敏捷「检视与适应」原则的具体体现。",
    ],
    keyDifficulties: [
      "【Sprint Goal 的缺失】很多团队的 Sprint Planning 只是「选择要做的任务」，没有明确的 Sprint Goal。没有目标，团队就无法判断 Sprint 是否成功，也难以在遇到变化时做出取舍。",
      "【Review vs Demo 的混淆】Sprint Review 常被简化为「演示会」，失去了协作检视的本质。正确的做法是：不只展示完成的功能，还要讨论市场反馈、调整产品方向、更新 Product Backlog。",
      "【Retrospective 的形式化】很多团队的 Retrospective 变成了抱怨大会或走过场。有效的 Retrospective 应该产出具体的改进行动，并在下一个 Sprint 中执行和验证。",
      "【时间管理失控】三个仪式都有时间限制（Sprint Planning 8h，Review 4h，Retrospective 3h），但很多团队超时。超时往往意味着会议组织不善或讨论跑题，需要 Scrum Master 介入。",
    ],
    handsOnPath: [
      "1. 检查上一次 Sprint Planning：是否产出了明确的 Sprint Goal？",
      "2. 回顾最近的 Sprint Review：是否只是演示，还是有真正的讨论和决策？",
      "3. 分析最近 3 次 Retrospective：产出了多少改进行动？执行率如何？",
      "4. 设计一个「开始-停止-继续」框架的 Retrospective 模板",
      "5. 尝试在下次 Sprint Planning 中，先讨论「为什么这个 Sprint 有价值」",
      "6. 建立一个 Retrospective 行动跟踪机制，确保改进措施被执行",
    ],
    selfCheck: [
      "你的团队是否为每个 Sprint 设定明确的 Sprint Goal？",
      "Sprint Review 中，利益相关者是否积极参与讨论？",
      "Retrospective 产出的改进行动是否被执行？效果如何？",
      "三个仪式的时间是否在控制范围内？如果超时，原因是什么？",
      "团队成员是否认为这三个仪式有价值？如果不，问题在哪里？",
      "你能解释 Review 和 Retrospective 的区别吗？",
    ],
    extensions: [
      "学习不同的 Retrospective 格式（如 4Ls、Sailboat、Mad-Sad-Glad）",
      "探索如何使用 Liberating Structures 让 Sprint 仪式更高效",
      "研究远程团队如何有效进行 Sprint 仪式",
      "学习 Sprint 指标（Velocity、Burndown Chart）的正确使用方法",
    ],
    sourceUrls: [
      "https://www.scrum.org/resources/sprint-planning",
      "https://www.atlassian.com/agile/scrum/sprint-reviews",
      "https://www.mountaingoatsoftware.com/agile/scrum/meetings/sprint-retrospective",
    ],
  },
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
  "pm-w7-1": [
    {
      id: "pm-w7-1-q1",
      question: "敏捷宣言的四大价值观中，「个体和互动」高于什么？",
      options: [
        "详尽的文档",
        "流程和工具",
        "合同谈判",
        "遵循计划",
      ],
      answer: 1,
      rationale:
        "敏捷宣言明确指出「个体和互动 高于 流程和工具」，强调人与人之间的沟通比依赖工具和流程更重要。",
    },
    {
      id: "pm-w7-1-q2",
      question: "敏捷宣言中「高于」（over）的正确理解是什么？",
      options: [
        "右侧的项目完全没有价值",
        "左侧的项目更重要，但右侧也有价值",
        "两侧的项目同等重要",
        "根据情况决定哪侧更重要",
      ],
      answer: 1,
      rationale:
        "宣言明确说明「虽然右侧的项目也有价值，但我们更重视左侧的项目」。这意味着不是非此即彼，而是优先级的差异。",
    },
    {
      id: "pm-w7-1-q3",
      question: "敏捷宣言的第一条原则强调什么是最高优先级？",
      options: [
        "按时交付项目",
        "通过早期和持续交付有价值的软件来满足客户",
        "详细的文档记录",
        "完成所有计划的功能",
      ],
      answer: 1,
      rationale:
        "敏捷宣言第一条原则明确指出「我们最高优先级是通过早期和持续交付有价值的软件来满足客户」。",
    },
    {
      id: "pm-w7-1-q4",
      question: "根据敏捷原则，业务人员和开发者应该多久一起工作？",
      options: [
        "每周一次",
        "每个 Sprint 开始和结束时",
        "在整个项目中每天一起工作",
        "只在需求确认时",
      ],
      answer: 2,
      rationale:
        "敏捷原则明确指出「业务人员和开发者必须在整个项目中每天一起工作」，打破传统的部门壁垒。",
    },
    {
      id: "pm-w7-1-q5",
      question: "敏捷原则认为「可工作的软件」代表什么？",
      options: [
        "项目完成的标志",
        "进度的主要衡量标准",
        "需要详细文档支持的产出",
        "测试团队的输入",
      ],
      answer: 1,
      rationale:
        "敏捷原则第七条明确指出「可工作的软件是进度的主要衡量标准」，而非计划完成度或文档数量。",
    },
    {
      id: "pm-w7-1-q6",
      question: "根据敏捷原则，最好的架构、需求和设计来自哪里？",
      options: [
        "资深架构师的规划",
        "详细的前期设计",
        "自组织团队",
        "管理层的决策",
      ],
      answer: 2,
      rationale:
        "敏捷原则第十一条指出「最好的架构、需求和设计来自自组织团队」，强调团队自主决策的重要性。",
    },
    {
      id: "pm-w7-1-q7",
      question: "敏捷原则建议交付可工作的软件的频率是？",
      options: [
        "每季度一次",
        "每月一次",
        "从几周到几个月，倾向于更短的周期",
        "按项目里程碑",
      ],
      answer: 2,
      rationale:
        "敏捷原则第三条指出「频繁交付可工作的软件，从几周到几个月，倾向于更短的周期」。",
    },
    {
      id: "pm-w7-1-q8",
      question: "Scrum Alliance 指出敏捷基于经验主义的三个支柱是什么？",
      options: [
        "计划、执行、检查",
        "透明性、检视、适应",
        "沟通、协作、交付",
        "敏捷、快速、高效",
      ],
      answer: 1,
      rationale:
        "Scrum Alliance 指出敏捷基于经验主义的三个支柱：透明性（Transparency）、检视（Inspection）、适应（Adaptation）。",
    },
    {
      id: "pm-w7-1-q9",
      question: "敏捷原则强调的「简单性」是指什么？",
      options: [
        "减少代码行数",
        "最大化未完成工作的艺术",
        "简化用户界面",
        "减少团队人数",
      ],
      answer: 1,
      rationale:
        "敏捷原则第十条指出「简单性——最大化未完成工作的艺术——是必要的」，强调只做必要的工作。",
    },
    {
      id: "pm-w7-1-q10",
      question: "敏捷原则认为团队应该多久进行一次反思和调整？",
      options: [
        "只在项目结束时",
        "每年一次",
        "定期进行",
        "只在出现问题时",
      ],
      answer: 2,
      rationale:
        "敏捷原则第十二条指出「团队定期反思如何变得更有效，然后相应调整其行为」。",
    },
    {
      id: "pm-w7-1-q11",
      question: "敏捷原则对待变化的需求的态度是什么？",
      options: [
        "应该通过变更控制流程严格管理",
        "欢迎变化，即使在开发后期",
        "只在项目早期接受变化",
        "尽量避免变化以控制成本",
      ],
      answer: 1,
      rationale:
        "敏捷原则第二条指出「欢迎变化的需求，即使在开发后期。敏捷过程利用变化为客户创造竞争优势」。",
    },
    {
      id: "pm-w7-1-q12",
      question: "敏捷原则认为什么是传达信息最有效的方式？",
      options: [
        "详细的文档",
        "电子邮件",
        "面对面交流",
        "项目管理工具",
      ],
      answer: 2,
      rationale:
        "敏捷原则第六条指出「向开发团队内部及其之间传达信息的最有效方式是面对面交流」。",
    },
  ],
  "pm-w7-2": [
    {
      id: "pm-w7-2-q1",
      question: "根据 Scrum Guide，Product Owner 的核心职责是什么？",
      options: [
        "管理开发团队的日常工作",
        "对最大化产品价值负责",
        "组织 Scrum 仪式",
        "移除团队障碍",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 明确指出「Product Owner 对最大化产品价值负责」，这是其核心职责。",
    },
    {
      id: "pm-w7-2-q2",
      question: "Scrum 框架包含几个仪式（Events）？",
      options: [
        "三个",
        "四个",
        "五个",
        "六个",
      ],
      answer: 2,
      rationale:
        "Scrum 包含五个仪式：Sprint、Sprint Planning、Daily Scrum、Sprint Review、Sprint Retrospective。",
    },
    {
      id: "pm-w7-2-q3",
      question: "根据 Scrum Guide，Daily Scrum 的时间限制是多少？",
      options: [
        "30 分钟",
        "15 分钟",
        "1 小时",
        "没有时间限制",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 明确规定 Daily Scrum 的时间限制是 15 分钟。",
    },
    {
      id: "pm-w7-2-q4",
      question: "Scrum 的三个产出物（Artifacts）不包括以下哪项？",
      options: [
        "Product Backlog",
        "Sprint Backlog",
        "Burndown Chart",
        "Increment",
      ],
      answer: 2,
      rationale:
        "Scrum 的三个产出物是：Product Backlog、Sprint Backlog、Increment。Burndown Chart 是常用工具但不是官方产出物。",
    },
    {
      id: "pm-w7-2-q5",
      question: "根据 Scrum Guide，Scrum Master 的核心职责是什么？",
      options: [
        "管理产品待办事项",
        "对建立 Scrum Guide 中定义的 Scrum 负责",
        "编写用户故事",
        "决定 Sprint 目标",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 指出 Scrum Master「对建立 Scrum Guide 中定义的 Scrum 负责」并服务于团队和组织。",
    },
    {
      id: "pm-w7-2-q6",
      question: "Scrum Guide 将 Product Backlog 描述为什么？",
      options: [
        "一个可选的工作清单",
        "唯一的工作来源",
        "开发团队的任务列表",
        "Sprint 的计划文档",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 明确指出 Product Backlog 是「唯一的工作来源」。",
    },
    {
      id: "pm-w7-2-q7",
      question: "Sprint Planning 的时间限制是多少（对于一个月的 Sprint）？",
      options: [
        "2 小时",
        "4 小时",
        "8 小时",
        "无限制",
      ],
      answer: 2,
      rationale:
        "Scrum Guide 规定 Sprint Planning 的时间限制为 8 小时（对于一个月的 Sprint）。",
    },
    {
      id: "pm-w7-2-q8",
      question: "Scrum 的五个价值观不包括以下哪项？",
      options: [
        "承诺（Commitment）",
        "速度（Speed）",
        "聚焦（Focus）",
        "尊重（Respect）",
      ],
      answer: 1,
      rationale:
        "Scrum 的五个价值观是：承诺（Commitment）、勇气（Courage）、聚焦（Focus）、开放（Openness）、尊重（Respect）。速度不是其中之一。",
    },
    {
      id: "pm-w7-2-q9",
      question: "根据 Scrum Guide，Sprint 的典型长度是多少？",
      options: [
        "一天到一周",
        "一周到一个月",
        "一个月到三个月",
        "没有固定长度",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 指出 Sprint 是「固定时长（一个月或更短）」，通常为 1-4 周，最常见的是 2 周。",
    },
    {
      id: "pm-w7-2-q10",
      question: "Sprint Retrospective 的主要目的是什么？",
      options: [
        "展示完成的功能",
        "规划下一个 Sprint 的工作",
        "反思改进点，提高质量和效率",
        "更新产品待办事项",
      ],
      answer: 2,
      rationale:
        "Scrum Guide 指出 Sprint Retrospective 是「规划提高质量和效率的方法」的仪式。",
    },
    {
      id: "pm-w7-2-q11",
      question: "完成定义（Definition of Done）在 Scrum 中的作用是什么？",
      options: [
        "定义项目的验收标准",
        "作为 Increment 的质量基准，确保透明度",
        "定义 Sprint 的时间长度",
        "决定团队的绩效考核标准",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 指出完成定义「创建关于 Increment 何时符合产品质量标准的共同理解」，是透明度的保障。",
    },
    {
      id: "pm-w7-2-q12",
      question: "Scrum 团队的开发者（Developers）负责什么？",
      options: [
        "最大化产品价值",
        "在每个 Sprint 中创建可用增量",
        "移除团队障碍",
        "管理利益相关者",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 指出开发者「致力于在每个 Sprint 中创建可用增量」。",
    },
  ],
  "pm-w7-3": [
    {
      id: "pm-w7-3-q1",
      question: "Kanban 这个词在日语中的含义是什么？",
      options: [
        "快速交付",
        "持续改进",
        "视觉信号或卡片",
        "拉动系统",
      ],
      answer: 2,
      rationale:
        "Kanban 源自日语，意为「视觉信号」（visual signal）或「卡片」（card）。",
    },
    {
      id: "pm-w7-3-q2",
      question: "Kanban 方法论起源于哪个系统？",
      options: [
        "软件开发方法论",
        "丰田生产系统（TPS）",
        "敏捷宣言",
        "Scrum 框架",
      ],
      answer: 1,
      rationale:
        "Kanban 起源于丰田生产系统（Toyota Production System），是一种拉动式生产方法。",
    },
    {
      id: "pm-w7-3-q3",
      question: "WIP 限制在 Kanban 中的作用是什么？",
      options: [
        "限制团队人数",
        "限制每个阶段的任务数量，避免多任务切换",
        "限制每日工作时间",
        "限制项目总预算",
      ],
      answer: 1,
      rationale:
        "WIP（Work in Progress）限制是限制每个阶段的任务数量，避免多任务切换带来的效率损失。",
    },
    {
      id: "pm-w7-3-q4",
      question: "Kanban 的三个核心原则不包括以下哪项？",
      options: [
        "可视化工作流",
        "限制在制品（WIP）",
        "固定迭代周期",
        "管理流动",
      ],
      answer: 2,
      rationale:
        "Kanban 的三个核心原则是：可视化工作流、限制在制品（WIP）、管理流动。固定迭代周期是 Scrum 的特点。",
    },
    {
      id: "pm-w7-3-q5",
      question: "Kanban 强调的「管理流动」是指什么？",
      options: [
        "管理团队人员流动",
        "加速流动并消除价值流中的浪费",
        "控制信息流动",
        "管理资金流动",
      ],
      answer: 1,
      rationale:
        "Kanban 强调「加速流动并消除价值流中的浪费」，通过测量周期时间和吞吐量来优化流程。",
    },
    {
      id: "pm-w7-3-q6",
      question: "Kanban 与 Scrum 的主要区别是什么？",
      options: [
        "Kanban 需要更多角色",
        "Kanban 没有固定的迭代周期",
        "Kanban 不需要看板",
        "Kanban 不强调持续改进",
      ],
      answer: 1,
      rationale:
        "Kanban 没有固定的迭代周期，适合持续交付场景；Scrum 有固定 Sprint 周期，适合需要规划和评估的项目。",
    },
    {
      id: "pm-w7-3-q7",
      question: "周期时间（Cycle Time）在 Kanban 中测量的是什么？",
      options: [
        "项目总时长",
        "从任务开始到完成的时间",
        "每日工作时间",
        "会议时间",
      ],
      answer: 1,
      rationale:
        "周期时间（Cycle Time）测量的是一个任务从开始到完成所需的时间。",
    },
    {
      id: "pm-w7-3-q8",
      question: "Kanban 对于变革的态度是什么？",
      options: [
        "需要激进的组织变革",
        "从现有状态开始，逐步改进",
        "完全替换现有流程",
        "不需要任何变革",
      ],
      answer: 1,
      rationale:
        "Kanban 倡导「从现有状态开始，逐步改进」，不要求激进的变革。",
    },
    {
      id: "pm-w7-3-q9",
      question: "当看板某一列触及 WIP 限制时，团队应该怎么做？",
      options: [
        "增加 WIP 限制",
        "开始新任务",
        "停止开始新任务，转而帮助解决阻塞",
        "忽略限制继续工作",
      ],
      answer: 2,
      rationale:
        "当某列触及 WIP 限制时，团队应停止开始新任务，转而帮助解决阻塞，这是 WIP 限制暴露瓶颈的价值所在。",
    },
    {
      id: "pm-w7-3-q10",
      question: "Kanban 看板的典型列不包括以下哪项？",
      options: [
        "待办",
        "进行中",
        "Sprint 目标",
        "已完成",
      ],
      answer: 2,
      rationale:
        "Kanban 看板的典型列包括待办、进行中、已完成等。Sprint 目标是 Scrum 的概念。",
    },
    {
      id: "pm-w7-3-q11",
      question: "吞吐量（Throughput）在 Kanban 中测量的是什么？",
      options: [
        "每日工作小时数",
        "单位时间内完成的任务数量",
        "团队人数",
        "看板列的数量",
      ],
      answer: 1,
      rationale:
        "吞吐量（Throughput）测量的是单位时间内完成的任务数量，是评估团队产能的关键指标。",
    },
    {
      id: "pm-w7-3-q12",
      question: "Scrumban 是什么？",
      options: [
        "一种新的敏捷框架",
        "Scrum 和 Kanban 的结合",
        "Kanban 的升级版",
        "Scrum 的简化版",
      ],
      answer: 1,
      rationale:
        "Scrumban 是 Scrum 和 Kanban 的结合，利用 Scrum 的结构和 Kanban 的流程可视化与 WIP 限制。",
    },
  ],
  "pm-w7-4": [
    {
      id: "pm-w7-4-q1",
      question: "根据 Scrum Guide，Sprint Planning 需要回答几个问题？",
      options: [
        "两个",
        "三个",
        "四个",
        "五个",
      ],
      answer: 1,
      rationale:
        "Sprint Planning 需要回答三个问题：为什么这个 Sprint 有价值？可以完成什么？如何完成选定的工作？",
    },
    {
      id: "pm-w7-4-q2",
      question: "Sprint Goal 的主要作用是什么？",
      options: [
        "列出所有要完成的任务",
        "为 Sprint 提供方向和聚焦点",
        "定义完成标准",
        "分配团队成员职责",
      ],
      answer: 1,
      rationale:
        "Sprint Goal 为 Sprint 提供方向和聚焦点，它应该是一个有意义的目标，而非简单的任务清单汇总。",
    },
    {
      id: "pm-w7-4-q3",
      question: "Sprint Review 的本质是什么？",
      options: [
        "演示会议",
        "工作会议，检视成果并确定未来方向",
        "团队内部汇报",
        "项目结项会议",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 指出 Sprint Review 是「检视 Sprint 成果并确定未来适应方向」的工作会议，不只是演示。",
    },
    {
      id: "pm-w7-4-q4",
      question: "Mountain Goat Software 推荐的 Retrospective 框架是什么？",
      options: [
        "SWOT 分析",
        "开始-停止-继续（Start-Stop-Continue）",
        "5W1H 分析",
        "鱼骨图分析",
      ],
      answer: 1,
      rationale:
        "Mountain Goat Software 推荐使用「开始-停止-继续」（Start-Stop-Continue）框架进行 Retrospective。",
    },
    {
      id: "pm-w7-4-q5",
      question: "Sprint Retrospective 应该产出什么？",
      options: [
        "功能演示",
        "具体的改进行动",
        "下个 Sprint 的任务列表",
        "产品待办事项",
      ],
      answer: 1,
      rationale:
        "有效的 Retrospective 应该产出具体的改进行动，并在下一个 Sprint 中执行和验证。",
    },
    {
      id: "pm-w7-4-q6",
      question: "Sprint Review 的参与者应该包括谁？",
      options: [
        "仅开发团队",
        "仅 Product Owner 和 Scrum Master",
        "Scrum 团队和利益相关者",
        "仅管理层",
      ],
      answer: 2,
      rationale:
        "Sprint Review 应该包括 Scrum 团队和利益相关者，共同检查完成的工作并讨论产品方向。",
    },
    {
      id: "pm-w7-4-q7",
      question: "Sprint Retrospective 的时间限制是多少（对于一个月的 Sprint）？",
      options: [
        "1 小时",
        "2 小时",
        "3 小时",
        "4 小时",
      ],
      answer: 2,
      rationale:
        "Scrum Guide 规定 Sprint Retrospective 的时间限制为 3 小时（对于一个月的 Sprint）。",
    },
    {
      id: "pm-w7-4-q8",
      question: "Sprint Review 和 Sprint Retrospective 的主要区别是什么？",
      options: [
        "Review 关注产品成果，Retrospective 关注团队过程",
        "Review 关注团队，Retrospective 关注产品",
        "Review 是可选的，Retrospective 是必须的",
        "两者没有本质区别",
      ],
      answer: 0,
      rationale:
        "Sprint Review 检视产品成果（做了什么），Sprint Retrospective 检视团队过程（如何改进）。",
    },
    {
      id: "pm-w7-4-q9",
      question: "「开始-停止-继续」框架中，「停止」指的是什么？",
      options: [
        "停止整个项目",
        "停止当前 Sprint",
        "停止那些无效的实践",
        "停止开发新功能",
      ],
      answer: 2,
      rationale:
        "「停止」指的是识别并停止那些无效的实践，是持续改进的一部分。",
    },
    {
      id: "pm-w7-4-q10",
      question: "Sprint Review 的时间限制是多少（对于一个月的 Sprint）？",
      options: [
        "2 小时",
        "3 小时",
        "4 小时",
        "8 小时",
      ],
      answer: 2,
      rationale:
        "Scrum Guide 规定 Sprint Review 的时间限制为 4 小时（对于一个月的 Sprint）。",
    },
    {
      id: "pm-w7-4-q11",
      question: "有效的 Sprint Planning 的首要产出是什么？",
      options: [
        "详细的任务分解",
        "Sprint Goal",
        "团队成员分工",
        "风险评估报告",
      ],
      answer: 1,
      rationale:
        "Sprint Planning 的首要产出是 Sprint Goal，它为 Sprint 提供方向和聚焦点。",
    },
    {
      id: "pm-w7-4-q12",
      question: "根据 Mountain Goat Software，Retrospective 通常在什么时候进行？",
      options: [
        "Sprint 开始时",
        "Sprint 中间",
        "Sprint 结束时，通常在 Sprint Review 之后",
        "下一个 Sprint 开始时",
      ],
      answer: 2,
      rationale:
        "Retrospective 通常是「Sprint 结束时的最后一个 Scrum 仪式，通常在 Sprint Review 之后立即进行」。",
    },
  ],
}
