import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
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
