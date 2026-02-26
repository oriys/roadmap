import type { KnowledgeCard, QuizQuestion, RoadmapDefinition, Stage } from "../types"

export const dataStructuresAlgorithmsStages: Stage[] = [
  {
    id: "dsa-foundation",
    title: "阶段一：基础数据结构",
    duration: "第 1-4 周",
    goal: "掌握最常用的线性数据结构和基本的复杂度分析方法，建立算法思维基础。",
    weeks: [
      {
        id: "dsa-w1",
        title: "第 1 周：复杂度分析与数组",
        summary: "理解算法效率评估方法，掌握数组和字符串的核心操作与经典问题。",
        overview: "本周从大 O 表示法入手，建立算法效率评估思维，然后深入数组的内存布局与操作复杂度，掌握双指针和滑动窗口两大核心技巧。",
        keyPoints: [
          "大 O 表示法是衡量算法效率的通用语言，关注最坏情况和渐近行为。",
          "数组支持 O(1) 随机访问，但插入删除需要 O(n) 时间移动元素。",
          "双指针、滑动窗口是数组问题的两大核心技巧。",
        ],
        lessons: [
          {
            id: "dsa-w1-1",
            title: "时间与空间复杂度",
            detail: "掌握大 O、大 Ω、大 Θ 表示法，学会分析递归与迭代算法的复杂度。",
            keyPoints: [
                "大 O 关注最坏情况下的增长趋势，忽略常数因子和低阶项。",
                "递归算法复杂度可通过递推关系式和主定理（Master Theorem）求解。",
                "空间复杂度需考虑辅助空间和递归调用栈的深度。",
            ],
            resources: [
              { title: "Big O Cheat Sheet", url: "https://www.bigocheatsheet.com/" },
              { title: "MIT 算法导论 - 复杂度分析", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/" },
              { title: "可视化算法复杂度", url: "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html" },
            ],
          },
          {
            id: "dsa-w1-2",
            title: "数组基础与操作",
            detail: "理解数组内存布局、动态数组原理，掌握增删改查的时间复杂度。",
            keyPoints: [
                "数组在内存中连续存储，支持 O(1) 随机访问但插入删除需移动元素。",
                "动态数组（如 Python list）通过预分配和倍增策略实现均摊 O(1) 追加。",
                "数组适合读多写少的场景，频繁插入删除应考虑链表或其他结构。",
            ],
            resources: [
              { title: "数组 - 力扣学习", url: "https://leetcode.cn/leetbook/detail/array-and-string/" },
              { title: "动态数组实现原理", url: "https://www.geeksforgeeks.org/how-do-dynamic-arrays-work/" },
              { title: "Python List 源码分析", url: "https://github.com/python/cpython/blob/main/Objects/listobject.c" },
            ],
          },
          {
            id: "dsa-w1-3",
            title: "双指针技巧",
            detail: "掌握同向双指针、对撞指针、快慢指针三种模式及其典型应用。",
            keyPoints: [
                "对撞指针从两端向中间收缩，适合有序数组的两数之和、容器盛水等问题。",
                "快慢指针可用于链表环检测、找中点、判断回文等问题。",
                "同向双指针适合去重、移除元素等原地修改数组的场景。",
            ],
            resources: [
              { title: "双指针技巧总结", url: "https://leetcode.cn/circle/discuss/0vGxlm/" },
              { title: "Two Pointers Pattern", url: "https://www.educative.io/courses/grokking-the-coding-interview/xlK78P3Xl7E" },
              { title: "经典双指针题目", url: "https://leetcode.cn/tag/two-pointers/problemset/" },
            ],
          },
          {
            id: "dsa-w1-4",
            title: "滑动窗口",
            detail: "学习定长窗口与变长窗口的模板，解决子数组/子串最优问题。",
            keyPoints: [
                "定长窗口在窗口大小固定时使用，右边加入一个元素、左边移出一个元素。",
                "变长窗口通过条件判断动态调整窗口大小，解决最短/最长子串问题。",
                "滑动窗口本质是双指针的特殊形式，关键在于明确窗口的扩张和收缩条件。",
            ],
            resources: [
              { title: "滑动窗口算法框架", url: "https://labuladong.online/algo/essential-technique/sliding-window-framework/" },
              { title: "Sliding Window Pattern", url: "https://www.educative.io/courses/grokking-the-coding-interview/7D5NNZWQ8Wr" },
              { title: "滑动窗口题目精选", url: "https://leetcode.cn/tag/sliding-window/problemset/" },
            ],
          },
        ],
      },
      {
        id: "dsa-w2",
        title: "第 2 周：链表与线性结构",
        summary: "深入理解链表的结构与操作，掌握栈和队列的实现与应用。",
        overview: "本周学习链表的节点结构与增删操作，理解栈的后进先出和队列的先进先出特性，并通过经典题目巩固线性结构的应用。",
        keyPoints: [
          "链表通过指针连接节点，插入删除 O(1)，但访问需要 O(n) 遍历。",
          "栈是后进先出(LIFO)结构，用于递归模拟、括号匹配、表达式求值。",
          "队列是先进先出(FIFO)结构，是 BFS 和任务调度的基础。",
        ],
        lessons: [
          {
            id: "dsa-w2-1",
            title: "单链表与操作",
            detail: "实现单链表的增删查改，掌握虚拟头节点技巧简化边界处理。",
            keyPoints: [
                "单链表每个节点存储数据和指向下一节点的指针，头部插入删除 O(1)。",
                "虚拟头节点（dummy head）简化头部插入删除的边界处理，避免特殊判断。",
                "链表的反转、合并、排序是面试高频考点，需要熟练掌握迭代和递归实现。",
            ],
            resources: [
              { title: "链表 - 力扣学习", url: "https://leetcode.cn/leetbook/detail/linked-list/" },
              { title: "Visualgo 链表可视化", url: "https://visualgo.net/en/list" },
              { title: "单链表经典问题", url: "https://leetcode.cn/tag/linked-list/problemset/" },
            ],
          },
          {
            id: "dsa-w2-2",
            title: "双向链表与环形链表",
            detail: "理解双向链表的优势，学习环检测的 Floyd 算法。",
            keyPoints: [
                "双向链表每个节点有前驱和后继指针，支持 O(1) 双向遍历和删除。",
                "Floyd 算法用快慢指针检测环：慢指针走一步、快指针走两步，相遇则有环。",
                "LRU 缓存用双向链表 + 哈希表实现，O(1) 访问和淘汰最久未使用的元素。",
            ],
            resources: [
              { title: "双向链表详解", url: "https://www.geeksforgeeks.org/doubly-linked-list/" },
              { title: "Floyd 环检测算法", url: "https://leetcode.cn/problems/linked-list-cycle/solutions/175734/huan-xing-lian-biao-by-leetcode-solution/" },
              { title: "LRU Cache 实现", url: "https://leetcode.cn/problems/lru-cache/" },
            ],
          },
          {
            id: "dsa-w2-3",
            title: "栈的实现与应用",
            detail: "用数组和链表实现栈，解决括号匹配、单调栈等问题。",
            keyPoints: [
                "栈的后进先出特性天然适合递归模拟、函数调用管理和回溯算法。",
                "单调栈维护一个单调递增或递减的栈，高效解决下一个更大/更小元素问题。",
                "括号匹配是栈的经典应用：遇到左括号入栈，遇到右括号与栈顶匹配。",
            ],
            resources: [
              { title: "栈 - 力扣学习", url: "https://leetcode.cn/leetbook/detail/queue-stack/" },
              { title: "单调栈详解", url: "https://labuladong.online/algo/data-structure/monotonic-stack/" },
              { title: "栈的经典应用", url: "https://leetcode.cn/tag/stack/problemset/" },
            ],
          },
          {
            id: "dsa-w2-4",
            title: "队列与双端队列",
            detail: "实现队列和双端队列，理解循环队列的空间优化。",
            keyPoints: [
                "队列的先进先出特性是 BFS 和层序遍历的基础数据结构。",
                "循环队列用数组实现，通过取模运算复用空间，避免频繁搬移数据。",
                "双端队列（Deque）两端都可入队出队，是滑动窗口最大值等问题的核心工具。",
            ],
            resources: [
              { title: "队列与 BFS", url: "https://leetcode.cn/leetbook/read/queue-stack/kbcqv/" },
              { title: "双端队列 Deque", url: "https://www.geeksforgeeks.org/deque-set-1-introduction-applications/" },
              { title: "滑动窗口最大值", url: "https://leetcode.cn/problems/sliding-window-maximum/" },
            ],
          },
        ],
      },
      {
        id: "dsa-w3",
        title: "第 3 周：哈希表与集合",
        summary: "掌握哈希表的原理与实现，学习高效解决查找和统计问题。",
        overview: "本周深入哈希表的底层原理，包括哈希函数设计和冲突处理策略，学会利用 O(1) 查找特性高效解决频率统计和两数之和等经典问题。",
        keyPoints: [
          "哈希表通过哈希函数实现平均 O(1) 的增删查，是最常用的数据结构之一。",
          "处理哈希冲突的主要方法是链地址法和开放寻址法。",
          "集合用于去重和判断存在性，是快速查找的利器。",
        ],
        lessons: [
          {
            id: "dsa-w3-1",
            title: "哈希表原理",
            detail: "理解哈希函数设计、冲突处理策略和负载因子的作用。",
            keyPoints: [
                "好的哈希函数应均匀分布、计算快速、最小化冲突。",
                "链地址法用链表存储冲突元素，简单但可能退化为 O(n) 查找。",
                "负载因子 = 元素数/桶数，负载因子过高时需要扩容以维持 O(1) 性能。",
            ],
            resources: [
              { title: "哈希表详解", url: "https://leetcode.cn/leetbook/detail/hash-table/" },
              { title: "Visualgo 哈希表", url: "https://visualgo.net/en/hashtable" },
              { title: "Python dict 实现原理", url: "https://www.laurentluce.com/posts/python-dictionary-implementation/" },
            ],
          },
          {
            id: "dsa-w3-2",
            title: "哈希表实现与优化",
            detail: "动手实现哈希表，学习扩容策略和性能优化技巧。",
            keyPoints: [
                "扩容时需重新哈希所有元素，渐进式 rehash 可避免一次性迁移的性能抖动。",
                "开放寻址法（线性探测、双重哈希）将冲突元素存在其他空桶中。",
                "一致性哈希在分布式系统中减少节点变动时的数据迁移量。",
            ],
            resources: [
              { title: "从零实现 HashMap", url: "https://www.geeksforgeeks.org/implementing-our-own-hash-table-with-separate-chaining-in-java/" },
              { title: "Java HashMap 源码", url: "https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/util/HashMap.java" },
              { title: "一致性哈希", url: "https://www.toptal.com/big-data/consistent-hashing" },
            ],
          },
          {
            id: "dsa-w3-3",
            title: "哈希表经典应用",
            detail: "用哈希表解决两数之和、字母异位词、最长连续序列等问题。",
            keyPoints: [
                "两数之和用哈希表将 O(n²) 暴力搜索优化为 O(n) 一次遍历。",
                "字母异位词分组的关键是选择合适的哈希键：排序后的字符串或字符频率。",
                "最长连续序列利用哈希集合实现 O(n) 查找，从每个序列起点向后扩展。",
            ],
            resources: [
              { title: "两数之和", url: "https://leetcode.cn/problems/two-sum/" },
              { title: "字母异位词分组", url: "https://leetcode.cn/problems/group-anagrams/" },
              { title: "最长连续序列", url: "https://leetcode.cn/problems/longest-consecutive-sequence/" },
            ],
          },
          {
            id: "dsa-w3-4",
            title: "集合与位运算优化",
            detail: "使用集合进行去重和快速查找，了解位图的空间优化。",
            keyPoints: [
                "集合（Set）基于哈希表实现，提供 O(1) 的成员判断和去重能力。",
                "位图用一个比特表示一个元素的存在性，空间效率极高但只支持整数键。",
                "布隆过滤器用多个哈希函数判断元素可能存在或一定不存在，有假阳性无假阴性。",
            ],
            resources: [
              { title: "集合操作", url: "https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset" },
              { title: "位运算技巧", url: "https://leetcode.cn/circle/discuss/CaOJ45/" },
              { title: "布隆过滤器", url: "https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/" },
            ],
          },
        ],
      },
      {
        id: "dsa-w4",
        title: "第 4 周：树与二叉树基础",
        summary: "掌握树的基本概念和二叉树的遍历，为后续高级树结构打基础。",
        overview: "本周学习树的基本术语和二叉树的四种遍历方式（前序、中序、后序、层序），掌握递归与迭代两种实现，并理解二叉搜索树的有序性。",
        keyPoints: [
          "树是非线性结构，节点通过父子关系组织，适合表示层次数据。",
          "二叉树遍历有前序、中序、后序、层序四种方式，递归与迭代各有优势。",
          "二叉搜索树(BST)支持平均 O(log n) 的查找、插入、删除。",
        ],
        lessons: [
          {
            id: "dsa-w4-1",
            title: "树的基本概念",
            detail: "理解树的术语（根、叶、深度、高度），掌握 N 叉树的表示方法。",
            keyPoints: [
                "树由节点和边组成，每个节点最多一个父节点，根节点没有父节点。",
                "深度是从根到该节点的边数，高度是从该节点到最远叶子的边数。",
                "N 叉树可用子节点列表或左孩子右兄弟法表示，后者将 N 叉树转为二叉树。",
            ],
            resources: [
              { title: "树 - 力扣学习", url: "https://leetcode.cn/leetbook/detail/data-structure-binary-tree/" },
              { title: "树的可视化", url: "https://visualgo.net/en/bst" },
              { title: "N 叉树遍历", url: "https://leetcode.cn/problems/n-ary-tree-preorder-traversal/" },
            ],
          },
          {
            id: "dsa-w4-2",
            title: "二叉树遍历",
            detail: "实现前序、中序、后序的递归和迭代版本，理解层序遍历。",
            keyPoints: [
                "前序（根左右）、中序（左根右）、后序（左右根）是三种深度优先遍历方式。",
                "迭代遍历用显式栈模拟递归调用栈，Morris 遍历可实现 O(1) 空间遍历。",
                "层序遍历（BFS）用队列逐层访问节点，常用于求树的最小深度和层级信息。",
            ],
            resources: [
              { title: "二叉树遍历专题", url: "https://leetcode.cn/leetbook/read/data-structure-binary-tree/xe17x7/" },
              { title: "Morris 遍历", url: "https://leetcode.cn/problems/binary-tree-inorder-traversal/solutions/412886/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/" },
              { title: "遍历的统一写法", url: "https://leetcode.cn/problems/binary-tree-preorder-traversal/solutions/461821/er-cha-shu-de-qian-xu-bian-li-by-leetcode-solution/" },
            ],
          },
          {
            id: "dsa-w4-3",
            title: "二叉搜索树",
            detail: "理解 BST 性质，实现查找、插入、删除操作，处理中序后继问题。",
            keyPoints: [
                "BST 的中序遍历结果是有序序列，这是验证 BST 合法性的关键性质。",
                "BST 删除节点分三种情况：叶子直接删、单子节点替换、双子节点用中序后继替换。",
                "普通 BST 最坏退化为链表，查找变为 O(n)，需要平衡树保证 O(log n)。",
            ],
            resources: [
              { title: "BST 详解", url: "https://leetcode.cn/leetbook/read/introduction-to-data-structure-binary-search-tree/xp6kh3/" },
              { title: "验证 BST", url: "https://leetcode.cn/problems/validate-binary-search-tree/" },
              { title: "BST 删除节点", url: "https://leetcode.cn/problems/delete-node-in-a-bst/" },
            ],
          },
          {
            id: "dsa-w4-4",
            title: "二叉树经典问题",
            detail: "解决最大深度、路径和、最近公共祖先等高频面试题。",
            keyPoints: [
                "最大深度用递归一行解决：max(左子树深度, 右子树深度) + 1。",
                "路径和问题需要在递归中传递累积值，判断从根到叶子的路径是否满足条件。",
                "最近公共祖先（LCA）利用递归后序遍历：左右子树各找一个则当前节点为 LCA。",
            ],
            resources: [
              { title: "二叉树最大深度", url: "https://leetcode.cn/problems/maximum-depth-of-binary-tree/" },
              { title: "路径总和", url: "https://leetcode.cn/problems/path-sum/" },
              { title: "最近公共祖先", url: "https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "dsa-advanced-structures",
    title: "阶段二：高级数据结构",
    duration: "第 5-7 周",
    goal: "掌握平衡树、堆、图和高级数据结构，应对复杂场景的数据组织需求。",
    weeks: [
      {
        id: "dsa-w5",
        title: "第 5 周：平衡树与堆",
        summary: "理解自平衡树的原理，掌握堆的实现与优先队列应用。",
        overview: "本周探索 AVL 树和红黑树的旋转平衡机制，学习堆的数组实现与上浮下沉操作，掌握优先队列在 Top-K 和合并排序链表中的应用。",
        keyPoints: [
          "AVL 树和红黑树通过旋转保持平衡，保证最坏 O(log n) 操作。",
          "堆是完全二叉树，支持 O(log n) 插入和 O(1) 获取最值。",
          "优先队列基于堆实现，是 Dijkstra、任务调度等算法的核心。",
        ],
        lessons: [
          {
            id: "dsa-w5-1",
            title: "AVL 树",
            detail: "理解平衡因子和四种旋转（LL、RR、LR、RL），实现自平衡插入。",
            resources: [
              { title: "AVL 树详解", url: "https://www.geeksforgeeks.org/introduction-to-avl-tree/" },
              { title: "AVL 可视化", url: "https://www.cs.usfca.edu/~galles/visualization/AVLtree.html" },
              { title: "AVL vs 红黑树", url: "https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree" },
            ],
          },
          {
            id: "dsa-w5-2",
            title: "红黑树原理",
            detail: "理解红黑树的五条性质和着色规则，了解其在标准库中的应用。",
            resources: [
              { title: "红黑树详解", url: "https://www.geeksforgeeks.org/introduction-to-red-black-tree/" },
              { title: "红黑树可视化", url: "https://www.cs.usfca.edu/~galles/visualization/RedBlack.html" },
              { title: "Linux 内核红黑树", url: "https://www.kernel.org/doc/Documentation/rbtree.txt" },
            ],
          },
          {
            id: "dsa-w5-3",
            title: "堆与堆排序",
            detail: "实现最大堆/最小堆，掌握堆化、插入、删除和堆排序。",
            resources: [
              { title: "堆 - 力扣学习", url: "https://leetcode.cn/leetbook/detail/heap/" },
              { title: "堆可视化", url: "https://visualgo.net/en/heap" },
              { title: "堆排序详解", url: "https://www.geeksforgeeks.org/heap-sort/" },
            ],
          },
          {
            id: "dsa-w5-4",
            title: "优先队列应用",
            detail: "使用优先队列解决 Top K、合并 K 个有序链表等经典问题。",
            resources: [
              { title: "Top K 频繁元素", url: "https://leetcode.cn/problems/top-k-frequent-elements/" },
              { title: "合并 K 个有序链表", url: "https://leetcode.cn/problems/merge-k-sorted-lists/" },
              { title: "数据流中位数", url: "https://leetcode.cn/problems/find-median-from-data-stream/" },
            ],
          },
        ],
      },
      {
        id: "dsa-w6",
        title: "第 6 周：图的基础",
        summary: "掌握图的表示方法和基本遍历算法，理解图论的核心概念。",
        overview: "本周学习邻接矩阵和邻接表两种图的表示方式，掌握 DFS 和 BFS 遍历算法，并应用于连通分量检测、拓扑排序等经典问题。",
        keyPoints: [
          "图由顶点和边组成，可用邻接矩阵或邻接表表示，各有优劣。",
          "DFS 用栈/递归实现，适合路径查找和连通性判断。",
          "BFS 用队列实现，天然适合求最短路径和层级遍历。",
        ],
        lessons: [
          {
            id: "dsa-w6-1",
            title: "图的表示",
            detail: "掌握邻接矩阵和邻接表的实现，理解有向图、无向图、加权图的区别。",
            resources: [
              { title: "图论入门", url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" },
              { title: "图的可视化", url: "https://visualgo.net/en/graphds" },
              { title: "邻接表 vs 邻接矩阵", url: "https://www.baeldung.com/cs/adjacency-matrix-list-complexity" },
            ],
          },
          {
            id: "dsa-w6-2",
            title: "深度优先搜索 DFS",
            detail: "实现递归和迭代 DFS，解决岛屿数量、路径查找等问题。",
            resources: [
              { title: "DFS 详解", url: "https://leetcode.cn/leetbook/read/queue-stack/gwcw3/" },
              { title: "岛屿数量", url: "https://leetcode.cn/problems/number-of-islands/" },
              { title: "全排列 DFS", url: "https://leetcode.cn/problems/permutations/" },
            ],
          },
          {
            id: "dsa-w6-3",
            title: "广度优先搜索 BFS",
            detail: "使用队列实现 BFS，解决最短路径、单词接龙等问题。",
            resources: [
              { title: "BFS 详解", url: "https://leetcode.cn/leetbook/read/queue-stack/k8grh/" },
              { title: "单词接龙", url: "https://leetcode.cn/problems/word-ladder/" },
              { title: "二叉树层序遍历", url: "https://leetcode.cn/problems/binary-tree-level-order-traversal/" },
            ],
          },
          {
            id: "dsa-w6-4",
            title: "拓扑排序",
            detail: "理解 DAG 和拓扑排序，使用 Kahn 算法和 DFS 实现。",
            resources: [
              { title: "拓扑排序详解", url: "https://www.geeksforgeeks.org/topological-sorting/" },
              { title: "课程表问题", url: "https://leetcode.cn/problems/course-schedule/" },
              { title: "Kahn 算法", url: "https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/" },
            ],
          },
        ],
      },
      {
        id: "dsa-w7",
        title: "第 7 周：高级数据结构",
        summary: "学习并查集、字典树、线段树等进阶数据结构，解决特定场景问题。",
        overview: "本周学习并查集的路径压缩与按秩合并优化，掌握字典树的前缀匹配能力，以及线段树在区间查询中的高效应用。",
        keyPoints: [
          "并查集高效解决动态连通性问题，路径压缩和按秩合并是关键优化。",
          "字典树(Trie)是前缀匹配的最优解，广泛用于自动补全和词频统计。",
          "线段树支持 O(log n) 的区间查询和更新，是竞赛常用数据结构。",
        ],
        lessons: [
          {
            id: "dsa-w7-1",
            title: "并查集",
            detail: "实现带路径压缩和按秩合并的并查集，解决连通分量问题。",
            resources: [
              { title: "并查集详解", url: "https://leetcode.cn/leetbook/detail/disjoint-set/" },
              { title: "并查集可视化", url: "https://visualgo.net/en/ufds" },
              { title: "朋友圈问题", url: "https://leetcode.cn/problems/number-of-provinces/" },
            ],
          },
          {
            id: "dsa-w7-2",
            title: "字典树 Trie",
            detail: "实现字典树，支持插入、查找和前缀匹配操作。",
            resources: [
              { title: "Trie 详解", url: "https://leetcode.cn/leetbook/detail/trie/" },
              { title: "实现 Trie", url: "https://leetcode.cn/problems/implement-trie-prefix-tree/" },
              { title: "单词搜索 II", url: "https://leetcode.cn/problems/word-search-ii/" },
            ],
          },
          {
            id: "dsa-w7-3",
            title: "线段树",
            detail: "理解线段树的构建、查询和更新，实现区间求和/最值。",
            resources: [
              { title: "线段树详解", url: "https://www.geeksforgeeks.org/segment-tree-data-structure/" },
              { title: "线段树可视化", url: "https://visualgo.net/en/segmenttree" },
              { title: "区域和检索", url: "https://leetcode.cn/problems/range-sum-query-mutable/" },
            ],
          },
          {
            id: "dsa-w7-4",
            title: "树状数组与跳表",
            detail: "学习树状数组的简洁实现，了解跳表在 Redis 中的应用。",
            resources: [
              { title: "树状数组详解", url: "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/" },
              { title: "跳表原理", url: "https://www.geeksforgeeks.org/skip-list/" },
              { title: "Redis 跳表实现", url: "https://redis.io/docs/data-types/sorted-sets/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "dsa-algorithms",
    title: "阶段三：算法设计与分析",
    duration: "第 8-10 周",
    goal: "系统学习排序、查找、动态规划和常用算法范式，培养算法设计能力。",
    weeks: [
      {
        id: "dsa-w8",
        title: "第 8 周：排序与查找",
        summary: "掌握经典排序算法的原理与实现，深入理解二分查找的各种变体。",
        overview: "本周系统学习冒泡、归并、快排等经典排序算法的时间复杂度与适用场景，深入理解二分查找的边界处理和左右边界变体。",
        keyPoints: [
          "比较排序的时间下界是 O(n log n)，快排、归并、堆排序达到此最优。",
          "计数排序、基数排序是非比较排序，特定场景下可达 O(n)。",
          "二分查找是最重要的搜索技巧，关键在于准确定义搜索区间。",
        ],
        lessons: [
          {
            id: "dsa-w8-1",
            title: "基础排序算法",
            detail: "实现冒泡、选择、插入排序，理解其时间复杂度和稳定性。",
            resources: [
              { title: "排序可视化", url: "https://visualgo.net/en/sorting" },
              { title: "排序算法总结", url: "https://www.geeksforgeeks.org/sorting-algorithms/" },
              { title: "排序动画对比", url: "https://www.toptal.com/developers/sorting-algorithms" },
            ],
          },
          {
            id: "dsa-w8-2",
            title: "高效排序算法",
            detail: "深入理解快速排序、归并排序、堆排序的分治思想与实现。",
            resources: [
              { title: "快速排序详解", url: "https://www.geeksforgeeks.org/quick-sort/" },
              { title: "归并排序详解", url: "https://www.geeksforgeeks.org/merge-sort/" },
              { title: "排序数组", url: "https://leetcode.cn/problems/sort-an-array/" },
            ],
          },
          {
            id: "dsa-w8-3",
            title: "非比较排序",
            detail: "学习计数排序、桶排序、基数排序的适用场景和实现。",
            resources: [
              { title: "计数排序", url: "https://www.geeksforgeeks.org/counting-sort/" },
              { title: "基数排序", url: "https://www.geeksforgeeks.org/radix-sort/" },
              { title: "桶排序", url: "https://www.geeksforgeeks.org/bucket-sort-2/" },
            ],
          },
          {
            id: "dsa-w8-4",
            title: "二分查找",
            detail: "掌握二分查找模板，解决旋转数组、查找边界等变体问题。",
            resources: [
              { title: "二分查找详解", url: "https://leetcode.cn/leetbook/detail/binary-search/" },
              { title: "二分查找模板", url: "https://labuladong.online/algo/essential-technique/binary-search-framework/" },
              { title: "搜索旋转排序数组", url: "https://leetcode.cn/problems/search-in-rotated-sorted-array/" },
            ],
          },
        ],
      },
      {
        id: "dsa-w9",
        title: "第 9 周：动态规划",
        summary: "系统学习动态规划方法论，从入门到精通解决 DP 问题。",
        overview: "本周从最优子结构和重叠子问题两大特征出发，掌握状态定义、转移方程推导和空间优化技巧，覆盖背包、路径、子序列等经典 DP 模型。",
        keyPoints: [
          "动态规划的核心是定义状态和状态转移方程，关键是找到最优子结构。",
          "自顶向下(记忆化搜索)和自底向上(迭代)是两种实现方式。",
          "背包问题、区间 DP、状态压缩是三类重要的 DP 模型。",
        ],
        lessons: [
          {
            id: "dsa-w9-1",
            title: "动态规划入门",
            detail: "理解重叠子问题和最优子结构，用斐波那契和爬楼梯引入 DP。",
            resources: [
              { title: "DP 入门", url: "https://leetcode.cn/leetbook/detail/dynamic-programming-1-702/" },
              { title: "爬楼梯", url: "https://leetcode.cn/problems/climbing-stairs/" },
              { title: "DP 模式识别", url: "https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews" },
            ],
          },
          {
            id: "dsa-w9-2",
            title: "背包问题",
            detail: "掌握 0-1 背包、完全背包、多重背包的状态定义与转移。",
            resources: [
              { title: "背包问题九讲", url: "https://github.com/tianyicui/pack" },
              { title: "分割等和子集", url: "https://leetcode.cn/problems/partition-equal-subset-sum/" },
              { title: "零钱兑换", url: "https://leetcode.cn/problems/coin-change/" },
            ],
          },
          {
            id: "dsa-w9-3",
            title: "序列型动态规划",
            detail: "解决最长递增子序列、最长公共子序列等序列 DP 问题。",
            resources: [
              { title: "最长递增子序列", url: "https://leetcode.cn/problems/longest-increasing-subsequence/" },
              { title: "最长公共子序列", url: "https://leetcode.cn/problems/longest-common-subsequence/" },
              { title: "编辑距离", url: "https://leetcode.cn/problems/edit-distance/" },
            ],
          },
          {
            id: "dsa-w9-4",
            title: "区间与状态压缩 DP",
            detail: "学习区间 DP 的填表顺序，了解状态压缩在 NP 问题中的应用。",
            resources: [
              { title: "戳气球", url: "https://leetcode.cn/problems/burst-balloons/" },
              { title: "石子游戏", url: "https://leetcode.cn/problems/stone-game/" },
              { title: "状态压缩 DP", url: "https://www.geeksforgeeks.org/bitmasking-and-dynamic-programming-set-1-count-ways-to-assign-unique-cap-to-every-person/" },
            ],
          },
        ],
      },
      {
        id: "dsa-w10",
        title: "第 10 周：算法设计范式",
        summary: "掌握分治、贪心、回溯等核心算法思想，建立完整的算法知识体系。",
        overview: "本周学习分治法的递归分解策略、贪心算法的局部最优选择，以及回溯算法的剪枝搜索框架，融会贯通各类算法设计范式。",
        keyPoints: [
          "分治将问题分解为独立子问题，递归求解后合并结果。",
          "贪心在每一步选择局部最优，适用于具有贪心选择性质的问题。",
          "回溯是暴力搜索的优化，通过剪枝减少无效搜索。",
        ],
        lessons: [
          {
            id: "dsa-w10-1",
            title: "分治算法",
            detail: "理解分治的三个步骤，用归并排序、快速幂等经典问题练习。",
            resources: [
              { title: "分治详解", url: "https://www.geeksforgeeks.org/introduction-to-divide-and-conquer-algorithm-data-structure-and-algorithm-tutorials/" },
              { title: "数组中的逆序对", url: "https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/" },
              { title: "快速幂", url: "https://leetcode.cn/problems/powx-n/" },
            ],
          },
          {
            id: "dsa-w10-2",
            title: "贪心算法",
            detail: "学习贪心的正确性证明方法，解决区间调度、跳跃游戏等问题。",
            resources: [
              { title: "贪心算法", url: "https://www.geeksforgeeks.org/greedy-algorithms/" },
              { title: "跳跃游戏", url: "https://leetcode.cn/problems/jump-game/" },
              { title: "无重叠区间", url: "https://leetcode.cn/problems/non-overlapping-intervals/" },
            ],
          },
          {
            id: "dsa-w10-3",
            title: "回溯算法",
            detail: "掌握回溯模板，解决全排列、子集、N 皇后等组合搜索问题。",
            resources: [
              { title: "回溯算法框架", url: "https://labuladong.online/algo/essential-technique/backtrack-framework/" },
              { title: "全排列", url: "https://leetcode.cn/problems/permutations/" },
              { title: "N 皇后", url: "https://leetcode.cn/problems/n-queens/" },
            ],
          },
          {
            id: "dsa-w10-4",
            title: "字符串算法",
            detail: "学习 KMP、Rabin-Karp 等字符串匹配算法。",
            resources: [
              { title: "KMP 算法详解", url: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/" },
              { title: "实现 strStr", url: "https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
              { title: "Rabin-Karp", url: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "dsa-advanced-algorithms",
    title: "阶段四：高级算法与实战",
    duration: "第 11-12 周",
    goal: "学习高级图算法，通过综合实战提升算法设计与面试能力。",
    weeks: [
      {
        id: "dsa-w11",
        title: "第 11 周：高级图算法",
        summary: "掌握最短路径、最小生成树等图论核心算法。",
        keyPoints: [
          "Dijkstra 算法求单源最短路径，不能处理负权边，时间 O(E log V)。",
          "Bellman-Ford 可处理负权边，Floyd 求全源最短路径。",
          "Prim 和 Kruskal 是求最小生成树的两种贪心算法。",
        ],
        lessons: [
          {
            id: "dsa-w11-1",
            title: "Dijkstra 算法",
            detail: "理解 Dijkstra 的贪心思想，用优先队列优化实现。",
            resources: [
              { title: "Dijkstra 详解", url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/" },
              { title: "网络延迟时间", url: "https://leetcode.cn/problems/network-delay-time/" },
              { title: "Dijkstra 可视化", url: "https://visualgo.net/en/sssp" },
            ],
          },
          {
            id: "dsa-w11-2",
            title: "Bellman-Ford 与 SPFA",
            detail: "学习处理负权边的最短路径算法，检测负权环。",
            resources: [
              { title: "Bellman-Ford 详解", url: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/" },
              { title: "K 站中转内最便宜航班", url: "https://leetcode.cn/problems/cheapest-flights-within-k-stops/" },
              { title: "SPFA 优化", url: "https://www.geeksforgeeks.org/shortest-path-faster-algorithm/" },
            ],
          },
          {
            id: "dsa-w11-3",
            title: "最小生成树",
            detail: "实现 Prim 和 Kruskal 算法，理解切分定理。",
            resources: [
              { title: "MST 详解", url: "https://www.geeksforgeeks.org/introduction-to-minimum-spanning-tree-mst/" },
              { title: "MST 可视化", url: "https://visualgo.net/en/mst" },
              { title: "连接所有点的最小费用", url: "https://leetcode.cn/problems/min-cost-to-connect-all-points/" },
            ],
          },
          {
            id: "dsa-w11-4",
            title: "网络流初步",
            detail: "了解最大流最小割定理，学习 Ford-Fulkerson 算法。",
            resources: [
              { title: "网络流入门", url: "https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/" },
              { title: "最大流可视化", url: "https://visualgo.net/en/maxflow" },
              { title: "二分图匹配", url: "https://www.geeksforgeeks.org/maximum-bipartite-matching/" },
            ],
          },
        ],
      },
      {
        id: "dsa-w12",
        title: "第 12 周：算法面试与综合实战",
        summary: "整合所有知识点，通过系统练习和模拟面试提升实战能力。",
        keyPoints: [
          "面试算法题重点考察问题分析、编码能力和沟通表达。",
          "先理解问题，确定边界条件，再选择合适的数据结构和算法。",
          "练习时注重代码规范、时间管理和复杂度分析。",
        ],
        lessons: [
          {
            id: "dsa-w12-1",
            title: "面试题型分类",
            detail: "按数据结构和算法类型分类刷题，建立解题直觉。",
            resources: [
              { title: "LeetCode 热题 100", url: "https://leetcode.cn/studyplan/top-100-liked/" },
              { title: "剑指 Offer", url: "https://leetcode.cn/studyplan/coding-interviews/" },
              { title: "LeetCode 75", url: "https://leetcode.cn/studyplan/leetcode-75/" },
            ],
          },
          {
            id: "dsa-w12-2",
            title: "解题方法论",
            detail: "掌握 UMPIRE 方法：理解、匹配、计划、实现、复查、评估。",
            resources: [
              { title: "Cracking the Coding Interview", url: "https://www.crackingthecodinginterview.com/" },
              { title: "Tech Interview Handbook", url: "https://www.techinterviewhandbook.org/" },
              { title: "面试刷题策略", url: "https://neetcode.io/roadmap" },
            ],
          },
          {
            id: "dsa-w12-3",
            title: "系统设计中的算法",
            detail: "了解一致性哈希、布隆过滤器、限流算法等系统设计常用算法。",
            resources: [
              { title: "一致性哈希", url: "https://www.toptal.com/big-data/consistent-hashing" },
              { title: "限流算法", url: "https://www.geeksforgeeks.org/rate-limiting-algorithms/" },
              { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
            ],
          },
          {
            id: "dsa-w12-4",
            title: "模拟面试与复盘",
            detail: "进行模拟面试，培养限时解题和沟通表达能力。",
            resources: [
              { title: "Pramp 模拟面试", url: "https://www.pramp.com/" },
              { title: "Interviewing.io", url: "https://interviewing.io/" },
              { title: "LeetCode 竞赛", url: "https://leetcode.cn/contest/" },
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
    title: "复杂度分析",
    summary: "算法效率评估的通用语言",
    points: [
      "大 O 表示法关注最坏情况下的渐近行为",
      "常见复杂度排序：O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n)",
      "空间复杂度分析同样重要，要考虑辅助空间和递归栈",
      "摊销分析评估一系列操作的平均代价",
    ],
    practice: "分析 ArrayList 的 add 操作和动态扩容的摊销时间复杂度",
  },
  {
    id: "dsa-card-2",
    title: "双指针与滑动窗口",
    summary: "数组/字符串问题的两大利器",
    points: [
      "对撞指针从两端向中间移动，适合有序数组",
      "快慢指针用于环检测、链表中点等问题",
      "滑动窗口解决子数组/子串的最优问题",
      "滑动窗口模板：扩展右边界，收缩左边界，更新答案",
    ],
    practice: "用滑动窗口解决「无重复字符的最长子串」",
  },
  {
    id: "dsa-card-3",
    title: "哈希表设计",
    summary: "O(1) 平均时间的增删查",
    points: [
      "哈希函数将键映射到桶索引，好的哈希函数分布均匀",
      "链地址法用链表处理冲突，开放寻址法探测下一个位置",
      "负载因子 = 元素数 / 桶数，超过阈值触发扩容",
      "一致性哈希减少扩容时的数据迁移",
    ],
    practice: "实现一个支持动态扩容的 HashMap",
  },
  {
    id: "dsa-card-4",
    title: "二叉树遍历",
    summary: "树问题的基础操作",
    points: [
      "前序(根左右)、中序(左根右)、后序(左右根)用递归实现最简洁",
      "迭代实现需要用栈模拟递归过程",
      "层序遍历用队列实现，是 BFS 的特例",
      "Morris 遍历实现 O(1) 空间的中序遍历",
    ],
    practice: "用前序和中序序列重建二叉树",
  },
  {
    id: "dsa-card-5",
    title: "堆与优先队列",
    summary: "高效获取最值的数据结构",
    points: [
      "堆是完全二叉树，用数组存储，父子索引关系明确",
      "插入和删除都是 O(log n)，获取最值是 O(1)",
      "堆化(heapify)从最后一个非叶节点开始，自下而上调整",
      "Top K 问题用小顶堆维护 K 个最大元素",
    ],
    practice: "实现一个支持动态中位数查询的数据结构",
  },
  {
    id: "dsa-card-6",
    title: "图的遍历",
    summary: "DFS 和 BFS 的选择",
    points: [
      "DFS 使用栈(递归或显式)，深入优先，适合路径查找",
      "BFS 使用队列，逐层扩展，天然最短路径",
      "判断图是否有环：DFS 检测回边，BFS 用拓扑排序",
      "记得标记访问状态避免重复遍历",
    ],
    practice: "判断一个有向图是否是 DAG(有向无环图)",
  },
  {
    id: "dsa-card-7",
    title: "动态规划",
    summary: "通过子问题求解原问题",
    points: [
      "识别最优子结构和重叠子问题是关键",
      "状态定义要完整描述子问题，状态转移要穷举所有选择",
      "自顶向下(记忆化)和自底向上(迭代)等价",
      "空间优化：滚动数组将二维压缩为一维",
    ],
    practice: "用动态规划解决「最长公共子序列」",
  },
  {
    id: "dsa-card-8",
    title: "二分查找",
    summary: "最重要的搜索技巧",
    points: [
      "搜索空间必须有序或具有单调性",
      "明确定义搜索区间：[left, right] 或 [left, right)",
      "循环条件和边界更新要与区间定义一致",
      "查找边界：左边界用 >=，右边界用 <=",
    ],
    practice: "在旋转排序数组中查找目标值",
  },
  {
    id: "dsa-card-9",
    title: "贪心与回溯",
    summary: "两种常用算法范式",
    points: [
      "贪心每步选择局部最优，需要证明局部最优导致全局最优",
      "回溯是带剪枝的暴力搜索，适合组合优化问题",
      "回溯模板：选择 -> 递归 -> 撤销选择",
      "剪枝条件越强，搜索空间越小",
    ],
    practice: "用回溯算法解决「N 皇后」问题",
  },
  {
    id: "dsa-card-10",
    title: "最短路径算法",
    summary: "图论核心问题",
    points: [
      "Dijkstra 单源最短路径，贪心思想，不能处理负权",
      "Bellman-Ford 可处理负权，能检测负权环",
      "Floyd 全源最短路径，时间 O(V³)，空间 O(V²)",
      "A* 是 Dijkstra 的启发式扩展，用于路径规划",
    ],
    practice: "实现 Dijkstra 算法求网络延迟时间",
  },
]

export const dataStructuresAlgorithmsExamQuestions: QuizQuestion[] = [
  {
    id: "dsa-q1",
    question: "以下哪个操作在单链表中的时间复杂度是 O(1)？",
    options: ["在指定位置插入节点", "删除尾节点", "在头部插入节点", "查找指定值的节点"],
    answer: 2,
    rationale: "在链表头部插入只需修改 head 指针，是 O(1) 操作。其他操作都需要遍历链表，时间复杂度为 O(n)。",
  },
  {
    id: "dsa-q2",
    question: "哈希表在最坏情况下查找的时间复杂度是？",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    rationale: "当所有元素都哈希到同一个桶时（极端冲突），查找退化为链表遍历，时间复杂度为 O(n)。",
  },
  {
    id: "dsa-q3",
    question: "关于二叉搜索树(BST)，以下说法正确的是？",
    options: [
      "BST 的中序遍历结果一定是降序的",
      "BST 的查找时间复杂度一定是 O(log n)",
      "BST 的中序遍历结果是升序的",
      "BST 中不允许有重复值",
    ],
    answer: 2,
    rationale: "BST 的性质是左子树所有节点小于根，右子树所有节点大于根，因此中序遍历（左-根-右）结果是升序的。",
  },
  {
    id: "dsa-q4",
    question: "快速排序的平均时间复杂度和最坏时间复杂度分别是？",
    options: ["O(n log n) 和 O(n log n)", "O(n log n) 和 O(n²)", "O(n²) 和 O(n²)", "O(n) 和 O(n log n)"],
    answer: 1,
    rationale: "快速排序平均时间复杂度是 O(n log n)，但当数组已排序或逆序时，每次分区都极不平衡，退化为 O(n²)。",
  },
  {
    id: "dsa-q5",
    question: "以下哪种数据结构最适合实现 LRU 缓存？",
    options: ["数组", "单链表", "哈希表 + 双向链表", "二叉搜索树"],
    answer: 2,
    rationale: "LRU 需要 O(1) 的访问和更新，哈希表提供 O(1) 查找，双向链表支持 O(1) 的头尾操作和节点删除。",
  },
  {
    id: "dsa-q6",
    question: "使用 BFS 遍历图的主要优势是？",
    options: ["空间复杂度更低", "能找到最短路径", "实现更简单", "能检测环"],
    answer: 1,
    rationale: "BFS 从起点逐层扩展，先访问到的节点一定是最短路径，因此天然适合求无权图的最短路径。",
  },
  {
    id: "dsa-q7",
    question: "堆排序的空间复杂度是？",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: 0,
    rationale: "堆排序是原地排序算法，只需要常数级别的额外空间用于交换元素，空间复杂度为 O(1)。",
  },
  {
    id: "dsa-q8",
    question: "动态规划与分治算法的主要区别是？",
    options: [
      "动态规划只能用于数值问题",
      "分治算法的子问题是独立的，动态规划的子问题重叠",
      "动态规划的时间复杂度更高",
      "分治算法不能用递归实现",
    ],
    answer: 1,
    rationale: "分治的子问题相互独立（如归并排序），而动态规划的子问题存在重叠（如斐波那契），因此需要记忆化避免重复计算。",
  },
  {
    id: "dsa-q9",
    question: "二分查找的前提条件是？",
    options: ["数组元素是整数", "数组长度是 2 的幂", "数组是有序的", "数组没有重复元素"],
    answer: 2,
    rationale: "二分查找的核心是通过比较中间元素排除一半搜索空间，这要求数组必须有序。",
  },
  {
    id: "dsa-q10",
    question: "Dijkstra 算法不能处理以下哪种图？",
    options: ["无向图", "稀疏图", "有负权边的图", "包含环的图"],
    answer: 2,
    rationale: "Dijkstra 基于贪心策略，假设已确定的最短路径不会被更新。负权边会破坏这个假设，导致错误结果。",
  },
  {
    id: "dsa-q11",
    question: "关于 AVL 树和红黑树，以下说法正确的是？",
    options: [
      "AVL 树的查找效率比红黑树低",
      "红黑树是严格平衡的",
      "AVL 树更适合频繁插入删除的场景",
      "红黑树的插入删除效率比 AVL 树高",
    ],
    answer: 3,
    rationale: "AVL 树严格平衡，查找快但插入删除需要更多旋转。红黑树是近似平衡，插入删除只需最多 3 次旋转。",
  },
  {
    id: "dsa-q12",
    question: "以下哪种排序算法是稳定的？",
    options: ["快速排序", "堆排序", "归并排序", "选择排序"],
    answer: 2,
    rationale: "归并排序在合并时，相等元素保持原有顺序（先处理左边），因此是稳定排序。快排、堆排、选择排序都不稳定。",
  },
  {
    id: "dsa-q13",
    question: "字典树(Trie)最适合解决以下哪类问题？",
    options: ["区间求和", "前缀匹配", "最短路径", "拓扑排序"],
    answer: 1,
    rationale: "字典树的每条从根到节点的路径代表一个前缀，天然支持前缀匹配和自动补全功能。",
  },
  {
    id: "dsa-q14",
    question: "在无向图中检测环可以使用？",
    options: ["只能用 DFS", "只能用 BFS", "DFS 或并查集", "只能用拓扑排序"],
    answer: 2,
    rationale: "无向图检测环可以用 DFS（检测是否访问到非父节点的已访问节点）或并查集（检测边的两端是否已连通）。",
  },
  {
    id: "dsa-q15",
    question: "0-1 背包问题的时间复杂度是？",
    options: ["O(n)", "O(nW)", "O(n²)", "O(2^n)"],
    answer: 1,
    rationale: "0-1 背包问题的状态是 dp[i][w]，i 是物品数量，w 是背包容量 W，因此时间复杂度是 O(nW)。",
  },
  {
    id: "dsa-q16",
    question: "线段树支持的核心操作是？",
    options: ["随机访问", "区间查询和更新", "前缀匹配", "最短路径"],
    answer: 1,
    rationale: "线段树的核心功能是在 O(log n) 时间内完成区间查询（求和、最值等）和单点/区间更新。",
  },
  {
    id: "dsa-q17",
    question: "以下关于并查集的说法，错误的是？",
    options: [
      "路径压缩可以优化查找效率",
      "按秩合并可以保持树的平衡",
      "并查集可以高效地拆分集合",
      "并查集适合解决连通性问题",
    ],
    answer: 2,
    rationale: "并查集只支持合并(Union)操作，不支持拆分。一旦两个集合合并，就无法高效地将它们分开。",
  },
  {
    id: "dsa-q18",
    question: "回溯算法的时间复杂度通常是？",
    options: ["O(n)", "O(n log n)", "指数级或阶乘级", "O(n²)"],
    answer: 2,
    rationale: "回溯本质是穷举所有可能，如全排列 O(n!)，子集 O(2^n)。剪枝可以减少实际搜索量，但不改变最坏复杂度。",
  },
  {
    id: "dsa-q19",
    question: "Kruskal 算法求最小生成树使用了什么策略？",
    options: ["动态规划", "分治", "贪心 + 并查集", "广度优先搜索"],
    answer: 2,
    rationale: "Kruskal 按边权排序后贪心选择，用并查集判断是否形成环。每次选择最小的不形成环的边。",
  },
  {
    id: "dsa-q20",
    question: "以下哪种情况不适合使用贪心算法？",
    options: ["区间调度问题", "哈夫曼编码", "0-1 背包问题", "最小生成树"],
    answer: 2,
    rationale: "0-1 背包问题不具有贪心选择性质，按单位价值贪心可能得不到最优解，必须用动态规划。",
  },
  {
    id: "dsa-q21",
    question: "Floyd-Warshall 算法的时间复杂度是？",
    options: ["O(V²)", "O(V² log V)", "O(V³)", "O(VE)"],
    answer: 2,
    rationale: "Floyd 算法使用三重循环枚举中间点 k 和起终点 i、j，时间复杂度为 O(V³)。",
  },
  {
    id: "dsa-q22",
    question: "KMP 算法的主要优化是？",
    options: [
      "使用哈希函数加速匹配",
      "利用已匹配信息避免重复比较",
      "使用二分查找定位",
      "并行处理多个匹配位置",
    ],
    answer: 1,
    rationale: "KMP 通过预处理模式串构建 next 数组，失配时利用已匹配的前缀信息跳转，避免主串指针回退。",
  },
  {
    id: "dsa-q23",
    question: "以下数据结构中，哪个不是基于树实现的？",
    options: ["优先队列", "哈希表", "TreeMap", "线段树"],
    answer: 1,
    rationale: "优先队列基于堆(完全二叉树)，TreeMap 基于红黑树，线段树是二叉树。哈希表基于数组+链表/红黑树。",
  },
  {
    id: "dsa-q24",
    question: "解决「最长递增子序列」问题的最优时间复杂度是？",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(n³)"],
    answer: 1,
    rationale: "使用动态规划是 O(n²)，但结合二分查找（贪心+二分维护最小末尾）可以优化到 O(n log n)。",
  },
  {
    id: "dsa-q25",
    question: "以下关于单调栈的说法，正确的是？",
    options: [
      "单调栈只能从栈底到栈顶单调递增",
      "单调栈常用于解决「下一个更大元素」类问题",
      "单调栈的空间复杂度是 O(1)",
      "单调栈不能处理循环数组",
    ],
    answer: 1,
    rationale: "单调栈维护单调性，当新元素破坏单调性时弹出栈顶并处理，天然适合「下一个更大/更小元素」问题。",
  },
]

export const dataStructuresAlgorithmsRoadmap: RoadmapDefinition = {
  id: "data-structures-algorithms",
  label: "数据结构与算法",
  title: "数据结构与算法完全指南",
  durationLabel: "12 周系统学习路线",
  description:
    "从基础到高级，系统掌握数据结构与算法。涵盖数组、链表、树、图等核心数据结构，以及排序、查找、动态规划、贪心等经典算法，助你攻克技术面试，提升编程内功。",
  heroBadge: "12 周 · 48 主题",
  stages: dataStructuresAlgorithmsStages,
  knowledgeCards: dataStructuresAlgorithmsKnowledgeCards,
  examQuestions: dataStructuresAlgorithmsExamQuestions,
  suggestion: (percent: number) => {
    if (percent < 15) {
      return "建议从复杂度分析开始，这是理解算法效率的基础。先掌握数组和链表这两种最基本的数据结构。"
    }
    if (percent < 35) {
      return "基础数据结构学习阶段，重点掌握哈希表和二叉树。每个数据结构都要动手实现一遍，理解其核心操作的时间复杂度。"
    }
    if (percent < 55) {
      return "进入高级数据结构阶段，堆、图、并查集等结构有更多应用场景。建议配合 LeetCode 刷题巩固理解。"
    }
    if (percent < 75) {
      return "算法设计阶段是提升的关键。动态规划需要大量练习，建议按题型分类刷题，总结状态定义和转移的模式。"
    }
    if (percent < 90) {
      return "已掌握核心算法，现在需要通过大量练习形成肌肉记忆。参加 LeetCode 周赛检验实战能力。"
    }
    return "恭喜完成系统学习！持续刷题保持手感，关注算法在实际工程中的应用，如数据库索引、缓存淘汰策略等。"
  },
  resourceGuide: {
    environment: "推荐使用 LeetCode 或本地 IDE 进行练习，选择你熟悉的编程语言（Python/Java/C++/Go 均可）。",
    fallbackKeyPoints: [
      "理解数据结构的本质：不同的数据组织方式带来不同的操作效率。",
      "掌握复杂度分析：能够准确评估算法的时间和空间消耗。",
      "熟悉常用算法范式：分治、贪心、动态规划、回溯各有适用场景。",
      "重视代码实现：手写数据结构和算法是最好的学习方式。",
    ],
    handsOnSteps: [
      "每学一个数据结构，先手写实现其核心操作",
      "在 LeetCode 上找对应标签的题目练习",
      "先独立思考 20 分钟，想不出再看题解",
      "看题解后一定要自己重新实现一遍",
      "总结题目的解题模式和适用场景",
    ],
    selfChecks: [
      "能否手写出该数据结构的核心操作？",
      "能否分析其时间和空间复杂度？",
      "能否说出该数据结构的典型应用场景？",
      "遇到新题时，能否判断应该使用什么数据结构？",
    ],
    extensions: [
      "阅读《算法导论》深入理解算法证明",
      "学习竞赛算法扩展知识边界",
      "了解算法在工程中的实际应用",
      "研究标准库中数据结构的源码实现",
    ],
    lessonQuizAdvice: "每节课后完成 2-3 道相关 LeetCode 题目巩固理解，建议按题目难度 Easy -> Medium -> Hard 递进。",
  },
}
