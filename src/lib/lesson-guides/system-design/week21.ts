import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week21Guides: Record<string, LessonGuide> = {
    "w21-1": {
        lessonId: "w21-1",
        background: [
            "【四种指标类型】Prometheus 定义四种核心指标类型：Counter（只增不减的累计值，如请求总数）、Gauge（可增可减的瞬时值，如内存使用）、Histogram（观测值分布，使用桶统计）、Summary（客户端计算的分位数）。",
            "【Counter 语义】Counter 是单调递增的累计值：'A counter is a cumulative metric that represents a single monotonically increasing counter'。典型用例：请求总数、错误总数、处理的字节数。使用 rate() 函数计算增长速率。",
            "【Gauge 语义】Gauge 表示可以任意上下波动的值：'A gauge is a metric that represents a single numerical value that can arbitrarily go up and down'。典型用例：温度、内存使用、队列长度、并发连接数。",
            "【Histogram 语义】Histogram 将观测值放入预定义的桶中统计：'A histogram samples observations and counts them in configurable buckets'。生成三类时间序列：_bucket（各桶计数）、_sum（总和）、_count（观测次数）。",
            "【RED 方法】Tom Wilkie 提出的微服务监控方法：Rate（每秒请求数）、Errors（失败请求数）、Duration（请求延迟分布）。'For every service, monitor request rate, error rate, and latency'。"
        ],
        keyDifficulties: [
            "【Histogram vs Summary】关键区别：Histogram 在服务端计算分位数（可聚合），Summary 在客户端预计算分位数（不可聚合）。'If you need to aggregate, choose histograms. If you need accurate quantiles, use summaries'。Histogram 需要合理设置桶边界。",
            "【USE 方法】Brendan Gregg 提出的基础设施监控方法：Utilization（资源使用率）、Saturation（饱和度，排队程度）、Errors（错误数）。USE 用于资源（CPU、内存、磁盘、网络），RED 用于服务。",
            "【桶边界设计】Histogram 桶边界影响精度和存储。默认桶：.005, .01, .025, .05, .1, .25, .5, 1, 2.5, 5, 10。应根据 SLO 目标设计：如果 SLO 是 200ms，需要在 200ms 附近有足够的桶边界。",
            "【指标命名规范】Prometheus 命名规范：snake_case、包含单位后缀（_seconds、_bytes）、Counter 以 _total 结尾。好的命名：http_requests_total、http_request_duration_seconds。"
        ],
        handsOnPath: [
            "定义 Counter：const httpRequestsTotal = new Counter({ name: 'http_requests_total', help: 'Total HTTP requests', labelNames: ['method', 'status'] });",
            "定义 Histogram：const httpDuration = new Histogram({ name: 'http_request_duration_seconds', help: 'Request duration', buckets: [0.1, 0.3, 0.5, 1, 2, 5] });",
            "计算请求速率：rate(http_requests_total[5m]) // 过去 5 分钟的每秒请求数",
            "计算 P99 延迟：histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))",
            "实现 RED 监控：分别定义 requests_total、errors_total、request_duration_seconds 三个指标"
        ],
        selfCheck: [
            "Counter 和 Gauge 的区别是什么？",
            "Histogram 生成哪三类时间序列？",
            "为什么 Summary 不能聚合？",
            "RED 方法的三个指标是什么？",
            "如何根据 SLO 设计 Histogram 桶边界？"
        ],
        extensions: [
            "研究 OpenMetrics 规范对 Prometheus 指标格式的扩展。",
            "学习 Exemplars 如何将指标与 Trace 关联。",
            "了解高基数标签（High Cardinality）的问题和解决方案。",
            "研究指标聚合和降采样策略。"
        ],
        sourceUrls: [
            "https://prometheus.io/docs/concepts/metric_types/",
            "https://prometheus.io/docs/practices/histograms/",
            "https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/"
        ]
    },
    "w21-2": {
        lessonId: "w21-2",
        background: [
            "【Prometheus 架构】Prometheus 采用 Pull 模型：'Prometheus scrapes metrics from instrumented jobs'。核心组件：Prometheus Server（抓取和存储）、Pushgateway（短期任务）、Alertmanager（告警）、各种 Exporter（暴露指标）。",
            "【时序数据库 TSDB】Prometheus 内置高效的 TSDB：基于时间分块存储、使用压缩算法（Gorilla）、支持高效的时间范围查询。本地存储适合短期数据（默认 15 天），长期存储需要远程存储。",
            "【服务发现】Prometheus 支持多种服务发现机制：静态配置、文件发现、Kubernetes SD、Consul SD、EC2 SD 等。'Service discovery allows Prometheus to find scrape targets dynamically'。",
            "【Thanos 架构】Thanos 为 Prometheus 提供长期存储和全局查询：Sidecar（上传数据到对象存储）、Store Gateway（查询历史数据）、Querier（统一查询入口）、Compactor（压缩和降采样）。",
            "【Recording Rules】Recording Rules 预计算复杂查询：'Recording rules allow you to precompute frequently needed or computationally expensive expressions'。减少查询延迟，支持复杂告警规则。"
        ],
        keyDifficulties: [
            "【Pull vs Push 模型】Pull 模型优势：服务端控制抓取频率、易于发现服务健康状态、避免推送风暴。缺点：需要服务发现、短期任务难以抓取（需要 Pushgateway）。",
            "【远程存储选型】长期存储选项：Thanos（对象存储）、Cortex（多租户）、VictoriaMetrics（高性能）、Mimir（Grafana Labs）。选择因素：存储成本、查询性能、运维复杂度。",
            "【PromQL 性能优化】避免高基数查询、使用 Recording Rules 预计算、合理设置查询时间范围、避免使用 without() 产生的笛卡尔积。",
            "【Thanos 组件职责】Sidecar 负责上传和实时查询；Store Gateway 负责历史查询；Querier 负责合并多个数据源；Compactor 负责压缩和降采样。Ruler 支持分布式告警规则评估。"
        ],
        handsOnPath: [
            "配置 Prometheus 抓取：scrape_configs: [{ job_name: 'app', static_configs: [{ targets: ['localhost:8080'] }] }]",
            "配置 Kubernetes 服务发现：kubernetes_sd_configs: [{ role: pod }] 配合 relabel_configs 过滤目标",
            "定义 Recording Rule：record: job:http_requests:rate5m; expr: sum(rate(http_requests_total[5m])) by (job)",
            "部署 Thanos Sidecar：在 Prometheus Pod 中添加 Sidecar 容器，配置对象存储上传",
            "配置远程写入：remote_write: [{ url: 'http://thanos-receive:19291/api/v1/receive' }]"
        ],
        selfCheck: [
            "Prometheus 的 Pull 模型有什么优势？",
            "Thanos 的四个核心组件分别是什么？",
            "Recording Rules 的作用是什么？",
            "如何选择远程存储方案？",
            "高基数标签会导致什么问题？"
        ],
        extensions: [
            "研究 Prometheus Federation 跨集群聚合。",
            "学习 Prometheus Operator 在 Kubernetes 中的部署。",
            "了解 VictoriaMetrics 的架构和性能优势。",
            "研究 PromQL 的高级函数和子查询。"
        ],
        sourceUrls: [
            "https://prometheus.io/docs/introduction/overview/#architecture",
            "https://thanos.io/tip/thanos/design.md/",
            "https://prometheus.io/docs/practices/rules/"
        ]
    },
    "w21-3": {
        lessonId: "w21-3",
        background: [
            "【Alertmanager 职责】Alertmanager 处理 Prometheus 发送的告警：去重（Deduplication）、分组（Grouping）、路由（Routing）、抑制（Inhibition）、静默（Silencing）。'Alertmanager handles alerts sent by client applications'。",
            "【告警路由】路由树决定告警发送到哪个接收者：'A route block defines a node in a routing tree'。匹配规则基于标签，支持继承和覆盖。常用接收者：Email、Slack、PagerDuty、Webhook。",
            "【告警分组】分组减少告警风暴：'Grouping categorizes alerts of similar nature into a single notification'。group_by 指定分组标签，group_wait 控制首次等待时间，group_interval 控制后续发送间隔。",
            "【告警抑制】抑制规则阻止某些告警发送：当源告警触发时，抑制匹配的目标告警。典型场景：集群故障时抑制单节点告警、主告警触发时抑制从属告警。",
            "【Google SRE 告警原则】'Every time the pager goes off, I should be able to react with a sense of urgency'。告警应该是可操作的、基于症状的、代表真正的问题。避免告警疲劳。"
        ],
        keyDifficulties: [
            "【告警规则设计】好的告警规则：基于症状而非原因、设置合理阈值和持续时间（for 子句）、包含有用的标签和注解。避免：过于敏感导致告警风暴、阈值过高导致漏报。",
            "【多烧率告警】Google SRE Workbook 推荐的 SLO 告警方法：使用多个时间窗口和燃烧率组合。短窗口高燃烧率检测快速恶化，长窗口低燃烧率检测缓慢漂移。",
            "【On-Call 轮转设计】PagerDuty 建议：'Ensure your on-call rotation is fair and sustainable'。考虑时区覆盖、轮转周期（通常一周）、升级路径、补偿机制。避免单点故障。",
            "【静默与维护窗口】静默（Silence）临时禁止告警：用于计划维护、已知问题处理中。设置合理的过期时间，添加创建者和原因说明。维护窗口应提前安排。"
        ],
        handsOnPath: [
            "定义告警规则：alert: HighErrorRate; expr: rate(http_errors_total[5m]) / rate(http_requests_total[5m]) > 0.01; for: 5m",
            "配置路由：route: { group_by: ['alertname', 'cluster'], receiver: 'slack', routes: [{ match: { severity: 'critical' }, receiver: 'pagerduty' }] }",
            "配置抑制：inhibit_rules: [{ source_match: { severity: 'critical' }, target_match: { severity: 'warning' }, equal: ['alertname', 'cluster'] }]",
            "实现多烧率告警：使用 5m/1h/6h 三个窗口，分别设置 14.4x/6x/1x 燃烧率阈值",
            "创建静默：通过 Alertmanager UI 或 API 创建，指定匹配器、持续时间、创建者、原因"
        ],
        selfCheck: [
            "Alertmanager 的五个核心功能是什么？",
            "告警分组的作用是什么？",
            "什么是告警抑制？典型场景是什么？",
            "好的告警规则应该具备什么特点？",
            "多烧率告警的原理是什么？"
        ],
        extensions: [
            "研究 Alertmanager 的高可用部署（集群模式）。",
            "学习 PagerDuty 的事件管理和升级策略。",
            "了解 Opsgenie、VictorOps 等 On-Call 平台。",
            "研究 AIOps 在告警降噪中的应用。"
        ],
        sourceUrls: [
            "https://prometheus.io/docs/alerting/latest/configuration/",
            "https://sre.google/sre-book/practical-alerting/",
            "https://www.pagerduty.com/resources/learn/call-rotations-schedules/"
        ]
    },
    "w21-4": {
        lessonId: "w21-4",
        background: [
            "【Dashboard 设计原则】Grafana 建议：'A dashboard should tell a story or answer a question'。每个 Dashboard 应有明确目的，避免信息过载。使用层级结构：概览 → 服务 → 实例 → 详情。",
            "【认知负荷】减少认知负荷：'Reduce cognitive load by using consistent patterns'。统一颜色含义（红色=错误）、统一时间范围、统一刷新频率。避免在一个 Dashboard 放置过多面板。",
            "【Dashboard 成熟度模型】Grafana 提出四级成熟度：L1（静态/手动）、L2（可复用模板）、L3（可编程/代码管理）、L4（自动化/自愈）。大多数团队应向 L3 努力。",
            "【变量与模板】Grafana 变量实现 Dashboard 复用：'Variables allow you to create more interactive and dynamic dashboards'。常用变量类型：Query（从数据源查询）、Custom（预定义值）、Interval（时间间隔）。",
            "【SLO Dashboard】SLO 仪表盘展示服务级别目标状态：错误预算消耗、燃烧率、SLI 趋势。Google SRE：'SLO dashboards should make it easy to see current SLO status and error budget'。"
        ],
        keyDifficulties: [
            "【面板类型选择】Time Series 用于趋势、Stat 用于单值、Table 用于列表、Heatmap 用于分布、Logs 用于日志。选择应匹配数据类型和查看目的。",
            "【告警集成】Dashboard 可以内嵌告警状态：使用 Alert List 面板显示当前告警、在 Time Series 上标注告警触发点、使用颜色阈值反映健康状态。",
            "【链接与导航】Dashboard 链接提高导航效率：Data Links 从面板跳转到详情、Panel Links 关联相关 Dashboard、Variables 在 URL 中传递。支持跨工具跳转（如跳转到 Trace）。",
            "【Dashboard as Code】使用代码管理 Dashboard：Grafonnet（Jsonnet 库）、Terraform Provider、Grafana API。版本控制、代码审查、自动化部署。"
        ],
        handsOnPath: [
            "创建变量：Type: Query; Data source: Prometheus; Query: label_values(up, job); Multi-value: true",
            "在查询中使用变量：sum(rate(http_requests_total{job=~\"$job\"}[5m])) by (status)",
            "配置面板阈值：Thresholds: 90% → green, 95% → yellow, 99% → red",
            "添加 Data Link：Title: View Traces; URL: /explore?left={\"queries\":[{\"expr\":\"trace_id=${__value.text}\"}]}",
            "使用 Grafonnet 定义 Dashboard：local grafana = import 'grafonnet/grafana.libsonnet'; grafana.dashboard.new('My Dashboard')"
        ],
        selfCheck: [
            "Dashboard 设计的核心原则是什么？",
            "如何减少 Dashboard 的认知负荷？",
            "Grafana 变量有哪些类型？",
            "SLO Dashboard 应该展示什么信息？",
            "Dashboard as Code 有什么优势？"
        ],
        extensions: [
            "研究 Grafana Scenes 构建动态应用。",
            "学习 Grafana Alerting 与 Dashboard 的集成。",
            "了解 Grafana Cloud 的托管服务。",
            "研究 Dashboard 的性能优化（查询优化、缓存）。"
        ],
        sourceUrls: [
            "https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/",
            "https://sre.google/workbook/alerting-on-slos/",
            "https://grafana.com/docs/grafana/latest/dashboards/variables/"
        ]
    }
}

export const week21Quizzes: Record<string, QuizQuestion[]> = {
    "w21-1": [
        {
            id: "w21-1-q1",
            question: "Prometheus 的四种指标类型不包括？",
            options: [
                "Counter",
                "Gauge",
                "Timer",
                "Histogram"
            ],
            answer: 2,
            rationale: "Prometheus 四种指标类型：Counter、Gauge、Histogram、Summary。没有 Timer 类型。"
        },
        {
            id: "w21-1-q2",
            question: "Counter 类型的特点是什么？",
            options: [
                "可以任意增减",
                "只能增加，不能减少",
                "只能减少，不能增加",
                "始终为常量"
            ],
            answer: 1,
            rationale: "'A counter is a cumulative metric that represents a single monotonically increasing counter'——只能增加，不能减少。"
        },
        {
            id: "w21-1-q3",
            question: "Histogram 生成哪三类时间序列？",
            options: [
                "_min, _max, _avg",
                "_bucket, _sum, _count",
                "_p50, _p90, _p99",
                "_rate, _total, _duration"
            ],
            answer: 1,
            rationale: "Histogram 生成三类时间序列：_bucket（各桶计数）、_sum（总和）、_count（观测次数）。"
        },
        {
            id: "w21-1-q4",
            question: "Histogram 和 Summary 的关键区别是什么？",
            options: [
                "Histogram 更精确",
                "Summary 可以聚合",
                "Histogram 在服务端计算分位数（可聚合），Summary 在客户端预计算（不可聚合）",
                "没有区别"
            ],
            answer: 2,
            rationale: "'If you need to aggregate, choose histograms. If you need accurate quantiles, use summaries'——Histogram 可聚合，Summary 不可聚合。"
        },
        {
            id: "w21-1-q5",
            question: "RED 方法的三个指标是什么？",
            options: [
                "Requests, Errors, Duration",
                "Rate, Errors, Duration",
                "Resources, Errors, Delay",
                "Rate, Events, Data"
            ],
            answer: 1,
            rationale: "RED 方法：Rate（每秒请求数）、Errors（失败请求数）、Duration（请求延迟分布）。"
        },
        {
            id: "w21-1-q6",
            question: "USE 方法适用于什么场景？",
            options: [
                "微服务监控",
                "基础设施资源监控（CPU、内存、磁盘、网络）",
                "日志分析",
                "分布式追踪"
            ],
            answer: 1,
            rationale: "USE 方法（Utilization、Saturation、Errors）用于资源（CPU、内存、磁盘、网络），RED 用于服务。"
        },
        {
            id: "w21-1-q7",
            question: "Gauge 类型适合记录什么？",
            options: [
                "请求总数",
                "错误总数",
                "内存使用量、温度、队列长度",
                "请求延迟"
            ],
            answer: 2,
            rationale: "Gauge 表示可以任意上下波动的值，适合内存使用、温度、队列长度、并发连接数等。"
        },
        {
            id: "w21-1-q8",
            question: "Prometheus 指标命名规范中，Counter 应该以什么结尾？",
            options: [
                "_count",
                "_total",
                "_sum",
                "_counter"
            ],
            answer: 1,
            rationale: "Prometheus 命名规范：Counter 以 _total 结尾，如 http_requests_total。"
        },
        {
            id: "w21-1-q9",
            question: "如何计算 Prometheus Counter 的增长速率？",
            options: [
                "直接查询 Counter 值",
                "使用 rate() 函数",
                "使用 sum() 函数",
                "使用 max() 函数"
            ],
            answer: 1,
            rationale: "使用 rate() 函数计算 Counter 的每秒增长速率，如 rate(http_requests_total[5m])。"
        },
        {
            id: "w21-1-q10",
            question: "设计 Histogram 桶边界时应考虑什么？",
            options: [
                "只使用默认桶",
                "根据 SLO 目标设计，在关键阈值附近有足够的桶边界",
                "桶越多越好",
                "桶越少越好"
            ],
            answer: 1,
            rationale: "应根据 SLO 目标设计桶边界：如果 SLO 是 200ms，需要在 200ms 附近有足够的桶边界。"
        },
        {
            id: "w21-1-q11",
            question: "USE 方法中的 Saturation 是什么意思？",
            options: [
                "资源使用率",
                "错误率",
                "饱和度，表示资源排队程度",
                "响应时间"
            ],
            answer: 2,
            rationale: "USE 方法：Utilization（使用率）、Saturation（饱和度/排队程度）、Errors（错误数）。"
        },
        {
            id: "w21-1-q12",
            question: "如何从 Histogram 计算 P99 延迟？",
            options: [
                "直接读取 _p99 序列",
                "使用 histogram_quantile(0.99, ...) 函数",
                "使用 avg() 函数",
                "使用 max() 函数"
            ],
            answer: 1,
            rationale: "使用 histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])) 计算 P99。"
        }
    ],
    "w21-2": [
        {
            id: "w21-2-q1",
            question: "Prometheus 采用什么模型采集指标？",
            options: [
                "Push 模型",
                "Pull 模型",
                "Pub/Sub 模型",
                "Streaming 模型"
            ],
            answer: 1,
            rationale: "'Prometheus scrapes metrics from instrumented jobs'——Prometheus 采用 Pull 模型主动抓取指标。"
        },
        {
            id: "w21-2-q2",
            question: "Prometheus Pull 模型的优势不包括？",
            options: [
                "服务端控制抓取频率",
                "易于发现服务健康状态",
                "短期任务易于抓取",
                "避免推送风暴"
            ],
            answer: 2,
            rationale: "Pull 模型的缺点是短期任务难以抓取（需要 Pushgateway）。优势包括控制频率、发现健康状态、避免推送风暴。"
        },
        {
            id: "w21-2-q3",
            question: "Thanos 的 Sidecar 组件的职责是什么？",
            options: [
                "查询历史数据",
                "上传数据到对象存储并提供实时查询",
                "压缩和降采样",
                "统一查询入口"
            ],
            answer: 1,
            rationale: "Thanos Sidecar 负责上传 Prometheus 数据到对象存储，并提供实时查询能力。"
        },
        {
            id: "w21-2-q4",
            question: "Recording Rules 的作用是什么？",
            options: [
                "发送告警",
                "预计算复杂查询，减少查询延迟",
                "数据备份",
                "日志记录"
            ],
            answer: 1,
            rationale: "'Recording rules allow you to precompute frequently needed or computationally expensive expressions'。"
        },
        {
            id: "w21-2-q5",
            question: "Thanos 的 Compactor 组件的职责是什么？",
            options: [
                "实时查询",
                "数据上传",
                "压缩和降采样历史数据",
                "告警评估"
            ],
            answer: 2,
            rationale: "Thanos Compactor 负责压缩和降采样对象存储中的历史数据，减少存储空间和查询开销。"
        },
        {
            id: "w21-2-q6",
            question: "Prometheus 本地存储的默认保留时间是多少？",
            options: [
                "7 天",
                "15 天",
                "30 天",
                "90 天"
            ],
            answer: 1,
            rationale: "Prometheus 本地存储适合短期数据，默认保留 15 天。长期存储需要远程存储方案。"
        },
        {
            id: "w21-2-q7",
            question: "高基数标签会导致什么问题？",
            options: [
                "查询变快",
                "存储膨胀和查询性能下降",
                "数据更准确",
                "没有问题"
            ],
            answer: 1,
            rationale: "高基数标签（如 user_id）会导致时间序列爆炸，存储膨胀和查询性能下降。应避免或限制。"
        },
        {
            id: "w21-2-q8",
            question: "Thanos Querier 的职责是什么？",
            options: [
                "上传数据",
                "压缩数据",
                "统一查询入口，合并多个数据源",
                "评估告警规则"
            ],
            answer: 2,
            rationale: "Thanos Querier 是统一查询入口，负责合并来自 Sidecar、Store Gateway 等多个数据源的数据。"
        },
        {
            id: "w21-2-q9",
            question: "Prometheus 支持的服务发现机制不包括？",
            options: [
                "Kubernetes SD",
                "Consul SD",
                "MySQL SD",
                "EC2 SD"
            ],
            answer: 2,
            rationale: "Prometheus 支持 Kubernetes SD、Consul SD、EC2 SD、DNS SD 等，但没有 MySQL SD。"
        },
        {
            id: "w21-2-q10",
            question: "Pushgateway 用于什么场景？",
            options: [
                "长时间运行的服务",
                "短期任务和批处理作业",
                "数据库监控",
                "日志采集"
            ],
            answer: 1,
            rationale: "Pushgateway 用于短期任务和批处理作业，因为这些任务可能在 Prometheus 抓取之前就结束了。"
        },
        {
            id: "w21-2-q11",
            question: "选择远程存储方案时应考虑什么因素？",
            options: [
                "只考虑价格",
                "存储成本、查询性能、运维复杂度",
                "只考虑性能",
                "只考虑功能"
            ],
            answer: 1,
            rationale: "选择远程存储应综合考虑：存储成本、查询性能、运维复杂度、多租户支持等因素。"
        },
        {
            id: "w21-2-q12",
            question: "Store Gateway 在 Thanos 中的作用是什么？",
            options: [
                "实时数据查询",
                "从对象存储查询历史数据",
                "数据上传",
                "告警发送"
            ],
            answer: 1,
            rationale: "Thanos Store Gateway 负责从对象存储查询历史数据，与 Sidecar 的实时数据查询互补。"
        }
    ],
    "w21-3": [
        {
            id: "w21-3-q1",
            question: "Alertmanager 的核心功能不包括？",
            options: [
                "去重",
                "分组",
                "数据存储",
                "路由"
            ],
            answer: 2,
            rationale: "Alertmanager 功能：去重、分组、路由、抑制、静默。数据存储是 Prometheus 的职责。"
        },
        {
            id: "w21-3-q2",
            question: "告警分组的主要作用是什么？",
            options: [
                "提高告警精度",
                "减少告警风暴，将相似告警合并为一个通知",
                "加快告警发送",
                "增加告警数量"
            ],
            answer: 1,
            rationale: "'Grouping categorizes alerts of similar nature into a single notification'——减少告警风暴。"
        },
        {
            id: "w21-3-q3",
            question: "告警抑制的典型场景是什么？",
            options: [
                "发送更多告警",
                "集群故障时抑制单节点告警",
                "提高告警优先级",
                "加快告警处理"
            ],
            answer: 1,
            rationale: "典型场景：集群故障时抑制单节点告警、主告警触发时抑制从属告警。"
        },
        {
            id: "w21-3-q4",
            question: "Google SRE 认为好的告警应该具备什么特点？",
            options: [
                "越多越好",
                "可操作的、基于症状的、代表真正的问题",
                "越敏感越好",
                "只发给开发者"
            ],
            answer: 1,
            rationale: "'Every time the pager goes off, I should be able to react with a sense of urgency'——告警应该是可操作的、基于症状的。"
        },
        {
            id: "w21-3-q5",
            question: "多烧率告警策略的原理是什么？",
            options: [
                "使用单一时间窗口",
                "使用多个时间窗口和燃烧率组合检测不同速度的恶化",
                "只检测快速恶化",
                "只检测缓慢漂移"
            ],
            answer: 1,
            rationale: "短窗口高燃烧率检测快速恶化，长窗口低燃烧率检测缓慢漂移。多个组合提高检测精度。"
        },
        {
            id: "w21-3-q6",
            question: "告警规则中 'for' 子句的作用是什么？",
            options: [
                "指定接收者",
                "指定告警必须持续的时间才触发",
                "指定告警标签",
                "指定告警消息"
            ],
            answer: 1,
            rationale: "for 子句指定告警条件必须持续的时间（如 5m）才真正触发，避免瞬时抖动触发告警。"
        },
        {
            id: "w21-3-q7",
            question: "On-Call 轮转设计应考虑什么？",
            options: [
                "只考虑技术能力",
                "时区覆盖、轮转周期、升级路径、公平性",
                "只考虑成本",
                "只考虑响应速度"
            ],
            answer: 1,
            rationale: "PagerDuty 建议：时区覆盖、轮转周期（通常一周）、升级路径、补偿机制、避免单点故障。"
        },
        {
            id: "w21-3-q8",
            question: "静默（Silence）的使用场景是什么？",
            options: [
                "永久禁用告警",
                "计划维护或已知问题处理中临时禁止告警",
                "提高告警优先级",
                "增加告警频率"
            ],
            answer: 1,
            rationale: "静默用于计划维护、已知问题处理中。应设置合理的过期时间，添加创建者和原因说明。"
        },
        {
            id: "w21-3-q9",
            question: "group_wait 参数的作用是什么？",
            options: [
                "控制告警持续时间",
                "控制首次告警分组的等待时间",
                "控制告警重复发送间隔",
                "控制告警过期时间"
            ],
            answer: 1,
            rationale: "group_wait 控制首次等待时间，收集同一分组的告警后一起发送，减少通知数量。"
        },
        {
            id: "w21-3-q10",
            question: "告警疲劳的后果是什么？",
            options: [
                "响应更快",
                "运维人员忽略告警，真正问题被遗漏",
                "系统更稳定",
                "成本降低"
            ],
            answer: 1,
            rationale: "告警疲劳导致运维人员对告警麻木，可能忽略真正重要的问题。应减少无意义告警。"
        },
        {
            id: "w21-3-q11",
            question: "基于症状的告警与基于原因的告警有什么区别？",
            options: [
                "没有区别",
                "基于症状告警用户可感知的问题，基于原因告警内部指标异常",
                "基于原因更准确",
                "基于症状更难实现"
            ],
            answer: 1,
            rationale: "基于症状（如错误率升高）告警用户可感知的问题，基于原因（如 CPU 高）可能不影响用户。应优先基于症状。"
        },
        {
            id: "w21-3-q12",
            question: "Alertmanager 集群模式的目的是什么？",
            options: [
                "提高查询性能",
                "实现高可用，避免单点故障",
                "减少存储",
                "加快告警发送"
            ],
            answer: 1,
            rationale: "Alertmanager 集群模式通过 gossip 协议同步状态，实现高可用，避免单点故障导致告警丢失。"
        }
    ],
    "w21-4": [
        {
            id: "w21-4-q1",
            question: "Grafana Dashboard 设计的核心原则是什么？",
            options: [
                "面板越多越好",
                "每个 Dashboard 应有明确目的，讲述一个故事",
                "使用尽可能多的颜色",
                "数据越详细越好"
            ],
            answer: 1,
            rationale: "'A dashboard should tell a story or answer a question'——每个 Dashboard 应有明确目的。"
        },
        {
            id: "w21-4-q2",
            question: "如何减少 Dashboard 的认知负荷？",
            options: [
                "增加更多面板",
                "使用一致的模式：统一颜色含义、时间范围、刷新频率",
                "使用更多颜色",
                "显示更多细节"
            ],
            answer: 1,
            rationale: "'Reduce cognitive load by using consistent patterns'——统一颜色含义、时间范围、刷新频率。"
        },
        {
            id: "w21-4-q3",
            question: "Grafana 变量的常用类型不包括？",
            options: [
                "Query",
                "Custom",
                "Database",
                "Interval"
            ],
            answer: 2,
            rationale: "常用变量类型：Query（从数据源查询）、Custom（预定义值）、Interval（时间间隔）。没有 Database 类型。"
        },
        {
            id: "w21-4-q4",
            question: "Dashboard 成熟度模型的 L3 级别是什么？",
            options: [
                "静态/手动",
                "可复用模板",
                "可编程/代码管理",
                "自动化/自愈"
            ],
            answer: 2,
            rationale: "L1 静态/手动、L2 可复用模板、L3 可编程/代码管理、L4 自动化/自愈。"
        },
        {
            id: "w21-4-q5",
            question: "SLO Dashboard 应该展示什么信息？",
            options: [
                "只显示错误日志",
                "错误预算消耗、燃烧率、SLI 趋势",
                "只显示 CPU 使用率",
                "只显示请求数"
            ],
            answer: 1,
            rationale: "SLO Dashboard 展示服务级别目标状态：错误预算消耗、燃烧率、SLI 趋势。"
        },
        {
            id: "w21-4-q6",
            question: "Time Series 面板适合展示什么数据？",
            options: [
                "单个数值",
                "趋势和时间序列数据",
                "表格列表",
                "地理位置"
            ],
            answer: 1,
            rationale: "Time Series 用于趋势、Stat 用于单值、Table 用于列表、Heatmap 用于分布。"
        },
        {
            id: "w21-4-q7",
            question: "Dashboard as Code 有什么优势？",
            options: [
                "只是复杂化",
                "版本控制、代码审查、自动化部署",
                "只是增加工作量",
                "没有优势"
            ],
            answer: 1,
            rationale: "Dashboard as Code 支持版本控制、代码审查、自动化部署，提高可维护性和一致性。"
        },
        {
            id: "w21-4-q8",
            question: "Data Links 的作用是什么？",
            options: [
                "数据备份",
                "从面板跳转到详情或其他工具（如 Trace）",
                "数据压缩",
                "数据加密"
            ],
            answer: 1,
            rationale: "Data Links 从面板跳转到详情、Panel Links 关联相关 Dashboard，支持跨工具跳转。"
        },
        {
            id: "w21-4-q9",
            question: "Grafana 面板阈值的作用是什么？",
            options: [
                "数据过滤",
                "根据值范围改变颜色，反映健康状态",
                "数据排序",
                "数据分组"
            ],
            answer: 1,
            rationale: "阈值根据值范围改变颜色（如红色=错误），直观反映健康状态。"
        },
        {
            id: "w21-4-q10",
            question: "Dashboard 层级结构的推荐顺序是什么？",
            options: [
                "详情 → 实例 → 服务 → 概览",
                "概览 → 服务 → 实例 → 详情",
                "随机排列",
                "按字母排序"
            ],
            answer: 1,
            rationale: "使用层级结构：概览 → 服务 → 实例 → 详情，从宏观到微观逐步深入。"
        },
        {
            id: "w21-4-q11",
            question: "Grafonnet 是什么？",
            options: [
                "Grafana 的数据库",
                "用 Jsonnet 编写 Dashboard 的库",
                "Grafana 的告警系统",
                "Grafana 的日志系统"
            ],
            answer: 1,
            rationale: "Grafonnet 是用 Jsonnet 编写 Grafana Dashboard 的库，实现 Dashboard as Code。"
        },
        {
            id: "w21-4-q12",
            question: "变量的 Multi-value 选项有什么作用？",
            options: [
                "限制只能选一个值",
                "允许同时选择多个值",
                "禁用变量",
                "隐藏变量"
            ],
            answer: 1,
            rationale: "Multi-value 允许同时选择多个值，查询中使用正则匹配（如 job=~\"$job\"）。"
        }
    ]
}
