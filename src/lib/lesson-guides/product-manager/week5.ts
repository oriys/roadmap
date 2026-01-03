import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
  "pm-w5-1": {
    lessonId: "pm-w5-1",
    background: [
      "【路线图定义】ProductPlan 定义产品路线图为「一份高层次的可视化总结，展示了您产品的愿景和方向」。路线图是战略沟通工具，用于传达产品战略给利益相关者，而非简单的功能列表或项目计划。",
      "【路线图核心目的】Aha! 指出路线图是「展示计划内容及其重要性的可视化时间线」，帮助团队围绕共同目标对齐，跟踪有意义的进展。没有清晰的愿景和战略，路线图会变成断裂的任务集合。",
      "【路线图类型】常见路线图类型包括：基于时间的路线图（按季度/月份规划）、基于主题的路线图（按战略目标组织）、Now-Next-Later 路线图（按优先级分组，不承诺具体日期）。不同类型适用于不同场景和受众。",
      "【视觉设计原则】Aha! 强调有效路线图需要：一致的时间框架、清晰的层级结构、进度指示器（颜色、状态条）、一致的符号系统、以及区分目标和团队的颜色编码。",
      "【常见问题】Aha! 列出三大问题：愿景缺失导致无法优先排序、信息过多让利益相关者困惑或信息过少无法指导、手动更新导致文档过时被团队忽视。",
    ],
    keyDifficulties: [
      "【路线图不是承诺】很多人把路线图当作项目进度表，向客户承诺具体日期。正确理解是：路线图是战略沟通工具，应保持灵活性，避免过度承诺具体日期。",
      "【信息量的平衡】信息太多会让利益相关者困惑，太少则无法提供足够指导。Aha! 建议根据受众定制路线图版本，高管需要战略概览，团队需要执行细节。",
      "【避免功能导向】常见错误是把路线图变成功能列表。正确做法是聚焦于用户价值和业务成果，用主题（如「提升用户留存」）而非功能（如「添加通知功能」）组织路线图。",
      "【持续更新机制】路线图不是一次性文档，需要定期回顾和调整。Aha! 建议建立定期更新机制，确保路线图反映最新的战略方向和市场变化。",
    ],
    handsOnPath: [
      "1. 明确产品愿景：用一句话描述产品要实现的长期目标",
      "2. 识别关键受众：列出需要查看路线图的利益相关者（高管、团队、客户等）",
      "3. 选择路线图类型：根据场景选择时间型、主题型或 Now-Next-Later 型",
      "4. 定义战略主题：将愿景分解为 3-5 个战略主题/目标",
      "5. 填充关键举措：为每个主题识别支撑它的关键举措或史诗（Epic）",
      "6. 创建多版本：为不同受众创建详细程度不同的路线图版本",
      "7. 建立更新节奏：设定路线图回顾和更新的定期会议（如每月或每季度）",
    ],
    selfCheck: [
      "你的路线图清晰地传达了产品愿景吗？看到路线图的人能理解「为什么」吗？",
      "你的路线图是基于主题/目标还是功能列表？",
      "你为不同受众准备了不同版本的路线图吗？",
      "你的路线图多久更新一次？是否反映最新的战略方向？",
      "你的路线图是否过度承诺了具体日期？",
      "团队成员是否经常参考路线图？如果不是，为什么？",
    ],
    extensions: [
      "学习 Now-Next-Later 路线图格式，它如何避免过度承诺日期",
      "探索不同的路线图工具（ProductPlan、Aha!、Notion、Miro）",
      "研究 Outcome-Based Roadmap（基于成果的路线图）方法",
      "学习如何将 OKR 与产品路线图结合使用",
    ],
    sourceUrls: [
      "https://www.atlassian.com/agile/product-management/product-roadmaps",
      "https://www.productplan.com/learn/what-is-a-product-roadmap/",
      "https://www.aha.io/roadmapping/guide/roadmap/best-practices",
    ],
  },
  "pm-w5-2": {
    lessonId: "pm-w5-2",
    background: [
      "【RICE 定义】RICE 是一个用于产品优先级决策的评分系统，通过四个维度评估举措：Reach（覆盖范围）、Impact（影响程度）、Confidence（信心水平）、Effort（工作量）。公式：RICE = (Reach × Impact × Confidence) ÷ Effort。",
      "【Reach 计算】Intercom 解释 Reach 为「在特定时间范围内（通常是每季度）受影响的人数」。计算方式：用户基数 × 采用率 × 时间周期。应尽量使用实际产品数据而非估算。",
      "【Impact 评分】Impact 评估每个接触到该功能的用户受到的影响程度。Intercom 使用多选尺度：3 = 巨大影响、2 = 高影响、1 = 中等影响、0.5 = 低影响、0.25 = 最小影响。",
      "【Confidence 调节】Confidence 是百分比因子（100%、80%、50%），用于调节过于乐观的估算。当对估算不确定时，较低的信心百分比会降低最终分数，让不确定的举措排名靠后。",
      "【Effort 估算】Effort 是完成项目所需的时间投入，通常以人月或人周为单位。Effort 在公式中作为分母，工作量越大，RICE 分数越低。",
    ],
    keyDifficulties: [
      "【主观性问题】Impact 的评分本质上是主观的。解决方法：在团队中建立一致的评分标准，定期校准评分尺度，结合用户研究和数据佐证。",
      "【Confidence 的滥用】团队可能倾向于给所有项目打 100% 信心。正确做法：诚实评估不确定性，对缺乏数据支撑的估算使用较低信心分数。",
      "【分数不是绝对标准】RICE 分数是参考而非绝对标准。高分项目仍需考虑战略契合度、依赖关系、技术债务等因素。RICE 帮助减少主观争议，但不能替代产品判断。",
      "【跨项目比较的公平性】不同类型的项目（新功能 vs 优化 vs 技术改进）难以公平比较。建议为不同类型的项目分别排序，或调整评分权重。",
    ],
    handsOnPath: [
      "1. 列出当前 Backlog 中待排序的 5-10 个候选项目/功能",
      "2. 为每个项目估算 Reach：每季度会有多少用户接触到这个功能？",
      "3. 评估 Impact：对每个用户的影响有多大？（使用 0.25-3 的尺度）",
      "4. 评估 Confidence：你对这些估算有多大信心？（50%/80%/100%）",
      "5. 估算 Effort：完成这个项目需要多少人月/人周？",
      "6. 计算 RICE 分数：(Reach × Impact × Confidence) ÷ Effort",
      "7. 按分数排序，讨论结果是否符合团队直觉，调整有争议的评分",
    ],
    selfCheck: [
      "你能解释 RICE 的四个因素分别代表什么吗？",
      "你的 Reach 估算有数据支撑吗？还是纯粹猜测？",
      "你为不同 Impact 等级（0.25-3）建立了明确的定义吗？",
      "你在评估 Confidence 时是否诚实？有没有给所有项目都打 100%？",
      "RICE 分数与团队的直觉判断相符吗？如果不符，为什么？",
      "除了 RICE 分数，还有哪些因素影响你的最终优先级决策？",
    ],
    extensions: [
      "探索 ICE 评分模型（Impact、Confidence、Ease），对比 RICE 的差异",
      "学习如何使用 Spreadsheet 或专业工具（Productboard、Airfocus）进行 RICE 评分",
      "研究如何将 RICE 与 OKR 结合，确保优先级与战略目标一致",
      "探索其他量化优先级方法（Opportunity Scoring、Value vs Effort Matrix）",
    ],
    sourceUrls: [
      "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/",
      "https://www.productplan.com/glossary/rice-scoring-model/",
      "https://fibery.io/blog/product-management/rice/",
    ],
  },
  "pm-w5-3": {
    lessonId: "pm-w5-3",
    background: [
      "【MoSCoW 框架】ProductPlan 定义 MoSCoW 为「帮助利益相关者理解发布中各项举措重要性的优先级框架」。四个类别：Must have（必须有）、Should have（应该有）、Could have（可以有）、Won't have（本次不做）。",
      "【Kano 模型起源】Kano 模型由日本研究者 Noriaki Kano（狩野纪昭）于 1984 年提出，用于理解「产品功能如何影响客户满意度」。核心观点：客户满意度取决于功能提供的水平。",
      "【Kano 三种需求类型】基本型需求（Must-be）：有了不会满意，没有会不满；期望型需求（Performance）：越多越好，线性关系；兴奋型需求（Attractive）：没有不会不满，有了会惊喜。",
      "【WSJF 定义】SAFe 将 WSJF 定义为「用于工作排序以获取最大经济效益的优先级模型」。公式：WSJF = 延迟成本（Cost of Delay）÷ 工作量（Job Size）。延迟成本包含用户价值、时间紧迫性、风险降低等因素。",
      "【框架选择原则】Don Reinertsen 强调「如果只能量化一件事，就量化延迟成本」。不同框架适用于不同场景：MoSCoW 适合简单分类，Kano 适合用户满意度分析，WSJF 适合大规模敏捷环境。",
    ],
    keyDifficulties: [
      "【MoSCoW 的「Must」膨胀】团队倾向于把所有需求都标记为「Must have」。解决方法：明确定义「Must」的标准，通常是「没有它产品无法发布」的核心功能。",
      "【Kano 需求的时间衰减】今天的「兴奋型」需求会变成明天的「基本型」需求。需要持续研究用户期望变化，定期更新 Kano 分析。",
      "【WSJF 的复杂性】WSJF 需要估算延迟成本，这比单纯估算价值更难。建议使用相对估算而非绝对数值，用斐波那契数列简化讨论。",
      "【框架组合使用】单一框架往往不够。可以先用 Kano 理解需求类型，再用 RICE/WSJF 量化排序，最后用 MoSCoW 与利益相关者沟通。",
    ],
    handsOnPath: [
      "1. 使用 MoSCoW 对当前 Sprint 的需求进行分类，确保「Must」不超过总量的 60%",
      "2. 选择 3-5 个功能，设计 Kano 问卷（功能型/反功能型问题对）",
      "3. 对 15+ 用户进行 Kano 调研，识别各功能属于哪种需求类型",
      "4. 学习 WSJF 计算：延迟成本 = 用户价值 + 时间紧迫性 + 风险降低/机会启用",
      "5. 用 WSJF 对 Product Backlog 顶部的 10 个项目进行优先级排序",
      "6. 对比 RICE、WSJF、MoSCoW 三种方法对同一组需求的排序结果",
      "7. 记录哪种方法最适合你的团队和业务场景",
    ],
    selfCheck: [
      "你能说出 MoSCoW 四个类别的定义吗？",
      "Kano 模型的三种需求类型分别是什么？各有什么特点？",
      "什么是「延迟成本」？为什么它比「价值」更重要？",
      "你的团队使用哪种优先级框架？为什么选择它？",
      "你如何处理优先级框架给出的「反直觉」结果？",
      "不同框架的适用场景是什么？什么时候用 RICE，什么时候用 WSJF？",
    ],
    extensions: [
      "深入学习 Kano 分析的问卷设计和数据分析方法",
      "探索 SAFe 中 WSJF 在 PI Planning 中的应用",
      "研究 Opportunity Scoring 方法（重要性 vs 满意度差距）",
      "学习如何向非技术利益相关者解释不同优先级框架",
    ],
    sourceUrls: [
      "https://www.productplan.com/glossary/moscow-prioritization/",
      "https://foldingburritos.com/kano-model/",
      "https://scaledagileframework.com/wsjf/",
    ],
  },
  "pm-w5-4": {
    lessonId: "pm-w5-4",
    background: [
      "【利益相关者定义】Marty Cagan（SVPG）定义利益相关者为「拥有否决权或能阻止你的工作发布的人」。他们代表核心业务职能：高管、财务、销售、市场、法务、合规、业务发展等。",
      "【PM 的核心责任】SVPG 指出产品经理必须：理解约束（在构建解决方案前理解每个利益相关者的考量）、建立信任（展示对利益相关者关切的真诚承诺）、保持透明（及时告知重要决策和变化）。",
      "【一对一沟通策略】Cagan 建议每周花 3-4 小时与利益相关者进行一对一会议，而非大型会议。这样更容易建立个人关系，理解各方真正的关切和优先级。",
      "【早期预览策略】SVPG 强调在发现阶段就与利益相关者分享解决方案，而非构建完成后。这样可以在工程投入前发现冲突，避免返工。",
      "【可行性原则】确保解决方案不仅有价值（Valuable）、可用（Usable）、可行（Feasible），还要得到利益相关者支持（Viable）。没有 Viability，再好的方案也无法落地。",
    ],
    keyDifficulties: [
      "【建立信任需要时间】新 PM 往往急于推动项目，忽视了先建立信任。SVPG 强调「你是一个有能力的产品经理」需要通过对客户、数据、技术、业务的深入了解来证明。",
      "【不同受众需要不同路线图】Aha! 指出不同受众需要定制化的路线图呈现。高管关注业务影响，工程师需要技术细节，客户关心交付时间线。一份路线图无法满足所有人。",
      "【用数据替代意见争论】当产品决策变成「意见 vs 意见」时，谁嗓门大谁赢。SVPG 建议用数据和测试替代主观争论，让证据说话。",
      "【说「不」的艺术】PM 需要学会拒绝不合理的需求，但要给出理由。单纯拒绝会破坏关系；给出替代方案和数据支持可以维护信任。",
    ],
    handsOnPath: [
      "1. 绘制利益相关者地图：识别所有影响产品决策的人，按影响力和利益相关度分类",
      "2. 安排一对一会议：与每个关键利益相关者进行 30-60 分钟的深入交流",
      "3. 记录各方关切：理解每个利益相关者的 KPI、痛点、对产品的期望",
      "4. 创建受众定制路线图：为高管、团队、客户准备不同详细程度的路线图版本",
      "5. 建立定期更新机制：设定与关键利益相关者的定期沟通节奏（周/双周/月）",
      "6. 练习早期预览：在下一个功能开发前，先与相关利益相关者分享方案草图",
      "7. 记录决策并共享：用数据和逻辑记录重要决策，让利益相关者了解「为什么」",
    ],
    selfCheck: [
      "你能列出影响你产品决策的所有利益相关者吗？",
      "你与利益相关者的沟通是一对一还是大型会议？效果如何？",
      "你是在方案完成后才分享，还是在发现阶段就预览？",
      "你最近一次成功说服反对者是什么时候？用了什么方法？",
      "你的路线图是一个版本还是多个版本？各受众能找到他们需要的信息吗？",
      "利益相关者信任你的产品判断吗？你如何知道？",
    ],
    extensions: [
      "学习 RACI 矩阵进行利益相关者职责划分",
      "探索如何处理高级别利益相关者的「HIPPO」问题（Highest Paid Person's Opinion）",
      "研究如何在分布式团队中进行异步利益相关者沟通",
      "学习如何用故事和数据结合的方式呈现产品决策",
    ],
    sourceUrls: [
      "https://www.productplan.com/glossary/stakeholder-management/",
      "https://www.svpg.com/stakeholder-management/",
      "https://www.aha.io/roadmapping/guide/product-roadmap/how-to-communicate-your-product-roadmap",
    ],
  },
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
  "pm-w5-1": [
    {
      id: "pm-w5-1-q1",
      question: "根据 ProductPlan，产品路线图的定义是什么？",
      options: [
        "详细的项目进度计划表",
        "高层次的可视化总结，展示产品的愿景和方向",
        "产品功能清单",
        "技术架构图",
      ],
      answer: 1,
      rationale:
        "ProductPlan 定义产品路线图为「一份高层次的可视化总结，展示了您产品的愿景和方向」。它是战略沟通工具，而非详细的项目计划。",
    },
    {
      id: "pm-w5-1-q2",
      question: "根据 Aha!，产品路线图的核心目的是什么？",
      options: [
        "记录所有产品功能",
        "展示计划内容及其重要性的可视化时间线",
        "追踪团队成员的工作时间",
        "管理项目预算",
      ],
      answer: 1,
      rationale:
        "Aha! 指出路线图是「展示计划内容及其重要性的可视化时间线」，帮助团队围绕共同目标对齐，跟踪有意义的进展。",
    },
    {
      id: "pm-w5-1-q3",
      question: "Aha! 列出的路线图三大问题不包括以下哪项？",
      options: [
        "愿景缺失导致无法优先排序",
        "信息过多或过少",
        "手动更新导致文档过时",
        "路线图工具太贵",
      ],
      answer: 3,
      rationale:
        "Aha! 列出三大问题：愿景缺失、信息量不当、手动更新导致过时。工具成本不在其中。",
    },
    {
      id: "pm-w5-1-q4",
      question: "Now-Next-Later 路线图的主要优势是什么？",
      options: [
        "提供精确的发布日期",
        "按优先级分组，避免过度承诺具体日期",
        "只展示当前 Sprint 的任务",
        "只适用于瀑布开发",
      ],
      answer: 1,
      rationale:
        "Now-Next-Later 路线图按优先级分组（现在做、接下来做、以后做），避免承诺具体日期，保持灵活性。",
    },
    {
      id: "pm-w5-1-q5",
      question: "根据 Aha!，有效路线图的视觉设计应该包含哪些元素？",
      options: [
        "只需要文字描述",
        "一致的时间框架、清晰的层级结构、进度指示器、颜色编码",
        "越复杂越好",
        "只使用甘特图格式",
      ],
      answer: 1,
      rationale:
        "Aha! 强调有效路线图需要：一致的时间框架、清晰的层级结构、进度指示器（颜色、状态条）、一致的符号系统、颜色编码。",
    },
    {
      id: "pm-w5-1-q6",
      question: "为什么路线图应该基于主题/目标而非功能列表？",
      options: [
        "因为功能列表太长",
        "因为主题/目标更能传达战略意图和用户价值",
        "因为利益相关者不理解功能",
        "因为功能会经常变化",
      ],
      answer: 1,
      rationale:
        "路线图应聚焦于用户价值和业务成果，用主题（如「提升用户留存」）而非功能（如「添加通知功能」）组织，这样更能传达战略意图。",
    },
    {
      id: "pm-w5-1-q7",
      question: "Aha! 建议的路线图构建方法有几个步骤？",
      options: [
        "3 个步骤",
        "4 个步骤",
        "6 个步骤",
        "10 个步骤",
      ],
      answer: 2,
      rationale:
        "Aha! 推荐的方法包含六个步骤：捕捉「为什么」、收集观点、定义主题/举措、组织和优先排序、为受众定制、根据情况调整。",
    },
    {
      id: "pm-w5-1-q8",
      question: "关于路线图的更新频率，以下哪个说法最准确？",
      options: [
        "路线图一旦确定就不应修改",
        "路线图需要定期回顾和调整以反映最新战略方向",
        "只有在年度规划时才更新路线图",
        "每天都要更新路线图",
      ],
      answer: 1,
      rationale:
        "路线图不是一次性文档，需要定期回顾和调整，确保反映最新的战略方向和市场变化。",
    },
    {
      id: "pm-w5-1-q9",
      question: "为什么需要为不同受众准备不同版本的路线图？",
      options: [
        "因为一份路线图太长",
        "因为不同受众（高管、团队、客户）关注点和需要的详细程度不同",
        "因为可以隐藏敏感信息",
        "因为工具限制",
      ],
      answer: 1,
      rationale:
        "不同受众关注点不同：高管需要战略概览和业务影响，团队需要执行细节，客户关心与他们相关的时间线。一份路线图无法满足所有人。",
    },
    {
      id: "pm-w5-1-q10",
      question: "Aha! 强调没有清晰愿景和战略的路线图会变成什么？",
      options: [
        "更灵活的计划",
        "断裂的任务集合",
        "更详细的项目计划",
        "纯粹的技术文档",
      ],
      answer: 1,
      rationale:
        "Aha! 指出没有清晰的愿景和战略，路线图会变成「断裂的任务集合」（disconnected collections of tasks），失去战略指导意义。",
    },
    {
      id: "pm-w5-1-q11",
      question: "以下哪个不是常见的路线图类型？",
      options: [
        "基于时间的路线图",
        "基于主题的路线图",
        "Now-Next-Later 路线图",
        "基于代码的路线图",
      ],
      answer: 3,
      rationale:
        "常见路线图类型包括：基于时间的（按季度/月份）、基于主题的（按战略目标）、Now-Next-Later（按优先级）。没有「基于代码」的路线图类型。",
    },
    {
      id: "pm-w5-1-q12",
      question: "Aha! 指出路线图的成功关键因素是什么？",
      options: [
        "使用最昂贵的工具",
        "清晰的路线图保持团队对齐并聚焦于有意义的进展",
        "包含尽可能多的功能",
        "永远不改变计划",
      ],
      answer: 1,
      rationale:
        "Aha! 强调「清晰的路线图保持团队对齐并聚焦于有意义的进展」，从静态文档转变为激发行动的沟通工具。",
    },
  ],
  "pm-w5-2": [
    {
      id: "pm-w5-2-q1",
      question: "RICE 评分模型的公式是什么？",
      options: [
        "RICE = Reach + Impact + Confidence - Effort",
        "RICE = (Reach × Impact × Confidence) ÷ Effort",
        "RICE = Reach × Impact ÷ (Confidence × Effort)",
        "RICE = (Reach + Impact) × Confidence ÷ Effort",
      ],
      answer: 1,
      rationale:
        "RICE 公式为：RICE = (Reach × Impact × Confidence) ÷ Effort。Reach、Impact、Confidence 相乘后除以 Effort。",
    },
    {
      id: "pm-w5-2-q2",
      question: "根据 Intercom，Reach 应该如何计算？",
      options: [
        "估算项目的总成本",
        "估算在特定时间范围内受影响的人数",
        "估算项目的技术复杂度",
        "估算需要的团队人数",
      ],
      answer: 1,
      rationale:
        "Intercom 解释 Reach 为「在特定时间范围内（通常是每季度）受影响的人数」。计算方式：用户基数 × 采用率 × 时间周期。",
    },
    {
      id: "pm-w5-2-q3",
      question: "Intercom 的 Impact 评分尺度中，「巨大影响」对应什么分数？",
      options: [
        "1",
        "2",
        "3",
        "5",
      ],
      answer: 2,
      rationale:
        "Intercom 的 Impact 尺度：3 = 巨大影响、2 = 高影响、1 = 中等影响、0.5 = 低影响、0.25 = 最小影响。",
    },
    {
      id: "pm-w5-2-q4",
      question: "Confidence 在 RICE 公式中的作用是什么？",
      options: [
        "增加乐观项目的权重",
        "调节过于乐观的估算，让不确定的项目排名靠后",
        "衡量团队的技术能力",
        "评估项目的战略重要性",
      ],
      answer: 1,
      rationale:
        "Confidence 是百分比因子（100%、80%、50%），用于调节过于乐观的估算。较低的信心百分比会降低最终分数，让不确定的举措排名靠后。",
    },
    {
      id: "pm-w5-2-q5",
      question: "Effort 在 RICE 公式中作为什么位置？",
      options: [
        "分子的一部分",
        "分母",
        "独立的加权因子",
        "不参与计算",
      ],
      answer: 1,
      rationale:
        "Effort 在公式中作为分母。工作量越大，RICE 分数越低，这确保了高投入项目需要有更高的影响才能排名靠前。",
    },
    {
      id: "pm-w5-2-q6",
      question: "如果一个项目的 Reach=1000, Impact=2, Confidence=80%, Effort=4，RICE 分数是多少？",
      options: [
        "200",
        "400",
        "1600",
        "800",
      ],
      answer: 1,
      rationale:
        "RICE = (1000 × 2 × 0.8) ÷ 4 = 1600 ÷ 4 = 400。",
    },
    {
      id: "pm-w5-2-q7",
      question: "关于 RICE 分数，以下哪个说法最准确？",
      options: [
        "RICE 分数是决定优先级的绝对标准",
        "RICE 分数是参考，还需考虑战略契合度、依赖关系等因素",
        "RICE 分数越低越应该优先做",
        "只有 RICE 分数超过 1000 的项目才值得做",
      ],
      answer: 1,
      rationale:
        "RICE 分数是参考而非绝对标准。高分项目仍需考虑战略契合度、依赖关系、技术债务等因素。RICE 帮助减少主观争议，但不能替代产品判断。",
    },
    {
      id: "pm-w5-2-q8",
      question: "Impact 评分的主观性问题应该如何解决？",
      options: [
        "让老板决定",
        "在团队中建立一致的评分标准，定期校准评分尺度",
        "使用随机数",
        "跳过 Impact 评分",
      ],
      answer: 1,
      rationale:
        "Impact 评分本质上是主观的。解决方法：在团队中建立一致的评分标准，定期校准评分尺度，结合用户研究和数据佐证。",
    },
    {
      id: "pm-w5-2-q9",
      question: "Intercom 建议 Reach 的计算应该基于什么？",
      options: [
        "管理层的预期",
        "竞品的用户数",
        "实际产品数据而非纯粹估算",
        "行业平均值",
      ],
      answer: 2,
      rationale:
        "Intercom 强调应尽量使用实际产品数据计算 Reach，而非纯粹估算。这样可以提高评估的准确性和可信度。",
    },
    {
      id: "pm-w5-2-q10",
      question: "Confidence 的典型取值范围是什么？",
      options: [
        "1-5",
        "0-100%",
        "通常使用 100%、80%、50% 三个等级",
        "0.25-3",
      ],
      answer: 2,
      rationale:
        "Confidence 通常使用 100%、80%、50% 三个等级，分别代表高信心、中等信心、低信心。这简化了评估过程。",
    },
    {
      id: "pm-w5-2-q11",
      question: "Effort 通常用什么单位来衡量？",
      options: [
        "美元",
        "故事点",
        "人月或人周",
        "代码行数",
      ],
      answer: 2,
      rationale:
        "Effort 通常以人月或人周为单位，代表完成项目所需的时间投入。这让跨项目比较更加直观。",
    },
    {
      id: "pm-w5-2-q12",
      question: "RICE 评分模型最适合用于什么场景？",
      options: [
        "评估团队成员绩效",
        "对产品 Backlog 中的项目进行优先级排序",
        "制定年度预算",
        "评估技术债务",
      ],
      answer: 1,
      rationale:
        "RICE 是一个用于产品优先级决策的评分系统，通过四个维度评估举措，帮助团队对 Backlog 项目进行一致、数据驱动的排序。",
    },
  ],
  "pm-w5-3": [
    {
      id: "pm-w5-3-q1",
      question: "MoSCoW 框架的四个类别分别是什么？",
      options: [
        "Mandatory, Strategic, Critical, Optional",
        "Must have, Should have, Could have, Won't have",
        "Major, Standard, Common, Wishlist",
        "Mission, Strategy, Capability, Objective",
      ],
      answer: 1,
      rationale:
        "MoSCoW 的四个类别：Must have（必须有）、Should have（应该有）、Could have（可以有）、Won't have（本次不做）。",
    },
    {
      id: "pm-w5-3-q2",
      question: "Kano 模型由谁在什么时候提出？",
      options: [
        "Don Reinertsen，1990 年",
        "Noriaki Kano，1984 年",
        "Michael Porter，1979 年",
        "Sean Ellis，2010 年",
      ],
      answer: 1,
      rationale:
        "Kano 模型由日本研究者 Noriaki Kano（狩野纪昭）于 1984 年提出，用于理解产品功能如何影响客户满意度。",
    },
    {
      id: "pm-w5-3-q3",
      question: "根据 Kano 模型，「基本型需求」（Must-be）的特点是什么？",
      options: [
        "越多越好，满意度线性增长",
        "有了不会满意，没有会不满",
        "没有不会不满，有了会惊喜",
        "与满意度无关",
      ],
      answer: 1,
      rationale:
        "基本型需求（Must-be）的特点：有了不会让客户满意，但没有会让客户非常不满。如手机的通话功能、酒店的自来水。",
    },
    {
      id: "pm-w5-3-q4",
      question: "Kano 模型中的「兴奋型需求」（Attractive）有什么特点？",
      options: [
        "客户明确要求的功能",
        "没有不会不满，有了会产生惊喜",
        "越多越好",
        "必须首先满足的需求",
      ],
      answer: 1,
      rationale:
        "兴奋型需求（Attractive）：没有不会让客户不满（因为没有期望），但有了会产生超出预期的惊喜和满意。",
    },
    {
      id: "pm-w5-3-q5",
      question: "WSJF 的计算公式是什么？",
      options: [
        "WSJF = 价值 × 紧迫性",
        "WSJF = 延迟成本（Cost of Delay）÷ 工作量（Job Size）",
        "WSJF = 风险 × 机会",
        "WSJF = 收益 - 成本",
      ],
      answer: 1,
      rationale:
        "SAFe 定义 WSJF = 延迟成本（Cost of Delay）÷ 工作量（Job Size）。延迟成本包含用户价值、时间紧迫性、风险降低等因素。",
    },
    {
      id: "pm-w5-3-q6",
      question: "Don Reinertsen 强调「如果只能量化一件事」应该量化什么？",
      options: [
        "项目工作量",
        "延迟成本（Cost of Delay）",
        "技术复杂度",
        "用户数量",
      ],
      answer: 1,
      rationale:
        "Don Reinertsen 强调「如果只能量化一件事，就量化延迟成本」。延迟成本比单纯的价值更能反映优先级的经济影响。",
    },
    {
      id: "pm-w5-3-q7",
      question: "MoSCoW 框架中的「Must have」应该占总需求的多少比例？",
      options: [
        "不超过 30%",
        "不超过 60%",
        "80% 以上",
        "100%",
      ],
      answer: 1,
      rationale:
        "通常建议「Must have」不超过总量的 60%。如果大部分需求都标记为 Must，说明优先级划分不够严格。",
    },
    {
      id: "pm-w5-3-q8",
      question: "Kano 模型提醒我们需求会发生什么变化？",
      options: [
        "需求永远不变",
        "今天的「兴奋型」需求会变成明天的「基本型」需求",
        "「基本型」需求会变成「兴奋型」",
        "只有「期望型」需求会变化",
      ],
      answer: 1,
      rationale:
        "Kano 模型指出需求会随时间「衰减」：今天的兴奋型需求，随着竞争对手跟进和用户期望提高，会变成明天的基本型需求。",
    },
    {
      id: "pm-w5-3-q9",
      question: "WSJF 中的延迟成本（Cost of Delay）包含哪些因素？",
      options: [
        "只包含开发成本",
        "用户价值、时间紧迫性、风险降低/机会启用",
        "只包含用户价值",
        "只包含时间紧迫性",
      ],
      answer: 1,
      rationale:
        "WSJF 的延迟成本包含三个组成部分：用户和业务价值、时间紧迫性、风险降低和/或机会启用。",
    },
    {
      id: "pm-w5-3-q10",
      question: "进行 Kano 分析时，需要对多少用户进行调研？",
      options: [
        "1-5 个用户",
        "15+ 用户（每个用户群体）",
        "100+ 用户",
        "不需要用户调研",
      ],
      answer: 1,
      rationale:
        "Kano 分析建议对 15+ 用户进行调研（每个用户群体），使用功能型/反功能型问题对来分类需求。",
    },
    {
      id: "pm-w5-3-q11",
      question: "WSJF 最适合在什么环境中使用？",
      options: [
        "小型创业团队",
        "大规模敏捷环境（如 SAFe）",
        "瀑布开发项目",
        "个人项目管理",
      ],
      answer: 1,
      rationale:
        "WSJF 是 SAFe（Scaled Agile Framework）的核心优先级工具，特别适合大规模敏捷环境中的组合和项目 Backlog 排序。",
    },
    {
      id: "pm-w5-3-q12",
      question: "如何组合使用不同的优先级框架？",
      options: [
        "只使用一个框架",
        "先用 Kano 理解需求类型，再用 RICE/WSJF 量化排序，最后用 MoSCoW 沟通",
        "随机选择框架",
        "让每个团队成员使用不同框架",
      ],
      answer: 1,
      rationale:
        "单一框架往往不够。可以先用 Kano 理解需求类型，再用 RICE/WSJF 量化排序，最后用 MoSCoW 与利益相关者沟通。",
    },
  ],
  "pm-w5-4": [
    {
      id: "pm-w5-4-q1",
      question: "根据 SVPG 的 Marty Cagan，利益相关者的定义是什么？",
      options: [
        "产品的所有用户",
        "公司的所有员工",
        "拥有否决权或能阻止你的工作发布的人",
        "投资者和股东",
      ],
      answer: 2,
      rationale:
        "Marty Cagan 定义利益相关者为「拥有否决权或能阻止你的工作发布的人」。他们代表核心业务职能如高管、财务、销售、法务等。",
    },
    {
      id: "pm-w5-4-q2",
      question: "SVPG 建议产品经理每周应该花多少时间与利益相关者一对一会议？",
      options: [
        "30 分钟",
        "1-2 小时",
        "3-4 小时",
        "整天",
      ],
      answer: 2,
      rationale:
        "Cagan 建议每周花 3-4 小时与利益相关者进行一对一会议，而非大型会议。这样更容易建立个人关系，理解各方真正的关切。",
    },
    {
      id: "pm-w5-4-q3",
      question: "根据 SVPG，产品经理应该在什么阶段与利益相关者分享解决方案？",
      options: [
        "产品发布后",
        "开发完成后",
        "发现阶段（在工程投入前）",
        "只在年度规划时",
      ],
      answer: 2,
      rationale:
        "SVPG 强调在发现阶段就与利益相关者分享解决方案，而非构建完成后。这样可以在工程投入前发现冲突，避免返工。",
    },
    {
      id: "pm-w5-4-q4",
      question: "SVPG 提出的产品「可行性」（Viability）指什么？",
      options: [
        "技术上能够实现",
        "用户能够使用",
        "利益相关者支持该解决方案",
        "成本在预算内",
      ],
      answer: 2,
      rationale:
        "Viability 指确保解决方案得到利益相关者支持。产品不仅要有价值（Valuable）、可用（Usable）、可行（Feasible），还要得到利益相关者支持（Viable）。",
    },
    {
      id: "pm-w5-4-q5",
      question: "当产品决策变成「意见 vs 意见」时，SVPG 建议怎么做？",
      options: [
        "让职位最高的人决定",
        "用数据和测试替代主观争论",
        "投票决定",
        "搁置决策",
      ],
      answer: 1,
      rationale:
        "SVPG 建议用数据和测试替代主观争论，让证据说话。当决策变成意见之争时，谁嗓门大谁赢，这不是好的决策方式。",
    },
    {
      id: "pm-w5-4-q6",
      question: "根据 Aha!，为什么需要为不同受众准备不同版本的路线图？",
      options: [
        "因为一份路线图太大",
        "因为不同受众关注点和需要的详细程度不同",
        "因为工具限制",
        "因为安全原因",
      ],
      answer: 1,
      rationale:
        "Aha! 指出不同受众需要定制化的路线图呈现：高管关注业务影响，工程师需要技术细节，客户关心交付时间线。",
    },
    {
      id: "pm-w5-4-q7",
      question: "SVPG 强调建立利益相关者信任的基础是什么？",
      options: [
        "职位头衔",
        "工作年限",
        "对客户、数据、技术、业务的深入了解（能力）",
        "人际关系网络",
      ],
      answer: 2,
      rationale:
        "Cagan 强调「你是一个有能力的产品经理」需要通过对客户、数据、技术、业务的深入了解来证明。能力是建立信任的基础。",
    },
    {
      id: "pm-w5-4-q8",
      question: "产品经理应该如何拒绝不合理的需求？",
      options: [
        "直接说「不」",
        "假装同意但不执行",
        "说「不」但给出理由和替代方案",
        "转交给上级处理",
      ],
      answer: 2,
      rationale:
        "PM 需要学会拒绝不合理的需求，但要给出理由。单纯拒绝会破坏关系；给出替代方案和数据支持可以维护信任。",
    },
    {
      id: "pm-w5-4-q9",
      question: "SVPG 建议的利益相关者沟通方式是什么？",
      options: [
        "大型全体会议",
        "仅通过邮件沟通",
        "一对一会议而非大型会议",
        "只在有问题时沟通",
      ],
      answer: 2,
      rationale:
        "Cagan 建议与利益相关者进行一对一会议，而非大型会议。这样更容易建立个人关系，理解各方真正的关切和优先级。",
    },
    {
      id: "pm-w5-4-q10",
      question: "利益相关者地图应该按什么维度进行分类？",
      options: [
        "年龄和职位",
        "影响力和利益相关度",
        "部门和地点",
        "工作年限和薪资",
      ],
      answer: 1,
      rationale:
        "利益相关者地图通常按影响力（对决策的影响程度）和利益相关度（对产品的关注程度）两个维度进行分类。",
    },
    {
      id: "pm-w5-4-q11",
      question: "根据 SVPG，产品经理的三个核心责任不包括以下哪项？",
      options: [
        "理解约束",
        "建立信任",
        "保持透明",
        "技术实现",
      ],
      answer: 3,
      rationale:
        "SVPG 指出产品经理的核心责任：理解约束（各方考量）、建立信任（真诚承诺）、保持透明（及时告知决策）。技术实现是工程师的责任。",
    },
    {
      id: "pm-w5-4-q12",
      question: "Aha! 强调有效的路线图沟通需要做到什么？",
      options: [
        "尽可能隐藏细节",
        "只展示好消息",
        "连接路线图项目到客户成果和业务目标",
        "只使用技术术语",
      ],
      answer: 2,
      rationale:
        "Aha! 强调需要「连接路线图项目到客户成果和业务目标，而非仅仅是功能列表」，帮助利益相关者理解价值。",
    },
  ],
}
