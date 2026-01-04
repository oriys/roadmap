import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week13Guides: Record<string, LessonGuide> = {
    "w13-1": {
        lessonId: "w13-1",
        background: [
            "【Prometheus 指标命名】Prometheus 命名约定：{namespace}_{subsystem}_{name}_{unit}，多租户需要添加 tenant 标签。",
            "【高基数问题】tenant_id 作为标签会导致高基数，可能影响 Prometheus 性能和存储。",
            "【指标聚合】租户级指标支持按租户聚合，同时支持全局视图。",
            "【Grafana 多租户】Grafana 支持组织级别隔离，不同租户看到不同的仪表盘。",
        ],
        keyDifficulties: [
            "【基数爆炸】租户数量多时，标签基数可能超过 Prometheus 处理能力。",
            "【成本增长】高基数导致存储和查询成本增加。",
            "【查询性能】按租户过滤的查询可能变慢。",
            "【隔离监控】确保租户只能看到自己的监控数据。",
        ],
        handsOnPath: [
            "设计多租户 Prometheus 指标命名规范",
            "配置租户标签的基数控制",
            "实现 Grafana 组织级别隔离",
            "设计租户指标聚合策略",
        ],
        selfCheck: [
            "Prometheus 指标命名的最佳实践是什么？",
            "高基数标签的解决方案有哪些？",
            "如何在指标中体现租户维度？",
        ],
        extensions: [
            "研究 Thanos 的多租户支持",
            "了解 VictoriaMetrics 的高基数处理",
        ],
        sourceUrls: [
            "https://prometheus.io/docs/practices/naming/",
            "https://www.robustperception.io/cardinality-is-key",
            "https://grafana.com/blog/2022/10/20/how-to-manage-high-cardinality-metrics-in-prometheus-and-kubernetes/",
        ],
    },
    "w13-2": {
        lessonId: "w13-2",
        background: [
            "【Alertmanager 路由】Prometheus Alertmanager 支持复杂的告警路由规则，可以按标签路由到不同接收者。",
            "【租户级阈值】不同租户可能需要不同的告警阈值，基于 SLA 层级配置。",
            "【告警分组】按租户分组告警，避免单租户问题触发大量告警。",
            "【PagerDuty 集成】PagerDuty 支持服务级别的告警路由和升级策略。",
        ],
        keyDifficulties: [
            "【告警风暴】单租户异常可能产生大量告警。",
            "【误报控制】租户级别的告警可能有更多噪声。",
            "【阈值管理】大量租户的阈值配置管理复杂。",
            "【告警隔离】确保租户告警不会影响其他租户的响应。",
        ],
        handsOnPath: [
            "配置 Alertmanager 租户级路由规则",
            "实现动态告警阈值管理",
            "设计告警分组和抑制策略",
            "集成 PagerDuty 租户级告警",
        ],
        selfCheck: [
            "Alertmanager 路由树如何配置？",
            "如何控制租户级别的告警噪声？",
            "告警分组的策略有哪些？",
        ],
        extensions: [
            "研究 OpsGenie 的多租户告警管理",
            "了解 Alertmanager 的抑制规则",
        ],
        sourceUrls: [
            "https://prometheus.io/docs/alerting/latest/configuration/",
            "https://prometheus.io/docs/alerting/latest/alertmanager/#routing-tree",
            "https://www.pagerduty.com/resources/learn/call-rotations-schedules/",
        ],
    },
    "w13-3": {
        lessonId: "w13-3",
        background: [
            "【SLO 定义】Google SRE 定义 SLO 为服务可靠性的目标，如 99.9% 可用性。",
            "【错误预算】Error Budget 是 SLO 允许的失败空间，用于平衡可靠性和创新。",
            "【租户级 SLA】不同租户层级可能有不同的 SLA 承诺，需要分别监控。",
            "【可用性计算】可用性 = 成功请求 / 总请求，需要按租户分别计算。",
        ],
        keyDifficulties: [
            "【指标选择】选择合适的 SLI 来衡量服务质量。",
            "【多租户聚合】全局 SLO 和租户 SLO 的关系。",
            "【报告生成】为租户生成 SLA 合规报告。",
            "【预算消耗】错误预算消耗速度的监控和告警。",
        ],
        handsOnPath: [
            "定义多租户 SLO 指标",
            "实现租户级可用性计算",
            "配置错误预算监控和告警",
            "生成租户 SLA 合规报告",
        ],
        selfCheck: [
            "SLO 和 SLA 的区别是什么？",
            "错误预算如何使用？",
            "租户级可用性如何计算？",
        ],
        extensions: [
            "研究 Google SRE Book 的 SLO 章节",
            "了解 Nobl9 的 SLO 管理平台",
        ],
        sourceUrls: [
            "https://sre.google/sre-book/service-level-objectives/",
            "https://sre.google/workbook/error-budget-policy/",
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/sla-slo",
        ],
    },
    "w13-4": {
        lessonId: "w13-4",
        background: [
            "【Grafana 组织】Grafana 组织功能支持多租户隔离，每个组织有独立的仪表盘和用户。",
            "【仪表盘设计】租户健康度仪表盘应包含关键指标：可用性、延迟、错误率、资源使用。",
            "【异常检测】predict_linear 等函数可以预测趋势，提前发现问题。",
            "【趋势分析】历史数据对比帮助识别性能退化。",
        ],
        keyDifficulties: [
            "【数据权限】确保租户只能访问自己的监控数据。",
            "【仪表盘模板】为大量租户维护一致的仪表盘体验。",
            "【性能优化】大量租户仪表盘的查询性能。",
            "【告警集成】仪表盘与告警系统的联动。",
        ],
        handsOnPath: [
            "配置 Grafana 多租户组织",
            "设计租户健康度仪表盘模板",
            "实现基于 Prometheus 的异常检测",
            "配置仪表盘变量支持租户切换",
        ],
        selfCheck: [
            "Grafana 组织如何实现租户隔离？",
            "健康度仪表盘应该包含哪些指标？",
            "predict_linear 函数的用法是什么？",
        ],
        extensions: [
            "研究 Datadog 的多租户监控",
            "了解 Grafana Cloud 的企业功能",
        ],
        sourceUrls: [
            "https://grafana.com/docs/grafana/latest/administration/manage-organizations/",
            "https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/",
            "https://prometheus.io/docs/prometheus/latest/querying/functions/#predict_linear",
        ],
    },
}

export const week13Quizzes: Record<string, QuizQuestion[]> = {
    "w13-1": [
        { id: "w13-1-q1", question: "Prometheus 指标命名的推荐格式是什么？", options: ["随机命名", "{namespace}_{subsystem}_{name}_{unit}", "CamelCase", "只用名称"], answer: 1, rationale: "Prometheus 推荐使用下划线分隔的命名约定。" },
        { id: "w13-1-q2", question: "高基数标签的问题是什么？", options: ["无问题", "导致 Prometheus 性能下降和存储增加", "更安全", "更准确"], answer: 1, rationale: "高基数会显著影响 Prometheus 的性能。" },
        { id: "w13-1-q3", question: "租户标签如何添加到指标中？", options: ["不添加", "作为 label 添加，如 tenant_id=xxx", "加在名称中", "加在值中"], answer: 1, rationale: "租户标识应作为标签附加到指标。" },
        { id: "w13-1-q4", question: "Grafana 如何实现多租户隔离？", options: ["无隔离", "通过组织功能隔离用户和仪表盘", "通过 URL", "通过密码"], answer: 1, rationale: "Grafana 组织提供租户级别的资源隔离。" },
        { id: "w13-1-q5", question: "高基数问题的解决方案有哪些？", options: ["增加存储", "标签采样、Recording Rules、分层存储", "删除标签", "减少指标"], answer: 1, rationale: "多种技术手段可以缓解高基数问题。" },
        { id: "w13-1-q6", question: "Recording Rules 的作用是什么？", options: ["记录日志", "预计算聚合指标减少查询开销", "录制视频", "备份数据"], answer: 1, rationale: "Recording Rules 预计算可以减少运行时查询压力。" },
        { id: "w13-1-q7", question: "指标聚合的好处是什么？", options: ["增加存储", "减少查询时间和存储，提供汇总视图", "增加复杂度", "降低精度"], answer: 1, rationale: "聚合指标提供高效的汇总查询。" },
        { id: "w13-1-q8", question: "Thanos 在多租户监控中的作用是什么？", options: ["替代 Prometheus", "提供长期存储和多集群查询", "只做备份", "只做告警"], answer: 1, rationale: "Thanos 扩展 Prometheus 支持长期存储和全局视图。" },
        { id: "w13-1-q9", question: "VictoriaMetrics 的高基数处理特点是什么？", options: ["不支持高基数", "专门优化高基数场景，性能更好", "与 Prometheus 相同", "只支持低基数"], answer: 1, rationale: "VictoriaMetrics 在高基数场景下性能优于 Prometheus。" },
        { id: "w13-1-q10", question: "租户监控隔离的重要性是什么？", options: ["不重要", "确保租户只能看到自己的数据", "提高性能", "降低成本"], answer: 1, rationale: "监控数据也需要租户级别的访问控制。" },
        { id: "w13-1-q11", question: "指标采样的权衡是什么？", options: ["无权衡", "减少存储但可能损失精度", "增加存储", "增加精度"], answer: 1, rationale: "采样在成本和精度之间权衡。" },
        { id: "w13-1-q12", question: "多租户指标存储策略有哪些？", options: ["只有一种", "共享存储、独立存储、分层存储", "只有共享", "只有独立"], answer: 1, rationale: "可以根据需求选择不同的存储策略。" },
    ],
    "w13-2": [
        { id: "w13-2-q1", question: "Alertmanager 路由的作用是什么？", options: ["发送数据", "根据标签将告警路由到不同接收者", "存储告警", "过滤告警"], answer: 1, rationale: "路由规则决定告警发送给谁。" },
        { id: "w13-2-q2", question: "租户级告警阈值为什么需要不同？", options: ["不需要", "不同租户 SLA 不同，阈值应匹配", "统一更好", "自动调整"], answer: 1, rationale: "SLA 差异要求不同的告警阈值。" },
        { id: "w13-2-q3", question: "告警分组的好处是什么？", options: ["增加告警", "减少告警数量，避免告警风暴", "提高延迟", "增加噪声"], answer: 1, rationale: "分组可以合并相关告警减少噪声。" },
        { id: "w13-2-q4", question: "告警抑制（Inhibition）的作用是什么？", options: ["增加告警", "当存在更高级别告警时抑制低级别告警", "删除告警", "延迟告警"], answer: 1, rationale: "抑制避免因同一问题产生重复告警。" },
        { id: "w13-2-q5", question: "PagerDuty 服务的作用是什么？", options: ["代码托管", "事件响应和告警管理", "监控采集", "日志存储"], answer: 1, rationale: "PagerDuty 提供专业的事件响应管理。" },
        { id: "w13-2-q6", question: "告警风暴的定义是什么？", options: ["正常告警", "短时间内产生大量告警淹没响应能力", "无告警", "慢告警"], answer: 1, rationale: "告警风暴会影响事件响应效率。" },
        { id: "w13-2-q7", question: "告警路由按租户标签的配置方式是什么？", options: ["无法配置", "在路由规则中 match tenant_id 标签", "自动路由", "手动路由"], answer: 1, rationale: "可以基于 tenant_id 标签配置路由规则。" },
        { id: "w13-2-q8", question: "告警去重的机制是什么？", options: ["无去重", "相同标签的告警在静默期内只触发一次", "全部发送", "随机去重"], answer: 1, rationale: "去重避免重复告警影响响应。" },
        { id: "w13-2-q9", question: "动态阈值管理的挑战是什么？", options: ["太简单", "大量租户的阈值配置和更新管理复杂", "无挑战", "自动完成"], answer: 1, rationale: "需要系统化管理大量阈值配置。" },
        { id: "w13-2-q10", question: "告警升级策略的作用是什么？", options: ["降低级别", "未响应时自动升级到更高级别人员", "删除告警", "静默告警"], answer: 1, rationale: "升级确保告警得到及时响应。" },
        { id: "w13-2-q11", question: "租户告警隔离的重要性是什么？", options: ["不重要", "避免一个租户的问题影响对其他租户的响应", "增加成本", "降低效率"], answer: 1, rationale: "隔离确保各租户告警独立处理。" },
        { id: "w13-2-q12", question: "告警通知渠道有哪些？", options: ["只有邮件", "邮件、Slack、PagerDuty、Webhook 等", "只有 Webhook", "只有短信"], answer: 1, rationale: "支持多种通知渠道满足不同需求。" },
    ],
    "w13-3": [
        { id: "w13-3-q1", question: "SLO 的定义是什么？", options: ["服务协议", "服务可靠性目标，如 99.9% 可用性", "服务限制", "服务日志"], answer: 1, rationale: "SLO 是服务级别目标，定义可靠性指标。" },
        { id: "w13-3-q2", question: "SLO 和 SLA 的区别是什么？", options: ["相同", "SLO 是内部目标，SLA 是对外承诺", "SLA 更严格", "SLO 更严格"], answer: 1, rationale: "SLO 是内部目标，SLA 包含违约后果。" },
        { id: "w13-3-q3", question: "错误预算的计算方式是什么？", options: ["固定值", "100% - SLO，如 SLO 99.9% 则预算 0.1%", "随机值", "无预算"], answer: 1, rationale: "错误预算是 SLO 允许的失败空间。" },
        { id: "w13-3-q4", question: "错误预算消耗完意味着什么？", options: ["继续开发", "应该暂停新功能，专注稳定性", "增加预算", "忽略"], answer: 1, rationale: "预算耗尽说明可靠性风险，应优先修复。" },
        { id: "w13-3-q5", question: "租户级 SLA 的差异来源是什么？", options: ["随机", "不同付费层级承诺不同的服务级别", "无差异", "技术限制"], answer: 1, rationale: "付费层级决定 SLA 承诺。" },
        { id: "w13-3-q6", question: "可用性如何计算？", options: ["固定值", "成功请求数 / 总请求数", "总请求数", "失败请求数"], answer: 1, rationale: "可用性是成功请求的比例。" },
        { id: "w13-3-q7", question: "SLI 是什么？", options: ["服务协议", "服务级别指标，衡量 SLO 的具体指标", "服务限制", "服务日志"], answer: 1, rationale: "SLI 是用于衡量 SLO 的具体指标。" },
        { id: "w13-3-q8", question: "常见的 SLI 有哪些？", options: ["只有可用性", "可用性、延迟、吞吐量、错误率", "只有延迟", "只有错误率"], answer: 1, rationale: "多种指标共同衡量服务质量。" },
        { id: "w13-3-q9", question: "租户 SLA 报告应该包含什么？", options: ["只有时间", "可用性、性能指标、SLA 达成情况", "只有错误", "只有日志"], answer: 1, rationale: "报告应全面展示服务质量。" },
        { id: "w13-3-q10", question: "多租户 SLO 聚合的挑战是什么？", options: ["太简单", "全局 SLO 和租户 SLO 可能不一致", "无挑战", "自动完成"], answer: 1, rationale: "需要理解全局和租户指标的关系。" },
        { id: "w13-3-q11", question: "错误预算策略的作用是什么？", options: ["无作用", "指导预算消耗后的行动决策", "增加预算", "减少预算"], answer: 1, rationale: "策略定义预算消耗后的响应措施。" },
        { id: "w13-3-q12", question: "SLO 窗口期的含义是什么？", options: ["无含义", "计算 SLO 的时间范围，如 30 天", "固定时间", "实时计算"], answer: 1, rationale: "窗口期定义 SLO 计算的时间范围。" },
    ],
    "w13-4": [
        { id: "w13-4-q1", question: "Grafana 组织功能的作用是什么？", options: ["代码管理", "多租户隔离，独立的仪表盘和用户", "日志存储", "监控采集"], answer: 1, rationale: "组织提供租户级别的 Grafana 资源隔离。" },
        { id: "w13-4-q2", question: "健康度仪表盘应该包含哪些指标？", options: ["只有可用性", "可用性、延迟、错误率、资源使用", "只有资源", "只有日志"], answer: 1, rationale: "健康度需要多维度指标综合评估。" },
        { id: "w13-4-q3", question: "predict_linear 函数的作用是什么？", options: ["历史查询", "基于历史数据预测未来趋势", "删除数据", "聚合数据"], answer: 1, rationale: "predict_linear 可以预测指标趋势。" },
        { id: "w13-4-q4", question: "仪表盘变量的作用是什么？", options: ["固定值", "支持动态切换，如选择不同租户", "美化", "加密"], answer: 1, rationale: "变量使仪表盘可以动态过滤数据。" },
        { id: "w13-4-q5", question: "仪表盘模板化的好处是什么？", options: ["增加工作", "统一多租户仪表盘体验，易于维护", "降低性能", "增加成本"], answer: 1, rationale: "模板化确保一致性并减少重复工作。" },
        { id: "w13-4-q6", question: "异常检测的方法有哪些？", options: ["只有阈值", "静态阈值、动态基线、预测趋势", "无方法", "只有预测"], answer: 1, rationale: "多种方法可以检测不同类型的异常。" },
        { id: "w13-4-q7", question: "趋势分析的价值是什么？", options: ["无价值", "识别性能退化，提前发现问题", "增加延迟", "增加成本"], answer: 1, rationale: "趋势分析帮助预防问题。" },
        { id: "w13-4-q8", question: "Grafana 数据权限如何控制？", options: ["无控制", "通过组织、数据源权限、行级安全", "固定权限", "全部公开"], answer: 1, rationale: "多层权限控制确保数据安全。" },
        { id: "w13-4-q9", question: "仪表盘性能优化的方法是什么？", options: ["增加指标", "减少查询范围、使用 Recording Rules、缓存", "增加面板", "增加变量"], answer: 1, rationale: "多种优化手段提升仪表盘性能。" },
        { id: "w13-4-q10", question: "告警与仪表盘的联动方式是什么？", options: ["无联动", "仪表盘显示告警状态，点击跳转告警详情", "自动修复", "自动重启"], answer: 1, rationale: "联动帮助快速定位问题。" },
        { id: "w13-4-q11", question: "Datadog 多租户监控的特点是什么？", options: ["不支持多租户", "原生支持标签隔离和多账户", "只支持单租户", "只支持日志"], answer: 1, rationale: "Datadog 提供企业级多租户监控能力。" },
        { id: "w13-4-q12", question: "租户仪表盘访问审计的作用是什么？", options: ["无作用", "记录谁访问了什么数据，支持合规", "增加延迟", "删除数据"], answer: 1, rationale: "审计日志支持安全和合规要求。" },
    ],
}
