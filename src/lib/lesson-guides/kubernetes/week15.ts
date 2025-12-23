import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week15Guides: Record<string, LessonGuide> = {
    "w15-1": {
        lessonId: "w15-1",
        background: [
            "【HPA 定义与工作原理】官方文档：HorizontalPodAutoscaler 'automatically scales workload resources (Deployments, StatefulSets) by adjusting the number of Pods based on observed metrics'——根据观测指标自动调整 Pod 数量。控制循环默认 15 秒运行一次（--horizontal-pod-autoscaler-sync-period），不适用于 DaemonSet 等不可扩缩对象。",
            "【HPA 核心算法】官方文档：扩缩公式为 'desiredReplicas = ceil(currentReplicas × (currentMetricValue / desiredMetricValue))'。默认容忍度 0.1（10%），指标比率在 0.9-1.1 之间不触发伸缩。缩容稳定窗口 5 分钟（--horizontal-pod-autoscaler-downscale-stabilization）防止抖动。",
            "【VPA 核心架构】官方文档：VPA 由三个组件构成——Recommender'analyzes historical resource usage to generate recommendations'分析历史使用生成推荐；Updater'applies recommendations by restarting pods'通过重启 Pod 应用推荐；Admission Controller'enforces recommendations on new pod creation'在新 Pod 创建时执行推荐。",
            "【Cluster Autoscaler 定义】官方文档：CA 是'a tool that automatically adjusts the size of the Kubernetes cluster'——自动调整集群大小的工具。响应两种条件：'unschedulable pods due to insufficient resources'（资源不足导致 Pod 无法调度）和'underutilized nodes for extended periods'（节点长时间低利用率）。",
            "【CA 版本兼容性】官方文档：'Starting from Kubernetes 1.12, versioning scheme was changed to match Kubernetes minor releases exactly'——CA 版本应与 K8s 小版本匹配。CA 内置调度器模拟器，版本不匹配可能导致调度判断错误。当前支持 K8s 1.8 至 1.34.x。"
        ],
        keyDifficulties: [
            "【HPA Pod 初始化处理】官方文档：CPU 初始化期（默认 5 分钟）内忽略初始化中 Pod 的 CPU 指标，'exception: if Pod is Ready AND metric was taken during Ready period'——防止 Java 预热等启动高 CPU 误触发扩缩。初始就绪延迟（30 秒）处理 Pod 状态转换。",
            "【HPA 指标源与多指标决策】官方文档：支持三类指标源——Resource Metrics API（CPU/内存）、Custom Metrics API（自定义指标）、External Metrics API（外部指标）。多指标场景'Largest desired replica count is chosen'——取最大值确保满足所有指标需求。",
            "【VPA 限制与兼容性】官方文档警告：'VPA is not compatible with workloads that define pod-level resources stanzas'——VPA 与 Pod 级资源定义不兼容。Container-level limits 超过 pod-level limits 会导致 Pod 创建失败。VPA 和 HPA 不能同时基于 CPU/内存工作。",
            "【CA 缩容保护机制】官方文档：节点标记 'cluster-autoscaler.kubernetes.io/scale-down-disabled' 不会被缩容；CA 遵守 PodDisruptionBudgets 和 safe-to-evict 注解；'the tool simulates Kubernetes scheduler behavior internally'——模拟调度器可能与实际调度器不一致。",
            "【CA 扩展策略 Expander】官方文档：当多个节点组都可满足扩容需求时，Expander 决定选择哪个组——random（随机）、most-pods（容纳最多 Pod）、least-waste（最小浪费）、priority（优先级）。不同策略影响成本和资源利用效率。"
        ],
        handsOnPath: [
            "配置 HPA 基础场景：部署一个 CPU 密集型应用，创建 HPA 目标 50% CPU 利用率。使用压测工具（如 hey、wrk）模拟负载，观察 Pod 扩容。停止压测观察缩容（等待 5 分钟稳定窗口）。",
            "实验 HPA 多指标：配置 HPA 同时基于 CPU 和自定义指标（如 QPS）。安装 Prometheus Adapter 暴露自定义指标。观察多指标下的伸缩决策（取最大值）。",
            "部署 VPA 推荐模式：安装 VPA 组件（Recommender 必须，Updater 和 Admission Controller 可选）。创建 VPA 对象设置 updateMode: Off。运行应用一段时间后查看推荐值（kubectl describe vpa）。",
            "配置 Cluster Autoscaler：在云环境（EKS/GKE/AKS）配置 CA，设置节点组的 min/max。部署大量 Pod 触发扩容。减少 Pod 观察缩容（可能需要等待 10 分钟）。检查 CA 日志理解决策过程。",
            "端到端弹性测试：结合 HPA 和 CA，模拟业务高峰：HPA 扩 Pod → 资源不足 → CA 扩节点 → Pod 调度 → 处理流量。验证整个链路的响应时间和稳定性。"
        ],
        selfCheck: [
            "HPA 的核心算法是什么？容忍度和稳定窗口如何影响伸缩行为？多指标场景下如何决策？",
            "VPA 的三种模式（Off/Initial/Auto）分别适用于什么场景？为什么 Auto 模式需要谨慎使用？",
            "Cluster Autoscaler 的扩容和缩容触发条件分别是什么？为什么某些节点「缩不下去」？",
            "HPA 和 VPA 为什么不能同时基于 CPU 工作？有什么解决方案？",
            "设计一个生产级弹性方案：如何组合 HPA、VPA、CA？各自的配置要点是什么？"
        ],
        extensions: [
            "研究 KEDA（Kubernetes Event-driven Autoscaling），了解如何基于事件源（如 Kafka 队列深度、Prometheus 指标）进行弹性伸缩。",
            "探索 Multidimensional Pod Autoscaler（MPA），了解同时调整 Pod 数量和资源的方向。",
            "学习 Cluster Autoscaler 的 Expander 策略（random、most-pods、least-waste、priority），理解多节点组场景下的扩容决策。",
            "研究 Karpenter（AWS）或其他下一代节点自动扩缩器，了解与 Cluster Autoscaler 的差异和优势。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
            "https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler",
            "https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler"
        ]
    },
    "w15-2": {
        lessonId: "w15-2",
        background: [
            "Knative Serving 是 Kubernetes 上的 Serverless 平台，提供自动扩缩容（包括缩至零）、流量路由、版本管理等能力。核心理念是「代码即服务」：开发者只需提供容器镜像，Knative 处理所有运维细节。",
            "Knative Serving 的核心资源：Service（顶层抽象，管理整个生命周期）、Configuration（期望状态，代码+配置）、Revision（不可变快照，每次变更生成新版本）、Route（流量路由，支持金丝雀和蓝绿）。四者形成完整的部署模型。",
            "自动扩缩容是 Knative 的核心能力。默认使用 KPA（Knative Pod Autoscaler），支持缩至零（scale-to-zero）。当请求到来时，Activator 组件拦截请求并唤醒 Pod，实现冷启动。也可以配置使用 Kubernetes HPA。",
            "并发（Concurrency）是 Knative 扩缩容的核心指标。containerConcurrency 定义单 Pod 处理的最大并发请求数，软限制用于扩缩决策，硬限制用于实际限流。理解并发模型是调优性能的关键。",
            "Knative 与 Istio/Kourier/Contour 等网络层集成，提供 L7 流量管理。支持 HTTPS、自定义域名、流量分割等企业级特性。选择合适的网络层影响功能范围和资源消耗。"
        ],
        keyDifficulties: [
            "Revision 的不可变性：每次 Configuration 变更都生成新 Revision，旧 Revision 保留可回滚。Revision 名称自动生成或可指定。理解 Revision 与 Deployment/Pod 的映射关系有助于排查问题。",
            "KPA vs HPA：KPA 支持缩至零和基于并发的扩缩，响应更快；HPA 基于 CPU/内存，更通用但不支持缩至零。选择取决于场景：事件驱动选 KPA，CPU 密集选 HPA。可以通过注解切换。",
            "冷启动优化：缩至零节省资源但有冷启动延迟（通常 1-3 秒）。优化方向：保留最小副本（minScale）、优化镜像大小、使用 preStop 延迟缩容、选择快速启动的运行时。权衡成本与延迟。",
            "并发调优：软并发（target）是扩缩目标，默认 100；硬并发（containerConcurrency）是上限，默认 0（无限）。设置硬并发可以保护应用不被压垮，但过低会导致过度扩容。需要根据应用特性调整。"
        ],
        handsOnPath: [
            "部署第一个 Knative Service：安装 Knative Serving 和网络层（如 Kourier）。使用 kn CLI 或 YAML 部署一个简单应用。访问服务 URL，观察 Pod 创建和自动缩放。",
            "实验 Revision 和流量分割：修改 Service 生成新 Revision。配置 Route 将流量 90/10 分割到两个版本。验证流量分配，实现金丝雀发布。使用 kn revision list 查看版本。",
            "配置并发和扩缩参数：设置 containerConcurrency、autoscaling.knative.dev/target、minScale、maxScale。压测观察扩缩行为。对比不同参数下的性能和资源消耗。",
            "冷启动分析：配置 minScale=0 观察缩至零。请求触发冷启动，测量延迟。尝试 minScale=1 对比。分析 Activator 日志理解请求缓冲机制。",
            "集成自定义域名和 HTTPS：配置 Knative 使用自定义域名。设置 cert-manager 自动管理 TLS 证书。验证 HTTPS 访问。"
        ],
        selfCheck: [
            "Knative Serving 的四个核心资源（Service/Configuration/Revision/Route）各自的职责是什么？它们如何协同工作？",
            "KPA 和 HPA 的区别是什么？什么场景下应该选择哪个？如何切换？",
            "什么是冷启动？如何优化冷启动延迟？minScale 和缩至零如何权衡？",
            "containerConcurrency 和 autoscaling.knative.dev/target 的区别是什么？如何调优并发参数？",
            "如何实现 Knative 的金丝雀发布？Revision 和 Route 如何配合？"
        ],
        extensions: [
            "研究 Knative Serving 的 PodAutoscaler (PA) 资源，了解扩缩器的内部实现和调优参数。",
            "探索 Knative 的 DomainMapping 功能，了解如何将自定义域名映射到服务。",
            "学习 Knative 与 GitOps 的集成，了解如何使用 ArgoCD 管理 Knative 资源。",
            "研究 Knative 的可观测性集成，了解如何配置 Prometheus 指标和分布式追踪。"
        ],
        sourceUrls: [
            "https://knative.dev/docs/serving/",
            "https://knative.dev/docs/serving/autoscaling/",
            "https://knative.dev/docs/serving/services/"
        ]
    },
    "w15-3": {
        lessonId: "w15-3",
        background: [
            "Knative Eventing 提供事件驱动架构的基础设施，实现生产者和消费者的松耦合。核心理念是「发布-订阅」模式：事件源产生事件，通过 Broker 路由，Trigger 过滤后投递给服务。组件可以独立开发和部署。",
            "CloudEvents 是 CNCF 的事件规范标准，定义了事件的通用格式（包含 type、source、id、time 等元数据）。Knative Eventing 完全遵循 CloudEvents 规范，使用 HTTP POST 传输事件，实现跨语言、跨平台的事件互操作。",
            "Knative Eventing 的核心组件：Source（事件源，如 PingSource、ApiServerSource、Kafka）、Broker（事件枢纽，接收和分发事件）、Trigger（订阅规则，基于属性过滤事件）、Sink（事件消费者，通常是 Knative Service）。",
            "Channel 和 Subscription 是另一种事件传递模式，更接近传统消息队列。Channel 负责事件持久化和传递，Subscription 定义消费关系。Broker/Trigger 更适合复杂路由，Channel/Subscription 更适合简单点对点。",
            "事件驱动架构的优势：松耦合（生产者不需要知道消费者）、可扩展（新增消费者不影响生产者）、异步处理（削峰填谷）、可追溯（事件日志）。挑战包括：调试困难、最终一致性、事件顺序保证。"
        ],
        keyDifficulties: [
            "Broker 的实现选择：Knative 提供多种 Broker 实现：内存 Broker（开发测试）、Kafka Broker（生产推荐，持久化）、RabbitMQ Broker 等。选择影响事件持久性、顺序保证和性能。生产环境必须使用持久化 Broker。",
            "Trigger 过滤语法：Trigger 可以基于 CloudEvents 属性过滤（type、source 等）。支持精确匹配和前缀匹配。复杂过滤逻辑需要多个 Trigger 或应用层处理。理解过滤机制避免事件丢失或重复消费。",
            "事件投递保证：Knative 提供至少一次投递（at-least-once），消费者需要处理重复事件（幂等性）。死信队列（Dead Letter Sink）处理投递失败的事件。理解重试策略和失败处理是生产落地的关键。",
            "事件追踪和调试：事件的异步特性使调试困难。CloudEvents 的 traceparent 扩展支持分布式追踪。使用 Knative 的事件日志和 Jaeger 追踪定位问题。事件 ID 的唯一性是关联上下游的关键。"
        ],
        handsOnPath: [
            "部署最小事件闭环：安装 Knative Eventing，创建 Broker。部署一个 Knative Service 作为 Sink。创建 PingSource 定时发送事件，创建 Trigger 订阅。验证事件从 Source → Broker → Trigger → Sink 的完整链路。",
            "实验 CloudEvents 格式：编写一个简单的事件消费者，打印收到的 CloudEvents 元数据（type、source、id、time）。发送自定义事件，观察格式。尝试不同的 Content-Type（structured vs binary mode）。",
            "配置 Trigger 过滤：创建多个 Trigger 基于不同 type 过滤事件。发送不同类型的事件，验证只有匹配的 Trigger 触发。实现事件路由到不同的处理服务。",
            "集成 Kafka Source：部署 Kafka（或使用托管服务）。安装 KafkaSource。配置从 Kafka Topic 消费事件到 Broker。验证消息从 Kafka → Knative Eventing → Service 的流转。",
            "配置死信队列：为 Subscription 配置 deadLetterSink。模拟消费者失败（返回 500）。观察事件重试和最终进入死信队列。分析死信事件用于问题排查。"
        ],
        selfCheck: [
            "Knative Eventing 的核心组件（Source/Broker/Trigger/Sink）各自的职责是什么？事件如何流转？",
            "CloudEvents 规范定义了哪些核心属性？为什么需要标准化事件格式？",
            "Broker/Trigger 和 Channel/Subscription 两种模式的区别是什么？各自适用于什么场景？",
            "如何保证事件的可靠投递？消费者如何处理重复事件？死信队列的作用是什么？",
            "事件驱动架构的调试挑战是什么？如何追踪一个事件的完整处理链路？"
        ],
        extensions: [
            "研究 Knative Eventing 的 Sequence 和 Parallel 资源，了解如何编排复杂的事件处理流程。",
            "探索 Event Mesh 概念，了解如何在多集群环境中实现事件的跨集群路由。",
            "学习 Knative Eventing 与 Serverless 工作流（如 AWS Step Functions、Azure Durable Functions）的对比。",
            "研究 AsyncAPI 规范，了解如何定义和文档化事件驱动 API。"
        ],
        sourceUrls: [
            "https://knative.dev/docs/eventing/",
            "https://cloudevents.io/",
            "https://knative.dev/docs/eventing/brokers/"
        ]
    },
    "w15-4": {
        lessonId: "w15-4",
        background: [
            "Operator 是 Kubernetes 的扩展模式，用于管理复杂的有状态应用。核心思想是「将运维知识编码」：把人类运维专家的经验（如数据库备份、故障恢复、版本升级）写成代码，让软件自动执行。",
            "Operator 的技术基础是 CRD（Custom Resource Definition）和 Controller。CRD 定义应用特定的资源类型（如 MySQLCluster），Controller 监听资源变化并执行调和逻辑（Reconciliation），确保实际状态符合期望状态。",
            "Controller 的调和循环（Reconcile Loop）是 Operator 的核心：监听 CR 变化 → 比较期望状态和实际状态 → 执行必要操作 → 更新状态。循环持续运行，处理任何偏离期望的情况。这是 Kubernetes 声明式 API 的实现机制。",
            "Operator 的成熟度模型（Operator Capability Levels）分为五级：Basic Install → Seamless Upgrades → Full Lifecycle → Deep Insights → Auto Pilot。不同级别代表不同的自动化程度，从简单安装到完全自治。",
            "Operator 适用于有复杂运维需求的应用：数据库（MySQL、PostgreSQL、MongoDB）、消息队列（Kafka、RabbitMQ）、监控系统（Prometheus）等。简单无状态应用不需要 Operator，用 Deployment 足够。"
        ],
        keyDifficulties: [
            "CRD 设计原则：好的 CRD 应该是声明式的（描述期望状态，而非操作）、版本化的（支持 v1beta1 → v1 升级）、有 status 子资源的（分离 spec 和 status）。遵循 Kubernetes API 约定使用户体验一致。",
            "调和逻辑的幂等性：Reconcile 函数必须是幂等的，同样的输入多次执行结果一致。原因是 Controller 会因为各种事件（资源变化、定时重试、重启）多次调用 Reconcile。幂等性避免重复创建资源或错误状态。",
            "错误处理和重试：Reconcile 返回错误时 Controller 会重试。使用指数退避避免风暴。区分可恢复错误（网络超时）和不可恢复错误（配置错误）。在 status 中记录错误信息便于用户排查。",
            "多 CR 的所有权和级联删除：Operator 创建的子资源（如 Deployment、Service）应设置 OwnerReference 指向 CR。这实现级联删除（删除 CR 自动删除子资源）和垃圾回收。理解所有权机制避免资源泄漏。"
        ],
        handsOnPath: [
            "探索现有 Operator：在 OperatorHub.io 浏览常用 Operator（如 Prometheus Operator）。安装一个 Operator，创建 CR，观察 Operator 如何创建底层资源。阅读 CR 的 status 理解状态报告。",
            "使用 Kubebuilder 创建 Operator：初始化项目（kubebuilder init），创建 API（kubebuilder create api）。定义 CRD 的 Spec 和 Status 结构。实现简单的 Reconcile 逻辑（如创建 Deployment）。",
            "实现调和循环：在 Reconcile 函数中实现：检查 CR 是否存在 → 创建/更新子资源 → 更新 CR status。使用 controllerutil.CreateOrUpdate 实现幂等创建。添加 OwnerReference 实现级联删除。",
            "测试 Operator：使用 make run 本地运行 Operator。创建 CR 验证资源创建。修改 CR 验证更新逻辑。删除 CR 验证级联删除。编写单元测试和集成测试（envtest）。",
            "打包和分发：构建 Operator 镜像。创建 Deployment 部署 Operator。使用 OLM（Operator Lifecycle Manager）管理 Operator 生命周期。了解 OperatorHub 发布流程。"
        ],
        selfCheck: [
            "什么是 Operator？它解决什么问题？与 Helm Chart 有什么区别？",
            "CRD 和 Controller 的关系是什么？调和循环（Reconcile Loop）如何工作？",
            "Reconcile 函数为什么必须是幂等的？如何实现幂等性？",
            "OwnerReference 的作用是什么？如何实现资源的级联删除？",
            "Operator 成熟度模型的五个级别分别代表什么能力？如何评估 Operator 的成熟度？"
        ],
        extensions: [
            "研究 Operator SDK（包含 Go、Ansible、Helm 三种开发方式），对比不同方式的适用场景和权衡。",
            "探索 OLM（Operator Lifecycle Manager），了解如何管理 Operator 的安装、升级和依赖。",
            "学习 Finalizer 机制，了解如何实现自定义的删除前清理逻辑。",
            "研究 Controller Runtime 和 Client-go 库，深入理解 Controller 的底层实现。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/extend-kubernetes/operator/",
            "https://book.kubebuilder.io/",
            "https://operatorframework.io/"
        ]
    }
}

export const week15Quizzes: Record<string, QuizQuestion[]> = {
    "w15-1": [
        {
            id: "w15-1-q1",
            question: "官方文档描述的 HPA 控制循环默认运行周期是多少？",
            options: [
                "5 秒",
                "10 秒",
                "15 秒（--horizontal-pod-autoscaler-sync-period）",
                "30 秒"
            ],
            answer: 2,
            rationale: "官方文档：HPA 控制循环默认每 15 秒运行一次，可通过 --horizontal-pod-autoscaler-sync-period 参数调整。"
        },
        {
            id: "w15-1-q2",
            question: "官方文档对 HPA 扩缩算法的描述是什么？",
            options: [
                "'desiredReplicas = ceil(currentReplicas × (currentMetricValue / desiredMetricValue))'",
                "desiredReplicas = currentReplicas + currentMetric / desiredMetric",
                "desiredReplicas = floor(currentReplicas × desiredMetric / currentMetric)",
                "desiredReplicas = currentReplicas × 2"
            ],
            answer: 0,
            rationale: "官方文档明确公式：desiredReplicas = ceil(currentReplicas × (currentMetricValue / desiredMetricValue))。"
        },
        {
            id: "w15-1-q3",
            question: "官方文档描述的 HPA 缩容稳定窗口默认值是多少？",
            options: [
                "1 分钟",
                "3 分钟",
                "5 分钟（--horizontal-pod-autoscaler-downscale-stabilization）",
                "10 分钟"
            ],
            answer: 2,
            rationale: "官方文档：缩容稳定窗口默认 5 分钟，在此期间选择最大的建议副本数，防止频繁缩容抖动。"
        },
        {
            id: "w15-1-q4",
            question: "官方文档描述的 VPA 三个组件分别是什么？",
            options: [
                "Controller、Manager、Agent",
                "Scheduler、Allocator、Monitor",
                "Analyzer、Executor、Validator",
                "Recommender、Updater、Admission Controller"
            ],
            answer: 3,
            rationale: "官方文档：VPA 由 Recommender（分析生成推荐）、Updater（重启 Pod 应用推荐）、Admission Controller（新 Pod 创建时执行推荐）三组件构成。"
        },
        {
            id: "w15-1-q5",
            question: "官方文档对 Cluster Autoscaler 扩容触发条件的描述是什么？",
            options: [
                "'unschedulable pods due to insufficient resources'——Pod 因资源不足无法调度",
                "CPU 使用率超过阈值",
                "节点数量低于最小值",
                "内存使用率超过阈值"
            ],
            answer: 0,
            rationale: "官方文档：CA 响应 'unschedulable pods due to insufficient resources'（资源不足导致 Pod 无法调度）触发扩容。"
        },
        {
            id: "w15-1-q6",
            question: "官方文档对 HPA 多指标场景决策的描述是什么？",
            options: [
                "取各指标建议的平均值",
                "取各指标建议的最小值",
                "'Largest desired replica count is chosen'——取最大值",
                "只使用第一个指标"
            ],
            answer: 2,
            rationale: "官方文档：多指标时 'Largest desired replica count is chosen'——取最大副本数确保满足所有指标需求。"
        },
        {
            id: "w15-1-q7",
            question: "官方文档对 VPA 兼容性限制的警告是什么？",
            options: [
                "不支持 StatefulSet",
                "'VPA is not compatible with workloads that define pod-level resources stanzas'",
                "不支持多容器 Pod",
                "不支持 HPA 同时启用"
            ],
            answer: 1,
            rationale: "官方文档警告：'VPA is not compatible with workloads that define pod-level resources stanzas'——VPA 与 Pod 级资源定义不兼容。"
        },
        {
            id: "w15-1-q8",
            question: "官方文档对 CA 版本兼容性的说明是什么？",
            options: [
                "CA 版本可以随意选择",
                "CA 只需与 K8s 主版本匹配",
                "'versioning scheme was changed to match Kubernetes minor releases exactly'——应与 K8s 小版本匹配",
                "CA 版本必须比 K8s 版本高"
            ],
            answer: 2,
            rationale: "官方文档：'Starting from Kubernetes 1.12, versioning scheme was changed to match Kubernetes minor releases exactly'。"
        },
        {
            id: "w15-1-q9",
            question: "官方文档描述的 HPA 默认容忍度（tolerance）是多少？",
            options: [
                "0.1（10%）——指标比率在 0.9-1.1 之间不触发伸缩",
                "0.05（5%）",
                "0.2（20%）",
                "0.01（1%）"
            ],
            answer: 0,
            rationale: "官方文档：默认容忍度 0.1（10%），当指标比率在 0.9-1.1 之间时不触发伸缩。"
        },
        {
            id: "w15-1-q10",
            question: "如何防止节点被 Cluster Autoscaler 缩容？",
            options: [
                "删除节点上的所有 Pod",
                "设置节点为 unschedulable",
                "标记节点 'cluster-autoscaler.kubernetes.io/scale-down-disabled'",
                "增加节点内存"
            ],
            answer: 2,
            rationale: "官方文档：节点标记 'cluster-autoscaler.kubernetes.io/scale-down-disabled' 注解后不会被 CA 缩容。"
        },
        {
            id: "w15-1-q11",
            question: "官方文档描述的 HPA CPU 初始化期默认值是多少？",
            options: [
                "30 秒",
                "1 分钟",
                "3 分钟",
                "5 分钟——在此期间忽略初始化中 Pod 的 CPU 指标"
            ],
            answer: 3,
            rationale: "官方文档：CPU 初始化期（--horizontal-pod-autoscaler-cpu-initialization-period）默认 5 分钟，防止启动高 CPU 误触发扩缩。"
        },
        {
            id: "w15-1-q12",
            question: "官方文档列出的 CA Expander 策略不包括哪个？",
            options: [
                "random（随机）",
                "most-pods（容纳最多 Pod）",
                "fastest（最快响应）",
                "least-waste（最小浪费）"
            ],
            answer: 2,
            rationale: "官方文档：Expander 策略包括 random、most-pods、least-waste、priority，不包括 fastest。"
        }
    ],
    "w15-2": [
        {
            id: "w15-2-q1",
            question: "Knative Serving 的四个核心资源是什么？",
            options: [
                "Deployment、Service、Ingress、Pod",
                "Service、Configuration、Revision、Route",
                "Function、Trigger、Event、Sink",
                "Container、Runtime、Scale、Traffic"
            ],
            answer: 1,
            rationale: "Knative Serving 四个核心资源：Service（顶层抽象）、Configuration（期望状态）、Revision（不可变快照）、Route（流量路由）。"
        },
        {
            id: "w15-2-q2",
            question: "Knative Revision 的特点是什么？",
            options: [
                "可以原地修改",
                "不可变的快照，每次变更生成新版本",
                "只保留最新版本",
                "自动删除旧版本"
            ],
            answer: 1,
            rationale: "Revision 是 Configuration 的不可变快照，每次 Configuration 变更都会生成新的 Revision。旧 Revision 保留，支持回滚和流量分割。"
        },
        {
            id: "w15-2-q3",
            question: "KPA 和 HPA 的主要区别是什么？",
            options: [
                "KPA 性能更差",
                "KPA 支持缩至零和基于并发扩缩，HPA 不支持缩至零",
                "HPA 支持更多指标",
                "两者功能完全相同"
            ],
            answer: 1,
            rationale: "KPA（Knative Pod Autoscaler）支持缩至零和基于并发/RPS 的扩缩，响应更快。HPA 基于 CPU/内存，更通用但不支持缩至零。"
        },
        {
            id: "w15-2-q4",
            question: "containerConcurrency 设置的是什么？",
            options: [
                "容器的 CPU 核数",
                "单个 Pod 处理的最大并发请求数",
                "容器的内存大小",
                "Pod 的副本数"
            ],
            answer: 1,
            rationale: "containerConcurrency 定义单个 Pod 可以处理的最大并发请求数。超过此限制的请求会被缓冲或路由到其他 Pod，保护应用不被压垮。"
        },
        {
            id: "w15-2-q5",
            question: "Knative 的冷启动是什么？",
            options: [
                "服务首次部署",
                "缩至零后首次请求需要等待 Pod 启动",
                "容器重启",
                "配置更新"
            ],
            answer: 1,
            rationale: "冷启动指 minScale=0 时服务缩至零后，首次请求到来需要等待 Pod 创建和启动，这个延迟通常是 1-3 秒（取决于镜像大小和应用启动时间）。"
        },
        {
            id: "w15-2-q6",
            question: "如何避免 Knative 服务冷启动？",
            options: [
                "使用更小的镜像",
                "设置 minScale >= 1 保持最小副本",
                "使用 HPA 替代 KPA",
                "禁用自动扩缩"
            ],
            answer: 1,
            rationale: "设置 minScale >= 1 确保始终保留至少一个 Pod，避免缩至零带来的冷启动延迟。代价是即使没有流量也消耗资源。"
        },
        {
            id: "w15-2-q7",
            question: "Knative Route 的作用是什么？",
            options: [
                "定义应用配置",
                "管理 Revision 生命周期",
                "将流量路由到一个或多个 Revision",
                "收集应用指标"
            ],
            answer: 2,
            rationale: "Route 将网络端点映射到一个或多个 Revision，支持流量分割（如 90/10 金丝雀）和命名路由。"
        },
        {
            id: "w15-2-q8",
            question: "autoscaling.knative.dev/target 注解的作用是什么？",
            options: [
                "设置最大副本数",
                "设置扩缩容的目标并发/RPS 值",
                "设置容器资源限制",
                "设置缩容延迟"
            ],
            answer: 1,
            rationale: "target 注解设置扩缩容的目标值，默认 100。当实际并发超过 target 时扩容，低于时缩容。这是软限制，用于扩缩决策。"
        },
        {
            id: "w15-2-q9",
            question: "Knative 支持哪些网络层实现？",
            options: [
                "只支持 Istio",
                "Istio、Kourier、Contour 等",
                "只支持 Nginx",
                "只支持 Envoy"
            ],
            answer: 1,
            rationale: "Knative 支持多种网络层：Istio（功能丰富）、Kourier（轻量级）、Contour、Ambassador 等。选择影响功能范围和资源消耗。"
        },
        {
            id: "w15-2-q10",
            question: "Knative 如何实现金丝雀发布？",
            options: [
                "创建两个 Service",
                "通过 Route 将流量按比例分配到多个 Revision",
                "使用不同的域名",
                "修改 Deployment 副本数"
            ],
            answer: 1,
            rationale: "Knative 通过 Route 的 traffic 配置将流量分配到多个 Revision，如 v1 90%、v2 10%。修改比例可以逐步迁移流量。"
        },
        {
            id: "w15-2-q11",
            question: "当流量为零时，Knative Activator 的作用是什么？",
            options: [
                "删除所有 Pod",
                "缓冲请求并唤醒 Pod",
                "返回 503 错误",
                "转发到备用服务"
            ],
            answer: 1,
            rationale: "当服务缩至零时，Activator 拦截请求、缓冲起来，触发 Pod 创建。Pod Ready 后将请求转发给它，实现无缝冷启动。"
        },
        {
            id: "w15-2-q12",
            question: "Knative Configuration 遵循什么设计原则？",
            options: [
                "面向对象设计",
                "Twelve-Factor App，代码与配置分离",
                "微服务架构",
                "领域驱动设计"
            ],
            answer: 1,
            rationale: "Knative Configuration 遵循 Twelve-Factor App 原则，将代码（镜像）与配置分离，每次变更生成新的不可变 Revision。"
        },
        {
            id: "w15-2-q13",
            question: "如何在 Knative 中切换使用 HPA 而非 KPA？",
            options: [
                "修改 Knative 配置文件",
                "使用注解 autoscaling.knative.dev/class: hpa",
                "重新安装 Knative",
                "删除 KPA 组件"
            ],
            answer: 1,
            rationale: "通过设置注解 autoscaling.knative.dev/class: hpa 可以切换到使用 Kubernetes HPA，适用于更适合 CPU/内存指标的场景。"
        },
        {
            id: "w15-2-q14",
            question: "maxScale 注解的作用是什么？",
            options: [
                "设置最小副本数",
                "设置最大副本数上限",
                "设置并发上限",
                "设置请求超时"
            ],
            answer: 1,
            rationale: "maxScale 设置 Knative 服务可以扩展到的最大副本数，防止意外流量或攻击导致过度扩容消耗大量资源。"
        },
        {
            id: "w15-2-q15",
            question: "Knative Service 资源的作用是什么？",
            options: [
                "只管理网络路由",
                "管理完整生命周期，自动创建 Configuration、Revision、Route",
                "只管理扩缩容",
                "只管理容器镜像"
            ],
            answer: 1,
            rationale: "Knative Service 是顶层抽象，创建时自动管理 Configuration、Revision、Route，简化用户操作。用户只需定义 Service 即可获得完整的 Serverless 能力。"
        }
    ],
    "w15-3": [
        {
            id: "w15-3-q1",
            question: "Knative Eventing 的核心组件有哪些？",
            options: [
                "Producer、Consumer、Queue、Topic",
                "Source、Broker、Trigger、Sink",
                "Publisher、Subscriber、Channel、Message",
                "Event、Handler、Router、Filter"
            ],
            answer: 1,
            rationale: "Knative Eventing 核心组件：Source（事件源）、Broker（事件枢纽）、Trigger（订阅过滤）、Sink（事件消费者）。"
        },
        {
            id: "w15-3-q2",
            question: "CloudEvents 规范的主要目的是什么？",
            options: [
                "加密事件数据",
                "定义事件通用格式，实现跨平台互操作",
                "压缩事件大小",
                "验证事件有效性"
            ],
            answer: 1,
            rationale: "CloudEvents 是 CNCF 标准，定义事件通用格式（type、source、id 等），使不同系统产生的事件格式统一，实现跨语言、跨平台互操作。"
        },
        {
            id: "w15-3-q3",
            question: "Trigger 的作用是什么？",
            options: [
                "产生事件",
                "存储事件",
                "基于属性过滤事件并路由到 Sink",
                "加密事件"
            ],
            answer: 2,
            rationale: "Trigger 从 Broker 订阅事件，基于 CloudEvents 属性（如 type、source）过滤，将匹配的事件路由到指定的 Sink。"
        },
        {
            id: "w15-3-q4",
            question: "Knative Eventing 的事件投递保证是什么？",
            options: [
                "最多一次（at-most-once）",
                "至少一次（at-least-once）",
                "恰好一次（exactly-once）",
                "无保证"
            ],
            answer: 1,
            rationale: "Knative Eventing 提供至少一次（at-least-once）投递保证，事件可能重复投递。消费者需要实现幂等处理。"
        },
        {
            id: "w15-3-q5",
            question: "死信队列（Dead Letter Sink）的用途是什么？",
            options: [
                "存储成功处理的事件",
                "存储投递失败的事件用于后续分析",
                "加速事件处理",
                "过滤重复事件"
            ],
            answer: 1,
            rationale: "死信队列存储投递失败（重试次数用尽后仍失败）的事件，便于后续分析问题原因和手动重处理。"
        },
        {
            id: "w15-3-q6",
            question: "PingSource 的功能是什么？",
            options: [
                "接收 HTTP 请求",
                "定时发送事件",
                "监控网络延迟",
                "检查服务健康"
            ],
            answer: 1,
            rationale: "PingSource 按照 cron 表达式定时生成事件，常用于触发定时任务或测试事件流转。"
        },
        {
            id: "w15-3-q7",
            question: "Broker 和 Channel 的主要区别是什么？",
            options: [
                "Broker 更快",
                "Broker 支持基于属性的过滤路由，Channel 是简单的点对点传递",
                "Channel 更可靠",
                "两者功能相同"
            ],
            answer: 1,
            rationale: "Broker 配合 Trigger 支持基于 CloudEvents 属性的复杂过滤路由。Channel 配合 Subscription 是简单的点对点传递模式。"
        },
        {
            id: "w15-3-q8",
            question: "CloudEvents 的核心属性包括哪些？",
            options: [
                "id、name、value、timestamp",
                "type、source、id、time、specversion",
                "key、value、topic、partition",
                "header、body、footer、checksum"
            ],
            answer: 1,
            rationale: "CloudEvents 核心属性：type（事件类型）、source（事件源）、id（唯一标识）、time（时间戳）、specversion（规范版本）等。"
        },
        {
            id: "w15-3-q9",
            question: "Knative Eventing 如何实现松耦合？",
            options: [
                "使用强类型接口",
                "生产者和消费者通过 Broker 解耦，不需要知道对方",
                "使用共享数据库",
                "使用同步调用"
            ],
            answer: 1,
            rationale: "生产者只需发送事件到 Broker，不需要知道消费者。消费者通过 Trigger 订阅，不需要知道生产者。双方通过 Broker 解耦。"
        },
        {
            id: "w15-3-q10",
            question: "生产环境应该使用哪种 Broker 实现？",
            options: [
                "内存 Broker（In-Memory）",
                "Kafka Broker 或其他持久化 Broker",
                "任何 Broker 都可以",
                "自定义 Broker"
            ],
            answer: 1,
            rationale: "内存 Broker 不持久化事件，节点故障会丢失数据，只适合开发测试。生产环境应使用 Kafka Broker 等持久化实现。"
        },
        {
            id: "w15-3-q11",
            question: "如何处理 Knative Eventing 中的重复事件？",
            options: [
                "Knative 自动去重",
                "消费者实现幂等处理",
                "增加重试次数",
                "使用 HTTPS"
            ],
            answer: 1,
            rationale: "Knative 提供至少一次投递，可能有重复事件。消费者需要根据事件 ID 实现幂等处理，确保重复处理不产生副作用。"
        },
        {
            id: "w15-3-q12",
            question: "Trigger 的过滤条件支持什么类型的匹配？",
            options: [
                "只支持正则表达式",
                "精确匹配和前缀匹配",
                "只支持精确匹配",
                "支持 SQL 查询"
            ],
            answer: 1,
            rationale: "Trigger 过滤支持精确匹配和前缀匹配 CloudEvents 属性。复杂过滤逻辑需要在消费者应用层处理。"
        },
        {
            id: "w15-3-q13",
            question: "Knative Eventing 使用什么传输协议？",
            options: [
                "gRPC",
                "HTTP POST（遵循 CloudEvents 规范）",
                "AMQP",
                "WebSocket"
            ],
            answer: 1,
            rationale: "Knative Eventing 使用标准 HTTP POST 传输事件，符合 CloudEvents HTTP 协议绑定规范，便于跨语言集成。"
        },
        {
            id: "w15-3-q14",
            question: "ApiServerSource 的用途是什么？",
            options: [
                "发送 HTTP 请求",
                "将 Kubernetes API 事件（资源变化）转为 CloudEvents",
                "访问外部 API",
                "验证 API 调用"
            ],
            answer: 1,
            rationale: "ApiServerSource 监听 Kubernetes API Server 的资源变化事件（如 Pod 创建/删除），转换为 CloudEvents 发送到 Sink。"
        },
        {
            id: "w15-3-q15",
            question: "事件驱动架构的主要挑战是什么？",
            options: [
                "性能太低",
                "调试困难、最终一致性、事件顺序保证",
                "不支持扩展",
                "只能用于 Kubernetes"
            ],
            answer: 1,
            rationale: "事件驱动架构的挑战包括：异步特性使调试困难、分布式系统是最终一致性而非强一致性、某些场景需要保证事件顺序处理。"
        }
    ],
    "w15-4": [
        {
            id: "w15-4-q1",
            question: "Kubernetes Operator 的核心思想是什么？",
            options: [
                "自动化部署应用",
                "将运维知识编码，让软件自动执行复杂运维任务",
                "监控应用性能",
                "管理网络策略"
            ],
            answer: 1,
            rationale: "Operator 的核心思想是「将运维知识编码」：把人类运维专家的经验（备份、恢复、升级）写成代码，让软件自动执行。"
        },
        {
            id: "w15-4-q2",
            question: "CRD 和 Controller 的关系是什么？",
            options: [
                "CRD 执行逻辑，Controller 定义资源",
                "CRD 定义资源类型，Controller 监听并执行调和逻辑",
                "两者功能相同",
                "CRD 替代 Controller"
            ],
            answer: 1,
            rationale: "CRD 定义自定义资源类型（如 MySQLCluster 的结构），Controller 监听该资源的变化并执行调和逻辑确保实际状态匹配期望。"
        },
        {
            id: "w15-4-q3",
            question: "Reconcile 函数为什么必须是幂等的？",
            options: [
                "提高性能",
                "因为会被多次调用（事件、重试、重启），同样输入必须产生同样结果",
                "简化代码",
                "Kubernetes 要求"
            ],
            answer: 1,
            rationale: "Reconcile 会因为资源变化、定时重试、Controller 重启等原因被多次调用。幂等性确保多次执行不会产生副作用（如重复创建资源）。"
        },
        {
            id: "w15-4-q4",
            question: "OwnerReference 的主要作用是什么？",
            options: [
                "记录创建者",
                "实现级联删除，删除 CR 时自动删除其创建的子资源",
                "设置权限",
                "配置网络"
            ],
            answer: 1,
            rationale: "OwnerReference 建立资源间的所有权关系。当父资源（CR）被删除时，Kubernetes 垃圾回收器自动删除带有该 OwnerReference 的子资源。"
        },
        {
            id: "w15-4-q5",
            question: "Operator 成熟度模型的最高级别是什么？",
            options: [
                "Basic Install",
                "Full Lifecycle",
                "Auto Pilot",
                "Deep Insights"
            ],
            answer: 2,
            rationale: "Operator 成熟度五级：Basic Install → Seamless Upgrades → Full Lifecycle → Deep Insights → Auto Pilot（完全自治）。"
        },
        {
            id: "w15-4-q6",
            question: "Operator 和 Helm Chart 的主要区别是什么？",
            options: [
                "Helm 更复杂",
                "Operator 有持续运行的 Controller 管理应用生命周期，Helm 只做一次性安装",
                "Operator 只能用 Go 编写",
                "Helm 不支持自定义资源"
            ],
            answer: 1,
            rationale: "Helm 是模板化的一次性部署工具。Operator 有持续运行的 Controller，能够监控应用状态、自动恢复、执行升级等复杂生命周期管理。"
        },
        {
            id: "w15-4-q7",
            question: "调和循环（Reconcile Loop）的工作流程是什么？",
            options: [
                "创建 → 更新 → 删除",
                "观察当前状态 → 比较期望状态 → 执行操作 → 更新状态",
                "读取 → 验证 → 写入",
                "启动 → 运行 → 停止"
            ],
            answer: 1,
            rationale: "调和循环持续执行：观察集群中的实际状态 → 与 CR 定义的期望状态比较 → 执行必要操作消除差异 → 更新 CR status。"
        },
        {
            id: "w15-4-q8",
            question: "什么类型的应用最适合使用 Operator？",
            options: [
                "简单无状态应用",
                "有复杂运维需求的有状态应用（数据库、消息队列等）",
                "静态网站",
                "单次执行的批处理任务"
            ],
            answer: 1,
            rationale: "Operator 适合有复杂运维需求的应用：数据库（备份、恢复、主从切换）、消息队列（分区管理）等。简单应用用 Deployment 足够。"
        },
        {
            id: "w15-4-q9",
            question: "Kubebuilder 的作用是什么？",
            options: [
                "构建 Kubernetes 集群",
                "帮助开发 Operator 的框架，生成 CRD 和 Controller 脚手架",
                "管理 Kubernetes 网络",
                "监控 Kubernetes 资源"
            ],
            answer: 1,
            rationale: "Kubebuilder 是 Go 语言的 Operator 开发框架，提供脚手架生成（kubebuilder init/create api）、CRD 生成、Controller 模板等功能。"
        },
        {
            id: "w15-4-q10",
            question: "Reconcile 返回错误时会发生什么？",
            options: [
                "Operator 停止运行",
                "Controller 会按指数退避策略重试",
                "资源被删除",
                "错误被忽略"
            ],
            answer: 1,
            rationale: "Reconcile 返回错误时 Controller 会重试，默认使用指数退避策略（间隔逐渐增加），避免对集群造成压力。"
        },
        {
            id: "w15-4-q11",
            question: "CRD 设计时应该遵循什么原则？",
            options: [
                "使用命令式 API",
                "声明式设计、版本化、有 status 子资源",
                "只使用字符串类型",
                "避免使用嵌套结构"
            ],
            answer: 1,
            rationale: "好的 CRD 应该是声明式的（描述期望状态）、版本化的（支持升级）、有 status 子资源的（分离用户输入和系统状态）。"
        },
        {
            id: "w15-4-q12",
            question: "Finalizer 的用途是什么？",
            options: [
                "加速删除",
                "在资源删除前执行清理逻辑",
                "验证资源格式",
                "记录操作日志"
            ],
            answer: 1,
            rationale: "Finalizer 阻止资源被立即删除，让 Controller 有机会执行清理逻辑（如释放外部资源）。清理完成后移除 Finalizer，资源才会被删除。"
        },
        {
            id: "w15-4-q13",
            question: "OLM（Operator Lifecycle Manager）的作用是什么？",
            options: [
                "开发 Operator",
                "管理 Operator 的安装、升级和依赖",
                "监控 Operator 性能",
                "生成 CRD"
            ],
            answer: 1,
            rationale: "OLM 管理 Operator 的完整生命周期：安装、升级、依赖解析、权限管理。是 OperatorHub 的基础组件。"
        },
        {
            id: "w15-4-q14",
            question: "controllerutil.CreateOrUpdate 函数的作用是什么？",
            options: [
                "只创建资源",
                "幂等地创建或更新资源",
                "只更新资源",
                "删除资源"
            ],
            answer: 1,
            rationale: "CreateOrUpdate 是 controller-runtime 提供的工具函数，幂等地创建资源（不存在时）或更新资源（存在时），简化 Reconcile 逻辑。"
        },
        {
            id: "w15-4-q15",
            question: "Operator 通常以什么形式部署在集群中？",
            options: [
                "DaemonSet",
                "Deployment",
                "StatefulSet",
                "Job"
            ],
            answer: 1,
            rationale: "Operator 通常以 Deployment 形式部署，运行 Controller 进程。一般单副本即可，配合 Leader Election 实现高可用。"
        }
    ]
}
