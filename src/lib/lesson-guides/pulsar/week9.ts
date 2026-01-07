import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "pulsar-w9-1": {
        lessonId: "pulsar-w9-1",
        background: [
            "【PulsarClient 配置】官方文档：PulsarClient 是客户端入口，管理连接池和线程资源。合理配置可以显著提高性能，避免资源浪费。",
            "【IO 线程配置】ioThreads 配置控制用于处理网络 IO 的线程数。默认值为 CPU 核心数，高吞吐场景可适当增加。",
            "【Listener 线程配置】listenerThreads 配置 Consumer 回调处理的线程数。如果回调处理耗时，需要增加线程数避免阻塞消息接收。",
            "【连接池配置】connectionsPerBroker 配置到每个 Broker 的连接数。高吞吐场景需要更多连接，但过多会增加资源开销。",
            "【内存管理】memoryLimitBytes 配置客户端内存使用上限，包括 Pending 消息和缓存。超限时新发送会阻塞或失败。"
        ],
        keyDifficulties: [
            "【线程数与 CPU 的关系】IO 线程数一般不超过 CPU 核心数的 2 倍，过多会导致上下文切换开销。需要根据实际负载测试调整。",
            "【连接数与分区的关系】对于分区 Topic，每个分区可能使用独立连接。连接数不足会限制并行度，过多会浪费资源。",
            "【客户端复用】应该复用 PulsarClient 实例，避免频繁创建销毁。一个应用通常只需要一个 Client 实例。",
            "【异步回调阻塞问题】如果 Consumer 回调中有阻塞操作（如数据库写入），会阻塞整个 Listener 线程，影响其他消息接收。"
        ],
        handsOnPath: [
            "对比测试：不同 ioThreads 配置下的吞吐量变化。",
            "测试 connectionsPerBroker 对分区 Topic 发送性能的影响。",
            "模拟 Consumer 回调阻塞，观察 listenerThreads 配置的影响。",
            "使用 JMX 或 Prometheus 监控客户端的线程和连接使用情况。"
        ],
        selfCheck: [
            "PulsarClient 的 ioThreads 配置的作用是什么？默认值是多少？",
            "listenerThreads 和 ioThreads 有什么区别？",
            "为什么应该复用 PulsarClient 实例而不是频繁创建？",
            "connectionsPerBroker 配置对性能有什么影响？",
            "Consumer 回调阻塞会导致什么问题？如何解决？"
        ],
        extensions: [
            "研究 Pulsar 客户端的 Netty 配置，了解底层网络参数调优。",
            "探索客户端的监控指标，了解如何识别性能瓶颈。",
            "学习如何配置客户端的重连策略和故障转移。",
            "研究 Pulsar 客户端在容器环境中的资源限制配置。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/client-libraries-java/#client-configuration",
            "https://pulsar.apache.org/docs/client-libraries-java/#performance-tuning"
        ]
    },
    "pulsar-w9-2": {
        lessonId: "pulsar-w9-2",
        background: [
            "【receiverQueueSize】官方文档：Consumer 预取队列大小，决定了客户端提前缓存多少消息。默认 1000，增大可提高吞吐但增加内存使用。",
            "【跨分区队列控制】maxTotalReceiverQueueSizeAcrossPartitions 限制跨所有分区的总队列大小，防止分区 Topic 消耗过多内存。",
            "【消费者并行度】对于分区 Topic，可以使用多个 Consumer 并行消费。并行度应该与分区数匹配，过多的 Consumer 会空转。",
            "【ACK 优化】cumulative ACK 比 individual ACK 更高效，因为只需发送一个 ACK 确认之前的所有消息。Exclusive/Failover 订阅应使用 cumulative ACK。",
            "【批量接收】使用 batchReceive() 方法可以一次获取多条消息，减少方法调用开销，提高吞吐量。"
        ],
        keyDifficulties: [
            "【预取与延迟的权衡】receiverQueueSize 越大，预取越多，吞吐越高，但消息在客户端等待时间增加，处理延迟增大。低延迟场景应减小。",
            "【Shared 订阅的 ACK 限制】Shared 订阅只能使用 individual ACK，因为消息分发给不同 Consumer，无法累积确认。",
            "【消费者数与分区数匹配】理想情况下每个分区由一个 Consumer 处理。Consumer 少于分区会降低并行度，多于分区会有 Consumer 空闲。",
            "【negativeAcknowledge 性能影响】频繁 nack 会导致消息反复重投，影响整体吞吐。应该减少消费失败率或使用死信 Topic。"
        ],
        handsOnPath: [
            "对比测试：不同 receiverQueueSize 配置下的吞吐量和消息延迟。",
            "创建 8 分区 Topic，分别使用 4 个和 16 个 Consumer 消费，观察并行度差异。",
            "测试 batchReceive 和单条 receive 的性能差异。",
            "对比 Exclusive 订阅使用 cumulative ACK 和 individual ACK 的性能。"
        ],
        selfCheck: [
            "receiverQueueSize 配置的作用是什么？设置过大有什么影响？",
            "为什么 Consumer 数应该与分区数匹配？",
            "cumulative ACK 和 individual ACK 有什么区别？哪种更高效？",
            "Shared 订阅为什么只能使用 individual ACK？",
            "batchReceive 如何提高消费性能？"
        ],
        extensions: [
            "研究 Consumer 的 deadLetterPolicy 配置，了解如何优化失败消息处理。",
            "探索 Consumer 的自动负载均衡机制。",
            "学习如何使用 Consumer interceptor 实现消费监控。",
            "研究 Consumer 的 seek 和 reset 操作对性能的影响。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/client-libraries-java/#consumer",
            "https://pulsar.apache.org/docs/client-libraries-java/#receiver-queue-size"
        ]
    },
    "pulsar-w9-3": {
        lessonId: "pulsar-w9-3",
        background: [
            "【Managed Ledger 缓存】官方文档：managedLedgerCacheSizeMB 配置 Broker 的 Ledger 缓存大小。缓存命中可避免从 BookKeeper 读取，显著提高性能。",
            "【分发批次大小】dispatcherMaxReadBatchSize 配置从 Ledger 读取的批次大小。增大可提高吞吐，但会增加内存使用。",
            "【JVM 调优】Broker 是 Java 应用，需要合理配置堆内存大小和 GC 算法。推荐使用 G1 或 ZGC 减少停顿。",
            "【BookKeeper 写入优化】Journal 和 Ledger 应该使用独立的磁盘或 SSD，避免 IO 竞争。Journal 对延迟敏感，建议使用 NVMe。",
            "【负载均衡配置】loadBalancerEnabled 启用自动负载均衡，loadBalancerSheddingIntervalMinutes 配置重平衡检查间隔。"
        ],
        keyDifficulties: [
            "【缓存大小与内存的平衡】缓存越大命中率越高，但会占用 JVM 堆内存，可能导致 GC 问题。需要监控缓存命中率和 GC 情况。",
            "【GC 调优关键点】避免 Full GC 是关键。合理设置堆大小，使用低停顿 GC（G1/ZGC），监控 GC 日志识别问题。",
            "【热点 Topic 处理】某些 Topic 访问量很大会成为热点。可以增加分区、启用负载均衡卸载、或使用 Bundle 分割。",
            "【IO 瓶颈识别】使用 iostat 等工具监控磁盘 IO。如果 await 时间高，说明 IO 是瓶颈，需要升级存储或增加节点。"
        ],
        handsOnPath: [
            "调整 managedLedgerCacheSizeMB，观察缓存命中率和读取延迟变化。",
            "配置 G1 GC 参数，监控 GC 日志分析停顿时间。",
            "使用 pulsar-admin broker-stats 查看 Broker 的性能指标。",
            "模拟热点 Topic，测试负载均衡的自动卸载效果。"
        ],
        selfCheck: [
            "Broker 的 Managed Ledger 缓存有什么作用？如何配置？",
            "为什么建议 Journal 和 Ledger 使用独立磁盘？",
            "Broker JVM 调优的关键点是什么？推荐使用什么 GC 算法？",
            "如何识别和处理热点 Topic？",
            "如何监控 Broker 的性能指标？有哪些关键指标？"
        ],
        extensions: [
            "研究 BookKeeper 的性能调优配置，如 journalWriteBufferSizeKB。",
            "探索 Pulsar 的性能测试工具 pulsar-perf 的使用。",
            "学习如何配置 Broker 的限流策略保护集群。",
            "研究 Kubernetes 环境下的 Pulsar 性能调优。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/reference-configuration/#broker",
            "https://pulsar.apache.org/docs/performance-pulsar-perf/"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w9-1": [
        {
            id: "pulsar-w9-1-q1",
            question: "PulsarClient 的 ioThreads 配置的作用是什么？",
            options: [
                "控制 Consumer 回调线程数",
                "控制网络 IO 处理线程数",
                "控制批量发送线程数",
                "控制压缩线程数"
            ],
            answer: 1,
            rationale: "ioThreads 配置控制用于处理网络 IO 的线程数，默认值为 CPU 核心数。"
        },
        {
            id: "pulsar-w9-1-q2",
            question: "listenerThreads 配置的作用是什么？",
            options: [
                "处理网络 IO",
                "处理 Consumer 回调",
                "处理批量发送",
                "处理消息压缩"
            ],
            answer: 1,
            rationale: "listenerThreads 配置 Consumer 回调处理的线程数。如果回调处理耗时，需要增加线程数。"
        },
        {
            id: "pulsar-w9-1-q3",
            question: "为什么应该复用 PulsarClient 实例？",
            options: [
                "节省配置时间",
                "避免频繁创建销毁带来的资源开销",
                "必须这样做",
                "提高代码可读性"
            ],
            answer: 1,
            rationale: "PulsarClient 管理连接池和线程资源，频繁创建销毁会带来较大的资源开销。"
        },
        {
            id: "pulsar-w9-1-q4",
            question: "connectionsPerBroker 配置的作用是什么？",
            options: [
                "限制 Topic 数量",
                "配置到每个 Broker 的连接数",
                "配置重试次数",
                "配置超时时间"
            ],
            answer: 1,
            rationale: "connectionsPerBroker 配置到每个 Broker 的连接数，高吞吐场景需要更多连接。"
        },
        {
            id: "pulsar-w9-1-q5",
            question: "Consumer 回调阻塞会导致什么问题？",
            options: [
                "消息丢失",
                "阻塞整个 Listener 线程，影响其他消息接收",
                "Broker 崩溃",
                "连接断开"
            ],
            answer: 1,
            rationale: "如果回调中有阻塞操作，会阻塞整个 Listener 线程，影响其他消息的接收。"
        },
        {
            id: "pulsar-w9-1-q6",
            question: "ioThreads 的默认值是多少？",
            options: [
                "1",
                "CPU 核心数",
                "10",
                "无限制"
            ],
            answer: 1,
            rationale: "ioThreads 默认值为 CPU 核心数，可以根据实际负载调整。"
        },
        {
            id: "pulsar-w9-1-q7",
            question: "memoryLimitBytes 配置的作用是什么？",
            options: [
                "限制消息大小",
                "限制客户端内存使用上限",
                "限制连接数",
                "限制线程数"
            ],
            answer: 1,
            rationale: "memoryLimitBytes 配置客户端内存使用上限，包括 Pending 消息和缓存。超限时新发送会阻塞或失败。"
        },
        {
            id: "pulsar-w9-1-q8",
            question: "IO 线程数设置过多会导致什么问题？",
            options: [
                "内存不足",
                "上下文切换开销增加",
                "连接断开",
                "消息丢失"
            ],
            answer: 1,
            rationale: "IO 线程数一般不超过 CPU 核心数的 2 倍，过多会导致上下文切换开销增加。"
        },
        {
            id: "pulsar-w9-1-q9",
            question: "如何解决 Consumer 回调阻塞问题？",
            options: [
                "增加 ioThreads",
                "增加 listenerThreads 或将阻塞操作异步化",
                "减少消息大小",
                "增加分区数"
            ],
            answer: 1,
            rationale: "可以增加 listenerThreads 数量，或者将回调中的阻塞操作（如数据库写入）异步化。"
        },
        {
            id: "pulsar-w9-1-q10",
            question: "一个应用通常需要多少个 PulsarClient 实例？",
            options: [
                "每个 Topic 一个",
                "每个线程一个",
                "通常只需要一个",
                "越多越好"
            ],
            answer: 2,
            rationale: "一个应用通常只需要一个 PulsarClient 实例，可以创建多个 Producer 和 Consumer。"
        },
        {
            id: "pulsar-w9-1-q11",
            question: "对于分区 Topic，连接数不足会导致什么问题？",
            options: [
                "消息丢失",
                "限制并行度，降低吞吐量",
                "Topic 不可用",
                "自动增加分区"
            ],
            answer: 1,
            rationale: "对于分区 Topic，每个分区可能使用独立连接。连接数不足会限制并行度，降低吞吐量。"
        },
        {
            id: "pulsar-w9-1-q12",
            question: "如何监控客户端的资源使用情况？",
            options: [
                "只能查看日志",
                "使用 JMX 或 Prometheus 监控",
                "无法监控",
                "重启后查看"
            ],
            answer: 1,
            rationale: "可以使用 JMX 或 Prometheus 监控客户端的线程、连接、内存使用等情况。"
        }
    ],
    "pulsar-w9-2": [
        {
            id: "pulsar-w9-2-q1",
            question: "receiverQueueSize 配置的作用是什么？",
            options: [
                "发送队列大小",
                "Consumer 预取队列大小",
                "重试队列大小",
                "死信队列大小"
            ],
            answer: 1,
            rationale: "receiverQueueSize 配置 Consumer 预取队列大小，决定了客户端提前缓存多少消息。"
        },
        {
            id: "pulsar-w9-2-q2",
            question: "receiverQueueSize 的默认值是多少？",
            options: [
                "100",
                "500",
                "1000",
                "10000"
            ],
            answer: 2,
            rationale: "receiverQueueSize 默认值为 1000。"
        },
        {
            id: "pulsar-w9-2-q3",
            question: "receiverQueueSize 设置过大有什么影响？",
            options: [
                "消息丢失",
                "内存使用增加，消息处理延迟增大",
                "Broker 负载增加",
                "消费速度下降"
            ],
            answer: 1,
            rationale: "预取队列越大，内存使用越多，消息在客户端等待时间增加，处理延迟增大。"
        },
        {
            id: "pulsar-w9-2-q4",
            question: "为什么 Consumer 数应该与分区数匹配？",
            options: [
                "Pulsar 强制要求",
                "Consumer 少会降低并行度，多会有空闲 Consumer",
                "否则无法消费",
                "节省资源"
            ],
            answer: 1,
            rationale: "理想情况下每个分区由一个 Consumer 处理。Consumer 少于分区会降低并行度，多于分区会有空闲。"
        },
        {
            id: "pulsar-w9-2-q5",
            question: "cumulative ACK 比 individual ACK 高效的原因是什么？",
            options: [
                "压缩 ACK 消息",
                "只需发送一个 ACK 确认之前所有消息",
                "不需要网络传输",
                "Broker 端优化"
            ],
            answer: 1,
            rationale: "cumulative ACK 只需发送一个 ACK 就能确认之前的所有消息，减少 ACK 消息数量。"
        },
        {
            id: "pulsar-w9-2-q6",
            question: "Shared 订阅为什么只能使用 individual ACK？",
            options: [
                "性能更好",
                "消息分发给不同 Consumer，无法累积确认",
                "Pulsar 限制",
                "简化实现"
            ],
            answer: 1,
            rationale: "Shared 订阅的消息分发给不同 Consumer，每个 Consumer 只能确认自己收到的消息，无法累积确认。"
        },
        {
            id: "pulsar-w9-2-q7",
            question: "batchReceive 方法的优势是什么？",
            options: [
                "减少内存使用",
                "减少方法调用开销，提高吞吐量",
                "保证消息顺序",
                "支持事务"
            ],
            answer: 1,
            rationale: "batchReceive 一次获取多条消息，减少方法调用开销，提高吞吐量。"
        },
        {
            id: "pulsar-w9-2-q8",
            question: "maxTotalReceiverQueueSizeAcrossPartitions 配置的作用是什么？",
            options: [
                "限制单个分区的队列大小",
                "限制跨所有分区的总队列大小",
                "限制 Consumer 数量",
                "限制消息大小"
            ],
            answer: 1,
            rationale: "该配置限制跨所有分区的总队列大小，防止分区 Topic 消耗过多内存。"
        },
        {
            id: "pulsar-w9-2-q9",
            question: "频繁 negativeAcknowledge 会导致什么问题？",
            options: [
                "消息丢失",
                "消息反复重投，影响整体吞吐",
                "Broker 崩溃",
                "Consumer 断开"
            ],
            answer: 1,
            rationale: "频繁 nack 会导致消息反复重投，占用资源，影响整体吞吐。应减少失败率或使用死信 Topic。"
        },
        {
            id: "pulsar-w9-2-q10",
            question: "Exclusive/Failover 订阅应使用哪种 ACK 方式？",
            options: [
                "individual ACK",
                "cumulative ACK",
                "两种都可以",
                "不需要 ACK"
            ],
            answer: 1,
            rationale: "Exclusive/Failover 订阅消息按顺序发送给单个 Consumer，应使用 cumulative ACK 提高效率。"
        },
        {
            id: "pulsar-w9-2-q11",
            question: "低延迟场景应该如何设置 receiverQueueSize？",
            options: [
                "设置很大",
                "设置较小",
                "使用默认值",
                "设置为 0"
            ],
            answer: 1,
            rationale: "低延迟场景应减小 receiverQueueSize，减少消息在客户端的等待时间。"
        },
        {
            id: "pulsar-w9-2-q12",
            question: "如何提高分区 Topic 的消费并行度？",
            options: [
                "增加 receiverQueueSize",
                "增加 Consumer 数（不超过分区数）",
                "使用 cumulative ACK",
                "减少批量大小"
            ],
            answer: 1,
            rationale: "增加 Consumer 数（但不超过分区数）可以提高并行度，每个分区由独立 Consumer 处理。"
        }
    ],
    "pulsar-w9-3": [
        {
            id: "pulsar-w9-3-q1",
            question: "Broker 的 Managed Ledger 缓存的作用是什么？",
            options: [
                "存储元数据",
                "缓存消息避免从 BookKeeper 读取",
                "压缩消息",
                "加密消息"
            ],
            answer: 1,
            rationale: "Managed Ledger 缓存可以避免从 BookKeeper 读取，显著提高读取性能。"
        },
        {
            id: "pulsar-w9-3-q2",
            question: "为什么建议 Journal 和 Ledger 使用独立磁盘？",
            options: [
                "便于备份",
                "避免 IO 竞争，Journal 对延迟敏感",
                "简化配置",
                "Pulsar 强制要求"
            ],
            answer: 1,
            rationale: "Journal 和 Ledger 有不同的 IO 模式，使用独立磁盘避免 IO 竞争。Journal 对延迟敏感，建议使用 SSD/NVMe。"
        },
        {
            id: "pulsar-w9-3-q3",
            question: "Broker JVM 推荐使用什么 GC 算法？",
            options: [
                "Serial GC",
                "Parallel GC",
                "G1 或 ZGC",
                "CMS"
            ],
            answer: 2,
            rationale: "推荐使用 G1 或 ZGC 等低停顿 GC 算法，减少 GC 停顿对服务的影响。"
        },
        {
            id: "pulsar-w9-3-q4",
            question: "dispatcherMaxReadBatchSize 配置的作用是什么？",
            options: [
                "发送批次大小",
                "从 Ledger 读取的批次大小",
                "压缩批次大小",
                "ACK 批次大小"
            ],
            answer: 1,
            rationale: "dispatcherMaxReadBatchSize 配置从 Ledger 读取的批次大小，增大可提高吞吐。"
        },
        {
            id: "pulsar-w9-3-q5",
            question: "如何处理热点 Topic？",
            options: [
                "删除 Topic",
                "增加分区、启用负载均衡卸载、Bundle 分割",
                "限制访问",
                "禁用缓存"
            ],
            answer: 1,
            rationale: "热点 Topic 可以通过增加分区、启用负载均衡卸载、或使用 Bundle 分割来分散负载。"
        },
        {
            id: "pulsar-w9-3-q6",
            question: "Broker 的缓存大小设置过大有什么问题？",
            options: [
                "缓存命中率下降",
                "占用 JVM 堆内存，可能导致 GC 问题",
                "Broker 启动变慢",
                "消息延迟增加"
            ],
            answer: 1,
            rationale: "缓存越大命中率越高，但会占用 JVM 堆内存，可能导致 GC 问题。需要权衡。"
        },
        {
            id: "pulsar-w9-3-q7",
            question: "如何识别 IO 是否是性能瓶颈？",
            options: [
                "查看 CPU 使用率",
                "使用 iostat 等工具查看 await 时间",
                "查看内存使用",
                "查看网络流量"
            ],
            answer: 1,
            rationale: "使用 iostat 等工具监控磁盘 IO，如果 await 时间高，说明 IO 是瓶颈。"
        },
        {
            id: "pulsar-w9-3-q8",
            question: "loadBalancerEnabled 配置的作用是什么？",
            options: [
                "启用消息压缩",
                "启用自动负载均衡",
                "启用消息加密",
                "启用消息去重"
            ],
            answer: 1,
            rationale: "loadBalancerEnabled 启用 Broker 间的自动负载均衡，自动迁移 Topic 平衡负载。"
        },
        {
            id: "pulsar-w9-3-q9",
            question: "Broker JVM 调优的关键点是什么？",
            options: [
                "增加线程数",
                "避免 Full GC",
                "减少内存使用",
                "增加连接数"
            ],
            answer: 1,
            rationale: "避免 Full GC 是 JVM 调优的关键，Full GC 会导致服务长时间停顿。"
        },
        {
            id: "pulsar-w9-3-q10",
            question: "如何查看 Broker 的性能指标？",
            options: [
                "查看日志",
                "使用 pulsar-admin broker-stats",
                "重启 Broker",
                "查看配置文件"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin broker-stats 可以查看 Broker 的性能指标，包括负载、连接、Topic 等。"
        },
        {
            id: "pulsar-w9-3-q11",
            question: "Bundle 分割的作用是什么？",
            options: [
                "压缩消息",
                "将热点 Namespace 的 Topic 分散到更多 Broker",
                "加密消息",
                "备份数据"
            ],
            answer: 1,
            rationale: "Bundle 分割可以将一个 Bundle 中的 Topic 分散到更多 Broker，缓解热点问题。"
        },
        {
            id: "pulsar-w9-3-q12",
            question: "Pulsar 提供什么性能测试工具？",
            options: [
                "pulsar-test",
                "pulsar-perf",
                "pulsar-benchmark",
                "pulsar-load"
            ],
            answer: 1,
            rationale: "Pulsar 提供 pulsar-perf 工具进行性能测试，可以测试生产和消费的吞吐量、延迟等。"
        }
    ]
}
