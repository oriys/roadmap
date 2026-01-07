import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "pulsar-w2-1": {
        lessonId: "pulsar-w2-1",
        background: [
            "【多租户核心设计】Pulsar 官方文档：租户是'an administrative unit for allocating capacity and enforcing an authentication/authorization scheme'——用于分配容量和执行认证授权方案的行政单元。",
            "【Namespace 定义】官方文档：'A namespace is the administrative unit within a tenant. Configuration policies set on a namespace apply to all the topics created in that namespace'——命名空间是租户内的行政单元，配置策略应用于其下所有 Topic。",
            "【三层 URL 结构】Topic 完整名称遵循三层结构：persistent://tenant/namespace/topic。例如 persistent://finance/trading/orders 表示 finance 租户下 trading 命名空间中的 orders 主题。",
            "【资源隔离维度】租户层面可配置：容量分配、认证授权方案、集群访问权限。命名空间层面可配置：保留策略、存储配额、消息 TTL、复制策略等。",
            "【策略继承机制】命名空间上设置的配置策略适用于该命名空间中创建的所有 Topic，支持 Topic 级别覆盖特定策略。"
        ],
        keyDifficulties: [
            "【租户 vs 命名空间职责】租户负责顶层隔离和认证，命名空间负责具体策略配置——理解两层分工对多租户架构设计至关重要。",
            "【动态策略更新】通过系统 Topic '__change_events' 支持 Topic 级别的动态策略更新，无需重启服务即可生效。",
            "【命名空间 Bundle】Namespace bundles 是'virtual groups of topics'——虚拟 Topic 分组，用于负载均衡。Bundle 可以 split 或 unload 来平衡 Broker 负载。",
            "【积压配额策略】Backlog quota 支持三种执行动作：producer_request_hold（阻塞生产者）、producer_exception（抛出异常）、consumer_backlog_eviction（驱逐消费者积压）。"
        ],
        handsOnPath: [
            "使用 pulsar-admin tenants create my-tenant 创建租户，使用 pulsar-admin namespaces create my-tenant/my-namespace 创建命名空间。",
            "使用 pulsar-admin namespaces policies my-tenant/my-namespace 查看命名空间的所有策略配置。",
            "尝试为命名空间设置消息保留策略：pulsar-admin namespaces set-retention my-tenant/my-namespace --size 10G --time 7d",
            "创建多个命名空间，配置不同的策略，观察 Topic 的行为差异。"
        ],
        selfCheck: [
            "Pulsar 官方对租户（Tenant）的定义是什么？它的核心职责是什么？",
            "命名空间（Namespace）与租户的关系是什么？在命名空间上可以配置哪些策略？",
            "Topic 的完整 URL 结构是什么？各部分的含义是什么？",
            "什么是 Namespace Bundle？它如何帮助负载均衡？",
            "Backlog quota 的三种执行动作各是什么含义？"
        ],
        extensions: [
            "研究 Pulsar 的 Topic 级别策略覆盖机制，了解如何为特定 Topic 设置不同于命名空间的策略。",
            "探索 Pulsar 的资源配额（Resource Quotas）功能，了解如何限制租户或命名空间的资源使用。",
            "学习 Pulsar 的权限管理 API，了解如何为不同用户分配 produce/consume 权限。",
            "研究多租户场景下的隔离级别：逻辑隔离 vs 物理隔离的权衡。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-multi-tenancy/",
            "https://pulsar.apache.org/docs/admin-api-namespaces/"
        ]
    },
    "pulsar-w2-2": {
        lessonId: "pulsar-w2-2",
        background: [
            "【Topic 本质】官方文档：Topic 是消息的命名通道（named channel），生产者发布消息到 Topic，消费者从 Topic 订阅消息。Topic 名称是 URL 结构：{persistent|non-persistent}://tenant/namespace/topic。",
            "【持久化 vs 非持久化】持久化 Topic（persistent://）将消息持久化到多个磁盘，保证消息不丢失；非持久化 Topic（non-persistent://）消息仅存于内存，提供更低延迟但可能丢失消息。",
            "【分区 Topic 设计】官方文档：Partitioned topics 将消息分布到多个 Broker 上的内部 Topic，提高吞吐量。分区通过 Topic 名称对消息透明：persistent://tenant/namespace/topic-partition-N。",
            "【自动 Topic 创建】Pulsar 默认在 Producer 或 Consumer 首次连接时自动创建 Topic，可通过 allowAutoTopicCreation 配置禁用。",
            "【Topic 统计信息】通过 pulsar-admin topics stats 可获取 Topic 的详细统计：发布速率、消费速率、存储大小、积压量等。"
        ],
        keyDifficulties: [
            "【分区数选择】分区数需要在创建时指定且不易更改。分区过少限制并行度，分区过多增加管理开销——需要根据预期吞吐量和消费者数量权衡。",
            "【非持久化 Topic 场景】非持久化 Topic 适用于可以容忍消息丢失、追求极低延迟的场景，如实时监控指标、临时通知等。",
            "【Topic 所有权】每个 Topic（或分区）由一个 Broker 拥有。Broker 故障时所有权会自动转移，但短暂不可用期间可能影响发布和消费。",
            "【系统 Topic】Pulsar 内部使用系统 Topic（如 __change_events、__transaction_buffer_snapshot）管理元数据和内部状态，理解这些 Topic 有助于排查问题。"
        ],
        handsOnPath: [
            "创建非分区 Topic：pulsar-admin topics create persistent://my-tenant/my-namespace/my-topic",
            "创建分区 Topic：pulsar-admin topics create-partitioned-topic persistent://my-tenant/my-namespace/my-partitioned-topic -p 4",
            "查看 Topic 统计信息：pulsar-admin topics stats persistent://my-tenant/my-namespace/my-topic",
            "使用 pulsar-client produce/consume 命令测试持久化和非持久化 Topic 的行为差异。"
        ],
        selfCheck: [
            "Topic 的 URL 结构中 persistent 和 non-persistent 分别表示什么？",
            "什么时候应该使用分区 Topic？分区数如何选择？",
            "非持久化 Topic 适用于什么场景？有什么风险？",
            "如何查看 Topic 的统计信息？有哪些关键指标？",
            "Topic 的所有权是什么概念？Broker 故障时如何处理？"
        ],
        extensions: [
            "研究 Topic 的压缩（Compaction）功能，了解如何保留每个 Key 的最新消息。",
            "探索 Topic 的保留策略（Retention）与过期策略（TTL）的区别和配合使用。",
            "学习 Topic 的负载均衡机制，了解 Broker 如何分配 Topic 所有权。",
            "研究系统 Topic 的设计，了解 Pulsar 如何使用 Topic 管理内部状态。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#topics",
            "https://pulsar.apache.org/docs/concepts-messaging/#partitioned-topics",
            "https://pulsar.apache.org/docs/concepts-messaging/#non-persistent-topics"
        ]
    },
    "pulsar-w2-3": {
        lessonId: "pulsar-w2-3",
        background: [
            "【消息结构】官方文档定义消息包含：Payload（原始字节或符合 Schema 的数据）、Key（可选标识符用于分区）、Properties（用户定义的元数据键值对）、Message ID（Broker 分配的唯一标识）、Sequence ID（Producer 分配的顺序标识）。",
            "【Message ID 组成】Message ID 是全局唯一标识，包含 ledgerId:entryId:partitionIndex:batchIndex。通过 Message ID 可以精确定位任意一条消息。",
            "【消息大小限制】官方文档：默认最大消息大小为 5MB。超大消息可以通过 Chunking 功能拆分为多个 chunk 传输。",
            "【时间戳语义】Event Time 是业务事件发生的时间（由 Producer 设置），Publish Time 是消息发布到 Broker 的时间（由 Broker 设置）。两者在流处理场景中含义不同。",
            "【消息属性】Properties 是键值对元数据，可用于消息过滤、路由、追踪等。例如：props.put(\"source\", \"app1\"); props.put(\"priority\", \"high\");"
        ],
        keyDifficulties: [
            "【Sequence ID 去重】Producer 通过 Sequence ID 实现消息去重。Broker 跟踪每个 Producer 的最新 Sequence ID，拒绝重复或乱序的消息。",
            "【消息重投机制】官方文档描述三种重投触发：消费者崩溃、ACK 超时、消费者主动 Negative ACK。重投消息会增加 redeliveryCount。",
            "【死信处理】超过最大重投次数的消息会被发送到死信 Topic（Dead Letter Topic），避免阻塞正常消费。死信 Topic 命名格式：<topicname>-<subscriptionname>-DLQ。",
            "【重试 Topic】消费失败的消息先进入重试 Topic（Retry Letter Topic）等待重试，支持配置延迟重试间隔。重试 Topic 命名格式：<topicname>-<subscriptionname>-RETRY。"
        ],
        handsOnPath: [
            "使用 Java 客户端发送带 Properties 的消息，观察 Consumer 如何读取这些属性。",
            "发送消息时设置 Event Time，对比 Publish Time 的差异。",
            "通过 pulsar-admin topics peek-messages 查看 Topic 中消息的详细结构。",
            "配置死信 Topic，模拟消费失败场景，观察消息如何流转到 DLQ。"
        ],
        selfCheck: [
            "Pulsar 消息的核心组成部分有哪些？各自的作用是什么？",
            "Message ID 的格式是什么？它为什么能够唯一标识一条消息？",
            "Event Time 和 Publish Time 有什么区别？分别由谁设置？",
            "Sequence ID 如何帮助实现消息去重？",
            "什么情况下消息会被发送到死信 Topic？如何配置？"
        ],
        extensions: [
            "研究消息的 Chunking 功能，了解超大消息如何拆分和重组。",
            "探索消息的 Schema 支持，了解如何定义强类型的消息结构。",
            "学习消息的压缩功能，了解 LZ4、ZSTD 等压缩算法的选择。",
            "研究消息的端到端加密，了解如何保护消息内容的机密性。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#messages",
            "https://pulsar.apache.org/docs/concepts-messaging/#message-redelivery",
            "https://pulsar.apache.org/docs/concepts-messaging/#message-retention-and-expiry"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w2-1": [
        {
            id: "pulsar-w2-1-q1",
            question: "Pulsar 官方对租户（Tenant）的定义是什么？",
            options: [
                "一个用于存储消息的物理单元",
                "an administrative unit for allocating capacity and enforcing an authentication/authorization scheme",
                "一个 Topic 的别名",
                "一种消息格式"
            ],
            answer: 1,
            rationale: "官方文档定义租户是'an administrative unit for allocating capacity and enforcing an authentication/authorization scheme'——用于分配容量和执行认证授权方案的行政单元。"
        },
        {
            id: "pulsar-w2-1-q2",
            question: "官方文档对 Namespace 的描述是什么？",
            options: [
                "仅用于存储消息",
                "the administrative unit within a tenant，策略应用于其下所有 Topic",
                "用于网络隔离",
                "用于数据加密"
            ],
            answer: 1,
            rationale: "官方文档：'A namespace is the administrative unit within a tenant. Configuration policies set on a namespace apply to all the topics created in that namespace'。"
        },
        {
            id: "pulsar-w2-1-q3",
            question: "Pulsar Topic 的完整 URL 结构是什么？",
            options: [
                "tenant/namespace/topic",
                "namespace://tenant/topic",
                "persistent://tenant/namespace/topic",
                "topic://namespace/tenant"
            ],
            answer: 2,
            rationale: "Topic 完整名称遵循三层结构：{persistent|non-persistent}://tenant/namespace/topic。"
        },
        {
            id: "pulsar-w2-1-q4",
            question: "Namespace 可以配置哪些策略？",
            options: [
                "只能配置认证策略",
                "保留策略、存储配额、消息 TTL、复制策略等",
                "只能配置网络策略",
                "无法配置任何策略"
            ],
            answer: 1,
            rationale: "命名空间层面可配置：保留策略、存储配额、消息 TTL、复制策略、积压配额等多种策略。"
        },
        {
            id: "pulsar-w2-1-q5",
            question: "Namespace Bundle 的作用是什么？",
            options: [
                "用于消息加密",
                "virtual groups of topics，用于负载均衡",
                "用于消息压缩",
                "用于认证授权"
            ],
            answer: 1,
            rationale: "官方文档：Namespace bundles 是'virtual groups of topics'——虚拟 Topic 分组，可以 split 或 unload 来平衡 Broker 负载。"
        },
        {
            id: "pulsar-w2-1-q6",
            question: "Backlog quota 的 producer_request_hold 动作意味着什么？",
            options: [
                "删除生产者",
                "阻塞生产者请求直到积压减少",
                "抛出异常给生产者",
                "驱逐消费者积压"
            ],
            answer: 1,
            rationale: "producer_request_hold 会阻塞生产者的发送请求，直到积压量降到配额以下。"
        },
        {
            id: "pulsar-w2-1-q7",
            question: "哪个系统 Topic 用于支持 Topic 级别的动态策略更新？",
            options: [
                "__consumer_offsets",
                "__transaction_buffer",
                "__change_events",
                "__metadata"
            ],
            answer: 2,
            rationale: "通过系统 Topic '__change_events' 支持 Topic 级别的动态策略更新，无需重启服务即可生效。"
        },
        {
            id: "pulsar-w2-1-q8",
            question: "租户和命名空间的分工是什么？",
            options: [
                "两者职责相同",
                "租户负责顶层隔离和认证，命名空间负责具体策略配置",
                "命名空间负责认证，租户负责策略",
                "都只负责存储"
            ],
            answer: 1,
            rationale: "租户负责顶层隔离和认证授权，命名空间负责具体的策略配置如保留、TTL、配额等。"
        },
        {
            id: "pulsar-w2-1-q9",
            question: "如何为命名空间设置消息保留策略？",
            options: [
                "无法设置保留策略",
                "pulsar-admin namespaces set-retention tenant/namespace --size 10G --time 7d",
                "直接修改配置文件",
                "重启 Broker 生效"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin namespaces set-retention 命令可以设置命名空间的消息保留策略，指定大小和时间限制。"
        },
        {
            id: "pulsar-w2-1-q10",
            question: "Backlog quota 支持哪三种执行动作？",
            options: [
                "delete、archive、compress",
                "producer_request_hold、producer_exception、consumer_backlog_eviction",
                "retry、skip、fail",
                "block、warn、ignore"
            ],
            answer: 1,
            rationale: "官方文档明确 Backlog quota 支持：producer_request_hold、producer_exception、consumer_backlog_eviction 三种动作。"
        },
        {
            id: "pulsar-w2-1-q11",
            question: "Dispatch Throttling 支持哪些级别的限流？",
            options: [
                "只支持 Topic 级别",
                "topic-level、subscription-level、replicator-level",
                "只支持集群级别",
                "只支持 Broker 级别"
            ],
            answer: 1,
            rationale: "官方文档：支持三种级别的分发限流：topic-level、subscription-level 和 replicator-level。"
        },
        {
            id: "pulsar-w2-1-q12",
            question: "多个独立组织如何在同一 Pulsar 实例上运作？",
            options: [
                "无法实现",
                "通过多租户的分层设计实现安全高效的隔离",
                "需要部署多个集群",
                "共享所有资源无法隔离"
            ],
            answer: 1,
            rationale: "Pulsar 的多租户分层设计（Tenant → Namespace → Topic）使多个独立组织可在同一实例上安全高效地运作。"
        }
    ],
    "pulsar-w2-2": [
        {
            id: "pulsar-w2-2-q1",
            question: "Pulsar 的 Topic URL 结构中，persistent 和 non-persistent 分别表示什么？",
            options: [
                "加密和非加密",
                "持久化存储和仅内存存储",
                "压缩和非压缩",
                "同步和异步"
            ],
            answer: 1,
            rationale: "persistent:// 表示消息持久化到磁盘，non-persistent:// 表示消息仅存于内存。"
        },
        {
            id: "pulsar-w2-2-q2",
            question: "非持久化 Topic 适用于什么场景？",
            options: [
                "金融交易系统",
                "可容忍消息丢失、追求极低延迟的场景（如实时监控指标）",
                "订单处理系统",
                "所有生产环境"
            ],
            answer: 1,
            rationale: "非持久化 Topic 适用于可以容忍消息丢失、追求极低延迟的场景，如实时监控指标、临时通知等。"
        },
        {
            id: "pulsar-w2-2-q3",
            question: "分区 Topic 的主要目的是什么？",
            options: [
                "减少存储空间",
                "将消息分布到多个 Broker 提高吞吐量",
                "提高消息安全性",
                "简化客户端代码"
            ],
            answer: 1,
            rationale: "分区 Topic 将消息分布到多个 Broker 上的内部 Topic，提高整体吞吐量和并行处理能力。"
        },
        {
            id: "pulsar-w2-2-q4",
            question: "分区 Topic 的内部分区命名格式是什么？",
            options: [
                "topic-N",
                "topic/partition-N",
                "topic-partition-N",
                "N-topic"
            ],
            answer: 2,
            rationale: "分区 Topic 的内部分区命名格式为：persistent://tenant/namespace/topic-partition-N。"
        },
        {
            id: "pulsar-w2-2-q5",
            question: "Pulsar 默认是否自动创建 Topic？",
            options: [
                "从不自动创建",
                "默认在 Producer 或 Consumer 首次连接时自动创建",
                "只有管理员可以创建",
                "需要手动配置后才能创建"
            ],
            answer: 1,
            rationale: "Pulsar 默认在 Producer 或 Consumer 首次连接时自动创建 Topic，可通过 allowAutoTopicCreation 配置禁用。"
        },
        {
            id: "pulsar-w2-2-q6",
            question: "如何创建一个 4 分区的 Topic？",
            options: [
                "pulsar-admin topics create topic -p 4",
                "pulsar-admin topics create-partitioned-topic topic -p 4",
                "pulsar-admin topics partition topic 4",
                "pulsar-admin create topic --partitions 4"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin topics create-partitioned-topic <topic-name> -p <num-partitions> 创建分区 Topic。"
        },
        {
            id: "pulsar-w2-2-q7",
            question: "Topic 所有权在 Broker 故障时如何处理？",
            options: [
                "Topic 永久不可用",
                "所有权自动转移到其他 Broker",
                "需要手动干预",
                "消息会丢失"
            ],
            answer: 1,
            rationale: "Broker 故障时 Topic 所有权会自动转移到其他 Broker，但短暂不可用期间可能影响发布和消费。"
        },
        {
            id: "pulsar-w2-2-q8",
            question: "如何查看 Topic 的统计信息？",
            options: [
                "pulsar-admin topics list",
                "pulsar-admin topics stats <topic-name>",
                "pulsar-admin topics info",
                "pulsar-admin topics describe"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin topics stats <topic-name> 可获取 Topic 的详细统计信息。"
        },
        {
            id: "pulsar-w2-2-q9",
            question: "分区数选择需要考虑什么因素？",
            options: [
                "只考虑存储空间",
                "预期吞吐量和消费者数量，分区过少限制并行度，过多增加管理开销",
                "只考虑消息大小",
                "无需考虑任何因素"
            ],
            answer: 1,
            rationale: "分区数需要根据预期吞吐量和消费者数量权衡。分区过少限制并行度，分区过多增加管理开销。"
        },
        {
            id: "pulsar-w2-2-q10",
            question: "__change_events 系统 Topic 的作用是什么？",
            options: [
                "存储消息数据",
                "管理 Topic 级别策略的动态更新",
                "存储用户认证信息",
                "记录错误日志"
            ],
            answer: 1,
            rationale: "系统 Topic __change_events 用于支持 Topic 级别的动态策略更新，无需重启服务即可生效。"
        },
        {
            id: "pulsar-w2-2-q11",
            question: "非持久化 Topic 的消息存储在哪里？",
            options: [
                "BookKeeper",
                "仅存于 Broker 内存",
                "对象存储",
                "本地磁盘"
            ],
            answer: 1,
            rationale: "非持久化 Topic 的消息仅存于 Broker 内存，不持久化到 BookKeeper，提供更低延迟但可能丢失消息。"
        },
        {
            id: "pulsar-w2-2-q12",
            question: "Topic 压缩（Compaction）功能的作用是什么？",
            options: [
                "减少消息体积",
                "保留每个 Key 的最新消息，删除旧版本",
                "加密消息内容",
                "加速消息传输"
            ],
            answer: 1,
            rationale: "Topic 压缩功能保留每个 Key 的最新消息，删除同一 Key 的旧版本消息，类似于日志压缩。"
        }
    ],
    "pulsar-w2-3": [
        {
            id: "pulsar-w2-3-q1",
            question: "Pulsar 消息的核心组成部分包括哪些？",
            options: [
                "只有 Payload",
                "Payload、Key、Properties、Message ID、Sequence ID 等",
                "只有 Key 和 Value",
                "只有 Header 和 Body"
            ],
            answer: 1,
            rationale: "官方文档定义消息包含：Payload、Key、Properties、Message ID、Sequence ID 等核心组成部分。"
        },
        {
            id: "pulsar-w2-3-q2",
            question: "Message ID 的格式是什么？",
            options: [
                "UUID 字符串",
                "ledgerId:entryId:partitionIndex:batchIndex",
                "时间戳",
                "随机数"
            ],
            answer: 1,
            rationale: "Message ID 包含 ledgerId:entryId:partitionIndex:batchIndex，可以精确定位任意一条消息。"
        },
        {
            id: "pulsar-w2-3-q3",
            question: "Pulsar 默认的最大消息大小是多少？",
            options: [
                "1MB",
                "5MB",
                "10MB",
                "无限制"
            ],
            answer: 1,
            rationale: "官方文档：默认最大消息大小为 5MB。超大消息可通过 Chunking 功能拆分传输。"
        },
        {
            id: "pulsar-w2-3-q4",
            question: "Event Time 和 Publish Time 的区别是什么？",
            options: [
                "两者相同",
                "Event Time 是业务事件时间（Producer 设置），Publish Time 是发布时间（Broker 设置）",
                "Event Time 由 Broker 设置",
                "Publish Time 由 Producer 设置"
            ],
            answer: 1,
            rationale: "Event Time 是业务事件发生的时间（由 Producer 设置），Publish Time 是消息发布到 Broker 的时间（由 Broker 设置）。"
        },
        {
            id: "pulsar-w2-3-q5",
            question: "消息 Properties 的用途是什么？",
            options: [
                "存储消息体",
                "用户定义的键值对元数据，可用于过滤、路由、追踪",
                "存储认证信息",
                "存储压缩算法"
            ],
            answer: 1,
            rationale: "Properties 是键值对元数据，可用于消息过滤、路由、追踪等场景。"
        },
        {
            id: "pulsar-w2-3-q6",
            question: "Sequence ID 的主要作用是什么？",
            options: [
                "消息加密",
                "Producer 去重，Broker 拒绝重复或乱序消息",
                "消息压缩",
                "负载均衡"
            ],
            answer: 1,
            rationale: "Producer 通过 Sequence ID 实现消息去重。Broker 跟踪每个 Producer 的最新 Sequence ID，拒绝重复或乱序消息。"
        },
        {
            id: "pulsar-w2-3-q7",
            question: "哪些情况会触发消息重投？",
            options: [
                "只有消费者崩溃",
                "消费者崩溃、ACK 超时、消费者主动 Negative ACK",
                "只有网络错误",
                "消息永远不会重投"
            ],
            answer: 1,
            rationale: "官方文档描述三种重投触发：消费者崩溃、ACK 超时、消费者主动 Negative ACK。"
        },
        {
            id: "pulsar-w2-3-q8",
            question: "死信 Topic（DLQ）的命名格式是什么？",
            options: [
                "<topicname>-DLQ",
                "<topicname>-<subscriptionname>-DLQ",
                "DLQ-<topicname>",
                "<subscriptionname>-DLQ"
            ],
            answer: 1,
            rationale: "死信 Topic 命名格式为：<topicname>-<subscriptionname>-DLQ。"
        },
        {
            id: "pulsar-w2-3-q9",
            question: "重试 Topic（Retry Letter Topic）的作用是什么？",
            options: [
                "存储所有消息",
                "暂存消费失败的消息等待重试，支持配置延迟重试间隔",
                "存储成功消息",
                "存储元数据"
            ],
            answer: 1,
            rationale: "消费失败的消息先进入重试 Topic 等待重试，支持配置延迟重试间隔。"
        },
        {
            id: "pulsar-w2-3-q10",
            question: "如何查看 Topic 中消息的详细结构？",
            options: [
                "pulsar-admin topics list",
                "pulsar-admin topics peek-messages <topic-name>",
                "pulsar-admin topics stats",
                "pulsar-admin topics describe"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin topics peek-messages 可以查看 Topic 中消息的详细结构。"
        },
        {
            id: "pulsar-w2-3-q11",
            question: "超大消息如何处理？",
            options: [
                "拒绝发送",
                "通过 Chunking 功能拆分为多个 chunk 传输",
                "自动压缩",
                "分多条消息发送"
            ],
            answer: 1,
            rationale: "超大消息可以通过 Chunking 功能拆分为多个 chunk 传输，Consumer 端自动重组。"
        },
        {
            id: "pulsar-w2-3-q12",
            question: "重投消息时会增加什么计数？",
            options: [
                "sequenceId",
                "redeliveryCount",
                "publishTime",
                "messageId"
            ],
            answer: 1,
            rationale: "重投消息会增加 redeliveryCount，消费者可以根据此计数决定处理策略或放弃消息。"
        }
    ]
}
