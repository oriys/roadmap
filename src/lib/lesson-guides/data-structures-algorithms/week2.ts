import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "dsa-w2-1": {
        lessonId: "dsa-w2-1",
        background: [
            "【链表的本质】链表是通过指针/引用将节点串联起来的线性数据结构。每个节点包含数据域和指针域。与数组不同，链表节点在内存中可以不连续存储。",
            "【单链表结构】单链表节点包含 val（数据）和 next（指向下一个节点的指针）。head 指针指向第一个节点，末尾节点的 next 为 null。",
            "【链表 vs 数组】链表优势：动态大小、O(1) 插入删除（已知位置）；劣势：无随机访问、额外指针空间、缓存不友好。选择取决于具体需求。",
            "【虚拟头节点】在 head 前添加一个哨兵节点（dummy node），可以统一处理头节点的边界情况，简化代码。返回结果时返回 dummy.next。",
            "【链表操作复杂度】访问第 i 个元素 O(n)，头部插入删除 O(1)，尾部插入删除 O(n)（除非维护 tail 指针），任意位置插入删除 O(1)（已知前驱节点）。"
        ],
        keyDifficulties: [
            "【指针操作顺序】链表操作必须注意指针修改顺序。例如插入节点：先让新节点指向后继，再让前驱指向新节点。顺序错误会丢失节点。",
            "【空指针检查】访问 node.next 前必须确保 node 不为 null。很多链表 bug 来自空指针异常。",
            "【头尾边界】头部和尾部操作需要特殊处理。虚拟头节点可以消除头部的特殊情况，尾部需要单独判断。",
            "【节点释放】某些语言（C/C++）需要手动释放删除的节点。即使有 GC，也要注意不要保留对已删除节点的引用。"
        ],
        handsOnPath: [
            "实现单链表类：包含 insertAtHead、insertAtTail、deleteAtIndex、get 方法",
            "练习 LeetCode 206「反转链表」，掌握迭代和递归两种方法",
            "练习 LeetCode 21「合并两个有序链表」",
            "实现「删除链表的倒数第 N 个节点」，使用快慢指针",
            "使用 Visualgo 可视化链表操作，观察指针变化"
        ],
        selfCheck: [
            "在单链表中插入节点，指针修改的正确顺序是什么？",
            "为什么虚拟头节点能简化链表操作？",
            "反转链表的迭代法需要几个指针？递归法的终止条件是什么？",
            "如何在 O(n) 时间 O(1) 空间内判断链表是否为回文？",
            "删除链表节点时，如果只能访问被删除节点本身，如何实现？"
        ],
        extensions: [
            "研究 Linux 内核中的链表实现 list.h",
            "了解跳表如何通过多级链表实现 O(log n) 查找",
            "探索 XOR 链表的空间优化技巧",
            "学习链表在 LRU 缓存中的应用"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/detail/linked-list/",
            "https://visualgo.net/en/list",
            "https://leetcode.cn/tag/linked-list/problemset/"
        ]
    },
    "dsa-w2-2": {
        lessonId: "dsa-w2-2",
        background: [
            "【双向链表】每个节点有 prev 和 next 两个指针，可以双向遍历。优势：可以 O(1) 删除当前节点（不需要前驱）；劣势：每个节点额外存储一个指针。",
            "【环形链表】尾节点的 next 指向头节点（或链表中某个节点）。可以是单向或双向。常用于实现循环队列、约瑟夫环问题。",
            "【Floyd 环检测】快指针每次走 2 步，慢指针走 1 步。如果有环，快慢指针必然相遇。证明：设环长 c，两指针进入环后，每次相对距离减少 1，最多 c 步相遇。",
            "【找环入口】快慢指针相遇后，将慢指针重置到 head，然后两指针都每次走 1 步，再次相遇点即为环入口。数学推导基于：a + b = nc（a 为头到入口距离，b 为入口到相遇点距离，c 为环长）。",
            "【LRU 缓存】使用双向链表 + 哈希表实现。链表维护访问顺序（最近访问的在头部），哈希表提供 O(1) 查找。访问/插入时移动到头部，容量满时删除尾部。"
        ],
        keyDifficulties: [
            "【双向链表插入删除】需要修改 4 个指针：新节点的 prev/next，前驱的 next，后继的 prev。顺序很重要。",
            "【环入口证明】设 a = 头到入口距离，b = 入口到相遇点，c = 环长。相遇时快指针走 2(a+b)，慢指针走 a+b，差值 a+b = kc。因此从相遇点再走 a 步到入口。",
            "【LRU 的 O(1) 要求】所有操作必须 O(1)。get 用哈希表定位节点，然后移动到头部；put 先查找是否存在，不存在则插入头部并可能删除尾部。",
            "【空间与时间权衡】双向链表用空间换时间（额外指针），LRU 用哈希表换时间（额外存储）。面试时要能分析这些权衡。"
        ],
        handsOnPath: [
            "实现双向链表的 insertAfter、deleteCurrent 方法",
            "实现 Floyd 环检测算法，并找到环的入口节点",
            "练习 LeetCode 146「LRU 缓存」，这是综合应用双向链表的经典题",
            "实现环形链表，解决约瑟夫环问题（每隔 k 个人淘汰）",
            "分析 LinkedHashMap 的源码，理解其如何维护插入/访问顺序"
        ],
        selfCheck: [
            "双向链表删除节点比单向链表有什么优势？",
            "Floyd 算法为什么快指针走 2 步、慢指针走 1 步？换成 3 步和 1 步可以吗？",
            "如何证明快慢指针相遇后，从 head 和相遇点同速前进会在入口相遇？",
            "LRU 缓存中，为什么要用双向链表而不是单向链表？",
            "如何计算环形链表的环长度？"
        ],
        extensions: [
            "研究 Brent 算法，另一种环检测方法",
            "了解 LFU（Least Frequently Used）缓存的实现",
            "探索循环链表在操作系统进程调度中的应用",
            "学习 Redis 的 LRU 近似算法"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/doubly-linked-list/",
            "https://leetcode.cn/problems/linked-list-cycle/solutions/175734/huan-xing-lian-biao-by-leetcode-solution/",
            "https://leetcode.cn/problems/lru-cache/"
        ]
    },
    "dsa-w2-3": {
        lessonId: "dsa-w2-3",
        background: [
            "【栈的定义】栈是后进先出（LIFO）的线性数据结构。只能在栈顶进行插入（push）和删除（pop）。类比：一摞盘子，只能从顶部取放。",
            "【栈的实现】可以用数组或链表实现。数组实现：用变量记录栈顶位置，push/pop 时更新。链表实现：在头部插入删除，自然满足 LIFO。",
            "【栈的应用】函数调用栈（保存返回地址和局部变量）、表达式求值、括号匹配、浏览器前进后退、撤销操作(undo)。",
            "【单调栈】栈内元素保持单调递增或递减。用于解决「下一个更大/更小元素」类问题。当新元素破坏单调性时，弹出栈顶并处理。",
            "【递归与栈】递归本质上是使用系统调用栈。任何递归都可以用显式栈改写为迭代，避免栈溢出风险。"
        ],
        keyDifficulties: [
            "【括号匹配细节】遇到左括号入栈，遇到右括号时：栈空则不匹配，栈顶不配对则不匹配。最后栈必须为空。注意多种括号的配对。",
            "【单调栈方向】递减栈找下一个更大元素（栈顶是最近的较小元素），递增栈找下一个更小元素。从左到右 vs 从右到左遍历效果不同。",
            "【表达式求值】中缀转后缀用运算符栈，后缀求值用操作数栈。注意运算符优先级和结合性。",
            "【栈的最大深度】分析递归或显式栈的最大深度对于理解空间复杂度很重要。如二叉树遍历最坏 O(n)，平衡时 O(log n)。"
        ],
        handsOnPath: [
            "用数组和链表分别实现栈",
            "练习 LeetCode 20「有效的括号」",
            "练习 LeetCode 739「每日温度」，掌握单调栈",
            "实现中缀表达式求值（如 \"3+2*4\"）",
            "用栈实现二叉树的前序、中序、后序遍历（非递归）"
        ],
        selfCheck: [
            "栈的 push 和 pop 时间复杂度是多少？用数组和链表实现有区别吗？",
            "为什么函数调用用栈而不是队列？",
            "单调递减栈中，新元素入栈前会发生什么？",
            "如何用两个栈实现一个队列？",
            "逆波兰表达式（后缀表达式）求值的算法是什么？"
        ],
        extensions: [
            "学习「最大矩形」问题中单调栈的应用",
            "了解「接雨水」的单调栈解法",
            "探索栈在编译器语法分析中的应用",
            "研究「股票价格跨度」问题"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/detail/queue-stack/",
            "https://labuladong.online/algo/data-structure/monotonic-stack/",
            "https://leetcode.cn/tag/stack/problemset/"
        ]
    },
    "dsa-w2-4": {
        lessonId: "dsa-w2-4",
        background: [
            "【队列的定义】队列是先进先出（FIFO）的线性数据结构。从队尾插入（enqueue），从队头删除（dequeue）。类比：排队买票。",
            "【队列的实现】数组实现需要处理「假溢出」问题，通常用循环队列。链表实现：维护 head 和 tail 指针，头部删除尾部插入。",
            "【循环队列】用固定大小的数组模拟循环，通过取模实现「循环」。区分队空和队满：牺牲一个空间，或用额外变量记录元素数量。",
            "【双端队列 Deque】两端都可以插入删除。Java 的 ArrayDeque 和 LinkedList 都实现了 Deque。可以同时当作栈和队列使用。",
            "【队列的应用】BFS 遍历、任务调度、缓冲区、消息队列。优先队列是特殊的队列，按优先级而非顺序出队。"
        ],
        keyDifficulties: [
            "【循环队列边界】设 front 指向队头，rear 指向队尾的下一个位置。队空：front == rear。队满：(rear + 1) % size == front（牺牲一个空间）。",
            "【单调队列】双端队列的特殊应用，用于滑动窗口最大值问题。维护队列元素单调递减，队头始终是当前窗口最大值。",
            "【BFS 层序处理】有时需要区分层次（如二叉树层序遍历返回二维数组）。方法：记录当前层节点数，或在队列中插入 null 分隔符。",
            "【多源 BFS】多个起点同时开始 BFS，如「01 矩阵」中求每个 1 到最近 0 的距离。所有 0 先入队，然后同步扩展。"
        ],
        handsOnPath: [
            "实现循环队列（LeetCode 622）",
            "练习 LeetCode 239「滑动窗口最大值」，掌握单调队列",
            "用队列实现二叉树层序遍历",
            "用 BFS 解决「图的最短路径」问题",
            "实现生产者-消费者模型中的有界缓冲队列"
        ],
        selfCheck: [
            "循环队列如何判断队空和队满？",
            "为什么 BFS 天然能找到最短路径？",
            "单调队列的队头元素有什么特殊性质？",
            "如何用两个队列实现一个栈？",
            "双端队列相比普通队列有什么优势？"
        ],
        extensions: [
            "了解优先队列（堆）的实现",
            "研究阻塞队列在多线程中的应用",
            "探索 Redis 的列表类型如何实现队列",
            "学习操作系统中的多级反馈队列调度"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/read/queue-stack/kbcqv/",
            "https://www.geeksforgeeks.org/deque-set-1-introduction-applications/",
            "https://leetcode.cn/problems/sliding-window-maximum/"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "dsa-w2-1": [
        {
            id: "dsa-w2-1-q1",
            question: "单链表在头部插入节点的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 0,
            rationale: "只需修改新节点的 next 指向原 head，再更新 head 指向新节点，O(1) 时间。"
        },
        {
            id: "dsa-w2-1-q2",
            question: "访问单链表第 i 个节点的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(i)", "O(n)"],
            answer: 2,
            rationale: "需要从 head 开始遍历 i 个节点，时间 O(i)，最坏情况 O(n)。"
        },
        {
            id: "dsa-w2-1-q3",
            question: "虚拟头节点（dummy node）的作用是？",
            options: [
                "提高访问速度",
                "减少内存使用",
                "统一处理头节点的边界情况",
                "实现双向遍历"
            ],
            answer: 2,
            rationale: "虚拟头节点使得头节点的操作和其他节点一致，避免特殊处理。"
        },
        {
            id: "dsa-w2-1-q4",
            question: "在单链表中插入节点，正确的指针操作顺序是？",
            options: [
                "先修改前驱的 next，再修改新节点的 next",
                "先修改新节点的 next，再修改前驱的 next",
                "顺序无所谓",
                "需要同时修改"
            ],
            answer: 1,
            rationale: "先让新节点指向后继，再让前驱指向新节点。顺序错误会丢失后继节点的引用。"
        },
        {
            id: "dsa-w2-1-q5",
            question: "反转单链表的迭代方法需要几个指针？",
            options: ["1 个", "2 个", "3 个", "4 个"],
            answer: 2,
            rationale: "需要 prev（已反转部分的头）、curr（当前处理节点）、next（保存下一个节点）三个指针。"
        },
        {
            id: "dsa-w2-1-q6",
            question: "以下哪个操作在链表中比数组快？",
            options: [
                "随机访问",
                "在已知位置插入节点",
                "二分查找",
                "按索引排序"
            ],
            answer: 1,
            rationale: "链表在已知位置插入 O(1)，数组需要移动后续元素 O(n)。但链表找到位置需要遍历。"
        },
        {
            id: "dsa-w2-1-q7",
            question: "单链表相比数组的主要劣势是？",
            options: [
                "插入删除慢",
                "无法动态扩展",
                "不支持随机访问",
                "占用内存更少"
            ],
            answer: 2,
            rationale: "链表必须从头遍历才能访问第 i 个元素，不支持 O(1) 随机访问。"
        },
        {
            id: "dsa-w2-1-q8",
            question: "合并两个有序链表的时间复杂度是？",
            options: ["O(1)", "O(min(m,n))", "O(m+n)", "O(m×n)"],
            answer: 2,
            rationale: "需要遍历两个链表的所有节点，总时间 O(m+n)。"
        },
        {
            id: "dsa-w2-1-q9",
            question: "删除链表节点时（只能访问被删节点本身），如何实现？",
            options: [
                "无法实现",
                "将下一个节点的值复制过来，然后删除下一个节点",
                "反转链表后删除",
                "遍历找到前驱"
            ],
            answer: 1,
            rationale: "将 next.val 复制到当前节点，然后将 next 指向 next.next，相当于删除了下一个节点。"
        },
        {
            id: "dsa-w2-1-q10",
            question: "链表节点的 next 指针存储的是？",
            options: [
                "下一个节点的值",
                "下一个节点的地址/引用",
                "下一个节点的索引",
                "链表的长度"
            ],
            answer: 1,
            rationale: "next 指针存储下一个节点在内存中的地址，通过它可以访问下一个节点。"
        },
        {
            id: "dsa-w2-1-q11",
            question: "链表的空间开销比数组大的原因是？",
            options: [
                "链表节点更大",
                "需要存储额外的指针",
                "内存碎片",
                "以上都是"
            ],
            answer: 3,
            rationale: "链表每个节点需要额外的指针空间，而且节点分散导致内存碎片和缓存不友好。"
        },
        {
            id: "dsa-w2-1-q12",
            question: "递归反转链表的时间和空间复杂度是？",
            options: [
                "时间 O(n)，空间 O(1)",
                "时间 O(n)，空间 O(n)",
                "时间 O(n²)，空间 O(1)",
                "时间 O(n log n)，空间 O(log n)"
            ],
            answer: 1,
            rationale: "递归遍历所有节点 O(n)，递归深度 n 层，调用栈空间 O(n)。"
        }
    ],
    "dsa-w2-2": [
        {
            id: "dsa-w2-2-q1",
            question: "双向链表相比单向链表的优势是？",
            options: [
                "空间更小",
                "可以 O(1) 删除当前节点",
                "遍历更快",
                "实现更简单"
            ],
            answer: 1,
            rationale: "双向链表可以直接访问前驱节点，无需遍历即可删除当前节点 O(1)。"
        },
        {
            id: "dsa-w2-2-q2",
            question: "Floyd 环检测算法中，快指针和慢指针的步长分别是？",
            options: ["1 和 2", "2 和 1", "3 和 1", "2 和 2"],
            answer: 1,
            rationale: "快指针每次走 2 步，慢指针每次走 1 步。如果有环，两者必然相遇。"
        },
        {
            id: "dsa-w2-2-q3",
            question: "快慢指针在有环链表中为什么必然相遇？",
            options: [
                "因为快指针会停下等待",
                "因为在环中每次相对距离减少 1",
                "因为环的长度固定",
                "因为慢指针会跳过某些节点"
            ],
            answer: 1,
            rationale: "进入环后，快指针每次多走 1 步，相对距离减少 1，最终距离变为 0（相遇）。"
        },
        {
            id: "dsa-w2-2-q4",
            question: "找到环的入口节点的方法是？",
            options: [
                "继续用快慢指针",
                "相遇后，一个指针回到起点，两指针同速前进直到相遇",
                "计算环的长度后定位",
                "重新遍历链表"
            ],
            answer: 1,
            rationale: "相遇后将一个指针移回起点，两指针都每次走 1 步，再次相遇点即为环入口。"
        },
        {
            id: "dsa-w2-2-q5",
            question: "LRU 缓存使用的数据结构是？",
            options: [
                "数组 + 栈",
                "双向链表 + 哈希表",
                "单向链表 + 队列",
                "二叉树 + 数组"
            ],
            answer: 1,
            rationale: "双向链表维护访问顺序，哈希表提供 O(1) 查找，两者结合实现 O(1) 的 get/put。"
        },
        {
            id: "dsa-w2-2-q6",
            question: "LRU 缓存中，访问一个已存在的 key 需要做什么？",
            options: [
                "什么都不做",
                "将对应节点移到链表头部",
                "将对应节点移到链表尾部",
                "删除该节点"
            ],
            answer: 1,
            rationale: "访问后该 key 成为最近使用的，需要移到链表头部（最近端）。"
        },
        {
            id: "dsa-w2-2-q7",
            question: "双向链表插入节点需要修改几个指针？",
            options: ["2 个", "3 个", "4 个", "5 个"],
            answer: 2,
            rationale: "新节点的 prev 和 next，前驱节点的 next，后继节点的 prev，共 4 个指针。"
        },
        {
            id: "dsa-w2-2-q8",
            question: "环形链表的特点是？",
            options: [
                "只能单向遍历",
                "尾节点的 next 指向链表中的某个节点",
                "所有节点都是头节点",
                "长度固定不变"
            ],
            answer: 1,
            rationale: "环形链表的尾节点 next 不是 null，而是指向链表中的某个节点（可能是头节点）。"
        },
        {
            id: "dsa-w2-2-q9",
            question: "LRU 缓存容量满时，应该删除哪个节点？",
            options: [
                "链表头部（最近使用）",
                "链表尾部（最久未使用）",
                "随机节点",
                "中间节点"
            ],
            answer: 1,
            rationale: "LRU 删除最久未使用的节点，即链表尾部的节点。"
        },
        {
            id: "dsa-w2-2-q10",
            question: "计算环形链表的环长度的方法是？",
            options: [
                "无法计算",
                "快慢指针相遇后，固定一个指针，另一个继续走直到再次相遇，计数步数",
                "遍历整个链表计数",
                "使用哈希表记录"
            ],
            answer: 1,
            rationale: "相遇后固定一个指针，另一个继续走一圈回到相遇点，步数即为环长。"
        },
        {
            id: "dsa-w2-2-q11",
            question: "双向链表中删除当前节点的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 0,
            rationale: "可以直接访问 prev 和 next，修改指针即可，O(1) 时间。"
        },
        {
            id: "dsa-w2-2-q12",
            question: "为什么 LRU 用双向链表而不是单向链表？",
            options: [
                "双向链表更快",
                "需要快速删除任意节点，双向链表可以 O(1) 访问前驱",
                "单向链表无法实现 LRU",
                "双向链表占用空间更小"
            ],
            answer: 1,
            rationale: "LRU 需要将访问的节点移到头部，涉及删除操作，双向链表能 O(1) 完成。"
        }
    ],
    "dsa-w2-3": [
        {
            id: "dsa-w2-3-q1",
            question: "栈的特点是？",
            options: ["先进先出", "后进先出", "随机访问", "优先级出队"],
            answer: 1,
            rationale: "栈是后进先出（LIFO），最后入栈的元素最先出栈。"
        },
        {
            id: "dsa-w2-3-q2",
            question: "栈的 push 和 pop 操作的时间复杂度是？",
            options: ["O(1) 和 O(1)", "O(1) 和 O(n)", "O(n) 和 O(1)", "O(n) 和 O(n)"],
            answer: 0,
            rationale: "栈只在一端操作，push 和 pop 都是 O(1)。"
        },
        {
            id: "dsa-w2-3-q3",
            question: "括号匹配问题中，遇到右括号时应该？",
            options: [
                "直接入栈",
                "检查栈顶是否为对应的左括号",
                "清空栈",
                "忽略"
            ],
            answer: 1,
            rationale: "右括号需要与栈顶的左括号匹配，匹配成功则弹出栈顶，否则不匹配。"
        },
        {
            id: "dsa-w2-3-q4",
            question: "单调递减栈用于解决什么问题？",
            options: [
                "查找最小元素",
                "查找下一个更大的元素",
                "排序",
                "括号匹配"
            ],
            answer: 1,
            rationale: "单调递减栈维护递减序列，当新元素更大时弹出栈顶，栈顶元素的下一个更大元素就是当前元素。"
        },
        {
            id: "dsa-w2-3-q5",
            question: "函数调用为什么使用栈？",
            options: [
                "栈更快",
                "函数调用满足后进先出（最后调用的最先返回）",
                "栈占用空间小",
                "栈支持递归"
            ],
            answer: 1,
            rationale: "嵌套调用的函数需要先返回内层再返回外层，符合 LIFO 特性。"
        },
        {
            id: "dsa-w2-3-q6",
            question: "用两个栈实现队列时，出队操作的摊销时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 0,
            rationale: "虽然最坏情况需要 O(n) 转移元素，但每个元素最多被转移一次，摊销 O(1)。"
        },
        {
            id: "dsa-w2-3-q7",
            question: "逆波兰表达式（后缀表达式）求值时，遇到运算符应该？",
            options: [
                "入栈",
                "弹出两个操作数，计算后结果入栈",
                "清空栈",
                "忽略"
            ],
            answer: 1,
            rationale: "后缀表达式中，遇到运算符时弹出栈顶两个操作数进行运算，结果压回栈中。"
        },
        {
            id: "dsa-w2-3-q8",
            question: "单调栈解决「每日温度」问题的时间复杂度是？",
            options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
            answer: 2,
            rationale: "每个元素最多入栈出栈各一次，总时间 O(n)。"
        },
        {
            id: "dsa-w2-3-q9",
            question: "栈溢出通常发生在什么情况？",
            options: [
                "栈为空时 pop",
                "递归过深",
                "push 次数太少",
                "数据类型不匹配"
            ],
            answer: 1,
            rationale: "递归调用太深会耗尽调用栈空间，导致栈溢出错误。"
        },
        {
            id: "dsa-w2-3-q10",
            question: "中缀表达式转后缀表达式需要？",
            options: [
                "两个栈",
                "一个运算符栈和一个输出队列",
                "只需要一个队列",
                "不需要额外空间"
            ],
            answer: 1,
            rationale: "使用运算符栈处理优先级，输出队列（或列表）保存后缀表达式结果。"
        },
        {
            id: "dsa-w2-3-q11",
            question: "单调栈中，什么时候需要弹出栈顶元素？",
            options: [
                "栈为空时",
                "当前元素破坏单调性时",
                "遇到特殊元素时",
                "每次都弹出"
            ],
            answer: 1,
            rationale: "当新元素破坏栈的单调性时，弹出栈顶直到满足单调性或栈空。"
        },
        {
            id: "dsa-w2-3-q12",
            question: "用链表实现栈时，应该在哪端操作？",
            options: [
                "只能在头部",
                "只能在尾部",
                "头部（push/pop 都 O(1)）",
                "尾部（需要遍历）"
            ],
            answer: 2,
            rationale: "链表在头部插入删除都是 O(1)，作为栈顶最合适。"
        }
    ],
    "dsa-w2-4": [
        {
            id: "dsa-w2-4-q1",
            question: "队列的特点是？",
            options: ["后进先出", "先进先出", "随机访问", "优先级出队"],
            answer: 1,
            rationale: "队列是先进先出（FIFO），最先入队的元素最先出队。"
        },
        {
            id: "dsa-w2-4-q2",
            question: "循环队列的主要优势是？",
            options: [
                "实现更简单",
                "避免假溢出，充分利用数组空间",
                "支持优先级",
                "可以随机访问"
            ],
            answer: 1,
            rationale: "普通数组队列会产生假溢出，循环队列通过取模操作循环利用空间。"
        },
        {
            id: "dsa-w2-4-q3",
            question: "循环队列判断队满的条件是？（牺牲一个空间）",
            options: [
                "front == rear",
                "(rear + 1) % size == front",
                "rear == size - 1",
                "front == 0"
            ],
            answer: 1,
            rationale: "牺牲一个空间时，rear 的下一个位置是 front 表示队满。"
        },
        {
            id: "dsa-w2-4-q4",
            question: "BFS 为什么能找到最短路径？",
            options: [
                "BFS 使用栈",
                "BFS 逐层扩展，先到达的节点距离更近",
                "BFS 会回溯",
                "BFS 使用优先队列"
            ],
            answer: 1,
            rationale: "BFS 从起点逐层向外扩展，第一次到达某节点时一定是最短路径。"
        },
        {
            id: "dsa-w2-4-q5",
            question: "双端队列（Deque）支持的操作是？",
            options: [
                "只能头部插入删除",
                "只能尾部插入删除",
                "两端都可以插入删除",
                "只能中间插入删除"
            ],
            answer: 2,
            rationale: "Deque（Double-ended Queue）两端都可以 O(1) 插入和删除。"
        },
        {
            id: "dsa-w2-4-q6",
            question: "单调队列用于解决什么问题？",
            options: [
                "括号匹配",
                "滑动窗口最大值",
                "表达式求值",
                "图的遍历"
            ],
            answer: 1,
            rationale: "单调队列维护窗口内的单调序列，队头始终是当前窗口的最大（或最小）值。"
        },
        {
            id: "dsa-w2-4-q7",
            question: "用两个队列实现栈，push 操作的时间复杂度是？",
            options: [
                "O(1)",
                "O(n)",
                "O(log n)",
                "取决于实现方式"
            ],
            answer: 3,
            rationale: "有两种实现：push 代价 O(n) pop 代价 O(1)，或 push 代价 O(1) pop 代价 O(n)。"
        },
        {
            id: "dsa-w2-4-q8",
            question: "层序遍历二叉树需要区分层次时，常用的方法是？",
            options: [
                "使用栈",
                "记录当前层的节点数",
                "递归实现",
                "使用优先队列"
            ],
            answer: 1,
            rationale: "记录当前层节点数，出队这么多节点后进入下一层。也可以用 null 分隔。"
        },
        {
            id: "dsa-w2-4-q9",
            question: "单调递减队列中，新元素入队时需要？",
            options: [
                "直接入队尾",
                "从队尾移除所有比新元素小的元素，然后入队",
                "从队头移除元素",
                "清空队列"
            ],
            answer: 1,
            rationale: "维护单调递减性，新元素入队前从队尾移除所有比它小的元素。"
        },
        {
            id: "dsa-w2-4-q10",
            question: "多源 BFS 的应用场景是？",
            options: [
                "单一起点到单一终点",
                "多个起点同时向外扩展",
                "深度优先搜索",
                "排序"
            ],
            answer: 1,
            rationale: "多源 BFS 用于多个起点同时开始的最短距离问题，如求每个点到最近源的距离。"
        },
        {
            id: "dsa-w2-4-q11",
            question: "循环队列中 front 和 rear 的初始值通常是？",
            options: [
                "front = 0, rear = 0",
                "front = 0, rear = -1",
                "front = -1, rear = 0",
                "front = 1, rear = 1"
            ],
            answer: 0,
            rationale: "通常初始化为 front = rear = 0，此时队列为空。"
        },
        {
            id: "dsa-w2-4-q12",
            question: "滑动窗口最大值问题中，单调队列存储的是？",
            options: [
                "元素值",
                "元素索引",
                "元素值和索引都可以",
                "元素计数"
            ],
            answer: 1,
            rationale: "存储索引可以判断队头元素是否在窗口内（索引差 >= k 时出队）。"
        }
    ]
}
