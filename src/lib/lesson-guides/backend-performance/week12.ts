import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week12Guides: Record<string, LessonGuide> = {
    "bp-w12-1": {
        lessonId: "bp-w12-1",
        background: [
            "【弹性伸缩定位】AWS 文档：'Auto Scaling helps you ensure that you have the correct number of Amazon EC2 instances available to handle the load for your application'——根据负载自动调整实例数量。",
            "【扩容触发指标】常用触发指标：CPU 使用率、内存使用率、请求队列长度、自定义业务指标（如订单处理速率）。单一指标可能误判，建议组合多个指标。",
            "【扩容延迟问题】从检测到负载增加到新实例就绪需要时间：指标采集延迟（1-5 分钟）+ 实例启动时间（1-5 分钟）+ 应用预热时间。总延迟可能 5-10 分钟。",
            "【预测性伸缩】AWS 和 GCP 支持基于历史模式的预测性伸缩。在预计的流量高峰前提前扩容，避免反应式伸缩的延迟问题。",
            "【冷却期设置】扩容后设置冷却期（Cooldown Period）避免指标波动导致反复扩缩容。典型值 5-10 分钟。缩容冷却期通常比扩容更长。",
            "【目标追踪策略】Target Tracking 策略自动调整实例数使指标维持在目标值（如 CPU 50%）。比简单阈值策略更智能，但需要设置合理的目标值。"
        ],
        keyDifficulties: [
            "【流量突刺应对】突发流量（如秒杀活动）可能超过扩容速度。应对策略：预扩容（提前增加实例）、队列缓冲、过载保护（限流、降级）。",
            "【缩容风险】缩容过快可能导致服务抖动。应设置较长的缩容冷却期，考虑最小实例数下限，使用优雅终止处理正在进行的请求。",
            "【混合伸缩策略】生产环境通常混合使用：基础负载用预留实例，预测性负载用定时伸缩，突发负载用反应式伸缩，极端峰值用 Spot 实例。",
            "【有状态服务伸缩】有状态服务（如数据库、消息队列）伸缩更复杂。需要考虑数据分片、连接迁移、一致性。通常依赖托管服务的自动伸缩。",
            "【成本与响应时间权衡】保持更多空闲实例可以更快响应负载增加，但增加成本。需要根据业务 SLO 和成本预算找到平衡点。"
        ],
        handsOnPath: [
            "配置 AWS Auto Scaling：创建启动模板，配置 Auto Scaling 组，设置最小/最大/期望实例数。",
            "设置 Target Tracking：配置 CPU 目标 50%，观察实例数量如何随负载变化自动调整。",
            "配置预测性伸缩：在 AWS Console 启用 Predictive Scaling，分析历史模式，配置提前扩容时间。",
            "实现优雅终止：配置 Lifecycle Hooks，在实例终止前完成正在处理的请求，注销服务发现。",
            "测试扩容速度：使用负载测试工具模拟流量突刺，测量从负载增加到新实例就绪的总时间。",
            "配置混合策略：基础 2 个 On-Demand 实例 + Spot 实例用于峰值 + 定时伸缩应对可预测高峰。",
            "监控伸缩事件：在 CloudWatch 创建仪表板监控伸缩活动、实例数量变化、相关指标趋势。"
        ],
        selfCheck: [
            "弹性伸缩的扩容延迟由哪些部分组成？如何减少总延迟？",
            "什么是预测性伸缩？它解决什么问题？",
            "冷却期（Cooldown Period）有什么作用？扩容和缩容的冷却期应该如何设置？",
            "如何应对超过扩容速度的流量突刺？",
            "Target Tracking 策略如何工作？与简单阈值策略有什么区别？",
            "有状态服务的弹性伸缩有什么特殊考虑？"
        ],
        extensions: [
            "学习 Kubernetes HPA（Horizontal Pod Autoscaler）和 VPA（Vertical Pod Autoscaler）的配合使用。",
            "研究 KEDA（Kubernetes Event-driven Autoscaling）基于事件驱动的自动伸缩。",
            "探索 Serverless 架构的自动伸缩模型，对比与传统 VM 伸缩的差异。",
            "学习 Spot 实例中断处理和自动替换策略。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
            "https://cloud.google.com/compute/docs/autoscaler",
            "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
            "https://keda.sh/"
        ]
    },
    "bp-w12-2": {
        lessonId: "bp-w12-2",
        background: [
            "【冷启动定义】冷启动（Cold Start）指应用从零开始启动到就绪的过程。包括：环境初始化、代码加载、依赖初始化、JIT 预热、缓存填充等。",
            "【Serverless 冷启动】AWS Lambda 冷启动：创建执行环境、下载代码、初始化运行时、执行初始化代码。冷启动可能增加数百毫秒到数秒延迟。",
            "【JVM 预热问题】JVM 应用启动后需要 JIT 编译热点代码才能达到最佳性能。预热期间（通常几分钟）性能显著低于稳态，P99 延迟可能高出数倍。",
            "【容器冷启动】容器启动包括：镜像拉取（如未缓存）、容器创建、进程启动、健康检查通过。镜像大小直接影响冷启动时间。",
            "【连接池预热】新启动的实例连接池为空。首批请求需要创建数据库/Redis 连接，增加延迟。应在启动时预创建连接。",
            "【缓存预热】新实例的本地缓存为空，首批请求可能触发缓存穿透。可以从外部缓存预加载热点数据，或渐进式引入流量。"
        ],
        keyDifficulties: [
            "【预置并发（Provisioned Concurrency）】AWS Lambda 的 Provisioned Concurrency 预先初始化执行环境，消除冷启动延迟，但需要持续付费。适合延迟敏感的场景。",
            "【镜像优化】减小容器镜像大小：使用 Alpine 基础镜像、多阶段构建、只包含运行时依赖。1GB 镜像拉取可能需要 30 秒以上。",
            "【渐进式流量引入】新实例启动后不立即接收全量流量，而是从小比例开始逐步增加。Envoy 的 Slow Start 功能支持此模式。",
            "【AOT 编译】GraalVM Native Image 将 Java 应用 AOT 编译为原生可执行文件，启动时间从秒级降到毫秒级，消除 JIT 预热问题。但牺牲运行时优化能力。",
            "【保活策略】为避免冷启动，可以保持最小实例数始终运行，或使用定时触发保持 Lambda 实例温暖。增加成本但减少延迟。"
        ],
        handsOnPath: [
            "测量容器冷启动时间：使用 time docker run 测量从启动到健康检查通过的时间，分析各阶段耗时。",
            "优化容器镜像：使用多阶段构建，基础镜像从 Ubuntu 切换到 Alpine，对比镜像大小和拉取时间。",
            "配置 Provisioned Concurrency：为延迟敏感的 Lambda 函数配置预置并发，对比冷启动和热启动延迟。",
            "实现连接池预热：在应用 readiness check 前执行数据库/Redis 连接创建和简单查询。",
            "配置渐进式流量：在 Kubernetes 中配置 Pod 就绪探针，使用 Envoy Slow Start 渐进引入流量。",
            "测试 GraalVM Native Image：将 Spring Boot 应用编译为 native image，对比启动时间和内存占用。",
            "监控冷启动频率：跟踪 Lambda Cold Start 指标或容器启动事件，分析冷启动对 P99 延迟的影响。"
        ],
        selfCheck: [
            "冷启动包含哪些阶段？各阶段如何优化？",
            "Serverless 冷启动的典型延迟是多少？如何减少？",
            "什么是 Provisioned Concurrency？它的权衡是什么？",
            "容器镜像大小如何影响冷启动？如何优化镜像大小？",
            "JVM 预热问题如何解决？AOT 编译有什么权衡？",
            "渐进式流量引入有什么好处？如何实现？"
        ],
        extensions: [
            "学习 SnapStart（AWS Lambda）利用快照加速 Java 冷启动。",
            "研究 Firecracker microVM 如何实现毫秒级虚拟机启动。",
            "探索 Distroless 镜像进一步减小镜像大小和攻击面。",
            "学习 Java CRaC（Coordinated Restore at Checkpoint）技术。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
            "https://www.graalvm.org/reference-manual/native-image/",
            "https://docs.docker.com/build/building/multi-stage/",
            "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html"
        ]
    },
    "bp-w12-3": {
        lessonId: "bp-w12-3",
        background: [
            "【性能优化的商业价值】Amazon 研究表明每 100ms 延迟降低销售额 1%；Google 发现额外 500ms 延迟减少 20% 搜索量。性能直接影响业务收入。",
            "【单位成本量化】Cost per Request = 月度云成本 / 月度请求数。优化代码减少 CPU 使用，可以减少实例数，直接降低成本。",
            "【性能优化 ROI】ROI = (年度成本节省 + 年度收入增加) / 优化投入。成本节省可量化；收入增加需要结合转化率提升估算。",
            "【碳排放考量】Green Software Foundation 提倡考虑软件的碳足迹。选择可再生能源区域、优化代码减少计算量、使用碳感知调度都可以降低碳排放。",
            "【技术债务成本】性能技术债务会随时间累积。延迟增加 → 用户流失 → 收入下降；资源浪费 → 成本上升。应定期进行性能审计和优化。",
            "【性能投资优先级】使用 Pareto 原则：20% 的代码造成 80% 的性能问题。应先测量识别瓶颈，优先优化 ROI 最高的部分。"
        ],
        keyDifficulties: [
            "【归因分析】性能改进带来的收入增加难以精确归因。需要 A/B 测试对比或使用历史数据的相关性分析。",
            "【隐性成本识别】除直接资源费用外，还有：数据传输费、API 调用费、存储 IOPS 费、支持费用。跨区域/跨 AZ 传输尤其昂贵。",
            "【过度优化风险】Premature optimization is the root of all evil'。过度优化可能投入产出不成比例，应先测量、识别瓶颈、验证假设。",
            "【碳足迹量化】Software Carbon Intensity (SCI) = (E × I + M) / R，其中 E 是能耗，I 是碳强度，M 是硬件制造碳排放，R 是功能单元。",
            "【性能与可靠性权衡】追求极致性能可能牺牲可靠性（如减少冗余）。应在性能、可靠性、成本之间找到平衡。"
        ],
        handsOnPath: [
            "计算单位成本：统计月度云账单和请求量，计算 Cost per Request。跟踪趋势和异常。",
            "建立成本仪表板：使用 AWS Cost Explorer 或 Kubecost 创建仪表板，按服务/团队/环境分类成本。",
            "量化优化收益：记录优化前后的资源使用量，计算年度成本节省。将技术指标转化为商业指标。",
            "配置成本告警：设置预算告警，成本超过阈值时通知。配置异常检测发现成本突刺。",
            "计算碳足迹：使用 Cloud Carbon Footprint 工具估算云资源的碳排放。识别高碳排放的服务。",
            "建立性能预算流程：将性能指标纳入 CI/CD，设置门禁阻止性能回归。定期审计和优化。",
            "编写优化 Business Case：将技术优化项目转化为商业提案，量化预期收益和投入成本。"
        ],
        selfCheck: [
            "如何量化性能优化的商业价值？有哪些研究数据支持？",
            "如何计算性能优化的 ROI？需要考虑哪些因素？",
            "什么是 SCI（Software Carbon Intensity）？如何降低软件的碳足迹？",
            "除直接资源费用外，还有哪些隐性云成本？",
            "如何向非技术利益相关者说明性能优化的价值？",
            "如何避免过度优化的陷阱？"
        ],
        extensions: [
            "学习 FinOps Foundation 的完整框架，包括 Inform、Optimize、Operate 三个阶段。",
            "研究 Carbon Aware SDK，实现碳感知的工作负载调度。",
            "探索 Cloud Sustainability Dashboard（AWS/GCP）的使用。",
            "学习如何构建 Cost Anomaly Detection 系统自动发现成本异常。"
        ],
        sourceUrls: [
            "https://www.finops.org/framework/",
            "https://greensoftware.foundation/",
            "https://www.cloudcarbonfootprint.org/",
            "https://aws.amazon.com/blogs/aws/aws-carbon-footprint-tool/"
        ]
    }
}

export const week12Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w12-1": [
        {
            id: "bp-w12-1-q1",
            question: "AWS Auto Scaling 的主要功能是什么？",
            options: [
                "增加安全性",
                "根据负载自动调整实例数量",
                "压缩数据",
                "加速网络"
            ],
            answer: 1,
            rationale: "AWS 文档：'Auto Scaling helps you ensure that you have the correct number of Amazon EC2 instances available to handle the load'。"
        },
        {
            id: "bp-w12-1-q2",
            question: "弹性伸缩的扩容延迟由哪些部分组成？",
            options: [
                "只有网络延迟",
                "指标采集延迟 + 实例启动时间 + 应用预热时间",
                "只有实例启动时间",
                "只有应用预热时间"
            ],
            answer: 1,
            rationale: "扩容延迟包括：指标采集延迟（1-5 分钟）+ 实例启动（1-5 分钟）+ 应用预热。总延迟可能 5-10 分钟。"
        },
        {
            id: "bp-w12-1-q3",
            question: "什么是预测性伸缩（Predictive Scaling）？",
            options: [
                "随机扩容",
                "基于历史模式预测负载，提前扩容",
                "只在流量下降时缩容",
                "手动扩容"
            ],
            answer: 1,
            rationale: "预测性伸缩基于历史模式预测未来负载，在预计的流量高峰前提前扩容，避免反应式伸缩的延迟。"
        },
        {
            id: "bp-w12-1-q4",
            question: "冷却期（Cooldown Period）有什么作用？",
            options: [
                "降低服务器温度",
                "避免指标波动导致反复扩缩容",
                "加速扩容",
                "减少成本"
            ],
            answer: 1,
            rationale: "冷却期防止指标短期波动导致反复扩缩容。扩容后等待冷却期再评估是否需要进一步调整。"
        },
        {
            id: "bp-w12-1-q5",
            question: "如何应对超过扩容速度的流量突刺？",
            options: [
                "无法应对",
                "预扩容、队列缓冲、过载保护（限流、降级）",
                "只能增加实例",
                "关闭服务"
            ],
            answer: 1,
            rationale: "应对策略：预扩容（提前增加实例）、队列缓冲削峰、过载保护（限流、降级）多管齐下。"
        },
        {
            id: "bp-w12-1-q6",
            question: "Target Tracking 策略如何工作？",
            options: [
                "手动设置实例数",
                "自动调整实例数使指标维持在目标值",
                "只能扩容不能缩容",
                "固定实例数"
            ],
            answer: 1,
            rationale: "Target Tracking 自动调整实例数使指标（如 CPU）维持在目标值。比简单阈值策略更智能。"
        },
        {
            id: "bp-w12-1-q7",
            question: "缩容冷却期应该如何设置？",
            options: [
                "与扩容相同",
                "通常比扩容冷却期更长，避免服务抖动",
                "尽可能短",
                "不需要冷却期"
            ],
            answer: 1,
            rationale: "缩容冷却期通常比扩容更长，避免过快缩容导致服务抖动。还应设置最小实例数下限。"
        },
        {
            id: "bp-w12-1-q8",
            question: "有状态服务的弹性伸缩有什么特殊考虑？",
            options: [
                "与无状态服务相同",
                "需要考虑数据分片、连接迁移、一致性",
                "不能伸缩",
                "只能手动伸缩"
            ],
            answer: 1,
            rationale: "有状态服务（如数据库）伸缩更复杂。需要考虑数据分片、连接迁移、一致性。通常依赖托管服务。"
        },
        {
            id: "bp-w12-1-q9",
            question: "混合伸缩策略如何配置？",
            options: [
                "只用一种策略",
                "基础用预留实例，预测性用定时伸缩，突发用反应式，极端用 Spot",
                "全部用 Spot 实例",
                "全部用 On-Demand"
            ],
            answer: 1,
            rationale: "生产环境通常混合使用：基础负载用预留实例，预测性负载用定时伸缩，突发用反应式，极端峰值用 Spot。"
        },
        {
            id: "bp-w12-1-q10",
            question: "什么是优雅终止（Graceful Termination）？",
            options: [
                "立即杀死进程",
                "在实例终止前完成正在处理的请求，注销服务发现",
                "重启服务",
                "备份数据"
            ],
            answer: 1,
            rationale: "优雅终止在实例终止前给应用时间完成正在处理的请求，注销服务发现，避免请求丢失。"
        },
        {
            id: "bp-w12-1-q11",
            question: "常用的扩容触发指标有哪些？",
            options: [
                "只有 CPU",
                "CPU 使用率、内存使用率、请求队列长度、自定义业务指标",
                "只有内存",
                "只有磁盘"
            ],
            answer: 1,
            rationale: "常用指标：CPU、内存、请求队列长度、自定义指标（如订单处理速率）。组合多个指标更准确。"
        },
        {
            id: "bp-w12-1-q12",
            question: "保持更多空闲实例有什么权衡？",
            options: [
                "无权衡",
                "可以更快响应负载增加，但增加成本",
                "减少成本",
                "降低性能"
            ],
            answer: 1,
            rationale: "保持更多空闲实例可以更快响应负载增加，减少扩容延迟，但增加成本。需要根据 SLO 和预算平衡。"
        }
    ],
    "bp-w12-2": [
        {
            id: "bp-w12-2-q1",
            question: "冷启动（Cold Start）包含哪些阶段？",
            options: [
                "只有代码加载",
                "环境初始化、代码加载、依赖初始化、JIT 预热、缓存填充",
                "只有网络连接",
                "只有数据库连接"
            ],
            answer: 1,
            rationale: "冷启动包括：环境初始化、代码加载、依赖初始化、JIT 预热（JVM）、缓存填充、连接池预热等。"
        },
        {
            id: "bp-w12-2-q2",
            question: "AWS Lambda 冷启动的典型延迟是多少？",
            options: [
                "小于 1ms",
                "数百毫秒到数秒",
                "数分钟",
                "数小时"
            ],
            answer: 1,
            rationale: "Lambda 冷启动可能增加数百毫秒到数秒延迟，取决于运行时、代码大小、依赖初始化等因素。"
        },
        {
            id: "bp-w12-2-q3",
            question: "什么是 Provisioned Concurrency？",
            options: [
                "限制并发数",
                "预先初始化 Lambda 执行环境，消除冷启动延迟",
                "增加内存",
                "减少超时"
            ],
            answer: 1,
            rationale: "Provisioned Concurrency 预先初始化指定数量的执行环境，请求时直接使用，消除冷启动延迟。"
        },
        {
            id: "bp-w12-2-q4",
            question: "容器镜像大小如何影响冷启动？",
            options: [
                "无影响",
                "镜像越大，拉取时间越长，冷启动越慢",
                "镜像越大越快",
                "只影响存储"
            ],
            answer: 1,
            rationale: "镜像大小直接影响拉取时间。1GB 镜像拉取可能需要 30 秒以上。应使用小镜像和多阶段构建。"
        },
        {
            id: "bp-w12-2-q5",
            question: "GraalVM Native Image 如何解决 JVM 冷启动问题？",
            options: [
                "增加 JIT 编译速度",
                "AOT 编译为原生可执行文件，启动时间毫秒级，无需预热",
                "增加内存",
                "使用更快的 JDK"
            ],
            answer: 1,
            rationale: "GraalVM Native Image 将 Java 应用 AOT 编译为原生可执行文件，启动时间从秒级降到毫秒级。"
        },
        {
            id: "bp-w12-2-q6",
            question: "渐进式流量引入有什么好处？",
            options: [
                "减少成本",
                "给新实例时间预热，避免启动后立即高负载影响性能",
                "增加安全性",
                "减少代码"
            ],
            answer: 1,
            rationale: "新实例启动后从小比例流量开始逐步增加，给应用时间完成 JIT 预热、缓存填充等，避免冷状态承受高负载。"
        },
        {
            id: "bp-w12-2-q7",
            question: "连接池预热应该在什么时候进行？",
            options: [
                "接收流量后",
                "应用 readiness check 通过前",
                "应用关闭时",
                "不需要预热"
            ],
            answer: 1,
            rationale: "应在应用就绪检查通过前预创建数据库/Redis 连接，避免首批请求需要等待连接创建。"
        },
        {
            id: "bp-w12-2-q8",
            question: "如何优化容器镜像大小？",
            options: [
                "使用更大的基础镜像",
                "使用 Alpine 基础镜像、多阶段构建、只包含运行时依赖",
                "包含更多工具",
                "不压缩镜像"
            ],
            answer: 1,
            rationale: "优化策略：使用 Alpine 等小基础镜像、多阶段构建分离编译和运行时、只包含必要的运行时依赖。"
        },
        {
            id: "bp-w12-2-q9",
            question: "Provisioned Concurrency 的权衡是什么？",
            options: [
                "无权衡",
                "消除冷启动延迟，但需要持续付费即使没有请求",
                "增加冷启动时间",
                "减少性能"
            ],
            answer: 1,
            rationale: "Provisioned Concurrency 预先初始化环境消除冷启动，但需要为保持这些环境持续付费，即使没有请求。"
        },
        {
            id: "bp-w12-2-q10",
            question: "如何保持 Lambda 函数温暖（Warm）避免冷启动？",
            options: [
                "增加内存",
                "使用定时触发定期调用 Lambda，保持实例活跃",
                "减少代码大小",
                "禁用日志"
            ],
            answer: 1,
            rationale: "可以使用 CloudWatch Events 定时触发 Lambda，保持执行环境活跃，避免因闲置被回收导致冷启动。"
        },
        {
            id: "bp-w12-2-q11",
            question: "JVM 预热期间的性能特点是什么？",
            options: [
                "与稳态相同",
                "性能显著低于稳态，P99 延迟可能高出数倍",
                "性能更好",
                "无区别"
            ],
            answer: 1,
            rationale: "JVM 应用启动后需要 JIT 编译热点代码。预热期间（通常几分钟）性能显著低于稳态，P99 延迟可能高出数倍。"
        },
        {
            id: "bp-w12-2-q12",
            question: "什么是 AWS Lambda SnapStart？",
            options: [
                "加速代码部署",
                "利用快照技术加速 Java Lambda 冷启动",
                "加速日志记录",
                "加速网络连接"
            ],
            answer: 1,
            rationale: "SnapStart 在初始化后创建快照，冷启动时从快照恢复，显著减少 Java Lambda 的冷启动时间。"
        }
    ],
    "bp-w12-3": [
        {
            id: "bp-w12-3-q1",
            question: "Amazon 研究表明每 100ms 延迟对销售额有什么影响？",
            options: [
                "无影响",
                "降低销售额约 1%",
                "增加销售额",
                "降低 10%"
            ],
            answer: 1,
            rationale: "Amazon 研究表明每 100ms 延迟降低销售额 1%。Google 发现额外 500ms 延迟减少 20% 搜索量。性能直接影响业务。"
        },
        {
            id: "bp-w12-3-q2",
            question: "如何计算性能优化的 ROI？",
            options: [
                "无法计算",
                "ROI = (年度成本节省 + 年度收入增加) / 优化投入",
                "只计算成本",
                "只计算收入"
            ],
            answer: 1,
            rationale: "ROI = (年度成本节省 + 年度收入增加) / 优化投入。成本节省可量化；收入增加需结合转化率估算。"
        },
        {
            id: "bp-w12-3-q3",
            question: "Cost per Request 如何计算？",
            options: [
                "月度请求数 / 月度成本",
                "月度云成本 / 月度请求数",
                "年度成本 / 日请求数",
                "无法计算"
            ],
            answer: 1,
            rationale: "Cost per Request = 月度云成本 / 月度请求数。这是单位成本的核心指标之一。"
        },
        {
            id: "bp-w12-3-q4",
            question: "SCI（Software Carbon Intensity）的公式是什么？",
            options: [
                "SCI = E × I",
                "SCI = (E × I + M) / R",
                "SCI = M / R",
                "SCI = E + M"
            ],
            answer: 1,
            rationale: "SCI = (E × I + M) / R，其中 E 是能耗，I 是碳强度，M 是硬件制造碳排放，R 是功能单元。"
        },
        {
            id: "bp-w12-3-q5",
            question: "除直接资源费用外，还有哪些隐性云成本？",
            options: [
                "只有资源费用",
                "数据传输费、API 调用费、存储 IOPS 费、支持费用",
                "无隐性成本",
                "只有网络费用"
            ],
            answer: 1,
            rationale: "除直接资源费用外，还有数据传输费、API 调用费、存储 IOPS 费、支持费用等。跨区域传输尤其昂贵。"
        },
        {
            id: "bp-w12-3-q6",
            question: "为什么说'Premature optimization is the root of all evil'？",
            options: [
                "优化总是有害的",
                "过度优化可能投入产出不成比例，应先测量识别瓶颈",
                "不需要优化",
                "只有坏的优化"
            ],
            answer: 1,
            rationale: "过度优化可能投入产出不成比例。应先测量、识别瓶颈、验证假设，优先优化 ROI 最高的部分。"
        },
        {
            id: "bp-w12-3-q7",
            question: "如何降低软件的碳足迹？",
            options: [
                "无法降低",
                "选择可再生能源区域、优化代码减少计算量、使用碳感知调度",
                "增加服务器",
                "使用更多资源"
            ],
            answer: 1,
            rationale: "Green Software Foundation 提倡：选择可再生能源区域部署、优化代码减少计算量、使用碳感知调度。"
        },
        {
            id: "bp-w12-3-q8",
            question: "如何向非技术利益相关者说明性能优化的价值？",
            options: [
                "只谈技术指标",
                "将技术指标转化为商业指标（成本节省、收入增加、用户满意度）",
                "不需要说明",
                "只谈代码质量"
            ],
            answer: 1,
            rationale: "将技术优化转化为商业语言：成本节省多少、转化率提升多少、用户满意度改善多少。量化 ROI。"
        },
        {
            id: "bp-w12-3-q9",
            question: "如何使用 Pareto 原则进行性能优化？",
            options: [
                "优化所有代码",
                "20% 的代码造成 80% 的性能问题，优先优化这 20%",
                "随机优化",
                "只优化新代码"
            ],
            answer: 1,
            rationale: "Pareto 原则：20% 的代码造成 80% 的性能问题。应先测量识别瓶颈，优先优化影响最大的部分。"
        },
        {
            id: "bp-w12-3-q10",
            question: "性能技术债务有什么影响？",
            options: [
                "无影响",
                "延迟增加导致用户流失、资源浪费导致成本上升",
                "只影响代码质量",
                "只影响开发速度"
            ],
            answer: 1,
            rationale: "性能技术债务会累积：延迟增加 → 用户流失 → 收入下降；资源浪费 → 成本上升。应定期审计和优化。"
        },
        {
            id: "bp-w12-3-q11",
            question: "如何配置成本异常检测？",
            options: [
                "手动检查账单",
                "使用 AWS Cost Anomaly Detection 或自定义规则自动发现成本突刺",
                "只看月度总额",
                "不需要检测"
            ],
            answer: 1,
            rationale: "使用 AWS Cost Anomaly Detection、GCP Budgets Alerts 或自定义规则自动检测成本异常和突刺。"
        },
        {
            id: "bp-w12-3-q12",
            question: "Cloud Carbon Footprint 工具的作用是什么？",
            options: [
                "加速云服务",
                "估算云资源的碳排放，帮助识别高碳排放服务",
                "减少成本",
                "增加安全性"
            ],
            answer: 1,
            rationale: "Cloud Carbon Footprint 是开源工具，可以估算云资源的碳排放，帮助识别和优化高碳排放的服务。"
        }
    ]
}
