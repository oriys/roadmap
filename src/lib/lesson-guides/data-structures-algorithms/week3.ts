import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "dsa-w3-1": {
        lessonId: "dsa-w3-1",
        background: [
            "【哈希表的本质】哈希表通过哈希函数将键映射到数组索引，实现平均 O(1) 的增删查。核心思想：用空间换时间，通过直接计算而非遍历来定位元素。",
            "【哈希函数设计】好的哈希函数应该：计算快速、分布均匀、确定性（相同输入相同输出）。常见方法：取模法 h(k) = k mod m，乘法法 h(k) = floor(m × (k×A mod 1))。",
            "【冲突处理 - 链地址法】每个桶是一个链表，冲突的元素追加到链表中。优点：简单、删除方便；缺点：链表过长时性能退化。Java 8 的 HashMap 在链表长度超过 8 时转为红黑树。",
            "【冲突处理 - 开放寻址法】冲突时探测其他位置。线性探测：依次查找 h(k)+1, h(k)+2...；二次探测：h(k)+1², h(k)+2²...；双重哈希：使用第二个哈希函数确定步长。",
            "【负载因子】负载因子 α = n/m（元素数/桶数），影响冲突概率和性能。通常 α > 0.75 时触发扩容（rehash），将容量翻倍并重新插入所有元素。"
        ],
        keyDifficulties: [
            "【哈希冲突不可避免】根据鸽巢原理，当元素数超过桶数时必然冲突。即使元素数少于桶数，生日悖论告诉我们冲突概率也很高（23 人中有两人同生日的概率 > 50%）。",
            "【选择合适的桶数】桶数通常选择质数，可以减少取模后的冲突。Java HashMap 使用 2 的幂是为了用位运算代替取模，但需要额外的扰动函数。",
            "【删除操作的陷阱】开放寻址法删除时不能直接置空，否则会中断探测链。需要使用「墓碑」标记删除位置，或采用惰性删除策略。",
            "【自定义对象作为键】必须正确实现 hashCode() 和 equals()。如果两个对象 equals() 相等，hashCode() 必须相同；反之不必。违反这条规则会导致找不到已插入的元素。"
        ],
        handsOnPath: [
            "实现一个简单的哈希表，使用链地址法处理冲突",
            "观察 Visualgo 的哈希表可视化，理解插入和查找过程",
            "分析 Python dict 或 Java HashMap 的源码，了解真实的哈希函数设计",
            "实验不同负载因子对查找性能的影响",
            "为自定义类实现 hashCode() 和 equals()，验证其在 HashMap 中的行为"
        ],
        selfCheck: [
            "哈希表如何实现平均 O(1) 的查找？最坏情况是什么？",
            "链地址法和开放寻址法各有什么优缺点？",
            "为什么负载因子不能太高？扩容时发生了什么？",
            "两个不同的键哈希到同一个位置，这叫什么？如何处理？",
            "为什么 hashCode() 相等时 equals() 不一定相等？"
        ],
        extensions: [
            "研究 Cuckoo Hashing 和 Hopscotch Hashing",
            "了解 Robin Hood Hashing 的负载均衡思想",
            "探索完美哈希函数（Perfect Hash Function）",
            "学习分布式系统中的一致性哈希"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/detail/hash-table/",
            "https://visualgo.net/en/hashtable",
            "https://www.laurentluce.com/posts/python-dictionary-implementation/"
        ]
    },
    "dsa-w3-2": {
        lessonId: "dsa-w3-2",
        background: [
            "【从零实现 HashMap】核心组件：桶数组、哈希函数、冲突解决策略、扩容机制。实现时要考虑：初始容量、负载因子阈值、扩容倍数。",
            "【扩容策略】当 size > capacity × loadFactor 时触发扩容。步骤：1) 创建新的更大数组；2) 遍历旧数组所有元素；3) 重新计算哈希值插入新数组。扩容代价 O(n)，但摊销后单次操作仍是 O(1)。",
            "【Java HashMap 优化】初始容量 16，负载因子 0.75。使用位运算 (n-1) & hash 代替取模。链表长度超过 8 转红黑树，低于 6 转回链表。扩容时巧妙利用高位判断新位置。",
            "【一致性哈希】解决分布式系统中节点增减导致的大规模数据迁移问题。将哈希值空间组织成环，数据映射到顺时针方向第一个节点。节点变化只影响相邻区间的数据。",
            "【虚拟节点】一致性哈希中，为避免节点分布不均，每个物理节点对应多个虚拟节点，分散在环上，使数据分布更均匀。"
        ],
        keyDifficulties: [
            "【扩容时的线程安全】多线程同时扩容可能导致死循环（JDK 7 的 HashMap）。ConcurrentHashMap 使用分段锁或 CAS 保证线程安全。",
            "【树化阈值选择】为什么是 8？根据泊松分布，链表长度达到 8 的概率极低（约百万分之六），说明哈希函数可能有问题或遭受哈希攻击。",
            "【哈希攻击防御】恶意构造大量哈希冲突的键可以让 HashMap 退化为 O(n)。防御方法：随机化哈希种子、限制链表长度、使用树结构。",
            "【内存对齐与缓存】哈希表的缓存效率通常不如数组，因为链表节点分散在内存中。开放寻址法的缓存性能更好。"
        ],
        handsOnPath: [
            "实现支持自动扩容的 HashMap，测试大量插入时的性能",
            "实现一致性哈希，模拟节点增减时的数据迁移",
            "阅读 Java HashMap 的 putVal 方法源码",
            "分析不同初始容量和负载因子对性能的影响",
            "实现线性探测的开放寻址哈希表，处理删除操作"
        ],
        selfCheck: [
            "扩容时为什么要重新计算哈希值？",
            "一致性哈希解决了什么问题？虚拟节点的作用是什么？",
            "Java HashMap 为什么使用 2 的幂作为容量？",
            "如何防御哈希 DoS 攻击？",
            "比较链地址法和开放寻址法的缓存性能"
        ],
        extensions: [
            "研究 Redis 的渐进式 rehash 机制",
            "了解布谷鸟过滤器（Cuckoo Filter）",
            "探索 Google 的 SwissTable 高性能哈希表",
            "学习 Memcached 的一致性哈希实现"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/implementing-our-own-hash-table-with-separate-chaining-in-java/",
            "https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/util/HashMap.java",
            "https://www.toptal.com/big-data/consistent-hashing"
        ]
    },
    "dsa-w3-3": {
        lessonId: "dsa-w3-3",
        background: [
            "【两数之和】给定数组和目标值，找出和为目标的两个数的索引。暴力 O(n²)，用哈希表记录已遍历的数，每次查找 target - nums[i] 是否存在，O(n) 时间 O(n) 空间。",
            "【字母异位词分组】异位词是字母相同但顺序不同的单词。将每个单词排序后作为键，异位词排序结果相同。或者用字母计数数组作为键（更快）。",
            "【最长连续序列】在无序数组中找最长连续序列。用 HashSet 存储所有数，对每个数检查是否是序列起点（num-1 不存在），然后向后扩展计数。时间 O(n)。",
            "【哈希表的使用模式】1) 记录出现次数；2) 记录是否存在；3) 记录索引位置；4) 作为缓存/记忆化。根据问题需求选择存储什么信息。",
            "【空间换时间】哈希表的核心思想。很多 O(n²) 的问题可以通过预处理到哈希表，将查找从 O(n) 降到 O(1)，整体 O(n)。"
        ],
        keyDifficulties: [
            "【键的设计】字母异位词可以用排序后的字符串作为键，也可以用「字母#计数」格式（如 a#2b#1）。选择影响效率和实现复杂度。",
            "【避免重复计数】最长连续序列中，只从序列起点开始计数，避免每个数都遍历整个序列导致 O(n²)。",
            "【处理重复元素】两数之和中，如果有重复元素，需要注意索引不同。有时需要用列表存储多个索引。",
            "【哈希表初始化时机】有时需要先将所有元素加入哈希表再查询，有时边遍历边查询边加入。根据问题要求选择。"
        ],
        handsOnPath: [
            "练习 LeetCode 1「两数之和」",
            "练习 LeetCode 49「字母异位词分组」",
            "练习 LeetCode 128「最长连续序列」",
            "练习 LeetCode 560「和为 K 的子数组」（前缀和 + 哈希表）",
            "总结哈希表在不同问题中存储什么信息"
        ],
        selfCheck: [
            "两数之和为什么用哈希表比双重循环快？",
            "字母异位词分组有哪几种设计键的方法？",
            "最长连续序列如何保证时间复杂度是 O(n)？",
            "什么时候应该先建立哈希表再查询？",
            "前缀和 + 哈希表如何解决「和为 K 的子数组」？"
        ],
        extensions: [
            "研究「四数相加 II」问题的哈希表解法",
            "了解「三数之和」为什么用双指针比哈希表更好",
            "探索滑动窗口 + 哈希表的组合应用",
            "学习「子数组和整除 K」的前缀和技巧"
        ],
        sourceUrls: [
            "https://leetcode.cn/problems/two-sum/",
            "https://leetcode.cn/problems/group-anagrams/",
            "https://leetcode.cn/problems/longest-consecutive-sequence/"
        ]
    },
    "dsa-w3-4": {
        lessonId: "dsa-w3-4",
        background: [
            "【集合的本质】集合是只存储键不存储值的哈希表，用于判断元素是否存在和去重。Python set、Java HashSet、C++ unordered_set 都是基于哈希表。",
            "【集合操作】交集、并集、差集、对称差集。数学符号 ∩、∪、-、△。Python 支持 &、|、-、^ 运算符，非常直观。",
            "【位运算基础】与(&)、或(|)、异或(^)、取反(~)、左移(<<)、右移(>>)。异或性质：a^a=0, a^0=a。可用于交换变量、找唯一数等。",
            "【位图/BitSet】用二进制位表示集合，第 i 位为 1 表示包含元素 i。极致节省空间（1 个 int 存 32 个元素），操作用位运算实现，速度极快。",
            "【布隆过滤器】概率型数据结构，用于判断「可能存在」或「一定不存在」。多个哈希函数映射到位数组，有假阳性但无假阴性。用于 Redis 缓存穿透、垃圾邮件过滤等。"
        ],
        keyDifficulties: [
            "【只出现一次的数字】数组中其他数字出现两次，找唯一出现一次的数。利用 a^a=0，全部异或后结果就是那个唯一的数。扩展：两个只出现一次的数怎么找？",
            "【位运算技巧】n&(n-1) 消除最低位的 1；n&(-n) 保留最低位的 1；判断 2 的幂：n&(n-1)==0。",
            "【状态压缩】用整数的二进制位表示状态集合。如子集枚举、旅行商问题的动态规划。每个位代表一个选择，适合元素数量 ≤ 30 的情况。",
            "【布隆过滤器的误判率】与哈希函数数量、位数组大小、元素数量有关。公式复杂，通常通过调参工具确定最佳配置。"
        ],
        handsOnPath: [
            "用集合解决「两个数组的交集」问题",
            "练习 LeetCode 136「只出现一次的数字」",
            "实现位图，支持 add、contains、remove 操作",
            "用位运算枚举子集",
            "了解布隆过滤器的实现原理，使用现成库体验"
        ],
        selfCheck: [
            "集合相比列表的优势是什么？",
            "a^b^a 的结果是什么？利用了异或的什么性质？",
            "如何用位运算判断一个数是否是 2 的幂？",
            "位图适合什么场景？有什么限制？",
            "布隆过滤器为什么会有假阳性但没有假阴性？"
        ],
        extensions: [
            "研究「两个只出现一次的数字」的位运算解法",
            "了解 Counting Bloom Filter",
            "探索 HyperLogLog 基数估计算法",
            "学习位运算在加密算法中的应用"
        ],
        sourceUrls: [
            "https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset",
            "https://leetcode.cn/circle/discuss/CaOJ45/",
            "https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "dsa-w3-1": [
        {
            id: "dsa-w3-1-q1",
            question: "哈希表平均查找时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 0,
            rationale: "哈希表通过哈希函数直接计算位置，平均 O(1) 时间查找。"
        },
        {
            id: "dsa-w3-1-q2",
            question: "哈希冲突是指？",
            options: [
                "哈希函数计算出错",
                "两个不同的键映射到同一个位置",
                "数组越界",
                "内存不足"
            ],
            answer: 1,
            rationale: "当两个不同的键的哈希值相同或映射到同一个桶时，称为哈希冲突。"
        },
        {
            id: "dsa-w3-1-q3",
            question: "链地址法处理冲突的方式是？",
            options: [
                "寻找下一个空位",
                "将冲突元素存储在链表中",
                "扩大数组",
                "丢弃新元素"
            ],
            answer: 1,
            rationale: "链地址法在每个桶上维护一个链表，冲突的元素追加到链表中。"
        },
        {
            id: "dsa-w3-1-q4",
            question: "负载因子的定义是？",
            options: [
                "哈希函数的复杂度",
                "元素数量 / 桶数量",
                "桶数量 / 元素数量",
                "冲突次数 / 查找次数"
            ],
            answer: 1,
            rationale: "负载因子 α = n/m，即已存储元素数除以桶的总数。"
        },
        {
            id: "dsa-w3-1-q5",
            question: "哈希表最坏情况的查找时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 2,
            rationale: "当所有元素都冲突到同一个桶时，退化为链表，查找 O(n)。"
        },
        {
            id: "dsa-w3-1-q6",
            question: "开放寻址法中，线性探测的缺点是？",
            options: [
                "实现复杂",
                "容易形成聚集（clustering）",
                "不能处理冲突",
                "空间浪费"
            ],
            answer: 1,
            rationale: "线性探测会导致冲突的元素聚集在一起，增加后续冲突概率。"
        },
        {
            id: "dsa-w3-1-q7",
            question: "好的哈希函数应该满足？",
            options: [
                "计算慢但精确",
                "结果分布均匀",
                "相同输入不同输出",
                "只适用于整数"
            ],
            answer: 1,
            rationale: "好的哈希函数应该让键均匀分布在桶中，减少冲突。"
        },
        {
            id: "dsa-w3-1-q8",
            question: "当负载因子过高时应该？",
            options: [
                "删除一些元素",
                "更换哈希函数",
                "扩容（rehash）",
                "忽略"
            ],
            answer: 2,
            rationale: "负载因子过高会增加冲突，通常触发扩容，创建更大的数组并重新插入所有元素。"
        },
        {
            id: "dsa-w3-1-q9",
            question: "Java 中自定义对象作为 HashMap 的键，必须正确实现？",
            options: [
                "toString() 和 compareTo()",
                "hashCode() 和 equals()",
                "clone() 和 finalize()",
                "只需要 hashCode()"
            ],
            answer: 1,
            rationale: "hashCode() 决定桶位置，equals() 决定是否相等。两者必须一致实现。"
        },
        {
            id: "dsa-w3-1-q10",
            question: "两个对象 equals() 相等，hashCode() 的要求是？",
            options: [
                "可以不同",
                "必须相同",
                "无关紧要",
                "必须不同"
            ],
            answer: 1,
            rationale: "equals() 相等的对象 hashCode() 必须相同，否则无法在同一个桶中找到。"
        },
        {
            id: "dsa-w3-1-q11",
            question: "哈希表扩容的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 2,
            rationale: "扩容需要遍历所有元素重新计算哈希值并插入新数组，O(n) 时间。"
        },
        {
            id: "dsa-w3-1-q12",
            question: "开放寻址法删除元素时，为什么不能直接置空？",
            options: [
                "会破坏哈希函数",
                "会中断探测链，导致后续元素找不到",
                "会引起内存泄漏",
                "直接置空是正确的做法"
            ],
            answer: 1,
            rationale: "探测时遇到空位会停止，直接置空会导致后面冲突的元素无法被找到。"
        }
    ],
    "dsa-w3-2": [
        {
            id: "dsa-w3-2-q1",
            question: "哈希表扩容时通常将容量？",
            options: ["增加 1", "增加 10", "翻倍", "减半"],
            answer: 2,
            rationale: "通常翻倍扩容，以保证摊销时间复杂度为 O(1)。"
        },
        {
            id: "dsa-w3-2-q2",
            question: "Java HashMap 默认的初始容量是？",
            options: ["8", "16", "32", "64"],
            answer: 1,
            rationale: "Java HashMap 默认初始容量为 16，负载因子为 0.75。"
        },
        {
            id: "dsa-w3-2-q3",
            question: "一致性哈希主要解决什么问题？",
            options: [
                "哈希冲突",
                "节点增减时减少数据迁移",
                "提高查找速度",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "一致性哈希使得节点增减只影响相邻区间的数据，减少大规模数据迁移。"
        },
        {
            id: "dsa-w3-2-q4",
            question: "一致性哈希中虚拟节点的作用是？",
            options: [
                "增加容量",
                "使数据分布更均匀",
                "减少延迟",
                "提高安全性"
            ],
            answer: 1,
            rationale: "虚拟节点使每个物理节点在哈希环上有多个位置，数据分布更均匀。"
        },
        {
            id: "dsa-w3-2-q5",
            question: "Java HashMap 在链表长度超过多少时转为红黑树？",
            options: ["4", "6", "8", "16"],
            answer: 2,
            rationale: "链表长度超过 8 时转为红黑树，保证最坏情况 O(log n)。"
        },
        {
            id: "dsa-w3-2-q6",
            question: "为什么 Java HashMap 使用 2 的幂作为容量？",
            options: [
                "计算更简单",
                "可以用位运算代替取模，效率更高",
                "数学上更合理",
                "传统习惯"
            ],
            answer: 1,
            rationale: "当 n 是 2 的幂时，hash % n 等价于 hash & (n-1)，位运算更快。"
        },
        {
            id: "dsa-w3-2-q7",
            question: "哈希 DoS 攻击的原理是？",
            options: [
                "耗尽内存",
                "构造大量哈希冲突使查找退化为 O(n)",
                "注入恶意代码",
                "窃取数据"
            ],
            answer: 1,
            rationale: "攻击者构造大量哈希到同一桶的键，使哈希表退化为链表，导致拒绝服务。"
        },
        {
            id: "dsa-w3-2-q8",
            question: "扩容时为什么要重新计算哈希值？",
            options: [
                "旧哈希值已失效",
                "桶的数量改变了，映射关系改变",
                "哈希函数改变了",
                "不需要重新计算"
            ],
            answer: 1,
            rationale: "hash % oldSize 和 hash % newSize 结果不同，需要重新确定每个元素的位置。"
        },
        {
            id: "dsa-w3-2-q9",
            question: "ConcurrentHashMap 保证线程安全的方式是？",
            options: [
                "全局锁",
                "分段锁或 CAS",
                "不可变设计",
                "不保证线程安全"
            ],
            answer: 1,
            rationale: "JDK 7 用分段锁，JDK 8 用 CAS + synchronized 细粒度锁。"
        },
        {
            id: "dsa-w3-2-q10",
            question: "哈希表的缓存性能通常不如数组的原因是？",
            options: [
                "哈希函数计算慢",
                "链表节点分散在内存中，缓存命中率低",
                "扩容代价高",
                "哈希表更复杂"
            ],
            answer: 1,
            rationale: "链表节点不连续存储，访问时缓存命中率低，性能下降。"
        },
        {
            id: "dsa-w3-2-q11",
            question: "Redis 的渐进式 rehash 解决了什么问题？",
            options: [
                "减少内存使用",
                "避免一次性扩容导致的长时间阻塞",
                "提高查找速度",
                "防止数据丢失"
            ],
            answer: 1,
            rationale: "渐进式 rehash 将扩容分摊到多次操作中，避免阻塞。"
        },
        {
            id: "dsa-w3-2-q12",
            question: "开放寻址法的探测方式不包括？",
            options: ["线性探测", "二次探测", "双重哈希", "链表探测"],
            answer: 3,
            rationale: "开放寻址法包括线性探测、二次探测、双重哈希。链表是链地址法。"
        }
    ],
    "dsa-w3-3": [
        {
            id: "dsa-w3-3-q1",
            question: "两数之和使用哈希表的时间复杂度是？",
            options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
            answer: 2,
            rationale: "遍历一次数组，每次查找和插入 O(1)，总时间 O(n)。"
        },
        {
            id: "dsa-w3-3-q2",
            question: "两数之和中，哈希表存储的是？",
            options: [
                "数组元素",
                "元素值到索引的映射",
                "索引到元素值的映射",
                "元素对"
            ],
            answer: 1,
            rationale: "存储 {值: 索引}，便于通过 target - nums[i] 快速查找另一个数的索引。"
        },
        {
            id: "dsa-w3-3-q3",
            question: "字母异位词分组中，用什么作为哈希表的键？",
            options: [
                "单词长度",
                "排序后的字符串或字母计数",
                "首字母",
                "单词本身"
            ],
            answer: 1,
            rationale: "异位词排序后相同，或字母计数相同，可作为分组的键。"
        },
        {
            id: "dsa-w3-3-q4",
            question: "最长连续序列中，如何保证时间复杂度 O(n)？",
            options: [
                "先排序",
                "只从序列起点开始计数，避免重复遍历",
                "使用递归",
                "使用位运算"
            ],
            answer: 1,
            rationale: "检查 num-1 是否存在，不存在则是起点，只从起点开始计数。"
        },
        {
            id: "dsa-w3-3-q5",
            question: "和为 K 的子数组个数问题，使用什么技巧？",
            options: [
                "双指针",
                "前缀和 + 哈希表",
                "滑动窗口",
                "动态规划"
            ],
            answer: 1,
            rationale: "记录前缀和及其出现次数，查找 prefix - K 是否出现过。"
        },
        {
            id: "dsa-w3-3-q6",
            question: "为什么三数之和用双指针比哈希表更好？",
            options: [
                "哈希表无法解决三数之和",
                "双指针时间复杂度更低",
                "双指针空间复杂度更低，且更容易处理去重",
                "三数之和只能用双指针"
            ],
            answer: 2,
            rationale: "双指针只需 O(1) 额外空间，且通过排序更容易去重。"
        },
        {
            id: "dsa-w3-3-q7",
            question: "四数相加 II（四个数组各取一个数）的最优解法是？",
            options: [
                "暴力枚举 O(n⁴)",
                "分组哈希 O(n²)",
                "排序后双指针 O(n² log n)",
                "动态规划 O(n³)"
            ],
            answer: 1,
            rationale: "将四个数组分成两组，分别计算和存入哈希表，再查找互补。"
        },
        {
            id: "dsa-w3-3-q8",
            question: "哈希表在两数之和中的作用是？",
            options: [
                "排序",
                "将查找从 O(n) 优化到 O(1)",
                "去重",
                "计数"
            ],
            answer: 1,
            rationale: "暴力法对每个数需要 O(n) 查找另一个数，哈希表使查找 O(1)。"
        },
        {
            id: "dsa-w3-3-q9",
            question: "最长连续序列中，判断 num 是序列起点的条件是？",
            options: [
                "num 是最小的",
                "num - 1 不在集合中",
                "num + 1 在集合中",
                "num 出现次数为 1"
            ],
            answer: 1,
            rationale: "如果 num - 1 存在，则 num 不是起点；只有 num - 1 不存在时才从 num 开始计数。"
        },
        {
            id: "dsa-w3-3-q10",
            question: "字母异位词分组用字母计数作为键的格式通常是？",
            options: [
                "\"a1b2c3\"",
                "\"#1#0#0#...\" (26个字母的计数)",
                "排序后的字符串",
                "单词的哈希值"
            ],
            answer: 1,
            rationale: "用分隔符连接 26 个字母的计数，如 \"#2#0#1#...\" 表示 a 出现 2 次，c 出现 1 次。"
        },
        {
            id: "dsa-w3-3-q11",
            question: "两数之和中，为什么边遍历边查询边添加？",
            options: [
                "只是为了代码简洁",
                "避免找到同一个元素两次",
                "减少内存使用",
                "提高效率"
            ],
            answer: 1,
            rationale: "先查询后添加，确保查找的是之前遍历的元素，不会将自己匹配两次。"
        },
        {
            id: "dsa-w3-3-q12",
            question: "前缀和数组 prefix[i] 表示？",
            options: [
                "nums[0] 到 nums[i] 的和",
                "nums[0] 到 nums[i-1] 的和",
                "nums[i] 到 nums[n-1] 的和",
                "nums[i] 的值"
            ],
            answer: 1,
            rationale: "通常定义 prefix[0] = 0，prefix[i] = nums[0] + ... + nums[i-1]。"
        }
    ],
    "dsa-w3-4": [
        {
            id: "dsa-w3-4-q1",
            question: "集合（Set）相比列表（List）的主要优势是？",
            options: [
                "有序",
                "可重复",
                "O(1) 判断元素是否存在",
                "支持索引访问"
            ],
            answer: 2,
            rationale: "集合基于哈希表，判断元素是否存在是 O(1)，列表需要 O(n)。"
        },
        {
            id: "dsa-w3-4-q2",
            question: "a ^ a 的结果是？",
            options: ["a", "0", "1", "-a"],
            answer: 1,
            rationale: "异或运算中，任何数与自己异或结果为 0。"
        },
        {
            id: "dsa-w3-4-q3",
            question: "a ^ 0 的结果是？",
            options: ["0", "a", "1", "-a"],
            answer: 1,
            rationale: "异或运算中，任何数与 0 异或结果为自己。"
        },
        {
            id: "dsa-w3-4-q4",
            question: "数组中只有一个数出现一次，其他都出现两次，如何找出这个数？",
            options: [
                "排序后查找",
                "使用哈希表计数",
                "全部异或",
                "二分查找"
            ],
            answer: 2,
            rationale: "利用 a^a=0 和 a^0=a，全部异或后成对的数抵消，剩下唯一的数。"
        },
        {
            id: "dsa-w3-4-q5",
            question: "n & (n-1) 的作用是？",
            options: [
                "判断奇偶",
                "消除最低位的 1",
                "获取最低位的 1",
                "取反"
            ],
            answer: 1,
            rationale: "n-1 将最低位的 1 变为 0，其后的 0 变为 1，与 n 做 & 消除最低位的 1。"
        },
        {
            id: "dsa-w3-4-q6",
            question: "判断 n 是否是 2 的幂的位运算方法是？",
            options: [
                "n & 1 == 0",
                "n & (n-1) == 0 且 n > 0",
                "n | 1 == n",
                "n ^ n == 0"
            ],
            answer: 1,
            rationale: "2 的幂只有一个 1，n & (n-1) 消除后为 0。需要排除 n=0 的情况。"
        },
        {
            id: "dsa-w3-4-q7",
            question: "位图（BitSet）的主要优势是？",
            options: [
                "计算更复杂",
                "极致节省空间",
                "支持浮点数",
                "支持负数索引"
            ],
            answer: 1,
            rationale: "位图用 1 bit 表示一个元素的存在性，32 个 int 元素只需 1 个 int 存储。"
        },
        {
            id: "dsa-w3-4-q8",
            question: "布隆过滤器的特点是？",
            options: [
                "无假阳性，无假阴性",
                "有假阳性，无假阴性",
                "无假阳性，有假阴性",
                "有假阳性，有假阴性"
            ],
            answer: 1,
            rationale: "布隆过滤器可能误报「存在」（假阳性），但不会误报「不存在」（无假阴性）。"
        },
        {
            id: "dsa-w3-4-q9",
            question: "布隆过滤器用于？",
            options: [
                "精确查找",
                "排序",
                "快速判断元素可能存在或一定不存在",
                "计数"
            ],
            answer: 2,
            rationale: "布隆过滤器用于快速过滤，返回「可能存在」或「一定不存在」。"
        },
        {
            id: "dsa-w3-4-q10",
            question: "Python 中集合的交集运算符是？",
            options: ["|", "&", "-", "^"],
            answer: 1,
            rationale: "& 表示交集，| 表示并集，- 表示差集，^ 表示对称差集。"
        },
        {
            id: "dsa-w3-4-q11",
            question: "状态压缩 DP 中，用整数的二进制位表示什么？",
            options: [
                "数值大小",
                "状态集合（每位代表一个选择）",
                "索引",
                "优先级"
            ],
            answer: 1,
            rationale: "每个二进制位代表一个元素是否被选中，整数代表一个状态集合。"
        },
        {
            id: "dsa-w3-4-q12",
            question: "n & (-n) 的作用是？",
            options: [
                "消除最低位的 1",
                "保留最低位的 1，其他位置零",
                "取反",
                "判断正负"
            ],
            answer: 1,
            rationale: "-n 是 n 的补码，n & (-n) 只保留最低位的 1，用于树状数组等。"
        }
    ]
}
