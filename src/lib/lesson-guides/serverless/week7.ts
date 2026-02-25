import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "w7-1": {
        lessonId: "w7-1",
        background: [
            "【GitHub Actions 集成】通过 GitHub Actions 工作流自动化 Serverless 部署：代码推送触发构建、测试、部署流水线。",
            "【AWS 凭证配置】使用 aws-actions/configure-aws-credentials Action 配置 AWS 凭证。推荐使用 OIDC（OpenID Connect）替代长期 Access Key。",
            "【SAM 部署流水线】典型流程：checkout 代码 → 安装 SAM CLI → sam build → sam deploy --no-confirm-changeset --no-fail-on-empty-changeset。",
            "【Serverless Framework 部署】使用 `npx serverless deploy --stage $STAGE` 命令在 GitHub Actions 中部署，通过 GitHub Secrets 管理 AWS 凭证。",
            "【工作流触发】可配置多种触发条件：push（代码推送）、pull_request（PR 检查）、workflow_dispatch（手动触发）、schedule（定时触发）。"
        ],
        keyDifficulties: [
            "【凭证安全】AWS Access Key 应存储在 GitHub Secrets 中，不能硬编码。更安全的方案是使用 GitHub OIDC 联合身份，无需管理长期凭证。",
            "【环境矩阵】使用 GitHub Actions 的 matrix strategy 可以并行部署到多个环境/区域，但需要注意部署依赖关系。",
            "【缓存优化】使用 actions/cache 缓存 node_modules 和 SAM 构建产物，避免每次 CI 都重新下载依赖。",
            "【回滚策略】自动化部署需要配套回滚策略：CloudFormation 堆栈回滚、Lambda 版本回退、蓝绿部署切换。"
        ],
        handsOnPath: [
            "在项目中创建 .github/workflows/deploy.yml 工作流文件。",
            "配置 GitHub Secrets 存储 AWS_ACCESS_KEY_ID 和 AWS_SECRET_ACCESS_KEY。",
            "编写工作流：checkout → setup-node → sam build → sam deploy。",
            "推送代码触发工作流，在 GitHub Actions 页面观察部署过程。"
        ],
        selfCheck: [
            "GitHub Actions 中如何安全地配置 AWS 凭证？",
            "OIDC 联合身份相比 Access Key 有什么优势？",
            "如何在 GitHub Actions 中实现多环境部署？",
            "CI/CD 中如何缓存依赖加速构建？"
        ],
        extensions: [
            "研究 GitHub OIDC 与 AWS IAM 的联合身份配置。",
            "了解 GitHub Environments 的保护规则和审批流程。",
            "探索 GitHub Actions 的可重用工作流（reusable workflows）。"
        ],
        sourceUrls: [
            "https://docs.github.com/en/actions/about-github-actions/understanding-github-actions",
            "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-deploying.html",
            "https://github.com/aws-actions/configure-aws-credentials"
        ]
    },
    "w7-2": {
        lessonId: "w7-2",
        background: [
            "【Stage 概念】Stage 是 Serverless 应用的环境标识符（如 dev/staging/prod），用于在同一 AWS 账户或不同账户中隔离部署。",
            "【SAM Stage】SAM 通过 --stack-name 或参数化模板实现多环境：`sam deploy --stack-name myapp-dev --parameter-overrides Stage=dev`。",
            "【Serverless Framework Stage】使用 --stage 参数：`serverless deploy --stage prod`。在 serverless.yml 中通过 ${sls:stage} 引用当前 Stage。",
            "【环境隔离策略】资源隔离级别：同账户不同 Stage 前缀（最简单）、不同 AWS 账户（最安全）、VPC 隔离（网络层面）。",
            "【配置差异化】不同环境的配置差异：内存大小、超时时间、环境变量、日志级别、并发限制等。通过 Stage 参数动态设置。"
        ],
        keyDifficulties: [
            "【命名冲突】同账户多 Stage 部署时，所有资源名称需要包含 Stage 前缀避免冲突。如 DynamoDB 表名、S3 桶名、Lambda 函数名。",
            "【跨账户部署】生产环境推荐使用独立 AWS 账户。需要配置跨账户 IAM 角色和部署流水线的账户切换。",
            "【配置管理】使用 Parameter Store 或 Secrets Manager 按环境管理配置，避免在部署脚本中硬编码环境差异。",
            "【数据隔离】开发和生产环境应使用完全独立的数据存储，避免测试数据污染生产数据。"
        ],
        handsOnPath: [
            "使用 SAM 或 Serverless Framework 分别部署 dev 和 staging 两个环境。",
            "配置不同环境使用不同的 DynamoDB 表名（如 users-dev、users-staging）。",
            "设置环境变量根据 Stage 动态切换日志级别。",
            "在 API Gateway 中查看不同 Stage 的端点 URL 差异。"
        ],
        selfCheck: [
            "多环境部署中如何避免资源命名冲突？",
            "同账户多 Stage 和跨账户部署各自的优缺点是什么？",
            "如何管理不同环境间的配置差异？",
            "为什么推荐生产环境使用独立的 AWS 账户？"
        ],
        extensions: [
            "研究 AWS Organizations 和 Control Tower 管理多账户架构。",
            "了解 SSM Parameter Store 的层级命名空间按环境组织配置。",
            "探索 Feature Flags 服务（如 AWS AppConfig）实现功能开关。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-deploy.html",
            "https://www.serverless.com/framework/docs/providers/aws/guide/variables",
            "https://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html"
        ]
    },
    "w7-3": {
        lessonId: "w7-3",
        background: [
            "【CodePipeline 概述】AWS CodePipeline 是全托管的持续交付服务，可编排 Source → Build → Test → Deploy 各阶段。原生集成 AWS 服务。",
            "【SAM Pipeline】`sam pipeline init` 命令生成 CI/CD 流水线配置，支持 GitHub Actions、GitLab CI、Jenkins 和 CodePipeline 等多种 CI 系统。",
            "【CodeBuild 集成】CodeBuild 是全托管的构建服务，在 Docker 容器中执行 buildspec.yml 定义的构建命令。与 SAM/Serverless 无缝集成。",
            "【源码阶段】CodePipeline 支持多种源：CodeCommit、GitHub、S3、ECR。GitHub 集成使用 CodeStar Connections 或 OAuth。",
            "【部署阶段】部署阶段调用 CloudFormation 执行变更集（Change Set），实现基础设施即代码的自动化部署。"
        ],
        keyDifficulties: [
            "【流水线成本】CodePipeline 按活跃管道计费（$1/管道/月），CodeBuild 按构建时间计费。对于小团队可能不如 GitHub Actions 经济。",
            "【审批门控】CodePipeline 支持手动审批阶段（Manual Approval），在部署到生产环境前要求人工确认。需要配置 SNS 通知审批人。",
            "【构建规范】buildspec.yml 的 phases（install、pre_build、build、post_build）和 artifacts 配置需要仔细编排。",
            "【跨账户流水线】生产级流水线通常跨多个 AWS 账户：源码账户 → 构建账户 → 部署账户。需要配置跨账户 IAM 角色和 KMS 密钥。"
        ],
        handsOnPath: [
            "运行 `sam pipeline init` 选择 CodePipeline 模板，查看生成的流水线配置。",
            "在 AWS 控制台创建一个简单的 CodePipeline：GitHub Source → CodeBuild → CloudFormation Deploy。",
            "编写 buildspec.yml 执行 sam build 和 sam package 命令。",
            "添加手动审批阶段，测试审批流程。"
        ],
        selfCheck: [
            "CodePipeline 的核心阶段有哪些？各阶段的作用是什么？",
            "sam pipeline init 命令生成了什么？",
            "CodeBuild 的 buildspec.yml 有哪些核心配置项？",
            "跨账户流水线需要哪些额外配置？"
        ],
        extensions: [
            "研究 CodePipeline V2 的新特性（如触发器过滤器）。",
            "了解 CodeDeploy 与 Lambda 的蓝绿/金丝雀部署集成。",
            "探索 Terraform 管理 Serverless 资源的方案。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
            "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-pipeline.html",
            "https://docs.aws.amazon.com/codebuild/latest/userguide/sample-sam.html"
        ]
    },
    "w7-4": {
        lessonId: "w7-4",
        background: [
            "【Lambda 版本】每次发布代码创建一个不可变版本（$LATEST 是可变的别名）。版本号递增（1, 2, 3...），每个版本保留独立的代码和配置快照。",
            "【Lambda 别名】别名是指向特定版本的命名指针（如 prod → v3、staging → v4）。通过更新别名指向实现零停机发布。",
            "【流量转移】别名支持加权路由：将流量在两个版本间按百分比分配（如 90% 到 v3，10% 到 v4），实现金丝雀发布或线性发布。",
            "【CodeDeploy 集成】SAM 的 AutoPublishAlias 和 DeploymentPreference 自动配置 CodeDeploy，实现 Lambda 的渐进式部署。",
            "【回滚机制】配置 CloudWatch 告警触发自动回滚：如果新版本的错误率超过阈值，CodeDeploy 自动将流量切回旧版本。"
        ],
        keyDifficulties: [
            "【版本管理】Lambda 版本有配额限制（默认 75 个版本），需要定期清理旧版本。使用 serverless-prune-plugin 或自定义脚本清理。",
            "【别名与 Provisioned Concurrency】Provisioned Concurrency 配置在别名上，而非 $LATEST。流量转移时两个版本都需要预热，影响成本。",
            "【部署策略选择】Canary（金丝雀）：先切 10% 等待验证后切 100%；Linear（线性）：每 N 分钟增加 10%；AllAtOnce：一次性全量切换。",
            "【告警设计】回滚告警需要覆盖关键指标：Errors、Duration P99、Throttles。告警阈值要根据业务基线设定，避免误触发。"
        ],
        handsOnPath: [
            "发布一个 Lambda 函数的版本，创建 prod 别名指向该版本。",
            "更新函数代码，发布新版本，更新 prod 别名实现零停机切换。",
            "配置别名的加权路由：90% 到旧版本，10% 到新版本。",
            "在 SAM 模板中配置 AutoPublishAlias 和 DeploymentPreference: Canary10Percent5Minutes。"
        ],
        selfCheck: [
            "Lambda 版本和别名的关系是什么？$LATEST 的特殊性是什么？",
            "金丝雀部署和线性部署的区别是什么？",
            "如何配置自动回滚？需要什么触发条件？",
            "为什么 Provisioned Concurrency 应该配置在别名上？"
        ],
        extensions: [
            "研究 CodeDeploy 的 PreTraffic 和 PostTraffic Hook 函数。",
            "了解 Lambda 函数 URL 与别名的集成。",
            "探索 AWS AppConfig 与 Lambda Extensions 的特性开关方案。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html",
            "https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html"
        ]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "w7-1": [
        {
            id: "sl-w7-1-q1",
            question: "在 GitHub Actions 中配置 AWS 凭证最安全的方式是什么？",
            options: [
                "将 Access Key 写在代码中",
                "使用 GitHub OIDC 联合身份，无需长期凭证",
                "使用 .env 文件",
                "在工作流中明文传递凭证"
            ],
            answer: 1,
            rationale: "GitHub OIDC 联合身份通过短期令牌获取 AWS 凭证，无需管理长期 Access Key，避免凭证泄露风险。是 AWS 官方推荐方案。"
        },
        {
            id: "sl-w7-1-q2",
            question: "GitHub Actions 中如何存储 AWS 敏感凭证？",
            options: [
                "写在 workflow YAML 文件中",
                "存储在 GitHub Secrets 中，通过 ${{ secrets.NAME }} 引用",
                "存储在代码仓库的 .env 文件中",
                "通过 Git commit message 传递"
            ],
            answer: 1,
            rationale: "GitHub Secrets 加密存储敏感信息，在工作流中通过 ${{ secrets.AWS_ACCESS_KEY_ID }} 语法安全引用，不会在日志中暴露。"
        },
        {
            id: "sl-w7-1-q3",
            question: "SAM 的自动化部署命令中 --no-confirm-changeset 参数的作用是什么？",
            options: [
                "跳过构建步骤",
                "跳过 CloudFormation 变更集确认，直接执行部署",
                "不创建变更集",
                "回滚上一次部署"
            ],
            answer: 1,
            rationale: "在 CI/CD 环境中使用 --no-confirm-changeset 跳过人工确认变更集的交互步骤，实现全自动部署。"
        }
    ],
    "w7-2": [
        {
            id: "sl-w7-2-q1",
            question: "多环境部署中如何避免 DynamoDB 表名冲突？",
            options: [
                "使用相同的表名",
                "在表名中包含 Stage 前缀，如 users-dev、users-prod",
                "每次部署前手动删除旧表",
                "使用不同的列名"
            ],
            answer: 1,
            rationale: "同 AWS 账户的多 Stage 部署时，所有资源名称需要包含 Stage 标识避免冲突。DynamoDB 表名、S3 桶名、Lambda 函数名都应包含 Stage。"
        },
        {
            id: "sl-w7-2-q2",
            question: "为什么推荐生产环境使用独立的 AWS 账户？",
            options: [
                "为了获得更多免费额度",
                "实现最强的资源和权限隔离，避免开发操作影响生产",
                "为了使用不同的 Region",
                "AWS 要求必须这样做"
            ],
            answer: 1,
            rationale: "独立账户提供最强的隔离：权限边界互不影响、资源配额独立、计费分离、避免开发人员误操作生产资源。AWS Organizations 可简化多账户管理。"
        },
        {
            id: "sl-w7-2-q3",
            question: "Serverless Framework 中如何引用当前部署的 Stage？",
            options: [
                "${env:STAGE}",
                "${sls:stage}",
                "${aws:stage}",
                "直接硬编码"
            ],
            answer: 1,
            rationale: "在 serverless.yml 中使用 ${sls:stage} 引用当前 --stage 参数的值。可用于动态设置资源名称、环境变量等。"
        }
    ],
    "w7-3": [
        {
            id: "sl-w7-3-q1",
            question: "AWS CodePipeline 的核心流程阶段是什么？",
            options: [
                "只有部署阶段",
                "Source → Build → Test → Deploy",
                "Code → Run → Monitor",
                "Plan → Apply"
            ],
            answer: 1,
            rationale: "CodePipeline 典型流程：Source（获取源码）→ Build（编译构建）→ Test（运行测试）→ Deploy（部署到目标环境）。每个阶段可包含多个操作。"
        },
        {
            id: "sl-w7-3-q2",
            question: "sam pipeline init 命令的作用是什么？",
            options: [
                "初始化 Lambda 函数",
                "生成 CI/CD 流水线配置，支持多种 CI 系统",
                "创建 DynamoDB 表",
                "启动本地开发服务器"
            ],
            answer: 1,
            rationale: "`sam pipeline init` 交互式生成 CI/CD 流水线配置文件，支持 GitHub Actions、GitLab CI、Jenkins、CodePipeline 等，包含多阶段部署模板。"
        },
        {
            id: "sl-w7-3-q3",
            question: "CodePipeline 中手动审批阶段的作用是什么？",
            options: [
                "自动审批所有部署",
                "在部署到生产环境前要求人工确认，通过 SNS 通知审批人",
                "自动回滚失败的部署",
                "检查代码质量"
            ],
            answer: 1,
            rationale: "手动审批阶段在关键部署（如到生产环境）前暂停流水线，通过 SNS 通知审批人。审批人确认后才继续执行后续部署。"
        }
    ],
    "w7-4": [
        {
            id: "sl-w7-4-q1",
            question: "Lambda 别名的核心作用是什么？",
            options: [
                "给函数改名",
                "作为指向特定版本的命名指针，实现零停机发布和流量转移",
                "给函数添加标签",
                "限制函数并发"
            ],
            answer: 1,
            rationale: "别名是指向特定版本的命名指针（如 prod → v3）。通过更新别名指向新版本实现零停机发布，配合加权路由实现金丝雀部署。"
        },
        {
            id: "sl-w7-4-q2",
            question: "Lambda 金丝雀部署（Canary）的策略是什么？",
            options: [
                "一次性切换 100% 流量",
                "先切一小部分流量到新版本，验证后再切全量",
                "每分钟线性增加流量",
                "随机分配流量"
            ],
            answer: 1,
            rationale: "金丝雀部署先将少量流量（如 10%）切到新版本，等待指定时间验证无误后，将剩余 90% 流量全部切换。如发现问题可快速回滚。"
        },
        {
            id: "sl-w7-4-q3",
            question: "如何配置 Lambda 部署的自动回滚？",
            options: [
                "不支持自动回滚",
                "配置 CloudWatch 告警，错误率超阈值时 CodeDeploy 自动回滚",
                "设置定时回滚",
                "人工监控后手动回滚"
            ],
            answer: 1,
            rationale: "在 SAM 的 DeploymentPreference 中配置 Alarms，关联 CloudWatch 告警。如果新版本触发告警（错误率超标），CodeDeploy 自动回滚到旧版本。"
        }
    ]
}
