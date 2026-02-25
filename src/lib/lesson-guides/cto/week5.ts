import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
  "cto-w5-1": {
    lessonId: "cto-w5-1",
    background: [
      "【Team Topologies】Team Topologies 框架提出按业务流（Stream-aligned）组建团队，减少跨团队依赖。核心理念是团队的认知负荷应与业务复杂度匹配。",
      "【康威定律】Conway's Law 指出组织的沟通结构会映射到系统架构。CTO 在设计组织时需要有意识地利用这一规律，让团队结构支撑期望的架构。",
      "【RACI 模型】RACI 矩阵（Responsible、Accountable、Consulted、Informed）帮助明确每个决策和任务的职责分工，减少灰色地带。",
      "【认知负荷】每个团队的认知负荷有上限。当团队承担的职责超出认知负荷时，质量和速度都会下降。通过拆分职责和明确边界来管理认知负荷。",
      "【团队交互模式】Team Topologies 定义了三种团队交互模式：协作（Collaboration）、X-as-a-Service 和促进（Facilitating），不同模式适用于不同阶段。"
    ],
    keyDifficulties: [
      "【组织惯性】改变组织结构面临巨大惯性。人员习惯了现有的汇报关系和协作方式，变革需要充分的沟通和渐进推进。",
      "【边界划分】团队边界划在哪里是个艺术问题。太细导致协调成本高，太粗导致认知负荷过重。需要根据业务域和数据流来决定。",
      "【矩阵冲突】矩阵式组织（如按职能 + 按项目）容易导致双重汇报和优先级冲突。需要明确的决策权分配和升级机制。",
      "【跨团队依赖】即使合理拆分了团队，跨团队依赖仍然存在。需要建立明确的接口契约和沟通协议来管理依赖。"
    ],
    handsOnPath: [
      "绘制当前组织的团队拓扑图，标注每个团队的职责范围和主要交互关系。",
      "使用 RACI 矩阵梳理 3-5 个关键流程的职责分配，识别职责重叠或真空。",
      "评估每个团队的认知负荷：他们承担了多少个服务、多少种技术栈、多少个外部依赖？",
      "列出当前最频繁的跨团队依赖，分析是否可以通过调整团队边界或接口来减少。",
      "制定一个渐进式的组织优化方案，包含变革目标、步骤和预期效果。"
    ],
    selfCheck: [
      "你的团队拓扑是否与期望的系统架构一致（康威定律）？",
      "关键流程是否有明确的 RACI 分配？是否存在职责灰色地带？",
      "各团队的认知负荷是否在可管理的范围内？",
      "最频繁的跨团队阻塞是否有明确的解决方案？",
      "组织变革的沟通是否充分？团队是否理解变革的原因和目标？"
    ],
    extensions: [
      "深入阅读 Team Topologies 一书，理解四种团队类型和三种交互模式。",
      "学习 Atlassian 的 RACI 最佳实践，提升职责分配的清晰度。",
      "研究 Spotify 模型（Squads、Tribes、Chapters、Guilds）的优缺点。",
      "探索 Inverse Conway Maneuver——通过有意设计组织结构来影响系统架构。"
    ],
    sourceUrls: [
      "https://teamtopologies.com/key-concepts",
      "https://www.atlassian.com/team-playbook/plays/roles-and-responsibilities"
    ]
  },
  "cto-w5-2": {
    lessonId: "cto-w5-2",
    background: [
      "【工作协议】Working Agreement 是团队之间或团队内部的协作约定，包括沟通方式、响应时效、代码标准、评审流程等。明确的协议减少摩擦。",
      "【技术评审委员会】Architecture Review Board 或技术评审委员会负责评审重大技术决策，确保一致性和质量。关键是保持轻量，避免成为瓶颈。",
      "【RFC 流程】Request for Comments 是一种让提案在团队中透明讨论的机制。任何人都可以提出 RFC，经过讨论和评审后形成决策。",
      "【一致性 vs 自治】治理的核心挑战是在一致性（标准化、可维护性）和自治（团队创新、效率）之间找到平衡。过度治理抑制创新，不治理导致碎片化。",
      "【工程实践标准】Martin Fowler 强调工程实践的标准化（如代码评审、测试覆盖率、监控标准）能降低系统风险并提升可维护性。"
    ],
    keyDifficulties: [
      "【治理过重】架构评审如果流程过重，会成为交付瓶颈。建议区分决策级别：小决策团队自决，中等决策 RFC，大决策上评审委员会。",
      "【协议执行】工作协议制定容易、执行难。需要定期回顾协议的有效性，并让违反协议的后果透明。",
      "【跨文化协作】全球化团队的协作面临时区、文化和语言差异。需要更刻意地设计异步协作流程。",
      "【标准推广】新标准的推广需要 Enabling 团队的支持，通过培训、模板和工具降低采纳门槛。"
    ],
    handsOnPath: [
      "与核心团队一起制定跨团队工作协议，明确沟通渠道、响应时效和升级路径。",
      "建立 RFC 流程模板和评审流程，在团队中试点使用。",
      "定义技术决策的分级标准：哪些团队自决、哪些需要 RFC、哪些上评审委员会。",
      "选择 2-3 个工程实践标准（如代码评审标准、测试要求）进行统一。",
      "每季度回顾工作协议和治理流程的有效性，收集团队反馈并优化。"
    ],
    selfCheck: [
      "团队之间是否有明确的工作协议？协议是否被遵守？",
      "技术决策的分级机制是否清晰？是否有不必要的审批瓶颈？",
      "RFC 或类似的透明讨论机制是否在运行？参与度如何？",
      "一致性和自治的平衡是否合理？团队是否有反馈渠道？",
      "工程实践标准是否有工具和流程支撑落地？"
    ],
    extensions: [
      "研究 Martin Fowler 关于工程实践标准化的文章。",
      "学习 GraphQL RFC 流程的设计，参考开源社区的治理模式。",
      "探索 Architecture Fitness Functions 在治理中的应用。",
      "了解 InnerSource 模式，将开源协作文化引入企业内部。"
    ],
    sourceUrls: [
      "https://martinfowler.com/articles/engineering-practices.html",
      "https://graphql.org/rfcs/"
    ]
  }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
  "cto-w5-1": [
    {
      id: "cto-w5-1-q1",
      question: "康威定律（Conway's Law）告诉我们？",
      options: [
        "系统架构决定了组织结构",
        "组织的沟通结构会映射到系统架构",
        "技术选型决定团队规模",
        "团队越大效率越高"
      ],
      answer: 1,
      rationale: "Conway's Law 指出组织的沟通结构会反映在系统设计中，因此 CTO 需要有意识地设计组织结构来支撑期望的架构。"
    },
    {
      id: "cto-w5-1-q2",
      question: "Team Topologies 中最能减少跨团队依赖的团队类型是？",
      options: [
        "职能型团队（前端/后端分离）",
        "Stream-aligned 团队（围绕业务流端到端组建）",
        "矩阵型团队",
        "项目型临时团队"
      ],
      answer: 1,
      rationale: "Stream-aligned 团队围绕业务流端到端组建，减少跨团队交接依赖，能更快速地交付业务价值。"
    },
    {
      id: "cto-w5-1-q3",
      question: "RACI 矩阵中的 'A'（Accountable）代表？",
      options: [
        "参与执行的人",
        "最终负责并对结果承担责任的人",
        "需要被知会的人",
        "提供咨询意见的人"
      ],
      answer: 1,
      rationale: "Accountable 是对结果最终负责的人，每个任务或决策只能有一个 A，确保责任清晰不推诿。"
    }
  ],
  "cto-w5-2": [
    {
      id: "cto-w5-2-q1",
      question: "技术治理中最大的挑战是？",
      options: [
        "选择最好的技术栈",
        "在一致性（标准化）和自治（团队创新）之间找到平衡",
        "写更多文档",
        "增加审批流程"
      ],
      answer: 1,
      rationale: "治理的核心是在一致性和自治之间找平衡。过度标准化抑制创新，过度自由导致碎片化。"
    },
    {
      id: "cto-w5-2-q2",
      question: "RFC 流程的主要价值是？",
      options: [
        "减慢决策速度",
        "让技术提案在团队中透明讨论，提升决策质量",
        "替代代码评审",
        "只给架构师使用"
      ],
      answer: 1,
      rationale: "RFC 让任何人都可以提出技术提案并在团队中透明讨论，提升决策质量和团队参与感。"
    },
    {
      id: "cto-w5-2-q3",
      question: "架构评审委员会容易陷入的问题是？",
      options: [
        "评审太少",
        "流程过重成为交付瓶颈",
        "参与人数太少",
        "只讨论不做决策"
      ],
      answer: 1,
      rationale: "架构评审如果流程过重会阻碍交付。建议按决策级别分层：小决策团队自决，大决策才上委员会。"
    }
  ]
}
