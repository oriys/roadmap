import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
  "pm-w8-1": {
    lessonId: "pm-w8-1",
    background: [
      "【对等关系】SVPG 强调 PM 与工程师是对等关系，'One key to the PM-engineering relationship is to each be very clear that you are peers. Neither should view themselves as subordinate to the other.'。这是建立健康协作的基础。",
      "【直接接触】Marty Cagan 指出 'Product managers need to protect their direct access to engineers, designers, and customers'。当 PM 失去与工程师的直接沟通，就失去了创新的机会。任何在 PM 与工程师之间设置中间人或流程的做法都会损害产品质量。",
      "【协作定义】SVPG 定义真正的协作是 'working together with designers and engineers, stakeholders and executives to come up with a solution that solves for all constraints'。协作不是共识，也不是民主，而是依赖团队中每个成员的专业知识。",
      "【原型协作】SVPG 推荐的最佳协作方式是 'sit around a prototype so as a team you can consider and discuss the proposed solution'。设计师可以考虑不同的用户体验方法，工程师可以评估技术影响，PM 可以考虑每个方向的商业影响。",
      "【工程师参与发现】SVPG 强调 'at least one senior engineer should be identified that is available to participate in discovery work at the level of at least an hour a day'。优秀的产品来自 PM、设计师和工程师的协作。",
    ],
    keyDifficulties: [
      "【避免瀑布式交接】SVPG 警告避免传统的瀑布流程：'a product manager defining requirements, handing them off to a designer to come up with a design, and then handing that off to engineers to implement'。现代产品开发需要持续协作而非阶段性交接。",
      "【尊重技术判断】The Pragmatic Engineer 指出最健康的团队具备 'engineering manager and product manager strong relationships'。PM 应尊重工程师的技术判断和工作量估算，不应强压进度或越俎代庖。",
      "【理解技术债务】PM 需要理解技术债务的概念，支持工程团队在功能开发和技术改进之间取得平衡。忽视技术债务会导致长期效率下降。",
      "【角色分工清晰】SVPG 提到团队依赖每个成员的专业知识：'if the tech lead feels a specific architecture is called for, teams defer to the tech lead'。PM 参与技术讨论但不应做技术决策。",
    ],
    handsOnPath: [
      "1. 与工程团队建立定期的 1:1 沟通机制，了解他们的工作方式和挑战",
      "2. 邀请一位资深工程师参与产品发现活动，每天至少 1 小时",
      "3. 组织围绕原型的协作会议，让 PM、设计师、工程师共同讨论解决方案",
      "4. 记录并理解当前产品的技术债务情况，与工程团队讨论优先级",
      "5. 在下次 Sprint 规划中，尊重工程师的估算，避免强压进度",
      "6. 回顾最近的需求交付流程，识别可以改进为协作点的交接点",
      "7. 与工程负责人讨论如何平衡功能开发与技术改进的资源分配",
    ],
    selfCheck: [
      "你与工程师是对等的合作关系吗？还是存在上下级的感觉？",
      "你是否有直接接触工程师的渠道，还是需要通过中间人？",
      "工程师是否参与产品发现阶段，还是只在开发阶段介入？",
      "你理解当前产品的主要技术债务吗？",
      "你上次围绕原型与工程师协作是什么时候？",
      "工程师对你的需求文档有什么反馈？你如何处理？",
    ],
    extensions: [
      "阅读 Marty Cagan 的《EMPOWERED》了解授权团队的运作模式",
      "学习技术债务的概念，理解何时应该偿还技术债务",
      "探索 Pair Programming 和 Mob Programming 的协作模式",
      "研究不同公司的 PM-Engineering 协作最佳实践",
    ],
    sourceUrls: [
      "https://www.svpg.com/product-managers-and-engineers/",
      "https://newsletter.pragmaticengineer.com/p/working-with-product-managers",
      "https://handbook.gitlab.com/handbook/product/product-management/",
    ],
  },
  "pm-w8-2": {
    lessonId: "pm-w8-2",
    background: [
      "【产品三人组】Teresa Torres 定义产品三人组(Product Trio)由 PM、设计师和工程师组成，'这三个角色是创建优质数字产品所需的最少人员'。这是替代传统按阶段交接工作模式的新方法。",
      "【从交接到协作点】研究表明 'The notion of a handoff is going by the wayside. You are a team. As such, you should not have transition points, you should have collaboration points.'。PM 和设计师应该是合作伙伴，而非流水线上的不同工位。",
      "【问题定义先行】最佳实践强调 'It is essential to not just work on feature ideas, but instead work on solving problems. The first thing PM and designer need to collaborate on is a clear definition of the problem.'。没有清晰的问题定义，团队会产生理解偏差。",
      "【共享客户洞察】PM 应该与设计师分享客户洞察，'Designers need customer empathy to create the best user experiences they possibly can. As a product manager, you are most likely interacting closely with customers.'。给设计师访问用户数据是优秀 PM 的标志。",
      "【尊重设计专业性】研究强调 'If your designers are telling you that something will not work, or would look better in a different way, that is an opinion you need to respect.'。设计师在用户体验方面有专业判断，PM 应该认真对待。",
    ],
    keyDifficulties: [
      "【早期频繁沟通】有效协作需要 'Feedback sessions and check-ins can be great collaboration points, and it is wise to have your first check-ins early on in the process'。但要注意不要让设计师感觉被过度监督。",
      "【角色边界模糊化】现代团队中 'Designers are taking an active role in driving the metrics and QA, PMs are commenting in Figma files and brainstorming technical solutions'。角色边界正在模糊，需要明确职责但保持灵活。",
      "【愿景对齐】确保顺畅协作的最佳方式是 'good alignment on the fundamental direction. This means starting with why on the highest level: how does what we are about to do contribute to our company and product vision?'",
      "【共同参与用户研究】最新趋势是 'bring UX and Engineering into early validation conversations with customers'。在这些访谈中，不同角色会听到不同的信息，因此录制访谈很重要。",
    ],
    handsOnPath: [
      "1. 与设计师建立个人关系：请设计师喝咖啡，了解他们的工作方式和动机",
      "2. 与设计师共同定义下一个项目的问题陈述，确保双方理解一致",
      "3. 建立定期的设计评审机制，确定合适的频率和形式",
      "4. 分享最近的用户研究数据和客户访谈录音给设计师",
      "5. 邀请设计师参与下一次用户访谈或客户拜访",
      "6. 与设计师一起进行用户故事地图(User Story Mapping)，协商 MVP 范围",
      "7. 回顾最近的项目，识别哪些交接点可以改为协作点",
    ],
    selfCheck: [
      "你与设计师的关系是合作伙伴还是仅仅是工作交接？",
      "你们在开始设计前是否共同定义了清晰的问题陈述？",
      "设计师是否有机会直接接触用户和用户数据？",
      "你如何处理设计师关于用户体验的专业建议？",
      "你们的设计评审频率和形式是否合适？",
      "设计师是否参与产品发现阶段的工作？",
    ],
    extensions: [
      "学习 Design Sprint 方法，了解如何在一周内快速验证想法",
      "探索 Figma 等设计工具，提升与设计师的沟通效率",
      "研究 User Story Mapping 方法，改善与设计师的范围协商",
      "阅读《Continuous Discovery Habits》了解产品三人组的协作模式",
    ],
    sourceUrls: [
      "https://www.svpg.com/product-manager-and-designer/",
      "https://www.invisionapp.com/inside-design/product-managers-designers/",
      "https://www.producttalk.org/product-trio/",
    ],
  },
  "pm-w8-3": {
    lessonId: "pm-w8-3",
    background: [
      "【利益相关者地图】Miro 定义利益相关者地图为 '一种分析工具，允许根据权力和利益水平对人员进行分组'。这有助于 PM 理解谁能影响项目，以及每个人与其他人的关系。",
      "【RACI 模型】RACI 是角色职责分配矩阵：Responsible（执行者）、Accountable（负责人）、Consulted（咨询者）、Informed（知情者）。每个任务只应有一个 Accountable 人员，以确保决策效率和明确责任。",
      "【最少参与原则】RACI 模型假设 'every stakeholder should be involved in the project as least as possible'。没有框架指导与利益相关者的关系，PM 会花费过多时间沟通，或错过重要反馈。",
      "【早期介入】最佳实践强调 'involve stakeholders early, even before or during the creation of the RACI matrix'。这创造了承诺感和共同所有权。",
      "【定期更新】RACI 矩阵是活文档，'should evolve with the product over time'。在每个里程碑后或产品方向发生重大变化时，应审查和更新。",
    ],
    keyDifficulties: [
      "【权力-利益分类】创建利益相关者地图时，需要评估每个人的两个维度：权力(Power)——对项目的影响力，和利益(Interest)——对项目成果的关心程度。高权力高利益的人需要密切管理。",
      "【单一负责人】'With one Accountable person, decision-making becomes faster and more focused. Having multiple Accountable people dilutes authority, leading to slower responses and less ownership.'",
      "【避免过度咨询】常见陷阱包括 'lack of role clarity, causing delays and confusion, and overloading the Consulted role, leading to feedback overload'。咨询太多人会导致决策瘫痪。",
      "【学会说不】PM 需要学会说「不」，但要给出理由。不能满足所有利益相关者的要求，需要基于数据和战略做出取舍。",
    ],
    handsOnPath: [
      "1. 列出当前项目的所有利益相关者（包括内部和外部）",
      "2. 使用权力-利益矩阵对利益相关者进行分类",
      "3. 为高权力高利益的利益相关者制定沟通计划",
      "4. 为当前项目创建 RACI 矩阵，确保每个任务只有一个 Accountable",
      "5. 与团队分享 RACI 矩阵，收集反馈并达成共识",
      "6. 建立利益相关者的定期沟通机制（周报、月度会议等）",
      "7. 记录一个你需要说「不」的请求，准备好理由和替代方案",
    ],
    selfCheck: [
      "你能画出当前项目的利益相关者地图吗？",
      "每个关键决策是否有且只有一个 Accountable 人员？",
      "你是否有对高权力高利益利益相关者的定期沟通机制？",
      "你上次拒绝利益相关者的请求是什么时候？你如何处理的？",
      "RACI 矩阵上次更新是什么时候？",
      "你如何平衡不同利益相关者的需求冲突？",
    ],
    extensions: [
      "学习 Stakeholder Salience Model（利益相关者显著性模型）",
      "探索如何处理利益相关者之间的冲突",
      "研究向上管理(Managing Up)的技巧",
      "学习如何进行有效的利益相关者访谈",
    ],
    sourceUrls: [
      "https://miro.com/templates/stakeholder-map/",
      "https://www.productplan.com/glossary/stakeholder-management/",
      "https://www.atlassian.com/team-playbook/plays/roles-and-responsibilities",
    ],
  },
  "pm-w8-4": {
    lessonId: "pm-w8-4",
    background: [
      "【金字塔原则】Barbara Minto 在麦肯锡开发的金字塔原则强调 'communication should follow a pyramid structure, with the main point at the top and supporting details beneath'。这是商业沟通的黄金标准。",
      "【结论先行】金字塔原则的核心是 'beginning with the conclusion, rather than building up to it'。这也被称为 BLUF（Bottom Line Up Front）方法，确保听众首先获得最重要的信息。",
      "【MECE 原则】金字塔原则依赖 MECE 框架：'Mutually Exclusive（相互独立）, Collectively Exhaustive（完全穷尽）'。每个支撑点应该是独立不重叠的，且共同覆盖所有相关方面。",
      "【纵向与横向逻辑】金字塔结构有两个维度：'Vertical Logic: Each layer of the pyramid supports the one above'（纵向逻辑：每层支撑上一层）；'Horizontal Logic: Ideas within each group should follow a logical sequence'（横向逻辑：同组内的想法遵循逻辑顺序）。",
      "【SCQA 框架】可以使用 SCQA 模型创建吸引听众的开场：'Situation（情境）, Complication（复杂性/问题）, Question（问题）, Answer（答案）'。这为后续内容建立了上下文。",
    ],
    keyDifficulties: [
      "【思考与沟通方向相反】Minto 指出 'The thinking process is done from the ground up, naturally progressing from your findings to recommendations to your key answer. Importantly, communicating is done in the reverse, sharing it from the top down.'",
      "【数据支撑观点】PM 的沟通需要用数据支撑观点，而非仅凭直觉或情感。每个论点都应该有证据支持。",
      "【受众适配】不同的受众需要不同的沟通方式。向高管汇报应简洁直接，向技术团队汇报可以更详细。",
      "【状态报告的有效性】Atlassian 强调状态报告应该清晰说明项目进展、风险和下一步行动，而非流水账式地列出完成的任务。",
    ],
    handsOnPath: [
      "1. 选择一个需要汇报的议题，使用金字塔原则重新组织内容：先写结论，再列支撑点",
      "2. 检查你的论点是否符合 MECE 原则：相互独立、完全穷尽",
      "3. 为下次重要汇报准备 SCQA 开场：情境、问题、疑问、答案",
      "4. 准备两个版本的同一汇报：高管版（简洁）和团队版（详细）",
      "5. 回顾你最近的状态报告，用 BLUF 原则重写",
      "6. 收集一份需要数据支撑的决策，准备相关的数据分析",
      "7. 请同事对你的汇报材料给予反馈，特别是逻辑清晰度",
    ],
    selfCheck: [
      "你的汇报是否结论先行，还是铺垫太多？",
      "你能用 MECE 原则检查你的论点结构吗？",
      "你的状态报告是否清晰说明了进展、风险和下一步？",
      "你是否根据受众调整沟通方式？",
      "你的论点是否有数据支撑？",
      "你能用一句话说清楚项目的当前状态吗？",
    ],
    extensions: [
      "阅读 Barbara Minto 的《金字塔原理》深入学习结构化思维",
      "学习如何制作高管简报(Executive Summary)",
      "探索 Story Telling 技巧，使汇报更有吸引力",
      "研究如何进行有效的产品评审(Product Review)",
    ],
    sourceUrls: [
      "https://untools.co/pyramid-principle/",
      "https://www.atlassian.com/software/confluence/templates/project-status-report",
      "https://untools.co/mece/",
    ],
  },
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
  "pm-w8-1": [
    {
      id: "pm-w8-1-q1",
      question: "根据 SVPG，PM 与工程师之间应该是什么样的关系？",
      options: [
        "PM 是工程师的上级，负责分配任务",
        "PM 与工程师是对等的合作伙伴关系",
        "工程师是 PM 的上级，负责技术决策",
        "PM 与工程师应该保持距离，通过文档沟通",
      ],
      answer: 1,
      rationale:
        "SVPG 明确指出 'One key to the PM-engineering relationship is to each be very clear that you are peers. Neither should view themselves as subordinate to the other.'。对等关系是健康协作的基础。",
    },
    {
      id: "pm-w8-1-q2",
      question: "Marty Cagan 认为 PM 失去与工程师直接接触会导致什么后果？",
      options: [
        "更高效的沟通",
        "更清晰的需求文档",
        "失去创新的机会",
        "更好的项目管理",
      ],
      answer: 2,
      rationale:
        "SVPG 指出 'When you understand why engineers are so consistently the source of true innovation, you understand that if you lose this direct access, you quickly lose your chance at innovation.'",
    },
    {
      id: "pm-w8-1-q3",
      question: "SVPG 推荐的最佳协作方式是什么？",
      options: [
        "通过详细的需求文档进行异步沟通",
        "PM 编写完整规格后交给工程师实现",
        "围绕原型进行团队讨论和协作",
        "每周一次的正式评审会议",
      ],
      answer: 2,
      rationale:
        "SVPG 明确推荐 'The best way to collaborate is to sit around a prototype so as a team you can consider and discuss the proposed solution.'",
    },
    {
      id: "pm-w8-1-q4",
      question: "根据 SVPG，资深工程师应该每天花多少时间参与产品发现工作？",
      options: [
        "不需要参与",
        "至少一小时",
        "半天时间",
        "全职参与",
      ],
      answer: 1,
      rationale:
        "SVPG 建议 'at least one senior engineer should be identified that is available to participate in discovery work at the level of at least an hour a day.'",
    },
    {
      id: "pm-w8-1-q5",
      question: "SVPG 警告应该避免的瀑布式交接流程是什么？",
      options: [
        "PM 与工程师同时工作",
        "PM 定义需求 → 设计师设计 → 工程师实现的顺序交接",
        "工程师参与早期发现",
        "团队围绕原型协作",
      ],
      answer: 1,
      rationale:
        "SVPG 警告避免 'a product manager defining requirements, handing them off to a designer to come up with a design, and then handing that off to engineers to implement'。",
    },
    {
      id: "pm-w8-1-q6",
      question: "关于技术决策，SVPG 建议团队应该如何处理？",
      options: [
        "PM 做最终技术决策",
        "由投票决定",
        "如果技术负责人认为需要特定架构，团队应该听从技术负责人",
        "总是选择最快的实现方式",
      ],
      answer: 2,
      rationale:
        "SVPG 指出 'Generally speaking, if the tech lead feels a specific architecture is called for, teams defer to the tech lead.'",
    },
    {
      id: "pm-w8-1-q7",
      question: "SVPG 对「协作」的定义是什么？",
      options: [
        "达成共识或民主投票",
        "与设计师、工程师、利益相关者共同找到解决所有约束的方案",
        "PM 听取各方意见后做决定",
        "定期召开会议讨论进度",
      ],
      answer: 1,
      rationale:
        "SVPG 定义 'Collaboration means working together with designers and engineers, stakeholders and executives to come up with a solution that solves for all constraints.' 并强调 'Collaboration is not about consensus, nor is it about democracy.'",
    },
    {
      id: "pm-w8-1-q8",
      question: "以下哪种做法会损害 PM 与工程师的协作？",
      options: [
        "PM 保持与工程师的直接沟通",
        "在 PM 与工程师之间设置中间人或流程",
        "工程师参与产品发现",
        "围绕原型进行讨论",
      ],
      answer: 1,
      rationale:
        "SVPG 强调 PM 需要 'protect their direct access to engineers, designers, and customers, and fight any temptation to place a person or process between them.'",
    },
    {
      id: "pm-w8-1-q9",
      question: "根据 The Pragmatic Engineer，最健康的工程团队具备什么特征？",
      options: [
        "严格的层级管理",
        "工程经理与产品经理之间的强大关系",
        "完全独立的工作方式",
        "最少的沟通和会议",
      ],
      answer: 1,
      rationale:
        "The Pragmatic Engineer 指出 '最高效且最健康的工程团队都具备工程经理与产品经理之间的强大关系'。",
    },
    {
      id: "pm-w8-1-q10",
      question: "SVPG 认为将 PM 职责分割（一人对接客户，另一人对接工程师）会导致什么问题？",
      options: [
        "更高的效率",
        "更好的专业化",
        "PM 失去与工程师的直接接触",
        "更清晰的职责分工",
      ],
      answer: 2,
      rationale:
        "SVPG 警告 'Cutting up the PM job to have a product manager that interacts with customers and stakeholders, but a different person (e.g., product owner) that interacts with the engineers, causes the PM to lose direct access to engineers.'",
    },
    {
      id: "pm-w8-1-q11",
      question: "根据 SVPG，优秀的产品来自什么？",
      options: [
        "PM 独立完成的详细需求文档",
        "PM、用户体验设计师和架构师/工程师的协作",
        "高管的战略指导",
        "竞品分析和市场研究",
      ],
      answer: 1,
      rationale:
        "SVPG 明确指出 'Great products come from the collaboration of the product manager, user experience designer and architect/engineer.'",
    },
    {
      id: "pm-w8-1-q12",
      question: "PM 应该如何对待工程师的工作量估算？",
      options: [
        "根据商业需求压缩估算",
        "尊重工程师的估算，不强压进度",
        "由 PM 提供最终估算",
        "忽略估算，按截止日期倒推",
      ],
      answer: 1,
      rationale:
        "roadmap 定义中强调 PM 应该 '尊重工程师的估算，不要强压进度'。强压进度会损害团队信任和产品质量。",
    },
  ],
  "pm-w8-2": [
    {
      id: "pm-w8-2-q1",
      question: "根据 Teresa Torres，产品三人组(Product Trio)由哪些角色组成？",
      options: [
        "PM、销售、客服",
        "PM、设计师、工程师",
        "PM、高管、用户",
        "设计师、工程师、测试",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 定义产品三人组由 'PM、设计师和工程师组成，这三个角色是创建优质数字产品所需的最少人员'。",
    },
    {
      id: "pm-w8-2-q2",
      question: "现代产品团队中，「交接」(handoff) 应该被替换为什么？",
      options: [
        "更详细的文档",
        "更正式的评审流程",
        "协作点(collaboration points)",
        "更多的会议",
      ],
      answer: 2,
      rationale:
        "研究表明 'The notion of a handoff is going by the wayside. You are a team. As such, you should not have transition points, you should have collaboration points.'",
    },
    {
      id: "pm-w8-2-q3",
      question: "PM 和设计师协作的第一件事应该是什么？",
      options: [
        "讨论视觉设计风格",
        "共同定义清晰的问题陈述",
        "确定功能列表",
        "评审竞品设计",
      ],
      answer: 1,
      rationale:
        "最佳实践强调 'It is essential to not just work on feature ideas, but instead work on solving problems. The first thing PM and designer need to collaborate on is a clear definition of the problem.'",
    },
    {
      id: "pm-w8-2-q4",
      question: "优秀的 PM 应该如何支持设计师？",
      options: [
        "详细规定设计方案",
        "分享客户洞察和用户数据",
        "跳过用户研究直接开始设计",
        "只在设计完成后提供反馈",
      ],
      answer: 1,
      rationale:
        "研究表明 'Designers need customer empathy to create the best user experiences they possibly can. As a product manager, you are most likely interacting closely with customers.' 分享用户数据是优秀 PM 的标志。",
    },
    {
      id: "pm-w8-2-q5",
      question: "当设计师说某个方案行不通时，PM 应该怎么做？",
      options: [
        "忽略设计师的意见，坚持自己的想法",
        "尊重设计师的专业意见",
        "让高管做最终决定",
        "进行投票表决",
      ],
      answer: 1,
      rationale:
        "研究强调 'If your designers are telling you that something will not work, or would look better in a different way, that is an opinion you need to respect.'",
    },
    {
      id: "pm-w8-2-q6",
      question: "关于设计评审的频率，以下哪种做法更合适？",
      options: [
        "设计完成后才进行评审",
        "早期且频繁地进行检查，同时避免过度监督",
        "每周固定一次，不论进度",
        "完全不需要定期评审",
      ],
      answer: 1,
      rationale:
        "研究指出 'Feedback sessions and check-ins can be great collaboration points, and it is wise to have your first check-ins early on in the process.' 但要注意不要让设计师感觉被过度监督。",
    },
    {
      id: "pm-w8-2-q7",
      question: "PM 和设计师如何确保顺畅协作？",
      options: [
        "详细的文档交接",
        "在基本方向上达成良好对齐，从「为什么」开始",
        "严格的时间表和里程碑",
        "减少沟通，各自独立工作",
      ],
      answer: 1,
      rationale:
        "研究表明确保顺畅协作的最佳方式是 'good alignment on the fundamental direction. This means starting with why on the highest level: how does what we are about to do contribute to our company and product vision?'",
    },
    {
      id: "pm-w8-2-q8",
      question: "在现代授权团队中，PM 和设计师的角色边界有什么变化？",
      options: [
        "边界更加严格和清晰",
        "角色正在融合：设计师关注指标，PM 在 Figma 中评论",
        "PM 完全接管设计决策",
        "设计师完全接管产品决策",
      ],
      answer: 1,
      rationale:
        "研究表明 'Designers are taking an active role in driving the metrics and QA, PMs are commenting in Figma files and brainstorming technical solutions, and Engineers are taking an active role in defining the problem.'",
    },
    {
      id: "pm-w8-2-q9",
      question: "建立 PM 与设计师关系的推荐起点是什么？",
      options: [
        "立即开始项目工作",
        "请设计师喝咖啡，了解他们的工作方式和动机",
        "发送详细的项目需求文档",
        "安排正式的角色职责讨论",
      ],
      answer: 1,
      rationale:
        "研究建议 'take your designer out for coffee, get to know them first and foremost, and understand what motivates them, what they need, and how they like to work.'",
    },
    {
      id: "pm-w8-2-q10",
      question: "用户故事地图(User Story Mapping)可以帮助 PM 和设计师做什么？",
      options: [
        "替代用户研究",
        "协商范围并就 MVP 达成共识",
        "评估设计师绩效",
        "创建技术架构",
      ],
      answer: 1,
      rationale:
        "研究指出 'User Story Mapping is one effective tool to negotiate with Product Managers and Engineers on what could be the first cut of the designs.'",
    },
    {
      id: "pm-w8-2-q11",
      question: "最新趋势建议在用户验证访谈中应该包括哪些人？",
      options: [
        "只有 PM",
        "PM 和 UX 及工程师",
        "只有设计师",
        "只有销售团队",
      ],
      answer: 1,
      rationale:
        "研究表明最新趋势是 'bring UX and Engineering into early validation conversations with customers'。不同角色在访谈中会听到不同的信息。",
    },
    {
      id: "pm-w8-2-q12",
      question: "PM 与设计师协作中，「清晰的期望」为什么重要？",
      options: [
        "只对 PM 有好处",
        "优秀的协作无法在没有频繁透明沟通的情况下存在",
        "只对设计师有好处",
        "与协作质量无关",
      ],
      answer: 1,
      rationale:
        "研究强调 'Great collaboration cannot exist without frequent and transparent communication. For both sides, it starts with being clear about what your expectations are.'",
    },
  ],
  "pm-w8-3": [
    {
      id: "pm-w8-3-q1",
      question: "利益相关者地图根据哪两个维度对人员进行分组？",
      options: [
        "年龄和职级",
        "权力(Power)和利益(Interest)",
        "部门和地点",
        "预算和时间",
      ],
      answer: 1,
      rationale:
        "Miro 定义利益相关者地图为 '一种分析工具，允许根据权力和利益水平对人员进行分组'。",
    },
    {
      id: "pm-w8-3-q2",
      question: "RACI 模型中的 A(Accountable) 代表什么？",
      options: [
        "实际执行工作的人",
        "最终负责任务完成的人，每个任务只应有一个",
        "需要咨询意见的人",
        "需要被告知进展的人",
      ],
      answer: 1,
      rationale:
        "RACI 中 'Accountable refers to the person who ultimately owns the task or decision and ensures that it is completed successfully and on time. There is typically only one Accountable person per task.'",
    },
    {
      id: "pm-w8-3-q3",
      question: "RACI 模型假设利益相关者应该以什么原则参与项目？",
      options: [
        "最大参与原则",
        "最少参与原则",
        "等量参与原则",
        "轮流参与原则",
      ],
      answer: 1,
      rationale:
        "RACI 模型假设 'every stakeholder should be involved in the project as least as possible'，即最少参与原则。",
    },
    {
      id: "pm-w8-3-q4",
      question: "为什么每个任务只应该有一个 Accountable 人员？",
      options: [
        "节省成本",
        "决策更快更专注，避免责任模糊",
        "减少会议数量",
        "符合法律要求",
      ],
      answer: 1,
      rationale:
        "研究指出 'With one Accountable person, decision-making becomes faster and more focused. Having multiple Accountable people dilutes authority, leading to slower responses and less ownership.'",
    },
    {
      id: "pm-w8-3-q5",
      question: "创建 RACI 矩阵的最佳实践之一是什么？",
      options: [
        "只在项目开始时创建，之后不需要更新",
        "利益相关者应该在创建矩阵之前或期间就被引入",
        "只由 PM 独自创建",
        "尽可能复杂和详细",
      ],
      answer: 1,
      rationale:
        "最佳实践强调 'involve stakeholders early, even before or during the creation of the RACI matrix. This creates a sense of commitment and shared ownership right from the beginning.'",
    },
    {
      id: "pm-w8-3-q6",
      question: "利益相关者地图的主要好处不包括以下哪项？",
      options: [
        "改进沟通",
        "保证项目一定成功",
        "有效资源分配",
        "预防冲突",
      ],
      answer: 1,
      rationale:
        "利益相关者地图的好处包括改进沟通、保持一致性、有效资源分配、预防冲突和知情决策，但不能保证项目一定成功。",
    },
    {
      id: "pm-w8-3-q7",
      question: "RACI 中的 C(Consulted) 角色常见的问题是什么？",
      options: [
        "咨询太少人",
        "咨询太多人导致反馈过载",
        "不需要咨询任何人",
        "咨询与项目无关的人",
      ],
      answer: 1,
      rationale:
        "常见陷阱包括 'overloading the Consulted role, leading to feedback overload'。咨询太多人会导致决策瘫痪。",
    },
    {
      id: "pm-w8-3-q8",
      question: "RACI 矩阵应该多久更新一次？",
      options: [
        "只在项目开始时创建一次",
        "每个里程碑后或产品方向发生重大变化时",
        "每天更新",
        "只在项目结束时更新",
      ],
      answer: 1,
      rationale:
        "RACI 矩阵是活文档，'should evolve with the product over time. Review and update the RACI Matrix regularly, especially after each milestone or when there is a significant change in the product direction.'",
    },
    {
      id: "pm-w8-3-q9",
      question: "高权力高利益的利益相关者应该如何管理？",
      options: [
        "保持最少沟通",
        "密切管理和定期沟通",
        "仅通过邮件通知",
        "完全忽略",
      ],
      answer: 1,
      rationale:
        "在权力-利益矩阵中，高权力高利益的利益相关者需要密切管理，建立定期沟通机制。",
    },
    {
      id: "pm-w8-3-q10",
      question: "Atlassian 的角色职责定义流程强调什么原则？",
      options: [
        "关注个人而非角色",
        "关注角色而非个人，将技能差距与个人表现分开",
        "只关注管理层角色",
        "只关注技术角色",
      ],
      answer: 1,
      rationale:
        "Atlassian 强调 'Focus on roles, not people - Separates skill gaps from individual performance'。这有助于客观地讨论职责分工。",
    },
    {
      id: "pm-w8-3-q11",
      question: "RACI 在敏捷环境中的适用性如何？",
      options: [
        "完全不适用",
        "仍然有用，特别是管理跨部门协作和明确责任归属",
        "只适用于瀑布流程",
        "需要完全重新设计",
      ],
      answer: 1,
      rationale:
        "研究表明 'While Agile emphasizes flexibility, the RACI Matrix is still very useful in Agile environments, especially for managing cross-departmental collaboration and clarifying ownership.'",
    },
    {
      id: "pm-w8-3-q12",
      question: "PM 学会说「不」时应该注意什么？",
      options: [
        "不需要解释原因",
        "给出理由，基于数据和战略做出取舍",
        "每次都妥协",
        "让其他人代替说「不」",
      ],
      answer: 1,
      rationale:
        "PM 需要学会说「不」，但要给出理由。不能满足所有利益相关者的要求，需要基于数据和战略做出取舍。",
    },
  ],
  "pm-w8-4": [
    {
      id: "pm-w8-4-q1",
      question: "金字塔原则由谁在哪家公司开发？",
      options: [
        "Peter Drucker 在 GE",
        "Barbara Minto 在麦肯锡",
        "Michael Porter 在哈佛",
        "Steve Jobs 在苹果",
      ],
      answer: 1,
      rationale:
        "金字塔原则 'developed by Barbara Minto during her time at McKinsey'，是商业沟通的经典方法论。",
    },
    {
      id: "pm-w8-4-q2",
      question: "金字塔原则的核心沟通方式是什么？",
      options: [
        "从背景铺垫开始，逐渐引向结论",
        "先说结论，再提供支撑细节",
        "按时间顺序叙述",
        "按重要性从低到高排列",
      ],
      answer: 1,
      rationale:
        "金字塔原则的核心是 'beginning with the conclusion, rather than building up to it'。这被称为 BLUF（Bottom Line Up Front）方法。",
    },
    {
      id: "pm-w8-4-q3",
      question: "MECE 原则中的 ME 代表什么？",
      options: [
        "Maximum Efficiency（最大效率）",
        "Mutually Exclusive（相互独立）",
        "Most Essential（最重要的）",
        "Minimum Effort（最少努力）",
      ],
      answer: 1,
      rationale:
        "MECE 代表 'Mutually Exclusive（相互独立）, Collectively Exhaustive（完全穷尽）'。每个支撑点应该是独立不重叠的。",
    },
    {
      id: "pm-w8-4-q4",
      question: "金字塔结构的纵向逻辑(Vertical Logic)是什么意思？",
      options: [
        "同一层级的想法相互关联",
        "每一层支撑上一层，最终支撑顶层结论",
        "按时间顺序排列",
        "按字母顺序排列",
      ],
      answer: 1,
      rationale:
        "纵向逻辑是指 'Vertical Logic: Each layer of the pyramid supports the one above. The top-level conclusion is logically derived from the middle-layer points.'",
    },
    {
      id: "pm-w8-4-q5",
      question: "SCQA 框架中的 C 代表什么？",
      options: [
        "Conclusion（结论）",
        "Complication（复杂性/问题）",
        "Communication（沟通）",
        "Customer（客户）",
      ],
      answer: 1,
      rationale:
        "SCQA 框架包含 'Situation（情境）, Complication（复杂性/问题）, Question（问题）, Answer（答案）'。",
    },
    {
      id: "pm-w8-4-q6",
      question: "Minto 关于思考和沟通的方向有什么建议？",
      options: [
        "思考和沟通应该方向一致",
        "思考从下往上，沟通从上往下（方向相反）",
        "只需要关注思考，沟通自然形成",
        "只需要关注沟通，思考不重要",
      ],
      answer: 1,
      rationale:
        "Minto 指出 'The thinking process is done from the ground up... Importantly, communicating is done in the reverse, sharing it from the top down.'",
    },
    {
      id: "pm-w8-4-q7",
      question: "MECE 原则中的 CE 代表什么？",
      options: [
        "Clear Expression（清晰表达）",
        "Collectively Exhaustive（完全穷尽）",
        "Customer Experience（客户体验）",
        "Cost Effective（成本效益）",
      ],
      answer: 1,
      rationale:
        "MECE 中 CE 代表 'Collectively Exhaustive（完全穷尽）'，意味着所有论点加在一起应该覆盖所有相关方面。",
    },
    {
      id: "pm-w8-4-q8",
      question: "横向逻辑(Horizontal Logic)要求什么？",
      options: [
        "上下层级之间有逻辑关系",
        "同一组内的想法遵循逻辑顺序（如时间顺序、因果关系）",
        "只需要视觉上水平排列",
        "与纵向逻辑相同",
      ],
      answer: 1,
      rationale:
        "横向逻辑是指 'Horizontal Logic: Ideas within each group should follow a logical sequence, whether chronological, cause-effect, or according to another rational framework.'",
    },
    {
      id: "pm-w8-4-q9",
      question: "向高管汇报与向技术团队汇报应该有什么区别？",
      options: [
        "完全相同的内容和方式",
        "高管版应简洁直接，团队版可以更详细",
        "高管版应更详细",
        "不需要区分受众",
      ],
      answer: 1,
      rationale:
        "不同的受众需要不同的沟通方式。向高管汇报应简洁直接，向技术团队汇报可以更详细。",
    },
    {
      id: "pm-w8-4-q10",
      question: "金字塔原则在商业领域的主要应用是什么？",
      options: [
        "只用于演讲",
        "改善报告、演示和文档的影响力和理解度",
        "只用于写代码",
        "只用于财务分析",
      ],
      answer: 1,
      rationale:
        "研究表明金字塔原则 'is widely used in business, consulting, and professional communication to improve the impact and understanding of reports, presentations, and documents.'",
    },
    {
      id: "pm-w8-4-q11",
      question: "有效的状态报告应该包含什么？",
      options: [
        "只列出完成的任务",
        "清晰说明项目进展、风险和下一步行动",
        "只说好消息",
        "尽可能详细地记录每一天的工作",
      ],
      answer: 1,
      rationale:
        "状态报告应该清晰说明项目进展、风险和下一步行动，而非流水账式地列出完成的任务。",
    },
    {
      id: "pm-w8-4-q12",
      question: "PM 的论点应该如何支撑？",
      options: [
        "凭直觉和情感",
        "用数据支撑，每个论点都应该有证据",
        "引用权威人士的话",
        "使用流行语和术语",
      ],
      answer: 1,
      rationale:
        "PM 的沟通需要用数据支撑观点，而非仅凭直觉或情感。每个论点都应该有证据支持。",
    },
  ],
}
