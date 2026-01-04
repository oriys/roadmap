import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week15Guides: Record<string, LessonGuide> = {
    "w15-1": {
        lessonId: "w15-1",
        background: [
            "【K8s Resource Quotas】Kubernetes ResourceQuota 限制 Namespace 中的资源使用，支持 CPU、内存、存储、对象数量等。",
            "【AWS Service Quotas】AWS 服务配额管理，支持查看、请求增加和自动化管理配额。",
            "【多租户配额】不同租户层级应有不同的资源配额，与 SLA 和付费层级关联。",
            "【LimitRange】Kubernetes LimitRange 定义 Pod 和 Container 的默认和最大资源限制。",
        ],
        keyDifficulties: [
            "【配额粒度】选择合适的配额粒度（CPU、内存、存储、API 调用）。",
            "【动态调整】配额需要根据租户需求动态调整。",
            "【超限处理】配额超限时的通知和处理策略。",
            "【配额分配】如何在多租户间公平分配有限资源。",
        ],
        handsOnPath: [
            "配置 Kubernetes ResourceQuota",
            "实现租户配额动态管理 API",
            "配置 AWS Service Quotas 告警",
            "设计配额超限通知机制",
        ],
        selfCheck: [
            "Kubernetes ResourceQuota 支持哪些资源类型？",
            "LimitRange 和 ResourceQuota 的区别是什么？",
            "租户配额如何与付费层级关联？",
        ],
        extensions: [
            "研究 Hierarchical Namespace Controller",
            "了解 Kubernetes VPA 自动调整",
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
            "https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html",
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/resource-management",
        ],
    },
    "w15-2": {
        lessonId: "w15-2",
        background: [
            "【K8s 多租户模型】Kubernetes 支持 Namespace 级别的软隔离和集群级别的硬隔离。",
            "【Network Policy】Kubernetes Network Policy 控制 Pod 之间的网络流量，实现网络隔离。",
            "【Pod Security Standards】定义 Pod 安全配置的三个级别：Privileged、Baseline、Restricted。",
            "【Namespace 隔离】每个租户一个 Namespace，通过 RBAC 和 Network Policy 隔离。",
        ],
        keyDifficulties: [
            "【隔离级别选择】软隔离和硬隔离的权衡。",
            "【跨租户通信】某些场景需要受控的跨租户通信。",
            "【共享资源】某些资源（如 Ingress）可能需要共享。",
            "【安全加固】防止容器逃逸和权限提升。",
        ],
        handsOnPath: [
            "配置 Namespace 多租户隔离",
            "实现 Network Policy 网络隔离",
            "配置 Pod Security Standards",
            "设计 RBAC 租户权限模型",
        ],
        selfCheck: [
            "Namespace 隔离能提供什么级别的安全？",
            "Network Policy 如何控制流量？",
            "Pod Security Standards 的三个级别是什么？",
        ],
        extensions: [
            "研究 Kata Containers 的强隔离",
            "了解 vCluster 虚拟集群方案",
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/security/multi-tenancy/",
            "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
            "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
        ],
    },
    "w15-3": {
        lessonId: "w15-3",
        background: [
            "【Noisy Neighbor】嘈杂邻居问题：一个租户的高资源消耗影响其他租户的性能。",
            "【QoS Classes】Kubernetes 定义三个 QoS 类别：Guaranteed、Burstable、BestEffort。",
            "【资源隔离】通过 cgroups 在容器级别限制资源，防止单租户过度消耗。",
            "【EKS 最佳实践】AWS EKS 多租户最佳实践包括 Namespace 隔离、IRSA、资源配额。",
        ],
        keyDifficulties: [
            "【问题识别】如何识别 Noisy Neighbor。",
            "【公平调度】确保资源在租户间公平分配。",
            "【性能隔离】共享资源时保证性能 SLA。",
            "【资源抢占】高优先级任务的资源抢占策略。",
        ],
        handsOnPath: [
            "配置 Kubernetes QoS 策略",
            "实现 Noisy Neighbor 检测和告警",
            "配置 Pod Priority 和抢占",
            "设计租户资源公平调度",
        ],
        selfCheck: [
            "如何识别 Noisy Neighbor 问题？",
            "Kubernetes QoS 类别如何确定？",
            "资源抢占的策略是什么？",
        ],
        extensions: [
            "研究 CPU Manager 的静态分配",
            "了解 Topology Manager 的 NUMA 感知",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/antipatterns/noisy-neighbor/",
            "https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/",
            "https://aws.amazon.com/blogs/containers/best-practices-for-running-multi-tenant-clusters-on-amazon-eks/",
        ],
    },
    "w15-4": {
        lessonId: "w15-4",
        background: [
            "【HPA】Kubernetes Horizontal Pod Autoscaler 基于指标自动调整 Pod 副本数。",
            "【多租户扩缩】不同租户可能有不同的扩缩策略和限制。",
            "【成本优化】自动缩容减少闲置资源，降低成本。",
            "【资源预留】为租户预留一定资源保证 SLA。",
        ],
        keyDifficulties: [
            "【扩缩速度】扩容速度需要匹配业务需求。",
            "【成本控制】防止无限扩容导致成本失控。",
            "【跨租户影响】一个租户的扩容可能影响共享资源。",
            "【预测扩缩】基于预测提前扩容。",
        ],
        handsOnPath: [
            "配置 Kubernetes HPA",
            "实现租户级别扩缩策略",
            "配置 Cluster Autoscaler",
            "设计成本感知的扩缩策略",
        ],
        selfCheck: [
            "HPA 支持哪些指标类型？",
            "如何防止租户扩容成本失控？",
            "VPA 和 HPA 的区别是什么？",
        ],
        extensions: [
            "研究 KEDA 事件驱动扩缩",
            "了解 Spot Instance 的成本优化",
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
            "https://aws.amazon.com/blogs/apn/scaling-multi-tenant-saas-applications-on-amazon-eks/",
            "https://aws.amazon.com/blogs/apn/calculating-cost-per-tenant-a-saas-lens-perspective/",
        ],
    },
}

export const week15Quizzes: Record<string, QuizQuestion[]> = {
    "w15-1": [
        { id: "w15-1-q1", question: "Kubernetes ResourceQuota 可以限制什么？", options: ["只有 CPU", "CPU、内存、存储、对象数量等", "只有存储", "只有网络"], answer: 1, rationale: "ResourceQuota 支持多种资源类型限制。" },
        { id: "w15-1-q2", question: "LimitRange 的作用是什么？", options: ["限制 Namespace", "定义 Pod 和 Container 的默认和最大资源限制", "限制用户", "限制网络"], answer: 1, rationale: "LimitRange 在 Pod 级别设置资源限制。" },
        { id: "w15-1-q3", question: "ResourceQuota 和 LimitRange 的区别是什么？", options: ["相同", "Quota 限制总量，LimitRange 限制单个 Pod", "LimitRange 限制总量", "无区别"], answer: 1, rationale: "Quota 是聚合限制，LimitRange 是单体限制。" },
        { id: "w15-1-q4", question: "AWS Service Quotas 提供什么功能？", options: ["资源创建", "配额查看、请求增加和自动化管理", "资源删除", "资源迁移"], answer: 1, rationale: "Service Quotas 提供配额管理能力。" },
        { id: "w15-1-q5", question: "租户配额应该如何与付费层级关联？", options: ["不关联", "高付费租户获得更高配额", "随机分配", "固定配额"], answer: 1, rationale: "配额应该与商业层级匹配。" },
        { id: "w15-1-q6", question: "配额超限时应该如何处理？", options: ["忽略", "拒绝新请求并通知租户", "自动扩容", "删除资源"], answer: 1, rationale: "应该拒绝超限请求并及时通知。" },
        { id: "w15-1-q7", question: "动态配额调整的场景是什么？", options: ["不需要调整", "租户升级、临时活动、业务增长", "固定不变", "自动调整"], answer: 1, rationale: "业务变化需要动态调整配额。" },
        { id: "w15-1-q8", question: "Hierarchical Namespace 的作用是什么？", options: ["平面结构", "支持层级化的 Namespace 和资源继承", "只有一层", "无层级"], answer: 1, rationale: "HNC 支持 Namespace 层级管理。" },
        { id: "w15-1-q9", question: "配额粒度的选择应该考虑什么？", options: ["越细越好", "业务需求、管理复杂度、成本", "越粗越好", "固定粒度"], answer: 1, rationale: "粒度需要在精确性和复杂度间平衡。" },
        { id: "w15-1-q10", question: "配额告警应该设置在什么阈值？", options: ["100%", "80% 或更早，给予调整时间", "50%", "10%"], answer: 1, rationale: "提前告警给予响应时间。" },
        { id: "w15-1-q11", question: "VPA 自动调整的作用是什么？", options: ["水平扩缩", "垂直调整 Pod 的资源请求", "网络调整", "存储调整"], answer: 1, rationale: "VPA 自动调整 Pod 的 CPU 和内存请求。" },
        { id: "w15-1-q12", question: "多租户配额公平分配的原则是什么？", options: ["平均分配", "根据付费层级和实际需求分配", "随机分配", "不分配"], answer: 1, rationale: "应该综合考虑商业和技术因素。" },
    ],
    "w15-2": [
        { id: "w15-2-q1", question: "Kubernetes 多租户隔离模型有哪些？", options: ["只有硬隔离", "软隔离（Namespace）和硬隔离（集群）", "只有软隔离", "无隔离"], answer: 1, rationale: "Kubernetes 支持不同级别的隔离。" },
        { id: "w15-2-q2", question: "Network Policy 的作用是什么？", options: ["路由", "控制 Pod 之间的网络流量", "负载均衡", "DNS 解析"], answer: 1, rationale: "Network Policy 实现网络访问控制。" },
        { id: "w15-2-q3", question: "Pod Security Standards 的三个级别是什么？", options: ["Low、Medium、High", "Privileged、Baseline、Restricted", "1、2、3", "A、B、C"], answer: 1, rationale: "PSS 定义三个安全配置级别。" },
        { id: "w15-2-q4", question: "Namespace 隔离的局限是什么？", options: ["无局限", "是软隔离，共享内核可能有安全风险", "完全隔离", "性能太好"], answer: 1, rationale: "Namespace 是逻辑隔离，不是完全隔离。" },
        { id: "w15-2-q5", question: "RBAC 在多租户中的作用是什么？", options: ["网络隔离", "控制用户对 Kubernetes 资源的访问权限", "存储隔离", "计算隔离"], answer: 1, rationale: "RBAC 实现细粒度的权限控制。" },
        { id: "w15-2-q6", question: "跨租户通信应该如何处理？", options: ["完全禁止", "通过受控的方式允许必要的通信", "完全开放", "不管理"], answer: 1, rationale: "某些场景需要受控的跨租户通信。" },
        { id: "w15-2-q7", question: "Kata Containers 提供什么级别的隔离？", options: ["进程隔离", "轻量级虚拟机隔离，更强安全", "无隔离", "网络隔离"], answer: 1, rationale: "Kata 使用轻量级 VM 提供强隔离。" },
        { id: "w15-2-q8", question: "vCluster 的作用是什么？", options: ["网络虚拟化", "创建虚拟 Kubernetes 集群", "存储虚拟化", "计算虚拟化"], answer: 1, rationale: "vCluster 在共享集群上创建虚拟集群。" },
        { id: "w15-2-q9", question: "Network Policy 默认行为是什么？", options: ["全部拒绝", "无策略时允许所有流量", "全部允许", "随机"], answer: 1, rationale: "没有 Network Policy 时默认允许。" },
        { id: "w15-2-q10", question: "容器逃逸防护的方法是什么？", options: ["无法防护", "限制权限、安全上下文、运行时防护", "完全隔离", "物理隔离"], answer: 1, rationale: "多层防护减少逃逸风险。" },
        { id: "w15-2-q11", question: "Restricted Pod Security 的限制是什么？", options: ["无限制", "禁止特权容器、限制能力、只读根文件系统", "只限制网络", "只限制存储"], answer: 1, rationale: "Restricted 是最严格的安全策略。" },
        { id: "w15-2-q12", question: "Ingress 共享的挑战是什么？", options: ["无挑战", "需要隔离路由规则和证书", "自动隔离", "不能共享"], answer: 1, rationale: "共享 Ingress 需要正确的路由隔离。" },
    ],
    "w15-3": [
        { id: "w15-3-q1", question: "Noisy Neighbor 问题是什么？", options: ["网络噪声", "一个租户高资源消耗影响其他租户", "日志噪声", "告警噪声"], answer: 1, rationale: "Noisy Neighbor 是多租户的典型问题。" },
        { id: "w15-3-q2", question: "Kubernetes QoS 类别有哪些？", options: ["只有一种", "Guaranteed、Burstable、BestEffort", "只有两种", "A、B、C"], answer: 1, rationale: "Kubernetes 定义三个 QoS 类别。" },
        { id: "w15-3-q3", question: "如何获得 Guaranteed QoS？", options: ["默认", "requests 等于 limits", "不设置 limits", "设置 limits 为 0"], answer: 1, rationale: "资源请求等于限制时获得 Guaranteed。" },
        { id: "w15-3-q4", question: "cgroups 的作用是什么？", options: ["容器创建", "限制和隔离进程资源使用", "网络管理", "存储管理"], answer: 1, rationale: "cgroups 是 Linux 资源限制机制。" },
        { id: "w15-3-q5", question: "如何识别 Noisy Neighbor？", options: ["无法识别", "监控资源使用和性能指标对比", "用户投诉", "随机检测"], answer: 1, rationale: "需要监控来识别资源异常消耗。" },
        { id: "w15-3-q6", question: "Pod Priority 的作用是什么？", options: ["排序", "定义 Pod 的调度优先级和抢占权", "日志优先", "网络优先"], answer: 1, rationale: "Priority 影响调度和抢占决策。" },
        { id: "w15-3-q7", question: "资源抢占的代价是什么？", options: ["无代价", "被抢占的 Pod 会被终止", "增加资源", "提高性能"], answer: 1, rationale: "抢占会影响低优先级工作负载。" },
        { id: "w15-3-q8", question: "EKS 多租户最佳实践包括什么？", options: ["只有 Namespace", "Namespace 隔离、IRSA、资源配额", "只有 RBAC", "只有网络"], answer: 1, rationale: "AWS 推荐多层次的隔离策略。" },
        { id: "w15-3-q9", question: "BestEffort QoS 的风险是什么？", options: ["最安全", "资源压力时最先被驱逐", "最稳定", "性能最好"], answer: 1, rationale: "BestEffort Pod 在资源不足时首先被驱逐。" },
        { id: "w15-3-q10", question: "公平调度的目标是什么？", options: ["最快调度", "确保各租户获得公平的资源份额", "随机调度", "优先大租户"], answer: 1, rationale: "公平调度防止资源被少数租户垄断。" },
        { id: "w15-3-q11", question: "CPU Manager 静态分配的好处是什么？", options: ["无好处", "绑定 CPU 核心减少上下文切换", "增加共享", "减少性能"], answer: 1, rationale: "静态分配适合对延迟敏感的工作负载。" },
        { id: "w15-3-q12", question: "Noisy Neighbor 的防护措施有哪些？", options: ["无措施", "资源限制、隔离、监控告警", "增加资源", "减少租户"], answer: 1, rationale: "多层措施防护 Noisy Neighbor。" },
    ],
    "w15-4": [
        { id: "w15-4-q1", question: "HPA 基于什么自动扩缩？", options: ["时间", "指标（CPU、内存、自定义指标）", "日志", "事件"], answer: 1, rationale: "HPA 基于指标自动调整 Pod 数量。" },
        { id: "w15-4-q2", question: "租户级别扩缩策略的意义是什么？", options: ["无意义", "不同租户可能有不同的扩缩需求和限制", "统一更好", "不需要"], answer: 1, rationale: "租户需求不同需要差异化策略。" },
        { id: "w15-4-q3", question: "如何防止扩容成本失控？", options: ["不限制", "设置最大副本数和成本预算", "无限扩容", "禁止扩容"], answer: 1, rationale: "需要设置上限防止成本失控。" },
        { id: "w15-4-q4", question: "Cluster Autoscaler 的作用是什么？", options: ["Pod 扩缩", "自动调整集群节点数量", "服务扩缩", "存储扩缩"], answer: 1, rationale: "Cluster Autoscaler 管理节点数量。" },
        { id: "w15-4-q5", question: "VPA 和 HPA 的区别是什么？", options: ["相同", "VPA 调整单个 Pod 资源，HPA 调整 Pod 数量", "VPA 更好", "HPA 更好"], answer: 1, rationale: "VPA 是垂直扩缩，HPA 是水平扩缩。" },
        { id: "w15-4-q6", question: "资源预留的作用是什么？", options: ["浪费资源", "保证租户 SLA，确保资源可用", "增加成本", "减少弹性"], answer: 1, rationale: "预留确保关键租户的资源保障。" },
        { id: "w15-4-q7", question: "KEDA 的特点是什么？", options: ["只支持 CPU", "事件驱动扩缩，支持多种事件源", "只支持 HPA", "不支持 Kubernetes"], answer: 1, rationale: "KEDA 支持基于事件的扩缩。" },
        { id: "w15-4-q8", question: "Spot Instance 的优势是什么？", options: ["最稳定", "成本低但可能被中断", "最贵", "最安全"], answer: 1, rationale: "Spot 提供低成本但有中断风险。" },
        { id: "w15-4-q9", question: "扩容速度的权衡是什么？", options: ["越快越好", "速度和稳定性的平衡", "越慢越好", "固定速度"], answer: 1, rationale: "过快扩容可能导致不稳定。" },
        { id: "w15-4-q10", question: "预测扩缩的好处是什么？", options: ["无好处", "提前准备资源减少响应延迟", "增加成本", "增加复杂度"], answer: 1, rationale: "预测可以提前准备避免性能问题。" },
        { id: "w15-4-q11", question: "成本感知扩缩应该考虑什么？", options: ["只看性能", "资源成本、业务价值、SLA 要求", "只看成本", "只看 SLA"], answer: 1, rationale: "需要综合考虑成本和业务需求。" },
        { id: "w15-4-q12", question: "跨租户扩容影响如何控制？", options: ["无法控制", "通过配额和优先级限制影响", "完全隔离", "不控制"], answer: 1, rationale: "配额和优先级限制扩容的影响范围。" },
    ],
}
