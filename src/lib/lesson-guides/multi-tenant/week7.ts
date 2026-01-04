import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "w7-1": {
        lessonId: "w7-1",
        background: [
            "【租户前缀】缓存键包含租户标识，如 tenant:{id}:user:{userId}，防止跨租户访问。",
            "【键命名规范】Redis 推荐使用冒号分隔的命名约定，便于管理和监控。",
            "【版本控制】缓存键可以包含版本号，支持缓存结构变更时的平滑过渡。",
            "【键空间隔离】不同租户的键在逻辑上完全隔离，互不可见。",
        ],
        keyDifficulties: [
            "【键冲突】确保所有缓存操作都正确添加租户前缀。",
            "【遗漏风险】忘记添加租户前缀会导致跨租户数据泄露。",
            "【键长度】过长的键会增加内存开销和网络传输成本。",
            "【失效策略】租户级别的缓存失效需要批量处理。",
        ],
        handsOnPath: [
            "设计多租户缓存键命名规范",
            "实现自动添加租户前缀的缓存工具类",
            "配置按租户前缀的键扫描和清理",
            "实现租户级缓存版本控制",
        ],
        selfCheck: [
            "多租户缓存键的命名规范是什么？",
            "如何防止遗漏租户前缀？",
            "租户缓存批量失效如何实现？",
        ],
        extensions: [
            "研究 Redis Cluster 的键分布策略",
            "了解缓存键的哈希槽分布",
        ],
        sourceUrls: [
            "https://redis.io/docs/latest/develop/use/keyspace/",
            "https://aws.amazon.com/blogs/database/best-practices-for-amazon-elasticache-for-redis/",
            "https://martinfowler.com/bliki/TwoHardThings.html",
        ],
    },
    "w7-2": {
        lessonId: "w7-2",
        background: [
            "【逻辑隔离】通过键前缀实现隔离，所有租户共享 Redis 实例。",
            "【物理隔离】不同租户使用不同 Redis 实例或数据库编号。",
            "【ACL】Redis 6+ 支持 ACL，可以限制用户只能访问特定键模式。",
            "【ElastiCache】AWS ElastiCache 提供 Multi-AZ 和加密等企业特性。",
        ],
        keyDifficulties: [
            "【隔离级别选择】逻辑隔离成本低但安全性较弱，物理隔离相反。",
            "【ACL 配置】正确配置 ACL 规则确保键访问隔离。",
            "【资源共享】共享实例时一个租户的操作可能影响其他租户。",
            "【监控区分】需要按租户监控缓存使用情况。",
        ],
        handsOnPath: [
            "配置 Redis ACL 限制租户键访问",
            "设计租户缓存隔离策略",
            "实现按租户的缓存监控",
            "评估逻辑隔离 vs 物理隔离的权衡",
        ],
        selfCheck: [
            "逻辑隔离和物理隔离各有什么优劣？",
            "Redis ACL 如何实现键级别访问控制？",
            "如何监控不同租户的缓存使用？",
        ],
        extensions: [
            "研究 Redis Enterprise 的多租户特性",
            "了解 KeyDB 的多线程优势",
        ],
        sourceUrls: [
            "https://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/",
            "https://aws.amazon.com/blogs/database/isolating-saas-tenant-data-using-amazon-elasticache-for-redis/",
            "https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
        ],
    },
    "w7-3": {
        lessonId: "w7-3",
        background: [
            "【内存配额】为每个租户设置缓存内存使用上限。",
            "【命中率监控】按租户监控缓存命中率，识别异常模式。",
            "【公平驱逐】避免大租户挤占小租户的缓存空间。",
            "【LRU 策略】Least Recently Used 驱逐策略，但需要租户感知。",
        ],
        keyDifficulties: [
            "【配额执行】Redis 原生不支持租户级配额，需要应用层实现。",
            "【公平性】全局 LRU 可能导致大租户占用过多空间。",
            "【监控开销】细粒度的租户监控会增加开销。",
            "【动态调整】配额需要根据租户层级动态调整。",
        ],
        handsOnPath: [
            "实现应用层租户缓存配额控制",
            "配置租户级缓存命中率监控",
            "设计租户感知的驱逐策略",
            "实现配额超限告警",
        ],
        selfCheck: [
            "如何实现租户级缓存配额？",
            "全局 LRU 在多租户场景的问题是什么？",
            "如何监控租户缓存命中率？",
        ],
        extensions: [
            "研究 Redis 内存分析工具",
            "了解 Memcached 的多租户方案",
        ],
        sourceUrls: [
            "https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/memory-optimization/",
            "https://aws.amazon.com/blogs/database/monitoring-best-practices-with-amazon-elasticache-for-redis-using-amazon-cloudwatch/",
            "https://redis.io/docs/latest/develop/reference/eviction/",
        ],
    },
    "w7-4": {
        lessonId: "w7-4",
        background: [
            "【Redis Cluster】分布式 Redis 部署，数据自动分片到多个节点。",
            "【热点键】某些键访问频率极高，可能导致单节点过载。",
            "【缓存穿透】查询不存在的数据导致请求直接打到数据库。",
            "【布隆过滤器】高效判断元素是否存在，用于防止缓存穿透。",
        ],
        keyDifficulties: [
            "【热点分散】热点键需要复制或拆分到多个节点。",
            "【跨槽操作】Redis Cluster 不支持跨槽的原子操作。",
            "【租户热点】大租户的热点数据可能影响整个集群。",
            "【穿透防护】需要多层防护避免缓存穿透。",
        ],
        handsOnPath: [
            "部署 Redis Cluster 多租户环境",
            "实现热点键检测和处理",
            "配置布隆过滤器防止缓存穿透",
            "设计跨租户热点隔离策略",
        ],
        selfCheck: [
            "Redis Cluster 如何分布数据？",
            "热点键问题如何解决？",
            "布隆过滤器如何防止缓存穿透？",
        ],
        extensions: [
            "研究 Redis 读写分离架构",
            "了解本地缓存 + Redis 的多级缓存",
        ],
        sourceUrls: [
            "https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/",
            "https://redis.io/docs/latest/commands/object-freq/",
            "https://redis.io/docs/latest/develop/data-types/probabilistic/bloom-filter/",
        ],
    },
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "w7-1": [
        { id: "w7-1-q1", question: "多租户缓存键的最佳命名方式是什么？", options: ["只用 ID", "包含租户标识前缀，如 tenant:{id}:...", "随机生成", "使用 UUID"], answer: 1, rationale: "租户前缀确保键空间隔离，防止跨租户访问。" },
        { id: "w7-1-q2", question: "Redis 推荐的键命名分隔符是什么？", options: ["下划线", "冒号", "点号", "短横线"], answer: 1, rationale: "Redis 惯例使用冒号分隔键的不同部分。" },
        { id: "w7-1-q3", question: "缓存键版本控制的作用是什么？", options: ["加密", "支持缓存结构变更时的平滑过渡", "压缩", "备份"], answer: 1, rationale: "版本号允许新旧缓存结构共存，便于迁移。" },
        { id: "w7-1-q4", question: "遗漏租户前缀会导致什么问题？", options: ["性能下降", "跨租户数据泄露", "内存不足", "连接失败"], answer: 1, rationale: "没有前缀的键可能被其他租户访问。" },
        { id: "w7-1-q5", question: "过长的缓存键有什么问题？", options: ["无问题", "增加内存和网络开销", "更安全", "性能更好"], answer: 1, rationale: "长键占用更多内存和带宽。" },
        { id: "w7-1-q6", question: "租户级缓存批量失效如何实现？", options: ["逐个删除", "使用 SCAN 命令配合租户前缀匹配", "删除整个库", "不支持"], answer: 1, rationale: "SCAN 可以按模式匹配键，批量操作。" },
        { id: "w7-1-q7", question: "如何防止开发者遗漏租户前缀？", options: ["文档说明", "封装缓存工具类自动添加前缀", "代码审查", "培训"], answer: 1, rationale: "封装工具类可以在底层自动处理前缀。" },
        { id: "w7-1-q8", question: "Redis SCAN 命令的特点是什么？", options: ["阻塞", "非阻塞的渐进式迭代", "一次返回所有", "不支持模式"], answer: 1, rationale: "SCAN 是非阻塞的游标迭代，适合大量键操作。" },
        { id: "w7-1-q9", question: "缓存键失效策略有哪些？", options: ["只有过期", "TTL、主动删除、版本更新", "只有删除", "不支持失效"], answer: 1, rationale: "多种策略组合使用确保缓存一致性。" },
        { id: "w7-1-q10", question: "Redis Cluster 中键如何分布？", options: ["随机", "根据键的哈希槽分布到不同节点", "按时间", "按大小"], answer: 1, rationale: "Redis Cluster 使用 16384 个哈希槽分布键。" },
        { id: "w7-1-q11", question: "缓存键规范化的目的是什么？", options: ["美观", "确保相同数据使用相同键，避免重复缓存", "压缩", "加密"], answer: 1, rationale: "规范化确保一致的键生成，避免冗余。" },
        { id: "w7-1-q12", question: "租户删除时缓存应该如何处理？", options: ["不处理", "清理该租户的所有缓存键", "保留缓存", "等待过期"], answer: 1, rationale: "租户删除时应清理其所有缓存数据。" },
    ],
    "w7-2": [
        { id: "w7-2-q1", question: "缓存逻辑隔离的实现方式是什么？", options: ["独立实例", "通过键前缀区分租户", "独立集群", "独立机房"], answer: 1, rationale: "逻辑隔离通过键命名规范区分不同租户。" },
        { id: "w7-2-q2", question: "Redis ACL 可以限制什么？", options: ["只能限制命令", "可以限制用户只能访问特定键模式", "只能限制连接", "不能限制键"], answer: 1, rationale: "ACL 支持按键模式限制访问权限。" },
        { id: "w7-2-q3", question: "物理隔离相比逻辑隔离的优势是什么？", options: ["成本低", "更强的安全性和资源隔离", "更简单", "性能更好"], answer: 1, rationale: "物理隔离提供更强的安全和资源保证。" },
        { id: "w7-2-q4", question: "Redis 数据库编号隔离的局限是什么？", options: ["无局限", "数据库数量有限，且 Cluster 模式只支持 DB 0", "更安全", "更快"], answer: 1, rationale: "Redis 默认 16 个数据库，Cluster 只用 DB 0。" },
        { id: "w7-2-q5", question: "ElastiCache 提供什么企业特性？", options: ["只有缓存", "Multi-AZ、加密、备份等", "只有监控", "只有日志"], answer: 1, rationale: "ElastiCache 提供高可用、安全等企业能力。" },
        { id: "w7-2-q6", question: "共享 Redis 实例的风险是什么？", options: ["无风险", "一个租户的操作可能影响其他租户", "更安全", "更便宜"], answer: 1, rationale: "共享资源可能导致相互影响。" },
        { id: "w7-2-q7", question: "如何按租户监控缓存使用？", options: ["不监控", "通过键前缀统计或单独的监控键", "全局监控", "抽样监控"], answer: 1, rationale: "可以通过前缀统计或维护租户使用量的监控键。" },
        { id: "w7-2-q8", question: "Redis Enterprise 的多租户特性包括什么？", options: ["无特性", "资源隔离、访问控制、独立配额", "只有监控", "只有备份"], answer: 1, rationale: "Redis Enterprise 提供原生的多租户支持。" },
        { id: "w7-2-q9", question: "高合规租户应该使用什么隔离级别？", options: ["逻辑隔离", "物理隔离（独立实例）", "无隔离", "共享隔离"], answer: 1, rationale: "高合规场景需要更强的物理隔离。" },
        { id: "w7-2-q10", question: "KeyDB 相比 Redis 的优势是什么？", options: ["更安全", "多线程架构，更好的性能", "更便宜", "更简单"], answer: 1, rationale: "KeyDB 是多线程的 Redis 兼容数据库。" },
        { id: "w7-2-q11", question: "Cache-Aside 模式的特点是什么？", options: ["只写缓存", "应用负责读写缓存和数据库", "只读缓存", "自动同步"], answer: 1, rationale: "应用先查缓存，未命中则查数据库并写入缓存。" },
        { id: "w7-2-q12", question: "ACL 配置错误的风险是什么？", options: ["无风险", "可能导致租户访问其他租户数据", "性能下降", "连接失败"], answer: 1, rationale: "错误的 ACL 可能破坏隔离性。" },
    ],
    "w7-3": [
        { id: "w7-3-q1", question: "租户级缓存配额的作用是什么？", options: ["增加成本", "限制单租户的缓存使用，确保公平", "提高性能", "简化架构"], answer: 1, rationale: "配额防止单租户过度占用共享资源。" },
        { id: "w7-3-q2", question: "Redis 原生是否支持租户级配额？", options: ["支持", "不支持，需要应用层实现", "部分支持", "Enterprise 支持"], answer: 1, rationale: "Redis 开源版不支持，需要应用层控制。" },
        { id: "w7-3-q3", question: "全局 LRU 在多租户场景的问题是什么？", options: ["太慢", "大租户可能挤占小租户的缓存空间", "太快", "不驱逐"], answer: 1, rationale: "全局 LRU 不考虑租户公平性。" },
        { id: "w7-3-q4", question: "缓存命中率监控的意义是什么？", options: ["无意义", "识别缓存效率和异常访问模式", "增加开销", "减少缓存"], answer: 1, rationale: "命中率反映缓存有效性，低命中率需要优化。" },
        { id: "w7-3-q5", question: "如何实现租户感知的驱逐？", options: ["使用全局 LRU", "维护租户使用量，超配额时优先驱逐", "不驱逐", "随机驱逐"], answer: 1, rationale: "需要跟踪租户使用量并在超配额时处理。" },
        { id: "w7-3-q6", question: "配额超限应该如何处理？", options: ["忽略", "告警、驱逐旧数据或拒绝新数据", "扩容", "降级"], answer: 1, rationale: "需要有策略处理超配额情况。" },
        { id: "w7-3-q7", question: "Redis MEMORY USAGE 命令的作用是什么？", options: ["查看总内存", "查看特定键的内存占用", "释放内存", "压缩内存"], answer: 1, rationale: "可以查看单个键占用的内存大小。" },
        { id: "w7-3-q8", question: "租户配额应该如何设置？", options: ["固定值", "根据租户层级和合同动态配置", "无限制", "最小值"], answer: 1, rationale: "配额应与租户付费层级关联。" },
        { id: "w7-3-q9", question: "监控租户缓存使用的开销如何控制？", options: ["不监控", "采样或聚合统计减少开销", "全量监控", "增加资源"], answer: 1, rationale: "采样和聚合可以在精度和开销间平衡。" },
        { id: "w7-3-q10", question: "Memcached 多租户方案的特点是什么？", options: ["原生支持", "通常通过键前缀或多实例实现", "不支持", "自动隔离"], answer: 1, rationale: "Memcached 也需要类似的键前缀或实例隔离。" },
        { id: "w7-3-q11", question: "低命中率的可能原因是什么？", options: ["缓存太大", "缓存策略不当或数据访问模式变化", "网络太快", "内存太多"], answer: 1, rationale: "需要分析是缓存策略还是访问模式问题。" },
        { id: "w7-3-q12", question: "eviction policy 配置的作用是什么？", options: ["增加内存", "决定内存满时如何选择驱逐哪些键", "加密数据", "压缩数据"], answer: 1, rationale: "驱逐策略决定内存不足时的处理方式。" },
    ],
    "w7-4": [
        { id: "w7-4-q1", question: "Redis Cluster 的数据分布方式是什么？", options: ["随机", "基于键的哈希槽分布到多个节点", "按时间", "按大小"], answer: 1, rationale: "Redis Cluster 使用 16384 个哈希槽。" },
        { id: "w7-4-q2", question: "热点键问题指什么？", options: ["键太长", "某些键访问频率极高导致节点过载", "键太多", "键冲突"], answer: 1, rationale: "高频访问的键可能导致单节点成为瓶颈。" },
        { id: "w7-4-q3", question: "缓存穿透指什么问题？", options: ["缓存太大", "查询不存在的数据导致请求直接打到数据库", "缓存过期", "缓存命中"], answer: 1, rationale: "穿透使缓存失去保护作用，数据库压力增大。" },
        { id: "w7-4-q4", question: "布隆过滤器如何防止缓存穿透？", options: ["缓存数据", "快速判断数据是否可能存在", "加密请求", "压缩响应"], answer: 1, rationale: "布隆过滤器可以快速过滤掉不存在的键。" },
        { id: "w7-4-q5", question: "Redis Cluster 不支持什么操作？", options: ["单键操作", "跨槽的原子操作", "读操作", "写操作"], answer: 1, rationale: "跨槽操作需要特殊处理，不支持原子性。" },
        { id: "w7-4-q6", question: "如何处理热点键？", options: ["忽略", "本地缓存、键复制或分片", "删除键", "限制访问"], answer: 1, rationale: "可以通过本地缓存分散热点访问。" },
        { id: "w7-4-q7", question: "OBJECT FREQ 命令的作用是什么？", options: ["创建对象", "获取键的访问频率统计", "删除对象", "复制对象"], answer: 1, rationale: "可以用于识别热点键。" },
        { id: "w7-4-q8", question: "布隆过滤器的特点是什么？", options: ["无误判", "可能有假阳性，但无假阴性", "100% 准确", "占用大量内存"], answer: 1, rationale: "布隆过滤器可能误判存在，但不会误判不存在。" },
        { id: "w7-4-q9", question: "大租户热点如何隔离？", options: ["不隔离", "为大租户提供独立缓存资源", "限制访问", "删除数据"], answer: 1, rationale: "可以为大租户分配独立缓存避免影响他人。" },
        { id: "w7-4-q10", question: "多级缓存的作用是什么？", options: ["增加延迟", "本地缓存 + 分布式缓存减少网络开销", "减少命中", "增加成本"], answer: 1, rationale: "本地缓存减少对分布式缓存的访问。" },
        { id: "w7-4-q11", question: "Redis 读写分离的好处是什么？", options: ["增加写入", "从节点分担读压力", "减少数据", "简化架构"], answer: 1, rationale: "读写分离可以提高读取容量。" },
        { id: "w7-4-q12", question: "缓存穿透的多层防护包括什么？", options: ["只用缓存", "布隆过滤器 + 空值缓存 + 限流", "只用数据库", "不防护"], answer: 1, rationale: "多层防护提供更好的保护。" },
    ],
}
