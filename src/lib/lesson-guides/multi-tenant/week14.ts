import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week14Guides: Record<string, LessonGuide> = {
    "w14-1": {
        lessonId: "w14-1",
        background: [
            "【Loki 多租户】Grafana Loki 原生支持多租户，通过 X-Scope-OrgID Header 区分租户。",
            "【Elasticsearch 多租户】通过文档级安全（Document Level Security）实现租户数据隔离。",
            "【OpenSearch FGAC】AWS OpenSearch 支持细粒度访问控制，可以限制用户只能访问特定索引。",
            "【日志标识注入】在应用层自动注入租户标识到每条日志，确保日志可追溯。",
        ],
        keyDifficulties: [
            "【日志隔离】确保租户只能查询自己的日志。",
            "【敏感信息】日志中可能包含敏感数据，需要脱敏。",
            "【存储成本】多租户日志量大，需要控制存储成本。",
            "【标识注入】确保所有日志路径都正确注入租户标识。",
        ],
        handsOnPath: [
            "配置 Loki 多租户模式",
            "实现 Elasticsearch 文档级安全",
            "设计日志租户标识注入方案",
            "配置日志敏感信息脱敏",
        ],
        selfCheck: [
            "Loki 多租户如何配置？",
            "Elasticsearch DLS 的工作原理是什么？",
            "如何确保日志中的租户标识完整？",
        ],
        extensions: [
            "研究 Splunk 的多租户架构",
            "了解 Fluentd 的多租户路由",
        ],
        sourceUrls: [
            "https://grafana.com/docs/loki/latest/operations/multi-tenancy/",
            "https://www.elastic.co/guide/en/elasticsearch/reference/current/document-level-security.html",
            "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html",
        ],
    },
    "w14-2": {
        lessonId: "w14-2",
        background: [
            "【Loki LogQL】Loki 查询语言，支持标签过滤和日志内容搜索。",
            "【ILM 策略】Elasticsearch Index Lifecycle Management，自动管理索引的生命周期。",
            "【日志采样】通过采样减少日志量，降低存储成本同时保留足够信息。",
            "【索引策略】按租户、时间或服务组织索引，优化查询性能。",
        ],
        keyDifficulties: [
            "【查询性能】大量日志的查询可能很慢。",
            "【存储成本】长期保留日志成本高。",
            "【索引设计】索引结构影响查询效率和存储成本。",
            "【采样策略】采样可能丢失重要信息。",
        ],
        handsOnPath: [
            "优化 Loki 查询模式",
            "配置 Elasticsearch ILM 策略",
            "实现日志采样策略",
            "设计多租户日志索引结构",
        ],
        selfCheck: [
            "LogQL 的基本语法是什么？",
            "ILM 策略包含哪些阶段？",
            "日志采样的权衡是什么？",
        ],
        extensions: [
            "研究 ClickHouse 日志分析",
            "了解 Loki 的日志压缩策略",
        ],
        sourceUrls: [
            "https://grafana.com/docs/loki/latest/query/",
            "https://www.elastic.co/guide/en/elasticsearch/reference/current/ilm-policy.html",
            "https://opentelemetry.io/docs/concepts/sampling/",
        ],
    },
    "w14-3": {
        lessonId: "w14-3",
        background: [
            "【OpenTelemetry】CNCF 的可观测性标准，统一了 Traces、Metrics、Logs 的采集和传输。",
            "【Jaeger 多租户】Jaeger 支持多租户模式，通过 Header 区分租户追踪数据。",
            "【W3C Baggage】W3C 标准定义跨服务上下文传播的格式，可用于传递租户标识。",
            "【Trace 上下文】租户标识应该作为 Trace 的属性传递，确保追踪数据可按租户过滤。",
        ],
        keyDifficulties: [
            "【上下文传播】确保租户标识在整个调用链中传递。",
            "【采样策略】高流量场景下需要采样控制成本。",
            "【存储成本】Trace 数据量大，存储成本高。",
            "【性能开销】追踪对应用性能有一定影响。",
        ],
        handsOnPath: [
            "配置 OpenTelemetry 多租户追踪",
            "实现 Jaeger 租户隔离",
            "配置 W3C Baggage 传递租户 ID",
            "设计 Trace 采样策略",
        ],
        selfCheck: [
            "OpenTelemetry 的核心概念是什么？",
            "如何在 Trace 中传递租户标识？",
            "Trace 采样策略有哪些？",
        ],
        extensions: [
            "研究 Zipkin 的多租户支持",
            "了解 Tempo 的大规模追踪存储",
        ],
        sourceUrls: [
            "https://opentelemetry.io/docs/concepts/signals/traces/",
            "https://www.jaegertracing.io/docs/latest/deployment/#multi-tenancy",
            "https://www.w3.org/TR/baggage/",
        ],
    },
    "w14-4": {
        lessonId: "w14-4",
        background: [
            "【事件响应】Google SRE 定义的事件管理流程：检测、响应、缓解、恢复、复盘。",
            "【根因分析】通过日志、追踪、指标综合分析问题根本原因。",
            "【影响评估】评估故障对租户的影响范围和严重程度。",
            "【事后复盘】无责任事后分析，关注改进而非追责。",
        ],
        keyDifficulties: [
            "【租户隔离影响】一个租户的问题是否影响其他租户。",
            "【跨服务关联】在微服务架构中追踪问题链路。",
            "【数据关联】将日志、追踪、指标关联起来分析。",
            "【沟通协调】租户通知和状态更新。",
        ],
        handsOnPath: [
            "建立租户故障诊断手册",
            "配置日志、追踪、指标关联",
            "设计租户影响评估流程",
            "实现事件响应自动化",
        ],
        selfCheck: [
            "事件响应的关键阶段是什么？",
            "如何进行根因分析？",
            "事后复盘应该关注什么？",
        ],
        extensions: [
            "研究 Incident.io 的事件管理",
            "了解 Blameless 的 SRE 平台",
        ],
        sourceUrls: [
            "https://sre.google/sre-book/managing-incidents/",
            "https://sre.google/workbook/postmortem-culture/",
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/incident-management",
        ],
    },
}

export const week14Quizzes: Record<string, QuizQuestion[]> = {
    "w14-1": [
        { id: "w14-1-q1", question: "Loki 多租户通过什么识别租户？", options: ["URL 参数", "X-Scope-OrgID Header", "Cookie", "IP 地址"], answer: 1, rationale: "Loki 使用 X-Scope-OrgID Header 区分租户。" },
        { id: "w14-1-q2", question: "Elasticsearch Document Level Security 的作用是什么？", options: ["加密文档", "限制用户只能访问特定文档", "压缩文档", "删除文档"], answer: 1, rationale: "DLS 实现细粒度的文档访问控制。" },
        { id: "w14-1-q3", question: "日志租户标识注入应该在哪里进行？", options: ["数据库", "应用层自动注入到每条日志", "网络层", "存储层"], answer: 1, rationale: "应用层是注入租户标识的最佳位置。" },
        { id: "w14-1-q4", question: "OpenSearch FGAC 是什么？", options: ["日志格式", "细粒度访问控制", "查询语言", "存储格式"], answer: 1, rationale: "Fine-Grained Access Control 提供细粒度权限管理。" },
        { id: "w14-1-q5", question: "日志敏感信息脱敏的方法有哪些？", options: ["不处理", "掩码、哈希、移除敏感字段", "全部删除", "加密存储"], answer: 1, rationale: "多种脱敏技术保护敏感数据。" },
        { id: "w14-1-q6", question: "多租户日志存储成本控制的方法是什么？", options: ["无限存储", "压缩、采样、分层存储、保留策略", "只存最新", "不存储"], answer: 1, rationale: "多种手段控制日志存储成本。" },
        { id: "w14-1-q7", question: "Fluentd 在多租户中的作用是什么？", options: ["存储日志", "日志收集和路由，支持租户标签", "查询日志", "删除日志"], answer: 1, rationale: "Fluentd 可以按租户路由日志。" },
        { id: "w14-1-q8", question: "日志索引按租户分离的好处是什么？", options: ["增加存储", "更好的隔离和查询性能", "降低性能", "增加成本"], answer: 1, rationale: "独立索引提供更好的隔离和性能。" },
        { id: "w14-1-q9", question: "Splunk 多租户的特点是什么？", options: ["不支持多租户", "支持索引级别和角色级别的多租户", "只支持单租户", "开源免费"], answer: 1, rationale: "Splunk 提供企业级多租户日志管理。" },
        { id: "w14-1-q10", question: "日志标识遗漏的风险是什么？", options: ["无风险", "无法追溯问题到具体租户", "性能下降", "存储增加"], answer: 1, rationale: "缺少标识会影响问题定位。" },
        { id: "w14-1-q11", question: "Loki 和 Elasticsearch 的主要区别是什么？", options: ["完全相同", "Loki 不索引日志内容，成本更低", "Elasticsearch 更便宜", "Loki 功能更多"], answer: 1, rationale: "Loki 只索引标签，日志内容不索引。" },
        { id: "w14-1-q12", question: "日志审计的目的是什么？", options: ["删除日志", "满足合规要求，支持安全调查", "压缩日志", "加速查询"], answer: 1, rationale: "审计日志支持合规和安全需求。" },
    ],
    "w14-2": [
        { id: "w14-2-q1", question: "LogQL 的特点是什么？", options: ["SQL 语法", "标签过滤和日志内容搜索的查询语言", "只支持标签", "只支持内容"], answer: 1, rationale: "LogQL 结合了标签过滤和日志搜索。" },
        { id: "w14-2-q2", question: "Elasticsearch ILM 的作用是什么？", options: ["索引创建", "自动管理索引的生命周期", "索引删除", "索引备份"], answer: 1, rationale: "ILM 自动化索引的生命周期管理。" },
        { id: "w14-2-q3", question: "ILM 策略的阶段有哪些？", options: ["只有删除", "hot、warm、cold、delete", "只有热", "只有冷"], answer: 1, rationale: "ILM 定义多个阶段管理索引生命周期。" },
        { id: "w14-2-q4", question: "日志采样的目的是什么？", options: ["增加数据", "减少日志量降低存储成本", "增加成本", "增加复杂度"], answer: 1, rationale: "采样是控制成本的有效手段。" },
        { id: "w14-2-q5", question: "采样策略的风险是什么？", options: ["无风险", "可能丢失重要的故障信息", "增加存储", "降低性能"], answer: 1, rationale: "采样需要权衡信息完整性。" },
        { id: "w14-2-q6", question: "多租户日志索引策略有哪些？", options: ["只有一种", "按租户独立索引、共享索引按字段过滤", "只有共享", "只有独立"], answer: 1, rationale: "可以选择不同的索引策略。" },
        { id: "w14-2-q7", question: "日志保留策略应该考虑什么？", options: ["无限保留", "合规要求、成本、查询需求", "只考虑成本", "只考虑合规"], answer: 1, rationale: "需要综合多个因素设计保留策略。" },
        { id: "w14-2-q8", question: "LogQL 标签过滤的语法是什么？", options: ["SQL WHERE", "{label=value}", "label:value", "label==value"], answer: 1, rationale: "LogQL 使用大括号进行标签过滤。" },
        { id: "w14-2-q9", question: "冷存储的特点是什么？", options: ["高性能", "低成本但查询较慢", "高成本", "不能查询"], answer: 1, rationale: "冷存储适合不常访问的历史数据。" },
        { id: "w14-2-q10", question: "ClickHouse 日志分析的优势是什么？", options: ["存储最小", "高性能列式存储，适合大规模日志分析", "最便宜", "最简单"], answer: 1, rationale: "ClickHouse 提供高效的日志分析能力。" },
        { id: "w14-2-q11", question: "日志压缩的作用是什么？", options: ["增加存储", "减少存储空间降低成本", "加速查询", "增加安全"], answer: 1, rationale: "压缩显著减少日志存储成本。" },
        { id: "w14-2-q12", question: "查询优化的方法有哪些？", options: ["无优化", "减少时间范围、使用标签过滤、限制结果数", "增加范围", "删除索引"], answer: 1, rationale: "多种优化手段提升查询性能。" },
    ],
    "w14-3": [
        { id: "w14-3-q1", question: "OpenTelemetry 包含哪些信号类型？", options: ["只有 Traces", "Traces、Metrics、Logs", "只有 Logs", "只有 Metrics"], answer: 1, rationale: "OpenTelemetry 统一了三种可观测性信号。" },
        { id: "w14-3-q2", question: "Jaeger 多租户如何实现？", options: ["URL 区分", "通过 Header 区分租户追踪数据", "IP 区分", "Cookie 区分"], answer: 1, rationale: "Jaeger 使用 Header 实现多租户隔离。" },
        { id: "w14-3-q3", question: "W3C Baggage 的作用是什么？", options: ["行李托运", "跨服务传递上下文信息", "数据压缩", "加密传输"], answer: 1, rationale: "Baggage 用于跨服务传递键值对。" },
        { id: "w14-3-q4", question: "Trace 采样的目的是什么？", options: ["增加精度", "控制追踪数据量和成本", "增加存储", "增加延迟"], answer: 1, rationale: "采样控制 Trace 数据量和成本。" },
        { id: "w14-3-q5", question: "常见的 Trace 采样策略有哪些？", options: ["只有全量", "头部采样、尾部采样、概率采样", "只有概率", "不采样"], answer: 1, rationale: "不同采样策略适用于不同场景。" },
        { id: "w14-3-q6", question: "追踪对应用性能的影响如何控制？", options: ["无法控制", "采样、异步上报、批量发送", "增加资源", "禁用追踪"], answer: 1, rationale: "多种技术减少追踪的性能开销。" },
        { id: "w14-3-q7", question: "Span 是什么？", options: ["日志", "Trace 中的一个操作单元", "指标", "告警"], answer: 1, rationale: "Span 代表追踪中的一个操作。" },
        { id: "w14-3-q8", question: "租户标识应该如何在 Trace 中传递？", options: ["不传递", "作为 Span 属性或 Baggage", "只在第一个 Span", "只在最后"], answer: 1, rationale: "租户标识应该在整个 Trace 中可见。" },
        { id: "w14-3-q9", question: "Tempo 的特点是什么？", options: ["替代 Jaeger", "大规模 Trace 存储，只需 Object Storage", "只支持小规模", "不支持查询"], answer: 1, rationale: "Tempo 设计用于大规模 Trace 存储。" },
        { id: "w14-3-q10", question: "尾部采样的优势是什么？", options: ["最简单", "可以基于完整 Trace 结果决定是否保留", "最快", "最便宜"], answer: 1, rationale: "尾部采样可以保留有问题的 Trace。" },
        { id: "w14-3-q11", question: "Trace 存储成本高的原因是什么？", options: ["数据小", "每个请求产生多个 Span，数据量大", "压缩率低", "加密开销"], answer: 1, rationale: "Trace 数据量远大于指标数据。" },
        { id: "w14-3-q12", question: "Zipkin 和 Jaeger 的主要区别是什么？", options: ["完全相同", "架构和存储后端不同，但功能相似", "Zipkin 更好", "Jaeger 更简单"], answer: 1, rationale: "两者都是流行的分布式追踪系统。" },
    ],
    "w14-4": [
        { id: "w14-4-q1", question: "事件响应的关键阶段有哪些？", options: ["只有检测", "检测、响应、缓解、恢复、复盘", "只有恢复", "只有复盘"], answer: 1, rationale: "完整的事件响应包含多个阶段。" },
        { id: "w14-4-q2", question: "根因分析需要哪些数据？", options: ["只有日志", "日志、追踪、指标综合分析", "只有指标", "只有追踪"], answer: 1, rationale: "多种数据源帮助定位根本原因。" },
        { id: "w14-4-q3", question: "影响评估应该包含什么？", options: ["只有技术", "受影响租户范围和业务影响程度", "只有成本", "只有时间"], answer: 1, rationale: "评估需要覆盖技术和业务影响。" },
        { id: "w14-4-q4", question: "无责任事后复盘的核心原则是什么？", options: ["追责个人", "关注系统改进而非追责个人", "忽略问题", "快速结束"], answer: 1, rationale: "无责任文化鼓励公开讨论和改进。" },
        { id: "w14-4-q5", question: "租户故障隔离的重要性是什么？", options: ["不重要", "确保一个租户问题不影响其他租户", "增加成本", "增加复杂度"], answer: 1, rationale: "故障隔离是多租户系统的关键能力。" },
        { id: "w14-4-q6", question: "日志、追踪、指标关联的好处是什么？", options: ["增加复杂度", "快速定位问题的完整上下文", "增加存储", "增加延迟"], answer: 1, rationale: "关联帮助获得问题的全貌。" },
        { id: "w14-4-q7", question: "事件响应自动化可以做什么？", options: ["替代人工", "自动通知、收集信息、执行预定义动作", "自动修复所有", "自动升级"], answer: 1, rationale: "自动化加速响应但不能完全替代人工。" },
        { id: "w14-4-q8", question: "租户通知应该包含什么？", options: ["技术细节", "问题描述、影响、预计恢复时间、更新渠道", "代码错误", "内部流程"], answer: 1, rationale: "通知应该清晰说明对租户的影响。" },
        { id: "w14-4-q9", question: "复盘报告应该包含什么？", options: ["只有时间线", "时间线、根因、影响、改进措施", "只有原因", "只有措施"], answer: 1, rationale: "完整的复盘报告支持持续改进。" },
        { id: "w14-4-q10", question: "Incident.io 的作用是什么？", options: ["代码管理", "事件响应和管理平台", "监控采集", "日志存储"], answer: 1, rationale: "Incident.io 帮助团队管理事件响应。" },
        { id: "w14-4-q11", question: "事件严重级别的定义标准是什么？", options: ["随机", "基于用户影响范围和业务紧急程度", "技术复杂度", "代码行数"], answer: 1, rationale: "严重级别应该反映业务影响。" },
        { id: "w14-4-q12", question: "跨服务问题追踪的挑战是什么？", options: ["太简单", "需要关联多个服务的日志和追踪", "无挑战", "自动完成"], answer: 1, rationale: "微服务架构增加了问题追踪难度。" },
    ],
}
