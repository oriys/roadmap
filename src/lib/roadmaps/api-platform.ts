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
              { title: "Stoplight Style Guide", url: "https://meta.stoplight.io/docs/spectral/67b22b261f3e4-style-guide" },
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
              { title: "API Versioning Best Practices", url: "https://cloud.google.com/apis/design/versioning" },
              { title: "SemVer", url: "https://semver.org/" },
              { title: "roadmap.sh: API Design", url: "https://roadmap.sh/api-design" },
            ],
          },
          {
            id: "api-w2-2",
            title: "弃用与兼容性守护",
            detail: "通过特性开关与双写策略平滑发布，给客户端迁移窗口与告警。",
            resources: [
              { title: "Rolling Updates Guide", url: "https://martinfowler.com/bliki/RollingUpgrade.html" },
              { title: "Backward Compatibility", url: "https://cloud.google.com/apis/design/changing" },
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
              { title: "Apollo Schema Design", url: "https://www.apollographql.com/docs/odyssey/courses/schema-design" },
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
              { title: "GraphQL Depth/Cost Limits", url: "https://www.apollographql.com/docs/apollo-server/security/operation-limits/" },
              { title: "roadmap.sh: GraphQL", url: "https://roadmap.sh/graphql" },
            ],
          },
          {
            id: "api-w6-2",
            title: "监控与联邦化",
            detail: "用 tracing/metrics 观测 resolver 延迟，评估是否需要 Schema Federation。",
            resources: [
              { title: "Apollo Federation", url: "https://www.apollographql.com/docs/federation/" },
              { title: "GraphQL Observability", url: "https://www.apollographql.com/docs/graphos/metrics/metrics/" },
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
]

export const apiPlatformRoadmap: RoadmapDefinition = {
  id: "api-platform",
  label: "API 设计·安全·GraphQL",
  title: "API 设计 + 安全 + GraphQL 全栈路线",
  durationLabel: "6 周进阶",
  description: "围绕 API 设计、接口安全与 GraphQL 生产化的完整路线，基于 roadmap.sh 指南串联出契约、治理与观测的实践路径。",
  heroBadge: "API 设计",
  stages: apiPlatformStages,
  knowledgeCards: apiPlatformKnowledgeCards,
  examQuestions: apiPlatformExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "先完成 REST 资源建模与 OpenAPI 描述，再规划版本与弃用策略。"
    if (percent < 40) return "补齐认证授权、输入校验与限流，把安全基线落在网关与服务层。"
    if (percent < 70) return "完善审计与监控，针对 GraphQL 加入深度/复杂度限制与 DataLoader。"
    return "持续治理：为变更做 lint/评审，定期演练安全与兼容性场景。"
  },
  resourceGuide: {
    environment: "准备 API 网关/反向代理、OpenAPI/GraphQL 规范校验工具，以及链路追踪+日志的可观测性栈。",
    fallbackKeyPoints: [
      "路径/字段命名一致，幂等性清晰，错误码有文档。",
      "认证授权默认开启，输入校验与速率限制前置。",
      "GraphQL 需要深度/复杂度限制与 resolver 级观测。",
    ],
    handsOnSteps: [
      "为一个核心接口编写 OpenAPI 或 GraphQL Schema，并跑 lint。",
      "在网关上开启限流、鉴权与审计日志，串联 traceId。",
      "为 GraphQL 添加 DataLoader 与查询复杂度限制，观察指标。",
    ],
    selfChecks: [
      "是否所有接口都有契约描述并在 CI 校验？",
      "安全事件能否通过审计/trace 追踪到调用方？",
      "GraphQL 是否有 N+1、防滥用与缓存策略？",
    ],
    extensions: [
      "尝试 API Federation 或 BFF 模式，拆分不同消费者的契约。",
      "引入策略引擎（OPA/ABAC）统一授权与审计。",
      "在 CI/CD 中运行安全扫描与破坏性变更检测。",
    ],
    lessonQuizAdvice: "回顾契约与安全基线，再结合 GraphQL 的特殊风险（N+1、复杂度），逐条排除错误选项。",
  },
}
