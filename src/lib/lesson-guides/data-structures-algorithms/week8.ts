import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "dsa-w8-1": {
        lessonId: "dsa-w8-1",
        background: [
            "【排序的重要性】排序是计算机科学最基础的问题之一。有序数据支持二分查找、去重、归并等高效操作。理解各种排序算法有助于选择合适的工具和培养算法思维。",
            "【冒泡排序】重复遍历数组，比较相邻元素，若逆序则交换。每轮将一个最大元素「冒泡」到末尾。时间 O(n²)，空间 O(1)，稳定。可以加入提前终止优化。",
            "【选择排序】每轮从未排序部分选出最小元素，与未排序部分的第一个元素交换。时间 O(n²)，空间 O(1)，不稳定。交换次数最少（最多 n-1 次），但比较次数固定。",
            "【插入排序】将每个元素插入到已排序部分的正确位置。从第二个元素开始，向前比较并移动，找到位置后插入。时间 O(n²)（最好 O(n)），空间 O(1)，稳定。",
            "【稳定性】稳定排序保持相等元素的相对顺序。冒泡、插入、归并是稳定的；选择、快排、堆排序是不稳定的。多关键字排序时稳定性很重要。"
        ],
        keyDifficulties: [
            "【冒泡的优化】如果某轮没有发生交换，说明已经有序，可以提前终止。记录最后一次交换位置还可以减少比较范围。",
            "【插入排序的优势】对于基本有序的数据，插入排序可以达到 O(n)。很多高级排序（如 Tim Sort）在小规模或基本有序时切换到插入排序。",
            "【选择排序的不稳定】例如 [5a, 5b, 2]，选择最小的 2 与 5a 交换后变成 [2, 5b, 5a]，5a 和 5b 的相对顺序改变了。",
            "【比较次数 vs 交换次数】选择排序比较次数是 n(n-1)/2，但交换次数最多 n-1。移动成本高时选择排序可能更优。"
        ],
        handsOnPath: [
            "手写冒泡排序，并添加提前终止优化",
            "手写选择排序，理解其不稳定性",
            "手写插入排序，测试对基本有序数据的性能",
            "使用 Visualgo 可视化观察三种排序的过程",
            "比较三种排序在不同输入（随机、有序、逆序）下的性能"
        ],
        selfCheck: [
            "冒泡排序每轮确定哪个元素的最终位置？",
            "选择排序为什么是不稳定的？举例说明。",
            "插入排序在什么情况下时间复杂度是 O(n)？",
            "三种基础排序的空间复杂度各是多少？",
            "如何给冒泡排序添加提前终止优化？"
        ],
        extensions: [
            "研究希尔排序（插入排序的改进）",
            "了解鸡尾酒排序（双向冒泡）",
            "学习排序算法的下界证明",
            "探索排序在数据库中的应用"
        ],
        sourceUrls: [
            "https://visualgo.net/en/sorting",
            "https://www.geeksforgeeks.org/sorting-algorithms/",
            "https://www.toptal.com/developers/sorting-algorithms"
        ]
    },
    "dsa-w8-2": {
        lessonId: "dsa-w8-2",
        background: [
            "【快速排序】分治算法：选择 pivot，将数组分为「小于 pivot」和「大于 pivot」两部分，递归排序。平均 O(n log n)，最坏 O(n²)（已排序数组），空间 O(log n)（栈），不稳定。",
            "【归并排序】分治算法：将数组分成两半，递归排序，再合并两个有序数组。时间 O(n log n)（稳定），空间 O(n)（需要辅助数组），稳定。常用于外部排序和链表排序。",
            "【堆排序】利用堆的性质排序：建立最大堆，重复将堆顶（最大值）与末尾交换，堆大小减 1 后重新堆化。时间 O(n log n)，空间 O(1)（原地），不稳定。",
            "【分区策略】快排的 partition 有多种实现：Lomuto（单指针从左扫描）、Hoare（双指针从两端扫描）。三路分区可以高效处理大量重复元素。",
            "【pivot 选择】固定选第一个元素可能导致最坏情况。常见策略：随机选择、三数取中（首中尾的中位数）。好的 pivot 使分区均匀。"
        ],
        keyDifficulties: [
            "【快排的最坏情况】当数组已排序且每次选第一个元素作为 pivot，每次分区只减少一个元素，递归深度 O(n)，时间 O(n²)。",
            "【归并的空间开销】归并需要 O(n) 的辅助数组，对于内存敏感的场景可能不适合。原地归并很复杂且常数大。",
            "【堆排序的缓存不友好】堆排序访问模式跳跃，缓存命中率低，实际性能可能不如快排。但它原地且时间稳定。",
            "【混合排序】Tim Sort（Python/Java 默认）结合归并和插入排序，对实际数据（部分有序）表现优异。"
        ],
        handsOnPath: [
            "实现快速排序，使用 Lomuto 分区",
            "实现归并排序，注意合并时的边界处理",
            "实现堆排序，复用堆的知识",
            "练习 LeetCode 912「排序数组」，比较不同排序的性能",
            "实现三路分区快排，测试大量重复元素的情况"
        ],
        selfCheck: [
            "快速排序的平均和最坏时间复杂度分别是？什么情况下最坏？",
            "归并排序为什么是稳定的？合并时如何保持稳定？",
            "堆排序的空间复杂度为什么是 O(1)？",
            "快排的 partition 函数的作用是什么？",
            "三数取中的 pivot 选择策略如何工作？"
        ],
        extensions: [
            "研究内省排序（Introsort）的混合策略",
            "了解 Tim Sort 的设计思想",
            "学习快排的尾递归优化",
            "探索并行排序算法"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/quick-sort/",
            "https://www.geeksforgeeks.org/merge-sort/",
            "https://leetcode.cn/problems/sort-an-array/"
        ]
    },
    "dsa-w8-3": {
        lessonId: "dsa-w8-3",
        background: [
            "【比较排序的下界】任何基于比较的排序算法最坏情况需要 Ω(n log n) 次比较。证明：n 个元素有 n! 种排列，每次比较最多排除一半，需要 log₂(n!) = Θ(n log n) 次。",
            "【计数排序】统计每个值的出现次数，然后按顺序填回数组。时间 O(n + k)，空间 O(k)，k 是值域大小。适合小范围整数，稳定（需要累加计数实现）。",
            "【桶排序】将元素分配到若干个桶中，每个桶内排序，然后合并。平均 O(n + k)，最坏 O(n²)（所有元素进一个桶）。适合均匀分布的数据。",
            "【基数排序】按位数从低到高（或从高到低）排序，每轮用稳定排序（如计数排序）。时间 O(d(n + k))，d 是位数，k 是基数。适合整数或固定长度字符串。",
            "【非比较排序的限制】需要知道数据的分布或范围。计数排序要求值域不大，基数排序要求可以按位拆分，桶排序要求分布均匀。"
        ],
        keyDifficulties: [
            "【计数排序的稳定版本】先累加计数（prefix sum），从后向前遍历原数组，根据计数确定位置，计数减 1。这样相同元素保持原有顺序。",
            "【桶的数量和大小】桶太少每桶元素多，桶内排序慢；桶太多很多空桶浪费空间。通常桶数量与 n 同级，期望每桶 O(1) 个元素。",
            "【基数排序的方向】LSD（最低位优先）用于等长数据，从最低位到最高位；MSD（最高位优先）用于变长数据，需要递归处理。",
            "【负数处理】基数排序处理负数需要先分离正负，或加偏移量转换为正数，最后再还原。"
        ],
        handsOnPath: [
            "实现计数排序（稳定版本）",
            "实现桶排序，测试不同分布的数据",
            "实现 LSD 基数排序",
            "比较非比较排序和快排在不同数据上的性能",
            "尝试用基数排序对字符串数组排序"
        ],
        selfCheck: [
            "为什么比较排序的时间下界是 O(n log n)？",
            "计数排序在什么情况下效率高？时间复杂度是？",
            "桶排序的最坏情况是什么？如何避免？",
            "基数排序为什么需要使用稳定排序作为子程序？",
            "三种非比较排序分别适合什么场景？"
        ],
        extensions: [
            "研究计数排序在后缀数组构建中的应用",
            "了解外部排序算法",
            "学习 Flash Sort 的思想",
            "探索 GPU 并行排序算法"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/counting-sort/",
            "https://www.geeksforgeeks.org/radix-sort/",
            "https://www.geeksforgeeks.org/bucket-sort-2/"
        ]
    },
    "dsa-w8-4": {
        lessonId: "dsa-w8-4",
        background: [
            "【二分查找的本质】在有序数组中，每次比较中间元素，排除一半的搜索空间。时间 O(log n)，空间 O(1)。是最重要的搜索技巧，思想可以推广到许多问题。",
            "【区间定义】左闭右闭 [left, right]：循环条件 left <= right，更新 left = mid + 1 或 right = mid - 1。左闭右开 [left, right)：循环条件 left < right，更新 left = mid + 1 或 right = mid。",
            "【查找变体】查找第一个等于 target 的位置；查找最后一个等于 target 的位置；查找第一个大于等于 target 的位置（lower_bound）；查找第一个大于 target 的位置（upper_bound）。",
            "【旋转数组】旋转后数组分成两个有序部分。先判断哪半边有序，再判断 target 是否在有序半边中，决定搜索方向。",
            "【二分答案】当问题的答案具有单调性时，可以二分答案并验证。例如「分割数组的最大值」：二分最大值，验证能否在限制下分成 k 份。"
        ],
        keyDifficulties: [
            "【死循环问题】mid 计算和边界更新不匹配会导致死循环。使用 mid = left + (right - left) / 2 避免溢出，同时确保更新后区间缩小。",
            "【边界的一致性】区间定义必须贯穿始终。如果用 [left, right]，循环条件必须是 left <= right，更新必须排除 mid。",
            "【查找边界的技巧】找左边界：找到 target 后继续向左搜索（right = mid - 1），最后检查 left 是否越界及是否等于 target。找右边界类似。",
            "【旋转数组的边界】当 nums[mid] == nums[left] 时无法判断哪边有序，可能需要线性处理或排除重复元素。"
        ],
        handsOnPath: [
            "实现标准二分查找，使用左闭右闭区间",
            "实现 lower_bound 和 upper_bound",
            "练习 LeetCode 33「搜索旋转排序数组」",
            "练习 LeetCode 34「在排序数组中查找元素的第一个和最后一个位置」",
            "练习 LeetCode 410「分割数组的最大值」，体验二分答案"
        ],
        selfCheck: [
            "二分查找的时间复杂度是多少？为什么？",
            "左闭右闭和左闭右开区间的循环条件有什么区别？",
            "如何用二分查找找第一个等于 target 的位置？",
            "旋转数组二分时如何判断哪半边有序？",
            "什么情况下可以使用「二分答案」？"
        ],
        extensions: [
            "研究三分查找（用于单峰函数求极值）",
            "了解二分查找在数据库索引中的应用",
            "学习分数规划中的二分技巧",
            "探索高维二分（如二维有序矩阵查找）"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/detail/binary-search/",
            "https://labuladong.online/algo/essential-technique/binary-search-framework/",
            "https://leetcode.cn/problems/search-in-rotated-sorted-array/"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "dsa-w8-1": [
        {
            id: "dsa-w8-1-q1",
            question: "冒泡排序每轮确定哪个元素的最终位置？",
            options: ["最小元素", "最大元素", "中间元素", "随机元素"],
            answer: 1,
            rationale: "冒泡排序每轮将未排序部分的最大元素「冒泡」到末尾，确定其最终位置。"
        },
        {
            id: "dsa-w8-1-q2",
            question: "选择排序的交换次数最多是？",
            options: ["n", "n-1", "n²", "n log n"],
            answer: 1,
            rationale: "选择排序每轮最多交换一次（将最小值交换到正确位置），共 n-1 轮，最多 n-1 次交换。"
        },
        {
            id: "dsa-w8-1-q3",
            question: "插入排序在什么情况下时间复杂度是 O(n)？",
            options: ["数组逆序", "数组随机", "数组已排序", "数组很大"],
            answer: 2,
            rationale: "数组已排序时，每个元素只需比较一次就能确定位置，总时间 O(n)。"
        },
        {
            id: "dsa-w8-1-q4",
            question: "以下哪个排序是不稳定的？",
            options: ["冒泡排序", "插入排序", "选择排序", "归并排序"],
            answer: 2,
            rationale: "选择排序交换时可能改变相等元素的相对顺序，例如 [5a, 5b, 2] 变成 [2, 5b, 5a]。"
        },
        {
            id: "dsa-w8-1-q5",
            question: "冒泡排序的时间复杂度是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: 2,
            rationale: "冒泡排序需要 n-1 轮，每轮比较 n-i 次，总比较次数 O(n²)。"
        },
        {
            id: "dsa-w8-1-q6",
            question: "如何优化冒泡排序？",
            options: [
                "使用更多空间",
                "如果某轮没有交换，提前终止",
                "从两端开始冒泡",
                "以上都是"
            ],
            answer: 3,
            rationale: "提前终止和双向冒泡都是有效优化，但仍是 O(n²)。"
        },
        {
            id: "dsa-w8-1-q7",
            question: "三种基础排序的空间复杂度都是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 0,
            rationale: "冒泡、选择、插入排序都是原地排序，只需要常数额外空间 O(1)。"
        },
        {
            id: "dsa-w8-1-q8",
            question: "稳定排序的定义是？",
            options: [
                "时间复杂度稳定",
                "相等元素保持原有相对顺序",
                "空间复杂度固定",
                "运行时间不变"
            ],
            answer: 1,
            rationale: "稳定排序保证相等元素在排序后仍保持它们原来的相对顺序。"
        },
        {
            id: "dsa-w8-1-q9",
            question: "插入排序的最坏时间复杂度是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: 2,
            rationale: "当数组逆序时，每个元素都要移动到开头，总移动次数 O(n²)。"
        },
        {
            id: "dsa-w8-1-q10",
            question: "以下哪种情况最适合使用插入排序？",
            options: ["大规模随机数据", "基本有序的小规模数据", "逆序数据", "重复元素很多"],
            answer: 1,
            rationale: "插入排序对基本有序的数据接近 O(n)，且实现简单、常数小，适合小规模数据。"
        },
        {
            id: "dsa-w8-1-q11",
            question: "冒泡排序是稳定的，因为？",
            options: [
                "不交换相等元素",
                "每轮只交换一次",
                "从后向前比较",
                "使用额外空间"
            ],
            answer: 0,
            rationale: "冒泡排序只在 a[i] > a[i+1] 时交换，相等时不交换，保持相对顺序。"
        },
        {
            id: "dsa-w8-1-q12",
            question: "希尔排序是哪种排序的改进？",
            options: ["冒泡排序", "选择排序", "插入排序", "快速排序"],
            answer: 2,
            rationale: "希尔排序是插入排序的改进，通过分组减少元素移动距离，提高效率。"
        }
    ],
    "dsa-w8-2": [
        {
            id: "dsa-w8-2-q1",
            question: "快速排序的平均时间复杂度是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: 1,
            rationale: "快排平均情况下，分区均匀，递归深度 O(log n)，每层工作量 O(n)，总时间 O(n log n)。"
        },
        {
            id: "dsa-w8-2-q2",
            question: "快速排序的最坏时间复杂度是？出现在什么情况？",
            options: [
                "O(n log n)，随机数据",
                "O(n²)，已排序数组且选第一个元素作为 pivot",
                "O(n)，少量数据",
                "O(n²)，随机数据"
            ],
            answer: 1,
            rationale: "当每次 pivot 都是最大或最小元素时，分区极不均匀，递归深度 O(n)，总时间 O(n²)。"
        },
        {
            id: "dsa-w8-2-q3",
            question: "归并排序的时间复杂度是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "取决于数据"],
            answer: 1,
            rationale: "归并排序无论什么数据都是 O(n log n)，时间复杂度稳定。"
        },
        {
            id: "dsa-w8-2-q4",
            question: "归并排序的空间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 2,
            rationale: "归并排序需要 O(n) 的辅助数组来合并两个有序部分。"
        },
        {
            id: "dsa-w8-2-q5",
            question: "堆排序的空间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 0,
            rationale: "堆排序是原地排序，只需要常数额外空间用于交换，空间 O(1)。"
        },
        {
            id: "dsa-w8-2-q6",
            question: "以下哪个排序是稳定的？",
            options: ["快速排序", "堆排序", "归并排序", "选择排序"],
            answer: 2,
            rationale: "归并排序在合并时，相等元素优先取左边的，保持稳定性。"
        },
        {
            id: "dsa-w8-2-q7",
            question: "快排的 partition 函数的作用是？",
            options: [
                "将数组分成两半",
                "将数组分成小于 pivot 和大于 pivot 两部分",
                "找到最小元素",
                "合并两个有序数组"
            ],
            answer: 1,
            rationale: "partition 选择 pivot，将数组分成小于 pivot 的左部分和大于 pivot 的右部分。"
        },
        {
            id: "dsa-w8-2-q8",
            question: "三数取中选择 pivot 的目的是？",
            options: [
                "减少比较次数",
                "避免最坏情况，使分区更均匀",
                "减少空间使用",
                "保持稳定性"
            ],
            answer: 1,
            rationale: "三数取中（首、中、尾的中位数）避免选到极端值，使分区更均匀，避免最坏情况。"
        },
        {
            id: "dsa-w8-2-q9",
            question: "堆排序不稳定的原因是？",
            options: [
                "堆化过程改变顺序",
                "堆顶与末尾交换可能改变相等元素的顺序",
                "使用了额外空间",
                "时间不稳定"
            ],
            answer: 1,
            rationale: "堆排序将堆顶与末尾交换，可能把后面的相等元素交换到前面，破坏稳定性。"
        },
        {
            id: "dsa-w8-2-q10",
            question: "归并排序常用于什么场景？",
            options: [
                "内存排序",
                "外部排序（数据太大无法全部加载到内存）",
                "小规模数据",
                "已排序数据"
            ],
            answer: 1,
            rationale: "归并排序顺序访问数据，适合外部排序（如对文件排序）和链表排序。"
        },
        {
            id: "dsa-w8-2-q11",
            question: "快排的空间复杂度（考虑递归栈）是？",
            options: ["O(1)", "O(log n) 平均，O(n) 最坏", "O(n)", "O(n log n)"],
            answer: 1,
            rationale: "快排的递归深度平均 O(log n)，最坏 O(n)（分区极不均匀时）。"
        },
        {
            id: "dsa-w8-2-q12",
            question: "三路分区快排适合什么场景？",
            options: [
                "数据已排序",
                "大量重复元素",
                "数据范围很大",
                "链表排序"
            ],
            answer: 1,
            rationale: "三路分区将数组分成小于、等于、大于 pivot 三部分，对大量重复元素很高效。"
        }
    ],
    "dsa-w8-3": [
        {
            id: "dsa-w8-3-q1",
            question: "基于比较的排序算法时间复杂度下界是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: 1,
            rationale: "n 个元素有 n! 种排列，每次比较最多排除一半可能，需要 log₂(n!) = Θ(n log n) 次比较。"
        },
        {
            id: "dsa-w8-3-q2",
            question: "计数排序的时间复杂度是？（k 为值域大小）",
            options: ["O(n)", "O(n + k)", "O(n log n)", "O(k)"],
            answer: 1,
            rationale: "计数排序需要 O(n) 遍历数组和 O(k) 处理计数数组，总时间 O(n + k)。"
        },
        {
            id: "dsa-w8-3-q3",
            question: "计数排序适合什么场景？",
            options: ["大范围浮点数", "小范围整数", "字符串", "任意数据"],
            answer: 1,
            rationale: "计数排序需要 O(k) 空间存储计数，k 是值域大小，适合小范围整数。"
        },
        {
            id: "dsa-w8-3-q4",
            question: "桶排序的最坏时间复杂度是？",
            options: ["O(n)", "O(n + k)", "O(n²)", "O(n log n)"],
            answer: 2,
            rationale: "当所有元素进入同一个桶时，桶内排序是 O(n²)（如使用插入排序）。"
        },
        {
            id: "dsa-w8-3-q5",
            question: "基数排序的时间复杂度是？（d 为位数，k 为基数）",
            options: ["O(n)", "O(d × n)", "O(d × (n + k))", "O(n log n)"],
            answer: 2,
            rationale: "基数排序进行 d 轮，每轮用计数排序 O(n + k)，总时间 O(d × (n + k))。"
        },
        {
            id: "dsa-w8-3-q6",
            question: "基数排序为什么需要稳定排序作为子程序？",
            options: [
                "提高速度",
                "保证低位排序的结果在高位排序时不被打乱",
                "减少空间",
                "没有必要"
            ],
            answer: 1,
            rationale: "LSD 基数排序从低位到高位，稳定排序保证低位排序的相对顺序在处理高位时不变。"
        },
        {
            id: "dsa-w8-3-q7",
            question: "桶排序在什么情况下效率最高？",
            options: ["数据集中在少数桶", "数据均匀分布", "数据已排序", "数据逆序"],
            answer: 1,
            rationale: "数据均匀分布时，每个桶内元素数接近 O(1)，总时间接近 O(n)。"
        },
        {
            id: "dsa-w8-3-q8",
            question: "以下哪个是非比较排序？",
            options: ["快速排序", "归并排序", "计数排序", "堆排序"],
            answer: 2,
            rationale: "计数排序不通过比较元素大小来排序，而是统计每个值的出现次数。"
        },
        {
            id: "dsa-w8-3-q9",
            question: "计数排序的稳定版本如何实现？",
            options: [
                "从前向后遍历原数组",
                "累加计数后，从后向前遍历原数组填充结果",
                "使用链表",
                "多次计数"
            ],
            answer: 1,
            rationale: "累加计数得到每个值的结束位置，从后向前遍历保证相同值的相对顺序不变。"
        },
        {
            id: "dsa-w8-3-q10",
            question: "基数排序的 LSD 和 MSD 分别是指？",
            options: [
                "从最高位/最低位开始",
                "从最低位/最高位开始",
                "从左到右/从右到左",
                "升序/降序"
            ],
            answer: 1,
            rationale: "LSD（Least Significant Digit）从最低位开始，MSD 从最高位开始。"
        },
        {
            id: "dsa-w8-3-q11",
            question: "非比较排序突破 O(n log n) 下界的原因是？",
            options: [
                "使用了更多空间",
                "利用了数据的额外信息（如值域范围）",
                "使用了并行计算",
                "使用了更好的比较方式"
            ],
            answer: 1,
            rationale: "非比较排序利用数据的分布信息（如值域），不通过比较来排序，因此不受下界限制。"
        },
        {
            id: "dsa-w8-3-q12",
            question: "对于十进制整数，基数排序的基数 k 通常是？",
            options: ["2", "10", "26", "256"],
            answer: 1,
            rationale: "十进制整数按位拆分，每位是 0-9，基数 k = 10。"
        }
    ],
    "dsa-w8-4": [
        {
            id: "dsa-w8-4-q1",
            question: "二分查找的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 1,
            rationale: "每次比较排除一半搜索空间，最多 log₂n 次比较，时间 O(log n)。"
        },
        {
            id: "dsa-w8-4-q2",
            question: "二分查找的前提条件是？",
            options: ["数组元素不重复", "数组有序", "数组很大", "数组是整数"],
            answer: 1,
            rationale: "二分查找依赖有序性来判断搜索方向，必须是有序数组。"
        },
        {
            id: "dsa-w8-4-q3",
            question: "使用左闭右闭区间 [left, right]，循环条件应该是？",
            options: ["left < right", "left <= right", "left != right", "left > right"],
            answer: 1,
            rationale: "左闭右闭时，left == right 仍是有效区间（一个元素），需要 left <= right。"
        },
        {
            id: "dsa-w8-4-q4",
            question: "lower_bound 返回的是？",
            options: [
                "第一个等于 target 的位置",
                "第一个大于等于 target 的位置",
                "最后一个等于 target 的位置",
                "第一个大于 target 的位置"
            ],
            answer: 1,
            rationale: "lower_bound 返回第一个 >= target 的位置，如果不存在则返回数组末尾。"
        },
        {
            id: "dsa-w8-4-q5",
            question: "旋转排序数组二分查找的关键是？",
            options: [
                "先找旋转点",
                "判断哪半边有序，再判断 target 是否在有序半边",
                "从两端开始",
                "使用递归"
            ],
            answer: 1,
            rationale: "通过比较 nums[mid] 和 nums[left]/nums[right] 判断哪半边有序，再决定搜索方向。"
        },
        {
            id: "dsa-w8-4-q6",
            question: "为什么用 mid = left + (right - left) / 2 而不是 (left + right) / 2？",
            options: [
                "结果相同，只是写法不同",
                "防止 left + right 整数溢出",
                "速度更快",
                "更容易理解"
            ],
            answer: 1,
            rationale: "当 left 和 right 都很大时，left + right 可能溢出。减法版本避免这个问题。"
        },
        {
            id: "dsa-w8-4-q7",
            question: "二分查找找左边界时，找到 target 后应该？",
            options: [
                "直接返回",
                "继续向左搜索（right = mid - 1）",
                "继续向右搜索",
                "停止循环"
            ],
            answer: 1,
            rationale: "找左边界需要继续向左搜索，看是否有更靠左的 target，直到区间为空。"
        },
        {
            id: "dsa-w8-4-q8",
            question: "「二分答案」适用于什么类型的问题？",
            options: [
                "答案范围未知",
                "答案具有单调性（满足条件的答案连续）",
                "需要枚举所有答案",
                "答案是字符串"
            ],
            answer: 1,
            rationale: "当答案具有单调性时（如 >= x 的答案都满足条件），可以二分答案并验证。"
        },
        {
            id: "dsa-w8-4-q9",
            question: "二分查找的空间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "取决于实现"],
            answer: 0,
            rationale: "迭代版二分查找只需要常数个变量，空间 O(1)。"
        },
        {
            id: "dsa-w8-4-q10",
            question: "在有重复元素的有序数组中，标准二分查找可能返回？",
            options: [
                "第一个等于 target 的位置",
                "最后一个等于 target 的位置",
                "任意一个等于 target 的位置",
                "一定找不到"
            ],
            answer: 2,
            rationale: "标准二分查找只保证找到一个等于 target 的位置，不保证是第一个或最后一个。"
        },
        {
            id: "dsa-w8-4-q11",
            question: "upper_bound 返回的是？",
            options: [
                "第一个等于 target 的位置",
                "第一个大于等于 target 的位置",
                "第一个大于 target 的位置",
                "最后一个等于 target 的位置"
            ],
            answer: 2,
            rationale: "upper_bound 返回第一个 > target 的位置，结合 lower_bound 可以求等于 target 的区间。"
        },
        {
            id: "dsa-w8-4-q12",
            question: "旋转数组 [4,5,6,7,0,1,2] 中查找 0，第一次比较 nums[mid] = 7 后，应该？",
            options: [
                "搜索左半边 [4,5,6]",
                "搜索右半边 [0,1,2]",
                "直接返回",
                "无法判断"
            ],
            answer: 1,
            rationale: "nums[mid]=7 >= nums[left]=4，左半边有序，0 不在 [4,7] 中，搜索右半边。"
        }
    ]
}
