import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week16Guides: Record<string, LessonGuide> = {
    "pulsar-w16-1": {
        lessonId: "pulsar-w16-1",
        background: [
            "【认证概述】官方文档：Pulsar 支持多种认证机制保护集群访问，包括 JWT（JSON Web Token）、OAuth 2.0、mTLS（双向 TLS）、Kerberos 等。",
            "【JWT 认证】JWT 是最常用的认证方式，使用 Token 进行身份验证。Token 包含用户身份信息和签名，Broker 验证签名确认身份。",
            "【OAuth 2.0】支持与外部身份提供商（如 Okta、Auth0、Keycloak）集成，实现单点登录和统一身份管理。",
            "【mTLS 认证】双向 TLS 使用客户端证书进行认证，Broker 和 Client 互相验证证书。适合高安全要求场景。",
            "【认证配置位置】Broker 端在 broker.conf 配置认证提供者；客户端在创建 PulsarClient 时配置认证参数。"
        ],
        keyDifficulties: [
            "【Token 管理】JWT Token 需要安全存储和分发，Token 泄露会导致未授权访问。生产环境应定期轮换 Token。",
            "【认证方式选择】JWT 简单灵活适合大多数场景；OAuth 2.0 适合企业统一身份管理；mTLS 适合服务间认证和高安全需求。",
            "【密钥管理】JWT 需要管理签名密钥，mTLS 需要管理证书和 CA。密钥泄露是严重的安全风险。",
            "【认证与授权区分】认证验证用户身份（你是谁），授权决定用户权限（你能做什么）。两者需要配合使用。"
        ],
        handsOnPath: [
            "配置 Broker 启用 JWT 认证，生成 Token 并测试认证流程。",
            "配置客户端使用 JWT Token 连接 Broker。",
            "测试无 Token 或错误 Token 连接被拒绝。",
            "研究 OAuth 2.0 集成方案，了解与身份提供商的集成。"
        ],
        selfCheck: [
            "Pulsar 支持哪些认证方式？",
            "JWT 认证的工作原理是什么？",
            "如何在 Broker 端配置认证？如何在客户端配置？",
            "mTLS 与 JWT 认证的主要区别是什么？",
            "Token 泄露有什么风险？如何防范？"
        ],
        extensions: [
            "研究 JWT Token 的结构和签名算法。",
            "探索 Pulsar 与 Keycloak 的集成配置。",
            "学习 Token 自动轮换的最佳实践。",
            "研究 Kubernetes Secret 管理 Token 的方案。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/security-overview/",
            "https://pulsar.apache.org/docs/security-jwt/",
            "https://pulsar.apache.org/docs/security-oauth2/"
        ]
    },
    "pulsar-w16-2": {
        lessonId: "pulsar-w16-2",
        background: [
            "【授权概述】官方文档：Pulsar 授权基于角色控制资源访问权限，支持 Superuser、Tenant Admin 和细粒度的 produce/consume/functions 等权限。",
            "【Superuser 角色】Superuser 拥有所有权限，可以管理集群、创建租户、配置全局策略。生产环境应严格限制 Superuser。",
            "【Tenant Admin】租户管理员可以管理租户内的命名空间、Topic、权限等，但不能跨租户操作。",
            "【细粒度权限】支持在 Namespace 和 Topic 级别配置 produce、consume、functions、sources、sinks 等权限。",
            "【权限配置命令】使用 pulsar-admin namespaces grant-permission 和 pulsar-admin topics grant-permission 配置权限。"
        ],
        keyDifficulties: [
            "【最小权限原则】应遵循最小权限原则，只授予必要的权限。避免过度使用 Superuser 角色。",
            "【权限继承】Namespace 级别的权限会应用到所有 Topic，Topic 级别权限可以覆盖 Namespace 权限。",
            "【角色规划】设计合理的角色体系：区分管理员、生产者、消费者角色，不同角色有不同权限。",
            "【权限审计】定期审计权限配置，移除不再需要的权限，检查是否有过度授权。"
        ],
        handsOnPath: [
            "配置 Superuser 角色，测试全局管理权限。",
            "创建普通用户，授予特定 Namespace 的 produce 和 consume 权限。",
            "测试越权访问被拒绝的场景。",
            "使用 pulsar-admin permissions 命令查看和管理权限。"
        ],
        selfCheck: [
            "Pulsar 支持哪些角色和权限？",
            "Superuser 和 Tenant Admin 的区别是什么？",
            "如何在 Namespace 和 Topic 级别配置权限？",
            "什么是最小权限原则？为什么重要？",
            "权限继承是怎样的？如何覆盖？"
        ],
        extensions: [
            "研究 Pulsar 与 LDAP/AD 的集成方案。",
            "探索基于属性的访问控制（ABAC）可能性。",
            "学习权限审计的自动化方案。",
            "研究多租户环境下的权限隔离最佳实践。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/security-authorization/",
            "https://pulsar.apache.org/docs/admin-api-permissions/"
        ]
    },
    "pulsar-w16-3": {
        lessonId: "pulsar-w16-3",
        background: [
            "【TLS 传输加密】官方文档：TLS 加密保护客户端与 Broker 之间的网络通信，防止数据被窃听或篡改。",
            "【TLS 配置要素】配置 TLS 需要：证书（Certificate）、私钥（Private Key）、CA 证书（用于验证对方证书）。",
            "【端到端加密】Pulsar 支持端到端加密（E2E Encryption），消息在 Producer 端加密，只有持有私钥的 Consumer 才能解密。",
            "【加密密钥管理】端到端加密的密钥由 Producer 生成，公钥发送给 Consumer，私钥由 Producer 安全保管。",
            "【证书来源】可以使用自签名证书（测试）或 CA 签发的证书（生产）。生产环境推荐使用可信 CA。"
        ],
        keyDifficulties: [
            "【TLS vs E2E 加密】TLS 保护传输通道，Broker 可以看到明文消息；E2E 加密保护消息内容，Broker 也无法解密。",
            "【证书过期管理】证书有有效期，需要在过期前更新。可以使用自动化证书管理（如 cert-manager）。",
            "【性能影响】加密会增加 CPU 开销和延迟。E2E 加密开销更大，需要评估是否必要。",
            "【密钥分发安全】E2E 加密的密钥分发需要安全通道，防止中间人攻击。"
        ],
        handsOnPath: [
            "生成自签名证书，配置 Broker 启用 TLS。",
            "配置客户端使用 TLS 连接 Broker。",
            "测试 E2E 加密：Producer 加密消息，Consumer 解密。",
            "测试证书验证失败的场景。"
        ],
        selfCheck: [
            "TLS 传输加密保护什么？它与端到端加密有什么区别？",
            "配置 TLS 需要哪些要素？",
            "端到端加密如何工作？密钥如何管理？",
            "证书过期会有什么影响？如何管理？",
            "加密对性能有什么影响？"
        ],
        extensions: [
            "研究 Let's Encrypt 自动化证书管理。",
            "探索 Kubernetes cert-manager 与 Pulsar 的集成。",
            "学习 HSM（硬件安全模块）存储密钥的方案。",
            "研究零信任网络架构下的 Pulsar 安全配置。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/security-tls-transport/",
            "https://pulsar.apache.org/docs/security-encryption/"
        ]
    }
}

export const week16Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w16-1": [
        {
            id: "pulsar-w16-1-q1",
            question: "Pulsar 支持哪些认证方式？",
            options: [
                "只有用户名密码",
                "JWT、OAuth 2.0、mTLS、Kerberos 等",
                "只有 OAuth",
                "只有证书"
            ],
            answer: 1,
            rationale: "Pulsar 支持多种认证机制：JWT、OAuth 2.0、mTLS、Kerberos 等。"
        },
        {
            id: "pulsar-w16-1-q2",
            question: "JWT 认证的工作原理是什么？",
            options: [
                "用户名密码验证",
                "Token 包含身份信息和签名，Broker 验证签名确认身份",
                "证书验证",
                "IP 白名单"
            ],
            answer: 1,
            rationale: "JWT Token 包含用户身份信息和签名，Broker 验证签名确认身份。"
        },
        {
            id: "pulsar-w16-1-q3",
            question: "OAuth 2.0 认证的主要优势是什么？",
            options: [
                "配置简单",
                "可与外部身份提供商集成，实现单点登录",
                "性能最高",
                "最安全"
            ],
            answer: 1,
            rationale: "OAuth 2.0 支持与外部身份提供商集成，实现单点登录和统一身份管理。"
        },
        {
            id: "pulsar-w16-1-q4",
            question: "mTLS 认证的特点是什么？",
            options: [
                "单向认证",
                "双向认证，Broker 和 Client 互相验证证书",
                "不需要证书",
                "只验证 Broker"
            ],
            answer: 1,
            rationale: "mTLS 是双向 TLS，Broker 和 Client 互相验证证书，适合高安全要求场景。"
        },
        {
            id: "pulsar-w16-1-q5",
            question: "JWT Token 泄露有什么风险？",
            options: [
                "无风险",
                "可能导致未授权访问",
                "只影响性能",
                "只影响日志"
            ],
            answer: 1,
            rationale: "Token 泄露会导致未授权访问，攻击者可以使用泄露的 Token 访问集群。"
        },
        {
            id: "pulsar-w16-1-q6",
            question: "认证配置在哪里进行？",
            options: [
                "只在客户端",
                "Broker 端配置认证提供者，客户端配置认证参数",
                "只在 Broker 端",
                "在 ZooKeeper"
            ],
            answer: 1,
            rationale: "Broker 端在 broker.conf 配置认证提供者，客户端在创建连接时配置认证参数。"
        },
        {
            id: "pulsar-w16-1-q7",
            question: "认证与授权的区别是什么？",
            options: [
                "完全相同",
                "认证验证身份，授权决定权限",
                "授权验证身份",
                "认证决定权限"
            ],
            answer: 1,
            rationale: "认证验证用户身份（你是谁），授权决定用户权限（你能做什么）。"
        },
        {
            id: "pulsar-w16-1-q8",
            question: "生产环境应如何管理 JWT Token？",
            options: [
                "永不更换",
                "定期轮换，安全存储",
                "公开分享",
                "存储在代码中"
            ],
            answer: 1,
            rationale: "生产环境应定期轮换 Token，安全存储，防止泄露。"
        },
        {
            id: "pulsar-w16-1-q9",
            question: "如何在客户端配置 JWT 认证？",
            options: [
                "修改配置文件",
                "在创建 PulsarClient 时配置 AuthenticationToken",
                "环境变量",
                "命令行参数"
            ],
            answer: 1,
            rationale: "在创建 PulsarClient 时通过 authentication() 方法配置 AuthenticationToken。"
        },
        {
            id: "pulsar-w16-1-q10",
            question: "什么场景适合使用 mTLS 认证？",
            options: [
                "简单测试",
                "服务间认证和高安全需求场景",
                "个人项目",
                "低安全要求场景"
            ],
            answer: 1,
            rationale: "mTLS 适合服务间认证和高安全需求场景，双向验证确保双方身份。"
        },
        {
            id: "pulsar-w16-1-q11",
            question: "JWT 签名密钥泄露有什么后果？",
            options: [
                "无影响",
                "攻击者可以伪造任意 Token",
                "只影响单个用户",
                "只影响日志"
            ],
            answer: 1,
            rationale: "签名密钥泄露意味着攻击者可以伪造任意 Token，冒充任何用户。"
        },
        {
            id: "pulsar-w16-1-q12",
            question: "Kerberos 认证适合什么环境？",
            options: [
                "云环境",
                "已有 Kerberos 基础设施的企业环境",
                "简单测试",
                "个人项目"
            ],
            answer: 1,
            rationale: "Kerberos 适合已有 Kerberos 基础设施的企业环境，可以复用现有身份管理。"
        }
    ],
    "pulsar-w16-2": [
        {
            id: "pulsar-w16-2-q1",
            question: "Superuser 角色有什么权限？",
            options: [
                "只有读权限",
                "所有权限，可以管理整个集群",
                "只有写权限",
                "只有特定 Topic 权限"
            ],
            answer: 1,
            rationale: "Superuser 拥有所有权限，可以管理集群、创建租户、配置全局策略。"
        },
        {
            id: "pulsar-w16-2-q2",
            question: "Tenant Admin 与 Superuser 的区别是什么？",
            options: [
                "权限相同",
                "Tenant Admin 只能管理租户内资源，不能跨租户",
                "Tenant Admin 权限更大",
                "无区别"
            ],
            answer: 1,
            rationale: "Tenant Admin 可以管理租户内的资源，但不能跨租户操作。"
        },
        {
            id: "pulsar-w16-2-q3",
            question: "Pulsar 支持哪些细粒度权限？",
            options: [
                "只有读写",
                "produce、consume、functions、sources、sinks 等",
                "只有 produce",
                "只有 consume"
            ],
            answer: 1,
            rationale: "支持 produce、consume、functions、sources、sinks 等细粒度权限。"
        },
        {
            id: "pulsar-w16-2-q4",
            question: "如何配置 Namespace 级别权限？",
            options: [
                "修改配置文件",
                "pulsar-admin namespaces grant-permission",
                "直接修改 ZooKeeper",
                "重启 Broker"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin namespaces grant-permission 配置 Namespace 权限。"
        },
        {
            id: "pulsar-w16-2-q5",
            question: "什么是最小权限原则？",
            options: [
                "授予所有权限",
                "只授予必要的权限",
                "不授予任何权限",
                "授予最大权限"
            ],
            answer: 1,
            rationale: "最小权限原则是只授予完成任务所必需的权限，避免过度授权。"
        },
        {
            id: "pulsar-w16-2-q6",
            question: "Namespace 和 Topic 权限的关系是什么？",
            options: [
                "完全独立",
                "Namespace 权限应用到所有 Topic，Topic 可以覆盖",
                "Topic 权限应用到 Namespace",
                "两者冲突"
            ],
            answer: 1,
            rationale: "Namespace 级别的权限会应用到所有 Topic，Topic 级别权限可以覆盖。"
        },
        {
            id: "pulsar-w16-2-q7",
            question: "生产环境应如何使用 Superuser？",
            options: [
                "所有操作都用 Superuser",
                "严格限制，只用于必要的管理操作",
                "每个用户都是 Superuser",
                "不使用 Superuser"
            ],
            answer: 1,
            rationale: "生产环境应严格限制 Superuser 使用，只用于必要的管理操作。"
        },
        {
            id: "pulsar-w16-2-q8",
            question: "如何查看 Namespace 的权限配置？",
            options: [
                "查看日志",
                "pulsar-admin namespaces permissions",
                "查看配置文件",
                "pulsar-admin topics list"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin namespaces permissions 查看 Namespace 的权限配置。"
        },
        {
            id: "pulsar-w16-2-q9",
            question: "权限审计的目的是什么？",
            options: [
                "提高性能",
                "发现过度授权和不再需要的权限",
                "增加日志",
                "简化配置"
            ],
            answer: 1,
            rationale: "权限审计帮助发现过度授权和不再需要的权限，保持最小权限原则。"
        },
        {
            id: "pulsar-w16-2-q10",
            question: "如何移除用户的 Namespace 权限？",
            options: [
                "无法移除",
                "pulsar-admin namespaces revoke-permission",
                "删除用户",
                "重启 Broker"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin namespaces revoke-permission 移除用户的 Namespace 权限。"
        },
        {
            id: "pulsar-w16-2-q11",
            question: "角色规划应该考虑什么？",
            options: [
                "只考虑性能",
                "区分管理员、生产者、消费者等不同角色",
                "所有人相同权限",
                "只考虑便捷性"
            ],
            answer: 1,
            rationale: "应该设计合理的角色体系，区分管理员、生产者、消费者等不同角色的权限。"
        },
        {
            id: "pulsar-w16-2-q12",
            question: "Functions 权限控制什么？",
            options: [
                "消息发送",
                "创建、更新、删除 Pulsar Functions",
                "消息消费",
                "Topic 管理"
            ],
            answer: 1,
            rationale: "Functions 权限控制用户创建、更新、删除 Pulsar Functions 的能力。"
        }
    ],
    "pulsar-w16-3": [
        {
            id: "pulsar-w16-3-q1",
            question: "TLS 传输加密保护什么？",
            options: [
                "消息内容",
                "客户端与 Broker 之间的网络通信",
                "磁盘数据",
                "内存数据"
            ],
            answer: 1,
            rationale: "TLS 加密保护客户端与 Broker 之间的网络通信，防止数据被窃听或篡改。"
        },
        {
            id: "pulsar-w16-3-q2",
            question: "配置 TLS 需要哪些要素？",
            options: [
                "只需要证书",
                "证书、私钥、CA 证书",
                "只需要私钥",
                "只需要密码"
            ],
            answer: 1,
            rationale: "配置 TLS 需要证书、私钥和 CA 证书（用于验证对方证书）。"
        },
        {
            id: "pulsar-w16-3-q3",
            question: "端到端加密（E2E）与 TLS 的区别是什么？",
            options: [
                "完全相同",
                "TLS 保护传输通道，E2E 保护消息内容（Broker 也无法解密）",
                "E2E 更简单",
                "TLS 更安全"
            ],
            answer: 1,
            rationale: "TLS 保护传输通道，Broker 可以看到明文；E2E 加密保护消息内容，Broker 也无法解密。"
        },
        {
            id: "pulsar-w16-3-q4",
            question: "端到端加密的密钥由谁管理？",
            options: [
                "Broker",
                "Producer 生成和管理",
                "ZooKeeper",
                "Consumer"
            ],
            answer: 1,
            rationale: "端到端加密的密钥由 Producer 生成，公钥发送给 Consumer，私钥由 Producer 保管。"
        },
        {
            id: "pulsar-w16-3-q5",
            question: "生产环境推荐使用什么类型的证书？",
            options: [
                "自签名证书",
                "可信 CA 签发的证书",
                "过期证书",
                "无证书"
            ],
            answer: 1,
            rationale: "生产环境推荐使用可信 CA 签发的证书，自签名证书只适合测试。"
        },
        {
            id: "pulsar-w16-3-q6",
            question: "证书过期会有什么影响？",
            options: [
                "无影响",
                "TLS 连接失败，服务中断",
                "只影响性能",
                "只产生告警"
            ],
            answer: 1,
            rationale: "证书过期后 TLS 验证失败，导致连接失败和服务中断。"
        },
        {
            id: "pulsar-w16-3-q7",
            question: "加密对性能有什么影响？",
            options: [
                "无影响",
                "增加 CPU 开销和延迟",
                "提高性能",
                "减少延迟"
            ],
            answer: 1,
            rationale: "加密会增加 CPU 开销和延迟，E2E 加密开销更大。"
        },
        {
            id: "pulsar-w16-3-q8",
            question: "如何管理证书生命周期？",
            options: [
                "不需要管理",
                "使用自动化证书管理（如 cert-manager）",
                "手动永久有效",
                "忽略过期"
            ],
            answer: 1,
            rationale: "可以使用自动化证书管理工具（如 cert-manager）自动续期证书。"
        },
        {
            id: "pulsar-w16-3-q9",
            question: "端到端加密适合什么场景？",
            options: [
                "所有场景",
                "消息内容高度敏感，不信任中间件的场景",
                "性能要求高的场景",
                "简单测试"
            ],
            answer: 1,
            rationale: "E2E 加密适合消息内容高度敏感、不信任中间件（包括 Broker）的场景。"
        },
        {
            id: "pulsar-w16-3-q10",
            question: "TLS 配置中 CA 证书的作用是什么？",
            options: [
                "加密数据",
                "验证对方证书的合法性",
                "存储密钥",
                "记录日志"
            ],
            answer: 1,
            rationale: "CA 证书用于验证对方证书是否由可信的 CA 签发。"
        },
        {
            id: "pulsar-w16-3-q11",
            question: "E2E 加密的密钥分发需要注意什么？",
            options: [
                "无需注意",
                "需要安全通道，防止中间人攻击",
                "可以公开分发",
                "只需要单向分发"
            ],
            answer: 1,
            rationale: "密钥分发需要安全通道，防止中间人攻击获取密钥。"
        },
        {
            id: "pulsar-w16-3-q12",
            question: "使用 TLS 后 Broker 能看到消息内容吗？",
            options: [
                "不能",
                "能，TLS 只保护传输通道",
                "部分能看到",
                "取决于配置"
            ],
            answer: 1,
            rationale: "TLS 只保护传输通道，Broker 仍然可以看到解密后的消息明文。"
        }
    ]
}
