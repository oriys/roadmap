import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "w11-1": {
        lessonId: "w11-1",
        background: [
            "Prometheus 是云原生监控的事实标准，采用拉取（Pull）模式从目标端点定期抓取 /metrics 暴露的指标。这种模式让 Prometheus 能主动控制采集频率和目标列表，无需目标主动推送，降低了系统耦合度。",
            "服务发现（Service Discovery）是 Prometheus 的核心能力。在 Kubernetes 环境中，通过 kubernetes_sd_config 可以自动发现 Pod、Service、Node、Endpoints 等资源，无需手动维护目标列表。发现的元数据会作为 __meta_* 标签供后续处理。",
            "Relabel 是 Prometheus 的配置重写机制，发生在采集前（relabel_configs）和采集后（metric_relabel_configs）。通过正则匹配和标签操作，可以过滤目标、重写标签、提取元数据，实现灵活的采集控制。",
            "Prometheus 的本地存储使用时序数据库（TSDB），以 2 小时为一个 block 存储数据，包含 chunks（压缩数据）、index（索引）和 tombstones（删除标记）。WAL（Write-Ahead Log）确保写入持久性。对于长期存储，可通过 Remote Write 将数据发送到 Cortex、Mimir、VictoriaMetrics 等远程存储。"
        ],
        keyDifficulties: [
            "理解 Kubernetes 服务发现的角色类型：endpoints（发现 Service 后端的 Pod）、pod（直接发现所有 Pod）、service（发现 Service VIP）、node（发现集群节点）。不同角色产生不同的 __meta_kubernetes_* 标签，选择合适的角色是配置的关键。",
            "掌握 relabel_configs 的核心动作：keep/drop（过滤目标）、replace（重写标签值）、labelmap（批量重命名标签）、labeldrop/labelkeep（删除/保留标签）。理解 source_labels、regex、target_label、replacement 的组合使用。",
            "区分 scrape_configs 中的 relabel_configs 和 metric_relabel_configs：前者在采集前处理目标元数据（如过滤不需要采集的 Pod），后者在采集后处理指标（如删除高基数标签）。两者执行时机不同，用途也不同。",
            "理解 honor_labels 参数：当目标暴露的标签与 Prometheus 附加的标签冲突时，honor_labels: true 保留目标标签，false 则添加 exported_ 前缀保留两者。这在联邦或 Pushgateway 场景尤为重要。"
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
            "PromQL（Prometheus Query Language）是 Prometheus 的查询语言，用于选择、聚合和计算时序数据。它支持两种查询类型：瞬时查询（instant query）返回单个时间点的数据，范围查询（range query）返回时间区间内的数据序列。",
            "PromQL 的四种数据类型：瞬时向量（instant vector）包含同一时间点的多条时序；范围向量（range vector）包含时间区间内的样本集合；标量（scalar）是单个数值；字符串（string）目前很少使用。理解这些类型对编写正确的查询至关重要。",
            "rate() 是处理 Counter 类型指标的核心函数，计算范围向量的每秒平均增长率，自动处理 Counter 重置。irate() 只使用最后两个数据点计算瞬时速率，更敏感但也更不稳定。increase() 返回时间段内的总增量。",
            "histogram_quantile() 函数从直方图数据计算分位数（如 P95、P99）。直方图使用 _bucket 后缀的多个时序存储落入各个区间的计数，通过线性插值估算分位值。这是监控延迟分布的标准方法。"
        ],
        keyDifficulties: [
            "理解 rate() 和 irate() 的差异：rate() 使用线性回归计算平均速率，平滑但滞后；irate() 使用最后两点计算瞬时速率，敏感但波动大。告警通常用 rate()，即时图表可用 irate()。注意范围窗口应至少是采集间隔的 4 倍。",
            "掌握聚合操作符：sum/avg/max/min/count 按维度聚合，topk/bottomk 取排名，quantile 计算聚合分位数。by() 保留指定标签，without() 排除指定标签。聚合顺序影响结果：先 rate() 再 sum()，而非相反。",
            "直方图分位数的正确写法：histogram_quantile(0.95, sum by (le) (rate(http_request_duration_seconds_bucket[5m])))。必须保留 le 标签进行 sum 聚合，因为 le 是桶边界。分位数是估算值，桶边界的设计影响精度。",
            "向量匹配规则：二元运算符（+、-、*、/、比较）在两个向量间进行时，默认要求标签完全匹配。on() 指定匹配标签，ignoring() 排除匹配标签。group_left/group_right 处理多对一匹配，保留指定侧的额外标签。"
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
            question: "Prometheus 默认的采集模型是什么？",
            options: [
                "Pull 模式：定期从目标端点抓取 /metrics 暴露的指标",
                "Push 模式：目标主动推送指标到 Prometheus",
                "通过日志收集器被动接收",
                "通过消息队列异步传输"
            ],
            answer: 0,
            rationale: "Prometheus 采用拉取（Pull）模式，主动从配置的目标端点定期抓取 /metrics 路径暴露的指标。"
        },
        {
            id: "w11-1-q2",
            question: "kubernetes_sd_config 中 role: endpoints 发现的是什么？",
            options: [
                "Service 的后端 Pod IP 和端口",
                "所有 Pod 的 IP",
                "Node 的 IP",
                "Service 的 ClusterIP"
            ],
            answer: 0,
            rationale: "role: endpoints 发现 Service 背后的 Endpoints，即实际处理请求的 Pod IP 和端口，是最常用的服务发现模式。"
        },
        {
            id: "w11-1-q3",
            question: "relabel_configs 中 action: keep 的作用是什么？",
            options: [
                "只保留匹配 regex 的目标，丢弃其他目标",
                "保留所有目标",
                "删除匹配的标签",
                "重写标签值"
            ],
            answer: 0,
            rationale: "action: keep 根据 source_labels 和 regex 过滤目标，只保留匹配的目标，不匹配的会被丢弃。"
        },
        {
            id: "w11-1-q4",
            question: "scrape_configs 中的 relabel_configs 和 metric_relabel_configs 的区别是什么？",
            options: [
                "relabel_configs 在采集前处理目标，metric_relabel_configs 在采集后处理指标",
                "两者功能相同",
                "relabel_configs 只能用于 Kubernetes",
                "metric_relabel_configs 只能删除指标"
            ],
            answer: 0,
            rationale: "relabel_configs 在采集前决定是否采集目标以及如何修改目标标签；metric_relabel_configs 在采集后处理已收集的指标。"
        },
        {
            id: "w11-1-q5",
            question: "Prometheus 本地存储的基本单位是什么？",
            options: [
                "以 2 小时为一个 block，包含 chunks、index 和 tombstones",
                "单个大文件存储所有数据",
                "每个指标一个文件",
                "使用 MySQL 存储"
            ],
            answer: 0,
            rationale: "Prometheus TSDB 将数据按时间切分为 2 小时的 block，每个 block 包含压缩的 chunks、索引文件和删除标记。"
        },
        {
            id: "w11-1-q6",
            question: "Remote Write 的主要用途是什么？",
            options: [
                "将采集的数据实时发送到远程长期存储系统",
                "从远程系统读取数据",
                "同步配置文件",
                "发送告警通知"
            ],
            answer: 0,
            rationale: "Remote Write 允许 Prometheus 将数据流式发送到 Cortex、Mimir、VictoriaMetrics 等远程存储，实现长期保存和全局查询。"
        },
        {
            id: "w11-1-q7",
            question: "Pushgateway 适用于什么场景？",
            options: [
                "短生命周期或批处理任务无法被定期拉取时临时上报指标",
                "所有长期运行的服务",
                "替代 Alertmanager",
                "存储日志数据"
            ],
            answer: 0,
            rationale: "Pushgateway 用于缓存短生命周期任务（如批处理作业）的指标，让 Prometheus 能够采集到这些瞬时任务的数据。"
        },
        {
            id: "w11-1-q8",
            question: "honor_labels: true 配置的作用是什么？",
            options: [
                "当目标标签与 Prometheus 附加标签冲突时，保留目标的标签",
                "删除所有标签",
                "总是使用 Prometheus 附加的标签",
                "禁用标签处理"
            ],
            answer: 0,
            rationale: "honor_labels: true 表示当标签冲突时优先保留目标暴露的标签，这在 Federation 或 Pushgateway 场景很重要。"
        },
        {
            id: "w11-1-q9",
            question: "ServiceMonitor CRD 的作用是什么？",
            options: [
                "声明式定义 Prometheus 应该采集哪些 Service 的指标",
                "监控 Service 的健康状态",
                "配置 Service 的负载均衡",
                "管理 Service 的网络策略"
            ],
            answer: 0,
            rationale: "ServiceMonitor 是 Prometheus Operator 定义的 CRD，通过声明式配置指定 Prometheus 采集目标，Operator 会将其转换为 scrape_config。"
        },
        {
            id: "w11-1-q10",
            question: "Prometheus 的数据保留时长如何配置？",
            options: [
                "通过 --storage.tsdb.retention.time 或 --storage.tsdb.retention.size 参数",
                "无法配置，固定 15 天",
                "只能通过删除数据目录",
                "必须修改源代码"
            ],
            answer: 0,
            rationale: "retention.time 按时间限制保留（如 15d），retention.size 按存储大小限制。两者可以同时设置，满足任一条件就会清理旧数据。"
        },
        {
            id: "w11-1-q11",
            question: "labelmap 动作的作用是什么？",
            options: [
                "根据正则表达式批量重命名匹配的标签",
                "删除所有标签",
                "只保留一个标签",
                "将标签值转为大写"
            ],
            answer: 0,
            rationale: "labelmap 用于批量重命名标签，常用于将 __meta_kubernetes_* 标签转换为普通标签保留下来。"
        },
        {
            id: "w11-1-q12",
            question: "Prometheus 的 WAL（Write-Ahead Log）的作用是什么？",
            options: [
                "确保写入数据的持久性，崩溃后可以恢复未持久化的数据",
                "存储查询日志",
                "记录告警历史",
                "存储配置变更"
            ],
            answer: 0,
            rationale: "WAL 是预写日志，新采集的数据先写入 WAL，再异步写入 block。崩溃重启时可以从 WAL 恢复内存中的数据。"
        },
        {
            id: "w11-1-q13",
            question: "scrape_interval 参数的含义是什么？",
            options: [
                "Prometheus 采集目标指标的时间间隔",
                "告警检查的间隔",
                "数据保留时间",
                "Block 压缩间隔"
            ],
            answer: 0,
            rationale: "scrape_interval 定义 Prometheus 多久采集一次目标，默认 1 分钟。可以在全局或每个 job 级别配置。"
        },
        {
            id: "w11-1-q14",
            question: "Exporter 的作用是什么？",
            options: [
                "将系统或应用的指标转换为 Prometheus 可以采集的格式",
                "存储时序数据",
                "发送告警通知",
                "提供 Web UI"
            ],
            answer: 0,
            rationale: "Exporter 负责从各种系统（如 MySQL、Redis、Node）收集指标，并以 Prometheus exposition 格式通过 HTTP 暴露。"
        },
        {
            id: "w11-1-q15",
            question: "metric_relabel_configs 中 action: drop 的典型用途是什么？",
            options: [
                "删除不需要的高基数指标以减少存储压力",
                "删除所有指标",
                "删除采集目标",
                "删除告警规则"
            ],
            answer: 0,
            rationale: "action: drop 在 metric_relabel_configs 中用于过滤掉不需要的指标，如删除 go_* 运行时指标或高基数的 histogram bucket。"
        }
    ],
    "w11-2": [
        {
            id: "w11-2-q1",
            question: "rate() 和 irate() 的主要区别是什么？",
            options: [
                "rate 计算整个区间的平均速率，irate 只用最后两个点计算瞬时速率",
                "两者计算方式相同",
                "irate 只能用于 Gauge 类型",
                "rate 只能用于 5 分钟窗口"
            ],
            answer: 0,
            rationale: "rate() 使用线性回归计算平均速率，更平滑但有滞后；irate() 只使用最后两个数据点，更敏感但波动大。"
        },
        {
            id: "w11-2-q2",
            question: "sum by (job) (rate(http_requests_total[5m])) 的含义是什么？",
            options: [
                "按 job 维度汇总 5 分钟窗口内的每秒请求速率",
                "计算过去 5 分钟的请求总数",
                "只保留 job 标签",
                "计算最大请求速率"
            ],
            answer: 0,
            rationale: "rate() 计算每秒增长率，sum by (job) 按 job 维度聚合，结果是每个 job 的总请求速率。"
        },
        {
            id: "w11-2-q3",
            question: "计算直方图 P95 延迟的正确写法是什么？",
            options: [
                "histogram_quantile(0.95, sum by (le) (rate(http_request_duration_seconds_bucket[5m])))",
                "quantile(0.95, http_request_duration_seconds)",
                "avg(http_request_duration_seconds_bucket)",
                "max(http_request_duration_seconds)"
            ],
            answer: 0,
            rationale: "必须对 _bucket 指标先 rate() 再 sum by (le)，保留 le（桶边界）标签，然后用 histogram_quantile() 计算分位数。"
        },
        {
            id: "w11-2-q4",
            question: "向量匹配中 on() 关键字的作用是什么？",
            options: [
                "指定二元运算时只在这些标签上进行匹配",
                "增加新标签",
                "删除指定标签",
                "设置时间范围"
            ],
            answer: 0,
            rationale: "on() 限定向量匹配只考虑指定的标签，忽略其他标签的差异。与 ignoring() 作用相反。"
        },
        {
            id: "w11-2-q5",
            question: "increase(counter[1h]) 返回什么？",
            options: [
                "过去 1 小时内 Counter 的增长总量",
                "当前值",
                "每秒增长率",
                "最大值"
            ],
            answer: 0,
            rationale: "increase() 返回 Counter 在指定时间范围内的总增量，相当于 rate() * 时间范围秒数。"
        },
        {
            id: "w11-2-q6",
            question: "offset 关键字的作用是什么？",
            options: [
                "查询过去某个时间偏移的数据，用于同比/环比分析",
                "设置时间精度",
                "偏移标签值",
                "延迟告警触发"
            ],
            answer: 0,
            rationale: "offset 允许查询历史时间点的数据，如 rate(http_requests_total[5m] offset 1h) 查询 1 小时前的速率。"
        },
        {
            id: "w11-2-q7",
            question: "group_left 修饰符解决什么问题？",
            options: [
                "在多对一向量匹配中，保留左侧向量的额外标签",
                "将左侧向量移到右边",
                "只保留左侧的指标",
                "按左侧标签分组"
            ],
            answer: 0,
            rationale: "group_left 用于一对多（右侧）或多对一（左侧）匹配场景，允许保留较高基数一侧的额外标签。"
        },
        {
            id: "w11-2-q8",
            question: "absent() 函数的用途是什么？",
            options: [
                "当没有匹配的时间序列时返回 1，用于检测指标缺失或目标掉线",
                "计算绝对值",
                "返回空结果",
                "删除时间序列"
            ],
            answer: 0,
            rationale: "absent() 用于告警场景，当指标不存在时返回 1，可以检测 Exporter 宕机或指标停止上报。"
        },
        {
            id: "w11-2-q9",
            question: "Gauge 和 Counter 指标类型的区别是什么？",
            options: [
                "Gauge 可上升下降，Counter 只能单调递增（重启时归零）",
                "两者完全相同",
                "Counter 用于内存，Gauge 用于 CPU",
                "Gauge 必须手动重置"
            ],
            answer: 0,
            rationale: "Counter 用于累计值（如请求总数），只增不减；Gauge 用于可变值（如温度、内存使用），可增可减。"
        },
        {
            id: "w11-2-q10",
            question: "为什么要「先 rate 再 sum」而不是「先 sum 再 rate」？",
            options: [
                "rate() 需要在单个时序上计算才能正确处理 Counter 重置",
                "顺序无所谓",
                "sum 不能用于 Counter",
                "rate 只能在最后使用"
            ],
            answer: 0,
            rationale: "Counter 重置检测必须在单个时序上进行。如果先 sum 聚合，不同实例的重置时间不同，会导致计算错误。"
        },
        {
            id: "w11-2-q11",
            question: "label_replace() 函数的用途是什么？",
            options: [
                "基于正则表达式添加或修改标签值",
                "删除所有标签",
                "计算速率",
                "设置告警阈值"
            ],
            answer: 0,
            rationale: "label_replace() 可以从现有标签提取内容创建新标签，常用于调整标签以满足向量匹配需求。"
        },
        {
            id: "w11-2-q12",
            question: "topk(5, sum by (instance) (rate(http_requests_total[5m]))) 的含义是什么？",
            options: [
                "返回请求速率最高的 5 个实例",
                "返回所有实例的前 5 分钟数据",
                "只保留 5 个标签",
                "计算前 5 分钟的平均值"
            ],
            answer: 0,
            rationale: "topk() 按值排序返回前 N 个时序，常用于找出资源消耗最高的实例或服务。"
        },
        {
            id: "w11-2-q13",
            question: "范围向量选择器的时间单位 [5m] 中 m 代表什么？",
            options: [
                "分钟（minute）",
                "毫秒（millisecond）",
                "月（month）",
                "兆字节（megabyte）"
            ],
            answer: 0,
            rationale: "PromQL 时间单位：ms（毫秒）、s（秒）、m（分钟）、h（小时）、d（天）、w（周）、y（年）。"
        },
        {
            id: "w11-2-q14",
            question: "Recording Rules 的主要用途是什么？",
            options: [
                "预计算常用的复杂查询，将结果存储为新指标，减少查询时的计算开销",
                "记录查询日志",
                "录制用户操作",
                "存储告警历史"
            ],
            answer: 0,
            rationale: "Recording Rules 定期执行 PromQL 并将结果存储为新时序，适用于 Dashboard 反复查询的复杂表达式。"
        },
        {
            id: "w11-2-q15",
            question: "histogram_quantile() 返回的是精确值还是估算值？",
            options: [
                "估算值，通过桶边界之间的线性插值计算",
                "精确值",
                "取决于数据量",
                "只有 P50 是精确的"
            ],
            answer: 0,
            rationale: "直方图只记录落入各桶的计数，分位数通过线性插值估算。桶边界的设计影响精度。"
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
