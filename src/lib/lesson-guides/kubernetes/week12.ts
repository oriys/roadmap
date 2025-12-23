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
            "【Trace 定义】官方文档：'Traces give us the big picture of what happens when a request is made to an application'——追踪展现请求在应用中的完整路径。一个 Trace 由多个相关联的 Span 组成，共享同一个 Trace ID。",
            "【Span 结构】官方文档：Span 代表一个操作单元，包含'名称、父 Span ID、开始/结束时间、Span 上下文、属性、事件、链接和状态'。Span 可以嵌套，子 Span 通过 parent_id 关联父 Span。",
            "【SpanContext 内容】官方文档：SpanContext 是不可变对象，包含'Trace ID（标识追踪）、Span ID（标识该 Span）、Trace Flags（二进制编码）、Trace State（键值对列表）'。",
            "【上下文传播】官方文档：'Context Propagation is the core concept that enables Distributed Tracing'——上下文传播是实现分布式追踪的核心，允许跨进程、服务、数据中心关联 Span。",
            "【traceparent 格式】W3C 规范：格式为'version-trace-id-parent-id-trace-flags'，如'00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01'。trace-id 32 位十六进制（16 字节），parent-id 16 位十六进制（8 字节）。"
        ],
        keyDifficulties: [
            "【头部采样特点】官方文档：'Head sampling is a sampling technique used to make a sampling decision as early as possible'——在收集过程早期决策。优点是'简单易懂且易于配置、计算效率高'；缺点是'无法基于完整追踪数据做决策'。",
            "【尾部采样应用】官方文档：'Tail sampling is where the decision to sample a trace takes place by considering all or most of the spans within the trace'。应用场景包括'采样所有包含错误的追踪、基于整体延迟采样、基于特定属性值采样'。",
            "【尾部采样挑战】官方文档：尾部采样的挑战包括'实现和操作复杂度高、需要有状态系统承载大量数据、常为供应商专有技术'——需要权衡复杂度与收益。",
            "【trace-flags 含义】W3C 规范：'the least significant bit denotes that the caller may have recorded trace data'——最低位为 1 表示采样。值'00'表示无采样发生，'01'表示调用方已记录数据。",
            "【无效值处理】W3C 规范：'trace-id and parent-id cannot be all zeros'；'If trace-id or parent-id is invalid, implementations must ignore the entire traceparent'——无效时必须忽略整个 traceparent header。"
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
            "【Collector 四组件架构】官方文档：Collector 基于管道模型运作，包含四个核心组件——Receivers'accept telemetry data in various formats (OTLP, Jaeger, Prometheus)'接收数据；Processors'transform, filter, batch, or enrich incoming data'处理数据；Exporters'send processed telemetry to backends'导出数据；Connectors'enable data flow between pipelines for advanced routing'跨管道路由。",
            "【配置启用机制】官方文档关键语义：'Configuring a receiver does not enable it. Receivers are enabled by adding them to the appropriate pipelines within the service section'——仅配置不生效，必须在 service.pipelines 中引用组件才能启用。Processors'execute in the order they are listed'——执行顺序与配置顺序一致。",
            "【Jaeger 角色分工】官方架构文档：Jaeger v2 单一二进制可部署为不同角色——Collector'receives incoming trace data and writes it into storage backend'；Query'serves the APIs and user interface for querying and visualizing traces'；Ingester'processes spans from Kafka queues into storage'；Agent'forwards trace data'作为 sidecar 运行。",
            "【两种部署架构】官方文档：Direct-to-Storage 模式 Collector 直接写入后端，'risks data loss during sustained traffic spikes'；Kafka-Based 模式'Kafka can be used as an intermediary, persistent queue between collectors and storage'，多个 Ingester 分担负载，防止数据丢失。",
            "【OTel Demo 价值】官方文档：Demo 包含 15+ 微服务覆盖多种语言——.NET（Accounting/Cart）、Go（Checkout/Product Catalog）、Java（Ad）、Python（Recommendation）、Rust（Shipping）等。'Feature flag enabled scenarios walk you through pre-configured problems and show how to interpret OpenTelemetry data to solve them'——演示真实故障排查场景。"
        ],
        keyDifficulties: [
            "【部署模式选择】官方文档：Agent Mode'runs alongside services to offload data quickly, handle retries, batching, and encryption locally'——靠近数据源处理；Gateway Mode'centralized collector receiving data from multiple agents for aggregation and processing'——集中处理便于管理。'Default OTLP exporters assume a local collector endpoint'——SDK 默认指向本地 Collector。",
            "【Pipeline 配置语法】官方文档：三种管道类型'traces, metrics, logs'；每个 Pipeline 指定'receivers, processors (optional), and exporters'。同类型多实例使用'type/name'格式区分（如 otlp, otlp/2）。环境变量语法：'${env:DB_KEY}' 或带默认值 '${env:DB_KEY:-default}'。",
            "【Jaeger 存储后端选型】官方文档：支持 Badger（'single-instance, production-limited'开发用）、Cassandra、Elasticsearch、Kafka、Memory（'development only'）、OpenSearch。生产环境需根据数据量、查询需求和运维能力选择。Kafka 作为缓冲层可解耦收集与存储。",
            "【Collector 配置验证】官方文档：默认配置路径'/etc/<otel-directory>/config.yaml'；覆盖配置'otelcol --config=customconfig.yaml'；多文件组合'--config=file:/path/1 --config=file:/path/2'；验证配置'otelcol validate --config=customconfig.yaml'——部署前验证防止运行时错误。",
            "【Jaeger UI 功能】官方文档：Web 界面'discover architecture via data-driven dependency diagram'——可视化服务拓扑；'view request timelines, identify latency sources'——追踪时间线和延迟源。SPM（Service Performance Monitoring）模块提供性能洞察。推荐使用'OpenTelemetry instrumentation and SDKs'作为供应商中立的埋点方案。"
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
            question: "官方文档对 Trace 的定义是什么？",
            options: [
                "单个服务的日志记录",
                "数据库查询优化工具",
                "'Traces give us the big picture of what happens when a request is made to an application'——展现请求完整路径",
                "性能监控指标"
            ],
            answer: 2,
            rationale: "官方文档：'Traces give us the big picture of what happens when a request is made to an application'——追踪展现请求在应用中的完整路径。"
        },
        {
            id: "w12-3-q2",
            question: "官方文档对 Context Propagation 的描述是什么？",
            options: [
                "'Context Propagation is the core concept that enables Distributed Tracing'——实现分布式追踪的核心",
                "一种数据压缩技术",
                "日志收集机制",
                "性能优化方案"
            ],
            answer: 0,
            rationale: "官方文档：'Context Propagation is the core concept that enables Distributed Tracing'——上下文传播是实现分布式追踪的核心。"
        },
        {
            id: "w12-3-q3",
            question: "W3C traceparent header 的格式是什么？",
            options: [
                "trace-id:span-id",
                "'version-trace-id-parent-id-trace-flags'——四个字段用连字符分隔",
                "只包含 trace-id",
                "JSON 格式的对象"
            ],
            answer: 1,
            rationale: "W3C 规范：traceparent 格式为 'version-trace-id-parent-id-trace-flags'，如 '00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01'。"
        },
        {
            id: "w12-3-q4",
            question: "W3C 规范对 trace-id 字段的要求是什么？",
            options: [
                "8 位十六进制字符",
                "任意长度的字符串",
                "UUID 格式",
                "'32 hex chars'——32 位十六进制字符（16 字节）"
            ],
            answer: 3,
            rationale: "W3C 规范：trace-id 是 '32 hex chars'，即 16 字节的全局唯一标识符。"
        },
        {
            id: "w12-3-q5",
            question: "官方文档对头部采样的描述是什么？",
            options: [
                "在请求完成后决定采样",
                "'Head sampling is a sampling technique used to make a sampling decision as early as possible'——尽早做出采样决策",
                "基于错误率决定采样",
                "由后端系统决定采样"
            ],
            answer: 1,
            rationale: "官方文档：'Head sampling is a sampling technique used to make a sampling decision as early as possible'——在收集过程早期决策。"
        },
        {
            id: "w12-3-q6",
            question: "官方文档对尾部采样的描述是什么？",
            options: [
                "只采样最后一个 Span",
                "在请求入口决定采样",
                "'decision to sample a trace takes place by considering all or most of the spans within the trace'——考虑所有 Span 后决策",
                "随机采样"
            ],
            answer: 2,
            rationale: "官方文档：'Tail sampling is where the decision to sample a trace takes place by considering all or most of the spans within the trace'。"
        },
        {
            id: "w12-3-q7",
            question: "官方文档列出的尾部采样应用场景有哪些？",
            options: [
                "'采样所有包含错误的追踪、基于整体延迟采样、基于特定属性值采样'",
                "只用于测试环境",
                "只采样成功的请求",
                "随机选择请求"
            ],
            answer: 0,
            rationale: "官方文档：尾部采样应用场景包括 '采样所有包含错误的追踪、基于整体延迟采样、基于特定属性值采样、对不同服务应用不同采样率'。"
        },
        {
            id: "w12-3-q8",
            question: "官方文档描述的尾部采样挑战有哪些？",
            options: [
                "没有任何挑战",
                "只是配置复杂",
                "只影响性能",
                "'实现和操作复杂度高、需要有状态系统承载大量数据、常为供应商专有技术'"
            ],
            answer: 3,
            rationale: "官方文档：尾部采样的挑战包括 '实现和操作复杂度高、需要有状态系统承载大量数据、常为供应商专有技术'。"
        },
        {
            id: "w12-3-q9",
            question: "W3C 规范对 trace-flags 采样位的描述是什么？",
            options: [
                "最高位表示采样",
                "'the least significant bit denotes that the caller may have recorded trace data'——最低位表示采样",
                "所有位都表示采样",
                "不包含采样信息"
            ],
            answer: 1,
            rationale: "W3C 规范：'the least significant bit denotes that the caller may have recorded trace data' when set to 1。值 '00' 表示无采样，'01' 表示已采样。"
        },
        {
            id: "w12-3-q10",
            question: "W3C 规范对无效 traceparent 的处理要求是什么？",
            options: [
                "尝试修复并使用",
                "使用默认值替代",
                "'implementations must ignore the entire traceparent'——必须忽略整个 traceparent",
                "返回错误响应"
            ],
            answer: 2,
            rationale: "W3C 规范：'If trace-id or parent-id is invalid, implementations must ignore the entire traceparent'——无效时必须忽略整个 header。"
        },
        {
            id: "w12-3-q11",
            question: "官方文档描述的 SpanContext 包含哪些内容？",
            options: [
                "只包含 Trace ID",
                "只包含时间戳",
                "'Trace ID、Span ID、Trace Flags、Trace State'",
                "只包含服务名称"
            ],
            answer: 2,
            rationale: "官方文档：SpanContext 是不可变对象，包含 'Trace ID、Span ID、Trace Flags（二进制编码）、Trace State（键值对列表）'。"
        },
        {
            id: "w12-3-q12",
            question: "W3C 规范对 trace-id 和 parent-id 全零值的规定是什么？",
            options: [
                "全零是有效的默认值",
                "'trace-id and parent-id cannot be all zeros'——全零是禁止的",
                "全零表示根 Span",
                "全零表示未采样"
            ],
            answer: 1,
            rationale: "W3C 规范：'All-zeros forbidden: Both trace-id and parent-id cannot be all zeros'——全零是无效值。"
        }
    ],
    "w12-4": [
        {
            id: "w12-4-q1",
            question: "官方文档对 Collector 四个核心组件的描述是什么？",
            options: [
                "Input、Process、Output、Connect",
                "Collect、Transform、Send、Route",
                "Receivers、Processors、Exporters、Connectors",
                "Ingest、Filter、Export、Bridge"
            ],
            answer: 2,
            rationale: "官方文档：Collector 包含四个核心组件——Receivers 接收数据、Processors 处理数据、Exporters 导出数据、Connectors 跨管道路由。"
        },
        {
            id: "w12-4-q2",
            question: "官方文档对 Receiver 配置与启用的关键说明是什么？",
            options: [
                "'Configuring a receiver does not enable it...must add to pipelines in the service section'——仅配置不生效",
                "配置即启用，无需额外操作",
                "必须在 extensions 中声明才能启用",
                "只需重启 Collector 即可生效"
            ],
            answer: 0,
            rationale: "官方文档：'Configuring a receiver does not enable it. Receivers are enabled by adding them to the appropriate pipelines within the service section'。"
        },
        {
            id: "w12-4-q3",
            question: "官方文档对 Agent Mode 的描述是什么？",
            options: [
                "集中处理所有数据的模式",
                "只用于测试环境的简化模式",
                "不支持重试和批处理的轻量模式",
                "'runs alongside services to offload data quickly, handle retries, batching, and encryption locally'"
            ],
            answer: 3,
            rationale: "官方文档：Agent Mode 'runs alongside services to offload data quickly, handle retries, batching, and encryption locally'——靠近数据源处理。"
        },
        {
            id: "w12-4-q4",
            question: "官方文档对 Jaeger Collector 角色的描述是什么？",
            options: [
                "提供查询 UI 和 API",
                "'receives incoming trace data from applications and writes it into a storage backend'",
                "从 Kafka 读取数据",
                "生成测试追踪数据"
            ],
            answer: 1,
            rationale: "官方架构文档：Collector 'receives incoming trace data from applications and writes it into a storage backend'——接收数据并写入存储。"
        },
        {
            id: "w12-4-q5",
            question: "官方文档对 Direct-to-Storage 部署模式的风险警告是什么？",
            options: [
                "不支持高可用部署",
                "无法使用 Processors",
                "'risks data loss during sustained traffic spikes'——持续流量高峰时有数据丢失风险",
                "只能使用内存存储"
            ],
            answer: 2,
            rationale: "官方文档：Direct-to-Storage 模式 'risks data loss during sustained traffic spikes'——在持续流量高峰时存在数据丢失风险。"
        },
        {
            id: "w12-4-q6",
            question: "官方文档对 Kafka-Based 部署架构的描述是什么？",
            options: [
                "'Kafka can be used as an intermediary, persistent queue between collectors and storage'——Kafka 作为持久化缓冲层",
                "Kafka 只用于日志收集",
                "Kafka 替代 Collector 直接接收数据",
                "Kafka 只能与 Elasticsearch 配合使用"
            ],
            answer: 0,
            rationale: "官方文档：'Kafka can be used as an intermediary, persistent queue between collectors and storage'——多个 Ingester 分担负载，防止数据丢失。"
        },
        {
            id: "w12-4-q7",
            question: "官方文档对 Jaeger 存储后端 Badger 的限制描述是什么？",
            options: [
                "不支持追踪数据",
                "'single-instance, production-limited'——单实例，生产环境受限",
                "只能存储 24 小时数据",
                "需要额外付费授权"
            ],
            answer: 1,
            rationale: "官方文档：Badger 是 'single-instance, production-limited'——适合开发测试，生产环境能力受限。"
        },
        {
            id: "w12-4-q8",
            question: "官方文档对 Collector 配置验证命令的说明是什么？",
            options: [
                "使用 otelcol check 命令",
                "配置文件无法预先验证",
                "必须启动 Collector 才能验证",
                "'otelcol validate --config=customconfig.yaml'——部署前验证配置"
            ],
            answer: 3,
            rationale: "官方文档：使用 'otelcol validate --config=customconfig.yaml' 命令在部署前验证配置文件，防止运行时错误。"
        },
        {
            id: "w12-4-q9",
            question: "官方文档对 Pipeline 类型的说明是什么？",
            options: [
                "只支持 traces 一种类型",
                "支持 data、meta、control 三种类型",
                "支持 traces、metrics、logs 三种类型",
                "Pipeline 类型由 Exporter 决定"
            ],
            answer: 2,
            rationale: "官方文档：Pipeline 有三种类型'traces, metrics, logs'，每种可以独立配置 Receivers、Processors、Exporters。"
        },
        {
            id: "w12-4-q10",
            question: "官方文档对 Jaeger UI 核心功能的描述是什么？",
            options: [
                "'discover architecture via data-driven dependency diagram' 和 'view request timelines, identify latency sources'",
                "只提供原始 JSON 数据查看",
                "只支持搜索功能",
                "需要额外安装可视化插件"
            ],
            answer: 0,
            rationale: "官方文档：Jaeger UI 可以 'discover architecture via data-driven dependency diagram' 和 'view request timelines, identify latency sources'。"
        },
        {
            id: "w12-4-q11",
            question: "官方文档推荐使用什么方案进行应用埋点？",
            options: [
                "Jaeger 原生 SDK",
                "'OpenTelemetry instrumentation and SDKs'——供应商中立的 OTel 方案",
                "自研埋点代码",
                "Zipkin SDK"
            ],
            answer: 1,
            rationale: "Jaeger 官方文档推荐使用 'OpenTelemetry instrumentation and SDKs' 作为供应商中立的埋点方案。"
        },
        {
            id: "w12-4-q12",
            question: "官方文档对 OTel Demo 的价值描述是什么？",
            options: [
                "只是简单的 Hello World 示例",
                "只演示 traces 信号",
                "需要购买商业许可",
                "'Feature flag enabled scenarios walk you through pre-configured problems and show how to interpret OpenTelemetry data'"
            ],
            answer: 3,
            rationale: "官方文档：Demo 的核心价值是 'Feature flag enabled scenarios walk you through pre-configured problems and show how to interpret OpenTelemetry data to solve them'——演示真实故障排查。"
        }
    ]
}
