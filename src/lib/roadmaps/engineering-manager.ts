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
        overview: "本周帮助你完成从个体贡献者到团队管理者的心态转变，建立日常管理节奏与信息同步机制。",
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
            keyPoints: [
              "区分同步与异步沟通场景，减少不必要的会议。",
              "为每个例会设定目的、议程与产出，避免流水账。",
              "定期回顾仪式有效性，迭代优化团队节奏。",
            ],
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
        overview: "聚焦团队交付的可预测性，学习优先级排序方法与看板实践，让承诺更可靠。",
        lessons: [
          {
            id: "em-w2-1",
            title: "规划与优先级管理",
            detail: "结合业务目标拆解里程碑，使用 RICE/Impact vs Effort 排序。",
            keyPoints: [
              "用 RICE 或 Impact/Effort 矩阵量化需求优先级。",
              "将业务目标拆解为可衡量的里程碑与交付物。",
              "每周复盘优先级变化，确保团队聚焦最高价值工作。",
            ],
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
            keyPoints: [
              "定义清晰的列状态与 WIP 限制，防止多任务切换。",
              "通过每日站会与看板走查让阻塞即时可见。",
              "用累积流图或周期时间识别流程瓶颈。",
            ],
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
        overview: "深入迭代计划与容量管理，识别跨团队依赖并建立阻塞清除机制。",
        lessons: [
          {
            id: "em-w3-1",
            title: "迭代计划与容量评估",
            detail: "用历史速度、容量规划与缓冲管理承诺，避免过度承诺。",
            keyPoints: [
              "用历史吞吐量而非拍脑袋估算迭代容量。",
              "为不可预期事务预留 15-20% 的容量缓冲。",
              "在计划会上对齐范围、风险与团队承诺。",
            ],
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
            keyPoints: [
              "建立 RAID 日志跟踪风险、假设、问题与依赖。",
              "为每个跨团队依赖指定责任人与升级路径。",
              "定期同步依赖状态，提前识别阻塞并触发行动。",
            ],
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
        overview: "建立质量防线与事故响应体系，通过无责复盘持续改进系统韧性。",
        lessons: [
          {
            id: "em-w4-1",
            title: "质量度量与左移",
            detail: "使用质量门、预发布验证和指标（缺陷率、变更失败率）衡量健康度。",
            keyPoints: [
              "将测试与代码审查左移到开发早期阶段。",
              "用变更失败率与缺陷逃逸率衡量质量健康度。",
              "设置质量门控，确保代码在合并前满足基线标准。",
            ],
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
            keyPoints: [
              "建立分级 on-call 制度与清晰的升级流程。",
              "复盘聚焦系统性根因与守护栏，而非个人指责。",
              "每次复盘输出可追踪的行动项并定期回顾完成度。",
            ],
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
        overview: "掌握结构化招聘与入职流程设计，确保团队持续补充高匹配度人才。",
        lessons: [
          {
            id: "em-w5-1",
            title: "结构化面试与评估标准",
            detail: "设计岗位画像、问题库与评分量表，降低偏见。",
            keyPoints: [
              "定义岗位画像与核心能力维度，统一评估标准。",
              "设计行为面试问题库，用 STAR 结构评估候选人。",
              "引入评分量表与多人校准，降低个人偏见影响。",
            ],
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
            keyPoints: [
              "制定分阶段入职清单，覆盖工具、流程与文化。",
              "指定 buddy/导师，帮助新人快速建立人际网络。",
              "设置 30/60/90 天里程碑，让新人尽早交付可见成果。",
            ],
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
        overview: "构建持续反馈文化与绩效管理框架，让团队成员在清晰期望中成长。",
        lessons: [
          {
            id: "em-w6-1",
            title: "有效反馈与对齐",
            detail: "使用 SBI/STAR 提供具体、及时、可行动的反馈，并对齐期望。",
            keyPoints: [
              "用 SBI 模型（情境-行为-影响）提供具体反馈。",
              "反馈要及时，缩短行为与反馈之间的时间差。",
              "定期对齐期望，确保双方对目标与标准理解一致。",
            ],
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
            keyPoints: [
              "结合 Competency Matrix 明确各层级行为期望。",
              "与成员共创个人成长计划，设置可观察的里程碑。",
              "对绩效风险及早干预，提供辅导或 PIP 计划。",
            ],
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
        overview: "学习用北极星指标与健康度仪表盘连接战略与执行，通过季度复盘保持方向校准。",
        lessons: [
          {
            id: "em-w7-1",
            title: "北极星指标与健康度仪表盘",
            detail: "设计与业务相关的北极星指标，并追踪工程健康度指标。",
            keyPoints: [
              "选择与业务成果直接挂钩的北极星指标。",
              "搭建工程健康度仪表盘，覆盖 DORA 四指标。",
              "定期回顾指标趋势，用数据驱动决策与改进。",
            ],
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
            keyPoints: [
              "QBR 聚焦目标达成度、关键阻碍与资源调整。",
              "用 OKR 复盘区分目标设定质量与执行质量。",
              "将复盘行动项落入下季度计划，形成闭环。",
            ],
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
        overview: "提升跨团队影响力，掌握利益相关者管理与变更沟通的系统方法。",
        lessons: [
          {
            id: "em-w8-1",
            title: "利益相关者管理",
            detail: "绘制利益相关者地图，选择告知、咨询、共创的参与模式。",
            keyPoints: [
              "绘制利益相关者地图，识别影响力与利益维度。",
              "根据利益相关者类型选择告知、咨询或共创模式。",
              "定期同步进展与变化，维护信任与支持关系。",
            ],
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
            keyPoints: [
              "用 ADKAR 模型规划变更的认知、意愿与能力建设。",
              "通过 5W2H 框架确保沟通覆盖关键信息点。",
              "收集变更反馈并迭代调整，降低组织阻力。",
            ],
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
  {
    id: "em-k5",
    title: "跨团队沟通模板",
    summary: "结构化跨团队协作的沟通内容与频率。",
    points: [
      "背景：变更/需求的业务目标与影响范围。",
      "依赖：需要对方团队提供的接口、时间线与交付物。",
      "同步机制：约定沟通频率、升级路径与决策流程。",
    ],
    practice: "选择一个跨团队依赖项，使用模板发起对齐会议并输出协作协议。",
  },
  {
    id: "em-k6",
    title: "季度规划检查清单",
    summary: "确保季度规划覆盖目标、资源与风险。",
    points: [
      "目标回顾：上季度 OKR 达成度与未完成项分析。",
      "资源评估：团队容量、招聘计划与技术债预算。",
      "风险预判：已知依赖、技术风险与组织变化影响。",
    ],
    practice: "用检查清单主持一次模拟季度规划会，输出下季度 OKR 草案。",
  },
  {
    id: "em-k7",
    title: "面试评分校准",
    summary: "统一面试评分标准，降低评估偏差。",
    points: [
      "评分维度：技术能力、问题解决、协作沟通与文化匹配。",
      "锚定标准：为每个维度定义 1-5 分的行为锚点。",
      "校准会议：面试后集体讨论评分差异，达成一致结论。",
    ],
    practice: "设计一份包含 4 个维度的面试评分表，并与团队进行一次校准练习。",
  },
  {
    id: "em-k8",
    title: "变更沟通计划",
    summary: "系统规划变更沟通，降低阻力与不确定性。",
    points: [
      "受众分析：识别受影响的利益相关者及其关注点。",
      "沟通节奏：变更前预告、执行中同步、完成后复盘。",
      "反馈渠道：设置收集反馈的机制并承诺响应时间。",
    ],
    practice: "为一个即将推行的流程变更制定沟通计划，包含时间线与受众策略。",
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
  {
    id: "em-q11",
    question: "使用 Delegation Poker 的主要目的是？",
    options: [
      "让经理独揽所有决策权",
      "通过可视化讨论对齐授权级别与预期",
      "随机分配任务给团队成员",
      "完全取消经理的审批权限",
    ],
    answer: 1,
    rationale: "Delegation Poker 帮助团队与经理在具体情境中对齐授权级别，实现渐进式放权。",
  },
  {
    id: "em-q12",
    question: "看板中设置 WIP 限制的核心目的是？",
    options: [
      "减少团队工作量让大家轻松",
      "限制并行任务数，减少上下文切换，提高流动效率",
      "禁止团队成员同时处理多个项目",
      "让看板上的卡片数量看起来更整齐",
    ],
    answer: 1,
    rationale: "WIP 限制能减少多任务切换带来的效率损失，让问题更快暴露并被解决。",
  },
  {
    id: "em-q13",
    question: "DORA 四指标中，哪一项衡量的是变更的稳定性？",
    options: [
      "部署频率",
      "变更前置时间",
      "变更失败率",
      "平均恢复时间",
    ],
    answer: 2,
    rationale: "变更失败率衡量发布后需要修复的比例，反映变更的稳定性与质量。",
  },
  {
    id: "em-q14",
    question: "SBI 反馈模型中的三个要素是？",
    options: [
      "策略（Strategy）、预算（Budget）、影响（Impact）",
      "情境（Situation）、行为（Behavior）、影响（Impact）",
      "标准（Standard）、基线（Baseline）、改进（Improvement）",
      "范围（Scope）、边界（Boundary）、检查（Inspection）",
    ],
    answer: 1,
    rationale: "SBI 模型通过描述具体情境、可观察行为和产生的影响来提供结构化反馈。",
  },
  {
    id: "em-q15",
    question: "新人入职的 buddy 制度最主要的作用是？",
    options: [
      "监督新人的工作进度",
      "替代经理承担所有入职工作",
      "帮助新人快速融入团队文化并建立人际网络",
      "负责新人的绩效考核",
    ],
    answer: 2,
    rationale: "Buddy 提供非正式的文化引导与社交支持，帮助新人更快融入团队环境。",
  },
  {
    id: "em-q16",
    question: "RICE 优先级模型中的四个维度是？",
    options: [
      "风险（Risk）、影响（Impact）、成本（Cost）、效率（Efficiency）",
      "覆盖面（Reach）、影响力（Impact）、信心（Confidence）、努力（Effort）",
      "资源（Resource）、集成（Integration）、协作（Collaboration）、执行（Execution）",
      "回报（Return）、投入（Investment）、能力（Capability）、经验（Experience）",
    ],
    answer: 1,
    rationale: "RICE 通过 Reach、Impact、Confidence、Effort 四维度量化优先级排序。",
  },
  {
    id: "em-q17",
    question: "关于北极星指标，以下说法正确的是？",
    options: [
      "每个团队应该同时追踪 10 个以上的北极星指标",
      "北极星指标应与核心业务价值直接关联，数量精简",
      "北极星指标只需要设定一次，无需更新",
      "北极星指标应该只关注技术指标，不涉及业务",
    ],
    answer: 1,
    rationale: "北极星指标应精简且与业务核心价值挂钩，帮助团队聚焦最重要的方向。",
  },
  {
    id: "em-q18",
    question: "ADKAR 变更管理模型的五个阶段依次是？",
    options: [
      "分析、设计、开发、实施、评估",
      "认知、意愿、知识、能力、强化",
      "评估、决策、沟通、执行、回顾",
      "计划、组织、领导、控制、改进",
    ],
    answer: 1,
    rationale: "ADKAR 代表 Awareness、Desire、Knowledge、Ability、Reinforcement 五个变更阶段。",
  },
  {
    id: "em-q19",
    question: "设计 Career Ladder（职级体系）时最重要的原则是？",
    options: [
      "尽量模糊，留出灵活解释空间",
      "只按工作年限划分层级",
      "用可观察的行为与成果定义各层级期望",
      "只关注技术能力，忽略软技能",
    ],
    answer: 2,
    rationale: "清晰的行为与成果标准让晋升透明可预期，减少主观偏差。",
  },
  {
    id: "em-q20",
    question: "RACI 模型中「A」（Accountable）的含义是？",
    options: [
      "实际执行任务的人",
      "对最终结果负责、有决策权的唯一负责人",
      "需要被告知进展的人",
      "提供意见但不做决策的人",
    ],
    answer: 1,
    rationale: "Accountable 是对结果最终负责的人，每个任务只能有一个 A，确保权责清晰。",
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
