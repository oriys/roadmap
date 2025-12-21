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
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
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
