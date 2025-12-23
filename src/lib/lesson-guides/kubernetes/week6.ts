import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "w6-4": {
        lessonId: "w6-4",
        background: [
            "【CNI 规范定义】CNI 官方：'a specification and libraries for writing plugins to configure network interfaces in Linux containers'——CNI 是 CNCF 项目，专注于容器网络连接和资源清理，'concerns itself only with network connectivity of containers'。",
            "【四大网络问题】K8s 文档明确四个网络挑战：Container-to-container（Pod 内通过 localhost）、Pod-to-Pod（CNI 负责）、Pod-to-Service（kube-proxy）、External-to-Service（Ingress/LoadBalancer）。",
            "【网络模型原则】K8s 文档：'Every application gets its own IP address'——每个 Pod 获得唯一 IP，无需端口协调，开发者不需管理端口分配。集群分配三个不重叠的 IP 范围：Pod IPs、Service IPs、Node IPs。",
            "【插件生态概览】官方 addons 页面列出主要 CNI：Calico（BGP/overlay 双模式、L3-L4 策略）、Cilium（eBPF 数据面、L3-L7 策略、CNCF Graduated）、Flannel（简单 overlay）、Weave Net（partition-tolerant、无外部数据库）。",
            "【CNI 执行机制】CNI 规范：插件通过 JSON 配置和环境变量接收参数，配置文件存放在 /etc/cni/net.d/，'Container runtimes invoke CNI plugins with ADD/DEL commands during container lifecycle events'。"
        ],
        keyDifficulties: [
            "【Overlay vs Native Routing】Overlay（VXLAN）封装流量，兼容性好但有 MTU 和性能开销；Native Routing（BGP）直接路由，性能更好但需要网络基础设施配合。Calico 支持两种模式，Cilium 也支持原生路由。",
            "【eBPF 数据面优势】Cilium 官方：eBPF-based data plane 可绕过 iptables，实现 kube-proxy replacement。支持 L3-L7 network policies 和 identity-based security，性能和可观测性显著优于传统方案。",
            "【数据面技术对比】不同 CNI 使用不同数据面：eBPF（Cilium）、Open vSwitch（Antrea、OVN-Kubernetes）、传统内核路由（Calico BGP 模式）、VXLAN overlay（Flannel）。选型需权衡性能、功能和运维复杂度。",
            "【CNI 插件调用链】CNI 规范：容器运行时（containerd/CRI-O）在 Pod 创建时调用 CNI 插件，插件执行网络接口创建、IP 分配（IPAM）、路由配置。kubelet 不直接调用 CNI，而是通过 CRI 接口间接触发。",
            "【多 CNI 与链式调用】Multus 作为 meta-CNI 支持 Pod 多网卡场景；CNI-Genie 支持多 CNI 插件选择。CNI chaining 允许组合多个插件（如 Calico + bandwidth 限流插件），满足复杂网络需求。"
        ],
        handsOnPath: [
            "使用 kubectl get pods -n kube-system | grep -E 'calico|cilium|flannel|weave' 识别当前 CNI，用 ls /opt/cni/bin/ 查看可用插件二进制，cat /etc/cni/net.d/* 查看网络配置 JSON。",
            "在 minikube 中对比不同 CNI：minikube start --cni=calico 和 minikube start --cni=flannel，观察 Pod 网络配置差异（ip addr、ip route）和 NetworkPolicy 支持情况。",
            "使用 kubectl exec 进入 Pod 执行网络诊断：ip addr（查看 eth0 和 veth 对）、ip route（查看默认网关和 Pod CIDR 路由）、cat /etc/resolv.conf（验证 CoreDNS 配置）。",
            "测试 CNI 故障场景：kubectl delete pod -n kube-system -l k8s-app=calico-node 删除 CNI Pod，观察新 Pod 卡在 ContainerCreating，使用 kubectl describe pod 和 journalctl -u kubelet 定位问题。",
            "比较 NetworkPolicy 支持：在 Flannel 集群创建 NetworkPolicy 观察无效果（Flannel 不实现 NetworkPolicy），在 Calico/Cilium 集群验证策略生效。"
        ],
        selfCheck: [
            "CNI 规范的核心职责是什么？为什么说它'only concerns itself with network connectivity'？",
            "Kubernetes 网络模型解决哪四个网络问题？每个问题分别由什么组件负责？",
            "容器运行时如何调用 CNI 插件？CNI 配置文件存放在哪里？",
            "Overlay 和 Native Routing 模式的核心差异是什么？各自适用于什么场景？",
            "Cilium 的 eBPF 数据面相比传统 iptables 有什么优势？",
            "为什么 Flannel 不支持 NetworkPolicy？如何选择支持 NetworkPolicy 的 CNI？"
        ],
        extensions: [
            "研究 Cilium 的 Hubble 组件，了解如何通过 eBPF 实现网络流量可观测性（hubble observe）和服务依赖图可视化。",
            "探索 Multus CNI 的多网卡场景，了解 NetworkAttachmentDefinition CRD 和 NFV（网络功能虚拟化）在电信场景的应用。",
            "学习 CNI 插件开发规范，了解 ADD/DEL/CHECK 命令接口和 IPAM 插件（host-local、dhcp、whereabouts）的工作原理。",
            "研究 Cilium 的 kube-proxy replacement 模式，了解如何用 eBPF 替代 iptables 实现 Service 负载均衡。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/cluster-administration/networking/",
            "https://kubernetes.io/docs/concepts/cluster-administration/addons/#networking-and-network-policy",
            "https://github.com/containernetworking/cni"
        ]
    },
    "w6-3": {
        lessonId: "w6-3",
        background: [
            "【NetworkPolicy 定义】官方文档：'NetworkPolicies are application-centric constructs that specify rules for traffic flow at the IP address or port level (OSI layer 3-4)'——在 IP/端口级别控制流量，定义 Pod 可以与哪些网络实体通信。",
            "【默认非隔离状态】官方文档：'Pods are non-isolated by default'——Pod 默认允许所有入站和出站连接。一旦被任何 NetworkPolicy 选中并指定 policyTypes，Pod 就变为该方向的隔离状态。",
            "【双向允许要求】官方文档强调：'For a connection to succeed, both the source pod's egress policy AND the destination pod's ingress policy must permit it'——连接需要两端都允许。",
            "【策略叠加机制】官方文档：'NetworkPolicies are additive and non-conflicting'——多个策略选中同一 Pod 时，规则取并集，'order of evaluation does not affect the policy result'——评估顺序不影响结果。",
            "【CNI 插件要求】官方文档警告：'Creating a NetworkPolicy without an implementing controller has no effect'——必须有支持 NetworkPolicy 的网络插件（如 Calico、Cilium、Antrea）才能生效。"
        ],
        keyDifficulties: [
            "【选择器逻辑：AND vs OR】官方文档关键区分：同一 from/to 条目内 namespaceSelector 和 podSelector 是 AND 关系（必须同时满足）；不同数组元素之间是 OR 关系（满足任一即可）——YAML 缩进决定语义。",
            "【空 podSelector 含义】官方文档：空 podSelector: {} 在 spec 中表示选择命名空间内所有 Pod；在 from/to 中表示选择指定命名空间的所有 Pod。理解位置决定含义。",
            "【默认拒绝策略】官方文档模式：创建 podSelector: {} + policyTypes: [Ingress] 但不指定 ingress 规则，实现'默认拒绝所有入站'。需要额外策略允许 DNS（53 端口）和所需流量。",
            "【ipBlock 局限性】官方文档：'ipBlock selects specific IP CIDR ranges (typically cluster-external)'——通常用于集群外部 IP。注意：Pod IP 可能因重调度变化，不适合用 ipBlock 选择 Pod。",
            "【Egress 与 DNS】官方文档常见问题：严格的 Egress 策略可能阻断 DNS 解析（UDP/TCP 53 端口），需要显式允许到 kube-system 命名空间 CoreDNS 的流量。"
        ],
        handsOnPath: [
            "创建默认拒绝所有入站的策略：podSelector: {} + policyTypes: [Ingress] + 不指定 ingress 规则，验证所有 Pod 入站流量被阻断。",
            "创建白名单策略允许特定标签的 Pod 访问：使用 from.podSelector.matchLabels: {access: 'true'}，测试有/无标签 Pod 的访问差异。",
            "实验 AND vs OR 逻辑：创建同一 from 条目内含 namespaceSelector + podSelector（AND），对比分开写的两个条目（OR），观察行为差异。",
            "创建 Egress 策略并确保 DNS 可用：先创建默认拒绝 Egress，然后添加允许访问 kube-system 命名空间 53 端口的规则，验证域名解析。",
            "使用 kubectl run busybox --rm -ti --image=busybox -- wget --timeout=1 <pod-ip> 测试 NetworkPolicy 效果。"
        ],
        selfCheck: [
            "Pod 默认是隔离还是非隔离状态？什么时候 Pod 变为隔离状态？",
            "from 数组中多个选择器是什么逻辑关系？同一选择器内 namespaceSelector 和 podSelector 呢？",
            "如何创建'默认拒绝所有入站流量'的策略？空 podSelector: {} 在 spec 中表示什么？",
            "多个 NetworkPolicy 选中同一个 Pod 时，规则如何合并？是取交集还是并集？",
            "为什么创建 Egress 策略后可能导致 DNS 解析失败？如何解决？",
            "哪些 CNI 插件支持 NetworkPolicy？Flannel 默认支持吗？"
        ],
        extensions: [
            "研究 Cilium 的 CiliumNetworkPolicy，了解 L7（HTTP/gRPC）级别的网络策略能力，实现基于 URL 路径或 HTTP 方法的访问控制。",
            "探索 NetworkPolicy 的局限性：不支持日志、不支持显式拒绝规则、不支持优先级、不保护 Pod 自身流量。",
            "学习 AdminNetworkPolicy 和 BaselineAdminNetworkPolicy（KEP-2091），了解集群级别网络策略的发展方向。",
            "研究 Network Policy Editor（Cilium 提供）等可视化工具，简化复杂策略的设计和验证。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
            "https://kubernetes.io/docs/tasks/administer-cluster/declare-network-policy/"
        ]
    },
    "w6-2": {
        lessonId: "w6-2",
        background: [
            "【污点与容忍定义】官方文档：'Taints are the opposite [of node affinity] -- they allow a node to repel a set of pods'——污点让节点排斥 Pod；'Tolerations are applied to pods. Tolerations allow the scheduler to schedule pods with matching taints'——容忍让 Pod 可调度到有污点的节点。",
            "【三种 effect 类型】官方文档定义：NoSchedule（新 Pod 不会调度，已运行 Pod 不受影响）、PreferNoSchedule（软性偏好，调度器尽量避免但不保证）、NoExecute（阻止调度且驱逐不容忍的已运行 Pod）。",
            "【容忍操作符】官方文档：Equal 要求 key、value、effect 完全匹配（默认）；Exists 只检查 key 和 effect（不比较 value）；v1.35 alpha 支持 Gt/Lt 数值比较。",
            "【PDB 核心价值】官方文档：'A PodDisruptionBudget limits the number of Pods of a replicated application that are down simultaneously from voluntary disruptions'——PDB 限制自愿中断时同时不可用的 Pod 数量。",
            "【自愿 vs 非自愿中断】官方文档区分：非自愿中断（硬件故障、内核崩溃、资源不足驱逐）无法避免；自愿中断（drain 节点、更新 Deployment、缩容）可通过 PDB 保护。"
        ],
        keyDifficulties: [
            "【多污点处理机制】官方文档：'The way Kubernetes processes multiple taints and tolerations is like a filter: start with all of a node's taints, then ignore the ones for which the pod has a matching toleration; the remaining un-ignored taints have the indicated effects'——像过滤器一样处理。",
            "【tolerationSeconds 作用域】官方文档：tolerationSeconds 仅对 NoExecute 生效，指定 Pod 被添加污点后可继续运行的秒数；不设置则永久容忍；设置后到期自动驱逐。",
            "【nodeName 绕过调度器】官方文档警告：'if you manually specify the .spec.nodeName for a Pod, that action bypasses the scheduler'——手动指定 nodeName 会跳过污点检查和调度器。",
            "【PDB 保护边界】官方文档强调：PDB 只保护通过 Eviction API 的驱逐，'do NOT protect against deleting deployments or pods directly'——直接删除 Pod/Deployment 不受 PDB 保护。",
            "【unhealthyPodEvictionPolicy】官方推荐设置 AlwaysAllow：'prevents the drain from waiting indefinitely for unhealthy pods to become healthy'——避免 drain 时因不健康 Pod 无限等待。"
        ],
        handsOnPath: [
            "给节点添加污点（kubectl taint nodes <name> dedicated=gpu:NoSchedule），尝试调度普通 Pod 观察 Pending 状态，然后创建带 toleration 的 Pod 验证成功调度。",
            "测试 NoExecute 效果：在已运行 Pod 的节点上添加 NoExecute 污点，观察 Pod 被驱逐；添加带 tolerationSeconds: 60 的容忍，验证 60 秒后才被驱逐。",
            "使用 Exists operator：配置空 key 的 toleration（operator: Exists, effect 为空）创建'超级容忍'Pod，验证它可以调度到任何有污点的节点。",
            "创建 PDB（minAvailable: 2 或 maxUnavailable: 1），使用 kubectl drain <node> --ignore-daemonsets 测试 PDB 保护效果，观察驱逐是否被阻止。",
            "实验 PDB 与直接删除的区别：对比 kubectl delete pod 和 kubectl drain 的行为，验证 PDB 只保护 Eviction API 触发的驱逐。"
        ],
        selfCheck: [
            "污点的三种 effect（NoSchedule、PreferNoSchedule、NoExecute）各自的行为是什么？已运行的 Pod 会被驱逐吗？",
            "容忍的 Equal 和 Exists 操作符有什么区别？如何配置'容忍所有污点'？",
            "tolerationSeconds 参数的作用是什么？它只对哪种 effect 生效？不设置时的行为是什么？",
            "手动指定 spec.nodeName 时，污点检查会发生什么？为什么说这'bypasses the scheduler'？",
            "PDB 的 minAvailable 和 maxUnavailable 分别控制什么？两者可以同时设置吗？",
            "PDB 能保护 Pod 免受哪些操作的影响？哪些操作不受 PDB 保护？"
        ],
        extensions: [
            "研究 DaemonSet 的默认容忍配置，了解系统守护进程如何保证在所有节点上运行，以及对 not-ready/unreachable 污点的特殊处理。",
            "探索 DisruptionTarget 条件的 reason 字段：PreemptionByScheduler、DeletionByTaintManager、EvictionByEvictionAPI、DeletionByPodGC 各代表什么场景。",
            "学习 kubectl drain 的完整选项：--ignore-daemonsets、--delete-emptydir-data、--force、--grace-period，了解生产环境节点维护流程。",
            "研究集群自动伸缩器（Cluster Autoscaler）如何使用 ToBeDeletedByClusterAutoscaler 污点标记即将下线的节点。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
            "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/"
        ]
    },
    "w6-1": {
        lessonId: "w6-1",
        background: [
            "【nodeSelector 定义】官方文档：'nodeSelector is the simplest recommended form of node selection constraint'——最简单的节点选择方式，Pod spec 中指定标签，Kubernetes 仅在具有所有指定标签的节点上调度。",
            "【亲和性优势】官方文档列出三点：'更强的表达能力（supports more complex selection logic）'、'软约束支持（prefer rules that are not hard requirements）'、'Pod 间约束（constrain a Pod using labels on other Pods）'。",
            "【两种亲和性类型】官方定义：requiredDuringSchedulingIgnoredDuringExecution 是硬约束（'rules must be met for a pod to be scheduled'）；preferredDuringSchedulingIgnoredDuringExecution 是软约束（'scheduler will try to enforce but will not guarantee'）。",
            "【拓扑分布约束目的】官方文档：'control how Pods are distributed across your cluster among failure-domains such as regions, zones, nodes'——防止单点故障、优化延迟、减少跨区流量成本。",
            "【PriorityClass 机制】官方文档：'PriorityClass is a non-namespaced object that maps a priority class name to an integer value'——值范围 -2147483648 到 1000000000，数值越大优先级越高。",
            "【调度框架架构】官方文档：Scheduling Framework 是'pluggable architecture for the Kubernetes scheduler'，包含 13 个扩展点，分为调度周期（选择节点）和绑定周期（应用决策）两个阶段。"
        ],
        keyDifficulties: [
            "【IgnoredDuringExecution 含义】官方文档：'if the node labels change after Kubernetes schedules the Pod, the Pod continues to run'——调度后节点标签变化不会驱逐 Pod。未来可能支持 RequiredDuringExecution 实现运行时驱逐。",
            "【逻辑关系规则】官方文档明确：'nodeSelectorTerms: [term1, term2] → term1 OR term2'；'matchExpressions: [expr1, expr2] → expr1 AND expr2'——多个 term 是 OR 关系，同一 term 内的表达式是 AND 关系。",
            "【maxSkew 参数】官方文档：'degree to which Pods may be unevenly distributed'——定义 Pod 分布的最大不均匀度。配合 whenUnsatisfiable（DoNotSchedule 或 ScheduleAnyway）控制违反约束时的行为。",
            "【抢占机制】官方文档：'scheduler can preempt (evict) lower-priority Pods to make room for the pending Pod'——当高优先级 Pod 无法调度时，调度器驱逐低优先级 Pod 腾出资源。nominatedNodeName 记录被提名的节点。",
            "【非抢占优先级】官方文档 v1.24+：'preemptionPolicy: Never'——Pod 在调度队列中优先但不会抢占其他 Pod，适用于'should be prioritized but shouldn't discard existing work'的场景。"
        ],
        handsOnPath: [
            "给节点添加自定义标签（kubectl label node <name> disktype=ssd），创建使用 nodeSelector: {disktype: ssd} 的 Pod，验证 Pod 只调度到有该标签的节点。",
            "创建使用 nodeAffinity 的 Pod：required 约束 kubernetes.io/os In [linux]，preferred 约束（weight: 50）优先选择带 gpu=true 标签的节点，观察调度结果。",
            "部署 Deployment 配置 podAntiAffinity：topologyKey: kubernetes.io/hostname + labelSelector 匹配自身标签，验证每个副本运行在不同节点。",
            "创建 topologySpreadConstraints：maxSkew: 1 + topologyKey: topology.kubernetes.io/zone + whenUnsatisfiable: DoNotSchedule，验证 Pod 跨可用区均匀分布。",
            "创建 PriorityClass（value: 1000000）并在 Pod 中引用 priorityClassName，验证高优先级 Pod 优先调度；创建 preemptionPolicy: Never 的 PriorityClass 测试非抢占行为。"
        ],
        selfCheck: [
            "nodeSelector 和 nodeAffinity 的区别是什么？nodeAffinity 支持哪六种操作符？",
            "requiredDuringSchedulingIgnoredDuringExecution 中 Ignored 是什么意思？如果节点标签变化会发生什么？",
            "nodeSelectorTerms 数组内多个 term 是什么逻辑关系？matchExpressions 内多个条件呢？",
            "topologySpreadConstraints 的 maxSkew 和 whenUnsatisfiable 各有什么作用？",
            "PriorityClass 的 preemptionPolicy: Never 与默认的抢占行为有什么区别？适用于什么场景？",
            "Kubernetes 内置的两个系统级 PriorityClass 是什么？它们用于什么场景？"
        ],
        extensions: [
            "研究 matchLabelKeys（v1.27 beta）在 topologySpreadConstraints 中的应用，了解如何使用 pod-template-hash 区分 Deployment 版本。",
            "探索 node-restriction.kubernetes.io/ 前缀标签，了解如何防止被破坏的节点绕过调度限制。",
            "学习调度框架的 13 个扩展点（PreFilter、Filter、Score、Reserve、Permit 等），了解如何开发自定义调度插件。",
            "研究 ResourceQuota 与 PriorityClass 的配合使用，了解如何在多租户环境中限制优先级类的使用配额。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/",
            "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
            "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/",
            "https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "w6-4": [
        {
            id: "w6-4-q1",
            question: "CNI 官方对其核心职责的描述是什么？",
            options: [
                "管理容器的全部生命周期",
                "提供容器编排能力",
                "'concerns itself only with network connectivity of containers'——只关注容器网络连接",
                "实现容器存储管理"
            ],
            answer: 2,
            rationale: "CNI 规范明确：'concerns itself only with network connectivity of containers and removing allocated resources when the container is deleted'——专注于网络连接。"
        },
        {
            id: "w6-4-q2",
            question: "Kubernetes 网络模型解决的四个问题中，Pod-to-Pod 通信由谁负责？",
            options: [
                "CNI 插件负责 Pod-to-Pod 通信",
                "kube-proxy 负责",
                "CoreDNS 负责",
                "Ingress Controller 负责"
            ],
            answer: 0,
            rationale: "K8s 文档明确：四大网络问题中，Pod-to-Pod 是 CNI 的核心职责，Pod-to-Service 由 kube-proxy 负责。"
        },
        {
            id: "w6-4-q3",
            question: "K8s 官方 addons 页面对 Cilium 的描述包括什么？",
            options: [
                "简单的 overlay 网络方案",
                "基于 Open vSwitch 的数据面",
                "只支持 L3-L4 网络策略",
                "eBPF-based data plane、L3-L7 network policies、CNCF Graduated"
            ],
            answer: 3,
            rationale: "官方 addons 页面描述 Cilium：'eBPF-based data plane, L3-L7 network policies, identity-based security, kube-proxy replacement, CNCF Graduated project'。"
        },
        {
            id: "w6-4-q4",
            question: "CNI 配置文件通常存放在哪个目录？",
            options: [
                "/var/lib/kubelet/config/",
                "/etc/kubernetes/cni/",
                "/etc/cni/net.d/",
                "/opt/kubernetes/network/"
            ],
            answer: 2,
            rationale: "CNI 规范：配置文件存放在 /etc/cni/net.d/，容器运行时从该目录读取网络配置 JSON 文件。"
        },
        {
            id: "w6-4-q5",
            question: "容器运行时调用 CNI 插件时使用什么命令？",
            options: [
                "CREATE/DELETE",
                "START/STOP",
                "CONNECT/DISCONNECT",
                "ADD/DEL"
            ],
            answer: 3,
            rationale: "CNI 规范：'Container runtimes invoke CNI plugins with ADD/DEL commands during container lifecycle events'——ADD 添加网络、DEL 删除网络。"
        },
        {
            id: "w6-4-q6",
            question: "关于 Flannel，以下哪项描述是正确的？",
            options: [
                "支持 L7 网络策略",
                "使用 eBPF 数据面",
                "官方描述为'Simple overlay network provider'——简单的 overlay 网络方案",
                "原生支持 BGP 路由"
            ],
            answer: 2,
            rationale: "官方 addons 页面描述 Flannel 为'Simple overlay network provider'——它简单易用但不实现 NetworkPolicy。"
        },
        {
            id: "w6-4-q7",
            question: "Overlay 网络模式（如 VXLAN）的主要权衡是什么？",
            options: [
                "兼容性好但有封装开销和 MTU 影响",
                "性能最好但兼容性差",
                "需要 BGP 路由器支持",
                "只能在单节点使用"
            ],
            answer: 0,
            rationale: "Overlay 模式封装流量，对底层网络要求低（兼容性好），但封装/解封装带来性能开销，且 MTU 需要调整。"
        },
        {
            id: "w6-4-q8",
            question: "K8s 文档指出集群需要分配哪些不重叠的 IP 范围？",
            options: [
                "只需要 Pod IPs",
                "Pod IPs 和 Service IPs",
                "Pod IPs、Service IPs、Node IPs",
                "只需要 Node IPs"
            ],
            answer: 2,
            rationale: "K8s 文档明确：'Kubernetes clusters allocate non-overlapping IP addresses for Pods, Services, and Nodes'——三个不重叠的 IP 范围。"
        },
        {
            id: "w6-4-q9",
            question: "CNI 插件由哪个组件调用？",
            options: [
                "kubelet 直接调用",
                "kube-apiserver 调用",
                "容器运行时（containerd/CRI-O）调用",
                "kube-scheduler 调用"
            ],
            answer: 2,
            rationale: "K8s 文档：'The network model is implemented by the container runtime using CNI plugins'——容器运行时调用 CNI 插件，kubelet 通过 CRI 间接触发。"
        },
        {
            id: "w6-4-q10",
            question: "Antrea CNI 使用什么作为数据面？",
            options: [
                "eBPF",
                "iptables",
                "Open vSwitch",
                "VXLAN"
            ],
            answer: 2,
            rationale: "官方 addons 页面描述 Antrea：'Layer 3/4 networking, Open vSwitch data plane, CNCF Sandbox project'——使用 OVS 数据面。"
        },
        {
            id: "w6-4-q11",
            question: "Multus CNI 的主要用途是什么？",
            options: [
                "提高网络性能",
                "支持 Pod 拥有多个网络接口（multi-plugin support）",
                "替代所有其他 CNI",
                "实现网络加密"
            ],
            answer: 1,
            rationale: "官方 addons 页面描述 Multus：'Multi-plugin support for multiple networks per pod'——让 Pod 可以有多个网络接口。"
        },
        {
            id: "w6-4-q12",
            question: "官方文档关于 CNI 插件选型的说明是什么？",
            options: [
                "必须使用 Kubernetes 官方维护的插件",
                "所有插件功能完全相同",
                "The Kubernetes project doesn't maintain these addons——是第三方项目，成熟度各异",
                "只能选择 CNCF 项目"
            ],
            answer: 2,
            rationale: "官方 addons 页面明确：'The Kubernetes project doesn't maintain these addons—they are third-party projects with varying maturity levels'。"
        }
    ],
    "w6-3": [
        {
            id: "w6-3-q1",
            question: "官方文档对 NetworkPolicy 的定义是什么？",
            options: [
                "控制 Pod 调度到特定节点的策略",
                "管理 Pod 资源限制的配置",
                "'application-centric constructs that specify rules for traffic flow at the IP address or port level (OSI layer 3-4)'",
                "定义 Pod 重启行为的策略"
            ],
            answer: 2,
            rationale: "官方文档明确：NetworkPolicies 是'application-centric constructs that specify rules for traffic flow at the IP address or port level (OSI layer 3-4)'——在 IP/端口级别控制流量。"
        },
        {
            id: "w6-3-q2",
            question: "Pod 在没有任何 NetworkPolicy 选中时的默认行为是什么？",
            options: [
                "'Pods are non-isolated by default'——允许所有入站和出站连接",
                "拒绝所有入站流量",
                "只允许同命名空间的流量",
                "只允许出站流量"
            ],
            answer: 0,
            rationale: "官方文档：'Pods are non-isolated by default'——默认非隔离状态，允许所有入站和出站连接。"
        },
        {
            id: "w6-3-q3",
            question: "官方文档对连接成功的要求是什么？",
            options: [
                "只需要源 Pod 的 Egress 策略允许",
                "只需要目标 Pod 的 Ingress 策略允许",
                "不需要任何策略允许",
                "'both the source pod's egress policy AND the destination pod's ingress policy must permit it'"
            ],
            answer: 3,
            rationale: "官方文档强调：'For a connection to succeed, both the source pod's egress policy AND the destination pod's ingress policy must permit it'——两端都需要允许。"
        },
        {
            id: "w6-3-q4",
            question: "from 数组中多个选择器的逻辑关系是什么？",
            options: [
                "AND 关系（必须全部满足）",
                "OR 关系（满足任一即可）",
                "XOR 关系（只能满足一个）",
                "NOT 关系（排除匹配的）"
            ],
            answer: 1,
            rationale: "官方文档：from/to 数组中多个选择器是 OR 关系（additive），满足任意一个选择器的流量即可通过。"
        },
        {
            id: "w6-3-q5",
            question: "同一个选择器内 namespaceSelector 和 podSelector 是什么关系？",
            options: [
                "OR 关系",
                "NOT 关系",
                "AND 关系（必须同时满足命名空间和 Pod 标签）",
                "namespaceSelector 优先"
            ],
            answer: 2,
            rationale: "官方文档：当 namespaceSelector 和 podSelector 在同一个选择器内（无 - 分隔），它们是 AND 关系，必须同时满足。"
        },
        {
            id: "w6-3-q6",
            question: "多个 NetworkPolicy 选中同一个 Pod 时，规则如何处理？",
            options: [
                "后创建的策略覆盖先创建的",
                "规则取交集（必须都允许）",
                "随机选择一个策略生效",
                "'additive and non-conflicting'——规则取并集，任何策略允许的流量都可通过"
            ],
            answer: 3,
            rationale: "官方文档：'NetworkPolicies are additive and non-conflicting'——多个策略的规则是叠加的，取并集。"
        },
        {
            id: "w6-3-q7",
            question: "如何创建'默认拒绝所有入站流量'的策略？",
            options: [
                "设置 ingress: deny",
                "使用 defaultDeny: true",
                "创建 podSelector: {} + policyTypes: [Ingress] 但不指定 ingress 规则",
                "删除所有现有的 NetworkPolicy"
            ],
            answer: 2,
            rationale: "官方文档模式：创建 podSelector: {} + policyTypes: [Ingress] 但 ingress 字段为空，选中所有 Pod 但不允许任何入站流量。"
        },
        {
            id: "w6-3-q8",
            question: "官方文档对 NetworkPolicy 需要 CNI 支持的警告是什么？",
            options: [
                "NetworkPolicy 总是自动生效",
                "'Creating a NetworkPolicy without an implementing controller has no effect'",
                "只有 Flannel 支持 NetworkPolicy",
                "不需要任何网络插件支持"
            ],
            answer: 1,
            rationale: "官方文档警告：'Creating a NetworkPolicy without an implementing controller has no effect'——必须有支持的 CNI 插件才能生效。"
        },
        {
            id: "w6-3-q9",
            question: "官方文档对 ipBlock 用途的描述是什么？",
            options: [
                "主要用于选择集群内部 Pod",
                "'selects specific IP CIDR ranges (typically cluster-external)'——通常用于集群外部 IP",
                "用于定义 Service 的 IP 范围",
                "用于配置节点网络"
            ],
            answer: 1,
            rationale: "官方文档：'ipBlock selects specific IP CIDR ranges (typically cluster-external)'——通常用于集群外部 IP 范围。"
        },
        {
            id: "w6-3-q10",
            question: "创建 Egress 策略后可能导致什么问题？如何解决？",
            options: [
                "Pod 启动变慢，无需特殊处理",
                "DNS 解析失败，需要显式允许 53 端口到 kube-system",
                "Pod 无法调度，需要添加 toleration",
                "存储卷无法挂载，需要配置 CSI 策略"
            ],
            answer: 1,
            rationale: "官方文档常见问题：严格的 Egress 策略可能阻断 DNS 解析（53 端口），需要显式允许到 kube-system 命名空间的 DNS 流量。"
        },
        {
            id: "w6-3-q11",
            question: "以下哪个 CNI 插件默认不支持 NetworkPolicy？",
            options: [
                "Calico",
                "Cilium",
                "Flannel",
                "Antrea"
            ],
            answer: 2,
            rationale: "Flannel 是一个简单的 overlay 网络方案，默认不支持 NetworkPolicy。需要使用 Calico、Cilium、Antrea 等支持 NetworkPolicy 的插件。"
        },
        {
            id: "w6-3-q12",
            question: "官方文档对策略评估顺序的说明是什么？",
            options: [
                "按创建时间顺序评估",
                "按字母顺序评估",
                "按优先级字段评估",
                "'order of evaluation does not affect the policy result'——评估顺序不影响结果"
            ],
            answer: 3,
            rationale: "官方文档：'order of evaluation does not affect the policy result'——因为策略是叠加的（取并集），评估顺序不影响最终结果。"
        }
    ],
    "w6-2": [
        {
            id: "w6-2-q1",
            question: "官方文档对污点（Taint）的定义是什么？",
            options: [
                "吸引 Pod 到特定节点的机制",
                "限制 Pod 资源使用的配置",
                "'allow a node to repel a set of pods'——让节点排斥一组 Pod",
                "控制 Pod 网络访问的策略"
            ],
            answer: 2,
            rationale: "官方文档明确：'Taints are the opposite [of node affinity] -- they allow a node to repel a set of pods'——污点与亲和性相反，用于排斥 Pod。"
        },
        {
            id: "w6-2-q2",
            question: "NoSchedule 和 NoExecute 两种 effect 的关键区别是什么？",
            options: [
                "NoExecute 不仅阻止新 Pod 调度，还会驱逐不能容忍的已运行 Pod",
                "NoSchedule 会驱逐 Pod，NoExecute 不会",
                "两者完全相同",
                "NoSchedule 是软约束，NoExecute 是硬约束"
            ],
            answer: 0,
            rationale: "官方文档：NoSchedule 只阻止新 Pod 调度，不影响已运行的 Pod；NoExecute 会驱逐不能容忍该污点的已运行 Pod。"
        },
        {
            id: "w6-2-q3",
            question: "PreferNoSchedule effect 的行为是什么？",
            options: [
                "严格禁止所有 Pod 调度",
                "立即驱逐所有 Pod",
                "完全忽略该污点",
                "软性偏好，调度器尽量避免但不保证"
            ],
            answer: 3,
            rationale: "官方文档：PreferNoSchedule 是软约束，'Soft preference - scheduler tries to avoid the node but doesn't guarantee it'。"
        },
        {
            id: "w6-2-q4",
            question: "tolerationSeconds 参数对哪种 effect 生效？",
            options: [
                "NoSchedule",
                "PreferNoSchedule",
                "所有 effect",
                "仅 NoExecute"
            ],
            answer: 3,
            rationale: "官方文档：tolerationSeconds 仅对 NoExecute 生效，指定 Pod 被添加污点后可继续运行的秒数。"
        },
        {
            id: "w6-2-q5",
            question: "官方文档如何描述多污点的处理机制？",
            options: [
                "随机选择一个污点生效",
                "'like a filter'——从节点所有污点开始，忽略有匹配容忍的，剩余污点生效",
                "只有第一个污点生效",
                "所有污点必须同时匹配"
            ],
            answer: 1,
            rationale: "官方文档：'The way Kubernetes processes multiple taints and tolerations is like a filter: start with all of a node's taints, then ignore the ones for which the pod has a matching toleration'。"
        },
        {
            id: "w6-2-q6",
            question: "如何配置一个容忍所有污点的 toleration？",
            options: [
                "设置 tolerateAll: true",
                "配置 operator: Any",
                "配置空 key 且 operator: Exists（不指定 effect）",
                "不需要配置任何 toleration"
            ],
            answer: 2,
            rationale: "官方文档：空 key 配合 Exists operator 会匹配所有键；不指定 effect 会匹配所有 effect，从而容忍所有污点。"
        },
        {
            id: "w6-2-q7",
            question: "当手动指定 spec.nodeName 时，污点检查的行为是什么？",
            options: [
                "'bypasses the scheduler'——跳过调度器和污点检查",
                "仍然检查污点",
                "只检查 NoExecute 污点",
                "报错，不允许指定 nodeName"
            ],
            answer: 0,
            rationale: "官方文档警告：'if you manually specify the .spec.nodeName for a Pod, that action bypasses the scheduler'——绕过调度器。"
        },
        {
            id: "w6-2-q8",
            question: "PodDisruptionBudget (PDB) 的作用是什么？",
            options: [
                "限制 Pod 的 CPU 和内存使用",
                "控制 Pod 的网络带宽",
                "限制自愿中断时同时不可用的 Pod 数量",
                "定义 Pod 的重启策略"
            ],
            answer: 2,
            rationale: "官方文档：'A PodDisruptionBudget limits the number of Pods of a replicated application that are down simultaneously from voluntary disruptions'。"
        },
        {
            id: "w6-2-q9",
            question: "以下哪种操作不受 PDB 保护？",
            options: [
                "kubectl drain 节点",
                "通过 Eviction API 驱逐 Pod",
                "直接使用 kubectl delete pod 删除",
                "集群管理员缩容节点"
            ],
            answer: 2,
            rationale: "官方文档强调：PDB 'do NOT protect against deleting deployments or pods directly'——只保护通过 Eviction API 的驱逐。"
        },
        {
            id: "w6-2-q10",
            question: "官方文档对自愿中断（voluntary disruptions）的定义包括哪些？",
            options: [
                "硬件故障和内核崩溃",
                "drain 节点、更新 Deployment、缩容集群",
                "资源不足导致的驱逐",
                "网络分区"
            ],
            answer: 1,
            rationale: "官方文档区分：自愿中断由管理员或应用所有者发起，包括 drain 节点、更新 Deployment、缩容等；非自愿中断如硬件故障无法避免。"
        },
        {
            id: "w6-2-q11",
            question: "PDB 的 unhealthyPodEvictionPolicy: AlwaysAllow 有什么作用？",
            options: [
                "允许所有 Pod 被驱逐",
                "禁止驱逐不健康的 Pod",
                "避免 drain 时因不健康 Pod 无限等待",
                "自动修复不健康的 Pod"
            ],
            answer: 2,
            rationale: "官方推荐：设置 AlwaysAllow 可以'prevents the drain from waiting indefinitely for unhealthy pods to become healthy'。"
        },
        {
            id: "w6-2-q12",
            question: "Equal 和 Exists 两种容忍操作符的区别是什么？",
            options: [
                "Equal 检查 key 是否存在，Exists 检查值是否匹配",
                "两者完全相同",
                "Equal 用于 NoSchedule，Exists 用于 NoExecute",
                "Equal 要求 key、value、effect 完全匹配；Exists 只检查 key 和 effect"
            ],
            answer: 3,
            rationale: "官方文档：Equal 要求 key、value、effect 完全匹配；Exists 只检查 key 和 effect 是否匹配，不比较 value。"
        }
    ],
    "w6-1": [
        {
            id: "w6-1-q1",
            question: "官方文档对 nodeSelector 的描述是什么？",
            options: [
                "'the simplest recommended form of node selection constraint'——最简单的推荐节点选择方式",
                "最强大的节点选择方式",
                "已废弃的节点选择方式",
                "仅用于测试环境的功能"
            ],
            answer: 0,
            rationale: "官方文档明确指出 nodeSelector 是'the simplest recommended form of node selection constraint'——最简单的推荐节点选择约束方式。"
        },
        {
            id: "w6-1-q2",
            question: "nodeAffinity 相比 nodeSelector 的优势不包括以下哪项？",
            options: [
                "更强的表达能力",
                "软约束支持",
                "Pod 间约束",
                "自动创建节点标签"
            ],
            answer: 3,
            rationale: "官方文档列出三点优势：更强的表达能力、软约束支持、Pod 间约束。nodeAffinity 不会自动创建节点标签。"
        },
        {
            id: "w6-1-q3",
            question: "IgnoredDuringExecution 在亲和性规则名称中的含义是什么？",
            options: [
                "调度时忽略该规则",
                "运行时强制执行该规则",
                "'if the node labels change after scheduling, the Pod continues to run'——调度后标签变化不驱逐 Pod",
                "Pod 启动后忽略所有约束"
            ],
            answer: 2,
            rationale: "官方文档：'if the node labels change after Kubernetes schedules the Pod, the Pod continues to run'——调度后节点标签变化不会导致 Pod 被驱逐。"
        },
        {
            id: "w6-1-q4",
            question: "官方文档描述的 nodeSelectorTerms 与 matchExpressions 的逻辑关系是什么？",
            options: [
                "nodeSelectorTerms 是 AND，matchExpressions 是 OR",
                "两者都是 AND 关系",
                "两者都是 OR 关系",
                "nodeSelectorTerms 是 OR，matchExpressions 是 AND"
            ],
            answer: 3,
            rationale: "官方文档明确：'nodeSelectorTerms: [term1, term2] → term1 OR term2'；'matchExpressions: [expr1, expr2] → expr1 AND expr2'。"
        },
        {
            id: "w6-1-q5",
            question: "nodeAffinity 支持的六种操作符是什么？",
            options: [
                "Equal, NotEqual, Match, NotMatch, Has, HasNot",
                "In, NotIn, Exists, DoesNotExist, Gt, Lt",
                "Contains, StartsWith, EndsWith, Regex, Equals, NotEquals",
                "=, !=, >, <, >=, <="
            ],
            answer: 1,
            rationale: "官方文档列出六种操作符：In（值在列表中）、NotIn、Exists（键存在）、DoesNotExist、Gt（大于）、Lt（小于）。"
        },
        {
            id: "w6-1-q6",
            question: "topologySpreadConstraints 的 maxSkew 参数的官方定义是什么？",
            options: [
                "最大 Pod 数量",
                "最大节点数量",
                "'degree to which Pods may be unevenly distributed'——Pod 分布的最大不均匀度",
                "最大重试次数"
            ],
            answer: 2,
            rationale: "官方文档定义 maxSkew 为'degree to which Pods may be unevenly distributed'——定义 Pod 分布允许的最大不均匀度。"
        },
        {
            id: "w6-1-q7",
            question: "whenUnsatisfiable 的两个有效值是什么？",
            options: [
                "Allow 和 Deny",
                "DoNotSchedule 和 ScheduleAnyway",
                "Required 和 Preferred",
                "Hard 和 Soft"
            ],
            answer: 1,
            rationale: "官方文档：whenUnsatisfiable 可设为 DoNotSchedule（默认，不调度 Pod）或 ScheduleAnyway（仍调度但最小化偏差）。"
        },
        {
            id: "w6-1-q8",
            question: "官方文档对 PriorityClass 的定义是什么？",
            options: [
                "一种命名空间级别的资源配额",
                "'a non-namespaced object that maps a priority class name to an integer value'",
                "Pod 的标签选择器",
                "节点的污点配置"
            ],
            answer: 1,
            rationale: "官方文档：'PriorityClass is a non-namespaced object that maps a priority class name to an integer value'——非命名空间对象，映射优先级名称到整数值。"
        },
        {
            id: "w6-1-q9",
            question: "抢占（Preemption）机制的官方描述是什么？",
            options: [
                "自动扩展集群节点",
                "自动重启失败的 Pod",
                "'scheduler can preempt (evict) lower-priority Pods to make room for the pending Pod'",
                "自动删除长时间运行的 Pod"
            ],
            answer: 2,
            rationale: "官方文档：'scheduler can preempt (evict) lower-priority Pods to make room for the pending Pod'——驱逐低优先级 Pod 为高优先级 Pod 腾出资源。"
        },
        {
            id: "w6-1-q10",
            question: "preemptionPolicy: Never 的作用是什么？",
            options: [
                "Pod 完全不参与调度",
                "Pod 在队列中优先但不会抢占其他 Pod",
                "Pod 可以被任何其他 Pod 抢占",
                "Pod 立即被调度，跳过队列"
            ],
            answer: 1,
            rationale: "官方文档 v1.24+：preemptionPolicy: Never 的 Pod 在调度队列中优先但'cannot preempt other Pods'——不会驱逐其他 Pod。"
        },
        {
            id: "w6-1-q11",
            question: "Kubernetes 内置的两个系统级 PriorityClass 是什么？",
            options: [
                "high-priority 和 low-priority",
                "critical 和 non-critical",
                "system-cluster-critical 和 system-node-critical",
                "guaranteed 和 burstable"
            ],
            answer: 2,
            rationale: "官方文档：Kubernetes 提供两个内置 PriorityClass——system-cluster-critical 和 system-node-critical，用于关键系统组件。"
        },
        {
            id: "w6-1-q12",
            question: "官方文档对 Scheduling Framework 的描述是什么？",
            options: [
                "一个独立的调度器替代品",
                "仅用于测试的调度模拟器",
                "'pluggable architecture for the Kubernetes scheduler'——可插拔的调度器架构",
                "用于监控调度性能的工具"
            ],
            answer: 2,
            rationale: "官方文档：Scheduling Framework 是'pluggable architecture for the Kubernetes scheduler'，包含 13 个扩展点，允许通过插件自定义调度逻辑。"
        }
    ]
}
