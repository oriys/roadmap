import type { KnowledgeCard, QuizQuestion, RoadmapDefinition, Stage } from "../types"

export const apiPlatformStages: Stage[] = [
  {
    id: "api-foundation",
    title: "阶段一：API 设计与契约",
    duration: "第 1-2 周",
    goal: "建立面向消费者的 API 设计基础，兼顾一致性、演进性与文档化。",
    weeks: [
      {
        id: "api-w1",
        title: "第 1 周：RESTful 设计与建模",
        summary: "用资源建模和一致的命名规范，设计可演进的 REST API。",
        overview:
          "聚焦 API 设计的可读性与前后一致性，覆盖路径、方法、状态码与错误返回。并为未来扩展做好版本化与弃用策略。",
        lessons: [
          {
            id: "api-w1-1",
            title: "资源建模与路径规范",
            detail: "以资源为中心设计路径与操作，避免 RPC 风格的动词堆叠。",
            keyPoints: [
              "路径使用名词复数，保持层级语义与一致的动词-动作为 HTTP 方法。",
              "选择幂等 vs 非幂等方法，结合缓存与中间件的行为预期。",
              "明确错误返回格式（如 traceId、error code）以便客户端调试。",
            ],
            resources: [
              { title: "roadmap.sh: API Design", url: "https://roadmap.sh/api-design" },
              { title: "Microsoft API Guidelines", url: "https://learn.microsoft.com/azure/architecture/best-practices/api-design" },
              { title: "HTTP Status Codes", url: "https://developer.mozilla.org/docs/Web/HTTP/Status" },
            ],
          },
          {
            id: "api-w1-2",
            title: "契约驱动与文档",
            detail: "使用 OpenAPI/Swagger 描述接口契约，自动生成文档与客户端。",
            resources: [
              { title: "OpenAPI Specification", url: "https://spec.openapis.org/oas/latest.html" },
              { title: "Spectral OpenAPI Linter", url: "https://github.com/stoplightio/spectral" },
              { title: "roadmap.sh: API Design", url: "https://roadmap.sh/api-design" },
            ],
          },
        ],
      },
      {
        id: "api-w2",
        title: "第 2 周：版本演进与兼容性",
        summary: "在不破坏消费者的前提下演进 API，设计向后兼容的策略。",
        lessons: [
          {
            id: "api-w2-1",
            title: "版本管理策略",
            detail: "比较 URI 版本、Header 版本与语义版本控制，选择适合团队的方案。",
            resources: [
              { title: "API Versioning Best Practices", url: "https://google.aip.dev/185" },
              { title: "SemVer", url: "https://semver.org/" },
              { title: "roadmap.sh: API Design", url: "https://roadmap.sh/api-design" },
            ],
          },
          {
            id: "api-w2-2",
            title: "弃用与兼容性守护",
            detail: "通过特性开关与双写策略平滑发布，给客户端迁移窗口与告警。",
            resources: [
              { title: "Rolling Updates Guide", url: "https://zuplo.com/learning-center/api-versioning-backward-compatibility-best-practices" },
              { title: "Backward Compatibility", url: "https://google.aip.dev/180" },
              { title: "API Deprecation Playbook", url: "https://stripe.com/blog/api-versioning" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "api-security",
    title: "阶段二：API 安全与治理",
    duration: "第 3-4 周",
    goal: "围绕身份、授权、输入校验与滥用防护构建安全基线。",
    weeks: [
      {
        id: "api-w3",
        title: "第 3 周：身份鉴权与最小权限",
        summary: "用标准化协议保护接口，减少凭证暴露与越权风险。",
        lessons: [
          {
            id: "api-w3-1",
            title: "认证与授权模式",
            detail: "对比 OAuth2/OIDC、API Key 与 MTLS，确定不同接口的适用场景。",
            resources: [
              { title: "roadmap.sh: API Security Best Practices", url: "https://roadmap.sh/api-security-best-practices" },
              { title: "OAuth 2.0 Threat Model", url: "https://datatracker.ietf.org/doc/html/rfc6819" },
              { title: "OWASP API Security Top 10", url: "https://owasp.org/API-Security/" },
            ],
          },
          {
            id: "api-w3-2",
            title: "输入校验与防御",
            detail: "实现输入验证、速率限制与审计日志，避免注入与滥用。",
            resources: [
              { title: "OWASP Input Validation", url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html" },
              { title: "Nginx Rate Limiting", url: "https://docs.nginx.com/nginx/admin-guide/security-controls/controlling-access-by-key/" },
              { title: "roadmap.sh: API Security Best Practices", url: "https://roadmap.sh/api-security-best-practices" },
            ],
          },
        ],
      },
      {
        id: "api-w4",
        title: "第 4 周：可观测性与合规",
        summary: "通过日志与审计链路追踪安全事件，确保数据处理符合法规。",
        lessons: [
          {
            id: "api-w4-1",
            title: "审计与监控",
            detail: "记录关键操作、失败与异常路径，建立可追责的审计线索。",
            resources: [
              { title: "Security Logging", url: "https://cloud.google.com/architecture/security-logging-best-practices" },
              { title: "SIEM/Alerting Basics", url: "https://www.elastic.co/security" },
              { title: "OWASP API Security", url: "https://owasp.org/API-Security/" },
            ],
          },
          {
            id: "api-w4-2",
            title: "数据保护与合规",
            detail: "梳理数据分类、加密、脱敏与隐私请求响应流程。",
            resources: [
              { title: "Data Protection Checklist", url: "https://gdpr.eu/checklist/" },
              { title: "At-rest & In-transit Encryption", url: "https://cloud.google.com/architecture/encrypting-data-at-rest" },
              { title: "roadmap.sh: API Security Best Practices", url: "https://roadmap.sh/api-security-best-practices" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "api-graphql",
    title: "阶段三：GraphQL 设计与生产化",
    duration: "第 5-6 周",
    goal: "在保持安全与性能的前提下设计可观测、可治理的 GraphQL 服务。",
    weeks: [
      {
        id: "api-w5",
        title: "第 5 周：模式设计与性能",
        summary: "设计清晰的 Schema 与字段命名，控制 N+1 与数据加载性能。",
        lessons: [
          {
            id: "api-w5-1",
            title: "Schema 设计与版本演进",
            detail: "制定命名规范、类型描述与弃用策略，让 Schema 成为可靠契约。",
            resources: [
              { title: "roadmap.sh: GraphQL", url: "https://roadmap.sh/graphql" },
              { title: "Apollo Schema Design", url: "https://www.apollographql.com/docs/graphos/schema-design/guides/naming-conventions" },
              { title: "GraphQL Best Practices", url: "https://graphql.org/learn/best-practices/" },
            ],
          },
          {
            id: "api-w5-2",
            title: "数据加载与缓存",
            detail: "使用 DataLoader、查询白名单与响应缓存减少 N+1 与重复请求。",
            resources: [
              { title: "DataLoader", url: "https://github.com/graphql/dataloader" },
              { title: "Persisted Queries", url: "https://www.apollographql.com/docs/apollo-server/performance/apq/" },
              { title: "roadmap.sh: GraphQL", url: "https://roadmap.sh/graphql" },
            ],
          },
        ],
      },
      {
        id: "api-w6",
        title: "第 6 周：安全、监控与联邦",
        summary: "补齐 GraphQL 的安全面与可观测性，规划联邦化演进路径。",
        lessons: [
          {
            id: "api-w6-1",
            title: "GraphQL 安全防护",
            detail: "实现查询深度/复杂度限制、字段级授权与输入验证。",
            resources: [
              { title: "GraphQL Security Checklist", url: "https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html" },
              { title: "GraphQL Depth/Cost Limits", url: "https://www.apollographql.com/docs/graphos/routing/security/request-limits" },
              { title: "roadmap.sh: GraphQL", url: "https://roadmap.sh/graphql" },
            ],
          },
          {
            id: "api-w6-2",
            title: "监控与联邦化",
            detail: "用 tracing/metrics 观测 resolver 延迟，评估是否需要 Schema Federation。",
            resources: [
              { title: "Apollo Federation", url: "https://www.apollographql.com/docs/federation/" },
              { title: "GraphQL Observability", url: "https://www.apollographql.com/docs/graphos/platform/insights/field-usage" },
              { title: "roadmap.sh: GraphQL", url: "https://roadmap.sh/graphql" },
            ],
          },
        ],
      },
    ],
  },
]

export const apiPlatformKnowledgeCards: KnowledgeCard[] = [
  {
    id: "api-contract",
    title: "API 契约第一",
    summary: "所有接口变更都应从契约开始，以文档驱动代码与测试。",
    points: [
      "OpenAPI/GraphQL Schema 是事实来源，代码生成保持客户端同步。",
      "破坏性变更需要迁移计划与弃用公告，提供灰度或双写。",
      "契约中记录错误码、分页、幂等性与速率限制策略。",
    ],
    practice: "为现有接口补齐 OpenAPI/Schema 描述，并用 linter 检查路径与字段命名。",
  },
  {
    id: "api-security-baseline",
    title: "安全基线",
    summary: "把认证、授权、输入校验和审计作为默认能力而非附加功能。",
    points: [
      "区分机器对机器与用户对机器的认证方式，避免凭证散落日志。",
      "统一网关层的速率限制与 WAF 规则，防御扫描与暴力破解。",
      "高风险操作记录审计日志并配合告警。",
    ],
    practice: "为关键接口加上速率限制与字段白名单验证，输出安全事件日志。",
  },
  {
    id: "api-observability",
    title: "可观测性",
    summary: "将 traceId 贯穿 API 与下游调用，快速定位慢点与错误。",
    points: [
      "记录请求体大小、响应时间与状态码分布，关注 P95/P99。",
      "为 GraphQL 提供 resolver 级指标，定位 N+1 或热点字段。",
      "结合审计日志确认访问模式，调整限流与缓存策略。",
    ],
    practice: "在 API 网关和服务层统一注入 trace/span，落地 RED/USE 指标。",
  },
  {
    id: "api-governance",
    title: "治理与演进",
    summary: "通过评审、lint 和蓝绿发布保证设计一致性与平滑演进。",
    points: [
      "采用 API 评审清单覆盖命名、幂等性、安全与观测。",
      "使用 lint/CI 阻止不符合规范的契约变更。",
      "上线前做灰度/金丝雀并监控兼容性告警。",
    ],
    practice: "建立 API 设计评审模板，CI 中接入 OpenAPI/GraphQL lint。",
  },
  {
    id: "api-versioning",
    title: "版本策略选择",
    summary: "根据 API 受众和演进频率，选择适合的版本管理方案。",
    points: [
      "URI 版本（/v1/）简单直观，适合公开 API 和浏览器调用场景。",
      "Header 版本更 RESTful，但需要 L7 负载均衡器支持。",
      "Stripe 风格的日期版本支持细粒度演进，适合频繁迭代的 SaaS。",
    ],
    practice: "评估团队能力与客户端类型，选择版本策略并在文档中明确规则。",
  },
  {
    id: "api-error-handling",
    title: "错误处理标准化",
    summary: "统一错误格式，帮助客户端快速定位问题而不泄露敏感信息。",
    points: [
      "使用 RFC 7807 Problem Details 格式：type、title、status、detail、instance。",
      "区分客户端错误（4xx）与服务端错误（5xx），不用 200 包裹错误。",
      "错误响应包含 traceId 便于追踪，但不暴露堆栈或内部路径。",
    ],
    practice: "实现统一错误处理中间件，测试各种边界情况的错误响应格式。",
  },
  {
    id: "api-idempotency",
    title: "幂等性设计",
    summary: "让 API 可以安全重试，避免重复操作导致的数据不一致。",
    points: [
      "GET、PUT、DELETE 应天然幂等；POST 需要 Idempotency-Key 机制。",
      "服务端存储幂等键与响应，重复请求直接返回缓存结果。",
      "幂等键有过期时间，支持客户端区分「已处理」与「正在处理」。",
    ],
    practice: "为支付或订单创建接口实现幂等键机制，测试并发重试场景。",
  },
  {
    id: "api-rate-limiting",
    title: "多维度限流",
    summary: "在不同粒度限制请求频率，保护后端资源并提供公平访问。",
    points: [
      "全局限流保护整体容量，用户级限流防止单用户滥用。",
      "敏感操作（登录、支付）需要更严格的独立限流配置。",
      "返回 429 状态码与 Retry-After 头，指导客户端合理重试。",
    ],
    practice: "配置 API 网关的分层限流规则，验证超限响应与重试行为。",
  },
]

export const apiPlatformExamQuestions: QuizQuestion[] = [
  {
    id: "api-exam-1",
    question: "设计 REST API 时，哪种做法最符合资源建模原则？",
    options: [
      "使用 /getUser 作为获取用户详情的路径",
      "用 /users/{id} GET 获取用户，PUT 更新用户，保持名词路径与 HTTP 方法对应",
      "统一用 POST /rpc 执行所有动作并在 body 写 method",
      "删除资源时用 GET /users/{id}/delete 以便浏览器缓存",
    ],
    answer: 1,
    rationale: "资源建模强调名词路径与 HTTP 方法的语义对应，避免 RPC 风格的动作词路径。",
  },
  {
    id: "api-exam-2",
    question: "关于 API 版本演进，哪项更合适？",
    options: [
      "直接覆盖旧字段，客户端自行适配",
      "发布破坏性变更时提供弃用公告与迁移窗口，并保持向后兼容一段时间",
      "每次改动都创建新域名，强制客户端切换",
      "版本号只需要在代码注释里记录",
    ],
    answer: 1,
    rationale: "破坏性变更需要迁移计划与兼容窗口，给客户端时间切换。",
  },
  {
    id: "api-exam-3",
    question: "以下哪项是 API 安全基线的正确组合？",
    options: [
      "仅依赖 API Key，所有接口共享",
      "OAuth2/OIDC + 最小权限的访问令牌，并对高风险操作做审计",
      "在代码中硬编码凭证便于部署",
      "只用前端校验，无需后端验证",
    ],
    answer: 1,
    rationale: "标准化认证授权与审计是安全基线，避免凭证共享与缺乏后端验证。",
  },
  {
    id: "api-exam-4",
    question: "GraphQL 中防止 N+1 查询的常见手段是？",
    options: [
      "把所有字段设为非空",
      "在 resolver 内部直接同步查询数据库",
      "使用 DataLoader 等批量加载，将多个 ID 合并成一次查询",
      "禁止嵌套字段",
    ],
    answer: 2,
    rationale: "DataLoader 等批量加载器可合并请求，避免每个节点单独查询导致 N+1。",
  },
  {
    id: "api-exam-5",
    question: "对 GraphQL 接口实施安全限制时，哪项做法合理？",
    options: [
      "允许无限深度与任意复杂度，交给数据库兜底",
      "限制查询深度/复杂度，并对敏感字段做授权检查",
      "只要使用 HTTPS 就不需要输入校验",
      "把错误细节全部返回给客户端便于调试",
    ],
    answer: 1,
    rationale: "需要限制查询复杂度并做字段级授权，避免滥用与信息泄露。",
  },
  {
    id: "api-exam-6",
    question: "关于 API 观测与安全的联动，哪项更可取？",
    options: [
      "只在应用层记录日志，网关不需要 trace",
      "链路追踪携带 traceId，安全告警可关联到具体请求与调用链",
      "拒绝记录任何状态码以避免泄露信息",
      "限流失败无需记录审计日志",
    ],
    answer: 1,
    rationale: "统一的 traceId 便于将安全事件关联到具体调用链，支持审计与溯源。",
  },
  {
    id: "api-exam-7",
    question: "RFC 7807 Problem Details 格式应包含哪些核心字段？",
    options: [
      "只需要 message 和 code",
      "type、title、status、detail、instance",
      "error 和 description",
      "success 和 data",
    ],
    answer: 1,
    rationale: "RFC 7807 定义的标准错误格式包含 type（错误类型 URI）、title、status、detail、instance。",
  },
  {
    id: "api-exam-8",
    question: "关于幂等性设计，以下哪项说法正确？",
    options: [
      "所有 HTTP 方法都是幂等的",
      "GET、PUT、DELETE 应幂等，POST 需要 Idempotency-Key 机制",
      "幂等性只与数据库事务有关",
      "幂等键不需要过期时间",
    ],
    answer: 1,
    rationale: "GET、PUT、DELETE 天然幂等，POST 创建资源需要幂等键防止重复创建。",
  },
  {
    id: "api-exam-9",
    question: "请求超过速率限制时应返回什么？",
    options: [
      "200 OK 并在 body 说明限流",
      "429 Too Many Requests 并包含 Retry-After 头",
      "500 Internal Server Error",
      "403 Forbidden",
    ],
    answer: 1,
    rationale: "429 是专用的限流状态码，Retry-After 头指导客户端何时可以重试。",
  },
  {
    id: "api-exam-10",
    question: "OWASP API Security Top 10 的第一大风险是什么？",
    options: [
      "SQL 注入",
      "Broken Object Level Authorization (BOLA)",
      "跨站脚本 (XSS)",
      "认证绕过",
    ],
    answer: 1,
    rationale: "BOLA（对象级授权破坏）占 API 攻击的约 40%，是 2019 和 2023 版的第一大风险。",
  },
  {
    id: "api-exam-11",
    question: "Apollo Federation 中 @key 指令的作用是什么？",
    options: [
      "定义数据库主键",
      "告诉其他子图如何唯一标识实体实例",
      "加密字段值",
      "设置缓存策略",
    ],
    answer: 1,
    rationale: "@key 指令定义实体的唯一标识字段，让不同子图可以解析同一实体。",
  },
  {
    id: "api-exam-12",
    question: "以下哪种版本策略最适合需要频繁迭代的 SaaS 产品？",
    options: [
      "永不发布新版本",
      "Stripe 风格的日期版本，支持细粒度增量升级",
      "每个功能创建新域名",
      "只在文档中说明版本差异",
    ],
    answer: 1,
    rationale: "Stripe 的日期版本（如 2024-01-15）支持细粒度演进，用户可以按需升级。",
  },
]

export const apiPlatformRoadmap: RoadmapDefinition = {
  id: "api-platform",
  label: "API 设计·安全·GraphQL",
  title: "API 设计 + 安全 + GraphQL 全栈路线",
  durationLabel: "6 周进阶",
  description: "围绕 API 设计、接口安全与 GraphQL 生产化的完整路线，涵盖契约驱动开发、版本演进、OAuth2/OIDC 认证、OWASP 安全防护、审计合规、Schema 设计与 Federation 联邦架构。",
  heroBadge: "API 全栈",
  stages: apiPlatformStages,
  knowledgeCards: apiPlatformKnowledgeCards,
  examQuestions: apiPlatformExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "先完成 REST 资源建模与 OpenAPI 描述，理解 HTTP 方法语义与错误码规范。"
    if (percent < 40) return "深入认证授权机制（OAuth2/PKCE），实现输入验证、速率限制与审计日志。"
    if (percent < 70) return "掌握 GraphQL Schema 设计，配置深度/复杂度限制与 DataLoader 批量加载。"
    return "持续治理：CI 集成契约 lint、自动检测破坏性变更、定期演练安全与兼容性场景。"
  },
  resourceGuide: {
    environment: "准备 API 网关（Kong/Envoy）、OpenAPI Linter（Spectral）、GraphQL 开发环境（Apollo Server）、链路追踪（Jaeger/Zipkin）与日志系统（ELK/Loki）。",
    fallbackKeyPoints: [
      "REST 路径使用名词复数，HTTP 方法语义明确，错误使用 RFC 7807 格式。",
      "版本策略选择 URI/Header/日期版本，弃用期 6-12 个月。",
      "OAuth2 必须使用 PKCE，JWT 验证签名/issuer/audience/exp。",
      "输入验证使用白名单而非黑名单，服务端验证不可跳过。",
      "审计日志不含敏感数据，与 SIEM 集成实现实时告警。",
      "GraphQL 字段用 camelCase，类型用 PascalCase，枚举值用 SCREAMING_SNAKE_CASE。",
      "DataLoader 每请求创建新实例，批量函数结果顺序必须与输入键一致。",
      "Federation 使用 @key 定义实体标识，__resolveReference 解析跨子图实体。",
    ],
    handsOnSteps: [
      "为核心接口编写 OpenAPI 3.1 规范，配置 Spectral linter 检查命名规范。",
      "实现 OAuth2 Authorization Code + PKCE 流程，验证 JWT 的完整声明。",
      "配置 API 网关的速率限制（全局/用户级/端点级），测试 429 响应。",
      "为 POST 接口实现 Idempotency-Key 机制，测试并发重试场景。",
      "设置审计日志中间件，记录用户、操作、资源、结果，集成告警。",
      "创建 GraphQL Schema 并配置 DataLoader，验证 N+1 查询被批量化。",
      "配置 GraphQL 深度限制（max_depth: 10）和复杂度限制，测试拒绝过深查询。",
      "使用 @deprecated 标记待移除字段，在文档中维护弃用时间表。",
    ],
    selfChecks: [
      "所有接口是否有 OpenAPI/GraphQL Schema 描述并在 CI 校验？",
      "错误响应是否使用 RFC 7807 格式并包含 traceId？",
      "是否实现了 PKCE 和 JWT 完整验证（签名、issuer、audience、exp）？",
      "输入验证是否在服务端使用白名单模式？",
      "敏感操作是否记录审计日志并配置告警？",
      "GraphQL 是否有深度/复杂度限制和 DataLoader？",
      "生产环境是否禁用了 GraphQL 内省查询？",
      "版本弃用是否有 6 个月以上的迁移窗口？",
    ],
    extensions: [
      "研究 gRPC 与 Protocol Buffers，对比 REST/GraphQL 的适用场景。",
      "学习 Webhook 签名验证与重试机制，参考 Standard Webhooks 规范。",
      "探索 AsyncAPI 规范，描述 Kafka/RabbitMQ 等事件驱动接口。",
      "实践契约测试（Pact/Dredd），在 CI 中自动检测接口破坏。",
      "引入 OPA/ABAC 策略引擎统一授权，支持复杂的权限规则。",
      "配置 API 网关的熔断与金丝雀发布，提升服务韧性。",
    ],
    lessonQuizAdvice: "从 REST 设计原则和 HTTP 语义出发，结合 OWASP API Security Top 10 和 OAuth2 安全最佳实践，排除不符合规范的选项。GraphQL 题目关注 N+1 问题、安全限制和 Federation 机制。",
  },
}
