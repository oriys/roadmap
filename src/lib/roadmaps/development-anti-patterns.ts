import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const developmentAntiPatternsStages: Stage[] = [
  {
    id: "foundation",
    title: "第一阶段：反模式理论与代码级腐化",
    duration: "第 1-2 周",
    goal: "理解反模式的定义、形成机制与典型代码级陷阱",
    weeks: [
      {
        id: "w1",
        title: "第 1 周：反模式起源与识别框架",
        summary: "理解反模式概念、三法则与风险信号。",
        overview:
          "反模式不是简单的坏习惯，而是重复出现且短期看似有效、长期高风险的结构性选择。本周聚焦反模式的理论框架、历史脉络与识别方法。",
        keyPoints: [
          "反模式的两个关键特征：常见但有害的解决方式、存在经过验证的替代方案。",
          "三法则（Rule of Three）：至少在三个独立案例中被观察到。",
          "反模式常见诱因：时间压力、治理缺失、复杂度失控。",
        ],
        lessons: [
          {
            id: "ap-1-1",
            title: "反模式的定义与三法则",
            detail: "建立反模式识别的基本概念，区分反模式与一般坏习惯。",
            resources: [
              { title: "AntiPatterns.com - Definition", url: "https://antipatterns.com/" },
              { title: "Refactoring Guru - Anti-Patterns", url: "https://refactoring.guru/design-patterns/anti-patterns" },
              { title: "IEEE Software: AntiPatterns (Overview)", url: "https://www.computer.org/csdl/magazine/so" },
            ],
          },
          {
            id: "ap-1-2",
            title: "反模式形成机制与组织因素",
            detail: "分析时间压力、需求膨胀与治理缺位如何催生反模式。",
            resources: [
              { title: "Martin Fowler - Technical Debt", url: "https://martinfowler.com/bliki/TechnicalDebt.html" },
              { title: "Software Design Smells", url: "https://martinfowler.com/bliki/CodeSmell.html" },
              { title: "Conway's Law", url: "https://martinfowler.com/bliki/ConwaysLaw.html" },
            ],
          },
        ],
      },
      {
        id: "w2",
        title: "第 2 周：代码级反模式",
        summary: "聚焦面条代码、拷贝粘贴、魔数与死代码等常见代码异味。",
        overview:
          "代码级反模式通常表现为结构混乱、重复与隐藏复杂度。通过识别代码异味并建立重构意识，避免腐化扩大。",
        keyPoints: [
          "面条代码与拷贝粘贴编程会放大维护成本。",
          "魔数、死代码与船锚会增加认知负担与风险。",
          "过早优化与黄金锤导致不必要的复杂度。",
        ],
        lessons: [
          {
            id: "ap-2-1",
            title: "面条代码与拷贝粘贴编程",
            detail: "识别控制流纠缠、重复逻辑的危害与治理方向。",
            resources: [
              { title: "Refactoring - Extract Method", url: "https://refactoring.com/catalog/extractMethod.html" },
              { title: "Martin Fowler - Refactoring", url: "https://martinfowler.com/books/refactoring.html" },
              { title: "Code Smells - Duplicated Code", url: "https://refactoring.guru/refactoring/smells/duplicate-code" },
            ],
          },
          {
            id: "ap-2-2",
            title: "魔数、死代码与船锚",
            detail: "理解隐式常量与遗留冗余如何造成不可控风险。",
            resources: [
              { title: "Clean Code - Meaningful Names", url: "https://learning.oreilly.com/library/view/clean-code/9780136083238/" },
              { title: "Refactoring - Dead Code", url: "https://martinfowler.com/bliki/DeadCode.html" },
              { title: "Code Smells - Speculative Generality", url: "https://refactoring.guru/refactoring/smells/speculative-generality" },
            ],
          },
          {
            id: "ap-2-3",
            title: "过早优化与黄金锤",
            detail: "识别过度优化与工具偏执带来的结构性损耗。",
            resources: [
              { title: "Donald Knuth - Premature Optimization", url: "https://stackify.com/premature-optimization-evil/" },
              { title: "You Aren't Gonna Need It (YAGNI)", url: "https://martinfowler.com/bliki/Yagni.html" },
              { title: "The Law of the Instrument", url: "https://effectiviology.com/law-of-the-instrument/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "architecture",
    title: "第二阶段：架构与组织层面的反模式",
    duration: "第 3-4 周",
    goal: "理解架构级反模式与组织/项目管理失效的共振机制",
    weeks: [
      {
        id: "w3",
        title: "第 3 周：架构反模式",
        summary: "分析上帝对象、大泥球、烟囱式系统与供应商锁定。",
        overview:
          "架构反模式往往源于长期规划缺失或治理失效，导致模块化能力丧失与演进停滞。",
        keyPoints: [
          "上帝对象与大泥球是模块化与可测试性的终结。",
          "烟囱式系统体现了组织孤岛与康威定律的负面效应。",
          "供应商锁定与过度工程会放大长期迁移成本。",
        ],
        lessons: [
          {
            id: "ap-3-1",
            title: "上帝对象与大泥球",
            detail: "识别职责过载与结构坍塌的信号，建立拆分策略。",
            resources: [
              { title: "Single Responsibility Principle", url: "https://martinfowler.com/bliki/SingleResponsibilityPrinciple.html" },
              { title: "Big Ball of Mud", url: "http://www.laputan.org/mud/" },
              { title: "Refactoring - Extract Class", url: "https://refactoring.com/catalog/extractClass.html" },
            ],
          },
          {
            id: "ap-3-2",
            title: "烟囱式系统与组织孤岛",
            detail: "理解组织结构如何塑造架构，以及如何建立跨团队标准。",
            resources: [
              { title: "Conway's Law", url: "https://martinfowler.com/bliki/ConwaysLaw.html" },
              { title: "Team Topologies", url: "https://teamtopologies.com/" },
              { title: "Platform as a Product", url: "https://martinfowler.com/articles/what-is-a-platform.html" },
            ],
          },
          {
            id: "ap-3-3",
            title: "供应商锁定与过度工程",
            detail: "评估平台绑定与内部平台效应带来的长期成本。",
            resources: [
              { title: "AWS Well-Architected - Vendor Lock-In", url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/" },
              { title: "Inner Platform Effect", url: "https://www.laputan.org/mud/" },
              { title: "Avoiding Over-Engineering", url: "https://martinfowler.com/bliki/Overengineering.html" },
            ],
          },
        ],
      },
      {
        id: "w4",
        title: "第 4 周：项目管理与组织文化反模式",
        summary: "关注死亡进军、分析瘫痪、幻灯片工程等组织级问题。",
        overview:
          "管理与文化反模式会放大技术债的积累速度，破坏团队协作与工程卓越。",
        keyPoints: [
          "死亡进军与规划致死体现了不切实际的交付压力。",
          "分析瘫痪与幻灯片工程让产出停留在表象。",
          "负面人格与组织冲突会阻碍跨团队协作。",
        ],
        lessons: [
          {
            id: "ap-4-1",
            title: "死亡进军与规划致死",
            detail: "识别不合理进度与资源约束，建立预警机制。",
            resources: [
              { title: "Death March - Wikipedia", url: "https://en.wikipedia.org/wiki/Death_march_(project_management)" },
              { title: "Agile Retrospectives", url: "https://www.mountaingoatsoftware.com/agile/scrum/meetings/sprint-retrospective" },
              { title: "Project Management Triangle", url: "https://en.wikipedia.org/wiki/Project_management_triangle" },
            ],
          },
          {
            id: "ap-4-2",
            title: "分析瘫痪与幻灯片工程",
            detail: "理解过度规划与文档主义的风险，强调可验证产出。",
            resources: [
              { title: "Lean UX", url: "https://www.oreilly.com/library/view/lean-ux-2nd/9781491953594/" },
              { title: "MVP - Minimum Viable Product", url: "https://www.productplan.com/glossary/minimum-viable-product/" },
              { title: "Make Work Visible", url: "https://www.atlassian.com/agile/kanban" },
            ],
          },
          {
            id: "ap-4-3",
            title: "组织冲突与负面人格",
            detail: "识别团队协作的阻塞因子，建立冲突处理机制。",
            resources: [
              { title: "Crucial Conversations", url: "https://cruciallearning.com/crucial-conversations-book/" },
              { title: "Psychological Safety", url: "https://rework.withgoogle.com/guides/understanding-team-effectiveness/steps/psychological-safety/" },
              { title: "Managing Difficult People", url: "https://hbr.org/2000/09/managing-your-difficult-people" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "modern",
    title: "第三阶段：分布式与 AI 时代反模式治理",
    duration: "第 5-6 周",
    goal: "掌握云原生与 AI 辅助开发时代的新型反模式与治理策略",
    weeks: [
      {
        id: "w5",
        title: "第 5 周：分布式与云原生反模式",
        summary: "理解分布式单体、喋喋不休服务与资源浪费。",
        overview:
          "分布式系统把复杂度放大，边界设计与可观测性不足会让反模式更难治理。",
        keyPoints: [
          "分布式单体与共享数据库破坏服务自治。",
          "喋喋不休的服务增加网络延迟与故障传播。",
          "资源过度配置与自动扩展误用会放大成本。",
        ],
        lessons: [
          {
            id: "ap-5-1",
            title: "分布式单体与共享数据库",
            detail: "识别服务边界失衡与数据耦合带来的部署风险。",
            resources: [
              { title: "Microservices Adoption Antipatterns", url: "https://microservices.io/microservices/antipatterns/-/the/series/2019/06/18/microservices-adoption-antipatterns.html" },
              { title: "Monolith to Microservices", url: "https://martinfowler.com/books/monolith-to-microservices.html" },
              { title: "Database per Service", url: "https://microservices.io/patterns/data/database-per-service.html" },
            ],
          },
          {
            id: "ap-5-2",
            title: "喋喋不休的微服务",
            detail: "评估 API 颗粒度与通信开销，建立聚合与缓存策略。",
            resources: [
              { title: "gRPC vs REST Considerations", url: "https://grpc.io/docs/what-is-grpc/introduction/" },
              { title: "Designing Data-Intensive Applications", url: "https://dataintensive.net/" },
              { title: "BFF Pattern", url: "https://samnewman.io/patterns/architectural/bff/" },
            ],
          },
          {
            id: "ap-5-3",
            title: "资源过度配置与可观测性缺失",
            detail: "建立容量规划与可观测性体系，避免云成本失控。",
            resources: [
              { title: "Google SRE Workbook", url: "https://sre.google/workbook/table-of-contents/" },
              { title: "OpenTelemetry", url: "https://opentelemetry.io/" },
              { title: "Capacity Planning", url: "https://aws.amazon.com/builders-library/" },
            ],
          },
        ],
      },
      {
        id: "w6",
        title: "第 6 周：AI 辅助开发反模式与治理",
        summary: "分析默认正确、影子 AI 与提示词注入风险。",
        overview:
          "生成式 AI 既是效率放大器，也是风险放大器。需要建立验证、审计与安全边界。",
        keyPoints: [
          "默认正确反模式会导致审计与测试缺失。",
          "影子 AI 引发知识产权与数据泄露风险。",
          "间接提示词注入扩大供应链攻击面。",
        ],
        lessons: [
          {
            id: "ap-6-1",
            title: "信任悖论与验证缺失",
            detail: "建立 AI 生成代码的审计与测试闭环。",
            resources: [
              { title: "OWASP Code Review Guide", url: "https://owasp.org/www-project-code-review-guide/" },
              { title: "Secure Coding Guidelines", url: "https://cheatsheetseries.owasp.org/" },
              { title: "AI Engineering Playbook", url: "https://cloud.google.com/architecture/ai-ml" },
            ],
          },
          {
            id: "ap-6-2",
            title: "影子 AI 与数据泄漏",
            detail: "制定合规策略与数据脱敏流程，防止泄露。",
            resources: [
              { title: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
              { title: "ISO/IEC 27001", url: "https://www.iso.org/isoiec-27001-information-security.html" },
              { title: "Data Loss Prevention Basics", url: "https://learn.microsoft.com/en-us/microsoft-365/compliance/data-loss-prevention-policies" },
            ],
          },
          {
            id: "ap-6-3",
            title: "提示词注入与供应链风险",
            detail: "识别上下文污染风险，建立依赖审查与白名单机制。",
            resources: [
              { title: "Prompt Injection - OWASP", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
              { title: "Supply Chain Security", url: "https://slsa.dev/" },
              { title: "Dependency Review", url: "https://docs.github.com/en/code-security/supply-chain-security" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "governance",
    title: "第四阶段：检测、预防与重构路径",
    duration: "第 7 周",
    goal: "建立反模式治理体系与持续改进机制",
    weeks: [
      {
        id: "w7",
        title: "第 7 周：系统化治理",
        summary: "结合静态分析、代码评审与重构方法建立防御体系。",
        overview:
          "反模式治理需要工具、流程与文化协同：从自动检测到重构落地，再到组织层面的持续改进。",
        keyPoints: [
          "使用静态分析与可观测性监测反模式信号。",
          "建立结构化 Code Review 与 TDD 机制。",
          "用提取类、移动方法等重构手段消除腐化。",
        ],
        lessons: [
          {
            id: "ap-7-1",
            title: "检测与预防机制",
            detail: "建立代码异味检测、评审清单与工程实践闭环。",
            resources: [
              { title: "SonarQube", url: "https://www.sonarsource.com/products/sonarqube/" },
              { title: "ESLint", url: "https://eslint.org/" },
              { title: "Google Engineering Practices", url: "https://google.github.io/eng-practices/" },
            ],
          },
          {
            id: "ap-7-2",
            title: "重构路径与治理节奏",
            detail: "制定渐进式重构计划，避免大爆炸式重构风险。",
            resources: [
              { title: "Refactoring Catalog", url: "https://refactoring.com/catalog/" },
              { title: "Strangler Fig Pattern", url: "https://martinfowler.com/bliki/StranglerFigApplication.html" },
              { title: "Technical Debt Quadrant", url: "https://martinfowler.com/bliki/TechnicalDebtQuadrant.html" },
            ],
          },
        ],
      },
    ],
  },
]

export const developmentAntiPatternsKnowledgeCards: KnowledgeCard[] = [
  {
    id: "signals",
    title: "反模式识别信号",
    summary: "从代码、架构与组织三个维度识别早期风险。",
    points: [
      "代码维度：重复、超长方法、隐式常量与死代码。",
      "架构维度：模块耦合失控、共享数据库与治理缺失。",
      "组织维度：不可行计划、沟通失序、技术决策失衡。",
    ],
    practice: "挑选你负责的一个模块，列出 3 个潜在反模式信号并给出治理建议。",
  },
  {
    id: "root-causes",
    title: "反模式根因",
    summary: "理解反模式形成的系统性原因。",
    points: [
      "短期压力与长期资产的冲突。",
      "架构治理与技术愿景缺位。",
      "团队协作与组织结构的摩擦。",
    ],
    practice: "回顾最近一次重大返工，定位其中的组织与技术根因。",
  },
  {
    id: "governance",
    title: "治理策略",
    summary: "建立检测、预防与重构的闭环。",
    points: [
      "工具：静态扫描与可观测性平台。",
      "流程：结构化 Code Review + TDD。",
      "文化：持续改进与风险透明。",
    ],
    practice: "为团队设计一份反模式治理清单（含检测项与行动项）。",
  },
]

export const developmentAntiPatternsExamQuestions: QuizQuestion[] = []

export const developmentAntiPatternsRoadmap: RoadmapDefinition = {
  id: "development-anti-patterns",
  label: "开发反模式",
  title: "软件架构与工程实践中的反模式研究报告：从代码腐化到组织失效的系统性审视",
  durationLabel: "约 7 周",
  description:
    "系统化梳理软件开发反模式的理论起源、代码级腐化、架构失效、组织文化问题，以及云原生与 AI 时代的新型风险，建立识别与治理的工程化路径。",
  heroBadge: "反模式治理",
  stages: developmentAntiPatternsStages,
  knowledgeCards: developmentAntiPatternsKnowledgeCards,
  examQuestions: developmentAntiPatternsExamQuestions,
  suggestion: (percent: number) => {
    if (percent < 25) return "建议先掌握反模式定义与代码级异味识别，再进入架构层问题"
    if (percent < 50) return "继续深入架构与组织反模式，建立系统性视角"
    if (percent < 75) return "开始关注分布式与 AI 时代反模式，并建立治理框架"
    return "完成全链路治理，尝试在实际项目中落地反模式审计"
  },
  resourceGuide: {
    environment: "准备一个包含历史技术债的项目案例，并整理历史 PR 与事故记录。",
    fallbackKeyPoints: [
      "反模式具备长期危害性，往往源于短期有效的权衡。",
      "反模式治理需要工具、流程、文化协同。",
      "识别信号优先于全面重构，避免一次性大爆炸改造。",
    ],
    handsOnSteps: [
      "选取一个模块，进行代码异味扫描并列出 5 项风险。",
      "绘制模块依赖图，找出耦合度过高的节点。",
      "制定 2-4 周的渐进式重构计划，明确验收标准。",
    ],
    selfChecks: [
      "能否说明一个反模式的形成机制与替代方案？",
      "能否描述一个组织结构如何导致架构失衡？",
      "能否提出云原生反模式的治理动作？",
    ],
    extensions: [
      "建立团队级反模式词汇表与案例库。",
      "定期开展架构健康度回顾与技术债评审。",
    ],
    lessonQuizAdvice: "重点关注反模式的定义、根因与治理动作的可操作性。",
  },
}
