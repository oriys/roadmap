import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const serverlessStages: Stage[] = [
    {
        id: "phase1",
        title: "第一阶段：Serverless 基础与入门",
        duration: "第 1-2 周",
        goal: "理解 Serverless 核心概念，掌握 AWS Lambda 基本开发。",
        weeks: [
            {
                id: "w1",
                title: "第 1 周：Serverless 核心概念",
                summary: "从传统架构到 Serverless，理解 FaaS 与事件驱动的本质。",
                overview:
                    "理解 Serverless 不仅是「无服务器」，而是一种将基础设施管理下沉到云平台的架构范式。掌握 FaaS、BaaS 的边界，以及事件驱动架构的核心思想。",
                keyPoints: [
                    "Serverless 的核心价值：按需计算、自动伸缩、按调用计费、零运维负担。",
                    "FaaS（函数即服务）与 BaaS（后端即服务）的职责划分与组合使用。",
                    "事件驱动架构的异步解耦特性，以及与请求-响应模式的本质区别。",
                ],
                lessons: [
                    {
                        id: "w1-1",
                        title: "Serverless 定义与价值：从服务器到函数",
                        detail: "理解 Serverless 的核心理念：开发者只关注业务代码，基础设施由云平台全托管。",
                        keyPoints: [
                            "核心价值：无需管理服务器，自动伸缩（从 0 到数千并发），按调用次数和执行时间计费。",
                            "适用场景：事件驱动处理、API 后端、定时任务、数据流处理等间歇性或突发性工作负载。",
                            "局限性：冷启动延迟、执行时间限制（15 分钟）、有状态操作需要外部存储支持。",
                        ],
                        resources: [
                            { title: "AWS Serverless 概览", url: "https://aws.amazon.com/serverless/" },
                            { title: "Serverless 计算完整指南", url: "https://www.serverless.com/learn/overview/" },
                            { title: "Google Cloud Serverless", url: "https://cloud.google.com/serverless" },
                        ],
                    },
                    {
                        id: "w1-2",
                        title: "FaaS 与 BaaS：函数计算与托管服务的边界",
                        detail: "区分 FaaS（Lambda/Cloud Functions）与 BaaS（DynamoDB/Auth0）的职责，理解如何组合使用。",
                        resources: [
                            { title: "What is AWS Lambda?", url: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" },
                            { title: "Azure Functions 概览", url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview" },
                            { title: "Cloud Run functions", url: "https://cloud.google.com/functions" },
                        ],
                    },
                    {
                        id: "w1-3",
                        title: "事件驱动架构：异步解耦与事件流",
                        detail: "掌握事件驱动架构的核心思想：事件源、事件总线、消费者的解耦模式。",
                        keyPoints: [
                            "事件源多样性：S3 文件上传、DynamoDB 数据变更、API Gateway 请求、定时调度等都可触发 Lambda。",
                            "异步解耦：事件生产者和消费者互不感知，通过事件总线（EventBridge）路由和过滤事件。",
                            "最终一致性：事件驱动天然异步，系统状态通过事件传播达到最终一致，需接受短暂的不一致窗口。",
                        ],
                        resources: [
                            { title: "AWS 事件驱动架构", url: "https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/event-driven-architectures.html" },
                            { title: "Serverless Land - 事件驱动架构", url: "https://serverlessland.com/event-driven-architecture" },
                            { title: "AWS Lambda 事件驱动入门", url: "https://aws.amazon.com/blogs/compute/operating-lambda-understanding-event-driven-architecture-part-1/" },
                        ],
                    },
                    {
                        id: "w1-4",
                        title: "主流 Serverless 平台对比：AWS/Azure/GCP",
                        detail: "对比 AWS Lambda、Azure Functions、Google Cloud Functions 的特性、生态与适用场景。",
                        resources: [
                            { title: "AWS Lambda", url: "https://aws.amazon.com/lambda/" },
                            { title: "Azure Functions 入门", url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-get-started" },
                            { title: "Google Cloud Functions 文档", url: "https://cloud.google.com/functions/docs" },
                        ],
                    },
                ],
            },
            {
                id: "w2",
                title: "第 2 周：AWS Lambda 深入",
                summary: "掌握 Lambda 执行模型、运行时环境与基本配置。",
                overview:
                    "深入理解 Lambda 的执行环境生命周期、Handler 结构、Context 对象，以及内存/超时/并发等核心配置项。",
                keyPoints: [
                    "Lambda 执行环境生命周期：Init → Invoke → Shutdown，理解冷启动发生的时机。",
                    "Handler 函数签名、Event 对象结构、Context 对象的元数据与剩余时间。",
                    "内存配置与 CPU 的线性关系，超时设置与重试机制的权衡。",
                ],
                lessons: [
                    {
                        id: "w2-1",
                        title: "Lambda 执行环境：生命周期与冷启动",
                        detail: "理解执行环境的 Init/Invoke/Shutdown 阶段，以及冷启动与热启动的触发条件。",
                        resources: [
                            { title: "Lambda 执行环境", url: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html" },
                            { title: "理解冷启动", url: "https://aws.amazon.com/blogs/compute/understanding-and-remediating-cold-starts-an-aws-lambda-perspective/" },
                            { title: "Lambda 运行时", url: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html" },
                        ],
                    },
                    {
                        id: "w2-2",
                        title: "Handler 与 Context：函数入口与执行上下文",
                        detail: "掌握 Lambda Handler 的编写方式，Event 与 Context 对象的结构与用途。",
                        resources: [
                            { title: "创建第一个 Lambda 函数", url: "https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html" },
                            { title: "Lambda Handler（Python）", url: "https://docs.aws.amazon.com/lambda/latest/dg/python-handler.html" },
                            { title: "Lambda Handler（Node.js）", url: "https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html" },
                        ],
                    },
                    {
                        id: "w2-3",
                        title: "配置调优：内存、超时与环境变量",
                        detail: "理解内存与 CPU 的配比关系，合理设置超时时间，使用环境变量管理配置。",
                        resources: [
                            { title: "Lambda 配置选项", url: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html" },
                            { title: "Lambda 环境变量", url: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html" },
                            { title: "Lambda 内存与性能", url: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-memory.html" },
                        ],
                    },
                    {
                        id: "w2-4",
                        title: "Lambda 并发模型：Reserved 与 Provisioned Concurrency",
                        detail: "理解 Lambda 的并发扩展机制，Reserved Concurrency 限流与 Provisioned Concurrency 预热。",
                        resources: [
                            { title: "Lambda 并发", url: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html" },
                            { title: "Provisioned Concurrency", url: "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html" },
                            { title: "Lambda 扩展行为", url: "https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase2",
        title: "第二阶段：集成与数据处理",
        duration: "第 3-5 周",
        goal: "掌握 API Gateway、数据存储集成与工作流编排。",
        weeks: [
            {
                id: "w3",
                title: "第 3 周：API Gateway 与事件触发",
                summary: "构建 HTTP API，理解同步与异步触发模式。",
                overview:
                    "使用 API Gateway 暴露 Lambda 为 HTTP 端点，理解 REST API 与 HTTP API 的差异，掌握常见事件源的触发模式。",
                keyPoints: [
                    "API Gateway REST API vs HTTP API：功能、延迟、成本的权衡选择。",
                    "同步调用（API Gateway）与异步调用（S3/SQS/SNS）的执行语义差异。",
                    "Lambda 权限模型：执行角色（Execution Role）与资源策略（Resource Policy）。",
                ],
                lessons: [
                    {
                        id: "w3-1",
                        title: "API Gateway 入门：REST API vs HTTP API",
                        detail: "理解两种 API 类型的功能差异，选择合适的 API 类型构建 HTTP 端点。",
                        keyPoints: [
                            "REST API：功能丰富，支持请求验证、模型转换、缓存、使用计划和 API Key，适合复杂 API 管理。",
                            "HTTP API：延迟更低、成本降低约 70%，支持 JWT 授权和 CORS，适合简单的 Lambda 代理场景。",
                            "选择标准：需要高级功能（缓存、转换、WAF 集成）选 REST API，追求低成本和低延迟选 HTTP API。",
                        ],
                        resources: [
                            { title: "API Gateway REST API", url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-rest-api.html" },
                            { title: "API Gateway HTTP API", url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html" },
                            { title: "REST API vs HTTP API", url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html" },
                        ],
                    },
                    {
                        id: "w3-2",
                        title: "Lambda 集成：代理与非代理模式",
                        detail: "掌握 Lambda 代理集成与非代理集成的区别，理解请求/响应映射。",
                        resources: [
                            { title: "Lambda 代理集成", url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html" },
                            { title: "创建 REST API 教程", url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-from-example.html" },
                            { title: "API Gateway + Lambda 示例", url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-lambda-integration.html" },
                        ],
                    },
                    {
                        id: "w3-3",
                        title: "事件源触发：S3、SQS、SNS、EventBridge",
                        detail: "配置常见 AWS 服务作为 Lambda 事件源，理解推送与拉取模式。",
                        keyPoints: [
                            "推送模式：S3、SNS、API Gateway 直接调用 Lambda，事件源主动推送，Lambda 被动响应。",
                            "拉取模式：SQS、DynamoDB Streams、Kinesis 由 Lambda 服务轮询拉取，批量处理提高效率。",
                            "事件过滤：配置 Event Source Mapping 过滤器，仅处理符合条件的事件，减少无效调用和成本。",
                        ],
                        resources: [
                            { title: "Lambda 与 S3", url: "https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html" },
                            { title: "Lambda 与 SQS", url: "https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html" },
                            { title: "Lambda 与 EventBridge", url: "https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents.html" },
                        ],
                    },
                    {
                        id: "w3-4",
                        title: "权限模型：执行角色与资源策略",
                        detail: "理解 Lambda 函数的 IAM 执行角色与资源策略的作用范围。",
                        resources: [
                            { title: "Lambda 执行角色", url: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html" },
                            { title: "Lambda 资源策略", url: "https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html" },
                            { title: "Lambda IAM 最佳实践", url: "https://www.serverless.com/blog/abcs-of-iam-permissions" },
                        ],
                    },
                ],
            },
            {
                id: "w4",
                title: "第 4 周：数据存储集成",
                summary: "Lambda 与 DynamoDB、S3 的深度集成。",
                overview:
                    "掌握 Serverless 应用的数据持久化方案，重点学习 DynamoDB 的 Serverless 特性与 Streams 触发器。",
                keyPoints: [
                    "DynamoDB 单表设计思想：分区键/排序键设计、GSI/LSI 的查询模式。",
                    "DynamoDB Streams 与 Lambda 触发器：实现数据变更的实时响应。",
                    "S3 事件通知：对象上传/删除触发 Lambda 处理。",
                ],
                lessons: [
                    {
                        id: "w4-1",
                        title: "DynamoDB 基础：Serverless 数据库的核心概念",
                        detail: "理解 DynamoDB 的分区键、排序键、容量模式与 Serverless 场景的适配。",
                        keyPoints: [
                            "分区键设计：选择高基数字段作为分区键，确保数据均匀分布避免热分区。",
                            "单表设计：利用分区键和排序键的组合，在一张表中存储多种实体类型，减少跨表查询。",
                            "按需容量模式：自动适应流量变化，无需预估读写吞吐量，适合流量不可预测的 Serverless 应用。",
                        ],
                        resources: [
                            { title: "DynamoDB 核心概念", url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html" },
                            { title: "DynamoDB 入门", url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStartedDynamoDB.html" },
                            { title: "DynamoDB 按需容量", url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html" },
                        ],
                    },
                    {
                        id: "w4-2",
                        title: "Lambda 与 DynamoDB：CRUD 操作实战",
                        detail: "使用 Lambda 函数对 DynamoDB 进行读写操作，构建完整的数据访问层。",
                        resources: [
                            { title: "Lambda 与 DynamoDB", url: "https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html" },
                            { title: "CRUD API 教程", url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html" },
                            { title: "DynamoDB SDK 示例", url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.html" },
                        ],
                    },
                    {
                        id: "w4-3",
                        title: "DynamoDB Streams：数据变更的实时触发",
                        detail: "配置 DynamoDB Streams 触发 Lambda，实现数据变更的实时响应与处理。",
                        keyPoints: [
                            "Streams 类型：支持 NEW_IMAGE、OLD_IMAGE、NEW_AND_OLD_IMAGES 和 KEYS_ONLY 四种视图类型。",
                            "实时响应：数据变更后毫秒级触发 Lambda，适合实时索引同步、通知推送、审计日志等场景。",
                            "批量处理：Lambda 一次接收一批 Stream 记录，通过 BatchSize 和 MaximumBatchingWindow 控制批次。",
                        ],
                        resources: [
                            { title: "DynamoDB Streams 与 Lambda", url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html" },
                            { title: "Streams Lambda 教程", url: "https://docs.aws.amazon.com/lambda/latest/dg/with-ddb-example.html" },
                            { title: "Streams 过滤器教程", url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.Tutorial.html" },
                        ],
                    },
                    {
                        id: "w4-4",
                        title: "S3 事件处理：对象存储触发 Lambda",
                        detail: "配置 S3 事件通知触发 Lambda，实现文件上传后的自动处理流程。",
                        resources: [
                            { title: "S3 事件通知", url: "https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html" },
                            { title: "S3 触发器教程", url: "https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html" },
                            { title: "S3 事件类型", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html" },
                        ],
                    },
                ],
            },
            {
                id: "w5",
                title: "第 5 周：工作流编排",
                summary: "使用 Step Functions 编排复杂的 Serverless 工作流。",
                overview:
                    "掌握 AWS Step Functions 状态机的设计与实现，学习如何编排多个 Lambda 函数构建复杂的业务流程。",
                keyPoints: [
                    "Step Functions 状态类型：Task、Choice、Parallel、Wait、Map 的适用场景。",
                    "Standard vs Express 工作流：执行时长、吞吐量、成本的权衡。",
                    "错误处理与重试：Catch/Retry 配置，补偿事务（Saga）模式。",
                ],
                lessons: [
                    {
                        id: "w5-1",
                        title: "Step Functions 入门：状态机与 ASL",
                        detail: "理解 Step Functions 的核心概念，学习 Amazon States Language (ASL) 定义状态机。",
                        keyPoints: [
                            "状态机模型：用 JSON 格式的 ASL 定义状态、转换和错误处理，可视化编排复杂工作流。",
                            "与直接编排对比：相比 Lambda 内部串联调用，Step Functions 提供持久化状态、可视化和内置重试。",
                            "计费模型：Standard 按状态转换次数计费，Express 按请求数和执行时长计费，选择影响成本。",
                        ],
                        resources: [
                            { title: "Step Functions 概览", url: "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html" },
                            { title: "Step Functions 入门", url: "https://aws.amazon.com/step-functions/getting-started/" },
                            { title: "Amazon States Language", url: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html" },
                        ],
                    },
                    {
                        id: "w5-2",
                        title: "状态类型详解：Task、Choice、Parallel、Map",
                        detail: "掌握各种状态类型的使用场景，构建分支、并行、循环等复杂流程。",
                        resources: [
                            { title: "状态类型", url: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-states.html" },
                            { title: "Lambda 编排示例", url: "https://docs.aws.amazon.com/step-functions/latest/dg/sample-lambda-orchestration.html" },
                            { title: "Workflow Studio", url: "https://docs.aws.amazon.com/step-functions/latest/dg/workflow-studio.html" },
                        ],
                    },
                    {
                        id: "w5-3",
                        title: "错误处理：Retry、Catch 与 Saga 模式",
                        detail: "配置状态机的错误处理策略，实现自动重试与补偿回滚。",
                        keyPoints: [
                            "Retry 配置：指定可重试的错误类型、最大重试次数、退避间隔和退避倍率，自动处理临时故障。",
                            "Catch 降级：重试耗尽后转移到 Catch 指定的降级状态，执行补偿逻辑或记录错误。",
                            "Saga 模式：利用 Catch + 补偿 Lambda 实现分布式事务回滚，每一步失败都触发前序步骤的撤销。",
                        ],
                        resources: [
                            { title: "错误处理", url: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html" },
                            { title: "Saga 模式示例", url: "https://docs.aws.amazon.com/step-functions/latest/dg/sample-saga-pattern.html" },
                            { title: "Step Functions 最佳实践", url: "https://docs.aws.amazon.com/step-functions/latest/dg/sfn-best-practices.html" },
                        ],
                    },
                    {
                        id: "w5-4",
                        title: "Standard vs Express：工作流类型选择",
                        detail: "理解两种工作流类型的差异，根据业务需求选择合适的类型。",
                        resources: [
                            { title: "工作流类型对比", url: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html" },
                            { title: "Express 工作流", url: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-express-synchronous.html" },
                            { title: "Step Functions 定价", url: "https://aws.amazon.com/step-functions/pricing/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase3",
        title: "第三阶段：开发框架与 CI/CD",
        duration: "第 6-7 周",
        goal: "掌握 Serverless 开发框架，构建自动化部署流水线。",
        weeks: [
            {
                id: "w6",
                title: "第 6 周：开发框架与工具",
                summary: "使用 SAM 和 Serverless Framework 提升开发效率。",
                overview:
                    "掌握 AWS SAM 和 Serverless Framework 两大主流框架，实现本地开发、测试与部署的自动化。",
                keyPoints: [
                    "AWS SAM：CloudFormation 超集，简化 Serverless 资源定义与本地测试。",
                    "Serverless Framework：跨云平台支持，丰富的插件生态与社区。",
                    "本地开发与调试：sam local、serverless offline 的使用与限制。",
                ],
                lessons: [
                    {
                        id: "w6-1",
                        title: "AWS SAM 入门：模板与 CLI",
                        detail: "学习 SAM 模板语法，使用 SAM CLI 进行构建、测试与部署。",
                        resources: [
                            { title: "SAM 入门", url: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started.html" },
                            { title: "SAM 是什么", url: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html" },
                            { title: "SAM Hello World", url: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html" },
                        ],
                    },
                    {
                        id: "w6-2",
                        title: "SAM 本地开发：sam local invoke 与 start-api",
                        detail: "使用 SAM CLI 在本地模拟 Lambda 执行环境，加速开发调试周期。",
                        resources: [
                            { title: "SAM 本地测试", url: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-invoke.html" },
                            { title: "SAM 本地 API", url: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-start-api.html" },
                            { title: "SAM 模板参考", url: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html" },
                        ],
                    },
                    {
                        id: "w6-3",
                        title: "Serverless Framework 入门：跨云部署",
                        detail: "学习 Serverless Framework 的 serverless.yml 配置与多云支持。",
                        resources: [
                            { title: "Serverless Framework 文档", url: "https://www.serverless.com/framework/docs" },
                            { title: "Serverless Framework 教程", url: "https://www.serverless.com/framework/docs/tutorial" },
                            { title: "serverless.yml 参考", url: "https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml" },
                        ],
                    },
                    {
                        id: "w6-4",
                        title: "Serverless 插件生态：Offline、Bundle、Monitor",
                        detail: "使用常用插件扩展 Serverless Framework 功能，提升开发体验。",
                        resources: [
                            { title: "Serverless Offline", url: "https://www.serverless.com/plugins/serverless-offline" },
                            { title: "Serverless 插件列表", url: "https://www.serverless.com/plugins" },
                            { title: "Serverless 入门设置", url: "https://www.serverless.com/framework/docs/getting-started" },
                        ],
                    },
                ],
            },
            {
                id: "w7",
                title: "第 7 周：CI/CD 与 GitOps",
                summary: "构建 Serverless 应用的自动化部署流水线。",
                overview:
                    "使用 GitHub Actions、AWS CodePipeline 等工具构建 Serverless 应用的 CI/CD 流水线，实现代码提交到生产部署的全自动化。",
                keyPoints: [
                    "Serverless CI/CD 特点：快速部署、函数级回滚、环境隔离策略。",
                    "多环境管理：使用 Stage 参数区分 dev/staging/prod 环境。",
                    "基础设施即代码：SAM/CloudFormation/Terraform 管理 Serverless 资源。",
                ],
                lessons: [
                    {
                        id: "w7-1",
                        title: "GitHub Actions 部署 Serverless",
                        detail: "配置 GitHub Actions 工作流，实现 SAM/Serverless Framework 的自动化部署。",
                        resources: [
                            { title: "GitHub Actions 概念", url: "https://docs.github.com/en/actions/about-github-actions/understanding-github-actions" },
                            { title: "SAM CI/CD 指南", url: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-deploying.html" },
                            { title: "AWS 凭证配置", url: "https://github.com/aws-actions/configure-aws-credentials" },
                        ],
                    },
                    {
                        id: "w7-2",
                        title: "多环境部署：Stage 与环境隔离",
                        detail: "使用 Stage 参数管理多环境部署，实现资源隔离与配置差异化。",
                        resources: [
                            { title: "SAM 部署", url: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-deploy.html" },
                            { title: "Serverless 变量", url: "https://www.serverless.com/framework/docs/providers/aws/guide/variables" },
                            { title: "API Gateway Stages", url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html" },
                        ],
                    },
                    {
                        id: "w7-3",
                        title: "AWS CodePipeline：原生 Serverless CI/CD",
                        detail: "使用 AWS CodePipeline 构建端到端的 Serverless 部署流水线。",
                        resources: [
                            { title: "CodePipeline 概览", url: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html" },
                            { title: "SAM + CodePipeline", url: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-pipeline.html" },
                            { title: "CodeBuild + SAM", url: "https://docs.aws.amazon.com/codebuild/latest/userguide/sample-sam.html" },
                        ],
                    },
                    {
                        id: "w7-4",
                        title: "版本控制与回滚：Lambda 版本与别名",
                        detail: "使用 Lambda 版本和别名实现安全发布与快速回滚。",
                        resources: [
                            { title: "Lambda 版本", url: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html" },
                            { title: "Lambda 别名", url: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html" },
                            { title: "流量转移", url: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase4",
        title: "第四阶段：性能优化",
        duration: "第 8-9 周",
        goal: "掌握冷启动优化、性能调优与可观测性建设。",
        weeks: [
            {
                id: "w8",
                title: "第 8 周：冷启动优化与性能调优",
                summary: "深入理解冷启动机制，掌握性能优化最佳实践。",
                overview:
                    "系统分析冷启动的成因与影响，掌握 Provisioned Concurrency、SnapStart、代码优化等多种优化手段。",
                keyPoints: [
                    "冷启动分解：Init Duration = Runtime Init + Extension Init + Function Init。",
                    "Provisioned Concurrency：预热实例消除冷启动，适用场景与成本权衡。",
                    "Lambda SnapStart（Java）：利用快照加速启动，限制与最佳实践。",
                ],
                lessons: [
                    {
                        id: "w8-1",
                        title: "冷启动深度剖析：Init Duration 的组成",
                        detail: "分解冷启动的各个阶段，识别优化瓶颈与改进方向。",
                        keyPoints: [
                            "Init Duration 构成：运行时初始化 + 扩展初始化 + 函数代码初始化（依赖加载、全局变量初始化）。",
                            "语言影响：Python/Node.js 冷启动通常 <200ms，Java/.NET 可能 >1s，选择运行时影响冷启动表现。",
                            "优化方向：减少部署包大小、精简依赖、将初始化逻辑移到 Handler 外部（复用执行环境）。",
                        ],
                        resources: [
                            { title: "理解冷启动", url: "https://aws.amazon.com/blogs/compute/understanding-and-remediating-cold-starts-an-aws-lambda-perspective/" },
                            { title: "执行环境生命周期", url: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html" },
                            { title: "Lambda 性能优化", url: "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html" },
                        ],
                    },
                    {
                        id: "w8-2",
                        title: "Provisioned Concurrency：预热消除冷启动",
                        detail: "配置 Provisioned Concurrency，结合 Application Auto Scaling 动态调整。",
                        resources: [
                            { title: "Provisioned Concurrency 配置", url: "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html" },
                            { title: "Provisioned Concurrency 调度", url: "https://aws.amazon.com/blogs/compute/scheduling-aws-lambda-provisioned-concurrency-for-recurring-peak-usage/" },
                            { title: "动态 Provisioned Concurrency", url: "https://www.ranthebuilder.cloud/post/optimize-aws-lambda-with-dynamic-provisioned-concurrency" },
                        ],
                    },
                    {
                        id: "w8-3",
                        title: "Lambda SnapStart：Java 函数的快照加速",
                        detail: "为 Java 函数启用 SnapStart，理解快照机制与使用限制。",
                        resources: [
                            { title: "Lambda SnapStart", url: "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html" },
                            { title: "SnapStart 最佳实践", url: "https://docs.aws.amazon.com/lambda/latest/dg/snapstart-best-practices.html" },
                            { title: "SnapStart 公告", url: "https://aws.amazon.com/blogs/compute/reducing-java-cold-starts-on-aws-lambda-functions-with-snapstart/" },
                        ],
                    },
                    {
                        id: "w8-4",
                        title: "代码级优化：依赖精简与初始化策略",
                        detail: "优化函数代码与依赖，减少 Init 时间，提升整体性能。",
                        keyPoints: [
                            "依赖精简：只打包实际使用的模块，使用 Tree Shaking 或 esbuild 减少包体积。",
                            "初始化外置：将数据库连接、SDK 客户端初始化放在 Handler 之外，利用执行环境复用避免重复初始化。",
                            "Power Tuning：使用 Lambda Power Tuning 工具自动测试不同内存配置，找到性价比最优的内存值。",
                        ],
                        resources: [
                            { title: "Lambda 最佳实践", url: "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html" },
                            { title: "Lambda Power Tuning", url: "https://github.com/alexcasalboni/aws-lambda-power-tuning" },
                            { title: "优化 Lambda 包大小", url: "https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html" },
                        ],
                    },
                ],
            },
            {
                id: "w9",
                title: "第 9 周：可观测性与监控",
                summary: "构建 Serverless 应用的全链路可观测体系。",
                overview:
                    "使用 CloudWatch、X-Ray、第三方工具构建 Serverless 应用的指标、日志、追踪三位一体的可观测体系。",
                keyPoints: [
                    "CloudWatch Metrics：核心指标（Invocations/Duration/Errors/Throttles）与自定义指标。",
                    "CloudWatch Logs Insights：结构化日志查询与异常分析。",
                    "AWS X-Ray：分布式追踪，定位跨服务调用的性能瓶颈。",
                ],
                lessons: [
                    {
                        id: "w9-1",
                        title: "CloudWatch Metrics：核心指标监控",
                        detail: "理解 Lambda 核心指标的含义，配置告警与仪表板。",
                        keyPoints: [
                            "核心指标：Invocations（调用次数）、Duration（执行时长）、Errors（错误数）、Throttles（限流次数）。",
                            "告警配置：为 Errors 和 Throttles 设置 CloudWatch Alarm，超过阈值时通过 SNS 发送通知。",
                            "自定义指标：使用 EMF（Embedded Metric Format）在日志中嵌入自定义业务指标，无需额外 API 调用。",
                        ],
                        resources: [
                            { title: "Lambda 指标", url: "https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics.html" },
                            { title: "CloudWatch 告警", url: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html" },
                            { title: "Lambda 仪表板", url: "https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatch.html" },
                        ],
                    },
                    {
                        id: "w9-2",
                        title: "日志管理：CloudWatch Logs 与结构化日志",
                        detail: "配置 Lambda 日志输出，使用 Logs Insights 进行高效查询分析。",
                        resources: [
                            { title: "Lambda 日志", url: "https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs.html" },
                            { title: "Logs Insights 语法", url: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html" },
                            { title: "Lambda Powertools 日志", url: "https://docs.powertools.aws.dev/lambda/python/latest/core/logger/" },
                        ],
                    },
                    {
                        id: "w9-3",
                        title: "AWS X-Ray：分布式追踪与性能分析",
                        detail: "为 Lambda 启用 X-Ray 追踪，分析跨服务调用链路。",
                        keyPoints: [
                            "追踪启用：在 Lambda 配置中开启 Active Tracing，自动记录函数调用的 Segment 和 Subsegment。",
                            "服务地图：X-Ray 自动生成服务调用关系图，直观展示请求在各服务间的流转和延迟分布。",
                            "性能分析：通过 Trace 详情查看每个外部调用（DynamoDB、S3、HTTP）的耗时，定位性能瓶颈。",
                        ],
                        resources: [
                            { title: "Lambda 与 X-Ray", url: "https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html" },
                            { title: "X-Ray 概念", url: "https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html" },
                            { title: "X-Ray SDK", url: "https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk.html" },
                        ],
                    },
                    {
                        id: "w9-4",
                        title: "Lambda Powertools：增强可观测性",
                        detail: "使用 Lambda Powertools 库简化日志、指标、追踪的集成。",
                        resources: [
                            { title: "Lambda Powertools Python", url: "https://docs.powertools.aws.dev/lambda/python/latest/" },
                            { title: "Lambda Powertools TypeScript", url: "https://docs.powertools.aws.dev/lambda/typescript/latest/" },
                            { title: "Powertools 追踪", url: "https://docs.powertools.aws.dev/lambda/python/latest/core/tracer/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase5",
        title: "第五阶段：安全与生产实践",
        duration: "第 10 周",
        goal: "掌握 Serverless 安全最佳实践与成本优化策略。",
        weeks: [
            {
                id: "w10",
                title: "第 10 周：安全、成本与最佳实践",
                summary: "构建安全、经济、可维护的 Serverless 应用。",
                overview:
                    "系统学习 Serverless 安全加固、成本优化策略，以及生产环境的最佳实践与常见问题排查。",
                keyPoints: [
                    "IAM 最小权限原则：每个函数独立角色，权限粒度到具体资源与操作。",
                    "Secrets 管理：使用 Secrets Manager/Parameter Store 而非环境变量存储敏感信息。",
                    "成本优化：内存调优、超时控制、并发限制与 Savings Plans。",
                ],
                lessons: [
                    {
                        id: "w10-1",
                        title: "IAM 安全加固：最小权限与权限边界",
                        detail: "为每个 Lambda 函数配置最小权限的执行角色，使用权限边界限制最大权限。",
                        resources: [
                            { title: "Lambda 安全最佳实践", url: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-security.html" },
                            { title: "IAM 最佳实践", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html" },
                            { title: "Serverless IAM 管理", url: "https://www.serverless.com/blog/abcs-of-iam-permissions" },
                        ],
                    },
                    {
                        id: "w10-2",
                        title: "Secrets 管理：安全存储敏感信息",
                        detail: "使用 Secrets Manager 和 Parameter Store 管理数据库凭证、API 密钥等敏感信息。",
                        resources: [
                            { title: "Secrets Manager 与 Lambda", url: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets_lambda.html" },
                            { title: "Parameter Store", url: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html" },
                            { title: "Lambda 环境变量加密", url: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption" },
                        ],
                    },
                    {
                        id: "w10-3",
                        title: "成本优化：内存调优与计费分析",
                        detail: "使用 Lambda Power Tuning 找到最优内存配置，分析成本构成与优化方向。",
                        resources: [
                            { title: "Lambda 定价", url: "https://aws.amazon.com/lambda/pricing/" },
                            { title: "Lambda Power Tuning", url: "https://github.com/alexcasalboni/aws-lambda-power-tuning" },
                            { title: "Compute Savings Plans", url: "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html" },
                        ],
                    },
                    {
                        id: "w10-4",
                        title: "生产实践：故障排查与架构模式",
                        detail: "掌握常见故障排查方法，了解 Serverless 架构模式与反模式。",
                        resources: [
                            { title: "Lambda 故障排查", url: "https://docs.aws.amazon.com/lambda/latest/dg/troubleshooting.html" },
                            { title: "Serverless 架构模式", url: "https://serverlessland.com/patterns" },
                            { title: "AWS Well-Architected Serverless", url: "https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/welcome.html" },
                        ],
                    },
                ],
            },
        ],
    },
]

export const serverlessKnowledgeCards: KnowledgeCard[] = [
    {
        id: "card1",
        title: "Serverless 核心价值",
        summary: "无需管理服务器，按调用计费，自动伸缩，让开发者专注业务逻辑。",
        points: [
            "零运维：云平台负责服务器配置、扩缩容、安全补丁。",
            "按需计费：按调用次数和执行时间计费，空闲时零成本。",
            "弹性伸缩：从 0 到数千并发的自动扩展，无需预置容量。",
        ],
        practice: "部署一个 Hello World Lambda 函数，观察 CloudWatch 中的计费指标。",
    },
    {
        id: "card2",
        title: "冷启动机制",
        summary: "首次调用或长时间未调用时，Lambda 需要初始化执行环境，导致额外延迟。",
        points: [
            "Init 阶段包括：运行时初始化 + 扩展初始化 + 函数代码初始化。",
            "热启动复用已有环境，延迟仅为函数执行时间。",
            "Provisioned Concurrency 预热实例可消除冷启动，但增加成本。",
        ],
        practice: "配置 Provisioned Concurrency 后对比冷启动和热启动的响应时间。",
    },
    {
        id: "card3",
        title: "事件驱动架构",
        summary: "服务间通过事件异步通信，实现松耦合、高可用、易扩展的系统。",
        points: [
            "事件源（S3/DynamoDB/EventBridge）产生事件，Lambda 消费处理。",
            "异步解耦：生产者无需等待消费者响应，提高系统弹性。",
            "事件总线（EventBridge）统一路由，支持过滤、转换与多目标。",
        ],
        practice: "配置 S3 上传事件触发 Lambda，实现文件自动处理流程。",
    },
    {
        id: "card4",
        title: "API Gateway 类型选择",
        summary: "REST API 功能丰富，HTTP API 低延迟低成本，根据需求选择。",
        points: [
            "REST API：支持请求验证、转换、缓存、使用计划等高级功能。",
            "HTTP API：延迟更低、成本降低 70%，适合简单的代理场景。",
            "WebSocket API：支持双向通信，适合实时应用。",
        ],
        practice: "分别创建 REST API 和 HTTP API，对比响应延迟和成本。",
    },
    {
        id: "card5",
        title: "Step Functions 编排",
        summary: "使用状态机编排多个 Lambda，实现复杂的业务工作流。",
        points: [
            "可视化工作流：Workflow Studio 拖拽设计，ASL JSON 定义。",
            "内置错误处理：Retry/Catch 自动重试与异常捕获。",
            "Standard vs Express：长流程用 Standard，高吞吐用 Express。",
        ],
        practice: "设计一个订单处理状态机：验证 → 扣库存 → 支付 → 通知。",
    },
    {
        id: "card6",
        title: "开发框架对比",
        summary: "SAM 是 AWS 原生方案，Serverless Framework 跨云支持且生态丰富。",
        points: [
            "SAM：CloudFormation 超集，与 AWS 服务深度集成，本地调试方便。",
            "Serverless Framework：多云支持，插件丰富，社区活跃。",
            "本地开发：sam local 和 serverless offline 模拟执行环境。",
        ],
        practice: "用 SAM 和 Serverless Framework 分别部署同一个 API，对比体验。",
    },
    {
        id: "card7",
        title: "IAM 最小权限",
        summary: "每个 Lambda 函数使用独立角色，权限精确到资源和操作级别。",
        points: [
            "避免使用 * 通配符，明确指定资源 ARN。",
            "使用 Condition 进一步限制权限生效条件。",
            "权限边界（Permission Boundary）限制角色的最大权限范围。",
        ],
        practice: "为 DynamoDB 读写函数创建最小权限角色，仅允许访问特定表。",
    },
    {
        id: "card8",
        title: "可观测性三支柱",
        summary: "指标看趋势，日志查细节，追踪找瓶颈，三者缺一不可。",
        points: [
            "Metrics：CloudWatch 内置 Invocations/Duration/Errors/Throttles。",
            "Logs：结构化 JSON 日志 + Logs Insights 高效查询。",
            "Traces：X-Ray 分布式追踪，定位跨服务调用瓶颈。",
        ],
        practice: "启用 X-Ray 追踪，分析一个包含 API Gateway + Lambda + DynamoDB 的请求链路。",
    },
    {
        id: "card9",
        title: "成本优化策略",
        summary: "通过内存调优、超时控制、并发限制降低 Serverless 成本。",
        points: [
            "内存与 CPU 线性相关，找到性价比最优的内存配置。",
            "合理设置超时，避免失控函数持续计费。",
            "使用 Reserved Concurrency 限制并发，保护下游服务并控制成本。",
        ],
        practice: "使用 Lambda Power Tuning 工具找到函数的最优内存配置。",
    },
    {
        id: "card10",
        title: "生产部署策略",
        summary: "使用版本和别名实现安全发布，支持灰度和快速回滚。",
        points: [
            "每次部署创建新版本，保留历史代码可追溯。",
            "别名指向特定版本，prod/staging 环境独立管理。",
            "流量转移支持金丝雀发布，逐步验证新版本。",
        ],
        practice: "配置 Lambda 别名的流量转移，实现 10% 金丝雀发布。",
    },
]

export const serverlessExamQuestions: QuizQuestion[] = [
    {
        id: "exam-q1",
        question: "Lambda 冷启动发生在什么情况下？",
        options: [
            "每次函数调用时",
            "首次调用或长时间未调用后，需要初始化新执行环境时",
            "函数代码更新后的第一次调用",
            "内存配置变更后",
        ],
        answer: 1,
        rationale: "冷启动发生在没有可复用的执行环境时，包括首次调用、长时间未调用、以及并发增加需要新实例时。代码更新也会触发冷启动。",
    },
    {
        id: "exam-q2",
        question: "Provisioned Concurrency 的主要作用是什么？",
        options: [
            "增加函数的最大并发数",
            "预热执行环境，消除冷启动延迟",
            "降低函数的执行成本",
            "提高函数的内存限制",
        ],
        answer: 1,
        rationale: "Provisioned Concurrency 预先初始化指定数量的执行环境，使函数始终处于热启动状态，消除冷启动带来的延迟。",
    },
    {
        id: "exam-q3",
        question: "API Gateway REST API 与 HTTP API 的主要区别是什么？",
        options: [
            "HTTP API 支持更多集成类型",
            "REST API 成本更低、延迟更小",
            "REST API 功能更丰富，HTTP API 更简单、成本更低",
            "HTTP API 只支持 Lambda 集成",
        ],
        answer: 2,
        rationale: "REST API 支持请求验证、转换、缓存、使用计划等高级功能；HTTP API 功能较少但延迟更低、成本降低约 70%。",
    },
    {
        id: "exam-q4",
        question: "DynamoDB Streams 与 Lambda 集成的触发模式是？",
        options: [
            "Lambda 主动轮询 Streams 获取变更记录",
            "DynamoDB 直接调用 Lambda 函数",
            "通过 EventBridge 路由到 Lambda",
            "需要手动配置 SQS 作为中间层",
        ],
        answer: 0,
        rationale: "Lambda 服务会以每秒 4 次的基础频率轮询 DynamoDB Streams，当有新记录时同步调用 Lambda 函数处理。",
    },
    {
        id: "exam-q5",
        question: "Step Functions 中 Express 工作流的特点是？",
        options: [
            "支持最长一年的执行时间",
            "高吞吐、低延迟，最长执行 5 分钟",
            "自动记录完整的执行历史",
            "每次状态转换都持久化",
        ],
        answer: 1,
        rationale: "Express 工作流专为高吞吐、短时任务设计，最长执行 5 分钟，成本更低但不保证 exactly-once 执行语义。",
    },
    {
        id: "exam-q6",
        question: "Lambda 函数的内存配置与 CPU 的关系是？",
        options: [
            "内存和 CPU 独立配置",
            "内存越大 CPU 分配越多，线性关系",
            "CPU 固定，只有内存可调",
            "需要单独购买 CPU 配额",
        ],
        answer: 1,
        rationale: "Lambda 的 CPU 分配与内存成线性关系，1769MB 内存对应 1 个 vCPU，更高内存获得更多 CPU 资源。",
    },
    {
        id: "exam-q7",
        question: "Lambda 版本和别名的作用是什么？",
        options: [
            "版本用于命名，别名用于标签",
            "版本是代码快照，别名是指向版本的指针，支持流量转移",
            "版本只能有一个，别名可以有多个",
            "别名是版本的副本",
        ],
        answer: 1,
        rationale: "版本是函数代码的不可变快照，别名是指向特定版本的指针。别名支持加权流量转移，实现金丝雀发布。",
    },
    {
        id: "exam-q8",
        question: "AWS SAM 相比原生 CloudFormation 的优势是？",
        options: [
            "支持更多 AWS 服务",
            "简化 Serverless 资源定义语法，支持本地测试",
            "部署速度更快",
            "不需要 IAM 权限",
        ],
        answer: 1,
        rationale: "SAM 是 CloudFormation 的超集，提供简化的 Serverless 资源定义（如 AWS::Serverless::Function），并支持 sam local 本地测试。",
    },
    {
        id: "exam-q9",
        question: "Lambda 函数如何安全地访问数据库凭证？",
        options: [
            "直接写在代码中",
            "使用环境变量明文存储",
            "使用 Secrets Manager 或 Parameter Store",
            "通过 API Gateway 传入",
        ],
        answer: 2,
        rationale: "敏感信息应存储在 Secrets Manager 或 Parameter Store 中，Lambda 运行时动态获取。环境变量即使加密也不如专用服务安全。",
    },
    {
        id: "exam-q10",
        question: "CloudWatch Logs Insights 的主要用途是？",
        options: [
            "实时监控 Lambda 指标",
            "对日志数据进行交互式查询分析",
            "自动生成告警",
            "配置日志保留策略",
        ],
        answer: 1,
        rationale: "Logs Insights 提供专门的查询语法，可以对 CloudWatch Logs 中的日志数据进行交互式搜索、过滤、聚合分析。",
    },
    {
        id: "exam-q11",
        question: "Lambda Reserved Concurrency 的作用是？",
        options: [
            "预热函数实例",
            "为函数预留并发配额，同时限制最大并发",
            "提高函数的优先级",
            "减少冷启动时间",
        ],
        answer: 1,
        rationale: "Reserved Concurrency 为函数保留一定的并发配额（不会被其他函数占用），同时也限制该函数的最大并发数，保护下游服务。",
    },
    {
        id: "exam-q12",
        question: "X-Ray 在 Lambda 中的作用是？",
        options: [
            "替代 CloudWatch Logs",
            "监控 Lambda 内存使用",
            "分布式追踪，分析跨服务调用链路性能",
            "自动优化函数代码",
        ],
        answer: 2,
        rationale: "X-Ray 提供分布式追踪能力，可以追踪请求从 API Gateway 到 Lambda 再到 DynamoDB 的完整调用链路，定位性能瓶颈。",
    },
    {
        id: "exam-q13",
        question: "Lambda SnapStart 适用于哪种运行时？",
        options: [
            "Node.js",
            "Python",
            "Java（11 及以上版本）",
            "所有运行时",
        ],
        answer: 2,
        rationale: "SnapStart 目前仅支持 Java 运行时（11 及以上版本），通过缓存初始化后的执行环境快照来加速冷启动。",
    },
    {
        id: "exam-q14",
        question: "Serverless Framework 的 serverless.yml 中 stage 的作用是？",
        options: [
            "定义函数的执行阶段",
            "区分部署环境（如 dev/staging/prod）",
            "配置 Lambda 版本",
            "设置 API Gateway 缓存",
        ],
        answer: 1,
        rationale: "stage 参数用于区分不同的部署环境，每个 stage 会创建独立的资源实例，实现环境隔离。",
    },
    {
        id: "exam-q15",
        question: "Lambda 函数执行角色（Execution Role）的作用是？",
        options: [
            "控制谁可以调用该函数",
            "定义函数可以访问哪些 AWS 服务",
            "限制函数的并发数",
            "配置函数的网络访问",
        ],
        answer: 1,
        rationale: "执行角色定义了 Lambda 函数在运行时可以访问哪些 AWS 资源（如 S3、DynamoDB）。资源策略控制谁可以调用该函数。",
    },
    {
        id: "exam-q16",
        question: "Step Functions 中 Catch 和 Retry 的区别是？",
        options: [
            "Catch 用于重试，Retry 用于捕获异常",
            "Retry 定义重试策略，Catch 定义异常后的转移状态",
            "两者功能相同，可互换使用",
            "Catch 只能用于 Task 状态",
        ],
        answer: 1,
        rationale: "Retry 定义错误发生时的自动重试策略（次数、间隔、退避），Catch 定义重试失败或特定错误时转移到的处理状态。",
    },
    {
        id: "exam-q17",
        question: "Lambda 函数超时设置的最大值是？",
        options: [
            "5 分钟",
            "10 分钟",
            "15 分钟",
            "30 分钟",
        ],
        answer: 2,
        rationale: "Lambda 函数的超时时间最大可设置为 15 分钟（900 秒）。超过此时间的任务应考虑使用 Step Functions 或其他方案。",
    },
    {
        id: "exam-q18",
        question: "EventBridge 相比 SNS/SQS 的优势是？",
        options: [
            "消息持久化能力更强",
            "支持基于内容的过滤和路由，更适合事件驱动架构",
            "延迟更低",
            "成本更低",
        ],
        answer: 1,
        rationale: "EventBridge 提供基于事件内容的高级过滤和路由能力，支持 Schema 注册和发现，更适合构建复杂的事件驱动架构。",
    },
    {
        id: "exam-q19",
        question: "Lambda Powertools 库的主要功能是？",
        options: [
            "加速 Lambda 冷启动",
            "提供日志、追踪、指标的标准化工具集",
            "自动优化内存配置",
            "简化 Lambda 部署",
        ],
        answer: 1,
        rationale: "Lambda Powertools 提供日志（Logger）、追踪（Tracer）、指标（Metrics）等可观测性工具，以及参数管理、幂等性等实用功能。",
    },
    {
        id: "exam-q20",
        question: "VPC 中的 Lambda 函数访问 DynamoDB 的推荐方式是？",
        options: [
            "通过 NAT Gateway 访问公网",
            "配置 DynamoDB VPC Endpoint（Gateway 类型）",
            "将 DynamoDB 部署到同一 VPC",
            "使用 Lambda 层缓存数据",
        ],
        answer: 1,
        rationale: "使用 VPC Endpoint（Gateway 类型）可以让 VPC 内的 Lambda 直接访问 DynamoDB，无需通过 NAT Gateway，成本更低且更安全。",
    },
]

export const serverlessRoadmap: RoadmapDefinition = {
    id: "serverless",
    label: "Serverless",
    title: "Serverless 架构与函数计算",
    durationLabel: "10 周完整学习路线",
    description:
        "从 Serverless 核心概念到生产实践的完整学习路径：FaaS 基础 → Lambda 深入 → API Gateway 与触发器 → 数据集成 → 工作流编排 → 开发框架 → CI/CD → 冷启动优化 → 可观测性 → 安全与成本。每个主题都有动手实践与即时测验。",
    heroBadge: "10 周 · 40 主题",
    stages: serverlessStages,
    knowledgeCards: serverlessKnowledgeCards,
    examQuestions: serverlessExamQuestions,
    suggestion: (percent: number) => {
        if (percent < 25) {
            return "建议先完成 Serverless 基础与 Lambda 核心概念，理解执行环境与冷启动机制。"
        }
        if (percent < 50) {
            return "继续学习 API Gateway 与数据存储集成，动手构建一个完整的 CRUD API。"
        }
        if (percent < 75) {
            return "深入 Step Functions 编排与开发框架，建立规范的 CI/CD 流水线。"
        }
        return "加强性能优化与安全实践，为生产部署做好准备。"
    },
    resourceGuide: {
        environment: "AWS 账户（Free Tier 即可）、本地 Node.js/Python 环境、AWS CLI、SAM CLI 或 Serverless Framework。",
        fallbackKeyPoints: [
            "先用 Console 手动创建 Lambda + API Gateway，理解基本概念后再用 SAM/Serverless Framework。",
            "关注 CloudWatch Metrics 中的 Duration 和 Cold Start，建立性能直觉。",
            "从简单的 HTTP API 开始，逐步添加 DynamoDB、Step Functions 等组件。",
        ],
        handsOnSteps: [
            "创建第一个 Lambda 函数，通过 Console 测试并观察 CloudWatch Logs。",
            "配置 API Gateway 触发 Lambda，用 curl 或 Postman 调用验证。",
            "连接 DynamoDB 实现 CRUD，测试 Streams 触发器。",
            "使用 SAM 或 Serverless Framework 将以上资源代码化管理。",
        ],
        selfChecks: [
            "能否解释冷启动的触发条件和优化方案？",
            "能否说明 API Gateway REST API 和 HTTP API 的选择标准？",
            "能否设计一个 Step Functions 状态机来编排多个 Lambda？",
        ],
        extensions: [
            "尝试配置 Provisioned Concurrency 并用 Lambda Power Tuning 找最优内存。",
            "集成 X-Ray 追踪，分析端到端请求延迟。",
            "设计一个事件驱动架构，使用 EventBridge 路由不同类型的事件。",
        ],
        lessonQuizAdvice: "建议：结合 AWS 官方文档复习错题，动手验证每个知识点。",
    },
}
