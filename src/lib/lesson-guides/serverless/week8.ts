import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "w8-1": {
        lessonId: "w8-1",
        background: [
            "【Init Duration 组成】冷启动的 Init Duration 由三部分组成：Runtime Init（运行时启动）、Extension Init（扩展加载）、Function Init（用户代码初始化）。",
            "【Runtime Init】运行时初始化时间因语言而异：Python ~100ms、Node.js ~150ms、Java ~500ms-2s、.NET ~300ms-1s。JVM/CLR 启动是 Java/.NET 冷启动长的主因。",
            "【Function Init】用户代码在 Handler 外部（全局作用域）的初始化：SDK 客户端创建、数据库连接建立、配置加载。通常是可优化空间最大的部分。",
            "【Extension Init】Lambda Extensions（监控、安全等扩展）的初始化。每个 Extension 增加额外的 Init 时间，需要评估必要性。",
            "【测量方法】通过 CloudWatch Logs 的 REPORT 行查看 Init Duration。X-Ray 追踪可以可视化冷启动的各阶段耗时。"
        ],
        keyDifficulties: [
            "【优化优先级】Function Init > Runtime Init > Extension Init。用户代码初始化通常有最大优化空间：减少依赖、延迟初始化、使用轻量 SDK。",
            "【依赖大小影响】部署包越大，冷启动越慢（解压和加载时间增加）。应移除未使用的依赖，使用 Tree Shaking 或 Lambda Layers 优化。",
            "【VPC 冷启动】Lambda 在 VPC 中执行时，冷启动需要额外的 ENI（弹性网络接口）创建时间。AWS 已通过 Hyperplane 优化，但仍有额外延迟。",
            "【冷启动频率】冷启动通常只占总调用的 1-5%（取决于流量模式）。但对延迟敏感的 API 来说，即使 1% 的冷启动也可能影响用户体验。"
        ],
        handsOnPath: [
            "创建一个包含多个依赖的 Lambda 函数，查看 CloudWatch Logs 中的 Init Duration。",
            "移除不必要的依赖后重新部署，对比 Init Duration 的变化。",
            "使用 X-Ray 追踪可视化冷启动各阶段的耗时分布。",
            "对比同一函数在 VPC 内和 VPC 外的冷启动时间差异。"
        ],
        selfCheck: [
            "Init Duration 由哪三部分组成？哪部分通常最容易优化？",
            "为什么 Java Lambda 的冷启动时间比 Python 长很多？",
            "部署包大小如何影响冷启动时间？",
            "如何在 CloudWatch Logs 中查看冷启动的 Init Duration？"
        ],
        extensions: [
            "研究 Lambda 的 INIT_REPORT 日志行（需启用高级日志控制）。",
            "了解 Lambda 在不同 Region 的冷启动性能差异。",
            "探索 GraalVM Native Image 消除 Java 冷启动的方案。"
        ],
        sourceUrls: [
            "https://aws.amazon.com/blogs/compute/understanding-and-remediating-cold-starts-an-aws-lambda-perspective/",
            "https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"
        ]
    },
    "w8-2": {
        lessonId: "w8-2",
        background: [
            "【Provisioned Concurrency】预先初始化指定数量的执行环境，这些环境始终保持热状态，消除冷启动延迟。适合延迟敏感的 API。",
            "【配置方式】在 Lambda 别名或版本上配置 Provisioned Concurrency。不能在 $LATEST 上配置。配置后预热实例立即开始初始化。",
            "【自动调整】结合 Application Auto Scaling 根据使用率或计划自动调整预置并发数。如工作日高峰期增加，夜间减少。",
            "【计费模型】Provisioned Concurrency 按预置实例数和时间计费（即使未使用），加上实际调用的 Duration 费用。需要平衡成本和性能。",
            "【调度策略】使用 Target Tracking Scaling（目标追踪）或 Scheduled Scaling（定时调度）自动管理预置并发数量。"
        ],
        keyDifficulties: [
            "【成本计算】Provisioned Concurrency 约 $0.0000041667/GB-秒（预置费）+ $0.0000097222/GB-秒（调用费）。预置 10 个 512MB 实例 24 小时约 $1.8/天。",
            "【溢出行为】当实际并发超过 Provisioned 数量时，多余的请求仍会触发冷启动（使用按需实例）。预置数量需要覆盖正常流量。",
            "【预热时间】配置 Provisioned Concurrency 后，实例需要几分钟完成初始化。可以通过 CloudWatch 指标监控预热进度。",
            "【与 Reserved Concurrency 的交互】如果同时配置了 Reserved Concurrency，Provisioned 数量不能超过 Reserved 数量。两者配合使用。"
        ],
        handsOnPath: [
            "为 Lambda 函数创建版本和别名，在别名上配置 Provisioned Concurrency = 2。",
            "等待预热完成，调用函数验证无冷启动（Init Duration 消失）。",
            "配置 Application Auto Scaling 的 Target Tracking：保持 70% 使用率。",
            "设置 Scheduled Scaling：工作日 9:00 预置 10，22:00 减少到 2。"
        ],
        selfCheck: [
            "Provisioned Concurrency 可以配置在 $LATEST 上吗？为什么？",
            "当实际并发超过 Provisioned 数量时会发生什么？",
            "如何估算 Provisioned Concurrency 的月成本？",
            "Target Tracking 和 Scheduled Scaling 各自适合什么场景？"
        ],
        extensions: [
            "研究 Provisioned Concurrency 的 ProvisionedConcurrencyUtilization 指标。",
            "了解多别名 Provisioned Concurrency 的分配策略。",
            "探索使用 CDK 定义 Provisioned Concurrency 和 Auto Scaling。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
            "https://aws.amazon.com/blogs/compute/scheduling-aws-lambda-provisioned-concurrency-for-recurring-peak-usage/",
            "https://www.ranthebuilder.cloud/post/optimize-aws-lambda-with-dynamic-provisioned-concurrency"
        ]
    },
    "w8-3": {
        lessonId: "w8-3",
        background: [
            "【SnapStart 概述】Lambda SnapStart 在发布函数版本时对初始化完成后的执行环境创建 Firecracker 快照，后续冷启动直接从快照恢复，跳过 Init 阶段。",
            "【适用范围】目前 SnapStart 仅支持 Java 11 及以上版本的 Lambda 函数。它将 Java 冷启动从数秒降低到约 200ms。",
            "【启用方式】在 Lambda 函数配置中设置 SnapStart: { ApplyOn: PublishedVersions }，然后发布新版本即可生效。",
            "【快照恢复钩子】CRaC（Coordinated Restore at Checkpoint）API 提供 beforeCheckpoint() 和 afterRestore() 钩子，用于在快照前后执行自定义逻辑。",
            "【唯一性问题】从快照恢复的多个实例共享相同的初始化状态。随机数生成器、唯一 ID、临时凭证等需要在 afterRestore() 中重新初始化。"
        ],
        keyDifficulties: [
            "【网络连接】快照恢复后，Init 阶段建立的网络连接（数据库、HTTP）已过期。需要在 afterRestore() 中重新建立连接或使用连接池的重连机制。",
            "【安全考虑】快照中可能包含敏感数据（内存中的密钥、令牌），需要确保快照存储安全。使用 CRaC 钩子在快照前清理敏感数据。",
            "【不支持场景】SnapStart 不支持 Provisioned Concurrency、大于 512MB 的临时存储、arm64 架构（已逐步支持中）。",
            "【版本发布延迟】启用 SnapStart 后发布版本需要额外时间（创建快照），通常增加 1-3 分钟部署时间。"
        ],
        handsOnPath: [
            "创建一个 Java Lambda 函数，测量启用 SnapStart 前的冷启动时间。",
            "在函数配置中启用 SnapStart，发布新版本，对比冷启动时间。",
            "实现 CRaC 的 afterRestore() 钩子，重新初始化数据库连接。",
            "测试快照恢复后随机数生成器的唯一性。"
        ],
        selfCheck: [
            "SnapStart 的工作原理是什么？它如何减少冷启动时间？",
            "SnapStart 目前支持哪些运行时？",
            "为什么从快照恢复后需要重新初始化网络连接？",
            "CRaC API 的 beforeCheckpoint 和 afterRestore 各自的用途是什么？"
        ],
        extensions: [
            "研究 SnapStart 与 Provisioned Concurrency 的对比和选择策略。",
            "了解 CRaC 项目在 OpenJDK 中的发展和社区支持。",
            "探索 Python/Node.js 运行时是否有类似 SnapStart 的优化方案。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/snapstart-best-practices.html",
            "https://aws.amazon.com/blogs/compute/reducing-java-cold-starts-on-aws-lambda-functions-with-snapstart/"
        ]
    },
    "w8-4": {
        lessonId: "w8-4",
        background: [
            "【依赖精简】移除未使用的 npm/pip 依赖可显著减小部署包。使用 Tree Shaking（esbuild/webpack）、pip install --no-deps 等技术精简依赖。",
            "【SDK 优化】AWS SDK v3（Node.js）支持模块化导入：只导入使用的服务客户端（如 @aws-sdk/client-dynamodb）而非整个 SDK。",
            "【初始化优化】将 SDK 客户端、数据库连接等资源在 Handler 外部初始化，利用执行环境复用。避免在每次调用中重复初始化。",
            "【Lambda Power Tuning】开源工具，通过自动化测试找到最优的内存配置。以不同内存值运行函数，比较执行时间和成本的帕累托最优。",
            "【Lambda Layers】将公共依赖打包为 Lambda Layer 共享给多个函数。Layer 独立于函数代码部署，减少每个函数的部署包大小。"
        ],
        keyDifficulties: [
            "【打包分析】使用 bundlephobia.com 分析 npm 包大小，找出「重」依赖并寻找轻量替代（如用 date-fns 替代 moment.js）。",
            "【延迟初始化】对于不是每次调用都需要的资源，使用延迟初始化（lazy initialization）：在首次使用时才创建，而非在 Init 阶段创建。",
            "【ARM64 架构】Graviton2（arm64）处理器的 Lambda 比 x86_64 便宜约 20%，且某些工作负载性能更好。需要确保依赖兼容 ARM 架构。",
            "【内存调优陷阱】不是内存越大越好。计算密集型任务增加内存有明显收益，I/O 密集型任务增加内存可能只增加成本不减少时间。"
        ],
        handsOnPath: [
            "部署 Lambda Power Tuning 工具到 AWS 账户。",
            "对一个生产函数运行 Power Tuning，找到最优内存配置。",
            "使用 esbuild 打包函数，对比打包前后的部署包大小和冷启动时间。",
            "将公共依赖抽取为 Lambda Layer，减少函数部署包大小。"
        ],
        selfCheck: [
            "AWS SDK v3 的模块化导入如何减少部署包大小？",
            "Lambda Power Tuning 工具如何找到最优内存配置？",
            "Lambda Layers 的使用场景和限制是什么？",
            "ARM64（Graviton2）架构相比 x86_64 有什么优势？"
        ],
        extensions: [
            "研究 Lambda 的 Provisioned Concurrency 与代码优化的组合策略。",
            "了解 Container Image 部署方式对冷启动的影响。",
            "探索 LLRT（Low Latency Runtime）等轻量 JavaScript 运行时。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html",
            "https://github.com/alexcasalboni/aws-lambda-power-tuning",
            "https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "w8-1": [
        {
            id: "sl-w8-1-q1",
            question: "Lambda 冷启动的 Init Duration 由哪三部分组成？",
            options: [
                "Download、Extract、Execute",
                "Runtime Init、Extension Init、Function Init",
                "Build、Deploy、Run",
                "Compile、Link、Load"
            ],
            answer: 1,
            rationale: "Init Duration = Runtime Init（运行时启动）+ Extension Init（扩展初始化）+ Function Init（用户代码全局作用域的初始化）。"
        },
        {
            id: "sl-w8-1-q2",
            question: "为什么 Java Lambda 函数的冷启动比 Python 慢很多？",
            options: [
                "Java 代码量更大",
                "JVM 启动和类加载需要额外时间",
                "Java 不支持 Lambda",
                "Python 使用了更好的算法"
            ],
            answer: 1,
            rationale: "Java 的 JVM 启动和类加载机制导致 Runtime Init 阶段耗时长。Python 解释器启动很快，无需编译和类加载。"
        },
        {
            id: "sl-w8-1-q3",
            question: "冷启动在 Lambda 总调用中通常占比多少？",
            options: [
                "50% 以上",
                "约 1-5%，取决于流量模式",
                "100%，每次调用都是冷启动",
                "0%，冷启动已被完全消除"
            ],
            answer: 1,
            rationale: "冷启动通常只占总调用的 1-5%。但对延迟敏感的 API，即使少量冷启动也可能影响用户体验 P99 延迟。"
        }
    ],
    "w8-2": [
        {
            id: "sl-w8-2-q1",
            question: "Provisioned Concurrency 可以配置在 Lambda 的哪个级别？",
            options: [
                "只能配置在 $LATEST",
                "只能配置在已发布的版本或别名上",
                "只能配置在函数级别",
                "可以配置在任何地方"
            ],
            answer: 1,
            rationale: "Provisioned Concurrency 只能配置在已发布的版本或别名上，不能配置在 $LATEST 上。这确保预热的代码和配置是确定的。"
        },
        {
            id: "sl-w8-2-q2",
            question: "当实际并发超过 Provisioned Concurrency 数量时会怎样？",
            options: [
                "请求被拒绝",
                "超出部分使用按需实例（会有冷启动）",
                "自动增加 Provisioned 数量",
                "请求排队等待"
            ],
            answer: 1,
            rationale: "超出 Provisioned 数量的请求使用普通按需实例处理，这些实例仍会经历冷启动。预置数量应覆盖正常流量峰值。"
        },
        {
            id: "sl-w8-2-q3",
            question: "如何根据流量模式自动调整 Provisioned Concurrency？",
            options: [
                "手动每小时调整",
                "结合 Application Auto Scaling 使用 Target Tracking 或 Scheduled Scaling",
                "Provisioned Concurrency 无法自动调整",
                "使用 Lambda 内部代码调整"
            ],
            answer: 1,
            rationale: "Application Auto Scaling 支持 Target Tracking（按使用率自动调整）和 Scheduled Scaling（按时间计划调整）两种策略自动管理预置并发。"
        }
    ],
    "w8-3": [
        {
            id: "sl-w8-3-q1",
            question: "Lambda SnapStart 的工作原理是什么？",
            options: [
                "提前编译代码为机器码",
                "对初始化后的执行环境创建快照，冷启动时从快照恢复",
                "使用更快的处理器",
                "跳过代码初始化步骤"
            ],
            answer: 1,
            rationale: "SnapStart 在发布版本时对完成初始化的执行环境创建 Firecracker 快照。后续冷启动直接从快照恢复内存和状态，跳过 Init 阶段。"
        },
        {
            id: "sl-w8-3-q2",
            question: "SnapStart 快照恢复后，为什么需要重新初始化网络连接？",
            options: [
                "快照不包含网络信息",
                "快照中保存的网络连接已经过期/断开",
                "AWS 要求重新连接",
                "为了提高安全性"
            ],
            answer: 1,
            rationale: "Init 阶段建立的 TCP 连接、数据库连接等在快照恢复时已经过期或被服务端关闭。必须在 afterRestore() 中重新建立连接。"
        },
        {
            id: "sl-w8-3-q3",
            question: "SnapStart 目前支持哪些 Lambda 运行时？",
            options: [
                "Python 和 Node.js",
                "Java 11 及以上版本",
                "所有运行时",
                "Go 和 Rust"
            ],
            answer: 1,
            rationale: "SnapStart 目前仅支持 Java 11 及以上版本（Corretto）的 Lambda 函数。Java 的 JVM 冷启动问题最严重，SnapStart 将其从数秒降到约 200ms。"
        }
    ],
    "w8-4": [
        {
            id: "sl-w8-4-q1",
            question: "AWS SDK v3（Node.js）的模块化导入如何优化冷启动？",
            options: [
                "加快网络请求速度",
                "只导入使用的服务客户端而非整个 SDK，减小部署包大小",
                "提供更多 API",
                "自动缓存请求"
            ],
            answer: 1,
            rationale: "SDK v3 支持只导入需要的服务（如 @aws-sdk/client-dynamodb），而非 V2 的整个 aws-sdk 包（~60MB）。减小部署包显著加快冷启动。"
        },
        {
            id: "sl-w8-4-q2",
            question: "Lambda Power Tuning 工具的核心功能是什么？",
            options: [
                "监控 Lambda 日志",
                "自动化测试不同内存配置，找到性能和成本的最优平衡点",
                "自动部署 Lambda 函数",
                "管理 Lambda 版本"
            ],
            answer: 1,
            rationale: "Power Tuning 以不同内存值（如 128MB-10GB）运行函数多次，绘制执行时间和成本曲线，找到帕累托最优的内存配置。"
        },
        {
            id: "sl-w8-4-q3",
            question: "Graviton2（arm64）架构的 Lambda 有什么优势？",
            options: [
                "支持更多运行时",
                "比 x86_64 便宜约 20%，且某些工作负载性能更好",
                "冷启动为零",
                "无需配置内存"
            ],
            answer: 1,
            rationale: "Graviton2 处理器的 Lambda 价格比 x86_64 低约 20%，计算密集型和内存密集型工作负载可能有更好性能。需确保依赖兼容 ARM。"
        }
    ]
}
