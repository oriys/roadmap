import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week12Guides: Record<string, LessonGuide> = {
    "w12-1": {
        lessonId: "w12-1",
        background: [
            "【Kafka 多租户】Confluent 平台支持多租户：通过 Topic 命名规范、ACL 控制、配额管理实现租户隔离。",
            "【RabbitMQ Virtual Host】Virtual Host 提供逻辑隔离，每个租户可以有独立的 vhost、权限和资源限制。",
            "【SQS 多租户】AWS SQS 可以为每个租户创建独立队列，或通过消息属性在共享队列中区分租户。",
            "【隔离策略】独立 Topic/Queue 提供强隔离，共享 Topic 分区或消息属性提供弱隔离但成本更低。",
        ],
        keyDifficulties: [
            "【Topic 管理】大量租户的 Topic 管理复杂度高。",
            "【配额控制】Kafka 配额需要在 Broker 级别配置，管理困难。",
            "【消息路由】共享 Topic 时需要正确路由消息到目标租户消费者。",
            "【性能隔离】共享资源时避免单租户影响其他租户的消息处理。",
        ],
        handsOnPath: [
            "设计 Kafka Topic 多租户命名规范",
            "配置 RabbitMQ Virtual Host 隔离",
            "实现 SQS 消息属性租户标识",
            "配置消息队列配额和限流",
        ],
        selfCheck: [
            "Kafka 如何实现租户消息隔离？",
            "RabbitMQ Virtual Host 提供什么级别的隔离？",
            "共享 Topic 和独立 Topic 各有什么优劣？",
        ],
        extensions: [
            "研究 Azure Service Bus 的多租户模式",
            "了解 Google Pub/Sub 的订阅隔离",
        ],
        sourceUrls: [
            "https://docs.confluent.io/platform/current/multi-tenancy/overview.html",
            "https://www.rabbitmq.com/docs/vhosts",
            "https://aws.amazon.com/blogs/compute/building-multi-tenant-saas-with-amazon-sqs/",
        ],
    },
    "w12-2": {
        lessonId: "w12-2",
        background: [
            "【CloudEvents】CNCF 的事件规范，定义事件的标准结构，包括 source、type、subject 等元数据。",
            "【事件溯源多租户】Axon Framework 支持多租户事件溯源，每个租户有独立的事件流。",
            "【事件版本】事件结构变更时需要版本控制，确保新旧消费者都能处理。",
            "【租户归属】事件必须包含租户标识，确保事件路由和处理的正确性。",
        ],
        keyDifficulties: [
            "【Schema 演进】事件 Schema 变更时保持向后兼容。",
            "【事件重放】多租户事件重放需要正确过滤租户。",
            "【幂等处理】确保重复事件不会导致错误状态。",
            "【跨租户事件】某些系统事件可能影响多个租户，需要特殊处理。",
        ],
        handsOnPath: [
            "设计 CloudEvents 格式的多租户事件",
            "实现事件版本升级策略",
            "配置 Axon 多租户事件存储",
            "实现幂等事件处理器",
        ],
        selfCheck: [
            "CloudEvents 规范包含哪些核心属性？",
            "事件版本兼容性如何保证？",
            "多租户事件溯源的挑战是什么？",
        ],
        extensions: [
            "研究 EventStoreDB 的多租户支持",
            "了解 Schema Registry 的版本管理",
        ],
        sourceUrls: [
            "https://cloudevents.io/",
            "https://docs.axoniq.io/reference-guide/axon-framework/platform-integration/multi-tenancy",
            "https://www.eventstore.com/blog/versioning-events",
        ],
    },
    "w12-3": {
        lessonId: "w12-3",
        background: [
            "【GitHub Webhook】GitHub Webhook 设计包含事件类型、签名验证、重试机制等最佳实践。",
            "【Stripe 签名】Stripe 使用 HMAC-SHA256 签名验证 Webhook 真实性，防止伪造。",
            "【Svix 重试策略】Svix 提供指数退避重试、死信队列、手动重发等可靠性保障。",
            "【订阅管理】租户可以配置订阅哪些事件类型、接收地址、过滤条件。",
        ],
        keyDifficulties: [
            "【可靠投递】确保 Webhook 至少投递一次，处理网络故障和超时。",
            "【顺序保证】事件顺序可能因重试而打乱。",
            "【负载控制】租户端点故障可能导致积压。",
            "【安全验证】接收端必须验证签名防止伪造。",
        ],
        handsOnPath: [
            "实现 Webhook 订阅管理 API",
            "配置 HMAC 签名生成与验证",
            "设计指数退避重试策略",
            "实现死信队列与手动重发",
        ],
        selfCheck: [
            "Webhook 签名验证的流程是什么？",
            "指数退避重试的算法是什么？",
            "死信队列的作用是什么？",
        ],
        extensions: [
            "研究 Segment 的 Webhook 架构",
            "了解 AWS EventBridge 的事件路由",
        ],
        sourceUrls: [
            "https://docs.github.com/en/developers/webhooks-and-events/webhooks",
            "https://stripe.com/docs/webhooks/signatures",
            "https://docs.svix.com/receiving/verifying-payloads/how",
        ],
    },
    "w12-4": {
        lessonId: "w12-4",
        background: [
            "【EventBridge SaaS】AWS EventBridge 支持 SaaS 事件集成，提供事件路由、过滤、转换能力。",
            "【Saga 模式】分布式事务模式，通过事件驱动的补偿机制保证最终一致性。",
            "【SNS FIFO】AWS SNS FIFO 提供严格顺序和去重，适合需要顺序保证的多租户事件。",
            "【事件总线】集中式事件路由，解耦事件生产者和消费者，支持多租户事件分发。",
        ],
        keyDifficulties: [
            "【事件顺序】分布式环境下保证事件顺序困难。",
            "【Saga 补偿】补偿逻辑设计复杂，需要处理各种失败场景。",
            "【事件去重】确保消费者不重复处理同一事件。",
            "【跨租户协调】涉及多租户的业务流程协调复杂。",
        ],
        handsOnPath: [
            "配置 EventBridge 多租户事件规则",
            "实现 Saga 编排模式",
            "使用 SNS FIFO 保证事件顺序",
            "设计事件去重机制",
        ],
        selfCheck: [
            "EventBridge 规则如何过滤租户事件？",
            "Saga 模式的核心思想是什么？",
            "如何实现事件消费的幂等性？",
        ],
        extensions: [
            "研究 Temporal 的工作流编排",
            "了解 Apache Kafka Streams 的事件处理",
        ],
        sourceUrls: [
            "https://aws.amazon.com/blogs/compute/building-event-driven-architectures-with-amazon-sns-fifo/",
            "https://microservices.io/patterns/data/saga.html",
            "https://aws.amazon.com/blogs/compute/building-saas-applications-with-amazon-eventbridge/",
        ],
    },
}

export const week12Quizzes: Record<string, QuizQuestion[]> = {
    "w12-1": [
        { id: "w12-1-q1", question: "Kafka 多租户隔离的方式有哪些？", options: ["只有 ACL", "Topic 命名规范、ACL 控制、配额管理", "只有配额", "只有加密"], answer: 1, rationale: "Kafka 通过多种机制实现多租户隔离。" },
        { id: "w12-1-q2", question: "RabbitMQ Virtual Host 的作用是什么？", options: ["物理隔离", "提供逻辑隔离，每个租户独立的 vhost", "负载均衡", "消息加密"], answer: 1, rationale: "Virtual Host 在逻辑上隔离不同租户的资源。" },
        { id: "w12-1-q3", question: "SQS 多租户实现方式有哪些？", options: ["只有独立队列", "独立队列或共享队列配合消息属性", "只有共享队列", "不支持多租户"], answer: 1, rationale: "SQS 支持多种多租户实现方式。" },
        { id: "w12-1-q4", question: "独立 Topic 的优势是什么？", options: ["成本最低", "隔离性强，租户间互不影响", "管理最简单", "性能最好"], answer: 1, rationale: "独立 Topic 提供最强的隔离性。" },
        { id: "w12-1-q5", question: "共享 Topic 的优势是什么？", options: ["隔离最强", "资源成本低，管理简单", "安全性最高", "性能最好"], answer: 1, rationale: "共享 Topic 减少资源开销和管理复杂度。" },
        { id: "w12-1-q6", question: "Kafka 配额管理的挑战是什么？", options: ["配置太简单", "需要在 Broker 级别配置，管理困难", "自动管理", "无挑战"], answer: 1, rationale: "Kafka 配额配置需要 Broker 级别操作。" },
        { id: "w12-1-q7", question: "RabbitMQ vhost 权限管理包括什么？", options: ["无权限", "用户对 vhost 的访问权限控制", "只有读权限", "只有写权限"], answer: 1, rationale: "可以控制用户对特定 vhost 的访问权限。" },
        { id: "w12-1-q8", question: "消息路由在共享 Topic 中如何实现？", options: ["随机路由", "根据消息属性或 Header 中的租户标识路由", "广播所有", "不路由"], answer: 1, rationale: "通过租户标识将消息路由到正确的消费者。" },
        { id: "w12-1-q9", question: "Topic 命名规范的例子是什么？", options: ["随机名称", "tenant-{id}-orders 或 orders-{tenant}", "数字编号", "自动生成"], answer: 1, rationale: "命名规范应包含租户标识便于管理和监控。" },
        { id: "w12-1-q10", question: "性能隔离的重要性是什么？", options: ["不重要", "避免单租户的高负载影响其他租户", "提高成本", "增加复杂度"], answer: 1, rationale: "共享资源时需要保护租户间不受互相影响。" },
        { id: "w12-1-q11", question: "Confluent 多租户平台的特性是什么？", options: ["不支持多租户", "提供 RBAC、配额、Topic 策略等多租户能力", "只支持单租户", "只有开源功能"], answer: 1, rationale: "Confluent Platform 提供企业级多租户支持。" },
        { id: "w12-1-q12", question: "大量租户 Topic 管理的解决方案是什么？", options: ["手动管理", "自动化 Topic 生命周期管理", "不管理", "限制租户数"], answer: 1, rationale: "需要自动化工具管理大量 Topic。" },
    ],
    "w12-2": [
        { id: "w12-2-q1", question: "CloudEvents 规范的核心属性有哪些？", options: ["只有 data", "source、type、subject、id 等元数据", "只有 id", "无规范"], answer: 1, rationale: "CloudEvents 定义了标准的事件元数据结构。" },
        { id: "w12-2-q2", question: "事件版本控制的目的是什么？", options: ["增加复杂度", "确保新旧消费者都能正确处理事件", "减少事件", "加密事件"], answer: 1, rationale: "版本控制支持 Schema 演进同时保持兼容。" },
        { id: "w12-2-q3", question: "Axon Framework 多租户支持什么？", options: ["只有单租户", "租户级别的聚合、事件存储和查询", "只有查询", "不支持"], answer: 1, rationale: "Axon 提供完整的多租户事件溯源支持。" },
        { id: "w12-2-q4", question: "事件 Schema 演进的原则是什么？", options: ["可以删除字段", "保持向后兼容，添加可选字段", "随意修改", "不能修改"], answer: 1, rationale: "Schema 演进需要保持向后兼容。" },
        { id: "w12-2-q5", question: "多租户事件重放的注意事项是什么？", options: ["重放所有", "正确过滤目标租户的事件", "不支持重放", "自动过滤"], answer: 1, rationale: "重放时需要按租户过滤事件。" },
        { id: "w12-2-q6", question: "幂等事件处理的作用是什么？", options: ["增加处理", "确保重复事件不会导致错误状态", "减少事件", "加速处理"], answer: 1, rationale: "幂等性确保重复消费不会产生副作用。" },
        { id: "w12-2-q7", question: "CloudEvents source 属性的含义是什么？", options: ["事件数据", "事件的来源标识", "事件类型", "事件时间"], answer: 1, rationale: "source 标识事件产生的来源系统或服务。" },
        { id: "w12-2-q8", question: "事件存储多租户隔离方式有哪些？", options: ["只有物理隔离", "独立数据库、独立 Schema、或租户 ID 过滤", "只有逻辑隔离", "不隔离"], answer: 1, rationale: "可以选择不同级别的存储隔离。" },
        { id: "w12-2-q9", question: "跨租户事件如何处理？", options: ["直接忽略", "需要特殊的授权和路由逻辑", "自动处理", "禁止跨租户"], answer: 1, rationale: "跨租户事件需要特殊处理逻辑。" },
        { id: "w12-2-q10", question: "事件时间 vs 处理时间的区别是什么？", options: ["相同", "事件时间是事件发生时间，处理时间是消费时间", "没有区别", "只用处理时间"], answer: 1, rationale: "区分事件发生时间和系统处理时间很重要。" },
        { id: "w12-2-q11", question: "EventStore 事件版本的作用是什么？", options: ["排序", "支持乐观并发控制和事件版本演进", "加密", "压缩"], answer: 1, rationale: "版本号用于并发控制和兼容性管理。" },
        { id: "w12-2-q12", question: "租户标识在事件中如何传递？", options: ["不传递", "作为事件元数据或扩展属性", "只在 Header", "只在 Body"], answer: 1, rationale: "租户标识应该是事件的标准元数据。" },
    ],
    "w12-3": [
        { id: "w12-3-q1", question: "Webhook 签名验证的作用是什么？", options: ["加密数据", "验证请求来源的真实性，防止伪造", "压缩数据", "路由请求"], answer: 1, rationale: "签名验证确保 Webhook 来自可信来源。" },
        { id: "w12-3-q2", question: "Stripe 使用什么签名算法？", options: ["MD5", "HMAC-SHA256", "SHA1", "RSA"], answer: 1, rationale: "Stripe 使用 HMAC-SHA256 签名 Webhook。" },
        { id: "w12-3-q3", question: "指数退避重试的特点是什么？", options: ["固定间隔", "每次重试间隔成倍增加", "随机间隔", "无间隔"], answer: 1, rationale: "指数退避避免重试风暴，给系统恢复时间。" },
        { id: "w12-3-q4", question: "死信队列的作用是什么？", options: ["正常队列", "存储多次重试失败的消息", "加速处理", "过滤消息"], answer: 1, rationale: "死信队列保存无法投递的消息以便后续处理。" },
        { id: "w12-3-q5", question: "Webhook 订阅管理应该支持什么？", options: ["只有订阅", "事件类型选择、地址配置、过滤条件", "只有取消", "无管理"], answer: 1, rationale: "租户应能灵活配置 Webhook 订阅。" },
        { id: "w12-3-q6", question: "GitHub Webhook 事件类型的例子是什么？", options: ["只有 push", "push、pull_request、issues 等多种", "只有 issues", "无类型"], answer: 1, rationale: "GitHub 支持多种事件类型的 Webhook。" },
        { id: "w12-3-q7", question: "Webhook 超时处理的最佳实践是什么？", options: ["无限等待", "设置合理超时，超时后重试", "立即放弃", "同步处理"], answer: 1, rationale: "应设置超时并触发重试机制。" },
        { id: "w12-3-q8", question: "Webhook 投递顺序如何保证？", options: ["严格保证", "重试可能导致乱序，接收方需处理", "自动保证", "不关心顺序"], answer: 1, rationale: "重试可能打乱顺序，需要在接收端处理。" },
        { id: "w12-3-q9", question: "Svix 是什么类型的服务？", options: ["数据库", "Webhook 基础设施服务", "消息队列", "API 网关"], answer: 1, rationale: "Svix 提供 Webhook 发送和管理服务。" },
        { id: "w12-3-q10", question: "签名验证应该在何时进行？", options: ["处理后", "处理 Webhook 数据之前", "异步进行", "不验证"], answer: 1, rationale: "必须先验证签名再处理数据。" },
        { id: "w12-3-q11", question: "Webhook 负载控制的方法是什么？", options: ["无控制", "限流、批量、异步处理", "拒绝所有", "同步处理"], answer: 1, rationale: "需要控制 Webhook 发送频率避免压垮接收端。" },
        { id: "w12-3-q12", question: "手动重发功能的用途是什么？", options: ["自动重试", "允许人工干预重发失败的 Webhook", "删除消息", "暂停发送"], answer: 1, rationale: "手动重发用于处理自动重试失败的情况。" },
    ],
    "w12-4": [
        { id: "w12-4-q1", question: "EventBridge 在多租户中的作用是什么？", options: ["数据存储", "事件路由、过滤、转换", "代码执行", "数据库"], answer: 1, rationale: "EventBridge 是事件总线，支持灵活的事件路由。" },
        { id: "w12-4-q2", question: "Saga 模式的核心思想是什么？", options: ["单一事务", "通过补偿机制实现最终一致性", "强一致性", "无事务"], answer: 1, rationale: "Saga 用补偿操作替代分布式事务。" },
        { id: "w12-4-q3", question: "SNS FIFO 的特点是什么？", options: ["无序", "严格顺序和消息去重", "随机", "最终顺序"], answer: 1, rationale: "FIFO 保证消息顺序和精确一次投递。" },
        { id: "w12-4-q4", question: "事件总线的优势是什么？", options: ["强耦合", "解耦生产者和消费者", "增加延迟", "复杂度高"], answer: 1, rationale: "事件总线实现松耦合的事件驱动架构。" },
        { id: "w12-4-q5", question: "Saga 补偿的挑战是什么？", options: ["太简单", "补偿逻辑设计复杂，需要处理各种失败", "自动完成", "不需要补偿"], answer: 1, rationale: "补偿逻辑需要覆盖各种失败场景。" },
        { id: "w12-4-q6", question: "事件去重的实现方式是什么？", options: ["不去重", "使用唯一事件 ID 和幂等处理", "自动去重", "重复无害"], answer: 1, rationale: "通过事件 ID 识别重复并幂等处理。" },
        { id: "w12-4-q7", question: "EventBridge 规则的作用是什么？", options: ["数据存储", "根据事件内容匹配并路由到目标", "代码执行", "日志记录"], answer: 1, rationale: "规则定义事件匹配条件和目标。" },
        { id: "w12-4-q8", question: "编排式 Saga vs 协同式 Saga 的区别是什么？", options: ["相同", "编排有中心协调器，协同通过事件驱动", "无区别", "只有编排式"], answer: 1, rationale: "两种 Saga 实现模式各有特点。" },
        { id: "w12-4-q9", question: "分布式事件顺序的挑战是什么？", options: ["无挑战", "网络延迟和并发导致顺序难以保证", "自动保证", "不关心顺序"], answer: 1, rationale: "分布式环境下严格顺序很难保证。" },
        { id: "w12-4-q10", question: "EventBridge 如何过滤租户事件？", options: ["不过滤", "在规则中配置租户 ID 匹配条件", "自动过滤", "无法过滤"], answer: 1, rationale: "规则可以按事件内容包括租户 ID 过滤。" },
        { id: "w12-4-q11", question: "最终一致性的含义是什么？", options: ["立即一致", "系统最终会达到一致状态，但存在短暂不一致", "永不一致", "强一致"], answer: 1, rationale: "最终一致性允许短暂的不一致窗口。" },
        { id: "w12-4-q12", question: "跨租户业务流程协调的方法是什么？", options: ["直接调用", "使用 Saga 或工作流引擎编排", "不支持", "同步处理"], answer: 1, rationale: "复杂跨租户流程需要专门的协调机制。" },
    ],
}
