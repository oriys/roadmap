import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "w8-1": {
        lessonId: "w8-1",
        background: [
            "【Terraform 定义】官方文档：'infrastructure-as-code tool enabling teams to define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share'——基础设施即代码工具，用声明式配置管理云端和本地资源。",
            "【HCL 语法三要素】官方文档：'Blocks are containers for other content...represent configuration of some kind of object'；Arguments assign values；Expressions represent values。基本格式：<BLOCK TYPE> \"<LABEL>\" { <IDENTIFIER> = <EXPRESSION> }。",
            "【核心工作流】官方文档：'Write → Plan → Apply'——Write 定义资源配置，Plan 生成执行计划预览变更，Apply 执行变更。官方强调 Plan 阶段'generates an execution blueprint showing proposed changes'提供安全性。",
            "【State 核心价值】官方文档：'Terraform must store state about your managed infrastructure...map real world resources to your configuration, keep track of metadata, and improve performance'——State 是资源与配置的绑定关系。",
            "【Provider 生态】官方文档：'Thousands of providers in the Terraform Registry support AWS, Azure, GCP, Kubernetes, GitHub'——通过 Provider 插件与各平台 API 交互，Registry 提供数千种 Provider。"
        ],
        keyDifficulties: [
            "【依赖图机制】官方文档：Terraform 自动构建依赖图'provision resources efficiently in parallel'。显式依赖使用 depends_on；隐式依赖通过引用属性（如 aws_instance.example.id）自动建立，无需手动声明。",
            "【State 管理】官方文档警告：State 默认存储在本地'terraform.tfstate'文件，推荐'storing it in HCP Terraform to version, encrypt, and securely share it with your team'——团队协作需远程后端+状态锁定。",
            "【生命周期控制】官方文档 lifecycle 块四选项：create_before_destroy（'先建后删减少停机'）、prevent_destroy（'防止误删'）、ignore_changes（'忽略外部变更'）、replace_triggered_by（'触发替换条件'）。",
            "【版本约束语法】官方文档：required_providers 块锁定版本——'~> 4.0' 允许 4.x 但不允许 5.0；'>= 1.0, < 2.0' 范围约束。'Terraform configuration written for one version should continue to work with any later minor version'。",
            "【State 命令】官方文档：'terraform state' 命令提供 CLI 级状态操作——state list（列出资源）、state show（查看详情）、state mv（移动/重命名）、state rm（从状态移除）、import（导入现有资源）。"
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
    },
    "w8-3": {
        lessonId: "w8-3",
        background: [
            "Ansible 是 Red Hat 开发的开源自动化平台，用于配置管理、应用部署和任务编排。其核心特点是无代理（Agentless）架构，通过 SSH（Linux）或 WinRM（Windows）连接目标主机，无需在被管理节点安装任何软件。",
            "Ansible 使用 YAML 格式的 Playbook 定义自动化任务。Playbook 包含一个或多个 Play，每个 Play 针对一组主机执行一系列 Task。Task 调用 Module 完成具体操作，如安装软件包、复制文件、启动服务等。",
            "Inventory（清单）定义 Ansible 管理的主机和分组。可以是静态文件（INI 或 YAML 格式）列出主机 IP/域名，也可以是动态清单脚本从云 API（如 AWS、Azure）自动发现主机。",
            "Ansible 内置 3000+ 模块覆盖系统管理、云服务、容器、网络设备等场景。模块设计遵循幂等性原则——重复执行 Playbook 不会改变已达成期望状态的系统，安全可靠。"
        ],
        keyDifficulties: [
            "Playbook 结构：Playbook 包含 hosts（目标主机模式）、vars（变量）、tasks（任务列表）、handlers（处理器）。Task 按顺序执行，某主机失败后会被排除出后续任务。handlers 用于响应变更（如配置修改后重启服务）。",
            "变量优先级：Ansible 有复杂的变量优先级，从低到高：role defaults → inventory → playbook vars → extra vars（-e）。理解优先级对调试变量覆盖问题很重要。group_vars 和 host_vars 目录组织主机/组级别变量。",
            "幂等性实践：模块应检查当前状态并仅在需要时执行变更。使用 changed_when 和 failed_when 控制任务状态；register 捕获任务输出供后续条件判断；使用 when 实现条件执行。",
            "Role 组织：Role 是组织 Playbook 的标准方式，包含 tasks、handlers、files、templates、vars、defaults、meta 等目录。使用 Ansible Galaxy 分享和重用社区 Role。"
        ],
        handsOnPath: [
            "安装 Ansible（pip install ansible），创建 inventory 文件定义本地主机（localhost），编写第一个 Playbook 使用 debug 模块输出 Hello World。",
            "创建一个安装 Nginx 的 Playbook：使用 apt/yum 模块安装软件包，copy/template 模块部署配置文件，service 模块启动服务，定义 handler 在配置变更时重启 Nginx。",
            "使用 ansible-playbook --check（dry-run）和 --diff 预览变更，使用 ansible-lint 检查 Playbook 最佳实践，理解测试和验证流程。",
            "将 Playbook 重构为 Role：创建标准目录结构，分离 tasks、handlers、templates、defaults，使用 ansible-galaxy init 生成 Role 骨架。"
        ],
        selfCheck: [
            "Ansible 的无代理架构有什么优势？它如何连接被管理节点？",
            "Playbook、Play、Task、Module 之间的关系是什么？",
            "什么是幂等性？为什么它对配置管理很重要？",
            "Inventory 的作用是什么？静态清单和动态清单有什么区别？",
            "Handler 和普通 Task 有什么区别？什么时候使用 Handler？"
        ],
        extensions: [
            "研究 Ansible Vault 加密敏感数据（密码、密钥），了解如何在 Playbook 中安全管理机密。",
            "探索 Ansible Tower/AWX（Web UI 和 API），了解企业级 Ansible 管理平台的功能。",
            "学习 Ansible 集合（Collections），了解模块和 Role 的新分发机制。",
            "研究 Ansible 与容器的集成，了解如何管理 Docker 容器和 Kubernetes 资源。"
        ],
        sourceUrls: [
            "https://docs.ansible.com/projects/ansible/latest/getting_started/get_started_ansible.html",
            "https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_intro.html",
            "https://docs.ansible.com/ansible/latest/dev_guide/overview_architecture.html"
        ]
    },
    "w8-4": {
        lessonId: "w8-4",
        background: [
            "Terraform 和 Ansible 是互补而非竞争的工具：Terraform 擅长 Day 0 基础设施供给（创建 VPC、VM、K8s 集群等），Ansible 擅长 Day 1 配置管理（安装软件、配置服务、部署应用）。组合使用可以覆盖完整的基础设施生命周期。",
            "Terraform 模块（Module）是可重用配置的集合，将相关资源封装在一起。模块分为根模块（Root Module，工作目录中的配置）和子模块（Child Module，被调用的模块）。模块可以从本地路径、Terraform Registry 或 Git 仓库引用。",
            "Ansible Role 是组织 Playbook 的标准方式，使用固定目录结构（tasks/、handlers/、templates/、files/、vars/、defaults/、meta/）组织配置。group_vars 和 host_vars 目录管理分组和主机级别的变量。",
            "两者集成的典型工作流：Terraform 创建基础设施 → 输出主机 IP 和连接信息 → 更新 Ansible Inventory → Ansible 配置主机。这个流程可以手动执行，也可以在 CI/CD 流水线中自动化。"
        ],
        keyDifficulties: [
            "动态 Inventory 集成：cloud.terraform.terraform_provider 插件可以从 Terraform State 动态生成 Ansible Inventory，确保两个工具使用一致的主机信息。避免手动维护 Inventory 导致的配置漂移。",
            "变量和输出传递：Terraform output 可以导出主机 IP、密钥路径、数据库端点等信息；Ansible 可以通过环境变量、extra-vars 或动态 Inventory 消费这些输出，实现工具间的数据流转。",
            "职责边界划分：Terraform 管理云资源的创建和销毁（VM、网络、存储、K8s 集群），Ansible 管理资源内部的配置（包管理、服务配置、用户管理）。避免两个工具管理同一资源导致冲突。",
            "执行顺序和依赖：Terraform apply 必须在 Ansible 执行前完成；Ansible Playbook 修改不会触发 Terraform 重新执行。在 CI/CD 中需要明确编排这两个阶段的执行顺序和触发条件。"
        ],
        handsOnPath: [
            "创建 Terraform 模块结构：主模块调用 VPC 和 EC2 子模块，使用 output 导出实例公网 IP 列表和 SSH 密钥路径，运行 terraform apply 创建基础设施。",
            "配置 Ansible 项目结构：创建 site.yml 主 Playbook，使用 group_vars/all.yml 定义通用变量，创建 roles/common 角色安装基础软件包。",
            "集成工作流：使用 terraform output -json 导出数据，编写脚本生成 Ansible inventory.ini，运行 ansible-playbook -i inventory.ini site.yml 配置服务器。",
            "创建 CI/CD 流水线：在 GitHub Actions 或 GitLab CI 中编排 Terraform 和 Ansible 阶段，实现基础设施变更时自动触发配置更新。"
        ],
        selfCheck: [
            "Terraform 和 Ansible 各自擅长什么？Day 0/Day 1/Day 2 分别指什么阶段？",
            "Terraform 模块的根模块和子模块有什么区别？如何从 Registry 引用模块？",
            "Ansible Role 的标准目录结构包含哪些目录？各自的作用是什么？",
            "如何将 Terraform 的输出传递给 Ansible？有哪些方法？",
            "为什么修改 Ansible Playbook 不会触发 Terraform 重新执行？如何在 CI/CD 中正确编排两者？"
        ],
        extensions: [
            "研究 Terraform 的 AAP Provider，了解如何在 Terraform 工作流中直接调用 Ansible Automation Platform。",
            "探索 Terraform Run Tasks，了解如何在 Terraform 执行的特定阶段触发 Ansible 工作流。",
            "学习 Packer + Terraform + Ansible 的组合：Packer 构建预配置镜像，Terraform 部署镜像，Ansible 处理运行时配置。",
            "研究 GitOps 模式下的基础设施管理，了解如何使用 ArgoCD/Flux 配合 Terraform 和 Ansible 实现声明式运维。"
        ],
        sourceUrls: [
            "https://developer.hashicorp.com/terraform/language/modules",
            "https://docs.ansible.com/projects/ansible/latest/tips_tricks/sample_setup.html",
            "https://developer.hashicorp.com/validated-patterns/terraform/terraform-integrate-ansible-automation-platform"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "w8-4": [
        {
            id: "w8-4-q1",
            question: "Terraform 和 Ansible 分别擅长什么阶段的工作？",
            options: [
                "两者都擅长配置管理",
                "Terraform 擅长 Day 0 基础设施供给，Ansible 擅长 Day 1 配置管理",
                "Terraform 擅长配置管理，Ansible 擅长基础设施供给",
                "两者功能完全相同"
            ],
            answer: 1,
            rationale: "Terraform 擅长 Day 0 阶段的基础设施创建（VM、网络、存储），Ansible 擅长 Day 1 阶段的配置管理（软件安装、服务配置）。"
        },
        {
            id: "w8-4-q2",
            question: "Terraform 模块（Module）的主要作用是什么？",
            options: [
                "替代 Provider",
                "将相关资源封装为可重用的配置集合",
                "存储 State 文件",
                "执行 Ansible Playbook"
            ],
            answer: 1,
            rationale: "模块是可重用配置的集合，将相关资源封装在一起，可以从本地路径、Registry 或 Git 仓库引用。"
        },
        {
            id: "w8-4-q3",
            question: "Terraform 的根模块（Root Module）和子模块（Child Module）有什么区别？",
            options: [
                "根模块更大，子模块更小",
                "根模块是工作目录中的配置，子模块是被调用的模块",
                "根模块只能有一个，子模块可以有多个",
                "没有区别"
            ],
            answer: 1,
            rationale: "根模块是 Terraform 工作目录中的配置文件，子模块是通过 module 块调用的外部模块。"
        },
        {
            id: "w8-4-q4",
            question: "Ansible Role 的标准目录结构包含哪些核心目录？",
            options: [
                "只有 tasks 目录",
                "tasks、handlers、templates、files、vars、defaults、meta",
                "playbooks、inventory、config",
                "src、bin、lib"
            ],
            answer: 1,
            rationale: "Role 使用标准目录结构：tasks（任务）、handlers（处理器）、templates（模板）、files（静态文件）、vars/defaults（变量）、meta（依赖）。"
        },
        {
            id: "w8-4-q5",
            question: "如何从 Terraform State 动态生成 Ansible Inventory？",
            options: [
                "手动复制粘贴",
                "使用 cloud.terraform.terraform_provider 插件",
                "使用 terraform import",
                "使用 ansible-vault"
            ],
            answer: 1,
            rationale: "cloud.terraform.terraform_provider 插件可以从 Terraform State 动态生成 Ansible Inventory，确保两个工具使用一致的主机信息。"
        },
        {
            id: "w8-4-q6",
            question: "Terraform output 的主要用途是什么？",
            options: [
                "显示错误信息",
                "导出资源信息供其他工具使用（如 Ansible）",
                "创建新资源",
                "删除资源"
            ],
            answer: 1,
            rationale: "Terraform output 导出主机 IP、连接信息等数据，供 Ansible 或其他工具消费，实现工具间的数据流转。"
        },
        {
            id: "w8-4-q7",
            question: "Terraform 和 Ansible 集成的典型工作流顺序是什么？",
            options: [
                "Ansible → Terraform → 部署应用",
                "Terraform 创建基础设施 → 更新 Inventory → Ansible 配置主机",
                "同时运行 Terraform 和 Ansible",
                "只使用 Terraform"
            ],
            answer: 1,
            rationale: "典型工作流：Terraform 创建基础设施 → 输出主机信息 → 更新 Ansible Inventory → Ansible 配置主机。"
        },
        {
            id: "w8-4-q8",
            question: "group_vars 目录在 Ansible 中的作用是什么？",
            options: [
                "存储 Playbook 代码",
                "存储按主机组组织的变量",
                "定义 Role 依赖",
                "存储模板文件"
            ],
            answer: 1,
            rationale: "group_vars 目录存储按主机组组织的变量文件，文件名与组名对应，变量自动应用到该组所有主机。"
        },
        {
            id: "w8-4-q9",
            question: "为什么修改 Ansible Playbook 不会触发 Terraform 重新执行？",
            options: [
                "Terraform 会自动检测 Playbook 变更",
                "两者是独立工具，Ansible 变更不影响 Terraform 基础设施定义",
                "Ansible 不支持与 Terraform 集成",
                "需要特殊配置才能触发"
            ],
            answer: 1,
            rationale: "Terraform 和 Ansible 是独立工具，Terraform 只跟踪基础设施状态，不关心 Ansible 配置变更。"
        },
        {
            id: "w8-4-q10",
            question: "Terraform 模块可以从哪些来源引用？",
            options: [
                "只能从本地路径",
                "本地路径、Terraform Registry、Git 仓库、S3 存储桶等",
                "只能从 Terraform Registry",
                "只能从 Git 仓库"
            ],
            answer: 1,
            rationale: "Terraform 支持多种模块来源：本地文件系统、公共/私有 Registry、VCS 仓库（Git）、S3 存储桶等。"
        },
        {
            id: "w8-4-q11",
            question: "Day 2 运维阶段主要包含什么工作？",
            options: [
                "创建基础设施",
                "初始配置管理",
                "漂移检测、补丁管理、持续配置管理",
                "销毁所有资源"
            ],
            answer: 2,
            rationale: "Day 2 是持续运维阶段，包括漂移检测（Terraform）、补丁管理、应用更新、配置变更等日常维护工作。"
        },
        {
            id: "w8-4-q12",
            question: "在 CI/CD 流水线中，Terraform 和 Ansible 阶段应该如何编排？",
            options: [
                "并行执行",
                "Terraform 阶段必须在 Ansible 阶段之前完成",
                "Ansible 阶段必须先执行",
                "随机顺序"
            ],
            answer: 1,
            rationale: "Terraform 必须先创建基础设施，Ansible 才能配置这些资源。CI/CD 中需要明确这个依赖顺序。"
        },
        {
            id: "w8-4-q13",
            question: "使用 terraform output -json 的目的是什么？",
            options: [
                "生成 JSON 格式的配置文件",
                "以 JSON 格式导出输出值，便于脚本解析和 Ansible 消费",
                "验证 JSON 语法",
                "将 HCL 转换为 JSON"
            ],
            answer: 1,
            rationale: "terraform output -json 以 JSON 格式导出输出值，便于脚本解析，可用于生成 Ansible inventory 或传递变量。"
        },
        {
            id: "w8-4-q14",
            question: "Terraform 和 Ansible 的职责边界划分原则是什么？",
            options: [
                "没有明确边界",
                "Terraform 管理云资源，Ansible 管理资源内部配置",
                "都可以管理所有内容",
                "按文件大小划分"
            ],
            answer: 1,
            rationale: "Terraform 管理云资源的生命周期（创建/销毁 VM、网络），Ansible 管理资源内部的配置（包管理、服务配置）。"
        },
        {
            id: "w8-4-q15",
            question: "site.yml 在 Ansible 项目中通常是什么角色？",
            options: [
                "存储变量",
                "主 Playbook，导入其他功能性 Playbook",
                "定义 Inventory",
                "存储密钥"
            ],
            answer: 1,
            rationale: "site.yml 通常是主 Playbook，导入其他功能性 Playbook（如 webservers.yml、dbservers.yml），作为整个基础设施的入口点。"
        }
    ],
    "w8-3": [
        {
            id: "w8-3-q1",
            question: "Ansible 的核心架构特点是什么？",
            options: [
                "需要在所有节点安装 Agent",
                "无代理（Agentless），通过 SSH/WinRM 连接",
                "使用专用网络协议",
                "需要中央数据库"
            ],
            answer: 1,
            rationale: "Ansible 是无代理架构，通过 SSH（Linux）或 WinRM（Windows）连接目标主机，无需在被管理节点安装软件。"
        },
        {
            id: "w8-3-q2",
            question: "Ansible Playbook 使用什么格式编写？",
            options: [
                "JSON",
                "XML",
                "YAML",
                "HCL"
            ],
            answer: 2,
            rationale: "Ansible Playbook 使用 YAML 格式编写，易于阅读和编写，支持丰富的数据结构。"
        },
        {
            id: "w8-3-q3",
            question: "Playbook、Play、Task 之间的关系是什么？",
            options: [
                "Playbook 包含 Task，Task 包含 Play",
                "Playbook 包含 Play，Play 包含 Task",
                "三者是平级关系",
                "Play 包含 Playbook"
            ],
            answer: 1,
            rationale: "Playbook 包含一个或多个 Play，每个 Play 针对一组主机执行一系列 Task，Task 调用 Module 完成操作。"
        },
        {
            id: "w8-3-q4",
            question: "Inventory 文件的作用是什么？",
            options: [
                "存储 Playbook 代码",
                "定义 Ansible 管理的主机和分组",
                "存储密码和密钥",
                "定义 Module 参数"
            ],
            answer: 1,
            rationale: "Inventory 定义 Ansible 管理的目标主机及其分组，可以是静态文件或从云 API 动态生成。"
        },
        {
            id: "w8-3-q5",
            question: "什么是幂等性（Idempotency）？",
            options: [
                "每次执行结果不同",
                "重复执行不会改变已达成期望状态的系统",
                "只能执行一次",
                "必须按顺序执行"
            ],
            answer: 1,
            rationale: "幂等性意味着重复执行 Playbook 不会改变已达成期望状态的系统，模块会检查当前状态并仅在需要时执行变更。"
        },
        {
            id: "w8-3-q6",
            question: "Handler 和普通 Task 的区别是什么？",
            options: [
                "Handler 总是执行",
                "Handler 只在被通知（notify）且有变更时执行，在 Play 末尾运行",
                "Handler 比 Task 执行更快",
                "Handler 不支持条件判断"
            ],
            answer: 1,
            rationale: "Handler 是特殊的 Task，只在被 notify 触发且实际发生变更时执行，常用于配置修改后重启服务。"
        },
        {
            id: "w8-3-q7",
            question: "Ansible 内置大约多少个模块？",
            options: [
                "约 100 个",
                "约 500 个",
                "约 3000+ 个",
                "约 10 个"
            ],
            answer: 2,
            rationale: "Ansible 内置 3000+ 模块覆盖系统管理、云服务、容器、网络设备等各种场景。"
        },
        {
            id: "w8-3-q8",
            question: "ansible-playbook --check 参数的作用是什么？",
            options: [
                "检查语法错误",
                "dry-run 模式，预览变更但不实际执行",
                "检查主机连通性",
                "检查模块是否存在"
            ],
            answer: 1,
            rationale: "--check 是 dry-run 模式，模拟执行 Playbook 并显示将要进行的变更，但不实际修改系统。"
        },
        {
            id: "w8-3-q9",
            question: "Role 的作用是什么？",
            options: [
                "定义用户权限",
                "组织和重用 Playbook 内容的标准方式",
                "管理 Ansible 配置文件",
                "定义主机分组"
            ],
            answer: 1,
            rationale: "Role 是组织 Playbook 的标准方式，包含 tasks、handlers、templates、vars 等目录，便于复用和分享。"
        },
        {
            id: "w8-3-q10",
            question: "register 关键字的作用是什么？",
            options: [
                "注册新模块",
                "捕获 Task 执行结果供后续使用",
                "注册主机到 Inventory",
                "注册 Ansible 许可证"
            ],
            answer: 1,
            rationale: "register 将 Task 的执行结果（stdout、stderr、rc 等）保存到变量中，供后续条件判断或输出使用。"
        },
        {
            id: "w8-3-q11",
            question: "when 关键字的作用是什么？",
            options: [
                "定义执行时间",
                "条件执行，只在条件为真时运行 Task",
                "设置超时时间",
                "定义变量生效时机"
            ],
            answer: 1,
            rationale: "when 实现条件执行，只有当指定条件为真时才运行该 Task，支持 Jinja2 表达式。"
        },
        {
            id: "w8-3-q12",
            question: "Ansible Galaxy 是什么？",
            options: [
                "Ansible 的图形界面",
                "分享和下载社区 Role 的平台",
                "Ansible 的云服务",
                "Ansible 的测试框架"
            ],
            answer: 1,
            rationale: "Ansible Galaxy 是社区 Role 分享平台，可以使用 ansible-galaxy 命令下载和管理社区贡献的 Role。"
        },
        {
            id: "w8-3-q13",
            question: "group_vars 目录的作用是什么？",
            options: [
                "存储主机组定义",
                "存储特定主机组的变量",
                "存储全局变量",
                "存储 Role 变量"
            ],
            answer: 1,
            rationale: "group_vars 目录存储按主机组组织的变量文件，文件名与组名对应，变量自动应用到该组所有主机。"
        },
        {
            id: "w8-3-q14",
            question: "ansible-lint 工具的作用是什么？",
            options: [
                "加密敏感数据",
                "检查 Playbook 最佳实践和常见错误",
                "测试主机连通性",
                "生成文档"
            ],
            answer: 1,
            rationale: "ansible-lint 是 Playbook 静态分析工具，检查语法、最佳实践、潜在问题，帮助提高代码质量。"
        },
        {
            id: "w8-3-q15",
            question: "Ansible Vault 的作用是什么？",
            options: [
                "备份 Playbook",
                "加密敏感数据（密码、密钥等）",
                "管理 SSH 密钥",
                "存储执行日志"
            ],
            answer: 1,
            rationale: "Ansible Vault 用于加密敏感数据，如密码、API 密钥等，加密后的文件可以安全存储在版本控制系统中。"
        }
    ],
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
            question: "官方文档对 Terraform 的定义是什么？",
            options: [
                "'infrastructure-as-code tool enabling teams to define cloud and on-prem resources in human-readable configuration files'",
                "容器编排平台",
                "监控告警系统",
                "日志分析工具"
            ],
            answer: 0,
            rationale: "官方文档定义 Terraform 为'infrastructure-as-code tool enabling teams to define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share'。"
        },
        {
            id: "w8-1-q2",
            question: "官方文档描述的 HCL 语法三要素是什么？",
            options: [
                "Variables、Outputs、Modules",
                "Resources、Providers、State",
                "Blocks（配置块）、Arguments（参数赋值）、Expressions（表达式）",
                "Plan、Apply、Destroy"
            ],
            answer: 2,
            rationale: "官方文档：'Blocks are containers for other content'、Arguments assign values to names、Expressions represent values。基本格式：<BLOCK TYPE> \"<LABEL>\" { <IDENTIFIER> = <EXPRESSION> }。"
        },
        {
            id: "w8-1-q3",
            question: "官方文档描述的 Terraform 核心工作流是什么？",
            options: [
                "Build-Test-Deploy",
                "Create-Update-Delete",
                "Init-Run-Stop",
                "'Write → Plan → Apply'——编写配置、预览变更、执行变更"
            ],
            answer: 3,
            rationale: "官方文档：核心工作流是 Write（定义配置）→ Plan（'generates an execution blueprint showing proposed changes'）→ Apply（执行变更）。"
        },
        {
            id: "w8-1-q4",
            question: "官方文档对 State 作用的描述是什么？",
            options: [
                "存储配置文件备份",
                "'map real world resources to your configuration, keep track of metadata, and improve performance'",
                "存储 Provider 认证信息",
                "记录执行日志"
            ],
            answer: 1,
            rationale: "官方文档：'Terraform must store state about your managed infrastructure...map real world resources to your configuration, keep track of metadata, and improve performance'。"
        },
        {
            id: "w8-1-q5",
            question: "terraform init 命令的作用是什么？",
            options: [
                "'Prepares your working directory'——初始化工作目录，下载 Provider 和模块",
                "创建云资源",
                "销毁所有资源",
                "查看资源状态"
            ],
            answer: 0,
            rationale: "官方文档：'Initialize: terraform init - Prepares your working directory'——这是使用 Terraform 的第一步，下载所需的 Provider 插件和模块。"
        },
        {
            id: "w8-1-q6",
            question: "官方文档对 State 存储位置的建议是什么？",
            options: [
                "只使用本地文件存储",
                "存储在代码仓库中",
                "'storing it in HCP Terraform to version, encrypt, and securely share it with your team'——推荐远程后端",
                "存储在内存中"
            ],
            answer: 2,
            rationale: "官方文档：默认存储在本地'terraform.tfstate'，但推荐'storing it in HCP Terraform to version, encrypt, and securely share it with your team'——团队协作需远程后端。"
        },
        {
            id: "w8-1-q7",
            question: "官方文档描述 Terraform 如何处理资源依赖？",
            options: [
                "需要手动指定所有依赖",
                "随机顺序处理",
                "自动构建依赖图'provision resources efficiently in parallel'",
                "按配置文件顺序执行"
            ],
            answer: 2,
            rationale: "官方文档：Terraform 自动构建依赖图'provision resources efficiently in parallel'——隐式依赖通过属性引用自动建立，显式依赖使用 depends_on。"
        },
        {
            id: "w8-1-q8",
            question: "lifecycle 块的 create_before_destroy 选项作用是什么？",
            options: [
                "先删除旧资源再创建新资源",
                "同时创建和删除",
                "禁用资源创建",
                "替换资源时先创建新资源再删除旧资源，减少服务中断"
            ],
            answer: 3,
            rationale: "官方文档：create_before_destroy = true 在需要替换资源时'先建后删减少停机'，确保服务连续性。"
        },
        {
            id: "w8-1-q9",
            question: "官方文档对 Provider 的描述是什么？",
            options: [
                "只支持 AWS 一种平台",
                "'Thousands of providers in the Terraform Registry support AWS, Azure, GCP, Kubernetes, GitHub'",
                "Terraform 内置的固定组件",
                "只用于本地资源管理"
            ],
            answer: 1,
            rationale: "官方文档：'Thousands of providers in the Terraform Registry support AWS, Azure, GCP, Kubernetes, GitHub'——Provider 是与各平台 API 交互的插件。"
        },
        {
            id: "w8-1-q10",
            question: "terraform import 命令的作用是什么？",
            options: [
                "导入配置文件",
                "导入 Provider 插件",
                "将已存在的资源导入 State，纳入 Terraform 管理",
                "导入模块定义"
            ],
            answer: 2,
            rationale: "官方文档：terraform import 将非 Terraform 创建的现有资源导入 State，使 Terraform 可以管理这些资源的后续生命周期。"
        },
        {
            id: "w8-1-q11",
            question: "官方文档对版本兼容性的说明是什么？",
            options: [
                "每个版本都不兼容",
                "'Terraform configuration written for one version should continue to work with any later minor version'",
                "只支持最新版本",
                "需要手动迁移配置"
            ],
            answer: 1,
            rationale: "官方文档：'Terraform configuration written for one version should continue to work with any later minor version update'——保持向后兼容。"
        },
        {
            id: "w8-1-q12",
            question: "terraform destroy 命令的作用是什么？",
            options: [
                "删除配置文件",
                "重置 Provider",
                "清理本地缓存",
                "'Removes managed infrastructure'——销毁所有托管资源"
            ],
            answer: 3,
            rationale: "官方文档：'Destroy: terraform destroy - Removes managed infrastructure'——销毁 State 中跟踪的所有资源，是清理环境的关键命令。"
        }
    ]
}
