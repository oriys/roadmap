import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "w5-2": {
        lessonId: "w5-2",
        background: [
            "PersistentVolume（PV）是集群级别的存储资源，由管理员静态创建或通过 StorageClass 动态供给。PV 的生命周期独立于 Pod，数据持久化不受 Pod 重建影响。",
            "PersistentVolumeClaim（PVC）是用户对存储的请求声明，类似于 Pod 对 CPU/内存的 requests。PVC 指定所需容量、访问模式和 StorageClass，由控制平面自动匹配并绑定合适的 PV。",
            "PV 和 PVC 的绑定是一对一关系（1:1 mapping）。一旦绑定，PVC 独占该 PV，直到 PVC 被删除。绑定过程考虑容量、访问模式、StorageClass 和标签选择器。",
            "Kubernetes 提供存储对象使用保护（Storage Object in Use Protection）：正在被 Pod 使用的 PVC 无法被删除，绑定了 PVC 的 PV 也受保护。删除请求会进入 Terminating 状态等待解除占用。"
        ],
        keyDifficulties: [
            "访问模式理解：ReadWriteOnce（RWO，单节点读写）、ReadOnlyMany（ROX，多节点只读）、ReadWriteMany（RWX，多节点读写）、ReadWriteOncePod（RWOP，单 Pod 读写）。不同存储后端支持的模式不同，如 hostPath 只支持 RWO。",
            "回收策略选择：Retain（保留数据，需手动清理后才能重新绑定）、Delete（自动删除 PV 和底层存储，动态供给的默认策略）、Recycle（已废弃，执行 rm -rf 清理数据）。生产环境重要数据建议使用 Retain。",
            "静态供给 vs 动态供给：静态供给由管理员预先创建 PV；动态供给通过 StorageClass 按需自动创建 PV。动态供给更灵活，减少管理负担，是生产环境推荐方式。",
            "容量匹配规则：PVC 请求的容量不能超过 PV 容量。如果 PVC 请求 5Gi 而只有 10Gi 的 PV 可用，PVC 会绑定到 10Gi PV，但只能使用请求的 5Gi（具体行为取决于存储后端）。"
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
            "ConfigMap 是 Kubernetes 中用于存储非机密配置数据的 API 对象，将配置与容器镜像解耦，使应用更具可移植性。ConfigMap 可以存储键值对或完整的配置文件内容。",
            "Secret 用于存储敏感信息（如密码、OAuth 令牌、SSH 密钥），与 ConfigMap 类似但提供额外的安全考量。Secret 默认以 Base64 编码存储在 etcd 中（注意：编码不是加密）。",
            "ConfigMap 和 Secret 都支持三种注入方式：环境变量（envFrom/valueFrom）、命令行参数（通过环境变量间接引用）、卷挂载（作为文件或目录）。卷挂载支持自动更新，环境变量不支持。",
            "Kubernetes 1.21+ 支持 Immutable ConfigMap/Secret，设置 immutable: true 后不可修改，可显著减少 API Server 的 watch 负载，适合不常变更的配置。"
        ],
        keyDifficulties: [
            "Secret 类型区分：Opaque（通用）、kubernetes.io/tls（TLS 证书，含 tls.crt 和 tls.key）、kubernetes.io/dockerconfigjson（镜像拉取凭证）、kubernetes.io/basic-auth、kubernetes.io/ssh-auth、kubernetes.io/service-account-token（已废弃，改用 TokenRequest API）。",
            "更新传播机制：卷挂载的 ConfigMap/Secret 更新后，kubelet 会在同步周期内（默认 1 分钟 + TTL 缓存）更新文件；环境变量和 subPath 挂载不会自动更新，需要重启 Pod。使用 immutable 可禁止更新。",
            "安全最佳实践：启用 etcd 加密（EncryptionConfiguration）、限制 Secret 的 RBAC 访问、使用外部密钥管理（如 HashiCorp Vault、AWS Secrets Manager）配合 CSI 驱动或 External Secrets Operator。",
            "滚动更新触发：修改 ConfigMap/Secret 不会自动触发 Deployment 滚动更新。常见做法是在 Pod 模板的 annotation 中添加 configmap/secret 的哈希值或版本号，变更时更新 annotation 触发滚动。"
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
    "w5-2": [
        {
            id: "w5-2-q1",
            question: "PersistentVolume（PV）和 PersistentVolumeClaim（PVC）的关系是什么？",
            options: [
                "一个 PV 可以绑定多个 PVC",
                "一个 PVC 可以绑定多个 PV",
                "PV 和 PVC 是一对一绑定关系",
                "PV 和 PVC 可以多对多绑定"
            ],
            answer: 2,
            rationale: "PV 和 PVC 是一对一绑定关系。一个 PV 只能绑定一个 PVC，一个 PVC 也只能绑定一个 PV。"
        },
        {
            id: "w5-2-q2",
            question: "ReadWriteOnce（RWO）访问模式的含义是什么？",
            options: [
                "可以被多个节点同时读写",
                "可以被多个节点只读访问",
                "只能被单个节点以读写方式挂载",
                "只能被单个 Pod 以读写方式挂载"
            ],
            answer: 2,
            rationale: "ReadWriteOnce（RWO）表示卷只能被单个节点以读写方式挂载。注意是节点级别，同一节点上的多个 Pod 可以同时访问。"
        },
        {
            id: "w5-2-q3",
            question: "PV 的 Retain 回收策略意味着什么？",
            options: [
                "PVC 删除后 PV 和数据自动删除",
                "PVC 删除后 PV 保留，数据需手动清理后才能重新绑定",
                "PVC 删除后执行 rm -rf 清理数据",
                "PVC 删除后 PV 自动重新变为 Available"
            ],
            answer: 1,
            rationale: "Retain 策略下，PVC 删除后 PV 变为 Released 状态，数据保留但不能被新 PVC 绑定，需要管理员手动清理 claimRef 和数据。"
        },
        {
            id: "w5-2-q4",
            question: "动态供给（Dynamic Provisioning）需要什么资源？",
            options: [
                "只需要 PVC",
                "需要预先创建的 PV",
                "需要 StorageClass 配合 PVC",
                "需要手动创建存储后端"
            ],
            answer: 2,
            rationale: "动态供给通过 StorageClass 定义存储配置，当 PVC 引用该 StorageClass 时自动创建 PV，无需管理员预先创建。"
        },
        {
            id: "w5-2-q5",
            question: "PVC 的状态 Pending 表示什么？",
            options: [
                "PVC 正在被 Pod 使用",
                "PVC 已绑定到 PV",
                "PVC 等待绑定，没有找到匹配的 PV",
                "PVC 被标记删除"
            ],
            answer: 2,
            rationale: "Pending 表示 PVC 正在等待绑定，可能是没有满足条件的 PV，或者 StorageClass 的动态供给失败。"
        },
        {
            id: "w5-2-q6",
            question: "ReadWriteOncePod（RWOP）访问模式的特点是什么？",
            options: [
                "多个 Pod 可以同时读写",
                "只有单个 Pod 可以挂载该卷",
                "只支持只读访问",
                "只在 Pod 创建时可写"
            ],
            answer: 1,
            rationale: "ReadWriteOncePod（RWOP）是最严格的访问模式，确保整个集群中只有一个 Pod 可以挂载该卷，提供最强的独占保证。"
        },
        {
            id: "w5-2-q7",
            question: "PV 的 Delete 回收策略在什么场景下是默认值？",
            options: [
                "静态供给的 PV",
                "动态供给（通过 StorageClass）创建的 PV",
                "所有 PV",
                "hostPath 类型的 PV"
            ],
            answer: 1,
            rationale: "动态供给创建的 PV 默认使用 Delete 回收策略（除非 StorageClass 指定其他策略），PVC 删除时自动清理 PV 和底层存储。"
        },
        {
            id: "w5-2-q8",
            question: "存储对象使用保护（Storage Object in Use Protection）的作用是什么？",
            options: [
                "加密存储数据",
                "防止正在使用的 PVC 和绑定的 PV 被删除",
                "限制存储的访问权限",
                "自动备份存储数据"
            ],
            answer: 1,
            rationale: "存储对象使用保护防止正在被 Pod 使用的 PVC 被删除，也防止绑定了 PVC 的 PV 被删除，避免数据丢失。"
        },
        {
            id: "w5-2-q9",
            question: "PV 从 Released 状态如何变回 Available 状态？",
            options: [
                "自动变回 Available",
                "删除 PV 重新创建",
                "手动清理 spec.claimRef 字段",
                "重启 kube-controller-manager"
            ],
            answer: 2,
            rationale: "Released 状态的 PV 因为还保留着之前 PVC 的绑定信息（claimRef），需要手动清理该字段后才能重新变为 Available。"
        },
        {
            id: "w5-2-q10",
            question: "hostPath 类型的 PV 有什么限制？",
            options: [
                "不支持持久化存储",
                "只能在单节点集群使用，数据不跨节点共享",
                "不支持读写操作",
                "必须使用 StorageClass"
            ],
            answer: 1,
            rationale: "hostPath 将节点上的目录挂载到 Pod，数据存储在特定节点上。Pod 调度到其他节点时无法访问数据，仅适合单节点测试环境。"
        },
        {
            id: "w5-2-q11",
            question: "PVC 如何选择要绑定的 PV？",
            options: [
                "随机选择任意 PV",
                "按 PV 创建时间选择最新的",
                "根据 StorageClass、容量、访问模式和标签选择器匹配",
                "由管理员手动指定"
            ],
            answer: 2,
            rationale: "PVC 绑定时考虑多个因素：StorageClass 必须匹配、PV 容量必须满足请求、访问模式必须兼容、标签选择器必须匹配。"
        },
        {
            id: "w5-2-q12",
            question: "ReadWriteMany（RWX）访问模式适合什么场景？",
            options: [
                "单节点数据库",
                "多个 Pod 需要同时读写共享数据（如 NFS）",
                "需要最高安全性的场景",
                "临时存储"
            ],
            answer: 1,
            rationale: "ReadWriteMany（RWX）允许多个节点同时以读写方式挂载，适合需要共享存储的场景，如多副本应用共享上传文件。"
        },
        {
            id: "w5-2-q13",
            question: "PV 的 volumeMode 字段可以设置为哪两种值？",
            options: [
                "ReadOnly 和 ReadWrite",
                "Filesystem 和 Block",
                "Persistent 和 Ephemeral",
                "Static 和 Dynamic"
            ],
            answer: 1,
            rationale: "volumeMode 可以是 Filesystem（默认，格式化为文件系统）或 Block（块设备直通，用于需要原始块访问的场景如数据库）。"
        },
        {
            id: "w5-2-q14",
            question: "使用 subPath 挂载 PVC 有什么特点？",
            options: [
                "可以自动更新内容",
                "可以将 PVC 中的特定子目录挂载到容器，但不支持自动更新",
                "只支持 ConfigMap",
                "性能比直接挂载更好"
            ],
            answer: 1,
            rationale: "subPath 允许将 PVC 中的特定文件或子目录挂载到容器的指定路径，但与 ConfigMap 的 subPath 类似，不支持内容自动更新。"
        },
        {
            id: "w5-2-q15",
            question: "Recycle 回收策略为什么被废弃？",
            options: [
                "性能太差",
                "不够安全，只执行简单的 rm -rf，推荐使用动态供给的 Delete 策略",
                "不支持所有存储类型",
                "与 StorageClass 不兼容"
            ],
            answer: 1,
            rationale: "Recycle 只执行基本的 rm -rf 清理，安全性和可靠性不足。推荐使用动态供给（每次创建新 PV）或手动管理（Retain）。"
        }
    ],
    "w5-1": [
        {
            id: "w5-1-q1",
            question: "ConfigMap 主要用于存储什么类型的数据？",
            options: [
                "密码和令牌等敏感信息",
                "非机密的配置数据",
                "容器镜像的二进制文件",
                "Pod 的日志数据"
            ],
            answer: 1,
            rationale: "ConfigMap 用于存储非机密的配置数据，如配置文件、环境变量、命令行参数等。敏感信息应使用 Secret。"
        },
        {
            id: "w5-1-q2",
            question: "Secret 中的数据默认以什么方式存储？",
            options: [
                "AES-256 加密",
                "Base64 编码（非加密）",
                "SHA-256 哈希",
                "明文存储"
            ],
            answer: 1,
            rationale: "Secret 数据默认以 Base64 编码存储在 etcd 中。Base64 只是编码不是加密，需要额外配置 EncryptionConfiguration 实现加密。"
        },
        {
            id: "w5-1-q3",
            question: "以下哪种方式注入的 ConfigMap 在更新后会自动刷新？",
            options: [
                "环境变量（envFrom）",
                "环境变量（valueFrom）",
                "卷挂载（volumeMounts）",
                "命令行参数（command）"
            ],
            answer: 2,
            rationale: "只有通过卷挂载的 ConfigMap 在更新后会被 kubelet 自动同步到 Pod 中。环境变量在 Pod 启动时设置，之后不会更新。"
        },
        {
            id: "w5-1-q4",
            question: "kubernetes.io/tls 类型的 Secret 必须包含哪些字段？",
            options: [
                "username 和 password",
                "tls.crt 和 tls.key",
                "ca.crt 和 ca.key",
                "cert.pem 和 key.pem"
            ],
            answer: 1,
            rationale: "TLS 类型 Secret 必须包含 tls.crt（证书）和 tls.key（私钥）两个字段，用于 HTTPS/TLS 配置。"
        },
        {
            id: "w5-1-q5",
            question: "设置 ConfigMap 或 Secret 的 immutable: true 有什么效果？",
            options: [
                "数据会被加密存储",
                "只能被特定 ServiceAccount 访问",
                "创建后不可修改，减少 API Server 的 watch 负载",
                "自动同步到所有命名空间"
            ],
            answer: 2,
            rationale: "immutable: true 使 ConfigMap/Secret 创建后不可修改。这可以显著减少 API Server 的 watch 负载，适合不常变更的配置。"
        },
        {
            id: "w5-1-q6",
            question: "如何通过命令行从文件创建 ConfigMap？",
            options: [
                "kubectl create configmap myconfig --from-file=config.properties",
                "kubectl apply configmap myconfig --file=config.properties",
                "kubectl new configmap myconfig --source=config.properties",
                "kubectl generate configmap myconfig --input=config.properties"
            ],
            answer: 0,
            rationale: "kubectl create configmap --from-file 从文件创建 ConfigMap，文件名作为 key，内容作为 value。"
        },
        {
            id: "w5-1-q7",
            question: "使用 subPath 挂载 ConfigMap 时有什么特殊行为？",
            options: [
                "挂载速度更快",
                "支持热更新",
                "不会接收 ConfigMap 的更新",
                "自动创建备份"
            ],
            answer: 2,
            rationale: "使用 subPath 挂载的 ConfigMap/Secret 不会接收更新。这是因为 subPath 使用的是挂载时的文件副本，而非符号链接。"
        },
        {
            id: "w5-1-q8",
            question: "kubernetes.io/dockerconfigjson 类型的 Secret 用于什么？",
            options: [
                "存储 Docker Compose 文件",
                "存储镜像拉取凭证",
                "存储 Docker 网络配置",
                "存储容器日志配置"
            ],
            answer: 1,
            rationale: "dockerconfigjson 类型 Secret 存储私有镜像仓库的认证凭证，Pod 的 imagePullSecrets 字段引用它来拉取私有镜像。"
        },
        {
            id: "w5-1-q9",
            question: "修改 ConfigMap 后，如何触发 Deployment 的滚动更新？",
            options: [
                "ConfigMap 修改会自动触发滚动更新",
                "在 Pod template 的 annotation 中添加 ConfigMap 的哈希或版本，变更时更新 annotation",
                "删除并重建 Deployment",
                "使用 kubectl restart deployment"
            ],
            answer: 1,
            rationale: "ConfigMap 修改不会自动触发滚动更新。常见做法是在 Pod template annotation 中记录 ConfigMap 哈希/版本，变更时更新 annotation 触发滚动。"
        },
        {
            id: "w5-1-q10",
            question: "ConfigMap 的 data 和 binaryData 字段有什么区别？",
            options: [
                "data 存储加密数据，binaryData 存储明文数据",
                "data 存储 UTF-8 文本，binaryData 存储 Base64 编码的二进制数据",
                "data 用于环境变量，binaryData 用于卷挂载",
                "两者完全相同，只是命名不同"
            ],
            answer: 1,
            rationale: "data 字段存储 UTF-8 编码的文本数据；binaryData 字段存储 Base64 编码的二进制数据（如图片、证书）。"
        },
        {
            id: "w5-1-q11",
            question: "为什么 kubernetes.io/service-account-token 类型的 Secret 被废弃？",
            options: [
                "存储空间太大",
                "不支持多集群",
                "推荐使用 TokenRequest API 获取有时效的令牌",
                "与 RBAC 不兼容"
            ],
            answer: 2,
            rationale: "手动创建的 service-account-token Secret 是永不过期的。推荐使用 TokenRequest API 获取有时效的令牌，提高安全性。"
        },
        {
            id: "w5-1-q12",
            question: "卷挂载的 ConfigMap 更新后，多久会同步到 Pod？",
            options: [
                "立即同步",
                "kubelet 同步周期 + 缓存 TTL（默认约 1 分钟）",
                "需要手动触发同步",
                "下次 Pod 重启时"
            ],
            answer: 1,
            rationale: "卷挂载的 ConfigMap 更新延迟取决于 kubelet 同步周期（默认 1 分钟）和 ConfigMap 缓存的 TTL，通常在 1-2 分钟内完成。"
        },
        {
            id: "w5-1-q13",
            question: "以下哪个是保护 Secret 安全的最佳实践？",
            options: [
                "将 Secret 存储在 Git 仓库中便于版本控制",
                "启用 etcd 加密并限制 RBAC 访问权限",
                "使用更长的 Secret 名称",
                "将所有 Secret 放在 default 命名空间"
            ],
            answer: 1,
            rationale: "保护 Secret 的最佳实践包括：启用 etcd 加密（EncryptionConfiguration）、限制 RBAC 访问、使用外部密钥管理系统、避免在 Git 中存储明文 Secret。"
        },
        {
            id: "w5-1-q14",
            question: "envFrom 和 env.valueFrom 在引用 ConfigMap 时有什么区别？",
            options: [
                "envFrom 引用整个 ConfigMap 作为环境变量，valueFrom 引用单个键",
                "envFrom 支持热更新，valueFrom 不支持",
                "envFrom 用于 Secret，valueFrom 用于 ConfigMap",
                "两者完全相同"
            ],
            answer: 0,
            rationale: "envFrom 将 ConfigMap 的所有键值对导入为环境变量；env.valueFrom 只引用 ConfigMap 中的单个键作为特定环境变量的值。"
        },
        {
            id: "w5-1-q15",
            question: "External Secrets Operator 的作用是什么？",
            options: [
                "加密 etcd 中的 Secret",
                "将外部密钥管理系统（如 Vault）的密钥同步为 Kubernetes Secret",
                "限制 Secret 的网络访问",
                "自动轮换 Secret 的名称"
            ],
            answer: 1,
            rationale: "External Secrets Operator 从外部密钥管理系统（HashiCorp Vault、AWS Secrets Manager 等）同步密钥到 Kubernetes Secret，实现集中式密钥管理。"
        }
    ]
}
