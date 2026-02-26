import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

// ═══════════════════════════════════════════════════════════════
// 阶段一：基础与数据结构（第 1-3 周）
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// 阶段二：高级特性（第 4-6 周）
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// 阶段三：高可用与集群（第 7-9 周）
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// 阶段四：生产实践（第 10-12 周）
// ═══════════════════════════════════════════════════════════════

export const redisStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：基础与数据结构（第 1-3 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "redis-s1",
    title: "阶段一：基础与数据结构",
    duration: "第 1-3 周",
    goal: "掌握 Redis 核心数据结构、基本命令与持久化机制，建立扎实的 Redis 基础。",
    weeks: [
      {
        id: "redis-w1",
        title: "第 1 周：Redis 概述与字符串",
        summary: "理解 Redis 的设计理念与核心特性，掌握 String 类型及其丰富的操作命令。",
        overview: "本周从整体视角认识 Redis，理解其内存数据库的定位、单线程模型与高性能原理，并深入学习最基础的 String 数据类型。",
        keyPoints: [
          "Redis 是基于内存的键值数据库，支持多种数据结构。",
          "单线程模型搭配 IO 多路复用实现高性能。",
          "String 是最基础的数据类型，支持计数器、分布式锁等场景。",
        ],
        lessons: [
          {
            id: "redis-w1-1",
            title: "Redis 概述与安装",
            detail: "了解 Redis 的历史背景、核心特性与适用场景，掌握本地安装与基本配置方法。",
            keyPoints: [
              "Redis 是开源的内存数据结构存储，可用作数据库、缓存和消息中间件。",
              "支持多种数据结构：String、List、Set、Hash、Sorted Set 等。",
              "单线程模型避免了锁竞争，搭配 epoll 实现高吞吐。",
            ],
            resources: [
              { title: "Redis 官方简介", url: "https://redis.io/docs/about/" },
              { title: "Redis 快速入门", url: "https://redis.io/docs/getting-started/" },
              { title: "Redis GitHub 仓库", url: "https://github.com/redis/redis" },
            ],
          },
          {
            id: "redis-w1-2",
            title: "String 类型与基本命令",
            detail: "深入学习 String 类型的编码方式与常用命令，理解 SET/GET/INCR 等操作的使用场景。",
            keyPoints: [
              "String 类型支持三种编码：int、embstr、raw。",
              "SET 命令支持 EX/PX/NX/XX 等选项，可实现简单分布式锁。",
              "INCR/DECR 系列命令是原子操作，适合计数器场景。",
            ],
            resources: [
              { title: "Redis Strings", url: "https://redis.io/docs/data-types/strings/" },
              { title: "SET 命令文档", url: "https://redis.io/commands/set/" },
            ],
          },
          {
            id: "redis-w1-3",
            title: "Redis 内存模型与键管理",
            detail: "理解 Redis 的内存分配机制与键空间管理，掌握 TTL、过期策略与内存淘汰策略。",
            keyPoints: [
              "Redis 使用 jemalloc 作为默认内存分配器。",
              "过期键采用惰性删除和定期删除相结合的策略。",
              "maxmemory-policy 支持 LRU、LFU、随机淘汰等多种策略。",
            ],
            resources: [
              { title: "Redis 内存优化", url: "https://redis.io/docs/management/optimization/memory-optimization/" },
              { title: "Key Expiration", url: "https://redis.io/commands/expire/" },
              { title: "Eviction Policies", url: "https://redis.io/docs/reference/eviction/" },
            ],
          },
        ],
      },
      {
        id: "redis-w2",
        title: "第 2 周：List 与 Hash",
        summary: "掌握 List 和 Hash 两种核心数据结构的原理与实战用法。",
        overview: "本周深入学习 List 的双向链表与压缩列表实现，以及 Hash 的字典结构，理解它们在消息队列和对象存储等场景中的应用。",
        keyPoints: [
          "List 底层使用 quicklist（压缩列表+双向链表），支持阻塞操作。",
          "Hash 适合存储对象，底层根据元素数量选择 listpack 或 hashtable。",
          "BLPOP/BRPOP 可实现简单的消息队列功能。",
        ],
        lessons: [
          {
            id: "redis-w2-1",
            title: "List 类型深入",
            detail: "学习 List 的底层数据结构与编码方式，掌握 LPUSH/RPOP/LRANGE 等命令及阻塞操作。",
            keyPoints: [
              "List 底层使用 quicklist，兼顾内存效率和操作性能。",
              "BLPOP/BRPOP 实现阻塞式弹出，适合简单消息队列。",
              "LPOS 命令可在列表中搜索元素位置。",
            ],
            resources: [
              { title: "Redis Lists", url: "https://redis.io/docs/data-types/lists/" },
              { title: "LPUSH 命令文档", url: "https://redis.io/commands/lpush/" },
            ],
          },
          {
            id: "redis-w2-2",
            title: "Hash 类型深入",
            detail: "学习 Hash 的底层数据结构与编码方式，掌握 HSET/HGET/HMSET 等命令在对象存储场景中的应用。",
            keyPoints: [
              "Hash 底层使用 listpack 或 hashtable，取决于字段数量和值大小。",
              "HSET 支持批量设置多个字段，替代了 HMSET。",
              "Hash 适合存储用户信息、配置项等结构化数据。",
            ],
            resources: [
              { title: "Redis Hashes", url: "https://redis.io/docs/data-types/hashes/" },
              { title: "HSET 命令文档", url: "https://redis.io/commands/hset/" },
            ],
          },
          {
            id: "redis-w2-3",
            title: "List 与 Hash 实战模式",
            detail: "结合 List 和 Hash 实现常见业务场景，如消息队列、购物车、Feed 流等实战案例。",
            keyPoints: [
              "List + Hash 实现简易消息队列：List 存消息 ID，Hash 存消息体。",
              "Hash 实现购物车：用户 ID 为 Key，商品 ID 为 Field，数量为 Value。",
              "List 实现 Feed 流：LPUSH 推送 + LRANGE 拉取分页。",
            ],
            resources: [
              { title: "Redis 数据类型教程", url: "https://redis.io/docs/data-types/tutorial/" },
              { title: "Redis 模式", url: "https://redis.io/docs/manual/patterns/" },
            ],
          },
        ],
      },
      {
        id: "redis-w3",
        title: "第 3 周：Set、Sorted Set 与持久化",
        summary: "掌握 Set 和 Sorted Set 数据结构，深入理解 RDB 与 AOF 持久化机制。",
        overview: "本周学习 Set 的集合运算与 Sorted Set 的排序特性，同时深入 Redis 的两种持久化方式 RDB 和 AOF 的原理与配置。",
        keyPoints: [
          "Set 支持交集、并集、差集运算，适合标签和社交关系场景。",
          "Sorted Set 底层使用跳表，支持范围查询和排名操作。",
          "RDB 快照和 AOF 日志各有优劣，生产环境通常两者并用。",
        ],
        lessons: [
          {
            id: "redis-w3-1",
            title: "Set 与集合运算",
            detail: "掌握 Set 的底层实现与集合运算命令，理解在标签系统和社交网络中的应用场景。",
            keyPoints: [
              "Set 底层使用 intset 或 hashtable，元素无序且唯一。",
              "SINTER/SUNION/SDIFF 实现集合交并差运算。",
              "SRANDMEMBER 可实现随机抽奖等场景。",
            ],
            resources: [
              { title: "Redis Sets", url: "https://redis.io/docs/data-types/sets/" },
              { title: "SINTER 命令文档", url: "https://redis.io/commands/sinter/" },
            ],
          },
          {
            id: "redis-w3-2",
            title: "Sorted Set 与排行榜",
            detail: "深入学习 Sorted Set 的跳表实现原理，掌握排行榜、延迟队列等高级应用模式。",
            keyPoints: [
              "Sorted Set 底层使用跳表 + 哈希表，兼顾排序和查找效率。",
              "ZADD/ZRANGE/ZRANK 等命令支持排行榜和 Top-N 查询。",
              "ZRANGEBYSCORE 结合时间戳可实现延迟队列。",
            ],
            resources: [
              { title: "Redis Sorted Sets", url: "https://redis.io/docs/data-types/sorted-sets/" },
              { title: "ZADD 命令文档", url: "https://redis.io/commands/zadd/" },
              { title: "Redis 跳表实现", url: "https://github.com/redis/redis/blob/unstable/src/t_zset.c" },
            ],
          },
          {
            id: "redis-w3-3",
            title: "持久化：RDB 与 AOF",
            detail: "深入理解 Redis 的两种持久化机制 RDB 快照和 AOF 日志的原理、配置与最佳实践。",
            keyPoints: [
              "RDB 通过 fork 子进程生成内存快照，恢复速度快但可能丢失数据。",
              "AOF 记录每条写命令，支持 always/everysec/no 三种 fsync 策略。",
              "Redis 4.0+ 支持混合持久化（RDB + AOF），兼顾性能和安全。",
            ],
            resources: [
              { title: "Redis 持久化", url: "https://redis.io/docs/management/persistence/" },
              { title: "RDB 配置", url: "https://redis.io/docs/management/persistence/#snapshotting" },
              { title: "AOF 配置", url: "https://redis.io/docs/management/persistence/#append-only-file" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：高级特性（第 4-6 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "redis-s2",
    title: "阶段二：高级特性",
    duration: "第 4-6 周",
    goal: "掌握 Redis 高级数据类型与功能特性，包括发布订阅、事务、Lua 脚本、Stream 等。",
    weeks: [
      {
        id: "redis-w4",
        title: "第 4 周：发布订阅与事务",
        summary: "掌握 Redis 的 Pub/Sub 消息模式与事务机制，理解 MULTI/EXEC 的原子性保证。",
        overview: "本周学习 Redis 的发布订阅模型和事务支持，理解 Pub/Sub 的广播特性和事务的乐观锁机制。",
        keyPoints: [
          "Pub/Sub 是发后即忘模式，消息不持久化，适合实时通知。",
          "MULTI/EXEC 提供事务支持，但不支持回滚。",
          "WATCH 实现乐观锁，检测事务执行期间的键变更。",
        ],
        lessons: [
          {
            id: "redis-w4-1",
            title: "发布订阅模式",
            detail: "学习 Redis Pub/Sub 的工作原理，理解频道订阅与模式订阅的区别及适用场景。",
            keyPoints: [
              "SUBSCRIBE/PUBLISH 实现基本的频道消息发布与订阅。",
              "PSUBSCRIBE 支持模式匹配订阅，如 news.* 匹配所有新闻频道。",
              "Pub/Sub 消息不持久化，离线客户端会丢失消息。",
            ],
            resources: [
              { title: "Redis Pub/Sub", url: "https://redis.io/docs/interact/pubsub/" },
              { title: "SUBSCRIBE 命令", url: "https://redis.io/commands/subscribe/" },
            ],
          },
          {
            id: "redis-w4-2",
            title: "事务与乐观锁",
            detail: "掌握 Redis 事务的 MULTI/EXEC/WATCH 机制，理解其与传统数据库事务的区别。",
            keyPoints: [
              "MULTI 开启事务，命令入队不执行，EXEC 时原子执行。",
              "Redis 事务不支持回滚，命令出错后续命令仍会执行。",
              "WATCH 配合 MULTI/EXEC 实现 CAS 乐观锁。",
            ],
            resources: [
              { title: "Redis 事务", url: "https://redis.io/docs/interact/transactions/" },
              { title: "MULTI 命令", url: "https://redis.io/commands/multi/" },
              { title: "WATCH 命令", url: "https://redis.io/commands/watch/" },
            ],
          },
          {
            id: "redis-w4-3",
            title: "Pipeline 与批量操作",
            detail: "学习 Pipeline 批量命令发送机制，理解其减少网络往返的性能优化原理。",
            keyPoints: [
              "Pipeline 将多个命令打包发送，减少网络 RTT 开销。",
              "Pipeline 非原子操作，中间可能插入其他客户端命令。",
              "合理使用 Pipeline 可提升 5-10 倍吞吐量。",
            ],
            resources: [
              { title: "Redis Pipeline", url: "https://redis.io/docs/manual/pipelining/" },
              { title: "Redis 性能优化", url: "https://redis.io/docs/management/optimization/" },
            ],
          },
        ],
      },
      {
        id: "redis-w5",
        title: "第 5 周：Lua 脚本与 Stream",
        summary: "掌握 Lua 脚本的原子执行与 Redis Stream 消息队列功能。",
        overview: "本周学习通过 Lua 脚本实现复杂原子操作，以及 Redis 5.0 引入的 Stream 数据类型在消息队列场景中的应用。",
        keyPoints: [
          "Lua 脚本在 Redis 中原子执行，适合实现复杂业务逻辑。",
          "Stream 是 Redis 5.0+ 的日志型数据结构，支持消费组。",
          "XREADGROUP 配合消费组实现可靠消息队列。",
        ],
        lessons: [
          {
            id: "redis-w5-1",
            title: "Lua 脚本编程",
            detail: "学习在 Redis 中使用 Lua 脚本实现原子操作，掌握 EVAL 命令与脚本缓存机制。",
            keyPoints: [
              "EVAL 命令执行 Lua 脚本，脚本中的所有操作原子执行。",
              "EVALSHA 通过脚本 SHA1 执行已缓存脚本，减少网络传输。",
              "redis.call() 和 redis.pcall() 用于在脚本中调用 Redis 命令。",
            ],
            resources: [
              { title: "Redis Lua 脚本", url: "https://redis.io/docs/interact/programmability/eval-intro/" },
              { title: "EVAL 命令", url: "https://redis.io/commands/eval/" },
            ],
          },
          {
            id: "redis-w5-2",
            title: "Redis Stream 基础",
            detail: "学习 Stream 数据类型的核心概念，掌握消息的生产、消费与消费组管理。",
            keyPoints: [
              "Stream 使用 XADD 追加消息，消息 ID 默认为时间戳+序列号。",
              "XREAD 实现简单消费，XREADGROUP 支持消费组。",
              "消费组内消息负载均衡，每条消息只被一个消费者处理。",
            ],
            resources: [
              { title: "Redis Streams", url: "https://redis.io/docs/data-types/streams/" },
              { title: "Streams 教程", url: "https://redis.io/docs/data-types/streams-tutorial/" },
              { title: "XADD 命令", url: "https://redis.io/commands/xadd/" },
            ],
          },
          {
            id: "redis-w5-3",
            title: "Stream 高级特性",
            detail: "深入学习 Stream 的 Pending 消息处理、消息确认与消费者故障恢复机制。",
            keyPoints: [
              "XACK 确认消息已处理，从 Pending Entries List (PEL) 移除。",
              "XPENDING 查看待处理消息，XCLAIM 转移超时消息给其他消费者。",
              "XTRIM 可按长度或最小 ID 截断 Stream，控制内存使用。",
            ],
            resources: [
              { title: "XACK 命令", url: "https://redis.io/commands/xack/" },
              { title: "XPENDING 命令", url: "https://redis.io/commands/xpending/" },
            ],
          },
        ],
      },
      {
        id: "redis-w6",
        title: "第 6 周：特殊数据类型与模块",
        summary: "掌握 HyperLogLog、Bitmap、GeoSpatial 等特殊数据类型及 Redis 模块扩展。",
        overview: "本周学习 Redis 提供的特殊数据类型在基数统计、位运算和地理位置等场景的应用，以及模块系统的扩展能力。",
        keyPoints: [
          "HyperLogLog 用极小内存（12KB）实现大规模基数统计。",
          "Bitmap 以位为单位存储，适合签到、在线状态等场景。",
          "GeoSpatial 基于 Sorted Set 实现地理位置查询。",
        ],
        lessons: [
          {
            id: "redis-w6-1",
            title: "HyperLogLog 与 Bitmap",
            detail: "学习 HyperLogLog 的概率计数原理和 Bitmap 的位操作，掌握在统计和状态记录场景中的应用。",
            keyPoints: [
              "HyperLogLog 的 PFADD/PFCOUNT 实现近似基数统计，误差率约 0.81%。",
              "Bitmap 的 SETBIT/GETBIT/BITCOUNT 实现用户签到和活跃统计。",
              "BITOP 支持位的 AND/OR/XOR/NOT 运算。",
            ],
            resources: [
              { title: "Redis HyperLogLog", url: "https://redis.io/docs/data-types/hyperloglogs/" },
              { title: "Redis Bitmaps", url: "https://redis.io/docs/data-types/bitmaps/" },
            ],
          },
          {
            id: "redis-w6-2",
            title: "GeoSpatial 地理位置",
            detail: "学习 Redis GeoSpatial 命令实现基于位置的服务，掌握附近搜索和距离计算。",
            keyPoints: [
              "GEOADD 添加地理位置，底层使用 Sorted Set 存储 GeoHash。",
              "GEODIST 计算两点距离，GEOSEARCH 替代 GEORADIUS 实现范围搜索。",
              "GeoSpatial 适合实现附近的人、附近门店等 LBS 功能。",
            ],
            resources: [
              { title: "Redis Geospatial", url: "https://redis.io/docs/data-types/geospatial/" },
              { title: "GEOADD 命令", url: "https://redis.io/commands/geoadd/" },
              { title: "GEOSEARCH 命令", url: "https://redis.io/commands/geosearch/" },
            ],
          },
          {
            id: "redis-w6-3",
            title: "Redis 模块系统",
            detail: "了解 Redis 模块生态，学习 RedisJSON、RediSearch、RedisTimeSeries 等常用模块的使用。",
            keyPoints: [
              "Redis 模块 API 允许用 C/C++/Rust 扩展新数据类型和命令。",
              "RedisJSON 支持原生 JSON 存取和 JSONPath 查询。",
              "RediSearch 提供全文搜索、二级索引和聚合功能。",
            ],
            resources: [
              { title: "Redis 模块", url: "https://redis.io/docs/modules/" },
              { title: "RedisJSON", url: "https://redis.io/docs/stack/json/" },
              { title: "RediSearch", url: "https://redis.io/docs/stack/search/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：高可用与集群（第 7-9 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "redis-s3",
    title: "阶段三：高可用与集群",
    duration: "第 7-9 周",
    goal: "掌握 Redis 主从复制、Sentinel 哨兵和 Cluster 集群的架构设计与运维实践。",
    weeks: [
      {
        id: "redis-w7",
        title: "第 7 周：主从复制",
        summary: "深入理解 Redis 主从复制原理，掌握全量同步与增量同步机制。",
        overview: "本周学习 Redis 主从复制的工作流程，理解 PSYNC 协议的全量和增量同步方式，以及复制积压缓冲区的作用。",
        keyPoints: [
          "主从复制实现数据冗余和读写分离。",
          "PSYNC 2.0 支持全量同步和部分重同步。",
          "复制积压缓冲区（repl-backlog）支持断线重连后增量同步。",
        ],
        lessons: [
          {
            id: "redis-w7-1",
            title: "主从复制原理",
            detail: "学习 Redis 主从复制的连接建立、数据同步流程以及心跳检测机制。",
            keyPoints: [
              "REPLICAOF 命令建立主从关系，从节点发送 PSYNC 请求。",
              "全量同步：主节点 BGSAVE 生成 RDB 发送给从节点。",
              "增量同步：通过 offset 和 repl_backlog 传递增量命令。",
            ],
            resources: [
              { title: "Redis 复制", url: "https://redis.io/docs/management/replication/" },
              { title: "REPLICAOF 命令", url: "https://redis.io/commands/replicaof/" },
            ],
          },
          {
            id: "redis-w7-2",
            title: "读写分离与复制延迟",
            detail: "掌握主从架构下的读写分离策略，理解复制延迟的成因与应对方案。",
            keyPoints: [
              "写操作发往主节点，读操作可分散到从节点。",
              "复制延迟受网络和从节点负载影响，可通过 INFO replication 监控。",
              "replica-read-only 配置确保从节点只读，防止数据不一致。",
            ],
            resources: [
              { title: "Redis 复制配置", url: "https://redis.io/docs/management/replication/#configuration" },
              { title: "INFO 命令", url: "https://redis.io/commands/info/" },
            ],
          },
          {
            id: "redis-w7-3",
            title: "复制拓扑与级联复制",
            detail: "学习不同的复制拓扑结构，理解级联复制在大规模部署中的优势与注意事项。",
            keyPoints: [
              "一主多从拓扑适合读多写少的场景。",
              "级联复制（链式复制）减轻主节点的复制压力。",
              "min-replicas-to-write 配置保证数据安全的最少从节点数。",
            ],
            resources: [
              { title: "Redis 高可用", url: "https://redis.io/docs/management/replication/#how-redis-replication-works" },
              { title: "复制安全配置", url: "https://redis.io/docs/management/replication/#allow-writes-only-with-n-attached-replicas" },
            ],
          },
        ],
      },
      {
        id: "redis-w8",
        title: "第 8 周：Sentinel 哨兵",
        summary: "掌握 Sentinel 的自动故障检测与主从切换机制。",
        overview: "本周深入学习 Redis Sentinel 系统的工作原理，理解故障判定、领导者选举和自动故障转移流程。",
        keyPoints: [
          "Sentinel 实现自动故障检测、通知和主从切换。",
          "主观下线（SDOWN）和客观下线（ODOWN）两级故障判定。",
          "Raft 协议选举 Sentinel Leader 执行故障转移。",
        ],
        lessons: [
          {
            id: "redis-w8-1",
            title: "Sentinel 架构与部署",
            detail: "学习 Sentinel 的架构设计与部署方式，理解至少 3 个 Sentinel 实例的高可用要求。",
            keyPoints: [
              "Sentinel 独立进程监控 Redis 主从节点健康状态。",
              "建议部署奇数个 Sentinel 实例（至少 3 个），避免脑裂。",
              "Sentinel 通过 Pub/Sub 自动发现其他 Sentinel 和从节点。",
            ],
            resources: [
              { title: "Redis Sentinel", url: "https://redis.io/docs/management/sentinel/" },
              { title: "Sentinel 配置", url: "https://redis.io/docs/management/sentinel/#configuring-sentinel" },
            ],
          },
          {
            id: "redis-w8-2",
            title: "故障检测与转移",
            detail: "深入理解 Sentinel 的故障检测流程和自动故障转移机制。",
            keyPoints: [
              "SDOWN：单个 Sentinel 判定节点不可达。ODOWN：多数 Sentinel 确认。",
              "故障转移选择最优从节点：优先级 > 复制偏移量 > run_id。",
              "故障转移后 Sentinel 更新配置，通知客户端新主节点地址。",
            ],
            resources: [
              { title: "Sentinel 故障转移", url: "https://redis.io/docs/management/sentinel/#a-quick-tutorial" },
              { title: "Sentinel API", url: "https://redis.io/docs/management/sentinel/#sentinel-api" },
            ],
          },
          {
            id: "redis-w8-3",
            title: "Sentinel 客户端集成",
            detail: "学习应用程序如何通过 Sentinel 进行服务发现，实现自动故障转移下的客户端透明切换。",
            keyPoints: [
              "客户端通过 Sentinel 获取当前主节点地址。",
              "订阅 Sentinel 的 +switch-master 频道感知主从切换。",
              "主流客户端（Jedis、Lettuce、redis-py）原生支持 Sentinel。",
            ],
            resources: [
              { title: "Sentinel 客户端", url: "https://redis.io/docs/management/sentinel/#sentinel-clients" },
              { title: "Jedis Sentinel", url: "https://github.com/redis/jedis/wiki/AdvancedUsage#jedissentinelpool" },
            ],
          },
        ],
      },
      {
        id: "redis-w9",
        title: "第 9 周：Redis Cluster",
        summary: "掌握 Redis Cluster 的分片架构与数据分布策略。",
        overview: "本周学习 Redis Cluster 的 16384 个哈希槽分片机制、Gossip 协议通信以及集群扩缩容操作。",
        keyPoints: [
          "Redis Cluster 将数据分散到 16384 个哈希槽。",
          "Gossip 协议实现节点间通信和故障检测。",
          "集群支持在线扩缩容和槽迁移。",
        ],
        lessons: [
          {
            id: "redis-w9-1",
            title: "Cluster 架构与分片",
            detail: "理解 Redis Cluster 的哈希槽分片机制、节点角色与 Gossip 协议通信原理。",
            keyPoints: [
              "CRC16(key) % 16384 计算键所属的哈希槽。",
              "每个主节点负责一部分哈希槽，从节点提供冗余。",
              "Gossip 协议（PING/PONG）实现去中心化的集群管理。",
            ],
            resources: [
              { title: "Redis Cluster 规范", url: "https://redis.io/docs/reference/cluster-spec/" },
              { title: "Redis Cluster 教程", url: "https://redis.io/docs/management/scaling/" },
            ],
          },
          {
            id: "redis-w9-2",
            title: "集群扩缩容与槽迁移",
            detail: "掌握 Redis Cluster 的在线扩缩容操作，理解槽迁移的实现原理和 ASK/MOVED 重定向。",
            keyPoints: [
              "redis-cli --cluster add-node 添加新节点到集群。",
              "redis-cli --cluster reshard 在线迁移哈希槽。",
              "MOVED 重定向指向目标节点，ASK 重定向用于迁移中的槽。",
            ],
            resources: [
              { title: "Cluster 扩缩容", url: "https://redis.io/docs/management/scaling/#adding-a-new-node" },
              { title: "Cluster 重定向", url: "https://redis.io/docs/reference/cluster-spec/#moved-redirection" },
            ],
          },
          {
            id: "redis-w9-3",
            title: "集群一致性与故障恢复",
            detail: "理解 Redis Cluster 的数据一致性保证、脑裂问题及集群故障恢复流程。",
            keyPoints: [
              "Redis Cluster 不保证强一致性，异步复制可能丢失写入。",
              "cluster-node-timeout 控制节点故障检测超时时间。",
              "集群投票机制：多数主节点同意后进行故障转移。",
            ],
            resources: [
              { title: "Cluster 一致性", url: "https://redis.io/docs/reference/cluster-spec/#write-safety" },
              { title: "Cluster 故障转移", url: "https://redis.io/docs/reference/cluster-spec/#failure-detection" },
              { title: "Redis Cluster FAQ", url: "https://redis.io/docs/management/scaling/#redis-cluster-faq" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：生产实践（第 10-12 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "redis-s4",
    title: "阶段四：生产实践",
    duration: "第 10-12 周",
    goal: "掌握 Redis 在生产环境中的缓存策略、分布式锁、性能调优与运维监控实践。",
    weeks: [
      {
        id: "redis-w10",
        title: "第 10 周：缓存策略与模式",
        summary: "掌握缓存穿透、击穿、雪崩的应对方案及常见缓存模式。",
        overview: "本周深入学习 Cache Aside、Read/Write Through、Write Behind 等缓存模式，以及缓存穿透、击穿、雪崩等常见问题的解决方案。",
        keyPoints: [
          "Cache Aside 是最常用的缓存模式：先查缓存，未命中再查数据库。",
          "缓存穿透用布隆过滤器或空值缓存防御。",
          "缓存雪崩通过随机化 TTL 和多级缓存避免。",
        ],
        lessons: [
          {
            id: "redis-w10-1",
            title: "缓存模式详解",
            detail: "深入学习 Cache Aside、Read Through、Write Through 和 Write Behind 四种缓存模式的原理与适用场景。",
            keyPoints: [
              "Cache Aside：应用负责缓存与数据库的协调，更新时先删缓存再更新 DB。",
              "Read/Write Through：缓存层透明代理数据库读写。",
              "Write Behind（Write Back）：异步批量写回数据库，高吞吐但有数据丢失风险。",
            ],
            resources: [
              { title: "缓存模式概述", url: "https://redis.io/docs/manual/patterns/" },
              { title: "Redis 缓存", url: "https://redis.io/docs/manual/client-side-caching/" },
            ],
          },
          {
            id: "redis-w10-2",
            title: "缓存穿透与击穿",
            detail: "掌握缓存穿透和缓存击穿的成因与防御策略，学习布隆过滤器和互斥锁的应用。",
            keyPoints: [
              "缓存穿透：请求不存在的数据，绕过缓存直达数据库，用布隆过滤器拦截。",
              "缓存击穿：热点 Key 过期瞬间大量请求涌入，用互斥锁或逻辑过期解决。",
              "空值缓存设置较短 TTL，防止恶意穿透攻击。",
            ],
            resources: [
              { title: "Redis 最佳实践", url: "https://redis.io/docs/management/optimization/" },
              { title: "布隆过滤器模块", url: "https://redis.io/docs/stack/bloom/" },
            ],
          },
          {
            id: "redis-w10-3",
            title: "缓存雪崩与一致性",
            detail: "学习缓存雪崩的预防手段和缓存与数据库的一致性保障策略。",
            keyPoints: [
              "缓存雪崩：大量 Key 同时过期，加随机 TTL 和多级缓存缓解。",
              "延迟双删策略：先删缓存、更新 DB、延迟再删缓存保障一致性。",
              "基于 Binlog 的异步更新方案（Canal）可实现最终一致性。",
            ],
            resources: [
              { title: "Redis 缓存策略", url: "https://redis.io/docs/reference/eviction/" },
              { title: "Redis 缓存文档", url: "https://redis.io/docs/manual/client-side-caching/" },
            ],
          },
        ],
      },
      {
        id: "redis-w11",
        title: "第 11 周：分布式锁与限流",
        summary: "掌握基于 Redis 的分布式锁实现与限流算法。",
        overview: "本周学习 Redis 实现分布式锁的多种方案（SETNX、Redlock），以及令牌桶、滑动窗口等限流算法的 Redis 实现。",
        keyPoints: [
          "SET NX EX 实现简单分布式锁，需注意锁续期和误删问题。",
          "Redlock 算法在多个独立 Redis 实例上实现更可靠的分布式锁。",
          "Redis + Lua 脚本实现滑动窗口限流和令牌桶限流。",
        ],
        lessons: [
          {
            id: "redis-w11-1",
            title: "分布式锁实现",
            detail: "深入学习基于 Redis 的分布式锁方案，从简单 SETNX 到 Redlock 算法的演进。",
            keyPoints: [
              "SET key value NX EX timeout 实现基本的分布式锁。",
              "锁的值使用唯一标识（UUID），解锁时需校验防止误删。",
              "Lua 脚本保证「查验+删除」操作的原子性。",
            ],
            resources: [
              { title: "Redis 分布式锁", url: "https://redis.io/docs/manual/patterns/distributed-locks/" },
              { title: "Redlock 算法", url: "https://redis.io/docs/manual/patterns/distributed-locks/#the-redlock-algorithm" },
            ],
          },
          {
            id: "redis-w11-2",
            title: "Redlock 与锁续期",
            detail: "学习 Redlock 算法的多节点加锁流程，理解锁续期（看门狗）机制的必要性。",
            keyPoints: [
              "Redlock 在 N 个独立 Redis 实例上加锁，多数成功即获锁。",
              "锁的有效时间需扣除加锁耗时，防止过早过期。",
              "Redisson 等客户端库实现看门狗自动续期。",
            ],
            resources: [
              { title: "Redlock 规范", url: "https://redis.io/docs/manual/patterns/distributed-locks/" },
              { title: "Redisson GitHub", url: "https://github.com/redisson/redisson" },
            ],
          },
          {
            id: "redis-w11-3",
            title: "限流与会话管理",
            detail: "掌握基于 Redis 的限流算法实现和分布式会话管理方案。",
            keyPoints: [
              "固定窗口：INCR + EXPIRE 实现简单计数限流。",
              "滑动窗口：Sorted Set + 时间戳实现精确限流。",
              "Redis 存储 Session ID 映射，实现分布式会话共享。",
            ],
            resources: [
              { title: "Redis 限流模式", url: "https://redis.io/commands/incr/#pattern-rate-limiter" },
              { title: "Redis 限流模块", url: "https://redis.io/docs/stack/bloom/" },
              { title: "Redis Session 存储", url: "https://redis.io/docs/manual/patterns/" },
            ],
          },
        ],
      },
      {
        id: "redis-w12",
        title: "第 12 周：性能调优与监控",
        summary: "掌握 Redis 性能调优方法与生产环境的监控运维实践。",
        overview: "本周学习 Redis 的性能瓶颈分析、慢查询定位、内存优化以及生产环境的监控和故障排查。",
        keyPoints: [
          "SLOWLOG 记录慢查询，帮助定位性能瓶颈。",
          "INFO 命令提供全面的运行时指标。",
          "bigkeys 和 memory usage 帮助发现和优化大 Key。",
        ],
        lessons: [
          {
            id: "redis-w12-1",
            title: "慢查询与性能分析",
            detail: "学习使用 SLOWLOG、LATENCY 等工具定位性能问题，理解 Redis 性能瓶颈的常见原因。",
            keyPoints: [
              "SLOWLOG GET 查看慢查询日志，slowlog-log-slower-than 设置阈值。",
              "LATENCY DOCTOR 自动分析延迟问题。",
              "避免 O(N) 命令（KEYS、SMEMBERS）在大数据集上执行。",
            ],
            resources: [
              { title: "Redis 慢查询", url: "https://redis.io/commands/slowlog-get/" },
              { title: "Redis 延迟诊断", url: "https://redis.io/docs/management/optimization/latency/" },
            ],
          },
          {
            id: "redis-w12-2",
            title: "内存优化与大 Key 治理",
            detail: "掌握 Redis 内存优化策略，学习大 Key 的发现、拆分与渐进式删除方法。",
            keyPoints: [
              "redis-cli --bigkeys 扫描大 Key，MEMORY USAGE 查看精确内存占用。",
              "大 Key 拆分：Hash 分片、List 分段避免单 Key 过大。",
              "UNLINK 异步删除大 Key，避免阻塞主线程。",
            ],
            resources: [
              { title: "Redis 内存管理", url: "https://redis.io/docs/management/optimization/memory-optimization/" },
              { title: "UNLINK 命令", url: "https://redis.io/commands/unlink/" },
              { title: "MEMORY USAGE", url: "https://redis.io/commands/memory-usage/" },
            ],
          },
          {
            id: "redis-w12-3",
            title: "监控与故障排查",
            detail: "建立 Redis 生产环境的监控体系，掌握常见故障的排查方法和应急处理流程。",
            keyPoints: [
              "INFO 命令输出各维度指标：内存、连接数、命中率、复制状态。",
              "Prometheus + Redis Exporter + Grafana 构建可视化监控。",
              "客户端连接池配置、超时设置和重连策略是稳定运行的关键。",
            ],
            resources: [
              { title: "INFO 命令文档", url: "https://redis.io/commands/info/" },
              { title: "Redis Exporter", url: "https://github.com/oliver006/redis_exporter" },
              { title: "Redis 管理指南", url: "https://redis.io/docs/management/" },
            ],
          },
        ],
      },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════
// 知识卡片
// ═══════════════════════════════════════════════════════════════
export const redisKnowledgeCards: KnowledgeCard[] = [
  {
    id: "redis-kc1",
    title: "Redis 单线程模型",
    summary: "Redis 核心命令处理使用单线程，搭配 IO 多路复用实现高性能。",
    points: [
      "主线程负责命令执行，避免锁竞争和上下文切换。",
      "IO 多路复用（epoll/kqueue）同时处理大量客户端连接。",
      "Redis 6.0 引入多线程 IO，但命令执行仍是单线程。",
      "CPU 密集型 Lua 脚本和大 Key 操作会阻塞整个服务。",
    ],
    practice: "使用 redis-benchmark 测试不同数据大小下的 QPS，观察单线程模型的吞吐极限。",
  },
  {
    id: "redis-kc2",
    title: "数据结构底层编码",
    summary: "Redis 根据数据规模自动选择内存高效的编码方式。",
    points: [
      "String：int（整数）、embstr（≤44 字节）、raw（长字符串）。",
      "List：quicklist（压缩列表节点的双向链表）。",
      "Hash/Set：小数据用 listpack，大数据用 hashtable。",
      "Sorted Set：小数据用 listpack，大数据用 skiplist + hashtable。",
    ],
    practice: "使用 OBJECT ENCODING key 命令查看不同数据类型在不同规模下的编码变化。",
  },
  {
    id: "redis-kc3",
    title: "持久化策略选择",
    summary: "RDB 和 AOF 各有优劣，生产环境推荐混合持久化。",
    points: [
      "RDB：全量快照，恢复快但间隔期间可能丢失数据。",
      "AOF：追加写命令日志，数据更安全但文件较大。",
      "混合持久化：RDB 用于基线数据 + AOF 记录增量命令。",
      "无持久化：纯缓存场景可关闭持久化获取最佳性能。",
    ],
    practice: "分别配置 RDB 和 AOF 持久化，使用 BGSAVE 和 BGREWRITEAOF 观察其行为差异。",
  },
  {
    id: "redis-kc4",
    title: "Sentinel vs Cluster",
    summary: "Sentinel 用于高可用主从架构，Cluster 用于数据分片和水平扩展。",
    points: [
      "Sentinel：监控主从节点，自动故障转移，数据不分片。",
      "Cluster：16384 个哈希槽分片，支持水平扩展。",
      "Sentinel 适合数据量不大但需要高可用的场景。",
      "Cluster 适合大数据量、高吞吐的场景。",
    ],
    practice: "分别搭建 Sentinel 三节点和 Cluster 六节点集群，对比其故障转移行为。",
  },
  {
    id: "redis-kc5",
    title: "缓存一致性方案",
    summary: "缓存与数据库的一致性是分布式系统的经典难题。",
    points: [
      "Cache Aside：应用层协调，先更新 DB 再删除缓存。",
      "延迟双删：删缓存 → 更新 DB → 延迟再删缓存。",
      "Binlog 订阅：通过 Canal 监听数据库变更更新缓存。",
      "最终一致性是实践中最常见的选择，强一致性代价太高。",
    ],
    practice: "实现一个 Cache Aside 模式的缓存层，模拟并发更新场景下的不一致问题。",
  },
  {
    id: "redis-kc6",
    title: "分布式锁要点",
    summary: "Redis 分布式锁需要处理超时、续期和误删等边界情况。",
    points: [
      "基本方案：SET key uuid NX EX timeout 加锁。",
      "解锁需用 Lua 脚本验证 UUID 后删除，保证原子性。",
      "Redlock 在多个独立 Redis 实例上加锁，提升可靠性。",
      "看门狗机制自动续期，防止业务未完成锁已过期。",
    ],
    practice: "用 Redis 实现一个分布式锁，编写 Lua 脚本处理加锁和安全解锁逻辑。",
  },
  {
    id: "redis-kc7",
    title: "Stream 消息队列",
    summary: "Redis Stream 是内置的持久化消息队列，支持消费组和消息确认。",
    points: [
      "Stream 消息持久化存储，支持按 ID 范围查询。",
      "消费组实现消息的负载均衡分发。",
      "PEL（Pending Entries List）跟踪未确认消息。",
      "XCLAIM 处理消费者故障后的消息转移。",
    ],
    practice: "使用 XADD 写入消息，创建消费组并用多个消费者并行处理，测试故障恢复。",
  },
  {
    id: "redis-kc8",
    title: "生产环境优化清单",
    summary: "Redis 生产部署需要关注内存、连接、持久化和安全等多个维度。",
    points: [
      "设置 maxmemory 和淘汰策略，防止内存溢出。",
      "禁用危险命令（KEYS、FLUSHALL），使用 SCAN 替代。",
      "开启 slowlog 和 latency monitor 持续监控性能。",
      "配置 requirepass 密码认证和 ACL 访问控制。",
    ],
    practice: "按照检查清单配置 Redis 实例，使用 redis-cli --intrinsic-latency 测量基准延迟。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const redisExamQuestions: QuizQuestion[] = [
  {
    id: "redis-q1",
    question: "Redis 默认使用什么内存分配器？",
    options: ["tcmalloc", "jemalloc", "ptmalloc", "mimalloc"],
    answer: 1,
    rationale: "Redis 默认使用 jemalloc 作为内存分配器，它在多线程环境下有更好的碎片控制。",
  },
  {
    id: "redis-q2",
    question: "Redis 中 String 类型最大能存储多少数据？",
    options: ["256MB", "512MB", "1GB", "100MB"],
    answer: 1,
    rationale: "Redis String 类型最大能存储 512MB 的数据。",
  },
  {
    id: "redis-q3",
    question: "以下哪种持久化方式会记录每条写命令？",
    options: ["RDB", "AOF", "快照", "主从复制"],
    answer: 1,
    rationale: "AOF（Append Only File）以追加方式记录每条写命令，保证数据完整性。",
  },
  {
    id: "redis-q4",
    question: "Redis Sorted Set 底层使用什么数据结构实现排序？",
    options: ["红黑树", "B+树", "跳表", "AVL 树"],
    answer: 2,
    rationale: "Redis Sorted Set 底层使用跳表（skiplist）实现排序，相比红黑树实现更简单且支持范围查询。",
  },
  {
    id: "redis-q5",
    question: "Redis Cluster 共有多少个哈希槽？",
    options: ["1024", "4096", "16384", "65536"],
    answer: 2,
    rationale: "Redis Cluster 使用 16384 个哈希槽进行数据分片。",
  },
  {
    id: "redis-q6",
    question: "Redis 事务中某条命令执行出错，后续命令会怎样？",
    options: ["全部回滚", "继续执行", "跳过当前命令", "事务终止"],
    answer: 1,
    rationale: "Redis 事务不支持回滚，即使某条命令出错，后续命令仍会继续执行。",
  },
  {
    id: "redis-q7",
    question: "HyperLogLog 的标准误差率约为？",
    options: ["0.1%", "0.81%", "1.5%", "5%"],
    answer: 1,
    rationale: "Redis HyperLogLog 的标准误差率约为 0.81%，使用约 12KB 内存即可统计大规模基数。",
  },
  {
    id: "redis-q8",
    question: "Redis Sentinel 判定节点客观下线（ODOWN）需要？",
    options: ["单个 Sentinel 判定", "所有 Sentinel 一致判定", "多数 Sentinel 判定", "管理员手动确认"],
    answer: 2,
    rationale: "客观下线（ODOWN）需要 quorum 数量（通常为多数）的 Sentinel 实例同意才能确认。",
  },
  {
    id: "redis-q9",
    question: "Redis Stream 中 XACK 命令的作用是？",
    options: ["发送消息", "创建消费组", "确认消息已处理", "删除消息"],
    answer: 2,
    rationale: "XACK 用于确认消息已被消费者成功处理，从 Pending Entries List 中移除。",
  },
  {
    id: "redis-q10",
    question: "防止缓存穿透最常用的方案是？",
    options: ["增加 TTL", "布隆过滤器", "多级缓存", "主从复制"],
    answer: 1,
    rationale: "布隆过滤器可在请求到达缓存和数据库之前过滤掉不存在的数据请求，有效防止缓存穿透。",
  },
  {
    id: "redis-q11",
    question: "Redlock 算法至少需要多少个独立的 Redis 实例？",
    options: ["1 个", "2 个", "3 个", "5 个"],
    answer: 3,
    rationale: "Redlock 算法建议使用 5 个独立的 Redis 实例，在多数（至少 3 个）上成功加锁才算获取锁成功。",
  },
  {
    id: "redis-q12",
    question: "Redis 6.0 引入的多线程主要用于？",
    options: ["命令执行", "网络 IO 处理", "持久化操作", "集群通信"],
    answer: 1,
    rationale: "Redis 6.0 引入多线程 IO 用于网络读写，但命令执行仍然是单线程的。",
  },
  {
    id: "redis-q13",
    question: "以下哪个命令可以异步删除大 Key？",
    options: ["DEL", "UNLINK", "REMOVE", "EXPIRE"],
    answer: 1,
    rationale: "UNLINK 命令可以异步删除 Key，将实际的内存回收放到后台线程执行，避免阻塞主线程。",
  },
  {
    id: "redis-q14",
    question: "Redis Cluster 中 MOVED 重定向表示？",
    options: ["槽正在迁移中", "槽已永久转移到目标节点", "节点正在下线", "集群不可用"],
    answer: 1,
    rationale: "MOVED 重定向表示请求的 Key 所在的槽已经固定分配到另一个节点，客户端应更新槽映射。",
  },
  {
    id: "redis-q15",
    question: "Redis Pipeline 的主要优势是？",
    options: ["保证原子性", "减少网络往返", "实现事务", "数据加密"],
    answer: 1,
    rationale: "Pipeline 将多个命令批量发送到服务器，减少了网络 RTT 开销，显著提升吞吐量。",
  },
  {
    id: "redis-q16",
    question: "Redis AOF 重写的目的是？",
    options: ["备份数据", "压缩 AOF 文件体积", "修复损坏的 AOF", "同步主从数据"],
    answer: 1,
    rationale: "AOF 重写会创建一个新的 AOF 文件，用最少的命令记录当前数据集，从而压缩文件体积。",
  },
  {
    id: "redis-q17",
    question: "Redis GeoSpatial 底层基于哪种数据结构实现？",
    options: ["Hash", "List", "Sorted Set", "Stream"],
    answer: 2,
    rationale: "Redis GeoSpatial 底层使用 Sorted Set 存储，将经纬度编码为 GeoHash 作为 Score。",
  },
  {
    id: "redis-q18",
    question: "Redis 主从复制中，从节点断线重连后优先尝试？",
    options: ["全量同步", "部分重同步", "重新建立连接", "切换主节点"],
    answer: 1,
    rationale: "从节点断线重连后会优先尝试部分重同步（PSYNC），通过复制积压缓冲区获取增量数据。",
  },
  {
    id: "redis-q19",
    question: "缓存击穿是指？",
    options: ["大量 Key 同时过期", "请求不存在的数据", "热点 Key 过期瞬间大量请求涌入", "缓存服务器宕机"],
    answer: 2,
    rationale: "缓存击穿指某个热点 Key 过期的瞬间，大量并发请求绕过缓存直接打到数据库。",
  },
  {
    id: "redis-q20",
    question: "Redis Lua 脚本中调用 Redis 命令应使用？",
    options: ["redis.exec()", "redis.call()", "redis.run()", "redis.command()"],
    answer: 1,
    rationale: "在 Redis Lua 脚本中使用 redis.call() 调用 Redis 命令，出错时会中止脚本；redis.pcall() 出错时返回错误对象。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const redisRoadmap: RoadmapDefinition = {
  id: "redis" as RoadmapDefinition["id"],
  label: "Redis 深入",
  title: "Redis 深入学习路线",
  durationLabel: "12 周 · 36 个课时",
  description:
    "从 Redis 基础数据结构出发，深入持久化机制与高级特性，掌握 Sentinel 哨兵与 Cluster 集群的高可用架构，最终学会缓存策略、分布式锁、性能调优等生产实践。",
  heroBadge: "Redis · 缓存 · 高可用 · 分布式",
  stages: redisStages,
  knowledgeCards: redisKnowledgeCards,
  examQuestions: redisExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 Redis 学习之旅！先从基础数据结构和命令入手。"
    if (percent < 25) return "继续学习 Hash、Set、Sorted Set，打好数据结构基础。"
    if (percent < 50) return "深入 Lua 脚本和 Stream，掌握 Redis 的高级特性。"
    if (percent < 75) return "主从复制和集群是高可用的关键，务必动手实践！"
    if (percent < 100) return "即将完成！缓存模式和分布式锁是面试和工作的重点。"
    return "恭喜完成！你已系统掌握 Redis 的核心知识与生产实践。"
  },
  resourceGuide: {
    environment:
      "推荐使用 Docker 快速启动 Redis：docker run -d --name redis -p 6379:6379 redis:latest。也可本地编译安装最新稳定版。",
    fallbackKeyPoints: [
      "Redis 五大基础数据类型：String、List、Hash、Set、Sorted Set",
      "持久化两种方式：RDB 快照和 AOF 日志，生产推荐混合持久化",
      "Sentinel 实现自动故障转移，Cluster 实现数据分片",
      "缓存穿透用布隆过滤器，缓存击穿用互斥锁，缓存雪崩用随机 TTL",
      "分布式锁需注意超时续期和安全解锁",
    ],
    handsOnSteps: [
      "使用 Docker 部署 Redis 单机实例并练习基本命令",
      "配置 RDB 和 AOF 持久化并观察恢复过程",
      "搭建一主两从架构并测试读写分离",
      "部署三节点 Sentinel 集群并模拟故障转移",
      "创建六节点 Redis Cluster 并测试扩缩容",
    ],
    selfChecks: [
      "能否根据业务场景选择合适的 Redis 数据类型？",
      "能否解释 RDB 和 AOF 的优缺点及适用场景？",
      "能否搭建并运维 Redis Cluster 集群？",
      "能否实现一个安全可靠的分布式锁？",
      "能否排查 Redis 慢查询和内存问题？",
    ],
    extensions: [
      "深入 Redis 源码，理解事件循环和数据结构实现",
      "学习 Redis Operator 在 Kubernetes 上部署",
      "研究 Redis + Lua 实现复杂业务逻辑",
      "探索 Redis Stack（RedisJSON、RediSearch）生态",
    ],
    lessonQuizAdvice: "每周完成后测验，重点关注数据结构选型、持久化策略和缓存模式。",
  },
}
