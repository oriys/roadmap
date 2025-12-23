import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "w10-1": {
        lessonId: "w10-1",
        background: [
            "【三大组件架构】官方架构文档：ArgoCD 由三个核心组件构成——API Server 是'gRPC/REST server exposing APIs for external systems'负责应用管理和状态报告；Repository Server 是内部服务'maintaining local cache of Git repositories'；Application Controller 是'Kubernetes controller continuously monitoring running applications and comparing current live state against desired target state'。",
            "【API Server 职责】官方文档：API Server 负责'application management and status reporting'、'invoking of application operations (sync, rollback, user-defined actions)'、凭证管理、外部身份提供商认证、RBAC 策略执行、Git webhook 事件处理。是 ArgoCD 的外部接口。",
            "【Repository Server 职责】官方文档：Repository Server 负责'generating and returning Kubernetes manifests when provided: repository URL, revision (commit, tag, branch), application path, template specific settings'——根据输入参数渲染生成清单文件，支持 Helm values 和模板参数。",
            "【Application Controller 职责】官方文档：Application Controller 是核心调和循环，职责包括'detects OutOfSync application conditions'、'takes corrective actions when configured'、'invokes lifecycle hooks (PreSync, Sync, PostSync)'——检测差异、执行同步、触发钩子。",
            "【Application CRD 核心字段】官方声明式配置文档：source 指定配置来源（repoURL、targetRevision、path/chart）；destination 指定部署目标（'accepts either server or name, but not both'）；project 关联权限边界；syncPolicy 控制同步策略。Finalizer 'resources-finalizer.argocd.argoproj.io' 启用级联删除。"
        ],
        keyDifficulties: [
            "【三组件职责分工】API Server 负责认证授权、外部接口和 webhook 处理；Repository Server 负责克隆仓库、缓存和模板渲染（Helm/Kustomize）生成清单；Application Controller 是核心调和循环，持续比较实际状态与期望状态，检测 OutOfSync 并执行同步。",
            "【Application CRD 关键字段】source 配置来源（repoURL、targetRevision、path/chart）；destination 配置目标（server/name、namespace）；project 定义权限边界；syncPolicy 配置同步策略。Git 源和 Helm 源的配置方式不同。",
            "【同步状态与健康状态】Sync Status 表示集群状态与 Git 的一致性（Synced/OutOfSync）；Health Status 表示应用资源的运行状态（Healthy/Progressing/Degraded/Suspended）。两者独立判断，应用可能 Synced 但 Degraded。",
            "【AppProject 安全边界】Project 控制应用可以访问的源仓库和目标集群。部署到 ArgoCD 命名空间的 Project 具有特殊权限，需要严格限制。通过 roles 实现细粒度访问控制。"
        ],
        handsOnPath: [
            "【来源: ArgoCD 快速入门】在本地 Kubernetes 集群安装 ArgoCD：kubectl create namespace argocd && kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml。前提条件包括 kubectl 命令行工具、kubeconfig 文件和集群启用的 CoreDNS。",
            "【来源: ArgoCD 快速入门】访问 API Server：可选择 LoadBalancer（修改 Service 类型获取外部 IP）、Ingress 或端口转发（kubectl port-forward svc/argocd-server -n argocd 8080:443）。",
            "【来源: ArgoCD 快速入门】CLI 设置和登录：从 releases 页面下载 CLI 或通过 Homebrew 安装；使用 argocd admin initial-password -n argocd 获取初始密码；使用 argocd login <ARGOCD_SERVER> 登录；使用 argocd account update-password 更新密码。",
            "【来源: ArgoCD 快速入门】注册外部集群（可选）：使用 kubectl config get-contexts -o name 列出可用上下文，使用 argocd cluster add CONTEXTNAME 添加集群。",
            "【来源: ArgoCD 快速入门】创建并部署应用：argocd app create guestbook --repo https://github.com/argoproj/argocd-example-apps.git --path guestbook --dest-server https://kubernetes.default.svc --dest-namespace default。使用 argocd app sync guestbook 同步部署。UI 也支持通过 +New App 按钮创建应用。"
        ],
        selfCheck: [
            "根据 ArgoCD 架构文档，三个核心组件（API Server、Repository Server、Application Controller）各自的职责是什么？",
            "根据声明式配置文档，Application CRD 的 source 和 destination 字段分别需要配置什么信息？",
            "对于 Helm 类型的应用，source 配置与 Git 源有什么不同？",
            "AppProject 的 sourceRepos、destinations、roles 字段分别控制什么？为什么部署到 ArgoCD 命名空间的项目需要谨慎？",
            "根据声明式配置文档，如何确保删除 Application 时级联删除其管理的资源？"
        ],
        extensions: [
            "研究 ArgoCD 的 SSO 集成（Dex/OIDC），了解如何与企业身份提供商（Okta、Azure AD、GitHub）集成实现统一认证。",
            "探索 ArgoCD Notifications，了解如何配置 Slack、Email、Webhook 等通知渠道，在同步失败或应用状态变化时发送告警。",
            "学习 ArgoCD 的高可用部署，了解如何在生产环境部署多副本 ArgoCD，实现控制平面的高可用。",
            "研究 ArgoCD Image Updater，了解如何自动检测 Registry 中的新镜像并更新 Git 仓库中的镜像标签。"
        ],
        sourceUrls: [
            "https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/",
            "https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/",
            "https://argo-cd.readthedocs.io/en/stable/getting_started/"
        ]
    },
    "w10-2": {
        lessonId: "w10-2",
        background: [
            "【Auto-Sync 定义】官方文档：ArgoCD 可以'automatically sync an application when it detects differences between the desired manifests in Git and the live state in the cluster'——自动检测差异并同步，消除 CI/CD 流水线直接访问集群的需求。",
            "【Auto-Sync 触发条件】官方文档关键语义：'Automated sync will only be attempted if application is OutOfSync'——仅 OutOfSync 状态触发；'Automated sync will only be attempted once per unique combination of commit SHA and app parameters'——相同组合只尝试一次。",
            "【Self-Heal 机制】官方文档：启用 Self-Heal 后，'Argo CD will sync when the live cluster's state deviates from Git'——检测到集群状态漂移时自动修复，默认检查间隔 5 秒。与 Auto-Sync 配合使用可实现完全自动化。",
            "【Prune 与 Sync Options】官方文档：'Prune=true' 自动删除 Git 中不再定义的资源；'PruneLast=true' 让删除操作在部署成功后执行；'ApplyOutOfSyncOnly=true' 只同步有差异的资源；'ServerSideApply=true' 使用 Kubernetes 服务端 apply。",
            "【Sync Hooks 定义】官方文档定义五种钩子：PreSync'executes prior to application of manifests'；Sync'executes at the same time as application of manifests'；PostSync'executes after successful application and all resources in Healthy state'；SyncFail'executes when sync operation fails'；Skip'skip application of the manifest'。"
        ],
        keyDifficulties: [
            "Auto-Sync 的触发条件：只有 OutOfSync 状态的应用才会触发自动同步；同一个 commit SHA + 参数组合只会同步一次；如果上次同步失败，不会自动重试（需要新的 commit 或手动触发）。理解这些语义对排错很重要。",
            "Prune 的风险控制：启用 Prune 后要特别小心，误删 Git 中的文件会导致集群资源被删除。可以使用 Prune=false 注解保护特定资源，或使用 PruneLast 让删除操作在最后执行。",
            "Self-Heal 与 Prune 的区别：Self-Heal 修复的是集群状态的「漂移」（如有人 kubectl edit 修改了资源），将其恢复到 Git 定义；Prune 删除的是 Git 中已移除的资源。两者解决不同的问题。",
            "Sync Waves 的执行顺序：按 wave 数字从小到大执行，每个 wave 内的资源需要全部 Healthy 后才进入下一个 wave。结合 Hooks 可以实现复杂的部署编排，如先执行数据库迁移再部署应用。"
        ],
        handsOnPath: [
            "启用自动同步：argocd app set guestbook --sync-policy automated。修改 Git 仓库中的 Deployment 副本数，观察 ArgoCD 自动检测并同步变更（最多等待 3 分钟）。",
            "启用自动清理：argocd app set guestbook --auto-prune。在 Git 中删除一个 Service 定义，观察 ArgoCD 在同步时自动删除集群中的 Service。讨论生产环境是否应该启用 Prune。",
            "启用自愈：argocd app set guestbook --self-heal。使用 kubectl scale deployment guestbook-ui --replicas=5 手动修改副本数，观察 ArgoCD 检测到漂移并自动恢复到 Git 定义的值。",
            "创建 Sync Wave 示例：为资源添加 argocd.argoproj.io/sync-wave: '1' 注解，观察部署顺序。创建 PreSync Hook（如 Job）执行数据库迁移，体验编排能力。",
            "配置 Sync Options：尝试 Replace=true（替换而非 apply）、CreateNamespace=true（自动创建命名空间）、ApplyOutOfSyncOnly=true（只同步变更的资源）等选项，理解不同场景的用途。"
        ],
        selfCheck: [
            "Auto-Sync 启用后，为什么同一个 commit 只会同步一次？如果同步失败了怎么办？",
            "Prune 和 Self-Heal 分别解决什么问题？它们的触发条件是什么？",
            "生产环境是否应该启用 Auto-Sync 和 Prune？有什么风险和最佳实践？",
            "Sync Waves 的执行顺序是怎样的？如何利用 Hooks 实现「先迁移数据库，再部署应用」的流程？",
            "Replace 和 Apply 同步策略有什么区别？什么情况下需要使用 Replace？"
        ],
        extensions: [
            "研究 ArgoCD 的 Sync Windows，了解如何限制同步只在特定时间窗口内执行，实现变更冻结和维护窗口。",
            "探索 Sync Retry 配置，了解如何在同步失败时自动重试，以及重试策略（间隔、最大次数）的设置。",
            "学习 Resource Hooks 的 DeletePolicy，了解如何控制 Hook 资源（如 Job）的清理策略（HookSucceeded/BeforeHookCreation）。",
            "研究 ArgoCD 的 Diff 自定义，了解如何通过 ignoreDifferences 配置忽略特定字段的差异（如自动注入的 annotation）。"
        ],
        sourceUrls: [
            "https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/",
            "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/",
            "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/"
        ]
    },
    "w10-3": {
        lessonId: "w10-3",
        background: [
            "【Helm 渲染机制】官方文档：ArgoCD 使用 'helm template' 渲染 Helm Chart 而非直接通过 Helm 管理——'Argo CD uses helm template to render charts, application lifecycle is handled by Argo CD'。这意味着不会创建 Helm Release 对象。",
            "【Values 优先级层次】官方文档明确优先级从低到高：valueFiles（多文件时后面覆盖前面）→ values（内联字符串）→ valuesObject（结构化对象）→ parameters（最高优先级）。'When multiple parameters share the same key, the last declaration takes effect'。",
            "【Kustomize 配置选项】官方文档：ArgoCD 通过 spec.source.kustomize 支持 namePrefix/nameSuffix（资源命名）、commonLabels/commonAnnotations（统一标签）、images（镜像覆盖）、replicas（副本数覆盖）、patches（内联补丁）等声明式配置。",
            "【多源配置能力】官方文档 v2.6+：'Files can originate from separate repositories'——支持从不同仓库获取 values 文件。配合 'ignoreMissingValueFiles: true' 实现可选覆盖模式，适用于多环境配置场景。",
            "【OCI Registry 支持】官方文档：ArgoCD 支持 OCI Helm Chart 部署，'Omit the oci:// protocol prefix in the repository URL'——使用 registry-1.docker.io/bitnamicharts 格式而非 oci://registry-1.docker.io/bitnamicharts。"
        ],
        keyDifficulties: [
            "Kustomize vs Helm 的选择：Kustomize 是声明式补丁，适合 YAML 微调；Helm 是模板引擎，适合复杂逻辑和条件渲染。简单应用推荐 Kustomize，复杂应用或需要社区 Chart 时使用 Helm。",
            "Git 仓库结构设计：单仓库（Mono-repo，所有环境在一个仓库）vs 多仓库（应用配置与环境配置分离）。单仓库简单但权限难控制；多仓库权限清晰但管理复杂。需要根据团队情况选择。",
            "环境晋级（Promotion）策略：开发完成后如何从 dev 晋级到 staging 再到 prod？可以通过 Git 分支/标签策略实现，或使用 ArgoCD ApplicationSet 的渐进式交付功能。自动化程度取决于风险承受能力。",
            "配置漂移检测：ArgoCD 会检测 Git 与集群的差异，但不同环境可能有不同的「允许漂移」（如 HPA 自动调整的副本数）。使用 ignoreDifferences 配置忽略这些预期的差异。"
        ],
        handsOnPath: [
            "创建 Kustomize 多环境结构：base/ 包含 Deployment 和 Service；overlays/dev/ 使用 2 副本和 100m CPU；overlays/prod/ 使用 5 副本和 500m CPU。在 ArgoCD 中创建两个 Application 分别指向不同 overlay。",
            "使用 Helm 多环境配置：创建 values.yaml（默认）和 values-prod.yaml（生产覆盖）。在 ArgoCD Application 中配置 valueFiles: [values.yaml, values-prod.yaml]，验证生产配置正确覆盖默认值。",
            "在 Application 中使用 parameters 覆盖：argocd app set myapp --parameter image.tag=v2.0.0。观察 parameters 如何覆盖 values 文件中的值。讨论何时使用 parameters vs valueFiles。",
            "配置 ignoreDifferences：为 Deployment 添加 ignoreDifferences 忽略 spec.replicas 字段（让 HPA 管理），验证 ArgoCD 不再报告该字段的 OutOfSync。",
            "设计环境晋级流程：dev 分支合并到 main 触发 staging 部署；创建 Tag 触发 prod 部署。使用 ArgoCD 的 targetRevision 配置不同环境跟踪不同分支/标签。"
        ],
        selfCheck: [
            "Kustomize 的 Base/Overlay 模式如何工作？与 Helm 的 Values 覆盖相比，各有什么优缺点？",
            "ArgoCD 中 values 的优先级顺序是什么？parameters 为什么具有最高优先级？",
            "如何设计 Git 仓库结构支持多环境部署？单仓库和多仓库方案各有什么取舍？",
            "什么是配置漂移？为什么需要 ignoreDifferences？常见需要忽略的字段有哪些？",
            "环境晋级（如从 staging 到 prod）有哪些策略？如何平衡自动化和风险控制？"
        ],
        extensions: [
            "研究 ArgoCD ApplicationSet，了解如何使用 Generator（List/Cluster/Git）自动为多环境、多集群生成 Application。",
            "探索 Kustomize 的高级功能：Strategic Merge Patch、JSON Patch、Component，了解复杂场景的配置管理。",
            "学习 Helm 的 post-renderer，了解如何在 Helm 渲染后使用 Kustomize 进行二次处理，结合两者优势。",
            "研究 GitOps 的 Secret 管理方案：Sealed Secrets、External Secrets Operator、SOPS，了解如何安全地管理多环境敏感配置。"
        ],
        sourceUrls: [
            "https://argo-cd.readthedocs.io/en/stable/user-guide/kustomize/",
            "https://argo-cd.readthedocs.io/en/stable/user-guide/helm/",
            "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/"
        ]
    },
    "w10-4": {
        lessonId: "w10-4",
        background: [
            "【App of Apps 定义】官方文档：'Declaratively specify one Argo CD app that consists only of other apps'——声明式定义一个只包含其他应用的父 Application，实现集群应用栈的一键引导部署。父 Application 的源仓库包含所有子 Application 的 YAML 定义。",
            "【集群添加机制】官方文档：'argocd cluster add context-name' 命令会'connect to the cluster and install the necessary resources for ArgoCD to connect to it'——安装必要资源。执行前需用 kubectl config get-contexts 验证可用上下文，且需要目标集群的特权访问。",
            "【in-cluster 特殊性】官方文档：'The in-cluster cluster cannot be removed with this'——in-cluster 是特殊集群，不能通过 argocd cluster rm 删除。如需禁用，必须在 argocd-cm ConfigMap 中设置 'cluster.inClusterEnabled' 为 'false'。",
            "【安全警告】官方文档强调：'Only admins should have push access to the parent Application's source repository'——父应用仓库推送权限等同于集群管理权限。部署到 ArgoCD 命名空间的项目会获得管理员级别访问权限。",
            "【Argo Rollouts 定义】官方文档：'a Kubernetes controller and set of CRDs which provide advanced deployment capabilities'——提供 Blue-Green、Canary、渐进式交付等高级部署能力。与 ArgoCD 配合使用，ArgoCD 像管理 Deployment 一样管理 Rollout CRD。"
        ],
        keyDifficulties: [
            "App of Apps 的目录结构设计：父 Application 指向一个包含多个 Application YAML 的目录。可以使用 Helm 或 Kustomize 模板化子 Application，实现参数化配置。注意 finalizer 配置确保级联删除。",
            "ApplicationSet Generator 的选择：List Generator 适合固定列表；Cluster Generator 自动匹配注册的集群；Git Generator 从 Git 目录/文件生成；Matrix Generator 组合多个 Generator。不同场景选择不同 Generator。",
            "多集群的安全考量：添加远程集群需要在目标集群创建 ServiceAccount 和 RBAC。ArgoCD 存储集群凭证在 Secret 中，需要保护好这些凭证。考虑使用 OIDC 集成而非静态凭证。",
            "Argo Rollouts 与 ArgoCD 的协作：Rollouts 替换 Deployment 使用 Rollout CRD，ArgoCD 照常管理 Rollout 资源。流量切分需要配合 Ingress Controller 或 Service Mesh。分析指标驱动自动晋级/回滚。"
        ],
        handsOnPath: [
            "创建 App of Apps 结构：创建 apps/ 目录包含多个 Application YAML（如 nginx-app.yaml、redis-app.yaml）。创建父 Application 指向 apps/ 目录，同步后观察子 Application 自动创建。",
            "使用 ApplicationSet 替代手写：创建 ApplicationSet 使用 List Generator 定义多个环境（dev/staging/prod），观察自动生成的 Application。修改 Generator 参数，验证 Application 自动更新。",
            "添加远程集群：使用 argocd cluster add 添加另一个 Kubernetes 集群。创建 Application 的 destination.server 指向远程集群，验证跨集群部署能力。",
            "部署 Argo Rollouts：在集群中安装 Argo Rollouts Controller。创建一个 Rollout 资源（替代 Deployment），配置 Canary 策略（20%→40%→100%）。通过 ArgoCD 管理 Rollout，观察渐进式发布过程。",
            "配置基于指标的自动晋级：为 Rollout 配置 Analysis（如成功率 > 99%），使用 Prometheus 作为指标源。触发更新，观察 Rollouts 自动分析指标并决定晋级或回滚。"
        ],
        selfCheck: [
            "App of Apps 模式解决什么问题？与直接创建多个独立 Application 相比有什么优势？",
            "ApplicationSet 的 Generator 有哪些类型？分别适用于什么场景？",
            "如何向 ArgoCD 添加远程集群？需要什么权限和凭证？",
            "Argo Rollouts 的 Canary 和 Blue-Green 策略有什么区别？如何选择？",
            "如何实现基于指标的自动晋级/回滚？需要配置哪些组件？"
        ],
        extensions: [
            "研究 ApplicationSet 的 Progressive Sync 功能，了解如何控制多个 Application 的滚动更新顺序和并发度。",
            "探索 Argo Rollouts 的 Experiment 功能，了解如何同时运行多个版本进行 A/B 测试。",
            "学习 ArgoCD 的 Resource Tracking 方法（annotation vs label），了解不同追踪方式的取舍。",
            "研究 GitOps 的多集群架构模式：Hub-Spoke（中心管理多个边缘集群）vs Standalone（每个集群独立 ArgoCD），了解企业级部署选型。"
        ],
        sourceUrls: [
            "https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/",
            "https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-management/",
            "https://argo-rollouts.readthedocs.io/en/stable/"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "w10-1": [
        {
            id: "w10-1-q1",
            question: "官方架构文档对 ArgoCD API Server 的定义是什么？",
            options: [
                "'gRPC/REST server exposing APIs for external systems'——对外暴露 API 的服务端",
                "内部缓存服务",
                "Kubernetes 控制器",
                "Git 仓库代理"
            ],
            answer: 0,
            rationale: "官方架构文档定义 API Server 为'gRPC/REST server exposing APIs for external systems'，负责应用管理和状态报告。"
        },
        {
            id: "w10-1-q2",
            question: "官方文档对 Repository Server 职责的描述是什么？",
            options: [
                "执行 RBAC 策略",
                "持续监控应用状态",
                "'generating and returning Kubernetes manifests when provided: repository URL, revision, application path, template settings'",
                "处理 Git webhook 事件"
            ],
            answer: 2,
            rationale: "官方文档：Repository Server 负责'generating and returning Kubernetes manifests when provided: repository URL, revision (commit, tag, branch), application path, template specific settings'。"
        },
        {
            id: "w10-1-q3",
            question: "官方文档对 Application Controller 的定义是什么？",
            options: [
                "gRPC/REST 服务端",
                "Git 仓库缓存服务",
                "凭证管理服务",
                "'Kubernetes controller continuously monitoring running applications and comparing current live state against desired target state'"
            ],
            answer: 3,
            rationale: "官方架构文档定义 Application Controller 为'Kubernetes controller continuously monitoring running applications and comparing current live state against desired target state'。"
        },
        {
            id: "w10-1-q4",
            question: "官方文档列出的 Application Controller 职责包括什么？",
            options: [
                "'detects OutOfSync application conditions'、'takes corrective actions'、'invokes lifecycle hooks (PreSync, Sync, PostSync)'",
                "管理用户认证和授权",
                "克隆 Git 仓库并缓存",
                "处理外部 API 请求"
            ],
            answer: 0,
            rationale: "官方文档：Application Controller 职责包括'detects OutOfSync application conditions'、'takes corrective actions when configured'、'invokes lifecycle hooks (PreSync, Sync, PostSync)'。"
        },
        {
            id: "w10-1-q5",
            question: "官方声明式配置文档对 destination 字段 server 和 name 的说明是什么？",
            options: [
                "两者必须同时指定",
                "'accepts either server or name, but not both'——只能二选一",
                "name 优先级高于 server",
                "两者可选，都不指定则使用默认集群"
            ],
            answer: 1,
            rationale: "官方声明式配置文档明确：destination'accepts either server or name, but not both (which will result in an error)'。"
        },
        {
            id: "w10-1-q6",
            question: "官方文档对 finalizer 'resources-finalizer.argocd.argoproj.io' 的说明是什么？",
            options: [
                "自动创建命名空间",
                "启用自动同步",
                "'Without this finalizer, deleting an Application will not delete the resources it manages'——启用级联删除",
                "配置 RBAC 权限"
            ],
            answer: 2,
            rationale: "官方文档：'Without the resources-finalizer.argocd.argoproj.io finalizer, deleting an Application will not delete the resources it manages'。"
        },
        {
            id: "w10-1-q7",
            question: "官方文档对 AppProject 部署到 ArgoCD 命名空间的警告是什么？",
            options: [
                "不允许部署到该命名空间",
                "需要特殊的 annotation",
                "只能部署系统应用",
                "'grant admin-level access'——授予管理员级别访问权限，需要谨慎"
            ],
            answer: 3,
            rationale: "官方文档警告：Projects allowing deployment to ArgoCD namespace'grant admin-level access'，需要严格的 RBAC 限制。"
        },
        {
            id: "w10-1-q8",
            question: "ArgoCD 默认的调和（reconciliation）间隔是多少？",
            options: [
                "30 秒",
                "1 分钟",
                "3 分钟",
                "5 分钟"
            ],
            answer: 2,
            rationale: "ArgoCD 默认每 3 分钟检查一次 Git 仓库变化，可以通过配置或 Webhook 减少延迟。"
        },
        {
            id: "w10-1-q9",
            question: "Sync Status 为 OutOfSync 表示什么？",
            options: [
                "集群状态与 Git 定义不一致",
                "应用资源运行不健康",
                "ArgoCD 无法连接到集群",
                "Git 仓库访问失败"
            ],
            answer: 0,
            rationale: "OutOfSync 表示集群中的实际状态与 Git 仓库中定义的期望状态存在差异，需要同步。"
        },
        {
            id: "w10-1-q10",
            question: "Health Status 为 Degraded 通常表示什么？",
            options: [
                "应用配置与 Git 不一致",
                "部分资源运行异常，如 Pod CrashLoopBackOff",
                "同步操作正在进行中",
                "应用已被手动暂停"
            ],
            answer: 1,
            rationale: "Degraded 表示应用资源处于异常状态，如 Deployment 的 Pod 崩溃或未达到期望副本数。"
        },
        {
            id: "w10-1-q11",
            question: "targetRevision 可以是以下哪些值？",
            options: [
                "只能是分支名",
                "只能是 Tag",
                "只能是 commit SHA",
                "分支名、Tag 或 commit SHA"
            ],
            answer: 3,
            rationale: "targetRevision 支持分支名（如 main）、Tag（如 v1.0.0）或完整的 commit SHA，提供灵活的版本控制。"
        },
        {
            id: "w10-1-q12",
            question: "为什么说 ArgoCD 采用 Pull 模式而非 Push 模式？",
            options: [
                "CI 直接调用 ArgoCD API 推送配置",
                "ArgoCD 控制器主动从 Git 拉取配置并同步到集群，无需暴露集群 API",
                "用户必须手动触发每次同步",
                "Kubernetes 从 ArgoCD 拉取配置"
            ],
            answer: 1,
            rationale: "Pull 模式指 ArgoCD 控制器主动从 Git 仓库拉取配置，而非外部系统推送。CI 只需提交到 Git，无需访问集群，安全性更高。"
        }
    ],
    "w10-2": [
        {
            id: "w10-2-q1",
            question: "官方文档对 Auto-Sync 触发条件的描述是什么？",
            options: [
                "'Automated sync will only be attempted if application is OutOfSync'——仅 OutOfSync 状态触发",
                "任何时候检测到差异都会触发",
                "每隔固定时间间隔触发",
                "只在手动确认后触发"
            ],
            answer: 0,
            rationale: "官方文档明确：'Automated sync will only be attempted if application is OutOfSync'——只有 OutOfSync 状态的应用才会触发自动同步。"
        },
        {
            id: "w10-2-q2",
            question: "官方文档对同一 commit 同步尝试次数的说明是什么？",
            options: [
                "失败后会自动重试三次",
                "每次调和周期都会重试",
                "'Automated sync will only be attempted once per unique combination of commit SHA and app parameters'",
                "可以通过配置设置重试次数"
            ],
            answer: 2,
            rationale: "官方文档：'Automated sync will only be attempted once per unique combination of commit SHA and app parameters'——相同组合只尝试一次。"
        },
        {
            id: "w10-2-q3",
            question: "官方文档对 Self-Heal 机制的描述是什么？",
            options: [
                "修复 Git 仓库中的配置错误",
                "'Argo CD will sync when the live cluster's state deviates from Git'——集群状态漂移时自动修复",
                "修复 ArgoCD 组件故障",
                "修复网络连接问题"
            ],
            answer: 1,
            rationale: "官方文档：启用 Self-Heal 后，'Argo CD will sync when the live cluster's state deviates from Git'——检测到集群状态漂移时自动修复。"
        },
        {
            id: "w10-2-q4",
            question: "官方文档定义的五种 Sync Hook 类型是什么？",
            options: [
                "Start、Running、Success、Fail、End",
                "Init、Pre、Main、Post、Cleanup",
                "Begin、Process、Complete、Error、Finalize",
                "PreSync、Sync、PostSync、SyncFail、Skip"
            ],
            answer: 3,
            rationale: "官方文档定义五种钩子：PreSync、Sync、PostSync、SyncFail、Skip，分别在同步生命周期的不同阶段执行。"
        },
        {
            id: "w10-2-q5",
            question: "官方文档对 PreSync Hook 执行时机的描述是什么？",
            options: [
                "'executes prior to application of manifests'——在应用清单之前执行",
                "在同步完成后执行",
                "在同步失败时执行",
                "与主清单同时执行"
            ],
            answer: 0,
            rationale: "官方文档：PreSync 'executes prior to application of manifests'——在应用主要清单之前执行，常用于数据库迁移。"
        },
        {
            id: "w10-2-q6",
            question: "官方文档对 PostSync Hook 执行条件的描述是什么？",
            options: [
                "在任何同步操作后执行",
                "只要同步完成就执行",
                "'executes after successful application and all resources in Healthy state'",
                "在同步失败后执行清理"
            ],
            answer: 2,
            rationale: "官方文档：PostSync 'executes after successful application and all resources in Healthy state'——同步成功且资源健康后才执行。"
        },
        {
            id: "w10-2-q7",
            question: "Sync Wave 的执行顺序是怎样的？",
            options: [
                "随机执行，无固定顺序",
                "按资源名称字母顺序执行",
                "按 wave 数字从大到小执行",
                "按 wave 数字从小到大执行，每个 wave 内资源需全部 Healthy 后进入下一个"
            ],
            answer: 3,
            rationale: "Sync Wave 按数字从小到大执行，每个 wave 内的资源需要全部达到 Healthy 状态后才进入下一个 wave。"
        },
        {
            id: "w10-2-q8",
            question: "Prune 和 Self-Heal 分别解决什么问题？",
            options: [
                "Prune 删除 Git 中已移除的资源；Self-Heal 修复集群状态漂移（如手动修改）",
                "两者功能完全相同",
                "Prune 修复漂移；Self-Heal 删除资源",
                "两者都用于清理旧版本"
            ],
            answer: 0,
            rationale: "Prune 删除 Git 中已移除的资源（同步时）；Self-Heal 修复集群状态的漂移（如 kubectl edit 修改）。两者解决不同问题。"
        },
        {
            id: "w10-2-q9",
            question: "如何保护特定资源不被 Auto-Prune 删除？",
            options: [
                "将资源移到其他命名空间",
                "禁用整个应用的 Auto-Sync",
                "为资源添加 argocd.argoproj.io/sync-options: Prune=false 注解",
                "使用 Secret 类型资源"
            ],
            answer: 2,
            rationale: "为资源添加 argocd.argoproj.io/sync-options: Prune=false 注解可以保护该特定资源不被自动删除。"
        },
        {
            id: "w10-2-q10",
            question: "PruneLast 选项的作用是什么？",
            options: [
                "让删除操作在所有资源 Healthy 后再执行，作为最后一个 wave",
                "只删除最后创建的资源",
                "禁用所有自动删除功能",
                "删除上一次同步的资源"
            ],
            answer: 0,
            rationale: "PruneLast 让删除操作作为最后一个 wave 执行，确保新资源健康后再删除旧资源，减少服务中断风险。"
        },
        {
            id: "w10-2-q11",
            question: "启用 Auto-Sync 后，手动 Rollback 功能会怎样？",
            options: [
                "正常工作，与 Auto-Sync 互不影响",
                "需要管理员权限才能执行",
                "只能回滚一个版本",
                "手动 Rollback 会被 Auto-Sync 覆盖，要回滚需修改 Git 仓库"
            ],
            answer: 3,
            rationale: "启用 Auto-Sync 后，手动 Rollback 会被自动同步回 Git 最新状态。要实现回滚需要修改 Git 仓库（如 revert commit）。"
        },
        {
            id: "w10-2-q12",
            question: "ApplyOutOfSyncOnly 选项的主要优势是什么？",
            options: [
                "只同步新增的资源，忽略修改",
                "只同步有变更的资源，减少 API 调用，提高大型应用同步性能",
                "只在非工作时间同步",
                "只同步 Deployment 类型资源"
            ],
            answer: 1,
            rationale: "ApplyOutOfSyncOnly 只对检测到差异的资源执行 apply，减少不必要的 API 调用，适合管理大量资源的应用。"
        }
    ],
    "w10-3": [
        {
            id: "w10-3-q1",
            question: "官方文档对 ArgoCD 渲染 Helm Chart 机制的描述是什么？",
            options: [
                "'Argo CD uses helm template to render charts, application lifecycle is handled by Argo CD'",
                "ArgoCD 创建 Helm Release 对象管理生命周期",
                "ArgoCD 直接调用 helm install/upgrade 命令",
                "ArgoCD 只支持 Helm 2 格式的 Chart"
            ],
            answer: 0,
            rationale: "官方文档：'Argo CD uses helm template to render charts, application lifecycle is handled by Argo CD'——使用 helm template 渲染，不创建 Helm Release。"
        },
        {
            id: "w10-3-q2",
            question: "官方文档对 Helm values 优先级的描述，从低到高的顺序是什么？",
            options: [
                "parameters → values → valueFiles",
                "values → parameters → valueFiles",
                "valueFiles → values → valuesObject → parameters",
                "parameters → valuesObject → values → valueFiles"
            ],
            answer: 2,
            rationale: "官方文档明确优先级从低到高：valueFiles → values → valuesObject → parameters。后者覆盖前者。"
        },
        {
            id: "w10-3-q3",
            question: "官方文档对 Helm valueFiles 中多个文件覆盖顺序的说明是什么？",
            options: [
                "按文件名字母顺序",
                "'last file listed wins when multiple'——列表中靠后的文件覆盖前面",
                "随机顺序，无法预测",
                "按文件大小顺序"
            ],
            answer: 1,
            rationale: "官方文档：'last file listed wins when multiple'——valueFiles 列表中后面的文件覆盖前面文件的同名配置。"
        },
        {
            id: "w10-3-q4",
            question: "官方文档对 ignoreMissingValueFiles 选项的说明是什么？",
            options: [
                "忽略所有 values 文件错误",
                "忽略 values 文件中的缺失字段",
                "忽略 Chart 中的默认 values",
                "'implement optional override patterns'——实现可选覆盖模式，文件不存在时跳过"
            ],
            answer: 3,
            rationale: "官方文档：使用 'ignoreMissingValueFiles: true' 可以 'implement optional override patterns'——文件不存在时跳过而非报错。"
        },
        {
            id: "w10-3-q5",
            question: "官方文档对 ArgoCD Kustomize 配置选项的说明包括哪些功能？",
            options: [
                "namePrefix/nameSuffix、commonLabels、images、replicas、patches 等声明式配置",
                "只支持 namePrefix 和 nameSuffix",
                "只支持 images 覆盖",
                "不支持任何声明式配置"
            ],
            answer: 0,
            rationale: "官方文档：ArgoCD 通过 spec.source.kustomize 支持 namePrefix/nameSuffix、commonLabels/commonAnnotations、images、replicas、patches 等配置。"
        },
        {
            id: "w10-3-q6",
            question: "官方文档对 ArgoCD 多源配置（Multiple Sources）能力的说明是什么？",
            options: [
                "不支持从多个仓库获取配置",
                "只能从单一仓库获取所有配置",
                "'Files can originate from separate repositories'——v2.6+ 支持从不同仓库获取 values",
                "需要特殊插件支持"
            ],
            answer: 2,
            rationale: "官方文档 v2.6+：'Files can originate from separate repositories'——支持从不同仓库获取 values 文件。"
        },
        {
            id: "w10-3-q7",
            question: "官方文档对 OCI Registry Helm Chart URL 格式的说明是什么？",
            options: [
                "必须使用 oci:// 协议前缀",
                "'Omit the oci:// protocol prefix in the repository URL'——省略 oci:// 前缀",
                "使用 https:// 协议前缀",
                "使用 helm:// 协议前缀"
            ],
            answer: 1,
            rationale: "官方文档：'Omit the oci:// protocol prefix in the repository URL'——使用 registry-1.docker.io/bitnamicharts 格式。"
        },
        {
            id: "w10-3-q8",
            question: "官方文档对 parameters 字段的说明是什么？",
            options: [
                "优先级最低，会被 valueFiles 覆盖",
                "只用于定义环境变量",
                "最高优先级，'When multiple parameters share the same key, the last declaration takes effect'",
                "与 valueFiles 优先级相同"
            ],
            answer: 2,
            rationale: "官方文档：parameters 具有最高优先级，'When multiple parameters share the same key, the last declaration takes effect'。"
        },
        {
            id: "w10-3-q9",
            question: "为什么需要为 HPA 管理的 replicas 字段配置 ignoreDifferences？",
            options: [
                "HPA 会自动调整 replicas，导致与 Git 定义不一致，是预期的漂移",
                "HPA 不支持 ArgoCD",
                "HPA 需要特殊权限才能工作",
                "ArgoCD 不支持检测 replicas 字段"
            ],
            answer: 0,
            rationale: "HPA 会根据负载动态调整 Deployment 的 replicas，这个预期的漂移不应被报告为 OutOfSync，需要用 ignoreDifferences 忽略。"
        },
        {
            id: "w10-3-q10",
            question: "官方文档对 Kustomize patches 字段的说明是什么？",
            options: [
                "不支持内联补丁",
                "只支持外部补丁文件",
                "'supports inline JSON patch operations'——支持内联 JSON 补丁操作",
                "只支持 YAML 格式补丁"
            ],
            answer: 2,
            rationale: "官方文档：patches 字段'supports inline JSON patch operations, allowing modifications without separate overlay files'。"
        },
        {
            id: "w10-3-q11",
            question: "ArgoCD 如何自动识别应用使用 Kustomize？",
            options: [
                "需要在 Application 中手动指定 type: kustomize",
                "根据文件扩展名判断",
                "检测到 kustomization.yaml 文件时自动使用 Kustomize",
                "通过环境变量配置"
            ],
            answer: 2,
            rationale: "如果 source.path 指向的目录存在 kustomization.yaml 文件，ArgoCD 会自动检测并使用 Kustomize 渲染清单。"
        },
        {
            id: "w10-3-q12",
            question: "官方文档对 Helm fileParameters 功能的说明是什么？",
            options: [
                "用于配置文件路径",
                "'Pass file contents as parameter values'——将文件内容作为参数值传递",
                "用于指定 values 文件列表",
                "用于配置 Chart 依赖"
            ],
            answer: 1,
            rationale: "官方文档：fileParameters 可以'Pass file contents as parameter values'——将指定路径的文件内容作为 Helm 参数值传递。"
        }
    ],
    "w10-4": [
        {
            id: "w10-4-q1",
            question: "官方文档对 App of Apps 模式的定义是什么？",
            options: [
                "多个集群共享一个 Application",
                "一个 Git 仓库包含多个 Chart",
                "'Declaratively specify one Argo CD app that consists only of other apps'——声明式定义只包含其他应用的父 Application",
                "一个 Pod 运行多个容器"
            ],
            answer: 2,
            rationale: "官方文档：App of Apps 是'Declaratively specify one Argo CD app that consists only of other apps'——一个父 Application 只包含其他 Application。"
        },
        {
            id: "w10-4-q2",
            question: "ApplicationSet 的 List Generator 适用于什么场景？",
            options: [
                "动态发现集群",
                "固定的、已知的环境或集群列表",
                "从 Git 目录生成应用",
                "基于标签选择"
            ],
            answer: 1,
            rationale: "List Generator 适合预先知道的固定列表（如 dev/staging/prod），通过列表定义每个 Application 的参数。"
        },
        {
            id: "w10-4-q3",
            question: "ApplicationSet 的 Cluster Generator 的作用是什么？",
            options: [
                "创建新的 Kubernetes 集群",
                "管理集群凭证",
                "同步集群配置",
                "自动为 ArgoCD 注册的每个集群生成 Application"
            ],
            answer: 3,
            rationale: "Cluster Generator 自动匹配 ArgoCD 管理的集群，为每个集群生成 Application，适合多集群统一部署场景。"
        },
        {
            id: "w10-4-q4",
            question: "官方文档中添加远程集群的命令是什么？",
            options: [
                "'argocd cluster add context-name'——将 kubeconfig 中的集群添加到 ArgoCD 管理",
                "kubectl add cluster",
                "argocd register cluster",
                "argocd cluster create"
            ],
            answer: 0,
            rationale: "官方文档：使用 'argocd cluster add context-name' 命令，会连接到集群并安装必要资源。需要目标集群的特权访问。"
        },
        {
            id: "w10-4-q5",
            question: "Argo Rollouts 与 ArgoCD 的关系是什么？",
            options: [
                "Argo Rollouts 是 ArgoCD 的组件",
                "Argo Rollouts 是独立工具，ArgoCD 可以管理 Rollout 资源",
                "两者互斥，不能同时使用",
                "Argo Rollouts 替代 ArgoCD"
            ],
            answer: 1,
            rationale: "Argo Rollouts 是独立的渐进式交付工具，提供 Rollout CRD。ArgoCD 可以像管理 Deployment 一样管理 Rollout 资源。"
        },
        {
            id: "w10-4-q6",
            question: "官方文档对 Argo Rollouts Canary 策略的描述是什么？",
            options: [
                "一次性切换所有流量",
                "随机分配流量",
                "'gradually shift traffic to a new version'——逐步将流量切换到新版本",
                "同时运行两个完整的环境"
            ],
            answer: 2,
            rationale: "官方文档：Canary 策略'gradually shift traffic to a new version'，可以在每个阶段进行验证，发现问题时快速回滚。"
        },
        {
            id: "w10-4-q7",
            question: "官方文档对 App of Apps 安全的警告是什么？",
            options: [
                "'Only admins should have push access to the parent Application's source repository'——父应用仓库推送权限需严格控制",
                "子 Application 无法访问 Git",
                "无法配置 RBAC",
                "子 Application 不支持自动同步"
            ],
            answer: 0,
            rationale: "官方文档警告：'Only admins should have push access to the parent Application's source repository'——能推送到父应用仓库相当于拥有集群管理权限。"
        },
        {
            id: "w10-4-q8",
            question: "官方文档对 Argo Rollouts Analysis 功能的描述是什么？",
            options: [
                "监控 Pod 重启次数",
                "依赖 Kubernetes 原生能力",
                "需要手动触发",
                "'query and interpret metrics from various providers to verify key KPIs and drive automated promotion or rollback'"
            ],
            answer: 3,
            rationale: "官方文档：Analysis 可以'query and interpret metrics from various providers to verify key KPIs and drive automated promotion or rollback'。"
        },
        {
            id: "w10-4-q9",
            question: "ApplicationSet 的 Git Generator 的用途是什么？",
            options: [
                "从 Git 历史生成应用",
                "管理 Git 凭证",
                "根据 Git 仓库目录结构自动生成 Application",
                "同步 Git 仓库"
            ],
            answer: 2,
            rationale: "Git Generator 扫描 Git 仓库的目录结构，为每个匹配的目录生成 Application，适合目录组织的多环境/多应用场景。"
        },
        {
            id: "w10-4-q10",
            question: "官方文档对 Blue-Green 部署的描述是什么？",
            options: [
                "'run the new version through a preview service while the active service handles production traffic'——新版本通过预览服务运行",
                "逐步增加新版本的流量比例",
                "Canary 不支持回滚",
                "Blue-Green 不需要额外资源"
            ],
            answer: 0,
            rationale: "官方文档：Blue-Green 部署'run the new version through a preview service while the active service handles production traffic'，验证后一次性切换。"
        },
        {
            id: "w10-4-q11",
            question: "官方文档对级联删除的说明是什么？",
            options: [
                "手动删除每个子 Application",
                "使用 kubectl delete",
                "禁用 Auto-Sync",
                "添加 'resources-finalizer.argocd.argoproj.io' finalizer 确保子应用和资源被级联删除"
            ],
            answer: 3,
            rationale: "官方文档：添加 'resources-finalizer.argocd.argoproj.io' finalizer 后，删除父 Application 会触发删除所有子 Application 及其管理的资源。"
        },
        {
            id: "w10-4-q12",
            question: "官方文档对禁用 in-cluster 集群的说明是什么？",
            options: [
                "删除 argocd 命名空间",
                "'The in-cluster cluster cannot be removed with this'——需在 argocd-cm ConfigMap 中设置 cluster.inClusterEnabled 为 false",
                "使用 argocd cluster rm",
                "删除 ServiceAccount"
            ],
            answer: 1,
            rationale: "官方文档：'The in-cluster cluster cannot be removed with this'——in-cluster 是特殊集群，不能用 argocd cluster rm 删除，需要在 ConfigMap 中禁用。"
        }
    ]
}
