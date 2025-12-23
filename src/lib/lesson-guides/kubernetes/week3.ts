import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "w3-1": {
        lessonId: "w3-1",
        background: [
            "【Kubernetes 定义】官方文档：'Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services that facilitates both declarative configuration and automation'——便携、可扩展的容器工作负载管理平台。",
            "【声明式核心】官方文档：'Kubernetes comprises a set of independent, composable control processes that continuously drive the current state towards the provided desired state'——独立控制进程持续将当前状态推向期望状态。",
            "【控制器模式】Controller 文档：'controllers are control loops that watch the state of your cluster, then make or request changes where needed'——控制器是观察集群状态并在需要时做出或请求更改的控制循环。",
            "【控制平面组件】kube-apiserver（暴露 HTTP API 的核心服务器）、etcd（一致且高可用的键值存储）、kube-scheduler（为未绑定节点的 Pod 分配合适节点）、kube-controller-manager（运行实现 API 行为的控制器）。",
            "【节点组件】kubelet（'Ensures that Pods are running, including their containers'）、kube-proxy（'Maintains network rules on nodes to implement Services'）、容器运行时（负责运行容器的软件）。"
        ],
        keyDifficulties: [
            "【调和循环本质】Controller 文档：'Each controller tries to move the current cluster state closer to the desired state'——每个控制器尝试将当前集群状态向期望状态靠拢，形成 Watch → Analyze → Act → Report → Repeat 循环。",
            "【两种控制方式】Controller 文档区分：通过 API Server 控制（'The Job controller does not run any Pods or containers itself. Instead, the Job controller tells the API server to create or remove Pods'）和直接控制（与外部系统如云提供商通信）。",
            "【控制器设计原则】使用多个简单控制器而非单一大控制器：'Multiple simple controllers manage specific aspects rather than one monolithic controller'——关注点分离、故障隔离、通过标签区分管理的资源。",
            "【etcd 关键性】作为所有 API Server 数据的后端存储，etcd 是集群状态的唯一真相来源。故障意味着集群状态丢失，生产环境必须配置高可用与定期备份。",
            "【kube-scheduler 职责边界】'Looks for Pods not yet bound to a node, and assigns each Pod to a suitable node'——只负责选择节点，不负责运行 Pod；Scheduler 故障只影响新 Pod 调度。"
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
    },
    "w3-3": {
        lessonId: "w3-3",
        background: [
            "Kubernetes 对象是集群中的持久化实体，代表用户的'意图记录'（Records of Intent）。每个对象包含 spec（期望状态）和 status（实际状态）两个核心字段，控制平面持续将 status 向 spec 靠拢。",
            "YAML/JSON 配置文件描述 Kubernetes 对象，必须包含四个字段：apiVersion（API 版本）、kind（对象类型）、metadata（元数据，如 name、namespace、labels）、spec（期望状态）。",
            "Kubernetes 提供三种对象管理方式：命令式命令（kubectl create deployment）、命令式配置（kubectl create -f）、声明式配置（kubectl apply -f）。生产环境推荐使用声明式配置结合版本控制。",
            "kubectl apply 实现声明式管理，通过三方合并（three-way merge）比较配置文件、集群当前状态和上次应用的配置（last-applied-configuration 注解），智能地合并变更而非简单替换。"
        ],
        keyDifficulties: [
            "spec vs status：spec 是用户声明的期望状态，status 是系统观测到的实际状态。控制器的调和循环不断读取 spec、检查 status、执行动作缩小差距。用户只写 spec，系统填充 status。",
            "三方合并机制：kubectl apply 在对象的 metadata.annotations 中存储 kubectl.kubernetes.io/last-applied-configuration。合并时比较三者：配置文件新增字段会添加，删除字段会移除，手动修改的字段会保留（如果配置文件未指定）。",
            "声明式 vs 命令式：命令式（kubectl scale）直接操作集群，不留痕迹；声明式（kubectl apply -f）以配置文件为真相来源，支持 diff/review/回滚。混用两种方式会导致配置漂移。",
            "标签与选择器：labels 是对象的键值对标签，selectors 用于筛选对象。Deployment 通过 selector 关联 Pod，Service 通过 selector 选择后端 Pod。标签设计影响资源管理的灵活性。"
        ],
        handsOnPath: [
            "编写一个 Deployment 的 YAML 文件，使用 kubectl apply -f 部署，然后修改 image 版本再次 apply，观察 kubectl diff 输出和 rollout 过程。",
            "使用 kubectl get deployment nginx -o yaml 查看完整对象，对比 spec 和 status 字段，找到 last-applied-configuration 注解。",
            "实验三种管理方式的差异：先用 kubectl create deployment，再用 kubectl scale 扩容，最后用 kubectl apply 覆盖配置文件，观察 replicas 字段的变化。",
            "使用 kubectl label 给 Pod 添加标签，用 kubectl get pods -l app=nginx 筛选，理解标签选择器的工作方式。"
        ],
        selfCheck: [
            "Kubernetes 对象的 spec 和 status 字段分别代表什么？控制器如何使用它们？",
            "kubectl apply 的三方合并（three-way merge）是如何工作的？last-applied-configuration 注解的作用是什么？",
            "为什么生产环境推荐使用声明式配置而非命令式命令？混用会有什么问题？",
            "一个有效的 Kubernetes YAML 配置文件必须包含哪四个字段？",
            "如何使用标签选择器筛选 Pod？Deployment 如何通过 selector 关联 Pod？"
        ],
        extensions: [
            "学习 Kustomize 的 base + overlay 模式，了解如何在不同环境（dev/staging/prod）间复用和定制配置。",
            "研究 kubectl diff 的实现原理（server-side dry-run），理解如何在应用前预览变更。",
            "探索 Strategic Merge Patch 和 JSON Merge Patch 的区别，了解 kubectl patch 命令的使用场景。",
            "了解 GitOps 工具（如 Argo CD、Flux）如何基于 Git 仓库自动同步 Kubernetes 配置，实现持续交付。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/overview/working-with-objects/",
            "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/",
            "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/"
        ]
    },
    "w3-4": {
        lessonId: "w3-4",
        background: [
            "Pod 生命周期包含多个阶段（Phase）：Pending（等待调度或拉取镜像）、Running（至少一个容器运行中）、Succeeded（所有容器成功退出）、Failed（至少一个容器失败退出）、Unknown（无法获取状态）。",
            "容器有三种状态：Waiting（等待启动，如拉取镜像）、Running（正在执行）、Terminated（已退出，成功或失败）。kubectl describe pod 可以查看容器的详细状态和原因。",
            "Kubernetes 提供三种探针检测容器健康：Liveness Probe（存活探针，失败则重启容器）、Readiness Probe（就绪探针，失败则从 Service 中移除）、Startup Probe（启动探针，保护慢启动应用）。",
            "重启策略（restartPolicy）控制容器退出后的行为：Always（总是重启，Deployment 默认）、OnFailure（仅失败时重启，Job 常用）、Never（从不重启）。CrashLoopBackOff 表示容器反复崩溃，kubelet 应用指数退避延迟重启。"
        ],
        keyDifficulties: [
            "探针类型选择：Liveness 检测死锁/无响应（失败则杀死重启），Readiness 检测是否就绪接收流量（失败则暂时移出负载均衡），Startup 用于慢启动应用（未成功前其他探针不生效）。",
            "探针配置参数：initialDelaySeconds（启动后延迟首次探测）、periodSeconds（探测间隔）、timeoutSeconds（超时）、failureThreshold（连续失败次数判定失败）、successThreshold（连续成功次数判定成功）。",
            "CrashLoopBackOff 排查：通过 kubectl describe pod 查看事件、kubectl logs 查看容器日志、kubectl logs --previous 查看崩溃前日志。常见原因：应用错误、配置错误、资源不足、探针配置过于激进。",
            "Init Containers：在应用容器之前按顺序运行，用于初始化准备工作（如等待依赖服务、下载配置）。所有 Init Containers 必须成功完成，Pod 才会启动应用容器。"
        ],
        handsOnPath: [
            "创建一个带 Liveness Probe（HTTP GET）的 Pod，故意让探针失败，观察 kubectl describe pod 中的事件和容器重启次数。",
            "创建一个带 Readiness Probe 的 Deployment 和 Service，在探针失败期间用 kubectl get endpoints 观察 Pod IP 是否从 Endpoints 中移除。",
            "故意创建一个会立即崩溃的 Pod（如错误的 command），观察 CrashLoopBackOff 状态，使用 kubectl logs --previous 查看崩溃日志。",
            "创建带 Init Container 的 Pod，让 Init Container 等待某个条件（如 Service 存在），观察 Pod 状态停留在 Init:0/1 直到条件满足。"
        ],
        selfCheck: [
            "Pod 的五个阶段（Phase）分别代表什么状态？Pending 和 Unknown 的常见原因是什么？",
            "Liveness、Readiness、Startup 三种探针的区别是什么？各自的失败后果是什么？",
            "CrashLoopBackOff 意味着什么？如何使用 kubectl 命令排查？",
            "探针支持哪三种探测方式（HTTP/TCP/Exec）？各适合什么场景？",
            "restartPolicy 的三个选项（Always/OnFailure/Never）分别在什么场景使用？"
        ],
        extensions: [
            "研究 Pod Disruption Budget（PDB），了解如何保护 Pod 免受自愿中断（如节点维护、Deployment 滚动更新）。",
            "探索 Ephemeral Containers，了解如何在运行中的 Pod 中临时注入调试容器。",
            "学习 Pod 的优雅终止流程：SIGTERM → terminationGracePeriodSeconds → SIGKILL，以及 preStop 钩子的使用。",
            "研究 Pod Overhead 和 PodConditions，了解 Kubernetes 如何精细控制 Pod 调度和就绪判定。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/",
            "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
            "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "w3-1": [
        {
            id: "w3-1-q1",
            question: "Kubernetes 官方文档对其定义的核心特征是什么？",
            options: [
                "一个虚拟机管理平台",
                "'portable, extensible, open source platform for managing containerized workloads and services'",
                "一个代码部署系统",
                "一个数据库管理平台"
            ],
            answer: 1,
            rationale: "官方定义 Kubernetes 为'portable, extensible, open source platform for managing containerized workloads and services that facilitates both declarative configuration and automation'。"
        },
        {
            id: "w3-1-q2",
            question: "官方文档描述的声明式模型核心特点是什么？",
            options: [
                "'independent, composable control processes that continuously drive the current state towards the provided desired state'",
                "执行预定义的工作流脚本",
                "用户手动执行每一步操作",
                "系统自动决定应用架构"
            ],
            answer: 0,
            rationale: "官方文档：'Kubernetes comprises a set of independent, composable control processes that continuously drive the current state towards the provided desired state'——独立控制进程持续推向期望状态。"
        },
        {
            id: "w3-1-q3",
            question: "Controller 文档对控制器的定义是什么？",
            options: [
                "一个容器运行时组件",
                "一个网络代理服务",
                "'control loops that watch the state of your cluster, then make or request changes where needed'",
                "一个存储管理服务"
            ],
            answer: 2,
            rationale: "Controller 文档明确：'controllers are control loops that watch the state of your cluster, then make or request changes where needed'——观察并在需要时做出更改的控制循环。"
        },
        {
            id: "w3-1-q4",
            question: "kube-apiserver 在官方文档中的角色描述是什么？",
            options: [
                "存储集群状态",
                "调度 Pod 到节点",
                "运行容器",
                "'the core component server that exposes the Kubernetes HTTP API'"
            ],
            answer: 3,
            rationale: "官方组件文档：kube-apiserver 是'the core component server that exposes the Kubernetes HTTP API'——暴露 HTTP API 的核心服务器。"
        },
        {
            id: "w3-1-q5",
            question: "etcd 在 Kubernetes 中的角色是什么？",
            options: [
                "'Consistent and highly-available key value store for all API server data'",
                "运行容器运行时",
                "调度 Pod",
                "负载均衡"
            ],
            answer: 0,
            rationale: "官方文档：etcd 是'Consistent and highly-available key value store for all API server data'——所有 API Server 数据的一致且高可用的键值存储。"
        },
        {
            id: "w3-1-q6",
            question: "kube-scheduler 的职责描述是什么？",
            options: [
                "运行控制器",
                "存储配置",
                "'Looks for Pods not yet bound to a node, and assigns each Pod to a suitable node'",
                "管理网络规则"
            ],
            answer: 2,
            rationale: "官方文档：kube-scheduler'Looks for Pods not yet bound to a node, and assigns each Pod to a suitable node'——为未绑定节点的 Pod 分配合适节点。"
        },
        {
            id: "w3-1-q7",
            question: "kubelet 的职责描述是什么？",
            options: [
                "暴露 HTTP API",
                "维护网络规则",
                "存储集群数据",
                "'Ensures that Pods are running, including their containers'"
            ],
            answer: 3,
            rationale: "官方文档：kubelet'Ensures that Pods are running, including their containers'——确保 Pod 及其容器正在运行。"
        },
        {
            id: "w3-1-q8",
            question: "kube-proxy 的职责描述是什么？",
            options: [
                "'Maintains network rules on nodes to implement Services'",
                "代理 API 请求",
                "代理 etcd 请求",
                "代理容器日志"
            ],
            answer: 0,
            rationale: "官方文档：kube-proxy'Maintains network rules on nodes to implement Services'——在节点上维护网络规则以实现 Service。"
        },
        {
            id: "w3-1-q9",
            question: "Controller 文档对 Job controller 工作方式的描述是什么？",
            options: [
                "直接运行 Pod 和容器",
                "'The Job controller does not run any Pods or containers itself. Instead, the Job controller tells the API server to create or remove Pods'",
                "绕过 API Server 直接操作 etcd",
                "由 kubelet 直接调用"
            ],
            answer: 1,
            rationale: "Controller 文档明确：'The Job controller does not run any Pods or containers itself. Instead, the Job controller tells the API server to create or remove Pods'——通过 API Server 间接操作。"
        },
        {
            id: "w3-1-q10",
            question: "如果 kube-scheduler 故障，会发生什么？",
            options: [
                "所有运行中的 Pod 立即停止",
                "etcd 数据丢失",
                "已运行的 Pod 不受影响，但新 Pod 无法被调度到节点",
                "API Server 无法访问"
            ],
            answer: 2,
            rationale: "Scheduler 只负责调度新 Pod，故障只影响新 Pod 的调度；已运行的 Pod 由 kubelet 管理，不受影响。"
        },
        {
            id: "w3-1-q11",
            question: "哪个组件是唯一直接与 etcd 交互的？",
            options: [
                "kubelet",
                "kube-scheduler",
                "kube-proxy",
                "kube-apiserver"
            ],
            answer: 3,
            rationale: "只有 kube-apiserver 直接读写 etcd，其他组件通过 API Server 间接访问集群状态，这是 Kubernetes 的架构设计。"
        },
        {
            id: "w3-1-q12",
            question: "Controller 文档中描述的控制器设计原则是什么？",
            options: [
                "使用一个大控制器管理所有资源",
                "控制器之间直接通信",
                "'Multiple simple controllers manage specific aspects rather than one monolithic controller'",
                "控制器需要手动触发"
            ],
            answer: 2,
            rationale: "Controller 文档设计原则：'Multiple simple controllers manage specific aspects rather than one monolithic controller'——多个简单控制器各管理特定方面。"
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
    ],
    "w3-3": [
        {
            id: "w3-3-q1",
            question: "Kubernetes 对象的 spec 字段代表什么？",
            options: [
                "对象的唯一标识符",
                "用户声明的期望状态",
                "系统观测到的实际状态",
                "对象的历史版本"
            ],
            answer: 1,
            rationale: "spec 是期望状态（Desired State），由用户定义。控制器读取 spec 并努力使实际状态向其靠拢。"
        },
        {
            id: "w3-3-q2",
            question: "Kubernetes 对象的 status 字段由谁填充？",
            options: [
                "用户在 YAML 中定义",
                "kubectl apply 自动生成",
                "Kubernetes 控制平面根据实际状态填充",
                "容器运行时填充"
            ],
            answer: 2,
            rationale: "status 是实际状态（Current State），由 Kubernetes 系统组件（控制器、kubelet）观测并写入，用户不应手动修改。"
        },
        {
            id: "w3-3-q3",
            question: "一个有效的 Kubernetes YAML 配置文件必须包含哪些字段？",
            options: [
                "只需要 kind 和 name",
                "apiVersion、kind、metadata、spec",
                "name、namespace、labels",
                "kind、replicas、image"
            ],
            answer: 1,
            rationale: "必须字段：apiVersion（API 版本）、kind（对象类型）、metadata（元数据）、spec（期望状态）。"
        },
        {
            id: "w3-3-q4",
            question: "kubectl apply 使用什么机制来智能合并配置变更？",
            options: [
                "简单替换整个对象",
                "三方合并（three-way merge）",
                "只添加新字段，不删除旧字段",
                "完全覆盖现有配置"
            ],
            answer: 1,
            rationale: "kubectl apply 比较配置文件、集群当前状态和 last-applied-configuration 注解，执行三方合并。"
        },
        {
            id: "w3-3-q5",
            question: "last-applied-configuration 注解存储在哪里？",
            options: [
                "本地文件系统",
                "etcd 的独立键",
                "对象的 metadata.annotations 中",
                "kubectl 配置文件中"
            ],
            answer: 2,
            rationale: "kubectl apply 将上次应用的配置存储在对象的 metadata.annotations['kubectl.kubernetes.io/last-applied-configuration'] 中。"
        },
        {
            id: "w3-3-q6",
            question: "以下哪种是声明式对象管理方式？",
            options: [
                "kubectl create deployment nginx --image=nginx",
                "kubectl scale deployment nginx --replicas=3",
                "kubectl apply -f deployment.yaml",
                "kubectl delete pod nginx-xxx"
            ],
            answer: 2,
            rationale: "kubectl apply -f 是声明式管理，以配置文件为真相来源。其他都是命令式操作。"
        },
        {
            id: "w3-3-q7",
            question: "混用命令式和声明式管理会导致什么问题？",
            options: [
                "没有任何问题",
                "配置漂移（Configuration Drift）",
                "集群崩溃",
                "Pod 无法启动"
            ],
            answer: 1,
            rationale: "命令式操作不更新 last-applied-configuration，导致配置文件与实际状态不一致，产生配置漂移。"
        },
        {
            id: "w3-3-q8",
            question: "如何在 kubectl apply 之前预览变更？",
            options: [
                "kubectl preview -f deployment.yaml",
                "kubectl diff -f deployment.yaml",
                "kubectl show -f deployment.yaml",
                "kubectl check -f deployment.yaml"
            ],
            answer: 1,
            rationale: "kubectl diff 使用 server-side dry-run 比较配置文件与集群当前状态的差异，在应用前预览变更。"
        },
        {
            id: "w3-3-q9",
            question: "Kubernetes 中 labels 的作用是什么？",
            options: [
                "存储敏感数据",
                "为对象添加键值对标签，用于组织和筛选",
                "定义容器的环境变量",
                "配置网络策略"
            ],
            answer: 1,
            rationale: "labels 是附加到对象的键值对，用于组织、分类和通过选择器（selector）筛选资源。"
        },
        {
            id: "w3-3-q10",
            question: "Deployment 如何关联其管理的 Pod？",
            options: [
                "通过 Pod 名称前缀",
                "通过 selector 匹配 Pod 的 labels",
                "通过 namespace",
                "通过 Pod 的 IP 地址"
            ],
            answer: 1,
            rationale: "Deployment 使用 spec.selector.matchLabels 选择器匹配具有相应 labels 的 Pod，建立关联关系。"
        },
        {
            id: "w3-3-q11",
            question: "使用 kubectl apply 删除配置文件中的字段后，该字段会怎样？",
            options: [
                "保持不变",
                "从集群中的对象里删除",
                "被设置为默认值",
                "产生错误"
            ],
            answer: 1,
            rationale: "三方合并时，如果字段在 last-applied-configuration 中存在但在新配置中不存在，该字段会被删除。"
        },
        {
            id: "w3-3-q12",
            question: "如果手动 kubectl scale 修改了 replicas，然后 apply 不含 replicas 的配置会怎样？",
            options: [
                "replicas 被重置为 1",
                "手动修改的 replicas 值被保留",
                "产生冲突错误",
                "Pod 全部被删除"
            ],
            answer: 1,
            rationale: "如果配置文件从未包含 replicas 字段，三方合并会保留手动修改的值（因为它不在 last-applied-configuration 中）。"
        },
        {
            id: "w3-3-q13",
            question: "apiVersion: apps/v1 中的 apps 代表什么？",
            options: [
                "应用程序名称",
                "API Group（API 组）",
                "命名空间",
                "资源版本号"
            ],
            answer: 1,
            rationale: "apps 是 API Group，v1 是版本号。Kubernetes 将 API 按功能组织到不同的 Group（如 apps、batch、networking.k8s.io）。"
        },
        {
            id: "w3-3-q14",
            question: "生产环境推荐使用声明式配置的主要原因是什么？",
            options: [
                "执行速度更快",
                "可以追溯变更历史、支持版本控制和 GitOps 工作流",
                "消耗更少的集群资源",
                "不需要 YAML 知识"
            ],
            answer: 1,
            rationale: "声明式配置以文件为真相来源，可以存储在 Git 中追溯历史、进行代码审查、实现 GitOps 自动化。"
        },
        {
            id: "w3-3-q15",
            question: "以下哪个命令可以查看对象的完整 YAML 定义（包括 status）？",
            options: [
                "kubectl describe deployment nginx",
                "kubectl get deployment nginx -o yaml",
                "kubectl show deployment nginx",
                "kubectl export deployment nginx"
            ],
            answer: 1,
            rationale: "kubectl get -o yaml 输出对象的完整定义，包括 spec、status、metadata 和所有注解。"
        }
    ],
    "w3-4": [
        {
            id: "w3-4-q1",
            question: "Pod 的 Pending 阶段表示什么？",
            options: [
                "Pod 正在运行",
                "Pod 已被接受但容器尚未就绪（等待调度或拉取镜像）",
                "Pod 已成功完成",
                "Pod 失败退出"
            ],
            answer: 1,
            rationale: "Pending 表示 Pod 已被 API Server 接受，但一个或多个容器尚未创建运行，可能在等待调度或拉取镜像。"
        },
        {
            id: "w3-4-q2",
            question: "Liveness Probe 失败后会发生什么？",
            options: [
                "Pod 被删除",
                "容器被重启",
                "Pod 从 Service 中移除",
                "Pod 进入 Pending 状态"
            ],
            answer: 1,
            rationale: "Liveness Probe 检测容器是否存活，失败表示容器不健康，kubelet 会杀死并重启该容器。"
        },
        {
            id: "w3-4-q3",
            question: "Readiness Probe 失败后会发生什么？",
            options: [
                "容器被重启",
                "Pod 被删除",
                "Pod 的 IP 从 Service 的 Endpoints 中移除",
                "Pod 进入 Failed 阶段"
            ],
            answer: 2,
            rationale: "Readiness Probe 检测容器是否就绪接收流量，失败时 Pod IP 会从 Service Endpoints 中移除，不再接收请求。"
        },
        {
            id: "w3-4-q4",
            question: "Startup Probe 的主要用途是什么？",
            options: [
                "加速容器启动",
                "保护慢启动应用，在启动完成前禁用其他探针",
                "检测容器是否存活",
                "检测容器是否就绪接收流量"
            ],
            answer: 1,
            rationale: "Startup Probe 用于慢启动应用，在它成功之前，Liveness 和 Readiness 探针都不会生效，防止应用被过早杀死。"
        },
        {
            id: "w3-4-q5",
            question: "CrashLoopBackOff 状态表示什么？",
            options: [
                "容器正在启动",
                "容器反复崩溃，kubelet 应用指数退避延迟重启",
                "Pod 被成功删除",
                "容器镜像拉取失败"
            ],
            answer: 1,
            rationale: "CrashLoopBackOff 表示容器反复启动后立即崩溃，kubelet 会以指数退避方式延迟重启（10s、20s、40s...最长5分钟）。"
        },
        {
            id: "w3-4-q6",
            question: "探针支持哪三种探测方式？",
            options: [
                "GET、POST、PUT",
                "HTTP GET、TCP Socket、Exec（执行命令）",
                "REST、gRPC、WebSocket",
                "Ping、Telnet、SSH"
            ],
            answer: 1,
            rationale: "探针支持三种方式：HTTP GET（检查 HTTP 响应码）、TCP Socket（检查端口连通性）、Exec（执行命令检查返回码）。"
        },
        {
            id: "w3-4-q7",
            question: "探针的 initialDelaySeconds 参数的作用是什么？",
            options: [
                "探测间隔时间",
                "容器启动后延迟多久开始首次探测",
                "探测超时时间",
                "连续失败次数阈值"
            ],
            answer: 1,
            rationale: "initialDelaySeconds 定义容器启动后等待多久开始首次探测，给应用预留启动时间。"
        },
        {
            id: "w3-4-q8",
            question: "restartPolicy: Always 的含义是什么？",
            options: [
                "容器失败时重启",
                "容器退出时总是重启（无论成功或失败）",
                "容器永不重启",
                "只在首次启动时运行"
            ],
            answer: 1,
            rationale: "Always 表示容器退出时总是重启，无论退出码是 0（成功）还是非 0（失败），这是 Deployment 的默认策略。"
        },
        {
            id: "w3-4-q9",
            question: "如何查看崩溃容器的上一次日志？",
            options: [
                "kubectl logs <pod> --all",
                "kubectl logs <pod> --previous",
                "kubectl describe pod <pod>",
                "kubectl get pod <pod> -o yaml"
            ],
            answer: 1,
            rationale: "kubectl logs --previous 可以查看容器上一次运行（崩溃前）的日志，对于排查 CrashLoopBackOff 非常有用。"
        },
        {
            id: "w3-4-q10",
            question: "Init Containers 的特点是什么？",
            options: [
                "与应用容器并行运行",
                "在应用容器之前按顺序运行，全部成功后才启动应用容器",
                "只在 Pod 终止时运行",
                "可选的，不影响 Pod 启动"
            ],
            answer: 1,
            rationale: "Init Containers 在应用容器之前按顺序运行，每个都必须成功完成，Pod 才会启动应用容器。"
        },
        {
            id: "w3-4-q11",
            question: "容器的 Terminated 状态包含哪些信息？",
            options: [
                "只有退出码",
                "退出原因、退出码、开始和结束时间",
                "只有结束时间",
                "只有错误信息"
            ],
            answer: 1,
            rationale: "Terminated 状态包含丰富的信息：reason、exitCode、startedAt、finishedAt 等，帮助诊断容器退出原因。"
        },
        {
            id: "w3-4-q12",
            question: "HTTP GET 探针判定成功的条件是什么？",
            options: [
                "响应体不为空",
                "HTTP 状态码 >= 200 且 < 400",
                "响应时间小于 1 秒",
                "返回 JSON 格式数据"
            ],
            answer: 1,
            rationale: "HTTP GET 探针在响应状态码 >= 200 且 < 400 时判定成功，其他状态码判定失败。"
        },
        {
            id: "w3-4-q13",
            question: "failureThreshold 参数的作用是什么？",
            options: [
                "单次探测的超时时间",
                "连续失败多少次后判定探针失败",
                "首次探测的延迟时间",
                "探测的间隔时间"
            ],
            answer: 1,
            rationale: "failureThreshold 定义连续探测失败多少次后才判定探针失败，默认值是 3，可以避免偶发失败导致误判。"
        },
        {
            id: "w3-4-q14",
            question: "Pod 的 Unknown 阶段通常意味着什么？",
            options: [
                "Pod 配置错误",
                "无法获取 Pod 状态，通常是节点通信问题",
                "Pod 正在启动",
                "容器镜像不存在"
            ],
            answer: 1,
            rationale: "Unknown 表示无法获取 Pod 状态，通常是 kubelet 与控制平面通信中断，如节点网络问题或节点故障。"
        },
        {
            id: "w3-4-q15",
            question: "restartPolicy: OnFailure 常用于什么场景？",
            options: [
                "长期运行的服务",
                "需要运行到完成的批处理任务（Job）",
                "一次性初始化任务",
                "定时任务"
            ],
            answer: 1,
            rationale: "OnFailure 常用于 Job，只在容器失败时重启，成功完成（退出码 0）则不重启，适合批处理任务。"
        }
    ]
}
