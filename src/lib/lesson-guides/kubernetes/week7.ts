import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "w7-3": {
        lessonId: "w7-3",
        background: [
            "【Helm 定位】官方文档：Helm 是 Kubernetes 的包管理器，'The package manager for Kubernetes'——类似 Linux 的 apt/yum 或 macOS 的 Homebrew，简化应用的打包、分发、安装和升级流程。",
            "【Chart 定义】官方文档：'A Helm package. It contains all of the resource definitions necessary to run an application'——Chart 是包含应用所有 K8s 资源定义的完整部署包。",
            "【Repository 定义】官方文档：'The place where charts can be collected and shared'——仓库是 Chart 的集中存储和分发平台，允许用户发现和共享 Kubernetes 应用配置。",
            "【Release 定义】官方文档：'An instance of a chart running in a Kubernetes cluster'——Release 是 Chart 在集群中的部署实例，同一 Chart 可多次安装，每次产生独立的 Release。",
            "【Helm v3 架构】Helm v3 移除了服务端组件 Tiller，直接使用 kubeconfig 认证，安全性和简洁性大幅提升。Release 信息存储在 Kubernetes 的 Secret（默认）或 ConfigMap 中。"
        ],
        keyDifficulties: [
            "【Chart.yaml 必填字段】官方文档要求三个必填字段：apiVersion（v2 表示 Helm 3）、name（Chart 名称）、version（Chart 版本，必须遵循 SemVer 2 标准）。可选字段包括 appVersion、description、dependencies 等。",
            "【values.yaml 配置覆盖】官方文档：values.yaml 定义默认配置，模板通过 .Values 对象访问。安装时可通过 '-f/--values' 指定覆盖文件或 '--set' 命令行直接指定参数覆盖默认值。",
            "【Release 生命周期管理】官方命令：helm install 创建 Release，helm upgrade 更新现有 Release，'helm rollback [RELEASE] [REVISION]' 回滚到指定版本，helm uninstall 移除 Release。",
            "【仓库管理命令】官方文档：'helm repo add' 添加新仓库，'helm repo list' 列出已配置仓库，'helm repo update' 同步最新 Chart 信息，'helm search hub/repo' 搜索 Chart。",
            "【Chart 目录结构】标准结构包括：Chart.yaml（元数据）、values.yaml（默认配置）、templates/（Kubernetes 清单模板）、charts/（依赖 Chart）、crds/（自定义资源定义）。"
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
            "【ServiceAccount 定义】官方文档：'a type of non-human account that, in Kubernetes, provides a distinct identity in a Kubernetes cluster'——为 Pod、系统组件和集群内外实体提供身份标识，使用签名 JWT 进行认证。",
            "【命名空间绑定】官方文档：'Each service account is bound to a Kubernetes namespace. Every namespace gets a default ServiceAccount upon creation'——每个命名空间自动创建 default ServiceAccount。",
            "【令牌类型演进】官方文档：v1.22+ 使用 TokenRequest API 获取'short-lived, automatically rotating token'并以投射卷挂载；传统 Secret 令牌'don't expire and don't rotate'，因安全风险不再推荐。",
            "【default 权限限制】官方文档：'The default service accounts in each namespace get no permissions by default other than the default API discovery permissions'——default SA 几乎没有实际权限，需通过 RBAC 授予。",
            "【自动挂载控制】官方文档：'To prevent Kubernetes from automatically injecting credentials...set automountServiceAccountToken: false'——可在 ServiceAccount 或 Pod 级别禁用令牌自动挂载。"
        ],
        keyDifficulties: [
            "【令牌挂载路径】官方文档：令牌挂载到 /var/run/secrets/kubernetes.io/serviceaccount/ 目录，包含三个文件——token（JWT 令牌）、ca.crt（API Server CA 证书）、namespace（所在命名空间）。",
            "【投射卷令牌优势】官方文档：'In v1.22+, tokens have bounded lifetimes with expirationSeconds'——短期令牌自动轮换，到期自动刷新，比永久 Secret 令牌安全得多。",
            "【TokenRequest API】官方文档：'Request a short-lived service account token from within your own application code. The token expires automatically and can rotate upon expiration'——支持应用程序动态请求令牌。",
            "【跨命名空间授权】官方文档：'You can use RBAC to allow service accounts in one namespace to perform actions on resources in a different namespace'——通过 RoleBinding 的 subjects.namespace 实现。",
            "【imagePullSecrets 关联】官方文档：ServiceAccount 可关联 imagePullSecrets，'Authenticating to a private image registry'——Pod 使用该 SA 时自动继承拉取凭证。"
        ],
        handsOnPath: [
            "创建 ServiceAccount：kubectl create serviceaccount mysa -n default，使用 kubectl get sa mysa -o yaml 查看其结构和关联的 secrets。",
            "创建使用自定义 SA 的 Pod，exec 进入后查看 /var/run/secrets/kubernetes.io/serviceaccount/ 目录下的 token、ca.crt、namespace 文件内容。",
            "使用 kubectl create token mysa --duration=1h 创建短期令牌，使用 curl -H 'Authorization: Bearer <token>' 调用 API Server 验证身份。",
            "配置 automountServiceAccountToken: false 的 Pod，验证令牌目录不存在，理解最小权限原则的安全价值。",
            "创建 RoleBinding 将某命名空间的 SA 绑定到另一命名空间的 Role，验证跨命名空间访问权限。"
        ],
        selfCheck: [
            "ServiceAccount 与 User 账户的本质区别是什么？为什么说 SA 是'non-human account'？",
            "投射卷令牌（Projected Volume Token）相比 Secret 令牌有什么优势？为什么 v1.22+ 推荐前者？",
            "令牌挂载目录包含哪三个文件？它们分别用于什么目的？",
            "如何禁用 Pod 的 ServiceAccount 令牌自动挂载？在什么场景下应该禁用？",
            "default ServiceAccount 默认有什么权限？为什么说它'几乎没有实际权限'？",
            "如何让一个命名空间的 ServiceAccount 访问另一个命名空间的资源？"
        ],
        extensions: [
            "研究 Bound Service Account Token（KEP-1205），了解令牌如何与 Pod 生命周期绑定，Pod 删除后令牌自动失效。",
            "探索投射卷的高级配置：audience（令牌受众，限制令牌用途）、expirationSeconds（自定义过期时间）。",
            "学习 Workload Identity 云集成（AWS IRSA、GCP Workload Identity、Azure Workload Identity），了解 SA 与云 IAM 的桥接。",
            "研究 kubectl create token 的 --bound-object-kind 参数（v1.31+），了解如何创建绑定到特定 Node 的令牌。"
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
            "【RBAC 核心定义】官方文档：'Role-based access control (RBAC) is a method of regulating access to computer or network resources based on the roles of individual users'——基于用户角色调控资源访问的方法，Kubernetes 1.8+ GA。",
            "【四大 API 对象】官方文档明确：Role（命名空间权限）、ClusterRole（集群权限）、RoleBinding（命名空间内绑定）、ClusterRoleBinding（集群范围绑定）。Role/ClusterRole 定义权限规则，Binding 将规则绑定到主体。",
            "【规则三要素】官方文档：rules 由三部分组成——apiGroups（API 组，'' 表示核心组）、resources（资源类型如 pods、deployments）、verbs（操作动词如 get、list、create、update、delete）。",
            "【纯加法模型】官方文档强调：'RBAC only allows additive permissions—there are no deny rules'——权限只能叠加，没有拒绝规则。默认拒绝所有操作，只有被规则显式授予的操作才被允许。",
            "【主体类型】官方文档：subjects 支持三种类型——User（外部用户）、Group（用户组）、ServiceAccount（Kubernetes 原生身份）。User 和 Group 由外部认证系统提供。"
        ],
        keyDifficulties: [
            "【作用域关键区分】官方文档：'A Role always sets permissions within a particular namespace'——Role 限于单个命名空间；ClusterRole 可授予集群范围资源（nodes、namespaces）或所有命名空间的资源访问权限。",
            "【ClusterRole 复用模式】官方文档：'A RoleBinding may reference any ClusterRole in the same cluster'——RoleBinding 可引用 ClusterRole，此时权限限于 RoleBinding 所在命名空间。内置 view/edit/admin 常用此模式。",
            "【roleRef 不可变】官方文档明确：'The roleRef field in a binding is immutable'——创建后不能修改引用的角色。'To change the roleRef for a binding, you need to remove the binding object and create a replacement'。",
            "【权限提升防护】官方文档：'RBAC API prevents users from escalating privileges'——用户只能授予自己已拥有的权限。创建/更新 RoleBinding 需要：对目标 Role 有 bind 权限，或已拥有 Role 中的所有权限。",
            "【子资源控制】官方文档：'Some resources have subresources, for example pods have logs subresource'——使用 pods/log、pods/exec、pods/status 格式控制子资源访问，实现更细粒度的权限管理。"
        ],
        handsOnPath: [
            "创建只读 Role：kubectl create role pod-reader --verb=get,list,watch --resource=pods -n default，使用 kubectl get role pod-reader -o yaml 查看生成的规则结构。",
            "创建 RoleBinding 将 Role 绑定到 ServiceAccount：kubectl create rolebinding read-pods --role=pod-reader --serviceaccount=default:mysa -n default。",
            "使用 kubectl auth can-i 验证权限：kubectl auth can-i list pods --as=system:serviceaccount:default:mysa -n default，对比授权前后的结果差异。",
            "测试 ClusterRole 复用：kubectl create rolebinding view-binding --clusterrole=view --user=jane -n dev，验证 jane 只能访问 dev 命名空间资源。",
            "查看内置 ClusterRole：kubectl get clusterrole view -o yaml，对比 view、edit、admin 的规则差异（特别是 Secrets 访问权限）。"
        ],
        selfCheck: [
            "RBAC 的四个核心 API 对象分别是什么？Role 和 ClusterRole 的作用域有什么区别？",
            "官方文档说'RBAC only allows additive permissions'是什么意思？如果没有规则授权，默认行为是什么？",
            "RoleBinding 能否引用 ClusterRole？如果能，权限范围是什么？",
            "为什么 roleRef 字段是不可变的？如何修改 RoleBinding 引用的角色？",
            "如何使用 kubectl auth can-i 命令验证权限？--as 参数的作用是什么？",
            "什么是子资源（subresource）？如何授予查看 Pod 日志但不能 exec 进入 Pod 的权限？"
        ],
        extensions: [
            "研究聚合 ClusterRole（Aggregated ClusterRoles），了解 aggregationRule 和 clusterRoleSelectors 如何动态组合多个 ClusterRole 的权限。",
            "探索默认 ClusterRoleBindings（如 system:basic-user、system:discovery），了解未认证用户和所有认证用户的默认权限。",
            "学习 RBAC 与审计日志的集成，了解如何记录和分析授权决策（Audit Policy 中的 authorization.k8s.io 相关事件）。",
            "研究 impersonation 权限（users/groups/serviceaccounts 资源的 impersonate 动词），了解管理员如何安全地测试其他身份的权限。"
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
            question: "官方文档对 Helm 的定位是什么？",
            options: [
                "'The package manager for Kubernetes'——Kubernetes 的包管理器",
                "Kubernetes 的容器运行时",
                "Kubernetes 的网络插件",
                "Kubernetes 的监控平台"
            ],
            answer: 0,
            rationale: "官方文档定义 Helm 为'The package manager for Kubernetes'，类似 Linux 的 apt/yum 或 macOS 的 Homebrew。"
        },
        {
            id: "w7-3-q2",
            question: "官方文档对 Chart 的定义是什么？",
            options: [
                "Kubernetes 的配置文件格式",
                "Helm 的版本控制系统",
                "'A Helm package that contains all resource definitions necessary to run an application'",
                "Kubernetes 的日志收集器"
            ],
            answer: 2,
            rationale: "官方文档：'A Helm package. It contains all of the resource definitions necessary to run an application'——包含运行应用所需全部资源定义的 Helm 包。"
        },
        {
            id: "w7-3-q3",
            question: "官方文档对 Release 的定义是什么？",
            options: [
                "Chart 的源代码版本",
                "'An instance of a chart running in a Kubernetes cluster'——Chart 在集群中的部署实例",
                "Helm CLI 的发布版本",
                "Kubernetes API 的版本号"
            ],
            answer: 1,
            rationale: "官方文档：'An instance of a chart running in a Kubernetes cluster'——同一 Chart 可多次安装，每次产生独立的 Release。"
        },
        {
            id: "w7-3-q4",
            question: "Chart.yaml 文件的三个必填字段是什么？",
            options: [
                "name、description、maintainers",
                "version、appVersion、keywords",
                "type、home、sources",
                "apiVersion、name、version——API 版本、Chart 名称、Chart 版本"
            ],
            answer: 3,
            rationale: "官方文档要求三个必填字段：apiVersion（v2 表示 Helm 3）、name（Chart 名称）、version（必须遵循 SemVer 2 标准）。"
        },
        {
            id: "w7-3-q5",
            question: "values.yaml 文件的作用是什么？",
            options: [
                "定义 Chart 的默认配置值，模板通过 .Values 对象访问",
                "存储 Kubernetes 集群的连接信息",
                "定义 Chart 的元数据信息",
                "存储 TLS 证书和密钥"
            ],
            answer: 0,
            rationale: "官方文档：values.yaml 定义默认配置参数，模板通过 .Values 对象引用，用户可在安装时覆盖这些默认值。"
        },
        {
            id: "w7-3-q6",
            question: "如何在安装时覆盖 Chart 的默认配置？",
            options: [
                "只能直接修改 Chart 源代码中的 values.yaml",
                "使用 --config 参数指定配置文件",
                "使用 '-f/--values' 指定覆盖文件或 '--set' 命令行指定参数",
                "必须在 Chart.yaml 中定义覆盖规则"
            ],
            answer: 2,
            rationale: "官方文档：可通过 '-f/--values' 指定 YAML 覆盖文件或 '--set' 命令行直接指定参数，两者可组合使用。"
        },
        {
            id: "w7-3-q7",
            question: "Helm v3 相比 v2 最重要的架构变化是什么？",
            options: [
                "增加了更多的 Chart 类型支持",
                "移除了服务端组件 Tiller，直接使用 kubeconfig 认证",
                "引入了新的模板语法",
                "改变了 Release 的命名规则"
            ],
            answer: 1,
            rationale: "Helm v3 移除了 Tiller（服务端组件），直接使用 kubeconfig 进行认证，大幅提升了安全性和简洁性。"
        },
        {
            id: "w7-3-q8",
            question: "添加 Helm 仓库的正确命令是什么？",
            options: [
                "helm add repo <name> <url>",
                "helm repository add <name> <url>",
                "helm install repo <name> <url>",
                "helm repo add <name> <url>"
            ],
            answer: 3,
            rationale: "官方命令：'helm repo add' 添加新仓库，如 helm repo add bitnami https://charts.bitnami.com/bitnami。"
        },
        {
            id: "w7-3-q9",
            question: "官方文档中回滚 Release 的命令格式是什么？",
            options: [
                "'helm rollback [RELEASE] [REVISION]'——回滚到指定的历史版本",
                "helm undo <release> --to-version <n>",
                "helm restore <release> <revision>",
                "helm revert <release> --revision <n>"
            ],
            answer: 0,
            rationale: "官方文档：'helm rollback [RELEASE] [REVISION]' 回滚到指定版本，可用 helm history 查看版本历史。"
        },
        {
            id: "w7-3-q10",
            question: "Helm 3 中 Release 信息存储在哪里？",
            options: [
                "Tiller Pod 的内存中",
                "用户本地的 .helm 目录",
                "Kubernetes 的 Secret（默认）或 ConfigMap 中",
                "etcd 的专用命名空间"
            ],
            answer: 2,
            rationale: "Helm 3 将 Release 信息存储在 Kubernetes 的 Secret（默认）或 ConfigMap 中，与 Release 同命名空间。"
        },
        {
            id: "w7-3-q11",
            question: "helm search hub 和 helm search repo 的区别是什么？",
            options: [
                "两者功能完全相同",
                "hub 搜索 Artifact Hub 公共仓库，repo 搜索本地已添加的仓库",
                "hub 搜索本地仓库，repo 搜索远程仓库",
                "hub 用于生产环境，repo 用于开发环境"
            ],
            answer: 1,
            rationale: "官方文档：helm search hub 在 Artifact Hub 搜索公开 Chart，helm search repo 在已添加的本地仓库中搜索。"
        },
        {
            id: "w7-3-q12",
            question: "Chart.yaml 中 apiVersion: v2 表示什么？",
            options: [
                "Kubernetes API 版本 v2",
                "Chart 的第二次修订版本",
                "values.yaml 的格式版本",
                "表示这是 Helm 3 格式的 Chart"
            ],
            answer: 3,
            rationale: "apiVersion: v2 表示这是 Helm 3 格式的 Chart。Helm 2 使用 apiVersion: v1，两者在功能和依赖管理上有差异。"
        }
    ],
    "w7-2": [
        {
            id: "w7-2-q1",
            question: "官方文档对 ServiceAccount 的定义是什么？",
            options: [
                "管理人类用户登录凭证的对象",
                "存储应用配置的资源类型",
                "'a type of non-human account that provides a distinct identity in a Kubernetes cluster'",
                "控制 Pod 网络访问的策略"
            ],
            answer: 2,
            rationale: "官方文档定义：'a type of non-human account that, in Kubernetes, provides a distinct identity in a Kubernetes cluster'——为 Pod、系统组件提供非人类身份标识。"
        },
        {
            id: "w7-2-q2",
            question: "官方文档关于命名空间与 ServiceAccount 的描述是什么？",
            options: [
                "'Every namespace gets a default ServiceAccount upon creation'——每个命名空间自动创建 default SA",
                "ServiceAccount 是集群级别资源，不绑定命名空间",
                "必须手动在每个命名空间创建 ServiceAccount",
                "一个 ServiceAccount 可以跨多个命名空间使用"
            ],
            answer: 0,
            rationale: "官方文档：'Each service account is bound to a Kubernetes namespace. Every namespace gets a default ServiceAccount upon creation'。"
        },
        {
            id: "w7-2-q3",
            question: "ServiceAccount 令牌挂载到 Pod 的什么位置？",
            options: [
                "/etc/kubernetes/serviceaccount/",
                "/opt/secrets/token/",
                "/tmp/k8s/serviceaccount/",
                "/var/run/secrets/kubernetes.io/serviceaccount/"
            ],
            answer: 3,
            rationale: "官方文档：令牌挂载到 /var/run/secrets/kubernetes.io/serviceaccount/ 目录，包含 token、ca.crt、namespace 三个文件。"
        },
        {
            id: "w7-2-q4",
            question: "令牌挂载目录包含哪些文件？",
            options: [
                "只有 token 文件",
                "token（JWT 令牌）、ca.crt（CA 证书）、namespace（所在命名空间）三个文件",
                "token 和 kubeconfig 两个文件",
                "credentials.json 单个文件"
            ],
            answer: 1,
            rationale: "官方文档：令牌目录包含三个文件——token（JWT 令牌）、ca.crt（API Server CA 证书）、namespace（Pod 所在命名空间）。"
        },
        {
            id: "w7-2-q5",
            question: "官方文档对 v1.22+ 投射卷令牌的描述是什么？",
            options: [
                "'short-lived, automatically rotating token'——短期且自动轮换的令牌",
                "永久有效的静态令牌",
                "需要手动刷新的令牌",
                "只能用于集群内部通信的令牌"
            ],
            answer: 0,
            rationale: "官方文档：v1.22+ 使用 TokenRequest API 获取'short-lived, automatically rotating token'并以投射卷挂载，比传统 Secret 令牌更安全。"
        },
        {
            id: "w7-2-q6",
            question: "官方文档关于禁用令牌自动挂载的配置是什么？",
            options: [
                "设置 disableToken: true",
                "设置 tokenMount: disabled",
                "'set automountServiceAccountToken: false'——可在 SA 或 Pod 级别禁用",
                "删除 default ServiceAccount"
            ],
            answer: 2,
            rationale: "官方文档：'To prevent Kubernetes from automatically injecting credentials...set automountServiceAccountToken: false'——可在 ServiceAccount 或 Pod 级别禁用。"
        },
        {
            id: "w7-2-q7",
            question: "如何使用 kubectl 创建短期 ServiceAccount 令牌？",
            options: [
                "kubectl generate token <sa-name>",
                "kubectl create token <sa-name>——使用 TokenRequest API",
                "kubectl get secret <sa-name> -o jsonpath='{.data.token}'",
                "kubectl token request <sa-name>"
            ],
            answer: 1,
            rationale: "kubectl create token <sa-name> 使用 TokenRequest API 创建短期令牌，可通过 --duration 指定有效期。"
        },
        {
            id: "w7-2-q8",
            question: "官方文档对 default ServiceAccount 权限的描述是什么？",
            options: [
                "拥有所在命名空间的完整管理权限",
                "拥有集群级别的只读权限",
                "与 cluster-admin 相同的权限",
                "'get no permissions by default other than the default API discovery permissions'——几乎没有实际权限"
            ],
            answer: 3,
            rationale: "官方文档：'The default service accounts in each namespace get no permissions by default other than the default API discovery permissions'——需要通过 RBAC 授予具体权限。"
        },
        {
            id: "w7-2-q9",
            question: "ServiceAccount 与 User 账户的本质区别是什么？",
            options: [
                "SA 是 Kubernetes API 对象存储在 etcd，User 是外部系统管理的身份",
                "SA 权限更大，User 权限更小",
                "SA 只能用于 Pod，User 只能用于 kubectl",
                "两者没有本质区别，可以互换使用"
            ],
            answer: 0,
            rationale: "ServiceAccount 是 Kubernetes 原生 API 对象，存储在 etcd 中；User 是外部身份，由外部认证系统（如 OIDC、X.509 证书）管理。"
        },
        {
            id: "w7-2-q10",
            question: "官方文档对 imagePullSecrets 关联的说明是什么？",
            options: [
                "imagePullSecrets 只能在 Pod 级别配置",
                "imagePullSecrets 会加密存储的镜像",
                "'Authenticating to a private image registry'——SA 关联后 Pod 自动继承拉取凭证",
                "imagePullSecrets 用于限制可拉取的镜像列表"
            ],
            answer: 2,
            rationale: "官方文档：ServiceAccount 可关联 imagePullSecrets，'Authenticating to a private image registry'——Pod 使用该 SA 时自动继承拉取凭证。"
        },
        {
            id: "w7-2-q11",
            question: "如何让一个命名空间的 ServiceAccount 访问另一个命名空间的资源？",
            options: [
                "将 ServiceAccount 复制到目标命名空间",
                "在目标命名空间创建 RoleBinding，subjects.namespace 指定源命名空间",
                "ServiceAccount 天然可以跨命名空间访问",
                "只能使用 ClusterRoleBinding 实现"
            ],
            answer: 1,
            rationale: "官方文档：'You can use RBAC to allow service accounts in one namespace to perform actions on resources in a different namespace'——通过 RoleBinding 的 subjects.namespace 实现。"
        },
        {
            id: "w7-2-q12",
            question: "官方文档对 TokenRequest API 优势的描述是什么？",
            options: [
                "创建的令牌永不过期",
                "不需要任何 RBAC 授权即可使用",
                "只能在 Pod 内部调用",
                "'Request a short-lived token...expires automatically and can rotate'——支持指定受众和自动过期"
            ],
            answer: 3,
            rationale: "官方文档：TokenRequest API 可'Request a short-lived service account token...The token expires automatically and can rotate upon expiration'——支持精细控制。"
        }
    ],
    "w7-1": [
        {
            id: "w7-1-q1",
            question: "官方文档对 RBAC 的定义是什么？",
            options: [
                "一种网络访问控制机制",
                "一种容器运行时安全机制",
                "'a method of regulating access to computer or network resources based on the roles of individual users'",
                "一种存储加密机制"
            ],
            answer: 2,
            rationale: "官方文档定义 RBAC 为'a method of regulating access to computer or network resources based on the roles of individual users'——基于用户角色调控资源访问。"
        },
        {
            id: "w7-1-q2",
            question: "RBAC 的四个核心 API 对象是什么？",
            options: [
                "Role、ClusterRole、RoleBinding、ClusterRoleBinding",
                "User、Group、Permission、Policy",
                "Subject、Verb、Resource、Namespace",
                "Policy、Rule、Binding、Principal"
            ],
            answer: 0,
            rationale: "官方文档明确：RBAC 使用 Role、ClusterRole、RoleBinding、ClusterRoleBinding 四个 API 对象管理访问控制。"
        },
        {
            id: "w7-1-q3",
            question: "官方文档对 Role 作用域的描述是什么？",
            options: [
                "Role 可以跨命名空间生效",
                "Role 只能授予集群范围资源的权限",
                "Role 与 ClusterRole 作用域相同",
                "'A Role always sets permissions within a particular namespace'——限于特定命名空间"
            ],
            answer: 3,
            rationale: "官方文档明确：'A Role always sets permissions within a particular namespace'——Role 的权限只在单个命名空间内有效。"
        },
        {
            id: "w7-1-q4",
            question: "官方文档对 RBAC 权限模型的描述是什么？",
            options: [
                "支持允许和拒绝两种规则",
                "'RBAC only allows additive permissions—there are no deny rules'——只有加法，没有拒绝规则",
                "高优先级规则覆盖低优先级规则",
                "默认允许所有操作"
            ],
            answer: 1,
            rationale: "官方文档强调：'RBAC only allows additive permissions—there are no deny rules'——权限只能叠加，没有拒绝规则。"
        },
        {
            id: "w7-1-q5",
            question: "apiGroups: [\"\"] 在 RBAC 规则中表示什么？",
            options: [
                "所有 API 组",
                "apps API 组",
                "核心 API 组（core group，包含 pods、services、configmaps 等）",
                "无效配置"
            ],
            answer: 2,
            rationale: "空字符串 '' 表示核心 API 组（core），包含 Pod、Service、ConfigMap、Secret、PersistentVolumeClaim 等基础资源。"
        },
        {
            id: "w7-1-q6",
            question: "官方文档对 RoleBinding 引用 ClusterRole 的说明是什么？",
            options: [
                "RoleBinding 只能引用 Role",
                "权限会扩展到整个集群",
                "'A RoleBinding may reference any ClusterRole'——可以引用，权限限于 RoleBinding 命名空间",
                "需要特殊的 annotation 才能引用"
            ],
            answer: 2,
            rationale: "官方文档：'A RoleBinding may reference any ClusterRole in the same cluster'，此时权限限于 RoleBinding 所在命名空间。"
        },
        {
            id: "w7-1-q7",
            question: "官方文档对 roleRef 字段的说明是什么？",
            options: [
                "'The roleRef field in a binding is immutable'——创建后不可修改",
                "roleRef 可以随时通过 patch 修改",
                "只有 cluster-admin 可以修改 roleRef",
                "roleRef 在 24 小时后自动过期"
            ],
            answer: 0,
            rationale: "官方文档明确：'The roleRef field in a binding is immutable'，需要删除并重新创建 Binding 才能更改引用的角色。"
        },
        {
            id: "w7-1-q8",
            question: "subjects 字段支持哪些类型的主体？",
            options: [
                "只支持 ServiceAccount",
                "只支持 User 和 Group",
                "Pod、Deployment、Service",
                "User、Group、ServiceAccount 三种类型"
            ],
            answer: 3,
            rationale: "官方文档：subjects 支持三种类型——User（外部用户）、Group（用户组）、ServiceAccount（Kubernetes 原生身份）。"
        },
        {
            id: "w7-1-q9",
            question: "如何验证某个用户是否有权限执行特定操作？",
            options: [
                "kubectl get permission <user>",
                "kubectl describe role",
                "kubectl auth can-i <verb> <resource> --as=<user>",
                "kubectl check-rbac <user>"
            ],
            answer: 2,
            rationale: "kubectl auth can-i 命令可以检查当前用户或模拟其他用户（--as）是否有权限执行指定操作。"
        },
        {
            id: "w7-1-q10",
            question: "官方文档对权限提升防护的描述是什么？",
            options: [
                "任何用户都可以创建任意权限的 Role",
                "'RBAC API prevents users from escalating privileges'——用户只能授予自己已拥有的权限",
                "只有 cluster-admin 可以创建 Role",
                "权限提升防护只在生产环境启用"
            ],
            answer: 1,
            rationale: "官方文档：'RBAC API prevents users from escalating privileges'——用户创建 RoleBinding 时只能授予自己已拥有的权限。"
        },
        {
            id: "w7-1-q11",
            question: "如何授予查看 Pod 日志但不能 exec 进入 Pod 的权限？",
            options: [
                "resources: [\"pods\"], verbs: [\"logs\"]",
                "resources: [\"logs\"], verbs: [\"get\"]",
                "resources: [\"pods/log\"], verbs: [\"get\"]——使用子资源格式",
                "子资源无法单独授权"
            ],
            answer: 2,
            rationale: "官方文档：子资源使用 resource/subresource 格式，如 pods/log、pods/exec。授予 Pod 日志权限需要 resources: [\"pods/log\"]。"
        },
        {
            id: "w7-1-q12",
            question: "内置 ClusterRole 'view' 的特点是什么？",
            options: [
                "授予完全管理权限",
                "授予所有资源的读写权限",
                "只能查看 Pod 资源",
                "授予大部分资源的只读权限，但出于安全考虑不包括 Secrets"
            ],
            answer: 3,
            rationale: "官方文档：view ClusterRole 授予大部分资源的只读权限（get、list、watch），但 Secrets 被排除以防止权限提升。"
        }
    ]
}
