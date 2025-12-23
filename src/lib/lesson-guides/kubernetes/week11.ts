import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "w11-1": {
        lessonId: "w11-1",
        background: [
            "【Prometheus 定义】官方文档：Prometheus 是'an open-source systems monitoring and alerting toolkit'——开源系统监控和告警工具包。2016 年成为 CNCF 第二个托管项目，采用多维数据模型，通过 PromQL 查询语言实现灵活的时序数据分析。",
            "【Pull 模式架构】官方文档：'Prometheus actively retrieves metrics from instrumented jobs using HTTP'——主动通过 HTTP 从目标拉取指标。这种模式让 Prometheus 控制采集频率和目标，无需依赖客户端推送，配合 Pushgateway 支持短生命周期任务。",
            "【服务发现与 Relabel】官方配置文档：kubernetes_sd_config 支持自动发现 K8s 资源；relabel_configs 实现'advanced modifications to any target and its labels before scraping'——采集前的高级标签处理，是过滤和修改目标的'preferred and more powerful way'。",
            "【TSDB 存储架构】官方文档：Prometheus 将数据组织为'two-hour blocks'，每个 block 包含 chunks、index 和 tombstones。WAL 使用'128MB segments'保护写入，默认保留'a minimum of three write-ahead log files'。Remote Write 支持将数据发送到外部长期存储。",
            "【K8s 指标管道】K8s 文档：资源指标流经 cAdvisor（嵌入 kubelet 的容器指标守护进程）→ kubelet（/metrics/resource 端点）→ metrics-server（聚合节点指标）→ Metrics API，为 HPA/VPA 和 kubectl top 提供数据。",
            "【Exporter 机制】官方文档：Exporter 是'libraries and servers which help in exporting existing metrics from third-party systems as Prometheus metrics'——将第三方系统指标转换为 Prometheus 格式，解决无法直接修改源码添加埋点的场景。"
        ],
        keyDifficulties: [
            "【服务发现角色选择】kubernetes_sd_config 的 role 类型：endpoints（发现 Service 后端 Pod IP:Port）、pod（直接发现所有 Pod）、service（发现 Service ClusterIP）、node（发现集群节点）。不同角色产生不同的 __meta_kubernetes_* 标签，endpoints 最常用于应用监控。",
            "【Relabel 动作语义】核心动作：keep/drop（根据 regex 过滤目标）、replace（重写 target_label 值）、labelmap（批量重命名匹配的标签）、labeldrop/labelkeep（删除/保留匹配的标签）。source_labels + regex + target_label + replacement 组合实现复杂转换。",
            "【两阶段 Relabel 区分】relabel_configs 在采集前处理目标元数据（过滤不需要采集的 Pod、从 annotation 提取端口）；metric_relabel_configs 在采集后处理指标（删除高基数标签、过滤运行时指标）。执行时机和用途完全不同。",
            "【honor_labels 冲突处理】当目标暴露的标签与 Prometheus 附加的标签冲突时：honor_labels: true 保留目标标签；false（默认）给目标标签添加 exported_ 前缀。Federation 和 Pushgateway 场景通常需要设为 true。",
            "【存储容量规划】官方公式：needed_disk_space = retention_time_seconds * ingested_samples_per_second * bytes_per_sample。默认保留 15 天（--storage.tsdb.retention.time），可同时设置 size 限制。"
        ],
        handsOnPath: [
            "在 Kubernetes 集群中部署 kube-prometheus-stack（通过 Helm），观察自动创建的 ServiceMonitor/PodMonitor CRD。访问 Prometheus UI 的 /targets 页面，理解服务发现如何工作。",
            "创建一个简单的应用并暴露 /metrics 端点。创建 ServiceMonitor 资源指向该 Service，配置 selector 和 endpoints。观察 Prometheus 如何自动发现并采集该应用的指标。",
            "实践 relabel_configs：编写规则过滤特定命名空间的目标（使用 __meta_kubernetes_namespace 标签）；从 Pod annotation 中提取 scrape 端口（prometheus.io/port）；使用 labelmap 将有用的 __meta 标签保留为普通标签。",
            "配置 metric_relabel_configs：删除高基数的标签（如 pod_template_hash）以减少存储压力；过滤不需要的指标（如 go_* 开头的运行时指标）；重写指标名称以统一命名规范。",
            "了解 Remote Write：在 Prometheus 配置中添加 remote_write 部分（可以指向测试用的 VictoriaMetrics 或模拟端点），观察数据流向。理解 queue_config 参数对写入性能的影响。"
        ],
        selfCheck: [
            "Prometheus 为什么采用 Pull 模式而非 Push 模式？各有什么优缺点？Pushgateway 适用于什么场景？",
            "kubernetes_sd_config 的 role: endpoints 和 role: pod 有什么区别？各自发现什么资源？如何选择？",
            "relabel_configs 中 keep 和 drop 动作如何工作？source_labels 和 regex 如何配合使用？",
            "scrape_configs 中的 relabel_configs 和 metric_relabel_configs 的执行时机有什么不同？分别用于什么场景？",
            "Prometheus 本地存储的 retention 如何配置？什么时候应该考虑使用 Remote Write？"
        ],
        extensions: [
            "研究 Prometheus Operator 的 ServiceMonitor/PodMonitor CRD，了解如何通过声明式配置管理 Prometheus 的抓取目标，以及 Operator 如何将 CRD 转换为 Prometheus 配置。",
            "探索高可用 Prometheus 架构：Thanos Sidecar 模式将本地数据上传到对象存储；Thanos Query 实现跨 Prometheus 实例的全局查询；理解 Deduplication 如何处理多副本采集。",
            "学习 Prometheus 联邦（Federation）机制，了解如何构建多层 Prometheus 架构：边缘 Prometheus 采集本地数据，中心 Prometheus 通过 /federate 端点聚合全局视图。",
            "研究 OpenMetrics 规范，了解 Prometheus 指标格式的演进和标准化，以及 Exemplar 如何实现指标与追踪的关联。"
        ],
        sourceUrls: [
            "https://prometheus.io/docs/prometheus/latest/configuration/configuration/",
            "https://prometheus.io/docs/prometheus/latest/storage/",
            "https://prometheus.io/docs/practices/naming/"
        ]
    },
    "w11-2": {
        lessonId: "w11-2",
        background: [
            "【四种数据类型】官方文档：Instant Vector 是'a set of time series containing a single sample for each time series, all sharing the same timestamp'；Range Vector 是指定时间窗口内的数据点集合；Scalar 是简单浮点数值；String 是文本值（目前较少使用）。",
            "【标签匹配操作符】官方文档：支持四种匹配策略——'=' 精确相等、'!=' 不等于、'=~' 正则匹配、'!~' 正则非匹配。正则匹配是'fully anchored'，即 foo 隐式变为 ^foo$。",
            "【时间修饰符】官方文档：offset 修饰符将评估点向后偏移，用于历史对比；@ 修饰符设置绝对 Unix 时间戳作为评估点。时序数据在 5 分钟无活动后从结果中消失（staleness period）。",
            "【rate 与 irate】官方文档：rate()'Calculates per-second average rate of increase, automatically handling counter resets'——最适合告警和慢速计数器；irate()'computes instantaneous per-second rate based on the last two data points'——适合快速变化的计数器。",
            "【increase 函数】官方文档：increase() 是'syntactic sugar for rate(v) multiplied by the number of seconds under the specified time range'——返回指定时间范围内的总增量，会外推到完整窗口。",
            "【聚合操作符】官方文档：sum'calculate sum over dimensions'、avg'calculate the arithmetic average over dimensions'、topk/bottomk'retrieve the k largest or smallest elements'、count'count number of elements'。使用 by/without 子句控制标签保留。"
        ],
        keyDifficulties: [
            "【rate vs irate 选择】rate() 计算整个区间平均速率，平滑但有滞后，适合告警规则；irate() 只用最后两点计算瞬时速率，敏感但波动大，'should not be combined with aggregation operators without taking it first'——先聚合再 irate 会导致错误结果。",
            "【histogram_quantile 用法】官方文档：histogram_quantile()'Calculates φ-quantiles from classic or native histograms'。必须对 _bucket 指标先 rate() 再 sum by (le)，保留 le（桶边界）标签。支持线性或指数插值，结果是估算值。",
            "【向量匹配关键字】官方文档：on()'reduce the set of considered labels to a provided list'——只在指定标签上匹配；ignoring() 排除指定标签。group_left/group_right 实现多对一/一对多匹配，'retain labels from the one-side'。",
            "【absent 缺失检测】官方文档：absent()'Returns a 1-element vector if the input vector is empty'——用于告警指标消失场景；absent_over_time() 检测范围向量中的缺失数据。这是检测 Exporter 宕机的标准方法。",
            "【聚合顺序陷阱】Counter 重置检测必须在单个时序上进行。正确顺序是'先 rate() 再 sum()'——如果先 sum 聚合不同实例的 Counter，重置时间不同会导致计算错误。操作符优先级：^ 最高，然后 */%，然后 +-，然后比较，最后 and/unless/or。"
        ],
        handsOnPath: [
            "在 Prometheus UI 的 Graph 页面练习基础查询：选择指标（如 node_cpu_seconds_total）；添加标签过滤 {mode='idle'}；使用 [5m] 创建范围向量；应用 rate() 计算 CPU 使用率。",
            "练习聚合查询：使用 sum by (instance) (rate(node_network_receive_bytes_total[5m])) 计算每节点的网络接收速率；使用 topk(5, ...) 找出流量最大的节点；使用 avg without (cpu) (...) 计算平均 CPU。",
            "实践直方图查询：找到一个暴露直方图的指标（如 http_request_duration_seconds_bucket）；使用 histogram_quantile() 计算 P50/P95/P99；对比不同时间窗口的分位数变化。",
            "练习向量匹配：创建需要关联两个指标的查询（如计算请求成功率 = 成功数/总数）；使用 on() 指定匹配标签；处理标签不一致时使用 label_replace() 调整。",
            "使用 offset 进行时间对比：计算本周与上周的流量变化 rate(http_requests_total[1h]) / rate(http_requests_total[1h] offset 1w)；在 Grafana 中创建同比环比图表。"
        ],
        selfCheck: [
            "rate() 和 irate() 的计算方式有什么不同？什么场景下应该使用哪个？范围窗口应该如何选择？",
            "如何正确计算直方图的 P95 延迟？为什么需要在 sum 时保留 le 标签？histogram_quantile 的结果是精确值还是估算值？",
            "聚合操作符 by() 和 without() 有什么区别？为什么要「先 rate 再 sum」而不是「先 sum 再 rate」？",
            "向量匹配时 on() 和 ignoring() 如何工作？group_left 和 group_right 解决什么问题？",
            "absent() 函数的用途是什么？如何用它来检测指标缺失或目标掉线？"
        ],
        extensions: [
            "研究 Recording Rules，了解如何预计算常用的复杂查询，将结果存储为新指标，减少查询时的计算开销，特别是在 Dashboard 反复查询相同表达式时。",
            "探索 PromQL 的子查询（Subquery）语法，了解如何在瞬时查询中嵌入范围查询，实现更复杂的时间序列分析。",
            "学习 Prometheus 的四种指标类型（Counter、Gauge、Histogram、Summary）的最佳实践，了解何时使用哪种类型以及它们在 PromQL 中的处理方式差异。",
            "研究 PromQL 的 @ 修饰符，了解如何查询特定历史时间点的数据，以及在 Recording Rules 和告警中的应用。"
        ],
        sourceUrls: [
            "https://prometheus.io/docs/prometheus/latest/querying/basics/",
            "https://prometheus.io/docs/prometheus/latest/querying/functions/",
            "https://prometheus.io/docs/prometheus/latest/querying/operators/"
        ]
    },
    "w11-3": {
        lessonId: "w11-3",
        background: [
            "Grafana 是云原生可视化的标准工具，支持 150+ 数据源插件，能够将 Prometheus、Loki、Elasticsearch 等多种数据源的数据统一展示。Dashboard 由多个 Panel 组成，每个 Panel 展示一种可视化效果。",
            "变量（Variables/Templates）是 Grafana 的核心特性，允许在 Dashboard 中创建动态参数。用户可以通过下拉框选择集群、命名空间、实例等维度，同一个 Dashboard 可以复用于不同的数据范围，大幅提高效率。",
            "Grafana 支持多种可视化类型：Time Series（时序图）适合趋势分析；Stat/Gauge 适合关键指标展示；Table 适合详细数据列表；Heatmap 适合分布分析；Bar Chart 适合对比分析。选择合适的可视化类型是 Dashboard 设计的关键。",
            "Provisioning 是 Grafana 的基础设施即代码能力，通过 YAML 文件声明式管理数据源、Dashboard 和告警规则。这使得 Grafana 配置可以版本控制、自动化部署，与 GitOps 流程集成。"
        ],
        keyDifficulties: [
            "变量的查询语法：使用 label_values(metric, label) 获取标签的所有值；使用 query_result(expr) 执行任意 PromQL 并提取结果；支持链式变量（一个变量依赖另一个变量的值）。变量可以是多选的，需要在查询中使用正则匹配语法 =~。",
            "时间范围和分辨率：Grafana 的时间选择器决定查询的 start/end 时间，$__interval 和 $__rate_interval 是动态计算的步长变量，应在 rate() 的范围窗口中使用 $__rate_interval 而非固定值，以适应不同的时间范围。",
            "Panel 的数据转换（Transform）：支持对查询结果进行二次处理，如合并多个查询、过滤行/列、计算新字段、重命名字段。这在数据源无法直接产生所需格式时非常有用。",
            "Library Panel 和 Dashboard 复用：Library Panel 可以在多个 Dashboard 中共享，修改会同步到所有引用处；Dashboard 链接和钻取（Drill-down）允许从高层概览跳转到详细视图，构建层次化的监控体系。"
        ],
        handsOnPath: [
            "创建第一个 Dashboard：添加 Prometheus 数据源；创建 Time Series Panel 展示 CPU 使用率；使用 Legend 配置显示实例名称；添加阈值线标记告警水位。",
            "配置 Dashboard 变量：创建 namespace 变量使用 label_values(kube_pod_info, namespace)；创建 pod 变量依赖 namespace 变量；在查询中使用 $namespace 和 $pod 过滤数据；测试变量切换效果。",
            "使用 $__rate_interval 优化查询：将固定的 [5m] 替换为 [$__rate_interval]；观察不同时间范围下 interval 的自动调整；理解这如何避免「No data」问题。",
            "实践 Dashboard Provisioning：将 Dashboard JSON 导出；创建 /etc/grafana/provisioning/dashboards/ 配置；创建 /etc/grafana/provisioning/datasources/ 配置；重启 Grafana 验证自动加载。",
            "创建 Library Panel：将常用的 Panel（如资源使用概览）保存为 Library Panel；在多个 Dashboard 中引用它；修改 Library Panel 并观察变更同步到所有 Dashboard。"
        ],
        selfCheck: [
            "Grafana 变量的查询语法有哪些？如何实现变量间的依赖关系（链式变量）？多选变量在 PromQL 中如何使用？",
            "$__interval 和 $__rate_interval 的区别是什么？为什么推荐在 rate() 中使用 $__rate_interval？",
            "如何通过 Provisioning 管理 Grafana 的数据源和 Dashboard？这与 GitOps 如何配合？",
            "Library Panel 解决什么问题？与直接复制 Panel 相比有什么优势？",
            "Grafana 的时间范围选择器如何影响 PromQL 查询？step（分辨率）是如何计算的？"
        ],
        extensions: [
            "研究 Grafana Alerting（8.0+），了解统一告警平台如何跨多个数据源配置告警规则，以及与 Alertmanager 的集成方式。",
            "探索 Grafana Loki 数据源，了解如何将日志和指标关联展示，通过 Derived Fields 从日志中提取 TraceID 跳转到追踪系统。",
            "学习 Grafana 的 RBAC（基于角色的访问控制），了解如何为不同团队配置 Organization、Team、Folder 权限，实现多租户隔离。",
            "研究 Grafana Dashboard as Code 工具（如 Grafonnet、Grafana Terraform Provider），了解如何使用代码生成和管理 Dashboard，实现更好的复用和版本控制。"
        ],
        sourceUrls: [
            "https://grafana.com/docs/grafana/latest/dashboards/",
            "https://grafana.com/docs/grafana/latest/variables/",
            "https://grafana.com/docs/grafana/latest/administration/provisioning/"
        ]
    },
    "w11-4": {
        lessonId: "w11-4",
        background: [
            "Alertmanager 是 Prometheus 告警处理的核心组件，接收来自 Prometheus 的告警，进行分组（Grouping）、去重（Deduplication）、抑制（Inhibition）和静默（Silencing），然后路由到合适的接收器（Receiver）发送通知。",
            "路由树（Routing Tree）是 Alertmanager 配置的核心。根路由匹配所有告警，子路由通过 matchers 匹配特定标签。告警从根节点向下遍历，匹配的路由决定分组方式和接收器。continue 参数控制是否继续匹配兄弟路由。",
            "分组（Grouping）将相似的告警合并为一个通知，避免告警风暴。group_by 指定分组标签，group_wait 是首次通知前的等待时间（聚合同组告警），group_interval 是同组后续通知的间隔，repeat_interval 是重复通知的间隔。",
            "抑制（Inhibition）规则定义告警间的依赖关系：当「源告警」触发时，匹配的「目标告警」被静音。例如，当集群级别的告警触发时，抑制该集群下的所有节点级别告警。静默（Silence）则是手动创建的临时静音规则，用于维护窗口或已知问题。"
        ],
        keyDifficulties: [
            "路由树的设计：如何组织路由层级？通常先按环境（prod/staging）分组，再按服务或团队分组。matchers 支持 =（精确）、!=、=~（正则）、!~。理解 continue: true 何时使用（如需要发送到多个接收器）。",
            "分组策略的权衡：group_by: [...] 使用所有标签会导致每个告警单独通知；group_by: [alertname, cluster] 按告警名和集群分组。group_wait 太短可能遗漏同组告警，太长则延迟通知。需要根据场景调整。",
            "抑制规则的编写：source_matchers 定义源告警条件，target_matchers 定义目标告警条件，equal 列表指定必须相同的标签。例如：当 severity=critical 的集群告警触发时，抑制同集群的 severity=warning 告警。",
            "高可用部署：多个 Alertmanager 实例通过 --cluster.* 参数组成集群，使用 Gossip 协议同步静默和通知状态。Prometheus 应配置所有 Alertmanager 实例地址，而非使用负载均衡器，以确保告警被所有实例接收。"
        ],
        handsOnPath: [
            "部署 Alertmanager 并配置基础路由：设置 global 参数（resolve_timeout、smtp 配置）；创建根路由和默认接收器；添加 Slack/Webhook 接收器并测试通知。",
            "配置多级路由：创建按 severity 分组的路由（critical 发送到 PagerDuty，warning 发送到 Slack）；创建按 team 标签分组的路由；验证告警正确路由到对应接收器。",
            "实践分组参数：设置 group_by: [alertname, namespace]；调整 group_wait: 30s, group_interval: 5m, repeat_interval: 4h；模拟批量告警观察分组效果。",
            "创建抑制规则：当 KubeNodeNotReady 告警触发时，抑制该节点上的所有 Pod 告警；测试抑制规则是否正常工作；理解 equal 标签匹配的重要性。",
            "使用 Silence 功能：通过 Web UI 创建静默规则；设置匹配器和持续时间；在计划维护前创建静默，避免误告警；维护后删除静默。"
        ],
        selfCheck: [
            "Alertmanager 的路由树如何工作？告警如何匹配路由？continue 参数的作用是什么？",
            "group_by、group_wait、group_interval、repeat_interval 各自的含义是什么？如何根据场景调整这些参数？",
            "抑制（Inhibition）和静默（Silence）的区别是什么？各自适用于什么场景？",
            "如何部署高可用的 Alertmanager？为什么 Prometheus 不应该通过负载均衡器访问 Alertmanager？",
            "Alertmanager 的通知模板使用什么语法？如何在通知中包含告警的标签和注释？"
        ],
        extensions: [
            "研究 Prometheus 的 Alerting Rules 最佳实践，了解 for 子句如何避免瞬时抖动触发告警，以及 labels 和 annotations 的设计建议。",
            "探索 Alertmanager 的 Webhook 接收器，了解如何构建自定义的告警处理流程，如自动化故障修复、工单创建、ChatOps 集成等。",
            "学习告警疲劳（Alert Fatigue）的缓解策略，了解如何通过合理的分组、抑制、降噪来减少无效告警，提高 On-Call 效率。",
            "研究 Prometheus Operator 的 AlertmanagerConfig CRD，了解如何以声明式方式管理 Alertmanager 配置，实现多租户告警路由。"
        ],
        sourceUrls: [
            "https://prometheus.io/docs/alerting/latest/alertmanager/",
            "https://prometheus.io/docs/alerting/latest/configuration/",
            "https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/"
        ]
    }
}

export const week11Quizzes: Record<string, QuizQuestion[]> = {
    "w11-1": [
        {
            id: "w11-1-q1",
            question: "官方文档对 Prometheus 的定义是什么？",
            options: [
                "容器编排平台",
                "'an open-source systems monitoring and alerting toolkit'——开源系统监控和告警工具包",
                "日志收集系统",
                "服务网格代理"
            ],
            answer: 1,
            rationale: "Prometheus 官方文档定义其为'an open-source systems monitoring and alerting toolkit originally built at SoundCloud'。"
        },
        {
            id: "w11-1-q2",
            question: "官方文档描述 Prometheus 的数据采集模式是什么？",
            options: [
                "'actively retrieves metrics from instrumented jobs using HTTP'——主动通过 HTTP 拉取指标",
                "被动等待目标推送数据",
                "通过消息队列接收",
                "读取本地文件"
            ],
            answer: 0,
            rationale: "官方文档：'Rather than waiting for systems to push data, Prometheus actively retrieves metrics from instrumented jobs using HTTP'——主动拉取模式。"
        },
        {
            id: "w11-1-q3",
            question: "官方配置文档对 relabel_configs 功能的描述是什么？",
            options: [
                "只用于删除标签",
                "只用于添加新指标",
                "存储配置参数",
                "'advanced modifications to any target and its labels before scraping'——采集前的高级标签处理"
            ],
            answer: 3,
            rationale: "官方配置文档：relabel_configs 实现'advanced modifications to any target and its labels before scraping'。"
        },
        {
            id: "w11-1-q4",
            question: "官方文档描述 Prometheus 本地存储的 block 时间跨度是多少？",
            options: [
                "一小时",
                "一天",
                "'two-hour blocks'——两小时的数据块",
                "一周"
            ],
            answer: 2,
            rationale: "官方存储文档：Prometheus organizes data into'two-hour blocks'containing chunks, metadata, and index files。"
        },
        {
            id: "w11-1-q5",
            question: "K8s 文档描述的资源指标管道中，cAdvisor 的角色是什么？",
            options: [
                "API 服务器组件",
                "网络代理",
                "存储驱动",
                "嵌入 kubelet 的容器指标收集守护进程"
            ],
            answer: 3,
            rationale: "K8s 文档：cAdvisor 是'Daemon embedded in the kubelet'，'Collects, aggregates, and exposes container metrics'。"
        },
        {
            id: "w11-1-q6",
            question: "官方文档对 Exporter 的定义是什么？",
            options: [
                "数据压缩工具",
                "'libraries and servers which help in exporting existing metrics from third-party systems'——导出第三方系统指标的库和服务",
                "告警发送组件",
                "配置管理工具"
            ],
            answer: 1,
            rationale: "官方文档：Exporter 是'libraries and servers which help in exporting existing metrics from third-party systems as Prometheus metrics'。"
        },
        {
            id: "w11-1-q7",
            question: "官方文档描述的 WAL 段大小是多少？",
            options: [
                "'128MB segments'——128MB 的段文件",
                "64MB 段",
                "256MB 段",
                "512MB 段"
            ],
            answer: 0,
            rationale: "官方存储文档：The system maintains a WAL using'128MB segments'to protect against crashes。"
        },
        {
            id: "w11-1-q8",
            question: "kubernetes_sd_config 的 role: endpoints 发现的是什么？",
            options: [
                "所有 Pod 的 IP",
                "Node 的 IP",
                "Service 的后端 Pod IP 和端口",
                "Ingress 规则"
            ],
            answer: 2,
            rationale: "role: endpoints 发现 Service 背后的 Endpoints，即实际处理请求的 Pod IP 和端口，是最常用的服务发现模式。"
        },
        {
            id: "w11-1-q9",
            question: "relabel_configs 和 metric_relabel_configs 的关键区别是什么？",
            options: [
                "两者功能完全相同",
                "前者在采集前处理目标元数据，后者在采集后处理指标",
                "前者只能添加标签，后者只能删除标签",
                "前者用于 K8s，后者用于其他系统"
            ],
            answer: 1,
            rationale: "relabel_configs 在采集前决定是否采集目标以及如何修改目标标签；metric_relabel_configs 在采集后处理已收集的指标。"
        },
        {
            id: "w11-1-q10",
            question: "官方文档描述的默认数据保留时间是多少？",
            options: [
                "7 天",
                "30 天",
                "90 天",
                "'15d'——15 天"
            ],
            answer: 3,
            rationale: "官方存储文档：--storage.tsdb.retention.time defaults to'15d'。"
        },
        {
            id: "w11-1-q11",
            question: "metrics-server 在 K8s 指标管道中的作用是什么？",
            options: [
                "收集容器日志",
                "管理 Pod 网络",
                "聚合各节点 kubelet 的指标，暴露 Metrics API",
                "调度 Pod 到节点"
            ],
            answer: 2,
            rationale: "K8s 文档：metrics-server'Queries each kubelet over HTTP for metrics'，'Aggregates metrics from all nodes'并通过 Metrics API 暴露。"
        },
        {
            id: "w11-1-q12",
            question: "honor_labels: true 配置的作用是什么？",
            options: [
                "删除所有标签",
                "总是使用 Prometheus 附加的标签",
                "禁用标签处理",
                "当标签冲突时保留目标暴露的标签"
            ],
            answer: 3,
            rationale: "honor_labels: true 表示当标签冲突时优先保留目标暴露的标签，这在 Federation 或 Pushgateway 场景很重要。"
        }
    ],
    "w11-2": [
        {
            id: "w11-2-q1",
            question: "官方文档对 Instant Vector 的定义是什么？",
            options: [
                "包含时间范围内所有数据点的集合",
                "'a set of time series containing a single sample for each time series, all sharing the same timestamp'",
                "单个浮点数值",
                "文本字符串值"
            ],
            answer: 1,
            rationale: "官方文档定义 Instant Vector 为'a set of time series containing a single sample for each time series, all sharing the same timestamp'。"
        },
        {
            id: "w11-2-q2",
            question: "官方文档对 PromQL 正则匹配的描述是什么？",
            options: [
                "正则匹配是'fully anchored'，即 foo 隐式变为 ^foo$",
                "正则匹配默认为部分匹配",
                "正则匹配不区分大小写",
                "正则匹配只支持简单通配符"
            ],
            answer: 0,
            rationale: "官方文档：Pattern matches are 'fully anchored,' meaning foo implicitly becomes ^foo$。"
        },
        {
            id: "w11-2-q3",
            question: "官方文档对 rate() 函数的描述是什么？",
            options: [
                "只计算最后两个数据点",
                "返回时间范围内的总增量",
                "计算标量值的平均数",
                "'Calculates per-second average rate of increase, automatically handling counter resets'"
            ],
            answer: 3,
            rationale: "官方文档：rate() 'Calculates per-second average rate of increase in a range vector, automatically handling counter resets'。"
        },
        {
            id: "w11-2-q4",
            question: "官方文档对 irate() 与聚合操作符结合的警告是什么？",
            options: [
                "irate() 只能用于 Gauge 类型",
                "irate() 必须在 5 分钟窗口内使用",
                "'should not be combined with aggregation operators without taking it first'",
                "irate() 不支持 Counter 重置处理"
            ],
            answer: 2,
            rationale: "官方文档警告：irate() 'should not be combined with aggregation operators without taking it first'——需要先计算 irate 再聚合。"
        },
        {
            id: "w11-2-q5",
            question: "官方文档对 increase() 函数的描述是什么？",
            options: [
                "计算瞬时增长速率",
                "'syntactic sugar for rate(v) multiplied by the number of seconds under the specified time range'",
                "返回计数器的绝对值",
                "计算直方图的分位数"
            ],
            answer: 1,
            rationale: "官方文档：increase() 是'syntactic sugar for rate(v) multiplied by the number of seconds under the specified time range'。"
        },
        {
            id: "w11-2-q6",
            question: "官方文档对 sum 聚合操作符的描述是什么？",
            options: [
                "'calculate the arithmetic average over dimensions'",
                "'count number of elements in the vector'",
                "'retrieve the k largest elements'",
                "'calculate sum over dimensions'"
            ],
            answer: 3,
            rationale: "官方文档：sum(v) 'calculate sum over dimensions'。avg 计算平均值，count 计算元素数量。"
        },
        {
            id: "w11-2-q7",
            question: "官方文档对 on() 向量匹配关键字的描述是什么？",
            options: [
                "'reduce the set of considered labels to a provided list'",
                "排除指定标签进行匹配",
                "保留左侧向量的所有标签",
                "实现多对多匹配"
            ],
            answer: 0,
            rationale: "官方文档：on() 'reduce the set of considered labels to a provided list'——只在指定标签上匹配。"
        },
        {
            id: "w11-2-q8",
            question: "官方文档对 absent() 函数的描述是什么？",
            options: [
                "计算缺失数据点的数量",
                "删除空的时间序列",
                "'Returns a 1-element vector if the input vector is empty'",
                "填充缺失的数据点"
            ],
            answer: 2,
            rationale: "官方文档：absent() 'Returns a 1-element vector if the input vector is empty, useful for alerting when metrics disappear'。"
        },
        {
            id: "w11-2-q9",
            question: "为什么要「先 rate() 再 sum()」而不是相反顺序？",
            options: [
                "sum() 不支持 Counter 类型",
                "Counter 重置检测必须在单个时序上进行，先聚合会导致重置时间不同引发计算错误",
                "rate() 只能处理聚合后的数据",
                "两者顺序没有区别"
            ],
            answer: 1,
            rationale: "Counter 重置检测必须在单个时序上进行。如果先 sum 聚合不同实例的 Counter，各实例重置时间不同会导致计算错误。"
        },
        {
            id: "w11-2-q10",
            question: "官方文档描述的时序数据 staleness period 是多长？",
            options: [
                "1 分钟",
                "10 分钟",
                "15 分钟",
                "5 分钟——无活动后从结果中消失"
            ],
            answer: 3,
            rationale: "官方文档：Time series disappear from results after 5 minutes of inactivity (the staleness period)。"
        },
        {
            id: "w11-2-q11",
            question: "histogram_quantile() 函数计算分位数需要保留哪个标签？",
            options: [
                "instance 标签",
                "job 标签",
                "le（桶边界）标签",
                "quantile 标签"
            ],
            answer: 2,
            rationale: "必须对 _bucket 指标先 rate() 再 sum by (le)，保留 le 标签，因为 le 是桶边界，histogram_quantile 需要它来计算分位数。"
        },
        {
            id: "w11-2-q12",
            question: "PromQL 操作符优先级从高到低的正确顺序是什么？",
            options: [
                "比较 → 算术 → 逻辑",
                "^ → */% → +- → 比较 → and/unless → or",
                "and/or → 比较 → 算术",
                "所有操作符优先级相同"
            ],
            answer: 1,
            rationale: "官方文档：Operator precedence: ^ (highest) → *,/,%,atan2 → +,- → comparisons → and,unless → or (lowest)。"
        }
    ],
    "w11-3": [
        {
            id: "w11-3-q1",
            question: "Grafana 变量（Variables）的主要作用是什么？",
            options: [
                "创建动态参数让用户切换数据范围，复用同一个 Dashboard",
                "存储数据源密码",
                "定义告警阈值",
                "配置用户权限"
            ],
            answer: 0,
            rationale: "变量允许在 Dashboard 中创建下拉框，用户可以选择集群、命名空间等维度，实现一个 Dashboard 查看多个数据范围。"
        },
        {
            id: "w11-3-q2",
            question: "label_values(kube_pod_info, namespace) 变量查询的作用是什么？",
            options: [
                "获取 kube_pod_info 指标中 namespace 标签的所有唯一值",
                "获取所有指标名称",
                "获取 Pod 数量",
                "获取 namespace 的 CPU 使用率"
            ],
            answer: 0,
            rationale: "label_values() 是 Grafana 变量查询语法，用于提取指定指标中某个标签的所有值作为下拉选项。"
        },
        {
            id: "w11-3-q3",
            question: "为什么推荐在 rate() 中使用 $__rate_interval 而非固定值？",
            options: [
                "它会根据时间范围和采集间隔自动调整，避免数据间隙导致 No data",
                "固定值性能更差",
                "固定值会导致告警",
                "$__rate_interval 是必须的"
            ],
            answer: 0,
            rationale: "$__rate_interval 至少是 4 倍采集间隔和 Dashboard 分辨率的较大值，确保范围窗口内有足够数据点。"
        },
        {
            id: "w11-3-q4",
            question: "Grafana Provisioning 的主要用途是什么？",
            options: [
                "通过 YAML 文件声明式管理数据源、Dashboard 和告警规则",
                "提供 Web 界面",
                "存储时序数据",
                "配置网络策略"
            ],
            answer: 0,
            rationale: "Provisioning 将 Grafana 配置代码化，可以版本控制并自动化部署，与 GitOps 工作流集成。"
        },
        {
            id: "w11-3-q5",
            question: "Library Panel 解决什么问题？",
            options: [
                "在多个 Dashboard 中共享可复用的 Panel，修改会同步到所有引用处",
                "存储 Panel 的历史版本",
                "导出 Panel 为图片",
                "限制 Panel 的访问权限"
            ],
            answer: 0,
            rationale: "Library Panel 是可复用组件，避免在多个 Dashboard 中重复创建相同的 Panel，修改时只需更新一处。"
        },
        {
            id: "w11-3-q6",
            question: "Grafana 支持哪些类型的可视化？",
            options: [
                "Time Series、Stat、Gauge、Table、Heatmap、Bar Chart 等多种类型",
                "只支持折线图",
                "只支持表格",
                "只支持饼图"
            ],
            answer: 0,
            rationale: "Grafana 提供丰富的可视化类型，应根据数据特点和展示目的选择合适的类型。"
        },
        {
            id: "w11-3-q7",
            question: "Grafana Explore 模式的用途是什么？",
            options: [
                "临时 ad-hoc 查询和调试，快速探索数据源返回的数据",
                "导出 Dashboard",
                "管理用户账户",
                "配置告警规则"
            ],
            answer: 0,
            rationale: "Explore 是无需创建 Dashboard 就能查询数据的模式，适合排查问题时快速验证指标或日志。"
        },
        {
            id: "w11-3-q8",
            question: "如何在 Grafana 中导入社区 Dashboard？",
            options: [
                "在 Dashboard -> Import 中输入 Dashboard ID 或上传 JSON 文件",
                "只能手工重建",
                "通过 kubectl apply",
                "必须购买商业版"
            ],
            answer: 0,
            rationale: "Grafana.com 有大量社区贡献的 Dashboard，可以通过 ID（如 1860）或 JSON 快速导入使用。"
        },
        {
            id: "w11-3-q9",
            question: "Panel 的 Transform 功能用于什么？",
            options: [
                "对查询结果进行二次处理，如合并查询、过滤、计算新字段",
                "变换图表类型",
                "传输数据到其他系统",
                "转换时区"
            ],
            answer: 0,
            rationale: "Transform 允许在可视化前对数据进行处理，如 Merge、Filter、Calculate field 等，适用于数据源无法直接产生所需格式的情况。"
        },
        {
            id: "w11-3-q10",
            question: "Grafana 中如何实现多选变量的查询？",
            options: [
                "在变量配置中开启 Multi-value，查询中使用正则匹配 =~ 语法",
                "不支持多选",
                "只能选择一个值",
                "使用 AND 连接多个变量"
            ],
            answer: 0,
            rationale: "多选变量生成类似 value1|value2|value3 的值，在 PromQL 中需要使用 =~ 正则匹配。"
        },
        {
            id: "w11-3-q11",
            question: "Grafana 的 Data Link 功能用于什么？",
            options: [
                "从 Panel 跳转到其他 Dashboard、外部链接或 Explore，实现钻取分析",
                "连接到数据库",
                "同步数据到云端",
                "链接多个数据源"
            ],
            answer: 0,
            rationale: "Data Link 可以将 Panel 中的数据点关联到其他页面，如从概览 Dashboard 钻取到详细 Dashboard 或日志。"
        },
        {
            id: "w11-3-q12",
            question: "Grafana Alerting（8.0+）的特点是什么？",
            options: [
                "统一告警平台，支持跨多个数据源配置告警规则",
                "只能基于 Prometheus 告警",
                "必须使用 Alertmanager",
                "不支持通知渠道"
            ],
            answer: 0,
            rationale: "Grafana 8.0+ 引入了新的统一告警系统，可以直接在 Grafana 中为任何数据源创建告警规则。"
        },
        {
            id: "w11-3-q13",
            question: "Dashboard 的 Annotation 功能用于什么？",
            options: [
                "在图表上标记重要事件，如部署、故障发生时间",
                "添加代码注释",
                "注释配置文件",
                "标注数据源"
            ],
            answer: 0,
            rationale: "Annotation 可以从数据源查询事件或手动添加标记，帮助关联指标变化与系统事件。"
        },
        {
            id: "w11-3-q14",
            question: "Grafana 的 Organization 和 Team 用于什么？",
            options: [
                "实现多租户隔离和基于角色的访问控制",
                "存储数据",
                "发送通知",
                "配置数据源"
            ],
            answer: 0,
            rationale: "Organization 实现完全隔离的多租户环境，Team 在组织内部实现团队级别的权限管理。"
        },
        {
            id: "w11-3-q15",
            question: "分享 Dashboard 时应注意什么？",
            options: [
                "可以导出 JSON 或创建 Snapshot，注意是否包含敏感数据源信息",
                "Dashboard 无法分享",
                "必须公开密码",
                "只能截图"
            ],
            answer: 0,
            rationale: "导出 JSON 时可以选择是否包含数据源；Snapshot 只包含渲染后的数据，不包含实时查询能力。"
        }
    ],
    "w11-4": [
        {
            id: "w11-4-q1",
            question: "Alertmanager 的主要职责是什么？",
            options: [
                "接收告警，进行分组、去重、抑制和静默，然后路由到接收器发送通知",
                "采集指标",
                "存储时序数据",
                "生成 Dashboard"
            ],
            answer: 0,
            rationale: "Alertmanager 负责告警的后处理和通知，Prometheus 负责告警规则的评估和触发。"
        },
        {
            id: "w11-4-q2",
            question: "路由树（Routing Tree）的工作方式是什么？",
            options: [
                "告警从根路由向下匹配，根据 matchers 选择子路由，决定分组和接收器",
                "随机选择路由",
                "总是发送到所有接收器",
                "按时间顺序轮流发送"
            ],
            answer: 0,
            rationale: "路由树是层级结构，告警按标签匹配规则遍历树，找到匹配的路由后按其配置进行分组和发送。"
        },
        {
            id: "w11-4-q3",
            question: "group_by 配置的作用是什么？",
            options: [
                "指定按哪些标签将告警分组，同组告警合并为一个通知",
                "删除标签",
                "按时间分组",
                "分组数据源"
            ],
            answer: 0,
            rationale: "group_by 决定哪些标签相同的告警被归为一组。例如 group_by: [alertname, cluster] 按告警名和集群分组。"
        },
        {
            id: "w11-4-q4",
            question: "抑制（Inhibition）和静默（Silence）的区别是什么？",
            options: [
                "抑制基于告警间的依赖关系自动静音；静默是手动创建的临时静音规则",
                "两者完全相同",
                "抑制是永久的",
                "静默需要重启才生效"
            ],
            answer: 0,
            rationale: "Inhibition 定义告警间的依赖（如主告警触发时静音从告警）；Silence 是手动或定时创建的静音规则。"
        },
        {
            id: "w11-4-q5",
            question: "group_wait 参数的含义是什么？",
            options: [
                "新告警组首次发送通知前的等待时间，用于聚合同组告警",
                "告警重复间隔",
                "告警超时时间",
                "数据保留时间"
            ],
            answer: 0,
            rationale: "group_wait 让 Alertmanager 等待一段时间收集同组的其他告警，然后一起发送，避免短时间内发送多个通知。"
        },
        {
            id: "w11-4-q6",
            question: "常见的 Alertmanager 接收器（Receiver）有哪些？",
            options: [
                "Email、Slack、PagerDuty、Webhook、OpsGenie、WeChat 等",
                "只有 Email",
                "只有 Slack",
                "只能写文件"
            ],
            answer: 0,
            rationale: "Alertmanager 支持多种通知渠道，也可以通过 Webhook 接收器实现自定义集成。"
        },
        {
            id: "w11-4-q7",
            question: "repeat_interval 参数的作用是什么？",
            options: [
                "控制已发送告警在持续触发时重复通知的时间间隔",
                "首次通知延迟",
                "告警评估间隔",
                "数据采集间隔"
            ],
            answer: 0,
            rationale: "repeat_interval 决定同一个告警在持续 firing 状态时多久重新发送一次通知，避免告警被遗忘。"
        },
        {
            id: "w11-4-q8",
            question: "如何配置 Alertmanager 高可用？",
            options: [
                "部署多个实例，使用 --cluster.* 参数组成集群，通过 Gossip 同步状态",
                "使用单节点",
                "依赖 Kubernetes Service",
                "配置 DNS 轮询"
            ],
            answer: 0,
            rationale: "多个 Alertmanager 实例通过 Gossip 协议同步静默和通知状态，Prometheus 应配置所有实例地址而非负载均衡器。"
        },
        {
            id: "w11-4-q9",
            question: "resolve_timeout 参数的作用是什么？",
            options: [
                "在未收到 resolved 通知时，自动在指定时间后标记告警已解决",
                "HTTP 请求超时",
                "告警评估超时",
                "查询超时"
            ],
            answer: 0,
            rationale: "当 Prometheus 停止发送某个告警时，Alertmanager 会在 resolve_timeout 后自动将其标记为已解决。"
        },
        {
            id: "w11-4-q10",
            question: "Alertmanager 通知模板使用什么语言？",
            options: [
                "Go template，支持引用告警的标签和注释",
                "Jinja2",
                "Mustache",
                "JavaScript"
            ],
            answer: 0,
            rationale: "Alertmanager 使用 Go 模板语法，可以在通知消息中使用 {{ .Labels.alertname }}、{{ .Annotations.summary }} 等。"
        },
        {
            id: "w11-4-q11",
            question: "Prometheus 如何配置发送告警到 Alertmanager？",
            options: [
                "在 prometheus.yml 的 alerting > alertmanagers 部分配置地址列表",
                "自动发现",
                "写入 etcd",
                "通过环境变量"
            ],
            answer: 0,
            rationale: "Prometheus 配置中需要明确指定 Alertmanager 的地址，可以是静态地址或通过服务发现。"
        },
        {
            id: "w11-4-q12",
            question: "continue: true 在路由配置中的作用是什么？",
            options: [
                "匹配当前路由后继续检查兄弟路由，允许发送到多个接收器",
                "跳过当前路由",
                "永远继续重试",
                "继续发送已解决的告警"
            ],
            answer: 0,
            rationale: "默认情况下告警匹配到路由后停止。设置 continue: true 后会继续匹配后续路由，实现同一告警发送到多个渠道。"
        },
        {
            id: "w11-4-q13",
            question: "Prometheus 告警规则中 for 子句的作用是什么？",
            options: [
                "指定告警条件必须持续满足的时间才触发，避免瞬时抖动",
                "设置告警持续时间上限",
                "定义发送频率",
                "指定数据保留时间"
            ],
            answer: 0,
            rationale: "for: 10m 表示告警条件必须持续 10 分钟才从 pending 变为 firing，避免短暂的指标波动触发告警。"
        },
        {
            id: "w11-4-q14",
            question: "抑制规则中 equal 列表的作用是什么？",
            options: [
                "指定源告警和目标告警必须具有相同值的标签，才会触发抑制",
                "删除相同的标签",
                "比较告警值",
                "设置相同的接收器"
            ],
            answer: 0,
            rationale: "equal 确保抑制只发生在相关告警之间，如同一集群的告警才会相互抑制。"
        },
        {
            id: "w11-4-q15",
            question: "如何在维护窗口期间避免收到告警通知？",
            options: [
                "在 Alertmanager 中创建 Silence，匹配相关告警并设置持续时间",
                "停止 Prometheus",
                "删除告警规则",
                "断开网络"
            ],
            answer: 0,
            rationale: "Silence 是临时静音机制，可以通过 Web UI 或 API 创建，在计划维护前静音相关告警，维护后自动失效。"
        }
    ]
}
