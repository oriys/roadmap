import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const kafkaStages: Stage[] = [
  {
    id: "kafka-s1",
    title: "阶段一：基础概念与核心 API",
    duration: "第 1-3 周",
    goal: "理解消息系统核心概念，掌握 Kafka 架构与生产者/消费者 API。",
    weeks: [
      {
        id: "kafka-w1",
        title: "第 1 周：消息系统概述",
        summary: "理解消息中间件的作用，掌握 Kafka 在分布式系统中的定位。",
        overview: "消息系统是分布式架构的核心基础设施。本周从宏观视角理解消息队列的演进、Kafka 的设计哲学以及与传统 MQ 的差异。",
        keyPoints: [
          "消息队列实现生产者与消费者的解耦，提供异步通信与流量削峰",
          "Kafka 定位为分布式事件流平台，兼具消息队列与流处理能力",
          "Kafka 与 RabbitMQ/RocketMQ 的核心差异在于日志存储模型与消费模式",
        ],
        lessons: [
          {
            id: "kafka-w1-1",
            title: "消息队列演进与分类",
            detail: "梳理消息中间件从 JMS 到现代事件流平台的演进历程，对比点对点与发布/订阅模型。",
            keyPoints: [
              "点对点模型：消息只被一个消费者消费；发布/订阅模型：消息广播给所有订阅者。",
              "传统 MQ（RabbitMQ）基于 AMQP 协议，Kafka 基于自定义二进制协议。",
              "Kafka 将消息持久化到磁盘日志，支持消息回溯和重放。",
            ],
            resources: [
              { title: "Kafka 简介", url: "https://kafka.apache.org/intro" },
              { title: "消息传递语义", url: "https://kafka.apache.org/documentation/#semantics" },
              { title: "Confluent Kafka 概述", url: "https://docs.confluent.io/kafka/introduction.html" },
            ],
          },
          {
            id: "kafka-w1-2",
            title: "Kafka 设计哲学",
            detail: "理解 Kafka 以日志为核心的设计理念，分析高吞吐、持久化与水平扩展的技术基础。",
            keyPoints: [
              "Kafka 的核心抽象是「提交日志」——只追加、不可变的有序记录序列。",
              "顺序写磁盘 + 零拷贝（sendfile）是 Kafka 高吞吐的关键技术。",
              "分区机制实现水平扩展，每个分区是独立的有序日志。",
            ],
            resources: [
              { title: "Kafka 设计文档", url: "https://kafka.apache.org/documentation/#design" },
              { title: "The Log 论文", url: "https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying" },
            ],
          },
          {
            id: "kafka-w1-3",
            title: "Kafka 快速上手",
            detail: "在本地搭建单节点 Kafka 环境，完成消息的发送与接收，熟悉基本命令行工具。",
            keyPoints: [
              "使用 KRaft 模式（无 ZooKeeper）启动 Kafka，简化部署流程。",
              "kafka-topics.sh 管理 Topic，kafka-console-producer/consumer 测试消息收发。",
              "理解 bootstrap-servers、group.id 等基本配置项的含义。",
            ],
            resources: [
              { title: "Kafka 快速开始", url: "https://kafka.apache.org/quickstart" },
              { title: "KRaft 模式指南", url: "https://kafka.apache.org/documentation/#kraft" },
              { title: "Confluent 本地安装", url: "https://docs.confluent.io/kafka/operations-tools/kafka-tools.html" },
            ],
          },
        ],
      },
      {
        id: "kafka-w2",
        title: "第 2 周：Kafka 架构深入",
        summary: "掌握 Broker、Topic、Partition、Consumer Group 等核心概念。",
        overview: "Kafka 的分布式架构由多个组件协作完成。本周深入理解各组件的角色、数据分布策略与元数据管理机制。",
        keyPoints: [
          "Broker 是 Kafka 集群的工作节点，每个 Broker 管理若干 Partition",
          "Topic 是逻辑概念，Partition 是物理存储单元，消息按分区有序",
          "Consumer Group 实现消费端的负载均衡，每个分区只被组内一个消费者消费",
        ],
        lessons: [
          {
            id: "kafka-w2-1",
            title: "Broker 与集群架构",
            detail: "理解 Broker 的角色、Controller 选举机制以及集群元数据管理（ZooKeeper/KRaft）。",
            keyPoints: [
              "Controller 是特殊 Broker，负责分区 Leader 选举和元数据同步。",
              "KRaft 使用 Raft 协议替代 ZooKeeper 管理元数据，降低运维复杂度。",
              "Broker 通过 broker.id 唯一标识，支持动态加入和退出集群。",
            ],
            resources: [
              { title: "Broker 配置", url: "https://kafka.apache.org/documentation/#brokerconfigs" },
              { title: "KRaft 架构", url: "https://developer.confluent.io/learn/kraft/" },
            ],
          },
          {
            id: "kafka-w2-2",
            title: "Topic 与 Partition",
            detail: "深入理解 Topic 的分区策略、Partition 的物理存储结构与消息寻址机制。",
            keyPoints: [
              "每个 Partition 是一个有序的、不可变的消息序列，消息通过 offset 寻址。",
              "Partition 数量决定消费并行度上限，过多分区增加 Controller 压力。",
              "Segment 文件 + 稀疏索引实现高效的消息查找与过期清理。",
            ],
            resources: [
              { title: "Topic 配置", url: "https://kafka.apache.org/documentation/#topicconfigs" },
              { title: "存储内部机制", url: "https://kafka.apache.org/documentation/#log" },
              { title: "分区策略指南", url: "https://docs.confluent.io/kafka/design/partition-strategy.html" },
            ],
          },
          {
            id: "kafka-w2-3",
            title: "Consumer Group 机制",
            detail: "掌握 Consumer Group 的分区分配策略与消费进度管理。",
            keyPoints: [
              "同一 Group 内的消费者共享分区，不同 Group 独立消费全量消息。",
              "消费位移（offset）提交到内部 Topic __consumer_offsets。",
              "分区数应 >= 消费者数，否则多余消费者处于空闲状态。",
            ],
            resources: [
              { title: "消费者配置", url: "https://kafka.apache.org/documentation/#consumerconfigs" },
              { title: "Consumer Group 协议", url: "https://kafka.apache.org/documentation/#consumer" },
            ],
          },
        ],
      },
      {
        id: "kafka-w3",
        title: "第 3 周：生产者与消费者 API",
        summary: "掌握 Java 客户端 API，理解消息发送与消费的核心流程。",
        overview: "Kafka 客户端 API 是开发的基础。本周学习 Producer 和 Consumer 的核心参数、发送模式与消费模式。",
        keyPoints: [
          "Producer 支持同步、异步和 Fire-and-Forget 三种发送模式",
          "Consumer 需要管理 offset 提交策略以保证消息不丢失或不重复",
          "序列化/反序列化是消息编解码的核心环节",
        ],
        lessons: [
          {
            id: "kafka-w3-1",
            title: "Producer API 详解",
            detail: "掌握 KafkaProducer 的核心参数（acks、retries、batch.size）与发送回调机制。",
            keyPoints: [
              "acks=all 确保所有 ISR 副本确认写入，是最高可靠性配置。",
              "batch.size 和 linger.ms 控制批量发送行为，影响吞吐与延迟的平衡。",
              "幂等生产者（enable.idempotence=true）防止网络重试导致的消息重复。",
            ],
            resources: [
              { title: "Producer 配置", url: "https://kafka.apache.org/documentation/#producerconfigs" },
              { title: "Producer API", url: "https://kafka.apache.org/documentation/#producerapi" },
              { title: "Confluent Producer 指南", url: "https://docs.confluent.io/kafka-clients/java/current/overview.html" },
            ],
          },
          {
            id: "kafka-w3-2",
            title: "Consumer API 详解",
            detail: "掌握 KafkaConsumer 的 poll 循环、offset 管理与自动/手动提交策略。",
            keyPoints: [
              "poll() 是消费者的核心方法，控制拉取频率和批量大小。",
              "自动提交（enable.auto.commit）简单但可能丢失消息或重复消费。",
              "手动提交（commitSync/commitAsync）提供精确的消费进度控制。",
            ],
            resources: [
              { title: "Consumer API", url: "https://kafka.apache.org/documentation/#consumerapi" },
              { title: "Consumer 配置", url: "https://kafka.apache.org/documentation/#consumerconfigs" },
            ],
          },
          {
            id: "kafka-w3-3",
            title: "序列化与消息设计",
            detail: "选择合适的序列化方案（JSON/Avro/Protobuf），设计高效的消息格式与 Key 策略。",
            keyPoints: [
              "Key 决定消息路由到哪个分区，相同 Key 的消息保证分区有序。",
              "Avro 配合 Schema Registry 实现 schema 演进与兼容性检查。",
              "消息大小影响吞吐量，建议控制在 1MB 以内，大消息考虑引用模式。",
            ],
            resources: [
              { title: "序列化机制", url: "https://kafka.apache.org/documentation/#serialization" },
              { title: "Schema Registry", url: "https://docs.confluent.io/platform/current/schema-registry/index.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "kafka-s2",
    title: "阶段二：核心机制与流处理",
    duration: "第 4-6 周",
    goal: "掌握分区副本、消息投递语义、Rebalance 机制与 Kafka Streams 基础。",
    weeks: [
      {
        id: "kafka-w4",
        title: "第 4 周：分区策略与副本机制",
        summary: "深入理解分区分配、副本同步与 Leader 选举。",
        overview: "副本机制是 Kafka 高可用的基石。本周学习 ISR、Leader 选举、副本同步协议以及分区再平衡策略。",
        keyPoints: [
          "ISR（In-Sync Replicas）是与 Leader 保持同步的副本集合",
          "Leader 负责读写，Follower 异步拉取数据保持同步",
          "Unclean Leader Election 会在可用性与数据一致性之间做取舍",
        ],
        lessons: [
          {
            id: "kafka-w4-1",
            title: "副本与 ISR 机制",
            detail: "理解副本的角色划分（Leader/Follower）、ISR 的维护策略与 replica.lag.time.max.ms 的含义。",
            keyPoints: [
              "Follower 通过 Fetch 请求从 Leader 拉取数据，落后超时会被移出 ISR。",
              "min.insync.replicas 与 acks=all 配合确保写入持久性。",
              "Preferred Leader 机制保持分区 Leader 在各 Broker 间均匀分布。",
            ],
            resources: [
              { title: "副本机制", url: "https://kafka.apache.org/documentation/#replication" },
              { title: "ISR 详解", url: "https://docs.confluent.io/kafka/design/replication.html" },
            ],
          },
          {
            id: "kafka-w4-2",
            title: "Leader 选举与故障恢复",
            detail: "掌握 Controller 的 Leader 选举流程、Unclean Leader Election 的风险与配置策略。",
            keyPoints: [
              "Controller 监测 Broker 存活状态，触发分区 Leader 重新选举。",
              "unclean.leader.election.enable=false 防止非 ISR 副本成为 Leader 导致数据丢失。",
              "故障恢复时 Follower 需要截断到 High Watermark 再从新 Leader 同步。",
            ],
            resources: [
              { title: "Controller 设计", url: "https://kafka.apache.org/documentation/#design_replicatedlog" },
              { title: "故障恢复", url: "https://docs.confluent.io/kafka/design/controller.html" },
              { title: "Kafka 高可用", url: "https://kafka.apache.org/documentation/#basic_ops_leader_balancing" },
            ],
          },
          {
            id: "kafka-w4-3",
            title: "分区分配策略",
            detail: "对比 Range、RoundRobin、Sticky 分配策略的特点与适用场景。",
            keyPoints: [
              "Range 策略按 Topic 粒度分配，可能导致消费者负载不均。",
              "Sticky 策略在 Rebalance 时尽量保持原有分配，减少分区迁移。",
              "CooperativeStickyAssignor 支持增量 Rebalance，避免全量停顿。",
            ],
            resources: [
              { title: "分区分配策略", url: "https://kafka.apache.org/documentation/#consumerconfigs_partition.assignment.strategy" },
              { title: "增量 Rebalance", url: "https://docs.confluent.io/kafka-clients/java/current/overview.html#incremental-cooperative-rebalancing" },
            ],
          },
        ],
      },
      {
        id: "kafka-w5",
        title: "第 5 周：消息投递语义与事务",
        summary: "掌握 at-least-once、at-most-once、exactly-once 语义与事务 API。",
        overview: "消息投递保证是可靠性设计的核心。本周深入理解三种投递语义的实现原理与 Kafka 事务机制。",
        keyPoints: [
          "at-least-once 是最常见的语义，消息可能重复但不丢失",
          "exactly-once 通过幂等生产者 + 事务实现端到端精确一次",
          "事务 API 支持跨分区的原子写入与 read_committed 隔离级别",
        ],
        lessons: [
          {
            id: "kafka-w5-1",
            title: "三种投递语义",
            detail: "对比 at-most-once、at-least-once、exactly-once 的实现方式与适用场景。",
            keyPoints: [
              "at-most-once：消费后立即提交 offset，消息可能丢失但不重复。",
              "at-least-once：处理完成后提交 offset，消息不丢失但可能重复。",
              "消费端幂等性是实现 exactly-once 效果的实用方案（去重表/唯一键）。",
            ],
            resources: [
              { title: "消息语义", url: "https://kafka.apache.org/documentation/#semantics" },
              { title: "Exactly-Once 语义", url: "https://docs.confluent.io/kafka/design/delivery-semantics.html" },
              { title: "幂等生产者", url: "https://kafka.apache.org/documentation/#producerconfigs_enable.idempotence" },
            ],
          },
          {
            id: "kafka-w5-2",
            title: "Kafka 事务机制",
            detail: "掌握事务 API（initTransactions/beginTransaction/commitTransaction）与跨分区原子写入。",
            keyPoints: [
              "事务 Producer 通过 transactional.id 标识，保证跨会话的幂等性。",
              "sendOffsetsToTransaction 将消费位移和生产消息绑定到同一事务。",
              "Consumer 设置 isolation.level=read_committed 只读取已提交的事务消息。",
            ],
            resources: [
              { title: "事务设计文档", url: "https://kafka.apache.org/documentation/#transactions" },
              { title: "事务 API 指南", url: "https://docs.confluent.io/kafka-clients/java/current/overview.html#transactions" },
            ],
          },
          {
            id: "kafka-w5-3",
            title: "消息可靠性保障实践",
            detail: "设计端到端的消息可靠性方案，覆盖生产端、Broker 端和消费端的配置与最佳实践。",
            keyPoints: [
              "生产端：acks=all + retries + enable.idempotence 确保消息不丢不重。",
              "Broker 端：replication.factor>=3 + min.insync.replicas=2 保障持久性。",
              "消费端：手动提交 offset + 业务幂等处理，防止重复消费。",
            ],
            resources: [
              { title: "可靠性配置", url: "https://kafka.apache.org/documentation/#design_guarantees" },
              { title: "生产环境最佳实践", url: "https://docs.confluent.io/kafka/operations-tools/kafka-tools.html" },
            ],
          },
        ],
      },
      {
        id: "kafka-w6",
        title: "第 6 周：Rebalance 与 Kafka Streams 基础",
        summary: "深入理解 Rebalance 机制，入门 Kafka Streams 流处理框架。",
        overview: "Rebalance 是消费者组的核心协调机制。本周学习 Rebalance 触发条件与优化策略，并入门 Kafka Streams。",
        keyPoints: [
          "Rebalance 在消费者加入/离开或分区变化时触发，期间消费暂停",
          "Static Membership 和 Cooperative Rebalance 可减少 Rebalance 影响",
          "Kafka Streams 是轻量级流处理库，无需额外集群基础设施",
        ],
        lessons: [
          {
            id: "kafka-w6-1",
            title: "Rebalance 深入分析",
            detail: "理解 Rebalance 的触发条件、执行流程（JoinGroup/SyncGroup）与对消费吞吐的影响。",
            keyPoints: [
              "Rebalance 由 Group Coordinator 协调，分为 Eager 和 Cooperative 两种协议。",
              "session.timeout.ms 和 heartbeat.interval.ms 控制消费者存活检测。",
              "max.poll.interval.ms 超时会触发 Rebalance，注意控制消费处理时间。",
            ],
            resources: [
              { title: "Group 协议", url: "https://kafka.apache.org/documentation/#consumer" },
              { title: "Rebalance 优化", url: "https://docs.confluent.io/kafka-clients/java/current/overview.html#consumer-group-rebalancing" },
            ],
          },
          {
            id: "kafka-w6-2",
            title: "Rebalance 优化策略",
            detail: "使用 Static Membership、Cooperative Rebalance 和合理配置减少 Rebalance 频率与影响。",
            keyPoints: [
              "Static Membership（group.instance.id）避免短暂离线触发不必要的 Rebalance。",
              "CooperativeStickyAssignor 实现增量 Rebalance，不中断未受影响的消费者。",
              "预分配足够分区数，避免扩容时的大规模 Rebalance。",
            ],
            resources: [
              { title: "Static Membership", url: "https://kafka.apache.org/documentation/#static_membership" },
              { title: "Cooperative Rebalance", url: "https://docs.confluent.io/kafka-clients/java/current/overview.html#incremental-cooperative-rebalancing" },
            ],
          },
          {
            id: "kafka-w6-3",
            title: "Kafka Streams 入门",
            detail: "理解 Kafka Streams 的架构与编程模型，编写第一个流处理应用。",
            keyPoints: [
              "Kafka Streams 是 Java 库，不需要独立集群，直接嵌入应用。",
              "核心抽象：KStream（事件流）和 KTable（变更日志/物化视图）。",
              "流处理拓扑由 Source → Processor → Sink 节点组成。",
            ],
            resources: [
              { title: "Kafka Streams 概念", url: "https://kafka.apache.org/documentation/streams/core-concepts" },
              { title: "Streams 快速开始", url: "https://kafka.apache.org/documentation/streams/quickstart" },
              { title: "Streams 开发指南", url: "https://kafka.apache.org/documentation/streams/developer-guide/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "kafka-s3",
    title: "阶段三：运维与调优",
    duration: "第 7-9 周",
    goal: "掌握集群部署与监控、性能调优、数据一致性保障与 Kafka Connect。",
    weeks: [
      {
        id: "kafka-w7",
        title: "第 7 周：集群部署与监控",
        summary: "掌握生产环境部署方案与关键监控指标。",
        overview: "生产环境的 Kafka 集群需要合理的部署规划和完善的监控体系。本周学习硬件选型、部署策略与核心监控指标。",
        keyPoints: [
          "Kafka 对磁盘 I/O 和网络带宽敏感，SSD 和万兆网卡是推荐配置",
          "JMX 暴露 Broker、Producer、Consumer 的关键性能指标",
          "Lag 监控是消费健康度的核心指标",
        ],
        lessons: [
          {
            id: "kafka-w7-1",
            title: "生产环境部署规划",
            detail: "规划 Kafka 集群的硬件选型、操作系统调优与网络拓扑设计。",
            keyPoints: [
              "磁盘：优先使用 SSD 或 RAID-10 HDD，XFS 文件系统性能最优。",
              "内存：JVM Heap 设置 6-8GB，剩余内存留给 Page Cache。",
              "网络：跨机架部署提高容灾能力，配置 broker.rack 感知。",
            ],
            resources: [
              { title: "操作指南", url: "https://kafka.apache.org/documentation/#operations" },
              { title: "硬件与 OS 调优", url: "https://docs.confluent.io/kafka/operations-tools/system-requirements.html" },
              { title: "Broker 配置参考", url: "https://kafka.apache.org/documentation/#brokerconfigs" },
            ],
          },
          {
            id: "kafka-w7-2",
            title: "监控指标与告警",
            detail: "建立 Kafka 监控体系，覆盖 Broker、Topic、Consumer Group 的关键指标与告警阈值。",
            keyPoints: [
              "核心指标：UnderReplicatedPartitions、ActiveControllerCount、RequestHandlerAvgIdlePercent。",
              "Consumer Lag 反映消费延迟，使用 kafka-consumer-groups.sh 或 Burrow 监控。",
              "集成 Prometheus + Grafana 实现可视化监控与告警。",
            ],
            resources: [
              { title: "Kafka 监控", url: "https://kafka.apache.org/documentation/#monitoring" },
              { title: "Confluent 监控指南", url: "https://docs.confluent.io/kafka/monitoring-and-metrics/index.html" },
            ],
          },
          {
            id: "kafka-w7-3",
            title: "日志管理与清理策略",
            detail: "配置日志保留策略（时间/大小/Compact），理解日志分段与压缩清理机制。",
            keyPoints: [
              "Delete 策略按时间（log.retention.hours）或大小（log.retention.bytes）删除旧数据。",
              "Compact 策略保留每个 Key 的最新值，适用于变更日志和快照场景。",
              "log.segment.bytes 控制分段大小，影响清理效率和文件句柄数。",
            ],
            resources: [
              { title: "日志压缩", url: "https://kafka.apache.org/documentation/#compaction" },
              { title: "日志配置", url: "https://kafka.apache.org/documentation/#brokerconfigs_log.retention.hours" },
            ],
          },
        ],
      },
      {
        id: "kafka-w8",
        title: "第 8 周：性能调优",
        summary: "优化 Kafka 的吞吐量与延迟，掌握端到端性能调优方法。",
        overview: "Kafka 性能调优需要从生产者、Broker、消费者三个层面综合考虑。本周学习关键参数调优与性能测试方法。",
        keyPoints: [
          "吞吐量优化核心：批量发送、压缩、分区并行",
          "延迟优化核心：减小 linger.ms、增加 fetch.min.bytes 的响应速度",
          "kafka-producer-perf-test 和 kafka-consumer-perf-test 是基准测试工具",
        ],
        lessons: [
          {
            id: "kafka-w8-1",
            title: "Producer 端调优",
            detail: "调优 batch.size、linger.ms、compression.type、buffer.memory 等参数提升生产者性能。",
            keyPoints: [
              "增大 batch.size（默认 16KB → 64-128KB）提升批量发送效率。",
              "compression.type=lz4 在吞吐与 CPU 之间取得最佳平衡。",
              "buffer.memory 控制生产者缓冲区大小，缓冲区满时 send() 阻塞。",
            ],
            resources: [
              { title: "Producer 性能调优", url: "https://kafka.apache.org/documentation/#producerconfigs" },
              { title: "性能测试工具", url: "https://kafka.apache.org/documentation/#basic_ops_producer_perf" },
            ],
          },
          {
            id: "kafka-w8-2",
            title: "Broker 端调优",
            detail: "调优 num.io.threads、num.network.threads、socket.buffer 等 Broker 参数与 OS 级优化。",
            keyPoints: [
              "num.io.threads 应匹配磁盘数量，num.network.threads 应匹配 CPU 核数。",
              "调大 socket.send.buffer.bytes 和 socket.receive.buffer.bytes 提升网络吞吐。",
              "OS 层面：调大文件描述符限制、禁用 swap、优化 vm.dirty_ratio。",
            ],
            resources: [
              { title: "Broker 调优", url: "https://kafka.apache.org/documentation/#brokerconfigs" },
              { title: "OS 调优建议", url: "https://kafka.apache.org/documentation/#os" },
              { title: "Confluent 性能白皮书", url: "https://docs.confluent.io/kafka/operations-tools/performance-and-throughput-testing.html" },
            ],
          },
          {
            id: "kafka-w8-3",
            title: "Consumer 端调优",
            detail: "调优 fetch.min.bytes、max.poll.records、并行消费策略提升消费者性能。",
            keyPoints: [
              "fetch.min.bytes 控制最小拉取量，增大可减少请求次数提升吞吐。",
              "max.poll.records 控制单次 poll 返回的最大记录数。",
              "多线程消费：线程池处理消息 + 手动提交 offset 提升消费并行度。",
            ],
            resources: [
              { title: "Consumer 调优", url: "https://kafka.apache.org/documentation/#consumerconfigs" },
              { title: "Consumer 性能测试", url: "https://kafka.apache.org/documentation/#basic_ops_consumer_perf" },
            ],
          },
        ],
      },
      {
        id: "kafka-w9",
        title: "第 9 周：数据一致性与 Kafka Connect",
        summary: "保障数据一致性与容灾，掌握 Kafka Connect 数据集成框架。",
        overview: "数据一致性和可靠的数据集成是生产环境的关键需求。本周学习容灾方案与 Kafka Connect 框架。",
        keyPoints: [
          "High Watermark 标记已提交的消息边界，Consumer 只能读取 HW 之前的消息",
          "Kafka Connect 提供标准化的数据导入导出框架，支持 Source 和 Sink Connector",
          "单消息转换（SMT）在 Connector 中实现轻量级数据转换",
        ],
        lessons: [
          {
            id: "kafka-w9-1",
            title: "数据一致性保障",
            detail: "深入理解 High Watermark、Leader Epoch 与数据截断机制，分析数据丢失和不一致场景。",
            keyPoints: [
              "High Watermark 是所有 ISR 副本都已复制的最大 offset。",
              "Leader Epoch 解决旧 Leader 与新 Leader 数据不一致的问题。",
              "Follower 恢复时根据 Leader Epoch 决定截断位置，避免数据分歧。",
            ],
            resources: [
              { title: "复制协议", url: "https://kafka.apache.org/documentation/#replication" },
              { title: "Leader Epoch", url: "https://docs.confluent.io/kafka/design/replication.html" },
            ],
          },
          {
            id: "kafka-w9-2",
            title: "Kafka Connect 基础",
            detail: "理解 Kafka Connect 架构（Worker/Connector/Task），部署 Standalone 和 Distributed 模式。",
            keyPoints: [
              "Source Connector 从外部系统导入数据到 Kafka，Sink Connector 导出到外部系统。",
              "Distributed 模式支持多 Worker 协作，提供高可用和弹性扩展。",
              "Confluent Hub 提供丰富的开源和商业 Connector 插件。",
            ],
            resources: [
              { title: "Kafka Connect", url: "https://kafka.apache.org/documentation/#connect" },
              { title: "Connect 配置", url: "https://kafka.apache.org/documentation/#connectconfigs" },
              { title: "Confluent Hub", url: "https://www.confluent.io/hub/" },
            ],
          },
          {
            id: "kafka-w9-3",
            title: "常用 Connector 实践",
            detail: "使用 JDBC Source/Sink、Elasticsearch Sink、S3 Sink 等常用 Connector 实现数据集成。",
            keyPoints: [
              "JDBC Source Connector 支持增量查询和时间戳模式捕获数据库变更。",
              "Debezium CDC Connector 基于数据库日志实现实时变更捕获。",
              "SMT（Single Message Transforms）在 Connector 管道中进行轻量转换。",
            ],
            resources: [
              { title: "JDBC Connector", url: "https://docs.confluent.io/kafka-connectors/jdbc/current/overview.html" },
              { title: "Debezium", url: "https://debezium.io/documentation/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "kafka-s4",
    title: "阶段四：高级实践与生态",
    duration: "第 10-12 周",
    goal: "掌握 Kafka Streams 高级特性、ksqlDB、Schema Registry 与跨集群复制。",
    weeks: [
      {
        id: "kafka-w10",
        title: "第 10 周：Kafka Streams 高级",
        summary: "深入 Kafka Streams 的窗口操作、状态存储与容错机制。",
        overview: "Kafka Streams 提供丰富的流处理语义。本周学习窗口聚合、状态管理、交互式查询等高级特性。",
        keyPoints: [
          "窗口操作支持 Tumbling、Hopping、Sliding 和 Session 四种类型",
          "State Store 基于 RocksDB 实现本地状态存储与变更日志备份",
          "交互式查询（Interactive Queries）允许直接查询流应用的本地状态",
        ],
        lessons: [
          {
            id: "kafka-w10-1",
            title: "窗口操作与聚合",
            detail: "掌握 Tumbling/Hopping/Session 窗口的语义与适用场景，实现基于时间的聚合计算。",
            keyPoints: [
              "Tumbling Window 是固定大小、不重叠的窗口，适合周期性统计。",
              "Session Window 基于活动间隔动态定义窗口，适合用户行为分析。",
              "Grace Period 允许迟到数据更新窗口结果，控制迟到容忍度。",
            ],
            resources: [
              { title: "Streams 窗口", url: "https://kafka.apache.org/documentation/streams/developer-guide/dsl-api.html#windowing" },
              { title: "时间语义", url: "https://kafka.apache.org/documentation/streams/core-concepts#streams_time" },
            ],
          },
          {
            id: "kafka-w10-2",
            title: "状态存储与容错",
            detail: "理解 State Store 的实现原理、变更日志备份与故障恢复机制。",
            keyPoints: [
              "State Store 默认使用 RocksDB，支持大于内存的状态数据。",
              "变更日志（Changelog Topic）自动备份状态，故障时从日志重建。",
              "Standby Replicas 预热备用状态副本，加速故障切换。",
            ],
            resources: [
              { title: "状态管理", url: "https://kafka.apache.org/documentation/streams/developer-guide/processor-api.html#state-stores" },
              { title: "容错设计", url: "https://kafka.apache.org/documentation/streams/architecture#streams_architecture_recovery" },
              { title: "Streams 配置", url: "https://kafka.apache.org/documentation/streams/developer-guide/config-streams" },
            ],
          },
          {
            id: "kafka-w10-3",
            title: "交互式查询",
            detail: "使用 Interactive Queries 直接查询流应用的状态，实现 CQRS 模式的读模型。",
            keyPoints: [
              "ReadOnlyKeyValueStore 接口提供对本地 State Store 的查询能力。",
              "跨实例查询需要通过 RPC 将请求路由到持有目标分区的实例。",
              "交互式查询使 Kafka Streams 可以替代部分场景下的外部数据库。",
            ],
            resources: [
              { title: "交互式查询", url: "https://kafka.apache.org/documentation/streams/developer-guide/interactive-queries" },
              { title: "Streams 架构", url: "https://kafka.apache.org/documentation/streams/architecture" },
            ],
          },
        ],
      },
      {
        id: "kafka-w11",
        title: "第 11 周：ksqlDB 与 Schema Registry",
        summary: "使用 ksqlDB 进行 SQL 化流处理，通过 Schema Registry 管理数据契约。",
        overview: "ksqlDB 降低了流处理的门槛，Schema Registry 保障了数据演进的兼容性。本周学习这两个关键生态组件。",
        keyPoints: [
          "ksqlDB 用 SQL 语法创建流和表，简化实时数据处理",
          "Schema Registry 管理 Avro/Protobuf/JSON Schema 的版本与兼容性",
          "Subject 命名策略（TopicNameStrategy）决定 Schema 的绑定粒度",
        ],
        lessons: [
          {
            id: "kafka-w11-1",
            title: "ksqlDB 核心概念",
            detail: "理解 ksqlDB 的 Stream/Table 双重抽象、Push/Pull 查询以及持久化查询的执行模型。",
            keyPoints: [
              "CREATE STREAM 从 Topic 创建事件流，CREATE TABLE 创建物化视图。",
              "Push Query（SELECT ... EMIT CHANGES）持续推送结果变更。",
              "Pull Query（SELECT ... WHERE）点查物化视图的当前状态。",
            ],
            resources: [
              { title: "ksqlDB 概念", url: "https://docs.ksqldb.io/en/latest/concepts/" },
              { title: "ksqlDB 快速开始", url: "https://docs.ksqldb.io/en/latest/quickstart/" },
              { title: "ksqlDB 参考", url: "https://docs.ksqldb.io/en/latest/developer-guide/syntax-reference/" },
            ],
          },
          {
            id: "kafka-w11-2",
            title: "Schema Registry 详解",
            detail: "掌握 Schema Registry 的架构、Schema 演进规则与兼容性级别配置。",
            keyPoints: [
              "兼容性级别：BACKWARD（新 schema 能读旧数据）、FORWARD（旧 schema 能读新数据）、FULL。",
              "Schema ID 嵌入消息头部，Consumer 通过 ID 从 Registry 获取 Schema 反序列化。",
              "BACKWARD 是默认兼容级别，允许删除字段和添加有默认值的字段。",
            ],
            resources: [
              { title: "Schema Registry", url: "https://docs.confluent.io/platform/current/schema-registry/index.html" },
              { title: "Schema 演进", url: "https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html" },
            ],
          },
          {
            id: "kafka-w11-3",
            title: "Avro 与 Protobuf 实践",
            detail: "使用 Avro 和 Protobuf 序列化方案，配合 Schema Registry 实现类型安全的消息传递。",
            keyPoints: [
              "Avro 支持 schema 演进，序列化后体积小且支持动态类型。",
              "Protobuf 提供强类型 IDL 和高效编码，适合跨语言场景。",
              "GenericRecord（动态）vs SpecificRecord（代码生成）的选型取舍。",
            ],
            resources: [
              { title: "Avro 序列化", url: "https://docs.confluent.io/platform/current/schema-registry/fundamentals/serdes-develop/serdes-avro.html" },
              { title: "Protobuf 序列化", url: "https://docs.confluent.io/platform/current/schema-registry/fundamentals/serdes-develop/serdes-protobuf.html" },
            ],
          },
        ],
      },
      {
        id: "kafka-w12",
        title: "第 12 周：跨集群复制与综合实践",
        summary: "掌握 MirrorMaker 2 跨集群复制，完成 Kafka 综合实战项目。",
        overview: "跨集群复制是多数据中心架构的关键能力。本周学习 MirrorMaker 2 并完成综合实践项目。",
        keyPoints: [
          "MirrorMaker 2 基于 Kafka Connect 框架，支持 Active-Active 和 Active-Passive 拓扑",
          "Topic 和 Consumer Group offset 自动同步，简化灾备切换",
          "综合项目整合 Producer/Consumer/Streams/Connect 实现端到端数据管道",
        ],
        lessons: [
          {
            id: "kafka-w12-1",
            title: "MirrorMaker 2 架构",
            detail: "理解 MirrorMaker 2 的设计原理、复制拓扑与配置，掌握跨集群复制方案。",
            keyPoints: [
              "MM2 由 MirrorSourceConnector、MirrorCheckpointConnector、MirrorHeartbeatConnector 组成。",
              "Topic 名称自动添加源集群前缀，避免循环复制（如 us-west.orders）。",
              "Checkpoint Connector 同步消费者组 offset，实现灾备切换后消费无缝衔接。",
            ],
            resources: [
              { title: "MirrorMaker 2", url: "https://kafka.apache.org/documentation/#georeplication" },
              { title: "MM2 配置", url: "https://kafka.apache.org/documentation/#georeplication-mirrormaker" },
              { title: "跨集群复制指南", url: "https://docs.confluent.io/kafka/operations-tools/multi-dc-replication/index.html" },
            ],
          },
          {
            id: "kafka-w12-2",
            title: "多数据中心架构",
            detail: "设计 Active-Active、Active-Passive 和 Hub-Spoke 多数据中心 Kafka 架构方案。",
            keyPoints: [
              "Active-Active：双向复制，需要处理数据冲突和避免循环复制。",
              "Active-Passive：单向复制用于灾备，RTO/RPO 由复制延迟决定。",
              "Hub-Spoke：中心集群聚合多个边缘集群的数据，适合数据仓库入口。",
            ],
            resources: [
              { title: "多数据中心部署", url: "https://docs.confluent.io/kafka/operations-tools/multi-dc-replication/multi-dc-overview.html" },
              { title: "灾备设计", url: "https://kafka.apache.org/documentation/#georeplication" },
            ],
          },
          {
            id: "kafka-w12-3",
            title: "综合实战项目",
            detail: "构建一个端到端的实时数据管道：CDC 采集 → Kafka → Streams 处理 → 多目标 Sink。",
            keyPoints: [
              "使用 Debezium 捕获数据库变更，写入 Kafka Topic。",
              "Kafka Streams 进行实时清洗、聚合和业务规则处理。",
              "通过 Kafka Connect Sink 将处理结果写入 Elasticsearch 和数据湖。",
            ],
            resources: [
              { title: "Kafka 生态架构", url: "https://kafka.apache.org/documentation/#uses" },
              { title: "Confluent 案例", url: "https://docs.confluent.io/platform/current/tutorials/index.html" },
            ],
          },
        ],
      },
    ],
  },
]

export const kafkaKnowledgeCards: KnowledgeCard[] = [
  {
    id: "kafka-card-log",
    title: "日志存储模型",
    summary: "Kafka 以追加日志为核心抽象，理解日志模型是掌握 Kafka 的基础。",
    points: [
      "消息按分区追加写入 Segment 文件，顺序写磁盘性能接近内存。",
      "稀疏索引（.index/.timeindex）加速基于 offset 和时间戳的消息查找。",
      "Log Compaction 保留每个 Key 的最新值，实现「快照」语义。",
    ],
    practice: "查看 Kafka 数据目录结构，分析 Segment 文件、索引文件的命名规则与内容。",
  },
  {
    id: "kafka-card-replication",
    title: "副本与高可用",
    summary: "副本机制是 Kafka 高可用和数据持久性的基石。",
    points: [
      "ISR 集合动态维护，落后的副本被移出直到追上 Leader。",
      "acks=all + min.insync.replicas=2 是生产环境的推荐配置。",
      "Leader Epoch 替代 High Watermark 解决日志截断的一致性问题。",
    ],
    practice: "模拟 Broker 宕机场景，观察 Leader 选举过程和 ISR 变化。",
  },
  {
    id: "kafka-card-semantics",
    title: "消息投递语义",
    summary: "正确理解投递语义是设计可靠消息系统的前提。",
    points: [
      "at-least-once 最常用，配合消费端幂等实现「有效的 exactly-once」。",
      "幂等 Producer（enable.idempotence）防止网络重试产生重复消息。",
      "事务 API 支持跨分区原子写入和 read_committed 消费隔离。",
    ],
    practice: "编写一个带事务的 Consume-Process-Produce 管道，验证 exactly-once 语义。",
  },
  {
    id: "kafka-card-rebalance",
    title: "Rebalance 机制",
    summary: "Rebalance 是消费者组动态伸缩的核心协议，也是性能抖动的常见来源。",
    points: [
      "Eager Rebalance 停止所有消费者再重新分配，Cooperative 支持增量调整。",
      "Static Membership 通过固定 group.instance.id 避免频繁 Rebalance。",
      "max.poll.interval.ms 超时是意外 Rebalance 的常见原因。",
    ],
    practice: "搭建多消费者实例，模拟消费者加入/退出观察分区重新分配过程。",
  },
  {
    id: "kafka-card-streams",
    title: "Kafka Streams",
    summary: "Kafka Streams 是轻量级流处理库，无需额外集群即可实现实时计算。",
    points: [
      "KStream 表示无界事件流，KTable 表示变更日志的物化视图。",
      "窗口操作（Tumbling/Session/Hopping）实现基于时间的聚合计算。",
      "State Store 基于 RocksDB + Changelog Topic 实现有状态处理与容错。",
    ],
    practice: "实现一个实时词频统计应用，使用 Tumbling Window 每分钟输出 Top 10 词汇。",
  },
  {
    id: "kafka-card-connect",
    title: "Kafka Connect",
    summary: "Kafka Connect 是标准化的数据集成框架，连接 Kafka 与外部系统。",
    points: [
      "Source Connector 导入数据到 Kafka，Sink Connector 从 Kafka 导出数据。",
      "Distributed 模式支持多 Worker 协作、故障转移和弹性扩展。",
      "SMT（单消息转换）在管道中实现字段映射、过滤等轻量转换。",
    ],
    practice: "部署 JDBC Source Connector 同步数据库表到 Kafka Topic，配置增量模式。",
  },
  {
    id: "kafka-card-schema",
    title: "Schema Registry",
    summary: "Schema Registry 管理消息 Schema 的版本与兼容性，保障数据契约。",
    points: [
      "Avro/Protobuf/JSON Schema 三种格式的序列化与兼容性检查。",
      "兼容性级别（BACKWARD/FORWARD/FULL）控制 Schema 演进规则。",
      "Schema ID 嵌入消息头部，实现高效的序列化/反序列化。",
    ],
    practice: "注册 Avro Schema，模拟添加/删除字段验证 BACKWARD 兼容性检查。",
  },
  {
    id: "kafka-card-mirrormaker",
    title: "跨集群复制",
    summary: "MirrorMaker 2 实现跨数据中心的 Topic 和 offset 同步。",
    points: [
      "MM2 基于 Kafka Connect 框架，由三个 Connector 组成。",
      "Topic 名称自动添加源集群别名前缀，防止循环复制。",
      "Checkpoint Connector 同步消费者 offset，支持灾备无缝切换。",
    ],
    practice: "搭建两个 Kafka 集群，配置 MM2 实现 Active-Passive 复制并测试灾备切换。",
  },
]

export const kafkaExamQuestions: QuizQuestion[] = [
  { id: "kafka-q1", question: "Kafka 与传统消息队列最核心的架构差异是？", options: ["Kafka 不支持持久化", "Kafka 基于追加日志模型，消息持久化到磁盘且支持回溯消费", "传统 MQ 性能更高", "Kafka 只支持点对点模式"], answer: 1, rationale: "Kafka 的核心设计是分布式提交日志，消息追加写入磁盘，消费者通过 offset 可以回溯到任意位置重新消费。" },
  { id: "kafka-q2", question: "Kafka 实现高吞吐的关键技术是？", options: ["使用内存数据库", "顺序写磁盘 + 零拷贝（sendfile）+ 批量发送", "单线程处理", "使用 UDP 协议"], answer: 1, rationale: "顺序写磁盘避免随机 I/O，零拷贝减少数据拷贝次数，批量发送减少网络请求。" },
  { id: "kafka-q3", question: "Kafka 中 Partition 的作用是？", options: ["仅用于备份", "实现水平扩展和消息的有序存储单元", "替代 Topic", "管理消费者"], answer: 1, rationale: "Partition 是 Kafka 的并行度单位和有序存储单元，每个分区是独立的消息日志。" },
  { id: "kafka-q4", question: "Consumer Group 中分区数少于消费者数时会发生什么？", options: ["消息会丢失", "多余的消费者处于空闲状态", "自动创建新分区", "消费速度翻倍"], answer: 1, rationale: "每个分区只能被同一 Group 内的一个消费者消费，多余的消费者将分配不到分区而空闲。" },
  { id: "kafka-q5", question: "acks=all 配置的含义是？", options: ["不等待任何确认", "等待所有 ISR 副本确认写入后才返回成功", "等待所有 Broker 确认", "等待消费者确认"], answer: 1, rationale: "acks=all 要求 Leader 等待所有 ISR（In-Sync Replicas）副本确认写入，提供最高的持久性保证。" },
  { id: "kafka-q6", question: "Kafka 幂等生产者解决的问题是？", options: ["消费端重复", "网络重试导致的消息重复写入", "分区不均衡", "Schema 不兼容"], answer: 1, rationale: "幂等生产者通过 Producer ID 和序列号去重，确保即使网络重试也不会产生重复消息。" },
  { id: "kafka-q7", question: "ISR 集合中副本被移出的条件是？", options: ["磁盘空间不足", "副本落后超过 replica.lag.time.max.ms 未跟上 Leader", "消费者请求过多", "Topic 被删除"], answer: 1, rationale: "当 Follower 副本在 replica.lag.time.max.ms 时间内未能跟上 Leader 的写入进度，将被移出 ISR。" },
  { id: "kafka-q8", question: "Kafka Streams 与 Spark Streaming 的核心区别是？", options: ["Kafka Streams 更适合批处理", "Kafka Streams 是轻量级库，无需独立集群；Spark 需要集群基础设施", "Spark Streaming 延迟更低", "Kafka Streams 不支持状态"], answer: 1, rationale: "Kafka Streams 是 Java 库，直接嵌入应用进程，无需额外的资源管理器或集群。" },
  { id: "kafka-q9", question: "Log Compaction 策略的作用是？", options: ["删除所有旧消息", "保留每个 Key 的最新值，实现快照语义", "压缩消息大小", "加密消息内容"], answer: 1, rationale: "Log Compaction 只保留每个 Key 的最新一条消息，相当于维护一个 Key-Value 快照。" },
  { id: "kafka-q10", question: "触发 Consumer Rebalance 的常见原因是？", options: ["Topic 消息过多", "消费者加入/离开 Group 或 max.poll.interval.ms 超时", "Producer 发送失败", "Broker 配置变更"], answer: 1, rationale: "消费者组成员变化（加入/离开/崩溃）或消费者处理超时都会触发分区重新分配。" },
  { id: "kafka-q11", question: "CooperativeStickyAssignor 的优势是？", options: ["分配更均匀", "支持增量 Rebalance，不中断未受影响的消费者", "不需要 Group Coordinator", "自动创建 Topic"], answer: 1, rationale: "Cooperative Rebalance 只迁移需要变更的分区，其他消费者继续正常消费，减少全局停顿。" },
  { id: "kafka-q12", question: "Kafka Connect 的 Distributed 模式的优势是？", options: ["配置更简单", "支持多 Worker 协作、故障转移和弹性扩展", "不需要 Kafka 集群", "只支持 Source Connector"], answer: 1, rationale: "Distributed 模式下多个 Worker 协同工作，Task 可在 Worker 间迁移实现高可用。" },
  { id: "kafka-q13", question: "Schema Registry 中 BACKWARD 兼容性的含义是？", options: ["只允许添加字段", "新 Schema 能读取旧 Schema 写入的数据", "旧 Schema 能读取新 Schema 数据", "禁止任何变更"], answer: 1, rationale: "BACKWARD 兼容意味着使用新 Schema 的 Consumer 可以正确反序列化用旧 Schema 写入的消息。" },
  { id: "kafka-q14", question: "ksqlDB 中 Push Query 和 Pull Query 的区别是？", options: ["Push 更快", "Push Query 持续推送变更结果，Pull Query 点查当前状态", "Pull 支持聚合", "没有区别"], answer: 1, rationale: "Push Query（EMIT CHANGES）持续输出流变更，Pull Query 查询物化视图的当前快照。" },
  { id: "kafka-q15", question: "MirrorMaker 2 避免循环复制的机制是？", options: ["限制复制速率", "Topic 名称自动添加源集群前缀", "只支持单向复制", "使用时间戳过滤"], answer: 1, rationale: "MM2 在复制的 Topic 名称前自动添加源集群别名，识别并跳过已复制的 Topic。" },
  { id: "kafka-q16", question: "Kafka 中 min.insync.replicas=2 配合 acks=all 的效果是？", options: ["写入速度翻倍", "至少 2 个 ISR 副本确认才算写入成功，否则抛异常", "自动创建 2 个副本", "消费者最少 2 个"], answer: 1, rationale: "写入时至少需要 2 个 ISR 副本（含 Leader）确认，如果 ISR 少于 2 个则拒绝写入。" },
  { id: "kafka-q17", question: "Kafka Streams 中 KTable 的语义是？", options: ["无界事件流", "变更日志的物化视图，每个 Key 只保留最新值", "批处理结果", "临时缓存"], answer: 1, rationale: "KTable 表示一个不断更新的表，每个 Key 的最新值代表当前状态，底层是变更日志流。" },
  { id: "kafka-q18", question: "生产环境 Kafka 的 JVM Heap 推荐设置是？", options: ["尽可能大（32GB+）", "6-8GB，剩余内存留给 Page Cache", "256MB 即可", "等于物理内存"], answer: 1, rationale: "Kafka 重度依赖 Page Cache 缓存日志文件，JVM Heap 过大会挤占 Page Cache 空间。" },
  { id: "kafka-q19", question: "Debezium CDC Connector 的工作原理是？", options: ["定时查询数据库", "读取数据库事务日志（binlog/WAL）实时捕获变更", "扫描数据库全表", "通过触发器捕获"], answer: 1, rationale: "Debezium 读取数据库的事务日志实现变更数据捕获，延迟低且不影响源数据库性能。" },
  { id: "kafka-q20", question: "Kafka Streams 的 State Store 故障恢复机制是？", options: ["从外部数据库恢复", "从 Changelog Topic 重放消息重建本地状态", "丢弃状态重新开始", "从其他实例拷贝"], answer: 1, rationale: "State Store 的变更会写入 Changelog Topic，故障后从该 Topic 重放消息即可重建状态。" },
]

export const kafkaRoadmap: RoadmapDefinition = {
  id: "kafka",
  label: "Kafka 消息流",
  title: "Kafka 消息流学习路线",
  durationLabel: "12 周·36 课时",
  description: "从消息系统基础到高级流处理，系统掌握 Kafka 架构、可靠性保障、性能调优、Kafka Streams 与生态集成，构建企业级消息流处理能力。",
  heroBadge: "消息架构 · 流处理 · 运维调优 · 生态集成",
  stages: kafkaStages,
  knowledgeCards: kafkaKnowledgeCards,
  examQuestions: kafkaExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 Kafka 之旅，先理解消息系统核心概念与 Kafka 架构设计。"
    if (percent < 25) return "继续深入 Producer/Consumer API 和分区副本机制。"
    if (percent < 50) return "掌握消息投递语义和 Kafka Streams 流处理基础。"
    if (percent < 75) return "学习集群部署、性能调优与 Kafka Connect 数据集成。"
    if (percent < 100) return "完善 ksqlDB、Schema Registry 与跨集群复制实践。"
    return "恭喜完成！你已具备企业级 Kafka 实践能力，继续探索实时数据架构！"
  },
  resourceGuide: {
    environment: "安装 Kafka（KRaft 模式）或使用 Docker Compose 启动 Kafka 集群，准备 IntelliJ IDEA + Kafka 插件。",
    fallbackKeyPoints: [
      "Kafka 基于追加日志模型，顺序写磁盘 + 零拷贝实现高吞吐",
      "ISR + acks=all + min.insync.replicas 保障消息持久性",
      "Consumer Group 通过分区分配实现消费端负载均衡",
      "Kafka Streams 是轻量级流处理库，KStream/KTable 双重抽象",
      "Schema Registry 管理消息 Schema 版本与兼容性演进",
    ],
    handsOnSteps: [
      "搭建 3 节点 Kafka 集群（KRaft 模式），创建多分区多副本 Topic",
      "编写 Producer/Consumer 应用，测试 acks、batch.size 等参数对性能的影响",
      "使用 Kafka Streams 实现实时词频统计，配置窗口聚合与状态存储",
      "部署 Kafka Connect + Debezium 实现数据库 CDC 实时同步",
      "配置 MirrorMaker 2 搭建跨集群复制，测试灾备切换流程",
    ],
    selfChecks: [
      "能否解释 Kafka 的日志存储模型和分区机制？",
      "是否掌握 at-least-once 和 exactly-once 语义的实现原理？",
      "Consumer Rebalance 的触发条件和优化策略是否清晰？",
      "是否能配置 Kafka Connect 实现数据导入导出？",
      "Schema Registry 的兼容性级别是否理解并能正确配置？",
    ],
    extensions: [
      "深入学习 Apache Flink 实现更复杂的流处理场景",
      "探索 Kafka on Kubernetes（Strimzi Operator）云原生部署",
      "研究 Apache Pulsar 与 Kafka 的架构对比",
      "学习事件驱动架构（EDA）和 CQRS/Event Sourcing 模式",
    ],
    lessonQuizAdvice: "每周完成实操练习后做测验，重点理解分布式系统的设计权衡而非死记配置参数。",
  },
}
