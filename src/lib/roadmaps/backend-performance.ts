import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const backendPerformanceStages: Stage[] = [
  {
    id: "bp-foundation",
    title: "阶段一：观测与基线",
    duration: "第 1-2 周",
    goal: "建立可测量的性能基线，并用可观察性工具找出瓶颈。",
    weeks: [
      {
        id: "bp-w1",
        title: "第 1 周：性能目标与基准",
        summary: "确定以用户体验和业务指标为导向的性能目标，建立基线。",
        keyPoints: [
          "以 SLO/SLI 描述性能（如 P95 延迟、错误率、吞吐）。",
          "选择代表真实负载的基准（如对关键 API 的冷/热路径压测）。",
          "把性能目标和回归检测纳入发布流程。",
        ],
        lessons: [
          {
            id: "bp-w1-1",
            title: "性能预算与 SLO 设计",
            detail: "通过性能预算约束新功能的复杂度，使用 SLO/SLI 衡量后端接口体验。",
            keyPoints: [
              "把 P95/P99 延迟和错误率作为验收线，而非平均值。",
              "区分冷启动与热路径，针对高峰流量留出余量。",
              "在设计阶段就记录性能假设并验证。",
            ],
            resources: [
              { title: "Google SRE Workbook - SLO", url: "https://sre.google/workbook/implementing-slos/" },
              { title: "Artillery: Performance Budgets", url: "https://www.artillery.io/blog/performance-budgets" },
              { title: "roadmap.sh: Backend Performance", url: "https://roadmap.sh/backend-performance-best-practices" },
            ],
          },
          {
            id: "bp-w1-2",
            title: "可观察性与追踪基础",
            detail: "为关键请求埋点，确保日志、指标、链路追踪可以串联定位瓶颈。",
            keyPoints: [
              "采用结构化日志并附带 Trace/Span ID 便于串联。",
              "RED/USE 指标帮助监控服务负载与错误。",
              "采样策略：对高流量接口使用百分比采样，关键路径全量。",
            ],
            resources: [
              { title: "OpenTelemetry: Getting Started", url: "https://opentelemetry.io/docs/concepts/what-is-opentelemetry/" },
              { title: "Grafana RED Method", url: "https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/" },
              { title: "Honeycomb Guide: Sampling", url: "https://www.honeycomb.io/blog/sampling-101/" },
            ],
          },
        ],
      },
      {
        id: "bp-w2",
        title: "第 2 周：性能画像与瓶颈定位",
        summary: "用分析工具抓热点，找出 CPU、I/O、数据库或网络层面的主要瓶颈。",
        overview: "结合剖析器、数据库慢查询日志与 APM，建立端到端性能画像。",
        lessons: [
          {
            id: "bp-w2-1",
            title: "应用与数据库剖析",
            detail: "定位热点函数与慢 SQL，优先解决最高占比的耗时与锁等待。",
            resources: [
              { title: "Flame Graphs", url: "http://www.brendangregg.com/flamegraphs.html" },
              { title: "PostgreSQL EXPLAIN", url: "https://www.postgresql.org/docs/current/using-explain.html" },
              { title: "MySQL Slow Query Log", url: "https://dev.mysql.com/doc/refman/8.0/en/slow-query-log.html" },
            ],
          },
          {
            id: "bp-w2-2",
            title: "容量与负载模式分析",
            detail: "识别突刺流量和长尾请求，规划水平扩展与队列削峰方案。",
            resources: [
              { title: "AWS Builders' Library: Timeouts", url: "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/" },
              { title: "Nginx Rate Limiting", url: "https://docs.nginx.com/nginx/admin-guide/security-controls/controlling-access-by-key/" },
              { title: "Queueing Theory Primer", url: "https://bravenewgeek.com/you-cant-sacrifice-partition-tolerance/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bp-optimization",
    title: "阶段二：后端热点优化",
    duration: "第 3-4 周",
    goal: "围绕数据访问、缓存与并发模型进行优化，减少延迟与资源占用。",
    weeks: [
      {
        id: "bp-w3",
        title: "第 3 周：缓存与数据访问",
        summary: "为读取/写入路径设计合适的缓存层，减少跨网络与磁盘开销。",
        lessons: [
          {
            id: "bp-w3-1",
            title: "多级缓存策略",
            detail: "区分本地缓存、分布式缓存与 CDN，设计失效、填充与一致性方案。",
            keyPoints: [
              "优先选择幂等或可重试的填充流程，避免缓存击穿。",
              "对写多读少的场景慎用缓存，考虑直写/延迟双删。",
              "监控缓存命中率、TTL 以及 Key 分布，避免热点 Key。",
            ],
            resources: [
              { title: "Caching Strategies", url: "https://engineering.fb.com/2010/04/22/uncategorized/scaling-memcache-at-facebook/" },
              { title: "Redis TTL Patterns", url: "https://redis.io/docs/latest/develop/use/developer-best-practices/expiry/" },
              { title: "roadmap.sh: Cache Best Practices", url: "https://roadmap.sh/guides/cache-best-practices" },
            ],
          },
          {
            id: "bp-w3-2",
            title: "数据库性能与索引",
            detail: "通过索引、分页与批量操作减少查询成本，避免 N+1 与大事务。",
            resources: [
              { title: "Use the Index, Luke!", url: "https://use-the-index-luke.com/" },
              { title: "Hibernate Batch Fetching", url: "https://docs.jboss.org/hibernate/stable/core.old/reference/en/html/batch.html" },
              { title: "PostgreSQL VACUUM", url: "https://www.postgresql.org/docs/current/sql-vacuum.html" },
            ],
          },
        ],
      },
      {
        id: "bp-w4",
        title: "第 4 周：并发与高效 I/O",
        summary: "针对阻塞点选择合适的并发模型与连接池配置，减少上下文切换。",
        lessons: [
          {
            id: "bp-w4-1",
            title: "异步与背压",
            detail: "在高并发场景下使用异步 I/O、连接池和背压机制保护下游。",
            resources: [
              { title: "Backpressure Explained", url: "https://reactivemanifesto.org/glossary#Back-Pressure" },
              { title: "Go net/http Tuning", url: "https://pkg.go.dev/net/http#Server" },
              { title: "Node.js Event Loop Guides", url: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick" },
            ],
          },
          {
            id: "bp-w4-2",
            title: "序列化与传输优化",
            detail: "选择高效的协议与序列化格式，控制负载大小与压缩策略。",
            resources: [
              { title: "gRPC Performance Best Practices", url: "https://grpc.io/docs/guides/performance/" },
              { title: "HTTP/2 vs HTTP/3", url: "https://developer.fastly.com/learning/concepts/http2-http3/" },
              { title: "Protocol Buffers: Optimization", url: "https://developers.google.com/protocol-buffers/docs/techniques" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bp-hardening",
    title: "阶段三：韧性与容量演练",
    duration: "第 5-6 周",
    goal: "通过降级、熔断、容量演练确保在故障与高峰下保持可用与可预期。",
    weeks: [
      {
        id: "bp-w5",
        title: "第 5 周：降级与弹性模式",
        summary: "为核心路径设计降级与熔断，确保在下游故障时快速恢复。",
        lessons: [
          {
            id: "bp-w5-1",
            title: "超时、重试与熔断配置",
            detail: "配置合理的超时、指数退避重试与熔断，避免放大故障。",
            resources: [
              { title: "Istio: Outlier Detection", url: "https://istio.io/latest/docs/tasks/traffic-management/istio-handbook/fault-injection/" },
              { title: "Netflix Hystrix Patterns", url: "https://martinfowler.com/bliki/CircuitBreaker.html" },
              { title: "AWS Jitter Backoff", url: "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/" },
            ],
          },
          {
            id: "bp-w5-2",
            title: "服务降级与缓存兜底",
            detail: "设计灰度降级、只读模式或静态缓存兜底，优先保障核心路径。",
            resources: [
              { title: "Serving Stale Cache", url: "https://cloudflare.com/learning/cdn/glossary/what-is-serve-stale/" },
              { title: "Feature Flags", url: "https://martinfowler.com/articles/feature-toggles.html" },
              { title: "roadmap.sh: API Hardening", url: "https://roadmap.sh/guides/api-security-best-practices" },
            ],
          },
        ],
      },
      {
        id: "bp-w6",
        title: "第 6 周：容量规划与回归防护",
        summary: "演练扩容与降级预案，把性能回归检测自动化。",
        lessons: [
          {
            id: "bp-w6-1",
            title: "容量评估与压测",
            detail: "设计逐步升压的压测场景，结合监控评估安全容量与扩容阈值。",
            resources: [
              { title: "k6 Load Testing", url: "https://k6.io/docs/" },
              { title: "Locust Patterns", url: "https://docs.locust.io/en/stable/writing-a-locustfile.html" },
              { title: "Target Tracking Autoscaling", url: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html" },
            ],
          },
          {
            id: "bp-w6-2",
            title: "性能回归与发布守护",
            detail: "在 CI/CD 中加入性能基线测试与错误预算守护，避免回归上线。",
            resources: [
              { title: "GitHub Actions + k6", url: "https://github.com/grafana/k6-action" },
              { title: "Canary Releases", url: "https://sre.google/sre-book/handling-overload/" },
              { title: "Error Budgets", url: "https://sre.google/sre-book/embracing-risk/#chap-8" },
            ],
          },
        ],
      },
    ],
  },
]

export const backendPerformanceKnowledgeCards: KnowledgeCard[] = [
  {
    id: "bp-observability",
    title: "观测优先",
    summary: "没有数据就无法优化：先让请求能被追踪，再讨论优化。",
    points: [
      "为所有入口请求生成 Trace ID，并在日志、指标、链路中串联。",
      "关注 P95/P99，而非均值；区分热路径与冷启动。",
      "监控变更：为每次发布打标，关联性能波动。",
    ],
    practice: "为最慢的 3 个接口补齐 Trace + 指标，生成火焰图并记录前 3 个热点函数。",
  },
  {
    id: "bp-cache",
    title: "缓存策略",
    summary: "命中率、TTL、填充策略与一致性，共同决定缓存收益。",
    points: [
      "对读多写少的接口使用多级缓存；为写路径设计失效/双删。",
      "设置预算：缓存命中率 < 80% 或 TTL 过短需复盘。",
      "监控热点 Key 与缓存击穿，必要时引入互斥填充或随机 TTL。",
    ],
    practice: "为一个接口设计本地 + Redis 双层缓存，写出命中率与回源率的监控指标。",
  },
  {
    id: "bp-resilience",
    title: "韧性与降级",
    summary: "假设下游一定会出故障，预先设计隔离、熔断与降级。",
    points: [
      "给每个下游调用设置超时、重试与背压，默认不上线无保护的调用。",
      "定义降级矩阵：核心路径兜底方案、可关闭的非核心功能。",
      "定期演练：故障注入、扩容/缩容回归和灰度策略。",
    ],
    practice: "为下游依赖添加熔断 + 退避重试，并在预发布环境注入故障验证。",
  },
]

export const backendPerformanceExamQuestions: QuizQuestion[] = [
  {
    id: "bp-q1",
    question: "在设计 API 性能目标时，以下哪项最合适？",
    options: [
      "以平均延迟 <= 100ms 作为唯一目标",
      "以 P95 延迟、错误率和吞吐量作为 SLI，并与业务 SLO 对齐",
      "只要 CPU 占用不超过 70% 就算达标",
      "以每次发布的代码行数作为性能指标",
    ],
    answer: 1,
    rationale: "SLO/SLI 应体现用户体验，常用 P95/P99 延迟、错误率和吞吐量等可观测指标。",
  },
  {
    id: "bp-q2",
    question: "下列哪种策略最能减少缓存击穿导致的雪崩？",
    options: [
      "让所有请求同时回源重新填充缓存",
      "取消缓存，全部直连数据库",
      "对同一 Key 使用互斥锁/单飞机制，配合随机 TTL",
      "把 TTL 设为 1 秒频繁刷新",
    ],
    answer: 2,
    rationale: "互斥填充能避免大量并发请求同时穿透缓存，随机 TTL 避免同一时间批量失效。",
  },
  {
    id: "bp-q3",
    question: "关于超时与重试，哪项做法更安全？",
    options: [
      "重试次数越多越好，直到成功",
      "超时设置为无限大，只依赖客户端取消",
      "为每个下游设置合理的超时，并使用带抖动的指数退避重试",
      "服务端不需要设置超时，交给网关",
    ],
    answer: 2,
    rationale: "超时与带抖动的指数退避重试可减少放大效应，保护下游并避免同步雪崩。",
  },
  {
    id: "bp-q4",
    question: "在高并发接口中发现数据库连接池耗尽，首要行动是什么？",
    options: [
      "把连接池大小无限增大",
      "立即增加实例数量而不看指标",
      "分析请求模式与慢查询，减少连接持有时间并优化查询",
      "关闭监控避免噪音",
    ],
    answer: 2,
    rationale: "先找出连接被占用的原因（慢查询、未释放、长事务），优化后再调整池大小或扩容。",
  },
  {
    id: "bp-q5",
    question: "关于容量演练，哪项描述正确？",
    options: [
      "只在生产流量下做一次压测即可",
      "压测应从低到高分阶段升压，并与监控/告警联动评估安全容量",
      "压测与发布无关，不需要纳入 CI/CD",
      "压测越快越好，不必等待系统稳定",
    ],
    answer: 1,
    rationale: "分阶段升压结合监控观察瓶颈与安全容量，结果应回馈到扩容与发布流程中。",
  },
]

export const backendPerformanceRoadmap: RoadmapDefinition = {
  id: "backend-performance-best-practices",
  label: "后端性能最佳实践",
  title: "后端性能优化路线：基线、优化与韧性",
  durationLabel: "6 周精进",
  description:
    "以业务 SLO 为导向，从观测、热点优化到韧性演练，系统化提升后端性能与稳定性。路线基于 roadmap.sh Backend Performance 指南扩展而来。",
  heroBadge: "性能诊断",
  stages: backendPerformanceStages,
  knowledgeCards: backendPerformanceKnowledgeCards,
  examQuestions: backendPerformanceExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "从 SLO 与观测起步，先让性能可见再讨论优化。"
    if (percent < 40) return "优先补齐观测和缓存策略，选一条核心链路做端到端画像。"
    if (percent < 70) return "开始演练超时/熔断与压测，把优化成果纳入发布基线。"
    return "保持回归检测与容量演练，把性能改进沉淀为团队准则。"
  },
  resourceGuide: {
    environment: "准备可观测性栈（日志、指标、链路）与压测环境，确保可以重放真实流量。",
    fallbackKeyPoints: [
      "P95/P99 而非均值；区分冷/热路径。",
      "超时、重试、熔断默认开启，参数随环境调整。",
      "缓存命中率与回源率可观测，并有兜底策略。",
    ],
    handsOnSteps: [
      "为关键接口打通 Trace + 指标链路，生成火焰图。",
      "跑一次压测，记录瓶颈与容量；制定优化清单。",
      "为下游调用配置超时/退避重试 + 熔断，并演练降级。",
    ],
    selfChecks: [
      "是否有明确的 SLO/SLI 以及性能预算？",
      "缓存、数据库与队列是否有命中率/延迟/错误监控？",
      "是否定期做容量演练并把结果纳入发布守护？",
    ],
    extensions: [
      "研究 eBPF/系统层剖析，优化内核与网络栈。",
      "引入自动化回归压测，在 CI 中对关键接口打分。",
      "对多租户或多区域部署做跨区域延迟优化。",
    ],
    lessonQuizAdvice: "遇到不熟悉的题目时，先回顾课程里的关键指标与最佳实践，必要时结合压测/监控再确认答案。",
  },
}
