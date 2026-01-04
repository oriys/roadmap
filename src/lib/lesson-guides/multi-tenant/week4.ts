import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "w4-1": {
        lessonId: "w4-1",
        background: [
            "【多租户 IdP】多租户应用需要支持多种身份提供商：自建认证、社交登录、企业 SSO（SAML/OIDC）。",
            "【租户专属认证】企业客户通常要求使用自己的 IdP（如 Okta、Azure AD），实现员工单点登录。",
            "【Auth0 Organizations】Auth0 提供 Organizations 特性，专门支持 B2B 多租户场景的身份管理。",
            "【租户域名】支持租户使用自定义登录域名（如 login.customer.com），提升品牌一致性。",
        ],
        keyDifficulties: [
            "【IdP 多样性】需要支持多种协议（SAML、OIDC、LDAP），每个租户可能使用不同的 IdP。",
            "【用户归属】同一邮箱可能属于多个租户，需要处理用户-租户映射关系。",
            "【SSO 配置】企业 SSO 集成复杂，需要处理证书、元数据、属性映射。",
            "【JIT Provisioning】即时用户创建需要从 IdP 属性映射到应用用户模型。",
        ],
        handsOnPath: [
            "配置 Auth0 Organization 支持多租户",
            "实现 SAML SSO 连接配置界面",
            "设计用户-租户多对多映射模型",
            "实现 JIT（Just-In-Time）用户创建流程",
        ],
        selfCheck: [
            "SAML 和 OIDC 的主要区别是什么？",
            "如何处理一个用户属于多个租户的场景？",
            "JIT Provisioning 的作用是什么？",
        ],
        extensions: [
            "研究 WorkOS 的企业 SSO 解决方案",
            "了解 SCIM 协议的用户同步",
        ],
        sourceUrls: [
            "https://auth0.com/docs/manage-users/access-control/multi-tenant-applications",
            "https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-convert-app-to-be-multi-tenant",
            "https://www.okta.com/blog/2020/03/enterprise-sso-integration-guide/",
        ],
    },
    "w4-2": {
        lessonId: "w4-2",
        background: [
            "【RBAC】基于角色的访问控制，用户被分配角色，角色拥有权限。多租户需要租户级别角色。",
            "【ABAC】基于属性的访问控制，基于用户、资源、环境属性动态决策，更灵活但更复杂。",
            "【租户角色隔离】同一用户在不同租户可能有不同角色，需要支持租户级别的角色分配。",
            "【SpiceDB/Zanzibar】Google Zanzibar 风格的关系型授权系统，支持复杂的多租户权限模型。",
        ],
        keyDifficulties: [
            "【角色爆炸】多租户 + 多角色容易导致角色数量爆炸，需要合理设计角色层级。",
            "【跨租户访问】某些场景需要跨租户访问（如代理商、合作伙伴），需要特殊处理。",
            "【性能】复杂的权限检查可能成为性能瓶颈，需要缓存和优化。",
            "【审计】需要记录权限变更和访问决策，支持合规审计。",
        ],
        handsOnPath: [
            "设计多租户 RBAC 数据模型",
            "实现租户级别角色分配 API",
            "集成 SpiceDB 或 OPA 进行权限决策",
            "实现权限检查中间件/注解",
        ],
        selfCheck: [
            "RBAC 和 ABAC 各适合什么场景？",
            "如何设计支持多租户的角色模型？",
            "SpiceDB 的核心概念是什么？",
        ],
        extensions: [
            "研究 Casbin 的多租户 RBAC 实现",
            "了解 Cedar（AWS 开源的策略语言）",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/identity-authorization",
            "https://aws.amazon.com/blogs/security/how-to-implement-saas-tenant-isolation-with-abac-and-aws-iam/",
            "https://authzed.com/docs/guides/multi-tenancy",
        ],
    },
    "w4-3": {
        lessonId: "w4-3",
        background: [
            "【租户密钥】支持每租户独立加密密钥，实现数据加密隔离。",
            "【信封加密】使用主密钥加密数据密钥，数据密钥加密实际数据，支持密钥轮换。",
            "【BYOK】Bring Your Own Key，允许租户使用自己的加密密钥，增强数据控制。",
            "【KMS 集成】AWS KMS、Azure Key Vault、GCP Cloud KMS 都支持多租户密钥管理。",
        ],
        keyDifficulties: [
            "【密钥管理】大量租户密钥的创建、存储、轮换、销毁需要自动化管理。",
            "【性能开销】加解密操作有性能开销，需要缓存数据密钥。",
            "【密钥轮换】支持不停机密钥轮换，需要同时支持新旧密钥解密。",
            "【BYOK 复杂性】BYOK 需要处理租户密钥导入、权限管理、审计。",
        ],
        handsOnPath: [
            "设计租户密钥管理数据模型",
            "实现基于 AWS KMS 的信封加密",
            "实现租户级别透明数据加密（TDE）",
            "设计 BYOK 密钥导入流程",
        ],
        selfCheck: [
            "信封加密的工作原理是什么？",
            "密钥轮换如何做到不停机？",
            "BYOK 的主要挑战是什么？",
        ],
        extensions: [
            "研究 HashiCorp Vault 的多租户密钥管理",
            "了解客户端加密（Client-Side Encryption）",
        ],
        sourceUrls: [
            "https://aws.amazon.com/blogs/security/how-to-use-customer-managed-keys-in-aws-key-management-service-to-secure-multi-tenant-saas-applications/",
            "https://cloud.google.com/kms/docs/envelope-encryption",
            "https://docs.microsoft.com/en-us/azure/key-vault/keys/byok-specification",
        ],
    },
    "w4-4": {
        lessonId: "w4-4",
        background: [
            "【跨租户访问】最严重的多租户安全威胁是一个租户访问另一个租户的数据。",
            "【提权攻击】攻击者尝试提升权限，访问更多资源或其他租户数据。",
            "【OWASP 风险】Broken Access Control 是 OWASP Top 10 第一大风险，在多租户场景尤为严重。",
            "【安全测试】需要专门针对多租户隔离的渗透测试和安全审计。",
        ],
        keyDifficulties: [
            "【隐式信任】开发者可能隐式信任租户上下文，忽略验证导致漏洞。",
            "【IDOR】不安全的直接对象引用，攻击者修改 ID 访问其他租户资源。",
            "【批量操作】批量 API 更容易出现租户边界检查遗漏。",
            "【第三方集成】第三方服务可能不感知租户边界，需要适配层。",
        ],
        handsOnPath: [
            "设计租户边界检查清单",
            "实现 IDOR 防护（资源归属验证）",
            "编写多租户安全测试用例",
            "配置 Web 应用防火墙（WAF）规则",
        ],
        selfCheck: [
            "IDOR 漏洞在多租户场景如何表现？",
            "如何系统性地测试租户隔离？",
            "批量操作 API 的安全风险是什么？",
        ],
        extensions: [
            "研究 OWASP 测试指南的多租户章节",
            "了解 Chaos Engineering 在安全测试中的应用",
        ],
        sourceUrls: [
            "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/10-Business_Logic_Testing/09-Test_Upload_of_Malicious_Files",
            "https://aws.amazon.com/blogs/apn/isolating-saas-tenants-with-dynamically-generated-iam-policies/",
            "https://www.csaasia.org/saas-security-checklist/",
        ],
    },
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "w4-1": [
        { id: "w4-1-q1", question: "企业客户通常要求使用什么进行员工登录？", options: ["社交登录", "自己的 IdP（如 Okta、Azure AD）实现 SSO", "用户名密码", "短信验证码"], answer: 1, rationale: "企业客户通常要求使用自己的身份提供商，实现员工单点登录，便于管理。" },
        { id: "w4-1-q2", question: "Auth0 的 Organizations 特性主要用于什么场景？", options: ["个人用户管理", "B2B 多租户身份管理", "社交登录", "密码管理"], answer: 1, rationale: "Auth0 Organizations 专门为 B2B 多租户场景设计，支持租户级别的身份管理。" },
        { id: "w4-1-q3", question: "SAML 和 OIDC 的主要区别是什么？", options: ["SAML 更新", "SAML 基于 XML，OIDC 基于 JSON/JWT", "OIDC 更安全", "没有区别"], answer: 1, rationale: "SAML 使用 XML 格式，较老但企业广泛使用；OIDC 基于 OAuth 2.0，使用 JSON/JWT，更现代。" },
        { id: "w4-1-q4", question: "JIT Provisioning 的作用是什么？", options: ["预先创建所有用户", "用户首次登录时自动创建账户", "删除不活跃用户", "批量导入用户"], answer: 1, rationale: "Just-In-Time Provisioning 在用户首次通过 SSO 登录时自动创建应用账户。" },
        { id: "w4-1-q5", question: "如何处理同一邮箱属于多个租户的场景？", options: ["禁止此场景", "设计用户-租户多对多映射", "强制使用不同邮箱", "随机分配租户"], answer: 1, rationale: "需要设计用户-租户多对多关系，允许用户在登录时选择或自动识别租户。" },
        { id: "w4-1-q6", question: "企业 SSO 集成通常需要配置什么？", options: ["只需要用户名", "证书、元数据、属性映射", "只需要密码", "只需要邮箱"], answer: 1, rationale: "SSO 集成需要配置签名证书、IdP/SP 元数据、用户属性到应用字段的映射。" },
        { id: "w4-1-q7", question: "支持租户自定义登录域名的好处是什么？", options: ["降低成本", "提升租户品牌一致性", "提高安全性", "简化开发"], answer: 1, rationale: "自定义域名让租户的用户看到租户品牌的登录页面，提升品牌一致性和信任度。" },
        { id: "w4-1-q8", question: "SCIM 协议的作用是什么？", options: ["单点登录", "用户生命周期同步（创建、更新、删除）", "加密通信", "日志记录"], answer: 1, rationale: "SCIM（System for Cross-domain Identity Management）用于自动同步用户生命周期。" },
        { id: "w4-1-q9", question: "Azure AD 多租户应用需要配置什么以支持任意 Azure AD 租户登录？", options: ["单租户模式", "多租户模式（Multi-tenant）", "仅 B2C 模式", "离线模式"], answer: 1, rationale: "Azure AD 应用需要配置为多租户模式才能接受任意 Azure AD 租户的用户登录。" },
        { id: "w4-1-q10", question: "IdP-initiated SSO 和 SP-initiated SSO 的区别是什么？", options: ["没有区别", "IdP 发起 vs 服务提供商发起登录流程", "安全级别不同", "协议不同"], answer: 1, rationale: "IdP-initiated 从身份提供商发起登录，SP-initiated 从应用（服务提供商）发起登录。" },
        { id: "w4-1-q11", question: "多租户应用如何识别用户应该登录哪个 IdP？", options: ["随机选择", "根据邮箱域名或租户识别匹配 IdP", "用户手动输入", "只支持一个 IdP"], answer: 1, rationale: "通常根据用户邮箱域名或租户标识匹配配置的 IdP。" },
        { id: "w4-1-q12", question: "WorkOS 等 Enterprise SSO 服务解决什么问题？", options: ["社交登录", "简化多种企业 IdP 的集成复杂度", "密码管理", "MFA"], answer: 1, rationale: "这类服务封装了各种企业 IdP（Okta、Azure AD、Google Workspace 等）的集成复杂度。" },
    ],
    "w4-2": [
        { id: "w4-2-q1", question: "RBAC 的核心概念是什么？", options: ["基于资源控制", "用户分配角色，角色拥有权限", "基于时间控制", "基于位置控制"], answer: 1, rationale: "RBAC（基于角色的访问控制）将权限分配给角色，再将角色分配给用户。" },
        { id: "w4-2-q2", question: "ABAC 相比 RBAC 的优势是什么？", options: ["更简单", "基于多种属性动态决策，更灵活", "性能更好", "更安全"], answer: 1, rationale: "ABAC 可以基于用户、资源、环境等多种属性动态决策，适合复杂场景。" },
        { id: "w4-2-q3", question: "多租户 RBAC 需要支持什么特性？", options: ["全局统一角色", "租户级别角色分配", "无需角色", "只支持管理员"], answer: 1, rationale: "同一用户在不同租户可能有不同角色，需要支持租户级别的角色分配。" },
        { id: "w4-2-q4", question: "SpiceDB/Zanzibar 是什么类型的系统？", options: ["数据库", "关系型授权系统", "消息队列", "缓存系统"], answer: 1, rationale: "SpiceDB 是 Google Zanzibar 风格的关系型授权系统，支持复杂权限模型。" },
        { id: "w4-2-q5", question: "多租户 + 多角色容易导致什么问题？", options: ["性能提升", "角色数量爆炸", "安全性提升", "简化管理"], answer: 1, rationale: "每个租户可能需要不同角色，组合起来容易导致角色数量爆炸。" },
        { id: "w4-2-q6", question: "跨租户访问场景（如代理商）如何处理？", options: ["禁止", "设计跨租户角色或代理关系模型", "忽略租户边界", "手动授权"], answer: 1, rationale: "需要设计专门的跨租户角色或代理关系模型，严格控制跨租户访问范围。" },
        { id: "w4-2-q7", question: "权限检查的性能优化通常使用什么方法？", options: ["增加服务器", "缓存权限决策结果", "减少权限数量", "异步检查"], answer: 1, rationale: "权限决策结果可以缓存，减少重复计算和数据库查询。" },
        { id: "w4-2-q8", question: "OPA（Open Policy Agent）的作用是什么？", options: ["数据存储", "通用策略引擎，支持权限决策", "消息传递", "日志记录"], answer: 1, rationale: "OPA 是通用策略引擎，可以用于实现复杂的授权决策逻辑。" },
        { id: "w4-2-q9", question: "权限变更审计的目的是什么？", options: ["提高性能", "支持合规审计和问题追溯", "减少存储", "简化开发"], answer: 1, rationale: "记录权限变更历史，支持合规审计和安全问题追溯。" },
        { id: "w4-2-q10", question: "AWS IAM 的 ABAC 是通过什么实现的？", options: ["角色名称", "资源标签和用户标签匹配", "IP 地址", "时间条件"], answer: 1, rationale: "AWS IAM ABAC 通过标签（Tags）实现，用户标签与资源标签匹配时允许访问。" },
        { id: "w4-2-q11", question: "Casbin 是什么类型的库？", options: ["Web 框架", "支持多种访问控制模型的授权库", "数据库驱动", "缓存库"], answer: 1, rationale: "Casbin 是支持 ACL、RBAC、ABAC 等多种模型的开源授权库。" },
        { id: "w4-2-q12", question: "设计租户级别角色时，如何避免角色爆炸？", options: ["每租户完全独立角色", "使用角色模板 + 租户继承/覆盖", "不使用角色", "只用一个角色"], answer: 1, rationale: "使用角色模板定义基础角色，允许租户继承并选择性覆盖，减少角色数量。" },
    ],
    "w4-3": [
        { id: "w4-3-q1", question: "信封加密（Envelope Encryption）的工作原理是什么？", options: ["直接加密数据", "用主密钥加密数据密钥，数据密钥加密数据", "只加密密钥", "不加密"], answer: 1, rationale: "信封加密使用两层密钥：主密钥（KMS）加密数据密钥，数据密钥加密实际数据。" },
        { id: "w4-3-q2", question: "BYOK（Bring Your Own Key）的作用是什么？", options: ["系统生成密钥", "允许租户使用自己的加密密钥", "禁用加密", "共享密钥"], answer: 1, rationale: "BYOK 允许租户导入自己的加密密钥，增强对数据的控制权。" },
        { id: "w4-3-q3", question: "密钥轮换如何做到不停机？", options: ["无法实现", "同时支持新旧密钥解密，逐步重新加密数据", "停机轮换", "不轮换"], answer: 1, rationale: "保留旧密钥用于解密存量数据，新数据用新密钥加密，逐步重新加密旧数据。" },
        { id: "w4-3-q4", question: "AWS KMS 在多租户密钥管理中的作用是什么？", options: ["存储数据", "管理租户主密钥，支持信封加密", "处理网络", "管理用户"], answer: 1, rationale: "AWS KMS 可以为每个租户创建独立的 CMK（客户主密钥），支持信封加密。" },
        { id: "w4-3-q5", question: "数据密钥为什么需要缓存？", options: ["减少存储", "减少 KMS 调用，提高加解密性能", "提高安全性", "简化代码"], answer: 1, rationale: "每次解密都调用 KMS 会产生延迟和成本，缓存数据密钥可以提高性能。" },
        { id: "w4-3-q6", question: "透明数据加密（TDE）的特点是什么？", options: ["应用层加密", "数据库层自动加密，应用无感知", "文件系统加密", "网络加密"], answer: 1, rationale: "TDE 在数据库层实现，数据自动加密存储，应用读写时自动解密，无需修改应用代码。" },
        { id: "w4-3-q7", question: "BYOK 的主要挑战是什么？", options: ["没有挑战", "密钥导入流程、权限管理、审计的复杂性", "性能问题", "成本问题"], answer: 1, rationale: "BYOK 需要处理安全的密钥导入机制、权限控制和审计记录。" },
        { id: "w4-3-q8", question: "HashiCorp Vault 的 Transit 引擎用于什么？", options: ["存储密码", "提供加密即服务（EaaS）", "网络代理", "日志存储"], answer: 1, rationale: "Vault Transit 引擎提供加密/解密/签名服务，应用无需直接处理密钥。" },
        { id: "w4-3-q9", question: "多租户密钥管理需要自动化哪些操作？", options: ["只需要创建", "创建、存储、轮换、销毁全生命周期", "只需要销毁", "不需要自动化"], answer: 1, rationale: "大量租户密钥需要自动化管理整个生命周期：创建、存储、轮换、销毁。" },
        { id: "w4-3-q10", question: "客户端加密（Client-Side Encryption）的特点是什么？", options: ["服务端加密", "数据在客户端加密后传输，服务端无法解密", "网络加密", "数据库加密"], answer: 1, rationale: "客户端加密在数据离开客户端前加密，服务端只存储密文，无法访问明文。" },
        { id: "w4-3-q11", question: "Azure Key Vault 支持什么类型的密钥？", options: ["只支持对称密钥", "对称密钥、RSA、EC 等多种类型", "只支持 RSA", "不支持密钥"], answer: 1, rationale: "Azure Key Vault 支持对称密钥、RSA 非对称密钥、椭圆曲线密钥等。" },
        { id: "w4-3-q12", question: "租户密钥销毁时需要注意什么？", options: ["立即删除", "确保数据已重新加密或删除，保留审计记录", "无需注意", "通知用户"], answer: 1, rationale: "销毁密钥前需确保相关数据已处理（重新加密或删除），并保留审计记录。" },
    ],
    "w4-4": [
        { id: "w4-4-q1", question: "多租户系统最严重的安全威胁是什么？", options: ["系统崩溃", "一个租户访问另一个租户的数据", "性能下降", "功能缺失"], answer: 1, rationale: "跨租户数据访问是最严重的多租户安全威胁，可能导致数据泄露和信任危机。" },
        { id: "w4-4-q2", question: "IDOR 漏洞在多租户场景如何表现？", options: ["系统变慢", "修改资源 ID 访问其他租户数据", "功能失效", "界面错误"], answer: 1, rationale: "IDOR（不安全的直接对象引用）允许攻击者修改请求中的 ID 访问其他租户资源。" },
        { id: "w4-4-q3", question: "OWASP Top 10 2021 中排名第一的风险是什么？", options: ["注入攻击", "Broken Access Control（访问控制缺陷）", "加密失败", "XSS"], answer: 1, rationale: "Broken Access Control 在 OWASP Top 10 2021 中排名第一，多租户场景尤为严重。" },
        { id: "w4-4-q4", question: "防止 IDOR 的最佳方法是什么？", options: ["使用复杂 ID", "验证资源归属当前租户", "禁用 API", "加密所有数据"], answer: 1, rationale: "每次访问资源时都验证该资源是否属于当前租户，而不仅仅检查用户权限。" },
        { id: "w4-4-q5", question: "批量操作 API 的安全风险是什么？", options: ["性能问题", "更容易遗漏租户边界检查", "无风险", "功能太多"], answer: 1, rationale: "批量操作涉及多个资源，更容易遗漏对每个资源的租户归属检查。" },
        { id: "w4-4-q6", question: "第三方集成在多租户安全中的风险是什么？", options: ["集成太慢", "第三方服务可能不感知租户边界", "成本太高", "功能不足"], answer: 1, rationale: "第三方服务通常不了解多租户架构，需要适配层确保租户数据隔离。" },
        { id: "w4-4-q7", question: "开发者容易犯的多租户安全错误是什么？", options: ["代码太多", "隐式信任租户上下文，忽略验证", "使用框架", "写测试"], answer: 1, rationale: "开发者可能假设租户上下文总是正确的，忽略在关键操作时重新验证。" },
        { id: "w4-4-q8", question: "多租户安全测试应该包含什么？", options: ["只测试功能", "跨租户访问测试、IDOR 测试、权限边界测试", "只测试性能", "只测试界面"], answer: 1, rationale: "需要专门测试跨租户访问、IDOR 漏洞、权限边界等多租户特有的安全问题。" },
        { id: "w4-4-q9", question: "WAF 在多租户安全中的作用是什么？", options: ["加速访问", "过滤恶意请求，提供额外防护层", "存储数据", "管理用户"], answer: 1, rationale: "Web 应用防火墙可以过滤常见攻击，作为多租户安全的额外防护层。" },
        { id: "w4-4-q10", question: "如何系统性地测试租户隔离？", options: ["随机测试", "使用不同租户身份尝试访问其他租户资源", "只测试登录", "不需要测试"], answer: 1, rationale: "系统性测试应使用不同租户身份，尝试各种方式访问其他租户的资源。" },
        { id: "w4-4-q11", question: "提权攻击在多租户场景的目标是什么？", options: ["降低权限", "获取更高权限或访问其他租户数据", "删除数据", "停止服务"], answer: 1, rationale: "提权攻击尝试获取管理员权限或跨越租户边界访问其他租户数据。" },
        { id: "w4-4-q12", question: "Chaos Engineering 如何应用于多租户安全测试？", options: ["随机删除数据", "模拟故障场景验证隔离是否保持", "关闭服务", "修改配置"], answer: 1, rationale: "通过模拟各种故障和异常场景，验证租户隔离在异常情况下是否仍然有效。" },
    ],
}
