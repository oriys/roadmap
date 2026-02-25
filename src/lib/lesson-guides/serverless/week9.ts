import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "w9-1": {
        lessonId: "w9-1",
        background: [
            "【核心指标】Lambda 的 CloudWatch 核心指标：Invocations（调用次数）、Duration（执行时间）、Errors（错误次数）、Throttles（限流次数）、ConcurrentExecutions（并发数）。",
            "【Duration 百分位】Duration 指标支持 p50/p90/p99 百分位统计。p99 反映最慢 1% 的请求延迟，是衡量用户体验的关键指标。",
            "【错误类型】Errors 包含函数错误（代码异常）和系统错误（平台问题）。还有 DeadLetterErrors（DLQ 投递失败）和 DestinationDeliveryFailures。",
            "【自定义指标】使用 CloudWatch Embedded Metric Format（EMF）从 Lambda 发布自定义业务指标，无需调用 PutMetricData API。",
            "【仪表板】CloudWatch 仪表板可组合多个指标图表，一目了然地监控 Lambda 函数的健康状态和性能趋势。"
        ],
        keyDifficulties: [
            "【告警配置】告警需要合理设置阈值和评估期。推荐基于异常检测（Anomaly Detection）自动学习基线，避免静态阈值在流量波动时误报。",
            "【指标粒度】Lambda 指标默认 1 分钟粒度。高频调用时 1 分钟内的尖峰可能被平均值掩盖，需要关注 p99 等百分位指标。",
            "【IteratorAge 指标】对于流式事件源（Kinesis/DynamoDB Streams），IteratorAge 表示最后处理的记录与最新记录的时间差。持续增大说明消费跟不上生产。",
            "【成本监控】CloudWatch 指标和告警本身有成本。自定义指标 $0.30/指标/月，告警 $0.10/告警/月。避免创建过多低价值指标。"
        ],
        handsOnPath: [
            "在 CloudWatch 控制台查看 Lambda 函数的核心指标：Invocations、Duration、Errors。",
            "创建 CloudWatch 告警：当 Errors > 10（5 分钟内）时通过 SNS 发送邮件通知。",
            "使用 Embedded Metric Format 在 Lambda 中发布自定义业务指标。",
            "创建 CloudWatch 仪表板，组合展示关键指标的趋势图。"
        ],
        selfCheck: [
            "Lambda 的五个核心 CloudWatch 指标各自反映什么？",
            "为什么应该关注 Duration 的 p99 而非平均值？",
            "CloudWatch 告警的评估期和数据点设置有什么影响？",
            "什么是 Embedded Metric Format？与 PutMetricData 相比有什么优势？"
        ],
        extensions: [
            "研究 CloudWatch Anomaly Detection 自动基线告警。",
            "了解 CloudWatch Contributor Insights 分析 Lambda 的顶级贡献者。",
            "探索 CloudWatch Synthetics 创建 Canary 主动探测 API 健康。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics.html",
            "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatch.html"
        ]
    },
    "w9-2": {
        lessonId: "w9-2",
        background: [
            "【日志输出】Lambda 自动将 stdout/stderr 输出发送到 CloudWatch Logs。每个函数有独立的 Log Group（/aws/lambda/<function-name>），每个执行环境有独立的 Log Stream。",
            "【结构化日志】使用 JSON 格式输出日志（而非纯文本），便于 CloudWatch Logs Insights 查询和过滤。包含 level、message、requestId、timestamp 等字段。",
            "【Logs Insights】CloudWatch Logs Insights 提供类 SQL 查询语法，支持 filter、stats、sort、parse 等操作，快速分析大量日志数据。",
            "【日志级别】Lambda 高级日志控制支持设置日志级别（TRACE/DEBUG/INFO/WARN/ERROR/FATAL），在运行时过滤低级别日志，减少日志量和成本。",
            "【Lambda Powertools Logger】提供结构化日志、自动注入上下文信息（requestId、coldStart、xrayTraceId）、日志采样等功能。"
        ],
        keyDifficulties: [
            "【日志成本】CloudWatch Logs 按数据量计费：$0.50/GB 摄入 + $0.03/GB 存储。高调用量的 Lambda 日志成本可能很高，需要控制日志量。",
            "【日志保留】默认日志永不过期。应为 Log Group 设置保留期（如 30/90 天），避免无限增长的存储成本。",
            "【Logs Insights 语法】关键语法：`fields @timestamp, @message | filter @message like /ERROR/ | stats count() by bin(5m) | sort @timestamp desc`。",
            "【日志采样】高流量场景下，可以对 DEBUG 级别日志进行采样（如只记录 10% 的请求），降低日志量同时保留排查能力。"
        ],
        handsOnPath: [
            "在 Lambda 函数中使用 JSON 格式输出结构化日志。",
            "在 CloudWatch Logs Insights 中查询最近 1 小时的错误日志。",
            "编写 Logs Insights 查询：统计每 5 分钟的错误数和平均延迟。",
            "为 Log Group 设置 30 天保留期。"
        ],
        selfCheck: [
            "为什么推荐使用结构化日志而非纯文本日志？",
            "CloudWatch Logs Insights 的核心查询操作有哪些？",
            "如何控制 Lambda 日志成本？有哪些策略？",
            "Lambda Powertools Logger 自动注入了哪些上下文信息？"
        ],
        extensions: [
            "研究 CloudWatch Logs 订阅过滤器将日志流式传输到 S3/ElasticSearch。",
            "了解 Lambda 高级日志控制的日志格式和级别配置。",
            "探索 CloudWatch Log Anomaly Detection 自动检测异常日志模式。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs.html",
            "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html",
            "https://docs.powertools.aws.dev/lambda/python/latest/core/logger/"
        ]
    },
    "w9-3": {
        lessonId: "w9-3",
        background: [
            "【X-Ray 概述】AWS X-Ray 是分布式追踪服务，可视化微服务间的调用链路（Trace），标识性能瓶颈和错误源。",
            "【启用方式】Lambda 的 X-Ray 追踪通过函数配置一键启用（Active Tracing）。启用后 Lambda 自动创建 Segment，记录调用信息。",
            "【Trace 结构】一个 Trace 由多个 Segment 组成。Lambda Segment 包含 Init（冷启动）、Invocation（执行）、Overhead（平台开销）三个子 Segment。",
            "【下游追踪】使用 X-Ray SDK 为下游调用（DynamoDB、HTTP API、SQS）创建 Subsegment，实现跨服务的端到端追踪。",
            "【Service Map】X-Ray 自动生成 Service Map，显示服务间的调用关系、延迟分布和错误率。一目了然定位问题服务。"
        ],
        keyDifficulties: [
            "【SDK 集成】X-Ray SDK 需要包装 AWS SDK 客户端和 HTTP 客户端：Python 使用 `patch_all()`，Node.js 使用 `AWSXRay.captureAWS()`。",
            "【采样规则】X-Ray 默认采样率：每秒第一个请求 + 之后 5% 的请求。高流量应用可自定义采样规则降低成本。",
            "【Annotation vs Metadata】Annotation 是可索引的键值对，支持 X-Ray 搜索和过滤。Metadata 不可索引但可存储大数据。Annotation 用于分组和过滤。",
            "【Lambda Powertools Tracer】简化 X-Ray 集成：自动捕获 Lambda Handler 和方法调用，自动添加 ColdStart annotation，减少样板代码。"
        ],
        handsOnPath: [
            "在 Lambda 函数配置中启用 Active Tracing。",
            "部署一个调用 DynamoDB 的 Lambda 函数，使用 X-Ray SDK patch_all() 追踪。",
            "在 X-Ray 控制台查看 Trace 详情，分析各阶段耗时。",
            "查看 X-Ray Service Map，观察 Lambda → DynamoDB 的调用关系。"
        ],
        selfCheck: [
            "X-Ray Trace 的层级结构是什么？Segment 和 Subsegment 的关系？",
            "Lambda 函数的 X-Ray Segment 包含哪三个子 Segment？",
            "Annotation 和 Metadata 的区别是什么？什么时候用 Annotation？",
            "X-Ray 默认的采样策略是什么？为什么需要采样？"
        ],
        extensions: [
            "研究 X-Ray Groups 和 Insights 自动检测延迟异常。",
            "了解 OpenTelemetry 与 X-Ray 的集成方案。",
            "探索 X-Ray 的分析报告和延迟直方图功能。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html",
            "https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html",
            "https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk.html"
        ]
    },
    "w9-4": {
        lessonId: "w9-4",
        background: [
            "【Powertools 概述】Lambda Powertools 是 AWS 官方维护的开发者工具库，提供 Logger（日志）、Tracer（追踪）、Metrics（指标）三个核心功能模块。",
            "【语言支持】Powertools 支持 Python、TypeScript/JavaScript、Java、.NET。各语言版本保持一致的 API 设计和功能集。",
            "【Logger 模块】结构化 JSON 日志，自动注入 Lambda 上下文（requestId、coldStart、functionName），支持日志级别和采样。",
            "【Tracer 模块】封装 X-Ray SDK，简化追踪集成。使用装饰器/注解自动追踪 Handler 和方法，自动添加 ColdStart 和 ServiceName annotation。",
            "【Metrics 模块】使用 CloudWatch Embedded Metric Format 发布自定义指标。通过代码定义 Metric、Dimension、Namespace，无需调用 CloudWatch API。"
        ],
        keyDifficulties: [
            "【安装方式】Powertools 可通过包管理器安装或使用 Lambda Layer。Layer 方式避免增加部署包大小：arn:aws:lambda:<region>:017000801446:layer:AWSLambdaPowertoolsPythonV3。",
            "【装饰器模式】Python Powertools 使用装饰器：@logger.inject_lambda_context、@tracer.capture_lambda_handler、@metrics.log_metrics。",
            "【指标维度】Metrics 的 Dimension 用于区分指标来源（如 service、environment）。CloudWatch 按维度组合计费，避免高基数维度（如 userId）。",
            "【集成使用】三个模块通常一起使用，通过 POWERTOOLS_SERVICE_NAME 环境变量统一标识服务名称，实现日志、追踪、指标的关联。"
        ],
        handsOnPath: [
            "安装 Lambda Powertools：pip install aws-lambda-powertools 或使用 Lambda Layer。",
            "使用 Logger 模块替换 print 语句，输出结构化 JSON 日志。",
            "使用 Tracer 模块装饰 Handler，在 X-Ray 中查看追踪结果。",
            "使用 Metrics 模块发布自定义业务指标（如订单处理数量、处理延迟）。"
        ],
        selfCheck: [
            "Lambda Powertools 的三个核心模块分别解决什么问题？",
            "Powertools Logger 自动注入了哪些上下文信息？",
            "Powertools Metrics 使用什么格式发布自定义指标？",
            "使用 Lambda Layer 方式安装 Powertools 有什么优势？"
        ],
        extensions: [
            "研究 Powertools 的 Event Handler 模块简化 API Gateway 集成。",
            "了解 Powertools 的 Parameters 模块统一管理 SSM/Secrets Manager 配置。",
            "探索 Powertools 的 Idempotency 模块实现幂等处理。"
        ],
        sourceUrls: [
            "https://docs.powertools.aws.dev/lambda/python/latest/",
            "https://docs.powertools.aws.dev/lambda/typescript/latest/",
            "https://docs.powertools.aws.dev/lambda/python/latest/core/tracer/"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "w9-1": [
        {
            id: "sl-w9-1-q1",
            question: "Lambda 的哪个 CloudWatch 指标反映最慢 1% 请求的延迟？",
            options: [
                "Duration Average",
                "Duration p99",
                "Invocations",
                "Throttles"
            ],
            answer: 1,
            rationale: "Duration p99 百分位统计反映最慢 1% 请求的延迟，比平均值更能反映用户体验，尤其是受冷启动影响的请求。"
        },
        {
            id: "sl-w9-1-q2",
            question: "CloudWatch Embedded Metric Format（EMF）的优势是什么？",
            options: [
                "比 PutMetricData API 功能更多",
                "通过日志发布指标，无需额外 API 调用，延迟和成本更低",
                "只能用于 EC2",
                "自动创建告警"
            ],
            answer: 1,
            rationale: "EMF 将指标嵌入日志输出中，CloudWatch 自动提取为指标。避免了 PutMetricData API 调用的延迟和成本，适合高频指标发布。"
        },
        {
            id: "sl-w9-1-q3",
            question: "IteratorAge 指标持续增大说明什么问题？",
            options: [
                "函数执行速度提升了",
                "流式事件源的消费速度跟不上生产速度",
                "函数内存不足",
                "函数部署包太大"
            ],
            answer: 1,
            rationale: "IteratorAge 表示流式事件源最后处理的记录与最新记录的时间差。持续增大说明 Lambda 消费速率低于事件生产速率，存在处理积压。"
        }
    ],
    "w9-2": [
        {
            id: "sl-w9-2-q1",
            question: "为什么推荐 Lambda 使用结构化 JSON 日志而非纯文本？",
            options: [
                "JSON 占用空间更小",
                "JSON 格式便于 Logs Insights 查询和过滤，支持字段级搜索",
                "纯文本不支持 CloudWatch",
                "JSON 格式更美观"
            ],
            answer: 1,
            rationale: "结构化 JSON 日志的字段可以被 CloudWatch Logs Insights 直接查询（如 filter level = 'ERROR'），纯文本需要正则解析，效率低且容易出错。"
        },
        {
            id: "sl-w9-2-q2",
            question: "如何控制 Lambda 的 CloudWatch Logs 成本？",
            options: [
                "无法控制日志成本",
                "设置日志保留期、控制日志级别、对 DEBUG 日志采样",
                "关闭所有日志",
                "使用更大的内存"
            ],
            answer: 1,
            rationale: "控制日志成本的策略：设置 Log Group 保留期（如 30 天）、生产环境使用 INFO 以上日志级别、对 DEBUG 日志采样（如只记录 10%）。"
        },
        {
            id: "sl-w9-2-q3",
            question: "CloudWatch Logs Insights 查询中 `stats count() by bin(5m)` 的含义是什么？",
            options: [
                "统计总行数",
                "按 5 分钟时间窗口分组统计数量",
                "限制返回 5 条结果",
                "过滤 5 分钟内的日志"
            ],
            answer: 1,
            rationale: "`stats count() by bin(5m)` 将日志按 5 分钟时间窗口分组，统计每个窗口内的记录数量，常用于分析错误趋势和流量模式。"
        }
    ],
    "w9-3": [
        {
            id: "sl-w9-3-q1",
            question: "X-Ray 的 Service Map 提供什么信息？",
            options: [
                "只显示 Lambda 函数列表",
                "可视化服务间的调用关系、延迟分布和错误率",
                "显示 AWS 账户的费用",
                "管理 IAM 权限"
            ],
            answer: 1,
            rationale: "Service Map 自动生成服务拓扑图，显示各服务间的调用关系、平均延迟、错误率和请求量，帮助快速定位问题服务和瓶颈。"
        },
        {
            id: "sl-w9-3-q2",
            question: "X-Ray 的 Annotation 和 Metadata 有什么区别？",
            options: [
                "功能完全相同",
                "Annotation 可索引支持搜索过滤，Metadata 不可索引但可存储大数据",
                "Metadata 可以搜索，Annotation 不能",
                "两者都不支持搜索"
            ],
            answer: 1,
            rationale: "Annotation 是可索引的键值对，可在 X-Ray 控制台搜索和过滤 Trace。Metadata 不可索引但可存储更大的结构化数据用于调试。"
        },
        {
            id: "sl-w9-3-q3",
            question: "Lambda 的 X-Ray Segment 包含哪三个子 Segment？",
            options: [
                "Request、Response、Error",
                "Init、Invocation、Overhead",
                "Start、Execute、End",
                "Connect、Process、Disconnect"
            ],
            answer: 1,
            rationale: "Lambda 的 X-Ray Segment 包含 Init（初始化/冷启动）、Invocation（Handler 执行）和 Overhead（平台开销）三个子 Segment。"
        }
    ],
    "w9-4": [
        {
            id: "sl-w9-4-q1",
            question: "Lambda Powertools 的三个核心模块分别是什么？",
            options: [
                "Auth、Cache、Queue",
                "Logger、Tracer、Metrics",
                "Build、Test、Deploy",
                "Storage、Compute、Network"
            ],
            answer: 1,
            rationale: "Powertools 提供 Logger（结构化日志）、Tracer（X-Ray 追踪简化）、Metrics（CloudWatch EMF 自定义指标）三个核心可观测性模块。"
        },
        {
            id: "sl-w9-4-q2",
            question: "Powertools Metrics 模块使用什么格式发布自定义指标？",
            options: [
                "CloudWatch PutMetricData API",
                "CloudWatch Embedded Metric Format（通过日志发布）",
                "Prometheus 格式",
                "自定义 JSON 格式"
            ],
            answer: 1,
            rationale: "Powertools Metrics 使用 CloudWatch Embedded Metric Format，将指标嵌入日志输出，CloudWatch 自动提取为指标，避免额外 API 调用。"
        },
        {
            id: "sl-w9-4-q3",
            question: "为什么 Metrics 的 Dimension 应该避免高基数值（如 userId）？",
            options: [
                "高基数值会导致函数崩溃",
                "CloudWatch 按维度组合计费，高基数维度导致指标数量爆炸、成本激增",
                "userId 是敏感数据",
                "Dimension 不支持字符串值"
            ],
            answer: 1,
            rationale: "CloudWatch 按唯一指标（Metric + Dimensions 组合）计费。高基数 Dimension（如 userId）会产生海量唯一指标，每个 $0.30/月，成本失控。"
        }
    ]
}
