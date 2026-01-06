import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "w6-1": {
        lessonId: "w6-1",
        background: [
            "【核心概念】Azure 官方文档：CQRS（Command Query Responsibility Segregation）是'separates read and write operations into distinct data models'——将读取和写入操作分离为不同的数据模型。Command 处理数据更新，Query 处理数据检索，各自优化以获得最佳性能。",
            "【命令与查询分离】官方文档：Commands 应该是'task-based, rather than data centric'——基于任务而非数据中心，例如使用 'Book hotel room' 而不是 'Set ReservationStatus to Reserved'。Query 返回 DTOs（数据传输对象），不应包含领域逻辑。",
            "【Martin Fowler 定义】Martin Fowler 指出：'you can use a different model to update information than the model you use to read information'——可以使用不同的模型来更新和读取信息。这两个模型可能运行在不同的逻辑进程，甚至分别在不同的硬件上。",
            "【两种实现方式】Azure 文档区分：基础 CQRS——读写模型共享单个数据库；高级 CQRS——读写模型使用独立的数据存储，写模型发布事件同步读模型，支持不同存储技术和独立扩展。",
            "【谨慎使用警告】Martin Fowler 强调：'CQRS对大多数系统来说会增加风险复杂性'——仅适用于特定的有限范围（DDD 中的限界上下文），而非整个系统。许多信息系统不适合 CQRS，盲目使用会降低生产力并增加项目风险。"
        ],
        keyDifficulties: [
            "【适用场景判断】Azure 文档列出适用场景：协作环境中的并发数据访问、基于任务的复杂 UI 工作流、高读写比系统、需要独立扩展读写性能的系统。不适用于：简单的领域或业务规则、简单的 CRUD 操作。",
            "【最终一致性挑战】Azure 文档警告：'Read data may lag behind writes'——分离数据存储时，读取数据可能滞后于写入。系统必须设计为容忍陈旧数据，这对某些业务场景是不可接受的。",
            "【消息传递问题】Azure 文档指出：'Handle failures, duplicates, retries'——使用消息传递同步读写模型时，需要处理消息失败、重复和重试。消息处理器必须具备幂等性。",
            "【复杂度权衡】Martin Fowler 警告：CQRS'straightforward core concept, but complex with Event Sourcing'——核心概念简单，但与 Event Sourcing 结合时复杂度急剧上升。需要评估收益是否大于引入的复杂性。",
            "【命令验证策略】Azure 文档建议：客户端验证——当条件不满足时禁用操作（如禁用 'Book' 按钮）；服务端逻辑——处理边缘情况和竞态条件（如超订时的等待列表）；支持异步处理——将命令排队而非同步处理。"
        ],
        handsOnPath: [
            "设计简单的 CQRS 架构：选择一个示例场景（如电商订单系统），分别定义 Command Model 和 Query Model。Command 处理创建订单、更新状态等操作；Query 提供订单列表、订单详情等视图。",
            "实现 Command Handler：参考 Azure 示例代码，创建 Command 类（如 RateProduct）和 CommandHandler 类。Handler 加载聚合、执行业务逻辑、保存变更。确保命令具有明确的业务语义。",
            "实现 Query Model：创建只读的 ProductsDao 接口，返回 ProductDisplay DTO。DTO 只包含展示所需的字段，不暴露领域模型内部结构。可使用不同的数据库或视图优化查询性能。",
            "添加事件同步机制：写模型保存成功后发布领域事件（如 ProductRated），读模型订阅事件并更新物化视图。使用消息队列（如 RabbitMQ、Kafka）确保可靠传递。",
            "参考 CQRS Journey 示例：阅读 Microsoft 官方的 Contoso 会议管理系统参考实现，了解有界上下文划分、事件溯源集成、系统版本控制等企业级实践。"
        ],
        selfCheck: [
            "CQRS 的核心思想是什么？为什么要将读取和写入操作分离为不同的模型？",
            "根据官方文档，CQRS 适用于哪些场景？不适用于哪些场景？",
            "什么是'最终一致性'挑战？在 CQRS 架构中如何处理读取数据滞后于写入的问题？",
            "CQRS 与 Event Sourcing 如何结合使用？结合使用带来什么好处和复杂性？",
            "Martin Fowler 为什么警告'CQRS 对大多数系统来说会增加风险复杂性'？什么情况下不应该使用 CQRS？"
        ],
        extensions: [
            "研究 CQRS Journey 完整案例：Microsoft 的 Contoso 会议管理系统提供了企业级 CQRS 实现的完整参考，包括有界上下文、事件溯源、系统升级等关键话题。",
            "学习 Greg Young 的 CQRS/ES 框架：了解 CQRS 模式创始人的思想和实现方式，深入理解事件存储和投影的设计。",
            "探索 Axon Framework：Java 生态中成熟的 CQRS/ES 框架，提供了命令总线、事件存储、Saga 等开箱即用的组件。",
            "研究 Task-based UI 设计：理解 CQRS 如何与任务导向型 UI 配合，用户操作不再是简单的 CRUD，而是有明确业务语义的任务。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs",
            "https://martinfowler.com/bliki/CQRS.html",
            "https://learn.microsoft.com/en-us/previous-versions/msp-n-p/jj554200(v=pandp.10)"
        ]
    },
    "w6-2": {
        lessonId: "w6-2",
        background: [
            "【核心概念】Azure 官方文档：Event Sourcing 是'instead of storing just the current state, use an append-only store to record the full series of actions taken on data'——不是存储当前状态，而是在追加式存储中记录对数据执行的全部操作序列。该存储作为系统的记录源，可用于物化域对象。",
            "【与 CRUD 对比】Azure 文档对比：CRUD 模式存储当前状态、直接更新、需要锁定机制、需额外机制实现审计；Event Sourcing 存储完整事件历史、追加事件、无冲突写入、内置审计追踪支持。",
            "【Martin Fowler 定义】Martin Fowler 将 Event Sourcing 定义为：'捕获应用状态的所有变化作为一系列事件'。核心能力包括：完整重建——从事件日志重新运行事件恢复状态；时间查询——确定任意时间点的状态；事件回放——修正过去事件并重新计算后续影响。",
            "【Domain Event 定义】Kurrent（原 EventStore）文档：'A business event representing a change in the application, modeled in language familiar to business stakeholders rather than technical details'——领域事件是用业务语言而非技术细节描述的应用变更。",
            "【三步实现流程】官方文档描述：1) 将领域事件追加到事件存储；2) 通过投影函数重放事件；3) 构建针对特定用例优化的数据模型。事件存储是追加式数据库，记录每个事件的完整序列，保留永久的变更日志。"
        ],
        keyDifficulties: [
            "【最终一致性】Azure 文档警告：'Events published to processing has delay'——事件发布到处理之间存在延迟。系统需设计以支持最终一致性，不适合需要实时强一致性的场景。",
            "【事件版本管理】Azure 文档列出方案选择：支持多版本事件处理器、实现版本标记机制、事件模式升级时迁移历史数据。版本管理是 Event Sourcing 的重要挑战。",
            "【状态重建成本】Azure 文档指出大型事件流的处理方案：使用快照（在指定间隔保存状态快照），从快照恢复后只需回放后续事件，避免每次从头回放所有事件。",
            "【幂等性要求】Azure 文档强调：事件可能发布多次（至少一次语义），消费者必须是幂等的，防止重复应用更新。需要实现去重机制或设计幂等的事件处理器。",
            "【复杂度与锁定效应】Azure 文档警告：Event Sourcing'高度复杂的架构模式'，'迁移成本极高（入或出）'，所有后续决策都受其制约。一旦采用，系统架构将被深度绑定。"
        ],
        handsOnPath: [
            "实现简单的事件存储：创建一个追加式的事件列表，定义事件基类（包含事件 ID、时间戳、聚合 ID）。实现 AppendEvent 方法追加事件，GetEvents 方法按聚合 ID 检索事件。",
            "实现银行账户的 Event Sourcing：参考官方示例，定义 AccountOpened、MoneyDeposited、MoneyWithdrawn 事件。实现 Account 聚合根，通过回放事件计算当前余额，而不是直接存储余额字段。",
            "实现投影（Projection）：创建只读投影，订阅事件流并维护物化视图。例如为银行账户创建 AccountSummaryProjection，汇总账户数量、总余额等统计数据。",
            "添加快照机制：当事件数量超过阈值（如 100 个）时保存状态快照。恢复时先加载最近快照，再回放快照之后的事件。测试并比较有无快照的状态重建性能。",
            "与 CQRS 结合：将 Event Sourcing 作为写模型（事件存储是唯一的真实来源），物化视图作为读模型。写操作产生事件，事件处理器更新读模型。体验两个模式的天然结合。"
        ],
        selfCheck: [
            "Event Sourcing 与传统 CRUD 存储模式的核心区别是什么？为什么说事件存储是'系统的记录源'？",
            "Martin Fowler 描述的 Event Sourcing 三个核心能力（完整重建、时间查询、事件回放）分别指什么？",
            "为什么 Event Sourcing 系统需要实现快照机制？快照如何工作？",
            "事件消费者为什么必须是幂等的？如何确保幂等性？",
            "Azure 文档警告 Event Sourcing 的'锁定效应'是什么意思？为什么说迁移成本极高？"
        ],
        extensions: [
            "研究 EventStoreDB（Kurrent）：专门为 Event Sourcing 设计的数据库，提供事件流、投影、订阅等原生支持，是 Greg Young 团队的产品。",
            "学习 Marten 库：.NET 生态中基于 PostgreSQL 的 Event Sourcing 和文档数据库库，提供了实用的 Event Sourcing 实现。",
            "探索事件溯源与审计追踪：了解 Event Sourcing 如何满足金融、医疗等行业的合规审计要求，为何被称为'built-in audit trail'。",
            "研究 Temporal 模式：了解如何基于 Event Sourcing 实现双时态数据模型（bitemporal），同时记录业务时间和系统时间。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing",
            "https://martinfowler.com/eaaDev/EventSourcing.html",
            "https://www.eventstore.com/event-sourcing"
        ]
    },
    "w6-3": {
        lessonId: "w6-3",
        background: [
            "【核心概念】Azure 官方文档：Saga 是'a sequence of local transactions'——一系列本地事务的序列。每个本地事务更新数据库并发布消息或事件触发下一个本地事务。如果某个步骤失败，执行补偿事务撤销已完成的步骤。",
            "【解决的问题】microservices.io 文档指出：当每个服务维护自己的数据库时，协调多服务操作需要替代传统分布式事务（2PC）的方案。Saga 通过最终一致性和补偿事务实现跨服务的数据一致性。",
            "【三类事务类型】Azure 文档区分：可补偿事务（Compensable）——可通过相反操作撤销；枢纽事务（Pivot）——不可逆或不可补偿的操作，成功后的分界点；可重试事务（Retryable）——在枢纽事务之后，幂等性设计处理临时故障。",
            "【两种协调方式】Azure 文档详述：协同式（Choreography）——无中央控制器，服务间通过事件交互，分布式责任；编排式（Orchestration）——中央协调器控制流程，统一管理故障恢复，职责清晰。",
            "【与 2PC 对比】microservices.io 文档指出：Saga 通过最终一致性和补偿事务实现，避免了 2PC 的长锁和协调开销，性能和可用性更好。但代价是'开发者必须设计补偿事务来显式撤销早期变更'。"
        ],
        keyDifficulties: [
            "【补偿事务设计】Azure 文档强调：补偿事务是'语义上的撤销'，是新的前向操作（如退款），不同于数据库回滚的物理撤销。设计有效的补偿逻辑需要深入理解业务语义。",
            "【协同式 vs 编排式选择】Azure 文档对比：协同式适合简单工作流、无单点故障、无需额外服务协调；缺点是工作流复杂难追踪、循环依赖风险、集成测试困难。编排式适合复杂工作流、避免循环依赖、职责清晰；缺点是设计复杂度高、协调器成为单点故障。",
            "【数据异常问题】Azure 文档列出异常类型：丢失更新——一个 Saga 修改数据时未考虑其他 Saga 的修改；脏读——读取未完成的修改数据；模糊读——读取间隔内数据不一致。Saga 缺乏事务隔离性。",
            "【消息发布可靠性】microservices.io 指出：服务必须原子性地更新数据库并发布事件——这是非平凡的技术挑战。需要实现 Outbox Pattern 或使用事务性消息队列。",
            "【应对策略】Azure 文档列出：语义锁——使用信号量标记更新进行中；可交换更新——设计更新操作顺序无关；悲观视图——将数据更新移到可重试事务；重读值——更新前确认数据未变；版本文件——维护操作日志保证顺序。"
        ],
        handsOnPath: [
            "设计订单 Saga 流程：定义一个电商订单创建的 Saga，包含：创建订单 → 预留库存 → 扣款 → 确认订单。为每个步骤设计对应的补偿操作：取消订单 → 释放库存 → 退款。",
            "实现协同式 Saga：使用事件驱动方式实现订单 Saga。每个服务完成操作后发布事件（如 OrderCreated、InventoryReserved），其他服务订阅相关事件触发后续操作或补偿。",
            "实现编排式 Saga：创建 OrderSagaOrchestrator 类，维护 Saga 状态机。协调器按顺序调用各服务，处理成功/失败响应，失败时按逆序执行补偿事务。",
            "实现幂等的事件处理器：为每个事件处理器添加幂等性检查，使用事件 ID 记录已处理的事件，防止重复处理导致的数据不一致。",
            "探索 Temporal Workflows：使用 Temporal 框架实现 Saga，利用其内置的工作流状态管理、重试机制、补偿逻辑支持，简化 Saga 实现复杂度。"
        ],
        selfCheck: [
            "Saga 模式的核心思想是什么？它与传统分布式事务（2PC）有什么区别？",
            "可补偿事务、枢纽事务、可重试事务分别是什么？在 Saga 设计中各有什么作用？",
            "协同式和编排式 Saga 各有什么优缺点？什么场景下应该选择哪种方式？",
            "Saga 模式存在哪些数据异常问题（丢失更新、脏读、模糊读）？如何应对？",
            "为什么说'补偿事务是语义上的撤销，是新的前向操作'？举一个具体的业务例子说明。"
        ],
        extensions: [
            "研究 Temporal 工作流引擎：了解如何使用 Temporal 的 Workflow 和 Activity 抽象实现可靠的 Saga，包括超时处理、重试策略、补偿逻辑。",
            "学习 Outbox Pattern：了解如何解决'原子性更新数据库并发布事件'的技术挑战，这是可靠 Saga 实现的基础。",
            "探索 NServiceBus Sagas：.NET 生态中成熟的 Saga 实现，提供了状态持久化、超时管理、并发控制等开箱即用的功能。",
            "研究 Process Manager 模式：了解 Saga 与 Process Manager 的关系和区别，何时使用更复杂的 Process Manager 协调长时间运行的业务流程。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga",
            "https://microservices.io/patterns/data/saga.html",
            "https://docs.temporal.io/workflows"
        ]
    },
    "w6-4": {
        lessonId: "w6-4",
        background: [
            "【核心概念】Azure 官方文档：Pipes and Filters 是'将复杂处理任务分解为一系列独立、可重用的组件'的架构模式。Filters 是独立的、自包含的、通常无状态的组件，执行单一任务；Pipes 是连接过滤器的通道，仅传递消息，不执行路由或其他逻辑。",
            "【EIP 定义】Enterprise Integration Patterns 文档：'使用 Pipes and Filters 架构风格将较大的处理任务划分为一系列较小的、独立的处理步骤（Filters），这些步骤由通道（Pipes）连接'。每个过滤器拥有简单接口，在入站管道接收消息、处理后发布到出站管道。",
            "【组件结构】Azure 文档详述：过滤器拥有输入端口和输出端口，接收数据、处理数据、输出结果。管道连接过滤器，仅负责数据传递。所有组件使用统一的外部接口，可组合成不同的解决方案。",
            "【核心优势】Azure 文档列出：高度模块化——每个过滤器独立运行；可重用性——过滤器可在多个管道中使用；独立扩展——可分别部署和扩展各个过滤器；灵活重排——过滤器可按需重新排列；并行处理——可运行多个过滤器实例。",
            "【实现技术】Azure 文档示例使用：Azure Queue Storage 作为管道、Azure Functions 作为过滤器、Azure Blob Storage 存储数据、Claim-Check 模式传递数据指针而非整个对象。"
        ],
        keyDifficulties: [
            "【幂等性要求】Azure 文档强调：必须设计幂等过滤器以处理重复执行，避免数据重复处理。每个过滤器应能安全地多次处理同一消息。",
            "【整体性风险】Azure 文档警告：任何环节失败可能影响整个管道。需要实现错误处理策略，每个过滤器应明确定义是否使管道失败或传播异常。",
            "【消息容限】Azure 文档建议：过滤器应容忍不相关的消息数据，仅处理相关部分。这使得过滤器更加灵活和可复用。",
            "【重复消息处理】Azure 文档指出：需要检测和消除重复消息。使用消息队列的重复检测功能（如 Azure Service Bus 的 duplicate detection）或在过滤器中实现去重逻辑。",
            "【不适用场景】Azure 文档明确：不适用于请求-响应模式应用（需要同步返回结果）、必须作为单个事务完成的操作、步骤不独立或需要原子性操作的场景。"
        ],
        handsOnPath: [
            "设计图像处理流水线：参考 Azure 官方示例，设计包含以下过滤器的管道：内容审核 → 调整大小 → 水印处理 → 重新定向 → Exif 元数据移除 → CDN 发布。定义每个过滤器的输入和输出。",
            "使用消息队列实现管道：使用 RabbitMQ 或 Azure Queue Storage 作为 Pipe，创建多个队列连接各过滤器。每个过滤器从输入队列消费消息，处理后发布到输出队列。",
            "实现 Claim-Check 模式：对于大数据（如图像文件），不直接在消息中传递，而是存储到 Blob Storage 并传递引用（文件路径）。过滤器根据引用获取实际数据，处理后更新存储。",
            "添加幂等性检查：为每个过滤器实现幂等性——使用消息 ID 或内容哈希检查是否已处理过。参考 Azure 示例代码中的幂等性检查逻辑。",
            "实现并行处理：使用 Competing Consumers 模式运行多个过滤器实例并行处理消息。观察吞吐量提升，确保消息处理的正确性（不重复、不丢失）。"
        ],
        selfCheck: [
            "Pipes and Filters 模式的核心思想是什么？Pipe 和 Filter 分别承担什么职责？",
            "该模式的五个核心优势是什么？为什么说它支持独立扩展？",
            "为什么必须设计幂等的过滤器？如何实现过滤器的幂等性？",
            "什么是 Claim-Check 模式？为什么在 Pipes and Filters 中经常与它结合使用？",
            "根据官方文档，Pipes and Filters 模式不适用于哪些场景？为什么？"
        ],
        extensions: [
            "研究 Apache Kafka Streams：了解流处理框架如何实现 Pipes and Filters，使用 Topology API 定义处理流程，支持有状态处理和窗口操作。",
            "学习 Apache Camel EIP：企业集成模式的 Java 实现框架，提供丰富的 EIP 组件，可快速构建复杂的集成流程。",
            "探索 AWS Step Functions：了解如何使用状态机编排 Lambda 函数实现复杂的数据处理流水线，支持并行、分支、错误处理。",
            "研究 Unix Pipeline 哲学：了解 Pipes and Filters 模式在 Unix/Linux 命令行中的经典应用，理解'做一件事并做好'的设计哲学。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters",
            "https://www.enterpriseintegrationpatterns.com/patterns/messaging/PipesAndFilters.html",
            "https://kafka.apache.org/documentation/streams/"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "w6-1": [
        {
            id: "w6-1-q1",
            question: "Azure 官方文档对 CQRS 模式的核心定义是什么？",
            options: [
                "将数据存储到多个数据库",
                "separates read and write operations into distinct data models——将读取和写入操作分离为不同的数据模型",
                "使用缓存加速读取操作",
                "将大型系统拆分为微服务"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：CQRS 是'separates read and write operations into distinct data models'——将读取和写入操作分离为不同的数据模型，各自优化。"
        },
        {
            id: "w6-1-q2",
            question: "Azure 文档对 Command 的设计建议是什么？",
            options: [
                "应该以数据为中心进行设计",
                "task-based, rather than data centric——基于任务而非数据中心",
                "应该直接映射数据库字段",
                "应该尽可能简单，只包含 ID"
            ],
            answer: 1,
            rationale: "Azure 文档建议：Commands 应该是'task-based, rather than data centric'——基于任务而非数据中心，例如使用 'Book hotel room' 而不是 'Set ReservationStatus to Reserved'。"
        },
        {
            id: "w6-1-q3",
            question: "Martin Fowler 对 CQRS 适用性的警告是什么？",
            options: [
                "CQRS 适用于所有系统",
                "CQRS 对大多数系统来说会增加风险复杂性",
                "CQRS 只适用于大型企业",
                "CQRS 不能与其他模式结合使用"
            ],
            answer: 1,
            rationale: "Martin Fowler 强调：'CQRS对大多数系统来说会增加风险复杂性'——仅适用于特定的有限范围（DDD 中的限界上下文），而非整个系统。"
        },
        {
            id: "w6-1-q4",
            question: "Azure 文档描述的两种 CQRS 实现方式是什么？",
            options: [
                "同步模式和异步模式",
                "基础 CQRS（共享数据库）和高级 CQRS（独立数据存储）",
                "SQL 模式和 NoSQL 模式",
                "本地模式和分布式模式"
            ],
            answer: 1,
            rationale: "Azure 文档区分：基础 CQRS——读写模型共享单个数据库；高级 CQRS——读写模型使用独立的数据存储，写模型发布事件同步读模型。"
        },
        {
            id: "w6-1-q5",
            question: "根据 Azure 文档，CQRS 适用于哪种场景？",
            options: [
                "简单的 CRUD 操作",
                "协作环境中的并发数据访问和基于任务的复杂 UI 工作流",
                "单用户桌面应用程序",
                "静态网站内容管理"
            ],
            answer: 1,
            rationale: "Azure 文档列出适用场景：协作环境中的并发数据访问、基于任务的复杂 UI 工作流、高读写比系统、需要独立扩展读写性能的系统。"
        },
        {
            id: "w6-1-q6",
            question: "Azure 文档对分离数据存储时的一致性警告是什么？",
            options: [
                "数据始终保持强一致性",
                "Read data may lag behind writes——读取数据可能滞后于写入",
                "写入操作会被阻塞",
                "需要使用分布式锁"
            ],
            answer: 1,
            rationale: "Azure 文档警告：'Read data may lag behind writes'——分离数据存储时，读取数据可能滞后于写入。系统必须设计为容忍陈旧数据。"
        },
        {
            id: "w6-1-q7",
            question: "Martin Fowler 指出 CQRS 与 Event Sourcing 结合时会怎样？",
            options: [
                "简化系统设计",
                "straightforward core concept, but complex with Event Sourcing——核心概念简单但复杂度急剧上升",
                "不能一起使用",
                "没有任何影响"
            ],
            answer: 1,
            rationale: "Martin Fowler 警告：CQRS'straightforward core concept, but complex with Event Sourcing'——核心概念简单，但与 Event Sourcing 结合时复杂度急剧上升。"
        },
        {
            id: "w6-1-q8",
            question: "Azure 文档建议如何处理 Command 的服务端验证？",
            options: [
                "完全依赖客户端验证",
                "处理边缘情况和竞态条件（如超订时的等待列表）",
                "不需要验证",
                "只验证数据格式"
            ],
            answer: 1,
            rationale: "Azure 文档建议：服务端逻辑——处理边缘情况和竞态条件（如超订时的等待列表），因为客户端可能无法预见所有并发场景。"
        },
        {
            id: "w6-1-q9",
            question: "根据 Azure 文档，Query 应该返回什么类型的数据？",
            options: [
                "完整的领域模型",
                "DTOs（数据传输对象），不包含领域逻辑",
                "数据库原始记录",
                "XML 格式数据"
            ],
            answer: 1,
            rationale: "Azure 文档指出：Query 返回 DTOs（数据传输对象），不应包含领域逻辑。DTO 只包含展示所需的字段。"
        },
        {
            id: "w6-1-q10",
            question: "CQRS Journey 项目使用什么作为企业级参考实现？",
            options: [
                "在线购物系统",
                "Contoso 会议管理系统",
                "银行交易系统",
                "社交媒体平台"
            ],
            answer: 1,
            rationale: "CQRS Journey 是 Microsoft 发布的学习指南，使用 Contoso 会议管理系统作为真实企业级参考实现，展示 CQRS 和事件溯源的实践。"
        },
        {
            id: "w6-1-q11",
            question: "Azure 文档指出使用消息传递同步读写模型时需要处理什么问题？",
            options: [
                "只需要处理网络延迟",
                "Handle failures, duplicates, retries——处理消息失败、重复和重试",
                "不需要特殊处理",
                "只需要处理消息顺序"
            ],
            answer: 1,
            rationale: "Azure 文档指出：'Handle failures, duplicates, retries'——使用消息传递同步读写模型时，需要处理消息失败、重复和重试。消息处理器必须具备幂等性。"
        },
        {
            id: "w6-1-q12",
            question: "根据 Martin Fowler，CQRS 应该应用在什么范围？",
            options: [
                "整个系统的所有组件",
                "特定的有限范围（DDD 中的限界上下文），而非整个系统",
                "只适用于数据库层",
                "只适用于 UI 层"
            ],
            answer: 1,
            rationale: "Martin Fowler 指出：CQRS 仅适用于'特定的有限范围（DDD 中的限界上下文），而非整个系统'。许多信息系统不适合 CQRS。"
        }
    ],
    "w6-2": [
        {
            id: "w6-2-q1",
            question: "Azure 官方文档对 Event Sourcing 的核心定义是什么？",
            options: [
                "只存储数据的当前状态",
                "instead of storing just the current state, use an append-only store to record the full series of actions",
                "使用缓存存储事件",
                "定期备份数据库"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：Event Sourcing 是'instead of storing just the current state, use an append-only store to record the full series of actions taken on data'。"
        },
        {
            id: "w6-2-q2",
            question: "Azure 文档对比 Event Sourcing 与 CRUD 模式时，Event Sourcing 的并发处理方式是什么？",
            options: [
                "使用数据库锁定机制",
                "无冲突写入（追加式存储）",
                "使用乐观锁",
                "使用悲观锁"
            ],
            answer: 1,
            rationale: "Azure 文档对比：CRUD 模式需要锁定机制处理并发；Event Sourcing 使用追加式存储，无冲突写入，因为事件只是追加而不是更新。"
        },
        {
            id: "w6-2-q3",
            question: "Martin Fowler 描述的 Event Sourcing 三个核心能力是什么？",
            options: [
                "加密、压缩、分片",
                "完整重建、时间查询、事件回放",
                "备份、恢复、迁移",
                "索引、分区、复制"
            ],
            answer: 1,
            rationale: "Martin Fowler 列出：完整重建——从事件日志恢复状态；时间查询——确定任意时间点的状态；事件回放——修正过去事件并重新计算后续影响。"
        },
        {
            id: "w6-2-q4",
            question: "Kurrent（原 EventStore）文档对 Domain Event 的定义是什么？",
            options: [
                "技术日志记录",
                "A business event representing a change, modeled in language familiar to business stakeholders",
                "数据库触发器",
                "系统监控指标"
            ],
            answer: 1,
            rationale: "Kurrent 文档定义：'A business event representing a change in the application, modeled in language familiar to business stakeholders rather than technical details'。"
        },
        {
            id: "w6-2-q5",
            question: "Azure 文档指出处理大型事件流时应使用什么机制？",
            options: [
                "增加服务器内存",
                "使用快照（在指定间隔保存状态快照）",
                "删除旧事件",
                "压缩事件数据"
            ],
            answer: 1,
            rationale: "Azure 文档指出大型事件流的处理方案：使用快照（在指定间隔保存状态快照），从快照恢复后只需回放后续事件。"
        },
        {
            id: "w6-2-q6",
            question: "Azure 文档强调事件消费者必须具备什么特性？",
            options: [
                "高性能处理能力",
                "幂等性——防止重复应用更新",
                "异步处理能力",
                "分布式部署能力"
            ],
            answer: 1,
            rationale: "Azure 文档强调：事件可能发布多次（至少一次语义），消费者必须是幂等的，防止重复应用更新。"
        },
        {
            id: "w6-2-q7",
            question: "Azure 文档警告 Event Sourcing 的什么特性？",
            options: [
                "性能优异，适合所有场景",
                "高度复杂的架构模式，迁移成本极高（入或出）",
                "简单易学，快速上手",
                "没有任何缺点"
            ],
            answer: 1,
            rationale: "Azure 文档警告：Event Sourcing'高度复杂的架构模式'，'迁移成本极高（入或出）'，所有后续决策都受其制约。"
        },
        {
            id: "w6-2-q8",
            question: "Event Sourcing 的三步实现流程是什么？",
            options: [
                "创建数据库 → 设计表结构 → 编写查询",
                "将事件追加到事件存储 → 通过投影函数重放事件 → 构建优化的数据模型",
                "设计 API → 实现服务 → 部署系统",
                "分析需求 → 编写代码 → 测试上线"
            ],
            answer: 1,
            rationale: "官方文档描述：1) 将领域事件追加到事件存储；2) 通过投影函数重放事件；3) 构建针对特定用例优化的数据模型。"
        },
        {
            id: "w6-2-q9",
            question: "Azure 文档指出 Event Sourcing 的事件版本管理方案包括哪些？",
            options: [
                "只支持一种版本",
                "支持多版本事件处理器、实现版本标记机制、事件模式升级时迁移历史数据",
                "不需要版本管理",
                "自动处理所有版本"
            ],
            answer: 1,
            rationale: "Azure 文档列出方案选择：支持多版本事件处理器、实现版本标记机制、事件模式升级时迁移历史数据。版本管理是重要挑战。"
        },
        {
            id: "w6-2-q10",
            question: "Event Sourcing 与 CQRS 结合使用时，事件存储扮演什么角色？",
            options: [
                "作为缓存层",
                "作为写模型（唯一的真实来源）",
                "作为备份存储",
                "作为日志系统"
            ],
            answer: 1,
            rationale: "Azure 文档指出：将 Event Sourcing 作为写模型（事件存储是唯一的真实来源），物化视图作为读模型。两个模式天然结合。"
        },
        {
            id: "w6-2-q11",
            question: "Azure 文档指出 Event Sourcing 系统需要设计以支持什么？",
            options: [
                "强一致性",
                "最终一致性",
                "线性一致性",
                "因果一致性"
            ],
            answer: 1,
            rationale: "Azure 文档警告：'Events published to processing has delay'——事件发布到处理之间存在延迟。系统需设计以支持最终一致性。"
        },
        {
            id: "w6-2-q12",
            question: "Event Sourcing 相比 CRUD 模式的内置优势是什么？",
            options: [
                "更快的查询速度",
                "更少的存储空间",
                "内置审计追踪支持",
                "更简单的数据模型"
            ],
            answer: 2,
            rationale: "Azure 文档对比：CRUD 模式需要额外机制实现审计；Event Sourcing 存储完整事件历史，内置审计追踪支持，是其核心优势之一。"
        }
    ],
    "w6-3": [
        {
            id: "w6-3-q1",
            question: "Azure 官方文档对 Saga 模式的核心定义是什么？",
            options: [
                "使用分布式事务保证一致性",
                "a sequence of local transactions——一系列本地事务的序列",
                "使用两阶段提交协议",
                "单一数据库事务"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：Saga 是'a sequence of local transactions'——一系列本地事务的序列，通过补偿事务处理失败场景。"
        },
        {
            id: "w6-3-q2",
            question: "Azure 文档描述的三类 Saga 事务类型是什么？",
            options: [
                "读事务、写事务、删除事务",
                "可补偿事务、枢纽事务、可重试事务",
                "同步事务、异步事务、混合事务",
                "本地事务、远程事务、分布式事务"
            ],
            answer: 1,
            rationale: "Azure 文档区分：可补偿事务（Compensable）——可通过相反操作撤销；枢纽事务（Pivot）——不可逆的分界点；可重试事务（Retryable）——幂等性设计处理临时故障。"
        },
        {
            id: "w6-3-q3",
            question: "协同式（Choreography）Saga 的特点是什么？",
            options: [
                "使用中央协调器控制流程",
                "无中央控制器，服务间通过事件交互，分布式责任",
                "所有服务同步执行",
                "不支持补偿事务"
            ],
            answer: 1,
            rationale: "Azure 文档详述协同式特点：无中央控制器、服务间通过事件交互、分布式责任，适合简单工作流但工作流复杂时难以追踪。"
        },
        {
            id: "w6-3-q4",
            question: "microservices.io 指出 Saga 相比 2PC 的优势是什么？",
            options: [
                "保证强一致性",
                "避免了 2PC 的长锁和协调开销，性能和可用性更好",
                "实现更简单",
                "不需要补偿事务"
            ],
            answer: 1,
            rationale: "microservices.io 文档指出：Saga 通过最终一致性和补偿事务实现，避免了 2PC 的长锁和协调开销，性能和可用性更好。"
        },
        {
            id: "w6-3-q5",
            question: "Azure 文档描述的 Saga 数据异常问题包括哪些？",
            options: [
                "网络延迟、超时、断连",
                "丢失更新、脏读、模糊读",
                "死锁、活锁、饥饿",
                "数据损坏、数据丢失、数据泄露"
            ],
            answer: 1,
            rationale: "Azure 文档列出异常类型：丢失更新——一个 Saga 修改数据时未考虑其他 Saga 的修改；脏读——读取未完成的修改数据；模糊读——读取间隔内数据不一致。"
        },
        {
            id: "w6-3-q6",
            question: "补偿事务与数据库回滚的主要区别是什么？",
            options: [
                "没有区别，只是叫法不同",
                "补偿事务是语义上的撤销，是新的前向操作（如退款），不同于物理撤销",
                "补偿事务更快",
                "数据库回滚更可靠"
            ],
            answer: 1,
            rationale: "Azure 文档强调：补偿事务是'语义上的撤销'，是新的前向操作（如退款），不同于数据库回滚的物理撤销。需要深入理解业务语义。"
        },
        {
            id: "w6-3-q7",
            question: "编排式（Orchestration）Saga 的主要优点是什么？",
            options: [
                "无单点故障",
                "适合复杂工作流、避免循环依赖、职责清晰",
                "不需要额外的协调服务",
                "自动处理所有错误"
            ],
            answer: 1,
            rationale: "Azure 文档对比编排式优点：适合复杂工作流、避免循环依赖、职责清晰。缺点是设计复杂度高、协调器成为单点故障。"
        },
        {
            id: "w6-3-q8",
            question: "microservices.io 指出 Saga 实现的技术挑战是什么？",
            options: [
                "数据库性能问题",
                "服务必须原子性地更新数据库并发布事件",
                "网络带宽限制",
                "存储空间不足"
            ],
            answer: 1,
            rationale: "microservices.io 指出：服务必须原子性地更新数据库并发布事件——这是非平凡的技术挑战。需要实现 Outbox Pattern 或使用事务性消息队列。"
        },
        {
            id: "w6-3-q9",
            question: "Azure 文档列出的 Saga 数据异常应对策略不包括哪个？",
            options: [
                "语义锁——使用信号量标记更新进行中",
                "可交换更新——设计更新操作顺序无关",
                "分布式事务——使用 2PC 保证一致性",
                "重读值——更新前确认数据未变"
            ],
            answer: 2,
            rationale: "Azure 文档列出应对策略：语义锁、可交换更新、悲观视图、重读值、版本文件等。分布式事务（2PC）恰恰是 Saga 要替代的方案。"
        },
        {
            id: "w6-3-q10",
            question: "协同式 Saga 的主要缺点是什么？",
            options: [
                "性能太差",
                "工作流复杂难追踪、循环依赖风险、集成测试困难",
                "不支持分布式部署",
                "无法处理失败"
            ],
            answer: 1,
            rationale: "Azure 文档列出协同式缺点：工作流复杂难追踪、循环依赖风险、集成测试困难。服务间的事件依赖难以全局把控。"
        },
        {
            id: "w6-3-q11",
            question: "枢纽事务（Pivot Transaction）的特点是什么？",
            options: [
                "可以多次执行",
                "不可逆或不可补偿的操作，成功后的分界点",
                "只处理读取操作",
                "自动重试直到成功"
            ],
            answer: 1,
            rationale: "Azure 文档定义枢纽事务：不可逆或不可补偿的操作，是成功后的分界点，之后的操作必须完成。"
        },
        {
            id: "w6-3-q12",
            question: "Azure 文档指出 Saga 不适用于什么场景？",
            options: [
                "需要跨服务数据一致性的场景",
                "事务高度耦合、循环依赖存在、补偿事务发生在早期参与者的场景",
                "微服务架构",
                "异步处理场景"
            ],
            answer: 1,
            rationale: "Azure 文档明确不适用：事务高度耦合、循环依赖存在、补偿事务发生在早期参与者的场景。这些场景下 Saga 难以设计和实现。"
        }
    ],
    "w6-4": [
        {
            id: "w6-4-q1",
            question: "Azure 官方文档对 Pipes and Filters 模式的核心定义是什么？",
            options: [
                "使用管道传输数据到数据库",
                "将复杂处理任务分解为一系列独立、可重用的组件",
                "过滤掉无效的数据",
                "优化数据库查询性能"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：Pipes and Filters 是'将复杂处理任务分解为一系列独立、可重用的组件'的架构模式。"
        },
        {
            id: "w6-4-q2",
            question: "在 Pipes and Filters 模式中，Pipe 的职责是什么？",
            options: [
                "执行业务逻辑",
                "连接过滤器，仅传递消息，不执行路由或其他逻辑",
                "存储处理结果",
                "验证数据格式"
            ],
            answer: 1,
            rationale: "Azure 文档详述：Pipes 是连接过滤器的通道，仅传递消息，不执行路由或其他逻辑。所有处理由 Filters 完成。"
        },
        {
            id: "w6-4-q3",
            question: "Azure 文档列出的 Pipes and Filters 五个核心优势是什么？",
            options: [
                "高性能、低延迟、高可用、安全、可靠",
                "高度模块化、可重用性、独立扩展、灵活重排、并行处理",
                "简单、快速、便宜、稳定、兼容",
                "标准化、自动化、智能化、可视化、集成化"
            ],
            answer: 1,
            rationale: "Azure 文档列出：高度模块化——每个过滤器独立运行；可重用性——过滤器可在多个管道中使用；独立扩展；灵活重排；并行处理。"
        },
        {
            id: "w6-4-q4",
            question: "Azure 文档强调过滤器必须具备什么特性？",
            options: [
                "高性能处理能力",
                "幂等性——设计幂等过滤器以处理重复执行",
                "分布式部署能力",
                "自动扩展能力"
            ],
            answer: 1,
            rationale: "Azure 文档强调：必须设计幂等过滤器以处理重复执行，避免数据重复处理。每个过滤器应能安全地多次处理同一消息。"
        },
        {
            id: "w6-4-q5",
            question: "EIP（Enterprise Integration Patterns）文档对 Pipes and Filters 的描述是什么？",
            options: [
                "使用数据库存储中间结果",
                "使用 Pipes and Filters 将较大的处理任务划分为一系列较小的独立处理步骤",
                "使用 API 网关路由请求",
                "使用消息队列存储数据"
            ],
            answer: 1,
            rationale: "EIP 文档定义：'使用 Pipes and Filters 架构风格将较大的处理任务划分为一系列较小的、独立的处理步骤（Filters），这些步骤由通道（Pipes）连接'。"
        },
        {
            id: "w6-4-q6",
            question: "Azure 文档警告 Pipes and Filters 的什么风险？",
            options: [
                "性能太差",
                "任何环节失败可能影响整个管道",
                "无法处理大数据",
                "不支持并行处理"
            ],
            answer: 1,
            rationale: "Azure 文档警告：任何环节失败可能影响整个管道。需要实现错误处理策略，每个过滤器应明确定义是否使管道失败或传播异常。"
        },
        {
            id: "w6-4-q7",
            question: "Azure 文档建议过滤器应该如何处理消息数据？",
            options: [
                "必须处理所有字段",
                "应容忍不相关的消息数据，仅处理相关部分",
                "拒绝不完整的消息",
                "修改所有字段"
            ],
            answer: 1,
            rationale: "Azure 文档建议：过滤器应容忍不相关的消息数据，仅处理相关部分。这使得过滤器更加灵活和可复用。"
        },
        {
            id: "w6-4-q8",
            question: "Azure 官方示例中使用什么技术实现 Pipes and Filters？",
            options: [
                "直接的 HTTP 调用",
                "Azure Queue Storage（管道）、Azure Functions（过滤器）、Azure Blob Storage（存储）",
                "数据库触发器",
                "文件系统监控"
            ],
            answer: 1,
            rationale: "Azure 文档示例使用：Azure Queue Storage 作为管道、Azure Functions 作为过滤器、Azure Blob Storage 存储数据、Claim-Check 模式传递数据指针。"
        },
        {
            id: "w6-4-q9",
            question: "Pipes and Filters 模式不适用于哪种场景？",
            options: [
                "图像处理流水线",
                "请求-响应模式应用（需要同步返回结果）",
                "数据转换流程",
                "日志处理系统"
            ],
            answer: 1,
            rationale: "Azure 文档明确：不适用于请求-响应模式应用（需要同步返回结果）、必须作为单个事务完成的操作、步骤不独立的场景。"
        },
        {
            id: "w6-4-q10",
            question: "什么是 Claim-Check 模式？为什么在 Pipes and Filters 中使用？",
            options: [
                "一种安全验证机制",
                "传递数据指针而非整个对象，避免在消息中传递大数据",
                "一种负载均衡策略",
                "一种数据压缩算法"
            ],
            answer: 1,
            rationale: "Azure 文档提到 Claim-Check 模式：对于大数据（如图像文件），不直接在消息中传递，而是存储到 Blob Storage 并传递引用（文件路径）。"
        },
        {
            id: "w6-4-q11",
            question: "Azure 文档建议如何处理重复消息？",
            options: [
                "忽略重复消息",
                "使用消息队列的重复检测功能或在过滤器中实现去重逻辑",
                "重新发送消息",
                "记录日志但不处理"
            ],
            answer: 1,
            rationale: "Azure 文档指出：需要检测和消除重复消息。使用消息队列的重复检测功能（如 Azure Service Bus 的 duplicate detection）或在过滤器中实现去重逻辑。"
        },
        {
            id: "w6-4-q12",
            question: "Azure 文档示例中图像处理管道的过滤器顺序是什么？",
            options: [
                "调整大小 → 内容审核 → 水印处理",
                "内容审核 → 调整大小 → 水印处理 → 重新定向 → Exif 元数据移除 → CDN 发布",
                "水印处理 → 调整大小 → 内容审核",
                "CDN 发布 → Exif 元数据移除 → 内容审核"
            ],
            answer: 1,
            rationale: "Azure 文档示例图像处理管道：内容审核 → 调整大小 → 水印处理 → 重新定向 → Exif 元数据移除 → CDN 发布。顺序反映了处理逻辑。"
        }
    ]
}
