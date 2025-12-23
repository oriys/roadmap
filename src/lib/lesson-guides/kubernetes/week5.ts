import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "w5-4": {
        lessonId: "w5-4",
        background: [
            "StatefulSet 是管理有状态应用的工作负载 API 对象，为每个 Pod 提供稳定的、唯一的身份标识。与 Deployment 不同，StatefulSet 维护 Pod 的有序性和唯一性。",
            "StatefulSet 适用于需要以下特性的应用：稳定的唯一网络标识符、稳定的持久存储、有序的优雅部署和扩缩、有序的自动滚动更新。典型场景包括数据库、消息队列、分布式存储等。",
            "每个 StatefulSet Pod 有一个顺序索引（Ordinal Index），从 0 到 N-1。Pod 名称格式为 $(statefulset-name)-$(ordinal)，如 web-0、web-1、web-2。",
            "StatefulSet 必须配合 Headless Service（clusterIP: None）使用，为每个 Pod 提供稳定的 DNS 记录：$(pod-name).$(service-name).$(namespace).svc.cluster.local。"
        ],
        keyDifficulties: [
            "volumeClaimTemplates 机制：StatefulSet 为每个 Pod 自动创建独立的 PVC，名称格式为 $(volumeClaimTemplate-name)-$(pod-name)。删除 Pod 或缩容不会删除 PVC，需要手动清理释放存储。",
            "有序部署和终止：默认情况下（OrderedReady），Pod 按顺序创建（0 → 1 → 2），按逆序删除（2 → 1 → 0）。每个 Pod 必须 Running 且 Ready 后，才会创建下一个。Parallel 策略可并行操作。",
            "更新策略选择：RollingUpdate（默认）按逆序滚动更新（N-1 → 0）；OnDelete 需要手动删除 Pod 才会更新。partition 参数可实现金丝雀发布，只更新序号 >= partition 的 Pod。",
            "Headless Service 的必要性：普通 Service 提供负载均衡的虚拟 IP，而 Headless Service 让客户端直接发现所有 Pod IP。StatefulSet 需要 Headless Service 为每个 Pod 创建独立 DNS 记录。"
        ],
        handsOnPath: [
            "部署一个 3 副本的 StatefulSet（如 nginx），观察 Pod 按顺序创建（web-0 → web-1 → web-2），使用 kubectl get pods -w 实时观察。",
            "使用 nslookup 或 dig 查询 Headless Service 和单个 Pod 的 DNS 记录，验证 $(pod-name).$(service-name) 格式的 DNS 解析。",
            "测试 volumeClaimTemplates：创建带 PVC 模板的 StatefulSet，查看自动创建的 PVC，删除一个 Pod 后验证 PVC 保留且新 Pod 重新绑定同一 PVC。",
            "实验滚动更新：修改 StatefulSet 的镜像版本，观察按逆序更新的过程；使用 partition 参数实现部分更新（金丝雀发布）。"
        ],
        selfCheck: [
            "StatefulSet 与 Deployment 的核心区别是什么？什么场景应该使用 StatefulSet？",
            "StatefulSet Pod 的 DNS 名称格式是什么？为什么需要 Headless Service？",
            "volumeClaimTemplates 如何工作？删除 StatefulSet 或缩容时 PVC 会怎样？",
            "StatefulSet 的有序部署保证是什么？OrderedReady 和 Parallel 策略的区别？",
            "RollingUpdate 策略的 partition 参数有什么作用？如何用它实现金丝雀发布？"
        ],
        extensions: [
            "研究 StatefulSet 与数据库集群（如 MySQL 主从、PostgreSQL 流复制）的集成，了解有状态应用的高可用部署模式。",
            "探索 Operator 模式如何简化有状态应用管理（如 MySQL Operator、PostgreSQL Operator、Kafka Operator）。",
            "学习 PodManagementPolicy 的 Parallel 策略，了解何时可以放弃有序保证以加速部署。",
            "研究 StatefulSet 的 minReadySeconds 和 pod disruption budget 配置，了解如何控制更新速度和保护可用性。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
            "https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/",
            "https://kubernetes.io/docs/tasks/run-application/run-replicated-stateful-application/"
        ]
    },
    "w5-3": {
        lessonId: "w5-3",
        background: [
            "StorageClass 是 Kubernetes 中描述存储'类别'的资源，允许管理员定义不同的存储配置（如性能级别、备份策略）。它是实现动态存储供给的核心组件。",
            "CSI（Container Storage Interface）是容器存储的行业标准接口，定义了容器编排系统与存储系统之间的通信规范。Kubernetes 正在将所有 in-tree 存储插件迁移到 CSI 驱动。",
            "StorageClass 通过 provisioner 字段指定使用哪个存储驱动（如 ebs.csi.aws.com、disk.csi.azure.com）。不同的 provisioner 支持不同的 parameters 配置项。",
            "volumeBindingMode 控制 PVC 绑定时机：Immediate（立即绑定）和 WaitForFirstConsumer（延迟到 Pod 调度时绑定，支持拓扑感知）。后者对多可用区集群尤为重要。"
        ],
        keyDifficulties: [
            "默认 StorageClass 配置：通过 annotation storageclass.kubernetes.io/is-default-class: \"true\" 设置。集群应只有一个默认 StorageClass，否则 PVC 可能绑定到意外的存储。不指定 storageClassName 的 PVC 会使用默认类。",
            "WaitForFirstConsumer 的作用：延迟 PV 创建直到 Pod 调度，确保 PV 在正确的可用区/节点创建。避免 Pod 因存储位置错误而无法调度。与 allowedTopologies 配合实现拓扑约束。",
            "in-tree 插件迁移：Kubernetes 正在废弃 in-tree 存储插件（如 awsElasticBlockStore、azureDisk），迁移到 CSI 驱动。迁移通过 CSIMigration feature gate 自动完成，对用户透明。",
            "allowVolumeExpansion 配置：设为 true 允许用户通过编辑 PVC 的 spec.resources.requests.storage 来扩容。不是所有存储后端都支持，且通常不支持缩容。某些后端需要 Pod 重启才能生效。"
        ],
        handsOnPath: [
            "查看集群中的 StorageClass：kubectl get storageclass，找到默认 StorageClass（标记为 default），使用 kubectl describe storageclass 查看配置详情。",
            "创建自定义 StorageClass，指定不同的 provisioner 和 parameters，创建使用该类的 PVC，观察 PV 的动态供给过程。",
            "测试 WaitForFirstConsumer：创建 volumeBindingMode 为 WaitForFirstConsumer 的 StorageClass 和 PVC，观察 PVC 保持 Pending 直到创建引用它的 Pod。",
            "在支持扩容的环境中测试 Volume Expansion：创建 allowVolumeExpansion: true 的 StorageClass，创建 PVC 后编辑 storage 字段扩容，观察 PV 和 PVC 的容量变化。"
        ],
        selfCheck: [
            "StorageClass 的 provisioner 字段的作用是什么？如何知道应该使用哪个 provisioner？",
            "volumeBindingMode 的 Immediate 和 WaitForFirstConsumer 有什么区别？什么场景需要使用 WaitForFirstConsumer？",
            "如何设置默认 StorageClass？如果没有默认 StorageClass，不指定 storageClassName 的 PVC 会怎样？",
            "什么是 CSI？为什么 Kubernetes 要从 in-tree 存储插件迁移到 CSI 驱动？",
            "如何启用 PVC 扩容功能？扩容过程中需要注意什么？"
        ],
        extensions: [
            "研究常见 CSI 驱动（AWS EBS CSI、GCE PD CSI、Azure Disk CSI）的安装和配置，了解云环境中的存储集成。",
            "探索 Volume Snapshot 和 VolumeSnapshotClass，了解如何对 CSI 卷进行快照备份和恢复。",
            "学习 CSI 驱动开发规范，了解 CSI Controller、Node 插件的架构和 gRPC 接口定义。",
            "研究本地存储（Local Persistent Volumes）和 TopoLVM 等本地存储方案，了解如何在裸金属环境提供持久存储。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/storage/storage-classes/",
            "https://kubernetes.io/docs/concepts/storage/volumes/#csi",
            "https://kubernetes-csi.github.io/docs/"
        ]
    },
    "w5-2": {
        lessonId: "w5-2",
        background: [
            "【PV 定义】官方文档：'A PersistentVolume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes'——PV 是集群级存储资源，'have a lifecycle independent of any individual Pod'——生命周期独立于 Pod。",
            "【PVC 定义】官方文档：'A PersistentVolumeClaim (PVC) is a request for storage by a user. It is similar to a Pod'——PVC 是用户对存储的请求声明，类似 Pod 消费节点资源，PVC 消费 PV 资源。",
            "【一对一绑定】官方文档：'PVC to PV binding is a one-to-one mapping, using a ClaimRef which is a bi-directional binding'——PV 和 PVC 是一对一双向绑定关系，一旦绑定 PVC 独占该 PV。",
            "【存储对象保护】官方文档：'If a user deletes a PVC in active use by a Pod, the PVC is not removed immediately'——正在被 Pod 使用的 PVC 受保护无法立即删除，会进入 Terminating 状态等待解除占用。",
            "【供给方式】静态供给（管理员预创建 PV）和动态供给（通过 StorageClass 按需自动创建）。动态供给更灵活，是生产环境推荐方式。"
        ],
        keyDifficulties: [
            "【四种访问模式】官方文档定义：ReadWriteOnce (RWO，单节点读写)、ReadOnlyMany (ROX，多节点只读)、ReadWriteMany (RWX，多节点读写)、ReadWriteOncePod (RWOP，单 Pod 读写)。不同存储后端支持的模式不同。",
            "【Retain 策略】官方文档：'allows for manual reclamation...not yet available for another claim because the previous claimant's data remains on the volume'——PVC 删除后 PV 变 Released，需手动清理数据和 claimRef 后才能重新绑定。",
            "【Delete 策略】官方文档：'dynamically provisioned inherit the reclaim policy of their StorageClass, which defaults to Delete'——动态供给默认 Delete，删除 PVC 时自动删除 PV 和底层存储。",
            "【Recycle 已废弃】官方文档：'Recycle reclaim policy is deprecated. Instead, the recommended approach is to use dynamic provisioning'——Recycle 只做简单 rm -rf 清理，推荐用动态供给替代。",
            "【容量匹配规则】PVC 请求的容量不能超过可用 PV。官方示例：'A cluster with many 50Gi PVs won't match a 100Gi PVC request until a 100Gi PV is added'。"
        ],
        handsOnPath: [
            "创建 hostPath 类型的 PV（storageClassName: manual），然后创建请求该类的 PVC，使用 kubectl get pv,pvc 观察绑定状态变化（Available → Bound）。",
            "创建一个 Pod 使用已绑定的 PVC，在容器内写入数据，删除 Pod 后重建，验证数据仍然存在。体会 PV 生命周期独立于 Pod。",
            "测试回收策略：创建 Retain 策略的 PV，删除 PVC 后观察 PV 状态变为 Released；使用 kubectl patch 清理 claimRef 后 PV 变为 Available 可重新绑定。",
            "使用 subPath 将同一 PVC 挂载到容器的多个不同路径，分别存放不同类型的数据，理解 subPath 的使用场景和限制。"
        ],
        selfCheck: [
            "PV 和 PVC 的关系是什么？为什么需要两层抽象而不是直接在 Pod 中引用存储？",
            "四种访问模式（RWO、ROX、RWX、RWOP）各自的含义和适用场景是什么？",
            "三种回收策略（Retain、Delete、Recycle）的区别是什么？生产环境如何选择？",
            "什么是存储对象使用保护？如果 PVC 显示 Terminating 状态卡住，可能是什么原因？",
            "静态供给和动态供给各有什么优缺点？StorageClass 在动态供给中扮演什么角色？"
        ],
        extensions: [
            "研究 PV 的 volumeMode 字段（Filesystem vs Block），了解块设备直通的使用场景和性能优势。",
            "探索 Volume Snapshot 和 Volume Clone 功能，了解如何对 PV 进行快照备份和克隆。",
            "学习 Volume Expansion，了解如何在不丢失数据的情况下扩容 PVC（需要 StorageClass 支持 allowVolumeExpansion）。",
            "研究各种存储后端（NFS、Ceph RBD、AWS EBS、GCE PD）的特性和访问模式支持，理解生产环境的存储选型。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
            "https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/",
            "https://kubernetes.io/docs/concepts/storage/storage-classes/"
        ]
    },
    "w5-1": {
        lessonId: "w5-1",
        background: [
            "【ConfigMap 定义】官方文档：'A ConfigMap is an API object used to store non-confidential data in key-value pairs'——ConfigMap 用于以键值对形式存储非机密配置数据，使配置与容器镜像解耦。",
            "【Secret 安全警告】官方文档明确警告：'Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)'——Secret 默认以明文存储在 etcd，Base64 编码不是加密。",
            "【大小限制】官方文档：ConfigMap 和 Secret 都有'Maximum 1 MiB'的数据大小限制。超过此限制需要使用卷挂载外部存储或独立数据库服务。",
            "【四种消费方式】官方文档列出四种使用方式：容器命令和参数、环境变量、只读卷文件、Kubernetes API 直接访问（支持订阅更新）。",
            "【Immutable 特性】v1.19+ 支持设置 immutable: true 创建不可变 ConfigMap/Secret，创建后无法修改，可显著减少 API Server 的 watch 负载。"
        ],
        keyDifficulties: [
            "【Secret 类型体系】官方文档定义八种内置类型：Opaque（默认通用）、kubernetes.io/tls（含 tls.crt 和 tls.key）、kubernetes.io/dockerconfigjson（镜像拉取凭证）、kubernetes.io/basic-auth、kubernetes.io/ssh-auth、kubernetes.io/service-account-token（v1.22+ 推荐用 TokenRequest API 替代）、bootstrap.kubernetes.io/token。",
            "【更新行为差异】官方文档：'ConfigMaps consumed as environment variables are not updated automatically and require a pod restart'——环境变量不自动更新；卷挂载会'eventually updated'但有同步延迟；subPath 挂载也不会接收更新。",
            "【安全最佳实践】官方文档推荐：Enable Encryption at Rest、配置 RBAC 最小权限访问、限制特定容器访问 Secret、考虑使用 external Secret store providers（如 Secrets Store CSI Driver）。",
            "【滚动更新触发问题】修改 ConfigMap/Secret 不会自动触发 Deployment 滚动更新。常见解决方案：在 Pod template annotation 中记录 ConfigMap 哈希或 resourceVersion，变更时更新 annotation 触发滚动。"
        ],
        handsOnPath: [
            "创建 ConfigMap（kubectl create configmap myconfig --from-literal=key1=value1 --from-file=config.properties），查看其 YAML 结构，理解 data 和 binaryData 字段的区别。",
            "创建 TLS Secret（kubectl create secret tls my-tls --cert=tls.crt --key=tls.key），查看 Secret 类型和数据字段，使用 kubectl get secret -o yaml 观察 Base64 编码。",
            "部署一个 Pod 同时使用环境变量注入和卷挂载两种方式消费 ConfigMap，修改 ConfigMap 后观察卷挂载文件的自动更新和环境变量不更新的差异。",
            "实现 ConfigMap 变更触发 Deployment 滚动更新：在 Deployment 的 Pod template annotation 中添加 ConfigMap 的 resourceVersion 或内容哈希，修改 ConfigMap 时同步更新 annotation。"
        ],
        selfCheck: [
            "ConfigMap 和 Secret 的主要区别是什么？Secret 的 Base64 编码是否等于加密？",
            "列出 Secret 的常见类型及其用途。kubernetes.io/service-account-token 类型为什么被废弃？",
            "ConfigMap 挂载为卷和注入为环境变量，在配置更新时的行为有什么不同？subPath 挂载有什么特殊性？",
            "如何实现 ConfigMap 变更后自动触发 Deployment 滚动更新？有哪些常见的解决方案？",
            "在生产环境中，如何保护 Secret 的安全？列出至少三种最佳实践。"
        ],
        extensions: [
            "研究 Kubernetes 的 EncryptionConfiguration，了解如何配置 etcd 静态加密（encryption at rest）保护 Secret。",
            "探索 External Secrets Operator 或 Secrets Store CSI Driver，了解如何与外部密钥管理系统（Vault、AWS Secrets Manager）集成。",
            "学习 Reloader 或 Stakater/Reloader 等工具，实现 ConfigMap/Secret 变更自动触发工作负载滚动更新。",
            "研究 Sealed Secrets（Bitnami）项目，了解如何安全地将加密的 Secret 存储在 Git 仓库中实现 GitOps。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/configuration/configmap/",
            "https://kubernetes.io/docs/concepts/configuration/secret/",
            "https://kubernetes.io/docs/tasks/configmap-secret/managing-secret-using-kubectl/"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "w5-4": [
        {
            id: "w5-4-q1",
            question: "StatefulSet 与 Deployment 的核心区别是什么？",
            options: [
                "StatefulSet 不支持滚动更新",
                "StatefulSet 为每个 Pod 提供稳定的唯一身份标识",
                "StatefulSet 不支持持久存储",
                "StatefulSet 只能运行单个 Pod"
            ],
            answer: 1,
            rationale: "StatefulSet 的核心特点是为每个 Pod 提供稳定、唯一的身份（名称、网络标识、存储），而 Deployment 的 Pod 是可互换的。"
        },
        {
            id: "w5-4-q2",
            question: "StatefulSet Pod 的名称格式是什么？",
            options: [
                "$(statefulset-name)-$(random-hash)",
                "$(statefulset-name)-$(ordinal)",
                "$(namespace)-$(statefulset-name)",
                "$(pod-name)-$(timestamp)"
            ],
            answer: 1,
            rationale: "StatefulSet Pod 名称格式为 $(statefulset-name)-$(ordinal)，其中 ordinal 是从 0 开始的顺序索引，如 web-0、web-1、web-2。"
        },
        {
            id: "w5-4-q3",
            question: "为什么 StatefulSet 必须使用 Headless Service？",
            options: [
                "提高网络性能",
                "为每个 Pod 创建独立的 DNS 记录，而非共享的虚拟 IP",
                "节省 IP 地址",
                "简化配置"
            ],
            answer: 1,
            rationale: "Headless Service（clusterIP: None）不分配 ClusterIP，而是让 DNS 直接返回所有 Pod IP，为 StatefulSet 每个 Pod 提供独立的 DNS 记录。"
        },
        {
            id: "w5-4-q4",
            question: "StatefulSet Pod 的 DNS 记录格式是什么？",
            options: [
                "$(pod-ip).$(namespace).pod.cluster.local",
                "$(pod-name).$(service-name).$(namespace).svc.cluster.local",
                "$(statefulset-name).$(namespace).svc.cluster.local",
                "$(service-name).$(pod-name).cluster.local"
            ],
            answer: 1,
            rationale: "StatefulSet Pod 的 DNS 格式为 $(pod-name).$(service-name).$(namespace).svc.cluster.local，如 web-0.nginx.default.svc.cluster.local。"
        },
        {
            id: "w5-4-q5",
            question: "volumeClaimTemplates 创建的 PVC 名称格式是什么？",
            options: [
                "$(pod-name)-$(volumeClaimTemplate-name)",
                "$(volumeClaimTemplate-name)-$(pod-name)",
                "$(statefulset-name)-$(volumeClaimTemplate-name)",
                "pvc-$(random-id)"
            ],
            answer: 1,
            rationale: "PVC 名称格式为 $(volumeClaimTemplate-name)-$(pod-name)，如 www-web-0、www-web-1。"
        },
        {
            id: "w5-4-q6",
            question: "删除 StatefulSet 或缩容时，自动创建的 PVC 会怎样？",
            options: [
                "自动删除",
                "保留不删除，需要手动清理",
                "变为 Released 状态",
                "自动迁移到其他 Pod"
            ],
            answer: 1,
            rationale: "StatefulSet 的 PVC 在 Pod 删除或缩容时保留，这是为了保护数据。需要手动删除 PVC 来释放存储资源。"
        },
        {
            id: "w5-4-q7",
            question: "StatefulSet 默认的 Pod 管理策略是什么？",
            options: [
                "Parallel",
                "OrderedReady",
                "Random",
                "BestEffort"
            ],
            answer: 1,
            rationale: "默认策略是 OrderedReady，Pod 按顺序创建（0 → 1 → 2），按逆序删除（2 → 1 → 0），每个 Pod 必须 Ready 后才处理下一个。"
        },
        {
            id: "w5-4-q8",
            question: "StatefulSet RollingUpdate 策略的更新顺序是什么？",
            options: [
                "从 Pod-0 开始正序更新",
                "从最大序号的 Pod 开始逆序更新",
                "随机顺序更新",
                "并行更新所有 Pod"
            ],
            answer: 1,
            rationale: "RollingUpdate 按逆序更新，从序号最大的 Pod 开始（N-1 → N-2 → ... → 0），确保有状态应用的安全更新。"
        },
        {
            id: "w5-4-q9",
            question: "RollingUpdate 的 partition 参数有什么作用？",
            options: [
                "设置更新的并行数",
                "只更新序号 >= partition 的 Pod，实现金丝雀发布",
                "设置更新的超时时间",
                "指定从哪个 Pod 开始更新"
            ],
            answer: 1,
            rationale: "partition 设置后，只有序号 >= partition 的 Pod 会被更新，序号 < partition 的 Pod 保持旧版本，用于金丝雀发布和分阶段升级。"
        },
        {
            id: "w5-4-q10",
            question: "OnDelete 更新策略的行为是什么？",
            options: [
                "自动删除并重建所有 Pod",
                "只有手动删除 Pod 后才会使用新模板重建",
                "删除 StatefulSet 时更新",
                "在特定时间自动更新"
            ],
            answer: 1,
            rationale: "OnDelete 策略不会自动更新 Pod，只有当用户手动删除 Pod 后，StatefulSet 才会用新模板重建它，提供完全的手动控制。"
        },
        {
            id: "w5-4-q11",
            question: "StatefulSet 适合运行以下哪种应用？",
            options: [
                "无状态的 Web 前端",
                "数据库集群（如 MySQL、PostgreSQL）",
                "批处理任务",
                "CronJob 定时任务"
            ],
            answer: 1,
            rationale: "StatefulSet 适合需要稳定网络标识和持久存储的有状态应用，如数据库、消息队列、分布式存储等。"
        },
        {
            id: "w5-4-q12",
            question: "PodManagementPolicy: Parallel 的作用是什么？",
            options: [
                "Pod 按顺序创建和删除",
                "Pod 可以并行创建和删除，不等待前一个 Ready",
                "只能运行一个 Pod",
                "禁用滚动更新"
            ],
            answer: 1,
            rationale: "Parallel 策略允许 Pod 并行创建和删除，不需要等待有序性。适用于不需要严格顺序保证的场景。"
        },
        {
            id: "w5-4-q13",
            question: "StatefulSet 的 serviceName 字段用于什么？",
            options: [
                "指定负载均衡的 Service",
                "指定管理 Pod DNS 域的 Headless Service",
                "指定外部访问的 Service",
                "指定监控 Service"
            ],
            answer: 1,
            rationale: "serviceName 指定控制 Pod 网络域名的 Headless Service，StatefulSet 使用它为每个 Pod 创建 DNS 记录。"
        },
        {
            id: "w5-4-q14",
            question: "如果 StatefulSet 的某个 Pod（如 web-1）失败，会发生什么？",
            options: [
                "创建一个新的随机名称的 Pod",
                "重建同名的 Pod（web-1），并绑定到原来的 PVC",
                "所有 Pod 都会重启",
                "StatefulSet 停止运行"
            ],
            answer: 1,
            rationale: "StatefulSet 会重建同名的 Pod（保持身份），并将其绑定到原来的 PVC，确保数据和身份的持续性。"
        },
        {
            id: "w5-4-q15",
            question: "apps.kubernetes.io/pod-index 标签表示什么？",
            options: [
                "Pod 的创建时间",
                "Pod 在 StatefulSet 中的顺序索引",
                "Pod 的优先级",
                "Pod 的版本号"
            ],
            answer: 1,
            rationale: "apps.kubernetes.io/pod-index 标签包含 Pod 在 StatefulSet 中的顺序索引（0、1、2...），便于根据索引选择特定 Pod。"
        }
    ],
    "w5-3": [
        {
            id: "w5-3-q1",
            question: "StorageClass 的主要作用是什么？",
            options: [
                "直接存储应用数据",
                "描述存储类别，定义动态供给的配置和参数",
                "替代 PV 和 PVC",
                "限制存储的访问权限"
            ],
            answer: 1,
            rationale: "StorageClass 定义存储的'类别'，包括使用哪个 provisioner、什么参数、什么回收策略等，是动态供给的核心配置。"
        },
        {
            id: "w5-3-q2",
            question: "StorageClass 的 provisioner 字段用于什么？",
            options: [
                "指定 PVC 的名称",
                "指定使用哪个存储驱动来创建 PV",
                "设置存储容量上限",
                "配置访问模式"
            ],
            answer: 1,
            rationale: "provisioner 指定使用哪个存储驱动（如 ebs.csi.aws.com、kubernetes.io/gce-pd）来处理该 StorageClass 的动态供给请求。"
        },
        {
            id: "w5-3-q3",
            question: "volumeBindingMode: WaitForFirstConsumer 的作用是什么？",
            options: [
                "立即创建 PV",
                "延迟 PV 创建和绑定，直到使用该 PVC 的 Pod 被调度",
                "等待管理员手动批准",
                "等待存储后端就绪"
            ],
            answer: 1,
            rationale: "WaitForFirstConsumer 延迟 PV 创建直到 Pod 调度，确保 PV 在正确的拓扑位置（可用区/节点）创建，避免调度失败。"
        },
        {
            id: "w5-3-q4",
            question: "如何设置默认 StorageClass？",
            options: [
                "将 StorageClass 命名为 default",
                "添加 annotation storageclass.kubernetes.io/is-default-class: \"true\"",
                "在 kube-controller-manager 中配置",
                "使用 kubectl set-default storageclass"
            ],
            answer: 1,
            rationale: "通过 metadata.annotations 添加 storageclass.kubernetes.io/is-default-class: \"true\" 将 StorageClass 设为默认。"
        },
        {
            id: "w5-3-q5",
            question: "什么是 CSI（Container Storage Interface）？",
            options: [
                "Kubernetes 内置的存储驱动",
                "容器存储的行业标准接口，定义编排系统与存储系统的通信规范",
                "一种特定的存储后端",
                "容器安全接口"
            ],
            answer: 1,
            rationale: "CSI 是一套标准化的接口规范，使存储供应商可以编写一次驱动即可在所有容器编排系统中使用。"
        },
        {
            id: "w5-3-q6",
            question: "为什么 Kubernetes 要从 in-tree 存储插件迁移到 CSI？",
            options: [
                "CSI 性能更好",
                "减少 Kubernetes 核心代码的维护负担，让存储供应商独立开发和发布驱动",
                "CSI 更安全",
                "in-tree 插件不支持持久存储"
            ],
            answer: 1,
            rationale: "CSI 允许存储供应商独立于 Kubernetes 发布周期开发和更新驱动，减少了核心代码的复杂度和维护负担。"
        },
        {
            id: "w5-3-q7",
            question: "allowVolumeExpansion: true 的作用是什么？",
            options: [
                "允许自动缩容",
                "允许用户通过编辑 PVC 扩展存储容量",
                "允许 PV 跨节点迁移",
                "允许多个 PVC 共享同一个 PV"
            ],
            answer: 1,
            rationale: "allowVolumeExpansion: true 允许用户编辑 PVC 的 spec.resources.requests.storage 来扩容，前提是存储后端支持在线扩容。"
        },
        {
            id: "w5-3-q8",
            question: "不指定 storageClassName 的 PVC 会怎样？",
            options: [
                "PVC 创建失败",
                "使用默认 StorageClass（如果存在）",
                "不创建 PV，直接绑定到空存储",
                "使用最新创建的 StorageClass"
            ],
            answer: 1,
            rationale: "不指定 storageClassName 的 PVC 会使用集群的默认 StorageClass。如果没有默认类，行为取决于集群配置。"
        },
        {
            id: "w5-3-q9",
            question: "StorageClass 的 reclaimPolicy 可以设置为哪些值？",
            options: [
                "Retain 和 Delete",
                "Create 和 Destroy",
                "Keep 和 Remove",
                "Persist 和 Ephemeral"
            ],
            answer: 0,
            rationale: "StorageClass 支持 Retain（保留 PV 和数据）和 Delete（删除 PV 和底层存储）两种回收策略，默认是 Delete。"
        },
        {
            id: "w5-3-q10",
            question: "以下哪个是 AWS EBS 的 CSI 驱动名称？",
            options: [
                "aws-ebs-csi",
                "ebs.csi.aws.com",
                "kubernetes.io/aws-ebs",
                "csi.aws.ebs"
            ],
            answer: 1,
            rationale: "AWS EBS CSI 驱动的 provisioner 名称是 ebs.csi.aws.com，这是 CSI 驱动的标准命名格式。"
        },
        {
            id: "w5-3-q11",
            question: "StorageClass 的 parameters 字段用于什么？",
            options: [
                "设置 PVC 的名称",
                "传递给 provisioner 的存储配置参数（如磁盘类型、IOPS）",
                "配置 Pod 的环境变量",
                "设置网络参数"
            ],
            answer: 1,
            rationale: "parameters 是传递给 provisioner 的键值对，用于配置存储后端的特定选项，如磁盘类型、加密、IOPS 等。"
        },
        {
            id: "w5-3-q12",
            question: "allowedTopologies 字段的作用是什么？",
            options: [
                "限制哪些用户可以使用该 StorageClass",
                "限制 PV 可以创建在哪些拓扑区域（如可用区）",
                "限制 StorageClass 的总容量",
                "限制挂载点的数量"
            ],
            answer: 1,
            rationale: "allowedTopologies 限制动态供给的 PV 只能在指定的拓扑区域创建，常用于控制存储的地理位置。"
        },
        {
            id: "w5-3-q13",
            question: "如果集群有多个 StorageClass 都标记为默认，会发生什么？",
            options: [
                "集群启动失败",
                "使用字母顺序排第一的",
                "PVC 创建会报错，或使用最近创建的默认类",
                "随机选择一个"
            ],
            answer: 2,
            rationale: "多个默认 StorageClass 会导致不确定行为。某些版本使用最近创建的，建议始终只保留一个默认 StorageClass。"
        },
        {
            id: "w5-3-q14",
            question: "mountOptions 字段的作用是什么？",
            options: [
                "指定挂载点路径",
                "为动态创建的 PV 指定挂载选项（如 discard、noatime）",
                "限制挂载次数",
                "设置挂载超时时间"
            ],
            answer: 1,
            rationale: "mountOptions 指定挂载到 Pod 时的选项，如 discard（启用 TRIM）、noatime、sync 等。无效选项会导致挂载失败。"
        },
        {
            id: "w5-3-q15",
            question: "CSIMigration feature gate 的作用是什么？",
            options: [
                "禁用 CSI 驱动",
                "自动将 in-tree 存储插件的请求重定向到对应的 CSI 驱动",
                "迁移 PV 数据",
                "升级 CSI 驱动版本"
            ],
            answer: 1,
            rationale: "CSIMigration 自动将使用 in-tree 插件（如 kubernetes.io/aws-ebs）的请求重定向到对应的 CSI 驱动，实现透明迁移。"
        }
    ],
    "w5-2": [
        {
            id: "w5-2-q1",
            question: "官方文档对 PersistentVolume (PV) 的核心特性描述是什么？",
            options: [
                "'have a lifecycle independent of any individual Pod'——生命周期独立于任何 Pod",
                "PV 生命周期与 Pod 绑定",
                "PV 只能静态创建",
                "PV 不支持动态供给"
            ],
            answer: 0,
            rationale: "官方文档明确指出 PV'have a lifecycle independent of any individual Pod that uses the PV'——生命周期独立于 Pod。"
        },
        {
            id: "w5-2-q2",
            question: "官方文档对 PV 和 PVC 绑定关系的描述是什么？",
            options: [
                "多个 PVC 可以绑定同一个 PV",
                "'PVC to PV binding is a one-to-one mapping'——一对一双向绑定",
                "PV 可以同时绑定多个 PVC",
                "绑定是临时的，可随时解除"
            ],
            answer: 1,
            rationale: "官方文档明确：'PVC to PV binding is a one-to-one mapping, using a ClaimRef which is a bi-directional binding'。"
        },
        {
            id: "w5-2-q3",
            question: "ReadWriteOnce (RWO) 访问模式的含义是什么？",
            options: [
                "可以被多个节点同时读写",
                "只能被单个 Pod 读写",
                "只能被单个节点以读写方式挂载",
                "只读不能写"
            ],
            answer: 2,
            rationale: "官方文档：RWO 表示'Volume can be mounted as read-write by a single node'——单节点读写，同一节点上的多个 Pod 可以同时访问。"
        },
        {
            id: "w5-2-q4",
            question: "官方文档对 Retain 回收策略的描述是什么？",
            options: [
                "自动删除 PV 和底层存储",
                "执行 rm -rf 清理数据后重新可用",
                "立即变为 Available 状态",
                "'not yet available for another claim because the previous claimant's data remains on the volume'"
            ],
            answer: 3,
            rationale: "官方文档：Retain 策略下'not yet available for another claim because the previous claimant's data remains on the volume'——需手动清理。"
        },
        {
            id: "w5-2-q5",
            question: "官方文档对动态供给的 PV 默认回收策略的说明是什么？",
            options: [
                "'dynamically provisioned inherit the reclaim policy of their StorageClass, which defaults to Delete'",
                "默认使用 Retain 策略",
                "默认使用 Recycle 策略",
                "没有默认策略，必须手动指定"
            ],
            answer: 0,
            rationale: "官方文档明确：'dynamically provisioned inherit the reclaim policy of their StorageClass, which defaults to Delete'。"
        },
        {
            id: "w5-2-q6",
            question: "官方文档对 Recycle 回收策略的建议是什么？",
            options: [
                "推荐在生产环境使用",
                "比 Delete 更安全",
                "'deprecated. Instead, the recommended approach is to use dynamic provisioning'——已废弃",
                "适合重要数据"
            ],
            answer: 2,
            rationale: "官方文档明确：'Recycle reclaim policy is deprecated. Instead, the recommended approach is to use dynamic provisioning'。"
        },
        {
            id: "w5-2-q7",
            question: "存储对象使用保护的行为是什么？",
            options: [
                "立即删除 PVC 和数据",
                "自动备份后删除",
                "'If a user deletes a PVC in active use by a Pod, the PVC is not removed immediately'",
                "阻止任何删除操作"
            ],
            answer: 2,
            rationale: "官方文档：'If a user deletes a PVC in active use by a Pod, the PVC is not removed immediately'——进入 Terminating 等待解除占用。"
        },
        {
            id: "w5-2-q8",
            question: "ReadWriteOncePod (RWOP) 与 ReadWriteOnce (RWO) 的区别是什么？",
            options: [
                "RWOP 允许多个 Pod 同时读写",
                "RWOP 只保证单个 Pod 独占，RWO 是单节点级别",
                "两者完全相同",
                "RWOP 只支持只读"
            ],
            answer: 1,
            rationale: "官方文档：RWOP 是'Volume can be mounted as read-write by a single Pod'——单 Pod 级别的独占，比 RWO（单节点）更严格。"
        },
        {
            id: "w5-2-q9",
            question: "官方文档关于容量匹配的示例说明是什么？",
            options: [
                "'A cluster with many 50Gi PVs won't match a 100Gi PVC request until a 100Gi PV is added'",
                "PVC 会自动扩展到最大可用 PV",
                "容量不匹配时自动创建新 PV",
                "PVC 可以跨多个 PV 绑定"
            ],
            answer: 0,
            rationale: "官方示例：'A cluster with many 50Gi PVs won't match a 100Gi PVC request until a 100Gi PV is added'——必须满足容量需求。"
        },
        {
            id: "w5-2-q10",
            question: "PV 从 Released 状态如何变回 Available 状态？",
            options: [
                "自动变回 Available",
                "重启 kube-controller-manager",
                "手动清理 spec.claimRef 字段",
                "删除并重建 PV"
            ],
            answer: 2,
            rationale: "Released 状态的 PV 保留着之前 PVC 的绑定信息（claimRef），需要手动清理该字段后才能重新变为 Available。"
        },
        {
            id: "w5-2-q11",
            question: "ReadWriteMany (RWX) 访问模式适合什么场景？",
            options: [
                "单节点数据库",
                "多个 Pod 需要同时读写共享数据（如 NFS）",
                "最高安全性要求的场景",
                "临时存储"
            ],
            answer: 1,
            rationale: "RWX 表示'Volume can be mounted as read-write by many nodes'——适合需要多节点共享读写的场景，如共享文件存储。"
        },
        {
            id: "w5-2-q12",
            question: "PV 的 volumeMode 字段可以设置为哪两种值？",
            options: [
                "ReadOnly 和 ReadWrite",
                "Static 和 Dynamic",
                "Persistent 和 Ephemeral",
                "Filesystem 和 Block"
            ],
            answer: 3,
            rationale: "官方文档：volumeMode 可以是 Filesystem（默认，格式化为文件系统）或 Block（块设备直通，用于原始块访问场景）。"
        }
    ],
    "w5-1": [
        {
            id: "w5-1-q1",
            question: "官方文档对 ConfigMap 的定义是什么？",
            options: [
                "'A ConfigMap is an API object used to store non-confidential data in key-value pairs'——存储非机密配置数据",
                "用于存储敏感信息如密码和令牌",
                "容器镜像的元数据存储",
                "Pod 调度的配置对象"
            ],
            answer: 0,
            rationale: "官方文档明确定义：'A ConfigMap is an API object used to store non-confidential data in key-value pairs'——用于存储非机密的键值对配置。"
        },
        {
            id: "w5-1-q2",
            question: "官方文档对 Secret 存储安全性的警告是什么？",
            options: [
                "Secret 使用 AES-256 加密存储",
                "Secret 自动加密，无需额外配置",
                "'Kubernetes Secrets are, by default, stored unencrypted in etcd'——默认不加密存储",
                "Secret 只存储在内存中"
            ],
            answer: 2,
            rationale: "官方文档明确警告：'Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)'——默认未加密。"
        },
        {
            id: "w5-1-q3",
            question: "ConfigMap 和 Secret 的数据大小限制是多少？",
            options: [
                "无大小限制",
                "Maximum 1 MiB（1 兆字节）",
                "10 MiB",
                "100 KiB"
            ],
            answer: 1,
            rationale: "官方文档：ConfigMap 和 Secret 都有'Maximum 1 MiB'的数据大小限制，超过需要使用外部存储。"
        },
        {
            id: "w5-1-q4",
            question: "官方文档对环境变量注入的 ConfigMap 更新行为描述是什么？",
            options: [
                "自动实时更新",
                "在下一个同步周期更新",
                "只在 Pod 创建时更新",
                "'ConfigMaps consumed as environment variables are not updated automatically and require a pod restart'"
            ],
            answer: 3,
            rationale: "官方文档明确：'ConfigMaps consumed as environment variables are not updated automatically and require a pod restart'——需要重启 Pod。"
        },
        {
            id: "w5-1-q5",
            question: "kubernetes.io/tls 类型的 Secret 必须包含哪些字段？",
            options: [
                "tls.crt（证书）和 tls.key（私钥）",
                "username 和 password",
                "ca.crt 和 ca.key",
                ".dockerconfigjson"
            ],
            answer: 0,
            rationale: "官方文档：TLS 类型 Secret 必须包含 tls.crt（证书）和 tls.key（私钥）两个字段。"
        },
        {
            id: "w5-1-q6",
            question: "官方文档推荐用什么替代 kubernetes.io/service-account-token 类型 Secret？",
            options: [
                "Opaque 类型 Secret",
                "ConfigMap",
                "TokenRequest API 获取短期令牌",
                "环境变量"
            ],
            answer: 2,
            rationale: "官方文档：'For Kubernetes v1.22+, use the TokenRequest API for short-lived tokens instead'——推荐使用 TokenRequest API。"
        },
        {
            id: "w5-1-q7",
            question: "使用 subPath 挂载 ConfigMap 时的特殊行为是什么？",
            options: [
                "挂载速度更快",
                "支持热更新",
                "自动创建备份",
                "不会接收 ConfigMap 的更新"
            ],
            answer: 3,
            rationale: "官方文档指出：'Containers using ConfigMap as subPath volume mounts will NOT receive updates'——subPath 不接收更新。"
        },
        {
            id: "w5-1-q8",
            question: "官方文档推荐的 Secret 安全措施不包括以下哪项？",
            options: [
                "Enable Encryption at Rest",
                "将 Secret 存储在 Git 仓库中",
                "配置 RBAC 最小权限访问",
                "使用 external Secret store providers"
            ],
            answer: 1,
            rationale: "官方文档推荐：Encryption at Rest、RBAC 最小权限、external Secret store providers。不推荐将 Secret 存储在 Git（除非使用 Sealed Secrets）。"
        },
        {
            id: "w5-1-q9",
            question: "ConfigMap 的 data 和 binaryData 字段有什么区别？",
            options: [
                "data 存储 UTF-8 文本，binaryData 存储 Base64 编码的二进制数据",
                "data 存储加密数据，binaryData 存储明文",
                "两者完全相同",
                "data 用于 Secret，binaryData 用于 ConfigMap"
            ],
            answer: 0,
            rationale: "官方文档：data 字段存储 UTF-8 编码的文本数据；binaryData 字段存储 Base64 编码的二进制数据。"
        },
        {
            id: "w5-1-q10",
            question: "kubernetes.io/dockerconfigjson 类型 Secret 的用途是什么？",
            options: [
                "存储 Docker Compose 文件",
                "存储容器日志配置",
                "存储私有镜像仓库的拉取凭证",
                "存储 Docker 网络配置"
            ],
            answer: 2,
            rationale: "官方文档：dockerconfigjson 类型用于'serialized ~/.docker/config.json file'——存储私有镜像仓库认证凭证。"
        },
        {
            id: "w5-1-q11",
            question: "设置 immutable: true 的效果是什么？",
            options: [
                "数据会被自动加密",
                "创建后不可修改，减少 API Server 的 watch 负载",
                "只能被特定 ServiceAccount 访问",
                "自动同步到所有命名空间"
            ],
            answer: 1,
            rationale: "官方文档：immutable: true 使 ConfigMap/Secret 创建后不可修改，可显著减少 API Server 的 watch 负载。"
        },
        {
            id: "w5-1-q12",
            question: "如何触发 ConfigMap 变更后的 Deployment 滚动更新？",
            options: [
                "ConfigMap 修改会自动触发滚动更新",
                "删除并重建 Deployment",
                "使用 kubectl restart deployment",
                "在 Pod template annotation 中记录 ConfigMap 哈希，变更时更新 annotation"
            ],
            answer: 3,
            rationale: "ConfigMap 修改不会自动触发滚动更新。常见做法是在 Pod template annotation 中记录哈希/版本，变更时更新 annotation 触发滚动。"
        }
    ]
}
