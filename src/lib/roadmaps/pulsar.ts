import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const pulsarStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：Pulsar 基础（第 1-3 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "pulsar-foundation",
    title: "阶段一：Pulsar 基础",
    duration: "第 1-3 周",
    goal: "理解 Apache Pulsar 的核心概念、架构设计与独特优势，掌握基本的消息收发操作。",
    weeks: [
      {
        id: "pulsar-w1",
        title: "第 1 周：Pulsar 概述与架构",
        summary: "理解 Pulsar 的设计理念、核心组件与独特的计算存储分离架构。",
        keyPoints: [
          "Pulsar 是云原生分布式消息流平台，原生支持多租户。",
          "计算存储分离：Broker 无状态，BookKeeper 负责持久化。",
          "支持队列和流两种消费模式的统一消息模型。",
        ],
        lessons: [
          {
            id: "pulsar-w1-1",
            title: "为什么选择 Pulsar",
            detail: "理解 Pulsar 相比 Kafka、RabbitMQ 的独特优势与适用场景。",
            keyPoints: [
              "云原生架构：计算存储分离，独立扩展。",
              "多租户原生支持：Tenant → Namespace → Topic 层级隔离。",
              "统一消息模型：同时支持队列语义和流语义。",
            ],
            resources: [
              { title: "Apache Pulsar Overview", url: "https://pulsar.apache.org/docs/concepts-overview/" },
              { title: "Pulsar vs Kafka", url: "https://pulsar.apache.org/docs/concepts-pulsar-vs-kafka/" },
              { title: "Why Pulsar", url: "https://streamnative.io/blog/why-apache-pulsar" },
            ],
          },
          {
            id: "pulsar-w1-2",
            title: "Pulsar 架构概览",
            detail: "理解 Pulsar 的分层架构与核心组件职责。",
            keyPoints: [
              "Broker：无状态服务层，处理消息路由和协议。",
              "BookKeeper：分布式日志存储，提供持久化保证。",
              "ZooKeeper：元数据存储与服务发现（未来将可选）。",
            ],
            resources: [
              { title: "Pulsar Architecture", url: "https://pulsar.apache.org/docs/concepts-architecture-overview/" },
              { title: "BookKeeper in Pulsar", url: "https://pulsar.apache.org/docs/concepts-architecture-overview/#apache-bookkeeper" },
              { title: "Pulsar Components", url: "https://streamnative.io/blog/apache-pulsar-architecture-designing-for-streaming-workloads-and-scaling" },
            ],
          },
          {
            id: "pulsar-w1-3",
            title: "计算存储分离",
            detail: "深入理解 Pulsar 计算存储分离的设计与优势。",
            keyPoints: [
              "Broker 无状态：可快速扩缩容，故障恢复简单。",
              "BookKeeper 独立扩展：存储层按需增加容量。",
              "分层存储：热数据在 BookKeeper，冷数据自动卸载到对象存储。",
            ],
            resources: [
              { title: "Tiered Storage", url: "https://pulsar.apache.org/docs/tiered-storage-overview/" },
              { title: "Segment-Centric Storage", url: "https://streamnative.io/blog/segment-centric-storage-architecture-for-apache-pulsar" },
              { title: "Storage Architecture", url: "https://pulsar.apache.org/docs/concepts-architecture-overview/#persistent-storage" },
            ],
          },
        ],
      },
      {
        id: "pulsar-w2",
        title: "第 2 周：核心概念",
        summary: "掌握 Pulsar 的核心抽象概念：租户、命名空间、Topic 与消息模型。",
        keyPoints: [
          "多租户层级：Tenant → Namespace → Topic 实现资源隔离。",
          "Topic 是消息的逻辑通道，支持分区与持久化/非持久化模式。",
          "消息包含 Payload、Key、Properties、Event Time 等属性。",
        ],
        lessons: [
          {
            id: "pulsar-w2-1",
            title: "多租户与命名空间",
            detail: "理解 Pulsar 的多租户架构与资源隔离机制。",
            keyPoints: [
              "Tenant：顶层隔离单元，对应组织或团队。",
              "Namespace：租户下的逻辑分组，配置策略的最小单元。",
              "Topic 全名：persistent://tenant/namespace/topic。",
            ],
            resources: [
              { title: "Tenants and Namespaces", url: "https://pulsar.apache.org/docs/concepts-multi-tenancy/" },
              { title: "Namespace Policies", url: "https://pulsar.apache.org/docs/admin-api-namespaces/" },
              { title: "Multi-tenancy Best Practices", url: "https://streamnative.io/blog/multi-tenancy-in-pulsar" },
            ],
          },
          {
            id: "pulsar-w2-2",
            title: "Topic 与分区",
            detail: "掌握 Topic 的类型与分区机制。",
            keyPoints: [
              "持久化 Topic：消息持久化到 BookKeeper。",
              "非持久化 Topic：消息仅存于内存，高性能低延迟。",
              "分区 Topic：逻辑上一个 Topic，物理上多个分区并行。",
            ],
            resources: [
              { title: "Topics", url: "https://pulsar.apache.org/docs/concepts-messaging/#topics" },
              { title: "Partitioned Topics", url: "https://pulsar.apache.org/docs/concepts-messaging/#partitioned-topics" },
              { title: "Non-persistent Topics", url: "https://pulsar.apache.org/docs/concepts-messaging/#non-persistent-topics" },
            ],
          },
          {
            id: "pulsar-w2-3",
            title: "消息模型",
            detail: "理解 Pulsar 消息的结构与属性。",
            keyPoints: [
              "Message ID：全局唯一标识，包含 ledgerId:entryId:partitionIndex。",
              "Properties：自定义键值对元数据。",
              "Event Time vs Publish Time：业务时间与发布时间。",
            ],
            resources: [
              { title: "Messages", url: "https://pulsar.apache.org/docs/concepts-messaging/#messages" },
              { title: "Message Redelivery", url: "https://pulsar.apache.org/docs/concepts-messaging/#message-redelivery" },
              { title: "Message Retention", url: "https://pulsar.apache.org/docs/concepts-messaging/#message-retention-and-expiry" },
            ],
          },
        ],
      },
      {
        id: "pulsar-w3",
        title: "第 3 周：快速上手",
        summary: "搭建 Pulsar 环境，实现第一个消息收发应用。",
        keyPoints: [
          "使用 Docker 或 Standalone 模式快速启动 Pulsar。",
          "pulsar-admin 是管理 Pulsar 的命令行工具。",
          "Java/Python/Go 等多语言客户端 SDK 可用。",
        ],
        lessons: [
          {
            id: "pulsar-w3-1",
            title: "环境搭建",
            detail: "使用 Docker 或 Standalone 模式部署 Pulsar。",
            keyPoints: [
              "Standalone：单进程包含所有组件，适合开发测试。",
              "Docker Compose：快速启动多组件集群。",
              "Kubernetes Helm Chart：生产级部署。",
            ],
            resources: [
              { title: "Standalone Cluster", url: "https://pulsar.apache.org/docs/getting-started-standalone/" },
              { title: "Docker Deployment", url: "https://pulsar.apache.org/docs/getting-started-docker/" },
              { title: "Helm Chart", url: "https://pulsar.apache.org/docs/helm-overview/" },
            ],
          },
          {
            id: "pulsar-w3-2",
            title: "pulsar-admin CLI",
            detail: "使用 pulsar-admin 管理租户、命名空间和 Topic。",
            keyPoints: [
              "tenants：创建、查看、配置租户。",
              "namespaces：管理命名空间策略。",
              "topics：创建 Topic、查看统计信息。",
            ],
            resources: [
              { title: "pulsar-admin", url: "https://pulsar.apache.org/docs/admin-api-overview/" },
              { title: "Tenants Admin", url: "https://pulsar.apache.org/docs/admin-api-tenants/" },
              { title: "Topics Admin", url: "https://pulsar.apache.org/docs/admin-api-topics/" },
            ],
          },
          {
            id: "pulsar-w3-3",
            title: "Producer 与 Consumer",
            detail: "使用客户端 SDK 实现消息生产和消费。",
            keyPoints: [
              "PulsarClient：客户端入口，管理连接池。",
              "Producer：发送消息，支持同步/异步模式。",
              "Consumer：接收消息，支持多种订阅类型。",
            ],
            resources: [
              { title: "Java Client", url: "https://pulsar.apache.org/docs/client-libraries-java/" },
              { title: "Python Client", url: "https://pulsar.apache.org/docs/client-libraries-python/" },
              { title: "Go Client", url: "https://pulsar.apache.org/docs/client-libraries-go/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：订阅与消息传递（第 4-6 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "pulsar-subscriptions",
    title: "阶段二：订阅与消息传递",
    duration: "第 4-6 周",
    goal: "深入理解 Pulsar 的订阅类型、消息传递保证与消费模式。",
    weeks: [
      {
        id: "pulsar-w4",
        title: "第 4 周：订阅类型",
        summary: "掌握 Pulsar 四种订阅类型及其适用场景。",
        keyPoints: [
          "Exclusive：独占订阅，只有一个消费者。",
          "Shared：共享订阅，消息轮询分发给多个消费者。",
          "Failover：故障转移订阅，主备消费者模式。",
          "Key_Shared：按 Key 分发，保证相同 Key 的消息顺序。",
        ],
        lessons: [
          {
            id: "pulsar-w4-1",
            title: "Exclusive 与 Failover",
            detail: "理解独占订阅与故障转移订阅的工作机制。",
            keyPoints: [
              "Exclusive：单消费者独占，保证严格顺序。",
              "Failover：主消费者处理所有消息，故障时备用接管。",
              "适用场景：需要严格顺序或简单主备的场景。",
            ],
            resources: [
              { title: "Exclusive Subscription", url: "https://pulsar.apache.org/docs/concepts-messaging/#exclusive" },
              { title: "Failover Subscription", url: "https://pulsar.apache.org/docs/concepts-messaging/#failover" },
              { title: "Subscription Types Explained", url: "https://streamnative.io/blog/pulsar-subscription-types-in-depth" },
            ],
          },
          {
            id: "pulsar-w4-2",
            title: "Shared 订阅",
            detail: "使用 Shared 订阅实现消息负载均衡。",
            keyPoints: [
              "Round-robin 分发：消息轮询分给多个消费者。",
              "无顺序保证：不同消费者可能并行处理。",
              "水平扩展：增加消费者提高吞吐。",
            ],
            resources: [
              { title: "Shared Subscription", url: "https://pulsar.apache.org/docs/concepts-messaging/#shared" },
              { title: "Scaling Consumers", url: "https://pulsar.apache.org/docs/concepts-messaging/#consumer" },
              { title: "Shared Mode Best Practices", url: "https://streamnative.io/blog/shared-subscription-mode" },
            ],
          },
          {
            id: "pulsar-w4-3",
            title: "Key_Shared 订阅",
            detail: "使用 Key_Shared 实现按 Key 的顺序消费。",
            keyPoints: [
              "相同 Key 的消息路由到同一消费者。",
              "哈希或自定义策略确定 Key 到消费者的映射。",
              "结合 Shared 的扩展性和顺序保证。",
            ],
            resources: [
              { title: "Key_Shared Subscription", url: "https://pulsar.apache.org/docs/concepts-messaging/#key_shared" },
              { title: "Key_Shared Modes", url: "https://pulsar.apache.org/docs/concepts-messaging/#key_shared" },
              { title: "Ordering with Key_Shared", url: "https://streamnative.io/blog/key-shared-subscription" },
            ],
          },
        ],
      },
      {
        id: "pulsar-w5",
        title: "第 5 周：消息传递保证",
        summary: "理解 Pulsar 的消息确认、重试与传递保证机制。",
        keyPoints: [
          "Pulsar 默认提供 At-least-once 传递保证。",
          "消息确认（ACK）机制确保消息被正确处理。",
          "死信 Topic 和重试 Topic 处理消费失败的消息。",
        ],
        lessons: [
          {
            id: "pulsar-w5-1",
            title: "消息确认机制",
            detail: "理解 Pulsar 的 ACK 机制与游标管理。",
            keyPoints: [
              "Individual ACK：逐条确认，支持乱序确认。",
              "Cumulative ACK：累积确认，确认之前所有消息。",
              "Cursor：跟踪每个订阅的消费进度。",
            ],
            resources: [
              { title: "Acknowledgment", url: "https://pulsar.apache.org/docs/concepts-messaging/#acknowledgment" },
              { title: "Cursor", url: "https://pulsar.apache.org/docs/concepts-architecture-overview/#cursors" },
              { title: "ACK Timeout", url: "https://pulsar.apache.org/docs/concepts-messaging/#acknowledgment-timeout" },
            ],
          },
          {
            id: "pulsar-w5-2",
            title: "消息重试与死信",
            detail: "配置消息重试策略与死信 Topic。",
            keyPoints: [
              "Negative ACK：拒绝消息，触发重新投递。",
              "重试 Topic：存放待重试的消息。",
              "死信 Topic（DLQ）：超过最大重试次数的消息。",
            ],
            resources: [
              { title: "Dead Letter Topic", url: "https://pulsar.apache.org/docs/concepts-messaging/#dead-letter-topic" },
              { title: "Retry Letter Topic", url: "https://pulsar.apache.org/docs/concepts-messaging/#retry-letter-topic" },
              { title: "Message Redelivery", url: "https://pulsar.apache.org/docs/concepts-messaging/#message-redelivery" },
            ],
          },
          {
            id: "pulsar-w5-3",
            title: "消息去重与幂等",
            detail: "实现消息去重与幂等消费。",
            keyPoints: [
              "Producer 去重：基于 Sequence ID 防止重复发送。",
              "Consumer 幂等：业务层保证处理幂等性。",
              "Message Deduplication：Broker 端自动去重。",
            ],
            resources: [
              { title: "Message Deduplication", url: "https://pulsar.apache.org/docs/concepts-messaging/#message-deduplication" },
              { title: "Sequence ID", url: "https://pulsar.apache.org/docs/concepts-messaging/#messages" },
              { title: "Idempotent Producer", url: "https://streamnative.io/blog/exactly-once-semantics-in-pulsar" },
            ],
          },
        ],
      },
      {
        id: "pulsar-w6",
        title: "第 6 周：高级消费模式",
        summary: "掌握 Reader、延迟消息与消息回溯等高级功能。",
        keyPoints: [
          "Reader 允许从任意位置读取消息，不影响订阅进度。",
          "延迟消息支持定时投递场景。",
          "消息回溯可以重新消费历史消息。",
        ],
        lessons: [
          {
            id: "pulsar-w6-1",
            title: "Reader 接口",
            detail: "使用 Reader 实现灵活的消息读取。",
            keyPoints: [
              "Reader 不创建订阅，不影响其他消费者。",
              "可从 Earliest、Latest 或指定 MessageId 开始。",
              "适用于重放、审计、调试等场景。",
            ],
            resources: [
              { title: "Reader Interface", url: "https://pulsar.apache.org/docs/concepts-messaging/#readers" },
              { title: "Reader API", url: "https://pulsar.apache.org/docs/client-libraries-java/#reader" },
              { title: "Reader vs Consumer", url: "https://streamnative.io/blog/reader-vs-consumer" },
            ],
          },
          {
            id: "pulsar-w6-2",
            title: "延迟消息",
            detail: "使用延迟消息实现定时任务与延迟投递。",
            keyPoints: [
              "deliverAt：指定精确投递时间。",
              "deliverAfter：指定延迟时长。",
              "Delayed Message Tracker 管理延迟消息。",
            ],
            resources: [
              { title: "Delayed Message Delivery", url: "https://pulsar.apache.org/docs/concepts-messaging/#delayed-message-delivery" },
              { title: "Delayed Messages API", url: "https://pulsar.apache.org/docs/client-libraries-java/#delayed-messages" },
              { title: "Delayed Message Implementation", url: "https://streamnative.io/blog/delayed-message-delivery-in-pulsar" },
            ],
          },
          {
            id: "pulsar-w6-3",
            title: "消息回溯与重放",
            detail: "使用 Seek 和 Reset 重新消费历史消息。",
            keyPoints: [
              "seek(MessageId)：跳转到指定消息。",
              "seek(timestamp)：跳转到指定时间点。",
              "resetCursor：重置订阅游标。",
            ],
            resources: [
              { title: "Seek", url: "https://pulsar.apache.org/docs/admin-api-topics/#skip-all-messages" },
              { title: "Reset Cursor", url: "https://pulsar.apache.org/docs/admin-api-topics/#reset-cursor" },
              { title: "Message Replay", url: "https://streamnative.io/blog/message-replay-in-pulsar" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：生产者与性能优化（第 7-9 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "pulsar-producer",
    title: "阶段三：生产者与性能优化",
    duration: "第 7-9 周",
    goal: "深入 Producer 配置与调优，掌握消息路由与批量发送策略。",
    weeks: [
      {
        id: "pulsar-w7",
        title: "第 7 周：Producer 深入",
        summary: "掌握 Producer 的配置选项与发送模式。",
        keyPoints: [
          "同步发送保证消息可靠性，异步发送提高吞吐。",
          "批量发送（Batching）减少网络开销。",
          "消息路由策略决定消息发往哪个分区。",
        ],
        lessons: [
          {
            id: "pulsar-w7-1",
            title: "同步与异步发送",
            detail: "理解同步和异步发送的区别与选择。",
            keyPoints: [
              "同步发送：等待 Broker 确认，延迟高但可靠。",
              "异步发送：立即返回，通过回调处理结果。",
              "sendTimeout：发送超时配置。",
            ],
            resources: [
              { title: "Producer Send", url: "https://pulsar.apache.org/docs/client-libraries-java/#producer" },
              { title: "Async Send", url: "https://pulsar.apache.org/docs/client-libraries-java/#configure-producer" },
              { title: "Error Handling", url: "https://streamnative.io/blog/producer-error-handling" },
            ],
          },
          {
            id: "pulsar-w7-2",
            title: "批量发送",
            detail: "配置批量发送提高吞吐量。",
            keyPoints: [
              "batchingEnabled：开启批量发送。",
              "batchingMaxBytes：批次最大字节数。",
              "batchingMaxMessages：批次最大消息数。",
              "batchingMaxPublishDelay：批次最大等待时间。",
            ],
            resources: [
              { title: "Batching", url: "https://pulsar.apache.org/docs/concepts-messaging/#batching" },
              { title: "Batching Config", url: "https://pulsar.apache.org/docs/client-libraries-java/#batching" },
              { title: "Batching Best Practices", url: "https://streamnative.io/blog/batching-in-pulsar" },
            ],
          },
          {
            id: "pulsar-w7-3",
            title: "消息路由",
            detail: "配置分区 Topic 的消息路由策略。",
            keyPoints: [
              "RoundRobin：轮询分发到各分区。",
              "SinglePartition：所有消息发往单个分区。",
              "CustomPartition：自定义路由逻辑。",
            ],
            resources: [
              { title: "Message Routing", url: "https://pulsar.apache.org/docs/concepts-messaging/#routing-modes" },
              { title: "Custom Router", url: "https://pulsar.apache.org/docs/client-libraries-java/#custom-message-router" },
              { title: "Partitioning Strategies", url: "https://streamnative.io/blog/partitioning-strategies" },
            ],
          },
        ],
      },
      {
        id: "pulsar-w8",
        title: "第 8 周：消息压缩与 Schema",
        summary: "使用消息压缩减少存储和网络开销，使用 Schema 确保数据一致性。",
        keyPoints: [
          "支持 LZ4、ZLIB、ZSTD、Snappy 等压缩算法。",
          "Schema Registry 管理消息结构与版本演进。",
          "Schema 兼容性策略确保生产者消费者协调。",
        ],
        lessons: [
          {
            id: "pulsar-w8-1",
            title: "消息压缩",
            detail: "配置消息压缩减少存储和传输成本。",
            keyPoints: [
              "compressionType：选择压缩算法。",
              "LZ4：速度快，压缩率适中。",
              "ZSTD：压缩率高，CPU 开销大。",
            ],
            resources: [
              { title: "Compression", url: "https://pulsar.apache.org/docs/concepts-messaging/#compression" },
              { title: "Compression Types", url: "https://pulsar.apache.org/docs/client-libraries-java/#compression" },
              { title: "Compression Comparison", url: "https://streamnative.io/blog/compression-in-pulsar" },
            ],
          },
          {
            id: "pulsar-w8-2",
            title: "Schema 基础",
            detail: "使用 Schema 定义消息结构。",
            keyPoints: [
              "Primitive Schema：基本类型（String、Int、Float 等）。",
              "Struct Schema：复杂类型（Avro、JSON、Protobuf）。",
              "Auto Schema：自动推断 Schema。",
            ],
            resources: [
              { title: "Schema Overview", url: "https://pulsar.apache.org/docs/schema-overview/" },
              { title: "Schema Types", url: "https://pulsar.apache.org/docs/schema-understand/" },
              { title: "Schema API", url: "https://pulsar.apache.org/docs/schema-get-started/" },
            ],
          },
          {
            id: "pulsar-w8-3",
            title: "Schema 演进与兼容性",
            detail: "管理 Schema 版本演进与兼容性策略。",
            keyPoints: [
              "BACKWARD：新 Schema 可读取旧消息。",
              "FORWARD：旧 Schema 可读取新消息。",
              "FULL：双向兼容。",
            ],
            resources: [
              { title: "Schema Evolution", url: "https://pulsar.apache.org/docs/schema-evolution-compatibility/" },
              { title: "Compatibility Strategies", url: "https://pulsar.apache.org/docs/schema-evolution-compatibility/#schema-compatibility-check-strategy" },
              { title: "Schema Versioning", url: "https://streamnative.io/blog/schema-evolution-in-pulsar" },
            ],
          },
        ],
      },
      {
        id: "pulsar-w9",
        title: "第 9 周：性能调优",
        summary: "优化 Pulsar 客户端和集群的性能配置。",
        keyPoints: [
          "客户端连接池和线程配置影响并发性能。",
          "内存管理影响消息处理效率。",
          "监控指标帮助识别性能瓶颈。",
        ],
        lessons: [
          {
            id: "pulsar-w9-1",
            title: "客户端优化",
            detail: "优化 PulsarClient 配置提高性能。",
            keyPoints: [
              "ioThreads：IO 线程数配置。",
              "listenerThreads：消费者监听线程数。",
              "connectionPoolSize：连接池大小。",
            ],
            resources: [
              { title: "Client Configuration", url: "https://pulsar.apache.org/docs/client-libraries-java/#client-configuration" },
              { title: "Performance Tuning", url: "https://pulsar.apache.org/docs/client-libraries-java/#performance-tuning" },
              { title: "Client Best Practices", url: "https://streamnative.io/blog/pulsar-client-best-practices" },
            ],
          },
          {
            id: "pulsar-w9-2",
            title: "Consumer 优化",
            detail: "优化 Consumer 配置提高消费吞吐。",
            keyPoints: [
              "receiverQueueSize：预取队列大小。",
              "maxTotalReceiverQueueSizeAcrossPartitions：跨分区总队列大小。",
              "消费者并发度与分区数匹配。",
            ],
            resources: [
              { title: "Consumer Config", url: "https://pulsar.apache.org/docs/client-libraries-java/#consumer" },
              { title: "Receiver Queue", url: "https://pulsar.apache.org/docs/client-libraries-java/#receiver-queue-size" },
              { title: "Consumer Tuning", url: "https://streamnative.io/blog/consumer-tuning" },
            ],
          },
          {
            id: "pulsar-w9-3",
            title: "Broker 优化",
            detail: "优化 Broker 配置提高集群性能。",
            keyPoints: [
              "managedLedgerCacheSize：Ledger 缓存大小。",
              "dispatcherMaxReadBatchSize：分发批次大小。",
              "JVM 调优：堆内存、GC 配置。",
            ],
            resources: [
              { title: "Broker Config", url: "https://pulsar.apache.org/docs/reference-configuration/#broker" },
              { title: "Performance Best Practices", url: "https://pulsar.apache.org/docs/performance-pulsar-perf/" },
              { title: "JVM Tuning", url: "https://streamnative.io/blog/jvm-tuning-for-pulsar" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：高级功能（第 10-12 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "pulsar-advanced",
    title: "阶段四：高级功能",
    duration: "第 10-12 周",
    goal: "掌握 Pulsar 的高级功能：地理复制、分层存储与事务支持。",
    weeks: [
      {
        id: "pulsar-w10",
        title: "第 10 周：地理复制",
        summary: "配置跨数据中心的消息复制，实现异地多活。",
        keyPoints: [
          "Geo-Replication 支持跨集群的异步消息复制。",
          "全网格复制：所有集群互相同步。",
          "复制策略可在 Namespace 或 Topic 级别配置。",
        ],
        lessons: [
          {
            id: "pulsar-w10-1",
            title: "地理复制原理",
            detail: "理解 Pulsar 地理复制的工作机制。",
            keyPoints: [
              "异步复制：Producer 写入本地集群后异步复制。",
              "复制游标：跟踪复制进度。",
              "复制延迟：取决于网络延迟和带宽。",
            ],
            resources: [
              { title: "Geo-Replication Overview", url: "https://pulsar.apache.org/docs/concepts-replication/" },
              { title: "Replication Architecture", url: "https://pulsar.apache.org/docs/concepts-replication/#replication-mechanisms" },
              { title: "Multi-Cluster Setup", url: "https://streamnative.io/blog/geo-replication-in-pulsar" },
            ],
          },
          {
            id: "pulsar-w10-2",
            title: "配置地理复制",
            detail: "配置跨集群的消息复制。",
            keyPoints: [
              "集群注册：在全局 ZooKeeper 注册集群。",
              "Namespace 策略：指定复制的目标集群。",
              "复制策略：同步、异步复制模式。",
            ],
            resources: [
              { title: "Configure Replication", url: "https://pulsar.apache.org/docs/administration-geo/" },
              { title: "Replication Policies", url: "https://pulsar.apache.org/docs/admin-api-namespaces/#set-replication-clusters" },
              { title: "Cross-Cluster Setup", url: "https://pulsar.apache.org/docs/administration-geo/#configure-replication" },
            ],
          },
          {
            id: "pulsar-w10-3",
            title: "复制模式与故障处理",
            detail: "选择复制模式与处理复制故障。",
            keyPoints: [
              "全网格：所有集群双向复制。",
              "聚合：多个边缘集群复制到中心集群。",
              "故障转移：自动或手动切换到备用集群。",
            ],
            resources: [
              { title: "Replication Patterns", url: "https://pulsar.apache.org/docs/concepts-replication/#replication-patterns" },
              { title: "Failover", url: "https://pulsar.apache.org/docs/concepts-replication/#failover" },
              { title: "Disaster Recovery", url: "https://streamnative.io/blog/disaster-recovery-with-pulsar" },
            ],
          },
        ],
      },
      {
        id: "pulsar-w11",
        title: "第 11 周：分层存储",
        summary: "使用分层存储实现冷热数据分离，降低存储成本。",
        keyPoints: [
          "分层存储将旧数据自动卸载到对象存储。",
          "支持 S3、GCS、Azure Blob 等对象存储。",
          "消费者可透明读取卸载的历史数据。",
        ],
        lessons: [
          {
            id: "pulsar-w11-1",
            title: "分层存储原理",
            detail: "理解 Pulsar 分层存储的工作机制。",
            keyPoints: [
              "Offloader：将 Ledger 从 BookKeeper 卸载到对象存储。",
              "透明读取：消费者无需感知数据位置。",
              "成本优化：冷数据使用低成本存储。",
            ],
            resources: [
              { title: "Tiered Storage Overview", url: "https://pulsar.apache.org/docs/tiered-storage-overview/" },
              { title: "Offload Policies", url: "https://pulsar.apache.org/docs/tiered-storage-overview/#when-to-use-tiered-storage" },
              { title: "Storage Architecture", url: "https://streamnative.io/blog/tiered-storage-in-pulsar" },
            ],
          },
          {
            id: "pulsar-w11-2",
            title: "配置分层存储",
            detail: "配置 S3/GCS/Azure 作为分层存储后端。",
            keyPoints: [
              "Offloader 配置：指定存储后端和凭证。",
              "触发策略：基于时间或大小触发卸载。",
              "Namespace 策略：按命名空间配置卸载规则。",
            ],
            resources: [
              { title: "S3 Offloader", url: "https://pulsar.apache.org/docs/tiered-storage-aws/" },
              { title: "GCS Offloader", url: "https://pulsar.apache.org/docs/tiered-storage-gcs/" },
              { title: "Azure Offloader", url: "https://pulsar.apache.org/docs/tiered-storage-azure/" },
            ],
          },
          {
            id: "pulsar-w11-3",
            title: "分层存储最佳实践",
            detail: "优化分层存储的配置与使用。",
            keyPoints: [
              "卸载时机：平衡存储成本与读取性能。",
              "保留策略：结合消息保留和分层存储策略。",
              "监控告警：监控卸载进度和读取延迟。",
            ],
            resources: [
              { title: "Offload Best Practices", url: "https://pulsar.apache.org/docs/tiered-storage-overview/#best-practices" },
              { title: "Retention with Tiered Storage", url: "https://pulsar.apache.org/docs/cookbooks-retention-expiry/" },
              { title: "Cost Optimization", url: "https://streamnative.io/blog/cost-optimization-with-tiered-storage" },
            ],
          },
        ],
      },
      {
        id: "pulsar-w12",
        title: "第 12 周：事务支持",
        summary: "使用 Pulsar 事务实现跨 Topic 的原子操作。",
        keyPoints: [
          "Pulsar 事务支持跨 Topic 的原子发送和确认。",
          "Transaction Coordinator 管理事务状态。",
          "事务保证 Exactly-once 语义。",
        ],
        lessons: [
          {
            id: "pulsar-w12-1",
            title: "事务原理",
            detail: "理解 Pulsar 事务的工作机制。",
            keyPoints: [
              "事务 ID：全局唯一标识一个事务。",
              "Transaction Coordinator：管理事务生命周期。",
              "两阶段提交：Prepare 和 Commit/Abort。",
            ],
            resources: [
              { title: "Transactions Overview", url: "https://pulsar.apache.org/docs/txn-what/" },
              { title: "Transaction Semantics", url: "https://pulsar.apache.org/docs/txn-why/" },
              { title: "Transaction Architecture", url: "https://streamnative.io/blog/transactions-in-pulsar" },
            ],
          },
          {
            id: "pulsar-w12-2",
            title: "使用事务 API",
            detail: "使用客户端 API 实现事务操作。",
            keyPoints: [
              "开启事务：client.newTransaction()。",
              "事务发送：producer.newMessage(txn)。",
              "事务确认：consumer.acknowledge(msg, txn)。",
              "提交/回滚：txn.commit() / txn.abort()。",
            ],
            resources: [
              { title: "Transaction API", url: "https://pulsar.apache.org/docs/txn-use/" },
              { title: "Java Transaction API", url: "https://pulsar.apache.org/docs/client-libraries-java/#transactions" },
              { title: "Transaction Examples", url: "https://streamnative.io/blog/transaction-api-examples" },
            ],
          },
          {
            id: "pulsar-w12-3",
            title: "事务配置与最佳实践",
            detail: "配置事务相关参数与使用最佳实践。",
            keyPoints: [
              "事务超时：设置合理的事务超时时间。",
              "事务隔离：读取已提交 vs 读取未提交。",
              "错误处理：事务失败的重试策略。",
            ],
            resources: [
              { title: "Transaction Config", url: "https://pulsar.apache.org/docs/txn-how/" },
              { title: "Transaction Best Practices", url: "https://pulsar.apache.org/docs/txn-how/#best-practices" },
              { title: "Exactly-Once with Transactions", url: "https://streamnative.io/blog/exactly-once-with-transactions" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段五：Pulsar Functions 与 IO（第 13-15 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "pulsar-functions",
    title: "阶段五：Pulsar Functions 与 IO",
    duration: "第 13-15 周",
    goal: "使用 Pulsar Functions 进行流处理，使用 Pulsar IO 连接外部系统。",
    weeks: [
      {
        id: "pulsar-w13",
        title: "第 13 周：Pulsar Functions 基础",
        summary: "使用 Pulsar Functions 实现轻量级流处理。",
        keyPoints: [
          "Pulsar Functions 是内置的轻量级计算框架。",
          "支持 Java、Python、Go 编写函数。",
          "函数可以处理、转换、过滤消息。",
        ],
        lessons: [
          {
            id: "pulsar-w13-1",
            title: "Pulsar Functions 概述",
            detail: "理解 Pulsar Functions 的设计与用途。",
            keyPoints: [
              "Serverless 计算：无需管理独立的流处理集群。",
              "处理语义：At-least-once 和 Effectively-once。",
              "部署模式：Thread、Process、Kubernetes。",
            ],
            resources: [
              { title: "Functions Overview", url: "https://pulsar.apache.org/docs/functions-overview/" },
              { title: "Functions Concepts", url: "https://pulsar.apache.org/docs/functions-concepts/" },
              { title: "Why Pulsar Functions", url: "https://streamnative.io/blog/pulsar-functions-overview" },
            ],
          },
          {
            id: "pulsar-w13-2",
            title: "编写第一个 Function",
            detail: "使用 Java/Python 编写和部署 Pulsar Function。",
            keyPoints: [
              "Function 接口：process(input) → output。",
              "Context：访问状态、日志、配置。",
              "打包部署：JAR/NAR 或 Python 文件。",
            ],
            resources: [
              { title: "Develop Functions", url: "https://pulsar.apache.org/docs/functions-develop/" },
              { title: "Java Functions", url: "https://pulsar.apache.org/docs/functions-develop-api/" },
              { title: "Python Functions", url: "https://pulsar.apache.org/docs/functions-develop-api/#python" },
            ],
          },
          {
            id: "pulsar-w13-3",
            title: "Function 部署与管理",
            detail: "部署和管理 Pulsar Functions。",
            keyPoints: [
              "pulsar-admin functions create：创建 Function。",
              "Runtime 配置：资源限制、并行度。",
              "监控指标：处理延迟、错误率。",
            ],
            resources: [
              { title: "Deploy Functions", url: "https://pulsar.apache.org/docs/functions-deploy/" },
              { title: "Functions Admin", url: "https://pulsar.apache.org/docs/admin-api-functions/" },
              { title: "Functions CLI", url: "https://pulsar.apache.org/docs/functions-cli/" },
            ],
          },
        ],
      },
      {
        id: "pulsar-w14",
        title: "第 14 周：Pulsar Functions 高级",
        summary: "掌握 Pulsar Functions 的状态管理、窗口操作与高级特性。",
        keyPoints: [
          "Stateful Functions 支持有状态处理。",
          "窗口函数支持时间窗口聚合。",
          "User Config 传递函数配置。",
        ],
        lessons: [
          {
            id: "pulsar-w14-1",
            title: "状态管理",
            detail: "使用 State Store 实现有状态函数。",
            keyPoints: [
              "putState/getState：读写状态。",
              "状态持久化：基于 BookKeeper。",
              "状态恢复：故障恢复时自动恢复状态。",
            ],
            resources: [
              { title: "Stateful Functions", url: "https://pulsar.apache.org/docs/functions-develop-state/" },
              { title: "State API", url: "https://pulsar.apache.org/docs/functions-develop-api/#state-management" },
              { title: "State Backend", url: "https://streamnative.io/blog/stateful-functions-in-pulsar" },
            ],
          },
          {
            id: "pulsar-w14-2",
            title: "窗口函数",
            detail: "使用窗口函数进行聚合计算。",
            keyPoints: [
              "Tumbling Window：固定大小的滚动窗口。",
              "Sliding Window：滑动窗口。",
              "窗口配置：大小、滑动间隔。",
            ],
            resources: [
              { title: "Window Functions", url: "https://pulsar.apache.org/docs/functions-develop-api/#window-functions" },
              { title: "Window Config", url: "https://pulsar.apache.org/docs/functions-deploy/#window-functions" },
              { title: "Window Examples", url: "https://streamnative.io/blog/window-functions-in-pulsar" },
            ],
          },
          {
            id: "pulsar-w14-3",
            title: "高级配置与调优",
            detail: "优化 Pulsar Functions 的性能与可靠性。",
            keyPoints: [
              "处理保证：At-least-once vs Effectively-once。",
              "并行度：根据输入 Topic 分区配置。",
              "资源配置：CPU、内存限制。",
            ],
            resources: [
              { title: "Processing Guarantees", url: "https://pulsar.apache.org/docs/functions-concepts/#processing-guarantees" },
              { title: "Parallelism", url: "https://pulsar.apache.org/docs/functions-deploy/#parallelism" },
              { title: "Resource Config", url: "https://pulsar.apache.org/docs/functions-deploy/#resources" },
            ],
          },
        ],
      },
      {
        id: "pulsar-w15",
        title: "第 15 周：Pulsar IO",
        summary: "使用 Pulsar IO 连接器与外部系统集成。",
        keyPoints: [
          "Pulsar IO 基于 Pulsar Functions 构建。",
          "Source Connector 从外部系统导入数据。",
          "Sink Connector 将数据导出到外部系统。",
        ],
        lessons: [
          {
            id: "pulsar-w15-1",
            title: "Pulsar IO 概述",
            detail: "理解 Pulsar IO 的架构与连接器生态。",
            keyPoints: [
              "Connector 是特殊的 Pulsar Function。",
              "内置连接器：Kafka、JDBC、Elasticsearch 等。",
              "社区连接器：丰富的第三方连接器。",
            ],
            resources: [
              { title: "Pulsar IO Overview", url: "https://pulsar.apache.org/docs/io-overview/" },
              { title: "Built-in Connectors", url: "https://pulsar.apache.org/docs/io-connectors/" },
              { title: "Connector Hub", url: "https://hub.streamnative.io/" },
            ],
          },
          {
            id: "pulsar-w15-2",
            title: "Source Connector",
            detail: "配置 Source Connector 导入外部数据。",
            keyPoints: [
              "Kafka Source：从 Kafka 导入消息。",
              "Debezium Source：CDC 变更数据捕获。",
              "JDBC Source：从数据库导入数据。",
            ],
            resources: [
              { title: "Source Connectors", url: "https://pulsar.apache.org/docs/io-overview/#source" },
              { title: "Kafka Source", url: "https://pulsar.apache.org/docs/io-kafka-source/" },
              { title: "Debezium Source", url: "https://pulsar.apache.org/docs/io-debezium-source/" },
            ],
          },
          {
            id: "pulsar-w15-3",
            title: "Sink Connector",
            detail: "配置 Sink Connector 导出数据到外部系统。",
            keyPoints: [
              "Elasticsearch Sink：索引到 ES。",
              "JDBC Sink：写入关系数据库。",
              "Cloud Storage Sink：写入 S3/GCS。",
            ],
            resources: [
              { title: "Sink Connectors", url: "https://pulsar.apache.org/docs/io-overview/#sink" },
              { title: "Elasticsearch Sink", url: "https://pulsar.apache.org/docs/io-elasticsearch-sink/" },
              { title: "JDBC Sink", url: "https://pulsar.apache.org/docs/io-jdbc-sink/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段六：生产运维（第 16-18 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "pulsar-operations",
    title: "阶段六：生产运维",
    duration: "第 16-18 周",
    goal: "掌握 Pulsar 的安全配置、监控告警与生产环境运维。",
    weeks: [
      {
        id: "pulsar-w16",
        title: "第 16 周：安全",
        summary: "配置 Pulsar 的认证、授权与加密。",
        keyPoints: [
          "支持 JWT、OAuth 2.0、Kerberos 等认证方式。",
          "基于角色的授权（RBAC）控制资源访问。",
          "TLS 加密保护传输中的数据。",
        ],
        lessons: [
          {
            id: "pulsar-w16-1",
            title: "认证",
            detail: "配置客户端和服务端认证。",
            keyPoints: [
              "JWT 认证：基于 Token 的认证。",
              "OAuth 2.0：集成身份提供商。",
              "mTLS：双向 TLS 证书认证。",
            ],
            resources: [
              { title: "Authentication Overview", url: "https://pulsar.apache.org/docs/security-overview/" },
              { title: "JWT Authentication", url: "https://pulsar.apache.org/docs/security-jwt/" },
              { title: "OAuth 2.0", url: "https://pulsar.apache.org/docs/security-oauth2/" },
            ],
          },
          {
            id: "pulsar-w16-2",
            title: "授权",
            detail: "配置基于角色的访问控制。",
            keyPoints: [
              "Superuser：超级管理员角色。",
              "Tenant Admin：租户管理员权限。",
              "细粒度权限：produce、consume、functions 等。",
            ],
            resources: [
              { title: "Authorization", url: "https://pulsar.apache.org/docs/security-authorization/" },
              { title: "Role Management", url: "https://pulsar.apache.org/docs/admin-api-permissions/" },
              { title: "RBAC Best Practices", url: "https://streamnative.io/blog/security-best-practices" },
            ],
          },
          {
            id: "pulsar-w16-3",
            title: "加密",
            detail: "配置 TLS 传输加密与端到端加密。",
            keyPoints: [
              "TLS 传输加密：保护网络通信。",
              "端到端加密：消息内容加密。",
              "证书管理：自签名或 CA 签发。",
            ],
            resources: [
              { title: "TLS Encryption", url: "https://pulsar.apache.org/docs/security-tls-transport/" },
              { title: "End-to-End Encryption", url: "https://pulsar.apache.org/docs/security-encryption/" },
              { title: "Certificate Setup", url: "https://pulsar.apache.org/docs/security-tls-transport/#certificate-authority" },
            ],
          },
        ],
      },
      {
        id: "pulsar-w17",
        title: "第 17 周：监控与可观测性",
        summary: "配置 Pulsar 的监控、日志与告警。",
        keyPoints: [
          "Prometheus + Grafana 是推荐的监控方案。",
          "关键指标包括吞吐量、延迟、积压量。",
          "分布式追踪帮助排查问题。",
        ],
        lessons: [
          {
            id: "pulsar-w17-1",
            title: "指标监控",
            detail: "配置 Prometheus 采集 Pulsar 指标。",
            keyPoints: [
              "Broker 指标：连接数、吞吐量、存储使用。",
              "Topic 指标：发布速率、消费速率、积压量。",
              "BookKeeper 指标：写入延迟、存储容量。",
            ],
            resources: [
              { title: "Pulsar Metrics", url: "https://pulsar.apache.org/docs/reference-metrics/" },
              { title: "Prometheus Setup", url: "https://pulsar.apache.org/docs/deploy-monitoring/" },
              { title: "Grafana Dashboards", url: "https://streamnative.io/blog/monitoring-pulsar" },
            ],
          },
          {
            id: "pulsar-w17-2",
            title: "日志管理",
            detail: "配置和管理 Pulsar 日志。",
            keyPoints: [
              "日志级别：动态调整日志级别。",
              "日志聚合：集成 ELK Stack。",
              "审计日志：记录管理操作。",
            ],
            resources: [
              { title: "Logging", url: "https://pulsar.apache.org/docs/administration-logging/" },
              { title: "Log Configuration", url: "https://pulsar.apache.org/docs/reference-configuration/#log4j" },
              { title: "Centralized Logging", url: "https://streamnative.io/blog/centralized-logging-for-pulsar" },
            ],
          },
          {
            id: "pulsar-w17-3",
            title: "分布式追踪",
            detail: "使用 OpenTelemetry 进行分布式追踪。",
            keyPoints: [
              "OpenTelemetry 集成：追踪消息流转。",
              "Trace Context：跨服务传播追踪上下文。",
              "可视化：Jaeger、Zipkin 展示追踪。",
            ],
            resources: [
              { title: "Distributed Tracing", url: "https://pulsar.apache.org/docs/client-libraries-java-tracing/" },
              { title: "OpenTelemetry", url: "https://opentelemetry.io/docs/instrumentation/java/getting-started/" },
              { title: "Tracing Best Practices", url: "https://streamnative.io/blog/distributed-tracing-in-pulsar" },
            ],
          },
        ],
      },
      {
        id: "pulsar-w18",
        title: "第 18 周：集群运维",
        summary: "掌握 Pulsar 集群的运维操作与故障处理。",
        keyPoints: [
          "集群扩缩容需要考虑数据均衡。",
          "备份恢复策略保障数据安全。",
          "故障排查需要熟悉常见问题。",
        ],
        lessons: [
          {
            id: "pulsar-w18-1",
            title: "集群扩缩容",
            detail: "安全地扩展和缩减 Pulsar 集群。",
            keyPoints: [
              "Broker 扩缩容：无状态，可直接增减。",
              "BookKeeper 扩容：添加节点后数据自动均衡。",
              "缩容注意：确保副本数满足后再下线节点。",
            ],
            resources: [
              { title: "Scaling Pulsar", url: "https://pulsar.apache.org/docs/administration-load-balance/" },
              { title: "Load Balancing", url: "https://pulsar.apache.org/docs/administration-load-balance/#load-manager" },
              { title: "Scaling Best Practices", url: "https://streamnative.io/blog/scaling-pulsar-cluster" },
            ],
          },
          {
            id: "pulsar-w18-2",
            title: "备份与恢复",
            detail: "配置数据备份与灾难恢复策略。",
            keyPoints: [
              "ZooKeeper 备份：元数据定期备份。",
              "BookKeeper 数据：多副本保障，无需额外备份。",
              "地理复制：跨区域灾备。",
            ],
            resources: [
              { title: "Backup and Restore", url: "https://pulsar.apache.org/docs/administration-zk-bk/" },
              { title: "ZooKeeper Admin", url: "https://pulsar.apache.org/docs/administration-zk-bk/#zookeeper-admin" },
              { title: "Disaster Recovery", url: "https://streamnative.io/blog/disaster-recovery-for-pulsar" },
            ],
          },
          {
            id: "pulsar-w18-3",
            title: "故障排查",
            detail: "诊断和解决常见的 Pulsar 问题。",
            keyPoints: [
              "消息积压：检查消费者状态和处理能力。",
              "连接问题：检查网络和认证配置。",
              "性能下降：分析指标，识别瓶颈。",
            ],
            resources: [
              { title: "Troubleshooting", url: "https://pulsar.apache.org/docs/admin-api-topics/#get-stats" },
              { title: "Common Issues", url: "https://streamnative.io/blog/troubleshooting-pulsar" },
              { title: "Debug Tools", url: "https://pulsar.apache.org/docs/administration-pulsar-manager/" },
            ],
          },
        ],
      },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════
// 知识卡片
// ═══════════════════════════════════════════════════════════════
export const pulsarKnowledgeCards: KnowledgeCard[] = [
  {
    id: "pulsar-kc-1",
    title: "计算存储分离",
    summary: "Pulsar 将消息处理（Broker）和存储（BookKeeper）分离，实现独立扩展。",
    points: [
      "Broker 无状态：可快速扩缩容，故障恢复简单",
      "BookKeeper 独立扩展：存储层按需增加容量",
      "分层存储：热数据在 BookKeeper，冷数据自动卸载",
      "Segment 存储：消息按段存储，支持细粒度管理",
    ],
    practice: "使用 Docker Compose 部署一个 Pulsar 集群，观察 Broker 和 BookKeeper 的独立性。",
  },
  {
    id: "pulsar-kc-2",
    title: "多租户架构",
    summary: "Pulsar 原生支持多租户，通过 Tenant → Namespace → Topic 层级实现资源隔离。",
    points: [
      "Tenant：顶层隔离单元，对应组织或团队",
      "Namespace：配置策略的最小单元",
      "资源配额：可在 Namespace 级别限制资源使用",
      "访问控制：细粒度的权限管理",
    ],
    practice: "创建多个租户和命名空间，配置不同的保留策略和资源配额。",
  },
  {
    id: "pulsar-kc-3",
    title: "四种订阅类型",
    summary: "Pulsar 支持 Exclusive、Shared、Failover、Key_Shared 四种订阅模式。",
    points: [
      "Exclusive：单消费者独占，严格顺序",
      "Shared：轮询分发，水平扩展",
      "Failover：主备模式，故障自动切换",
      "Key_Shared：按 Key 分发，保证 Key 顺序",
    ],
    practice: "分别使用四种订阅类型消费同一个 Topic，观察消息分发行为。",
  },
  {
    id: "pulsar-kc-4",
    title: "消息确认机制",
    summary: "Pulsar 支持 Individual ACK 和 Cumulative ACK 两种确认方式。",
    points: [
      "Individual ACK：逐条确认，支持乱序确认",
      "Cumulative ACK：累积确认，确认之前所有消息",
      "Cursor：跟踪每个订阅的消费进度",
      "ACK Timeout：未确认消息自动重投",
    ],
    practice: "实现一个消费者，使用 Individual ACK 处理失败消息的重试。",
  },
  {
    id: "pulsar-kc-5",
    title: "地理复制",
    summary: "Pulsar 支持跨数据中心的异步消息复制，实现异地多活。",
    points: [
      "异步复制：Producer 写入本地后异步复制",
      "全网格复制：所有集群互相同步",
      "聚合复制：边缘集群复制到中心集群",
      "故障转移：自动或手动切换到备用集群",
    ],
    practice: "配置两个 Pulsar 集群的地理复制，验证消息同步。",
  },
  {
    id: "pulsar-kc-6",
    title: "分层存储",
    summary: "分层存储将旧数据自动卸载到对象存储，降低存储成本。",
    points: [
      "自动卸载：基于时间或大小触发",
      "透明读取：消费者无需感知数据位置",
      "支持多种后端：S3、GCS、Azure Blob",
      "成本优化：冷数据使用低成本存储",
    ],
    practice: "配置 S3 分层存储，验证历史消息的透明读取。",
  },
  {
    id: "pulsar-kc-7",
    title: "Pulsar 事务",
    summary: "Pulsar 事务支持跨 Topic 的原子发送和确认。",
    points: [
      "原子操作：多个消息发送/确认作为一个事务",
      "两阶段提交：Prepare 和 Commit/Abort",
      "Exactly-once：保证消息不丢不重",
      "事务超时：自动回滚超时事务",
    ],
    practice: "实现一个跨 Topic 的事务，验证原子性。",
  },
  {
    id: "pulsar-kc-8",
    title: "Pulsar Functions",
    summary: "Pulsar Functions 是内置的轻量级流处理框架。",
    points: [
      "Serverless：无需管理独立的流处理集群",
      "多语言：支持 Java、Python、Go",
      "状态管理：支持有状态处理",
      "窗口函数：支持时间窗口聚合",
    ],
    practice: "编写一个 Pulsar Function 实现消息过滤和转换。",
  },
  {
    id: "pulsar-kc-9",
    title: "Schema 管理",
    summary: "Pulsar 内置 Schema Registry，支持消息结构的版本管理和兼容性检查。",
    points: [
      "多种格式：Avro、JSON、Protobuf",
      "兼容性策略：BACKWARD、FORWARD、FULL",
      "自动演进：生产者消费者协调升级",
      "强类型：编译时类型检查",
    ],
    practice: "定义一个 Avro Schema，验证 Schema 演进的兼容性。",
  },
  {
    id: "pulsar-kc-10",
    title: "Pulsar vs Kafka",
    summary: "Pulsar 和 Kafka 是两个主流的分布式消息系统，各有优势。",
    points: [
      "架构：Pulsar 计算存储分离，Kafka 紧耦合",
      "多租户：Pulsar 原生支持，Kafka 需额外方案",
      "订阅模式：Pulsar 更灵活（4 种），Kafka 只有消费者组",
      "分层存储：Pulsar 原生支持，Kafka 通过 Tiered Storage",
    ],
    practice: "对比 Pulsar 和 Kafka 在相同场景下的表现。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const pulsarExamQuestions: QuizQuestion[] = [
  {
    id: "pulsar-q1",
    question: "Pulsar 架构中负责消息持久化存储的组件是？",
    options: ["Broker", "BookKeeper", "ZooKeeper", "Proxy"],
    answer: 1,
    rationale: "BookKeeper 是 Pulsar 的持久化存储层，负责消息的持久化存储和复制。",
  },
  {
    id: "pulsar-q2",
    question: "Pulsar 的多租户层级结构是？",
    options: ["Topic → Namespace → Tenant", "Tenant → Topic → Namespace", "Tenant → Namespace → Topic", "Namespace → Tenant → Topic"],
    answer: 2,
    rationale: "Pulsar 的多租户层级是 Tenant（租户）→ Namespace（命名空间）→ Topic。",
  },
  {
    id: "pulsar-q3",
    question: "哪种订阅类型可以保证相同 Key 的消息被同一消费者处理？",
    options: ["Exclusive", "Shared", "Failover", "Key_Shared"],
    answer: 3,
    rationale: "Key_Shared 订阅根据消息 Key 进行哈希，确保相同 Key 的消息路由到同一消费者。",
  },
  {
    id: "pulsar-q4",
    question: "Pulsar 中用于存放超过最大重试次数的消息的是？",
    options: ["Retry Topic", "Dead Letter Topic", "System Topic", "Archive Topic"],
    answer: 1,
    rationale: "Dead Letter Topic（死信 Topic）用于存放无法成功处理、超过最大重试次数的消息。",
  },
  {
    id: "pulsar-q5",
    question: "Pulsar 的 Reader 接口与 Consumer 的主要区别是？",
    options: ["Reader 更快", "Reader 不创建订阅", "Reader 只能读取最新消息", "Reader 不支持 ACK"],
    answer: 1,
    rationale: "Reader 不创建订阅，不影响其他消费者的消费进度，适合重放、审计等场景。",
  },
  {
    id: "pulsar-q6",
    question: "Pulsar 分层存储的主要目的是？",
    options: ["提高读取速度", "降低存储成本", "增加消息吞吐", "简化运维"],
    answer: 1,
    rationale: "分层存储将冷数据自动卸载到对象存储（如 S3），降低长期存储成本。",
  },
  {
    id: "pulsar-q7",
    question: "Pulsar 事务的主要作用是？",
    options: ["加密消息", "跨 Topic 原子操作", "消息压缩", "负载均衡"],
    answer: 1,
    rationale: "Pulsar 事务支持跨多个 Topic 的原子发送和确认，保证 Exactly-once 语义。",
  },
  {
    id: "pulsar-q8",
    question: "Pulsar Functions 是什么？",
    options: ["消息格式", "轻量级流处理框架", "认证方式", "存储引擎"],
    answer: 1,
    rationale: "Pulsar Functions 是内置的轻量级 Serverless 计算框架，用于消息处理和转换。",
  },
  {
    id: "pulsar-q9",
    question: "Pulsar Schema 的 BACKWARD 兼容性策略意味着？",
    options: ["新 Schema 可读取旧消息", "旧 Schema 可读取新消息", "双向兼容", "不检查兼容性"],
    answer: 0,
    rationale: "BACKWARD 兼容性确保使用新 Schema 的消费者可以读取使用旧 Schema 发送的消息。",
  },
  {
    id: "pulsar-q10",
    question: "Pulsar Broker 的特点是？",
    options: ["有状态，存储消息", "无状态，处理消息路由", "只处理认证", "只处理复制"],
    answer: 1,
    rationale: "Pulsar Broker 是无状态的服务层，只处理消息路由和协议，不存储消息数据。",
  },
  {
    id: "pulsar-q11",
    question: "Pulsar 地理复制的默认模式是？",
    options: ["同步复制", "异步复制", "半同步复制", "不复制"],
    answer: 1,
    rationale: "Pulsar 地理复制默认是异步的，Producer 写入本地集群后异步复制到其他集群。",
  },
  {
    id: "pulsar-q12",
    question: "以下哪个不是 Pulsar 支持的认证方式？",
    options: ["JWT", "OAuth 2.0", "Kerberos", "SAML"],
    answer: 3,
    rationale: "Pulsar 支持 JWT、OAuth 2.0、Kerberos、mTLS 等认证方式，但不原生支持 SAML。",
  },
  {
    id: "pulsar-q13",
    question: "Pulsar IO 的 Source Connector 用于？",
    options: ["导出数据到外部系统", "从外部系统导入数据", "消息转换", "数据压缩"],
    answer: 1,
    rationale: "Source Connector 从外部系统（如 Kafka、数据库）导入数据到 Pulsar Topic。",
  },
  {
    id: "pulsar-q14",
    question: "Pulsar 延迟消息使用哪个方法指定精确投递时间？",
    options: ["deliverAfter", "deliverAt", "scheduleAt", "delayTo"],
    answer: 1,
    rationale: "deliverAt 方法用于指定消息的精确投递时间戳。",
  },
  {
    id: "pulsar-q15",
    question: "Pulsar 中 Cumulative ACK 的作用是？",
    options: ["确认单条消息", "确认该消息及之前所有消息", "拒绝消息", "删除消息"],
    answer: 1,
    rationale: "Cumulative ACK 是累积确认，确认该消息位置及之前的所有消息。",
  },
  {
    id: "pulsar-q16",
    question: "Pulsar 中非持久化 Topic 的特点是？",
    options: ["消息持久化到磁盘", "消息仅存于内存", "消息存储到对象存储", "消息复制到多个集群"],
    answer: 1,
    rationale: "非持久化 Topic 的消息仅存于内存，提供高性能低延迟，但消息可能丢失。",
  },
  {
    id: "pulsar-q17",
    question: "Pulsar Functions 的状态存储基于什么？",
    options: ["Redis", "BookKeeper", "MySQL", "本地文件"],
    answer: 1,
    rationale: "Pulsar Functions 的状态存储基于 BookKeeper，提供持久化和故障恢复能力。",
  },
  {
    id: "pulsar-q18",
    question: "Pulsar 消息去重的主要机制是？",
    options: ["消息 ID", "Sequence ID", "时间戳", "消息内容哈希"],
    answer: 1,
    rationale: "Pulsar Producer 去重基于 Sequence ID，Broker 自动检测并丢弃重复消息。",
  },
  {
    id: "pulsar-q19",
    question: "以下哪个不是 Pulsar Functions 支持的编程语言？",
    options: ["Java", "Python", "Go", "Rust"],
    answer: 3,
    rationale: "Pulsar Functions 原生支持 Java、Python、Go，但不直接支持 Rust。",
  },
  {
    id: "pulsar-q20",
    question: "Pulsar 相比 Kafka 的主要架构优势是？",
    options: ["更高的吞吐量", "计算存储分离", "更简单的 API", "更少的配置选项"],
    answer: 1,
    rationale: "Pulsar 的计算存储分离架构使 Broker 无状态，可独立扩展，是相比 Kafka 的主要架构优势。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const pulsarRoadmap: RoadmapDefinition = {
  id: "pulsar",
  label: "Apache Pulsar",
  title: "Apache Pulsar 分布式消息流平台",
  durationLabel: "18 个主题",
  description:
    "从 Pulsar 基础概念出发，深入计算存储分离架构、多租户设计、四种订阅模式，掌握地理复制、分层存储、事务支持，学习 Pulsar Functions 流处理与 Pulsar IO 连接器，最终掌握生产环境的安全配置与运维。",
  heroBadge: "Pulsar · 云原生消息 · 流处理 · 多租户",
  stages: pulsarStages,
  knowledgeCards: pulsarKnowledgeCards,
  examQuestions: pulsarExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 Pulsar 学习之旅！先理解计算存储分离的架构优势。"
    if (percent < 25) return "继续学习订阅类型和消息传递保证，这是 Pulsar 的核心特性。"
    if (percent < 50) return "深入 Producer 配置和性能优化，掌握高吞吐场景的最佳实践。"
    if (percent < 75) return "地理复制和分层存储是 Pulsar 的独特优势，重点掌握！"
    if (percent < 100) return "即将完成！Pulsar Functions 和生产运维是最后的关键。"
    return "恭喜完成！你已掌握 Apache Pulsar 的完整知识体系。"
  },
  resourceGuide: {
    environment:
      "推荐使用 Docker 或 Standalone 模式快速启动 Pulsar。StreamNative Cloud 提供托管服务试用。",
    fallbackKeyPoints: [
      "Pulsar 计算存储分离是核心架构优势，Broker 无状态",
      "四种订阅类型满足不同消费场景：Exclusive、Shared、Failover、Key_Shared",
      "分层存储将冷数据卸载到对象存储，降低成本",
      "Pulsar Functions 是内置的轻量级流处理框架",
      "原生多租户支持，Tenant → Namespace → Topic 层级隔离",
    ],
    handsOnSteps: [
      "使用 Docker 部署 Pulsar Standalone",
      "创建租户、命名空间和 Topic",
      "使用不同订阅类型测试消息分发",
      "配置消息重试和死信 Topic",
      "编写 Pulsar Function 实现消息转换",
    ],
    selfChecks: [
      "能否解释 Pulsar 计算存储分离的优势？",
      "能否选择合适的订阅类型满足业务需求？",
      "能否配置地理复制实现异地多活？",
      "能否使用 Pulsar Functions 进行流处理？",
      "能否排查 Pulsar 集群的常见问题？",
    ],
    extensions: [
      "深入 BookKeeper 存储原理",
      "学习 Pulsar SQL 进行数据查询",
      "探索 Pulsar + Flink 的流处理方案",
      "研究 Kubernetes 上的 Pulsar 部署",
    ],
    lessonQuizAdvice: "每周完成后测验，重点关注订阅类型、消息传递保证和 Pulsar Functions。",
  },
}
