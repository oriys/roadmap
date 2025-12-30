import type { KnowledgeCard, QuizQuestion, RoadmapDefinition, Stage } from "../types"

export const productManagerStages: Stage[] = [
  {
    id: "pm-foundation",
    title: "阶段一：产品经理基础",
    duration: "第 1-3 周",
    goal: "理解产品经理角色定位、核心职责，建立用户同理心与市场洞察能力。",
    weeks: [
      {
        id: "pm-w1",
        title: "第 1 周：产品经理角色与核心职责",
        summary: "明确产品经理的角色定位、核心能力模型与日常工作内容。",
        overview: "产品经理是连接用户、业务与技术的桥梁，负责定义产品愿景、制定策略并推动产品落地。本周将深入了解 PM 的核心职责与能力框架。",
        keyPoints: [
          "产品经理是价值与可行性的守护者，负责 What 和 Why。",
          "核心能力包括：产品执行、用户洞察、产品战略、影响力。",
          "PM 与项目经理、产品负责人的区别与协作边界。",
          "建立用户导向的思维模式，而非功能导向。",
        ],
        lessons: [
          {
            id: "pm-w1-1",
            title: "产品经理的角色定义",
            detail: "理解产品经理在组织中的定位，以及与其他角色（项目经理、产品负责人、设计师、工程师）的协作关系。",
            keyPoints: [
              "PM 负责产品的 What（做什么）和 Why（为什么），而非 How（怎么做）。",
              "产品三角：业务、用户体验、技术的交汇点。",
              "与 Scrum 中 Product Owner 角色的区别与联系。",
            ],
            resources: [
              { title: "roadmap.sh: Product Manager", url: "https://roadmap.sh/product-manager" },
              { title: "Scrum.org: What is a Product Owner", url: "https://www.scrum.org/resources/what-is-a-product-owner" },
              { title: "SVPG: Product Model Competencies", url: "https://www.svpg.com/product-model-competencies/" },
            ],
          },
          {
            id: "pm-w1-2",
            title: "PM 核心能力框架",
            detail: "学习产品经理的核心能力模型，包括产品执行、用户洞察、产品战略和影响力四大维度。",
            keyPoints: [
              "Ravi Mehta 的 12 项 PM 能力模型。",
              "评估自身的能力强项与待提升领域。",
              "不同阶段 PM 的能力侧重点。",
            ],
            resources: [
              { title: "Ravi Mehta: PM Competencies", url: "https://www.ravi-mehta.com/product-manager-roles/" },
              { title: "Product School: PM Skills", url: "https://productschool.com/blog/skills/product-manager-skills" },
              { title: "Reforge: Product Manager Skills", url: "https://www.reforge.com/blog/product-manager-skills" },
            ],
          },
          {
            id: "pm-w1-3",
            title: "产品生命周期管理",
            detail: "掌握产品从概念到退市的完整生命周期，理解不同阶段的 PM 工作重点。",
            keyPoints: [
              "产品生命周期：引入期、成长期、成熟期、衰退期。",
              "不同阶段的策略差异与资源分配。",
              "产品组合管理与产品线规划。",
            ],
            resources: [
              { title: "AIPMM: Product Lifecycle", url: "https://aipmm.com/certification" },
              { title: "HubSpot: Product Life Cycle", url: "https://blog.hubspot.com/marketing/product-life-cycle" },
              { title: "Corporate Finance Institute: Product Life Cycle", url: "https://corporatefinanceinstitute.com/resources/management/product-life-cycle/" },
            ],
          },
          {
            id: "pm-w1-4",
            title: "产品思维与用户导向",
            detail: "培养以用户为中心的思维方式，学会从用户需求出发而非功能堆砌。",
            keyPoints: [
              "产品思维：解决问题而非堆砌功能。",
              "用户价值 vs 商业价值的平衡。",
              "避免「功能工厂」陷阱。",
            ],
            resources: [
              { title: "Teresa Torres: Product Discovery", url: "https://www.producttalk.org/2021/08/product-discovery/" },
              { title: "Amplitude: Feature Factory Signs", url: "https://amplitude.com/blog/12-signs-youre-working-in-a-feature-factory-3-years-later" },
              { title: "Product School: Product Thinking", url: "https://productschool.com/blog/product-fundamentals/product-thinking-vs-product-management" },
            ],
          },
        ],
      },
      {
        id: "pm-w2",
        title: "第 2 周：用户研究与同理心",
        summary: "掌握用户研究方法，建立深入理解用户需求的能力。",
        overview: "用户同理心是产品经理最核心的能力之一。本周学习各种用户研究方法，建立持续洞察用户的习惯。",
        keyPoints: [
          "用户研究分为定性和定量两大类。",
          "用户访谈是获取深度洞察的关键方法。",
          "用户画像帮助团队共识目标用户。",
          "持续发现而非一次性研究。",
        ],
        lessons: [
          {
            id: "pm-w2-1",
            title: "用户访谈技巧",
            detail: "学习如何设计和执行有效的用户访谈，从中提取真实的用户需求和痛点。",
            keyPoints: [
              "开放式问题 vs 封闭式问题的使用。",
              "避免引导性提问，获取真实反馈。",
              "访谈记录与分析方法。",
            ],
            resources: [
              { title: "Teresa Torres: Customer Interviews", url: "https://www.producttalk.org/getting-started-with-discovery/" },
              { title: "User Interviews: UX Research Guide", url: "https://www.userinterviews.com/ux-research-field-guide-chapter/user-interviews" },
              { title: "IxDF: User Interviews", url: "https://www.interaction-design.org/literature/topics/user-interviews" },
            ],
          },
          {
            id: "pm-w2-2",
            title: "用户画像与场景",
            detail: "创建用户画像（Persona）和用户场景（User Scenario），帮助团队理解目标用户。",
            keyPoints: [
              "基于研究数据构建用户画像。",
              "用户场景描述用户在特定情境下的行为。",
              "避免假想用户，基于真实数据。",
            ],
            resources: [
              { title: "Nielsen Norman: Personas", url: "https://www.nngroup.com/articles/persona/" },
              { title: "Interaction Design: User Personas", url: "https://www.interaction-design.org/literature/topics/user-personas" },
              { title: "UX Collective: Persona Guide", url: "https://uxdesign.cc/creating-personas-for-design-6c9f14c89a6b" },
            ],
          },
          {
            id: "pm-w2-3",
            title: "Jobs to Be Done (JTBD)",
            detail: "学习 JTBD 框架，从用户「想要完成的任务」角度理解需求。",
            keyPoints: [
              "用户购买的是「进步」而非产品本身。",
              "功能性、情感性、社会性三维度的 Jobs。",
              "用 JTBD 发现真正的竞争对手。",
            ],
            resources: [
              { title: "Strategyn: JTBD Framework", url: "https://strategyn.com/jobs-to-be-done/" },
              { title: "Intercom: Job Stories", url: "https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/" },
              { title: "Harvard Business Review: JTBD", url: "https://hbr.org/2016/09/know-your-customers-jobs-to-be-done" },
            ],
          },
          {
            id: "pm-w2-4",
            title: "持续发现习惯",
            detail: "建立持续进行用户研究的习惯，而非只在项目开始时做一次性研究。",
            keyPoints: [
              "每周至少与一位用户交流。",
              "将用户研究融入日常工作流程。",
              "产品三人组（PM、设计师、工程师）协作发现。",
            ],
            resources: [
              { title: "Teresa Torres: Continuous Discovery", url: "https://www.producttalk.org/getting-started-with-discovery/" },
              { title: "Maze: Continuous Discovery", url: "https://maze.co/guides/product-discovery/continuous/" },
              { title: "Lyssna: Continuous Discovery", url: "https://www.lyssna.com/blog/continuous-product-discovery/" },
            ],
          },
        ],
      },
      {
        id: "pm-w3",
        title: "第 3 周：市场研究与竞品分析",
        summary: "掌握市场研究方法，学会分析竞争格局与市场机会。",
        overview: "了解市场环境和竞争格局是制定产品策略的基础。本周学习市场研究框架和竞品分析方法。",
        keyPoints: [
          "市场研究帮助识别机会与威胁。",
          "竞品分析不仅看功能，更要看策略。",
          "TAM/SAM/SOM 评估市场规模。",
          "持续跟踪市场动态与竞争变化。",
        ],
        lessons: [
          {
            id: "pm-w3-1",
            title: "市场规模评估",
            detail: "学习 TAM、SAM、SOM 框架，评估产品的市场机会与天花板。",
            keyPoints: [
              "TAM：总可达市场（理论最大值）。",
              "SAM：可服务市场（实际可触达）。",
              "SOM：可获取市场（短期目标）。",
            ],
            resources: [
              { title: "Antler: TAM SAM SOM", url: "https://www.antler.co/blog/tam-sam-som" },
              { title: "HubSpot: Market Sizing", url: "https://blog.hubspot.com/marketing/tam-sam-som" },
              { title: "Y Combinator: Market Size", url: "https://www.ycombinator.com/library/6r-how-to-evaluate-startup-ideas" },
            ],
          },
          {
            id: "pm-w3-2",
            title: "竞品分析框架",
            detail: "建立系统的竞品分析框架，从功能、定位、策略多维度分析竞争对手。",
            keyPoints: [
              "直接竞品 vs 间接竞品 vs 替代品。",
              "功能对比矩阵与差异化定位。",
              "竞品的商业模式与增长策略。",
            ],
            resources: [
              { title: "Creately: Competitor Analysis Framework", url: "https://creately.com/guides/competitor-analysis-framework/" },
              { title: "Shopify: Competitive Analysis", url: "https://www.shopify.com/blog/competitive-analysis" },
              { title: "Stratechi: Market Competitive Analysis", url: "https://www.stratechi.com/market-competitive-analysis-template/" },
            ],
          },
          {
            id: "pm-w3-3",
            title: "波特五力分析",
            detail: "运用波特五力模型分析行业竞争格局，识别战略机会。",
            keyPoints: [
              "现有竞争者的竞争程度。",
              "潜在进入者与替代品的威胁。",
              "供应商与买家的议价能力。",
            ],
            resources: [
              { title: "Harvard Business Review: Porter's Five Forces", url: "https://hbr.org/1979/03/how-competitive-forces-shape-strategy" },
              { title: "MindTools: Five Forces", url: "https://www.mindtools.com/at7k8my/porter-s-five-forces/" },
              { title: "Cascade: Porter's Five Forces", url: "https://www.cascade.app/blog/porters-5-forces" },
            ],
          },
          {
            id: "pm-w3-4",
            title: "产品定位与差异化",
            detail: "基于市场分析确定产品定位，找到差异化竞争优势。",
            keyPoints: [
              "定位三要素：目标用户、价值主张、竞争优势。",
              "蓝海 vs 红海策略选择。",
              "定位陈述（Positioning Statement）撰写。",
            ],
            resources: [
              { title: "April Dunford: Obviously Awesome", url: "https://www.aprildunford.com/books" },
              { title: "Lenny's Newsletter: April Dunford Positioning", url: "https://www.lennysnewsletter.com/p/summary-april-dunford-on-product" },
              { title: "Strategyzer: Value Proposition Canvas", url: "https://www.strategyzer.com/canvas/value-proposition-canvas" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "pm-planning",
    title: "阶段二：需求管理与规划",
    duration: "第 4-6 周",
    goal: "掌握需求管理、产品路线图与数据驱动决策的核心技能。",
    weeks: [
      {
        id: "pm-w4",
        title: "第 4 周：需求管理与用户故事",
        summary: "学习需求收集、分析与表达的方法，掌握用户故事编写技巧。",
        overview: "需求管理是产品经理的核心工作之一。本周学习如何系统地收集、分析和表达需求，以及编写清晰的用户故事。",
        keyPoints: [
          "需求来源多样：用户反馈、数据分析、战略目标等。",
          "用户故事格式：As a... I want... So that...",
          "INVEST 原则确保用户故事质量。",
          "需求优先级排序是核心能力。",
        ],
        lessons: [
          {
            id: "pm-w4-1",
            title: "需求收集与分析",
            detail: "建立系统的需求收集机制，学会从多渠道整合和分析需求。",
            keyPoints: [
              "需求来源：用户反馈、数据洞察、销售/客服、竞品。",
              "区分需求（需要解决的问题）和功能（解决方案）。",
              "机会解决方案树（Opportunity Solution Tree）。",
            ],
            resources: [
              { title: "Teresa Torres: Opportunity Solution Tree", url: "https://www.producttalk.org/2021/08/product-discovery/" },
              { title: "ProductPlan: Feature Requests", url: "https://www.productplan.com/glossary/feature-request/" },
              { title: "Intercom: Customer Feedback", url: "https://www.intercom.com/blog/customer-feedback/" },
            ],
          },
          {
            id: "pm-w4-2",
            title: "用户故事编写",
            detail: "掌握用户故事的标准格式、INVEST 原则与验收标准编写。",
            keyPoints: [
              "用户故事格式：As a [user], I want [goal], so that [benefit]。",
              "INVEST：Independent, Negotiable, Valuable, Estimable, Small, Testable。",
              "验收标准（Acceptance Criteria）的编写。",
            ],
            resources: [
              { title: "Atlassian: User Stories", url: "https://www.atlassian.com/agile/project-management/user-stories" },
              { title: "Mountain Goat: User Stories", url: "https://www.mountaingoatsoftware.com/agile/user-stories" },
              { title: "SAFe: Story", url: "https://framework.scaledagile.com/story" },
            ],
          },
          {
            id: "pm-w4-3",
            title: "产品需求文档 (PRD)",
            detail: "学习如何编写清晰、完整的产品需求文档，支持开发团队理解和实现。",
            keyPoints: [
              "PRD 核心要素：背景、目标、用户故事、范围、非功能需求。",
              "与设计稿、技术方案的配合。",
              "避免过度文档化，保持敏捷。",
            ],
            resources: [
              { title: "Silicon Valley Product Group: PRD", url: "https://www.svpg.com/product-requirements-documents/" },
              { title: "ProductPlan: PRD Guide", url: "https://www.productplan.com/glossary/product-requirements-document/" },
              { title: "Atlassian: PRD Template", url: "https://www.atlassian.com/software/confluence/templates/product-requirements-document" },
            ],
          },
          {
            id: "pm-w4-4",
            title: "产品 Backlog 管理",
            detail: "学习如何维护健康的产品 Backlog，确保团队始终在做最有价值的事。",
            keyPoints: [
              "Backlog 精炼（Grooming/Refinement）的最佳实践。",
              "保持 Backlog 精简、优先级清晰。",
              "Epic → Story → Task 的拆分逻辑。",
            ],
            resources: [
              { title: "Scrum.org: Product Backlog", url: "https://www.scrum.org/resources/what-is-a-product-backlog" },
              { title: "Atlassian: Backlog Grooming", url: "https://www.atlassian.com/agile/scrum/backlog-refinement" },
              { title: "Roman Pichler: Product Backlog", url: "https://www.romanpichler.com/blog/product-backlog/" },
            ],
          },
        ],
      },
      {
        id: "pm-w5",
        title: "第 5 周：产品路线图与优先级排序",
        summary: "掌握产品路线图的制定方法与优先级排序框架。",
        overview: "产品路线图是传达产品战略和计划的关键工具。本周学习路线图的制定方法和优先级排序框架。",
        keyPoints: [
          "路线图是战略沟通工具，而非承诺列表。",
          "不同受众需要不同版本的路线图。",
          "优先级排序需要框架支撑，减少主观决策。",
          "定期回顾和调整路线图。",
        ],
        lessons: [
          {
            id: "pm-w5-1",
            title: "产品路线图设计",
            detail: "学习产品路线图的类型、设计原则与最佳实践。",
            keyPoints: [
              "路线图类型：基于时间、基于主题、Now-Next-Later。",
              "路线图服务于愿景，而非愿景服务于路线图。",
              "保持灵活性，避免过度承诺具体日期。",
            ],
            resources: [
              { title: "Atlassian: Product Roadmaps", url: "https://www.atlassian.com/agile/product-management/product-roadmaps" },
              { title: "ProductPlan: What is a Roadmap", url: "https://www.productplan.com/learn/what-is-a-product-roadmap/" },
              { title: "Aha!: Roadmap Best Practices", url: "https://www.aha.io/roadmapping/guide/roadmap/best-practices" },
            ],
          },
          {
            id: "pm-w5-2",
            title: "RICE 优先级框架",
            detail: "学习 RICE 评分模型，用数据支撑优先级决策。",
            keyPoints: [
              "Reach（覆盖）× Impact（影响）× Confidence（信心）÷ Effort（工作量）。",
              "量化决策，减少主观争议。",
              "RICE 分数是参考而非绝对标准。",
            ],
            resources: [
              { title: "Intercom: RICE Framework", url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" },
              { title: "ProductPlan: RICE Scoring", url: "https://www.productplan.com/glossary/rice-scoring-model/" },
              { title: "Fibery: RICE Method", url: "https://fibery.io/blog/product-management/rice/" },
            ],
          },
          {
            id: "pm-w5-3",
            title: "其他优先级框架",
            detail: "了解 MoSCoW、Kano、WSJF 等其他优先级框架，根据场景选择使用。",
            keyPoints: [
              "MoSCoW：Must have, Should have, Could have, Won't have。",
              "Kano 模型：基本型、期望型、兴奋型需求。",
              "WSJF：Weighted Shortest Job First，适合 SAFe。",
            ],
            resources: [
              { title: "ProductPlan: MoSCoW", url: "https://www.productplan.com/glossary/moscow-prioritization/" },
              { title: "Folding Burritos: Kano Model", url: "https://foldingburritos.com/kano-model/" },
              { title: "SAFe: WSJF", url: "https://scaledagileframework.com/wsjf/" },
            ],
          },
          {
            id: "pm-w5-4",
            title: "利益相关者对齐",
            detail: "学习如何与不同利益相关者沟通路线图，获得支持与对齐。",
            keyPoints: [
              "不同受众（高管、销售、客户）需要不同版本。",
              "用数据和逻辑支撑决策，而非「大声说话」。",
              "建立定期路线图回顾机制。",
            ],
            resources: [
              { title: "ProductPlan: Stakeholder Management", url: "https://www.productplan.com/glossary/stakeholder-management/" },
              { title: "Mind the Product: Stakeholder Alignment", url: "https://www.mindtheproduct.com/how-to-manage-stakeholders-as-a-product-manager/" },
              { title: "Aha!: Communicate Roadmap", url: "https://www.aha.io/roadmapping/guide/product-roadmap/how-to-communicate-your-product-roadmap" },
            ],
          },
        ],
      },
      {
        id: "pm-w6",
        title: "第 6 周：数据驱动决策与指标",
        summary: "掌握产品数据分析方法，建立数据驱动的决策习惯。",
        overview: "数据是产品经理做决策的重要依据。本周学习产品指标体系、数据分析方法与 A/B 测试。",
        keyPoints: [
          "北极星指标代表产品的核心价值。",
          "指标金字塔：北极星 → 输入指标 → 健康度指标。",
          "A/B 测试是验证假设的有力工具。",
          "数据告诉你「是什么」，用户研究告诉你「为什么」。",
        ],
        lessons: [
          {
            id: "pm-w6-1",
            title: "北极星指标 (North Star Metric)",
            detail: "学习如何定义产品的北极星指标，聚焦团队在最重要的事情上。",
            keyPoints: [
              "北极星指标反映用户获得的核心价值。",
              "好的北极星指标：可衡量、可行动、与业务增长相关。",
              "避免虚荣指标（如注册用户数）。",
            ],
            resources: [
              { title: "Amplitude: North Star Metric", url: "https://amplitude.com/blog/product-north-star-metric" },
              { title: "Mixpanel: North Star Metric", url: "https://mixpanel.com/blog/north-star-metric/" },
              { title: "Future: Choosing North Star", url: "https://future.com/north-star-metrics/" },
            ],
          },
          {
            id: "pm-w6-2",
            title: "OKR 目标管理",
            detail: "学习 OKR 框架，将战略目标转化为可衡量的关键结果。",
            keyPoints: [
              "Objective：定性的、鼓舞人心的目标。",
              "Key Results：定量的、可衡量的关键结果。",
              "OKR 强调 Outcome 而非 Output。",
            ],
            resources: [
              { title: "What Matters: OKR Guide", url: "https://www.whatmatters.com/faqs/okr-meaning-definition-example" },
              { title: "Amplitude: OKR for PM", url: "https://amplitude.com/blog/okr-product-management" },
              { title: "Product School: OKRs", url: "https://productschool.com/resources/glossary/okr" },
            ],
          },
          {
            id: "pm-w6-3",
            title: "产品数据分析",
            detail: "学习产品数据分析的常用方法，从数据中发现洞察。",
            keyPoints: [
              "漏斗分析、留存分析、用户分群。",
              "相关性 ≠ 因果性，避免数据误读。",
              "结合定量数据与定性研究。",
            ],
            resources: [
              { title: "Amplitude: Analytics Guide", url: "https://amplitude.com/blog/product-analytics" },
              { title: "Mixpanel: Analytics Academy", url: "https://mixpanel.com/content/guide-to-product-analytics/" },
              { title: "ProductPlan: Data-Driven PM", url: "https://www.productplan.com/glossary/data-driven-product-management/" },
            ],
          },
          {
            id: "pm-w6-4",
            title: "A/B 测试与实验",
            detail: "学习 A/B 测试的设计与分析方法，用实验验证产品假设。",
            keyPoints: [
              "假设驱动：先有假设，再做测试。",
              "样本量与统计显著性。",
              "一次只测一个变量，控制变量法。",
            ],
            resources: [
              { title: "Optimizely: A/B Testing", url: "https://www.optimizely.com/optimization-glossary/ab-testing/" },
              { title: "VWO: A/B Testing Guide", url: "https://vwo.com/ab-testing/" },
              { title: "Harvard Business Review: A/B Testing", url: "https://hbr.org/2017/06/a-refresher-on-ab-testing" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "pm-execution",
    title: "阶段三：敏捷执行与协作",
    duration: "第 7-9 周",
    goal: "掌握敏捷开发方法论，提升跨团队协作与产品发布能力。",
    weeks: [
      {
        id: "pm-w7",
        title: "第 7 周：敏捷方法论",
        summary: "深入理解敏捷开发方法论，掌握 Scrum 与 Kanban 的实践。",
        overview: "敏捷方法论是现代产品开发的主流方式。本周深入学习 Scrum 和 Kanban 的原理与实践。",
        keyPoints: [
          "敏捷强调快速迭代、持续反馈。",
          "Scrum 有固定的角色、仪式和产出物。",
          "Kanban 强调可视化与限制在制品数量。",
          "选择适合团队的方法论并持续改进。",
        ],
        lessons: [
          {
            id: "pm-w7-1",
            title: "敏捷宣言与原则",
            detail: "理解敏捷宣言的四大价值观和十二条原则，把握敏捷的本质。",
            keyPoints: [
              "个体和互动 高于 流程和工具。",
              "可工作的软件 高于 详尽的文档。",
              "客户合作 高于 合同谈判。",
              "响应变化 高于 遵循计划。",
            ],
            resources: [
              { title: "Agile Manifesto", url: "https://agilemanifesto.org/" },
              { title: "Atlassian: Agile", url: "https://www.atlassian.com/agile" },
              { title: "Scrum Alliance: Agile", url: "https://www.scrumalliance.org/about-scrum/overview" },
            ],
          },
          {
            id: "pm-w7-2",
            title: "Scrum 框架详解",
            detail: "深入学习 Scrum 的角色、仪式和产出物，理解其运作机制。",
            keyPoints: [
              "三个角色：Product Owner、Scrum Master、开发团队。",
              "五个仪式：Sprint Planning、Daily Standup、Sprint Review、Retrospective、Backlog Refinement。",
              "三个产出物：Product Backlog、Sprint Backlog、Increment。",
            ],
            resources: [
              { title: "Scrum Guide (官方)", url: "https://scrumguides.org/scrum-guide.html" },
              { title: "Scrum.org: Learning Path", url: "https://www.scrum.org/pathway/product-owner-learning-path" },
              { title: "Atlassian: Scrum", url: "https://www.atlassian.com/agile/scrum" },
            ],
          },
          {
            id: "pm-w7-3",
            title: "Kanban 方法论",
            detail: "学习 Kanban 的核心原则，以及如何在产品开发中应用。",
            keyPoints: [
              "可视化工作流程。",
              "限制在制品（WIP）数量。",
              "管理流动，持续改进。",
            ],
            resources: [
              { title: "Kanbanize: What is Kanban", url: "https://kanbanize.com/kanban-resources/getting-started/what-is-kanban" },
              { title: "Atlassian: Kanban", url: "https://www.atlassian.com/agile/kanban" },
              { title: "LeanKit: Kanban Guide", url: "https://www.planview.com/resources/guide/introduction-to-kanban/" },
            ],
          },
          {
            id: "pm-w7-4",
            title: "Sprint 规划与评审",
            detail: "学习如何有效进行 Sprint 规划和评审，确保迭代高效。",
            keyPoints: [
              "Sprint 规划：确定 Sprint 目标和 Sprint Backlog。",
              "Sprint 评审：展示成果，收集反馈。",
              "回顾会议：团队持续改进的机制。",
            ],
            resources: [
              { title: "Scrum.org: Sprint Planning", url: "https://www.scrum.org/resources/sprint-planning" },
              { title: "Atlassian: Sprint Reviews", url: "https://www.atlassian.com/agile/scrum/sprint-reviews" },
              { title: "Mountain Goat: Retrospectives", url: "https://www.mountaingoatsoftware.com/agile/scrum/meetings/sprint-retrospective" },
            ],
          },
        ],
      },
      {
        id: "pm-w8",
        title: "第 8 周：跨团队协作与沟通",
        summary: "提升与设计、工程、销售等团队的协作效率，建立有效的沟通机制。",
        overview: "产品经理需要与多个团队密切协作。本周学习跨团队沟通的技巧和最佳实践。",
        keyPoints: [
          "产品经理是团队的「粘合剂」而非「老板」。",
          "与工程师沟通要理解技术约束。",
          "与设计师协作要尊重设计决策。",
          "影响力比职权更重要。",
        ],
        lessons: [
          {
            id: "pm-w8-1",
            title: "与工程团队协作",
            detail: "学习如何与工程师高效协作，建立相互信任的合作关系。",
            keyPoints: [
              "理解技术债务和技术约束。",
              "参与技术讨论，但不要越俎代庖。",
              "尊重工程师的估算，不要强压进度。",
            ],
            resources: [
              { title: "SVPG: Engineers", url: "https://www.svpg.com/product-managers-and-engineers/" },
              { title: "Pragmatic Engineer: Working with PM", url: "https://blog.pragmaticengineer.com/product-managers/" },
              { title: "Lenny's Newsletter: Eng Partnership", url: "https://www.lennysnewsletter.com/p/how-to-work-with-engineers" },
            ],
          },
          {
            id: "pm-w8-2",
            title: "与设计团队协作",
            detail: "学习如何与设计师有效协作，共同创造优秀的用户体验。",
            keyPoints: [
              "明确问题，让设计师探索解决方案。",
              "提供充分的用户研究支持。",
              "设计评审中提供建设性反馈。",
            ],
            resources: [
              { title: "SVPG: Designers", url: "https://www.svpg.com/product-manager-and-designer/" },
              { title: "InVision: PM and Design", url: "https://www.invisionapp.com/inside-design/product-managers-designers/" },
              { title: "Nielsen Norman: PM Design Partnership", url: "https://www.nngroup.com/articles/pm-ux-collaboration/" },
            ],
          },
          {
            id: "pm-w8-3",
            title: "利益相关者管理",
            detail: "学习如何管理不同利益相关者的期望，建立良好的工作关系。",
            keyPoints: [
              "识别并分类利益相关者。",
              "建立定期沟通机制。",
              "学会说「不」，但要给出理由。",
            ],
            resources: [
              { title: "Mind Tools: Stakeholder Analysis", url: "https://www.mindtools.com/akqsmd5/stakeholder-analysis" },
              { title: "ProductPlan: Stakeholder Management", url: "https://www.productplan.com/glossary/stakeholder-management/" },
              { title: "Atlassian: RACI", url: "https://www.atlassian.com/team-playbook/plays/roles-and-responsibilities" },
            ],
          },
          {
            id: "pm-w8-4",
            title: "产品沟通与汇报",
            detail: "学习如何有效地进行产品沟通，包括状态更新、决策汇报等。",
            keyPoints: [
              "金字塔原则：结论先行。",
              "MECE 原则：相互独立，完全穷尽。",
              "用数据支撑观点。",
            ],
            resources: [
              { title: "McKinsey: Pyramid Principle", url: "https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-the-pyramid-principle" },
              { title: "Atlassian: Status Updates", url: "https://www.atlassian.com/work-management/project-management/status-updates" },
              { title: "Lenny's Newsletter: Communication", url: "https://www.lennysnewsletter.com/p/how-to-communicate-as-a-pm" },
            ],
          },
        ],
      },
      {
        id: "pm-w9",
        title: "第 9 周：产品发布与上线",
        summary: "掌握产品发布的全流程，包括上线前准备、发布策略与迭代优化。",
        overview: "产品发布是检验产品价值的关键时刻。本周学习产品发布的策略和最佳实践。",
        keyPoints: [
          "发布不是终点，而是新的起点。",
          "发布前做好充分准备，降低风险。",
          "选择合适的发布策略（全量/灰度/A/B）。",
          "发布后持续监控，快速响应问题。",
        ],
        lessons: [
          {
            id: "pm-w9-1",
            title: "发布准备清单",
            detail: "学习产品发布前需要准备的各项工作，确保万无一失。",
            keyPoints: [
              "功能测试、性能测试、安全测试。",
              "文档准备：帮助文档、FAQ、培训材料。",
              "跨部门协调：销售、客服、市场。",
            ],
            resources: [
              { title: "ProductPlan: Launch Checklist", url: "https://www.productplan.com/glossary/product-launch-checklist/" },
              { title: "Atlassian: Release Management", url: "https://www.atlassian.com/agile/software-development/release-management" },
              { title: "Intercom: Product Launch", url: "https://www.intercom.com/blog/product-launch-checklist/" },
            ],
          },
          {
            id: "pm-w9-2",
            title: "发布策略选择",
            detail: "学习不同的发布策略，选择最适合产品和团队的方式。",
            keyPoints: [
              "全量发布 vs 灰度发布 vs 分阶段发布。",
              "功能开关（Feature Flags）的使用。",
              "内部测试（Dogfooding）和 Beta 测试。",
            ],
            resources: [
              { title: "LaunchDarkly: Feature Flags", url: "https://launchdarkly.com/blog/what-are-feature-flags/" },
              { title: "Martin Fowler: Feature Toggles", url: "https://martinfowler.com/articles/feature-toggles.html" },
              { title: "ProductPlan: Release Strategy", url: "https://www.productplan.com/glossary/release-strategy/" },
            ],
          },
          {
            id: "pm-w9-3",
            title: "Go-to-Market 策略",
            detail: "学习产品上市策略，与市场、销售团队协作推动产品成功。",
            keyPoints: [
              "目标市场与价值主张明确。",
              "定价策略与竞争定位。",
              "营销渠道与推广计划。",
            ],
            resources: [
              { title: "HubSpot: GTM Strategy", url: "https://blog.hubspot.com/sales/gtm-strategy" },
              { title: "ProductPlan: Go-to-Market", url: "https://www.productplan.com/glossary/go-to-market-strategy/" },
              { title: "Gartner: GTM Planning", url: "https://www.gartner.com/en/sales/topics/go-to-market-strategy" },
            ],
          },
          {
            id: "pm-w9-4",
            title: "发布后监控与迭代",
            detail: "学习发布后如何监控产品表现，快速响应问题并持续迭代。",
            keyPoints: [
              "核心指标监控与告警机制。",
              "用户反馈收集与问题优先级。",
              "快速修复 vs 下个版本规划。",
            ],
            resources: [
              { title: "Amplitude: Post-Launch", url: "https://amplitude.com/blog/product-launch-metrics" },
              { title: "ProductPlan: Iteration", url: "https://www.productplan.com/glossary/iteration/" },
              { title: "Intercom: Post-Launch", url: "https://www.intercom.com/blog/product-launches/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "pm-strategy",
    title: "阶段四：战略与职业发展",
    duration: "第 10-12 周",
    goal: "提升产品战略思维与领导力，为职业发展做好准备。",
    weeks: [
      {
        id: "pm-w10",
        title: "第 10 周：产品战略与商业模式",
        summary: "学习产品战略制定与商业模式设计，提升战略思维能力。",
        overview: "产品战略是连接愿景与执行的桥梁。本周学习战略规划的框架和商业模式设计。",
        keyPoints: [
          "产品战略回答「如何取胜」的问题。",
          "愿景 → 战略 → 路线图 → 执行的层次关系。",
          "商业模式决定产品如何创造和获取价值。",
          "战略需要定期复盘和调整。",
        ],
        lessons: [
          {
            id: "pm-w10-1",
            title: "产品愿景与战略",
            detail: "学习如何制定清晰的产品愿景和战略，指引团队方向。",
            keyPoints: [
              "愿景是产品要实现的长期目标。",
              "战略是实现愿景的路径选择。",
              "好的战略要做出取舍（Trade-offs）。",
            ],
            resources: [
              { title: "SVPG: Product Strategy", url: "https://www.svpg.com/product-strategy-overview/" },
              { title: "Gibson Biddle: Product Strategy", url: "https://gibsonbiddle.medium.com/intro-to-product-strategy-60bdf72b17e3" },
              { title: "Lenny's Newsletter: Strategy", url: "https://www.lennysnewsletter.com/p/product-strategy" },
            ],
          },
          {
            id: "pm-w10-2",
            title: "商业模式画布",
            detail: "学习商业模式画布工具，系统思考产品的商业模式。",
            keyPoints: [
              "九大模块：价值主张、客户细分、渠道、客户关系等。",
              "价值创造与价值获取的平衡。",
              "用画布验证商业假设。",
            ],
            resources: [
              { title: "Strategyzer: Business Model Canvas", url: "https://www.strategyzer.com/canvas/business-model-canvas" },
              { title: "Alexander Osterwalder: BMC", url: "https://www.strategyzer.com/library/the-business-model-canvas" },
              { title: "Lean Stack: Lean Canvas", url: "https://leanstack.com/lean-canvas" },
            ],
          },
          {
            id: "pm-w10-3",
            title: "定价策略",
            detail: "学习产品定价的策略和方法，平衡用户价值与商业收益。",
            keyPoints: [
              "成本加成、竞争定价、价值定价。",
              "免费增值（Freemium）模式的设计。",
              "定价实验与迭代。",
            ],
            resources: [
              { title: "Price Intelligently: Pricing", url: "https://www.priceintelligently.com/" },
              { title: "OpenView: Pricing Strategy", url: "https://openviewpartners.com/blog/product-pricing/" },
              { title: "Lenny's Newsletter: Pricing", url: "https://www.lennysnewsletter.com/p/how-to-price-your-product" },
            ],
          },
          {
            id: "pm-w10-4",
            title: "产品组合管理",
            detail: "学习如何管理多个产品或产品线，优化资源配置。",
            keyPoints: [
              "波士顿矩阵：明星、金牛、问号、瘦狗。",
              "产品线扩展与收缩策略。",
              "资源在不同产品间的分配。",
            ],
            resources: [
              { title: "BCG: Growth-Share Matrix", url: "https://www.bcg.com/about/overview/our-history/growth-share-matrix" },
              { title: "ProductPlan: Portfolio Management", url: "https://www.productplan.com/glossary/product-portfolio-management/" },
              { title: "McKinsey: Portfolio Strategy", url: "https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/enduring-ideas-the-ge-and-mckinsey-nine-box-matrix" },
            ],
          },
        ],
      },
      {
        id: "pm-w11",
        title: "第 11 周：领导力与影响力",
        summary: "培养产品领导力，学会在没有直接汇报关系的情况下建立影响力。",
        overview: "产品经理往往没有直接管理权，但需要推动团队和组织达成目标。本周学习建立影响力的方法。",
        keyPoints: [
          "影响力来自信任、专业和同理心。",
          "用数据和逻辑说服，而非职权。",
          "建立跨团队的信任关系。",
          "领导力是可以培养的技能。",
        ],
        lessons: [
          {
            id: "pm-w11-1",
            title: "没有职权的影响力",
            detail: "学习如何在没有直接管理权的情况下，推动他人达成目标。",
            keyPoints: [
              "建立信任是影响力的基础。",
              "理解他人的动机和关切。",
              "用「我们」而非「我」的心态协作。",
            ],
            resources: [
              { title: "Harvard Business Review: Influence", url: "https://hbr.org/2013/04/three-ways-to-influence-people" },
              { title: "SVPG: Product Leadership", url: "https://www.svpg.com/product-leadership/" },
              { title: "Mind the Product: Influence", url: "https://www.mindtheproduct.com/leading-without-authority/" },
            ],
          },
          {
            id: "pm-w11-2",
            title: "冲突解决与谈判",
            detail: "学习如何处理工作中的冲突和分歧，达成双赢的解决方案。",
            keyPoints: [
              "理解冲突的根源：利益、观点、情绪。",
              "积极倾听，寻找共同点。",
              "聚焦问题本身，而非人。",
            ],
            resources: [
              { title: "Harvard Negotiation Project", url: "https://www.pon.harvard.edu/daily/negotiation-skills-daily/principled-negotiation-focus-interests-create-value/" },
              { title: "Mind Tools: Conflict Resolution", url: "https://www.mindtools.com/ahcbc96/conflict-resolution" },
              { title: "HBR: Managing Conflict", url: "https://hbr.org/2017/07/how-to-handle-conflict-in-product-management" },
            ],
          },
          {
            id: "pm-w11-3",
            title: "向上管理",
            detail: "学习如何有效地与上级沟通，获得资源和支持。",
            keyPoints: [
              "理解上级的目标和关切。",
              "主动汇报进展和风险。",
              "带着解决方案而非问题。",
            ],
            resources: [
              { title: "HBR: Managing Up", url: "https://hbr.org/2015/01/what-everyone-should-know-about-managing-up" },
              { title: "Lenny's Newsletter: Managing Up", url: "https://www.lennysnewsletter.com/p/how-to-manage-up" },
              { title: "First Round: Executive Communication", url: "https://review.firstround.com/how-to-become-insanely-well-connected" },
            ],
          },
          {
            id: "pm-w11-4",
            title: "产品思维的传播",
            detail: "学习如何在组织中传播产品思维，建立产品文化。",
            keyPoints: [
              "用成功案例证明产品方法的价值。",
              "教导他人用户研究和数据分析。",
              "推动组织向用户导向转变。",
            ],
            resources: [
              { title: "SVPG: Product Culture", url: "https://www.svpg.com/product-culture/" },
              { title: "Mind the Product: Product Culture", url: "https://www.mindtheproduct.com/building-a-product-culture/" },
              { title: "Marty Cagan: Empowered", url: "https://www.svpg.com/empowered-ordinary-people-extraordinary-products/" },
            ],
          },
        ],
      },
      {
        id: "pm-w12",
        title: "第 12 周：职业发展与面试准备",
        summary: "规划产品经理职业发展路径，掌握面试技巧和求职策略。",
        overview: "产品经理有多种职业发展路径。本周学习职业规划和面试准备的技巧。",
        keyPoints: [
          "PM 职业路径：管理线 vs 专业线。",
          "面试核心：产品设计、执行、行为三大类。",
          "Portfolio 和案例是最好的证明。",
          "持续学习是保持竞争力的关键。",
        ],
        lessons: [
          {
            id: "pm-w12-1",
            title: "PM 职业发展路径",
            detail: "了解产品经理的职业发展阶梯和不同方向的选择。",
            keyPoints: [
              "APM → PM → Senior PM → Lead PM → Director → VP → CPO。",
              "管理线 vs 个人贡献者（IC）线。",
              "行业切换与技能迁移。",
            ],
            resources: [
              { title: "Coursera: PM Career Path", url: "https://www.coursera.org/resources/job-leveling-matrix-for-product-management-career-pathways" },
              { title: "Lenny's Newsletter: PM Levels", url: "https://www.lennysnewsletter.com/p/what-distinguishes-a-great-product" },
              { title: "The Product Folks: Career Path", url: "https://www.theproductfolks.com/product-management-blog/skills-required-for-a-product-manager-unveiling-core-competencies" },
            ],
          },
          {
            id: "pm-w12-2",
            title: "PM 面试题型与技巧",
            detail: "掌握产品经理面试的常见题型和回答框架。",
            keyPoints: [
              "产品设计题：从 0 到 1 设计产品。",
              "产品执行题：指标、优先级、分析。",
              "行为面试题：STAR 方法。",
            ],
            resources: [
              { title: "IGotAnOffer: PM Interview", url: "https://igotanoffer.com/blogs/product-manager/pm-interview-prep" },
              { title: "Exponent: PM Interview", url: "https://www.tryexponent.com/courses/pm-interview" },
              { title: "Product School: Interview Guide", url: "https://productschool.com/blog/skills/product-manager-interview-guide" },
            ],
          },
          {
            id: "pm-w12-3",
            title: "Portfolio 与案例展示",
            detail: "学习如何构建产品经理 Portfolio，有效展示自己的能力和成果。",
            keyPoints: [
              "用 STAR/CAR 方法描述项目经历。",
              "量化成果：用户增长、收入提升等。",
              "展示思考过程，而非只是结果。",
            ],
            resources: [
              { title: "Product Manager HQ: Portfolio", url: "https://www.productmanagerhq.com/2019/12/product-manager-portfolio/" },
              { title: "Lewis Lin: PM Interview", url: "https://www.lewis-lin.com/blog/product-manager-portfolio" },
              { title: "Medium: PM Portfolio", url: "https://medium.com/the-year-of-the-looking-glass/building-a-strong-pm-portfolio-9dd9cb1cc11a" },
            ],
          },
          {
            id: "pm-w12-4",
            title: "持续学习与社区",
            detail: "建立持续学习的习惯，融入产品经理社区保持成长。",
            keyPoints: [
              "关注优质的产品博客和 Newsletter。",
              "参与产品社区活动和讨论。",
              "向优秀的产品经理学习。",
            ],
            resources: [
              { title: "Lenny's Newsletter", url: "https://www.lennysnewsletter.com/" },
              { title: "Mind the Product", url: "https://www.mindtheproduct.com/" },
              { title: "Product School", url: "https://productschool.com/" },
              { title: "SVPG Blog", url: "https://www.svpg.com/articles/" },
            ],
          },
        ],
      },
    ],
  },
]

export const productManagerKnowledgeCards: KnowledgeCard[] = [
  {
    id: "pm-k1",
    title: "用户故事格式",
    summary: "用户故事的标准写法，确保需求清晰可执行。",
    points: [
      "格式：As a [用户类型], I want [目标], so that [收益]。",
      "INVEST 原则：Independent, Negotiable, Valuable, Estimable, Small, Testable。",
      "必须包含验收标准（Acceptance Criteria）。",
    ],
    practice: "为你正在做的产品写 3 个符合 INVEST 原则的用户故事。",
  },
  {
    id: "pm-k2",
    title: "RICE 优先级评分",
    summary: "用数据驱动的方式进行优先级排序。",
    points: [
      "RICE = Reach × Impact × Confidence ÷ Effort。",
      "Reach：影响的用户数量（每季度/每月）。",
      "Impact：对指标的影响程度（0.25-3）。",
      "Confidence：信心程度（50%-100%）。",
      "Effort：工作量（人月）。",
    ],
    practice: "用 RICE 模型对当前 Backlog 中的前 5 个需求进行打分排序。",
  },
  {
    id: "pm-k3",
    title: "北极星指标选择",
    summary: "如何选择正确的北极星指标。",
    points: [
      "反映用户获得的核心价值。",
      "与长期业务增长直接相关。",
      "可衡量、可行动、易理解。",
      "避免虚荣指标（如注册用户数）。",
    ],
    practice: "为你的产品定义一个北极星指标，并解释为什么选择它。",
  },
  {
    id: "pm-k4",
    title: "用户访谈五问",
    summary: "用户访谈中的关键问题框架。",
    points: [
      "你上一次遇到 [问题] 是什么时候？",
      "当时你是怎么解决的？",
      "这个解决方案有什么不满意的地方？",
      "如果有一个理想的解决方案，它应该是什么样的？",
      "你愿意为这样的解决方案付费吗？为什么？",
    ],
    practice: "用这五个问题框架进行一次真实的用户访谈。",
  },
  {
    id: "pm-k5",
    title: "PRD 核心要素",
    summary: "一份优秀 PRD 必须包含的内容。",
    points: [
      "背景与目标：为什么要做这个功能。",
      "用户故事：用户是谁，想要什么。",
      "功能范围：做什么、不做什么。",
      "成功指标：如何衡量功能成功。",
      "非功能需求：性能、安全、兼容性等。",
    ],
    practice: "为一个即将开发的功能写一份简洁的 PRD。",
  },
  {
    id: "pm-k6",
    title: "Scrum 仪式清单",
    summary: "Scrum 的五个核心仪式及其目的。",
    points: [
      "Sprint Planning：确定 Sprint 目标和 Backlog。",
      "Daily Standup：同步进展、识别阻塞。",
      "Sprint Review：展示成果、收集反馈。",
      "Retrospective：团队反思与改进。",
      "Backlog Refinement：细化和估算 Backlog。",
    ],
    practice: "观察你团队的 Scrum 仪式，找出可以改进的地方。",
  },
  {
    id: "pm-k7",
    title: "产品三角模型",
    summary: "产品经理的核心定位。",
    points: [
      "用户体验（Desirability）：用户是否需要？",
      "技术可行性（Feasibility）：能否实现？",
      "商业可行性（Viability）：是否赚钱？",
      "PM 的职责是找到三者的交集。",
    ],
    practice: "评估你当前产品的一个功能在三个维度上的表现。",
  },
  {
    id: "pm-k8",
    title: "OKR 写作指南",
    summary: "如何写出高质量的 OKR。",
    points: [
      "Objective：定性的、鼓舞人心的、有挑战性的。",
      "Key Result：定量的、可衡量的、有时限的。",
      "每个 O 对应 3-5 个 KR。",
      "OKR 关注 Outcome（结果），而非 Output（产出）。",
    ],
    practice: "为下个季度的产品目标写一组 OKR。",
  },
  {
    id: "pm-k9",
    title: "STAR 面试法",
    summary: "行为面试的标准回答框架。",
    points: [
      "Situation：描述当时的背景和情境。",
      "Task：说明你的任务和目标。",
      "Action：详细描述你采取的行动。",
      "Result：量化成果和学习。",
    ],
    practice: "用 STAR 框架准备 3 个你最有代表性的项目经历。",
  },
  {
    id: "pm-k10",
    title: "发布检查清单",
    summary: "产品发布前的核心检查项。",
    points: [
      "功能验证：所有 Acceptance Criteria 通过。",
      "性能测试：响应时间和并发能力。",
      "安全审查：敏感数据和权限控制。",
      "文档准备：帮助文档和 FAQ。",
      "回滚方案：出问题时的应对计划。",
    ],
    practice: "为下次发布创建一份检查清单模板。",
  },
]

export const productManagerExamQuestions: QuizQuestion[] = [
  {
    id: "pm-q1",
    question: "产品经理（PM）与产品负责人（PO）的主要区别是什么？",
    options: [
      "PM 关注 What 和 Why，PO 在 Scrum 中更聚焦于 Backlog 管理",
      "PM 和 PO 完全是同一个角色",
      "PO 负责产品战略，PM 负责执行",
      "PM 只存在于瀑布开发模式中",
    ],
    answer: 0,
    rationale: "PM 通常关注更宏观的产品战略、愿景和用户需求，而 PO 在 Scrum 框架中更聚焦于 Product Backlog 的管理和与开发团队的协作。",
  },
  {
    id: "pm-q2",
    question: "以下哪个不是好的用户故事的 INVEST 原则之一？",
    options: [
      "Independent（独立的）",
      "Negotiable（可协商的）",
      "Innovative（创新的）",
      "Testable（可测试的）",
    ],
    answer: 2,
    rationale: "INVEST 代表 Independent（独立的）、Negotiable（可协商的）、Valuable（有价值的）、Estimable（可估算的）、Small（小的）、Testable（可测试的）。Innovative 不是其中之一。",
  },
  {
    id: "pm-q3",
    question: "在 RICE 优先级框架中，如果一个功能的 Reach=1000, Impact=2, Confidence=80%, Effort=4 人月，其 RICE 分数是多少？",
    options: [
      "400",
      "4000",
      "500",
      "200",
    ],
    answer: 0,
    rationale: "RICE = Reach × Impact × Confidence ÷ Effort = 1000 × 2 × 0.8 ÷ 4 = 400。",
  },
  {
    id: "pm-q4",
    question: "关于北极星指标（North Star Metric），以下哪个说法是正确的？",
    options: [
      "注册用户数是一个好的北极星指标",
      "北极星指标应该反映用户获得的核心价值",
      "每个产品应该有 5-10 个北极星指标",
      "北极星指标只关注收入",
    ],
    answer: 1,
    rationale: "好的北极星指标应该反映用户从产品中获得的核心价值，与长期业务增长相关。注册用户数是虚荣指标，北极星指标通常只有一个。",
  },
  {
    id: "pm-q5",
    question: "Jobs to Be Done (JTBD) 框架的核心理念是什么？",
    options: [
      "用户购买的是功能",
      "用户购买的是「进步」，而非产品本身",
      "用户总是知道自己想要什么",
      "竞争对手只来自同类产品",
    ],
    answer: 1,
    rationale: "JTBD 的核心理念是用户不是购买产品，而是「雇佣」产品来帮助他们完成某项任务、实现某种进步。这个视角帮助我们发现真正的用户需求和潜在竞争对手。",
  },
  {
    id: "pm-q6",
    question: "以下哪个是 Scrum 框架中 Product Owner 的核心职责？",
    options: [
      "编写代码",
      "管理团队成员的绩效",
      "最大化产品价值，管理 Product Backlog",
      "移除团队的障碍",
    ],
    answer: 2,
    rationale: "根据 Scrum Guide，Product Owner 负责最大化产品价值，这通过有效管理 Product Backlog 来实现。移除障碍是 Scrum Master 的职责。",
  },
  {
    id: "pm-q7",
    question: "TAM、SAM、SOM 分别代表什么？",
    options: [
      "Total Addressable Market, Serviceable Available Market, Serviceable Obtainable Market",
      "Target Audience Market, Sales Addressable Market, Sales Obtainable Market",
      "Total Annual Market, Service Annual Market, Sales Operational Market",
      "Technology Available Market, Service Available Market, Sales Available Market",
    ],
    answer: 0,
    rationale: "TAM (Total Addressable Market) 是总可达市场，SAM (Serviceable Available Market) 是可服务市场，SOM (Serviceable Obtainable Market) 是可获取市场。",
  },
  {
    id: "pm-q8",
    question: "关于产品路线图，以下哪个做法是推荐的？",
    options: [
      "承诺具体的发布日期给所有利益相关者",
      "只创建一个版本给所有受众",
      "定期回顾和调整，保持灵活性",
      "一旦确定就不应该修改",
    ],
    answer: 2,
    rationale: "好的产品路线图应该保持灵活性，定期回顾和调整以响应市场变化。不同受众需要不同版本的路线图，避免过度承诺具体日期。",
  },
  {
    id: "pm-q9",
    question: "在用户访谈中，以下哪种做法应该避免？",
    options: [
      "使用开放式问题",
      "询问用户过去的具体行为",
      "询问「你会不会用这个功能」这类假设性问题",
      "记录用户的原话",
    ],
    answer: 2,
    rationale: "用户对假设性问题的回答往往不可靠，因为他们无法准确预测自己的未来行为。好的访谈应该聚焦于用户过去的具体行为和经历。",
  },
  {
    id: "pm-q10",
    question: "A/B 测试的基本原则不包括以下哪项？",
    options: [
      "先有假设，再做测试",
      "一次测试多个变量以提高效率",
      "确保样本量足够达到统计显著性",
      "有明确的成功指标",
    ],
    answer: 1,
    rationale: "A/B 测试的基本原则是一次只测试一个变量（控制变量法），这样才能确定是哪个变化导致了结果差异。同时测试多个变量会导致无法归因。",
  },
  {
    id: "pm-q11",
    question: "OKR 中的 Key Result 应该具备什么特点？",
    options: [
      "定性的、模糊的、长期的",
      "定量的、可衡量的、有时限的",
      "只关注 Output（产出）",
      "由管理层单独制定，不与团队讨论",
    ],
    answer: 1,
    rationale: "Key Result 应该是定量的、可衡量的、有明确时限的，这样才能客观评估目标的达成情况。OKR 强调 Outcome（结果）而非 Output（产出）。",
  },
  {
    id: "pm-q12",
    question: "敏捷宣言中「可工作的软件 高于 详尽的文档」的正确理解是？",
    options: [
      "完全不需要文档",
      "文档比软件重要",
      "可工作的软件更有价值，但不是说文档没有价值",
      "只有软件团队需要遵循这个原则",
    ],
    answer: 2,
    rationale: "敏捷宣言强调的是相对价值，「高于」不代表后者没有价值。可工作的软件是最终交付物，文档是支持手段，两者都有价值，但前者优先级更高。",
  },
  {
    id: "pm-q13",
    question: "Kano 模型中的「兴奋型」需求是指？",
    options: [
      "用户明确要求的功能",
      "没有会不满，有了会非常惊喜的功能",
      "产品必须有的基本功能",
      "用户不需要的功能",
    ],
    answer: 1,
    rationale: "Kano 模型将需求分为基本型（必须有）、期望型（越多越好）、兴奋型（惊喜）三类。兴奋型需求是用户没有期望但有了会非常惊喜的功能。",
  },
  {
    id: "pm-q14",
    question: "关于灰度发布，以下哪个说法是正确的？",
    options: [
      "灰度发布就是直接全量发布",
      "灰度发布可以降低发布风险，先让部分用户使用新功能",
      "灰度发布只适用于移动应用",
      "灰度发布意味着功能不完整",
    ],
    answer: 1,
    rationale: "灰度发布是一种降低风险的发布策略，通过让部分用户先使用新功能，观察效果和问题后再逐步扩大范围，适用于各类软件产品。",
  },
  {
    id: "pm-q15",
    question: "波特五力模型不包括以下哪一项？",
    options: [
      "现有竞争者的竞争程度",
      "潜在进入者的威胁",
      "产品的用户体验",
      "买家的议价能力",
    ],
    answer: 2,
    rationale: "波特五力包括：现有竞争者的竞争程度、潜在进入者的威胁、替代品的威胁、供应商的议价能力、买家的议价能力。用户体验不在其中。",
  },
  {
    id: "pm-q16",
    question: "产品经理在与工程团队协作时，以下哪种做法更恰当？",
    options: [
      "强制要求工程师按照自己的估算完成任务",
      "尊重工程师的技术判断和工作量估算",
      "自己编写所有技术方案",
      "避免参与任何技术讨论",
    ],
    answer: 1,
    rationale: "产品经理应该尊重工程师的专业判断，包括工作量估算。PM 可以参与技术讨论但不应越俎代庖，强压进度会损害团队信任。",
  },
  {
    id: "pm-q17",
    question: "持续发现（Continuous Discovery）的核心理念是？",
    options: [
      "只在项目开始时做一次用户研究",
      "每周至少与用户交流，持续获取洞察",
      "完全依赖数据分析，不需要用户访谈",
      "等产品发布后再收集用户反馈",
    ],
    answer: 1,
    rationale: "Teresa Torres 的持续发现理念强调产品团队应该每周至少与用户有一次交流，将用户研究融入日常工作流程，而非一次性的研究活动。",
  },
  {
    id: "pm-q18",
    question: "商业模式画布（Business Model Canvas）的九大模块不包括以下哪项？",
    options: [
      "价值主张",
      "客户细分",
      "竞品分析",
      "收入来源",
    ],
    answer: 2,
    rationale: "商业模式画布的九大模块包括：客户细分、价值主张、渠道、客户关系、收入来源、核心资源、关键活动、关键合作、成本结构。竞品分析不是其中之一。",
  },
  {
    id: "pm-q19",
    question: "STAR 面试方法中的 A 代表什么？",
    options: [
      "Analysis（分析）",
      "Action（行动）",
      "Achievement（成就）",
      "Approach（方法）",
    ],
    answer: 1,
    rationale: "STAR 代表 Situation（情境）、Task（任务）、Action（行动）、Result（结果）。A 代表你采取的具体行动。",
  },
  {
    id: "pm-q20",
    question: "关于产品定位，以下哪个说法是正确的？",
    options: [
      "定位只需要描述产品功能",
      "定位应该包括目标用户、价值主张和竞争优势",
      "定位一旦确定就永远不变",
      "所有用户都是我们的目标用户",
    ],
    answer: 1,
    rationale: "产品定位需要明确三个要素：目标用户（为谁服务）、价值主张（提供什么价值）、竞争优势（为什么选择我们）。定位需要聚焦，不能试图服务所有人。",
  },
  {
    id: "pm-q21",
    question: "在 Scrum 中，Sprint 的典型长度是？",
    options: [
      "1 天",
      "1-4 周，通常为 2 周",
      "3 个月",
      "没有固定长度",
    ],
    answer: 1,
    rationale: "根据 Scrum Guide，Sprint 的长度通常为 1-4 周，最常见的是 2 周。Sprint 长度在项目期间应保持一致。",
  },
  {
    id: "pm-q22",
    question: "机会解决方案树（Opportunity Solution Tree）的核心作用是？",
    options: [
      "记录所有功能请求",
      "将期望的成果与机会和解决方案联系起来",
      "跟踪 Bug",
      "管理项目进度",
    ],
    answer: 1,
    rationale: "Teresa Torres 的机会解决方案树帮助产品团队从期望的成果出发，探索多个机会（用户需求/痛点），然后为每个机会想出多个可能的解决方案。",
  },
  {
    id: "pm-q23",
    question: "关于产品经理的影响力，以下哪个说法最准确？",
    options: [
      "产品经理通过职权来推动事情",
      "产品经理需要通过信任、数据和逻辑来建立影响力",
      "产品经理不需要影响力，只需要执行上级指令",
      "产品经理的影响力来自技术能力",
    ],
    answer: 1,
    rationale: "产品经理通常没有直接管理权，需要通过建立信任、用数据和逻辑说服、理解他人需求等方式来建立影响力，推动团队和组织达成目标。",
  },
  {
    id: "pm-q24",
    question: "Feature Flag（功能开关）的主要用途是？",
    options: [
      "只用于 Bug 修复",
      "控制功能的开放范围，支持灰度发布和快速回滚",
      "替代版本控制",
      "只在测试环境使用",
    ],
    answer: 1,
    rationale: "Feature Flag 允许团队在不重新部署的情况下控制功能的开放范围，支持灰度发布、A/B 测试和快速回滚，是现代产品发布的重要工具。",
  },
  {
    id: "pm-q25",
    question: "Daily Standup（每日站会）的主要目的是？",
    options: [
      "详细讨论技术方案",
      "同步进展、识别阻塞、促进协作",
      "给团队成员分配任务",
      "评估个人绩效",
    ],
    answer: 1,
    rationale: "Daily Standup 的目的是快速同步每个人的进展、识别阻塞问题、促进团队协作。它不是详细讨论的场合，通常限制在 15 分钟以内。",
  },
]

export const productManagerRoadmap: RoadmapDefinition = {
  id: "product-manager",
  label: "产品经理",
  title: "产品经理技能树",
  durationLabel: "12 周完整学习路线",
  description: "从产品基础到战略领导力，系统学习产品经理的核心技能。涵盖用户研究、需求管理、数据分析、敏捷执行、产品战略等关键领域，助你成为优秀的产品经理。",
  heroBadge: "12 周 · 48 主题",
  stages: productManagerStages,
  knowledgeCards: productManagerKnowledgeCards,
  examQuestions: productManagerExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "从产品经理基础开始，理解角色定位和核心能力框架。"
    if (percent < 25) return "继续学习用户研究和市场分析，建立用户同理心。"
    if (percent < 50) return "深入掌握需求管理和优先级排序，提升规划能力。"
    if (percent < 75) return "学习敏捷方法论和跨团队协作，提升执行力。"
    if (percent < 90) return "关注产品战略和领导力，为职业发展做准备。"
    return "恭喜完成产品经理技能树！持续实践并向优秀 PM 学习。"
  },
  resourceGuide: {
    environment: "准备产品管理工具（Jira/Linear/Notion）、原型工具（Figma）、数据分析工具（Amplitude/Mixpanel）。",
    fallbackKeyPoints: [
      "用户同理心是产品经理最核心的能力。",
      "数据驱动决策，但不要忽视定性洞察。",
      "产品经理是团队的「粘合剂」，而非「老板」。",
    ],
    handsOnSteps: [
      "本周进行一次用户访谈，记录关键洞察。",
      "用 RICE 模型对 Backlog 中的需求进行优先级排序。",
      "为一个功能写一份简洁的 PRD。",
    ],
    selfChecks: [
      "你能清晰地描述产品的北极星指标吗？",
      "你上次与真实用户交流是什么时候？",
      "团队是否清楚下个 Sprint 的目标和优先级？",
    ],
    extensions: [
      "深入学习 Teresa Torres 的《Continuous Discovery Habits》。",
      "阅读 Marty Cagan 的《Inspired》和《Empowered》。",
      "参与 Mind the Product 或本地产品社区的活动。",
    ],
    lessonQuizAdvice: "产品管理没有标准答案，选择最符合用户价值和业务目标的选项。",
  },
}
