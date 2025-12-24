import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "bp-w6-1": {
        lessonId: "bp-w6-1",
        background: [
            "【k6 定位】Grafana k6 是'open-source, developer-friendly, and extensible load testing tool'——开源、开发者友好的负载测试工具，用于防止性能问题并提高可靠性。",
            "【Virtual Users (VUs)】k6 通过 VU 模拟并发用户执行测试脚本。k6 针对低资源消耗优化，能够在单机上模拟大量并发用户进行 spike、stress、soak 测试。",
            "【测试生命周期】k6 测试脚本包含 Init 阶段（设置）、VU 执行循环、Teardown 阶段。JavaScript 编写测试脚本，支持 Checks（断言）和 Thresholds（阈值）。",
            "【Locust 用户行为】Locust 使用 Python 编写负载测试脚本。User 类定义用户行为，@task 装饰器标记任务，wait_time 定义任务间等待时间，支持 between()、constant() 等策略。",
            "【任务权重】Locust 支持任务权重：@task(3) 使该任务被选中的概率是无权重任务的 3 倍。可以模拟真实用户的行为分布，如浏览商品页面的频率高于下单。",
            "【压测类型】常见压测类型：Smoke（冒烟，验证基本功能）、Load（负载，正常负载下性能）、Stress（压力，超出正常负载）、Spike（尖峰，突发流量）、Soak（浸泡，长时间运行）。"
        ],
        keyDifficulties: [
            "【VU 与 TPS 关系】VU 数量 = TPS × 平均响应时间。例如目标 100 TPS，平均响应 200ms，需要 20 个 VU。需要根据 Little's Law 验证测试配置合理性。",
            "【阈值设置】k6 的 Thresholds 定义通过/失败标准，如 http_req_duration 的 P95 < 500ms。阈值过严会导致测试频繁失败，过松则无法发现问题。",
            "【预热期处理】系统需要预热期（JIT 编译、连接池填充、缓存预热）。测试应包含 ramp-up 阶段，且预热期数据不计入最终结果。",
            "【分布式压测】单机压测可能成为瓶颈（网络带宽、CPU）。k6 支持分布式执行，Locust 支持 master-worker 模式分散负载。",
            "【环境隔离】压测不应在生产环境进行，应使用与生产配置相同的独立环境。测试数据应可重置，避免污染真实数据。"
        ],
        handsOnPath: [
            "编写 k6 测试脚本：定义 options（vus、duration、thresholds），使用 http.get/post 发送请求，添加 check() 验证响应。",
            "配置 Locust 测试：创建 HttpUser 子类，使用 @task 定义任务，设置 wait_time = between(1, 3)，运行 locust -f locustfile.py。",
            "实现阶梯式压测：使用 k6 的 stages 配置 ramp-up（如 2 分钟从 0 到 100 VU）、plateau（5 分钟维持）、ramp-down（1 分钟降到 0）。",
            "监控压测指标：使用 k6 的 --out influxdb 或 Locust 的 Web UI 实时监控 TPS、响应时间、错误率。",
            "验证测试配置：使用 Little's Law 计算预期 VU 数量，对比实际 TPS，如果差异大则检查测试工具或服务端瓶颈。",
            "分析压测报告：识别 P95/P99 延迟拐点，找出系统容量边界，记录安全容量（如 80% 峰值负载）用于扩容决策。"
        ],
        selfCheck: [
            "k6 和 Locust 在技术选型上有什么区别？各自的优势是什么？",
            "如何使用 Little's Law 验证压测配置的合理性？",
            "什么是 Smoke、Load、Stress、Spike、Soak 五种压测类型？各自的目的是什么？",
            "为什么压测需要预热期？如何处理预热期的数据？",
            "k6 的 Thresholds 如何定义？如何设置合理的阈值？",
            "分布式压测解决什么问题？k6 和 Locust 如何支持分布式？"
        ],
        extensions: [
            "学习 Gatling 负载测试工具，了解 Scala DSL 编写测试脚本的方式和性能特点。",
            "研究 AWS 的分布式负载测试方案，使用 ECS/Fargate 运行分布式 k6 或 Locust。",
            "探索 Continuous Performance Testing，将压测集成到 CI/CD 流水线中。",
            "学习混沌工程（Chaos Engineering）原则，使用 Chaos Monkey 等工具验证系统弹性。"
        ],
        sourceUrls: [
            "https://grafana.com/docs/k6/latest/",
            "https://docs.locust.io/en/stable/writing-a-locustfile.html"
        ]
    },
    "bp-w6-2": {
        lessonId: "bp-w6-2",
        background: [
            "【性能回归检测】将性能测试纳入 CI/CD 流水线，每次提交或发布前自动运行基准测试。对比历史基线，当 P95 延迟或错误率超过阈值时阻止发布。",
            "【错误预算守护】Google SRE：错误预算 = 100% - SLO。当月度预算消耗超过阈值（如 80%）时触发告警，暂停新功能发布，优先解决可靠性问题。",
            "【Canary Release】金丝雀发布：先将新版本部署到小比例流量（如 5%），监控关键指标，无异常后逐步扩大比例。发现问题可快速回滚，降低风险。",
            "【发布关联监控】为每次发布打标记（如 Git commit hash、版本号），在监控图表中标注发布事件。便于关联性能波动与代码变更，快速定位问题来源。",
            "【基线管理】维护性能基线数据：记录关键接口的 P50/P95/P99 延迟、吞吐量、错误率。新版本的测试结果与基线对比，超过阈值（如 +10%）则标记为回归。",
            "【自动化门禁】在 CI/CD 流水线中添加性能门禁：运行 k6/Locust 压测 → 收集指标 → 与阈值对比 → 通过则继续部署，失败则阻止并通知。"
        ],
        keyDifficulties: [
            "【基线漂移】系统演进导致基线需要定期更新。应区分有意的性能变化（如新功能）和意外回归。可以使用滑动窗口基线或手动确认更新。",
            "【环境差异】CI 环境与生产环境可能有差异（硬件、网络、数据量）。需要在标准化环境中运行压测，或使用相对指标而非绝对值。",
            "【测试稳定性】压测结果可能有波动（噪音）。应多次运行取平均值，设置合理的波动容忍范围（如 ±5%），避免误报。",
            "【Canary 指标选择】Canary 监控应包含业务指标（转化率、错误率）和技术指标（延迟、CPU）。纯技术指标可能遗漏业务问题。",
            "【回滚策略】自动化 Canary 需要定义回滚条件和操作。回滚应该足够快（秒级），并保留问题版本的日志和指标用于分析。"
        ],
        handsOnPath: [
            "配置 GitHub Actions + k6：使用 grafana/k6-action 在 PR 或发布时自动运行压测，失败时阻止合并。",
            "实现错误预算监控：计算月度错误预算消耗百分比，在 Grafana 中创建仪表板显示剩余预算和消耗速率。",
            "配置 Canary 发布：使用 Argo Rollouts 或 Flagger 实现自动化金丝雀部署，定义 Analysis 模板检查 Prometheus 指标。",
            "建立性能基线：运行基准测试收集关键接口的 P50/P95/P99 数据，存储到时序数据库（如 InfluxDB），设置告警规则。",
            "实现发布标记：使用 Grafana Annotations API 在每次发布时添加标记，包含版本号、commit hash、部署者信息。",
            "创建发布 Checklist：定义发布前检查项（压测通过、错误预算充足、关键告警静默），自动化执行或人工确认。"
        ],
        selfCheck: [
            "什么是性能回归检测？如何在 CI/CD 中实现自动化？",
            "错误预算（Error Budget）如何计算？预算耗尽时应该怎么做？",
            "什么是 Canary Release？相比直接全量发布有什么优势？",
            "为什么需要在监控图表中标记发布事件？如何实现？",
            "性能基线应该包含哪些指标？如何处理基线漂移？",
            "自动化 Canary 需要定义哪些回滚条件？"
        ],
        extensions: [
            "学习 Progressive Delivery 的完整流程，包括 Feature Flags、Canary、Blue-Green 的组合使用。",
            "研究 OpenTelemetry 与性能基线的集成，使用 trace 数据辅助回归分析。",
            "探索 AIOps 在性能异常检测中的应用，使用机器学习自动识别回归。",
            "学习 Site Reliability Engineering (SRE) 的完整实践框架，包括 SLO、Error Budget、Toil 管理。"
        ],
        sourceUrls: [
            "https://github.com/grafana/k6-action",
            "https://sre.google/sre-book/handling-overload/",
            "https://sre.google/sre-book/embracing-risk/"
        ]
    },
    "bp-w6-3": {
        lessonId: "bp-w6-3",
        background: [
            "【FinOps 定义】FinOps Foundation：FinOps 是'an evolving cloud financial management discipline and cultural practice'——一种云财务管理实践，让工程、财务和业务团队协作优化云成本。",
            "【单位经济指标】FinOps 的核心是单位成本指标（Unit Economics）：每请求成本、每用户成本、每交易成本。将技术指标与业务价值关联，便于决策者理解性能投资回报。",
            "【性能 ROI 计算】性能优化的 ROI = (成本节省 + 收入增加) / 优化投入。成本节省包括减少的 CPU/内存/存储费用；收入增加来自更好的用户体验带来的转化率提升。",
            "【Right-Sizing 策略】AWS、GCP 等云厂商提供 Right-Sizing 建议：根据实际资源使用情况推荐更合适的实例类型。过度配置（over-provisioning）是最常见的成本浪费来源。",
            "【预留实例与 Spot】预留实例（Reserved Instances）比按需定价便宜 30-75%；Spot/Preemptible 实例更便宜但可能被中断。稳定负载用预留，弹性负载用 Spot，组合使用最优化成本。",
            "【可观测性成本】监控和日志本身也产生成本。高基数指标（high-cardinality metrics）、全量日志、长期 trace 存储都很昂贵。需要采样、聚合、分层存储策略控制成本。"
        ],
        keyDifficulties: [
            "【性能与成本权衡】过度优化可能投入产出不成比例。'Premature optimization is the root of all evil'——需要先测量、识别瓶颈，优先优化 ROI 最高的部分。",
            "【成本归属（Showback/Chargeback）】将云成本归属到具体团队/服务是 FinOps 的基础。需要通过标签（Tags）策略、命名规范、成本分配规则实现。",
            "【Spot 实例容错】使用 Spot 实例需要应用具备容错能力：优雅终止处理、检查点机制、多可用区分布、混合使用按需和 Spot。",
            "【隐性成本识别】除直接资源费用外，还有数据传输费、API 调用费、存储 IOPS 费等隐性成本。跨区域/跨 AZ 数据传输尤其昂贵。",
            "【性能与碳排放】云服务的能效和碳排放也是考量因素。Green Software Foundation 提倡考虑代码的碳足迹，选择低碳区域部署，使用可再生能源驱动的数据中心。"
        ],
        handsOnPath: [
            "建立单位成本仪表板：计算 Cost per Request = 月度云成本 / 月度请求数；跟踪趋势和异常。",
            "配置云成本标签策略：定义标准标签如 team、service、environment、cost-center，确保 80%+ 资源有标签。",
            "分析 Right-Sizing 建议：使用 AWS Cost Explorer、GCP Recommender 或 Kubecost 识别过度配置的实例和 Pod。",
            "计算优化 ROI：记录优化前后的资源使用量和成本，计算节省金额与投入工时的比值。",
            "实施 Spot 策略：对无状态服务使用 Spot 实例，配置 Spot 中断处理（如 AWS Spot Instance Advisor、GKE Preemptible VMs）。",
            "优化可观测性成本：对高频低价值日志降采样、对指标设置合理保留期、使用 Thanos/Cortex 分层存储长期数据。"
        ],
        selfCheck: [
            "什么是 FinOps？它的核心目标是什么？",
            "如何计算性能优化的 ROI？需要考虑哪些因素？",
            "什么是单位成本指标（Unit Economics）？为什么它重要？",
            "Right-Sizing 解决什么问题？如何获取 Right-Sizing 建议？",
            "预留实例和 Spot 实例各适合什么场景？",
            "可观测性成本的主要来源有哪些？如何控制？"
        ],
        extensions: [
            "学习 FinOps Foundation 的 FinOps Framework，了解完整的云成本管理成熟度模型。",
            "研究 OpenCost 项目，了解 Kubernetes 成本监控的开源实现。",
            "探索 Green Software Foundation 的 Software Carbon Intensity (SCI) 规范，理解如何量化软件的碳排放。",
            "学习 AWS Cost Anomaly Detection 和 GCP Budgets Alerts，实现成本异常自动告警。"
        ],
        sourceUrls: [
            "https://www.finops.org/framework/",
            "https://aws.amazon.com/aws-cost-management/aws-cost-explorer/",
            "https://cloud.google.com/recommender/docs/recommenders",
            "https://www.kubecost.com/"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w6-1": [
        {
            id: "bp-w6-1-q1",
            question: "Grafana k6 的定位是什么？",
            options: [
                "一个代码编辑器",
                "Open-source, developer-friendly, and extensible load testing tool",
                "一个数据库管理工具",
                "一个监控平台"
            ],
            answer: 1,
            rationale: "Grafana k6 是'open-source, developer-friendly, and extensible load testing tool'——开源、开发者友好的负载测试工具。"
        },
        {
            id: "bp-w6-1-q2",
            question: "k6 中的 Virtual Users (VUs) 代表什么？",
            options: [
                "虚拟机数量",
                "模拟的并发用户，执行测试脚本",
                "CPU 核心数",
                "网络连接数"
            ],
            answer: 1,
            rationale: "k6 通过 VU 模拟并发用户执行测试脚本。VUs simulate concurrent users executing test scripts。"
        },
        {
            id: "bp-w6-1-q3",
            question: "根据 Little's Law，如果目标 100 TPS，平均响应时间 200ms，需要多少 VU？",
            options: [
                "10 VU",
                "20 VU（VU = TPS × 平均响应时间 = 100 × 0.2）",
                "50 VU",
                "100 VU"
            ],
            answer: 1,
            rationale: "根据 Little's Law：VU = TPS × 平均响应时间 = 100 × 0.2 = 20 VU。"
        },
        {
            id: "bp-w6-1-q4",
            question: "Locust 中 @task(3) 装饰器的含义是什么？",
            options: [
                "任务执行 3 次",
                "该任务被选中的概率是无权重任务的 3 倍",
                "任务等待 3 秒",
                "任务超时 3 秒"
            ],
            answer: 1,
            rationale: "Locust 文档：'@task(3) def view_items(self): ...' executes three times more frequently than unweighted tasks——权重 3 使概率是无权重任务的 3 倍。"
        },
        {
            id: "bp-w6-1-q5",
            question: "k6 的 Thresholds 功能用于什么？",
            options: [
                "定义测试持续时间",
                "定义通过/失败标准，如 P95 延迟低于某个值",
                "定义 VU 数量",
                "定义请求大小"
            ],
            answer: 1,
            rationale: "k6 的 Thresholds 定义通过/失败标准，如 http_req_duration 的 P95 < 500ms。支持自动化性能验证。"
        },
        {
            id: "bp-w6-1-q6",
            question: "Locust 的 wait_time = between(1, 5) 表示什么？",
            options: [
                "测试持续 1 到 5 分钟",
                "每个任务执行后等待 1 到 5 秒（随机）",
                "使用 1 到 5 个用户",
                "发送 1 到 5 个请求"
            ],
            answer: 1,
            rationale: "Locust 的 wait_time 定义任务间等待时间。between(1, 5) 表示每次任务后随机等待 1 到 5 秒。"
        },
        {
            id: "bp-w6-1-q7",
            question: "Smoke Test（冒烟测试）的目的是什么？",
            options: [
                "测试系统在高负载下的表现",
                "验证系统基本功能在最小负载下正常工作",
                "测试长时间运行的稳定性",
                "测试突发流量处理能力"
            ],
            answer: 1,
            rationale: "Smoke Test 使用最小负载验证系统基本功能正常工作，是其他压测的前提。如果 Smoke Test 失败，无需进行更复杂的测试。"
        },
        {
            id: "bp-w6-1-q8",
            question: "为什么压测需要预热期（warm-up period）？",
            options: [
                "减少测试时间",
                "系统需要时间完成 JIT 编译、连接池填充、缓存预热",
                "避免网络延迟",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "系统需要预热期完成 JIT 编译、连接池填充、缓存预热等初始化。预热期数据不应计入最终结果，否则会拉高延迟指标。"
        },
        {
            id: "bp-w6-1-q9",
            question: "Stress Test（压力测试）和 Load Test（负载测试）的区别是什么？",
            options: [
                "没有区别",
                "Load Test 测试正常负载，Stress Test 测试超出正常负载的极限",
                "Stress Test 时间更短",
                "Load Test 使用更多 VU"
            ],
            answer: 1,
            rationale: "Load Test 测试系统在正常预期负载下的性能，Stress Test 测试超出正常负载的极限，找出系统的容量边界和失效模式。"
        },
        {
            id: "bp-w6-1-q10",
            question: "分布式压测解决什么问题？",
            options: [
                "提高代码质量",
                "解决单机压测瓶颈（网络带宽、CPU 限制），生成更大负载",
                "减少测试时间",
                "简化测试脚本"
            ],
            answer: 1,
            rationale: "单机压测可能成为瓶颈（网络带宽、CPU）。分布式压测使用多台机器生成更大负载，k6 和 Locust 都支持分布式模式。"
        },
        {
            id: "bp-w6-1-q11",
            question: "Soak Test（浸泡测试）的目的是什么？",
            options: [
                "测试突发流量",
                "测试系统长时间运行的稳定性，发现内存泄漏等问题",
                "测试最大并发",
                "测试启动速度"
            ],
            answer: 1,
            rationale: "Soak Test 在较长时间内（数小时到数天）保持稳定负载，用于发现内存泄漏、连接泄漏、日志膨胀等长期运行问题。"
        },
        {
            id: "bp-w6-1-q12",
            question: "k6 使用什么语言编写测试脚本？",
            options: [
                "Python",
                "JavaScript",
                "Go",
                "Java"
            ],
            answer: 1,
            rationale: "k6 使用 JavaScript 编写测试脚本，支持 ES6 模块语法，对前端和全栈开发者友好。"
        }
    ],
    "bp-w6-2": [
        {
            id: "bp-w6-2-q1",
            question: "什么是性能回归检测？",
            options: [
                "手动测试系统性能",
                "在 CI/CD 中自动运行压测，对比历史基线，检测性能下降",
                "只在生产环境测试",
                "只测试新功能"
            ],
            answer: 1,
            rationale: "性能回归检测：将性能测试纳入 CI/CD，每次提交或发布前自动运行基准测试，对比历史基线，当指标超过阈值时阻止发布。"
        },
        {
            id: "bp-w6-2-q2",
            question: "根据 Google SRE，错误预算（Error Budget）如何计算？",
            options: [
                "Error Budget = SLO × 100",
                "Error Budget = 100% - SLO",
                "Error Budget = SLO / 100",
                "Error Budget = SLO + 100"
            ],
            answer: 1,
            rationale: "Google SRE：错误预算 = 100% - SLO。例如 SLO 是 99.9%，则每月有 0.1% 的时间允许故障，约 43 分钟。"
        },
        {
            id: "bp-w6-2-q3",
            question: "当错误预算耗尽时应该怎么做？",
            options: [
                "继续发布新功能",
                "暂停新功能发布，优先解决可靠性问题",
                "增加更多服务器",
                "忽略并继续"
            ],
            answer: 1,
            rationale: "Google SRE 建议：当月度预算消耗超过阈值时触发告警，暂停新功能发布，优先解决可靠性问题，恢复预算后再继续功能开发。"
        },
        {
            id: "bp-w6-2-q4",
            question: "什么是 Canary Release（金丝雀发布）？",
            options: [
                "直接全量发布",
                "先部署到小比例流量，监控无异常后逐步扩大",
                "只发布到开发环境",
                "回滚到旧版本"
            ],
            answer: 1,
            rationale: "金丝雀发布：先将新版本部署到小比例流量（如 5%），监控关键指标，无异常后逐步扩大比例。发现问题可快速回滚，降低风险。"
        },
        {
            id: "bp-w6-2-q5",
            question: "为什么需要在监控图表中标记发布事件？",
            options: [
                "美观",
                "便于关联性能波动与代码变更，快速定位问题来源",
                "节省存储空间",
                "提高查询速度"
            ],
            answer: 1,
            rationale: "为每次发布打标记，在监控图表中标注发布事件。便于关联性能波动与代码变更，快速定位问题来源。"
        },
        {
            id: "bp-w6-2-q6",
            question: "性能基线应该包含哪些指标？",
            options: [
                "只需要平均响应时间",
                "P50/P95/P99 延迟、吞吐量、错误率等关键指标",
                "只需要错误率",
                "只需要 CPU 使用率"
            ],
            answer: 1,
            rationale: "性能基线应包含关键接口的 P50/P95/P99 延迟、吞吐量、错误率。新版本的测试结果与基线对比，超过阈值则标记为回归。"
        },
        {
            id: "bp-w6-2-q7",
            question: "GitHub Actions + k6 的典型用法是什么？",
            options: [
                "只在本地运行",
                "在 PR 或发布时自动运行压测，失败时阻止合并",
                "只记录日志",
                "只发送通知"
            ],
            answer: 1,
            rationale: "使用 grafana/k6-action 在 PR 或发布时自动运行压测，失败时阻止合并，实现自动化性能门禁。"
        },
        {
            id: "bp-w6-2-q8",
            question: "如何处理性能基线漂移问题？",
            options: [
                "忽略基线",
                "区分有意的性能变化和意外回归，使用滑动窗口基线或手动确认更新",
                "每次都重新设置基线",
                "不使用基线"
            ],
            answer: 1,
            rationale: "系统演进导致基线需要定期更新。应区分有意的性能变化（如新功能）和意外回归，使用滑动窗口基线或手动确认更新。"
        },
        {
            id: "bp-w6-2-q9",
            question: "Canary 监控应该包含哪些类型的指标？",
            options: [
                "只需要技术指标",
                "业务指标（转化率、错误率）和技术指标（延迟、CPU）",
                "只需要 CPU 使用率",
                "只需要日志"
            ],
            answer: 1,
            rationale: "Canary 监控应包含业务指标（转化率、错误率）和技术指标（延迟、CPU）。纯技术指标可能遗漏业务问题。"
        },
        {
            id: "bp-w6-2-q10",
            question: "自动化 Canary 的回滚应该有什么特点？",
            options: [
                "手动操作",
                "足够快（秒级），并保留问题版本的日志和指标用于分析",
                "等待人工确认",
                "不需要回滚"
            ],
            answer: 1,
            rationale: "自动化 Canary 的回滚应该足够快（秒级），并保留问题版本的日志和指标用于分析。定义明确的回滚条件和操作。"
        },
        {
            id: "bp-w6-2-q11",
            question: "为什么 CI 环境的压测结果可能与生产不同？",
            options: [
                "CI 环境更稳定",
                "CI 环境与生产环境可能有差异（硬件、网络、数据量）",
                "CI 环境更快",
                "没有区别"
            ],
            answer: 1,
            rationale: "CI 环境与生产环境可能有差异（硬件、网络、数据量）。需要在标准化环境中运行压测，或使用相对指标而非绝对值。"
        },
        {
            id: "bp-w6-2-q12",
            question: "如何减少压测结果的噪音/波动？",
            options: [
                "只运行一次",
                "多次运行取平均值，设置合理的波动容忍范围（如 ±5%）",
                "使用更少的 VU",
                "减少测试时间"
            ],
            answer: 1,
            rationale: "压测结果可能有波动。应多次运行取平均值，设置合理的波动容忍范围（如 ±5%），避免误报导致发布阻塞。"
        }
    ],
    "bp-w6-3": [
        {
            id: "bp-w6-3-q1",
            question: "FinOps Foundation 对 FinOps 的定义是什么？",
            options: [
                "一种编程语言",
                "An evolving cloud financial management discipline and cultural practice",
                "一种监控工具",
                "一种数据库技术"
            ],
            answer: 1,
            rationale: "FinOps Foundation 定义 FinOps 是'an evolving cloud financial management discipline and cultural practice'——一种让工程、财务和业务团队协作优化云成本的实践。"
        },
        {
            id: "bp-w6-3-q2",
            question: "什么是单位成本指标（Unit Economics）？",
            options: [
                "总成本除以时间",
                "每请求成本、每用户成本、每交易成本等将技术指标与业务价值关联的指标",
                "CPU 使用率",
                "内存使用量"
            ],
            answer: 1,
            rationale: "单位成本指标包括每请求成本、每用户成本、每交易成本等。将技术指标与业务价值关联，便于决策者理解性能投资回报。"
        },
        {
            id: "bp-w6-3-q3",
            question: "性能优化 ROI 的计算公式是什么？",
            options: [
                "ROI = 成本 / 时间",
                "ROI = (成本节省 + 收入增加) / 优化投入",
                "ROI = 请求数 / 成本",
                "ROI = CPU 使用率 × 内存使用率"
            ],
            answer: 1,
            rationale: "性能优化的 ROI = (成本节省 + 收入增加) / 优化投入。成本节省包括减少的资源费用；收入增加来自更好的用户体验带来的转化率提升。"
        },
        {
            id: "bp-w6-3-q4",
            question: "Right-Sizing 解决什么问题？",
            options: [
                "代码质量问题",
                "过度配置（over-provisioning）导致的成本浪费",
                "安全漏洞",
                "网络延迟"
            ],
            answer: 1,
            rationale: "Right-Sizing 解决过度配置（over-provisioning）问题——根据实际资源使用情况推荐更合适的实例类型。过度配置是最常见的成本浪费来源。"
        },
        {
            id: "bp-w6-3-q5",
            question: "预留实例（Reserved Instances）相比按需定价可以节省多少？",
            options: [
                "5-10%",
                "30-75%",
                "90%以上",
                "没有区别"
            ],
            answer: 1,
            rationale: "预留实例比按需定价便宜 30-75%，适合稳定负载。Spot/Preemptible 实例更便宜但可能被中断，适合弹性负载。"
        },
        {
            id: "bp-w6-3-q6",
            question: "使用 Spot 实例需要应用具备什么能力？",
            options: [
                "高 CPU 性能",
                "容错能力（优雅终止处理、检查点机制、多 AZ 分布）",
                "高内存容量",
                "快速网络"
            ],
            answer: 1,
            rationale: "Spot 实例可能被中断，应用需要具备容错能力：优雅终止处理、检查点机制、多可用区分布、混合使用按需和 Spot。"
        },
        {
            id: "bp-w6-3-q7",
            question: "可观测性成本的主要来源有哪些？",
            options: [
                "只有存储成本",
                "高基数指标、全量日志、长期 trace 存储",
                "只有 CPU 成本",
                "只有网络成本"
            ],
            answer: 1,
            rationale: "可观测性成本来源：高基数指标（high-cardinality metrics）、全量日志、长期 trace 存储。需要采样、聚合、分层存储策略控制成本。"
        },
        {
            id: "bp-w6-3-q8",
            question: "成本归属（Showback/Chargeback）需要什么基础设施？",
            options: [
                "更多服务器",
                "标签（Tags）策略、命名规范、成本分配规则",
                "更大的数据库",
                "更快的网络"
            ],
            answer: 1,
            rationale: "将云成本归属到具体团队/服务需要通过标签（Tags）策略、命名规范、成本分配规则实现，这是 FinOps 的基础。"
        },
        {
            id: "bp-w6-3-q9",
            question: "除直接资源费用外，还有哪些隐性成本？",
            options: [
                "只有人力成本",
                "数据传输费、API 调用费、存储 IOPS 费等",
                "没有隐性成本",
                "只有电费"
            ],
            answer: 1,
            rationale: "除直接资源费用外，还有数据传输费、API 调用费、存储 IOPS 费等隐性成本。跨区域/跨 AZ 数据传输尤其昂贵。"
        },
        {
            id: "bp-w6-3-q10",
            question: "为什么说'Premature optimization is the root of all evil'？",
            options: [
                "优化总是有害的",
                "过度优化可能投入产出不成比例，需要先测量、识别瓶颈",
                "不需要优化",
                "优化会导致 bug"
            ],
            answer: 1,
            rationale: "过度优化可能投入产出不成比例。需要先测量、识别瓶颈，优先优化 ROI 最高的部分，避免在非瓶颈处浪费精力。"
        },
        {
            id: "bp-w6-3-q11",
            question: "云成本标签策略应该确保多少资源有标签？",
            options: [
                "50%",
                "80%以上",
                "100%",
                "不需要标签"
            ],
            answer: 1,
            rationale: "标签策略应确保 80%+ 资源有标签（如 team、service、environment、cost-center），便于成本归属和分析。"
        },
        {
            id: "bp-w6-3-q12",
            question: "Green Software Foundation 提倡考虑什么因素？",
            options: [
                "代码行数",
                "代码的碳足迹、低碳区域部署、可再生能源数据中心",
                "代码复杂度",
                "代码风格"
            ],
            answer: 1,
            rationale: "Green Software Foundation 提倡考虑代码的碳足迹，选择低碳区域部署，使用可再生能源驱动的数据中心，关注软件的环境影响。"
        }
    ]
}
