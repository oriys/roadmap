import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week14Guides: Record<string, LessonGuide> = {
    "w14-1": {
        lessonId: "w14-1",
        background: [
            "【Redis Cluster 架构】Redis Cluster 是官方的分布式解决方案：'Redis Cluster provides a way to run a Redis installation where data is automatically sharded across multiple Redis nodes'。通过数据分片实现水平扩展，支持自动故障转移。",
            "【哈希槽分片】Cluster 使用 16384 个哈希槽：'The cluster's key space is split into 16384 slots'。每个 key 通过 CRC16(key) mod 16384 计算所属槽位。每个节点负责一部分槽位，槽位可以在节点间迁移。",
            "【Hash Tags 机制】为了让相关 key 落在同一节点，使用 Hash Tags：'only the substring between { and } is hashed'。例如 {user:1}:profile 和 {user:1}:orders 会被分配到同一槽位，支持对这些 key 的原子操作。",
            "【Gossip 协议】节点间通过 Gossip 协议交换状态信息：'Every node has a unique name that is retained forever across restarts'。节点定期交换信息，传播集群拓扑变化、故障检测结果等。",
            "【Redis Sentinel 定位】Sentinel 提供高可用但不分片：'Redis Sentinel provides high availability for Redis when not using Redis Cluster'。Sentinel 负责监控、通知、自动故障转移和配置提供。Cluster 内置了类似功能。"
        ],
        keyDifficulties: [
            "【MOVED vs ASK 重定向】客户端可能收到两种重定向：MOVED 表示槽位永久迁移到新节点，客户端应更新槽位映射；ASK 表示槽位正在迁移中，只需本次请求重定向，不更新映射。",
            "【故障检测机制】节点故障检测使用 PFAIL 和 FAIL 两阶段：单个节点标记为 PFAIL（疑似故障），当多数主节点同意时升级为 FAIL（确认故障）。'A PFAIL condition is escalated to a FAIL condition when... most masters agree about it'。",
            "【纪元与选举】集群使用 configEpoch（配置纪元）和 currentEpoch 管理版本：'The currentEpoch is used to create new configEpochs during slave elections'。纪元确保配置变更的全局顺序，防止脑裂。",
            "【Cluster 与 Sentinel 选择】Sentinel 适合：读多写少、数据量单机可承载、需要简单 HA。Cluster 适合：数据量超单机、需要写扩展、可接受多 key 操作限制。两者不能混用。"
        ],
        handsOnPath: [
            "创建 Redis Cluster：redis-cli --cluster create node1:6379 node2:6379 node3:6379 node4:6379 node5:6379 node6:6379 --cluster-replicas 1",
            "查看集群状态：redis-cli -c -h node1 -p 6379 cluster info; cluster nodes; cluster slots;",
            "测试 Hash Tags：SET {user:1}:name Alice; SET {user:1}:age 30; MGET {user:1}:name {user:1}:age;",
            "手动故障转移：在 replica 上执行 CLUSTER FAILOVER 触发主从切换。",
            "迁移槽位：redis-cli --cluster reshard node1:6379 --cluster-from <source-id> --cluster-to <target-id> --cluster-slots 1000"
        ],
        selfCheck: [
            "Redis Cluster 使用多少个哈希槽？如何计算 key 的槽位？",
            "Hash Tags 的作用是什么？语法是什么？",
            "MOVED 和 ASK 重定向的区别是什么？",
            "PFAIL 和 FAIL 状态的含义是什么？",
            "Redis Sentinel 和 Redis Cluster 各自适合什么场景？"
        ],
        extensions: [
            "研究 Redis Cluster 的 slot 迁移过程和 IMPORTING/MIGRATING 状态。",
            "学习 Redis Cluster 的 client-side caching 机制。",
            "了解 Redis Cluster Proxy 的使用场景。",
            "研究 Redis Cluster 在跨数据中心部署的挑战。"
        ],
        sourceUrls: [
            "https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/",
            "https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/",
            "https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/"
        ]
    },
    "w14-2": {
        lessonId: "w14-2",
        background: [
            "【多级缓存架构】现代高并发系统使用多级缓存：L1 本地缓存（如 Caffeine）→ L2 分布式缓存（如 Redis）→ 数据库。每级缓存有不同的容量、延迟和一致性特性。",
            "【Facebook TAO 架构】TAO 是 Facebook 的分布式缓存系统，使用两层架构：'Clients talk to the first tier, called followers. If a cache miss occurs on the follower, the follower attempts to fill its cache from a second tier, called a leader'。",
            "【TAO 读写路径】读请求：Client → Follower（本地缓存）→ Leader（远程缓存）→ Database。写请求：Client → Leader → Database，然后 Leader 通知 Follower 失效。这种 write-through 保证一致性。",
            "【Caffeine 本地缓存】Caffeine 是高性能 Java 本地缓存：'provides near optimal hit rate using Window TinyLFU eviction policy'。结合 LRU 和 LFU 优点，命中率接近理论最优。",
            "【JetCache 统一抽象】JetCache 提供多级缓存统一 API：支持声明式缓存（注解）、编程式缓存、自动刷新、分布式锁等。简化了多级缓存的管理和同步。"
        ],
        keyDifficulties: [
            "【本地缓存一致性】多实例部署时本地缓存可能不一致。解决方案：1) 设置较短 TTL；2) 使用 Redis Pub/Sub 广播失效消息；3) 接受短暂不一致（最终一致性）。",
            "【缓存穿透到 L2】L1 未命中时请求 L2，高并发下可能对 L2 造成压力。解决方案：L1 使用互斥锁或 singleflight 模式，同一 key 只有一个请求穿透到 L2。",
            "【TAO 的 follower 扩展】TAO follower 可以水平扩展处理读请求：'Followers can be added to increase read capacity'。但 leader 是瓶颈，写扩展需要分片。",
            "【缓存预热策略】系统启动时多级缓存都是空的。策略：1) 从数据库批量加载热点数据到 L2；2) 从 L2 加载到 L1；3) 或使用流量回放预热。"
        ],
        handsOnPath: [
            "配置 Caffeine 本地缓存：Caffeine.newBuilder().maximumSize(10000).expireAfterWrite(5, TimeUnit.MINUTES).recordStats().build();",
            "实现两级缓存读取：先查 L1，未命中查 L2，再未命中查数据库；回填时同时更新 L1 和 L2。",
            "实现缓存失效广播：更新数据时发送 Redis Pub/Sub 消息，各实例订阅消息删除本地缓存。",
            "使用 JetCache 注解：@Cached(name=\"user:\", expire=3600, cacheType=CacheType.BOTH) 配置两级缓存。",
            "监控缓存命中率：Caffeine 使用 cache.stats() 获取 hitRate()、missRate()、evictionCount()。"
        ],
        selfCheck: [
            "多级缓存架构中 L1 和 L2 各有什么特点？",
            "Facebook TAO 的两层架构如何工作？",
            "如何解决多实例部署时本地缓存不一致问题？",
            "什么是 singleflight 模式？它解决什么问题？",
            "Caffeine 使用什么淘汰算法？"
        ],
        extensions: [
            "研究 Guava Cache 与 Caffeine 的性能对比。",
            "学习 Netflix EVCache 的多级缓存架构。",
            "了解 Memcached 与 Redis 作为 L2 缓存的对比。",
            "研究 CDN 作为第一级缓存的架构设计。"
        ],
        sourceUrls: [
            "https://www.usenix.org/system/files/conference/atc13/atc13-bronson.pdf",
            "https://github.com/ben-manes/caffeine/wiki"
        ]
    },
    "w14-3": {
        lessonId: "w14-3",
        background: [
            "【热点 Key 问题】某些 key 访问量极高（如热门商品、明星微博），单个 Redis 节点无法承载。特征：QPS 集中在少数 key、单节点 CPU 飙升、其他 key 响应变慢。",
            "【大 Key 问题】单个 key 存储数据过大：String 超过 10KB、Hash/List/Set 元素超过 5000 个。影响：网络带宽占用、阻塞其他命令、主从同步延迟、删除时卡顿。",
            "【Redis 内存优化】Redis 文档强调内存优化：'Use hashes when possible'。小 hash 使用 listpack 编码：'saves a lot of memory'。使用 hash-max-listpack-entries 和 hash-max-listpack-value 配置阈值。",
            "【特殊编码节省内存】Redis 对小数据使用紧凑编码：listpack（替代 ziplist）、intset（整数集合）。'This encoding can save up to 10x memory compared to using plain strings'。",
            "【位操作节省空间】对于布尔类型数据（如用户签到、在线状态），使用 Bitmap：SETBIT/GETBIT 操作单个位。'Extremely memory efficient for certain use cases'。"
        ],
        keyDifficulties: [
            "【热点 Key 解决方案】1) 本地缓存：热点 key 缓存在应用内存；2) 读写分离：增加 replica 分担读压力；3) Key 打散：user:1 拆分为 user:1:0、user:1:1 等多个 key，随机读取。",
            "【大 Key 拆分策略】Hash 大 Key：按字段分组拆分为多个小 Hash；List 大 Key：按范围分段；String 大 Key：拆分为多个小 String 或使用压缩。",
            "【大 Key 删除风险】直接 DEL 大 Key 会阻塞 Redis。解决方案：1) UNLINK 异步删除；2) 使用 SCAN 系列命令渐进删除（HSCAN + HDEL）；3) 设置自动过期让 Redis 渐进回收。",
            "【内存碎片问题】频繁修改导致内存碎片，mem_fragmentation_ratio > 1.5 需要关注。解决：1) 重启 Redis；2) 使用 CONFIG SET activedefrag yes 开启自动碎片整理。"
        ],
        handsOnPath: [
            "识别大 Key：redis-cli --bigkeys 扫描大 key；或使用 MEMORY USAGE key 查看单个 key 内存占用。",
            "实现热点 Key 本地缓存：使用 Caffeine 缓存热点 key，设置较短 TTL（如 1 秒）减少 Redis 压力。",
            "渐进删除大 Hash：使用 HSCAN cursor MATCH * COUNT 100 分批获取，HDEL 删除，直到 cursor 为 0。",
            "使用 Hash 优化内存：将 user:1:name、user:1:age 等多个 String 合并为 HSET user:1 name Alice age 30。",
            "使用 Bitmap 存储签到：SETBIT user:1:signin:202401 0 1（第 1 天签到）；BITCOUNT user:1:signin:202401（统计签到天数）。"
        ],
        selfCheck: [
            "热点 Key 和大 Key 分别有什么特征？",
            "如何识别 Redis 中的大 Key？",
            "为什么不能直接 DEL 大 Key？应该怎么删除？",
            "Redis 如何通过 Hash 节省内存？",
            "mem_fragmentation_ratio 指标的含义是什么？"
        ],
        extensions: [
            "研究 Redis 的 LFU 模式识别热点 key（OBJECT FREQ）。",
            "学习 Redis 的 MEMORY DOCTOR 诊断内存问题。",
            "了解 Redis 的 lazy-free 机制和相关配置。",
            "研究压缩算法（如 LZ4、Snappy）在 Redis 客户端的应用。"
        ],
        sourceUrls: [
            "https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/memory-optimization/"
        ]
    },
    "w14-4": {
        lessonId: "w14-4",
        background: [
            "【INFO 命令监控】Redis INFO 命令提供全面的运行状态：'The INFO command returns information and statistics about the server'。关键 section：memory（内存）、stats（统计）、replication（复制）、clients（连接）。",
            "【内存监控指标】INFO memory 关键指标：used_memory（已用内存）、used_memory_rss（系统分配内存）、mem_fragmentation_ratio（碎片率 = rss/used）、maxmemory（配置上限）。",
            "【命中率计算】缓存命中率 = keyspace_hits / (keyspace_hits + keyspace_misses)。INFO stats 提供这些计数器。命中率低于 90% 需要分析原因：key 过期太快、容量不足、缓存策略问题。",
            "【SLOWLOG 慢查询】SLOWLOG 记录执行时间超过阈值的命令：'useful to debug latency issues'。配置 slowlog-log-slower-than（微秒）和 slowlog-max-len（日志条数）。",
            "【延迟诊断】Redis 延迟来源：'network latency, command execution, fork operations, disk I/O'。使用 redis-cli --latency 测试网络延迟，--intrinsic-latency 测试系统延迟。"
        ],
        keyDifficulties: [
            "【碎片率解读】mem_fragmentation_ratio 含义：< 1 表示使用了 swap（危险）；1-1.5 正常；> 1.5 碎片严重需要处理。'A fragmentation ratio greater than 1.5 indicates excessive fragmentation'。",
            "【透明大页问题】Linux 透明大页（THP）导致 fork 延迟：'Disable transparent huge pages as they can cause latency spikes'。执行：echo never > /sys/kernel/mm/transparent_hugepage/enabled。",
            "【避免慢命令】某些命令天然慢：KEYS *（全量扫描）、FLUSHALL、大集合操作。建议：使用 SCAN 替代 KEYS；使用 UNLINK 替代 DEL；避免单次操作大量元素。",
            "【容量规划】容量规划考虑因素：1) 峰值数据量 + 20% 余量；2) maxmemory 设置为物理内存 70-80%；3) 预留内存给 fork 操作（RDB/AOF 重写）；4) 考虑碎片开销。"
        ],
        handsOnPath: [
            "查看 Redis 状态：redis-cli INFO memory | grep -E 'used_memory|fragmentation'; INFO stats | grep -E 'keyspace_hits|keyspace_misses';",
            "配置慢查询日志：CONFIG SET slowlog-log-slower-than 10000（10ms）; CONFIG SET slowlog-max-len 1000; SLOWLOG GET 10;",
            "测试延迟：redis-cli --latency -h <host>（网络延迟）；redis-cli --intrinsic-latency 10（系统延迟）。",
            "使用 Prometheus + Grafana 监控：部署 redis_exporter，配置 Grafana 仪表盘展示关键指标。",
            "容量告警：配置 maxmemory 和 maxmemory-policy，监控 used_memory/maxmemory 比例，超过 80% 告警。"
        ],
        selfCheck: [
            "INFO 命令的 memory section 包含哪些关键指标？",
            "如何计算 Redis 缓存命中率？",
            "SLOWLOG 如何配置和查看？",
            "mem_fragmentation_ratio 不同范围分别意味着什么？",
            "为什么要禁用 Linux 透明大页？"
        ],
        extensions: [
            "研究 Redis 的 DEBUG SLEEP 和 CLIENT PAUSE 调试命令。",
            "学习 Redis 的 LATENCY DOCTOR 诊断延迟。",
            "了解 Redis 的 ACL 和安全监控。",
            "研究 Redis Cluster 的监控最佳实践。"
        ],
        sourceUrls: [
            "https://redis.io/docs/latest/commands/info/",
            "https://redis.io/docs/latest/commands/slowlog/",
            "https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/latency/"
        ]
    }
}

export const week14Quizzes: Record<string, QuizQuestion[]> = {
    "w14-1": [
        {
            id: "w14-1-q1",
            question: "Redis Cluster 使用多少个哈希槽进行数据分片？",
            options: [
                "1024",
                "4096",
                "16384",
                "65536"
            ],
            answer: 2,
            rationale: "'The cluster's key space is split into 16384 slots'——Redis Cluster 使用 16384 个哈希槽。"
        },
        {
            id: "w14-1-q2",
            question: "Redis Cluster 计算 key 所属槽位的公式是什么？",
            options: [
                "MD5(key) mod 16384",
                "CRC16(key) mod 16384",
                "SHA1(key) mod 16384",
                "hash(key) mod 1024"
            ],
            answer: 1,
            rationale: "Redis Cluster 使用 CRC16(key) mod 16384 计算 key 的哈希槽位置。"
        },
        {
            id: "w14-1-q3",
            question: "Hash Tags 的语法是什么？",
            options: [
                "使用 [] 包裹",
                "使用 <> 包裹",
                "使用 {} 包裹",
                "使用 () 包裹"
            ],
            answer: 2,
            rationale: "'only the substring between { and } is hashed'——使用大括号 {} 定义 Hash Tags。"
        },
        {
            id: "w14-1-q4",
            question: "MOVED 重定向的含义是什么？",
            options: [
                "槽位正在迁移中，只需本次重定向",
                "槽位永久迁移到新节点，应更新映射",
                "节点暂时不可用",
                "需要重新认证"
            ],
            answer: 1,
            rationale: "MOVED 表示槽位已永久迁移到新节点，客户端应更新本地槽位映射缓存。"
        },
        {
            id: "w14-1-q5",
            question: "ASK 重定向与 MOVED 的区别是什么？",
            options: [
                "ASK 表示永久迁移",
                "MOVED 表示临时迁移",
                "ASK 表示槽位正在迁移中，只需本次重定向",
                "两者完全相同"
            ],
            answer: 2,
            rationale: "ASK 表示槽位正在迁移中，只需本次请求重定向到新节点，不需要更新槽位映射。"
        },
        {
            id: "w14-1-q6",
            question: "PFAIL 和 FAIL 状态分别代表什么？",
            options: [
                "PFAIL 是确认故障，FAIL 是疑似故障",
                "PFAIL 是疑似故障，FAIL 是多数节点确认的故障",
                "两者都表示节点正常",
                "PFAIL 表示网络问题，FAIL 表示硬件问题"
            ],
            answer: 1,
            rationale: "PFAIL 是单个节点标记的疑似故障，当多数主节点同意时升级为 FAIL（确认故障）。"
        },
        {
            id: "w14-1-q7",
            question: "Redis Cluster 使用什么协议进行节点间通信？",
            options: [
                "Paxos",
                "Raft",
                "Gossip",
                "2PC"
            ],
            answer: 2,
            rationale: "Redis Cluster 使用 Gossip 协议在节点间交换状态信息和传播集群拓扑变化。"
        },
        {
            id: "w14-1-q8",
            question: "Redis Sentinel 的主要功能不包括？",
            options: [
                "监控",
                "数据分片",
                "自动故障转移",
                "配置提供"
            ],
            answer: 1,
            rationale: "Sentinel 提供监控、通知、自动故障转移和配置提供，但不提供数据分片功能。"
        },
        {
            id: "w14-1-q9",
            question: "configEpoch 在 Redis Cluster 中的作用是什么？",
            options: [
                "计算哈希槽",
                "管理配置版本，确保变更的全局顺序",
                "统计命令执行次数",
                "记录数据大小"
            ],
            answer: 1,
            rationale: "'The currentEpoch is used to create new configEpochs during slave elections'——纪元确保配置变更的全局顺序。"
        },
        {
            id: "w14-1-q10",
            question: "以下哪种场景更适合使用 Redis Sentinel 而非 Cluster？",
            options: [
                "数据量超过单机容量",
                "需要写扩展",
                "数据量单机可承载，只需要高可用",
                "需要跨多个 key 的原子操作"
            ],
            answer: 2,
            rationale: "Sentinel 适合数据量单机可承载、只需要高可用的场景；Cluster 适合需要数据分片的场景。"
        },
        {
            id: "w14-1-q11",
            question: "如何让 {user:1}:profile 和 {user:1}:orders 落在同一个节点？",
            options: [
                "使用相同前缀",
                "使用 Hash Tags {user:1}",
                "手动指定节点",
                "使用相同后缀"
            ],
            answer: 1,
            rationale: "Hash Tags 使得只有 {} 内的内容被哈希，因此 {user:1} 相同的 key 会落在同一槽位。"
        },
        {
            id: "w14-1-q12",
            question: "创建 Redis Cluster 时 --cluster-replicas 1 表示什么？",
            options: [
                "总共 1 个节点",
                "每个主节点有 1 个从节点",
                "只使用 1 个哈希槽",
                "复制因子为 1"
            ],
            answer: 1,
            rationale: "--cluster-replicas 1 表示每个主节点配置 1 个从节点（replica）用于故障转移。"
        }
    ],
    "w14-2": [
        {
            id: "w14-2-q1",
            question: "多级缓存架构中 L1 和 L2 分别指什么？",
            options: [
                "L1 是数据库，L2 是缓存",
                "L1 是本地缓存，L2 是分布式缓存",
                "L1 是分布式缓存，L2 是本地缓存",
                "L1 是 SSD，L2 是内存"
            ],
            answer: 1,
            rationale: "多级缓存架构中 L1 是本地缓存（如 Caffeine），L2 是分布式缓存（如 Redis）。"
        },
        {
            id: "w14-2-q2",
            question: "Facebook TAO 架构中 follower 和 leader 的关系是什么？",
            options: [
                "follower 直接访问数据库",
                "leader 处理所有读请求",
                "follower 缓存未命中时从 leader 获取",
                "follower 和 leader 功能相同"
            ],
            answer: 2,
            rationale: "'If a cache miss occurs on the follower, the follower attempts to fill its cache from a second tier, called a leader'。"
        },
        {
            id: "w14-2-q3",
            question: "TAO 的写请求路径是什么？",
            options: [
                "Client → Follower → Leader → Database",
                "Client → Leader → Database，然后 Leader 通知 Follower 失效",
                "Client → Database → Leader → Follower",
                "Client → Follower → Database"
            ],
            answer: 1,
            rationale: "TAO 写请求：Client → Leader → Database，然后 Leader 通知 Follower 使缓存失效。"
        },
        {
            id: "w14-2-q4",
            question: "Caffeine 使用什么淘汰算法？",
            options: [
                "LRU",
                "LFU",
                "FIFO",
                "Window TinyLFU"
            ],
            answer: 3,
            rationale: "Caffeine 'provides near optimal hit rate using Window TinyLFU eviction policy'。"
        },
        {
            id: "w14-2-q5",
            question: "多实例部署时本地缓存不一致的解决方案不包括？",
            options: [
                "设置较短 TTL",
                "使用 Redis Pub/Sub 广播失效消息",
                "增加本地缓存容量",
                "接受短暂不一致（最终一致性）"
            ],
            answer: 2,
            rationale: "增加容量不能解决一致性问题。正确方案包括：短 TTL、Pub/Sub 广播、接受最终一致性。"
        },
        {
            id: "w14-2-q6",
            question: "singleflight 模式解决什么问题？",
            options: [
                "提高写入性能",
                "同一 key 只有一个请求穿透到下层，避免缓存击穿",
                "数据压缩",
                "负载均衡"
            ],
            answer: 1,
            rationale: "singleflight 确保同一 key 的并发请求只有一个穿透到下层缓存或数据库。"
        },
        {
            id: "w14-2-q7",
            question: "TAO 架构中如何扩展读能力？",
            options: [
                "增加 leader 数量",
                "增加 follower 数量",
                "增加数据库连接",
                "使用更快的网络"
            ],
            answer: 1,
            rationale: "'Followers can be added to increase read capacity'——增加 follower 扩展读能力。"
        },
        {
            id: "w14-2-q8",
            question: "JetCache 提供什么功能？",
            options: [
                "只支持本地缓存",
                "只支持分布式缓存",
                "多级缓存统一 API、声明式缓存、自动刷新",
                "数据库连接池"
            ],
            answer: 2,
            rationale: "JetCache 提供多级缓存统一 API、声明式缓存（注解）、编程式缓存、自动刷新等功能。"
        },
        {
            id: "w14-2-q9",
            question: "缓存预热的策略不包括？",
            options: [
                "从数据库批量加载热点数据到 L2",
                "从 L2 加载到 L1",
                "删除所有缓存重新开始",
                "使用流量回放预热"
            ],
            answer: 2,
            rationale: "删除缓存会导致冷启动问题。正确的预热策略是主动加载数据到各级缓存。"
        },
        {
            id: "w14-2-q10",
            question: "使用 Redis Pub/Sub 广播缓存失效的流程是什么？",
            options: [
                "更新数据 → 删除本地缓存 → 发送消息",
                "发送消息 → 更新数据 → 删除缓存",
                "更新数据 → 发送 Pub/Sub 消息 → 各实例订阅并删除本地缓存",
                "只删除本地缓存"
            ],
            answer: 2,
            rationale: "更新数据后发送 Redis Pub/Sub 消息，各应用实例订阅消息并删除对应的本地缓存。"
        },
        {
            id: "w14-2-q11",
            question: "Caffeine cache.stats() 可以获取什么指标？",
            options: [
                "网络延迟",
                "hitRate()、missRate()、evictionCount()",
                "数据库连接数",
                "磁盘使用率"
            ],
            answer: 1,
            rationale: "Caffeine 的 stats() 提供命中率（hitRate）、未命中率（missRate）、淘汰计数等指标。"
        },
        {
            id: "w14-2-q12",
            question: "TAO 使用什么策略保证缓存一致性？",
            options: [
                "write-behind",
                "write-through",
                "read-through",
                "cache-aside"
            ],
            answer: 1,
            rationale: "TAO 使用 write-through 策略：写入先到 Leader 再到数据库，然后通知 Follower 失效。"
        }
    ],
    "w14-3": [
        {
            id: "w14-3-q1",
            question: "什么是 Redis 热点 Key 问题？",
            options: [
                "key 太长",
                "key 的值太大",
                "某些 key 访问量极高，单节点无法承载",
                "key 过期太快"
            ],
            answer: 2,
            rationale: "热点 Key 是指访问量极高的 key，导致单个 Redis 节点无法承载，CPU 飙升。"
        },
        {
            id: "w14-3-q2",
            question: "什么是 Redis 大 Key 问题？",
            options: [
                "key 名称太长",
                "单个 key 存储数据过大（如 String >10KB 或集合元素 >5000）",
                "key 数量太多",
                "key 的 TTL 太长"
            ],
            answer: 1,
            rationale: "大 Key 指单个 key 存储的数据过大，会导致网络带宽占用、阻塞其他命令等问题。"
        },
        {
            id: "w14-3-q3",
            question: "如何识别 Redis 中的大 Key？",
            options: [
                "使用 KEYS * 命令",
                "使用 redis-cli --bigkeys 或 MEMORY USAGE key",
                "查看 redis.conf",
                "使用 INFO 命令"
            ],
            answer: 1,
            rationale: "redis-cli --bigkeys 可以扫描大 key，MEMORY USAGE key 可以查看单个 key 的内存占用。"
        },
        {
            id: "w14-3-q4",
            question: "为什么不能直接 DEL 大 Key？",
            options: [
                "DEL 命令不存在",
                "DEL 大 Key 会阻塞 Redis，影响其他命令",
                "DEL 不支持 Hash 类型",
                "DEL 会导致数据丢失"
            ],
            answer: 1,
            rationale: "直接 DEL 大 Key 会阻塞 Redis 主线程，应该使用 UNLINK 异步删除或 SCAN 渐进删除。"
        },
        {
            id: "w14-3-q5",
            question: "Redis 文档推荐使用什么数据结构节省内存？",
            options: [
                "String",
                "List",
                "Hash",
                "Stream"
            ],
            answer: 2,
            rationale: "'Use hashes when possible'——小 Hash 使用紧凑编码，可以节省大量内存。"
        },
        {
            id: "w14-3-q6",
            question: "Redis 紧凑编码可以节省多少内存？",
            options: [
                "最多 2x",
                "最多 5x",
                "最多 10x",
                "最多 50x"
            ],
            answer: 2,
            rationale: "'This encoding can save up to 10x memory compared to using plain strings'。"
        },
        {
            id: "w14-3-q7",
            question: "热点 Key 的解决方案不包括？",
            options: [
                "本地缓存热点 key",
                "增加 replica 分担读压力",
                "增加 key 的 TTL",
                "Key 打散（拆分为多个 key）"
            ],
            answer: 2,
            rationale: "增加 TTL 不能解决热点问题。正确方案包括：本地缓存、读写分离、key 打散。"
        },
        {
            id: "w14-3-q8",
            question: "mem_fragmentation_ratio 大于 1.5 意味着什么？",
            options: [
                "内存使用正常",
                "使用了 swap",
                "内存碎片严重，需要处理",
                "数据被压缩"
            ],
            answer: 2,
            rationale: "'A fragmentation ratio greater than 1.5 indicates excessive fragmentation'——碎片严重。"
        },
        {
            id: "w14-3-q9",
            question: "如何渐进删除大 Hash？",
            options: [
                "直接 DEL",
                "使用 HSCAN + HDEL 分批删除",
                "使用 FLUSHALL",
                "重启 Redis"
            ],
            answer: 1,
            rationale: "使用 HSCAN cursor MATCH * COUNT 100 分批获取字段，然后 HDEL 删除，直到 cursor 为 0。"
        },
        {
            id: "w14-3-q10",
            question: "Bitmap 适合存储什么类型的数据？",
            options: [
                "复杂对象",
                "布尔类型数据（如用户签到、在线状态）",
                "大文本",
                "嵌套结构"
            ],
            answer: 1,
            rationale: "Bitmap 使用 SETBIT/GETBIT 操作单个位，非常适合存储布尔类型数据，极度节省内存。"
        },
        {
            id: "w14-3-q11",
            question: "UNLINK 命令与 DEL 命令的区别是什么？",
            options: [
                "功能完全相同",
                "UNLINK 是异步删除，不会阻塞主线程",
                "UNLINK 只能删除 String",
                "DEL 更快"
            ],
            answer: 1,
            rationale: "UNLINK 是异步删除命令，在后台线程执行实际删除，不会阻塞 Redis 主线程。"
        },
        {
            id: "w14-3-q12",
            question: "如何开启 Redis 自动内存碎片整理？",
            options: [
                "重启 Redis",
                "CONFIG SET activedefrag yes",
                "使用 FLUSHALL",
                "增加 maxmemory"
            ],
            answer: 1,
            rationale: "CONFIG SET activedefrag yes 开启自动碎片整理，Redis 会在后台整理内存碎片。"
        }
    ],
    "w14-4": [
        {
            id: "w14-4-q1",
            question: "Redis INFO 命令的 memory section 包含什么信息？",
            options: [
                "客户端连接数",
                "内存使用情况（used_memory、碎片率等）",
                "慢查询日志",
                "集群状态"
            ],
            answer: 1,
            rationale: "INFO memory 提供内存相关指标：used_memory、used_memory_rss、mem_fragmentation_ratio 等。"
        },
        {
            id: "w14-4-q2",
            question: "如何计算 Redis 缓存命中率？",
            options: [
                "keyspace_hits / keyspace_misses",
                "keyspace_hits / (keyspace_hits + keyspace_misses)",
                "keyspace_misses / keyspace_hits",
                "used_memory / maxmemory"
            ],
            answer: 1,
            rationale: "命中率 = keyspace_hits / (keyspace_hits + keyspace_misses)，从 INFO stats 获取这些计数器。"
        },
        {
            id: "w14-4-q3",
            question: "SLOWLOG 配置参数 slowlog-log-slower-than 的单位是什么？",
            options: [
                "秒",
                "毫秒",
                "微秒",
                "纳秒"
            ],
            answer: 2,
            rationale: "slowlog-log-slower-than 的单位是微秒（microseconds），如 10000 表示 10ms。"
        },
        {
            id: "w14-4-q4",
            question: "mem_fragmentation_ratio 小于 1 意味着什么？",
            options: [
                "内存使用正常",
                "内存碎片严重",
                "Redis 使用了 swap（危险）",
                "数据被压缩"
            ],
            answer: 2,
            rationale: "mem_fragmentation_ratio < 1 表示 used_memory > used_memory_rss，意味着使用了 swap。"
        },
        {
            id: "w14-4-q5",
            question: "为什么要禁用 Linux 透明大页（THP）？",
            options: [
                "提高网络性能",
                "避免 fork 操作导致的延迟尖峰",
                "节省内存",
                "提高磁盘 IO"
            ],
            answer: 1,
            rationale: "'Disable transparent huge pages as they can cause latency spikes'——THP 会导致 fork 延迟。"
        },
        {
            id: "w14-4-q6",
            question: "应该用什么命令替代 KEYS *？",
            options: [
                "GET *",
                "SCAN",
                "FLUSHALL",
                "INFO"
            ],
            answer: 1,
            rationale: "KEYS * 会全量扫描阻塞 Redis，应该使用 SCAN 命令渐进式遍历。"
        },
        {
            id: "w14-4-q7",
            question: "Redis 延迟来源不包括？",
            options: [
                "网络延迟",
                "命令执行",
                "fork 操作",
                "客户端代码逻辑"
            ],
            answer: 3,
            rationale: "Redis 延迟来源：'network latency, command execution, fork operations, disk I/O'。"
        },
        {
            id: "w14-4-q8",
            question: "redis-cli --latency 测试什么？",
            options: [
                "系统基准延迟",
                "Redis 到客户端的网络延迟",
                "磁盘延迟",
                "CPU 使用率"
            ],
            answer: 1,
            rationale: "redis-cli --latency 测试客户端到 Redis 服务器的网络往返延迟（RTT）。"
        },
        {
            id: "w14-4-q9",
            question: "缓存命中率低于多少需要分析原因？",
            options: [
                "99%",
                "95%",
                "90%",
                "80%"
            ],
            answer: 2,
            rationale: "命中率低于 90% 需要分析原因：key 过期太快、容量不足、缓存策略问题等。"
        },
        {
            id: "w14-4-q10",
            question: "Redis 容量规划时 maxmemory 建议设置为物理内存的多少？",
            options: [
                "50-60%",
                "70-80%",
                "90-95%",
                "100%"
            ],
            answer: 1,
            rationale: "maxmemory 建议设置为物理内存的 70-80%，预留空间给 fork 操作和碎片开销。"
        },
        {
            id: "w14-4-q11",
            question: "查看 SLOWLOG 的命令是什么？",
            options: [
                "INFO slowlog",
                "SLOWLOG GET [count]",
                "DEBUG SLOWLOG",
                "CONFIG GET slowlog"
            ],
            answer: 1,
            rationale: "SLOWLOG GET [count] 获取指定数量的慢查询日志，如 SLOWLOG GET 10。"
        },
        {
            id: "w14-4-q12",
            question: "如何禁用 Linux 透明大页？",
            options: [
                "修改 redis.conf",
                "echo never > /sys/kernel/mm/transparent_hugepage/enabled",
                "CONFIG SET thp no",
                "重启 Redis"
            ],
            answer: 1,
            rationale: "执行 echo never > /sys/kernel/mm/transparent_hugepage/enabled 禁用透明大页。"
        }
    ]
}
