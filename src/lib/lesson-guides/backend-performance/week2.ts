import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "bp-w2-1": {
        lessonId: "bp-w2-1",
        background: [
            "【火焰图本质】Brendan Gregg：火焰图是'hierarchical visualizations of profiled software stack traces'——将堆栈采样可视化为层级结构，X 轴表示栈帧出现频率（按字母排序），Y 轴表示栈深度。",
            "【火焰图解读】火焰图中更宽的方块表示该函数在采样中出现更频繁。顶层边缘显示当前正在 CPU 上执行的函数，下方是其调用祖先链。颜色随机用于区分相邻帧，无特殊含义。",
            "【CPU vs Off-CPU】CPU 火焰图显示 CPU 上的活跃执行时间；Off-CPU 火焰图显示阻塞和等待时间。两者互补：'Off-CPU flame graphs can solve issues of blocking time'——排查 I/O 等待、锁竞争等问题。",
            "【EXPLAIN 输出结构】PostgreSQL 文档：查询计划是树形结构，叶子节点是扫描节点（Seq Scan、Index Scan、Bitmap Index Scan），上层节点是连接、聚合、排序等操作。",
            "【成本估计组成】EXPLAIN 输出的 cost 包含：启动成本（输出开始前的时间）、总成本（运行到完成的时间）、预估行数、平均行宽度。成本公式：(磁盘页面数 × seq_page_cost) + (扫描行数 × cpu_tuple_cost)。",
            "【慢查询日志价值】MySQL 慢查询日志记录执行时间超过 long_query_time 秒的 SQL 语句。默认阈值 10 秒，支持微秒精度（如 0.5 秒），是定位数据库瓶颈的关键工具。"
        ],
        keyDifficulties: [
            "【行数估计偏差】PostgreSQL 文档警告：当 EXPLAIN ANALYZE 显示预估行数与实际行数差异很大时（如 rows=100 est vs rows=50000 actual），说明统计信息过时，需运行 ANALYZE 更新。",
            "【loops 乘数陷阱】EXPLAIN ANALYZE 的 actual time 在 loops > 1 时是平均值。总时间 = actual time × loops。例如内层索引扫描 0.003ms × 10 loops = 0.030ms 总时间。",
            "【执行时间 vs 锁等待】MySQL 文档：'锁获取时间不计入执行时间'——慢查询日志只记录实际执行时间，锁等待时间需要通过其他方式监控（如 performance_schema）。",
            "【索引选择误判】当 WHERE 条件涉及多列时，规划器可能选择 BitmapAnd 合并多个索引，但这不一定比单索引扫描快。需通过 EXPLAIN ANALYZE 验证实际性能。",
            "【帧指针丢失问题】Brendan Gregg 指出：现代编译器默认省略帧指针优化（frame pointer omission），导致堆栈采样不完整。Java 需添加 -XX:+PreserveFramePointer 参数保留帧指针。"
        ],
        handsOnPath: [
            "使用 perf 采集 CPU profile：sudo perf record -g -p <pid> -- sleep 30，然后用 perf script | stackcollapse-perf.pl | flamegraph.pl > cpu.svg 生成火焰图。",
            "在 PostgreSQL 中对慢查询使用 EXPLAIN (ANALYZE, BUFFERS) 分析，关注 actual time、rows、Buffers: shared hit/read 字段，识别全表扫描和缓存未命中。",
            "配置 MySQL 慢查询日志：SET GLOBAL slow_query_log = 1; SET GLOBAL long_query_time = 1; SET GLOBAL log_slow_extra = 1;（8.0.14+），捕获 1 秒以上的查询。",
            "使用 mysqldumpslow -s t -n 10 /path/to/slow.log 按执行时间排序，找出 Top 10 慢查询进行优化。",
            "对 PostgreSQL 慢查询禁用特定计划方法验证：SET enable_seqscan = off; 强制使用索引，对比执行时间是否改善。",
            "使用 EXPLAIN ANALYZE 对比有索引和无索引的查询成本，确认索引是否被正确使用，以及是否需要覆盖索引。"
        ],
        selfCheck: [
            "火焰图的 X 轴和 Y 轴分别表示什么？如何通过火焰图识别热点函数？",
            "CPU 火焰图和 Off-CPU 火焰图分别用于分析什么问题？",
            "PostgreSQL EXPLAIN 输出中的 cost=0.00..445.00 两个数字分别代表什么含义？",
            "EXPLAIN ANALYZE 中 loops > 1 时，如何计算节点的实际总执行时间？",
            "MySQL 慢查询日志的 long_query_time 参数默认值是多少？如何设置为 500ms？",
            "什么情况下 EXPLAIN 的预估行数与实际行数差异很大？如何解决？",
            "为什么需要保留帧指针（PreserveFramePointer）才能生成完整的火焰图？"
        ],
        extensions: [
            "学习 async-profiler（Java）或 py-spy（Python）等语言专用 profiler，它们可以不依赖帧指针生成准确的火焰图。",
            "研究 pg_stat_statements 扩展，自动统计 PostgreSQL 查询的执行次数、总时间、平均时间等指标。",
            "探索 MySQL Performance Schema 中的 events_statements_history 表，获取比慢查询日志更细粒度的执行统计。",
            "学习 eBPF 工具（如 bpftrace、BCC）进行内核级性能分析，无需修改应用即可生成 Off-CPU 火焰图。"
        ],
        sourceUrls: [
            "http://www.brendangregg.com/flamegraphs.html",
            "https://www.postgresql.org/docs/current/using-explain.html",
            "https://dev.mysql.com/doc/refman/8.0/en/slow-query-log.html"
        ]
    },
    "bp-w2-2": {
        lessonId: "bp-w2-2",
        background: [
            "【超时设置原则】AWS Builders' Library：超时值应基于下游服务延迟百分位数，'choose an acceptable rate of false timeouts (such as 0.1%). Then, we look at the corresponding latency percentile'——如接受 0.1% 误判，则参考 P99.9 延迟。",
            "【指数退避机制】重试时应逐步增加间隔时间，防止雪崩效应。AWS 建议：'Increase time between retries to maintain balanced backend load'——第一次重试等 1 秒，第二次 2 秒，第三次 4 秒，以此类推。",
            "【抖动（Jitter）价值】同步重试可能导致重试风暴。AWS 建议引入'random amount of time before making or retrying a request'——随机化重试时间分散负载，避免多客户端同时重试压垮恢复中的系统。",
            "【Little's Law 公式】排队理论基础：L = λ × W，即系统中的平均请求数 = 到达率 × 平均响应时间。性能测试扩展为：User Load = TPS × (Response Time + Think Time + Pacing)。",
            "【Nginx 速率限制】Nginx 使用漏桶算法（leaky bucket）控制请求流量。limit_req_zone 定义限速参数，limit_req 应用到特定 location。zone 参数 1MB 可存储约 16,000 个 IP 地址状态。",
            "【burst 与 nodelay】burst 参数允许请求排队等待处理；nodelay 参数让排队请求立即转发而不延迟。两者配合使用：limit_req zone=mylimit burst=20 nodelay; 既允许突发又保持响应速度。"
        ],
        keyDifficulties: [
            "【幂等性设计】AWS 文档强调：'Design APIs to be idempotent when possible, allowing safe retries'——非幂等操作（如扣款、发送消息）不能简单重试，需要使用幂等键或去重机制。",
            "【超时层级叠加】分布式系统中超时需要层层传递且递减。如网关超时 30 秒，则上游服务超时应设为 25 秒，数据库超时 20 秒，留出处理和传输时间。",
            "【速率限制粒度】Nginx 的 $binary_remote_addr 按 IP 限速，但 NAT 后多用户共享 IP 会被误限。可改用 $http_x_forwarded_for 或 API key 作为限速 key，但需防止伪造。",
            "【Little's Law 验证测试】如果负载测试显示 10 线程下只有 5 TPS，每请求 200ms，则计算不符合 Little's Law（应有 10 × 1000ms / 200ms = 50 TPS）——说明测试工具本身成为瓶颈。",
            "【delay 参数细节】Nginx 的 delay 参数指定多少个 burst 请求不延迟处理。例如 burst=12 delay=8 表示前 8 个突发请求立即处理，第 9-12 个请求按速率排队。"
        ],
        handsOnPath: [
            "配置 Nginx 速率限制保护登录接口：limit_req_zone $binary_remote_addr zone=login:10m rate=5r/s; 在 /login location 添加 limit_req zone=login burst=10 nodelay;",
            "使用压测工具（如 k6、wrk）验证速率限制生效：在 rate=5r/s 配置下发起 20 并发请求，观察 503 响应比例。",
            "实现指数退避重试：第一次重试等待 base_delay × 2^0 + random_jitter，第二次 base_delay × 2^1 + random_jitter，设置最大重试次数和最大等待时间。",
            "使用 Little's Law 验证负载测试配置：计算 User Load = TPS × Avg Response Time，确认虚拟用户数设置合理。",
            "配置服务超时链：API Gateway 30s → Service A 25s → Service B 20s → Database 15s，确保下游超时小于上游。",
            "设置 Nginx 日志记录被限速的请求：limit_req_log_level warn; limit_req_status 429; 便于监控限速触发频率。"
        ],
        selfCheck: [
            "AWS 建议如何选择超时值？为什么要参考延迟百分位数而非平均值？",
            "什么是指数退避（Exponential Backoff）？为什么需要添加抖动（Jitter）？",
            "什么是幂等性？为什么非幂等操作的重试需要特殊处理？",
            "Nginx 的 burst 和 nodelay 参数分别起什么作用？",
            "Little's Law 公式 L = λ × W 中三个变量分别代表什么？",
            "如何使用 Little's Law 判断负载测试工具是否成为瓶颈？",
            "limit_req_zone 的 zone 参数 10m 可以存储多少 IP 地址的状态？"
        ],
        extensions: [
            "研究 Nginx 的 limit_conn 指令，实现并发连接数限制，与 limit_req 请求速率限制配合使用。",
            "学习断路器模式（Circuit Breaker）的实现，如 Resilience4j（Java）、Polly（.NET），自动熔断故障下游。",
            "探索 Token Bucket 与 Leaky Bucket 两种限流算法的差异和适用场景。",
            "研究分布式限流方案：Redis + Lua 脚本实现跨实例的全局限流，或使用 Envoy 的 Rate Limit Service。"
        ],
        sourceUrls: [
            "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/",
            "https://blog.nginx.org/blog/rate-limiting-nginx",
            "https://www.perfmatrix.com/littles-law-in-performance-testing/"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w2-1": [
        {
            id: "bp-w2-1-q1",
            question: "Brendan Gregg 对火焰图的核心定义是什么？",
            options: [
                "一种显示 CPU 温度变化的图表",
                "Hierarchical visualizations of profiled software stack traces",
                "一种显示内存使用量的图表",
                "一种显示网络流量的图表"
            ],
            answer: 1,
            rationale: "Brendan Gregg 定义火焰图为'hierarchical visualizations of profiled software stack traces'——将堆栈采样可视化为层级结构。"
        },
        {
            id: "bp-w2-1-q2",
            question: "火焰图中更宽的方块代表什么含义？",
            options: [
                "函数执行时间更长",
                "函数在采样中出现更频繁",
                "函数使用更多内存",
                "函数调用层级更深"
            ],
            answer: 1,
            rationale: "火焰图中更宽的方块表示该函数在采样中出现更频繁，即在 CPU 上花费的时间比例更大。宽度代表频率，不是单次执行时间。"
        },
        {
            id: "bp-w2-1-q3",
            question: "Off-CPU 火焰图的主要用途是什么？",
            options: [
                "显示 CPU 密集型计算",
                "Solve issues of blocking time——分析阻塞和等待时间",
                "显示内存分配",
                "显示网络延迟"
            ],
            answer: 1,
            rationale: "Brendan Gregg 指出 Off-CPU 火焰图'can solve issues of blocking time'——用于分析 I/O 等待、锁竞争等阻塞问题，与 CPU 火焰图互补。"
        },
        {
            id: "bp-w2-1-q4",
            question: "PostgreSQL EXPLAIN 输出中 cost=0.00..445.00 的两个数字分别代表什么？",
            options: [
                "最小成本和最大成本",
                "启动成本和总成本",
                "读取成本和写入成本",
                "CPU 成本和 I/O 成本"
            ],
            answer: 1,
            rationale: "PostgreSQL 文档：第一个数字是启动成本（输出开始前的时间，如排序初始化），第二个是总成本（运行到完成的时间）。"
        },
        {
            id: "bp-w2-1-q5",
            question: "EXPLAIN ANALYZE 输出中 loops=10，actual time=0.003ms 时，该节点的实际总执行时间是多少？",
            options: [
                "0.003ms",
                "0.030ms（0.003 × 10）",
                "10.003ms",
                "0.0003ms"
            ],
            answer: 1,
            rationale: "PostgreSQL 文档指出：当 loops > 1 时，actual time 是平均值。总时间 = actual time × loops = 0.003ms × 10 = 0.030ms。"
        },
        {
            id: "bp-w2-1-q6",
            question: "MySQL 慢查询日志的 long_query_time 参数默认值是多少？",
            options: [
                "1 秒",
                "5 秒",
                "10 秒",
                "30 秒"
            ],
            answer: 2,
            rationale: "MySQL 文档：long_query_time 默认值为 10 秒，支持微秒精度（如设置为 0.5 记录 500ms 以上的查询）。"
        },
        {
            id: "bp-w2-1-q7",
            question: "MySQL 慢查询日志关于锁等待时间的说明是什么？",
            options: [
                "锁等待时间计入执行时间",
                "锁获取时间不计入执行时间",
                "只记录锁等待时间，不记录执行时间",
                "锁等待超过 1 秒才记录"
            ],
            answer: 1,
            rationale: "MySQL 文档明确：'锁获取时间不计入执行时间'——慢查询日志只记录实际执行时间，锁等待需要通过其他方式监控。"
        },
        {
            id: "bp-w2-1-q8",
            question: "什么情况下需要运行 PostgreSQL 的 ANALYZE 命令？",
            options: [
                "每次查询前都需要运行",
                "只有在创建新表时才需要",
                "当 EXPLAIN 的预估行数与实际行数差异很大时",
                "只有在服务器重启后才需要"
            ],
            answer: 2,
            rationale: "PostgreSQL 文档：当预估行数与实际行数差异很大（如 rows=100 est vs rows=50000 actual）时，说明统计信息过时，需运行 ANALYZE 更新。"
        },
        {
            id: "bp-w2-1-q9",
            question: "为什么现代编译器生成的代码可能导致火焰图不完整？",
            options: [
                "编译器优化导致代码运行太快",
                "帧指针省略优化导致堆栈采样不完整",
                "编译器不支持性能分析",
                "优化后的代码无法被采样"
            ],
            answer: 1,
            rationale: "Brendan Gregg 指出：现代编译器默认省略帧指针优化（frame pointer omission），导致堆栈采样不完整。Java 需添加 -XX:+PreserveFramePointer 参数。"
        },
        {
            id: "bp-w2-1-q10",
            question: "PostgreSQL 的 Bitmap Heap Scan 和直接 Index Scan 有什么区别？",
            options: [
                "Bitmap Heap Scan 更慢",
                "Bitmap Heap Scan 适合返回多行的查询，先收集行位置再批量访问表",
                "Index Scan 只能用于主键",
                "两者完全相同"
            ],
            answer: 1,
            rationale: "PostgreSQL 文档：Bitmap Heap Scan 适合返回多行的查询，先用 Bitmap Index Scan 收集满足条件的行位置，再批量访问表页面，减少随机 I/O。"
        },
        {
            id: "bp-w2-1-q11",
            question: "MySQL 8.0.14+ 的 log_slow_extra 参数启用后会记录哪些额外信息？",
            options: [
                "只记录 SQL 语句文本",
                "Thread_id、Bytes_received/sent、Read_key、Sort_rows 等详细统计",
                "只记录执行时间",
                "只记录锁等待时间"
            ],
            answer: 1,
            rationale: "MySQL 文档：log_slow_extra 启用后记录 Thread_id、Errno、Bytes_received/sent、Read_first/key/next、Sort_rows 等详细执行统计信息。"
        },
        {
            id: "bp-w2-1-q12",
            question: "PostgreSQL EXPLAIN (BUFFERS) 输出中 shared hit=92 read=5 代表什么？",
            options: [
                "92 次磁盘读取，5 次缓存命中",
                "92 次缓存命中，5 次磁盘读取",
                "总共读取 97 个页面",
                "92% 命中率，5% 未命中率"
            ],
            answer: 1,
            rationale: "PostgreSQL 文档：shared hit 表示在共享缓冲区（buffer cache）命中的页面数，read 表示需要从磁盘读取的页面数。hit 越高说明缓存效果越好。"
        }
    ],
    "bp-w2-2": [
        {
            id: "bp-w2-2-q1",
            question: "AWS Builders' Library 建议如何选择超时值？",
            options: [
                "使用下游服务的平均响应时间",
                "Choose an acceptable rate of false timeouts, then look at the corresponding latency percentile",
                "固定使用 30 秒超时",
                "不设置超时，让请求自然完成"
            ],
            answer: 1,
            rationale: "AWS 建议：'choose an acceptable rate of false timeouts (such as 0.1%). Then, we look at the corresponding latency percentile'——如接受 0.1% 误判，参考 P99.9。"
        },
        {
            id: "bp-w2-2-q2",
            question: "AWS 为什么建议在重试中使用指数退避？",
            options: [
                "减少代码复杂度",
                "Increase time between retries to maintain balanced backend load",
                "加快重试速度",
                "减少网络带宽使用"
            ],
            answer: 1,
            rationale: "AWS 建议：'Increase time between retries to maintain balanced backend load'——逐步增加重试间隔，防止雪崩效应压垮已经过载的系统。"
        },
        {
            id: "bp-w2-2-q3",
            question: "什么是抖动（Jitter），为什么在重试中需要它？",
            options: [
                "网络延迟的波动",
                "Random amount of time before making or retrying a request——随机化重试时间",
                "服务器负载的波动",
                "CPU 使用率的变化"
            ],
            answer: 1,
            rationale: "AWS 文档：抖动是'random amount of time before making or retrying a request'——随机化重试时间分散负载，避免多客户端同时重试压垮系统。"
        },
        {
            id: "bp-w2-2-q4",
            question: "AWS 对 API 幂等性设计的建议是什么？",
            options: [
                "所有 API 都应该避免幂等",
                "Design APIs to be idempotent when possible, allowing safe retries",
                "只有 GET 请求需要幂等",
                "幂等性会降低性能，应该避免"
            ],
            answer: 1,
            rationale: "AWS 文档强调：'Design APIs to be idempotent when possible, allowing safe retries'——幂等设计允许安全重试，非幂等操作需要特殊处理。"
        },
        {
            id: "bp-w2-2-q5",
            question: "Little's Law 的公式 L = λ × W 中，L、λ、W 分别代表什么？",
            options: [
                "延迟、吞吐量、等待时间",
                "系统中的平均请求数、到达率、平均响应时间",
                "负载、延迟、宽度",
                "长度、速率、权重"
            ],
            answer: 1,
            rationale: "Little's Law：L（系统中的平均请求数）= λ（到达率/吞吐量）× W（平均响应时间）。这是排队理论的基础公式。"
        },
        {
            id: "bp-w2-2-q6",
            question: "如何使用 Little's Law 判断负载测试工具是否成为瓶颈？",
            options: [
                "查看 CPU 使用率",
                "如果实际 TPS 远低于 Little's Law 计算值，说明测试工具受限",
                "查看内存使用量",
                "查看网络带宽"
            ],
            answer: 1,
            rationale: "如果 10 线程、200ms 响应时间应该产生 50 TPS，但实际只有 5 TPS，说明不符合 Little's Law——测试工具本身成为瓶颈。"
        },
        {
            id: "bp-w2-2-q7",
            question: "Nginx 速率限制使用什么算法控制请求流量？",
            options: [
                "Token Bucket（令牌桶）",
                "Leaky Bucket（漏桶）",
                "滑动窗口",
                "固定窗口"
            ],
            answer: 1,
            rationale: "Nginx 文档：速率限制使用漏桶算法（leaky bucket）控制请求流量，请求以固定速率流出，超出的请求排队或拒绝。"
        },
        {
            id: "bp-w2-2-q8",
            question: "Nginx 的 limit_req_zone 参数 zone=mylimit:10m 中，10m 可以存储多少 IP 地址状态？",
            options: [
                "约 1,600 个",
                "约 16,000 个",
                "约 160,000 个",
                "约 1,600,000 个"
            ],
            answer: 2,
            rationale: "Nginx 文档：'State information for about 16,000 IP addresses takes 1 megabyte'——1MB 存储约 16,000 个 IP，10MB 可存储约 160,000 个。"
        },
        {
            id: "bp-w2-2-q9",
            question: "Nginx 的 burst 参数起什么作用？",
            options: [
                "设置最大并发连接数",
                "允许请求排队等待处理，队列大小为 burst 值",
                "设置每秒最大请求数",
                "设置超时时间"
            ],
            answer: 1,
            rationale: "Nginx 文档：burst 参数定义请求队列大小。'A request that arrives sooner than the rate allows is put in a queue'——超出速率的请求排队等待。"
        },
        {
            id: "bp-w2-2-q10",
            question: "Nginx 的 nodelay 参数与 burst 配合使用时有什么效果？",
            options: [
                "禁用 burst 功能",
                "排队请求立即转发而不延迟，同时仍然执行速率限制",
                "增加 burst 队列大小",
                "减少响应延迟"
            ],
            answer: 1,
            rationale: "Nginx 文档：'nodelay forwards queued requests immediately instead of spacing them out'——排队请求立即转发而不人为延迟，但仍然执行速率限制。"
        },
        {
            id: "bp-w2-2-q11",
            question: "分布式系统中超时层级应该如何配置？",
            options: [
                "所有服务使用相同超时值",
                "下游服务超时应小于上游，层层递减留出处理时间",
                "上游服务超时应小于下游",
                "只有最外层需要设置超时"
            ],
            answer: 1,
            rationale: "分布式系统中超时需层层递减：如网关 30s → 服务 A 25s → 服务 B 20s → 数据库 15s，确保下游超时小于上游，留出处理和传输时间。"
        },
        {
            id: "bp-w2-2-q12",
            question: "Nginx 的 limit_req zone=ip burst=12 delay=8 配置意味着什么？",
            options: [
                "最多允许 12 个请求，8 秒后超时",
                "前 8 个突发请求立即处理，第 9-12 个请求按速率排队，超过 12 个拒绝",
                "每 8 秒允许 12 个请求",
                "延迟 8 秒后开始限速"
            ],
            answer: 1,
            rationale: "Nginx 文档：delay 参数指定多少个 burst 请求不延迟处理。burst=12 delay=8 表示前 8 个突发请求立即处理，第 9-12 个按速率排队。"
        }
    ]
}
