import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const multiTenantStages: Stage[] = [
    {
        id: "phase1",
        title: "第一阶段：多租户基础概念",
        duration: "第 1-4 周",
        goal: "理解多租户架构的核心概念、隔离模型与设计权衡。",
        weeks: [
            {
                id: "w1",
                title: "第 1 周：多租户架构概述",
                summary: "理解多租户的定义、价值主张与核心挑战。",
                overview: "多租户是 SaaS 架构的基石，通过共享基础设施服务多个客户来降低成本。本周从定义出发，理解多租户与单租户的本质区别、业务价值与技术挑战。",
                keyPoints: [
                    "多租户定义：单一应用实例服务多个客户（租户），租户间逻辑隔离但可能共享资源。",
                    "价值主张：降低运维成本、简化升级部署、实现规模经济、提供一致的服务体验。",
                    "核心挑战：数据隔离、性能隔离、定制化需求、合规要求、租户故障隔离。",
                ],
                lessons: [
                    {
                        id: "w1-1",
                        title: "多租户 vs 单租户：架构对比",
                        detail: "深入理解多租户与单租户架构的本质区别，以及各自的适用场景与成本模型。",
                        keyPoints: [
                            "单租户为每个客户部署独立实例，多租户用一个实例服务所有客户。",
                            "多租户在运维效率和成本上优势明显，但需要额外的隔离和安全设计。",
                            "架构选择取决于客户需求：企业大客户偏好单租户隔离，中小客户适合多租户共享。",
                        ],
                        resources: [
                            { title: "AWS SaaS Architecture Fundamentals", url: "https://docs.aws.amazon.com/whitepapers/latest/saas-architecture-fundamentals/re-defining-multi-tenancy.html" },
                            { title: "Azure SaaS and Multitenant Architecture", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/saas-multitenant-solution-architecture/" },
                            { title: "AWS Multi-Tenant Guidance", url: "https://aws.amazon.com/solutions/guidance/multi-tenant-architectures-on-aws/" },
                        ],
                    },
                    {
                        id: "w1-2",
                        title: "多租户的业务价值与 TCO 分析",
                        detail: "理解多租户如何降低总拥有成本（TCO），以及 SaaS 商业模式的经济学基础。",
                        keyPoints: [
                            "多租户通过共享基础设施大幅降低单客户运维成本，实现规模经济效应。",
                            "TCO 分析需考虑基础设施、运维人力、升级部署、监控告警等多个维度。",
                            "SaaS 商业模式的核心是将固定成本转化为边际成本递减的规模效应。",
                        ],
                        resources: [
                            { title: "SaaS Economics - Scaling to $100M", url: "https://www.bvp.com/atlas/scaling-to-100-million" },
                            { title: "AWS SaaS Cost Allocation", url: "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/expenditure-awareness.html" },
                            { title: "16 Startup Metrics - a16z", url: "https://a16z.com/16-startup-metrics/" },
                        ],
                    },
                    {
                        id: "w1-3",
                        title: "多租户核心挑战概览",
                        detail: "全面了解多租户架构面临的技术挑战：数据隔离、性能隔离、定制化、合规性等。",
                        keyPoints: [
                            "数据隔离是最基本的挑战：确保租户 A 绝不能看到租户 B 的数据。",
                            "性能隔离防止「吵闹邻居」问题：一个租户的高负载不能影响其他租户。",
                            "定制化需求与标准化之间的平衡：过度定制会抵消多租户的成本优势。",
                        ],
                        resources: [
                            { title: "Azure Tenancy Models", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/tenancy-models" },
                            { title: "AWS Tenant Isolation", url: "https://docs.aws.amazon.com/whitepapers/latest/saas-architecture-fundamentals/tenant-isolation.html" },
                            { title: "OWASP Cloud Tenant Isolation", url: "https://owasp.org/www-project-cloud-tenant-isolation/" },
                        ],
                    },
                    {
                        id: "w1-4",
                        title: "多租户架构决策框架",
                        detail: "建立多租户架构决策的评估框架，根据业务需求选择合适的隔离级别。",
                        keyPoints: [
                            "决策框架需综合考虑合规要求、性能 SLA、成本预算和团队能力。",
                            "从低隔离开始、按需升级是常见策略，避免过度设计初始架构。",
                            "不同组件可采用不同的隔离级别：计算层共享、数据层隔离是常见模式。",
                        ],
                        resources: [
                            { title: "AWS Tenant Isolation Mindset", url: "https://docs.aws.amazon.com/whitepapers/latest/saas-tenant-isolation-strategies/the-isolation-mindset.html" },
                            { title: "Azure Multitenant Approaches", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/overview" },
                            { title: "Distributed Systems Patterns", url: "https://martinfowler.com/articles/patterns-of-distributed-systems/" },
                        ],
                    },
                ],
            },
            {
                id: "w2",
                title: "第 2 周：租户隔离模型",
                summary: "掌握三种主要的租户隔离模型及其权衡。",
                overview: "隔离级别是多租户架构最关键的决策。本周深入理解三种隔离模型：池化（Pooled）、孤岛（Silo）、桥接（Bridge），以及如何根据业务需求选择。",
                keyPoints: [
                    "池化模型（Pooled）：所有租户共享所有资源，成本最低但隔离最弱。",
                    "孤岛模型（Silo）：每个租户独立资源，隔离最强但成本最高。",
                    "桥接模型（Bridge）：混合模式，部分资源共享、部分隔离，平衡成本与隔离。",
                ],
                lessons: [
                    {
                        id: "w2-1",
                        title: "池化模型：共享一切",
                        detail: "深入理解池化模型的架构设计、数据隔离实现、适用场景与风险。",
                        keyPoints: [
                            "池化模型中所有租户共享计算、存储和网络资源，通过逻辑隔离保护数据。",
                            "行级安全策略（RLS）是池化模型中最常用的数据隔离手段。",
                            "池化模型适合租户数量多、单租户数据量小、合规要求不高的场景。",
                        ],
                        resources: [
                            { title: "Azure SaaS Tenancy Patterns", url: "https://learn.microsoft.com/en-us/azure/azure-sql/database/saas-tenancy-app-design-patterns?view=azuresql" },
                            { title: "PostgreSQL Row-Level Security", url: "https://www.postgresql.org/docs/current/ddl-rowsecurity.html" },
                            { title: "AWS Silo Pool Bridge Models", url: "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/silo-pool-and-bridge-models.html" },
                        ],
                    },
                    {
                        id: "w2-2",
                        title: "孤岛模型：完全隔离",
                        detail: "掌握孤岛模型的架构设计、资源管理、适用场景（如金融/医疗等强合规领域）。",
                        keyPoints: [
                            "孤岛模型为每个租户提供完全独立的资源栈，实现最强隔离。",
                            "资源管理是孤岛模型的核心挑战：需要自动化的租户环境创建和销毁。",
                            "金融、医疗等强合规行业通常要求孤岛模型以满足数据驻留和审计要求。",
                        ],
                        resources: [
                            { title: "AWS Silo Isolation", url: "https://docs.aws.amazon.com/whitepapers/latest/saas-tenant-isolation-strategies/silo-isolation.html" },
                            { title: "Azure Multitenant Approaches", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/overview" },
                            { title: "AWS Full Stack Isolation", url: "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/full-stack-isolation.html" },
                        ],
                    },
                    {
                        id: "w2-3",
                        title: "桥接模型：混合隔离",
                        detail: "理解桥接模型如何在成本与隔离之间取得平衡，以及不同层的隔离策略。",
                        keyPoints: [
                            "桥接模型按资源类型混合使用池化和孤岛策略，兼顾成本与隔离。",
                            "常见模式：共享计算层（API Gateway/应用服务）+ 隔离数据层（独立数据库）。",
                            "可按租户层级分层隔离：免费租户用池化、付费租户用桥接、企业租户用孤岛。",
                        ],
                        resources: [
                            { title: "AWS Tier-Based Isolation", url: "https://docs.aws.amazon.com/whitepapers/latest/saas-tenant-isolation-strategies/tier-based-isolation.html" },
                            { title: "Azure Storage Data Approaches", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/storage-data" },
                            { title: "AWS Tiered Deployment Model", url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/saas-multitenant-api-access-authorization/avp-design-tiered.html" },
                        ],
                    },
                    {
                        id: "w2-4",
                        title: "隔离模型选择决策树",
                        detail: "建立隔离模型选择的决策框架，根据合规、性能、成本等因素选择最优方案。",
                        keyPoints: [
                            "决策树从合规要求出发：强合规直接选孤岛，弱合规再考虑成本因素。",
                            "性能 SLA 是第二考虑因素：高 SLA 倾向孤岛或桥接，低 SLA 可用池化。",
                            "隔离模型不是一成不变的：系统应设计为可从池化逐步迁移到孤岛模型。",
                        ],
                        resources: [
                            { title: "Azure Tenancy Models", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/tenancy-models" },
                            { title: "AWS Runtime Policy Isolation", url: "https://docs.aws.amazon.com/whitepapers/latest/saas-tenant-isolation-strategies/run-time-policy-based-isolation-with-iam.html" },
                            { title: "AWS Pool Isolation Policies", url: "https://docs.aws.amazon.com/whitepapers/latest/saas-tenant-isolation-strategies/scaling-and-managing-pool-isolation-policies.html" },
                        ],
                    },
                ],
            },
            {
                id: "w3",
                title: "第 3 周：租户标识与上下文传播",
                summary: "掌握租户身份识别与上下文在系统中的传播机制。",
                overview: "租户标识是多租户系统的基础。本周从租户识别、上下文注入、跨服务传播，到审计追踪，建立完整的租户上下文管理体系。",
                keyPoints: [
                    "租户识别：子域名、路径、Header、Token 等多种识别方式及其优劣。",
                    "上下文注入：请求入口处解析并注入租户上下文，确保后续处理可访问。",
                    "跨服务传播：微服务架构中租户上下文的传递（Header/Context/Baggage）。",
                ],
                lessons: [
                    {
                        id: "w3-1",
                        title: "租户识别策略",
                        detail: "深入理解子域名、URL 路径、HTTP Header、JWT Claim 等租户识别方式的实现与权衡。",
                        keyPoints: [
                            "子域名方式（tenant.app.com）最直观，但需要通配符 SSL 和 DNS 管理。",
                            "URL 路径方式（app.com/tenant）实现简单，但路由冲突和 SEO 需额外处理。",
                            "JWT Claim 方式将租户信息嵌入令牌，适合 API 优先和微服务架构。",
                        ],
                        resources: [
                            { title: "Tenant Resolution Strategies", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/tenant-resolution" },
                            { title: "Subdomain Routing", url: "https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks/" },
                            { title: "JWT Tenant Claims", url: "https://auth0.com/docs/manage-users/access-control/multi-tenant-applications" },
                        ],
                    },
                    {
                        id: "w3-2",
                        title: "租户上下文管理",
                        detail: "掌握租户上下文的存储、访问与生命周期管理，以及线程安全与异步处理的注意事项。",
                        keyPoints: [
                            "租户上下文应在请求入口（中间件/过滤器）统一解析并注入，后续代码透明使用。",
                            "线程安全是关键：使用 ThreadLocal 或请求作用域存储租户上下文。",
                            "异步处理（线程池、消息队列）中需要显式传递租户上下文，避免丢失。",
                        ],
                        resources: [
                            { title: "Request Context Pattern", url: "https://www.baeldung.com/spring-request-response-body" },
                            { title: "Thread-Local Storage", url: "https://docs.oracle.com/javase/8/docs/api/java/lang/ThreadLocal.html" },
                            { title: "Async Context Propagation", url: "https://projectreactor.io/docs/core/release/reference/#context" },
                        ],
                    },
                    {
                        id: "w3-3",
                        title: "跨服务租户上下文传播",
                        detail: "理解微服务架构中租户上下文的传递机制：HTTP Header、gRPC Metadata、消息 Header。",
                        keyPoints: [
                            "HTTP Header（如 X-Tenant-ID）是微服务间传递租户上下文的最常用方式。",
                            "gRPC Metadata 和消息队列 Header 是非 HTTP 协议的上下文传递机制。",
                            "分布式追踪中可使用 OpenTelemetry Baggage 自动传播租户标识。",
                        ],
                        resources: [
                            { title: "Context Propagation in Microservices", url: "https://www.w3.org/TR/trace-context/" },
                            { title: "gRPC Metadata", url: "https://grpc.io/docs/guides/metadata/" },
                            { title: "Kafka Headers", url: "https://kafka.apache.org/documentation/#recordheader" },
                        ],
                    },
                    {
                        id: "w3-4",
                        title: "租户审计与追踪",
                        detail: "掌握多租户系统的审计日志设计、租户级别追踪与合规性报告生成。",
                        keyPoints: [
                            "审计日志必须包含租户标识，记录谁在何时对什么数据做了什么操作。",
                            "租户级别的追踪和监控帮助快速定位特定租户的问题和性能瓶颈。",
                            "合规性报告（如 SOC 2）需要证明租户数据隔离和访问控制的有效性。",
                        ],
                        resources: [
                            { title: "Multi-Tenant Audit Logging", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/audit-logs" },
                            { title: "OpenTelemetry Baggage", url: "https://opentelemetry.io/docs/concepts/signals/baggage/" },
                            { title: "SOC 2 Compliance", url: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome" },
                        ],
                    },
                ],
            },
            {
                id: "w4",
                title: "第 4 周：多租户安全基础",
                summary: "建立多租户系统的安全防护体系与访问控制机制。",
                overview: "安全是多租户架构的生命线。本周从身份认证、授权模型、数据安全到威胁防护，构建多层安全防护体系。",
                keyPoints: [
                    "身份认证：多租户 IdP 集成、SAML/OIDC、企业 SSO、租户专属认证。",
                    "授权模型：RBAC/ABAC 在多租户场景的应用、租户级别权限管理。",
                    "数据安全：租户数据隔离验证、加密策略、密钥管理。",
                ],
                lessons: [
                    {
                        id: "w4-1",
                        title: "多租户身份认证",
                        detail: "深入理解多租户身份认证的挑战与解决方案：IdP 集成、租户专属域名、企业 SSO。",
                        keyPoints: [
                            "多租户认证需支持多种 IdP：自建认证、OAuth/OIDC、企业 SAML SSO。",
                            "租户专属域名和登录页面提升企业客户体验，但增加了路由和证书管理复杂度。",
                            "用户可能属于多个租户：需要租户切换机制和跨租户身份关联。",
                        ],
                        resources: [
                            { title: "Multi-Tenant Identity", url: "https://auth0.com/docs/manage-users/access-control/multi-tenant-applications" },
                            { title: "Azure AD Multi-Tenant", url: "https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-convert-app-to-be-multi-tenant" },
                            { title: "Enterprise SSO Integration", url: "https://www.okta.com/blog/2020/03/enterprise-sso-integration-guide/" },
                        ],
                    },
                    {
                        id: "w4-2",
                        title: "多租户授权模型",
                        detail: "掌握 RBAC/ABAC 在多租户场景的设计，包括租户角色、跨租户访问控制。",
                        keyPoints: [
                            "多租户 RBAC 中角色定义分为全局角色（平台管理员）和租户角色（租户管理员）。",
                            "ABAC 支持更细粒度的访问控制：基于租户属性、资源标签和环境条件动态决策。",
                            "跨租户访问控制需要严格防护：默认拒绝一切跨租户请求，白名单例外。",
                        ],
                        resources: [
                            { title: "Multi-Tenant RBAC", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/identity-authorization" },
                            { title: "ABAC Policy Design", url: "https://aws.amazon.com/blogs/apn/isolating-saas-tenants-with-dynamically-generated-iam-policies/" },
                            { title: "SpiceDB Multi-Tenancy", url: "https://authzed.com/docs/guides/multi-tenancy" },
                        ],
                    },
                    {
                        id: "w4-3",
                        title: "租户数据加密与密钥管理",
                        detail: "理解多租户数据加密策略：租户专属密钥、密钥层级、密钥轮换、BYOK。",
                        keyPoints: [
                            "租户专属密钥（Per-Tenant Key）确保即使数据泄露也无法跨租户解密。",
                            "信封加密分层管理：主密钥保护数据密钥，数据密钥加密实际数据。",
                            "BYOK 让企业客户自带加密密钥，满足最严格的数据主权和合规要求。",
                        ],
                        resources: [
                            { title: "Tenant Encryption Keys", url: "https://aws.amazon.com/blogs/security/how-to-use-customer-managed-keys-in-aws-key-management-service-to-secure-multi-tenant-saas-applications/" },
                            { title: "Envelope Encryption", url: "https://cloud.google.com/kms/docs/envelope-encryption" },
                            { title: "BYOK (Bring Your Own Key)", url: "https://docs.microsoft.com/en-us/azure/key-vault/keys/byok-specification" },
                        ],
                    },
                    {
                        id: "w4-4",
                        title: "多租户安全威胁与防护",
                        detail: "了解多租户特有的安全威胁（租户间泄露、提权）及防护措施。",
                        keyPoints: [
                            "租户间数据泄露是最严重的威胁：缺失的 WHERE 条件可能导致跨租户查询。",
                            "租户提权攻击通过篡改租户标识获取其他租户权限，需在多层验证身份。",
                            "定期进行租户隔离渗透测试，使用自动化工具验证数据隔离策略的有效性。",
                        ],
                        resources: [
                            { title: "Multi-Tenant Security Threats", url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/10-Business_Logic_Testing/09-Test_Upload_of_Malicious_Files" },
                            { title: "Tenant Isolation Testing", url: "https://aws.amazon.com/blogs/apn/isolating-saas-tenants-with-dynamically-generated-iam-policies/" },
                            { title: "SaaS Security Checklist", url: "https://www.csaasia.org/saas-security-checklist/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase2",
        title: "第二阶段：数据层多租户设计",
        duration: "第 5-8 周",
        goal: "掌握数据库层的多租户隔离策略、分片设计与数据迁移。",
        weeks: [
            {
                id: "w5",
                title: "第 5 周：数据库多租户模式",
                summary: "深入理解三种数据库多租户模式及其实现。",
                overview: "数据库是多租户架构的核心。本周从独立数据库、共享数据库独立 Schema、共享表三种模式出发，掌握各自的实现与运维要点。",
                keyPoints: [
                    "独立数据库：每租户一个数据库实例，隔离最强、成本最高。",
                    "共享数据库独立 Schema：共享实例但 Schema 隔离，平衡成本与隔离。",
                    "共享表：所有租户共享表，通过 tenant_id 字段隔离，成本最低。",
                ],
                lessons: [
                    {
                        id: "w5-1",
                        title: "独立数据库模式",
                        detail: "掌握独立数据库模式的架构设计、连接管理、资源配置与自动化运维。",
                        resources: [
                            { title: "Database per Tenant", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/database-per-tenant" },
                            { title: "Connection Pooling Strategies", url: "https://www.pgbouncer.org/" },
                            { title: "Automated Database Provisioning", url: "https://aws.amazon.com/blogs/database/multi-tenant-data-isolation-with-amazon-rds-for-postgresql/" },
                        ],
                    },
                    {
                        id: "w5-2",
                        title: "共享数据库独立 Schema 模式",
                        detail: "理解 Schema 隔离的实现方式、连接切换、Schema 自动创建与迁移。",
                        resources: [
                            { title: "Schema per Tenant", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/schema-per-tenant" },
                            { title: "PostgreSQL Schemas", url: "https://www.postgresql.org/docs/current/ddl-schemas.html" },
                            { title: "Flyway Multi-Schema", url: "https://flywaydb.org/documentation/concepts/callbacks#schema-based-callbacks" },
                        ],
                    },
                    {
                        id: "w5-3",
                        title: "共享表模式与行级安全",
                        detail: "掌握共享表模式的设计、tenant_id 索引优化、行级安全策略实现。",
                        resources: [
                            { title: "Shared Table Multi-Tenancy", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/multi-tenancy-database" },
                            { title: "PostgreSQL Row Level Security", url: "https://www.postgresql.org/docs/current/ddl-rowsecurity.html" },
                            { title: "MySQL Virtual Columns", url: "https://dev.mysql.com/doc/refman/8.0/en/create-table-generated-columns.html" },
                        ],
                    },
                    {
                        id: "w5-4",
                        title: "数据库模式选择与迁移策略",
                        detail: "建立数据库模式选择的决策框架，以及从一种模式迁移到另一种的策略。",
                        resources: [
                            { title: "Choosing Database Tenancy", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/choose-tenancy-model#database-tenancy" },
                            { title: "Tenant Migration Strategies", url: "https://aws.amazon.com/blogs/database/migrating-a-multi-tenant-database/" },
                            { title: "Zero-Downtime Migration", url: "https://github.com/github/gh-ost" },
                        ],
                    },
                ],
            },
            {
                id: "w6",
                title: "第 6 周：多租户数据分片",
                summary: "掌握基于租户的数据分片策略与路由机制。",
                overview: "当单机数据库无法承载时，分片是必经之路。本周从租户级分片、哈希分片到混合策略，理解多租户场景的数据分布设计。",
                keyPoints: [
                    "租户级分片：按租户 ID 分片，同一租户数据在同一分片，简化查询但可能不均衡。",
                    "哈希分片：跨租户均匀分布，但同一租户数据可能分散在多个分片。",
                    "混合策略：大租户独立分片、小租户共享分片，平衡隔离与资源利用。",
                ],
                lessons: [
                    {
                        id: "w6-1",
                        title: "租户级分片策略",
                        detail: "深入理解按租户 ID 分片的设计、租户与分片的映射关系、热点租户处理。",
                        resources: [
                            { title: "Tenant-Based Sharding", url: "https://vitess.io/docs/concepts/shard/" },
                            { title: "Citus Multi-Tenant Sharding", url: "https://docs.citusdata.com/en/stable/develop/multi_tenant_apps.html" },
                            { title: "Hot Tenant Isolation", url: "https://aws.amazon.com/blogs/database/sharding-with-amazon-relational-database-service/" },
                        ],
                    },
                    {
                        id: "w6-2",
                        title: "分片路由与中间件",
                        detail: "掌握分片路由的实现方式：客户端路由、代理层路由、中间件（Vitess/ShardingSphere）。",
                        resources: [
                            { title: "Vitess VTGate", url: "https://vitess.io/docs/concepts/vtgate/" },
                            { title: "ShardingSphere", url: "https://shardingsphere.apache.org/document/current/en/overview/" },
                            { title: "ProxySQL Sharding", url: "https://proxysql.com/documentation/sharding/" },
                        ],
                    },
                    {
                        id: "w6-3",
                        title: "跨分片查询与聚合",
                        detail: "理解跨分片查询的挑战、Scatter-Gather 模式、全局表与广播表的应用。",
                        resources: [
                            { title: "Cross-Shard Queries", url: "https://vitess.io/docs/concepts/query-routing/" },
                            { title: "Reference Tables", url: "https://docs.citusdata.com/en/stable/develop/reference_data.html" },
                            { title: "Global Secondary Index", url: "https://aws.amazon.com/blogs/database/implement-global-secondary-index-with-amazon-dynamodb/" },
                        ],
                    },
                    {
                        id: "w6-4",
                        title: "分片再平衡与租户迁移",
                        detail: "掌握分片再平衡的策略、租户在线迁移、数据一致性保证。",
                        resources: [
                            { title: "Vitess Resharding", url: "https://vitess.io/docs/user-guides/migration/move-tables/" },
                            { title: "Online Tenant Migration", url: "https://docs.citusdata.com/en/stable/admin_guide/cluster_management.html#tenant-isolation" },
                            { title: "Change Data Capture", url: "https://debezium.io/documentation/reference/stable/tutorial.html" },
                        ],
                    },
                ],
            },
            {
                id: "w7",
                title: "第 7 周：多租户缓存设计",
                summary: "构建多租户缓存架构，实现缓存隔离与资源公平分配。",
                overview: "缓存是性能优化的关键，但在多租户场景下需要考虑隔离与公平性。本周从缓存键设计到资源限制，建立多租户缓存最佳实践。",
                keyPoints: [
                    "缓存键设计：租户前缀策略、避免键冲突、缓存键规范化。",
                    "缓存隔离：逻辑隔离（键前缀）vs 物理隔离（独立实例/集群）。",
                    "资源公平：租户级配额、内存限制、驱逐策略。",
                ],
                lessons: [
                    {
                        id: "w7-1",
                        title: "多租户缓存键设计",
                        detail: "掌握多租户缓存键的命名规范、前缀策略、版本控制与失效管理。",
                        resources: [
                            { title: "Redis Key Naming", url: "https://redis.io/docs/latest/develop/use/keyspace/" },
                            { title: "Cache Key Design", url: "https://aws.amazon.com/blogs/database/best-practices-for-amazon-elasticache-for-redis/" },
                            { title: "Cache Invalidation Patterns", url: "https://martinfowler.com/bliki/TwoHardThings.html" },
                        ],
                    },
                    {
                        id: "w7-2",
                        title: "缓存隔离策略",
                        detail: "理解逻辑隔离与物理隔离的权衡，以及不同租户层级的缓存策略。",
                        resources: [
                            { title: "Redis Multi-Tenancy", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/" },
                            { title: "ElastiCache Isolation", url: "https://aws.amazon.com/blogs/database/isolating-saas-tenant-data-using-amazon-elasticache-for-redis/" },
                            { title: "Tenant Cache Partitioning", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside" },
                        ],
                    },
                    {
                        id: "w7-3",
                        title: "租户级缓存配额",
                        detail: "掌握租户级缓存资源限制的实现：内存配额、命中率监控、公平驱逐。",
                        resources: [
                            { title: "Redis Memory Management", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/memory-optimization/" },
                            { title: "Cache Quota Enforcement", url: "https://aws.amazon.com/blogs/database/monitoring-best-practices-with-amazon-elasticache-for-redis-using-amazon-cloudwatch/" },
                            { title: "LRU with Tenant Awareness", url: "https://redis.io/docs/latest/develop/reference/eviction/" },
                        ],
                    },
                    {
                        id: "w7-4",
                        title: "分布式缓存与多租户",
                        detail: "理解 Redis Cluster 在多租户场景的设计、跨租户热点处理、缓存穿透防护。",
                        resources: [
                            { title: "Redis Cluster Multi-Tenant", url: "https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/" },
                            { title: "Hot Key Detection", url: "https://redis.io/docs/latest/commands/object-freq/" },
                            { title: "Bloom Filter Protection", url: "https://redis.io/docs/latest/develop/data-types/probabilistic/bloom-filter/" },
                        ],
                    },
                ],
            },
            {
                id: "w8",
                title: "第 8 周：多租户数据合规与隐私",
                summary: "理解多租户数据合规要求，实现数据隐私保护与审计能力。",
                overview: "数据合规是 SaaS 产品的准入门槛。本周从 GDPR、数据本地化到审计追踪，构建合规的多租户数据处理体系。",
                keyPoints: [
                    "GDPR 合规：数据主体权利、数据可携带性、被遗忘权在多租户系统的实现。",
                    "数据本地化：区域隔离、跨境传输、数据驻留策略。",
                    "审计追踪：数据访问日志、变更记录、合规报告生成。",
                ],
                lessons: [
                    {
                        id: "w8-1",
                        title: "GDPR 与多租户数据处理",
                        detail: "深入理解 GDPR 要求在多租户系统的落地：数据处理协议、子处理者管理、数据主体请求处理。",
                        resources: [
                            { title: "GDPR for SaaS", url: "https://gdpr.eu/what-is-gdpr/" },
                            { title: "Data Processing Agreement", url: "https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/accountability-and-governance/contracts/" },
                            { title: "Right to Erasure", url: "https://gdpr-info.eu/art-17-gdpr/" },
                        ],
                    },
                    {
                        id: "w8-2",
                        title: "数据本地化与区域部署",
                        detail: "掌握数据本地化要求的应对策略：区域数据库、跨区复制、租户区域路由。",
                        resources: [
                            { title: "Data Residency Patterns", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/multi-region" },
                            { title: "AWS Region Selection", url: "https://aws.amazon.com/blogs/security/how-to-address-data-residency-with-aws/" },
                            { title: "Cross-Border Data Transfer", url: "https://www.cloudflare.com/learning/privacy/cross-border-data-transfer/" },
                        ],
                    },
                    {
                        id: "w8-3",
                        title: "租户数据隔离验证",
                        detail: "理解如何验证租户数据隔离的有效性：自动化测试、渗透测试、合规审计。",
                        resources: [
                            { title: "Tenant Isolation Testing", url: "https://aws.amazon.com/blogs/apn/defining-tenant-isolation-strategies-for-saas-workloads/" },
                            { title: "Data Isolation Verification", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/tenant-isolation" },
                            { title: "Penetration Testing", url: "https://owasp.org/www-project-web-security-testing-guide/" },
                        ],
                    },
                    {
                        id: "w8-4",
                        title: "数据审计与合规报告",
                        detail: "掌握多租户审计日志设计、数据访问追踪、SOC 2/ISO 27001 合规报告生成。",
                        resources: [
                            { title: "Audit Logging Best Practices", url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html" },
                            { title: "SOC 2 for SaaS", url: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome" },
                            { title: "ISO 27001 Multi-Tenant", url: "https://www.iso.org/isoiec-27001-information-security.html" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase3",
        title: "第三阶段：应用层多租户实现",
        duration: "第 9-12 周",
        goal: "掌握应用层的多租户实现模式、配置管理与定制化能力。",
        weeks: [
            {
                id: "w9",
                title: "第 9 周：多租户应用架构",
                summary: "设计多租户应用的架构模式与部署策略。",
                overview: "应用层是多租户的核心实现层。本周从单体到微服务，理解不同架构风格下的多租户实现模式与演进路径。",
                keyPoints: [
                    "单体多租户：通过租户上下文实现隔离，简单但扩展受限。",
                    "微服务多租户：租户上下文跨服务传播，服务级别隔离策略。",
                    "Serverless 多租户：函数级别的租户隔离与资源限制。",
                ],
                lessons: [
                    {
                        id: "w9-1",
                        title: "单体应用多租户实现",
                        detail: "掌握单体应用的多租户实现：租户上下文管理、数据过滤、资源隔离。",
                        resources: [
                            { title: "Multi-Tenant Monolith", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/considerations" },
                            { title: "Spring Multi-Tenancy", url: "https://spring.io/blog/2022/07/31/how-to-integrate-hibernates-multitenant-feature-with-spring-data-jpa-in-a-spring-boot-application" },
                            { title: "Django Multi-Tenancy", url: "https://django-tenants.readthedocs.io/en/latest/" },
                        ],
                    },
                    {
                        id: "w9-2",
                        title: "微服务多租户架构",
                        detail: "理解微服务架构下的多租户设计：租户上下文传播、服务网格集成、租户级路由。",
                        resources: [
                            { title: "Multi-Tenant Microservices", url: "https://aws.amazon.com/blogs/apn/building-a-multi-tenant-saas-solution-using-amazon-eks/" },
                            { title: "Istio Multi-Tenancy", url: "https://istio.io/latest/docs/ops/deployment/deployment-models/#multiple-clusters" },
                            { title: "Context Propagation", url: "https://www.w3.org/TR/trace-context/" },
                        ],
                    },
                    {
                        id: "w9-3",
                        title: "Serverless 多租户设计",
                        detail: "掌握 Serverless 架构的多租户实现：函数隔离、冷启动优化、租户资源限制。",
                        resources: [
                            { title: "Serverless SaaS", url: "https://aws.amazon.com/blogs/apn/building-a-multi-tenant-saas-solution-using-aws-serverless-services/" },
                            { title: "Lambda Multi-Tenancy", url: "https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/multi-tenancy.html" },
                            { title: "Cold Start Optimization", url: "https://aws.amazon.com/blogs/compute/operating-lambda-performance-optimization-part-1/" },
                        ],
                    },
                    {
                        id: "w9-4",
                        title: "多租户架构演进",
                        detail: "理解从单租户到多租户、从单体到微服务的演进路径与迁移策略。",
                        resources: [
                            { title: "SaaS Architecture Evolution", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/considerations" },
                            { title: "Strangler Pattern", url: "https://martinfowler.com/bliki/StranglerFigApplication.html" },
                            { title: "Multi-Tenant Migration", url: "https://aws.amazon.com/blogs/apn/saas-migration-strategies/" },
                        ],
                    },
                ],
            },
            {
                id: "w10",
                title: "第 10 周：租户配置与功能开关",
                summary: "实现租户级别的配置管理与功能定制能力。",
                overview: "每个租户都有独特的需求。本周从配置管理、功能开关到动态策略，构建灵活的租户定制化能力。",
                keyPoints: [
                    "租户配置管理：配置层级（全局/租户/用户）、配置继承与覆盖。",
                    "功能开关：租户级 Feature Flag、灰度发布、A/B 测试。",
                    "动态策略：租户专属业务规则、规则引擎、配置热更新。",
                ],
                lessons: [
                    {
                        id: "w10-1",
                        title: "租户配置层级设计",
                        detail: "掌握多层配置架构的设计：全局默认、租户覆盖、用户偏好，以及配置合并策略。",
                        resources: [
                            { title: "Configuration Hierarchy", url: "https://12factor.net/config" },
                            { title: "Spring Cloud Config", url: "https://spring.io/projects/spring-cloud-config" },
                            { title: "Consul KV Store", url: "https://developer.hashicorp.com/consul/docs/dynamic-app-config/kv" },
                        ],
                    },
                    {
                        id: "w10-2",
                        title: "租户级功能开关",
                        detail: "理解功能开关在多租户场景的应用：租户级 Flag、灰度策略、回滚机制。",
                        resources: [
                            { title: "Feature Flags for SaaS", url: "https://launchdarkly.com/blog/feature-flags-for-saas/" },
                            { title: "Unleash Feature Toggles", url: "https://docs.getunleash.io/" },
                            { title: "Feature Flag Best Practices", url: "https://martinfowler.com/articles/feature-toggles.html" },
                        ],
                    },
                    {
                        id: "w10-3",
                        title: "租户定制化与扩展点",
                        detail: "掌握租户定制化的实现模式：配置驱动、插件架构、Webhook 扩展。",
                        resources: [
                            { title: "Plugin Architecture", url: "https://www.martinfowler.com/articles/patterns-of-distributed-systems/single-socket-channel.html" },
                            { title: "Webhook Design", url: "https://docs.github.com/en/developers/webhooks-and-events/webhooks" },
                            { title: "Customization Patterns", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/customize-tenant" },
                        ],
                    },
                    {
                        id: "w10-4",
                        title: "配置热更新与版本管理",
                        detail: "理解配置热更新的实现、配置版本控制、配置变更审计。",
                        resources: [
                            { title: "Dynamic Configuration", url: "https://netflix.github.io/archaius/" },
                            { title: "Config Versioning", url: "https://www.hashicorp.com/blog/managing-secrets-with-vault-and-consul" },
                            { title: "GitOps for Config", url: "https://www.gitops.tech/" },
                        ],
                    },
                ],
            },
            {
                id: "w11",
                title: "第 11 周：多租户 API 设计",
                summary: "设计多租户 API 的接口规范、版本管理与限流策略。",
                overview: "API 是多租户系统对外的窗口。本周从 API 设计、版本管理到租户级限流，构建高质量的多租户 API。",
                keyPoints: [
                    "租户 API 设计：URL 结构（租户前缀 vs Header）、资源归属、跨租户访问控制。",
                    "API 版本管理：租户级版本策略、向后兼容、废弃与迁移。",
                    "租户级限流：配额管理、限流策略、超限处理。",
                ],
                lessons: [
                    {
                        id: "w11-1",
                        title: "多租户 API URL 设计",
                        detail: "掌握多租户 API 的 URL 设计模式、租户标识传递、资源访问控制。",
                        resources: [
                            { title: "Multi-Tenant API Design", url: "https://cloud.google.com/apis/design/resources#multi-tenancy" },
                            { title: "REST API Multi-Tenancy", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/api-design" },
                            { title: "API Security Best Practices", url: "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html" },
                        ],
                    },
                    {
                        id: "w11-2",
                        title: "租户级 API 版本管理",
                        detail: "理解多租户场景的 API 版本策略、租户级版本固定、平滑迁移。",
                        resources: [
                            { title: "API Versioning Strategies", url: "https://www.postman.com/api-platform/api-versioning/" },
                            { title: "Stripe API Versioning", url: "https://stripe.com/docs/api/versioning" },
                            { title: "Backward Compatibility", url: "https://cloud.google.com/apis/design/compatibility" },
                        ],
                    },
                    {
                        id: "w11-3",
                        title: "租户级 API 限流",
                        detail: "掌握租户级 API 限流的设计与实现：配额分配、限流算法、超限响应。",
                        resources: [
                            { title: "API Rate Limiting", url: "https://blog.bytebytego.com/p/rate-limiting-fundamentals" },
                            { title: "Tenant Quota Management", url: "https://cloud.google.com/docs/quota" },
                            { title: "Redis Rate Limiting", url: "https://redis.io/glossary/rate-limiting/" },
                        ],
                    },
                    {
                        id: "w11-4",
                        title: "API 网关多租户集成",
                        detail: "理解 API 网关在多租户架构中的角色：租户路由、认证集成、流量管理。",
                        resources: [
                            { title: "Kong Multi-Tenancy", url: "https://docs.konghq.com/gateway/latest/production/deployment-topologies/multi-tenancy/" },
                            { title: "AWS API Gateway", url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-to-api.html" },
                            { title: "APISIX Multi-Tenant", url: "https://apisix.apache.org/docs/apisix/terminology/consumer/" },
                        ],
                    },
                ],
            },
            {
                id: "w12",
                title: "第 12 周：多租户消息与事件",
                summary: "设计多租户消息队列与事件驱动架构。",
                overview: "异步处理是现代架构的核心。本周从消息隔离、事件设计到租户级订阅，构建多租户事件驱动架构。",
                keyPoints: [
                    "消息隔离：Topic/Queue 隔离策略、消息路由、租户标识传递。",
                    "事件设计：租户事件模型、事件版本、跨租户事件处理。",
                    "订阅管理：租户级订阅、Webhook 推送、事件过滤。",
                ],
                lessons: [
                    {
                        id: "w12-1",
                        title: "多租户消息队列设计",
                        detail: "掌握多租户消息队列的隔离策略：独立 Topic、共享 Topic 分区、消息头标识。",
                        resources: [
                            { title: "Kafka Multi-Tenancy", url: "https://docs.confluent.io/platform/current/multi-tenancy/overview.html" },
                            { title: "RabbitMQ Virtual Hosts", url: "https://www.rabbitmq.com/docs/vhosts" },
                            { title: "SQS Multi-Tenant", url: "https://aws.amazon.com/blogs/compute/building-multi-tenant-saas-with-amazon-sqs/" },
                        ],
                    },
                    {
                        id: "w12-2",
                        title: "租户事件模型设计",
                        detail: "理解多租户事件的设计原则：事件结构、租户归属、事件溯源。",
                        resources: [
                            { title: "CloudEvents Specification", url: "https://cloudevents.io/" },
                            { title: "Event Sourcing Multi-Tenant", url: "https://docs.axoniq.io/reference-guide/axon-framework/platform-integration/multi-tenancy" },
                            { title: "Event Versioning", url: "https://www.eventstore.com/blog/versioning-events" },
                        ],
                    },
                    {
                        id: "w12-3",
                        title: "租户 Webhook 与事件推送",
                        detail: "掌握租户级 Webhook 的设计与实现：订阅管理、重试策略、签名验证。",
                        resources: [
                            { title: "Webhook Design", url: "https://docs.github.com/en/developers/webhooks-and-events/webhooks" },
                            { title: "Webhook Security", url: "https://stripe.com/docs/webhooks/signatures" },
                            { title: "Webhook Retry Strategy", url: "https://docs.svix.com/receiving/verifying-payloads/how" },
                        ],
                    },
                    {
                        id: "w12-4",
                        title: "事件驱动多租户架构",
                        detail: "理解事件驱动架构在多租户场景的应用：事件总线、Saga 模式、最终一致性。",
                        resources: [
                            { title: "Event-Driven SaaS", url: "https://aws.amazon.com/blogs/compute/building-event-driven-architectures-with-amazon-sns-fifo/" },
                            { title: "Saga Pattern", url: "https://microservices.io/patterns/data/saga.html" },
                            { title: "EventBridge Multi-Tenant", url: "https://aws.amazon.com/blogs/compute/building-saas-applications-with-amazon-eventbridge/" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase4",
        title: "第四阶段：运维与可观测性",
        duration: "第 13-16 周",
        goal: "构建多租户系统的运维体系、监控告警与成本分摊机制。",
        weeks: [
            {
                id: "w13",
                title: "第 13 周：多租户监控与告警",
                summary: "设计租户级监控指标与告警策略。",
                overview: "监控是运维的眼睛。本周从租户维度指标、告警隔离到 SLA 监控，构建多租户可观测性体系。",
                keyPoints: [
                    "租户维度指标：在通用指标上增加租户标签，支持租户级聚合与分析。",
                    "告警隔离：避免单租户问题触发全局告警，租户级告警阈值。",
                    "SLA 监控：租户级 SLO 追踪、可用性报告、性能基线。",
                ],
                lessons: [
                    {
                        id: "w13-1",
                        title: "租户维度监控指标设计",
                        detail: "掌握多租户监控指标的设计：租户标签策略、高基数问题、指标聚合。",
                        resources: [
                            { title: "Multi-Tenant Metrics", url: "https://prometheus.io/docs/practices/naming/" },
                            { title: "High Cardinality Labels", url: "https://www.robustperception.io/cardinality-is-key" },
                            { title: "Tenant Metrics Aggregation", url: "https://grafana.com/blog/2022/10/20/how-to-manage-high-cardinality-metrics-in-prometheus-and-kubernetes/" },
                        ],
                    },
                    {
                        id: "w13-2",
                        title: "租户级告警策略",
                        detail: "理解多租户告警的设计：租户级阈值、告警路由、噪声控制。",
                        resources: [
                            { title: "Multi-Tenant Alerting", url: "https://prometheus.io/docs/alerting/latest/configuration/" },
                            { title: "Alert Routing", url: "https://prometheus.io/docs/alerting/latest/alertmanager/#routing-tree" },
                            { title: "PagerDuty SaaS Alerting", url: "https://www.pagerduty.com/resources/learn/call-rotations-schedules/" },
                        ],
                    },
                    {
                        id: "w13-3",
                        title: "租户 SLA/SLO 监控",
                        detail: "掌握租户级 SLO 的定义与监控：可用性计算、延迟分布、错误预算。",
                        resources: [
                            { title: "SLO for Multi-Tenant", url: "https://sre.google/sre-book/service-level-objectives/" },
                            { title: "Error Budget", url: "https://sre.google/workbook/error-budget-policy/" },
                            { title: "Tenant SLA Reporting", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/sla-slo" },
                        ],
                    },
                    {
                        id: "w13-4",
                        title: "租户健康度仪表盘",
                        detail: "设计租户健康度仪表盘：关键指标可视化、趋势分析、异常检测。",
                        resources: [
                            { title: "Grafana Multi-Tenant", url: "https://grafana.com/docs/grafana/latest/administration/manage-organizations/" },
                            { title: "Dashboard Best Practices", url: "https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/" },
                            { title: "Anomaly Detection", url: "https://prometheus.io/docs/prometheus/latest/querying/functions/#predict_linear" },
                        ],
                    },
                ],
            },
            {
                id: "w14",
                title: "第 14 周：多租户日志与追踪",
                summary: "构建租户级日志聚合与分布式追踪能力。",
                overview: "日志和追踪是故障排查的利器。本周从租户日志隔离到跨服务追踪，建立完整的诊断能力。",
                keyPoints: [
                    "日志隔离：租户级日志流、访问控制、敏感信息脱敏。",
                    "日志聚合：租户维度索引、查询优化、存储成本控制。",
                    "分布式追踪：租户上下文传播、跨服务关联、性能分析。",
                ],
                lessons: [
                    {
                        id: "w14-1",
                        title: "多租户日志架构",
                        detail: "掌握多租户日志的架构设计：租户标识注入、日志流隔离、访问控制。",
                        resources: [
                            { title: "Multi-Tenant Logging", url: "https://grafana.com/docs/loki/latest/operations/multi-tenancy/" },
                            { title: "Elasticsearch Multi-Tenancy", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/document-level-security.html" },
                            { title: "Log Access Control", url: "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html" },
                        ],
                    },
                    {
                        id: "w14-2",
                        title: "租户日志查询与分析",
                        detail: "理解租户级日志查询的优化：索引策略、查询模式、成本控制。",
                        resources: [
                            { title: "Loki Query Optimization", url: "https://grafana.com/docs/loki/latest/query/" },
                            { title: "Log Retention Policies", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/ilm-policy.html" },
                            { title: "Log Sampling", url: "https://opentelemetry.io/docs/concepts/sampling/" },
                        ],
                    },
                    {
                        id: "w14-3",
                        title: "多租户分布式追踪",
                        detail: "掌握租户级分布式追踪的实现：上下文传播、Trace 过滤、性能分析。",
                        resources: [
                            { title: "OpenTelemetry Multi-Tenant", url: "https://opentelemetry.io/docs/concepts/signals/traces/" },
                            { title: "Jaeger Multi-Tenancy", url: "https://www.jaegertracing.io/docs/latest/deployment/#multi-tenancy" },
                            { title: "Tenant Context Propagation", url: "https://www.w3.org/TR/baggage/" },
                        ],
                    },
                    {
                        id: "w14-4",
                        title: "租户故障诊断流程",
                        detail: "建立租户级故障诊断的标准流程：问题定位、根因分析、影响评估。",
                        resources: [
                            { title: "Incident Response", url: "https://sre.google/sre-book/managing-incidents/" },
                            { title: "Root Cause Analysis", url: "https://sre.google/workbook/postmortem-culture/" },
                            { title: "Tenant Impact Assessment", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/incident-management" },
                        ],
                    },
                ],
            },
            {
                id: "w15",
                title: "第 15 周：多租户资源管理",
                summary: "实现租户级资源配额、隔离与公平调度。",
                overview: "资源公平是多租户稳定性的保障。本周从资源配额、隔离策略到调度优化，确保租户间的公平与隔离。",
                keyPoints: [
                    "资源配额：CPU/内存/存储/网络的租户级限制与监控。",
                    "资源隔离：容器级隔离（cgroups）、网络隔离、存储隔离。",
                    "公平调度：租户优先级、资源抢占、Noisy Neighbor 防护。",
                ],
                lessons: [
                    {
                        id: "w15-1",
                        title: "租户资源配额设计",
                        detail: "掌握租户资源配额的设计与实施：配额类型、限制机制、超限处理。",
                        resources: [
                            { title: "Kubernetes Resource Quotas", url: "https://kubernetes.io/docs/concepts/policy/resource-quotas/" },
                            { title: "AWS Service Quotas", url: "https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html" },
                            { title: "Multi-Tenant Quotas", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/resource-management" },
                        ],
                    },
                    {
                        id: "w15-2",
                        title: "容器级租户隔离",
                        detail: "理解 Kubernetes 多租户隔离：Namespace 隔离、Network Policy、Pod Security。",
                        resources: [
                            { title: "K8s Multi-Tenancy", url: "https://kubernetes.io/docs/concepts/security/multi-tenancy/" },
                            { title: "Network Policies", url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/" },
                            { title: "Pod Security Standards", url: "https://kubernetes.io/docs/concepts/security/pod-security-standards/" },
                        ],
                    },
                    {
                        id: "w15-3",
                        title: "Noisy Neighbor 防护",
                        detail: "掌握嘈杂邻居问题的识别与防护：资源限制、QoS 策略、租户隔离增强。",
                        resources: [
                            { title: "Noisy Neighbor Problem", url: "https://docs.microsoft.com/en-us/azure/architecture/antipatterns/noisy-neighbor/" },
                            { title: "K8s QoS Classes", url: "https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/" },
                            { title: "Resource Isolation", url: "https://aws.amazon.com/blogs/containers/best-practices-for-running-multi-tenant-clusters-on-amazon-eks/" },
                        ],
                    },
                    {
                        id: "w15-4",
                        title: "租户资源弹性伸缩",
                        detail: "理解租户级弹性伸缩的实现：自动扩缩、资源预留、成本优化。",
                        resources: [
                            { title: "K8s Autoscaling", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/" },
                            { title: "Tenant Auto-Scaling", url: "https://aws.amazon.com/blogs/apn/scaling-multi-tenant-saas-applications-on-amazon-eks/" },
                            { title: "Cost Optimization", url: "https://aws.amazon.com/blogs/apn/calculating-cost-per-tenant-a-saas-lens-perspective/" },
                        ],
                    },
                ],
            },
            {
                id: "w16",
                title: "第 16 周：多租户计费与成本分摊",
                summary: "设计多租户计费模型与成本分摊机制。",
                overview: "计费是 SaaS 商业模式的核心。本周从计量、定价到成本分摊，构建完整的多租户计费体系。",
                keyPoints: [
                    "使用量计量：资源使用追踪、计量指标设计、计量数据存储。",
                    "定价模型：订阅制、按量计费、混合模式、租户层级定价。",
                    "成本分摊：共享资源成本分配、租户成本报告、利润分析。",
                ],
                lessons: [
                    {
                        id: "w16-1",
                        title: "租户使用量计量",
                        detail: "掌握使用量计量的设计与实现：计量指标、数据采集、聚合存储。",
                        resources: [
                            { title: "Usage Metering", url: "https://stripe.com/docs/billing/subscriptions/usage-based" },
                            { title: "Metering Architecture", url: "https://aws.amazon.com/blogs/apn/metering-and-billing-saas-offerings-on-aws/" },
                            { title: "AWS Cost Allocation", url: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html" },
                        ],
                    },
                    {
                        id: "w16-2",
                        title: "SaaS 定价模型设计",
                        detail: "理解 SaaS 定价策略：订阅制、按量计费、分层定价、自定义方案。",
                        resources: [
                            { title: "SaaS Pricing Models", url: "https://www.priceintelligently.com/blog/saas-pricing-models" },
                            { title: "Stripe Billing", url: "https://stripe.com/docs/billing" },
                            { title: "Usage-Based Pricing", url: "https://openviewpartners.com/blog/state-of-usage-based-pricing/" },
                        ],
                    },
                    {
                        id: "w16-3",
                        title: "租户成本分摊",
                        detail: "掌握共享资源成本分摊的方法：直接成本、间接成本、分摊算法。",
                        resources: [
                            { title: "Cost per Tenant", url: "https://aws.amazon.com/blogs/apn/calculating-cost-per-tenant-a-saas-lens-perspective/" },
                            { title: "Kubernetes Cost Allocation", url: "https://kubecost.com/" },
                            { title: "Cloud Cost Management", url: "https://www.finops.org/introduction/what-is-finops/" },
                        ],
                    },
                    {
                        id: "w16-4",
                        title: "计费系统集成",
                        detail: "理解计费系统的集成：订阅管理、发票生成、支付网关、税务处理。",
                        resources: [
                            { title: "Stripe Integration", url: "https://stripe.com/docs/billing/subscriptions/build-subscription" },
                            { title: "Invoice Generation", url: "https://stripe.com/docs/invoicing" },
                            { title: "SaaS Tax Compliance", url: "https://stripe.com/docs/tax" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "phase5",
        title: "第五阶段：高级主题与最佳实践",
        duration: "第 17-20 周",
        goal: "掌握多租户高级主题：多区域部署、性能优化、迁移策略与成熟度模型。",
        weeks: [
            {
                id: "w17",
                title: "第 17 周：多区域多租户架构",
                summary: "设计支持多区域部署的多租户架构。",
                overview: "全球化是 SaaS 的重要方向。本周从区域选择、数据同步到灾备策略，构建多区域多租户架构。",
                keyPoints: [
                    "区域部署策略：数据主权、延迟优化、成本考量。",
                    "跨区数据同步：异步复制、冲突解决、最终一致性。",
                    "灾备与故障转移：区域故障检测、流量切换、数据恢复。",
                ],
                lessons: [
                    {
                        id: "w17-1",
                        title: "多区域部署策略",
                        detail: "掌握多区域部署的决策框架：数据主权、延迟要求、成本优化。",
                        resources: [
                            { title: "Multi-Region Architecture", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/multi-region" },
                            { title: "AWS Global Infrastructure", url: "https://aws.amazon.com/about-aws/global-infrastructure/" },
                            { title: "Data Sovereignty", url: "https://aws.amazon.com/blogs/security/how-to-address-data-residency-with-aws/" },
                        ],
                    },
                    {
                        id: "w17-2",
                        title: "跨区域数据同步",
                        detail: "理解跨区域数据同步的挑战与解决方案：复制策略、冲突解决、一致性权衡。",
                        resources: [
                            { title: "Cross-Region Replication", url: "https://aws.amazon.com/blogs/database/cross-region-read-replicas-for-amazon-rds-for-postgresql/" },
                            { title: "CockroachDB Multi-Region", url: "https://www.cockroachlabs.com/docs/stable/multiregion-overview.html" },
                            { title: "Conflict Resolution", url: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf" },
                        ],
                    },
                    {
                        id: "w17-3",
                        title: "租户区域路由",
                        detail: "掌握租户级区域路由的实现：DNS 路由、负载均衡器路由、应用层路由。",
                        resources: [
                            { title: "Route 53 Geolocation", url: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html" },
                            { title: "Global Load Balancing", url: "https://cloud.google.com/load-balancing/docs/https/cross-region-example" },
                            { title: "Tenant Region Affinity", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/tenant-routing" },
                        ],
                    },
                    {
                        id: "w17-4",
                        title: "多区域灾备策略",
                        detail: "设计多租户系统的灾备策略：故障检测、流量切换、数据恢复、RTO/RPO 保证。",
                        resources: [
                            { title: "Disaster Recovery", url: "https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-i-strategies-for-recovery-in-the-cloud/" },
                            { title: "Multi-Region Failover", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/disaster-recovery" },
                            { title: "RPO/RTO Planning", url: "https://aws.amazon.com/blogs/architecture/selecting-the-right-disaster-recovery-strategy-for-your-workload/" },
                        ],
                    },
                ],
            },
            {
                id: "w18",
                title: "第 18 周：多租户性能优化",
                summary: "优化多租户系统的性能与资源利用率。",
                overview: "性能是用户体验的基石。本周从租户级性能分析、资源优化到缓存策略，全面提升多租户系统性能。",
                keyPoints: [
                    "性能分析：租户级性能基线、热点识别、瓶颈定位。",
                    "资源优化：连接池共享、批处理、资源预热。",
                    "缓存优化：多级缓存、租户缓存隔离、缓存预加载。",
                ],
                lessons: [
                    {
                        id: "w18-1",
                        title: "租户性能基线与分析",
                        detail: "建立租户性能基线，识别性能异常与热点租户。",
                        resources: [
                            { title: "Performance Baselines", url: "https://sre.google/sre-book/monitoring-distributed-systems/" },
                            { title: "Tenant Performance Profiling", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/performance" },
                            { title: "APM for Multi-Tenant", url: "https://www.datadoghq.com/blog/apm-for-multi-tenant-applications/" },
                        ],
                    },
                    {
                        id: "w18-2",
                        title: "数据库性能优化",
                        detail: "掌握多租户数据库的性能优化：查询优化、索引策略、连接池管理。",
                        resources: [
                            { title: "Multi-Tenant DB Optimization", url: "https://use-the-index-luke.com/" },
                            { title: "Connection Pool Sizing", url: "https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing" },
                            { title: "Query Performance", url: "https://docs.microsoft.com/en-us/azure/azure-sql/database/query-performance-insight-use" },
                        ],
                    },
                    {
                        id: "w18-3",
                        title: "应用层性能优化",
                        detail: "理解应用层的性能优化：批处理、异步化、资源预热。",
                        resources: [
                            { title: "Batch Processing", url: "https://spring.io/projects/spring-batch" },
                            { title: "Async Patterns", url: "https://projectreactor.io/docs/core/release/reference/" },
                            { title: "Warm-up Strategies", url: "https://aws.amazon.com/blogs/compute/operating-lambda-performance-optimization-part-1/" },
                        ],
                    },
                    {
                        id: "w18-4",
                        title: "租户级缓存优化",
                        detail: "设计租户级缓存策略：缓存预加载、失效广播、缓存穿透防护。",
                        resources: [
                            { title: "Cache Warming", url: "https://redis.io/docs/latest/develop/use/patterns/" },
                            { title: "Cache Invalidation", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside" },
                            { title: "Multi-Level Caching", url: "https://engineering.fb.com/2013/06/25/core-data/tao-the-power-of-the-graph/" },
                        ],
                    },
                ],
            },
            {
                id: "w19",
                title: "第 19 周：租户迁移与生命周期",
                summary: "管理租户的完整生命周期：入驻、迁移与下线。",
                overview: "租户生命周期管理是 SaaS 运营的核心。本周从租户入驻、数据迁移到租户下线，建立完整的生命周期管理能力。",
                keyPoints: [
                    "租户入驻：自动化 Provisioning、初始配置、数据初始化。",
                    "租户迁移：跨环境迁移、数据导入导出、迁移验证。",
                    "租户下线：数据归档、资源回收、合规删除。",
                ],
                lessons: [
                    {
                        id: "w19-1",
                        title: "自动化租户入驻",
                        detail: "设计自动化租户入驻流程：资源 Provisioning、配置初始化、欢迎流程。",
                        resources: [
                            { title: "Tenant Onboarding", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/tenant-lifecycle" },
                            { title: "Automated Provisioning", url: "https://aws.amazon.com/blogs/apn/building-a-multi-tenant-saas-solution-using-aws-serverless-services/" },
                            { title: "Infrastructure as Code", url: "https://www.terraform.io/use-cases/multi-cloud-deployment" },
                        ],
                    },
                    {
                        id: "w19-2",
                        title: "租户数据迁移",
                        detail: "掌握租户数据迁移的策略与工具：数据导出、转换、导入、验证。",
                        resources: [
                            { title: "Data Migration", url: "https://aws.amazon.com/blogs/database/migrating-a-multi-tenant-database/" },
                            { title: "ETL Patterns", url: "https://docs.microsoft.com/en-us/azure/architecture/data-guide/relational-data/etl" },
                            { title: "Migration Verification", url: "https://aws.amazon.com/dms/" },
                        ],
                    },
                    {
                        id: "w19-3",
                        title: "租户下线与数据归档",
                        detail: "设计租户下线流程：数据归档、资源释放、合规删除、审计记录。",
                        resources: [
                            { title: "Tenant Offboarding", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/tenant-lifecycle#offboarding" },
                            { title: "Data Archival", url: "https://aws.amazon.com/blogs/storage/archiving-data-for-compliance-in-amazon-s3/" },
                            { title: "GDPR Data Deletion", url: "https://gdpr-info.eu/art-17-gdpr/" },
                        ],
                    },
                    {
                        id: "w19-4",
                        title: "租户升级与降级",
                        detail: "实现租户计划变更：功能升级、配额调整、无缝切换。",
                        resources: [
                            { title: "Tier Migration", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/tenant-lifecycle#upgrading-and-downgrading" },
                            { title: "Feature Rollout", url: "https://launchdarkly.com/blog/feature-flags-for-saas/" },
                            { title: "Quota Management", url: "https://cloud.google.com/docs/quota" },
                        ],
                    },
                ],
            },
            {
                id: "w20",
                title: "第 20 周：SaaS 成熟度与最佳实践",
                summary: "评估 SaaS 成熟度，总结多租户最佳实践。",
                overview: "最后一周，回顾多租户架构的成熟度模型，总结最佳实践，规划持续改进路径。",
                keyPoints: [
                    "SaaS 成熟度模型：从 Level 1（定制）到 Level 4（可扩展）的演进路径。",
                    "架构决策清单：多租户架构设计的关键决策点与权衡。",
                    "持续改进：性能基准、成本优化、安全加固的迭代方法。",
                ],
                lessons: [
                    {
                        id: "w20-1",
                        title: "SaaS 成熟度模型",
                        detail: "理解 SaaS 成熟度模型的四个级别，评估当前状态并规划演进路径。",
                        resources: [
                            { title: "SaaS Maturity Model", url: "https://docs.microsoft.com/en-us/archive/msdn-magazine/2006/september/architecture-strategies-for-catching-the-long-tail" },
                            { title: "AWS SaaS Lens", url: "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/saas-lens.html" },
                            { title: "SaaS Architecture Patterns", url: "https://aws.amazon.com/blogs/apn/defining-saas-architecture-patterns/" },
                        ],
                    },
                    {
                        id: "w20-2",
                        title: "多租户架构决策清单",
                        detail: "总结多租户架构设计的关键决策点：隔离级别、数据模型、定价策略等。",
                        resources: [
                            { title: "Architecture Decisions", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/considerations" },
                            { title: "Design Checklist", url: "https://aws.amazon.com/blogs/apn/building-saas-on-aws-multi-tenant-architecture-considerations/" },
                            { title: "Trade-off Analysis", url: "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/choose-tenancy-model" },
                        ],
                    },
                    {
                        id: "w20-3",
                        title: "安全与合规最佳实践",
                        detail: "总结多租户安全与合规的最佳实践：数据隔离验证、访问控制审计、合规认证。",
                        resources: [
                            { title: "SaaS Security Best Practices", url: "https://aws.amazon.com/blogs/apn/isolating-saas-tenants-with-dynamically-generated-iam-policies/" },
                            { title: "Compliance Certifications", url: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome" },
                            { title: "Security Checklist", url: "https://owasp.org/www-pdf-archive/OWASP_Top_10_for_SAAS.pdf" },
                        ],
                    },
                    {
                        id: "w20-4",
                        title: "持续改进与未来趋势",
                        detail: "建立多租户系统的持续改进机制，展望 SaaS 架构的未来趋势。",
                        resources: [
                            { title: "Continuous Improvement", url: "https://sre.google/sre-book/eliminating-toil/" },
                            { title: "SaaS Trends", url: "https://a16z.com/2020/01/21/every-company-will-be-a-fintech-company/" },
                            { title: "Future of Multi-Tenancy", url: "https://aws.amazon.com/blogs/apn/saas-architecture-on-aws/" },
                        ],
                    },
                ],
            },
        ],
    },
]

export const multiTenantKnowledgeCards: KnowledgeCard[] = [
    {
        id: "card1",
        title: "租户隔离三模式",
        summary: "池化、孤岛、桥接三种隔离模式代表了成本与隔离的不同权衡。",
        points: [
            "池化模式：所有租户共享资源，成本最低但隔离最弱，适合 B2C SaaS。",
            "孤岛模式：每租户独立资源，隔离最强但成本最高，适合企业级、强合规场景。",
            "桥接模式：混合模式，根据租户层级采用不同隔离策略，平衡成本与需求。",
        ],
        practice: "分析你的 SaaS 产品，根据客户类型和合规要求，选择合适的隔离模式组合。",
    },
    {
        id: "card2",
        title: "数据库多租户模式",
        summary: "数据库层的隔离策略直接影响成本、性能和运维复杂度。",
        points: [
            "独立数据库：隔离性最强，但资源利用率低、运维成本高。",
            "共享数据库独立 Schema：平衡隔离与成本，但 Schema 数量有上限。",
            "共享表（Row-Level）：成本最低，但需要严格的数据过滤和安全策略。",
        ],
        practice: "使用 PostgreSQL 的 Row Level Security 实现一个共享表多租户数据库，验证隔离有效性。",
    },
    {
        id: "card3",
        title: "租户上下文传播",
        summary: "租户上下文是多租户系统的血液，必须贯穿整个请求链路。",
        points: [
            "入口识别：通过子域名、Header、Token 等方式在请求入口识别租户。",
            "上下文存储：使用 ThreadLocal/Context 存储租户信息，确保请求内可访问。",
            "跨服务传播：通过 HTTP Header、gRPC Metadata、消息 Header 传递到下游。",
        ],
        practice: "在微服务架构中实现租户上下文传播，包括 HTTP 调用和消息队列消费。",
    },
    {
        id: "card4",
        title: "Noisy Neighbor 防护",
        summary: "嘈杂邻居问题是多租户架构的核心挑战，需要多层防护。",
        points: [
            "资源配额：为每个租户设置 CPU、内存、连接数等资源上限。",
            "限流策略：API 级别的租户限流，防止单租户耗尽系统资源。",
            "隔离增强：对高风险租户或高价值租户提供更强的隔离。",
        ],
        practice: "在 Kubernetes 中配置 Resource Quota 和 Limit Range，模拟并验证嘈杂邻居防护效果。",
    },
    {
        id: "card5",
        title: "租户计费模型",
        summary: "计费是 SaaS 商业模式的核心，需要准确计量和灵活定价。",
        points: [
            "订阅制：固定月费/年费，简单可预测，适合功能导向的产品。",
            "按量计费：按使用量收费，适合资源消耗型产品。",
            "混合模式：基础订阅 + 超额按量，平衡可预测性与弹性。",
        ],
        practice: "设计一个使用量计量系统，记录 API 调用次数、存储用量等指标，并生成租户账单。",
    },
    {
        id: "card6",
        title: "多区域数据策略",
        summary: "多区域部署需要在数据主权、延迟和成本之间找到平衡。",
        points: [
            "数据主权：某些行业/地区要求数据存储在本地，不能跨境传输。",
            "延迟优化：将租户数据放在离用户最近的区域，降低访问延迟。",
            "成本考量：多区域部署增加成本，需要权衡收益与投入。",
        ],
        practice: "设计一个租户区域选择策略，考虑数据主权、延迟和成本因素。",
    },
    {
        id: "card7",
        title: "租户安全边界",
        summary: "多租户安全的核心是确保租户间的完全隔离，防止数据泄露和越权访问。",
        points: [
            "认证隔离：确保租户只能访问自己的资源，防止跨租户访问。",
            "数据隔离：从数据库到缓存到日志，全链路验证租户隔离。",
            "加密隔离：支持租户专属密钥，实现数据加密隔离。",
        ],
        practice: "设计一套多租户安全测试用例，覆盖 API 越权、数据泄露、横向穿越等场景。",
    },
    {
        id: "card8",
        title: "租户生命周期管理",
        summary: "租户生命周期从入驻到下线，每个阶段都需要自动化和合规性。",
        points: [
            "自动化入驻：通过自助服务或 API 自动创建租户资源和配置。",
            "平滑迁移：支持租户数据导入导出，降低客户迁移成本。",
            "合规下线：数据归档、资源回收、审计记录，满足合规要求。",
        ],
        practice: "实现一个租户入驻自动化流程，包括资源创建、配置初始化和欢迎邮件发送。",
    },
    {
        id: "card9",
        title: "多租户可观测性",
        summary: "可观测性需要租户维度，支持租户级别的问题定位和 SLA 监控。",
        points: [
            "租户维度指标：在所有指标上增加租户标签，支持按租户聚合分析。",
            "租户级告警：避免单租户问题触发全局告警，实现精准告警。",
            "租户 SLA 追踪：为每个租户计算 SLO 达成率，生成可用性报告。",
        ],
        practice: "在 Prometheus 中添加租户标签，并在 Grafana 中创建租户级监控面板。",
    },
    {
        id: "card10",
        title: "SaaS 成熟度模型",
        summary: "SaaS 成熟度模型帮助评估当前状态并规划演进路径。",
        points: [
            "Level 1（定制）：每个客户独立部署，本质上是单租户。",
            "Level 2（可配置）：单一代码库，通过配置区分租户。",
            "Level 3（多租户）：共享基础设施，数据隔离，可扩展。",
            "Level 4（可扩展）：动态扩展、自动化运维、租户自助服务。",
        ],
        practice: "评估你的 SaaS 产品当前的成熟度级别，制定向下一级别演进的路线图。",
    },
]

export const multiTenantExamQuestions: QuizQuestion[] = [
    {
        id: "q1",
        question: "以下哪种租户隔离模式成本最低？",
        options: ["孤岛模式（Silo）", "池化模式（Pooled）", "桥接模式（Bridge）", "混合模式（Hybrid）"],
        answer: 1,
        rationale: "池化模式所有租户共享资源，资源利用率最高，因此成本最低。",
    },
    {
        id: "q2",
        question: "数据库多租户中，以下哪种模式隔离性最强？",
        options: ["共享表", "共享数据库独立 Schema", "独立数据库", "共享连接池"],
        answer: 2,
        rationale: "独立数据库每租户一个数据库实例，物理层面完全隔离，隔离性最强。",
    },
    {
        id: "q3",
        question: "PostgreSQL Row Level Security 用于实现哪种多租户模式？",
        options: ["独立数据库", "独立 Schema", "共享表", "独立连接池"],
        answer: 2,
        rationale: "Row Level Security 通过策略自动过滤行数据，用于实现共享表的租户隔离。",
    },
    {
        id: "q4",
        question: "以下哪种方式不适合用于租户识别？",
        options: ["子域名", "URL 路径", "HTTP Header", "IP 地址"],
        answer: 3,
        rationale: "IP 地址不稳定且多租户可能共享同一 IP，不适合作为租户识别方式。",
    },
    {
        id: "q5",
        question: "Noisy Neighbor 问题指的是？",
        options: ["租户数据泄露", "单租户过度消耗资源影响其他租户", "网络延迟过高", "系统故障"],
        answer: 1,
        rationale: "Noisy Neighbor（嘈杂邻居）指单租户过度消耗共享资源，影响其他租户的性能。",
    },
    {
        id: "q6",
        question: "多租户系统中，租户上下文通常如何跨微服务传播？",
        options: ["数据库事务", "HTTP Header 或 gRPC Metadata", "全局变量", "文件系统"],
        answer: 1,
        rationale: "租户上下文通过 HTTP Header 或 gRPC Metadata 在服务间传递，保持请求链路的租户信息。",
    },
    {
        id: "q7",
        question: "以下哪种定价模式最适合资源消耗型 SaaS 产品？",
        options: ["固定订阅制", "按量计费", "一次性购买", "免费增值"],
        answer: 1,
        rationale: "资源消耗型产品使用量差异大，按量计费更公平且能优化资源分配。",
    },
    {
        id: "q8",
        question: "GDPR 的「被遗忘权」要求 SaaS 系统必须能够？",
        options: ["备份所有数据", "删除租户的个人数据", "加密所有数据", "限制数据访问"],
        answer: 1,
        rationale: "被遗忘权（Right to Erasure）要求系统能够根据用户请求删除其个人数据。",
    },
    {
        id: "q9",
        question: "多租户系统中，以下哪种缓存键设计是正确的？",
        options: ["user:123", "tenant:abc:user:123", "123:abc:user", "cache:user"],
        answer: 1,
        rationale: "正确的多租户缓存键应包含租户标识前缀，防止跨租户数据访问。",
    },
    {
        id: "q10",
        question: "SaaS 成熟度模型中，Level 3 的特征是？",
        options: ["每客户独立部署", "单一代码库可配置", "共享基础设施多租户", "完全自动化运维"],
        answer: 2,
        rationale: "Level 3 是真正的多租户架构，共享基础设施但数据隔离，具有可扩展性。",
    },
    {
        id: "q11",
        question: "多租户 API 设计中，租户标识通常通过什么方式传递？",
        options: ["请求体", "URL 子域名或 Header", "Cookie", "查询参数"],
        answer: 1,
        rationale: "租户标识通常通过子域名或 HTTP Header 传递，便于 API 网关统一处理。",
    },
    {
        id: "q12",
        question: "多租户系统的数据本地化要求主要源于？",
        options: ["性能优化", "数据主权与合规法规", "成本控制", "技术限制"],
        answer: 1,
        rationale: "数据本地化要求主要来自 GDPR 等数据保护法规和各国数据主权要求。",
    },
    {
        id: "q13",
        question: "Kubernetes 中实现多租户隔离的核心机制是？",
        options: ["Pod", "Namespace", "Deployment", "Service"],
        answer: 1,
        rationale: "Namespace 提供了逻辑隔离，结合 Resource Quota 和 Network Policy 实现多租户隔离。",
    },
    {
        id: "q14",
        question: "多租户监控中，为避免高基数问题，租户标签应该？",
        options: ["尽可能详细", "限制租户数量", "使用聚合指标", "不使用租户标签"],
        answer: 2,
        rationale: "租户数量可能很多，直接作为标签会导致高基数问题，应使用聚合指标或分层存储。",
    },
    {
        id: "q15",
        question: "多租户消息队列中，以下哪种隔离策略成本最高？",
        options: ["共享 Topic 带消息头", "独立 Topic per 租户", "共享 Topic 分区", "虚拟主机"],
        answer: 1,
        rationale: "每租户独立 Topic 提供最强隔离，但资源消耗最高，管理复杂度也最高。",
    },
    {
        id: "q16",
        question: "租户入驻自动化的核心目标是？",
        options: ["降低人工成本", "实现自助服务快速上线", "提高安全性", "简化计费"],
        answer: 1,
        rationale: "自动化入驻的核心目标是让租户通过自助服务快速完成入驻，提升体验和效率。",
    },
    {
        id: "q17",
        question: "多租户系统中，BYOK 指的是？",
        options: ["自带数据库", "自带加密密钥", "自带域名", "自带身份认证"],
        answer: 1,
        rationale: "BYOK（Bring Your Own Key）允许租户使用自己的加密密钥，增强数据安全控制。",
    },
    {
        id: "q18",
        question: "多租户系统的成本分摊中，以下哪个是间接成本？",
        options: ["租户专属存储", "共享数据库服务器", "租户专属 IP", "租户专属域名"],
        answer: 1,
        rationale: "共享数据库服务器被多租户使用，其成本需要按使用量分摊，属于间接成本。",
    },
    {
        id: "q19",
        question: "多租户灾备中，RTO 指的是？",
        options: ["数据丢失量", "恢复时间目标", "复制延迟", "故障检测时间"],
        answer: 1,
        rationale: "RTO（Recovery Time Objective）是恢复时间目标，指系统从故障到恢复服务的时间。",
    },
    {
        id: "q20",
        question: "以下哪种模式适合企业级 SaaS 的大客户？",
        options: ["池化模式", "孤岛模式", "共享表模式", "虚拟机共享模式"],
        answer: 1,
        rationale: "企业级大客户通常有更强的隔离和合规要求，孤岛模式提供最强的资源和数据隔离。",
    },
]

export const multiTenantRoadmap: RoadmapDefinition = {
    id: "multi-tenant",
    label: "多租户架构",
    title: "多租户 SaaS 架构",
    durationLabel: "20 个主题",
    description:
        "多租户基础概念 → 数据层设计 → 应用层实现 → 运维与可观测性 → 高级主题与最佳实践，共 20 个主题，覆盖从隔离模型到 SaaS 成熟度的完整知识体系。",
    heroBadge: "多阶段 · 80 主题 · 面向 SaaS 架构师",
    stages: multiTenantStages,
    knowledgeCards: multiTenantKnowledgeCards,
    examQuestions: multiTenantExamQuestions,
    suggestion: (percent: number) => {
        if (percent < 25) {
            return "建议先完成第一阶段的多租户基础概念，重点理解隔离模型和租户上下文传播。"
        }
        if (percent < 50) {
            return "继续学习数据层多租户设计，掌握数据库隔离策略和分片方案。"
        }
        if (percent < 75) {
            return "深入应用层实现和运维体系，构建完整的多租户系统能力。"
        }
        return "通过高级主题巩固所学知识，评估 SaaS 成熟度并规划演进路径。"
    },
    resourceGuide: {
        environment: "准备 Kubernetes 集群或云账号（AWS/Azure），用于实践多租户部署和隔离。",
        fallbackKeyPoints: [
            "多租户的核心是隔离：数据隔离、性能隔离、故障隔离。",
            "隔离与成本是跷跷板：隔离越强，成本越高，需要根据业务需求权衡。",
            "租户上下文是多租户的血液：必须贯穿整个请求链路，从入口到存储。",
        ],
        handsOnSteps: [
            "阅读相关文档，理解核心概念和设计模式。",
            "在本地或云环境搭建多租户原型，验证隔离有效性。",
            "设计租户数据模型和 API，考虑扩展性和安全性。",
        ],
        selfChecks: [
            "能否解释你选择的隔离模式的权衡？",
            "如果租户数量增长 10 倍，架构如何扩展？",
            "如何防止租户间的数据泄露和越权访问？",
        ],
        extensions: [
            "阅读 AWS/Azure 的 SaaS 参考架构文档。",
            "分析知名 SaaS 产品（如 Slack、Salesforce）的多租户实现。",
            "参加 SaaS 相关的技术会议和社区讨论。",
        ],
        lessonQuizAdvice: "错题通常反映对隔离边界和安全性的理解偏差，建议结合实际案例重新梳理。",
    },
}
