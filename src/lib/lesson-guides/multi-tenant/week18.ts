import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week18Guides: Record<string, LessonGuide> = {
    "w18-1": {
        lessonId: "w18-1",
        background: [
            "【性能基线】Google SRE 强调建立性能基线，识别正常范围和异常。",
            "【租户性能分析】Azure 多租户性能指南涵盖租户级别的性能监控和分析。",
            "【APM 工具】Datadog APM 支持多租户应用的性能监控和分析。",
            "【热点识别】识别消耗资源异常的热点租户，进行针对性优化。",
        ],
        keyDifficulties: [
            "【基线建立】不同租户可能有不同的正常基线。",
            "【异常检测】区分正常波动和真正的性能问题。",
            "【热点处理】如何处理热点租户又不影响其体验。",
            "【根因定位】复杂系统中的性能问题根因难以定位。",
        ],
        handsOnPath: [
            "建立租户性能基线",
            "配置 APM 多租户监控",
            "实现热点租户检测告警",
            "设计性能问题根因分析流程",
        ],
        selfCheck: [
            "性能基线如何建立？",
            "热点租户如何识别？",
            "APM 工具如何帮助性能分析？",
        ],
        extensions: [
            "研究 New Relic 的性能分析",
            "了解 Dynatrace 的 AI 根因分析",
        ],
        sourceUrls: [
            "https://sre.google/sre-book/monitoring-distributed-systems/",
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/performance",
            "https://www.datadoghq.com/blog/apm-for-multi-tenant-applications/",
        ],
    },
    "w18-2": {
        lessonId: "w18-2",
        background: [
            "【索引优化】Use The Index, Luke 是数据库索引优化的权威指南。",
            "【连接池】HikariCP 是高性能 Java 连接池，连接池大小影响并发能力。",
            "【查询性能】Azure SQL Query Performance Insight 提供查询性能分析和建议。",
            "【多租户查询】带租户过滤的查询需要正确的索引支持。",
        ],
        keyDifficulties: [
            "【索引设计】多租户表的索引需要包含 tenant_id。",
            "【连接池共享】多租户共享连接池的公平性。",
            "【慢查询】识别和优化慢查询。",
            "【锁竞争】高并发场景下的锁竞争问题。",
        ],
        handsOnPath: [
            "设计多租户索引策略",
            "配置 HikariCP 连接池",
            "实现慢查询监控和优化",
            "分析和解决锁竞争",
        ],
        selfCheck: [
            "多租户表的索引设计原则是什么？",
            "连接池大小如何确定？",
            "慢查询如何识别和优化？",
        ],
        extensions: [
            "研究 PostgreSQL EXPLAIN ANALYZE",
            "了解 MySQL Query Optimizer",
        ],
        sourceUrls: [
            "https://use-the-index-luke.com/",
            "https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing",
            "https://docs.microsoft.com/en-us/azure/azure-sql/database/query-performance-insight-use",
        ],
    },
    "w18-3": {
        lessonId: "w18-3",
        background: [
            "【Spring Batch】Spring Batch 支持大批量数据处理，适合租户数据批量操作。",
            "【Reactive 编程】Project Reactor 提供异步非阻塞的编程模型，提高资源利用率。",
            "【预热策略】AWS Lambda 冷启动优化包括预置并发和代码优化。",
            "【异步处理】将耗时操作异步化避免阻塞请求线程。",
        ],
        keyDifficulties: [
            "【批量大小】批量操作的大小影响性能和内存。",
            "【背压处理】异步流中的背压控制。",
            "【预热成本】预热增加成本但减少延迟。",
            "【错误处理】异步操作的错误处理更复杂。",
        ],
        handsOnPath: [
            "实现 Spring Batch 多租户作业",
            "配置 Reactive 异步处理",
            "设计 Lambda 预热策略",
            "实现异步操作错误处理",
        ],
        selfCheck: [
            "批量处理的最佳实践是什么？",
            "Reactive 编程的优势是什么？",
            "预热策略的权衡是什么？",
        ],
        extensions: [
            "研究 Apache Flink 流处理",
            "了解 Virtual Threads 的应用",
        ],
        sourceUrls: [
            "https://spring.io/projects/spring-batch",
            "https://projectreactor.io/docs/core/release/reference/",
            "https://aws.amazon.com/blogs/compute/operating-lambda-performance-optimization-part-1/",
        ],
    },
    "w18-4": {
        lessonId: "w18-4",
        background: [
            "【缓存模式】Redis 提供多种缓存模式，包括 Cache-Aside、Write-Through、Write-Behind。",
            "【缓存失效】缓存失效是计算机科学的两大难题之一，多租户场景更复杂。",
            "【多级缓存】Facebook TAO 使用多级缓存提高效率，本地缓存 + 分布式缓存。",
            "【缓存预加载】预加载热点数据减少冷启动影响。",
        ],
        keyDifficulties: [
            "【失效一致性】确保缓存与数据库一致。",
            "【租户隔离】缓存键包含租户标识。",
            "【预加载策略】识别并预加载热点数据。",
            "【缓存穿透】防止大量无效查询穿透缓存。",
        ],
        handsOnPath: [
            "实现多租户缓存预加载",
            "配置多级缓存架构",
            "设计缓存失效广播",
            "实现缓存穿透防护",
        ],
        selfCheck: [
            "缓存预加载的策略是什么？",
            "多级缓存的优势是什么？",
            "缓存失效如何保证一致性？",
        ],
        extensions: [
            "研究 Caffeine 本地缓存",
            "了解 Redis 集群缓存策略",
        ],
        sourceUrls: [
            "https://redis.io/docs/latest/develop/use/patterns/",
            "https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
            "https://engineering.fb.com/2013/06/25/core-data/tao-the-power-of-the-graph/",
        ],
    },
}

export const week18Quizzes: Record<string, QuizQuestion[]> = {
    "w18-1": [
        { id: "w18-1-q1", question: "性能基线的作用是什么？", options: ["增加性能", "定义正常范围，识别异常", "降低成本", "简化架构"], answer: 1, rationale: "基线帮助区分正常和异常。" },
        { id: "w18-1-q2", question: "租户级性能监控应该包含什么？", options: ["只有延迟", "延迟、吞吐量、错误率、资源使用", "只有错误", "只有资源"], answer: 1, rationale: "多维度监控全面了解租户性能。" },
        { id: "w18-1-q3", question: "热点租户的定义是什么？", options: ["最小租户", "消耗资源异常高的租户", "最新租户", "付费最高"], answer: 1, rationale: "热点租户资源消耗显著高于平均。" },
        { id: "w18-1-q4", question: "APM 工具的作用是什么？", options: ["代码管理", "应用性能监控和分析", "部署管理", "配置管理"], answer: 1, rationale: "APM 提供应用级别的性能洞察。" },
        { id: "w18-1-q5", question: "Datadog APM 如何支持多租户？", options: ["不支持", "通过 Tag 区分租户进行分析", "自动隔离", "独立部署"], answer: 1, rationale: "使用 Tag 可以按租户过滤分析。" },
        { id: "w18-1-q6", question: "性能异常检测的方法有哪些？", options: ["只有阈值", "静态阈值、动态基线、异常检测算法", "只有人工", "不检测"], answer: 1, rationale: "多种方法组合检测异常。" },
        { id: "w18-1-q7", question: "热点租户处理的策略是什么？", options: ["忽略", "隔离、限流、沟通优化方案", "删除", "升级"], answer: 1, rationale: "需要多种策略处理热点。" },
        { id: "w18-1-q8", question: "根因分析的挑战是什么？", options: ["太简单", "分布式系统中问题可能跨多个服务", "无挑战", "自动完成"], answer: 1, rationale: "复杂系统的根因定位困难。" },
        { id: "w18-1-q9", question: "不同租户基线不同的原因是什么？", options: ["无原因", "业务模式和使用模式不同", "技术限制", "随机"], answer: 1, rationale: "不同租户有不同的正常使用模式。" },
        { id: "w18-1-q10", question: "New Relic 的特点是什么？", options: ["开源免费", "全栈可观测性平台", "只支持 Java", "只支持监控"], answer: 1, rationale: "New Relic 提供全面的可观测性。" },
        { id: "w18-1-q11", question: "Dynatrace AI 根因分析的优势是什么？", options: ["最便宜", "自动识别问题根因，减少人工分析", "最简单", "开源"], answer: 1, rationale: "AI 自动化加速根因定位。" },
        { id: "w18-1-q12", question: "性能优化的优先级应该如何确定？", options: ["随机", "基于影响范围和改进潜力", "最难的优先", "最简单优先"], answer: 1, rationale: "应该优先处理高影响的问题。" },
    ],
    "w18-2": [
        { id: "w18-2-q1", question: "多租户表索引的关键是什么？", options: ["不需要索引", "索引需要包含 tenant_id", "只索引主键", "全表索引"], answer: 1, rationale: "租户过滤查询需要 tenant_id 索引。" },
        { id: "w18-2-q2", question: "HikariCP 连接池大小的建议公式是什么？", options: ["越大越好", "connections = (core_count * 2) + effective_spindle_count", "固定 100", "越小越好"], answer: 1, rationale: "连接池大小应该根据资源计算。" },
        { id: "w18-2-q3", question: "慢查询的定义标准是什么？", options: ["固定 1 秒", "根据业务需求定义阈值", "固定 5 秒", "不定义"], answer: 1, rationale: "慢查询阈值应该根据业务确定。" },
        { id: "w18-2-q4", question: "索引设计的原则是什么？", options: ["越多越好", "根据查询模式设计，避免过多索引", "越少越好", "不需要索引"], answer: 1, rationale: "索引需要根据查询模式优化。" },
        { id: "w18-2-q5", question: "连接池共享的公平性如何保证？", options: ["不保证", "通过超时和配额限制单租户占用", "独立连接池", "无限连接"], answer: 1, rationale: "需要限制单租户连接池占用。" },
        { id: "w18-2-q6", question: "EXPLAIN ANALYZE 的作用是什么？", options: ["执行查询", "分析查询执行计划和实际性能", "创建索引", "删除数据"], answer: 1, rationale: "EXPLAIN ANALYZE 展示查询执行细节。" },
        { id: "w18-2-q7", question: "锁竞争的表现是什么？", options: ["性能提升", "等待时间增加，吞吐量下降", "内存增加", "存储增加"], answer: 1, rationale: "锁竞争导致性能下降。" },
        { id: "w18-2-q8", question: "复合索引的字段顺序重要吗？", options: ["不重要", "非常重要，应该把高选择性字段放前面", "随机", "倒序"], answer: 1, rationale: "字段顺序影响索引效率。" },
        { id: "w18-2-q9", question: "连接泄漏的后果是什么？", options: ["无后果", "连接池耗尽，新请求无法获取连接", "性能提升", "内存减少"], answer: 1, rationale: "连接泄漏会导致资源耗尽。" },
        { id: "w18-2-q10", question: "Query Optimizer 的作用是什么？", options: ["执行查询", "选择最优的查询执行计划", "创建表", "插入数据"], answer: 1, rationale: "优化器选择高效的执行计划。" },
        { id: "w18-2-q11", question: "避免锁竞争的方法是什么？", options: ["增加锁", "减少锁范围、使用乐观锁、读写分离", "增加等待", "禁用并发"], answer: 1, rationale: "多种方法减少锁竞争。" },
        { id: "w18-2-q12", question: "Use The Index, Luke 的核心建议是什么？", options: ["不用索引", "根据查询设计索引，理解执行计划", "用全表扫描", "用最多索引"], answer: 1, rationale: "理解索引原理是优化的基础。" },
    ],
    "w18-3": [
        { id: "w18-3-q1", question: "Spring Batch 的适用场景是什么？", options: ["实时处理", "大批量数据处理", "单条处理", "流处理"], answer: 1, rationale: "Spring Batch 适合批量作业。" },
        { id: "w18-3-q2", question: "Reactive 编程的核心优势是什么？", options: ["同步阻塞", "异步非阻塞，提高资源利用率", "更简单", "更快"], answer: 1, rationale: "Reactive 通过非阻塞提高效率。" },
        { id: "w18-3-q3", question: "Lambda 冷启动的影响是什么？", options: ["性能提升", "首次调用延迟增加", "成本降低", "无影响"], answer: 1, rationale: "冷启动导致首次请求变慢。" },
        { id: "w18-3-q4", question: "预置并发的作用是什么？", options: ["增加成本", "保持函数实例预热，减少冷启动", "减少实例", "增加延迟"], answer: 1, rationale: "预置并发避免冷启动延迟。" },
        { id: "w18-3-q5", question: "背压的含义是什么？", options: ["压力测试", "消费者处理不过来时的流量控制", "增加压力", "无控制"], answer: 1, rationale: "背压是流量控制机制。" },
        { id: "w18-3-q6", question: "批量大小如何选择？", options: ["越大越好", "平衡内存、性能和事务大小", "越小越好", "固定值"], answer: 1, rationale: "批量大小需要权衡多个因素。" },
        { id: "w18-3-q7", question: "异步操作错误处理的挑战是什么？", options: ["无挑战", "错误发生时调用栈不可见", "自动处理", "同步处理"], answer: 1, rationale: "异步错误处理比同步更复杂。" },
        { id: "w18-3-q8", question: "Project Reactor 的核心类型是什么？", options: ["只有 Mono", "Mono 和 Flux", "只有 Flux", "Stream"], answer: 1, rationale: "Mono 表示 0-1 个元素，Flux 表示 0-N 个。" },
        { id: "w18-3-q9", question: "预热策略的成本权衡是什么？", options: ["无成本", "预热增加成本但减少延迟", "减少成本", "成本不变"], answer: 1, rationale: "预热是成本和延迟的权衡。" },
        { id: "w18-3-q10", question: "Apache Flink 的特点是什么？", options: ["批处理", "流批一体的处理引擎", "只有存储", "只有调度"], answer: 1, rationale: "Flink 支持流处理和批处理。" },
        { id: "w18-3-q11", question: "Virtual Threads 的优势是什么？", options: ["更复杂", "轻量级线程，简化并发编程", "更重", "更慢"], answer: 1, rationale: "Virtual Threads 简化高并发编程。" },
        { id: "w18-3-q12", question: "异步化的适用场景是什么？", options: ["所有场景", "I/O 密集、耗时操作", "CPU 密集", "简单计算"], answer: 1, rationale: "异步适合 I/O 密集型操作。" },
    ],
    "w18-4": [
        { id: "w18-4-q1", question: "Cache-Aside 模式的工作流程是什么？", options: ["先写缓存", "先查缓存，未命中则查数据库并写入缓存", "只用缓存", "只用数据库"], answer: 1, rationale: "Cache-Aside 是常用的缓存模式。" },
        { id: "w18-4-q2", question: "缓存预加载的目的是什么？", options: ["增加延迟", "减少冷启动时的缓存未命中", "清空缓存", "删除数据"], answer: 1, rationale: "预加载减少冷启动影响。" },
        { id: "w18-4-q3", question: "多级缓存的优势是什么？", options: ["增加复杂度", "本地缓存减少网络开销，分布式缓存提供共享", "减少命中率", "增加延迟"], answer: 1, rationale: "多级缓存结合两者优势。" },
        { id: "w18-4-q4", question: "Facebook TAO 是什么？", options: ["社交网络", "高效的图数据缓存系统", "数据库", "消息队列"], answer: 1, rationale: "TAO 是 Facebook 的图缓存系统。" },
        { id: "w18-4-q5", question: "缓存失效的挑战是什么？", options: ["太简单", "保证缓存与数据库一致性", "性能太好", "成本太低"], answer: 1, rationale: "缓存失效是著名的难题。" },
        { id: "w18-4-q6", question: "缓存穿透的定义是什么？", options: ["命中太多", "查询不存在的数据导致请求穿透到数据库", "缓存太大", "延迟太低"], answer: 1, rationale: "穿透使缓存失去保护作用。" },
        { id: "w18-4-q7", question: "缓存穿透的防护方法是什么？", options: ["增加缓存", "布隆过滤器、空值缓存、限流", "增加数据库", "删除缓存"], answer: 1, rationale: "多种方法组合防护穿透。" },
        { id: "w18-4-q8", question: "租户缓存隔离的方法是什么？", options: ["共享键", "缓存键包含 tenant_id 前缀", "不隔离", "物理隔离"], answer: 1, rationale: "键前缀确保逻辑隔离。" },
        { id: "w18-4-q9", question: "缓存失效广播的作用是什么？", options: ["增加延迟", "通知所有节点失效特定缓存", "增加命中", "减少存储"], answer: 1, rationale: "广播确保分布式环境一致失效。" },
        { id: "w18-4-q10", question: "Caffeine 缓存的特点是什么？", options: ["分布式", "高性能本地缓存", "远程缓存", "文件缓存"], answer: 1, rationale: "Caffeine 是优秀的本地缓存库。" },
        { id: "w18-4-q11", question: "热点数据识别的方法是什么？", options: ["随机", "分析访问频率和模式", "全部预加载", "不识别"], answer: 1, rationale: "基于访问模式识别热点。" },
        { id: "w18-4-q12", question: "Write-Behind 模式的风险是什么？", options: ["无风险", "写入延迟可能导致数据丢失", "性能差", "一致性好"], answer: 1, rationale: "异步写入有数据丢失风险。" },
    ],
}
