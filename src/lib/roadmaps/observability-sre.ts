import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const observabilitySreStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：可观测性基础（第 1-3 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "obs-foundation",
    title: "阶段一：可观测性基础",
    duration: "第 1-3 周",
    goal: "理解可观测性三支柱，掌握 OpenTelemetry 标准，建立指标、日志、追踪的设计能力。",
    weeks: [
      {
        id: "obs-w1",
        title: "第 1 周：可观测性概念与三支柱",
        summary: "从被动监控到主动可观测，理解日志、指标、追踪的定位与协作关系。",
        overview: "本周建立可观测性的全局认知，理解从传统监控到现代可观测性的演进，掌握日志、指标、追踪三支柱各自的定位与协同方式。",
        keyPoints: [
          "可观测性关注系统内部状态的可推断性，而非仅仅监控已知指标。",
          "三支柱各有侧重：指标看趋势、日志看细节、追踪看链路。",
          "OpenTelemetry 是厂商中立的遥测标准，统一采集与导出。",
        ],
        lessons: [
          {
            id: "obs-w1-1",
            title: "可观测性 vs 监控",
            detail: "理解可观测性的本质：从已知问题的监控，到未知问题的探索与诊断能力。",
            keyPoints: [
              "监控回答'系统是否正常'，可观测性回答'为什么不正常'。",
              "高基数、高维度数据是可观测性的基础。",
              "可观测性成熟度模型：从基础监控到自愈系统。",
            ],
            resources: [
              { title: "Observability Engineering (O'Reilly)", url: "https://www.oreilly.com/library/view/observability-engineering/9781492076438/" },
              { title: "Charity Majors: Observability", url: "https://charity.wtf/tag/observability/" },
              { title: "CNCF Observability Whitepaper", url: "https://github.com/cncf/tag-observability/blob/main/whitepaper.md" },
            ],
          },
          {
            id: "obs-w1-2",
            title: "三支柱：日志、指标、追踪",
            detail: "深入理解三支柱的定位、数据特征与适用场景。",
            keyPoints: [
              "指标（Metrics）：数值型、可聚合、适合趋势与告警。",
              "日志（Logs）：事件型、高细节、适合调试与审计。",
              "追踪（Traces）：因果链、跨服务、适合延迟分析与依赖定位。",
            ],
            resources: [
              { title: "Three Pillars of Observability", url: "https://www.oreilly.com/library/view/distributed-systems-observability/9781492033431/ch04.html" },
              { title: "Grafana: Logs, Metrics, Traces", url: "https://grafana.com/docs/grafana/latest/fundamentals/intro-to-observability/" },
              { title: "Datadog: Observability Pipelines", url: "https://www.datadoghq.com/blog/observability-pipelines/" },
            ],
          },
          {
            id: "obs-w1-3",
            title: "OpenTelemetry 标准",
            detail: "掌握 OpenTelemetry 的架构、核心组件与集成方式。",
            keyPoints: [
              "OTel 统一了 Metrics、Logs、Traces 的采集与导出。",
              "Collector 架构：Receiver → Processor → Exporter。",
              "OTLP 协议是 OTel 的原生传输协议，支持 gRPC 和 HTTP。",
            ],
            resources: [
              { title: "OpenTelemetry: What is OpenTelemetry?", url: "https://opentelemetry.io/docs/concepts/what-is-opentelemetry/" },
              { title: "OTel Collector Architecture", url: "https://opentelemetry.io/docs/collector/architecture/" },
              { title: "OTLP Specification", url: "https://opentelemetry.io/docs/specs/otlp/" },
            ],
          },
        ],
      },
      {
        id: "obs-w2",
        title: "第 2 周：指标体系设计",
        summary: "掌握指标类型、命名规范与方法论，设计有效的指标体系。",
        overview: "本周深入指标体系设计，学习 Counter、Gauge、Histogram、Summary 四种类型的适用场景，掌握 RED 和 USE 方法论指导指标选取。",
        keyPoints: [
          "理解 Counter、Gauge、Histogram、Summary 的语义与适用场景。",
          "RED 方法用于服务指标，USE 方法用于资源指标。",
          "避免高基数标签导致的存储与查询性能问题。",
        ],
        lessons: [
          {
            id: "obs-w2-1",
            title: "指标类型与语义",
            detail: "深入理解 Prometheus 指标类型的数学语义与使用场景。",
            keyPoints: [
              "Counter：单调递增，适合请求数、错误数等累计值。",
              "Gauge：可增可减，适合温度、队列长度等瞬时值。",
              "Histogram：分布统计，适合延迟分位数（P50/P95/P99）。",
            ],
            resources: [
              { title: "Prometheus: Metric Types", url: "https://prometheus.io/docs/concepts/metric_types/" },
              { title: "Histogram vs Summary", url: "https://prometheus.io/docs/practices/histograms/" },
              { title: "OpenTelemetry Metrics", url: "https://opentelemetry.io/docs/concepts/signals/metrics/" },
            ],
          },
          {
            id: "obs-w2-2",
            title: "RED 与 USE 方法论",
            detail: "使用 RED 和 USE 方法论系统化设计监控指标。",
            keyPoints: [
              "RED：Rate（请求率）、Errors（错误率）、Duration（延迟）。",
              "USE：Utilization（利用率）、Saturation（饱和度）、Errors（错误）。",
              "RED 面向服务，USE 面向资源，两者互补。",
            ],
            resources: [
              { title: "Google SRE: Monitoring Distributed Systems", url: "https://sre.google/sre-book/monitoring-distributed-systems/" },
              { title: "Brendan Gregg: USE Method", url: "https://www.brendangregg.com/usemethod.html" },
              { title: "Grafana: RED Method", url: "https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/" },
            ],
          },
          {
            id: "obs-w2-3",
            title: "指标命名与标签规范",
            detail: "设计可维护、可查询的指标命名与标签体系。",
            keyPoints: [
              "Prometheus 命名约定：snake_case，包含单位后缀（_seconds, _bytes）。",
              "避免高基数标签：user_id、request_id 等不应作为标签。",
              "使用一致的标签键：service、instance、env、region。",
            ],
            resources: [
              { title: "Prometheus: Naming Best Practices", url: "https://prometheus.io/docs/practices/naming/" },
              { title: "Grafana: Label Best Practices", url: "https://grafana.com/blog/2022/02/15/what-are-cardinality-spikes-and-why-do-they-matter/" },
              { title: "OpenTelemetry Semantic Conventions", url: "https://opentelemetry.io/docs/specs/semconv/" },
            ],
          },
        ],
      },
      {
        id: "obs-w3",
        title: "第 3 周：结构化日志与分布式追踪",
        summary: "设计结构化日志体系，理解分布式追踪的原理与采样策略。",
        overview: "本周学习用 JSON 格式输出结构化日志并统一关联字段，理解 Trace、Span 和 Context Propagation 的工作原理与采样策略选择。",
        keyPoints: [
          "结构化日志便于机器解析，应包含 Trace ID 实现关联。",
          "分布式追踪通过 Context Propagation 串联跨服务调用。",
          "采样策略在成本与可观测性之间取得平衡。",
        ],
        lessons: [
          {
            id: "obs-w3-1",
            title: "结构化日志设计",
            detail: "设计可查询、可关联的结构化日志体系。",
            keyPoints: [
              "使用 JSON 格式，包含 timestamp、level、message、context。",
              "日志中嵌入 trace_id、span_id 实现与追踪关联。",
              "日志级别策略：生产环境默认 INFO，动态调整支持。",
            ],
            resources: [
              { title: "Structured Logging Best Practices", url: "https://www.dataset.com/blog/the-10-commandments-of-logging/" },
              { title: "OpenTelemetry Logs", url: "https://opentelemetry.io/docs/concepts/signals/logs/" },
              { title: "12 Factor App: Logs", url: "https://12factor.net/logs" },
            ],
          },
          {
            id: "obs-w3-2",
            title: "分布式追踪原理",
            detail: "理解 Trace、Span 模型与跨服务上下文传播机制。",
            keyPoints: [
              "Trace 是一次完整请求的链路，由多个 Span 组成。",
              "Span 包含 operation、duration、attributes、events。",
              "Context Propagation 通过 HTTP Header 传递 trace_id。",
            ],
            resources: [
              { title: "OpenTelemetry: Traces", url: "https://opentelemetry.io/docs/concepts/signals/traces/" },
              { title: "W3C Trace Context", url: "https://www.w3.org/TR/trace-context/" },
              { title: "Jaeger: Architecture", url: "https://www.jaegertracing.io/docs/architecture/" },
            ],
          },
          {
            id: "obs-w3-3",
            title: "采样策略",
            detail: "在成本与可观测性之间设计合理的采样策略。",
            keyPoints: [
              "头部采样：在请求入口决定是否采样，简单但可能丢失异常。",
              "尾部采样：在链路结束后决定，可基于延迟/错误保留重要链路。",
              "自适应采样：根据流量动态调整采样率。",
            ],
            resources: [
              { title: "OpenTelemetry: Sampling", url: "https://opentelemetry.io/docs/concepts/sampling/" },
              { title: "Tail-based Sampling", url: "https://opentelemetry.io/docs/collector/tail-based-sampling/" },
              { title: "Jaeger: Sampling", url: "https://www.jaegertracing.io/docs/sampling/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：Grafana LGTM 栈实战（第 4-6 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "obs-lgtm",
    title: "阶段二：Grafana LGTM 栈实战",
    duration: "第 4-6 周",
    goal: "掌握 Grafana 开源可观测性栈：Prometheus/Mimir 指标、Loki 日志、Tempo 追踪、Grafana 可视化。",
    weeks: [
      {
        id: "obs-w4",
        title: "第 4 周：Prometheus 与 Mimir",
        summary: "掌握 Prometheus 监控生态与 Mimir 长期存储方案。",
        overview: "本周实践 Prometheus 拉取模型与 PromQL 查询语言，学习 Alertmanager 告警路由配置，以及使用 Mimir 实现指标的长期存储与高可用。",
        keyPoints: [
          "Prometheus 采用拉取模型，通过服务发现自动发现目标。",
          "PromQL 是强大的时序查询语言，支持向量运算与聚合。",
          "Mimir 提供多租户、长期存储与水平扩展能力。",
        ],
        lessons: [
          {
            id: "obs-w4-1",
            title: "Prometheus 架构与部署",
            detail: "理解 Prometheus 的拉取模型、存储结构与部署方式。",
            keyPoints: [
              "拉取模型：Prometheus 主动抓取目标的 /metrics 端点。",
              "服务发现：支持 Kubernetes、Consul、文件等多种方式。",
              "Exporter 生态：Node Exporter、cAdvisor、业务自定义。",
            ],
            resources: [
              { title: "Prometheus: Overview", url: "https://prometheus.io/docs/introduction/overview/" },
              { title: "Prometheus: Configuration", url: "https://prometheus.io/docs/prometheus/latest/configuration/configuration/" },
              { title: "Prometheus Operator", url: "https://prometheus-operator.dev/" },
            ],
          },
          {
            id: "obs-w4-2",
            title: "PromQL 查询语言",
            detail: "掌握 PromQL 的向量选择、聚合函数与常用查询模式。",
            keyPoints: [
              "即时向量 vs 范围向量：point-in-time vs time-range。",
              "聚合函数：sum、avg、max、min、count、quantile。",
              "Recording Rules：预计算复杂查询，提升查询性能。",
            ],
            resources: [
              { title: "PromQL Basics", url: "https://prometheus.io/docs/prometheus/latest/querying/basics/" },
              { title: "PromQL Operators", url: "https://prometheus.io/docs/prometheus/latest/querying/operators/" },
              { title: "Awesome PromQL", url: "https://github.com/roaldnefs/awesome-prometheus#promql" },
            ],
          },
          {
            id: "obs-w4-3",
            title: "Mimir 长期存储",
            detail: "使用 Mimir 实现 Prometheus 的长期存储与水平扩展。",
            keyPoints: [
              "Mimir 兼容 Prometheus 远程写入协议。",
              "多租户支持：通过 X-Scope-OrgID 隔离不同团队数据。",
              "对象存储后端：S3、GCS、Azure Blob 等。",
            ],
            resources: [
              { title: "Grafana Mimir", url: "https://grafana.com/oss/mimir/" },
              { title: "Mimir: Getting Started", url: "https://grafana.com/docs/mimir/latest/get-started/" },
              { title: "Mimir Architecture", url: "https://grafana.com/docs/mimir/latest/references/architecture/" },
            ],
          },
        ],
      },
      {
        id: "obs-w5",
        title: "第 5 周：Loki 与 Tempo",
        summary: "掌握 Loki 日志聚合与 Tempo 分布式追踪系统。",
        overview: "本周学习 Loki 的标签索引日志聚合方案与 LogQL 查询，以及 Tempo 的全量追踪存储架构，实现日志与追踪的关联分析。",
        keyPoints: [
          "Loki 只索引标签，日志内容存储在对象存储，成本低。",
          "Tempo 无索引设计，通过 Trace ID 直接查询。",
          "Alloy 是新一代统一遥测收集器，替代 Promtail 和 Agent。",
        ],
        lessons: [
          {
            id: "obs-w5-1",
            title: "Loki 日志聚合",
            detail: "理解 Loki 的设计理念与 LogQL 查询语言。",
            keyPoints: [
              "Loki 设计原则：只索引元数据标签，不索引日志内容。",
              "LogQL：类似 PromQL 的日志查询语言，支持过滤与聚合。",
              "与 Prometheus 标签对齐，实现指标与日志关联。",
            ],
            resources: [
              { title: "Grafana Loki", url: "https://grafana.com/oss/loki/" },
              { title: "LogQL Documentation", url: "https://grafana.com/docs/loki/latest/query/" },
              { title: "Loki Best Practices", url: "https://grafana.com/docs/loki/latest/best-practices/" },
            ],
          },
          {
            id: "obs-w5-2",
            title: "Tempo 分布式追踪",
            detail: "使用 Tempo 存储和查询分布式追踪数据。",
            keyPoints: [
              "无索引设计：仅通过 Trace ID 查询，存储成本极低。",
              "TraceQL：Tempo 的追踪查询语言，支持结构化搜索。",
              "Trace 到 Logs/Metrics 关联：通过 Exemplars 和标签。",
            ],
            resources: [
              { title: "Grafana Tempo", url: "https://grafana.com/oss/tempo/" },
              { title: "TraceQL Documentation", url: "https://grafana.com/docs/tempo/latest/traceql/" },
              { title: "Tempo: Getting Started", url: "https://grafana.com/docs/tempo/latest/getting-started/" },
            ],
          },
          {
            id: "obs-w5-3",
            title: "Grafana Alloy 收集器",
            detail: "使用 Alloy 统一收集指标、日志、追踪数据。",
            keyPoints: [
              "Alloy 是 Grafana Agent 的下一代，基于 River 配置语言。",
              "支持 OpenTelemetry Collector 组件，可替代 OTel Collector。",
              "Pipeline 式配置：source → transform → destination。",
            ],
            resources: [
              { title: "Grafana Alloy", url: "https://grafana.com/docs/alloy/latest/" },
              { title: "Alloy: Concepts", url: "https://grafana.com/docs/alloy/latest/concepts/" },
              { title: "Migration from Agent", url: "https://grafana.com/docs/alloy/latest/set-up/migrate/" },
            ],
          },
        ],
      },
      {
        id: "obs-w6",
        title: "第 6 周：Grafana 可视化与告警",
        summary: "设计有效的仪表盘，配置告警规则与关联分析。",
        overview: "本周学习 Grafana 仪表盘设计原则，掌握面板布局与变量模板化技巧，配置多数据源告警规则并实现指标、日志、追踪的关联分析。",
        keyPoints: [
          "仪表盘设计应遵循信息层次：概览 → 详情 → 调试。",
          "Alertmanager 处理告警路由、分组、静默与通知。",
          "Exemplars 实现指标到追踪的关联跳转。",
        ],
        lessons: [
          {
            id: "obs-w6-1",
            title: "仪表盘设计原则",
            detail: "设计清晰、可操作的监控仪表盘。",
            keyPoints: [
              "信息层次：高层概览 → 服务详情 → 实例调试。",
              "变量模板：使用变量实现仪表盘复用与过滤。",
              "注解（Annotations）：标记部署、事故等关键事件。",
            ],
            resources: [
              { title: "Grafana: Dashboard Best Practices", url: "https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/" },
              { title: "Grafana: Variables", url: "https://grafana.com/docs/grafana/latest/dashboards/variables/" },
              { title: "Grafana: Annotations", url: "https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/annotate-visualizations/" },
            ],
          },
          {
            id: "obs-w6-2",
            title: "告警规则配置",
            detail: "配置 Prometheus 告警规则与 Alertmanager 路由。",
            keyPoints: [
              "告警规则：expr + for + labels + annotations。",
              "Alertmanager 路由：基于标签匹配路由到不同接收者。",
              "静默与抑制：维护期间静默，避免告警级联。",
            ],
            resources: [
              { title: "Prometheus: Alerting Rules", url: "https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/" },
              { title: "Alertmanager Configuration", url: "https://prometheus.io/docs/alerting/latest/configuration/" },
              { title: "Grafana Alerting", url: "https://grafana.com/docs/grafana/latest/alerting/" },
            ],
          },
          {
            id: "obs-w6-3",
            title: "日志/指标/追踪关联",
            detail: "实现三支柱数据的无缝关联与跳转。",
            keyPoints: [
              "Exemplars：在指标中嵌入 Trace ID，实现点击跳转。",
              "标签对齐：指标、日志、追踪使用一致的标签。",
              "Grafana Explore：统一界面查询和关联所有数据。",
            ],
            resources: [
              { title: "Grafana: Exemplars", url: "https://grafana.com/docs/grafana/latest/fundamentals/exemplars/" },
              { title: "Correlating Signals", url: "https://grafana.com/blog/2022/03/01/how-to-correlate-metrics-logs-and-traces-in-grafana/" },
              { title: "Grafana Explore", url: "https://grafana.com/docs/grafana/latest/explore/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：Datadog 企业级方案（第 7-8 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "obs-datadog",
    title: "阶段三：Datadog 企业级方案",
    duration: "第 7-8 周",
    goal: "了解 Datadog 一体化可观测性平台的核心功能与企业级特性。",
    weeks: [
      {
        id: "obs-w7",
        title: "第 7 周：Datadog 核心功能",
        summary: "掌握 Datadog Agent、APM、日志管理与 RUM 的核心能力。",
        overview: "本周学习 Datadog 商业可观测性平台，部署 Agent 采集基础设施指标，使用 APM 追踪应用性能，集成日志管理与真实用户监控。",
        keyPoints: [
          "Datadog Agent 是数据采集的核心，支持 1000+ 集成。",
          "APM 提供自动追踪、服务地图与错误追踪。",
          "Log Pipeline 实现日志解析、富化与索引策略。",
        ],
        lessons: [
          {
            id: "obs-w7-1",
            title: "Agent 与集成",
            detail: "理解 Datadog Agent 架构与集成生态。",
            keyPoints: [
              "Agent 组件：核心采集器、APM Trace Agent、日志收集器。",
              "DDOT Collector：Datadog 的 OpenTelemetry Collector 发行版。",
              "集成市场：1000+ 预置集成，覆盖云服务、数据库、中间件。",
            ],
            resources: [
              { title: "Datadog Agent", url: "https://docs.datadoghq.com/agent/" },
              { title: "Datadog Integrations", url: "https://docs.datadoghq.com/integrations/" },
              { title: "OpenTelemetry in Datadog", url: "https://docs.datadoghq.com/opentelemetry/" },
            ],
          },
          {
            id: "obs-w7-2",
            title: "APM 与服务地图",
            detail: "使用 Datadog APM 进行分布式追踪与性能分析。",
            keyPoints: [
              "自动追踪：支持 Java、Python、Go、Node.js 等语言。",
              "服务地图：可视化服务依赖与调用关系。",
              "错误追踪：自动聚合异常，关联代码位置。",
            ],
            resources: [
              { title: "Datadog APM", url: "https://docs.datadoghq.com/tracing/" },
              { title: "Service Map", url: "https://docs.datadoghq.com/tracing/services/service_map/" },
              { title: "Error Tracking", url: "https://docs.datadoghq.com/tracing/error_tracking/" },
            ],
          },
          {
            id: "obs-w7-3",
            title: "日志管理与 RUM",
            detail: "使用 Datadog 进行日志分析与真实用户监控。",
            keyPoints: [
              "Log Pipeline：解析、富化、过滤日志流。",
              "Indexes：根据保留策略和查询频率分层存储。",
              "RUM：真实用户性能监控，Session Replay 回放。",
            ],
            resources: [
              { title: "Datadog Log Management", url: "https://docs.datadoghq.com/logs/" },
              { title: "Log Pipeline", url: "https://docs.datadoghq.com/logs/log_configuration/pipelines/" },
              { title: "Real User Monitoring", url: "https://docs.datadoghq.com/real_user_monitoring/" },
            ],
          },
        ],
      },
      {
        id: "obs-w8",
        title: "第 8 周：Datadog 高级能力",
        summary: "探索 Synthetic 监控、AI 辅助分析与成本管理。",
        overview: "本周探索 Datadog 的高级能力，使用 Synthetic 监控模拟用户行为，利用 Watchdog AI 自动发现异常，并学习标签治理与成本优化策略。",
        keyPoints: [
          "Synthetic 监控主动探测 API 和页面可用性。",
          "Bits AI 利用大模型加速根因分析。",
          "用量优化是控制 Datadog 成本的关键。",
        ],
        lessons: [
          {
            id: "obs-w8-1",
            title: "Synthetic 监控",
            detail: "使用 Synthetic 测试主动监控关键用户旅程。",
            keyPoints: [
              "API 测试：定期探测 API 健康状态与响应时间。",
              "浏览器测试：模拟用户操作，验证关键流程。",
              "多地域探测：从全球多个位置检测可用性。",
            ],
            resources: [
              { title: "Synthetic Monitoring", url: "https://docs.datadoghq.com/synthetics/" },
              { title: "API Tests", url: "https://docs.datadoghq.com/synthetics/api_tests/" },
              { title: "Browser Tests", url: "https://docs.datadoghq.com/synthetics/browser_tests/" },
            ],
          },
          {
            id: "obs-w8-2",
            title: "Bits AI 与智能分析",
            detail: "利用 Datadog AI 能力加速问题诊断与分析。",
            keyPoints: [
              "Bits AI：自动调查告警、分析根因、建议修复。",
              "Watchdog：自动检测异常模式，无需手动配置阈值。",
              "LLM 可观测性：监控 AI Agent 性能与成本。",
            ],
            resources: [
              { title: "Bits AI", url: "https://www.datadoghq.com/product/platform/bits-ai/" },
              { title: "Watchdog", url: "https://docs.datadoghq.com/watchdog/" },
              { title: "LLM Observability", url: "https://docs.datadoghq.com/llm_observability/" },
            ],
          },
          {
            id: "obs-w8-3",
            title: "成本管理",
            detail: "优化 Datadog 使用，控制可观测性成本。",
            keyPoints: [
              "用量监控：追踪指标、日志、追踪的用量趋势。",
              "采样与过滤：合理配置采样率，过滤无价值数据。",
              "索引策略：区分热数据与冷数据，优化保留策略。",
            ],
            resources: [
              { title: "Usage Metrics", url: "https://docs.datadoghq.com/account_management/billing/usage_metrics/" },
              { title: "Log Cost Control", url: "https://docs.datadoghq.com/logs/guide/logs-cost-management/" },
              { title: "APM Ingestion Controls", url: "https://docs.datadoghq.com/tracing/trace_pipeline/ingestion_controls/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：SRE 核心实践（第 9-12 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "obs-sre-core",
    title: "阶段四：SRE 核心实践",
    duration: "第 9-12 周",
    goal: "掌握 SLO 工程、错误预算、Toil 消除与可靠性设计模式。",
    weeks: [
      {
        id: "obs-w9",
        title: "第 9 周：SLO/SLI/SLA 工程",
        summary: "定义有意义的服务水平目标，建立可靠性度量体系。",
        overview: "本周进入 SRE 实践，学习如何从用户视角定义 SLI 指标、设定 SLO 目标，理解 SLA 的业务承诺含义，建立以数据驱动的可靠性度量体系。",
        keyPoints: [
          "SLI 是可测量的服务质量指标，SLO 是目标值。",
          "选择用户可感知的 SLI，而非内部技术指标。",
          "SLA 是对外承诺，应留有 SLO 与 SLA 之间的缓冲。",
        ],
        lessons: [
          {
            id: "obs-w9-1",
            title: "定义有意义的 SLI",
            detail: "选择能反映用户体验的服务水平指标。",
            keyPoints: [
              "可用性 SLI：成功请求比例（排除客户端错误）。",
              "延迟 SLI：P50/P95/P99 延迟分位数。",
              "正确性 SLI：返回正确结果的请求比例。",
            ],
            resources: [
              { title: "Google SRE: Service Level Objectives", url: "https://sre.google/sre-book/service-level-objectives/" },
              { title: "SRE Workbook: Implementing SLOs", url: "https://sre.google/workbook/implementing-slos/" },
              { title: "The Art of SLOs", url: "https://sre.google/resources/practices-and-processes/art-of-slos/" },
            ],
          },
          {
            id: "obs-w9-2",
            title: "SLO 目标设定",
            detail: "制定合理的 SLO 目标与测量方法。",
            keyPoints: [
              "从用户期望和业务需求反推 SLO 目标。",
              "滚动窗口 vs 日历窗口：30 天滚动窗口更平滑。",
              "多层 SLO：区分关键用户旅程与非关键功能。",
            ],
            resources: [
              { title: "Setting SLOs", url: "https://sre.google/workbook/slo-document/" },
              { title: "SLO Engineering", url: "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos" },
              { title: "Sloth: SLO Generator", url: "https://sloth.dev/" },
            ],
          },
          {
            id: "obs-w9-3",
            title: "SLA 与业务对齐",
            detail: "理解 SLA 的业务含义与法律责任。",
            keyPoints: [
              "SLA 是对客户的承诺，违约可能导致赔偿。",
              "SLO 应严于 SLA，预留缓冲应对意外。",
              "定期与业务团队对齐 SLO，确保反映用户价值。",
            ],
            resources: [
              { title: "SLAs vs SLOs vs SLIs", url: "https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli" },
              { title: "Cloud SLA Examples", url: "https://cloud.google.com/terms/sla" },
              { title: "SLA Best Practices", url: "https://sre.google/sre-book/availability-table/" },
            ],
          },
        ],
      },
      {
        id: "obs-w10",
        title: "第 10 周：错误预算与发布",
        summary: "使用错误预算平衡可靠性与创新速度。",
        overview: "本周学习错误预算的计算与管理方法，理解如何用预算消耗数据驱动发布决策，在系统可靠性与产品迭代速度之间找到最优平衡点。",
        keyPoints: [
          "错误预算 = 1 - SLO，是可接受的不可靠时间。",
          "预算消耗速率指导发布节奏与风险承担。",
          "预算耗尽时应优先修复而非发布新功能。",
        ],
        lessons: [
          {
            id: "obs-w10-1",
            title: "错误预算模型",
            detail: "理解错误预算的计算与消耗机制。",
            keyPoints: [
              "99.9% SLO 意味着每月 43.2 分钟的错误预算。",
              "预算消耗 = SLO 违规时间 / 总时间。",
              "实时追踪预算剩余，提前预警。",
            ],
            resources: [
              { title: "Error Budgets", url: "https://sre.google/sre-book/embracing-risk/" },
              { title: "Error Budget Policy", url: "https://sre.google/workbook/error-budget-policy/" },
              { title: "Calculating Error Budgets", url: "https://cloud.google.com/blog/products/devops-sre/shrinking-the-time-to-mitigate-production-incidents" },
            ],
          },
          {
            id: "obs-w10-2",
            title: "基于预算的发布决策",
            detail: "将错误预算消耗状态与 CI/CD 发布流程结合，动态决定是否允许发布。",
            keyPoints: [
              "预算充足时：鼓励快速迭代、承担更多风险。",
              "预算紧张时：减缓发布、增加测试、优先修复。",
              "自动化检查：CI/CD 集成预算状态检查。",
            ],
            resources: [
              { title: "Release Engineering", url: "https://sre.google/sre-book/release-engineering/" },
              { title: "Progressive Delivery", url: "https://www.split.io/glossary/progressive-delivery/" },
              { title: "Feature Flags for SRE", url: "https://launchdarkly.com/blog/what-is-an-error-budget/" },
            ],
          },
          {
            id: "obs-w10-3",
            title: "可靠性与速度平衡",
            detail: "在创新速度与系统稳定性之间取得平衡。",
            keyPoints: [
              "100% 可靠性既不可能也不经济。",
              "创新预算：预留部分预算用于风险实验。",
              "灰度发布、金丝雀发布降低单次发布风险。",
            ],
            resources: [
              { title: "Risk and Error Budgets", url: "https://sre.google/sre-book/embracing-risk/" },
              { title: "Canary Releases", url: "https://martinfowler.com/bliki/CanaryRelease.html" },
              { title: "Blue-Green Deployments", url: "https://martinfowler.com/bliki/BlueGreenDeployment.html" },
            ],
          },
        ],
      },
      {
        id: "obs-w11",
        title: "第 11 周：Toil 与自动化",
        summary: "识别和消除 Toil，提升运维自动化水平。",
        keyPoints: [
          "Toil 是手动、重复、可自动化但无持久价值的工作。",
          "Runbook 是自动化的第一步，先文档化再自动化。",
          "目标是让系统自愈，而非人工响应每个事件。",
        ],
        lessons: [
          {
            id: "obs-w11-1",
            title: "Toil 识别与量化",
            detail: "识别团队中的 Toil 并量化其影响。",
            keyPoints: [
              "Toil 特征：手动、重复、可自动化、反应式、无持久价值。",
              "Toil 预算：SRE 团队 Toil 时间不应超过 50%。",
              "量化方法：追踪时间花费，识别高频低价值任务。",
            ],
            resources: [
              { title: "Eliminating Toil", url: "https://sre.google/sre-book/eliminating-toil/" },
              { title: "Measuring Toil", url: "https://sre.google/workbook/eliminating-toil/" },
              { title: "Toil Taxonomy", url: "https://cloud.google.com/blog/products/devops-sre/identifying-and-tracking-toil-using-sre-principles" },
            ],
          },
          {
            id: "obs-w11-2",
            title: "Runbook 与自动化",
            detail: "编写 Runbook 并逐步自动化常见操作。",
            keyPoints: [
              "Runbook：标准化操作手册，包含步骤、检查点、回滚。",
              "自动化优先级：高频、低风险、可标准化的任务。",
              "半自动化：人工审批 + 自动执行。",
            ],
            resources: [
              { title: "Writing Runbooks", url: "https://www.pagerduty.com/resources/learn/what-is-a-runbook/" },
              { title: "Automating Runbooks", url: "https://www.atlassian.com/incident-management/on-call/runbooks" },
              { title: "PagerDuty Runbook Automation", url: "https://www.pagerduty.com/platform/automation/runbook-automation/" },
            ],
          },
          {
            id: "obs-w11-3",
            title: "容量规划",
            detail: "基于数据预测容量需求，避免资源不足或浪费。",
            keyPoints: [
              "负载建模：理解流量模式、季节性、增长趋势。",
              "资源利用率目标：既非过载也非闲置。",
              "扩缩容策略：基于指标自动扩缩，预留突发余量。",
            ],
            resources: [
              { title: "Capacity Planning", url: "https://sre.google/sre-book/software-engineering-in-sre/" },
              { title: "Load Testing", url: "https://k6.io/docs/" },
              { title: "Kubernetes HPA", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/" },
            ],
          },
        ],
      },
      {
        id: "obs-w12",
        title: "第 12 周：可靠性设计模式",
        summary: "掌握熔断、限流、重试等可靠性设计模式。",
        keyPoints: [
          "熔断器防止故障级联，快速失败优于缓慢失败。",
          "限流保护系统不被过载流量压垮。",
          "重试需要配合退避和抖动，避免重试风暴。",
        ],
        lessons: [
          {
            id: "obs-w12-1",
            title: "熔断与限流",
            detail: "使用熔断器和限流保护服务免受级联故障。",
            keyPoints: [
              "熔断器状态：Closed → Open → Half-Open。",
              "限流算法：令牌桶、漏桶、滑动窗口。",
              "配置策略：基于 SLO 设定阈值，避免过于敏感。",
            ],
            resources: [
              { title: "Circuit Breaker Pattern", url: "https://martinfowler.com/bliki/CircuitBreaker.html" },
              { title: "Rate Limiting Strategies", url: "https://cloud.google.com/architecture/rate-limiting-strategies-techniques" },
              { title: "Resilience4j", url: "https://resilience4j.readme.io/docs/circuitbreaker" },
            ],
          },
          {
            id: "obs-w12-2",
            title: "重试与超时",
            detail: "正确配置重试和超时策略，避免放大故障。",
            keyPoints: [
              "指数退避：每次重试间隔翻倍，减少服务器压力。",
              "抖动（Jitter）：随机化重试间隔，避免同步重试。",
              "超时预算：端到端超时分解到各个环节。",
            ],
            resources: [
              { title: "AWS: Timeouts, Retries, Backoff", url: "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/" },
              { title: "Retry Best Practices", url: "https://cloud.google.com/architecture/best-practices-for-retry-logic" },
              { title: "Deadline Propagation", url: "https://sre.google/sre-book/addressing-cascading-failures/" },
            ],
          },
          {
            id: "obs-w12-3",
            title: "优雅降级",
            detail: "设计系统在部分故障时提供降级服务。",
            keyPoints: [
              "功能降级：关闭非核心功能，保障核心路径。",
              "静态回退：缓存失效时返回静态默认值。",
              "故障域隔离：隔离不同租户、地域、功能的故障。",
            ],
            resources: [
              { title: "Graceful Degradation", url: "https://www.infoq.com/articles/microservices-graceful-degradation/" },
              { title: "Bulkhead Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead" },
              { title: "Fallback Strategies", url: "https://blog.pragmaticengineer.com/resiliency-in-distributed-systems/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段五：告警与事故管理（第 13-15 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "obs-incident",
    title: "阶段五：告警与事故管理",
    duration: "第 13-15 周",
    goal: "设计有效的告警策略，掌握 On-call 与事故响应流程。",
    weeks: [
      {
        id: "obs-w13",
        title: "第 13 周：告警策略设计",
        summary: "设计低噪声、高信号的告警体系。",
        keyPoints: [
          "告警疲劳是可靠性的敌人，每个告警都应可操作。",
          "基于 SLO 的告警比基于阈值更有意义。",
          "分级告警确保正确的人在正确的时间收到通知。",
        ],
        lessons: [
          {
            id: "obs-w13-1",
            title: "告警疲劳与噪声控制",
            detail: "减少告警噪声，提高告警信噪比。",
            keyPoints: [
              "告警疲劳导致真正重要的告警被忽略。",
              "告警收敛：相同问题只发一次告警。",
              "智能分组：基于时间、服务、症状聚合告警。",
            ],
            resources: [
              { title: "Alerting Philosophy", url: "https://sre.google/sre-book/practical-alerting/" },
              { title: "Alert Fatigue", url: "https://www.pagerduty.com/resources/learn/what-is-alert-fatigue/" },
              { title: "Reducing Alert Noise", url: "https://grafana.com/blog/2020/02/25/how-to-cut-through-the-noise-and-get-to-relevant-alerts/" },
            ],
          },
          {
            id: "obs-w13-2",
            title: "分级告警与路由",
            detail: "设计告警严重度分级与路由策略。",
            keyPoints: [
              "严重度分级：Critical（立即响应）、Warning（工作时间）、Info（记录）。",
              "路由规则：基于服务、环境、严重度路由到不同团队。",
              "升级策略：无响应时自动升级到备份或主管。",
            ],
            resources: [
              { title: "Alert Severity Levels", url: "https://www.atlassian.com/incident-management/incident-priority" },
              { title: "Alertmanager Routing", url: "https://prometheus.io/docs/alerting/latest/configuration/#route" },
              { title: "PagerDuty Escalation", url: "https://support.pagerduty.com/docs/escalation-policies" },
            ],
          },
          {
            id: "obs-w13-3",
            title: "基于 SLO 的告警",
            detail: "使用错误预算燃烧率和多窗口策略设计基于 SLO 的高质量告警规则。",
            keyPoints: [
              "燃烧率告警：预算消耗速度超过阈值时告警。",
              "多窗口告警：短窗口检测突发，长窗口检测趋势。",
              "症状告警优于原因告警：关注用户影响而非技术细节。",
            ],
            resources: [
              { title: "SLO-based Alerting", url: "https://sre.google/workbook/alerting-on-slos/" },
              { title: "Burn Rate Alerts", url: "https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/alerting-on-budget-burn-rate" },
              { title: "Sloth Alerting", url: "https://sloth.dev/usage/alerting/" },
            ],
          },
        ],
      },
      {
        id: "obs-w14",
        title: "第 14 周：PagerDuty 与 On-call",
        summary: "建立可持续的 On-call 轮班制度与事故响应能力。",
        keyPoints: [
          "健康的 On-call 是可持续的，不应导致倦怠。",
          "PagerDuty 是事故管理的核心平台。",
          "AI Agent 可以自动化诊断与排班管理。",
        ],
        lessons: [
          {
            id: "obs-w14-1",
            title: "On-call 轮班设计",
            detail: "设计公平、可持续的 On-call 轮班制度。",
            keyPoints: [
              "轮班周期：每周轮换，避免单人长期 On-call。",
              "影子班次：新人跟随老人学习，逐步承担责任。",
              "冲突管理：处理请假、节假日等特殊情况。",
            ],
            resources: [
              { title: "Being On-Call", url: "https://sre.google/sre-book/being-on-call/" },
              { title: "On-Call Best Practices", url: "https://www.pagerduty.com/resources/learn/on-call-best-practices/" },
              { title: "Healthy On-Call", url: "https://increment.com/on-call/sustainable-on-call/" },
            ],
          },
          {
            id: "obs-w14-2",
            title: "PagerDuty 核心功能",
            detail: "掌握 PagerDuty 的事件路由、升级与集成。",
            keyPoints: [
              "事件路由：基于规则将告警路由到正确团队。",
              "升级策略：无响应时自动升级。",
              "ChatOps 集成：Slack/Teams 中直接响应与协作。",
            ],
            resources: [
              { title: "PagerDuty Services", url: "https://support.pagerduty.com/docs/services" },
              { title: "PagerDuty Escalation", url: "https://support.pagerduty.com/docs/escalation-policies" },
              { title: "Slack Integration", url: "https://support.pagerduty.com/docs/slack-integration-guide" },
            ],
          },
          {
            id: "obs-w14-3",
            title: "AI Agent 应用",
            detail: "使用 PagerDuty AI Agent 自动化事故管理。",
            keyPoints: [
              "SRE Agent：自动上下文关联、诊断建议、Runbook 生成。",
              "Scribe Agent：会议转录，生成结构化状态更新。",
              "Shift Agent：自动检测并解决排班冲突。",
            ],
            resources: [
              { title: "PagerDuty AI", url: "https://www.pagerduty.com/platform/aiops/" },
              { title: "SRE Agent", url: "https://www.pagerduty.com/blog/product/product-launch-2025-h2/" },
              { title: "Automation Actions", url: "https://support.pagerduty.com/docs/automation-actions" },
            ],
          },
        ],
      },
      {
        id: "obs-w15",
        title: "第 15 周：事故响应流程",
        summary: "建立结构化的事故响应流程与复盘文化。",
        keyPoints: [
          "Incident Commander 模型明确事故中的角色分工。",
          "事故生命周期：检测 → 响应 → 修复 → 复盘。",
          "无责复盘关注系统改进，而非个人问责。",
        ],
        lessons: [
          {
            id: "obs-w15-1",
            title: "Incident Commander 模型",
            detail: "使用 IC 模型组织事故响应团队。",
            keyPoints: [
              "Incident Commander：协调全局，不直接修复。",
              "Scribe：记录时间线、决策、行动。",
              "Subject Matter Expert：各领域专家执行诊断与修复。",
            ],
            resources: [
              { title: "Incident Command System", url: "https://www.pagerduty.com/resources/learn/what-is-incident-command-system/" },
              { title: "PagerDuty Incident Response", url: "https://response.pagerduty.com/" },
              { title: "Atlassian Incident Management", url: "https://www.atlassian.com/incident-management" },
            ],
          },
          {
            id: "obs-w15-2",
            title: "事故生命周期",
            detail: "理解事故从检测到关闭的完整生命周期。",
            keyPoints: [
              "检测：告警或用户报告触发事故。",
              "响应：召集团队、沟通状态、执行诊断。",
              "修复：实施缓解措施、验证恢复。",
            ],
            resources: [
              { title: "Incident Lifecycle", url: "https://www.atlassian.com/incident-management/incident-response" },
              { title: "MTTR Metrics", url: "https://www.pagerduty.com/resources/learn/what-is-mttr/" },
              { title: "Communication During Incidents", url: "https://response.pagerduty.com/during/communication/" },
            ],
          },
          {
            id: "obs-w15-3",
            title: "事后复盘 (Postmortem)",
            detail: "建立无责复盘文化，持续改进系统。",
            keyPoints: [
              "无责文化：关注系统而非个人，鼓励诚实。",
              "根因分析：5 Whys、鱼骨图等方法。",
              "行动项跟踪：确保改进措施落地。",
            ],
            resources: [
              { title: "Postmortem Culture", url: "https://sre.google/sre-book/postmortem-culture/" },
              { title: "Blameless Postmortems", url: "https://www.atlassian.com/incident-management/postmortem/blameless" },
              { title: "Jeli Postmortem", url: "https://www.jeli.io/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段六：混沌工程与韧性（第 16-17 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "obs-chaos",
    title: "阶段六：混沌工程与韧性",
    duration: "第 16-17 周",
    goal: "通过混沌工程主动发现系统弱点，构建韧性架构。",
    weeks: [
      {
        id: "obs-w16",
        title: "第 16 周：混沌工程原理",
        summary: "理解混沌工程原则，实践故障注入。",
        keyPoints: [
          "混沌工程通过受控实验验证系统对故障的容忍度。",
          "最小爆炸半径原则：从小范围开始，逐步扩大。",
          "GameDay 是团队演练事故响应的重要方式。",
        ],
        lessons: [
          {
            id: "obs-w16-1",
            title: "混沌工程原则",
            detail: "理解混沌工程的核心原则与实践方法。",
            keyPoints: [
              "建立稳态假设：定义系统正常行为的指标。",
              "设计实验：假设、变量、预期结果。",
              "最小化爆炸半径：从生产流量的 1% 开始。",
            ],
            resources: [
              { title: "Principles of Chaos", url: "https://principlesofchaos.org/" },
              { title: "Chaos Engineering (O'Reilly)", url: "https://www.oreilly.com/library/view/chaos-engineering/9781492043850/" },
              { title: "Netflix Chaos Engineering", url: "https://netflixtechblog.com/tagged/chaos-engineering" },
            ],
          },
          {
            id: "obs-w16-2",
            title: "故障注入实践",
            detail: "使用 Chaos Monkey、Litmus 和 Gremlin 等工具在生产环境进行故障注入实验。",
            keyPoints: [
              "Chaos Monkey：随机终止生产实例。",
              "Litmus：Kubernetes 原生混沌工程平台。",
              "Gremlin：商业级故障注入平台。",
            ],
            resources: [
              { title: "Chaos Monkey", url: "https://netflix.github.io/chaosmonkey/" },
              { title: "LitmusChaos", url: "https://litmuschaos.io/" },
              { title: "Gremlin", url: "https://www.gremlin.com/" },
            ],
          },
          {
            id: "obs-w16-3",
            title: "GameDay 演练",
            detail: "组织 GameDay 演练事故响应能力。",
            keyPoints: [
              "场景设计：模拟真实故障场景。",
              "演练执行：注入故障，观察响应。",
              "复盘改进：记录问题，制定改进计划。",
            ],
            resources: [
              { title: "AWS GameDay", url: "https://aws.amazon.com/gameday/" },
              { title: "GameDay Guide", url: "https://www.gremlin.com/community/tutorials/how-to-run-a-gameday/" },
              { title: "Disaster Recovery Testing", url: "https://cloud.google.com/architecture/dr-scenarios-planning-guide" },
            ],
          },
        ],
      },
      {
        id: "obs-w17",
        title: "第 17 周：生产环境韧性",
        summary: "设计具备高韧性的生产架构。",
        keyPoints: [
          "故障域隔离限制故障影响范围。",
          "依赖治理确保核心路径不依赖不可靠服务。",
          "灾备设计需要定期演练验证。",
        ],
        lessons: [
          {
            id: "obs-w17-1",
            title: "故障域与爆炸半径",
            detail: "通过架构设计限制故障影响范围。",
            keyPoints: [
              "单元架构：将用户分片到独立单元。",
              "区域隔离：多可用区或多区域部署。",
              "功能隔离：核心与非核心功能分离部署。",
            ],
            resources: [
              { title: "Blast Radius", url: "https://www.infoq.com/articles/blast-radius-pattern/" },
              { title: "Cell-based Architecture", url: "https://aws.amazon.com/solutions/guidance/cell-based-architecture-on-aws/" },
              { title: "Multi-Region Deployment", url: "https://cloud.google.com/architecture/designing-reliable-systems" },
            ],
          },
          {
            id: "obs-w17-2",
            title: "依赖治理",
            detail: "区分强依赖与弱依赖，管理服务间依赖关系以提高系统整体韧性。",
            keyPoints: [
              "依赖分级：区分强依赖与弱依赖。",
              "弱依赖降级：非核心依赖故障时降级而非失败。",
              "循环依赖检测：避免 A→B→C→A 的依赖环。",
            ],
            resources: [
              { title: "Dependency Management", url: "https://sre.google/sre-book/addressing-cascading-failures/" },
              { title: "Loose Coupling", url: "https://microservices.io/patterns/decomposition/decompose-by-business-capability.html" },
              { title: "Service Mesh", url: "https://istio.io/latest/docs/concepts/what-is-istio/" },
            ],
          },
          {
            id: "obs-w17-3",
            title: "容灾与恢复",
            detail: "设计 RTO/RPO 目标，建立主备切换机制并定期演练灾难恢复能力。",
            keyPoints: [
              "RTO/RPO：恢复时间目标与恢复点目标。",
              "灾备切换：主动切换 vs 被动切换。",
              "数据一致性：异步复制的数据丢失风险。",
            ],
            resources: [
              { title: "Disaster Recovery", url: "https://cloud.google.com/architecture/dr-scenarios-planning-guide" },
              { title: "RTO vs RPO", url: "https://www.druva.com/blog/understanding-rpo-and-rto" },
              { title: "Active-Active vs Active-Passive", url: "https://cloud.google.com/architecture/high-availability-deployment-options" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段七：高级可观测性（第 18-20 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "obs-advanced",
    title: "阶段七：高级可观测性",
    duration: "第 18-20 周",
    goal: "探索持续剖析、eBPF 内核观测与 AIOps 等前沿话题。",
    weeks: [
      {
        id: "obs-w18",
        title: "第 18 周：持续剖析",
        summary: "使用 Continuous Profiling 定位生产环境性能问题。",
        keyPoints: [
          "持续剖析以低开销持续收集生产环境的性能数据。",
          "火焰图是分析 CPU、内存、锁等问题的利器。",
          "剖析数据可与追踪关联，精确定位热点。",
        ],
        lessons: [
          {
            id: "obs-w18-1",
            title: "Continuous Profiling 概念",
            detail: "理解持续剖析的价值与实现原理。",
            keyPoints: [
              "传统剖析需要重启或附加，持续剖析始终在线。",
              "低开销采样：通常 < 2% CPU 开销。",
              "剖析类型：CPU、堆内存、分配、锁、阻塞。",
            ],
            resources: [
              { title: "Continuous Profiling", url: "https://www.cncf.io/blog/2022/05/31/what-is-continuous-profiling/" },
              { title: "Profiling 101", url: "https://jvns.ca/blog/2017/12/17/how-do-ruby---python-profilers-work-/" },
              { title: "Grafana Pyroscope", url: "https://grafana.com/oss/pyroscope/" },
            ],
          },
          {
            id: "obs-w18-2",
            title: "Pyroscope / Parca 实战",
            detail: "使用 Pyroscope 和 Parca 等开源工具在生产环境中进行持续性能剖析。",
            keyPoints: [
              "Pyroscope：Grafana 的持续剖析解决方案。",
              "Parca：CNCF 孵化项目，与 eBPF 结合。",
              "火焰图分析：宽度代表时间占比，深度代表调用栈。",
            ],
            resources: [
              { title: "Pyroscope Getting Started", url: "https://grafana.com/docs/pyroscope/latest/get-started/" },
              { title: "Parca", url: "https://www.parca.dev/" },
              { title: "Flame Graphs", url: "https://www.brendangregg.com/flamegraphs.html" },
            ],
          },
          {
            id: "obs-w18-3",
            title: "生产环境剖析策略",
            detail: "控制采样率和隐私风险，在生产环境中安全部署和使用持续剖析方案。",
            keyPoints: [
              "采样率控制：平衡数据粒度与开销。",
              "隐私考量：剖析数据可能包含敏感信息。",
              "与追踪关联：Span 级别的剖析数据。",
            ],
            resources: [
              { title: "Production Profiling", url: "https://www.datadoghq.com/product/code-profiling/" },
              { title: "Async Profiler", url: "https://github.com/async-profiler/async-profiler" },
              { title: "Go pprof", url: "https://pkg.go.dev/net/http/pprof" },
            ],
          },
        ],
      },
      {
        id: "obs-w19",
        title: "第 19 周：eBPF 内核观测",
        summary: "使用 eBPF 实现深度内核级可观测性。",
        keyPoints: [
          "eBPF 允许在内核中安全运行自定义程序。",
          "eBPF 工具链可观测网络、系统调用、进程等。",
          "Cilium Hubble 提供 Kubernetes 网络可观测性。",
        ],
        lessons: [
          {
            id: "obs-w19-1",
            title: "eBPF 原理",
            detail: "理解 eBPF 的工作原理与安全机制。",
            keyPoints: [
              "eBPF 程序在内核沙箱中运行，安全验证器确保安全。",
              "探针类型：kprobe、tracepoint、XDP、tc。",
              "Map：eBPF 程序与用户态共享数据的机制。",
            ],
            resources: [
              { title: "What is eBPF?", url: "https://ebpf.io/what-is-ebpf/" },
              { title: "eBPF & XDP Reference", url: "https://docs.cilium.io/en/latest/reference-guides/bpf/" },
              { title: "Brendan Gregg: eBPF", url: "https://www.brendangregg.com/ebpf.html" },
            ],
          },
          {
            id: "obs-w19-2",
            title: "eBPF 工具链",
            detail: "使用 bpftrace、bcc 等工具进行内核观测。",
            keyPoints: [
              "bpftrace：高级 eBPF 追踪语言，类似 awk。",
              "bcc：BPF Compiler Collection，Python/Lua 前端。",
              "常用工具：execsnoop、opensnoop、tcplife 等。",
            ],
            resources: [
              { title: "bpftrace", url: "https://github.com/bpftrace/bpftrace" },
              { title: "BCC Tools", url: "https://github.com/iovisor/bcc" },
              { title: "BPF Performance Tools", url: "https://www.brendangregg.com/bpf-performance-tools-book.html" },
            ],
          },
          {
            id: "obs-w19-3",
            title: "Cilium Hubble",
            detail: "使用 Hubble 实现 Kubernetes 网络可观测性。",
            keyPoints: [
              "Hubble：Cilium 的网络可观测性组件。",
              "服务地图：可视化 Pod 间的网络流量。",
              "L7 可见性：HTTP/gRPC 协议级观测。",
            ],
            resources: [
              { title: "Cilium Hubble", url: "https://docs.cilium.io/en/stable/gettingstarted/hubble/" },
              { title: "Hubble UI", url: "https://docs.cilium.io/en/stable/gettingstarted/hubble-ui/" },
              { title: "Network Observability", url: "https://isovalent.com/blog/post/cilium-hubble-network-observability/" },
            ],
          },
        ],
      },
      {
        id: "obs-w20",
        title: "第 20 周：AIOps 与智能运维",
        summary: "探索 AI 在可观测性与运维中的应用。",
        keyPoints: [
          "异常检测利用机器学习识别非正常模式。",
          "智能告警通过 AI 降低噪声，提高信噪比。",
          "LLM 可用于自然语言查询与 Runbook 生成。",
        ],
        lessons: [
          {
            id: "obs-w20-1",
            title: "异常检测算法",
            detail: "使用机器学习进行时序异常检测。",
            keyPoints: [
              "统计方法：标准差、四分位距、季节性分解。",
              "机器学习：Isolation Forest、DBSCAN、LSTM。",
              "评估指标：精确率、召回率、误报率。",
            ],
            resources: [
              { title: "Anomaly Detection", url: "https://aws.amazon.com/what-is/anomaly-detection/" },
              { title: "Time Series Anomaly Detection", url: "https://www.anodot.com/learning-center/time-series-anomaly-detection/" },
              { title: "Datadog Watchdog", url: "https://docs.datadoghq.com/watchdog/" },
            ],
          },
          {
            id: "obs-w20-2",
            title: "智能告警与降噪",
            detail: "使用 AI 驱动的告警聚合、根因推断和自动分类来提高告警质量和降噪。",
            keyPoints: [
              "告警聚合：基于相关性自动聚合相关告警。",
              "根因推断：从症状推断可能的根因。",
              "自动分类：区分真正问题与误报。",
            ],
            resources: [
              { title: "AIOps Overview", url: "https://www.ibm.com/topics/aiops" },
              { title: "Alert Correlation", url: "https://www.moogsoft.com/resources/aiops-explained/alert-correlation/" },
              { title: "Root Cause Analysis with AI", url: "https://www.dynatrace.com/platform/root-cause-analysis/" },
            ],
          },
          {
            id: "obs-w20-3",
            title: "LLM 在可观测性中的应用",
            detail: "探索大语言模型在运维中的应用场景。",
            keyPoints: [
              "自然语言查询：用自然语言查询指标和日志。",
              "智能分析：AI 解释复杂的监控数据。",
              "Runbook 生成：基于历史事故自动生成操作手册。",
            ],
            resources: [
              { title: "Datadog Bits AI", url: "https://www.datadoghq.com/product/platform/bits-ai/" },
              { title: "Grafana AI", url: "https://grafana.com/blog/2023/06/26/grafana-assistant-natural-language-to-grafana-queries/" },
              { title: "LLM for Observability", url: "https://thenewstack.io/llms-in-observability-the-promise-of-natural-language-queries/" },
            ],
          },
        ],
      },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════
// 知识卡片
// ═══════════════════════════════════════════════════════════════
export const observabilitySreKnowledgeCards: KnowledgeCard[] = [
  {
    id: "obs-kc-1",
    title: "可观测性三支柱",
    summary: "日志、指标、追踪是可观测性的三大支柱，各有侧重，相互补充。",
    points: [
      "指标（Metrics）：数值型、可聚合，适合趋势分析与告警",
      "日志（Logs）：事件型、高细节，适合调试与审计",
      "追踪（Traces）：因果链、跨服务，适合延迟分析与依赖定位",
      "OpenTelemetry 统一了三者的采集与导出标准",
    ],
    practice: "为一个服务同时配置指标、日志、追踪，并通过 Trace ID 实现关联查询。",
  },
  {
    id: "obs-kc-2",
    title: "SLO/SLI/SLA",
    summary: "SLI 是可测量的指标，SLO 是目标值，SLA 是对外承诺。",
    points: [
      "SLI：Service Level Indicator，如可用性、延迟分位数",
      "SLO：Service Level Objective，如 99.9% 可用性",
      "SLA：Service Level Agreement，违约可能导致赔偿",
      "SLO 应严于 SLA，预留缓冲应对意外",
    ],
    practice: "为你的核心服务定义 SLI，设定 SLO 目标，并配置基于错误预算燃烧率的告警。",
  },
  {
    id: "obs-kc-3",
    title: "错误预算",
    summary: "错误预算是 SLO 允许的不可靠时间，用于平衡可靠性与创新速度。",
    points: [
      "错误预算 = 1 - SLO（如 99.9% SLO 意味着每月 43.2 分钟预算）",
      "预算充足时鼓励快速迭代，预算紧张时优先修复",
      "预算消耗速率指导发布决策",
      "燃烧率告警提前预警预算耗尽",
    ],
    practice: "计算你的服务的月度错误预算，追踪预算消耗情况。",
  },
  {
    id: "obs-kc-4",
    title: "RED 与 USE 方法",
    summary: "RED 用于服务监控，USE 用于资源监控。",
    points: [
      "RED：Rate（请求率）、Errors（错误率）、Duration（延迟）",
      "USE：Utilization（利用率）、Saturation（饱和度）、Errors（错误）",
      "RED 面向服务，USE 面向资源，两者互补",
      "Google 的四大黄金信号：延迟、流量、错误、饱和度",
    ],
    practice: "为你的服务仪表盘添加 RED 指标，为基础设施添加 USE 指标。",
  },
  {
    id: "obs-kc-5",
    title: "告警设计原则",
    summary: "好的告警应该是可操作的，减少噪声，基于症状而非原因。",
    points: [
      "每个告警都应该是可操作的，需要人工干预",
      "基于 SLO 的告警比基于阈值的告警更有意义",
      "燃烧率告警：短窗口检测突发，长窗口检测趋势",
      "症状告警优于原因告警：关注用户影响而非技术细节",
    ],
    practice: "审查现有告警，删除不可操作的告警，将阈值告警改为 SLO 告警。",
  },
  {
    id: "obs-kc-6",
    title: "事故响应流程",
    summary: "结构化的事故响应流程确保高效协作与快速恢复。",
    points: [
      "Incident Commander：协调全局，不直接修复",
      "检测 → 响应 → 修复 → 复盘 完整生命周期",
      "无责复盘：关注系统改进，而非个人问责",
      "行动项跟踪确保改进措施落地",
    ],
    practice: "为团队制定事故响应手册，包含角色分工、沟通模板、升级策略。",
  },
  {
    id: "obs-kc-7",
    title: "混沌工程原则",
    summary: "通过受控实验主动发现系统弱点，提高韧性。",
    points: [
      "建立稳态假设：定义系统正常行为的指标",
      "最小化爆炸半径：从小范围开始，逐步扩大",
      "自动化实验：让混沌工程成为持续实践",
      "GameDay 演练：团队协作应对模拟故障",
    ],
    practice: "设计一个简单的混沌实验，如随机终止一个 Pod，观察系统反应。",
  },
  {
    id: "obs-kc-8",
    title: "LGTM 栈",
    summary: "Grafana 的开源可观测性栈：Loki + Grafana + Tempo + Mimir。",
    points: [
      "Loki：日志聚合，只索引标签，成本低",
      "Grafana：可视化仪表盘与告警",
      "Tempo：分布式追踪，无索引设计",
      "Mimir：长期指标存储，Prometheus 兼容",
    ],
    practice: "使用 grafana/otel-lgtm Docker 镜像快速搭建完整可观测性环境。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const observabilitySreExamQuestions: QuizQuestion[] = [
  {
    id: "obs-q1",
    question: "可观测性的三大支柱是什么？",
    options: ["日志、指标、追踪", "监控、告警、仪表盘", "CPU、内存、磁盘", "延迟、吞吐、错误"],
    answer: 0,
    rationale: "可观测性的三大支柱是日志（Logs）、指标（Metrics）、追踪（Traces），它们分别提供事件细节、数值趋势和因果链路。",
  },
  {
    id: "obs-q2",
    question: "OpenTelemetry 的原生传输协议是什么？",
    options: ["HTTP/JSON", "OTLP", "Prometheus Remote Write", "StatsD"],
    answer: 1,
    rationale: "OTLP（OpenTelemetry Protocol）是 OpenTelemetry 的原生传输协议，支持 gRPC 和 HTTP 两种传输方式。",
  },
  {
    id: "obs-q3",
    question: "Prometheus 中用于表示可增可减的瞬时值的指标类型是？",
    options: ["Counter", "Gauge", "Histogram", "Summary"],
    answer: 1,
    rationale: "Gauge 用于表示可增可减的瞬时值，如温度、队列长度等。Counter 是单调递增的累计值。",
  },
  {
    id: "obs-q4",
    question: "RED 方法中的三个指标是什么？",
    options: ["Rate, Errors, Duration", "Request, Event, Data", "Read, Execute, Delete", "Resource, Environment, Dependency"],
    answer: 0,
    rationale: "RED 方法关注服务的三个关键指标：Rate（请求率）、Errors（错误率）、Duration（延迟）。",
  },
  {
    id: "obs-q5",
    question: "99.9% SLO 意味着每月允许多少分钟的不可用时间？",
    options: ["4.32 分钟", "43.2 分钟", "432 分钟", "8.64 分钟"],
    answer: 1,
    rationale: "99.9% SLO 意味着 0.1% 的错误预算。一个月按 30 天计算是 43200 分钟，0.1% 即 43.2 分钟。",
  },
  {
    id: "obs-q6",
    question: "以下哪个不是 Grafana LGTM 栈的组成部分？",
    options: ["Loki", "Grafana", "Prometheus", "Mimir"],
    answer: 2,
    rationale: "LGTM 栈由 Loki（日志）、Grafana（可视化）、Tempo（追踪）、Mimir（指标）组成。Prometheus 是独立项目，Mimir 是其长期存储扩展。",
  },
  {
    id: "obs-q7",
    question: "Loki 的设计特点是什么？",
    options: ["全文索引日志内容", "只索引标签，不索引日志内容", "使用 SQL 查询", "需要 Elasticsearch 后端"],
    answer: 1,
    rationale: "Loki 的设计原则是只索引元数据标签，不索引日志内容，这大大降低了存储成本。",
  },
  {
    id: "obs-q8",
    question: "在事故响应中，Incident Commander 的主要职责是？",
    options: ["直接修复问题", "协调全局，不直接修复", "编写事后报告", "值班接警"],
    answer: 1,
    rationale: "Incident Commander 负责协调整个事故响应过程，包括资源调配、沟通协调等，但不直接参与技术修复工作。",
  },
  {
    id: "obs-q9",
    question: "混沌工程中的'最小爆炸半径'原则是指？",
    options: ["使用最小的服务器", "从小范围开始实验，逐步扩大", "只在测试环境进行", "减少代码变更量"],
    answer: 1,
    rationale: "最小爆炸半径原则建议从小范围开始混沌实验（如生产流量的 1%），验证安全后再逐步扩大范围。",
  },
  {
    id: "obs-q10",
    question: "eBPF 程序运行在哪里？",
    options: ["用户态进程", "Docker 容器", "内核沙箱", "虚拟机"],
    answer: 2,
    rationale: "eBPF 程序在内核的沙箱中运行，经过安全验证器确保安全性，可以高效地观测内核事件。",
  },
  {
    id: "obs-q11",
    question: "以下哪个是尾部采样（Tail-based Sampling）的优势？",
    options: ["实现简单", "可以基于完整链路信息决定采样", "开销更低", "不需要 Collector"],
    answer: 1,
    rationale: "尾部采样在链路结束后决定是否保留，可以基于完整链路信息（如延迟、错误）做决策，保留更有价值的追踪数据。",
  },
  {
    id: "obs-q12",
    question: "Toil 的定义是什么？",
    options: ["所有运维工作", "手动、重复、可自动化但无持久价值的工作", "紧急修复工作", "值班工作"],
    answer: 1,
    rationale: "Toil 是手动、重复、可自动化、反应式、无持久价值的工作。SRE 团队应将 Toil 控制在 50% 以下。",
  },
  {
    id: "obs-q13",
    question: "基于 SLO 的告警通常使用什么指标？",
    options: ["CPU 使用率", "错误预算燃烧率", "请求数量", "磁盘空间"],
    answer: 1,
    rationale: "基于 SLO 的告警使用错误预算燃烧率，当预算消耗速度超过阈值时告警，比固定阈值更能反映用户影响。",
  },
  {
    id: "obs-q14",
    question: "PagerDuty 的 SRE Agent 可以做什么？",
    options: ["替代值班工程师", "自动上下文关联、诊断建议、Runbook 生成", "自动修复所有问题", "编写代码"],
    answer: 1,
    rationale: "PagerDuty SRE Agent 可以自动关联相关事故上下文、提供诊断建议、生成自更新的 Runbook，但仍需人工决策和执行。",
  },
  {
    id: "obs-q15",
    question: "Grafana 中的 Exemplars 用于什么？",
    options: ["展示示例代码", "实现指标到追踪的关联跳转", "存储日志样本", "配置告警规则"],
    answer: 1,
    rationale: "Exemplars 在指标数据点中嵌入 Trace ID，实现从指标图表直接跳转到相关追踪数据。",
  },
  {
    id: "obs-q16",
    question: "熔断器的三个状态是什么？",
    options: ["Open, Closed, Locked", "Closed, Open, Half-Open", "Start, Stop, Pause", "Active, Inactive, Pending"],
    answer: 1,
    rationale: "熔断器有三个状态：Closed（正常）、Open（熔断）、Half-Open（试探恢复）。",
  },
  {
    id: "obs-q17",
    question: "Continuous Profiling 的典型开销是多少？",
    options: ["10-20%", "< 2%", "5-10%", "0%"],
    answer: 1,
    rationale: "现代持续剖析工具通常使用采样技术，开销控制在 2% 以下，可以在生产环境长期运行。",
  },
  {
    id: "obs-q18",
    question: "无责复盘（Blameless Postmortem）的核心原则是？",
    options: ["找出责任人", "关注系统改进，而非个人问责", "快速关闭事故", "减少复盘时间"],
    answer: 1,
    rationale: "无责复盘关注系统和流程的改进机会，而非追究个人责任，鼓励诚实分享以发现根本问题。",
  },
  {
    id: "obs-q19",
    question: "Cilium Hubble 主要用于什么？",
    options: ["代码编译", "Kubernetes 网络可观测性", "日志管理", "数据库监控"],
    answer: 1,
    rationale: "Hubble 是 Cilium 的网络可观测性组件，提供 Kubernetes 集群中 Pod 间网络流量的可视化和 L7 协议级观测。",
  },
  {
    id: "obs-q20",
    question: "以下哪个是重试策略的最佳实践？",
    options: ["固定间隔重试", "无限重试直到成功", "指数退避加抖动", "同步重试所有请求"],
    answer: 2,
    rationale: "指数退避（每次重试间隔翻倍）加抖动（随机化间隔）可以有效避免重试风暴，减少服务器压力。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const observabilitySreRoadmap: RoadmapDefinition = {
  id: "observability-sre",
  label: "可观测性与 SRE",
  title: "可观测性与 SRE",
  durationLabel: "20 个主题",
  description:
    "从可观测性三支柱与 OpenTelemetry 标准入手，实战 Grafana LGTM 开源栈与 Datadog 企业方案，深入 SLO 工程、错误预算、告警策略与 On-call 实践，掌握 PagerDuty 事故管理、混沌工程与韧性设计，探索 eBPF 内核观测与 AIOps 前沿话题。",
  heroBadge: "从监控到可靠性工程",
  stages: observabilitySreStages,
  knowledgeCards: observabilitySreKnowledgeCards,
  examQuestions: observabilitySreExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始你的可观测性与 SRE 学习之旅吧！先从三支柱和 OpenTelemetry 开始。"
    if (percent < 25) return "继续学习可观测性基础，掌握指标、日志、追踪的设计与实现。"
    if (percent < 50) return "你已经掌握了基础！现在深入 Grafana LGTM 和 Datadog 实战。"
    if (percent < 75) return "SRE 核心实践是关键！重点理解 SLO 工程、错误预算和告警设计。"
    if (percent < 100) return "即将完成！混沌工程和高级可观测性将帮助你构建更可靠的系统。"
    return "恭喜完成！你已掌握可观测性与 SRE 的完整知识体系，可以构建高可靠的生产系统了。"
  },
  resourceGuide: {
    environment:
      "推荐使用 Docker 或 Kubernetes 环境搭建 LGTM 栈进行实践。可以使用 grafana/otel-lgtm 镜像快速启动完整环境。Datadog 提供免费试用。",
    fallbackKeyPoints: [
      "可观测性三支柱：日志、指标、追踪",
      "OpenTelemetry 是厂商中立的遥测标准",
      "SLO 是可测量的服务水平目标，错误预算是可接受的不可靠时间",
      "告警应该是可操作的，基于症状而非原因",
      "无责复盘关注系统改进，而非个人问责",
    ],
    handsOnSteps: [
      "使用 OpenTelemetry SDK 为应用添加指标、日志、追踪",
      "部署 Grafana LGTM 栈，配置仪表盘和告警",
      "为核心服务定义 SLI 和 SLO，配置燃烧率告警",
      "设计 On-call 轮班制度和事故响应流程",
      "进行一次简单的混沌工程实验",
    ],
    selfChecks: [
      "能否解释可观测性与监控的区别？",
      "能否为一个服务设计 SLI 并设定 SLO？",
      "能否使用 PromQL 编写复杂查询？",
      "能否设计低噪声的告警策略？",
      "能否组织一次结构化的事故响应？",
    ],
    extensions: [
      "深入 eBPF 内核观测技术",
      "探索 AIOps 和智能运维",
      "学习大规模可观测性系统的架构",
      "研究可观测性驱动开发（ODD）",
    ],
    lessonQuizAdvice: "每周完成后进行测验，重点关注 SLO 计算、告警设计和事故响应流程。",
  },
}
