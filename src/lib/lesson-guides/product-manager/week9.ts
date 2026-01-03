import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
  "pm-w9-1": {
    lessonId: "pm-w9-1",
    background: [
      "【发布清单价值】ProductPlan 强调「Product launch checklists help ensure you don't forget a step as you bring your product to market」。结构化的发布清单将发布从临时性活动转变为协调一致的行动，通过要求在发布前完成所有关键任务来最小化风险。",
      "【跨部门协调】成功的产品发布需要多个部门的紧密配合。发布清单应涵盖：产品团队（功能验证）、工程团队（技术测试）、市场团队（营销材料）、销售团队（销售培训）、客服团队（支持准备）等多个职能。",
      "【测试要求验证】发布前必须确保所有测试通过：功能测试（核心功能正常工作）、性能测试（响应时间和并发能力满足要求）、安全测试（敏感数据保护和权限控制）、兼容性测试（不同设备和浏览器支持）。",
      "【文档完整性】发布清单应检查文档准备：帮助文档（用户如何使用新功能）、FAQ（常见问题解答）、培训材料（内部团队培训）、更新日志（变更记录）、API 文档（如适用）。",
      "【回滚方案】ProductPlan 建议在清单中包含应急计划：回滚步骤（如何快速撤销发布）、问题升级路径（出现严重问题时的联系人）、监控告警（关键指标的阈值设置）。",
    ],
    keyDifficulties: [
      "【清单过于庞大】常见错误是创建过于详尽的清单导致执行困难。关键是区分「必须完成」和「最好完成」的项目，聚焦于真正影响发布成功的关键检查点。",
      "【跨部门沟通不畅】发布涉及多个团队，信息不同步会导致问题。建议建立统一的发布状态看板，定期召开发布准备会议，确保所有人了解当前状态和各自职责。",
      "【时间估算不准】低估发布准备时间是常见问题。建议为每个检查项分配负责人和截止时间，并预留缓冲时间应对意外情况。",
      "【忽视非功能需求】很多团队只关注功能完成度，忽视性能、安全、可用性等非功能需求。这些问题往往在发布后才暴露，造成更大影响。",
    ],
    handsOnPath: [
      "1. 回顾过去 3 次发布的问题，识别哪些问题本可以通过清单预防",
      "2. 创建发布清单模板，包含以下类别：功能验证、技术测试、文档准备、团队培训、营销就绪",
      "3. 为每个检查项指定负责人（RACI 矩阵）和完成时间",
      "4. 与各团队负责人 review 清单，确保覆盖他们关心的事项",
      "5. 建立发布状态看板（如 Notion、Confluence），实时更新各项完成情况",
      "6. 制定回滚方案并进行演练，确保团队知道如何操作",
      "7. 在下次发布中使用清单，发布后回顾并优化清单内容",
    ],
    selfCheck: [
      "你的发布清单包含哪些核心类别？是否覆盖了所有关键团队？",
      "每个检查项是否有明确的负责人和截止时间？",
      "你的测试覆盖率如何？是否包含性能和安全测试？",
      "发布文档是否准备充分？用户和内部团队都能获取所需信息吗？",
      "如果发布出现严重问题，你能在多长时间内回滚？",
      "发布后的第一小时，谁负责监控？监控哪些指标？",
    ],
    extensions: [
      "研究 Google 的发布工程（Release Engineering）实践",
      "学习 Netflix 的 Chaos Engineering 如何提高发布信心",
      "探索自动化发布清单工具（如 LaunchDarkly、Split.io）",
      "研究 Post-mortem 文化，如何从发布问题中学习",
    ],
    sourceUrls: [
      "https://www.productplan.com/learn/product-launch-checklist/",
      "https://www.atlassian.com/agile/software-development/release-management",
      "https://www.atlassian.com/agile/product-management/product-launch",
    ],
  },
  "pm-w9-2": {
    lessonId: "pm-w9-2",
    background: [
      "【Feature Flags 定义】LaunchDarkly 定义 Feature Flags 为「allow you to enable or disable a feature without modifying the source code or requiring a redeploy」。它在运行时决定执行哪些代码路径，实现部署与发布的解耦。",
      "【四种开关类型】Martin Fowler 将 Feature Toggles 分为四类：Release Toggles（发布开关，允许未完成功能作为潜在代码发布）、Experiment Toggles（实验开关，支持 A/B 测试）、Ops Toggles（运维开关，控制运营行为）、Permissioning Toggles（权限开关，限制特定用户群体）。",
      "【渐进式发布】LaunchDarkly 强调渐进式交付（Progressive Delivery）：功能可以逐步向更多用户群体开放，使团队能够「observe the behavior of systems and services under increasing load」。典型路径是：内部测试 → Beta 用户 → 10% 用户 → 50% 用户 → 全量。",
      "【灰度发布策略】灰度发布（也称金丝雀发布）允许将新功能先发布给一小部分用户，验证没有问题后再逐步扩大范围。这大大降低了发布风险，因为问题只会影响少数用户。",
      "【技术债务警告】Martin Fowler 警告 Feature Toggles 会产生「flag debt」——未使用的开关会使代码杂乱。Knight Capital Group 因开关管理不当造成 4.6 亿美元损失。团队应建立定期清理机制。",
    ],
    keyDifficulties: [
      "【开关类型选择】不同类型的开关有不同的生命周期和管理方式。Release Toggles 通常只存在几天到几周，而 Permissioning Toggles 可能存在多年。错误的分类会导致管理混乱。",
      "【开关蔓延】随着时间推移，代码中会积累大量未清理的开关，增加复杂性和维护成本。Martin Fowler 建议「treat toggles as inventory requiring active removal」。",
      "【一致性保证】在多服务架构中，确保所有服务使用一致的开关状态是挑战。建议使用集中式配置存储（如 LaunchDarkly、etcd、Consul）而非本地配置。",
      "【测试复杂性】每增加一个开关，测试组合数量翻倍。需要明确哪些开关组合需要测试，避免测试爆炸。",
    ],
    handsOnPath: [
      "1. 盘点当前代码中的 Feature Flags，按类型分类并评估其生命周期",
      "2. 选择一个即将发布的功能，设计其灰度发布策略（发布阶段、目标用户群、扩展标准）",
      "3. 实现基础的 Feature Flag 框架，或评估第三方工具（LaunchDarkly、Unleash、Split.io）",
      "4. 定义开关命名规范和文档要求",
      "5. 建立开关清理流程：全量发布后多久删除开关代码",
      "6. 设计开关配置的审批流程（谁可以开启/关闭生产环境的开关）",
    ],
    selfCheck: [
      "你能解释 Feature Flag 与配置文件的区别吗？",
      "你的代码中有多少 Feature Flags？哪些应该被清理？",
      "如果线上出现问题，你能在多长时间内通过 Feature Flag 关闭功能？",
      "你的 Feature Flag 策略如何处理测试？测试了哪些开关组合？",
      "谁有权限修改生产环境的 Feature Flag？有审批流程吗？",
      "你如何确保分布式系统中所有服务使用一致的开关状态？",
    ],
    extensions: [
      "深入学习 Martin Fowler 的 Feature Toggles 文章中的实现模式",
      "研究 LaunchDarkly 的最佳实践指南",
      "探索 Trunk-Based Development 与 Feature Flags 的结合",
      "学习 A/B 测试平台（如 Optimizely、VWO）如何与 Feature Flags 集成",
    ],
    sourceUrls: [
      "https://launchdarkly.com/blog/what-are-feature-flags/",
      "https://martinfowler.com/articles/feature-toggles.html",
      "https://www.atlassian.com/agile/product-management/release-planning",
    ],
  },
  "pm-w9-3": {
    lessonId: "pm-w9-3",
    background: [
      "【GTM 定义】HubSpot 定义 Go-to-Market 策略为「a step-by-step plan for bringing a new product to market and driving demand」。它帮助识别目标受众、制定营销和销售策略、并使利益相关者围绕统一的发布计划保持一致。",
      "【四大核心要素】HubSpot 指出 GTM 策略的四个关键要素：产品-市场匹配（解决什么问题）、目标受众识别（卖给谁）、竞争格局分析（与谁竞争）、分销渠道（如何触达用户）。",
      "【买家中心映射】HubSpot 建议「map the buying center」——识别 6-10 个决策者及其角色。B2B 产品的购买决策通常涉及多个人：发起者、用户、影响者、决策者、批准者、买家、看门人。",
      "【价值矩阵】创建价值矩阵将客户痛点与解决方案优势连接。每个目标角色都有不同的痛点和关注点，需要定制化的价值陈述。",
      "【GTM vs 营销策略】GTM 策略与一般营销策略不同。GTM 专注于新产品发布，需要跨职能参与；营销策略关注更广泛的品牌推广和持续的受众互动。",
    ],
    keyDifficulties: [
      "【产品-市场匹配验证】很多团队在没有验证 PMF 的情况下就制定 GTM 策略。建议先通过 MVP 或 Beta 测试验证核心假设，再投入大规模推广资源。",
      "【目标受众过于宽泛】试图服务所有人往往意味着谁也服务不好。早期应聚焦于最能从产品获益的细分市场（Beachhead Market）。",
      "【渠道选择错误】不同产品适合不同的获客渠道。B2B SaaS 可能依赖内容营销和销售团队，而消费品可能需要社交媒体和网红合作。选择错误渠道会浪费大量资源。",
      "【定价策略失误】定价过低可能损害品牌定位和盈利能力，定价过高可能阻碍初期采用。建议基于价值定价，并准备根据市场反馈调整。",
    ],
    handsOnPath: [
      "1. 定义产品解决的核心问题和目标用户画像",
      "2. 进行竞品分析：识别 3-5 个直接竞品，分析其定位、定价、渠道策略",
      "3. 绘制买家中心地图：识别购买决策涉及的所有角色及其关注点",
      "4. 创建价值矩阵：为每个目标角色定义痛点和对应的价值陈述",
      "5. 选择 2-3 个核心获客渠道，设计测试计划",
      "6. 制定定价策略：基于价值、竞品和成本三个维度",
      "7. 准备销售和营销材料：产品演示、案例研究、常见问题解答",
    ],
    selfCheck: [
      "你能用一句话说清楚产品解决什么问题、为谁解决？",
      "你的目标客户的购买决策流程是什么？涉及哪些角色？",
      "你选择了哪些获客渠道？为什么选择这些渠道？",
      "你的定价策略是什么？与竞品相比如何？",
      "你的销售团队和客服团队是否准备好了？有培训材料吗？",
      "发布后第一周/第一月的成功指标是什么？",
    ],
    extensions: [
      "学习 Geoffrey Moore 的《Crossing the Chasm》理解技术采用生命周期",
      "研究不同类型产品（B2B SaaS、消费品、平台）的 GTM 策略差异",
      "探索 Product-Led Growth（PLG）与 Sales-Led Growth 的区别和适用场景",
      "学习如何进行定价实验和优化",
    ],
    sourceUrls: [
      "https://blog.hubspot.com/sales/gtm-strategy",
      "https://www.productplan.com/glossary/go-to-market-strategy/",
      "https://www.atlassian.com/agile/product-management/go-to-market-strategy",
    ],
  },
  "pm-w9-4": {
    lessonId: "pm-w9-4",
    background: [
      "【发布只是开始】Intercom 强调「The launch is the start of the marketing journey, not the end goal」。产品发布会带来流量高峰，但初始曝光并不保证转化。成功需要超越发布指标，衡量整个客户漏斗的影响。",
      "【三步反馈流程】Intercom 建议发布后的反馈处理流程：首先收集原始输入（定性数据如客户消息、销售电话、社交提及；定量数据如分析指标、点击率）；然后按主题分类（支持问题、落地页互动、定价困惑、转化问题、流失模式）；最后实施针对性改进。",
      "【小改动大影响】Intercom 的研究揭示「small changes we do after launch drive more adoption than the launch itself」。发布后的持续优化——而非发布公告本身——通常通过持续倾听和迭代带来最强的业务成果。",
      "【迭代定义】ProductPlan 定义迭代为「a set amount of time (typically 1-2 weeks) reserved for development」。迭代建立固定时间框架，帮助团队保持可预测的交付周期，创建问责检查点。",
      "【监控与告警】发布后需要建立核心指标监控：性能指标（响应时间、错误率）、业务指标（注册、转化、留存）、用户反馈（NPS、支持工单）。设置告警阈值，确保问题能被快速发现。",
    ],
    keyDifficulties: [
      "【庆祝过早】很多团队发布后就「宣布胜利」，忽视了发布后的关键工作。发布只是验证产品假设的开始，而非终点。",
      "【反馈过载】发布后会收到大量反馈，但并非所有反馈都同等重要。需要建立系统来分类、优先级排序反馈，聚焦于最影响转化的障碍。",
      "【快速修复 vs 下版本】如何决定问题是立即修复还是放入下个版本？建议根据影响范围、严重程度、修复成本综合判断。严重的用户体验问题应立即修复，功能增强可以规划到下个版本。",
      "【指标选择】监控太多指标会导致信息过载，太少又可能错过重要信号。建议选择 3-5 个核心指标作为北极星，辅以异常告警。",
    ],
    handsOnPath: [
      "1. 在发布前建立监控仪表板，包含关键业务和技术指标",
      "2. 设置告警规则：定义什么情况需要立即响应，什么可以等待",
      "3. 建立反馈收集渠道：应用内反馈、客服工单、社交媒体监控",
      "4. 发布后第一周每日召开简短的站会，review 指标和反馈",
      "5. 第一周结束时进行发布回顾，总结经验教训",
      "6. 根据反馈制定优化路线图，区分快速修复和长期改进",
      "7. 建立迭代节奏，持续发布小更新而非等待大版本",
    ],
    selfCheck: [
      "发布后第一小时、第一天、第一周的监控计划是什么？",
      "你的核心指标仪表板包含哪些指标？告警阈值是什么？",
      "收到用户反馈后，你的处理流程是什么？",
      "如何决定一个问题是立即修复还是放入下个版本？",
      "发布后多久进行回顾？回顾的输出是什么？",
      "你的迭代周期是多长？下一次发布计划什么时候？",
    ],
    extensions: [
      "学习 Amplitude 的产品分析最佳实践",
      "研究如何建立有效的用户反馈闭环系统",
      "探索 Feature Adoption 和 Feature Engagement 的度量方法",
      "学习 Post-mortem 和 Blameless Culture",
    ],
    sourceUrls: [
      "https://amplitude.com/blog/product-launch-metrics",
      "https://www.productplan.com/glossary/iteration/",
      "https://www.intercom.com/blog/product-launch-what-next/",
    ],
  },
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
  "pm-w9-1": [
    {
      id: "pm-w9-1-q1",
      question: "根据 ProductPlan，产品发布清单的核心价值是什么？",
      options: [
        "减少开发成本",
        "确保在产品上市时不遗漏任何步骤",
        "加快开发速度",
        "替代项目管理工具",
      ],
      answer: 1,
      rationale:
        "ProductPlan 强调「Product launch checklists help ensure you don't forget a step as you bring your product to market」，清单的核心价值是防止遗漏关键步骤。",
    },
    {
      id: "pm-w9-1-q2",
      question: "发布清单应该涵盖哪些团队的检查项？",
      options: [
        "只需要产品团队的检查项",
        "只需要工程团队的测试项",
        "产品、工程、市场、销售、客服等多个团队的检查项",
        "只需要管理层的审批项",
      ],
      answer: 2,
      rationale:
        "成功的产品发布需要多个部门的紧密配合，发布清单应涵盖产品团队、工程团队、市场团队、销售团队、客服团队等多个职能的检查项。",
    },
    {
      id: "pm-w9-1-q3",
      question: "发布前的测试要求通常不包括以下哪项？",
      options: [
        "功能测试",
        "竞品分析测试",
        "性能测试",
        "安全测试",
      ],
      answer: 1,
      rationale:
        "发布前测试包括功能测试、性能测试、安全测试、兼容性测试等。竞品分析是市场研究活动，不属于发布前测试范畴。",
    },
    {
      id: "pm-w9-1-q4",
      question: "发布清单中应该包含哪些文档准备项？",
      options: [
        "只需要技术文档",
        "帮助文档、FAQ、培训材料、更新日志等",
        "只需要营销材料",
        "只需要合同文档",
      ],
      answer: 1,
      rationale:
        "发布清单应检查文档准备：帮助文档（用户如何使用新功能）、FAQ（常见问题解答）、培训材料（内部团队培训）、更新日志（变更记录）等。",
    },
    {
      id: "pm-w9-1-q5",
      question: "关于回滚方案，以下哪个说法是正确的？",
      options: [
        "回滚方案只在大版本发布时需要",
        "回滚方案应在发布清单中，包含回滚步骤、问题升级路径、监控告警",
        "回滚方案应该保密，只有工程师知道",
        "如果测试充分就不需要回滚方案",
      ],
      answer: 1,
      rationale:
        "回滚方案是发布清单的重要组成部分，应包含：回滚步骤（如何快速撤销发布）、问题升级路径（出现严重问题时的联系人）、监控告警（关键指标的阈值设置）。",
    },
    {
      id: "pm-w9-1-q6",
      question: "创建发布清单时常见的错误是什么？",
      options: [
        "清单项太少",
        "清单过于庞大导致执行困难",
        "使用电子工具而非纸质",
        "让多人负责同一项",
      ],
      answer: 1,
      rationale:
        "常见错误是创建过于详尽的清单导致执行困难。关键是区分「必须完成」和「最好完成」的项目，聚焦于真正影响发布成功的关键检查点。",
    },
    {
      id: "pm-w9-1-q7",
      question: "为什么发布准备的时间估算经常不准确？",
      options: [
        "因为使用了错误的项目管理工具",
        "因为低估了发布准备时间，缺少负责人和截止时间",
        "因为团队人数太少",
        "因为没有使用敏捷方法",
      ],
      answer: 1,
      rationale:
        "低估发布准备时间是常见问题。建议为每个检查项分配负责人和截止时间，并预留缓冲时间应对意外情况。",
    },
    {
      id: "pm-w9-1-q8",
      question: "RACI 矩阵在发布清单中的作用是什么？",
      options: [
        "计算发布成本",
        "为每个检查项指定负责人、审批人、咨询者和知情者",
        "跟踪发布进度",
        "评估发布风险",
      ],
      answer: 1,
      rationale:
        "RACI 矩阵用于明确每个检查项的责任分配：Responsible（负责人）、Accountable（审批人）、Consulted（咨询者）、Informed（知情者）。",
    },
    {
      id: "pm-w9-1-q9",
      question: "发布清单应该何时创建？",
      options: [
        "发布前一天",
        "项目开始时就创建模板，并在每次发布前更新",
        "发布后总结时",
        "只有第一次发布需要",
      ],
      answer: 1,
      rationale:
        "发布清单模板应该在项目早期创建，并在每次发布前根据具体情况更新和确认。这样可以确保有足够时间完成所有准备工作。",
    },
    {
      id: "pm-w9-1-q10",
      question: "性能测试在发布清单中检查什么？",
      options: [
        "代码质量和可读性",
        "响应时间和并发能力",
        "UI 美观程度",
        "团队协作效率",
      ],
      answer: 1,
      rationale:
        "性能测试检查系统的响应时间（用户请求多快得到响应）和并发能力（系统能同时处理多少用户请求），确保满足发布要求。",
    },
    {
      id: "pm-w9-1-q11",
      question: "跨部门沟通不畅会导致什么发布问题？",
      options: [
        "代码质量下降",
        "信息不同步，各团队状态和职责不清",
        "用户增长缓慢",
        "定价策略失误",
      ],
      answer: 1,
      rationale:
        "发布涉及多个团队，信息不同步会导致各团队对发布状态和各自职责认知不一致。建议建立统一的发布状态看板，定期召开发布准备会议。",
    },
    {
      id: "pm-w9-1-q12",
      question: "发布后立即需要关注的是什么？",
      options: [
        "开始计划下一个大功能",
        "核心指标监控和用户反馈收集",
        "团队庆祝活动",
        "更新产品路线图",
      ],
      answer: 1,
      rationale:
        "发布后第一时间需要关注核心指标监控（确保系统正常运行）和用户反馈收集（识别问题和改进机会），而非立即转向其他工作。",
    },
  ],
  "pm-w9-2": [
    {
      id: "pm-w9-2-q1",
      question: "根据 LaunchDarkly，Feature Flags 的核心作用是什么？",
      options: [
        "加快代码编译速度",
        "允许在不修改源代码或重新部署的情况下启用或禁用功能",
        "自动修复代码 bug",
        "替代版本控制系统",
      ],
      answer: 1,
      rationale:
        "LaunchDarkly 定义 Feature Flags 为「allow you to enable or disable a feature without modifying the source code or requiring a redeploy」，实现部署与发布的解耦。",
    },
    {
      id: "pm-w9-2-q2",
      question: "Martin Fowler 将 Feature Toggles 分为哪四类？",
      options: [
        "开发、测试、生产、回滚",
        "Release、Experiment、Ops、Permissioning",
        "前端、后端、数据库、API",
        "必须、应该、可以、不要",
      ],
      answer: 1,
      rationale:
        "Martin Fowler 将 Feature Toggles 分为四类：Release Toggles（发布开关）、Experiment Toggles（实验开关）、Ops Toggles（运维开关）、Permissioning Toggles（权限开关）。",
    },
    {
      id: "pm-w9-2-q3",
      question: "Release Toggles 的典型生命周期是多长？",
      options: [
        "几年",
        "几天到几周",
        "永久存在",
        "几小时",
      ],
      answer: 1,
      rationale:
        "Martin Fowler 指出 Release Toggles 通常只存在几天到几周，功能全量发布后应该移除相关开关代码。",
    },
    {
      id: "pm-w9-2-q4",
      question: "渐进式发布（Progressive Delivery）的典型路径是什么？",
      options: [
        "直接全量发布",
        "内部测试 → Beta 用户 → 小比例用户 → 逐步扩大 → 全量",
        "先发布给 VIP 用户",
        "先在测试环境验证",
      ],
      answer: 1,
      rationale:
        "渐进式发布的典型路径是：内部测试 → Beta 用户 → 10% 用户 → 50% 用户 → 全量，逐步扩大范围并观察系统表现。",
    },
    {
      id: "pm-w9-2-q5",
      question: "Knight Capital Group 事件说明了什么问题？",
      options: [
        "代码质量的重要性",
        "Feature Flag 管理不当可能造成严重损失（4.6 亿美元）",
        "测试覆盖率不足",
        "团队沟通问题",
      ],
      answer: 1,
      rationale:
        "Martin Fowler 引用 Knight Capital Group 的案例说明「$460 million dollar mistake」是由于 Feature Toggle 管理不当造成的，强调开关需要积极清理。",
    },
    {
      id: "pm-w9-2-q6",
      question: "Feature Flags 与配置文件的主要区别是什么？",
      options: [
        "Feature Flags 更便宜",
        "Feature Flags 在运行时即时生效，支持用户分群；配置文件需要重新部署",
        "配置文件更安全",
        "它们没有区别",
      ],
      answer: 1,
      rationale:
        "LaunchDarkly 指出 Feature Flags 在运行时即时生效且支持用户分群定向，而配置文件需要手动修改和重新部署。",
    },
    {
      id: "pm-w9-2-q7",
      question: "Permissioning Toggles 的典型用途是什么？",
      options: [
        "A/B 测试",
        "限制功能只对特定用户群体开放（如付费用户、Beta 测试者）",
        "性能优化",
        "临时修复 bug",
      ],
      answer: 1,
      rationale:
        "Permissioning Toggles 用于限制功能只对特定用户群体开放，如 premium 用户、beta 测试者、内部员工等，可能存在多年。",
    },
    {
      id: "pm-w9-2-q8",
      question: "为什么 Feature Flags 会产生技术债务？",
      options: [
        "因为增加了代码行数",
        "因为未清理的开关会使代码杂乱，增加复杂性",
        "因为需要额外的服务器",
        "因为测试更困难",
      ],
      answer: 1,
      rationale:
        "Feature Flags 产生「flag debt」——未使用的开关在功能全量发布后仍留在代码中，增加复杂性。团队应建立定期清理机制。",
    },
    {
      id: "pm-w9-2-q9",
      question: "Ops Toggles 的主要作用是什么？",
      options: [
        "支持 A/B 测试",
        "控制运营行为，作为 kill switch 快速降级非关键功能",
        "限制用户权限",
        "管理发布时间",
      ],
      answer: 1,
      rationale:
        "Ops Toggles 控制运营行为，允许在系统出现问题时快速降级功能。一些会成为长期存在的「kill switches」用于非关键功能。",
    },
    {
      id: "pm-w9-2-q10",
      question: "Martin Fowler 建议如何管理 Feature Toggle 配置？",
      options: [
        "硬编码在代码中",
        "使用环境变量或分布式存储（如 etcd、Consul），优先使用源代码控制",
        "存储在本地文件",
        "通过邮件通知",
      ],
      answer: 1,
      rationale:
        "Martin Fowler 建议配置管理选项从简单（硬编码、环境变量）到复杂（分布式存储如 Zookeeper、etcd、Consul），静态配置通过源代码控制时最可靠。",
    },
    {
      id: "pm-w9-2-q11",
      question: "灰度发布（金丝雀发布）的核心优势是什么？",
      options: [
        "减少开发时间",
        "降低发布风险，问题只影响少数用户",
        "节省服务器成本",
        "简化代码结构",
      ],
      answer: 1,
      rationale:
        "灰度发布将新功能先发布给一小部分用户，验证没有问题后再逐步扩大范围。这大大降低了发布风险，因为问题只会影响少数用户。",
    },
    {
      id: "pm-w9-2-q12",
      question: "Feature Flags 增加测试复杂性的原因是什么？",
      options: [
        "需要更多测试人员",
        "每增加一个开关，测试组合数量翻倍",
        "测试工具不支持",
        "测试时间更长",
      ],
      answer: 1,
      rationale:
        "每增加一个 Feature Flag，理论上测试组合数量翻倍（开/关两种状态）。需要明确哪些开关组合需要测试，避免测试爆炸。",
    },
  ],
  "pm-w9-3": [
    {
      id: "pm-w9-3-q1",
      question: "根据 HubSpot，Go-to-Market 策略的定义是什么？",
      options: [
        "一种定价方法",
        "将新产品推向市场并驱动需求的分步计划",
        "一种项目管理框架",
        "一种用户研究方法",
      ],
      answer: 1,
      rationale:
        "HubSpot 定义 GTM 策略为「a step-by-step plan for bringing a new product to market and driving demand」，帮助识别目标受众并制定营销销售策略。",
    },
    {
      id: "pm-w9-3-q2",
      question: "GTM 策略的四大核心要素是什么？",
      options: [
        "计划、执行、监控、优化",
        "产品-市场匹配、目标受众、竞争格局、分销渠道",
        "需求、设计、开发、测试",
        "愿景、战略、路线图、执行",
      ],
      answer: 1,
      rationale:
        "HubSpot 指出 GTM 策略的四个关键要素：产品-市场匹配（解决什么问题）、目标受众识别（卖给谁）、竞争格局分析（与谁竞争）、分销渠道（如何触达用户）。",
    },
    {
      id: "pm-w9-3-q3",
      question: "HubSpot 建议的「买家中心映射」需要识别多少决策者？",
      options: [
        "1-2 个",
        "6-10 个",
        "只需要识别最终决策者",
        "越多越好",
      ],
      answer: 1,
      rationale:
        "HubSpot 建议「map the buying center」——识别 6-10 个决策者及其角色，包括发起者、用户、影响者、决策者、批准者、买家、看门人等。",
    },
    {
      id: "pm-w9-3-q4",
      question: "价值矩阵的作用是什么？",
      options: [
        "计算产品价格",
        "将客户痛点与解决方案优势连接",
        "管理产品路线图",
        "跟踪竞品动态",
      ],
      answer: 1,
      rationale:
        "价值矩阵将客户痛点与解决方案优势连接。每个目标角色都有不同的痛点和关注点，需要定制化的价值陈述。",
    },
    {
      id: "pm-w9-3-q5",
      question: "GTM 策略与一般营销策略的主要区别是什么？",
      options: [
        "GTM 只关注定价",
        "GTM 专注于新产品发布且需要跨职能参与；营销策略关注持续的品牌推广",
        "营销策略更重要",
        "它们是同一回事",
      ],
      answer: 1,
      rationale:
        "GTM 策略与一般营销策略不同。GTM 专注于新产品发布，需要跨职能参与；营销策略关注更广泛的品牌推广和持续的受众互动。",
    },
    {
      id: "pm-w9-3-q6",
      question: "在验证产品-市场匹配之前就制定 GTM 策略会有什么风险？",
      options: [
        "成本更高",
        "可能在没有用户需求的产品上浪费大量推广资源",
        "团队士气下降",
        "竞争对手会抢先",
      ],
      answer: 1,
      rationale:
        "很多团队在没有验证 PMF 的情况下就制定 GTM 策略。建议先通过 MVP 或 Beta 测试验证核心假设，再投入大规模推广资源。",
    },
    {
      id: "pm-w9-3-q7",
      question: "关于目标受众选择，以下哪个说法是正确的？",
      options: [
        "目标受众越广越好",
        "早期应聚焦于最能从产品获益的细分市场（Beachhead Market）",
        "只需要关注付费能力最强的用户",
        "让市场自然筛选目标用户",
      ],
      answer: 1,
      rationale:
        "试图服务所有人往往意味着谁也服务不好。早期应聚焦于最能从产品获益的细分市场（Beachhead Market），建立口碑后再扩展。",
    },
    {
      id: "pm-w9-3-q8",
      question: "选择获客渠道时应该考虑什么？",
      options: [
        "只选择最便宜的渠道",
        "不同产品适合不同渠道，需要匹配产品类型和目标用户",
        "选择竞品使用的渠道",
        "选择最新的渠道",
      ],
      answer: 1,
      rationale:
        "不同产品适合不同的获客渠道。B2B SaaS 可能依赖内容营销和销售团队，而消费品可能需要社交媒体和网红合作。选择错误渠道会浪费大量资源。",
    },
    {
      id: "pm-w9-3-q9",
      question: "定价策略应该基于什么来制定？",
      options: [
        "只看成本",
        "价值、竞品和成本三个维度综合考虑",
        "只看竞品定价",
        "随意定价，后续调整",
      ],
      answer: 1,
      rationale:
        "定价策略应基于价值（客户愿意支付多少）、竞品（市场基准）和成本（确保盈利）三个维度综合考虑，并准备根据市场反馈调整。",
    },
    {
      id: "pm-w9-3-q10",
      question: "B2B 产品的购买决策通常涉及哪些角色？",
      options: [
        "只有最终用户",
        "发起者、用户、影响者、决策者、批准者、买家、看门人等多个角色",
        "只有采购部门",
        "只有 CEO",
      ],
      answer: 1,
      rationale:
        "B2B 产品的购买决策通常涉及多个角色：发起者（提出需求）、用户（实际使用）、影响者（提供建议）、决策者（做出选择）、批准者（审批预算）、买家（执行采购）、看门人（控制信息流）。",
    },
    {
      id: "pm-w9-3-q11",
      question: "GTM 策略能为组织带来什么好处？",
      options: [
        "减少开发时间",
        "创建跨部门一致性、建立产品-市场匹配、识别规划差距",
        "降低产品成本",
        "自动化销售流程",
      ],
      answer: 1,
      rationale:
        "HubSpot 列出 GTM 策略的好处：创建组织一致性、建立产品-市场匹配、识别规划差距、揭示竞争优势、减少浪费的营销支出、加速可持续增长。",
    },
    {
      id: "pm-w9-3-q12",
      question: "发布后第一周/第一月应该关注什么成功指标？",
      options: [
        "只关注收入",
        "与发布目标对齐的关键指标，如注册量、激活率、早期留存",
        "只关注用户增长",
        "只关注媒体报道",
      ],
      answer: 1,
      rationale:
        "发布后应关注与发布目标对齐的关键指标，如注册量、激活率、早期留存、用户反馈等，而非单一维度的指标。",
    },
  ],
  "pm-w9-4": [
    {
      id: "pm-w9-4-q1",
      question: "根据 Intercom，产品发布在营销旅程中的位置是什么？",
      options: [
        "营销旅程的终点",
        "营销旅程的起点，而非终点",
        "营销旅程的中间阶段",
        "与营销旅程无关",
      ],
      answer: 1,
      rationale:
        "Intercom 强调「The launch is the start of the marketing journey, not the end goal」，发布只是开始，成功需要持续的优化和迭代。",
    },
    {
      id: "pm-w9-4-q2",
      question: "Intercom 建议的发布后反馈处理流程有几步？",
      options: [
        "两步：收集和分析",
        "三步：收集原始输入、按主题分类、实施针对性改进",
        "四步：计划、执行、检查、行动",
        "五步：识别、分析、设计、实施、评估",
      ],
      answer: 1,
      rationale:
        "Intercom 建议三步流程：首先收集原始输入（定性和定量数据）；然后按主题分类（支持问题、定价困惑等）；最后实施针对性改进。",
    },
    {
      id: "pm-w9-4-q3",
      question: "根据 Intercom 的研究，什么驱动了更多的产品采用？",
      options: [
        "发布公告本身",
        "发布后的小改动和持续优化",
        "更多的广告投放",
        "名人代言",
      ],
      answer: 1,
      rationale:
        "Intercom 的研究揭示「small changes we do after launch drive more adoption than the launch itself」，发布后的持续优化比发布公告更能驱动采用。",
    },
    {
      id: "pm-w9-4-q4",
      question: "根据 ProductPlan，敏捷迭代的典型时长是多少？",
      options: [
        "1 天",
        "1-2 周",
        "1 个月",
        "1 个季度",
      ],
      answer: 1,
      rationale:
        "ProductPlan 定义迭代为「a set amount of time (typically 1-2 weeks) reserved for development」，标准时长为 1-2 周。",
    },
    {
      id: "pm-w9-4-q5",
      question: "发布后应该监控哪些类型的指标？",
      options: [
        "只监控技术指标",
        "性能指标、业务指标、用户反馈（如 NPS、支持工单）",
        "只监控销售数据",
        "只监控社交媒体提及",
      ],
      answer: 1,
      rationale:
        "发布后需要建立核心指标监控：性能指标（响应时间、错误率）、业务指标（注册、转化、留存）、用户反馈（NPS、支持工单）等多个维度。",
    },
    {
      id: "pm-w9-4-q6",
      question: "发布后常见的错误是什么？",
      options: [
        "监控太多指标",
        "发布后「宣布胜利」，忽视发布后的关键工作",
        "过快迭代",
        "过多收集用户反馈",
      ],
      answer: 1,
      rationale:
        "很多团队发布后就「宣布胜利」，忽视了发布后的关键工作。发布只是验证产品假设的开始，而非终点。",
    },
    {
      id: "pm-w9-4-q7",
      question: "如何决定一个问题是立即修复还是放入下个版本？",
      options: [
        "所有问题都应立即修复",
        "根据影响范围、严重程度、修复成本综合判断",
        "所有问题都放入下个版本",
        "由管理层决定",
      ],
      answer: 1,
      rationale:
        "应根据影响范围、严重程度、修复成本综合判断。严重的用户体验问题应立即修复，功能增强可以规划到下个版本。",
    },
    {
      id: "pm-w9-4-q8",
      question: "Intercom 建议收集哪些类型的反馈数据？",
      options: [
        "只收集定量数据",
        "定性数据（客户消息、销售电话）和定量数据（分析指标、点击率）",
        "只收集用户评分",
        "只收集销售数据",
      ],
      answer: 1,
      rationale:
        "Intercom 建议收集定性数据（客户支持消息、销售电话、社交提及）和定量数据（分析指标、点击率、用户测试结果）两种类型。",
    },
    {
      id: "pm-w9-4-q9",
      question: "发布后第一周应该如何运作？",
      options: [
        "团队放假庆祝",
        "每日召开简短站会，review 指标和反馈",
        "开始下一个大功能的开发",
        "等待用户主动反馈",
      ],
      answer: 1,
      rationale:
        "发布后第一周应该每日召开简短的站会，review 指标和反馈，快速识别和响应问题，确保发布顺利。",
    },
    {
      id: "pm-w9-4-q10",
      question: "关于监控指标数量，以下哪个说法是正确的？",
      options: [
        "监控越多指标越好",
        "选择 3-5 个核心指标作为北极星，辅以异常告警",
        "只需要监控一个指标",
        "不需要监控，依赖用户反馈",
      ],
      answer: 1,
      rationale:
        "监控太多指标会导致信息过载，太少又可能错过重要信号。建议选择 3-5 个核心指标作为北极星，辅以异常告警。",
    },
    {
      id: "pm-w9-4-q11",
      question: "发布回顾应该在什么时候进行？",
      options: [
        "发布后立即",
        "第一周结束时",
        "下次发布前",
        "不需要回顾",
      ],
      answer: 1,
      rationale:
        "第一周结束时进行发布回顾，总结经验教训，既有足够数据评估发布效果，又足够及时能应用到后续工作中。",
    },
    {
      id: "pm-w9-4-q12",
      question: "Intercom 建议如何看待发布后的反馈收集？",
      options: [
        "发布成功后就不需要收集了",
        "将发布视为数据收集事件，通过持续倾听和迭代优化",
        "只在有投诉时才收集",
        "委托给客服团队处理",
      ],
      answer: 1,
      rationale:
        "Intercom 建议成功的产品营销人员「treat launches as data-collection events」，发布后通过持续倾听和基于实际客户行为的迭代来优化产品。",
    },
  ],
}
