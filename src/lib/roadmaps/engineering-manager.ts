import type { KnowledgeCard, QuizQuestion, RoadmapDefinition, Stage } from "../types"

export const engineeringManagerStages: Stage[] = [
  {
    id: "em-transition",
    title: "阶段一：角色转型与团队运营",
    duration: "第 1-2 周",
    goal: "从高级工程师转向管理者，建立团队运转节奏与可预测性。",
    weeks: [
      {
        id: "em-w1",
        title: "第 1 周：角色定位与日常节奏",
        summary: "明确工程经理的角色边界，搭建节奏和信息流。",
        lessons: [
          {
            id: "em-w1-1",
            title: "从个体贡献到团队赋能",
            detail: "识别“自己写代码”与“让别人成功”之间的差异，调整时间分配。",
            keyPoints: [
              "将产出从代码行数转向团队健康度与交付结果。",
              "安排 1:1、周会、状态同步，保持信息透明。",
              "用 Delegation Poker/梯子模型评估授权级别。",
            ],
            resources: [
              { title: "roadmap.sh: Engineering Manager", url: "https://roadmap.sh/engineering-manager" },
              { title: "Will Larson: 管理之路", url: "https://blog.pragmaticengineer.com/the-managers-path/" },
              { title: "Delegation Poker", url: "https://management30.com/practice/delegation-poker/" },
            ],
          },
          {
            id: "em-w1-2",
            title: "团队节奏与仪式",
            detail: "设计适合团队的例会、同步与反馈机制，避免会议疲劳。",
            resources: [
              { title: "roadmap.sh: Scrum Master", url: "https://roadmap.sh/scrum-master" },
              { title: "Atlassian: Team Rituals", url: "https://www.atlassian.com/team-playbook/plays" },
              { title: "DORA Four Keys", url: "https://dora.dev/" },
            ],
          },
        ],
      },
      {
        id: "em-w2",
        title: "第 2 周：执行可预测性",
        summary: "通过节奏和看板让团队交付更可预期。",
        lessons: [
          {
            id: "em-w2-1",
            title: "规划与优先级管理",
            detail: "结合业务目标拆解里程碑，使用 RICE/Impact vs Effort 排序。",
            resources: [
              { title: "roadmap.sh: Project Manager", url: "https://roadmap.sh/project-manager" },
              { title: "RICE 模型", url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" },
              { title: "Impact/Effort Matrix", url: "https://www.atlassian.com/blog/productivity/impact-effort-matrix" },
            ],
          },
          {
            id: "em-w2-2",
            title: "看板与状态透明",
            detail: "建立 WIP 限制与状态栏定义，让风险提前暴露。",
            resources: [
              { title: "Kanban 指南", url: "https://kanbanize.com/kanban-resources/getting-started/what-is-kanban" },
              { title: "roadmap.sh: Agile", url: "https://roadmap.sh/agile" },
              { title: "Definition of Done/Ready", url: "https://www.scrum.org/resources/what-definition-done" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "em-execution",
    title: "阶段二：交付、质量与风险",
    duration: "第 3-4 周",
    goal: "提升交付节奏、质量与风险治理，减少返工。",
    weeks: [
      {
        id: "em-w3",
        title: "第 3 周：交付节奏与承诺",
        summary: "构建迭代节奏，管理承诺与依赖。",
        lessons: [
          {
            id: "em-w3-1",
            title: "迭代计划与容量评估",
            detail: "用历史速度、容量规划与缓冲管理承诺，避免过度承诺。",
            resources: [
              { title: "Sprint Planning Guide", url: "https://www.scrum.org/resources/sprint-planning" },
              { title: "Monte Carlo Forecasting", url: "https://www.agilevelocity.com/blog/monte-carlo-simulation-forecasting/" },
              { title: "roadmap.sh: Software Architect", url: "https://roadmap.sh/software-architect" },
            ],
          },
          {
            id: "em-w3-2",
            title: "依赖与阻塞管理",
            detail: "识别跨团队依赖，设置阻塞清单与升级路径。",
            resources: [
              { title: "RAID Log 模板", url: "https://www.productplan.com/glossary/raid-log/" },
              { title: "Cross-team Risks", url: "https://leaddev.com/technical-leadership/managing-cross-team-dependencies" },
              { title: "roadmap.sh: Engineering Manager", url: "https://roadmap.sh/engineering-manager" },
            ],
          },
        ],
      },
      {
        id: "em-w4",
        title: "第 4 周：质量与事故管理",
        summary: "建立质量基线，规范事故响应与复盘。",
        lessons: [
          {
            id: "em-w4-1",
            title: "质量度量与左移",
            detail: "使用质量门、预发布验证和指标（缺陷率、变更失败率）衡量健康度。",
            resources: [
              { title: "DORA 指标", url: "https://dora.dev/research/" },
              { title: "Quality Gates", url: "https://docs.sonarsource.com/sonarqube/latest/user-guide/quality-gates/" },
              { title: "Shift-left Testing", url: "https://martinfowler.com/articles/shift-left-testing.html" },
            ],
          },
          {
            id: "em-w4-2",
            title: "事故响应与复盘",
            detail: "建立 on-call、分级响应与无责复盘机制，形成行动项闭环。",
            resources: [
              { title: "PagerDuty Incident Response", url: "https://response.pagerduty.com/" },
              { title: "无责复盘", url: "https://codeascraft.com/2012/05/22/blameless-postmortems/" },
              { title: "roadmap.sh: SRE", url: "https://roadmap.sh/sre" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "em-people",
    title: "阶段三：人才梯队与成长",
    duration: "第 5-6 周",
    goal: "打造高绩效团队：招聘、成长、反馈与绩效管理。",
    weeks: [
      {
        id: "em-w5",
        title: "第 5 周：招聘与入职",
        summary: "建立结构化招聘与入职流程，确保候选人与团队匹配度。",
        lessons: [
          {
            id: "em-w5-1",
            title: "结构化面试与评估标准",
            detail: "设计岗位画像、问题库与评分量表，降低偏见。",
            resources: [
              { title: "Structured Interviewing", url: "https://www.indeed.com/hire/c/info/structured-interviewing" },
              { title: "Hiring Scorecards", url: "https://www.harvardbusiness.org/scorecard-hiring/" },
              { title: "roadmap.sh: Engineering Manager", url: "https://roadmap.sh/engineering-manager" },
            ],
          },
          {
            id: "em-w5-2",
            title: "入职与前 90 天",
            detail: "制定入职清单与 buddy 制度，让新人快速融入并交付价值。",
            resources: [
              { title: "Onboarding Checklist", url: "https://about.gitlab.com/handbook/people-group/onboarding/" },
              { title: "First 90 Days", url: "https://www.michaelwatkins.com/" },
              { title: "roadmap.sh: HR", url: "https://roadmap.sh/hr" },
            ],
          },
        ],
      },
      {
        id: "em-w6",
        title: "第 6 周：反馈、绩效与成长",
        summary: "用持续反馈与绩效框架驱动成长，避免年度惊喜。",
        lessons: [
          {
            id: "em-w6-1",
            title: "有效反馈与对齐",
            detail: "使用 SBI/STAR 提供具体、及时、可行动的反馈，并对齐期望。",
            resources: [
              { title: "SBI 模型", url: "https://www.ccl.org/articles/leading-effectively-articles/closing-performance-gaps-situation-behavior-impact/" },
              { title: "Radical Candor", url: "https://www.radicalcandor.com/" },
              { title: "Manager Tools Feedback", url: "https://www.manager-tools.com/map-feedback" },
            ],
          },
          {
            id: "em-w6-2",
            title: "绩效与成长计划",
            detail: "结合 OKR/Competency Matrix 设定成长路径，及时处理绩效风险。",
            resources: [
              { title: "Career Ladder 示例", url: "https://www.levels.fyi/company/" },
              { title: "Performance Management", url: "https://hbr.org/2017/10/the-performance-management-revolution" },
              { title: "OKR 指南", url: "https://www.whatmatters.com/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "em-strategy",
    title: "阶段四：战略对齐与跨团队协作",
    duration: "第 7-8 周",
    goal: "将团队目标与业务战略对齐，提升跨团队影响力。",
    weeks: [
      {
        id: "em-w7",
        title: "第 7 周：战略对齐与指标",
        summary: "用指标连接战略与执行，持续复盘与校准。",
        lessons: [
          {
            id: "em-w7-1",
            title: "北极星指标与健康度仪表盘",
            detail: "设计与业务相关的北极星指标，并追踪工程健康度指标。",
            resources: [
              { title: "North Star Metric", url: "https://amplitude.com/north-star" },
              { title: "Engineering Metrics", url: "https://leaddev.com/engineering-metrics" },
              { title: "roadmap.sh: Data Analyst", url: "https://roadmap.sh/data-analyst" },
            ],
          },
          {
            id: "em-w7-2",
            title: "季度规划与复盘",
            detail: "主持 QBR/OKR 复盘，确保目标、资源与风险闭环。",
            resources: [
              { title: "QBR 模板", url: "https://www.productplan.com/glossary/qbr-quarterly-business-review/" },
              { title: "OKR 复盘", url: "https://rework.withgoogle.com/guides/set-goals-with-okrs/steps/intro-to-okrs/" },
              { title: "roadmap.sh: Product Manager", url: "https://roadmap.sh/product-manager" },
            ],
          },
        ],
      },
      {
        id: "em-w8",
        title: "第 8 周：跨团队协作与影响力",
        summary: "建立联盟、沟通框架与变更管理，放大影响力。",
        lessons: [
          {
            id: "em-w8-1",
            title: "利益相关者管理",
            detail: "绘制利益相关者地图，选择告知、咨询、共创的参与模式。",
            resources: [
              { title: "RACI 模型", url: "https://www.atlassian.com/team-playbook/plays/roles-and-responsibilities" },
              { title: "Stakeholder Mapping", url: "https://www.mindtools.com/akqsmd5/stakeholder-analysis" },
              { title: "roadmap.sh: Business Analyst", url: "https://roadmap.sh/business-analyst" },
            ],
          },
          {
            id: "em-w8-2",
            title: "变更管理与沟通",
            detail: "用 ADKAR/5W2H 规划变更沟通，降低阻力并收集反馈。",
            resources: [
              { title: "ADKAR 模型", url: "https://www.prosci.com/methodology/adkar" },
              { title: "5W2H 模板", url: "https://asana.com/resources/5w2h" },
              { title: "roadmap.sh: Engineering Manager", url: "https://roadmap.sh/engineering-manager" },
            ],
          },
        ],
      },
    ],
  },
]

export const engineeringManagerKnowledgeCards: KnowledgeCard[] = [
  {
    id: "em-k1",
    title: "优先级判断三问",
    summary: "对齐目标、识别阻力、确认成功标准。",
    points: [
      "目标：这件事与季度/年度目标的关联是什么？",
      "约束：当前的技术债、依赖和资源约束有哪些？",
      "成功：可观察的成功标准是什么，何时验证？",
    ],
    practice: "用三问法评估本周新增的需求或技术改进，输出决策记录。",
  },
  {
    id: "em-k2",
    title: "1:1 问题清单",
    summary: "让 1:1 覆盖现状、成长与健康度。",
    points: [
      "你现在最担心/最有成就感的事情是什么？",
      "有哪些阻碍你交付或成长的因素？",
      "我可以提供哪些支持或清除哪些障碍？",
    ],
    practice: "选择一位团队成员，使用清单结构化开展一次 1:1，并记录 follow-up。",
  },
  {
    id: "em-k3",
    title: "事故无责复盘骨架",
    summary: "事实、影响、根因、行动、守护栏。",
    points: [
      "时间线：事件发生、发现、缓解与恢复的关键节点。",
      "根因：系统性原因（技术/流程/人）而非个体指责。",
      "守护栏：新增的监控、自动化或流程约束。",
    ],
    practice: "挑选一次事故或线上告警，按骨架输出复盘文档并分享。",
  },
  {
    id: "em-k4",
    title: "成长计划 Canvas",
    summary: "角色期望、优势短板、行动与里程碑。",
    points: [
      "角色期望：对应职级/岗位说明书的行为与结果。",
      "优势短板：用具体案例佐证。",
      "行动与里程碑：8 周内的可观察改进与支持资源。",
    ],
    practice: "为一位团队成员共创 8 周成长计划，设置每两周的回顾点。",
  },
]

export const engineeringManagerExamQuestions: QuizQuestion[] = [
  {
    id: "em-q1",
    question: "工程经理在周计划中最需要优先确保的是什么？",
    options: [
      "个人编码时间达到 50%",
      "团队信息透明、风险可见、承诺可交付",
      "所有会议都由自己主持",
      "为每个任务写详细设计文档",
    ],
    answer: 1,
    rationale: "工程经理要确保团队承诺可靠、风险提前暴露，信息透明支撑决策。",
  },
  {
    id: "em-q2",
    question: "在估算迭代容量时，以下做法更合适的是？",
    options: [
      "假设团队可以 100% 利用容量",
      "以历史速度、假期与不可预期缓冲为依据",
      "仅由经理拍脑袋给出数字",
      "忽略跨团队依赖的影响",
    ],
    answer: 1,
    rationale: "用数据驱动估算并预留缓冲，避免过度承诺。",
  },
  {
    id: "em-q3",
    question: "关于无责复盘，正确的理解是？",
    options: [
      "复盘的目的是找出责任人并记录处罚",
      "只有严重事故才需要复盘",
      "关注系统性改进与守护栏，而非个人指责",
      "复盘可以跳过行动项，节省时间",
    ],
    answer: 2,
    rationale: "无责复盘强调系统改进与守护栏，减少未来重复事故。",
  },
  {
    id: "em-q4",
    question: "设计团队指标时，下列哪项更符合工程经理的关注点？",
    options: [
      "只跟踪代码行数增长",
      "结合业务指标与工程健康度，如 DORA 四指标",
      "只看服务器成本",
      "只看提交次数",
    ],
    answer: 1,
    rationale: "工程经理需要连接业务成果与工程效率/质量指标，常见实践是 DORA 指标。",
  },
  {
    id: "em-q5",
    question: "处理绩效风险的正确姿势是？",
    options: [
      "等年终评审时一次性告知",
      "尽早给出具体反馈与改进期望，并跟进行动",
      "直接减少任务分配，让问题自然消失",
      "私下向同事抱怨其表现",
    ],
    answer: 1,
    rationale: "及时、具体、可行动的反馈配合辅导计划，才能公平且有效地改善绩效。",
  },
  {
    id: "em-q6",
    question: "在跨团队协作中，建立影响力的有效方式是？",
    options: [
      "提前绘制利益相关者地图并定期同步进展",
      "等出现阻力再沟通",
      "只在自己团队内部通告",
      "拒绝调整方案，保持强硬",
    ],
    answer: 0,
    rationale: "识别并持续经营利益相关者，主动沟通能降低阻力并获得资源。",
  },
  {
    id: "em-q7",
    question: "授权时遇到关键风险的任务，应如何处理？",
    options: [
      "完全放手让新人独立承担，不做跟进",
      "根据风险等级选择辅导/陪跑/定期检查的授权级别",
      "全部自己完成，避免风险",
      "交给任何有空的人，不考虑能力匹配",
    ],
    answer: 1,
    rationale: "授权需要考虑风险与能力匹配，通过分级辅导确保成功且建立成长。",
  },
  {
    id: "em-q8",
    question: "在季度规划复盘（QBR/OKR Review）时，最重要的输出是？",
    options: [
      "列出所有完成的任务清单",
      "确认目标达成度、关键阻碍、资源/范围的调整决策",
      "分享团队建设合照",
      "重新写一次产品愿景",
    ],
    answer: 1,
    rationale: "复盘需要对齐目标达成情况、识别阻碍并决定资源和范围的调整。",
  },
  {
    id: "em-q9",
    question: "新人入职的前 90 天，工程经理最应关注？",
    options: [
      "让新人马上独立值班",
      "确保有清晰的入职清单、导师/伙伴支持与早期可见成果",
      "只分配文档阅读任务",
      "尽量安排全部会议让新人熟悉",
    ],
    answer: 1,
    rationale: "结构化入职、伙伴支持和早期成功案例能帮助新人快速融入并建立信心。",
  },
  {
    id: "em-q10",
    question: "当团队出现会议过多、效率低的情况，工程经理应该？",
    options: [
      "继续增加会议确保覆盖所有问题",
      "审视会议目的，合并/删除低价值会议，引入异步沟通",
      "禁止所有会议，只用邮件",
      "让团队自行决定，不做引导",
    ],
    answer: 1,
    rationale: "明确会议目的与产出，减少低价值同步并增加异步沟通可以提升效率。",
  },
]

export const engineeringManagerRoadmap: RoadmapDefinition = {
  id: "engineering-manager",
  label: "工程经理",
  title: "工程经理成长路线",
  durationLabel: "32 个主题",
  description: "面向首次走上管理岗位的工程师，涵盖角色转型、交付治理、人才梯队与跨团队协作，帮助你在 8 周内建立工程管理的核心基线。",
  heroBadge: "团队倍增",
  stages: engineeringManagerStages,
  knowledgeCards: engineeringManagerKnowledgeCards,
  examQuestions: engineeringManagerExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "先完成角色定位与团队节奏，确保信息流和会节奏到位。"
    if (percent < 30) return "在规划与优先级上投入时间，确保团队承诺可交付。"
    if (percent < 50) return "关注交付质量与事故复盘，建立守护栏减少返工。"
    if (percent < 70) return "落地招聘、入职与反馈机制，为团队成长打底。"
    if (percent < 90) return "将团队目标与业务指标对齐，提升跨团队影响力。"
    return "恭喜完成核心路线，继续通过辅导与策略项目提升杠杆！"
  },
  resourceGuide: {
    environment: "准备团队看板/项目管理工具（Jira/Linear/Notion），建立 1:1 模板与周报模版。",
    fallbackKeyPoints: [
      "角色转型：让别人成功是你的首要产出。",
      "节奏与透明：固定的同步节奏和可视化看板。",
      "成长与反馈：持续反馈与成长计划而非年度惊喜。",
    ],
    handsOnSteps: [
      "本周搭建团队看板并定义 DoR/DoD。",
      "安排并执行至少 3 场结构化 1:1。",
      "为当前项目输出风险/依赖清单并对外同步。",
    ],
    selfChecks: [
      "团队的本周/本迭代承诺是否清晰且可交付？",
      "风险与依赖是否在看板或同步中可见并有人负责？",
      "每位成员是否有明确的成长焦点与下个行动？",
    ],
    extensions: [
      "尝试 Monte Carlo 预测或 Throughput 数据驱动规划。",
      "设计团队的 Career Ladder，明确行为期望。",
      "主持一次跨团队的季度复盘或对齐会。",
    ],
    lessonQuizAdvice: "管理题没有唯一答案，优先选择让信息透明、风险可见、能复制的机制。",
  },
}
