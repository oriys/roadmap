import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week12Guides: Record<string, LessonGuide> = {
    "w12-1": {
        lessonId: "w12-1",
        background: [
            "【日志架构概述】官方文档：Kubernetes 捕获每个运行 Pod 中容器的日志，'captures logs from each container in running Pods'，但'doesn't provide native storage'——平台本身不提供原生日志存储，需要独立后端实现完整日志方案。",
            "【三种日志收集模式】官方文档定义三种集群级日志架构：Node-level logging agent（节点级代理，在每个节点运行专用代理，访问所有应用容器的日志文件）；Sidecar container（边车容器，与应用共同运行，转发日志到后端）；Application-level logging（应用级，应用直接推送到后端）。",
            "【日志存储路径】官方文档：Linux 系统容器日志默认存储在 '/var/log/pods/'，系统组件通过 Journald（使用 journalctl 访问）或 '/var/log/' 文件记录。Windows 系统日志在 'C:\\var\\log\\pods\\'，系统日志在 'C:\\var\\logs\\' 或 'C:\\var\\log\\kubelet\\'。",
            "【Fluent Bit DaemonSet 部署】官方文档：Fluent Bit 使用 DaemonSet 模型，'runs on every node of the cluster'——确保日志收集覆盖整个集群。默认配置'Consume all containers logs from the running node and parse them with either the docker or cri multi-line parser'。",
            "【日志轮转机制】官方文档：kubelet 管理容器日志轮转，配置参数包括 containerLogMaxSize（默认 10Mi，单文件最大大小）、containerLogMaxFiles（默认 5，每容器最大文件数）、containerLogMaxWorkers（并发轮转数）、containerLogMonitorInterval（监控间隔）。"
        ],
        keyDifficulties: [
            "【Node-level Agent 优势】官方文档：节点级日志代理'Exposes or pushes logs to backend, Accesses container log files from all application containers'——优点是'Minimal app changes'无需修改应用；缺点是'Requires agent on every node'需要在每个节点运行代理。",
            "【Sidecar 模式权衡】官方文档：Sidecar 容器'Tails application logs and forwards to backend'——优点是'App-specific logging control'可针对应用定制控制；缺点是'Additional resource overhead'额外资源开销。适合有特殊日志处理需求的应用。",
            "【日志可用性限制】官方文档警告：'Only the latest log file contents are available through kubectl logs. If a 40Mi workload logs and rotation occurs at 10Mi, kubectl logs returns only 10Mi maximum'——kubectl logs 只返回当前文件内容，不含已轮转的历史。",
            "【元数据丰富机制】Fluent Bit 文档：Kubernetes filter 自动添加'pod labels, annotations, and container metadata'——元数据丰富是关键能力。支持 DNS_Retries（默认 6 次）和 DNS_Wait_Time（30 秒间隔）处理 DNS 延迟。",
            "【自定义日志目录风险】官方文档警告：podLogsDir 参数可修改默认 /var/log/pods 路径，但'Use with care; some processes assume the default path, and logs must remain on the same disk as /var/'——日志必须与 /var 在同一磁盘，否则可能导致系统问题。"
        ],
        handsOnPath: [
            "部署 Promtail DaemonSet：使用 Helm 安装 grafana/promtail，配置 scrape_configs 发现 Pod 日志。检查 /var/log/containers 和 /var/log/pods 挂载是否正确。验证 Promtail 成功读取日志并发送到 Loki。",
            "配置 Kubernetes 服务发现：在 Promtail 配置中启用 kubernetes_sd_configs，role: pod。使用 relabel_configs 提取 namespace、pod、container 等标签。观察 Promtail 目标发现页面（/targets）。",
            "实践多行日志处理：部署一个输出 Java 堆栈跟踪的测试应用。在 Promtail 配置 multiline stage，使用 firstline 正则匹配日志起始行。验证多行日志被正确合并为单条记录。",
            "对比 Sidecar 模式：创建一个 Pod，包含应用容器和 Promtail Sidecar，通过 emptyDir Volume 共享日志文件。配置 Sidecar 读取指定路径的日志文件。对比两种模式的资源消耗和配置复杂度。",
            "配置日志过滤和转换：使用 Promtail 的 pipeline_stages 过滤敏感信息（如 drop 包含密码的日志行）、解析 JSON 日志、提取字段为标签。验证处理后的日志格式正确。"
        ],
        selfCheck: [
            "DaemonSet 和 Sidecar 两种日志收集模式各有什么优缺点？什么场景下应该选择哪种模式？",
            "Kubernetes 中容器日志的存储路径是什么？DaemonSet Agent 需要挂载哪些目录才能读取日志？",
            "如何处理 Java 堆栈跟踪等多行日志？DaemonSet 和 Sidecar 模式下处理方式有什么不同？",
            "Promtail 如何获取 Pod 的 namespace、labels 等 Kubernetes 元数据？这些元数据在日志查询中有什么作用？",
            "如何在日志收集阶段过滤敏感信息或删除不需要的日志？有哪些最佳实践？"
        ],
        extensions: [
            "研究 Kubernetes 的日志 API（kubectl logs）实现原理，了解 kubelet 如何读取容器日志，以及日志轮转（log rotation）的配置。",
            "探索 Vector 作为现代日志收集 Agent 的优势，了解其高性能、可观测性管道的设计，以及与 Promtail/Fluentd 的对比。",
            "学习日志采样策略，了解如何在高流量场景下通过采样减少日志量，同时保留足够的调试信息。",
            "研究 OpenTelemetry Collector 的 filelog receiver，了解如何使用统一的 Collector 同时收集日志、指标和追踪。"
        ],
        sourceUrls: [
            "https://grafana.com/docs/loki/latest/send-data/promtail/",
            "https://kubernetes.io/docs/concepts/cluster-administration/logging/",
            "https://grafana.com/docs/loki/latest/send-data/promtail/pipelines/"
        ]
    },
    "w12-2": {
        lessonId: "w12-2",
        background: [
            "【Loki 设计哲学】官方文档：Loki 与传统日志系统的核心区别在于'indexes metadata about your logs as a set of labels for each log stream'——只索引标签元数据而非日志内容。这种设计'dramatically reduces storage costs and operational complexity'。",
            "【三组件架构】官方文档：PLG 栈由三部分组成——Agent（Grafana Alloy/Promtail）'Scrapes logs, applies labels, pushes to Loki'；Loki Server 负责'Ingests, stores logs, processes queries'；Grafana 提供可视化和查询界面。",
            "【LogQL 查询结构】官方文档：LogQL 基本格式为'{ log stream selector } | log pipeline'——流选择器是必需的，管道是可选的。'LogQL allows you to create a schema at query'——无需预先定义 schema，查询时动态解析。",
            "【存储优势】官方文档：Loki'Log data compressed into chunks stored in object storage (S3, GCS, filesystem)'——利用廉价对象存储而非 SSD/HDD。'Smaller Index: Only label metadata indexed, not full log content'大幅降低索引开销。",
            "【多租户与告警】官方文档：Loki 提供'Multi-Tenancy - Complete data isolation between tenants'完整租户隔离；'Alerting via Ruler - Continuous query evaluation with Prometheus Alertmanager integration'支持基于日志的告警。"
        ],
        keyDifficulties: [
            "【标签基数限制】官方文档：'DO use fewer labels, aim to have 10 - 15 labels at a maximum. Fewer labels means a smaller index, which leads to better performance'。高基数'results from labels with unbounded values or too many labels combined, creating thousands of tiny chunks and massive index bloat'。",
            "【流选择器操作符】官方文档：LogQL 使用四种标签匹配操作符——'=' (exact match)、'!=' (not equal)、'=~' (regex match)、'!~' (not regex match)。示例：{service_name=\"nginx\", status=\"500\"}。流选择器是必需的。",
            "【管道过滤表达式】官方文档：行过滤器包括'|=' (contains string)、'!=' (doesn't contain)、'|~' (regex match)、'!~' (no regex match)；标签过滤器支持'==, !=, >, >=, <, <='，可用'and/or'链接条件。",
            "【解析器类型】官方文档：LogQL 支持多种解析器——'JSON, logfmt, pattern, regexp, unpack'。解析后可提取字段为标签。'line_format() and label_format() for display customization'用于格式化输出。",
            "【高基数解决方案】官方文档：'Avoid labels for one-time searches or very specific identifiers (user IDs, customer IDs)'；'Don't extract log message content as labels—use structured metadata instead'——高基数数据应使用结构化元数据而非标签。"
        ],
        handsOnPath: [
            "部署 Loki 单体模式：使用 Helm 安装 grafana/loki-stack（包含 Loki + Promtail）。配置 Grafana 添加 Loki 数据源。在 Explore 页面验证日志查询功能。",
            "练习 LogQL 流选择器：查询特定命名空间的日志 {namespace=\"default\"}；使用正则匹配多个应用 {app=~\"nginx|redis\"}；排除特定容器 {container!=\"istio-proxy\"}。观察查询性能与流选择范围的关系。",
            "练习 LogQL 行过滤和解析：过滤包含 error 的日志 |= \"error\"；解析 JSON 日志 | json；提取特定字段 | json | line_format \"{{.level}}: {{.message}}\"。对比解析前后的查询性能。",
            "实践 LogQL 指标查询：使用 rate() 计算错误日志速率 rate({app=\"nginx\"} |= \"error\" [5m])；使用 count_over_time() 统计日志数量；创建 Grafana Dashboard 展示日志指标。",
            "配置 Loki 告警规则：在 Loki Ruler 中配置告警规则，当错误日志速率超过阈值时触发告警。将告警发送到 Alertmanager。验证日志告警与指标告警的集成。"
        ],
        selfCheck: [
            "Loki 与 Elasticsearch 的索引策略有什么根本区别？这种设计带来了什么优势和限制？",
            "为什么不应该将高基数值（如 request_id）作为 Loki 的标签？应该如何处理这类数据？",
            "LogQL 中流选择器、行过滤器、解析器、标签过滤器的执行顺序是什么？如何优化查询性能？",
            "如何使用 LogQL 计算日志指标（如每分钟错误数）？与 PromQL 有什么相似之处？",
            "Loki 的数据如何存储和分片？retention 配置如何工作？"
        ],
        extensions: [
            "研究 Loki 的微服务部署模式，了解各组件（Distributor、Ingester、Querier、Compactor）的职责和扩展策略。",
            "探索 Loki 与 Grafana Tempo 的集成，了解如何从日志跳转到关联的追踪（通过 traceID 关联）。",
            "学习 Loki 的多租户模式，了解如何通过 X-Scope-OrgID header 实现租户隔离。",
            "研究 Grafana OnCall 与 Loki 的集成，了解如何基于日志告警实现 On-Call 轮值和事件响应。"
        ],
        sourceUrls: [
            "https://grafana.com/docs/loki/latest/get-started/overview/",
            "https://grafana.com/docs/loki/latest/query/",
            "https://grafana.com/docs/loki/latest/get-started/labels/"
        ]
    },
    "w12-3": {
        lessonId: "w12-3",
        background: [
            "分布式追踪是微服务可观测性的关键支柱。当请求跨越多个服务时，追踪帮助理解请求的完整路径、识别延迟瓶颈和故障点。追踪与日志、指标共同构成可观测性的三大支柱（Three Pillars of Observability）。",
            "追踪的核心概念包括：Trace（追踪）是一个请求的完整调用链；Span（跨度）是追踪中的单个操作单元，包含操作名、开始时间、持续时间和状态；Span 之间通过 parent-child 关系形成树状结构，反映服务调用层级。",
            "Context Propagation（上下文传播）是分布式追踪的关键机制。Trace ID 和 Span ID 需要在服务间传递，通常通过 HTTP Header（如 traceparent、b3）或 gRPC Metadata 实现。标准化的传播格式（W3C Trace Context）确保跨系统互操作。",
            "采样（Sampling）是控制追踪数据量的策略。头部采样（Head-based）在请求入口决定是否追踪；尾部采样（Tail-based）在请求完成后根据特征（如错误、高延迟）决定是否保留。高流量系统必须采样，否则追踪系统会成为性能瓶颈。"
        ],
        keyDifficulties: [
            "理解 Trace、Span、SpanContext 的关系：Trace 由多个 Span 组成；每个 Span 有 Trace ID（全链路唯一）、Span ID（当前 Span 唯一）、Parent Span ID（父 Span）；SpanContext 是传播的最小信息单元，包含 Trace ID、Span ID 和采样标志。",
            "上下文传播的实现：自动 instrumentation（SDK 自动注入 Header）vs 手动 instrumentation（开发者显式传递）。框架集成（如 Spring Cloud Sleuth、OpenTelemetry SDK）可以自动完成大部分传播，但跨异步边界或消息队列需要额外处理。",
            "采样策略选择：固定比例采样（如 1%）简单但可能遗漏关键请求；概率采样基于 Trace ID hash 确保同一 Trace 的所有 Span 采样一致；自适应采样根据流量动态调整；尾部采样可以保留所有错误请求但需要更多资源。",
            "Span 属性与事件：Span Attributes 记录操作的上下文信息（如 http.method、db.statement）；Span Events 记录 Span 生命周期内的关键时间点（如异常发生）；Span Status 标记操作成功或失败。这些数据是追踪分析的基础。"
        ],
        handsOnPath: [
            "理解追踪数据结构：查看一个多服务请求的追踪数据（JSON 格式），识别 Trace ID、Span ID、Parent Span ID、开始时间、持续时间。绘制 Span 的树状结构图，理解调用关系。",
            "观察上下文传播：在两个服务间发送请求，使用抓包工具（tcpdump/Wireshark）或应用日志查看 HTTP Header 中的 traceparent 或 b3 header。理解 Trace ID 如何跨服务传递。",
            "配置采样策略：在 OpenTelemetry SDK 中配置不同的采样器（AlwaysOn、AlwaysOff、TraceIdRatioBased）。发送多个请求，统计实际采样比例。讨论生产环境的采样策略选择。",
            "添加自定义 Span 属性：使用 OpenTelemetry SDK 在代码中添加 Span Attributes（如用户 ID、订单号）和 Span Events（如关键业务事件）。在追踪 UI 中查看这些自定义数据。",
            "模拟追踪断链问题：构造一个追踪断链场景（如异步处理未传递 Context），观察追踪 UI 中的断裂。修复代码，验证追踪完整性恢复。"
        ],
        selfCheck: [
            "Trace、Span、SpanContext 分别是什么？它们之间有什么关系？一个 HTTP 请求经过 3 个服务会产生多少个 Span？",
            "Context Propagation 如何工作？W3C Trace Context 标准的 traceparent header 包含哪些信息？",
            "头部采样和尾部采样有什么区别？各自适用于什么场景？高流量系统为什么必须采样？",
            "Span Attributes 和 Span Events 的区别是什么？应该记录哪些信息到 Span 中？",
            "什么情况下会导致追踪断链？如何排查和修复？"
        ],
        extensions: [
            "研究 W3C Trace Context 和 B3 Propagation 两种传播标准的差异，了解历史演进和互操作性问题。",
            "探索 Span Links 功能，了解如何关联非父子关系的 Span（如批处理场景、扇入扇出）。",
            "学习追踪的隐私合规考虑，了解如何在 Span 中避免记录敏感数据（PII），以及追踪数据的保留策略。",
            "研究 eBPF 实现的无侵入式追踪（如 Pixie、Odigos），了解如何在不修改应用代码的情况下收集追踪数据。"
        ],
        sourceUrls: [
            "https://opentelemetry.io/docs/concepts/signals/traces/",
            "https://www.w3.org/TR/trace-context/",
            "https://opentelemetry.io/docs/concepts/sampling/"
        ]
    },
    "w12-4": {
        lessonId: "w12-4",
        background: [
            "OpenTelemetry（OTel）是 CNCF 的可观测性标准项目，提供统一的 API、SDK 和工具来收集和导出追踪、指标和日志数据。它合并了 OpenTracing 和 OpenCensus 两个项目，成为云原生可观测性的事实标准。",
            "OpenTelemetry Collector 是可观测性数据的处理管道，包含 Receivers（接收数据）、Processors（处理数据）、Exporters（导出数据）三个阶段。Collector 可以部署为 Agent（DaemonSet/Sidecar）或 Gateway（集中式）模式。",
            "Jaeger 是 Uber 开源的分布式追踪系统，现为 CNCF 毕业项目。核心组件包括：jaeger-collector（接收追踪数据）、jaeger-query（提供 UI 和 API）、存储后端（Cassandra、Elasticsearch、Kafka、Badger）。Jaeger 原生支持 OpenTelemetry 协议。",
            "OTel + Jaeger 的典型架构：应用集成 OTel SDK → 数据发送到 OTel Collector → Collector 处理后导出到 Jaeger Collector → Jaeger 存储到后端 → 通过 Jaeger UI 或 Grafana 可视化。这种架构实现了采集和存储的解耦。"
        ],
        keyDifficulties: [
            "OpenTelemetry SDK 集成：自动 instrumentation（如 Java Agent、Python auto-instrumentation）零代码修改；手动 instrumentation 提供更细粒度控制。需要配置 OTLP Exporter 指向 Collector 或直接发送到 Jaeger。环境变量（OTEL_EXPORTER_OTLP_ENDPOINT）是常用配置方式。",
            "Collector Pipeline 设计：Receivers 定义数据入口（otlp、jaeger、zipkin）；Processors 处理数据（batch 批量发送、filter 过滤、attributes 修改属性）；Exporters 定义数据出口（otlp、jaeger、prometheus）。Pipeline 将三者组合，可以配置多条独立管线。",
            "Collector 部署模式选择：Agent 模式（DaemonSet/Sidecar）靠近数据源，减少网络延迟和丢失风险；Gateway 模式（Deployment）集中处理，便于管理和扩展。混合模式：Agent 做初步处理，Gateway 做聚合和导出。",
            "Jaeger 存储后端选择：Elasticsearch 功能丰富但资源消耗大；Cassandra 适合大规模分布式部署；Badger 适合单节点测试环境；Kafka 可作为缓冲层解耦收集和存储。生产环境需要考虑数据量、查询性能和运维复杂度。"
        ],
        handsOnPath: [
            "部署 OpenTelemetry Collector：使用 Helm 安装 opentelemetry-collector。配置 OTLP receiver（gRPC 4317、HTTP 4318）。添加 logging exporter 验证数据接收。检查 Collector 的 /metrics 端点了解处理统计。",
            "部署 Jaeger：使用 Helm 安装 jaegertracing/jaeger。配置使用内存存储（测试）或 Elasticsearch（生产）。访问 Jaeger UI（端口 16686）。配置 Collector 添加 jaeger exporter 指向 Jaeger Collector。",
            "应用集成 OpenTelemetry：选择一个示例应用（如 Go/Python/Java），集成 OTel SDK。配置自动 instrumentation 或手动添加 Span。设置 OTEL_EXPORTER_OTLP_ENDPOINT 指向 Collector。发送请求，在 Jaeger UI 查看追踪。",
            "配置 Collector Processors：添加 batch processor 优化网络效率；添加 filter processor 过滤健康检查等噪音数据；添加 attributes processor 统一服务名格式。观察处理前后的追踪数据变化。",
            "Grafana 集成：在 Grafana 添加 Jaeger 数据源。创建追踪面板，展示服务拓扑和延迟分布。配置从 Loki 日志跳转到 Jaeger 追踪（通过 TraceID）。体验日志-追踪的关联分析。"
        ],
        selfCheck: [
            "OpenTelemetry 的 API、SDK、Collector 分别是什么？它们在可观测性架构中的角色是什么？",
            "OpenTelemetry Collector 的 Receivers、Processors、Exporters 如何组成 Pipeline？如何配置多条独立管线？",
            "Collector 的 Agent 模式和 Gateway 模式有什么区别？什么场景下应该使用混合模式？",
            "Jaeger 的核心组件有哪些？不同存储后端（Elasticsearch、Cassandra、Badger）如何选择？",
            "如何配置 Grafana 实现从日志跳转到追踪？TraceID 关联的前提条件是什么？"
        ],
        extensions: [
            "研究 OpenTelemetry 的 Semantic Conventions，了解标准化的 Span 属性命名（如 http.method、db.system），以及为什么标准化很重要。",
            "探索 Jaeger 的 Adaptive Sampling 功能，了解如何基于历史数据自动调整采样率，平衡数据量和完整性。",
            "学习 OpenTelemetry Operator for Kubernetes，了解如何通过 CRD 自动注入 instrumentation 和管理 Collector。",
            "研究 Grafana Tempo 作为 Jaeger 的替代方案，了解其基于对象存储的架构、与 Grafana 生态的深度集成，以及成本优势。"
        ],
        sourceUrls: [
            "https://opentelemetry.io/docs/collector/",
            "https://www.jaegertracing.io/docs/latest/architecture/",
            "https://opentelemetry.io/docs/languages/"
        ]
    }
}

export const week12Quizzes: Record<string, QuizQuestion[]> = {
    "w12-1": [
        {
            id: "w12-1-q1",
            question: "官方文档对 Kubernetes 日志原生能力的描述是什么？",
            options: [
                "提供完整的日志存储和查询功能",
                "自动将日志发送到 Elasticsearch",
                "'captures logs from each container' 但 'doesn't provide native storage'——只捕获不存储",
                "只支持 stdout 日志收集"
            ],
            answer: 2,
            rationale: "官方文档：Kubernetes 'captures logs from each container in running Pods' 但 'doesn't provide native storage'——平台不提供原生存储，需要独立后端。"
        },
        {
            id: "w12-1-q2",
            question: "官方文档定义的三种集群级日志架构是什么？",
            options: [
                "Node-level logging agent、Sidecar container、Application-level logging",
                "DaemonSet、Deployment、StatefulSet",
                "Stdout、Stderr、File",
                "Fluentd、Promtail、Filebeat"
            ],
            answer: 0,
            rationale: "官方文档定义三种模式：Node-level logging agent（节点级代理）、Sidecar container（边车容器）、Application-level logging（应用级日志）。"
        },
        {
            id: "w12-1-q3",
            question: "官方文档对 Node-level logging agent 模式优缺点的描述是什么？",
            options: [
                "优点是隔离性好，缺点是配置复杂",
                "优点是完全控制日志格式，缺点是需要修改应用",
                "优点和缺点都未明确说明",
                "优点是 'Minimal app changes'，缺点是 'Requires agent on every node'"
            ],
            answer: 3,
            rationale: "官方文档：Node-level agent 优点是 'Minimal app changes'（无需修改应用），缺点是 'Requires agent on every node'（每节点需要代理）。"
        },
        {
            id: "w12-1-q4",
            question: "官方文档对 Sidecar 日志收集模式的描述是什么？",
            options: [
                "资源消耗最低的方案",
                "'Tails application logs and forwards to backend'，优点是 'App-specific logging control'，缺点是 'Additional resource overhead'",
                "只适用于无状态应用",
                "必须与 DaemonSet 模式配合使用"
            ],
            answer: 1,
            rationale: "官方文档：Sidecar 'Tails application logs and forwards to backend'，优点是 'App-specific logging control'，缺点是 'Additional resource overhead'。"
        },
        {
            id: "w12-1-q5",
            question: "Linux 系统中容器日志的默认存储路径是什么？",
            options: [
                "/var/log/containers/",
                "/var/lib/docker/containers/",
                "/var/log/pods/",
                "/var/log/kubernetes/"
            ],
            answer: 2,
            rationale: "官方文档：Linux 系统容器日志默认存储在 '/var/log/pods/'，系统组件通过 Journald 或 '/var/log/' 文件记录。"
        },
        {
            id: "w12-1-q6",
            question: "官方文档描述的 kubelet 日志轮转参数 containerLogMaxSize 的默认值是多少？",
            options: [
                "5Mi",
                "10Mi",
                "20Mi",
                "50Mi"
            ],
            answer: 1,
            rationale: "官方文档：containerLogMaxSize 默认 10Mi（单文件最大大小），containerLogMaxFiles 默认 5（每容器最大文件数）。"
        },
        {
            id: "w12-1-q7",
            question: "官方文档对 kubectl logs 日志可用性的警告是什么？",
            options: [
                "kubectl logs 可以访问所有历史日志",
                "kubectl logs 需要 cluster-admin 权限",
                "'Only the latest log file contents are available'——只返回当前文件内容，不含已轮转历史",
                "kubectl logs 有 1000 行的硬限制"
            ],
            answer: 2,
            rationale: "官方文档警告：'Only the latest log file contents are available through kubectl logs'——如果日志轮转，kubectl logs 只返回当前文件内容。"
        },
        {
            id: "w12-1-q8",
            question: "Fluent Bit 官方文档描述的 Kubernetes 部署模式是什么？",
            options: [
                "Deployment 模式，运行在指定节点",
                "StatefulSet 模式，保证日志顺序",
                "Job 模式，定期收集日志",
                "DaemonSet 模式，'runs on every node of the cluster'"
            ],
            answer: 3,
            rationale: "Fluent Bit 官方文档：使用 DaemonSet 模型，'runs on every node of the cluster'——确保日志收集覆盖整个集群。"
        },
        {
            id: "w12-1-q9",
            question: "Fluent Bit Kubernetes filter 自动添加什么元数据？",
            options: [
                "只添加 Pod 名称",
                "只添加 namespace",
                "'pod labels, annotations, and container metadata'——标签、注解和容器元数据",
                "只添加时间戳"
            ],
            answer: 2,
            rationale: "Fluent Bit 文档：Kubernetes filter 自动添加 'pod labels, annotations, and container metadata'——这是元数据丰富的关键能力。"
        },
        {
            id: "w12-1-q10",
            question: "官方文档对修改 podLogsDir 的警告是什么？",
            options: [
                "会导致性能下降",
                "需要重启所有 Pod",
                "'logs must remain on the same disk as /var/'——日志必须与 /var 在同一磁盘",
                "不支持 Windows 系统"
            ],
            answer: 2,
            rationale: "官方文档警告：'Use with care; some processes assume the default path, and logs must remain on the same disk as /var/'——否则可能导致系统问题。"
        },
        {
            id: "w12-1-q11",
            question: "Fluent Bit 默认配置如何解析容器日志？",
            options: [
                "只支持 JSON 格式",
                "不进行任何解析",
                "'parse them with either the docker or cri multi-line parser'——使用 docker 或 cri 多行解析器",
                "需要手动配置解析规则"
            ],
            answer: 2,
            rationale: "Fluent Bit 文档：默认配置 'Consume all containers logs from the running node and parse them with either the docker or cri multi-line parser'。"
        },
        {
            id: "w12-1-q12",
            question: "官方文档对日志轮转责任的说明是什么？",
            options: [
                "kubelet 自动管理所有日志轮转",
                "必须使用外部工具",
                "Kubernetes 不管理集群组件共享卷的日志轮转，需 OS 或部署工具处理",
                "只有 DaemonSet 需要配置轮转"
            ],
            answer: 2,
            rationale: "官方文档：'Kubernetes does not manage log rotation for cluster components sharing volumes. Your OS or deployment tools must handle this'——需要外部处理。"
        }
    ],
    "w12-2": [
        {
            id: "w12-2-q1",
            question: "官方文档对 Loki 索引策略的描述是什么？",
            options: [
                "索引所有日志内容和元数据",
                "使用全文索引技术",
                "'indexes metadata about your logs as a set of labels for each log stream'——只索引标签元数据",
                "不使用任何索引"
            ],
            answer: 2,
            rationale: "官方文档：Loki 'indexes metadata about your logs as a set of labels for each log stream'——只索引标签元数据而非日志内容。"
        },
        {
            id: "w12-2-q2",
            question: "官方文档对 Loki 标签数量的建议是什么？",
            options: [
                "'DO use fewer labels, aim to have 10 - 15 labels at a maximum'——最多 10-15 个标签",
                "标签数量没有限制",
                "建议使用 50 个以上标签",
                "每个日志流至少需要 20 个标签"
            ],
            answer: 0,
            rationale: "官方文档：'DO use fewer labels, aim to have 10 - 15 labels at a maximum. Fewer labels means a smaller index, which leads to better performance'。"
        },
        {
            id: "w12-2-q3",
            question: "LogQL 的流选择器支持哪些匹配操作符？",
            options: [
                "只支持精确匹配",
                "'=' (exact match)、'!=' (not equal)、'=~' (regex match)、'!~' (not regex match)",
                "只支持正则匹配",
                "只支持等于和不等于"
            ],
            answer: 1,
            rationale: "官方文档：LogQL 使用四种标签匹配操作符——'=' (exact match)、'!=' (not equal)、'=~' (regex match)、'!~' (not regex match)。"
        },
        {
            id: "w12-2-q4",
            question: "官方文档描述的 LogQL 行过滤器操作符有哪些？",
            options: [
                "只有 |= 一种",
                "只支持精确匹配过滤",
                "不支持行过滤功能",
                "'|=' (contains string)、'!=' (doesn't contain)、'|~' (regex match)、'!~' (no regex match)"
            ],
            answer: 3,
            rationale: "官方文档：行过滤器包括 '|=' (contains string)、'!=' (doesn't contain)、'|~' (regex match)、'!~' (no regex match)。"
        },
        {
            id: "w12-2-q5",
            question: "官方文档列出的 LogQL 解析器类型有哪些？",
            options: [
                "只支持 JSON 解析",
                "'JSON, logfmt, pattern, regexp, unpack'——五种解析器",
                "只支持正则表达式解析",
                "不支持日志解析"
            ],
            answer: 1,
            rationale: "官方文档：LogQL 支持多种解析器——'JSON, logfmt, pattern, regexp, unpack'。"
        },
        {
            id: "w12-2-q6",
            question: "官方文档描述的 Loki 存储架构是什么？",
            options: [
                "只能存储在本地文件系统",
                "必须使用 Elasticsearch 后端",
                "'Log data compressed into chunks stored in object storage (S3, GCS, filesystem)'——对象存储或文件系统",
                "只能存储在内存中"
            ],
            answer: 2,
            rationale: "官方文档：Loki 'Log data compressed into chunks stored in object storage (S3, GCS, filesystem)'。"
        },
        {
            id: "w12-2-q7",
            question: "官方文档描述的 PLG 栈三组件是什么？",
            options: [
                "Agent (Grafana Alloy/Promtail)、Loki Server、Grafana",
                "Prometheus、Loki、Grafana",
                "Promtail、Logstash、Grafana",
                "Fluentd、Loki、Kibana"
            ],
            answer: 0,
            rationale: "官方文档：PLG 栈由三部分组成——Agent (Grafana Alloy/Promtail)、Loki Server、Grafana。"
        },
        {
            id: "w12-2-q8",
            question: "官方文档对 LogQL 查询结构的描述是什么？",
            options: [
                "必须包含时间范围",
                "'{ log stream selector } | log pipeline'——流选择器必需，管道可选",
                "流选择器和管道都是可选的",
                "只能使用流选择器"
            ],
            answer: 1,
            rationale: "官方文档：LogQL 基本格式为 '{ log stream selector } | log pipeline'——流选择器是必需的，管道是可选的。"
        },
        {
            id: "w12-2-q9",
            question: "官方文档描述的 LogQL 标签过滤器支持哪些比较操作符？",
            options: [
                "只支持等于和不等于",
                "不支持数值比较",
                "只支持字符串匹配",
                "'==, !=, >, >=, <, <='，可用 'and/or' 链接条件"
            ],
            answer: 3,
            rationale: "官方文档：标签过滤器支持 '==, !=, >, >=, <, <='，可用 'and/or' 链接条件。"
        },
        {
            id: "w12-2-q10",
            question: "官方文档对高基数问题的描述是什么？",
            options: [
                "高基数不影响性能",
                "'creates thousands of tiny chunks and massive index bloat'——产生大量小块和索引膨胀",
                "高基数可以提升查询速度",
                "Loki 自动处理高基数问题"
            ],
            answer: 1,
            rationale: "官方文档：高基数 'results from labels with unbounded values or too many labels combined, creating thousands of tiny chunks and massive index bloat'。"
        },
        {
            id: "w12-2-q11",
            question: "官方文档对格式化输出的说明是什么？",
            options: [
                "不支持格式化输出",
                "只支持 JSON 格式输出",
                "'line_format() and label_format() for display customization'——用于自定义显示格式",
                "只能使用默认格式"
            ],
            answer: 2,
            rationale: "官方文档：'line_format() and label_format() for display customization'——用于格式化输出。"
        },
        {
            id: "w12-2-q12",
            question: "官方文档对避免高基数标签的建议是什么？",
            options: [
                "'Avoid labels for one-time searches or very specific identifiers'——避免使用用户 ID 等高基数值作为标签",
                "可以使用任何值作为标签",
                "用户 ID 应该作为标签",
                "IP 地址适合作为标签"
            ],
            answer: 0,
            rationale: "官方文档：'Avoid labels for one-time searches or very specific identifiers (user IDs, customer IDs)'——高基数数据应使用结构化元数据。"
        }
    ],
    "w12-3": [
        {
            id: "w12-3-q1",
            question: "分布式追踪中 Trace 和 Span 的关系是什么？",
            options: [
                "Trace 是 Span 的一部分",
                "一个 Trace 由多个 Span 组成",
                "Trace 和 Span 是同一概念",
                "每个 Span 包含多个 Trace"
            ],
            answer: 1,
            rationale: "Trace 代表一个请求的完整调用链，由多个 Span 组成。每个 Span 代表一个单独的操作（如一次 HTTP 调用、数据库查询）。"
        },
        {
            id: "w12-3-q2",
            question: "Span 之间的父子关系用什么标识？",
            options: [
                "Trace ID",
                "Span ID",
                "Parent Span ID",
                "Request ID"
            ],
            answer: 2,
            rationale: "每个 Span 都有 Parent Span ID 指向其父 Span，通过这种方式形成树状结构，反映服务调用的层级关系。"
        },
        {
            id: "w12-3-q3",
            question: "Context Propagation 的作用是什么？",
            options: [
                "压缩追踪数据",
                "在服务间传递 Trace ID 和 Span ID",
                "存储追踪数据",
                "过滤无效的追踪"
            ],
            answer: 1,
            rationale: "Context Propagation 确保 Trace ID 和 Span ID 在服务间传递（通过 HTTP Header 等），让不同服务的 Span 能够关联到同一个 Trace。"
        },
        {
            id: "w12-3-q4",
            question: "W3C Trace Context 标准的 traceparent header 包含什么信息？",
            options: [
                "只有 Trace ID",
                "Trace ID、Span ID 和采样标志",
                "服务名和操作名",
                "时间戳和持续时间"
            ],
            answer: 1,
            rationale: "traceparent header 格式为 version-trace_id-span_id-flags，包含版本号、Trace ID、Parent Span ID 和采样标志。"
        },
        {
            id: "w12-3-q5",
            question: "头部采样（Head-based Sampling）的特点是什么？",
            options: [
                "在请求完成后决定是否采样",
                "在请求入口决定是否追踪",
                "基于错误状态决定采样",
                "基于延迟决定采样"
            ],
            answer: 1,
            rationale: "头部采样在请求入口（第一个服务）决定是否追踪，采样决策随 Context 传播，确保同一 Trace 的所有 Span 要么都采样要么都不采样。"
        },
        {
            id: "w12-3-q6",
            question: "尾部采样（Tail-based Sampling）的主要优势是什么？",
            options: [
                "实现简单",
                "资源消耗低",
                "可以基于请求结果（如错误、高延迟）决定是否保留",
                "不需要 Collector"
            ],
            answer: 2,
            rationale: "尾部采样在请求完成后决定是否保留，可以基于整个 Trace 的特征（如包含错误、延迟超过阈值）做决策，避免丢失重要的追踪。"
        },
        {
            id: "w12-3-q7",
            question: "Span Attributes 和 Span Events 的区别是什么？",
            options: [
                "Attributes 是键值对，Events 是带时间戳的日志",
                "两者完全相同",
                "Attributes 只能是字符串，Events 可以是任何类型",
                "Events 必须在 Span 结束后添加"
            ],
            answer: 0,
            rationale: "Span Attributes 是描述操作的键值对（如 http.method、db.statement）；Span Events 是 Span 生命周期内的带时间戳的事件（如异常发生时刻）。"
        },
        {
            id: "w12-3-q8",
            question: "一个 HTTP 请求经过 A→B→C 三个服务，会产生多少个 Span？",
            options: [
                "1 个",
                "2 个",
                "3 个或更多",
                "取决于采样率"
            ],
            answer: 2,
            rationale: "至少 3 个 Span（每个服务一个），如果服务内部有额外的操作（如数据库调用、内部方法）可能产生更多子 Span。"
        },
        {
            id: "w12-3-q9",
            question: "为什么高流量系统必须进行追踪采样？",
            options: [
                "降低追踪的准确性",
                "避免追踪系统成为性能瓶颈和成本问题",
                "符合安全合规要求",
                "简化追踪数据结构"
            ],
            answer: 1,
            rationale: "全量追踪会产生海量数据，消耗大量存储、网络和计算资源。采样在保留足够诊断信息的同时，控制追踪系统的成本和性能影响。"
        },
        {
            id: "w12-3-q10",
            question: "什么情况下会导致追踪断链？",
            options: [
                "使用了 JSON 格式",
                "异步处理未正确传递 Context",
                "Span 持续时间太长",
                "使用了多个数据中心"
            ],
            answer: 1,
            rationale: "追踪断链常见于：异步处理（线程池、消息队列）未传递 Context；跨语言调用未正确提取/注入 Header；中间件不支持传播等场景。"
        },
        {
            id: "w12-3-q11",
            question: "TraceIdRatioBased 采样器的工作原理是什么？",
            options: [
                "随机决定每个请求是否采样",
                "基于 Trace ID 的 hash 值决定，确保同一 Trace 一致",
                "每 N 个请求采样一个",
                "基于请求内容决定"
            ],
            answer: 1,
            rationale: "TraceIdRatioBased 根据 Trace ID 的 hash 值与阈值比较决定是否采样，确保同一 Trace 的所有 Span（跨服务）采样决策一致。"
        },
        {
            id: "w12-3-q12",
            question: "B3 Propagation 和 W3C Trace Context 的关系是什么？",
            options: [
                "B3 是 W3C 的子集",
                "两者是不同的传播标准，W3C 是较新的标准",
                "B3 只用于 Zipkin",
                "两者完全相同"
            ],
            answer: 1,
            rationale: "B3 是 Zipkin 定义的较早的传播标准，W3C Trace Context 是后来的标准化规范。现代追踪系统通常两者都支持以确保互操作性。"
        },
        {
            id: "w12-3-q13",
            question: "Span Status 的作用是什么？",
            options: [
                "记录 Span 的开始时间",
                "标记操作成功或失败的状态",
                "记录 Span 的父子关系",
                "存储 Span 的属性"
            ],
            answer: 1,
            rationale: "Span Status 标记操作的结果状态：Unset（未设置）、Ok（成功）、Error（失败）。Error 状态通常会在追踪 UI 中突出显示。"
        },
        {
            id: "w12-3-q14",
            question: "自动 instrumentation 的优势是什么？",
            options: [
                "提供更细粒度的控制",
                "零代码修改即可收集追踪数据",
                "性能开销更低",
                "只支持特定语言"
            ],
            answer: 1,
            rationale: "自动 instrumentation（如 Java Agent、Python auto-instrumentation）可以无需修改代码即可为常见框架添加追踪，降低接入成本。"
        },
        {
            id: "w12-3-q15",
            question: "Span Links 的用途是什么？",
            options: [
                "建立父子关系",
                "关联非父子关系的 Span（如批处理、扇入扇出）",
                "链接到外部系统",
                "创建 Span 的副本"
            ],
            answer: 1,
            rationale: "Span Links 用于关联有因果关系但不是父子关系的 Span，如批处理场景（多个输入 Span 触发一个处理 Span）或消息队列的扇入扇出。"
        }
    ],
    "w12-4": [
        {
            id: "w12-4-q1",
            question: "OpenTelemetry 项目的来源是什么？",
            options: [
                "从零开始的新项目",
                "OpenTracing 和 OpenCensus 的合并",
                "Jaeger 的分支",
                "Prometheus 的扩展"
            ],
            answer: 1,
            rationale: "OpenTelemetry 是 OpenTracing（追踪 API 标准）和 OpenCensus（Google 的追踪+指标库）合并的结果，成为 CNCF 的统一可观测性标准。"
        },
        {
            id: "w12-4-q2",
            question: "OpenTelemetry Collector 的三个处理阶段是什么？",
            options: [
                "Input、Process、Output",
                "Receivers、Processors、Exporters",
                "Collect、Transform、Send",
                "Ingest、Filter、Export"
            ],
            answer: 1,
            rationale: "Collector 包含 Receivers（接收数据）、Processors（处理数据如批量、过滤）、Exporters（导出到后端），三者组成 Pipeline。"
        },
        {
            id: "w12-4-q3",
            question: "OTLP 协议的默认端口是什么？",
            options: [
                "gRPC: 4317, HTTP: 4318",
                "gRPC: 9411, HTTP: 14268",
                "gRPC: 6831, HTTP: 6832",
                "gRPC: 8080, HTTP: 8081"
            ],
            answer: 0,
            rationale: "OTLP（OpenTelemetry Protocol）的标准端口是 gRPC 4317 和 HTTP 4318，这是 OpenTelemetry 的原生协议。"
        },
        {
            id: "w12-4-q4",
            question: "Collector 的 Agent 模式和 Gateway 模式有什么区别？",
            options: [
                "Agent 只支持追踪，Gateway 支持所有信号",
                "Agent 部署在每个节点/Pod，Gateway 集中部署",
                "Agent 性能更高",
                "Gateway 不支持 Processors"
            ],
            answer: 1,
            rationale: "Agent 模式（DaemonSet/Sidecar）部署在数据源附近，减少延迟和丢失风险；Gateway 模式集中部署，便于管理和扩展，常用于聚合和导出。"
        },
        {
            id: "w12-4-q5",
            question: "Jaeger 的核心组件不包括哪个？",
            options: [
                "jaeger-collector",
                "jaeger-query",
                "jaeger-distributor",
                "jaeger-ingester"
            ],
            answer: 2,
            rationale: "Jaeger 核心组件包括 collector（接收数据）、query（UI 和 API）、ingester（Kafka 到存储）、agent（已弃用）。distributor 是 Loki 的组件。"
        },
        {
            id: "w12-4-q6",
            question: "配置 OTel SDK 发送数据的常用环境变量是什么？",
            options: [
                "JAEGER_ENDPOINT",
                "OTEL_EXPORTER_OTLP_ENDPOINT",
                "TRACE_COLLECTOR_URL",
                "OPENTELEMETRY_URL"
            ],
            answer: 1,
            rationale: "OTEL_EXPORTER_OTLP_ENDPOINT 是 OpenTelemetry SDK 的标准环境变量，指定 OTLP Exporter 的目标地址（Collector 或后端）。"
        },
        {
            id: "w12-4-q7",
            question: "Collector 的 batch processor 的作用是什么？",
            options: [
                "过滤无效数据",
                "将多个小请求合并为批量请求，优化网络效率",
                "修改 Span 属性",
                "采样追踪数据"
            ],
            answer: 1,
            rationale: "batch processor 将多个 Span 合并为批量请求发送，减少网络连接次数，提高效率。可以配置批次大小和超时时间。"
        },
        {
            id: "w12-4-q8",
            question: "Jaeger 支持哪些存储后端？",
            options: [
                "只支持 Elasticsearch",
                "只支持 Cassandra",
                "Elasticsearch、Cassandra、Kafka、Badger 等",
                "只支持内存存储"
            ],
            answer: 2,
            rationale: "Jaeger 支持多种存储后端：Elasticsearch（功能丰富）、Cassandra（大规模）、Kafka（缓冲层）、Badger（单节点）、内存（测试）。"
        },
        {
            id: "w12-4-q9",
            question: "如何在 Grafana 中实现从日志跳转到追踪？",
            options: [
                "自动关联，无需配置",
                "通过 TraceID 字段配置 Data Link",
                "只能手动复制 TraceID 搜索",
                "Grafana 不支持此功能"
            ],
            answer: 1,
            rationale: "在 Loki 数据源配置 Derived Fields，设置 TraceID 字段的正则匹配，配置跳转链接到 Jaeger 或 Tempo，实现一键跳转。"
        },
        {
            id: "w12-4-q10",
            question: "Collector 的 filter processor 用于什么？",
            options: [
                "压缩数据",
                "根据条件过滤掉不需要的 Span 或指标",
                "格式转换",
                "加密数据"
            ],
            answer: 1,
            rationale: "filter processor 根据配置的条件（如 Span 名称、属性值）过滤数据，例如排除健康检查的追踪，减少噪音和存储成本。"
        },
        {
            id: "w12-4-q11",
            question: "OpenTelemetry 的 Semantic Conventions 是什么？",
            options: [
                "数据传输协议",
                "标准化的属性命名规范（如 http.method）",
                "采样策略定义",
                "Collector 配置格式"
            ],
            answer: 1,
            rationale: "Semantic Conventions 定义了标准化的属性名称（如 http.method、db.system），确保不同语言、框架产生的追踪数据具有一致的命名，便于分析。"
        },
        {
            id: "w12-4-q12",
            question: "OTel Collector 的 Pipeline 如何组织？",
            options: [
                "每种信号（追踪、指标、日志）只能有一条管线",
                "可以配置多条独立管线，每条有自己的 Receivers、Processors、Exporters",
                "所有信号必须共享同一条管线",
                "管线数量等于 Exporter 数量"
            ],
            answer: 1,
            rationale: "Collector 支持配置多条 Pipeline，每条管线定义自己的 Receivers、Processors、Exporters 组合，不同信号类型可以有不同的处理流程。"
        },
        {
            id: "w12-4-q13",
            question: "Jaeger 的 jaeger-ingester 组件用于什么场景？",
            options: [
                "直接接收追踪数据",
                "从 Kafka 读取数据并写入存储",
                "提供查询 API",
                "生成测试数据"
            ],
            answer: 1,
            rationale: "jaeger-ingester 从 Kafka 消费追踪数据并写入存储后端。在高流量场景，Kafka 作为缓冲层解耦收集和存储，提高可靠性。"
        },
        {
            id: "w12-4-q14",
            question: "OpenTelemetry Operator for Kubernetes 的作用是什么？",
            options: [
                "替代 Kubernetes Operator 模式",
                "自动注入 instrumentation 和管理 Collector",
                "只用于监控 Kubernetes 组件",
                "提供 Kubernetes Dashboard"
            ],
            answer: 1,
            rationale: "OTel Operator 通过 CRD 管理 Collector 的部署和配置，并可以自动注入 instrumentation（通过 annotation）到应用 Pod，简化接入。"
        },
        {
            id: "w12-4-q15",
            question: "Grafana Tempo 相比 Jaeger 的主要优势是什么？",
            options: [
                "更好的 UI",
                "基于对象存储，成本更低，与 Grafana 生态深度集成",
                "支持更多语言",
                "查询速度更快"
            ],
            answer: 1,
            rationale: "Tempo 基于对象存储（如 S3），无需专门的数据库，成本更低。与 Grafana、Loki、Prometheus 深度集成，是 Grafana 栈的原生选择。"
        }
    ]
}
