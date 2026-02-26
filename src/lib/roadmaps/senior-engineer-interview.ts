import type { RoadmapDefinition, Stage, KnowledgeCard, QuizQuestion } from "../types"

export const seniorInterviewStages: Stage[] = [
  {
    id: "se-foundation",
    title: "阶段一：基础巩固与高频考点",
    duration: "第 1-2 周",
    goal: "补齐计算机基础、网络与数据结构高频题，打牢编码与沟通底座。",
    weeks: [
      {
        id: "se-w1",
        title: "第 1 周：算法与数据结构",
        summary: "针对数组、链表、二叉树、堆与图论的高频面试题进行复盘与练习。",
        overview: "本周聚焦算法与数据结构的核心考点，通过高频题练习建立解题直觉，同时掌握复杂度分析与模板化编码能力。",
        lessons: [
          {
            id: "se-w1-1",
            title: "时间复杂度与常见数据结构",
            detail: "梳理 Big-O 复杂度，掌握数组、哈希、栈队列、堆、二叉搜索树的核心操作及边界。",
            keyPoints: [
              "用主定理分析递归复杂度，能解释均摊分析。",
              "掌握 BST、AVL/红黑树的旋转与平衡思想。",
              "堆的上浮/下沉与优先队列常见实现。",
            ],
            resources: [
              { title: "roadmap.sh: 编码面试", url: "https://roadmap.sh/coding-interview" },
              { title: "MIT 6.006 算法", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/" },
              { title: "LeetCode 高频题", url: "https://leetcode.cn/problem-list/top-interview-questions/" },
            ],
          },
          {
            id: "se-w1-2",
            title: "图与动态规划",
            detail: "熟练编写 BFS/DFS、拓扑排序、最短路与区间/背包 DP，形成模板库。",
            keyPoints: [
              "BFS/DFS 模板化编写，能快速处理连通分量与环检测。",
              "掌握拓扑排序与 Dijkstra/Bellman-Ford 最短路的适用场景。",
              "区间 DP 与背包问题的状态转移方程推导与空间优化。",
            ],
            resources: [
              { title: "图论模板", url: "https://cp-algorithms.com/graph/" },
              { title: "AlgoExpert DP 总结", url: "https://www.algoexpert.io/" },
              { title: "roadmap.sh: 动态规划", url: "https://roadmap.sh/dynamic-programming" },
            ],
          },
        ],
      },
      {
        id: "se-w2",
        title: "第 2 周：网络与系统基础",
        summary: "覆盖 TCP/HTTP、缓存、消息队列与 Linux 性能工具的常见面试问答。",
        overview: "本周深入网络协议与操作系统基础，理解从请求到响应的完整链路，并掌握常用性能排障工具与方法论。",
        lessons: [
          {
            id: "se-w2-1",
            title: "TCP/HTTP 深入",
            detail: "解释三次握手/四次挥手、TIME_WAIT、队头阻塞、HTTP/2 多路复用、gRPC 与 REST 的取舍。",
            keyPoints: [
              "能画出三次握手与四次挥手时序图并解释 TIME_WAIT 原因。",
              "理解 HTTP/2 多路复用解决队头阻塞的原理与局限。",
              "对比 gRPC 与 REST 在性能、可读性与生态上的取舍。",
            ],
            resources: [
              { title: "HTTP/2 Illustrated", url: "https://http2.github.io/" },
              { title: "gRPC 概览", url: "https://grpc.io/docs/what-is-grpc/introduction/" },
              { title: "OSTEP 网络章节", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" },
            ],
          },
          {
            id: "se-w2-2",
            title: "系统调优与排障",
            detail: "熟悉 top/iostat/strace/perf 等工具，能定位 CPU、IO、锁等待、内存泄漏问题。",
            keyPoints: [
              "用 top/htop 定位高 CPU 线程，结合 perf 采样找热点函数。",
              "用 iostat/vmstat 判断 IO 瓶颈，strace 追踪系统调用延迟。",
              "内存泄漏排查思路：RSS 增长趋势 + pmap/jmap + 堆分析。",
            ],
            resources: [
              { title: "Brendan Gregg 性能工具", url: "http://www.brendangregg.com/linuxperf.html" },
              { title: "roadmap.sh: SRE", url: "https://roadmap.sh/sre" },
              { title: "Netflix 性能案例", url: "https://netflixtechblog.com/tagged/performance" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "se-system-design",
    title: "阶段二：系统设计与可扩展性",
    duration: "第 3-4 周",
    goal: "形成结构化的系统设计答题框架，熟悉存储、缓存、消息与一致性方案。",
    weeks: [
      {
        id: "se-w3",
        title: "第 3 周：架构方法论",
        summary: "练习容量估算、接口定义、数据模型设计与 SLA/延迟预算的表达。",
        overview: "本周建立系统设计的结构化答题框架，从需求澄清到数据建模形成完整的思维链路，确保面试中能条理清晰地推进方案。",
        lessons: [
          {
            id: "se-w3-1",
            title: "需求澄清与容量估算",
            detail: "用 QPS/吞吐/存储量驱动设计，明确 SLA、SLO、延迟预算与降级策略。",
            keyPoints: [
              "面试开场用 3 分钟完成需求澄清与约束确认。",
              "用 QPS × 数据大小推导存储、带宽与分片需求。",
              "明确 SLA/SLO 与错误预算，为后续架构选型提供依据。",
            ],
            resources: [
              { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
              { title: "Google SRE Workbook", url: "https://sre.google/workbook/" },
              { title: "roadmap.sh: System Design", url: "https://roadmap.sh/system-design" },
            ],
          },
          {
            id: "se-w3-2",
            title: "数据建模与接口契约",
            detail: "围绕一致性、主键策略、幂等性与防重做 API 契约，输出 ERD 与接口文档。",
            keyPoints: [
              "主键策略选择：自增 ID vs UUID vs 雪花算法的适用场景。",
              "API 契约设计需考虑幂等性、版本兼容与错误码规范。",
              "用 ERD 表达实体关系，明确索引策略与查询模式。",
            ],
            resources: [
              { title: "API 设计指南", url: "https://roadmap.sh/api-design" },
              { title: "Martin Kleppmann 数据系统", url: "https://dataintensive.net/" },
              { title: "OpenAPI 3.1 规范", url: "https://spec.openapis.org/oas/latest.html" },
            ],
          },
        ],
      },
      {
        id: "se-w4",
        title: "第 4 周：存储、缓存与消息",
        summary: "在扩展性场景下选择分片、复制、缓存模式与消息队列语义，权衡一致性与成本。",
        overview: "本周围绕存储与中间件展开，掌握缓存策略、消息语义与一致性方案的取舍，能够在面试中给出有深度的技术选型论证。",
        lessons: [
          {
            id: "se-w4-1",
            title: "缓存策略与失效",
            detail: "对比旁路缓存、读写穿透与分布式缓存一致性，覆盖热点、雪崩、击穿防护。",
            keyPoints: [
              "旁路缓存 vs 读写穿透：一致性与复杂度的取舍。",
              "雪崩（随机过期）、击穿（互斥锁）、热点（本地缓存）防护策略。",
              "分布式缓存一致性：延迟双删、Canal 订阅与版本号方案。",
            ],
            resources: [
              { title: "Redis 设计与实现", url: "https://redis.io/topics/replication" },
              { title: "Caching Best Practices", url: "https://aws.amazon.com/caching/" },
              { title: "roadmap.sh: Backend Performance", url: "https://roadmap.sh/backend/performance" },
            ],
          },
          {
            id: "se-w4-2",
            title: "消息与一致性",
            detail: "熟悉 At-least-once/Exactly-once 语义、延迟/重试、幂等消费与事务消息（本地消息表/Outbox）。",
            keyPoints: [
              "At-least-once 下消费者必须幂等，Exactly-once 依赖事务或去重。",
              "Outbox 模式保证业务操作与消息发送的原子性。",
              "死信队列与重试策略设计，避免消息堆积影响上游。",
            ],
            resources: [
              { title: "Kafka Exactly Once", url: "https://kafka.apache.org/documentation/#semantics" },
              { title: "Transactional Outbox", url: "https://microservices.io/patterns/data/transactional-outbox.html" },
              { title: "Idempotency Keys", url: "https://stripe.com/docs/api/idempotent_requests" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "se-code-quality",
    title: "阶段三：编码质量与工程实践",
    duration: "第 5-6 周",
    goal: "用真实案例回答可维护性、测试、可观测性与安全性问题，展现工程素养。",
    weeks: [
      {
        id: "se-w5",
        title: "第 5 周：可维护性与重构",
        summary: "准备代码走查、设计模式选型、解耦与迁移方案的故事素材。",
        overview: "本周关注代码质量与工程实践，通过重构与测试策略的准备，展现对可维护性和长期演进的深入思考。",
        lessons: [
          {
            id: "se-w5-1",
            title: "重构策略与隔离层",
            detail: "使用防腐层、Strangler Fig、契约测试推进遗留系统重构，确保向后兼容。",
            keyPoints: [
              "Strangler Fig 模式渐进替换遗留模块，降低大爆炸风险。",
              "防腐层隔离新旧系统的模型差异，保持新系统整洁。",
              "契约测试保证重构过程中接口行为的向后兼容性。",
            ],
            resources: [
              { title: "Strangler Fig", url: "https://martinfowler.com/bliki/StranglerFigApplication.html" },
              { title: "契约测试", url: "https://docs.pact.io/" },
              { title: "roadmap.sh: Refactoring", url: "https://roadmap.sh/refactoring" },
            ],
          },
          {
            id: "se-w5-2",
            title: "测试策略与覆盖",
            detail: "解释单元/集成/端到端测试分层，使用测试金字塔、Mock 与回归选择策略。",
            keyPoints: [
              "测试金字塔：单元测试多而快，端到端测试少而稳。",
              "Mock 与 Stub 的使用边界，避免过度 Mock 导致脆弱测试。",
              "回归测试选择策略：变更影响分析 + 关键路径优先。",
            ],
            resources: [
              { title: "Google Testing Blog", url: "https://testing.googleblog.com/" },
              { title: "Testing Trophy", url: "https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications" },
              { title: "roadmap.sh: QA", url: "https://roadmap.sh/qa" },
            ],
          },
        ],
      },
      {
        id: "se-w6",
        title: "第 6 周：可观测性与安全",
        summary: "涵盖日志、指标、追踪与安全左移，准备“线上事故处理”案例。",
        overview: "本周聚焦线上稳定性与安全性，构建可观测性体系并准备事故处理与安全合规的面试案例。",
        lessons: [
          {
            id: "se-w6-1",
            title: "可观测性与稳定性",
            detail: "构建 RED/USE 指标，使用链路追踪与熔断/限流/降级应对突发流量。",
            keyPoints: [
              "RED 指标（Rate/Error/Duration）覆盖服务维度，USE 指标覆盖资源维度。",
              "链路追踪通过 trace_id 串联跨服务调用，快速定位慢点。",
              "熔断/限流/降级三板斧：保护核心链路，优雅应对过载。",
            ],
            resources: [
              { title: "OpenTelemetry", url: "https://opentelemetry.io/docs/" },
              { title: "Hystrix Patterns", url: "https://martinfowler.com/bliki/CircuitBreaker.html" },
              { title: "SRE Golden Signals", url: "https://sre.google/sre-book/monitoring-distributed-systems/" },
            ],
          },
          {
            id: "se-w6-2",
            title: "安全与合规",
            detail: "覆盖身份认证、最小权限、输入验证、漏洞响应流程，准备安全演练经验。",
            keyPoints: [
              "身份认证与授权分离，OAuth2/OIDC 流程与 JWT 安全实践。",
              "最小权限原则应用于服务间通信与数据库访问控制。",
              "安全左移：代码扫描、依赖审计与漏洞响应 SLA。",
            ],
            resources: [
              { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
              { title: "Zero Trust", url: "https://roadmap.sh/zero-trust-security" },
              { title: "安全左移实践", url: "https://snyk.io/learn/shift-left-security/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "se-behavioral",
    title: "阶段四：行为面试与领导力",
    duration: "第 7-8 周",
    goal: "用 STAR/ROI 结构化讲述影响力、跨团队协作、冲突与复盘案例。",
    weeks: [
      {
        id: "se-w7",
        title: "第 7 周：叙事与故事库",
        summary: "整理高影响力案例，覆盖 owner、沟通、节奏与风险管理。",
        overview: "本周转向行为面试，用 STAR/ROI 框架整理个人故事库，确保能清晰表达影响力、协作与决策过程。",
        lessons: [
          {
            id: "se-w7-1",
            title: "STAR/ROI 讲故事",
            detail: "用 Situation-Task-Action-Result 或 ROI 框架准备 6-8 个可复用故事。",
            keyPoints: [
              "每个故事覆盖 Situation-Task-Action-Result 四要素，结果量化。",
              "准备 6-8 个故事覆盖领导力、冲突、失败、创新等维度。",
              "ROI 框架突出投入产出比，展示商业价值意识。",
            ],
            resources: [
              { title: "STAR 法则", url: "https://www.themuse.com/advice/star-interview-method" },
              { title: "领导力原则", url: "https://www.amazon.jobs/en/principles" },
              { title: "roadmap.sh: 软技能", url: "https://roadmap.sh/soft-skills" },
            ],
          },
          {
            id: "se-w7-2",
            title: "冲突与协作",
            detail: "准备一次跨团队冲突解决的案例，强调倾听、共识与决策记录。",
            keyPoints: [
              "冲突案例需体现倾听与同理心，而非强势推进。",
              "通过 ADR（架构决策记录）固化共识，减少反复争论。",
              "协作故事要展示跨职能沟通与推动落地的能力。",
            ],
            resources: [
              { title: "Crucial Conversations", url: "https://www.vitalsmarts.com/" },
              { title: "ADR 模板", url: "https://adr.github.io/" },
              { title: "LeadDev 协作", url: "https://leaddev.com/" },
            ],
          },
        ],
      },
      {
        id: "se-w8",
        title: "第 8 周：模拟面试与复盘",
        summary: "进行系统设计+编码+行为的串联 mock，迭代回答结构与亮点。",
        overview: "最后一周进入实战模拟阶段，通过多轮 Mock 面试暴露盲点并迭代改进，为正式面试建立信心与节奏感。",
        lessons: [
          {
            id: "se-w8-1",
            title: "系统设计 Mock",
            detail: "找同事或社区伙伴模拟 45 分钟系统设计面试，关注澄清、取舍与估算。",
            keyPoints: [
              "Mock 面试控制在 45 分钟内，模拟真实时间压力。",
              "重点练习需求澄清、容量估算与技术取舍的表达。",
              "录制回放复盘表达节奏与遗漏点，迭代改进。",
            ],
            resources: [
              { title: "Excalidraw 白板", url: "https://excalidraw.com/" },
              { title: "Mock 面试社区", url: "https://interviewing.io/" },
              { title: "Design Questions", url: "https://www.techinterviewhandbook.org/system-design/" },
            ],
          },
          {
            id: "se-w8-2",
            title: "综合面试循环",
            detail: "连续完成编码 + 行为 + 系统设计三轮，记录问题、亮点与改进计划。",
            keyPoints: [
              "三轮串联模拟真实面试节奏，锻炼体力与专注力。",
              "每轮结束记录亮点与失误，形成可追踪的改进清单。",
              "重点关注跨轮次的表达一致性与精力分配策略。",
            ],
            resources: [
              { title: "Pramp Mock", url: "https://www.pramp.com/" },
              { title: "准备清单模板", url: "https://www.notion.so/" },
              { title: "roadmap.sh: Tech Interview", url: "https://roadmap.sh/tech-interview" },
            ],
          },
        ],
      },
    ],
  },
]

export const seniorInterviewKnowledgeCards: KnowledgeCard[] = [
  {
    id: "se-card-clarify",
    title: "系统设计澄清五步",
    summary: "澄清场景与约束，让后续方案有边界。",
    points: [
      "用户与流量规模（DAU/QPS/峰谷）。",
      "读写比例、延迟与可用性目标（SLA/SLO）。",
      "数据安全与合规（PII、审计、留存）。",
      "失败模式与降级策略（缓存失效、依赖故障）。",
      "非功能需求：多活、成本、上线周期。",
    ],
    practice: "用任意系统设计题在 3 分钟内完成澄清，并复述确认。",
  },
  {
    id: "se-card-capacity",
    title: "容量估算速记",
    summary: "将体量量化，驱动分片、缓存与带宽决策。",
    points: [
      "存储 = 数据量 × 保留天数 × 副本数。",
      "带宽 = QPS × 数据大小 × (1 + 重试率)。",
      "缓存命中率对下游 QPS 的放大/缩小效应。",
      "峰值系数（p95/p99）与突发倍数。",
      "写放大与压缩比影响成本。",
    ],
    practice: "估算短链服务每天 1 亿次跳转的存储与带宽，并列出瓶颈。",
  },
  {
    id: "se-card-consistency",
    title: "一致性取舍",
    summary: "用 CAP/PACELC 思维说明选择原因。",
    points: [
      "强一致：两阶段提交、Paxos/Raft 复制。",
      "最终一致：基于日志复制与补偿机制。",
      "读己之写：会话粘性或读写路由。",
      "幂等性：请求幂等键、去重表、悲观/乐观锁。",
      "隔离级别：RC/ RR/ SI/ Serializable。",
    ],
    practice: "回答“订单支付如何防重扣款”并画出时序图。",
  },
  {
    id: "se-card-observability",
    title: "可观测性三要素",
    summary: "日志、指标、追踪的采集与关联。",
    points: [
      "日志：结构化、含 trace_id/span_id、脱敏。",
      "指标：RED/USE、SLI/SLO/错误预算策略。",
      "追踪：采样率、跨进程上下文传递。",
      "告警：去噪、抑制、升级路径。",
      "演练：故障注入与回滚演练。",
    ],
    practice: "为一次 500 错误暴增写出调查步骤和观测信号。",
  },
  {
    id: "se-card-behavioral",
    title: "行为面试亮点模板",
    summary: "把成果量化，把协作过程透明化。",
    points: [
      "背景：团队规模、季度目标、约束。",
      "行动：决策记录、关键方案、冲突化解。",
      "结果：量化指标（延迟、稳定性、成本）。",
      "反思：做得好的/可以改进的下一步。",
      "迁移：如何在新团队复用经验。",
    ],
    practice: "用 STAR/ROI 改写一段经历，突出影响面与数据。",
  },
  {
    id: "se-card-checklist",
    title: "面试当日 CheckList",
    summary: "从设备到心态，降低现场意外。",
    points: [
      "提前调试 IDE、白板/画图工具、麦克风与网络。",
      "准备本地代码模板：快排/DFS/BFS/二分/并查集。",
      "桌面置顶时间/复杂度速查与常用公式。",
      "录制 mock，复盘表达与打字节奏。",
      "准备 3 个可提问面试官的问题。",
    ],
    practice: "面试前一天按清单自检并记录风险项。",
  },
]

export const seniorInterviewExamQuestions: QuizQuestion[] = [
  {
    id: "se-exam-1",
    question: "在系统设计开场阶段，最重要的第一步是？",
    options: [
      "直接选择数据库和缓存",
      "澄清需求与约束并复述",
      "画出高可用拓扑",
      "写出容量估算公式",
    ],
    answer: 1,
    rationale: "先澄清需求、假设与 SLA，让后续设计有清晰边界。",
  },
  {
    id: "se-exam-2",
    question: "使用消息队列保证“至少一次”语义时，下列哪项是必需的？",
    options: [
      "消费者端幂等处理",
      "生产者端二次确认",
      "消息体包含全部上下文",
      "采用长轮询模式",
    ],
    answer: 0,
    rationale: "至少一次会出现重复消息，消费者必须幂等以避免副作用。",
  },
  {
    id: "se-exam-3",
    question: "为避免缓存雪崩，下列策略最有效的是？",
    options: [
      "统一设置相同过期时间",
      "增加数据库主从复制",
      "过期时间加入随机抖动",
      "提升缓存命中率到 99%",
    ],
    answer: 2,
    rationale: "随机化过期时间分散失效压力，减少雪崩风险。",
  },
  {
    id: "se-exam-4",
    question: "接口需要防止重复提交扣款，首选方案是？",
    options: [
      "请求方重试间隔拉长",
      "服务端基于 Idempotency-Key 去重",
      "关闭幂等保证",
      "改用 UDP 协议",
    ],
    answer: 1,
    rationale: "在服务端用幂等键记录处理状态，可防止网络重试造成重复扣款。",
  },
  {
    id: "se-exam-5",
    question: "当数据库读放大严重时，下列哪种改动最能缓解？",
    options: [
      "提高连接池大小",
      "引入只读副本并配合缓存",
      "把 SQL 改写成存储过程",
      "关闭慢查询日志",
    ],
    answer: 1,
    rationale: "读放大可通过只读副本与缓存吸收流量，降低主库压力。",
  },
  {
    id: "se-exam-6",
    question: "行为面试回答中，哪一项能最好体现影响力？",
    options: [
      "详细描述实现细节",
      "强调个人加班时长",
      "量化结果并说明团队收益",
      "引用行业大厂案例",
    ],
    answer: 2,
    rationale: "面试官关注可度量的业务/团队收益，量化结果最能体现影响力。",
  },
  {
    id: "se-exam-7",
    question: "在读写混合的高并发场景下，选择哪种分页方案更稳定？",
    options: [
      "Offset 分页",
      "Keyset 分页",
      "随机分页",
      "客户端全量缓存",
    ],
    answer: 1,
    rationale: "Keyset 分页基于排序键稳定前进，避免 Offset 在数据变动时的性能与重复问题。",
  },
  {
    id: "se-exam-8",
    question: "出现 p99 延迟突增，首要的可观测性动作是？",
    options: [
      "立刻扩容数据库",
      "检查日志文件大小",
      "查看追踪/指标定位慢点",
      "重启所有实例",
    ],
    answer: 2,
    rationale: "通过追踪与指标快速找到延迟瓶颈，再决定是否扩容或优化。",
  },
  {
    id: "se-exam-9",
    question: "下列哪个方案能在不中断上线的情况下验证新版本？",
    options: [
      "直接替换二进制",
      "灰度/金丝雀发布并对比指标",
      "关闭健康检查",
      "延长超时时间",
    ],
    answer: 1,
    rationale: "金丝雀发布先小流量验证并对比关键指标，降低回滚成本。",
  },
  {
    id: "se-exam-10",
    question: "在 Linux 中定位高 CPU 占用的首选组合是？",
    options: [
      "curl + netstat",
      "top/htop + perf/pprof",
      "ping + traceroute",
      "ls + du",
    ],
    answer: 1,
    rationale: "top/htop 定位线程后用 perf/pprof 采样可快速找出 CPU 热点。",
  },
  {
    id: "se-exam-11",
    question: "Strangler Fig 模式的核心思想是？",
    options: [
      "一次性替换所有旧代码",
      "渐进式迁移，新旧系统并行运行",
      "仅修复旧系统的 Bug",
      "将旧系统完全冻结不做变更",
    ],
    answer: 1,
    rationale: "Strangler Fig 通过渐进式替换降低风险，新旧系统可并行运行直到迁移完成。",
  },
  {
    id: "se-exam-12",
    question: "测试金字塔中，数量最多、执行最快的测试层级是？",
    options: [
      "端到端测试",
      "集成测试",
      "单元测试",
      "性能测试",
    ],
    answer: 2,
    rationale: "单元测试粒度最小、速度最快，应占测试总量的最大比例。",
  },
  {
    id: "se-exam-13",
    question: "分布式系统中，Outbox 模式主要解决什么问题？",
    options: [
      "消息顺序消费",
      "业务操作与消息发送的原子性",
      "消息压缩与序列化",
      "消费者负载均衡",
    ],
    answer: 1,
    rationale: "Outbox 将消息写入业务数据库同一事务，由后台任务投递，保证原子性。",
  },
  {
    id: "se-exam-14",
    question: "HTTP/2 相比 HTTP/1.1 的核心改进是？",
    options: [
      "更短的 URL 长度",
      "多路复用减少队头阻塞",
      "移除了请求头",
      "仅支持 POST 方法",
    ],
    answer: 1,
    rationale: "HTTP/2 通过二进制帧与多路复用在单个连接上并发传输，减少队头阻塞。",
  },
  {
    id: "se-exam-15",
    question: "RED 指标体系中的三个维度分别是？",
    options: [
      "Read、Edit、Delete",
      "Rate、Error、Duration",
      "Request、Exception、Delay",
      "Retry、Eviction、Disk",
    ],
    answer: 1,
    rationale: "RED 指标覆盖请求速率（Rate）、错误率（Error）和延迟（Duration），适用于服务监控。",
  },
  {
    id: "se-exam-16",
    question: "STAR 行为面试框架中，最容易被忽略但最关键的环节是？",
    options: [
      "Situation 背景描述",
      "Task 任务说明",
      "Action 行动细节",
      "Result 量化结果",
    ],
    answer: 3,
    rationale: "很多候选人重行动轻结果，但面试官最关注可度量的 Result 来评估影响力。",
  },
  {
    id: "se-exam-17",
    question: "缓存击穿的典型防护手段是？",
    options: [
      "设置统一过期时间",
      "对热点 key 加互斥锁或永不过期",
      "减少缓存容量",
      "关闭缓存功能",
    ],
    answer: 1,
    rationale: "击穿指热点 key 失效瞬间大量请求穿透到数据库，互斥锁或逻辑不过期可防护。",
  },
  {
    id: "se-exam-18",
    question: "在容量估算中，峰值系数（Peak Factor）的作用是？",
    options: [
      "降低存储成本",
      "预留突发流量的处理能力",
      "减少数据副本数量",
      "加快部署速度",
    ],
    answer: 1,
    rationale: "峰值系数用于在平均 QPS 基础上预留突发倍数，确保系统在高峰期不过载。",
  },
  {
    id: "se-exam-19",
    question: "契约测试（Contract Testing）的主要目的是？",
    options: [
      "验证 UI 样式正确性",
      "确保服务间接口兼容性",
      "测试数据库性能",
      "检查代码覆盖率",
    ],
    answer: 1,
    rationale: "契约测试验证服务提供方与消费方的接口约定一致，防止集成时出现兼容性问题。",
  },
  {
    id: "se-exam-20",
    question: "熔断器（Circuit Breaker）进入 Open 状态后的行为是？",
    options: [
      "继续转发所有请求",
      "直接拒绝或降级，不再调用下游",
      "自动修复下游故障",
      "将请求缓存到本地队列",
    ],
    answer: 1,
    rationale: "Open 状态下熔断器直接快速失败或返回降级结果，避免持续给故障下游施压。",
  },
]

export const seniorEngineerInterviewRoadmap: RoadmapDefinition = {
  id: "senior-engineer-interview",
  label: "高级工程师面试准备",
  title: "高级工程师面试准备",
  durationLabel: "8 周·32 课时",
  description:
    "8 周面试冲刺路线：巩固算法与网络基础，搭建系统设计答题框架，展现工程实践深度，并用行为面试故事突出影响力。",
  heroBadge: "面试冲刺",
  stages: seniorInterviewStages,
  knowledgeCards: seniorInterviewKnowledgeCards,
  examQuestions: seniorInterviewExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "先梳理算法模板与网络高频问答，建立 3-5 个可复用的系统设计澄清脚本。"
    if (percent < 25) return "完成算法与网络基础，同时准备容量估算和数据建模示例。"
    if (percent < 50) return "深入缓存、消息与一致性取舍，形成可讲述的重构与测试案例。"
    if (percent < 75) return "补齐可观测性、安全与稳定性故事，模拟一次系统设计面试。"
    if (percent < 90) return "反复演练行为面试故事，进行两轮综合 Mock 并记录改进。"
    return "进入冲刺：整理 CheckList、提问清单与时间线，保持节奏感。"
  },
  resourceGuide: {
    environment: "准备代码模板库、画图工具（Excalidraw/Miro）、性能与日志分析工具（pprof/Jaeger）以及稳定的网络与耳机。",
    fallbackKeyPoints: [
      "每道系统设计题都先澄清用户规模、SLA 与数据安全要求。",
      "容量估算写出公式与假设，给出扩展方向。",
      "缓存过期时间加入随机化，消息消费必须幂等。",
      "测试策略遵循金字塔，优先构建契约测试与关键路径回归。",
      "可观测性至少覆盖日志、指标、追踪三类信号并串联 trace_id。",
      "行为面试用 STAR/ROI 结构，结果量化并总结反思。",
    ],
    handsOnSteps: [
      "整理 10 道算法模板并复盘错题，记录复杂度。",
      "完成一个系统设计题的容量估算、接口文档与架构图。",
      "实现一个带幂等键的扣款接口，覆盖重试与去重逻辑。",
      "为现有服务添加 Prometheus 指标与 OpenTelemetry 链路。",
      "执行一次金丝雀发布演练，记录回滚步骤。",
      "完成两次 Mock 面试并输出改进行动。",
    ],
    selfChecks: [
      "能在 3 分钟内解释一次握手/拥塞控制与 HTTP/2 差异。",
      "面对系统设计题能给出容量估算与瓶颈分析。",
      "描述一个真实的重构或迁移案例，包含风险与回滚方案。",
      "说出监控/日志/追踪的具体指标或字段。",
      "行为面试回答能量化结果并表达反思。",
    ],
    extensions: [
      "练习中文与英文双语回答，提升多场景适应。",
      "参与社区 Mock 或指导他人，强化表达。",
      "准备白板/在线画图快捷键与模板。",
      "整理常见追问列表并提前写好要点。",
    ],
    lessonQuizAdvice: "每周结束回顾重点概念并自测，错题记录到题库，下一周开始前先复习。",
  },
}
