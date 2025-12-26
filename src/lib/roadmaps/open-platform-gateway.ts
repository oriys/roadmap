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
            resources: [
              { title: "Envoy Getting Started", url: "https://www.envoyproxy.io/docs/envoy/latest/start/start" },
              { title: "Kong Gateway Quickstart", url: "https://docs.konghq.com/gateway/latest/get-started/" },
            ],
          },
          {
            id: "gateway-w2-2",
            title: "认证与授权接入",
            detail: "集成 OAuth2.0/OIDC 或内部 Token 体系，实现统一认证与最小权限。",
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
            resources: [
              { title: "Audit Logging", url: "https://cloud.google.com/architecture/best-practices-for-audit-logging" },
              { title: "OpenTelemetry", url: "https://opentelemetry.io/docs/" },
            ],
          },
          {
            id: "gateway-w4-2",
            title: "指标、追踪与告警",
            detail: "采集延迟、错误率、饱和度四黄金指标，配置 SLO 告警。",
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
            resources: [
              { title: "API Key Rotation", url: "https://cloud.google.com/api-keys/docs/rotating-api-keys" },
              { title: "Developer Portal Patterns", url: "https://learn.microsoft.com/azure/api-management/api-management-howto-portal-customization" },
            ],
          },
          {
            id: "gateway-w5-2",
            title: "配额与分级运营",
            detail: "按合作方等级设置配额、特性开关与 SLA，支持数据看板回馈。",
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
            resources: [
              { title: "API Versioning", url: "https://google.aip.dev/181" },
              { title: "Deprecation Playbook", url: "https://stripe.com/blog/api-versioning" },
            ],
          },
          {
            id: "gateway-w6-2",
            title: "灰度发布与回滚预案",
            detail: "结合流量切分、canary、shadow 与快速回滚预案，实现低风险发布。",
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
