import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "pulsar-w11-1": {
        lessonId: "pulsar-w11-1",
        background: [
            "【分层存储定义】官方文档：Tiered Storage 允许将旧消息从 BookKeeper 卸载（offload）到更便宜的存储系统，同时保持消费者透明访问。",
            "【Offloader 组件】Offloader 是执行卸载操作的组件，负责将 Ledger 段从 BookKeeper 复制到对象存储。Pulsar 内置多种 Offloader 实现。",
            "【支持的存储后端】官方文档：支持 Amazon S3（及兼容存储）、Google Cloud Storage、Azure Blob Storage、Aliyun OSS、HDFS 等。",
            "【透明读取机制】卸载后消费者无需感知数据位置，Broker 自动处理。读取时如果数据在对象存储，会从对象存储读取并缓存。",
            "【Segment 级别卸载】卸载以 Segment（Ledger）为单位，只有已关闭的 Segment 才能卸载。正在写入的 Segment 保留在 BookKeeper。"
        ],
        keyDifficulties: [
            "【卸载时机选择】过早卸载会增加读取延迟（对象存储比 BookKeeper 慢），过晚卸载无法及时节省成本。需要根据访问模式选择。",
            "【冷热数据识别】热数据（最近的消息）应保留在 BookKeeper，冷数据（很少访问的历史消息）应卸载。通常基于时间或大小触发。",
            "【读取性能影响】从对象存储读取的延迟比 BookKeeper 高（通常高一个数量级），需要评估对业务的影响。",
            "【卸载不可逆】卸载后数据从 BookKeeper 删除，只存在于对象存储。无法将数据从对象存储移回 BookKeeper。"
        ],
        handsOnPath: [
            "阅读 Pulsar 分层存储架构文档，理解 Offloader 的工作流程。",
            "估算你的 Topic 数据量和访问模式，评估分层存储的收益。",
            "研究不同对象存储的价格，计算使用分层存储的成本节省。",
            "测试从对象存储读取消息的延迟，与 BookKeeper 对比。"
        ],
        selfCheck: [
            "分层存储的主要目的是什么？它如何帮助降低成本？",
            "Offloader 是什么？它的工作流程是怎样的？",
            "Pulsar 支持哪些对象存储作为分层存储后端？",
            "为什么消费者可以透明访问已卸载的数据？",
            "什么数据适合卸载到分层存储？什么数据应该保留在 BookKeeper？"
        ],
        extensions: [
            "研究 Pulsar 分层存储的数据格式，了解卸载后的数据如何组织。",
            "探索分层存储的元数据管理，了解 Broker 如何知道数据位置。",
            "学习如何估算分层存储的成本节省。",
            "研究其他消息系统的分层存储实现（如 Kafka Tiered Storage）对比。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/tiered-storage-overview/",
            "https://pulsar.apache.org/docs/tiered-storage-overview/#when-to-use-tiered-storage"
        ]
    },
    "pulsar-w11-2": {
        lessonId: "pulsar-w11-2",
        background: [
            "【Offloader 配置】配置分层存储需要指定 Offloader driver（如 aws-s3）、存储 bucket、认证信息、区域等参数。",
            "【S3 配置示例】配置 S3 需要：managedLedgerOffloadDriver=aws-s3、s3ManagedLedgerOffloadBucket、s3ManagedLedgerOffloadRegion、认证凭证。",
            "【触发策略配置】可以配置自动卸载触发条件：managedLedgerOffloadAutoTriggerSizeThresholdBytes（大小触发）或基于时间的策略。",
            "【Namespace 级别配置】可以在 Namespace 级别设置卸载策略，使用 pulsar-admin namespaces set-offload-policies。",
            "【手动触发卸载】可以使用 pulsar-admin topics offload 手动触发特定 Topic 的卸载操作。"
        ],
        keyDifficulties: [
            "【认证配置】对象存储认证可以使用 IAM Role（推荐）或 Access Key。IAM Role 更安全，无需在配置中暴露密钥。",
            "【多 Offloader 配置】一个集群可以配置多个 Offloader，不同 Namespace 使用不同的存储后端。需要正确管理配置。",
            "【卸载并发控制】managedLedgerOffloadMaxThreads 控制卸载并发度。过高会影响正常业务，过低会卸载缓慢。",
            "【网络配置】Broker 需要能够访问对象存储的网络。私有云环境可能需要配置 VPC Endpoint 或代理。"
        ],
        handsOnPath: [
            "配置 S3 作为分层存储后端，包括 bucket、region、认证信息。",
            "在 Namespace 上配置自动卸载策略：超过 10GB 或 7 天后自动卸载。",
            "使用 pulsar-admin topics offload 手动触发 Topic 卸载，观察进度。",
            "检查 S3 bucket，验证卸载的数据结构。"
        ],
        selfCheck: [
            "配置 S3 分层存储需要哪些参数？",
            "如何配置自动卸载触发条件？有哪些触发方式？",
            "如何在 Namespace 级别配置卸载策略？",
            "IAM Role 认证相比 Access Key 有什么优势？",
            "如何手动触发 Topic 卸载？"
        ],
        extensions: [
            "研究 GCS 和 Azure Blob 的配置差异。",
            "探索使用 MinIO 等 S3 兼容存储的配置。",
            "学习如何配置 HDFS 作为分层存储后端。",
            "研究 Offloader 的性能调优参数。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/tiered-storage-aws/",
            "https://pulsar.apache.org/docs/tiered-storage-gcs/",
            "https://pulsar.apache.org/docs/tiered-storage-azure/"
        ]
    },
    "pulsar-w11-3": {
        lessonId: "pulsar-w11-3",
        background: [
            "【卸载时机策略】常见策略：基于时间（如 7 天后卸载）、基于大小（如超过 10GB 卸载）、基于两者组合。",
            "【保留策略配合】分层存储需要与消息保留策略配合。保留策略决定消息保留多久，分层存储决定保留期间数据存储在哪里。",
            "【读取缓存优化】Broker 会缓存从对象存储读取的数据，减少重复读取。可以调整缓存大小优化性能。",
            "【监控指标】关键监控指标：卸载进度、卸载延迟、对象存储读取延迟、存储成本节省。",
            "【成本优化策略】根据数据访问频率分层：热数据保留在 BookKeeper，温数据使用标准对象存储，冷数据使用归档存储（如 S3 Glacier）。"
        ],
        keyDifficulties: [
            "【延迟敏感场景】如果业务需要频繁回溯历史数据，分层存储可能不适合。需要评估读取延迟对业务的影响。",
            "【存储类型选择】对象存储有多种类型（Standard、IA、Glacier 等），各有不同的价格和访问延迟。需要根据访问模式选择。",
            "【数据生命周期管理】需要综合考虑：消息保留时间、卸载时机、对象存储生命周期策略（如自动迁移到归档存储）。",
            "【故障恢复】如果对象存储不可用，已卸载的数据无法读取。需要确保对象存储的高可用性。"
        ],
        handsOnPath: [
            "设计一个数据生命周期策略：定义热/温/冷数据的边界和存储位置。",
            "配置对象存储的生命周期策略，自动将旧数据迁移到更便宜的存储类型。",
            "设置分层存储相关的监控告警：卸载失败、读取延迟过高等。",
            "进行成本分析：计算使用分层存储前后的存储成本差异。"
        ],
        selfCheck: [
            "如何选择合适的卸载时机？需要考虑哪些因素？",
            "消息保留策略和分层存储策略如何配合？",
            "分层存储有哪些关键监控指标？",
            "如何优化从对象存储读取的性能？",
            "什么场景不适合使用分层存储？"
        ],
        extensions: [
            "研究对象存储的生命周期策略配置。",
            "探索 Pulsar 的存储配额管理与分层存储的结合。",
            "学习如何计算分层存储的 TCO（总体拥有成本）。",
            "研究数据合规要求对分层存储配置的影响。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/tiered-storage-overview/#best-practices",
            "https://pulsar.apache.org/docs/cookbooks-retention-expiry/"
        ]
    }
}

export const week11Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w11-1": [
        {
            id: "pulsar-w11-1-q1",
            question: "分层存储的主要目的是什么？",
            options: [
                "提高读取速度",
                "将旧消息卸载到更便宜的存储，降低成本",
                "提高消息可靠性",
                "加速消息复制"
            ],
            answer: 1,
            rationale: "分层存储允许将旧消息从 BookKeeper 卸载到更便宜的对象存储，降低长期存储成本。"
        },
        {
            id: "pulsar-w11-1-q2",
            question: "Offloader 的作用是什么？",
            options: [
                "压缩消息",
                "将 Ledger 段从 BookKeeper 复制到对象存储",
                "路由消息",
                "加密消息"
            ],
            answer: 1,
            rationale: "Offloader 是执行卸载操作的组件，负责将 Ledger 段从 BookKeeper 复制到对象存储。"
        },
        {
            id: "pulsar-w11-1-q3",
            question: "Pulsar 分层存储支持哪些存储后端？",
            options: [
                "只支持 S3",
                "S3、GCS、Azure Blob、HDFS 等",
                "只支持本地磁盘",
                "只支持 HDFS"
            ],
            answer: 1,
            rationale: "Pulsar 支持 Amazon S3、Google Cloud Storage、Azure Blob Storage、HDFS 等多种存储后端。"
        },
        {
            id: "pulsar-w11-1-q4",
            question: "消费者访问已卸载数据时需要特殊处理吗？",
            options: [
                "需要指定数据位置",
                "不需要，Broker 自动处理（透明访问）",
                "需要使用不同的 API",
                "无法访问已卸载数据"
            ],
            answer: 1,
            rationale: "消费者无需感知数据位置，Broker 自动处理。读取已卸载数据时会从对象存储读取。"
        },
        {
            id: "pulsar-w11-1-q5",
            question: "分层存储以什么单位进行卸载？",
            options: [
                "单条消息",
                "Segment（Ledger）",
                "整个 Topic",
                "整个 Namespace"
            ],
            answer: 1,
            rationale: "卸载以 Segment（Ledger）为单位，只有已关闭的 Segment 才能卸载。"
        },
        {
            id: "pulsar-w11-1-q6",
            question: "什么数据适合卸载到分层存储？",
            options: [
                "所有数据",
                "冷数据（很少访问的历史消息）",
                "热数据（最新消息）",
                "正在写入的数据"
            ],
            answer: 1,
            rationale: "冷数据（很少访问的历史消息）适合卸载，热数据应保留在 BookKeeper。"
        },
        {
            id: "pulsar-w11-1-q7",
            question: "从对象存储读取的延迟与 BookKeeper 相比如何？",
            options: [
                "更低",
                "相同",
                "通常更高（高一个数量级）",
                "不确定"
            ],
            answer: 2,
            rationale: "从对象存储读取的延迟比 BookKeeper 高，通常高一个数量级。"
        },
        {
            id: "pulsar-w11-1-q8",
            question: "卸载操作是否可逆？",
            options: [
                "可以，随时可以移回 BookKeeper",
                "不可逆，数据从 BookKeeper 删除后只存在于对象存储",
                "部分可逆",
                "取决于配置"
            ],
            answer: 1,
            rationale: "卸载后数据从 BookKeeper 删除，只存在于对象存储。无法将数据从对象存储移回 BookKeeper。"
        },
        {
            id: "pulsar-w11-1-q9",
            question: "正在写入的 Segment 可以卸载吗？",
            options: [
                "可以",
                "不可以，只有已关闭的 Segment 才能卸载",
                "取决于配置",
                "需要手动触发"
            ],
            answer: 1,
            rationale: "只有已关闭的 Segment 才能卸载，正在写入的 Segment 保留在 BookKeeper。"
        },
        {
            id: "pulsar-w11-1-q10",
            question: "过早卸载数据有什么影响？",
            options: [
                "节省更多成本",
                "增加读取延迟（对象存储比 BookKeeper 慢）",
                "无影响",
                "提高可靠性"
            ],
            answer: 1,
            rationale: "过早卸载会增加读取延迟，因为对象存储比 BookKeeper 慢。需要根据访问模式选择卸载时机。"
        },
        {
            id: "pulsar-w11-1-q11",
            question: "分层存储的触发方式有哪些？",
            options: [
                "只能手动触发",
                "基于时间、基于大小、或手动触发",
                "只能基于时间",
                "只能基于大小"
            ],
            answer: 1,
            rationale: "分层存储可以基于时间、基于大小自动触发，也可以手动触发。"
        },
        {
            id: "pulsar-w11-1-q12",
            question: "Broker 如何知道数据在 BookKeeper 还是对象存储？",
            options: [
                "查询所有存储",
                "通过元数据管理记录数据位置",
                "随机选择",
                "由 Consumer 指定"
            ],
            answer: 1,
            rationale: "Broker 通过元数据管理记录每个 Segment 的位置，自动路由读取请求。"
        }
    ],
    "pulsar-w11-2": [
        {
            id: "pulsar-w11-2-q1",
            question: "配置 S3 分层存储需要指定哪些参数？",
            options: [
                "只需要 bucket 名称",
                "Offloader driver、bucket、region、认证信息等",
                "只需要 Access Key",
                "只需要 region"
            ],
            answer: 1,
            rationale: "配置 S3 需要指定 Offloader driver、bucket、region、认证凭证等多个参数。"
        },
        {
            id: "pulsar-w11-2-q2",
            question: "推荐使用什么方式配置对象存储认证？",
            options: [
                "Access Key",
                "IAM Role",
                "匿名访问",
                "用户名密码"
            ],
            answer: 1,
            rationale: "推荐使用 IAM Role 认证，更安全，无需在配置中暴露密钥。"
        },
        {
            id: "pulsar-w11-2-q3",
            question: "如何在 Namespace 级别配置卸载策略？",
            options: [
                "修改 broker.conf",
                "pulsar-admin namespaces set-offload-policies",
                "pulsar-admin topics create",
                "直接修改 ZooKeeper"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin namespaces set-offload-policies 在 Namespace 级别配置卸载策略。"
        },
        {
            id: "pulsar-w11-2-q4",
            question: "如何手动触发 Topic 卸载？",
            options: [
                "重启 Broker",
                "pulsar-admin topics offload",
                "修改配置文件",
                "删除数据"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin topics offload 可以手动触发特定 Topic 的卸载操作。"
        },
        {
            id: "pulsar-w11-2-q5",
            question: "managedLedgerOffloadAutoTriggerSizeThresholdBytes 配置的作用是什么？",
            options: [
                "限制消息大小",
                "配置基于大小的自动卸载触发条件",
                "限制 Broker 内存",
                "配置压缩级别"
            ],
            answer: 1,
            rationale: "该配置指定当 Topic 数据超过指定大小时自动触发卸载。"
        },
        {
            id: "pulsar-w11-2-q6",
            question: "managedLedgerOffloadMaxThreads 配置的作用是什么？",
            options: [
                "限制读取线程",
                "控制卸载并发度",
                "限制消费者线程",
                "控制压缩线程"
            ],
            answer: 1,
            rationale: "该配置控制卸载的并发度，过高会影响正常业务，过低会卸载缓慢。"
        },
        {
            id: "pulsar-w11-2-q7",
            question: "私有云环境访问对象存储可能需要什么配置？",
            options: [
                "无需特殊配置",
                "VPC Endpoint 或代理",
                "只能使用公网",
                "禁用分层存储"
            ],
            answer: 1,
            rationale: "私有云环境可能需要配置 VPC Endpoint 或代理来访问对象存储。"
        },
        {
            id: "pulsar-w11-2-q8",
            question: "一个集群可以配置多个 Offloader 吗？",
            options: [
                "不可以",
                "可以，不同 Namespace 可使用不同存储后端",
                "只能使用一个",
                "需要部署多个集群"
            ],
            answer: 1,
            rationale: "一个集群可以配置多个 Offloader，不同 Namespace 使用不同的存储后端。"
        },
        {
            id: "pulsar-w11-2-q9",
            question: "S3 配置中 s3ManagedLedgerOffloadBucket 指定什么？",
            options: [
                "区域",
                "存储卸载数据的 bucket 名称",
                "认证密钥",
                "文件格式"
            ],
            answer: 1,
            rationale: "s3ManagedLedgerOffloadBucket 指定存储卸载数据的 S3 bucket 名称。"
        },
        {
            id: "pulsar-w11-2-q10",
            question: "配置卸载策略时可以使用哪些触发条件？",
            options: [
                "只能基于时间",
                "基于大小、基于时间、或两者组合",
                "只能基于大小",
                "只能手动触发"
            ],
            answer: 1,
            rationale: "可以配置基于大小、基于时间或两者组合的自动卸载触发条件。"
        },
        {
            id: "pulsar-w11-2-q11",
            question: "使用 S3 兼容存储（如 MinIO）需要什么额外配置？",
            options: [
                "无需额外配置",
                "配置 endpoint URL",
                "必须使用 AWS",
                "禁用 SSL"
            ],
            answer: 1,
            rationale: "使用 S3 兼容存储需要配置 endpoint URL 指向 MinIO 等存储的地址。"
        },
        {
            id: "pulsar-w11-2-q12",
            question: "managedLedgerOffloadDriver 配置什么？",
            options: [
                "压缩算法",
                "Offloader 驱动类型（如 aws-s3）",
                "认证方式",
                "网络协议"
            ],
            answer: 1,
            rationale: "managedLedgerOffloadDriver 指定 Offloader 驱动类型，如 aws-s3、google-cloud-storage 等。"
        }
    ],
    "pulsar-w11-3": [
        {
            id: "pulsar-w11-3-q1",
            question: "常见的卸载时机策略有哪些？",
            options: [
                "只有手动触发",
                "基于时间、基于大小、或两者组合",
                "只有基于时间",
                "随机触发"
            ],
            answer: 1,
            rationale: "常见策略包括基于时间（如 7 天后卸载）、基于大小（如超过 10GB）、或两者组合。"
        },
        {
            id: "pulsar-w11-3-q2",
            question: "分层存储和消息保留策略是什么关系？",
            options: [
                "完全独立",
                "保留策略决定保留多久，分层存储决定数据存储位置",
                "两者相同",
                "互斥"
            ],
            answer: 1,
            rationale: "保留策略决定消息保留多久，分层存储决定保留期间数据存储在哪里（BookKeeper 还是对象存储）。"
        },
        {
            id: "pulsar-w11-3-q3",
            question: "如何优化从对象存储读取的性能？",
            options: [
                "禁用分层存储",
                "Broker 缓存从对象存储读取的数据",
                "增加网络带宽",
                "使用更快的对象存储"
            ],
            answer: 1,
            rationale: "Broker 会缓存从对象存储读取的数据，减少重复读取，可以调整缓存大小优化性能。"
        },
        {
            id: "pulsar-w11-3-q4",
            question: "分层存储的关键监控指标有哪些？",
            options: [
                "只有存储大小",
                "卸载进度、卸载延迟、对象存储读取延迟、成本节省",
                "只有 CPU 使用率",
                "只有网络流量"
            ],
            answer: 1,
            rationale: "关键监控指标包括卸载进度、卸载延迟、对象存储读取延迟、存储成本节省等。"
        },
        {
            id: "pulsar-w11-3-q5",
            question: "什么场景不适合使用分层存储？",
            options: [
                "长期存储场景",
                "频繁回溯历史数据且对延迟敏感的场景",
                "成本敏感场景",
                "大数据量场景"
            ],
            answer: 1,
            rationale: "如果业务需要频繁回溯历史数据且对延迟敏感，分层存储可能不适合。"
        },
        {
            id: "pulsar-w11-3-q6",
            question: "对象存储有哪些不同的存储类型？",
            options: [
                "只有一种",
                "Standard、IA（不频繁访问）、Glacier（归档）等",
                "只有 Standard",
                "只有 Glacier"
            ],
            answer: 1,
            rationale: "对象存储有多种类型如 Standard、IA、Glacier 等，各有不同的价格和访问延迟。"
        },
        {
            id: "pulsar-w11-3-q7",
            question: "如何实现数据的多层次分层？",
            options: [
                "不支持",
                "结合对象存储的生命周期策略，自动迁移到更便宜的存储类型",
                "手动迁移",
                "创建多个 Topic"
            ],
            answer: 1,
            rationale: "可以利用对象存储的生命周期策略，自动将旧数据迁移到更便宜的存储类型（如从 Standard 到 Glacier）。"
        },
        {
            id: "pulsar-w11-3-q8",
            question: "如果对象存储不可用，已卸载的数据会怎样？",
            options: [
                "自动恢复",
                "无法读取",
                "从 BookKeeper 读取",
                "数据丢失"
            ],
            answer: 1,
            rationale: "如果对象存储不可用，已卸载的数据无法读取。需要确保对象存储的高可用性。"
        },
        {
            id: "pulsar-w11-3-q9",
            question: "数据生命周期管理需要考虑哪些因素？",
            options: [
                "只考虑成本",
                "消息保留时间、卸载时机、对象存储生命周期策略",
                "只考虑性能",
                "只考虑可靠性"
            ],
            answer: 1,
            rationale: "需要综合考虑消息保留时间、卸载时机、对象存储生命周期策略等因素。"
        },
        {
            id: "pulsar-w11-3-q10",
            question: "如何计算分层存储的成本节省？",
            options: [
                "无法计算",
                "对比 BookKeeper 存储成本与对象存储成本",
                "只看存储大小",
                "只看网络流量"
            ],
            answer: 1,
            rationale: "通过对比将数据存储在 BookKeeper 与对象存储的成本差异来计算节省。"
        },
        {
            id: "pulsar-w11-3-q11",
            question: "热数据应该存储在哪里？",
            options: [
                "对象存储",
                "BookKeeper（快速访问）",
                "归档存储",
                "不存储"
            ],
            answer: 1,
            rationale: "热数据（最近的、频繁访问的消息）应保留在 BookKeeper，以获得更低的访问延迟。"
        },
        {
            id: "pulsar-w11-3-q12",
            question: "数据合规要求可能对分层存储有什么影响？",
            options: [
                "无影响",
                "可能限制数据存储位置、保留时间等",
                "禁止使用分层存储",
                "强制使用分层存储"
            ],
            answer: 1,
            rationale: "数据合规要求可能限制数据存储的地理位置、保留时间等，需要在配置时考虑。"
        }
    ]
}
