import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
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
