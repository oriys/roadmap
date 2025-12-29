import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "dsa-w7-1": {
        lessonId: "dsa-w7-1",
        background: [
            "【并查集的定义】并查集（Union-Find / Disjoint Set）是一种处理不相交集合合并与查询的数据结构。支持两种核心操作：Union（合并两个集合）和 Find（查找元素所属集合）。",
            "【实现原理】用数组 parent[] 表示，parent[i] 是节点 i 的父节点。同一集合的节点形成一棵树，根节点的 parent 是自己。Find 操作沿着 parent 链找到根，Union 操作将一棵树的根指向另一棵树的根。",
            "【路径压缩】Find 时将路径上的所有节点直接指向根，下次查询更快。有两种实现：递归版在返回时更新，迭代版用两次遍历。路径压缩后树变扁平，查询接近 O(1)。",
            "【按秩合并】Union 时将较矮的树接到较高的树下面，避免树退化为链表。秩（rank）可以是树高的上界或节点数。按秩合并保证树高为 O(log n)。",
            "【时间复杂度】同时使用路径压缩和按秩合并，单次操作的均摊时间复杂度是 O(α(n))，其中 α 是阿克曼函数的反函数，增长极慢，实际可视为常数。"
        ],
        keyDifficulties: [
            "【判断连通】两个元素是否在同一集合？Find(a) == Find(b) 即可判断。如果 Find 结果相同，它们已经连通。",
            "【连通分量计数】初始每个元素自成一组，每次成功 Union（两个根不同）使集合数减 1。最后集合数 = 初始节点数 - 成功 Union 次数。",
            "【路径压缩的细节】递归版：return parent[x] = Find(parent[x])。迭代版：先找根，再遍历一次将路径上所有节点的 parent 指向根。",
            "【带权并查集】有些问题需要维护节点到根的某种「权值」（如距离、相对关系）。Find 和 Union 时需要同时更新权值，较为复杂。"
        ],
        handsOnPath: [
            "实现基础并查集：初始化、Find、Union",
            "添加路径压缩优化",
            "添加按秩合并优化",
            "练习 LeetCode 547「省份数量」，求连通分量数",
            "练习 LeetCode 684「冗余连接」，找到使图成环的边"
        ],
        selfCheck: [
            "并查集的两个核心操作是什么？",
            "路径压缩如何实现？有什么作用？",
            "按秩合并的「秩」通常指什么？",
            "如何用并查集判断两个节点是否连通？",
            "并查集为什么不支持分裂操作？"
        ],
        extensions: [
            "研究带权并查集的实现和应用",
            "了解并查集的持久化版本",
            "学习并查集在 Kruskal 最小生成树中的应用",
            "探索并查集在在线算法中的应用"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/detail/disjoint-set/",
            "https://visualgo.net/en/ufds",
            "https://leetcode.cn/problems/number-of-provinces/"
        ]
    },
    "dsa-w7-2": {
        lessonId: "dsa-w7-2",
        background: [
            "【Trie 的定义】字典树（Trie，又称前缀树）是一种树形结构，用于高效存储和检索字符串集合。每条从根到节点的路径代表一个前缀，通过共享前缀节省空间。",
            "【节点结构】每个节点包含：1) 指向子节点的指针（通常是数组或哈希表）；2) 标记是否是某个单词的结尾。如果只处理小写字母，可以用长度 26 的数组。",
            "【核心操作】插入：从根开始，逐字符向下走，不存在则创建节点，最后标记单词结尾。查找：同样逐字符向下走，中途断开则不存在。前缀匹配：查找过程不要求到达单词结尾。",
            "【时间复杂度】插入、查找、前缀匹配都是 O(m)，m 是字符串长度。相比哈希表，Trie 的优势是支持前缀查询和字典序遍历。",
            "【应用场景】自动补全、拼写检查、IP 路由（最长前缀匹配）、单词搜索游戏、词频统计、字符串排序等。"
        ],
        keyDifficulties: [
            "【子节点存储方式】数组：空间换时间，访问 O(1) 但浪费空间。哈希表：节省空间但有哈希开销。根据字符集大小选择。",
            "【查找 vs 前缀匹配】查找要求路径终点标记为单词结尾，前缀匹配只要求路径存在。两个操作代码相似但返回条件不同。",
            "【空间优化】基数树（Patricia Trie）将单分支路径压缩成一个节点，节省空间。适合长字符串且公共前缀较长的场景。",
            "【删除操作】删除需要考虑：1) 单词不存在；2) 该单词是其他单词的前缀；3) 其他单词是该单词的前缀。实现较复杂。"
        ],
        handsOnPath: [
            "实现 Trie 的基本结构和 insert 方法",
            "实现 search（完整匹配）和 startsWith（前缀匹配）方法",
            "练习 LeetCode 208「实现 Trie」",
            "练习 LeetCode 211「添加与搜索单词」，支持通配符",
            "练习 LeetCode 212「单词搜索 II」，Trie + DFS"
        ],
        selfCheck: [
            "Trie 的每个节点存储什么信息？",
            "Trie 的查找和前缀匹配有什么区别？",
            "Trie 相比哈希表的优势是什么？",
            "如何用 Trie 实现自动补全功能？",
            "Trie 的空间复杂度如何分析？"
        ],
        extensions: [
            "研究压缩字典树（基数树/Patricia Trie）",
            "了解后缀树和后缀数组",
            "学习 Trie 在搜索引擎中的应用",
            "探索双数组 Trie 的实现"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/detail/trie/",
            "https://leetcode.cn/problems/implement-trie-prefix-tree/",
            "https://leetcode.cn/problems/word-search-ii/"
        ]
    },
    "dsa-w7-3": {
        lessonId: "dsa-w7-3",
        background: [
            "【线段树的定义】线段树是一种用于区间查询和更新的二叉树结构。每个节点代表一个区间，根节点代表整个数组，叶节点代表单个元素，非叶节点代表子区间的「合并结果」。",
            "【核心思想】将数组分治成区间，每个区间预处理结果（如和、最大值）。查询时将目标区间拆分成若干预处理区间，合并结果；更新时修改叶节点并向上更新。",
            "【时间复杂度】建树 O(n)，单点更新 O(log n)，区间查询 O(log n)。相比朴素方法（查询 O(n)，更新 O(1)）和前缀和（查询 O(1)，更新 O(n)），线段树在两种操作间取得平衡。",
            "【数组实现】用一维数组存储完全二叉树。根节点下标 1，节点 i 的左子节点是 2i，右子节点是 2i+1。数组大小约为 4n（考虑非完全二叉树的情况）。",
            "【懒标记（延迟更新）】区间更新时，不立即更新所有叶节点，而是在节点上打标记。查询或更新经过该节点时才「下推」标记。这样区间更新也是 O(log n)。"
        ],
        keyDifficulties: [
            "【区间合并】不同问题需要不同的合并方式：区间和用加法，区间最大值用 max，区间 GCD 用 gcd。合并操作必须满足结合律。",
            "【区间拆分】查询 [L, R] 时，如果当前区间完全在 [L, R] 内，直接返回；否则递归查询有交集的子区间并合并。",
            "【懒标记的下推】下推时需要：1) 更新子节点的值；2) 传递标记给子节点；3) 清除当前标记。顺序不能错。",
            "【动态开点】当区间范围很大但查询稀疏时，可以只在需要时创建节点，避免 O(n) 的空间。用指针/引用实现。"
        ],
        handsOnPath: [
            "实现线段树的建树函数",
            "实现单点更新和区间查询（区间求和）",
            "练习 LeetCode 307「区域和检索 - 数组可修改」",
            "实现区间最大值查询",
            "学习懒标记实现区间更新"
        ],
        selfCheck: [
            "线段树每个节点代表什么？",
            "为什么数组大小要开到 4n？",
            "区间查询的递归终止条件是什么？",
            "懒标记的作用是什么？如何下推？",
            "线段树和树状数组相比有什么优劣？"
        ],
        extensions: [
            "研究可持久化线段树（主席树）",
            "了解线段树合并操作",
            "学习二维线段树（树套树）",
            "探索线段树在 ACM 竞赛中的高级应用"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/segment-tree-data-structure/",
            "https://visualgo.net/en/segmenttree",
            "https://leetcode.cn/problems/range-sum-query-mutable/"
        ]
    },
    "dsa-w7-4": {
        lessonId: "dsa-w7-4",
        background: [
            "【树状数组简介】树状数组（Binary Indexed Tree, BIT，又称 Fenwick Tree）是一种支持单点更新和前缀查询的数据结构。实现比线段树简单，常数更小，但功能相对有限。",
            "【核心思想】利用二进制的性质，将 [1, i] 的前缀和拆分成若干区间的和。每个位置 i 存储 [i - lowbit(i) + 1, i] 区间的和，其中 lowbit(i) = i & (-i) 是 i 的最低位 1 所代表的值。",
            "【核心操作】查询前缀和：从 i 开始，累加 tree[i]，然后 i -= lowbit(i)，直到 i = 0。更新：从 i 开始，更新 tree[i]，然后 i += lowbit(i)，直到超出范围。",
            "【时间复杂度】建树 O(n log n) 或 O(n)，单点更新 O(log n)，前缀查询 O(log n)，区间查询 O(log n)。空间 O(n)。",
            "【跳表简介】跳表（Skip List）是一种基于链表的数据结构，通过多层索引实现 O(log n) 的查找、插入、删除。Redis 的有序集合 ZSET 底层使用跳表。"
        ],
        keyDifficulties: [
            "【lowbit 的理解】lowbit(i) = i & (-i)。补码中 -i 是 i 取反加一，与运算后只保留最低位的 1。例如 lowbit(12) = lowbit(1100) = 100 = 4。",
            "【为什么能快速查询】查询 [1, i] 只需要 O(log i) 次加法，因为每次 i -= lowbit(i) 至少去掉一个二进制位。",
            "【区间更新】单点更新直接实现；区间更新可以用差分数组+树状数组：对差分数组的单点更新等价于对原数组的区间更新。",
            "【跳表的概率平衡】跳表用随机化决定每个节点的层数（通常以 1/2 概率升层），期望层数 O(log n)，不需要复杂的旋转操作。"
        ],
        handsOnPath: [
            "理解 lowbit 运算，手算几个例子",
            "实现树状数组的 update 和 query 函数",
            "练习 LeetCode 307 用树状数组解决",
            "实现树状数组求逆序对",
            "阅读 Redis 跳表源码或实现简化版跳表"
        ],
        selfCheck: [
            "lowbit(12) 等于多少？如何计算？",
            "树状数组和线段树相比有什么优劣？",
            "如何用树状数组求区间 [l, r] 的和？",
            "跳表如何实现 O(log n) 的查找？",
            "Redis 为什么选择跳表而不是红黑树？"
        ],
        extensions: [
            "研究二维树状数组",
            "了解树状数组与差分的结合",
            "学习跳表的并发安全实现",
            "探索概率数据结构（如布隆过滤器、Count-Min Sketch）"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/",
            "https://www.geeksforgeeks.org/skip-list/",
            "https://redis.io/docs/data-types/sorted-sets/"
        ]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "dsa-w7-1": [
        {
            id: "dsa-w7-1-q1",
            question: "并查集的两个核心操作是？",
            options: ["Insert 和 Delete", "Find 和 Union", "Push 和 Pop", "Get 和 Set"],
            answer: 1,
            rationale: "并查集支持 Find（查找元素所属集合的代表）和 Union（合并两个集合）。"
        },
        {
            id: "dsa-w7-1-q2",
            question: "路径压缩的作用是？",
            options: [
                "增加树的高度",
                "使所有节点直接指向根，加快后续查询",
                "减少节点数量",
                "合并两棵树"
            ],
            answer: 1,
            rationale: "路径压缩在 Find 时将路径上的节点直接指向根，使树扁平化，加快后续查询。"
        },
        {
            id: "dsa-w7-1-q3",
            question: "按秩合并中的「秩」通常指？",
            options: ["节点的值", "树的高度上界或节点数", "边的数量", "连通分量数"],
            answer: 1,
            rationale: "秩可以是树高的上界或节点数，按秩合并将较小的树接到较大的树下。"
        },
        {
            id: "dsa-w7-1-q4",
            question: "同时使用路径压缩和按秩合并，单次操作的均摊时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(α(n))，近似常数", "O(n)"],
            answer: 2,
            rationale: "O(α(n)) 是阿克曼函数的反函数，增长极慢，实际可视为常数。"
        },
        {
            id: "dsa-w7-1-q5",
            question: "如何判断两个元素是否在同一集合？",
            options: [
                "比较它们的值",
                "Find(a) == Find(b)",
                "Union(a, b) 返回 true",
                "它们的 parent 相同"
            ],
            answer: 1,
            rationale: "如果两个元素的 Find 结果相同（根相同），则它们在同一集合中。"
        },
        {
            id: "dsa-w7-1-q6",
            question: "并查集的初始状态是？",
            options: [
                "所有元素在一个集合",
                "每个元素自成一个集合",
                "没有任何元素",
                "随机分组"
            ],
            answer: 1,
            rationale: "初始时每个元素的 parent 是自己，表示每个元素自成一个集合。"
        },
        {
            id: "dsa-w7-1-q7",
            question: "以下关于并查集的说法，正确的是？",
            options: [
                "支持高效的分裂操作",
                "只支持合并，不支持分裂",
                "查找操作是 O(n)",
                "只能用于无向图"
            ],
            answer: 1,
            rationale: "并查集只支持合并（Union），不支持分裂。一旦合并就无法高效拆开。"
        },
        {
            id: "dsa-w7-1-q8",
            question: "省份数量问题的本质是求？",
            options: ["最短路径", "连通分量数", "最大度数", "环的数量"],
            answer: 1,
            rationale: "每个省份是一个连通分量，用并查集合并相邻城市后计数不同的根即可。"
        },
        {
            id: "dsa-w7-1-q9",
            question: "路径压缩的递归实现是？",
            options: [
                "parent[x] = x",
                "return parent[x] = Find(parent[x])",
                "parent[x] = Find(x)",
                "return x"
            ],
            answer: 1,
            rationale: "递归找到根后，回溯时将 x 的 parent 直接指向根，实现路径压缩。"
        },
        {
            id: "dsa-w7-1-q10",
            question: "并查集在 Kruskal 算法中的作用是？",
            options: [
                "排序边",
                "判断加入边是否会形成环",
                "计算最短路径",
                "存储图的邻接表"
            ],
            answer: 1,
            rationale: "Kruskal 按边权排序后贪心选择，用并查集判断边的两端是否已连通（避免成环）。"
        },
        {
            id: "dsa-w7-1-q11",
            question: "如果不使用任何优化，并查集的 Find 操作最坏时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 2,
            rationale: "不优化时树可能退化为链表，Find 需要 O(n) 时间遍历到根。"
        },
        {
            id: "dsa-w7-1-q12",
            question: "带权并查集的典型应用是？",
            options: [
                "求最短路径",
                "维护元素间的相对关系（如食物链问题）",
                "求最大流",
                "拓扑排序"
            ],
            answer: 1,
            rationale: "带权并查集可以维护元素到根的「权值」，用于处理如食物链等有相对关系的问题。"
        }
    ],
    "dsa-w7-2": [
        {
            id: "dsa-w7-2-q1",
            question: "Trie（字典树）的主要用途是？",
            options: ["排序数字", "高效存储和检索字符串集合", "实现哈希表", "存储图结构"],
            answer: 1,
            rationale: "Trie 用于存储字符串集合，支持高效的插入、查找和前缀匹配。"
        },
        {
            id: "dsa-w7-2-q2",
            question: "Trie 中每个节点通常存储什么？",
            options: [
                "完整的字符串",
                "指向子节点的指针和是否为单词结尾的标记",
                "字符串的哈希值",
                "字符串的长度"
            ],
            answer: 1,
            rationale: "节点存储子节点指针（数组或哈希表）和 isEnd 标记（是否是某单词的结尾）。"
        },
        {
            id: "dsa-w7-2-q3",
            question: "Trie 的查找时间复杂度是？（m 为字符串长度）",
            options: ["O(1)", "O(log m)", "O(m)", "O(n)，n 为总字符串数"],
            answer: 2,
            rationale: "查找需要沿路径走 m 步，每步 O(1)（数组实现），总时间 O(m)。"
        },
        {
            id: "dsa-w7-2-q4",
            question: "Trie 的 search 和 startsWith 的区别是？",
            options: [
                "没有区别",
                "search 要求到达单词结尾，startsWith 只要求路径存在",
                "startsWith 更慢",
                "search 支持通配符"
            ],
            answer: 1,
            rationale: "search 检查完整单词（路径终点是 isEnd），startsWith 只检查前缀是否存在。"
        },
        {
            id: "dsa-w7-2-q5",
            question: "只处理小写字母时，Trie 节点的子节点数组大小通常是？",
            options: ["10", "26", "128", "256"],
            answer: 1,
            rationale: "26 个小写字母对应 26 个子节点位置，用 char - 'a' 作为索引。"
        },
        {
            id: "dsa-w7-2-q6",
            question: "Trie 相比哈希表的优势是？",
            options: [
                "查找更快",
                "支持前缀匹配和字典序遍历",
                "空间更少",
                "实现更简单"
            ],
            answer: 1,
            rationale: "哈希表不支持前缀查询，Trie 天然支持前缀匹配和按字典序遍历所有字符串。"
        },
        {
            id: "dsa-w7-2-q7",
            question: "压缩字典树（Radix Tree）的主要优化是？",
            options: [
                "使用更小的字符集",
                "将单分支路径压缩成一个节点",
                "使用哈希存储子节点",
                "删除无用节点"
            ],
            answer: 1,
            rationale: "压缩字典树合并只有一个子节点的连续节点，减少节点数，节省空间。"
        },
        {
            id: "dsa-w7-2-q8",
            question: "自动补全功能可以用 Trie 实现的原因是？",
            options: [
                "Trie 存储所有可能的补全结果",
                "Trie 支持快速找到所有以给定前缀开头的字符串",
                "Trie 可以排序",
                "Trie 占用空间少"
            ],
            answer: 1,
            rationale: "输入前缀后，在 Trie 中找到对应节点，其子树中的所有单词就是补全候选。"
        },
        {
            id: "dsa-w7-2-q9",
            question: "以下哪个问题不适合用 Trie 解决？",
            options: ["单词查找", "前缀匹配", "数字排序", "拼写检查"],
            answer: 2,
            rationale: "Trie 主要用于字符串操作，数字排序应该用排序算法或堆等数据结构。"
        },
        {
            id: "dsa-w7-2-q10",
            question: "在 Trie 中插入字符串 \"apple\"，需要创建最多几个新节点？",
            options: ["1", "5", "6", "取决于已有字符串"],
            answer: 3,
            rationale: "如果 Trie 为空需要创建 5 个节点（a-p-p-l-e），如果已有共同前缀则更少。"
        },
        {
            id: "dsa-w7-2-q11",
            question: "Trie 的空间复杂度取决于？",
            options: [
                "字符串数量",
                "所有字符串的总长度和字符集大小",
                "最长字符串的长度",
                "字符串的平均长度"
            ],
            answer: 1,
            rationale: "节点数最多是所有字符串总长度，每个节点存储字符集大小的子节点指针。"
        },
        {
            id: "dsa-w7-2-q12",
            question: "「单词搜索 II」问题结合 Trie 和什么算法？",
            options: ["BFS", "DFS/回溯", "动态规划", "贪心"],
            answer: 1,
            rationale: "用 Trie 存储词典，在网格上 DFS 搜索，同时沿 Trie 路径走，找到匹配的单词。"
        }
    ],
    "dsa-w7-3": [
        {
            id: "dsa-w7-3-q1",
            question: "线段树主要用于解决什么问题？",
            options: ["排序", "区间查询和更新", "字符串匹配", "最短路径"],
            answer: 1,
            rationale: "线段树支持 O(log n) 的区间查询（如区间和、最大值）和单点/区间更新。"
        },
        {
            id: "dsa-w7-3-q2",
            question: "线段树的根节点代表？",
            options: ["单个元素", "整个数组区间", "数组的中点", "所有叶节点之和"],
            answer: 1,
            rationale: "根节点代表整个数组 [0, n-1]，存储整个区间的聚合结果（如总和）。"
        },
        {
            id: "dsa-w7-3-q3",
            question: "线段树的叶节点代表？",
            options: ["整个区间", "单个数组元素", "区间的中点", "空区间"],
            answer: 1,
            rationale: "叶节点对应数组的单个元素，是区间划分的最小单位。"
        },
        {
            id: "dsa-w7-3-q4",
            question: "线段树区间查询的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 1,
            rationale: "查询将目标区间拆成最多 O(log n) 个预处理区间，合并得到结果。"
        },
        {
            id: "dsa-w7-3-q5",
            question: "用数组实现线段树时，数组大小通常是？",
            options: ["n", "2n", "4n", "n²"],
            answer: 2,
            rationale: "考虑最坏情况（非满二叉树），数组大小开到 4n 才安全，确保不会越界。"
        },
        {
            id: "dsa-w7-3-q6",
            question: "懒标记（Lazy Propagation）的作用是？",
            options: [
                "加速查询",
                "延迟更新，使区间更新也是 O(log n)",
                "减少空间占用",
                "支持动态开点"
            ],
            answer: 1,
            rationale: "懒标记不立即更新所有叶节点，只在访问时下推，使区间更新时间从 O(n) 降到 O(log n)。"
        },
        {
            id: "dsa-w7-3-q7",
            question: "线段树的建树时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 2,
            rationale: "建树需要处理所有 O(n) 个节点，每个节点常数时间，总时间 O(n)。"
        },
        {
            id: "dsa-w7-3-q8",
            question: "线段树的区间合并操作必须满足什么性质？",
            options: ["交换律", "结合律", "分配律", "没有要求"],
            answer: 1,
            rationale: "合并操作（如加法、max）必须满足结合律，即 merge(a, merge(b, c)) = merge(merge(a, b), c)。"
        },
        {
            id: "dsa-w7-3-q9",
            question: "线段树和前缀和相比的优势是？",
            options: [
                "查询更快",
                "支持高效更新（前缀和更新是 O(n)）",
                "空间更少",
                "实现更简单"
            ],
            answer: 1,
            rationale: "前缀和更新需要 O(n) 重建，线段树更新只需 O(log n)。"
        },
        {
            id: "dsa-w7-3-q10",
            question: "懒标记下推的时机是？",
            options: [
                "建树时",
                "访问该节点的子节点时",
                "删除节点时",
                "任意时刻"
            ],
            answer: 1,
            rationale: "当需要访问子节点（查询或更新更细粒度的区间）时，将懒标记下推给子节点。"
        },
        {
            id: "dsa-w7-3-q11",
            question: "动态开点线段树的主要应用场景是？",
            options: [
                "区间范围小但查询频繁",
                "区间范围很大但查询稀疏",
                "只有单点更新",
                "只有区间查询"
            ],
            answer: 1,
            rationale: "当区间范围很大（如 10^9）但实际查询的位置很少时，只在需要时创建节点，节省空间。"
        },
        {
            id: "dsa-w7-3-q12",
            question: "以下哪个问题不适合用线段树解决？",
            options: ["区间最大值查询", "区间和查询", "单点更新", "字符串匹配"],
            answer: 3,
            rationale: "线段树用于数值区间操作，字符串匹配应该用 KMP、Trie 等字符串算法。"
        }
    ],
    "dsa-w7-4": [
        {
            id: "dsa-w7-4-q1",
            question: "lowbit(x) 的计算公式是？",
            options: ["x | (-x)", "x & (-x)", "x ^ (-x)", "x + (-x)"],
            answer: 1,
            rationale: "lowbit(x) = x & (-x)，利用补码的性质获取 x 的最低位 1 所代表的值。"
        },
        {
            id: "dsa-w7-4-q2",
            question: "lowbit(12) 等于多少？",
            options: ["1", "2", "4", "12"],
            answer: 2,
            rationale: "12 = 1100(二进制)，最低位的 1 是第三位，lowbit(12) = 100(二进制) = 4。"
        },
        {
            id: "dsa-w7-4-q3",
            question: "树状数组的单点更新时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 1,
            rationale: "更新从位置 i 开始，每次 i += lowbit(i)，最多 O(log n) 次。"
        },
        {
            id: "dsa-w7-4-q4",
            question: "树状数组的前缀查询时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 1,
            rationale: "查询从位置 i 开始，每次 i -= lowbit(i)，最多 O(log n) 次累加。"
        },
        {
            id: "dsa-w7-4-q5",
            question: "树状数组相比线段树的优势是？",
            options: [
                "功能更强",
                "代码简单、常数小",
                "支持区间更新",
                "空间更大"
            ],
            answer: 1,
            rationale: "树状数组实现简洁（约 10 行代码），常数因子小，但功能比线段树有限。"
        },
        {
            id: "dsa-w7-4-q6",
            question: "树状数组原生支持的操作是？",
            options: [
                "区间查询",
                "单点更新和前缀查询",
                "区间更新",
                "区间最大值"
            ],
            answer: 1,
            rationale: "树状数组原生支持单点更新和前缀和查询，区间查询需要两次前缀查询相减。"
        },
        {
            id: "dsa-w7-4-q7",
            question: "如何用树状数组求区间 [l, r] 的和？",
            options: [
                "query(r)",
                "query(r) - query(l)",
                "query(r) - query(l-1)",
                "query(l) + query(r)"
            ],
            answer: 2,
            rationale: "[l, r] 的和 = [1, r] 的前缀和 - [1, l-1] 的前缀和 = query(r) - query(l-1)。"
        },
        {
            id: "dsa-w7-4-q8",
            question: "跳表的查找时间复杂度是？",
            options: ["O(1)", "O(log n) 期望", "O(n)", "O(n log n)"],
            answer: 1,
            rationale: "跳表通过多层索引，期望查找时间 O(log n)，最坏 O(n) 但概率极低。"
        },
        {
            id: "dsa-w7-4-q9",
            question: "跳表相比平衡树的优势是？",
            options: [
                "更少的空间",
                "实现简单，不需要复杂的旋转操作",
                "查找更快",
                "功能更多"
            ],
            answer: 1,
            rationale: "跳表用随机化保持平衡，插入删除不需要旋转，实现比红黑树等简单得多。"
        },
        {
            id: "dsa-w7-4-q10",
            question: "Redis 的有序集合 ZSET 底层使用的数据结构是？",
            options: ["红黑树", "跳表", "B+ 树", "哈希表"],
            answer: 1,
            rationale: "Redis ZSET 使用跳表 + 哈希表实现，跳表支持范围查询，哈希表支持 O(1) 查找。"
        },
        {
            id: "dsa-w7-4-q11",
            question: "跳表每个节点的层数如何决定？",
            options: [
                "固定值",
                "随机决定，通常以 1/2 概率升层",
                "根据节点值决定",
                "根据插入顺序决定"
            ],
            answer: 1,
            rationale: "跳表用随机化决定层数，典型实现是以 1/2 概率决定是否升到更高层。"
        },
        {
            id: "dsa-w7-4-q12",
            question: "树状数组求逆序对的思路是？",
            options: [
                "直接查询",
                "从后向前遍历，每个元素查询比它小的已出现元素数",
                "从前向后遍历，每个元素查询比它大的已出现元素数",
                "都不对"
            ],
            answer: 2,
            rationale: "从后向前遍历（或从前向后），对每个元素查询已出现的比它大（或小）的元素数，累加即为逆序对数。"
        }
    ]
}
