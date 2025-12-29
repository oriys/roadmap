import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const dataStructuresAlgorithmsStages: Stage[] = [
  {
    id: "dsa-foundation",
    title: "阶段一：入门基础与复杂度直觉",
    duration: "第 1-3 周",
    goal: "建立时间/空间复杂度直觉，掌握数组、链表、栈队列等基础数据结构与常见排序/搜索。",
    weeks: [
      {
        id: "dsa-w1",
        title: "第 1 周：算法思维与复杂度",
        summary: "理解算法为何优雅有效，从成本分析开始培养优化直觉。",
        keyPoints: [
          "用大 O、渐进主导项描述算法上界，理解常见复杂度曲线",
          "对比时间复杂度与空间复杂度，明确局部优化与全局瓶颈",
          "掌握递归思想与基例/递推式，学会把问题拆解成子问题",
        ],
        lessons: [
          {
            id: "dsa-w1-1",
            title: "时间复杂度与渐进分析",
            detail: "掌握大 O/Omega/Theta 的含义，能估算循环、嵌套循环的复杂度。",
            resources: [
              { title: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com/" },
              { title: "算法导论第 2 章", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms-fourth-edition/" },
              { title: "VisuAlgo 渐进复杂度可视化", url: "https://visualgo.net/en/complexity" },
            ],
          },
          {
            id: "dsa-w1-2",
            title: "空间复杂度与内存模型",
            detail: "区分输入规模与辅助空间，理解递归栈、原地算法与缓存友好性。",
            resources: [
              { title: "Data Structure Memory Layout", url: "https://cstack.github.io/db_tutorial/parts/part2.html" },
              { title: "Stack vs Heap Explained", url: "https://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap" },
              { title: "Cache-aware Algorithms", url: "https://en.wikipedia.org/wiki/Cache-oblivious_algorithm" },
            ],
          },
          {
            id: "dsa-w1-3",
            title: "递归与主定理基础",
            detail: "写出递推式，利用主定理或展开法估算复杂度，避免 Stack Overflow。",
            resources: [
              { title: "Master Theorem", url: "https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)" },
              { title: "Recursion Patterns", url: "https://cp-algorithms.com/algebra/recurrence-resolution.html" },
              { title: "Tail Recursion", url: "https://eli.thegreenplace.net/2017/tail-recursion-in-python/" },
            ],
          },
        ],
      },
      {
        id: "dsa-w2",
        title: "第 2 周：核心数据结构",
        summary: "掌握线性表、哈希与字符串处理，为后续算法技巧打好地基。",
        keyPoints: [
          "数组 vs 链表的访问/插入代价与缓存友好性",
          "栈、队列、双端队列在表达式求值与滑动窗口中的应用",
          "哈希表冲突解决与负载因子，掌握字符串哈希与不可变性",
        ],
        lessons: [
          {
            id: "dsa-w2-1",
            title: "数组、链表与跳表",
            detail: "理解顺序存储与指针存储的权衡，掌握跳表的分层索引思想。",
            resources: [
              { title: "Skip List 论文", url: "https://epaperpress.com/sortsearch/download/skiplist.pdf" },
              { title: "Linked List vs Array", url: "https://www.cs.cmu.edu/~cburch/pgss99/arrays/" },
              { title: "LeetCode 链表专题", url: "https://leetcode.cn/tag/linked-list/" },
            ],
          },
          {
            id: "dsa-w2-2",
            title: "栈、队列与单调结构",
            detail: "用栈处理括号匹配/逆波兰，单调栈/队列解决下一更大元素与滑动窗口。",
            resources: [
              { title: "Monotonic Stack Guide", url: "https://labuladong.online/algo/data-structure/monotonic-stack/" },
              { title: "Queue vs Deque", url: "https://en.wikipedia.org/wiki/Double-ended_queue" },
              { title: "Stack Applications", url: "https://cp-algorithms.com/data_structures/stack_queue_modification.html" },
            ],
          },
          {
            id: "dsa-w2-3",
            title: "哈希表与字符串基础",
            detail: "掌握开链/开放定址冲突解决，理解不可变字符串、子串与滚动哈希。",
            resources: [
              { title: "Hash Table 设计", url: "https://algs4.cs.princeton.edu/34hash/" },
              { title: "Rolling Hash 与 Rabin-Karp", url: "https://cp-algorithms.com/string/string-hashing.html" },
              { title: "Python 字典实现", url: "https://stackoverflow.com/questions/327311/how-are-pythons-built-in-dictionaries-implemented" },
            ],
          },
        ],
      },
      {
        id: "dsa-w3",
        title: "第 3 周：排序与搜索入门",
        summary: "从基础排序到二分查找，建立对有序性与分治的直觉。",
        keyPoints: [
          "稳定性与原地性：选择合适的排序算法",
          "二分查找的边界处理与判定函数写法",
          "分治思想：归并排序与快速排序的递归拆解",
        ],
        lessons: [
          {
            id: "dsa-w3-1",
            title: "基础排序算法对比",
            detail: "实现冒泡、插入、选择排序，理解时间复杂度与适用场景。",
            resources: [
              { title: "Sorting Visualizer", url: "https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html" },
              { title: "Algorithm Visualizations", url: "https://visualgo.net/en/sorting" },
              { title: "Insertion Sort 解析", url: "https://algs4.cs.princeton.edu/21elementary/" },
            ],
          },
          {
            id: "dsa-w3-2",
            title: "归并排序与快速排序",
            detail: "掌握分治策略、稳定性区别，理解基于指针与原地 partition 的实现。",
            resources: [
              { title: "Merge Sort in Practice", url: "https://www.topcoder.com/thrive/articles/merge-sort" },
              { title: "Quicksort Partition", url: "https://www.cs.princeton.edu/~rs/talks/QuicksortIsOptimal.pdf" },
              { title: "三路快排", url: "https://algs4.cs.princeton.edu/23quicksort/" },
            ],
          },
          {
            id: "dsa-w3-3",
            title: "二分查找模板",
            detail: "写出闭区间/开区间二分模板，利用判定函数解决最值与上下界问题。",
            resources: [
              { title: "二分查找套路", url: "https://www.geeksforgeeks.org/binary-search/" },
              { title: "Binary Search Template", url: "https://leetcode.cn/problems/binary-search/" },
              { title: "用二分做答案", url: "https://cp-algorithms.com/num_methods/binary_search.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "dsa-core",
    title: "阶段二：算法技巧与动态规划",
    duration: "第 4-7 周",
    goal: "掌握双指针、贪心、回溯与动态规划等核心套路，能在数组、区间、树上迁移思路。",
    weeks: [
      {
        id: "dsa-w4",
        title: "第 4 周：双指针与滑动窗口",
        summary: "用指针收缩区间高效解决子数组与字符串问题。",
        keyPoints: [
          "快慢指针解决原地删除、链表环检测",
          "左右指针维护有序数组的查找与去重",
          "滑动窗口模板：扩张窗口 + 条件维护 + 收缩",
        ],
        lessons: [
          {
            id: "dsa-w4-1",
            title: "快慢指针技巧",
            detail: "链表环、原地去重、移动零等问题的模板化解法。",
            resources: [
              { title: "Floyd Cycle Detection", url: "https://en.wikipedia.org/wiki/Cycle_detection" },
              { title: "快慢指针专题", url: "https://leetcode.cn/tag/two-pointers/" },
              { title: "Remove Duplicates Patterns", url: "https://neetcode.io/practice" },
            ],
          },
          {
            id: "dsa-w4-2",
            title: "滑动窗口模板",
            detail: "最小覆盖子串、无重复子串等经典题的模板拆解与变量维护。",
            resources: [
              { title: "Sliding Window Handbook", url: "https://labuladong.online/algo/essential-technique/slide-window-framework/" },
              { title: "模板练习合集", url: "https://leetcode.cn/tag/sliding-window/" },
              { title: "最小覆盖子串", url: "https://leetcode.cn/problems/minimum-window-substring/" },
            ],
          },
          {
            id: "dsa-w4-3",
            title: "双指针与排序结合",
            detail: "三数之和、盛最多水的容器等题如何利用有序性与指针收缩。",
            resources: [
              { title: "Two Sum Variants", url: "https://leetcode.cn/problems/3sum/" },
              { title: "Container With Most Water", url: "https://leetcode.cn/problems/container-with-most-water/" },
              { title: "Sort + Two Pointers", url: "https://cp-algorithms.com/two_pointers/" },
            ],
          },
        ],
      },
      {
        id: "dsa-w5",
        title: "第 5 周：分治、回溯与搜索",
        summary: "在子集、排列、树型结构中练习搜索剪枝与状态恢复。",
        keyPoints: [
          "回溯框架：路径/选择列表/结束条件 + 状态恢复",
          "分治在树上的应用：后序遍历计算子结果",
          "剪枝策略：排序去重、约束提前失败、位运算优化",
        ],
        lessons: [
          {
            id: "dsa-w5-1",
            title: "回溯框架与剪枝",
            detail: "组合总和、N 皇后、括号生成等题的回溯模板与剪枝技巧。",
            resources: [
              { title: "Backtracking Patterns", url: "https://leetcode.cn/tag/backtracking/" },
              { title: "N-Queens", url: "https://leetcode.cn/problems/n-queens/" },
              { title: "Subset Generation", url: "https://cp-algorithms.com/algebra/all-submasks.html" },
            ],
          },
          {
            id: "dsa-w5-2",
            title: "分治与树形递归",
            detail: "最近点对、区间求和树、树的最大路径和等问题的分治思路。",
            resources: [
              { title: "Divide and Conquer", url: "https://cp-algorithms.com/algebra/fft.html" },
              { title: "Binary Tree DFS", url: "https://leetcode.cn/tag/tree/" },
              { title: "树形 DP 例题", url: "https://codeforces.com/blog/entry/20935" },
            ],
          },
          {
            id: "dsa-w5-3",
            title: "状态压缩与位运算",
            detail: "用 bitmask 表达子集状态，解决旅行商、集合覆盖类问题。",
            resources: [
              { title: "Bitmask DP", url: "https://cp-algorithms.com/algebra/all-submasks.html" },
              { title: "Traveling Salesman Problem", url: "https://en.wikipedia.org/wiki/Travelling_salesman_problem" },
              { title: "位运算技巧", url: "https://graphics.stanford.edu/~seander/bithacks.html" },
            ],
          },
        ],
      },
      {
        id: "dsa-w6",
        title: "第 6 周：贪心与区间问题",
        summary: "通过可证明的选择策略快速得到最优解，掌握排序+贪心组合。",
        keyPoints: [
          "可交换性与最优子结构是贪心成立的核心",
          "区间调度、合并、覆盖的排序策略",
          "前缀和、差分数组加速区间计算",
        ],
        lessons: [
          {
            id: "dsa-w6-1",
            title: "贪心策略与反例验证",
            detail: "学会通过反例和交换论证验证贪心可行性，案例：活动选择、硬币找零。",
            resources: [
              { title: "Proofs for Greedy Algorithms", url: "https://jeffe.cs.illinois.edu/teaching/algorithms/notes/03-greedy.pdf" },
              { title: "Activity Selection", url: "https://cp-algorithms.com/greedy/activity-selection-problem.html" },
              { title: "硬币找零贪心条件", url: "https://leetcode.cn/problems/coin-change-2/" },
            ],
          },
          {
            id: "dsa-w6-2",
            title: "区间与前缀和技巧",
            detail: "合并区间、最少箭射爆气球、差分数组求区间增量等常见套路。",
            resources: [
              { title: "Interval Patterns", url: "https://leetcode.cn/tag/interval/" },
              { title: "Prefix Sum & Difference", url: "https://cp-algorithms.com/commutative-algebra/prefix-sums.html" },
              { title: "Sweep Line 思路", url: "https://leetcode.cn/problems/my-calendar-ii/" },
            ],
          },
          {
            id: "dsa-w6-3",
            title: "堆与优先队列",
            detail: "利用最小/最大堆维护动态最值，解决中位数、区间最值与 TopK。",
            resources: [
              { title: "Heap Fundamentals", url: "https://en.wikipedia.org/wiki/Heap_(data_structure)" },
              { title: "Priority Queue Patterns", url: "https://leetcode.cn/tag/heap-priority-queue/" },
              { title: "Top K 问题", url: "https://neetcode.io/problems/top-k-elements" },
            ],
          },
        ],
      },
      {
        id: "dsa-w7",
        title: "第 7 周：动态规划进阶",
        summary: "建立 DP 状态定义与转移直觉，从一维到树上 DP 全面覆盖。",
        keyPoints: [
          "五部曲：状态定义、维度、初始化、转移、遍历顺序",
          "背包/区间/线性 DP 的经典模型与滚动数组优化",
          "树形与图上 DP：自底向上与换根思路",
        ],
        lessons: [
          {
            id: "dsa-w7-1",
            title: "线性与背包 DP",
            detail: "斐波那契、爬楼梯、一维滚动数组；0-1/完全/多重背包的转移写法。",
            resources: [
              { title: "Knapsack Variants", url: "https://cp-algorithms.com/dynamic_programming/knapsack.html" },
              { title: "滚动数组优化", url: "https://leetcode.cn/problems/house-robber/" },
              { title: "背包九讲", url: "https://github.com/tianyicui/pack" },
            ],
          },
          {
            id: "dsa-w7-2",
            title: "区间与编辑距离 DP",
            detail: "最长回文子序列、戳气球、编辑距离等题的区间/双串 DP。",
            resources: [
              { title: "Edit Distance", url: "https://leetcode.cn/problems/edit-distance/" },
              { title: "Interval DP Patterns", url: "https://codeforces.com/blog/entry/8219" },
              { title: "回文 DP", url: "https://leetcode.cn/problems/longest-palindromic-subsequence/" },
            ],
          },
          {
            id: "dsa-w7-3",
            title: "树形与状态压缩 DP",
            detail: "树上独立集、路径和问题，利用换根 DP 或 bitmask 降维。",
            resources: [
              { title: "Tree DP Guide", url: "https://codeforces.com/blog/entry/20935" },
              { title: "换根 DP", url: "https://cp-algorithms.com/graph/rerooting.html" },
              { title: "状态压缩 DP 练习", url: "https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "dsa-advanced",
    title: "阶段三：图算法与实战提升",
    duration: "第 8-10 周",
    goal: "掌握图论、字符串与工程实践，形成可迁移的解题与面试策略。",
    weeks: [
      {
        id: "dsa-w8",
        title: "第 8 周：图论基础与最短路",
        summary: "在有向/无向图中运用遍历、拓扑排序与最短路算法。",
        keyPoints: [
          "邻接表/矩阵表示、图遍历模板（DFS/BFS）",
          "拓扑排序检测有向无环图，解决课程表与任务调度",
          "最短路算法：Dijkstra、Bellman-Ford、Floyd-Warshall",
        ],
        lessons: [
          {
            id: "dsa-w8-1",
            title: "图遍历与连通性",
            detail: "用 DFS/BFS 求连通分量、岛屿数量，理解递归与迭代实现细节。",
            resources: [
              { title: "Graph Traversal", url: "https://cp-algorithms.com/graph/depth-first-search.html" },
              { title: "Number of Islands", url: "https://leetcode.cn/problems/number-of-islands/" },
              { title: "BFS 模板", url: "https://leetcode.cn/tag/breadth-first-search/" },
            ],
          },
          {
            id: "dsa-w8-2",
            title: "拓扑排序与 DAG 动态规划",
            detail: "Kahn 算法与栈实现，解决课程表、最长路径、任务调度问题。",
            resources: [
              { title: "Topological Sorting", url: "https://cp-algorithms.com/graph/topological-sort.html" },
              { title: "课程表问题", url: "https://leetcode.cn/problems/course-schedule/" },
              { title: "DAG Longest Path", url: "https://codeforces.com/blog/entry/10162" },
            ],
          },
          {
            id: "dsa-w8-3",
            title: "最短路径算法",
            detail: "单源最短路与全源最短路，权值正/负的算法选择与剪枝优化。",
            resources: [
              { title: "Dijkstra Explained", url: "https://cp-algorithms.com/graph/dijkstra.html" },
              { title: "Bellman-Ford", url: "https://cp-algorithms.com/graph/bellman_ford.html" },
              { title: "Floyd-Warshall", url: "https://cp-algorithms.com/graph/all-pair-shortest-path-floyd-warshall.html" },
            ],
          },
        ],
      },
      {
        id: "dsa-w9",
        title: "第 9 周：高级字符串与树结构",
        summary: "掌握 KMP、Trie/并查集/线段树等数据结构，提升模式匹配与区间操作能力。",
        keyPoints: [
          "KMP 前缀函数解决字符串匹配",
          "Trie/并查集管理前缀与连通分量",
          "线段树/树状数组支持区间查询与更新",
        ],
        lessons: [
          {
            id: "dsa-w9-1",
            title: "KMP 与字符串匹配",
            detail: "构建前缀函数/next 数组，加速长文本搜索与子串查找。",
            resources: [
              { title: "KMP Algorithm", url: "https://cp-algorithms.com/string/prefix-function.html" },
              { title: "Rabin-Karp 回顾", url: "https://cp-algorithms.com/string/string-hashing.html" },
              { title: "字符串匹配练习", url: "https://leetcode.cn/problems/implement-strstr/" },
            ],
          },
          {
            id: "dsa-w9-2",
            title: "Trie、并查集与集合合并",
            detail: "前缀树支持自动补全；并查集用于连通分量/朋友圈合并等问题。",
            resources: [
              { title: "Disjoint Set Union", url: "https://cp-algorithms.com/data_structures/disjoint_set_union.html" },
              { title: "Trie 基础", url: "https://leetcode.cn/problems/implement-trie-prefix-tree/" },
              { title: "Union-Find 应用", url: "https://leetcode.cn/tag/union-find/" },
            ],
          },
          {
            id: "dsa-w9-3",
            title: "线段树与树状数组",
            detail: "掌握区间和/最值查询与单点/区间更新，理解懒惰标记。",
            resources: [
              { title: "Fenwick Tree", url: "https://cp-algorithms.com/data_structures/fenwick.html" },
              { title: "Segment Tree", url: "https://cp-algorithms.com/data_structures/segment_tree.html" },
              { title: "线段树练习", url: "https://leetcode.cn/tag/segment-tree/" },
            ],
          },
        ],
      },
      {
        id: "dsa-w10",
        title: "第 10 周：综合实战与面试策略",
        summary: "串联前九周知识，形成拆题、验证与优化的闭环策略。",
        keyPoints: [
          "题目分类：按数据结构/算法套路建立索引",
          "复杂度 vs 可读性权衡，写出可维护的解题代码",
          "模拟面试/限时训练，形成先暴力后优化的习惯",
        ],
        lessons: [
          {
            id: "dsa-w10-1",
            title: "题型拆解与模板库",
            detail: "总结常见题型的决策树，沉淀代码模板与调试日志策略。",
            resources: [
              { title: "NeetCode Roadmap", url: "https://neetcode.io/roadmap" },
              { title: "LeetCode Top 100", url: "https://leetcode.cn/studyplan/top-interview-150/" },
              { title: "模板整理", url: "https://labuladong.online/algo/" },
            ],
          },
          {
            id: "dsa-w10-2",
            title: "复杂度与工程可读性",
            detail: "如何在代码中平衡最优复杂度与可读性、健壮性，添加断言与测试用例。",
            resources: [
              { title: "Clean Code for Algorithms", url: "https://google.github.io/styleguide/cppguide.html" },
              { title: "Property-based Testing", url: "https://hypothesis.readthedocs.io/en/latest/" },
              { title: "边界用例清单", url: "https://martinfowler.com/articles/practical-test-pyramid.html" },
            ],
          },
          {
            id: "dsa-w10-3",
            title: "模拟面试与复盘",
            detail: "限时做题、讲解思路、写出正确性/复杂度分析并复盘薄弱环节。",
            resources: [
              { title: "Pramp Mock Interview", url: "https://www.pramp.com/#/" },
              { title: "LeetCode Contest", url: "https://leetcode.cn/contest/" },
              { title: "如何复盘", url: "https://blog.bytebytego.com/p/system-design-interview-7-step-framework" },
            ],
          },
        ],
      },
    ],
  },
]

export const dataStructuresAlgorithmsKnowledgeCards: KnowledgeCard[] = [
  {
    id: "dsa-card-1",
    title: "时间/空间复杂度速查",
    summary: "选择算法前先界定数据规模：n≤1e5 适合 O(n log n)，n≤1e3 可接受 O(n^2)。",
    points: [
      "对输入规模做数量级估算（10^3/10^5/10^7）",
      "先写暴力基线，用于验证优化正确性",
      "关注常数项与缓存友好性，特别是在排序/循环嵌套中",
    ],
    practice: "取 3 道二分/排序题，先写暴力再写优化，并对比耗时与空间占用。",
  },
  {
    id: "dsa-card-2",
    title: "算法套路选择指南",
    summary: "从数据结构/约束反推解法：有序→双指针/二分；计数→哈希/前缀和；区间→差分/线段树。",
    points: [
      "判断是否需要有序性：排序 + 双指针/扫描线",
      "是否需要动态最值：优先队列/单调队列",
      "状态是否可拆：回溯 → DP；可交换性 → 贪心",
    ],
    practice: "针对最近做的题，写下“关键词→套路”的映射表，并尝试用不同套路重解。",
  },
  {
    id: "dsa-card-3",
    title: "调试与正确性保障",
    summary: "调试难题时先画状态转移/窗口移动过程，使用打印/断言锁定边界条件。",
    points: [
      "给关键变量加断言（区间长度、指针不交叉、数组越界）",
      "为回溯/DP 记录路径或状态表，便于排查转移错误",
      "利用单元测试覆盖空输入、极值、重复元素等边界",
    ],
    practice: "为滑动窗口和 DP 模板各写 3 个断言和 5 个边界测试用例。",
  },
  {
    id: "dsa-card-4",
    title: "面试表达框架",
    summary: "思路讲清楚：题意复述→约束分析→暴力解→优化点→最终方案与复杂度。",
    points: [
      "主动问清输入规模/边界，确定复杂度上限",
      "先给出 O(n^2) 或暴力方案，再讲优化理由",
      "写完代码自检：复杂度、边界、是否需要稳定性/原地",
    ],
    practice: "模拟 15 分钟面试，按框架解释两道题并计时，找出卡壳环节。",
  },
]

export const dataStructuresAlgorithmsExamQuestions: QuizQuestion[] = [
  {
    id: "dsa-q1",
    question: "以下哪种情况使用二分查找最合适？",
    options: [
      "在无序数组中寻找最小值",
      "在有序数组中寻找满足条件的最小下标",
      "在链表中定位倒数第 k 个节点",
      "在图中求单源最短路径",
    ],
    answer: 1,
    rationale: "二分查找要求数据有序或可通过判定函数单调，寻找最小下标是典型场景。",
  },
  {
    id: "dsa-q2",
    question: "下列关于哈希表的说法哪项正确？",
    options: [
      "开链法无法处理哈希冲突",
      "负载因子过高会降低查询性能",
      "哈希表不支持 O(1) 删除",
      "开放定址法不会出现聚簇现象",
    ],
    answer: 1,
    rationale: "负载因子越高冲突越多，查询性能下降；其他选项均错误或不完整。",
  },
  {
    id: "dsa-q3",
    question: "滑动窗口解法通常不适用于哪类问题？",
    options: [
      "寻找最长无重复子串",
      "统计满足条件的子数组个数",
      "求数组的最长公共前缀",
      "最小覆盖子串",
    ],
    answer: 2,
    rationale: "最长公共前缀是字符串整体比较问题，不是连续子区间的窗口维护场景。",
  },
  {
    id: "dsa-q4",
    question: "以下哪种情况适合使用贪心算法？",
    options: [
      "0-1 背包求最大价值",
      "区间调度选择最多不重叠的会议",
      "编辑距离求最少操作数",
      "最长递增子序列长度",
    ],
    answer: 1,
    rationale: "区间调度满足最优子结构与可交换性，按结束时间排序贪心可得最优。",
  },
  {
    id: "dsa-q5",
    question: "在动态规划中，滚动数组优化的主要作用是？",
    options: [
      "降低时间复杂度",
      "提升代码可读性",
      "减少空间复杂度",
      "避免整数溢出",
    ],
    answer: 2,
    rationale: "滚动数组用较小维度存储状态，空间从 O(n^2) 压缩到 O(n)。",
  },
  {
    id: "dsa-q6",
    question: "哪种图算法可以检测并求解有向无环图中的拓扑序？",
    options: [
      "Kruskal",
      "Dijkstra",
      "Kahn 算法",
      "Bellman-Ford",
    ],
    answer: 2,
    rationale: "Kahn 算法基于入度队列生成拓扑序，专用于 DAG。",
  },
  {
    id: "dsa-q7",
    question: "在 KMP 算法中，前缀函数（next 数组）的作用是？",
    options: [
      "记录文本中每个字符的出现次数",
      "表示当前匹配失败后可以回退的最长前后缀长度",
      "加速哈希计算避免冲突",
      "存储字符 ASCII 码值便于比较",
    ],
    answer: 1,
    rationale: "前缀函数指示匹配失败时模式串可以跳过的长度，从而避免重复比较。",
  },
  {
    id: "dsa-q8",
    question: "使用并查集（DSU）时哪项操作需要路径压缩或按秩合并来优化？",
    options: [
      "插入元素",
      "查找代表元（find）",
      "删除元素",
      "计算哈希值",
    ],
    answer: 1,
    rationale: "路径压缩和按秩合并用于优化 find/union 的摊还复杂度接近 O(1)。",
  },
]

export const dataStructuresAlgorithmsRoadmap: RoadmapDefinition = {
  id: "data-structures-algorithms",
  label: "数据结构与算法",
  title: "数据结构与算法：入门到高级",
  durationLabel: "10 周强化",
  description:
    "从复杂度直觉出发，系统掌握线性表、哈希、堆、图、动态规划与经典算法模板，覆盖面试高频与实战场景。",
  heroBadge: "复杂度 · 算法模板 · 图论 · 动态规划",
  stages: dataStructuresAlgorithmsStages,
  knowledgeCards: dataStructuresAlgorithmsKnowledgeCards,
  examQuestions: dataStructuresAlgorithmsExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "从基础复杂度和数组/链表开始，建立算法直觉。"
    if (percent < 25) return "继续练习栈队列与排序/二分模板，巩固入门技巧。"
    if (percent < 50) return "进入核心阶段：双指针、回溯与贪心题型多做多总结。"
    if (percent < 75) return "动态规划是重点，区间/树形 DP 和滚动数组要熟练。"
    if (percent < 100) return "收尾阶段聚焦图论与字符串高级结构，做模拟面试复盘。"
    return "恭喜完成！保持刷题节奏和复盘习惯，算法能力会持续提升。"
  },
  resourceGuide: {
    environment: "推荐使用 LeetCode/Codeforces 在线评测，或在本地 VS Code + Test/Benchmark 组合快速反馈。",
    fallbackKeyPoints: [
      "先暴力再优化，确保正确性优先",
      "数组/字符串问题优先考虑双指针或滑动窗口",
      "遇到最值或计数组合时优先想 DP/贪心",
      "区间/范围更新善用前缀和、差分或线段树",
      "图论题目先判断有向/无向、权重与是否为 DAG",
    ],
    handsOnSteps: [
      "每天完成 2-3 道不同类型的题并复盘",
      "实现个人的二分、滑动窗口、回溯、DP 模板库",
      "用 VS Code 调试一题，观察变量/栈变化",
      "每周参加一次限时比赛或模拟面试",
      "为常见题型整理对拍/随机测试脚本验证正确性",
    ],
    selfChecks: [
      "能否快速写出二分和滑动窗口模板？",
      "是否理解背包/区间/树形 DP 的状态定义？",
      "能否用 KMP/Trie/并查集解决对应场景？",
      "面对图论题能否判断使用 BFS/Dijkstra/拓扑？",
      "是否形成复盘笔记并定期回顾错题？",
    ],
    extensions: [
      "学习莫队、树上启发式合并等高阶技巧",
      "尝试参加 Codeforces Div.2/3 练习速度与思维",
      "阅读 MIT 6.046J/算法导论课程笔记",
      "探索算法工程化：性能分析、并行化与数值稳定性",
    ],
    lessonQuizAdvice: "每周完成课时测验并用错题构建“薄弱环节”列表，下一周针对性刷题。",
  },
}
