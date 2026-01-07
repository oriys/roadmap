import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week15Guides: Record<string, LessonGuide> = {
    "pulsar-w15-1": {
        lessonId: "pulsar-w15-1",
        background: [
            "【Pulsar IO 定义】官方文档：Pulsar IO 是 Pulsar 的连接器框架，基于 Pulsar Functions 构建，用于与外部系统集成数据导入导出。",
            "【Connector 类型】Pulsar IO 包含两类 Connector：Source Connector（从外部系统导入数据到 Pulsar）和 Sink Connector（从 Pulsar 导出数据到外部系统）。",
            "【内置 Connector】官方提供丰富的内置 Connector：Kafka、JDBC、Elasticsearch、Cassandra、Redis、MongoDB、AWS 服务等。",
            "【Connector 本质】Connector 是特殊的 Pulsar Function，继承了 Function 的所有特性：处理保证、并行度、资源管理等。",
            "【Connector Hub】StreamNative 维护 Connector Hub（hub.streamnative.io），提供更多社区和商业 Connector。"
        ],
        keyDifficulties: [
            "【选择 Connector 还是直接集成】简单场景可以在应用中直接集成，复杂的数据同步场景使用 Connector 更便于管理和监控。",
            "【Schema 映射】Connector 需要处理 Pulsar Schema 与外部系统数据格式的映射，确保数据兼容性。",
            "【性能调优】Connector 性能受并行度、批量大小、外部系统性能等因素影响，需要综合调优。",
            "【故障处理】Connector 失败时的重试和死信处理需要根据外部系统特性配置。"
        ],
        handsOnPath: [
            "浏览 Pulsar 官方文档的 Connector 列表，了解可用的 Connector。",
            "研究 Connector Hub，了解社区提供的额外 Connector。",
            "对比 Pulsar IO 和 Kafka Connect 的设计差异。",
            "思考你的数据集成需求，哪些可以用 Pulsar IO 实现。"
        ],
        selfCheck: [
            "Pulsar IO 是什么？它基于什么构建？",
            "Source Connector 和 Sink Connector 的区别是什么？",
            "Pulsar IO 提供哪些内置 Connector？",
            "什么时候应该使用 Connector，什么时候直接集成？",
            "Connector Hub 是什么？提供什么内容？"
        ],
        extensions: [
            "研究如何开发自定义 Connector。",
            "探索 Connector 的高可用配置。",
            "学习 Connector 的监控和告警最佳实践。",
            "研究 CDC（Change Data Capture）在 Pulsar IO 中的应用。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/io-overview/",
            "https://pulsar.apache.org/docs/io-connectors/"
        ]
    },
    "pulsar-w15-2": {
        lessonId: "pulsar-w15-2",
        background: [
            "【Source Connector 作用】Source Connector 从外部系统读取数据，转换为 Pulsar 消息发送到指定 Topic。",
            "【Kafka Source】从 Kafka Topic 导入消息到 Pulsar，支持消费者组、Offset 管理、消息转换等配置。",
            "【Debezium Source】基于 Debezium 的 CDC Connector，从数据库捕获变更事件，支持 MySQL、PostgreSQL、MongoDB 等。",
            "【JDBC Source】从关系数据库查询数据导入 Pulsar，支持增量查询（基于时间戳或自增 ID）。",
            "【File Source】从文件系统或对象存储读取文件，适合批量数据导入。"
        ],
        keyDifficulties: [
            "【CDC vs 批量导入】CDC 实时捕获变更，适合实时同步；批量导入定期全量或增量查询，适合非实时场景。",
            "【Kafka Source 的 Offset 管理】需要配置消费者组和 Offset 策略，确保不丢失和不重复消费。",
            "【Debezium 配置复杂性】CDC 需要数据库开启 binlog/WAL，配置连接权限，处理 Schema 变更等。",
            "【增量查询策略】JDBC Source 的增量查询需要选择合适的增量字段（时间戳或自增 ID），处理数据更新场景。"
        ],
        handsOnPath: [
            "部署 Kafka Source Connector，从 Kafka 导入数据到 Pulsar。",
            "配置 Debezium Source，捕获 MySQL 数据库变更。",
            "使用 JDBC Source 定期从数据库导入数据。",
            "监控 Source Connector 的运行状态和指标。"
        ],
        selfCheck: [
            "Source Connector 的数据流向是什么？",
            "Kafka Source 需要配置哪些关键参数？",
            "CDC 和批量导入各适合什么场景？",
            "Debezium Source 需要数据库做什么配置？",
            "JDBC Source 如何实现增量导入？"
        ],
        extensions: [
            "研究 Debezium 的 Schema Registry 集成。",
            "探索 AWS Kinesis Source 的配置。",
            "学习如何监控 CDC 延迟和数据一致性。",
            "研究多表 CDC 的配置和管理。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/io-overview/#source",
            "https://pulsar.apache.org/docs/io-kafka-source/",
            "https://pulsar.apache.org/docs/io-debezium-source/"
        ]
    },
    "pulsar-w15-3": {
        lessonId: "pulsar-w15-3",
        background: [
            "【Sink Connector 作用】Sink Connector 从 Pulsar Topic 消费消息，转换后写入外部系统。",
            "【Elasticsearch Sink】将消息索引到 Elasticsearch，支持动态索引名、文档 ID 映射、批量写入等。",
            "【JDBC Sink】将消息写入关系数据库，支持 Insert、Upsert 模式，批量写入优化。",
            "【Cloud Storage Sink】将消息写入 S3、GCS、Azure Blob 等云存储，支持分区、格式化（JSON、Avro、Parquet）。",
            "【Kafka Sink】将 Pulsar 消息发送到 Kafka Topic，用于 Pulsar 到 Kafka 的数据同步。"
        ],
        keyDifficulties: [
            "【批量写入优化】大多数 Sink 支持批量写入，需要权衡批量大小、写入延迟和资源消耗。",
            "【幂等写入】Sink 需要考虑幂等性，避免重复消费导致数据重复。可以使用 Message ID 或业务 Key 去重。",
            "【Schema 映射】Pulsar 消息 Schema 需要映射到目标系统格式，如 ES 的文档结构、数据库的表结构。",
            "【失败处理】写入失败时需要配置重试策略和死信 Topic，避免数据丢失。"
        ],
        handsOnPath: [
            "部署 Elasticsearch Sink，将消息索引到 ES。",
            "配置 JDBC Sink，将消息写入 MySQL 表。",
            "使用 Cloud Storage Sink 将消息归档到 S3。",
            "测试 Sink 的批量写入和失败重试行为。"
        ],
        selfCheck: [
            "Sink Connector 的数据流向是什么？",
            "Elasticsearch Sink 如何配置索引名和文档 ID？",
            "JDBC Sink 支持哪些写入模式？",
            "如何保证 Sink 写入的幂等性？",
            "批量写入有什么优势和需要权衡的因素？"
        ],
        extensions: [
            "研究 Parquet 格式在 Cloud Storage Sink 中的优势。",
            "探索 ClickHouse Sink 的配置和性能调优。",
            "学习如何开发自定义 Sink Connector。",
            "研究 Sink 在数据湖架构中的应用。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/io-overview/#sink",
            "https://pulsar.apache.org/docs/io-elasticsearch-sink/",
            "https://pulsar.apache.org/docs/io-jdbc-sink/"
        ]
    }
}

export const week15Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w15-1": [
        {
            id: "pulsar-w15-1-q1",
            question: "Pulsar IO 基于什么构建？",
            options: [
                "独立框架",
                "Pulsar Functions",
                "Kafka Connect",
                "Flink"
            ],
            answer: 1,
            rationale: "Pulsar IO 基于 Pulsar Functions 构建，Connector 是特殊的 Function。"
        },
        {
            id: "pulsar-w15-1-q2",
            question: "Source Connector 的数据流向是什么？",
            options: [
                "Pulsar 到外部系统",
                "外部系统到 Pulsar",
                "Pulsar 到 Pulsar",
                "外部系统到外部系统"
            ],
            answer: 1,
            rationale: "Source Connector 从外部系统导入数据到 Pulsar。"
        },
        {
            id: "pulsar-w15-1-q3",
            question: "Sink Connector 的数据流向是什么？",
            options: [
                "外部系统到 Pulsar",
                "Pulsar 到外部系统",
                "Pulsar 到 Pulsar",
                "外部系统到外部系统"
            ],
            answer: 1,
            rationale: "Sink Connector 从 Pulsar 导出数据到外部系统。"
        },
        {
            id: "pulsar-w15-1-q4",
            question: "以下哪个是 Pulsar 内置的 Connector？",
            options: [
                "Oracle Connector",
                "Kafka Connector",
                "SAP Connector",
                "Salesforce Connector"
            ],
            answer: 1,
            rationale: "Kafka Connector 是 Pulsar 内置的 Connector，包括 Source 和 Sink。"
        },
        {
            id: "pulsar-w15-1-q5",
            question: "Connector Hub 由谁维护？",
            options: [
                "Apache 基金会",
                "StreamNative",
                "Google",
                "AWS"
            ],
            answer: 1,
            rationale: "Connector Hub（hub.streamnative.io）由 StreamNative 维护。"
        },
        {
            id: "pulsar-w15-1-q6",
            question: "Connector 继承了 Function 的哪些特性？",
            options: [
                "只有并行度",
                "处理保证、并行度、资源管理等",
                "只有资源管理",
                "只有处理保证"
            ],
            answer: 1,
            rationale: "Connector 继承了 Function 的所有特性：处理保证、并行度、资源管理等。"
        },
        {
            id: "pulsar-w15-1-q7",
            question: "什么时候应该使用 Connector 而不是直接集成？",
            options: [
                "所有场景",
                "复杂的数据同步场景，需要管理和监控",
                "简单场景",
                "性能要求高的场景"
            ],
            answer: 1,
            rationale: "复杂的数据同步场景使用 Connector 更便于管理和监控。"
        },
        {
            id: "pulsar-w15-1-q8",
            question: "Connector 的性能受哪些因素影响？",
            options: [
                "只有网络",
                "并行度、批量大小、外部系统性能等",
                "只有 CPU",
                "只有内存"
            ],
            answer: 1,
            rationale: "Connector 性能受并行度、批量大小、外部系统性能等多种因素影响。"
        },
        {
            id: "pulsar-w15-1-q9",
            question: "Schema 映射在 Connector 中的作用是什么？",
            options: [
                "压缩数据",
                "确保 Pulsar Schema 与外部系统数据格式兼容",
                "加密数据",
                "路由数据"
            ],
            answer: 1,
            rationale: "Connector 需要处理 Pulsar Schema 与外部系统数据格式的映射，确保数据兼容性。"
        },
        {
            id: "pulsar-w15-1-q10",
            question: "Pulsar IO 与 Kafka Connect 的关系是什么？",
            options: [
                "完全相同",
                "类似功能但架构不同，Pulsar IO 基于 Functions",
                "Pulsar IO 是 Kafka Connect 的封装",
                "完全不同"
            ],
            answer: 1,
            rationale: "Pulsar IO 和 Kafka Connect 功能类似，但 Pulsar IO 基于 Functions 架构。"
        },
        {
            id: "pulsar-w15-1-q11",
            question: "如何部署 Connector？",
            options: [
                "独立进程",
                "使用 pulsar-admin 命令",
                "编译代码",
                "修改配置文件"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin sources/sinks 命令部署 Connector。"
        },
        {
            id: "pulsar-w15-1-q12",
            question: "Connector 失败时的处理方式是什么？",
            options: [
                "自动忽略",
                "根据配置重试或发送到死信 Topic",
                "停止运行",
                "通知管理员"
            ],
            answer: 1,
            rationale: "Connector 失败时根据配置进行重试或发送到死信 Topic，避免数据丢失。"
        }
    ],
    "pulsar-w15-2": [
        {
            id: "pulsar-w15-2-q1",
            question: "Kafka Source Connector 的作用是什么？",
            options: [
                "发送数据到 Kafka",
                "从 Kafka 导入消息到 Pulsar",
                "同步 Pulsar 集群",
                "备份数据"
            ],
            answer: 1,
            rationale: "Kafka Source 从 Kafka Topic 导入消息到 Pulsar。"
        },
        {
            id: "pulsar-w15-2-q2",
            question: "Debezium Source 是什么类型的 Connector？",
            options: [
                "批量导入",
                "CDC（Change Data Capture）",
                "文件导入",
                "API 导入"
            ],
            answer: 1,
            rationale: "Debezium Source 是 CDC Connector，从数据库捕获变更事件。"
        },
        {
            id: "pulsar-w15-2-q3",
            question: "CDC 相比批量导入的优势是什么？",
            options: [
                "配置简单",
                "实时捕获变更，延迟低",
                "资源消耗少",
                "不需要数据库配置"
            ],
            answer: 1,
            rationale: "CDC 实时捕获变更，延迟低，适合实时同步场景。"
        },
        {
            id: "pulsar-w15-2-q4",
            question: "JDBC Source 如何实现增量导入？",
            options: [
                "全量扫描",
                "基于时间戳或自增 ID 增量查询",
                "使用触发器",
                "监听 binlog"
            ],
            answer: 1,
            rationale: "JDBC Source 通过基于时间戳或自增 ID 的增量查询实现增量导入。"
        },
        {
            id: "pulsar-w15-2-q5",
            question: "使用 Debezium Source 需要数据库做什么配置？",
            options: [
                "无需配置",
                "开启 binlog/WAL，配置连接权限",
                "只需要读权限",
                "只需要创建表"
            ],
            answer: 1,
            rationale: "CDC 需要数据库开启 binlog/WAL，配置连接权限等。"
        },
        {
            id: "pulsar-w15-2-q6",
            question: "Kafka Source 的 Offset 管理为什么重要？",
            options: [
                "影响性能",
                "确保不丢失和不重复消费",
                "影响压缩",
                "影响加密"
            ],
            answer: 1,
            rationale: "Offset 管理确保消息不丢失和不重复消费。"
        },
        {
            id: "pulsar-w15-2-q7",
            question: "Debezium 支持哪些数据库？",
            options: [
                "只有 MySQL",
                "MySQL、PostgreSQL、MongoDB 等",
                "只有 Oracle",
                "只有 SQL Server"
            ],
            answer: 1,
            rationale: "Debezium 支持 MySQL、PostgreSQL、MongoDB、Oracle、SQL Server 等多种数据库。"
        },
        {
            id: "pulsar-w15-2-q8",
            question: "File Source 适合什么场景？",
            options: [
                "实时同步",
                "批量数据导入",
                "CDC",
                "API 集成"
            ],
            answer: 1,
            rationale: "File Source 从文件系统或对象存储读取文件，适合批量数据导入。"
        },
        {
            id: "pulsar-w15-2-q9",
            question: "JDBC Source 增量查询的字段选择需要考虑什么？",
            options: [
                "字段类型",
                "处理数据更新场景",
                "字段名长度",
                "字段是否可空"
            ],
            answer: 1,
            rationale: "需要选择合适的增量字段（时间戳或自增 ID），并考虑数据更新场景的处理。"
        },
        {
            id: "pulsar-w15-2-q10",
            question: "如何监控 Source Connector 的运行状态？",
            options: [
                "查看日志",
                "使用 pulsar-admin sources status 命令",
                "重启 Connector",
                "查看配置"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin sources status 命令查看 Source Connector 运行状态和指标。"
        },
        {
            id: "pulsar-w15-2-q11",
            question: "批量导入适合什么场景？",
            options: [
                "实时同步",
                "非实时场景，定期全量或增量",
                "CDC",
                "流处理"
            ],
            answer: 1,
            rationale: "批量导入定期全量或增量查询，适合非实时场景。"
        },
        {
            id: "pulsar-w15-2-q12",
            question: "Schema 变更在 CDC 场景下需要如何处理？",
            options: [
                "自动处理",
                "需要配置 Schema 演进策略",
                "忽略变更",
                "重新部署 Connector"
            ],
            answer: 1,
            rationale: "CDC 场景下数据库 Schema 变更需要配置 Schema 演进策略处理。"
        }
    ],
    "pulsar-w15-3": [
        {
            id: "pulsar-w15-3-q1",
            question: "Elasticsearch Sink 的作用是什么？",
            options: [
                "从 ES 读取数据",
                "将消息索引到 Elasticsearch",
                "备份 ES 数据",
                "同步 ES 集群"
            ],
            answer: 1,
            rationale: "Elasticsearch Sink 将 Pulsar 消息索引到 Elasticsearch。"
        },
        {
            id: "pulsar-w15-3-q2",
            question: "JDBC Sink 支持哪些写入模式？",
            options: [
                "只有 Insert",
                "Insert、Upsert 等",
                "只有 Update",
                "只有 Delete"
            ],
            answer: 1,
            rationale: "JDBC Sink 支持 Insert、Upsert 模式，以及批量写入优化。"
        },
        {
            id: "pulsar-w15-3-q3",
            question: "Cloud Storage Sink 支持哪些存储？",
            options: [
                "只有 S3",
                "S3、GCS、Azure Blob 等",
                "只有本地磁盘",
                "只有 HDFS"
            ],
            answer: 1,
            rationale: "Cloud Storage Sink 支持 S3、GCS、Azure Blob 等云存储。"
        },
        {
            id: "pulsar-w15-3-q4",
            question: "批量写入需要权衡哪些因素？",
            options: [
                "只有批量大小",
                "批量大小、写入延迟、资源消耗",
                "只有延迟",
                "只有资源"
            ],
            answer: 1,
            rationale: "批量写入需要权衡批量大小、写入延迟和资源消耗。"
        },
        {
            id: "pulsar-w15-3-q5",
            question: "如何保证 Sink 写入的幂等性？",
            options: [
                "无法保证",
                "使用 Message ID 或业务 Key 去重",
                "增加重试",
                "减少并行度"
            ],
            answer: 1,
            rationale: "可以使用 Message ID 或业务 Key 实现幂等写入，避免数据重复。"
        },
        {
            id: "pulsar-w15-3-q6",
            question: "Elasticsearch Sink 如何配置文档 ID？",
            options: [
                "自动生成",
                "从消息字段或 Message ID 映射",
                "手动指定",
                "使用时间戳"
            ],
            answer: 1,
            rationale: "可以配置从消息字段或 Message ID 映射文档 ID。"
        },
        {
            id: "pulsar-w15-3-q7",
            question: "写入失败时应该如何处理？",
            options: [
                "忽略",
                "配置重试策略和死信 Topic",
                "停止 Sink",
                "通知管理员"
            ],
            answer: 1,
            rationale: "写入失败时需要配置重试策略和死信 Topic，避免数据丢失。"
        },
        {
            id: "pulsar-w15-3-q8",
            question: "Cloud Storage Sink 支持哪些数据格式？",
            options: [
                "只有 JSON",
                "JSON、Avro、Parquet 等",
                "只有 Avro",
                "只有 CSV"
            ],
            answer: 1,
            rationale: "Cloud Storage Sink 支持 JSON、Avro、Parquet 等多种格式。"
        },
        {
            id: "pulsar-w15-3-q9",
            question: "Kafka Sink 的用途是什么？",
            options: [
                "从 Kafka 读取",
                "将 Pulsar 消息发送到 Kafka",
                "备份数据",
                "压缩数据"
            ],
            answer: 1,
            rationale: "Kafka Sink 将 Pulsar 消息发送到 Kafka Topic，用于数据同步。"
        },
        {
            id: "pulsar-w15-3-q10",
            question: "Schema 映射在 Sink 中的作用是什么？",
            options: [
                "压缩数据",
                "将 Pulsar 消息 Schema 映射到目标系统格式",
                "加密数据",
                "路由数据"
            ],
            answer: 1,
            rationale: "Pulsar 消息 Schema 需要映射到目标系统格式，如 ES 文档结构、数据库表结构。"
        },
        {
            id: "pulsar-w15-3-q11",
            question: "Parquet 格式在 Cloud Storage Sink 中有什么优势？",
            options: [
                "可读性好",
                "列式存储，压缩率高，查询效率高",
                "配置简单",
                "兼容性好"
            ],
            answer: 1,
            rationale: "Parquet 是列式存储格式，压缩率高，适合大数据分析查询。"
        },
        {
            id: "pulsar-w15-3-q12",
            question: "如何查看 Sink Connector 的状态？",
            options: [
                "查看日志",
                "使用 pulsar-admin sinks status 命令",
                "重启 Connector",
                "查看配置"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin sinks status 命令查看 Sink Connector 运行状态和指标。"
        }
    ]
}
