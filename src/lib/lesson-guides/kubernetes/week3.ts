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
            "【kubeadm 前置条件】官方文档要求：'2 GiB or more' RAM、至少 2 个 CPU（控制平面）、机器间完整网络连接、kubeadm 版本需支持目标 K8s 版本。",
            "【kubeadm init 流程】init 初始化控制平面，生成 CA 证书、静态 Pod 配置和 join token；必须配置 --control-plane-endpoint 才能后续升级为 HA。",
            "【CNI 网络插件必需】官方文档：init 后'Required for pod-to-pod communication'——必须安装 CNI 插件（kubectl apply -f [podnetwork].yaml）Pod 网络才能正常工作。",
            "【minikube 系统要求】官方要求：'2 CPUs or more, 2GB of free memory, 20GB of free disk space, Internet connection'——支持 Docker、QEMU、Hyperkit、VirtualBox、KVM 等多种驱动。",
            "【kind 核心特点】文档说明：'kind create cluster bootstraps a Kubernetes cluster using pre-built node images'——使用 Docker 容器作为节点，支持通过配置文件创建多节点集群。"
        ],
        keyDifficulties: [
            "【HA 升级限制】官方警告：'Turning a single control-plane cluster created without --control-plane-endpoint into a highly available cluster is not supported by kubeadm'——初始化时必须规划 HA。",
            "【--pod-network-cidr 匹配】官方文档：'Some CNI providers require specific CIDR configuration'——不同 CNI 插件对 CIDR 有不同要求，配置不匹配会导致 Pod 网络不通。",
            "【kind 镜像加载】官方推荐：使用'kind load docker-image my-app:latest'加载本地镜像；避免使用 :latest 标签，应指定'imagePullPolicy: IfNotPresent'确保可预测行为。",
            "【kubeadm join 机制】官方命令：'kubeadm join <control-plane-host>:<port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>'——token 和 hash 来自 init 输出。",
            "【minikube vs kind 选型】minikube 支持 LoadBalancer（tunnel）、Dashboard、更完整的功能；kind 基于容器更轻量，适合 CI/CD 环境和快速测试。"
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
            "【对象本质】官方文档：Kubernetes 对象是'records of intent'——意图记录。一旦创建，Kubernetes 就会持续工作以维护该对象的存在状态，确保集群状态与用户声明的期望状态匹配。",
            "【spec vs status】官方文档：spec 描述'desired characteristics and configuration'（期望特征），status 描述'what actually exists'（实际状态）。用户定义 spec，系统管理 status。",
            "【必需字段】官方文档：每个 manifest 必须包含四个字段：apiVersion（API 版本如 apps/v1）、kind（对象类型如 Deployment）、metadata（标识数据如 name/UID/namespace）、spec（期望状态，格式因类型而异）。",
            "【三种管理方式】官方文档区分：Imperative Commands（kubectl run/scale，一次性任务）、Imperative Configuration（kubectl create -f，简单工作流）、Declarative Configuration（kubectl apply -f，生产环境和 GitOps 推荐）。",
            "【三方合并策略】官方文档：kubectl apply 执行'three-way merge'——比较配置文件、集群当前状态、last-applied-configuration 注解，智能地设置新字段、清除删除字段、保留外部修改的字段。"
        ],
        keyDifficulties: [
            "【last-applied-configuration 注解】官方文档：每个用 kubectl apply 创建的对象都带有此注解，存储原始配置的 JSON。这使得 apply 能够区分：用户删除了字段还是从未设置过该字段。",
            "【保留外部修改】官方文档示例：用 apply 创建 Deployment 后用 kubectl scale 扩容，再次 apply（不含 replicas 字段）时会保留 scale 设置的副本数——因为配置文件从未定义过 replicas。",
            "【声明式 vs 命令式抉择】官方最佳实践：声明式配置支持版本控制和 GitOps；但混用命令式操作会导致'last-applied'与实际状态不一致。建议'Use declarative apply consistently'。",
            "【Labels 和 Selectors】官方文档：labels 是组织和选择对象的键值对；selectors 是基于 labels 的查询。Deployment 通过 spec.selector.matchLabels 关联 Pod，这是控制器识别其管理对象的机制。",
            "【kubectl diff 预览】官方推荐：'Use kubectl diff before applying'——在应用前预览变更。需要 kube-apiserver 支持 server-side dry-run，以及 PATCH/CREATE/UPDATE 权限。"
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
            "【Pod 阶段定义】官方文档定义五个 phase：Pending（已接受但容器未就绪）、Running（已绑定节点且至少一个容器运行中）、Succeeded（所有容器成功终止）、Failed（至少一个容器非零退出）、Unknown（无法获取状态，通常是节点通信问题）。",
            "【容器三状态】官方文档：Waiting（执行启动操作如拉取镜像）、Running（正在执行无问题）、Terminated（已完成或失败，显示 reason/exit code/时间）。使用 kubectl describe pod 查看详细 Reason。",
            "【重启策略】官方文档：restartPolicy 控制容器失败后的行为——Always（总是重启）、OnFailure（仅失败时重启）、Never（从不重启）。重复崩溃时应用指数退避延迟，约 10 分钟成功运行后重置。",
            "【三种探针类型】官方文档：Liveness Probe（检测容器是否需要重启，用于恢复死锁）、Readiness Probe（判断是否就绪接收流量，控制 Service 后端成员）、Startup Probe（检查应用是否启动，保护慢启动应用免受过早杀死）。",
            "【探测方式】官方文档：Exec（执行命令检查返回码）、HTTP GET（检查状态码 200-399 为成功）、TCP Socket（尝试连接端口，连接成功为健康）。"
        ],
        keyDifficulties: [
            "【CrashLoopBackOff 本质】官方文档指出这不是真正的 phase 值而是 kubectl 显示字段——表示容器反复崩溃，kubelet 应用指数退避机制延迟重启。约 10 分钟成功运行后视新崩溃为首次。",
            "【探针参数配置】官方文档关键参数：initialDelaySeconds（首次探测延迟，默认 0）、periodSeconds（探测频率，默认 10）、timeoutSeconds（超时，默认 1）、failureThreshold（失败次数阈值，默认 3）、successThreshold（成功次数阈值，默认 1）。",
            "【Liveness vs Readiness 最佳实践】官方建议：可用相同端点但不同阈值——Readiness 用低 failureThreshold 快速从负载均衡移除；Liveness 用高 failureThreshold 避免过早重启。避免虚假阳性导致级联故障。",
            "【Init Containers 顺序执行】官方文档：Init Containers 在应用容器之前按顺序运行，每个必须成功完成后下一个才启动。所有 Init Containers 完成后才启动应用容器——用于等待依赖服务或下载配置。",
            "【调试流程】官方文档推荐流程：kubectl get pods（检查状态）→ kubectl describe pod（查看事件和条件）→ kubectl logs（查看应用输出）→ kubectl get pod -o yaml（检查完整配置）。"
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
            question: "kubeadm 官方文档要求控制平面节点的最低内存配置是多少？",
            options: [
                "'2 GiB or more' RAM",
                "1 GiB RAM",
                "4 GiB RAM",
                "512 MiB RAM"
            ],
            answer: 0,
            rationale: "kubeadm 官方文档明确要求：'2 GiB or more' RAM 用于控制平面节点，这是最低硬件要求。"
        },
        {
            id: "w3-2-q2",
            question: "kubeadm init 之后集群节点处于 NotReady 状态的原因是什么？",
            options: [
                "kubelet 没有启动",
                "etcd 未初始化",
                "尚未安装 CNI 网络插件——官方文档：'Required for pod-to-pod communication'",
                "缺少容器运行时"
            ],
            answer: 2,
            rationale: "官方文档指出 init 后必须安装 CNI 插件'Required for pod-to-pod communication'，Pod 网络才能正常工作。"
        },
        {
            id: "w3-2-q3",
            question: "关于单控制平面升级为 HA 集群，kubeadm 官方的警告是什么？",
            options: [
                "需要重新初始化整个集群",
                "'Turning a single control-plane cluster created without --control-plane-endpoint into a highly available cluster is not supported'",
                "只需要添加更多控制平面节点",
                "可以随时升级，没有限制"
            ],
            answer: 1,
            rationale: "官方警告：'Turning a single control-plane cluster created without --control-plane-endpoint into a highly available cluster is not supported by kubeadm'——初始化时必须规划 HA。"
        },
        {
            id: "w3-2-q4",
            question: "minikube 官方文档列出的系统要求不包括以下哪项？",
            options: [
                "2 CPUs or more",
                "8GB of free memory",
                "2GB of free memory",
                "20GB of free disk space"
            ],
            answer: 1,
            rationale: "minikube 官方要求：'2 CPUs or more, 2GB of free memory, 20GB of free disk space'——不是 8GB 内存。"
        },
        {
            id: "w3-2-q5",
            question: "kind 文档描述其创建集群的方式是什么？",
            options: [
                "使用虚拟机运行节点",
                "需要云平台支持",
                "只能创建单节点集群",
                "'bootstraps a Kubernetes cluster using pre-built node images'——使用预构建镜像在 Docker 容器中运行节点"
            ],
            answer: 3,
            rationale: "kind 文档：'kind create cluster bootstraps a Kubernetes cluster using pre-built node images'——使用 Docker 容器作为节点。"
        },
        {
            id: "w3-2-q6",
            question: "kind 官方推荐如何加载本地镜像到集群？",
            options: [
                "docker push 到 DockerHub 再拉取",
                "直接使用 :latest 标签，kind 自动加载",
                "使用'kind load docker-image my-app:latest'并设置 imagePullPolicy: IfNotPresent",
                "复制镜像文件到节点文件系统"
            ],
            answer: 2,
            rationale: "kind 官方推荐：使用'kind load docker-image my-app:latest'加载本地镜像，并避免 :latest 标签，应指定'imagePullPolicy: IfNotPresent'。"
        },
        {
            id: "w3-2-q7",
            question: "kubeadm HA 的 Stacked etcd 拓扑特点是什么？",
            options: [
                "etcd 运行在独立的专用节点上",
                "etcd 运行在工作节点上",
                "etcd 与控制平面组件运行在同一节点上",
                "不使用 etcd"
            ],
            answer: 2,
            rationale: "Stacked etcd 将 etcd 与控制平面（apiserver、scheduler、controller-manager）部署在同一节点，是 kubeadm 的默认 HA 模式。"
        },
        {
            id: "w3-2-q8",
            question: "kubeadm HA 中 Stacked etcd 与 External etcd 的最少节点数分别是？",
            options: [
                "两者都是 3 节点",
                "Stacked: 1 节点，External: 3 节点",
                "Stacked: 3 节点，External: 6 节点",
                "Stacked: 2 节点，External: 4 节点"
            ],
            answer: 2,
            rationale: "Stacked 模式最少 3 个控制平面节点；External 模式需要 3 个控制平面 + 3 个独立 etcd 节点，共 6 个。"
        },
        {
            id: "w3-2-q9",
            question: "关于 --pod-network-cidr 参数，官方文档的说明是什么？",
            options: [
                "所有 CNI 插件使用相同的默认值",
                "'Some CNI providers require specific CIDR configuration'——不同 CNI 对 CIDR 有不同要求",
                "此参数是可选的，不影响网络功能",
                "只用于指定 Service IP 范围"
            ],
            answer: 1,
            rationale: "官方文档：'Some CNI providers require specific CIDR configuration'——配置不匹配会导致 Pod 网络不通。"
        },
        {
            id: "w3-2-q10",
            question: "minikube 和 kind 的选型差异是什么？",
            options: [
                "两者功能完全相同",
                "minikube 支持 LoadBalancer（tunnel）、Dashboard 等更完整功能；kind 基于容器更轻量，适合 CI/CD",
                "kind 功能更全面，minikube 更轻量",
                "两者都不适合本地开发"
            ],
            answer: 1,
            rationale: "minikube 支持 LoadBalancer（tunnel）、Dashboard、更完整的功能；kind 基于容器更轻量，适合 CI/CD 环境和快速测试。"
        },
        {
            id: "w3-2-q11",
            question: "kubeadm join 命令的格式是什么？",
            options: [
                "kubeadm join --token <token>",
                "kubeadm join <node-name>",
                "kubeadm join <control-plane-host>:<port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>",
                "kubeadm join --config <file>"
            ],
            answer: 2,
            rationale: "官方命令：'kubeadm join <control-plane-host>:<port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>'——token 和 hash 来自 init 输出。"
        },
        {
            id: "w3-2-q12",
            question: "External etcd 拓扑比 Stacked etcd 更可靠的原因是什么？",
            options: [
                "External 模式下 etcd 版本更新",
                "External 模式启动更快",
                "External 模式不需要负载均衡",
                "etcd 与控制平面解耦，一方故障不会同时影响另一方"
            ],
            answer: 3,
            rationale: "External etcd 将 etcd 部署在独立节点上，控制平面节点故障不会导致 etcd 成员丢失，提高了整体可靠性。"
        }
    ],
    "w3-3": [
        {
            id: "w3-3-q1",
            question: "官方文档如何描述 Kubernetes 对象的本质？",
            options: [
                "临时的运行时数据结构",
                "数据库中的记录",
                "'records of intent'——意图记录，Kubernetes 持续维护其存在",
                "配置文件的缓存"
            ],
            answer: 2,
            rationale: "官方文档明确指出 Kubernetes 对象是'records of intent'——一旦创建，系统就会持续工作以维护该对象的存在状态。"
        },
        {
            id: "w3-3-q2",
            question: "官方文档对 spec 和 status 字段的描述是什么？",
            options: [
                "spec 描述'desired characteristics'，status 描述'what actually exists'",
                "两者都由用户定义",
                "两者都由系统自动生成",
                "spec 是只读的，status 是可写的"
            ],
            answer: 0,
            rationale: "官方文档：spec 描述'desired characteristics and configuration'（期望特征），status 描述'what actually exists'（实际状态）。"
        },
        {
            id: "w3-3-q3",
            question: "Kubernetes manifest 必须包含哪些字段？",
            options: [
                "name、namespace、labels、spec",
                "只需要 kind 和 spec",
                "apiVersion、kind、metadata、spec",
                "kind、replicas、image、ports"
            ],
            answer: 2,
            rationale: "官方文档：每个 manifest 必须包含 apiVersion、kind、metadata、spec 四个必需字段。"
        },
        {
            id: "w3-3-q4",
            question: "官方推荐的生产环境对象管理方式是什么？",
            options: [
                "Imperative Commands（kubectl run/scale）",
                "Imperative Configuration（kubectl create -f）",
                "kubectl edit 直接编辑",
                "Declarative Configuration（kubectl apply -f）——支持版本控制和 GitOps"
            ],
            answer: 3,
            rationale: "官方文档推荐 Declarative Configuration 用于生产环境，因为它支持版本控制、可审计和 GitOps 工作流。"
        },
        {
            id: "w3-3-q5",
            question: "kubectl apply 的三方合并（three-way merge）比较哪三方？",
            options: [
                "配置文件、集群当前状态、last-applied-configuration 注解",
                "本地文件、远程文件、Git 仓库",
                "用户输入、系统默认值、环境变量",
                "spec、status、metadata"
            ],
            answer: 0,
            rationale: "官方文档：kubectl apply 执行 three-way merge，比较配置文件、集群当前状态、last-applied-configuration 注解。"
        },
        {
            id: "w3-3-q6",
            question: "last-applied-configuration 注解的作用是什么？",
            options: [
                "记录对象创建时间",
                "存储上次应用的配置 JSON，使 apply 能区分用户删除字段还是从未设置过",
                "存储对象的 status",
                "记录对象的版本号"
            ],
            answer: 1,
            rationale: "官方文档：此注解存储原始配置的 JSON，使 apply 能够区分：用户删除了字段还是从未设置过该字段。"
        },
        {
            id: "w3-3-q7",
            question: "用 apply 创建 Deployment 后用 scale 扩容，再次 apply（不含 replicas）会发生什么？",
            options: [
                "replicas 被重置为默认值 1",
                "scale 设置的副本数被保留，因为配置文件从未定义过 replicas",
                "apply 命令会报错",
                "整个 Deployment 被替换"
            ],
            answer: 1,
            rationale: "官方示例：配置文件从未定义 replicas，所以三方合并会保留外部（scale）设置的值。"
        },
        {
            id: "w3-3-q8",
            question: "官方文档对混用命令式和声明式操作的建议是什么？",
            options: [
                "可以自由混用，没有问题",
                "建议'Use declarative apply consistently'，混用会导致状态不一致",
                "只能使用命令式操作",
                "每次操作前必须重置配置"
            ],
            answer: 1,
            rationale: "官方最佳实践：混用命令式操作会导致 last-applied 与实际状态不一致，建议'Use declarative apply consistently'。"
        },
        {
            id: "w3-3-q9",
            question: "Deployment 如何识别其管理的 Pod？",
            options: [
                "通过 Pod 名称前缀匹配",
                "通过 namespace 隔离",
                "通过 spec.selector.matchLabels 匹配 Pod 的 labels",
                "通过 Pod 的创建时间"
            ],
            answer: 2,
            rationale: "官方文档：Deployment 通过 spec.selector.matchLabels 关联 Pod，这是控制器识别其管理对象的机制。"
        },
        {
            id: "w3-3-q10",
            question: "kubectl diff 命令的作用和要求是什么？",
            options: [
                "显示两个文件的差异，无特殊要求",
                "比较配置文件与仓库版本的差异",
                "预览 apply 将产生的变更，需要 server-side dry-run 支持",
                "显示对象的历史版本"
            ],
            answer: 2,
            rationale: "官方推荐'Use kubectl diff before applying'预览变更，需要 kube-apiserver 支持 server-side dry-run。"
        },
        {
            id: "w3-3-q11",
            question: "apiVersion: apps/v1 中的 'apps' 代表什么？",
            options: [
                "应用程序名称",
                "命名空间名称",
                "API Group（API 组），用于组织相关 API 资源",
                "资源版本号"
            ],
            answer: 2,
            rationale: "apps 是 API Group，Kubernetes 将 API 按功能组织到不同的 Group（如 apps、batch、networking.k8s.io）。"
        },
        {
            id: "w3-3-q12",
            question: "以下哪个命令可以查看对象的完整 YAML 定义（包括 status 和 annotations）？",
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
            question: "官方文档定义的 Pod Pending 阶段表示什么？",
            options: [
                "Pod 正在运行",
                "Pod 已成功完成",
                "Pod 已被接受但容器尚未就绪（包括调度和镜像下载时间）",
                "Pod 失败退出"
            ],
            answer: 2,
            rationale: "官方文档：Pending 表示 Pod 已被集群接受，但容器尚未就绪，包括调度时间和镜像下载时间。"
        },
        {
            id: "w3-4-q2",
            question: "Liveness Probe 失败后会发生什么？",
            options: [
                "容器被重启——用于恢复死锁或无响应的应用",
                "Pod 被删除",
                "Pod 从 Service 中移除",
                "Pod 进入 Pending 状态"
            ],
            answer: 0,
            rationale: "官方文档：Liveness Probe 检测容器是否处于需要重启的损坏状态，失败时 kubelet 会杀死并重启该容器。"
        },
        {
            id: "w3-4-q3",
            question: "Readiness Probe 失败后会发生什么？",
            options: [
                "容器被重启",
                "Pod 被删除",
                "Pod 进入 Failed 阶段",
                "Pod 的 IP 从 Service 的 Endpoints 中移除——不再接收流量"
            ],
            answer: 3,
            rationale: "官方文档：Readiness Probe 判断容器是否就绪接收流量，失败时 Pod 从 Service 后端移除，不再接收请求。"
        },
        {
            id: "w3-4-q4",
            question: "官方文档关于 CrashLoopBackOff 的说明是什么？",
            options: [
                "这是一个真正的 Pod phase 值",
                "这是 kubectl 显示字段而非 phase 值——表示容器反复崩溃，正应用指数退避",
                "这表示 Pod 正常运行",
                "这表示 Pod 等待调度"
            ],
            answer: 1,
            rationale: "官方文档指出 CrashLoopBackOff 不是真正的 phase 值而是 kubectl 显示字段，表示退避机制正在生效。"
        },
        {
            id: "w3-4-q5",
            question: "探针支持哪三种探测方式？",
            options: [
                "Exec（命令执行）、HTTP GET、TCP Socket",
                "GET、POST、PUT",
                "Ping、Telnet、SSH",
                "REST、gRPC、WebSocket"
            ],
            answer: 0,
            rationale: "官方文档：三种探测方式——Exec（检查命令返回码）、HTTP GET（检查状态码 200-399）、TCP Socket（检查端口连通性）。"
        },
        {
            id: "w3-4-q6",
            question: "HTTP GET 探针判定成功的条件是什么？",
            options: [
                "响应体不为空",
                "HTTP 状态码 200-399",
                "响应时间小于 1 秒",
                "返回 JSON 格式数据"
            ],
            answer: 1,
            rationale: "官方文档：HTTP GET 探针在响应状态码 200-399 时判定成功，其他状态码判定失败。"
        },
        {
            id: "w3-4-q7",
            question: "官方文档推荐的 Liveness vs Readiness 最佳实践是什么？",
            options: [
                "两者必须使用不同的端点",
                "可用相同端点但不同阈值：Readiness 低 failureThreshold 快速移除；Liveness 高 failureThreshold 避免过早重启",
                "只需要配置 Liveness，不需要 Readiness",
                "两者配置必须完全相同"
            ],
            answer: 1,
            rationale: "官方最佳实践：可用相同端点但 Readiness 用低 failureThreshold 快速从负载均衡移除，Liveness 用高 failureThreshold 避免过早重启。"
        },
        {
            id: "w3-4-q8",
            question: "failureThreshold 参数的作用和默认值是什么？",
            options: [
                "单次探测的超时时间，默认 1",
                "连续失败多少次后判定探针失败，默认 3",
                "首次探测的延迟时间，默认 0",
                "探测的间隔时间，默认 10"
            ],
            answer: 1,
            rationale: "官方文档：failureThreshold 定义连续失败多少次后判定探针失败，默认值是 3。"
        },
        {
            id: "w3-4-q9",
            question: "restartPolicy: Always 的含义是什么？",
            options: [
                "容器失败时重启",
                "容器退出时总是重启（无论成功或失败），是 Deployment 的默认策略",
                "容器永不重启",
                "只在首次启动时运行"
            ],
            answer: 1,
            rationale: "官方文档：Always 表示容器退出时总是重启，无论退出码是 0 还是非 0，这是 Deployment 的默认策略。"
        },
        {
            id: "w3-4-q10",
            question: "Init Containers 的执行特点是什么？",
            options: [
                "与应用容器并行运行",
                "可选的，不影响 Pod 启动",
                "在应用容器之前按顺序运行，每个必须成功完成后下一个才启动",
                "只在 Pod 终止时运行"
            ],
            answer: 2,
            rationale: "官方文档：Init Containers 在应用容器之前按顺序运行，每个必须成功完成，Pod 才会启动应用容器。"
        },
        {
            id: "w3-4-q11",
            question: "官方文档推荐的 Pod 调试流程是什么？",
            options: [
                "kubectl logs → kubectl describe → kubectl get",
                "kubectl get pods → kubectl describe pod → kubectl logs → kubectl get pod -o yaml",
                "kubectl delete → kubectl create → kubectl get",
                "kubectl exec → kubectl cp → kubectl port-forward"
            ],
            answer: 1,
            rationale: "官方文档推荐：kubectl get pods（检查状态）→ describe pod（查看事件）→ logs（查看输出）→ get pod -o yaml（检查配置）。"
        },
        {
            id: "w3-4-q12",
            question: "如何查看崩溃容器的上一次日志？",
            options: [
                "kubectl logs <pod> --all",
                "kubectl describe pod <pod>",
                "kubectl logs <pod> --previous",
                "kubectl get pod <pod> -o yaml"
            ],
            answer: 2,
            rationale: "kubectl logs --previous 可以查看容器上一次运行（崩溃前）的日志，对于排查 CrashLoopBackOff 非常有用。"
        }
    ]
}
