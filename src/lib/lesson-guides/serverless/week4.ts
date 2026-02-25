import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "w4-1": {
        lessonId: "w4-1",
        background: [
            "【DynamoDB 本质】DynamoDB 是 AWS 全托管的 NoSQL 数据库，支持键值和文档数据模型。按需容量模式下无需预置容量，与 Serverless 架构天然契合。",
            "【分区键与排序键】每个表必须有分区键（Partition Key），可选排序键（Sort Key）。分区键决定数据分布，排序键决定分区内数据的排列顺序。",
            "【容量模式】按需模式（On-demand）：按读写请求计费，自动适应流量波动；预置模式（Provisioned）：预设 RCU/WCU，适合稳定流量，成本更低。",
            "【二级索引】GSI（全局二级索引）允许使用不同的分区键和排序键查询数据；LSI（本地二级索引）与主表共享分区键但使用不同排序键。",
            "【单表设计】Serverless 应用推荐单表设计：在一个 DynamoDB 表中存储多种实体，通过精心设计的键结构支持多种查询模式。"
        ],
        keyDifficulties: [
            "【键设计】分区键设计是 DynamoDB 性能的关键：选择高基数属性（如 userId）作为分区键，避免热分区导致的吞吐量限制。",
            "【查询限制】DynamoDB 的 Query 操作只支持分区键精确匹配 + 排序键范围查询。不支持关系型数据库的 JOIN 和复杂 WHERE 条件。",
            "【单表设计复杂性】单表设计需要预先规划所有访问模式，使用组合键和 GSI 模拟关系查询。前期设计成本高但运行效率最优。",
            "【一致性模型】DynamoDB 默认最终一致性读取（延迟约 ms 级），强一致性读取（消耗双倍 RCU）。需要根据业务需求选择。"
        ],
        handsOnPath: [
            "在 AWS 控制台创建一个 DynamoDB 表，选择按需容量模式，设置分区键和排序键。",
            "使用控制台手动创建几条记录，执行 Query 和 Scan 操作对比差异。",
            "为表创建一个 GSI，体验通过不同维度查询数据。",
            "观察 DynamoDB 的 CloudWatch 指标：ConsumedReadCapacityUnits 和 ConsumedWriteCapacityUnits。"
        ],
        selfCheck: [
            "DynamoDB 的分区键和排序键各自的作用是什么？",
            "按需容量模式和预置容量模式各自适合什么场景？",
            "GSI 和 LSI 的核心区别是什么？",
            "什么是单表设计？为什么 Serverless 应用推荐使用？",
            "DynamoDB 的最终一致性读取和强一致性读取有什么区别？"
        ],
        extensions: [
            "学习 DynamoDB 的 PartiQL 查询语言，使用类 SQL 语法操作 DynamoDB。",
            "研究 DynamoDB 的全局表（Global Tables）实现多区域复制。",
            "了解 DynamoDB 的 TTL（Time to Live）功能自动清理过期数据。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html",
            "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStartedDynamoDB.html",
            "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html"
        ]
    },
    "w4-2": {
        lessonId: "w4-2",
        background: [
            "【SDK 集成】Lambda 函数通过 AWS SDK 访问 DynamoDB：Python 使用 boto3，Node.js 使用 @aws-sdk/client-dynamodb 或 @aws-sdk/lib-dynamodb。",
            "【CRUD 操作】核心 API：PutItem（写入）、GetItem（读取单项）、UpdateItem（更新）、DeleteItem（删除）、Query（查询）、Scan（全表扫描）。",
            "【DocumentClient】高级抽象层自动处理 DynamoDB 的属性类型标注。Python boto3.resource('dynamodb') 和 Node.js DynamoDBDocumentClient 简化数据操作。",
            "【条件表达式】所有写操作支持 ConditionExpression：实现乐观锁、唯一性约束、存在性检查等业务逻辑，避免并发冲突。",
            "【批量操作】BatchWriteItem（批量写入/删除，最多 25 项）和 BatchGetItem（批量读取，最多 100 项）减少网络往返次数。"
        ],
        keyDifficulties: [
            "【Query vs Scan】Query 按分区键精确查找，效率高（毫秒级）；Scan 遍历全表，消耗大量 RCU，应尽量避免。通过合理的键设计消除 Scan 需求。",
            "【表达式语法】DynamoDB 使用表达式属性名和表达式属性值占位符，避免与保留字冲突：ExpressionAttributeNames（#pk）和 ExpressionAttributeValues（:val）。",
            "【错误处理】常见错误：ConditionalCheckFailedException（条件不满足）、ProvisionedThroughputExceededException（吞吐量超限）、ValidationException（参数无效）。",
            "【连接复用】Lambda 中应在 Handler 外部创建 DynamoDB 客户端实例，利用执行环境复用避免每次调用都创建新连接。"
        ],
        handsOnPath: [
            "创建 Lambda 函数实现 DynamoDB 的 CRUD 操作，配合 API Gateway 构建 REST API。",
            "使用 ConditionExpression 实现「如果不存在则创建」的逻辑。",
            "编写 Query 查询特定分区键下的所有记录，对比 Scan 的性能差异。",
            "实现 BatchWriteItem 批量写入 25 条记录。"
        ],
        selfCheck: [
            "Lambda 中应该在哪里创建 DynamoDB 客户端？为什么？",
            "Query 和 Scan 操作的性能差异有多大？如何避免使用 Scan？",
            "ConditionExpression 有哪些典型使用场景？",
            "BatchWriteItem 的数量限制是多少？超出怎么办？"
        ],
        extensions: [
            "研究 DynamoDB 的事务操作（TransactWriteItems/TransactGetItems）实现 ACID 事务。",
            "了解 DynamoDB 的原子计数器（Atomic Counter）和集合操作。",
            "探索使用 DynamoDB + AppSync 构建 GraphQL API。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html",
            "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html",
            "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.html"
        ]
    },
    "w4-3": {
        lessonId: "w4-3",
        background: [
            "【DynamoDB Streams】Streams 捕获表中数据的变更事件（INSERT/MODIFY/REMOVE），按变更顺序存储最近 24 小时的变更日志。",
            "【触发模式】Lambda 通过事件源映射（Event Source Mapping）轮询 DynamoDB Streams，接收变更事件批量处理。",
            "【记录内容】Stream Record 包含：eventName（变更类型）、dynamodb.NewImage（新值）、dynamodb.OldImage（旧值）、dynamodb.Keys（键值）。",
            "【视图类型】四种 StreamViewType：KEYS_ONLY（仅键）、NEW_IMAGE（新值）、OLD_IMAGE（旧值）、NEW_AND_OLD_IMAGES（新旧值），根据需求选择。",
            "【使用场景】典型用例：数据变更触发通知、搜索索引同步（DynamoDB → ElasticSearch）、跨区域复制、数据聚合统计。"
        ],
        keyDifficulties: [
            "【顺序保证】DynamoDB Streams 保证同一分区键内的变更事件按顺序处理。不同分区键的事件可能并行处理，不保证跨分区顺序。",
            "【重复处理】Lambda 在处理 Streams 事件时保证 at-least-once 语义，需要在消费端实现幂等处理。",
            "【批次失败】默认情况下，批次中任何记录处理失败都会导致整个批次重试。启用 BisectBatchOnFunctionError 可以二分拆批定位问题记录。",
            "【延迟特性】Streams 事件通常在变更后 100-200ms 内到达 Lambda，但在高并发下可能有更大延迟。不适合毫秒级实时要求。"
        ],
        handsOnPath: [
            "为 DynamoDB 表启用 Streams（选择 NEW_AND_OLD_IMAGES 视图）。",
            "创建 Lambda 函数作为 Streams 消费者，打印接收到的变更事件。",
            "在 DynamoDB 表中增删改数据，观察 Lambda 接收到的事件内容。",
            "配置事件过滤器，只处理特定 eventName（如 INSERT）的事件。"
        ],
        selfCheck: [
            "DynamoDB Streams 的四种 StreamViewType 各包含什么内容？",
            "Streams 事件的顺序保证范围是什么？跨分区键有保证吗？",
            "为什么 Streams 消费端需要实现幂等处理？",
            "BisectBatchOnFunctionError 功能解决什么问题？"
        ],
        extensions: [
            "研究 DynamoDB Streams 与 Kinesis Data Streams for DynamoDB 的区别。",
            "了解使用 Streams 实现 DynamoDB 到 ElasticSearch 的数据同步。",
            "探索 DynamoDB 变更数据捕获（CDC）的架构模式。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/with-ddb-example.html",
            "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.Tutorial.html"
        ]
    },
    "w4-4": {
        lessonId: "w4-4",
        background: [
            "【S3 事件通知】S3 桶可以在对象操作时发送事件通知，支持的事件类型：s3:ObjectCreated:*、s3:ObjectRemoved:*、s3:ObjectRestore:* 等。",
            "【触发方式】S3 事件通知可以发送到 Lambda、SQS、SNS 或 EventBridge。Lambda 直接触发最简单，SQS/SNS 适合扇出或缓冲场景。",
            "【Event 结构】Lambda 接收的 S3 事件包含：桶名称、对象键（Key）、对象大小、事件类型、请求者信息等。",
            "【前缀/后缀过滤】S3 事件通知支持按对象键的前缀和后缀过滤：如只对 images/ 前缀下的 .jpg 文件触发处理。",
            "【典型用例】文件上传后自动处理：图片压缩/缩略图生成、视频转码、CSV 数据导入、日志分析、恶意软件扫描。"
        ],
        keyDifficulties: [
            "【递归调用】Lambda 处理 S3 事件后如果写入同一桶的同一前缀，会触发新事件形成无限循环。必须使用不同桶或不同前缀。",
            "【最终一致性】S3 事件通知是最终一致的，极少数情况下可能延迟到达或漏发。关键业务应结合 S3 Inventory 进行对账。",
            "【大文件处理】Lambda 内存和执行时间有限，处理大文件（>500MB）需要使用流式读取或 S3 Select 提取部分数据。",
            "【并发控制】大量文件同时上传会触发大量 Lambda 并发，可能超过并发限制或压垮下游服务。使用 SQS 作为缓冲层。"
        ],
        handsOnPath: [
            "创建 S3 桶并配置 ObjectCreated 事件通知触发 Lambda。",
            "在 Lambda 中解析 S3 事件，获取上传文件的桶名和键名，读取文件内容。",
            "配置前缀过滤（如 uploads/），只对特定目录下的文件触发处理。",
            "实现一个简单的图片处理流程：上传到 input/ 前缀，处理后保存到 output/ 前缀。"
        ],
        selfCheck: [
            "S3 事件通知支持哪些事件类型？如何按前缀/后缀过滤？",
            "如何避免 S3 → Lambda 的递归调用问题？",
            "Lambda 处理大文件时有什么限制？有哪些解决方案？",
            "大量文件同时上传时，如何保护下游系统不被压垮？"
        ],
        extensions: [
            "研究 S3 Object Lambda 在读取时动态转换对象内容。",
            "了解 S3 Batch Operations 批量处理大量现有对象。",
            "探索 S3 Event Notifications 通过 EventBridge 实现高级事件路由。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html",
            "https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "w4-1": [
        {
            id: "sl-w4-1-q1",
            question: "DynamoDB 的按需容量模式（On-demand）有什么优势？",
            options: [
                "成本最低",
                "无需预置容量，自动适应流量波动，与 Serverless 天然契合",
                "性能最高",
                "支持 SQL 查询"
            ],
            answer: 1,
            rationale: "按需模式按读写请求计费，无需预置 RCU/WCU，自动适应流量波动。虽然单位成本高于预置模式，但与 Serverless 的弹性特性完美匹配。"
        },
        {
            id: "sl-w4-1-q2",
            question: "DynamoDB 分区键设计的关键原则是什么？",
            options: [
                "选择低基数属性以减少分区数",
                "选择高基数属性避免热分区，确保数据均匀分布",
                "始终使用自增 ID",
                "分区键不影响性能"
            ],
            answer: 1,
            rationale: "分区键决定数据分布到哪个物理分区。高基数属性（如 userId）确保数据均匀分布，避免热分区导致吞吐量瓶颈。"
        },
        {
            id: "sl-w4-1-q3",
            question: "GSI（全局二级索引）和 LSI（本地二级索引）的核心区别是什么？",
            options: [
                "GSI 更便宜",
                "GSI 可以使用不同的分区键，LSI 只能使用与主表相同的分区键",
                "LSI 性能更好",
                "两者功能完全相同"
            ],
            answer: 1,
            rationale: "GSI 允许使用完全不同的分区键和排序键构建索引，LSI 与主表共享分区键只能指定不同的排序键，必须在建表时创建。"
        }
    ],
    "w4-2": [
        {
            id: "sl-w4-2-q1",
            question: "Lambda 中应该在哪里创建 DynamoDB 客户端实例？",
            options: [
                "在每次 Handler 调用内部创建",
                "在 Handler 外部（全局作用域）创建，利用执行环境复用",
                "不需要创建客户端",
                "在另一个 Lambda 函数中创建"
            ],
            answer: 1,
            rationale: "在 Handler 外部创建客户端实例，利用 Lambda 执行环境复用机制。后续热启动调用可直接复用已有实例，避免重复初始化。"
        },
        {
            id: "sl-w4-2-q2",
            question: "DynamoDB Query 和 Scan 操作的核心区别是什么？",
            options: [
                "功能完全相同",
                "Query 按分区键精确查找效率高，Scan 遍历全表消耗大量 RCU",
                "Scan 比 Query 更快",
                "Query 只能返回一条记录"
            ],
            answer: 1,
            rationale: "Query 按分区键精确查找，只读取匹配的数据（毫秒级）。Scan 遍历全表所有记录，消耗大量 RCU，性能和成本都差很多。"
        },
        {
            id: "sl-w4-2-q3",
            question: "ConditionExpression 在 DynamoDB 写操作中的作用是什么？",
            options: [
                "格式化输出数据",
                "实现条件写入，如乐观锁、唯一性约束和存在性检查",
                "过滤查询结果",
                "加密数据"
            ],
            answer: 1,
            rationale: "ConditionExpression 在写操作时检查条件是否满足：如 attribute_not_exists(PK) 实现唯一性约束，版本号检查实现乐观锁。"
        }
    ],
    "w4-3": [
        {
            id: "sl-w4-3-q1",
            question: "DynamoDB Streams 记录保留多长时间？",
            options: [
                "7 天",
                "24 小时",
                "30 天",
                "永久保留"
            ],
            answer: 1,
            rationale: "DynamoDB Streams 保留最近 24 小时的变更记录。超过 24 小时的记录会被自动删除。如需更长保留，应将数据持久化到其他存储。"
        },
        {
            id: "sl-w4-3-q2",
            question: "DynamoDB Streams 的顺序保证范围是什么？",
            options: [
                "全表范围内严格有序",
                "同一分区键内的变更事件按顺序处理",
                "不保证任何顺序",
                "按时间戳全局排序"
            ],
            answer: 1,
            rationale: "Streams 保证同一分区键内的变更事件按顺序处理。不同分区键的事件可能并行处理，不保证跨分区顺序。"
        },
        {
            id: "sl-w4-3-q3",
            question: "BisectBatchOnFunctionError 功能解决什么问题？",
            options: [
                "提高 Lambda 内存",
                "当批次处理失败时二分拆批，定位导致失败的具体记录",
                "增加批次大小",
                "取消失败的批次"
            ],
            answer: 1,
            rationale: "默认整个批次失败会全量重试。BisectBatchOnFunctionError 将失败批次一分为二分别处理，通过递归二分最终定位到问题记录。"
        }
    ],
    "w4-4": [
        {
            id: "sl-w4-4-q1",
            question: "S3 事件触发 Lambda 的递归调用问题是什么？",
            options: [
                "Lambda 执行太慢",
                "Lambda 处理 S3 事件后写入同一桶同一前缀，触发新事件形成无限循环",
                "S3 不支持 Lambda 触发",
                "Lambda 只能触发一次"
            ],
            answer: 1,
            rationale: "如果 Lambda 函数在处理 S3 事件时将结果写入同一桶的同一前缀，新写入会再次触发 Lambda，形成无限循环，产生大量费用。"
        },
        {
            id: "sl-w4-4-q2",
            question: "S3 事件通知支持什么级别的过滤？",
            options: [
                "不支持过滤",
                "按对象键的前缀和后缀过滤",
                "按对象内容过滤",
                "按上传者身份过滤"
            ],
            answer: 1,
            rationale: "S3 事件通知支持按对象键（Key）的前缀和后缀进行过滤，如只对 images/ 前缀下的 .jpg 文件触发。不支持按对象内容过滤。"
        },
        {
            id: "sl-w4-4-q3",
            question: "大量文件同时上传到 S3 时，如何保护下游服务？",
            options: [
                "增加 Lambda 超时时间",
                "使用 SQS 作为缓冲层，控制 Lambda 消费速率",
                "禁用 S3 事件通知",
                "使用更大的 S3 桶"
            ],
            answer: 1,
            rationale: "大量文件同时上传会触发大量 Lambda 并发，可能压垮下游服务。使用 S3 → SQS → Lambda 架构，SQS 作为缓冲层控制消费速率。"
        }
    ]
}
