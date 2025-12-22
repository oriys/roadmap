import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "w9-1": {
        lessonId: "w9-1",
        background: [
            "【来源: GitHub Actions 文档】GitHub Actions 是一个持续集成和持续交付（CI/CD）平台，允许自动化构建、测试和部署流水线。工作流（Workflows）是定义在 `.github/workflows/` 目录下的 YAML 文件，由仓库事件（push、pull_request）、手动触发或定时计划激活执行。",
            "【来源: Jenkins Pipeline 文档】Jenkins Pipeline 是一套插件，支持将持续交付流水线以代码形式实现。核心概念包括：Pipeline（整个构建过程的模型）、Node（执行 Pipeline 的机器）、Stage（任务的逻辑分组如 Build/Test/Deploy）、Step（单个执行任务如 `sh 'make'`）。Pipeline 支持声明式（Declarative）和脚本式（Scripted）两种语法。",
            "【来源: Twelve-Factor App】Twelve-Factor 方法论强调「严格分离构建和运行阶段」（Build, Release, Run），确保构建产物的不可变性。第三条原则「配置存储在环境中」使同一制品可在不同部署环境运行。第十条「开发/生产一致性」要求保持各环境尽可能相似，减少差异导致的问题。",
            "【来源: SemVer 规范】语义化版本使用 MAJOR.MINOR.PATCH 格式：MAJOR 在有不兼容 API 变更时递增；MINOR 在向后兼容地添加功能时递增；PATCH 在向后兼容的 bug 修复时递增。版本 0.y.z 用于初始开发阶段，任何东西都可能随时改变；版本 1.0.0 标志着公共 API 的正式定义。",
            "【来源: SLSA 框架】SLSA（Supply-chain Levels for Software Artifacts）是防止篡改、改进完整性、保护软件包和基础设施的安全框架。它定义了四个递进的合规等级，从基础措施到高级抗篡改能力，涵盖源代码、构建流程和依赖管理。SLSA 由 Google、Intel 等领导，属于 OpenSSF 框架的一部分。"
        ],
        keyDifficulties: [
            "【GitHub Actions vs Jenkins】GitHub Actions 提供 GitHub 托管的运行器（Ubuntu/Windows/macOS），每次执行在全新虚拟机中运行，配置简单但自定义受限；Jenkins Pipeline 需要自行维护节点，但灵活性更高，适合复杂企业场景。理解两者的取舍对于选型至关重要。",
            "【CI 与 CD 边界】持续集成（CI）强调频繁将代码合并到主干并自动验证，产出可部署制品；持续交付（Continuous Delivery）需人工审批后部署；持续部署（Continuous Deployment）则完全自动化。根据风险承受能力和合规要求选择合适模式。",
            "【不可变制品与配置分离】Twelve-Factor 强调制品一旦构建完成就不应被修改，同一制品从测试到生产环境使用。运行时配置（环境变量、ConfigMap）与制品分离，避免为每个环境重新构建。使用 Git commit SHA 而非 latest 标签确保可追溯性。",
            "【Pipeline as Code】将 Jenkinsfile 或 GitHub Actions YAML 提交到源代码仓库，使流水线定义可版本控制、代码评审，并自动为所有分支和 PR 运行。Jenkins Pipeline 的核心优势包括：Code（版本化）、Durable（重启后恢复）、Pausable（人工审批门）、Versatile（并行/分叉）。"
        ],
        handsOnPath: [
            "在 GitHub 创建示例仓库，添加 `.github/workflows/ci.yml` 文件。配置在 push 和 pull_request 事件时触发，运行单元测试。观察 Actions 面板的运行结果、作业依赖和日志输出。",
            "扩展工作流添加多个 Job：lint 检查 → 构建 → 测试，配置 `needs` 依赖关系确保顺序执行。使用 `matrix` 策略在多个 Node.js 版本上并行测试。",
            "配置分支保护规则：在仓库 Settings → Branches 中，要求 PR 合并前必须通过 CI 检查（Status Checks）。尝试提交会导致测试失败的 PR，观察保护规则效果。",
            "使用 `actions/cache` 缓存依赖项（node_modules 或 Go modules），对比添加缓存前后的构建时间。理解缓存 key 的设计对命中率的影响。",
            "（可选）在本地安装 Jenkins，创建 Declarative Pipeline 项目。编写包含 Build、Test、Deploy 三个 stage 的 Jenkinsfile，体验声明式语法的结构化特点。"
        ],
        selfCheck: [
            "GitHub Actions 的工作流（Workflow）、作业（Job）、步骤（Step）和操作（Action）分别是什么？它们之间的关系是怎样的？",
            "Jenkins Pipeline 的声明式（Declarative）和脚本式（Scripted）语法各有什么特点？适用于什么场景？",
            "Twelve-Factor App 的哪些原则与 CI/CD 直接相关？为什么强调构建和运行阶段的严格分离？",
            "语义化版本的 MAJOR.MINOR.PATCH 各在什么情况下递增？版本 0.y.z 和 1.0.0 有什么区别？",
            "SLSA 框架的四个等级分别解决什么问题？它如何帮助组织提升供应链安全成熟度？"
        ],
        extensions: [
            "研究 GitHub Actions 的可重用工作流（Reusable Workflows）和组合操作（Composite Actions），了解如何在多个仓库间共享 CI 逻辑。",
            "探索 GitHub Actions 的 OIDC 与云厂商集成，了解如何无需存储长期凭证即可安全访问 AWS/GCP/Azure 资源。",
            "学习 Jenkins 的 Shared Libraries 机制，理解如何在组织内标准化和复用 Pipeline 代码。",
            "对比 GitHub Actions、GitLab CI、CircleCI、Azure Pipelines 等不同 CI/CD 工具的特点，了解它们在语法、运行模式、生态系统方面的差异。"
        ],
        sourceUrls: [
            "https://docs.github.com/en/actions/about-github-actions/understanding-github-actions",
            "https://www.jenkins.io/doc/book/pipeline/",
            "https://12factor.net/",
            "https://semver.org/",
            "https://slsa.dev/"
        ]
    },
    "w9-2": {
        lessonId: "w9-2",
        background: [
            "容器镜像是云原生应用交付的标准单元。CI 流水线的核心任务之一是将源代码构建成可部署的容器镜像，并推送到镜像仓库（Registry）。常见的 Registry 包括 Docker Hub、GitHub Container Registry（ghcr.io）、AWS ECR、Google GCR 等。",
            "Docker 镜像构建在 CI 中通常使用 BuildKit（docker buildx）以获得更好的性能和功能。BuildKit 支持并行构建、高效缓存、多架构镜像（linux/amd64、linux/arm64）等特性，是现代容器构建的推荐方案。",
            "镜像标签（Tag）策略直接影响部署的可追溯性和回滚能力。推荐使用 Git commit SHA 作为唯一标签，语义化版本（v1.2.3）作为发布标签。docker/metadata-action 可以根据 Git 事件自动生成合适的标签。",
            "镜像推送后会返回 Digest（sha256 哈希），这是镜像内容的唯一标识。即使标签被覆盖，Digest 也不会变化。在 Kubernetes 部署清单中使用 image:tag@sha256:digest 可以确保部署精确的镜像版本。"
        ],
        keyDifficulties: [
            "Registry 认证方式：Docker Hub 使用用户名/密码或 Access Token；GitHub Packages 使用 GITHUB_TOKEN 或 PAT；云厂商 Registry（ECR/GCR）通常使用 OIDC 或服务账号密钥。在 CI 中需要正确配置 Secrets 并使用 docker/login-action 登录。",
            "构建缓存策略：BuildKit 支持多种缓存模式。inline 缓存将缓存元数据写入镜像层；registry 缓存将缓存存储在远程仓库；GitHub Actions 的 gha 缓存使用 Actions Cache。合理配置缓存可以将构建时间从几分钟缩短到几十秒。",
            "多架构镜像构建：使用 docker buildx 可以在 x86 机器上构建 ARM 镜像（通过 QEMU 模拟）。配置 platforms: linux/amd64,linux/arm64 后，推送到 Registry 的是一个 manifest list，拉取时会自动选择匹配的架构。",
            "镜像体积优化：使用多阶段构建（multi-stage build）分离编译环境和运行环境；选择精简的基础镜像（alpine、distroless）；合理组织 Dockerfile 指令顺序以利用缓存；使用 .dockerignore 排除不必要的文件。"
        ],
        handsOnPath: [
            "在 GitHub 仓库中创建 .github/workflows/docker-publish.yml，配置使用 docker/login-action 登录到 GitHub Container Registry（ghcr.io）。使用 GITHUB_TOKEN 无需额外配置 Secrets。",
            "使用 docker/metadata-action 配置标签策略：push 到 main 分支时标签为 sha-<commit>；创建 tag 时生成语义化版本标签（v1.0.0）和 latest。观察生成的标签列表。",
            "配置 docker/build-push-action 构建并推送镜像。添加 cache-from 和 cache-to 配置使用 GitHub Actions 缓存。对比有无缓存时的构建时间差异。",
            "尝试构建多架构镜像：设置 platforms: linux/amd64,linux/arm64。推送后在 Registry 查看 manifest，确认包含两个架构的镜像。注意多架构构建会显著增加构建时间。",
            "在工作流输出中使用 ${{ steps.push.outputs.digest }} 获取镜像 Digest。可以将 Digest 写入文件或传递给后续的部署步骤，确保部署的是刚构建的精确版本。"
        ],
        selfCheck: [
            "CI 中登录不同 Registry（Docker Hub、ghcr.io、ECR）分别需要什么凭证？如何安全地存储这些凭证？",
            "docker/metadata-action 如何根据 Git 事件（push、tag、PR）自动生成不同的镜像标签？",
            "BuildKit 的缓存模式有哪些？在 GitHub Actions 中如何配置高效的构建缓存？",
            "什么是镜像 Digest？它与 Tag 有什么区别？为什么在部署时建议使用 Digest？",
            "多架构镜像是如何工作的？为什么需要构建多架构镜像？"
        ],
        extensions: [
            "研究 GitHub Actions 的 artifact attestation 功能，了解如何为镜像生成 SLSA 证明，增强供应链安全。",
            "探索 Kaniko、Buildah 等不需要 Docker daemon 的镜像构建工具，了解它们在 Kubernetes 环境中的应用场景。",
            "学习 Harbor、Nexus 等企业级私有 Registry 的功能，如镜像扫描、复制策略、访问控制等。",
            "研究 OCI 镜像规范和 Distribution 规范，理解镜像存储和分发的底层原理。"
        ],
        sourceUrls: [
            "https://docs.github.com/en/actions/publishing-packages/publishing-docker-images",
            "https://www.jenkins.io/doc/book/pipeline/docker/",
            "https://docs.docker.com/build/building/multi-stage/"
        ]
    },
    "w9-3": {
        lessonId: "w9-3",
        background: [
            "安全扫描是 CI/CD 流水线的关键环节，通过自动化检测漏洞、错误配置和敏感信息泄露，在代码进入生产环境前阻断安全风险。这种「安全左移」（Shift Left Security）的做法可以显著降低修复成本。",
            "Trivy 是目前最流行的开源安全扫描工具之一，支持扫描容器镜像、文件系统、Git 仓库、Kubernetes 集群等多种目标。它可以检测三类安全问题：已知漏洞（CVE）、IaC 配置错误（Terraform/K8s YAML）、敏感信息泄露（API 密钥、密码）。",
            "质量门禁（Quality Gate）是流水线中的检查点，只有满足预设条件的构建才能继续后续阶段。常见的质量门禁包括：测试覆盖率阈值、静态代码分析通过、无高危漏洞、代码评审通过等。质量门禁确保交付物满足最低质量标准。",
            "SARIF（Static Analysis Results Interchange Format）是安全扫描结果的标准格式，GitHub Code Scanning、GitLab、Azure DevOps 等平台都支持上传 SARIF 报告，在 PR 中直接显示安全问题，方便开发者修复。"
        ],
        keyDifficulties: [
            "漏洞严重级别与处理策略：CVE 按 CVSS 评分分为 CRITICAL/HIGH/MEDIUM/LOW。通常 CI 配置为发现 HIGH 或 CRITICAL 漏洞时失败（exit-code: 1）。但有时基础镜像的漏洞暂无补丁，可以使用 ignore-unfixed 参数跳过，或使用 .trivyignore 文件临时豁免特定 CVE。",
            "误报处理与豁免机制：安全扫描可能产生误报，或者某些漏洞在特定上下文下不可利用。需要建立豁免审批流程，记录豁免原因和有效期。VEX（Vulnerability Exploitability eXchange）是新兴的标准，用于声明漏洞的可利用性状态。",
            "扫描性能优化：漏洞数据库更新和镜像分析可能耗时较长。使用缓存（cache: true）可以避免每次构建都下载数据库；扫描时机选择很重要，可以在构建后、推送前扫描，避免污染 Registry。",
            "多工具协同：Trivy 擅长漏洞扫描，但完整的安全流水线还需要 SAST（静态代码分析如 SonarQube、CodeQL）、DAST（动态测试如 OWASP ZAP）、依赖检查（Dependabot、Snyk）等工具配合使用。"
        ],
        handsOnPath: [
            "在本地安装 Trivy，使用 trivy image <your-image> 扫描一个公共镜像（如 nginx:latest），观察输出的漏洞列表、严重级别和修复建议。",
            "在 GitHub Actions 工作流中添加 aquasecurity/trivy-action。配置 severity: 'CRITICAL,HIGH' 和 exit-code: '1'，当发现高危漏洞时让 CI 失败。推送代码观察效果。",
            "配置 SARIF 输出格式，使用 github/codeql-action/upload-sarif@v4 将扫描结果上传到 GitHub Code Scanning。在仓库的 Security 标签页查看漏洞报告。",
            "创建 .trivyignore 文件豁免某个特定的 CVE（出于学习目的）。观察豁免生效后扫描结果的变化。讨论在生产环境中如何管理豁免。",
            "扩展流水线添加额外的质量门禁：使用 actions/setup-node 运行 npm audit，使用静态分析工具（如 ESLint 的安全规则）检查代码。体验多层防护的效果。"
        ],
        selfCheck: [
            "Trivy 可以扫描哪些类型的目标？它能检测哪三类安全问题？",
            "如何配置 Trivy 在发现高危漏洞时让 CI 流水线失败？severity 和 exit-code 参数的作用是什么？",
            "什么是 SARIF 格式？它如何与 GitHub Code Scanning 集成？",
            "如何处理暂时无法修复的漏洞？.trivyignore 文件和 VEX 分别是什么？",
            "完整的安全流水线除了漏洞扫描外还需要哪些工具？SAST 和 DAST 的区别是什么？"
        ],
        extensions: [
            "研究 Trivy 的 IaC 扫描功能，了解如何检测 Terraform、Kubernetes YAML 中的配置错误，如过于宽松的权限、未加密的存储等。",
            "探索 Trivy Operator，了解如何在 Kubernetes 集群中持续扫描运行中的工作负载，而不仅仅是 CI 阶段的镜像扫描。",
            "学习 SBOM（Software Bill of Materials）的生成和使用，了解如何使用 Trivy 生成 SPDX 或 CycloneDX 格式的 SBOM。",
            "研究 GitHub Advanced Security 的 Dependabot 和 Code Scanning 功能，了解如何建立完整的软件供应链安全体系。"
        ],
        sourceUrls: [
            "https://trivy.dev/docs/latest/",
            "https://github.com/aquasecurity/trivy-action",
            "https://docs.github.com/en/code-security/code-scanning"
        ]
    },
    "w9-4": {
        lessonId: "w9-4",
        background: [
            "GitOps 是一种以 Git 为唯一真相源（Single Source of Truth）的运维模式。所有配置（Kubernetes 清单、Helm Chart、Kustomize）都存储在 Git 仓库中，集群状态通过自动化工具与 Git 中的声明保持同步。",
            "GitOps 的核心原则包括：声明式配置（所有配置以声明式方式定义）、版本控制（所有变更通过 Git 提交，有完整的审计追踪）、自动同步（控制器持续对比期望状态和实际状态，自动调和差异）、安全性（操作人员不直接访问集群，而是通过 Git 进行变更）。",
            "Push 模式 vs Pull 模式：传统 CI/CD 采用 Push 模式，由流水线直接向集群推送变更；GitOps 采用 Pull 模式，由集群内的控制器（ArgoCD/Flux）主动从 Git 拉取配置并应用。Pull 模式不需要暴露集群 API，安全性更高。",
            "ArgoCD 和 Flux 是两个主流的 GitOps 工具。ArgoCD 提供丰富的 Web UI 和可视化能力；Flux 采用模块化设计，更加轻量灵活。两者都支持多集群、多租户、渐进式交付等企业级功能。"
        ],
        keyDifficulties: [
            "Git 仓库结构设计：应用配置（App Repo）与基础设施配置（Infra Repo）是否分离？多环境（dev/staging/prod）如何组织？Kustomize overlays 和 Helm values 各有什么适用场景？这些设计决策影响团队协作和变更管理。",
            "漂移检测与自愈：GitOps 控制器会检测集群状态与 Git 定义的差异（漂移），可以配置自动修复（Self-Heal）或仅告警。理解什么情况下应该自动修复，什么情况下需要人工介入，是运维的关键。",
            "Secret 管理挑战：敏感信息不应明文存储在 Git 中。常见方案包括：Sealed Secrets（加密后存储在 Git）、External Secrets Operator（从 Vault/AWS Secrets Manager 同步）、SOPS（加密文件）。每种方案有不同的复杂度和安全权衡。",
            "CI 与 CD 的边界：CI 负责构建和测试，产出镜像；CD 负责部署。在 GitOps 模式下，CI 完成后应该更新 Git 仓库中的镜像标签，由 GitOps 工具完成部署。避免 CI 直接 kubectl apply 破坏 GitOps 模式。"
        ],
        handsOnPath: [
            "在本地 Kubernetes 集群（minikube/kind）中安装 ArgoCD。访问 Web UI，熟悉界面布局，了解 Application、Project、Repository 等核心概念。",
            "创建第一个 ArgoCD Application，指向一个包含 Kubernetes 清单的 Git 仓库。观察 ArgoCD 如何同步配置到集群，理解 Sync Status 和 Health Status 的含义。",
            "模拟漂移场景：使用 kubectl 直接修改集群中的资源（如 Deployment 的副本数）。观察 ArgoCD 如何检测到 OutOfSync 状态，手动触发 Sync 恢复期望状态。",
            "配置自动同步（Auto-Sync）和自愈（Self-Heal）：在 Application 中启用 automated.prune 和 automated.selfHeal，观察 ArgoCD 如何自动处理漂移和删除多余资源。",
            "设置 Webhook：配置 Git 仓库的 Webhook 指向 ArgoCD，实现 push 后立即触发同步，减少轮询延迟。"
        ],
        selfCheck: [
            "GitOps 的核心原则是什么？为什么说 Git 是唯一真相源？",
            "Push 模式和 Pull 模式有什么区别？为什么 GitOps 推荐 Pull 模式？",
            "ArgoCD 和 Flux 各有什么特点？它们分别适用于什么场景？",
            "如何在 GitOps 模式下管理 Secret？Sealed Secrets 和 External Secrets Operator 有什么区别？",
            "CI 完成后应该如何触发 GitOps 部署？为什么不应该在 CI 中直接 kubectl apply？"
        ],
        extensions: [
            "研究 ArgoCD 的 App of Apps 模式，了解如何用一个 Application 管理多个 Application，实现集群引导和多应用编排。",
            "探索 Flux 的 Image Automation 功能，了解如何自动检测新镜像并更新 Git 仓库中的镜像标签。",
            "学习渐进式交付（Progressive Delivery）工具如 Argo Rollouts 和 Flagger，了解如何实现金丝雀发布和蓝绿部署。",
            "研究 GitOps 在多集群场景下的应用，了解 ArgoCD ApplicationSet 和 Flux 的多集群管理能力。"
        ],
        sourceUrls: [
            "https://argo-cd.readthedocs.io/en/stable/",
            "https://fluxcd.io/flux/",
            "https://opengitops.dev/"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "w9-1": [
        {
            id: "w9-1-q1",
            question: "根据 GitHub Actions 文档，工作流（Workflow）文件应该存放在哪个目录？",
            options: [
                ".github/workflows/ 目录下的 YAML 文件",
                ".ci/ 目录下的 JSON 文件",
                "项目根目录的 workflow.yml 文件",
                ".actions/ 目录下的配置文件"
            ],
            answer: 0,
            rationale: "GitHub Actions 文档明确指出，工作流是定义在 `.github/workflows/` 目录下的 YAML 文件。"
        },
        {
            id: "w9-1-q2",
            question: "根据 Jenkins Pipeline 文档，Pipeline 的核心概念中，Stage 是什么？",
            options: [
                "任务的逻辑分组，如 Build、Test、Deploy 阶段",
                "执行 Pipeline 的物理机器",
                "单个执行任务如 sh 'make'",
                "整个构建过程的完整模型"
            ],
            answer: 0,
            rationale: "Jenkins 文档定义 Stage 为「概念上不同的任务子集，贯穿整个 Pipeline（如 Build、Test、Deploy 阶段）」。"
        },
        {
            id: "w9-1-q3",
            question: "根据 Twelve-Factor App 方法论，第五条原则「Build, Release, Run」强调什么？",
            options: [
                "严格分离构建和运行阶段，确保构建产物的不可变性",
                "将所有代码放在一个仓库中",
                "使用相同的配置文件在所有环境运行",
                "手动部署到生产环境"
            ],
            answer: 0,
            rationale: "Twelve-Factor 第五条原则明确要求「严格分离构建和运行阶段」（Strictly separate build and run stages）。"
        },
        {
            id: "w9-1-q4",
            question: "根据语义化版本（SemVer）规范，MAJOR 版本号在什么情况下递增？",
            options: [
                "有不兼容的 API 变更时",
                "向后兼容地添加新功能时",
                "向后兼容的 bug 修复时",
                "文档更新时"
            ],
            answer: 0,
            rationale: "SemVer 规范明确定义：MAJOR 在「incompatible API changes」（不兼容的 API 变更）时递增。"
        },
        {
            id: "w9-1-q5",
            question: "根据 SemVer 规范，版本 0.y.z 和 1.0.0 的区别是什么？",
            options: [
                "0.y.z 用于初始开发阶段，任何东西都可能改变；1.0.0 标志公共 API 正式定义",
                "0.y.z 表示稳定版本，1.0.0 表示测试版本",
                "两者没有区别，只是数字不同",
                "0.y.z 只能用于内部项目"
            ],
            answer: 0,
            rationale: "SemVer 规范指出：版本 0.y.z 用于初始开发，「任何东西都可能随时改变」；版本 1.0.0 标志着公共 API 的正式定义。"
        },
        {
            id: "w9-1-q6",
            question: "根据 SLSA 框架文档，SLSA 的主要目标是什么？",
            options: [
                "防止篡改、改进完整性、保护软件包和基础设施",
                "加速软件构建速度",
                "减少代码行数",
                "自动生成文档"
            ],
            answer: 0,
            rationale: "SLSA 官网明确指出其目标是「防止篡改、改进完整性、保护软件包和基础设施」。"
        },
        {
            id: "w9-1-q7",
            question: "根据 Jenkins Pipeline 文档，Pipeline as Code 的核心优势是什么？",
            options: [
                "Code（版本化）、Durable（重启恢复）、Pausable（审批门）、Versatile（并行）",
                "只能在 Windows 上运行",
                "不需要任何配置文件",
                "自动修复代码 bug"
            ],
            answer: 0,
            rationale: "Jenkins 文档列出 Pipeline 的核心优势：Code、Durable、Pausable、Versatile 和 Extensible。"
        },
        {
            id: "w9-1-q8",
            question: "根据 GitHub Actions 文档，Runner 是什么？",
            options: [
                "执行工作流的服务器，GitHub 提供 Ubuntu/Windows/macOS 运行器",
                "编写工作流的编辑器",
                "存储代码的仓库",
                "管理权限的控制台"
            ],
            answer: 0,
            rationale: "GitHub Actions 文档定义 Runner 为执行工作流的服务器，GitHub 提供 Linux、Windows 和 macOS 虚拟机。"
        },
        {
            id: "w9-1-q9",
            question: "根据 Twelve-Factor App，第三条原则「Config」要求什么？",
            options: [
                "将配置存储在环境中，使同一制品可在不同部署环境运行",
                "将配置硬编码在代码中",
                "每个环境使用不同的代码仓库",
                "配置文件必须使用 JSON 格式"
            ],
            answer: 0,
            rationale: "Twelve-Factor 第三条「Config」明确要求「Store config in the environment」（将配置存储在环境中）。"
        },
        {
            id: "w9-1-q10",
            question: "根据 Jenkins Pipeline 文档，声明式（Declarative）和脚本式（Scripted）语法的主要区别是？",
            options: [
                "声明式更易读有结构化 pipeline 块，脚本式使用 node 块更灵活但需要 Groovy 知识",
                "两者完全相同",
                "声明式只能在 Linux 上运行",
                "脚本式不支持并行执行"
            ],
            answer: 0,
            rationale: "Jenkins 文档指出：声明式使用 pipeline 块结构，易读性好；脚本式使用 node 块，更灵活但需要 Groovy 知识。"
        },
        {
            id: "w9-1-q11",
            question: "根据 GitHub Actions 文档，Job 之间如何建立依赖关系？",
            options: [
                "使用 needs 关键字指定依赖的 Job",
                "按字母顺序自动排序",
                "无法建立依赖关系",
                "使用 depends 关键字"
            ],
            answer: 0,
            rationale: "GitHub Actions 文档说明 Job 可以并行运行或通过 needs 关键字建立依赖关系，依赖其他 Job 完成。"
        },
        {
            id: "w9-1-q12",
            question: "根据 SemVer 规范，预发布版本（Pre-release）如何表示？",
            options: [
                "在版本号后追加连字符和标识符，如 1.0.0-alpha、1.0.0-beta.1",
                "使用负数版本号",
                "在版本号前加 pre- 前缀",
                "使用特殊字符 @ 分隔"
            ],
            answer: 0,
            rationale: "SemVer 规范定义预发布版本「通过追加连字符和标识符表示」，如 1.0.0-alpha。"
        },
        {
            id: "w9-1-q13",
            question: "根据 SLSA 框架，其四个等级是如何设计的？",
            options: [
                "递进式设计，从基础措施到高级抗篡改能力",
                "四个等级完全独立，没有递进关系",
                "只有第四级有实际意义",
                "等级越低安全性越高"
            ],
            answer: 0,
            rationale: "SLSA 官网说明采用「递进式的四个合规等级设计」，从基础措施到高级抗篡改能力。"
        },
        {
            id: "w9-1-q14",
            question: "根据 Twelve-Factor App，第十条原则「Dev/prod parity」的目的是什么？",
            options: [
                "保持开发、预发布和生产环境尽可能相似，减少环境差异导致的问题",
                "开发环境和生产环境必须使用不同的代码",
                "只在生产环境运行测试",
                "禁止使用预发布环境"
            ],
            answer: 0,
            rationale: "Twelve-Factor 第十条要求「Keep development, staging, and production as similar as possible」。"
        },
        {
            id: "w9-1-q15",
            question: "根据 GitHub Actions 文档，Matrix 策略的作用是什么？",
            options: [
                "使用不同的变量组合运行同一个 Job，如在多个版本上并行测试",
                "加密工作流中的敏感信息",
                "限制并发运行的 Job 数量",
                "自动合并 PR"
            ],
            answer: 0,
            rationale: "GitHub Actions 文档说明 Matrix 策略「enables running the same job with different variable combinations」。"
        }
    ],
    "w9-2": [
        {
            id: "w9-2-q1",
            question: "在 CI 中推送镜像到 Registry 之前需要做什么？",
            options: [
                "使用 docker/login-action 或类似方式登录目标 Registry",
                "删除本地所有镜像",
                "重启 Docker daemon",
                "修改 Kubernetes 配置"
            ],
            answer: 0,
            rationale: "推送镜像需要先通过认证，否则 Registry 会拒绝未授权的推送请求。"
        },
        {
            id: "w9-2-q2",
            question: "GitHub Actions 中构建 Docker 镜像的推荐工具组合是？",
            options: [
                "docker/login-action + docker/metadata-action + docker/build-push-action",
                "直接运行 docker build 和 docker push 命令",
                "使用 Kubernetes 构建镜像",
                "使用 npm 构建镜像"
            ],
            answer: 0,
            rationale: "这三个官方 action 组合提供了登录、标签生成、构建推送的完整功能，是 GitHub Actions 的最佳实践。"
        },
        {
            id: "w9-2-q3",
            question: "为什么推荐使用 Git commit SHA 作为镜像标签？",
            options: [
                "保证唯一性和可追溯性，便于定位具体代码版本和回滚",
                "减小镜像体积",
                "提高构建速度",
                "避免需要登录 Registry"
            ],
            answer: 0,
            rationale: "Commit SHA 是唯一的，可以精确关联到代码版本，比 latest 等可变标签更可靠。"
        },
        {
            id: "w9-2-q4",
            question: "什么是镜像 Digest？",
            options: [
                "镜像内容的 sha256 哈希，是镜像的唯一且不可变的标识",
                "镜像的大小",
                "镜像的创建时间",
                "镜像的标签列表"
            ],
            answer: 0,
            rationale: "Digest 是基于镜像内容计算的哈希值，即使标签被覆盖，Digest 也不会变化。"
        },
        {
            id: "w9-2-q5",
            question: "docker/metadata-action 的主要作用是？",
            options: [
                "根据 Git 事件（push、tag、PR）自动生成合适的镜像标签和标签",
                "扫描镜像漏洞",
                "压缩镜像体积",
                "登录 Registry"
            ],
            answer: 0,
            rationale: "metadata-action 根据触发事件自动生成标签，如 push 生成 sha 标签，tag 生成版本标签。"
        },
        {
            id: "w9-2-q6",
            question: "BuildKit 相比传统 Docker 构建有什么优势？",
            options: [
                "支持并行构建、高效缓存、多架构镜像等特性",
                "只能在 Windows 上运行",
                "不需要 Dockerfile",
                "自动生成代码"
            ],
            answer: 0,
            rationale: "BuildKit 是现代容器构建引擎，提供更好的性能、缓存和多平台支持。"
        },
        {
            id: "w9-2-q7",
            question: "在 GitHub Actions 中如何安全地存储 Registry 凭证？",
            options: [
                "使用 GitHub Secrets 存储，在工作流中通过 ${{ secrets.XXX }} 引用",
                "直接写在 Dockerfile 中",
                "提交到 Git 仓库",
                "硬编码在工作流文件中"
            ],
            answer: 0,
            rationale: "Secrets 加密存储敏感信息，不会在日志中暴露，是安全存储凭证的标准方式。"
        },
        {
            id: "w9-2-q8",
            question: "多架构镜像（Multi-platform image）是如何工作的？",
            options: [
                "通过 manifest list 索引不同架构的镜像，拉取时自动选择匹配的架构",
                "在一个镜像中包含所有架构的代码",
                "每次拉取时重新编译",
                "只支持 x86 架构"
            ],
            answer: 0,
            rationale: "Multi-platform image 是一个 manifest list，指向多个架构的镜像，客户端根据自身架构选择。"
        },
        {
            id: "w9-2-q9",
            question: "构建镜像时使用缓存的主要目的是？",
            options: [
                "避免重复下载依赖和重建未变化的层，显著缩短构建时间",
                "增加镜像体积",
                "提高镜像安全性",
                "减少标签数量"
            ],
            answer: 0,
            rationale: "合理配置缓存可以将构建时间从几分钟缩短到几十秒，大幅提升 CI 效率。"
        },
        {
            id: "w9-2-q10",
            question: "登录 GitHub Container Registry（ghcr.io）可以使用什么凭证？",
            options: [
                "GITHUB_TOKEN 或 Personal Access Token（PAT）",
                "AWS IAM 密钥",
                "SSH 密钥",
                "Docker Hub 密码"
            ],
            answer: 0,
            rationale: "ghcr.io 使用 GitHub 的认证系统，GITHUB_TOKEN 在 Actions 中自动可用，无需额外配置。"
        },
        {
            id: "w9-2-q11",
            question: "镜像推送失败的常见原因有哪些？",
            options: [
                "未登录、权限不足、网络不可达、Registry 地址错误",
                "Dockerfile 语法正确",
                "镜像太小",
                "使用了多阶段构建"
            ],
            answer: 0,
            rationale: "排查推送问题时应检查认证状态、用户权限、网络连接和 Registry URL 配置。"
        },
        {
            id: "w9-2-q12",
            question: "使用 image:tag@sha256:digest 格式的好处是？",
            options: [
                "即使标签被覆盖，也能确保拉取到精确的镜像版本",
                "减小镜像体积",
                "加快拉取速度",
                "隐藏镜像内容"
            ],
            answer: 0,
            rationale: "Digest 是不可变的，使用 tag@digest 格式可以防止标签漂移导致的部署不一致。"
        },
        {
            id: "w9-2-q13",
            question: "GitHub Actions 中 gha 缓存类型是什么？",
            options: [
                "使用 GitHub Actions Cache 服务存储 BuildKit 缓存",
                "使用 Google Cloud Storage",
                "使用 AWS S3",
                "使用本地磁盘"
            ],
            answer: 0,
            rationale: "gha 是 GitHub Actions 专用的缓存后端，与 Actions Cache 服务集成，跨工作流共享缓存。"
        },
        {
            id: "w9-2-q14",
            question: "为什么企业环境经常使用私有 Registry？",
            options: [
                "控制访问权限、镜像扫描、加速拉取、满足合规要求",
                "只是为了省钱",
                "公共 Registry 不支持 Docker 镜像",
                "私有 Registry 构建更快"
            ],
            answer: 0,
            rationale: "私有 Registry 如 Harbor 提供访问控制、漏洞扫描、镜像签名等企业级功能。"
        },
        {
            id: "w9-2-q15",
            question: "构建多架构镜像时，如何在 x86 机器上构建 ARM 镜像？",
            options: [
                "通过 QEMU 模拟 ARM 指令集",
                "必须使用 ARM 机器",
                "不可能实现",
                "使用特殊的 Dockerfile 语法"
            ],
            answer: 0,
            rationale: "docker buildx 通过 QEMU 模拟器可以在 x86 机器上构建其他架构的镜像，但速度会慢一些。"
        }
    ],
    "w9-3": [
        {
            id: "w9-3-q1",
            question: "Trivy 可以扫描哪些类型的目标？",
            options: [
                "容器镜像、文件系统、Git 仓库、Kubernetes 集群等",
                "仅容器镜像",
                "仅源代码",
                "仅 Kubernetes Pod"
            ],
            answer: 0,
            rationale: "Trivy 是全面的安全扫描工具，支持多种扫描目标类型。"
        },
        {
            id: "w9-3-q2",
            question: "Trivy 可以检测哪三类安全问题？",
            options: [
                "已知漏洞（CVE）、IaC 配置错误、敏感信息泄露",
                "只能检测漏洞",
                "只能检测密码泄露",
                "只能检测配置错误"
            ],
            answer: 0,
            rationale: "Trivy 提供全面的安全检测，涵盖漏洞、配置和敏感信息三个维度。"
        },
        {
            id: "w9-3-q3",
            question: "如何配置 Trivy 在发现高危漏洞时让 CI 失败？",
            options: [
                "设置 severity: 'CRITICAL,HIGH' 和 exit-code: '1'",
                "设置 fail-on-vuln: true",
                "不需要配置，默认就会失败",
                "只能通过命令行参数配置"
            ],
            answer: 0,
            rationale: "severity 指定关注的漏洞级别，exit-code: 1 让发现问题时返回非零退出码导致 CI 失败。"
        },
        {
            id: "w9-3-q4",
            question: "什么是 SARIF 格式？",
            options: [
                "静态分析结果交换格式，用于在 CI 平台中展示安全扫描结果",
                "一种镜像格式",
                "一种容器运行时",
                "一种编程语言"
            ],
            answer: 0,
            rationale: "SARIF（Static Analysis Results Interchange Format）是安全工具结果的标准格式，GitHub 等平台支持上传和展示。"
        },
        {
            id: "w9-3-q5",
            question: "如何将 Trivy 扫描结果上传到 GitHub Code Scanning？",
            options: [
                "配置 format: 'sarif' 输出，然后使用 github/codeql-action/upload-sarif 上传",
                "Trivy 自动上传",
                "使用 git push 上传",
                "需要手动复制粘贴"
            ],
            answer: 0,
            rationale: "需要两个步骤：Trivy 生成 SARIF 格式报告，然后使用 CodeQL action 上传到 GitHub。"
        },
        {
            id: "w9-3-q6",
            question: ".trivyignore 文件的作用是什么？",
            options: [
                "临时豁免特定的 CVE，避免已知但暂时无法修复的漏洞阻塞 CI",
                "忽略所有漏洞",
                "配置扫描目标",
                "存储 Trivy 凭证"
            ],
            answer: 0,
            rationale: ".trivyignore 允许在有合理理由时跳过特定漏洞，但应谨慎使用并记录豁免原因。"
        },
        {
            id: "w9-3-q7",
            question: "为什么要在 CI 中启用 Trivy 的数据库缓存？",
            options: [
                "避免每次构建都下载漏洞数据库，加快扫描速度",
                "增加扫描准确性",
                "减少漏洞数量",
                "隐藏扫描结果"
            ],
            answer: 0,
            rationale: "缓存漏洞数据库可以显著减少扫描时间，特别是在频繁构建的场景下。"
        },
        {
            id: "w9-3-q8",
            question: "什么是质量门禁（Quality Gate）？",
            options: [
                "流水线中的检查点，只有满足预设条件的构建才能继续后续阶段",
                "一种防火墙",
                "一种镜像仓库",
                "一种测试框架"
            ],
            answer: 0,
            rationale: "质量门禁确保交付物满足最低质量标准，如无高危漏洞、测试通过等。"
        },
        {
            id: "w9-3-q9",
            question: "SAST 和 DAST 的区别是什么？",
            options: [
                "SAST 是静态代码分析（不运行代码），DAST 是动态测试（运行中的应用）",
                "两者完全相同",
                "SAST 更快，DAST 更慢",
                "SAST 只检测漏洞，DAST 只检测配置"
            ],
            answer: 0,
            rationale: "SAST 分析源代码或字节码，DAST 通过网络请求测试运行中的应用，各有优缺点。"
        },
        {
            id: "w9-3-q10",
            question: "ignore-unfixed 参数的作用是？",
            options: [
                "跳过目前没有可用补丁的漏洞",
                "忽略所有漏洞",
                "只显示未修复的漏洞",
                "自动修复漏洞"
            ],
            answer: 0,
            rationale: "某些漏洞可能存在于基础镜像中且暂无补丁，ignore-unfixed 可以过滤这类无法立即解决的问题。"
        },
        {
            id: "w9-3-q11",
            question: "CVE 按 CVSS 评分分为哪些严重级别？",
            options: [
                "CRITICAL、HIGH、MEDIUM、LOW",
                "只有 HIGH 和 LOW",
                "1-10 数字级别",
                "A、B、C、D 等级"
            ],
            answer: 0,
            rationale: "CVSS 评分对应不同的严重级别，帮助确定漏洞处理的优先级。"
        },
        {
            id: "w9-3-q12",
            question: "VEX（Vulnerability Exploitability eXchange）的作用是？",
            options: [
                "声明漏洞的可利用性状态，帮助判断漏洞在特定上下文下是否真正有风险",
                "自动修复漏洞",
                "生成漏洞报告",
                "扫描容器镜像"
            ],
            answer: 0,
            rationale: "VEX 是新兴标准，允许供应商声明某个漏洞在其产品中不可利用，减少误报噪音。"
        },
        {
            id: "w9-3-q13",
            question: "Trivy 扫描应该在流水线的哪个阶段执行？",
            options: [
                "构建后、推送到生产 Registry 前",
                "只在部署后",
                "只在本地开发时",
                "只在年度审计时"
            ],
            answer: 0,
            rationale: "在推送前扫描可以阻止有漏洞的镜像进入 Registry，是安全左移的体现。"
        },
        {
            id: "w9-3-q14",
            question: "完整的安全流水线除了漏洞扫描还需要哪些工具？",
            options: [
                "SAST（静态代码分析）、DAST（动态测试）、依赖检查、Secret 扫描等",
                "只需要 Trivy 就够了",
                "只需要防火墙",
                "只需要杀毒软件"
            ],
            answer: 0,
            rationale: "多层安全防护（Defense in Depth）需要多种工具配合，覆盖不同类型的安全风险。"
        },
        {
            id: "w9-3-q15",
            question: "Trivy 的 IaC 扫描功能可以检测什么问题？",
            options: [
                "Terraform、Kubernetes YAML 中的配置错误，如过于宽松的权限",
                "只能检测漏洞",
                "只能检测代码语法错误",
                "只能检测性能问题"
            ],
            answer: 0,
            rationale: "Trivy 使用内置的 Rego 规则检测 IaC 配置中的安全隐患和最佳实践违规。"
        }
    ],
    "w9-4": [
        {
            id: "w9-4-q1",
            question: "GitOps 的核心思想是什么？",
            options: [
                "以 Git 作为唯一真相源，集群状态通过控制器与 Git 中的声明保持同步",
                "使用 Git 存储代码",
                "用 Git 替代 Kubernetes",
                "只在 Git 中存储密码"
            ],
            answer: 0,
            rationale: "GitOps 强调声明式配置存储在 Git 中，控制器持续调和集群状态与 Git 定义一致。"
        },
        {
            id: "w9-4-q2",
            question: "Push 模式与 Pull 模式的主要区别是什么？",
            options: [
                "Push 模式由 CI 直接部署到集群，Pull 模式由集群内控制器从 Git 拉取配置",
                "Push 更安全",
                "Pull 需要人工确认每次部署",
                "两者完全相同"
            ],
            answer: 0,
            rationale: "GitOps 采用 Pull 模式，由 ArgoCD/Flux 等控制器主动从 Git 拉取并应用配置。"
        },
        {
            id: "w9-4-q3",
            question: "GitOps 带来的主要好处包括？",
            options: [
                "审计可追溯、易于回滚、减少手工操作导致的漂移",
                "部署速度必然变慢",
                "不需要任何权限控制",
                "消除测试需求"
            ],
            answer: 0,
            rationale: "Git 提供完整的变更历史和审计追踪，自动同步减少人为错误。"
        },
        {
            id: "w9-4-q4",
            question: "为什么不建议在 GitOps 模式下直接用 kubectl 修改集群资源？",
            options: [
                "会导致漂移，GitOps 控制器会检测到差异并可能回滚，且变更无法审计",
                "kubectl 不能修改资源",
                "会导致集群崩溃",
                "没有任何问题"
            ],
            answer: 0,
            rationale: "手动修改与 Git 源脱节，破坏 GitOps 的一致性保证，影响审计和回滚能力。"
        },
        {
            id: "w9-4-q5",
            question: "ArgoCD 和 Flux 的主要区别是什么？",
            options: [
                "ArgoCD 提供丰富的 Web UI，Flux 采用模块化设计更轻量",
                "ArgoCD 不支持 Kubernetes",
                "Flux 只能用于单个集群",
                "两者功能完全相同"
            ],
            answer: 0,
            rationale: "ArgoCD 有完善的可视化界面，Flux 更加模块化和轻量，各有适用场景。"
        },
        {
            id: "w9-4-q6",
            question: "如何在 GitOps 模式下触发部署？",
            options: [
                "通过 Git 仓库的 Webhook 或控制器的轮询机制",
                "只能手动 SSH 到集群",
                "必须重启控制器",
                "通过 kubelet"
            ],
            answer: 0,
            rationale: "GitOps 控制器支持定期轮询 Git 仓库，也可以配置 Webhook 实现推送后立即同步。"
        },
        {
            id: "w9-4-q7",
            question: "ArgoCD Application CRD 的主要字段包括？",
            options: [
                "source（配置来源）、destination（目标集群/命名空间）、syncPolicy（同步策略）",
                "只有 name 字段",
                "只有 image 字段",
                "只有 replicas 字段"
            ],
            answer: 0,
            rationale: "Application 定义了从哪里获取配置（source）、部署到哪里（destination）以及如何同步（syncPolicy）。"
        },
        {
            id: "w9-4-q8",
            question: "GitOps 如何实现回滚？",
            options: [
                "回退 Git 提交或切换到旧版本的 Tag，控制器自动同步到对应状态",
                "必须手动删除所有资源",
                "需要重新部署集群",
                "无法回滚"
            ],
            answer: 0,
            rationale: "Git 历史就是版本控制，通过 revert 或切换分支/标签，控制器会调和到对应状态。"
        },
        {
            id: "w9-4-q9",
            question: "如何在 GitOps 模式下管理 Secret？",
            options: [
                "使用 Sealed Secrets、External Secrets Operator 或 SOPS 等方案，避免明文存储",
                "直接将密码提交到 Git",
                "不需要管理 Secret",
                "使用环境变量硬编码"
            ],
            answer: 0,
            rationale: "敏感信息不应明文存储在 Git 中，需要使用加密或外部 Secret 管理方案。"
        },
        {
            id: "w9-4-q10",
            question: "什么是漂移（Drift）检测？",
            options: [
                "检测集群实际状态与 Git 中定义的期望状态之间的差异",
                "检测网络延迟",
                "检测 CPU 使用率",
                "检测磁盘空间"
            ],
            answer: 0,
            rationale: "GitOps 控制器持续对比期望状态和实际状态，发现差异即为漂移。"
        },
        {
            id: "w9-4-q11",
            question: "ArgoCD 的 Self-Heal 功能是什么？",
            options: [
                "自动修复集群状态与 Git 定义的差异，恢复到期望状态",
                "自动修复代码 bug",
                "自动升级 Kubernetes 版本",
                "自动扩容节点"
            ],
            answer: 0,
            rationale: "启用 Self-Heal 后，当检测到漂移时 ArgoCD 会自动触发同步恢复期望状态。"
        },
        {
            id: "w9-4-q12",
            question: "CI 完成后如何正确触发 GitOps 部署？",
            options: [
                "CI 更新 Git 仓库中的镜像标签，GitOps 工具检测到变更后自动部署",
                "CI 直接运行 kubectl apply",
                "手动修改集群配置",
                "重启所有 Pod"
            ],
            answer: 0,
            rationale: "在 GitOps 模式下，CI 应该修改 Git 仓库（如更新 values.yaml 中的镜像标签），部署由 GitOps 工具负责。"
        },
        {
            id: "w9-4-q13",
            question: "多环境（dev/staging/prod）在 GitOps 中通常如何管理？",
            options: [
                "使用 Kustomize overlays 或 Helm values 文件区分不同环境的配置",
                "每个环境使用完全不同的代码仓库",
                "所有环境使用完全相同的配置",
                "不支持多环境"
            ],
            answer: 0,
            rationale: "Kustomize 通过 overlays 覆盖基础配置，Helm 通过不同的 values 文件实现环境差异化。"
        },
        {
            id: "w9-4-q14",
            question: "为什么 Pull 模式比 Push 模式更安全？",
            options: [
                "不需要暴露集群 API 给外部 CI 系统，控制器在集群内运行",
                "Pull 模式不需要认证",
                "Push 模式无法部署应用",
                "两者安全性相同"
            ],
            answer: 0,
            rationale: "Pull 模式中 CI 不需要集群访问权限，只需要 Git 写权限，减少了攻击面。"
        },
        {
            id: "w9-4-q15",
            question: "什么是 App of Apps 模式？",
            options: [
                "用一个 ArgoCD Application 管理多个 Application，实现集群引导和批量管理",
                "一个应用运行多个容器",
                "多个应用共享一个 Pod",
                "应用之间的网络通信"
            ],
            answer: 0,
            rationale: "App of Apps 是 ArgoCD 的高级模式，通过一个父 Application 定义和管理多个子 Application。"
        }
    ]
}
