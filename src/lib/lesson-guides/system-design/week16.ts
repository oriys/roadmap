import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week16Guides: Record<string, LessonGuide> = {
    "w16-1": {
        lessonId: "w16-1",
        background: [
            "【事件驱动架构定义】Martin Fowler 定义事件驱动架构：'Event-Driven Architecture is a software architecture paradigm promoting the production, detection, consumption of, and reaction to events'。核心是通过事件进行组件间通信。",
            "【四种事件模式】Martin Fowler 区分四种模式：Event Notification（事件通知）、Event-Carried State Transfer（携带状态的事件）、Event Sourcing（事件溯源）、CQRS（命令查询分离）。每种模式有不同的复杂度和适用场景。",
            "【Event Notification】最简单的模式：'一个系统发送事件消息通知其他系统其领域中发生了变化'。事件只包含标识信息，接收方需要回调查询详情。解耦但增加了查询开销。",
            "【Event-Carried State Transfer】事件携带完整状态：'发送方将状态变化的完整信息放入事件中'。接收方无需回调，但事件体积大，可能有数据一致性延迟。适合读多写少的场景。",
            "【事件与消息的区别】事件是'已发生事实的记录'，是不可变的；消息是'请求某个动作'，是命令式的。事件驱动强调松耦合——发布者不关心谁消费事件。"
        ],
        keyDifficulties: [
            "【最终一致性挑战】事件驱动系统通常是最终一致的：'Events take time to propagate through the system'。设计时需要处理状态延迟：UI 显示乐观更新、业务逻辑处理过期数据、补偿机制修复不一致。",
            "【事件顺序问题】分布式系统中事件顺序难以保证：'Events from different sources may arrive out of order'。解决方案：使用时间戳/版本号、按聚合根分区、幂等处理。",
            "【事件 Schema 演进】事件格式变化时需要向后兼容：新字段设为可选、使用 Schema Registry 管理版本、消费者支持多版本。'Schema evolution must be handled carefully to avoid breaking consumers'。",
            "【调试与追踪复杂性】事件流跨多个服务，调试困难。需要：分布式追踪（Jaeger/Zipkin）、事件日志（Kafka）、可视化工具（事件流图）。'Understanding the flow of events requires good tooling'。"
        ],
        handsOnPath: [
            "设计 Event Notification：定义 OrderCreated 事件只包含 orderId，库存服务订阅后回调订单服务获取商品列表。",
            "设计 Event-Carried State Transfer：OrderCreated 事件包含完整订单信息（items、address、total），库存服务直接使用。",
            "实现事件发布订阅：使用 Kafka 发布事件，多个消费者组独立消费，观察事件传播。",
            "添加分布式追踪：集成 OpenTelemetry，在事件中传递 trace context，使用 Jaeger 查看事件流。",
            "处理事件顺序：使用 Kafka 分区键保证同一订单的事件顺序，消费者按版本号处理乱序事件。"
        ],
        selfCheck: [
            "事件驱动架构的核心理念是什么？",
            "四种事件模式的区别是什么？",
            "Event Notification 和 Event-Carried State Transfer 各自的优缺点？",
            "如何处理事件系统中的最终一致性？",
            "事件 Schema 演进需要注意什么？"
        ],
        extensions: [
            "研究 CloudEvents 规范统一事件格式。",
            "学习 AsyncAPI 定义事件驱动 API。",
            "了解 Choreography vs Orchestration 的事件协调模式。",
            "研究 EventBridge 等云原生事件总线。"
        ],
        sourceUrls: [
            "https://martinfowler.com/articles/201701-event-driven.html",
            "https://martinfowler.com/bliki/CQRS.html"
        ]
    },
    "w16-2": {
        lessonId: "w16-2",
        background: [
            "【CQRS 定义】Martin Fowler 定义 CQRS：'使用不同的模型来更新信息（Command），而使用另一个模型来读取信息（Query）'。命令侧和查询侧可以独立优化。",
            "【CQRS 动机】传统 CRUD 使用同一模型读写，但读写模式差异大：写操作需要验证和业务规则，读操作需要多种视图和聚合。分离后各自优化。",
            "【命令侧（Command Side）】处理写操作：接收命令、验证业务规则、更新状态、发布事件。可以使用领域驱动设计（DDD）、聚合根、事件溯源。数据模型针对写入优化。",
            "【查询侧（Query Side）】处理读操作：订阅事件、更新物化视图、响应查询。可以使用多种存储（ES、Redis、数据仓库）。数据模型针对特定查询场景优化。",
            "【CQRS 与 Event Sourcing】CQRS 常与 Event Sourcing 结合：命令侧存储事件序列，查询侧通过投影（projection）构建物化视图。但两者是独立模式，可以单独使用。"
        ],
        keyDifficulties: [
            "【复杂性增加】Martin Fowler 警告：'CQRS adds significant complexity'。需要维护两套模型、处理同步延迟、最终一致性。只在读写差异大的场景使用。",
            "【数据同步延迟】查询侧视图通过事件异步更新，有延迟：'The read model may be out of sync with the write model for a short period'。UI 需要处理：显示'数据同步中'、乐观更新。",
            "【事件投影设计】投影将事件转换为查询模型：需要处理所有事件类型、支持重放（rebuild）、处理幂等。投影逻辑必须是确定性的，相同事件产生相同结果。",
            "【命令验证】命令侧需要验证业务规则，可能需要查询现有状态。如果查询侧有延迟，验证可能基于过期数据。解决方案：命令侧维护必要的验证状态。"
        ],
        handsOnPath: [
            "设计命令模型：定义 CreateOrder、CancelOrder 等命令，包含验证逻辑，成功后发布 OrderCreated、OrderCancelled 事件。",
            "设计查询模型：创建 OrderSummaryView（用于列表页）和 OrderDetailView（用于详情页），针对不同查询优化。",
            "实现事件投影：消费 Order 事件，更新 Elasticsearch 中的查询视图，支持全文搜索。",
            "实现视图重建：清空查询存储，从事件日志重放所有事件，重建物化视图。",
            "处理同步延迟：在 UI 使用乐观更新——命令成功后立即更新本地状态，不等待查询侧同步。"
        ],
        selfCheck: [
            "CQRS 的核心思想是什么？",
            "命令侧和查询侧各自的职责是什么？",
            "为什么说 CQRS 增加了复杂性？",
            "如何处理查询侧的数据同步延迟？",
            "CQRS 与 Event Sourcing 的关系是什么？"
        ],
        extensions: [
            "研究 Axon Framework 的 CQRS 实现。",
            "学习 EventStoreDB 的投影功能。",
            "了解 GraphQL 在 CQRS 查询侧的应用。",
            "研究 CQRS 在电商订单系统的最佳实践。"
        ],
        sourceUrls: [
            "https://martinfowler.com/bliki/CQRS.html",
            "https://martinfowler.com/articles/201701-event-driven.html"
        ]
    },
    "w16-3": {
        lessonId: "w16-3",
        background: [
            "【Kafka Streams 定位】Kafka Streams 是轻量级流处理库：'A client library for building applications and microservices'。无需独立集群，直接嵌入应用程序，使用 Kafka 作为存储和传输。",
            "【Flink 定位】Apache Flink 是分布式流处理引擎：'A framework and distributed processing engine for stateful computations over unbounded and bounded data streams'。支持复杂的状态管理和精确一次语义。",
            "【流处理核心概念】流处理的关键概念：无界数据流（unbounded stream）、有状态计算（stateful processing）、窗口（windowing）、时间语义（event time vs processing time）。",
            "【Kafka Streams 核心抽象】Kafka Streams 使用 KStream（记录流）和 KTable（变更日志）两种抽象。KStream 是 append-only 日志，KTable 是当前状态的快照。两者可以相互转换。",
            "【Flink DataStream API】Flink 提供 DataStream API 处理无界流，DataSet API（已废弃）处理有界数据。核心操作：map、filter、keyBy、window、aggregate。"
        ],
        keyDifficulties: [
            "【状态管理复杂性】有状态流处理需要管理状态：存储位置（内存/RocksDB）、容错（checkpoint）、扩缩容（状态迁移）。'State management is one of the most challenging aspects of stream processing'。",
            "【Exactly-once 实现】流处理的 exactly-once 需要：幂等输出、事务性写入、checkpoint 对齐。Flink 通过 checkpoint barrier 和两阶段提交实现端到端 exactly-once。",
            "【Kafka Streams vs Flink 选择】Kafka Streams 适合：简单转换、已使用 Kafka、不想维护集群。Flink 适合：复杂窗口计算、低延迟、大规模状态、多数据源。",
            "【背压处理】消费速度跟不上生产速度时产生背压。Flink 使用 credit-based 流控；Kafka Streams 依赖 Kafka consumer 的自然背压。需要监控和调优。"
        ],
        handsOnPath: [
            "Kafka Streams WordCount：StreamsBuilder builder = new StreamsBuilder(); builder.stream('input').flatMapValues(v -> Arrays.asList(v.split(' '))).groupBy((k,v)->v).count();",
            "Flink WordCount：env.fromSource(kafkaSource).flatMap(new Tokenizer()).keyBy(t -> t.f0).sum(1).sinkTo(kafkaSink);",
            "Kafka Streams 窗口聚合：.windowedBy(TimeWindows.of(Duration.ofMinutes(5))).count();",
            "Flink 窗口聚合：.keyBy(event -> event.getUserId()).window(TumblingEventTimeWindows.of(Time.minutes(5))).sum('amount');",
            "配置 Flink checkpoint：env.enableCheckpointing(60000); env.getCheckpointConfig().setCheckpointingMode(CheckpointingMode.EXACTLY_ONCE);"
        ],
        selfCheck: [
            "Kafka Streams 和 Flink 的定位有什么区别？",
            "KStream 和 KTable 的区别是什么？",
            "流处理如何实现 exactly-once 语义？",
            "什么场景选择 Kafka Streams？什么场景选择 Flink？",
            "什么是背压？如何处理？"
        ],
        extensions: [
            "研究 Kafka Streams 的 Interactive Queries。",
            "学习 Flink SQL 简化流处理开发。",
            "了解 Spark Structured Streaming 与 Flink 对比。",
            "研究 ksqlDB 的流式 SQL 查询。"
        ],
        sourceUrls: [
            "https://kafka.apache.org/documentation/streams/core-concepts",
            "https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/time/"
        ]
    },
    "w16-4": {
        lessonId: "w16-4",
        background: [
            "【Event Time vs Processing Time】Flink 文档：'Processing time refers to the system time of the machine that is executing the operation'。Event time 是事件实际发生的时间，processing time 是处理时的系统时间。",
            "【为什么需要 Event Time】Processing time 简单但不准确：网络延迟、重新处理、乱序到达都会影响结果。Event time 基于事件本身的时间戳，结果确定且可重放。",
            "【Watermark 定义】Flink 文档：'Watermarks are a mechanism to measure progress in event time'。Watermark 时间戳 t 表示'不会再有时间戳 ≤ t 的事件到达'。用于触发窗口计算。",
            "【Flink 架构组件】Flink 集群包含：JobManager（ResourceManager、Dispatcher、JobMaster）和 TaskManager。JobManager 负责协调和调度，TaskManager 执行任务。",
            "【Task Slots】Flink 文档：'Each TaskManager is a JVM process that can execute one or more subtasks in separate threads'。Task Slot 是资源隔离单元，控制 TaskManager 的并发能力。"
        ],
        keyDifficulties: [
            "【迟到数据处理】现实中数据可能在 watermark 之后到达（late data）。处理策略：1) 丢弃；2) 允许一定延迟（allowed lateness）；3) 侧输出（side output）收集处理。",
            "【Watermark 生成策略】Watermark 生成方式：1) 周期性（Periodic）——定时生成；2) 标点式（Punctuated）——特定事件触发。需要平衡延迟和完整性。'maxOutOfOrderness' 参数控制容忍的乱序程度。",
            "【窗口类型选择】Flink 支持多种窗口：Tumbling（滚动，不重叠）、Sliding（滑动，可重叠）、Session（会话，按活动间隔）、Global（全局）。根据业务需求选择。",
            "【Checkpoint 与 Savepoint】Checkpoint 是自动的容错快照，用于故障恢复。Savepoint 是手动触发的快照，用于版本升级和迁移。两者格式兼容，但用途不同。"
        ],
        handsOnPath: [
            "配置 Event Time：env.setStreamTimeCharacteristic(TimeCharacteristic.EventTime); // Flink 1.12 后默认 event time",
            "定义 Watermark：WatermarkStrategy.forBoundedOutOfOrderness(Duration.ofSeconds(5)) // 容忍 5 秒乱序",
            "提取事件时间：.withTimestampAssigner((event, timestamp) -> event.getEventTime())",
            "处理迟到数据：.window(TumblingEventTimeWindows.of(Time.minutes(5))).allowedLateness(Time.minutes(1)).sideOutputLateData(lateOutputTag)",
            "配置 Task Slots：taskmanager.numberOfTaskSlots: 4 // 每个 TaskManager 4 个 slot"
        ],
        selfCheck: [
            "Event Time 和 Processing Time 的区别是什么？",
            "为什么流处理需要 Watermark？",
            "Watermark 时间戳 t 的含义是什么？",
            "如何处理迟到数据？",
            "Flink 的 JobManager 和 TaskManager 各自的职责是什么？"
        ],
        extensions: [
            "研究 Flink 的 Exactly-once 两阶段提交实现。",
            "学习 Flink 状态后端（RocksDB vs Heap）的选择。",
            "了解 Flink CDC（Change Data Capture）的应用。",
            "研究 Flink on Kubernetes 的部署模式。"
        ],
        sourceUrls: [
            "https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/time/",
            "https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/flink-architecture/"
        ]
    }
}

export const week16Quizzes: Record<string, QuizQuestion[]> = {
    "w16-1": [
        {
            id: "w16-1-q1",
            question: "Martin Fowler 定义的四种事件模式不包括？",
            options: [
                "Event Notification",
                "Event-Carried State Transfer",
                "Event Queuing",
                "CQRS"
            ],
            answer: 2,
            rationale: "四种模式：Event Notification、Event-Carried State Transfer、Event Sourcing、CQRS。"
        },
        {
            id: "w16-1-q2",
            question: "Event Notification 模式的特点是什么？",
            options: [
                "事件携带完整状态",
                "事件只包含标识信息，接收方需要回调查询详情",
                "事件存储历史",
                "事件触发命令"
            ],
            answer: 1,
            rationale: "Event Notification：'一个系统发送事件消息通知其他系统其领域中发生了变化'，事件只包含标识信息。"
        },
        {
            id: "w16-1-q3",
            question: "Event-Carried State Transfer 的优势是什么？",
            options: [
                "事件体积小",
                "接收方无需回调，直接使用事件中的完整状态",
                "实时一致性",
                "无需存储"
            ],
            answer: 1,
            rationale: "'发送方将状态变化的完整信息放入事件中'，接收方无需回调。"
        },
        {
            id: "w16-1-q4",
            question: "事件与消息的区别是什么？",
            options: [
                "没有区别",
                "事件是已发生事实的记录（不可变），消息是请求某个动作（命令式）",
                "事件更快",
                "消息更可靠"
            ],
            answer: 1,
            rationale: "事件是'已发生事实的记录'，是不可变的；消息是'请求某个动作'，是命令式的。"
        },
        {
            id: "w16-1-q5",
            question: "事件驱动系统的一致性模型是什么？",
            options: [
                "强一致性",
                "最终一致性",
                "线性一致性",
                "无一致性"
            ],
            answer: 1,
            rationale: "'Events take time to propagate through the system'——事件驱动系统通常是最终一致的。"
        },
        {
            id: "w16-1-q6",
            question: "如何解决事件顺序问题？",
            options: [
                "忽略顺序",
                "使用时间戳/版本号、按聚合根分区、幂等处理",
                "使用全局锁",
                "强制同步"
            ],
            answer: 1,
            rationale: "解决方案：使用时间戳/版本号、按聚合根分区、幂等处理。"
        },
        {
            id: "w16-1-q7",
            question: "事件 Schema 演进需要注意什么？",
            options: [
                "可以随意修改",
                "新字段设为可选、使用 Schema Registry 管理版本",
                "删除旧字段",
                "强制升级所有消费者"
            ],
            answer: 1,
            rationale: "'Schema evolution must be handled carefully to avoid breaking consumers'。"
        },
        {
            id: "w16-1-q8",
            question: "调试事件驱动系统需要什么工具？",
            options: [
                "只需要日志",
                "分布式追踪（Jaeger/Zipkin）、事件日志、可视化工具",
                "只需要断点",
                "不需要特殊工具"
            ],
            answer: 1,
            rationale: "'Understanding the flow of events requires good tooling'——需要分布式追踪和可视化工具。"
        },
        {
            id: "w16-1-q9",
            question: "Event-Carried State Transfer 的缺点是什么？",
            options: [
                "需要回调",
                "事件体积大，可能有数据一致性延迟",
                "不支持分布式",
                "性能差"
            ],
            answer: 1,
            rationale: "事件携带完整状态导致体积大，且可能有数据一致性延迟。"
        },
        {
            id: "w16-1-q10",
            question: "事件驱动架构的核心是什么？",
            options: [
                "同步调用",
                "通过事件进行组件间通信",
                "共享数据库",
                "RPC 调用"
            ],
            answer: 1,
            rationale: "事件驱动架构核心是通过事件进行组件间通信，实现松耦合。"
        },
        {
            id: "w16-1-q11",
            question: "如何处理事件系统中的状态延迟？",
            options: [
                "使用强一致性",
                "UI 乐观更新、业务逻辑处理过期数据、补偿机制",
                "增加超时",
                "忽略延迟"
            ],
            answer: 1,
            rationale: "处理状态延迟：UI 显示乐观更新、业务逻辑处理过期数据、补偿机制修复不一致。"
        },
        {
            id: "w16-1-q12",
            question: "事件驱动架构中发布者的特点是什么？",
            options: [
                "需要知道所有消费者",
                "不关心谁消费事件",
                "必须等待消费者确认",
                "同步发送"
            ],
            answer: 1,
            rationale: "事件驱动强调松耦合——发布者不关心谁消费事件。"
        }
    ],
    "w16-2": [
        {
            id: "w16-2-q1",
            question: "Martin Fowler 对 CQRS 的定义是什么？",
            options: [
                "使用同一模型读写",
                "使用不同模型更新信息（Command）和读取信息（Query）",
                "只关注写操作",
                "只关注读操作"
            ],
            answer: 1,
            rationale: "'使用不同的模型来更新信息（Command），而使用另一个模型来读取信息（Query）'。"
        },
        {
            id: "w16-2-q2",
            question: "CQRS 的主要动机是什么？",
            options: [
                "简化代码",
                "读写模式差异大，分离后各自优化",
                "提高安全性",
                "减少存储"
            ],
            answer: 1,
            rationale: "传统 CRUD 使用同一模型读写，但读写模式差异大。分离后各自优化。"
        },
        {
            id: "w16-2-q3",
            question: "CQRS 命令侧的职责是什么？",
            options: [
                "响应查询",
                "处理写操作、验证业务规则、更新状态、发布事件",
                "构建物化视图",
                "缓存数据"
            ],
            answer: 1,
            rationale: "命令侧处理写操作：接收命令、验证业务规则、更新状态、发布事件。"
        },
        {
            id: "w16-2-q4",
            question: "CQRS 查询侧的职责是什么？",
            options: [
                "验证业务规则",
                "订阅事件、更新物化视图、响应查询",
                "发布事件",
                "执行命令"
            ],
            answer: 1,
            rationale: "查询侧处理读操作：订阅事件、更新物化视图、响应查询。"
        },
        {
            id: "w16-2-q5",
            question: "Martin Fowler 对 CQRS 的警告是什么？",
            options: [
                "太简单",
                "增加了显著复杂性",
                "性能太差",
                "不支持分布式"
            ],
            answer: 1,
            rationale: "'CQRS adds significant complexity'——需要维护两套模型、处理同步延迟。"
        },
        {
            id: "w16-2-q6",
            question: "查询侧数据同步延迟如何处理？",
            options: [
                "强制同步",
                "UI 显示'数据同步中'或乐观更新",
                "阻塞等待",
                "忽略延迟"
            ],
            answer: 1,
            rationale: "'The read model may be out of sync with the write model for a short period'，UI 需要处理。"
        },
        {
            id: "w16-2-q7",
            question: "事件投影（Projection）的作用是什么？",
            options: [
                "发送事件",
                "将事件转换为查询模型",
                "验证命令",
                "存储事件"
            ],
            answer: 1,
            rationale: "投影将事件转换为查询模型，必须是确定性的，相同事件产生相同结果。"
        },
        {
            id: "w16-2-q8",
            question: "CQRS 与 Event Sourcing 的关系是什么？",
            options: [
                "必须一起使用",
                "常结合使用但是独立模式，可以单独使用",
                "完全相同",
                "互不兼容"
            ],
            answer: 1,
            rationale: "CQRS 常与 Event Sourcing 结合，但两者是独立模式，可以单独使用。"
        },
        {
            id: "w16-2-q9",
            question: "如何重建查询侧视图？",
            options: [
                "重启服务",
                "清空查询存储，从事件日志重放所有事件",
                "手动更新",
                "等待自动同步"
            ],
            answer: 1,
            rationale: "视图重建：清空查询存储，从事件日志重放所有事件，重建物化视图。"
        },
        {
            id: "w16-2-q10",
            question: "命令验证面临的挑战是什么？",
            options: [
                "验证太简单",
                "如果查询侧有延迟，验证可能基于过期数据",
                "不需要验证",
                "验证太快"
            ],
            answer: 1,
            rationale: "如果查询侧有延迟，验证可能基于过期数据。解决方案：命令侧维护必要的验证状态。"
        },
        {
            id: "w16-2-q11",
            question: "CQRS 适用于什么场景？",
            options: [
                "简单 CRUD",
                "读写差异大的场景",
                "只读应用",
                "只写应用"
            ],
            answer: 1,
            rationale: "只在读写差异大的场景使用 CQRS，简单场景增加不必要的复杂性。"
        },
        {
            id: "w16-2-q12",
            question: "UI 如何处理 CQRS 的同步延迟？",
            options: [
                "阻塞等待",
                "乐观更新——命令成功后立即更新本地状态",
                "刷新页面",
                "忽略"
            ],
            answer: 1,
            rationale: "在 UI 使用乐观更新——命令成功后立即更新本地状态，不等待查询侧同步。"
        }
    ],
    "w16-3": [
        {
            id: "w16-3-q1",
            question: "Kafka Streams 的定位是什么？",
            options: [
                "独立集群",
                "轻量级流处理库，嵌入应用程序",
                "数据库",
                "消息队列"
            ],
            answer: 1,
            rationale: "'A client library for building applications and microservices'——无需独立集群，直接嵌入应用程序。"
        },
        {
            id: "w16-3-q2",
            question: "Flink 的定位是什么？",
            options: [
                "客户端库",
                "分布式流处理引擎，支持复杂状态管理",
                "消息队列",
                "数据仓库"
            ],
            answer: 1,
            rationale: "'A framework and distributed processing engine for stateful computations over unbounded and bounded data streams'。"
        },
        {
            id: "w16-3-q3",
            question: "KStream 和 KTable 的区别是什么？",
            options: [
                "没有区别",
                "KStream 是 append-only 日志，KTable 是当前状态的快照",
                "KTable 是日志",
                "KStream 是快照"
            ],
            answer: 1,
            rationale: "KStream 是 append-only 日志，KTable 是当前状态的快照（变更日志）。"
        },
        {
            id: "w16-3-q4",
            question: "有状态流处理的主要挑战是什么？",
            options: [
                "无状态",
                "状态存储、容错（checkpoint）、扩缩容（状态迁移）",
                "太简单",
                "不需要状态"
            ],
            answer: 1,
            rationale: "'State management is one of the most challenging aspects of stream processing'。"
        },
        {
            id: "w16-3-q5",
            question: "Flink 如何实现端到端 exactly-once？",
            options: [
                "不支持",
                "通过 checkpoint barrier 和两阶段提交",
                "重试",
                "去重"
            ],
            answer: 1,
            rationale: "Flink 通过 checkpoint barrier 和两阶段提交实现端到端 exactly-once。"
        },
        {
            id: "w16-3-q6",
            question: "什么场景选择 Kafka Streams？",
            options: [
                "复杂窗口计算",
                "简单转换、已使用 Kafka、不想维护集群",
                "大规模状态",
                "多数据源"
            ],
            answer: 1,
            rationale: "Kafka Streams 适合：简单转换、已使用 Kafka、不想维护集群。"
        },
        {
            id: "w16-3-q7",
            question: "什么场景选择 Flink？",
            options: [
                "简单转换",
                "复杂窗口计算、低延迟、大规模状态、多数据源",
                "只用 Kafka",
                "不需要状态"
            ],
            answer: 1,
            rationale: "Flink 适合：复杂窗口计算、低延迟、大规模状态、多数据源。"
        },
        {
            id: "w16-3-q8",
            question: "什么是背压（Backpressure）？",
            options: [
                "网络压力",
                "消费速度跟不上生产速度",
                "磁盘压力",
                "内存压力"
            ],
            answer: 1,
            rationale: "消费速度跟不上生产速度时产生背压，需要监控和调优。"
        },
        {
            id: "w16-3-q9",
            question: "Flink 如何处理背压？",
            options: [
                "丢弃数据",
                "使用 credit-based 流控",
                "增加缓存",
                "忽略"
            ],
            answer: 1,
            rationale: "Flink 使用 credit-based 流控；Kafka Streams 依赖 Kafka consumer 的自然背压。"
        },
        {
            id: "w16-3-q10",
            question: "Kafka Streams 使用什么作为存储和传输？",
            options: [
                "HDFS",
                "Kafka",
                "MySQL",
                "Redis"
            ],
            answer: 1,
            rationale: "Kafka Streams 使用 Kafka 作为存储和传输，无需独立集群。"
        },
        {
            id: "w16-3-q11",
            question: "流处理的核心概念不包括？",
            options: [
                "无界数据流",
                "有状态计算",
                "批处理",
                "窗口"
            ],
            answer: 2,
            rationale: "流处理核心概念：无界数据流、有状态计算、窗口、时间语义。批处理是另一种范式。"
        },
        {
            id: "w16-3-q12",
            question: "Flink 如何配置 checkpoint？",
            options: [
                "不需要配置",
                "env.enableCheckpointing(interval) 设置间隔",
                "自动配置",
                "通过文件配置"
            ],
            answer: 1,
            rationale: "env.enableCheckpointing(60000) 设置 checkpoint 间隔，可配置 exactly-once 模式。"
        }
    ],
    "w16-4": [
        {
            id: "w16-4-q1",
            question: "Processing Time 的定义是什么？",
            options: [
                "事件发生的时间",
                "执行操作的机器的系统时间",
                "数据到达的时间",
                "用户指定的时间"
            ],
            answer: 1,
            rationale: "'Processing time refers to the system time of the machine that is executing the operation'。"
        },
        {
            id: "w16-4-q2",
            question: "为什么需要 Event Time？",
            options: [
                "Processing time 更准确",
                "Event time 基于事件本身的时间戳，结果确定且可重放",
                "Event time 更简单",
                "Processing time 不支持窗口"
            ],
            answer: 1,
            rationale: "Processing time 受网络延迟、重新处理影响。Event time 基于事件时间戳，结果确定且可重放。"
        },
        {
            id: "w16-4-q3",
            question: "Watermark 的作用是什么？",
            options: [
                "数据压缩",
                "测量 event time 进度，触发窗口计算",
                "负载均衡",
                "状态管理"
            ],
            answer: 1,
            rationale: "'Watermarks are a mechanism to measure progress in event time'——用于触发窗口计算。"
        },
        {
            id: "w16-4-q4",
            question: "Watermark 时间戳 t 的含义是什么？",
            options: [
                "当前时间是 t",
                "不会再有时间戳 ≤ t 的事件到达",
                "所有事件时间都是 t",
                "处理时间是 t"
            ],
            answer: 1,
            rationale: "Watermark 时间戳 t 表示'不会再有时间戳 ≤ t 的事件到达'。"
        },
        {
            id: "w16-4-q5",
            question: "如何处理迟到数据（Late Data）？",
            options: [
                "只能丢弃",
                "丢弃、允许一定延迟、侧输出收集处理",
                "忽略",
                "重新处理所有数据"
            ],
            answer: 1,
            rationale: "处理策略：1) 丢弃；2) 允许一定延迟（allowed lateness）；3) 侧输出（side output）收集处理。"
        },
        {
            id: "w16-4-q6",
            question: "Flink JobManager 包含哪些组件？",
            options: [
                "只有 Dispatcher",
                "ResourceManager、Dispatcher、JobMaster",
                "只有 TaskManager",
                "只有 ResourceManager"
            ],
            answer: 1,
            rationale: "JobManager 包含：ResourceManager、Dispatcher、JobMaster。"
        },
        {
            id: "w16-4-q7",
            question: "Task Slot 的作用是什么？",
            options: [
                "存储数据",
                "资源隔离单元，控制 TaskManager 的并发能力",
                "网络通信",
                "状态管理"
            ],
            answer: 1,
            rationale: "Task Slot 是资源隔离单元，控制 TaskManager 的并发能力。"
        },
        {
            id: "w16-4-q8",
            question: "Checkpoint 和 Savepoint 的区别是什么？",
            options: [
                "完全相同",
                "Checkpoint 自动容错快照，Savepoint 手动快照用于升级迁移",
                "Savepoint 是自动的",
                "Checkpoint 用于升级"
            ],
            answer: 1,
            rationale: "Checkpoint 是自动的容错快照，Savepoint 是手动触发的快照，用于版本升级和迁移。"
        },
        {
            id: "w16-4-q9",
            question: "maxOutOfOrderness 参数的含义是什么？",
            options: [
                "最大并发数",
                "容忍的乱序程度（延迟时间）",
                "最大内存",
                "最大状态大小"
            ],
            answer: 1,
            rationale: "'maxOutOfOrderness' 参数控制容忍的乱序程度，影响 watermark 生成。"
        },
        {
            id: "w16-4-q10",
            question: "Flink 支持哪些窗口类型？",
            options: [
                "只有 Tumbling",
                "Tumbling、Sliding、Session、Global",
                "只有 Sliding",
                "只有 Session"
            ],
            answer: 1,
            rationale: "Flink 支持多种窗口：Tumbling（滚动）、Sliding（滑动）、Session（会话）、Global（全局）。"
        },
        {
            id: "w16-4-q11",
            question: "TaskManager 的定义是什么？",
            options: [
                "协调任务",
                "JVM 进程，可以在独立线程中执行一个或多个子任务",
                "管理资源",
                "存储状态"
            ],
            answer: 1,
            rationale: "'Each TaskManager is a JVM process that can execute one or more subtasks in separate threads'。"
        },
        {
            id: "w16-4-q12",
            question: "侧输出（Side Output）用于什么？",
            options: [
                "主输出",
                "收集迟到数据或其他特殊数据",
                "日志输出",
                "错误输出"
            ],
            answer: 1,
            rationale: "侧输出用于收集迟到数据或其他需要特殊处理的数据。"
        }
    ]
}
