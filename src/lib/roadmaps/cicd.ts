import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const cicdStages: Stage[] = [
  {
    id: "cicd-s1",
    title: "阶段一：基础概念与版本控制",
    duration: "第 1-3 周",
    goal: "理解 CI/CD 核心理念，掌握版本控制策略与构建自动化基础。",
    weeks: [
      {
        id: "cicd-w1",
        title: "第 1 周：CI/CD 核心概念",
        summary: "理解持续集成、持续交付与持续部署的区别与价值。",
        overview: "CI/CD 是现代软件工程的核心实践。本周从理念出发，理解自动化交付流水线如何提升交付速度、质量与团队信心。",
        keyPoints: [
          "CI 强调频繁集成代码并自动验证，尽早发现问题",
          "CD（Delivery）确保代码随时可发布，CD（Deployment）自动部署到生产",
          "CI/CD 的核心价值：缩短反馈循环、降低发布风险、提升团队效率",
        ],
        lessons: [
          {
            id: "cicd-w1-1",
            title: "CI vs CD vs CD",
            detail: "区分持续集成、持续交付与持续部署的概念边界与实施前提条件。",
            keyPoints: [
              "持续集成：开发者频繁合并代码，每次合并触发自动构建和测试。",
              "持续交付：在 CI 基础上确保代码随时可发布到生产环境。",
              "持续部署：每次通过验证的变更自动部署到生产，需要高度成熟的测试体系。",
            ],
            resources: [
              { title: "Martin Fowler: CI", url: "https://martinfowler.com/articles/continuousIntegration.html" },
              { title: "持续交付", url: "https://continuousdelivery.com/" },
              { title: "roadmap.sh: CI/CD", url: "https://roadmap.sh/ci-cd" },
            ],
          },
          {
            id: "cicd-w1-2",
            title: "CI/CD 成熟度模型",
            detail: "评估团队当前的 CI/CD 成熟度等级，制定渐进式改进路线。",
            keyPoints: [
              "Level 0：手工构建和部署，无自动化。",
              "Level 1-2：自动构建和测试，手动触发部署。",
              "Level 3-4：全自动化流水线，持续部署到生产。",
            ],
            resources: [
              { title: "DORA 报告", url: "https://dora.dev/research/" },
              { title: "Accelerate", url: "https://itrevolution.com/accelerate-book/" },
            ],
          },
          {
            id: "cicd-w1-3",
            title: "CI/CD 工具全景",
            detail: "对比主流 CI/CD 工具（GitHub Actions、GitLab CI、Jenkins）的架构与适用场景。",
            keyPoints: [
              "GitHub Actions：YAML 驱动、与 GitHub 深度集成、丰富的 Marketplace。",
              "GitLab CI：内置于 GitLab、Auto DevOps、一体化体验。",
              "Jenkins：最灵活、插件生态丰富、需要自行维护基础设施。",
            ],
            resources: [
              { title: "GitHub Actions 文档", url: "https://docs.github.com/en/actions" },
              { title: "GitLab CI/CD", url: "https://docs.gitlab.com/ci/" },
              { title: "Jenkins", url: "https://www.jenkins.io/doc/" },
            ],
          },
        ],
      },
      {
        id: "cicd-w2",
        title: "第 2 周：版本控制策略",
        summary: "掌握 Git 分支模型与版本管理策略。",
        overview: "版本控制策略直接影响 CI/CD 的复杂度和效率。本周学习 Trunk-Based Development 和 GitFlow 的优劣以及如何选择。",
        keyPoints: [
          "Trunk-Based Development 通过短生命周期分支实现快速集成",
          "GitFlow 适合发布周期较长、需要并行维护多版本的项目",
          "分支策略应与团队规模和发布节奏匹配",
        ],
        lessons: [
          {
            id: "cicd-w2-1",
            title: "Trunk-Based Development",
            detail: "理解 Trunk-Based 开发模式的核心实践：短生命周期分支、频繁合并与特性开关。",
            keyPoints: [
              "所有开发者向主干（trunk/main）频繁提交，分支生命周期不超过 1-2 天。",
              "使用 Feature Flags 控制未完成功能的可见性。",
              "适合持续部署的团队，减少合并冲突和集成风险。",
            ],
            resources: [
              { title: "Trunk-Based Development", url: "https://trunkbaseddevelopment.com/" },
              { title: "Google 工程实践", url: "https://abseil.io/resources/swe-book" },
            ],
          },
          {
            id: "cicd-w2-2",
            title: "GitFlow 与变体",
            detail: "理解 GitFlow 的分支模型及其变体（GitHub Flow、GitLab Flow）的适用场景。",
            keyPoints: [
              "GitFlow：main + develop + feature + release + hotfix 五类分支。",
              "GitHub Flow：只有 main + feature 分支，简洁适合持续部署。",
              "GitLab Flow：在 GitHub Flow 基础上增加环境分支（staging/production）。",
            ],
            resources: [
              { title: "GitFlow", url: "https://nvie.com/posts/a-successful-git-branching-model/" },
              { title: "GitHub Flow", url: "https://docs.github.com/en/get-started/using-github/github-flow" },
            ],
          },
          {
            id: "cicd-w2-3",
            title: "语义化版本与变更日志",
            detail: "使用 Semantic Versioning 管理版本号，自动生成变更日志。",
            keyPoints: [
              "SemVer：MAJOR.MINOR.PATCH 分别对应破坏性/新增/修复变更。",
              "Conventional Commits 规范化提交信息，支持自动化版本计算。",
              "工具链：semantic-release/standard-version 自动发版和生成 CHANGELOG。",
            ],
            resources: [
              { title: "Semantic Versioning", url: "https://semver.org/" },
              { title: "Conventional Commits", url: "https://www.conventionalcommits.org/" },
            ],
          },
        ],
      },
      {
        id: "cicd-w3",
        title: "第 3 周：构建自动化与制品管理",
        summary: "掌握自动化构建流程与制品的版本化存储。",
        overview: "构建自动化是 CI 的基础。本周学习构建系统设计、依赖管理和制品仓库的运维。",
        keyPoints: [
          "构建过程必须可重现：相同输入产生相同输出",
          "依赖管理需要锁文件和私有仓库保证一致性",
          "制品仓库（Nexus/Artifactory）是交付流水线的中枢",
        ],
        lessons: [
          {
            id: "cicd-w3-1",
            title: "构建系统与可重现性",
            detail: "设计可重现的构建流程，确保任何环境下产出一致的构建产物。",
            keyPoints: [
              "可重现构建：固定依赖版本、构建工具版本和操作系统。",
              "使用容器化构建（Docker）确保环境一致性。",
              "构建日志应包含依赖版本、环境信息和构建参数。",
            ],
            resources: [
              { title: "Reproducible Builds", url: "https://reproducible-builds.org/" },
              { title: "Docker 构建", url: "https://docs.docker.com/build/" },
            ],
          },
          {
            id: "cicd-w3-2",
            title: "依赖管理",
            detail: "使用锁文件、私有仓库和依赖扫描保证依赖安全与一致性。",
            keyPoints: [
              "锁文件（package-lock.json/go.sum）固定依赖的精确版本。",
              "私有仓库代理公共仓库，缓存依赖并控制准入。",
              "定期扫描依赖漏洞（Dependabot/Renovate/Snyk）。",
            ],
            resources: [
              { title: "Dependabot", url: "https://docs.github.com/en/code-security/dependabot" },
              { title: "Renovate", url: "https://docs.renovatebot.com/" },
            ],
          },
          {
            id: "cicd-w3-3",
            title: "制品仓库与版本化",
            detail: "使用 Nexus、Artifactory 或 GHCR 管理构建制品的存储、版本和分发。",
            keyPoints: [
              "制品仓库统一管理 Docker 镜像、npm 包、Maven JAR 等。",
              "制品应带有构建号/Git SHA 标签，支持回溯和回滚。",
              "清理策略：保留最近 N 个版本或最近 N 天的制品。",
            ],
            resources: [
              { title: "GitHub Packages", url: "https://docs.github.com/en/packages" },
              { title: "JFrog Artifactory", url: "https://jfrog.com/artifactory/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cicd-s2",
    title: "阶段二：流水线实践",
    duration: "第 4-6 周",
    goal: "掌握流水线设计模式、测试集成与代码质量门禁。",
    weeks: [
      {
        id: "cicd-w4",
        title: "第 4 周：GitHub Actions 实战",
        summary: "深入 GitHub Actions 的工作流设计与高级特性。",
        overview: "GitHub Actions 是最流行的 CI/CD 平台之一。本周从实战出发，掌握工作流编写、复用与优化。",
        keyPoints: [
          "Workflow → Job → Step 的三层结构",
          "Reusable Workflows 和 Composite Actions 实现流水线复用",
          "Matrix Strategy 支持多环境/多版本并行测试",
        ],
        lessons: [
          {
            id: "cicd-w4-1",
            title: "Workflow 基础与触发",
            detail: "掌握 GitHub Actions 的 YAML 语法、事件触发器与运行环境配置。",
            keyPoints: [
              "on 定义触发事件：push、pull_request、schedule、workflow_dispatch。",
              "jobs 定义并行或串行的任务，steps 定义每个任务的步骤。",
              "runs-on 选择运行环境：ubuntu-latest、self-hosted 等。",
            ],
            resources: [
              { title: "Actions 快速入门", url: "https://docs.github.com/en/actions/quickstart" },
              { title: "Workflow 语法", url: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions" },
            ],
          },
          {
            id: "cicd-w4-2",
            title: "Actions 复用与组合",
            detail: "使用 Reusable Workflows、Composite Actions 和 Marketplace Actions 构建可复用的流水线模块。",
            keyPoints: [
              "Reusable Workflows 可被其他仓库调用，适合组织级标准化。",
              "Composite Actions 将多个步骤打包为一个可复用的 Action。",
              "Marketplace 提供社区贡献的数千个 Actions。",
            ],
            resources: [
              { title: "可复用工作流", url: "https://docs.github.com/en/actions/using-workflows/reusing-workflows" },
              { title: "创建 Action", url: "https://docs.github.com/en/actions/creating-actions" },
            ],
          },
          {
            id: "cicd-w4-3",
            title: "缓存与加速",
            detail: "利用 actions/cache、构建缓存和并行策略加速 CI 流水线。",
            keyPoints: [
              "actions/cache 缓存依赖目录（node_modules、.m2、pip cache）。",
              "Matrix strategy 并行测试多个 OS/语言版本组合。",
              "使用 concurrency 取消过时的运行，节省资源。",
            ],
            resources: [
              { title: "缓存依赖", url: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows" },
              { title: "Matrix 策略", url: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs" },
            ],
          },
        ],
      },
      {
        id: "cicd-w5",
        title: "第 5 周：测试集成",
        summary: "将单元测试、集成测试与端到端测试集成到 CI 流水线。",
        overview: "自动化测试是 CI 信心的来源。本周学习测试分层策略以及如何在流水线中高效执行各层测试。",
        keyPoints: [
          "测试金字塔：单元测试多而快、集成测试适量、E2E 测试少而精",
          "CI 中测试应并行执行并生成覆盖率报告",
          "测试失败应快速反馈，避免开发者等待过长",
        ],
        lessons: [
          {
            id: "cicd-w5-1",
            title: "测试分层策略",
            detail: "设计合理的测试分层（单元/集成/E2E），在速度与覆盖度之间取得平衡。",
            keyPoints: [
              "单元测试：快速、隔离、覆盖核心逻辑，是 CI 的第一道防线。",
              "集成测试：验证组件间交互，使用 testcontainers 等工具模拟依赖。",
              "E2E 测试：验证端到端流程，执行慢但覆盖用户场景。",
            ],
            resources: [
              { title: "测试金字塔", url: "https://martinfowler.com/articles/practical-test-pyramid.html" },
              { title: "Testcontainers", url: "https://testcontainers.com/" },
            ],
          },
          {
            id: "cicd-w5-2",
            title: "测试报告与覆盖率",
            detail: "在 CI 中生成测试报告和覆盖率数据，建立覆盖率门禁。",
            keyPoints: [
              "JUnit XML 格式是 CI 工具通用的测试报告标准。",
              "覆盖率应关注增量覆盖率而非绝对值，防止新代码未测试。",
              "Codecov/Coveralls 集成 PR 评论，展示覆盖率变化。",
            ],
            resources: [
              { title: "Codecov", url: "https://docs.codecov.com/" },
              { title: "GitHub Actions 测试报告", url: "https://github.com/dorny/test-reporter" },
            ],
          },
          {
            id: "cicd-w5-3",
            title: "测试数据与环境管理",
            detail: "管理测试数据的生成、隔离与清理，确保测试可重复和独立。",
            keyPoints: [
              "每个测试用例使用独立的测试数据，避免测试间耦合。",
              "使用 fixtures/factories 生成测试数据，避免共享状态。",
              "CI 中使用 Docker Compose 启动依赖服务（DB/Redis/MQ）。",
            ],
            resources: [
              { title: "测试最佳实践", url: "https://testing.googleblog.com/" },
              { title: "CI 中的数据库测试", url: "https://docs.github.com/en/actions/using-containerized-services" },
            ],
          },
        ],
      },
      {
        id: "cicd-w6",
        title: "第 6 周：代码质量与安全扫描",
        summary: "集成代码质量门禁和安全扫描到 CI 流水线。",
        overview: "质量门禁是 CI 的守护栏。本周学习代码静态分析、安全扫描与合规检查的集成方式。",
        keyPoints: [
          "质量门禁应在 PR 阶段拦截问题，避免合并到主干",
          "SAST 扫描源代码漏洞，SCA 扫描依赖漏洞",
          "质量门禁应持续收紧而非放松，防止熵增",
        ],
        lessons: [
          {
            id: "cicd-w6-1",
            title: "静态分析与 Lint",
            detail: "集成 SonarQube、ESLint、Prettier 等工具自动化代码质量检查。",
            keyPoints: [
              "SonarQube 提供代码异味、复杂度、重复度等综合分析。",
              "Lint 规则应统一配置，避免格式争论浪费时间。",
              "Quality Gate 定义通过条件：如新代码覆盖率 > 80%。",
            ],
            resources: [
              { title: "SonarQube", url: "https://docs.sonarsource.com/sonarqube/" },
              { title: "Super Linter", url: "https://github.com/super-linter/super-linter" },
            ],
          },
          {
            id: "cicd-w6-2",
            title: "安全扫描（SAST/SCA/DAST）",
            detail: "集成 SAST（静态分析）、SCA（依赖扫描）和 DAST（动态扫描）到 CI 流水线。",
            keyPoints: [
              "SAST：CodeQL/Semgrep 分析源代码中的安全模式。",
              "SCA：Snyk/Dependabot 扫描第三方依赖的已知漏洞。",
              "DAST：ZAP/Burp Suite 对运行中的应用进行安全测试。",
            ],
            resources: [
              { title: "CodeQL", url: "https://codeql.github.com/" },
              { title: "Snyk", url: "https://docs.snyk.io/" },
            ],
          },
          {
            id: "cicd-w6-3",
            title: "PR 门禁与分支保护",
            detail: "配置分支保护规则、必需检查和审批流程，守护主干质量。",
            keyPoints: [
              "Branch Protection 要求 PR 通过 CI 检查后才能合并。",
              "必需审批人数：至少 1-2 人 review，关键路径需要 CODEOWNERS。",
              "状态检查（Status Checks）确保构建、测试、安全扫描全部通过。",
            ],
            resources: [
              { title: "分支保护", url: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-a-branch-protection-rule" },
              { title: "CODEOWNERS", url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cicd-s3",
    title: "阶段三：部署策略",
    duration: "第 7-9 周",
    goal: "掌握多种部署策略与 GitOps 实践，实现安全可控的生产部署。",
    weeks: [
      {
        id: "cicd-w7",
        title: "第 7 周：部署模式",
        summary: "掌握蓝绿部署、金丝雀发布与滚动更新的实现与选型。",
        overview: "部署策略决定了发布的风险与速度。本周学习三种核心部署模式的原理、实现与适用场景。",
        keyPoints: [
          "蓝绿部署：两套环境快速切换，回滚简单但成本翻倍",
          "金丝雀发布：小流量验证后逐步放量，风险可控",
          "滚动更新：逐步替换实例，无需额外资源但回滚较慢",
        ],
        lessons: [
          {
            id: "cicd-w7-1",
            title: "蓝绿部署",
            detail: "使用蓝绿部署实现零停机发布，掌握环境切换与快速回滚的方法。",
            keyPoints: [
              "蓝环境运行当前版本，绿环境部署新版本。",
              "通过负载均衡器切换流量，实现秒级切换和回滚。",
              "缺点：需要双倍基础设施，数据库变更需要额外处理。",
            ],
            resources: [
              { title: "蓝绿部署", url: "https://martinfowler.com/bliki/BlueGreenDeployment.html" },
              { title: "AWS 蓝绿部署", url: "https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/bluegreen-deployments.html" },
            ],
          },
          {
            id: "cicd-w7-2",
            title: "金丝雀发布",
            detail: "使用金丝雀发布逐步验证新版本，基于指标自动决策放量或回滚。",
            keyPoints: [
              "先将 1-5% 流量导向新版本，对比关键指标。",
              "关键指标：错误率、延迟 p99、业务成功率。",
              "自动化 canary 分析工具：Flagger、Argo Rollouts。",
            ],
            resources: [
              { title: "金丝雀发布", url: "https://martinfowler.com/bliki/CanaryRelease.html" },
              { title: "Flagger", url: "https://flagger.app/" },
            ],
          },
          {
            id: "cicd-w7-3",
            title: "滚动更新与特性开关",
            detail: "使用滚动更新逐步替换实例，结合特性开关实现暗发布与渐进式开放。",
            keyPoints: [
              "滚动更新逐步替换旧实例，保持服务可用。",
              "特性开关（Feature Flags）解耦部署与发布，支持暗发布。",
              "LaunchDarkly/Unleash 等工具提供企业级特性管理。",
            ],
            resources: [
              { title: "Feature Flags", url: "https://launchdarkly.com/blog/feature-flags-ultimate-guide/" },
              { title: "Unleash", url: "https://docs.getunleash.io/" },
            ],
          },
        ],
      },
      {
        id: "cicd-w8",
        title: "第 8 周：GitOps 实践",
        summary: "使用 GitOps 模式管理应用部署，实现声明式、可审计的交付。",
        overview: "GitOps 将 Git 作为基础设施和应用配置的唯一事实来源。本周学习 ArgoCD 和 Flux 的实践。",
        keyPoints: [
          "Git 仓库作为期望状态的唯一来源（Single Source of Truth）",
          "ArgoCD/Flux 持续同步 Git 仓库与集群状态",
          "变更通过 PR 流程审批，天然可审计",
        ],
        lessons: [
          {
            id: "cicd-w8-1",
            title: "GitOps 原理与架构",
            detail: "理解 GitOps 的四个核心原则与 Push/Pull 模式的对比。",
            keyPoints: [
              "声明式配置：所有资源以声明式方式定义在 Git 中。",
              "Pull 模式：集群内 Agent 拉取并同步 Git 状态，更安全。",
              "漂移检测：自动发现实际状态与期望状态的偏差并修复。",
            ],
            resources: [
              { title: "GitOps 原则", url: "https://opengitops.dev/" },
              { title: "Weaveworks GitOps", url: "https://www.gitops.tech/" },
            ],
          },
          {
            id: "cicd-w8-2",
            title: "ArgoCD 实战",
            detail: "使用 ArgoCD 实现 Kubernetes 应用的 GitOps 部署、同步与回滚。",
            keyPoints: [
              "Application CRD 定义 Git 源、目标集群和同步策略。",
              "支持 Helm、Kustomize、Jsonnet 等多种配置格式。",
              "自动同步 + 自动修剪确保集群状态与 Git 一致。",
            ],
            resources: [
              { title: "ArgoCD", url: "https://argo-cd.readthedocs.io/en/stable/" },
              { title: "ArgoCD 入门", url: "https://argo-cd.readthedocs.io/en/stable/getting_started/" },
            ],
          },
          {
            id: "cicd-w8-3",
            title: "环境管理与配置分离",
            detail: "使用 Kustomize overlay 或 Helm values 管理多环境（dev/staging/prod）配置。",
            keyPoints: [
              "基础配置 + 环境 overlay 的分层管理模式。",
              "敏感配置使用 Sealed Secrets 或外部 Vault 加密存储。",
              "Image Updater 自动更新 Git 中的镜像版本。",
            ],
            resources: [
              { title: "Kustomize", url: "https://kustomize.io/" },
              { title: "ArgoCD Image Updater", url: "https://argocd-image-updater.readthedocs.io/" },
            ],
          },
        ],
      },
      {
        id: "cicd-w9",
        title: "第 9 周：基础设施即代码",
        summary: "使用 IaC 工具管理 CI/CD 依赖的基础设施。",
        overview: "基础设施即代码将环境管理纳入版本控制。本周学习 Terraform 基础和环境管理的最佳实践。",
        keyPoints: [
          "IaC 将基础设施定义为代码，实现版本化和可重现",
          "Terraform 使用 HCL 声明资源，plan/apply 工作流安全可控",
          "状态文件（state）需要远程存储和锁定保护",
        ],
        lessons: [
          {
            id: "cicd-w9-1",
            title: "Terraform 基础",
            detail: "掌握 Terraform 的核心概念：Provider、Resource、Module、State 和工作流。",
            keyPoints: [
              "Provider 连接云平台，Resource 定义基础设施资源。",
              "terraform plan 预览变更，terraform apply 执行变更。",
              "Module 封装可复用的基础设施组件。",
            ],
            resources: [
              { title: "Terraform 入门", url: "https://developer.hashicorp.com/terraform/tutorials" },
              { title: "Terraform 文档", url: "https://developer.hashicorp.com/terraform/docs" },
            ],
          },
          {
            id: "cicd-w9-2",
            title: "IaC 与 CI/CD 集成",
            detail: "在 CI 流水线中运行 Terraform plan/apply，实现基础设施变更的自动化审批。",
            keyPoints: [
              "PR 触发 terraform plan，review 后手动或自动 apply。",
              "远程状态存储（S3/GCS + DynamoDB 锁）防止并发冲突。",
              "Atlantis/Spacelift 提供 Terraform PR 自动化平台。",
            ],
            resources: [
              { title: "Terraform GitHub Actions", url: "https://github.com/hashicorp/setup-terraform" },
              { title: "Atlantis", url: "https://www.runatlantis.io/" },
            ],
          },
          {
            id: "cicd-w9-3",
            title: "环境一致性与漂移检测",
            detail: "确保 dev/staging/prod 环境的一致性，检测和修复配置漂移。",
            keyPoints: [
              "环境间差异应仅限于规模（实例数/配置值），结构保持一致。",
              "terraform plan 定期运行检测漂移。",
              "Policy as Code（OPA/Sentinel）约束基础设施合规性。",
            ],
            resources: [
              { title: "OPA", url: "https://www.openpolicyagent.org/" },
              { title: "Sentinel", url: "https://developer.hashicorp.com/sentinel" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cicd-s4",
    title: "阶段四：高级实践",
    duration: "第 10-12 周",
    goal: "掌握数据库迁移、Monorepo CI、流水线优化与合规审计等高级主题。",
    weeks: [
      {
        id: "cicd-w10",
        title: "第 10 周：数据库迁移与回滚",
        summary: "在 CI/CD 流水线中安全地管理数据库 Schema 变更。",
        overview: "数据库变更是 CI/CD 中最危险的环节。本周学习安全的 Schema 迁移策略和回滚方案。",
        keyPoints: [
          "数据库迁移应与应用部署解耦，先迁移后部署",
          "向后兼容的迁移支持新旧版本应用同时运行",
          "迁移脚本必须可回滚且经过充分测试",
        ],
        lessons: [
          {
            id: "cicd-w10-1",
            title: "Schema 迁移策略",
            detail: "使用 Flyway/Liquibase 管理数据库版本，实现可追溯和可重复的 Schema 变更。",
            keyPoints: [
              "迁移脚本按版本号顺序执行，每个脚本只执行一次。",
              "迁移工具记录已执行的迁移版本，支持状态检查。",
              "CI 中先在测试数据库上验证迁移，再在生产执行。",
            ],
            resources: [
              { title: "Flyway", url: "https://flywaydb.org/documentation/" },
              { title: "Liquibase", url: "https://docs.liquibase.com/" },
            ],
          },
          {
            id: "cicd-w10-2",
            title: "向后兼容迁移",
            detail: "设计向后兼容的 Schema 变更，支持蓝绿部署中新旧版本并行运行。",
            keyPoints: [
              "Expand-Contract 模式：先扩展（添加列），再迁移数据，最后收缩（删除旧列）。",
              "重命名列：先添加新列 → 双写 → 迁移数据 → 删除旧列。",
              "避免锁表操作（如大表 ALTER）导致服务不可用。",
            ],
            resources: [
              { title: "Evolutionary Database Design", url: "https://martinfowler.com/articles/evodb.html" },
              { title: "零停机迁移", url: "https://spring.io/blog/2016/05/31/zero-downtime-deployment-with-a-database" },
            ],
          },
          {
            id: "cicd-w10-3",
            title: "迁移回滚与演练",
            detail: "为数据库迁移制定回滚方案，定期演练确保紧急情况下可快速恢复。",
            keyPoints: [
              "每个迁移脚本都应有对应的回滚脚本。",
              "备份策略：迁移前创建快照或逻辑备份。",
              "在 staging 环境完整演练迁移和回滚流程。",
            ],
            resources: [
              { title: "数据库回滚策略", url: "https://martinfowler.com/articles/evodb.html#All-database-changes-are-database-refactorings" },
              { title: "pg_dump", url: "https://www.postgresql.org/docs/current/app-pgdump.html" },
            ],
          },
        ],
      },
      {
        id: "cicd-w11",
        title: "第 11 周：Monorepo CI 与流水线优化",
        summary: "优化 Monorepo 的 CI 效率，掌握流水线性能调优技巧。",
        overview: "随着项目规模增长，CI 效率成为关键瓶颈。本周学习 Monorepo 的 CI 策略和流水线性能优化方法。",
        keyPoints: [
          "Monorepo CI 需要变更检测，只构建受影响的包",
          "缓存、并行和增量构建是加速 CI 的三大手段",
          "CI 时间应控制在 10 分钟以内，超过则需要优化",
        ],
        lessons: [
          {
            id: "cicd-w11-1",
            title: "Monorepo CI 策略",
            detail: "使用 Turborepo/Nx/Bazel 实现 Monorepo 的增量构建与任务编排。",
            keyPoints: [
              "变更检测：只触发受文件变更影响的包和测试。",
              "任务编排：Turborepo/Nx 根据依赖图并行执行任务。",
              "远程缓存：跨 CI 运行和开发者共享构建缓存。",
            ],
            resources: [
              { title: "Turborepo", url: "https://turbo.build/repo/docs" },
              { title: "Nx", url: "https://nx.dev/getting-started/intro" },
            ],
          },
          {
            id: "cicd-w11-2",
            title: "流水线性能优化",
            detail: "通过缓存、并行、选择性测试和资源调配优化 CI 流水线执行时间。",
            keyPoints: [
              "依赖缓存：缓存 node_modules/.m2/pip cache 等目录。",
              "测试选择：只运行受变更影响的测试用例。",
              "并行策略：拆分大型测试套件到多个并行 Job。",
            ],
            resources: [
              { title: "CI 优化", url: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows" },
              { title: "测试分片", url: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs" },
            ],
          },
          {
            id: "cicd-w11-3",
            title: "自托管 Runner 与成本优化",
            detail: "使用自托管 Runner 降低 CI 成本，配置自动伸缩与安全隔离。",
            keyPoints: [
              "自托管 Runner 适合大量构建或需要特殊硬件（GPU）的场景。",
              "Actions Runner Controller (ARC) 在 K8s 上自动伸缩 Runner。",
              "安全隔离：使用临时容器运行 Job，防止跨 Job 污染。",
            ],
            resources: [
              { title: "自托管 Runner", url: "https://docs.github.com/en/actions/hosting-your-own-runners" },
              { title: "ARC", url: "https://github.com/actions/actions-runner-controller" },
            ],
          },
        ],
      },
      {
        id: "cicd-w12",
        title: "第 12 周：合规、审计与发布管理",
        summary: "建立合规审计机制，制定发布管理流程。",
        overview: "CI/CD 的最终目标是安全、合规、可追溯的持续交付。本周学习合规要求嵌入流水线和发布管理的最佳实践。",
        keyPoints: [
          "每次部署应有完整的审计日志：谁、什么时候、部署了什么",
          "合规检查（SOC2/ISO27001）应自动化嵌入流水线",
          "发布管理需要清晰的审批流程和回滚预案",
        ],
        lessons: [
          {
            id: "cicd-w12-1",
            title: "审计日志与合规",
            detail: "建立 CI/CD 流水线的审计日志，满足 SOC2/ISO27001 等合规要求。",
            keyPoints: [
              "记录每次部署的触发者、审批者、制品版本和环境。",
              "Git 历史天然提供变更审计：谁在什么时候改了什么。",
              "GitOps 模式通过 PR 审批流程满足职责分离要求。",
            ],
            resources: [
              { title: "GitHub 审计日志", url: "https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization" },
              { title: "SLSA 框架", url: "https://slsa.dev/" },
            ],
          },
          {
            id: "cicd-w12-2",
            title: "发布管理流程",
            detail: "设计发布审批、发布窗口与变更冻结策略，确保发布可控安全。",
            keyPoints: [
              "发布审批：关键环境需要人工审批（GitHub Environments）。",
              "发布窗口：避免在高流量时段或周末发布。",
              "变更冻结：在关键业务周期（如双 11）冻结非紧急变更。",
            ],
            resources: [
              { title: "GitHub Environments", url: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment" },
              { title: "Release Management", url: "https://www.atlassian.com/agile/software-development/release-management" },
            ],
          },
          {
            id: "cicd-w12-3",
            title: "供应链安全",
            detail: "保护 CI/CD 供应链安全，防止依赖投毒、构建篡改等攻击。",
            keyPoints: [
              "SLSA 框架定义了供应链安全的四个等级。",
              "Sigstore/cosign 对制品和镜像进行签名验证。",
              "锁定 Action 版本使用 SHA 而非 tag，防止篡改。",
            ],
            resources: [
              { title: "Sigstore", url: "https://www.sigstore.dev/" },
              { title: "SBOM", url: "https://www.cisa.gov/sbom" },
            ],
          },
        ],
      },
    ],
  },
]

export const cicdKnowledgeCards: KnowledgeCard[] = [
  {
    id: "cicd-card-pipeline",
    title: "流水线设计原则",
    summary: "好的流水线应该快速、可靠、可重现。",
    points: [
      "Fail Fast：最可能失败的检查放在最前面（lint → unit test → build → integration test）。",
      "并行化：独立的检查并行执行，缩短总时间。",
      "幂等性：相同输入产生相同输出，任何步骤可安全重试。",
    ],
    practice: "为一个项目设计完整的 CI 流水线，画出阶段依赖图并优化执行顺序。",
  },
  {
    id: "cicd-card-branching",
    title: "分支策略选择",
    summary: "分支策略应匹配团队规模和发布节奏。",
    points: [
      "小团队 + 持续部署 → Trunk-Based Development + Feature Flags。",
      "多版本维护 + 定期发布 → GitFlow 或 Release Branch。",
      "分支生命周期越短，合并冲突和集成风险越低。",
    ],
    practice: "为你的团队选择分支策略，配置对应的分支保护规则。",
  },
  {
    id: "cicd-card-testing",
    title: "测试金字塔",
    summary: "测试分层是 CI 信心和速度的平衡。",
    points: [
      "单元测试（70%）：快速、隔离、覆盖核心逻辑。",
      "集成测试（20%）：验证组件间交互，使用 testcontainers。",
      "E2E 测试（10%）：验证端到端流程，执行慢但价值高。",
    ],
    practice: "统计项目当前的测试分层比例，调整至推荐的 70/20/10 分布。",
  },
  {
    id: "cicd-card-deploy",
    title: "部署策略对比",
    summary: "根据风险容忍度和资源预算选择部署策略。",
    points: [
      "蓝绿：快速切换和回滚，但需要双倍资源。",
      "金丝雀：渐进式放量，风险可控但需要指标对比。",
      "滚动更新：无需额外资源，但回滚较慢。",
    ],
    practice: "为一个关键服务选择部署策略，制定详细的放量和回滚方案。",
  },
  {
    id: "cicd-card-gitops",
    title: "GitOps 核心理念",
    summary: "Git 是基础设施和应用状态的唯一事实来源。",
    points: [
      "所有变更通过 Git PR 审批，天然可审计和可回滚。",
      "Pull 模式比 Push 模式更安全，集群不暴露凭证。",
      "漂移检测自动发现并修复实际状态与期望状态的偏差。",
    ],
    practice: "用 ArgoCD 部署一个应用，测试 Git 提交后的自动同步和手动回滚。",
  },
  {
    id: "cicd-card-db-migration",
    title: "数据库迁移安全",
    summary: "数据库变更是 CI/CD 中风险最高的环节。",
    points: [
      "Expand-Contract：先扩展 → 双写 → 迁移数据 → 收缩。",
      "迁移脚本必须有对应的回滚脚本，且在 staging 验证。",
      "避免锁表大操作（使用 pt-online-schema-change/gh-ost）。",
    ],
    practice: "为一个列重命名设计向后兼容的迁移方案，包含迁移和回滚脚本。",
  },
  {
    id: "cicd-card-security",
    title: "供应链安全",
    summary: "保护从代码到部署的每个环节。",
    points: [
      "依赖扫描（SCA）+ 代码扫描（SAST）+ 容器扫描三层防护。",
      "制品签名（cosign/Sigstore）防止篡改。",
      "锁定 CI Action 版本为 SHA，不使用可变 tag。",
    ],
    practice: "在 CI 中集成 CodeQL 和 Trivy 扫描，配置高危漏洞阻止合并。",
  },
  {
    id: "cicd-card-metrics",
    title: "CI/CD 效能指标",
    summary: "用 DORA 指标衡量和改进交付效能。",
    points: [
      "部署频率：每天部署次数（Elite 团队可达多次/天）。",
      "Lead Time：从代码提交到生产部署的时间。",
      "变更失败率：导致回滚或修复的部署比例。",
    ],
    practice: "统计团队过去一个月的 DORA 四指标，识别最大的瓶颈环节。",
  },
]

export const cicdExamQuestions: QuizQuestion[] = [
  { id: "cicd-q1", question: "持续集成（CI）的核心实践是？", options: ["每月合并一次代码", "开发者频繁集成代码并自动验证", "只在发布前运行测试", "手动构建和部署"], answer: 1, rationale: "CI 强调开发者频繁（每天至少一次）集成代码到主干，每次集成触发自动构建和测试。" },
  { id: "cicd-q2", question: "持续交付与持续部署的区别是？", options: ["没有区别", "持续交付需要手动审批才部署到生产，持续部署自动部署", "持续部署不需要测试", "持续交付不需要 CI"], answer: 1, rationale: "持续交付确保代码随时可部署但需要手动触发，持续部署自动将通过验证的变更部署到生产。" },
  { id: "cicd-q3", question: "Trunk-Based Development 的核心原则是？", options: ["使用长生命周期的 feature 分支", "所有开发者向主干频繁提交，分支生命周期尽量短", "禁止使用分支", "每个功能一个仓库"], answer: 1, rationale: "Trunk-Based 强调短生命周期分支和频繁合并到主干，减少集成风险。" },
  { id: "cicd-q4", question: "Semantic Versioning 中 MAJOR 版本号递增表示？", options: ["修复了 bug", "添加了新功能", "引入了不兼容的 API 变更", "优化了性能"], answer: 2, rationale: "SemVer 中 MAJOR 版本号递增表示引入了向后不兼容的变更。" },
  { id: "cicd-q5", question: "GitHub Actions 中 Matrix Strategy 的作用是？", options: ["加密环境变量", "并行测试多个 OS/语言版本组合", "管理 Docker 镜像", "配置分支保护"], answer: 1, rationale: "Matrix Strategy 自动为指定的变量组合创建并行 Job，常用于多平台/多版本测试。" },
  { id: "cicd-q6", question: "测试金字塔中占比最大的应该是？", options: ["E2E 测试", "性能测试", "单元测试", "手动测试"], answer: 2, rationale: "单元测试快速、可靠、低成本，应占测试总量的最大比例（约 70%）。" },
  { id: "cicd-q7", question: "SAST 和 DAST 的区别是？", options: ["SAST 分析运行中的应用，DAST 分析源代码", "SAST 分析源代码，DAST 分析运行中的应用", "它们完全相同", "SAST 只能扫描 Java"], answer: 1, rationale: "SAST 静态分析源代码中的安全模式，DAST 对运行中的应用进行动态安全测试。" },
  { id: "cicd-q8", question: "蓝绿部署的主要优势是？", options: ["节省资源", "快速切换和回滚，几乎零停机", "不需要负载均衡器", "自动扩缩容"], answer: 1, rationale: "蓝绿部署通过在两套环境间切换流量，实现秒级切换和回滚。" },
  { id: "cicd-q9", question: "金丝雀发布中，决定是否继续放量的依据是？", options: ["发布时间长短", "关键指标（错误率、延迟）的对比分析", "开发者的直觉", "用户数量"], answer: 1, rationale: "金丝雀发布通过对比新旧版本的关键指标来决定是否继续放量或回滚。" },
  { id: "cicd-q10", question: "GitOps 中 Pull 模式比 Push 模式更安全的原因是？", options: ["Pull 模式更快", "集群内 Agent 拉取配置，无需暴露集群凭证到 CI", "Pull 模式不需要 Git", "Push 模式无法审计"], answer: 1, rationale: "Pull 模式下集群内的 Agent 主动从 Git 拉取配置，CI 不需要持有集群访问凭证。" },
  { id: "cicd-q11", question: "数据库迁移中 Expand-Contract 模式的目的是？", options: ["加快迁移速度", "实现向后兼容的 Schema 变更，支持新旧版本并行", "减少存储空间", "自动生成迁移脚本"], answer: 1, rationale: "Expand-Contract 先扩展（添加新列），再迁移数据，最后收缩（删除旧列），确保全程向后兼容。" },
  { id: "cicd-q12", question: "Monorepo CI 中变更检测的核心价值是？", options: ["简化仓库管理", "只构建和测试受变更影响的包，节省 CI 时间", "支持多语言", "自动合并代码"], answer: 1, rationale: "变更检测避免每次提交都构建整个 Monorepo，只触发受影响的包，大幅节省时间。" },
  { id: "cicd-q13", question: "CI 流水线应遵循的 Fail Fast 原则是？", options: ["尽快跳过失败的步骤", "最可能失败的检查放在最前面，尽早发现问题", "失败后重试三次", "忽略非关键失败"], answer: 1, rationale: "Fail Fast 将轻量检查（lint/编译）放在前面，快速反馈问题，避免浪费后续步骤的时间。" },
  { id: "cicd-q14", question: "Feature Flags 的核心价值是？", options: ["加速编译", "解耦部署与发布，支持暗发布和渐进式开放", "减少代码量", "替代分支管理"], answer: 1, rationale: "Feature Flags 允许代码部署到生产但不暴露给用户，支持暗发布和按条件开放功能。" },
  { id: "cicd-q15", question: "SLSA 框架的目标是？", options: ["加速 CI 构建", "保护软件供应链的完整性和安全性", "管理数据库迁移", "优化测试覆盖率"], answer: 1, rationale: "SLSA 定义了软件供应链安全的四个等级，从基本的构建审计到全链路防篡改。" },
  { id: "cicd-q16", question: "在 CI 中锁定 Action 版本应使用？", options: ["latest 标签", "主分支名称", "具体的 commit SHA", "版本范围（如 v1.x）"], answer: 2, rationale: "使用 SHA 锁定 Action 版本可防止 tag 被篡改指向恶意代码。" },
  { id: "cicd-q17", question: "Terraform 的 state 文件应如何管理？", options: ["提交到 Git 仓库", "存储在远程后端（S3/GCS）并配置锁定", "每次手动备份", "不需要管理"], answer: 1, rationale: "State 文件包含敏感信息（如密码），应存储在远程后端并配置锁定防止并发冲突。" },
  { id: "cicd-q18", question: "DORA 指标中的 Lead Time 指的是？", options: ["从需求提出到代码完成", "从代码提交到成功部署到生产的时间", "从告警到恢复的时间", "从构建开始到结束的时间"], answer: 1, rationale: "Lead Time for Changes 衡量从代码提交到成功部署到生产环境的时间。" },
  { id: "cicd-q19", question: "Branch Protection 中 Required Status Checks 的作用是？", options: ["自动合并 PR", "确保 PR 通过指定的 CI 检查后才能合并", "限制 PR 大小", "自动分配审批者"], answer: 1, rationale: "Required Status Checks 确保 CI 构建、测试、安全扫描等检查全部通过才允许合并。" },
  { id: "cicd-q20", question: "在 CI/CD 中实现合规审计的最有效方式是？", options: ["手动记录每次部署", "GitOps + PR 审批流程 + 自动化审计日志", "只在出问题后调查", "禁止自动化部署"], answer: 1, rationale: "GitOps 通过 Git 历史和 PR 审批天然提供审计记录，配合自动化日志满足合规要求。" },
]

export const cicdRoadmap: RoadmapDefinition = {
  id: "cicd",
  label: "CI/CD 持续交付",
  title: "CI/CD 持续交付学习路线",
  durationLabel: "12 周·36 课时",
  description: "从 CI/CD 基础概念到生产级实践，系统掌握流水线设计、测试集成、部署策略、GitOps 和供应链安全，构建高效可靠的持续交付体系。",
  heroBadge: "流水线设计 · 部署策略 · GitOps · 供应链安全",
  stages: cicdStages,
  knowledgeCards: cicdKnowledgeCards,
  examQuestions: cicdExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 CI/CD 之旅，先理解持续集成与持续交付的核心理念。"
    if (percent < 25) return "掌握版本控制策略和构建自动化基础。"
    if (percent < 50) return "深入流水线设计、测试集成和代码质量门禁。"
    if (percent < 75) return "学习部署策略和 GitOps，实现安全可控的生产部署。"
    if (percent < 100) return "完善数据库迁移、Monorepo CI 和合规审计。"
    return "恭喜完成！你已掌握企业级 CI/CD 实践，持续优化交付效能！"
  },
  resourceGuide: {
    environment: "准备 GitHub 仓库 + GitHub Actions，本地安装 Docker 和 Terraform CLI。",
    fallbackKeyPoints: [
      "CI 的核心是频繁集成和自动验证，缩短反馈循环",
      "分支策略应匹配团队规模和发布节奏",
      "测试金字塔：单元测试多而快，E2E 测试少而精",
      "部署策略根据风险容忍度选择蓝绿、金丝雀或滚动更新",
      "GitOps 让 Git 成为部署状态的唯一事实来源",
    ],
    handsOnSteps: [
      "为一个项目配置完整的 GitHub Actions CI 流水线",
      "集成 SonarQube/CodeQL 和 Trivy 安全扫描",
      "实现一个金丝雀发布流程（可使用 Flagger 或手动流量切分）",
      "用 ArgoCD 部署一个应用到 K8s，验证 GitOps 工作流",
      "设计向后兼容的数据库迁移方案并在 staging 演练",
    ],
    selfChecks: [
      "能否解释 CI/CD/CD 三者的区别与实施前提？",
      "流水线是否遵循 Fail Fast 原则并有充分的缓存优化？",
      "是否掌握蓝绿、金丝雀和滚动更新的优劣与适用场景？",
      "GitOps 流程中变更是否通过 PR 审批且可审计？",
      "数据库迁移是否向后兼容且有回滚方案？",
    ],
    extensions: [
      "探索 Dagger/Earthly 等容器化 CI 工具",
      "研究 eBPF 在 CI 安全监控中的应用",
      "实践 Chaos Engineering 验证部署的韧性",
      "建设内部开发者平台（IDP）简化开发者体验",
    ],
    lessonQuizAdvice: "每周完成流水线实操后做测验，重点理解策略选择背后的权衡而非具体命令。",
  },
}
