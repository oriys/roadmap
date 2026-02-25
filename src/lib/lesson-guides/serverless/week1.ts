import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "w1-1": {
        lessonId: "w1-1",
        background: [
            "【核心理念】Serverless 并非「没有服务器」，而是开发者无需管理服务器。云平台自动处理资源分配、扩缩容、操作系统补丁和可用性保障。",
            "【按需计费】传统服务器按预留资源计费（无论是否使用），Serverless 按实际调用次数和执行时长计费，空闲时零成本。",
            "【自动伸缩】Serverless 平台根据请求量自动从 0 扩展到数千并发实例，无需手动配置 Auto Scaling 策略。",
            "【零运维】开发者只需编写业务逻辑代码，基础设施运维（服务器配置、安全补丁、容量规划）全部由云平台承担。",
            "【发展历程】2014 年 AWS Lambda 发布标志着 Serverless 时代开启，随后 Azure Functions（2016）、Google Cloud Functions（2016）相继推出。"
        ],
        keyDifficulties: [
            "【概念转变】从「管理服务器」到「只写代码」的思维转变：Serverless 不等于无状态，它只是将状态管理外部化到专门的服务（如 DynamoDB、S3）。",
            "【适用边界】Serverless 不适合长时间运行的任务（Lambda 最大执行时间 15 分钟）、有状态连接（WebSocket 需要额外架构）、极端低延迟要求的场景。",
            "【厂商锁定】深度使用某个云平台的 Serverless 服务会增加迁移成本，需在便利性和可移植性之间权衡。",
            "【冷启动】Serverless 函数在一段时间未调用后会被回收，下次调用时需要重新初始化执行环境，导致额外延迟。"
        ],
        handsOnPath: [
            "访问 AWS 官方 Serverless 页面，阅读核心价值主张和典型使用场景。",
            "对比传统 EC2 部署和 Lambda 部署同一个 HTTP API 的架构差异。",
            "列出一个现有项目中可以用 Serverless 替代的组件，分析其适用性。",
            "在 AWS 控制台创建一个简单的 Lambda 函数，体验「零服务器管理」。"
        ],
        selfCheck: [
            "Serverless 的「无服务器」具体指什么？是否真的没有服务器在运行？",
            "Serverless 的计费模型与传统云服务器有何本质区别？",
            "哪些场景适合 Serverless？哪些场景不推荐使用？",
            "冷启动问题是什么？为什么它是 Serverless 的固有特性？"
        ],
        extensions: [
            "研究 CNCF Serverless 白皮书，了解行业对 Serverless 的定义和分类。",
            "对比 Serverless 与容器化部署（ECS/Kubernetes）的运维成本和灵活性。",
            "了解 Serverless 在边缘计算中的应用：CloudFront Functions、Lambda@Edge。"
        ],
        sourceUrls: [
            "https://aws.amazon.com/serverless/",
            "https://www.serverless.com/learn/overview/",
            "https://cloud.google.com/serverless"
        ]
    },
    "w1-2": {
        lessonId: "w1-2",
        background: [
            "【FaaS 定义】FaaS（Function as a Service）是 Serverless 的核心形态，开发者部署单个函数，由平台负责执行。AWS Lambda、Azure Functions、Google Cloud Functions 均属于 FaaS。",
            "【BaaS 定义】BaaS（Backend as a Service）是全托管的后端服务，如 DynamoDB（数据库）、Cognito（认证）、S3（存储），开发者通过 API 直接使用。",
            "【组合模式】典型 Serverless 应用 = FaaS（业务逻辑）+ BaaS（数据存储/认证/消息），两者组合构成完整的后端架构。",
            "【Lambda 核心】AWS Lambda 是最成熟的 FaaS 平台，支持 Node.js、Python、Java、Go、.NET 等多种运行时，最大支持 10GB 内存和 15 分钟执行时间。",
            "【多云对比】Azure Functions 提供 Durable Functions 扩展支持有状态工作流；Google Cloud Functions 与 Firebase 深度集成适合移动后端。"
        ],
        keyDifficulties: [
            "【职责划分】区分 FaaS 和 BaaS 的边界：FaaS 处理自定义业务逻辑，BaaS 提供标准化的基础设施服务。不应在 FaaS 中实现 BaaS 已提供的功能。",
            "【运行时差异】不同 FaaS 平台对运行时版本、包大小限制、并发模型的实现各有差异，直接影响架构设计。",
            "【状态管理】FaaS 函数本身是无状态的，所有持久化状态必须通过 BaaS（DynamoDB、S3、ElastiCache）管理，这要求重新思考数据访问模式。",
            "【冷启动差异】不同语言运行时的冷启动时间差异显著：Python/Node.js 通常 < 200ms，Java/.NET 可能 > 1s。"
        ],
        handsOnPath: [
            "在 AWS Lambda 控制台创建一个 Python/Node.js 函数，编写 Hello World Handler。",
            "配置一个 DynamoDB 表，通过 Lambda 函数进行基本的读写操作。",
            "对比 Lambda 与 Azure Functions 的 Handler 函数签名差异。",
            "绘制一个典型 Serverless 应用的架构图，标注 FaaS 和 BaaS 组件。"
        ],
        selfCheck: [
            "FaaS 与传统 PaaS（如 Heroku）的核心区别是什么？",
            "为什么说 Serverless = FaaS + BaaS？两者各自解决什么问题？",
            "Lambda 函数的无状态性意味着什么？如何处理需要持久化的数据？",
            "选择 FaaS 运行时语言时，应该考虑哪些因素？"
        ],
        extensions: [
            "探索 AWS Lambda 支持的所有运行时及其生命周期策略。",
            "研究 Lambda 自定义运行时（Custom Runtime）的实现方式。",
            "了解 Firecracker 微虚拟机技术——Lambda 的底层隔离机制。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
            "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
            "https://cloud.google.com/functions"
        ]
    },
    "w1-3": {
        lessonId: "w1-3",
        background: [
            "【事件驱动本质】事件驱动架构（EDA）的核心是：事件生产者发布事件，事件消费者异步响应，两者通过事件总线解耦。",
            "【AWS 事件源】Lambda 支持 200+ 事件源：API Gateway（HTTP）、S3（文件操作）、DynamoDB Streams（数据变更）、SQS（消息队列）、EventBridge（事件总线）等。",
            "【异步解耦】事件驱动架构天然支持异步处理：生产者发布事件后不等待结果，消费者按自己的节奏处理，提高系统韧性。",
            "【事件总线】Amazon EventBridge 是 AWS 的事件总线服务，支持事件路由、过滤、转换，连接 AWS 服务和第三方 SaaS。",
            "【与请求-响应对比】传统请求-响应模式是同步的（调用者等待结果），事件驱动是异步的（发布即完成），适合不同的业务场景。"
        ],
        keyDifficulties: [
            "【最终一致性】事件驱动架构通常采用最终一致性模型，事件从发布到被处理有时间延迟，这对需要强一致性的业务场景是挑战。",
            "【事件顺序】分布式系统中事件的顺序性难以保证，需要在架构层面处理乱序事件（如使用排序键或幂等处理）。",
            "【调试复杂性】异步事件流的调试比同步调用困难得多，需要完善的日志、追踪和可观测性基础设施。",
            "【重复投递】事件可能被重复投递（at-least-once 语义），消费者必须实现幂等处理逻辑。"
        ],
        handsOnPath: [
            "在 AWS 控制台创建一个 S3 桶，配置对象创建事件触发 Lambda 函数。",
            "创建 EventBridge 规则，将定时事件（cron）路由到 Lambda 函数。",
            "配置 SQS 队列作为 Lambda 事件源，观察消息消费行为。",
            "比较同步调用（API Gateway→Lambda）和异步调用（S3→Lambda）的执行差异。"
        ],
        selfCheck: [
            "事件驱动架构与传统请求-响应模式的核心区别是什么？",
            "什么是事件源映射（Event Source Mapping）？它在 Lambda 中如何工作？",
            "为什么事件消费者需要实现幂等性？什么场景下事件会被重复投递？",
            "EventBridge 和 SNS 作为事件路由的区别是什么？"
        ],
        extensions: [
            "研究事件溯源（Event Sourcing）模式在 Serverless 架构中的应用。",
            "了解 CQRS（命令查询职责分离）模式与事件驱动的结合。",
            "探索 EventBridge Pipes 的事件编排能力。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/event-driven-architectures.html",
            "https://serverlessland.com/event-driven-architecture",
            "https://aws.amazon.com/blogs/compute/operating-lambda-understanding-event-driven-architecture-part-1/"
        ]
    },
    "w1-4": {
        lessonId: "w1-4",
        background: [
            "【AWS Lambda】全球市场份额最高的 FaaS 平台，最大支持 10GB 内存、15 分钟执行时间、1000 并发（可申请提升），拥有最完善的事件源集成生态。",
            "【Azure Functions】微软的 FaaS 方案，独有 Durable Functions 扩展支持有状态工作流，Consumption Plan 类似 Lambda 按需计费，还提供 Premium 和 Dedicated 计划。",
            "【Google Cloud Functions】与 Google Cloud 生态深度集成，2nd gen 基于 Cloud Run 构建，支持更长执行时间（60 分钟）和更大实例，适合 Firebase 移动后端。",
            "【特性对比】内存上限：Lambda 10GB，Azure 14GB，GCF 32GB；执行时长：Lambda 15min，Azure 无限（Premium），GCF 60min；冷启动：三者都在持续优化。",
            "【生态差异】Lambda 事件源最丰富（200+），Azure 与 Office 365/Teams 集成最好，GCF 与 BigQuery/Firestore 集成最紧密。"
        ],
        keyDifficulties: [
            "【选择标准】平台选择应综合考虑：团队技术栈、现有云服务使用情况、特定功能需求（如 Durable Functions）、地理区域覆盖。",
            "【可移植性】不同平台的 Handler 签名、事件格式、部署方式差异大，直接迁移困难。Serverless Framework 等工具可部分缓解。",
            "【成本模型差异】各平台的免费额度、计费粒度、附加服务费用不同，需要根据实际使用模式精确计算成本。",
            "【冷启动对比】三大平台的冷启动表现各有不同：Lambda 在 Python/Node.js 表现最优，Azure 在 .NET 有优化，GCF 2nd gen 整体延迟较高。"
        ],
        handsOnPath: [
            "在 AWS Lambda 控制台创建一个 HTTP API 函数，记录冷启动和热启动延迟。",
            "阅读 Azure Functions 和 Google Cloud Functions 的快速入门文档，对比开发体验。",
            "制作三大平台的特性对比表：运行时、内存限制、执行时长、计费模式。",
            "分析一个具体业务场景，给出平台选择建议及理由。"
        ],
        selfCheck: [
            "AWS Lambda 的最大内存和最长执行时间分别是多少？",
            "Azure Functions 的 Durable Functions 解决了什么问题？",
            "Google Cloud Functions 2nd gen 与 1st gen 的主要区别是什么？",
            "选择 Serverless 平台时应该优先考虑哪些因素？",
            "如何评估三大平台在特定场景下的成本差异？"
        ],
        extensions: [
            "探索 Cloudflare Workers、Vercel Functions 等边缘 Serverless 平台。",
            "研究 Knative 等开源 Serverless 框架在 Kubernetes 上的部署方案。",
            "了解各平台的 SLA（服务等级协议）差异。"
        ],
        sourceUrls: [
            "https://aws.amazon.com/lambda/",
            "https://learn.microsoft.com/en-us/azure/azure-functions/functions-get-started",
            "https://cloud.google.com/functions/docs"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "w1-1": [
        {
            id: "sl-w1-1-q1",
            question: "Serverless 架构的核心计费模型是什么？",
            options: [
                "按预留服务器数量计费",
                "按实际调用次数和执行时长计费",
                "按月固定费用计费",
                "按部署代码大小计费"
            ],
            answer: 1,
            rationale: "Serverless 按实际调用次数和执行时长（GB-秒）计费，空闲时零成本，这是与传统云服务器最大的区别。"
        },
        {
            id: "sl-w1-1-q2",
            question: "以下哪个场景最不适合使用 Serverless？",
            options: [
                "HTTP API 后端",
                "需要运行 2 小时的批处理任务",
                "文件上传后的图片处理",
                "定时数据同步任务"
            ],
            answer: 1,
            rationale: "AWS Lambda 最大执行时间为 15 分钟，无法处理需要运行 2 小时的长任务。这类场景更适合 ECS/Fargate 等容器服务。"
        },
        {
            id: "sl-w1-1-q3",
            question: "Serverless 的「零运维」具体指什么？",
            options: [
                "不需要编写任何代码",
                "不需要管理测试环境",
                "云平台负责服务器配置、扩缩容和安全补丁",
                "不需要监控应用性能"
            ],
            answer: 2,
            rationale: "零运维是指云平台承担基础设施运维工作（服务器配置、OS 补丁、容量规划、扩缩容），开发者只需关注业务代码。"
        }
    ],
    "w1-2": [
        {
            id: "sl-w1-2-q1",
            question: "FaaS 和 BaaS 在 Serverless 架构中各自的角色是什么？",
            options: [
                "FaaS 管理数据库，BaaS 处理业务逻辑",
                "FaaS 执行自定义业务逻辑，BaaS 提供托管基础设施服务",
                "两者功能完全相同",
                "FaaS 用于前端，BaaS 用于后端"
            ],
            answer: 1,
            rationale: "FaaS（如 Lambda）负责执行开发者编写的自定义业务逻辑，BaaS（如 DynamoDB、Cognito）提供标准化的托管后端服务。"
        },
        {
            id: "sl-w1-2-q2",
            question: "以下哪个是 BaaS 的例子？",
            options: [
                "AWS Lambda",
                "Azure Functions",
                "Amazon DynamoDB",
                "Google Cloud Functions"
            ],
            answer: 2,
            rationale: "DynamoDB 是全托管的 NoSQL 数据库服务，属于 BaaS（Backend as a Service）。Lambda、Azure Functions、Cloud Functions 都是 FaaS。"
        },
        {
            id: "sl-w1-2-q3",
            question: "Lambda 函数的无状态特性意味着什么？",
            options: [
                "函数不能接收输入参数",
                "函数执行结果不能返回给调用者",
                "函数不应在本地存储持久化数据，需使用外部服务",
                "函数不能调用其他 AWS 服务"
            ],
            answer: 2,
            rationale: "Lambda 函数是无状态的，执行环境可能随时被回收。所有需要持久化的数据必须存储到 DynamoDB、S3 等外部 BaaS 服务中。"
        }
    ],
    "w1-3": [
        {
            id: "sl-w1-3-q1",
            question: "事件驱动架构与请求-响应模式的核心区别是什么？",
            options: [
                "事件驱动只能用于批处理",
                "事件驱动是异步解耦的，生产者不等待消费者完成处理",
                "请求-响应模式不能用于 Web 应用",
                "两者没有本质区别"
            ],
            answer: 1,
            rationale: "事件驱动架构的核心特征是异步解耦：事件生产者发布事件后即完成，消费者独立处理事件，两者通过事件总线连接。"
        },
        {
            id: "sl-w1-3-q2",
            question: "为什么事件驱动架构的消费者需要实现幂等处理？",
            options: [
                "为了提高处理速度",
                "因为事件可能被重复投递（at-least-once 语义）",
                "为了减少存储成本",
                "因为事件格式不固定"
            ],
            answer: 1,
            rationale: "分布式系统中事件通常采用 at-least-once 投递语义，同一事件可能被重复发送，因此消费者必须实现幂等处理以避免重复执行。"
        },
        {
            id: "sl-w1-3-q3",
            question: "Amazon EventBridge 在事件驱动架构中的角色是什么？",
            options: [
                "事件生产者",
                "事件消费者",
                "事件总线，负责事件路由、过滤和转换",
                "事件存储数据库"
            ],
            answer: 2,
            rationale: "EventBridge 是 AWS 的事件总线服务，负责接收来自 AWS 服务和自定义应用的事件，并根据规则将事件路由到目标消费者。"
        }
    ],
    "w1-4": [
        {
            id: "sl-w1-4-q1",
            question: "AWS Lambda 的最大执行时间和内存上限分别是多少？",
            options: [
                "5 分钟 / 3GB",
                "15 分钟 / 10GB",
                "30 分钟 / 16GB",
                "无限制 / 10GB"
            ],
            answer: 1,
            rationale: "AWS Lambda 最大支持 15 分钟执行时间和 10GB 内存。超过这些限制的任务需要考虑其他计算服务。"
        },
        {
            id: "sl-w1-4-q2",
            question: "Azure Functions 的哪个特性是 AWS Lambda 和 GCF 所不具备的？",
            options: [
                "支持 Python 运行时",
                "Durable Functions 有状态工作流扩展",
                "事件触发器",
                "自动伸缩"
            ],
            answer: 1,
            rationale: "Durable Functions 是 Azure Functions 独有的扩展，支持在函数中编写有状态的编排逻辑，实现长时间运行的工作流。"
        },
        {
            id: "sl-w1-4-q3",
            question: "选择 Serverless 平台时，最重要的考量因素是什么？",
            options: [
                "平台的市场份额排名",
                "团队技术栈、现有云服务使用和特定功能需求",
                "平台的免费额度大小",
                "平台的发布时间"
            ],
            answer: 1,
            rationale: "平台选择应综合考虑团队已有的技术栈和经验、现有云服务使用情况、特定功能需求（如 Durable Functions）和地理区域覆盖。"
        }
    ]
}
