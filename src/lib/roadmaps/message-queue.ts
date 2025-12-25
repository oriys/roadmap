import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const messageQueueStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：消息队列基础（第 1-3 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mq-foundation",
    title: "阶段一：消息队列基础",
    duration: "第 1-3 周",
    goal: "理解消息队列的核心概念、传递模式与可靠性保证，为深入学习各消息系统打下基础。",
    weeks: [
      {
        id: "mq-w1",
        title: "第 1 周：消息队列概念与模式",
        summary: "理解为什么需要消息队列，掌握核心消息传递模式与语义保证。",
        keyPoints: [
          "消息队列实现系统解耦、流量削峰、异步处理。",
          "点对点与发布订阅是两种基本消息传递模式。",
          "At-most-once、At-least-once、Exactly-once 是三种传递保证。",
        ],
        lessons: [
          {
            id: "mq-w1-1",
            title: "为什么需要消息队列",
            detail: "理解消息队列在分布式系统中的核心价值与典型应用场景。",
            keyPoints: [
              "解耦：生产者和消费者独立演进，降低系统耦合度。",
              "削峰：缓冲突发流量，保护下游系统。",
              "异步：非阻塞处理，提高系统吞吐量和响应速度。",
            ],
            resources: [
              { title: "Martin Fowler: What is Messaging", url: "https://martinfowler.com/articles/enterprisePatterns.html" },
              { title: "AWS: Message Queues", url: "https://aws.amazon.com/message-queue/" },
              { title: "System Design: Message Queues", url: "https://www.designgurus.io/course-play/grokking-the-system-design-interview/doc/message-queues" },
            ],
          },
          {
            id: "mq-w1-2",
            title: "消息传递模式",
            detail: "掌握点对点、发布订阅等核心消息传递模式。",
            keyPoints: [
              "点对点（Queue）：消息只被一个消费者处理。",
              "发布订阅（Pub/Sub）：消息广播给所有订阅者。",
              "Push vs Pull：消费者主动拉取还是被动推送。",
            ],
            resources: [
              { title: "Enterprise Integration Patterns", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/" },
              { title: "Kafka: Use Cases", url: "https://kafka.apache.org/uses" },
              { title: "RabbitMQ: Tutorials", url: "https://www.rabbitmq.com/tutorials" },
            ],
          },
          {
            id: "mq-w1-3",
            title: "消息传递保证",
            detail: "理解不同级别的消息传递保证及其实现代价。",
            keyPoints: [
              "At-most-once：消息可能丢失，但不会重复（性能最高）。",
              "At-least-once：消息不会丢失，但可能重复（需要幂等）。",
              "Exactly-once：消息不丢不重（实现复杂，有性能代价）。",
            ],
            resources: [
              { title: "Kafka: Semantics", url: "https://kafka.apache.org/documentation/#semantics" },
              { title: "Exactly-Once Semantics", url: "https://www.confluent.io/blog/exactly-once-semantics-are-possible-heres-how-apache-kafka-does-it/" },
              { title: "Two Generals' Problem", url: "https://en.wikipedia.org/wiki/Two_Generals%27_Problem" },
            ],
          },
        ],
      },
      {
        id: "mq-w2",
        title: "第 2 周：消息队列核心概念",
        summary: "掌握 Topic、Partition、Consumer Group 等核心概念与消息序列化。",
        keyPoints: [
          "Topic 是消息的逻辑分类，Partition 实现并行与扩展。",
          "Consumer Group 实现消费者负载均衡与故障转移。",
          "Schema 管理确保生产者与消费者的数据契约一致。",
        ],
        lessons: [
          {
            id: "mq-w2-1",
            title: "Topic、Partition、Offset",
            detail: "理解消息组织的核心抽象概念。",
            keyPoints: [
              "Topic：消息的逻辑分类，类似于数据库的表。",
              "Partition：Topic 的物理分片，实现并行处理。",
              "Offset：消息在 Partition 中的位置，用于追踪消费进度。",
            ],
            resources: [
              { title: "Kafka: Topics and Partitions", url: "https://kafka.apache.org/documentation/#intro_concepts_and_terms" },
              { title: "Confluent: Partitions", url: "https://developer.confluent.io/courses/apache-kafka/partitions/" },
              { title: "Understanding Kafka Offsets", url: "https://www.conduktor.io/kafka/kafka-consumer-offsets/" },
            ],
          },
          {
            id: "mq-w2-2",
            title: "Consumer Group 与负载均衡",
            detail: "理解消费者组的工作机制与分区分配策略。",
            keyPoints: [
              "Consumer Group：一组消费者共同消费一个 Topic。",
              "分区分配：每个分区只能被组内一个消费者消费。",
              "Rebalance：消费者加入或离开时重新分配分区。",
            ],
            resources: [
              { title: "Kafka: Consumer Groups", url: "https://kafka.apache.org/documentation/#intro_consumers" },
              { title: "Consumer Group Protocol", url: "https://developer.confluent.io/courses/apache-kafka/consumer-group-protocol/" },
              { title: "Kafka Rebalance", url: "https://www.confluent.io/blog/cooperative-rebalancing-in-kafka-streams-consumer-ksqldb/" },
            ],
          },
          {
            id: "mq-w2-3",
            title: "消息序列化",
            detail: "选择合适的序列化格式与 Schema 管理策略。",
            keyPoints: [
              "JSON：人类可读，但体积大、无 Schema 校验。",
              "Protobuf/Avro：二进制、紧凑、有 Schema 支持。",
              "Schema Registry：集中管理 Schema，确保兼容性。",
            ],
            resources: [
              { title: "Confluent Schema Registry", url: "https://docs.confluent.io/platform/current/schema-registry/index.html" },
              { title: "Avro vs Protobuf vs JSON", url: "https://www.confluent.io/blog/avro-kafka-data/" },
              { title: "Schema Evolution", url: "https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html" },
            ],
          },
        ],
      },
      {
        id: "mq-w3",
        title: "第 3 周：消息队列可靠性",
        summary: "掌握消息持久化、确认机制与错误处理策略。",
        keyPoints: [
          "持久化与复制确保消息不因节点故障而丢失。",
          "消息确认机制确保消息被正确处理。",
          "死信队列与幂等性是处理失败消息的关键策略。",
        ],
        lessons: [
          {
            id: "mq-w3-1",
            title: "持久化与复制",
            detail: "理解消息如何持久化存储与跨节点复制。",
            keyPoints: [
              "持久化：消息写入磁盘，重启后不丢失。",
              "复制：消息在多个节点存储副本，容忍节点故障。",
              "同步 vs 异步复制：数据安全与性能的权衡。",
            ],
            resources: [
              { title: "Kafka: Replication", url: "https://kafka.apache.org/documentation/#replication" },
              { title: "RabbitMQ: Quorum Queues", url: "https://www.rabbitmq.com/docs/quorum-queues" },
              { title: "Data Replication Strategies", url: "https://www.confluent.io/blog/hands-free-kafka-replication-a-lesson-in-operational-simplicity/" },
            ],
          },
          {
            id: "mq-w3-2",
            title: "消息确认与重试",
            detail: "设计可靠的消息确认与重试机制。",
            keyPoints: [
              "ACK 机制：消费者确认消息已处理。",
              "NACK/Reject：消费者拒绝消息，触发重试或死信。",
              "重试策略：指数退避、最大重试次数。",
            ],
            resources: [
              { title: "Kafka: Consumer Commits", url: "https://kafka.apache.org/documentation/#design_consumerposition" },
              { title: "RabbitMQ: Acknowledgements", url: "https://www.rabbitmq.com/docs/confirms" },
              { title: "Retry Patterns", url: "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/" },
            ],
          },
          {
            id: "mq-w3-3",
            title: "死信队列与幂等性",
            detail: "处理无法消费的消息与保证处理幂等性。",
            keyPoints: [
              "死信队列（DLQ）：存放无法处理的消息，便于分析和重试。",
              "幂等性：相同消息处理多次结果一致。",
              "去重策略：基于消息 ID 或业务键去重。",
            ],
            resources: [
              { title: "Kafka: Dead Letter Queue", url: "https://www.confluent.io/blog/kafka-connect-deep-dive-error-handling-dead-letter-queues/" },
              { title: "RabbitMQ: Dead Letter Exchanges", url: "https://www.rabbitmq.com/docs/dlx" },
              { title: "Idempotent Consumer", url: "https://microservices.io/patterns/communication-style/idempotent-consumer.html" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：Apache Kafka 深入（第 4-8 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mq-kafka",
    title: "阶段二：Apache Kafka 深入",
    duration: "第 4-8 周",
    goal: "深入掌握 Kafka 4.0 架构、Producer/Consumer 调优、Kafka Streams 流处理与生态工具。",
    weeks: [
      {
        id: "mq-w4",
        title: "第 4 周：Kafka 架构与 KRaft",
        summary: "理解 Kafka 4.0 的新架构，掌握 KRaft 共识协议。",
        keyPoints: [
          "Kafka 4.0 完全移除 ZooKeeper，使用 KRaft 管理元数据。",
          "KRaft 基于 Raft 协议，简化运维，支持百万级分区。",
          "Controller Quorum 负责集群元数据管理。",
        ],
        lessons: [
          {
            id: "mq-w4-1",
            title: "Kafka 4.0 架构（无 ZooKeeper）",
            detail: "理解 Kafka 4.0 的架构变化与优势。",
            keyPoints: [
              "ZooKeeper 移除：不再需要维护独立的 ZK 集群。",
              "架构简化：单一系统管理所有元数据。",
              "扩展性提升：支持更多分区，更快的故障恢复。",
            ],
            resources: [
              { title: "Kafka 4.0 Release", url: "https://kafka.apache.org/blog#apache_kafka_400_release_announcement" },
              { title: "Confluent: Kafka 4.0", url: "https://www.confluent.io/blog/latest-apache-kafka-release/" },
              { title: "KIP-500: ZooKeeper Removal", url: "https://cwiki.apache.org/confluence/display/KAFKA/KIP-500" },
            ],
          },
          {
            id: "mq-w4-2",
            title: "KRaft 共识协议",
            detail: "深入理解 KRaft 的工作原理与配置。",
            keyPoints: [
              "Raft 协议：Leader 选举、日志复制、成员变更。",
              "Controller Quorum：通常 3 或 5 个 Controller。",
              "Pre-Vote 机制：减少不必要的 Leader 选举。",
            ],
            resources: [
              { title: "KRaft Deep Dive", url: "https://developers.redhat.com/articles/2025/09/17/deep-dive-apache-kafkas-kraft-protocol" },
              { title: "Confluent: KRaft", url: "https://developer.confluent.io/learn/kraft/" },
              { title: "Raft Consensus", url: "https://raft.github.io/" },
            ],
          },
          {
            id: "mq-w4-3",
            title: "Broker、Controller、集群拓扑",
            detail: "理解 Kafka 集群的组件与部署拓扑。",
            keyPoints: [
              "Broker：存储消息、处理读写请求。",
              "Controller：管理分区 Leader 选举、元数据。",
              "Combined vs Isolated 模式：Controller 与 Broker 可共用或分离。",
            ],
            resources: [
              { title: "Kafka: Broker Configuration", url: "https://kafka.apache.org/documentation/#brokerconfigs" },
              { title: "KRaft Deployment", url: "https://kafka.apache.org/documentation/#kraft" },
              { title: "Kafka Cluster Design", url: "https://www.conduktor.io/kafka/kafka-cluster-setup-overview/" },
            ],
          },
        ],
      },
      {
        id: "mq-w5",
        title: "第 5 周：Producer 与 Consumer",
        summary: "掌握 Kafka Producer 与 Consumer 的配置与调优。",
        keyPoints: [
          "Producer 配置影响吞吐量、延迟与数据可靠性。",
          "Consumer 配置影响消费速度与 Rebalance 行为。",
          "Kafka 4.0 新 Rebalance 协议消除 Stop-the-world。",
        ],
        lessons: [
          {
            id: "mq-w5-1",
            title: "Producer 配置与调优",
            detail: "优化 Producer 的吞吐量与可靠性。",
            keyPoints: [
              "acks：0（不等待）、1（Leader 确认）、all（ISR 确认）。",
              "batch.size 与 linger.ms：批量发送提高吞吐。",
              "compression.type：gzip、snappy、lz4、zstd。",
            ],
            resources: [
              { title: "Kafka: Producer Configs", url: "https://kafka.apache.org/documentation/#producerconfigs" },
              { title: "Producer Performance Tuning", url: "https://developer.confluent.io/courses/apache-kafka/producer-tuning/" },
              { title: "Kafka Producer Best Practices", url: "https://www.conduktor.io/kafka/kafka-producer-batching/" },
            ],
          },
          {
            id: "mq-w5-2",
            title: "Consumer 与 Consumer Group",
            detail: "理解 Consumer 的配置与消费模式。",
            keyPoints: [
              "fetch.min.bytes 与 fetch.max.wait.ms：控制拉取行为。",
              "max.poll.records：单次拉取最大消息数。",
              "auto.offset.reset：earliest、latest、none。",
            ],
            resources: [
              { title: "Kafka: Consumer Configs", url: "https://kafka.apache.org/documentation/#consumerconfigs" },
              { title: "Consumer Tuning", url: "https://developer.confluent.io/courses/apache-kafka/consumer-tuning/" },
              { title: "Consumer Lag Monitoring", url: "https://www.confluent.io/blog/monitor-kafka-consumer-lag/" },
            ],
          },
          {
            id: "mq-w5-3",
            title: "新一代 Rebalance 协议",
            detail: "理解 Kafka 4.0 的增量协作式 Rebalance。",
            keyPoints: [
              "Stop-the-world 问题：传统 Rebalance 暂停所有消费者。",
              "增量协作式 Rebalance：只迁移必要的分区。",
              "静态成员资格：减少不必要的 Rebalance。",
            ],
            resources: [
              { title: "New Consumer Rebalance", url: "https://cwiki.apache.org/confluence/display/KAFKA/KIP-848" },
              { title: "Cooperative Rebalancing", url: "https://www.confluent.io/blog/incremental-cooperative-rebalancing-in-kafka/" },
              { title: "Static Membership", url: "https://cwiki.apache.org/confluence/display/KAFKA/KIP-345" },
            ],
          },
        ],
      },
      {
        id: "mq-w6",
        title: "第 6 周：分区、副本与数据可靠性",
        summary: "深入理解 Kafka 的分区策略、副本机制与数据可靠性保证。",
        keyPoints: [
          "分区策略决定消息如何分布与顺序保证。",
          "ISR 与 ELR 机制确保数据不丢失。",
          "数据保留策略影响存储成本与消费能力。",
        ],
        lessons: [
          {
            id: "mq-w6-1",
            title: "分区策略与顺序保证",
            detail: "设计合理的分区策略，理解顺序保证的限制。",
            keyPoints: [
              "分区键：相同键的消息进入同一分区，保证顺序。",
              "轮询与随机：无键消息的分布策略。",
              "顺序保证仅在单分区内有效。",
            ],
            resources: [
              { title: "Kafka Partitioning", url: "https://developer.confluent.io/courses/apache-kafka/partitions/" },
              { title: "Custom Partitioner", url: "https://kafka.apache.org/documentation/#producerconfigs_partitioner.class" },
              { title: "Message Ordering", url: "https://www.confluent.io/blog/apache-kafka-message-ordering-guarantees/" },
            ],
          },
          {
            id: "mq-w6-2",
            title: "ISR 与 ELR（Eligible Leader Replicas）",
            detail: "理解 Kafka 的副本同步与 Leader 选举机制。",
            keyPoints: [
              "ISR（In-Sync Replicas）：与 Leader 同步的副本集合。",
              "ELR（Kafka 4.0）：确保数据完整的 Leader 候选。",
              "Unclean Leader Election：数据丢失风险的权衡。",
            ],
            resources: [
              { title: "Kafka Replication", url: "https://kafka.apache.org/documentation/#replication" },
              { title: "KIP-966: ELR", url: "https://cwiki.apache.org/confluence/display/KAFKA/KIP-966" },
              { title: "ISR Deep Dive", url: "https://www.conduktor.io/kafka/kafka-topic-replication/" },
            ],
          },
          {
            id: "mq-w6-3",
            title: "数据保留与压缩",
            detail: "配置消息保留策略与日志压缩。",
            keyPoints: [
              "基于时间保留：retention.ms 设置保留时长。",
              "基于大小保留：retention.bytes 设置分区大小上限。",
              "日志压缩：保留每个 Key 的最新值，用于 Changelog。",
            ],
            resources: [
              { title: "Log Retention", url: "https://kafka.apache.org/documentation/#brokerconfigs_log.retention.ms" },
              { title: "Log Compaction", url: "https://kafka.apache.org/documentation/#compaction" },
              { title: "Retention Strategies", url: "https://www.conduktor.io/kafka/kafka-topic-configuration-log-retention/" },
            ],
          },
        ],
      },
      {
        id: "mq-w7",
        title: "第 7 周：Kafka Streams",
        summary: "使用 Kafka Streams 构建流处理应用。",
        keyPoints: [
          "Kafka Streams 是轻量级流处理库，无需独立集群。",
          "DSL 提供高级抽象，Processor API 提供底层控制。",
          "State Store 支持有状态流处理。",
        ],
        lessons: [
          {
            id: "mq-w7-1",
            title: "流处理基础与 DSL",
            detail: "使用 Kafka Streams DSL 构建流处理拓扑。",
            keyPoints: [
              "KStream：无界消息流，每条消息独立处理。",
              "KTable：变更日志流，代表最新状态。",
              "常用操作：filter、map、flatMap、groupBy、join。",
            ],
            resources: [
              { title: "Kafka Streams Introduction", url: "https://kafka.apache.org/documentation/streams/" },
              { title: "Streams DSL", url: "https://kafka.apache.org/documentation/streams/developer-guide/dsl-api.html" },
              { title: "Confluent: Kafka Streams", url: "https://developer.confluent.io/courses/kafka-streams/overview/" },
            ],
          },
          {
            id: "mq-w7-2",
            title: "State Store 与窗口操作",
            detail: "使用 State Store 进行有状态处理与窗口聚合。",
            keyPoints: [
              "State Store：本地 RocksDB 存储，支持查询。",
              "窗口类型：Tumbling、Hopping、Sliding、Session。",
              "窗口聚合：统计时间窗口内的数据。",
            ],
            resources: [
              { title: "State Stores", url: "https://kafka.apache.org/documentation/streams/developer-guide/processor-api.html#defining-and-creating-a-state-store" },
              { title: "Windowing", url: "https://kafka.apache.org/documentation/streams/developer-guide/dsl-api.html#windowing" },
              { title: "Interactive Queries", url: "https://kafka.apache.org/documentation/streams/developer-guide/interactive-queries.html" },
            ],
          },
          {
            id: "mq-w7-3",
            title: "Exactly-once 语义",
            detail: "在 Kafka Streams 中实现 Exactly-once 处理。",
            keyPoints: [
              "processing.guarantee=exactly_once_v2。",
              "事务性 Producer：原子写入多个分区。",
              "幂等性 + 事务 = Exactly-once。",
            ],
            resources: [
              { title: "EOS in Streams", url: "https://kafka.apache.org/documentation/streams/core-concepts#streams_concepts_eos" },
              { title: "Transactions", url: "https://www.confluent.io/blog/transactions-apache-kafka/" },
              { title: "Idempotent Producer", url: "https://kafka.apache.org/documentation/#producerconfigs_enable.idempotence" },
            ],
          },
        ],
      },
      {
        id: "mq-w8",
        title: "第 8 周：Kafka Connect 与生态",
        summary: "使用 Kafka Connect 集成外部系统，掌握 Kafka 监控与运维。",
        keyPoints: [
          "Kafka Connect 简化数据集成，无需编写代码。",
          "Schema Registry 确保生产者和消费者的数据兼容。",
          "监控 Kafka 集群健康与消费者 Lag。",
        ],
        lessons: [
          {
            id: "mq-w8-1",
            title: "Source / Sink Connector",
            detail: "使用 Kafka Connect 导入导出数据。",
            keyPoints: [
              "Source Connector：从外部系统导入数据到 Kafka。",
              "Sink Connector：从 Kafka 导出数据到外部系统。",
              "常用连接器：JDBC、Elasticsearch、S3、Debezium。",
            ],
            resources: [
              { title: "Kafka Connect", url: "https://kafka.apache.org/documentation/#connect" },
              { title: "Confluent Hub", url: "https://www.confluent.io/hub/" },
              { title: "Debezium CDC", url: "https://debezium.io/" },
            ],
          },
          {
            id: "mq-w8-2",
            title: "Schema Registry 与 Avro",
            detail: "使用 Schema Registry 管理消息 Schema。",
            keyPoints: [
              "Schema Registry：集中管理 Avro/Protobuf/JSON Schema。",
              "兼容性检查：Backward、Forward、Full。",
              "Schema 演进：安全地修改消息结构。",
            ],
            resources: [
              { title: "Schema Registry", url: "https://docs.confluent.io/platform/current/schema-registry/index.html" },
              { title: "Schema Evolution", url: "https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html" },
              { title: "Avro Serialization", url: "https://avro.apache.org/docs/current/" },
            ],
          },
          {
            id: "mq-w8-3",
            title: "Kafka 监控与运维",
            detail: "监控 Kafka 集群健康与性能。",
            keyPoints: [
              "JMX 指标：Broker、Producer、Consumer 指标。",
              "Consumer Lag：监控消费延迟。",
              "常用工具：Kafka UI、AKHQ、Conduktor。",
            ],
            resources: [
              { title: "Kafka Monitoring", url: "https://kafka.apache.org/documentation/#monitoring" },
              { title: "Kafka Exporter", url: "https://github.com/danielqsj/kafka_exporter" },
              { title: "AKHQ", url: "https://akhq.io/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：RabbitMQ（第 9-11 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mq-rabbitmq",
    title: "阶段三：RabbitMQ",
    duration: "第 9-11 周",
    goal: "掌握 RabbitMQ 4.x 的架构、队列类型与高可用配置。",
    weeks: [
      {
        id: "mq-w9",
        title: "第 9 周：RabbitMQ 架构",
        summary: "理解 AMQP 协议、Exchange 类型与 RabbitMQ 核心概念。",
        keyPoints: [
          "RabbitMQ 基于 AMQP 协议，提供灵活的路由能力。",
          "Exchange 决定消息如何路由到队列。",
          "Virtual Host 实现多租户隔离。",
        ],
        lessons: [
          {
            id: "mq-w9-1",
            title: "AMQP 协议与核心概念",
            detail: "理解 AMQP 0-9-1 协议与 RabbitMQ 核心组件。",
            keyPoints: [
              "AMQP：高级消息队列协议，定义消息格式与交互。",
              "Connection 与 Channel：TCP 连接与逻辑通道。",
              "消息流：Publisher → Exchange → Queue → Consumer。",
            ],
            resources: [
              { title: "AMQP Concepts", url: "https://www.rabbitmq.com/tutorials/amqp-concepts" },
              { title: "RabbitMQ: Getting Started", url: "https://www.rabbitmq.com/tutorials" },
              { title: "Channels", url: "https://www.rabbitmq.com/docs/channels" },
            ],
          },
          {
            id: "mq-w9-2",
            title: "Exchange 类型",
            detail: "掌握不同 Exchange 类型的路由行为。",
            keyPoints: [
              "Direct：精确匹配 Routing Key。",
              "Fanout：广播到所有绑定队列。",
              "Topic：通配符匹配 Routing Key（* 和 #）。",
              "Headers：基于消息头属性匹配。",
            ],
            resources: [
              { title: "Exchange Types", url: "https://www.rabbitmq.com/tutorials/amqp-concepts#exchanges" },
              { title: "Topic Exchange Tutorial", url: "https://www.rabbitmq.com/tutorials/tutorial-five-python" },
              { title: "Routing Guide", url: "https://www.cloudamqp.com/blog/part4-rabbitmq-for-beginners-exchanges-routing-keys-bindings.html" },
            ],
          },
          {
            id: "mq-w9-3",
            title: "Virtual Host 与权限",
            detail: "使用 Virtual Host 实现多租户隔离。",
            keyPoints: [
              "Virtual Host：逻辑隔离，独立的命名空间。",
              "用户与权限：configure、write、read 权限。",
              "资源隔离：不同 vhost 的 Exchange 和 Queue 互不可见。",
            ],
            resources: [
              { title: "Virtual Hosts", url: "https://www.rabbitmq.com/docs/vhosts" },
              { title: "Access Control", url: "https://www.rabbitmq.com/docs/access-control" },
              { title: "User Management", url: "https://www.rabbitmq.com/docs/rabbitmqctl#user-management" },
            ],
          },
        ],
      },
      {
        id: "mq-w10",
        title: "第 10 周：队列类型与高可用",
        summary: "掌握 RabbitMQ 4.x 的队列类型与高可用机制。",
        keyPoints: [
          "Quorum Queues 是 RabbitMQ 4.x 的默认高可用队列。",
          "Streams 提供高吞吐、可重放的消息存储。",
          "Khepri 是新一代基于 Raft 的元数据存储。",
        ],
        lessons: [
          {
            id: "mq-w10-1",
            title: "Quorum Queues（4.0 默认）",
            detail: "使用 Quorum Queues 实现高可用消息队列。",
            keyPoints: [
              "基于 Raft：强一致性，自动故障转移。",
              "替代镜像队列：RabbitMQ 4.0 移除经典镜像队列。",
              "消息优先级：支持高/普通两级优先级（2:1 比例）。",
            ],
            resources: [
              { title: "Quorum Queues", url: "https://www.rabbitmq.com/docs/quorum-queues" },
              { title: "Quorum Queues in 4.0", url: "https://www.rabbitmq.com/blog/2024/08/28/quorum-queues-in-4.0" },
              { title: "Migration Guide", url: "https://www.rabbitmq.com/blog/2025/07/29/latest-benefits-of-rmq-and-migrating-to-qq-along-the-way" },
            ],
          },
          {
            id: "mq-w10-2",
            title: "Streams",
            detail: "使用 RabbitMQ Streams 实现高吞吐消息流。",
            keyPoints: [
              "追加日志：类似 Kafka，支持消息重放。",
              "高吞吐：适合大量数据流场景。",
              "SQL 过滤（4.2）：Broker 端过滤，减少网络传输。",
            ],
            resources: [
              { title: "RabbitMQ Streams", url: "https://www.rabbitmq.com/docs/streams" },
              { title: "Stream Protocol", url: "https://www.rabbitmq.com/docs/stream" },
              { title: "Streams vs Queues", url: "https://www.cloudamqp.com/blog/rabbitmq-streams-vs-queues.html" },
            ],
          },
          {
            id: "mq-w10-3",
            title: "Khepri 元数据存储",
            detail: "理解 RabbitMQ 的新元数据存储架构。",
            keyPoints: [
              "Khepri：基于 Raft 的元数据存储。",
              "替代 Mnesia：更好的一致性和可扩展性。",
              "RabbitMQ 4.2 起成为默认。",
            ],
            resources: [
              { title: "Khepri", url: "https://www.rabbitmq.com/docs/metadata-store" },
              { title: "Khepri Announcement", url: "https://www.rabbitmq.com/blog/2024/08/21/khepri-in-rabbitmq-4.0" },
              { title: "Clustering with Khepri", url: "https://www.rabbitmq.com/docs/clustering" },
            ],
          },
        ],
      },
      {
        id: "mq-w11",
        title: "第 11 周：RabbitMQ 高级特性",
        summary: "掌握 RabbitMQ 的高级消息特性与集群配置。",
        keyPoints: [
          "消息 TTL 和优先级控制消息生命周期和处理顺序。",
          "死信交换机处理无法消费的消息。",
          "集群与联邦实现跨地域消息同步。",
        ],
        lessons: [
          {
            id: "mq-w11-1",
            title: "消息优先级与 TTL",
            detail: "使用优先级和 TTL 控制消息处理。",
            keyPoints: [
              "消息优先级：0-255 优先级（Quorum Queue 简化为高/普通）。",
              "消息 TTL：过期消息自动删除或进入死信。",
              "队列 TTL：空闲队列自动删除。",
            ],
            resources: [
              { title: "Priority Queue", url: "https://www.rabbitmq.com/docs/priority" },
              { title: "TTL", url: "https://www.rabbitmq.com/docs/ttl" },
              { title: "Message Properties", url: "https://www.rabbitmq.com/docs/publishers#message-properties" },
            ],
          },
          {
            id: "mq-w11-2",
            title: "死信与延迟队列",
            detail: "使用死信交换机和延迟消息模式。",
            keyPoints: [
              "死信交换机（DLX）：处理被拒绝或过期的消息。",
              "延迟队列：通过 TTL + DLX 实现延迟投递。",
              "延迟插件：更精确的延迟消息支持。",
            ],
            resources: [
              { title: "Dead Letter Exchanges", url: "https://www.rabbitmq.com/docs/dlx" },
              { title: "Delayed Message Plugin", url: "https://github.com/rabbitmq/rabbitmq-delayed-message-exchange" },
              { title: "Delay Pattern", url: "https://www.cloudamqp.com/blog/rabbitmq-delayed-messages.html" },
            ],
          },
          {
            id: "mq-w11-3",
            title: "集群与联邦",
            detail: "配置 RabbitMQ 集群与跨地域联邦。",
            keyPoints: [
              "集群：多节点共享队列和交换机。",
              "联邦（Federation）：跨集群异步消息同步。",
              "Shovel：点对点消息转发。",
            ],
            resources: [
              { title: "Clustering Guide", url: "https://www.rabbitmq.com/docs/clustering" },
              { title: "Federation Plugin", url: "https://www.rabbitmq.com/docs/federation" },
              { title: "Shovel Plugin", url: "https://www.rabbitmq.com/docs/shovel" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：其他消息系统（第 12-13 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mq-others",
    title: "阶段四：其他消息系统",
    duration: "第 12-13 周",
    goal: "了解 NATS、Redis Streams 等消息系统，掌握消息系统选型方法。",
    weeks: [
      {
        id: "mq-w12",
        title: "第 12 周：NATS / JetStream",
        summary: "掌握 NATS 的低延迟消息与 JetStream 持久化能力。",
        keyPoints: [
          "NATS Core 提供超低延迟的消息传递。",
          "JetStream 为 NATS 添加持久化和流处理能力。",
          "NATS 适合云原生微服务场景。",
        ],
        lessons: [
          {
            id: "mq-w12-1",
            title: "NATS Core：低延迟消息",
            detail: "理解 NATS 的设计理念与核心功能。",
            keyPoints: [
              "At-most-once：默认不持久化，追求最低延迟。",
              "Pub/Sub、Request/Reply、Queue Groups。",
              "极简运维：单二进制，无外部依赖。",
            ],
            resources: [
              { title: "NATS Concepts", url: "https://docs.nats.io/nats-concepts/what-is-nats" },
              { title: "NATS Architecture", url: "https://docs.nats.io/nats-concepts/nats-architecture" },
              { title: "Synadia: NATS", url: "https://www.synadia.com/" },
            ],
          },
          {
            id: "mq-w12-2",
            title: "JetStream：持久化与流",
            detail: "使用 JetStream 实现消息持久化与流处理。",
            keyPoints: [
              "Streams：持久化消息存储，支持重放。",
              "Consumers：Push 和 Pull 消费模式。",
              "Exactly-once：通过消息去重实现。",
            ],
            resources: [
              { title: "JetStream", url: "https://docs.nats.io/nats-concepts/jetstream" },
              { title: "JetStream Walkthrough", url: "https://docs.nats.io/using-nats/developer/develop_jetstream" },
              { title: "Streams and Consumers", url: "https://docs.nats.io/nats-concepts/jetstream/streams" },
            ],
          },
          {
            id: "mq-w12-3",
            title: "NATS vs Kafka 选型",
            detail: "比较 NATS 与 Kafka 的适用场景。",
            keyPoints: [
              "延迟：NATS 亚毫秒级，Kafka 10-50ms。",
              "吞吐：Kafka 更高（100万+/秒）。",
              "运维复杂度：NATS 极简，Kafka 较复杂。",
            ],
            resources: [
              { title: "NATS vs Kafka", url: "https://docs.nats.io/nats-concepts/overview/compare-nats" },
              { title: "Synadia: Comparison", url: "https://www.synadia.com/blog/nats-and-kafka-compared" },
              { title: "Benchmarks 2025", url: "https://onidel.com/blog/nats-jetstream-rabbitmq-kafka-2025-benchmarks" },
            ],
          },
        ],
      },
      {
        id: "mq-w13",
        title: "第 13 周：Redis Streams 与消息系统选型",
        summary: "了解 Redis Streams 和 Pulsar，掌握消息系统选型决策。",
        keyPoints: [
          "Redis Streams 适合轻量级消息队列场景。",
          "Apache Pulsar 提供多租户、分层存储能力。",
          "选型需考虑吞吐、延迟、持久化、运维复杂度。",
        ],
        lessons: [
          {
            id: "mq-w13-1",
            title: "Redis Pub/Sub 与 Streams",
            detail: "使用 Redis 实现消息队列功能。",
            keyPoints: [
              "Pub/Sub：简单的发布订阅，无持久化。",
              "Streams：类似 Kafka 的追加日志，支持消费组。",
              "适用场景：已有 Redis，消息量不大，延迟敏感。",
            ],
            resources: [
              { title: "Redis Streams", url: "https://redis.io/docs/latest/develop/data-types/streams/" },
              { title: "Streams Tutorial", url: "https://redis.io/docs/latest/develop/data-types/streams-tutorial/" },
              { title: "Redis Pub/Sub", url: "https://redis.io/docs/latest/develop/interact/pubsub/" },
            ],
          },
          {
            id: "mq-w13-2",
            title: "Apache Pulsar 简介",
            detail: "了解 Pulsar 的架构与独特特性。",
            keyPoints: [
              "计算存储分离：Broker 无状态，BookKeeper 存储。",
              "多租户：原生支持多租户隔离。",
              "分层存储：冷数据自动卸载到对象存储。",
            ],
            resources: [
              { title: "Apache Pulsar", url: "https://pulsar.apache.org/docs/concepts-overview/" },
              { title: "Pulsar vs Kafka", url: "https://pulsar.apache.org/docs/concepts-pulsar-vs-kafka/" },
              { title: "Pulsar Architecture", url: "https://pulsar.apache.org/docs/concepts-architecture-overview/" },
            ],
          },
          {
            id: "mq-w13-3",
            title: "消息系统选型决策树",
            detail: "根据需求选择合适的消息系统。",
            keyPoints: [
              "高吞吐 + 持久化 → Kafka。",
              "低延迟 + 简单运维 → NATS。",
              "灵活路由 + 传统队列 → RabbitMQ。",
              "已有 Redis + 轻量需求 → Redis Streams。",
            ],
            resources: [
              { title: "Message Queue Comparison", url: "https://gcore.com/learning/nats-rabbitmq-nsq-kafka-comparison" },
              { title: "Choosing a Message Broker", url: "https://www.confluent.io/blog/kafka-vs-other-messaging-systems/" },
              { title: "Decision Framework", url: "https://developer.confluent.io/learn/choosing-a-message-queue/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段五：事件驱动架构（第 14-16 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mq-eda",
    title: "阶段五：事件驱动架构",
    duration: "第 14-16 周",
    goal: "掌握事件驱动设计模式、事件溯源与 CQRS 架构。",
    weeks: [
      {
        id: "mq-w14",
        title: "第 14 周：事件驱动设计模式",
        summary: "理解事件驱动架构的核心模式与分布式事务处理。",
        keyPoints: [
          "事件是已发生的不可变事实，命令是意图。",
          "事件通知与事件携带状态是两种不同模式。",
          "Saga 模式处理跨服务的分布式事务。",
        ],
        lessons: [
          {
            id: "mq-w14-1",
            title: "事件 vs 命令 vs 查询",
            detail: "区分事件、命令和查询的语义与用途。",
            keyPoints: [
              "事件（Event）：已发生的事实，不可变，过去式命名。",
              "命令（Command）：执行意图，可能失败，祈使句命名。",
              "查询（Query）：读取数据，不改变状态。",
            ],
            resources: [
              { title: "Event-Driven Architecture", url: "https://martinfowler.com/articles/201701-event-driven.html" },
              { title: "Events vs Commands", url: "https://www.eventstore.com/blog/what-is-event-sourcing" },
              { title: "EDA Patterns", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/EventMessage.html" },
            ],
          },
          {
            id: "mq-w14-2",
            title: "事件通知 vs 事件携带状态",
            detail: "选择合适的事件设计模式。",
            keyPoints: [
              "事件通知：只包含 ID，消费者需要查询详情。",
              "事件携带状态：包含完整数据，消费者自给自足。",
              "权衡：解耦 vs 数据一致性。",
            ],
            resources: [
              { title: "Event Notification", url: "https://martinfowler.com/articles/201701-event-driven.html#EventNotification" },
              { title: "Event-Carried State Transfer", url: "https://martinfowler.com/articles/201701-event-driven.html#Event-carriedStateTransfer" },
              { title: "Event Design", url: "https://www.eventstore.com/blog/event-design-and-event-first-development" },
            ],
          },
          {
            id: "mq-w14-3",
            title: "Saga 模式与分布式事务",
            detail: "使用 Saga 模式处理跨服务事务。",
            keyPoints: [
              "Saga：一系列本地事务，通过事件或命令协调。",
              "编排式 Saga：中央协调器控制流程。",
              "协同式 Saga：服务间通过事件自协调。",
            ],
            resources: [
              { title: "Saga Pattern", url: "https://microservices.io/patterns/data/saga.html" },
              { title: "Orchestration vs Choreography", url: "https://temporal.io/blog/orchestration-vs-choreography" },
              { title: "Saga Implementation", url: "https://www.baeldung.com/cs/saga-pattern-microservices" },
            ],
          },
        ],
      },
      {
        id: "mq-w15",
        title: "第 15 周：事件溯源（Event Sourcing）",
        summary: "使用事件溯源模式存储和重建系统状态。",
        keyPoints: [
          "事件溯源以事件序列作为唯一真相来源。",
          "状态通过重放事件序列重建。",
          "快照优化长事件序列的重放性能。",
        ],
        lessons: [
          {
            id: "mq-w15-1",
            title: "事件溯源原理",
            detail: "理解事件溯源的核心概念与优势。",
            keyPoints: [
              "事件日志是唯一真相来源，状态是派生视图。",
              "完整审计：每个变更都被记录。",
              "时间旅行：可以重建任意时刻的状态。",
            ],
            resources: [
              { title: "Event Sourcing", url: "https://martinfowler.com/eaaDev/EventSourcing.html" },
              { title: "EventStore: Event Sourcing", url: "https://www.eventstore.com/event-sourcing" },
              { title: "Event Sourcing Basics", url: "https://eventmodeling.org/posts/what-is-event-modeling/" },
            ],
          },
          {
            id: "mq-w15-2",
            title: "事件存储设计",
            detail: "设计和实现事件存储。",
            keyPoints: [
              "事件格式：ID、类型、数据、元数据、时间戳。",
              "聚合根：事件按聚合组织，保证一致性边界。",
              "版本控制：乐观并发控制，防止冲突。",
            ],
            resources: [
              { title: "Event Store Design", url: "https://www.eventstore.com/blog/event-store-explained" },
              { title: "Aggregate Design", url: "https://www.eventstore.com/blog/what-is-aggregate-in-domain-driven-design" },
              { title: "EventStoreDB", url: "https://www.eventstore.com/eventstoredb" },
            ],
          },
          {
            id: "mq-w15-3",
            title: "快照与重放",
            detail: "优化事件溯源的性能与可用性。",
            keyPoints: [
              "快照：定期保存聚合状态，减少重放事件数量。",
              "快照策略：每 N 个事件或每 T 时间。",
              "事件版本化：处理事件格式演进。",
            ],
            resources: [
              { title: "Snapshots in Event Sourcing", url: "https://www.eventstore.com/blog/snapshots-in-event-sourcing" },
              { title: "Event Versioning", url: "https://www.eventstore.com/blog/event-versioning-with-json-schema" },
              { title: "Performance Optimization", url: "https://blog.eventstore.com/event-sourcing-and-cqrs-lessons-learned" },
            ],
          },
        ],
      },
      {
        id: "mq-w16",
        title: "第 16 周：CQRS",
        summary: "使用 CQRS 模式分离读写模型。",
        keyPoints: [
          "CQRS 将读模型和写模型分离，独立优化。",
          "投影将事件流转换为查询优化的读模型。",
          "最终一致性需要特殊处理。",
        ],
        lessons: [
          {
            id: "mq-w16-1",
            title: "读写分离模型",
            detail: "理解 CQRS 的架构与优势。",
            keyPoints: [
              "Command：修改状态，通过写模型处理。",
              "Query：读取数据，通过读模型处理。",
              "独立扩展：读写分别优化和扩展。",
            ],
            resources: [
              { title: "CQRS", url: "https://martinfowler.com/bliki/CQRS.html" },
              { title: "CQRS Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs" },
              { title: "CQRS Journey", url: "https://learn.microsoft.com/en-us/previous-versions/msp-n-p/jj554200(v=pandp.10)" },
            ],
          },
          {
            id: "mq-w16-2",
            title: "投影与物化视图",
            detail: "使用投影构建查询优化的读模型。",
            keyPoints: [
              "投影：订阅事件流，构建读模型。",
              "物化视图：预计算的查询结果。",
              "多投影：同一事件源可有多个不同读模型。",
            ],
            resources: [
              { title: "Projections", url: "https://www.eventstore.com/blog/projections-in-event-sourcing" },
              { title: "Read Model Patterns", url: "https://eventmodeling.org/posts/what-is-event-modeling/#projections" },
              { title: "Materialized Views", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/materialized-view" },
            ],
          },
          {
            id: "mq-w16-3",
            title: "最终一致性处理",
            detail: "处理 CQRS 中的最终一致性问题。",
            keyPoints: [
              "最终一致性：读模型可能落后于写模型。",
              "用户体验：乐观 UI、加载状态、轮询刷新。",
              "一致性边界：确定可接受的延迟。",
            ],
            resources: [
              { title: "Eventual Consistency", url: "https://www.eventstore.com/blog/eventual-consistency-is-a-business-decision" },
              { title: "UI Patterns for ES/CQRS", url: "https://blog.eventstore.com/user-interfaces-and-event-sourcing" },
              { title: "Consistency Strategies", url: "https://www.baeldung.com/cs/eventual-consistency-vs-strong-eventual-consistency-vs-strong-consistency" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段六：流处理（第 17-18 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mq-streaming",
    title: "阶段六：流处理",
    duration: "第 17-18 周",
    goal: "掌握流处理的核心概念与主流框架。",
    weeks: [
      {
        id: "mq-w17",
        title: "第 17 周：流处理概念与 Kafka Streams",
        summary: "理解流处理范式，深入 Kafka Streams 与 ksqlDB。",
        keyPoints: [
          "流处理处理无界数据流，与批处理互补。",
          "时间语义和水位线处理乱序数据。",
          "ksqlDB 提供 SQL 接口进行实时流查询。",
        ],
        lessons: [
          {
            id: "mq-w17-1",
            title: "批处理 vs 流处理",
            detail: "理解批处理与流处理的区别与适用场景。",
            keyPoints: [
              "批处理：有界数据，高延迟，高吞吐。",
              "流处理：无界数据，低延迟，持续处理。",
              "Lambda 与 Kappa 架构：批流融合方案。",
            ],
            resources: [
              { title: "Streaming 101", url: "https://www.oreilly.com/radar/the-world-beyond-batch-streaming-101/" },
              { title: "Batch vs Stream", url: "https://www.confluent.io/learn/batch-vs-real-time-data-processing/" },
              { title: "Kappa Architecture", url: "https://milinda.pathirage.org/kappa-architecture.com/" },
            ],
          },
          {
            id: "mq-w17-2",
            title: "时间语义与水位线",
            detail: "处理流处理中的时间与乱序问题。",
            keyPoints: [
              "事件时间 vs 处理时间：以数据产生时间为准。",
              "水位线（Watermark）：标记事件时间进度。",
              "延迟数据处理：允许窗口、侧输出。",
            ],
            resources: [
              { title: "Time in Streaming", url: "https://www.oreilly.com/radar/the-world-beyond-batch-streaming-102/" },
              { title: "Watermarks", url: "https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/concepts/time/" },
              { title: "Event Time Processing", url: "https://developer.confluent.io/courses/kafka-streams/stateful-operations/" },
            ],
          },
          {
            id: "mq-w17-3",
            title: "ksqlDB 实时查询",
            detail: "使用 ksqlDB 进行 SQL 式流处理。",
            keyPoints: [
              "ksqlDB：Kafka 之上的流处理数据库。",
              "Stream 与 Table：流和表的双重抽象。",
              "持久化查询：结果持续更新输出。",
            ],
            resources: [
              { title: "ksqlDB", url: "https://ksqldb.io/" },
              { title: "ksqlDB Quickstart", url: "https://ksqldb.io/quickstart.html" },
              { title: "Stream-Table Duality", url: "https://www.confluent.io/blog/kafka-streams-tables-part-1-event-streaming/" },
            ],
          },
        ],
      },
      {
        id: "mq-w18",
        title: "第 18 周：Apache Flink 入门",
        summary: "掌握 Flink 的架构与编程模型。",
        keyPoints: [
          "Flink 是强大的分布式流处理框架。",
          "Checkpointing 提供 Exactly-once 保证。",
          "Flink + Kafka 是流处理的常见组合。",
        ],
        lessons: [
          {
            id: "mq-w18-1",
            title: "Flink 架构与编程模型",
            detail: "理解 Flink 的核心架构与编程抽象。",
            keyPoints: [
              "JobManager 与 TaskManager：集群角色。",
              "DataStream API：处理无界流。",
              "Table API / SQL：声明式处理。",
            ],
            resources: [
              { title: "Flink Architecture", url: "https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/concepts/flink-architecture/" },
              { title: "DataStream API", url: "https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/dev/datastream/overview/" },
              { title: "Flink Quickstart", url: "https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/try-flink/local_installation/" },
            ],
          },
          {
            id: "mq-w18-2",
            title: "窗口与状态管理",
            detail: "使用 Flink 进行窗口聚合与状态管理。",
            keyPoints: [
              "窗口类型：Tumbling、Sliding、Session。",
              "状态后端：内存、RocksDB、可扩展状态。",
              "Checkpointing：定期快照，故障恢复。",
            ],
            resources: [
              { title: "Flink Windows", url: "https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/dev/datastream/operators/windows/" },
              { title: "State Backends", url: "https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/ops/state/state_backends/" },
              { title: "Checkpointing", url: "https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/dev/datastream/fault-tolerance/checkpointing/" },
            ],
          },
          {
            id: "mq-w18-3",
            title: "Flink + Kafka 实战",
            detail: "使用 Flink 消费和生产 Kafka 消息。",
            keyPoints: [
              "Kafka Connector：Source 和 Sink。",
              "Exactly-once：Flink + Kafka 事务。",
              "实战案例：实时数据管道、CEP。",
            ],
            resources: [
              { title: "Flink Kafka Connector", url: "https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/connectors/datastream/kafka/" },
              { title: "End-to-End Exactly-Once", url: "https://flink.apache.org/2018/02/28/an-overview-of-end-to-end-exactly-once-processing-in-apache-flink-with-kafka/" },
              { title: "Flink Use Cases", url: "https://flink.apache.org/use-cases/" },
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
export const messageQueueKnowledgeCards: KnowledgeCard[] = [
  {
    id: "mq-kc-1",
    title: "消息传递保证",
    summary: "At-most-once、At-least-once、Exactly-once 是三种消息传递语义。",
    points: [
      "At-most-once：消息可能丢失，不会重复，性能最高",
      "At-least-once：消息不会丢失，可能重复，需要幂等处理",
      "Exactly-once：消息不丢不重，实现复杂，有性能代价",
      "大多数场景选择 At-least-once + 幂等消费者",
    ],
    practice: "实现一个幂等消费者，处理重复消息。",
  },
  {
    id: "mq-kc-2",
    title: "Kafka 核心概念",
    summary: "Topic、Partition、Consumer Group 是 Kafka 的核心抽象。",
    points: [
      "Topic：消息的逻辑分类，类似数据库的表",
      "Partition：Topic 的物理分片，实现并行处理",
      "Offset：消息在 Partition 中的位置",
      "Consumer Group：一组消费者共同消费 Topic",
    ],
    practice: "创建一个多分区 Topic，观察消息如何在消费者之间分配。",
  },
  {
    id: "mq-kc-3",
    title: "Kafka 4.0 KRaft",
    summary: "Kafka 4.0 完全移除 ZooKeeper，使用 KRaft 管理元数据。",
    points: [
      "KRaft：基于 Raft 的共识协议，简化架构",
      "Controller Quorum：3 或 5 个 Controller 节点",
      "支持百万级分区，更快的故障恢复",
      "Java 17 是 Broker 的最低要求",
    ],
    practice: "使用 KRaft 模式部署 Kafka 集群。",
  },
  {
    id: "mq-kc-4",
    title: "RabbitMQ Exchange 类型",
    summary: "Exchange 决定消息如何路由到队列。",
    points: [
      "Direct：精确匹配 Routing Key",
      "Fanout：广播到所有绑定队列",
      "Topic：通配符匹配（* 和 #）",
      "Headers：基于消息头属性匹配",
    ],
    practice: "创建 Topic Exchange，使用通配符路由消息。",
  },
  {
    id: "mq-kc-5",
    title: "RabbitMQ Quorum Queues",
    summary: "Quorum Queues 是 RabbitMQ 4.x 的默认高可用队列。",
    points: [
      "基于 Raft 协议，强一致性",
      "替代已移除的经典镜像队列",
      "支持消息优先级（高/普通两级）",
      "默认 delivery limit 为 20",
    ],
    practice: "创建 Quorum Queue 并测试故障转移。",
  },
  {
    id: "mq-kc-6",
    title: "NATS vs Kafka",
    summary: "NATS 追求低延迟简单运维，Kafka 追求高吞吐持久化。",
    points: [
      "延迟：NATS 亚毫秒级，Kafka 10-50ms",
      "吞吐：Kafka 更高（100万+/秒）",
      "运维：NATS 极简，Kafka 较复杂",
      "JetStream 为 NATS 添加持久化能力",
    ],
    practice: "对比 NATS 和 Kafka 在相同场景下的延迟。",
  },
  {
    id: "mq-kc-7",
    title: "事件溯源",
    summary: "以事件序列作为唯一真相来源，状态通过重放事件重建。",
    points: [
      "事件日志是唯一真相来源",
      "完整审计：每个变更都被记录",
      "时间旅行：可以重建任意时刻的状态",
      "快照优化：减少重放事件数量",
    ],
    practice: "实现一个简单的事件溯源系统。",
  },
  {
    id: "mq-kc-8",
    title: "CQRS 模式",
    summary: "将读模型和写模型分离，独立优化。",
    points: [
      "Command：修改状态，通过写模型处理",
      "Query：读取数据，通过读模型处理",
      "独立扩展：读写分别优化和扩展",
      "最终一致性：读模型可能落后于写模型",
    ],
    practice: "设计一个 CQRS 架构的订单系统。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const messageQueueExamQuestions: QuizQuestion[] = [
  {
    id: "mq-q1",
    question: "消息队列的主要作用不包括以下哪项？",
    options: ["系统解耦", "流量削峰", "同步调用", "异步处理"],
    answer: 2,
    rationale: "消息队列主要用于解耦、削峰和异步处理，同步调用不是消息队列的典型用途。",
  },
  {
    id: "mq-q2",
    question: "At-least-once 消息传递保证意味着什么？",
    options: ["消息可能丢失", "消息不会丢失但可能重复", "消息不丢不重", "消息按顺序传递"],
    answer: 1,
    rationale: "At-least-once 保证消息至少被传递一次，不会丢失，但可能因为重试而重复传递。",
  },
  {
    id: "mq-q3",
    question: "Kafka 4.0 最重要的架构变化是什么？",
    options: ["支持更多分区", "完全移除 ZooKeeper", "新增消息压缩", "支持多数据中心"],
    answer: 1,
    rationale: "Kafka 4.0 最重要的变化是完全移除 ZooKeeper 依赖，使用 KRaft 管理元数据。",
  },
  {
    id: "mq-q4",
    question: "Kafka 中保证消息顺序的最小单位是？",
    options: ["Topic", "Partition", "Consumer Group", "Broker"],
    answer: 1,
    rationale: "Kafka 只在单个 Partition 内保证消息顺序，不同 Partition 之间没有顺序保证。",
  },
  {
    id: "mq-q5",
    question: "Kafka Producer 的 acks=all 意味着什么？",
    options: ["不等待确认", "只等待 Leader 确认", "等待所有 ISR 确认", "等待所有 Broker 确认"],
    answer: 2,
    rationale: "acks=all 表示等待所有 In-Sync Replicas (ISR) 确认消息写入，提供最高的数据可靠性。",
  },
  {
    id: "mq-q6",
    question: "RabbitMQ 4.0 中用于替代镜像队列的是？",
    options: ["Classic Queue", "Quorum Queue", "Priority Queue", "Delay Queue"],
    answer: 1,
    rationale: "RabbitMQ 4.0 移除了经典镜像队列，Quorum Queue 成为默认的高可用队列类型。",
  },
  {
    id: "mq-q7",
    question: "RabbitMQ 中哪种 Exchange 类型支持通配符路由？",
    options: ["Direct", "Fanout", "Topic", "Headers"],
    answer: 2,
    rationale: "Topic Exchange 支持使用 * 和 # 通配符进行路由键匹配。",
  },
  {
    id: "mq-q8",
    question: "NATS 相比 Kafka 的主要优势是什么？",
    options: ["更高的吞吐量", "更低的延迟和更简单的运维", "更好的持久化", "更多的消息类型"],
    answer: 1,
    rationale: "NATS 的主要优势是亚毫秒级延迟和极简的运维，适合低延迟场景。",
  },
  {
    id: "mq-q9",
    question: "JetStream 是什么？",
    options: ["Kafka 的流处理库", "NATS 的持久化层", "RabbitMQ 的新队列类型", "Redis 的消息功能"],
    answer: 1,
    rationale: "JetStream 是内置于 NATS 的持久化层，为 NATS 添加消息持久化和流处理能力。",
  },
  {
    id: "mq-q10",
    question: "事件溯源（Event Sourcing）的核心思想是什么？",
    options: ["存储最新状态", "以事件序列作为唯一真相来源", "使用数据库触发器", "实时同步数据"],
    answer: 1,
    rationale: "事件溯源将事件序列作为唯一真相来源，状态通过重放事件重建。",
  },
  {
    id: "mq-q11",
    question: "Saga 模式主要用于解决什么问题？",
    options: ["消息去重", "分布式事务", "消息路由", "负载均衡"],
    answer: 1,
    rationale: "Saga 模式通过一系列本地事务和补偿操作来处理跨服务的分布式事务。",
  },
  {
    id: "mq-q12",
    question: "CQRS 模式的核心是什么？",
    options: ["数据库分片", "读写模型分离", "消息队列", "缓存优化"],
    answer: 1,
    rationale: "CQRS（Command Query Responsibility Segregation）将读模型和写模型分离，独立优化。",
  },
  {
    id: "mq-q13",
    question: "Kafka Streams 的状态存储默认使用什么？",
    options: ["MySQL", "PostgreSQL", "RocksDB", "Redis"],
    answer: 2,
    rationale: "Kafka Streams 默认使用 RocksDB 作为本地状态存储。",
  },
  {
    id: "mq-q14",
    question: "流处理中的水位线（Watermark）用于什么？",
    options: ["控制流量", "标记事件时间进度", "消息去重", "负载均衡"],
    answer: 1,
    rationale: "水位线用于标记事件时间的进度，帮助处理乱序到达的事件。",
  },
  {
    id: "mq-q15",
    question: "ksqlDB 是什么？",
    options: ["传统关系数据库", "Kafka 之上的流处理数据库", "NoSQL 数据库", "图数据库"],
    answer: 1,
    rationale: "ksqlDB 是构建在 Kafka 之上的流处理数据库，提供 SQL 接口进行实时流查询。",
  },
  {
    id: "mq-q16",
    question: "Apache Flink 的 Checkpointing 用于什么？",
    options: ["负载均衡", "故障恢复", "消息路由", "数据压缩"],
    answer: 1,
    rationale: "Checkpointing 定期保存处理状态的快照，用于故障恢复，实现 Exactly-once 语义。",
  },
  {
    id: "mq-q17",
    question: "Kafka 中的日志压缩（Log Compaction）保留什么？",
    options: ["所有消息", "每个 Key 的最新值", "最近 N 条消息", "最近 N 天的消息"],
    answer: 1,
    rationale: "日志压缩保留每个 Key 的最新值，常用于 Changelog 和状态恢复场景。",
  },
  {
    id: "mq-q18",
    question: "死信队列（DLQ）的主要作用是什么？",
    options: ["存储正常消息", "存放无法处理的消息", "消息压缩存储", "消息加密存储"],
    answer: 1,
    rationale: "死信队列用于存放无法正常处理的消息，便于后续分析和手动重试。",
  },
  {
    id: "mq-q19",
    question: "Schema Registry 的主要作用是什么？",
    options: ["消息加密", "集中管理消息 Schema 并确保兼容性", "消息路由", "负载均衡"],
    answer: 1,
    rationale: "Schema Registry 集中管理 Avro/Protobuf/JSON Schema，确保生产者和消费者的数据兼容。",
  },
  {
    id: "mq-q20",
    question: "以下哪个不是 Flink 的窗口类型？",
    options: ["Tumbling Window", "Sliding Window", "Session Window", "Partition Window"],
    answer: 3,
    rationale: "Flink 支持 Tumbling（滚动）、Sliding（滑动）、Session（会话）窗口，没有 Partition Window。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const messageQueueRoadmap: RoadmapDefinition = {
  id: "message-queue",
  label: "消息队列与事件驱动",
  title: "消息队列与事件驱动",
  durationLabel: "18 个主题",
  description:
    "从消息队列基础概念出发，深入 Kafka 4.0（KRaft）、RabbitMQ 4.x（Quorum Queues）、NATS/JetStream，掌握事件驱动架构、事件溯源、CQRS 模式，探索 Kafka Streams 与 Apache Flink 流处理。",
  heroBadge: "Kafka · RabbitMQ · 事件驱动 · 流处理",
  stages: messageQueueStages,
  knowledgeCards: messageQueueKnowledgeCards,
  examQuestions: messageQueueExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始消息队列学习之旅！先从核心概念和传递保证开始。"
    if (percent < 25) return "继续学习 Kafka 架构，理解 KRaft 和生产者/消费者配置。"
    if (percent < 50) return "深入 RabbitMQ 和其他消息系统，了解不同场景的选型。"
    if (percent < 75) return "事件驱动架构是重点！掌握事件溯源和 CQRS 模式。"
    if (percent < 100) return "即将完成！流处理是现代数据架构的关键能力。"
    return "恭喜完成！你已掌握消息队列与事件驱动的完整知识体系。"
  },
  resourceGuide: {
    environment:
      "推荐使用 Docker Compose 本地搭建 Kafka、RabbitMQ 环境。Confluent 和 CloudAMQP 提供免费试用。",
    fallbackKeyPoints: [
      "At-least-once + 幂等消费者是最常用的可靠性模式",
      "Kafka 4.0 使用 KRaft 替代 ZooKeeper，简化运维",
      "RabbitMQ Quorum Queues 是 4.x 的默认高可用方案",
      "NATS 适合低延迟场景，Kafka 适合高吞吐场景",
      "事件溯源和 CQRS 常一起使用，实现完整的事件驱动架构",
    ],
    handsOnSteps: [
      "使用 Docker 部署 Kafka KRaft 模式集群",
      "实现幂等消费者，处理重复消息",
      "使用 RabbitMQ 实现延迟队列",
      "设计一个事件溯源的订单系统",
      "使用 Kafka Streams 实现实时数据聚合",
    ],
    selfChecks: [
      "能否解释三种消息传递保证的区别？",
      "能否配置 Kafka Producer 实现高可靠性？",
      "能否设计 RabbitMQ 的交换机和队列拓扑？",
      "能否实现事件溯源和 CQRS 模式？",
      "能否使用 Kafka Streams 处理窗口聚合？",
    ],
    extensions: [
      "深入 Flink 状态管理和 CEP",
      "学习 Debezium CDC 实时数据同步",
      "探索云原生消息服务（AWS SQS/SNS, GCP Pub/Sub）",
      "研究分布式事务和 Saga 编排",
    ],
    lessonQuizAdvice: "每周完成后测验，重点关注消息传递保证、Kafka 配置和事件驱动模式。",
  },
}
