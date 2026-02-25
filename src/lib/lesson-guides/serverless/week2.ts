import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "w2-1": {
        lessonId: "w2-1",
        background: [
            "【执行环境】Lambda 执行环境是一个安全隔离的微虚拟机（基于 Firecracker），包含运行时、代码和配置。每个并发请求使用独立的执行环境。",
            "【生命周期】执行环境经历三个阶段：Init（初始化运行时和代码）→ Invoke（执行 Handler 函数）→ Shutdown（清理资源）。",
            "【冷启动】当没有可用的执行环境时，Lambda 需要创建新环境（冷启动）。Init 阶段的耗时就是冷启动延迟，通常在 100ms-10s 之间。",
            "【热启动】如果执行环境在上次调用后仍然存活，Lambda 直接复用该环境处理新请求（热启动），跳过 Init 阶段，延迟极低。",
            "【环境复用】Lambda 会在调用间保持执行环境一段时间（通常 5-15 分钟），在此期间的后续调用可以复用全局变量、数据库连接等初始化资源。"
        ],
        keyDifficulties: [
            "【Init Duration 组成】冷启动的 Init Duration = Runtime Init（运行时启动）+ Extension Init（扩展初始化）+ Function Init（用户代码初始化），需要分别优化。",
            "【语言影响】不同运行时的冷启动差异大：Python/Node.js 通常 100-300ms，Java/.NET 可能 1-10s（需要加载 JVM/CLR）。",
            "【不可预测性】冷启动的发生时机不可精确预测：新部署、并发突增、长时间未调用、Lambda 内部环境回收都会触发。",
            "【全局变量】在 Handler 外部声明的变量（全局作用域）只在 Init 阶段执行一次，可被后续调用复用——这是性能优化的关键点。"
        ],
        handsOnPath: [
            "创建一个 Lambda 函数，在 Handler 外部和内部分别打印时间戳，观察冷启动和热启动的行为差异。",
            "通过 CloudWatch Logs 查看 Init Duration 指标，分析冷启动的时间组成。",
            "分别用 Python 和 Node.js 创建相同功能的 Lambda，对比冷启动延迟。",
            "连续快速调用同一个函数 10 次，观察哪些调用触发了冷启动。"
        ],
        selfCheck: [
            "Lambda 执行环境的三个生命周期阶段分别是什么？",
            "冷启动和热启动的触发条件各是什么？",
            "为什么在 Handler 外部初始化数据库连接可以提高性能？",
            "Init Duration 由哪几部分组成？哪部分开发者可以优化？"
        ],
        extensions: [
            "研究 Firecracker 微虚拟机的技术架构，理解 Lambda 的隔离机制。",
            "了解 Lambda Extensions 的生命周期及其对冷启动的影响。",
            "探索 SnapStart（Java）和 Provisioned Concurrency 的冷启动消除方案。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html",
            "https://aws.amazon.com/blogs/compute/understanding-and-remediating-cold-starts-an-aws-lambda-perspective/"
        ]
    },
    "w2-2": {
        lessonId: "w2-2",
        background: [
            "【Handler 函数】Handler 是 Lambda 函数的入口点，接收两个参数：event（触发事件数据）和 context（运行时上下文信息）。",
            "【Event 对象】event 对象包含触发器传递的数据，其结构因事件源而异：API Gateway 传递 HTTP 请求信息，S3 传递对象操作事件，SQS 传递消息内容。",
            "【Context 对象】context 提供运行时元数据：function_name、memory_limit_in_mb、aws_request_id、get_remaining_time_in_millis() 等。",
            "【返回值】同步调用时 Handler 的返回值直接返回给调用者；API Gateway 集成时需返回特定格式（statusCode、headers、body）。",
            "【Python 签名】Python Handler 格式：`def handler(event, context):`；Node.js 格式：`exports.handler = async (event, context) => {}`。"
        ],
        keyDifficulties: [
            "【Event 结构多样性】不同事件源的 event 结构完全不同，需要查阅文档了解每种事件源的事件格式，或使用类型定义辅助开发。",
            "【Context 超时管理】context.get_remaining_time_in_millis() 返回剩余执行时间，可用于在超时前优雅地完成清理工作或返回部分结果。",
            "【异步 Handler】Node.js 推荐使用 async/await Handler；如果使用 callback 模式，需注意 callbackWaitsForEmptyEventLoop 的行为。",
            "【错误处理】Handler 抛出未捕获异常时，Lambda 会将错误信息记录到 CloudWatch 并返回错误响应，需要合理设计错误处理策略。"
        ],
        handsOnPath: [
            "创建一个 Lambda 函数，打印 event 和 context 对象的完整内容。",
            "配置 API Gateway 触发器，观察 HTTP 请求对应的 event 对象结构。",
            "使用 context.get_remaining_time_in_millis() 在函数即将超时时返回警告信息。",
            "分别用同步和异步方式编写 Node.js Handler，对比行为差异。"
        ],
        selfCheck: [
            "Lambda Handler 的两个参数分别包含什么信息？",
            "不同事件源传递的 event 对象结构有何差异？举例说明。",
            "context.get_remaining_time_in_millis() 的用途是什么？",
            "API Gateway 集成时，Handler 的返回值需要满足什么格式要求？"
        ],
        extensions: [
            "研究 Lambda Powertools 提供的事件解析工具，简化 event 对象处理。",
            "了解 Lambda 的 Response Streaming 功能，实现流式响应。",
            "探索自定义运行时中 Handler 的实现方式。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/python-handler.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html"
        ]
    },
    "w2-3": {
        lessonId: "w2-3",
        background: [
            "【内存配置】Lambda 内存范围 128MB-10240MB（10GB），CPU 算力与内存成正比——1769MB 对应 1 个 vCPU，增加内存同时增加 CPU。",
            "【超时设置】执行超时范围 1 秒到 15 分钟。超时后 Lambda 强制终止函数，未完成的操作将丢失。应根据实际执行时间设置合理的超时。",
            "【环境变量】通过环境变量传递配置信息（数据库连接串、API 密钥、特性开关），避免硬编码。Lambda 支持使用 KMS 加密敏感环境变量。",
            "【内存与成本】Lambda 按 GB-秒计费，内存越大单价越高但执行可能更快。存在「甜蜜点」：增加内存可能降低总成本（执行时间大幅减少）。",
            "【临时存储】Lambda 提供 /tmp 目录（512MB-10GB 可配置）用于临时文件存储，在同一执行环境的多次调用间持久化。"
        ],
        keyDifficulties: [
            "【内存与 CPU 配比】Lambda 不能独立配置 CPU，只能通过增加内存间接增加 CPU。计算密集型任务需要配置更高内存以获得更多 CPU 算力。",
            "【超时策略】超时设置过短会导致合法请求被终止，过长会在函数异常时浪费资源。需要基于 P99 延迟设置合理的超时。",
            "【环境变量限制】环境变量总大小限制为 4KB，大量配置应使用 Parameter Store 或 Secrets Manager。",
            "【成本优化】使用 Lambda Power Tuning 工具找到最优内存配置：在执行速度和成本之间找到平衡点。"
        ],
        handsOnPath: [
            "创建一个计算密集型 Lambda 函数，分别配置 128MB、512MB、1024MB 内存，对比执行时间和成本。",
            "设置一个短超时（3 秒）的函数，模拟超时场景并查看 CloudWatch 日志。",
            "通过环境变量传递配置信息，在函数中读取并使用。",
            "配置 /tmp 目录大小，写入临时文件并在后续调用中读取验证持久性。"
        ],
        selfCheck: [
            "Lambda 的内存配置如何影响 CPU 算力分配？",
            "为什么增加内存有时反而降低总成本？",
            "环境变量有什么大小限制？超出限制应该怎么办？",
            "Lambda 的 /tmp 目录在什么情况下会被清空？"
        ],
        extensions: [
            "使用 Lambda Power Tuning 工具对生产函数进行内存调优。",
            "研究 Lambda Ephemeral Storage 的计费模式和使用场景。",
            "了解 Graviton2（ARM64）处理器对 Lambda 性能和成本的影响。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/configuration-memory.html"
        ]
    },
    "w2-4": {
        lessonId: "w2-4",
        background: [
            "【并发模型】Lambda 的并发 = 同时处理的请求数。每个并发请求使用一个独立的执行环境，默认账户级并发上限为 1000（可申请提升）。",
            "【Reserved Concurrency】为特定函数预留并发配额，保证该函数始终有可用容量，同时限制其最大并发数防止下游系统过载。",
            "【Provisioned Concurrency】预先初始化指定数量的执行环境，消除冷启动延迟。适用于延迟敏感的生产 API。",
            "【扩展行为】Lambda 在并发突增时的扩展速率：初始突增 500-3000 个实例（因 Region 而异），之后每分钟增加 500 个实例。",
            "【Throttling】当并发请求超过配额时，Lambda 返回 429 ThrottleError。同步调用直接返回错误，异步调用自动重试（最多 2 次）。"
        ],
        keyDifficulties: [
            "【Reserved vs Provisioned】Reserved Concurrency 是免费的并发限制/预留，不消除冷启动；Provisioned Concurrency 需额外付费，预热实例消除冷启动。",
            "【突发流量】Lambda 的突发扩展有速率限制，极端流量突增可能导致部分请求被限流。需要结合 SQS 队列缓冲或 API Gateway 限流。",
            "【下游保护】Lambda 可以快速扩展到数千并发，但下游服务（如 RDS 数据库）可能无法承受。需要使用 Reserved Concurrency 或 RDS Proxy 保护下游。",
            "【成本权衡】Provisioned Concurrency 按预置实例数计费（即使未使用），需要根据流量模式决定预置数量，避免资源浪费。"
        ],
        handsOnPath: [
            "为一个 Lambda 函数配置 Reserved Concurrency = 5，然后发起 10 个并发请求，观察限流行为。",
            "配置 Provisioned Concurrency = 2，对比冷启动和热启动的响应时间。",
            "查看 CloudWatch 中的 ConcurrentExecutions 和 Throttles 指标。",
            "模拟突发流量场景，观察 Lambda 的扩展速率。"
        ],
        selfCheck: [
            "Reserved Concurrency 和 Provisioned Concurrency 的核心区别是什么？",
            "Lambda 的默认账户级并发上限是多少？如何提升？",
            "为什么需要防止 Lambda 并发过高导致下游系统崩溃？",
            "Lambda 被限流时，同步调用和异步调用的行为有何不同？",
            "Provisioned Concurrency 的计费模式是怎样的？"
        ],
        extensions: [
            "研究 Application Auto Scaling 动态调整 Provisioned Concurrency 的策略。",
            "了解 Lambda 与 RDS Proxy 的集成，解决数据库连接池问题。",
            "探索 Lambda 的 SnapStart 功能对并发性能的影响。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "w2-1": [
        {
            id: "sl-w2-1-q1",
            question: "Lambda 执行环境的生命周期阶段顺序是什么？",
            options: [
                "Invoke → Init → Shutdown",
                "Init → Invoke → Shutdown",
                "Shutdown → Init → Invoke",
                "Init → Shutdown → Invoke"
            ],
            answer: 1,
            rationale: "Lambda 执行环境依次经历 Init（初始化运行时和代码）→ Invoke（执行 Handler）→ Shutdown（清理资源）三个阶段。"
        },
        {
            id: "sl-w2-1-q2",
            question: "以下哪种情况会触发 Lambda 冷启动？",
            options: [
                "函数被连续快速调用",
                "函数长时间未被调用，执行环境被回收",
                "函数的超时时间到期",
                "函数返回了错误响应"
            ],
            answer: 1,
            rationale: "当没有可用的执行环境时会触发冷启动。长时间未调用导致环境被回收、新部署、并发突增都是常见触发条件。"
        },
        {
            id: "sl-w2-1-q3",
            question: "为什么建议在 Handler 函数外部初始化数据库连接？",
            options: [
                "Handler 外部的代码不会执行",
                "Handler 外部的代码只在 Init 阶段执行一次，后续调用可复用",
                "Handler 内部不能使用数据库",
                "为了满足代码风格要求"
            ],
            answer: 1,
            rationale: "Handler 外部（全局作用域）的代码只在 Init 阶段执行一次，在后续的热启动调用中可以直接复用已建立的连接，避免重复初始化。"
        }
    ],
    "w2-2": [
        {
            id: "sl-w2-2-q1",
            question: "Lambda Handler 接收的 context 对象包含什么信息？",
            options: [
                "HTTP 请求的 Headers 和 Body",
                "函数名称、内存限制、请求 ID 和剩余执行时间等元数据",
                "DynamoDB 表的数据",
                "S3 桶中的文件列表"
            ],
            answer: 1,
            rationale: "context 对象提供运行时元数据：function_name、memory_limit_in_mb、aws_request_id、get_remaining_time_in_millis() 等。"
        },
        {
            id: "sl-w2-2-q2",
            question: "Lambda 与 API Gateway 集成时，Handler 返回值必须包含什么？",
            options: [
                "只需返回字符串",
                "statusCode、headers 和 body",
                "只需返回 JSON 对象",
                "不需要返回值"
            ],
            answer: 1,
            rationale: "API Gateway 代理集成要求 Lambda 返回包含 statusCode（HTTP 状态码）、headers（响应头）和 body（响应体字符串）的对象。"
        },
        {
            id: "sl-w2-2-q3",
            question: "不同事件源传递给 Lambda 的 event 对象有何特点？",
            options: [
                "所有事件源的 event 结构完全相同",
                "event 结构因事件源类型而异，需查阅文档了解格式",
                "event 对象始终为空",
                "event 只包含字符串数据"
            ],
            answer: 1,
            rationale: "不同事件源的 event 结构完全不同：API Gateway 包含 HTTP 请求信息，S3 包含对象操作事件，SQS 包含消息内容，需查阅对应文档。"
        }
    ],
    "w2-3": [
        {
            id: "sl-w2-3-q1",
            question: "Lambda 的内存配置如何影响 CPU 算力？",
            options: [
                "内存和 CPU 可以独立配置",
                "CPU 算力与内存成正比，1769MB 对应 1 个 vCPU",
                "增加内存不影响 CPU",
                "CPU 固定为 1 核，无法改变"
            ],
            answer: 1,
            rationale: "Lambda 的 CPU 算力与内存成正比，1769MB 内存对应 1 个完整的 vCPU。不能独立配置 CPU，只能通过调整内存间接控制。"
        },
        {
            id: "sl-w2-3-q2",
            question: "为什么增加 Lambda 内存有时反而能降低总成本？",
            options: [
                "因为内存越大单价越低",
                "因为更多 CPU 使函数执行更快，总 GB-秒可能更少",
                "因为 AWS 提供内存折扣",
                "因为高内存函数不收费"
            ],
            answer: 1,
            rationale: "Lambda 按 GB-秒计费。增加内存带来更多 CPU，可能大幅缩短执行时间。如果时间缩短的比例大于内存增加的比例，总成本反而降低。"
        },
        {
            id: "sl-w2-3-q3",
            question: "Lambda 环境变量的总大小限制是多少？",
            options: [
                "1KB",
                "4KB",
                "64KB",
                "无限制"
            ],
            answer: 1,
            rationale: "Lambda 环境变量总大小限制为 4KB。如果需要存储大量或敏感配置，应使用 AWS Systems Manager Parameter Store 或 Secrets Manager。"
        }
    ],
    "w2-4": [
        {
            id: "sl-w2-4-q1",
            question: "Reserved Concurrency 和 Provisioned Concurrency 的核心区别是什么？",
            options: [
                "两者功能完全相同",
                "Reserved 预留并发配额但不消除冷启动，Provisioned 预热实例消除冷启动",
                "Reserved 更贵",
                "Provisioned 是免费的"
            ],
            answer: 1,
            rationale: "Reserved Concurrency 免费预留并发配额（限制最大并发），但仍有冷启动。Provisioned Concurrency 额外付费预热执行环境，消除冷启动延迟。"
        },
        {
            id: "sl-w2-4-q2",
            question: "Lambda 并发超过配额时，同步调用会出现什么情况？",
            options: [
                "请求被排队等待",
                "返回 429 ThrottleError 错误",
                "自动增加并发配额",
                "请求被路由到其他函数"
            ],
            answer: 1,
            rationale: "同步调用在并发超限时直接返回 429 ThrottleError。异步调用则自动重试最多 2 次，之后将事件发送到死信队列。"
        },
        {
            id: "sl-w2-4-q3",
            question: "为什么 Lambda 快速扩展可能导致下游系统问题？",
            options: [
                "Lambda 扩展速度太慢",
                "Lambda 可扩展到数千并发，但下游数据库等服务可能无法承受连接数暴增",
                "Lambda 不支持访问外部服务",
                "下游系统会自动扩展"
            ],
            answer: 1,
            rationale: "Lambda 可以快速扩展到数千并发实例，每个实例可能建立独立的数据库连接。传统 RDS 数据库有连接数限制，可能被压垮。需要 RDS Proxy 或 Reserved Concurrency 保护。"
        }
    ]
}
