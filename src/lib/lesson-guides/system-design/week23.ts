import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week23Guides: Record<string, LessonGuide> = {
    "w23-1": {
        lessonId: "w23-1",
        background: [
            "【URL 短链接原理】URL Shortener 将长 URL 映射为短码：长 URL → 生成唯一 ID → 编码为短码（Base62）→ 存储映射 → 重定向访问。核心挑战：短码生成、存储扩展、重定向性能。",
            "【短码生成策略】三种策略：1) 自增 ID + Base62 编码（简单但可预测）2) 随机生成 + 碰撞检测（不可预测但可能碰撞）3) 预生成 + 分配（高性能但需要预热）。7 位 Base62 可表示 3.5 万亿个 URL。",
            "【Base62 编码】Base62 使用 0-9、a-z、A-Z 共 62 个字符。编码算法：将数字不断除以 62，取余数映射到字符。7 位 Base62 = 62^7 ≈ 3.5 万亿个可能值。",
            "【Pastebin 设计】Pastebin 存储和分享文本片段。与 URL Shortener 类似：生成唯一 ID、存储内容（对象存储）、内容可过期。额外功能：语法高亮、私有/公开、密码保护。",
            "【分布式 ID 生成】高并发下需要分布式唯一 ID：Snowflake（时间戳 + 机器 ID + 序列号）、UUID（全局唯一但长）、数据库自增（有瓶颈）。Snowflake 是常用选择：64 位、有序、分布式。"
        ],
        keyDifficulties: [
            "【碰撞处理】随机生成短码可能碰撞：生成 → 检查是否存在 → 存在则重新生成。使用 Bloom Filter 快速预检减少数据库查询。或使用预生成池避免运行时碰撞检测。",
            "【热点 Key 处理】热门短链接可能成为热点。解决方案：多级缓存（CDN + Redis + 本地缓存）、读写分离、缓存预热。301（永久重定向，可缓存）vs 302（临时重定向，需分析）。",
            "【过期策略】短链接可能需要过期。方案：TTL 字段 + 定期清理任务、惰性删除（访问时检查）、软删除（标记删除，定期清理）。考虑过期后短码是否可复用。",
            "【内容存储选择】Pastebin 内容存储：小文本用数据库、大文本用对象存储（S3）。内容去重：计算哈希，相同哈希只存一份。考虑压缩减少存储成本。"
        ],
        handsOnPath: [
            "实现 Base62 编码：const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; function encode(num) { let str = ''; while (num > 0) { str = chars[num % 62] + str; num = Math.floor(num / 62); } return str; }",
            "设计数据模型：CREATE TABLE urls (id BIGINT PRIMARY KEY, short_code VARCHAR(10) UNIQUE, original_url TEXT, created_at TIMESTAMP, expires_at TIMESTAMP);",
            "实现重定向：app.get('/:code', async (req, res) => { const url = await cache.get(code) || await db.findByCode(code); if (url) res.redirect(301, url.original_url); else res.status(404); });",
            "使用 Snowflake ID：const id = snowflake.generate(); const shortCode = base62Encode(id);",
            "实现 Bloom Filter 预检：if (!bloomFilter.mightContain(shortCode)) { /* 肯定不存在，可以使用 */ }"
        ],
        selfCheck: [
            "URL Shortener 的核心组件是什么？",
            "7 位 Base62 可以表示多少个 URL？",
            "如何处理短码碰撞？",
            "301 和 302 重定向的区别是什么？",
            "Snowflake ID 的组成部分是什么？"
        ],
        extensions: [
            "研究 Bitly 的短链接架构。",
            "学习自定义短码的实现和冲突处理。",
            "了解短链接的安全问题（恶意链接检测）。",
            "研究短链接分析和统计系统的设计。"
        ],
        sourceUrls: [
            "https://blog.bytebytego.com/p/design-a-url-shortener",
            "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md"
        ]
    },
    "w23-2": {
        lessonId: "w23-2",
        background: [
            "【限流器设计目标】Rate Limiter 保护系统免受过载：控制请求速率、防止滥用、确保公平使用。'A rate limiter is a defensive mechanism to prevent resource starvation caused by aggressive traffic'。",
            "【四层限流策略】Stripe 的四层限流架构：1) 全局负载限制（保护总容量）2) 每用户限制（防止滥用）3) 每 API 限制（保护昂贵操作）4) 并发限制（控制同时执行数）。",
            "【令牌桶算法】Token Bucket：以固定速率添加令牌，请求消耗令牌，桶满则丢弃新令牌。参数：桶容量（允许的突发）、填充速率（平均速率）。适合允许短期突发的场景。",
            "【滑动窗口算法】Sliding Window Log：记录每个请求的时间戳，统计窗口内请求数。精确但内存占用大。Sliding Window Counter：结合固定窗口的计数和滑动窗口的加权，平衡精度和效率。",
            "【Cloudflare 实现】Cloudflare 使用滑动窗口计数器：'A hybrid approach that combines the low memory overhead of fixed window with the improved boundary conditions of sliding log'。存储前一窗口和当前窗口的计数，加权计算。"
        ],
        keyDifficulties: [
            "【分布式限流一致性】多节点限流需要共享状态。方案：集中式存储（Redis）、最终一致（本地计数定期同步）、分区限流（每节点独立配额）。Redis + Lua 脚本确保原子性。",
            "【边界条件处理】固定窗口在边界可能突发 2 倍。滑动窗口加权计算：当前窗口计数 + 前一窗口计数 × 重叠比例。示例：窗口 1 分钟，当前时刻 0:30，前一窗口计数 × 0.5 + 当前窗口计数。",
            "【限流粒度设计】限流维度：用户 ID、API Key、IP 地址、端点。组合限流：全局 10000 req/min + 每用户 100 req/min + 每 IP 1000 req/min。不同维度使用不同策略。",
            "【优雅降级】被限流时的响应：返回 429 Too Many Requests、包含 Retry-After 头、提供降级服务（如返回缓存数据）。客户端实现指数退避重试。"
        ],
        handsOnPath: [
            "实现令牌桶：class TokenBucket { constructor(capacity, fillRate) { this.tokens = capacity; setInterval(() => this.tokens = Math.min(capacity, this.tokens + fillRate), 1000); } allow() { if (this.tokens > 0) { this.tokens--; return true; } return false; } }",
            "Redis 滑动窗口：MULTI; ZADD key timestamp member; ZREMRANGEBYSCORE key 0 (now - window); ZCARD key; EXEC;",
            "实现加权滑动窗口：const weight = (windowSize - elapsed) / windowSize; const count = currentCount + previousCount * weight;",
            "配置 Nginx 限流：limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s; limit_req zone=api burst=20 nodelay;",
            "返回限流响应：res.status(429).set('Retry-After', '60').json({ error: 'Rate limit exceeded' });"
        ],
        selfCheck: [
            "令牌桶算法的两个核心参数是什么？",
            "滑动窗口如何解决固定窗口的边界问题？",
            "分布式限流如何保证一致性？",
            "被限流时应该返回什么响应？",
            "Stripe 的四层限流策略是什么？"
        ],
        extensions: [
            "研究自适应限流（Adaptive Rate Limiting）。",
            "学习 Envoy 的本地和全局限流。",
            "了解漏桶与令牌桶的区别和选择。",
            "研究公平队列（Fair Queuing）算法。"
        ],
        sourceUrls: [
            "https://stripe.com/blog/rate-limiters",
            "https://blog.cloudflare.com/counting-things-a-lot-of-different-things/"
        ]
    },
    "w23-3": {
        lessonId: "w23-3",
        background: [
            "【Dynamo 设计目标】Amazon Dynamo 是高可用键值存储：'always writable'优先于强一致性。设计目标：毫秒级延迟、高可用（99.9% SLA）、可扩展、最终一致性可接受。",
            "【一致性哈希】Consistent Hashing 用于数据分区：节点在哈希环上分布，key 映射到顺时针第一个节点。增删节点只影响相邻数据。虚拟节点（Virtual Nodes）解决负载不均问题。",
            "【向量时钟】Vector Clock 追踪数据版本：每个节点维护 (node_id, counter) 对。写入时增加本节点计数器。通过比较向量时钟判断因果关系或冲突，冲突由客户端解决。",
            "【Sloppy Quorum】灵活的仲裁机制：N 个副本、W 个写确认、R 个读确认。当 R + W > N 时保证读到最新写入。Dynamo 默认 N=3, R=2, W=2。允许临时写入非首选节点（Hinted Handoff）。",
            "【Hinted Handoff】当目标节点不可用时，写入另一个节点并带有'提示'。目标节点恢复后，持有提示的节点将数据传回。保证写入可用性，但增加了一致性延迟。"
        ],
        keyDifficulties: [
            "【NWR 参数调优】N=副本数，W=写确认数，R=读确认数。强一致性：R + W > N（如 N=3, R=2, W=2）。高可用写：W=1（只需一个确认）。高可用读：R=1。根据业务需求调整。",
            "【冲突解决策略】向量时钟检测冲突，解决策略：Last-Write-Wins（简单但可能丢数据）、客户端合并（复杂但精确）、应用层 CRDT（自动合并）。Dynamo 让客户端解决冲突。",
            "【反熵协议】Anti-Entropy 用于副本同步：Merkle Tree 快速检测差异，只同步不同的部分。后台运行，减少节点间数据不一致。定期执行，不影响正常读写。",
            "【虚拟节点设计】Virtual Nodes：每个物理节点负责多个虚拟节点。好处：负载更均衡、新节点加入时数据迁移更分散、可根据节点能力分配不同数量的虚拟节点。"
        ],
        handsOnPath: [
            "实现一致性哈希：const hash = (key) => md5(key) % 2^32; const findNode = (key) => ring.find(n => n.hash >= hash(key)) || ring[0];",
            "实现向量时钟：class VectorClock { increment(nodeId) { this.clock[nodeId] = (this.clock[nodeId] || 0) + 1; } compare(other) { /* 比较因果关系 */ } }",
            "配置 Quorum：const N = 3, W = 2, R = 2; // R + W > N 保证一致性",
            "实现 Hinted Handoff：if (!targetNode.isAvailable()) { writeToAlternate(data, { hint: targetNode.id }); }",
            "实现 Merkle Tree 同步：比较根哈希 → 不同则递归比较子树 → 找到差异叶节点 → 同步数据"
        ],
        selfCheck: [
            "Dynamo 的设计目标是什么？",
            "一致性哈希如何处理节点增删？",
            "向量时钟如何检测冲突？",
            "NWR 参数如何影响一致性和可用性？",
            "Hinted Handoff 的作用是什么？"
        ],
        extensions: [
            "研究 Apache Cassandra 对 Dynamo 论文的实现。",
            "学习 DynamoDB（AWS 托管服务）的设计。",
            "了解 Riak 的 CRDT 实现。",
            "研究一致性哈希的优化（跳跃一致性哈希）。"
        ],
        sourceUrls: [
            "https://www.allthingsdistributed.com/2007/10/amazons_dynamo.html",
            "https://www.cs.cornell.edu/courses/cs5414/2017fa/papers/dynamo.pdf"
        ]
    },
    "w23-4": {
        lessonId: "w23-4",
        background: [
            "【Bitcask 设计理念】Bitcask 是日志结构的键值存储：'A Log-Structured Hash Table for Fast Key/Value Data'。只追加写入（append-only），所有 key 的索引（keydir）常驻内存，读取只需一次磁盘 IO。",
            "【日志结构存储】所有写入追加到活跃数据文件。当文件达到阈值，切换到新文件，旧文件只读。删除是写入墓碑（tombstone）。后台合并（compaction）清理过期和删除的数据。",
            "【Keydir 索引】Keydir 是内存中的哈希表：key → (file_id, value_pos, value_size, timestamp)。启动时遍历数据文件重建索引，或使用 Hint 文件加速恢复。所有 key 必须能放入内存。",
            "【写入流程】写入流程：追加 (key, value, timestamp, crc) 到活跃文件 → 更新 keydir → 返回成功。只需顺序写，无需随机写，性能极高。fsync 可配置为每次写入或批量。",
            "【读取流程】读取流程：在 keydir 中查找 key → 获取 (file_id, offset, size) → 从文件读取 value → CRC 校验 → 返回。只需一次磁盘随机读，延迟可预测。"
        ],
        keyDifficulties: [
            "【合并策略】Compaction/Merge：后台进程读取只读文件，过滤过期和删除的数据，写入新文件。合并后更新 keydir 指向新文件。时机：定时、文件数量阈值、空间回收比例。",
            "【内存限制】所有 key 必须在内存中。限制因素：key 数量 × (key 大小 + 指针大小)。适合 key 较短、value 较大的场景。大量小 key 场景需要分片或选择其他存储。",
            "【崩溃恢复】恢复策略：1) 重建 keydir（遍历所有数据文件，慢）2) Hint 文件（每个数据文件对应一个 hint 文件，只含 key 和元数据，快）。Hint 文件在合并时生成。",
            "【并发控制】写入串行化（单写者）：保证追加顺序一致。多读者并发读取：keydir 是无锁读取的哈希表。写入完成后原子更新 keydir 指针。"
        ],
        handsOnPath: [
            "数据文件格式：| crc (4B) | timestamp (4B) | key_size (4B) | value_size (4B) | key | value |",
            "实现 keydir：const keydir = new Map(); keydir.set(key, { fileId, offset, size, timestamp });",
            "实现写入：const offset = activeFile.position; activeFile.write(entry); keydir.set(key, { fileId: activeFile.id, offset, size: entry.length, timestamp });",
            "实现读取：const { fileId, offset, size } = keydir.get(key); const entry = readFile(fileId, offset, size); return entry.value;",
            "实现合并：for (const file of oldFiles) { for (const entry of file) { if (isLatest(entry, keydir)) newFile.write(entry); } }"
        ],
        selfCheck: [
            "Bitcask 为什么读取只需一次磁盘 IO？",
            "Keydir 存储了什么信息？",
            "Bitcask 如何处理删除操作？",
            "为什么 Bitcask 要求所有 key 在内存中？",
            "合并过程是如何工作的？"
        ],
        extensions: [
            "研究 Riak 的 Bitcask 实现。",
            "学习 LSM-Tree 与 Bitcask 的对比。",
            "了解 RocksDB 的设计。",
            "研究日志结构存储的 GC 策略。"
        ],
        sourceUrls: [
            "https://riak.com/assets/bitcask-intro.pdf",
            "https://arpitbhayani.me/blogs/bitcask/"
        ]
    }
}

export const week23Quizzes: Record<string, QuizQuestion[]> = {
    "w23-1": [
        {
            id: "w23-1-q1",
            question: "7 位 Base62 编码可以表示多少个不同的 URL？",
            options: [
                "约 100 万",
                "约 1 亿",
                "约 35 亿",
                "约 3.5 万亿"
            ],
            answer: 3,
            rationale: "Base62 使用 62 个字符，7 位 Base62 = 62^7 ≈ 3.5 万亿个可能值。"
        },
        {
            id: "w23-1-q2",
            question: "URL Shortener 的三种短码生成策略不包括？",
            options: [
                "自增 ID + Base62 编码",
                "随机生成 + 碰撞检测",
                "MD5 哈希全部使用",
                "预生成 + 分配"
            ],
            answer: 2,
            rationale: "三种策略：1) 自增 ID + Base62 2) 随机生成 + 碰撞检测 3) 预生成 + 分配。MD5 太长不直接使用。"
        },
        {
            id: "w23-1-q3",
            question: "301 和 302 重定向的区别是什么？",
            options: [
                "没有区别",
                "301 是永久重定向可缓存，302 是临时重定向需每次请求",
                "302 更快",
                "301 只能用于 HTTPS"
            ],
            answer: 1,
            rationale: "301（永久重定向，可缓存）vs 302（临时重定向，需每次请求服务器）。301 更适合 SEO。"
        },
        {
            id: "w23-1-q4",
            question: "Snowflake ID 的组成部分是什么？",
            options: [
                "只有时间戳",
                "时间戳 + 机器 ID + 序列号",
                "随机数",
                "UUID"
            ],
            answer: 1,
            rationale: "Snowflake ID：64 位，由时间戳 + 机器 ID + 序列号组成，有序且分布式唯一。"
        },
        {
            id: "w23-1-q5",
            question: "如何处理短码碰撞？",
            options: [
                "忽略碰撞",
                "生成 → 检查是否存在 → 重新生成；或使用 Bloom Filter 预检",
                "使用更长的短码",
                "限制生成速度"
            ],
            answer: 1,
            rationale: "碰撞处理：生成 → 检查是否存在 → 存在则重新生成。Bloom Filter 快速预检减少数据库查询。"
        },
        {
            id: "w23-1-q6",
            question: "热门短链接的热点问题如何解决？",
            options: [
                "限制访问频率",
                "多级缓存（CDN + Redis + 本地缓存）",
                "删除热门链接",
                "降低服务质量"
            ],
            answer: 1,
            rationale: "热点解决方案：多级缓存（CDN + Redis + 本地缓存）、读写分离、缓存预热。"
        },
        {
            id: "w23-1-q7",
            question: "Pastebin 大文本内容应该存储在哪里？",
            options: [
                "数据库",
                "对象存储（如 S3）",
                "内存",
                "本地文件系统"
            ],
            answer: 1,
            rationale: "小文本用数据库、大文本用对象存储（S3）。考虑内容去重和压缩减少存储成本。"
        },
        {
            id: "w23-1-q8",
            question: "Base62 编码使用哪些字符？",
            options: [
                "只有数字",
                "数字和小写字母",
                "0-9、a-z、A-Z 共 62 个字符",
                "所有 ASCII 字符"
            ],
            answer: 2,
            rationale: "Base62 使用 0-9、a-z、A-Z 共 62 个字符，避免了 URL 不安全字符。"
        },
        {
            id: "w23-1-q9",
            question: "短链接过期后的短码处理策略是什么？",
            options: [
                "必须复用",
                "根据业务决定是否可复用",
                "必须保留永不复用",
                "立即删除"
            ],
            answer: 1,
            rationale: "过期策略：TTL + 定期清理或惰性删除。过期后短码是否可复用取决于业务需求。"
        },
        {
            id: "w23-1-q10",
            question: "使用 Bloom Filter 进行碰撞预检的好处是什么？",
            options: [
                "保证不碰撞",
                "快速判断短码肯定不存在，减少数据库查询",
                "减少存储空间",
                "提高安全性"
            ],
            answer: 1,
            rationale: "Bloom Filter 可快速判断短码肯定不存在（可能误判存在），减少不必要的数据库查询。"
        },
        {
            id: "w23-1-q11",
            question: "Pastebin 内容去重的方法是什么？",
            options: [
                "不去重",
                "计算哈希，相同哈希只存一份",
                "全文比较",
                "按大小分类"
            ],
            answer: 1,
            rationale: "内容去重：计算哈希，相同哈希只存一份。减少存储成本。"
        },
        {
            id: "w23-1-q12",
            question: "自增 ID + Base62 编码的缺点是什么？",
            options: [
                "性能差",
                "短码可预测，容易被枚举",
                "存储成本高",
                "实现复杂"
            ],
            answer: 1,
            rationale: "自增 ID 简单但可预测，攻击者可以通过递增枚举所有短链接。"
        }
    ],
    "w23-2": [
        {
            id: "w23-2-q1",
            question: "令牌桶算法的两个核心参数是什么？",
            options: [
                "时间和计数",
                "桶容量（突发量）和填充速率（平均速率）",
                "最大值和最小值",
                "窗口大小和步长"
            ],
            answer: 1,
            rationale: "令牌桶参数：桶容量（允许的突发量）、填充速率（平均速率）。"
        },
        {
            id: "w23-2-q2",
            question: "固定窗口算法的边界问题是什么？",
            options: [
                "内存占用大",
                "窗口边界可能出现 2 倍突发流量",
                "实现复杂",
                "不支持分布式"
            ],
            answer: 1,
            rationale: "固定窗口在边界可能突发 2 倍：如限制 100 req/min，在 0:59 和 1:00 各发 100 请求，实际 2 秒内 200 请求。"
        },
        {
            id: "w23-2-q3",
            question: "滑动窗口计数器如何解决边界问题？",
            options: [
                "使用更小的窗口",
                "当前窗口计数 + 前一窗口计数 × 重叠比例",
                "使用随机数",
                "增加窗口数量"
            ],
            answer: 1,
            rationale: "加权计算：当前窗口计数 + 前一窗口计数 × (窗口大小 - 已过时间) / 窗口大小。"
        },
        {
            id: "w23-2-q4",
            question: "被限流时应该返回什么 HTTP 状态码？",
            options: [
                "400 Bad Request",
                "403 Forbidden",
                "429 Too Many Requests",
                "503 Service Unavailable"
            ],
            answer: 2,
            rationale: "被限流时返回 429 Too Many Requests，并包含 Retry-After 头告知重试时间。"
        },
        {
            id: "w23-2-q5",
            question: "Stripe 的四层限流策略不包括？",
            options: [
                "全局负载限制",
                "每用户限制",
                "每数据库限制",
                "并发限制"
            ],
            answer: 2,
            rationale: "Stripe 四层：1) 全局负载限制 2) 每用户限制 3) 每 API 限制 4) 并发限制。"
        },
        {
            id: "w23-2-q6",
            question: "分布式限流如何保证原子性？",
            options: [
                "使用锁",
                "Redis + Lua 脚本",
                "数据库事务",
                "消息队列"
            ],
            answer: 1,
            rationale: "Redis + Lua 脚本确保原子性：INCR + EXPIRE 在一个原子操作中完成，避免竞态条件。"
        },
        {
            id: "w23-2-q7",
            question: "令牌桶允许突发流量的原因是什么？",
            options: [
                "设计缺陷",
                "桶内累积的令牌可以一次性使用",
                "不限制突发",
                "使用随机令牌"
            ],
            answer: 1,
            rationale: "令牌桶允许突发：桶内累积的令牌可以一次性使用，但平均速率仍受填充速率限制。"
        },
        {
            id: "w23-2-q8",
            question: "Cloudflare 使用什么限流算法？",
            options: [
                "固定窗口",
                "滑动窗口计数器（混合方法）",
                "漏桶",
                "随机丢弃"
            ],
            answer: 1,
            rationale: "Cloudflare：'A hybrid approach that combines fixed window with sliding log'——滑动窗口计数器。"
        },
        {
            id: "w23-2-q9",
            question: "限流的多个维度通常包括什么？",
            options: [
                "只有用户 ID",
                "用户 ID、API Key、IP 地址、端点",
                "只有 IP",
                "只有端点"
            ],
            answer: 1,
            rationale: "限流维度：用户 ID、API Key、IP 地址、端点。不同维度使用不同策略。"
        },
        {
            id: "w23-2-q10",
            question: "客户端被限流后应该如何处理？",
            options: [
                "立即重试",
                "实现指数退避重试",
                "放弃请求",
                "切换服务器"
            ],
            answer: 1,
            rationale: "客户端应实现指数退避重试，根据 Retry-After 头等待后重试。"
        },
        {
            id: "w23-2-q11",
            question: "滑动窗口日志算法的缺点是什么？",
            options: [
                "不精确",
                "内存占用大（需要记录每个请求的时间戳）",
                "实现简单",
                "不支持突发"
            ],
            answer: 1,
            rationale: "滑动窗口日志精确但内存占用大，需要记录每个请求的时间戳。"
        },
        {
            id: "w23-2-q12",
            question: "优雅降级在限流中的作用是什么？",
            options: [
                "完全拒绝服务",
                "返回 429 并可提供降级服务（如缓存数据）",
                "无限等待",
                "切换协议"
            ],
            answer: 1,
            rationale: "优雅降级：返回 429、包含 Retry-After、可提供降级服务（如返回缓存数据）。"
        }
    ],
    "w23-3": [
        {
            id: "w23-3-q1",
            question: "Amazon Dynamo 的设计目标优先级是什么？",
            options: [
                "强一致性优先",
                "'always writable' 可用性优先于强一致性",
                "性能优先",
                "成本优先"
            ],
            answer: 1,
            rationale: "Dynamo 设计目标：'always writable'优先于强一致性，接受最终一致性。"
        },
        {
            id: "w23-3-q2",
            question: "一致性哈希如何处理节点增删？",
            options: [
                "重新分配所有数据",
                "只影响相邻数据，使用虚拟节点均衡负载",
                "停止服务",
                "丢弃数据"
            ],
            answer: 1,
            rationale: "一致性哈希：增删节点只影响相邻数据。虚拟节点解决负载不均问题。"
        },
        {
            id: "w23-3-q3",
            question: "向量时钟的作用是什么？",
            options: [
                "记录时间",
                "追踪数据版本，检测因果关系或冲突",
                "负载均衡",
                "数据压缩"
            ],
            answer: 1,
            rationale: "向量时钟追踪数据版本，通过比较可判断因果关系或冲突，冲突由客户端解决。"
        },
        {
            id: "w23-3-q4",
            question: "Dynamo 的 NWR 参数中，如何保证读到最新写入？",
            options: [
                "N = W",
                "R + W > N",
                "R = N",
                "W = N"
            ],
            answer: 1,
            rationale: "当 R + W > N 时保证读到最新写入。Dynamo 默认 N=3, R=2, W=2。"
        },
        {
            id: "w23-3-q5",
            question: "Hinted Handoff 的作用是什么？",
            options: [
                "负载均衡",
                "目标节点不可用时临时写入另一节点，恢复后传回",
                "数据压缩",
                "加密传输"
            ],
            answer: 1,
            rationale: "Hinted Handoff：目标节点不可用时写入另一节点并带有'提示'，恢复后数据传回。保证写入可用性。"
        },
        {
            id: "w23-3-q6",
            question: "虚拟节点的好处是什么？",
            options: [
                "减少节点数量",
                "负载更均衡、数据迁移更分散",
                "减少存储",
                "加速查询"
            ],
            answer: 1,
            rationale: "虚拟节点：负载更均衡、新节点加入时数据迁移更分散、可根据节点能力分配数量。"
        },
        {
            id: "w23-3-q7",
            question: "Dynamo 的冲突解决策略是什么？",
            options: [
                "服务端自动解决",
                "向量时钟检测冲突，由客户端解决",
                "丢弃旧数据",
                "随机选择"
            ],
            answer: 1,
            rationale: "向量时钟检测冲突，Dynamo 让客户端解决冲突（如购物车合并）。"
        },
        {
            id: "w23-3-q8",
            question: "反熵协议使用什么数据结构快速检测差异？",
            options: [
                "哈希表",
                "Merkle Tree",
                "B+ 树",
                "跳表"
            ],
            answer: 1,
            rationale: "Anti-Entropy 使用 Merkle Tree 快速检测差异，只同步不同的部分。"
        },
        {
            id: "w23-3-q9",
            question: "W=1 的配置意味着什么？",
            options: [
                "高一致性",
                "高可用写（只需一个确认）",
                "无法写入",
                "所有节点确认"
            ],
            answer: 1,
            rationale: "W=1 表示只需一个副本确认即可返回成功，提高写入可用性，但降低持久性保证。"
        },
        {
            id: "w23-3-q10",
            question: "Last-Write-Wins 冲突解决策略的缺点是什么？",
            options: [
                "实现复杂",
                "可能丢失数据",
                "性能差",
                "不支持分布式"
            ],
            answer: 1,
            rationale: "Last-Write-Wins 简单但可能丢数据：并发写入时只保留最后一个，其他写入丢失。"
        },
        {
            id: "w23-3-q11",
            question: "Dynamo 的 SLA 目标是什么？",
            options: [
                "99%",
                "99.9%",
                "99.99%",
                "100%"
            ],
            answer: 1,
            rationale: "Dynamo 设计目标：99.9% 的请求在毫秒级延迟内完成。"
        },
        {
            id: "w23-3-q12",
            question: "一致性哈希环上 key 如何找到目标节点？",
            options: [
                "随机选择",
                "映射到顺时针第一个节点",
                "映射到逆时针第一个节点",
                "映射到最近的节点"
            ],
            answer: 1,
            rationale: "key 映射到顺时针方向第一个节点。这确保了节点增删只影响相邻数据。"
        }
    ],
    "w23-4": [
        {
            id: "w23-4-q1",
            question: "Bitcask 为什么读取只需一次磁盘 IO？",
            options: [
                "数据很小",
                "所有 key 的索引（keydir）在内存中，直接定位到磁盘位置",
                "使用 SSD",
                "数据压缩"
            ],
            answer: 1,
            rationale: "Keydir 在内存中存储 key → (file_id, offset, size)，直接定位磁盘位置，只需一次随机读。"
        },
        {
            id: "w23-4-q2",
            question: "Bitcask 的写入模式是什么？",
            options: [
                "随机写入",
                "只追加写入（append-only）",
                "覆盖写入",
                "批量写入"
            ],
            answer: 1,
            rationale: "Bitcask 使用 append-only 日志结构，所有写入追加到活跃数据文件，只需顺序写。"
        },
        {
            id: "w23-4-q3",
            question: "Bitcask 如何处理删除操作？",
            options: [
                "立即删除",
                "写入墓碑（tombstone），后台合并时清理",
                "标记删除",
                "移动到回收站"
            ],
            answer: 1,
            rationale: "删除是写入墓碑（tombstone）。后台合并（compaction）清理过期和删除的数据。"
        },
        {
            id: "w23-4-q4",
            question: "Keydir 存储了什么信息？",
            options: [
                "只有 key",
                "key → (file_id, value_pos, value_size, timestamp)",
                "key 和 value",
                "只有 value"
            ],
            answer: 1,
            rationale: "Keydir 是内存哈希表：key → (file_id, value_pos, value_size, timestamp)。"
        },
        {
            id: "w23-4-q5",
            question: "Bitcask 的主要限制是什么？",
            options: [
                "写入速度慢",
                "所有 key 必须能放入内存",
                "不支持并发",
                "不支持大 value"
            ],
            answer: 1,
            rationale: "所有 key 必须在内存中。适合 key 较短、value 较大的场景。大量小 key 需要分片。"
        },
        {
            id: "w23-4-q6",
            question: "Hint 文件的作用是什么？",
            options: [
                "存储数据",
                "加速启动时的 keydir 重建",
                "数据压缩",
                "加密"
            ],
            answer: 1,
            rationale: "Hint 文件只含 key 和元数据，加速恢复。无需遍历所有数据文件重建 keydir。"
        },
        {
            id: "w23-4-q7",
            question: "Bitcask 合并（Compaction）的目的是什么？",
            options: [
                "加速查询",
                "过滤过期和删除的数据，回收空间",
                "数据加密",
                "负载均衡"
            ],
            answer: 1,
            rationale: "合并：后台读取只读文件，过滤过期和删除的数据，写入新文件，回收空间。"
        },
        {
            id: "w23-4-q8",
            question: "Bitcask 的并发模型是什么？",
            options: [
                "多写者多读者",
                "单写者多读者",
                "单写者单读者",
                "无并发"
            ],
            answer: 1,
            rationale: "写入串行化（单写者）保证追加顺序一致，多读者并发读取。"
        },
        {
            id: "w23-4-q9",
            question: "Bitcask 数据文件达到阈值后如何处理？",
            options: [
                "覆盖写入",
                "切换到新文件，旧文件变为只读",
                "删除旧文件",
                "压缩旧文件"
            ],
            answer: 1,
            rationale: "当文件达到阈值，切换到新文件，旧文件只读。旧文件由后台合并处理。"
        },
        {
            id: "w23-4-q10",
            question: "Bitcask 适合什么样的工作负载？",
            options: [
                "大量小 key",
                "key 较短、value 较大",
                "只读工作负载",
                "复杂查询"
            ],
            answer: 1,
            rationale: "Bitcask 适合 key 较短、value 较大的场景，因为所有 key 必须在内存中。"
        },
        {
            id: "w23-4-q11",
            question: "Bitcask 的数据完整性如何保证？",
            options: [
                "复制",
                "CRC 校验",
                "RAID",
                "备份"
            ],
            answer: 1,
            rationale: "每条记录包含 CRC 校验码，读取时验证数据完整性。"
        },
        {
            id: "w23-4-q12",
            question: "Bitcask 写入后如何更新索引？",
            options: [
                "异步更新",
                "追加到文件后原子更新 keydir 指针",
                "定期批量更新",
                "不更新"
            ],
            answer: 1,
            rationale: "写入完成后原子更新 keydir 指针，确保读取一致性。"
        }
    ]
}
