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
            "【EKS 核心架构】HashiCorp 教程：Terraform 配置'定义了一个新的 VPC，在其中部署集群，并使用公共 EKS 模块创建所需资源，包括自动扩展组、安全组以及 IAM 角色和策略'——完整的 EKS 部署包含网络、计算、权限三大模块。",
            "【GKE 高可用设计】HashiCorp 教程：GKE 配置'采用 2 节点规模配置，跨三个区域部署实现高可用'——实际部署会产生 6 个节点（每个区域 2 个），支持'单独管理的节点池'功能允许根据资源需求定制 Pod 配置。",
            "【EKS 节点组配置】官方文档：aws_eks_node_group 必需参数包括 cluster_name、node_role_arn、scaling_config（min_size/max_size/desired_size）、subnet_ids。子网必须有'kubernetes.io/cluster/CLUSTER_NAME'标签。",
            "【GKE 节点池管理】官方文档：google_container_node_pool 支持 name（自动生成或指定前缀）、node_count（实例数）、management（auto-repair/auto-upgrade）、upgrade_settings（最多 20 节点同时升级）等配置。",
            "【成本警示】HashiCorp 教程强调：'AWS EKS 集群成本为每小时 $0.10'，'Google Cloud 对每个 GKE 集群收取约每小时 10 美分的管理费'——使用后务必运行 terraform destroy 清理资源避免持续计费。"
        ],
        keyDifficulties: [
            "【EKS AMI 类型】官方文档：'Starting on Kubernetes 1.30, AL2023 is the default AMI type'——支持 AL2_x86_64、AL2_ARM_64、BOTTLEROCKET、WINDOWS 等多种类型。capacity_type 支持 ON_DEMAND 或 SPOT，默认磁盘 Windows 50GiB、其他 20GiB。",
            "【GKE 版本管理陷阱】官方文档警告：'If version and auto_upgrade are both specified, they will fight each other'——强烈不建议同时设置明确版本和自动升级，建议使用明确版本避免 Terraform 检测到伪差异（spurious diffs）。",
            "【EKS IAM 依赖顺序】官方文档：'Ensure that IAM Role permissions are created before and deleted after EKS Node Group handling using depends_on'——否则 EKS 无法正确删除 EC2 实例和弹性网络接口，导致资源残留。",
            "【GKE 节点池与 Autoscaling 冲突】官方文档：node_count'should not be used alongside autoscaling'——如果启用自动伸缩，应使用 initial_node_count 设置初始值，而非 node_count，否则 Terraform 会与 autoscaler 冲突。",
            "【EKS Autoscaling 集成】官方文档建议：使用 lifecycle { ignore_changes } 忽略外部自动伸缩器（如 Cluster Autoscaler）对节点数量的修改，避免 Terraform apply 时回滚自动伸缩的变更。"
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
            "【无代理架构】官方文档：Ansible 是'agentless automation tool'——不需要在被管理节点安装任何软件。通过 SSH（Linux）或 WinRM（Windows）连接目标主机，'eliminates the need for deploying and managing agent software on every target system'。",
            "【Playbook 定义】官方文档：Playbook 是'repeatable, reusable, simple configuration management and multimachine deployment system'——可重复、可复用的配置管理系统，使用 YAML 格式编写。",
            "【模块执行机制】官方文档：Ansible 将'scripts called Ansible modules'推送到节点执行，'accept parameters describing desired state and execute via SSH by default'——接受描述期望状态的参数，执行后自动清理。",
            "【Inventory 清单】官方文档：Inventory 是'a list or group of lists that defines the managed nodes you automate'——定义自动化目标的主机列表，支持 INI 和 YAML 格式，可以是静态文件或动态生成。",
            "【幂等性原则】官方文档：'Most Ansible modules check whether desired state exists before acting...modules are idempotent'——大多数模块先检查期望状态是否已存在，重复执行 Playbook 产生相同结果。"
        ],
        keyDifficulties: [
            "【Handler 触发机制】官方文档：Handler 是'tasks that only run when notified'——仅在被通知时执行。使用 notify 关键字触发，'Notifying the same handler multiple times will result in executing the handler only once'——多次通知只执行一次。",
            "【Handler 执行顺序】官方文档：Handler'run after all tasks in a play complete'并'execute in the order defined in the handlers section, not the order listed in notify'——按定义顺序执行，非通知顺序。可用 meta: flush_handlers 强制提前执行。",
            "【变量优先级层次】官方文档：变量按层次覆盖'all group → parent groups → child groups → individual hosts'——从通用到具体逐级覆盖。group_vars 和 host_vars 目录比 inventory 内联变量更易维护。",
            "【任务失败处理】官方文档：'If a task fails on a host, that system is removed from remaining playbook execution'——任务失败的主机会被排除出后续执行。可用 ignore_errors、block/rescue 控制错误处理行为。",
            "【Windows 连接选项】官方文档：Windows 历史上使用 WinRM，'newer Windows versions come with a built-in OpenSSH Server'——新版 Windows 10/Server 2019+ 支持 SSH 连接。WinRM 认证推荐域环境用 Kerberos，本地账户用 HTTPS+Basic/NTLM。"
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
            question: "官方文档对 Ansible 无代理架构的描述是什么？",
            options: [
                "'agentless automation tool'——不需要在被管理节点安装任何软件",
                "需要在每个节点安装轻量级 Agent",
                "只支持 Linux 系统",
                "必须使用专用网络协议"
            ],
            answer: 0,
            rationale: "官方文档：Ansible 是'agentless automation tool'，通过 SSH/WinRM 连接目标主机，'eliminates the need for deploying and managing agent software'。"
        },
        {
            id: "w8-3-q2",
            question: "官方文档对 Playbook 的定义是什么？",
            options: [
                "一种容器编排格式",
                "Ansible 的配置文件格式",
                "'repeatable, reusable, simple configuration management and multimachine deployment system'",
                "只用于网络设备配置"
            ],
            answer: 2,
            rationale: "官方文档定义 Playbook 为'repeatable, reusable, simple configuration management and multimachine deployment system'——可重复、可复用的配置管理系统。"
        },
        {
            id: "w8-3-q3",
            question: "Ansible 模块执行后会发生什么？",
            options: [
                "模块永久保留在目标节点",
                "模块需要手动清理",
                "模块执行后自动从目标节点清理",
                "模块存储在中央数据库"
            ],
            answer: 2,
            rationale: "官方文档：Ansible 将模块推送到节点执行，'execute via SSH by default'——执行后自动清理，不留驻任何软件。"
        },
        {
            id: "w8-3-q4",
            question: "官方文档对 Handler 的定义是什么？",
            options: [
                "每次运行都执行的任务",
                "'tasks that only run when notified'——仅在被通知时执行",
                "用于错误处理的任务",
                "只能在 Role 中使用的任务"
            ],
            answer: 1,
            rationale: "官方文档：Handler 是'tasks that only run when notified'——使用 notify 关键字触发，常用于配置变更后重启服务。"
        },
        {
            id: "w8-3-q5",
            question: "多次 notify 同一个 Handler 会发生什么？",
            options: [
                "Handler 执行多次",
                "报错，不允许多次通知",
                "只执行第一次通知",
                "'result in executing the handler only once'——只执行一次"
            ],
            answer: 3,
            rationale: "官方文档：'Notifying the same handler multiple times will result in executing the handler only once regardless of how many tasks notify it'。"
        },
        {
            id: "w8-3-q6",
            question: "Handler 的执行顺序取决于什么？",
            options: [
                "notify 语句中列出的顺序",
                "handlers 部分中定义的顺序",
                "任务失败的顺序",
                "随机顺序"
            ],
            answer: 1,
            rationale: "官方文档：Handler'execute in the order defined in the handlers section, not the order listed in notify statements'——按定义顺序执行。"
        },
        {
            id: "w8-3-q7",
            question: "官方文档描述的变量优先级层次是什么？",
            options: [
                "host → group → all",
                "all group → parent groups → child groups → individual hosts",
                "环境变量 → 命令行 → 文件",
                "没有优先级，随机覆盖"
            ],
            answer: 1,
            rationale: "官方文档：变量按层次覆盖'all group → parent groups → child groups → individual hosts'——从通用到具体逐级覆盖。"
        },
        {
            id: "w8-3-q8",
            question: "官方文档对任务失败后的行为描述是什么？",
            options: [
                "继续执行所有剩余任务",
                "整个 Playbook 立即终止",
                "'that system is removed from remaining playbook execution'——该主机被排除出后续执行",
                "自动重试三次"
            ],
            answer: 2,
            rationale: "官方文档：'If a task fails on a host, that system is removed from remaining playbook execution'——失败的主机被排除。"
        },
        {
            id: "w8-3-q9",
            question: "新版 Windows 10/Server 2019+ 支持什么连接方式？",
            options: [
                "只支持 WinRM",
                "只支持 PowerShell Remoting",
                "'built-in OpenSSH Server'——内置 SSH 服务器",
                "只支持 RDP"
            ],
            answer: 2,
            rationale: "官方文档：'newer Windows versions come with a built-in OpenSSH Server'——新版 Windows 支持 SSH 连接。"
        },
        {
            id: "w8-3-q10",
            question: "官方文档对幂等性的描述是什么？",
            options: [
                "每次执行结果都不同",
                "只能执行一次",
                "'modules check whether desired state exists before acting...are idempotent'——先检查状态，重复执行产生相同结果",
                "需要手动确保幂等性"
            ],
            answer: 2,
            rationale: "官方文档：'Most Ansible modules check whether desired state exists before acting...modules are idempotent'——模块设计遵循幂等性原则。"
        },
        {
            id: "w8-3-q11",
            question: "如何强制 Handler 在 Play 中间执行？",
            options: [
                "使用 force_handlers: true",
                "使用 meta: flush_handlers",
                "在 Handler 中设置 immediate: true",
                "Handler 只能在 Play 结束时执行"
            ],
            answer: 1,
            rationale: "官方文档：可用'meta: flush_handlers'强制 Handler 在 Play 中间执行，而不是等到所有任务完成。"
        },
        {
            id: "w8-3-q12",
            question: "Inventory 文件的默认分组有哪些？",
            options: [
                "default 和 custom",
                "all 和 ungrouped",
                "hosts 和 groups",
                "没有默认分组"
            ],
            answer: 1,
            rationale: "官方文档：每个 Inventory 自动包含 'all'（所有主机）和 'ungrouped'（没有显式分组的主机）两个默认组。"
        }
    ],
    "w8-2": [
        {
            id: "w8-2-q1",
            question: "HashiCorp EKS 教程描述的 Terraform 配置创建了哪些资源？",
            options: [
                "VPC、自动扩展组、安全组以及 IAM 角色和策略",
                "只创建 EKS 控制平面",
                "只创建 EC2 实例",
                "只创建网络资源"
            ],
            answer: 0,
            rationale: "HashiCorp 教程：配置'定义了一个新的 VPC，在其中部署集群，并使用公共 EKS 模块创建所需资源，包括自动扩展组、安全组以及 IAM 角色和策略'。"
        },
        {
            id: "w8-2-q2",
            question: "HashiCorp GKE 教程中，2 节点规模配置跨 3 个区域部署后实际产生多少节点？",
            options: [
                "2 个节点",
                "3 个节点",
                "6 个节点（每个区域 2 个）",
                "9 个节点"
            ],
            answer: 2,
            rationale: "HashiCorp 教程：'采用 2 节点规模配置，跨三个区域部署实现高可用'——实际部署会产生 6 个节点（每个区域 2 个）。"
        },
        {
            id: "w8-2-q3",
            question: "AWS EKS 集群的管理费用是多少？",
            options: [
                "免费",
                "每小时 $1.00",
                "每月固定 $100",
                "每小时 $0.10（约 $73/月）"
            ],
            answer: 3,
            rationale: "HashiCorp 教程强调：'AWS EKS 集群成本为每小时 $0.10'，这还不包括节点 EC2 实例费用。"
        },
        {
            id: "w8-2-q4",
            question: "从 Kubernetes 1.30 开始，EKS 托管节点组的默认 AMI 类型是什么？",
            options: [
                "AL2023 是默认 AMI 类型",
                "Amazon Linux 2 (AL2)",
                "Ubuntu 22.04",
                "Bottlerocket"
            ],
            answer: 0,
            rationale: "官方文档：'Starting on Kubernetes 1.30, AL2023 is the default AMI type for EKS managed node groups'。"
        },
        {
            id: "w8-2-q5",
            question: "aws_eks_node_group 资源的子网必须具有什么标签？",
            options: [
                "不需要任何标签",
                "aws:eks:cluster-name",
                "kubernetes.io/cluster/CLUSTER_NAME",
                "eks.amazonaws.com/nodegroup"
            ],
            answer: 2,
            rationale: "官方文档：子网必须有'kubernetes.io/cluster/CLUSTER_NAME'标签，这影响 AWS 负载均衡器自动发现。"
        },
        {
            id: "w8-2-q6",
            question: "GKE 节点池中 version 和 auto_upgrade 同时设置会发生什么？",
            options: [
                "version 优先生效",
                "auto_upgrade 优先生效",
                "两者会互相冲突（fight each other），强烈不建议同时设置",
                "两者独立工作，互不影响"
            ],
            answer: 2,
            rationale: "官方文档警告：'If version and auto_upgrade are both specified, they will fight each other'——强烈不建议同时设置。"
        },
        {
            id: "w8-2-q7",
            question: "为什么 EKS Node Group 需要使用 depends_on 声明 IAM 角色依赖？",
            options: [
                "提高部署速度",
                "确保 IAM 角色在节点组之前创建、之后删除，否则无法正确清理资源",
                "减少 API 调用次数",
                "满足 AWS 安全要求"
            ],
            answer: 1,
            rationale: "官方文档：'Ensure that IAM Role permissions are created before and deleted after EKS Node Group handling using depends_on'——否则 EKS 无法正确删除 EC2 实例和弹性网络接口。"
        },
        {
            id: "w8-2-q8",
            question: "GKE 节点池启用自动伸缩时，应该使用哪个参数设置初始节点数？",
            options: [
                "node_count",
                "initial_node_count",
                "desired_size",
                "min_node_count"
            ],
            answer: 1,
            rationale: "官方文档：node_count'should not be used alongside autoscaling'——启用自动伸缩时应使用 initial_node_count 设置初始值。"
        },
        {
            id: "w8-2-q9",
            question: "如何防止 Terraform 与 Cluster Autoscaler 冲突？",
            options: [
                "禁用 Cluster Autoscaler",
                "不使用 Terraform 管理节点组",
                "使用 lifecycle { ignore_changes } 忽略节点数量变化",
                "每次 apply 前手动更新 desired_size"
            ],
            answer: 2,
            rationale: "官方文档建议：使用 lifecycle { ignore_changes } 忽略外部自动伸缩器对节点数量的修改，避免 Terraform apply 时回滚变更。"
        },
        {
            id: "w8-2-q10",
            question: "EKS 节点组的 capacity_type 支持哪些值？",
            options: [
                "STANDARD 和 PREMIUM",
                "RESERVED 和 ON_DEMAND",
                "ON_DEMAND 和 SPOT",
                "DEDICATED 和 SHARED"
            ],
            answer: 2,
            rationale: "官方文档：capacity_type'支持 valid values: ON_DEMAND or SPOT'——按需实例或 Spot 实例。"
        },
        {
            id: "w8-2-q11",
            question: "GKE 节点升级设置中，最多可以同时升级多少个节点？",
            options: [
                "5 个",
                "10 个",
                "最多 20 个节点",
                "无限制"
            ],
            answer: 2,
            rationale: "官方文档：upgrade_settings'最大 20 节点同时升级'——确保升级期间集群稳定性。"
        },
        {
            id: "w8-2-q12",
            question: "配置 kubectl 访问 GKE 集群使用什么命令？",
            options: [
                "kubectl config set-cluster",
                "aws eks update-kubeconfig",
                "az aks get-credentials",
                "gcloud container clusters get-credentials"
            ],
            answer: 3,
            rationale: "HashiCorp 教程：使用'gcloud container clusters get-credentials'获取访问凭证配置 kubectl。"
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
