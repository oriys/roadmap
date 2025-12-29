import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "w4-1": {
        lessonId: "w4-1",
        background: [
            "【JWT 结构】JWT 是 RFC 7519 定义的开放标准，由三部分组成：Header（令牌类型和签名算法）、Payload（声明数据）、Signature（验证签名）。三部分用点号连接，各自 Base64Url 编码。",
            "【无状态认证】JWT 是自包含的无状态令牌，服务端无需存储会话信息。这使得水平扩展更容易，但也意味着无法主动使令牌失效（除非引入黑名单机制）。",
            "【签名算法】JWT 支持 HMAC（对称）、RSA 和 ECDSA（非对称）签名。HMAC 简单高效但密钥需保密；RSA/ECDSA 允许公钥验证，适合微服务架构。",
            "【声明类型】Payload 包含三类声明：已注册声明（iss/exp/sub 等）、公开声明（IANA 注册）、私有声明（自定义业务数据）。注意不要在未加密的 JWT 中存储敏感信息。",
            "【验证 vs 校验】验证（validation）检查令牌结构、格式和声明有效性（如过期时间）；校验（verification）确认签名真实性和数据完整性。两者通常联合实施。",
            "【安全存储】浏览器端 JWT 存储选择：localStorage（XSS 风险）、httpOnly Cookie（CSRF 风险）。推荐使用 httpOnly + Secure + SameSite Cookie，配合 CSRF Token。"
        ],
        keyDifficulties: [
            "【刷新机制设计】Access Token 短期有效（如 15 分钟），Refresh Token 长期有效（如 7 天）。刷新时验证 Refresh Token 有效性，签发新 Access Token。Refresh Token 轮换可提高安全性。",
            "【令牌撤销难题】JWT 无状态特性导致无法即时撤销。解决方案：1) 短有效期 + 刷新机制 2) Token 版本号/黑名单（需存储）3) 密钥轮换（影响所有用户）。",
            "【密码安全存储】OWASP 建议：使用 bcrypt/Argon2 等自适应哈希算法，最低 8 字符（有 MFA）或 15 字符（无 MFA），检查泄露密码库（Pwned Passwords），使用恒定时间比较防止时序攻击。",
            "【防暴力破解】实施多层防护：账户锁定（指数退避）、登录限流、CAPTCHA、异常检测。错误消息应模糊化，避免泄露账户存在性。",
            "【多因素认证】MFA 可阻止 99.9% 的账户攻击。常见因素：知识（密码）、拥有（手机/硬件密钥）、生物特征。考虑 TOTP、SMS、Passkey 等方案。"
        ],
        handsOnPath: [
            "使用 jsonwebtoken 库生成 JWT：设置 payload（userId、role）、指定算法（RS256）、配置过期时间（expiresIn: '15m'）。",
            "实现 JWT 验证中间件：从 Authorization 头提取 Token，验证签名和过期时间，将解码后的用户信息挂载到 req.user。",
            "设计 Refresh Token 机制：生成随机 Token 存储到数据库/Redis，关联用户 ID 和过期时间。实现 /auth/refresh 端点刷新 Access Token。",
            "使用 bcrypt 实现密码哈希：注册时 bcrypt.hash(password, 10) 存储；登录时 bcrypt.compare(password, hash) 验证。",
            "实现登录限流：使用 express-rate-limit 限制同一 IP 的登录尝试次数（如 5 次/分钟），添加指数退避锁定机制。",
            "配置安全 Cookie：设置 httpOnly、secure、sameSite='strict'，存储 Refresh Token。Access Token 可通过响应体返回或使用 Cookie。",
            "编写单元测试：测试 Token 生成/验证、过期处理、密码哈希、登录限流等核心功能。"
        ],
        selfCheck: [
            "JWT 的三部分结构是什么？各自的作用是什么？为什么 Payload 不适合存储敏感信息？",
            "Access Token 和 Refresh Token 的职责分离是什么？为什么需要这种设计？",
            "如何实现 JWT 的即时撤销？各方案的优缺点是什么？",
            "bcrypt 的 cost factor（如 10）代表什么？如何选择合适的值？",
            "为什么登录错误消息应该是'用户名或密码错误'而非具体指出哪个错误？",
            "httpOnly Cookie 防止了什么攻击？为什么还需要配合 SameSite 和 CSRF Token？",
            "如何设计一个防暴力破解的登录系统？需要考虑哪些层面？",
            "在微服务架构中，RS256 相比 HS256 有什么优势？"
        ],
        extensions: [
            "研究 OAuth 2.0 Security Best Current Practice（RFC 9700），了解最新的 Token 安全建议。",
            "探索 Passkeys/WebAuthn 无密码认证方案，了解基于公钥的认证如何取代传统密码。",
            "学习 JWT 的替代方案：Paseto（Platform-Agnostic Security Tokens）的设计理念和安全优势。",
            "研究 Token Binding 和 DPoP（Demonstrating Proof of Possession）如何防止令牌被盗用。",
            "了解 OpenID Connect 如何在 OAuth2 基础上标准化身份认证层。"
        ],
        sourceUrls: [
            "https://jwt.io/introduction",
            "https://oauth.net/2/oauth-best-practice/",
            "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"
        ]
    },
    "w4-2": {
        lessonId: "w4-2",
        background: [
            "【OAuth2 核心角色】RFC 6749 定义四个角色：Resource Owner（用户）、Resource Server（API 服务器）、Client（第三方应用）、Authorization Server（授权服务器）。OAuth2 将客户端与资源所有者分离。",
            "【授权码流程】最安全的 OAuth2 流程：用户重定向到授权服务器 -> 用户认证并授权 -> 返回 Authorization Code -> 后端用 Code 换取 Access Token。Code 一次性使用，Token 不暴露给前端。",
            "【四种授权类型】Authorization Code（Web 应用）、Implicit（已废弃，曾用于 SPA）、Resource Owner Password Credentials（高度信任场景）、Client Credentials（服务间通信）。",
            "【PKCE 扩展】Proof Key for Code Exchange 防止授权码被拦截。客户端生成 code_verifier 和 code_challenge，授权请求带 challenge，Token 请求带 verifier。现代 SPA 必须使用。",
            "【Token 类型】Access Token 用于访问资源（有限时效）；Refresh Token 用于获取新 Access Token（长期有效）。RFC 建议 Access Token 短期有效，Refresh Token 支持轮换。",
            "【Scope 机制】Scope 定义访问权限范围，如 profile、email、openid。建议增量请求——在需要时才请求额外权限，而非一次性请求所有权限。"
        ],
        keyDifficulties: [
            "【授权码 vs 隐式流程】隐式流程直接返回 Token，存在 Token 泄露风险，RFC 9700 已不推荐。现代 SPA 应使用授权码 + PKCE 流程，Token 由后端持有或安全存储。",
            "【State 参数防 CSRF】授权请求必须携带随机 state 参数，回调时验证一致性。防止攻击者构造恶意授权链接，将受害者账户绑定到攻击者控制的第三方账户。",
            "【Refresh Token 安全】Refresh Token 长期有效，泄露风险大。安全措施：绑定客户端标识、单次使用后轮换、检测重放攻击、支持主动撤销。",
            "【多租户场景】同一用户可能有多个社交账号。设计用户-社交账号关联表，支持：一个用户绑定多个社交账号、社交账号唯一（防止绑定到多个本地用户）、解绑/重绑机制。",
            "【Token 大小与存储】Google Access Token 最大 2048 字节，Refresh Token 512 字节。注意 Cookie 大小限制（4KB），大 Token 考虑使用 Token 引用 + 服务端存储。"
        ],
        handsOnPath: [
            "注册 Google Cloud OAuth 应用：创建 OAuth 2.0 客户端 ID，配置授权回调 URI，获取 Client ID 和 Client Secret。",
            "配置 Passport.js OAuth2 策略：安装 passport-google-oauth20，配置 clientID/clientSecret/callbackURL，实现 verify 回调处理用户信息。",
            "实现授权路由：/auth/google 重定向到 Google 授权页面，/auth/google/callback 处理回调，交换 Code 获取 Token。",
            "设计用户关联逻辑：首次登录创建用户并关联社交账号；已有账户时关联社交账号或提示冲突；登录时通过 providerId 查找本地用户。",
            "实现 state 参数防护：授权请求生成随机 state 存入 session，回调时验证 state 一致性，不匹配则拒绝请求。",
            "存储 Token 信息：将 Access Token、Refresh Token、过期时间存入数据库，关联用户 ID。实现 Token 刷新逻辑。",
            "添加 GitHub OAuth 登录：复用 OAuth2 框架，配置 passport-github2 策略，验证多提供商登录流程。"
        ],
        selfCheck: [
            "OAuth2 的四个角色是什么？它们之间如何交互？",
            "为什么授权码流程比隐式流程更安全？Code 交换 Token 的步骤发生在哪里？",
            "PKCE 解决什么问题？code_verifier 和 code_challenge 的关系是什么？",
            "state 参数的作用是什么？如果不验证会有什么安全风险？",
            "当用户已有账户但用新的社交账号登录时，如何处理？有哪些策略？",
            "Refresh Token 泄露后如何降低损失？有哪些安全机制？",
            "如何实现'用 Google 登录'和'绑定 Google 账号'两种不同的流程？",
            "OAuth2 Scope 的最佳实践是什么？为什么建议增量请求？"
        ],
        extensions: [
            "深入阅读 RFC 6749 和 RFC 9700，理解 OAuth2 协议细节和最新安全实践。",
            "研究 OpenID Connect 规范，了解 id_token 如何标准化用户身份信息。",
            "探索 Apple Sign In 的实现，了解其与标准 OAuth2 的差异（如 JWT 格式的用户信息）。",
            "学习 OAuth2.1 草案，了解协议的简化和安全增强方向。",
            "研究企业级身份管理：SAML、SCIM 协议在企业 SSO 场景的应用。"
        ],
        sourceUrls: [
            "https://datatracker.ietf.org/doc/html/rfc6749",
            "https://developers.google.com/identity/protocols/oauth2",
            "http://www.passportjs.org/packages/passport-oauth2/"
        ]
    },
    "w4-3": {
        lessonId: "w4-3",
        background: [
            "【RBAC 定义】Role-Based Access Control 基于角色分配权限。用户 -> 角色 -> 权限 的三层模型。相比直接给用户分配权限，RBAC 更易管理、更易审计、更易扩展。",
            "【权限加法模型】当用户拥有多个角色时，有效权限是所有角色权限的并集（union）。这是 RBAC 的基本原则：权限只增不减，通过角色组合实现精细控制。",
            "【最小权限原则】Auth0 最佳实践：'Assign users the fewest number of permissions that allow them to get their work done'。避免过度授权，定期审计权限分配。",
            "【电商角色示例】典型电商角色：customer（浏览/购买）、seller（管理店铺/商品）、admin（平台管理）、support（客服处理）。每个角色对应一组操作权限。",
            "【资源级权限】除了角色级权限，还需资源级权限控制。如：用户只能修改自己的订单、卖家只能管理自己店铺的商品。这需要在业务逻辑中结合资源所有权判断。",
            "【CASL 能力模型】CASL 库使用 Ability 定义权限：'用户可以对哪些资源执行哪些操作'。支持条件过滤（如 'can update Article where authorId = userId'），前后端共享权限定义。"
        ],
        keyDifficulties: [
            "【权限粒度设计】粗粒度（角色级）vs 细粒度（资源级）权限。粗粒度简单但不够灵活；细粒度灵活但复杂度高。电商场景建议：角色控制功能访问 + 资源所有权控制数据访问。",
            "【动态权限判断】某些权限需要运行时判断，如：订单状态为'待发货'时卖家可以发货。这需要在权限模型中支持条件表达式，或在业务逻辑中显式检查。",
            "【权限继承与层级】角色可以有继承关系：admin 继承 seller 的所有权限。实现方式：角色层级树、权限显式合并。注意避免循环继承。",
            "【前后端权限同步】前端需要权限信息控制 UI 展示（隐藏无权限按钮），后端必须再次验证（防止绕过）。设计统一的权限定义格式，前后端共享。",
            "【性能考量】每次请求都查询权限影响性能。优化：将权限编码到 JWT Claims、使用 Redis 缓存用户权限、权限变更时主动失效缓存。"
        ],
        handsOnPath: [
            "设计权限数据模型：users 表、roles 表、permissions 表、user_roles 关联表、role_permissions 关联表。使用 Prisma Schema 定义关系。",
            "实现角色分配 API：POST /users/:id/roles 分配角色、DELETE /users/:id/roles/:roleId 移除角色、GET /users/:id/roles 查询用户角色。",
            "创建权限检查中间件：从 JWT 提取用户 ID -> 查询用户角色和权限 -> 检查是否包含所需权限 -> 允许/拒绝请求。",
            "集成 CASL 库：定义 Ability 规则（defineAbility），创建基于用户角色的能力实例，在路由中使用 ForbiddenError.from(ability).throwUnlessCan()。",
            "实现资源级权限：在 CASL 规则中添加条件，如 can('update', 'Product', { sellerId: user.id })。查询时自动过滤无权限资源。",
            "设计管理后台权限页面：展示所有角色和权限、支持创建/编辑角色、可视化配置角色权限、用户角色分配界面。",
            "添加权限审计日志：记录权限变更（谁在何时给谁分配了什么角色）、记录敏感操作（谁在何时访问了什么资源）。"
        ],
        selfCheck: [
            "RBAC 的三层模型是什么？相比 ACL（访问控制列表）有什么优势？",
            "当用户同时拥有 seller 和 support 角色时，他的有效权限如何计算？",
            "如何实现'用户只能编辑自己的商品'这种资源级权限控制？",
            "为什么前端隐藏无权限按钮不足以保证安全？后端如何处理？",
            "权限信息存储在 JWT 中有什么优缺点？何时需要刷新权限？",
            "如何设计权限继承？admin 应该自动拥有 seller 的所有权限吗？",
            "CASL 库的 can/cannot 规则如何定义？条件过滤如何工作？",
            "权限变更后如何确保已登录用户的权限及时更新？"
        ],
        extensions: [
            "研究 ABAC（Attribute-Based Access Control），了解基于属性的更灵活权限模型。",
            "探索 Google Zanzibar 论文，了解大规模权限系统的设计（SpiceDB、OpenFGA 等开源实现）。",
            "学习 AWS IAM 的权限模型，理解 Policy、Principal、Resource、Condition 的设计。",
            "研究 Casbin 权限库，比较其与 CASL 的模型差异和适用场景。",
            "了解零信任架构中的持续验证，如何实现'从不信任，始终验证'。"
        ],
        sourceUrls: [
            "https://auth0.com/docs/manage-users/access-control/rbac",
            "https://casl.js.org/v6/en/",
            "https://google.aip.dev/general"
        ]
    },
    "w4-4": {
        lessonId: "w4-4",
        background: [
            "【RESTful 资源设计】Google API 设计指南强调资源导向：用户资料是 /users/{userId}/profile，地址是 /users/{userId}/addresses。使用标准方法：GET（读取）、POST（创建）、PUT/PATCH（更新）、DELETE（删除）。",
            "【用户资料字段】典型字段：昵称、头像、性别、生日、手机号、邮箱、个人简介。敏感字段（手机号、邮箱）需脱敏展示（如 138****1234），修改需验证。",
            "【多地址管理】电商用户需要管理多个收货地址：家庭地址、公司地址等。支持设置默认地址，下单时快速选择。地址数量可设上限（如最多 20 个）。",
            "【地址格式标准化】Google Address Validation API 提供地址验证和标准化服务。确保地址格式正确、可投递，返回标准化的地址组件（省/市/区/街道/门牌号）。",
            "【Zod 表单验证】Zod 是 TypeScript-first 的验证库，支持类型推导。定义 Schema 后自动获得 TypeScript 类型，在前后端共享验证逻辑，确保数据一致性。",
            "【API 设计模式】Google AIP 提供标准模式：分页（page_size + page_token）、过滤（filter 表达式）、字段掩码（fields 参数控制返回字段）、部分更新（PATCH + update_mask）。"
        ],
        keyDifficulties: [
            "【敏感信息修改流程】修改手机号/邮箱需要安全验证流程：1) 验证当前密码或原手机/邮箱 2) 发送新手机/邮箱验证码 3) 验证成功后更新。防止账户被盗后篡改联系方式。",
            "【默认地址逻辑】设置新默认地址时需取消旧默认地址，保证唯一性。删除默认地址时可自动选择另一个地址为默认，或置空让用户重新选择。",
            "【地址联动与校验】省市区三级联动选择器，确保用户选择有效的行政区划。后端校验地址完整性和合理性，详细地址长度限制，特殊字符过滤。",
            "【乐观更新与冲突处理】前端乐观更新提升体验，但需处理冲突：用 version 字段或 updated_at 时间戳实现乐观锁，更新时检查版本，冲突时提示用户刷新。",
            "【数据一致性】用户资料可能被多个服务使用（订单服务、消息服务等）。考虑：是否需要数据冗余/同步？使用事件驱动更新还是实时查询？"
        ],
        handsOnPath: [
            "设计用户资料表：id、nickname、avatar_url、gender、birthday、phone（加密存储）、email、bio、created_at、updated_at。使用 Prisma 定义模型。",
            "设计地址表：id、user_id、label（家/公司）、recipient_name、phone、province、city、district、street_address、postal_code、is_default、created_at。",
            "使用 Zod 定义验证 Schema：ProfileUpdateSchema（昵称长度、生日格式）、AddressCreateSchema（必填字段、手机号格式）。前后端复用同一 Schema。",
            "实现资料 CRUD API：GET /users/me/profile 获取资料、PATCH /users/me/profile 更新资料（支持部分更新）。返回更新后的完整资料。",
            "实现地址管理 API：GET /addresses 列表、POST /addresses 创建、PATCH /addresses/:id 更新、DELETE /addresses/:id 删除、POST /addresses/:id/set-default 设为默认。",
            "实现手机号修改流程：POST /users/me/verify-password 验证密码、POST /users/me/send-code 发送验证码、POST /users/me/update-phone 验证并更新。",
            "添加前端表单：使用 react-hook-form + Zod resolver，实现资料编辑表单和地址管理界面，处理验证错误展示。"
        ],
        selfCheck: [
            "用户资料 API 设计中，为什么推荐 PATCH 而非 PUT？update_mask 的作用是什么？",
            "如何安全地存储和展示用户手机号？加密和脱敏分别在哪里处理？",
            "设置新默认地址时，如何保证同一用户只有一个默认地址？数据库层面如何约束？",
            "Zod Schema 如何在前后端共享？有什么好处？",
            "用户修改手机号的安全流程是什么？如何防止账户被盗后手机号被篡改？",
            "地址的省市区数据从哪里来？如何保证联动选择的有效性？",
            "如何处理乐观更新的冲突？version 字段和 updated_at 各有什么优缺点？",
            "删除用户地址时，如果该地址关联了未完成订单，应该如何处理？"
        ],
        extensions: [
            "研究 Google Places API 和 Address Validation API，了解企业级地址服务的能力。",
            "探索前端地址选择器组件的实现，如 ant-design 的 Cascader 省市区联动。",
            "学习数据脱敏和加密存储的最佳实践，了解 AES 加密和 HMAC 的应用场景。",
            "研究 GDPR 合规要求，了解用户数据导出、删除等权利的技术实现。",
            "探索用户资料变更的审计日志设计，记录谁在何时修改了什么字段。"
        ],
        sourceUrls: [
            "https://google.aip.dev/general",
            "https://zod.dev/",
            "https://developers.google.com/maps/documentation/address-validation"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "w4-1": [
        {
            id: "w4-1-q1",
            question: "JWT 由哪三部分组成？",
            options: [
                "Username, Password, Timestamp",
                "Header, Payload, Signature",
                "Token, Secret, Expiry",
                "Public Key, Private Key, Hash"
            ],
            answer: 1,
            rationale: "JWT 由 Header（令牌类型和签名算法）、Payload（声明数据）、Signature（验证签名）三部分组成，用点号连接。"
        },
        {
            id: "w4-1-q2",
            question: "JWT 相比 Session 认证的主要优势是什么？",
            options: [
                "更安全，不会被篡改",
                "无状态，易于水平扩展",
                "体积更小，传输更快",
                "支持更长的有效期"
            ],
            answer: 1,
            rationale: "JWT 是无状态认证，服务端不需要存储会话信息，每个请求携带完整认证信息，更容易实现服务的水平扩展。"
        },
        {
            id: "w4-1-q3",
            question: "为什么不建议在 JWT Payload 中存储敏感信息？",
            options: [
                "Payload 大小有限制",
                "Payload 只是 Base64 编码，不是加密，可被解码读取",
                "Payload 会增加网络传输延迟",
                "Payload 无法存储对象类型数据"
            ],
            answer: 1,
            rationale: "JWT 的 Payload 只是 Base64Url 编码，不是加密，任何人都可以解码读取内容。敏感信息应该存储在服务端。"
        },
        {
            id: "w4-1-q4",
            question: "Access Token 和 Refresh Token 的典型有效期设计是？",
            options: [
                "Access Token 7 天，Refresh Token 15 分钟",
                "两者有效期相同",
                "Access Token 15 分钟，Refresh Token 7 天",
                "Access Token 永不过期，Refresh Token 1 小时"
            ],
            answer: 2,
            rationale: "Access Token 短期有效（如 15 分钟）减少泄露风险，Refresh Token 长期有效（如 7 天）用于获取新的 Access Token。"
        },
        {
            id: "w4-1-q5",
            question: "OWASP 建议的密码最小长度（有 MFA 时）是多少？",
            options: [
                "6 字符",
                "8 字符",
                "12 字符",
                "16 字符"
            ],
            answer: 1,
            rationale: "OWASP Authentication Cheat Sheet 建议：有 MFA 时最小 8 字符，无 MFA 时最小 15 字符。"
        },
        {
            id: "w4-1-q6",
            question: "bcrypt 的 cost factor（如 10）代表什么？",
            options: [
                "密码最大长度",
                "哈希结果的字节数",
                "迭代次数的指数（2^10 次迭代）",
                "盐值的长度"
            ],
            answer: 2,
            rationale: "bcrypt 的 cost factor 是迭代次数的指数，cost=10 表示 2^10=1024 次迭代。值越大越安全但计算越慢。"
        },
        {
            id: "w4-1-q7",
            question: "为什么登录错误消息应该是'用户名或密码错误'而非具体说明？",
            options: [
                "减少日志存储空间",
                "提高用户体验",
                "防止攻击者枚举有效用户名",
                "符合隐私法规要求"
            ],
            answer: 2,
            rationale: "如果分别提示'用户不存在'和'密码错误'，攻击者可以先枚举出有效用户名，再针对性破解密码。"
        },
        {
            id: "w4-1-q8",
            question: "httpOnly Cookie 防止什么类型的攻击？",
            options: [
                "SQL 注入",
                "CSRF 攻击",
                "XSS 攻击窃取 Cookie",
                "中间人攻击"
            ],
            answer: 2,
            rationale: "httpOnly Cookie 无法被 JavaScript 读取（document.cookie 不可见），防止 XSS 攻击窃取 Cookie 中的 Token。"
        },
        {
            id: "w4-1-q9",
            question: "JWT 无状态特性带来的主要挑战是什么？",
            options: [
                "无法携带用户信息",
                "无法实现即时令牌撤销",
                "无法在多个服务间共享",
                "无法支持多设备登录"
            ],
            answer: 1,
            rationale: "JWT 一旦签发，在过期前一直有效。要实现即时撤销需要引入黑名单等机制，这部分破坏了无状态特性。"
        },
        {
            id: "w4-1-q10",
            question: "在微服务架构中，RS256 相比 HS256 的优势是？",
            options: [
                "签名速度更快",
                "签名体积更小",
                "各服务可用公钥验证，无需共享密钥",
                "兼容性更好"
            ],
            answer: 2,
            rationale: "RS256 是非对称算法，认证服务用私钥签名，其他服务用公钥验证。无需共享密钥，降低密钥泄露风险。"
        },
        {
            id: "w4-1-q11",
            question: "MFA 可以阻止多少比例的账户攻击？",
            options: [
                "50%",
                "80%",
                "90%",
                "99.9%"
            ],
            answer: 3,
            rationale: "OWASP 指出 MFA 'would have stopped 99.9% of account compromises'，是防止密码相关攻击的最有效措施。"
        },
        {
            id: "w4-1-q12",
            question: "Refresh Token 轮换（Rotation）的目的是什么？",
            options: [
                "减少服务器存储压力",
                "提高 Token 生成速度",
                "检测和阻止令牌重放攻击",
                "简化客户端实现"
            ],
            answer: 2,
            rationale: "每次使用 Refresh Token 后签发新的 Refresh Token，旧的立即失效。如果旧 Token 被再次使用，说明可能已泄露。"
        }
    ],
    "w4-2": [
        {
            id: "w4-2-q1",
            question: "OAuth 2.0 定义的四个角色中，负责存储受保护资源的是？",
            options: [
                "Resource Owner",
                "Resource Server",
                "Client",
                "Authorization Server"
            ],
            answer: 1,
            rationale: "Resource Server 托管受保护资源，验证 Access Token 后响应资源请求。Resource Owner 是用户，Client 是第三方应用。"
        },
        {
            id: "w4-2-q2",
            question: "授权码流程中，Authorization Code 在哪里交换为 Access Token？",
            options: [
                "用户浏览器",
                "前端 JavaScript",
                "后端服务器",
                "授权服务器 UI"
            ],
            answer: 2,
            rationale: "Authorization Code 通过后端服务器换取 Access Token，这样 Token 不会暴露给前端，提高安全性。"
        },
        {
            id: "w4-2-q3",
            question: "RFC 9700 对隐式授权流程（Implicit Grant）的建议是？",
            options: [
                "推荐用于所有 SPA 应用",
                "不推荐使用，应改用授权码 + PKCE",
                "仅用于移动应用",
                "仅用于高度信任的第一方应用"
            ],
            answer: 1,
            rationale: "隐式流程直接在前端暴露 Token，存在泄露风险。RFC 9700 建议现代 SPA 使用授权码流程 + PKCE。"
        },
        {
            id: "w4-2-q4",
            question: "PKCE 中 code_verifier 和 code_challenge 的关系是？",
            options: [
                "两者完全相同",
                "code_challenge 是 code_verifier 的 SHA256 哈希",
                "code_verifier 是 code_challenge 的加密结果",
                "两者由授权服务器生成"
            ],
            answer: 1,
            rationale: "客户端生成随机 code_verifier，计算其 SHA256 哈希作为 code_challenge。授权请求带 challenge，Token 请求带 verifier 供验证。"
        },
        {
            id: "w4-2-q5",
            question: "OAuth 2.0 授权请求中 state 参数的作用是？",
            options: [
                "标识用户身份",
                "存储用户偏好设置",
                "防止 CSRF 攻击",
                "指定授权范围"
            ],
            answer: 2,
            rationale: "state 是随机值，发起请求时生成并存入 session，回调时验证一致性。防止攻击者构造恶意授权链接。"
        },
        {
            id: "w4-2-q6",
            question: "Google Access Token 的最大大小是？",
            options: [
                "256 字节",
                "512 字节",
                "1024 字节",
                "2048 字节"
            ],
            answer: 3,
            rationale: "Google 文档指出 Access Token 最大 2048 字节，Refresh Token 最大 512 字节，Authorization Code 最大 256 字节。"
        },
        {
            id: "w4-2-q7",
            question: "当同一用户有多个社交账号登录时，推荐的处理方式是？",
            options: [
                "每个社交账号创建独立的本地账户",
                "拒绝第二个社交账号登录",
                "设计用户-社交账号关联表，一个用户可绑定多个社交账号",
                "要求用户合并账户"
            ],
            answer: 2,
            rationale: "设计关联表支持一个用户绑定多个社交账号，同时确保每个社交账号只能绑定一个本地用户，支持灵活的解绑/重绑。"
        },
        {
            id: "w4-2-q8",
            question: "OAuth 2.0 的 Scope 推荐的请求方式是？",
            options: [
                "一次性请求所有可能需要的权限",
                "增量请求——在需要时才请求额外权限",
                "只请求最基本的权限，从不扩展",
                "让用户自己选择所有权限"
            ],
            answer: 1,
            rationale: "Google 建议'请求作用域时采用增量方式，在访问需求时而非事先请求'，避免用户因权限过多而拒绝授权。"
        },
        {
            id: "w4-2-q9",
            question: "Refresh Token 泄露后，哪种机制可以检测到？",
            options: [
                "短有效期",
                "Token 轮换 + 重放检测",
                "加密存储",
                "IP 绑定"
            ],
            answer: 1,
            rationale: "Token 轮换后旧 Token 失效，如果攻击者使用泄露的旧 Token，系统可以检测到重放攻击并撤销整个 Token 家族。"
        },
        {
            id: "w4-2-q10",
            question: "Passport.js 的 verify 回调函数接收什么参数？",
            options: [
                "用户名和密码",
                "Access Token 和 Profile，以及 done 回调",
                "仅 Authorization Code",
                "Request 和 Response 对象"
            ],
            answer: 1,
            rationale: "Passport.js OAuth2 策略的 verify 回调接收 accessToken、refreshToken、profile 和 done 回调，用于处理用户查找或创建。"
        },
        {
            id: "w4-2-q11",
            question: "Client Credentials 授权类型适用于什么场景？",
            options: [
                "用户登录 Web 应用",
                "服务间通信（无用户参与）",
                "移动应用登录",
                "单页应用认证"
            ],
            answer: 1,
            rationale: "Client Credentials 用于'授权范围限于客户端控制的受保护资源'，典型场景是后端服务间的 API 调用，无需用户参与。"
        },
        {
            id: "w4-2-q12",
            question: "Google OAuth2 文档列出的 Refresh Token 失效原因不包括？",
            options: [
                "用户撤销应用访问权限",
                "6 个月未使用",
                "用户更改密码",
                "Access Token 过期"
            ],
            answer: 3,
            rationale: "Access Token 过期是正常行为，不会导致 Refresh Token 失效。Refresh Token 失效原因包括撤销、长期未用、改密码、超过令牌限额等。"
        }
    ],
    "w4-3": [
        {
            id: "w4-3-q1",
            question: "RBAC 的三层模型是什么？",
            options: [
                "认证 -> 授权 -> 访问",
                "用户 -> 角色 -> 权限",
                "请求 -> 验证 -> 响应",
                "身份 -> 凭证 -> 令牌"
            ],
            answer: 1,
            rationale: "RBAC（Role-Based Access Control）的核心是用户 -> 角色 -> 权限的三层模型。用户被分配角色，角色包含权限。"
        },
        {
            id: "w4-3-q2",
            question: "当用户拥有多个角色时，有效权限如何计算？",
            options: [
                "取权限的交集",
                "取权限的并集",
                "只使用第一个角色的权限",
                "由管理员手动指定"
            ],
            answer: 1,
            rationale: "RBAC 使用权限加法模型，用户的有效权限是其所有角色权限的并集（union），权限只增不减。"
        },
        {
            id: "w4-3-q3",
            question: "Auth0 关于权限分配的最佳实践建议是？",
            options: [
                "分配尽可能多的权限以提高灵活性",
                "分配允许完成工作的最少权限",
                "所有用户分配相同权限",
                "权限一次分配永不变更"
            ],
            answer: 1,
            rationale: "Auth0 强调最小权限原则：'Assign users the fewest number of permissions that allow them to get their work done'。"
        },
        {
            id: "w4-3-q4",
            question: "资源级权限控制（如'用户只能编辑自己的商品'）通常如何实现？",
            options: [
                "只使用角色检查",
                "在业务逻辑中结合资源所有权判断",
                "在数据库层面限制",
                "由前端控制"
            ],
            answer: 1,
            rationale: "角色控制功能访问，但资源级权限需要在业务逻辑中检查资源所有权，如 product.sellerId === currentUser.id。"
        },
        {
            id: "w4-3-q5",
            question: "CASL 库中 Ability 的作用是？",
            options: [
                "存储用户密码",
                "定义用户对资源的操作权限",
                "生成 JWT Token",
                "管理数据库连接"
            ],
            answer: 1,
            rationale: "CASL 的 Ability 定义'用户可以对哪些资源执行哪些操作'，支持条件过滤，如 can('update', 'Article', { authorId: userId })。"
        },
        {
            id: "w4-3-q6",
            question: "为什么前端隐藏无权限按钮不足以保证安全？",
            options: [
                "影响用户体验",
                "增加前端代码复杂度",
                "用户可以绕过前端直接调用 API",
                "前端状态可能不同步"
            ],
            answer: 2,
            rationale: "攻击者可以绕过前端 UI 直接调用后端 API。后端必须再次验证权限，前端隐藏只是提升用户体验。"
        },
        {
            id: "w4-3-q7",
            question: "将权限信息存储在 JWT 中的主要缺点是？",
            options: [
                "增加 Token 体积",
                "无法支持复杂权限结构",
                "权限变更后已签发的 Token 中权限不会更新",
                "以上都是"
            ],
            answer: 3,
            rationale: "JWT 中存储权限会增加体积，复杂权限难以表达，且权限变更后需要等 Token 过期或强制重新登录才能生效。"
        },
        {
            id: "w4-3-q8",
            question: "权限继承设计中需要避免什么问题？",
            options: [
                "角色数量过多",
                "权限名称过长",
                "循环继承",
                "权限重复定义"
            ],
            answer: 2,
            rationale: "如果 A 继承 B，B 继承 C，C 继承 A，会形成循环继承，导致无限递归。需要在设计时避免或在代码中检测。"
        },
        {
            id: "w4-3-q9",
            question: "动态权限判断（如'待发货订单可发货'）应该在哪里实现？",
            options: [
                "只在角色配置中",
                "只在前端 UI 中",
                "在权限模型中支持条件或在业务逻辑中显式检查",
                "由用户自己判断"
            ],
            answer: 2,
            rationale: "某些权限依赖运行时状态（如订单状态），需要在权限规则中支持条件表达式，或在业务逻辑中显式检查。"
        },
        {
            id: "w4-3-q10",
            question: "优化权限查询性能的常用方法不包括？",
            options: [
                "将权限编码到 JWT Claims",
                "使用 Redis 缓存用户权限",
                "每次请求都查询数据库",
                "权限变更时主动失效缓存"
            ],
            answer: 2,
            rationale: "每次请求都查询数据库会严重影响性能。应使用缓存（JWT/Redis）优化，权限变更时更新缓存。"
        },
        {
            id: "w4-3-q11",
            question: "Google Zanzibar 论文描述的是什么系统？",
            options: [
                "分布式数据库",
                "大规模权限管理系统",
                "消息队列",
                "搜索引擎"
            ],
            answer: 1,
            rationale: "Zanzibar 是 Google 的全球化权限系统，处理每秒数百万次权限检查。SpiceDB、OpenFGA 等开源项目基于其思想实现。"
        },
        {
            id: "w4-3-q12",
            question: "RBAC 相比 ACL（访问控制列表）的主要优势是？",
            options: [
                "支持更多用户",
                "通过角色批量管理权限，简化管理",
                "更安全",
                "性能更好"
            ],
            answer: 1,
            rationale: "ACL 直接给用户分配资源权限，用户多时管理复杂。RBAC 通过角色间接管理，添加用户只需分配角色，更易管理和审计。"
        }
    ],
    "w4-4": [
        {
            id: "w4-4-q1",
            question: "RESTful API 中更新用户资料推荐使用什么方法？",
            options: [
                "PUT（全量更新）",
                "PATCH（部分更新）",
                "POST",
                "GET"
            ],
            answer: 1,
            rationale: "PATCH 支持部分更新，只需提供要修改的字段。PUT 需要提供完整资源，可能导致未提供字段被清空。"
        },
        {
            id: "w4-4-q2",
            question: "用户手机号在展示时应该如何处理？",
            options: [
                "直接显示完整号码",
                "完全隐藏不显示",
                "脱敏展示（如 138****1234）",
                "加密后显示密文"
            ],
            answer: 2,
            rationale: "手机号是敏感信息，展示时应脱敏（中间四位用 * 替代），存储时应加密。既保护隐私又方便用户确认。"
        },
        {
            id: "w4-4-q3",
            question: "设置新默认地址时，如何保证只有一个默认地址？",
            options: [
                "前端验证即可",
                "在事务中先取消旧默认地址，再设置新默认地址",
                "让用户手动取消旧默认",
                "不需要保证唯一性"
            ],
            answer: 1,
            rationale: "在数据库事务中先将该用户所有地址的 is_default 设为 false，再将目标地址设为 true，保证原子性和一致性。"
        },
        {
            id: "w4-4-q4",
            question: "Zod 验证库的主要特点是？",
            options: [
                "仅支持 JavaScript",
                "运行时验证，无类型推导",
                "TypeScript-first，支持类型推导",
                "仅用于前端验证"
            ],
            answer: 2,
            rationale: "Zod 是 TypeScript-first 的验证库，定义 Schema 后自动获得 TypeScript 类型，可在前后端共享验证逻辑。"
        },
        {
            id: "w4-4-q5",
            question: "用户修改手机号的安全流程第一步应该是？",
            options: [
                "直接发送新手机验证码",
                "验证当前密码或原手机号",
                "让用户输入新手机号",
                "检查新手机号格式"
            ],
            answer: 1,
            rationale: "先验证用户身份（密码或原手机号），确认是账户所有者在操作，防止账户被盗后手机号被篡改。"
        },
        {
            id: "w4-4-q6",
            question: "Google AIP 推荐的分页参数是？",
            options: [
                "page 和 limit",
                "offset 和 count",
                "page_size 和 page_token",
                "start 和 end"
            ],
            answer: 2,
            rationale: "Google AIP 使用 page_size（每页条数）和 page_token（游标令牌）实现分页，避免 offset 在大数据集上的性能问题。"
        },
        {
            id: "w4-4-q7",
            question: "乐观更新冲突检测通常使用什么字段？",
            options: [
                "id 字段",
                "version 或 updated_at 字段",
                "created_at 字段",
                "user_id 字段"
            ],
            answer: 1,
            rationale: "使用 version（版本号）或 updated_at（更新时间戳）实现乐观锁，更新时检查版本是否变化，变化则说明有冲突。"
        },
        {
            id: "w4-4-q8",
            question: "电商地址管理中，省市区三级联动数据应该从哪里获取？",
            options: [
                "让用户自由输入",
                "使用标准的行政区划数据",
                "从第三方地图 API 实时获取",
                "由后端随机生成"
            ],
            answer: 1,
            rationale: "使用国家统计局等权威来源的行政区划数据，确保省市区关系正确。前端联动选择器限制用户只能选择有效组合。"
        },
        {
            id: "w4-4-q9",
            question: "Google Address Validation API 的主要功能是？",
            options: [
                "生成虚拟地址",
                "验证地址有效性并标准化格式",
                "存储用户地址",
                "计算两地距离"
            ],
            answer: 1,
            rationale: "Address Validation API 验证地址是否有效、可投递，并返回标准化的地址组件（省/市/区/街道/门牌号）。"
        },
        {
            id: "w4-4-q10",
            question: "删除用户地址时，如果该地址关联了未完成订单，应该？",
            options: [
                "直接删除地址",
                "拒绝删除并提示用户",
                "自动将订单地址改为其他地址",
                "同时删除关联订单"
            ],
            answer: 1,
            rationale: "地址关联未完成订单时不应删除，避免物流配送出问题。应提示用户先处理相关订单，或改为软删除。"
        },
        {
            id: "w4-4-q11",
            question: "PATCH 请求配合 update_mask 的作用是？",
            options: [
                "隐藏敏感字段",
                "明确指定要更新的字段，防止意外覆盖",
                "加密更新内容",
                "限制更新频率"
            ],
            answer: 1,
            rationale: "update_mask 明确指定要更新的字段列表，即使请求体包含其他字段也会被忽略，防止意外覆盖未指定字段。"
        },
        {
            id: "w4-4-q12",
            question: "GDPR 合规要求用户拥有什么数据权利？",
            options: [
                "仅查看权利",
                "数据访问、导出、删除等权利",
                "仅删除权利",
                "无任何权利"
            ],
            answer: 1,
            rationale: "GDPR 赋予用户多项权利：访问权（查看数据）、可携带权（导出数据）、被遗忘权（删除数据）、更正权等。"
        }
    ]
}
