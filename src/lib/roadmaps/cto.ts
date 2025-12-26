import type { KnowledgeCard, QuizQuestion, RoadmapDefinition, Stage } from "../types"

export const ctoStages: Stage[] = [
  {
    id: "cto-foundation",
    title: "阶段一：角色转型与战略同频",
    duration: "第 1-2 周",
    goal: "完成从技术负责人到业务战略伙伴的转型，建立与 CEO/业务负责人同频的沟通机制。",
    weeks: [
      {
        id: "cto-w1",
        title: "第 1 周：角色定位与信息链路",
        summary: "明确 CTO 在公司阶段中的价值定位，搭建向上、向下和横向的沟通链路。",
        lessons: [
          {
            id: "cto-w1-1",
            title: "CTO 角色画像",
            detail: "区分工程 VP、架构负责人与 CTO 的职责差异，结合公司阶段明确首要目标。",
            keyPoints: [
              "早期：聚焦产品落地与交付速度；成长期：扩大团队、稳交付；成熟期：治理成本与效率。",
              "CTO 需要兼顾技术决策、组织能力与商业影响力。",
              "主动设定 90 天目标，与 CEO 对齐成功定义。",
            ],
            resources: [
              { title: "CTO Handbook", url: "https://cto.so/handbook" },
              { title: "StaffEng: Staff to CTO", url: "https://staffeng.com/guides/cto" },
            ],
          },
          {
            id: "cto-w1-2",
            title: "信息流与决策节奏",
            detail: "设计经营例会、技术例会与 1:1 节奏，确保战略、产品、技术信息闭环。",
            resources: [
              { title: "Leadership Cadence", url: "https://leaddev.com/leadership-skills/leading-through-cadence" },
              { title: "Andy Grove: High Output Management", url: "https://www.goodreads.com/book/show/324750.High_Output_Management" },
            ],
          },
        ],
      },
      {
        id: "cto-w2",
        title: "第 2 周：战略对齐与技术愿景",
        summary: "将业务目标拆解为技术愿景与关键路径，用可沟通的语言呈现。",
        lessons: [
          {
            id: "cto-w2-1",
            title: "业务战略解码",
            detail: "理解公司商业模型、增长引擎和关键约束，将战略目标映射为技术需求。",
            resources: [
              { title: "Strategy Mapping", url: "https://hbr.org/2000/09/having-trouble-with-your-strategy-then-map-it" },
              { title: "Product North Star", url: "https://amplitude.com/blog/north-star-metric" },
            ],
          },
          {
            id: "cto-w2-2",
            title: "技术愿景画布",
            detail: "用 1-3 年技术愿景描述平台化、可靠性、数据能力与 AI 等关键支撑。",
            resources: [
              { title: "Platform Strategy", url: "https://martinfowler.com/articles/products-over-projects.html" },
              { title: "Tech Vision Narrative", url: "https://leaddev.com/technical-strategy/how-write-technical-strategy" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cto-execution",
    title: "阶段二：工程效能与架构治理",
    duration: "第 3-4 周",
    goal: "提升交付可预测性与质量，建立可持续的架构与平台治理机制。",
    weeks: [
      {
        id: "cto-w3",
        title: "第 3 周：效能与交付",
        summary: "用数据衡量团队效能，平衡速度与质量，构建交付防线。",
        lessons: [
          {
            id: "cto-w3-1",
            title: "效能度量与瓶颈识别",
            detail: "结合 DORA 指标、Lead Time、变更失败率等数据定位瓶颈，推动改进。",
            resources: [
              { title: "DORA DevOps Research", url: "https://dora.dev/research/" },
              { title: "Accelerate", url: "https://itrevolution.com/accelerate-book/" },
            ],
          },
          {
            id: "cto-w3-2",
            title: "交付防线与质量体系",
            detail: "建立发布准入、灰度、回滚和事后复盘，形成工程质量基线。",
            resources: [
              { title: "Change Management", url: "https://sre.google/sre-book/monitoring-distributed-systems/" },
              { title: "Postmortem Culture", url: "https://sre.google/sre-book/postmortem-culture/" },
            ],
          },
        ],
      },
      {
        id: "cto-w4",
        title: "第 4 周：架构与平台治理",
        summary: "审视架构演进与平台化投资，兼顾成本、可靠性与业务敏捷。",
        lessons: [
          {
            id: "cto-w4-1",
            title: "架构演进决策",
            detail: "通过 ADR、成本模型与风险评估评估微服务、数据/事件架构等演进路径。",
            resources: [
              { title: "Architecture Decision Records", url: "https://adr.github.io/" },
              { title: "Microservices Patterns", url: "https://microservices.io/" },
            ],
          },
          {
            id: "cto-w4-2",
            title: "平台化与复用",
            detail: "识别通用能力（身份、支付、消息、数据）进行平台化，建立平台团队运营模式。",
            resources: [
              { title: "Platform Teams", url: "https://teamtopologies.com/" },
              { title: "Internal Developer Platform", url: "https://internaldeveloperplatform.org/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cto-organization",
    title: "阶段三：组织、人才与风险",
    duration: "第 5-6 周",
    goal: "打造高协作的组织结构，建立人才梯队与治理风险的机制。",
    weeks: [
      {
        id: "cto-w5",
        title: "第 5 周：组织设计与协作",
        summary: "根据业务流拆分组织单元，提升跨团队协作效率并减少依赖阻塞。",
        lessons: [
          {
            id: "cto-w5-1",
            title: "组织拓扑与职责边界",
            detail: "结合 Team Topologies 与 RACI 设计团队职责、接口与沟通模式。",
            resources: [
              { title: "Team Topologies", url: "https://teamtopologies.com/key-concepts" },
              { title: "RACI 模型", url: "https://www.atlassian.com/team-playbook/plays/roles-and-responsibilities" },
            ],
          },
          {
            id: "cto-w5-2",
            title: "跨团队协作与治理",
            detail: "推行工作协议、技术评审委员会和轻量治理，平衡一致性与自治。",
            resources: [
              { title: "Engineering Governance", url: "https://martinfowler.com/articles/engineering-practices.html" },
              { title: "Technical RFCs", url: "https://graphql.org/rfcs/" },
            ],
          },
        ],
      },
      {
        id: "cto-w6",
        title: "第 6 周：人才梯队与风险预案",
        summary: "构建招聘、成长与继任计划，同时建立关键风险的预警与预案。",
        lessons: [
          {
            id: "cto-w6-1",
            title: "人才策略与继任计划",
            detail: "设计招聘画像、职级体系与继任计划，确保关键岗位的可持续性。",
            resources: [
              { title: "Career Ladders", url: "https://www.levels.fyi/company" },
              { title: "Succession Planning", url: "https://hbr.org/2016/12/why-leaders-dont-produce-leaders" },
            ],
          },
          {
            id: "cto-w6-2",
            title: "风险管理与合规",
            detail: "建立安全、合规、隐私和业务连续性风险的识别、演练与响应机制。",
            resources: [
              { title: "OWASP SAMM", url: "https://owaspsamm.org/model/" },
              { title: "BCP/DR Guide", url: "https://www.nist.gov/publications/guide-test-plan-train-and-exercise-information-system-contingency-plan" },
            ],
          },
        ],
      },
    ],
  },
]

export const ctoKnowledgeCards: KnowledgeCard[] = [
  {
    id: "cto-card-90day",
    title: "前 90 天对齐",
    summary: "通过 90 天目标对齐确保 CTO 与 CEO/业务目标一致。",
    points: [
      "确定 3-5 个可衡量的成功指标（收入、留存、效率）。",
      "明确技术债、产品机会与团队健康度的优先级。",
      "建立周会/经营例会节奏，持续复盘进度。",
    ],
    practice: "撰写 90 天技术战略备忘录，包含目标、关键结果、风险与依赖人。",
  },
  {
    id: "cto-card-architecture",
    title: "架构治理",
    summary: "用轻量治理机制避免架构漂移并保持演进速度。",
    points: [
      "建立 ADR 与技术 RFC 流程，确保决策可追溯。",
      "关键领域设立守门人（安全、数据、可靠性）。",
      "每季度回顾平台化投资与 ROI。",
    ],
    practice: "创建 ADR 模板并在一次重大改造中试点，收集决策记录与复盘。",
  },
  {
    id: "cto-card-org",
    title: "组织与协作",
    summary: "以业务流为中心设计团队，减少依赖与交接。",
    points: [
      "按产品线或价值流拆分，弱化职能型孤岛。",
      "为协作建立工作协议与明确接口人。",
      "定期检查跨团队阻塞并通过升级通道解决。",
    ],
    practice: "绘制现有组织的价值流图，识别等待与返工点并提出 3 个改进行动。",
  },
  {
    id: "cto-card-risk",
    title: "风险与连续性",
    summary: "提前预案关键风险，让业务与团队有韧性。",
    points: [
      "识别单点风险（人员、系统、供应商）并制定替代方案。",
      "按季度演练灾备与安全响应。",
      "在路线图中预留容量处理风险治理与债务。",
    ],
    practice: "列出前 5 大技术风险，制定预警指标与演练计划。",
  },
]

export const ctoExamQuestions: QuizQuestion[] = [
  {
    id: "cto-q1",
    question: "早期创业公司 CTO 最优先关注的目标通常是？",
    options: ["降低基础设施成本", "完善绩效体系", "让产品快速落地并验证市场", "推行全面微服务化"],
    answer: 2,
    rationale: "早期阶段首要任务是快速验证产品与市场匹配，保证交付速度。",
  },
  {
    id: "cto-q2",
    question: "为了让技术决策可追溯、可复盘，最佳做法是？",
    options: ["全部口头沟通", "使用 ADR 记录决策背景与取舍", "只在代码里加注释", "每次开长会讨论"],
    answer: 1,
    rationale: "ADR 能结构化记录决策背景、选项与结果，便于后续复盘。",
  },
  {
    id: "cto-q3",
    question: "衡量工程效能并定位瓶颈时，哪组指标更合适？",
    options: ["CPU 利用率、磁盘空间", "DORA 指标如 Lead Time 与变更失败率", "日常代码提交次数", "文档页数"],
    answer: 1,
    rationale: "DORA 指标从交付速度与质量角度衡量效能，能定位流程瓶颈。",
  },
  {
    id: "cto-q4",
    question: "组织设计中最能减少跨团队阻塞的做法是？",
    options: ["按职能拆分前端/后端/测试", "围绕价值流或产品线组建端到端团队", "所有人加入同一个群组", "增加审批层级"],
    answer: 1,
    rationale: "按价值流组建端到端团队能减少交接依赖，提升交付速度。",
  },
  {
    id: "cto-q5",
    question: "规划平台化投资时，首先要验证的是？",
    options: ["团队对新技术的兴趣", "平台能力的复用率与 ROI", "是否能换更炫的框架", "现有服务数量"],
    answer: 1,
    rationale: "平台化应服务复用率与 ROI，确保投入对业务有实质回报。",
  },
  {
    id: "cto-q6",
    question: "建立可靠的发布体系的关键环节是？",
    options: ["只在下班后上线", "上线前不做任何验证", "灰度/回滚预案与事后复盘", "完全禁止自动化"],
    answer: 2,
    rationale: "灰度、回滚预案与复盘能降低变更风险并持续改进。",
  },
  {
    id: "cto-q7",
    question: "继任计划的核心目的是？",
    options: ["压缩薪资成本", "减少培训投入", "确保关键岗位有人接替并降低单点风险", "缩减团队规模"],
    answer: 2,
    rationale: "继任计划关注关键岗位的可持续性，降低因单点人员离职带来的风险。",
  },
  {
    id: "cto-q8",
    question: "在风险治理中，哪项做法能直接提升韧性？",
    options: ["延迟复盘", "季度演练灾备和安全响应", "仅依赖监控告警", "放弃合规要求"],
    answer: 1,
    rationale: "定期演练能验证预案有效性，提升团队面对突发事件的韧性。",
  },
]

export const ctoRoadmap: RoadmapDefinition = {
  id: "cto",
  label: "CTO 进阶",
  title: "CTO 进阶路线",
  durationLabel: "12 个主题",
  description: "面向创业到成长阶段的 CTO，聚焦战略同频、工程效能、架构治理与组织建设，帮助建立技术与业务双轮驱动的能力体系。",
  heroBadge: "战略对齐 · 效能提升 · 架构治理 · 组织韧性",
  stages: ctoStages,
  knowledgeCards: ctoKnowledgeCards,
  examQuestions: ctoExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开启 CTO 进阶之旅，先明确角色与 90 天目标。"
    if (percent < 25) return "保持与业务同频，输出清晰的技术愿景画布。"
    if (percent < 50) return "用效能指标和发布防线提升交付可信度。"
    if (percent < 75) return "完善架构治理与平台化投资，兼顾 ROI 与敏捷。"
    if (percent < 100) return "建设组织协作与继任计划，降低关键风险。"
    return "恭喜完成！持续复盘战略、技术与组织韧性，带领团队向上成长。"
  },
  resourceGuide: {
    environment: "用真实业务的数据流或沙箱环境演练，配合文档化的决策与指标看板。",
    fallbackKeyPoints: [
      "每季度更新技术愿景与路线图，对齐业务目标",
      "DORA/成本/质量指标联动看板，驱动改进",
      "ADR/RFC 保证架构决策可追溯且可复盘",
      "平台化投资以复用率和 ROI 为第一原则",
      "继任计划与风险演练按季度复核",
    ],
    handsOnSteps: [
      "撰写 90 天技术目标并与 CEO 对齐成功标准",
      "搭建效能看板（Lead Time、变更失败率等）并选择 1 个瓶颈优化",
      "选取一项重大架构决策，使用 ADR 完成记录并评审",
      "评估一项平台化机会，给出 ROI 计算与阶段性里程碑",
      "为关键岗位（如平台负责人、SRE）制定继任与演练计划",
    ],
    selfChecks: [
      "是否能用业务语言解释技术路线对收入/成本/风险的影响？",
      "交付和质量指标是否透明并被定期复盘？",
      "架构决策是否有记录、评审与回滚策略？",
      "平台化项目是否有可量化的复用率与 ROI 目标？",
      "是否存在关键人员或系统的单点风险并已演练预案？",
    ],
    extensions: [
      "引入数据治理与 AI 赋能的中长期规划",
      "探索 FinOps/成本优化与绿色可持续目标",
      "建设内外部技术品牌，支持招聘与生态合作",
      "尝试 OKR/北极星指标驱动的跨团队对齐机制",
    ],
    lessonQuizAdvice: "每周用测验校验理解度，结合经营数据和复盘纪要检查落地效果。",
  },
}
