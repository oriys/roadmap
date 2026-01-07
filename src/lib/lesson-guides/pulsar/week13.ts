import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week13Guides: Record<string, LessonGuide> = {
    "pulsar-w13-1": {
        lessonId: "pulsar-w13-1",
        background: [
            "【Pulsar Functions 定义】官方文档：Pulsar Functions 是轻量级计算框架，允许用户部署简单的处理逻辑来消费、处理消息并发布结果，无需部署独立的流处理系统。",
            "【Serverless 特性】Pulsar Functions 是 Serverless 计算，用户只需关注业务逻辑，框架自动处理消息消费、结果发送、故障恢复等基础设施。",
            "【处理语义】官方文档支持三种处理语义：At-most-once、At-least-once、Effectively-once。默认是 At-least-once。",
            "【部署模式】支持三种部署模式：Thread（同进程线程）、Process（独立进程）、Kubernetes（K8s Pod）。生产环境推荐 Process 或 Kubernetes。",
            "【多语言支持】官方支持 Java、Python、Go 编写 Functions。Java 支持最完善，Python 适合快速开发，Go 适合高性能场景。"
        ],
        keyDifficulties: [
            "【与流处理框架对比】Pulsar Functions 适合简单的消息转换和过滤，复杂的流处理（如多流 Join、复杂窗口）应使用 Flink/Spark。",
            "【资源隔离】Thread 模式多个 Function 共享 Broker 进程资源，可能相互影响。生产环境应使用 Process 或 Kubernetes 隔离。",
            "【Effectively-once 实现】通过 Pulsar 事务实现，Function 的消费确认和结果发送在同一事务中，保证原子性。",
            "【热更新限制】更新 Function 代码需要重新部署，期间可能短暂中断处理。设计时应考虑向后兼容。"
        ],
        handsOnPath: [
            "阅读 Pulsar Functions 架构文档，理解 Function Worker 的作用。",
            "对比 Pulsar Functions 和 Kafka Streams、Flink 的定位差异。",
            "思考你的业务场景哪些适合用 Pulsar Functions 实现。",
            "研究三种部署模式的资源消耗和隔离性差异。"
        ],
        selfCheck: [
            "Pulsar Functions 的主要用途是什么？它解决什么问题？",
            "Pulsar Functions 支持哪三种处理语义？默认是哪种？",
            "三种部署模式（Thread、Process、Kubernetes）各有什么特点？",
            "Pulsar Functions 适合什么场景？什么场景应该使用专业流处理框架？",
            "Effectively-once 语义是如何实现的？"
        ],
        extensions: [
            "研究 Pulsar Functions 的架构设计，了解 Function Worker 组件。",
            "探索 Pulsar Functions 与 Pulsar IO 的关系。",
            "学习 Function Mesh：Kubernetes 原生的 Pulsar Functions 管理。",
            "研究 Serverless 计算的一般模式和 Pulsar Functions 的定位。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/functions-overview/",
            "https://pulsar.apache.org/docs/functions-concepts/"
        ]
    },
    "pulsar-w13-2": {
        lessonId: "pulsar-w13-2",
        background: [
            "【Function 接口】Java Function 实现 java.util.function.Function<I, O> 接口，或 org.apache.pulsar.functions.api.Function 接口以访问 Context。",
            "【Context 对象】Context 提供访问配置、日志、状态存储、指标等能力。通过 context.getLogger() 记录日志，context.getUserConfigValue() 获取配置。",
            "【输入输出 Topic】Function 从输入 Topic 消费消息，处理后发送到输出 Topic。可以配置多个输入 Topic，但只能有一个输出 Topic。",
            "【Python Function】Python Function 继承 pulsar.Function 类，实现 process(input, context) 方法。Python SDK 功能与 Java 类似。",
            "【序列化】输入输出消息的序列化由 Schema 处理。支持 Avro、JSON、Protobuf 等格式，也可以使用原始 bytes。"
        ],
        keyDifficulties: [
            "【有状态 vs 无状态】无状态 Function 更简单，易于扩展。有状态 Function 需要使用 State Store，增加了复杂性但支持更多场景。",
            "【异常处理】Function 抛出异常时，消息默认会重新投递。可以通过配置死信 Topic 处理持续失败的消息。",
            "【日志和调试】Function 的日志输出到 Function Worker 日志。调试时可以先在本地测试，使用 LocalRunner 运行。",
            "【依赖管理】Java Function 需要将依赖打包到 JAR/NAR 中。避免与 Pulsar 运行时依赖冲突。"
        ],
        handsOnPath: [
            "编写一个简单的 Java Function：将输入消息转换为大写并输出。",
            "编写一个 Python Function：过滤掉包含特定关键词的消息。",
            "使用 Context 对象：读取用户配置、记录日志、发送指标。",
            "使用 LocalRunner 在本地测试 Function，验证逻辑正确性。"
        ],
        selfCheck: [
            "Java Function 需要实现什么接口？有几种选择？",
            "Context 对象提供哪些能力？如何使用？",
            "Function 可以有多个输入 Topic 吗？多个输出 Topic 呢？",
            "Function 抛出异常时消息会怎样处理？",
            "如何在本地测试 Function？"
        ],
        extensions: [
            "研究 Go Function 的编写方式，了解与 Java/Python 的差异。",
            "探索 Function 的单元测试最佳实践。",
            "学习如何处理 Function 中的异步操作。",
            "研究 NAR（Pulsar 的打包格式）与普通 JAR 的区别。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/functions-develop/",
            "https://pulsar.apache.org/docs/functions-develop-api/"
        ]
    },
    "pulsar-w13-3": {
        lessonId: "pulsar-w13-3",
        background: [
            "【部署命令】使用 pulsar-admin functions create 部署 Function，需要指定输入 Topic、输出 Topic、处理类、JAR 包路径等。",
            "【并行度配置】parallelism 参数控制 Function 实例数。增加实例可以提高吞吐，但需要输入 Topic 有足够的分区。",
            "【资源配置】可以配置 CPU、内存限制：--cpu、--ram。合理配置避免资源浪费或 OOM。",
            "【管理命令】pulsar-admin functions list/get/update/delete/status 等命令管理 Function 生命周期。",
            "【Function Worker】Function Worker 是运行 Function 的组件，可以与 Broker 共进程或独立部署。生产环境推荐独立部署。"
        ],
        keyDifficulties: [
            "【分区与实例的关系】Function 实例数不应超过输入 Topic 的分区数，否则多余实例会空闲。一般设置实例数等于或小于分区数。",
            "【运行时选择】Thread 运行时简单但隔离性差；Process 运行时隔离性好但启动慢；Kubernetes 最适合云原生环境。",
            "【更新策略】更新 Function 时可以选择滚动更新（逐个实例）或全量更新。滚动更新影响更小但耗时更长。",
            "【监控告警】Function 暴露处理延迟、失败率、积压量等指标。应该配置告警监控这些指标。"
        ],
        handsOnPath: [
            "使用 pulsar-admin functions create 部署前面编写的 Function。",
            "使用 pulsar-admin functions status 查看 Function 运行状态。",
            "调整 parallelism 参数，观察吞吐量变化。",
            "测试 Function 更新：修改代码后重新部署，观察更新过程。"
        ],
        selfCheck: [
            "部署 Function 需要指定哪些参数？",
            "parallelism 参数的作用是什么？如何选择合适的值？",
            "如何查看 Function 的运行状态和指标？",
            "Function Worker 是什么？有几种部署方式？",
            "更新 Function 时有哪些策略选择？"
        ],
        extensions: [
            "研究 Function Worker 的高可用配置。",
            "探索使用 Helm Chart 在 Kubernetes 上部署 Function。",
            "学习 Function Mesh 的使用方式。",
            "研究 Function 的自动扩缩容配置。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/functions-deploy/",
            "https://pulsar.apache.org/docs/admin-api-functions/"
        ]
    }
}

export const week13Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w13-1": [
        {
            id: "pulsar-w13-1-q1",
            question: "Pulsar Functions 的主要用途是什么？",
            options: [
                "存储消息",
                "轻量级消息处理，无需部署独立流处理系统",
                "消息路由",
                "消息加密"
            ],
            answer: 1,
            rationale: "Pulsar Functions 是轻量级计算框架，允许部署简单处理逻辑，无需独立流处理系统。"
        },
        {
            id: "pulsar-w13-1-q2",
            question: "Pulsar Functions 支持哪些处理语义？",
            options: [
                "只有 At-least-once",
                "At-most-once、At-least-once、Effectively-once",
                "只有 Exactly-once",
                "只有 At-most-once"
            ],
            answer: 1,
            rationale: "Pulsar Functions 支持三种处理语义：At-most-once、At-least-once、Effectively-once。"
        },
        {
            id: "pulsar-w13-1-q3",
            question: "Pulsar Functions 的默认处理语义是什么？",
            options: [
                "At-most-once",
                "At-least-once",
                "Effectively-once",
                "无保证"
            ],
            answer: 1,
            rationale: "默认处理语义是 At-least-once，消息可能被处理多次但不会丢失。"
        },
        {
            id: "pulsar-w13-1-q4",
            question: "Pulsar Functions 支持哪些部署模式？",
            options: [
                "只有 Thread",
                "Thread、Process、Kubernetes",
                "只有 Kubernetes",
                "只有 Process"
            ],
            answer: 1,
            rationale: "支持三种部署模式：Thread（同进程线程）、Process（独立进程）、Kubernetes（K8s Pod）。"
        },
        {
            id: "pulsar-w13-1-q5",
            question: "生产环境推荐使用哪种部署模式？",
            options: [
                "Thread",
                "Process 或 Kubernetes",
                "只能用 Thread",
                "任意模式"
            ],
            answer: 1,
            rationale: "生产环境推荐 Process 或 Kubernetes 模式，提供更好的资源隔离。"
        },
        {
            id: "pulsar-w13-1-q6",
            question: "Pulsar Functions 官方支持哪些编程语言？",
            options: [
                "只有 Java",
                "Java、Python、Go",
                "只有 Python",
                "所有语言"
            ],
            answer: 1,
            rationale: "官方支持 Java、Python、Go 编写 Functions。Java 支持最完善。"
        },
        {
            id: "pulsar-w13-1-q7",
            question: "Thread 模式的主要缺点是什么？",
            options: [
                "性能差",
                "多个 Function 共享资源，可能相互影响",
                "不支持 Java",
                "无法扩展"
            ],
            answer: 1,
            rationale: "Thread 模式多个 Function 共享 Broker 进程资源，可能相互影响，隔离性差。"
        },
        {
            id: "pulsar-w13-1-q8",
            question: "Effectively-once 语义是如何实现的？",
            options: [
                "通过消息去重",
                "通过 Pulsar 事务",
                "通过重试机制",
                "无法实现"
            ],
            answer: 1,
            rationale: "通过 Pulsar 事务实现，Function 的消费确认和结果发送在同一事务中。"
        },
        {
            id: "pulsar-w13-1-q9",
            question: "什么场景不适合使用 Pulsar Functions？",
            options: [
                "简单消息转换",
                "复杂流处理（多流 Join、复杂窗口）",
                "消息过滤",
                "消息格式转换"
            ],
            answer: 1,
            rationale: "复杂流处理（如多流 Join、复杂窗口）应使用 Flink/Spark 等专业流处理框架。"
        },
        {
            id: "pulsar-w13-1-q10",
            question: "Pulsar Functions 的 Serverless 特性意味着什么？",
            options: [
                "不需要服务器",
                "用户只需关注业务逻辑，框架处理基础设施",
                "不需要部署",
                "不收费"
            ],
            answer: 1,
            rationale: "Serverless 意味着用户只需关注业务逻辑，框架自动处理消息消费、结果发送、故障恢复等。"
        },
        {
            id: "pulsar-w13-1-q11",
            question: "更新 Function 代码需要什么操作？",
            options: [
                "自动热更新",
                "重新部署",
                "修改配置",
                "重启 Broker"
            ],
            answer: 1,
            rationale: "更新 Function 代码需要重新部署，期间可能短暂中断处理。"
        },
        {
            id: "pulsar-w13-1-q12",
            question: "Pulsar Functions 与 Kafka Streams 的主要区别是什么？",
            options: [
                "功能完全相同",
                "Pulsar Functions 是服务端运行，Kafka Streams 是客户端库",
                "Kafka Streams 更轻量",
                "无区别"
            ],
            answer: 1,
            rationale: "Pulsar Functions 在服务端（Function Worker）运行，Kafka Streams 是嵌入应用的客户端库。"
        }
    ],
    "pulsar-w13-2": [
        {
            id: "pulsar-w13-2-q1",
            question: "Java Function 可以实现哪些接口？",
            options: [
                "只有 Runnable",
                "java.util.function.Function 或 pulsar.functions.api.Function",
                "只有 Callable",
                "只有 Consumer"
            ],
            answer: 1,
            rationale: "Java Function 可以实现 java.util.function.Function<I, O> 或 pulsar.functions.api.Function 接口。"
        },
        {
            id: "pulsar-w13-2-q2",
            question: "Context 对象提供哪些能力？",
            options: [
                "只有日志",
                "配置、日志、状态存储、指标等",
                "只有配置",
                "只有状态存储"
            ],
            answer: 1,
            rationale: "Context 提供访问配置、日志、状态存储、指标等能力。"
        },
        {
            id: "pulsar-w13-2-q3",
            question: "Function 可以配置多少个输出 Topic？",
            options: [
                "任意多个",
                "只能一个",
                "最多两个",
                "不需要输出 Topic"
            ],
            answer: 1,
            rationale: "Function 可以配置多个输入 Topic，但只能有一个输出 Topic。"
        },
        {
            id: "pulsar-w13-2-q4",
            question: "如何在 Function 中记录日志？",
            options: [
                "System.out.println()",
                "context.getLogger().info()",
                "Console.log()",
                "Log.write()"
            ],
            answer: 1,
            rationale: "通过 context.getLogger() 获取日志对象，使用 info()、error() 等方法记录日志。"
        },
        {
            id: "pulsar-w13-2-q5",
            question: "Function 抛出异常时消息会怎样？",
            options: [
                "消息丢失",
                "默认重新投递",
                "发送到输出 Topic",
                "忽略"
            ],
            answer: 1,
            rationale: "Function 抛出异常时，消息默认会重新投递。可以配置死信 Topic 处理持续失败的消息。"
        },
        {
            id: "pulsar-w13-2-q6",
            question: "如何在本地测试 Function？",
            options: [
                "必须部署到集群",
                "使用 LocalRunner 运行",
                "无法本地测试",
                "使用 Docker"
            ],
            answer: 1,
            rationale: "使用 LocalRunner 可以在本地测试 Function，验证逻辑正确性。"
        },
        {
            id: "pulsar-w13-2-q7",
            question: "Python Function 需要实现什么方法？",
            options: [
                "run()",
                "process(input, context)",
                "execute()",
                "handle()"
            ],
            answer: 1,
            rationale: "Python Function 继承 pulsar.Function 类，实现 process(input, context) 方法。"
        },
        {
            id: "pulsar-w13-2-q8",
            question: "如何获取 Function 的用户配置？",
            options: [
                "context.getConfig()",
                "context.getUserConfigValue(key)",
                "Config.get(key)",
                "System.getProperty(key)"
            ],
            answer: 1,
            rationale: "通过 context.getUserConfigValue(key) 获取部署时配置的用户参数。"
        },
        {
            id: "pulsar-w13-2-q9",
            question: "有状态 Function 和无状态 Function 的主要区别是什么？",
            options: [
                "性能不同",
                "有状态 Function 使用 State Store 存储状态",
                "编程语言不同",
                "部署方式不同"
            ],
            answer: 1,
            rationale: "无状态 Function 更简单，有状态 Function 使用 State Store 存储状态，支持更多场景。"
        },
        {
            id: "pulsar-w13-2-q10",
            question: "Java Function 的依赖应该如何处理？",
            options: [
                "运行时自动下载",
                "打包到 JAR/NAR 中",
                "配置 classpath",
                "不能使用依赖"
            ],
            answer: 1,
            rationale: "Java Function 需要将依赖打包到 JAR/NAR 中，避免与运行时依赖冲突。"
        },
        {
            id: "pulsar-w13-2-q11",
            question: "Function 的日志输出到哪里？",
            options: [
                "标准输出",
                "Function Worker 日志",
                "独立日志文件",
                "消息队列"
            ],
            answer: 1,
            rationale: "Function 的日志输出到 Function Worker 日志，可以通过日志系统收集查看。"
        },
        {
            id: "pulsar-w13-2-q12",
            question: "Function 支持哪些消息序列化格式？",
            options: [
                "只有 JSON",
                "Avro、JSON、Protobuf、原始 bytes 等",
                "只有 Avro",
                "只有 bytes"
            ],
            answer: 1,
            rationale: "支持 Avro、JSON、Protobuf 等格式，也可以使用原始 bytes，由 Schema 处理序列化。"
        }
    ],
    "pulsar-w13-3": [
        {
            id: "pulsar-w13-3-q1",
            question: "使用什么命令部署 Function？",
            options: [
                "pulsar-admin topics create",
                "pulsar-admin functions create",
                "pulsar-admin deploy",
                "pulsar functions start"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin functions create 部署 Function。"
        },
        {
            id: "pulsar-w13-3-q2",
            question: "parallelism 参数的作用是什么？",
            options: [
                "配置 CPU 核数",
                "控制 Function 实例数",
                "配置内存大小",
                "配置超时时间"
            ],
            answer: 1,
            rationale: "parallelism 参数控制 Function 实例数，增加实例可以提高吞吐。"
        },
        {
            id: "pulsar-w13-3-q3",
            question: "Function 实例数与输入 Topic 分区数的关系是什么？",
            options: [
                "无关系",
                "实例数不应超过分区数，否则多余实例会空闲",
                "实例数必须等于分区数",
                "实例数必须大于分区数"
            ],
            answer: 1,
            rationale: "Function 实例数不应超过输入 Topic 分区数，否则多余实例会空闲。"
        },
        {
            id: "pulsar-w13-3-q4",
            question: "如何查看 Function 运行状态？",
            options: [
                "pulsar-admin functions list",
                "pulsar-admin functions status",
                "pulsar-admin functions info",
                "pulsar-admin functions check"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin functions status 查看 Function 运行状态和指标。"
        },
        {
            id: "pulsar-w13-3-q5",
            question: "Function Worker 的作用是什么？",
            options: [
                "存储消息",
                "运行 Function 的组件",
                "路由消息",
                "管理 Topic"
            ],
            answer: 1,
            rationale: "Function Worker 是运行 Function 的组件，负责 Function 的调度和执行。"
        },
        {
            id: "pulsar-w13-3-q6",
            question: "生产环境 Function Worker 推荐如何部署？",
            options: [
                "与 Broker 共进程",
                "独立部署",
                "在客户端部署",
                "不需要部署"
            ],
            answer: 1,
            rationale: "生产环境推荐 Function Worker 独立部署，与 Broker 分离，提高隔离性和稳定性。"
        },
        {
            id: "pulsar-w13-3-q7",
            question: "更新 Function 时有哪些策略？",
            options: [
                "只能全量更新",
                "滚动更新或全量更新",
                "只能滚动更新",
                "无法更新"
            ],
            answer: 1,
            rationale: "更新时可选择滚动更新（逐个实例）或全量更新。滚动更新影响更小。"
        },
        {
            id: "pulsar-w13-3-q8",
            question: "如何配置 Function 的 CPU 限制？",
            options: [
                "无法配置",
                "使用 --cpu 参数",
                "修改配置文件",
                "在代码中设置"
            ],
            answer: 1,
            rationale: "可以使用 --cpu 参数配置 Function 的 CPU 限制。"
        },
        {
            id: "pulsar-w13-3-q9",
            question: "Function 暴露哪些关键指标？",
            options: [
                "只有吞吐量",
                "处理延迟、失败率、积压量等",
                "只有失败率",
                "不暴露指标"
            ],
            answer: 1,
            rationale: "Function 暴露处理延迟、失败率、积压量等指标，应该监控告警。"
        },
        {
            id: "pulsar-w13-3-q10",
            question: "使用什么命令删除 Function？",
            options: [
                "pulsar-admin functions remove",
                "pulsar-admin functions delete",
                "pulsar-admin functions stop",
                "pulsar-admin functions destroy"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin functions delete 删除 Function。"
        },
        {
            id: "pulsar-w13-3-q11",
            question: "如何配置 Function 的内存限制？",
            options: [
                "无法配置",
                "使用 --ram 参数",
                "修改 JVM 参数",
                "在代码中设置"
            ],
            answer: 1,
            rationale: "可以使用 --ram 参数配置 Function 的内存限制。"
        },
        {
            id: "pulsar-w13-3-q12",
            question: "Kubernetes 运行时的优势是什么？",
            options: [
                "启动最快",
                "最适合云原生环境，资源隔离和调度最好",
                "配置最简单",
                "内存消耗最少"
            ],
            answer: 1,
            rationale: "Kubernetes 运行时最适合云原生环境，提供最好的资源隔离和调度能力。"
        }
    ]
}
