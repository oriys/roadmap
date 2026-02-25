import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "w6-1": {
        lessonId: "w6-1",
        background: [
            "【SAM 概述】AWS SAM（Serverless Application Model）是 CloudFormation 的扩展，使用简化语法定义 Serverless 资源（Lambda、API Gateway、DynamoDB 等）。",
            "【SAM 模板】template.yaml 是 SAM 项目的核心，使用 AWS::Serverless::Function、AWS::Serverless::Api 等简化资源类型，比原生 CloudFormation 简洁 60%+。",
            "【SAM CLI】命令行工具提供完整开发生命周期：sam init（初始化）、sam build（构建）、sam local（本地测试）、sam deploy（部署）、sam logs（日志查看）。",
            "【模板转换】SAM 模板在部署时自动转换为标准 CloudFormation 模板。SAM 是 CloudFormation 的语法糖，兼容所有 CloudFormation 资源。",
            "【快速开始】`sam init` 提供多种模板：Hello World、API Backend、Step Functions 等，支持多种运行时，快速搭建项目脚手架。"
        ],
        keyDifficulties: [
            "【SAM vs CloudFormation】SAM 简化了 Serverless 资源定义，但复杂场景仍需混合使用原生 CloudFormation 资源。理解两者的关系是关键。",
            "【Globals 配置】SAM 模板的 Globals 段可设置所有函数的默认配置（运行时、内存、超时），避免重复。函数级配置覆盖 Globals。",
            "【事件源简化】SAM 使用 Events 属性简化事件源配置：Api、S3、SQS、Schedule 等，自动创建必要的权限和集成。",
            "【SAM Policy Templates】SAM 提供预定义策略模板（如 DynamoDBCrudPolicy、S3ReadPolicy），简化 IAM 权限配置。"
        ],
        handsOnPath: [
            "运行 `sam init` 创建一个 Hello World 项目，查看生成的 template.yaml 结构。",
            "阅读 template.yaml 中 AWS::Serverless::Function 的各个属性含义。",
            "运行 `sam build` 构建项目，观察 .aws-sam 目录的构建产物。",
            "运行 `sam deploy --guided` 首次部署到 AWS，记录部署过程和输出。"
        ],
        selfCheck: [
            "SAM 模板与标准 CloudFormation 模板的关系是什么？",
            "SAM CLI 的核心命令有哪些？各自的作用是什么？",
            "SAM 的 Globals 段有什么用途？",
            "SAM Policy Templates 解决了什么问题？"
        ],
        extensions: [
            "研究 SAM Accelerate（sam sync）实现快速增量部署。",
            "了解 SAM 与 AWS CDK 的对比和选择标准。",
            "探索 SAM Connectors 简化资源间权限配置。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started.html",
            "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html",
            "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html"
        ]
    },
    "w6-2": {
        lessonId: "w6-2",
        background: [
            "【sam local invoke】在本地 Docker 容器中模拟 Lambda 执行环境，运行单个函数。支持传入自定义事件 JSON 和环境变量。",
            "【sam local start-api】启动本地 HTTP 服务器模拟 API Gateway，支持热重载。修改代码后自动使用最新版本，加速开发调试。",
            "【sam local generate-event】生成各种事件源的样本事件 JSON（S3、SQS、API Gateway 等），用于本地测试。",
            "【Docker 依赖】sam local 依赖 Docker 模拟 Lambda 执行环境，需要预先安装 Docker。使用官方 Lambda 运行时镜像确保与生产环境一致。",
            "【调试支持】sam local invoke --debug-port 启用远程调试，配合 IDE 的调试器设置断点，逐步调试 Lambda 函数代码。"
        ],
        keyDifficulties: [
            "【环境差异】本地模拟与实际 Lambda 环境存在差异：IAM 权限使用本地 AWS 凭证、网络环境不同、某些 Lambda 特性（Layers、Extensions）模拟不完全。",
            "【冷启动模拟】sam local invoke 每次调用都创建新容器（模拟冷启动），使用 --warm-containers 参数可复用容器模拟热启动。",
            "【构建依赖】sam build 构建后 sam local 才使用最新代码。修改代码后需重新 build（或使用 --beta-features 的热重载）。",
            "【环境变量传递】本地测试时通过 --env-vars env.json 文件传递环境变量，避免在代码中硬编码配置。"
        ],
        handsOnPath: [
            "运行 `sam local invoke HelloWorldFunction` 本地执行 Lambda 函数。",
            "使用 `sam local generate-event apigateway aws-proxy` 生成 API Gateway 事件，传给函数测试。",
            "运行 `sam local start-api` 启动本地 API 服务器，用浏览器或 curl 访问。",
            "配置 VS Code 调试器连接 sam local invoke --debug-port 5858 进行断点调试。"
        ],
        selfCheck: [
            "sam local invoke 和 sam local start-api 的区别是什么？",
            "本地模拟与实际 Lambda 环境有哪些差异需要注意？",
            "如何在本地测试时传递环境变量？",
            "sam local 依赖什么基础设施？为什么？"
        ],
        extensions: [
            "研究 sam local start-lambda 提供 Lambda Invoke API 接口。",
            "了解 sam remote invoke 直接调用云端 Lambda 函数。",
            "探索 TestContainers 等工具在集成测试中模拟 AWS 服务。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-invoke.html",
            "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-start-api.html",
            "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html"
        ]
    },
    "w6-3": {
        lessonId: "w6-3",
        background: [
            "【Serverless Framework】开源的跨云 Serverless 开发框架，通过 serverless.yml 声明式定义函数、事件和资源。支持 AWS、Azure、GCP 等多云平台。",
            "【serverless.yml】核心配置文件定义：service（服务名）、provider（云平台和运行时）、functions（函数定义和事件源）、resources（CloudFormation 资源）。",
            "【部署流程】`serverless deploy` 将代码打包上传到 S3，生成 CloudFormation 模板并执行堆栈更新。支持 --stage 参数区分部署环境。",
            "【CLI 命令】核心命令：deploy（部署）、invoke（调用函数）、logs（查看日志）、remove（删除服务）、info（查看服务信息）。",
            "【社区生态】拥有丰富的插件生态（1000+插件）和活跃社区，第三方插件可扩展框架功能。"
        ],
        keyDifficulties: [
            "【SAM vs Serverless Framework】SAM 是 AWS 官方工具，与 CloudFormation 深度集成；Serverless Framework 跨云支持更好，插件生态更丰富。选择取决于团队需求。",
            "【变量语法】Serverless Framework 支持多种变量引用：${self:provider.stage}（自引用）、${env:VAR}（环境变量）、${ssm:path}（Parameter Store）。",
            "【函数打包】默认将整个服务目录打包为单个 ZIP。可配置 individually: true 为每个函数独立打包，减少部署包大小。",
            "【资源限制】serverless.yml 中 resources 段使用原生 CloudFormation 语法，受 CloudFormation 资源数限制（500 个/堆栈）。"
        ],
        handsOnPath: [
            "安装 Serverless Framework：`npm install -g serverless`。",
            "运行 `serverless create --template aws-nodejs` 创建项目模板。",
            "编辑 serverless.yml 配置函数、事件和环境变量。",
            "运行 `serverless deploy --stage dev` 部署到 AWS。"
        ],
        selfCheck: [
            "Serverless Framework 的 serverless.yml 核心配置段有哪些？",
            "Serverless Framework 与 AWS SAM 的主要差异是什么？",
            "如何使用变量引用实现配置的动态化？",
            "为什么推荐为每个函数独立打包？"
        ],
        extensions: [
            "研究 Serverless Framework V4 的新特性和架构变化。",
            "了解 Serverless Compose 管理多服务 Serverless 应用。",
            "探索 SST（Serverless Stack）框架的开发体验。"
        ],
        sourceUrls: [
            "https://www.serverless.com/framework/docs",
            "https://www.serverless.com/framework/docs/tutorial",
            "https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml"
        ]
    },
    "w6-4": {
        lessonId: "w6-4",
        background: [
            "【Serverless Offline】模拟 API Gateway 和 Lambda 的本地开发插件，支持热重载。运行 `serverless offline` 启动本地 HTTP 服务器。",
            "【打包优化】serverless-bundle / serverless-esbuild 插件使用 esbuild/webpack 打包，Tree Shaking 移除未使用代码，显著减小部署包体积。",
            "【监控插件】serverless-plugin-datadog / serverless-newrelic-lambda-layers 集成第三方 APM 工具，增强 Serverless 可观测性。",
            "【常用插件】serverless-dotenv-plugin（.env 文件支持）、serverless-prune-plugin（清理旧版本）、serverless-iam-roles-per-function（函数级 IAM 角色）。",
            "【插件机制】Serverless Framework 的插件通过生命周期钩子（hooks）扩展框架功能，可以在部署前后执行自定义逻辑。"
        ],
        keyDifficulties: [
            "【Offline 局限】serverless-offline 只模拟 API Gateway + Lambda，不模拟 DynamoDB、S3 等服务。需要配合 serverless-dynamodb-local 等插件或连接真实 AWS 服务。",
            "【打包冲突】多个打包插件可能冲突。推荐选择一个方案（如 esbuild）并在项目中统一使用。",
            "【插件版本兼容】插件版本需与 Serverless Framework 版本兼容。升级框架时需检查插件兼容性。",
            "【调试体验】serverless-offline 支持 --debugPort 参数启用调试，但部分 AWS 服务模拟不完整，复杂场景仍需云端测试。"
        ],
        handsOnPath: [
            "安装 serverless-offline：`npm install serverless-offline --save-dev`，配置到 serverless.yml 的 plugins 段。",
            "运行 `serverless offline` 启动本地开发服务器，用 curl 测试 API 端点。",
            "安装 serverless-esbuild 插件，对比打包前后的部署包大小。",
            "配置 serverless-iam-roles-per-function 为每个函数创建独立的 IAM 角色。"
        ],
        selfCheck: [
            "serverless-offline 能模拟哪些 AWS 服务？不能模拟哪些？",
            "为什么需要使用 esbuild/webpack 打包 Serverless 函数？",
            "serverless-iam-roles-per-function 解决了什么安全问题？",
            "如何选择和管理 Serverless Framework 插件？"
        ],
        extensions: [
            "研究 LocalStack 在本地完整模拟 AWS 服务的方案。",
            "了解 serverless-step-functions 插件定义 Step Functions 状态机。",
            "探索自定义 Serverless Framework 插件的开发方式。"
        ],
        sourceUrls: [
            "https://www.serverless.com/plugins/serverless-offline",
            "https://www.serverless.com/plugins",
            "https://www.serverless.com/framework/docs/getting-started"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "w6-1": [
        {
            id: "sl-w6-1-q1",
            question: "AWS SAM 与 CloudFormation 的关系是什么？",
            options: [
                "SAM 是完全独立于 CloudFormation 的工具",
                "SAM 是 CloudFormation 的扩展，模板在部署时转换为标准 CloudFormation",
                "CloudFormation 是 SAM 的子集",
                "两者互不兼容"
            ],
            answer: 1,
            rationale: "SAM 是 CloudFormation 的语法糖/扩展。SAM 模板在部署时自动转换为标准 CloudFormation 模板执行，兼容所有 CloudFormation 资源类型。"
        },
        {
            id: "sl-w6-1-q2",
            question: "SAM CLI 的 `sam deploy --guided` 命令有什么特殊功能？",
            options: [
                "跳过部署确认",
                "交互式引导配置部署参数并保存到 samconfig.toml",
                "只验证模板不部署",
                "删除现有堆栈后重新部署"
            ],
            answer: 1,
            rationale: "`sam deploy --guided` 提供交互式引导，让用户配置堆栈名称、区域、确认变更集等参数，并将配置保存到 samconfig.toml 供后续部署使用。"
        },
        {
            id: "sl-w6-1-q3",
            question: "SAM 模板中 Globals 段的作用是什么？",
            options: [
                "定义全局变量",
                "设置所有函数的默认配置（如运行时、内存、超时）",
                "配置 AWS 账户信息",
                "定义环境变量加密密钥"
            ],
            answer: 1,
            rationale: "Globals 段为所有 Serverless 资源设置默认值，如 Runtime、MemorySize、Timeout。函数级配置可以覆盖 Globals 的默认值，避免重复定义。"
        }
    ],
    "w6-2": [
        {
            id: "sl-w6-2-q1",
            question: "sam local invoke 依赖什么基础设施来模拟 Lambda 环境？",
            options: [
                "虚拟机",
                "Docker 容器",
                "Kubernetes 集群",
                "AWS 云端沙箱"
            ],
            answer: 1,
            rationale: "sam local 使用 Docker 容器运行官方 Lambda 运行时镜像，确保本地测试环境与 AWS Lambda 执行环境一致。需要预先安装 Docker。"
        },
        {
            id: "sl-w6-2-q2",
            question: "本地 SAM 测试与实际 Lambda 环境的主要差异是什么？",
            options: [
                "没有差异，完全一致",
                "IAM 权限使用本地凭证，网络环境不同，某些特性模拟不完全",
                "只有运行时版本不同",
                "本地执行速度更慢"
            ],
            answer: 1,
            rationale: "本地模拟与云端的差异：IAM 使用本地 AWS 凭证而非执行角色、网络访问路径不同、Lambda Layers 和 Extensions 可能模拟不完全。"
        },
        {
            id: "sl-w6-2-q3",
            question: "如何在本地测试时为 Lambda 函数传递环境变量？",
            options: [
                "直接修改系统环境变量",
                "使用 --env-vars env.json 参数指定环境变量文件",
                "在代码中硬编码",
                "不支持本地环境变量"
            ],
            answer: 1,
            rationale: "通过 `sam local invoke --env-vars env.json` 传递环境变量配置文件，避免在代码中硬编码。env.json 按函数名组织环境变量。"
        }
    ],
    "w6-3": [
        {
            id: "sl-w6-3-q1",
            question: "Serverless Framework 相比 AWS SAM 的主要优势是什么？",
            options: [
                "与 CloudFormation 集成更深",
                "跨云平台支持和丰富的插件生态",
                "部署速度更快",
                "免费额度更大"
            ],
            answer: 1,
            rationale: "Serverless Framework 支持 AWS、Azure、GCP 等多云平台部署，拥有 1000+ 社区插件。SAM 仅支持 AWS 但与 CloudFormation 集成更深。"
        },
        {
            id: "sl-w6-3-q2",
            question: "Serverless Framework 中 `${ssm:path}` 变量语法的作用是什么？",
            options: [
                "引用本地文件",
                "从 AWS Systems Manager Parameter Store 获取配置值",
                "引用环境变量",
                "引用 Git 标签"
            ],
            answer: 1,
            rationale: "`${ssm:path}` 语法在部署时从 AWS Systems Manager Parameter Store 获取配置值，适合管理跨环境的配置和敏感信息。"
        },
        {
            id: "sl-w6-3-q3",
            question: "为什么推荐为 Serverless Framework 的每个函数独立打包？",
            options: [
                "独立打包更简单",
                "减小每个函数的部署包大小，加快部署和冷启动",
                "AWS 要求独立打包",
                "独立打包更便宜"
            ],
            answer: 1,
            rationale: "默认将整个服务打包为一个 ZIP，每个函数都包含其他函数的代码。独立打包（individually: true）减小部署包，加快上传和冷启动。"
        }
    ],
    "w6-4": [
        {
            id: "sl-w6-4-q1",
            question: "serverless-offline 插件能模拟哪些 AWS 服务？",
            options: [
                "所有 AWS 服务",
                "主要模拟 API Gateway 和 Lambda",
                "DynamoDB 和 S3",
                "Step Functions 和 EventBridge"
            ],
            answer: 1,
            rationale: "serverless-offline 主要模拟 API Gateway + Lambda 的本地执行。DynamoDB、S3 等服务需要额外插件（如 serverless-dynamodb-local）或连接真实 AWS。"
        },
        {
            id: "sl-w6-4-q2",
            question: "serverless-esbuild 插件的核心作用是什么？",
            options: [
                "运行单元测试",
                "使用 esbuild 打包并 Tree Shaking 移除未使用代码，减小部署包",
                "格式化代码",
                "生成 API 文档"
            ],
            answer: 1,
            rationale: "serverless-esbuild 使用 esbuild 高速打包 TypeScript/JavaScript 代码，通过 Tree Shaking 移除未使用代码，显著减小部署包体积。"
        },
        {
            id: "sl-w6-4-q3",
            question: "serverless-iam-roles-per-function 解决了什么问题？",
            options: [
                "自动创建 Lambda 函数",
                "为每个函数创建独立的 IAM 角色，实现最小权限原则",
                "管理用户登录权限",
                "加速函数部署"
            ],
            answer: 1,
            rationale: "默认 Serverless Framework 为所有函数共享一个 IAM 角色。该插件为每个函数创建独立角色，遵循最小权限原则，提高安全性。"
        }
    ]
}
