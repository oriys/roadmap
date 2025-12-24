import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week22Guides: Record<string, LessonGuide> = {
    "w22-1": {
        lessonId: "w22-1",
        background: [
            "【结构化日志定义】结构化日志是机器可解析的日志格式（通常是 JSON）：'Structured logging produces logs in a consistent, machine-readable format'。每条日志是键值对集合，支持索引和查询。",
            "【日志级别标准】通用日志级别：TRACE（最详细）、DEBUG（开发调试）、INFO（正常事件）、WARN（潜在问题）、ERROR（错误但可恢复）、FATAL（致命错误）。生产环境通常设置为 INFO 或以上。",
            "【OWASP 日志安全】OWASP Logging Cheat Sheet：'Never log sensitive data such as passwords, credit card numbers, or session identifiers'。日志应包含：时间戳、日志级别、事件类型、用户/会话标识（脱敏）、结果。",
            "【上下文传播】结构化日志的关键是上下文：request_id、trace_id、user_id、service_name。这些字段使得跨服务的日志可以关联，支持分布式追踪。",
            "【日志采样】高流量系统需要采样策略：'Sample logs at ingestion time to reduce storage costs while maintaining visibility'。保留所有 ERROR 级别，采样 INFO 级别。使用 trace_id 确保同一请求的所有日志保留或丢弃。"
        ],
        keyDifficulties: [
            "【日志格式选择】JSON 日志可读性差但查询强大；纯文本可读但解析困难。折中方案：开发环境用人类可读格式，生产环境用 JSON。使用日志库统一格式。",
            "【敏感数据处理】日志中的敏感数据：密码、Token、信用卡号、个人信息。处理方式：脱敏（masking）、哈希、完全不记录。使用日志框架的过滤器自动处理。",
            "【日志级别滥用】常见问题：INFO 级别过多导致噪音、ERROR 级别用于非错误场景。原则：INFO 记录业务事件，DEBUG 记录技术细节，ERROR 只用于需要处理的错误。",
            "【高基数字段】避免在日志中使用高基数字段作为索引：user_id（百万级）、request_id（无限）。这会导致索引膨胀。使用 trace_id 关联，按需查询原始日志。"
        ],
        handsOnPath: [
            "使用结构化日志库：const logger = pino({ level: 'info' }); logger.info({ userId, action: 'login', success: true }, 'User logged in');",
            "添加请求上下文：app.use((req, res, next) => { req.log = logger.child({ requestId: uuid(), traceId: req.headers['x-trace-id'] }); next(); });",
            "实现敏感数据过滤：const redact = ['password', 'creditCard', 'ssn']; const logger = pino({ redact });",
            "配置日志级别：LOG_LEVEL=info node app.js // 通过环境变量控制",
            "输出 JSON 格式：logger.info({ event: 'order_created', orderId: '123', amount: 99.99, currency: 'USD' });"
        ],
        selfCheck: [
            "结构化日志与传统文本日志的区别是什么？",
            "OWASP 建议哪些数据不应该记录？",
            "六个标准日志级别是什么？",
            "如何在日志中传播请求上下文？",
            "高基数字段为什么会导致问题？"
        ],
        extensions: [
            "研究 OpenTelemetry Logs 规范。",
            "学习日志库对比：pino vs winston vs bunyan。",
            "了解 GDPR 对日志存储的合规要求。",
            "研究日志审计与安全分析。"
        ],
        sourceUrls: [
            "https://www.dataset.com/blog/the-10-commandments-of-logging/",
            "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html",
            "https://sematext.com/blog/logging-levels/"
        ]
    },
    "w22-2": {
        lessonId: "w22-2",
        background: [
            "【Loki 架构理念】Grafana Loki 是'like Prometheus, but for logs'：只索引标签（labels），不索引日志内容。这使得存储成本大幅降低，但查询需要标签过滤后再全文搜索。",
            "【Loki 组件架构】Loki 三大组件：Distributor（接收日志）、Ingester（写入存储）、Querier（查询处理）。使用对象存储（S3、GCS）作为持久化层，本地文件系统做缓存。",
            "【ELK Stack 对比】Elasticsearch + Logstash + Kibana：全文索引、强大的搜索能力、高存储成本。Loki：标签索引、低存储成本、需要标签设计。选择取决于查询模式和预算。",
            "【Promtail 采集器】Promtail 是 Loki 的日志采集 agent：'discovers targets, attaches labels, and pushes logs to Loki'。支持文件采集、Journal、Docker、Kubernetes Pod 日志。",
            "【LogQL 查询语言】LogQL 是 Loki 的查询语言，类似 PromQL：标签选择器 + 日志管道。示例：{app=\"nginx\"} |= \"error\" | json | line_format \"{{.message}}\"。"
        ],
        keyDifficulties: [
            "【标签设计原则】Loki 标签应低基数：app、env、namespace、pod 名称。避免高基数：request_id、user_id、IP 地址。高基数标签会创建过多流，影响性能。",
            "【ELK vs PLG 选型】ELK 适合：需要复杂全文搜索、已有 Elasticsearch 基础设施。PLG（Promtail/Loki/Grafana）适合：已用 Prometheus、成本敏感、日志量大但查询简单。",
            "【日志解析管道】Loki 在查询时解析日志（而非摄入时）。管道操作符：|=（包含）、!=（不包含）、|~（正则）、| json（解析 JSON）、| logfmt（解析 logfmt）。",
            "【多租户与保留策略】Loki 支持多租户：X-Scope-OrgID header 隔离数据。保留策略按租户配置：retention_period 控制数据保留时间，compactor 负责清理过期数据。"
        ],
        handsOnPath: [
            "安装 Loki Stack：helm install loki grafana/loki-stack --set promtail.enabled=true",
            "配置 Promtail：scrape_configs: [{ job_name: app, static_configs: [{ targets: [localhost], labels: { job: app, __path__: /var/log/app.log } }] }]",
            "LogQL 查询示例：{namespace=\"production\", app=\"api\"} |= \"error\" | json | rate(5m)",
            "配置标签：在日志中添加静态标签：promtail relabel_configs 提取动态标签",
            "设置保留策略：table_manager: { retention_deletes_enabled: true, retention_period: 720h }"
        ],
        selfCheck: [
            "Loki 与 Elasticsearch 的索引策略有什么区别？",
            "Loki 的三大核心组件是什么？",
            "为什么 Loki 标签应该保持低基数？",
            "LogQL 的基本语法是什么？",
            "什么场景适合用 ELK，什么场景适合用 PLG？"
        ],
        extensions: [
            "研究 Loki 的分布式模式部署。",
            "学习 Grafana Explore 的日志-指标关联功能。",
            "了解 FluentBit 作为 Promtail 的替代。",
            "研究日志压缩和存储优化策略。"
        ],
        sourceUrls: [
            "https://grafana.com/docs/loki/latest/get-started/overview/",
            "https://grafana.com/docs/loki/latest/query/",
            "https://grafana.com/blog/2020/05/12/an-only-slightly-opinionated-guide-to-loki/"
        ]
    },
    "w22-3": {
        lessonId: "w22-3",
        background: [
            "【分布式追踪定义】分布式追踪跟踪请求在多个服务间的流转：'Distributed tracing tracks the progression of a single request as it flows through a distributed system'。由 Trace（完整请求）、Span（单个操作）组成。",
            "【OpenTelemetry 标准】OpenTelemetry 是 CNCF 项目，统一了追踪、指标、日志的采集标准：'A single set of APIs, libraries, agents, and collector services to capture distributed traces and metrics'。取代了 OpenTracing 和 OpenCensus。",
            "【Span 数据模型】Span 包含：TraceID（全局唯一）、SpanID（当前操作）、ParentSpanID（父操作）、OperationName、StartTime、Duration、Tags、Logs。Span 之间通过 ParentSpanID 形成树状结构。",
            "【W3C Trace Context】W3C 标准定义了跨服务传播上下文的 HTTP 头：traceparent（trace-id、parent-id、flags）和 tracestate（vendor-specific 数据）。确保不同追踪系统可以互操作。",
            "【Jaeger 架构】Jaeger 是 Uber 开源的分布式追踪系统：Agent（收集 Span）、Collector（处理和存储）、Query（查询 UI）、Ingester（Kafka 消费）。支持 Cassandra、Elasticsearch、Kafka 作为存储。"
        ],
        keyDifficulties: [
            "【采样策略】追踪数据量大，需要采样：头部采样（决策在请求开始时）、尾部采样（决策在请求结束后，可基于延迟/错误）。OpenTelemetry Collector 支持多种采样策略。",
            "【上下文传播】跨服务传播 TraceContext：HTTP 使用 traceparent header，gRPC 使用 metadata，消息队列使用消息属性。自动 instrumentation 处理大部分场景。",
            "【Span 粒度设计】过细的 Span 增加开销和存储，过粗失去价值。原则：每个服务边界一个 Span、重要内部操作（数据库、缓存、外部调用）创建子 Span。",
            "【性能开销】追踪有 CPU 和内存开销。优化：使用采样减少数据量、异步上报、批量发送。OpenTelemetry SDK 默认已优化，但高吞吐场景需要关注。"
        ],
        handsOnPath: [
            "安装 OpenTelemetry SDK：npm install @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node",
            "初始化追踪：const sdk = new NodeSDK({ traceExporter: new OTLPTraceExporter(), instrumentations: [getNodeAutoInstrumentations()] }); sdk.start();",
            "创建自定义 Span：const span = tracer.startSpan('my-operation'); span.setAttribute('key', 'value'); span.end();",
            "配置 Jaeger 后端：OTEL_EXPORTER_OTLP_ENDPOINT=http://jaeger:4317",
            "查看 Trace：访问 Jaeger UI，按 service 和时间范围搜索，查看 Span 瀑布图"
        ],
        selfCheck: [
            "Trace 和 Span 的关系是什么？",
            "W3C Trace Context 定义了哪些 HTTP 头？",
            "头部采样和尾部采样的区别是什么？",
            "OpenTelemetry 取代了哪些旧标准？",
            "Jaeger 的核心组件有哪些？"
        ],
        extensions: [
            "研究 Grafana Tempo 的架构和特点。",
            "学习 OpenTelemetry Collector 的部署模式。",
            "了解 Service Mesh（Istio/Linkerd）的自动追踪。",
            "研究追踪数据的存储优化和成本控制。"
        ],
        sourceUrls: [
            "https://opentelemetry.io/docs/concepts/signals/traces/",
            "https://www.w3.org/TR/trace-context/",
            "https://www.jaegertracing.io/docs/latest/architecture/"
        ]
    },
    "w22-4": {
        lessonId: "w22-4",
        background: [
            "【可观测性三支柱】可观测性由 Metrics、Logs、Traces 组成。Metrics 回答'发生了什么'，Logs 回答'具体细节'，Traces 回答'请求路径'。三者结合提供完整的系统视图。",
            "【Exemplars 关联机制】Prometheus Exemplars 将指标与 Trace 关联：'Exemplars are references to data outside of the MetricSet'。在指标数据点上附加 trace_id，从指标直接跳转到相关 Trace。",
            "【统一查询体验】Grafana 提供统一查询界面：Explore 模式支持同时查询 Prometheus（指标）、Loki（日志）、Tempo（追踪）。通过 trace_id 在三者之间无缝跳转。",
            "【Derived Fields】Grafana Loki 的 Derived Fields 从日志中提取 trace_id，生成到 Jaeger/Tempo 的链接。配置：{ regex: 'trace_id=([a-f0-9]+)', url: '/explore?...' }。",
            "【OpenTelemetry 统一采集】OpenTelemetry 统一了三类信号的采集：同一个 SDK 采集 Traces、Metrics、Logs，同一个 Collector 路由到不同后端。减少了 agent 数量和配置复杂度。"
        ],
        keyDifficulties: [
            "【关联标识设计】三类数据需要共同的关联标识：trace_id（必须）、span_id（可选）、request_id（业务级）。确保所有组件在日志、指标标签、Span 属性中包含这些标识。",
            "【查询工作流】典型排查流程：1) 告警触发（Metrics 异常）→ 2) 查看相关 Logs → 3) 找到 trace_id → 4) 查看完整 Trace → 5) 定位问题 Span。Grafana Explore 支持这个流程。",
            "【存储成本平衡】三类数据存储成本不同：Metrics（低，聚合数据）、Logs（中，可采样）、Traces（高，详细数据）。策略：Metrics 长期保留，Logs/Traces 短期保留 + 采样。",
            "【采样一致性】当使用采样时，确保 Logs 和 Traces 采样决策一致：如果 Trace 被采样，相关 Logs 也应保留。使用 trace_id 作为采样决策的 key。"
        ],
        handsOnPath: [
            "配置 Prometheus Exemplars：histogram_quantile(0.99, sum(rate(http_request_duration_seconds_bucket[5m])) by (le)) // 查询时带 Exemplars",
            "在日志中包含 trace_id：logger.info({ traceId: span.spanContext().traceId, message: 'Processing request' });",
            "配置 Grafana Derived Fields：在 Loki 数据源中添加 Derived Field，regex 提取 trace_id，链接到 Tempo",
            "配置 OpenTelemetry Collector：receivers: [otlp]; processors: [batch]; exporters: [prometheus, loki, tempo]",
            "Grafana Explore 关联查询：从 Metrics 面板点击数据点 → 查看 Exemplars → 跳转到 Trace → 从 Trace 查看相关 Logs"
        ],
        selfCheck: [
            "可观测性三支柱分别回答什么问题？",
            "Prometheus Exemplars 的作用是什么？",
            "如何在日志和追踪之间建立关联？",
            "OpenTelemetry 如何统一三类信号的采集？",
            "采样时如何保持 Logs 和 Traces 的一致性？"
        ],
        extensions: [
            "研究 Grafana Cloud 的完整可观测性方案。",
            "学习 Service Level Objectives (SLO) 与可观测性的结合。",
            "了解 AIOps 和异常检测在可观测性中的应用。",
            "研究 eBPF 在无侵入式可观测性中的应用。"
        ],
        sourceUrls: [
            "https://grafana.com/docs/grafana/latest/fundamentals/exemplars/",
            "https://grafana.com/blog/2021/03/31/intro-to-exemplars-which-enable-grafana-tempos-distributed-tracing-at-massive-scale/",
            "https://opentelemetry.io/docs/collector/"
        ]
    }
}

export const week22Quizzes: Record<string, QuizQuestion[]> = {
    "w22-1": [
        {
            id: "w22-1-q1",
            question: "结构化日志的主要特点是什么？",
            options: [
                "更小的文件体积",
                "机器可解析的格式，如 JSON 键值对",
                "更快的写入速度",
                "更好的压缩率"
            ],
            answer: 1,
            rationale: "'Structured logging produces logs in a consistent, machine-readable format'——结构化日志是机器可解析的格式。"
        },
        {
            id: "w22-1-q2",
            question: "根据 OWASP 建议，哪些数据不应该记录在日志中？",
            options: [
                "时间戳和日志级别",
                "密码、信用卡号、会话标识符",
                "用户 ID 和事件类型",
                "请求路径和方法"
            ],
            answer: 1,
            rationale: "OWASP：'Never log sensitive data such as passwords, credit card numbers, or session identifiers'。"
        },
        {
            id: "w22-1-q3",
            question: "标准日志级别从低到高的顺序是什么？",
            options: [
                "DEBUG, INFO, WARN, ERROR, FATAL",
                "TRACE, DEBUG, INFO, WARN, ERROR, FATAL",
                "INFO, WARN, ERROR, DEBUG, TRACE",
                "ERROR, WARN, INFO, DEBUG, TRACE"
            ],
            answer: 1,
            rationale: "日志级别从低到高：TRACE → DEBUG → INFO → WARN → ERROR → FATAL。"
        },
        {
            id: "w22-1-q4",
            question: "生产环境通常设置的日志级别是什么？",
            options: [
                "TRACE",
                "DEBUG",
                "INFO 或以上",
                "ERROR"
            ],
            answer: 2,
            rationale: "生产环境通常设置为 INFO 或以上，避免过多的调试信息影响性能和存储。"
        },
        {
            id: "w22-1-q5",
            question: "为什么高基数字段不适合作为日志索引？",
            options: [
                "查询变慢",
                "导致索引膨胀，影响性能和存储",
                "安全问题",
                "格式不兼容"
            ],
            answer: 1,
            rationale: "高基数字段（如 user_id、request_id）会导致索引膨胀，影响性能和存储成本。"
        },
        {
            id: "w22-1-q6",
            question: "处理日志中敏感数据的正确方式是什么？",
            options: [
                "加密存储",
                "脱敏、哈希或完全不记录",
                "限制访问权限",
                "使用安全协议传输"
            ],
            answer: 1,
            rationale: "敏感数据处理：脱敏（masking）、哈希、完全不记录。使用日志框架的过滤器自动处理。"
        },
        {
            id: "w22-1-q7",
            question: "结构化日志中的上下文传播通常包含哪些字段？",
            options: [
                "只有时间戳",
                "request_id、trace_id、user_id、service_name",
                "只有日志级别",
                "只有错误信息"
            ],
            answer: 1,
            rationale: "上下文传播的关键字段：request_id、trace_id、user_id、service_name，使跨服务日志可以关联。"
        },
        {
            id: "w22-1-q8",
            question: "日志采样策略应该如何处理 ERROR 级别日志？",
            options: [
                "与其他级别相同采样率",
                "保留所有 ERROR 级别日志",
                "只采样 10%",
                "完全丢弃"
            ],
            answer: 1,
            rationale: "采样策略：保留所有 ERROR 级别，采样 INFO 级别。确保错误信息不丢失。"
        },
        {
            id: "w22-1-q9",
            question: "开发环境和生产环境的日志格式应该如何选择？",
            options: [
                "都用 JSON",
                "都用纯文本",
                "开发环境用人类可读格式，生产环境用 JSON",
                "开发环境用 JSON，生产环境用纯文本"
            ],
            answer: 2,
            rationale: "折中方案：开发环境用人类可读格式方便调试，生产环境用 JSON 方便查询和分析。"
        },
        {
            id: "w22-1-q10",
            question: "ERROR 日志级别应该用于什么场景？",
            options: [
                "所有异常情况",
                "只用于需要处理的真正错误",
                "性能警告",
                "调试信息"
            ],
            answer: 1,
            rationale: "ERROR 只用于需要处理的错误。常见问题是 ERROR 级别用于非错误场景，造成告警噪音。"
        },
        {
            id: "w22-1-q11",
            question: "使用 trace_id 进行日志采样的好处是什么？",
            options: [
                "减少存储成本",
                "确保同一请求的所有日志保留或丢弃，便于追踪",
                "提高查询速度",
                "减少网络传输"
            ],
            answer: 1,
            rationale: "使用 trace_id 作为采样决策的 key，确保同一请求的所有日志保留或丢弃，保持完整性。"
        },
        {
            id: "w22-1-q12",
            question: "INFO 日志级别应该记录什么内容？",
            options: [
                "技术调试细节",
                "业务事件（如用户登录、订单创建）",
                "系统内部状态",
                "性能指标"
            ],
            answer: 1,
            rationale: "原则：INFO 记录业务事件，DEBUG 记录技术细节，ERROR 只用于需要处理的错误。"
        }
    ],
    "w22-2": [
        {
            id: "w22-2-q1",
            question: "Loki 与 Elasticsearch 在索引策略上的主要区别是什么？",
            options: [
                "Loki 索引更快",
                "Loki 只索引标签，不索引日志内容",
                "Elasticsearch 不支持全文搜索",
                "没有区别"
            ],
            answer: 1,
            rationale: "Loki 是'like Prometheus, but for logs'：只索引标签，不索引日志内容，大幅降低存储成本。"
        },
        {
            id: "w22-2-q2",
            question: "Loki 的三大核心组件是什么？",
            options: [
                "Producer, Consumer, Broker",
                "Distributor, Ingester, Querier",
                "Master, Worker, Agent",
                "Server, Client, Proxy"
            ],
            answer: 1,
            rationale: "Loki 三大组件：Distributor（接收日志）、Ingester（写入存储）、Querier（查询处理）。"
        },
        {
            id: "w22-2-q3",
            question: "为什么 Loki 标签应该保持低基数？",
            options: [
                "查询语法限制",
                "高基数标签会创建过多流，影响性能",
                "存储格式限制",
                "网络传输限制"
            ],
            answer: 1,
            rationale: "高基数标签（如 request_id、user_id）会创建过多流，影响 Loki 的性能和资源使用。"
        },
        {
            id: "w22-2-q4",
            question: "LogQL 中 |= 操作符的作用是什么？",
            options: [
                "正则匹配",
                "包含（contains）过滤",
                "不包含过滤",
                "JSON 解析"
            ],
            answer: 1,
            rationale: "LogQL 管道操作符：|=（包含）、!=（不包含）、|~（正则）、| json（解析 JSON）。"
        },
        {
            id: "w22-2-q5",
            question: "Promtail 的作用是什么？",
            options: [
                "查询日志",
                "发现目标、附加标签、推送日志到 Loki",
                "存储日志",
                "可视化日志"
            ],
            answer: 1,
            rationale: "Promtail：'discovers targets, attaches labels, and pushes logs to Loki'。是 Loki 的日志采集 agent。"
        },
        {
            id: "w22-2-q6",
            question: "什么场景更适合使用 ELK Stack？",
            options: [
                "成本敏感的场景",
                "需要复杂全文搜索的场景",
                "日志量大但查询简单的场景",
                "已使用 Prometheus 的场景"
            ],
            answer: 1,
            rationale: "ELK 适合：需要复杂全文搜索、已有 Elasticsearch 基础设施。PLG 适合成本敏感、查询简单的场景。"
        },
        {
            id: "w22-2-q7",
            question: "Loki 使用什么作为持久化存储层？",
            options: [
                "只支持本地文件系统",
                "对象存储（S3、GCS）",
                "关系数据库",
                "Redis"
            ],
            answer: 1,
            rationale: "Loki 使用对象存储（S3、GCS）作为持久化层，本地文件系统做缓存。"
        },
        {
            id: "w22-2-q8",
            question: "Loki 什么时候解析日志内容？",
            options: [
                "摄入时解析",
                "存储时解析",
                "查询时解析",
                "不解析"
            ],
            answer: 2,
            rationale: "Loki 在查询时解析日志（而非摄入时），通过管道操作符（| json、| logfmt）处理。"
        },
        {
            id: "w22-2-q9",
            question: "适合作为 Loki 标签的字段是？",
            options: [
                "request_id",
                "user_id",
                "app、env、namespace",
                "IP 地址"
            ],
            answer: 2,
            rationale: "Loki 标签应低基数：app、env、namespace、pod 名称。避免高基数的 request_id、user_id、IP。"
        },
        {
            id: "w22-2-q10",
            question: "Loki 如何实现多租户？",
            options: [
                "使用不同的端口",
                "X-Scope-OrgID header 隔离数据",
                "使用不同的存储",
                "使用 VPN"
            ],
            answer: 1,
            rationale: "Loki 支持多租户：X-Scope-OrgID header 隔离数据。保留策略可按租户配置。"
        },
        {
            id: "w22-2-q11",
            question: "LogQL 查询 {app=\"nginx\"} |= \"error\" | json 的执行顺序是什么？",
            options: [
                "解析 JSON → 过滤 error → 选择标签",
                "选择标签 → 过滤包含 error → 解析 JSON",
                "过滤 error → 选择标签 → 解析 JSON",
                "随机顺序"
            ],
            answer: 1,
            rationale: "LogQL 执行顺序：先标签选择器过滤流，再通过管道操作符处理日志内容。"
        },
        {
            id: "w22-2-q12",
            question: "Loki 的 compactor 组件负责什么？",
            options: [
                "接收日志",
                "查询日志",
                "清理过期数据",
                "负载均衡"
            ],
            answer: 2,
            rationale: "compactor 负责清理过期数据，retention_period 控制数据保留时间。"
        }
    ],
    "w22-3": [
        {
            id: "w22-3-q1",
            question: "分布式追踪中 Trace 和 Span 的关系是什么？",
            options: [
                "Trace 是 Span 的子集",
                "Trace 是完整请求，由多个 Span 组成",
                "Span 是 Trace 的别名",
                "没有关系"
            ],
            answer: 1,
            rationale: "Trace 是完整请求的追踪，由多个 Span（单个操作）组成，Span 通过 ParentSpanID 形成树状结构。"
        },
        {
            id: "w22-3-q2",
            question: "OpenTelemetry 取代了哪些旧标准？",
            options: [
                "Prometheus 和 Grafana",
                "OpenTracing 和 OpenCensus",
                "ELK 和 Jaeger",
                "Zipkin 和 Jaeger"
            ],
            answer: 1,
            rationale: "OpenTelemetry 是 CNCF 项目，统一了 OpenTracing 和 OpenCensus，成为可观测性的标准。"
        },
        {
            id: "w22-3-q3",
            question: "W3C Trace Context 定义了哪些 HTTP 头？",
            options: [
                "X-Trace-ID 和 X-Span-ID",
                "traceparent 和 tracestate",
                "X-Request-ID 和 X-Correlation-ID",
                "Trace-Context 和 Span-Context"
            ],
            answer: 1,
            rationale: "W3C 标准定义 traceparent（trace-id、parent-id、flags）和 tracestate（vendor-specific 数据）。"
        },
        {
            id: "w22-3-q4",
            question: "Span 数据模型不包括哪个字段？",
            options: [
                "TraceID",
                "SpanID",
                "DatabaseConnection",
                "Duration"
            ],
            answer: 2,
            rationale: "Span 包含：TraceID、SpanID、ParentSpanID、OperationName、StartTime、Duration、Tags、Logs。"
        },
        {
            id: "w22-3-q5",
            question: "头部采样和尾部采样的区别是什么？",
            options: [
                "没有区别",
                "头部采样在请求开始时决策，尾部采样在请求结束后可基于延迟/错误决策",
                "头部采样更准确",
                "尾部采样更快"
            ],
            answer: 1,
            rationale: "头部采样决策在请求开始时，尾部采样决策在请求结束后，可基于延迟/错误等结果决定是否保留。"
        },
        {
            id: "w22-3-q6",
            question: "Jaeger 的核心组件不包括？",
            options: [
                "Agent",
                "Collector",
                "Database",
                "Query"
            ],
            answer: 2,
            rationale: "Jaeger 组件：Agent（收集 Span）、Collector（处理和存储）、Query（查询 UI）、Ingester（Kafka 消费）。"
        },
        {
            id: "w22-3-q7",
            question: "跨服务传播 TraceContext 在 HTTP 中使用什么？",
            options: [
                "Cookie",
                "traceparent header",
                "URL 参数",
                "请求体"
            ],
            answer: 1,
            rationale: "HTTP 使用 traceparent header，gRPC 使用 metadata，消息队列使用消息属性。"
        },
        {
            id: "w22-3-q8",
            question: "Span 粒度设计的原则是什么？",
            options: [
                "越细越好",
                "每个服务边界一个 Span，重要内部操作创建子 Span",
                "越粗越好",
                "只在错误时创建 Span"
            ],
            answer: 1,
            rationale: "每个服务边界一个 Span、重要内部操作（数据库、缓存、外部调用）创建子 Span。"
        },
        {
            id: "w22-3-q9",
            question: "OpenTelemetry 的自动 instrumentation 的作用是什么？",
            options: [
                "手动创建所有 Span",
                "自动为常见框架和库创建 Span，处理上下文传播",
                "只收集指标",
                "只收集日志"
            ],
            answer: 1,
            rationale: "自动 instrumentation 为常见框架和库自动创建 Span，处理大部分上下文传播场景。"
        },
        {
            id: "w22-3-q10",
            question: "追踪的性能开销如何优化？",
            options: [
                "禁用追踪",
                "使用采样、异步上报、批量发送",
                "减少服务数量",
                "使用更快的语言"
            ],
            answer: 1,
            rationale: "优化：使用采样减少数据量、异步上报、批量发送。OpenTelemetry SDK 默认已优化。"
        },
        {
            id: "w22-3-q11",
            question: "Jaeger 支持哪些存储后端？",
            options: [
                "只支持内存",
                "Cassandra、Elasticsearch、Kafka",
                "只支持 MySQL",
                "只支持文件系统"
            ],
            answer: 1,
            rationale: "Jaeger 支持 Cassandra、Elasticsearch、Kafka 作为存储后端。"
        },
        {
            id: "w22-3-q12",
            question: "traceparent header 包含哪些信息？",
            options: [
                "只有 trace-id",
                "trace-id、parent-id、flags",
                "只有 span-id",
                "用户信息"
            ],
            answer: 1,
            rationale: "traceparent 包含 trace-id、parent-id、trace-flags，格式：version-traceid-parentid-flags。"
        }
    ],
    "w22-4": [
        {
            id: "w22-4-q1",
            question: "可观测性三支柱分别回答什么问题？",
            options: [
                "都回答相同问题",
                "Metrics 回答'发生了什么'，Logs 回答'具体细节'，Traces 回答'请求路径'",
                "只有 Traces 有用",
                "只有 Metrics 有用"
            ],
            answer: 1,
            rationale: "Metrics 回答'发生了什么'，Logs 回答'具体细节'，Traces 回答'请求路径'。三者结合提供完整视图。"
        },
        {
            id: "w22-4-q2",
            question: "Prometheus Exemplars 的作用是什么？",
            options: [
                "存储更多指标",
                "将指标与 Trace 关联，附加 trace_id",
                "压缩指标数据",
                "加速查询"
            ],
            answer: 1,
            rationale: "'Exemplars are references to data outside of the MetricSet'——在指标数据点上附加 trace_id，可跳转到相关 Trace。"
        },
        {
            id: "w22-4-q3",
            question: "Grafana Derived Fields 的作用是什么？",
            options: [
                "计算新指标",
                "从日志中提取 trace_id，生成到追踪系统的链接",
                "压缩日志",
                "过滤日志"
            ],
            answer: 1,
            rationale: "Derived Fields 从日志中提取 trace_id，生成到 Jaeger/Tempo 的链接，实现日志到追踪的跳转。"
        },
        {
            id: "w22-4-q4",
            question: "三类可观测性数据需要什么共同的关联标识？",
            options: [
                "只需要时间戳",
                "trace_id、span_id、request_id",
                "只需要用户 ID",
                "不需要关联标识"
            ],
            answer: 1,
            rationale: "三类数据需要共同标识：trace_id（必须）、span_id（可选）、request_id（业务级），用于关联分析。"
        },
        {
            id: "w22-4-q5",
            question: "典型的可观测性排查流程是什么？",
            options: [
                "直接查看代码",
                "告警触发 → 查看 Logs → 找 trace_id → 查看 Trace → 定位问题 Span",
                "只看 Metrics",
                "只看 Logs"
            ],
            answer: 1,
            rationale: "典型流程：1) 告警触发（Metrics 异常）→ 2) 查看 Logs → 3) 找 trace_id → 4) 查看 Trace → 5) 定位问题。"
        },
        {
            id: "w22-4-q6",
            question: "三类可观测性数据的存储成本从低到高是？",
            options: [
                "Traces < Logs < Metrics",
                "Metrics < Logs < Traces",
                "Logs < Metrics < Traces",
                "都一样"
            ],
            answer: 1,
            rationale: "存储成本：Metrics（低，聚合数据）< Logs（中，可采样）< Traces（高，详细数据）。"
        },
        {
            id: "w22-4-q7",
            question: "OpenTelemetry Collector 的作用是什么？",
            options: [
                "只收集 Traces",
                "统一接收、处理、路由 Traces/Metrics/Logs 到不同后端",
                "只存储数据",
                "只可视化数据"
            ],
            answer: 1,
            rationale: "OpenTelemetry Collector 统一接收三类信号，处理后路由到不同后端，减少 agent 数量和配置复杂度。"
        },
        {
            id: "w22-4-q8",
            question: "采样时如何保持 Logs 和 Traces 的一致性？",
            options: [
                "分别采样",
                "使用 trace_id 作为采样决策的 key",
                "不采样",
                "只采样 Logs"
            ],
            answer: 1,
            rationale: "使用 trace_id 作为采样决策的 key，确保如果 Trace 被采样，相关 Logs 也应保留。"
        },
        {
            id: "w22-4-q9",
            question: "Grafana Explore 支持哪些数据源的统一查询？",
            options: [
                "只支持 Prometheus",
                "Prometheus、Loki、Tempo 等多种数据源",
                "只支持 Loki",
                "只支持 Elasticsearch"
            ],
            answer: 1,
            rationale: "Grafana Explore 支持同时查询 Prometheus（指标）、Loki（日志）、Tempo（追踪），通过 trace_id 跳转。"
        },
        {
            id: "w22-4-q10",
            question: "Metrics 长期保留而 Logs/Traces 短期保留的原因是什么？",
            options: [
                "Metrics 更重要",
                "Metrics 是聚合数据成本低，Logs/Traces 详细数据成本高",
                "Logs/Traces 不重要",
                "技术限制"
            ],
            answer: 1,
            rationale: "策略：Metrics 长期保留（聚合数据成本低），Logs/Traces 短期保留 + 采样（详细数据成本高）。"
        },
        {
            id: "w22-4-q11",
            question: "从 Metrics 面板跳转到 Trace 需要什么功能？",
            options: [
                "手动复制 ID",
                "Prometheus Exemplars 附加 trace_id",
                "URL 参数",
                "Cookie"
            ],
            answer: 1,
            rationale: "通过 Prometheus Exemplars 在指标数据点上附加 trace_id，点击 Exemplar 可跳转到相关 Trace。"
        },
        {
            id: "w22-4-q12",
            question: "OpenTelemetry SDK 的优势是什么？",
            options: [
                "只支持一种语言",
                "同一个 SDK 采集 Traces、Metrics、Logs",
                "只支持 Traces",
                "需要多个不同的 SDK"
            ],
            answer: 1,
            rationale: "OpenTelemetry 统一了三类信号的采集：同一个 SDK 采集 Traces、Metrics、Logs，简化了集成。"
        }
    ]
}
