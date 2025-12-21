import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "w3-1": {
        lessonId: "w3-1",
        background: [
            "Kubernetes 集群由控制平面（Control Plane）和工作节点（Worker Nodes）组成。控制平面负责全局决策（如调度、响应事件），工作节点运行实际的容器化应用。",
            "控制平面核心组件：kube-apiserver（API 入口）、etcd（持久化存储）、kube-scheduler（Pod 调度）、kube-controller-manager（运行控制器）。所有组件通过 API Server 通信。",
            "工作节点组件：kubelet（确保 Pod 运行）、kube-proxy（维护网络规则）、容器运行时（如 containerd）。kubelet 接收来自控制平面的指令并管理本地 Pod 生命周期。",
            "Kubernetes 的核心设计是声明式：用户声明期望状态（Desired State），控制器通过调和循环（Reconciliation Loop）持续将实际状态（Current State）向期望状态靠拢。"
        ],
        keyDifficulties: [
            "API Server 的中心地位：所有组件（kubectl、kubelet、controller、scheduler）都通过 API Server 读写状态。API Server 是唯一直接操作 etcd 的组件，其他组件通过 watch 机制获取变更。",
            "调和循环（Reconciliation Loop）：控制器持续运行 watch → compare → act 循环。发现实际状态与期望状态不符时，触发修正动作（如创建/删除 Pod）。这是 Kubernetes 自愈能力的核心。",
            "控制器分工与解耦：每种资源类型有专门的控制器（Deployment Controller、ReplicaSet Controller、Job Controller）。控制器之间通过 API Server 间接协作，互不直接依赖。",
            "etcd 的关键性：etcd 存储所有集群状态（资源对象、配置、密钥）。etcd 故障意味着集群状态丢失，生产环境必须配置 etcd 高可用与定期备份。"
        ],
        handsOnPath: [
            "使用 kubectl cluster-info 查看控制平面端点，使用 kubectl get componentstatuses（已废弃但仍可参考）或 kubectl get --raw /healthz 检查组件健康。",
            "使用 kubectl get nodes -o wide 查看节点信息（OS、容器运行时、内核版本），使用 kubectl describe node <name> 查看节点容量、已分配资源和事件。",
            "在 minikube/kind 集群中使用 docker exec 进入控制平面容器，查看 /etc/kubernetes/manifests/ 下的静态 Pod 配置（apiserver、scheduler、controller-manager、etcd）。",
            "使用 kubectl get events --all-namespaces 观察集群事件，理解控制器如何响应资源变更（如 Deployment 扩容触发 ReplicaSet 调整再触发 Pod 创建）。"
        ],
        selfCheck: [
            "列出控制平面的四个核心组件，分别描述它们的职责。如果 kube-scheduler 挂掉，会发生什么？",
            "什么是调和循环（Reconciliation Loop）？它如何实现 Kubernetes 的自愈能力？",
            "为什么说 API Server 是集群的'大脑中枢'？其他组件如何与它交互？",
            "etcd 存储什么数据？为什么 etcd 的高可用和备份如此重要？",
            "kubelet 和 kube-proxy 分别负责什么？它们运行在控制平面还是工作节点？"
        ],
        extensions: [
            "阅读 Kubernetes 架构设计文档，深入理解 watch 机制、informer 缓存和 leader election 的工作原理。",
            "研究 kube-controller-manager 源码中的 ReplicaSet Controller，理解控制器如何 watch Pod 和 ReplicaSet 并执行调和。",
            "探索多控制平面（HA Control Plane）部署模式，了解 etcd 集群、API Server 负载均衡和 leader election 的配置。",
            "比较 Kubernetes 与其他编排工具（如 Nomad、Docker Swarm）在架构设计上的差异，理解 Kubernetes 的设计取舍。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/overview/components/",
            "https://kubernetes.io/docs/concepts/overview/",
            "https://kubernetes.io/docs/concepts/architecture/controller/"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "w3-1": [
        {
            id: "w3-1-q1",
            question: "Kubernetes 集群由哪两大部分组成？",
            options: [
                "前端和后端",
                "控制平面（Control Plane）和工作节点（Worker Nodes）",
                "主节点和从节点",
                "管理层和数据层"
            ],
            answer: 1,
            rationale: "Kubernetes 集群由控制平面（负责全局决策）和工作节点（运行容器化应用）组成。"
        },
        {
            id: "w3-1-q2",
            question: "kube-apiserver 的核心作用是什么？",
            options: [
                "运行容器",
                "存储集群状态",
                "暴露 Kubernetes HTTP API，作为所有组件通信的中心枢纽",
                "调度 Pod 到节点"
            ],
            answer: 2,
            rationale: "kube-apiserver 是 Kubernetes 的 API 入口，所有组件（kubectl、kubelet、controller 等）都通过它读写集群状态。"
        },
        {
            id: "w3-1-q3",
            question: "etcd 在 Kubernetes 中的作用是什么？",
            options: [
                "运行容器运行时",
                "存储所有集群配置和状态的持久化键值存储",
                "调度 Pod",
                "负载均衡"
            ],
            answer: 1,
            rationale: "etcd 是一致性、高可用的键值存储，保存所有 API Server 数据，是集群状态的唯一真相来源。"
        },
        {
            id: "w3-1-q4",
            question: "kube-scheduler 的职责是什么？",
            options: [
                "运行控制器",
                "存储配置",
                "为未绑定节点的 Pod 选择合适的节点",
                "管理网络规则"
            ],
            answer: 2,
            rationale: "kube-scheduler 监视没有分配节点的 Pod，根据资源需求、亲和性等约束为每个 Pod 选择合适的节点。"
        },
        {
            id: "w3-1-q5",
            question: "kube-controller-manager 运行什么？",
            options: [
                "API Server",
                "各种控制器（如 Deployment Controller、ReplicaSet Controller）",
                "容器运行时",
                "网络代理"
            ],
            answer: 1,
            rationale: "kube-controller-manager 运行实现 Kubernetes API 行为的各种控制器，如 Deployment、ReplicaSet、Node、Job 控制器等。"
        },
        {
            id: "w3-1-q6",
            question: "kubelet 运行在哪里？职责是什么？",
            options: [
                "控制平面，负责 API 处理",
                "工作节点，确保 Pod 及其容器正常运行",
                "控制平面，负责调度",
                "工作节点，负责存储"
            ],
            answer: 1,
            rationale: "kubelet 运行在每个工作节点上，与控制平面通信，管理本地 Pod 的生命周期，确保容器按规范运行。"
        },
        {
            id: "w3-1-q7",
            question: "kube-proxy 的作用是什么？",
            options: [
                "代理 API 请求",
                "在节点上维护网络规则，实现 Service 的网络访问",
                "代理 etcd 请求",
                "代理容器日志"
            ],
            answer: 1,
            rationale: "kube-proxy 运行在每个节点上，维护网络规则（iptables/IPVS），实现 Service 的负载均衡和服务发现。"
        },
        {
            id: "w3-1-q8",
            question: "什么是调和循环（Reconciliation Loop）？",
            options: [
                "定时重启所有 Pod",
                "控制器持续将实际状态向期望状态靠拢的过程",
                "定期备份 etcd",
                "循环检查节点健康"
            ],
            answer: 1,
            rationale: "调和循环是 Kubernetes 控制器的核心模式：持续 watch 资源变更，比较期望与实际状态，执行修正动作。"
        },
        {
            id: "w3-1-q9",
            question: "如果 kube-scheduler 故障，会发生什么？",
            options: [
                "所有运行中的 Pod 立即停止",
                "已运行的 Pod 不受影响，但新 Pod 无法被调度到节点",
                "etcd 数据丢失",
                "API Server 无法访问"
            ],
            answer: 1,
            rationale: "Scheduler 故障只影响新 Pod 的调度，已运行的 Pod 由 kubelet 管理，不受影响。"
        },
        {
            id: "w3-1-q10",
            question: "哪个组件是唯一直接与 etcd 交互的？",
            options: [
                "kubelet",
                "kube-scheduler",
                "kube-apiserver",
                "kube-proxy"
            ],
            answer: 2,
            rationale: "只有 kube-apiserver 直接读写 etcd，其他组件通过 API Server 间接访问集群状态。"
        },
        {
            id: "w3-1-q11",
            question: "Kubernetes 为什么采用多个专用控制器而不是一个大控制器？",
            options: [
                "减少代码量",
                "降低耦合，提高容错性和可维护性",
                "加快启动速度",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "专用控制器设计降低耦合，一个控制器故障不影响其他控制器；也更容易理解和维护。"
        },
        {
            id: "w3-1-q12",
            question: "cloud-controller-manager 的作用是什么？",
            options: [
                "必须运行在所有集群中",
                "与云提供商集成，管理云特定资源（如负载均衡器、存储卷）",
                "管理本地存储",
                "替代 kube-controller-manager"
            ],
            answer: 1,
            rationale: "cloud-controller-manager 是可选组件，用于云环境集成，管理云负载均衡器、节点、路由等云特定资源。"
        },
        {
            id: "w3-1-q13",
            question: "Kubernetes 的声明式模型意味着什么？",
            options: [
                "用户执行命令告诉 K8s 做什么",
                "用户声明期望状态，系统自动将实际状态向期望状态调和",
                "系统自动决定应用架构",
                "只能通过 YAML 文件操作"
            ],
            answer: 1,
            rationale: "声明式模型中，用户描述'我想要什么'（期望状态），Kubernetes 控制器负责'如何达到'。"
        },
        {
            id: "w3-1-q14",
            question: "Deployment Controller 创建 Pod 的方式是什么？",
            options: [
                "直接创建 Pod",
                "通过 API Server 创建 ReplicaSet，ReplicaSet Controller 再创建 Pod",
                "调用 kubelet 创建",
                "通过 kube-proxy 创建"
            ],
            answer: 1,
            rationale: "Deployment Controller 管理 ReplicaSet，ReplicaSet Controller 管理 Pod。这种分层设计实现了关注点分离。"
        },
        {
            id: "w3-1-q15",
            question: "为什么 etcd 备份在生产环境中至关重要？",
            options: [
                "备份可以加速集群启动",
                "etcd 存储所有集群状态，丢失意味着集群配置和资源定义全部丢失",
                "备份可以提高性能",
                "Kubernetes 要求必须备份"
            ],
            answer: 1,
            rationale: "etcd 是集群状态的唯一真相来源，包含所有资源对象、配置和密钥，灾难恢复依赖 etcd 备份。"
        }
    ]
}
