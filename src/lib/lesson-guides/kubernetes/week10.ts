import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "w10-1": {
        lessonId: "w10-1",
        background: [
            "【来源: ArgoCD 架构文档】ArgoCD 由三个核心组件构成：API Server 作为 gRPC/REST 端点，处理「应用管理和状态报告」以及「调用应用操作（如 sync、rollback、用户定义的操作）」；Repository Server 是内部服务，「维护包含应用清单的 Git 仓库的本地缓存」；Application Controller 作为 Kubernetes 控制器，「持续监控运行中的应用并比较当前实际状态与期望目标状态」。",
            "【来源: ArgoCD 架构文档】API Server 管理凭证、执行 RBAC 策略、处理 Git webhook 事件。Repository Server 根据仓库 URL、版本、应用路径和模板配置（如 Helm values）生成 Kubernetes 清单。Application Controller 识别同步差异并执行纠正操作，包括 PreSync、Sync 和 PostSync 的生命周期钩子。",
            "【来源: ArgoCD 声明式配置文档】Application CRD 需要两个关键部分：source（Git 仓库详情：URL、revision、path）和 destination（目标集群和命名空间）。对于 Helm，使用 chart 属性替代 path。destination 使用 server 或 name（不能同时使用）以及 namespace。",
            "【来源: ArgoCD 声明式配置文档】AppProject 通过 sourceRepos（允许的 Git 仓库）、destinations（允许的部署目标）、roles（访问控制定义）组织应用。部署到 ArgoCD 命名空间的项目授予管理员级别访问权限，需要谨慎的 RBAC 限制。",
            "【来源: ArgoCD 声明式配置文档】关于 finalizer 的重要说明：「没有 resources-finalizer.argocd.argoproj.io finalizer，删除 Application 不会删除它管理的资源」。"
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
            "ArgoCD 的同步策略（Sync Policy）控制应用如何从 Git 同步到集群。核心选项包括自动同步（auto-sync）、自动清理（prune）和自愈（self-heal），它们组合使用可以实现完全自动化的 GitOps 流程。",
            "自动同步（Auto-Sync）让 ArgoCD 在检测到 Git 变更时自动触发同步，无需人工干预。启用后，CI 只需提交到 Git，ArgoCD 会自动将变更应用到集群。默认调和间隔为 3 分钟（可配置）。",
            "自动清理（Prune）控制是否删除 Git 中已移除的资源。默认情况下，即使 Git 中删除了某个资源的定义，ArgoCD 也不会删除集群中对应的资源。启用 Prune 后，Git 中移除的资源会在同步时被删除。",
            "Sync Waves 和 Hooks 是 ArgoCD 的高级编排功能。Sync Waves 通过注解定义资源的部署顺序（数字越小越先部署）；Hooks（PreSync/Sync/PostSync/SyncFail）可以在同步的不同阶段执行特定任务。"
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
            "多环境管理是 GitOps 落地的核心挑战。开发、测试、预发布、生产等环境需要部署相同的应用，但配置（副本数、资源限制、环境变量）不同。Kustomize 和 Helm 是 ArgoCD 支持的两种主流配置管理工具。",
            "Kustomize 采用 Base + Overlay 模式：Base 定义通用配置，Overlay 针对不同环境进行差异化配置。目录结构通常为 base/（基础配置）、overlays/dev/、overlays/staging/、overlays/prod/。ArgoCD 直接指向 overlay 目录即可。",
            "Helm 通过 Values 文件实现多环境配置。ArgoCD 支持指定多个 values 文件（如 values.yaml、values-prod.yaml），后面的文件覆盖前面的值。也可以在 Application 中直接设置 parameters 覆盖特定值。",
            "ArgoCD 的 values 优先级从低到高：Helm 仓库默认 values.yaml → valueFiles 列表（后面覆盖前面）→ values（内联字符串）→ valuesObject（内联对象）→ parameters（最高优先级）。"
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
            "App of Apps 是 ArgoCD 推荐的集群引导模式。通过创建一个「父 Application」来管理多个「子 Application」，实现一键部署整个集群的应用栈。父 Application 的 Git 仓库包含所有子 Application 的 YAML 定义。",
            "ApplicationSet 是 ArgoCD 的另一个强大功能，使用 Generator（List、Cluster、Git、Matrix 等）自动生成多个 Application。适合多集群部署、多租户场景，比手写多个 Application YAML 更高效。",
            "多集群管理是 ArgoCD 的核心能力。通过 argocd cluster add 命令将远程集群添加到 ArgoCD，然后在 Application 的 destination 中指定目标集群。ArgoCD 可以从单一控制平面管理数十上百个集群。",
            "渐进式交付（Progressive Delivery）通过 Argo Rollouts 实现。它提供金丝雀发布（Canary）和蓝绿部署（Blue-Green）策略，可以与 ArgoCD 配合使用，在 GitOps 模式下实现安全的渐进式发布。"
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
            question: "ArgoCD 的 Application Controller 的主要职责是什么？",
            options: [
                "提供 Web UI 和 REST API",
                "持续监控应用状态，检测 OutOfSync 并执行同步",
                "克隆 Git 仓库并生成 Kubernetes 清单",
                "管理用户认证和授权"
            ],
            answer: 1,
            rationale: "Application Controller 是核心调和循环，持续对比期望状态与实际状态，检测差异并执行同步操作。"
        },
        {
            id: "w10-1-q2",
            question: "ArgoCD 的 Repository Server 的作用是什么？",
            options: [
                "存储应用部署历史",
                "维护 Git 仓库缓存并生成 Kubernetes 清单",
                "提供 CLI 命令行接口",
                "管理集群凭证"
            ],
            answer: 1,
            rationale: "Repository Server 负责克隆 Git 仓库、缓存内容，并使用 Helm/Kustomize 等工具渲染生成 Kubernetes 清单。"
        },
        {
            id: "w10-1-q3",
            question: "Application CRD 中的 source 字段定义什么？",
            options: [
                "目标集群的 API 地址",
                "应用的 Git 仓库 URL、分支/标签和路径",
                "同步策略和自动化选项",
                "项目权限和 RBAC 配置"
            ],
            answer: 1,
            rationale: "source 定义应用配置的来源，包括 repoURL（仓库地址）、targetRevision（分支/标签/commit）和 path（应用路径）。"
        },
        {
            id: "w10-1-q4",
            question: "Application 的 destination 字段需要指定哪些信息？",
            options: [
                "Git 仓库 URL 和分支",
                "目标集群 API 地址和命名空间",
                "Helm Chart 名称和版本",
                "同步策略和 Hook 配置"
            ],
            answer: 1,
            rationale: "destination 定义部署目标，包括 server（集群 API 地址）或 name（集群名称）以及 namespace（目标命名空间）。"
        },
        {
            id: "w10-1-q5",
            question: "Sync Status 为 OutOfSync 表示什么？",
            options: [
                "应用资源运行不健康",
                "集群状态与 Git 定义不一致",
                "ArgoCD 无法连接到集群",
                "Git 仓库访问失败"
            ],
            answer: 1,
            rationale: "OutOfSync 表示集群中的实际状态与 Git 仓库中定义的期望状态存在差异，需要同步。"
        },
        {
            id: "w10-1-q6",
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
            id: "w10-1-q7",
            question: "为什么说 ArgoCD 采用 Pull 模式？",
            options: [
                "CI 直接调用 ArgoCD API 推送配置",
                "ArgoCD 主动从 Git 拉取配置并同步到集群",
                "用户手动触发每次同步",
                "Kubernetes 从 ArgoCD 拉取配置"
            ],
            answer: 1,
            rationale: "Pull 模式指 ArgoCD 控制器主动从 Git 仓库拉取配置，而非外部系统推送。CI 只需提交到 Git，无需访问集群。"
        },
        {
            id: "w10-1-q8",
            question: "Application 必须部署在哪个命名空间？",
            options: [
                "default 命名空间",
                "与 ArgoCD 相同的命名空间（通常是 argocd）",
                "任意命名空间",
                "kube-system 命名空间"
            ],
            answer: 1,
            rationale: "Application CRD 必须创建在 ArgoCD 所在的命名空间（通常是 argocd），这是 ArgoCD 的设计要求。"
        },
        {
            id: "w10-1-q9",
            question: "获取 ArgoCD 初始管理员密码的命令是什么？",
            options: [
                "kubectl get secret argocd-initial-admin-secret",
                "argocd admin initial-password -n argocd",
                "argocd login --password",
                "kubectl describe cm argocd-cm"
            ],
            answer: 1,
            rationale: "argocd admin initial-password -n argocd 命令从 Kubernetes Secret 中读取并解码初始管理员密码。"
        },
        {
            id: "w10-1-q10",
            question: "argocd app refresh 和 argocd app sync 的区别是什么？",
            options: [
                "refresh 同步资源，sync 刷新状态",
                "refresh 重新读取 Git 并对比状态，sync 实际应用变更到集群",
                "两者功能相同",
                "refresh 用于 Helm，sync 用于 Kustomize"
            ],
            answer: 1,
            rationale: "refresh 从 Git 重新获取配置并更新状态（检测是否 OutOfSync），sync 实际将变更应用到集群。"
        },
        {
            id: "w10-1-q11",
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
            id: "w10-1-q12",
            question: "Application 的 project 字段的作用是什么？",
            options: [
                "定义 Git 仓库路径",
                "定义权限边界和访问控制",
                "定义目标命名空间",
                "定义同步策略"
            ],
            answer: 1,
            rationale: "Project（AppProject）定义应用的权限边界，包括允许的源仓库、目标集群、资源类型等，实现多租户隔离。"
        },
        {
            id: "w10-1-q13",
            question: "targetRevision 可以是以下哪些值？",
            options: [
                "只能是分支名",
                "只能是 Tag",
                "分支名、Tag 或 commit SHA",
                "只能是 commit SHA"
            ],
            answer: 2,
            rationale: "targetRevision 支持分支名（如 main）、Tag（如 v1.0.0）或完整的 commit SHA，提供灵活的版本控制。"
        },
        {
            id: "w10-1-q14",
            question: "ArgoCD 支持哪些方式访问 Git 仓库？",
            options: [
                "只支持 HTTPS",
                "只支持 SSH",
                "HTTPS（用户名/Token）和 SSH（密钥）",
                "只支持 Git 协议"
            ],
            answer: 2,
            rationale: "ArgoCD 支持 HTTPS（使用用户名/密码或 Token）和 SSH（使用密钥对）两种方式访问 Git 仓库。"
        },
        {
            id: "w10-1-q15",
            question: "如何让 ArgoCD 在删除 Application 时也删除其管理的资源？",
            options: [
                "手动删除所有资源",
                "添加 resources-finalizer.argocd.argoproj.io finalizer",
                "设置 cascade=true 参数",
                "使用 kubectl delete 而非 argocd app delete"
            ],
            answer: 1,
            rationale: "添加 resources-finalizer.argocd.argoproj.io finalizer 后，删除 Application 会级联删除其管理的所有 Kubernetes 资源。"
        }
    ],
    "w10-2": [
        {
            id: "w10-2-q1",
            question: "启用 Auto-Sync 后，ArgoCD 什么时候会自动同步？",
            options: [
                "任何时候检测到差异",
                "只有 OutOfSync 状态的应用才会自动同步",
                "只在工作时间自动同步",
                "只在手动触发后自动同步"
            ],
            answer: 1,
            rationale: "Auto-Sync 只对 OutOfSync 状态的应用触发自动同步，且同一 commit + 参数组合只会同步一次。"
        },
        {
            id: "w10-2-q2",
            question: "Auto-Prune 功能的作用是什么？",
            options: [
                "自动修复集群状态漂移",
                "删除 Git 中已移除的资源",
                "清理旧版本的 ReplicaSet",
                "删除失败的同步记录"
            ],
            answer: 1,
            rationale: "Auto-Prune 启用后，当资源定义从 Git 中移除时，ArgoCD 会在同步时删除集群中对应的资源。"
        },
        {
            id: "w10-2-q3",
            question: "Self-Heal 功能解决什么问题？",
            options: [
                "修复 Git 仓库中的配置错误",
                "修复集群状态的漂移（如 kubectl 手动修改）",
                "修复 ArgoCD 组件故障",
                "修复网络连接问题"
            ],
            answer: 1,
            rationale: "Self-Heal 自动修复集群状态的漂移，当有人直接修改集群资源时，ArgoCD 会将其恢复到 Git 定义的状态。"
        },
        {
            id: "w10-2-q4",
            question: "Sync Wave 的执行顺序是怎样的？",
            options: [
                "随机执行",
                "按 wave 数字从大到小执行",
                "按 wave 数字从小到大执行",
                "按资源名称字母顺序执行"
            ],
            answer: 2,
            rationale: "Sync Wave 按数字从小到大执行，每个 wave 内的资源需要全部 Healthy 后才进入下一个 wave。"
        },
        {
            id: "w10-2-q5",
            question: "PreSync Hook 的用途是什么？",
            options: [
                "在同步后执行清理",
                "在应用清单之前执行（如数据库迁移）",
                "在同步失败时执行",
                "在应用删除时执行"
            ],
            answer: 1,
            rationale: "PreSync Hook 在应用主要清单之前执行，常用于数据库迁移、备份等前置操作，失败会阻止整个同步。"
        },
        {
            id: "w10-2-q6",
            question: "如果上次自动同步失败，Auto-Sync 会如何处理？",
            options: [
                "立即重试",
                "等待下一次调和周期重试",
                "不会自动重试，需要新的 commit 或手动触发",
                "发送告警后自动重试"
            ],
            answer: 2,
            rationale: "同一 commit + 参数组合只会尝试同步一次，失败后不会自动重试，需要新的 commit 或手动触发。"
        },
        {
            id: "w10-2-q7",
            question: "Replace 同步策略与默认的 Apply 有什么区别？",
            options: [
                "Replace 更快",
                "Replace 使用 kubectl replace 替换整个资源，而非 apply 合并",
                "Replace 不会删除资源",
                "Replace 只用于 ConfigMap"
            ],
            answer: 1,
            rationale: "Replace 使用 kubectl replace/create 完全替换资源，适用于资源 annotation 超过大小限制等场景。"
        },
        {
            id: "w10-2-q8",
            question: "PruneLast 选项的作用是什么？",
            options: [
                "最后才删除旧版本",
                "在所有资源 Healthy 后再执行删除操作",
                "只删除最后一个资源",
                "禁用自动删除"
            ],
            answer: 1,
            rationale: "PruneLast 让删除操作作为最后一个 wave 执行，确保新资源健康后再删除旧资源，减少服务中断。"
        },
        {
            id: "w10-2-q9",
            question: "如何保护特定资源不被 Prune 删除？",
            options: [
                "设置 Prune=false 注解",
                "将资源移到其他命名空间",
                "禁用整个应用的 Auto-Prune",
                "使用 Secret 类型"
            ],
            answer: 0,
            rationale: "为资源添加 argocd.argoproj.io/sync-options: Prune=false 注解可以保护该资源不被自动删除。"
        },
        {
            id: "w10-2-q10",
            question: "PostSync Hook 在什么时候执行？",
            options: [
                "同步开始前",
                "同步失败后",
                "同步成功且资源 Healthy 后",
                "应用删除后"
            ],
            answer: 2,
            rationale: "PostSync Hook 在同步成功且所有资源达到 Healthy 状态后执行，常用于验证测试或通知。"
        },
        {
            id: "w10-2-q11",
            question: "CreateNamespace=true 选项的作用是什么？",
            options: [
                "在 Git 中自动创建 namespace 定义",
                "如果目标命名空间不存在则自动创建",
                "将应用部署到新创建的命名空间",
                "创建 ArgoCD 专用命名空间"
            ],
            answer: 1,
            rationale: "CreateNamespace=true 允许 ArgoCD 在同步时自动创建目标命名空间（如果不存在），无需手动预先创建。"
        },
        {
            id: "w10-2-q12",
            question: "ApplyOutOfSyncOnly 选项的优势是什么？",
            options: [
                "只同步新增的资源",
                "只同步有变更的资源，提高大型应用的同步性能",
                "只在工作时间同步",
                "只同步 Deployment 类型资源"
            ],
            answer: 1,
            rationale: "ApplyOutOfSyncOnly 只对检测到差异的资源执行 apply，减少不必要的 API 调用，适合大型应用。"
        },
        {
            id: "w10-2-q13",
            question: "SyncFail Hook 在什么时候执行？",
            options: [
                "同步成功后",
                "同步失败时",
                "同步开始前",
                "应用删除时"
            ],
            answer: 1,
            rationale: "SyncFail Hook 在同步操作失败时执行，可用于清理部分创建的资源或发送失败通知。"
        },
        {
            id: "w10-2-q14",
            question: "ServerSideApply 选项的主要优势是什么？",
            options: [
                "更快的同步速度",
                "避免 kubectl apply 的 annotation 大小限制",
                "支持更多资源类型",
                "自动合并冲突"
            ],
            answer: 1,
            rationale: "ServerSideApply 使用 Kubernetes 服务端 apply，避免了客户端 apply 的 last-applied-configuration annotation 大小限制。"
        },
        {
            id: "w10-2-q15",
            question: "启用 Auto-Sync 后，Rollback 功能会怎样？",
            options: [
                "正常工作",
                "被禁用，因为 ArgoCD 会自动同步回 Git 最新状态",
                "需要手动确认",
                "只能回滚一个版本"
            ],
            answer: 1,
            rationale: "启用 Auto-Sync 后，手动 Rollback 会被 Auto-Sync 覆盖。要回滚需要修改 Git 仓库（如 revert commit）。"
        }
    ],
    "w10-3": [
        {
            id: "w10-3-q1",
            question: "Kustomize 的 Base/Overlay 模式如何工作？",
            options: [
                "Base 和 Overlay 是两个独立的应用",
                "Base 定义通用配置，Overlay 针对不同环境进行差异化覆盖",
                "Base 用于生产，Overlay 用于开发",
                "Base 是 Helm，Overlay 是原生 YAML"
            ],
            answer: 1,
            rationale: "Base 包含所有环境共用的基础配置，Overlay 为特定环境（dev/staging/prod）定义差异化配置，通过 patch 覆盖 Base。"
        },
        {
            id: "w10-3-q2",
            question: "ArgoCD 中 Helm values 的优先级顺序（从低到高）是什么？",
            options: [
                "parameters → values → valueFiles",
                "valueFiles → values → parameters",
                "values → valueFiles → parameters",
                "parameters → valueFiles → values"
            ],
            answer: 1,
            rationale: "优先级从低到高：默认 values.yaml → valueFiles → values → valuesObject → parameters，后者覆盖前者。"
        },
        {
            id: "w10-3-q3",
            question: "使用 Helm valueFiles 配置多环境时，文件覆盖顺序是怎样的？",
            options: [
                "随机顺序",
                "按文件名字母顺序",
                "列表中靠后的文件覆盖前面的值",
                "列表中靠前的文件优先级最高"
            ],
            answer: 2,
            rationale: "valueFiles 列表中后面的文件会覆盖前面文件的同名配置，因此通常先写通用配置再写环境特定配置。"
        },
        {
            id: "w10-3-q4",
            question: "什么情况下应该选择 Kustomize 而非 Helm？",
            options: [
                "需要复杂的条件逻辑和循环",
                "简单的 YAML 微调和声明式补丁",
                "使用社区 Helm Chart",
                "需要模板函数"
            ],
            answer: 1,
            rationale: "Kustomize 适合简单的声明式补丁和 YAML 微调，不需要学习模板语法。复杂逻辑场景更适合 Helm。"
        },
        {
            id: "w10-3-q5",
            question: "ArgoCD 的 ignoreDifferences 配置的作用是什么？",
            options: [
                "忽略所有差异",
                "忽略特定字段的差异，避免误报 OutOfSync",
                "忽略特定资源类型",
                "忽略特定命名空间的差异"
            ],
            answer: 1,
            rationale: "ignoreDifferences 让 ArgoCD 忽略指定字段的差异（如 HPA 管理的 replicas），避免预期的漂移被报告为 OutOfSync。"
        },
        {
            id: "w10-3-q6",
            question: "单仓库（Mono-repo）结构的主要优势是什么？",
            options: [
                "更好的权限隔离",
                "配置变更原子化，所有环境在一个 PR 中管理",
                "更容易扩展到大团队",
                "每个环境可以独立版本控制"
            ],
            answer: 1,
            rationale: "单仓库让所有环境配置在一起，配置变更更容易追踪，一个 PR 可以同时修改多环境。但权限控制粒度较粗。"
        },
        {
            id: "w10-3-q7",
            question: "ArgoCD 如何识别应用使用 Kustomize？",
            options: [
                "需要手动指定",
                "检测到 kustomization.yaml 文件时自动使用 Kustomize",
                "根据文件扩展名判断",
                "通过 Application 的 type 字段指定"
            ],
            answer: 1,
            rationale: "如果 source.path 指向的目录存在 kustomization.yaml 文件，ArgoCD 会自动使用 Kustomize 渲染清单。"
        },
        {
            id: "w10-3-q8",
            question: "Helm 的 ignoreMissingValueFiles 选项的作用是什么？",
            options: [
                "忽略所有 values 文件",
                "如果指定的 values 文件不存在则跳过而非报错",
                "忽略 values 文件中的缺失字段",
                "忽略 Chart 中的默认 values"
            ],
            answer: 1,
            rationale: "ignoreMissingValueFiles: true 允许配置可选的 values 文件，不存在时跳过，适合环境特定配置可能不存在的场景。"
        },
        {
            id: "w10-3-q9",
            question: "环境晋级（Promotion）的 Git 分支策略通常是怎样的？",
            options: [
                "所有环境使用同一分支",
                "dev 分支 → main 分支（staging）→ 创建 Tag（prod）",
                "每个环境一个独立仓库",
                "只使用 Tag，不使用分支"
            ],
            answer: 1,
            rationale: "典型策略是 dev 分支合并到 main 触发 staging 部署，验证后创建 Tag 触发 prod 部署，实现渐进式晋级。"
        },
        {
            id: "w10-3-q10",
            question: "ArgoCD 中 parameters 的作用是什么？",
            options: [
                "定义应用的环境变量",
                "在最高优先级覆盖 Helm values",
                "配置 Git 仓库参数",
                "定义同步参数"
            ],
            answer: 1,
            rationale: "parameters 具有最高优先级，可以覆盖所有 valueFiles 和 values 的配置，常用于临时覆盖或动态参数。"
        },
        {
            id: "w10-3-q11",
            question: "为什么需要为 HPA 管理的 replicas 字段配置 ignoreDifferences？",
            options: [
                "HPA 不支持 ArgoCD",
                "HPA 会自动调整 replicas，导致与 Git 定义不一致",
                "HPA 需要特殊权限",
                "ArgoCD 不支持 HPA"
            ],
            answer: 1,
            rationale: "HPA 会根据负载动态调整 Deployment 的 replicas，这个预期的漂移不应被报告为 OutOfSync。"
        },
        {
            id: "w10-3-q12",
            question: "Kustomize 的 components 功能用于什么场景？",
            options: [
                "引用外部 Helm Chart",
                "定义可复用的配置片段，按需组合",
                "自动生成 ConfigMap",
                "管理镜像版本"
            ],
            answer: 1,
            rationale: "components 是可复用的配置模块，不同 overlay 可以按需引入不同的 components，实现更灵活的组合。"
        },
        {
            id: "w10-3-q13",
            question: "ArgoCD 如何配置从不同仓库读取 Helm values 文件？",
            options: [
                "不支持此功能",
                "使用 multiple sources 配置多个 source",
                "使用 valueFiles 的 URL 语法",
                "通过 ConfigMap 引用"
            ],
            answer: 1,
            rationale: "ArgoCD 2.6+ 支持 multiple sources，可以从一个仓库读取 Chart，从另一个仓库读取 values 文件。"
        },
        {
            id: "w10-3-q14",
            question: "Kustomize overlay 目录通常包含什么文件？",
            options: [
                "完整的应用 YAML 文件",
                "kustomization.yaml 和环境特定的 patch 文件",
                "Helm values 文件",
                "Docker 镜像构建文件"
            ],
            answer: 1,
            rationale: "overlay 目录包含 kustomization.yaml（引用 base 并定义覆盖）和环境特定的 patch 文件或配置。"
        },
        {
            id: "w10-3-q15",
            question: "ArgoCD 的 namePrefix 和 nameSuffix 选项的作用是什么？",
            options: [
                "修改 ArgoCD 组件名称",
                "为 Kustomize 生成的资源名称添加前缀或后缀",
                "修改 Git 分支名称",
                "修改命名空间名称"
            ],
            answer: 1,
            rationale: "namePrefix/nameSuffix 是 Kustomize 的功能，ArgoCD 支持在 Application 中直接配置，为所有资源名称添加前缀或后缀。"
        }
    ],
    "w10-4": [
        {
            id: "w10-4-q1",
            question: "App of Apps 模式的核心概念是什么？",
            options: [
                "一个 Pod 运行多个容器",
                "一个父 Application 管理多个子 Application",
                "多个集群共享一个 Application",
                "一个 Git 仓库包含多个 Chart"
            ],
            answer: 1,
            rationale: "App of Apps 通过创建一个父 Application（指向包含多个 Application YAML 的目录），实现一键部署整个应用栈。"
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
                "自动为 ArgoCD 注册的每个集群生成 Application",
                "管理集群凭证",
                "同步集群配置"
            ],
            answer: 1,
            rationale: "Cluster Generator 自动匹配 ArgoCD 管理的集群，为每个集群生成 Application，适合多集群统一部署场景。"
        },
        {
            id: "w10-4-q4",
            question: "向 ArgoCD 添加远程集群的命令是什么？",
            options: [
                "argocd cluster create",
                "argocd cluster add <context-name>",
                "kubectl add cluster",
                "argocd register cluster"
            ],
            answer: 1,
            rationale: "argocd cluster add <context-name> 将 kubeconfig 中的集群添加到 ArgoCD 管理，需要有目标集群的管理权限。"
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
            question: "Argo Rollouts 的 Canary 策略如何工作？",
            options: [
                "一次性切换所有流量",
                "逐步增加新版本的流量比例（如 20%→40%→100%）",
                "同时运行两个完整的环境",
                "随机分配流量"
            ],
            answer: 1,
            rationale: "Canary 策略逐步将流量从旧版本切换到新版本，可以在每个阶段进行验证，发现问题时快速回滚。"
        },
        {
            id: "w10-4-q7",
            question: "App of Apps 模式需要特别注意什么安全问题？",
            options: [
                "子 Application 无法访问 Git",
                "父 Application 仓库的推送权限等同于集群管理权限",
                "无法配置 RBAC",
                "子 Application 不支持自动同步"
            ],
            answer: 1,
            rationale: "能向父 Application 仓库推送的人可以创建任意 Application，需要严格控制仓库访问权限。"
        },
        {
            id: "w10-4-q8",
            question: "Argo Rollouts 如何实现自动回滚？",
            options: [
                "监控 Pod 重启次数",
                "通过 Analysis 查询指标，不满足条件时自动回滚",
                "依赖 Kubernetes 原生能力",
                "需要手动触发"
            ],
            answer: 1,
            rationale: "Rollouts 的 Analysis 功能可以查询 Prometheus 等指标源，如果指标不满足预设条件（如成功率 < 99%），自动触发回滚。"
        },
        {
            id: "w10-4-q9",
            question: "ApplicationSet 的 Git Generator 的用途是什么？",
            options: [
                "从 Git 历史生成应用",
                "根据 Git 仓库目录结构自动生成 Application",
                "同步 Git 仓库",
                "管理 Git 凭证"
            ],
            answer: 1,
            rationale: "Git Generator 扫描 Git 仓库的目录结构，为每个匹配的目录生成 Application，适合目录组织的多环境/多应用场景。"
        },
        {
            id: "w10-4-q10",
            question: "Blue-Green 部署策略与 Canary 的主要区别是什么？",
            options: [
                "Blue-Green 更慢",
                "Blue-Green 同时运行两个完整环境，一次性切换流量",
                "Canary 不支持回滚",
                "Blue-Green 不需要额外资源"
            ],
            answer: 1,
            rationale: "Blue-Green 同时运行新旧两个完整环境，通过切换 Service 一次性切换流量。Canary 逐步切换流量比例。"
        },
        {
            id: "w10-4-q11",
            question: "在 App of Apps 模式中，如何确保子 Application 被级联删除？",
            options: [
                "手动删除每个子 Application",
                "为子 Application 添加 resources-finalizer.argocd.argoproj.io finalizer",
                "使用 kubectl delete",
                "禁用 Auto-Sync"
            ],
            answer: 1,
            rationale: "添加 finalizer 后，删除父 Application 会触发删除所有子 Application 及其管理的资源。"
        },
        {
            id: "w10-4-q12",
            question: "ArgoCD 添加集群时在目标集群创建了什么资源？",
            options: [
                "完整的 ArgoCD 组件",
                "ServiceAccount 和相关 RBAC 资源",
                "Prometheus 监控组件",
                "Ingress 资源"
            ],
            answer: 1,
            rationale: "argocd cluster add 在目标集群创建 ServiceAccount 和 ClusterRoleBinding，让 ArgoCD 能够管理该集群资源。"
        },
        {
            id: "w10-4-q13",
            question: "ApplicationSet 的 Matrix Generator 的作用是什么？",
            options: [
                "生成矩阵形式的报表",
                "组合多个 Generator 的结果，生成笛卡尔积",
                "按矩阵排列 Pod",
                "矩阵式部署策略"
            ],
            answer: 1,
            rationale: "Matrix Generator 组合多个 Generator（如 Cluster + List），生成所有组合的 Application，适合多维度部署场景。"
        },
        {
            id: "w10-4-q14",
            question: "Argo Rollouts 的流量切分需要什么支持？",
            options: [
                "只需要 Kubernetes Service",
                "需要 Ingress Controller 或 Service Mesh 的流量切分能力",
                "需要修改应用代码",
                "只支持 HTTP 流量"
            ],
            answer: 1,
            rationale: "精细的流量切分需要 Ingress Controller（NGINX、ALB）或 Service Mesh（Istio、Linkerd）提供流量权重控制能力。"
        },
        {
            id: "w10-4-q15",
            question: "如何禁用 ArgoCD 的 in-cluster 集群？",
            options: [
                "删除 argocd 命名空间",
                "在 argocd-cm ConfigMap 中设置 cluster.inClusterEnabled 为 false",
                "使用 argocd cluster rm",
                "删除 ServiceAccount"
            ],
            answer: 1,
            rationale: "in-cluster 是特殊集群，不能通过 argocd cluster rm 删除。需要在 argocd-cm ConfigMap 中设置配置项禁用。"
        }
    ]
}
