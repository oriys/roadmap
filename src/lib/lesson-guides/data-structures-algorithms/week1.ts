import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "dsa-w1-1": {
        lessonId: "dsa-w1-1",
        background: [
            "【大 O 表示法的本质】大 O 表示法描述算法运行时间随输入规模增长的渐近上界。它忽略常数因子和低阶项，只关注主导项。例如 3n² + 2n + 1 简化为 O(n²)，因为当 n 足够大时，n² 项主导整个表达式。",
            "【三种渐近符号】大 O (O) 表示上界（最坏情况），大 Ω (Omega) 表示下界（最好情况），大 Θ (Theta) 表示紧确界（上下界相同）。面试中通常讨论最坏情况，因此大 O 最常用。",
            "【常见复杂度等级】从快到慢排序：O(1) 常数 < O(log n) 对数 < O(n) 线性 < O(n log n) 线性对数 < O(n²) 平方 < O(2^n) 指数 < O(n!) 阶乘。n=1000 时，O(n²) 需要 10^6 次操作，O(2^n) 需要 10^301 次，差距天壤之别。",
            "【空间复杂度】除了时间，还要分析算法使用的额外空间。原地算法空间复杂度为 O(1)，归并排序需要 O(n) 辅助数组，递归算法要考虑调用栈深度（如二叉树遍历 O(h)，h 为树高）。",
            "【摊销分析】某些操作偶尔很慢但大多数时候很快，用摊销分析计算平均代价。典型例子是动态数组的 append：扩容时 O(n)，但摊销到每次操作仅 O(1)。势能法、聚合分析是常用的摊销分析方法。"
        ],
        keyDifficulties: [
            "【递归复杂度分析】递归算法用主定理(Master Theorem)分析：T(n) = aT(n/b) + f(n)。归并排序 T(n) = 2T(n/2) + O(n) = O(n log n)。但主定理不能处理所有情况，如斐波那契递归 T(n) = T(n-1) + T(n-2) = O(2^n)。",
            "【隐藏的复杂度】字符串操作常被忽视：Java/Python 中字符串拼接是 O(n)，循环拼接 n 个字符实际是 O(n²)。类似地，切片、子串创建都可能涉及复制。",
            "【最好/最坏/平均】快速排序平均 O(n log n)，最坏 O(n²)（已排序数组）。面试时要能分析不同情况的复杂度，并说明何时出现最坏情况。",
            "【对数底数无关紧要】O(log₂n) = O(log₁₀n) = O(ln n)，因为换底公式 log_a(n) = log_b(n) / log_b(a)，不同底数只差常数因子。"
        ],
        handsOnPath: [
            "分析以下代码的时间复杂度：单层循环、嵌套循环、二分搜索、递归斐波那契",
            "使用 timeit 或 console.time 实际测量不同复杂度算法在 n=100, 1000, 10000 时的运行时间",
            "观察 Big O Cheat Sheet 中各数据结构操作的复杂度表格，理解为什么哈希表查找是 O(1)",
            "实现动态数组，验证 append 操作的摊销复杂度确实是 O(1)",
            "用递归树方法手动分析归并排序的时间复杂度"
        ],
        selfCheck: [
            "O(n) 和 O(2n) 有区别吗？O(n²) 和 O(n² + n) 呢？",
            "为什么二分查找是 O(log n)？log 的底数是多少？",
            "递归深度 d、每层工作量 w 的递归算法，总复杂度如何计算？",
            "哈希表查找「平均 O(1)」和「最坏 O(n)」分别在什么情况下发生？",
            "如何证明基于比较的排序算法下界是 O(n log n)？"
        ],
        extensions: [
            "学习主定理的三种情况及其证明",
            "了解摊销分析的三种方法：聚合分析、核算法、势能法",
            "研究 P vs NP 问题，理解为什么某些问题没有已知的多项式解法",
            "探索算法竞赛中的复杂度卡常技巧"
        ],
        sourceUrls: [
            "https://www.bigocheatsheet.com/",
            "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
            "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html"
        ]
    },
    "dsa-w1-2": {
        lessonId: "dsa-w1-2",
        background: [
            "【数组的内存模型】数组是一块连续的内存空间，每个元素占用固定大小。通过基地址 + 索引 × 元素大小计算任意元素地址，因此随机访问是 O(1)。这是数组最核心的优势。",
            "【静态数组 vs 动态数组】C 语言的数组大小固定，Python list 和 Java ArrayList 是动态数组，容量不足时自动扩容（通常翻倍）。扩容需要分配新内存并复制所有元素，代价 O(n)，但摊销后每次 append 仍是 O(1)。",
            "【数组操作复杂度】访问 O(1)，尾部插入/删除 O(1)，任意位置插入/删除 O(n)（需移动后续元素），查找 O(n)（无序）或 O(log n)（有序+二分）。",
            "【多维数组】二维数组可以是行优先或列优先存储。行优先时 arr[i][j] 地址 = base + (i × cols + j) × size。遍历顺序影响缓存命中率，按行遍历通常更快。",
            "【字符串是特殊数组】字符串本质是字符数组，但多数语言中字符串不可变。修改字符串实际是创建新对象，循环拼接会产生大量临时对象，应使用 StringBuilder/join。"
        ],
        keyDifficulties: [
            "【越界访问】数组越界是最常见的 bug 之一。C 语言不检查边界，可能导致难以调试的内存错误。Python/Java 会抛出异常。面试时要特别注意 for 循环的边界条件。",
            "【扩容策略】为什么扩容倍数通常选 1.5 或 2？太小则频繁扩容，太大则浪费空间。2 倍扩容时，新容量正好等于之前所有容量之和，可能导致无法复用已释放的内存。",
            "【子数组问题】很多数组问题涉及「连续子数组」，需要理解前缀和技巧：sum(i,j) = prefix[j+1] - prefix[i]，将区间求和从 O(n) 优化到 O(1)。",
            "【原地修改】原地算法要求 O(1) 额外空间。如原地删除数组中的重复元素，需要用双指针技巧而不是创建新数组。"
        ],
        handsOnPath: [
            "用任意语言实现一个支持动态扩容的数组类，包含 append、insert、delete、get 方法",
            "实现前缀和数组，用它解决「区域和检索」问题",
            "练习 LeetCode 27「移除元素」，体会原地修改数组的技巧",
            "比较 Python list.append vs string += 在循环中的性能差异",
            "阅读 Python list 或 Java ArrayList 的源码，了解真实的扩容实现"
        ],
        selfCheck: [
            "为什么数组随机访问是 O(1)？计算地址的公式是什么？",
            "动态数组扩容时，为什么摊销复杂度仍是 O(1)？如何证明？",
            "在数组中间插入元素，最坏需要移动多少个元素？",
            "如何用 O(1) 空间将数组中的 0 都移动到末尾？",
            "前缀和数组如何构建？如何用它计算任意区间的和？"
        ],
        extensions: [
            "研究环形缓冲区（Ring Buffer）的实现和应用场景",
            "了解稀疏数组的压缩存储方法",
            "探索 SIMD 指令如何加速数组操作",
            "学习位数组（Bit Array）的实现和应用"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/detail/array-and-string/",
            "https://www.geeksforgeeks.org/how-do-dynamic-arrays-work/",
            "https://github.com/python/cpython/blob/main/Objects/listobject.c"
        ]
    },
    "dsa-w1-3": {
        lessonId: "dsa-w1-3",
        background: [
            "【双指针的本质】双指针是一种通过两个指针协作遍历数据结构的技巧，可以将某些 O(n²) 问题优化到 O(n)。核心思想是利用问题的单调性或有序性，减少不必要的枚举。",
            "【对撞指针】两个指针从数组两端向中间移动。典型应用：有序数组两数之和、三数之和、接雨水。关键是根据当前状态决定移动哪个指针。",
            "【快慢指针】两个指针从同一起点出发，速度不同。经典应用：链表环检测（Floyd 算法）、找链表中点、删除倒数第 N 个节点。",
            "【同向双指针】两个指针同向移动，维护一个「窗口」或「区间」。滑动窗口本质是同向双指针的特例。用于原地去重、移除元素等问题。",
            "【双指针的正确性】使用双指针必须证明不会错过答案。通常基于贪心思想：当前决策不影响未来最优解。面试时要能解释为什么可以移动某个指针。"
        ],
        keyDifficulties: [
            "【指针移动条件】对撞指针的核心难点是确定何时移动哪个指针。以两数之和为例：sum < target 时左指针右移（因为右移会增大 sum），sum > target 时右指针左移。",
            "【去重处理】三数之和等问题要求不重复的组合。在移动指针时需要跳过相同元素，但要注意跳过的时机和方向。",
            "【边界条件】双指针最容易出错的是边界：指针相遇时是否继续？是 < 还是 <=？循环结束后是否还需要额外处理？",
            "【多指针扩展】三数之和可以固定一个指针，对剩余部分用对撞双指针，从 O(n³) 优化到 O(n²)。四数之和同理。"
        ],
        handsOnPath: [
            "实现有序数组的两数之和，要求 O(n) 时间 O(1) 空间",
            "练习 LeetCode 15「三数之和」，注意去重逻辑",
            "用快慢指针判断链表是否有环，并找到环的入口",
            "实现「移除元素」（原地删除指定值）",
            "解决「接雨水」问题，对比双指针和单调栈两种解法"
        ],
        selfCheck: [
            "两数之和问题中，为什么 sum < target 时要移动左指针而不是右指针？",
            "快慢指针为什么能检测链表环？数学原理是什么？",
            "三数之和的去重逻辑中，为什么是 nums[i] == nums[i-1] 而不是 nums[i] == nums[i+1]？",
            "如何用双指针在 O(n) 时间内反转字符串？",
            "对撞指针适用的问题通常有什么特征？"
        ],
        extensions: [
            "研究「接雨水」问题的多种解法：双指针、动态规划、单调栈",
            "学习四数之和的实现，理解如何扩展到 K 数之和",
            "探索双指针在链表问题中的更多应用",
            "了解三向切分（Dutch National Flag）问题"
        ],
        sourceUrls: [
            "https://leetcode.cn/circle/discuss/0vGxlm/",
            "https://www.educative.io/courses/grokking-the-coding-interview/xlK78P3Xl7E",
            "https://leetcode.cn/tag/two-pointers/problemset/"
        ]
    },
    "dsa-w1-4": {
        lessonId: "dsa-w1-4",
        background: [
            "【滑动窗口本质】滑动窗口是双指针的特化形式，用于处理连续子数组/子串问题。维护一个窗口 [left, right]，通过扩展 right 和收缩 left 来遍历所有可能的窗口。",
            "【定长窗口】窗口大小固定为 k，每次右移一位。适用于「长度为 k 的子数组最大和」等问题。实现简单：维护窗口内元素的统计量，每次加入新元素、移除旧元素。",
            "【变长窗口】窗口大小动态变化，根据条件决定是否收缩。核心模板：右指针扩展 → 更新窗口状态 → 判断是否需要收缩 → 收缩左指针 → 更新答案。",
            "【窗口状态维护】用哈希表记录窗口内元素频次，用变量记录窗口内的统计量（和、不同字符数等）。状态更新必须在指针移动时同步进行。",
            "【滑动窗口的正确性】核心思想是单调性：当窗口不满足条件时，继续扩展 right 不会改善；当窗口满足条件时，继续收缩 left 可能找到更优解。"
        ],
        keyDifficulties: [
            "【收缩时机】何时收缩左指针是最关键的决策。通常有两种模式：1) 窗口不合法时收缩直到合法；2) 窗口合法时尝试收缩以找更优解。",
            "【更新答案时机】根据问题要求选择：1) 在窗口合法时更新（求最小长度）；2) 在窗口即将变得不合法前更新（求最大长度）。",
            "【多条件约束】有些问题有多个约束（如「最多包含两种字符」），需要同时维护多个状态变量，收缩条件也更复杂。",
            "【字符串问题的特殊处理】字符串滑动窗口常用数组 int[128] 或 int[26] 代替哈希表，效率更高。注意 ASCII 字符和 Unicode 字符的区别。"
        ],
        handsOnPath: [
            "实现定长滑动窗口：求长度为 k 的子数组最大平均值",
            "练习 LeetCode 3「无重复字符的最长子串」，掌握变长窗口模板",
            "解决「最小覆盖子串」（LeetCode 76），这是滑动窗口的经典难题",
            "实现「长度最小的子数组」（LeetCode 209），理解求最小长度的逻辑",
            "对比「至多包含 K 个不同字符的最长子串」和「恰好包含 K 个不同字符」的解法差异"
        ],
        selfCheck: [
            "滑动窗口模板的四个步骤是什么？",
            "「无重复字符的最长子串」中，窗口收缩的条件是什么？",
            "求最小窗口长度和求最大窗口长度，更新答案的时机有何不同？",
            "为什么滑动窗口的时间复杂度是 O(n) 而不是 O(n²)？",
            "如何用滑动窗口解决「字母异位词」相关问题？"
        ],
        extensions: [
            "研究「最小窗口子序列」问题，这是滑动窗口的变体",
            "学习「滑动窗口中位数」的实现，结合有序集合",
            "探索 Rabin-Karp 算法中滑动窗口哈希的应用",
            "了解计算机网络中的滑动窗口协议"
        ],
        sourceUrls: [
            "https://labuladong.online/algo/essential-technique/sliding-window-framework/",
            "https://www.educative.io/courses/grokking-the-coding-interview/7D5NNZWQ8Wr",
            "https://leetcode.cn/tag/sliding-window/problemset/"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "dsa-w1-1": [
        {
            id: "dsa-w1-1-q1",
            question: "O(n) + O(n²) 的简化结果是？",
            options: ["O(2n²)", "O(n³)", "O(n²)", "O(n + n²)"],
            answer: 2,
            rationale: "大 O 只保留最高阶项，O(n) + O(n²) = O(n²)。低阶项在 n 足够大时可忽略。"
        },
        {
            id: "dsa-w1-1-q2",
            question: "二分查找的时间复杂度是？",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
            answer: 1,
            rationale: "二分查找每次将搜索范围减半，需要 log₂n 次比较，时间复杂度 O(log n)。"
        },
        {
            id: "dsa-w1-1-q3",
            question: "递归计算斐波那契数列 fib(n) 的时间复杂度是？",
            options: ["O(n)", "O(n²)", "O(2^n)", "O(log n)"],
            answer: 2,
            rationale: "朴素递归产生两个子问题，递归树是指数增长的，时间复杂度 O(2^n)。"
        },
        {
            id: "dsa-w1-1-q4",
            question: "以下哪个表示法描述算法的下界（最好情况）？",
            options: ["大 O (O)", "大 Ω (Omega)", "大 Θ (Theta)", "小 o"],
            answer: 1,
            rationale: "大 Ω 表示下界，描述最好情况的时间复杂度。大 O 表示上界，大 Θ 表示紧确界。"
        },
        {
            id: "dsa-w1-1-q5",
            question: "动态数组 append 操作的摊销时间复杂度是？",
            options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
            answer: 2,
            rationale: "虽然扩容时需要 O(n)，但扩容次数是 O(log n)，分摊到每次 append 仍是 O(1)。"
        },
        {
            id: "dsa-w1-1-q6",
            question: "归并排序的时间复杂度是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: 1,
            rationale: "归并排序分治递归，每层工作量 O(n)，共 log n 层，总复杂度 O(n log n)。"
        },
        {
            id: "dsa-w1-1-q7",
            question: "以下复杂度从小到大排序正确的是？",
            options: [
                "O(n!) < O(2^n) < O(n²)",
                "O(log n) < O(n) < O(n log n)",
                "O(n²) < O(n log n) < O(n)",
                "O(1) < O(n) < O(log n)"
            ],
            answer: 1,
            rationale: "正确排序：O(log n) < O(n) < O(n log n)。对数增长最慢，然后是线性，再是线性对数。"
        },
        {
            id: "dsa-w1-1-q8",
            question: "空间复杂度 O(1) 的算法被称为？",
            options: ["线性算法", "原地算法", "递归算法", "分治算法"],
            answer: 1,
            rationale: "原地算法（in-place algorithm）只使用常数额外空间，空间复杂度 O(1)。"
        },
        {
            id: "dsa-w1-1-q9",
            question: "主定理适用于分析哪种类型的递归？",
            options: [
                "T(n) = T(n-1) + O(1)",
                "T(n) = aT(n/b) + f(n)",
                "T(n) = T(n-1) + T(n-2)",
                "任意递归"
            ],
            answer: 1,
            rationale: "主定理适用于 T(n) = aT(n/b) + f(n) 形式的分治递归，如归并排序、快速排序。"
        },
        {
            id: "dsa-w1-1-q10",
            question: "O(log₂n) 和 O(log₁₀n) 的关系是？",
            options: [
                "O(log₂n) < O(log₁₀n)",
                "O(log₂n) > O(log₁₀n)",
                "相等，因为只差常数因子",
                "无法比较"
            ],
            answer: 2,
            rationale: "换底公式 log_a(n) = log_b(n) / log_b(a)，不同底数只差常数因子，大 O 表示法中等价。"
        },
        {
            id: "dsa-w1-1-q11",
            question: "以下哪个操作通常是 O(1) 的？",
            options: ["数组排序", "链表查找", "哈希表插入（平均）", "二叉树遍历"],
            answer: 2,
            rationale: "哈希表通过哈希函数直接定位，平均情况下插入是 O(1)。数组排序 O(n log n)，链表查找和二叉树遍历都是 O(n)。"
        },
        {
            id: "dsa-w1-1-q12",
            question: "比较排序算法的时间复杂度下界是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: 1,
            rationale: "基于比较的排序需要区分 n! 种排列，决策树高度至少 log(n!) = Θ(n log n)。"
        }
    ],
    "dsa-w1-2": [
        {
            id: "dsa-w1-2-q1",
            question: "数组随机访问 arr[i] 的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(i)"],
            answer: 0,
            rationale: "数组通过地址计算（基地址 + 索引 × 元素大小）直接访问，时间复杂度 O(1)。"
        },
        {
            id: "dsa-w1-2-q2",
            question: "在数组中间插入一个元素的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 2,
            rationale: "需要将插入位置之后的所有元素后移一位，最坏情况移动 n 个元素，时间 O(n)。"
        },
        {
            id: "dsa-w1-2-q3",
            question: "动态数组扩容时通常采用什么策略？",
            options: ["每次增加 1", "每次增加 10", "容量翻倍", "容量变为 n²"],
            answer: 2,
            rationale: "通常翻倍（或 1.5 倍）扩容，这样可以保证 append 的摊销复杂度为 O(1)。"
        },
        {
            id: "dsa-w1-2-q4",
            question: "前缀和数组 prefix[] 的用途是？",
            options: [
                "加速元素访问",
                "O(1) 时间计算任意区间和",
                "原地排序",
                "检测重复元素"
            ],
            answer: 1,
            rationale: "prefix[i] 存储前 i 个元素的和，区间 [i,j] 的和 = prefix[j+1] - prefix[i]，O(1) 时间。"
        },
        {
            id: "dsa-w1-2-q5",
            question: "以下关于二维数组的说法，错误的是？",
            options: [
                "行优先存储时按行遍历更快",
                "二维数组本质是一维数组的数组",
                "列优先存储时 arr[i][j] 地址 = base + (j×rows+i)×size",
                "二维数组的元素访问是 O(n)"
            ],
            answer: 3,
            rationale: "二维数组通过行列索引计算地址，访问仍是 O(1)，不是 O(n)。"
        },
        {
            id: "dsa-w1-2-q6",
            question: "Python 中 string += char 在循环中执行 n 次的时间复杂度是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
            answer: 2,
            rationale: "字符串不可变，每次 += 创建新对象并复制，n 次操作复制 1+2+...+n = O(n²)。"
        },
        {
            id: "dsa-w1-2-q7",
            question: "从数组尾部删除元素的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "取决于数组大小"],
            answer: 0,
            rationale: "尾部删除只需修改长度/指针，不需要移动其他元素，时间 O(1)。"
        },
        {
            id: "dsa-w1-2-q8",
            question: "如何在 O(n) 时间 O(1) 空间内移除数组中所有的 0？",
            options: [
                "创建新数组存储非零元素",
                "使用快慢双指针原地修改",
                "排序后删除",
                "无法做到"
            ],
            answer: 1,
            rationale: "快指针遍历数组，遇到非零元素复制到慢指针位置并移动慢指针，实现原地移除。"
        },
        {
            id: "dsa-w1-2-q9",
            question: "数组相比链表的主要优势是？",
            options: [
                "插入删除快",
                "随机访问 O(1)",
                "不需要连续内存",
                "空间利用率高"
            ],
            answer: 1,
            rationale: "数组支持 O(1) 随机访问，这是链表无法做到的。链表的优势是动态大小和 O(1) 插入删除。"
        },
        {
            id: "dsa-w1-2-q10",
            question: "构建长度为 n 的前缀和数组的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 2,
            rationale: "需要遍历原数组一次，逐个计算累加和，时间 O(n)。"
        },
        {
            id: "dsa-w1-2-q11",
            question: "以下哪种情况会导致数组性能下降？",
            options: [
                "频繁访问固定索引",
                "频繁在中间插入删除",
                "遍历整个数组",
                "访问首尾元素"
            ],
            answer: 1,
            rationale: "中间插入删除需要移动大量元素，时间 O(n)，频繁操作会严重影响性能。"
        },
        {
            id: "dsa-w1-2-q12",
            question: "Java ArrayList 和 LinkedList 相比，哪个操作更快？",
            options: [
                "头部插入",
                "随机访问",
                "头部删除",
                "以上都不是"
            ],
            answer: 1,
            rationale: "ArrayList 基于数组，随机访问 O(1)；LinkedList 随机访问需要遍历 O(n)。"
        }
    ],
    "dsa-w1-3": [
        {
            id: "dsa-w1-3-q1",
            question: "对撞指针从数组两端向中间移动，适用于？",
            options: [
                "无序数组查找",
                "有序数组两数之和",
                "链表环检测",
                "字符串匹配"
            ],
            answer: 1,
            rationale: "对撞指针利用数组有序性，根据和的大小决定移动哪个指针，时间 O(n)。"
        },
        {
            id: "dsa-w1-3-q2",
            question: "快慢指针的经典应用是？",
            options: [
                "数组排序",
                "链表环检测",
                "二分查找",
                "字符串反转"
            ],
            answer: 1,
            rationale: "快指针每次走 2 步，慢指针走 1 步，如果有环必然相遇，这是 Floyd 环检测算法。"
        },
        {
            id: "dsa-w1-3-q3",
            question: "有序数组两数之和，sum < target 时应该？",
            options: [
                "左指针左移",
                "左指针右移",
                "右指针右移",
                "两个指针都移动"
            ],
            answer: 1,
            rationale: "sum 太小需要增大，左指针右移会使 sum 增加（因为数组有序）。"
        },
        {
            id: "dsa-w1-3-q4",
            question: "三数之和问题的最优时间复杂度是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(n³)"],
            answer: 2,
            rationale: "固定一个数，对剩余部分用双指针，外层 O(n)，内层 O(n)，总共 O(n²)。"
        },
        {
            id: "dsa-w1-3-q5",
            question: "原地删除数组中的重复元素，应该用？",
            options: [
                "对撞指针",
                "同向双指针",
                "快慢指针",
                "三指针"
            ],
            answer: 1,
            rationale: "同向双指针：慢指针指向待填充位置，快指针遍历数组，遇到不重复元素复制到慢指针位置。"
        },
        {
            id: "dsa-w1-3-q6",
            question: "快慢指针找链表中点时，快指针走到末尾时慢指针位置是？",
            options: [
                "链表开头",
                "链表中点",
                "链表末尾",
                "不确定"
            ],
            answer: 1,
            rationale: "快指针每次 2 步，慢指针每次 1 步，快指针到末尾时慢指针恰好在中点。"
        },
        {
            id: "dsa-w1-3-q7",
            question: "三数之和去重时，应该在何时跳过相同元素？",
            options: [
                "找到答案之前",
                "找到答案之后",
                "任意时刻",
                "不需要去重"
            ],
            answer: 1,
            rationale: "找到答案后跳过相同元素，避免重复组合。如果之前跳过可能错过有效答案。"
        },
        {
            id: "dsa-w1-3-q8",
            question: "双指针解决「接雨水」问题的时间复杂度是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
            answer: 0,
            rationale: "双指针从两端向中间移动，每个位置最多访问一次，时间 O(n)，空间 O(1)。"
        },
        {
            id: "dsa-w1-3-q9",
            question: "Floyd 环检测算法中，快慢指针相遇后如何找环入口？",
            options: [
                "继续走直到再次相遇",
                "一个指针回到起点，然后同速前进直到相遇",
                "计算环长度后定位",
                "无法找到环入口"
            ],
            answer: 1,
            rationale: "相遇后将一个指针移回起点，两指针同速前进，再次相遇点即为环入口。"
        },
        {
            id: "dsa-w1-3-q10",
            question: "以下哪个问题不适合用双指针？",
            options: [
                "有序数组两数之和",
                "链表环检测",
                "无序数组查找最大值",
                "原地反转数组"
            ],
            answer: 2,
            rationale: "无序数组查找最大值需要遍历所有元素，双指针无法优化，必须 O(n) 扫描。"
        },
        {
            id: "dsa-w1-3-q11",
            question: "删除链表倒数第 N 个节点，应该用什么技巧？",
            options: [
                "对撞指针",
                "快慢指针（快指针先走 N 步）",
                "遍历两次",
                "递归"
            ],
            answer: 1,
            rationale: "快指针先走 N 步，然后快慢同速前进，快指针到末尾时慢指针正好在倒数第 N+1 个位置。"
        },
        {
            id: "dsa-w1-3-q12",
            question: "双指针能将某些 O(n²) 问题优化到 O(n) 的关键是？",
            options: [
                "使用额外空间",
                "利用问题的单调性或有序性",
                "并行计算",
                "随机化"
            ],
            answer: 1,
            rationale: "双指针利用单调性/有序性，根据当前状态决定指针移动方向，避免枚举所有组合。"
        }
    ],
    "dsa-w1-4": [
        {
            id: "dsa-w1-4-q1",
            question: "滑动窗口算法的核心思想是？",
            options: [
                "分治",
                "动态规划",
                "维护一个可变区间，通过扩展和收缩寻找最优解",
                "贪心"
            ],
            answer: 2,
            rationale: "滑动窗口通过右指针扩展、左指针收缩来遍历所有可能的连续子区间。"
        },
        {
            id: "dsa-w1-4-q2",
            question: "定长滑动窗口（窗口大小 k）每次移动时的操作是？",
            options: [
                "重新计算窗口内所有元素",
                "加入新元素，移除最旧元素",
                "只加入新元素",
                "只移除旧元素"
            ],
            answer: 1,
            rationale: "定长窗口每次右移一位，加入右边新元素，移除左边旧元素，维护窗口状态。"
        },
        {
            id: "dsa-w1-4-q3",
            question: "「无重复字符的最长子串」的窗口收缩条件是？",
            options: [
                "窗口大小超过限制",
                "窗口内出现重复字符",
                "窗口和超过目标",
                "无需收缩"
            ],
            answer: 1,
            rationale: "当窗口内出现重复字符时，收缩左边界直到窗口内无重复，然后继续扩展右边界。"
        },
        {
            id: "dsa-w1-4-q4",
            question: "滑动窗口的时间复杂度通常是？",
            options: ["O(n²)", "O(n log n)", "O(n)", "O(2^n)"],
            answer: 2,
            rationale: "每个元素最多被左右指针各访问一次，总时间 O(n)。"
        },
        {
            id: "dsa-w1-4-q5",
            question: "「最小覆盖子串」问题中，何时更新答案？",
            options: [
                "每次扩展右指针时",
                "每次收缩左指针时",
                "窗口包含所有目标字符时",
                "窗口大小最小时"
            ],
            answer: 2,
            rationale: "当窗口满足条件（包含所有目标字符）时更新答案，并尝试收缩以找更小的窗口。"
        },
        {
            id: "dsa-w1-4-q6",
            question: "滑动窗口常用什么数据结构维护窗口状态？",
            options: [
                "栈",
                "哈希表（记录字符频次）",
                "堆",
                "二叉树"
            ],
            answer: 1,
            rationale: "哈希表记录窗口内各字符的出现次数，便于快速判断窗口是否满足条件。"
        },
        {
            id: "dsa-w1-4-q7",
            question: "求最大窗口长度和求最小窗口长度，更新时机的区别是？",
            options: [
                "没有区别",
                "最大在窗口合法时更新，最小在窗口不合法前更新",
                "最大在收缩时更新，最小在扩展时更新",
                "最大在窗口不合法前更新，最小在窗口合法时更新"
            ],
            answer: 3,
            rationale: "求最大：窗口即将变不合法时记录长度；求最小：窗口刚合法时记录并尝试继续收缩。"
        },
        {
            id: "dsa-w1-4-q8",
            question: "「长度最小的子数组」（和 >= target）的收缩条件是？",
            options: [
                "窗口和 < target",
                "窗口和 >= target",
                "窗口长度达到 n",
                "窗口内元素重复"
            ],
            answer: 1,
            rationale: "当窗口和 >= target 时满足条件，记录长度并收缩左边界尝试找更小的满足条件的窗口。"
        },
        {
            id: "dsa-w1-4-q9",
            question: "字符串滑动窗口中，用 int[128] 代替 HashMap 的好处是？",
            options: [
                "代码更简洁",
                "可以处理 Unicode",
                "访问更快，无哈希计算开销",
                "占用内存更少"
            ],
            answer: 2,
            rationale: "数组直接通过字符 ASCII 值作为索引访问，O(1) 时间，无需哈希计算。"
        },
        {
            id: "dsa-w1-4-q10",
            question: "滑动窗口不适合解决以下哪类问题？",
            options: [
                "最长无重复子串",
                "最小覆盖子串",
                "最长递增子序列（不要求连续）",
                "长度为 k 的子数组最大和"
            ],
            answer: 2,
            rationale: "最长递增子序列不要求连续，不能用滑动窗口，需要动态规划或贪心+二分。"
        },
        {
            id: "dsa-w1-4-q11",
            question: "变长滑动窗口的模板顺序是？",
            options: [
                "收缩 → 扩展 → 更新状态 → 更新答案",
                "扩展 → 更新状态 → 判断收缩 → 更新答案",
                "更新答案 → 扩展 → 收缩",
                "判断收缩 → 扩展 → 更新答案"
            ],
            answer: 1,
            rationale: "标准模板：右指针扩展 → 更新窗口状态 → 判断是否需要收缩 → 收缩并更新状态 → 更新答案。"
        },
        {
            id: "dsa-w1-4-q12",
            question: "「至多包含 K 个不同字符的最长子串」用滑动窗口时，收缩条件是？",
            options: [
                "不同字符数 < K",
                "不同字符数 == K",
                "不同字符数 > K",
                "窗口长度 > K"
            ],
            answer: 2,
            rationale: "当窗口内不同字符数超过 K 时，收缩左边界直到不同字符数 <= K。"
        }
    ]
}
