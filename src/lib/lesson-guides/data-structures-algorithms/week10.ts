import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "dsa-w10-1": {
        lessonId: "dsa-w10-1",
        background: [
            "【分治算法的本质】分治(Divide and Conquer)是一种递归式算法设计范式，将问题分解为若干个规模较小但结构相同的子问题，递归求解子问题，然后合并子问题的解得到原问题的解。核心三步：分解(Divide)、解决(Conquer)、合并(Combine)。",
            "【分治与动态规划的区别】分治的子问题相互独立，不存在重叠；DP 的子问题存在重叠，需要记忆化。归并排序的左右两半相互独立（分治），斐波那契的子问题重复出现（DP）。",
            "【经典分治算法】归并排序：分成两半分别排序再合并，O(n log n)。快速排序：选基准分区后递归处理两边。二分查找：每次排除一半搜索空间。快速幂：x^n = (x^(n/2))^2，O(log n)。",
            "【主定理 Master Theorem】分析分治递归的时间复杂度。T(n) = aT(n/b) + f(n)，其中 a 是子问题数，n/b 是子问题规模，f(n) 是分解合并代价。根据 f(n) 与 n^(log_b(a)) 的关系确定复杂度。",
            "【分治的应用场景】适合子问题独立、可以递归分解的问题。逆序对计数（归并排序的变体）、最近点对、大整数乘法（Karatsuba）、矩阵乘法（Strassen）等。"
        ],
        keyDifficulties: [
            "【合并步骤的复杂度】分治的效率关键在于合并步骤。归并排序合并 O(n)，总复杂度 O(n log n)；如果合并是 O(n²)，总复杂度就不会更优。",
            "【逆序对计数】在归并排序的合并阶段，当右边元素先被选中时，说明它比左边剩余的所有元素都小，逆序对数增加「左边剩余元素数」。",
            "【分治的空间复杂度】归并排序需要 O(n) 辅助空间，快速排序只需要 O(log n) 栈空间（平均）。有些分治算法可以原地进行。",
            "【分治的终止条件】问题规模足够小时直接求解（基础情况）。通常是 n=1 或 n=0。终止条件设置不当会导致无限递归。"
        ],
        handsOnPath: [
            "实现归并排序，注意合并步骤的实现细节",
            "练习 LeetCode 剑指 Offer 51「数组中的逆序对」，这是分治的经典应用",
            "练习 LeetCode 50「Pow(x, n)」，实现快速幂",
            "练习 LeetCode 23「合并 K 个升序链表」，用分治方法",
            "练习 LeetCode 169「多数元素」的分治解法"
        ],
        selfCheck: [
            "分治算法的三个步骤是什么？",
            "分治与 DP 的子问题有什么区别？",
            "归并排序的时间和空间复杂度分别是多少？",
            "如何用归并排序计算逆序对？",
            "主定理的三种情况分别是什么？"
        ],
        extensions: [
            "学习 Karatsuba 大整数乘法和 Strassen 矩阵乘法",
            "研究最近点对问题的分治解法",
            "了解分治在并行计算中的应用",
            "探索分治与递归下降解析器的关系"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/introduction-to-divide-and-conquer-algorithm-data-structure-and-algorithm-tutorials/",
            "https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/",
            "https://leetcode.cn/problems/powx-n/"
        ]
    },
    "dsa-w10-2": {
        lessonId: "dsa-w10-2",
        background: [
            "【贪心算法的本质】贪心(Greedy)算法在每一步选择中都采取当前状态下的最优选择（局部最优），希望通过一系列局部最优选择达到全局最优。贪心不回溯，做出选择后不再改变。",
            "【贪心的适用条件】贪心能得到全局最优需要问题具有「贪心选择性质」：当前的最优选择不会影响未来子问题的最优解。以及「最优子结构」：问题的最优解包含子问题的最优解。",
            "【贪心的正确性证明】证明贪心正确性的常用方法：交换论证（假设存在更优解，证明可以通过交换得到贪心解而不变差）、归纳法、反证法。",
            "【经典贪心问题】活动选择（按结束时间排序）、哈夫曼编码（每次合并最小频率节点）、最小生成树（Prim、Kruskal）、区间调度、跳跃游戏等。",
            "【贪心 vs DP】贪心是 DP 的特例。当每一步的最优选择就是全局最优时可用贪心，否则需要 DP 考虑所有可能。贪心效率通常更高（省去了枚举），但适用范围更窄。"
        ],
        keyDifficulties: [
            "【贪心策略的选择】同一问题可能有多种贪心策略，不是所有策略都正确。区间调度：按开始时间贪心（错误）vs 按结束时间贪心（正确）。",
            "【证明的重要性】贪心容易想到但容易出错。必须能证明或反证。如果举不出反例且能证明正确性，才能放心使用。",
            "【跳跃游戏的贪心】记录当前能到达的最远位置 maxReach。遍历数组，更新 maxReach = max(maxReach, i + nums[i])。如果 i > maxReach，说明无法到达。",
            "【区间问题的排序】区间贪心通常需要先排序。移除最少区间使得不重叠：按结束时间排序，遇到重叠时删除结束时间晚的。"
        ],
        handsOnPath: [
            "练习 LeetCode 55「跳跃游戏」，理解贪心的思路",
            "练习 LeetCode 45「跳跃游戏 II」，贪心求最少跳跃次数",
            "练习 LeetCode 435「无重叠区间」，按结束时间排序的贪心",
            "练习 LeetCode 452「用最少数量的箭引爆气球」，区间贪心变体",
            "练习 LeetCode 406「根据身高重建队列」，巧妙的排序+贪心"
        ],
        selfCheck: [
            "什么是「贪心选择性质」？",
            "如何证明一个贪心算法是正确的？",
            "跳跃游戏为什么可以用贪心？贪心策略是什么？",
            "区间调度问题应该按什么排序？为什么？",
            "举一个贪心失效的例子（如 0-1 背包）。"
        ],
        extensions: [
            "学习霍夫曼编码的实现和应用",
            "研究贪心在调度问题中的应用",
            "了解拟阵理论与贪心的关系",
            "探索近似算法中的贪心策略"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/greedy-algorithms/",
            "https://leetcode.cn/problems/jump-game/",
            "https://leetcode.cn/problems/non-overlapping-intervals/"
        ]
    },
    "dsa-w10-3": {
        lessonId: "dsa-w10-3",
        background: [
            "【回溯算法的本质】回溯(Backtracking)是一种通过探索所有可能的候选解来找出所有解或最优解的算法。它是暴力搜索的优化版本，当发现当前路径不可能得到解时（剪枝），立即回退到上一步尝试其他选择。",
            "【回溯的框架】回溯三要素：选择列表（当前可以做的选择）、路径（已经做出的选择）、结束条件（何时得到一个完整解）。模板：做选择 → 递归进入下一层 → 撤销选择。",
            "【剪枝】剪枝是回溯效率的关键。通过提前判断当前路径不可能得到有效解，避免无效搜索。剪枝条件越强，搜索空间越小，效率越高。",
            "【回溯的典型问题】排列问题：元素顺序有关，需要用 visited 数组标记已使用元素。组合问题：元素顺序无关，用 startIndex 控制起始位置避免重复。子集问题：收集所有节点的路径。N 皇后：需要检查列、对角线冲突。",
            "【回溯的时间复杂度】通常是指数级或阶乘级。全排列 O(n!)，子集 O(2^n)，N 皇后 O(n!)。剪枝可以减少实际搜索量，但最坏情况不变。"
        ],
        keyDifficulties: [
            "【排列 vs 组合 vs 子集】排列：[1,2] 和 [2,1] 不同，每层从所有未选元素中选。组合：[1,2] 和 [2,1] 相同，每层从 startIndex 开始选。子集：组合的所有中间结果也是答案。",
            "【去重问题】当输入有重复元素时，需要去重。先排序，同一层中跳过相同元素：if (i > startIndex && nums[i] == nums[i-1]) continue。",
            "【N 皇后的剪枝】用三个 Set 或数组记录已占用的列、左对角线（row-col 相同）、右对角线（row+col 相同）。放置前检查是否冲突。",
            "【撤销选择的时机】递归返回后立即撤销，保证下一次选择时 path 状态正确。如果修改的是引用类型（如数组），需要显式撤销。"
        ],
        handsOnPath: [
            "练习 LeetCode 46「全排列」，理解回溯框架",
            "练习 LeetCode 47「全排列 II」，学习如何去重",
            "练习 LeetCode 78「子集」和 90「子集 II」",
            "练习 LeetCode 77「组合」和 39「组合总和」",
            "练习 LeetCode 51「N 皇后」，体会复杂的剪枝条件"
        ],
        selfCheck: [
            "回溯算法的框架是什么？三要素是什么？",
            "排列和组合问题的代码有什么区别？",
            "如何处理输入有重复元素的情况？",
            "N 皇后问题如何判断是否可以放置？",
            "回溯的时间复杂度为什么通常是指数级或阶乘级？"
        ],
        extensions: [
            "学习回溯在图着色问题中的应用",
            "研究更高效的 N 皇后解法（位运算优化）",
            "了解约束满足问题(CSP)与回溯的关系",
            "探索回溯在人工智能搜索中的应用"
        ],
        sourceUrls: [
            "https://labuladong.online/algo/essential-technique/backtrack-framework/",
            "https://leetcode.cn/problems/permutations/",
            "https://leetcode.cn/problems/n-queens/"
        ]
    },
    "dsa-w10-4": {
        lessonId: "dsa-w10-4",
        background: [
            "【字符串匹配问题】给定文本串 T 和模式串 P，找出 P 在 T 中首次出现的位置（或所有位置）。朴素算法对每个位置尝试匹配，最坏时间 O(nm)。高效算法包括 KMP、Rabin-Karp、Boyer-Moore 等。",
            "【KMP 算法】核心思想是利用已匹配的信息避免重复比较。当匹配失败时，根据模式串的「部分匹配表」（next 数组）移动模式串，而不回退文本串指针。时间复杂度 O(n+m)。",
            "【next 数组】next[i] 表示模式串 P[0..i-1] 的最长相等前后缀长度。当 P[i] 匹配失败时，将模式串移动到 P[next[i]] 继续匹配，因为 P[0..next[i]-1] 已经与文本串对齐。",
            "【Rabin-Karp 算法】使用滚动哈希快速比较字符串。将长度为 m 的窗口计算哈希值，与模式串哈希比较。窗口滑动时 O(1) 更新哈希。平均 O(n+m)，最坏 O(nm)（哈希冲突）。",
            "【其他字符串算法】Boyer-Moore：从右向左匹配，跳跃更远。Z 算法：计算每个位置开始的最长匹配前缀。Manacher：O(n) 求最长回文子串。后缀数组/后缀树：支持更复杂的字符串查询。"
        ],
        keyDifficulties: [
            "【构建 next 数组】next 数组的构建也是一个匹配过程：模式串与自身匹配。令 j=next[i-1]，如果 P[i]==P[j] 则 next[i]=j+1，否则 j=next[j-1] 继续回退。",
            "【KMP 的正确性】next 数组保证移动后，模式串的前缀仍然与文本串对齐。利用了模式串自身的重复结构，避免不必要的比较。",
            "【Rabin-Karp 的哈希函数】常用多项式哈希：hash = (c[0]*d^(m-1) + c[1]*d^(m-2) + ... + c[m-1]) % q。滑动窗口时：new_hash = (old_hash - c[0]*d^(m-1)) * d + c[new]。",
            "【字符串哈希冲突】Rabin-Karp 哈希相等时需要逐字符验证（或者选择足够大的模数和基数降低冲突概率）。"
        ],
        handsOnPath: [
            "手动模拟 KMP 算法的匹配过程，理解 next 数组的作用",
            "实现 next 数组的构建函数",
            "练习 LeetCode 28「找出字符串中第一个匹配项的下标」",
            "实现 Rabin-Karp 算法",
            "练习 LeetCode 5「最长回文子串」，了解 Manacher 算法"
        ],
        selfCheck: [
            "KMP 算法为什么可以避免文本串指针回退？",
            "next 数组的含义是什么？如何构建？",
            "Rabin-Karp 算法如何在 O(1) 时间内更新滑动窗口的哈希值？",
            "字符串哈希可能出现什么问题？如何处理？",
            "KMP 和 Rabin-Karp 的时间复杂度分别是多少？"
        ],
        extensions: [
            "学习 Boyer-Moore 算法的坏字符规则和好后缀规则",
            "研究后缀数组的构建和应用",
            "了解 Aho-Corasick 算法（多模式匹配）",
            "探索字符串算法在生物信息学中的应用"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/",
            "https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/",
            "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "dsa-w10-1": [
        {
            id: "dsa-w10-1-q1",
            question: "分治算法的三个步骤是？",
            options: [
                "循环、判断、输出",
                "分解、解决、合并",
                "定义、转移、输出",
                "选择、递归、回溯"
            ],
            answer: 1,
            rationale: "分治三步：分解(Divide)问题为子问题，解决(Conquer)子问题，合并(Combine)子问题的解。"
        },
        {
            id: "dsa-w10-1-q2",
            question: "分治与动态规划的主要区别是？",
            options: [
                "分治更快",
                "DP 的子问题重叠，分治的子问题独立",
                "分治只能用递归实现",
                "DP 不能用递归实现"
            ],
            answer: 1,
            rationale: "分治的子问题相互独立不重叠，DP 的子问题存在重叠需要记忆化避免重复计算。"
        },
        {
            id: "dsa-w10-1-q3",
            question: "归并排序的时间复杂度是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: 1,
            rationale: "归并排序分治递归，每层合并 O(n)，共 log n 层，总时间 O(n log n)。"
        },
        {
            id: "dsa-w10-1-q4",
            question: "归并排序的空间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 2,
            rationale: "归并排序需要 O(n) 的辅助数组来存储合并结果。"
        },
        {
            id: "dsa-w10-1-q5",
            question: "快速幂计算 x^n 的时间复杂度是？",
            options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            answer: 1,
            rationale: "快速幂利用 x^n = (x^(n/2))² 递归，每次问题规模减半，时间 O(log n)。"
        },
        {
            id: "dsa-w10-1-q6",
            question: "用归并排序计算逆序对时，逆序对在什么时候被统计？",
            options: [
                "分解阶段",
                "合并阶段，当右边元素先被选中时",
                "合并阶段，当左边元素先被选中时",
                "递归返回时"
            ],
            answer: 1,
            rationale: "合并时如果选择右边的元素，说明它比左边剩余的所有元素都小，这些都是逆序对。"
        },
        {
            id: "dsa-w10-1-q7",
            question: "主定理 T(n) = 2T(n/2) + O(n) 的解是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(2^n)"],
            answer: 1,
            rationale: "a=2, b=2, f(n)=O(n)，n^(log_b(a))=n，f(n) 与 n^(log_b(a)) 同阶，所以 T(n)=O(n log n)。"
        },
        {
            id: "dsa-w10-1-q8",
            question: "快速排序平均情况的时间复杂度是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: 1,
            rationale: "平均情况下，分区较均匀，递归深度 O(log n)，每层 O(n)，总时间 O(n log n)。"
        },
        {
            id: "dsa-w10-1-q9",
            question: "快速排序最坏情况发生在什么时候？",
            options: [
                "数组已排序或逆序",
                "数组随机排列",
                "数组有重复元素",
                "数组长度是奇数"
            ],
            answer: 0,
            rationale: "已排序或逆序时，每次分区都极不平衡（一边 0 个一边 n-1 个），退化为 O(n²)。"
        },
        {
            id: "dsa-w10-1-q10",
            question: "以下哪个问题不适合用分治解决？",
            options: ["归并排序", "快速幂", "两数之和", "最近点对"],
            answer: 2,
            rationale: "两数之和用哈希表 O(n) 解决，不需要分治。分治适合可以分解为独立子问题的问题。"
        },
        {
            id: "dsa-w10-1-q11",
            question: "分治算法的递归终止条件通常是？",
            options: [
                "问题规模足够小，可以直接求解",
                "找到最优解",
                "遍历完所有元素",
                "栈溢出"
            ],
            answer: 0,
            rationale: "当问题规模小到可以直接求解（如 n=1 或 n=0）时，递归终止并返回结果。"
        },
        {
            id: "dsa-w10-1-q12",
            question: "Karatsuba 大整数乘法的时间复杂度是？",
            options: ["O(n²)", "O(n^1.58)", "O(n log n)", "O(n)"],
            answer: 1,
            rationale: "Karatsuba 将 4 次乘法减少为 3 次，时间复杂度 O(n^log₂3) ≈ O(n^1.58)。"
        }
    ],
    "dsa-w10-2": [
        {
            id: "dsa-w10-2-q1",
            question: "贪心算法在每一步选择？",
            options: ["全局最优", "随机选择", "当前状态下的局部最优", "最后的选择"],
            answer: 2,
            rationale: "贪心在每一步都选择当前状态下的最优选择（局部最优），希望达到全局最优。"
        },
        {
            id: "dsa-w10-2-q2",
            question: "贪心算法能得到全局最优需要什么性质？",
            options: [
                "只需要最优子结构",
                "贪心选择性质和最优子结构",
                "重叠子问题",
                "无后效性"
            ],
            answer: 1,
            rationale: "贪心需要「贪心选择性质」（局部最优导致全局最优）和「最优子结构」。"
        },
        {
            id: "dsa-w10-2-q3",
            question: "活动选择问题应该按什么排序？",
            options: ["开始时间升序", "结束时间升序", "持续时间升序", "活动编号"],
            answer: 1,
            rationale: "按结束时间升序排序，每次选择最早结束的活动，可以为后续活动留出最多时间。"
        },
        {
            id: "dsa-w10-2-q4",
            question: "「跳跃游戏」的贪心策略是？",
            options: [
                "每次跳最远",
                "每次跳最近",
                "记录能到达的最远位置",
                "随机跳跃"
            ],
            answer: 2,
            rationale: "维护 maxReach 表示当前能到达的最远位置，遍历时不断更新。如果 i > maxReach 则无法到达。"
        },
        {
            id: "dsa-w10-2-q5",
            question: "「无重叠区间」需要移除最少的区间，应该？",
            options: [
                "按开始时间排序，移除开始晚的",
                "按结束时间排序，移除结束晚的",
                "按长度排序，移除长的",
                "按结束时间排序，保留结束早的"
            ],
            answer: 3,
            rationale: "按结束时间排序，遇到重叠时保留结束早的（移除结束晚的），可以为后续区间留出更多空间。"
        },
        {
            id: "dsa-w10-2-q6",
            question: "证明贪心正确性的常用方法是？",
            options: [
                "数学归纳法",
                "反证法",
                "交换论证",
                "以上都是"
            ],
            answer: 3,
            rationale: "证明贪心的常用方法包括交换论证、归纳法和反证法。"
        },
        {
            id: "dsa-w10-2-q7",
            question: "以下哪个问题不能用贪心得到最优解？",
            options: ["活动选择", "哈夫曼编码", "0-1 背包", "最小生成树"],
            answer: 2,
            rationale: "0-1 背包问题不满足贪心选择性质，按单位价值贪心可能不是最优。"
        },
        {
            id: "dsa-w10-2-q8",
            question: "贪心和 DP 的关系是？",
            options: [
                "完全不同的算法",
                "贪心是 DP 的特例",
                "DP 是贪心的特例",
                "两者互斥"
            ],
            answer: 1,
            rationale: "贪心是 DP 的特例，当局部最优就是全局最优时可用贪心，省去枚举所有选择。"
        },
        {
            id: "dsa-w10-2-q9",
            question: "「跳跃游戏 II」求最少跳跃次数的贪心策略是？",
            options: [
                "每次跳到最远的位置",
                "每次跳到能使下一跳最远的位置",
                "BFS 按层遍历",
                "B 和 C 都正确"
            ],
            answer: 3,
            rationale: "可以贪心地跳到下一跳能到达更远的位置，也可以用 BFS 把每一跳能到达的位置看作一层。"
        },
        {
            id: "dsa-w10-2-q10",
            question: "哈夫曼编码每次合并什么？",
            options: [
                "频率最高的两个节点",
                "频率最低的两个节点",
                "相邻的两个节点",
                "随机两个节点"
            ],
            answer: 1,
            rationale: "哈夫曼编码每次合并频率最低的两个节点，使得低频字符编码更长，高频字符编码更短。"
        },
        {
            id: "dsa-w10-2-q11",
            question: "贪心算法的时间复杂度通常？",
            options: [
                "比 DP 高",
                "比 DP 低",
                "与 DP 相同",
                "取决于具体问题"
            ],
            answer: 1,
            rationale: "贪心每步只做一次选择，省去了 DP 枚举所有选择的开销，通常更快。"
        },
        {
            id: "dsa-w10-2-q12",
            question: "如何判断一个问题是否可以用贪心？",
            options: [
                "问题规模小就可以用",
                "能举出反例则不能用，能证明正确则可以用",
                "所有优化问题都可以用贪心",
                "不需要判断，直接使用"
            ],
            answer: 1,
            rationale: "需要尝试证明贪心的正确性，或者找反例证明贪心失效。不能想当然地使用。"
        }
    ],
    "dsa-w10-3": [
        {
            id: "dsa-w10-3-q1",
            question: "回溯算法的核心思想是？",
            options: [
                "每步选择最优",
                "探索所有可能，发现无解时回退",
                "随机搜索",
                "贪心选择"
            ],
            answer: 1,
            rationale: "回溯探索所有可能的候选解，当发现当前路径不可能得到解时，回退到上一步尝试其他选择。"
        },
        {
            id: "dsa-w10-3-q2",
            question: "回溯算法的框架是？",
            options: [
                "定义状态 → 转移方程 → 边界条件",
                "做选择 → 递归 → 撤销选择",
                "分解 → 解决 → 合并",
                "排序 → 遍历 → 输出"
            ],
            answer: 1,
            rationale: "回溯框架：做选择（加入路径）→ 递归进入下一层 → 撤销选择（从路径移除）。"
        },
        {
            id: "dsa-w10-3-q3",
            question: "全排列问题的时间复杂度是？",
            options: ["O(n)", "O(n²)", "O(2^n)", "O(n!)"],
            answer: 3,
            rationale: "n 个元素的全排列有 n! 种，生成所有排列需要 O(n!) 时间。"
        },
        {
            id: "dsa-w10-3-q4",
            question: "子集问题的时间复杂度是？",
            options: ["O(n)", "O(n²)", "O(2^n)", "O(n!)"],
            answer: 2,
            rationale: "n 个元素的子集有 2^n 个，生成所有子集需要 O(2^n) 时间。"
        },
        {
            id: "dsa-w10-3-q5",
            question: "排列问题和组合问题的代码区别是？",
            options: [
                "排列需要 visited 数组，组合用 startIndex",
                "组合需要 visited 数组，排列用 startIndex",
                "没有区别",
                "只是终止条件不同"
            ],
            answer: 0,
            rationale: "排列考虑顺序，用 visited 标记已选元素；组合不考虑顺序，用 startIndex 保证只选后面的元素。"
        },
        {
            id: "dsa-w10-3-q6",
            question: "当输入数组有重复元素时，如何去重？",
            options: [
                "先排序，同一层跳过相同元素",
                "使用集合去重",
                "每次全部重新排序",
                "不需要去重"
            ],
            answer: 0,
            rationale: "先排序，然后在同一层中跳过与前一个相同的元素：if(i > start && nums[i] == nums[i-1]) continue。"
        },
        {
            id: "dsa-w10-3-q7",
            question: "N 皇后问题需要检查哪些冲突？",
            options: [
                "只检查同一列",
                "检查同一列和同一行",
                "检查同一列、左对角线、右对角线",
                "检查同一行、左对角线、右对角线"
            ],
            answer: 2,
            rationale: "按行放置皇后时，需要检查同一列、左对角线(row-col相同)、右对角线(row+col相同)。"
        },
        {
            id: "dsa-w10-3-q8",
            question: "「剪枝」的作用是？",
            options: [
                "减少代码量",
                "提前终止无效搜索，提高效率",
                "保证正确性",
                "简化逻辑"
            ],
            answer: 1,
            rationale: "剪枝通过提前判断当前路径不可能得到有效解，避免无效搜索，减少实际搜索量。"
        },
        {
            id: "dsa-w10-3-q9",
            question: "回溯中「撤销选择」的时机是？",
            options: [
                "找到解之后",
                "递归调用之前",
                "递归调用返回之后",
                "函数开始时"
            ],
            answer: 2,
            rationale: "递归返回后立即撤销选择，恢复到递归前的状态，以便尝试其他选择。"
        },
        {
            id: "dsa-w10-3-q10",
            question: "组合总和问题允许元素重复使用时，递归调用中的 startIndex 应该？",
            options: [
                "i + 1（不能重复使用当前元素）",
                "i（可以重复使用当前元素）",
                "0（每次从头开始）",
                "n - 1"
            ],
            answer: 1,
            rationale: "允许重复使用时，下一层仍从当前位置 i 开始，而不是 i+1。"
        },
        {
            id: "dsa-w10-3-q11",
            question: "N 皇后问题的时间复杂度是？",
            options: ["O(n²)", "O(n³)", "O(n!)", "O(2^n)"],
            answer: 2,
            rationale: "最坏情况需要尝试所有排列，时间复杂度 O(n!)。剪枝可以减少实际搜索量。"
        },
        {
            id: "dsa-w10-3-q12",
            question: "以下哪个问题不适合用回溯？",
            options: ["全排列", "子集生成", "数组求和", "N 皇后"],
            answer: 2,
            rationale: "数组求和直接遍历累加即可，不需要穷举所有可能。回溯适合组合优化、搜索问题。"
        }
    ],
    "dsa-w10-4": [
        {
            id: "dsa-w10-4-q1",
            question: "朴素字符串匹配算法的最坏时间复杂度是？",
            options: ["O(n)", "O(m)", "O(n+m)", "O(nm)"],
            answer: 3,
            rationale: "朴素算法对每个位置都可能比较 m 次才发现不匹配，共 n-m+1 个位置，最坏 O(nm)。"
        },
        {
            id: "dsa-w10-4-q2",
            question: "KMP 算法的核心思想是？",
            options: [
                "使用哈希加速",
                "利用已匹配信息避免重复比较",
                "从右向左匹配",
                "分治求解"
            ],
            answer: 1,
            rationale: "KMP 利用模式串的部分匹配信息（next 数组），失配时不回退文本串指针，直接移动模式串。"
        },
        {
            id: "dsa-w10-4-q3",
            question: "KMP 中 next[i] 的含义是？",
            options: [
                "P[0..i] 中最长相等前后缀长度",
                "P[0..i-1] 中最长相等前后缀长度",
                "P[i] 之后的最长匹配",
                "下一个要匹配的位置"
            ],
            answer: 1,
            rationale: "next[i] 是 P[0..i-1] 的最长相等前后缀长度，失配时跳到 next[i] 位置继续匹配。"
        },
        {
            id: "dsa-w10-4-q4",
            question: "KMP 算法的时间复杂度是？",
            options: ["O(nm)", "O(n+m)", "O(n log m)", "O(n)"],
            answer: 1,
            rationale: "构建 next 数组 O(m)，匹配过程 O(n)，总时间 O(n+m)。"
        },
        {
            id: "dsa-w10-4-q5",
            question: "Rabin-Karp 算法使用什么技术？",
            options: [
                "动态规划",
                "滚动哈希",
                "分治",
                "贪心"
            ],
            answer: 1,
            rationale: "Rabin-Karp 使用滚动哈希，窗口滑动时 O(1) 更新哈希值，快速比较。"
        },
        {
            id: "dsa-w10-4-q6",
            question: "Rabin-Karp 的平均时间复杂度是？",
            options: ["O(nm)", "O(n+m)", "O(n log m)", "O(m)"],
            answer: 1,
            rationale: "平均情况下哈希冲突少，时间 O(n+m)。最坏情况（全冲突）O(nm)。"
        },
        {
            id: "dsa-w10-4-q7",
            question: "构建 KMP 的 next 数组本质上是什么过程？",
            options: [
                "排序",
                "模式串与自身的匹配",
                "哈希计算",
                "遍历文本串"
            ],
            answer: 1,
            rationale: "构建 next 数组就是让模式串与自身的后缀进行匹配，找最长相等前后缀。"
        },
        {
            id: "dsa-w10-4-q8",
            question: "Rabin-Karp 哈希相等时应该？",
            options: [
                "直接返回匹配成功",
                "逐字符验证是否真的相等",
                "继续找下一个匹配",
                "返回哈希值"
            ],
            answer: 1,
            rationale: "哈希可能冲突，相等时需要逐字符验证。或者用多个哈希函数降低冲突概率。"
        },
        {
            id: "dsa-w10-4-q9",
            question: "模式串 \"ABABC\" 的 next 数组是？",
            options: [
                "[0, 0, 1, 2, 0]",
                "[0, 0, 1, 2, 3]",
                "[-1, 0, 0, 1, 2]",
                "[0, 1, 2, 3, 0]"
            ],
            answer: 0,
            rationale: "A:0, AB:0, ABA:1(A=A), ABAB:2(AB=AB), ABABC:0(无相等前后缀)。"
        },
        {
            id: "dsa-w10-4-q10",
            question: "Boyer-Moore 算法的特点是？",
            options: [
                "从左向右匹配",
                "从右向左匹配，可以跳过更多字符",
                "使用动态规划",
                "只能处理短模式串"
            ],
            answer: 1,
            rationale: "Boyer-Moore 从右向左匹配，利用坏字符和好后缀规则可以跳过更多字符，实际效率很高。"
        },
        {
            id: "dsa-w10-4-q11",
            question: "以下哪个算法可以 O(n) 时间求最长回文子串？",
            options: ["KMP", "Rabin-Karp", "Manacher", "Boyer-Moore"],
            answer: 2,
            rationale: "Manacher 算法利用回文的对称性，在 O(n) 时间内求出所有位置的最长回文半径。"
        },
        {
            id: "dsa-w10-4-q12",
            question: "字符串哈希常用的计算方式是？",
            options: [
                "所有字符 ASCII 码相加",
                "多项式哈希：sum(c[i] * base^(m-1-i))",
                "字符出现次数统计",
                "字符串长度"
            ],
            answer: 1,
            rationale: "多项式哈希把字符串看作 base 进制数，可以 O(1) 滚动更新窗口哈希值。"
        }
    ]
}
