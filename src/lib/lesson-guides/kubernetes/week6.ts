import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "w6-2": {
        lessonId: "w6-2",
        background: [
            "污点（Taint）和容忍（Toleration）是 Kubernetes 调度机制的重要组成部分，与节点亲和性相反：亲和性是吸引 Pod，污点是排斥 Pod。污点应用于节点，容忍配置在 Pod 上。",
            "污点的 effect 决定排斥行为：NoSchedule（硬性阻止新 Pod 调度）、PreferNoSchedule（软性偏好，尽量避免）、NoExecute（阻止调度且驱逐已运行的 Pod）。",
            "Kubernetes 在特定情况下自动添加内置污点：node.kubernetes.io/not-ready（节点未就绪）、node.kubernetes.io/unreachable（节点不可达）、node.kubernetes.io/memory-pressure（内存压力）等。",
            "容忍通过 operator 匹配污点：Equal（键、值、effect 完全匹配）、Exists（只检查键是否存在）。tolerationSeconds 指定 NoExecute 污点下 Pod 的驱逐延迟时间。"
        ],
        keyDifficulties: [
            "effect 类型选择：NoSchedule 用于严格隔离（如专用节点）；PreferNoSchedule 用于弹性调度（资源紧张时仍可调度）；NoExecute 用于主动驱逐场景（如节点维护、故障处理）。",
            "多污点处理逻辑：节点可以有多个污点，Pod 必须容忍所有污点才能调度。处理顺序：移除 Pod 能容忍的污点 → 检查剩余污点 → 任一 NoSchedule 剩余则拒绝调度。",
            "内置污点与自动驱逐：节点故障时 node-controller 自动添加 not-ready/unreachable 污点（默认 tolerationSeconds=300）。DaemonSet Pod 默认容忍这些污点，不会被驱逐。",
            "tolerationSeconds 的作用：仅对 NoExecute 生效，指定 Pod 在被驱逐前可以继续运行的秒数。不设置则永久容忍，设置为 0 则立即驱逐。"
        ],
        handsOnPath: [
            "给节点添加污点（kubectl taint nodes <name> dedicated=gpu:NoSchedule），尝试调度普通 Pod 观察 Pending 状态，然后创建带 toleration 的 Pod 验证成功调度。",
            "测试 NoExecute 效果：在已运行 Pod 的节点上添加 NoExecute 污点，观察 Pod 被驱逐；添加带 tolerationSeconds 的容忍，验证延迟驱逐行为。",
            "使用 Exists operator：配置空 key 的 toleration（operator: Exists）创建'超级容忍'Pod，验证它可以调度到任何有污点的节点。",
            "实验内置污点：使用 kubectl cordon <node> 标记节点不可调度，查看自动添加的 node.kubernetes.io/unschedulable 污点，观察现有 Pod 和新 Pod 的行为差异。"
        ],
        selfCheck: [
            "污点的三种 effect（NoSchedule、PreferNoSchedule、NoExecute）各自的行为是什么？",
            "容忍的 Equal 和 Exists 操作符有什么区别？如何配置'容忍所有污点'？",
            "tolerationSeconds 参数的作用是什么？它只对哪种 effect 生效？",
            "Kubernetes 在什么情况下会自动给节点添加污点？DaemonSet 如何处理这些污点？",
            "污点与节点亲和性的配合使用场景是什么？如何实现'专用节点'？"
        ],
        extensions: [
            "研究 DaemonSet 的默认容忍配置，了解系统守护进程如何保证在所有节点上运行。",
            "探索基于污点的节点维护流程：drain vs cordon vs taint，了解优雅驱逐和服务迁移策略。",
            "学习 PodDisruptionBudget（PDB）与污点驱逐的交互，了解如何保护应用可用性。",
            "研究集群自动伸缩器（Cluster Autoscaler）如何使用污点标记即将下线的节点。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
            "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/"
        ]
    },
    "w6-1": {
        lessonId: "w6-1",
        background: [
            "Kubernetes 提供多种机制控制 Pod 调度到特定节点：nodeSelector（简单标签匹配）、nodeAffinity（表达式丰富的节点亲和）、Pod Affinity/Anti-Affinity（Pod 间亲和/反亲和）。",
            "nodeSelector 是最简单的节点选择方式，要求节点标签完全匹配。nodeAffinity 更强大，支持逻辑运算符（In、NotIn、Exists、DoesNotExist、Gt、Lt）和软/硬约束。",
            "亲和性规则分为两类：requiredDuringSchedulingIgnoredDuringExecution（硬约束，必须满足）和 preferredDuringSchedulingIgnoredDuringExecution（软约束，尽量满足）。后缀 IgnoredDuringExecution 表示运行中的 Pod 不会因规则变化被驱逐。",
            "Pod Affinity 将 Pod 调度到同一拓扑域（如同一节点、同一可用区），Pod Anti-Affinity 将 Pod 分散到不同拓扑域。topologyKey 定义拓扑域的粒度。"
        ],
        keyDifficulties: [
            "topologyKey 的理解：它指定节点标签键来划分拓扑域。常用值：kubernetes.io/hostname（节点级别）、topology.kubernetes.io/zone（可用区级别）、topology.kubernetes.io/region（区域级别）。",
            "required vs preferred 的选择：required 是硬约束，不满足则 Pod 无法调度，可能导致 Pending；preferred 是软约束，有权重评分机制（1-100），尽量满足但不阻止调度。",
            "Pod Anti-Affinity 的性能影响：需要检查集群中所有 Pod 的标签，在大规模集群中可能影响调度性能。建议限制 namespace 范围（namespaceSelector）或使用较小的 topologyKey 范围。",
            "matchExpressions 的逻辑：同一 matchExpressions 数组内的条件是 AND 关系；nodeSelectorTerms 数组内的多个 term 是 OR 关系。理解这个逻辑对构建复杂规则很重要。"
        ],
        handsOnPath: [
            "给节点添加自定义标签（kubectl label node <name> disktype=ssd），然后创建使用 nodeSelector 的 Pod，验证 Pod 只调度到有该标签的节点。",
            "创建使用 nodeAffinity 的 Pod，配置 required 约束必须运行在 Linux 节点，preferred 约束优先选择带有 gpu=true 标签的节点，观察调度结果。",
            "部署一个 3 副本的 Deployment，配置 podAntiAffinity 使用 kubernetes.io/hostname 作为 topologyKey，验证每个 Pod 运行在不同节点上。",
            "使用 Pod Affinity 将缓存服务与 Web 服务调度到同一可用区，使用 topology.kubernetes.io/zone 作为 topologyKey，验证跨可用区的 Pod 分布。"
        ],
        selfCheck: [
            "nodeSelector 和 nodeAffinity 的区别是什么？什么情况下应该使用 nodeAffinity？",
            "requiredDuringSchedulingIgnoredDuringExecution 和 preferredDuringSchedulingIgnoredDuringExecution 的区别是什么？",
            "topologyKey 的作用是什么？常用的 topologyKey 值有哪些？",
            "如何使用 Pod Anti-Affinity 确保 Deployment 的副本分散在不同节点？",
            "preferred 亲和性的 weight 参数如何影响调度决策？"
        ],
        extensions: [
            "研究 Pod Topology Spread Constraints，了解如何更精细地控制 Pod 在拓扑域间的分布均匀度。",
            "探索 nodeAffinity 的 requiredDuringSchedulingRequiredDuringExecution（计划中的特性），了解未来可能支持的运行时驱逐功能。",
            "学习使用 node-restriction.kubernetes.io/ 前缀的标签限制 kubelet 可设置的标签，防止节点伪造身份。",
            "研究调度器扩展点和调度插件，了解如何自定义调度逻辑实现更复杂的亲和性规则。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/",
            "https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes-using-node-affinity/",
            "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "w6-2": [
        {
            id: "w6-2-q1",
            question: "污点（Taint）和容忍（Toleration）的关系是什么？",
            options: [
                "两者功能相同",
                "污点应用于节点排斥 Pod，容忍配置在 Pod 上允许调度到有污点的节点",
                "污点应用于 Pod，容忍配置在节点上",
                "污点和容忍都用于吸引 Pod"
            ],
            answer: 1,
            rationale: "污点（Taint）施加在节点上，用于排斥 Pod；容忍（Toleration）配置在 Pod 上，允许 Pod 被调度到有相应污点的节点。"
        },
        {
            id: "w6-2-q2",
            question: "NoSchedule effect 的行为是什么？",
            options: [
                "驱逐节点上所有现有 Pod",
                "阻止新 Pod 调度到该节点，但不影响已运行的 Pod",
                "尽量避免调度，但不强制",
                "立即删除节点"
            ],
            answer: 1,
            rationale: "NoSchedule 是硬性约束，新的 Pod 如果不能容忍该污点则无法调度到此节点，但已经在节点上运行的 Pod 不受影响。"
        },
        {
            id: "w6-2-q3",
            question: "NoExecute effect 与 NoSchedule 的主要区别是什么？",
            options: [
                "NoExecute 只影响新 Pod",
                "NoExecute 不仅阻止新 Pod 调度，还会驱逐不能容忍该污点的已运行 Pod",
                "NoExecute 是软约束",
                "两者完全相同"
            ],
            answer: 1,
            rationale: "NoExecute 会驱逐节点上不能容忍该污点的 Pod，而 NoSchedule 只影响新 Pod 的调度，不驱逐已运行的 Pod。"
        },
        {
            id: "w6-2-q4",
            question: "PreferNoSchedule effect 的行为是什么？",
            options: [
                "严格禁止调度",
                "尽量避免调度，但如果没有其他选择仍可调度",
                "立即驱逐 Pod",
                "完全忽略该污点"
            ],
            answer: 1,
            rationale: "PreferNoSchedule 是软约束，调度器会尽量避免将 Pod 调度到该节点，但在资源紧张时仍然可以调度。"
        },
        {
            id: "w6-2-q5",
            question: "如何给节点添加污点？",
            options: [
                "kubectl label node <name> key=value:NoSchedule",
                "kubectl taint nodes <name> key=value:NoSchedule",
                "kubectl annotate node <name> key=value:NoSchedule",
                "kubectl mark node <name> key=value:NoSchedule"
            ],
            answer: 1,
            rationale: "使用 kubectl taint nodes <node-name> key=value:effect 命令给节点添加污点。"
        },
        {
            id: "w6-2-q6",
            question: "如何移除节点上的污点？",
            options: [
                "kubectl taint nodes <name> key=value:NoSchedule --remove",
                "kubectl taint nodes <name> key=value:NoSchedule-",
                "kubectl untaint nodes <name> key=value:NoSchedule",
                "kubectl delete taint <name> key=value:NoSchedule"
            ],
            answer: 1,
            rationale: "在污点末尾加上减号（-）即可移除污点：kubectl taint nodes <name> key=value:effect-"
        },
        {
            id: "w6-2-q7",
            question: "容忍的 operator: Equal 和 operator: Exists 有什么区别？",
            options: [
                "Equal 检查键是否存在，Exists 检查值是否匹配",
                "Equal 要求键和值都匹配，Exists 只检查键是否存在（忽略值）",
                "两者完全相同",
                "Equal 用于 NoSchedule，Exists 用于 NoExecute"
            ],
            answer: 1,
            rationale: "Equal 要求 key 和 value 都完全匹配；Exists 只检查 key 是否存在，不关心 value 是什么。"
        },
        {
            id: "w6-2-q8",
            question: "tolerationSeconds 参数的作用是什么？",
            options: [
                "设置容忍的超时时间，对所有 effect 生效",
                "仅对 NoExecute 生效，指定 Pod 被驱逐前可以继续运行的秒数",
                "设置 Pod 的启动超时",
                "设置调度的等待时间"
            ],
            answer: 1,
            rationale: "tolerationSeconds 仅对 NoExecute effect 生效，指定 Pod 在被添加该污点后可以继续运行多少秒后再被驱逐。"
        },
        {
            id: "w6-2-q9",
            question: "如何配置一个容忍所有污点的 Pod？",
            options: [
                "不配置任何 toleration",
                "配置 key 为空且 operator: Exists 的 toleration",
                "配置 effect: All",
                "设置 spec.tolerateAll: true"
            ],
            answer: 1,
            rationale: "配置空 key 且 operator: Exists 的 toleration 会匹配所有污点的键，再配合空 effect 可以容忍所有污点。"
        },
        {
            id: "w6-2-q10",
            question: "Kubernetes 在什么情况下会自动给节点添加 node.kubernetes.io/not-ready 污点？",
            options: [
                "节点 CPU 使用率过高",
                "节点的 Ready 条件为 False（节点未就绪）",
                "节点上没有运行任何 Pod",
                "节点被手动标记为不可调度"
            ],
            answer: 1,
            rationale: "当节点的 Ready 条件变为 False（如 kubelet 停止响应）时，node-controller 会自动添加 not-ready 污点。"
        },
        {
            id: "w6-2-q11",
            question: "DaemonSet Pod 对内置污点的默认行为是什么？",
            options: [
                "不容忍任何内置污点",
                "默认容忍 node.kubernetes.io/not-ready 等内置污点，不会被驱逐",
                "只容忍 NoSchedule 污点",
                "需要手动配置容忍"
            ],
            answer: 1,
            rationale: "DaemonSet Pod 默认配置了对 not-ready、unreachable 等内置污点的容忍，确保系统守护进程在节点故障时不会被驱逐。"
        },
        {
            id: "w6-2-q12",
            question: "一个节点有多个污点时，Pod 需要满足什么条件才能调度？",
            options: [
                "容忍任意一个污点即可",
                "必须容忍所有污点",
                "只需要容忍 NoSchedule 类型的污点",
                "不需要容忍任何污点"
            ],
            answer: 1,
            rationale: "节点的所有污点都会被检查，Pod 必须容忍全部污点才能被调度到该节点。"
        },
        {
            id: "w6-2-q13",
            question: "kubectl cordon <node> 命令会添加什么污点？",
            options: [
                "node.kubernetes.io/not-ready:NoSchedule",
                "node.kubernetes.io/unschedulable:NoSchedule",
                "node.kubernetes.io/disk-pressure:NoSchedule",
                "node.kubernetes.io/memory-pressure:NoSchedule"
            ],
            answer: 1,
            rationale: "kubectl cordon 将节点标记为不可调度，会添加 node.kubernetes.io/unschedulable:NoSchedule 污点。"
        },
        {
            id: "w6-2-q14",
            question: "污点与节点亲和性如何配合实现'专用节点'？",
            options: [
                "只使用污点就足够了",
                "污点阻止普通 Pod 调度，节点亲和性确保特定 Pod 只调度到该节点",
                "只使用节点亲和性就足够了",
                "两者不能一起使用"
            ],
            answer: 1,
            rationale: "专用节点需要双向控制：污点阻止普通 Pod 调度到专用节点，节点亲和性（或 nodeSelector）确保特定 Pod 只调度到专用节点。"
        },
        {
            id: "w6-2-q15",
            question: "当手动指定 spec.nodeName 时，污点检查的行为是什么？",
            options: [
                "仍然检查污点",
                "跳过污点检查，直接调度到指定节点",
                "只检查 NoExecute 污点",
                "报错，不允许指定 nodeName"
            ],
            answer: 1,
            rationale: "手动指定 spec.nodeName 会绕过调度器，跳过污点检查直接将 Pod 绑定到指定节点。"
        }
    ],
    "w6-1": [
        {
            id: "w6-1-q1",
            question: "nodeSelector 和 nodeAffinity 的主要区别是什么？",
            options: [
                "nodeSelector 性能更好",
                "nodeAffinity 支持逻辑运算符和软约束，nodeSelector 只支持精确匹配",
                "nodeSelector 可以跨命名空间使用",
                "nodeAffinity 只支持硬约束"
            ],
            answer: 1,
            rationale: "nodeAffinity 比 nodeSelector 更强大，支持 In、NotIn、Exists 等运算符，以及 preferred 软约束；nodeSelector 只支持精确的标签匹配。"
        },
        {
            id: "w6-1-q2",
            question: "requiredDuringSchedulingIgnoredDuringExecution 的含义是什么？",
            options: [
                "软约束，尽量满足",
                "硬约束，调度时必须满足，运行时规则变化不会驱逐 Pod",
                "只在调度时检查，运行时强制执行",
                "可以忽略的约束"
            ],
            answer: 1,
            rationale: "required 表示硬约束，调度时必须满足；IgnoredDuringExecution 表示 Pod 运行后如果节点标签变化不满足规则，不会驱逐 Pod。"
        },
        {
            id: "w6-1-q3",
            question: "topologyKey 在 Pod Affinity 中的作用是什么？",
            options: [
                "指定 Pod 的名称前缀",
                "定义拓扑域的粒度（如节点、可用区、区域）",
                "设置 Pod 的优先级",
                "配置网络拓扑"
            ],
            answer: 1,
            rationale: "topologyKey 指定一个节点标签键来划分拓扑域。相同标签值的节点属于同一拓扑域，Pod Affinity 在这个范围内生效。"
        },
        {
            id: "w6-1-q4",
            question: "kubernetes.io/hostname 作为 topologyKey 表示什么？",
            options: [
                "可用区级别的拓扑域",
                "单个节点作为一个拓扑域",
                "整个集群作为一个拓扑域",
                "按操作系统划分的拓扑域"
            ],
            answer: 1,
            rationale: "kubernetes.io/hostname 以单个节点为拓扑域。使用这个 topologyKey 的 Pod Anti-Affinity 会确保 Pod 分散到不同节点。"
        },
        {
            id: "w6-1-q5",
            question: "preferred 亲和性的 weight 参数（1-100）有什么作用？",
            options: [
                "定义约束的执行顺序",
                "影响调度评分，权重高的偏好对调度决策影响更大",
                "限制 Pod 的数量",
                "设置超时时间"
            ],
            answer: 1,
            rationale: "weight 参数（1-100）用于多个 preferred 规则时计算综合评分。权重越高，对节点评分的影响越大，调度器更倾向选择高分节点。"
        },
        {
            id: "w6-1-q6",
            question: "如何使用 Pod Anti-Affinity 确保 Deployment 副本分散在不同节点？",
            options: [
                "使用 nodeSelector 指定不同节点",
                "配置 podAntiAffinity 使用 kubernetes.io/hostname 作为 topologyKey",
                "设置 replicas 为 1",
                "使用 nodeName 直接指定"
            ],
            answer: 1,
            rationale: "配置 podAntiAffinity，使用 kubernetes.io/hostname 作为 topologyKey，并匹配自身的标签，可以确保每个副本运行在不同节点。"
        },
        {
            id: "w6-1-q7",
            question: "matchExpressions 数组内多个条件的逻辑关系是什么？",
            options: [
                "OR 关系",
                "AND 关系",
                "XOR 关系",
                "NOT 关系"
            ],
            answer: 1,
            rationale: "同一个 matchExpressions 数组内的多个条件是 AND 关系，必须全部满足。nodeSelectorTerms 数组内的多个 term 是 OR 关系。"
        },
        {
            id: "w6-1-q8",
            question: "nodeAffinity 支持哪些运算符？",
            options: [
                "只支持 Equals",
                "In、NotIn、Exists、DoesNotExist、Gt、Lt",
                "只支持 In 和 NotIn",
                "=、!=、>、<"
            ],
            answer: 1,
            rationale: "nodeAffinity 支持 In（值在列表中）、NotIn、Exists（键存在）、DoesNotExist、Gt（大于）、Lt（小于）等运算符。"
        },
        {
            id: "w6-1-q9",
            question: "Pod Affinity 的主要用途是什么？",
            options: [
                "将 Pod 分散到不同节点",
                "将相关的 Pod 调度到同一拓扑域以减少网络延迟",
                "限制 Pod 的资源使用",
                "配置 Pod 的网络策略"
            ],
            answer: 1,
            rationale: "Pod Affinity 用于将相关的 Pod 调度到同一拓扑域（如同一节点或同一可用区），常用于减少通信密集型服务之间的网络延迟。"
        },
        {
            id: "w6-1-q10",
            question: "Pod Anti-Affinity 在大规模集群中可能有什么问题？",
            options: [
                "不支持大规模集群",
                "需要检查所有 Pod 的标签，可能影响调度性能",
                "会导致 Pod 被驱逐",
                "不支持软约束"
            ],
            answer: 1,
            rationale: "Pod Anti-Affinity 需要在调度时检查集群中所有匹配的 Pod，在大规模集群中可能影响性能。建议使用 namespaceSelector 限制范围。"
        },
        {
            id: "w6-1-q11",
            question: "topology.kubernetes.io/zone 作为 topologyKey 适用于什么场景？",
            options: [
                "将 Pod 限制在单个节点",
                "将 Pod 分布在不同的可用区以提高可用性",
                "将所有 Pod 调度到同一台物理机",
                "根据操作系统类型调度"
            ],
            answer: 1,
            rationale: "topology.kubernetes.io/zone 以可用区为拓扑域单位。使用它可以实现跨可用区的 Pod 分布，提高应用的可用性和容灾能力。"
        },
        {
            id: "w6-1-q12",
            question: "如果 required nodeAffinity 无法满足会发生什么？",
            options: [
                "Pod 自动调度到任意节点",
                "Pod 保持 Pending 状态，无法调度",
                "Pod 被标记为 Failed",
                "调度器自动创建满足条件的节点"
            ],
            answer: 1,
            rationale: "required 是硬约束，如果没有节点满足条件，Pod 将保持 Pending 状态，直到有满足条件的节点可用或约束被修改。"
        },
        {
            id: "w6-1-q13",
            question: "namespaceSelector 在 Pod Affinity 中的作用是什么？",
            options: [
                "选择 Pod 运行的命名空间",
                "限制在哪些命名空间中搜索匹配的 Pod",
                "配置命名空间的资源配额",
                "设置命名空间的网络策略"
            ],
            answer: 1,
            rationale: "namespaceSelector 限制 Pod Affinity/Anti-Affinity 在哪些命名空间中搜索匹配的 Pod，可以减少搜索范围，提高调度性能。"
        },
        {
            id: "w6-1-q14",
            question: "nodeSelectorTerms 数组中多个 term 的逻辑关系是什么？",
            options: [
                "AND 关系",
                "OR 关系",
                "NOT 关系",
                "XOR 关系"
            ],
            answer: 1,
            rationale: "nodeSelectorTerms 数组中的多个 term 是 OR 关系，满足任意一个 term 即可。而每个 term 内的 matchExpressions 是 AND 关系。"
        },
        {
            id: "w6-1-q15",
            question: "Exists 运算符在 nodeAffinity 中的含义是什么？",
            options: [
                "标签的值必须存在于指定列表中",
                "只要节点有这个标签键就匹配，不关心值",
                "标签必须不存在",
                "标签值必须大于指定值"
            ],
            answer: 1,
            rationale: "Exists 运算符只检查标签键是否存在，不关心值是什么。相对地，DoesNotExist 检查标签键不存在。"
        }
    ]
}
