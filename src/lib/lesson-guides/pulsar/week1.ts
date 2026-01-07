import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "pulsar-w1-1": {
        lessonId: "pulsar-w1-1",
        background: [
            "【核心定位】Apache Pulsar 官方定义为'multi-tenant, high-performance server-to-server messaging solution'——多租户、高性能的服务器间消息传递解决方案，由 Yahoo 开发并捐赠给 Apache 软件基金会。",
            "【云原生架构】Pulsar 原生支持多集群部署，具备'seamless geo-replication of messages across multiple clusters'——跨集群无缝地理复制能力，这是 Kafka 需要额外组件才能实现的功能。",
            "【超大规模支持】官方文档强调 Pulsar 可'seamlessly scale to over a million topics'——无缝扩展至超过一百万个主题，这得益于其计算存储分离的架构设计。",
            "【多语言支持】提供简洁统一的 API，支持 Java、Go、Python、C++ 等多种语言客户端绑定，降低了不同技术栈团队的接入成本。",
            "【统一消息模型】Pulsar 同时支持队列语义（Shared 订阅）和流语义（Exclusive/Failover 订阅），一个系统满足两种消息模式需求。"
        ],
        keyDifficulties: [
            "【与 Kafka 的本质区别】Kafka 将计算和存储紧耦合在 Broker 中，而 Pulsar 的 Broker 是无状态的，存储由独立的 BookKeeper 集群负责——这是理解 Pulsar 架构优势的关键。",
            "【多租户原生支持】Pulsar 内置 Tenant → Namespace → Topic 的层级结构实现资源隔离，Kafka 需要额外方案才能实现多租户，这对 SaaS 场景至关重要。",
            "【四种订阅类型】Pulsar 提供 Exclusive、Shared、Failover、Key_Shared 四种订阅模式，比 Kafka 的消费者组模型更灵活，但也需要理解各模式的适用场景。",
            "【分层存储优势】Pulsar 原生支持将冷数据自动卸载到对象存储（S3/GCS/Azure），Kafka 通过 Tiered Storage 后来才支持类似功能。"
        ],
        handsOnPath: [
            "访问 Apache Pulsar 官网，阅读 Concepts Overview 文档，理解 Pulsar 的核心概念和设计理念。",
            "对比 Kafka 和 Pulsar 的架构图，识别出计算存储分离的关键差异。",
            "列出你当前项目中的消息队列使用场景，评估 Pulsar 的四种订阅类型哪种最适合。",
            "思考多租户隔离的需求：如果需要为不同团队或客户提供独立的消息通道，Pulsar 的 Tenant/Namespace 如何帮助实现？"
        ],
        selfCheck: [
            "Pulsar 官方对自身的核心定位是什么？它解决什么问题？",
            "Pulsar 相比 Kafka 在架构上的最大区别是什么？这带来了哪些优势？",
            "为什么 Pulsar 可以无缝扩展到一百万个 Topic？这与 Kafka 的扩展性有何不同？",
            "Pulsar 的四种订阅类型各自适用于什么场景？",
            "什么是分层存储？Pulsar 如何利用它降低存储成本？"
        ],
        extensions: [
            "研究 StreamNative 公司（Pulsar 核心维护者）的商业化方案，了解 Pulsar 在企业场景的应用。",
            "阅读 Pulsar vs Kafka 的性能对比测试报告，了解不同场景下的性能表现。",
            "探索 Pulsar 的 Schema Registry，了解如何实现消息结构的版本管理。",
            "学习 Pulsar Functions，了解内置的轻量级流处理能力。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-overview/",
            "https://pulsar.apache.org/docs/concepts-messaging/"
        ]
    },
    "pulsar-w1-2": {
        lessonId: "pulsar-w1-2",
        background: [
            "【三层核心架构】Pulsar 架构由三个核心组件构成：Broker（消息代理）、BookKeeper（持久化存储）、ZooKeeper（元数据协调）。这种分层设计是 Pulsar 区别于 Kafka 的根本。",
            "【Broker 无状态特性】官方文档：Broker 是无状态组件，运行 HTTP 服务器提供 REST API 用于管理任务和主题查询，同时管理异步 TCP 服务器'for all data transfers'处理所有数据传输。",
            "【BookKeeper 存储层】BookKeeper 是分布式预写日志系统，提供多个独立日志（Ledger）能力，'high efficient storage for sequential data and handles entry replication'——高效存储顺序数据并处理条目复制。",
            "【ZooKeeper 协调层】Pulsar 使用 ZooKeeper 实现两层协调：配置存储（跨集群存储租户、命名空间等全局配置）和集群本地存储（管理 Broker 拓扑、所有权元数据、负载报告和 Ledger 元数据）。",
            "【可选 Proxy 层】Pulsar 的 Proxy 层提供'single gateway'功能，使客户端能够通过统一入口访问整个集群，简化客户端配置和网络拓扑。"
        ],
        keyDifficulties: [
            "【Broker 缓存机制】Broker 从托管 Ledger 缓存分发消息，当积压超过缓存大小时才从 BookKeeper 读取数据——理解这个缓存机制对性能调优至关重要。",
            "【故障一致性保证】BookKeeper 在故障情况下提供读一致性保证，自动分发 I/O 负载，支持水平扩展容量和吞吐量。",
            "【ZooKeeper 依赖问题】当前 Pulsar 强依赖 ZooKeeper，社区正在推进 ZooKeeper 可选化工作，未来可能使用其他元数据存储。",
            "【Broker 无状态的意义】因为 Broker 不存储数据，可以快速扩缩容和故障恢复——新 Broker 加入后立即可以服务，无需数据迁移。"
        ],
        handsOnPath: [
            "绘制 Pulsar 架构图，标注 Broker、BookKeeper、ZooKeeper 的职责和交互关系。",
            "使用 Docker Compose 启动单节点 Pulsar（Standalone 模式），通过 pulsar-admin 命令观察集群状态。",
            "检查 Pulsar 进程，理解 Standalone 模式如何在单进程中包含所有组件。",
            "查看 Pulsar 的 REST API 文档，尝试使用 curl 调用管理接口获取 Topic 列表。"
        ],
        selfCheck: [
            "Pulsar 的三个核心组件各自的职责是什么？它们如何协作？",
            "为什么说 Broker 是无状态的？这带来了什么优势？",
            "BookKeeper 的 Ledger 是什么？它与 Topic 的关系是什么？",
            "ZooKeeper 在 Pulsar 中存储了哪两类数据？",
            "如果一个 Broker 挂了，消息会丢失吗？为什么？"
        ],
        extensions: [
            "深入学习 Apache BookKeeper 项目，理解 Ledger、Bookie、Entry 等核心概念。",
            "研究 Pulsar 的 Managed Ledger 抽象，了解 Broker 如何管理 Topic 对应的 Ledger。",
            "了解 Pulsar 的负载均衡机制，Broker 如何分配 Topic 的所有权。",
            "探索 Pulsar 的可插拔元数据存储方案，了解 ZooKeeper 替代方案的进展。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-architecture-overview/",
            "https://pulsar.apache.org/docs/concepts-architecture-overview/#apache-bookkeeper"
        ]
    },
    "pulsar-w1-3": {
        lessonId: "pulsar-w1-3",
        background: [
            "【计算存储分离核心】Pulsar 将消息处理（Broker）和存储（BookKeeper）分离，Broker 只负责消息路由和协议处理，BookKeeper 专注于持久化存储——这是 Pulsar 架构的核心创新。",
            "【Segment 存储架构】Pulsar 官方文档：系统自动将日志分段（Segment），只向最后一个段写入数据，之前的段被封存且不可变。这种设计支持细粒度的存储管理。",
            "【分层存储触发】当触发卸载操作时，'segments are copied one-by-one to tiered storage'——段一个接一个地复制到分层存储中，消费者可透明访问这些数据。",
            "【多种存储后端】支持 Amazon S3、Google Cloud Storage、Azure Blob、Aliyun OSS（通过 Apache jclouds）以及 Apache Hadoop 文件系统作为分层存储后端。",
            "【透明数据检索】消费者无需知道数据存储在 BookKeeper 还是对象存储，Pulsar 自动处理数据位置路由，实现透明的数据检索。"
        ],
        keyDifficulties: [
            "【Broker 扩展性】因为 Broker 无状态，可以快速增加或减少 Broker 节点，新节点立即可以服务——不需要等待数据重平衡。",
            "【BookKeeper 独立扩展】存储层可以独立于计算层扩展。当存储容量不足时，只需添加 Bookie 节点，数据会自动均衡——无需停止服务。",
            "【故障恢复简化】Broker 故障时，Topic 所有权可以快速转移到其他 Broker，因为数据在 BookKeeper 中，无需数据迁移。",
            "【成本优化场景】分层存储的典型场景：需要长期保留大量回溯数据的 Topic。例如保存用户行为数据用于训练推荐系统，便于算法更新时重新处理历史数据。"
        ],
        handsOnPath: [
            "对比 Kafka 和 Pulsar 的扩容流程，理解计算存储分离带来的运维便利。",
            "在 Pulsar Standalone 中创建 Topic，发送大量消息，观察 Ledger 的切换（通过 pulsar-admin topics stats）。",
            "研究 Pulsar 的分层存储配置文档，了解如何配置 S3 作为存储后端。",
            "思考你的业务场景：哪些 Topic 需要长期保留数据？分层存储能节省多少成本？"
        ],
        selfCheck: [
            "计算存储分离对 Broker 扩缩容有什么影响？为什么说 Broker 可以快速扩容？",
            "Segment（段）在 Pulsar 存储中的作用是什么？为什么之前的段是不可变的？",
            "分层存储如何帮助降低存储成本？数据卸载后消费者的访问体验如何？",
            "BookKeeper 独立扩展意味着什么？添加 Bookie 节点后需要手动迁移数据吗？",
            "如果 Broker 突然宕机，正在处理的 Topic 会发生什么？"
        ],
        extensions: [
            "研究 Kafka Tiered Storage（KIP-405）方案，对比与 Pulsar 分层存储的实现差异。",
            "学习 BookKeeper 的数据复制和一致性机制，理解 Write Quorum 和 Ack Quorum 的概念。",
            "探索 Pulsar 的 Segment Centric 存储设计，了解如何利用段的不可变性优化读取和缓存。",
            "研究 Pulsar 在 Kubernetes 上的部署方案，了解如何利用 K8s 实现弹性扩缩容。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/tiered-storage-overview/",
            "https://pulsar.apache.org/docs/concepts-architecture-overview/#persistent-storage"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w1-1": [
        {
            id: "pulsar-w1-1-q1",
            question: "Apache Pulsar 官方对自身的核心定位描述是什么？",
            options: [
                "分布式日志存储系统",
                "multi-tenant, high-performance server-to-server messaging solution",
                "云原生容器编排平台",
                "分布式数据库中间件"
            ],
            answer: 1,
            rationale: "Pulsar 官方文档明确定义为'multi-tenant, high-performance server-to-server messaging solution'——多租户、高性能的服务器间消息传递解决方案。"
        },
        {
            id: "pulsar-w1-1-q2",
            question: "Pulsar 在扩展性方面的官方描述是什么？",
            options: [
                "最多支持 1000 个 Topic",
                "seamlessly scale to over a million topics",
                "需要分片才能扩展",
                "扩展时需要停机"
            ],
            answer: 1,
            rationale: "官方文档强调 Pulsar 可'seamlessly scale to over a million topics'——无缝扩展至超过一百万个主题。"
        },
        {
            id: "pulsar-w1-1-q3",
            question: "Pulsar 相比 Kafka 在多租户支持上的主要优势是什么？",
            options: [
                "两者多租户能力相同",
                "Pulsar 原生支持 Tenant → Namespace → Topic 层级隔离",
                "Kafka 的多租户更完善",
                "Pulsar 不支持多租户"
            ],
            answer: 1,
            rationale: "Pulsar 内置多租户支持，通过 Tenant → Namespace → Topic 的层级结构实现资源隔离，这是 Kafka 需要额外方案才能实现的功能。"
        },
        {
            id: "pulsar-w1-1-q4",
            question: "Pulsar 官方文档提到支持哪些客户端语言？",
            options: [
                "仅支持 Java",
                "Java 和 Python",
                "Java、Go、Python、C++ 等多种语言",
                "仅支持 Go"
            ],
            answer: 2,
            rationale: "官方文档明确提到 Pulsar 提供简洁统一的 API，支持 Java、Go、Python、C++ 等多种语言客户端绑定。"
        },
        {
            id: "pulsar-w1-1-q5",
            question: "Pulsar 的地理复制能力在官方文档中如何描述？",
            options: [
                "不支持跨集群复制",
                "seamless geo-replication of messages across multiple clusters",
                "需要第三方工具实现",
                "只支持单向复制"
            ],
            answer: 1,
            rationale: "官方文档明确 Pulsar 原生支持'seamless geo-replication of messages across multiple clusters'——跨集群无缝地理复制。"
        },
        {
            id: "pulsar-w1-1-q6",
            question: "Pulsar 与 Kafka 在架构上的根本区别是什么？",
            options: [
                "Pulsar 使用 ZooKeeper，Kafka 不使用",
                "Pulsar 计算存储分离（Broker 无状态），Kafka 计算存储紧耦合",
                "Pulsar 不支持持久化",
                "两者架构完全相同"
            ],
            answer: 1,
            rationale: "Kafka 将计算和存储紧耦合在 Broker 中，而 Pulsar 的 Broker 是无状态的，存储由独立的 BookKeeper 集群负责。"
        },
        {
            id: "pulsar-w1-1-q7",
            question: "Pulsar 支持几种订阅类型？",
            options: [
                "只有 1 种：Consumer Group",
                "2 种：Exclusive 和 Shared",
                "3 种：Exclusive、Shared、Failover",
                "4 种：Exclusive、Shared、Failover、Key_Shared"
            ],
            answer: 3,
            rationale: "Pulsar 提供 4 种订阅类型：Exclusive（独占）、Shared（共享）、Failover（故障转移）、Key_Shared（按 Key 共享）。"
        },
        {
            id: "pulsar-w1-1-q8",
            question: "Pulsar 的分层存储可以将冷数据卸载到哪些存储？",
            options: [
                "仅支持本地磁盘",
                "仅支持 HDFS",
                "S3/GCS/Azure 等对象存储",
                "仅支持 NFS"
            ],
            answer: 2,
            rationale: "Pulsar 原生支持将冷数据自动卸载到对象存储，包括 Amazon S3、Google Cloud Storage、Azure Blob 等。"
        },
        {
            id: "pulsar-w1-1-q9",
            question: "Pulsar 的统一消息模型意味着什么？",
            options: [
                "只支持点对点模式",
                "只支持发布订阅模式",
                "同时支持队列语义（Shared）和流语义（Exclusive/Failover）",
                "不支持任何消息模式"
            ],
            answer: 2,
            rationale: "Pulsar 通过不同的订阅类型，同时支持队列语义（Shared 订阅实现负载均衡）和流语义（Exclusive/Failover 保证顺序），一个系统满足两种需求。"
        },
        {
            id: "pulsar-w1-1-q10",
            question: "Apache Pulsar 最初由哪家公司开发？",
            options: [
                "Google",
                "Facebook",
                "Yahoo",
                "LinkedIn"
            ],
            answer: 2,
            rationale: "Apache Pulsar 由 Yahoo 开发，后捐赠给 Apache 软件基金会成为顶级项目。"
        },
        {
            id: "pulsar-w1-1-q11",
            question: "Pulsar 官方文档强调的消息发布延迟特性是什么？",
            options: [
                "高延迟高吞吐",
                "very low publish latency and end-to-end latency",
                "延迟不可预测",
                "只优化吞吐量"
            ],
            answer: 1,
            rationale: "官方文档强调 Pulsar 具有'very low publish latency and end-to-end latency'——极低的发布延迟和端到端延迟。"
        },
        {
            id: "pulsar-w1-1-q12",
            question: "Pulsar 的 Pulsar Functions 提供什么能力？",
            options: [
                "数据库查询功能",
                "Serverless 计算能力进行流数据处理",
                "文件存储功能",
                "网络代理功能"
            ],
            answer: 1,
            rationale: "Pulsar Functions 提供无服务器（Serverless）计算能力，用于进行流数据处理，无需部署独立的流处理集群。"
        }
    ],
    "pulsar-w1-2": [
        {
            id: "pulsar-w1-2-q1",
            question: "Pulsar 架构的三个核心组件是什么？",
            options: [
                "Producer、Consumer、Topic",
                "Broker、BookKeeper、ZooKeeper",
                "Master、Slave、Proxy",
                "Controller、Worker、Storage"
            ],
            answer: 1,
            rationale: "Pulsar 架构由三个核心组件构成：Broker（消息代理）、BookKeeper（持久化存储）、ZooKeeper（元数据协调）。"
        },
        {
            id: "pulsar-w1-2-q2",
            question: "官方文档对 Broker 数据传输职责的描述是什么？",
            options: [
                "Broker 负责持久化存储",
                "管理异步 TCP 服务器 'for all data transfers'",
                "Broker 只处理 HTTP 请求",
                "Broker 负责元数据管理"
            ],
            answer: 1,
            rationale: "官方文档指出 Broker 管理异步 TCP 服务器'for all data transfers'——处理所有数据传输。"
        },
        {
            id: "pulsar-w1-2-q3",
            question: "BookKeeper 在 Pulsar 中的核心职责是什么？",
            options: [
                "管理 Topic 元数据",
                "high efficient storage for sequential data and handles entry replication",
                "负责客户端认证",
                "管理消费者订阅"
            ],
            answer: 1,
            rationale: "官方文档描述 BookKeeper 负责'high efficient storage for sequential data and handles entry replication'——高效存储顺序数据并处理条目复制。"
        },
        {
            id: "pulsar-w1-2-q4",
            question: "Broker 的无状态特性带来的主要优势是什么？",
            options: [
                "减少内存使用",
                "可以快速扩缩容和故障恢复，无需数据迁移",
                "提高消息压缩率",
                "降低网络延迟"
            ],
            answer: 1,
            rationale: "因为 Broker 不存储数据，可以快速扩缩容和故障恢复——新 Broker 加入后立即可以服务，无需等待数据迁移。"
        },
        {
            id: "pulsar-w1-2-q5",
            question: "ZooKeeper 在 Pulsar 中存储哪两类数据？",
            options: [
                "消息数据和用户数据",
                "配置存储（全局配置）和集群本地存储（拓扑、元数据）",
                "日志数据和监控数据",
                "加密密钥和证书"
            ],
            answer: 1,
            rationale: "ZooKeeper 实现两层协调：配置存储（跨集群存储租户、命名空间等全局配置）和集群本地存储（管理 Broker 拓扑、所有权元数据、负载报告和 Ledger 元数据）。"
        },
        {
            id: "pulsar-w1-2-q6",
            question: "Pulsar Proxy 层的主要功能是什么？",
            options: [
                "数据加密",
                "提供 'single gateway' 功能，统一客户端入口",
                "消息压缩",
                "负载均衡"
            ],
            answer: 1,
            rationale: "Pulsar 的 Proxy 层提供'single gateway'功能，使客户端能够通过统一入口访问整个集群。"
        },
        {
            id: "pulsar-w1-2-q7",
            question: "Broker 的消息缓存机制是怎样的？",
            options: [
                "所有消息都从 BookKeeper 读取",
                "从托管 Ledger 缓存分发消息，积压超过缓存时从 BookKeeper 读取",
                "所有消息都缓存在内存中",
                "缓存在本地磁盘"
            ],
            answer: 1,
            rationale: "Broker 从托管 Ledger 缓存分发消息，当积压超过缓存大小时才从 BookKeeper 读取数据——这是性能调优的关键点。"
        },
        {
            id: "pulsar-w1-2-q8",
            question: "BookKeeper 的 Ledger 是什么？",
            options: [
                "消费者偏移量",
                "独立的日志单元，用于存储 Topic 的消息段",
                "网络连接池",
                "认证令牌"
            ],
            answer: 1,
            rationale: "Ledger 是 BookKeeper 中的独立日志单元，一个 Topic 的消息会被分割成多个 Ledger 段进行存储。"
        },
        {
            id: "pulsar-w1-2-q9",
            question: "如果一个 Broker 宕机，Topic 的消息会丢失吗？",
            options: [
                "会丢失所有消息",
                "不会，因为数据存储在 BookKeeper 中",
                "会丢失一半消息",
                "取决于配置"
            ],
            answer: 1,
            rationale: "Broker 是无状态的，所有持久化数据都存储在 BookKeeper 中。Broker 宕机时，Topic 所有权会转移到其他 Broker，消息不会丢失。"
        },
        {
            id: "pulsar-w1-2-q10",
            question: "Broker 提供的 REST API 用于什么？",
            options: [
                "消息发送和接收",
                "管理任务和主题查询",
                "数据加密",
                "日志收集"
            ],
            answer: 1,
            rationale: "官方文档指出 Broker 运行 HTTP 服务器，提供 REST API 用于管理任务和主题查询。消息收发使用专门的二进制协议。"
        },
        {
            id: "pulsar-w1-2-q11",
            question: "BookKeeper 在故障情况下提供什么保证？",
            options: [
                "不提供任何保证",
                "读一致性保证，自动分发 I/O 负载",
                "只保证写入成功",
                "只保证高可用"
            ],
            answer: 1,
            rationale: "官方文档指出 BookKeeper 在故障情况下提供读一致性保证，并能自动分发 I/O 负载，支持水平扩展容量和吞吐量。"
        },
        {
            id: "pulsar-w1-2-q12",
            question: "关于 ZooKeeper 在 Pulsar 中的未来，以下哪个说法正确？",
            options: [
                "ZooKeeper 将永远是必需的",
                "社区正在推进 ZooKeeper 可选化，未来可能使用其他元数据存储",
                "ZooKeeper 已经被移除",
                "ZooKeeper 会被 Kafka 替代"
            ],
            answer: 1,
            rationale: "当前 Pulsar 强依赖 ZooKeeper，但社区正在推进 ZooKeeper 可选化工作，未来可能使用其他元数据存储（如 Oxia）。"
        }
    ],
    "pulsar-w1-3": [
        {
            id: "pulsar-w1-3-q1",
            question: "Pulsar 计算存储分离的核心含义是什么？",
            options: [
                "Producer 和 Consumer 分离",
                "Broker（消息处理）和 BookKeeper（存储）分离",
                "Topic 和 Subscription 分离",
                "同步和异步分离"
            ],
            answer: 1,
            rationale: "计算存储分离指 Broker 只负责消息路由和协议处理，BookKeeper 专注于持久化存储——这是 Pulsar 架构的核心创新。"
        },
        {
            id: "pulsar-w1-3-q2",
            question: "Pulsar 的 Segment 存储架构有什么特点？",
            options: [
                "所有段可以随时修改",
                "只向最后一个段写入，之前的段封存且不可变",
                "段之间可以互相引用",
                "段存储在客户端"
            ],
            answer: 1,
            rationale: "官方文档指出系统自动将日志分段，只向最后一个段写入数据，之前的段被封存且不可变（immutable）。"
        },
        {
            id: "pulsar-w1-3-q3",
            question: "分层存储卸载数据的方式是什么？",
            options: [
                "一次性卸载所有数据",
                "segments are copied one-by-one to tiered storage",
                "只卸载最新的段",
                "随机选择段卸载"
            ],
            answer: 1,
            rationale: "官方文档描述：当触发卸载操作时，'segments are copied one-by-one to tiered storage'——段一个接一个地复制到分层存储。"
        },
        {
            id: "pulsar-w1-3-q4",
            question: "Pulsar 分层存储支持哪些存储后端？",
            options: [
                "仅支持 S3",
                "S3、GCS、Azure Blob、Aliyun OSS、Hadoop 文件系统",
                "仅支持本地磁盘",
                "仅支持 HDFS"
            ],
            answer: 1,
            rationale: "官方文档明确支持 Amazon S3、Google Cloud Storage、Azure Blob、Aliyun OSS（通过 jclouds）以及 Hadoop 文件系统。"
        },
        {
            id: "pulsar-w1-3-q5",
            question: "消费者访问已卸载到对象存储的数据时需要做什么特殊处理？",
            options: [
                "需要重新配置客户端",
                "无需特殊处理，Pulsar 自动处理数据位置路由（透明访问）",
                "需要手动指定存储位置",
                "无法访问已卸载的数据"
            ],
            answer: 1,
            rationale: "消费者无需知道数据存储在 BookKeeper 还是对象存储，Pulsar 自动处理数据位置路由，实现透明的数据检索。"
        },
        {
            id: "pulsar-w1-3-q6",
            question: "Broker 无状态对扩容有什么影响？",
            options: [
                "扩容需要等待数据迁移",
                "新 Broker 加入后立即可以服务，无需数据迁移",
                "扩容需要停机",
                "扩容后需要重新平衡数据"
            ],
            answer: 1,
            rationale: "因为 Broker 无状态，可以快速增加或减少 Broker 节点，新节点立即可以服务——不需要等待数据重平衡。"
        },
        {
            id: "pulsar-w1-3-q7",
            question: "BookKeeper 扩展存储容量需要做什么？",
            options: [
                "停止集群并迁移数据",
                "添加 Bookie 节点，数据会自动均衡",
                "重新创建所有 Topic",
                "需要手动迁移 Ledger"
            ],
            answer: 1,
            rationale: "存储层可以独立于计算层扩展。当存储容量不足时，只需添加 Bookie 节点，数据会自动均衡——无需停止服务。"
        },
        {
            id: "pulsar-w1-3-q8",
            question: "Broker 故障时 Topic 如何恢复服务？",
            options: [
                "需要等待 Broker 恢复",
                "Topic 所有权快速转移到其他 Broker，因为数据在 BookKeeper 中",
                "需要手动干预",
                "数据会丢失"
            ],
            answer: 1,
            rationale: "Broker 故障时，Topic 所有权可以快速转移到其他 Broker，因为数据在 BookKeeper 中，无需数据迁移。"
        },
        {
            id: "pulsar-w1-3-q9",
            question: "分层存储最典型的应用场景是什么？",
            options: [
                "实时交易系统",
                "需要长期保留大量回溯数据的 Topic（如用户行为数据）",
                "高频交易",
                "即时通讯"
            ],
            answer: 1,
            rationale: "官方文档示例：需要长期保留大量回溯数据的 Topic，如保存用户行为数据用于训练推荐系统，便于算法更新时重新处理历史数据。"
        },
        {
            id: "pulsar-w1-3-q10",
            question: "Segment 不可变性带来什么优势？",
            options: [
                "减少内存使用",
                "支持细粒度存储管理和高效缓存",
                "提高写入速度",
                "减少网络流量"
            ],
            answer: 1,
            rationale: "之前的段被封存且不可变，这种设计支持细粒度的存储管理，并且不可变数据可以被高效地缓存和卸载。"
        },
        {
            id: "pulsar-w1-3-q11",
            question: "与 Kafka 的 Tiered Storage 相比，Pulsar 的分层存储有什么特点？",
            options: [
                "两者完全相同",
                "Pulsar 原生支持，Kafka 是后来添加的功能（KIP-405）",
                "Kafka 原生支持，Pulsar 不支持",
                "都不支持对象存储"
            ],
            answer: 1,
            rationale: "Pulsar 从设计之初就原生支持分层存储，而 Kafka 通过 Tiered Storage（KIP-405）后来才添加类似功能。"
        },
        {
            id: "pulsar-w1-3-q12",
            question: "如何触发 Pulsar 的分层存储卸载？",
            options: [
                "只能自动触发",
                "支持手动（REST API/CLI）或自动卸载触发",
                "只能手动触发",
                "不支持触发卸载"
            ],
            answer: 1,
            rationale: "官方文档指出支持手动（REST API/CLI）或自动卸载触发两种方式。"
        }
    ]
}
