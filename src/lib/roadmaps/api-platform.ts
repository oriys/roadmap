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
  {
    id: "api-realtime",
    title: "阶段四：实时 API 与事件驱动",
    duration: "第 7-8 周",
    goal: "掌握实时通信模式与事件驱动架构，构建响应式 API 系统。",
    weeks: [
      {
        id: "api-w7",
        title: "第 7 周：实时通信模式",
        summary: "对比 WebSocket、SSE 与 Long Polling，选择合适的实时方案。",
        overview:
          "理解不同实时通信协议的特点与适用场景，掌握 GraphQL Subscriptions 实现实时数据推送。",
        lessons: [
          {
            id: "api-w7-1",
            title: "实时协议选型",
            detail: "对比 WebSocket（双向）、SSE（服务端推送）与 Long Polling（兼容性），根据场景选择。",
            keyPoints: [
              "WebSocket 适合双向高频通信（聊天、游戏），需处理重连与心跳。",
              "SSE 适合服务端单向推送（通知、实时更新），自动重连且兼容 HTTP/2。",
              "Long Polling 作为降级方案，兼容性最好但延迟较高。",
            ],
            resources: [
              { title: "WebSocket vs SSE", url: "https://ably.com/blog/websockets-vs-sse" },
              { title: "MDN: Server-Sent Events", url: "https://developer.mozilla.org/docs/Web/API/Server-sent_events" },
              { title: "WebSocket Protocol", url: "https://datatracker.ietf.org/doc/html/rfc6455" },
            ],
          },
          {
            id: "api-w7-2",
            title: "GraphQL Subscriptions",
            detail: "使用 Subscriptions 实现实时数据流，理解 @defer/@stream 增量响应。",
            keyPoints: [
              "Subscriptions 基于 WebSocket 或 SSE 传输，适合事件触发的实时更新。",
              "@defer 延迟加载非关键字段，@stream 流式返回列表项。",
              "生产环境需考虑连接数限制、认证续期与优雅断开。",
            ],
            resources: [
              { title: "GraphQL Subscriptions", url: "https://graphql.org/blog/subscriptions-in-graphql-and-relay/" },
              { title: "Apollo Subscriptions", url: "https://www.apollographql.com/docs/react/data/subscriptions/" },
              { title: "@defer and @stream", url: "https://graphql.org/blog/2020-12-08-improving-latency-with-defer-and-stream-directives/" },
            ],
          },
        ],
      },
      {
        id: "api-w8",
        title: "第 8 周：事件驱动 API",
        summary: "设计 Webhook 与事件系统，使用 AsyncAPI 描述异步接口契约。",
        lessons: [
          {
            id: "api-w8-1",
            title: "Webhook 设计模式",
            detail: "实现安全可靠的 Webhook 推送，包括签名验证、重试与幂等处理。",
            keyPoints: [
              "使用 HMAC-SHA256 签名 payload，接收方验证签名防止伪造。",
              "指数退避重试失败的 Webhook，记录投递状态供排查。",
              "接收方实现幂等处理，用事件 ID 去重避免重复消费。",
            ],
            resources: [
              { title: "Standard Webhooks", url: "https://www.standardwebhooks.com/" },
              { title: "Webhook Security", url: "https://hookdeck.com/webhooks/guides/webhook-security-vulnerabilities-guide" },
              { title: "Stripe Webhooks", url: "https://docs.stripe.com/webhooks" },
            ],
          },
          {
            id: "api-w8-2",
            title: "AsyncAPI 与 CloudEvents",
            detail: "用 AsyncAPI 描述事件驱动接口，采用 CloudEvents 标准化事件格式。",
            keyPoints: [
              "AsyncAPI 是事件驱动 API 的 OpenAPI，描述 channel、message 与 schema。",
              "CloudEvents 必需属性：specversion、type、source、id；可选属性包括 time、datacontenttype。",
              "结合消息队列（Kafka/RabbitMQ）构建可靠的事件总线。",
            ],
            resources: [
              { title: "AsyncAPI Specification", url: "https://www.asyncapi.com/docs/reference/specification/latest" },
              { title: "CloudEvents Spec", url: "https://cloudevents.io/" },
              { title: "Event-Driven Architecture", url: "https://microservices.io/patterns/data/event-driven-architecture.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "api-performance",
    title: "阶段五：API 性能与高级模式",
    duration: "第 9-10 周",
    goal: "深入 API 性能优化与架构模式，掌握 BFF、高级分页与条件请求。",
    weeks: [
      {
        id: "api-w9",
        title: "第 9 周：性能深度优化",
        summary: "掌握分页、条件请求与响应优化，提升 API 吞吐与用户体验。",
        lessons: [
          {
            id: "api-w9-1",
            title: "高级分页模式",
            detail: "对比 Offset、Keyset 与 Cursor 分页，选择适合数据特征的方案。",
            keyPoints: [
              "Offset 分页简单但大偏移量性能差，适合小数据集。",
              "Keyset 分页基于索引列，性能稳定但不支持跳页。",
              "Cursor 分页（Base64 编码游标）兼顾性能与灵活性，是 GraphQL 推荐方案。",
            ],
            resources: [
              { title: "Pagination Comparison", url: "https://www.citusdata.com/blog/2016/03/30/five-ways-to-paginate/" },
              { title: "Relay Cursor Connections", url: "https://relay.dev/graphql/connections.htm" },
              { title: "Slack API Pagination", url: "https://docs.slack.dev/apis/web-api/pagination" },
            ],
          },
          {
            id: "api-w9-2",
            title: "条件请求与响应优化",
            detail: "使用 ETags、压缩与部分响应减少带宽，提升缓存命中率。",
            keyPoints: [
              "ETag + If-None-Match 实现条件 GET，304 响应节省带宽。",
              "支持 fields/sparse fieldsets 参数，客户端按需获取字段。",
              "启用 gzip/brotli 压缩，配置合理的 Cache-Control 策略。",
            ],
            resources: [
              { title: "HTTP Conditional Requests", url: "https://developer.mozilla.org/docs/Web/HTTP/Conditional_requests" },
              { title: "JSON:API Sparse Fieldsets", url: "https://jsonapi.org/format/#fetching-sparse-fieldsets" },
              { title: "HTTP Caching", url: "https://web.dev/http-cache/" },
            ],
          },
        ],
      },
      {
        id: "api-w10",
        title: "第 10 周：架构模式与高级 GraphQL",
        summary: "实践 BFF 模式与 Relay 规范，构建可扩展的 API 架构。",
        lessons: [
          {
            id: "api-w10-1",
            title: "BFF 与 API 聚合",
            detail: "为不同客户端定制 Backend for Frontend，聚合多服务响应。",
            keyPoints: [
              "BFF 为特定客户端（Web/Mobile/IoT）优化响应格式与字段。",
              "聚合层处理跨服务调用、数据转换与错误合并。",
              "权衡 BFF 数量与维护成本，避免逻辑分散。",
            ],
            resources: [
              { title: "BFF Pattern", url: "https://samnewman.io/patterns/architectural/bff/" },
              { title: "API Gateway vs BFF", url: "https://microservices.io/patterns/apigateway.html" },
              { title: "API Composition", url: "https://microservices.io/patterns/data/api-composition.html" },
            ],
          },
          {
            id: "api-w10-2",
            title: "Relay 规范与高级 GraphQL",
            detail: "遵循 Relay 规范设计 GraphQL Schema，实现 Node 接口与 Connections。",
            keyPoints: [
              "Node 接口提供全局唯一 ID，支持任意对象的直接查询与缓存。",
              "Connections 规范定义 edges/node/pageInfo/cursor，标准化分页行为。",
              "Global ID 编码类型与本地 ID，支持客户端缓存规范化。",
            ],
            resources: [
              { title: "Relay GraphQL Spec", url: "https://relay.dev/docs/guides/graphql-server-specification/" },
              { title: "Global Object Identification", url: "https://graphql.org/learn/global-object-identification/" },
              { title: "Relay Connections", url: "https://relay.dev/graphql/connections.htm" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "api-advanced-security",
    title: "阶段六：安全进阶与服务网格",
    duration: "第 11-12 周",
    goal: "深入 Zero Trust 架构与服务网格安全，掌握 API 威胁建模与高级防护。",
    weeks: [
      {
        id: "api-w11",
        title: "第 11 周：Zero Trust 与高级认证",
        summary: "实践零信任架构，掌握服务身份与令牌绑定技术。",
        lessons: [
          {
            id: "api-w11-1",
            title: "Zero Trust API 架构",
            detail: "实现持续验证、最小权限与微分段，不信任网络边界。",
            keyPoints: [
              "每个请求都需验证身份与授权，不依赖网络位置判断信任。",
              "服务间通信使用 mTLS，证书自动轮换与撤销。",
              "实施细粒度访问控制，基于属性（ABAC）而非仅角色（RBAC）。",
            ],
            resources: [
              { title: "Zero Trust Architecture", url: "https://www.nist.gov/publications/zero-trust-architecture" },
              { title: "BeyondCorp", url: "https://cloud.google.com/beyondcorp" },
              { title: "Zero Trust APIs", url: "https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/" },
            ],
          },
          {
            id: "api-w11-2",
            title: "服务身份与令牌绑定",
            detail: "使用 SPIFFE/SPIRE 管理服务身份，DPoP 绑定令牌到客户端。",
            keyPoints: [
              "SPIFFE 为服务提供统一身份标识（SPIFFE ID），SPIRE 负责证书签发。",
              "DPoP (Demonstrating Proof of Possession) 将令牌绑定到客户端密钥，防止令牌盗用。",
              "Token Exchange (RFC 8693) 实现服务间安全的令牌传递与降权。",
            ],
            resources: [
              { title: "SPIFFE/SPIRE", url: "https://spiffe.io/" },
              { title: "DPoP RFC 9449", url: "https://datatracker.ietf.org/doc/html/rfc9449" },
              { title: "Token Exchange", url: "https://datatracker.ietf.org/doc/html/rfc8693" },
            ],
          },
        ],
      },
      {
        id: "api-w12",
        title: "第 12 周：服务网格与威胁防护",
        summary: "集成服务网格安全能力，实践 API 威胁建模与渗透测试。",
        lessons: [
          {
            id: "api-w12-1",
            title: "服务网格安全",
            detail: "利用 Istio/Linkerd 实现 mTLS、流量策略与可观测性。",
            keyPoints: [
              "服务网格自动注入 sidecar，透明实现 mTLS 加密与身份验证。",
              "AuthorizationPolicy 定义细粒度访问规则，基于服务身份与请求属性。",
              "流量镜像用于影子测试，金丝雀发布实现渐进式上线。",
            ],
            resources: [
              { title: "Istio Security", url: "https://istio.io/latest/docs/concepts/security/" },
              { title: "Linkerd mTLS", url: "https://linkerd.io/2.14/features/automatic-mtls/" },
              { title: "Traffic Mirroring", url: "https://istio.io/latest/docs/tasks/traffic-management/mirroring/" },
            ],
          },
          {
            id: "api-w12-2",
            title: "API 威胁建模与渗透测试",
            detail: "使用 STRIDE 进行威胁建模，自动化 API 安全扫描与渗透测试。",
            keyPoints: [
              "STRIDE 模型分析 Spoofing、Tampering、Repudiation、Information Disclosure、DoS、Elevation of Privilege。",
              "使用 OWASP ZAP、Burp Suite 进行 API 安全扫描，集成 CI/CD。",
              "Bot 检测结合行为分析、设备指纹与验证码挑战。",
            ],
            resources: [
              { title: "STRIDE Threat Modeling", url: "https://learn.microsoft.com/azure/security/develop/threat-modeling-tool-threats" },
              { title: "OWASP ZAP", url: "https://www.zaproxy.org/" },
              { title: "API Security Testing", url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/12-API_Testing/" },
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
  {
    id: "api-realtime-patterns",
    title: "实时通信选型",
    summary: "根据场景特征选择 WebSocket、SSE 或 Long Polling。",
    points: [
      "WebSocket 双向全双工，适合聊天、协作编辑、游戏等高频双向场景。",
      "SSE 服务端单向推送，自动重连、兼容 HTTP/2，适合通知与实时更新。",
      "Long Polling 兼容性最好，作为降级方案处理不支持 WebSocket 的环境。",
    ],
    practice: "实现一个实时通知系统，对比 SSE 与 WebSocket 的连接管理与资源消耗。",
  },
  {
    id: "api-event-driven",
    title: "事件驱动设计",
    summary: "通过 Webhook 与消息队列解耦系统，实现异步可靠通信。",
    points: [
      "Webhook 使用 HMAC 签名防伪造，指数退避重试保证投递。",
      "CloudEvents 标准化事件格式，specversion/type/source/id 为必需属性。",
      "AsyncAPI 描述事件接口契约，与 OpenAPI 形成互补。",
    ],
    practice: "为订单系统实现 Webhook 推送，包括签名生成、验证与重试队列。",
  },
  {
    id: "api-bff-pattern",
    title: "BFF 模式",
    summary: "为不同客户端定制后端聚合层，优化响应格式与性能。",
    points: [
      "Web、Mobile、IoT 客户端需求不同，BFF 按客户端优化字段与格式。",
      "BFF 聚合多个微服务调用，减少客户端请求次数与复杂度。",
      "权衡 BFF 数量，避免过度分散导致维护成本上升。",
    ],
    practice: "为移动端设计 BFF 层，聚合用户、订单、推荐服务的响应。",
  },
  {
    id: "api-relay-spec",
    title: "Relay 规范",
    summary: "遵循 Relay GraphQL 规范，实现标准化的分页与对象识别。",
    points: [
      "Node 接口定义全局唯一 ID，支持 node(id: ID!) 直接查询任意对象。",
      "Connections 规范（edges/node/pageInfo/cursor）标准化游标分页。",
      "Global ID 编码类型名与本地 ID，支持客户端缓存规范化。",
    ],
    practice: "将现有 GraphQL Schema 改造为 Relay 兼容，实现 Node 接口与 Connections。",
  },
  {
    id: "api-zero-trust",
    title: "Zero Trust API",
    summary: "不信任网络边界，每个请求都需验证身份与授权。",
    points: [
      "持续验证：每个 API 调用都验证令牌、权限与上下文。",
      "最小权限：令牌只包含必要的 scope，服务间使用降权令牌。",
      "微分段：服务间通信使用 mTLS，网络隔离与身份验证结合。",
    ],
    practice: "配置服务网格实现服务间 mTLS，定义细粒度 AuthorizationPolicy。",
  },
  {
    id: "api-pagination-patterns",
    title: "分页模式对比",
    summary: "根据数据特征与查询需求选择合适的分页策略。",
    points: [
      "Offset 分页：简单直观但深页性能差，适合管理后台小数据集。",
      "Keyset 分页：基于索引列性能稳定，适合时间线与无限滚动。",
      "Cursor 分页：不透明游标兼顾安全与灵活，GraphQL 推荐方案。",
    ],
    practice: "对比 100 万条数据下 offset=999000 与 keyset 分页的查询性能。",
  },
  {
    id: "api-service-mesh",
    title: "服务网格安全",
    summary: "利用 Istio/Linkerd 自动化服务间安全与可观测性。",
    points: [
      "Sidecar 代理透明处理 mTLS、重试、超时与熔断。",
      "AuthorizationPolicy 基于服务身份与请求属性定义访问规则。",
      "流量镜像支持影子测试，金丝雀发布实现渐进式上线。",
    ],
    practice: "在 Istio 中配置服务间访问策略，测试未授权请求被拒绝。",
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
  {
    id: "api-exam-13",
    question: "需要服务端向客户端单向推送实时通知，哪种方案最合适？",
    options: [
      "短轮询（每秒请求一次）",
      "Server-Sent Events (SSE)，支持自动重连与 HTTP/2",
      "WebSocket，因为它是最新的技术",
      "定时批量拉取",
    ],
    answer: 1,
    rationale: "SSE 专为服务端单向推送设计，自动重连、兼容 HTTP/2，比 WebSocket 更轻量。",
  },
  {
    id: "api-exam-14",
    question: "Webhook 安全最佳实践应包括？",
    options: [
      "直接信任来源 IP，不做签名验证",
      "使用 HMAC-SHA256 签名 payload，接收方验证签名并实现幂等处理",
      "只用 HTTP 不加密，方便调试",
      "失败后立即无限重试",
    ],
    answer: 1,
    rationale: "HMAC 签名防止伪造，幂等处理避免重复消费，指数退避重试保护双方资源。",
  },
  {
    id: "api-exam-15",
    question: "CloudEvents 规范定义的必需属性包括？",
    options: [
      "只需要 data 字段",
      "source、type、id、specversion",
      "topic 和 message",
      "key 和 value",
    ],
    answer: 1,
    rationale: "CloudEvents 必需属性包括 source（事件源）、type（事件类型）、id（唯一标识）、specversion（规范版本）。",
  },
  {
    id: "api-exam-16",
    question: "处理百万级数据分页时，哪种方式性能最稳定？",
    options: [
      "OFFSET 999000 LIMIT 20",
      "Keyset 分页，基于索引列 WHERE id > last_id LIMIT 20",
      "一次性返回所有数据让客户端分页",
      "随机跳页访问",
    ],
    answer: 1,
    rationale: "Keyset 分页基于索引列，性能与页码无关，适合大数据集的顺序遍历。",
  },
  {
    id: "api-exam-17",
    question: "Relay GraphQL 规范中 Connections 的核心组成是？",
    options: [
      "data 和 meta",
      "edges（含 node 和 cursor）与 pageInfo（含 hasNextPage 等）",
      "items 和 total",
      "results 和 pagination",
    ],
    answer: 1,
    rationale: "Relay Connections 定义 edges 数组（每个元素含 node 和 cursor）与 pageInfo 对象。",
  },
  {
    id: "api-exam-18",
    question: "BFF (Backend for Frontend) 模式的主要目的是？",
    options: [
      "让所有客户端共享同一个 API 格式",
      "为不同客户端（Web/Mobile/IoT）定制优化的 API 聚合层",
      "替代所有微服务",
      "只用于前端缓存",
    ],
    answer: 1,
    rationale: "BFF 为特定客户端优化响应格式与字段，聚合多服务调用减少客户端复杂度。",
  },
  {
    id: "api-exam-19",
    question: "Zero Trust 架构的核心原则是？",
    options: [
      "内网流量默认信任，只验证外部请求",
      "不信任网络边界，每个请求都需验证身份与授权",
      "只在网关做一次认证",
      "信任 VPN 连接的所有请求",
    ],
    answer: 1,
    rationale: "Zero Trust 不依赖网络位置判断信任，每个 API 调用都需持续验证。",
  },
  {
    id: "api-exam-20",
    question: "DPoP (Demonstrating Proof of Possession) 的作用是？",
    options: [
      "加密存储令牌",
      "将访问令牌绑定到客户端密钥，防止令牌被盗用",
      "延长令牌有效期",
      "替代 HTTPS",
    ],
    answer: 1,
    rationale: "DPoP 要求客户端证明持有与令牌绑定的私钥，即使令牌泄露也无法被他人使用。",
  },
  {
    id: "api-exam-21",
    question: "服务网格（如 Istio）如何实现服务间安全通信？",
    options: [
      "依赖应用代码手动实现 TLS",
      "Sidecar 代理自动注入 mTLS，透明处理加密与身份验证",
      "只用 IP 白名单",
      "关闭所有网络访问",
    ],
    answer: 1,
    rationale: "服务网格通过 Sidecar 代理自动实现 mTLS，无需应用代码修改。",
  },
  {
    id: "api-exam-22",
    question: "STRIDE 威胁建模中的 'R' 代表什么？",
    options: [
      "Ransomware（勒索软件）",
      "Repudiation（抵赖）",
      "Replay（重放攻击）",
      "Reconnaissance（侦察）",
    ],
    answer: 1,
    rationale: "STRIDE 中 R 代表 Repudiation（抵赖），指用户否认执行过某操作，需要审计日志防范。",
  },
  {
    id: "api-exam-23",
    question: "GraphQL @defer 指令的作用是？",
    options: [
      "延迟执行整个查询",
      "延迟加载非关键字段，先返回关键数据再增量补充",
      "缓存查询结果",
      "跳过字段验证",
    ],
    answer: 1,
    rationale: "@defer 让服务端先返回关键字段，再异步补充被 defer 的字段，优化首屏加载。",
  },
  {
    id: "api-exam-24",
    question: "使用 ETag 实现条件请求时，客户端应发送什么请求头？",
    options: [
      "Cache-Control: no-cache",
      "If-None-Match: <etag-value>",
      "Accept: application/json",
      "X-Conditional: true",
    ],
    answer: 1,
    rationale: "If-None-Match 携带之前的 ETag 值，服务端比对后返回 304 Not Modified 或新内容。",
  },
]

export const apiPlatformRoadmap: RoadmapDefinition = {
  id: "api-platform",
  label: "API 设计·安全·GraphQL",
  title: "API 设计",
  durationLabel: "12 个主题",
  description: "围绕 API 设计、接口安全与 GraphQL 生产化的完整路线，涵盖契约驱动开发、版本演进、OAuth2/OIDC 认证、OWASP 安全防护、实时通信、事件驱动、高级分页、BFF 模式、Zero Trust 架构与服务网格安全。",
  heroBadge: "API 全栈",
  stages: apiPlatformStages,
  knowledgeCards: apiPlatformKnowledgeCards,
  examQuestions: apiPlatformExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "先完成 REST 资源建模与 OpenAPI 描述，理解 HTTP 方法语义与错误码规范。"
    if (percent < 25) return "深入认证授权机制（OAuth2/PKCE），实现输入验证、速率限制与审计日志。"
    if (percent < 50) return "掌握 GraphQL Schema 设计，配置深度/复杂度限制与 DataLoader 批量加载。"
    if (percent < 75) return "学习实时通信（WebSocket/SSE）与事件驱动（Webhook/AsyncAPI），构建响应式系统。"
    if (percent < 90) return "深入 BFF 模式、Relay 规范与高级分页，优化 API 性能与架构。"
    return "进阶 Zero Trust 与服务网格：配置 mTLS、威胁建模、渗透测试，持续演练安全场景。"
  },
  resourceGuide: {
    environment: "准备 API 网关（Kong/Envoy）、OpenAPI Linter（Spectral）、GraphQL 开发环境（Apollo Server）、服务网格（Istio/Linkerd）、链路追踪（Jaeger/Zipkin）与日志系统（ELK/Loki）。",
    fallbackKeyPoints: [
      "REST 路径使用名词复数，HTTP 方法语义明确，错误使用 RFC 7807 格式。",
      "版本策略选择 URI/Header/日期版本，弃用期 6-12 个月。",
      "OAuth2 必须使用 PKCE，JWT 验证签名/issuer/audience/exp。",
      "输入验证使用白名单而非黑名单，服务端验证不可跳过。",
      "审计日志不含敏感数据，与 SIEM 集成实现实时告警。",
      "GraphQL 字段用 camelCase，类型用 PascalCase，枚举值用 SCREAMING_SNAKE_CASE。",
      "DataLoader 每请求创建新实例，批量函数结果顺序必须与输入键一致。",
      "Federation 使用 @key 定义实体标识，__resolveReference 解析跨子图实体。",
      "SSE 适合服务端单向推送，WebSocket 适合双向高频通信。",
      "Webhook 使用 HMAC-SHA256 签名，接收方实现幂等处理。",
      "Keyset 分页性能稳定，Cursor 分页是 GraphQL 推荐方案。",
      "Zero Trust 每个请求都验证身份，mTLS 保护服务间通信。",
    ],
    handsOnSteps: [
      "为核心接口编写 OpenAPI 3.1 规范，配置 Spectral linter 检查命名规范。",
      "实现 OAuth2 Authorization Code + PKCE 流程，验证 JWT 的完整声明。",
      "配置 API 网关的速率限制（全局/用户级/端点级），测试 429 响应。",
      "为 POST 接口实现 Idempotency-Key 机制，测试并发重试场景。",
      "设置审计日志中间件，记录用户、操作、资源、结果，集成告警。",
      "创建 GraphQL Schema 并配置 DataLoader，验证 N+1 查询被批量化。",
      "配置 GraphQL 深度限制（max_depth: 10）和复杂度限制，测试拒绝过深查询。",
      "实现 SSE 实时通知推送，处理连接管理与断线重连。",
      "为订单系统实现 Webhook 推送，包括签名生成、验证与重试队列。",
      "实现 Keyset 分页并对比 Offset 分页在大数据集下的性能差异。",
      "将 GraphQL Schema 改造为 Relay 兼容，实现 Node 接口与 Connections。",
      "配置 Istio 服务网格，启用 mTLS 并定义 AuthorizationPolicy。",
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
      "Webhook 是否使用 HMAC 签名并实现幂等处理？",
      "大数据集分页是否使用 Keyset/Cursor 而非 Offset？",
      "服务间通信是否启用 mTLS？",
      "是否进行过 API 威胁建模与安全扫描？",
    ],
    extensions: [
      "研究 gRPC 与 Protocol Buffers，对比 REST/GraphQL 的适用场景。",
      "实践契约测试（Pact/Dredd），在 CI 中自动检测接口破坏。",
      "引入 OPA/ABAC 策略引擎统一授权，支持复杂的权限规则。",
      "配置 API 网关的熔断与金丝雀发布，提升服务韧性。",
      "探索 SPIFFE/SPIRE 服务身份管理，实现细粒度服务认证。",
      "学习 DPoP 令牌绑定机制，增强 OAuth2 令牌安全性。",
      "实践 GraphQL @defer/@stream 增量响应，优化大查询性能。",
      "使用 OWASP ZAP 自动化 API 安全扫描，集成 CI/CD 流水线。",
    ],
    lessonQuizAdvice: "从 REST 设计原则和 HTTP 语义出发，结合 OWASP API Security Top 10 和 OAuth2 安全最佳实践。实时通信题目关注 SSE/WebSocket 选型，事件驱动关注 Webhook 安全与 CloudEvents。高级主题涵盖分页模式、Relay 规范、Zero Trust 与服务网格。",
  },
}
