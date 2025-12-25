import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const securityStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：安全基础（第 1-3 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "security-foundation",
    title: "阶段一：安全基础",
    duration: "第 1-3 周",
    goal: "理解安全核心原则、密码学基础与安全开发生命周期。",
    weeks: [
      {
        id: "security-w1",
        title: "第 1 周：安全原则与威胁建模",
        summary: "理解信息安全核心原则，掌握威胁建模方法。",
        keyPoints: [
          "CIA 三元组是信息安全的基础框架。",
          "威胁建模在设计阶段识别安全风险。",
          "纵深防御是安全架构的核心策略。",
        ],
        lessons: [
          {
            id: "security-w1-1",
            title: "CIA 三元组与安全原则",
            detail: "理解信息安全的核心原则与目标。",
            keyPoints: [
              "机密性（Confidentiality）：防止未授权访问敏感信息。",
              "完整性（Integrity）：确保数据不被篡改。",
              "可用性（Availability）：确保授权用户可访问资源。",
              "扩展原则：认证、授权、不可否认性、隐私。",
            ],
            resources: [
              { title: "NIST: Information Security", url: "https://csrc.nist.gov/glossary/term/information_security" },
              { title: "CIA Triad Explained", url: "https://www.techtarget.com/whatis/definition/Confidentiality-integrity-and-availability-CIA" },
              { title: "Security Principles", url: "https://owasp.org/www-project-developer-guide/draft/foundations/security_principles/" },
            ],
          },
          {
            id: "security-w1-2",
            title: "威胁建模方法",
            detail: "使用结构化方法识别和评估安全威胁。",
            keyPoints: [
              "STRIDE：Spoofing、Tampering、Repudiation、Information Disclosure、DoS、Elevation。",
              "DREAD：评估威胁严重性的评分模型。",
              "攻击树：可视化攻击路径和前提条件。",
              "威胁建模流程：识别资产、绘制数据流、识别威胁、缓解措施。",
            ],
            resources: [
              { title: "Microsoft: Threat Modeling", url: "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool" },
              { title: "OWASP Threat Modeling", url: "https://owasp.org/www-community/Threat_Modeling" },
              { title: "Threat Modeling Manifesto", url: "https://www.threatmodelingmanifesto.org/" },
            ],
          },
          {
            id: "security-w1-3",
            title: "纵深防御与安全架构",
            detail: "设计多层次的安全防护体系。",
            keyPoints: [
              "纵深防御：多层安全控制，单一失效不导致完全失陷。",
              "最小权限：只授予完成任务所需的最小权限。",
              "安全默认：默认配置应该是安全的。",
              "失效安全：失败时应进入安全状态。",
            ],
            resources: [
              { title: "Defense in Depth", url: "https://www.cisa.gov/sites/default/files/publications/defense_in_depth_0.pdf" },
              { title: "Security Design Principles", url: "https://owasp.org/www-project-developer-guide/draft/design/web_app_checklist/security_principles/" },
              { title: "Least Privilege Principle", url: "https://csrc.nist.gov/glossary/term/least_privilege" },
            ],
          },
        ],
      },
      {
        id: "security-w2",
        title: "第 2 周：密码学基础",
        summary: "理解现代密码学原理与常用加密技术。",
        keyPoints: [
          "对称加密速度快，适合大量数据加密。",
          "非对称加密用于密钥交换和数字签名。",
          "哈希函数用于数据完整性验证。",
        ],
        lessons: [
          {
            id: "security-w2-1",
            title: "对称与非对称加密",
            detail: "理解两种加密体系的原理与应用场景。",
            keyPoints: [
              "对称加密：AES-256-GCM 是推荐算法，密钥管理是难点。",
              "非对称加密：RSA、ECDSA、Ed25519，公钥加密私钥解密。",
              "混合加密：用非对称加密传输对称密钥。",
              "密钥派生：PBKDF2、Argon2 从密码生成密钥。",
            ],
            resources: [
              { title: "Cryptography Basics", url: "https://www.cloudflare.com/learning/ssl/what-is-encryption/" },
              { title: "AES Encryption", url: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197-upd1.pdf" },
              { title: "Modern Cryptography", url: "https://latacora.micro.blog/2018/04/03/cryptographic-right-answers.html" },
            ],
          },
          {
            id: "security-w2-2",
            title: "哈希与消息认证",
            detail: "使用哈希函数和 MAC 保证数据完整性。",
            keyPoints: [
              "哈希函数：SHA-256、SHA-3，单向不可逆。",
              "HMAC：带密钥的消息认证码。",
              "密码哈希：bcrypt、Argon2id，专为密码存储设计。",
              "数字签名：私钥签名，公钥验证。",
            ],
            resources: [
              { title: "NIST: Hash Functions", url: "https://csrc.nist.gov/projects/hash-functions" },
              { title: "Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
              { title: "Argon2", url: "https://www.password-hashing.net/" },
            ],
          },
          {
            id: "security-w2-3",
            title: "PKI 与 TLS",
            detail: "理解公钥基础设施与传输层安全。",
            keyPoints: [
              "PKI：CA、证书、证书链、信任模型。",
              "TLS 1.3：简化握手、前向保密、0-RTT。",
              "证书透明度（CT）：防止 CA 错误签发。",
              "mTLS：双向 TLS，服务间认证。",
            ],
            resources: [
              { title: "TLS 1.3 RFC 8446", url: "https://datatracker.ietf.org/doc/html/rfc8446" },
              { title: "Let's Encrypt", url: "https://letsencrypt.org/docs/" },
              { title: "Certificate Transparency", url: "https://certificate.transparency.dev/" },
            ],
          },
        ],
      },
      {
        id: "security-w3",
        title: "第 3 周：安全开发生命周期",
        summary: "将安全融入软件开发全生命周期。",
        keyPoints: [
          "Shift-Left 将安全前移到开发早期。",
          "DevSecOps 在 DevOps 中集成安全实践。",
          "安全需求应在设计阶段明确。",
        ],
        lessons: [
          {
            id: "security-w3-1",
            title: "SDL 与 Shift-Left Security",
            detail: "在开发早期引入安全实践。",
            keyPoints: [
              "SDL（Security Development Lifecycle）：微软提出的安全开发框架。",
              "Shift-Left：安全测试前移，越早发现越低成本。",
              "安全需求：功能需求中包含安全需求。",
              "安全设计评审：架构和设计阶段的安全审查。",
            ],
            resources: [
              { title: "Microsoft SDL", url: "https://www.microsoft.com/en-us/securityengineering/sdl" },
              { title: "OWASP SAMM", url: "https://owaspsamm.org/" },
              { title: "Shift Left Security", url: "https://www.devsecops.org/blog/shift-left-security" },
            ],
          },
          {
            id: "security-w3-2",
            title: "DevSecOps 实践",
            detail: "在 DevOps 流程中集成安全。",
            keyPoints: [
              "安全即代码：安全策略版本化、可审计。",
              "自动化安全测试：CI/CD 中集成 SAST/DAST/SCA。",
              "安全门禁：阻止高危漏洞进入生产。",
              "安全冠军：开发团队中的安全代言人。",
            ],
            resources: [
              { title: "DevSecOps", url: "https://www.devsecops.org/" },
              { title: "OWASP DevSecOps Guideline", url: "https://owasp.org/www-project-devsecops-guideline/" },
              { title: "CSA DevSecOps", url: "https://cloudsecurityalliance.org/blog/2024/04/26/devsecops-tools" },
            ],
          },
          {
            id: "security-w3-3",
            title: "安全编码标准",
            detail: "遵循安全编码最佳实践。",
            keyPoints: [
              "OWASP 安全编码指南：语言无关的安全实践。",
              "CWE：常见弱点枚举，分类安全缺陷。",
              "CERT 安全编码标准：语言特定的安全规范。",
              "代码审查：安全视角的代码评审。",
            ],
            resources: [
              { title: "OWASP Secure Coding", url: "https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/" },
              { title: "CWE", url: "https://cwe.mitre.org/" },
              { title: "CERT Secure Coding", url: "https://wiki.sei.cmu.edu/confluence/display/seccode" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：应用安全（第 4-6 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "security-appsec",
    title: "阶段二：应用安全",
    duration: "第 4-6 周",
    goal: "掌握 OWASP Top 10:2025、安全编码实践与 API 安全。",
    weeks: [
      {
        id: "security-w4",
        title: "第 4 周：OWASP Top 10:2025",
        summary: "深入理解 OWASP Top 10:2025 Web 应用安全风险。",
        keyPoints: [
          "Broken Access Control 连续多年位居榜首。",
          "Software Supply Chain Failures 是 2025 新增类别。",
          "Mishandling of Exceptional Conditions 是另一新增类别。",
        ],
        lessons: [
          {
            id: "security-w4-1",
            title: "访问控制与注入攻击",
            detail: "理解最常见的 Web 应用漏洞。",
            keyPoints: [
              "Broken Access Control（A01）：越权访问、IDOR、路径遍历。",
              "Injection（A05）：SQL、NoSQL、OS、LDAP 注入。",
              "预防：参数化查询、白名单验证、最小权限。",
              "WAF 不能替代安全编码。",
            ],
            resources: [
              { title: "OWASP Top 10:2025", url: "https://owasp.org/Top10/" },
              { title: "Broken Access Control", url: "https://owasp.org/Top10/A01_2021-Broken_Access_Control/" },
              { title: "Injection Prevention", url: "https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html" },
            ],
          },
          {
            id: "security-w4-2",
            title: "供应链安全与配置错误",
            detail: "理解软件供应链风险与安全配置。",
            keyPoints: [
              "Supply Chain Failures（A03 新）：依赖投毒、构建系统攻击。",
              "Security Misconfiguration（A02）：默认配置、不必要功能。",
              "SBOM：软件物料清单，追踪依赖。",
              "依赖更新策略：自动化依赖升级。",
            ],
            resources: [
              { title: "Supply Chain Security", url: "https://slsa.dev/" },
              { title: "SBOM", url: "https://www.cisa.gov/sbom" },
              { title: "Security Misconfiguration", url: "https://owasp.org/Top10/A05_2021-Security_Misconfiguration/" },
            ],
          },
          {
            id: "security-w4-3",
            title: "密码学失败与其他风险",
            detail: "避免密码学相关的安全问题。",
            keyPoints: [
              "Cryptographic Failures（A04）：弱加密、明文传输、密钥泄露。",
              "Insecure Design（A06）：缺乏威胁建模、安全设计。",
              "Mishandling of Exceptional Conditions（A10 新）：错误处理不当。",
              "安全日志与监控（A09）：检测和响应攻击。",
            ],
            resources: [
              { title: "Cryptographic Failures", url: "https://owasp.org/Top10/A02_2021-Cryptographic_Failures/" },
              { title: "Insecure Design", url: "https://owasp.org/Top10/A04_2021-Insecure_Design/" },
              { title: "OWASP Top 10 2025 Changes", url: "https://owasp.org/Top10/2025/0x00_2025-Introduction/" },
            ],
          },
        ],
      },
      {
        id: "security-w5",
        title: "第 5 周：安全编码实践",
        summary: "掌握防御性编程与安全编码技术。",
        keyPoints: [
          "输入验证是第一道防线。",
          "输出编码防止注入攻击。",
          "错误处理不应泄露敏感信息。",
        ],
        lessons: [
          {
            id: "security-w5-1",
            title: "输入验证与净化",
            detail: "正确处理所有外部输入。",
            keyPoints: [
              "永不信任用户输入：所有外部数据都是不可信的。",
              "白名单验证：只允许已知合法的输入。",
              "规范化：处理前将输入转为标准格式。",
              "验证位置：服务端验证是必须的，客户端验证是补充。",
            ],
            resources: [
              { title: "Input Validation Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html" },
              { title: "Data Validation", url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/" },
              { title: "Allowlist vs Blocklist", url: "https://www.synopsys.com/glossary/what-is-input-validation.html" },
            ],
          },
          {
            id: "security-w5-2",
            title: "输出编码与 XSS 防护",
            detail: "防止跨站脚本攻击。",
            keyPoints: [
              "上下文编码：HTML、JavaScript、URL、CSS 各有编码方式。",
              "Content Security Policy（CSP）：限制脚本执行来源。",
              "HttpOnly Cookie：防止 JavaScript 访问敏感 Cookie。",
              "现代框架：React、Vue 默认转义输出。",
            ],
            resources: [
              { title: "XSS Prevention", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
              { title: "Content Security Policy", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" },
              { title: "DOM XSS", url: "https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html" },
            ],
          },
          {
            id: "security-w5-3",
            title: "错误处理与日志安全",
            detail: "安全地处理错误和记录日志。",
            keyPoints: [
              "错误消息：对用户友好，对开发者详细（分离）。",
              "不泄露敏感信息：堆栈跟踪、数据库错误、内部路径。",
              "安全日志：记录安全事件，但不记录敏感数据。",
              "日志注入：防止攻击者伪造日志。",
            ],
            resources: [
              { title: "Error Handling", url: "https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html" },
              { title: "Logging Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html" },
              { title: "Logging Vocabulary", url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html" },
            ],
          },
        ],
      },
      {
        id: "security-w6",
        title: "第 6 周：API 安全",
        summary: "保护 REST API 和微服务安全。",
        keyPoints: [
          "OAuth 2.1 是 API 授权的事实标准。",
          "JWT 需要正确使用才能保证安全。",
          "API 网关提供集中的安全控制点。",
        ],
        lessons: [
          {
            id: "security-w6-1",
            title: "OAuth 2.1 与 OpenID Connect",
            detail: "实现安全的 API 授权。",
            keyPoints: [
              "OAuth 2.1：合并最佳实践，废弃不安全的流程。",
              "Authorization Code + PKCE：推荐的授权流程。",
              "OIDC：在 OAuth 之上添加身份认证。",
              "Token 安全：短期访问令牌 + 刷新令牌。",
            ],
            resources: [
              { title: "OAuth 2.1", url: "https://oauth.net/2.1/" },
              { title: "OpenID Connect", url: "https://openid.net/connect/" },
              { title: "OAuth 2.0 Security Best Practices", url: "https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics" },
            ],
          },
          {
            id: "security-w6-2",
            title: "JWT 安全最佳实践",
            detail: "正确使用 JSON Web Token。",
            keyPoints: [
              "签名算法：使用 RS256 或 ES256，避免 none 和 HS256 误用。",
              "验证：验证签名、过期时间、受众、发行者。",
              "敏感数据：JWT 是编码不是加密，不存敏感信息。",
              "令牌存储：HttpOnly Cookie 或安全存储。",
            ],
            resources: [
              { title: "JWT Best Practices", url: "https://datatracker.ietf.org/doc/html/rfc8725" },
              { title: "JWT Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html" },
              { title: "JWT Attacks", url: "https://portswigger.net/web-security/jwt" },
            ],
          },
          {
            id: "security-w6-3",
            title: "API 网关与速率限制",
            detail: "使用 API 网关集中安全控制。",
            keyPoints: [
              "API 网关：认证、授权、限流、日志的统一入口。",
              "速率限制：防止暴力破解和 DoS。",
              "API 版本化：安全地演进 API。",
              "OWASP API Security Top 10：API 特定的安全风险。",
            ],
            resources: [
              { title: "OWASP API Security", url: "https://owasp.org/API-Security/" },
              { title: "API Gateway Security", url: "https://www.nginx.com/learn/api-gateway-security/" },
              { title: "Rate Limiting", url: "https://cloud.google.com/architecture/rate-limiting-strategies-techniques" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：身份与访问管理（第 7-9 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "security-iam",
    title: "阶段三：身份与访问管理",
    duration: "第 7-9 周",
    goal: "掌握现代认证机制、授权模型与零信任架构。",
    weeks: [
      {
        id: "security-w7",
        title: "第 7 周：认证机制",
        summary: "理解现代身份认证技术与最佳实践。",
        keyPoints: [
          "多因素认证显著降低账户被盗风险。",
          "Passkeys 是密码的安全替代方案。",
          "无密码认证是未来趋势。",
        ],
        lessons: [
          {
            id: "security-w7-1",
            title: "多因素认证（MFA）",
            detail: "实现多因素认证提升账户安全。",
            keyPoints: [
              "认证因素：知识、持有、固有（生物特征）。",
              "TOTP：基于时间的一次性密码，Google Authenticator。",
              "推送通知：移动设备确认登录。",
              "硬件密钥：YubiKey、FIDO2 安全密钥。",
            ],
            resources: [
              { title: "MFA Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html" },
              { title: "NIST Authentication Guidelines", url: "https://pages.nist.gov/800-63-3/sp800-63b.html" },
              { title: "TOTP RFC 6238", url: "https://datatracker.ietf.org/doc/html/rfc6238" },
            ],
          },
          {
            id: "security-w7-2",
            title: "Passkeys 与 WebAuthn",
            detail: "使用 FIDO2/WebAuthn 实现无密码认证。",
            keyPoints: [
              "Passkeys：同步凭证，跨设备使用。",
              "WebAuthn：Web 标准，浏览器原生支持。",
              "公钥认证：私钥永不离开设备。",
              "抗钓鱼：绑定到特定域名，无法在钓鱼网站使用。",
            ],
            resources: [
              { title: "Passkeys", url: "https://passkeys.dev/" },
              { title: "WebAuthn", url: "https://webauthn.io/" },
              { title: "FIDO Alliance", url: "https://fidoalliance.org/passkeys/" },
            ],
          },
          {
            id: "security-w7-3",
            title: "单点登录（SSO）",
            detail: "实现企业级单点登录。",
            keyPoints: [
              "SSO：一次登录，访问多个应用。",
              "SAML 2.0：企业 SSO 标准，XML 格式。",
              "OIDC：现代 SSO，基于 OAuth 2.0。",
              "IdP 选择：Okta、Auth0、Azure AD、Keycloak。",
            ],
            resources: [
              { title: "SSO Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
              { title: "SAML vs OIDC", url: "https://www.okta.com/identity-101/saml-vs-oidc/" },
              { title: "Keycloak", url: "https://www.keycloak.org/" },
            ],
          },
        ],
      },
      {
        id: "security-w8",
        title: "第 8 周：授权模型",
        summary: "设计和实现细粒度访问控制。",
        keyPoints: [
          "RBAC 基于角色，简单但可能角色爆炸。",
          "ABAC 基于属性，灵活但复杂。",
          "策略引擎实现策略即代码。",
        ],
        lessons: [
          {
            id: "security-w8-1",
            title: "RBAC 与 ABAC",
            detail: "理解基于角色和基于属性的访问控制。",
            keyPoints: [
              "RBAC：用户 → 角色 → 权限，简单直观。",
              "ABAC：基于用户、资源、环境属性决策。",
              "ReBAC：基于关系的访问控制，Google Zanzibar。",
              "混合模型：结合 RBAC 和 ABAC 的优点。",
            ],
            resources: [
              { title: "NIST RBAC", url: "https://csrc.nist.gov/projects/role-based-access-control" },
              { title: "NIST ABAC", url: "https://csrc.nist.gov/publications/detail/sp/800-162/final" },
              { title: "Google Zanzibar", url: "https://research.google/pubs/pub48190/" },
            ],
          },
          {
            id: "security-w8-2",
            title: "策略引擎（OPA/Cedar）",
            detail: "使用策略引擎实现细粒度授权。",
            keyPoints: [
              "OPA（Open Policy Agent）：通用策略引擎，Rego 语言。",
              "Cedar：AWS 开源策略语言，声明式。",
              "策略即代码：版本控制、测试、审计。",
              "外部化授权：将授权逻辑从应用中分离。",
            ],
            resources: [
              { title: "Open Policy Agent", url: "https://www.openpolicyagent.org/" },
              { title: "Cedar", url: "https://www.cedarpolicy.com/" },
              { title: "OPA Tutorial", url: "https://www.openpolicyagent.org/docs/latest/" },
            ],
          },
          {
            id: "security-w8-3",
            title: "权限边界与最小权限",
            detail: "实施最小权限原则。",
            keyPoints: [
              "最小权限：只授予完成任务所需的权限。",
              "权限边界：限制可授予的最大权限。",
              "即时访问（JIT）：需要时临时授权。",
              "权限审计：定期审查和撤销不必要的权限。",
            ],
            resources: [
              { title: "AWS Permission Boundaries", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html" },
              { title: "Least Privilege", url: "https://csrc.nist.gov/glossary/term/least_privilege" },
              { title: "JIT Access", url: "https://cloud.google.com/iam/docs/just-in-time-access" },
            ],
          },
        ],
      },
      {
        id: "security-w9",
        title: "第 9 周：零信任架构",
        summary: "设计和实施零信任安全模型。",
        keyPoints: [
          "零信任核心：永不信任，始终验证。",
          "NIST SP 800-207 是零信任的权威指南。",
          "零信任是旅程，不是产品。",
        ],
        lessons: [
          {
            id: "security-w9-1",
            title: "零信任原则",
            detail: "理解零信任安全模型的核心原则。",
            keyPoints: [
              "永不信任，始终验证：每个请求都需认证和授权。",
              "假设被攻破：内部网络也不可信。",
              "最小权限访问：只授予所需的最小权限。",
              "持续验证：实时评估风险和信任。",
            ],
            resources: [
              { title: "NIST SP 800-207", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" },
              { title: "CISA Zero Trust", url: "https://www.cisa.gov/zero-trust-maturity-model" },
              { title: "Zero Trust Architecture", url: "https://www.nist.gov/publications/zero-trust-architecture" },
            ],
          },
          {
            id: "security-w9-2",
            title: "零信任网络访问（ZTNA）",
            detail: "实现基于身份的网络访问。",
            keyPoints: [
              "ZTNA：替代 VPN，基于身份和上下文。",
              "软件定义边界（SDP）：隐藏基础设施。",
              "微分段：细粒度网络隔离。",
              "持续自适应风险评估：动态调整访问权限。",
            ],
            resources: [
              { title: "ZTNA", url: "https://www.gartner.com/en/information-technology/glossary/zero-trust-network-access-ztna-" },
              { title: "SDP", url: "https://cloudsecurityalliance.org/research/topics/software-defined-perimeter/" },
              { title: "Microsegmentation", url: "https://www.vmware.com/topics/glossary/content/microsegmentation.html" },
            ],
          },
          {
            id: "security-w9-3",
            title: "零信任实施路径",
            detail: "规划和实施零信任转型。",
            keyPoints: [
              "成熟度模型：CISA 零信任成熟度模型。",
              "优先级：身份 → 设备 → 网络 → 应用 → 数据。",
              "渐进实施：从高价值资产开始。",
              "度量与改进：持续评估零信任效果。",
            ],
            resources: [
              { title: "CISA ZTMM", url: "https://www.cisa.gov/sites/default/files/2023-04/CISA_Zero_Trust_Maturity_Model_v2.pdf" },
              { title: "NIST ZTA Implementation", url: "https://www.nccoe.nist.gov/projects/implementing-zero-trust-architecture" },
              { title: "Google BeyondCorp", url: "https://cloud.google.com/beyondcorp" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：云原生安全（第 10-13 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "security-cloud-native",
    title: "阶段四：云原生安全",
    duration: "第 10-13 周",
    goal: "掌握容器、Kubernetes、服务网格与云平台安全。",
    weeks: [
      {
        id: "security-w10",
        title: "第 10 周：容器安全",
        summary: "保护容器镜像和运行时安全。",
        keyPoints: [
          "容器镜像扫描发现已知漏洞。",
          "运行时保护检测异常行为。",
          "最小化基础镜像减少攻击面。",
        ],
        lessons: [
          {
            id: "security-w10-1",
            title: "镜像安全与扫描",
            detail: "构建安全的容器镜像。",
            keyPoints: [
              "最小化镜像：distroless、scratch、Alpine。",
              "漏洞扫描：Trivy、Grype、Clair。",
              "镜像签名：cosign、Notary 验证镜像完整性。",
              "SBOM：生成软件物料清单。",
            ],
            resources: [
              { title: "Trivy", url: "https://trivy.dev/" },
              { title: "Distroless Images", url: "https://github.com/GoogleContainerTools/distroless" },
              { title: "Cosign", url: "https://docs.sigstore.dev/cosign/overview/" },
            ],
          },
          {
            id: "security-w10-2",
            title: "运行时安全",
            detail: "检测和防止容器运行时威胁。",
            keyPoints: [
              "Falco：云原生运行时威胁检测。",
              "Seccomp：限制系统调用。",
              "AppArmor/SELinux：强制访问控制。",
              "只读文件系统：防止运行时修改。",
            ],
            resources: [
              { title: "Falco", url: "https://falco.org/" },
              { title: "Seccomp", url: "https://kubernetes.io/docs/tutorials/security/seccomp/" },
              { title: "Runtime Security", url: "https://www.armosec.io/blog/runtime-security-tools/" },
            ],
          },
          {
            id: "security-w10-3",
            title: "容器安全最佳实践",
            detail: "全面的容器安全策略。",
            keyPoints: [
              "非 root 运行：容器内不使用 root 用户。",
              "资源限制：CPU、内存限制防止 DoS。",
              "网络隔离：限制容器间通信。",
              "Secret 管理：不在镜像中存储密钥。",
            ],
            resources: [
              { title: "CIS Docker Benchmark", url: "https://www.cisecurity.org/benchmark/docker" },
              { title: "Docker Security", url: "https://docs.docker.com/engine/security/" },
              { title: "Container Security Checklist", url: "https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html" },
            ],
          },
        ],
      },
      {
        id: "security-w11",
        title: "第 11 周：Kubernetes 安全",
        summary: "保护 Kubernetes 集群和工作负载。",
        keyPoints: [
          "Pod Security Admission 替代已废弃的 PSP。",
          "RBAC 是 Kubernetes 访问控制的核心。",
          "Network Policy 实现 Pod 级别网络隔离。",
        ],
        lessons: [
          {
            id: "security-w11-1",
            title: "Pod Security Admission",
            detail: "使用 PSA 强制 Pod 安全标准。",
            keyPoints: [
              "Pod Security Standards：Privileged、Baseline、Restricted。",
              "PSA 模式：enforce、audit、warn。",
              "命名空间级别策略：为不同工作负载设置不同级别。",
              "Validating Admission Policy：更灵活的策略控制（v1.28+）。",
            ],
            resources: [
              { title: "Pod Security Admission", url: "https://kubernetes.io/docs/concepts/security/pod-security-admission/" },
              { title: "Pod Security Standards", url: "https://kubernetes.io/docs/concepts/security/pod-security-standards/" },
              { title: "PSA Migration", url: "https://kubernetes.io/docs/tasks/configure-pod-container/migrate-from-psp/" },
            ],
          },
          {
            id: "security-w11-2",
            title: "RBAC 与 Service Account",
            detail: "配置 Kubernetes 访问控制。",
            keyPoints: [
              "RBAC：Role、ClusterRole、RoleBinding、ClusterRoleBinding。",
              "最小权限：只授予必要的权限。",
              "Service Account：工作负载身份，避免使用 default。",
              "Token 自动挂载：禁用不需要 API 访问的 Pod。",
            ],
            resources: [
              { title: "Kubernetes RBAC", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/" },
              { title: "Service Accounts", url: "https://kubernetes.io/docs/concepts/security/service-accounts/" },
              { title: "RBAC Best Practices", url: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/" },
            ],
          },
          {
            id: "security-w11-3",
            title: "Network Policy 与 Secret 管理",
            detail: "实现网络隔离和安全的密钥管理。",
            keyPoints: [
              "Network Policy：Pod 级别的网络隔离。",
              "默认拒绝：从拒绝所有流量开始。",
              "Kubernetes Secrets：base64 编码，不是加密。",
              "外部 Secret 管理：Vault、AWS Secrets Manager、Sealed Secrets。",
            ],
            resources: [
              { title: "Network Policies", url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/" },
              { title: "Secrets Management", url: "https://kubernetes.io/docs/concepts/configuration/secret/" },
              { title: "External Secrets Operator", url: "https://external-secrets.io/" },
            ],
          },
        ],
      },
      {
        id: "security-w12",
        title: "第 12 周：服务网格安全",
        summary: "使用服务网格增强微服务安全。",
        keyPoints: [
          "mTLS 实现服务间加密通信。",
          "服务网格提供统一的安全策略执行点。",
          "eBPF 是新一代网络安全技术。",
        ],
        lessons: [
          {
            id: "security-w12-1",
            title: "mTLS 与服务身份",
            detail: "实现零信任的服务间通信。",
            keyPoints: [
              "mTLS：双向 TLS，服务间相互认证。",
              "SPIFFE/SPIRE：服务身份标准。",
              "证书轮换：自动化证书生命周期管理。",
              "Istio mTLS：STRICT 模式强制 mTLS。",
            ],
            resources: [
              { title: "Istio mTLS", url: "https://istio.io/latest/docs/concepts/security/#mutual-tls-authentication" },
              { title: "SPIFFE", url: "https://spiffe.io/" },
              { title: "Service Mesh Security", url: "https://www.cncf.io/blog/2021/06/03/service-mesh-and-zero-trust-security/" },
            ],
          },
          {
            id: "security-w12-2",
            title: "Istio 安全策略",
            detail: "使用 Istio 实现细粒度安全控制。",
            keyPoints: [
              "AuthorizationPolicy：服务级别访问控制。",
              "PeerAuthentication：mTLS 策略。",
              "RequestAuthentication：JWT 验证。",
              "安全最佳实践：deny-by-default。",
            ],
            resources: [
              { title: "Istio Security", url: "https://istio.io/latest/docs/concepts/security/" },
              { title: "Authorization Policy", url: "https://istio.io/latest/docs/reference/config/security/authorization-policy/" },
              { title: "Istio Best Practices", url: "https://istio.io/latest/docs/ops/best-practices/security/" },
            ],
          },
          {
            id: "security-w12-3",
            title: "eBPF 与网络安全",
            detail: "使用 eBPF 实现高性能网络安全。",
            keyPoints: [
              "eBPF：内核级可编程，高性能观测和安全。",
              "Cilium：基于 eBPF 的 CNI 和网络策略。",
              "Tetragon：eBPF 运行时安全。",
              "无 Sidecar：减少资源开销和延迟。",
            ],
            resources: [
              { title: "eBPF", url: "https://ebpf.io/" },
              { title: "Cilium", url: "https://cilium.io/" },
              { title: "Tetragon", url: "https://tetragon.io/" },
            ],
          },
        ],
      },
      {
        id: "security-w13",
        title: "第 13 周：云平台安全",
        summary: "保护云基础设施和服务。",
        keyPoints: [
          "云 IAM 是云安全的基础。",
          "CSPM 自动化云安全态势管理。",
          "云原生安全工具提供深度集成。",
        ],
        lessons: [
          {
            id: "security-w13-1",
            title: "云 IAM 最佳实践",
            detail: "安全配置云身份和访问管理。",
            keyPoints: [
              "最小权限：使用细粒度策略。",
              "避免长期凭证：使用临时凭证和角色。",
              "工作负载身份：IRSA（AWS）、Workload Identity（GCP）。",
              "跨账户访问：使用角色假设而非共享凭证。",
            ],
            resources: [
              { title: "AWS IAM Best Practices", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html" },
              { title: "GCP IAM", url: "https://cloud.google.com/iam/docs/best-practices" },
              { title: "Azure RBAC", url: "https://learn.microsoft.com/en-us/azure/role-based-access-control/best-practices" },
            ],
          },
          {
            id: "security-w13-2",
            title: "云安全态势管理（CSPM）",
            detail: "自动化云安全配置检查。",
            keyPoints: [
              "CSPM：持续评估云配置合规性。",
              "CIS Benchmarks：云平台安全基线。",
              "工具：AWS Security Hub、Prowler、Checkov。",
              "策略即代码：Terraform/Pulumi 安全策略。",
            ],
            resources: [
              { title: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks" },
              { title: "Prowler", url: "https://prowler.pro/" },
              { title: "Checkov", url: "https://www.checkov.io/" },
            ],
          },
          {
            id: "security-w13-3",
            title: "云原生安全服务",
            detail: "利用云厂商安全服务。",
            keyPoints: [
              "AWS：GuardDuty、Security Hub、Inspector。",
              "GCP：Security Command Center、Binary Authorization。",
              "Azure：Defender for Cloud、Sentinel。",
              "密钥管理：KMS、Secrets Manager。",
            ],
            resources: [
              { title: "AWS Security Services", url: "https://aws.amazon.com/products/security/" },
              { title: "GCP Security", url: "https://cloud.google.com/security" },
              { title: "Azure Security", url: "https://azure.microsoft.com/en-us/products/category/security" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段五：安全测试与 DevSecOps（第 14-16 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "security-testing",
    title: "阶段五：安全测试与 DevSecOps",
    duration: "第 14-16 周",
    goal: "掌握安全测试工具链与 DevSecOps 自动化。",
    weeks: [
      {
        id: "security-w14",
        title: "第 14 周：静态分析与供应链安全",
        summary: "在开发阶段发现安全漏洞。",
        keyPoints: [
          "SAST 分析源代码发现漏洞。",
          "SCA 检测依赖中的已知漏洞。",
          "SBOM 是供应链安全的基础。",
        ],
        lessons: [
          {
            id: "security-w14-1",
            title: "SAST 静态应用安全测试",
            detail: "在编译前分析源代码安全问题。",
            keyPoints: [
              "SAST：分析源代码，发现安全缺陷。",
              "工具：Semgrep、SonarQube、CodeQL。",
              "自定义规则：针对业务逻辑的安全规则。",
              "误报处理：平衡安全与开发效率。",
            ],
            resources: [
              { title: "Semgrep", url: "https://semgrep.dev/" },
              { title: "CodeQL", url: "https://codeql.github.com/" },
              { title: "SAST Guide", url: "https://owasp.org/www-community/Source_Code_Analysis_Tools" },
            ],
          },
          {
            id: "security-w14-2",
            title: "SCA 软件组成分析",
            detail: "管理开源依赖风险。",
            keyPoints: [
              "SCA：识别依赖中的已知漏洞。",
              "工具：Snyk、Dependabot、Renovate。",
              "漏洞优先级：CVSS、可达性分析。",
              "许可证合规：识别许可证风险。",
            ],
            resources: [
              { title: "Snyk", url: "https://snyk.io/" },
              { title: "Dependabot", url: "https://docs.github.com/en/code-security/dependabot" },
              { title: "OWASP Dependency Check", url: "https://owasp.org/www-project-dependency-check/" },
            ],
          },
          {
            id: "security-w14-3",
            title: "SBOM 与供应链安全",
            detail: "建立软件供应链可见性。",
            keyPoints: [
              "SBOM：软件物料清单，列出所有组件。",
              "格式：SPDX、CycloneDX。",
              "SLSA：供应链安全框架。",
              "签名与验证：Sigstore、in-toto。",
            ],
            resources: [
              { title: "SBOM", url: "https://www.cisa.gov/sbom" },
              { title: "SLSA", url: "https://slsa.dev/" },
              { title: "Sigstore", url: "https://www.sigstore.dev/" },
            ],
          },
        ],
      },
      {
        id: "security-w15",
        title: "第 15 周：动态测试与渗透测试",
        summary: "测试运行中应用的安全性。",
        keyPoints: [
          "DAST 从外部测试运行中的应用。",
          "渗透测试模拟真实攻击。",
          "漏洞披露需要负责任的流程。",
        ],
        lessons: [
          {
            id: "security-w15-1",
            title: "DAST 动态应用安全测试",
            detail: "测试运行中应用的安全漏洞。",
            keyPoints: [
              "DAST：黑盒测试，模拟攻击者行为。",
              "工具：OWASP ZAP、Burp Suite、Nuclei。",
              "API 安全测试：REST、GraphQL API 扫描。",
              "自动化集成：CI/CD 中运行 DAST。",
            ],
            resources: [
              { title: "OWASP ZAP", url: "https://www.zaproxy.org/" },
              { title: "Burp Suite", url: "https://portswigger.net/burp" },
              { title: "DAST Guide", url: "https://owasp.org/www-community/Vulnerability_Scanning_Tools" },
            ],
          },
          {
            id: "security-w15-2",
            title: "渗透测试方法论",
            detail: "系统性地进行安全测试。",
            keyPoints: [
              "PTES：渗透测试执行标准。",
              "OWASP Testing Guide：Web 应用测试指南。",
              "阶段：侦察、扫描、漏洞利用、后渗透、报告。",
              "红队 vs 蓝队：攻防对抗演练。",
            ],
            resources: [
              { title: "OWASP Testing Guide", url: "https://owasp.org/www-project-web-security-testing-guide/" },
              { title: "PTES", url: "http://www.pentest-standard.org/" },
              { title: "HackTricks", url: "https://book.hacktricks.xyz/" },
            ],
          },
          {
            id: "security-w15-3",
            title: "漏洞管理与披露",
            detail: "管理发现的漏洞和负责任披露。",
            keyPoints: [
              "漏洞管理：发现、评估、修复、验证。",
              "优先级：CVSS、业务影响、可利用性。",
              "负责任披露：协调漏洞披露流程。",
              "Bug Bounty：外部安全研究者参与。",
            ],
            resources: [
              { title: "CVSS", url: "https://www.first.org/cvss/" },
              { title: "Responsible Disclosure", url: "https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html" },
              { title: "HackerOne", url: "https://www.hackerone.com/" },
            ],
          },
        ],
      },
      {
        id: "security-w16",
        title: "第 16 周：安全自动化",
        summary: "将安全集成到 CI/CD 流水线。",
        keyPoints: [
          "安全门禁阻止高危漏洞进入生产。",
          "Policy as Code 实现可审计的安全策略。",
          "GitOps 安全保护配置变更。",
        ],
        lessons: [
          {
            id: "security-w16-1",
            title: "CI/CD 安全集成",
            detail: "在流水线中集成安全检查。",
            keyPoints: [
              "安全门禁：阻止高危漏洞合并或部署。",
              "分阶段扫描：commit、PR、build、deploy。",
              "Secret 检测：防止凭证泄露到代码库。",
              "工具集成：GitHub Actions、GitLab CI 安全功能。",
            ],
            resources: [
              { title: "GitHub Security Features", url: "https://docs.github.com/en/code-security" },
              { title: "GitLab Security", url: "https://docs.gitlab.com/ee/user/application_security/" },
              { title: "CI/CD Security", url: "https://owasp.org/www-project-devsecops-guideline/latest/02b-Pipeline-Security" },
            ],
          },
          {
            id: "security-w16-2",
            title: "Policy as Code",
            detail: "将安全策略编码化。",
            keyPoints: [
              "OPA/Gatekeeper：Kubernetes 准入控制。",
              "Conftest：测试配置文件合规性。",
              "Sentinel/Checkov：IaC 安全扫描。",
              "版本控制：策略变更可追溯。",
            ],
            resources: [
              { title: "Gatekeeper", url: "https://open-policy-agent.github.io/gatekeeper/" },
              { title: "Conftest", url: "https://www.conftest.dev/" },
              { title: "Policy as Code", url: "https://www.paloaltonetworks.com/cyberpedia/what-is-policy-as-code" },
            ],
          },
          {
            id: "security-w16-3",
            title: "GitOps 安全",
            detail: "保护 GitOps 工作流安全。",
            keyPoints: [
              "Git 仓库安全：分支保护、签名提交。",
              "Secret 管理：Sealed Secrets、SOPS、External Secrets。",
              "审计日志：所有变更可追溯。",
              "漂移检测：检测配置偏离。",
            ],
            resources: [
              { title: "GitOps Security", url: "https://www.weave.works/blog/gitops-security" },
              { title: "Sealed Secrets", url: "https://sealed-secrets.netlify.app/" },
              { title: "SOPS", url: "https://github.com/getsops/sops" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段六：安全运营与合规（第 17-18 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "security-operations",
    title: "阶段六：安全运营与合规",
    duration: "第 17-18 周",
    goal: "掌握安全监控、事件响应与合规管理。",
    weeks: [
      {
        id: "security-w17",
        title: "第 17 周：安全监控与响应",
        summary: "检测、分析和响应安全事件。",
        keyPoints: [
          "SIEM 集中收集和分析安全日志。",
          "威胁检测需要良好的基线和规则。",
          "事件响应需要预先准备的流程。",
        ],
        lessons: [
          {
            id: "security-w17-1",
            title: "SIEM 与日志分析",
            detail: "集中管理和分析安全日志。",
            keyPoints: [
              "SIEM：安全信息和事件管理。",
              "日志源：应用、系统、网络、云服务。",
              "工具：Splunk、Elastic Security、Wazuh。",
              "日志标准化：统一格式便于分析。",
            ],
            resources: [
              { title: "Elastic Security", url: "https://www.elastic.co/security" },
              { title: "Wazuh", url: "https://wazuh.com/" },
              { title: "SIEM Best Practices", url: "https://www.crowdstrike.com/cybersecurity-101/security-information-and-event-management-siem/" },
            ],
          },
          {
            id: "security-w17-2",
            title: "威胁检测与狩猎",
            detail: "主动发现安全威胁。",
            keyPoints: [
              "检测规则：Sigma、YARA、Suricata。",
              "威胁情报：IOC、TTP、ATT&CK。",
              "威胁狩猎：假设驱动的主动搜索。",
              "异常检测：建立基线，发现偏离。",
            ],
            resources: [
              { title: "MITRE ATT&CK", url: "https://attack.mitre.org/" },
              { title: "Sigma Rules", url: "https://github.com/SigmaHQ/sigma" },
              { title: "Threat Hunting", url: "https://www.crowdstrike.com/cybersecurity-101/threat-hunting/" },
            ],
          },
          {
            id: "security-w17-3",
            title: "事件响应",
            detail: "有效响应安全事件。",
            keyPoints: [
              "IR 流程：准备、检测、遏制、根除、恢复、总结。",
              "事件分类：严重性、影响范围。",
              "取证保全：保留证据完整性。",
              "事后分析：根本原因分析和改进。",
            ],
            resources: [
              { title: "NIST IR Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final" },
              { title: "SANS IR", url: "https://www.sans.org/white-papers/33901/" },
              { title: "IR Playbooks", url: "https://www.incidentresponse.org/playbooks/" },
            ],
          },
        ],
      },
      {
        id: "security-w18",
        title: "第 18 周：合规与治理",
        summary: "建立安全合规体系和治理框架。",
        keyPoints: [
          "合规是安全的底线而非目标。",
          "安全框架提供结构化的安全管理方法。",
          "持续合规优于点检审计。",
        ],
        lessons: [
          {
            id: "security-w18-1",
            title: "安全框架与标准",
            detail: "采用行业安全框架和标准。",
            keyPoints: [
              "ISO 27001：信息安全管理体系。",
              "NIST CSF：网络安全框架（识别、保护、检测、响应、恢复）。",
              "CIS Controls：优先级排序的安全控制。",
              "SOC 2：服务组织控制报告。",
            ],
            resources: [
              { title: "NIST CSF", url: "https://www.nist.gov/cyberframework" },
              { title: "ISO 27001", url: "https://www.iso.org/isoiec-27001-information-security.html" },
              { title: "CIS Controls", url: "https://www.cisecurity.org/controls" },
            ],
          },
          {
            id: "security-w18-2",
            title: "隐私与数据保护",
            detail: "遵守数据保护法规。",
            keyPoints: [
              "GDPR：欧盟通用数据保护条例。",
              "隐私设计：在系统设计中内置隐私保护。",
              "数据分类：识别敏感数据并分级保护。",
              "数据生命周期：收集、存储、使用、删除。",
            ],
            resources: [
              { title: "GDPR", url: "https://gdpr.eu/" },
              { title: "Privacy by Design", url: "https://www.ipc.on.ca/wp-content/uploads/resources/7foundationalprinciples.pdf" },
              { title: "Data Protection", url: "https://ico.org.uk/for-organisations/guide-to-data-protection/" },
            ],
          },
          {
            id: "security-w18-3",
            title: "安全策略与治理",
            detail: "建立安全治理体系。",
            keyPoints: [
              "安全策略：组织层面的安全要求。",
              "安全意识培训：全员安全意识。",
              "风险管理：识别、评估、处置风险。",
              "安全度量：衡量安全效果的指标。",
            ],
            resources: [
              { title: "SANS Security Policy", url: "https://www.sans.org/information-security-policy/" },
              { title: "Risk Management", url: "https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final" },
              { title: "Security Metrics", url: "https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20Performance%20Goals%20Key%20Insights.pdf" },
            ],
          },
        ],
      },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════
// 知识卡片
// ═══════════════════════════════════════════════════════════════
export const securityKnowledgeCards: KnowledgeCard[] = [
  {
    id: "security-kc-1",
    title: "威胁建模 STRIDE",
    summary: "STRIDE 是微软提出的威胁分类模型，用于系统性识别安全威胁。",
    points: [
      "Spoofing：身份伪造",
      "Tampering：数据篡改",
      "Repudiation：抵赖",
      "Information Disclosure：信息泄露",
      "Denial of Service：拒绝服务",
      "Elevation of Privilege：权限提升",
    ],
    practice: "为一个简单的 Web 应用进行威胁建模，使用 STRIDE 识别主要威胁。",
  },
  {
    id: "security-kc-2",
    title: "OWASP Top 10:2025",
    summary: "OWASP Top 10 是最具影响力的 Web 应用安全风险列表。",
    points: [
      "A01: Broken Access Control（连续榜首）",
      "A02: Security Misconfiguration",
      "A03: Software Supply Chain Failures（新）",
      "A05: Injection（下降）",
      "A10: Mishandling of Exceptional Conditions（新）",
    ],
    practice: "审查一个项目，检查是否存在 OWASP Top 10 中的漏洞。",
  },
  {
    id: "security-kc-3",
    title: "零信任核心原则",
    summary: "零信任是一种安全模型：永不信任，始终验证。",
    points: [
      "每个请求都需要认证和授权",
      "假设网络已被攻破",
      "实施最小权限访问",
      "持续验证和风险评估",
    ],
    practice: "设计一个零信任架构方案，从身份开始实施。",
  },
  {
    id: "security-kc-4",
    title: "容器安全最佳实践",
    summary: "容器安全需要从镜像构建到运行时的全生命周期保护。",
    points: [
      "使用最小化基础镜像（distroless）",
      "扫描镜像漏洞（Trivy）",
      "运行时保护（Falco）",
      "非 root 用户运行容器",
    ],
    practice: "配置 Trivy 扫描 CI/CD 中的容器镜像。",
  },
  {
    id: "security-kc-5",
    title: "Kubernetes 安全三要素",
    summary: "Kubernetes 安全的三个核心：PSA、RBAC、Network Policy。",
    points: [
      "Pod Security Admission：强制 Pod 安全标准",
      "RBAC：基于角色的访问控制",
      "Network Policy：Pod 级别网络隔离",
      "默认拒绝策略是最安全的起点",
    ],
    practice: "为一个命名空间配置 Restricted PSA 策略。",
  },
  {
    id: "security-kc-6",
    title: "DevSecOps 工具链",
    summary: "将安全测试集成到 CI/CD 流水线中。",
    points: [
      "SAST：Semgrep、CodeQL（静态代码分析）",
      "SCA：Snyk、Dependabot（依赖扫描）",
      "DAST：OWASP ZAP、Burp Suite（动态测试）",
      "Secret 检测：Gitleaks、TruffleHog",
    ],
    practice: "在 GitHub Actions 中配置完整的安全扫描流水线。",
  },
  {
    id: "security-kc-7",
    title: "供应链安全 SLSA",
    summary: "SLSA 是保护软件供应链安全的框架。",
    points: [
      "SBOM：软件物料清单",
      "SLSA 等级：L1-L4 逐步增强",
      "构建来源证明：Provenance",
      "签名验证：Sigstore、cosign",
    ],
    practice: "为一个项目生成 SBOM 并使用 cosign 签名容器镜像。",
  },
  {
    id: "security-kc-8",
    title: "事件响应流程",
    summary: "事件响应是安全运营的核心能力。",
    points: [
      "准备：建立 IR 团队和预案",
      "检测与分析：确认事件性质",
      "遏制、根除、恢复：控制影响",
      "事后分析：总结改进",
    ],
    practice: "编写一个安全事件响应预案并进行桌面演练。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const securityExamQuestions: QuizQuestion[] = [
  {
    id: "security-q1",
    question: "CIA 三元组中的 I 代表什么？",
    options: ["Identity", "Integrity", "Infrastructure", "Isolation"],
    answer: 1,
    rationale: "CIA 三元组是 Confidentiality（机密性）、Integrity（完整性）、Availability（可用性）。",
  },
  {
    id: "security-q2",
    question: "STRIDE 威胁模型中的 S 代表什么？",
    options: ["Security", "Spoofing", "Session", "System"],
    answer: 1,
    rationale: "STRIDE 中 S 代表 Spoofing（身份伪造），即攻击者冒充合法用户或系统。",
  },
  {
    id: "security-q3",
    question: "OWASP Top 10:2025 中排名第一的风险是什么？",
    options: ["Injection", "Broken Access Control", "Cryptographic Failures", "Security Misconfiguration"],
    answer: 1,
    rationale: "Broken Access Control 连续多年位居 OWASP Top 10 榜首。",
  },
  {
    id: "security-q4",
    question: "OWASP Top 10:2025 新增的类别是什么？",
    options: ["Injection", "XSS", "Software Supply Chain Failures", "Broken Authentication"],
    answer: 2,
    rationale: "Software Supply Chain Failures 是 2025 版本新增的类别，反映了供应链攻击的增加。",
  },
  {
    id: "security-q5",
    question: "推荐用于密码存储的哈希算法是？",
    options: ["MD5", "SHA-1", "Argon2id", "SHA-256"],
    answer: 2,
    rationale: "Argon2id 是密码哈希竞赛的获胜者，专为密码存储设计，具有内存硬度。",
  },
  {
    id: "security-q6",
    question: "OAuth 2.1 推荐的授权流程是什么？",
    options: ["Implicit Flow", "Password Grant", "Authorization Code + PKCE", "Client Credentials"],
    answer: 2,
    rationale: "OAuth 2.1 废弃了 Implicit Flow，推荐使用 Authorization Code + PKCE。",
  },
  {
    id: "security-q7",
    question: "零信任架构的核心原则是什么？",
    options: ["信任但验证", "永不信任，始终验证", "边界防护", "纵深防御"],
    answer: 1,
    rationale: "零信任的核心原则是「永不信任，始终验证」，每个请求都需要认证和授权。",
  },
  {
    id: "security-q8",
    question: "NIST 零信任架构的权威参考文档是？",
    options: ["SP 800-53", "SP 800-207", "SP 800-63", "SP 800-171"],
    answer: 1,
    rationale: "NIST SP 800-207 是零信任架构的权威参考文档。",
  },
  {
    id: "security-q9",
    question: "用于容器镜像漏洞扫描的工具是？",
    options: ["Falco", "Trivy", "OPA", "Istio"],
    answer: 1,
    rationale: "Trivy 是流行的开源容器镜像漏洞扫描工具。",
  },
  {
    id: "security-q10",
    question: "用于容器运行时威胁检测的工具是？",
    options: ["Trivy", "Snyk", "Falco", "Semgrep"],
    answer: 2,
    rationale: "Falco 是 CNCF 毕业项目，用于云原生运行时威胁检测。",
  },
  {
    id: "security-q11",
    question: "Kubernetes 中替代 PodSecurityPolicy 的是什么？",
    options: ["NetworkPolicy", "Pod Security Admission", "RBAC", "ServiceAccount"],
    answer: 1,
    rationale: "Pod Security Admission (PSA) 在 Kubernetes 1.25 中替代了已废弃的 PodSecurityPolicy。",
  },
  {
    id: "security-q12",
    question: "Pod Security Standards 中最严格的级别是？",
    options: ["Privileged", "Baseline", "Restricted", "Hardened"],
    answer: 2,
    rationale: "Restricted 是最严格的级别，强制执行 Pod 加固最佳实践。",
  },
  {
    id: "security-q13",
    question: "服务网格中用于服务间加密通信的技术是？",
    options: ["TLS", "mTLS", "IPsec", "SSH"],
    answer: 1,
    rationale: "mTLS（双向 TLS）在服务网格中实现服务间相互认证和加密通信。",
  },
  {
    id: "security-q14",
    question: "SAST 工具的作用是什么？",
    options: ["扫描运行中的应用", "分析源代码安全问题", "检测网络攻击", "管理密钥"],
    answer: 1,
    rationale: "SAST（静态应用安全测试）分析源代码，在编译前发现安全漏洞。",
  },
  {
    id: "security-q15",
    question: "用于检测代码中泄露的密钥的工具是？",
    options: ["Trivy", "Gitleaks", "OWASP ZAP", "Burp Suite"],
    answer: 1,
    rationale: "Gitleaks 专门用于检测 Git 仓库中泄露的密钥、密码等敏感信息。",
  },
  {
    id: "security-q16",
    question: "SBOM 的全称是什么？",
    options: ["Security Bill of Materials", "Software Bill of Materials", "System Build of Modules", "Secure Binary Object Model"],
    answer: 1,
    rationale: "SBOM 是 Software Bill of Materials（软件物料清单），列出软件的所有组件。",
  },
  {
    id: "security-q17",
    question: "SLSA 框架用于什么？",
    options: ["网络安全", "供应链安全", "身份认证", "数据加密"],
    answer: 1,
    rationale: "SLSA（Supply-chain Levels for Software Artifacts）是保护软件供应链安全的框架。",
  },
  {
    id: "security-q18",
    question: "MITRE ATT&CK 是什么？",
    options: ["漏洞数据库", "攻击技术知识库", "安全框架", "加密标准"],
    answer: 1,
    rationale: "MITRE ATT&CK 是基于真实观察的攻击者战术、技术和程序（TTP）知识库。",
  },
  {
    id: "security-q19",
    question: "事件响应的第一步是什么？",
    options: ["遏制", "根除", "准备", "恢复"],
    answer: 2,
    rationale: "事件响应流程从准备开始：建立 IR 团队、制定预案、准备工具。",
  },
  {
    id: "security-q20",
    question: "SOC 2 审计主要关注什么？",
    options: ["财务报表", "服务组织的安全控制", "代码质量", "网络性能"],
    answer: 1,
    rationale: "SOC 2 是针对服务组织的审计报告，关注安全性、可用性、处理完整性、机密性和隐私。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const securityRoadmap: RoadmapDefinition = {
  id: "security",
  label: "综合安全",
  title: "综合安全",
  durationLabel: "18 个主题",
  description:
    "从安全基础原则出发，深入 OWASP Top 10:2025、身份与访问管理、零信任架构，掌握容器和 Kubernetes 安全、服务网格安全、云平台安全，学习 DevSecOps 工具链与安全自动化，建立安全运营与合规体系。",
  heroBadge: "OWASP · 零信任 · K8s 安全 · DevSecOps",
  stages: securityStages,
  knowledgeCards: securityKnowledgeCards,
  examQuestions: securityExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始安全学习之旅！先从安全基础原则和威胁建模开始。"
    if (percent < 25) return "继续深入应用安全，掌握 OWASP Top 10 和安全编码。"
    if (percent < 50) return "身份与访问管理是安全的核心，重点掌握零信任架构。"
    if (percent < 75) return "云原生安全是现代安全的重点，深入容器和 Kubernetes 安全。"
    if (percent < 100) return "即将完成！DevSecOps 和安全运营是安全工程师的必备技能。"
    return "恭喜完成！你已掌握综合安全的完整知识体系。"
  },
  resourceGuide: {
    environment:
      "推荐使用 OWASP WebGoat、Juice Shop 进行安全实践。Kubernetes 安全可使用 Kind 或 Minikube 本地测试。",
    fallbackKeyPoints: [
      "CIA 三元组是信息安全的基础：机密性、完整性、可用性",
      "OWASP Top 10:2025 新增供应链安全和异常处理类别",
      "零信任核心：永不信任，始终验证",
      "容器安全：Trivy 扫描镜像，Falco 运行时保护",
      "DevSecOps：将安全测试（SAST/SCA/DAST）集成到 CI/CD",
    ],
    handsOnSteps: [
      "使用 STRIDE 为一个系统进行威胁建模",
      "在 OWASP Juice Shop 中发现和修复漏洞",
      "配置 Kubernetes Pod Security Admission",
      "设置 GitHub Actions 安全扫描流水线",
      "编写安全事件响应预案并进行演练",
    ],
    selfChecks: [
      "能否解释 STRIDE 威胁模型的六种威胁类型？",
      "能否配置 OAuth 2.1 + PKCE 授权流程？",
      "能否设计零信任架构的实施路径？",
      "能否配置 Kubernetes RBAC 和 Network Policy？",
      "能否建立完整的 DevSecOps 流水线？",
    ],
    extensions: [
      "深入学习渗透测试（OSCP 认证）",
      "研究云安全（AWS/GCP/Azure 安全专项）",
      "学习安全架构设计（SABSA、TOGAF）",
      "探索安全研究和漏洞挖掘",
    ],
    lessonQuizAdvice: "每周完成后测验，重点关注 OWASP Top 10、零信任原则和 DevSecOps 工具链。",
  },
}
