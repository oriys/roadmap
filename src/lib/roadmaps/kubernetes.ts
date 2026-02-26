import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const kubernetesStages: Stage[] = [
    {
        id: "phase1",
        title: "第一阶段：基石与容器化",
        duration: "第 1-3 周",
        goal: "理解云原生的底层基石，掌握容器运行时与镜像构建。",
        weeks: [
            {
                id: "w1",
                title: "第 1 周：Linux 内核与网络基础",
                summary: "从 Namespaces 到 Cgroups，理解“容器只是被雕刻过的 Linux”。",
                overview: "掌握容器三板斧：隔离（namespaces）、限流（cgroups）、存储/网络虚拟化（overlayfs + veth/bridge），为后续容器与 K8s 行为打下内核直觉。",
                keyPoints: [
                    "弄清每种 namespace 的作用域与可见性（PID/Net/Mount），结合 hostPID/hostNetwork 理解逃逸排查。",
                    "cgroups v1 vs v2 的层级与统一层级差异，CPU/内存压力下的行为与 OOM 信号。",
                    "OverlayFS COW 路径与写放大；veth+bridge+iptables 的数据路径与抓包位置。",
                ],
                lessons: [
                    {
                        id: "w1-1",
                        title: "Linux 进程隔离：用 Namespaces 划定边界",
                        detail: "深入理解 Namespaces（PID、Network、Mount）如何制造“隔离的假象”。",
                        keyPoints: [
                            "Linux 提供 8 种 Namespace（PID/Net/Mount/UTS/IPC/User/Cgroup/Time），每种隔离一类资源视图。",
                            "容器本质上是共享内核的隔离进程，hostPID/hostNetwork 等配置会打破隔离边界。",
                            "使用 unshare/nsenter 命令可以手动创建和进入 Namespace，辅助排查容器问题。",
                        ],
                        resources: [
                            { title: "namespaces man7", url: "https://man7.org/linux/man-pages/man7/namespaces.7.html" },
                            { title: "Linux namespaces 指南", url: "https://docs.kernel.org/admin-guide/namespaces/index.html" },
                            { title: "Play with Docker（在线容器实验）", url: "https://www.docker.com/play-with-docker/" },
                        ],
                    },
                    {
                        id: "w1-2",
                        title: "Cgroups 资源治理：CPU/内存限额与调度",
                        detail: "详解 Cgroups（v1/v2）如何限制 CPU 和内存使用。",
                        keyPoints: [
                            "Cgroups v1 按控制器（cpu/memory/blkio）独立挂载，v2 采用统一层级树简化管理。",
                            "CPU 限制通过 CFS 配额（cpu.cfs_period/quota）实现，超额进程会被节流（throttled）。",
                            "内存超限触发 OOM Killer，理解 oom_score_adj 与 K8s QoS 等级的对应关系。",
                        ],
                        resources: [
                            { title: "cgroup v2 内核文档", url: "https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html" },
                            { title: "cgroups man7", url: "https://man7.org/linux/man-pages/man7/cgroups.7.html" },
                            { title: "容器资源限制示例（Docker 官方）", url: "https://docs.docker.com/engine/containers/resource_constraints/" },
                        ],
                    },
                    {
                        id: "w1-3",
                        title: "镜像分层与联合文件系统：OverlayFS 解剖",
                        detail: "剖析 Overlay2 存储驱动与 Copy-on-Write 机制。",
                        keyPoints: [
                            "OverlayFS 将 lowerdir（只读层）与 upperdir（可写层）合并为统一视图，实现镜像共享。",
                            "Copy-on-Write 机制：首次写入时才从只读层复制文件到可写层，减少存储占用。",
                            "层数过多或大文件频繁修改会导致写放大，生产中应控制 Dockerfile 指令数量。",
                        ],
                        resources: [
                            { title: "Docker OverlayFS 驱动", url: "https://docs.docker.com/engine/storage/drivers/overlayfs-driver/" },
                            { title: "Linux overlayfs 内核文档", url: "https://docs.kernel.org/filesystems/overlayfs.html" },
                            { title: "容器镜像与层演示（官方教程）", url: "https://docs.docker.com/get-started/docker-overview/#images" },
                        ],
                    },
                    {
                        id: "w1-4",
                        title: "容器网络入门：veth/bridge/iptables 数据路径",
                        detail: "虚拟网桥、Veth Pair 与 iptables 在容器通信中的作用。",
                        keyPoints: [
                            "Veth Pair 是成对的虚拟网卡，一端在容器 Net Namespace 内，另一端挂到宿主机 Bridge 上。",
                            "Docker 默认通过 docker0 网桥 + iptables NAT 规则实现容器间通信与端口映射。",
                            "tcpdump 抓包定位：在 veth/bridge/eth0 不同位置抓包可精准判断丢包环节。",
                        ],
                        resources: [
                            { title: "Docker Bridge 网络", url: "https://docs.docker.com/engine/network/drivers/bridge/" },
                            { title: "veth(4) man7", url: "https://man7.org/linux/man-pages/man4/veth.4.html" },
                            { title: "Docker 端口发布与防火墙", url: "https://docs.docker.com/engine/network/packet-filtering-firewalls/" },
                        ],
                    },
                ],
            },
            {
                id: "w2",
                title: "第 2 周：容器技术进阶",
                summary: "从 Docker 架构到 OCI 标准，写出可维护、可移植的镜像。",
                overview: "区分 CLI/Daemon/Runtime 责任，理解镜像规范与多阶段构建，让镜像可移植、体积小、启动快。",
                keyPoints: [
                    "Docker -> containerd -> runc 调用链与 shim 作用，Kubelet 通过 CRI 对接。",
                    "多阶段构建、最小 base、layer 缓存命中策略；构建上下文瘦身。",
                    "OCI Image/Runtime/Distribution 规范与 CRI-O/containerd 的兼容性。",
                ],
                lessons: [
                    {
                        id: "w2-1",
                        title: "Docker 架构链路：CLI → Daemon → containerd → runc",
                        detail: "Docker CLI、Daemon、Containerd 与 Runc 的关系。",
                        keyPoints: [
                            "Docker CLI 通过 REST API 与 Daemon 通信，Daemon 再调用 containerd 管理容器生命周期。",
                            "containerd 负责镜像拉取/存储与容器运行，runc 是最终创建容器进程的 OCI 实现。",
                            "理解 shim 进程的作用：解耦 containerd 与容器进程，允许 containerd 重启不影响运行中的容器。",
                        ],
                        resources: [
                            { title: "Docker 官方概览", url: "https://docs.docker.com/get-started/docker-overview/" },
                            { title: "containerd 架构", url: "https://github.com/containerd/containerd/blob/main/docs/PLUGINS.md" },
                            { title: "Docker CLI 与 Daemon 交互演示", url: "https://docs.docker.com/get-started/" },
                        ],
                    },
                    {
                        id: "w2-2",
                        title: "Dockerfile 工程化：多阶段构建与镜像瘦身",
                        detail: "多阶段构建、镜像瘦身与层缓存优化。",
                        keyPoints: [
                            "多阶段构建将编译与运行分离，只将最终产物 COPY 到精简 base 镜像，大幅减小体积。",
                            "层缓存策略：将变化频率低的指令（如依赖安装）放在前面，提高构建缓存命中率。",
                            "使用 .dockerignore 排除不必要文件，减少构建上下文传输时间与镜像层污染。",
                        ],
                        resources: [
                            { title: "多阶段构建", url: "https://docs.docker.com/build/building/multi-stage/" },
                            { title: "Dockerfile 工程化：多阶段构建与镜像瘦身", url: "https://docs.docker.com/build/building/best-practices/" },
                            { title: "CI 中构建镜像（官方示例）", url: "https://docs.docker.com/build/ci/" },
                        ],
                    },
                    {
                        id: "w2-3",
                        title: "容器运行时演进：从 dockershim 到 CRI 生态",
                        detail: "为何 K8s 移除 Docker Shim？Containerd 与 CRI-O 的区别。",
                        keyPoints: [
                            "Docker Shim 是 Kubelet 与 Docker Daemon 之间的适配层，移除后直接通过 CRI 对接运行时。",
                            "Containerd 功能全面（镜像管理+容器运行），CRI-O 更轻量专注于 Kubernetes CRI 场景。",
                            "移除 Docker Shim 不影响镜像格式（OCI 兼容），只改变了 Kubelet 调用运行时的路径。",
                        ],
                        resources: [
                            { title: "Dockershim FAQ（K8s 官方）", url: "https://kubernetes.io/blog/2020/12/02/dockershim-faq/" },
                            { title: "CRI-O 官方文档", url: "https://cri-o.io/" },
                            { title: "Kubelet CRI 说明", url: "https://kubernetes.io/docs/concepts/containers/cri/" },
                        ],
                    },
                    {
                        id: "w2-4",
                        title: "OCI 标准全景：Image/Runtime/Distribution 互操作",
                        detail: "Image Spec & Runtime Spec 的意义与生态影响。",
                        keyPoints: [
                            "OCI Image Spec 定义镜像格式（manifest/config/layers），确保跨工具链兼容。",
                            "OCI Runtime Spec 定义容器运行时接口（config.json），runc/crun/youki 均遵循此规范。",
                            "Distribution Spec 规范镜像仓库 API，使 Docker Hub/Harbor/ECR 等可互换使用。",
                        ],
                        resources: [
                            { title: "OCI Runtime Spec", url: "https://github.com/opencontainers/runtime-spec" },
                            { title: "OCI Image Spec", url: "https://github.com/opencontainers/image-spec" },
                            { title: "OCI Distribution 规范", url: "https://github.com/opencontainers/distribution-spec" },
                        ],
                    },
                ],
            },
            {
                id: "w3",
                title: "第 3 周：Kubernetes 架构与部署",
                summary: "迈入 K8s：入门概念、架构、声明式 API 与 Pod 生命周期。",
                overview:
                    "补齐入门概念与术语（Why/What/核心对象），再动手用 kubeadm/minikube/kind 拉起集群，部署第一个应用并体验声明式 API 与调和循环。",
                keyPoints: [
                    "为什么需要 Kubernetes：解决部署、伸缩与自愈问题；理解核心对象（Pod/Service/Deployment/Namespace）与常见术语。",
                    "API Server + etcd + Scheduler + Controller Manager 的职责边界，kubelet/kube-proxy 的节点责任。",
                    "声明式 vs 命令式：期望状态、调和循环、finalizer，kubectl apply/patch 的差异。",
                    "Pod 生命周期：Init/Probes/重启策略，常见 CrashLoopBackOff 排查路径。",
                ],
                lessons: [
                    {
                        id: "w3-1",
                        title: "K8s 核心架构：组件职责与调和循环",
                        detail: "控制平面（API Server、Etcd、Scheduler）与工作节点（Kubelet、Kube-proxy）。",
                        keyPoints: [
                            "API Server 是集群唯一入口，所有组件通过它读写 etcd；Scheduler 负责 Pod 到节点的分配。",
                            "Controller Manager 内置多种控制器（Deployment/ReplicaSet/Job 等），持续调和期望状态。",
                            "Kubelet 负责节点上 Pod 的生命周期管理，Kube-proxy 维护 Service 的网络规则（iptables/IPVS）。",
                        ],
                        resources: [
                            { title: "Kubernetes 组件概览", url: "https://kubernetes.io/docs/concepts/overview/components/" },
                            { title: "What is Kubernetes?", url: "https://kubernetes.io/docs/concepts/overview/" },
                            { title: "Kubernetes Glossary", url: "https://kubernetes.io/docs/reference/glossary/" },
                            { title: "Controller 模式", url: "https://kubernetes.io/docs/concepts/architecture/controller/" },
                            { title: "Kubernetes Alternatives（Nomad）", url: "https://developer.hashicorp.com/nomad/docs" },
                            { title: "Kubernetes Alternatives（Docker Swarm）", url: "https://docs.docker.com/engine/swarm/" },
                        ],
                    },
                    {
                        id: "w3-2",
                        title: "集群搭建实战：kubeadm/minikube/kind 验证链路",
                        detail: "Kubeadm 或 Minikube/Kind 的快速集群搭建，并部署第一个应用验证链路。",
                        keyPoints: [
                            "Minikube/Kind 适合本地学习与 CI 测试，kubeadm 适合生产级多节点集群搭建。",
                            "集群搭建后用 kubectl run/expose 部署并暴露第一个应用，验证端到端链路。",
                            "HA 拓扑需要多控制平面节点 + 外部 etcd 或堆叠 etcd，防止单点故障。",
                        ],
                        resources: [
                            { title: "kubeadm 创建集群", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/" },
                            { title: "minikube 快速开始", url: "https://minikube.sigs.k8s.io/docs/start/" },
                            { title: "kind 快速开始", url: "https://kind.sigs.k8s.io/docs/user/quick-start/" },
                            { title: "kubeadm HA 部署指南", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/" },
                            { title: "部署第一个应用（Kubernetes Basics）", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-intro/" },
                            { title: "暴露服务（Kubernetes Basics）", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/" },
                            { title: "生产环境方案（托管/发行版）", url: "https://kubernetes.io/docs/setup/production-environment/turnkey-solutions/" },
                        ],
                    },
                    {
                        id: "w3-3",
                        title: "声明式 API 与 YAML：期望状态到调和的路径",
                        detail: "期望状态 vs 实际状态，理解 Reconciliation Loop。",
                        keyPoints: [
                            "声明式 API 的核心：用户声明期望状态（spec），控制器持续将实际状态（status）调和至一致。",
                            "kubectl apply 是声明式操作（三方合并），kubectl create/replace 是命令式操作，生产中优先用 apply。",
                            "Finalizer 机制允许控制器在资源删除前执行清理逻辑，防止孤儿资源。",
                        ],
                        resources: [
                            { title: "Kubernetes 对象", url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/" },
                            { title: "声明式配置", url: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/" },
                            { title: "kubectl 应用/补丁示例", url: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/" },
                        ],
                    },
                    {
                        id: "w3-4",
                        title: "Pod 生命周期：探针、重启策略与常见故障",
                        detail: "Init Containers、Liveness/Readiness Probe 与 CrashLoopBackOff 排查。",
                        keyPoints: [
                            "Init Containers 按顺序执行，全部成功后主容器才启动，适合依赖检查和数据初始化。",
                            "Liveness 探针失败会重启容器，Readiness 探针失败会摘除 Service 端点，Startup 探针保护慢启动应用。",
                            "CrashLoopBackOff 排查路径：kubectl describe 看事件 → kubectl logs 看日志 → 检查探针/资源配置。",
                        ],
                        resources: [
                            { title: "Pod 生命周期：探针、重启策略与常见故障", url: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/" },
                            { title: "探针配置", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/" },
                            { title: "调试 Pod 重启与探针", url: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase2",
        title: "第二阶段：K8s 核心编排",
        duration: "第 4-7 周",
        goal: "熟练使用工作负载、服务发现、存储与调度策略。",
        weeks: [
            {
                id: "w4",
                title: "第 4 周：工作负载管理",
                summary: "控制器模式与流量入口，掌握发布与路由。",
                overview: "掌握工作负载控制器（Deployment/Job/CronJob）与发布策略，理解 Service/Ingress 如何让应用被发现、负载均衡并对外暴露。",
                keyPoints: [
                    "Deployment/ReplicaSet 与 Job/CronJob 的差异：长运行服务 vs 批处理任务；发布策略、探针配合与回滚。",
                    "Service 类型（ClusterIP/NodePort/LB）与 kube-proxy iptables/IPVS 流量路径。",
                    "Ingress Controller/Ingress 规则与 TLS、Host/Path 路由、常见 404/调试。",
                ],
                lessons: [
                    {
                        id: "w4-1",
                        title: "控制器模式：Deployment/Job 的发布与回滚",
                        detail: "Deployment/ReplicaSet 的滚动更新与回滚，以及 Job/CronJob 批处理控制器。",
                        keyPoints: [
                            "Deployment 通过 maxSurge/maxUnavailable 控制滚动更新节奏，revision 历史支持快速回滚。",
                            "Job 保证任务至少成功运行指定次数（completions），CronJob 按 cron 表达式周期触发 Job。",
                            "使用 kubectl rollout status/history/undo 管理发布过程，配合探针确保零停机。",
                        ],
                        resources: [
                            { title: "Deployment 官方文档", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/" },
                            { title: "Job", url: "https://kubernetes.io/docs/concepts/workloads/controllers/job/" },
                            { title: "CronJob", url: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/" },
                            { title: "滚动更新与回滚", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment" },
                            { title: "滚动更新动手实验", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/" },
                        ],
                    },
                    {
                        id: "w4-2",
                        title: "Service 服务发现：ClusterIP/NodePort/LoadBalancer 路径",
                        detail: "ClusterIP、NodePort、LoadBalancer 的实现原理。",
                        keyPoints: [
                            "ClusterIP 是默认类型，仅集群内部可达；NodePort 在每个节点开放固定端口对外暴露。",
                            "LoadBalancer 依赖云厂商实现，自动创建外部负载均衡器并分配公网 IP。",
                            "Kube-proxy 通过 iptables 或 IPVS 模式维护 Service 到 Pod 的转发规则。",
                        ],
                        resources: [
                            { title: "Service 类型", url: "https://kubernetes.io/docs/concepts/services-networking/service/" },
                            { title: "kube-proxy 模式", url: "https://kubernetes.io/docs/concepts/services-networking/service/#kube-proxy-iptables-vs-ipvs" },
                            { title: "Guestbook 示例（Service 实战）", url: "https://kubernetes.io/docs/tutorials/stateless-application/guestbook/" },
                        ],
                    },
                    {
                        id: "w4-3",
                        title: "Ingress 与入口控制器：路由、TLS 与常见 4xx/5xx",
                        detail: "Nginx Ingress Controller 与域名路由规则。",
                        keyPoints: [
                            "Ingress 是 L7 路由规则定义，需要搭配 Ingress Controller（如 Nginx/Traefik）才能生效。",
                            "支持基于 Host 和 Path 的路由、TLS 终止、以及 Annotation 扩展高级功能。",
                            "常见 404 排查：确认 Ingress Class 匹配、后端 Service/端口正确、Pod 就绪。",
                        ],
                        resources: [
                            { title: "Ingress 概念", url: "https://kubernetes.io/docs/concepts/services-networking/ingress/" },
                            { title: "Ingress-NGINX 文档", url: "https://kubernetes.github.io/ingress-nginx/user-guide/basic-usage/" },
                            { title: "Minikube Ingress 实践", url: "https://v1-33.docs.kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/" },
                        ],
                    },
                    {
                        id: "w4-4",
                        title: "资源治理：requests/limits 与配额模型落地",
                        detail: "Requests/Limits 与 QoS 资源治理，配合 Namespace/ResourceQuota/LimitRange 做多租户配额。",
                        keyPoints: [
                            "Requests 影响调度决策（节点是否有足够资源），Limits 是运行时硬上限（超限被 throttle/OOM）。",
                            "QoS 等级：Guaranteed（requests=limits）> Burstable > BestEffort，OOM 时低优先级先被杀。",
                            "ResourceQuota 限制 Namespace 总量，LimitRange 设置单个 Pod/容器的默认值与上下限。",
                        ],
                        resources: [
                            { title: "管理容器资源（Requests/Limits/QoS）", url: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/" },
                            { title: "ResourceQuota / LimitRange", url: "https://kubernetes.io/docs/concepts/policy/resource-quotas/" },
                            { title: "Namespaces", url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/" },
                            { title: "资源配额示例", url: "https://kubernetes.io/docs/tasks/administer-cluster/manage-resources/quota-memory-cpu-namespace/" },
                        ],
                    },
                ],
            },
            {
                id: "w5",
                title: "第 5 周：存储与配置管理",
                summary: "ConfigMap/Secret 解耦配置，PV/PVC 与 CSI 动态供给。",
                overview: "把配置与状态从镜像里剥离，理解 PVC 绑定与回收策略，能选用合适的存储类与卷类型。",
                keyPoints: [
                    "ConfigMap/Secret 挂载方式（env/volume）、更新生效行为、敏感信息防泄露。",
                    "PV/PVC 生命周期、回收策略、访问模式（RWO/ROX/RWX）与容量规划。",
                    "StorageClass + CSI 动态供给、快照与扩容支持，StatefulSet 绑定有序身份。",
                ],
                lessons: [
                    {
                        id: "w5-1",
                        title: "配置解耦：ConfigMap/Secret 安全注入与滚动更新",
                        detail: "ConfigMap & Secret 的注入方式（Env vs Volume）。",
                        keyPoints: [
                            "环境变量注入简单但不支持热更新，Volume 挂载方式可在 ConfigMap 更新后自动同步（有延迟）。",
                            "Secret 默认 base64 编码（非加密），生产中应启用 etcd 加密或使用外部密钥管理（Vault）。",
                            "immutable ConfigMap/Secret 一旦设置不可修改，减少意外变更风险并降低 API Server 监听负载。",
                        ],
                        resources: [
                            { title: "ConfigMap", url: "https://kubernetes.io/docs/concepts/configuration/configmap/" },
                            { title: "Secret", url: "https://kubernetes.io/docs/concepts/configuration/secret/" },
                            { title: "ConfigMap 注入示例", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/" },
                        ],
                    },
                    {
                        id: "w5-2",
                        title: "持久化存储基础：PV/PVC 生命周期与权限",
                        detail: "PV 与 PVC 的绑定生命周期。",
                        keyPoints: [
                            "PV 生命周期：Provisioning → Binding → Using → Releasing → Reclaiming（Retain/Delete/Recycle）。",
                            "访问模式（RWO/ROX/RWX）决定 PV 能被几个节点以何种方式挂载，不同存储后端支持不同模式。",
                            "PVC 通过 storageClassName/capacity/accessModes 匹配 PV，未匹配时 PVC 保持 Pending 状态。",
                        ],
                        resources: [
                            { title: "Persistent Volumes", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/" },
                            { title: "卷生命周期", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#claims-as-volumes" },
                            { title: "PVC 动手示例", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/" },
                        ],
                    },
                    {
                        id: "w5-3",
                        title: "动态供给：StorageClass + CSI 的按需扩容与快照",
                        detail: "StorageClass 与 CSI 插件机制。",
                        keyPoints: [
                            "StorageClass 定义动态供给策略（provisioner/参数/回收策略），PVC 引用后自动创建 PV。",
                            "CSI（Container Storage Interface）标准化存储插件，支持快照、扩容、拓扑感知等高级功能。",
                            "设置 default StorageClass 后，未指定 storageClassName 的 PVC 会自动使用默认类。",
                        ],
                        resources: [
                            { title: "StorageClass", url: "https://kubernetes.io/docs/concepts/storage/storage-classes/" },
                            { title: "CSI 卷", url: "https://kubernetes.io/docs/concepts/storage/volumes/#csi" },
                            { title: "动态供给详解", url: "https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/" },
                        ],
                    },
                    {
                        id: "w5-4",
                        title: "有状态应用：StatefulSet 稳定身份与存储绑定",
                        detail: "StatefulSet 特性与 Headless Service。",
                        keyPoints: [
                            "StatefulSet 为每个 Pod 分配稳定的网络标识（pod-0/pod-1）和独立的 PVC，重启后保持不变。",
                            "Headless Service（clusterIP: None）为每个 Pod 创建独立 DNS 记录，支持有状态服务的点对点通信。",
                            "StatefulSet 按序号顺序创建/删除 Pod，适合需要有序启动的分布式系统（如数据库集群）。",
                        ],
                        resources: [
                            { title: "StatefulSet", url: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/" },
                            { title: "Headless Service", url: "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services" },
                            { title: "StatefulSet 示例", url: "https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/" },
                        ],
                    },
                ],
            },
            {
                id: "w6",
                title: "第 6 周：调度与高级网络",
                summary: "把应用放到正确的节点上，并限制流量。",
                overview: "用亲和/反亲和、优先级、污点/容忍把工作负载放对位置，并理解驱逐/中断；再用 NetworkPolicy/CNI 控制网络可达性与隔离。",
                keyPoints: [
                    "节点/Pod 亲和与反亲和适用场景，拓扑分布约束应对跨可用区的分布。",
                    "Pod Priority/Preemption 与污点/容忍的匹配逻辑，常见专用节点/NoSchedule/NoExecute 场景。",
                    "NetworkPolicy 默认允许→显式拒绝模型，CNI 插件差异（Overlay vs BGP）。",
                ],
                lessons: [
                    {
                        id: "w6-1",
                        title: "高级调度：亲和/反亲和、拓扑分布与优先级",
                        detail: "亲和/拓扑分布、PriorityClass/Preemption，以及自定义调度扩展点。",
                        resources: [
                            { title: "节点亲和/反亲和", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/" },
                            { title: "拓扑分布约束", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/" },
                            { title: "Pod Priority & Preemption", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/" },
                            { title: "Scheduling Framework", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/" },
                            { title: "配置多调度器", url: "https://kubernetes.io/docs/tasks/extend-kubernetes/configure-multiple-schedulers/" },
                        ],
                    },
                    {
                        id: "w6-2",
                        title: "污点与容忍：专用节点、驱逐保护与 PDB 配合",
                        detail: "Taints & Tolerations 以及驱逐/中断（PDB）相关机制。",
                        resources: [
                            { title: "Taints & Tolerations", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/" },
                            { title: "污点容忍示例", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#example-use-cases" },
                            { title: "Pod Disruption Budget & Disruptions", url: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/" },
                        ],
                    },
                    {
                        id: "w6-3",
                        title: "NetworkPolicy 实战：默认拒绝到精细白名单",
                        detail: "NetworkPolicy 的默认拒绝与白名单模式。",
                        resources: [
                            { title: "NetworkPolicy", url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/" },
                            { title: "默认拒绝与白名单示例", url: "https://kubernetes.io/docs/tasks/administer-cluster/declare-network-policy/" },
                        ],
                    },
                    {
                        id: "w6-4",
                        title: "CNI 选型解析：Overlay vs 路由/BGP 的取舍",
                        detail: "Flannel（Overlay）vs Calico（BGP）。",
                        resources: [
                            { title: "CNI 规范", url: "https://www.cni.dev/docs/" },
                            { title: "Flannel", url: "https://github.com/flannel-io/flannel#readme" },
                            { title: "Calico", url: "https://docs.tigera.io/calico/latest/about/" },
                            { title: "Calico 快速开始", url: "https://docs.tigera.io/calico/latest/about" },
                        ],
                    },
                ],
            },
            {
                id: "w7",
                title: "第 7 周：权限与包管理",
                summary: "RBAC、Service Account 与 Helm 发布。",
                overview: "构建多租户安全边界（RBAC + SA），并用 Helm 做模板化发布与回滚，掌握 chart 结构与 values 管理。",
                keyPoints: [
                    "RBAC 角色/绑定的作用域设计，默认角色与最小权限原则。",
                    "ServiceAccount 与 token 投射，镜像拉取/外部访问 API 的安全配置。",
                    "Helm Chart 结构、values/模板函数、发布升级/回滚与 chart 测试。",
                ],
                lessons: [
                    {
                        id: "w7-1",
                        title: "RBAC 最小权限：角色/绑定与自测",
                        detail: "Role、ClusterRole、Binding 的多租户控制。",
                        resources: [
                            { title: "RBAC 授权", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/" },
                            { title: "RBAC 示例（k8s 官方）", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#default-roles-and-role-bindings" },
                        ],
                    },
                    {
                        id: "w7-2",
                        title: "ServiceAccount 身份：token 投射与权限分离",
                        detail: "Pod 访问 API Server 的安全方式。",
                        resources: [
                            { title: "ServiceAccount", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/" },
                            { title: "ServiceAccount Token 投射", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#use-an-imagepullsecret" },
                        ],
                    },
                    {
                        id: "w7-3",
                        title: "Helm 基础发布：Chart 结构与 release 生命周期",
                        detail: "Chart 结构与 Install / Upgrade / Rollback。",
                        resources: [
                            { title: "Helm 快速上手", url: "https://helm.sh/docs/intro/quickstart/" },
                            { title: "Helm 基本命令", url: "https://helm.sh/docs/intro/using_helm/" },
                            { title: "Helm Chart 示例（官方 repo）", url: "https://github.com/helm/examples" },
                        ],
                    },
                    {
                        id: "w7-4",
                        title: "Helm 模板进阶：函数/条件与渲染差异控制",
                        detail: "自定义 Chart、模板语法与 Values 最佳实践。",
                        resources: [
                            { title: "Chart 模板指南", url: "https://helm.sh/docs/chart_template_guide/" },
                            { title: "Values 与模板函数", url: "https://helm.sh/docs/chart_template_guide/values_files/" },
                            { title: "Helm 单元测试与 Lint", url: "https://helm.sh/docs/helm/helm_lint/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase3",
        title: "第三阶段：自动化与交付",
        duration: "第 8-10 周",
        goal: "用 IaC 和 GitOps 让交付可重复、可审计。",
        weeks: [
            {
                id: "w8",
                title: "第 8 周：基础设施即代码（IaC）",
                summary: "用代码描述基础设施，Terraform + Ansible 组合拳。",
                overview: "用 Terraform 申明云资源、模块化管理状态，再用 Ansible 配置节点，实现可重复、可审计的环境搭建。",
                keyPoints: [
                    "Terraform Provider/State/Plan/Apply 基本流程与后端存储锁。",
                    "模块化、变量与输出，工作区/环境隔离策略。",
                    "Ansible Inventory/Playbook/Role 组织方式，幂等与可重复执行。",
                ],
                lessons: [
                    {
                        id: "w8-1",
                        title: "Terraform 基础：HCL、依赖图与 state 管理",
                        detail: "HCL 语法、Provider 配置与 State 管理。",
                        resources: [
                            { title: "Terraform 概览", url: "https://developer.hashicorp.com/terraform/intro" },
                            { title: "Terraform 语言概览", url: "https://developer.hashicorp.com/terraform/language" },
                            { title: "Terraform CLI 快速开始", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli" },
                        ],
                    },
                    {
                        id: "w8-2",
                        title: "Terraform 落地 EKS/GKE：一键建/销练习",
                        detail: "代码化创建云端 K8s 集群（EKS/GKE）。",
                        resources: [
                            { title: "aws_eks_cluster 资源", url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/eks_cluster" },
                            { title: "google_container_cluster 资源", url: "https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/container_cluster" },
                            { title: "EKS Terraform 教程", url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/eks_fargate_profile" },
                        ],
                    },
                    {
                        id: "w8-3",
                        title: "Ansible 基础：无代理配置与幂等 Playbook",
                        detail: "Playbook 与无 Agent 架构优势。",
                        resources: [
                            { title: "Ansible Playbook 指南", url: "https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_intro.html" },
                            { title: "Ansible 架构", url: "https://docs.ansible.com/projects/ansible/latest/getting_started/get_started_ansible.html" },
                            { title: "第一个 Playbook 示例", url: "https://docs.ansible.com/projects/ansible/latest/getting_started/get_started_playbook.html" },
                        ],
                    },
                    {
                        id: "w8-4",
                        title: "Terraform + Ansible 组合：职责拆分与串联",
                        detail: "Terraform 建资源 + Ansible 配置节点。",
                        resources: [
                            { title: "Terraform 模块化", url: "https://developer.hashicorp.com/terraform/language/modules" },
                            { title: "Ansible Roles 最佳实践", url: "https://docs.ansible.com/projects/ansible/latest/tips_tricks/sample_setup.html" },
                            { title: "Terraform + Ansible 流水线示例", url: "https://developer.hashicorp.com/validated-patterns/terraform" },
                        ],
                    },
                ],
            },
            {
                id: "w9",
                title: "第 9 周：CI/CD 流水线",
                summary: "从构建、扫描到发布的自动化流水线。",
                overview: "搭建从代码提交到镜像发布的自动化链路，涵盖构建、测试、漏洞扫描与推送，形成可追溯的制品流。",
                keyPoints: [
                    "Pipeline 触发（push/pr）、分支保护与缓存策略，镜像标签/版本规则。",
                    "CI 中的安全环节：Trivy 扫描、SAST/DAST、签名与制品溯源。",
                    "GitOps 视角：流水线产出 Git 期望状态，由 CD 控制器拉取同步。",
                ],
                lessons: [
                    {
                        id: "w9-1",
                        title: "CI/CD 原则：不可变制品、版本策略与审计",
                        detail: "云原生环境下的持续集成与交付挑战。",
                        resources: [
                            { title: "GitHub Actions 概念", url: "https://docs.github.com/en/actions/about-github-actions/understanding-github-actions" },
                            { title: "Jenkins Pipeline 概览", url: "https://www.jenkins.io/doc/book/pipeline/" },
                            { title: "Twelve-Factor App 方法论", url: "https://12factor.net/" },
                            { title: "语义化版本规范", url: "https://semver.org/" },
                            { title: "SLSA 供应链安全框架", url: "https://slsa.dev/" },
                        ],
                    },
                    {
                        id: "w9-2",
                        title: "流水线实战（上）：镜像构建、打标签与推送",
                        detail: "Jenkins/GitHub Actions 构建并推镜像。",
                        resources: [
                            { title: "Publishing Docker images (GH Actions)", url: "https://docs.github.com/en/actions/publishing-packages/publishing-docker-images" },
                            { title: "Jenkins Pipeline + Docker", url: "https://www.jenkins.io/doc/book/pipeline/docker/" },
                            { title: "GitHub Actions + Container Registry 模板", url: "https://github.com/actions/starter-workflows/blob/main/ci/docker-publish.yml" },
                        ],
                    },
                    {
                        id: "w9-3",
                        title: "流水线实战（下）：安全扫描与质量门禁",
                        detail: "集成 Trivy 扫描与自动化测试。",
                        resources: [
                            { title: "Trivy 使用指南", url: "https://trivy.dev/docs/latest/" },
                            { title: "Trivy GitHub Action", url: "https://github.com/aquasecurity/trivy-action" },
                            { title: "CI 集成容器扫描示例", url: "https://trivy.dev/docs/latest/tutorials/integrations/github-actions/" },
                        ],
                    },
                    {
                        id: "w9-4",
                        title: "GitOps 导论：拉取式对齐与审计回滚优势",
                        detail: "Push 模式 vs Pull 模式（ArgoCD）。",
                        resources: [
                            { title: "ArgoCD 概念", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/application-specification/" },
                            { title: "Flux GitOps 概览", url: "https://fluxcd.io/flux/" },
                            { title: "ArgoCD Webhook 集成", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/webhook/" },
                        ],
                    },
                ],
            },
            {
                id: "w10",
                title: "第 10 周：GitOps 实战（ArgoCD）",
                summary: "用 ArgoCD 自愈同步，管理多环境与 App of Apps。",
                overview: "深入 ArgoCD 控制回路，配置自动同步、自愈与清理，掌握 Helm/Kustomize 多环境管理和 App of Apps 编排。",
                keyPoints: [
                    "Application CRD 关键字段（source/destination/syncPolicy）与健康/同步状态。",
                    "Auto-Sync、Prune、Self-Heal 配置，Sync Wave/Hook 的发布编排。",
                    "多环境（dev/stage/prod）差异管理：Kustomize overlays 或 Helm values；App of Apps + 多集群管理与渐进式发布。",
                ],
                lessons: [
                    {
                        id: "w10-1",
                        title: "ArgoCD 架构：组件分工与 Application 模型",
                        detail: "部署 ArgoCD 与 Application CRD。",
                        resources: [
                            { title: "ArgoCD 架构：组件分工与 Application 模型", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/" },
                            { title: "Application CRD 规范", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/" },
                            { title: "ArgoCD Getting Started", url: "https://argo-cd.readthedocs.io/en/stable/getting_started/" },
                        ],
                    },
                    {
                        id: "w10-2",
                        title: "ArgoCD 同步策略：auto-sync/prune/self-heal 编排",
                        detail: "Auto-Sync、Prune、Self-Heal 功能。",
                        resources: [
                            { title: "ArgoCD 自动同步", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/" },
                            { title: "Self Heal & Prune", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/" },
                            { title: "Sync Waves / Hooks", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/" },
                        ],
                    },
                    {
                        id: "w10-3",
                        title: "多环境管理：Kustomize/Helm 管理漂移与晋级",
                        detail: "Kustomize 或 Helm 管理 Dev/Prod 差异。",
                        resources: [
                            { title: "ArgoCD Kustomize 支持", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/kustomize/" },
                            { title: "ArgoCD Helm 支持", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/helm/" },
                            { title: "Kustomize 入门", url: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/" },
                        ],
                    },
                    {
                        id: "w10-4",
                        title: "App of Apps：多集群引导与渐进式发布",
                        detail: "规模化引导（Bootstrap）、多集群管理与渐进式发布（Canary/Blue-Green）。",
                        resources: [
                            { title: "App of Apps/集群引导", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/" },
                            { title: "ArgoCD Cluster Management", url: "https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-management/" },
                            { title: "Argo Rollouts（渐进式交付）", url: "https://argo-rollouts.readthedocs.io/en/stable/" },
                            { title: "ArgoCD 示例仓库", url: "https://github.com/argoproj/argocd-example-apps/tree/master/apps" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase4",
        title: "第四阶段：可观测性与服务网格",
        duration: "第 11-13 周",
        goal: "点亮 Metrics / Logs / Traces，并掌握服务网格流量治理。",
        weeks: [
            {
                id: "w11",
                title: "第 11 周：监控与指标",
                summary: "Prometheus 拉取模型、PromQL、Grafana 可视化与告警。",
                overview: "搭建 Metrics 链路：Prometheus 拉取 → PromQL 计算 → Grafana 展示 → Alertmanager 告警，理解采样/聚合/告警抑制要点。",
                keyPoints: [
                    "Prometheus 抓取目标发现、relabel、Exporter 选型与 TSDB 存储特性。",
                    "Kubernetes 资源健康：metrics-server/kube-state-metrics 让容量、配额与控制器状态可观测。",
                    "PromQL 常用函数（rate/sum by/histogram_quantile），区分瞬时值与区间向量。",
                    "Grafana Dashboard 设计与告警路由、静默/抑制策略，防“告警风暴”。",
                ],
                lessons: [
                    {
                        id: "w11-1",
                        title: "Prometheus 采集链路：发现、Relabel 与存储",
                        detail: "Pull 模型、TSDB 存储与 Exporter。",
                        resources: [
                            { title: "Prometheus 概览", url: "https://prometheus.io/docs/introduction/overview/" },
                            { title: "Kubernetes 资源指标链路（metrics-server）", url: "https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-metrics-pipeline/" },
                            { title: "kube-state-metrics", url: "https://github.com/kubernetes/kube-state-metrics" },
                            { title: "Exporter 生态", url: "https://prometheus.io/docs/instrumenting/exporters/" },
                            { title: "Prometheus 安装示例", url: "https://prometheus.io/docs/prometheus/latest/installation/" },
                        ],
                    },
                    {
                        id: "w11-2",
                        title: "PromQL 核心用法：rate/聚合与直方图分位数",
                        detail: "常用聚合、Rate 计算与 Histogram 分析。",
                        resources: [
                            { title: "PromQL 基础", url: "https://prometheus.io/docs/prometheus/latest/querying/basics/" },
                            { title: "Range & rate", url: "https://prometheus.io/docs/prometheus/latest/querying/basics/#range-vector-selectors" },
                            { title: "直方图/分位数实践", url: "https://prometheus.io/docs/practices/histograms/" },
                        ],
                    },
                    {
                        id: "w11-3",
                        title: "Grafana 可视化：参数化仪表与复用面板",
                        detail: "配置数据源、导入 Dashboard 与自定义面板。",
                        resources: [
                            { title: "Grafana 数据源", url: "https://grafana.com/docs/grafana/latest/datasources/" },
                            { title: "Dashboard 入门", url: "https://grafana.com/docs/grafana/latest/visualizations/dashboards/build-dashboards/" },
                            { title: "导入社区 Dashboard", url: "https://grafana.com/docs/grafana/latest/visualizations/dashboards/build-dashboards/import-dashboards/" },
                        ],
                    },
                    {
                        id: "w11-4",
                        title: "告警管理：Alertmanager 路由、抑制与静默",
                        detail: "Alertmanager 的分组、抑制与静默。",
                        resources: [
                            { title: "Alertmanager 文档", url: "https://prometheus.io/docs/alerting/latest/alertmanager/" },
                            { title: "抑制与静默", url: "https://prometheus.io/docs/alerting/latest/alertmanager/#silences" },
                            { title: "Alertmanager 配置示例", url: "https://prometheus.io/docs/alerting/latest/configuration/" },
                        ],
                    },
                ],
            },
            {
                id: "w12",
                title: "第 12 周：日志与链路追踪",
                summary: "日志收集、PLG（Loki）与 OpenTelemetry / Jaeger。",
                overview: "串起日志与 Trace：从节点日志收集到 Loki/ELK，再用 OpenTelemetry 统一埋点，Jaeger 查看端到端调用路径。",
                keyPoints: [
                    "K8s 日志收集模式：DaemonSet vs Sidecar；多租户/多命名空间隔离思路。",
                    "Loki 的标签索引与 LogQL 查询性能考量，采集/保留策略。",
                    "Trace 三要素（TraceID/Span/Context Propagation），OTel SDK/Collector 管线配置。",
                ],
                lessons: [
                    {
                        id: "w12-1",
                        title: "日志收集架构：DaemonSet vs Sidecar 权衡",
                        detail: "DaemonSet vs Sidecar 模式对比。",
                        resources: [
                            { title: "Kubernetes 日志架构", url: "https://kubernetes.io/docs/concepts/cluster-administration/logging/" },
                            { title: "Fluent Bit 在 Kubernetes 中部署", url: "https://docs.fluentbit.io/manual/installation/downloads/kubernetes" },
                        ],
                    },
                    {
                        id: "w12-2",
                        title: "Loki/PLG：标签索引模型与高效 LogQL 查询",
                        detail: "Loki 标签索引与 LogQL 语法。",
                        resources: [
                            { title: "Loki 官方文档", url: "https://grafana.com/docs/loki/latest/" },
                            { title: "LogQL", url: "https://grafana.com/docs/loki/latest/query/" },
                            { title: "Loki Helm 安装", url: "https://grafana.com/docs/loki/latest/setup/install/helm/" },
                        ],
                    },
                    {
                        id: "w12-3",
                        title: "分布式追踪基础：Trace/Span/采样与埋点",
                        detail: "Span、Trace、Context Propagation。",
                        resources: [
                            { title: "OpenTelemetry Traces", url: "https://opentelemetry.io/docs/concepts/signals/traces/" },
                            { title: "Context Propagation", url: "https://opentelemetry.io/docs/concepts/context-propagation/" },
                        ],
                    },
                    {
                        id: "w12-4",
                        title: "OpenTelemetry + Jaeger：Collector 管线到可视化",
                        detail: "统一观测标准与 Jaeger UI 实战。",
                        resources: [
                            { title: "OTel Collectors", url: "https://opentelemetry.io/docs/collector/" },
                            { title: "Jaeger 快速开始", url: "https://www.jaegertracing.io/docs/2.13/getting-started/" },
                            { title: "OpenTelemetry Demo", url: "https://opentelemetry.io/docs/demo/" },
                        ],
                    },
                ],
            },
            {
                id: "w13",
                title: "第 13 周：服务网格",
                summary: "Istio 架构、流量治理与 mTLS 安全。",
                overview: "理解控制面与数据面的分工，实践流量治理（灰度、熔断、故障注入）与 mTLS 零信任防护，评估 Mesh 成本与收益。",
                keyPoints: [
                    "Istiod（xDS）如何向 Envoy 下发配置，Sidecar 注入与流量劫持路径。",
                    "VirtualService / DestinationRule 组合：路由、熔断、重试、超时、故障注入。",
                    "PeerAuthentication/AuthorizationPolicy 落地 mTLS 与细粒度访问控制。",
                ],
                lessons: [
                    {
                        id: "w13-1",
                        title: "Service Mesh 价值判断：下沉治理与适用场景",
                        detail: "微服务通信挑战与 Sidecar 模式。",
                        resources: [
                            { title: "Istio 是什么", url: "https://istio.io/latest/about/service-mesh/" },
                            { title: "Service Mesh Interface (SMI)", url: "https://smi-spec.io/" },
                        ],
                    },
                    {
                        id: "w13-2",
                        title: "Istio 架构与安装：控制面/数据面与注入验证",
                        detail: "Istiod 控制平面与 Envoy 数据平面。",
                        resources: [
                            { title: "Istio 架构", url: "https://istio.io/latest/docs/ops/deployment/architecture/" },
                            { title: "Istio 快速安装", url: "https://istio.io/latest/docs/setup/getting-started/" },
                            { title: "安装配置 Profiles", url: "https://istio.io/latest/docs/setup/additional-setup/config-profiles/" },
                        ],
                    },
                    {
                        id: "w13-3",
                        title: "Istio 流量治理：金丝雀、熔断与故障注入",
                        detail: "通过 VirtualService/DestinationRule 实现灰度发布、断路器熔断与故障注入，验证服务韧性。",
                        resources: [
                            { title: "Istio 流量管理", url: "https://istio.io/latest/docs/concepts/traffic-management/" },
                            { title: "故障注入示例", url: "https://istio.io/latest/docs/tasks/traffic-management/fault-injection/" },
                            { title: "流量分流/金丝雀示例", url: "https://istio.io/latest/docs/tasks/traffic-management/traffic-shifting/" },
                        ],
                    },
                    {
                        id: "w13-4",
                        title: "网格安全：mTLS、认证/授权策略与落地",
                        detail: "零信任网络与 mTLS 的自动实施。",
                        resources: [
                            { title: "Istio 安全概念", url: "https://istio.io/latest/docs/concepts/security/" },
                            { title: "PeerAuthentication mTLS", url: "https://istio.io/latest/docs/tasks/security/authentication/mtls-migration/" },
                            { title: "授权策略示例", url: "https://istio.io/latest/docs/tasks/security/authorization/authz-http/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase5",
        title: "第五阶段：安全、进阶与认证",
        duration: "第 14-16 周",
        goal: "守护供应链安全，探索 Serverless，并为 CKA/CKAD 备考。",
        weeks: [
            {
                id: "w14",
                title: "第 14 周：云原生安全（DevSecOps）",
                summary: "4C 安全模型、供应链安全、策略即代码与运行时防护。",
                overview: "分层思考安全：云/集群/容器/代码，构建从镜像签名、准入策略到运行时检测的全链路防护。",
                keyPoints: [
                    "4C 模型与 Pod Security 标准，最小权限 + 隔离（PSA/PSP 替代）。",
                    "供应链安全：Cosign 签名、准入控制器验证、SLSA/签名策略。",
                    "策略即代码与运行时：Gatekeeper/Kyverno 统一合规，Falco 监控异常系统调用。",
                ],
                lessons: [
                    {
                        id: "w14-1",
                        title: "4C 安全基线：云/集群/容器/代码的加固清单",
                        detail: "Cloud、Cluster、Container、Code 的分层防御。",
                        resources: [
                            { title: "Kubernetes Security 概览", url: "https://kubernetes.io/docs/concepts/security/" },
                            { title: "Pod Security Standards", url: "https://kubernetes.io/docs/concepts/security/pod-security-standards/" },
                            { title: "NSA/CISA Kubernetes 加固指南", url: "https://kubernetes.io/blog/2021/10/05/nsa-cisa-kubernetes-hardening-guidance/" },
                        ],
                    },
                    {
                        id: "w14-2",
                        title: "供应链安全：Cosign 签名验证与准入控制",
                        detail: "镜像签名（Cosign）与准入控制。",
                        resources: [
                            { title: "Cosign 概览", url: "https://docs.sigstore.dev/quickstart/quickstart-cosign/" },
                            { title: "Admission Controllers", url: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/" },
                            { title: "policy-controller（Sigstore）", url: "https://docs.sigstore.dev/policy-controller/overview/" },
                        ],
                    },
                    {
                        id: "w14-3",
                        title: "策略即代码：Gatekeeper/Kyverno 规则与例外",
                        detail: "OPA Gatekeeper 或 Kyverno 的合规策略。",
                        resources: [
                            { title: "OPA Gatekeeper", url: "https://open-policy-agent.github.io/gatekeeper/website/docs/" },
                            { title: "Kyverno 文档", url: "https://kyverno.io/docs/" },
                            { title: "Gatekeeper 策略库", url: "https://open-policy-agent.github.io/gatekeeper-library/website/" },
                        ],
                    },
                    {
                        id: "w14-4",
                        title: "运行时安全：Falco 规则维护与降噪",
                        detail: "Falco 监控异常系统调用。",
                        resources: [
                            { title: "Falco 文档", url: "https://falco.org/docs/" },
                            { title: "Falco 规则", url: "https://falco.org/docs/rules/" },
                            { title: "Falco 在 Kubernetes 部署", url: "https://falco.org/docs/getting-started/running/#kubernetes" },
                        ],
                    },
                ],
            },
            {
                id: "w15",
                title: "第 15 周：Serverless 与自动扩缩容",
                summary: "HPA/Cluster Autoscaler，Knative 与事件驱动架构。",
                overview: "掌握从 Pod 到集群的弹性链路，理解 Knative 的 scale-to-zero 与事件驱动模型，以及 Operator 模式的自动化扩展。",
                keyPoints: [
                    "HPA/VPA 指标来源（metrics-server/自定义指标）与目标配置，抖动与冷却时间调优。",
                    "Cluster Autoscaler 节点弹性与调度耦合；Knative Serving 冷启动、并发控制。",
                    "Eventing + CloudEvents 的事件总线思路，Operator/CRD 让扩展点可编排。",
                ],
                lessons: [
                    {
                        id: "w15-1",
                        title: "弹性策略：HPA/VPA 与 Cluster Autoscaler 协同",
                        detail: "HPA/VPA 与 Cluster Autoscaler 的协同。",
                        resources: [
                            { title: "Horizontal Pod Autoscaler", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/" },
                            { title: "Vertical Pod Autoscaler (VPA)", url: "https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler" },
                            { title: "Cluster Autoscaler", url: "https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler" },
                            { title: "HPA 自定义指标示例", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/" },
                        ],
                    },
                    {
                        id: "w15-2",
                        title: "Knative Serving：revision/route 与并发调优",
                        detail: "Scale-to-Zero 与冷启动机制。",
                        resources: [
                            { title: "Knative Serving：revision/route 与并发调优", url: "https://knative.dev/docs/serving/" },
                            { title: "Scale to zero", url: "https://knative.dev/docs/serving/autoscaling/scale-to-zero/" },
                            { title: "Knative Serving 快速安装", url: "https://knative.dev/docs/install/yaml-install/serving/install-serving-with-yaml/" },
                        ],
                    },
                    {
                        id: "w15-3",
                        title: "事件驱动：Knative Eventing + CloudEvents 最小闭环",
                        detail: "Knative Eventing 与 CloudEvents。",
                        resources: [
                            { title: "Knative Eventing", url: "https://knative.dev/docs/eventing/" },
                            { title: "CloudEvents 规范", url: "https://cloudevents.io/" },
                            { title: "Eventing 入门示例", url: "https://knative.dev/docs/eventing/getting-started/" },
                        ],
                    },
                    {
                        id: "w15-4",
                        title: "Operator 模式：CRD/Controller 调和复杂应用",
                        detail: "用 Operator 管理复杂有状态应用。",
                        resources: [
                            { title: "Operator 模式：CRD/Controller 调和复杂应用", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/operator/" },
                            { title: "Custom Resources / CRD", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/" },
                            { title: "API Aggregation Layer", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/apiserver-aggregation/" },
                            { title: "Operator SDK", url: "https://sdk.operatorframework.io/docs/" },
                            { title: "Kubebuilder 快速开始", url: "https://book.kubebuilder.io/quick-start.html" },
                        ],
                    },
                ],
            },
            {
                id: "w16",
                title: "第 16 周：故障排查与认证冲刺",
                summary: "灾备、常见故障与 CKA/CKAD 考点梳理。",
                overview: "集中演练备份恢复与高频故障排查，梳理 CKA/CKAD 考点与实战技巧，为考试与生产应急做最后冲刺。",
                keyPoints: [
                    "etcd 备份/恢复流程、证书与 kubeadm 版本兼容性注意事项。",
                    "常见故障：OOMKilled/CrashLoopBackOff/ImagePullBackOff 的分层排查手册与 kubectl 调试技巧。",
                    "考试策略：kubectl 快捷命令、文档检索、时间管理；面试/实战可展示的演练清单。",
                ],
                lessons: [
                    {
                        id: "w16-1",
                        title: "集群灾备：etcd 快照备份与恢复演练",
                        detail: "Etcd 数据快照备份与恢复（CKA 考点）。",
                        resources: [
                            { title: "etcd 备份恢复（K8s 官方）", url: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/" },
                            { title: "etcd snapshot 恢复", url: "https://etcd.io/docs/v3.5/op-guide/recovery/" },
                            { title: "etcd 维护与备份", url: "https://etcd.io/docs/v3.5/op-guide/maintenance/" },
                        ],
                    },
                    {
                        id: "w16-2",
                        title: "高频故障排查：从事件到网络的逐层定位",
                        detail: "OOMKilled、CrashLoopBackOff、ImagePullBackOff 分析。",
                        resources: [
                            { title: "调试应用", url: "https://kubernetes.io/docs/tasks/debug/debug-application/" },
                            { title: "镜像拉取问题", url: "https://kubernetes.io/docs/concepts/containers/images/#imagepullbackoff" },
                            { title: "调试 Pod（官方任务）", url: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/" },
                        ],
                    },
                    {
                        id: "w16-3",
                        title: "认证冲刺：CKA/CKAD 技巧与训练计划",
                        detail: "CKA vs CKAD 考试策略与真题分析。",
                        resources: [
                            { title: "CKA 认证", url: "https://www.cncf.io/training/certification/cka/" },
                            { title: "CKAD 认证", url: "https://www.cncf.io/training/certification/ckad/" },
                            { title: "CNCF 考纲（curriculum）", url: "https://github.com/cncf/curriculum" },
                        ],
                    },
                    {
                        id: "w16-4",
                        title: "课程回顾与下一步：技能树与职业路线",
                        detail: "构建个人云原生技能树与面试准备。",
                        resources: [
                            { title: "Kubernetes 学习资源", url: "https://kubernetes.io/docs/home/" },
                            { title: "Training & Certification", url: "https://kubernetes.io/training/" },
                            { title: "社区活动 / KubeCon", url: "https://www.cncf.io/events/" },
                        ],
                    },
                ],
            },
        ],
    },
]

export const kubernetesKnowledgeCards: KnowledgeCard[] = [
    {
        id: "phase1",
        title: "容器 = 被雕刻过的 Linux",
        summary: "Namespaces + Cgroups + UnionFS 组合出“隔离的假象”。理解这一点能让你从容面对容器问题排查。",
        points: [
            "Namespaces 决定“看得见谁”，Cgroups 决定“能用多少”，UnionFS 决定“如何共享文件”。",
            "容器崩溃排查：先看资源（Cgroups）再看网络（veth/bridge），最后检查文件系统写时复制。",
            "构建镜像时：多阶段 + 缩小 base image，避免把构建工具带入运行镜像。",
        ],
        practice: "用 docker run --rm -it --pid=host --uts=host --net=host 观察容器与宿主机的 namespace 差异。",
    },
    {
        id: "phase2",
        title: "K8s 编排的“期望状态”",
        summary: "K8s 控制器不断调和期望状态与实际状态，Deployment/Job/Service/StatefulSet 覆盖副本、批处理、流量和身份。",
        points: [
            "Deployment 负责无状态副本，StatefulSet 负责稳定身份，Job/CronJob 负责一次性/定时任务。",
            "Service + Ingress 构成东西向与南北向流量入口，NetworkPolicy 才是“防火墙”。",
            "资源治理与存储：requests/limits/QoS + ResourceQuota/LimitRange，配合 PVC/StorageClass/CSI 管理状态。",
        ],
        practice: "给同一应用同时创建 Deployment 与 StatefulSet，对比 Pod 名称、PVC 行为以及滚动更新方式。",
    },
    {
        id: "phase3",
        title: "交付自动化与 GitOps",
        summary: "一切配置进 Git，CI 生成镜像，CD 由 ArgoCD 拉取并自愈，同步失败即回滚。",
        points: [
            "Terraform 创建集群，Ansible 配机器，K8s 负责运行；分层职责让排错可定位。",
            "GitOps + 多集群：Git 是唯一真相，ArgoCD 对多个集群持续拉取并调和目标状态。",
            "流水线要包含安全：镜像扫描（Trivy）、自动化测试、分支保护与审批。",
        ],
        practice: "为一个示例应用写 GitHub Actions：构建镜像、扫描、推送；再写 ArgoCD Application 自动拉取部署。",
    },
    {
        id: "phase4",
        title: "可观测性三板斧",
        summary: "Metrics 看趋势，Logs 查细节，Traces 找瓶颈；Prometheus + Loki + Tempo/Jaeger 是经典搭配。",
        points: [
            "Prometheus 是 Pull 模型：抓不到就没有数据，记得探针/ServiceMonitor。",
            "PromQL 习惯用 rate/histogram_quantile，把瞬时值转成可读趋势。",
            "服务网格让遥测变简单，但也带来了延迟与资源开销，需权衡。",
        ],
        practice: "给一个 API 应用加上 Prometheus Exporter 与 OpenTelemetry SDK，观察一次请求的三份数据（指标/日志/trace）。",
    },
    {
        id: "phase5",
        title: "安全与认证冲刺",
        summary: "4C 安全模型确保云、集群、容器、代码层层防护；CKA/CKAD 考点集中在排错与日常运维。",
        points: [
            "Admission 控制 + 镜像签名防供应链攻击；Runtime Security 防零日利用。",
            "HPA/VPA/Autoscaler 与事件驱动架构让资源按需弹性，但要监控成本与冷启动。",
            "备考：熟练 kubectl、etcd 备份恢复、NetworkPolicy、PV/PVC 以及常见故障分析。",
        ],
        practice: "用 cosign 给镜像签名，并在集群里配置准入控制器拒绝未签名镜像。",
    },
]

export const kubernetesExamQuestions: QuizQuestion[] = [
    {
        id: "q1",
        question: "K8s 移除 Docker Shim 的主要原因是什么？",
        options: [
            "Docker 不支持镜像签名",
            "减少额外适配层，直接使用符合 CRI 的运行时（如 containerd/CRI-O）",
            "K8s 准备放弃容器技术",
            "为了提升 Dockerfile 构建速度",
        ],
        answer: 1,
        rationale: "直接使用 CRI 运行时能减少维护负担，接口更清晰，性能更稳定。",
    },
    {
        id: "q2",
        question: "Deployment 与 StatefulSet 的核心区别是？",
        options: [
            "Deployment 支持持久卷，StatefulSet 不支持",
            "StatefulSet 提供稳定网络标识与有序部署，适合有状态场景",
            "Deployment 无法滚动更新",
            "StatefulSet 不支持扩容",
        ],
        answer: 1,
        rationale: "StatefulSet 为每个 Pod 绑定稳定身份（序号/Headless Service），并在部署/扩容时保持有序。",
    },
    {
        id: "q3",
        question: "NetworkPolicy 默认行为是？",
        options: [
            "没有任何策略时默认全拒绝",
            "存在策略但未定义 ingress/egress 规则的 Pod 默认拒绝对应方向的流量",
            "默认只允许同命名空间访问",
            "默认只允许来自 Service 的流量",
        ],
        answer: 1,
        rationale: "创建了 NetworkPolicy 且未匹配的方向会被拒绝；未创建策略时是全允许。",
    },
    {
        id: "q4",
        question: "多阶段构建（multi-stage builds）的直接收益是？",
        options: [
            "让镜像自动签名",
            "减少镜像体积、避免将编译工具带入运行镜像",
            "自动生成 Kubernetes YAML",
            "无需写 Dockerfile",
        ],
        answer: 1,
        rationale: "多阶段把编译与运行拆开，最终镜像更小、更安全。",
    },
    {
        id: "q5",
        question: "GitOps 的核心原则是？",
        options: [
            "所有变更直接在集群上手工操作",
            "把集群状态当作唯一真相",
            "Git 作为唯一真相，控制器持续对比并同步到集群",
            "只在发布时使用 Git",
        ],
        answer: 2,
        rationale: "Git 记录期望状态，ArgoCD/Flux 持续拉取并调和集群实际状态。",
    },
    {
        id: "q6",
        question: "Prometheus 采集模型的特点是？",
        options: [
            "推送模型，需要应用主动推送",
            "拉取模型，需要通过 ServiceMonitor/Relabel 抓取目标",
            "只支持日志，不支持指标",
            "只能在单机运行，不能横向扩展",
        ],
        answer: 1,
        rationale: "Prometheus 以拉取为主，PushGateway 只是补充场景。",
    },
    {
        id: "q7",
        question: "Helm 升级失败后希望快速回滚，应该使用？",
        options: ["helm template", "helm lint", "helm rollback", "helm fetch"],
        answer: 2,
        rationale: "helm rollback 可以直接回退到指定 release 版本。",
    },
    {
        id: "q8",
        question: "Istio 中开启 mTLS 的直接收益是？",
        options: ["减少带宽占用", "让 Sidecar 数量变少", "实现服务间双向认证与链路加密，提升零信任安全", "自动缩容到 0"],
        answer: 2,
        rationale: "mTLS 提供身份校验与传输加密，是零信任的核心。",
    },
    {
        id: "q9",
        question: "HPA（Horizontal Pod Autoscaler）主要根据什么做扩缩容？",
        options: ["节点数量", "Pod 数量", "配置的指标（如 CPU/自定义指标）的实时值与目标值对比", "镜像大小"],
        answer: 2,
        rationale: "HPA 通过 Metrics Server 或自定义指标与目标值比较来调整副本数。",
    },
    {
        id: "q10",
        question: "为什么要给镜像做签名并在 Admission 阶段验证？",
        options: ["减少镜像体积", "提升 Pod 启动速度", "确保镜像来源可信、内容未被篡改，阻断供应链攻击", "自动生成 Helm Chart"],
        answer: 2,
        rationale: "签名与准入校验能在供应链环节阻挡恶意镜像进入集群。",
    },
    {
        id: "q11",
        question: "Linux Namespace 的作用是？",
        options: [
            "限制进程的 CPU 和内存使用量",
            "为进程提供隔离的视图（PID/网络/挂载点等），使其看不到宿主机或其他容器的资源",
            "提供持久化存储给容器",
            "管理容器镜像的分层结构",
        ],
        answer: 1,
        rationale: "Namespace 负责隔离可见性，Cgroups 负责资源限额，二者配合构成容器的基础。",
    },
    {
        id: "q12",
        question: "PV/PVC 的绑定关系描述正确的是？",
        options: [
            "一个 PVC 可以同时绑定多个 PV",
            "PV 和 PVC 是一对一绑定，PVC 按容量和访问模式匹配合适的 PV",
            "PVC 创建后会自动创建一个同名 PV",
            "PV 只能在 default 命名空间中使用",
        ],
        answer: 1,
        rationale: "PV 是集群级别资源，PVC 按请求的容量/accessMode 与之一对一绑定。",
    },
    {
        id: "q13",
        question: "RBAC 中 Role 与 ClusterRole 的区别是？",
        options: [
            "Role 适用于整个集群，ClusterRole 只在单个命名空间有效",
            "Role 限定在单个命名空间，ClusterRole 可作用于集群范围的资源",
            "二者完全相同，只是名称不同",
            "ClusterRole 不支持绑定到 ServiceAccount",
        ],
        answer: 1,
        rationale: "Role 是 namespace 级别的权限定义，ClusterRole 可跨命名空间或管理集群级资源。",
    },
    {
        id: "q14",
        question: "Terraform 的 State 文件的主要作用是？",
        options: [
            "存放 Terraform 的安装配置",
            "记录基础设施当前状态，以便 Plan/Apply 时对比差异并做增量变更",
            "替代 .tf 文件存放 HCL 代码",
            "仅用于回滚操作",
        ],
        answer: 1,
        rationale: "State 记录实际资源与配置的映射，Terraform 据此计算 diff 并执行最小变更。",
    },
    {
        id: "q15",
        question: "ArgoCD 中 Self-Heal 功能的含义是？",
        options: [
            "自动修复代码中的 Bug",
            "当集群中资源被手动修改偏离 Git 期望状态时，自动恢复到 Git 定义的状态",
            "自动升级 ArgoCD 版本",
            "自动扩容集群节点",
        ],
        answer: 1,
        rationale: "Self-Heal 会监测实际状态与 Git 的偏差，并自动调和回期望状态。",
    },
    {
        id: "q16",
        question: "PromQL 中 rate() 函数的作用是？",
        options: [
            "返回指标的绝对值",
            "计算 Counter 类型指标在给定时间范围内的每秒平均增长率",
            "将指标从 Gauge 转换为 Histogram",
            "对指标做字符串格式化",
        ],
        answer: 1,
        rationale: "rate() 适用于 Counter 指标，计算指定区间内的每秒增长速率，是 PromQL 最常用的函数之一。",
    },
    {
        id: "q17",
        question: "Loki 与 Elasticsearch 在日志存储上的核心差异是？",
        options: [
            "Loki 对日志内容全文索引，Elasticsearch 只索引标签",
            "Loki 只索引标签（labels）不索引日志内容，存储成本更低",
            "二者完全相同，只是 API 不同",
            "Loki 只能存储结构化日志",
        ],
        answer: 1,
        rationale: "Loki 通过只索引标签降低存储开销，查询时再对日志内容做过滤。",
    },
    {
        id: "q18",
        question: "Knative Serving 的 Scale-to-Zero 意味着？",
        options: [
            "删除所有集群节点",
            "当没有流量时自动将 Pod 副本数缩到 0，有请求时再冷启动",
            "将容器的 CPU limits 设为 0",
            "关闭 Knative 控制平面",
        ],
        answer: 1,
        rationale: "Scale-to-Zero 在无流量时释放资源，首次请求到达时触发冷启动创建 Pod。",
    },
    {
        id: "q19",
        question: "etcd 备份恢复在 CKA 考试中的关键步骤是？",
        options: [
            "只需重启 API Server 即可恢复",
            "使用 etcdctl snapshot save 备份，snapshot restore 恢复到新数据目录并更新 etcd 配置",
            "直接复制 /var/lib/etcd 目录即可",
            "通过 kubectl apply 重新提交所有 YAML",
        ],
        answer: 1,
        rationale: "etcdctl snapshot save/restore 是标准流程，恢复后需指向新数据目录并重启 etcd。",
    },
    {
        id: "q20",
        question: "Taints 与 Tolerations 的协作方式是？",
        options: [
            "Taint 标记在 Pod 上，Toleration 标记在节点上",
            "Taint 标记在节点上表示排斥，Pod 必须带有匹配的 Toleration 才能被调度到该节点",
            "二者用于配置持久卷绑定",
            "Toleration 会自动移除节点上的 Taint",
        ],
        answer: 1,
        rationale: "Taint 是节点的排斥标记，Pod 需要声明对应的 Toleration 才能「容忍」该 Taint 并被调度上去。",
    },
]

export const kubernetesRoadmap: RoadmapDefinition = {
    id: "kubernetes",
    label: "Kubernetes",
    title: "Kubernetes",
    durationLabel: "16 个主题",
    description:
        "按阶段拆成 16 个主题：容器与 Linux 基石 → 集群核心 → 网络/存储/调度 → 可观测性 → 安全与合规 → GitOps/Service Mesh。每个主题都有打卡、文档题单与即时测验，进度自动本地保存，按自己的节奏推进。",
    heroBadge: "Cloud Native Bootcamp",
    stages: kubernetesStages,
    knowledgeCards: kubernetesKnowledgeCards,
    examQuestions: kubernetesExamQuestions,
    suggestion: (percent: number) => {
        if (percent < 25) {
            return "建议先完成基础阶段的前几个主题，专注 Namespaces、Cgroups 与 Dockerfile 多阶段构建。"
        }
        if (percent < 50) {
            return "完成工作负载与存储相关主题，顺便练习滚动更新与 PVC 绑定。"
        }
        if (percent < 75) {
            return "补齐调度/NetworkPolicy 主题，并搭建一条 CI/CD 流水线打通发布闭环。"
        }
        return "加强可观测性与安全相关主题，完成 2 次全量测验再收尾。"
    },
    resourceGuide: {
        environment: "本地 Kind/Minikube 或云上集群，具备 kubectl/容器工具链。",
        fallbackKeyPoints: [
            "照着官方示例跑通最小闭环：构建/部署/验证，先有成功体验。",
            "逐项改参数（资源、探针、路由、存储、策略），观察事件/日志/指标的变化。",
            "整理常见误区与排查路径：权限、网络、存储、镜像拉取、探针、调度。",
        ],
        handsOnSteps: [
            "打开原文，先跑通最小可用示例（命令/清单照抄也行），确认成功信号。",
            "修改 1-2 个关键参数（副本、探针阈值、资源限额、路由/策略等），对比行为差异并记录。",
            "用 `kubectl describe`、事件、日志或容器 CLI 验证修改已生效，并观察监控/告警（如适用）。",
        ],
        selfChecks: [
            "用自己的话阐述：核心机制/配置到底做了什么？边界条件是什么？",
            "故障排查优先级：先看事件/日志，再看网络/权限/存储，再看探针/资源/调度。",
            "在生产落地：需要哪些安全/性能/成本防护（如 RBAC、配额、限流、告警）？",
        ],
        extensions: [
            "把官方示例收录到你的实验仓库，写出“期望 vs 实际”差异与复盘。",
            "列 3 条常见坑，并附上排查脚本/命令（kubectl/日志/监控）。",
            "把本节知识与前后主题串联，设计一个小型端到端演练（部署 → 观测 → 调优 → 回滚）。",
        ],
        lessonQuizAdvice: "建议：复盘错题对应的配置/命令，回到文档或实验里重新验证。",
    },
}

