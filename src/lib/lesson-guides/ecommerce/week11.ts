import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "w11-1": {
        lessonId: "w11-1",
        background: [
            "【Core Web Vitals】Google 定义三个核心用户体验指标：LCP（Largest Contentful Paint）衡量加载速度，目标 2.5 秒内；INP（Interaction to Next Paint）衡量交互响应，目标 200ms 内；CLS（Cumulative Layout Shift）衡量视觉稳定性，目标 0.1 以下。",
            "【Next.js 优化策略】Next.js 提供多种内置优化：Image 组件自动优化图片尺寸和格式、Font 优化减少字体加载阻塞、预取（Prefetching）和预渲染（Prerendering）加速导航、Server Components 减少客户端 JavaScript。",
            "【Lighthouse 审计】Lighthouse 是开源自动化工具，审计四个维度：Performance（性能）、Accessibility（可访问性）、SEO（搜索优化）、Best Practices（最佳实践），提供具体优化建议。",
            "【测量方法】Web Vitals 测量分两类：Field（真实用户数据）通过 Chrome User Experience Report、PageSpeed Insights 收集；Lab（实验室数据）通过 Chrome DevTools、Lighthouse 测试。建议以第 75 百分位数据评估性能。",
            "【客户端与服务端组件】Next.js App Router 区分 Server Components 和 Client Components，服务端组件减少 JavaScript 打包体积，客户端组件处理交互逻辑，合理划分可显著提升性能。"
        ],
        keyDifficulties: [
            "【LCP 优化】LCP 受多因素影响：服务器响应时间、资源加载阻塞、客户端渲染延迟、资源加载优先级。需要优化首屏关键路径，使用 priority 属性标记关键图片。",
            "【JavaScript 打包优化】代码分割（Code Splitting）通过动态导入 `dynamic()` 实现按需加载，减少首次加载的 JavaScript 体积。关键是识别哪些模块可以延迟加载。",
            "【图片优化策略】Next.js Image 组件自动处理：响应式尺寸（srcset）、现代格式（WebP/AVIF）、懒加载、占位符模糊效果。但需要正确配置 sizes 属性以匹配布局。",
            "【缓存策略】Next.js 支持多层缓存：静态生成（SSG）、增量静态再生（ISR）、客户端缓存。电商商品页适合 ISR，购物车适合客户端状态管理。"
        ],
        handsOnPath: [
            "使用 Lighthouse 审计电商首页，记录初始 Core Web Vitals 分数作为基准。",
            "配置 Next.js Image 组件优化商品图片：设置 sizes、priority、placeholder 属性。",
            "实现代码分割：将非首屏组件（如评论、推荐）使用 dynamic() 动态导入。",
            "优化字体加载：使用 next/font 配置字体子集（subset）和显示策略（display: swap）。",
            "配置 CDN 静态资源：将图片、CSS、JS 部署到 CDN，配置适当的 Cache-Control 头。",
            "使用 React Profiler 和 Chrome DevTools 分析组件渲染性能，识别重渲染问题。",
            "实现 ISR 策略：商品详情页配置 revalidate 参数实现增量静态再生。"
        ],
        selfCheck: [
            "Core Web Vitals 的三个指标分别衡量什么？各自的目标值是多少？",
            "Next.js Image 组件相比原生 img 标签有哪些优化？",
            "什么时候应该使用 SSG、SSR、ISR？电商各页面如何选择？",
            "如何使用 Chrome DevTools 分析 LCP 元素？",
            "代码分割对首屏性能有什么影响？如何确定分割边界？",
            "为什么应该使用第 75 百分位数据评估 Web Vitals？"
        ],
        extensions: [
            "研究 Vercel Analytics 和 Google Search Console 的真实用户性能数据分析。",
            "探索 Partytown 将第三方脚本移到 Web Worker 的方案。",
            "学习 React Server Components 的流式渲染（Streaming）优化长任务。",
            "了解 Edge Runtime 在全球边缘节点执行代码的性能优势。",
            "研究 Chrome 的 Long Animation Frames API 替代 Long Tasks API 的趋势。"
        ],
        sourceUrls: [
            "https://nextjs.org/docs/app/building-your-application/optimizing",
            "https://web.dev/vitals/",
            "https://developer.chrome.com/docs/lighthouse/overview/"
        ]
    },
    "w11-2": {
        lessonId: "w11-2",
        background: [
            "【EXPLAIN 命令】PostgreSQL EXPLAIN 显示查询执行计划，输出包含四个关键指标：启动成本（输出开始前的时间）、总成本（假设运行完成的总成本）、行数（预估输出行数）、行宽（平均宽度字节）。",
            "【成本计算公式】PostgreSQL 查询成本 = (磁盘页读取数 x seq_page_cost) + (扫描行数 x cpu_tuple_cost)，默认 seq_page_cost=1.0, cpu_tuple_cost=0.01，成本是相对值用于比较执行计划优劣。",
            "【扫描类型】常见扫描类型包括：Sequential Scan（顺序扫描）遍历全表、Index Scan（索引扫描）适合少量行查询、Bitmap Index Scan（位图索引扫描）两步先查索引再按物理顺序读取。",
            "【连接方式】PostgreSQL 支持三种连接：Nested Loop（嵌套循环）对外表每行扫描内表、Hash Join（哈希连接）构建哈希表探测匹配、Merge Join（合并连接）要求输入按连接键排序。",
            "【PgBouncer 连接池】PgBouncer 是轻量级 PostgreSQL 连接池，支持 LDAP 认证、TLS 连接、SCRAM 认证，减少连接开销，提升高并发场景性能。"
        ],
        keyDifficulties: [
            "【EXPLAIN ANALYZE】EXPLAIN ANALYZE 实际执行查询并显示真实数据：actual time（真实执行时间）、rows（实际返回行数）、loops（节点执行次数）、Buffers（缓冲区命中/读取统计）。对比预估与实际可发现统计信息偏差。",
            "【索引选择】规划器根据成本估算选择索引：少量行查询（<5%）倾向 Index Scan，中等量行倾向 Bitmap Index Scan，大量行倾向 Sequential Scan。索引维护有开销，需要权衡读写比例。",
            "【N+1 问题】ORM 常见的 N+1 问题：查询 N 个订单后，再为每个订单单独查询订单项，导致 N+1 次查询。解决方案：使用 JOIN、预加载（Eager Loading）、DataLoader 批量查询。",
            "【统计信息更新】PostgreSQL 规划器依赖统计信息选择执行计划，表数据变化后应执行 ANALYZE 更新统计。大量数据导入后尤其重要，否则可能选择次优计划。"
        ],
        handsOnPath: [
            "使用 EXPLAIN 分析电商核心查询：商品列表、订单查询、用户信息获取。",
            "使用 EXPLAIN ANALYZE 对比预估行数与实际行数，识别统计信息偏差。",
            "为高频查询创建合适索引：商品分类、订单状态、用户 ID 等字段。",
            "使用 pg_stat_statements 扩展统计慢查询，识别优化目标。",
            "配置 PgBouncer 连接池，测试不同连接池模式（session/transaction/statement）。",
            "使用 Prisma 或 TypeORM 的日志功能，检测 N+1 查询问题。",
            "为大表实现分区策略：按时间分区订单表，按分类分区商品表。"
        ],
        selfCheck: [
            "EXPLAIN 输出的 cost 数值代表什么？如何解读两个成本值？",
            "什么情况下 PostgreSQL 会选择 Sequential Scan 而不是 Index Scan？",
            "如何识别和解决 N+1 查询问题？",
            "EXPLAIN ANALYZE 与 EXPLAIN 的区别是什么？为什么要用事务回滚包裹 DML 的 ANALYZE？",
            "PgBouncer 的三种连接池模式各适用于什么场景？",
            "索引过多对写入性能有什么影响？如何权衡？"
        ],
        extensions: [
            "研究 PostgreSQL 的并行查询（Parallel Query）配置和适用场景。",
            "学习 pg_stat_statements 和 auto_explain 扩展进行查询性能监控。",
            "探索 PostgreSQL 14+ 的增量排序（Incremental Sort）优化。",
            "了解 TimescaleDB 对时序数据的优化，适用于订单时间线查询。",
            "研究 Citus 分布式 PostgreSQL 的分片策略。"
        ],
        sourceUrls: [
            "https://www.postgresql.org/docs/current/performance-tips.html",
            "https://www.postgresql.org/docs/current/using-explain.html",
            "https://www.pgbouncer.org/"
        ]
    },
    "w11-3": {
        lessonId: "w11-3",
        background: [
            "【缓存策略模式】主流缓存策略包括：Cache-Aside（缓存旁路）先查缓存再查数据库、Write-Through（写透）同时写缓存和数据库、Write-Behind（写回）异步写数据库。电商通常使用 Cache-Aside 模式。",
            "【Redis 数据结构】Redis 提供多种数据结构：String 用于简单缓存和计数器、Hash 用于对象存储（如用户信息）、List 用于消息队列、Set 用于去重和标签、Sorted Set 用于排行榜和计时器。",
            "【分布式锁】Redis 分布式锁使用 SET NX + 过期时间实现互斥，释放锁需要验证持有者身份，推荐使用 Lua 脚本保证原子性。Redlock 算法解决单点故障问题。",
            "【缓存失效难题】Phil Karlton 名言：'计算机科学只有两个难题：缓存失效和命名'。缓存一致性是分布式系统的核心挑战，需要选择合适的失效策略。",
            "【发布订阅】Redis Pub/Sub 支持消息广播，适合缓存失效通知、实时事件推送。但不保证消息持久化，需要消息可靠性时应使用 Redis Streams。"
        ],
        keyDifficulties: [
            "【缓存穿透】查询不存在的数据，每次都穿透到数据库。解决方案：缓存空值（设置短 TTL）、布隆过滤器预判、接口层参数校验。恶意攻击需要结合限流。",
            "【缓存击穿】热点 Key 过期瞬间，大量请求同时打到数据库。解决方案：互斥锁（只允许一个请求重建缓存）、逻辑过期（永不过期但标记逻辑过期时间）、热点 Key 永不过期。",
            "【缓存雪崩】大量 Key 同时过期，导致数据库压力骤增。解决方案：过期时间加随机值、多级缓存（本地缓存 + Redis）、熔断降级保护数据库。",
            "【延迟双删】更新数据时先删缓存、再更新数据库、延迟后再删缓存。应对并发读取旧数据写入缓存的场景，延迟时间需要大于主从同步延迟。"
        ],
        handsOnPath: [
            "使用 Redis Hash 存储商品信息，实现商品详情缓存。",
            "实现 Cache-Aside 模式：查询时先读缓存，未命中则读数据库并写入缓存。",
            "使用 Redis SETNX + Lua 脚本实现分布式锁，保护库存扣减操作。",
            "配置缓存过期时间：热点商品 1 小时，普通商品 24 小时，加随机偏移防雪崩。",
            "实现布隆过滤器防止缓存穿透，使用 RedisBloom 模块或自建。",
            "使用 Redis Pub/Sub 实现缓存失效广播，同步多实例本地缓存。",
            "监控 Redis 性能：使用 INFO 命令查看内存使用、命中率、连接数。"
        ],
        selfCheck: [
            "Cache-Aside 模式的读写流程是什么？有什么潜在问题？",
            "缓存穿透、缓存击穿、缓存雪崩的区别是什么？各自如何解决？",
            "为什么分布式锁释放时需要验证持有者身份？",
            "延迟双删的延迟时间应该如何确定？",
            "Redis Hash 相比 String 存储对象有什么优势？",
            "布隆过滤器为什么可能有假阳性但不会有假阴性？"
        ],
        extensions: [
            "研究 Redis Cluster 的分片和主从复制机制。",
            "学习 Redis Streams 实现可靠消息队列。",
            "探索本地缓存（Caffeine、Guava Cache）与 Redis 的多级缓存架构。",
            "了解 Redis 7.0 的 Function 和 Library 特性。",
            "研究缓存预热策略：定时任务、启动时加载、懒加载结合主动刷新。"
        ],
        sourceUrls: [
            "https://redis.io/docs/latest/develop/use/patterns/",
            "https://blog.bytebytego.com/p/a-crash-course-in-caching-part-1",
            "https://martinfowler.com/bliki/TwoHardThings.html"
        ]
    },
    "w11-4": {
        lessonId: "w11-4",
        background: [
            "【限流算法】五种常见限流算法：Fixed Window Counter（固定窗口计数器）、Sliding Window Log（滑动窗口日志）、Sliding Window Counter（滑动窗口计数器）、Token Bucket（令牌桶）、Leaky Bucket（漏桶）。",
            "【限流三要素】所有限流实现包含三个核心要素：Limit（时间窗口内最大请求数）、Window（时间窗口大小）、Identifier（调用者标识，如用户 ID、IP 地址）。",
            "【限流响应】超过阈值的请求三种处理方式：Blocking（返回 HTTP 429 拒绝）、Throttling（降速延迟处理）、Shaping（接受但降低优先级）。",
            "【熔断器模式】熔断器三种状态：Closed（正常运行，请求通过）、Open（故障熔断，请求立即失败）、Half-Open（试探恢复，允许少量请求测试）。失败累积到阈值触发熔断。",
            "【Resilience4j】Resilience4j 是轻量级容错库，提供四个核心模块：CircuitBreaker（熔断器）、Bulkhead（舱壁隔离）、RateLimiter（限流器）、Retry（重试）。支持装饰器模式组合使用。"
        ],
        keyDifficulties: [
            "【令牌桶 vs 漏桶】令牌桶允许突发流量（桶中有令牌时可立即处理），适合电商秒杀；漏桶以固定速率处理请求，适合需要平滑流量的场景。两者都可以用 Redis 实现。",
            "【熔断阈值设定】熔断阈值需要权衡：太敏感会导致误熔断影响可用性，太迟钝无法及时保护系统。通常配置失败率阈值（如 50%）和最小请求数（如 10 次）。",
            "【分布式限流】单机限流使用本地计数器，分布式限流需要 Redis 等共享存储。需要考虑网络延迟和时钟同步问题，滑动窗口算法比固定窗口更精确。",
            "【舱壁隔离】Bulkhead 模式隔离不同服务的资源（线程池、信号量），防止一个慢服务耗尽所有资源影响其他服务。电商系统中支付服务应该与商品服务隔离。"
        ],
        handsOnPath: [
            "使用 Redis INCR + EXPIRE 实现固定窗口限流器。",
            "使用 Redis Sorted Set 实现滑动窗口限流，记录请求时间戳。",
            "实现令牌桶算法：Redis 存储令牌数量和上次填充时间，请求时计算可用令牌。",
            "集成 Resilience4j 实现熔断器，配置失败率阈值和等待时间。",
            "为支付 API 配置舱壁隔离，限制并发调用数量。",
            "实现优雅降级：当商品推荐服务熔断时，返回热门商品兜底。",
            "配置 API 监控：记录限流触发次数、熔断状态变化、请求延迟分布。"
        ],
        selfCheck: [
            "令牌桶和漏桶算法的区别是什么？各适用于什么场景？",
            "熔断器的三个状态及其转换条件是什么？",
            "为什么需要分布式限流？单机限流有什么问题？",
            "舱壁隔离模式解决什么问题？如何确定隔离边界？",
            "HTTP 429 状态码的含义是什么？应该返回什么响应头？",
            "如何测试熔断器是否正常工作？"
        ],
        extensions: [
            "研究 Envoy、Kong 等 API Gateway 的内置限流功能。",
            "学习 Sentinel（阿里开源）的流量控制和熔断降级功能。",
            "探索自适应限流：根据系统负载动态调整限流阈值。",
            "了解 gRPC 的截止时间（Deadline）和超时传播机制。",
            "研究 Netflix Hystrix（已停止维护）到 Resilience4j 的演进历史。"
        ],
        sourceUrls: [
            "https://blog.bytebytego.com/p/rate-limiting-fundamentals",
            "https://martinfowler.com/bliki/CircuitBreaker.html",
            "https://resilience4j.readme.io/"
        ]
    }
}

export const week11Quizzes: Record<string, QuizQuestion[]> = {
    "w11-1": [
        {
            id: "w11-1-q1",
            question: "Core Web Vitals 中衡量页面加载速度的指标是什么？",
            options: ["CLS", "INP", "LCP", "FCP"],
            answer: 2,
            rationale: "LCP（Largest Contentful Paint）衡量最大内容元素的渲染时间，目标是 2.5 秒内完成，是加载速度的核心指标。"
        },
        {
            id: "w11-1-q2",
            question: "INP（Interaction to Next Paint）的目标值是多少？",
            options: ["100ms", "200ms", "500ms", "1000ms"],
            answer: 1,
            rationale: "INP 衡量页面对用户交互的响应速度，Google 建议目标值为 200 毫秒或更少。"
        },
        {
            id: "w11-1-q3",
            question: "Next.js 中用于动态导入组件实现代码分割的函数是？",
            options: ["import()", "require()", "dynamic()", "lazy()"],
            answer: 2,
            rationale: "Next.js 使用 dynamic() 函数实现组件的动态导入，支持服务端渲染的代码分割。"
        },
        {
            id: "w11-1-q4",
            question: "Lighthouse 审计的四个维度不包括以下哪项？",
            options: ["Performance", "Security", "Accessibility", "SEO"],
            answer: 1,
            rationale: "Lighthouse 审计四个维度：Performance、Accessibility、SEO、Best Practices。Security 不是独立审计维度。"
        },
        {
            id: "w11-1-q5",
            question: "Web Vitals 建议使用哪个百分位数据评估性能？",
            options: ["P50", "P75", "P90", "P99"],
            answer: 1,
            rationale: "Google 建议使用第 75 百分位（P75）数据评估 Web Vitals，确保大多数用户获得良好体验。"
        },
        {
            id: "w11-1-q6",
            question: "CLS（Cumulative Layout Shift）的目标值应该低于多少？",
            options: ["0.01", "0.05", "0.1", "0.5"],
            answer: 2,
            rationale: "CLS 衡量视觉稳定性，Google 建议目标值低于 0.1，避免页面元素意外移动影响用户体验。"
        },
        {
            id: "w11-1-q7",
            question: "Next.js Image 组件自动提供以下哪项优化？",
            options: ["数据库缓存", "响应式尺寸和现代图片格式", "服务端渲染", "API 限流"],
            answer: 1,
            rationale: "Next.js Image 组件自动优化：响应式尺寸（srcset）、现代格式（WebP/AVIF）、懒加载、占位符模糊效果。"
        },
        {
            id: "w11-1-q8",
            question: "哪种渲染策略最适合电商商品详情页？",
            options: ["SSR（服务端渲染）", "CSR（客户端渲染）", "ISR（增量静态再生）", "完全静态生成"],
            answer: 2,
            rationale: "ISR 适合商品详情页：静态生成保证性能，定期重新验证保证内容更新，兼顾 SEO 和动态内容。"
        },
        {
            id: "w11-1-q9",
            question: "Field 测量和 Lab 测量的区别是什么？",
            options: ["Field 是模拟数据，Lab 是真实用户数据", "Field 是真实用户数据，Lab 是测试环境数据", "两者相同", "Field 只测量服务端，Lab 测量客户端"],
            answer: 1,
            rationale: "Field 测量收集真实用户数据（RUM），Lab 测量在测试环境中模拟，两者互补用于全面性能分析。"
        },
        {
            id: "w11-1-q10",
            question: "Next.js next/font 的 display: swap 配置的作用是？",
            options: ["隐藏文本直到字体加载", "使用系统字体显示文本，字体加载后替换", "阻止页面渲染", "自动选择最优字体"],
            answer: 1,
            rationale: "display: swap 让浏览器先用系统字体显示文本，自定义字体加载后再替换，避免 FOIT（Flash of Invisible Text）。"
        },
        {
            id: "w11-1-q11",
            question: "以下哪个工具可以获取真实用户的 Core Web Vitals 数据？",
            options: ["Lighthouse", "Chrome DevTools", "PageSpeed Insights", "Jest"],
            answer: 2,
            rationale: "PageSpeed Insights 结合 Chrome User Experience Report 提供真实用户数据，Lighthouse 和 DevTools 提供 Lab 数据。"
        },
        {
            id: "w11-1-q12",
            question: "Next.js Server Components 相比 Client Components 的主要优势是？",
            options: ["支持更多 API", "减少客户端 JavaScript 体积", "更好的 SEO", "更快的数据库查询"],
            answer: 1,
            rationale: "Server Components 在服务端渲染，不包含在客户端 JavaScript 包中，显著减少传输体积和解析时间。"
        }
    ],
    "w11-2": [
        {
            id: "w11-2-q1",
            question: "PostgreSQL EXPLAIN 输出的 cost 数值代表什么？",
            options: ["实际执行时间（毫秒）", "预估的相对成本（用于比较执行计划）", "内存使用量", "CPU 周期数"],
            answer: 1,
            rationale: "EXPLAIN 的 cost 是规划器估算的相对成本，用于比较不同执行计划的优劣，不是实际时间或资源消耗。"
        },
        {
            id: "w11-2-q2",
            question: "EXPLAIN ANALYZE 与 EXPLAIN 的主要区别是？",
            options: ["ANALYZE 只显示估算值", "ANALYZE 实际执行查询并显示真实数据", "ANALYZE 不显示执行计划", "两者完全相同"],
            answer: 1,
            rationale: "EXPLAIN ANALYZE 实际执行查询，显示 actual time、真实行数、loops 等实际执行数据，可与估算值对比。"
        },
        {
            id: "w11-2-q3",
            question: "以下哪种扫描类型适合返回少量行的查询？",
            options: ["Sequential Scan", "Index Scan", "Parallel Scan", "Full Table Scan"],
            answer: 1,
            rationale: "Index Scan 直接通过索引定位少量行，避免扫描全表。当返回行数少于表的约 5% 时，规划器倾向选择 Index Scan。"
        },
        {
            id: "w11-2-q4",
            question: "Bitmap Index Scan 的特点是？",
            options: ["直接返回数据", "先查索引获取位图，再按物理顺序读取数据", "只用于主键查询", "不使用索引"],
            answer: 1,
            rationale: "Bitmap Index Scan 是两步过程：先用索引构建行位置的位图，再按磁盘物理顺序批量读取，减少随机 I/O。"
        },
        {
            id: "w11-2-q5",
            question: "N+1 查询问题的解决方案不包括以下哪项？",
            options: ["使用 JOIN", "预加载（Eager Loading）", "增加更多索引", "DataLoader 批量查询"],
            answer: 2,
            rationale: "N+1 问题需要改变查询方式：使用 JOIN、预加载、批量查询。仅增加索引不能解决多次查询的问题。"
        },
        {
            id: "w11-2-q6",
            question: "PostgreSQL 的 Hash Join 连接方式的特点是？",
            options: ["要求输入数据排序", "在内存中构建哈希表进行匹配", "逐行嵌套循环", "只支持等值连接"],
            answer: 1,
            rationale: "Hash Join 将较小表加载到内存构建哈希表，然后扫描较大表进行哈希探测匹配，适合大数据集连接。"
        },
        {
            id: "w11-2-q7",
            question: "什么时候应该执行 ANALYZE 命令？",
            options: ["每次查询前", "大量数据导入后更新统计信息", "数据库启动时", "从不需要手动执行"],
            answer: 1,
            rationale: "大量数据变化后应执行 ANALYZE 更新统计信息，否则规划器可能基于过时统计选择次优执行计划。"
        },
        {
            id: "w11-2-q8",
            question: "PgBouncer 的 transaction 连接池模式的特点是？",
            options: ["每个会话独占连接", "事务结束后连接归还池中", "每条语句后归还连接", "不支持事务"],
            answer: 1,
            rationale: "transaction 模式在事务结束后归还连接，适合大多数 Web 应用。session 模式独占连接，statement 模式每语句归还。"
        },
        {
            id: "w11-2-q9",
            question: "EXPLAIN 输出中的 loops 字段表示什么？",
            options: ["循环优化次数", "该节点被执行的次数", "嵌套深度", "并行度"],
            answer: 1,
            rationale: "loops 表示执行计划节点被执行的次数，在 Nested Loop 中内表节点的 loops 等于外表返回的行数。"
        },
        {
            id: "w11-2-q10",
            question: "以下哪个命令用于分析 PostgreSQL 慢查询？",
            options: ["VACUUM", "pg_stat_statements", "REINDEX", "CLUSTER"],
            answer: 1,
            rationale: "pg_stat_statements 扩展统计查询执行次数、总时间、平均时间等，是识别和分析慢查询的重要工具。"
        },
        {
            id: "w11-2-q11",
            question: "为什么索引过多会影响写入性能？",
            options: ["索引占用内存", "每次写入需要同时更新所有索引", "索引会锁表", "索引导致读取变慢"],
            answer: 1,
            rationale: "INSERT/UPDATE/DELETE 操作需要同时维护所有相关索引，索引越多写入开销越大，需要权衡读写比例。"
        },
        {
            id: "w11-2-q12",
            question: "PostgreSQL 增量排序（Incremental Sort）的优势是？",
            options: ["只能用于主键", "在部分排序的数据上执行，支持提前返回结果", "比普通排序慢", "不支持 LIMIT"],
            answer: 1,
            rationale: "增量排序利用已有的部分排序（如索引），在小批次内完成剩余排序，配合 LIMIT 可以提前返回结果。"
        }
    ],
    "w11-3": [
        {
            id: "w11-3-q1",
            question: "Cache-Aside 模式的读取流程是？",
            options: ["直接读数据库", "先读缓存，未命中则读数据库并写入缓存", "同时读缓存和数据库", "只读缓存"],
            answer: 1,
            rationale: "Cache-Aside 读取流程：先查缓存，命中则返回；未命中则查数据库，将结果写入缓存后返回。"
        },
        {
            id: "w11-3-q2",
            question: "缓存穿透是指什么问题？",
            options: ["热点 Key 过期", "查询不存在的数据，请求穿透到数据库", "大量 Key 同时过期", "缓存与数据库数据不一致"],
            answer: 1,
            rationale: "缓存穿透指查询一定不存在的数据，缓存无法命中，每次请求都穿透到数据库，可能被恶意利用。"
        },
        {
            id: "w11-3-q3",
            question: "防止缓存穿透的方案不包括以下哪项？",
            options: ["缓存空值", "布隆过滤器", "增加缓存 TTL", "接口参数校验"],
            answer: 2,
            rationale: "防止缓存穿透：缓存空值、布隆过滤器预判、参数校验。增加 TTL 不能解决查询不存在数据的问题。"
        },
        {
            id: "w11-3-q4",
            question: "缓存击穿与缓存穿透的区别是？",
            options: ["完全相同", "击穿是热点 Key 过期，穿透是查询不存在的数据", "击穿比穿透严重", "穿透是热点问题"],
            answer: 1,
            rationale: "缓存击穿：热点 Key 过期瞬间大量请求打到数据库。缓存穿透：查询不存在的数据每次都查数据库。"
        },
        {
            id: "w11-3-q5",
            question: "Redis 分布式锁释放时为什么需要验证持有者？",
            options: ["提高性能", "防止释放其他客户端持有的锁", "Redis 强制要求", "减少网络请求"],
            answer: 1,
            rationale: "锁可能因超时被自动释放后被其他客户端获取，此时原客户端释放锁会错误删除他人的锁，需要验证身份。"
        },
        {
            id: "w11-3-q6",
            question: "延迟双删策略的延迟时间应该大于什么？",
            options: ["缓存 TTL", "数据库查询时间", "主从同步延迟", "网络往返时间"],
            answer: 2,
            rationale: "延迟时间需要大于主从同步延迟，确保从库更新后再删除缓存，避免并发读取旧数据写入缓存。"
        },
        {
            id: "w11-3-q7",
            question: "Redis Hash 相比 String 存储对象的优势是？",
            options: ["占用更少内存", "支持部分字段读写，节省网络带宽", "查询更快", "支持事务"],
            answer: 1,
            rationale: "Hash 支持 HGET/HSET 读写单个字段，不需要序列化/反序列化整个对象，节省网络带宽和处理开销。"
        },
        {
            id: "w11-3-q8",
            question: "防止缓存雪崩的方案包括以下哪项？",
            options: ["过期时间加随机值", "使用更大的缓存", "禁用缓存过期", "只使用本地缓存"],
            answer: 0,
            rationale: "缓存雪崩防护：过期时间加随机偏移避免同时过期、多级缓存、熔断降级保护数据库。"
        },
        {
            id: "w11-3-q9",
            question: "布隆过滤器的特点是？",
            options: ["可能有假阳性，不会有假阴性", "可能有假阴性，不会有假阳性", "完全精确", "只支持字符串"],
            answer: 0,
            rationale: "布隆过滤器可能误判存在（假阳性），但判断不存在时一定准确（无假阴性），适合快速过滤不存在的数据。"
        },
        {
            id: "w11-3-q10",
            question: "Phil Karlton 关于缓存的名言提到哪两个难题？",
            options: ["性能和安全", "缓存失效和命名", "一致性和可用性", "读取和写入"],
            answer: 1,
            rationale: "'计算机科学只有两个难题：缓存失效和命名'——强调缓存一致性是分布式系统的核心挑战。"
        },
        {
            id: "w11-3-q11",
            question: "Write-Through 缓存策略的特点是？",
            options: ["只写缓存", "同时写缓存和数据库", "异步写数据库", "先写数据库再删缓存"],
            answer: 1,
            rationale: "Write-Through 同步写入缓存和数据库，保证强一致性，但写入延迟较高。"
        },
        {
            id: "w11-3-q12",
            question: "Redis Pub/Sub 的局限性是？",
            options: ["不支持多订阅者", "消息不持久化，离线订阅者收不到消息", "只支持字符串", "性能低"],
            answer: 1,
            rationale: "Pub/Sub 是即时消息模式，消息不持久化，订阅者必须在线才能收到。需要可靠消息时应使用 Redis Streams。"
        }
    ],
    "w11-4": [
        {
            id: "w11-4-q1",
            question: "令牌桶算法与漏桶算法的主要区别是？",
            options: ["令牌桶更复杂", "令牌桶允许突发流量，漏桶以固定速率处理", "漏桶允许突发流量", "两者完全相同"],
            answer: 1,
            rationale: "令牌桶桶中有令牌时可立即处理突发请求；漏桶以恒定速率漏出请求，平滑流量。"
        },
        {
            id: "w11-4-q2",
            question: "熔断器的三种状态是？",
            options: ["On、Off、Standby", "Closed、Open、Half-Open", "Active、Inactive、Recovery", "Normal、Error、Retry"],
            answer: 1,
            rationale: "熔断器三态：Closed（正常通过）、Open（熔断拒绝）、Half-Open（试探恢复）。"
        },
        {
            id: "w11-4-q3",
            question: "HTTP 429 状态码表示什么？",
            options: ["服务器错误", "请求过多，触发限流", "未授权", "资源不存在"],
            answer: 1,
            rationale: "HTTP 429 Too Many Requests 表示客户端发送请求过于频繁，触发限流策略。"
        },
        {
            id: "w11-4-q4",
            question: "限流的三要素不包括以下哪项？",
            options: ["Limit（最大请求数）", "Window（时间窗口）", "Identifier（调用者标识）", "Priority（优先级）"],
            answer: 3,
            rationale: "限流三要素：Limit（时间窗口内最大请求数）、Window（时间窗口大小）、Identifier（调用者标识如用户 ID、IP）。"
        },
        {
            id: "w11-4-q5",
            question: "Resilience4j 的四个核心模块不包括以下哪项？",
            options: ["CircuitBreaker", "Bulkhead", "Cache", "RateLimiter"],
            answer: 2,
            rationale: "Resilience4j 四个核心模块：CircuitBreaker（熔断器）、Bulkhead（舱壁）、RateLimiter（限流器）、Retry（重试）。"
        },
        {
            id: "w11-4-q6",
            question: "熔断器从 Open 状态转换到 Half-Open 状态的条件是？",
            options: ["失败率下降", "等待超时时间后", "手动重置", "收到成功响应"],
            answer: 1,
            rationale: "熔断器 Open 状态等待配置的 reset timeout 后自动进入 Half-Open，尝试少量请求测试服务是否恢复。"
        },
        {
            id: "w11-4-q7",
            question: "舱壁（Bulkhead）模式的作用是？",
            options: ["提高性能", "隔离资源，防止故障级联", "加密通信", "压缩数据"],
            answer: 1,
            rationale: "Bulkhead 隔离不同服务的资源（线程池、信号量），防止一个服务故障耗尽资源影响其他服务。"
        },
        {
            id: "w11-4-q8",
            question: "固定窗口计数器限流的缺点是？",
            options: ["实现复杂", "窗口边界可能出现突发（两个窗口交界处理论上可达 2 倍限制）", "无法统计请求数", "不支持分布式"],
            answer: 1,
            rationale: "固定窗口在边界处可能出现突发：如果请求集中在窗口末尾和下一窗口开头，短时间内可能达到 2 倍限制。"
        },
        {
            id: "w11-4-q9",
            question: "超过限流阈值的请求，Throttling 处理方式是？",
            options: ["立即拒绝", "延迟/降速处理", "丢弃但不通知", "转发到其他服务"],
            answer: 1,
            rationale: "Throttling 降速处理超限请求，不是立即拒绝，而是放入队列延迟处理或降低处理速度。"
        },
        {
            id: "w11-4-q10",
            question: "分布式限流相比单机限流需要额外考虑什么问题？",
            options: ["算法选择", "共享存储和时钟同步", "日志记录", "用户认证"],
            answer: 1,
            rationale: "分布式限流需要 Redis 等共享存储保证全局计数，还需要考虑网络延迟和时钟同步对精度的影响。"
        },
        {
            id: "w11-4-q11",
            question: "电商秒杀场景更适合使用哪种限流算法？",
            options: ["漏桶", "令牌桶", "固定窗口", "滑动日志"],
            answer: 1,
            rationale: "令牌桶允许突发流量，适合秒杀开始时的瞬时高并发；漏桶平滑流量会导致延迟，不适合秒杀。"
        },
        {
            id: "w11-4-q12",
            question: "熔断器的监控要点不包括以下哪项？",
            options: ["状态变化日志", "触发熔断的告警", "调用次数统计", "用户登录信息"],
            answer: 3,
            rationale: "熔断器监控要点：记录状态变化、配置告警通知、统计调用成功/失败次数。用户登录信息与熔断器无关。"
        }
    ]
}
