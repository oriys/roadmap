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
        overview: "CTO 不只是最资深的工程师，更是技术与业务之间的翻译者和放大器。本周聚焦角色画像与信息链路设计，帮助你在上任或转型初期快速建立节奏感与可见度。",
        keyPoints: [
          "区分 CTO 与 VP Engineering、首席架构师的职责边界",
          "建立向上（CEO/Board）、向下（团队）和横向（产品/销售）的沟通链路",
          "用 90 天目标框架锚定短期交付与长期愿景的平衡",
        ],
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
            keyPoints: [
              "设计周/双周/月/季四层节奏，避免信息真空或会议过载。",
              "1:1 关注人的状态与阻塞，经营例会关注业务指标与风险。",
              "用异步文档（周报/决策日志）补充同步会议，提升透明度。",
            ],
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
        overview: "CTO 需要将模糊的商业目标翻译成可执行的技术路线图。本周重点是学会解码业务战略并输出技术愿景画布，让技术投资与业务增长形成闭环。",
        keyPoints: [
          "用商业模型画布理解增长引擎与关键约束",
          "将战略目标映射为技术需求与优先级排序",
          "用 1-3 年技术愿景画布统一团队方向",
        ],
        lessons: [
          {
            id: "cto-w2-1",
            title: "业务战略解码",
            detail: "理解公司商业模型、增长引擎和关键约束，将战略目标映射为技术需求。",
            keyPoints: [
              "用 BMC（商业模型画布）理清收入来源、核心资源与关键伙伴。",
              "识别增长飞轮中技术杠杆最高的环节。",
              "将业务北极星指标拆解为可量化的技术目标。",
            ],
            resources: [
              { title: "Strategy Mapping", url: "https://hbr.org/2000/09/having-trouble-with-your-strategy-then-map-it" },
              { title: "Product North Star", url: "https://amplitude.com/blog/north-star-metric" },
            ],
          },
          {
            id: "cto-w2-2",
            title: "技术愿景画布",
            detail: "用 1-3 年技术愿景描述平台化、可靠性、数据能力与 AI 等关键支撑。",
            keyPoints: [
              "技术愿景需涵盖平台化、可靠性、数据智能与开发者体验。",
              "用叙事文档（6 页备忘录）而非 PPT 传达愿景，驱动对齐。",
              "愿景应包含里程碑与可衡量的阶段性目标。",
            ],
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
        overview: "工程效能不是追求代码量，而是交付价值的速度与质量。本周学习用 DORA 等指标定位瓶颈，并构建发布防线以降低变更风险。",
        keyPoints: [
          "用 DORA 四个关键指标量化交付效能",
          "识别价值流中的等待与返工环节",
          "建立发布准入、灰度与回滚的完整防线",
        ],
        lessons: [
          {
            id: "cto-w3-1",
            title: "效能度量与瓶颈识别",
            detail: "结合 DORA 指标、Lead Time、变更失败率等数据定位瓶颈，推动改进。",
            keyPoints: [
              "DORA 四指标：部署频率、Lead Time、变更失败率、恢复时间。",
              "价值流映射找出等待、返工与手工环节。",
              "用趋势而非绝对值衡量改进，避免指标游戏。",
            ],
            resources: [
              { title: "DORA DevOps Research", url: "https://dora.dev/research/" },
              { title: "Accelerate", url: "https://itrevolution.com/accelerate-book/" },
            ],
          },
          {
            id: "cto-w3-2",
            title: "交付防线与质量体系",
            detail: "建立发布准入、灰度、回滚和事后复盘，形成工程质量基线。",
            keyPoints: [
              "发布准入：自动化测试通过率、安全扫描、性能基线。",
              "灰度策略：canary → 分批 → 全量，配合指标自动回滚。",
              "事后复盘：无责文化、时间线、根因与守护栏。",
            ],
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
        overview: "架构决策是 CTO 最核心的技术杠杆。本周学习用 ADR 记录决策、用成本模型评估方案，并识别平台化投资的最佳时机。",
        keyPoints: [
          "用 ADR 让架构决策可追溯、可复盘",
          "评估微服务、事件驱动等架构演进路径的收益与风险",
          "识别平台化投资时机，建立平台团队运营模式",
        ],
        lessons: [
          {
            id: "cto-w4-1",
            title: "架构演进决策",
            detail: "通过 ADR、成本模型与风险评估评估微服务、数据/事件架构等演进路径。",
            keyPoints: [
              "ADR 包含：上下文、决策、后果与状态，需定期复审。",
              "架构选型需量化评估：开发成本、运维成本、迁移风险。",
              "避免过早微服务化，先用模块化单体降低复杂度。",
            ],
            resources: [
              { title: "Architecture Decision Records", url: "https://adr.github.io/" },
              { title: "Microservices Patterns", url: "https://microservices.io/" },
            ],
          },
          {
            id: "cto-w4-2",
            title: "平台化与复用",
            detail: "识别通用能力（身份、支付、消息、数据）进行平台化，建立平台团队运营模式。",
            keyPoints: [
              "平台化三要素：被 3+ 团队复用、有明确 API 契约、有专人维护。",
              "用内部开发者平台（IDP）思维提供自助式服务。",
              "平台团队是 Enabling Team，目标是降低业务团队的认知负载。",
            ],
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
        overview: "康威定律决定了组织结构直接影响系统架构。本周学习用 Team Topologies 设计组织，平衡自治与一致性。",
        keyPoints: [
          "按价值流而非职能划分团队，减少交接与等待",
          "用 RACI 明确职责边界与决策权",
          "建立工作协议与技术评审委员会推动跨团队一致性",
        ],
        lessons: [
          {
            id: "cto-w5-1",
            title: "组织拓扑与职责边界",
            detail: "结合 Team Topologies 与 RACI 设计团队职责、接口与沟通模式。",
            keyPoints: [
              "四种团队类型：流对齐、使能、复杂子系统、平台。",
              "团队间三种交互模式：协作、X-as-a-Service、引导。",
              "认知负载是团队规模的核心约束，避免团队承担过多领域。",
            ],
            resources: [
              { title: "Team Topologies", url: "https://teamtopologies.com/key-concepts" },
              { title: "RACI 模型", url: "https://www.atlassian.com/team-playbook/plays/roles-and-responsibilities" },
            ],
          },
          {
            id: "cto-w5-2",
            title: "跨团队协作与治理",
            detail: "推行工作协议、技术评审委员会和轻量治理，平衡一致性与自治。",
            keyPoints: [
              "工作协议明确接口协议、响应时间与升级路径。",
              "技术评审委员会负责跨团队标准与重大决策评审。",
              "治理应轻量化：用 Guardrails 而非 Gates，减少审批瓶颈。",
            ],
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
        overview: "CTO 的可持续性取决于团队的可持续性。本周关注人才策略与风险治理，确保关键岗位和关键系统不存在单点故障。",
        keyPoints: [
          "设计招聘画像与职级体系，确保人才管道可持续",
          "为关键岗位建立继任计划，降低 Bus Factor 风险",
          "建立安全、合规与业务连续性的预警与演练机制",
        ],
        lessons: [
          {
            id: "cto-w6-1",
            title: "人才策略与继任计划",
            detail: "设计招聘画像、职级体系与继任计划，确保关键岗位的可持续性。",
            keyPoints: [
              "招聘画像要结合团队当前短板与未来能力需求。",
              "职级体系需要行为化描述，而非模糊的"高级"标签。",
              "继任计划覆盖关键岗位：至少有 1 人可接替、1 人在培养。",
            ],
            resources: [
              { title: "Career Ladders", url: "https://www.levels.fyi/company" },
              { title: "Succession Planning", url: "https://hbr.org/2016/12/why-leaders-dont-produce-leaders" },
            ],
          },
          {
            id: "cto-w6-2",
            title: "风险管理与合规",
            detail: "建立安全、合规、隐私和业务连续性风险的识别、演练与响应机制。",
            keyPoints: [
              "用风险矩阵（影响 × 概率）识别并排序前 5 大风险。",
              "灾备与安全响应需要定期演练，而非只写预案。",
              "合规需求（GDPR/等保/SOC2）应嵌入开发流程而非事后补救。",
            ],
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
  {
    id: "cto-card-delivery",
    title: "交付效能",
    summary: "用数据驱动交付节奏改进，让效能提升可衡量。",
    points: [
      "DORA 四指标是效能基线：部署频率、Lead Time、变更失败率、恢复时间。",
      "用价值流映射识别等待、返工与手工瓶颈环节。",
      "效能改进需持续追踪趋势，避免一次性运动。",
    ],
    practice: "为团队搭建 DORA 看板，选择 1 个瓶颈指标设定 30 天改进目标。",
  },
  {
    id: "cto-card-vision",
    title: "技术愿景沟通",
    summary: "用可理解的叙事让技术愿景获得业务认同。",
    points: [
      "技术愿景需回答：为什么做、做什么、不做什么、如何衡量成功。",
      "用 6 页备忘录而非 PPT，逼迫深度思考与逻辑严密。",
      "每季度复审愿景，与业务目标的变化保持同步。",
    ],
    practice: "为当前最重要的技术投资写一份 1 页愿景摘要，包含业务价值、里程碑与风险。",
  },
  {
    id: "cto-card-platform",
    title: "平台化投资",
    summary: "平台化投资需要以复用率和 ROI 为核心判断标准。",
    points: [
      "三个复用信号：3+ 团队需要、每团队节省 2+ 周、有明确 API 契约。",
      "平台团队要像产品团队一样运营：收集用户反馈、迭代发布。",
      "避免过度平台化：不是所有通用代码都值得做成平台。",
    ],
    practice: "评估一个候选平台能力，计算复用率与 ROI，输出 Build vs Buy 决策。",
  },
  {
    id: "cto-card-talent",
    title: "人才梯队建设",
    summary: "可持续的技术组织需要多梯度的人才管道。",
    points: [
      "招聘画像需结合当前短板与 6-12 个月的能力需求。",
      "职级体系用行为化描述，让每个层级的期望透明可衡量。",
      "继任计划降低 Bus Factor，确保关键岗位至少有 1 个备份。",
    ],
    practice: "为团队关键岗位（如架构师、SRE Lead）制定继任矩阵与培养计划。",
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
  {
    id: "cto-q9",
    question: "CTO 与 VP Engineering 最核心的职责差异在于？",
    options: ["CTO 写更多代码", "CTO 侧重技术战略与创新方向，VPE 侧重工程交付与团队运营", "VPE 不参与技术决策", "两者完全相同"],
    answer: 1,
    rationale: "CTO 更关注技术战略与外部创新，VPE 聚焦工程效率与团队交付。",
  },
  {
    id: "cto-q10",
    question: "技术愿景文档最重要的组成部分是？",
    options: ["技术栈的完整清单", "愿景与业务目标的映射关系及可衡量的里程碑", "团队的组织架构图", "竞品的技术分析"],
    answer: 1,
    rationale: "技术愿景的核心价值在于与业务目标对齐，并有可衡量的阶段性目标。",
  },
  {
    id: "cto-q11",
    question: "康威定律（Conway's Law）对组织设计的启示是？",
    options: ["团队越大越好", "系统架构反映组织沟通结构，应反向设计组织以匹配期望架构", "不同团队应使用不同技术栈", "所有人应在同一个办公室"],
    answer: 1,
    rationale: "康威定律揭示了组织结构与系统架构的映射关系，CTO 应有意识地设计组织。",
  },
  {
    id: "cto-q12",
    question: "当团队认知负载过高时，CTO 应优先考虑？",
    options: ["要求团队加班", "拆分领域边界、引入平台团队降低复杂度", "增加文档数量", "禁止使用新技术"],
    answer: 1,
    rationale: "认知负载是团队效能的核心约束，通过拆分领域和平台化降低每个团队的复杂度。",
  },
  {
    id: "cto-q13",
    question: "评估技术债务优先级时，最关键的维度是？",
    options: ["代码行数", "代码年龄", "对交付速度和系统可靠性的实际影响", "涉及的文件数量"],
    answer: 2,
    rationale: "技术债务应按对业务交付和系统可靠性的影响排序，而非代码表面特征。",
  },
  {
    id: "cto-q14",
    question: "CTO 在董事会汇报中应重点传达的是？",
    options: ["详细的技术架构图", "用业务语言解释技术投资对收入、成本和风险的影响", "团队的编码规范", "最新的技术趋势"],
    answer: 1,
    rationale: "董事会关注业务影响，CTO 需要将技术投资翻译为业务语言。",
  },
  {
    id: "cto-q15",
    question: "在成长期公司，CTO 最需要关注的转变是？",
    options: ["继续亲自写核心代码", "从产品交付转向团队扩大、流程建设与交付可预测性", "减少与业务部门的沟通", "追求最新的技术框架"],
    answer: 1,
    rationale: "成长期的核心挑战是扩大团队并保持交付可预测性，而非个人技术贡献。",
  },
  {
    id: "cto-q16",
    question: "FinOps 实践对 CTO 的核心价值是？",
    options: ["降低所有云服务开支", "建立成本可见性，让技术投资决策有数据支撑", "取消云服务使用", "将所有服务迁回自建机房"],
    answer: 1,
    rationale: "FinOps 的核心是成本可见性与优化，让 CTO 能做出有数据支撑的投资决策。",
  },
  {
    id: "cto-q17",
    question: "建立工程文化时，CTO 最有效的做法是？",
    options: ["发布详细的行为规范文档", "以身作则并通过制度和激励机制强化期望行为", "强制要求所有人参加文化培训", "只招聘文化契合的候选人"],
    answer: 1,
    rationale: "文化建设需要 CTO 以身作则，并用制度和激励机制将期望行为制度化。",
  },
  {
    id: "cto-q18",
    question: "在技术选型中，避免"简历驱动开发"的关键是？",
    options: ["禁止引入新技术", "用 ADR 记录选型的业务动机、技术评估与退出策略", "只使用团队已熟悉的技术", "让最资深的工程师做所有决定"],
    answer: 1,
    rationale: "ADR 强制记录选型理由，避免因个人偏好引入不必要的复杂度。",
  },
  {
    id: "cto-q19",
    question: "CTO 推动 AI 赋能的正确姿势是？",
    options: ["立即全面替换现有系统", "识别高 ROI 场景、快速 POC 验证、渐进式落地", "等 AI 技术完全成熟再投入", "只在研发工具中应用"],
    answer: 1,
    rationale: "AI 赋能应从高 ROI 场景出发，通过 POC 验证后渐进式推广。",
  },
  {
    id: "cto-q20",
    question: "技术品牌建设对 CTO 的价值主要体现在？",
    options: ["增加个人影响力", "吸引人才、促进生态合作与提升团队自豪感", "获得更多演讲机会", "提高公司估值"],
    answer: 1,
    rationale: "技术品牌直接影响招聘效果和生态合作，是 CTO 的长期投资。",
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
