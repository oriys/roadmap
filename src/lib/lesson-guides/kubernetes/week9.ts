import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "w9-1": {
        lessonId: "w9-1",
        background: [
            "【Workflow 定义】GitHub Actions 官方文档：'A workflow is a configurable automated process that will run one or more jobs'——工作流是可配置的自动化流程，定义在 .github/workflows/ 目录的 YAML 文件中，由事件（push、pull_request、schedule）触发。",
            "【Job 与 Step 层次】官方文档：'A job is a set of steps in a workflow that is executed on the same runner'——Job 是在同一运行器上执行的步骤集合；Step 是'individual task that can run commands or actions'——可执行命令或 Action 的最小单元。",
            "【Runner 执行环境】官方文档：'A runner is a server that runs your workflows'——Runner 是执行工作流的服务器。GitHub 提供托管的 Ubuntu、Windows、macOS 运行器，也支持 self-hosted runners 用于特殊需求。",
            "【SemVer 版本规范】官方文档：'increment the MAJOR version when you make incompatible API changes'——MAJOR 在破坏性变更时递增；'0.x.x: Anything MAY change at any time. The public API SHOULD NOT be considered stable'——0.x.x 表示 API 不稳定；'1.0.0 defines the public API'——1.0.0 标志 API 正式稳定。",
            "【Twelve-Factor 构建原则】官方文档：'Strictly separate build and run stages'——严格分离构建、发布、运行阶段；'Store config in the environment'——配置存储在环境变量中；'Keep development, staging, and production as similar as possible'——保持开发/预发布/生产环境一致。"
        ],
        keyDifficulties: [
            "【CI/CD/CD 三者区分】持续集成（CI）：自动化代码合并和验证，产出可部署制品；持续交付（Continuous Delivery）：代码随时可部署但需人工审批触发；持续部署（Continuous Deployment）：完全自动化，通过测试后直接部署到生产。根据业务风险和合规要求选择模式。",
            "【预发布版本优先级】SemVer 官方文档：'Pre-release versions have a lower precedence than the associated normal version'——预发布版本（如 1.0.0-alpha）优先级低于正式版本（1.0.0）。预发布版本格式：版本号后追加连字符和标识符，如 1.0.0-alpha.1、1.0.0-beta.2。",
            "【不可变制品原则】Twelve-Factor 第五条核心：构建产物一旦生成不应修改，同一镜像从测试用到生产。运行时配置（环境变量、ConfigMap/Secret）与制品分离。使用 Git commit SHA 或语义化版本作为不可变标签，避免 latest 等可变标签。",
            "【Job 依赖与并行执行】GitHub Actions 官方：使用 needs 关键字指定 Job 依赖关系；Matrix 策略可用不同变量组合（如多 Node.js 版本、多操作系统）并行运行同一 Job。缓存依赖项（node_modules、Maven 仓库）可显著提升构建速度。",
            "【Action 复用机制】官方文档：Action 是'custom application for the GitHub Actions platform that performs a complex but frequently repeated task'——执行复杂但频繁重复任务的可复用应用。可引用公共 Action（如 actions/checkout@v4）或创建私有 Action。"
        ],
        handsOnPath: [
            "创建第一个 GitHub Actions 工作流：在仓库中添加 .github/workflows/ci.yml，配置在 push 和 pull_request 时触发，运行 lint 和测试。观察 Actions 面板的执行过程、日志输出和状态标记。",
            "设计多阶段流水线：添加多个 Job（lint → build → test → deploy），使用 needs 配置依赖关系。实现 Matrix 策略在 Node.js 16/18/20 三个版本上并行测试。理解并行执行和顺序执行的场景。",
            "配置分支保护规则：在仓库 Settings → Branches 中启用分支保护，要求 PR 必须通过所有 CI 检查才能合并。故意提交一个会导致测试失败的 PR，验证保护规则生效。",
            "优化构建性能：使用 actions/cache 缓存 node_modules 或其他依赖目录，设计合理的缓存 key（基于 lock 文件 hash）。对比缓存前后的构建时间，理解缓存命中率的影响因素。",
            "体验 Jenkins Pipeline（可选）：使用 Docker 快速启动 Jenkins，创建 Pipeline 项目并编写 Jenkinsfile。实现包含 Build、Test、Deploy 三个 stage 的声明式流水线，体验与 GitHub Actions 的差异。"
        ],
        selfCheck: [
            "GitHub Actions 中 Workflow、Job、Step、Action 的层级关系是什么？一个 Workflow 可以包含多个 Job 吗？Job 之间如何建立依赖？",
            "持续集成、持续交付、持续部署三者的区别是什么？为什么有些团队选择持续交付而不是持续部署？",
            "为什么 Twelve-Factor App 强调构建和运行阶段的严格分离？不可变制品原则带来什么好处？",
            "Jenkins 的声明式和脚本式 Pipeline 各有什么优缺点？什么场景下应该选择哪种？",
            "语义化版本中 0.x.x 和 1.x.x 的区别是什么？预发布版本（如 1.0.0-beta）如何与正式版本比较大小？"
        ],
        extensions: [
            "研究 GitHub Actions 的可重用工作流（Reusable Workflows）和组合操作（Composite Actions），实现跨仓库共享 CI 逻辑，减少重复配置。",
            "探索 OIDC 无密钥认证：GitHub Actions 可以通过 OIDC 向 AWS/GCP/Azure 获取临时凭证，无需在仓库中存储长期密钥，大幅提升安全性。",
            "学习 Jenkins Shared Libraries，了解如何在组织内创建标准化的流水线模板，统一构建规范并降低维护成本。",
            "研究 SLSA（Supply-chain Levels for Software Artifacts）框架，了解如何通过构建来源证明（provenance）提升软件供应链安全等级。"
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
            "【GitHub Actions 权限配置】官方文档：发布 Docker 镜像需要声明权限——'packages: write' 推送镜像、'contents: read' 访问仓库、'attestations: write' 生成构建证明、'id-token: write' OIDC 令牌生成。推送到 ghcr.io 使用 GITHUB_TOKEN 自动认证。",
            "【多阶段构建语法】Docker 官方文档：'Multi-stage builds use multiple FROM statements in a single Dockerfile. Each stage can use a different base image'——每个 FROM 开启新阶段，可用不同基础镜像。使用 AS 命名阶段：'FROM golang:1.24 AS build'。",
            "【COPY --from 指令】官方文档：'Selectively copies artifacts between stages. Can reference previous stages by number or name, or external images'——从指定阶段或外部镜像复制文件。示例：'COPY --from=build /bin/hello /bin/hello' 或 'COPY --from=nginx:latest /etc/nginx/nginx.conf'。",
            "【metadata-action 功能】GitHub 文档：'Extracts and generates tags and labels for images'——根据 Git 事件（分支、标签、PR）自动生成符合规范的镜像标签。输出 tags 和 labels 供 build-push-action 使用。",
            "【Docker 缓存陷阱】官方最佳实践：'Using apt-get update alone in a RUN statement causes caching issues and subsequent apt-get install instructions to fail'——必须将 apt-get update 和 install 放在同一 RUN 语句中，避免缓存导致安装旧版本包。"
        ],
        keyDifficulties: [
            "【--target 阶段选择】Docker 官方：使用 'docker build --target <stage>' 只构建到特定阶段。'BuildKit processes only stages the target depends on'——BuildKit 智能分析依赖，只构建目标所需的前置阶段，显著提升效率。",
            "【版本固定策略】官方最佳实践：'Pin specific digest hashes: FROM alpine:3.21@sha256:...'——使用镜像摘要精确锁定版本，保证跨构建一致性。标签可能被覆盖，摘要是不可变的唯一标识。",
            "【基础镜像选择】官方文档：'Docker Official Images provide clear documentation, promote best practices, and are regularly updated'——优先选择 Docker 官方镜像或 Verified Publisher 镜像，减小攻击面和依赖。",
            "【缓存优化顺序】最佳实践：Docker 按指令顺序检查缓存，一旦某层失效后续所有层重建。优化方案：先复制 package.json/go.mod 安装依赖，再复制源代码。源码变化时只需重新编译，无需重新下载依赖。",
            "【多仓库发布】官方文档：同时推送到 Docker Hub 和 ghcr.io 需要分别登录两个 Registry，在 metadata-action 的 images 字段使用多行格式指定两个镜像名。注意不同 Registry 的认证方式不同。"
        ],
        handsOnPath: [
            "编写多阶段 Dockerfile：创建一个简单的 Go 或 Node.js 应用，编写多阶段 Dockerfile。第一阶段使用完整 SDK 镜像编译，第二阶段使用 Alpine 或 distroless 作为运行时。对比单阶段和多阶段构建的镜像体积差异。",
            "配置 GitHub Actions 构建推送工作流：创建 .github/workflows/docker.yml，使用 docker/login-action 登录 ghcr.io，docker/metadata-action 生成标签，docker/build-push-action 构建推送。设置只在 main 分支和 tag 推送时才推送镜像。",
            "测试标签生成策略：推送代码到 main 分支，观察生成的标签（main, sha-xxx）。创建 v1.0.0 格式的 Git tag 并推送，观察生成的版本标签（1.0.0, 1.0, 1, latest）。理解不同事件如何映射到镜像标签。",
            "优化构建缓存：配置 cache-from 和 cache-to 参数使用 GitHub Actions 缓存或 Registry 缓存。修改源代码后重新构建，观察缓存命中情况和构建时间变化。理解 inline、registry、gha 三种缓存模式的区别。",
            "体验 Jenkins Docker Pipeline（可选）：在 Jenkins 中使用 docker.build() 构建镜像，docker.withRegistry() 配置认证，customImage.push() 推送到私有仓库。对比与 GitHub Actions 的语法差异。"
        ],
        selfCheck: [
            "多阶段构建的原理是什么？COPY --from 指令的作用是什么？如何只构建到特定阶段？",
            "Docker 构建缓存的工作机制是什么？为什么要将 apt-get update 和 apt-get install 放在同一 RUN 语句中？",
            "GitHub Actions 中如何认证 Docker Hub 和 ghcr.io？两者有什么区别？",
            "docker/metadata-action 如何根据 Git 事件自动生成镜像标签？常见的标签策略有哪些？",
            "为什么推荐使用 Git commit SHA 作为镜像标签？latest 标签有什么问题？"
        ],
        extensions: [
            "研究 cosign 镜像签名：了解如何使用 Sigstore 的 Keyless 签名为镜像生成来源证明（provenance），在 Kubernetes 中配置签名验证策略。",
            "探索 BuildKit 高级特性：并行构建多个阶段、远程缓存后端、构建多平台镜像（linux/amd64, linux/arm64）。",
            "学习 Kaniko 和 Buildah：这些工具可以在没有 Docker daemon 的环境（如 Kubernetes Pod）中构建镜像，适合更安全的构建场景。",
            "研究企业级 Registry：Harbor、AWS ECR、Google GCR 等提供镜像扫描、复制策略、RBAC 等企业功能。"
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
            "Trivy 是 Aqua Security 开源的全面安全扫描工具，已成为云原生安全领域的事实标准。它可以扫描多种目标：容器镜像、文件系统、代码仓库、IaC 配置文件（Terraform、Kubernetes YAML、Dockerfile）、Kubernetes 集群和 SBOM。一个工具覆盖多个安全场景。",
            "Trivy 能检测三类安全问题：依赖和操作系统包中的漏洞（CVE）、IaC 配置错误（如过于宽松的权限、未加密的存储）、代码中暴露的敏感信息（API 密钥、密码、证书）。通过单一工具实现全方位的安全检查。",
            "Trivy 的漏洞数据库覆盖广泛：支持主流 Linux 发行版（Alpine、Debian、Ubuntu、RHEL、CentOS）和编程语言生态系统（Go、Java、Python、Node.js、Ruby、PHP、Rust）。数据库定期更新，确保能检测到最新披露的漏洞。",
            "在 GitHub Actions 中使用 Trivy 非常简单：aquasecurity/trivy-action 封装了常用功能。关键参数包括 scan-type（扫描类型）、image-ref（镜像引用）、severity（漏洞级别过滤）、exit-code（控制是否让 CI 失败）、format（输出格式）。",
            "SARIF（Static Analysis Results Interchange Format）是静态分析结果的标准交换格式。Trivy 支持 SARIF 输出，可以配合 GitHub Code Scanning 使用，将漏洞结果直接显示在 Pull Request 和仓库的 Security 标签页中，实现无缝的安全反馈循环。"
        ],
        keyDifficulties: [
            "漏洞严重级别处理：Trivy 将漏洞分为 CRITICAL、HIGH、MEDIUM、LOW、UNKNOWN 五个级别。通过 severity 参数过滤关注的级别（如只关注 CRITICAL,HIGH），通过 exit-code 控制发现漏洞时是否让 CI 失败。平衡安全标准和开发效率是关键。",
            "处理无补丁的漏洞：某些漏洞暂时没有修复版本。可以使用 ignore-unfixed: true 跳过这些漏洞，或通过 .trivyignore 文件临时豁免特定 CVE。但豁免必须有明确的理由和计划修复时间，避免成为安全债务。",
            "配置优先级理解：Trivy 的配置优先级为：Action 参数 > 环境变量 > 配置文件 > 默认值。复杂场景建议使用 YAML 配置文件（通过 trivy-config 参数指定），便于版本控制和团队共享。",
            "扫描类型选择：image 扫描容器镜像（构建后）；fs 扫描本地文件系统（源码依赖）；repo 扫描 Git 仓库；config 扫描 IaC 配置。根据 CI/CD 阶段选择合适的扫描类型：提交时扫代码，构建后扫镜像。"
        ],
        handsOnPath: [
            "本地安装和使用 Trivy：通过包管理器（brew/apt）或直接下载安装 Trivy。运行 trivy image nginx:latest 扫描公共镜像，理解输出中的漏洞信息：CVE ID、严重级别、受影响版本、修复版本。",
            "在 GitHub Actions 中集成 Trivy：添加 aquasecurity/trivy-action，配置 scan-type: image、severity: CRITICAL,HIGH、exit-code: 1。推送代码触发构建，观察扫描结果和 CI 状态。",
            "配置 SARIF 输出和 Code Scanning 集成：设置 format: sarif、output: trivy-results.sarif，添加 github/codeql-action/upload-sarif 步骤。在仓库的 Security → Code scanning alerts 查看结果。",
            "学习漏洞豁免机制：创建 .trivyignore 文件，添加一个 CVE ID 进行豁免。重新扫描观察结果变化。记录豁免原因和计划修复时间作为最佳实践。",
            "探索其他扫描类型：使用 trivy fs . 扫描项目依赖漏洞；使用 trivy config . 扫描 Kubernetes YAML 或 Terraform 文件中的配置错误。理解不同扫描类型的使用场景。"
        ],
        selfCheck: [
            "Trivy 能扫描哪些类型的目标？它能检测哪三类安全问题？",
            "如何配置 Trivy 在发现高危漏洞时让 CI 失败？severity 和 exit-code 参数各有什么作用？",
            "如何处理暂时无法修复的漏洞？.trivyignore 文件和 ignore-unfixed 参数有什么区别？",
            "什么是 SARIF 格式？如何将 Trivy 扫描结果集成到 GitHub Code Scanning？",
            "Trivy 的配置优先级是什么？什么场景下应该使用配置文件？"
        ],
        extensions: [
            "研究 Trivy 的 IaC 扫描能力：了解如何检测 Terraform、Kubernetes YAML、Dockerfile 中的安全配置错误，如过于宽松的 IAM 策略、未加密的存储卷。",
            "探索 Trivy Operator：在 Kubernetes 集群中持续扫描运行中的工作负载，而不仅仅是 CI 阶段的镜像扫描。了解 VulnerabilityReport CRD。",
            "学习 SBOM 生成：使用 trivy sbom 命令生成 SPDX 或 CycloneDX 格式的软件物料清单，满足供应链透明度和合规要求。",
            "研究 GitHub Advanced Security：了解 Dependabot、CodeQL、Secret Scanning 如何与 Trivy 配合，构建完整的应用安全体系。"
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
            question: "官方文档对 GitHub Actions Workflow 的定义是什么？",
            options: [
                "'A configurable automated process that will run one or more jobs'——可配置的自动化流程",
                "一种容器编排工具",
                "Git 仓库的备份系统",
                "代码审查平台"
            ],
            answer: 0,
            rationale: "GitHub Actions 官方文档明确定义：'A workflow is a configurable automated process that will run one or more jobs'——工作流是运行一个或多个 Job 的可配置自动化流程。"
        },
        {
            id: "w9-1-q2",
            question: "官方文档对 Runner 的定义是什么？",
            options: [
                "编写工作流的编辑器",
                "存储代码的仓库",
                "'A server that runs your workflows'——执行工作流的服务器",
                "管理 Secrets 的服务"
            ],
            answer: 2,
            rationale: "GitHub Actions 官方文档：'A runner is a server that runs your workflows'——Runner 是执行工作流的服务器，支持托管和自托管两种模式。"
        },
        {
            id: "w9-1-q3",
            question: "SemVer 官方文档对 MAJOR 版本递增条件的描述是什么？",
            options: [
                "修复 bug 时递增",
                "添加向后兼容的新功能时递增",
                "更新文档时递增",
                "'increment the MAJOR version when you make incompatible API changes'——破坏性变更时递增"
            ],
            answer: 3,
            rationale: "SemVer 官方文档明确：'increment the MAJOR version when you make incompatible API changes'——当引入不兼容的 API 变更时递增 MAJOR 版本。"
        },
        {
            id: "w9-1-q4",
            question: "SemVer 官方文档对 0.x.x 版本的描述是什么？",
            options: [
                "'Anything MAY change at any time. The public API SHOULD NOT be considered stable'——API 不稳定",
                "表示已发布的稳定版本",
                "只用于内部测试",
                "禁止发布到公共仓库"
            ],
            answer: 0,
            rationale: "SemVer 官方：'0.x.x: Anything MAY change at any time. The public API SHOULD NOT be considered stable'——0.x.x 是初始开发阶段，API 不稳定。"
        },
        {
            id: "w9-1-q5",
            question: "Twelve-Factor 官方对「构建、发布、运行」的要求是什么？",
            options: [
                "可以合并为一个阶段",
                "只在生产环境区分",
                "'Strictly separate build and run stages'——严格分离构建和运行阶段",
                "按开发者偏好决定"
            ],
            answer: 2,
            rationale: "Twelve-Factor App 第五条明确：'Strictly separate build and run stages'——严格分离构建、发布和运行三个阶段，确保制品不可变。"
        },
        {
            id: "w9-1-q6",
            question: "Twelve-Factor 官方对「配置」的要求是什么？",
            options: [
                "将配置硬编码在源代码中",
                "'Store config in the environment'——将配置存储在环境变量中",
                "每个环境使用独立的代码分支",
                "配置必须使用 YAML 格式"
            ],
            answer: 1,
            rationale: "Twelve-Factor App 第三条：'Store config in the environment'——配置（数据库连接、API 密钥等）应存储在环境变量中，使同一制品可在不同环境运行。"
        },
        {
            id: "w9-1-q7",
            question: "SemVer 官方文档对预发布版本优先级的描述是什么？",
            options: [
                "预发布版本优先级高于正式版本",
                "两者优先级相同",
                "'Pre-release versions have a lower precedence than the associated normal version'",
                "预发布版本不参与优先级比较"
            ],
            answer: 2,
            rationale: "SemVer 官方：'Pre-release versions have a lower precedence than the associated normal version'——预发布版本（如 1.0.0-alpha）优先级低于正式版本（1.0.0）。"
        },
        {
            id: "w9-1-q8",
            question: "GitHub Actions 中如何让 Job B 在 Job A 完成后才执行？",
            options: [
                "在 Job B 中使用 needs: [A]——指定依赖关系",
                "按字母顺序命名 Job",
                "使用 depends-on 关键字",
                "无法实现 Job 依赖"
            ],
            answer: 0,
            rationale: "官方文档：使用 needs 关键字指定 Job 依赖关系，被依赖的 Job 必须成功完成后，当前 Job 才会开始执行。"
        },
        {
            id: "w9-1-q9",
            question: "持续集成、持续交付、持续部署三者的主要区别是什么？",
            options: [
                "三者完全相同",
                "CI 包含部署，交付只做测试",
                "只有持续部署需要自动化测试",
                "CI 自动验证代码，交付需人工审批部署，部署完全自动化"
            ],
            answer: 3,
            rationale: "CI 关注自动化验证产出制品；持续交付确保代码随时可部署但需人工触发；持续部署完全自动化到生产环境。"
        },
        {
            id: "w9-1-q10",
            question: "GitHub Actions Matrix 策略的用途是什么？",
            options: [
                "加密工作流中的敏感信息",
                "使用不同变量组合并行运行同一个 Job",
                "限制并发运行的 Job 数量",
                "自动合并 Pull Request"
            ],
            answer: 1,
            rationale: "Matrix 策略允许用不同变量组合（如多个 Node.js 版本、多个操作系统）并行运行同一 Job，实现多维度测试。"
        },
        {
            id: "w9-1-q11",
            question: "SemVer 官方文档对 1.0.0 版本的意义描述是什么？",
            options: [
                "只是一个普通版本号",
                "表示项目已停止维护",
                "'defines the public API'——标志公共 API 正式定义",
                "表示首个预发布版本"
            ],
            answer: 2,
            rationale: "SemVer 官方：'1.0.0 defines the public API'——1.0.0 标志着公共 API 已正式定义，从此版本开始 API 应保持稳定。"
        },
        {
            id: "w9-1-q12",
            question: "Twelve-Factor 对开发/生产环境一致性的要求是什么？",
            options: [
                "开发和生产环境可以完全不同",
                "只需要代码一致即可",
                "'Keep development, staging, and production as similar as possible'——保持环境尽可能相似",
                "只在部署时考虑一致性"
            ],
            answer: 2,
            rationale: "Twelve-Factor 第十条：'Keep development, staging, and production as similar as possible'——减少环境差异，避免「在我机器上能运行」的问题。"
        }
    ],
    "w9-2": [
        {
            id: "w9-2-q1",
            question: "发布 Docker 镜像到 ghcr.io 时应使用什么凭证？",
            options: [
                "工作流中的 GITHUB_TOKEN，无需额外配置",
                "必须创建 Docker Hub 账号",
                "需要 AWS IAM 密钥",
                "必须使用 SSH 密钥"
            ],
            answer: 0,
            rationale: "GitHub 官方文档：推送到 ghcr.io 使用 GITHUB_TOKEN 自动认证，无需手动配置额外的 Secrets。"
        },
        {
            id: "w9-2-q2",
            question: "Docker 官方文档对多阶段构建的描述是什么？",
            options: [
                "每个阶段共享同一个基础镜像",
                "只能有两个构建阶段",
                "'Multi-stage builds use multiple FROM statements...Each stage can use a different base image'",
                "多阶段构建会增加最终镜像体积"
            ],
            answer: 2,
            rationale: "Docker 官方文档：'Multi-stage builds use multiple FROM statements in a single Dockerfile. Each stage can use a different base image'——每个 FROM 开启新阶段，可用不同基础镜像。"
        },
        {
            id: "w9-2-q3",
            question: "Docker 官方文档对 apt-get 缓存问题的警告是什么？",
            options: [
                "'Using apt-get update alone in a RUN statement causes caching issues'——必须与 install 放在同一 RUN",
                "apt-get update 应该单独运行以提高缓存效率",
                "apt-get 不支持 Docker 环境",
                "缓存问题只发生在 Alpine 镜像"
            ],
            answer: 0,
            rationale: "Docker 官方最佳实践：'Using apt-get update alone in a RUN statement causes caching issues and subsequent apt-get install instructions to fail'。"
        },
        {
            id: "w9-2-q4",
            question: "Docker 官方文档对 --target 参数的说明是什么？",
            options: [
                "--target 用于指定输出目录",
                "'BuildKit processes only stages the target depends on'——只构建目标依赖的阶段",
                "--target 只能在 CI 环境使用",
                "--target 会构建所有阶段但只输出目标阶段"
            ],
            answer: 1,
            rationale: "Docker 官方文档：使用 'docker build --target <stage>' 只构建到特定阶段，'BuildKit processes only stages the target depends on'——智能分析依赖。"
        },
        {
            id: "w9-2-q5",
            question: "GitHub Actions 发布 Docker 镜像需要声明哪些权限？",
            options: [
                "只需要 contents: read 权限",
                "不需要声明任何权限",
                "需要 admin 权限",
                "packages: write 推送镜像、id-token: write 用于 OIDC"
            ],
            answer: 3,
            rationale: "GitHub 官方文档：发布镜像需要'packages: write'推送镜像、'contents: read'访问仓库、'id-token: write'用于 OIDC 令牌生成。"
        },
        {
            id: "w9-2-q6",
            question: "Docker 官方文档对 COPY --from 指令的描述是什么？",
            options: [
                "'Selectively copies artifacts between stages. Can reference previous stages by number or name, or external images'",
                "只能从上一个阶段复制",
                "COPY --from 会复制整个文件系统",
                "只支持按阶段编号引用"
            ],
            answer: 0,
            rationale: "Docker 官方文档：'Selectively copies artifacts between stages. Can reference previous stages by number or name, or external images'——可从指定阶段或外部镜像复制。"
        },
        {
            id: "w9-2-q7",
            question: "FROM golang:1.24 AS build 语法中 AS build 的作用是什么？",
            options: [
                "下载 Go 1.24 版本",
                "设置环境变量 build",
                "为构建阶段命名，使后续阶段可以通过 COPY --from=build 引用",
                "定义最终镜像的名称"
            ],
            answer: 2,
            rationale: "Docker 官方文档：使用 AS 命名阶段——'FROM golang:1.24 AS build'，后续可通过 'COPY --from=build' 引用该阶段的文件。"
        },
        {
            id: "w9-2-q8",
            question: "GitHub 文档对 docker/metadata-action 功能的描述是什么？",
            options: [
                "'Extracts and generates tags and labels for images'——根据 Git 事件生成标签",
                "用于扫描镜像漏洞",
                "用于登录镜像仓库",
                "用于构建多架构镜像"
            ],
            answer: 0,
            rationale: "GitHub 文档：metadata-action'Extracts and generates tags and labels for images'——根据 Git 事件（分支、标签、PR）自动生成符合规范的镜像标签。"
        },
        {
            id: "w9-2-q9",
            question: "Docker 官方对基础镜像选择的建议是什么？",
            options: [
                "应该自行从零构建基础镜像",
                "使用任意第三方镜像即可",
                "'Docker Official Images provide clear documentation, promote best practices'——优先选择官方镜像",
                "基础镜像选择不影响安全性"
            ],
            answer: 2,
            rationale: "Docker 官方文档：'Docker Official Images provide clear documentation, promote best practices, and are regularly updated'——优先选择官方镜像或 Verified Publisher 镜像。"
        },
        {
            id: "w9-2-q10",
            question: "Docker 官方对版本固定的建议是什么？",
            options: [
                "使用 latest 标签最安全",
                "不指定标签让系统自动选择",
                "使用日期作为标签",
                "'Pin specific digest hashes: FROM alpine:3.21@sha256:...'——使用摘要精确锁定版本"
            ],
            answer: 3,
            rationale: "Docker 官方最佳实践：'Pin specific digest hashes: FROM alpine:3.21@sha256:...'——使用镜像摘要精确锁定版本，标签可能被覆盖，摘要是不可变的。"
        },
        {
            id: "w9-2-q11",
            question: "如何强制 Docker 重新构建所有层而不使用缓存？",
            options: [
                "删除 Dockerfile 重新创建",
                "使用 docker build --no-cache 参数",
                "重启 Docker daemon",
                "清空所有本地镜像"
            ],
            answer: 1,
            rationale: "Docker 官方文档：--no-cache 参数会忽略所有缓存层，强制重新执行 Dockerfile 中的每条指令。"
        },
        {
            id: "w9-2-q12",
            question: "推送镜像到多个 Registry（如 Docker Hub 和 ghcr.io）需要注意什么？",
            options: [
                "只需要认证一次即可推送到所有 Registry",
                "需要分别认证每个 Registry，在 metadata-action 的 images 字段指定多个镜像名",
                "同一镜像在不同 Registry 的摘要完全相同",
                "不支持同时推送到多个 Registry"
            ],
            answer: 1,
            rationale: "官方文档：同时推送到 Docker Hub 和 ghcr.io 需要分别登录两个 Registry，在 metadata-action 的 images 字段使用多行格式指定两个镜像名。"
        }
    ],
    "w9-3": [
        {
            id: "w9-3-q1",
            question: "Trivy 能检测哪三类安全问题？",
            options: [
                "依赖漏洞（CVE）、IaC 配置错误、敏感信息泄露",
                "只能检测漏洞",
                "只能检测配置错误",
                "只能检测密码泄露"
            ],
            answer: 0,
            rationale: "Trivy 是全面的安全扫描工具，能同时检测漏洞、配置错误和代码中暴露的敏感信息（如 API 密钥、密码）。"
        },
        {
            id: "w9-3-q2",
            question: "Trivy 的 scan-type 参数支持哪些扫描模式？",
            options: [
                "image（镜像）、fs（文件系统）、repo（仓库）、config（配置）",
                "只支持 image 模式",
                "只支持 fs 模式",
                "只支持 config 模式"
            ],
            answer: 0,
            rationale: "Trivy 支持多种扫描模式：image 扫描容器镜像，fs 扫描本地文件系统，repo 扫描 Git 仓库，config 扫描 IaC 配置文件。"
        },
        {
            id: "w9-3-q3",
            question: "Trivy 的配置优先级顺序是什么？",
            options: [
                "Action 参数 > 环境变量 > 配置文件 > 默认值",
                "配置文件 > 环境变量 > Action 参数",
                "默认值 > 配置文件 > 环境变量",
                "所有配置优先级相同"
            ],
            answer: 0,
            rationale: "Trivy 配置的优先级从高到低依次为：命令行/Action 参数、环境变量、配置文件、内置默认值。"
        },
        {
            id: "w9-3-q4",
            question: "SARIF 格式的全称和用途是什么？",
            options: [
                "Static Analysis Results Interchange Format，用于上传扫描结果到 Code Scanning",
                "一种容器镜像格式",
                "一种容器运行时",
                "一种编程语言"
            ],
            answer: 0,
            rationale: "SARIF 是静态分析结果的标准交换格式，GitHub Code Scanning 使用该格式接收和展示扫描结果。"
        },
        {
            id: "w9-3-q5",
            question: "如何配置 Trivy 在发现高危漏洞时让 CI 失败？",
            options: [
                "设置 severity: CRITICAL,HIGH 和 exit-code: 1",
                "设置 fail-on-vuln: true",
                "不需要配置，默认会失败",
                "只能手动检查结果"
            ],
            answer: 0,
            rationale: "severity 参数过滤要报告的漏洞级别，exit-code: 1 使 Trivy 在发现匹配漏洞时返回非零退出码，导致 CI 失败。"
        },
        {
            id: "w9-3-q6",
            question: "Trivy 支持扫描哪些类型的目标？",
            options: [
                "容器镜像、文件系统、代码仓库、IaC 配置、Kubernetes 集群、SBOM",
                "只支持容器镜像",
                "只支持代码仓库",
                "只支持 Kubernetes 集群"
            ],
            answer: 0,
            rationale: "Trivy 是多功能扫描工具，可以扫描镜像、文件系统、代码仓库、IaC 配置、运行中的 K8s 集群和 SBOM 文件。"
        },
        {
            id: "w9-3-q7",
            question: "ignore-unfixed 参数的作用是什么？",
            options: [
                "忽略没有可用修复版本的漏洞",
                "忽略所有漏洞",
                "只显示未修复的漏洞",
                "自动修复所有漏洞"
            ],
            answer: 0,
            rationale: "某些漏洞暂时没有补丁版本，ignore-unfixed: true 会跳过这些漏洞，减少无法立即解决的噪音。"
        },
        {
            id: "w9-3-q8",
            question: "GitHub Code Scanning 对什么类型的仓库免费可用？",
            options: [
                "公共仓库（Public repositories）",
                "所有仓库都免费",
                "只有企业版才能使用",
                "需要额外付费订阅"
            ],
            answer: 0,
            rationale: "GitHub Code Scanning 对公共仓库免费开放，私有仓库需要 GitHub Advanced Security 或相应的许可证。"
        },
        {
            id: "w9-3-q9",
            question: "如何将 Trivy 扫描结果上传到 GitHub Code Scanning？",
            options: [
                "设置 format: sarif 输出文件，使用 upload-sarif action 上传",
                "Trivy 会自动上传",
                "使用 git push 上传",
                "需要手动复制到 GitHub"
            ],
            answer: 0,
            rationale: "需要分两步：先用 Trivy 生成 SARIF 格式的结果文件，然后用 github/codeql-action/upload-sarif 上传到 Code Scanning。"
        },
        {
            id: "w9-3-q10",
            question: "Trivy 的漏洞数据库覆盖哪些生态系统？",
            options: [
                "多种 Linux 发行版和编程语言（Go、Java、Python、Node.js 等）",
                "只支持 Ubuntu",
                "只支持 Python",
                "只支持 Windows"
            ],
            answer: 0,
            rationale: "Trivy 支持主流 Linux 发行版（Alpine、Debian、Ubuntu、RHEL 等）和多种编程语言的依赖漏洞检测。"
        },
        {
            id: "w9-3-q11",
            question: "Trivy 的 format 参数支持哪些输出格式？",
            options: [
                "table、json、sarif、template",
                "只支持 table",
                "只支持 json",
                "只支持 xml"
            ],
            answer: 0,
            rationale: "Trivy 支持多种输出格式：table 适合终端阅读，json 适合程序处理，sarif 适合 CI 集成，template 支持自定义格式。"
        },
        {
            id: "w9-3-q12",
            question: "Trivy Action 如何处理漏洞数据库？",
            options: [
                "内置缓存功能，扫描前自动恢复缓存避免重复下载",
                "每次都重新下载完整数据库",
                "不需要漏洞数据库",
                "需要手动上传数据库"
            ],
            answer: 0,
            rationale: "Trivy Action 内置了漏洞数据库缓存机制，可以复用之前下载的数据库，避免频繁下载触发速率限制。"
        },
        {
            id: "w9-3-q13",
            question: "Code Scanning 扫描结果在哪里显示？",
            options: [
                "在 Pull Request 中显示，方便合并前修复",
                "只在邮件中通知",
                "只在日志中显示",
                "不会显示任何结果"
            ],
            answer: 0,
            rationale: "Code Scanning 结果会直接显示在 PR 页面中，开发者可以在代码合并前看到并修复安全问题。"
        },
        {
            id: "w9-3-q14",
            question: ".trivyignore 文件的作用是什么？",
            options: [
                "临时豁免特定 CVE，跳过指定的漏洞",
                "配置 Trivy 的扫描参数",
                "定义自定义漏洞规则",
                "存储漏洞数据库"
            ],
            answer: 0,
            rationale: ".trivyignore 文件中列出的 CVE ID 会被 Trivy 跳过，用于临时豁免暂时无法修复或不适用的漏洞。"
        },
        {
            id: "w9-3-q15",
            question: "Trivy 支持哪些运行模式？",
            options: [
                "单机模式和客户端/服务器架构",
                "只支持单机模式",
                "只支持云端模式",
                "只支持命令行模式"
            ],
            answer: 0,
            rationale: "Trivy 支持独立运行（单机模式）和 C/S 架构，后者可以集中管理漏洞数据库，适合大规模扫描场景。"
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
