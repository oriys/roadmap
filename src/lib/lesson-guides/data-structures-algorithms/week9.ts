import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "dsa-w9-1": {
        lessonId: "dsa-w9-1",
        background: [
            "【动态规划的本质】动态规划(DP)是一种通过把原问题分解为相对简单的子问题来求解复杂问题的方法。核心思想是：保存子问题的解，避免重复计算。DP 适用于具有「最优子结构」和「重叠子问题」性质的问题。",
            "【最优子结构】原问题的最优解包含子问题的最优解。例如最短路径问题：如果 A→C 的最短路径经过 B，那么 A→B 和 B→C 的部分也必须是各自的最短路径。",
            "【重叠子问题】递归过程中会多次求解相同的子问题。斐波那契数列是典型例子：fib(5) 需要 fib(4) 和 fib(3)，而 fib(4) 又需要 fib(3) 和 fib(2)，fib(3) 被重复计算。",
            "【状态定义】DP 的第一步是定义状态，即用什么来描述子问题。状态定义要完整（能唯一确定一个子问题）且简洁（避免冗余维度）。例如爬楼梯问题，dp[i] 表示到达第 i 级台阶的方法数。",
            "【状态转移方程】描述状态之间的关系，即如何从已知子问题推导出更大的问题。爬楼梯的转移方程：dp[i] = dp[i-1] + dp[i-2]，因为可以从第 i-1 级跨一步或从第 i-2 级跨两步到达第 i 级。"
        ],
        keyDifficulties: [
            "【记忆化搜索 vs 迭代】自顶向下的记忆化搜索从原问题递归到子问题，用备忘录记录已解决的子问题；自底向上的迭代从最小子问题开始填表。两种方式等价，选择取决于问题特点和个人习惯。",
            "【状态定义的艺术】状态定义不唯一，不同定义导致不同的转移方程和复杂度。例如最长递增子序列(LIS)：dp[i] 表示以 nums[i] 结尾的 LIS 长度是 O(n²) 解法的基础；而贪心+二分的 O(n log n) 解法则定义不同的状态。",
            "【边界条件】DP 的边界条件就是最小子问题的答案。例如斐波那契的 dp[0]=0, dp[1]=1。边界条件设置错误是 DP 代码出 bug 的常见原因。",
            "【无后效性】当前状态一旦确定，未来的决策不会受到过去如何到达当前状态的影响。这是 DP 适用的必要条件。如果存在后效性，需要增加状态维度来消除。"
        ],
        handsOnPath: [
            "实现斐波那契数列的递归、记忆化递归、迭代三种版本，比较时间复杂度",
            "练习 LeetCode 70「爬楼梯」，这是 DP 入门的经典题",
            "练习 LeetCode 746「使用最小花费爬楼梯」，体会状态转移方程的推导",
            "练习 LeetCode 198「打家劫舍」，理解「选或不选」的决策模型",
            "练习 LeetCode 53「最大子数组和」，用 Kadane 算法体会状态定义的重要性"
        ],
        selfCheck: [
            "什么是「最优子结构」和「重叠子问题」？为什么 DP 要求这两个性质？",
            "记忆化搜索和迭代 DP 的优缺点分别是什么？",
            "如何判断一个问题是否可以用 DP 解决？",
            "DP 的时间复杂度如何分析？通常是「状态数 × 转移代价」。",
            "什么是「无后效性」？举一个违反无后效性的例子。"
        ],
        extensions: [
            "研究 DP 与贪心的区别：贪心是 DP 的特例，当每一步的局部最优就是全局最优时可用贪心",
            "学习如何用 DP 解决计数问题（方案数）和判定问题（是否可行）",
            "了解 DP 的空间优化：滚动数组、原地修改",
            "探索 DP 在博弈论问题中的应用"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/detail/dynamic-programming-1-702/",
            "https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews",
            "https://labuladong.online/algo/essential-technique/dynamic-programming-framework/"
        ]
    },
    "dsa-w9-2": {
        lessonId: "dsa-w9-2",
        background: [
            "【背包问题概述】背包问题是一类经典的 DP 问题：给定容量为 W 的背包和 n 个物品，每个物品有重量和价值，求如何选择物品使得总价值最大且总重量不超过 W。根据物品的选择限制，分为 0-1 背包、完全背包、多重背包等。",
            "【0-1 背包】每个物品只能选一次。状态定义 dp[i][w] = 前 i 个物品、容量为 w 时的最大价值。转移方程：dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i])，即「不选第 i 个物品」和「选第 i 个物品」中取最大值。",
            "【完全背包】每个物品可以选无限次。转移方程变为 dp[i][w] = max(dp[i-1][w], dp[i][w-weight[i]] + value[i])，注意第二项是 dp[i] 而非 dp[i-1]，因为物品可以重复选。",
            "【多重背包】每个物品有数量限制。可以拆分成 0-1 背包，或用二进制优化、单调队列优化。",
            "【背包问题的变体】除了求最大价值，还有求方案数（改 max 为 +）、求最小代价（改 max 为 min）、恰好装满（初始化不同）等变体。"
        ],
        keyDifficulties: [
            "【空间优化】0-1 背包可以把二维 dp 压缩为一维：从大到小遍历容量 w，因为每个物品只用一次，必须用上一行的值。完全背包从小到大遍历，因为物品可以重复选。",
            "【初始化的区别】求「不超过容量 W」的最大价值：dp[0] = 0，其余初始化为 0。求「恰好装满」的最大价值：dp[0] = 0，其余初始化为 -∞（表示不可达状态）。",
            "【恰好装满 vs 不超过】问题描述的细微差别会导致初始化和转移的不同。恰好装满时，只有 dp[0] 是有效状态。",
            "【物品顺序 vs 组合排列】背包问题求的是「组合数」（无序）；如果题目要求「排列数」（有序），需要调整循环顺序：先遍历容量，再遍历物品。"
        ],
        handsOnPath: [
            "手动模拟 0-1 背包的填表过程，理解状态转移",
            "练习 LeetCode 416「分割等和子集」，这是 0-1 背包的直接应用",
            "练习 LeetCode 322「零钱兑换」，这是完全背包求最小代价的问题",
            "练习 LeetCode 518「零钱兑换 II」，这是完全背包求方案数的问题",
            "练习 LeetCode 494「目标和」，体会背包问题的变形"
        ],
        selfCheck: [
            "0-1 背包和完全背包的状态转移方程有什么区别？为什么？",
            "一维 DP 时，0-1 背包为什么要从大到小遍历容量？",
            "如何区分「组合」和「排列」？循环顺序如何调整？",
            "「恰好装满」和「不超过容量」的初始化有什么不同？",
            "多重背包如何用二进制优化？"
        ],
        extensions: [
            "学习多重背包的单调队列优化",
            "研究分组背包、混合背包等更复杂的背包变体",
            "了解背包问题在实际中的应用：资源分配、装载问题",
            "探索背包问题的对偶性和数学分析"
        ],
        sourceUrls: [
            "https://github.com/tianyicui/pack",
            "https://leetcode.cn/problems/partition-equal-subset-sum/",
            "https://leetcode.cn/problems/coin-change/"
        ]
    },
    "dsa-w9-3": {
        lessonId: "dsa-w9-3",
        background: [
            "【序列 DP 概述】序列型 DP 是处理数组或字符串问题的常用方法，状态通常定义在前缀、后缀或子序列上。常见问题包括最长递增子序列(LIS)、最长公共子序列(LCS)、编辑距离等。",
            "【最长递增子序列 LIS】给定数组，求最长的严格递增子序列的长度（子序列可以不连续）。DP 定义：dp[i] = 以 nums[i] 结尾的 LIS 长度。转移：dp[i] = max(dp[j]) + 1，其中 j < i 且 nums[j] < nums[i]。时间 O(n²)。",
            "【LIS 的优化】用贪心+二分可以做到 O(n log n)：维护一个数组 tails，tails[i] 表示长度为 i+1 的 LIS 的最小末尾元素。遍历数组时二分查找应该替换的位置。",
            "【最长公共子序列 LCS】给定两个字符串，求最长的公共子序列长度。DP 定义：dp[i][j] = text1 前 i 个字符和 text2 前 j 个字符的 LCS 长度。转移：如果 text1[i-1] == text2[j-1]，dp[i][j] = dp[i-1][j-1] + 1；否则 dp[i][j] = max(dp[i-1][j], dp[i][j-1])。",
            "【编辑距离】将字符串 A 转换为 B 的最少操作数（插入、删除、替换）。dp[i][j] = A 前 i 个字符变成 B 前 j 个字符的最小代价。转移考虑最后一步是插入、删除还是替换。"
        ],
        keyDifficulties: [
            "【状态定义的选择】LIS 定义为「以 i 结尾」而不是「前 i 个元素的 LIS」，因为后者的最优解不一定包含 nums[i]，无法推导转移方程。",
            "【子序列 vs 子数组】子序列可以不连续，子数组必须连续。两者的 DP 定义和转移方程通常不同。",
            "【空间优化】LCS 可以用滚动数组从 O(mn) 优化到 O(min(m,n))。但如果需要还原路径，必须保留完整的 DP 表。",
            "【路径还原】很多序列 DP 不仅要求长度/代价，还要求具体方案。需要额外记录转移来源，然后回溯构造答案。"
        ],
        handsOnPath: [
            "练习 LeetCode 300「最长递增子序列」，分别用 O(n²) 和 O(n log n) 两种方法",
            "练习 LeetCode 1143「最长公共子序列」，手动填表理解状态转移",
            "练习 LeetCode 72「编辑距离」，这是 DP 的经典难题",
            "练习 LeetCode 516「最长回文子序列」，体会序列 DP 的变形",
            "练习 LeetCode 115「不同的子序列」，这是 LCS 的变体"
        ],
        selfCheck: [
            "LIS 的 dp[i] 为什么定义为「以 i 结尾」而不是「前 i 个元素」？",
            "LCS 的两种情况（字符相等/不等）分别对应什么操作？",
            "编辑距离的三种操作如何体现在状态转移中？",
            "如何从 DP 表中还原出 LCS 的具体序列？",
            "最长递增子序列和最长公共子序列有什么联系？（提示：LIS 可以转化为 LCS）"
        ],
        extensions: [
            "研究最长公共子串（要求连续）与 LCS 的区别",
            "学习如何用 LCS 解决 diff 算法",
            "探索 O(n log n) LIS 的证明和实现细节",
            "了解序列比对在生物信息学中的应用"
        ],
        sourceUrls: [
            "https://leetcode.cn/problems/longest-increasing-subsequence/",
            "https://leetcode.cn/problems/longest-common-subsequence/",
            "https://leetcode.cn/problems/edit-distance/"
        ]
    },
    "dsa-w9-4": {
        lessonId: "dsa-w9-4",
        background: [
            "【区间 DP 概述】区间 DP 的状态定义在区间 [i, j] 上，表示该区间内子问题的最优解。转移方程通常需要枚举分割点 k，将区间分成 [i, k] 和 [k+1, j] 两部分。经典问题包括矩阵链乘法、戳气球、石子合并等。",
            "【区间 DP 的填表顺序】由于 dp[i][j] 依赖于更小的区间，需要按区间长度从小到大填表。外层循环枚举区间长度 len，内层循环枚举左端点 i，右端点 j = i + len - 1。",
            "【矩阵链乘法】求 n 个矩阵相乘的最少标量乘法次数。dp[i][j] = 矩阵 i 到 j 相乘的最小代价。转移：枚举分割点 k，dp[i][j] = min(dp[i][k] + dp[k+1][j] + cost(i,k,j))。",
            "【状态压缩 DP 概述】当状态涉及一个集合的选择情况时，可以用二进制数表示。如果有 n 个元素，用 n 位二进制数表示每个元素是否被选中。状态数是 2^n，适用于 n 较小（通常 n ≤ 20）的情况。",
            "【旅行商问题 TSP】经典的 NP 难问题，用状态压缩 DP 可在 O(n² × 2^n) 时间内求解。dp[mask][i] = 已访问城市集合为 mask、当前在城市 i 时的最小路径长度。"
        ],
        keyDifficulties: [
            "【戳气球的转化】戳气球问题看似是删除，但删除后相邻关系改变，难以定义状态。逆向思考：最后戳哪个气球。dp[i][j] 表示戳完开区间 (i, j) 内所有气球能获得的最大硬币。",
            "【区间 DP 的边界】通常 dp[i][i] = 单个元素的贡献，dp[i][i-1] = 0（空区间）。填表时要保证依赖的更小区间已经计算过。",
            "【状态压缩的位运算】检查第 i 位是否为 1：(mask >> i) & 1。设置第 i 位为 1：mask | (1 << i)。清除第 i 位：mask & ~(1 << i)。枚举子集：for (int sub = mask; sub > 0; sub = (sub - 1) & mask)。",
            "【状态压缩的空间开销】2^20 ≈ 10^6 个状态，如果每个状态还有额外维度，内存可能不够。需要估算空间复杂度。"
        ],
        handsOnPath: [
            "练习 LeetCode 312「戳气球」，理解区间 DP 的逆向思维",
            "练习 LeetCode 1039「多边形三角剖分的最低得分」，这是区间 DP 的几何应用",
            "练习 LeetCode 877「石子游戏」，体会博弈+区间 DP",
            "练习 LeetCode 847「访问所有节点的最短路径」，这是状态压缩+BFS",
            "练习 LeetCode 1986「完成任务的最少工作时间段」，体会状态压缩的枚举子集技巧"
        ],
        selfCheck: [
            "区间 DP 为什么要按区间长度从小到大填表？",
            "戳气球问题为什么要「逆向思考」？",
            "如何用位运算检查、设置、清除某一位？",
            "状态压缩 DP 适用于什么规模的问题？为什么？",
            "如何枚举一个二进制数的所有子集？"
        ],
        extensions: [
            "研究区间 DP 的四边形不等式优化",
            "学习更多状态压缩的应用：Hamilton 路径、匹配问题",
            "探索近似算法处理大规模 TSP",
            "了解 DP 的 bitset 优化和 SIMD 优化"
        ],
        sourceUrls: [
            "https://leetcode.cn/problems/burst-balloons/",
            "https://www.geeksforgeeks.org/bitmasking-and-dynamic-programming-set-1-count-ways-to-assign-unique-cap-to-every-person/",
            "https://leetcode.cn/problems/stone-game/"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "dsa-w9-1": [
        {
            id: "dsa-w9-1-q1",
            question: "动态规划适用于具有以下哪两个性质的问题？",
            options: ["最优子结构和重叠子问题", "贪心选择和无后效性", "分治和合并", "随机性和确定性"],
            answer: 0,
            rationale: "DP 要求问题具有最优子结构（原问题的最优解包含子问题的最优解）和重叠子问题（子问题会被重复求解）。"
        },
        {
            id: "dsa-w9-1-q2",
            question: "斐波那契数列的递归解法时间复杂度是？",
            options: ["O(n)", "O(n²)", "O(2^n)", "O(log n)"],
            answer: 2,
            rationale: "递归形成二叉树结构，每个节点分裂为两个子节点，总节点数约为 2^n，时间复杂度 O(2^n)。"
        },
        {
            id: "dsa-w9-1-q3",
            question: "「记忆化搜索」的主要作用是？",
            options: ["减少空间使用", "避免重复计算子问题", "简化代码逻辑", "支持并行计算"],
            answer: 1,
            rationale: "记忆化搜索用备忘录保存已计算的子问题结果，避免重复计算，将指数级降为多项式级。"
        },
        {
            id: "dsa-w9-1-q4",
            question: "爬楼梯问题中 dp[i] 的含义是？",
            options: ["从第 i 级到顶部的方法数", "到达第 i 级的方法数", "第 i 步能跨越的台阶数", "前 i 级台阶的高度和"],
            answer: 1,
            rationale: "dp[i] 定义为到达第 i 级台阶的方法数，状态转移 dp[i] = dp[i-1] + dp[i-2]。"
        },
        {
            id: "dsa-w9-1-q5",
            question: "以下哪个不是 DP 问题的求解步骤？",
            options: ["定义状态", "推导状态转移方程", "确定边界条件", "随机选择初始解"],
            answer: 3,
            rationale: "DP 的步骤是：定义状态 → 推导转移方程 → 确定边界条件 → 按顺序计算。不涉及随机选择。"
        },
        {
            id: "dsa-w9-1-q6",
            question: "「无后效性」是指？",
            options: ["当前决策不影响历史", "当前状态确定后，未来决策与如何到达当前状态无关", "所有状态互不影响", "DP 表不能修改"],
            answer: 1,
            rationale: "无后效性指一旦当前状态确定，未来的决策只依赖当前状态的值，与过去如何到达该状态无关。"
        },
        {
            id: "dsa-w9-1-q7",
            question: "DP 的时间复杂度通常是？",
            options: ["状态数", "转移代价", "状态数 × 转移代价", "问题规模的平方"],
            answer: 2,
            rationale: "DP 需要计算每个状态，每个状态的计算代价是转移代价，总时间 = 状态数 × 转移代价。"
        },
        {
            id: "dsa-w9-1-q8",
            question: "「打家劫舍」问题的状态转移方程是？",
            options: [
                "dp[i] = dp[i-1] + nums[i]",
                "dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
                "dp[i] = dp[i-1] + dp[i-2]",
                "dp[i] = max(nums[i], nums[i-1])"
            ],
            answer: 1,
            rationale: "不能抢相邻房屋，dp[i] = max(不抢第 i 家 dp[i-1], 抢第 i 家 dp[i-2]+nums[i])。"
        },
        {
            id: "dsa-w9-1-q9",
            question: "自顶向下和自底向上两种 DP 实现方式的关系是？",
            options: ["自顶向下更高效", "自底向上更高效", "两者等价", "不同问题适用不同方式"],
            answer: 2,
            rationale: "两种方式在时间复杂度上等价，都是计算每个状态一次。选择取决于问题特点和个人偏好。"
        },
        {
            id: "dsa-w9-1-q10",
            question: "「最大子数组和」的 Kadane 算法的核心思想是？",
            options: [
                "枚举所有子数组",
                "dp[i] 表示以 i 结尾的最大子数组和",
                "使用分治法",
                "排序后求和"
            ],
            answer: 1,
            rationale: "Kadane 算法定义 dp[i] 为以 i 结尾的最大子数组和，dp[i] = max(nums[i], dp[i-1]+nums[i])。"
        },
        {
            id: "dsa-w9-1-q11",
            question: "DP 和贪心的主要区别是？",
            options: [
                "DP 更快",
                "贪心考虑所有选择，DP 只考虑局部最优",
                "DP 考虑所有选择，贪心只考虑局部最优",
                "两者没有区别"
            ],
            answer: 2,
            rationale: "DP 通过考虑所有可能的选择找到全局最优，贪心每步只选择当前最优，适用范围更窄。"
        },
        {
            id: "dsa-w9-1-q12",
            question: "如果一个问题违反了「无后效性」，应该怎么办？",
            options: [
                "不能使用 DP",
                "增加状态维度以消除后效性",
                "改用贪心算法",
                "使用暴力枚举"
            ],
            answer: 1,
            rationale: "可以通过增加状态维度来消除后效性，让扩展后的状态满足无后效性，然后使用 DP。"
        }
    ],
    "dsa-w9-2": [
        {
            id: "dsa-w9-2-q1",
            question: "0-1 背包问题中，每个物品最多可以选择几次？",
            options: ["0 次", "1 次", "无限次", "由背包容量决定"],
            answer: 1,
            rationale: "0-1 背包中每个物品要么选(1)要么不选(0)，最多选一次。"
        },
        {
            id: "dsa-w9-2-q2",
            question: "0-1 背包的状态转移方程是？",
            options: [
                "dp[i][w] = dp[i-1][w] + dp[i-1][w-weight[i]]",
                "dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i])",
                "dp[i][w] = max(dp[i-1][w], dp[i][w-weight[i]] + value[i])",
                "dp[i][w] = dp[i][w-1] + value[i]"
            ],
            answer: 1,
            rationale: "0-1 背包选或不选：不选用 dp[i-1][w]，选用 dp[i-1][w-weight[i]]+value[i]，取 max。"
        },
        {
            id: "dsa-w9-2-q3",
            question: "完全背包与 0-1 背包的状态转移方程的区别是？",
            options: [
                "完全背包用 min，0-1 背包用 max",
                "完全背包选的时候用 dp[i]，0-1 背包用 dp[i-1]",
                "没有区别",
                "完全背包不需要状态转移"
            ],
            answer: 1,
            rationale: "完全背包物品可重复选，选第 i 个物品后还可以继续选，所以用 dp[i][w-weight[i]] 而不是 dp[i-1]。"
        },
        {
            id: "dsa-w9-2-q4",
            question: "0-1 背包一维优化时，为什么要从大到小遍历容量？",
            options: [
                "提高效率",
                "保证每个物品只被使用一次",
                "减少空间使用",
                "方便计算"
            ],
            answer: 1,
            rationale: "从大到小遍历保证更新 dp[w] 时用的 dp[w-weight[i]] 是上一轮（第 i-1 个物品）的值，保证每个物品只选一次。"
        },
        {
            id: "dsa-w9-2-q5",
            question: "「分割等和子集」是哪种背包问题的应用？",
            options: ["完全背包", "0-1 背包", "多重背包", "分组背包"],
            answer: 1,
            rationale: "每个数字只能用一次，判断是否能选出若干数字使得和为总和的一半，是 0-1 背包的判定问题。"
        },
        {
            id: "dsa-w9-2-q6",
            question: "「零钱兑换」求最少硬币数是哪种背包问题？",
            options: ["0-1 背包求最小", "完全背包求最小", "0-1 背包求方案数", "完全背包求方案数"],
            answer: 1,
            rationale: "每种硬币可以用无限次（完全背包），求凑出目标金额的最少硬币数（最小代价）。"
        },
        {
            id: "dsa-w9-2-q7",
            question: "「恰好装满」和「不超过容量」的初始化区别是？",
            options: [
                "没有区别",
                "恰好装满：dp[0]=0，其余=-∞；不超过：全部初始化为 0",
                "恰好装满：全部初始化为 0；不超过：dp[0]=0，其余=-∞",
                "根据物品价值决定"
            ],
            answer: 1,
            rationale: "恰好装满时只有 dp[0] 是有效状态，其余为不可达（-∞）；不超过时所有容量都是有效状态（初始化为 0）。"
        },
        {
            id: "dsa-w9-2-q8",
            question: "背包问题求「方案数」时，状态转移方程中的 max 应该改为？",
            options: ["min", "+（加法）", "×（乘法）", "不需要改变"],
            answer: 1,
            rationale: "求方案数时，不同的选择方式对应不同的方案，应该累加而不是取最大值。"
        },
        {
            id: "dsa-w9-2-q9",
            question: "0-1 背包问题的时间复杂度是？",
            options: ["O(n)", "O(nW)", "O(n²)", "O(2^n)"],
            answer: 1,
            rationale: "状态数是 n×W，每个状态转移是 O(1)，总时间复杂度 O(nW)。"
        },
        {
            id: "dsa-w9-2-q10",
            question: "多重背包问题中，每个物品的数量限制是？",
            options: ["0 或 1", "无限", "有限的 k 个", "由容量决定"],
            answer: 2,
            rationale: "多重背包每个物品有数量上限 k，可以选 0 到 k 个。"
        },
        {
            id: "dsa-w9-2-q11",
            question: "如果背包问题要求「组合数」（无序），循环顺序应该是？",
            options: [
                "先遍历物品，再遍历容量",
                "先遍历容量，再遍历物品",
                "顺序无所谓",
                "只遍历容量"
            ],
            answer: 0,
            rationale: "先遍历物品再遍历容量，保证每种物品只在一轮中被考虑，结果是组合数。"
        },
        {
            id: "dsa-w9-2-q12",
            question: "「目标和」问题可以转化为什么背包问题？",
            options: [
                "完全背包求方案数",
                "0-1 背包求方案数",
                "0-1 背包求最大值",
                "多重背包"
            ],
            answer: 1,
            rationale: "每个数字只能用一次（0-1 背包），求有多少种方式使得选中的数字和为某个目标（方案数）。"
        }
    ],
    "dsa-w9-3": [
        {
            id: "dsa-w9-3-q1",
            question: "最长递增子序列(LIS)的 O(n²) 解法中，dp[i] 的定义是？",
            options: [
                "前 i 个元素的 LIS 长度",
                "以 nums[i] 结尾的 LIS 长度",
                "从位置 i 开始的 LIS 长度",
                "以 nums[i] 为最小值的 LIS 长度"
            ],
            answer: 1,
            rationale: "定义为「以 nums[i] 结尾」才能正确推导转移方程，因为需要知道最后一个元素是什么来判断能否接上。"
        },
        {
            id: "dsa-w9-3-q2",
            question: "LIS 的 O(n log n) 解法使用了什么技术？",
            options: ["分治", "贪心+二分查找", "记忆化搜索", "双指针"],
            answer: 1,
            rationale: "维护最小末尾数组 tails，贪心地让每个长度的 LIS 末尾尽可能小，二分查找更新位置。"
        },
        {
            id: "dsa-w9-3-q3",
            question: "最长公共子序列(LCS)的状态转移方程中，当两个字符相等时？",
            options: [
                "dp[i][j] = max(dp[i-1][j], dp[i][j-1])",
                "dp[i][j] = dp[i-1][j-1] + 1",
                "dp[i][j] = dp[i-1][j-1]",
                "dp[i][j] = 1"
            ],
            answer: 1,
            rationale: "字符相等时，LCS 长度在两个字符串各去掉这个字符后的 LCS 长度基础上加 1。"
        },
        {
            id: "dsa-w9-3-q4",
            question: "LCS 的时间复杂度是？",
            options: ["O(n)", "O(m+n)", "O(mn)", "O(m² + n²)"],
            answer: 2,
            rationale: "状态数是 m×n（两个字符串长度），每个状态转移 O(1)，总时间 O(mn)。"
        },
        {
            id: "dsa-w9-3-q5",
            question: "编辑距离问题中，将 word1 变成 word2 的三种操作分别对应？",
            options: [
                "dp[i][j-1]、dp[i-1][j]、dp[i-1][j-1]",
                "dp[i+1][j]、dp[i][j+1]、dp[i+1][j+1]",
                "只需要考虑替换操作",
                "不需要状态转移"
            ],
            answer: 0,
            rationale: "插入对应 dp[i][j-1]+1，删除对应 dp[i-1][j]+1，替换对应 dp[i-1][j-1]+1（若字符不同）。"
        },
        {
            id: "dsa-w9-3-q6",
            question: "子序列和子数组的区别是？",
            options: [
                "子序列必须连续，子数组可以不连续",
                "子序列可以不连续，子数组必须连续",
                "没有区别",
                "子序列是排序后的子数组"
            ],
            answer: 1,
            rationale: "子序列可以跳过某些元素（不连续），子数组必须是原数组中连续的一段。"
        },
        {
            id: "dsa-w9-3-q7",
            question: "如何从 LCS 的 DP 表中还原具体序列？",
            options: [
                "从 dp[0][0] 开始正向遍历",
                "从 dp[m][n] 开始回溯",
                "取 DP 表中的最大值连接",
                "无法还原"
            ],
            answer: 1,
            rationale: "从右下角 dp[m][n] 开始，根据字符是否相等和状态来源回溯，构造出 LCS。"
        },
        {
            id: "dsa-w9-3-q8",
            question: "最长公共子串与 LCS 的主要区别是？",
            options: [
                "子串可以不连续",
                "子串必须连续，LCS 可以不连续",
                "算法完全不同",
                "复杂度不同"
            ],
            answer: 1,
            rationale: "最长公共子串要求连续，当字符不相等时 dp[i][j]=0；LCS 不要求连续，可以继承之前的结果。"
        },
        {
            id: "dsa-w9-3-q9",
            question: "「最长回文子序列」可以转化为什么问题？",
            options: [
                "LIS 问题",
                "字符串和它的逆序的 LCS",
                "背包问题",
                "区间 DP"
            ],
            answer: 1,
            rationale: "回文序列正反读一样，所以最长回文子序列 = 原串和逆序串的 LCS。"
        },
        {
            id: "dsa-w9-3-q10",
            question: "编辑距离的边界条件 dp[0][j] 的含义是？",
            options: [
                "空字符串变成长度为 j 的字符串需要 j 次插入",
                "长度为 j 的字符串变成空字符串需要 j 次删除",
                "两者相同",
                "都不对"
            ],
            answer: 0,
            rationale: "dp[0][j] 表示空串变成 word2 的前 j 个字符，需要 j 次插入操作。"
        },
        {
            id: "dsa-w9-3-q11",
            question: "LIS 可以通过什么方法转化为 LCS 问题？",
            options: [
                "无法转化",
                "原数组和排序后数组求 LCS",
                "原数组和逆序数组求 LCS",
                "直接用 LCS 算法"
            ],
            answer: 1,
            rationale: "将原数组和排序去重后的数组求 LCS，公共子序列就是原数组中的递增子序列。"
        },
        {
            id: "dsa-w9-3-q12",
            question: "「不同的子序列」问题求的是？",
            options: [
                "有多少种方式从 s 中选出子序列形成 t",
                "s 和 t 的最长公共子序列",
                "s 中有多少个不同的子序列",
                "t 是否是 s 的子序列"
            ],
            answer: 0,
            rationale: "「不同的子序列」求从 s 中选取字符组成 t 的方案数，是 LCS 的计数变体。"
        }
    ],
    "dsa-w9-4": [
        {
            id: "dsa-w9-4-q1",
            question: "区间 DP 的状态通常定义在？",
            options: ["单个元素上", "前缀上", "区间 [i, j] 上", "后缀上"],
            answer: 2,
            rationale: "区间 DP 的状态 dp[i][j] 表示区间 [i, j] 内子问题的最优解。"
        },
        {
            id: "dsa-w9-4-q2",
            question: "区间 DP 的填表顺序应该是？",
            options: [
                "从大区间到小区间",
                "从小区间到大区间（按区间长度）",
                "从左到右",
                "任意顺序"
            ],
            answer: 1,
            rationale: "大区间依赖小区间的结果，必须先计算小区间，所以按区间长度从小到大填表。"
        },
        {
            id: "dsa-w9-4-q3",
            question: "「戳气球」问题为什么要逆向思考？",
            options: [
                "正向思考更简单",
                "正向戳气球后相邻关系改变，难以定义状态",
                "逆向可以减少时间复杂度",
                "题目要求逆向"
            ],
            answer: 1,
            rationale: "正向戳气球会改变相邻关系，无后效性被破坏。逆向思考「最后戳哪个」，可以固定边界。"
        },
        {
            id: "dsa-w9-4-q4",
            question: "矩阵链乘法的时间复杂度是？",
            options: ["O(n)", "O(n²)", "O(n³)", "O(2^n)"],
            answer: 2,
            rationale: "区间数 O(n²)，每个区间枚举分割点 O(n)，总时间 O(n³)。"
        },
        {
            id: "dsa-w9-4-q5",
            question: "状态压缩 DP 用什么表示集合的选择状态？",
            options: ["数组", "链表", "二进制数", "字符串"],
            answer: 2,
            rationale: "用 n 位二进制数表示 n 个元素的选择状态，第 i 位为 1 表示第 i 个元素被选中。"
        },
        {
            id: "dsa-w9-4-q6",
            question: "状态压缩 DP 适用于元素个数 n 约为多少的问题？",
            options: ["n ≤ 10", "n ≤ 20", "n ≤ 100", "n ≤ 1000"],
            answer: 1,
            rationale: "状态数是 2^n，n=20 时约 10^6，勉强可以接受；n 再大则状态数爆炸。"
        },
        {
            id: "dsa-w9-4-q7",
            question: "检查二进制数 mask 的第 i 位是否为 1，应该用？",
            options: ["mask >> i", "(mask >> i) & 1", "mask & i", "mask | i"],
            answer: 1,
            rationale: "先右移 i 位，再与 1 进行与操作，结果为 1 表示第 i 位是 1，为 0 表示是 0。"
        },
        {
            id: "dsa-w9-4-q8",
            question: "将二进制数 mask 的第 i 位设为 1，应该用？",
            options: ["mask >> i", "mask & (1 << i)", "mask | (1 << i)", "mask ^ (1 << i)"],
            answer: 2,
            rationale: "1 << i 生成只有第 i 位为 1 的数，与 mask 进行或操作即可设置该位。"
        },
        {
            id: "dsa-w9-4-q9",
            question: "旅行商问题(TSP)的状态压缩 DP 时间复杂度是？",
            options: ["O(n!)", "O(n² × 2^n)", "O(n × 2^n)", "O(2^n)"],
            answer: 1,
            rationale: "状态数 2^n × n（mask 和当前城市），每个状态枚举来源城市 O(n)，总时间 O(n² × 2^n)。"
        },
        {
            id: "dsa-w9-4-q10",
            question: "枚举 mask 的所有非空子集的代码是？",
            options: [
                "for(sub = mask; sub > 0; sub--)",
                "for(sub = mask; sub > 0; sub = (sub-1) & mask)",
                "for(sub = 0; sub <= mask; sub++)",
                "for(sub = mask; sub >= 0; sub >>= 1)"
            ],
            answer: 1,
            rationale: "(sub-1) & mask 可以正确枚举 mask 的所有非空子集，从 mask 本身一直到 0。"
        },
        {
            id: "dsa-w9-4-q11",
            question: "区间 DP 中，空区间的初始值通常是？",
            options: ["无穷大", "无穷小", "0", "1"],
            answer: 2,
            rationale: "空区间（如 dp[i][i-1]）通常初始化为 0，表示没有元素时的贡献为 0。"
        },
        {
            id: "dsa-w9-4-q12",
            question: "「石子游戏」类问题通常用什么 DP 方法？",
            options: ["背包 DP", "序列 DP", "区间 DP", "状态压缩 DP"],
            answer: 2,
            rationale: "石子合并、石子游戏等问题涉及区间的合并操作，适合用区间 DP 解决。"
        }
    ]
}
