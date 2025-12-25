import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week15Guides: Record<string, LessonGuide> = {
    "bp-w15-1": {
        lessonId: "bp-w15-1",
        background: [
            "【混沌工程定义】Netflix 定义：'Chaos Engineering is the discipline of experimenting on a system in order to build confidence in the system's capability to withstand turbulent conditions in production.'",
            "【混沌工程目标】主动发现系统弱点，在生产环境出问题前修复。验证假设：系统在特定故障下能否保持正常服务。",
            "【故障注入类型】网络故障（延迟、丢包、分区）、资源故障（CPU 满载、内存耗尽、磁盘满）、应用故障（进程崩溃、依赖不可用）、基础设施故障（节点宕机、AZ 故障）。",
            "【实验流程】定义稳态假设 → 引入故障变量 → 运行实验 → 验证假设 → 分析结果。实验应该是可控的、可逆的。",
            "【爆炸半径控制】从小范围开始（单个 Pod、少量流量），逐步扩大。设置自动终止条件，监控关键指标，随时准备回滚。",
            "【Game Day 演练】定期组织跨团队的故障演练。模拟真实故障场景，验证告警、响应流程、恢复能力。事后复盘改进。"
        ],
        keyDifficulties: [
            "【生产环境实验风险】在生产环境做混沌实验有真实影响用户的风险。需要充分的监控、自动终止机制、快速回滚能力。从测试环境开始。",
            "【稳态定义困难】如何定义'正常'？需要明确的 SLO/SLI 作为基准。延迟 P99 < 200ms、错误率 < 0.1% 等量化指标。",
            "【组织阻力】业务方可能担心故障演练影响服务。需要建立信任，展示演练价值，选择低峰期，做好沟通。",
            "【自动化与持续性】一次性演练价值有限。应该将混沌实验集成到 CI/CD，持续验证系统韧性。",
            "【复杂故障模拟】单点故障容易模拟，级联故障、多重故障更难。需要渐进式增加实验复杂度。"
        ],
        handsOnPath: [
            "部署 Chaos Mesh：在 Kubernetes 集群安装 Chaos Mesh，熟悉 Dashboard 和 CRD 配置。",
            "注入网络延迟：对指定服务注入 100ms 延迟，观察上游服务的超时和重试行为。",
            "模拟 Pod 故障：随机杀死服务 Pod，验证自动恢复和负载均衡。",
            "CPU 压力测试：注入 CPU 压力到 80%，观察服务性能退化和自动扩容响应。",
            "网络分区实验：模拟服务与数据库的网络分区，验证超时和熔断机制。",
            "设计 Game Day：规划一次完整的故障演练，包括场景设计、监控准备、回滚方案、参与人员。",
            "集成 CI/CD：在部署流水线中加入混沌测试阶段，自动验证新版本的韧性。"
        ],
        selfCheck: [
            "混沌工程的核心目标是什么？",
            "如何控制混沌实验的爆炸半径？",
            "什么是稳态假设？如何定义？",
            "生产环境做混沌实验需要哪些前提条件？",
            "Game Day 演练的流程是什么？",
            "如何将混沌工程与 CI/CD 集成？"
        ],
        extensions: [
            "学习 Netflix 的 Chaos Monkey 和 Simian Army 工具集。",
            "研究 AWS Fault Injection Simulator (FIS) 的托管服务。",
            "探索 LitmusChaos 的实验库和社区生态。",
            "学习如何设计和运营 RED Team 安全演练。"
        ],
        sourceUrls: [
            "https://principlesofchaos.org/",
            "https://chaos-mesh.org/docs/",
            "https://netflix.github.io/chaosmonkey/",
            "https://aws.amazon.com/fis/"
        ]
    },
    "bp-w15-2": {
        lessonId: "bp-w15-2",
        background: [
            "【故障注入工具对比】Chaos Mesh（K8s 原生）、LitmusChaos（丰富实验库）、Gremlin（商业 SaaS）、AWS FIS（云原生）。选择取决于环境和需求。",
            "【网络故障注入】使用 tc (traffic control) 或 iptables 在内核层面注入延迟、丢包、带宽限制。Chaos Mesh 封装了这些操作。",
            "【进程故障注入】kill 进程、OOM Kill 模拟、信号注入（SIGSTOP、SIGKILL）。验证进程管理器和健康检查的响应。",
            "【资源压力注入】stress-ng 工具可以对 CPU、内存、I/O、网络施加压力。验证资源限制和自动扩容。",
            "【时钟偏移注入】NTP 同步失败、时钟跳变可能导致分布式系统问题。模拟时钟偏移验证时间敏感逻辑。",
            "【DNS 故障注入】DNS 解析失败、解析延迟是常见故障。模拟 DNS 问题验证缓存和重试机制。"
        ],
        keyDifficulties: [
            "【精确控制注入范围】需要精确选择注入目标（特定 Pod、特定流量比例），避免影响无关服务。使用标签选择器和流量匹配。",
            "【注入时机控制】支持定时触发、周期性触发、手动触发。生产环境应选择低峰期，有人值守。",
            "【监控与自动终止】实验期间需要密切监控 SLI。设置自动终止条件：错误率超阈值、延迟超标准自动停止实验。",
            "【实验结果分析】记录实验参数、系统响应、监控数据。分析根因、记录发现、跟踪修复。建立实验知识库。",
            "【多集群/多云环境】在复杂环境中协调故障注入更困难。需要统一的控制平面和可观测性。"
        ],
        handsOnPath: [
            "使用 tc 命令注入延迟：tc qdisc add dev eth0 root netem delay 100ms 20ms，理解底层原理。",
            "配置 Chaos Mesh NetworkChaos：编写 YAML 定义网络故障，指定目标 Pod 和故障参数。",
            "使用 stress-ng：stress-ng --cpu 4 --timeout 60s 模拟 CPU 压力，观察容器资源限制效果。",
            "配置实验调度：使用 Chaos Mesh 的 Schedule 功能设置周期性实验。",
            "设置自动终止：配置监控告警触发实验终止，如 Prometheus AlertManager 联动。",
            "记录实验报告：使用 Chaos Mesh Dashboard 或 Gremlin 导出实验报告，分析结果。",
            "构建实验库：将常用实验场景模板化，建立团队共享的实验库。"
        ],
        selfCheck: [
            "常用的故障注入工具有哪些？各有什么特点？",
            "如何使用 tc 命令注入网络延迟？",
            "如何精确控制故障注入的目标范围？",
            "实验期间需要监控哪些指标？",
            "如何设置自动终止条件？",
            "实验结果应该如何记录和分析？"
        ],
        extensions: [
            "学习 tc (traffic control) 的高级用法，如令牌桶限速。",
            "研究 Toxiproxy 在应用层模拟网络故障。",
            "探索使用 eBPF 实现更精细的故障注入。",
            "学习 ChaosBlade 阿里开源的混沌工程工具。"
        ],
        sourceUrls: [
            "https://chaos-mesh.org/docs/simulate-network-chaos-on-kubernetes/",
            "https://litmuschaos.io/",
            "https://www.gremlin.com/docs/",
            "https://github.com/chaosblade-io/chaosblade"
        ]
    },
    "bp-w15-3": {
        lessonId: "bp-w15-3",
        background: [
            "【分布式追踪挑战】微服务架构下，一个请求可能经过数十个服务。定位问题需要将所有服务的日志和指标关联起来。",
            "【追踪数据量】高流量系统每秒产生海量 Span。全量采集不现实，需要采样策略平衡完整性和成本。",
            "【采样策略类型】头部采样（Head-based）在请求入口决定；尾部采样（Tail-based）在请求完成后根据特征决定。",
            "【头部采样】简单高效，在入口按比例采样。缺点：可能错过有价值的异常请求。适合高流量常规监控。",
            "【尾部采样】收集完整请求后根据延迟、错误等特征决定是否保留。可以 100% 捕获异常。缺点：需要缓存完整请求，复杂度高。",
            "【自适应采样】根据服务负载、错误率动态调整采样率。高负载时降低采样率，异常时提高采样率。"
        ],
        keyDifficulties: [
            "【采样偏差】固定比例采样可能错过低频但重要的请求类型。应结合业务特征设计分层采样策略。",
            "【尾部采样实现】需要在收集器层面缓存和决策，增加资源消耗和延迟。OpenTelemetry Collector 支持 tail_sampling 处理器。",
            "【跨服务采样一致性】一个请求的所有 Span 应该有相同的采样决策。需要通过 TraceID 传递采样标记。",
            "【存储成本优化】Trace 数据量大，存储成本高。使用分层存储：热数据 SSD、温数据 HDD、冷数据对象存储。设置合理的保留策略。",
            "【高基数问题】按用户 ID、请求 ID 等高基数维度聚合会导致存储爆炸。需要控制标签基数。"
        ],
        handsOnPath: [
            "配置头部采样：在 OpenTelemetry SDK 中设置采样率，如 TraceIdRatioBased(0.1) 采样 10%。",
            "实现尾部采样：在 OpenTelemetry Collector 配置 tail_sampling 处理器，按延迟和错误状态采样。",
            "配置分层采样：对关键服务全量采样，对高流量服务低比例采样。",
            "设置 Trace 保留策略：在 Jaeger 或 Tempo 配置数据保留时间，如热数据 7 天、冷数据 30 天。",
            "监控采样效果：跟踪实际采样率、存储量、查询性能，调整策略。",
            "实现自适应采样：基于服务的错误率动态调整采样率，错误率高时提升采样。",
            "优化 Span 属性：移除不必要的高基数属性，减少存储开销。"
        ],
        selfCheck: [
            "头部采样和尾部采样的区别是什么？各适合什么场景？",
            "尾部采样需要什么额外资源？",
            "如何保证跨服务的采样一致性？",
            "Trace 存储成本如何优化？",
            "什么是高基数问题？如何避免？",
            "自适应采样的原理是什么？"
        ],
        extensions: [
            "学习 Grafana Tempo 的无索引设计如何降低存储成本。",
            "研究 eBPF 自动化追踪减少应用层埋点。",
            "探索使用机器学习检测追踪数据中的异常模式。",
            "学习 OpenTelemetry 的 Span Links 关联异步操作。"
        ],
        sourceUrls: [
            "https://opentelemetry.io/docs/concepts/sampling/",
            "https://www.jaegertracing.io/docs/latest/sampling/",
            "https://grafana.com/docs/tempo/latest/",
            "https://opentelemetry.io/docs/collector/configuration/"
        ]
    }
}

export const week15Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w15-1": [
        {
            id: "bp-w15-1-q1",
            question: "混沌工程的核心目标是什么？",
            options: [
                "破坏系统",
                "主动发现系统弱点，在生产问题前修复，建立系统信心",
                "测试新功能",
                "性能测试"
            ],
            answer: 1,
            rationale: "混沌工程通过主动注入故障来发现系统弱点，在真实故障发生前修复，建立对系统韧性的信心。"
        },
        {
            id: "bp-w15-1-q2",
            question: "如何控制混沌实验的爆炸半径？",
            options: [
                "直接在生产全量运行",
                "从小范围开始，逐步扩大，设置自动终止条件",
                "只在开发环境运行",
                "不需要控制"
            ],
            answer: 1,
            rationale: "从单个 Pod、少量流量开始，设置自动终止条件，监控关键指标，逐步扩大范围。"
        },
        {
            id: "bp-w15-1-q3",
            question: "什么是稳态假设？",
            options: [
                "系统永远稳定",
                "系统正常状态的量化定义，如 P99 延迟、错误率等 SLI",
                "不会发生故障",
                "性能最高的状态"
            ],
            answer: 1,
            rationale: "稳态假设是用 SLI 量化定义的系统正常状态，如延迟 P99 < 200ms、错误率 < 0.1%。"
        },
        {
            id: "bp-w15-1-q4",
            question: "生产环境做混沌实验需要哪些前提条件？",
            options: [
                "无需前提",
                "充分的监控、自动终止机制、快速回滚能力、低峰期执行",
                "只需要领导同意",
                "只需要备份数据"
            ],
            answer: 1,
            rationale: "生产混沌实验需要：完善的监控、SLI 告警、自动终止条件、回滚方案、选择低峰期、有人值守。"
        },
        {
            id: "bp-w15-1-q5",
            question: "Game Day 演练是什么？",
            options: [
                "游戏日",
                "定期组织的跨团队故障演练，验证响应流程和恢复能力",
                "只是测试",
                "只看监控"
            ],
            answer: 1,
            rationale: "Game Day 是有组织的故障演练，模拟真实故障场景，验证告警、响应流程、恢复能力。"
        },
        {
            id: "bp-w15-1-q6",
            question: "常见的故障注入类型有哪些？",
            options: [
                "只有网络故障",
                "网络故障、资源故障、应用故障、基础设施故障",
                "只有应用故障",
                "只有硬件故障"
            ],
            answer: 1,
            rationale: "故障类型包括：网络（延迟、分区）、资源（CPU、内存）、应用（进程崩溃）、基础设施（节点宕机）。"
        },
        {
            id: "bp-w15-1-q7",
            question: "混沌实验的基本流程是什么？",
            options: [
                "直接注入故障",
                "定义稳态假设 → 引入故障 → 运行实验 → 验证假设 → 分析结果",
                "只看结果",
                "随机操作"
            ],
            answer: 1,
            rationale: "科学的实验流程：定义稳态假设、设计故障变量、控制范围运行、验证假设、分析改进。"
        },
        {
            id: "bp-w15-1-q8",
            question: "为什么需要将混沌工程集成到 CI/CD？",
            options: [
                "不需要集成",
                "持续验证系统韧性，一次性演练价值有限",
                "加速部署",
                "减少测试"
            ],
            answer: 1,
            rationale: "一次性演练无法持续保证系统韧性，集成到 CI/CD 可以在每次变更后自动验证。"
        },
        {
            id: "bp-w15-1-q9",
            question: "Chaos Mesh 的主要特点是什么？",
            options: [
                "只支持 AWS",
                "Kubernetes 原生，通过 CRD 定义实验",
                "只支持网络故障",
                "商业软件"
            ],
            answer: 1,
            rationale: "Chaos Mesh 是 CNCF 项目，Kubernetes 原生，使用 CRD 声明式定义各类故障实验。"
        },
        {
            id: "bp-w15-1-q10",
            question: "如何克服组织对混沌工程的阻力？",
            options: [
                "强制执行",
                "建立信任、展示价值、选择低峰期、做好沟通",
                "只在测试环境",
                "不做混沌工程"
            ],
            answer: 1,
            rationale: "通过小范围成功案例建立信任，展示演练发现的问题和价值，选择低风险时段，充分沟通。"
        },
        {
            id: "bp-w15-1-q11",
            question: "模拟级联故障有什么挑战？",
            options: [
                "很简单",
                "单点故障易模拟，级联故障需要渐进式增加实验复杂度",
                "无法模拟",
                "只能在生产环境"
            ],
            answer: 1,
            rationale: "单点故障相对简单，级联故障涉及多个组件的连锁反应，需要逐步增加复杂度。"
        },
        {
            id: "bp-w15-1-q12",
            question: "混沌实验应该是什么性质的？",
            options: [
                "不可逆的",
                "可控的、可逆的、可观测的",
                "随机的",
                "持续的"
            ],
            answer: 1,
            rationale: "实验应该是可控的（明确范围）、可逆的（能够停止和恢复）、可观测的（充分监控）。"
        }
    ],
    "bp-w15-2": [
        {
            id: "bp-w15-2-q1",
            question: "常用的混沌工程工具有哪些？",
            options: [
                "只有 Chaos Monkey",
                "Chaos Mesh、LitmusChaos、Gremlin、AWS FIS 等",
                "只有商业工具",
                "只有开源工具"
            ],
            answer: 1,
            rationale: "开源：Chaos Mesh（K8s）、LitmusChaos；商业：Gremlin；云服务：AWS FIS、Azure Chaos Studio。"
        },
        {
            id: "bp-w15-2-q2",
            question: "tc 命令用于什么？",
            options: [
                "文件传输",
                "Linux 流量控制，可以注入网络延迟、丢包、带宽限制",
                "时间同步",
                "进程管理"
            ],
            answer: 1,
            rationale: "tc (traffic control) 是 Linux 内核流量控制工具，可以模拟延迟、丢包、限速等网络条件。"
        },
        {
            id: "bp-w15-2-q3",
            question: "如何精确控制故障注入的目标范围？",
            options: [
                "无法精确控制",
                "使用标签选择器和流量匹配规则",
                "全部注入",
                "随机选择"
            ],
            answer: 1,
            rationale: "使用 Kubernetes 标签选择器选择特定 Pod，使用流量匹配规则选择特定请求。"
        },
        {
            id: "bp-w15-2-q4",
            question: "stress-ng 工具的作用是什么？",
            options: [
                "网络测试",
                "对 CPU、内存、I/O 等资源施加压力",
                "日志分析",
                "监控告警"
            ],
            answer: 1,
            rationale: "stress-ng 是资源压力测试工具，可以对 CPU、内存、磁盘 I/O、网络等施加可控压力。"
        },
        {
            id: "bp-w15-2-q5",
            question: "实验期间需要监控哪些指标？",
            options: [
                "只监控 CPU",
                "SLI（延迟、错误率、吞吐量）、资源使用、依赖健康状态",
                "只监控日志",
                "不需要监控"
            ],
            answer: 1,
            rationale: "需要监控：核心 SLI（延迟、错误率）、资源使用（CPU、内存）、依赖服务健康状态。"
        },
        {
            id: "bp-w15-2-q6",
            question: "如何设置实验的自动终止条件？",
            options: [
                "手动终止",
                "配置监控告警触发终止，如错误率超阈值自动停止",
                "不设置",
                "固定时间"
            ],
            answer: 1,
            rationale: "设置 SLI 阈值告警联动实验控制器，如错误率 > 1% 或延迟 P99 > 500ms 时自动终止。"
        },
        {
            id: "bp-w15-2-q7",
            question: "模拟时钟偏移有什么用？",
            options: [
                "无用处",
                "验证分布式系统对时间敏感逻辑的容错能力",
                "测试性能",
                "测试安全"
            ],
            answer: 1,
            rationale: "时钟偏移可能导致分布式系统的协调、超时、事件排序问题。模拟可以验证容错机制。"
        },
        {
            id: "bp-w15-2-q8",
            question: "DNS 故障注入验证什么？",
            options: [
                "域名购买",
                "DNS 解析失败或延迟时的缓存和重试机制",
                "网站内容",
                "SSL 证书"
            ],
            answer: 1,
            rationale: "DNS 是常见故障点，验证应用在 DNS 不可用时的缓存策略、超时设置、重试机制。"
        },
        {
            id: "bp-w15-2-q9",
            question: "为什么要建立实验知识库？",
            options: [
                "不需要",
                "记录实验发现、模板化常用场景、便于团队复用",
                "只是文档",
                "合规要求"
            ],
            answer: 1,
            rationale: "知识库记录实验参数、发现的问题、修复措施，模板化后便于团队复用和持续改进。"
        },
        {
            id: "bp-w15-2-q10",
            question: "在多集群环境中进行混沌实验有什么挑战？",
            options: [
                "无挑战",
                "需要统一的控制平面和跨集群可观测性",
                "不能做",
                "更简单"
            ],
            answer: 1,
            rationale: "多集群需要统一的实验控制平面协调各集群，以及跨集群的可观测性关联分析。"
        },
        {
            id: "bp-w15-2-q11",
            question: "ChaosBlade 是什么？",
            options: [
                "游戏",
                "阿里开源的混沌工程工具，支持多平台",
                "监控工具",
                "日志工具"
            ],
            answer: 1,
            rationale: "ChaosBlade 是阿里开源的混沌工程工具，支持 K8s、Docker、物理机等多平台。"
        },
        {
            id: "bp-w15-2-q12",
            question: "Toxiproxy 的特点是什么？",
            options: [
                "内核模块",
                "应用层代理，模拟网络故障，不需要特权",
                "硬件设备",
                "云服务"
            ],
            answer: 1,
            rationale: "Toxiproxy 是 Shopify 开源的 TCP 代理，在应用层模拟延迟、超时等，无需 root 权限。"
        }
    ],
    "bp-w15-3": [
        {
            id: "bp-w15-3-q1",
            question: "头部采样和尾部采样的区别是什么？",
            options: [
                "没有区别",
                "头部在请求入口决定，尾部在请求完成后根据特征决定",
                "头部更复杂",
                "尾部更简单"
            ],
            answer: 1,
            rationale: "头部采样在请求入口按比例决定；尾部采样等请求完成后根据延迟、错误等特征决定是否保留。"
        },
        {
            id: "bp-w15-3-q2",
            question: "尾部采样需要什么额外资源？",
            options: [
                "无需额外资源",
                "需要缓存完整请求数据，增加收集器的内存和处理延迟",
                "只需要更多 CPU",
                "只需要更多磁盘"
            ],
            answer: 1,
            rationale: "尾部采样需要在收集器缓存完整的 Trace 数据直到请求完成，增加内存消耗和处理延迟。"
        },
        {
            id: "bp-w15-3-q3",
            question: "如何保证跨服务的采样一致性？",
            options: [
                "各服务独立采样",
                "通过 TraceID 传递采样决策标记",
                "不需要一致",
                "中心化决策"
            ],
            answer: 1,
            rationale: "采样决策应编码在 TraceID 或 Trace Context 中传递，保证一个请求的所有 Span 一致。"
        },
        {
            id: "bp-w15-3-q4",
            question: "Trace 存储成本如何优化？",
            options: [
                "全量存储",
                "分层存储（热/温/冷）、合理保留策略、控制标签基数",
                "不存储",
                "只存错误"
            ],
            answer: 1,
            rationale: "使用分层存储降低成本，设置合理的数据保留时间，避免高基数标签导致存储爆炸。"
        },
        {
            id: "bp-w15-3-q5",
            question: "什么是高基数问题？",
            options: [
                "数字太大",
                "按用户 ID 等唯一值维度聚合导致存储和查询性能问题",
                "采样太多",
                "延迟太高"
            ],
            answer: 1,
            rationale: "高基数指标签有大量唯一值（如用户 ID），按这些维度聚合会导致存储爆炸和查询性能差。"
        },
        {
            id: "bp-w15-3-q6",
            question: "自适应采样的原理是什么？",
            options: [
                "固定采样率",
                "根据服务负载、错误率等动态调整采样率",
                "随机采样",
                "全量采样"
            ],
            answer: 1,
            rationale: "自适应采样根据实时指标动态调整：高负载时降低采样率控制成本，异常时提高采样率捕获问题。"
        },
        {
            id: "bp-w15-3-q7",
            question: "OpenTelemetry Collector 的 tail_sampling 处理器有什么作用？",
            options: [
                "头部采样",
                "在收集器层面实现基于 Trace 特征的尾部采样",
                "数据压缩",
                "数据加密"
            ],
            answer: 1,
            rationale: "tail_sampling 处理器缓存 Trace 数据，根据配置的策略（延迟、错误、属性）决定是否保留。"
        },
        {
            id: "bp-w15-3-q8",
            question: "Grafana Tempo 的设计特点是什么？",
            options: [
                "需要索引",
                "无索引设计，只需 TraceID 查询，大幅降低存储成本",
                "只支持小规模",
                "不支持采样"
            ],
            answer: 1,
            rationale: "Tempo 使用无索引设计，只按 TraceID 存储和查询，大幅降低存储成本，适合大规模部署。"
        },
        {
            id: "bp-w15-3-q9",
            question: "分层采样策略是什么？",
            options: [
                "所有服务相同采样率",
                "对关键服务全量采样，对高流量服务低比例采样",
                "不采样",
                "随机采样"
            ],
            answer: 1,
            rationale: "根据服务重要性和流量设置不同采样率：关键路径全量，高流量服务按比例，兼顾覆盖和成本。"
        },
        {
            id: "bp-w15-3-q10",
            question: "头部采样的缺点是什么？",
            options: [
                "无缺点",
                "可能错过有价值的异常请求，因为决策时不知道请求结果",
                "太复杂",
                "成本太高"
            ],
            answer: 1,
            rationale: "头部采样在请求开始时决定，此时不知道请求会成功还是失败，可能错过重要的异常请求。"
        },
        {
            id: "bp-w15-3-q11",
            question: "TraceIdRatioBased 采样器是什么类型？",
            options: [
                "尾部采样",
                "头部采样，基于 TraceID 哈希按比例采样",
                "自适应采样",
                "全量采样"
            ],
            answer: 1,
            rationale: "TraceIdRatioBased 是头部采样器，对 TraceID 哈希后按配置比例决定是否采样。"
        },
        {
            id: "bp-w15-3-q12",
            question: "eBPF 自动化追踪有什么优势？",
            options: [
                "需要修改代码",
                "无需应用埋点，内核层自动捕获调用关系",
                "只支持 Java",
                "性能很差"
            ],
            answer: 1,
            rationale: "eBPF 在内核层面自动捕获系统调用和网络流量，无需修改应用代码即可实现追踪。"
        }
    ]
}
