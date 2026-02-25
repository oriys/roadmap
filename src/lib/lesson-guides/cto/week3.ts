import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
  "cto-w3-1": {
    lessonId: "cto-w3-1",
    background: [
      "【DORA 指标】DORA（DevOps Research and Assessment）定义了四个关键指标：部署频率、变更前置时间（Lead Time）、变更失败率和故障恢复时间（MTTR）。",
      "【效能不等于忙碌】效能度量不是衡量工程师写了多少行代码或工作了多少小时，而是衡量团队交付有价值成果的速度和质量。",
      "【瓶颈识别】Theory of Constraints 告诉我们，系统的产出由瓶颈决定。识别并消除瓶颈是提升效能最有效的方式。",
      "【Accelerate 研究】Accelerate 一书基于大量数据证明，高效能团队的部署频率可达每天多次，Lead Time 不到一小时，变更失败率低于 15%。",
      "【可视化优先】在推动效能改进之前，先让数据可视化。看板、指标仪表盘和价值流图是让团队看到问题的第一步。"
    ],
    keyDifficulties: [
      "【指标被滥用】效能指标容易被用来'考核'个人，导致指标造假。DORA 指标应该作为团队改进的输入，而非个人绩效工具。",
      "【度量成本】采集和维护指标需要投入工程资源。应从最关键的 2-3 个指标开始，逐步扩展。",
      "【因果推断】指标之间的相关性不等于因果性。Lead Time 改善可能是流程优化的结果，也可能是需求简化的结果。",
      "【文化阻力】团队可能对'被度量'感到不安。CTO 需要建立安全的文化，强调度量是为了发现改进机会而非追责。"
    ],
    handsOnPath: [
      "选择 DORA 四个指标中的 2 个，搭建基础的数据采集和可视化看板。",
      "用价值流图（Value Stream Mapping）绘制从需求到上线的完整流程，标注每个环节的耗时。",
      "识别价值流中等待时间最长的 3 个环节，分析根因并制定改进方案。",
      "与团队一起回顾最近 5 次发布的 Lead Time 数据，讨论改进空间。",
      "设定季度效能改进目标，如将 Lead Time 缩短 20% 或将部署频率提升到每周。"
    ],
    selfCheck: [
      "你是否清楚团队当前的部署频率和变更前置时间？",
      "你是否能够说出当前最大的交付瓶颈在哪个环节？",
      "效能指标是否在团队中透明可见，而非只有管理层知道？",
      "你是否已经建立了定期回顾效能数据的机制？",
      "团队是否理解度量的目的是改进而非考核？"
    ],
    extensions: [
      "深入阅读 DORA 的年度 State of DevOps Report，了解行业基准。",
      "学习 Accelerate 中关于组织文化与效能关系的研究成果。",
      "探索 SPACE 框架（Satisfaction, Performance, Activity, Communication, Efficiency）作为更全面的效能模型。",
      "研究 Google 的 Engineering Productivity 团队如何度量和改进开发者体验。"
    ],
    sourceUrls: [
      "https://dora.dev/research/",
      "https://itrevolution.com/accelerate-book/"
    ]
  },
  "cto-w3-2": {
    lessonId: "cto-w3-2",
    background: [
      "【发布准入】建立发布准入标准（Release Readiness）包括：代码评审通过、自动化测试通过、性能测试通过、文档更新、回滚方案就绪。",
      "【灰度发布】灰度发布（Canary Release）通过先向小部分用户发布，验证无问题后逐步扩大范围，降低变更风险。",
      "【回滚预案】每次发布前必须确认回滚方案：如何回滚、回滚时间预估、回滚后的数据一致性处理。不能回滚的变更需要特别评审。",
      "【事后复盘】Google SRE 强调 Blameless Postmortem——不追责的复盘文化。复盘关注系统和流程改进，而非追究个人责任。",
      "【质量基线】质量体系不是一次性建设的，而是通过持续的复盘和改进逐步提升。从最关键的质量门禁开始，逐步完善。"
    ],
    keyDifficulties: [
      "【速度 vs 质量】过度的质量门禁会拖慢交付速度。关键是找到适合当前阶段的平衡点，随着团队成熟逐步提升标准。",
      "【复盘落地】很多团队做复盘但 Action Item 不落地。需要建立跟踪机制确保改进措施被执行和验证。",
      "【灰度基础设施】实施灰度发布需要基础设施支持（流量控制、指标监控、快速回滚）。需要评估投入产出比。",
      "【文化建设】Blameless 文化不是喊口号，需要在实际复盘中反复实践。管理层的态度决定了团队是否敢于暴露问题。"
    ],
    handsOnPath: [
      "制定发布准入 Checklist，包含代码评审、测试、文档、回滚方案等必选项。",
      "选择一个低风险服务试点灰度发布流程，记录经验和改进点。",
      "建立复盘模板：事件时间线、影响范围、根因分析、改进措施、负责人和截止时间。",
      "回顾最近 3 个月的线上事故，分析是否有可以通过流程避免的模式。",
      "设定季度质量目标，如变更失败率降低到 X% 以下，MTTR 缩短到 Y 分钟。"
    ],
    selfCheck: [
      "你是否有明确的发布准入标准？团队是否遵守？",
      "是否所有高风险变更都有回滚方案？",
      "你的复盘是否做到了 Blameless？Action Item 是否被跟踪执行？",
      "团队的变更失败率和故障恢复时间是否有持续改善的趋势？",
      "是否已经或计划实施灰度发布来降低变更风险？"
    ],
    extensions: [
      "学习 Google SRE 关于监控与分布式系统的最佳实践。",
      "研究 Google 的 Postmortem Culture，建立团队的复盘文化。",
      "探索 Feature Flags 作为灰度发布和风险控制的工具。",
      "了解 Chaos Engineering 的理念，通过主动注入故障验证系统韧性。"
    ],
    sourceUrls: [
      "https://sre.google/sre-book/monitoring-distributed-systems/",
      "https://sre.google/sre-book/postmortem-culture/"
    ]
  }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
  "cto-w3-1": [
    {
      id: "cto-w3-1-q1",
      question: "DORA 指标中，哪个指标衡量从代码提交到上线的时间？",
      options: [
        "部署频率",
        "变更前置时间（Lead Time）",
        "变更失败率",
        "故障恢复时间（MTTR）"
      ],
      answer: 1,
      rationale: "Lead Time for Changes 衡量从代码提交到成功部署到生产环境的时间，反映交付流程的效率。"
    },
    {
      id: "cto-w3-1-q2",
      question: "使用效能指标时最需要避免的做法是？",
      options: [
        "让指标对团队透明可见",
        "用指标考核个人绩效导致指标造假",
        "定期回顾改进趋势",
        "从少量关键指标开始"
      ],
      answer: 1,
      rationale: "DORA 指标应作为团队改进的输入而非个人绩效工具，否则会导致指标造假和团队不信任。"
    },
    {
      id: "cto-w3-1-q3",
      question: "识别交付瓶颈最有效的工具是？",
      options: [
        "增加更多工程师",
        "使用价值流图绘制完整流程并标注耗时",
        "缩短每日站会时间",
        "引入更多自动化工具"
      ],
      answer: 1,
      rationale: "价值流图能可视化从需求到上线的完整流程，标注每个环节的耗时和等待时间，帮助精准定位瓶颈。"
    }
  ],
  "cto-w3-2": [
    {
      id: "cto-w3-2-q1",
      question: "Google SRE 倡导的复盘文化核心原则是？",
      options: [
        "找到责任人并处罚",
        "Blameless——不追责，聚焦系统和流程改进",
        "只记录不分析",
        "只在重大事故后才复盘"
      ],
      answer: 1,
      rationale: "Blameless Postmortem 强调不追责个人，而是聚焦系统和流程层面的改进，鼓励团队主动暴露问题。"
    },
    {
      id: "cto-w3-2-q2",
      question: "灰度发布（Canary Release）的主要目的是？",
      options: [
        "加快发布速度",
        "减少测试工作量",
        "先向小部分用户发布验证后再逐步扩大，降低变更风险",
        "让所有用户同时体验新功能"
      ],
      answer: 2,
      rationale: "灰度发布通过先向小范围用户发布来验证变更的正确性，在确认无问题后逐步扩大范围，有效降低风险。"
    },
    {
      id: "cto-w3-2-q3",
      question: "发布准入标准（Release Readiness）应包含哪些要素？",
      options: [
        "只需要代码写完即可",
        "代码评审、自动化测试、回滚方案等",
        "只需要经理审批",
        "只需要手动测试通过"
      ],
      answer: 1,
      rationale: "发布准入应包含代码评审通过、自动化测试通过、性能测试、文档更新、回滚方案就绪等多个维度。"
    }
  ]
}
