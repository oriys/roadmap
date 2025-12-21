import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "w7-3": {
        lessonId: "w7-3",
        background: [
            "Helm 是 Kubernetes 的包管理器，类似于 Linux 的 apt/yum 或 macOS 的 Homebrew。它简化了 Kubernetes 应用的打包、分发、安装和升级流程。",
            "Helm 有三个核心概念：Chart（包含应用所有 K8s 资源定义的包）、Repository（存储和分享 Chart 的仓库）、Release（Chart 在集群中运行的实例）。同一个 Chart 可以安装多次，每次生成一个独立的 Release。",
            "Chart 是一个目录结构，核心文件包括：Chart.yaml（元数据）、values.yaml（默认配置）、templates/（模板文件）。Helm 使用 Go template 语法渲染模板，生成最终的 Kubernetes 清单。",
            "Helm v3 是当前主流版本，相比 v2 移除了服务端组件 Tiller，直接使用 kubeconfig 认证，安全性和简洁性大幅提升。Release 信息存储在 Secret 或 ConfigMap 中。"
        ],
        keyDifficulties: [
            "Chart.yaml 必填字段：apiVersion（v2 表示 Helm 3）、name（Chart 名称）、version（Chart 版本，遵循 SemVer）。可选字段包括 appVersion（应用版本）、description、dependencies 等。",
            "values.yaml 与覆盖：values.yaml 定义默认值，安装时可通过 -f custom-values.yaml 或 --set key=value 覆盖。模板中通过 .Values.xxx 访问配置值。",
            "Release 生命周期：helm install 创建 Release，helm upgrade 更新，helm rollback 回滚到历史版本，helm uninstall 卸载。每次操作都会创建新的 Revision。",
            "仓库管理：helm repo add 添加仓库，helm repo update 更新仓库索引，helm search repo 搜索本地仓库，helm search hub 搜索 Artifact Hub（公共仓库聚合）。"
        ],
        handsOnPath: [
            "安装 Helm CLI（brew install helm 或官方脚本），运行 helm version 验证安装，了解 Helm 命令结构。",
            "添加官方 stable 仓库（helm repo add bitnami https://charts.bitnami.com/bitnami），搜索 nginx Chart，安装并查看创建的资源。",
            "使用 helm show values <chart> 查看 Chart 的默认配置，创建自定义 values.yaml 覆盖配置后重新安装，验证配置生效。",
            "练习 Release 管理：helm list 查看所有 Release，helm history <release> 查看历史版本，helm upgrade/rollback 升级和回滚，helm uninstall 卸载。"
        ],
        selfCheck: [
            "Helm 的三个核心概念（Chart、Repository、Release）分别是什么？它们的关系是什么？",
            "Chart 目录结构中，Chart.yaml、values.yaml、templates/ 各自的作用是什么？",
            "如何覆盖 Chart 的默认配置？-f 和 --set 的区别是什么？",
            "Helm v3 相比 v2 最大的变化是什么？为什么移除 Tiller？",
            "如何回滚到 Release 的历史版本？helm rollback 命令如何使用？"
        ],
        extensions: [
            "研究 Helm Chart 的依赖管理（dependencies 字段和 helm dependency 命令），了解如何构建复杂应用的 Chart。",
            "探索 Helm Hooks（pre-install、post-upgrade 等），了解如何在 Release 生命周期中执行自定义操作。",
            "学习创建自己的 Helm Chart（helm create），了解从零开始打包应用的完整流程。",
            "研究 Helm Chart 的安全最佳实践：签名验证（helm verify）、来源追踪（--provenance）。"
        ],
        sourceUrls: [
            "https://helm.sh/docs/intro/using_helm/",
            "https://helm.sh/docs/topics/charts/",
            "https://helm.sh/docs/helm/"
        ]
    },
    "w7-2": {
        lessonId: "w7-2",
        background: [
            "ServiceAccount 是 Kubernetes 中的非人类身份标识，为 Pod 和系统组件提供身份。与外部用户账户不同，ServiceAccount 是 Kubernetes API 对象，存在于特定命名空间中。",
            "每个命名空间都有一个名为 'default' 的 ServiceAccount 自动创建。如果 Pod 没有指定 serviceAccountName，则使用 default。Pod 通过 ServiceAccount 获得访问 Kubernetes API 的凭证。",
            "ServiceAccount 令牌有两种主要形式：投射卷令牌（Projected Volume，推荐，自动轮换的短期令牌）和 Secret 令牌（已废弃，长期静态令牌）。Kubernetes 1.22+ 默认使用投射卷令牌。",
            "TokenRequest API 允许程序动态请求短期令牌，适合外部服务或需要精细控制的场景。令牌包含受众（audience）和有效期信息，由 API Server 签发并验证。"
        ],
        keyDifficulties: [
            "令牌挂载机制：Pod 启动时，kubelet 自动将 ServiceAccount 令牌挂载到 /var/run/secrets/kubernetes.io/serviceaccount/。包含 token（JWT）、ca.crt（CA 证书）、namespace（命名空间）三个文件。",
            "automountServiceAccountToken 控制：可以在 ServiceAccount 或 Pod 级别设置 automountServiceAccountToken: false 禁用自动挂载。适用于不需要访问 API 的 Pod，减少攻击面。",
            "跨命名空间访问：ServiceAccount 是命名空间级别的，但可以通过 RoleBinding 授予其他命名空间的权限。在 subjects 中指定 namespace 字段实现跨命名空间授权。",
            "imagePullSecrets 关联：ServiceAccount 可以关联 imagePullSecrets，Pod 使用该 ServiceAccount 时自动获得拉取私有镜像的凭证，无需在每个 Pod 中单独配置。"
        ],
        handsOnPath: [
            "创建自定义 ServiceAccount（kubectl create serviceaccount mysa），查看自动创建的 token（kubectl get sa mysa -o yaml），理解 ServiceAccount 与 Secret 的关系。",
            "创建使用自定义 ServiceAccount 的 Pod，进入 Pod 查看 /var/run/secrets/kubernetes.io/serviceaccount/ 目录下的 token、ca.crt、namespace 文件。",
            "使用 kubectl create token <sa-name> 创建短期令牌，使用 curl 携带令牌调用 API Server 验证身份认证。",
            "配置 automountServiceAccountToken: false 的 Pod，验证令牌目录不存在，理解这对安全性的影响。"
        ],
        selfCheck: [
            "ServiceAccount 和 User 账户的区别是什么？ServiceAccount 存在于哪里？",
            "投射卷令牌（Projected Volume Token）和 Secret 令牌的区别是什么？为什么推荐使用前者？",
            "如何禁用 Pod 的 ServiceAccount 令牌自动挂载？什么场景下应该禁用？",
            "ServiceAccount 令牌挂载到 Pod 的什么位置？包含哪些文件？",
            "如何让一个命名空间的 ServiceAccount 访问另一个命名空间的资源？"
        ],
        extensions: [
            "研究 Bound Service Account Token（KEP-1205），了解令牌与 Pod 生命周期绑定的安全增强。",
            "探索 ServiceAccount Token Volume Projection 的高级配置（audience、expirationSeconds）。",
            "学习 Workload Identity（如 AWS IRSA、GCP Workload Identity），了解云环境中 ServiceAccount 与云 IAM 的集成。",
            "研究 Pod Security Standards 对 ServiceAccount 的要求，了解如何实施最小权限原则。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/security/service-accounts/",
            "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
            "https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/"
        ]
    },
    "w7-4": {
        lessonId: "w7-4",
        background: [
            "Helm 使用 Go template 语言渲染 Kubernetes 清单文件。模板文件位于 Chart 的 templates/ 目录，使用 {{ }} 分隔符标记模板指令，支持变量插入、条件判断、循环遍历等功能。",
            "Helm 提供多个内置对象供模板访问：Release（发布信息）、Values（配置值）、Chart（元数据）、Files（非模板文件）、Capabilities（集群能力）、Template（当前模板信息）。",
            "模板函数来自 Go template 语言和 Sprig 库，提供 60+ 函数用于数据转换。常用函数包括 quote（引号包裹）、default（默认值）、upper/lower（大小写转换）、indent/nindent（缩进）等。",
            "命名模板（Named Templates）允许定义可复用的模板片段，通常存放在 _helpers.tpl 文件中。使用 define 定义、template 或 include 调用。include 比 template 更推荐，因为它支持管道操作。"
        ],
        keyDifficulties: [
            "作用域与点号（.）：点号表示当前作用域。在顶层 . 代表根对象，在 with 块中 . 变为指定对象，在 range 循环中 . 变为当前元素。$ 始终指向根作用域，用于在嵌套块中访问全局对象。",
            "空白控制：模板引擎保留模板指令外的空白，可能导致 YAML 格式错误。使用 {{- 删除左侧空白，-}} 删除右侧空白。注意换行也是空白，需要谨慎处理以生成有效 YAML。",
            "流程控制语句：if/else 用于条件判断，判断为假的值包括 false、0、空字符串、nil、空集合。with 改变当前作用域。range 遍历列表或映射，循环中 . 被设置为当前元素。",
            "template vs include：template 直接渲染命名模板但不能链接管道；include 渲染后可继续处理（如 | indent 4）。Helm 推荐使用 include 以便更好控制输出格式，特别是处理 YAML 缩进时。"
        ],
        handsOnPath: [
            "使用 helm create mychart 创建示例 Chart，查看 templates/ 目录结构，理解 deployment.yaml、service.yaml、_helpers.tpl 等文件的作用。",
            "修改 values.yaml 添加自定义配置，在模板中使用 {{ .Values.xxx }} 引用，使用 helm template mychart 预览渲染结果，验证配置生效。",
            "在 _helpers.tpl 中定义命名模板（如通用标签），使用 include 在 deployment.yaml 中调用并添加适当缩进，对比 template 和 include 的输出差异。",
            "使用 helm lint mychart 检查 Chart 语法，使用 helm install --debug --dry-run 验证模板渲染，观察错误信息学习调试方法。"
        ],
        selfCheck: [
            "Helm 模板的分隔符是什么？如何在模板中访问 values.yaml 中定义的值？",
            "点号（.）在不同上下文中分别代表什么？$ 的作用是什么？",
            "if 条件判断中，哪些值被认为是假（false）？空列表是真还是假？",
            "如何控制模板生成的 YAML 中的空白？{{- 和 -}} 各自的作用是什么？",
            "template 和 include 指令的区别是什么？为什么推荐使用 include？"
        ],
        extensions: [
            "研究 Helm Chart 测试（helm test），了解如何编写测试 Pod 验证 Chart 部署的正确性。",
            "探索 Chart Hooks（pre-install、post-upgrade 等），了解如何在 Release 生命周期的特定时间点执行任务。",
            "学习 Helm Library Charts，了解如何创建只包含命名模板的共享库，供多个 Chart 引用。",
            "研究 Helm Schema Validation（values.schema.json），了解如何定义 JSON Schema 验证用户输入的 values。"
        ],
        sourceUrls: [
            "https://helm.sh/docs/chart_template_guide/getting_started/",
            "https://helm.sh/docs/chart_template_guide/builtin_objects/",
            "https://helm.sh/docs/chart_template_guide/functions_and_pipelines/",
            "https://helm.sh/docs/chart_template_guide/named_templates/"
        ]
    },
    "w7-1": {
        lessonId: "w7-1",
        background: [
            "RBAC（基于角色的访问控制）是 Kubernetes 中管理 API 访问权限的核心机制。通过定义角色和绑定，控制谁（用户、组、ServiceAccount）可以对哪些资源执行哪些操作。",
            "RBAC 有四个核心 API 对象：Role（命名空间级别的权限定义）、ClusterRole（集群级别的权限定义）、RoleBinding（将 Role 绑定到主体）、ClusterRoleBinding（将 ClusterRole 绑定到主体）。",
            "权限由三个维度定义：apiGroups（API 组，如 apps、batch、空字符串表示核心组）、resources（资源类型，如 pods、deployments）、verbs（操作动词，如 get、list、create、delete）。",
            "RBAC 是纯加法模型，没有'拒绝'规则。如果没有任何规则授予权限，则默认拒绝。多个角色的权限会叠加，满足任一规则即可执行操作。"
        ],
        keyDifficulties: [
            "作用域区分：Role/RoleBinding 是命名空间级别的，只能授予特定命名空间内的权限；ClusterRole/ClusterRoleBinding 是集群级别的，可以授予跨命名空间或集群范围资源（如 nodes、namespaces）的权限。",
            "ClusterRole 的灵活使用：ClusterRole 可以通过 RoleBinding 绑定到特定命名空间，实现'定义一次，多处使用'。内置的 view、edit、admin ClusterRole 常用于此模式。",
            "roleRef 不可变：RoleBinding/ClusterRoleBinding 创建后，roleRef 字段不能修改。如需更改引用的角色，必须删除并重新创建 Binding。",
            "权限提升防护：用户只能授予自己已拥有的权限。创建 RoleBinding 需要对目标 Role 有 bind 权限，或者拥有 Role 中定义的所有权限。"
        ],
        handsOnPath: [
            "创建一个 Role 授予对 default 命名空间 Pod 的只读权限（get、list、watch），使用 kubectl create role 命令或 YAML 文件。",
            "创建 RoleBinding 将 Role 绑定到一个用户或 ServiceAccount，使用 kubectl auth can-i --as=<user> 验证权限是否生效。",
            "使用内置 ClusterRole（view、edit、admin）通过 RoleBinding 授权，对比三者的权限差异（kubectl get clusterrole view -o yaml）。",
            "创建 ClusterRole 授予对所有命名空间 Deployment 的管理权限，通过 ClusterRoleBinding 绑定，验证跨命名空间操作。"
        ],
        selfCheck: [
            "Role 和 ClusterRole 的区别是什么？什么情况下必须使用 ClusterRole？",
            "RoleBinding 和 ClusterRoleBinding 各自的作用域是什么？ClusterRole 能否通过 RoleBinding 绑定？",
            "RBAC 的权限模型是加法还是减法？如果没有规则授权，默认行为是什么？",
            "如何验证某个用户对特定资源是否有权限？kubectl auth can-i 命令如何使用？",
            "内置的 view、edit、admin ClusterRole 分别授予什么级别的权限？"
        ],
        extensions: [
            "研究聚合 ClusterRole（Aggregated ClusterRoles），了解如何使用 aggregationRule 动态组合多个 ClusterRole。",
            "探索 Kubernetes 的默认角色和角色绑定（system:* 开头的），了解系统组件使用的权限配置。",
            "学习 RBAC 审计，了解如何配置审计日志记录权限检查和授权决策。",
            "研究 impersonation（模拟）权限，了解管理员如何安全地测试其他用户的权限。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
            "https://kubernetes.io/docs/reference/access-authn-authz/authorization/"
        ]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "w7-4": [
        {
            id: "w7-4-q1",
            question: "Helm 模板使用什么语法标记模板指令？",
            options: [
                "<% %>",
                "{{ }}",
                "[[ ]]",
                "${ }"
            ],
            answer: 1,
            rationale: "Helm 使用 Go template 语言，模板指令使用双花括号 {{ }} 作为分隔符。"
        },
        {
            id: "w7-4-q2",
            question: "如何在模板中访问 values.yaml 中定义的值？",
            options: [
                "{{ values.key }}",
                "{{ .Values.key }}",
                "{{ $values.key }}",
                "{{ @values.key }}"
            ],
            answer: 1,
            rationale: ".Values 是 Helm 内置对象，用于访问 values.yaml 中定义的配置值，如 {{ .Values.replicaCount }}。"
        },
        {
            id: "w7-4-q3",
            question: "点号（.）在 Helm 模板顶层代表什么？",
            options: [
                "当前文件路径",
                "根作用域，包含所有内置对象",
                "null 值",
                "当前命名空间"
            ],
            answer: 1,
            rationale: "在模板顶层，点号（.）代表根作用域，可以访问 .Release、.Values、.Chart 等所有内置对象。"
        },
        {
            id: "w7-4-q4",
            question: "以下哪个是 Helm 的内置对象？",
            options: [
                "Pod、Service、Deployment",
                "Release、Values、Chart、Capabilities",
                "Namespace、Node、Cluster",
                "Config、Secret、Volume"
            ],
            answer: 1,
            rationale: "Helm 内置对象包括 Release（发布信息）、Values（配置值）、Chart（元数据）、Files、Capabilities、Template。"
        },
        {
            id: "w7-4-q5",
            question: "{{- 和 -}} 的作用是什么？",
            options: [
                "注释模板代码",
                "控制空白，删除左侧或右侧的空白字符",
                "转义特殊字符",
                "定义变量"
            ],
            answer: 1,
            rationale: "{{- 删除左侧空白，-}} 删除右侧空白。用于控制生成的 YAML 格式，避免不必要的空行。"
        },
        {
            id: "w7-4-q6",
            question: "if 条件判断中，以下哪个值被认为是假（false）？",
            options: [
                "字符串 \"false\"",
                "数字 1",
                "空字符串 \"\"",
                "非空列表"
            ],
            answer: 2,
            rationale: "Helm 中判断为假的值包括：布尔 false、数字 0、空字符串、nil、空集合（空列表、空映射）。"
        },
        {
            id: "w7-4-q7",
            question: "with 语句的作用是什么？",
            options: [
                "定义循环",
                "改变当前作用域（.）为指定对象",
                "导入外部文件",
                "定义函数"
            ],
            answer: 1,
            rationale: "with 语句将当前作用域（.）改为指定对象，在块内可以直接访问该对象的属性，简化代码。"
        },
        {
            id: "w7-4-q8",
            question: "在 with 或 range 块内，如何访问根作用域？",
            options: [
                "使用 .root",
                "使用 $ 符号",
                "使用 @root",
                "无法访问"
            ],
            answer: 1,
            rationale: "$ 符号始终指向模板的根作用域，在 with 或 range 块内使用 $.Values 可以访问全局对象。"
        },
        {
            id: "w7-4-q9",
            question: "range 语句用于什么？",
            options: [
                "定义数值范围",
                "遍历列表或映射",
                "限制资源使用",
                "设置版本范围"
            ],
            answer: 1,
            rationale: "range 用于遍历集合（列表或映射），循环中 . 被设置为当前元素，可以对每个元素进行操作。"
        },
        {
            id: "w7-4-q10",
            question: "命名模板通常存放在哪个文件中？",
            options: [
                "values.yaml",
                "_helpers.tpl",
                "Chart.yaml",
                "templates.yaml"
            ],
            answer: 1,
            rationale: "以下划线开头的文件（如 _helpers.tpl）被认为不包含 Kubernetes 清单，用于存放命名模板和辅助函数。"
        },
        {
            id: "w7-4-q11",
            question: "template 和 include 指令的主要区别是什么？",
            options: [
                "template 更快",
                "include 可以将输出传递给其他函数（支持管道）",
                "template 支持更多参数",
                "include 是 Helm 2 的语法"
            ],
            answer: 1,
            rationale: "include 渲染命名模板后可以继续通过管道处理（如 | indent 4），而 template 不支持，推荐使用 include。"
        },
        {
            id: "w7-4-q12",
            question: "如何定义一个命名模板？",
            options: [
                "{{ template \"name\" }}",
                "{{ define \"name\" }}...{{ end }}",
                "{{ func \"name\" }}...{{ end }}",
                "{{ partial \"name\" }}...{{ end }}"
            ],
            answer: 1,
            rationale: "使用 {{ define \"name\" }}...{{ end }} 定义命名模板，模板名应包含 Chart 名称前缀以避免冲突。"
        },
        {
            id: "w7-4-q13",
            question: "quote 函数的作用是什么？",
            options: [
                "删除引号",
                "将值用双引号包裹",
                "转换为整数",
                "计算字符串长度"
            ],
            answer: 1,
            rationale: "quote 函数将值用双引号包裹，确保字符串在 YAML 中被正确解析，避免特殊字符导致的问题。"
        },
        {
            id: "w7-4-q14",
            question: "default 函数的作用是什么？",
            options: [
                "设置全局默认值",
                "当值为空或未定义时提供默认值",
                "重置所有配置",
                "删除默认命名空间"
            ],
            answer: 1,
            rationale: "default 函数在给定值为空时返回默认值，如 {{ .Values.name | default \"nginx\" }}，常用于处理可选配置。"
        },
        {
            id: "w7-4-q15",
            question: "如何在不实际安装的情况下预览 Helm 模板渲染结果？",
            options: [
                "helm show template",
                "helm template <chart> 或 helm install --dry-run --debug",
                "helm preview",
                "helm render"
            ],
            answer: 1,
            rationale: "helm template 渲染模板并输出结果，helm install --dry-run --debug 模拟安装过程，两者都不会实际部署。"
        }
    ],
    "w7-3": [
        {
            id: "w7-3-q1",
            question: "Helm 在 Kubernetes 生态中的角色是什么？",
            options: [
                "容器运行时",
                "Kubernetes 的包管理器",
                "网络插件",
                "监控工具"
            ],
            answer: 1,
            rationale: "Helm 是 Kubernetes 的包管理器，类似于 Linux 的 apt/yum 或 macOS 的 Homebrew，简化应用的打包、分发和部署。"
        },
        {
            id: "w7-3-q2",
            question: "Helm 的三个核心概念是什么？",
            options: [
                "Pod、Service、Deployment",
                "Chart、Repository、Release",
                "Image、Container、Volume",
                "Node、Cluster、Namespace"
            ],
            answer: 1,
            rationale: "Helm 三个核心概念：Chart（应用包）、Repository（存储和分享 Chart 的仓库）、Release（Chart 在集群中的运行实例）。"
        },
        {
            id: "w7-3-q3",
            question: "Chart 中的 Chart.yaml 文件的作用是什么？",
            options: [
                "定义 Kubernetes 资源模板",
                "存储默认配置值",
                "包含 Chart 的元数据（名称、版本、描述等）",
                "定义依赖关系"
            ],
            answer: 2,
            rationale: "Chart.yaml 是 Chart 的元数据文件，包含 apiVersion、name、version（Chart 版本）、appVersion（应用版本）、description 等信息。"
        },
        {
            id: "w7-3-q4",
            question: "values.yaml 文件的作用是什么？",
            options: [
                "定义 Chart 的元数据",
                "存储 Chart 的默认配置值，可在安装时覆盖",
                "定义 Kubernetes 资源",
                "存储 TLS 证书"
            ],
            answer: 1,
            rationale: "values.yaml 定义 Chart 的默认配置值，用户可以通过 -f 或 --set 在安装时覆盖这些值，模板中通过 .Values 访问。"
        },
        {
            id: "w7-3-q5",
            question: "如何覆盖 Chart 的默认配置值？",
            options: [
                "只能修改 Chart 源代码",
                "使用 -f custom-values.yaml 或 --set key=value",
                "使用 --config 参数",
                "必须修改 values.yaml 文件"
            ],
            answer: 1,
            rationale: "安装时可用 -f（或 --values）指定自定义 values 文件，或用 --set 直接设置单个值，两者可以组合使用。"
        },
        {
            id: "w7-3-q6",
            question: "Helm v3 相比 v2 最大的变化是什么？",
            options: [
                "不再支持 Chart",
                "移除了服务端组件 Tiller，直接使用 kubeconfig 认证",
                "不支持滚动更新",
                "必须使用私有仓库"
            ],
            answer: 1,
            rationale: "Helm v3 移除了 Tiller（服务端组件），直接使用 kubeconfig 进行认证，大幅提升安全性和简洁性。"
        },
        {
            id: "w7-3-q7",
            question: "Release 是什么？",
            options: [
                "Chart 的源代码版本",
                "Chart 在集群中运行的实例",
                "Helm CLI 的版本",
                "Kubernetes 的版本"
            ],
            answer: 1,
            rationale: "Release 是 Chart 在 Kubernetes 集群中的运行实例。同一个 Chart 可以安装多次，每次生成一个独立的 Release。"
        },
        {
            id: "w7-3-q8",
            question: "如何添加 Helm 仓库？",
            options: [
                "helm add repo <name> <url>",
                "helm repo add <name> <url>",
                "helm repository add <name> <url>",
                "helm install repo <name> <url>"
            ],
            answer: 1,
            rationale: "使用 helm repo add <name> <url> 添加仓库，如 helm repo add bitnami https://charts.bitnami.com/bitnami。"
        },
        {
            id: "w7-3-q9",
            question: "如何更新本地仓库的索引？",
            options: [
                "helm repo refresh",
                "helm repo update",
                "helm update repo",
                "helm sync repo"
            ],
            answer: 1,
            rationale: "helm repo update 从已添加的仓库获取最新的 Chart 索引，确保能搜索到最新版本的 Chart。"
        },
        {
            id: "w7-3-q10",
            question: "如何查看 Chart 的默认配置值？",
            options: [
                "helm get values <chart>",
                "helm show values <chart>",
                "helm inspect <chart>",
                "helm describe <chart>"
            ],
            answer: 1,
            rationale: "helm show values <chart> 显示 Chart 的默认 values.yaml 内容，帮助了解可配置的选项。"
        },
        {
            id: "w7-3-q11",
            question: "如何回滚 Release 到历史版本？",
            options: [
                "helm undo <release>",
                "helm rollback <release> <revision>",
                "helm revert <release>",
                "helm restore <release>"
            ],
            answer: 1,
            rationale: "helm rollback <release> <revision> 将 Release 回滚到指定的历史版本。可以用 helm history 查看版本历史。"
        },
        {
            id: "w7-3-q12",
            question: "helm history <release> 命令显示什么信息？",
            options: [
                "Chart 的开发历史",
                "Release 的所有 Revision 及其状态",
                "Kubernetes 集群的历史",
                "Helm CLI 的使用历史"
            ],
            answer: 1,
            rationale: "helm history 显示 Release 的所有修订版本（Revision），包括版本号、更新时间、状态、Chart 版本和描述。"
        },
        {
            id: "w7-3-q13",
            question: "Chart.yaml 中 apiVersion: v2 表示什么？",
            options: [
                "Kubernetes API 版本",
                "表示这是 Helm 3 格式的 Chart",
                "Chart 的第二个版本",
                "values.yaml 的版本"
            ],
            answer: 1,
            rationale: "apiVersion: v2 表示这是 Helm 3 格式的 Chart。Helm 2 使用 apiVersion: v1，两者在功能上有差异。"
        },
        {
            id: "w7-3-q14",
            question: "如何搜索 Artifact Hub 上的公共 Chart？",
            options: [
                "helm search repo <keyword>",
                "helm search hub <keyword>",
                "helm find <keyword>",
                "helm lookup <keyword>"
            ],
            answer: 1,
            rationale: "helm search hub 搜索 Artifact Hub（公共 Chart 聚合平台），helm search repo 搜索本地已添加的仓库。"
        },
        {
            id: "w7-3-q15",
            question: "Helm 3 中 Release 信息存储在哪里？",
            options: [
                "Tiller Pod 中",
                "本地文件系统",
                "Kubernetes 的 Secret 或 ConfigMap 中",
                "etcd 的专用空间"
            ],
            answer: 2,
            rationale: "Helm 3 将 Release 信息存储在 Kubernetes 的 Secret（默认）或 ConfigMap 中，与 Release 同命名空间。"
        }
    ],
    "w7-2": [
        {
            id: "w7-2-q1",
            question: "ServiceAccount 的主要用途是什么？",
            options: [
                "管理人类用户的身份",
                "为 Pod 和系统组件提供非人类身份标识",
                "存储密码和密钥",
                "管理网络策略"
            ],
            answer: 1,
            rationale: "ServiceAccount 是 Kubernetes 中的非人类身份标识，为 Pod、Job、系统组件等提供身份认证。"
        },
        {
            id: "w7-2-q2",
            question: "每个命名空间默认有哪个 ServiceAccount？",
            options: [
                "admin",
                "default",
                "system",
                "root"
            ],
            answer: 1,
            rationale: "每个命名空间创建时会自动创建名为 'default' 的 ServiceAccount，未指定 serviceAccountName 的 Pod 会使用它。"
        },
        {
            id: "w7-2-q3",
            question: "ServiceAccount 令牌挂载到 Pod 的什么位置？",
            options: [
                "/etc/kubernetes/token",
                "/var/run/secrets/kubernetes.io/serviceaccount/",
                "/tmp/serviceaccount/",
                "/opt/token/"
            ],
            answer: 1,
            rationale: "ServiceAccount 令牌默认挂载到 /var/run/secrets/kubernetes.io/serviceaccount/ 目录。"
        },
        {
            id: "w7-2-q4",
            question: "ServiceAccount 令牌目录包含哪些文件？",
            options: [
                "只有 token 文件",
                "token、ca.crt、namespace 三个文件",
                "token 和 password 两个文件",
                "config.yaml 文件"
            ],
            answer: 1,
            rationale: "令牌目录包含：token（JWT 令牌）、ca.crt（API Server CA 证书）、namespace（Pod 所在命名空间）。"
        },
        {
            id: "w7-2-q5",
            question: "投射卷令牌（Projected Volume Token）相比 Secret 令牌的优势是什么？",
            options: [
                "容量更大",
                "短期有效且自动轮换，更安全",
                "加载更快",
                "支持更多字符"
            ],
            answer: 1,
            rationale: "投射卷令牌是短期令牌，会自动轮换，比长期静态的 Secret 令牌更安全，是 Kubernetes 1.22+ 的推荐方式。"
        },
        {
            id: "w7-2-q6",
            question: "如何禁用 Pod 的 ServiceAccount 令牌自动挂载？",
            options: [
                "删除 default ServiceAccount",
                "设置 automountServiceAccountToken: false",
                "设置 mountToken: false",
                "无法禁用"
            ],
            answer: 1,
            rationale: "在 ServiceAccount 或 Pod spec 中设置 automountServiceAccountToken: false 可以禁用令牌自动挂载。"
        },
        {
            id: "w7-2-q7",
            question: "什么场景下应该禁用 ServiceAccount 令牌自动挂载？",
            options: [
                "所有 Pod 都应该禁用",
                "不需要访问 Kubernetes API 的 Pod，减少攻击面",
                "所有生产环境 Pod",
                "只有数据库 Pod"
            ],
            answer: 1,
            rationale: "对于不需要访问 Kubernetes API 的 Pod，禁用令牌挂载可以减少攻击面，遵循最小权限原则。"
        },
        {
            id: "w7-2-q8",
            question: "如何使用 kubectl 创建短期 ServiceAccount 令牌？",
            options: [
                "kubectl generate token <sa-name>",
                "kubectl create token <sa-name>",
                "kubectl get secret <sa-name>",
                "kubectl token create <sa-name>"
            ],
            answer: 1,
            rationale: "kubectl create token <sa-name> 使用 TokenRequest API 创建短期令牌，可以指定有效期和受众。"
        },
        {
            id: "w7-2-q9",
            question: "ServiceAccount 的 imagePullSecrets 字段有什么作用？",
            options: [
                "存储镜像内容",
                "Pod 使用此 SA 时自动获得拉取私有镜像的凭证",
                "限制可以拉取的镜像",
                "加速镜像下载"
            ],
            answer: 1,
            rationale: "ServiceAccount 可以关联 imagePullSecrets，使用该 SA 的 Pod 会自动继承这些凭证，无需单独配置。"
        },
        {
            id: "w7-2-q10",
            question: "如何让命名空间 A 的 ServiceAccount 访问命名空间 B 的资源？",
            options: [
                "无法实现跨命名空间访问",
                "在命名空间 B 创建 RoleBinding，subjects 中指定 SA 的 namespace 为 A",
                "将 ServiceAccount 移动到命名空间 B",
                "使用 ClusterRole 替代 Role"
            ],
            answer: 1,
            rationale: "在目标命名空间创建 RoleBinding，subjects 中指定源 ServiceAccount 及其 namespace，即可实现跨命名空间授权。"
        },
        {
            id: "w7-2-q11",
            question: "kubernetes.io/service-account-token 类型的 Secret 为什么被废弃？",
            options: [
                "存储空间太大",
                "长期静态令牌存在安全风险，推荐使用短期令牌",
                "不支持 RBAC",
                "与新版本 API 不兼容"
            ],
            answer: 1,
            rationale: "静态令牌不会过期，一旦泄露风险更大。推荐使用投射卷令牌或 TokenRequest API 获取短期、自动轮换的令牌。"
        },
        {
            id: "w7-2-q12",
            question: "ServiceAccount 和 User 的主要区别是什么？",
            options: [
                "ServiceAccount 权限更大",
                "ServiceAccount 是 K8s API 对象，User 是外部管理的",
                "User 只能访问集群",
                "没有区别"
            ],
            answer: 1,
            rationale: "ServiceAccount 是 Kubernetes API 对象，存储在 etcd 中；User 是外部身份，由外部系统（如 OIDC、证书）管理。"
        },
        {
            id: "w7-2-q13",
            question: "default ServiceAccount 默认有什么权限？",
            options: [
                "集群管理员权限",
                "只有基本的 API 发现权限（非常有限）",
                "所有命名空间的读取权限",
                "没有任何权限"
            ],
            answer: 1,
            rationale: "default ServiceAccount 默认只有非常有限的权限（API 发现），需要通过 RBAC 授予具体资源的访问权限。"
        },
        {
            id: "w7-2-q14",
            question: "TokenRequest API 的主要优势是什么？",
            options: [
                "创建速度更快",
                "可以指定受众（audience）和有效期，获取精细控制的短期令牌",
                "令牌永不过期",
                "不需要 RBAC 授权"
            ],
            answer: 1,
            rationale: "TokenRequest API 允许指定令牌的受众、有效期等参数，适合需要精细控制的场景，如外部服务认证。"
        },
        {
            id: "w7-2-q15",
            question: "Pod 如何指定使用特定的 ServiceAccount？",
            options: [
                "使用 annotations",
                "在 spec 中设置 serviceAccountName 字段",
                "使用 labels",
                "在 metadata 中设置 serviceAccount"
            ],
            answer: 1,
            rationale: "在 Pod spec 中通过 serviceAccountName 字段指定要使用的 ServiceAccount 名称。"
        }
    ],
    "w7-1": [
        {
            id: "w7-1-q1",
            question: "RBAC 的四个核心 API 对象是什么？",
            options: [
                "User、Group、Permission、Policy",
                "Role、ClusterRole、RoleBinding、ClusterRoleBinding",
                "Subject、Verb、Resource、Namespace",
                "Policy、Rule、Binding、Principal"
            ],
            answer: 1,
            rationale: "RBAC 使用 Role（命名空间权限）、ClusterRole（集群权限）、RoleBinding、ClusterRoleBinding 四个对象管理访问控制。"
        },
        {
            id: "w7-1-q2",
            question: "Role 和 ClusterRole 的主要区别是什么？",
            options: [
                "Role 权限更大",
                "Role 是命名空间级别的，ClusterRole 是集群级别的",
                "ClusterRole 只能用于系统组件",
                "两者完全相同"
            ],
            answer: 1,
            rationale: "Role 定义的权限仅在特定命名空间内有效；ClusterRole 可以定义集群范围的权限或可在多个命名空间复用的权限。"
        },
        {
            id: "w7-1-q3",
            question: "RBAC 规则中 verbs 字段定义什么？",
            options: [
                "资源类型",
                "API 组",
                "可以执行的操作（如 get、list、create、delete）",
                "目标命名空间"
            ],
            answer: 2,
            rationale: "verbs 定义允许的操作类型：get、list、watch（读取）；create、update、patch、delete（写入）；* 表示所有操作。"
        },
        {
            id: "w7-1-q4",
            question: "apiGroups: [\"\"] 表示什么？",
            options: [
                "所有 API 组",
                "核心 API 组（如 pods、services、configmaps）",
                "apps API 组",
                "无效配置"
            ],
            answer: 1,
            rationale: "空字符串 \"\" 表示核心 API 组（core），包含 Pod、Service、ConfigMap、Secret 等基础资源。"
        },
        {
            id: "w7-1-q5",
            question: "RoleBinding 可以引用 ClusterRole 吗？",
            options: [
                "不可以，只能引用 Role",
                "可以，ClusterRole 的权限会被限制在 RoleBinding 的命名空间内",
                "可以，但权限会扩展到整个集群",
                "取决于 ClusterRole 的配置"
            ],
            answer: 1,
            rationale: "RoleBinding 可以引用 ClusterRole，此时 ClusterRole 中定义的权限只在 RoleBinding 所在的命名空间内生效。"
        },
        {
            id: "w7-1-q6",
            question: "RBAC 的权限模型是什么类型？",
            options: [
                "黑名单模式（默认允许，显式拒绝）",
                "白名单模式（默认拒绝，显式允许，纯加法）",
                "混合模式（允许和拒绝规则共存）",
                "优先级模式（高优先级规则覆盖低优先级）"
            ],
            answer: 1,
            rationale: "RBAC 是纯加法的白名单模型，没有'拒绝'规则。默认拒绝所有操作，只有规则明确授权的操作才被允许。"
        },
        {
            id: "w7-1-q7",
            question: "如何验证用户是否有权限执行某操作？",
            options: [
                "kubectl get permission",
                "kubectl auth can-i <verb> <resource> --as=<user>",
                "kubectl describe user",
                "kubectl check-rbac"
            ],
            answer: 1,
            rationale: "kubectl auth can-i 命令可以检查当前用户或模拟其他用户（--as）是否有权限执行指定操作。"
        },
        {
            id: "w7-1-q8",
            question: "subjects 字段可以指定哪些类型的主体？",
            options: [
                "只能指定 User",
                "User、Group、ServiceAccount",
                "只能指定 ServiceAccount",
                "Pod、Deployment、Service"
            ],
            answer: 1,
            rationale: "subjects 可以指定三种类型：User（用户）、Group（用户组）、ServiceAccount（服务账号）。"
        },
        {
            id: "w7-1-q9",
            question: "RoleBinding 创建后，roleRef 字段可以修改吗？",
            options: [
                "可以随时修改",
                "不可以，必须删除并重新创建 Binding",
                "只有管理员可以修改",
                "可以通过 patch 修改"
            ],
            answer: 1,
            rationale: "roleRef 字段是不可变的（immutable），创建 RoleBinding 后不能修改引用的 Role，必须删除重建。"
        },
        {
            id: "w7-1-q10",
            question: "内置 ClusterRole 'view' 授予什么级别的权限？",
            options: [
                "完全管理权限",
                "大部分资源的只读访问权限（不包括 Secrets）",
                "所有资源的读写权限",
                "只能查看 Pod"
            ],
            answer: 1,
            rationale: "view ClusterRole 授予大部分资源的只读权限（get、list、watch），但出于安全考虑不包括 Secrets。"
        },
        {
            id: "w7-1-q11",
            question: "如何授予用户对特定 ConfigMap 的权限（而非所有 ConfigMap）？",
            options: [
                "使用 namespaceSelector",
                "在 rules 中使用 resourceNames 字段指定具体名称",
                "创建多个 Role",
                "无法实现细粒度控制"
            ],
            answer: 1,
            rationale: "resourceNames 字段可以将权限限制到特定名称的资源实例，实现细粒度的访问控制。"
        },
        {
            id: "w7-1-q12",
            question: "什么是子资源（subresource）？如何授予 Pod 日志的查看权限？",
            options: [
                "设置 resources: [\"pods\"], verbs: [\"logs\"]",
                "设置 resources: [\"pods/log\"], verbs: [\"get\"]",
                "设置 resources: [\"logs\"], verbs: [\"get\"]",
                "子资源无法单独授权"
            ],
            answer: 1,
            rationale: "子资源使用 resource/subresource 格式，如 pods/log、pods/exec。授予 Pod 日志权限需要 resources: [\"pods/log\"]。"
        },
        {
            id: "w7-1-q13",
            question: "权限提升防护（Privilege Escalation Prevention）的作用是什么？",
            options: [
                "阻止所有权限变更",
                "确保用户只能授予自己已拥有的权限",
                "限制管理员权限",
                "防止创建 ClusterRole"
            ],
            answer: 1,
            rationale: "Kubernetes 防止权限提升：用户创建 RoleBinding 时，只能绑定自己有权限的 Role，或者自己拥有 Role 中所有权限。"
        },
        {
            id: "w7-1-q14",
            question: "ClusterRoleBinding 和 RoleBinding 的区别是什么？",
            options: [
                "ClusterRoleBinding 只能绑定 ClusterRole",
                "ClusterRoleBinding 授予的权限在整个集群范围内有效",
                "RoleBinding 不能引用 ClusterRole",
                "两者作用相同"
            ],
            answer: 1,
            rationale: "ClusterRoleBinding 将权限授予整个集群范围；RoleBinding 只在特定命名空间内授予权限。"
        },
        {
            id: "w7-1-q15",
            question: "apps API 组包含哪些常见资源？",
            options: [
                "Pod、Service、ConfigMap",
                "Deployment、ReplicaSet、StatefulSet、DaemonSet",
                "Ingress、NetworkPolicy",
                "Job、CronJob"
            ],
            answer: 1,
            rationale: "apps API 组包含工作负载相关资源：Deployment、ReplicaSet、StatefulSet、DaemonSet、ControllerRevision。"
        }
    ]
}
