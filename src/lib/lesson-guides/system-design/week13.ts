import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week13Guides: Record<string, LessonGuide> = {
    "w13-1": {
        lessonId: "w13-1",
        background: [
            "【Cache-Aside 模式】Microsoft 文档定义：'Load data on demand into a cache from a data store'。这是最常见的缓存模式——应用程序负责从数据存储加载数据到缓存，以及使缓存数据失效。缓存不直接与数据库交互。",
            "【Cache-Aside 读取流程】读取时先查缓存，命中则直接返回；未命中则从数据库加载，写入缓存后返回。这种'懒加载'策略只缓存实际被请求的数据，避免了预加载不必要的数据。",
            "【Read-Through 模式】缓存作为数据源的代理：应用只与缓存交互，缓存未命中时由缓存层自动从数据库加载。优势是简化应用代码，缺点是首次请求延迟较高。",
            "【Write-Through 模式】写操作同时更新缓存和数据库：'data is first written to the cache and then to the database'。保证缓存与数据库一致性，但写入延迟增加（需要两次写入）。",
            "【Write-Behind (Write-Back) 模式】写操作先更新缓存，异步批量写入数据库：'significantly improves write performance'。风险是缓存故障可能导致数据丢失。适合写密集且允许短暂不一致的场景。"
        ],
        keyDifficulties: [
            "【模式选择标准】没有最佳模式，只有最适合的模式。读多写少用 Cache-Aside/Read-Through；写多用 Write-Behind；强一致性要求用 Write-Through；简化开发用 Read-Through。",
            "【Cache-Aside 的一致性问题】并发场景下可能出现不一致：线程 A 读取旧值、线程 B 更新数据库并删除缓存、线程 A 将旧值写入缓存。需要配合延迟双删或设置较短 TTL 缓解。",
            "【Write-Behind 的数据丢失风险】异步写入期间如果缓存节点故障，未持久化的数据会丢失。需要权衡性能与数据安全性，或配合持久化队列使用。",
            "【Read-Through 冷启动问题】系统重启后缓存为空，所有请求都会穿透到数据库。需要配合缓存预热策略，在启动时主动加载热点数据。"
        ],
        handsOnPath: [
            "实现 Cache-Aside 模式：String value = cache.get(key); if (value == null) { value = db.query(key); cache.set(key, value, ttl); } return value;",
            "实现 Write-Through 模式：cache.set(key, value); db.update(key, value); // 两者在同一事务中",
            "实现 Write-Behind 模式：使用 Redis + 消息队列，写入 Redis 后发送消息，消费者批量写入数据库。",
            "配置 Spring Cache 的 Read-Through：使用 @Cacheable 注解，缓存未命中时自动调用方法并缓存结果。",
            "测试缓存穿透场景：关闭缓存，观察数据库 QPS 变化；开启缓存，对比性能差异。"
        ],
        selfCheck: [
            "Cache-Aside 模式的读写流程是什么？",
            "Read-Through 和 Cache-Aside 的区别是什么？",
            "Write-Through 和 Write-Behind 各自的优缺点是什么？",
            "在什么场景下应该选择 Write-Behind 模式？",
            "Cache-Aside 模式如何处理并发更新导致的不一致？"
        ],
        extensions: [
            "研究 Refresh-Ahead 模式：在数据过期前主动刷新。",
            "学习 Guava Cache 的 LoadingCache 实现 Read-Through。",
            "了解分布式缓存的多级架构（L1 本地缓存 + L2 分布式缓存）。",
            "研究 Facebook 的 TAO 缓存架构。"
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
            "https://codeahoy.com/2017/08/11/caching-strategies-and-how-to-choose-the-right-one/"
        ]
    },
    "w13-2": {
        lessonId: "w13-2",
        background: [
            "【缓存穿透定义】查询不存在的数据，缓存无法命中，请求直接打到数据库。恶意攻击者可以利用这一点发起大量无效请求，压垮数据库。",
            "【布隆过滤器原理】布隆过滤器是'space-efficient probabilistic data structure'，用于判断元素是否在集合中。特性：'false positive matches are possible, but false negatives are not'——可能误判存在，但不会误判不存在。",
            "【布隆过滤器结构】使用 m 位的位数组和 k 个哈希函数。添加元素时，k 个哈希函数计算位置并置 1；查询时，所有位置都为 1 则'可能存在'，任一位置为 0 则'一定不存在'。",
            "【缓存击穿定义】热点 key 在某一时刻过期，大量并发请求同时穿透到数据库。与缓存穿透不同，击穿是针对存在的热点数据。",
            "【缓存雪崩定义】大量缓存 key 同时过期，或缓存服务整体不可用，导致请求全部打到数据库。可能引发级联故障，数据库和整个系统崩溃。"
        ],
        keyDifficulties: [
            "【穿透防护策略】1) 布隆过滤器拦截不存在的 key；2) 空值缓存——将不存在的 key 也缓存为特殊值（如 NULL），设置较短 TTL；3) 参数校验——在入口处过滤非法请求。",
            "【击穿防护策略】1) 互斥锁（Mutex）——只允许一个线程查询数据库并更新缓存；2) 永不过期——热点数据不设置 TTL，由后台异步更新；3) 提前续期——在 TTL 还剩 1/3 时异步刷新。",
            "【雪崩防护策略】1) 过期时间加随机值——避免同时过期；2) 多级缓存——L1 本地缓存 + L2 分布式缓存；3) 熔断降级——数据库压力过大时返回降级数据；4) 缓存高可用——Redis Cluster/Sentinel。",
            "【布隆过滤器的误判率】误判率与位数组大小 m、哈希函数数量 k、元素数量 n 有关。公式：p ≈ (1 - e^(-kn/m))^k。m 越大、k 越优误判率越低，但空间和计算开销增加。"
        ],
        handsOnPath: [
            "使用 Guava 布隆过滤器：BloomFilter<String> filter = BloomFilter.create(Funnels.stringFunnel(Charset.defaultCharset()), expectedInsertions, fpp);",
            "使用 Redis 布隆过滤器：BF.RESERVE myfilter 0.01 1000000; BF.ADD myfilter item1; BF.EXISTS myfilter item1;",
            "实现缓存击穿互斥锁：使用 Redis SETNX 获取锁，只有获得锁的线程查询数据库，其他线程等待或返回旧值。",
            "实现空值缓存：if (dbValue == null) { cache.set(key, 'NULL', 60); } // 空值缓存 60 秒",
            "配置随机 TTL：int ttl = baseTtl + random.nextInt(300); // 基础 TTL + 0-300 秒随机值"
        ],
        selfCheck: [
            "缓存穿透、击穿、雪崩的定义和区别是什么？",
            "布隆过滤器的原理是什么？为什么会有误判？",
            "如何使用互斥锁防止缓存击穿？",
            "为什么要给 TTL 加随机值？",
            "多级缓存如何防止雪崩？"
        ],
        extensions: [
            "研究 Cuckoo Filter 作为布隆过滤器的替代品。",
            "学习 Redis Cell 模块实现的布隆过滤器。",
            "了解 Netflix Hystrix 的熔断降级机制。",
            "研究限流算法（令牌桶、漏桶）配合缓存使用。"
        ],
        sourceUrls: [
            "https://en.wikipedia.org/wiki/Bloom_filter",
            "https://blog.bytebytego.com/p/a-crash-course-in-caching-part-1"
        ]
    },
    "w13-3": {
        lessonId: "w13-3",
        background: [
            "【一致性挑战】缓存与数据库是两个独立的数据存储，无法使用事务保证原子性。任何更新操作都可能因为并发或故障导致两者不一致。",
            "【先更新数据库再删除缓存】这是 Cache-Aside 的推荐做法。删除而非更新缓存，是因为更新可能被覆盖，删除则触发下次读取时重新加载最新值。",
            "【分布式锁保证一致性】Redis 分布式锁使用 SET key value NX PX milliseconds 实现。'NX' 表示只在 key 不存在时设置，'PX' 设置过期时间防止死锁。",
            "【Redlock 算法】Redis 官方提出的分布式锁算法：向 N 个独立 Redis 节点请求锁，获得超过 N/2+1 个节点的锁才算成功。解决单点故障问题，但存在时钟漂移争议。",
            "【安全释放锁】释放锁必须验证持有者身份：'The Lua script ensures atomicity because Redis executes Lua scripts atomically'。使用 Lua 脚本原子比较 value 后删除：if redis.call('get',KEYS[1]) == ARGV[1] then return redis.call('del',KEYS[1]) else return 0 end。"
        ],
        keyDifficulties: [
            "【延迟双删策略】先删除缓存，更新数据库，延迟一段时间后再次删除缓存。延迟时间应大于一次数据库读取 + 缓存写入的时间，确保并发读取的旧值被清除。",
            "【Canal 订阅 binlog】使用 Canal 监听 MySQL binlog，异步删除或更新缓存。优势：解耦业务代码，保证最终一致性。缺点：引入延迟，增加组件复杂度。",
            "【分布式锁的续期问题】如果业务执行时间超过锁的 TTL，锁会自动释放，其他线程获得锁可能导致并发问题。解决方案：看门狗（Watchdog）机制定时续期，如 Redisson 的自动续期。",
            "【最终一致性 vs 强一致性】缓存场景通常接受最终一致性——数据在短时间内可能不一致，但最终会一致。强一致性需要分布式事务，性能代价高昂。"
        ],
        handsOnPath: [
            "实现延迟双删：cache.delete(key); db.update(data); Thread.sleep(500); cache.delete(key);",
            "使用 Redis 分布式锁：SET lock:order:123 unique_value NX PX 30000",
            "Lua 脚本安全释放锁：EVAL \"if redis.call('get',KEYS[1]) == ARGV[1] then return redis.call('del',KEYS[1]) else return 0 end\" 1 lock:order:123 unique_value",
            "配置 Redisson 看门狗：RLock lock = redisson.getLock('myLock'); lock.lock(); // 默认 30 秒，自动续期",
            "使用 Canal 监听 binlog：部署 Canal Server，配置监听的数据库和表，消费变更事件删除缓存。"
        ],
        selfCheck: [
            "为什么推荐先更新数据库再删除缓存？",
            "什么是延迟双删？延迟时间如何确定？",
            "Redis 分布式锁的 NX 和 PX 参数含义是什么？",
            "为什么释放锁需要使用 Lua 脚本？",
            "Redisson 的看门狗机制解决什么问题？"
        ],
        extensions: [
            "研究 Martin Kleppmann 对 Redlock 的批评和讨论。",
            "学习 etcd 基于 Raft 的分布式锁实现。",
            "了解 ZooKeeper 的临时顺序节点实现分布式锁。",
            "研究数据库的乐观锁（版本号）与缓存一致性配合。"
        ],
        sourceUrls: [
            "https://redis.io/docs/latest/develop/use/patterns/distributed-locks/",
            "https://codeahoy.com/2017/08/11/caching-strategies-and-how-to-choose-the-right-one/"
        ]
    },
    "w13-4": {
        lessonId: "w13-4",
        background: [
            "【缓存预热定义】系统启动时主动将热点数据加载到缓存，避免冷启动时大量请求穿透到数据库。常见做法：定时任务加载、启动脚本初始化、流量回放。",
            "【Redis 淘汰策略概述】Redis 文档：'When maxmemory limit is reached Redis will try to remove keys according to the eviction policy'。提供 8 种策略，分为 volatile（只淘汰有 TTL 的 key）和 allkeys（淘汰所有 key）两类。",
            "【LRU 策略】Least Recently Used，淘汰最近最少使用的 key。Redis 的 LRU 是近似算法：'samples a small number of keys and evicts the one with the oldest access time'。默认采样 5 个 key。",
            "【LFU 策略】Least Frequently Used，淘汰访问频率最低的 key。Redis 4.0 引入，使用 Morris counter 实现概率计数。更适合有访问热点的场景，防止冷数据长期占用内存。",
            "【Caffeine 缓存】Caffeine 是'high performance Java caching library providing a near optimal hit rate'。使用 Window TinyLFU 淘汰算法，结合了 LRU 和 LFU 的优点，命中率接近理论最优。"
        ],
        keyDifficulties: [
            "【8 种淘汰策略详解】noeviction（不淘汰，写入报错）、allkeys-lru（全局 LRU）、allkeys-lfu（全局 LFU）、allkeys-random（随机淘汰）、volatile-lru（有 TTL 的 LRU）、volatile-lfu（有 TTL 的 LFU）、volatile-random（有 TTL 的随机）、volatile-ttl（淘汰 TTL 最短的）。",
            "【策略选择建议】缓存场景推荐 allkeys-lru 或 allkeys-lfu；有明确热点用 LFU；数据重要性相当用 LRU；需要保护特定数据用 volatile-* 并给重要数据不设 TTL。",
            "【LFU 的 decay 机制】Redis LFU 使用 lfu-decay-time 配置衰减周期（默认 1 分钟）。随时间降低计数器，防止历史热点数据长期占用内存。",
            "【Caffeine 的 Window TinyLFU】将缓存分为 Window（准入窗口）和 Main（主缓存）。新数据先进入 Window，只有访问频率超过 Main 中最低的才能晋升。有效过滤一次性访问数据。"
        ],
        handsOnPath: [
            "配置 Redis 淘汰策略：在 redis.conf 设置 maxmemory 1gb; maxmemory-policy allkeys-lfu;",
            "调整 LRU 采样数量：maxmemory-samples 10; // 增加采样提高精度，但消耗更多 CPU",
            "配置 LFU 衰减：lfu-decay-time 1; lfu-log-factor 10; // 衰减周期 1 分钟，计数器增长因子 10",
            "使用 Caffeine 构建缓存：Caffeine.newBuilder().maximumSize(10000).expireAfterWrite(10, TimeUnit.MINUTES).build();",
            "实现缓存预热脚本：启动时查询热点数据（如访问 TOP 1000），批量写入 Redis。"
        ],
        selfCheck: [
            "Redis 的 8 种淘汰策略分别是什么？",
            "LRU 和 LFU 策略的区别是什么？",
            "为什么 Redis 的 LRU 是近似算法？",
            "什么场景应该使用 volatile-* 策略？",
            "Caffeine 的 Window TinyLFU 算法有什么优势？"
        ],
        extensions: [
            "研究 Redis 的内存碎片问题和 activedefrag 配置。",
            "学习 Memcached 的 Slab Allocator 内存管理。",
            "了解本地缓存的并发控制（Caffeine 的 striped lock）。",
            "研究多级缓存架构中的缓存同步问题。"
        ],
        sourceUrls: [
            "https://redis.io/docs/latest/develop/reference/eviction/",
            "https://github.com/ben-manes/caffeine/wiki"
        ]
    }
}

export const week13Quizzes: Record<string, QuizQuestion[]> = {
    "w13-1": [
        {
            id: "w13-1-q1",
            question: "Microsoft 文档对 Cache-Aside 模式的定义是什么？",
            options: [
                "缓存自动从数据库加载数据",
                "按需从数据存储加载数据到缓存",
                "写入时同时更新缓存和数据库",
                "异步批量写入数据库"
            ],
            answer: 1,
            rationale: "Microsoft 定义 Cache-Aside：'Load data on demand into a cache from a data store'——按需加载。"
        },
        {
            id: "w13-1-q2",
            question: "Cache-Aside 模式的读取流程是什么？",
            options: [
                "直接从数据库读取",
                "先查缓存，未命中则从数据库加载并写入缓存",
                "缓存自动从数据库同步",
                "从备份恢复数据"
            ],
            answer: 1,
            rationale: "Cache-Aside 读取：先查缓存，命中则返回；未命中则从数据库加载，写入缓存后返回。"
        },
        {
            id: "w13-1-q3",
            question: "Read-Through 模式与 Cache-Aside 的主要区别是什么？",
            options: [
                "Read-Through 不使用缓存",
                "Read-Through 由缓存层自动从数据库加载",
                "Cache-Aside 写入更快",
                "Read-Through 不支持并发"
            ],
            answer: 1,
            rationale: "Read-Through 中应用只与缓存交互，缓存未命中时由缓存层自动从数据库加载，简化应用代码。"
        },
        {
            id: "w13-1-q4",
            question: "Write-Through 模式的特点是什么？",
            options: [
                "只写缓存不写数据库",
                "异步写入数据库",
                "数据先写缓存再写数据库，保证一致性",
                "定期批量同步"
            ],
            answer: 2,
            rationale: "Write-Through：'data is first written to the cache and then to the database'，保证一致性但增加写入延迟。"
        },
        {
            id: "w13-1-q5",
            question: "Write-Behind 模式的主要风险是什么？",
            options: [
                "读取延迟高",
                "缓存故障可能导致数据丢失",
                "不支持高并发",
                "配置复杂"
            ],
            answer: 1,
            rationale: "Write-Behind 异步写入数据库，如果缓存节点故障，未持久化的数据会丢失。"
        },
        {
            id: "w13-1-q6",
            question: "哪种缓存模式最适合写密集且允许短暂不一致的场景？",
            options: [
                "Cache-Aside",
                "Read-Through",
                "Write-Through",
                "Write-Behind"
            ],
            answer: 3,
            rationale: "Write-Behind 'significantly improves write performance'，适合写密集场景，但需要接受短暂不一致。"
        },
        {
            id: "w13-1-q7",
            question: "Cache-Aside 模式可能出现不一致的原因是什么？",
            options: [
                "缓存不支持并发",
                "并发场景下旧值可能覆盖新值",
                "数据库不支持事务",
                "网络延迟"
            ],
            answer: 1,
            rationale: "并发场景：线程 A 读旧值，线程 B 更新数据库并删除缓存，线程 A 将旧值写入缓存导致不一致。"
        },
        {
            id: "w13-1-q8",
            question: "Read-Through 模式的冷启动问题如何解决？",
            options: [
                "增加数据库连接数",
                "配合缓存预热策略主动加载热点数据",
                "使用更大的缓存",
                "延长 TTL"
            ],
            answer: 1,
            rationale: "系统重启后缓存为空，所有请求穿透到数据库。需要配合缓存预热，在启动时主动加载热点数据。"
        },
        {
            id: "w13-1-q9",
            question: "如果需要强一致性，应该选择哪种缓存模式？",
            options: [
                "Cache-Aside",
                "Read-Through",
                "Write-Through",
                "Write-Behind"
            ],
            answer: 2,
            rationale: "Write-Through 同时更新缓存和数据库，保证强一致性，但写入延迟增加。"
        },
        {
            id: "w13-1-q10",
            question: "为什么 Cache-Aside 删除缓存而非更新缓存？",
            options: [
                "删除更快",
                "更新可能被覆盖，删除则触发下次读取时加载最新值",
                "缓存不支持更新",
                "节省内存"
            ],
            answer: 1,
            rationale: "更新缓存在并发时可能被旧值覆盖，删除则让下一次读取从数据库加载最新值。"
        },
        {
            id: "w13-1-q11",
            question: "Write-Behind 模式如何降低数据丢失风险？",
            options: [
                "增加缓存节点",
                "配合持久化队列使用",
                "缩短同步间隔",
                "使用更快的磁盘"
            ],
            answer: 1,
            rationale: "Write-Behind 可配合持久化队列使用，确保异步写入的数据不会因缓存故障而丢失。"
        },
        {
            id: "w13-1-q12",
            question: "哪种模式最适合简化应用开发？",
            options: [
                "Cache-Aside",
                "Read-Through",
                "Write-Through",
                "Write-Behind"
            ],
            answer: 1,
            rationale: "Read-Through 让应用只与缓存交互，缓存层自动处理数据库访问，简化应用代码。"
        }
    ],
    "w13-2": [
        {
            id: "w13-2-q1",
            question: "什么是缓存穿透？",
            options: [
                "热点 key 过期导致请求打到数据库",
                "大量缓存同时过期",
                "查询不存在的数据，请求直接打到数据库",
                "缓存服务不可用"
            ],
            answer: 2,
            rationale: "缓存穿透：查询不存在的数据，缓存无法命中，请求直接打到数据库。"
        },
        {
            id: "w13-2-q2",
            question: "布隆过滤器的核心特性是什么？",
            options: [
                "不会误判存在，可能误判不存在",
                "可能误判存在，不会误判不存在",
                "完全精确",
                "只支持删除"
            ],
            answer: 1,
            rationale: "布隆过滤器：'false positive matches are possible, but false negatives are not'。"
        },
        {
            id: "w13-2-q3",
            question: "布隆过滤器使用什么数据结构？",
            options: [
                "红黑树",
                "哈希表",
                "位数组和多个哈希函数",
                "链表"
            ],
            answer: 2,
            rationale: "布隆过滤器使用 m 位的位数组和 k 个哈希函数，查询和插入都是 O(k) 复杂度。"
        },
        {
            id: "w13-2-q4",
            question: "什么是缓存击穿？",
            options: [
                "查询不存在的数据",
                "热点 key 过期，大量并发请求同时穿透到数据库",
                "缓存服务崩溃",
                "数据库不可用"
            ],
            answer: 1,
            rationale: "缓存击穿：热点 key 在某一时刻过期，大量并发请求同时穿透到数据库。"
        },
        {
            id: "w13-2-q5",
            question: "如何防止缓存击穿？",
            options: [
                "使用布隆过滤器",
                "使用互斥锁，只允许一个线程查询数据库",
                "增加缓存容量",
                "使用更快的网络"
            ],
            answer: 1,
            rationale: "互斥锁（Mutex）只允许一个线程查询数据库并更新缓存，其他线程等待或返回旧值。"
        },
        {
            id: "w13-2-q6",
            question: "什么是缓存雪崩？",
            options: [
                "单个热点 key 过期",
                "查询不存在的数据",
                "大量缓存 key 同时过期或缓存服务整体不可用",
                "数据库性能下降"
            ],
            answer: 2,
            rationale: "缓存雪崩：大量缓存 key 同时过期，或缓存服务整体不可用，请求全部打到数据库。"
        },
        {
            id: "w13-2-q7",
            question: "如何防止缓存雪崩中的同时过期问题？",
            options: [
                "使用布隆过滤器",
                "给 TTL 加随机值，避免同时过期",
                "增加数据库连接",
                "使用互斥锁"
            ],
            answer: 1,
            rationale: "给过期时间加随机值（如 baseTtl + random(300)），避免大量 key 同时过期。"
        },
        {
            id: "w13-2-q8",
            question: "空值缓存解决什么问题？",
            options: [
                "缓存击穿",
                "缓存雪崩",
                "缓存穿透——将不存在的 key 缓存为特殊值",
                "缓存预热"
            ],
            answer: 2,
            rationale: "空值缓存：将不存在的 key 也缓存为特殊值（如 NULL），设置较短 TTL，防止穿透。"
        },
        {
            id: "w13-2-q9",
            question: "布隆过滤器的误判率与什么因素有关？",
            options: [
                "只与元素数量有关",
                "与位数组大小 m、哈希函数数量 k、元素数量 n 有关",
                "只与哈希函数有关",
                "与网络延迟有关"
            ],
            answer: 1,
            rationale: "误判率公式：p ≈ (1 - e^(-kn/m))^k，与 m、k、n 都有关。"
        },
        {
            id: "w13-2-q10",
            question: "多级缓存如何防止雪崩？",
            options: [
                "增加单级缓存容量",
                "L1 本地缓存 + L2 分布式缓存提供多层保护",
                "使用更快的磁盘",
                "减少缓存数据"
            ],
            answer: 1,
            rationale: "多级缓存（L1 本地 + L2 分布式）提供多层保护，即使分布式缓存不可用，本地缓存仍可响应。"
        },
        {
            id: "w13-2-q11",
            question: "热点数据如何防止击穿？",
            options: [
                "设置更短的 TTL",
                "永不过期，由后台异步更新",
                "不使用缓存",
                "每次都查数据库"
            ],
            answer: 1,
            rationale: "热点数据可以设置永不过期，由后台任务定期异步更新，避免过期瞬间的击穿。"
        },
        {
            id: "w13-2-q12",
            question: "Redis 布隆过滤器的添加元素命令是什么？",
            options: [
                "BLOOM ADD",
                "BF.ADD",
                "SADD",
                "SET"
            ],
            answer: 1,
            rationale: "Redis 布隆过滤器命令：BF.RESERVE 创建、BF.ADD 添加元素、BF.EXISTS 查询是否存在。"
        }
    ],
    "w13-3": [
        {
            id: "w13-3-q1",
            question: "为什么缓存与数据库难以保证强一致性？",
            options: [
                "缓存不支持事务",
                "两者是独立存储，无法使用事务保证原子性",
                "数据库太慢",
                "缓存容量有限"
            ],
            answer: 1,
            rationale: "缓存与数据库是两个独立的数据存储，无法使用事务保证原子性，任何更新都可能导致不一致。"
        },
        {
            id: "w13-3-q2",
            question: "Cache-Aside 推荐的更新策略是什么？",
            options: [
                "先删除缓存再更新数据库",
                "先更新缓存再更新数据库",
                "先更新数据库再删除缓存",
                "只更新缓存"
            ],
            answer: 2,
            rationale: "推荐先更新数据库再删除缓存，删除触发下次读取时重新加载最新值。"
        },
        {
            id: "w13-3-q3",
            question: "Redis 分布式锁的 NX 参数含义是什么？",
            options: [
                "设置过期时间",
                "只在 key 不存在时设置",
                "强制覆盖",
                "异步设置"
            ],
            answer: 1,
            rationale: "'NX' 表示只在 key 不存在时设置（Not eXists），实现互斥锁语义。"
        },
        {
            id: "w13-3-q4",
            question: "为什么释放 Redis 分布式锁需要使用 Lua 脚本？",
            options: [
                "Lua 更快",
                "保证比较 value 和删除 key 的原子性",
                "Redis 不支持直接删除",
                "Lua 更安全"
            ],
            answer: 1,
            rationale: "'The Lua script ensures atomicity because Redis executes Lua scripts atomically'——避免误删其他线程的锁。"
        },
        {
            id: "w13-3-q5",
            question: "Redlock 算法的核心思想是什么？",
            options: [
                "使用单个 Redis 节点",
                "向 N 个独立节点请求锁，获得超过 N/2+1 个才算成功",
                "使用 Lua 脚本",
                "异步获取锁"
            ],
            answer: 1,
            rationale: "Redlock 向 N 个独立 Redis 节点请求锁，获得超过 N/2+1 个节点的锁才算成功，解决单点故障。"
        },
        {
            id: "w13-3-q6",
            question: "什么是延迟双删策略？",
            options: [
                "删除两次数据库",
                "先删缓存，更新数据库，延迟后再删缓存",
                "删除两个 key",
                "延迟更新数据库"
            ],
            answer: 1,
            rationale: "延迟双删：先删除缓存，更新数据库，延迟一段时间后再次删除缓存，确保并发读的旧值被清除。"
        },
        {
            id: "w13-3-q7",
            question: "延迟双删的延迟时间应该如何设置？",
            options: [
                "固定 1 秒",
                "大于一次数据库读取 + 缓存写入的时间",
                "越短越好",
                "越长越好"
            ],
            answer: 1,
            rationale: "延迟时间应大于一次数据库读取 + 缓存写入的时间，确保并发读取的旧值被清除。"
        },
        {
            id: "w13-3-q8",
            question: "Canal 如何保证缓存一致性？",
            options: [
                "定时同步",
                "监听 MySQL binlog，异步删除或更新缓存",
                "直接修改缓存",
                "使用事务"
            ],
            answer: 1,
            rationale: "Canal 监听 MySQL binlog，数据库变更时异步删除或更新缓存，解耦业务代码。"
        },
        {
            id: "w13-3-q9",
            question: "Redisson 的看门狗（Watchdog）解决什么问题？",
            options: [
                "提高性能",
                "业务执行超过锁 TTL 时自动续期",
                "减少内存占用",
                "压缩数据"
            ],
            answer: 1,
            rationale: "如果业务执行时间超过锁的 TTL，看门狗机制会定时续期，防止锁自动释放导致并发问题。"
        },
        {
            id: "w13-3-q10",
            question: "Redis 分布式锁的 PX 参数含义是什么？",
            options: [
                "只在 key 不存在时设置",
                "设置毫秒级过期时间",
                "强制覆盖",
                "原子操作"
            ],
            answer: 1,
            rationale: "'PX' 设置毫秒级过期时间，防止死锁——持有锁的进程崩溃后锁会自动释放。"
        },
        {
            id: "w13-3-q11",
            question: "缓存场景通常接受什么级别的一致性？",
            options: [
                "强一致性",
                "最终一致性",
                "线性一致性",
                "顺序一致性"
            ],
            answer: 1,
            rationale: "缓存场景通常接受最终一致性——数据在短时间内可能不一致，但最终会一致。强一致性性能代价高。"
        },
        {
            id: "w13-3-q12",
            question: "安全释放 Redis 锁的 Lua 脚本做什么检查？",
            options: [
                "检查 key 是否存在",
                "比较 value 是否与自己设置的相同",
                "检查 TTL",
                "检查内存"
            ],
            answer: 1,
            rationale: "if redis.call('get',KEYS[1]) == ARGV[1] then delete——比较 value 确保是自己的锁才删除。"
        }
    ],
    "w13-4": [
        {
            id: "w13-4-q1",
            question: "什么是缓存预热？",
            options: [
                "清空缓存",
                "系统启动时主动将热点数据加载到缓存",
                "增加缓存容量",
                "降低 TTL"
            ],
            answer: 1,
            rationale: "缓存预热：系统启动时主动将热点数据加载到缓存，避免冷启动时大量请求穿透到数据库。"
        },
        {
            id: "w13-4-q2",
            question: "Redis 达到 maxmemory 限制时会发生什么？",
            options: [
                "自动扩容",
                "根据淘汰策略移除 key",
                "崩溃",
                "忽略新写入"
            ],
            answer: 1,
            rationale: "'When maxmemory limit is reached Redis will try to remove keys according to the eviction policy'。"
        },
        {
            id: "w13-4-q3",
            question: "LRU 策略淘汰什么样的 key？",
            options: [
                "最新访问的",
                "访问频率最高的",
                "最近最少使用的",
                "TTL 最长的"
            ],
            answer: 2,
            rationale: "LRU（Least Recently Used）淘汰最近最少使用的 key。"
        },
        {
            id: "w13-4-q4",
            question: "为什么 Redis 的 LRU 是近似算法？",
            options: [
                "完全精确太慢",
                "采样一小部分 key，选择其中最旧的淘汰",
                "不支持精确 LRU",
                "内存限制"
            ],
            answer: 1,
            rationale: "Redis LRU：'samples a small number of keys and evicts the one with the oldest access time'，默认采样 5 个。"
        },
        {
            id: "w13-4-q5",
            question: "LFU 策略淘汰什么样的 key？",
            options: [
                "最近最少使用的",
                "访问频率最低的",
                "TTL 最短的",
                "最大的"
            ],
            answer: 1,
            rationale: "LFU（Least Frequently Used）淘汰访问频率最低的 key，更适合有访问热点的场景。"
        },
        {
            id: "w13-4-q6",
            question: "Redis 提供多少种淘汰策略？",
            options: [
                "4 种",
                "6 种",
                "8 种",
                "10 种"
            ],
            answer: 2,
            rationale: "Redis 提供 8 种策略：noeviction、allkeys-lru/lfu/random、volatile-lru/lfu/random/ttl。"
        },
        {
            id: "w13-4-q7",
            question: "noeviction 策略的行为是什么？",
            options: [
                "随机淘汰",
                "淘汰最旧的",
                "不淘汰，写入时报错",
                "淘汰 TTL 最短的"
            ],
            answer: 2,
            rationale: "noeviction：不淘汰任何 key，达到内存限制时写入操作会返回错误。"
        },
        {
            id: "w13-4-q8",
            question: "volatile-* 策略只淘汰什么样的 key？",
            options: [
                "所有 key",
                "只淘汰设置了 TTL 的 key",
                "没有 TTL 的 key",
                "最大的 key"
            ],
            answer: 1,
            rationale: "volatile-* 策略（如 volatile-lru）只在设置了 TTL 的 key 中选择淘汰对象。"
        },
        {
            id: "w13-4-q9",
            question: "缓存场景推荐使用哪种淘汰策略？",
            options: [
                "noeviction",
                "allkeys-lru 或 allkeys-lfu",
                "volatile-ttl",
                "volatile-random"
            ],
            answer: 1,
            rationale: "缓存场景推荐 allkeys-lru（通用）或 allkeys-lfu（有明确热点），确保能淘汰冷数据腾出空间。"
        },
        {
            id: "w13-4-q10",
            question: "Caffeine 缓存使用什么淘汰算法？",
            options: [
                "LRU",
                "LFU",
                "Window TinyLFU",
                "FIFO"
            ],
            answer: 2,
            rationale: "Caffeine 使用 Window TinyLFU 算法，结合 LRU 和 LFU 优点，命中率接近理论最优。"
        },
        {
            id: "w13-4-q11",
            question: "Redis LFU 的 lfu-decay-time 配置什么？",
            options: [
                "计数器增长速度",
                "计数器衰减周期",
                "采样数量",
                "内存限制"
            ],
            answer: 1,
            rationale: "lfu-decay-time 配置衰减周期（默认 1 分钟），随时间降低计数器，防止历史热点长期占用内存。"
        },
        {
            id: "w13-4-q12",
            question: "Window TinyLFU 如何过滤一次性访问数据？",
            options: [
                "直接丢弃",
                "新数据先进入 Window，只有频率超过 Main 最低的才能晋升",
                "使用布隆过滤器",
                "设置 TTL"
            ],
            answer: 1,
            rationale: "Window TinyLFU 将缓存分为 Window 和 Main，新数据先进 Window，访问频率足够高才能晋升到 Main。"
        }
    ]
}
