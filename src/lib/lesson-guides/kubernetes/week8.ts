import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "w8-1": {
        lessonId: "w8-1",
        background: [
            "Terraform 是 HashiCorp 开发的基础设施即代码（IaC）工具，使用声明式配置文件定义云端和本地资源。它通过 Provider 与各种平台 API 交互，支持 AWS、Azure、GCP、Kubernetes 等数千种服务。",
            "Terraform 使用 HCL（HashiCorp Configuration Language）作为配置语言。HCL 的核心元素包括：Block（配置块，如 resource、provider）、Argument（参数赋值）、Expression（表达式，引用或组合值）。",
            "Terraform 的核心工作流是 Write-Plan-Apply：编写配置文件定义期望状态，plan 生成执行计划预览变更，apply 执行变更并更新状态。这种方式提供了变更可预测性和安全性。",
            "State（状态文件）是 Terraform 的核心概念，存储托管资源与配置的映射关系。默认存储在本地 terraform.tfstate 文件，团队协作推荐使用远程后端（如 S3、Terraform Cloud）存储状态。"
        ],
        keyDifficulties: [
            "依赖图（Dependency Graph）：Terraform 自动分析资源间的依赖关系构建有向无环图，确保按正确顺序创建和销毁资源。显式依赖使用 depends_on，隐式依赖通过引用其他资源属性自动建立。",
            "State 管理挑战：State 文件包含敏感信息（如密码、密钥），需要加密存储；团队协作需要远程后端和状态锁定防止并发修改；State 漂移（drift）需要定期检测和修复。",
            "生命周期管理（lifecycle）：create_before_destroy（先建后删，减少停机）、prevent_destroy（防止误删）、ignore_changes（忽略特定属性变更）、replace_triggered_by（触发替换）。",
            "Provider 配置与版本约束：每个 Provider 需要配置认证信息；使用 required_providers 块锁定版本范围（如 ~> 4.0）；多账号/多区域场景使用 alias 配置多个 Provider 实例。"
        ],
        handsOnPath: [
            "安装 Terraform CLI，创建第一个配置文件（main.tf）定义一个本地文件资源（local_file），运行 terraform init、plan、apply 完成完整工作流。",
            "使用变量（variables.tf）和输出（outputs.tf）参数化配置，通过 terraform.tfvars 或 -var 传递值，使用 terraform output 查看输出结果。",
            "配置远程后端（如 S3 + DynamoDB 锁定），迁移本地 State 到远程，验证状态锁定机制防止并发修改。",
            "练习 State 管理命令：terraform state list（列出资源）、terraform state show（查看详情）、terraform state mv（移动/重命名）、terraform import（导入现有资源）。"
        ],
        selfCheck: [
            "Terraform 的 Write-Plan-Apply 工作流各阶段做什么？为什么需要 plan 阶段？",
            "HCL 的三个核心元素（Block、Argument、Expression）分别是什么？",
            "State 文件的作用是什么？为什么团队协作不应该使用本地 State？",
            "显式依赖（depends_on）和隐式依赖的区别是什么？Terraform 如何确定资源创建顺序？",
            "lifecycle 块的四个常用选项各有什么作用？"
        ],
        extensions: [
            "研究 Terraform Cloud/Enterprise 的功能，了解远程执行、Policy as Code（Sentinel）、私有模块仓库等企业特性。",
            "探索 Terraform 的 Workspace 功能，了解如何管理多环境（dev/staging/prod）配置。",
            "学习 Terragrunt 等 Terraform 包装工具，了解如何实现 DRY 原则和多模块编排。",
            "研究 Terraform Provider 开发，了解如何为自定义 API 创建 Provider。"
        ],
        sourceUrls: [
            "https://developer.hashicorp.com/terraform/intro",
            "https://developer.hashicorp.com/terraform/language",
            "https://developer.hashicorp.com/terraform/language/state"
        ]
    },
    "w8-2": {
        lessonId: "w8-2",
        background: [
            "Terraform 可以使用官方 Provider 或社区模块在 AWS EKS 和 GCP GKE 上创建 Kubernetes 集群。使用 IaC 方式管理集群可实现版本控制、可重复部署和快速销毁，避免手动配置导致的漂移。",
            "AWS EKS 集群需要 VPC、子网、IAM 角色和安全组等前置资源。核心资源包括 aws_eks_cluster（控制平面）和 aws_eks_node_group（工作节点）。社区模块 terraform-aws-modules/eks 封装了最佳实践。",
            "GCP GKE 使用 google_container_cluster 资源创建集群。GKE 支持 Autopilot（全托管节点）和 Standard（自管理节点池）两种模式。节点池通过 google_container_node_pool 独立管理更灵活。",
            "两种云的 Terraform 配置都支持配置 kubectl 访问：EKS 通过 aws eks update-kubeconfig 命令，GKE 通过 gcloud container clusters get-credentials。Terraform 可以输出必要信息供后续配置使用。"
        ],
        keyDifficulties: [
            "EKS 网络配置：VPC 需要跨多个可用区的公有和私有子网；控制平面需要配置 endpoint_public_access 和 endpoint_private_access；工作节点子网标签（kubernetes.io/cluster/<name>）影响 AWS 负载均衡器自动发现。",
            "GKE 节点池分离：建议设置 remove_default_node_pool = true 删除默认节点池，使用独立的 google_container_node_pool 资源管理。这样可以在不重建集群的情况下修改节点配置。",
            "认证与授权：EKS 使用 IAM 与 Kubernetes RBAC 映射（aws-auth ConfigMap 或 EKS Access Entry）；GKE 集成 Google Cloud IAM。需要正确配置才能让 Terraform 和用户访问集群。",
            "模块化与可重用性：生产环境推荐使用官方社区模块（terraform-aws-modules/eks、terraform-google-modules/kubernetes-engine）而非从零编写，它们封装了网络、安全、监控等最佳实践。"
        ],
        handsOnPath: [
            "使用 Terraform 在 AWS 创建 VPC 和 EKS 集群：配置 2-3 个可用区子网，创建 EKS 集群和托管节点组，使用 terraform output 获取 kubeconfig 配置信息。",
            "使用 Terraform 在 GCP 创建 GKE 集群：配置 VPC 网络，创建 Standard 模式集群和独立节点池，验证 kubectl 访问。",
            "练习集群生命周期管理：修改节点组配置（实例类型、数量）观察滚动更新，使用 terraform destroy 完全销毁集群释放资源。",
            "对比直接使用 aws_eks_cluster 资源和使用 terraform-aws-modules/eks 模块的代码复杂度，理解模块封装的价值。"
        ],
        selfCheck: [
            "EKS 集群创建需要哪些前置资源？VPC 和子网有什么特殊要求？",
            "GKE 的 Autopilot 和 Standard 模式有什么区别？什么场景选择哪种？",
            "为什么 GKE 推荐使用 remove_default_node_pool 然后独立创建节点池？",
            "EKS 如何配置 IAM 用户/角色与 Kubernetes RBAC 的映射？",
            "使用社区模块而非原始资源有什么优势？"
        ],
        extensions: [
            "研究 EKS Fargate Profile，了解如何使用无服务器计算运行 Pod，无需管理节点。",
            "探索 GKE Autopilot 模式的资源模型和定价，对比与 Standard 模式的运维差异。",
            "学习 EKS Add-ons 管理（CoreDNS、kube-proxy、VPC CNI），了解如何通过 Terraform 管理集群组件。",
            "研究多集群管理方案，了解如何使用 Terraform Workspace 或目录结构管理 dev/staging/prod 环境。"
        ],
        sourceUrls: [
            "https://developer.hashicorp.com/terraform/tutorials/kubernetes/eks",
            "https://developer.hashicorp.com/terraform/tutorials/kubernetes/gke",
            "https://registry.terraform.io/modules/terraform-aws-modules/eks/aws/latest"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "w8-2": [
        {
            id: "w8-2-q1",
            question: "AWS EKS 集群创建需要哪些核心 Terraform 资源？",
            options: [
                "只需要 aws_eks_cluster",
                "aws_eks_cluster 和 aws_eks_node_group",
                "只需要 aws_instance",
                "aws_ecs_cluster 和 aws_ecs_service"
            ],
            answer: 1,
            rationale: "EKS 需要 aws_eks_cluster（控制平面）和 aws_eks_node_group（工作节点组）两个核心资源，还需 VPC、IAM 等前置资源。"
        },
        {
            id: "w8-2-q2",
            question: "GKE 创建集群使用什么 Terraform 资源？",
            options: [
                "google_kubernetes_cluster",
                "google_container_cluster",
                "google_gke_cluster",
                "google_compute_cluster"
            ],
            answer: 1,
            rationale: "GKE 使用 google_container_cluster 资源创建集群，节点池使用 google_container_node_pool 资源。"
        },
        {
            id: "w8-2-q3",
            question: "为什么 EKS 的 VPC 需要跨多个可用区的子网？",
            options: [
                "降低成本",
                "实现高可用性，工作节点可以分布在不同可用区",
                "加快创建速度",
                "简化网络配置"
            ],
            answer: 1,
            rationale: "跨可用区部署可以在单个可用区故障时保持服务可用，是生产环境高可用的基本要求。"
        },
        {
            id: "w8-2-q4",
            question: "GKE 中 remove_default_node_pool = true 的作用是什么？",
            options: [
                "创建更多节点池",
                "删除默认节点池，改用独立的 node_pool 资源管理",
                "禁用自动伸缩",
                "启用 Autopilot 模式"
            ],
            answer: 1,
            rationale: "删除默认节点池后使用独立的 google_container_node_pool 资源，可以在不重建集群的情况下灵活调整节点配置。"
        },
        {
            id: "w8-2-q5",
            question: "GKE Autopilot 和 Standard 模式的主要区别是什么？",
            options: [
                "Autopilot 更贵",
                "Autopilot 由 Google 全托管节点，Standard 需要自己管理节点池",
                "Standard 不支持自动伸缩",
                "Autopilot 不支持 GPU"
            ],
            answer: 1,
            rationale: "Autopilot 模式由 Google 完全管理节点，按 Pod 资源计费；Standard 模式需要自己配置和管理节点池。"
        },
        {
            id: "w8-2-q6",
            question: "terraform-aws-modules/eks 模块的优势是什么？",
            options: [
                "官方支持",
                "封装了最佳实践，减少配置代码量",
                "免费使用",
                "支持更多云平台"
            ],
            answer: 1,
            rationale: "社区模块封装了 VPC、安全组、IAM、节点组等最佳实践配置，大幅减少需要编写的代码量。"
        },
        {
            id: "w8-2-q7",
            question: "如何配置 kubectl 访问 Terraform 创建的 EKS 集群？",
            options: [
                "手动编辑 kubeconfig 文件",
                "使用 aws eks update-kubeconfig 命令",
                "重新安装 kubectl",
                "使用 SSH 连接到节点"
            ],
            answer: 1,
            rationale: "aws eks update-kubeconfig 命令自动配置 kubeconfig 文件，包括集群端点、证书和认证信息。"
        },
        {
            id: "w8-2-q8",
            question: "EKS 如何实现 IAM 用户与 Kubernetes RBAC 的映射？",
            options: [
                "不支持映射",
                "通过 aws-auth ConfigMap 或 EKS Access Entry",
                "自动映射所有 IAM 用户",
                "使用 Service Account"
            ],
            answer: 1,
            rationale: "EKS 通过 aws-auth ConfigMap（传统方式）或 EKS Access Entry（新方式）映射 IAM 身份到 K8s RBAC。"
        },
        {
            id: "w8-2-q9",
            question: "EKS 子网标签 kubernetes.io/cluster/<name> 的作用是什么？",
            options: [
                "美观标识",
                "帮助 AWS 负载均衡器自动发现正确的子网",
                "计费用途",
                "安全隔离"
            ],
            answer: 1,
            rationale: "子网标签帮助 AWS 云控制器识别哪些子网属于集群，用于自动创建 ELB/ALB 负载均衡器。"
        },
        {
            id: "w8-2-q10",
            question: "EKS 控制平面的 endpoint_public_access 配置什么？",
            options: [
                "节点是否有公网 IP",
                "API Server 是否可以从公网访问",
                "Pod 是否可以访问公网",
                "日志是否公开"
            ],
            answer: 1,
            rationale: "endpoint_public_access 控制 Kubernetes API Server 是否有公网端点，生产环境通常设为 false 仅允许私网访问。"
        },
        {
            id: "w8-2-q11",
            question: "GKE 如何配置 kubectl 访问集群？",
            options: [
                "aws eks update-kubeconfig",
                "gcloud container clusters get-credentials",
                "kubectl config set-cluster",
                "terraform kubectl init"
            ],
            answer: 1,
            rationale: "gcloud container clusters get-credentials 命令自动配置 kubeconfig，包括端点、证书和 gcloud 认证插件。"
        },
        {
            id: "w8-2-q12",
            question: "AWS EKS 集群每小时的费用大约是多少？",
            options: [
                "免费",
                "约 $0.10/小时",
                "约 $1.00/小时",
                "约 $10.00/小时"
            ],
            answer: 1,
            rationale: "EKS 控制平面费用约 $0.10/小时（$73/月），另加节点 EC2 实例费用，测试后记得销毁避免账单。"
        },
        {
            id: "w8-2-q13",
            question: "EKS Fargate Profile 的作用是什么？",
            options: [
                "创建更多 EC2 实例",
                "无服务器运行 Pod，无需管理节点",
                "加速镜像拉取",
                "提供 GPU 支持"
            ],
            answer: 1,
            rationale: "Fargate Profile 让 Pod 运行在 AWS 管理的无服务器基础设施上，无需预置或管理 EC2 节点。"
        },
        {
            id: "w8-2-q14",
            question: "为什么生产环境推荐使用社区 Terraform 模块？",
            options: [
                "官方强制要求",
                "封装最佳实践、减少代码、经过社区验证",
                "性能更好",
                "免费使用"
            ],
            answer: 1,
            rationale: "社区模块（如 terraform-aws-modules）经过大量生产验证，封装了安全、网络、监控等最佳实践，减少重复造轮子。"
        },
        {
            id: "w8-2-q15",
            question: "terraform destroy 在 EKS/GKE 场景中的作用是什么？",
            options: [
                "只删除 Terraform 状态",
                "销毁 Terraform 创建的所有云资源",
                "删除本地配置文件",
                "重启集群"
            ],
            answer: 1,
            rationale: "terraform destroy 销毁所有托管资源（VPC、集群、节点组等），是清理测试环境、避免持续计费的关键命令。"
        }
    ],
    "w8-1": [
        {
            id: "w8-1-q1",
            question: "Terraform 是什么类型的工具？",
            options: [
                "容器编排工具",
                "基础设施即代码（IaC）工具",
                "监控告警工具",
                "日志分析工具"
            ],
            answer: 1,
            rationale: "Terraform 是 HashiCorp 开发的基础设施即代码工具，用声明式配置管理云端和本地资源。"
        },
        {
            id: "w8-1-q2",
            question: "Terraform 使用什么配置语言？",
            options: [
                "YAML",
                "JSON",
                "HCL（HashiCorp Configuration Language）",
                "XML"
            ],
            answer: 2,
            rationale: "Terraform 使用 HCL（HashiCorp Configuration Language），也支持 JSON 格式，但 HCL 更易读。"
        },
        {
            id: "w8-1-q3",
            question: "Terraform 的核心工作流是什么？",
            options: [
                "Build-Test-Deploy",
                "Write-Plan-Apply",
                "Create-Update-Delete",
                "Init-Run-Stop"
            ],
            answer: 1,
            rationale: "Terraform 工作流是 Write（编写配置）→ Plan（预览变更）→ Apply（执行变更），提供变更可预测性。"
        },
        {
            id: "w8-1-q4",
            question: "terraform init 命令的作用是什么？",
            options: [
                "创建资源",
                "初始化工作目录，下载 Provider 和模块",
                "销毁所有资源",
                "查看资源状态"
            ],
            answer: 1,
            rationale: "terraform init 初始化工作目录，下载配置中声明的 Provider 插件和模块，是使用 Terraform 的第一步。"
        },
        {
            id: "w8-1-q5",
            question: "State 文件的主要作用是什么？",
            options: [
                "存储配置文件的备份",
                "存储托管资源与配置声明的映射关系",
                "存储 Provider 的认证信息",
                "存储执行日志"
            ],
            answer: 1,
            rationale: "State 文件存储远程资源与配置声明的绑定关系，使 Terraform 能够跟踪和管理资源的生命周期。"
        },
        {
            id: "w8-1-q6",
            question: "默认情况下，State 文件存储在哪里？",
            options: [
                "云端存储",
                "本地 terraform.tfstate 文件",
                "Terraform Cloud",
                "内存中"
            ],
            answer: 1,
            rationale: "默认 State 存储在本地 terraform.tfstate 文件，团队协作推荐使用远程后端（如 S3）。"
        },
        {
            id: "w8-1-q7",
            question: "terraform plan 命令的作用是什么？",
            options: [
                "执行资源变更",
                "生成执行计划，预览将要进行的变更",
                "初始化工作目录",
                "验证配置语法"
            ],
            answer: 1,
            rationale: "terraform plan 对比当前状态和期望配置，生成执行计划显示将创建、修改或删除的资源。"
        },
        {
            id: "w8-1-q8",
            question: "Provider 在 Terraform 中的作用是什么？",
            options: [
                "提供配置模板",
                "与目标平台 API 交互的插件",
                "管理 State 文件",
                "执行代码测试"
            ],
            answer: 1,
            rationale: "Provider 是 Terraform 插件，负责与各种平台（AWS、Azure、GCP、K8s 等）的 API 交互。"
        },
        {
            id: "w8-1-q9",
            question: "depends_on 参数的作用是什么？",
            options: [
                "定义资源名称",
                "显式声明资源间的依赖关系",
                "设置资源标签",
                "配置超时时间"
            ],
            answer: 1,
            rationale: "depends_on 用于显式声明资源依赖，当隐式依赖（属性引用）无法表达依赖关系时使用。"
        },
        {
            id: "w8-1-q10",
            question: "lifecycle 块中 prevent_destroy 的作用是什么？",
            options: [
                "自动销毁资源",
                "防止资源被意外销毁",
                "加速资源创建",
                "忽略资源变更"
            ],
            answer: 1,
            rationale: "prevent_destroy = true 保护重要资源，当 plan 包含销毁该资源时会报错，防止误删。"
        },
        {
            id: "w8-1-q11",
            question: "如何导入已存在的资源到 Terraform 管理？",
            options: [
                "terraform init",
                "terraform import",
                "terraform apply",
                "terraform add"
            ],
            answer: 1,
            rationale: "terraform import 将已存在的资源导入 State，使 Terraform 可以管理非 Terraform 创建的资源。"
        },
        {
            id: "w8-1-q12",
            question: "为什么团队协作时需要远程后端存储 State？",
            options: [
                "提高执行速度",
                "支持状态锁定和共享访问，防止并发冲突",
                "减少配置文件大小",
                "自动备份配置"
            ],
            answer: 1,
            rationale: "远程后端提供状态锁定（防止并发修改）、团队共享访问、加密存储等功能，是协作必需。"
        },
        {
            id: "w8-1-q13",
            question: "terraform destroy 命令的作用是什么？",
            options: [
                "删除配置文件",
                "销毁所有托管资源",
                "重置 Provider",
                "清理缓存"
            ],
            answer: 1,
            rationale: "terraform destroy 销毁 State 中跟踪的所有资源，是 apply 的逆操作，用于清理环境。"
        },
        {
            id: "w8-1-q14",
            question: "required_providers 块的作用是什么？",
            options: [
                "定义输出变量",
                "声明和锁定 Provider 版本",
                "配置远程后端",
                "定义本地变量"
            ],
            answer: 1,
            rationale: "required_providers 在 terraform 块中声明项目需要的 Provider 及版本约束，确保版本一致性。"
        },
        {
            id: "w8-1-q15",
            question: "create_before_destroy 生命周期选项的用途是什么？",
            options: [
                "删除资源前先创建新资源",
                "创建资源前先删除旧资源",
                "同时创建和删除资源",
                "禁用资源创建"
            ],
            answer: 0,
            rationale: "create_before_destroy = true 在需要替换资源时先创建新资源再删除旧资源，减少服务中断时间。"
        }
    ]
}
