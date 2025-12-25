import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week17Guides: Record<string, LessonGuide> = {
    "bp-w17-1": {
        lessonId: "bp-w17-1",
        background: [
            "【性能建模目的】通过数学模型预测系统在不同负载下的行为，指导容量规划、性能优化、架构决策。",
            "【排队论基础】系统可以建模为排队网络：请求到达 → 排队等待 → 服务处理 → 离开。Little's Law: L = λW（队列长度 = 到达率 × 等待时间）。",
            "【USL 通用可扩展性定律】Universal Scalability Law 建模系统随资源增加的扩展性：竞争（Contention）和相干性（Coherency）延迟导致性能不线性增长。",
            "【Amdahl 定律】加速比受串行部分限制：Speedup = 1 / (S + P/N)，其中 S 是串行比例，P 是并行比例，N 是处理器数。",
            "【服务时间分解】响应时间 = 排队时间 + 服务时间。在高负载下排队时间主导，识别瓶颈资源是关键。",
            "【M/M/1 队列模型】到达和服务都是泊松分布的单服务器队列。平均响应时间 = 服务时间 / (1 - 利用率)。利用率接近 100% 时延迟急剧上升。"
        ],
        keyDifficulties: [
            "【模型假设与现实差距】排队论假设（泊松到达、指数服务时间）与现实流量模式可能有差异。需要验证假设或使用仿真。",
            "【多瓶颈分析】真实系统有多个潜在瓶颈（CPU、内存、I/O、网络）。需要识别主要瓶颈，其他资源可能影响模型准确性。",
            "【USL 参数拟合】USL 需要通过实测数据拟合 σ（竞争）和 κ（相干性）参数。参数解释需要理解系统架构。",
            "【动态负载特征】流量有突发性和周期性。静态模型可能低估峰值需求。需要考虑流量分布的尾部。",
            "【验证与校准】模型需要与实际测量对比验证。偏差大时需要检查假设或补充因素。"
        ],
        handsOnPath: [
            "计算 Little's Law：测量系统的并发请求数 L 和响应时间 W，验证 L = λW。",
            "分析利用率与延迟关系：绘制不同负载下的延迟曲线，观察排队效应。",
            "USL 参数拟合：使用不同并发度的压测数据，拟合 USL 模型预测最大吞吐量。",
            "识别瓶颈资源：使用 USE 方法（Utilization、Saturation、Errors）分析各资源。",
            "建立容量模型：基于当前负载和增长预测，估算需要的资源增量。",
            "仿真复杂场景：使用 SimPy 或专业工具仿真多服务队列网络。",
            "验证模型准确性：对比模型预测与实际压测结果，调整参数。"
        ],
        selfCheck: [
            "Little's Law 是什么？如何应用？",
            "为什么利用率接近 100% 时延迟会急剧上升？",
            "USL 模型的两个关键参数是什么？代表什么？",
            "Amdahl 定律对并行扩展有什么启示？",
            "如何识别系统的主要瓶颈？",
            "性能模型的常见假设有哪些？如何验证？"
        ],
        extensions: [
            "学习 Neil Gunther 的 USL 原始论文和工具。",
            "研究网络演算（Network Calculus）在实时系统中的应用。",
            "探索使用机器学习进行性能预测。",
            "学习 Queuing Network 仿真工具如 JMT。"
        ],
        sourceUrls: [
            "http://www.perfdynamics.com/Manifesto/USLscalability.html",
            "https://www.brendangregg.com/usemethod.html",
            "https://blog.danslimmon.com/2016/08/26/littles-law-isnt-about-queues/",
            "https://en.wikipedia.org/wiki/Amdahl%27s_law"
        ]
    },
    "bp-w17-2": {
        lessonId: "bp-w17-2",
        background: [
            "【容量规划定义】预测未来资源需求，确保系统能够满足预期负载，同时优化成本。是 SRE 的核心职责之一。",
            "【需求预测方法】历史趋势外推、业务增长预测、季节性分析、事件驱动预测（如促销）。多种方法结合提高准确性。",
            "【资源维度】CPU、内存、存储、网络、数据库连接、外部 API 配额。每个维度需要独立规划。",
            "【安全余量】不能按 100% 利用率规划。通常保留 20-30% 余量应对突发和误差。考虑最坏情况。",
            "【弹性资源策略】云环境下可以使用自动扩缩容。但仍需规划基础容量和扩容上限。",
            "【成本与性能权衡】更多容量意味着更高成本。需要根据业务 SLO 找到合适的平衡点。"
        ],
        keyDifficulties: [
            "【预测不确定性】业务增长难以准确预测。使用多种场景（乐观、悲观、中性）规划，定期修正。",
            "【依赖服务容量】系统容量受外部依赖限制（如数据库、第三方 API）。需要协调规划。",
            "【非线性扩展】某些组件（如数据库主节点）难以水平扩展。需要提前规划升级或架构优化。",
            "【成本控制压力】过度预留容量增加成本，不足则影响服务。需要平衡安全性和经济性。",
            "【数据质量】容量规划依赖准确的监控数据。数据缺失或不准确会导致错误决策。"
        ],
        handsOnPath: [
            "收集容量指标：配置 Prometheus 采集 CPU、内存、QPS、延迟等关键指标的历史数据。",
            "分析增长趋势：使用时间序列分析识别增长率和季节性模式。",
            "建立容量模型：将业务指标（如用户数、订单数）与资源消耗建立关系。",
            "预测资源需求：基于业务预测估算未来 3-12 个月的资源需求。",
            "制定扩容计划：规划扩容时间点、方式（垂直/水平）、成本预算。",
            "设置容量告警：配置利用率告警，提前预警接近容量上限。",
            "建立容量评审机制：定期回顾预测准确性，调整模型和计划。"
        ],
        selfCheck: [
            "容量规划需要考虑哪些资源维度？",
            "如何处理预测的不确定性？",
            "安全余量应该如何设置？",
            "非线性扩展的组件如何规划容量？",
            "容量规划与成本如何平衡？",
            "如何验证容量预测的准确性？"
        ],
        extensions: [
            "学习 Google SRE 的容量规划实践。",
            "研究时间序列预测方法（ARIMA、Prophet）。",
            "探索自动化容量规划工具。",
            "学习 FinOps 中的容量预留优化。"
        ],
        sourceUrls: [
            "https://sre.google/sre-book/software-engineering-in-sre/",
            "https://facebook.github.io/prophet/",
            "https://aws.amazon.com/solutions/implementations/instance-scheduler/",
            "https://www.finops.org/framework/capabilities/workload-management/"
        ]
    },
    "bp-w17-3": {
        lessonId: "bp-w17-3",
        background: [
            "【全栈性能定义】从用户设备到后端服务的端到端性能。前端和后端性能同等重要，用户感知的是整体延迟。",
            "【Core Web Vitals】Google 定义的用户体验核心指标：LCP（最大内容绘制）、INP（交互延迟）、CLS（布局偏移）。影响 SEO 排名。",
            "【关键渲染路径】浏览器加载和渲染页面的步骤：HTML → CSS → JavaScript → 渲染。阻塞资源影响首屏时间。",
            "【前后端协作】前端性能依赖后端 API 性能。API 设计应考虑前端使用场景，减少请求数和数据量。",
            "【性能预算】为各阶段设置时间预算：网络传输、服务器处理、渲染、交互。超预算需要优化。",
            "【合成监控与 RUM】合成监控使用模拟用户测试；RUM（Real User Monitoring）收集真实用户数据。两者互补。"
        ],
        keyDifficulties: [
            "【前后端性能归因】用户感知的延迟由多个因素构成。需要端到端追踪准确归因，避免相互推诿。",
            "【第三方脚本影响】广告、分析、社交插件等第三方脚本可能严重影响性能。需要评估和控制。",
            "【设备和网络多样性】用户设备性能和网络条件差异巨大。需要测试低端设备和慢网络场景。",
            "【API 设计对前端的影响】过度 API 调用、大响应体、缺乏聚合接口都影响前端性能。需要前后端协作优化。",
            "【持续监控与回归】性能容易随功能迭代退化。需要 CI/CD 集成性能测试，防止回归。"
        ],
        handsOnPath: [
            "测量 Core Web Vitals：使用 Lighthouse、PageSpeed Insights 或 web-vitals 库测量 LCP、INP、CLS。",
            "分析关键渲染路径：使用 Chrome DevTools Performance 面板分析阻塞资源和渲染瀑布。",
            "优化资源加载：实现代码分割、懒加载、预加载关键资源、优化图片。",
            "配置 RUM：集成 RUM 工具（如 Sentry Performance、Datadog RUM）收集真实用户性能数据。",
            "设置性能预算：在 CI 中配置 Lighthouse CI，设置性能阈值阻止回归。",
            "优化 API 设计：合并细碎 API、使用 GraphQL 按需获取、添加响应压缩。",
            "测试低端场景：使用 Chrome DevTools 模拟 3G 网络和低端 CPU，测试性能表现。"
        ],
        selfCheck: [
            "Core Web Vitals 包含哪些指标？各代表什么？",
            "关键渲染路径有哪些阶段？如何优化？",
            "合成监控和 RUM 有什么区别？各有什么优势？",
            "第三方脚本如何影响性能？如何控制？",
            "API 设计如何影响前端性能？",
            "如何在 CI/CD 中防止性能回归？"
        ],
        extensions: [
            "学习 HTTP/3 和 QUIC 对前端性能的影响。",
            "研究 Streaming SSR 和 Server Components。",
            "探索 Edge-side Includes (ESI) 实现边缘个性化。",
            "学习使用 WebPageTest 进行深度性能分析。"
        ],
        sourceUrls: [
            "https://web.dev/vitals/",
            "https://developer.chrome.com/docs/lighthouse/overview/",
            "https://developer.chrome.com/docs/devtools/performance/",
            "https://www.webpagetest.org/"
        ]
    }
}

export const week17Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w17-1": [
        {
            id: "bp-w17-1-q1",
            question: "Little's Law 是什么？",
            options: [
                "计算机定律",
                "L = λW，队列中平均请求数 = 到达率 × 平均等待时间",
                "网络定律",
                "存储定律"
            ],
            answer: 1,
            rationale: "Little's Law 是排队论基本定律：系统中平均请求数 = 请求到达率 × 平均响应时间。"
        },
        {
            id: "bp-w17-1-q2",
            question: "为什么利用率接近 100% 时延迟急剧上升？",
            options: [
                "CPU 过热",
                "排队时间随利用率指数增长，M/M/1 队列延迟 = 服务时间/(1-利用率)",
                "内存不足",
                "网络拥塞"
            ],
            answer: 1,
            rationale: "根据排队论，当利用率 ρ 接近 1 时，等待时间趋近无穷大。通常利用率应保持在 70-80% 以下。"
        },
        {
            id: "bp-w17-1-q3",
            question: "USL 模型的两个关键参数是什么？",
            options: [
                "CPU 和内存",
                "σ（竞争/串行化）和 κ（相干性开销）",
                "带宽和延迟",
                "吞吐量和响应时间"
            ],
            answer: 1,
            rationale: "USL 的 σ 参数表示资源竞争导致的串行化，κ 参数表示数据一致性导致的相干性开销。"
        },
        {
            id: "bp-w17-1-q4",
            question: "Amdahl 定律对并行扩展有什么启示？",
            options: [
                "无限扩展",
                "加速比受串行部分限制，串行比例决定扩展上限",
                "线性扩展",
                "只与 CPU 数量有关"
            ],
            answer: 1,
            rationale: "Amdahl 定律表明，如果程序有 10% 必须串行执行，即使无限并行化加速比也不超过 10 倍。"
        },
        {
            id: "bp-w17-1-q5",
            question: "如何识别系统的主要瓶颈？",
            options: [
                "随机猜测",
                "使用 USE 方法分析各资源的利用率、饱和度和错误",
                "只看 CPU",
                "只看内存"
            ],
            answer: 1,
            rationale: "USE 方法系统地检查每个资源的 Utilization、Saturation、Errors，找出瓶颈资源。"
        },
        {
            id: "bp-w17-1-q6",
            question: "排队论模型有什么常见假设？",
            options: [
                "无假设",
                "泊松到达、指数服务时间、无限队列等",
                "只假设 CPU",
                "只假设内存"
            ],
            answer: 1,
            rationale: "经典排队论假设请求按泊松过程到达、服务时间指数分布等，现实可能有差异需要验证。"
        },
        {
            id: "bp-w17-1-q7",
            question: "M/M/1 队列的含义是什么？",
            options: [
                "多服务器队列",
                "泊松到达、指数服务、单服务器的队列模型",
                "有限队列",
                "优先级队列"
            ],
            answer: 1,
            rationale: "M/M/1：M=Markovian（泊松/指数）到达，M=指数服务时间，1=单服务器。是最基础的队列模型。"
        },
        {
            id: "bp-w17-1-q8",
            question: "如何验证性能模型的准确性？",
            options: [
                "不需要验证",
                "对比模型预测与实际压测结果，分析偏差",
                "只看理论",
                "只看代码"
            ],
            answer: 1,
            rationale: "模型需要与实际测量对比验证。偏差大时检查假设、补充遗漏因素、调整参数。"
        },
        {
            id: "bp-w17-1-q9",
            question: "多瓶颈系统如何分析？",
            options: [
                "只分析一个",
                "识别主要瓶颈，解决后可能出现新瓶颈，迭代优化",
                "同时解决所有",
                "无法分析"
            ],
            answer: 1,
            rationale: "系统性能受最慢资源限制。解决当前瓶颈后，下一个最慢资源成为新瓶颈，需要迭代优化。"
        },
        {
            id: "bp-w17-1-q10",
            question: "USL 模型预测系统扩展性的最大吞吐量受什么限制？",
            options: [
                "只受 CPU 限制",
                "受竞争和相干性开销限制，存在最优并发度",
                "无限扩展",
                "只受内存限制"
            ],
            answer: 1,
            rationale: "USL 表明由于竞争和相干性开销，存在最优并发度，超过后吞吐量反而下降。"
        },
        {
            id: "bp-w17-1-q11",
            question: "响应时间的两个主要组成部分是什么？",
            options: [
                "CPU 和内存时间",
                "排队时间和服务时间",
                "网络和处理时间",
                "读和写时间"
            ],
            answer: 1,
            rationale: "响应时间 = 排队等待时间 + 实际服务时间。高负载下排队时间可能远大于服务时间。"
        },
        {
            id: "bp-w17-1-q12",
            question: "如何处理流量的突发性对模型的影响？",
            options: [
                "忽略突发",
                "使用流量分布的尾部分析，考虑峰值场景",
                "只看平均",
                "增加服务器"
            ],
            answer: 1,
            rationale: "流量有突发性，静态模型可能低估峰值需求。需要分析流量分布尾部，为峰值预留容量。"
        }
    ],
    "bp-w17-2": [
        {
            id: "bp-w17-2-q1",
            question: "容量规划需要考虑哪些资源维度？",
            options: [
                "只有 CPU",
                "CPU、内存、存储、网络、数据库连接、外部 API 配额等",
                "只有内存",
                "只有存储"
            ],
            answer: 1,
            rationale: "容量规划需要覆盖所有可能成为瓶颈的资源，任何一个不足都可能影响服务。"
        },
        {
            id: "bp-w17-2-q2",
            question: "如何处理预测的不确定性？",
            options: [
                "使用单一预测",
                "使用多种场景（乐观、悲观、中性）规划，定期修正",
                "不做预测",
                "只看历史"
            ],
            answer: 1,
            rationale: "预测有不确定性，应该准备多种场景的规划方案，定期根据实际情况调整。"
        },
        {
            id: "bp-w17-2-q3",
            question: "安全余量应该如何设置？",
            options: [
                "不需要余量",
                "通常保留 20-30% 应对突发和误差，根据业务关键性调整",
                "50% 以上",
                "100%"
            ],
            answer: 1,
            rationale: "不能按 100% 利用率规划，通常保留 20-30% 余量。关键业务可能需要更多余量。"
        },
        {
            id: "bp-w17-2-q4",
            question: "非线性扩展的组件如何规划容量？",
            options: [
                "与其他组件相同",
                "提前规划升级窗口、评估架构优化（如分片）、预留更多余量",
                "不规划",
                "只能等问题发生"
            ],
            answer: 1,
            rationale: "数据库主节点等难以水平扩展的组件需要提前规划，考虑垂直扩展或架构改造。"
        },
        {
            id: "bp-w17-2-q5",
            question: "容量规划与成本如何平衡？",
            options: [
                "只看成本",
                "根据业务 SLO 确定必要容量，使用弹性扩缩容优化非峰值成本",
                "只看性能",
                "无法平衡"
            ],
            answer: 1,
            rationale: "根据 SLO 确定基础容量保证服务质量，使用弹性扩缩容和预留实例优化成本。"
        },
        {
            id: "bp-w17-2-q6",
            question: "如何验证容量预测的准确性？",
            options: [
                "不需要验证",
                "定期对比预测与实际，分析偏差原因，调整模型",
                "只看结果",
                "一次性验证"
            ],
            answer: 1,
            rationale: "建立容量评审机制，定期对比预测与实际使用情况，分析偏差原因改进模型。"
        },
        {
            id: "bp-w17-2-q7",
            question: "依赖服务容量如何规划？",
            options: [
                "不考虑依赖",
                "与依赖服务团队协调规划，确保上下游容量匹配",
                "只看自己的服务",
                "假设无限容量"
            ],
            answer: 1,
            rationale: "系统容量受外部依赖限制。需要与依赖服务的团队协调，确保整体容量匹配。"
        },
        {
            id: "bp-w17-2-q8",
            question: "需求预测有哪些方法？",
            options: [
                "只能猜测",
                "历史趋势外推、业务增长预测、季节性分析、事件驱动预测",
                "只看历史",
                "只问业务"
            ],
            answer: 1,
            rationale: "多种方法结合提高准确性：历史数据分析、业务增长计划、季节模式、大促活动等。"
        },
        {
            id: "bp-w17-2-q9",
            question: "Prophet 时间序列预测工具的特点是什么？",
            options: [
                "只能预测股票",
                "Facebook 开源，自动处理季节性、假日效应、趋势变化",
                "只能用于日志",
                "不能用于容量规划"
            ],
            answer: 1,
            rationale: "Prophet 是 Facebook 开源的时间序列预测工具，能自动识别季节性和趋势，适合容量预测。"
        },
        {
            id: "bp-w17-2-q10",
            question: "容量告警应该如何设置？",
            options: [
                "只在 100% 时告警",
                "在接近容量上限（如 70-80%）时提前预警",
                "不需要告警",
                "每分钟告警"
            ],
            answer: 1,
            rationale: "应该在利用率达到阈值（如 70-80%）时提前告警，留出时间扩容或优化。"
        },
        {
            id: "bp-w17-2-q11",
            question: "弹性扩缩容能否完全替代容量规划？",
            options: [
                "可以完全替代",
                "不能，仍需规划基础容量、扩容上限和预算",
                "只需要自动扩容",
                "不需要任何规划"
            ],
            answer: 1,
            rationale: "弹性扩缩容有响应延迟和上限。仍需规划基础容量、最大扩容能力、成本预算。"
        },
        {
            id: "bp-w17-2-q12",
            question: "数据质量对容量规划有什么影响？",
            options: [
                "无影响",
                "监控数据不准确会导致错误的容量决策",
                "只影响报表",
                "只影响告警"
            ],
            answer: 1,
            rationale: "容量规划依赖准确的监控数据。数据缺失、采样偏差、指标定义不清都会导致错误决策。"
        }
    ],
    "bp-w17-3": [
        {
            id: "bp-w17-3-q1",
            question: "Core Web Vitals 包含哪些指标？",
            options: [
                "只有加载时间",
                "LCP（最大内容绘制）、INP（交互延迟）、CLS（布局偏移）",
                "只有 FPS",
                "只有带宽"
            ],
            answer: 1,
            rationale: "Core Web Vitals 是 Google 定义的用户体验核心指标：LCP、INP（替代 FID）、CLS。"
        },
        {
            id: "bp-w17-3-q2",
            question: "关键渲染路径有哪些阶段？",
            options: [
                "只有下载",
                "HTML 解析 → CSS 解析 → JavaScript 执行 → 布局 → 绘制",
                "只有渲染",
                "只有执行"
            ],
            answer: 1,
            rationale: "关键渲染路径：HTML → DOM 构建 → CSS → CSSOM → 渲染树 → 布局 → 绘制。"
        },
        {
            id: "bp-w17-3-q3",
            question: "合成监控和 RUM 有什么区别？",
            options: [
                "没有区别",
                "合成用模拟测试可控环境，RUM 收集真实用户数据反映实际体验",
                "合成更准确",
                "RUM 更可控"
            ],
            answer: 1,
            rationale: "合成监控在可控环境模拟测试，便于对比；RUM 收集真实用户数据，反映实际体验分布。"
        },
        {
            id: "bp-w17-3-q4",
            question: "第三方脚本如何影响性能？",
            options: [
                "无影响",
                "阻塞渲染、增加网络请求、占用主线程、可能导致布局偏移",
                "加速加载",
                "减少请求"
            ],
            answer: 1,
            rationale: "第三方脚本（广告、分析等）可能阻塞渲染、增加请求、占用 CPU，显著影响性能。"
        },
        {
            id: "bp-w17-3-q5",
            question: "API 设计如何影响前端性能？",
            options: [
                "无影响",
                "过多 API 调用、大响应体、缺乏聚合都增加延迟和带宽消耗",
                "只影响后端",
                "只影响安全"
            ],
            answer: 1,
            rationale: "前端性能依赖 API 设计。应该合并请求、按需返回字段、使用响应压缩。"
        },
        {
            id: "bp-w17-3-q6",
            question: "如何在 CI/CD 中防止性能回归？",
            options: [
                "不可能",
                "集成 Lighthouse CI，设置性能预算阈值，超标阻止合并",
                "手动检查",
                "只看功能"
            ],
            answer: 1,
            rationale: "在 CI 中运行 Lighthouse 检测性能指标，设置阈值（如 LCP < 2.5s），超标阻止 PR 合并。"
        },
        {
            id: "bp-w17-3-q7",
            question: "LCP 指标代表什么？",
            options: [
                "首字节时间",
                "视口内最大内容元素的渲染时间，反映主要内容加载速度",
                "所有内容加载",
                "JavaScript 执行"
            ],
            answer: 1,
            rationale: "LCP (Largest Contentful Paint) 测量视口内最大内容元素何时渲染完成，应 < 2.5s。"
        },
        {
            id: "bp-w17-3-q8",
            question: "CLS 指标代表什么？",
            options: [
                "加载速度",
                "页面布局偏移程度，反映视觉稳定性",
                "交互延迟",
                "网络延迟"
            ],
            answer: 1,
            rationale: "CLS (Cumulative Layout Shift) 测量页面加载期间布局的意外移动，应 < 0.1。"
        },
        {
            id: "bp-w17-3-q9",
            question: "如何优化关键渲染路径？",
            options: [
                "增加资源",
                "内联关键 CSS、异步加载非关键 JS、预加载关键资源",
                "减少内容",
                "禁用 CSS"
            ],
            answer: 1,
            rationale: "优化关键渲染路径：内联首屏关键 CSS、defer/async 非关键 JS、preload 关键资源。"
        },
        {
            id: "bp-w17-3-q10",
            question: "性能预算是什么？",
            options: [
                "经费预算",
                "为各性能指标设置的阈值，超过需要优化",
                "人力预算",
                "时间预算"
            ],
            answer: 1,
            rationale: "性能预算是为 LCP、资源大小、请求数等指标设置的阈值，作为优化目标和回归基准。"
        },
        {
            id: "bp-w17-3-q11",
            question: "WebPageTest 的优势是什么？",
            options: [
                "只能本地测试",
                "全球多地点测试、详细瀑布图、视频回放、深度性能分析",
                "只能测速度",
                "只能测移动端"
            ],
            answer: 1,
            rationale: "WebPageTest 提供全球多地点测试、详细的瀑布图、连接视图、视频回放等深度分析能力。"
        },
        {
            id: "bp-w17-3-q12",
            question: "INP 指标代表什么？",
            options: [
                "输入延迟",
                "交互到下一次绘制的延迟，反映页面响应性",
                "网络延迟",
                "服务器延迟"
            ],
            answer: 1,
            rationale: "INP (Interaction to Next Paint) 测量用户交互到视觉反馈的延迟，替代 FID，应 < 200ms。"
        }
    ]
}
