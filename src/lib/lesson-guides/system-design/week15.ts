import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week15Guides: Record<string, LessonGuide> = {
    "w15-1": {
        lessonId: "w15-1",
        background: [
            "【Kafka 核心定位】Kafka 是分布式事件流平台：'Apache Kafka is an open-source distributed event streaming platform'。核心概念包括 Topic（消息分类）、Partition（并行单元）、Consumer Group（消费者组）。",
            "【RabbitMQ 核心定位】RabbitMQ 实现 AMQP 协议：'RabbitMQ is a message broker that implements the Advanced Message Queuing Protocol'。核心概念包括 Exchange（交换机）、Queue（队列）、Binding（绑定规则）。",
            "【RocketMQ 核心定位】RocketMQ 是阿里开源的分布式消息中间件：支持事务消息、顺序消息、延迟消息等高级特性。采用 NameServer 做服务发现，Broker 存储消息。",
            "【消息模型对比】Kafka 使用发布-订阅模型，消息保留在 partition 中供多个消费者读取；RabbitMQ 支持多种 Exchange 类型（direct、fanout、topic、headers）；RocketMQ 使用 Topic + Tag 进行消息过滤。",
            "【存储模型差异】Kafka 使用 append-only 日志，消息持久化到磁盘，通过 offset 追踪消费进度。RabbitMQ 消息确认后删除（可配置持久化）。RocketMQ 使用 CommitLog + ConsumeQueue 分离存储。"
        ],
        keyDifficulties: [
            "【吞吐量差异】Kafka 设计目标是高吞吐：'Kafka is designed for high-throughput, low-latency handling of real-time data feeds'。单机可达百万 QPS。RabbitMQ 侧重可靠传递，吞吐量相对较低（万级 QPS）。RocketMQ 介于两者之间。",
            "【消息顺序保证】Kafka 只保证单 partition 内顺序；RabbitMQ 单 queue 内顺序；RocketMQ 支持全局顺序消息（通过 MessageGroup）。跨 partition/queue 无法保证全局顺序。",
            "【消费模式差异】Kafka 是 pull 模式，消费者主动拉取；RabbitMQ 默认 push 模式，broker 推送给消费者；RocketMQ 支持 push 和 pull 两种模式。Push 模式实时性好但可能压垮消费者。",
            "【协议与生态】Kafka 使用自定义二进制协议；RabbitMQ 支持 AMQP、STOMP、MQTT 多协议；RocketMQ 使用自定义协议。协议选择影响客户端兼容性和跨语言支持。"
        ],
        handsOnPath: [
            "部署三种 MQ：使用 Docker Compose 分别部署 Kafka（含 Zookeeper/KRaft）、RabbitMQ、RocketMQ。",
            "Kafka 基本操作：kafka-topics.sh --create --topic test --partitions 3 --replication-factor 2; kafka-console-producer.sh; kafka-console-consumer.sh --from-beginning;",
            "RabbitMQ 基本操作：通过 Management UI 创建 exchange、queue、binding；使用 rabbitmqadmin 命令行工具发送和消费消息。",
            "RocketMQ 基本操作：mqadmin createTopic -n localhost:9876 -t TestTopic; 使用 Java SDK 发送和消费消息。",
            "性能对比测试：使用相同硬件和配置，分别测试三种 MQ 的吞吐量、延迟、资源占用。"
        ],
        selfCheck: [
            "Kafka、RabbitMQ、RocketMQ 的核心定位有什么区别？",
            "三种 MQ 的消息存储模型有什么不同？",
            "为什么 Kafka 吞吐量最高？",
            "Push 和 Pull 消费模式各有什么优缺点？",
            "如何选择适合业务场景的消息队列？"
        ],
        extensions: [
            "研究 Kafka KRaft 模式替代 Zookeeper 的架构变化。",
            "学习 RabbitMQ 的 Quorum Queues 高可用特性。",
            "了解 Pulsar 作为新一代消息系统的特点。",
            "研究云服务商托管 MQ（如 AWS SQS/SNS、阿里云 RocketMQ）的选型。"
        ],
        sourceUrls: [
            "https://kafka.apache.org/documentation/#gettingStarted",
            "https://www.rabbitmq.com/tutorials"
        ]
    },
    "w15-2": {
        lessonId: "w15-2",
        background: [
            "【消息传递语义】消息系统有三种语义：At-most-once（最多一次，可能丢失）、At-least-once（至少一次，可能重复）、Exactly-once（恰好一次，最难实现）。大多数系统默认 at-least-once。",
            "【幂等消费者定义】Microservices.io 定义：'A message consumer must be idempotent: processing the same message multiple times must have the same outcome as processing it once'。消费者必须能安全地处理重复消息。",
            "【幂等实现策略】实现幂等消费的核心：'Track the messages that it has processed using message id'——使用消息 ID 追踪已处理的消息。将消息 ID 记录在数据库中，处理前检查是否已处理过。",
            "【Kafka 幂等生产者】Kafka 0.11 引入幂等生产者：'enable.idempotence=true'。Producer 为每条消息分配序列号，Broker 检测并丢弃重复消息。只能保证单 partition 幂等。",
            "【消息确认机制】Kafka 使用 acks 参数控制可靠性：acks=0 不等待确认；acks=1 等待 leader 确认；acks=all 等待所有 ISR 确认。RabbitMQ 使用 publisher confirms 和 consumer acks。"
        ],
        keyDifficulties: [
            "【重复消息来源】消息重复的场景：1) 生产者重试（网络超时但消息已写入）；2) 消费者处理完成但确认失败；3) 再平衡期间消息重新分配。无法完全避免，只能通过幂等处理。",
            "【幂等与去重的区别】幂等是操作多次结果相同（如 UPDATE SET x=5）；去重是跳过已处理的消息。去重需要存储状态，幂等可能不需要。实践中常结合使用。",
            "【Exactly-once 的代价】实现 exactly-once 需要：1) 幂等生产者；2) 事务性写入；3) 消费者与外部系统的原子操作。性能开销大，很多场景用 at-least-once + 幂等消费替代。",
            "【消息 ID 存储方案】存储已处理消息 ID 的选择：1) 关系数据库（可靠但慢）；2) Redis（快但需要持久化）；3) 与业务表同事务写入（最可靠）。需要考虑 ID 过期清理策略。"
        ],
        handsOnPath: [
            "实现幂等消费者：在数据库创建 processed_messages 表，消费前检查消息 ID 是否存在，不存在则处理并记录 ID。",
            "配置 Kafka 幂等生产者：props.put('enable.idempotence', 'true'); props.put('acks', 'all');",
            "配置 RabbitMQ 可靠传递：channel.confirmSelect() 开启 publisher confirms；channel.basicAck() 消费者确认。",
            "测试重复消费：故意在确认前重启消费者，观察消息重新投递，验证幂等处理是否正确。",
            "实现业务幂等：使用唯一业务键（如订单号）作为数据库唯一约束，重复插入会失败。"
        ],
        selfCheck: [
            "At-most-once、At-least-once、Exactly-once 的区别是什么？",
            "消息重复产生的常见原因有哪些？",
            "如何使用消息 ID 实现幂等消费？",
            "Kafka 幂等生产者的原理是什么？",
            "为什么 exactly-once 很难实现？"
        ],
        extensions: [
            "研究 Kafka 事务 API 实现 exactly-once。",
            "学习 Flink 的 exactly-once 语义实现。",
            "了解 RabbitMQ 的 Stream 复制和持久化。",
            "研究分布式系统中的幂等设计模式。"
        ],
        sourceUrls: [
            "https://kafka.apache.org/documentation/#semantics",
            "https://microservices.io/patterns/communication-style/idempotent-consumer.html"
        ]
    },
    "w15-3": {
        lessonId: "w15-3",
        background: [
            "【顺序消息需求】某些业务场景要求消息严格顺序：订单状态变更（创建→支付→发货）、数据库 binlog 同步、用户操作日志。乱序处理会导致状态不一致。",
            "【RocketMQ FIFO 消息】RocketMQ 官方文档：'通过 MessageGroup 机制实现顺序消息'。相同 MessageGroup 的消息按发送顺序被消费。Producer 必须使用 MessageQueueSelector 指定队列。",
            "【FIFO 实现要点】RocketMQ 顺序消息要求：'单一生产者：串行发送，并需业务方保证发送顺序'。多个生产者同时发送无法保证全局顺序。消费者也必须单线程串行处理。",
            "【事务消息定义】RocketMQ 事务消息实现分布式事务：'基于两阶段提交'。第一阶段发送半消息（暂不可见），第二阶段根据本地事务结果提交或回滚。解决本地事务与消息发送的原子性问题。",
            "【事务消息流程】RocketMQ 事务消息七个步骤：1) 发送半消息 2) Broker 存储返回 3) 执行本地事务 4) 提交/回滚消息 5) Broker 处理 6) 消息可见/删除 7) 消费者消费。"
        ],
        keyDifficulties: [
            "【顺序消息的性能代价】顺序消息牺牲并发性：'如果需要保证消息的顺序，则必须牺牲一定的性能'。单队列串行处理限制吞吐量。设计时要评估是否真的需要全局顺序。",
            "【分区顺序 vs 全局顺序】Kafka 只能保证单 partition 内顺序：将相关消息发送到同一 partition（通过 key hash）。RocketMQ 可选择分区顺序（queue 内）或全局顺序（单 queue）。",
            "【事务消息的回查机制】如果本地事务长时间未返回，Broker 会回查事务状态：'如果一段时间内服务端没有收到客户端的二次确认或者回滚请求，服务端会向客户端发起请求回查'。需要实现回查接口。",
            "【半消息的存储】半消息不进入正常队列，存储在特殊 topic（RMQ_SYS_TRANS_HALF_TOPIC）。提交后转移到目标 topic，回滚则标记删除。Broker 定期清理过期的半消息。"
        ],
        handsOnPath: [
            "发送 RocketMQ 顺序消息：使用 MessageQueueSelector 按 orderId 选择固定队列，保证同一订单的消息进入同一队列。",
            "消费顺序消息：使用 MessageListenerOrderly 接口，RocketMQ 保证同一队列的消息串行消费。",
            "实现事务消息生产者：实现 TransactionListener 接口的 executeLocalTransaction 和 checkLocalTransaction 方法。",
            "测试事务回查：在 executeLocalTransaction 中返回 UNKNOW，观察 Broker 发起的事务状态回查。",
            "Kafka 分区顺序：producer.send(new ProducerRecord('topic', orderId, message))，相同 orderId 进入同一 partition。"
        ],
        selfCheck: [
            "什么场景需要顺序消息？",
            "RocketMQ 如何实现 FIFO 消息？",
            "为什么顺序消息会影响性能？",
            "事务消息解决什么问题？",
            "事务回查机制的作用是什么？"
        ],
        extensions: [
            "研究 Kafka 的事务 API（beginTransaction/commitTransaction）。",
            "学习 RocketMQ 5.0 的新事务消息实现。",
            "了解基于 Saga 模式的分布式事务替代方案。",
            "研究顺序消息在数据库同步（Canal/Debezium）中的应用。"
        ],
        sourceUrls: [
            "https://rocketmq.apache.org/docs/featureBehavior/03transactionmessage/",
            "https://rocketmq.apache.org/docs/featureBehavior/03fifomessage/"
        ]
    },
    "w15-4": {
        lessonId: "w15-4",
        background: [
            "【延迟队列定义】延迟队列用于延时处理消息：订单超时取消、定时任务调度、重试退避。消息在指定时间后才可被消费。",
            "【RocketMQ 延迟消息】RocketMQ 支持预设延迟级别：'1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h'。通过 setDelayTimeLevel 设置。5.0 版本支持任意时间延迟。",
            "【死信队列定义】RabbitMQ 文档：'Messages from a queue can be dead-lettered'。死信是无法被正常消费的消息，进入死信队列（DLQ）等待人工处理或重试。",
            "【死信产生条件】RabbitMQ 消息成为死信的四种情况：'The message is negatively acknowledged (nack/reject with requeue=false)'、消息 TTL 过期、队列达到长度限制、超过投递次数限制。",
            "【死信交换机配置】RabbitMQ 通过 x-dead-letter-exchange 和 x-dead-letter-routing-key 参数配置死信路由：'When dead lettering is configured, a dead-lettered message is published to its dead letter exchange with specific routing information'。"
        ],
        keyDifficulties: [
            "【延迟实现方式】不同 MQ 的延迟实现：Kafka 不原生支持（需自行实现）；RabbitMQ 通过 TTL + DLX 组合实现；RocketMQ 原生支持延迟级别。选择时考虑精度和性能要求。",
            "【TTL + DLX 模式】RabbitMQ 延迟队列实现：消息设置 TTL → 过期后进入死信交换机 → 路由到消费队列。注意：队列头部的消息先过期，后入队的短 TTL 消息可能被阻塞。",
            "【死信处理策略】死信队列的处理方式：1) 人工审查和处理；2) 自动重试（限制次数）；3) 记录日志后丢弃；4) 转发到告警系统。需要根据业务重要性选择策略。",
            "【Consumer Lag 监控】Kafka 消费滞后监控：Consumer Lag = Log End Offset - Consumer Offset。滞后过大表示消费能力不足。需要配置告警阈值，及时扩容消费者。"
        ],
        handsOnPath: [
            "RocketMQ 延迟消息：message.setDelayTimeLevel(3); // 10 秒延迟；发送后等待 10 秒消费者才能收到。",
            "RabbitMQ TTL + DLX 延迟队列：创建 delay_queue（设置 x-message-ttl 和 x-dead-letter-exchange）→ 创建 consume_queue → 绑定死信交换机。",
            "配置 RabbitMQ 死信队列：channel.queueDeclare('normal_queue', true, false, false, Map.of('x-dead-letter-exchange', 'dlx', 'x-dead-letter-routing-key', 'dlq'));",
            "监控 Kafka Consumer Lag：kafka-consumer-groups.sh --describe --group mygroup; 或使用 Burrow 监控工具。",
            "实现死信告警：消费死信队列，将消息信息发送到监控系统（如 Prometheus + AlertManager）。"
        ],
        selfCheck: [
            "延迟队列有哪些应用场景？",
            "RabbitMQ 如何使用 TTL + DLX 实现延迟？",
            "消息成为死信的条件有哪些？",
            "如何配置 RabbitMQ 死信交换机？",
            "什么是 Consumer Lag？如何监控？"
        ],
        extensions: [
            "研究 RabbitMQ 的 delayed-message-exchange 插件。",
            "学习 Kafka 延迟队列的开源实现（如基于时间轮）。",
            "了解 RocketMQ 5.0 的任意时间延迟消息。",
            "研究消息队列的监控最佳实践（Prometheus + Grafana）。"
        ],
        sourceUrls: [
            "https://kafka.apache.org/documentation/#design_consumerposition",
            "https://www.rabbitmq.com/docs/dlx"
        ]
    }
}

export const week15Quizzes: Record<string, QuizQuestion[]> = {
    "w15-1": [
        {
            id: "w15-1-q1",
            question: "Kafka 的核心存储模型是什么？",
            options: [
                "消息确认后删除",
                "Append-only 日志，通过 offset 追踪消费进度",
                "B+ 树索引",
                "内存队列"
            ],
            answer: 1,
            rationale: "Kafka 使用 append-only 日志，消息持久化到磁盘，通过 offset 追踪消费进度。"
        },
        {
            id: "w15-1-q2",
            question: "RabbitMQ 实现的协议是什么？",
            options: [
                "Kafka Protocol",
                "gRPC",
                "AMQP",
                "HTTP/2"
            ],
            answer: 2,
            rationale: "'RabbitMQ is a message broker that implements the Advanced Message Queuing Protocol'。"
        },
        {
            id: "w15-1-q3",
            question: "RocketMQ 的服务发现组件是什么？",
            options: [
                "Zookeeper",
                "etcd",
                "NameServer",
                "Consul"
            ],
            answer: 2,
            rationale: "RocketMQ 采用 NameServer 做服务发现，Broker 存储消息。"
        },
        {
            id: "w15-1-q4",
            question: "Kafka 的消费模式是什么？",
            options: [
                "Push 模式",
                "Pull 模式",
                "混合模式",
                "订阅模式"
            ],
            answer: 1,
            rationale: "Kafka 是 pull 模式，消费者主动拉取消息；RabbitMQ 默认 push 模式。"
        },
        {
            id: "w15-1-q5",
            question: "RabbitMQ 支持哪些 Exchange 类型？",
            options: [
                "只有 direct",
                "direct、fanout、topic、headers",
                "只有 topic",
                "只有 fanout"
            ],
            answer: 1,
            rationale: "RabbitMQ 支持多种 Exchange 类型：direct、fanout、topic、headers。"
        },
        {
            id: "w15-1-q6",
            question: "哪种消息队列吞吐量最高？",
            options: [
                "RabbitMQ",
                "ActiveMQ",
                "Kafka",
                "ZeroMQ"
            ],
            answer: 2,
            rationale: "'Kafka is designed for high-throughput, low-latency handling of real-time data feeds'，单机可达百万 QPS。"
        },
        {
            id: "w15-1-q7",
            question: "RocketMQ 如何进行消息过滤？",
            options: [
                "只能按 Topic 过滤",
                "使用 Topic + Tag 进行消息过滤",
                "使用 SQL 语法",
                "使用正则表达式"
            ],
            answer: 1,
            rationale: "RocketMQ 使用 Topic + Tag 进行消息过滤。"
        },
        {
            id: "w15-1-q8",
            question: "RocketMQ 的存储架构是什么？",
            options: [
                "单一日志文件",
                "CommitLog + ConsumeQueue 分离存储",
                "内存存储",
                "B-Tree 索引"
            ],
            answer: 1,
            rationale: "RocketMQ 使用 CommitLog + ConsumeQueue 分离存储。"
        },
        {
            id: "w15-1-q9",
            question: "Push 消费模式的缺点是什么？",
            options: [
                "延迟高",
                "可能压垮消费者",
                "不支持批量消费",
                "无法确认消息"
            ],
            answer: 1,
            rationale: "Push 模式实时性好但可能压垮消费者，Pull 模式由消费者控制消费速率。"
        },
        {
            id: "w15-1-q10",
            question: "Kafka 消息顺序保证的范围是什么？",
            options: [
                "全局顺序",
                "单 partition 内顺序",
                "单 topic 顺序",
                "跨集群顺序"
            ],
            answer: 1,
            rationale: "Kafka 只保证单 partition 内顺序，跨 partition 无法保证全局顺序。"
        },
        {
            id: "w15-1-q11",
            question: "RabbitMQ 支持哪些协议？",
            options: [
                "只支持 AMQP",
                "AMQP、STOMP、MQTT 多协议",
                "只支持 HTTP",
                "只支持 gRPC"
            ],
            answer: 1,
            rationale: "RabbitMQ 支持 AMQP、STOMP、MQTT 多协议。"
        },
        {
            id: "w15-1-q12",
            question: "Kafka 使用什么协议进行通信？",
            options: [
                "AMQP",
                "HTTP/2",
                "自定义二进制协议",
                "gRPC"
            ],
            answer: 2,
            rationale: "Kafka 使用自定义二进制协议，RabbitMQ 支持 AMQP 等标准协议。"
        }
    ],
    "w15-2": [
        {
            id: "w15-2-q1",
            question: "消息传递的三种语义不包括？",
            options: [
                "At-most-once",
                "At-least-once",
                "At-same-time",
                "Exactly-once"
            ],
            answer: 2,
            rationale: "消息系统有三种语义：At-most-once、At-least-once、Exactly-once。"
        },
        {
            id: "w15-2-q2",
            question: "Microservices.io 对幂等消费者的定义是什么？",
            options: [
                "只处理一次消息",
                "处理同一消息多次的结果必须与处理一次相同",
                "拒绝重复消息",
                "自动去重"
            ],
            answer: 1,
            rationale: "'processing the same message multiple times must have the same outcome as processing it once'。"
        },
        {
            id: "w15-2-q3",
            question: "实现幂等消费的核心方法是什么？",
            options: [
                "增加超时时间",
                "使用消息 ID 追踪已处理的消息",
                "减少重试次数",
                "使用更快的网络"
            ],
            answer: 1,
            rationale: "'Track the messages that it has processed using message id'——使用消息 ID 追踪已处理的消息。"
        },
        {
            id: "w15-2-q4",
            question: "Kafka 幂等生产者需要设置什么参数？",
            options: [
                "acks=0",
                "enable.idempotence=true",
                "retries=0",
                "batch.size=0"
            ],
            answer: 1,
            rationale: "Kafka 0.11 引入幂等生产者：'enable.idempotence=true'。"
        },
        {
            id: "w15-2-q5",
            question: "消息重复产生的原因不包括？",
            options: [
                "生产者重试",
                "消费者确认失败",
                "网络延迟",
                "再平衡期间消息重新分配"
            ],
            answer: 2,
            rationale: "消息重复的常见原因：生产者重试、消费者确认失败、再平衡期间消息重新分配。网络延迟本身不直接导致重复。"
        },
        {
            id: "w15-2-q6",
            question: "Kafka acks=all 的含义是什么？",
            options: [
                "不等待确认",
                "只等待 leader 确认",
                "等待所有 ISR 确认",
                "等待所有 broker 确认"
            ],
            answer: 2,
            rationale: "acks=all 等待所有 ISR（In-Sync Replicas）确认，提供最高可靠性。"
        },
        {
            id: "w15-2-q7",
            question: "幂等与去重的区别是什么？",
            options: [
                "完全相同",
                "幂等是操作多次结果相同，去重是跳过已处理的消息",
                "去重更可靠",
                "幂等更快"
            ],
            answer: 1,
            rationale: "幂等是操作多次结果相同（如 UPDATE SET x=5）；去重是跳过已处理的消息，需要存储状态。"
        },
        {
            id: "w15-2-q8",
            question: "实现 exactly-once 需要什么条件？",
            options: [
                "只需要幂等生产者",
                "幂等生产者 + 事务性写入 + 消费者与外部系统的原子操作",
                "只需要消费者确认",
                "增加重试次数"
            ],
            answer: 1,
            rationale: "实现 exactly-once 需要：幂等生产者、事务性写入、消费者与外部系统的原子操作。"
        },
        {
            id: "w15-2-q9",
            question: "存储已处理消息 ID 最可靠的方案是什么？",
            options: [
                "Redis",
                "内存",
                "与业务表同事务写入",
                "本地文件"
            ],
            answer: 2,
            rationale: "与业务表同事务写入最可靠，保证业务处理和 ID 记录的原子性。"
        },
        {
            id: "w15-2-q10",
            question: "RabbitMQ 的 publisher confirms 用于什么？",
            options: [
                "消费者确认",
                "生产者确认消息已被 broker 接收",
                "路由确认",
                "连接确认"
            ],
            answer: 1,
            rationale: "channel.confirmSelect() 开启 publisher confirms，确认消息已被 broker 接收。"
        },
        {
            id: "w15-2-q11",
            question: "Kafka 幂等生产者能保证什么范围的幂等？",
            options: [
                "全局幂等",
                "单 partition 幂等",
                "跨 topic 幂等",
                "跨集群幂等"
            ],
            answer: 1,
            rationale: "Kafka 幂等生产者只能保证单 partition 幂等。"
        },
        {
            id: "w15-2-q12",
            question: "At-least-once 语义的特点是什么？",
            options: [
                "消息可能丢失",
                "消息可能重复",
                "消息恰好一次",
                "消息无序"
            ],
            answer: 1,
            rationale: "At-least-once 至少一次，消息可能重复，需要消费者幂等处理。"
        }
    ],
    "w15-3": [
        {
            id: "w15-3-q1",
            question: "RocketMQ 如何实现 FIFO 顺序消息？",
            options: [
                "使用全局锁",
                "通过 MessageGroup 机制",
                "使用时间戳排序",
                "使用优先级队列"
            ],
            answer: 1,
            rationale: "'通过 MessageGroup 机制实现顺序消息'——相同 MessageGroup 的消息按发送顺序被消费。"
        },
        {
            id: "w15-3-q2",
            question: "RocketMQ 顺序消息对生产者的要求是什么？",
            options: [
                "可以多生产者并发",
                "单一生产者串行发送",
                "批量发送",
                "异步发送"
            ],
            answer: 1,
            rationale: "'单一生产者：串行发送，并需业务方保证发送顺序'。多个生产者同时发送无法保证全局顺序。"
        },
        {
            id: "w15-3-q3",
            question: "RocketMQ 事务消息基于什么实现？",
            options: [
                "单阶段提交",
                "两阶段提交",
                "三阶段提交",
                "Saga 模式"
            ],
            answer: 1,
            rationale: "RocketMQ 事务消息实现分布式事务：'基于两阶段提交'。"
        },
        {
            id: "w15-3-q4",
            question: "事务消息第一阶段发送的是什么？",
            options: [
                "完整消息",
                "半消息（暂不可见）",
                "确认消息",
                "回滚消息"
            ],
            answer: 1,
            rationale: "第一阶段发送半消息（暂不可见），第二阶段根据本地事务结果提交或回滚。"
        },
        {
            id: "w15-3-q5",
            question: "顺序消息会牺牲什么？",
            options: [
                "可靠性",
                "并发性和性能",
                "持久性",
                "安全性"
            ],
            answer: 1,
            rationale: "'如果需要保证消息的顺序，则必须牺牲一定的性能'——单队列串行处理限制吞吐量。"
        },
        {
            id: "w15-3-q6",
            question: "Kafka 如何保证相关消息进入同一 partition？",
            options: [
                "随机分配",
                "通过 key hash 将相关消息发送到同一 partition",
                "使用事务",
                "使用压缩"
            ],
            answer: 1,
            rationale: "Kafka 通过 key hash 将相关消息发送到同一 partition，保证 partition 内顺序。"
        },
        {
            id: "w15-3-q7",
            question: "事务消息的回查机制是什么？",
            options: [
                "定期删除半消息",
                "如果长时间未收到确认，Broker 回查事务状态",
                "自动提交",
                "自动回滚"
            ],
            answer: 1,
            rationale: "'如果一段时间内服务端没有收到客户端的二次确认或者回滚请求，服务端会向客户端发起请求回查'。"
        },
        {
            id: "w15-3-q8",
            question: "半消息存储在哪里？",
            options: [
                "正常队列",
                "特殊 topic（RMQ_SYS_TRANS_HALF_TOPIC）",
                "内存",
                "本地文件"
            ],
            answer: 1,
            rationale: "半消息不进入正常队列，存储在特殊 topic（RMQ_SYS_TRANS_HALF_TOPIC）。"
        },
        {
            id: "w15-3-q9",
            question: "RocketMQ 消费顺序消息需要使用什么接口？",
            options: [
                "MessageListenerConcurrently",
                "MessageListenerOrderly",
                "MessageListenerAsync",
                "MessageListenerBatch"
            ],
            answer: 1,
            rationale: "使用 MessageListenerOrderly 接口，RocketMQ 保证同一队列的消息串行消费。"
        },
        {
            id: "w15-3-q10",
            question: "事务消息解决什么问题？",
            options: [
                "消息重复",
                "本地事务与消息发送的原子性问题",
                "消息丢失",
                "消息乱序"
            ],
            answer: 1,
            rationale: "事务消息解决本地事务与消息发送的原子性问题——两者要么都成功要么都失败。"
        },
        {
            id: "w15-3-q11",
            question: "RocketMQ 事务消息有多少个步骤？",
            options: [
                "3 个",
                "5 个",
                "7 个",
                "9 个"
            ],
            answer: 2,
            rationale: "RocketMQ 事务消息七个步骤：发送半消息、存储返回、执行本地事务、提交/回滚、处理、可见/删除、消费。"
        },
        {
            id: "w15-3-q12",
            question: "分区顺序与全局顺序的区别是什么？",
            options: [
                "没有区别",
                "分区顺序是 queue 内顺序，全局顺序需要单 queue",
                "全局顺序更快",
                "分区顺序更可靠"
            ],
            answer: 1,
            rationale: "RocketMQ 可选择分区顺序（queue 内）或全局顺序（单 queue）。全局顺序性能更低。"
        }
    ],
    "w15-4": [
        {
            id: "w15-4-q1",
            question: "延迟队列的典型应用场景不包括？",
            options: [
                "订单超时取消",
                "定时任务调度",
                "实时推送",
                "重试退避"
            ],
            answer: 2,
            rationale: "延迟队列用于延时处理：订单超时取消、定时任务调度、重试退避。实时推送不需要延迟。"
        },
        {
            id: "w15-4-q2",
            question: "RocketMQ 4.x 延迟消息的特点是什么？",
            options: [
                "支持任意时间延迟",
                "支持预设延迟级别",
                "不支持延迟",
                "只支持秒级延迟"
            ],
            answer: 1,
            rationale: "RocketMQ 4.x 支持预设延迟级别：'1s 5s 10s 30s 1m 2m...'。5.0 版本支持任意时间延迟。"
        },
        {
            id: "w15-4-q3",
            question: "RabbitMQ 消息成为死信的条件不包括？",
            options: [
                "nack/reject with requeue=false",
                "消息 TTL 过期",
                "消息太大",
                "队列达到长度限制"
            ],
            answer: 2,
            rationale: "死信条件：nack with requeue=false、TTL 过期、队列长度限制、投递次数限制。消息大小不是条件。"
        },
        {
            id: "w15-4-q4",
            question: "RabbitMQ 如何配置死信交换机？",
            options: [
                "x-message-ttl",
                "x-dead-letter-exchange",
                "x-max-length",
                "x-queue-type"
            ],
            answer: 1,
            rationale: "通过 x-dead-letter-exchange 和 x-dead-letter-routing-key 参数配置死信路由。"
        },
        {
            id: "w15-4-q5",
            question: "Consumer Lag 的计算公式是什么？",
            options: [
                "Consumer Offset - Log Start Offset",
                "Log End Offset - Consumer Offset",
                "Log End Offset - Log Start Offset",
                "Producer Offset - Consumer Offset"
            ],
            answer: 1,
            rationale: "Consumer Lag = Log End Offset - Consumer Offset，表示未消费的消息数量。"
        },
        {
            id: "w15-4-q6",
            question: "RabbitMQ TTL + DLX 延迟队列的问题是什么？",
            options: [
                "不支持持久化",
                "队列头部的消息先过期，后入队的短 TTL 消息可能被阻塞",
                "不支持集群",
                "延迟不精确"
            ],
            answer: 1,
            rationale: "队列头部的消息先过期，后入队的短 TTL 消息可能被阻塞（队列 FIFO 特性）。"
        },
        {
            id: "w15-4-q7",
            question: "Kafka 原生是否支持延迟队列？",
            options: [
                "原生支持",
                "不原生支持，需自行实现",
                "通过配置支持",
                "只支持秒级"
            ],
            answer: 1,
            rationale: "Kafka 不原生支持延迟队列，需要自行实现（如基于时间轮）。"
        },
        {
            id: "w15-4-q8",
            question: "死信队列的处理策略不包括？",
            options: [
                "人工审查处理",
                "自动重试（限制次数）",
                "自动删除所有死信",
                "转发到告警系统"
            ],
            answer: 2,
            rationale: "死信处理策略：人工审查、自动重试、记录日志后丢弃、转发告警。不应自动删除所有死信。"
        },
        {
            id: "w15-4-q9",
            question: "RocketMQ 如何设置延迟级别？",
            options: [
                "setDelayTime()",
                "setDelayTimeLevel()",
                "setScheduleTime()",
                "setTTL()"
            ],
            answer: 1,
            rationale: "通过 message.setDelayTimeLevel(3) 设置延迟级别，如 3 表示 10 秒延迟。"
        },
        {
            id: "w15-4-q10",
            question: "Consumer Lag 过大表示什么？",
            options: [
                "生产者太慢",
                "消费能力不足",
                "网络延迟高",
                "磁盘满了"
            ],
            answer: 1,
            rationale: "Consumer Lag 过大表示消费能力不足，需要扩容消费者。"
        },
        {
            id: "w15-4-q11",
            question: "RabbitMQ 死信路由键参数是什么？",
            options: [
                "x-dead-letter-exchange",
                "x-dead-letter-routing-key",
                "x-message-ttl",
                "x-max-priority"
            ],
            answer: 1,
            rationale: "x-dead-letter-routing-key 指定死信消息的路由键。"
        },
        {
            id: "w15-4-q12",
            question: "监控 Kafka Consumer Lag 的工具是什么？",
            options: [
                "kafka-topics.sh",
                "kafka-consumer-groups.sh 或 Burrow",
                "kafka-configs.sh",
                "kafka-log-dirs.sh"
            ],
            answer: 1,
            rationale: "使用 kafka-consumer-groups.sh --describe 或 Burrow 工具监控 Consumer Lag。"
        }
    ]
}
