import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "dsa-w5-1": {
        lessonId: "dsa-w5-1",
        background: [
            "【AVL 树的由来】AVL 树是第一个自平衡二叉搜索树，由 Adelson-Velsky 和 Landis 于 1962 年发明。它通过严格的平衡条件保证树高始终为 O(log n)，从而保证所有操作的最坏时间复杂度也是 O(log n)。",
            "【平衡因子】每个节点的平衡因子 = 左子树高度 - 右子树高度。AVL 树要求所有节点的平衡因子只能是 -1、0 或 1。插入或删除后如果平衡因子超出范围，需要通过旋转恢复平衡。",
            "【四种旋转】LL 型（右单旋）：左子树的左子树过深；RR 型（左单旋）：右子树的右子树过深；LR 型（左右双旋）：左子树的右子树过深；RL 型（右左双旋）：右子树的左子树过深。",
            "【旋转的本质】旋转是保持 BST 性质的前提下改变树的形态。右旋将左子节点提升为根，左旋将右子节点提升为根。双旋是两次单旋的组合，先对子节点旋转再对当前节点旋转。",
            "【AVL 树的应用】AVL 树适合查找密集型场景，因为严格平衡保证了查找效率。但频繁插入删除时旋转开销较大，这时红黑树可能更合适。数据库索引和内存中的有序集合常用 AVL 树。"
        ],
        keyDifficulties: [
            "【判断失衡类型】插入后沿路径向上更新平衡因子，找到第一个失衡节点（|BF| > 1）。根据新节点插入的位置判断类型：插在左子树的左侧是 LL，左子树的右侧是 LR，以此类推。",
            "【双旋的理解】LR 型不能直接右旋，因为左子节点的右子树会变成失衡节点的左子树，问题没有解决。必须先对左子节点左旋，转化为 LL 型，再对失衡节点右旋。",
            "【删除后的调整】删除比插入复杂，因为删除后可能需要向上一直调整到根。插入最多只需一次旋转（或双旋），删除可能需要 O(log n) 次旋转。",
            "【高度的维护】每个节点需要存储高度信息，旋转后要正确更新。高度 = max(左子树高度, 右子树高度) + 1，空节点高度为 -1 或 0（取决于定义）。"
        ],
        handsOnPath: [
            "实现 AVL 树节点类，包含 val、left、right、height 属性",
            "实现四种旋转函数：leftRotate、rightRotate、leftRightRotate、rightLeftRotate",
            "实现 getBalance 函数计算平衡因子",
            "实现 insert 函数，插入后检查平衡并旋转",
            "使用 Visualgo 可视化观察 AVL 树的旋转过程"
        ],
        selfCheck: [
            "AVL 树的平衡因子定义是什么？取值范围是？",
            "LL 型失衡如何判断？如何修复？",
            "为什么 LR 型不能直接右旋？",
            "插入和删除操作最多各需要几次旋转？",
            "AVL 树和普通 BST 相比，优势和劣势分别是什么？"
        ],
        extensions: [
            "研究 AVL 树删除操作的完整实现",
            "比较 AVL 树和红黑树的性能差异",
            "了解 AVL 树在数据库索引中的应用",
            "实现 AVL 树的区间查询操作"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/introduction-to-avl-tree/",
            "https://www.cs.usfca.edu/~galles/visualization/AVLtree.html",
            "https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree"
        ]
    },
    "dsa-w5-2": {
        lessonId: "dsa-w5-2",
        background: [
            "【红黑树简介】红黑树是一种近似平衡的二叉搜索树，由 Rudolf Bayer 于 1972 年发明。它通过节点着色和五条性质保证从根到叶的最长路径不超过最短路径的两倍，从而保证 O(log n) 的操作效率。",
            "【五条性质】1) 每个节点是红色或黑色；2) 根节点是黑色；3) 所有叶节点（NIL）是黑色；4) 红色节点的子节点必须是黑色（不能有连续红节点）；5) 从任意节点到其所有后代叶节点的路径包含相同数量的黑色节点。",
            "【为什么是近似平衡】性质 5 保证了黑色平衡（每条路径黑色节点数相同），性质 4 限制了红色节点不能连续。因此最长路径（红黑交替）最多是最短路径（全黑）的两倍。",
            "【红黑树 vs AVL 树】红黑树的平衡条件更宽松，插入删除时需要的旋转更少（最多 3 次），适合写密集场景。AVL 树严格平衡，查找更快，适合读密集场景。实际中红黑树应用更广泛。",
            "【广泛应用】C++ STL 的 map/set、Java 的 TreeMap/TreeSet、Linux 内核的进程调度、Nginx 的定时器管理等都使用红黑树。理解其原理有助于更好地使用这些数据结构。"
        ],
        keyDifficulties: [
            "【插入修复】新节点初始为红色（不破坏性质 5）。如果父节点是红色，违反性质 4，需要根据叔节点颜色决定处理方式：叔节点红色则变色，叔节点黑色则旋转+变色。",
            "【删除修复】删除黑色节点会破坏性质 5，需要用「双黑」概念理解。修复过程根据兄弟节点的颜色和其子节点的颜色分多种情况讨论。",
            "【旋转与变色的组合】红黑树的调整涉及旋转和变色的组合，需要牢记各种情况的处理规则。建议通过大量可视化案例建立直觉。",
            "【理解 NIL 节点】红黑树的叶节点是 NIL（空节点），不是普通二叉树的 null。所有 NIL 节点都是黑色的，这对理解性质 3 和性质 5 很重要。"
        ],
        handsOnPath: [
            "理解红黑树的五条性质，手动验证一棵红黑树是否合法",
            "使用 Visualgo 观察红黑树的插入和删除过程",
            "实现红黑树节点类，包含 color 属性",
            "实现插入后的修复函数（变色和旋转）",
            "阅读 OpenJDK TreeMap 的源码了解工业级实现"
        ],
        selfCheck: [
            "红黑树的五条性质分别是什么？",
            "为什么新插入的节点要设为红色？",
            "红黑树最长路径和最短路径的比值最大是多少？",
            "什么情况下插入后只需要变色不需要旋转？",
            "红黑树相比 AVL 树的主要优势是什么？"
        ],
        extensions: [
            "研究 Linux 内核中红黑树的实现",
            "了解 2-3-4 树与红黑树的等价关系",
            "学习左倾红黑树（LLRB）的简化实现",
            "探索红黑树在 HashMap 冲突处理中的应用"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/introduction-to-red-black-tree/",
            "https://www.cs.usfca.edu/~galles/visualization/RedBlack.html",
            "https://www.kernel.org/doc/Documentation/rbtree.txt"
        ]
    },
    "dsa-w5-3": {
        lessonId: "dsa-w5-3",
        background: [
            "【堆的定义】堆是一种完全二叉树，分为最大堆和最小堆。最大堆中父节点的值总是大于等于子节点，最小堆相反。堆顶（根节点）总是最大值或最小值。",
            "【数组存储】由于堆是完全二叉树，可以用数组高效存储。对于下标从 0 开始的数组：父节点 i 的左子节点是 2i+1，右子节点是 2i+2；子节点 i 的父节点是 (i-1)/2。",
            "【核心操作】插入（上浮）：新元素加到数组末尾，然后与父节点比较并交换直到满足堆性质。删除堆顶（下沉）：用最后一个元素替换堆顶，然后与较大（或较小）的子节点交换直到满足堆性质。",
            "【建堆】从一个无序数组建堆有两种方法：1) 逐个插入，时间 O(n log n)；2) 从最后一个非叶节点开始向前执行下沉操作，时间 O(n)。第二种方法更优。",
            "【堆排序】利用堆的性质进行排序：建立最大堆，每次将堆顶（最大值）与末尾交换，堆大小减 1 后重新堆化。重复直到堆为空，得到升序数组。时间 O(n log n)，空间 O(1)。"
        ],
        keyDifficulties: [
            "【O(n) 建堆的理解】直觉上似乎是 O(n log n)，但实际上底层节点多但下沉距离短，顶层节点少但下沉距离长。数学证明：总工作量 = Σ(n/2^(h+1)) * h ≈ O(n)。",
            "【上浮 vs 下沉】插入用上浮（从下往上调整），删除堆顶用下沉（从上往下调整）。下沉时要选择较大（最大堆）或较小（最小堆）的子节点交换。",
            "【堆排序的不稳定性】堆排序是不稳定排序，因为交换堆顶和末尾元素时可能改变相等元素的相对顺序。",
            "【堆和二叉搜索树的区别】堆只保证父节点与子节点的大小关系，不保证左右子树的顺序。查找任意元素需要 O(n) 时间，而 BST 是 O(log n)。"
        ],
        handsOnPath: [
            "用数组实现最大堆类，包含 insert、extractMax 方法",
            "实现 heapifyUp（上浮）和 heapifyDown（下沉）函数",
            "实现 O(n) 的建堆算法",
            "用堆实现堆排序算法",
            "使用 Visualgo 观察堆的各种操作过程"
        ],
        selfCheck: [
            "数组中下标为 i 的节点，其父节点和子节点的下标分别是？",
            "最大堆和最小堆的堆性质分别是什么？",
            "插入操作和删除堆顶操作的时间复杂度各是多少？",
            "为什么 O(n) 建堆方法是从最后一个非叶节点开始？",
            "堆排序的时间复杂度和空间复杂度分别是？"
        ],
        extensions: [
            "研究 d-ary 堆（d 叉堆）的性质和应用",
            "了解斐波那契堆的理论优势",
            "学习堆在 Huffman 编码中的应用",
            "探索堆在操作系统进程调度中的应用"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/detail/heap/",
            "https://visualgo.net/en/heap",
            "https://www.geeksforgeeks.org/heap-sort/"
        ]
    },
    "dsa-w5-4": {
        lessonId: "dsa-w5-4",
        background: [
            "【优先队列概念】优先队列是一种抽象数据类型，支持插入元素和获取/删除最高优先级元素。与普通队列不同，出队顺序由优先级决定而非入队顺序。堆是实现优先队列的最常用方式。",
            "【语言内置实现】Python 的 heapq 模块提供小顶堆操作；Java 的 PriorityQueue 默认是小顶堆；C++ 的 priority_queue 默认是大顶堆。注意默认行为的差异。",
            "【Top K 问题】找数组中前 K 大/小的元素。用小顶堆维护 K 个最大元素：遍历数组，元素大于堆顶则替换并重新堆化。时间 O(n log k)，空间 O(k)。",
            "【合并 K 个有序链表】经典堆应用。将 K 个链表的头节点放入小顶堆，每次取出最小的节点，将其 next 加入堆。时间 O(n log k)，n 是总节点数，k 是链表数。",
            "【数据流中位数】维护两个堆：大顶堆存较小的一半，小顶堆存较大的一半。保持两堆大小差不超过 1。中位数从两堆顶获取。插入 O(log n)，查询 O(1)。"
        ],
        keyDifficulties: [
            "【大顶堆 vs 小顶堆的选择】求前 K 大用小顶堆（维护最大的 K 个，堆顶是第 K 大），求前 K 小用大顶堆。这是常见的理解误区。",
            "【自定义优先级】很多场景需要自定义比较器。Python 用元组的第一个元素比较，Java 传入 Comparator，C++ 传入函数对象或 lambda。",
            "【堆中元素更新】标准堆不支持高效更新已有元素。需要更新时可以标记删除（惰性删除），或使用支持 decrease-key 的高级堆结构。",
            "【中位数问题的平衡维护】插入新元素后可能需要在两个堆之间调整元素，保持大小关系（大顶堆所有元素 <= 小顶堆所有元素）和大小平衡。"
        ],
        handsOnPath: [
            "用 Python heapq 或 Java PriorityQueue 解决 Top K 问题",
            "练习 LeetCode 215「数组中的第 K 个最大元素」",
            "练习 LeetCode 23「合并 K 个升序链表」",
            "练习 LeetCode 295「数据流的中位数」",
            "实现带自定义比较器的优先队列应用"
        ],
        selfCheck: [
            "为什么求 Top K 大用小顶堆而不是大顶堆？",
            "合并 K 个有序链表的时间复杂度是多少？如何分析？",
            "数据流中位数问题为什么需要两个堆？",
            "如何用优先队列实现 Dijkstra 算法？",
            "优先队列相比排序的优势是什么？"
        ],
        extensions: [
            "研究 Dijkstra 算法中优先队列的应用",
            "了解 A* 算法中的启发式优先队列",
            "学习滑动窗口最大值的单调队列解法",
            "探索在线算法和流处理中的堆应用"
        ],
        sourceUrls: [
            "https://leetcode.cn/problems/top-k-frequent-elements/",
            "https://leetcode.cn/problems/merge-k-sorted-lists/",
            "https://leetcode.cn/problems/find-median-from-data-stream/"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "dsa-w5-1": [
        {
            id: "dsa-w5-1-q1",
            question: "AVL 树节点的平衡因子取值范围是？",
            options: ["0", "-1, 0, 1", "-2, -1, 0, 1, 2", "任意整数"],
            answer: 1,
            rationale: "AVL 树要求每个节点的平衡因子（左子树高度 - 右子树高度）必须是 -1、0 或 1。"
        },
        {
            id: "dsa-w5-1-q2",
            question: "在 AVL 树中，LL 型失衡应该执行什么操作？",
            options: ["左单旋", "右单旋", "左右双旋", "右左双旋"],
            answer: 1,
            rationale: "LL 型是左子树的左子树过深，执行右单旋将左子节点提升为新根。"
        },
        {
            id: "dsa-w5-1-q3",
            question: "AVL 树的 LR 型失衡需要执行？",
            options: ["一次左旋", "一次右旋", "先左旋后右旋", "先右旋后左旋"],
            answer: 2,
            rationale: "LR 型是左子树的右子树过深，先对左子节点左旋转化为 LL 型，再对根右旋。"
        },
        {
            id: "dsa-w5-1-q4",
            question: "AVL 树插入操作最多需要几次旋转？",
            options: ["1 次（或一次双旋）", "O(log n) 次", "n 次", "0 次"],
            answer: 0,
            rationale: "插入后只有一个节点可能失衡，修复后整棵树就平衡了，最多需要一次旋转或双旋。"
        },
        {
            id: "dsa-w5-1-q5",
            question: "AVL 树的查找时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 1,
            rationale: "AVL 树严格平衡，树高为 O(log n)，因此查找时间复杂度是 O(log n)。"
        },
        {
            id: "dsa-w5-1-q6",
            question: "以下关于 AVL 树旋转的说法，正确的是？",
            options: [
                "旋转会改变节点的值",
                "旋转会破坏 BST 性质",
                "旋转只改变树的形态，保持 BST 性质",
                "旋转会增加树的高度"
            ],
            answer: 2,
            rationale: "旋转是在保持 BST 性质的前提下改变树的形态，目的是降低树的高度使其平衡。"
        },
        {
            id: "dsa-w5-1-q7",
            question: "AVL 树相比普通 BST 的优势是？",
            options: [
                "实现更简单",
                "保证最坏情况下也是 O(log n) 操作",
                "空间占用更少",
                "插入更快"
            ],
            answer: 1,
            rationale: "AVL 树通过保持平衡避免 BST 退化为链表，保证最坏情况也是 O(log n)。"
        },
        {
            id: "dsa-w5-1-q8",
            question: "计算 AVL 树节点的平衡因子需要什么信息？",
            options: ["节点的值", "子节点的数量", "左右子树的高度", "父节点的信息"],
            answer: 2,
            rationale: "平衡因子 = 左子树高度 - 右子树高度，需要知道左右子树的高度。"
        },
        {
            id: "dsa-w5-1-q9",
            question: "删除 AVL 树节点后最多需要几次旋转？",
            options: ["1 次", "2 次", "O(log n) 次", "不需要旋转"],
            answer: 2,
            rationale: "删除可能导致从删除位置到根的路径上多个节点失衡，最坏需要 O(log n) 次旋转。"
        },
        {
            id: "dsa-w5-1-q10",
            question: "AVL 树中，一个高度为 h 的树最少有多少个节点？",
            options: ["h", "2^h", "斐波那契数相关", "h²"],
            answer: 2,
            rationale: "最少节点数满足 N(h) = N(h-1) + N(h-2) + 1，与斐波那契数列相关。"
        },
        {
            id: "dsa-w5-1-q11",
            question: "以下哪种情况不会触发 AVL 树的旋转？",
            options: [
                "插入后平衡因子变为 -2",
                "插入后平衡因子变为 1",
                "删除后平衡因子变为 2",
                "平衡因子从 1 变为 2"
            ],
            answer: 1,
            rationale: "平衡因子为 -1、0、1 时树是平衡的，不需要旋转。只有超出这个范围才需要调整。"
        },
        {
            id: "dsa-w5-1-q12",
            question: "AVL 树相比红黑树的缺点是？",
            options: [
                "查找效率低",
                "插入删除时旋转次数可能更多",
                "不能保证平衡",
                "空间复杂度更高"
            ],
            answer: 1,
            rationale: "AVL 树严格平衡，插入删除后可能需要更多旋转来恢复平衡，而红黑树最多 3 次旋转。"
        }
    ],
    "dsa-w5-2": [
        {
            id: "dsa-w5-2-q1",
            question: "红黑树的根节点必须是什么颜色？",
            options: ["红色", "黑色", "任意颜色", "与子节点颜色相同"],
            answer: 1,
            rationale: "红黑树的性质之一：根节点必须是黑色。"
        },
        {
            id: "dsa-w5-2-q2",
            question: "红黑树中，红色节点的子节点必须是？",
            options: ["红色", "黑色", "任意颜色", "空节点"],
            answer: 1,
            rationale: "红黑树性质：不能有连续的红色节点，因此红色节点的子节点必须是黑色。"
        },
        {
            id: "dsa-w5-2-q3",
            question: "红黑树中的 NIL（叶）节点是什么颜色？",
            options: ["红色", "黑色", "透明", "无颜色"],
            answer: 1,
            rationale: "红黑树性质：所有叶节点（NIL）都是黑色。"
        },
        {
            id: "dsa-w5-2-q4",
            question: "红黑树从任意节点到其后代叶节点的路径满足什么性质？",
            options: [
                "路径长度相等",
                "包含相同数量的红色节点",
                "包含相同数量的黑色节点",
                "节点值递增"
            ],
            answer: 2,
            rationale: "红黑树的黑色平衡性质：从任意节点到其后代叶节点的路径包含相同数量的黑色节点。"
        },
        {
            id: "dsa-w5-2-q5",
            question: "新插入红黑树的节点应该是什么颜色？",
            options: ["红色", "黑色", "根据位置决定", "与父节点相反"],
            answer: 0,
            rationale: "新节点设为红色不会破坏黑色平衡性质，只可能违反「不连续红」，更容易修复。"
        },
        {
            id: "dsa-w5-2-q6",
            question: "红黑树的最长路径和最短路径的比值最大是？",
            options: ["1:1", "2:1", "3:1", "log n : 1"],
            answer: 1,
            rationale: "最短路径全是黑色节点，最长路径是红黑交替。由于黑色数量相等，最长最多是最短的两倍。"
        },
        {
            id: "dsa-w5-2-q7",
            question: "红黑树插入后，如果父节点和叔节点都是红色，应该？",
            options: [
                "只旋转",
                "父节点和叔节点变黑，祖父变红，向上递归检查",
                "删除叔节点",
                "不需要任何操作"
            ],
            answer: 1,
            rationale: "叔叔是红色时，通过变色解决：父和叔变黑，祖父变红，然后向上检查祖父。"
        },
        {
            id: "dsa-w5-2-q8",
            question: "以下哪个数据结构不是基于红黑树实现的？",
            options: ["Java TreeMap", "C++ std::map", "Python dict", "Java TreeSet"],
            answer: 2,
            rationale: "Python dict 是基于哈希表实现的，而 Java TreeMap/TreeSet 和 C++ map 都基于红黑树。"
        },
        {
            id: "dsa-w5-2-q9",
            question: "红黑树相比 AVL 树的主要优势是？",
            options: [
                "查找更快",
                "插入删除时旋转次数更少",
                "更严格平衡",
                "空间占用更少"
            ],
            answer: 1,
            rationale: "红黑树的平衡条件更宽松，插入删除最多只需 3 次旋转，而 AVL 可能需要 O(log n) 次。"
        },
        {
            id: "dsa-w5-2-q10",
            question: "红黑树的查找时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 1,
            rationale: "红黑树保证树高为 O(log n)，因此查找时间复杂度是 O(log n)。"
        },
        {
            id: "dsa-w5-2-q11",
            question: "2-3-4 树与红黑树的关系是？",
            options: [
                "完全无关",
                "2-3-4 树是红黑树的特例",
                "红黑树是 2-3-4 树的二叉表示",
                "二者时间复杂度不同"
            ],
            answer: 2,
            rationale: "红黑树可以看作是 2-3-4 树的二叉表示，红色节点与其父节点一起对应 3-节点或 4-节点。"
        },
        {
            id: "dsa-w5-2-q12",
            question: "Linux 内核使用红黑树的场景包括？",
            options: [
                "只有内存管理",
                "进程调度、内存管理、文件系统等",
                "只有文件系统",
                "Linux 不使用红黑树"
            ],
            answer: 1,
            rationale: "Linux 内核广泛使用红黑树，包括进程调度器、虚拟内存管理、ext3 文件系统等。"
        }
    ],
    "dsa-w5-3": [
        {
            id: "dsa-w5-3-q1",
            question: "最大堆的堆性质是？",
            options: [
                "父节点 < 子节点",
                "父节点 >= 子节点",
                "左子节点 < 右子节点",
                "节点值递增"
            ],
            answer: 1,
            rationale: "最大堆中，每个父节点的值都大于等于其子节点的值。"
        },
        {
            id: "dsa-w5-3-q2",
            question: "用数组存储堆时，下标 i 的节点的左子节点下标是？（从 0 开始）",
            options: ["i+1", "2i", "2i+1", "i/2"],
            answer: 2,
            rationale: "从 0 开始编号时，节点 i 的左子节点是 2i+1，右子节点是 2i+2。"
        },
        {
            id: "dsa-w5-3-q3",
            question: "堆的插入操作的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 1,
            rationale: "插入到末尾后需要上浮，最坏情况上浮到根，路径长度 O(log n)。"
        },
        {
            id: "dsa-w5-3-q4",
            question: "从无序数组建堆的最优时间复杂度是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: 0,
            rationale: "从最后一个非叶节点开始执行下沉操作，时间复杂度是 O(n)，而非 O(n log n)。"
        },
        {
            id: "dsa-w5-3-q5",
            question: "堆排序的空间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 0,
            rationale: "堆排序是原地排序算法，只需要常数级别的额外空间。"
        },
        {
            id: "dsa-w5-3-q6",
            question: "删除堆顶后，应该用哪个元素替代堆顶？",
            options: ["左子节点", "右子节点", "最后一个元素", "最小元素"],
            answer: 2,
            rationale: "用最后一个元素替代堆顶，然后执行下沉操作恢复堆性质。"
        },
        {
            id: "dsa-w5-3-q7",
            question: "堆排序的时间复杂度是？",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: 1,
            rationale: "建堆 O(n)，n 次删除堆顶每次 O(log n)，总时间 O(n log n)。"
        },
        {
            id: "dsa-w5-3-q8",
            question: "以下关于堆的说法，正确的是？",
            options: [
                "堆是二叉搜索树",
                "堆可以高效查找任意元素",
                "堆是完全二叉树",
                "堆的左子节点一定小于右子节点"
            ],
            answer: 2,
            rationale: "堆是完全二叉树，但不是 BST。堆只保证父子关系，不保证左右顺序。"
        },
        {
            id: "dsa-w5-3-q9",
            question: "最小堆的堆顶元素是？",
            options: ["最大值", "最小值", "中位数", "任意值"],
            answer: 1,
            rationale: "最小堆中父节点小于等于子节点，因此根（堆顶）是最小值。"
        },
        {
            id: "dsa-w5-3-q10",
            question: "获取堆顶元素（不删除）的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 0,
            rationale: "堆顶是数组的第一个元素，直接访问即可，时间 O(1)。"
        },
        {
            id: "dsa-w5-3-q11",
            question: "上浮（heapify-up）操作用于？",
            options: ["建堆", "插入新元素后恢复堆性质", "删除堆顶后恢复堆性质", "查找元素"],
            answer: 1,
            rationale: "插入新元素到末尾后，通过上浮（与父节点比较交换）恢复堆性质。"
        },
        {
            id: "dsa-w5-3-q12",
            question: "堆排序是稳定排序吗？",
            options: ["是", "否", "取决于实现", "取决于数据"],
            answer: 1,
            rationale: "堆排序不稳定，因为堆顶与末尾交换可能改变相等元素的相对顺序。"
        }
    ],
    "dsa-w5-4": [
        {
            id: "dsa-w5-4-q1",
            question: "优先队列的核心操作是？",
            options: [
                "FIFO 入队出队",
                "LIFO 入栈出栈",
                "插入和获取最高优先级元素",
                "随机访问"
            ],
            answer: 2,
            rationale: "优先队列支持插入元素和获取/删除最高优先级元素，与普通队列的 FIFO 不同。"
        },
        {
            id: "dsa-w5-4-q2",
            question: "找数组中前 K 大的元素，应该用什么堆？",
            options: ["大顶堆维护所有元素", "小顶堆维护 K 个元素", "大顶堆维护 K 个元素", "两个堆"],
            answer: 1,
            rationale: "用小顶堆维护 K 个最大元素，堆顶是这 K 个中最小的（第 K 大）。"
        },
        {
            id: "dsa-w5-4-q3",
            question: "合并 K 个有序链表，使用优先队列的时间复杂度是？",
            options: ["O(n)", "O(n log k)", "O(nk)", "O(n log n)"],
            answer: 1,
            rationale: "每个元素入队出队各一次，每次操作 O(log k)，共 n 个元素，总时间 O(n log k)。"
        },
        {
            id: "dsa-w5-4-q4",
            question: "数据流中位数问题需要维护几个堆？",
            options: ["1 个", "2 个", "3 个", "K 个"],
            answer: 1,
            rationale: "用两个堆：大顶堆存较小的一半，小顶堆存较大的一半，中位数从堆顶获取。"
        },
        {
            id: "dsa-w5-4-q5",
            question: "Python heapq 模块实现的是什么堆？",
            options: ["大顶堆", "小顶堆", "可配置", "斐波那契堆"],
            answer: 1,
            rationale: "Python heapq 只提供小顶堆操作，要实现大顶堆需要取负或自定义比较。"
        },
        {
            id: "dsa-w5-4-q6",
            question: "用优先队列解决 Top K 问题，空间复杂度是？",
            options: ["O(1)", "O(k)", "O(n)", "O(n log k)"],
            answer: 1,
            rationale: "只需要维护大小为 K 的堆，空间复杂度 O(k)。"
        },
        {
            id: "dsa-w5-4-q7",
            question: "以下哪个场景不适合用优先队列？",
            options: [
                "Dijkstra 最短路径",
                "合并 K 个有序链表",
                "FIFO 任务队列",
                "哈夫曼编码"
            ],
            answer: 2,
            rationale: "FIFO 任务队列按先进先出顺序处理，不需要优先级，用普通队列即可。"
        },
        {
            id: "dsa-w5-4-q8",
            question: "Java PriorityQueue 默认是什么堆？",
            options: ["大顶堆", "小顶堆", "随机", "取决于元素类型"],
            answer: 1,
            rationale: "Java PriorityQueue 默认是小顶堆（自然顺序），要实现大顶堆需传入逆序比较器。"
        },
        {
            id: "dsa-w5-4-q9",
            question: "数据流中位数问题，插入一个新元素的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 1,
            rationale: "需要在堆中插入和可能的调整，每个堆操作是 O(log n)。"
        },
        {
            id: "dsa-w5-4-q10",
            question: "为什么 Top K 大问题用小顶堆而不是大顶堆？",
            options: [
                "大顶堆实现更复杂",
                "小顶堆能快速淘汰较小元素，只保留 K 个最大",
                "小顶堆查找更快",
                "没有区别，都可以"
            ],
            answer: 1,
            rationale: "小顶堆堆顶是最小值，当新元素更大时替换堆顶，保证堆中始终是最大的 K 个。"
        },
        {
            id: "dsa-w5-4-q11",
            question: "Dijkstra 算法使用优先队列的目的是？",
            options: [
                "存储所有节点",
                "每次选择距离最小的未访问节点",
                "实现 DFS",
                "检测负权环"
            ],
            answer: 1,
            rationale: "Dijkstra 每次选择当前距离最小的节点扩展，优先队列能高效获取最小距离节点。"
        },
        {
            id: "dsa-w5-4-q12",
            question: "C++ priority_queue 默认是什么堆？",
            options: ["大顶堆", "小顶堆", "双端堆", "无序"],
            answer: 0,
            rationale: "C++ priority_queue 默认是大顶堆，使用 greater<T> 可以变成小顶堆。"
        }
    ]
}
