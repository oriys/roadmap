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
            "【来源: GitHub Actions 文档】GitHub Actions 发布 Docker 镜像的完整流程包括四个关键步骤：1) 使用 docker/login-action 登录 Registry（Docker Hub 使用用户名/密码，ghcr.io 使用 GITHUB_TOKEN）；2) 使用 docker/metadata-action 自动生成标签和标签；3) 使用 docker/build-push-action 构建并推送镜像；4) 可选地使用 artifact attestation 增强供应链安全。",
            "【来源: Jenkins Pipeline 文档】Jenkins 中使用 Docker 的主要方法包括：docker.build() 构建自定义镜像、docker.image().inside 在容器中执行步骤、customImage.push() 推送镜像到 Registry。支持声明式语法 agent { docker { image 'node:alpine' } } 指定执行环境，以及 withRegistry() 连接自定义仓库。",
            "【来源: Docker 多阶段构建文档】多阶段构建使用多个 FROM 语句，允许在单个 Dockerfile 中定义多个构建阶段。核心语法：FROM golang:1.24 AS build 命名阶段，COPY --from=build 从其他阶段复制制品。优势是只将必要的产物复制到最终镜像，Go 示例中编译后的二进制文件可以放入 scratch 镜像，完全消除 SDK 依赖。",
            "【来源: Docker 最佳实践文档】镜像优化的关键策略：选择最小基础镜像（Alpine 小于 6MB）、使用 .dockerignore 排除无关文件、将 apt-get update 和 apt-get install 放在同一 RUN 语句避免缓存问题、使用版本摘要（digest）固定基础镜像版本、定期重建镜像更新依赖。",
            "【来源: GitHub Actions 工作流模板】标准 Docker 发布工作流配置：触发条件包括定时构建（cron）、push 到主分支、语义化版本标签（v*.*.*）和 PR；环境变量设置 REGISTRY: ghcr.io 和 IMAGE_NAME；权限声明 packages: write 和 id-token: write；使用 cosign 对非 PR 构建的镜像进行数字签名。"
        ],
        keyDifficulties: [
            "【Registry 认证差异】Docker Hub 需要用户名和访问令牌存储为 Secrets；GitHub Container Registry (ghcr.io) 可直接使用工作流中的 GITHUB_TOKEN，无需额外配置。推送到多个 Registry 时需分别认证，且镜像摘要（digest）可能不同。",
            "【多阶段构建理解】每个 FROM 指令开启新的构建阶段，后续阶段可通过 COPY --from=stagename 引用之前阶段的产物。BuildKit 会智能优化，只构建目标阶段所依赖的阶段；传统构建器会处理所有前置阶段。使用 --target 参数可以停止在特定阶段。",
            "【缓存策略设计】Docker 会为每条指令检查缓存。apt-get update 单独作为 RUN 语句会导致缓存问题。指令顺序影响缓存效率：变化频繁的指令（如 COPY . .）应放在后面。使用 --pull 获取最新基础镜像，--no-cache 强制完全重建。",
            "【标签策略规划】docker/metadata-action 可根据 Git 事件自动生成标签：push 到分支生成分支名标签，push 标签生成版本标签（如 v1.2.3 → 1.2.3, 1.2, 1, latest）。使用 Git commit SHA 作为唯一标签确保可追溯性，避免 latest 的可变性问题。"
        ],
        handsOnPath: [
            "创建包含 Go 或 Node.js 应用的 GitHub 仓库，编写多阶段 Dockerfile：第一阶段编译应用，第二阶段使用 alpine 或 distroless 作为运行时镜像，只复制编译产物。",
            "配置 .github/workflows/docker-publish.yml：使用 docker/login-action 登录 ghcr.io，docker/metadata-action 生成标签，docker/build-push-action 构建推送。设置只在 main 分支 push 时才推送镜像。",
            "测试标签生成策略：创建 v1.0.0 格式的 Git 标签，观察 metadata-action 生成的标签列表。修改配置使用自定义标签规则，如添加 sha-${{ github.sha }} 格式。",
            "优化构建缓存：配置 cache-from 和 cache-to 使用 GitHub Actions 缓存。对比有无缓存时的构建时间差异，理解缓存模式（inline/registry/gha）的区别。",
            "（可选）在 Jenkins 中创建 Pipeline 项目：使用 docker.build() 构建镜像，docker.withRegistry() 登录私有仓库，customImage.push() 推送带版本标签的镜像。"
        ],
        selfCheck: [
            "GitHub Actions 中登录 Docker Hub 和 ghcr.io 分别需要什么凭证？如何安全存储这些凭证？",
            "docker/metadata-action 如何根据不同 Git 事件（push/tag/PR）自动生成镜像标签？",
            "什么是多阶段构建？它如何帮助减小最终镜像体积？COPY --from 的作用是什么？",
            "Docker 构建缓存如何工作？为什么要将 apt-get update 和 apt-get install 放在同一 RUN 语句？",
            "为什么推荐使用 Git commit SHA 而不是 latest 作为镜像标签？镜像摘要（digest）的作用是什么？"
        ],
        extensions: [
            "研究 cosign 镜像签名：了解如何使用 Sigstore 为镜像生成来源证明（provenance），增强供应链安全。",
            "探索 Kaniko、Buildah 等无 Docker daemon 的构建工具，了解它们在 Kubernetes 环境中构建镜像的优势。",
            "学习 BuildKit 的高级特性：并行构建、远程缓存、多平台镜像（linux/amd64, linux/arm64）构建。",
            "研究 Harbor、AWS ECR、Google GCR 等企业级 Registry 的特性：镜像扫描、复制策略、访问控制。"
        ],
        sourceUrls: [
            "https://docs.github.com/en/actions/publishing-packages/publishing-docker-images",
            "https://www.jenkins.io/doc/book/pipeline/docker/",
            "https://docs.docker.com/build/building/multi-stage/",
            "https://docs.docker.com/build/building/best-practices/"
        ]
    },
    "w9-3": {
        lessonId: "w9-3",
        background: [
            "【来源: Trivy 文档】Trivy 是一个全面的安全扫描工具，支持多种扫描目标：容器镜像、文件系统、代码仓库、IaC 配置（Terraform/Kubernetes/Docker/CloudFormation/Helm）、虚拟机镜像、Kubernetes 集群和 SBOM。它能检测三类安全问题：依赖和包中的漏洞（CVE）、IaC 配置错误、代码中暴露的敏感信息（Secrets）。",
            "【来源: Trivy GitHub Action】Trivy Action 的核心输入参数包括：scan-type（扫描模式：image/fs/repo）、image-ref（镜像引用）、format（输出格式：table/json/sarif/template）、severity（漏洞级别过滤：CRITICAL/HIGH/MEDIUM/LOW）、exit-code（发现漏洞时的退出码）、ignore-unfixed（忽略无补丁的漏洞）。配置优先级：Action 参数 → 环境变量 → 配置文件 → 默认值。",
            "【来源: GitHub Code Scanning 文档】Code Scanning 是 GitHub 的安全工具，用于识别代码中的安全漏洞和错误。SARIF（Static Analysis Results Interchange Format）是上传扫描结果的标准格式。扫描结果会在 PR 中显示，允许开发者在合并前修复安全问题。公共仓库免费可用，组织仓库需要 GitHub Code Security 许可。",
            "【来源: Trivy 文档】Trivy 覆盖广泛的操作系统（Alpine、Debian、Ubuntu、RHEL 等）和编程语言（Go、Java、Python、Node.js、Ruby 等）。支持单机模式和客户端/服务器架构，可集成到 CI/CD 流水线、Kubernetes 环境和企业级部署中。",
            "【来源: Trivy GitHub Action】Action 内置漏洞数据库缓存功能，在扫描前自动恢复缓存，避免重复下载导致的速率限制问题。SARIF 格式输出可与 GitHub 的 upload-sarif action 配合，将扫描结果显示在仓库的 Security 标签页。"
        ],
        keyDifficulties: [
            "【漏洞严重级别处理】配置 severity: 'CRITICAL,HIGH' 过滤关注的漏洞级别，exit-code: '1' 让发现高危漏洞时 CI 失败。但基础镜像中的漏洞可能暂无补丁，此时可使用 ignore-unfixed: true 跳过，或通过 .trivyignore 文件临时豁免特定 CVE。",
            "【配置优先级理解】Trivy 的配置优先级为：Action 参数 → 环境变量 → 配置文件 → 默认值。复杂场景可使用 trivy-config 参数指向 YAML 配置文件，实现更精细的扫描控制。",
            "【SARIF 集成流程】分两步完成：1) Trivy 扫描时设置 format: 'sarif' 输出到文件；2) 使用 github/codeql-action/upload-sarif 上传结果到 GitHub Code Scanning。扫描结果会在 PR 中显示，支持按严重级别排序和过滤。",
            "【多扫描类型选择】image 扫描容器镜像中的漏洞；fs 扫描本地文件系统；repo 扫描代码仓库；config 扫描 IaC 配置错误。根据 CI 阶段选择合适的扫描类型：构建后扫描镜像，提交前扫描代码和配置。"
        ],
        handsOnPath: [
            "在本地安装 Trivy：使用包管理器（brew/apt）或下载二进制文件。运行 `trivy image nginx:latest` 扫描公共镜像，观察输出的漏洞列表、严重级别（CRITICAL/HIGH/MEDIUM/LOW）和修复建议。",
            "在 GitHub Actions 工作流中添加 Trivy 扫描：使用 aquasecurity/trivy-action，配置 scan-type: 'image'、severity: 'CRITICAL,HIGH'、exit-code: '1'。推送带有已知漏洞的镜像，观察 CI 失败效果。",
            "配置 SARIF 输出并上传到 GitHub Code Scanning：设置 format: 'sarif'、output: 'trivy-results.sarif'，添加 github/codeql-action/upload-sarif@v3 步骤。在仓库 Security → Code scanning alerts 查看结果。",
            "创建 .trivyignore 文件临时豁免特定 CVE（用于学习目的）：添加一行 CVE ID（如 CVE-2021-44228）。观察豁免生效后扫描结果的变化，记录豁免原因和计划修复时间。",
            "扩展扫描类型：使用 scan-type: 'fs' 扫描代码仓库中的依赖漏洞，使用 scan-type: 'config' 扫描 Kubernetes YAML 或 Terraform 文件中的配置错误。"
        ],
        selfCheck: [
            "Trivy 可以扫描哪些类型的目标？它能检测哪三类安全问题？",
            "如何配置 Trivy Action 在发现高危漏洞时让 CI 失败？severity 和 exit-code 参数的作用是什么？",
            "Trivy 的配置优先级是什么？如何使用配置文件进行复杂扫描设置？",
            "什么是 SARIF 格式？如何将 Trivy 扫描结果上传到 GitHub Code Scanning？",
            "如何处理暂时无法修复的漏洞？.trivyignore 文件和 ignore-unfixed 参数的区别是什么？"
        ],
        extensions: [
            "研究 Trivy 的 IaC 扫描功能：了解如何检测 Terraform、Kubernetes YAML 中的配置错误，如过于宽松的权限、未加密的存储。",
            "探索 Trivy Operator：了解如何在 Kubernetes 集群中部署 Trivy，持续扫描运行中的工作负载而非仅 CI 阶段的镜像扫描。",
            "学习 SBOM（Software Bill of Materials）生成：使用 Trivy 生成 SPDX 或 CycloneDX 格式的 SBOM，满足供应链透明度要求。",
            "研究 GitHub Advanced Security：了解 Dependabot、CodeQL 和 Secret Scanning 如何与 Trivy 配合构建完整的安全体系。"
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
            "【来源: OpenGitOps】GitOps 由四个核心原则定义：1) 声明式 - 系统必须以声明式形式表达期望状态；2) 版本化和不可变 - 期望状态存储必须具有版本控制和完整历史记录；3) 自动拉取 - 软件代理自动从源获取期望状态声明；4) 持续调和 - 代理持续监控实际状态并努力实现期望状态。",
            "【来源: ArgoCD Application 规范】Application CRD 的核心字段包括：source（配置来源，支持 Git/Helm/Kustomize/Jsonnet/Directory）、destination（目标集群和命名空间）、syncPolicy（同步策略）。syncPolicy 支持 automated（自动同步）、prune（清理多余资源）、selfHeal（自愈漂移）等选项。",
            "【来源: Flux 文档】Flux 是「保持 Kubernetes 集群与配置源（如 Git 仓库）同步，并在有新代码部署时自动更新配置」的工具。核心组件包括：Source Controller（管理 Git/Helm/OCI 源）、Kustomize Controller、Helm Controller、Notification Controller 和 Image Automation Controllers。",
            "【来源: ArgoCD Webhook 文档】ArgoCD 支持 Webhook 通知以消除默认的 3 分钟轮询延迟。配置后 Git push 会立即触发应用同步。支持 GitHub、GitLab、BitBucket、Azure DevOps 等多种 Git 提供商。推荐配置 webhook secret 以防止 DDoS 攻击。",
            "【来源: Flux 文档】Flux 采用 Pull 模式而非 Push 模式，遵循最小权限原则，与 Kubernetes 安全策略无缝集成。它基于 Kubernetes API 扩展（Custom Resources）构建，与 RBAC、准入控制器和现有生态系统工具兼容。"
        ],
        keyDifficulties: [
            "【Push vs Pull 模式】传统 CI/CD 采用 Push 模式，由流水线直接向集群推送变更，需要暴露集群 API；GitOps 采用 Pull 模式，由集群内控制器主动从 Git 拉取配置并应用，安全性更高，不需要给 CI 系统集群访问权限。",
            "【ArgoCD 同步策略配置】syncPolicy.automated 启用自动同步；prune: true 删除 Git 中已移除的资源；selfHeal: true 自动修复集群中手动修改导致的漂移。理解何时启用 selfHeal（防止误操作）和何时禁用（允许临时调试修改）。",
            "【ArgoCD vs Flux 选型】ArgoCD 提供丰富的 Web UI 和可视化能力，适合需要直观操作的团队；Flux 采用模块化设计，更轻量灵活，适合高度自动化的场景。两者都支持多集群、多租户。",
            "【Secret 管理挑战】敏感信息不应明文存储在 Git 中。常见方案：Sealed Secrets（加密后存储在 Git）、External Secrets Operator（从 Vault/云厂商 Secrets Manager 同步）、SOPS（加密文件）。每种方案有不同的复杂度和安全权衡。"
        ],
        handsOnPath: [
            "在本地 Kubernetes 集群（minikube/kind）中安装 ArgoCD。使用 kubectl port-forward 访问 Web UI，使用 admin 用户登录，熟悉界面布局。",
            "创建第一个 ArgoCD Application：指向一个包含 Kubernetes 清单的 Git 仓库（如 ArgoCD 官方示例仓库），配置 destination 为本地集群。观察 ArgoCD 如何同步配置，理解 Sync Status 和 Health Status 的含义。",
            "模拟漂移场景：使用 kubectl 直接修改集群中的资源（如 Deployment 的副本数）。观察 ArgoCD 如何检测到 OutOfSync 状态，手动触发 Sync 恢复期望状态。",
            "配置自动同步和自愈：在 Application 中启用 syncPolicy.automated.prune 和 syncPolicy.automated.selfHeal，观察 ArgoCD 如何自动处理漂移和删除多余资源。",
            "配置 Webhook（可选）：在 Git 仓库中设置 Webhook 指向 ArgoCD 的 /api/webhook 端点，配置 argocd-secret 中的 webhook secret。测试 push 后立即触发同步。"
        ],
        selfCheck: [
            "OpenGitOps 定义的四个 GitOps 核心原则是什么？为什么强调「持续调和」？",
            "ArgoCD Application CRD 的 source、destination、syncPolicy 字段分别配置什么？",
            "Push 模式和 Pull 模式有什么区别？为什么 GitOps 推荐 Pull 模式？",
            "ArgoCD 和 Flux 各有什么特点？如何选择适合团队的工具？",
            "如何在 GitOps 模式下安全地管理 Secret？有哪些常见方案？"
        ],
        extensions: [
            "研究 ArgoCD 的 App of Apps 模式：了解如何用一个 Application 管理多个 Application，实现集群引导和多应用编排。",
            "探索 Flux 的 Image Automation 功能：了解如何自动检测新镜像并更新 Git 仓库中的镜像标签。",
            "学习 Sealed Secrets 或 External Secrets Operator：实现 GitOps 中的安全 Secret 管理。",
            "研究 ArgoCD ApplicationSet：了解如何用模板化方式批量生成多个 Application，适用于多集群和多环境场景。"
        ],
        sourceUrls: [
            "https://argo-cd.readthedocs.io/en/stable/user-guide/application-specification/",
            "https://fluxcd.io/flux/",
            "https://argo-cd.readthedocs.io/en/stable/operator-manual/webhook/",
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
            question: "根据 GitHub Actions 文档，发布 Docker 镜像到 ghcr.io 时应使用什么凭证？",
            options: [
                "使用工作流中的 GITHUB_TOKEN，无需额外配置 Secrets",
                "必须创建 Docker Hub 账号",
                "需要 AWS IAM 密钥",
                "必须使用 SSH 密钥"
            ],
            answer: 0,
            rationale: "GitHub Actions 文档指出，登录 GitHub Packages (ghcr.io) 可直接使用 GITHUB_TOKEN，而 Docker Hub 需要用户名和密码。"
        },
        {
            id: "w9-2-q2",
            question: "根据 Docker 多阶段构建文档，COPY --from=build 的作用是什么？",
            options: [
                "从名为 build 的构建阶段复制文件到当前阶段",
                "从 Docker Hub 下载镜像",
                "复制当前目录的所有文件",
                "创建新的构建阶段"
            ],
            answer: 0,
            rationale: "Docker 文档说明 COPY --from=build 用于「从其他阶段复制制品」，实现多阶段构建的核心功能。"
        },
        {
            id: "w9-2-q3",
            question: "根据 Docker 最佳实践文档，为什么要将 apt-get update 和 apt-get install 放在同一 RUN 语句？",
            options: [
                "避免缓存问题，单独的 apt-get update 会导致后续 install 失败",
                "减少 Dockerfile 行数",
                "提高构建速度",
                "只是代码风格要求"
            ],
            answer: 0,
            rationale: "Docker 文档明确指出：「使用 apt-get update 单独作为 RUN 语句会导致缓存问题和后续 apt-get install 指令失败」。"
        },
        {
            id: "w9-2-q4",
            question: "根据 Docker 多阶段构建文档，BuildKit 相比传统构建器的优势是什么？",
            options: [
                "只构建目标阶段所依赖的阶段，而传统构建器会处理所有前置阶段",
                "BuildKit 不需要 Dockerfile",
                "传统构建器更快",
                "两者完全相同"
            ],
            answer: 0,
            rationale: "Docker 文档说明 BuildKit 会智能优化，「只构建目标阶段所依赖的阶段」，传统构建器则「处理所有前置阶段」。"
        },
        {
            id: "w9-2-q5",
            question: "根据 Jenkins Pipeline 文档，docker.build() 方法的作用是什么？",
            options: [
                "从 Dockerfile 构建自定义镜像",
                "下载现有镜像",
                "删除本地镜像",
                "登录到 Registry"
            ],
            answer: 0,
            rationale: "Jenkins 文档说明 docker.build() 用于「创建自定义镜像」，如 docker.build('my-image:${env.BUILD_ID}')。"
        },
        {
            id: "w9-2-q6",
            question: "根据 GitHub Actions 工作流模板，标准 Docker 发布工作流需要声明哪些权限？",
            options: [
                "packages: write 和 id-token: write（用于推送镜像和签名）",
                "只需要 contents: read",
                "不需要声明任何权限",
                "需要 admin 权限"
            ],
            answer: 0,
            rationale: "GitHub Actions 工作流模板显示需要声明 packages: write 用于推送镜像，id-token: write 用于 cosign 签名。"
        },
        {
            id: "w9-2-q7",
            question: "根据 Docker 最佳实践文档，Alpine 基础镜像的大小约为多少？",
            options: [
                "小于 6 MB",
                "约 100 MB",
                "约 500 MB",
                "约 1 GB"
            ],
            answer: 0,
            rationale: "Docker 最佳实践文档指出 Alpine 镜像「小于 6 MB」，是最小化基础镜像的推荐选择。"
        },
        {
            id: "w9-2-q8",
            question: "根据 Docker 多阶段构建文档，FROM golang:1.24 AS build 语法的作用是什么？",
            options: [
                "开启一个新的构建阶段并命名为 build，使其可被后续阶段引用",
                "下载 Go 1.24 版本",
                "设置环境变量",
                "定义最终输出镜像名称"
            ],
            answer: 0,
            rationale: "Docker 文档说明 AS 子句用于「命名阶段」，使其「可被引用」，提高可维护性。"
        },
        {
            id: "w9-2-q9",
            question: "根据 GitHub Actions 文档，docker/metadata-action 的主要作用是什么？",
            options: [
                "根据 Git 事件自动生成镜像标签和标签",
                "扫描镜像漏洞",
                "登录到 Registry",
                "构建多架构镜像"
            ],
            answer: 0,
            rationale: "GitHub Actions 文档说明 docker/metadata-action 用于「自动生成标签和标签」。"
        },
        {
            id: "w9-2-q10",
            question: "根据 Jenkins Pipeline 文档，如何在 Pipeline 中使用 Docker 容器作为执行环境？",
            options: [
                "使用 agent { docker { image 'node:alpine' } } 或 docker.image().inside",
                "只能在物理机上运行",
                "必须手动启动容器",
                "使用 agent { kubernetes }"
            ],
            answer: 0,
            rationale: "Jenkins 文档说明可使用声明式语法 agent { docker { image } } 或脚本式 docker.image().inside 在容器中执行步骤。"
        },
        {
            id: "w9-2-q11",
            question: "根据 Docker 最佳实践文档，如何强制重建所有层而不使用缓存？",
            options: [
                "使用 docker build --no-cache 参数",
                "删除 Dockerfile",
                "重启 Docker daemon",
                "清空所有本地镜像"
            ],
            answer: 0,
            rationale: "Docker 文档说明使用「--no-cache 从头重建所有层」，可组合 --pull 获取最新基础镜像。"
        },
        {
            id: "w9-2-q12",
            question: "根据 GitHub Actions 文档，推送镜像到多个 Registry 时需要注意什么？",
            options: [
                "需要分别认证每个 Registry，且镜像摘要（digest）可能不同",
                "只需要认证一次",
                "摘要总是相同的",
                "不支持推送到多个 Registry"
            ],
            answer: 0,
            rationale: "GitHub Actions 文档指出推送到多个 Registry 时需分别认证，「镜像摘要可能不同」，建议先推送一处再用工具复制。"
        },
        {
            id: "w9-2-q13",
            question: "根据 Docker 最佳实践文档，如何固定基础镜像版本以保证一致性构建？",
            options: [
                "使用版本摘要（digest），如 image@sha256:...",
                "只使用 latest 标签",
                "不指定任何标签",
                "使用日期作为标签"
            ],
            answer: 0,
            rationale: "Docker 文档推荐「使用摘要固定基础镜像版本」以保证一致的构建结果。"
        },
        {
            id: "w9-2-q14",
            question: "根据 Docker 多阶段构建文档，如何在构建时只构建到特定阶段？",
            options: [
                "使用 docker build --target <stage-name> 参数",
                "删除后续阶段的 FROM 语句",
                "使用环境变量控制",
                "不支持此功能"
            ],
            answer: 0,
            rationale: "Docker 文档说明「--target 选择停止在特定阶段」，可用于只构建开发或测试镜像。"
        },
        {
            id: "w9-2-q15",
            question: "根据 GitHub Actions 工作流模板，cosign 工具在工作流中的作用是什么？",
            options: [
                "对发布的镜像进行数字签名，通过 Sigstore 增强供应链安全",
                "扫描镜像漏洞",
                "压缩镜像体积",
                "加速镜像推送"
            ],
            answer: 0,
            rationale: "GitHub Actions 工作流模板显示 cosign 用于「对发布的镜像进行数字签名」，使用 Sigstore 的临时证书。"
        }
    ],
    "w9-3": [
        {
            id: "w9-3-q1",
            question: "根据 Trivy 文档，Trivy 能检测哪三类安全问题？",
            options: [
                "依赖漏洞（CVE）、IaC 配置错误、敏感信息泄露（Secrets）",
                "只能检测漏洞",
                "只能检测配置错误",
                "只能检测密码泄露"
            ],
            answer: 0,
            rationale: "Trivy 文档说明它能检测三类安全问题：「漏洞」、「配置错误」和「Secrets」。"
        },
        {
            id: "w9-3-q2",
            question: "根据 Trivy GitHub Action 文档，scan-type 参数支持哪些扫描模式？",
            options: [
                "image（镜像）、fs（文件系统）、repo（代码仓库）",
                "只支持 image 模式",
                "只支持 fs 模式",
                "只支持 config 模式"
            ],
            answer: 0,
            rationale: "Trivy Action 文档指出 scan-type 定义扫描模式，包括 image、fs、repo 等。"
        },
        {
            id: "w9-3-q3",
            question: "根据 Trivy GitHub Action 文档，配置的优先级顺序是什么？",
            options: [
                "Action 参数 → 环境变量 → 配置文件 → 默认值",
                "配置文件 → 环境变量 → Action 参数",
                "默认值 → 配置文件 → 环境变量",
                "所有配置优先级相同"
            ],
            answer: 0,
            rationale: "Trivy Action 文档明确说明配置优先级为：「GitHub Action flag → Environment variable → Config file → Default」。"
        },
        {
            id: "w9-3-q4",
            question: "根据 GitHub Code Scanning 文档，SARIF 是什么？",
            options: [
                "Static Analysis Results Interchange Format，上传扫描结果的标准格式",
                "一种镜像格式",
                "一种容器运行时",
                "一种编程语言"
            ],
            answer: 0,
            rationale: "GitHub 文档说明 SARIF（Static Analysis Results Interchange Format）是上传 Code Scanning 结果的标准格式。"
        },
        {
            id: "w9-3-q5",
            question: "根据 Trivy GitHub Action 文档，如何让 CI 在发现高危漏洞时失败？",
            options: [
                "设置 severity: 'CRITICAL,HIGH' 和 exit-code: '1'",
                "设置 fail-on-vuln: true",
                "不需要配置，默认就会失败",
                "只能手动检查结果"
            ],
            answer: 0,
            rationale: "Trivy Action 文档说明 severity 过滤漏洞级别，exit-code 控制「whether the action fails on detected vulnerabilities」。"
        },
        {
            id: "w9-3-q6",
            question: "根据 Trivy 文档，Trivy 支持扫描哪些类型的目标？",
            options: [
                "容器镜像、文件系统、代码仓库、IaC 配置、K8s 集群、SBOM",
                "只支持容器镜像",
                "只支持代码仓库",
                "只支持 Kubernetes 集群"
            ],
            answer: 0,
            rationale: "Trivy 文档列出支持的扫描目标包括：Container Images、Filesystems、Code Repositories、IaC、Kubernetes Clusters、SBOMs。"
        },
        {
            id: "w9-3-q7",
            question: "根据 Trivy GitHub Action 文档，ignore-unfixed 参数的作用是什么？",
            options: [
                "排除目前没有可用补丁的漏洞",
                "忽略所有漏洞",
                "只显示未修复的漏洞",
                "自动修复漏洞"
            ],
            answer: 0,
            rationale: "Trivy Action 文档说明 ignore-unfixed「when enabled, excludes unpatched vulnerabilities from results」。"
        },
        {
            id: "w9-3-q8",
            question: "根据 GitHub Code Scanning 文档，Code Scanning 对什么类型的仓库免费可用？",
            options: [
                "公共仓库（Public repositories）",
                "所有仓库都免费",
                "只有企业版才能使用",
                "需要额外付费订阅"
            ],
            answer: 0,
            rationale: "GitHub 文档说明 Code Scanning「available for public repositories on GitHub.com」，组织仓库需要 GitHub Code Security。"
        },
        {
            id: "w9-3-q9",
            question: "根据 Trivy GitHub Action 文档，如何将扫描结果上传到 GitHub Code Scanning？",
            options: [
                "设置 format: 'sarif' 输出文件，使用 upload-sarif action 上传",
                "Trivy 自动上传",
                "使用 git push 上传",
                "需要手动复制粘贴"
            ],
            answer: 0,
            rationale: "Trivy Action 文档说明 SARIF 格式输出可与 upload-sarif action 配合，显示在 Security 标签页。"
        },
        {
            id: "w9-3-q10",
            question: "根据 Trivy 文档，Trivy 覆盖哪些操作系统和编程语言？",
            options: [
                "多种 Linux 发行版（Alpine、Debian、Ubuntu 等）和编程语言（Go、Java、Python 等）",
                "只支持 Ubuntu",
                "只支持 Python",
                "只支持 Windows"
            ],
            answer: 0,
            rationale: "Trivy 文档说明覆盖「多种 Linux 发行版」和「编程语言（Go、Java、Python、Node.js、Ruby 等）」。"
        },
        {
            id: "w9-3-q11",
            question: "根据 Trivy GitHub Action 文档，format 参数支持哪些输出格式？",
            options: [
                "table、json、sarif、template",
                "只支持 table",
                "只支持 json",
                "只支持 xml"
            ],
            answer: 0,
            rationale: "Trivy Action 文档列出 format 支持的格式包括 table、json、sarif、template。"
        },
        {
            id: "w9-3-q12",
            question: "根据 Trivy GitHub Action 文档，Action 如何处理漏洞数据库？",
            options: [
                "内置缓存功能，扫描前自动恢复缓存避免速率限制",
                "每次都重新下载完整数据库",
                "不需要数据库",
                "需要手动上传数据库"
            ],
            answer: 0,
            rationale: "Trivy Action 文档说明 Action「includes built-in caching for vulnerability databases and automatically restores them before scanning」。"
        },
        {
            id: "w9-3-q13",
            question: "根据 GitHub Code Scanning 文档，扫描结果在哪里显示？",
            options: [
                "在 PR 中显示，允许开发者在合并前修复安全问题",
                "只在邮件中通知",
                "只在日志中显示",
                "不会显示任何结果"
            ],
            answer: 0,
            rationale: "GitHub 文档说明「Code scanning alerts appear in pull requests」，允许在合并前处理问题。"
        },
        {
            id: "w9-3-q14",
            question: "根据 Trivy GitHub Action 文档，如何使用配置文件进行高级设置？",
            options: [
                "使用 trivy-config 参数指向 YAML 配置文件",
                "只能通过 Action 参数配置",
                "不支持配置文件",
                "只能通过环境变量配置"
            ],
            answer: 0,
            rationale: "Trivy Action 文档说明支持 trivy-config 参数指向「YAML configuration file containing detailed options」。"
        },
        {
            id: "w9-3-q15",
            question: "根据 Trivy 文档，Trivy 支持哪些运行模式？",
            options: [
                "单机模式和客户端/服务器架构",
                "只支持单机模式",
                "只支持云端模式",
                "只支持命令行模式"
            ],
            answer: 0,
            rationale: "Trivy 文档说明支持「standalone and client/server architectures」两种运行模式。"
        }
    ],
    "w9-4": [
        {
            id: "w9-4-q1",
            question: "根据 OpenGitOps 定义，GitOps 的第一个核心原则是什么？",
            options: [
                "声明式 - 系统必须以声明式形式表达期望状态",
                "使用命令式脚本部署",
                "手动修改集群配置",
                "只支持 YAML 格式"
            ],
            answer: 0,
            rationale: "OpenGitOps 明确定义第一个原则是「Declarative」：A system managed by GitOps must have its desired state expressed declaratively."
        },
        {
            id: "w9-4-q2",
            question: "根据 OpenGitOps 定义，GitOps 的四个核心原则是什么？",
            options: [
                "声明式、版本化和不可变、自动拉取、持续调和",
                "构建、测试、部署、监控",
                "开发、预发布、生产、灾备",
                "设计、编码、测试、发布"
            ],
            answer: 0,
            rationale: "OpenGitOps 定义了四个原则：Declarative、Versioned and Immutable、Pulled Automatically、Continuously Reconciled."
        },
        {
            id: "w9-4-q3",
            question: "根据 ArgoCD Application 规范，source 字段支持哪些配置来源？",
            options: [
                "Git、Helm、Kustomize、Jsonnet、Directory",
                "只支持 Git",
                "只支持 Helm",
                "只支持 YAML 文件"
            ],
            answer: 0,
            rationale: "ArgoCD 文档说明 source 字段支持多种配置来源：Git/Helm/Kustomize/Jsonnet/Directory."
        },
        {
            id: "w9-4-q4",
            question: "根据 ArgoCD Application 规范，syncPolicy 支持哪些自动化选项？",
            options: [
                "automated（自动同步）、prune（清理多余资源）、selfHeal（自愈漂移）",
                "只支持手动同步",
                "只支持自动同步",
                "不支持配置同步策略"
            ],
            answer: 0,
            rationale: "ArgoCD 文档说明 syncPolicy 支持 automated、prune、selfHeal 等选项."
        },
        {
            id: "w9-4-q5",
            question: "根据 Flux 文档，Flux 的核心组件包括哪些？",
            options: [
                "Source Controller、Kustomize Controller、Helm Controller、Notification Controller、Image Automation Controllers",
                "只有一个控制器",
                "只有 Source Controller",
                "只有 Helm Controller"
            ],
            answer: 0,
            rationale: "Flux 文档列出其核心组件包括：Source Controller、Kustomize Controller、Helm Controller、Notification Controller 和 Image Automation Controllers."
        },
        {
            id: "w9-4-q6",
            question: "根据 Flux 文档，Flux 采用什么部署模式？",
            options: [
                "Pull 模式，遵循最小权限原则，与 Kubernetes 安全策略无缝集成",
                "Push 模式，由 CI 直接部署",
                "混合模式，同时支持 Push 和 Pull",
                "手动模式，需要人工触发"
            ],
            answer: 0,
            rationale: "Flux 文档强调采用 Pull 模式，遵循最小权限原则，基于 Kubernetes API 扩展构建."
        },
        {
            id: "w9-4-q7",
            question: "根据 ArgoCD Webhook 文档，配置 Webhook 的主要目的是什么？",
            options: [
                "消除默认的 3 分钟轮询延迟，Git push 后立即触发应用同步",
                "增加安全性",
                "减少 Git 仓库负载",
                "自动创建 Application"
            ],
            answer: 0,
            rationale: "ArgoCD Webhook 文档说明配置 Webhook 可以「消除默认的 3 分钟轮询延迟」，实现推送后立即同步."
        },
        {
            id: "w9-4-q8",
            question: "根据 ArgoCD Webhook 文档，支持哪些 Git 提供商？",
            options: [
                "GitHub、GitLab、BitBucket、Azure DevOps 等",
                "只支持 GitHub",
                "只支持 GitLab",
                "不支持任何 Git 提供商"
            ],
            answer: 0,
            rationale: "ArgoCD Webhook 文档列出支持多种 Git 提供商：GitHub、GitLab、BitBucket、Azure DevOps 等."
        },
        {
            id: "w9-4-q9",
            question: "根据 ArgoCD Webhook 文档，为什么推荐配置 webhook secret？",
            options: [
                "防止 DDoS 攻击",
                "加速同步速度",
                "减少网络流量",
                "自动生成配置"
            ],
            answer: 0,
            rationale: "ArgoCD Webhook 文档推荐配置 webhook secret「以防止 DDoS 攻击」."
        },
        {
            id: "w9-4-q10",
            question: "根据 OpenGitOps 定义，「持续调和」原则的含义是什么？",
            options: [
                "软件代理持续监控实际状态并努力实现期望状态",
                "每天执行一次同步",
                "只在代码提交时同步",
                "手动触发同步"
            ],
            answer: 0,
            rationale: "OpenGitOps 第四原则「Continuously Reconciled」定义为：Software agents continuously observe actual system state and attempt to apply the desired state."
        },
        {
            id: "w9-4-q11",
            question: "根据 ArgoCD Application 规范，destination 字段配置什么？",
            options: [
                "目标集群和命名空间",
                "源代码仓库",
                "镜像标签",
                "构建参数"
            ],
            answer: 0,
            rationale: "ArgoCD 文档说明 destination 字段定义目标集群（server/name）和命名空间（namespace）."
        },
        {
            id: "w9-4-q12",
            question: "根据 Flux 文档，Flux 基于什么构建？",
            options: [
                "Kubernetes API 扩展（Custom Resources），与 RBAC、准入控制器兼容",
                "独立的数据库",
                "Docker 容器",
                "虚拟机"
            ],
            answer: 0,
            rationale: "Flux 文档说明它「基于 Kubernetes API 扩展（Custom Resources）构建」，与 RBAC、准入控制器和现有生态系统工具兼容."
        },
        {
            id: "w9-4-q13",
            question: "根据 OpenGitOps 定义，「版本化和不可变」原则要求什么？",
            options: [
                "期望状态存储必须具有版本控制和完整历史记录",
                "每次部署创建新分支",
                "禁止修改任何配置",
                "只使用标签不使用分支"
            ],
            answer: 0,
            rationale: "OpenGitOps 第二原则「Versioned and Immutable」要求：Desired state is stored in a way that enforces immutability, versioning and retains a complete version history."
        },
        {
            id: "w9-4-q14",
            question: "Push 模式和 Pull 模式的安全性差异是什么？",
            options: [
                "Push 模式需要暴露集群 API 给外部 CI 系统，Pull 模式由集群内控制器主动拉取，安全性更高",
                "两者安全性相同",
                "Push 模式更安全",
                "Pull 模式需要更多权限"
            ],
            answer: 0,
            rationale: "GitOps Pull 模式中控制器在集群内运行，不需要给 CI 系统集群访问权限，减少了攻击面."
        },
        {
            id: "w9-4-q15",
            question: "根据 OpenGitOps 定义，「自动拉取」原则的含义是什么？",
            options: [
                "软件代理自动从源获取期望状态声明",
                "手动触发拉取操作",
                "定时批量拉取",
                "只在工作时间拉取"
            ],
            answer: 0,
            rationale: "OpenGitOps 第三原则「Pulled Automatically」定义为：Software agents automatically pull the desired state declarations from the source."
        }
    ]
}
