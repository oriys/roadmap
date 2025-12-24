import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "bp-w1-1": {
        lessonId: "bp-w1-1",
        background: [
            "【SLO 核心定义】Google SRE Workbook：'SLOs are key to making data-driven decisions about reliability, they're at the core of SRE practices'——SLO 是可靠性决策的数据基础，将模糊的'足够可靠'转化为可量化的目标。",
            "【SLI 计算公式】Google SRE Workbook 推荐 SLI 采用比率形式：'the ratio of two numbers: the number of good events divided by the total number of events'——如成功请求数/总请求数，便于设置阈值和计算误差预算。",
            "【为何不追求 100%】Google SRE Workbook 指出：'If you do manage to create an experience that is 100% reliable...you can never update or improve your service'——100% 可靠性意味着无法发布任何变更，且用户感知的改善边际递减。",
            "【误差预算机制】误差预算 = 100% - SLO 目标。例如 99.9% SLO 意味着每月约 43 分钟的'可用故障时间'，这将可靠性目标转化为可分配的工程资源。",
            "【性能预算定义】MDN：'A performance budget is a limit set to prevent regressions'——性能预算是防止性能退化的硬性约束，可应用于单个文件、整页资源或特定指标如 TTI。",
            "【百分位延迟价值】P99 延迟捕捉'正常操作下的最坏情况'。Aerospike 指出：'如果API日处理100万请求，最慢的1%对应10,000个缓慢响应'——平均值掩盖的长尾问题直接影响真实用户。"
        ],
        keyDifficulties: [
            "【平均值陷阱】平均延迟会被少数离群值扭曲，无法反映真实用户体验。P95/P99 百分位数才能揭示：GC 暂停、缓存未命中、数据库锁等间歇性瓶颈。",
            "【复合延迟效应】多服务调用时延迟会叠加。若 5 个并行 API 各自 P99 < 100ms，总体 P99 约 120ms（0.99^5 ≈ 95%）——分布式系统需要更严格的单服务 SLO。",
            "【冷启动 vs 热路径】冷启动（首次请求、JIT 编译、缓存填充）与热路径性能差异显著。SLO 需区分场景，否则冷启动会拉高整体 P99。",
            "【预算两级设计】MDN 建议性能预算包含 Warning 和 Error 两级：Warning 允许提前规划技术债务，Error 是不可逾越的上限。单一阈值易导致要么忽视、要么阻塞开发。",
            "【时间窗口选择】Google SRE 推荐'a four-week rolling window'作为通用 SLO 周期，配合每周任务优先级评审和季度战略复盘。过短的窗口噪音大，过长则反应迟钝。"
        ],
        handsOnPath: [
            "识别业务关键路径（如结账、搜索、登录），为每条路径定义 SLI：成功率、P95/P99 延迟、吞吐量。使用 Prometheus 的 histogram_quantile 函数计算百分位。",
            "基于历史数据（30 天）建立 SLO 基线：统计当前 P95 延迟和错误率，设定比现状略严格 10-20% 的目标值。",
            "在 Grafana 中创建 SLO 仪表板：显示当前 SLI 值、SLO 目标线、误差预算剩余百分比、预算消耗速率趋势。",
            "配置误差预算告警：当月度预算消耗超过 50% 时触发 Warning，超过 80% 时触发 Critical。",
            "为 CI/CD 流水线添加性能预算门禁：使用 Lighthouse CI 或 Webpack performance hints 在构建时检查资源大小和关键指标。",
            "设置发布关联标记：为每次部署打时间戳标签，在监控中标注发布事件，便于关联性能波动与代码变更。"
        ],
        selfCheck: [
            "P50、P95、P99 延迟分别代表什么？为什么 SLO 应基于 P95/P99 而非平均值？",
            "什么是误差预算（Error Budget）？如何用它来平衡功能开发与可靠性工作？",
            "Google SRE 推荐的 SLO 时间窗口是多长？为什么不用更短或更长的周期？",
            "冷启动和热路径请求的 SLO 应该如何区分设计？",
            "性能预算的 Warning 和 Error 两级分别起什么作用？",
            "如果一个服务有 5 个串行依赖，每个依赖的 P99 都是 50ms，整体 P99 大约是多少？",
            "什么情况下应该收紧 SLO 目标？什么情况下应该放宽？"
        ],
        extensions: [
            "阅读 Google SRE Workbook 完整的 Implementing SLOs 章节，了解 SLO 迭代优化和利益相关者对齐的详细流程。",
            "研究 OpenSLO 规范（openslo.com），了解如何用 YAML 声明式定义 SLO 并集成到 GitOps 流程。",
            "探索 Sloth（slok/sloth）工具，自动从 SLO 定义生成 Prometheus 告警规则和 Grafana 仪表板。",
            "学习 Core Web Vitals（LCP、INP、CLS）作为前端性能 SLI 的应用，了解 2024 年 INP 替代 FID 的变化。"
        ],
        sourceUrls: [
            "https://sre.google/workbook/implementing-slos/",
            "https://developer.mozilla.org/en-US/docs/Web/Performance/Performance_budgets",
            "https://roadmap.sh/backend-performance-best-practices",
            "https://aerospike.com/blog/what-is-p99-latency/"
        ]
    },
    "bp-w1-2": {
        lessonId: "bp-w1-2",
        background: [
            "【OpenTelemetry 定位】官方定义：'an observability framework and toolkit designed to facilitate the generation, export, and collection of telemetry data'——OTel 是可观测性的标准化基础设施，不是后端存储，而是统一的采集和传输层。",
            "【三大信号】OpenTelemetry 标准化三类遥测数据：Traces（分布式请求追踪）、Metrics（定量测量）、Logs（文本事件记录）。三者通过 TraceId/SpanId 关联，形成完整的可观测性视图。",
            "【数据所有权】OpenTelemetry 核心原则：'You own the data that you generate. There's no vendor lock-in'——采用开放协议（OTLP）和语义约定，避免被特定厂商绑定。",
            "【RED 方法定义】Tom Wilkie 提出的微服务监控方法论：Rate（每秒请求数）、Errors（失败请求数）、Duration（请求耗时）。Grafana 文档指出：'RED is a good proxy to how happy your customers will be'。",
            "【RED vs USE】RED 方法关注用户体验（'how well is my service performing for users?'），USE 方法（Utilization/Saturation/Errors）关注基础设施资源。两者互补：RED 发现服务问题，USE 定位资源瓶颈。",
            "【结构化日志价值】Better Stack：结构化日志使用 JSON 等机器可读格式，'log data is organized into key-value pairs, making it easier to search, filter, and analyze'——非结构化日志无法支撑现代可观测性需求。"
        ],
        keyDifficulties: [
            "【三信号关联】OpenTelemetry Logging 规范定义三种关联维度：Temporal（时间戳同步）、Execution Context（TraceId/SpanId 直接关联）、Resource Origin（相同来源的资源标识）。缺少任一维度都会导致排查困难。",
            "【采样权衡】OpenTelemetry 指出采样是'one of the most effective ways to reduce the costs of observability without losing visibility'——但采样率过高增加成本，过低丢失关键信息。需根据流量模式动态调整。",
            "【Head vs Tail 采样】Head Sampling 在请求入口决策，简单高效但无法保证捕获所有错误；Tail Sampling 在 trace 完成后决策，可基于错误/延迟等属性采样，但需要更多内存和状态管理。",
            "【高流量采样策略】OpenTelemetry 建议：生成 1000+ traces/秒时考虑采样。对健康流量用概率采样降低成本，对错误和高延迟 trace 强制保留。采样后生成 metrics 会导致指标失真。",
            "【Trace Context 传播】日志需注入 TraceId/SpanId 才能与 trace 关联。OpenTelemetry 规范支持自动注入，但遗留系统可能需要手动从请求头提取并添加到日志字段。"
        ],
        handsOnPath: [
            "为关键服务集成 OpenTelemetry SDK：安装语言对应的 instrumentation 库，配置 OTLP exporter 将数据发送到 Collector。",
            "部署 OpenTelemetry Collector：配置 receivers（OTLP、Prometheus）、processors（batch、memory_limiter）、exporters（Jaeger、Prometheus）。",
            "配置结构化日志：使用 JSON 格式输出，确保每条日志包含 trace_id、span_id、service_name、timestamp 字段。",
            "实现 RED 指标采集：为每个服务端点配置 http_server_requests_seconds_count（Rate）、http_server_errors_total（Errors）、http_server_requests_seconds_bucket（Duration histogram）。",
            "创建 Grafana RED 仪表板：显示 QPS、错误率、P50/P95/P99 延迟，按服务和端点分组，添加 SLO 目标线。",
            "配置采样策略：对低风险高流量端点（如健康检查）使用 1% 概率采样，对关键业务路径全量采样，对错误 trace 强制保留。",
            "验证三信号关联：从 Jaeger trace 详情页跳转到对应的日志，确认 TraceId 能正确串联请求全链路。"
        ],
        selfCheck: [
            "OpenTelemetry 的三大遥测信号是什么？它们如何相互关联？",
            "RED 方法中的 R、E、D 分别指什么？它与 USE 方法有何不同？",
            "为什么 OpenTelemetry 强调'数据所有权'和避免厂商锁定？",
            "什么是 Head Sampling 和 Tail Sampling？各自的优缺点是什么？",
            "什么情况下应该考虑使用采样？采样可能带来什么问题？",
            "结构化日志相比非结构化日志有哪些优势？应该包含哪些关键字段？",
            "如何确保日志能与 trace 正确关联？需要传播哪些上下文信息？"
        ],
        extensions: [
            "深入学习 OpenTelemetry Collector 的 Tail Sampling Processor 配置，实现基于 latency、error、attribute 的组合采样策略。",
            "研究 OpenTelemetry 语义约定（Semantic Conventions），了解标准化的 attribute 命名如 http.method、http.status_code、db.system 等。",
            "探索 Grafana Tempo + Loki 的 trace-to-logs 集成，实现从 trace span 直接跳转到对应时间窗口的日志。",
            "学习 eBPF 自动 instrumentation（如 Pixie、Odigos），无需修改代码即可获取内核级可观测性数据。"
        ],
        sourceUrls: [
            "https://opentelemetry.io/docs/concepts/what-is-opentelemetry/",
            "https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/",
            "https://opentelemetry.io/docs/concepts/sampling/",
            "https://betterstack.com/community/guides/logging/structured-logging/",
            "https://opentelemetry.io/docs/specs/otel/logs/"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w1-1": [
        {
            id: "bp-w1-1-q1",
            question: "Google SRE Workbook 对 SLO 核心价值的描述是什么？",
            options: [
                "SLOs are optional guidelines for service quality",
                "SLOs are key to making data-driven decisions about reliability",
                "SLOs only matter for external customer-facing services",
                "SLOs should always be set to 100% availability"
            ],
            answer: 1,
            rationale: "Google SRE Workbook 明确指出：'SLOs are key to making data-driven decisions about reliability, they're at the core of SRE practices'——SLO 是可靠性决策的数据基础。"
        },
        {
            id: "bp-w1-1-q2",
            question: "根据 Google SRE Workbook，SLI 的推荐计算方式是什么？",
            options: [
                "所有请求的平均响应时间",
                "服务器 CPU 使用率的峰值",
                "good events / total events 的比率",
                "每分钟的错误数量"
            ],
            answer: 2,
            rationale: "Google SRE Workbook 推荐：'the ratio of two numbers: the number of good events divided by the total number of events'——SLI 采用成功事件占比的形式。"
        },
        {
            id: "bp-w1-1-q3",
            question: "为什么 Google SRE 不建议追求 100% 可靠性目标？",
            options: [
                "因为 100% 太容易达到，没有挑战性",
                "因为 100% 可靠性意味着永远无法更新或改进服务",
                "因为用户不关心可靠性",
                "因为硬件无法支持 100% 可靠性"
            ],
            answer: 1,
            rationale: "Google SRE Workbook 指出：'If you do manage to create an experience that is 100% reliable...you can never update or improve your service'——100% 可靠性会阻止任何变更。"
        },
        {
            id: "bp-w1-1-q4",
            question: "P99 延迟（第 99 百分位延迟）意味着什么？",
            options: [
                "99% 的服务器响应时间低于此值",
                "99% 的请求在此时间内完成，只有最慢的 1% 超过此值",
                "服务平均响应时间的 99 倍",
                "在 99 秒内完成的请求比例"
            ],
            answer: 1,
            rationale: "P99 延迟表示第 99 百分位响应时间：'99% of requests complete within X time, only the slowest 1% exceed this'——捕捉分布中的尾部延迟。"
        },
        {
            id: "bp-w1-1-q5",
            question: "为什么 P99 比平均延迟更适合作为 SLI？",
            options: [
                "P99 计算更简单",
                "平均延迟会被少数离群值扭曲，无法反映真实用户体验",
                "P99 总是比平均值大",
                "监控工具只支持 P99"
            ],
            answer: 1,
            rationale: "平均值会被少数缓慢离群值扭曲，无法代表实际用户体验。P99 捕捉'正常操作下的最坏情况'，能揭示 GC 暂停、缓存未命中等间歇性瓶颈。"
        },
        {
            id: "bp-w1-1-q6",
            question: "MDN 对性能预算（Performance Budget）的定义是什么？",
            options: [
                "用于购买性能监控工具的资金预算",
                "开发团队可以投入性能优化的时间预算",
                "A limit set to prevent regressions——防止性能退化的硬性约束",
                "服务器硬件升级的预算"
            ],
            answer: 2,
            rationale: "MDN 定义：'A performance budget is a limit set to prevent regressions'——性能预算是防止性能退化的硬性约束，可应用于文件大小、加载时间等指标。"
        },
        {
            id: "bp-w1-1-q7",
            question: "MDN 建议性能预算应该包含几个级别？",
            options: [
                "只需要一个 Error 级别",
                "Warning 和 Error 两个级别",
                "Low、Medium、High、Critical 四个级别",
                "不需要分级，只需要一个阈值"
            ],
            answer: 1,
            rationale: "MDN 建议：'A performance budget should include 2 levels'——Warning 允许提前规划技术债务，Error 是不可逾越的上限。"
        },
        {
            id: "bp-w1-1-q8",
            question: "Google SRE 推荐的 SLO 评估时间窗口是多长？",
            options: [
                "24 小时滚动窗口",
                "1 周滚动窗口",
                "4 周滚动窗口（a four-week rolling window）",
                "1 年固定窗口"
            ],
            answer: 2,
            rationale: "Google SRE Workbook 推荐：'a four-week rolling window'作为通用 SLO 周期，配合每周任务优先级评审和季度战略复盘。"
        },
        {
            id: "bp-w1-1-q9",
            question: "如果一个服务的 SLO 是 99.9%，那么每月的误差预算（可用故障时间）大约是多少？",
            options: [
                "约 4.3 分钟",
                "约 43 分钟",
                "约 7 小时",
                "约 1 天"
            ],
            answer: 1,
            rationale: "误差预算 = 100% - SLO。99.9% SLO 意味着 0.1% 的故障时间允许。30 天 × 24 小时 × 60 分钟 × 0.001 ≈ 43 分钟/月。"
        },
        {
            id: "bp-w1-1-q10",
            question: "在分布式系统中，如果 5 个串行服务各自的 P99 都是 50ms，整体 P99 大约是多少？",
            options: [
                "50ms（取最大值）",
                "250ms（简单相加）",
                "约 60ms（考虑复合效应）",
                "10ms（取平均值）"
            ],
            answer: 1,
            rationale: "串行调用时延迟会叠加。5 个服务各 50ms，整体 P99 约为 250ms（各服务延迟累加）。这是分布式系统需要更严格单服务 SLO 的原因。"
        },
        {
            id: "bp-w1-1-q11",
            question: "MDN 推荐的默认性能基线是什么？",
            options: [
                "页面加载时间小于 1 秒",
                "Time to Interactive < 5 秒（3G/4G），后续加载 < 2 秒",
                "首字节时间小于 100ms",
                "JavaScript 包大小小于 100KB"
            ],
            answer: 1,
            rationale: "MDN 推荐：'A default baseline to reduce bounce rate is to achieve Time to Interactive under 5 seconds in 3G/4G, and under 2 seconds for subsequent loads'。"
        },
        {
            id: "bp-w1-1-q12",
            question: "什么是冷启动与热路径的区别，为什么在设置 SLO 时需要区分？",
            options: [
                "冷启动指服务器重启，热路径指正常运行，无需区分",
                "冷启动指首次请求/JIT 编译/缓存填充，性能与热路径差异显著，需分别设置 SLO",
                "冷启动指低 CPU 使用率，热路径指高 CPU 使用率",
                "两者完全相同，不需要区分"
            ],
            answer: 1,
            rationale: "冷启动（首次请求、JIT 编译、缓存填充）与热路径性能差异显著。SLO 需区分场景，否则冷启动会拉高整体 P99，导致目标设置不合理。"
        }
    ],
    "bp-w1-2": [
        {
            id: "bp-w1-2-q1",
            question: "OpenTelemetry 官方对其定位的描述是什么？",
            options: [
                "一个完整的可观测性后端存储系统",
                "An observability framework and toolkit for telemetry data generation and collection",
                "一个日志分析平台",
                "一个性能测试工具"
            ],
            answer: 1,
            rationale: "OpenTelemetry 官方定义：'an observability framework and toolkit designed to facilitate the generation, export, and collection of telemetry data'——是采集和传输层，不是后端存储。"
        },
        {
            id: "bp-w1-2-q2",
            question: "OpenTelemetry 标准化的三大遥测信号是什么？",
            options: [
                "CPU、内存、磁盘",
                "Traces、Metrics、Logs",
                "Errors、Warnings、Info",
                "Request、Response、Session"
            ],
            answer: 1,
            rationale: "OpenTelemetry 标准化三类遥测数据：Traces（分布式请求追踪）、Metrics（定量测量）、Logs（文本事件记录）。三者通过 TraceId/SpanId 关联。"
        },
        {
            id: "bp-w1-2-q3",
            question: "OpenTelemetry 关于数据所有权的核心原则是什么？",
            options: [
                "数据必须存储在云服务商的平台上",
                "You own the data that you generate. There's no vendor lock-in",
                "数据应该由 OpenTelemetry 基金会管理",
                "数据只能使用特定格式存储"
            ],
            answer: 1,
            rationale: "OpenTelemetry 核心原则：'You own the data that you generate. There's no vendor lock-in'——采用开放协议（OTLP）避免被特定厂商绑定。"
        },
        {
            id: "bp-w1-2-q4",
            question: "RED 方法中的三个核心指标分别是什么？",
            options: [
                "Reliability、Efficiency、Durability",
                "Rate、Errors、Duration",
                "Request、Exception、Data",
                "Response、Error、Delay"
            ],
            answer: 1,
            rationale: "RED 方法的三个核心指标：Rate（每秒请求数）、Errors（失败请求数）、Duration（请求耗时）。"
        },
        {
            id: "bp-w1-2-q5",
            question: "Tom Wilkie 对 RED 方法与 USE 方法区别的描述是什么？",
            options: [
                "RED 和 USE 完全相同，只是名称不同",
                "RED 关注用户体验，USE 关注机器资源",
                "RED 用于前端，USE 用于后端",
                "RED 更简单，USE 更复杂"
            ],
            answer: 1,
            rationale: "Tom Wilkie 解释：'The RED Method is about caring about your users and how happy they are, and the USE Method is about caring about your machines'——RED 面向用户，USE 面向资源。"
        },
        {
            id: "bp-w1-2-q6",
            question: "OpenTelemetry 对采样（Sampling）价值的描述是什么？",
            options: [
                "采样会导致数据丢失，应该避免使用",
                "采样是 one of the most effective ways to reduce costs without losing visibility",
                "采样只适用于小规模系统",
                "采样会降低数据质量"
            ],
            answer: 1,
            rationale: "OpenTelemetry 指出：'Sampling is one of the most effective ways to reduce the costs of observability without losing visibility'——采样是平衡成本和可见性的有效手段。"
        },
        {
            id: "bp-w1-2-q7",
            question: "Head Sampling 和 Tail Sampling 的主要区别是什么？",
            options: [
                "Head Sampling 更准确，Tail Sampling 更简单",
                "Head Sampling 在请求入口决策，Tail Sampling 在 trace 完成后基于完整信息决策",
                "Head Sampling 用于 logs，Tail Sampling 用于 traces",
                "两者完全相同"
            ],
            answer: 1,
            rationale: "Head Sampling 在请求入口做决策，简单高效但可能遗漏错误；Tail Sampling 在 trace 完成后基于错误/延迟等属性决策，但需要更多资源。"
        },
        {
            id: "bp-w1-2-q8",
            question: "OpenTelemetry 建议在什么情况下考虑使用采样？",
            options: [
                "任何情况下都应该使用采样",
                "只有在遇到错误时才使用采样",
                "当生成 1000+ traces/秒时，且大部分是健康流量",
                "只有大型企业才需要采样"
            ],
            answer: 2,
            rationale: "OpenTelemetry 建议：'Consider sampling if you generate 1000 or more traces per second, most of your trace data represents healthy traffic with little variation'。"
        },
        {
            id: "bp-w1-2-q9",
            question: "Better Stack 对结构化日志核心优势的描述是什么？",
            options: [
                "结构化日志占用更少存储空间",
                "log data is organized into key-value pairs, making it easier to search, filter, and analyze",
                "结构化日志更易于人类阅读",
                "结构化日志不需要特殊工具"
            ],
            answer: 1,
            rationale: "Better Stack 指出结构化日志的优势：'log data is organized into key-value pairs, making it easier to search, filter, and analyze'——便于机器解析和查询。"
        },
        {
            id: "bp-w1-2-q10",
            question: "OpenTelemetry Logging 规范定义的三种日志关联维度是什么？",
            options: [
                "Service、Method、Error",
                "Temporal、Execution Context、Resource Origin",
                "Input、Processing、Output",
                "Debug、Info、Error"
            ],
            answer: 1,
            rationale: "OpenTelemetry 规范定义三种关联维度：Temporal（时间戳同步）、Execution Context（TraceId/SpanId 关联）、Resource Origin（相同来源标识）。"
        },
        {
            id: "bp-w1-2-q11",
            question: "为什么采样后生成 metrics 可能会导致问题？",
            options: [
                "采样后的 metrics 会占用更多存储",
                "从采样数据生成 metrics 可能导致指标失真（misleading insights）",
                "采样和 metrics 完全无关",
                "采样后的 metrics 更准确"
            ],
            answer: 1,
            rationale: "OpenTelemetry 警告：'Generating metrics from poorly sampled data can lead to misleading insights'——应该在采样前生成 metrics，避免数据失真。"
        },
        {
            id: "bp-w1-2-q12",
            question: "Grafana 对 RED 方法价值的总结是什么？",
            options: [
                "RED 方法只适用于大型系统",
                "RED 方法已经过时，应该使用其他方法",
                "RED is a good proxy to how happy your customers will be",
                "RED 方法只关注错误率"
            ],
            answer: 2,
            rationale: "Grafana 文档指出：'The RED Method is a good proxy to how happy your customers will be'——高错误率和慢响应直接影响用户满意度。"
        }
    ]
}
