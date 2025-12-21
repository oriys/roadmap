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
    },
    "w3-2": {
        lessonId: "w3-2",
        background: [
            "Kubernetes 集群搭建工具分为三类：生产级（kubeadm）、本地开发（minikube/kind）、托管服务（GKE/EKS/AKS）。kubeadm 是官方推荐的生产集群引导工具，minikube 和 kind 专为本地开发测试设计。",
            "kubeadm 采用'引导+加入'模式：kubeadm init 在控制平面节点初始化集群，生成 CA 证书、静态 Pod 配置和 join token；kubeadm join 让工作节点加入集群。初始化后必须安装 CNI 网络插件才能使 Pod 间通信正常。",
            "minikube 支持多种驱动（Docker、VirtualBox、Hyperkit、KVM 等），可在本地快速创建单节点或多节点集群。内置 kubectl、dashboard、metrics-server 等常用插件，非常适合学习和本地开发。",
            "kind（Kubernetes IN Docker）使用 Docker 容器作为'节点'运行 Kubernetes。启动快、资源占用少，支持多节点和多控制平面配置。特别适合 CI/CD 环境的集成测试和本地快速实验。"
        ],
        keyDifficulties: [
            "kubeadm init 前置条件：禁用 swap、开放必要端口（6443、2379-2380、10250 等）、安装容器运行时（containerd）、确保 br_netfilter 模块加载。任一条件不满足都会导致初始化失败。",
            "CNI 插件选择与配置：kubeadm init 后集群处于 NotReady 状态，必须安装 CNI 插件（如 Calico、Flannel、Cilium）。--pod-network-cidr 参数需与所选 CNI 的要求匹配，否则 Pod 网络不通。",
            "kubeadm HA 拓扑：堆叠 etcd（Stacked，最少 3 节点）将 etcd 与控制平面同节点部署，简单但耦合风险高；外部 etcd（External，最少 6 节点）将 etcd 独立部署，隔离性好但复杂度高。",
            "本地工具差异：minikube 模拟完整 VM 环境，支持 LoadBalancer（通过 tunnel）、Ingress 等；kind 更轻量但某些功能（如 LoadBalancer）需额外配置。CI 环境推荐 kind，交互开发推荐 minikube。"
        ],
        handsOnPath: [
            "使用 minikube start 创建本地集群，运行 kubectl get nodes 和 kubectl cluster-info 验证集群状态，使用 minikube dashboard 打开可视化界面。",
            "使用 kind create cluster 创建集群，使用 kind get clusters 列出集群，使用 kubectl config get-contexts 查看 kubeconfig 上下文切换。",
            "部署第一个应用：kubectl create deployment nginx --image=nginx，使用 kubectl get pods 和 kubectl describe pod 查看 Pod 状态和事件。",
            "编写 kind 多节点配置文件（1 个 control-plane + 2 个 worker），使用 kind create cluster --config 创建，验证 kubectl get nodes 显示 3 个节点。"
        ],
        selfCheck: [
            "kubeadm init 的前置条件有哪些？如果忘记禁用 swap 会发生什么？",
            "为什么 kubeadm init 之后必须安装 CNI 插件？不安装会有什么表现？",
            "minikube 和 kind 的主要区别是什么？各适合什么场景？",
            "kubeadm HA 的两种拓扑（Stacked etcd vs External etcd）各有什么优缺点？",
            "如何使用 kubectl create deployment 部署应用？Deployment 和 Pod 的关系是什么？"
        ],
        extensions: [
            "研究 kubeadm 的配置文件模式（kubeadm init --config），了解如何通过 YAML 配置控制平面组件参数、证书 SAN、etcd 配置等。",
            "探索 minikube addons（如 ingress、metrics-server、registry），了解如何用 minikube addons enable 快速启用常用功能。",
            "学习 kind 的高级配置：端口映射（extraPortMappings）、挂载本地目录（extraMounts）、自定义 containerd 配置。",
            "对比托管 Kubernetes 服务（GKE、EKS、AKS）与自建集群的差异，理解托管服务在控制平面管理、升级、安全方面的优势。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/",
            "https://minikube.sigs.k8s.io/docs/start/",
            "https://kind.sigs.k8s.io/docs/user/quick-start/",
            "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/"
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
    ],
    "w3-2": [
        {
            id: "w3-2-q1",
            question: "kubeadm 的核心工作模式是什么？",
            options: [
                "自动部署整个集群",
                "kubeadm init 初始化控制平面，kubeadm join 添加节点",
                "只负责安装 kubectl",
                "只负责配置网络"
            ],
            answer: 1,
            rationale: "kubeadm 采用'引导+加入'模式：init 在控制平面节点初始化集群，join 让工作节点或其他控制平面节点加入。"
        },
        {
            id: "w3-2-q2",
            question: "kubeadm init 之后，为什么集群节点处于 NotReady 状态？",
            options: [
                "kubelet 没有启动",
                "缺少容器运行时",
                "尚未安装 CNI 网络插件",
                "etcd 未初始化"
            ],
            answer: 2,
            rationale: "kubeadm init 完成后必须安装 CNI 插件（如 Calico、Flannel）才能使 Pod 网络正常工作，节点才会变为 Ready。"
        },
        {
            id: "w3-2-q3",
            question: "使用 kubeadm 初始化集群前需要做哪些准备？",
            options: [
                "只需要安装 Docker",
                "禁用 swap、安装容器运行时、开放必要端口、加载 br_netfilter 模块",
                "只需要配置 DNS",
                "只需要安装 kubectl"
            ],
            answer: 1,
            rationale: "kubeadm 有严格的前置条件：禁用 swap、容器运行时、端口（6443、10250 等）、内核模块。任一不满足都会失败。"
        },
        {
            id: "w3-2-q4",
            question: "minikube 支持哪些驱动（drivers）？",
            options: [
                "只支持 VirtualBox",
                "只支持 Docker",
                "Docker、VirtualBox、Hyperkit、KVM、Podman 等多种",
                "只支持 Hyper-V"
            ],
            answer: 2,
            rationale: "minikube 支持多种驱动：Docker、VirtualBox、Hyperkit、KVM、Hyper-V、Podman 等，可根据本地环境选择。"
        },
        {
            id: "w3-2-q5",
            question: "kind（Kubernetes IN Docker）的核心特点是什么？",
            options: [
                "使用虚拟机运行节点",
                "使用 Docker 容器作为 Kubernetes 节点",
                "只能创建单节点集群",
                "需要云平台支持"
            ],
            answer: 1,
            rationale: "kind 使用 Docker 容器模拟 Kubernetes 节点，启动快、资源占用少，特别适合 CI/CD 和本地快速实验。"
        },
        {
            id: "w3-2-q6",
            question: "如何使用 kind 创建多节点集群？",
            options: [
                "使用 kind create cluster --nodes=3",
                "编写配置文件指定多个 nodes（control-plane 和 worker），使用 --config 参数",
                "运行多次 kind create cluster",
                "kind 不支持多节点"
            ],
            answer: 1,
            rationale: "kind 通过 YAML 配置文件定义多节点拓扑（control-plane 和 worker 角色），使用 kind create cluster --config 创建。"
        },
        {
            id: "w3-2-q7",
            question: "kubeadm HA 的'堆叠 etcd'（Stacked etcd）拓扑是什么？",
            options: [
                "etcd 运行在独立的专用节点上",
                "etcd 与控制平面组件运行在同一节点上",
                "etcd 运行在工作节点上",
                "不使用 etcd"
            ],
            answer: 1,
            rationale: "Stacked etcd 将 etcd 与控制平面（apiserver、scheduler、controller-manager）部署在同一节点，是 kubeadm 的默认 HA 模式。"
        },
        {
            id: "w3-2-q8",
            question: "kubeadm HA 中 Stacked etcd 与 External etcd 的最少节点数分别是多少？",
            options: [
                "Stacked: 1 节点，External: 3 节点",
                "Stacked: 3 节点，External: 6 节点",
                "Stacked: 2 节点，External: 4 节点",
                "两者都是 3 节点"
            ],
            answer: 1,
            rationale: "Stacked 模式最少 3 个控制平面节点；External 模式需要 3 个控制平面 + 3 个独立 etcd 节点，共 6 个。"
        },
        {
            id: "w3-2-q9",
            question: "minikube 和 kind 哪个更适合 CI/CD 环境？",
            options: [
                "minikube，因为功能更全面",
                "kind，因为启动快、资源占用少、基于容器",
                "两者完全相同",
                "都不适合"
            ],
            answer: 1,
            rationale: "kind 基于 Docker 容器，启动速度快、资源消耗低，非常适合 CI/CD 流水线中的集成测试。"
        },
        {
            id: "w3-2-q10",
            question: "kubectl create deployment 命令的作用是什么？",
            options: [
                "创建一个裸 Pod",
                "创建 Deployment 资源，Deployment 会自动创建 ReplicaSet 和 Pod",
                "创建 Service",
                "创建 ConfigMap"
            ],
            answer: 1,
            rationale: "kubectl create deployment 创建 Deployment 资源，Deployment Controller 会创建 ReplicaSet，ReplicaSet Controller 再创建 Pod。"
        },
        {
            id: "w3-2-q11",
            question: "kubeadm init 生成的 join token 用于什么？",
            options: [
                "访问 Kubernetes API",
                "让其他节点安全地加入集群",
                "登录 Dashboard",
                "配置 CNI 网络"
            ],
            answer: 1,
            rationale: "join token 用于 kubeadm join 命令，让工作节点或其他控制平面节点安全地加入集群，包含认证和 CA 验证信息。"
        },
        {
            id: "w3-2-q12",
            question: "minikube start 后如何验证集群正常运行？",
            options: [
                "查看 Docker 容器数量",
                "运行 kubectl get nodes 查看节点状态为 Ready",
                "检查 minikube 日志文件",
                "访问 localhost:8080"
            ],
            answer: 1,
            rationale: "kubectl get nodes 显示节点状态，Ready 表示节点正常；也可以用 kubectl cluster-info 查看集群信息。"
        },
        {
            id: "w3-2-q13",
            question: "kubeadm init --pod-network-cidr 参数的作用是什么？",
            options: [
                "指定节点 IP 范围",
                "指定 Pod 网络的 IP 地址范围，需与 CNI 插件配置匹配",
                "指定 Service IP 范围",
                "指定 etcd 数据目录"
            ],
            answer: 1,
            rationale: "--pod-network-cidr 定义 Pod 网络的 CIDR，不同 CNI 插件有不同要求（如 Calico 默认 192.168.0.0/16）。"
        },
        {
            id: "w3-2-q14",
            question: "如何将本地 Docker 镜像加载到 kind 集群中？",
            options: [
                "docker push 到 DockerHub",
                "kind load docker-image <image-name>",
                "直接在集群中使用，kind 自动加载",
                "复制到节点文件系统"
            ],
            answer: 1,
            rationale: "kind load docker-image 命令可以将本地 Docker 镜像加载到 kind 集群的节点中，避免从远程拉取。"
        },
        {
            id: "w3-2-q15",
            question: "为什么 External etcd 拓扑比 Stacked etcd 更可靠？",
            options: [
                "External 模式下 etcd 版本更新",
                "etcd 与控制平面解耦，一方故障不会同时影响另一方",
                "External 模式启动更快",
                "External 模式不需要负载均衡"
            ],
            answer: 1,
            rationale: "External etcd 将 etcd 部署在独立节点上，控制平面节点故障不会导致 etcd 成员丢失，提高了整体可靠性。"
        }
    ]
}
