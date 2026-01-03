import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
  "pm-w4-1": {
    lessonId: "pm-w4-1",
    background: [
      "【需求来源多样性】产品需求来自多个渠道：用户反馈、数据洞察、销售/客服反馈、竞品分析、战略目标等。Intercom 指出「42% 的公司不调研客户或收集反馈」，这意味着系统化的需求收集是竞争优势。",
      "【机会解决方案树】Teresa Torres 提出的 Opportunity Solution Tree 框架包含四层：期望成果（Outcome）→ 机会（用户需求/痛点）→ 解决方案 → 实验验证。这个框架帮助团队「将期望的成果与机会和解决方案联系起来」。",
      "【需求 vs 功能】核心区别：需求是「需要解决的问题」，功能是「解决方案」。Teresa Torres 强调「好的产品发现包括让客户参与整个决策过程」，避免直接跳到功能设计。",
      "【主动 vs 被动反馈】Intercom 区分两类反馈：主动反馈（用户主动提出）和被动反馈（通过调研获取）。主动反馈「往往揭示你未曾考虑的问题」，但通常来自极端满意或不满的用户。",
      "【产品三人组协作】Teresa Torres 提出 Product Trio 概念：产品经理、设计师、工程师共同进行需求发现。团队应该「每周至少与客户有一次交流」，将需求收集变成持续习惯。",
    ],
    keyDifficulties: [
      "【区分需求和解决方案】用户常常提出的是「我想要 X 功能」，但真正的需求可能是「我想解决 Y 问题」。需要深挖「五个为什么」找到根本需求。",
      "【避免 HiPPO 效应】HiPPO（Highest Paid Person's Opinion）指最高薪人的意见主导决策。需要建立基于数据和用户反馈的决策机制，而非职位高低。",
      "【需求优先级的主观性】不同利益相关者对需求优先级有不同看法。销售想要客户要求的功能，技术想要还技术债，产品想要创新。需要建立统一的优先级框架。",
      "【知识的诅咒】Teresa Torres 提到「知识的诅咒」——随着团队对产品越来越熟悉，他们会逐渐失去用户视角，做出脱离用户需求的决策。",
    ],
    handsOnPath: [
      "1. 绘制你当前产品的机会解决方案树（OST）：从业务目标出发，列出用户机会和可能的解决方案",
      "2. 建立需求收集渠道清单：用户反馈表单、客服工单、销售反馈、数据分析、用户访谈等",
      "3. 对过去一个月收到的需求进行分类：哪些是「需求」，哪些是「解决方案」？",
      "4. 设计一个简单的需求记录模板：来源、用户类型、问题描述、期望成果、优先级建议",
      "5. 安排本周与一位真实用户的交流，使用开放式问题了解他们的痛点",
      "6. 与团队进行一次需求评审，讨论每个需求背后的「为什么」",
    ],
    selfCheck: [
      "你能说出你产品当前的三个最重要的用户需求吗？",
      "你最近一次与真实用户交流是什么时候？了解到了什么？",
      "你的需求收集是系统化的还是随机的？有哪些固定的渠道？",
      "你能区分「需求」和「功能请求」吗？举一个例子。",
      "你的团队如何决定需求优先级？有统一的框架吗？",
      "你如何避免「知识的诅咒」，保持用户视角？",
    ],
    extensions: [
      "阅读 Teresa Torres 的《Continuous Discovery Habits》深入学习持续发现方法",
      "学习如何使用 Miro 或 FigJam 创建可视化的机会解决方案树",
      "研究不同的需求优先级框架：RICE、MoSCoW、Kano 模型",
      "探索如何建立 Voice of Customer（VoC）程序",
    ],
    sourceUrls: [
      "https://www.producttalk.org/2021/08/product-discovery/",
      "https://www.productplan.com/learn/feature-requests-from-prospects/",
      "https://www.intercom.com/blog/customer-feedback/",
    ],
  },
  "pm-w4-2": {
    lessonId: "pm-w4-2",
    background: [
      "【用户故事定义】Mountain Goat Software 定义用户故事为「从期望新功能的人的角度出发，对该功能的简短描述」。标准格式：As a <用户类型>, I want <目标>, so that <收益>。",
      "【3C 原则】Ron Jeffries 提出用户故事的 3C 原则：Card（卡片，书面描述）、Conversation（对话，细节讨论）、Confirmation（确认，验收测试）。Mountain Goat 强调「每个用户故事都是未来对话的占位符」。",
      "【INVEST 原则】好的用户故事符合 INVEST 原则：Independent（独立的）、Negotiable（可协商的）、Valuable（有价值的）、Estimable（可估算的）、Small（小的）、Testable（可测试的）。",
      "【SAFe 故事层级】SAFe 框架定义故事层级：Epic → Capability → Feature → Story。Story 是「敏捷团队在几天内完成的最小功能切片」，代表持续交付价值的单元。",
      "【验收标准】验收标准（Acceptance Criteria）定义故事完成的条件。Mountain Goat 建议通过「拆分」和「添加验收条件」两种方式为故事添加细节。",
    ],
    keyDifficulties: [
      "【故事太大或太小】太大的故事（Epic）难以估算和交付；太小的故事增加管理开销。SAFe 建议故事应「小到能在几天内完成」。",
      "【缺少价值陈述】很多团队写的用户故事只有「I want」部分，缺少「so that」。没有价值陈述，团队不理解为什么要做这个功能。",
      "【技术故事的处理】不是所有工作都适合用户故事格式。SAFe 引入「Enabler Stories」处理探索、架构、基础设施和合规工作。",
      "【验收标准模糊】模糊的验收标准如「系统应该快」无法测试。好的验收标准是具体的、可衡量的，如「页面加载时间 < 2 秒」。",
    ],
    handsOnPath: [
      "1. 选择一个即将开发的功能，用标准格式写出用户故事",
      "2. 检查这个故事是否符合 INVEST 原则，逐项打分",
      "3. 为这个故事写 3-5 条验收标准，确保可测试",
      "4. 如果故事太大，练习拆分成更小的故事",
      "5. 与开发团队一起评审故事，确保他们能估算工作量",
      "6. 识别一个技术需求，尝试写成 Enabler Story",
      "7. 建立一个故事模板，供团队标准化使用",
    ],
    selfCheck: [
      "你能背出用户故事的标准格式吗？",
      "INVEST 原则的六个字母分别代表什么？",
      "你最近写的用户故事是否有「so that」部分？",
      "你如何判断一个故事是否足够小？",
      "你的验收标准是否具体到可以测试？",
      "你如何处理技术债务或架构工作？用什么格式描述？",
    ],
    extensions: [
      "学习 Gherkin 语法（Given-When-Then）编写行为驱动的验收标准",
      "研究故事映射（Story Mapping）技术，Jeff Patton 的方法",
      "探索如何使用 Jira、Linear 或 Azure DevOps 管理用户故事",
      "学习如何进行故事点估算（Story Points）和规划扑克（Planning Poker）",
    ],
    sourceUrls: [
      "https://www.atlassian.com/agile/project-management/user-stories",
      "https://www.mountaingoatsoftware.com/agile/user-stories",
      "https://framework.scaledagile.com/story",
    ],
  },
  "pm-w4-3": {
    lessonId: "pm-w4-3",
    background: [
      "【PRD 定义】ProductPlan 定义 PRD（Product Requirements Document）为「概述产品或功能规格和期望的基础规划工具」。PRD 是产品团队、开发者、设计师和利益相关者之间的沟通桥梁。",
      "【核心目的】PRD 在开发开始前建立清晰的需求，帮助团队对齐「需要构建什么」和「为什么构建」。这减少了沟通误解，确保各方理解产品愿景。",
      "【PRD 核心要素】完整的 PRD 包含：产品概述（解决什么问题）、目标用户、功能和特性、成功指标、时间线和资源、验收标准（完成的定义）。",
      "【敏捷环境下的 PRD】在敏捷环境中，PRD 不是一成不变的巨型文档，而是「活文档」（Living Document）。随着需求演进持续更新，保持敏捷性。",
      "【非功能需求】除了功能需求，PRD 还应包含非功能需求：性能（响应时间）、安全（数据保护）、可用性（正常运行时间）、兼容性（浏览器、设备支持）等。",
    ],
    keyDifficulties: [
      "【过度文档化】传统 PRD 动辄几十页，在敏捷环境中难以维护。关键是找到「足够详细」和「过度文档化」之间的平衡。",
      "【PRD 与设计稿脱节】PRD 描述的功能与设计稿、技术方案不一致是常见问题。需要建立 PRD、设计稿、技术方案的联动更新机制。",
      "【成功指标缺失】很多 PRD 只描述功能，不定义如何衡量成功。没有成功指标，功能上线后无法判断是否达到预期。",
      "【利益相关者过多参与】每个人都想在 PRD 中加需求会导致范围蔓延。需要明确 PRD 的审批流程和变更管理。",
    ],
    handsOnPath: [
      "1. 选择一个即将开发的功能，创建 PRD 大纲",
      "2. 填写背景和目标部分：为什么要做这个功能？解决什么问题？",
      "3. 定义目标用户和用户场景",
      "4. 列出功能范围：做什么、不做什么（明确边界）",
      "5. 定义成功指标：如何衡量这个功能是否成功？",
      "6. 添加非功能需求：性能、安全、兼容性等",
      "7. 与设计师和工程师评审 PRD，收集反馈并迭代",
    ],
    selfCheck: [
      "你的 PRD 是否清晰地回答了「为什么要做」这个问题？",
      "你的 PRD 有明确的成功指标吗？上线后如何判断成功？",
      "你的 PRD 是否明确了「不做什么」？范围边界清晰吗？",
      "你的 PRD 多久更新一次？是活文档还是一次性文档？",
      "设计师和工程师是否参与了 PRD 的制定？",
      "你的 PRD 包含非功能需求吗？性能、安全如何定义？",
    ],
    extensions: [
      "学习不同公司的 PRD 模板：Amazon 的 PR/FAQ、Stripe 的 RFC",
      "探索如何使用 Notion、Confluence 或 Coda 管理 PRD",
      "研究 PRD 与 BRD（Business Requirements Document）的区别",
      "学习如何进行需求评审会议（Requirements Review）",
    ],
    sourceUrls: [
      "https://www.svpg.com/product-requirements-documents/",
      "https://www.productplan.com/glossary/product-requirements-document/",
      "https://www.atlassian.com/software/confluence/templates/product-requirements-document",
    ],
  },
  "pm-w4-4": {
    lessonId: "pm-w4-4",
    background: [
      "【Backlog 定义】Scrum Guide 定义 Product Backlog 为「一个涌现的、有序的列表，包含改进产品所需的内容」。它是 Scrum 团队工作的唯一来源。",
      "【Product Goal】Product Goal 是「产品的未来状态，可作为 Scrum 团队规划的目标」。这是一个长期目标，必须完成或放弃后才能追求下一个。",
      "【Backlog 层级】Roman Pichler 的 Product Backlog Board 包含三个区域：Story Area（用户故事，分为「就绪」和「Epic/主题」）、Constraint Area（全局非功能需求）、Model Area（工作流和需求模型）。",
      "【精炼活动】Backlog Refinement 是将大项拆分为更小、更明确的单元的持续活动。Scrum Guide 指出项目通过精炼「变得对 Sprint 选择更加就绪」。",
      "【渐进式细化】Roman Pichler 强调 Epic 是「粗粒度的、草图式的」占位符，逐渐细化为详细的用户故事。避免过早进行完整的前期设计。",
    ],
    keyDifficulties: [
      "【Backlog 过于庞大】很多团队的 Backlog 有几百个条目，大部分永远不会开发。Roman Pichler 建议「策略性地储备，重点关注下个版本所需的条目」。",
      "【优先级频繁变化】业务压力导致优先级频繁调整，团队无所适从。需要建立优先级变更的治理机制，保护团队专注。",
      "【故事「就绪」的定义】什么样的故事才算准备好进入 Sprint？Roman Pichler 要求故事必须「清晰、可行、可测试」才能从 Backlog 进入 Sprint。",
      "【技术债务的处理】技术债务往往被业务需求挤压。需要在 Backlog 中预留固定比例（如 20%）处理技术债务和架构改进。",
    ],
    handsOnPath: [
      "1. 审视当前的 Product Backlog，统计条目数量和最老条目的年龄",
      "2. 清理 Backlog：删除 6 个月以上未动的条目，或移到「冰箱」列表",
      "3. 定义「Definition of Ready」：故事进入 Sprint 前必须满足什么条件？",
      "4. 建立 Backlog 精炼会议节奏：每周一次，参与者、时长、产出",
      "5. 创建 Epic → Feature → Story 的拆分示例",
      "6. 与团队讨论技术债务的处理策略：预留多少容量？如何优先级？",
      "7. 尝试使用 Roman Pichler 的 Product Backlog Board 可视化管理",
    ],
    selfCheck: [
      "你的 Backlog 有多少条目？最老的条目是什么时候创建的？",
      "你的团队有「Definition of Ready」吗？内容是什么？",
      "Backlog 精炼会议的频率和参与者是什么？",
      "你如何处理技术债务？在 Backlog 中占多少比例？",
      "Epic 是如何拆分成 Story 的？有标准流程吗？",
      "Product Owner 如何与团队协作管理 Backlog？",
    ],
    extensions: [
      "学习 Story Mapping 技术，用可视化方式组织 Backlog",
      "研究 WSJF（Weighted Shortest Job First）优先级排序方法",
      "探索如何使用 Jira、Azure DevOps 或 Linear 进行 Backlog 管理",
      "学习如何进行 Backlog 健康度评估",
    ],
    sourceUrls: [
      "https://www.scrum.org/resources/what-is-a-product-backlog",
      "https://www.atlassian.com/agile/scrum/backlog-refinement",
      "https://www.romanpichler.com/blog/product-backlog/",
    ],
  },
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
  "pm-w4-1": [
    {
      id: "pm-w4-1-q1",
      question: "根据 Teresa Torres，机会解决方案树（Opportunity Solution Tree）的四个层级是什么？",
      options: [
        "需求 → 功能 → 任务 → 测试",
        "期望成果 → 机会 → 解决方案 → 实验",
        "用户 → 场景 → 故事 → 验收标准",
        "战略 → 战术 → 执行 → 复盘",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 的 Opportunity Solution Tree 包含四层：Outcome（期望成果）→ Opportunities（机会/用户需求）→ Solutions（解决方案）→ Experiments（实验验证）。",
    },
    {
      id: "pm-w4-1-q2",
      question: "根据 Intercom，多少比例的公司不调研客户或收集反馈？",
      options: [
        "12%",
        "22%",
        "42%",
        "62%",
      ],
      answer: 2,
      rationale:
        "Intercom 指出「42% 的公司不调研客户或收集反馈」，这表明系统化的需求收集仍是很多公司的薄弱环节。",
    },
    {
      id: "pm-w4-1-q3",
      question: "Teresa Torres 建议产品团队多久与客户交流一次？",
      options: [
        "每月一次",
        "每周至少一次",
        "每季度一次",
        "只在项目开始时",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 强调「每周至少与客户有一次交流」，将需求收集变成持续习惯而非一次性活动。",
    },
    {
      id: "pm-w4-1-q4",
      question: "「需求」和「功能请求」的核心区别是什么？",
      options: [
        "需求来自用户，功能请求来自内部",
        "需求是问题描述，功能请求是解决方案",
        "需求是短期的，功能请求是长期的",
        "需求是免费的，功能请求是付费的",
      ],
      answer: 1,
      rationale:
        "核心区别：需求是「需要解决的问题」，功能请求是「用户提出的解决方案」。产品经理应深挖需求背后的问题。",
    },
    {
      id: "pm-w4-1-q5",
      question: "根据 Intercom，主动反馈（Unsolicited Feedback）的特点是什么？",
      options: [
        "来自所有用户的平均反馈",
        "往往来自极端满意或不满的用户，揭示未曾考虑的问题",
        "只反映产品的正面评价",
        "比被动反馈更准确",
      ],
      answer: 1,
      rationale:
        "Intercom 指出主动反馈「往往揭示你未曾考虑的问题」，但通常来自极端满意或不满的用户，存在样本偏差。",
    },
    {
      id: "pm-w4-1-q6",
      question: "Teresa Torres 提到的「知识的诅咒」是指什么？",
      options: [
        "团队学习太多知识会变笨",
        "团队对产品越熟悉，越容易失去用户视角",
        "知识产权的法律问题",
        "技术知识过时的问题",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 提到「知识的诅咒」——随着团队对产品越来越熟悉，他们会逐渐失去用户视角，做出脱离用户需求的决策。",
    },
    {
      id: "pm-w4-1-q7",
      question: "Product Trio 指的是哪三个角色？",
      options: [
        "CEO、CTO、CFO",
        "产品经理、设计师、工程师",
        "销售、市场、客服",
        "产品经理、项目经理、运营经理",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 提出 Product Trio 概念：产品经理、设计师、工程师共同进行需求发现和产品决策。",
    },
    {
      id: "pm-w4-1-q8",
      question: "HiPPO 效应是什么意思？",
      options: [
        "用户像河马一样难以沟通",
        "最高薪人的意见主导决策",
        "产品像河马一样缓慢发展",
        "团队像河马群一样混乱",
      ],
      answer: 1,
      rationale:
        "HiPPO（Highest Paid Person's Opinion）指最高薪人的意见主导决策，这是需求管理中应该避免的反模式。",
    },
    {
      id: "pm-w4-1-q9",
      question: "根据 Teresa Torres，好的产品发现应该包括什么？",
      options: [
        "只依赖数据分析",
        "让客户参与整个决策过程",
        "完全由产品经理独立决策",
        "只在项目结束时收集反馈",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 强调「好的产品发现包括让客户参与整个决策过程」，而非产品经理独立决策。",
    },
    {
      id: "pm-w4-1-q10",
      question: "需求收集的常见渠道不包括以下哪项？",
      options: [
        "用户访谈",
        "客服工单",
        "竞品分析",
        "员工绩效考核",
      ],
      answer: 3,
      rationale:
        "需求收集渠道包括用户访谈、客服工单、销售反馈、竞品分析、数据洞察等。员工绩效考核不是需求收集渠道。",
    },
    {
      id: "pm-w4-1-q11",
      question: "假设测试（Assumption Testing）验证解决方案的五个类别是什么？",
      options: [
        "功能性、可用性、可靠性、性能、安全性",
        "可取性、可行性、可行性、可用性、道德性",
        "用户、业务、技术、设计、法律",
        "短期、中期、长期、战略、战术",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 指出假设测试验证五个类别：desirable（可取性）、viable（商业可行性）、feasible（技术可行性）、usable（可用性）、ethical（道德性）。",
    },
    {
      id: "pm-w4-1-q12",
      question: "「五个为什么」技术的目的是什么？",
      options: [
        "收集五个用户的反馈",
        "在五天内完成需求分析",
        "深挖问题找到根本需求",
        "生成五个解决方案",
      ],
      answer: 2,
      rationale:
        "「五个为什么」是深挖问题根本原因的技术。用户提出功能请求时，通过连续问「为什么」找到真正的需求。",
    },
  ],
  "pm-w4-2": [
    {
      id: "pm-w4-2-q1",
      question: "用户故事的标准格式是什么？",
      options: [
        "我想要 [功能] 因为 [原因]",
        "As a [用户], I want [目标], so that [收益]",
        "Given [条件], When [行动], Then [结果]",
        "问题：[问题] 解决方案：[方案]",
      ],
      answer: 1,
      rationale:
        "Mountain Goat Software 定义用户故事标准格式：As a <用户类型>, I want <目标>, so that <收益>。",
    },
    {
      id: "pm-w4-2-q2",
      question: "Ron Jeffries 提出的用户故事 3C 原则是什么？",
      options: [
        "Clear, Concise, Complete",
        "Card, Conversation, Confirmation",
        "Customer, Context, Criteria",
        "Create, Check, Commit",
      ],
      answer: 1,
      rationale:
        "Ron Jeffries 的 3C 原则：Card（卡片，书面描述）、Conversation（对话，细节讨论）、Confirmation（确认，验收测试）。",
    },
    {
      id: "pm-w4-2-q3",
      question: "INVEST 原则中的 I 代表什么？",
      options: [
        "Important（重要的）",
        "Independent（独立的）",
        "Innovative（创新的）",
        "Immediate（立即的）",
      ],
      answer: 1,
      rationale:
        "INVEST 原则：Independent（独立的）、Negotiable（可协商的）、Valuable（有价值的）、Estimable（可估算的）、Small（小的）、Testable（可测试的）。",
    },
    {
      id: "pm-w4-2-q4",
      question: "根据 Mountain Goat Software，用户故事最重要的特点是什么？",
      options: [
        "必须非常详细",
        "是未来对话的占位符",
        "只能由产品经理编写",
        "必须包含技术实现细节",
      ],
      answer: 1,
      rationale:
        "Mountain Goat 强调「每个用户故事都是未来对话的占位符」，对话比书面文字更重要。",
    },
    {
      id: "pm-w4-2-q5",
      question: "SAFe 框架中的故事层级是什么？",
      options: [
        "Project → Phase → Task → Subtask",
        "Epic → Capability → Feature → Story",
        "Theme → Initiative → Epic → Story",
        "Goal → Objective → Key Result → Task",
      ],
      answer: 1,
      rationale:
        "SAFe 框架的故事层级：Epic → Capability → Feature → Story。Story 是最小的功能切片。",
    },
    {
      id: "pm-w4-2-q6",
      question: "SAFe 中的 Enabler Story 用于什么？",
      options: [
        "描述用户直接使用的功能",
        "处理探索、架构、基础设施和合规工作",
        "记录 Bug 修复",
        "描述市场营销活动",
      ],
      answer: 1,
      rationale:
        "SAFe 引入「Enabler Stories」专门处理探索、架构、基础设施和合规工作，这些不适合传统用户故事格式。",
    },
    {
      id: "pm-w4-2-q7",
      question: "根据 SAFe，一个好的用户故事应该多长时间内完成？",
      options: [
        "一个月",
        "几天内",
        "一个季度",
        "一周到两周",
      ],
      answer: 1,
      rationale:
        "SAFe 指出故事应「小到能在几天内完成」，理想情况下在单个迭代内交付价值。",
    },
    {
      id: "pm-w4-2-q8",
      question: "以下哪个是好的验收标准示例？",
      options: [
        "系统应该快",
        "用户体验应该好",
        "页面加载时间 < 2 秒",
        "功能应该完整",
      ],
      answer: 2,
      rationale:
        "好的验收标准是具体的、可衡量的、可测试的。「页面加载时间 < 2 秒」可以被明确验证。",
    },
    {
      id: "pm-w4-2-q9",
      question: "Mountain Goat Software 建议如何为用户故事添加细节？",
      options: [
        "增加更多文档",
        "拆分和添加验收条件",
        "增加更多会议",
        "增加更多评审人",
      ],
      answer: 1,
      rationale:
        "Mountain Goat 建议通过「拆分」和「添加验收条件」两种方式为故事添加细节。",
    },
    {
      id: "pm-w4-2-q10",
      question: "INVEST 原则中的 V 代表什么？",
      options: [
        "Visible（可见的）",
        "Valuable（有价值的）",
        "Verifiable（可验证的）",
        "Variable（可变的）",
      ],
      answer: 1,
      rationale:
        "INVEST 中 V 代表 Valuable（有价值的），每个用户故事应该为用户或业务提供价值。",
    },
    {
      id: "pm-w4-2-q11",
      question: "用户故事缺少「so that」部分会导致什么问题？",
      options: [
        "无法估算工作量",
        "团队不理解为什么要做这个功能",
        "无法进行测试",
        "无法分配给开发者",
      ],
      answer: 1,
      rationale:
        "没有「so that」价值陈述，团队不理解为什么要做这个功能，难以做出正确的实现决策。",
    },
    {
      id: "pm-w4-2-q12",
      question: "根据 SAFe，用户故事作为什么工具？",
      options: [
        "项目进度跟踪工具",
        "用户和开发者之间的沟通桥梁",
        "绩效考核工具",
        "预算管理工具",
      ],
      answer: 1,
      rationale:
        "SAFe 指出用户故事作为「用户和开发者之间的沟通桥梁」，让双方能够理解意图并协作。",
    },
  ],
  "pm-w4-3": [
    {
      id: "pm-w4-3-q1",
      question: "PRD（Product Requirements Document）的核心目的是什么？",
      options: [
        "记录团队会议内容",
        "在开发开始前建立清晰的需求，帮助团队对齐",
        "跟踪项目进度",
        "管理团队人员",
      ],
      answer: 1,
      rationale:
        "ProductPlan 指出 PRD 的核心目的是「在开发开始前建立清晰的需求，帮助团队对齐需要构建什么和为什么构建」。",
    },
    {
      id: "pm-w4-3-q2",
      question: "PRD 的核心要素不包括以下哪项？",
      options: [
        "产品概述和目标用户",
        "功能和特性",
        "团队成员的绩效考核",
        "成功指标和验收标准",
      ],
      answer: 2,
      rationale:
        "PRD 核心要素包括：产品概述、目标用户、功能和特性、成功指标、时间线和资源、验收标准。绩效考核不在其中。",
    },
    {
      id: "pm-w4-3-q3",
      question: "在敏捷环境中，PRD 应该是什么样的？",
      options: [
        "一次性完成的巨型文档",
        "活文档，随需求演进持续更新",
        "只有产品经理可以编辑的文档",
        "项目结束后才编写的总结文档",
      ],
      answer: 1,
      rationale:
        "在敏捷环境中，PRD 是「活文档」（Living Document），随着需求演进持续更新，保持敏捷性。",
    },
    {
      id: "pm-w4-3-q4",
      question: "PRD 中的非功能需求通常包括什么？",
      options: [
        "用户故事和验收标准",
        "性能、安全、可用性、兼容性等",
        "团队分工和时间表",
        "竞品分析和市场调研",
      ],
      answer: 1,
      rationale:
        "非功能需求包括：性能（响应时间）、安全（数据保护）、可用性（正常运行时间）、兼容性（浏览器、设备支持）等。",
    },
    {
      id: "pm-w4-3-q5",
      question: "很多 PRD 缺失的关键部分是什么？",
      options: [
        "产品名称",
        "成功指标（如何衡量功能是否成功）",
        "开发语言",
        "服务器配置",
      ],
      answer: 1,
      rationale:
        "很多 PRD 只描述功能，不定义如何衡量成功。没有成功指标，功能上线后无法判断是否达到预期。",
    },
    {
      id: "pm-w4-3-q6",
      question: "PRD 应该由谁参与制定？",
      options: [
        "只有产品经理",
        "产品经理、设计师、工程师等跨职能团队",
        "只有高管",
        "只有开发团队",
      ],
      answer: 1,
      rationale:
        "PRD 应该由跨职能团队共同制定，包括产品经理、设计师、工程师，确保各方理解和认可需求。",
    },
    {
      id: "pm-w4-3-q7",
      question: "PRD 中「不做什么」部分的作用是什么？",
      options: [
        "列出竞品的功能",
        "明确范围边界，防止范围蔓延",
        "记录已删除的功能",
        "列出技术限制",
      ],
      answer: 1,
      rationale:
        "「不做什么」部分明确范围边界，帮助团队理解功能边界，防止范围蔓延。",
    },
    {
      id: "pm-w4-3-q8",
      question: "Amazon 的 PR/FAQ 文档与传统 PRD 的主要区别是什么？",
      options: [
        "更长更详细",
        "从客户视角以新闻稿形式描述产品",
        "只包含技术规格",
        "只给高管看",
      ],
      answer: 1,
      rationale:
        "Amazon 的 PR/FAQ 从客户视角以新闻稿形式描述产品，附带常见问题，强制团队思考客户价值。",
    },
    {
      id: "pm-w4-3-q9",
      question: "PRD 过度文档化的主要问题是什么？",
      options: [
        "文档太美观",
        "难以维护，与实际开发脱节",
        "开发速度太快",
        "团队沟通太多",
      ],
      answer: 1,
      rationale:
        "传统 PRD 动辄几十页，在敏捷环境中难以维护，容易与实际开发脱节。需要找到「足够详细」和「过度文档化」的平衡。",
    },
    {
      id: "pm-w4-3-q10",
      question: "PRD 与 BRD（Business Requirements Document）的主要区别是什么？",
      options: [
        "PRD 更短",
        "BRD 聚焦业务需求，PRD 聚焦产品具体需求",
        "BRD 只给开发看",
        "PRD 不包含商业目标",
      ],
      answer: 1,
      rationale:
        "BRD 聚焦业务需求和商业目标，PRD 则聚焦产品的具体功能需求和实现细节。BRD 通常先于 PRD 编写。",
    },
    {
      id: "pm-w4-3-q11",
      question: "PRD 中的验收标准应该具备什么特点？",
      options: [
        "模糊灵活，方便修改",
        "具体、可衡量、可测试",
        "只描述理想状态",
        "只有开发团队理解",
      ],
      answer: 1,
      rationale:
        "好的验收标准是具体的、可衡量的、可测试的，让团队能够明确判断功能是否完成。",
    },
    {
      id: "pm-w4-3-q12",
      question: "如何避免 PRD 与设计稿、技术方案脱节？",
      options: [
        "让一个人负责所有文档",
        "建立联动更新机制，跨团队协作",
        "减少文档数量",
        "只维护 PRD，不要设计稿",
      ],
      answer: 1,
      rationale:
        "需要建立 PRD、设计稿、技术方案的联动更新机制，确保各文档保持一致，跨团队协作维护。",
    },
  ],
  "pm-w4-4": [
    {
      id: "pm-w4-4-q1",
      question: "根据 Scrum Guide，Product Backlog 的定义是什么？",
      options: [
        "团队的任务清单",
        "一个涌现的、有序的列表，包含改进产品所需的内容",
        "已完成功能的清单",
        "Bug 列表",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 定义 Product Backlog 为「一个涌现的、有序的列表，包含改进产品所需的内容」，是 Scrum 团队工作的唯一来源。",
    },
    {
      id: "pm-w4-4-q2",
      question: "Scrum Guide 中的 Product Goal 是什么？",
      options: [
        "Sprint 的短期目标",
        "产品的未来状态，可作为 Scrum 团队规划的长期目标",
        "每日站会的议题",
        "代码质量标准",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 定义 Product Goal 为「产品的未来状态，可作为 Scrum 团队规划的目标」，是一个长期目标。",
    },
    {
      id: "pm-w4-4-q3",
      question: "Roman Pichler 的 Product Backlog Board 包含哪三个区域？",
      options: [
        "开发、测试、发布",
        "Story Area、Constraint Area、Model Area",
        "待办、进行中、已完成",
        "前端、后端、数据库",
      ],
      answer: 1,
      rationale:
        "Roman Pichler 的 Product Backlog Board 包含：Story Area（用户故事）、Constraint Area（全局非功能需求）、Model Area（工作流和需求模型）。",
    },
    {
      id: "pm-w4-4-q4",
      question: "Backlog Refinement（精炼）的目的是什么？",
      options: [
        "删除所有旧条目",
        "将大项拆分为更小、更明确的单元",
        "增加更多条目",
        "重新排序所有条目",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 指出 Backlog Refinement 是「将大项拆分为更小、更明确的单元」的持续活动，使条目变得对 Sprint 选择更加就绪。",
    },
    {
      id: "pm-w4-4-q5",
      question: "根据 Roman Pichler，Epic 应该是什么样的？",
      options: [
        "非常详细和完整",
        "粗粒度的、草图式的占位符",
        "只包含技术细节",
        "固定不变的",
      ],
      answer: 1,
      rationale:
        "Roman Pichler 强调 Epic 是「粗粒度的、草图式的」占位符，逐渐细化为详细的用户故事，避免过早的完整设计。",
    },
    {
      id: "pm-w4-4-q6",
      question: "Roman Pichler 建议如何处理 Backlog 过大的问题？",
      options: [
        "保留所有条目以备将来",
        "策略性地储备，重点关注下个版本所需的条目",
        "随机删除一半条目",
        "把所有条目都变成 Epic",
      ],
      answer: 1,
      rationale:
        "Roman Pichler 建议「策略性地储备，重点关注下个版本所需的条目」，减少复杂度并创造清晰度。",
    },
    {
      id: "pm-w4-4-q7",
      question: "根据 Roman Pichler，故事进入 Sprint 前必须满足什么条件？",
      options: [
        "有足够的预算",
        "清晰、可行、可测试",
        "所有利益相关者批准",
        "有完整的技术方案",
      ],
      answer: 1,
      rationale:
        "Roman Pichler 要求故事必须「清晰、可行、可测试」才能从 Backlog 进入 Sprint，这是「Definition of Ready」的核心。",
    },
    {
      id: "pm-w4-4-q8",
      question: "关于技术债务在 Backlog 中的处理，最佳实践是什么？",
      options: [
        "永远优先处理业务需求",
        "预留固定比例（如 20%）处理技术债务",
        "只在业务需求做完后处理",
        "单独建一个技术债务 Backlog",
      ],
      answer: 1,
      rationale:
        "最佳实践是在 Backlog 中预留固定比例（如 20%）处理技术债务和架构改进，避免技术债务被业务需求完全挤压。",
    },
    {
      id: "pm-w4-4-q9",
      question: "Scrum Guide 规定一个产品可以有几个 Product Backlog？",
      options: [
        "每个团队一个",
        "一个产品只有一个，即使多个团队工作",
        "每个 Sprint 一个",
        "没有限制",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 规定「一个 Product Backlog 适用于一个产品」，即使多个 Scrum 团队在同一产品上工作也只有一个 Backlog。",
    },
    {
      id: "pm-w4-4-q10",
      question: "Backlog 精炼会议的推荐频率是什么？",
      options: [
        "每天",
        "每周一次",
        "每月一次",
        "每季度一次",
      ],
      answer: 1,
      rationale:
        "最佳实践是每周进行一次 Backlog 精炼会议，确保足够的条目准备好进入下个 Sprint。",
    },
    {
      id: "pm-w4-4-q11",
      question: "WSJF（Weighted Shortest Job First）用于什么？",
      options: [
        "估算故事点",
        "优先级排序",
        "分配团队成员",
        "计算预算",
      ],
      answer: 1,
      rationale:
        "WSJF（Weighted Shortest Job First）是 SAFe 框架的优先级排序方法，综合考虑价值、时间紧迫性和工作量。",
    },
    {
      id: "pm-w4-4-q12",
      question: "根据 Scrum Guide，谁负责决定 Backlog 条目的大小估算？",
      options: [
        "Product Owner",
        "开发团队（Developers）",
        "Scrum Master",
        "利益相关者",
      ],
      answer: 1,
      rationale:
        "Scrum Guide 规定「Developers」负责决定 Backlog 条目的大小估算，因为他们是实际完成工作的人。",
    },
  ],
}
