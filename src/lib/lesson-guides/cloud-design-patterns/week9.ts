import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "w9-1": {
        lessonId: "w9-1",
        background: [
            "【核心概念】Azure 官方文档：Federated Identity 模式通过'将身份验证委托给外部身份提供商（IdP）'来解决'用户需要记住多个应用的不同凭据'问题。使用 Security Token Service（STS）实现基于声明（claims）的访问控制。",
            "【解决的问题】官方文档指出三个核心问题：1) 用户体验不连贯——需要记住多个凭据；2) 安全漏洞——员工离职时账户停用容易被遗漏；3) 管理负担——跨系统的凭据管理复杂。",
            "【工作流程】官方定义四步流程：1) 用户向 IdP 进行身份验证；2) IdP 颁发包含声明（身份、角色、访问权限）的安全令牌；3) STS 根据规则转换/增强声明；4) 应用接收令牌并基于声明进行授权（RBAC）。",
            "【OAuth 2.0 基础】OAuth.net 定义：OAuth 2.0 是'industry-standard protocol for authorization'——行业标准的授权协议。核心组件包括：Authorization Server（授权服务器）、Resource Server（资源服务器）、Client（客户端）、Resource Owner（资源所有者）。",
            "【Auth0 实现】Auth0 官方文档描述其为'identity platform to manage access to your applications'——管理应用访问的身份平台。支持 Native/Mobile Apps、Single Page Applications、Regular Web Apps、Backend/API 等多种应用类型的身份验证。"
        ],
        keyDifficulties: [
            "【单点故障风险】Azure 官方文档警告：身份管理系统是'single point of failure'——需要'deploy identity management across multiple datacenters'跨多个数据中心部署以确保高可用性。",
            "【Home Realm Discovery】官方文档指出：STS 必须确定'which IdP to route users to'——将用户路由到哪个 IdP。常用方法包括：email domain（邮箱域名）、subdomain（子域名）、IP address range（IP 地址范围）、cookies（用户偏好）。",
            "【社交登录限制】Azure 文档强调：'Social providers often only provide email/unique ID'——社交提供商通常只提供邮箱或唯一标识。应用可能需要维护单独的用户注册数据来补充不完整的用户信息。",
            "【声明转换复杂性】官方文档描述：多个 STS 可能参与'trust chain'——信任链，每个 STS 可以'add/modify claims for application-specific requirements'——根据应用需求添加或修改声明。这增加了系统复杂性。",
            "【改造成本高】Azure 文档指出：对于已有自定义身份验证的应用，'retrofitting federated identity is complex'——改造为联合身份很复杂。需要评估成本效益是否值得。"
        ],
        handsOnPath: [
            "配置 Azure AD 应用注册：在 Azure Portal 中注册应用，配置 Redirect URIs、ID tokens、Access tokens。设置 API permissions 授予必要的 Microsoft Graph 权限（如 User.Read）。",
            "实现 OAuth 2.0 授权码流程：使用 MSAL（Microsoft Authentication Library）实现完整流程：1) 重定向用户到 /authorize 端点；2) 接收授权码；3) 用授权码交换 access_token；4) 使用 token 调用受保护 API。",
            "配置 Auth0 身份提供商：创建 Auth0 tenant，配置 Application（选择 Regular Web Application 或 SPA）。设置 Allowed Callback URLs 和 Allowed Logout URLs。启用所需的 Connections（如 Google、GitHub 社交登录）。",
            "解析和验证 JWT 令牌：使用 jwt.io 或编程库（如 jsonwebtoken）解析 ID token 和 access token。验证 signature、issuer（iss）、audience（aud）、expiration（exp）等声明。",
            "实现基于声明的授权：在应用中读取 token 中的 roles 或 groups 声明，实现 RBAC。使用中间件（如 ASP.NET Core 的 [Authorize(Roles=\"Admin\")]）进行访问控制。"
        ],
        selfCheck: [
            "Federated Identity 模式解决哪三个核心问题？为什么说它简化了用户管理？",
            "OAuth 2.0 的四个核心组件（Authorization Server、Resource Server、Client、Resource Owner）各自的职责是什么？",
            "什么是 Home Realm Discovery？STS 如何决定将用户路由到哪个 IdP？",
            "Azure 文档警告的'单点故障'风险是什么？如何通过架构设计缓解？",
            "为什么社交登录提供商的用户信息通常不完整？应用应如何处理？"
        ],
        extensions: [
            "研究 OpenID Connect（OIDC）：了解它如何在 OAuth 2.0 之上添加身份层，区分 ID Token 和 Access Token 的用途。",
            "学习 SAML 2.0 协议：了解企业级 SSO 的传统协议，对比 SAML 和 OIDC 的优缺点和适用场景。",
            "探索 Zero Trust 架构：了解如何将联合身份与持续验证、最小权限原则结合，实现'never trust, always verify'。",
            "研究 Passwordless 身份验证：了解 FIDO2、WebAuthn 等无密码认证方案如何与联合身份集成。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/federated-identity",
            "https://oauth.net/2/",
            "https://auth0.com/docs/get-started"
        ]
    },
    "w9-2": {
        lessonId: "w9-2",
        background: [
            "【核心概念】Azure 官方文档：Valet Key 模式通过'提供时间限制、范围限制的令牌（valet keys）'让客户端'直接访问特定资源而不暴露长期凭据'。令牌像酒店代客泊车的钥匙——只授予有限权限。",
            "【解决的问题】官方文档指出三个核心问题：1) 资源开销——应用处理所有数据传输消耗计算、内存和带宽；2) 安全困境——直接访问存储需要共享凭据，失去应用作为网关的控制；3) 扩展瓶颈——服务器必须代理所有传输，限制性能和扩展性。",
            "【令牌特性】官方文档定义令牌提供：time-limited access（时间限制）、granular permissions（细粒度权限，如只读/只写）、scoped resources（范围限定到特定文件/容器）、location restrictions（位置限制到特定端点）。",
            "【AWS Presigned URLs】AWS 文档定义：Presigned URLs 是'time-limited, signed URLs that grant temporary access to S3 objects without requiring AWS credentials'——时间限制的签名 URL，允许临时访问 S3 对象而无需 AWS 凭据。它们像'bearer tokens'授权特定操作。",
            "【Azure SAS Tokens】Azure 文档定义三种 SAS 类型：User Delegation SAS（使用 Microsoft Entra 凭据，最安全）、Service SAS（使用存储账户密钥，单服务）、Account SAS（使用存储账户密钥，多服务）。Microsoft 推荐优先使用 User Delegation SAS。"
        ],
        keyDifficulties: [
            "【有效期权衡】Azure 官方文档强调：'Balance between security (short duration) and usability (sufficient time to complete operations)'——需要在安全性（短有效期）和可用性（足够完成操作的时间）之间平衡。过短导致操作中断，过长增加泄露风险。",
            "【密钥泄露风险】Azure 文档警告：'Leaked keys provide access until expiration'——泄露的密钥在过期前一直有效。必须使用 HTTPS 传输，限制日志文件访问（日志可能包含密钥），实施审计监控。",
            "【数据验证责任】官方文档指出：'Validate and sanitize all uploaded data for malicious content'——必须验证和清理所有上传的数据。Valet Key 模式中应用失去了上传时的即时检查能力。",
            "【AWS 凭据过期问题】AWS 文档警告：Presigned URL 在'configured expiration time OR underlying credential expiration（whichever occurs first）'过期——取配置的过期时间和底层凭据过期时间中较早的。IAM 角色凭据约 6 小时过期可能导致 URL 提前失效。",
            "【Azure 时钟偏差】Azure 文档提示：'Set SAS start time 15+ minutes in the past to avoid clock skew failures'——将 SAS 开始时间设为过去 15 分钟以上，避免时钟偏差导致的验证失败。不同机器的时钟可能有差异。"
        ],
        handsOnPath: [
            "生成 Azure Blob SAS Token：使用 Azure SDK（如 @azure/storage-blob）创建 User Delegation SAS。设置 BlobSasBuilder 的 BlobContainerName、BlobName、StartsOn、ExpiresOn、Protocol（HTTPS）和 Permissions（如 BlobSasPermissions.Create 只写）。",
            "实现 AWS S3 Presigned URL：使用 AWS SDK（如 boto3 或 @aws-sdk/s3-request-presigner）生成 getSignedUrl。设置 Bucket、Key、Expires（秒数），选择 getObject（下载）或 putObject（上传）操作。",
            "测试直接上传流程：客户端请求应用获取 SAS/Presigned URL → 应用验证权限并生成令牌 → 客户端使用令牌直接上传到存储 → 验证上传成功。使用 curl 或 Postman 测试整个流程。",
            "实现令牌刷新机制：为长时间操作实现令牌续期逻辑。监控令牌即将过期，在过期前请求新令牌。处理底层凭据轮换导致的 URL 提前失效。",
            "配置安全策略：设置存储桶策略限制 Presigned URL 的有效期（使用 s3:signatureAge 条件）。配置网络限制（aws:SourceIp）。启用访问日志进行审计。"
        ],
        selfCheck: [
            "Valet Key 模式解决哪三个核心问题？为什么它能减轻服务器负载？",
            "Azure SAS Token 的三种类型各有什么特点？为什么 User Delegation SAS 被推荐？",
            "Presigned URL 的过期时间受哪两个因素影响？为什么 IAM 角色生成的 URL 可能提前失效？",
            "Azure 文档为什么建议将 SAS 开始时间设为过去 15 分钟？这解决什么问题？",
            "Valet Key 模式中，应用失去了对上传数据的哪些控制？如何弥补？"
        ],
        extensions: [
            "研究 S3 Object Lambda：了解如何在返回对象时动态转换数据，弥补 Presigned URL 无法处理数据的限制。",
            "学习 Azure Blob 触发器：了解如何使用 Azure Functions 在文件上传后自动触发验证和处理逻辑。",
            "探索 CloudFront Signed URLs：对比 S3 Presigned URLs 和 CloudFront Signed URLs 的区别和适用场景。",
            "研究 SAS 审计和监控：了解如何使用 Azure Monitor 和 Storage Analytics 追踪 SAS 令牌的使用情况。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/valet-key",
            "https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html",
            "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview"
        ]
    },
    "w9-3": {
        lessonId: "w9-3",
        background: [
            "【核心概念】Azure 官方文档：Quarantine 模式通过'在隔离环境中验证外部资产，只有通过检验点后才标记为可信'来确保第三方软件制品的安全性。过程不修改制品本身，独立于开发周期运行。",
            "【解决的问题】官方文档指出：云解决方案依赖来自外部源的第三方软件制品（容器镜像、开源二进制文件、厂商操作系统镜像），这些制品本质上'untrusted'——不可信，可能包含：未知或被入侵的来源、潜在漏洞、数据完整性和机密性威胁、兼容性问题。",
            "【典型工作流程】官方定义五步流程：1) Intent Signaling——消费者请求导入制品并阻止使用；2) Validation——验证请求来源并获取制品；3) Verification Checks——执行漏洞扫描、恶意软件检测、来源验证、SBOM 评估、镜像签名；4) Decision——通过则发布到可信存储，失败则保持不可用；5) Event Notification——通知完成状态和验证报告。",
            "【Docker Scout】Docker 官方文档：Docker Scout 是'standalone platform to strengthen software supply chain security'——加强软件供应链安全的独立平台。它分析容器镜像，生成 SBOM（软件物料清单），与持续更新的漏洞数据库匹配以识别安全弱点。",
            "【SLSA 框架】SLSA 官方定义：Supply-chain Levels for Software Artifacts 是'vendor-neutral security framework providing a checklist of standards and controls to prevent tampering, improve integrity, and secure packages and infrastructure'——供应商中立的安全框架，提供防止篡改、提高完整性、保护包和基础设施的标准和控制清单。"
        ],
        keyDifficulties: [
            "【一次性验证局限】Azure 官方文档警告：'Quarantine is first opportunity validation'——隔离检疫只是第一道验证。一次性验证'doesn't guarantee indefinite trustworthiness'——不保证永久可信。必须实施持续的后批准扫描（如 Microsoft Defender for Containers）。",
            "【自动化必要性】官方文档强调：'Automate invocation to prevent inadvertent consumption before marking as trusted'——必须自动化调用以防止在标记为可信之前误用。人工流程容易被绕过或遗忘。",
            "【成本效益权衡】Azure 文档指出：当'cost of building/maintaining quarantine exceeds risk mitigation value'——构建和维护隔离检疫的成本超过风险缓解价值时，不应使用此模式。需要评估制品的风险级别和影响范围。",
            "【分段存储设计】官方文档要求：'Separate trusted/untrusted artifact stores using identity and network controls'——使用身份和网络控制分离可信/不可信制品存储。这需要设计双重 Registry 架构和严格的访问策略。",
            "【SLSA 级别复杂性】SLSA 框架定义四个级别的合规要求，检查构建、源代码和依赖项。组织需要从基础实践开始，逐步加强对复杂威胁的防护。实施 provenance（来源证明）是起步关键。"
        ],
        handsOnPath: [
            "配置 Azure Container Registry 双存储：创建两个 ACR 实例——quarantine（隔离区）和 trusted（可信区）。使用 Azure RBAC 限制对 trusted registry 的推送权限，只允许自动化流水线。",
            "实现 Docker Scout 漏洞扫描：在 CI/CD 流水线中集成 Docker Scout CLI。使用 docker scout cves 命令扫描镜像漏洞，设置严重性阈值（--only-severity critical,high）阻止不合规镜像。",
            "创建自动化检疫流水线：使用 Azure Durable Functions 或 AWS Step Functions 编排验证流程。步骤包括：1) 拉取镜像到隔离存储；2) 运行漏洞扫描；3) 验证 SBOM；4) 检查镜像签名；5) 通过则推送到可信存储。",
            "实施 SLSA 来源证明：使用 slsa-github-generator 或 Sigstore 为构建产物生成 provenance attestation。在检疫验证中检查 provenance 文件，验证构建来源和完整性。",
            "配置持续监控：启用 Microsoft Defender for Containers 或 AWS ECR 扫描。设置告警规则——当已批准镜像发现新漏洞时通知安全团队。定期重新扫描可信存储中的镜像。"
        ],
        selfCheck: [
            "Quarantine 模式的典型工作流程有哪五个步骤？每个步骤的主要职责是什么？",
            "为什么 Azure 文档说隔离检疫只是'第一道验证'？还需要什么补充措施？",
            "Docker Scout 如何帮助实现 Quarantine 模式？它提供哪些关键功能？",
            "SLSA 框架的核心目标是什么？'provenance'（来源证明）为什么重要？",
            "什么情况下不应该使用 Quarantine 模式？如何评估成本效益？"
        ],
        extensions: [
            "研究 Sigstore 和 Cosign：了解如何对容器镜像进行签名和验证，确保镜像来源可信且未被篡改。",
            "学习 OPA（Open Policy Agent）：了解如何定义和执行策略检查，自动化合规验证决策。",
            "探索 GitHub Dependabot：了解如何自动检测依赖漏洞并创建更新 PR，作为源代码级别的补充防护。",
            "研究 SBOM 标准（SPDX、CycloneDX）：了解软件物料清单的标准格式和工具链，实现供应链透明度。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/quarantine",
            "https://docs.docker.com/scout/",
            "https://slsa.dev/"
        ]
    },
    "w9-4": {
        lessonId: "w9-4",
        background: [
            "【Static Content Hosting 核心概念】Azure 官方文档：该模式通过'将静态资源部署到云存储服务直接向客户端提供内容'来减少计算实例的负载。静态内容包括 HTML、图片、文档、样式表、JavaScript——这些内容消耗计算资源但不需要动态处理。",
            "【解决的问题】官方文档指出：Web 服务器处理静态内容请求'浪费了可用于动态操作的处理周期'。云存储'显著比计算资源便宜'，将静态内容卸载到存储可节省成本。",
            "【Compute Resource Consolidation 核心概念】Azure 官方文档：该模式通过'将多个任务/操作整合到单个计算单元'来最大化资源利用率。将具有'相似可扩展性、生命周期和处理需求'的任务分组，允许它们作为一个单元一起扩展。",
            "【整合策略示例】官方文档描述好的整合：compute-intensive task + memory-intensive task（不同资源配置文件）；不好的整合：两个 compute-intensive 任务（竞争相同资源）或高频任务 + 低频爆发任务（冲突的扩展需求）。",
            "【CloudFront + S3 架构】AWS 实践指南描述：将 S3 作为源（Origin），CloudFront 作为 CDN。配置 Origin Access Control（OAC）限制直接 S3 访问，只允许通过 CloudFront。全球 200+ 边缘节点缓存内容，降低延迟。"
        ],
        keyDifficulties: [
            "【部署复杂性增加】Azure 官方文档指出：'Separate deployments needed when content splits between storage and compute'——内容分布在存储和计算之间时需要分别部署。这增加了发布流程的复杂性，需要协调多个部署目标。",
            "【受限访问处理】官方文档建议：'Use valet keys/tokens (shared access signatures) for non-anonymous resources'——对于非匿名资源使用 Valet Key。静态内容托管与 Valet Key 模式结合，保护需要授权的静态资源。",
            "【整合的故障风险】Azure 文档警告 Compute Resource Consolidation：'One failed task can cascade and prevent others from running'——一个失败的任务可能级联并阻止其他任务运行。不适合关键的容错操作。",
            "【安全上下文共享】官方文档指出整合任务'share security context'——共享安全上下文，'requires high trust between components'——需要组件之间高度信任，'increases attack surface'——增加攻击面。不适合处理敏感/私有数据。",
            "【扩展性冲突】Azure 文档强调：'Avoid grouping tasks with conflicting scaling requirements'——避免将具有冲突扩展需求的任务分组。如果一个任务需要快速扩展而另一个相对稳定，整合会导致资源浪费或性能问题。"
        ],
        handsOnPath: [
            "配置 Azure Blob Static Website：在 Storage Account 中启用 Static website 功能，设置 Index document（index.html）和 Error document（404.html）。上传静态文件到 $web 容器。访问 https://<account>.z4.web.core.windows.net 验证。",
            "配置 AWS S3 + CloudFront：创建 S3 bucket 并上传静态内容。创建 CloudFront distribution，设置 S3 作为 Origin。配置 Origin Access Control（OAC）限制直接 S3 访问。设置 Default Root Object 为 index.html。",
            "实现 CDN 缓存策略：配置 Cache-Control 头（如 max-age=31536000 对于版本化资产，max-age=0 对于 index.html）。使用 CloudFront Invalidation 或 Azure CDN Purge 在内容更新时清除缓存。",
            "整合 Azure App Service 应用：创建 App Service Plan，部署多个 Function App 到同一个 Plan。监控资源使用情况（CPU、内存），确保应用间不存在资源竞争。使用 Application Insights 追踪各应用性能。",
            "配置自定义域名和 HTTPS：为 CloudFront 配置 ACM 证书和自定义域名。或为 Azure Static Website 配置 Azure CDN 以支持自定义域名和 HTTPS。设置 HTTP 到 HTTPS 重定向。"
        ],
        selfCheck: [
            "Static Content Hosting 模式如何帮助节省成本？静态内容为什么不应该由计算实例处理？",
            "Azure 文档列出的不适合使用 Static Content Hosting 的场景是什么？为什么？",
            "Compute Resource Consolidation 的好整合和坏整合分别是什么样的？举例说明。",
            "为什么整合计算资源不适合关键的容错操作？失败如何级联？",
            "CloudFront + S3 架构中，Origin Access Control（OAC）的作用是什么？为什么需要它？"
        ],
        extensions: [
            "研究 Azure Static Web Apps：了解如何一站式部署静态前端 + Serverless API，简化现代 Web 应用架构。",
            "学习边缘计算（Edge Functions）：了解 CloudFront Functions、Cloudflare Workers 如何在边缘执行轻量计算，减少延迟。",
            "探索多租户资源整合策略：了解如何在 SaaS 应用中安全地整合多租户的计算资源，实现成本效率和隔离的平衡。",
            "研究 FinOps 实践：了解如何持续监控和优化云资源使用，结合 Static Content Hosting 和 Consolidation 实现成本优化。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/static-content-hosting",
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/compute-resource-consolidation",
            "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStartedS3.html"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "w9-1": [
        {
            id: "w9-1-q1",
            question: "Azure 官方文档对 Federated Identity 模式解决的核心问题是什么？",
            options: [
                "提高数据库查询性能",
                "用户需要记住多个应用的不同凭据，导致体验不连贯",
                "减少网络带宽消耗",
                "优化服务器存储空间"
            ],
            answer: 1,
            rationale: "Azure 官方文档指出 Federated Identity 解决'用户需要记住多个应用的不同凭据'问题，以及员工离职账户停用易被遗漏、跨系统凭据管理复杂等问题。"
        },
        {
            id: "w9-1-q2",
            question: "OAuth 2.0 官方定义中，它是什么类型的协议？",
            options: [
                "数据加密协议",
                "industry-standard protocol for authorization（行业标准授权协议）",
                "文件传输协议",
                "消息队列协议"
            ],
            answer: 1,
            rationale: "OAuth.net 官方定义：OAuth 2.0 是'industry-standard protocol for authorization'——行业标准的授权协议。"
        },
        {
            id: "w9-1-q3",
            question: "Azure 文档中，Federated Identity 模式的四步工作流程正确的顺序是什么？",
            options: [
                "应用授权 → IdP 验证 → STS 转换 → 用户访问",
                "用户向 IdP 验证 → IdP 颁发令牌 → STS 转换声明 → 应用基于声明授权",
                "STS 验证 → IdP 颁发令牌 → 应用处理 → 用户访问",
                "用户注册 → 密码验证 → 令牌生成 → 资源访问"
            ],
            answer: 1,
            rationale: "官方定义四步流程：1) 用户向 IdP 进行身份验证；2) IdP 颁发包含声明的安全令牌；3) STS 转换/增强声明；4) 应用基于声明进行授权。"
        },
        {
            id: "w9-1-q4",
            question: "Azure 文档警告的 Federated Identity 单点故障风险如何缓解？",
            options: [
                "使用本地缓存",
                "deploy identity management across multiple datacenters（跨多数据中心部署）",
                "增加重试次数",
                "使用更快的网络"
            ],
            answer: 1,
            rationale: "Azure 官方文档警告身份管理系统是'single point of failure'，需要'deploy identity management across multiple datacenters'跨多个数据中心部署。"
        },
        {
            id: "w9-1-q5",
            question: "什么是 Home Realm Discovery？",
            options: [
                "用户主页的自动发现",
                "STS 确定将用户路由到哪个身份提供商（IdP）",
                "DNS 解析过程",
                "用户设备的地理定位"
            ],
            answer: 1,
            rationale: "官方文档指出 Home Realm Discovery 是 STS 确定'which IdP to route users to'——将用户路由到哪个 IdP。方法包括邮箱域名、子域名、IP 地址范围、cookies。"
        },
        {
            id: "w9-1-q6",
            question: "根据 Azure 文档，社交登录提供商的主要限制是什么？",
            options: [
                "不支持移动设备",
                "Social providers often only provide email/unique ID（通常只提供邮箱或唯一标识）",
                "响应速度慢",
                "不支持多语言"
            ],
            answer: 1,
            rationale: "Azure 文档强调：'Social providers often only provide email/unique ID'——社交提供商通常只提供邮箱或唯一标识。应用可能需要维护单独的用户注册数据。"
        },
        {
            id: "w9-1-q7",
            question: "OAuth 2.0 框架的四个核心组件是什么？",
            options: [
                "User、Password、Token、API",
                "Authorization Server、Resource Server、Client、Resource Owner",
                "Frontend、Backend、Database、Cache",
                "Browser、Server、Network、Storage"
            ],
            answer: 1,
            rationale: "OAuth.net 定义核心组件包括：Authorization Server（授权服务器）、Resource Server（资源服务器）、Client（客户端）、Resource Owner（资源所有者）。"
        },
        {
            id: "w9-1-q8",
            question: "Auth0 官方文档如何定义其平台？",
            options: [
                "数据库管理系统",
                "identity platform to manage access to your applications（管理应用访问的身份平台）",
                "代码版本控制系统",
                "容器编排平台"
            ],
            answer: 1,
            rationale: "Auth0 官方文档描述其为'identity platform to manage access to your applications'——管理应用访问的身份平台。"
        },
        {
            id: "w9-1-q9",
            question: "根据 Azure 文档，以下哪种场景适合使用 Federated Identity？",
            options: [
                "单一用户的本地应用",
                "企业 SSO、B2B 场景、多租户 SaaS",
                "离线数据处理",
                "批量文件传输"
            ],
            answer: 1,
            rationale: "Azure 文档列出适用场景：Enterprise SSO（企业 SSO）、B2B scenarios（多组织不同 IT 系统）、Multi-tenant SaaS（多租户 SaaS 服务）。"
        },
        {
            id: "w9-1-q10",
            question: "Azure 文档指出'声明转换'的复杂性来源于什么？",
            options: [
                "网络延迟",
                "多个 STS 可能参与 trust chain，每个都可以添加/修改声明",
                "数据库事务",
                "文件系统权限"
            ],
            answer: 1,
            rationale: "官方文档描述：多个 STS 可能参与'trust chain'——信任链，每个 STS 可以'add/modify claims for application-specific requirements'——增加复杂性。"
        },
        {
            id: "w9-1-q11",
            question: "根据 Azure 文档，什么情况下不建议使用 Federated Identity？",
            options: [
                "需要支持多种客户端类型",
                "应用已有不同的身份验证机制，改造成本效益不值得",
                "需要支持企业用户",
                "需要实现 SSO"
            ],
            answer: 1,
            rationale: "Azure 文档指出：对于已有自定义身份验证的应用，'retrofitting federated identity is complex'——改造复杂。当成本效益不值得时不建议使用。"
        },
        {
            id: "w9-1-q12",
            question: "Azure 文档推荐的首选身份提供商是什么？",
            options: [
                "自建 LDAP",
                "Microsoft Entra ID（原 Azure AD）",
                "本地数据库",
                "文件系统认证"
            ],
            answer: 1,
            rationale: "Azure 文档列出相关 Azure 解决方案中，Microsoft Entra ID 是'primary recommendation'——首选推荐。"
        }
    ],
    "w9-2": [
        {
            id: "w9-2-q1",
            question: "Azure 官方文档对 Valet Key 模式的核心定义是什么？",
            options: [
                "永久授权的密钥管理",
                "提供时间限制、范围限制的令牌让客户端直接访问特定资源",
                "数据库连接池管理",
                "网络防火墙配置"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义 Valet Key 模式通过'提供时间限制、范围限制的令牌（valet keys）'让客户端'直接访问特定资源而不暴露长期凭据'。"
        },
        {
            id: "w9-2-q2",
            question: "Azure 文档指出 Valet Key 模式解决哪三个核心问题？",
            options: [
                "用户认证、会话管理、密码存储",
                "资源开销、安全困境、扩展瓶颈",
                "数据备份、灾难恢复、高可用",
                "日志收集、监控告警、性能优化"
            ],
            answer: 1,
            rationale: "官方文档指出三个核心问题：1) 资源开销——应用处理数据传输消耗资源；2) 安全困境——直接访问需共享凭据；3) 扩展瓶颈——服务器代理所有传输。"
        },
        {
            id: "w9-2-q3",
            question: "AWS 文档如何定义 Presigned URLs？",
            options: [
                "永久有效的访问链接",
                "time-limited, signed URLs that grant temporary access without requiring AWS credentials",
                "加密的文件下载链接",
                "数据库查询接口"
            ],
            answer: 1,
            rationale: "AWS 文档定义 Presigned URLs 是'time-limited, signed URLs that grant temporary access to S3 objects without requiring AWS credentials'。"
        },
        {
            id: "w9-2-q4",
            question: "Azure 文档推荐优先使用哪种类型的 SAS？",
            options: [
                "Service SAS",
                "User Delegation SAS",
                "Account SAS",
                "Admin SAS"
            ],
            answer: 1,
            rationale: "Azure 文档定义三种 SAS 类型，明确指出'Microsoft recommends using User Delegation SAS when possible for superior security'——优先使用 User Delegation SAS。"
        },
        {
            id: "w9-2-q5",
            question: "根据 Azure 文档，Valet Key 令牌有效期应该如何权衡？",
            options: [
                "总是使用最长有效期",
                "Balance between security (short duration) and usability (sufficient time)",
                "总是使用最短有效期",
                "根据文件大小决定"
            ],
            answer: 1,
            rationale: "Azure 官方文档强调：'Balance between security (short duration) and usability (sufficient time to complete operations)'——在安全性和可用性之间平衡。"
        },
        {
            id: "w9-2-q6",
            question: "AWS 文档指出 Presigned URL 的过期时间受什么影响？",
            options: [
                "仅由配置的过期时间决定",
                "配置的过期时间 OR 底层凭据过期时间，取较早者",
                "仅由文件大小决定",
                "由网络速度决定"
            ],
            answer: 1,
            rationale: "AWS 文档警告 Presigned URL 在'configured expiration time OR underlying credential expiration（whichever occurs first）'过期——取较早者。"
        },
        {
            id: "w9-2-q7",
            question: "Azure 文档为什么建议将 SAS 开始时间设为过去 15 分钟？",
            options: [
                "增加安全性",
                "避免不同机器的时钟偏差导致验证失败",
                "提高性能",
                "减少存储成本"
            ],
            answer: 1,
            rationale: "Azure 文档提示：'Set SAS start time 15+ minutes in the past to avoid clock skew failures'——避免时钟偏差导致的验证失败。"
        },
        {
            id: "w9-2-q8",
            question: "根据 Azure 文档，Valet Key 模式中密钥泄露的风险如何处理？",
            options: [
                "密钥永不过期所以无需担心",
                "使用 HTTPS 传输，限制日志访问，实施审计监控",
                "只使用内网访问",
                "依赖防火墙保护"
            ],
            answer: 1,
            rationale: "Azure 文档警告'Leaked keys provide access until expiration'，建议使用 HTTPS 传输，限制日志文件访问，实施审计监控。"
        },
        {
            id: "w9-2-q9",
            question: "AWS 文档中，IAM 用户凭据生成的 Presigned URL 最长有效期是多少？",
            options: [
                "1 小时",
                "Up to 7 days（最长 7 天）",
                "24 小时",
                "无限制"
            ],
            answer: 1,
            rationale: "AWS 文档指出 IAM user credentials 生成的 Presigned URL 最长有效期为'Up to 7 days (with AWS Signature Version 4)'。"
        },
        {
            id: "w9-2-q10",
            question: "Azure 文档指出 Valet Key 模式的 Well-Architected Framework 支持哪些支柱？",
            options: [
                "仅安全性",
                "安全性、成本优化、性能效率",
                "仅成本优化",
                "仅性能效率"
            ],
            answer: 1,
            rationale: "Azure 文档列出 Valet Key 支持：Security（限制访问范围和时间）、Cost Optimization（卸载处理）、Performance Efficiency（移除中间处理）。"
        },
        {
            id: "w9-2-q11",
            question: "根据 Azure 文档，Valet Key 模式中应用失去了对上传数据的什么控制？",
            options: [
                "数据加密",
                "即时验证和清理上传内容、强制大小限制和配额",
                "用户认证",
                "网络路由"
            ],
            answer: 1,
            rationale: "Azure 文档警告 Valet Key 模式'loss of control'，难以执行上传大小限制、强制配额，需要'Validate and sanitize all uploaded data for malicious content'。"
        },
        {
            id: "w9-2-q12",
            question: "Azure 文档中，Valet Key 模式与哪个模式建议结合使用以增加安全层？",
            options: [
                "Circuit Breaker Pattern",
                "Gatekeeper Pattern",
                "Retry Pattern",
                "Cache-Aside Pattern"
            ],
            answer: 1,
            rationale: "Azure 文档在 Related Patterns 中指出：'Gatekeeper Pattern: Use together for additional security/validation layer'——与 Gatekeeper 模式结合增加安全验证层。"
        }
    ],
    "w9-3": [
        {
            id: "w9-3-q1",
            question: "Azure 官方文档对 Quarantine 模式的核心目的是什么？",
            options: [
                "加速软件部署",
                "在隔离环境中验证外部资产，只有通过检验点后才标记为可信",
                "优化数据库性能",
                "管理用户权限"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义 Quarantine 模式通过'在隔离环境中验证外部资产，只有通过检验点后才标记为可信'来确保第三方软件制品的安全性。"
        },
        {
            id: "w9-3-q2",
            question: "Azure 文档指出云解决方案依赖的第三方制品为什么是'untrusted'？",
            options: [
                "它们太新了",
                "可能包含未知来源、潜在漏洞、数据威胁、兼容性问题",
                "它们太大了",
                "它们是免费的"
            ],
            answer: 1,
            rationale: "官方文档指出这些制品本质上'untrusted'——不可信，可能包含：未知或被入侵的来源、潜在漏洞、数据完整性和机密性威胁、兼容性问题。"
        },
        {
            id: "w9-3-q3",
            question: "Docker Scout 官方文档如何定义其平台？",
            options: [
                "容器编排系统",
                "standalone platform to strengthen software supply chain security（加强供应链安全的平台）",
                "代码版本控制",
                "网络监控工具"
            ],
            answer: 1,
            rationale: "Docker 官方文档定义 Docker Scout 是'standalone platform to strengthen software supply chain security'——加强软件供应链安全的独立平台。"
        },
        {
            id: "w9-3-q4",
            question: "Azure 文档描述的 Quarantine 模式典型工作流程有几个步骤？",
            options: [
                "3 步",
                "5 步（Intent Signaling、Validation、Verification Checks、Decision、Event Notification）",
                "7 步",
                "10 步"
            ],
            answer: 1,
            rationale: "官方定义五步流程：1) Intent Signaling；2) Validation；3) Verification Checks；4) Decision；5) Event Notification。"
        },
        {
            id: "w9-3-q5",
            question: "SLSA 官方框架的核心目标是什么？",
            options: [
                "加速软件开发",
                "prevent tampering, improve integrity, and secure packages and infrastructure（防止篡改、提高完整性）",
                "降低开发成本",
                "简化部署流程"
            ],
            answer: 1,
            rationale: "SLSA 官方定义其为'vendor-neutral security framework providing a checklist of standards and controls to prevent tampering, improve integrity, and secure packages and infrastructure'。"
        },
        {
            id: "w9-3-q6",
            question: "Azure 文档警告 Quarantine 是什么类型的验证？",
            options: [
                "持续验证",
                "first opportunity validation（第一道验证），不保证永久可信",
                "最终验证",
                "唯一验证"
            ],
            answer: 1,
            rationale: "Azure 官方文档警告：'Quarantine is first opportunity validation'——隔离检疫只是第一道验证，'doesn't guarantee indefinite trustworthiness'。"
        },
        {
            id: "w9-3-q7",
            question: "根据 Azure 文档，Quarantine 模式的验证检查包括哪些？",
            options: [
                "仅代码风格检查",
                "漏洞扫描、恶意软件检测、来源验证、SBOM 评估、镜像签名",
                "仅性能测试",
                "仅兼容性测试"
            ],
            answer: 1,
            rationale: "官方定义 Verification Checks 包括：vulnerability scanning（漏洞扫描）、malware detection（恶意软件检测）、source verification（来源验证）、SBOM evaluation、image signing（镜像签名）。"
        },
        {
            id: "w9-3-q8",
            question: "Docker Scout 如何帮助实现 Quarantine 模式？",
            options: [
                "提供容器运行时",
                "分析镜像生成 SBOM，与漏洞数据库匹配识别安全弱点",
                "管理容器网络",
                "编排容器部署"
            ],
            answer: 1,
            rationale: "Docker 官方文档指出 Docker Scout 分析容器镜像，生成 SBOM（软件物料清单），与持续更新的漏洞数据库匹配以识别安全弱点。"
        },
        {
            id: "w9-3-q9",
            question: "根据 Azure 文档，什么情况下不应该使用 Quarantine 模式？",
            options: [
                "使用外部容器镜像时",
                "制品由内部可信团队创建，或构建维护成本超过风险缓解价值时",
                "使用开源软件时",
                "部署到生产环境时"
            ],
            answer: 1,
            rationale: "Azure 文档指出不使用 Quarantine 的情况：'Artifact created by internal trusted teams'或'cost of building/maintaining quarantine exceeds risk mitigation value'。"
        },
        {
            id: "w9-3-q10",
            question: "SLSA 框架定义了几个合规级别？",
            options: [
                "2 个",
                "4 个级别，检查构建、源代码和依赖项",
                "6 个",
                "10 个"
            ],
            answer: 1,
            rationale: "SLSA 官方框架描述'four compliance levels of increasing assurance that examine builds, sources, and dependencies'——四个级别。"
        },
        {
            id: "w9-3-q11",
            question: "Azure 文档强调 Quarantine 流程为什么必须自动化？",
            options: [
                "提高处理速度",
                "prevent inadvertent consumption before marking as trusted（防止在标记为可信之前误用）",
                "减少人工成本",
                "简化审计流程"
            ],
            answer: 1,
            rationale: "官方文档强调：'Automate invocation to prevent inadvertent consumption before marking as trusted'——必须自动化以防止误用。"
        },
        {
            id: "w9-3-q12",
            question: "根据 Azure 文档，Quarantine 模式支持 Well-Architected Framework 的哪些支柱？",
            options: [
                "仅性能效率",
                "安全性（SE:02, SE:11）和卓越运营（OE:03, OE:11）",
                "仅成本优化",
                "仅可靠性"
            ],
            answer: 1,
            rationale: "Azure 文档列出 Quarantine 支持：Security（验证机密性、完整性、可用性）和 Operational Excellence（支持安全部署实践和标准化流程）。"
        }
    ],
    "w9-4": [
        {
            id: "w9-4-q1",
            question: "Azure 官方文档对 Static Content Hosting 模式解决的核心问题是什么？",
            options: [
                "数据库查询慢",
                "Web 服务器处理静态内容浪费了可用于动态操作的处理周期",
                "网络带宽不足",
                "存储空间不够"
            ],
            answer: 1,
            rationale: "Azure 官方文档指出 Web 服务器处理静态内容请求'浪费了可用于动态操作的处理周期'，将静态内容卸载到存储可节省成本。"
        },
        {
            id: "w9-4-q2",
            question: "Azure 文档对 Compute Resource Consolidation 模式的核心定义是什么？",
            options: [
                "将数据分片到多个数据库",
                "将多个任务/操作整合到单个计算单元以最大化资源利用率",
                "将应用部署到多个区域",
                "将日志集中存储"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义该模式通过'将多个任务/操作整合到单个计算单元'来最大化资源利用率，允许它们作为一个单元一起扩展。"
        },
        {
            id: "w9-4-q3",
            question: "根据 Azure 文档，好的资源整合策略示例是什么？",
            options: [
                "两个 compute-intensive 任务",
                "compute-intensive task + memory-intensive task（不同资源配置文件）",
                "高频任务 + 低频爆发任务",
                "实时任务 + 批处理任务"
            ],
            answer: 1,
            rationale: "官方文档描述好的整合：'compute-intensive task + memory-intensive task'——不同资源配置文件的任务可以互补。"
        },
        {
            id: "w9-4-q4",
            question: "Azure 文档指出 Static Content Hosting 模式在什么场景下不适用？",
            options: [
                "网站有大量静态内容",
                "内容需要处理后才能交付（如添加时间戳）或静态内容量很小",
                "需要全球分发内容",
                "需要节省成本"
            ],
            answer: 1,
            rationale: "Azure 文档指出不适用场景：'Content requiring processing before delivery'或'Very small static content volumes (overhead outweighs benefits)'。"
        },
        {
            id: "w9-4-q5",
            question: "Azure 文档警告 Compute Resource Consolidation 的主要风险是什么？",
            options: [
                "成本增加",
                "One failed task can cascade and prevent others from running（一个失败任务可能级联）",
                "性能提升",
                "管理简化"
            ],
            answer: 1,
            rationale: "Azure 文档警告：'One failed task can cascade and prevent others from running'——一个失败的任务可能级联并阻止其他任务运行。"
        },
        {
            id: "w9-4-q6",
            question: "根据 Azure 文档，Static Content Hosting 模式如何保护非匿名资源？",
            options: [
                "使用防火墙",
                "Use valet keys/tokens (shared access signatures)（使用 SAS 令牌）",
                "使用 VPN",
                "使用 IP 白名单"
            ],
            answer: 1,
            rationale: "官方文档建议：'Use valet keys/tokens (shared access signatures) for non-anonymous resources'——对于非匿名资源使用 SAS 令牌。"
        },
        {
            id: "w9-4-q7",
            question: "CloudFront + S3 架构中，Origin Access Control（OAC）的作用是什么？",
            options: [
                "加速内容传输",
                "限制直接 S3 访问，只允许通过 CloudFront",
                "压缩静态文件",
                "缓存内容"
            ],
            answer: 1,
            rationale: "AWS 实践指南描述配置 Origin Access Control（OAC）来'限制直接 S3 访问，只允许通过 CloudFront'。"
        },
        {
            id: "w9-4-q8",
            question: "Azure 文档指出整合计算资源时，任务共享安全上下文有什么影响？",
            options: [
                "提高安全性",
                "requires high trust between components, increases attack surface（需要高度信任，增加攻击面）",
                "降低成本",
                "简化部署"
            ],
            answer: 1,
            rationale: "官方文档指出整合任务'share security context'——共享安全上下文，'requires high trust between components'，'increases attack surface'。"
        },
        {
            id: "w9-4-q9",
            question: "Azure 文档强调整合计算资源时应避免什么？",
            options: [
                "使用容器",
                "Avoid grouping tasks with conflicting scaling requirements（避免整合扩展需求冲突的任务）",
                "使用 Serverless",
                "使用虚拟机"
            ],
            answer: 1,
            rationale: "Azure 文档强调：'Avoid grouping tasks with conflicting scaling requirements'——避免将具有冲突扩展需求的任务分组。"
        },
        {
            id: "w9-4-q10",
            question: "根据 Azure 文档，Static Content Hosting 支持 Well-Architected Framework 的哪些支柱？",
            options: [
                "仅安全性",
                "成本优化和性能效率",
                "仅可靠性",
                "仅卓越运营"
            ],
            answer: 1,
            rationale: "Azure 文档指出该模式支持：Cost Optimization（静态存储比动态计算便宜）和 Performance Efficiency（卸载拥塞，保留计算用于业务逻辑）。"
        },
        {
            id: "w9-4-q11",
            question: "Azure 文档描述 Static Content Hosting 增加了什么复杂性？",
            options: [
                "数据库管理复杂",
                "Separate deployments needed when content splits between storage and compute（需要分别部署）",
                "网络配置复杂",
                "安全管理复杂"
            ],
            answer: 1,
            rationale: "Azure 官方文档指出：'Separate deployments needed when content splits between storage and compute'——需要分别部署，增加发布流程复杂性。"
        },
        {
            id: "w9-4-q12",
            question: "根据 Azure 文档，Compute Resource Consolidation 适合什么类型的任务？",
            options: [
                "关键的容错操作",
                "在专用单元中成本效率低、有大量空闲时间的任务",
                "处理敏感数据的任务",
                "扩展需求差异大的任务"
            ],
            answer: 1,
            rationale: "Azure 文档指出适用场景：'Tasks that would otherwise be cost-ineffective in dedicated units'和'Tasks with significant idle time'——专用单元成本效率低、有大量空闲时间的任务。"
        }
    ]
}
