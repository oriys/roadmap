import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "pulsar-w10-1": {
        lessonId: "pulsar-w10-1",
        background: [
            "【地理复制定义】官方文档：Geo-replication 是在地理上分散的数据中心之间复制持久化消息数据的机制，实现异地多活和灾备。",
            "【异步复制模式】Pulsar 地理复制默认是异步的，Producer 写入本地集群后立即返回，消息异步复制到其他集群。这避免了跨区域延迟影响写入性能。",
            "【复制游标机制】每个复制的远程集群都有一个复制游标（Replication Cursor），跟踪已复制到该集群的消息位置。游标持久化确保故障恢复后继续复制。",
            "【全局 ZooKeeper】地理复制需要全局 ZooKeeper（Global ZooKeeper）存储跨集群配置，包括集群注册信息和全局命名空间配置。",
            "【复制延迟因素】复制延迟取决于：网络延迟（主要因素）、网络带宽、消息大小、目标集群处理能力。通常在毫秒到秒级别。"
        ],
        keyDifficulties: [
            "【异步复制的一致性】异步复制意味着不同集群的数据可能短暂不一致。应用需要处理这种最终一致性，或使用同步复制（牺牲性能）。",
            "【复制循环问题】当启用双向复制时，需要避免消息循环复制。Pulsar 通过 replicatedFrom 属性标记消息来源，自动过滤来自自身的消息。",
            "【跨集群去重】异步复制可能在故障恢复时产生重复消息。Consumer 需要实现幂等处理或使用消息去重功能。",
            "【网络分区处理】网络分区期间，复制会暂停，消息在本地集群积压。恢复后会补发积压消息，可能导致短暂的高负载。"
        ],
        handsOnPath: [
            "搭建两个独立的 Pulsar 集群，配置全局 ZooKeeper 存储集群信息。",
            "在 Namespace 上配置复制策略，指定复制到的目标集群列表。",
            "在一个集群发送消息，验证消息是否复制到另一个集群。",
            "使用 pulsar-admin topics stats 查看复制游标位置和复制延迟。"
        ],
        selfCheck: [
            "Pulsar 地理复制是同步还是异步的？这有什么影响？",
            "复制游标（Replication Cursor）的作用是什么？",
            "全局 ZooKeeper 在地理复制中的作用是什么？",
            "如何避免双向复制时的消息循环？",
            "影响复制延迟的主要因素有哪些？"
        ],
        extensions: [
            "研究 Pulsar 的同步复制模式（syncReplication），了解何时使用以及性能影响。",
            "探索复制过滤功能，了解如何只复制部分消息。",
            "学习如何监控复制延迟和积压，设置告警。",
            "研究 Kafka MirrorMaker 与 Pulsar 地理复制的实现差异。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-replication/",
            "https://pulsar.apache.org/docs/concepts-replication/#replication-mechanisms"
        ]
    },
    "pulsar-w10-2": {
        lessonId: "pulsar-w10-2",
        background: [
            "【集群注册】配置地理复制的第一步是在全局 ZooKeeper 中注册所有集群。每个集群需要配置 serviceUrl、serviceUrlTls、brokerServiceUrl 等连接信息。",
            "【Namespace 配置复制】在 Namespace 上使用 pulsar-admin namespaces set-clusters 指定复制的目标集群列表。该 Namespace 下的所有 Topic 都会复制。",
            "【Topic 级别配置】也可以在 Topic 级别单独配置复制策略，覆盖 Namespace 的默认配置。使用 pulsar-admin topics set-replication-clusters。",
            "【复制授权】跨集群复制需要适当的权限配置。生产环境应使用 TLS 加密和认证保护复制通道。",
            "【复制带宽限制】可以配置 replicatorDispatcherThrottlingRatePerTopicPerReplicator 限制单个 Topic 的复制带宽，避免复制流量影响正常业务。"
        ],
        keyDifficulties: [
            "【全局配置 vs 本地配置】全局 ZooKeeper 存储跨集群配置，本地 ZooKeeper 存储集群内部配置。理解两者的区别对排查问题很重要。",
            "【动态更新复制配置】修改 Namespace 的复制集群列表会立即生效。添加新集群会开始复制，移除集群会停止复制但已复制的消息不会删除。",
            "【复制连接管理】Broker 会为每个需要复制的远程集群创建 Producer 连接。连接失败会自动重试，但期间消息会积压。",
            "【TLS 配置复杂性】跨集群 TLS 需要双方信任对方的证书。可以使用相同的 CA，或在各集群配置信任对方的证书链。"
        ],
        handsOnPath: [
            "使用 pulsar-admin clusters create 注册远程集群信息。",
            "配置 Namespace 复制策略：pulsar-admin namespaces set-clusters tenant/ns --clusters cluster1,cluster2",
            "验证复制连接状态：pulsar-admin topics stats 查看 replicators 部分。",
            "测试动态添加和移除复制集群，观察复制行为变化。"
        ],
        selfCheck: [
            "配置地理复制的主要步骤有哪些？",
            "如何在 Namespace 级别和 Topic 级别配置复制？",
            "修改复制集群列表会立即生效吗？有什么影响？",
            "如何限制复制带宽避免影响业务？",
            "跨集群 TLS 配置需要注意什么？"
        ],
        extensions: [
            "研究 Pulsar 的复制订阅功能（Replicated Subscriptions），了解如何复制订阅状态。",
            "探索 Pulsar 的 Cluster-level policies 配置。",
            "学习如何自动化地理复制的配置管理。",
            "研究多区域 Kubernetes 部署下的 Pulsar 地理复制配置。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/administration-geo/",
            "https://pulsar.apache.org/docs/admin-api-namespaces/#set-replication-clusters"
        ]
    },
    "pulsar-w10-3": {
        lessonId: "pulsar-w10-3",
        background: [
            "【全网格复制】Full-mesh replication，所有集群之间双向复制。每个集群的消息都会复制到所有其他集群，实现全球数据同步。",
            "【聚合复制】Aggregation replication，多个边缘集群单向复制到中心集群。适合收集分散数据到中心处理的场景。",
            "【主备复制】Active-standby replication，主集群复制到备用集群。备用集群只读，用于灾备故障转移。",
            "【自动故障转移】Pulsar 支持配置 failover 策略，当主集群不可用时，客户端可以自动切换到备用集群。需要客户端配置多集群。",
            "【手动故障转移】也可以通过 DNS 切换、负载均衡器配置等方式实现手动故障转移，对应用透明。"
        ],
        keyDifficulties: [
            "【复制模式选择】选择复制模式需要考虑：数据一致性要求、网络带宽成本、故障转移需求、运维复杂度。全网格最灵活但成本最高。",
            "【故障转移 RTO/RPO】RTO（恢复时间目标）取决于故障检测和切换时间；RPO（恢复点目标）取决于复制延迟。异步复制可能丢失未复制的消息。",
            "【脑裂问题】在网络分区场景下，两个集群可能都认为自己是主集群并接受写入，导致数据分叉。需要设计好分区检测和仲裁机制。",
            "【故障恢复后的数据合并】故障恢复后，可能需要合并分区期间两边的写入，或选择一边的数据。这需要业务层面的决策。"
        ],
        handsOnPath: [
            "设计并实现一个全网格复制方案，在三个集群间双向复制。",
            "测试主备复制的故障转移：停止主集群，验证客户端是否切换到备用集群。",
            "模拟网络分区，观察复制积压和恢复后的补发行为。",
            "测量不同复制模式下的延迟和带宽消耗。"
        ],
        selfCheck: [
            "全网格、聚合、主备三种复制模式各适用于什么场景？",
            "如何实现自动故障转移？需要哪些配置？",
            "什么是 RTO 和 RPO？异步复制对它们有什么影响？",
            "网络分区可能导致什么问题？如何应对？",
            "故障恢复后如何处理数据一致性问题？"
        ],
        extensions: [
            "研究 Pulsar 的 Multi-Cluster Client 功能，了解客户端如何处理多集群。",
            "探索基于 Pulsar 的全球分布式架构设计最佳实践。",
            "学习如何监控和告警地理复制的健康状态。",
            "研究其他消息系统（如 Kafka、RabbitMQ）的跨区域复制方案对比。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-replication/#replication-patterns",
            "https://pulsar.apache.org/docs/concepts-replication/#failover"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w10-1": [
        {
            id: "pulsar-w10-1-q1",
            question: "Pulsar 地理复制的默认模式是什么？",
            options: [
                "同步复制",
                "异步复制",
                "半同步复制",
                "不复制"
            ],
            answer: 1,
            rationale: "Pulsar 地理复制默认是异步的，Producer 写入本地集群后立即返回，消息异步复制到其他集群。"
        },
        {
            id: "pulsar-w10-1-q2",
            question: "复制游标（Replication Cursor）的作用是什么？",
            options: [
                "加密消息",
                "跟踪已复制到远程集群的消息位置",
                "压缩消息",
                "路由消息"
            ],
            answer: 1,
            rationale: "复制游标跟踪已复制到该集群的消息位置，持久化确保故障恢复后继续复制。"
        },
        {
            id: "pulsar-w10-1-q3",
            question: "全局 ZooKeeper 在地理复制中的作用是什么？",
            options: [
                "存储消息数据",
                "存储跨集群配置和集群注册信息",
                "处理消息路由",
                "管理 Consumer"
            ],
            answer: 1,
            rationale: "全局 ZooKeeper 存储跨集群配置，包括集群注册信息和全局命名空间配置。"
        },
        {
            id: "pulsar-w10-1-q4",
            question: "影响复制延迟的主要因素是什么？",
            options: [
                "消息格式",
                "网络延迟（主要因素）、带宽、消息大小",
                "Schema 类型",
                "压缩算法"
            ],
            answer: 1,
            rationale: "复制延迟主要取决于网络延迟、网络带宽、消息大小和目标集群处理能力。"
        },
        {
            id: "pulsar-w10-1-q5",
            question: "Pulsar 如何避免双向复制时的消息循环？",
            options: [
                "禁止双向复制",
                "通过 replicatedFrom 属性标记消息来源，过滤来自自身的消息",
                "使用消息 ID 去重",
                "限制复制次数"
            ],
            answer: 1,
            rationale: "Pulsar 通过 replicatedFrom 属性标记消息来源，自动过滤来自自身集群的消息，避免循环复制。"
        },
        {
            id: "pulsar-w10-1-q6",
            question: "异步复制对数据一致性有什么影响？",
            options: [
                "强一致性",
                "不同集群数据可能短暂不一致（最终一致）",
                "完全一致",
                "不影响一致性"
            ],
            answer: 1,
            rationale: "异步复制意味着不同集群的数据可能短暂不一致，是最终一致性模型。"
        },
        {
            id: "pulsar-w10-1-q7",
            question: "网络分区期间复制会怎样？",
            options: [
                "消息丢失",
                "复制暂停，消息在本地集群积压",
                "自动切换到同步复制",
                "停止接受新消息"
            ],
            answer: 1,
            rationale: "网络分区期间复制会暂停，消息在本地集群积压。恢复后会补发积压消息。"
        },
        {
            id: "pulsar-w10-1-q8",
            question: "如何查看复制游标位置和复制延迟？",
            options: [
                "查看日志",
                "pulsar-admin topics stats",
                "pulsar-admin clusters list",
                "查看配置文件"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin topics stats 可以查看 replicators 部分，包含复制游标位置和延迟信息。"
        },
        {
            id: "pulsar-w10-1-q9",
            question: "异步复制相比同步复制的优势是什么？",
            options: [
                "数据更一致",
                "不受跨区域延迟影响，写入性能更高",
                "配置更简单",
                "更安全"
            ],
            answer: 1,
            rationale: "异步复制 Producer 写入本地后立即返回，避免跨区域延迟影响写入性能。"
        },
        {
            id: "pulsar-w10-1-q10",
            question: "跨集群去重为什么重要？",
            options: [
                "节省存储空间",
                "异步复制故障恢复时可能产生重复消息",
                "提高性能",
                "简化配置"
            ],
            answer: 1,
            rationale: "异步复制可能在故障恢复时产生重复消息，需要 Consumer 实现幂等处理或使用去重功能。"
        },
        {
            id: "pulsar-w10-1-q11",
            question: "复制延迟通常在什么级别？",
            options: [
                "微秒级",
                "毫秒到秒级",
                "分钟级",
                "小时级"
            ],
            answer: 1,
            rationale: "复制延迟通常在毫秒到秒级别，取决于网络条件和消息量。"
        },
        {
            id: "pulsar-w10-1-q12",
            question: "网络恢复后补发积压消息可能导致什么问题？",
            options: [
                "消息丢失",
                "短暂的高负载",
                "配置丢失",
                "Consumer 断开"
            ],
            answer: 1,
            rationale: "网络恢复后会补发积压消息，可能导致目标集群短暂的高负载。"
        }
    ],
    "pulsar-w10-2": [
        {
            id: "pulsar-w10-2-q1",
            question: "配置地理复制的第一步是什么？",
            options: [
                "配置 Namespace",
                "在全局 ZooKeeper 中注册所有集群",
                "创建 Topic",
                "配置 Producer"
            ],
            answer: 1,
            rationale: "配置地理复制的第一步是在全局 ZooKeeper 中注册所有集群的连接信息。"
        },
        {
            id: "pulsar-w10-2-q2",
            question: "如何在 Namespace 上配置复制策略？",
            options: [
                "pulsar-admin namespaces create",
                "pulsar-admin namespaces set-clusters",
                "pulsar-admin topics create",
                "pulsar-admin clusters create"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin namespaces set-clusters 指定 Namespace 复制的目标集群列表。"
        },
        {
            id: "pulsar-w10-2-q3",
            question: "修改 Namespace 的复制集群列表会什么时候生效？",
            options: [
                "需要重启 Broker",
                "立即生效",
                "下次创建 Topic 时",
                "24 小时后"
            ],
            answer: 1,
            rationale: "修改 Namespace 的复制集群列表会立即生效。添加新集群会开始复制，移除集群会停止复制。"
        },
        {
            id: "pulsar-w10-2-q4",
            question: "Topic 级别的复制配置与 Namespace 级别是什么关系？",
            options: [
                "完全独立",
                "Topic 级别可以覆盖 Namespace 的默认配置",
                "Namespace 优先",
                "不能同时配置"
            ],
            answer: 1,
            rationale: "Topic 级别的复制配置可以覆盖 Namespace 的默认配置，提供更细粒度的控制。"
        },
        {
            id: "pulsar-w10-2-q5",
            question: "如何限制单个 Topic 的复制带宽？",
            options: [
                "无法限制",
                "配置 replicatorDispatcherThrottlingRatePerTopicPerReplicator",
                "修改网络配置",
                "减少分区数"
            ],
            answer: 1,
            rationale: "可以配置 replicatorDispatcherThrottlingRatePerTopicPerReplicator 限制单个 Topic 的复制带宽。"
        },
        {
            id: "pulsar-w10-2-q6",
            question: "复制连接失败时会怎样？",
            options: [
                "消息丢失",
                "自动重试，期间消息积压",
                "停止接受新消息",
                "切换到同步复制"
            ],
            answer: 1,
            rationale: "复制连接失败会自动重试，但期间消息会在本地集群积压。"
        },
        {
            id: "pulsar-w10-2-q7",
            question: "跨集群 TLS 配置需要什么？",
            options: [
                "不需要特殊配置",
                "双方信任对方的证书",
                "只需要单向认证",
                "禁用 TLS"
            ],
            answer: 1,
            rationale: "跨集群 TLS 需要双方信任对方的证书，可以使用相同 CA 或配置信任对方的证书链。"
        },
        {
            id: "pulsar-w10-2-q8",
            question: "移除复制集群后已复制的消息会怎样？",
            options: [
                "被删除",
                "保留不变",
                "被归档",
                "被压缩"
            ],
            answer: 1,
            rationale: "移除复制集群会停止复制，但已复制到远程集群的消息不会被删除。"
        },
        {
            id: "pulsar-w10-2-q9",
            question: "如何验证复制连接状态？",
            options: [
                "查看日志",
                "pulsar-admin topics stats 查看 replicators 部分",
                "ping 命令",
                "telnet 命令"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin topics stats 可以查看 replicators 部分，了解复制连接状态。"
        },
        {
            id: "pulsar-w10-2-q10",
            question: "集群注册需要配置哪些连接信息？",
            options: [
                "只需要 IP 地址",
                "serviceUrl、serviceUrlTls、brokerServiceUrl 等",
                "只需要端口",
                "只需要域名"
            ],
            answer: 1,
            rationale: "集群注册需要配置 serviceUrl、serviceUrlTls、brokerServiceUrl 等完整的连接信息。"
        },
        {
            id: "pulsar-w10-2-q11",
            question: "如何注册远程集群信息？",
            options: [
                "pulsar-admin namespaces create",
                "pulsar-admin clusters create",
                "pulsar-admin topics create",
                "直接修改 ZooKeeper"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin clusters create 注册远程集群信息到全局 ZooKeeper。"
        },
        {
            id: "pulsar-w10-2-q12",
            question: "全局配置和本地配置分别存储在哪里？",
            options: [
                "都在本地 ZooKeeper",
                "全局配置在全局 ZK，本地配置在本地 ZK",
                "都在全局 ZooKeeper",
                "存储在 BookKeeper"
            ],
            answer: 1,
            rationale: "全局 ZooKeeper 存储跨集群配置，本地 ZooKeeper 存储集群内部配置。"
        }
    ],
    "pulsar-w10-3": [
        {
            id: "pulsar-w10-3-q1",
            question: "全网格复制（Full-mesh）的特点是什么？",
            options: [
                "单向复制",
                "所有集群之间双向复制",
                "只复制到一个集群",
                "不复制"
            ],
            answer: 1,
            rationale: "全网格复制是所有集群之间双向复制，每个集群的消息都会复制到所有其他集群。"
        },
        {
            id: "pulsar-w10-3-q2",
            question: "聚合复制（Aggregation）适用于什么场景？",
            options: [
                "全球数据同步",
                "收集分散数据到中心处理",
                "灾备",
                "负载均衡"
            ],
            answer: 1,
            rationale: "聚合复制是多个边缘集群单向复制到中心集群，适合收集分散数据到中心处理的场景。"
        },
        {
            id: "pulsar-w10-3-q3",
            question: "主备复制（Active-standby）的特点是什么？",
            options: [
                "双向复制",
                "主集群复制到备用集群，备用集群只读",
                "备用集群也接受写入",
                "无复制"
            ],
            answer: 1,
            rationale: "主备复制是主集群复制到备用集群，备用集群只读，用于灾备故障转移。"
        },
        {
            id: "pulsar-w10-3-q4",
            question: "什么是 RTO？",
            options: [
                "数据丢失量",
                "恢复时间目标",
                "复制延迟",
                "网络带宽"
            ],
            answer: 1,
            rationale: "RTO（Recovery Time Objective）是恢复时间目标，即故障后恢复服务所需的时间。"
        },
        {
            id: "pulsar-w10-3-q5",
            question: "什么是 RPO？",
            options: [
                "恢复时间目标",
                "恢复点目标（可接受的数据丢失量）",
                "网络延迟",
                "复制速率"
            ],
            answer: 1,
            rationale: "RPO（Recovery Point Objective）是恢复点目标，即故障时可接受丢失的数据量。"
        },
        {
            id: "pulsar-w10-3-q6",
            question: "异步复制对 RPO 有什么影响？",
            options: [
                "RPO 为零",
                "可能丢失未复制的消息",
                "不影响 RPO",
                "提高 RPO"
            ],
            answer: 1,
            rationale: "异步复制的 RPO 取决于复制延迟，故障时可能丢失未复制到远程集群的消息。"
        },
        {
            id: "pulsar-w10-3-q7",
            question: "什么是脑裂问题？",
            options: [
                "网络延迟",
                "网络分区时两个集群都认为自己是主集群并接受写入",
                "数据丢失",
                "配置错误"
            ],
            answer: 1,
            rationale: "脑裂是网络分区场景下，两个集群可能都认为自己是主集群并接受写入，导致数据分叉。"
        },
        {
            id: "pulsar-w10-3-q8",
            question: "如何实现自动故障转移？",
            options: [
                "无法自动",
                "客户端配置多集群和 failover 策略",
                "只能手动切换",
                "DNS 切换"
            ],
            answer: 1,
            rationale: "Pulsar 支持客户端配置多集群和 failover 策略，当主集群不可用时自动切换到备用集群。"
        },
        {
            id: "pulsar-w10-3-q9",
            question: "全网格复制的缺点是什么？",
            options: [
                "数据不一致",
                "网络带宽成本最高",
                "配置简单",
                "不支持故障转移"
            ],
            answer: 1,
            rationale: "全网格复制最灵活但成本最高，因为每条消息都要复制到所有集群，带宽消耗大。"
        },
        {
            id: "pulsar-w10-3-q10",
            question: "故障恢复后如何处理数据一致性？",
            options: [
                "自动合并",
                "可能需要业务层面决策合并或选择数据",
                "忽略不一致",
                "删除所有数据"
            ],
            answer: 1,
            rationale: "故障恢复后可能需要合并分区期间两边的写入，这需要业务层面的决策。"
        },
        {
            id: "pulsar-w10-3-q11",
            question: "选择复制模式需要考虑哪些因素？",
            options: [
                "只考虑成本",
                "数据一致性要求、带宽成本、故障转移需求、运维复杂度",
                "只考虑性能",
                "只考虑安全性"
            ],
            answer: 1,
            rationale: "选择复制模式需要综合考虑数据一致性要求、网络带宽成本、故障转移需求和运维复杂度。"
        },
        {
            id: "pulsar-w10-3-q12",
            question: "手动故障转移可以通过什么方式实现？",
            options: [
                "重启 Broker",
                "DNS 切换、负载均衡器配置等",
                "修改代码",
                "删除集群"
            ],
            answer: 1,
            rationale: "手动故障转移可以通过 DNS 切换、负载均衡器配置等方式实现，对应用透明。"
        }
    ]
}
