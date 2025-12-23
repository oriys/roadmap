import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "w1-4": {
        lessonId: "w1-4",
        background: [
            "【信封背面估算的本质】Back-of-the-envelope estimation 是通过思维实验和简单算术，结合已知的性能数字，快速验证架构设计可行性的方法。目标不是精确计算，而是建立数量级直觉——判断方案是否在合理范围内。",
            "【Powers of Two 速查表】2^10 = 1K (千)、2^20 = 1M (百万)、2^30 = 1G (十亿)、2^40 = 1T (万亿)。换算技巧：1 KB = 1024 字节 ≈ 10^3、1 MB ≈ 10^6、1 GB ≈ 10^9。这些是容量估算的基础。",
            "【QPS 估算公式】日请求量到 QPS 的转换：1 百万请求/天 ≈ 12 QPS。完整公式：QPS = 日请求量 / 86400。峰值估算：Peak QPS = 2 × Average QPS，或使用 10% 规则（每日 10% 流量集中在 1 小时内）。",
            "【存储估算公式】总存储 = 日写入量 × 单条记录大小 × 保留天数 × 副本数。例如：每天 1000 万条推文，每条 1KB，保留 5 年，3 副本 = 10M × 1KB × 365 × 5 × 3 ≈ 55 TB。",
            "【缓存估算的 80/20 法则】根据 Pareto 原则，80% 的请求访问 20% 的数据。因此缓存容量通常设为数据库存储的 20-30%。例如：数据库 100GB，缓存设置为 20-30GB。"
        ],
        keyDifficulties: [
            "【数量级 vs 精确值】面试中不需要精确答案。关键是过程和数量级判断。57,870 QPS 和 60,000 QPS 在系统设计层面没有本质区别，但与 600 QPS 有天壤之别。",
            "【忘记副本因子】新手常见错误是只计算原始数据量。实际系统为了持久性和可用性，数据通常复制 3 份。存储估算时必须乘以副本因子。",
            "【峰值 vs 平均值】系统必须能处理峰值负载，而非平均负载。如果只按平均 QPS 设计，在流量高峰时会崩溃。使用 2-3 倍的峰值系数，或者引入弹性伸缩。",
            "【带宽双向计算】带宽分为入站（Ingress，客户端请求）和出站（Egress，服务器响应）。通常出站带宽远大于入站（因为响应数据量大于请求）。两者都需要估算。"
        ],
        handsOnPath: [
            "练习将 DAU 转化为 QPS：假设一个社交应用有 1000 万 DAU，每用户每天平均发 5 条动态，计算写入 QPS 和假设读写比 50:1 的读取 QPS。",
            "为一个短视频应用估算存储：每天 100 万视频上传，平均 10MB/视频，保留 3 年，3 副本，计算总存储需求。",
            "估算 Twitter 规模的系统：3 亿 MAU，20% DAU，每用户每天 2 条推文，140 字符，计算日写入 QPS 和年存储量。",
            "使用电子表格建立估算模板：输入 DAU、每用户操作数、数据大小等参数，自动计算 QPS、存储、带宽。",
            "对比你的估算结果与公开的技术博客数据（如 Twitter、Instagram 的架构文章），校验估算准确性。"
        ],
        selfCheck: [
            "将 5000 万日请求量转化为 QPS 是多少？峰值 QPS（2 倍）是多少？",
            "为什么存储估算时需要考虑副本因子？典型的副本因子是多少？",
            "解释缓存容量估算中 80/20 法则的含义？",
            "如果一个系统的平均 QPS 是 1000，为什么不能按 1000 QPS 来设计容量？",
            "计算一个每天产生 1TB 新数据、保留 7 天、3 副本的系统需要多少存储？"
        ],
        extensions: [
            "学习 Jeff Dean 的 Stanford 演讲《Numbers Everyone Should Know》，深入理解性能数字。",
            "研究云服务商（AWS、GCP）的定价模型，了解存储、带宽、计算资源的成本结构。",
            "阅读真实系统的架构文章（Uber、Airbnb、Netflix），对比估算值与实际数据。",
            "学习负载测试工具（k6、Locust），用实际压测数据验证估算假设。"
        ],
        sourceUrls: [
            "https://github.com/donnemartin/system-design-primer#back-of-the-envelope-calculations",
            "https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf",
            "https://blog.bytebytego.com/p/back-of-the-envelope-estimation-cheat"
        ]
    },
    "w1-3": {
        lessonId: "w1-3",
        background: [
            "【延迟数字的数量级感知】Jeff Dean 的经典数据：L1 缓存 0.5ns、L2 缓存 7ns、主内存 100ns、SSD 随机读 150µs、磁盘寻道 10ms、同数据中心网络往返 500µs、跨大陆网络往返 150ms。这些数字帮助建立系统设计中的数量级直觉。",
            "【延迟分布与百分位数】平均延迟会掩盖长尾问题。Google SRE 推荐使用百分位数：P50（中位数）反映典型体验，P99 捕捉 1% 最差情况，P999 暴露极端长尾。如果你的 P50 是 50ms 但 P99 是 2s，用户会频繁遇到糟糕体验。",
            "【Little's Law 核心公式】L = λW，其中 L 是系统中的平均请求数，λ 是到达率（QPS），W 是平均响应时间。这个公式由 MIT 教授 John Little 于 1954 年提出，适用于任何稳态队列系统，无论到达分布和服务分布如何。",
            "【Little's Law 的容量规划应用】如果到达率 λ=1000 req/s，平均响应时间 W=340ms，则系统中同时有 L=1000×0.34=340 个请求。这决定了你需要的线程池大小、连接池大小、并发处理能力。",
            "【SLI/SLO/SLA 三层体系】SLI（服务级别指标）是可量化的度量（如 P99 延迟）；SLO（服务级别目标）是 SLI 的目标值（如 P99 < 200ms）；SLA（服务级别协议）是带有后果的承诺（未达到则赔偿）。Google SRE 强调：先理解用户需求，再设定 SLO。"
        ],
        keyDifficulties: [
            "【延迟 vs 吞吐量的权衡】降低延迟和提高吞吐量经常冲突。批处理可以提高吞吐量但增加单请求延迟；流式处理降低延迟但可能降低吞吐量。设计时要明确：系统优先保证低延迟还是高吞吐量？",
            "【平均值的误导性】「平均响应时间 100ms」听起来不错，但如果 P99 是 5s，意味着每 100 个请求就有 1 个用户等待 5 秒以上。在设计 SLO 时，应使用百分位数而非平均值。",
            "【Little's Law 的稳态假设】L = λW 只在系统达到稳态时成立。如果系统过载（到达率超过处理能力），队列会无限增长，延迟会持续上升，公式失效。这也是为什么需要限流和熔断。",
            "【跨层延迟累积】一个 API 调用可能跨越：客户端 → CDN → 负载均衡 → 应用服务 → 缓存/数据库。每一层都贡献延迟，网络往返尤其昂贵（同数据中心 500µs，跨区域可达 100ms+）。优化要从最大的延迟贡献者开始。"
        ],
        handsOnPath: [
            "使用 ping 和 traceroute 测量不同距离的网络延迟：本机 → 同局域网 → 同城市 → 跨国，建立直觉。",
            "编写一个简单的 HTTP 服务，使用 wrk 或 ab 进行压测，记录不同并发度下的 P50/P90/P99 延迟曲线。",
            "验证 Little's Law：在压测中观察请求到达率 λ、平均响应时间 W、同时在处理的请求数 L，验证 L ≈ λW。",
            "使用 Prometheus + Grafana 搭建监控，展示请求延迟的直方图分布，观察长尾现象。",
            "为你的服务定义 SLI 和 SLO：选择 3 个关键指标（如可用性、P99 延迟、错误率），设定目标值并配置告警。"
        ],
        selfCheck: [
            "磁盘寻道延迟约为多少？与 SSD 随机读相比慢多少倍？",
            "解释为什么「P99 延迟」比「平均延迟」更能反映用户体验？",
            "如果系统 QPS 是 500，平均响应时间是 200ms，根据 Little's Law，系统中平均有多少个请求？",
            "什么情况下 Little's Law 会失效？此时系统会出现什么现象？",
            "SLI、SLO、SLA 分别代表什么？它们之间的关系是什么？"
        ],
        extensions: [
            "研究协调省略（Coordinated Omission）问题：为什么某些压测工具报告的延迟会严重失真？",
            "学习 Gil Tene 关于延迟测量的演讲《How NOT to Measure Latency》。",
            "研究 Google 的误差预算（Error Budget）概念：如何用 SLO 剩余空间指导发布决策。",
            "阅读 Amazon 关于「延迟即金钱」的研究：每增加 100ms 延迟对转化率的影响。"
        ],
        sourceUrls: [
            "https://gist.github.com/jboner/2841832",
            "https://en.wikipedia.org/wiki/Little%27s_law",
            "https://sre.google/sre-book/service-level-objectives/"
        ]
    },
    "w1-2": {
        lessonId: "w1-2",
        background: [
            "【性能与可扩展性的本质区别】性能（Performance）关注单个请求的响应速度——降低延迟、提高吞吐量；可扩展性（Scalability）关注系统在负载增长时保持性能的能力。一个系统可以性能很好但不可扩展（单机优化到极致），也可以可扩展但单请求性能一般（分布式系统的网络开销）。",
            "【垂直扩展 vs 水平扩展】垂直扩展（Vertical Scaling/Scaling Up）通过升级单机硬件（CPU、RAM、SSD）提升能力，实现简单但存在硬件上限；水平扩展（Horizontal Scaling/Scaling Out）通过增加服务器数量分担负载，理论上无上限但需要处理分布式复杂性（数据一致性、服务发现、负载均衡）。",
            "【Amdahl 定律核心公式】S = 1 / ((1-P) + P/N)，其中 S 是加速比，P 是可并行化的比例，N 是处理器数量。当 N→∞ 时，S_max = 1/(1-P)。这揭示了一个残酷现实：如果程序有 10% 不可并行化，无论加多少处理器，最大加速比只有 10 倍。",
            "【Amdahl 定律的系统设计启示】在分布式系统中，串行部分包括：协调开销（分布式锁、事务协调）、共享资源争用（数据库连接池、单点服务）、数据聚合（跨分片查询）。优化可扩展性的关键是识别并消除这些串行瓶颈。",
            "【微服务与可扩展性】研究数据显示 92% 采用微服务的企业报告成功。微服务架构将单体应用分解为独立服务，允许各服务根据负载独立扩展，避免了单体应用「一个组件需要扩展，整个应用都要扩展」的问题。"
        ],
        keyDifficulties: [
            "【性能优化 ≠ 可扩展性】常见误区是混淆两者。单机性能优化（算法优化、缓存）在达到硬件极限后无法继续；可扩展性设计（无状态服务、数据分片）允许通过加机器线性扩展。面试时要明确区分：「这个优化提升单请求性能还是系统容量？」",
            "【水平扩展的隐藏成本】添加服务器不等于线性扩展。High Scalability 博客案例显示，真实系统面临：网络延迟增加、数据一致性复杂度、运维成本上升、故障排查难度增加。扩展系数通常是 0.7-0.9，而非理想的 1.0。",
            "【Amdahl 定律的陷阱】该定律假设问题规模固定。实际场景中，随着资源增加，我们往往会处理更大的数据集（Gustafson 定律的视角）。系统设计时要考虑：是优化固定负载的响应时间，还是在相同时间内处理更多数据？",
            "【识别扩展瓶颈】系统的扩展能力取决于最慢的组件。数据库通常是第一个瓶颈（单主写入限制），其次是有状态服务、共享缓存、网络带宽。设计时要识别「Critical Path」上的串行依赖。"
        ],
        handsOnPath: [
            "使用压测工具（wrk/ab/k6）对单机服务进行基准测试，记录 QPS 和 P99 延迟的关系曲线，观察性能拐点。",
            "部署同一服务的多个实例，配置 Nginx 负载均衡，测量 2/4/8 实例下的 QPS 变化，计算实际扩展系数。",
            "模拟 Amdahl 定律：在代码中引入一个固定 10ms 的串行操作（如全局锁），观察并发数增加时的吞吐量上限。",
            "分析一个真实系统（如你的项目）的扩展瓶颈：数据库连接数、外部 API 调用、文件 I/O、CPU 密集计算。",
            "使用 Docker Compose 搭建一个可水平扩展的服务架构，包含无状态 API 服务 + Redis + PostgreSQL 读写分离。"
        ],
        selfCheck: [
            "解释为什么「优化单请求延迟」和「提升系统吞吐量」可能需要不同的策略？",
            "如果一个程序有 5% 的代码无法并行化，根据 Amdahl 定律，使用 100 个处理器最大能获得多少倍加速？",
            "为什么数据库通常是分布式系统的第一个扩展瓶颈？有哪些常见的数据库扩展策略？",
            "微服务架构如何帮助实现独立扩展？它引入了哪些新的复杂性？",
            "在什么场景下应该优先考虑垂直扩展而非水平扩展？"
        ],
        extensions: [
            "研究 Gustafson 定律（Gustafson's Law）：当问题规模随处理器数量增长时，扩展效率如何变化？",
            "阅读 Google Spanner、Amazon DynamoDB 等全球分布式数据库的扩展架构设计。",
            "学习 Kubernetes HPA（Horizontal Pod Autoscaler）如何基于指标自动水平扩展服务。",
            "研究无服务器架构（Serverless）如何将扩展决策从开发者转移到平台。"
        ],
        sourceUrls: [
            "https://42works.net/scalable-web-applications-from-basics-to-best-practices/",
            "http://highscalability.com/",
            "https://en.wikipedia.org/wiki/Amdahl%27s_law"
        ]
    },
    "w1-1": {
        lessonId: "w1-1",
        background: [
            "【四步法核心】System Design Primer 定义的结构化流程：Step 1 - Gather requirements and scope the problem（需求澄清）→ Step 2 - Sketch main components and connections（高层设计）→ Step 3 - Explore individual components in detail（组件深入）→ Step 4 - Identify and address bottlenecks（扩展优化）。",
            "【需求澄清本质】系统设计的第一步不是画图，而是通过提问量化问题边界：用户规模（DAU/MAU）、请求量（QPS）、读写比例、数据规模、延迟要求。这些约束决定了架构选型的方向。",
            "【高层设计目标】建立系统的骨架——识别核心组件（API Gateway、Service、Database、Cache、Queue）及其连接关系。此阶段要 Justify design decisions，能解释每个组件存在的理由。",
            "【组件深入策略】选择 1-2 个关键组件做深度探讨：数据库选型、API 设计、哈希冲突处理、存储机制。深度比广度更能展示技术能力，但要与面试官确认优先级。",
            "【扩展优化思维】System Design Primer 强调：'Everything is a trade-off'——没有完美方案，只有在特定约束下的最优选择。考虑负载均衡、水平扩展、缓存层、数据库分片等手段解决瓶颈。"
        ],
        keyDifficulties: [
            "【约束驱动设计】新手常见错误是直接跳到解决方案。正确做法是先明确约束：100 QPS 和 100K QPS 的架构完全不同。需求澄清阶段要问清楚数量级，建立数量级直觉。",
            "【权衡思维缺失】'Everything is a trade-off'——一致性 vs 可用性、延迟 vs 吞吐量、复杂度 vs 可维护性。面试官考察的是你如何在约束下做取舍，而非记忆标准答案。",
            "【深度与广度平衡】45 分钟面试无法覆盖所有细节。策略是高层设计快速建立全局视图，然后主动选择最关键或最有挑战的组件深入，展示技术深度。",
            "【迭代式设计】系统设计不是一次性完成的。先从最简单的方案开始（如单机），识别瓶颈后迭代优化（读写分离、缓存、分片）。展示这个思考过程比直接给出最终方案更有价值。"
        ],
        handsOnPath: [
            "选择一个经典系统设计题目（如 URL Shortener），严格按四步法进行：先花 5 分钟列出所有需要澄清的问题（QPS、存储周期、短链长度限制等）。",
            "画出高层架构图，标注每个组件的职责。使用 Excalidraw 或白板，练习快速画出清晰的系统框图。",
            "选择一个组件深入设计：如 URL Shortener 的 ID 生成策略——对比自增 ID + Base62、哈希截断、预生成 ID 池的优缺点。",
            "识别系统瓶颈并提出优化方案：读多写少可加缓存、热点 Key 可做分片、单点故障可做主从复制。",
            "限时 40 分钟完成一次完整设计，录音回放分析时间分配和表达清晰度。"
        ],
        selfCheck: [
            "你能用 5 分钟列出设计 Twitter Timeline 需要澄清的 10 个关键问题吗？",
            "给定 1 亿 DAU、读写比 100:1 的约束，你会如何计算峰值 QPS？",
            "为什么系统设计要从最简单的方案开始，而不是直接给出最复杂的架构？",
            "解释 CAP 定理在系统设计中的实际应用——给一个需要选择 CP 还是 AP 的场景。",
            "面试中只剩 10 分钟，你会如何分配时间——继续深入还是快速覆盖扩展性讨论？"
        ],
        extensions: [
            "阅读 System Design Primer 的完整案例分析（Twitter、Pastebin、Web Crawler），学习如何将四步法应用到不同场景。",
            "研究 FAANG 公司的系统设计面试真题，按四步法重新组织答案框架。",
            "练习在 45 分钟内完成 3-5 个不同类型的系统设计题目（存储类、通信类、计算类），建立题型模式识别能力。",
            "阅读 Grokking the System Design Interview 的方法论章节，对比不同框架的异同。"
        ],
        sourceUrls: [
            "https://github.com/donnemartin/system-design-primer",
            "https://www.designgurus.io/course/grokking-the-system-design-interview",
            "https://bytebytego.com/"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "w1-4": [
        {
            id: "w1-4-q1",
            question: "1 百万请求/天大约等于多少 QPS？",
            options: [
                "1 QPS",
                "12 QPS",
                "100 QPS",
                "1000 QPS"
            ],
            answer: 1,
            rationale: "1 百万请求/天 = 1,000,000 / 86,400 ≈ 12 QPS。这是一个实用的快速换算规则。"
        },
        {
            id: "w1-4-q2",
            question: "2^20 等于多少？",
            options: [
                "约 100 万（1M）",
                "约 1000（1K）",
                "约 10 亿（1G）",
                "约 1 万亿（1T）"
            ],
            answer: 0,
            rationale: "2^20 = 1,048,576 ≈ 1 百万（1M）。2^10 ≈ 1K，2^30 ≈ 1G，2^40 ≈ 1T。"
        },
        {
            id: "w1-4-q3",
            question: "存储估算时，为什么需要乘以副本因子？",
            options: [
                "为了计算压缩后的大小",
                "为了考虑元数据开销",
                "因为数据通常复制多份以保证持久性和可用性",
                "为了预留扩容空间"
            ],
            answer: 2,
            rationale: "实际系统为了持久性和可用性，数据通常复制 3 份。存储估算必须考虑副本因子，否则会严重低估实际需求。"
        },
        {
            id: "w1-4-q4",
            question: "缓存容量估算中的 80/20 法则意味着？",
            options: [
                "80% 的代码在 20% 的时间内完成",
                "80% 的请求访问 20% 的数据",
                "80% 的错误来自 20% 的 bug",
                "80% 的用户使用 20% 的功能"
            ],
            answer: 1,
            rationale: "80/20 法则（Pareto 原则）在缓存场景中意味着 80% 的请求访问 20% 的数据，因此缓存通常设置为数据库存储的 20-30%。"
        },
        {
            id: "w1-4-q5",
            question: "为什么系统设计时要按峰值 QPS 而非平均 QPS 来规划容量？",
            options: [
                "峰值 QPS 计算更简单",
                "平均 QPS 无法测量",
                "如果只按平均 QPS 设计，流量高峰时系统会过载",
                "峰值 QPS 更便于和老板汇报"
            ],
            answer: 2,
            rationale: "系统必须能处理峰值负载。如果只按平均 QPS 设计，在流量高峰（如促销、热点事件）时系统会过载崩溃。"
        },
        {
            id: "w1-4-q6",
            question: "每天 1000 万条数据，每条 1KB，保留 5 年，3 副本，总存储约为？",
            options: [
                "5 TB",
                "18 TB",
                "55 TB",
                "180 TB"
            ],
            answer: 2,
            rationale: "10M × 1KB × 365 天 × 5 年 × 3 副本 = 10M × 1KB × 5475 = 54.75 TB ≈ 55 TB。"
        },
        {
            id: "w1-4-q7",
            question: "信封背面估算在系统设计面试中的主要目的是？",
            options: [
                "得出精确的数字",
                "验证架构设计是否在合理的数量级范围内",
                "展示数学计算能力",
                "填充面试时间"
            ],
            answer: 1,
            rationale: "信封背面估算的目标是建立数量级直觉，判断方案是否可行。面试中不需要精确答案，关键是过程和数量级判断。"
        },
        {
            id: "w1-4-q8",
            question: "峰值 QPS 通常是平均 QPS 的多少倍？",
            options: [
                "1.2 倍",
                "2-3 倍",
                "10 倍",
                "100 倍"
            ],
            answer: 1,
            rationale: "峰值 QPS 通常估算为平均 QPS 的 2-3 倍。也可以使用 10% 规则：每日 10% 的流量集中在 1 小时内。"
        },
        {
            id: "w1-4-q9",
            question: "带宽估算中，Ingress 和 Egress 分别指？",
            options: [
                "上传和下载",
                "入站（客户端请求）和出站（服务器响应）",
                "内网和外网",
                "读取和写入"
            ],
            answer: 1,
            rationale: "Ingress 是入站带宽（客户端请求进入服务器），Egress 是出站带宽（服务器响应发出）。通常 Egress 远大于 Ingress。"
        },
        {
            id: "w1-4-q10",
            question: "数据的典型副本因子是多少？",
            options: [
                "1",
                "2",
                "3",
                "5"
            ],
            answer: 2,
            rationale: "数据通常复制 3 份以保证持久性和可用性。3 副本可以容忍 2 个节点故障，是行业标准配置。"
        },
        {
            id: "w1-4-q11",
            question: "一个 YouTube 类应用每天上传 100 万视频，平均 10MB/视频，保留 3 年，3 副本，需要多少存储？",
            options: [
                "约 30 PB",
                "约 10 PB",
                "约 3 PB",
                "约 1 PB"
            ],
            answer: 0,
            rationale: "1M × 10MB × 365 天 × 3 年 × 3 副本 = 10 TB/天 × 1095 × 3 ≈ 33 PB。视频存储需求远超文本数据。"
        },
        {
            id: "w1-4-q12",
            question: "信封背面估算在系统设计面试中应该占用多长时间？",
            options: [
                "不超过 5 分钟",
                "15-20 分钟",
                "面试时间的一半",
                "越详细越好"
            ],
            answer: 0,
            rationale: "信封背面估算不应超过 5 分钟。它的目的是快速验证可行性，而非详细计算。过度投入时间会影响其他重要环节。"
        }
    ],
    "w1-3": [
        {
            id: "w1-3-q1",
            question: "根据 Jeff Dean 的延迟数字，L1 缓存访问的延迟约为？",
            options: [
                "0.5 ns",
                "7 ns",
                "100 ns",
                "1 µs"
            ],
            answer: 0,
            rationale: "L1 缓存访问延迟约为 0.5 纳秒，是最快的存储访问。L2 缓存约 7ns，主内存约 100ns。"
        },
        {
            id: "w1-3-q2",
            question: "同一数据中心内的网络往返延迟约为？",
            options: [
                "10 µs",
                "100 µs",
                "500 µs",
                "10 ms"
            ],
            answer: 2,
            rationale: "同数据中心内的网络往返延迟约为 500 微秒（0.5ms）。这比跨大陆往返（约 150ms）快 300 倍。"
        },
        {
            id: "w1-3-q3",
            question: "Little's Law 的公式 L = λW 中，L 代表什么？",
            options: [
                "延迟（Latency）",
                "系统中的平均请求数",
                "负载（Load）",
                "链路数（Links）"
            ],
            answer: 1,
            rationale: "在 Little's Law 中，L 代表系统中的平均请求数（或队列长度），λ 是到达率，W 是平均响应/等待时间。"
        },
        {
            id: "w1-3-q4",
            question: "如果系统 QPS 为 1000，平均响应时间为 200ms，根据 Little's Law，系统中平均有多少个请求？",
            options: [
                "50 个",
                "100 个",
                "200 个",
                "500 个"
            ],
            answer: 2,
            rationale: "根据 L = λW，L = 1000 × 0.2 = 200 个请求。这意味着系统需要能同时处理 200 个并发请求。"
        },
        {
            id: "w1-3-q5",
            question: "为什么 Google SRE 推荐使用百分位数而非平均值来度量延迟？",
            options: [
                "百分位数计算更简单",
                "平均值会掩盖长尾问题，无法反映最差情况",
                "平均值在分布式系统中无法计算",
                "百分位数是行业标准"
            ],
            answer: 1,
            rationale: "平均延迟会掩盖长尾问题。如果 P50 是 50ms 但 P99 是 2s，平均值可能只有 100ms，但 1% 的用户会遭受极差体验。百分位数能更准确反映用户体验分布。"
        },
        {
            id: "w1-3-q6",
            question: "SLI、SLO、SLA 中，哪一个是「带有后果的承诺」？",
            options: [
                "SLI（服务级别指标）",
                "SLO（服务级别目标）",
                "SLA（服务级别协议）",
                "以上都不是"
            ],
            answer: 2,
            rationale: "SLA（Service Level Agreement）是带有后果的承诺，如未达到 SLO 则需要财务赔偿。SLI 是可量化的指标，SLO 是目标值。"
        },
        {
            id: "w1-3-q7",
            question: "磁盘寻道（Disk Seek）的延迟约为？",
            options: [
                "100 µs",
                "1 ms",
                "10 ms",
                "100 ms"
            ],
            answer: 2,
            rationale: "传统机械磁盘的寻道延迟约为 10 毫秒。这比 SSD 随机读（约 150µs）慢约 70 倍，是系统设计中需要特别注意的瓶颈。"
        },
        {
            id: "w1-3-q8",
            question: "Little's Law 在什么情况下会失效？",
            options: [
                "当请求数量太少时",
                "当系统过载、队列无限增长时",
                "当使用多线程处理时",
                "当网络延迟太高时"
            ],
            answer: 1,
            rationale: "Little's Law 只在系统达到稳态时成立。如果系统过载（到达率超过处理能力），队列会无限增长，延迟持续上升，公式失效。"
        },
        {
            id: "w1-3-q9",
            question: "Little's Law 是由谁在哪一年首次提出的？",
            options: [
                "Jeff Dean，2012 年",
                "John Little，1954 年",
                "Donald Knuth，1968 年",
                "Alan Turing，1936 年"
            ],
            answer: 1,
            rationale: "Little's Law 由 MIT 教授 John Little 于 1954 年提出。他在 1961 年发表了该定理的严格证明。"
        },
        {
            id: "w1-3-q10",
            question: "P99 延迟表示什么？",
            options: [
                "99% 的请求的平均延迟",
                "99% 的请求的延迟低于此值",
                "最快的 99% 请求的延迟",
                "延迟的第 99 次测量值"
            ],
            answer: 1,
            rationale: "P99 延迟表示 99% 的请求延迟低于此值，即只有 1% 的请求延迟超过 P99。这是衡量长尾延迟的重要指标。"
        },
        {
            id: "w1-3-q11",
            question: "跨大陆（如加州到荷兰）网络往返延迟约为？",
            options: [
                "1 ms",
                "10 ms",
                "50 ms",
                "150 ms"
            ],
            answer: 3,
            rationale: "跨大陆（如加州到荷兰）的网络往返延迟约为 150 毫秒。这是光速物理限制造成的，无法通过软件优化消除。"
        },
        {
            id: "w1-3-q12",
            question: "根据 Google SRE 的建议，设定 SLO 时应该？",
            options: [
                "追求 100% 可用性",
                "从容易测量的指标开始",
                "先理解用户需求，再设定目标",
                "与竞争对手保持一致"
            ],
            answer: 2,
            rationale: "Google SRE 强调：设定 SLO 时应先理解用户真正关心的内容，而不是仅从容易测量的指标开始。100% 可用性既不现实也成本过高。"
        }
    ],
    "w1-2": [
        {
            id: "w1-2-q1",
            question: "性能（Performance）和可扩展性（Scalability）的核心区别是什么？",
            options: [
                "性能关注系统成本，可扩展性关注系统收入",
                "性能关注单请求响应速度，可扩展性关注系统在负载增长时保持性能的能力",
                "性能只适用于数据库，可扩展性只适用于 Web 服务",
                "两者是同一概念的不同表述"
            ],
            answer: 1,
            rationale: "性能关注单个请求的延迟和吞吐量，而可扩展性关注系统在负载增长时能否持续保持性能水平。一个系统可以性能好但不可扩展（单机极限），也可以可扩展但单请求性能一般。"
        },
        {
            id: "w1-2-q2",
            question: "Amdahl 定律的核心公式 S = 1 / ((1-P) + P/N) 中，当 N 趋向无穷大时，最大加速比是？",
            options: [
                "无穷大",
                "N",
                "1 / (1-P)",
                "P"
            ],
            answer: 2,
            rationale: "当处理器数量 N→∞ 时，P/N→0，公式简化为 S_max = 1/(1-P)。这表明最大加速比完全由不可并行化的部分 (1-P) 决定，与处理器数量无关。"
        },
        {
            id: "w1-2-q3",
            question: "根据 Amdahl 定律，如果程序有 20% 的代码无法并行化，使用无限多处理器最多能获得多少倍加速？",
            options: [
                "20 倍",
                "5 倍",
                "80 倍",
                "无限倍"
            ],
            answer: 1,
            rationale: "根据 S_max = 1/(1-P)，如果 20% 无法并行化（1-P = 0.2），则 S_max = 1/0.2 = 5 倍。无论增加多少处理器，加速比都不会超过 5 倍。"
        },
        {
            id: "w1-2-q4",
            question: "以下哪项是垂直扩展（Vertical Scaling）的特点？",
            options: [
                "添加更多服务器节点",
                "需要负载均衡器",
                "通过升级单机硬件（CPU、RAM）提升能力",
                "理论上没有扩展上限"
            ],
            answer: 2,
            rationale: "垂直扩展（Scaling Up）通过升级单机硬件来提升能力，实现简单但存在硬件上限。水平扩展才是添加更多服务器节点、需要负载均衡器、理论上无上限。"
        },
        {
            id: "w1-2-q5",
            question: "水平扩展（Horizontal Scaling）引入的复杂性不包括？",
            options: [
                "数据一致性问题",
                "服务发现机制",
                "单机硬件升级成本",
                "负载均衡配置"
            ],
            answer: 2,
            rationale: "水平扩展需要处理分布式系统的复杂性：数据一致性、服务发现、负载均衡等。单机硬件升级成本是垂直扩展的问题，与水平扩展无关。"
        },
        {
            id: "w1-2-q6",
            question: "在分布式系统中，以下哪项通常是第一个扩展瓶颈？",
            options: [
                "前端静态资源",
                "无状态 API 服务",
                "数据库（单主写入限制）",
                "CDN 节点"
            ],
            answer: 2,
            rationale: "数据库通常是第一个瓶颈，因为单主架构的写入能力有限，且数据一致性约束限制了简单的水平扩展。无状态服务、静态资源、CDN 都相对容易水平扩展。"
        },
        {
            id: "w1-2-q7",
            question: "研究数据显示，采用微服务的企业成功报告率约为？",
            options: [
                "50%",
                "72%",
                "92%",
                "100%"
            ],
            answer: 2,
            rationale: "根据行业研究数据，92% 采用微服务的企业报告取得成功。微服务允许各服务独立扩展，避免了单体应用的扩展瓶颈。"
        },
        {
            id: "w1-2-q8",
            question: "Amdahl 定律的主要局限性是？",
            options: [
                "只适用于单核处理器",
                "假设问题规模固定，不考虑随资源增加而处理更大数据集的场景",
                "只适用于 I/O 密集型任务",
                "不考虑内存限制"
            ],
            answer: 1,
            rationale: "Amdahl 定律假设问题规模固定。实际中，随着资源增加，我们往往会处理更大的数据集。Gustafson 定律从不同角度考虑了问题规模随资源增长的场景。"
        },
        {
            id: "w1-2-q9",
            question: "在真实系统中，水平扩展的实际扩展系数通常是多少？",
            options: [
                "1.0（完美线性）",
                "0.7-0.9",
                "1.2-1.5（超线性）",
                "0.3-0.5"
            ],
            answer: 1,
            rationale: "由于网络延迟、数据一致性开销、协调成本等因素，真实系统的扩展系数通常是 0.7-0.9，而非理想的 1.0 线性扩展。"
        },
        {
            id: "w1-2-q10",
            question: "以下哪种场景更适合优先考虑垂直扩展？",
            options: [
                "全球分布式用户访问的社交网络",
                "小团队使用的内部管理系统，峰值负载可预测",
                "电商大促期间的秒杀系统",
                "需要处理 PB 级数据的数据仓库"
            ],
            answer: 1,
            rationale: "垂直扩展适合负载可预测、规模有限的场景（如内部系统），实现简单、成本可控。大规模互联网应用、峰值不可预测的系统需要水平扩展的弹性。"
        },
        {
            id: "w1-2-q11",
            question: "在分布式系统中，以下哪项属于 Amdahl 定律中「串行部分」的典型例子？",
            options: [
                "可独立处理的 HTTP 请求",
                "分布式锁和事务协调开销",
                "可并行的数据分片读取",
                "无状态的计算任务"
            ],
            answer: 1,
            rationale: "分布式锁、事务协调、共享资源争用（如数据库连接池）都是典型的串行部分——无论增加多少节点，这些操作都无法并行化，限制了系统的整体扩展能力。"
        },
        {
            id: "w1-2-q12",
            question: "负载均衡器可以将应用性能提升约多少？",
            options: [
                "10%",
                "20%",
                "40%",
                "80%"
            ],
            answer: 2,
            rationale: "根据可扩展性研究，负载均衡器通过在服务器间均匀分配流量，可将应用性能提升约 40%。这是水平扩展架构的关键组件。"
        }
    ],
    "w1-1": [
        {
            id: "w1-1-q1",
            question: "System Design Primer 定义的系统设计四步法，第一步是什么？",
            options: [
                "Sketch main components and connections——画出主要组件和连接",
                "Gather requirements and scope the problem——收集需求并界定问题范围",
                "Explore individual components in detail——深入探索各个组件",
                "Identify and address bottlenecks——识别并解决瓶颈"
            ],
            answer: 1,
            rationale: "System Design Primer 明确指出第一步是 'Gather requirements and scope the problem'，通过提问澄清用例和约束，这决定了后续设计的方向。"
        },
        {
            id: "w1-1-q2",
            question: "在需求澄清阶段，以下哪个不是关键约束？",
            options: [
                "用户规模（DAU/MAU）",
                "读写比例（Read/Write Ratio）",
                "代码使用的编程语言",
                "预期请求量（QPS）"
            ],
            answer: 2,
            rationale: "编程语言通常不是系统设计阶段的关键约束。需求澄清关注的是用户规模、请求量、读写比例、数据规模、延迟要求等影响架构选型的因素。"
        },
        {
            id: "w1-1-q3",
            question: "System Design Primer 关于权衡（Trade-off）的核心观点是什么？",
            options: [
                "应该选择最复杂的方案以展示技术能力",
                "Everything is a trade-off——一切都是权衡",
                "一致性总是比可用性更重要",
                "性能优化应该在设计阶段全部完成"
            ],
            answer: 1,
            rationale: "System Design Primer 强调 'Everything is a trade-off'——没有完美方案，系统设计的核心是在特定约束下做出合理的取舍。"
        },
        {
            id: "w1-1-q4",
            question: "四步法的第二步 High-Level Design 的目标是什么？",
            options: [
                "完成所有组件的详细设计和代码实现",
                "Sketch main components and their connections, justify design decisions——建立系统骨架并解释设计决策",
                "进行性能测试和压力测试",
                "编写完整的 API 文档"
            ],
            answer: 1,
            rationale: "高层设计的目标是建立系统的骨架——识别核心组件及其连接关系，并能 justify（解释）每个设计决策的理由。"
        },
        {
            id: "w1-1-q5",
            question: "在 45 分钟的系统设计面试中，正确的深度策略是？",
            options: [
                "平均分配时间给每个组件，确保覆盖面",
                "只讨论数据库设计，忽略其他组件",
                "快速建立全局视图，选择 1-2 个关键组件深入讨论",
                "跳过需求澄清，直接画出最终架构图"
            ],
            answer: 2,
            rationale: "45 分钟无法覆盖所有细节。正确策略是高层设计快速建立全局视图，然后主动选择最关键或最有挑战的组件深入，展示技术深度。"
        },
        {
            id: "w1-1-q6",
            question: "为什么系统设计要从最简单的方案开始？",
            options: [
                "简单方案总是最优解",
                "可以展示迭代优化的思考过程，先识别瓶颈再针对性解决",
                "面试官更喜欢简单方案",
                "复杂方案无法在面试时间内完成"
            ],
            answer: 1,
            rationale: "从简单方案开始（如单机），可以清晰地展示发现瓶颈→分析原因→迭代优化的思考过程，这比直接给出最终复杂架构更有价值。"
        },
        {
            id: "w1-1-q7",
            question: "四步法的第三步 Component Deep-Dive 应该关注什么？",
            options: [
                "重新澄清需求和约束",
                "数据库选型、API 设计、存储机制等特定问题领域的深度探讨",
                "绘制完整的系统部署图",
                "讨论项目管理和团队协作"
            ],
            answer: 1,
            rationale: "Component Deep-Dive 阶段探索单个组件的细节——数据库选型、API 设计、哈希冲突处理、存储机制等与具体问题领域相关的深度问题。"
        },
        {
            id: "w1-1-q8",
            question: "四步法的第四步 Scalability & Optimization 的核心任务是？",
            options: [
                "编写单元测试和集成测试",
                "Identify and address bottlenecks given the constraints——在约束条件下识别并解决瓶颈",
                "选择云服务提供商",
                "设计用户界面和交互流程"
            ],
            answer: 1,
            rationale: "System Design Primer 指出第四步的任务是 'Identify and address bottlenecks, given the constraints'，考虑负载均衡、水平扩展、缓存、分片等解决瓶颈。"
        },
        {
            id: "w1-1-q9",
            question: "以下哪个是正确的需求澄清问题？",
            options: [
                "你们公司用什么技术栈？",
                "预期的每秒请求量（QPS）和读写比例是多少？",
                "项目的开发周期是多长？",
                "团队有多少工程师？"
            ],
            answer: 1,
            rationale: "需求澄清关注影响架构设计的技术约束：用户规模、QPS、读写比例、数据规模、延迟要求等，而非项目管理或团队相关问题。"
        },
        {
            id: "w1-1-q10",
            question: "当系统读多写少时，常见的优化手段是什么？",
            options: [
                "增加写入队列深度",
                "添加缓存层减少数据库读取压力",
                "使用更强的写入一致性",
                "减少数据冗余"
            ],
            answer: 1,
            rationale: "读多写少的场景非常适合缓存优化——通过在数据库前添加缓存层（如 Redis），可以大幅减少数据库读取压力，提高系统吞吐量。"
        },
        {
            id: "w1-1-q11",
            question: "System Design Primer 提到的支撑技术不包括？",
            options: [
                "Back-of-envelope calculations（信封背面估算）",
                "Trade-off analysis（权衡分析）",
                "Reference patterns like CAP theorem（如 CAP 定理等参考模式）",
                "Waterfall development methodology（瀑布开发方法论）"
            ],
            answer: 3,
            rationale: "System Design Primer 的支撑技术包括信封背面估算、权衡分析、CAP 定理、复制策略、缓存层等技术概念，不涉及瀑布等开发方法论。"
        },
        {
            id: "w1-1-q12",
            question: "面试官问「你会如何处理热点 Key 问题」，这属于四步法的哪一步？",
            options: [
                "Step 1: Requirements Gathering——需求收集",
                "Step 2: High-Level Design——高层设计",
                "Step 3: Component Deep-Dive——组件深入",
                "与四步法无关的随机问题"
            ],
            answer: 2,
            rationale: "热点 Key 是特定组件（如缓存或数据库）的深度问题，属于 Step 3 Component Deep-Dive 阶段——探索单个组件的具体实现细节和挑战。"
        }
    ]
}
