import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const openGatewayStages: Stage[] = [
  {
    id: "gateway-foundation",
    title: "阶段一：开放平台与网关基础",
    duration: "第 1-2 周",
    goal: "理解开放平台的业务模式与 API 网关的核心职责，搭建最小可用网关。",
    weeks: [
      {
        id: "gateway-w1",
        title: "第 1 周：开放平台模型",
        summary: "梳理开放平台的角色、流量形态与业务合规边界。",
        overview: "从业务视角理解开放平台，明确 B 端、C 端、合作伙伴的接入差异与风险点。",
        lessons: [
          {
            id: "gateway-w1-1",
            title: "开放平台角色与域",
            detail: "识别运营方、第三方开发者、终端用户的责任与权限边界。",
            keyPoints: [
              "开放平台需区分运营方、ISV、商户、终端用户的权限。",
              "开放 API 常见诉求：获客、生态、长尾创新。",
              "沙箱与生产环境应隔离凭证与数据，提供准入与退出流程。",
            ],
            resources: [
              { title: "roadmap.sh: API Design", url: "https://roadmap.sh/api-design" },
              { title: "OpenAPI Security Checklist", url: "https://github.com/OWASP/CheatSheetSeries" },
            ],
          },
          {
            id: "gateway-w1-2",
            title: "网关职责总览",
            detail: "明确网关在鉴权、流控、协议转换、可观测性中的位置。",
            keyPoints: [
              "网关是南北向流量入口，聚焦统一鉴权与策略执行。",
              "典型能力：路由、重写、降级、熔断、限流、签名校验。",
              "治理目标：提升一致性、可灰度、可审计。",
            ],
            resources: [
              { title: "Nginx Ingress Basics", url: "https://kubernetes.github.io/ingress-nginx/" },
              { title: "API Gateway Patterns", url: "https://martinfowler.com/articles/microservices.html#apigateway" },
            ],
          },
        ],
      },
      {
        id: "gateway-w2",
        title: "第 2 周：最小可用网关",
        summary: "搭建演示环境并实现最小化的路由与鉴权链路。",
        lessons: [
          {
            id: "gateway-w2-1",
            title: "基础路由与健康监测",
            detail: "配置北向入口、服务发现与健康检查，确保核心路径可用。",
            keyPoints: [
              "路由规则应支持路径、Header、查询参数等多维匹配。",
              "健康检查分主动（探针）和被动（错误率）两种模式。",
              "服务发现需与注册中心集成，支持动态上下线。",
            ],
            resources: [
              { title: "Envoy Getting Started", url: "https://www.envoyproxy.io/docs/envoy/latest/start/start" },
              { title: "Kong Gateway Quickstart", url: "https://docs.konghq.com/gateway/latest/get-started/" },
            ],
          },
          {
            id: "gateway-w2-2",
            title: "认证与授权接入",
            detail: "集成 OAuth2.0/OIDC 或内部 Token 体系，实现统一认证与最小权限。",
            keyPoints: [
              "OAuth2 客户端凭证模式适合机器到机器的后台调用。",
              "Token 应包含 scope 信息，实现最小权限控制。",
              "Token 刷新与吊销机制需考虑分布式场景下的一致性。",
            ],
            resources: [
              { title: "OAuth 2.0 RFC", url: "https://datatracker.ietf.org/doc/html/rfc6749" },
              { title: "OIDC Core", url: "https://openid.net/specs/openid-connect-core-1_0.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "gateway-security-observability",
    title: "阶段二：安全防护与可观测性",
    duration: "第 3-4 周",
    goal: "构建合作方安全基线，完善日志、指标与审计链路，满足监管与排障需求。",
    weeks: [
      {
        id: "gateway-w3",
        title: "第 3 周：签名、限流与风控",
        summary: "实现合作方签名校验、速率限制与黑灰名单防护。",
        lessons: [
          {
            id: "gateway-w3-1",
            title: "签名与重放防护",
            detail: "设计签名算法、时间戳与 nonce 校验，避免重放与篡改。",
            keyPoints: [
              "签名字段应覆盖方法、路径、body 与时间戳。",
              "限制请求有效期，校验 nonce 去重。",
              "优先使用 HMAC 或非对称签名，避免明文密钥。",
            ],
            resources: [
              { title: "AWS Signature V4", url: "https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html" },
              { title: "OWASP API Security", url: "https://owasp.org/API-Security/" },
            ],
          },
          {
            id: "gateway-w3-2",
            title: "多层限流与降级",
            detail: "结合连接数、QPS、并发与突发限流策略，提供熔断与静态兜底。",
            keyPoints: [
              "限流维度：连接数、QPS、并发请求数、突发窗口。",
              "令牌桶适合平滑限流，滑动窗口适合精确计数。",
              "熔断状态机：Closed → Open → Half-Open，需配置恢复探测。",
            ],
            resources: [
              { title: "Rate Limiting Strategies", url: "https://cloud.google.com/architecture/rate-limiting-strategies-techniques" },
              { title: "Envoy Rate Limit", url: "https://www.envoyproxy.io/docs/envoy/latest/configuration/other_features/global_rate_limit" },
            ],
          },
        ],
      },
      {
        id: "gateway-w4",
        title: "第 4 周：审计与可观测性",
        summary: "统一请求日志、调用链指标与告警，支撑 SLA 与合规审计。",
        lessons: [
          {
            id: "gateway-w4-1",
            title: "日志与审计模型",
            detail: "定义审计字段、追踪 ID、脱敏规则与留存策略。",
            keyPoints: [
              "审计日志需包含 traceId、keyId、调用结果、耗时。",
              "敏感字段（手机号、身份证、密钥）必须脱敏后存储。",
              "留存策略需满足监管要求（如 180 天或更长）。",
            ],
            resources: [
              { title: "Audit Logging", url: "https://cloud.google.com/architecture/best-practices-for-audit-logging" },
              { title: "OpenTelemetry", url: "https://opentelemetry.io/docs/" },
            ],
          },
          {
            id: "gateway-w4-2",
            title: "指标、追踪与告警",
            detail: "采集延迟、错误率、饱和度四黄金指标，配置 SLO 告警。",
            keyPoints: [
              "四黄金指标：延迟、流量、错误率、饱和度。",
              "SLO 定义需与合作方 SLA 对齐，设置错误预算。",
              "告警需分级（P0-P3），配置升级路径与抑制规则。",
            ],
            resources: [
              { title: "SRE Golden Signals", url: "https://sre.google/sre-book/monitoring-distributed-systems/" },
              { title: "Prometheus Alerting", url: "https://prometheus.io/docs/alerting/latest/overview/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "gateway-ecosystem",
    title: "阶段三：生态运营与灰度治理",
    duration: "第 5-6 周",
    goal: "完善合作方生命周期管理与变更灰度，保障版本演进可控。",
    weeks: [
      {
        id: "gateway-w5",
        title: "第 5 周：合作方生命周期",
        summary: "设计从申请、审核、发布到下线的闭环流程与权限模型。",
        lessons: [
          {
            id: "gateway-w5-1",
            title: "入驻与凭证管理",
            detail: "提供申请、审批、沙箱试用、凭证轮换与吊销机制。",
            keyPoints: [
              "凭证生命周期：创建 → 激活 → 轮换 → 吊销。",
              "自动化轮换降低密钥泄露风险，建议 90 天周期。",
              "沙箱环境应提供与生产一致的 API 行为，但隔离数据。",
            ],
            resources: [
              { title: "API Key Rotation", url: "https://cloud.google.com/api-keys/docs/rotating-api-keys" },
              { title: "Developer Portal Patterns", url: "https://learn.microsoft.com/azure/api-management/api-management-howto-portal-customization" },
            ],
          },
          {
            id: "gateway-w5-2",
            title: "配额与分级运营",
            detail: "按合作方等级设置配额、特性开关与 SLA，支持数据看板回馈。",
            keyPoints: [
              "配额维度：QPS、日调用量、并发数，区分硬限制与软限制。",
              "分级运营：基础/高级/战略合作方对应不同配额与 SLA。",
              "配额消耗需实时可观测，提供自助查询看板。",
            ],
            resources: [
              { title: "Usage Quotas", url: "https://cloud.google.com/docs/quota" },
              { title: "Feature Flag Guide", url: "https://launchdarkly.com/blog/feature-flags-ultimate-guide/" },
            ],
          },
        ],
      },
      {
        id: "gateway-w6",
        title: "第 6 周：灰度、版本与回滚",
        summary: "规划版本治理、灰度发布与回滚策略，降低变更风险。",
        lessons: [
          {
            id: "gateway-w6-1",
            title: "版本兼容与弃用",
            detail: "设计版本策略、兼容期、弃用公告与迁移指南。",
            keyPoints: [
              "版本策略：URL 路径版本（/v1/）或 Header 版本各有优劣。",
              "弃用需提前 2-3 个月公告，提供迁移指南与兼容窗口。",
              "监控旧版本调用量，确认迁移完成后再下线。",
            ],
            resources: [
              { title: "API Versioning", url: "https://google.aip.dev/181" },
              { title: "Deprecation Playbook", url: "https://stripe.com/blog/api-versioning" },
            ],
          },
          {
            id: "gateway-w6-2",
            title: "灰度发布与回滚预案",
            detail: "结合流量切分、canary、shadow 与快速回滚预案，实现低风险发布。",
            keyPoints: [
              "灰度策略：按合作方 ID、流量百分比或区域维度切分。",
              "canary 需对比关键指标（错误率、延迟）自动决策。",
              "回滚预案应包含一键脚本、数据兼容性检查与通知机制。",
            ],
            resources: [
              { title: "Canary Releases", url: "https://martinfowler.com/bliki/CanaryRelease.html" },
              { title: "Shadow Traffic", url: "https://www.nginx.com/blog/testing-microservices-production/" },
            ],
          },
        ],
      },
    ],
  },
]

export const openGatewayKnowledgeCards: KnowledgeCard[] = [
  {
    id: "gateway-card-roles",
    title: "角色与权限模型",
    summary: "开放平台的角色需要分层管理，以降低越权风险。",
    points: [
      "运营方、ISV、商户、用户四层角色的权限与责任需拆分",
      "沙箱与生产的凭证、额度、数据需完全隔离",
      "审核、吊销、轮换凭证需要自动化与审计记录",
    ],
    practice: "为现有接口梳理角色矩阵，标记谁能调用、谁能代理、谁能转授权。",
  },
  {
    id: "gateway-card-signature",
    title: "签名与重放防护",
    summary: "签名验证与防重放是开放 API 的第一道防线。",
    points: [
      "签名覆盖 HTTP 方法、路径、查询、body 与时间戳",
      "请求有效期建议 5 分钟内，nonce 去重窗口依赖业务风险",
      "失败日志需记录 traceId、keyId，便于追责与排障",
    ],
    practice: "用 HMAC-SHA256 为示例接口实现签名与 300 秒有效期校验。",
  },
  {
    id: "gateway-card-quotas",
    title: "配额与分级运营",
    summary: "按合作方等级管理配额与特性开关，兼顾收入与风险。",
    points: [
      "按 key/租户/产品维度划分配额，区分硬限制与软限制",
      "面向核心合作方提供白名单与紧急升配流程",
      "配额消耗与异常需要可观测与自助看板",
    ],
    practice: "为三类合作方定义不同的 QPS、并发与日调用量配额，并设计超限回退策略。",
  },
  {
    id: "gateway-card-observability",
    title: "可观测性基线",
    summary: "日志、指标、追踪与告警的完备性决定排障与合规能力。",
    points: [
      "日志需包含 traceId、keyId、调用结果、耗时与脱敏字段",
      "黄金指标：延迟、错误率、流量、饱和度，结合 SLO 定义阈值",
      "告警应覆盖网关层、下游依赖与业务异常模式",
    ],
    practice: "为核心路径接入 OpenTelemetry，打通日志与追踪 ID，构建 4xx/5xx 告警。",
  },
  {
    id: "gateway-card-versioning",
    title: "版本治理",
    summary: "API 版本治理是开放平台长期运营的基础。",
    points: [
      "版本策略需提前规划，避免后期被迫破坏性变更",
      "弃用流程：公告 → 迁移窗口 → 监控调用量 → 下线",
      "向后兼容是默认原则，新增字段不应破坏现有消费者",
    ],
    practice: "为一个现有 API 设计 v2 版本，制定兼容期与迁移指南。",
  },
  {
    id: "gateway-card-ratelimit",
    title: "限流策略设计",
    summary: "多层限流是保护系统稳定性的核心手段。",
    points: [
      "令牌桶适合平滑限流，滑动窗口适合精确计数场景",
      "限流维度：全局 → 合作方 → 接口 → 用户，逐层细化",
      "超限响应需包含 Retry-After 头和可追踪的错误码",
    ],
    practice: "实现一个支持多维度（key + 接口）的滑动窗口限流器。",
  },
  {
    id: "gateway-card-canary",
    title: "灰度发布",
    summary: "灰度发布降低变更风险，确保新版本平滑上线。",
    points: [
      "灰度维度：合作方 ID、流量百分比、地域、特性标签",
      "关键指标对比：错误率、延迟 p99、业务成功率",
      "回滚需要一键脚本和自动触发条件（如错误率 > 阈值）",
    ],
    practice: "为一次网关配置变更设计灰度方案，包含切流步骤与回滚脚本。",
  },
]

export const openGatewayExamQuestions: QuizQuestion[] = [
  {
    id: "gateway-q1",
    question: "为防止请求被重放，签名校验除了验证 HMAC 还应增加哪一步？",
    options: ["对 body 做 Base64 编码", "检查时间戳与 nonce 是否在有效窗口内", "将 Header 按字母排序", "使用对称密钥加密响应"],
    answer: 1,
    rationale: "重放防护需要时间戳+nonce 校验，确保请求在有效期内且未被重复使用。",
  },
  {
    id: "gateway-q2",
    question: "在开放平台中区分沙箱与生产环境的主要目的是什么？",
    options: ["提升请求吞吐", "减少网关日志", "隔离数据与凭证风险", "优化缓存命中率"],
    answer: 2,
    rationale: "沙箱与生产隔离可以避免测试凭证、测试数据影响真实业务，降低安全风险。",
  },
  {
    id: "gateway-q3",
    question: "多层限流设计的核心原因是？",
    options: ["减少签名开销", "分别约束连接、并发与突发流量", "避免使用缓存", "替代鉴权"],
    answer: 1,
    rationale: "连接数、并发、突发速率等维度的限流可分别控制不同资源的消耗，形成分层保护。",
  },
  {
    id: "gateway-q4",
    question: "开放平台审计日志通常不需要记录哪项信息？",
    options: ["调用 traceId", "签名用的密钥明文", "调用结果与错误码", "调用方标识"],
    answer: 1,
    rationale: "密钥明文不应记录在日志中，其余字段用于追踪与审计。",
  },
  {
    id: "gateway-q5",
    question: "合作方配额管理需要区分硬限制与软限制的原因是？",
    options: ["方便删除日志", "兼顾稳定性与业务弹性", "避免签名失效", "减少路由规则"],
    answer: 1,
    rationale: "硬限制保护系统稳定，软限制允许突发或临时扩容以保持业务连续性。",
  },
  {
    id: "gateway-q6",
    question: "下面哪种策略最适合验证第三方应用的客户端身份并颁发令牌？",
    options: ["Basic Auth", "OAuth2 客户端凭证模式", "共享 Cookie", "IP 白名单"],
    answer: 1,
    rationale: "OAuth2 客户端凭证模式适合机器到机器的后台调用，能标准化客户端身份验证与令牌颁发。",
  },
  {
    id: "gateway-q7",
    question: "规划 API 版本弃用时，最重要的配套措施是？",
    options: ["强制立即下线旧版本", "仅在文档标记弃用", "提前公告迁移计划并提供灰度窗口", "关闭日志采集"],
    answer: 2,
    rationale: "弃用需要提前公告、提供迁移指南和灰度期，避免直接中断合作方业务。",
  },
  {
    id: "gateway-q8",
    question: "在网关层做熔断的主要目的是什么？",
    options: ["提升缓存命中率", "隔离下游故障并快速回退", "减少日志量", "避免鉴权执行"],
    answer: 1,
    rationale: "熔断可以在下游异常时快速失败或返回兜底，避免故障扩散并保护系统。",
  },
  {
    id: "gateway-q9",
    question: "令牌桶算法相比固定窗口计数器的优势是？",
    options: ["实现更简单", "能平滑处理突发流量", "消耗更少内存", "不需要时钟同步"],
    answer: 1,
    rationale: "令牌桶允许一定的突发流量同时保持平均速率限制，更适合真实流量模式。",
  },
  {
    id: "gateway-q10",
    question: "开放平台的凭证轮换建议周期是？",
    options: ["每年一次", "永不轮换", "90 天或更短", "仅在泄露后轮换"],
    answer: 2,
    rationale: "定期轮换（如 90 天）可降低凭证泄露的影响窗口，是安全最佳实践。",
  },
  {
    id: "gateway-q11",
    question: "网关的路由匹配优先级通常如何设计？",
    options: ["随机匹配", "精确匹配 > 前缀匹配 > 通配符匹配", "按配置文件顺序", "最短路径优先"],
    answer: 1,
    rationale: "精确匹配优先级最高，避免通配符规则意外覆盖特定路由。",
  },
  {
    id: "gateway-q12",
    question: "当开放 API 需要传递用户身份给下游服务时，最安全的做法是？",
    options: ["在 URL 中传递用户 ID", "网关验证 Token 后将用户信息注入内部 Header", "让下游服务自行验证外部 Token", "使用 Cookie 传递"],
    answer: 1,
    rationale: "网关统一验证后注入内部 Header，下游服务信任网关，避免 Token 泄露到内部网络。",
  },
  {
    id: "gateway-q13",
    question: "Shadow Traffic 测试的核心价值是？",
    options: ["减少测试环境成本", "用真实流量验证新版本而不影响用户", "提升缓存命中率", "降低网关延迟"],
    answer: 1,
    rationale: "影子流量将真实请求复制到新版本，验证兼容性和性能而不影响生产响应。",
  },
  {
    id: "gateway-q14",
    question: "网关日志脱敏的基本原则是？",
    options: ["记录所有原始数据便于排障", "敏感字段（手机号/身份证/密钥）必须脱敏，traceId 保留完整", "不记录任何请求数据", "只在测试环境脱敏"],
    answer: 1,
    rationale: "脱敏保护用户隐私，保留 traceId 等非敏感字段确保可追踪性。",
  },
  {
    id: "gateway-q15",
    question: "开放平台的 SLA 设计应基于？",
    options: ["网关自身的最大理论吞吐", "端到端路径中最弱环节的能力", "竞品的 SLA 水平", "合作方的期望值"],
    answer: 1,
    rationale: "SLA 不能超过最弱环节的能力，需要端到端评估后制定可承诺的目标。",
  },
  {
    id: "gateway-q16",
    question: "API 响应中包含 Retry-After 头的作用是？",
    options: ["通知客户端缓存时间", "告知被限流的客户端何时可以重试", "指示服务端重启时间", "设置 Token 过期时间"],
    answer: 1,
    rationale: "Retry-After 帮助被限流的客户端合理安排重试，避免无效请求浪费资源。",
  },
  {
    id: "gateway-q17",
    question: "开放平台的开发者门户应提供的核心功能是？",
    options: ["只提供 API 文档", "自助注册、沙箱调试、凭证管理、用量看板与文档", "仅提供 SDK 下载", "只展示公告信息"],
    answer: 1,
    rationale: "开发者门户应提供完整的自助式体验，降低接入门槛和运营成本。",
  },
  {
    id: "gateway-q18",
    question: "当网关需要处理 Webhook 回调时，关键考虑是？",
    options: ["同步等待下游处理完成", "异步投递、签名验证、幂等处理与重试机制", "不做任何验证直接转发", "限制回调频率为每分钟一次"],
    answer: 1,
    rationale: "Webhook 需要异步处理、签名验证防篡改、幂等处理防重复、失败重试保证可靠性。",
  },
  {
    id: "gateway-q19",
    question: "分布式限流相比单机限流的核心挑战是？",
    options: ["配置更复杂", "需要跨节点同步计数状态，存在一致性与延迟权衡", "消耗更多 CPU", "不支持突发流量"],
    answer: 1,
    rationale: "分布式限流需要跨节点协调（如 Redis 计数），存在一致性与性能的权衡。",
  },
  {
    id: "gateway-q20",
    question: "网关的协议转换能力主要用于？",
    options: ["加密所有流量", "将外部 REST/gRPC 请求转换为内部服务能理解的协议", "压缩响应体", "缓存静态资源"],
    answer: 1,
    rationale: "协议转换让外部调用者使用标准协议，内部服务可使用最适合的协议，网关充当适配层。",
  },
]

export const openGatewayRoadmap: RoadmapDefinition = {
  id: "open-platform-gateway",
  label: "开放平台网关",
  title: "开放平台网关",
  durationLabel: "12 个主题",
  description: "围绕开放平台的北向入口，构建签名、防刷、鉴权、可观测与灰度治理的体系化路线，帮助团队快速落地可运营的开放网关。",
  heroBadge: "签名防护 · 限流熔断 · 审计可观测 · 合作方运营",
  stages: openGatewayStages,
  knowledgeCards: openGatewayKnowledgeCards,
  examQuestions: openGatewayExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始开放网关之旅，先梳理角色与基本路由。"
    if (percent < 25) return "继续完善鉴权与签名，确保入口安全可追责。"
    if (percent < 50) return "补齐限流、熔断与日志链路，建立可观测基线。"
    if (percent < 75) return "设计配额、特性开关与运营看板，服务生态伙伴。"
    if (percent < 100) return "规划版本治理与灰度发布，准备上线切流。"
    return "恭喜完成！保持迭代和审计，确保开放平台持续安全。"
  },
  resourceGuide: {
    environment:
      "推荐使用 Docker Compose 启动 Nginx/Envoy + Mock 下游服务，配合 Postman/Insomnia 与签名脚本完成调试。",
    fallbackKeyPoints: [
      "签名覆盖方法、路径、body，校验时间戳+nonce",
      "按 key/租户/产品维度做多层限流与熔断兜底",
      "统一日志与 traceId，脱敏敏感字段并留存审计",
      "配额、特性开关与 SLA 绑定合作方等级",
      "灰度/回滚脚本与预案需常态化演练",
    ],
    handsOnSteps: [
      "搭建演示网关，完成两条示例路由与健康检查",
      "为一条接口接入 HMAC 签名校验与 300 秒有效期",
      "实现按 key 的 QPS + 突发限流，并配置熔断兜底",
      "接入 OpenTelemetry，打通日志与 traceId 关联",
      "为一次版本升级设计 canary 与快速回滚脚本",
    ],
    selfChecks: [
      "签名失败、限流、熔断时是否返回可追踪的错误码？",
      "日志是否包含 keyId、traceId、来源 IP 且已脱敏？",
      "沙箱与生产的凭证、配额、数据是否隔离？",
      "是否有弃用公告与迁移窗口，避免合作方突停？",
      "监控告警能覆盖 4xx/5xx、延迟与异常模式吗？",
    ],
    extensions: [
      "引入 WAF、Bot 检测或行为风控补充防护",
      "建设开发者门户与自助开通、看板能力",
      "探索多云/多地域流量调度与灾备演练",
      "结合内部服务网格，打通南北向与东西向策略",
    ],
    lessonQuizAdvice: "每周末用测验检验掌握度，结合审计日志与告警案例复盘缺口。",
  },
}
