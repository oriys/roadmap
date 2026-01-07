import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week17Guides: Record<string, LessonGuide> = {
    "pulsar-w17-1": {
        lessonId: "pulsar-w17-1",
        background: [
            "【监控重要性】官方文档：监控是生产环境运维的基础，帮助了解集群健康状态、发现性能瓶颈、提前预警问题。",
            "【Prometheus 集成】Pulsar 原生支持 Prometheus 指标格式，Broker、BookKeeper、ZooKeeper 都暴露 Prometheus 端点。",
            "【关键 Broker 指标】连接数、Topic 数量、发布/消费速率、消息积压量、存储使用、CPU/内存使用等。",
            "【关键 Topic 指标】发布速率（msgRateIn）、消费速率（msgRateOut）、积压量（msgBacklog）、存储大小（storageSize）。",
            "【Grafana 仪表板】官方和社区提供 Grafana 仪表板模板，可视化展示 Pulsar 集群状态和趋势。"
        ],
        keyDifficulties: [
            "【告警阈值设置】设置合理的告警阈值需要根据业务特点和历史数据。太敏感会产生告警疲劳，太迟钝会错过问题。",
            "【积压监控】消息积压是常见问题指标。需要区分正常波动和异常积压，结合消费速率和生产速率分析。",
            "【性能基线】建立性能基线，了解正常情况下的指标范围，才能发现异常。",
            "【多维度分析】单个指标可能无法说明问题，需要结合多个指标（如 CPU、内存、延迟、吞吐）综合分析。"
        ],
        handsOnPath: [
            "部署 Prometheus，配置抓取 Pulsar 指标端点。",
            "导入 Grafana 仪表板，配置数据源，查看集群状态。",
            "配置告警规则：积压超过阈值、消费速率下降、连接数异常等。",
            "模拟异常场景，验证告警是否正常触发。"
        ],
        selfCheck: [
            "Pulsar 使用什么格式暴露监控指标？如何集成 Prometheus？",
            "Broker 有哪些关键监控指标？Topic 有哪些关键指标？",
            "如何设置合理的告警阈值？需要考虑什么？",
            "什么是消息积压？如何监控和分析？",
            "如何使用 Grafana 可视化 Pulsar 指标？"
        ],
        extensions: [
            "研究 Pulsar Manager 的监控功能。",
            "探索自定义 Grafana 仪表板。",
            "学习 Prometheus 的高可用部署。",
            "研究 APM（应用性能监控）与 Pulsar 的集成。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/reference-metrics/",
            "https://pulsar.apache.org/docs/deploy-monitoring/"
        ]
    },
    "pulsar-w17-2": {
        lessonId: "pulsar-w17-2",
        background: [
            "【日志作用】日志记录系统运行状态、错误信息、操作记录，是排查问题和审计的重要依据。",
            "【日志级别】Pulsar 使用 Log4j 日志框架，支持 DEBUG、INFO、WARN、ERROR 等级别。生产环境通常使用 INFO 或 WARN。",
            "【动态调整日志级别】可以通过 Admin API 动态调整日志级别，无需重启服务。便于临时调试问题。",
            "【日志聚合】生产环境应使用 ELK Stack（Elasticsearch、Logstash、Kibana）或类似方案集中管理日志。",
            "【审计日志】Pulsar 支持审计日志，记录管理操作（创建 Topic、修改权限等），满足合规要求。"
        ],
        keyDifficulties: [
            "【日志量控制】DEBUG 级别日志量巨大，生产环境应使用较高级别。必要时临时开启 DEBUG 排查问题。",
            "【日志保留策略】需要设置合理的日志保留时间和大小，避免磁盘空间耗尽。",
            "【日志分析技巧】学会使用日志搜索和分析工具，快速定位问题。了解常见错误模式。",
            "【分布式日志关联】多组件日志需要通过 Trace ID 等关联，才能追踪完整的请求链路。"
        ],
        handsOnPath: [
            "配置 Pulsar 日志输出格式和级别。",
            "使用 Admin API 动态调整特定 Logger 的日志级别。",
            "部署 ELK Stack，集中收集 Pulsar 日志。",
            "配置日志轮转和保留策略。"
        ],
        selfCheck: [
            "Pulsar 使用什么日志框架？支持哪些日志级别？",
            "如何动态调整日志级别？什么时候需要？",
            "什么是日志聚合？为什么生产环境需要？",
            "审计日志记录什么内容？有什么作用？",
            "如何设置合理的日志保留策略？"
        ],
        extensions: [
            "研究 Fluentd/Fluent Bit 作为日志收集器。",
            "探索日志异常检测的机器学习方案。",
            "学习 Pulsar 常见错误日志的含义和处理方法。",
            "研究合规要求对日志管理的影响。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/administration-logging/",
            "https://pulsar.apache.org/docs/reference-configuration/#log4j"
        ]
    },
    "pulsar-w17-3": {
        lessonId: "pulsar-w17-3",
        background: [
            "【分布式追踪价值】分布式追踪帮助理解请求在多个服务和组件之间的流转，定位延迟瓶颈和故障点。",
            "【OpenTelemetry 集成】Pulsar 客户端支持 OpenTelemetry，可以将消息发送/接收的 Span 集成到应用的追踪链路中。",
            "【Trace Context 传播】消息的 Trace Context 可以通过 Properties 传递给下游消费者，实现跨服务的追踪关联。",
            "【可视化工具】Jaeger、Zipkin 等工具可以可视化展示追踪数据，分析请求链路和耗时分布。",
            "【追踪采样】生产环境通常只采样部分请求进行追踪，避免追踪开销过大。"
        ],
        keyDifficulties: [
            "【追踪 ID 传递】消息场景下的追踪 ID 需要从 Producer 传递到 Consumer，需要在业务代码中正确处理。",
            "【异步消息追踪】消息处理是异步的，追踪链路可能跨越很长时间，需要追踪系统支持长跨度。",
            "【追踪开销】追踪会增加一定的开销（CPU、网络、存储），需要控制采样率。",
            "【多系统关联】完整的追踪需要关联 Pulsar 和应用系统的追踪数据，可能需要统一 Trace ID 格式。"
        ],
        handsOnPath: [
            "配置 Pulsar 客户端启用 OpenTelemetry 追踪。",
            "在消息 Properties 中传递 Trace Context。",
            "部署 Jaeger，查看 Pulsar 消息的追踪链路。",
            "分析端到端延迟，识别瓶颈。"
        ],
        selfCheck: [
            "分布式追踪解决什么问题？",
            "如何在 Pulsar 客户端启用 OpenTelemetry？",
            "Trace Context 如何在消息中传递？",
            "什么是追踪采样？为什么需要？",
            "如何可视化追踪数据？"
        ],
        extensions: [
            "研究 OpenTelemetry Collector 的配置。",
            "探索追踪数据的长期存储方案。",
            "学习如何利用追踪数据进行性能优化。",
            "研究 Service Mesh 与 Pulsar 追踪的集成。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/client-libraries-java-tracing/",
            "https://opentelemetry.io/docs/instrumentation/java/getting-started/"
        ]
    }
}

export const week17Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w17-1": [
        {
            id: "pulsar-w17-1-q1",
            question: "Pulsar 使用什么格式暴露监控指标？",
            options: [
                "JMX 格式",
                "Prometheus 格式",
                "StatsD 格式",
                "Graphite 格式"
            ],
            answer: 1,
            rationale: "Pulsar 原生支持 Prometheus 指标格式。"
        },
        {
            id: "pulsar-w17-1-q2",
            question: "以下哪个是关键的 Topic 指标？",
            options: [
                "CPU 使用率",
                "msgBacklog（消息积压量）",
                "磁盘 IO",
                "网络带宽"
            ],
            answer: 1,
            rationale: "msgBacklog（消息积压量）是关键的 Topic 指标，反映消费是否跟上生产。"
        },
        {
            id: "pulsar-w17-1-q3",
            question: "告警阈值设置太敏感会有什么问题？",
            options: [
                "无问题",
                "产生告警疲劳",
                "错过问题",
                "提高性能"
            ],
            answer: 1,
            rationale: "阈值太敏感会频繁触发告警，导致告警疲劳，真正的问题可能被忽视。"
        },
        {
            id: "pulsar-w17-1-q4",
            question: "什么是性能基线？",
            options: [
                "最高性能",
                "正常情况下的指标范围",
                "最低性能",
                "平均性能"
            ],
            answer: 1,
            rationale: "性能基线是正常情况下的指标范围，建立基线才能发现异常。"
        },
        {
            id: "pulsar-w17-1-q5",
            question: "msgRateIn 指标表示什么？",
            options: [
                "消费速率",
                "发布速率",
                "积压量",
                "存储大小"
            ],
            answer: 1,
            rationale: "msgRateIn 表示消息发布速率（每秒发布的消息数）。"
        },
        {
            id: "pulsar-w17-1-q6",
            question: "Grafana 在监控方案中的作用是什么？",
            options: [
                "收集指标",
                "可视化展示指标和趋势",
                "存储指标",
                "发送告警"
            ],
            answer: 1,
            rationale: "Grafana 用于可视化展示 Prometheus 指标和历史趋势。"
        },
        {
            id: "pulsar-w17-1-q7",
            question: "如何分析消息积压是否异常？",
            options: [
                "只看积压量",
                "结合消费速率和生产速率分析",
                "只看生产速率",
                "只看消费速率"
            ],
            answer: 1,
            rationale: "需要结合消费速率和生产速率分析，区分正常波动和异常积压。"
        },
        {
            id: "pulsar-w17-1-q8",
            question: "Broker 的哪个指标反映连接数？",
            options: [
                "msgBacklog",
                "connections",
                "msgRateIn",
                "storageSize"
            ],
            answer: 1,
            rationale: "connections 指标反映 Broker 的客户端连接数。"
        },
        {
            id: "pulsar-w17-1-q9",
            question: "为什么需要多维度分析？",
            options: [
                "简化监控",
                "单个指标可能无法说明问题",
                "减少数据量",
                "提高性能"
            ],
            answer: 1,
            rationale: "单个指标可能无法说明问题，需要结合多个指标综合分析。"
        },
        {
            id: "pulsar-w17-1-q10",
            question: "Prometheus 如何获取 Pulsar 指标？",
            options: [
                "推送方式",
                "抓取（Pull）Pulsar 暴露的端点",
                "日志解析",
                "API 调用"
            ],
            answer: 1,
            rationale: "Prometheus 通过抓取（Pull）方式从 Pulsar 暴露的端点获取指标。"
        },
        {
            id: "pulsar-w17-1-q11",
            question: "msgRateOut 指标表示什么？",
            options: [
                "发布速率",
                "消费速率",
                "积压增长率",
                "存储增长率"
            ],
            answer: 1,
            rationale: "msgRateOut 表示消息消费速率（每秒消费的消息数）。"
        },
        {
            id: "pulsar-w17-1-q12",
            question: "BookKeeper 的关键监控指标是什么？",
            options: [
                "Topic 数量",
                "写入延迟、存储容量",
                "连接数",
                "消费速率"
            ],
            answer: 1,
            rationale: "BookKeeper 的关键指标包括写入延迟、存储容量、IO 使用等。"
        }
    ],
    "pulsar-w17-2": [
        {
            id: "pulsar-w17-2-q1",
            question: "Pulsar 使用什么日志框架？",
            options: [
                "Logback",
                "Log4j",
                "SLF4J",
                "JUL"
            ],
            answer: 1,
            rationale: "Pulsar 使用 Log4j 日志框架。"
        },
        {
            id: "pulsar-w17-2-q2",
            question: "生产环境通常使用什么日志级别？",
            options: [
                "DEBUG",
                "INFO 或 WARN",
                "TRACE",
                "ALL"
            ],
            answer: 1,
            rationale: "生产环境通常使用 INFO 或 WARN 级别，避免日志量过大。"
        },
        {
            id: "pulsar-w17-2-q3",
            question: "如何动态调整日志级别？",
            options: [
                "修改配置文件并重启",
                "通过 Admin API 调整",
                "无法动态调整",
                "只能在客户端调整"
            ],
            answer: 1,
            rationale: "可以通过 Admin API 动态调整日志级别，无需重启服务。"
        },
        {
            id: "pulsar-w17-2-q4",
            question: "什么是日志聚合？",
            options: [
                "压缩日志",
                "集中收集和管理多个节点的日志",
                "删除旧日志",
                "加密日志"
            ],
            answer: 1,
            rationale: "日志聚合是集中收集和管理多个节点的日志，便于搜索和分析。"
        },
        {
            id: "pulsar-w17-2-q5",
            question: "审计日志记录什么内容？",
            options: [
                "消息内容",
                "管理操作（创建 Topic、修改权限等）",
                "性能指标",
                "网络流量"
            ],
            answer: 1,
            rationale: "审计日志记录管理操作，满足合规和追溯要求。"
        },
        {
            id: "pulsar-w17-2-q6",
            question: "DEBUG 级别日志有什么问题？",
            options: [
                "信息太少",
                "日志量巨大，影响性能和存储",
                "无法记录错误",
                "格式不正确"
            ],
            answer: 1,
            rationale: "DEBUG 级别日志量巨大，会影响性能和消耗大量存储空间。"
        },
        {
            id: "pulsar-w17-2-q7",
            question: "ELK Stack 中的 E 是什么？",
            options: [
                "Event",
                "Elasticsearch",
                "Export",
                "Engine"
            ],
            answer: 1,
            rationale: "ELK Stack 是 Elasticsearch、Logstash、Kibana 的组合。"
        },
        {
            id: "pulsar-w17-2-q8",
            question: "日志保留策略需要考虑什么？",
            options: [
                "只考虑成本",
                "保留时间、存储空间、合规要求",
                "只考虑性能",
                "只考虑安全"
            ],
            answer: 1,
            rationale: "需要考虑保留时间、存储空间和合规要求等因素。"
        },
        {
            id: "pulsar-w17-2-q9",
            question: "什么时候需要临时开启 DEBUG 日志？",
            options: [
                "日常运行",
                "排查问题时",
                "性能测试",
                "备份时"
            ],
            answer: 1,
            rationale: "排查问题时可能需要临时开启 DEBUG 日志获取更多信息。"
        },
        {
            id: "pulsar-w17-2-q10",
            question: "如何关联分布式系统的日志？",
            options: [
                "时间戳",
                "Trace ID 等唯一标识",
                "IP 地址",
                "用户名"
            ],
            answer: 1,
            rationale: "通过 Trace ID 等唯一标识可以关联多个组件的日志。"
        },
        {
            id: "pulsar-w17-2-q11",
            question: "日志轮转的作用是什么？",
            options: [
                "加密日志",
                "自动归档旧日志，避免磁盘空间耗尽",
                "压缩日志",
                "删除所有日志"
            ],
            answer: 1,
            rationale: "日志轮转自动归档或删除旧日志，避免磁盘空间耗尽。"
        },
        {
            id: "pulsar-w17-2-q12",
            question: "Kibana 在 ELK Stack 中的作用是什么？",
            options: [
                "收集日志",
                "可视化搜索和分析日志",
                "存储日志",
                "传输日志"
            ],
            answer: 1,
            rationale: "Kibana 用于可视化搜索和分析 Elasticsearch 中的日志。"
        }
    ],
    "pulsar-w17-3": [
        {
            id: "pulsar-w17-3-q1",
            question: "分布式追踪解决什么问题？",
            options: [
                "存储问题",
                "理解请求在多个服务之间的流转，定位延迟和故障",
                "安全问题",
                "容量问题"
            ],
            answer: 1,
            rationale: "分布式追踪帮助理解请求在多个服务和组件之间的流转，定位延迟瓶颈和故障点。"
        },
        {
            id: "pulsar-w17-3-q2",
            question: "Pulsar 客户端支持哪个追踪标准？",
            options: [
                "Zipkin 专用格式",
                "OpenTelemetry",
                "Jaeger 专用格式",
                "自定义格式"
            ],
            answer: 1,
            rationale: "Pulsar 客户端支持 OpenTelemetry，可以集成到应用的追踪链路中。"
        },
        {
            id: "pulsar-w17-3-q3",
            question: "Trace Context 如何在消息中传递？",
            options: [
                "消息体",
                "消息 Properties",
                "消息 Key",
                "Topic 名称"
            ],
            answer: 1,
            rationale: "Trace Context 可以通过消息 Properties 传递给下游消费者。"
        },
        {
            id: "pulsar-w17-3-q4",
            question: "什么是追踪采样？",
            options: [
                "记录所有请求",
                "只记录部分请求的追踪数据",
                "删除追踪数据",
                "压缩追踪数据"
            ],
            answer: 1,
            rationale: "追踪采样是只记录部分请求的追踪数据，避免开销过大。"
        },
        {
            id: "pulsar-w17-3-q5",
            question: "Jaeger 的作用是什么？",
            options: [
                "收集指标",
                "可视化展示追踪数据",
                "存储日志",
                "发送告警"
            ],
            answer: 1,
            rationale: "Jaeger 可以可视化展示追踪数据，分析请求链路和耗时分布。"
        },
        {
            id: "pulsar-w17-3-q6",
            question: "追踪开销主要来自哪些方面？",
            options: [
                "只有 CPU",
                "CPU、网络、存储",
                "只有存储",
                "只有网络"
            ],
            answer: 1,
            rationale: "追踪开销包括 CPU（生成 Span）、网络（传输）、存储（保存追踪数据）。"
        },
        {
            id: "pulsar-w17-3-q7",
            question: "消息场景下追踪的特殊挑战是什么？",
            options: [
                "无挑战",
                "异步处理，追踪链路可能跨越很长时间",
                "数据量小",
                "格式简单"
            ],
            answer: 1,
            rationale: "消息处理是异步的，追踪链路可能跨越很长时间，需要追踪系统支持长跨度。"
        },
        {
            id: "pulsar-w17-3-q8",
            question: "为什么需要统一 Trace ID 格式？",
            options: [
                "美观",
                "关联 Pulsar 和应用系统的追踪数据",
                "减少存储",
                "提高性能"
            ],
            answer: 1,
            rationale: "统一 Trace ID 格式可以关联 Pulsar 和应用系统的追踪数据，形成完整链路。"
        },
        {
            id: "pulsar-w17-3-q9",
            question: "Span 是什么？",
            options: [
                "一条日志",
                "追踪中的一个操作单元",
                "一条消息",
                "一个指标"
            ],
            answer: 1,
            rationale: "Span 是追踪中的一个操作单元，记录操作的开始、结束时间和相关信息。"
        },
        {
            id: "pulsar-w17-3-q10",
            question: "生产环境为什么需要追踪采样？",
            options: [
                "简化实现",
                "避免追踪开销过大",
                "减少代码",
                "提高安全性"
            ],
            answer: 1,
            rationale: "100% 追踪开销很大，生产环境通常只采样部分请求。"
        },
        {
            id: "pulsar-w17-3-q11",
            question: "OpenTelemetry Collector 的作用是什么？",
            options: [
                "可视化追踪",
                "收集、处理和导出追踪数据",
                "存储追踪数据",
                "生成追踪数据"
            ],
            answer: 1,
            rationale: "OpenTelemetry Collector 负责收集、处理和导出追踪（以及指标、日志）数据。"
        },
        {
            id: "pulsar-w17-3-q12",
            question: "如何利用追踪数据进行性能优化？",
            options: [
                "无法优化",
                "分析端到端延迟，识别瓶颈",
                "只能看不能用",
                "自动优化"
            ],
            answer: 1,
            rationale: "通过分析追踪数据中的端到端延迟，可以识别性能瓶颈并针对性优化。"
        }
    ]
}
