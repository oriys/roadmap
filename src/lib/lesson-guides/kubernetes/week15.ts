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
            "【四大核心资源】官方文档：Knative Serving 通过四个互联的 CRD 运作——Service'manages the whole lifecycle of your workload'管理工作负载全生命周期；Configuration'maintains the desired state for your deployment'维护期望状态；Revision'a point-in-time snapshot of the code and configuration'代码和配置的不可变快照；Route 将网络端点映射到一个或多个 Revision。",
            "【KPA 自动扩缩】官方文档：Knative Serving 默认使用 Knative Pod Autoscaler (KPA)，提供'automatic scaling for applications to match incoming demand'——自动扩缩以匹配流入请求。支持缩至零（scale-to-zero）和向上扩展，也可选用 Kubernetes HPA 替代。",
            "【Scale-to-Zero 机制】官方文档：scale-to-zero-grace-period 是'upper time boundary allowing internal network programming to be in place before removing final replica'——允许移除最后副本前网络编程就绪的上限时间（默认 30 秒）。Pod 保留期（pod retention period）是自动扩缩器启动缩零后最后一个 Pod 保持活跃的最小时长。",
            "【并发配置模型】官方文档：软限制（soft limit）是'a target rather than enforced bound, system may exceed during traffic bursts'——目标值而非强制边界；硬限制（hard limit）是'enforced upper bound, surplus requests buffered until capacity free'——强制上限，超出请求被缓冲。默认软限制 100，硬限制 0（无限）。",
            "【网络层选择】官方文档：安装时需选择网络层——Kourier'most lightweight option'最轻量（推荐）；Istio 提供完整服务网格集成；Contour 是企业级 Ingress 控制器。单节点最低要求：6 CPU、6 GB 内存、30 GB 磁盘。"
        ],
        keyDifficulties: [
            "【Revision 不可变性】官方文档：Revision 是'point-in-time snapshot'不可变快照，每次 Configuration 变更生成新 Revision。Service 遵循 Twelve-Factor App 原则'enforces separation between code and configuration'——代码与配置分离。流量可分配到多个 Revision 实现金丝雀发布。",
            "【KPA vs HPA 选择】官方文档：KPA 是默认自动扩缩器，支持 scale-to-zero；HPA 需要'installing optional Serving extensions'安装可选扩展。KPA 基于并发/RPS 指标响应更快，HPA 基于 CPU/内存更通用但不支持缩零。事件驱动场景选 KPA。",
            "【目标利用率机制】官方文档：target-utilization-percentage 决定扩缩触发时机——'At 70% default, if hard limit is 10, autoscaling triggers at 7 concurrent requests'。允许在容量耗尽前主动创建副本，避免请求被缓冲。",
            "【Grace Period vs Retention】官方文档：scale-to-zero-grace-period 是移除最后副本前的最大等待时间（默认 30 秒）；pod-retention-period 是最小保持时间（默认 0 秒）。前者防止请求丢失，后者控制成本与延迟的权衡。",
            "【并发配置方式】官方文档：Per-Revision 使用注解'autoscaling.knative.dev/target'设置软限制，spec 中 containerConcurrency 设置硬限制；Global 通过 config-autoscaler ConfigMap 的'container-concurrency-target-default'配置。硬限制超出时请求被缓冲等待。"
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
            "【Eventing 定义】官方文档：Knative Eventing 是'a collection of APIs that enable you to use an event-driven architecture with your applications'——支持事件驱动架构的 API 集合。使用标准 HTTP POST 请求和 CloudEvents 规范在生产者（Sources）和消费者（Sinks）之间路由事件。",
            "【四大构建块】官方文档：核心组件包括——Event Sources（从各种系统生成事件）；Brokers（'event mesh for collecting a pool of events'接收和分发事件的中心枢纽）；Triggers（基于事件属性过滤并路由到目标）；Sinks（接收 HTTP POST 请求的消费者，可以是 Knative Service 或标准 K8s Service）。",
            "【CloudEvents 规范】CNCF 官方：CloudEvents 是'a specification for describing event data in a common way'——用通用方式描述事件数据的规范（CNCF 毕业项目，当前版本 1.0.2）。提供 9 种语言 SDK，解决事件格式一致性、可访问性和可移植性问题。",
            "【松耦合哲学】官方文档：组件'independently developed and deployed'——独立开发和部署。事件生产者无需活跃消费者即可运行，消费者可在生产者存在前表达订阅意向。生产者发布到 Broker 无需知道消费者。",
            "【Broker 实现类型】官方文档：支持多种 Broker 实现——Channel-based Broker、Apache Kafka Broker、RabbitMQ Broker。每种实现处理事件投递机制不同，可通过 ConfigMap 配置默认值或单独定义 Broker 资源。"
        ],
        keyDifficulties: [
            "【Trigger 过滤机制】官方文档：Trigger 基于 CloudEvents 属性和扩展过滤事件。'If multiple filters are provided, all of them must evaluate to true'——多个过滤器必须全部为真才投递。支持 Exact（精确匹配）、Prefix/Suffix（前后缀）、CESQL 表达式。",
            "【过滤器类型】官方文档：exact 使用区分大小写的字符串匹配；逻辑操作符包括'all'（全部为真）、'any'（至少一个为真）、'not'（取反）。CESQL 支持复杂表达式如'source LIKE %commerce% AND type IN (order.created)'。",
            "【高级过滤限制】官方文档：'Data field filtering is unsupported'——不支持数据字段过滤。'Advanced filters work only with Apache Kafka Broker and MTChannelBasedBroker'——高级过滤仅支持 Kafka 和 MTChannel Broker，其他 Broker 使用传统属性过滤。",
            "【多 Broker 场景】官方文档：虽然单个 Broker 足以应对大多数场景，但多 Broker 可简化架构——'such as separating PII and non-PII events for streamlined audit and access control'——分离 PII 和非 PII 事件便于审计和访问控制。",
            "【Broker 抽象价值】官方文档：Broker 提供可发现端点供生产者 POST 事件，'abstracting routing details through Triggers'——通过 Trigger 抽象路由细节。生产者和消费者分离，路由实现细节对用户透明。"
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
            "【Operator 定义】官方文档：Operator 是'a software extension to Kubernetes that makes use of custom resources to manage applications and their components'——使用自定义资源管理应用及其组件的软件扩展。Operator 遵循 Kubernetes 原则，特别是控制循环（control loop）模式。",
            "【控制循环模式】官方文档：Operator 实现控制循环原则——'continuously watching the desired state and taking actions to match reality to that state'——持续监控期望状态并采取行动使实际状态匹配期望状态。这是 Kubernetes 声明式 API 的核心实现机制。",
            "【Custom Resource 定义】官方文档：Custom resources 是'extensions of the Kubernetes API that allow you to define and use new object types beyond the built-in resources'——扩展 K8s API 以定义内置资源之外的新对象类型。可动态注册，支持 kubectl 完整操作。",
            "【Operator 成熟度模型】CNCF 标准定义五个级别——Basic Install（可部署应用）、Seamless Upgrades（处理升级）、Full Lifecycle（备份恢复故障恢复）、Deep Insights（指标告警日志）、Auto Pilot（完全自治管理）。",
            "【CRD vs Aggregated API】官方文档：两种扩展 API 方式——CRD 更简单'no programming required'无需编程，由 API Server 处理；Aggregated API 更灵活'More control over API behavior'但需要额外服务部署维护。大多数场景 CRD 足够。"
        ],
        keyDifficulties: [
            "【CRD schema 验证】官方文档：CRD 使用 OpenAPI v3 schema 验证——'schema.openAPIV3Schema'定义字段类型、必填项和正则模式。subresources.status 分离 spec（期望状态）和 status（观测状态），遵循 Kubernetes API 约定。",
            "【Reconcile 幂等性】Kubebuilder 核心原则：Reconcile 函数必须幂等——同样输入多次执行结果一致。Controller 会因资源变化、定时重试、重启等多次调用 Reconcile。'controller-runtime handles the reconciliation loop and resource watching'自动处理循环。",
            "【OwnerReference 级联删除】官方文档：Operator 创建的子资源应设置 OwnerReference。'Use finalizers for graceful deletion'——Finalizer 阻止资源立即删除，让 Controller 有机会执行清理逻辑（如释放外部资源），清理完成后移除 Finalizer。",
            "【Operator vs Helm】官方对比：Operator 是'Active control loop (imperative automation)'——主动控制循环，部署后持续管理生命周期；Helm 是'Package/template manager (declarative config)'——包管理器，主要负责安装卸载。复杂有状态应用选 Operator。",
            "【开发框架选择】官方文档：Kubebuilder 是 Go SDK（最流行），Operator SDK 支持 Go/Ansible/Helm 三种方式。SDK 提供'generate bundle, scorecard testing, OLM integration'——打包测试和 OLM 集成。Ansible/Helm 方式适合已有自动化资产的团队。"
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
            question: "官方文档描述的 Knative Service 资源的职责是什么？",
            options: [
                "只管理网络路由",
                "'manages the whole lifecycle of your workload'——管理工作负载全生命周期",
                "只管理扩缩容",
                "只管理容器镜像"
            ],
            answer: 1,
            rationale: "官方文档：Service'manages the whole lifecycle of your workload'，自动创建和控制 Routes、Configurations 和 Revisions。"
        },
        {
            id: "w15-2-q2",
            question: "官方文档对 Revision 的定义是什么？",
            options: [
                "'a point-in-time snapshot of the code and configuration'——代码和配置的不可变快照",
                "可以原地修改的配置",
                "只保留最新版本",
                "自动删除旧版本"
            ],
            answer: 0,
            rationale: "官方文档：Revision 是'a point-in-time snapshot of the code and configuration'，是不可变的，支持基于流量自动扩缩。"
        },
        {
            id: "w15-2-q3",
            question: "官方文档描述的 Knative 默认自动扩缩器是什么？",
            options: [
                "Kubernetes HPA",
                "Vertical Pod Autoscaler",
                "Cluster Autoscaler",
                "Knative Pod Autoscaler (KPA)——支持 scale-to-zero"
            ],
            answer: 3,
            rationale: "官方文档：Knative Serving 默认使用 Knative Pod Autoscaler (KPA)，支持 scale-to-zero，也可选用 HPA 替代。"
        },
        {
            id: "w15-2-q4",
            question: "官方文档描述的 scale-to-zero-grace-period 默认值是多少？",
            options: [
                "10 秒",
                "60 秒",
                "30 秒——允许移除最后副本前网络编程就绪的上限时间",
                "5 分钟"
            ],
            answer: 2,
            rationale: "官方文档：scale-to-zero-grace-period 默认 30 秒，是'upper time boundary allowing internal network programming to be in place before removing final replica'。"
        },
        {
            id: "w15-2-q5",
            question: "官方文档对软限制（soft limit）的描述是什么？",
            options: [
                "'enforced upper bound'——强制上限",
                "'a target rather than enforced bound, system may exceed during traffic bursts'——可在流量突发时超出",
                "永远不能超过的限制",
                "只用于告警的阈值"
            ],
            answer: 1,
            rationale: "官方文档：软限制是'a target rather than enforced bound, system may exceed during traffic bursts'，不是强制边界。"
        },
        {
            id: "w15-2-q6",
            question: "官方文档对硬限制（hard limit）超出时的行为描述是什么？",
            options: [
                "请求立即被拒绝",
                "自动扩容处理",
                "请求被丢弃",
                "'surplus requests will be buffered and must wait until enough capacity is free'——超出请求被缓冲等待"
            ],
            answer: 3,
            rationale: "官方文档：硬限制是'enforced upper bound, surplus requests will be buffered and must wait until enough capacity is free'。"
        },
        {
            id: "w15-2-q7",
            question: "官方文档描述的默认软限制和硬限制值分别是什么？",
            options: [
                "软限制 100，硬限制 0（无限）",
                "软限制 50，硬限制 100",
                "软限制 200，硬限制 500",
                "两者都是 100"
            ],
            answer: 0,
            rationale: "官方文档：'Soft limit default: 100, Hard limit default: 0 (unlimited)'——默认软限制 100，硬限制 0 表示无限。"
        },
        {
            id: "w15-2-q8",
            question: "官方文档对 target-utilization-percentage 默认值 70% 的解释是什么？",
            options: [
                "70% CPU 使用率时扩容",
                "70% 内存使用率时扩容",
                "'if hard limit is 10, autoscaling triggers at 7 concurrent requests'——硬限制 10 时 7 个并发触发扩缩",
                "副本保持 70% 的空闲率"
            ],
            answer: 2,
            rationale: "官方文档：'At 70% default, if hard limit is 10, autoscaling triggers at 7 concurrent requests'——在容量耗尽前主动创建副本。"
        },
        {
            id: "w15-2-q9",
            question: "官方文档推荐不确定时选择哪个网络层？",
            options: [
                "Istio",
                "Contour",
                "Kourier——'most lightweight option'",
                "NGINX"
            ],
            answer: 2,
            rationale: "官方文档：Kourier 是'most lightweight option'，推荐在不确定时选择。"
        },
        {
            id: "w15-2-q10",
            question: "官方文档描述的单节点安装最低内存要求是多少？",
            options: [
                "2 GB",
                "4 GB",
                "8 GB",
                "6 GB——单节点最低要求"
            ],
            answer: 3,
            rationale: "官方文档：单节点最低要求'6 CPUs, 6 GB memory, 30 GB disk storage'。"
        },
        {
            id: "w15-2-q11",
            question: "如何通过注解设置 Per-Revision 的软限制？",
            options: [
                "containerConcurrency 字段",
                "resources.limits 字段",
                "'autoscaling.knative.dev/target' 注解",
                "replicas 字段"
            ],
            answer: 2,
            rationale: "官方文档：Per-Revision 使用注解'autoscaling.knative.dev/target'设置软限制，containerConcurrency 设置硬限制。"
        },
        {
            id: "w15-2-q12",
            question: "官方文档对 Configuration 遵循的设计原则描述是什么？",
            options: [
                "面向对象设计",
                "微服务架构",
                "Twelve-Factor App——'enforces separation between code and configuration'",
                "领域驱动设计"
            ],
            answer: 2,
            rationale: "官方文档：Configuration'enforces separation between code and configuration following Twelve-Factor App principles'。"
        }
    ],
    "w15-3": [
        {
            id: "w15-3-q1",
            question: "官方文档对 Knative Eventing 的定义是什么？",
            options: [
                "容器编排平台",
                "服务网格代理",
                "'a collection of APIs that enable you to use an event-driven architecture'——支持事件驱动架构的 API 集合",
                "日志收集系统"
            ],
            answer: 2,
            rationale: "官方文档：Knative Eventing 是'a collection of APIs that enable you to use an event-driven architecture with your applications'。"
        },
        {
            id: "w15-3-q2",
            question: "官方文档描述的 Broker 核心功能是什么？",
            options: [
                "'event mesh for collecting a pool of events'——收集事件池的事件网格",
                "存储容器镜像",
                "管理 Pod 生命周期",
                "配置网络策略"
            ],
            answer: 0,
            rationale: "官方文档：Brokers 是'event mesh for collecting a pool of events'，提供可发现端点供生产者 POST 事件。"
        },
        {
            id: "w15-3-q3",
            question: "官方文档对 CloudEvents 的定义是什么？",
            options: [
                "Knative 专有协议",
                "'a specification for describing event data in a common way'——用通用方式描述事件数据的规范",
                "日志格式标准",
                "网络传输协议"
            ],
            answer: 1,
            rationale: "CNCF 官方：CloudEvents 是'a specification for describing event data in a common way'（CNCF 毕业项目，当前版本 1.0.2）。"
        },
        {
            id: "w15-3-q4",
            question: "CloudEvents 规范提供多少种语言的 SDK？",
            options: [
                "3 种",
                "5 种",
                "9 种（Go、JavaScript、Java、C#、Ruby、PHP、Python、Rust、PowerShell）",
                "12 种"
            ],
            answer: 2,
            rationale: "CNCF 官方文档：CloudEvents 提供 9 种语言 SDK。"
        },
        {
            id: "w15-3-q5",
            question: "官方文档对 Trigger 多过滤器的处理规则是什么？",
            options: [
                "任意一个为真即投递",
                "'all of them must evaluate to true'——全部为真才投递",
                "按顺序评估第一个匹配即停止",
                "随机选择一个过滤器"
            ],
            answer: 1,
            rationale: "官方文档：'If multiple filters are provided, all of them must evaluate to true in order for the event to be passed to the subscriber'。"
        },
        {
            id: "w15-3-q6",
            question: "官方文档描述的 Trigger 过滤器类型不包括哪个？",
            options: [
                "Exact（精确匹配）",
                "Prefix（前缀匹配）",
                "Regex（正则表达式）",
                "CESQL（CloudEvents SQL）"
            ],
            answer: 2,
            rationale: "官方文档：支持 Exact、Prefix/Suffix、逻辑操作符（all/any/not）和 CESQL，不包括 Regex。"
        },
        {
            id: "w15-3-q7",
            question: "官方文档对高级过滤器支持范围的说明是什么？",
            options: [
                "所有 Broker 类型都支持",
                "只有内存 Broker 支持",
                "'Advanced filters work only with Apache Kafka Broker and MTChannelBasedBroker'",
                "需要额外安装插件"
            ],
            answer: 2,
            rationale: "官方文档：'Advanced filters work only with Apache Kafka Broker and MTChannelBasedBroker'，其他 Broker 使用传统属性过滤。"
        },
        {
            id: "w15-3-q8",
            question: "官方文档对数据字段过滤的说明是什么？",
            options: [
                "完全支持",
                "'Data field filtering is unsupported'——不支持数据字段过滤",
                "需要特殊配置",
                "只支持 JSON 格式"
            ],
            answer: 1,
            rationale: "官方文档明确说明：'Data field filtering is unsupported'——只能过滤 CloudEvents 属性，不能过滤数据内容。"
        },
        {
            id: "w15-3-q9",
            question: "官方文档描述的松耦合特性是什么？",
            options: [
                "组件'independently developed and deployed'——独立开发和部署",
                "所有组件必须同时部署",
                "生产者必须等待消费者就绪",
                "事件必须同步处理"
            ],
            answer: 0,
            rationale: "官方文档：组件'independently developed and deployed'，生产者无需活跃消费者即可运行。"
        },
        {
            id: "w15-3-q10",
            question: "官方文档描述多 Broker 的典型场景是什么？",
            options: [
                "提高性能",
                "负载均衡",
                "'separating PII and non-PII events for streamlined audit and access control'——分离 PII 事件便于审计",
                "降低成本"
            ],
            answer: 2,
            rationale: "官方文档：多 Broker 可简化架构，'such as separating PII and non-PII events for streamlined audit and access control'。"
        },
        {
            id: "w15-3-q11",
            question: "官方文档描述的支持 Broker 实现类型有哪些？",
            options: [
                "只有内存 Broker",
                "Channel-based、Apache Kafka、RabbitMQ Broker",
                "只有 Kafka Broker",
                "只有 RabbitMQ Broker"
            ],
            answer: 1,
            rationale: "官方文档：支持多种 Broker 实现——Channel-based Broker、Apache Kafka Broker、RabbitMQ Broker。"
        },
        {
            id: "w15-3-q12",
            question: "CESQL 过滤器支持的查询语法示例是什么？",
            options: [
                "只支持等于比较",
                "只支持数值运算",
                "'source LIKE %commerce% AND type IN (order.created)'",
                "只支持布尔表达式"
            ],
            answer: 2,
            rationale: "官方文档：CESQL 支持复杂表达式如'source LIKE %commerce% AND type IN (order.created)'。"
        }
    ],
    "w15-4": [
        {
            id: "w15-4-q1",
            question: "官方文档对 Kubernetes Operator 的定义是什么？",
            options: [
                "一种容器编排工具",
                "'a software extension to Kubernetes that makes use of custom resources to manage applications'——使用自定义资源管理应用的软件扩展",
                "Kubernetes 的监控组件",
                "一种网络策略管理器"
            ],
            answer: 1,
            rationale: "官方文档定义 Operator 为'a software extension to Kubernetes that makes use of custom resources to manage applications and their components'，遵循控制循环原则。"
        },
        {
            id: "w15-4-q2",
            question: "官方文档对 Custom Resources 的定义是什么？",
            options: [
                "'extensions of the Kubernetes API that allow you to define and use new object types beyond the built-in resources'——扩展 API 定义新对象类型",
                "Kubernetes 内置的 Pod 资源",
                "只能用于存储配置的对象",
                "不支持 kubectl 操作的资源"
            ],
            answer: 0,
            rationale: "官方文档：Custom resources 是'extensions of the Kubernetes API that allow you to define and use new object types beyond the built-in resources'，可动态注册并支持 kubectl 完整操作。"
        },
        {
            id: "w15-4-q3",
            question: "CNCF 定义的 Operator 成熟度模型最高级别是什么？",
            options: [
                "Deep Insights（深度洞察）",
                "Full Lifecycle（完整生命周期）",
                "Seamless Upgrades（无缝升级）",
                "Auto Pilot（完全自治）"
            ],
            answer: 3,
            rationale: "CNCF 成熟度模型五级：Basic Install → Seamless Upgrades → Full Lifecycle → Deep Insights → Auto Pilot（完全自治管理）。"
        },
        {
            id: "w15-4-q4",
            question: "CRD 和 Aggregated API 两种扩展方式的主要区别是什么？",
            options: [
                "两者功能完全相同",
                "CRD 需要编程，Aggregated API 不需要",
                "CRD 更简单'no programming required'，Aggregated API 更灵活但需要额外服务",
                "Aggregated API 已被废弃"
            ],
            answer: 2,
            rationale: "官方文档：CRD 更简单'no programming required'无需编程，由 API Server 处理；Aggregated API 更灵活'More control over API behavior'但需要额外服务部署维护。"
        },
        {
            id: "w15-4-q5",
            question: "官方文档对 Operator 控制循环模式的描述是什么？",
            options: [
                "只在启动时执行一次",
                "'continuously watching the desired state and taking actions to match reality to that state'——持续监控并调和状态",
                "定时轮询资源状态",
                "只处理创建事件"
            ],
            answer: 1,
            rationale: "官方文档：Operator 实现控制循环原则——'continuously watching the desired state and taking actions to match reality to that state'。"
        },
        {
            id: "w15-4-q6",
            question: "CRD 的 subresources.status 的作用是什么？",
            options: [
                "存储敏感信息",
                "定义资源的网络策略",
                "分离 spec（期望状态）和 status（观测状态）",
                "配置资源的持久化存储"
            ],
            answer: 2,
            rationale: "官方文档：subresources.status 分离 spec（期望状态）和 status（观测状态），遵循 Kubernetes API 约定，让用户定义期望状态，Controller 报告观测状态。"
        },
        {
            id: "w15-4-q7",
            question: "为什么 Reconcile 函数必须是幂等的？",
            options: [
                "Controller 会因资源变化、定时重试、重启等多次调用 Reconcile",
                "幂等性可以提高性能",
                "Kubernetes API 的强制要求",
                "只有幂等函数才能编译通过"
            ],
            answer: 0,
            rationale: "Controller 会因资源变化、定时重试、重启等原因多次调用 Reconcile。幂等性确保同样输入多次执行结果一致，避免重复创建资源或产生错误状态。"
        },
        {
            id: "w15-4-q8",
            question: "官方文档对 Finalizer 的用途描述是什么？",
            options: [
                "加速资源删除",
                "验证资源格式",
                "'Use finalizers for graceful deletion'——阻止立即删除以执行清理逻辑",
                "记录操作日志"
            ],
            answer: 2,
            rationale: "官方文档：'Use finalizers for graceful deletion'——Finalizer 阻止资源立即删除，让 Controller 有机会执行清理逻辑（如释放外部资源），清理完成后移除 Finalizer。"
        },
        {
            id: "w15-4-q9",
            question: "官方文档对 Operator 和 Helm 的对比描述是什么？",
            options: [
                "两者功能完全相同",
                "Helm 更适合复杂有状态应用",
                "Operator 是'Active control loop'主动控制循环，Helm 是'Package manager'包管理器",
                "Operator 只能用 Go 编写"
            ],
            answer: 2,
            rationale: "官方对比：Operator 是'Active control loop (imperative automation)'——部署后持续管理生命周期；Helm 是'Package/template manager (declarative config)'——主要负责安装卸载。"
        },
        {
            id: "w15-4-q10",
            question: "Operator SDK 支持哪些开发方式？",
            options: [
                "只支持 Go 语言",
                "Go、Ansible、Helm 三种方式",
                "只支持 Python 和 Java",
                "只支持 Helm"
            ],
            answer: 1,
            rationale: "官方文档：Operator SDK 支持 Go/Ansible/Helm 三种方式。SDK 提供'generate bundle, scorecard testing, OLM integration'——打包测试和 OLM 集成。"
        },
        {
            id: "w15-4-q11",
            question: "使用 Kubebuilder 创建 API 的命令是什么？",
            options: [
                "kubebuilder generate api",
                "kubebuilder new api",
                "kubebuilder create api --group <group> --version <version> --kind <Kind>",
                "kubebuilder add api"
            ],
            answer: 2,
            rationale: "Kubebuilder 文档：使用'kubebuilder create api'命令指定 group、version 和 Kind 名称，生成 API 类型定义和 Controller 代码。"
        },
        {
            id: "w15-4-q12",
            question: "什么场景最适合使用 Operator？",
            options: [
                "简单无状态的 Web 应用",
                "复杂有状态应用（数据库、消息队列）需要深度运维知识",
                "一次性批处理任务",
                "静态网站部署"
            ],
            answer: 1,
            rationale: "官方文档：Operator 适合'Complex stateful applications (databases, caches, message queues)'和'Applications requiring deep operational knowledge'。简单应用用 Deployment 足够。"
        }
    ]
}
