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
            keyPoints: [
              "反模式是反复出现的、初看有效但长期有害的解决方案。",
              "三法则要求至少在三个独立场景中被观察到才能称为反模式。",
              "识别反模式的前提是了解对应的正向模式与替代方案。",
            ],
            resources: [
              { title: "Anti-pattern - Wikipedia", url: "https://en.wikipedia.org/wiki/Anti-pattern" },
              { title: "AntiPatterns Book - Wikipedia", url: "https://en.wikipedia.org/wiki/AntiPatterns" },
              { title: "Software Development AntiPatterns - SourceMaking", url: "https://sourcemaking.com/antipatterns/software-development-antipatterns" },
            ],
          },
          {
            id: "ap-1-2",
            title: "反模式形成机制与组织因素",
            detail: "分析时间压力、需求膨胀与治理缺位如何催生反模式。",
            keyPoints: [
              "时间压力是反模式最常见的催化剂，迫使团队选择短期方案。",
              "需求膨胀与范围蔓延会加速技术债的隐性积累。",
              "组织治理缺位导致技术决策缺乏一致性与长期视角。",
            ],
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
            keyPoints: [
              "面条代码的核心特征是控制流高度纠缠，难以追踪执行路径。",
              "拷贝粘贴编程会造成修改时的同步遗漏与逻辑分歧。",
              "提取方法与模板方法是治理重复逻辑的主要重构手段。",
            ],
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
            keyPoints: [
              "魔数隐藏了业务含义，增加代码理解与维护的认知成本。",
              "死代码与船锚占用注意力资源，降低代码库信噪比。",
              "定期清理未使用代码是保持代码库健康的基本纪律。",
            ],
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
            keyPoints: [
              "上帝对象违反单一职责原则，承载过多不相关逻辑。",
              "大泥球缺乏可辨识的内部结构，修改任何部分都可能引发连锁反应。",
              "提取类与划分限界上下文是拆解巨型对象的核心策略。",
            ],
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
            keyPoints: [
              "烟囱式系统导致功能重复建设与数据无法跨系统流通。",
              "康威定律表明组织沟通结构会直接映射到系统架构。",
              "建立平台团队与共享标准是打破孤岛的有效路径。",
            ],
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
            keyPoints: [
              "分布式单体保留了单体的耦合缺点，又增加了分布式的复杂度。",
              "共享数据库破坏服务自治，使独立部署变得不可能。",
              "每服务独立数据库模式是实现服务自治的基础。",
            ],
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
            keyPoints: [
              "过细的 API 颗粒度导致大量跨网络调用与延迟叠加。",
              "BFF 模式可以聚合后端调用，减少前端的网络往返。",
              "批量请求与本地缓存是降低服务间通信开销的关键手段。",
            ],
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
            keyPoints: [
              "AI 生成代码的表面正确性容易让开发者放松审查标准。",
              "必须对 AI 产出建立与人工代码同等严格的测试与审计流程。",
              "代码评审应特别关注 AI 生成代码中的安全漏洞与边界条件。",
            ],
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
            keyPoints: [
              "静态分析工具能自动识别常见代码异味与反模式信号。",
              "结构化评审清单确保代码审查覆盖关键质量维度。",
              "将反模式检测集成到 CI/CD 流水线可实现持续防御。",
            ],
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
  {
    id: "code-smells",
    title: "代码异味分类",
    summary: "识别与分类常见代码级反模式信号。",
    points: [
      "结构异味：面条代码、上帝方法、深层嵌套。",
      "冗余异味：拷贝粘贴、死代码、船锚代码。",
      "命名异味：魔数、含义模糊的变量与函数名。",
    ],
    practice: "对一个 500 行以上的文件进行代码异味审计，列出至少 5 项改进点。",
  },
  {
    id: "arch-decay",
    title: "架构腐化预防",
    summary: "识别架构退化的早期信号并建立防线。",
    points: [
      "依赖方向违规与循环依赖是架构腐化的首要信号。",
      "模块边界模糊导致变更影响范围不可控。",
      "定期架构适应度函数评估可量化腐化程度。",
    ],
    practice: "绘制项目模块依赖图，标记所有违反分层约束的依赖箭头。",
  },
  {
    id: "ai-risks",
    title: "AI 辅助开发风险",
    summary: "理解生成式 AI 在开发流程中引入的新型风险。",
    points: [
      "AI 生成代码可能包含隐蔽的安全漏洞与许可证冲突。",
      "过度依赖 AI 会削弱开发者的设计判断力与调试能力。",
      "缺乏溯源机制使 AI 产出的质量责任难以界定。",
    ],
    practice: "审查一段 AI 生成的代码，标注其中的安全风险与逻辑缺陷。",
  },
  {
    id: "refactoring",
    title: "重构策略与手段",
    summary: "掌握从局部到系统级的渐进式重构方法。",
    points: [
      "提取方法与提取类是消除代码级反模式的基础操作。",
      "绞杀者模式允许在不中断服务的前提下逐步替换遗留系统。",
      "重构必须配合充分的测试覆盖，避免引入回归缺陷。",
    ],
    practice: "选择一个上帝类，使用提取类手法将其拆分为 3 个职责清晰的模块。",
  },
  {
    id: "org-culture",
    title: "组织文化与反模式",
    summary: "理解组织文化如何催生或抑制反模式。",
    points: [
      "缺乏心理安全感的团队倾向于隐藏技术债而非暴露问题。",
      "英雄文化鼓励个人救火而非系统性预防。",
      "定期回顾与透明度机制是建立改进文化的基石。",
    ],
    practice: "设计一次团队回顾会议议程，专门聚焦反模式识别与改进承诺。",
  },
]

export const developmentAntiPatternsExamQuestions: QuizQuestion[] = [
  {
    id: "dap-q1",
    question: "反模式与一般坏习惯的核心区别是什么？",
    options: [
      "反模式只出现在大型项目中",
      "反模式具备重复性且存在经过验证的替代方案",
      "反模式是主观判断，无法客观识别",
      "反模式只涉及代码风格问题",
    ],
    answer: 1,
    rationale:
      "反模式的两个关键特征是：它是常见但有害的解决方式，并且存在经过验证的替代方案。三法则要求至少在三个独立案例中被观察到，才可被认定为反模式。",
  },
  {
    id: "dap-q2",
    question: "以下哪项不是反模式形成的常见诱因？",
    options: [
      "时间压力导致的技术捷径",
      "治理缺失与架构愿景缺位",
      "团队严格执行 Code Review 流程",
      "需求膨胀与复杂度失控",
    ],
    answer: 2,
    rationale:
      "严格执行 Code Review 是预防反模式的有效手段，而非诱因。时间压力、治理缺失和需求膨胀才是反模式形成的典型组织性因素。",
  },
  {
    id: "dap-q3",
    question: "面条代码（Spaghetti Code）的核心问题是什么？",
    options: [
      "代码行数过多",
      "控制流纠缠使得逻辑难以追踪和修改",
      "变量命名不够优雅",
      "缺乏代码注释",
    ],
    answer: 1,
    rationale:
      "面条代码的本质问题是控制流深度纠缠，goto、嵌套回调或过长方法导致执行路径难以追踪，维护成本随代码增长呈指数上升。",
  },
  {
    id: "dap-q4",
    question: "拷贝粘贴编程（Copy-Paste Programming）最严重的长期危害是什么？",
    options: [
      "增加代码行数导致编译变慢",
      "修复一个 Bug 需要在所有副本中同步修改，否则引入不一致",
      "降低代码的可读性",
      "增加版本控制冲突的概率",
    ],
    answer: 1,
    rationale:
      "拷贝粘贴导致逻辑散布在多个副本中，当需要修改时必须找到并同步更新所有副本，遗漏任何一个都会引入不一致的行为与潜在缺陷。",
  },
  {
    id: "dap-q5",
    question: "黄金锤（Golden Hammer）反模式指的是什么？",
    options: [
      "团队使用过多不同的技术栈",
      "对某一熟悉的技术或工具过度依赖，忽视更合适的方案",
      "过度投入性能优化导致功能延期",
      "频繁切换技术框架导致团队疲劳",
    ],
    answer: 1,
    rationale:
      "黄金锤源自「拿着锤子看什么都像钉子」，指团队或个人对某一技术方案形成路径依赖，在不适合的场景中也强行套用，导致解决方案与问题域不匹配。",
  },
  {
    id: "dap-q6",
    question: "上帝对象（God Object）反模式违反了哪个设计原则？",
    options: [
      "开闭原则",
      "里氏替换原则",
      "单一职责原则",
      "依赖倒置原则",
    ],
    answer: 2,
    rationale:
      "上帝对象将过多的职责集中在单个类中，严重违反单一职责原则。这导致类的修改原因过多，可测试性差，且对其任何改动都可能影响大量不相关的功能。",
  },
  {
    id: "dap-q7",
    question: "大泥球（Big Ball of Mud）架构的典型信号是什么？",
    options: [
      "系统使用了过多的设计模式",
      "模块边界模糊，任意组件可以直接访问其他组件的内部状态",
      "系统采用了微服务架构",
      "代码库有过多的抽象层级",
    ],
    answer: 1,
    rationale:
      "大泥球的核心特征是缺乏可辨识的架构结构——模块间边界模糊、耦合无序，任何变更都可能触发连锁反应。这通常是长期缺乏架构治理的结果。",
  },
  {
    id: "dap-q8",
    question: "烟囱式系统（Stovepipe System）与康威定律的关系是什么？",
    options: [
      "烟囱式系统证明了康威定律是错误的",
      "烟囱式系统是康威定律正面效应的体现",
      "组织孤岛导致系统各部分各自为政，体现了康威定律的负面效应",
      "烟囱式系统与组织结构无关",
    ],
    answer: 2,
    rationale:
      "康威定律指出系统设计会映射组织的沟通结构。当团队之间缺乏协作时，各自构建独立的技术栈和数据存储，形成烟囱式系统，这是康威定律负面效应的典型案例。",
  },
  {
    id: "dap-q9",
    question: "供应商锁定（Vendor Lock-In）的核心治理策略是什么？",
    options: [
      "始终选择最便宜的云服务商",
      "在关键接口层引入抽象与适配器，降低平台绑定",
      "完全避免使用任何云服务",
      "将所有服务迁移到开源替代方案",
    ],
    answer: 1,
    rationale:
      "治理供应商锁定的关键在于在关键集成点引入抽象层（如端口-适配器架构），使业务逻辑与特定平台实现解耦，从而保留未来迁移的灵活性而非完全拒绝云服务。",
  },
  {
    id: "dap-q10",
    question: "死亡进军（Death March）项目的根本特征是什么？",
    options: [
      "团队采用了敏捷开发方法",
      "项目参数（工期、人力、功能、质量）中至少有一项偏离合理值 50% 以上",
      "项目使用了过多的新技术",
      "项目缺乏文档记录",
    ],
    answer: 1,
    rationale:
      "Edward Yourdon 将死亡进军定义为项目的某个核心参数（工期、人力、功能范围或质量标准）偏离合理值超过 50%，团队在明知不可行的约束下被迫推进。",
  },
  {
    id: "dap-q11",
    question: "分析瘫痪（Analysis Paralysis）反模式的典型表现是什么？",
    options: [
      "团队快速交付但不做任何分析",
      "团队在需求分析阶段投入过量时间，迟迟无法进入实施",
      "团队只关注编码忽视测试",
      "团队频繁进行架构重构",
    ],
    answer: 1,
    rationale:
      "分析瘫痪表现为过度追求完美的前期分析，试图在设计阶段消除所有不确定性，导致项目陷入规划循环而无法产出可验证的成果。解药是 MVP 思维与迭代验证。",
  },
  {
    id: "dap-q12",
    question: "组织中「负面人格」反模式最有效的应对机制是什么？",
    options: [
      "立即解雇相关人员",
      "忽视问题让其自然消解",
      "建立心理安全环境与结构化冲突处理流程",
      "将负面影响者隔离在独立项目中",
    ],
    answer: 2,
    rationale:
      "建立心理安全环境让团队成员敢于表达不同意见，同时通过结构化冲突处理流程（如关键对话框架）将人际摩擦转化为建设性讨论，这比简单的人事操作更可持续。",
  },
  {
    id: "dap-q13",
    question: "分布式单体（Distributed Monolith）与真正微服务的关键区别是什么？",
    options: [
      "分布式单体使用了更多的服务器",
      "分布式单体中服务虽然物理分离，但部署和变更仍高度耦合",
      "分布式单体的代码量更大",
      "分布式单体不使用容器技术",
    ],
    answer: 1,
    rationale:
      "分布式单体看似拆分了服务，但由于共享数据库、同步耦合或协议绑定，一个服务的变更仍需要协调多个服务同步部署，失去了微服务独立部署和自治演进的核心优势。",
  },
  {
    id: "dap-q14",
    question: "喋喋不休的微服务（Chatty Microservices）应该如何治理？",
    options: [
      "回退到单体架构",
      "引入 API 聚合层（如 BFF 模式）并评估服务边界的粒度合理性",
      "增加更多网络带宽",
      "在每个服务之间都加入消息队列",
    ],
    answer: 1,
    rationale:
      "喋喋不休的根因通常是服务边界划分过细。通过引入 BFF 聚合层减少前端调用次数，同时重新评估服务边界是否符合业务领域划分，必要时合并过细的服务。",
  },
  {
    id: "dap-q15",
    question: "云原生环境中资源过度配置（Over-Provisioning）的治理关键是什么？",
    options: [
      "始终选择最小规格的实例",
      "完全关闭自动扩展功能",
      "建立基于可观测性数据的容量规划与成本监控体系",
      "仅在业务高峰期才部署服务",
    ],
    answer: 2,
    rationale:
      "资源过度配置的治理需要可观测性数据支撑——通过监控实际资源使用率建立容量模型，结合合理的自动扩展策略与成本警报机制，实现资源与需求的动态匹配。",
  },
  {
    id: "dap-q16",
    question: "AI 辅助开发中「默认正确」反模式的含义是什么？",
    options: [
      "AI 生成的代码总是最优解",
      "开发者不加审查地信任 AI 生成的代码，跳过测试与验证",
      "AI 模型的训练数据是完美的",
      "使用 AI 工具时不需要编写提示词",
    ],
    answer: 1,
    rationale:
      "默认正确反模式指开发者对 AI 生成的代码产生过度信任，认为其输出天然正确，从而跳过 Code Review、单元测试与安全审计等关键质量关卡，导致缺陷和漏洞被引入生产环境。",
  },
  {
    id: "dap-q17",
    question: "影子 AI（Shadow AI）在企业中带来的最大风险是什么？",
    options: [
      "增加了云计算成本",
      "降低了开发效率",
      "未经审批使用 AI 工具导致数据泄漏与知识产权风险",
      "AI 生成的代码风格不一致",
    ],
    answer: 2,
    rationale:
      "影子 AI 指员工绕过组织审批自行使用外部 AI 服务，最大的风险在于敏感数据（源代码、业务逻辑、客户信息）可能被传输到不受控的第三方平台，引发数据泄漏与合规违规。",
  },
  {
    id: "dap-q18",
    question: "间接提示词注入（Indirect Prompt Injection）如何扩大供应链攻击面？",
    options: [
      "通过修改 AI 模型权重实现攻击",
      "攻击者在外部数据源中嵌入恶意指令，AI 在处理上下文时执行这些指令",
      "通过暴力破解 AI 的 API 密钥",
      "直接修改 AI 的训练数据集",
    ],
    answer: 1,
    rationale:
      "间接提示词注入不需要直接与 AI 交互——攻击者将恶意指令嵌入文档、网页或依赖包中，当 AI 助手读取这些上下文时，可能执行未授权操作，形成新的供应链攻击向量。",
  },
  {
    id: "dap-q19",
    question: "以下哪种重构策略最适合治理大泥球架构？",
    options: [
      "一次性全面重写整个系统",
      "采用绞杀者模式（Strangler Fig）渐进式替换旧模块",
      "增加更多自动化测试但不改变架构",
      "冻结所有新功能开发直到重构完成",
    ],
    answer: 1,
    rationale:
      "绞杀者模式通过在旧系统外围逐步构建新模块，渐进式地截获和替换旧功能，避免大爆炸式重写的高风险，是治理大泥球最务实的策略。",
  },
  {
    id: "dap-q20",
    question: "反模式治理中，工具、流程与文化三者的关系是什么？",
    options: [
      "只要工具足够好就不需要流程和文化建设",
      "三者需要协同——工具提供检测能力，流程保证执行一致性，文化驱动持续改进",
      "文化最重要，工具和流程可以忽略",
      "流程可以完全替代工具和文化的作用",
    ],
    answer: 1,
    rationale:
      "反模式治理是系统工程：静态分析与可观测性工具提供检测能力，Code Review 与 TDD 等流程保障执行一致性，而持续改进与风险透明的文化确保治理动作能够长期落地，三者缺一不可。",
  },
]

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
