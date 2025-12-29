import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "dsa-w4-1": {
        lessonId: "dsa-w4-1",
        background: [
            "【树的定义】树是由节点组成的非线性数据结构，有一个根节点，其余节点通过边连接形成层次结构。每个节点最多有一个父节点，可以有多个子节点。",
            "【基本术语】根(root)：没有父节点的节点；叶(leaf)：没有子节点的节点；深度(depth)：从根到该节点的边数；高度(height)：从该节点到最远叶节点的边数；子树(subtree)：以某节点为根的树。",
            "【N 叉树】每个节点最多有 N 个子节点。二叉树是 N=2 的特例。N 叉树常用数组存储子节点：children = [child1, child2, ...]。",
            "【树的表示】链式存储：每个节点包含值和指向子节点的指针/引用；数组存储（完全二叉树）：节点 i 的左子节点在 2i+1，右子节点在 2i+2，父节点在 (i-1)/2。",
            "【树的应用】文件系统、DOM 树、组织架构、决策树、表达式树、数据库索引（B 树）、内存管理（堆）等。"
        ],
        keyDifficulties: [
            "【深度 vs 高度】深度从根往下数（根的深度为 0），高度从叶往上数（叶的高度为 0）。树的高度 = 根的高度 = 最大深度。",
            "【完全二叉树 vs 满二叉树】完全二叉树：除最后一层外每层都满，最后一层从左到右填充；满二叉树：所有叶节点在同一层，每个非叶节点都有两个子节点。",
            "【递归思维】树的大部分问题可以分解为「根 + 左子树 + 右子树」。递归三要素：终止条件（空节点）、处理当前节点、递归处理子节点。",
            "【边界条件】空树（root = null）、单节点树、只有左子树或右子树的倾斜树，都需要考虑。"
        ],
        handsOnPath: [
            "定义二叉树节点类 TreeNode，包含 val、left、right",
            "手动构建一棵二叉树，练习插入、查找操作",
            "用 Visualgo 可视化观察树的结构",
            "练习 LeetCode 559「N 叉树的最大深度」",
            "实现计算树的节点数、叶节点数的函数"
        ],
        selfCheck: [
            "树和图的主要区别是什么？",
            "如何用数组存储完全二叉树？索引关系是什么？",
            "一棵有 n 个节点的树有多少条边？",
            "什么是平衡二叉树？为什么平衡很重要？",
            "深度为 d 的完全二叉树最少和最多有多少个节点？"
        ],
        extensions: [
            "了解 B 树和 B+ 树在数据库索引中的应用",
            "研究 Trie 树（字典树）的结构和用途",
            "探索线段树和树状数组",
            "学习树的序列化和反序列化"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/detail/data-structure-binary-tree/",
            "https://visualgo.net/en/bst",
            "https://leetcode.cn/problems/n-ary-tree-preorder-traversal/"
        ]
    },
    "dsa-w4-2": {
        lessonId: "dsa-w4-2",
        background: [
            "【四种遍历方式】前序(preorder)：根-左-右；中序(inorder)：左-根-右；后序(postorder)：左-右-根；层序(level-order)：逐层从左到右。前三种是 DFS，层序是 BFS。",
            "【递归实现】遍历的递归代码极其简洁。前序：访问根，递归左子树，递归右子树。只需调整访问根的位置即可切换遍历方式。",
            "【迭代实现】用显式栈模拟递归。前序最简单（先右后左入栈），中序需要先走到最左再回溯，后序最复杂（可用双栈或标记法）。",
            "【层序遍历】用队列实现。根入队，然后循环：出队一个节点，处理它，将其子节点入队。如需区分层次，记录每层节点数或用 null 分隔。",
            "【Morris 遍历】O(1) 空间的中序遍历。利用空闲的 right 指针指向中序后继，遍历完再恢复。时间 O(n)，空间 O(1)。"
        ],
        keyDifficulties: [
            "【迭代中序的细节】不是简单的左入栈右入栈。需要用 cur 指针从根走到最左，边走边入栈；到底后弹出访问，然后转向右子树继续。",
            "【后序迭代】方法一：前序的左右顺序交换（根-右-左），结果逆序即为后序；方法二：用标记记录节点是否访问过右子树。",
            "【统一迭代模板】用 null 标记待处理节点。每次弹出时，非空则按相反顺序入栈（后序入 根-右-左），遇到 null 则处理下一个节点。",
            "【Morris 遍历的恢复】遍历过程中修改了树的结构，必须在第二次访问节点时恢复原来的 right 指针，否则树会被破坏。"
        ],
        handsOnPath: [
            "分别实现前序、中序、后序的递归和迭代版本",
            "练习 LeetCode 94「二叉树的中序遍历」",
            "练习 LeetCode 102「二叉树的层序遍历」",
            "实现 Morris 中序遍历",
            "通过前序 + 中序序列重建二叉树"
        ],
        selfCheck: [
            "前序、中序、后序遍历的顺序分别是什么？",
            "迭代中序遍历时，cur 指针的移动规则是什么？",
            "如何在层序遍历中区分不同层的节点？",
            "Morris 遍历为什么可以做到 O(1) 空间？",
            "给定前序和中序序列，如何唯一确定一棵二叉树？"
        ],
        extensions: [
            "研究「垂直遍历」和「锯齿形层序遍历」",
            "了解「线索二叉树」的概念",
            "探索遍历在表达式树求值中的应用",
            "学习树的直径、路径和等问题"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/read/data-structure-binary-tree/xe17x7/",
            "https://leetcode.cn/problems/binary-tree-inorder-traversal/solutions/412886/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/",
            "https://leetcode.cn/problems/binary-tree-preorder-traversal/solutions/461821/er-cha-shu-de-qian-xu-bian-li-by-leetcode-solution/"
        ]
    },
    "dsa-w4-3": {
        lessonId: "dsa-w4-3",
        background: [
            "【BST 定义】二叉搜索树（BST）满足：左子树所有节点的值 < 根节点的值 < 右子树所有节点的值。中序遍历结果是升序的。",
            "【查找操作】从根开始，目标小于当前值则走左子树，大于则走右子树，等于则找到。时间复杂度 O(h)，h 为树高。",
            "【插入操作】按查找路径走到空位置，插入新节点。时间 O(h)。插入顺序影响树的形状。",
            "【删除操作】三种情况：叶节点直接删除；只有一个子节点用子节点替代；两个子节点用中序后继（或前驱）替代，然后删除后继。",
            "【中序后继】节点的中序后继是中序遍历中的下一个节点。若有右子树，后继是右子树的最左节点；若无右子树，后继是第一个「作为左子树」的祖先。"
        ],
        keyDifficulties: [
            "【删除两个子节点的情况】用中序后继值覆盖当前节点，然后删除后继节点（后继最多只有右子树）。也可以用中序前驱。",
            "【BST 退化】如果按升序或降序插入，BST 退化为链表，高度为 n，操作变成 O(n)。这是为什么需要自平衡树的原因。",
            "【验证 BST】不能只检查 node.left.val < node.val < node.right.val，要确保左子树所有值都小于根。用上下界递归或中序遍历判断。",
            "【范围搜索】找所有在 [low, high] 范围内的值。利用 BST 性质剪枝：当前值 < low 时只搜右子树，当前值 > high 时只搜左子树。"
        ],
        handsOnPath: [
            "实现 BST 的查找、插入、删除操作",
            "练习 LeetCode 98「验证二叉搜索树」",
            "练习 LeetCode 450「删除二叉搜索树中的节点」",
            "练习 LeetCode 230「二叉搜索树中第 K 小的元素」",
            "实现 BST 的范围搜索"
        ],
        selfCheck: [
            "BST 的中序遍历有什么特点？",
            "BST 查找的时间复杂度取决于什么？",
            "删除有两个子节点的节点时，为什么用中序后继替代？",
            "如何判断一棵二叉树是否是 BST？",
            "BST 在什么情况下会退化为链表？"
        ],
        extensions: [
            "学习 AVL 树和红黑树的自平衡机制",
            "了解 Splay 树的自调整策略",
            "研究 BST 在数据库索引中的应用",
            "探索 Treap（树堆）的随机平衡"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/read/introduction-to-data-structure-binary-search-tree/xp6kh3/",
            "https://leetcode.cn/problems/validate-binary-search-tree/",
            "https://leetcode.cn/problems/delete-node-in-a-bst/"
        ]
    },
    "dsa-w4-4": {
        lessonId: "dsa-w4-4",
        background: [
            "【最大深度】树的最大深度 = 根到最远叶节点的边数。递归：max(左子树深度, 右子树深度) + 1。空节点深度为 0（或 -1，取决于定义）。",
            "【路径总和】判断是否存在根到叶路径使得节点值之和等于目标。递归时减去当前值，到叶节点检查剩余是否为 0。",
            "【最近公共祖先(LCA)】两个节点的最近公共祖先是同时拥有这两个节点作为后代的最深节点。如果 p、q 分别在左右子树，则当前节点是 LCA。",
            "【二叉树直径】任意两节点间的最长路径。不一定过根。对每个节点，经过它的最长路径 = 左子树高度 + 右子树高度。答案是所有节点中的最大值。",
            "【对称二叉树】左子树和右子树镜像对称。递归检查：左左和右右对称，且左右和右左对称。"
        ],
        keyDifficulties: [
            "【路径的定义】「根到叶路径」必须到叶节点结束；「任意路径」可以在任意节点开始结束；「向下路径」必须从祖先到后代。不同问题定义不同。",
            "【LCA 的边界情况】p 或 q 可能是另一个的祖先，此时 p 或 q 本身就是 LCA。递归时要先检查当前节点是否是 p 或 q。",
            "【直径计算的技巧】计算直径时需要同时返回两个值：以当前节点为根的最大高度（用于父节点计算）和经过当前节点的最长路径（更新全局答案）。可以用全局变量或引用参数。",
            "【深度 vs 高度】最大深度题目中，有时从 0 开始数，有时从 1 开始。要根据题目定义选择终止条件。"
        ],
        handsOnPath: [
            "练习 LeetCode 104「二叉树的最大深度」",
            "练习 LeetCode 112「路径总和」和 113「路径总和 II」",
            "练习 LeetCode 236「二叉树的最近公共祖先」",
            "练习 LeetCode 543「二叉树的直径」",
            "练习 LeetCode 101「对称二叉树」"
        ],
        selfCheck: [
            "如何用递归计算二叉树的最大深度？",
            "路径总和问题中，如何确定到达了叶节点？",
            "LCA 问题的递归返回值代表什么含义？",
            "计算直径时，为什么要用全局变量记录最大值？",
            "判断对称二叉树时，比较的是哪些节点？"
        ],
        extensions: [
            "研究「二叉树中的最大路径和」（可以任意起止）",
            "了解「二叉树的右视图」问题",
            "探索「从先序遍历还原二叉树」",
            "学习「二叉树的序列化与反序列化」"
        ],
        sourceUrls: [
            "https://leetcode.cn/problems/maximum-depth-of-binary-tree/",
            "https://leetcode.cn/problems/path-sum/",
            "https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "dsa-w4-1": [
        {
            id: "dsa-w4-1-q1",
            question: "树的根节点有什么特点？",
            options: ["有两个父节点", "没有父节点", "没有子节点", "是叶节点"],
            answer: 1,
            rationale: "根节点是树的顶端，没有父节点，其他所有节点都是它的后代。"
        },
        {
            id: "dsa-w4-1-q2",
            question: "叶节点的定义是？",
            options: ["有两个子节点", "只有左子节点", "没有子节点", "没有父节点"],
            answer: 2,
            rationale: "叶节点（叶子）是没有子节点的节点，位于树的最底层。"
        },
        {
            id: "dsa-w4-1-q3",
            question: "节点的深度是指？",
            options: ["到根的边数", "到最远叶的边数", "子节点数量", "子树节点数"],
            answer: 0,
            rationale: "深度是从根到该节点经过的边数，根的深度为 0。"
        },
        {
            id: "dsa-w4-1-q4",
            question: "一棵有 n 个节点的树有多少条边？",
            options: ["n", "n-1", "n+1", "2n"],
            answer: 1,
            rationale: "除根节点外，每个节点有一条边连接到父节点，共 n-1 条边。"
        },
        {
            id: "dsa-w4-1-q5",
            question: "完全二叉树用数组存储时，节点 i 的左子节点索引是？",
            options: ["i+1", "2i", "2i+1", "i/2"],
            answer: 2,
            rationale: "从 0 开始编号时，节点 i 的左子节点在 2i+1，右子节点在 2i+2。"
        },
        {
            id: "dsa-w4-1-q6",
            question: "满二叉树的特点是？",
            options: [
                "所有非叶节点都有两个子节点，所有叶在同一层",
                "最后一层从左到右填充",
                "只有左子节点",
                "高度为 n 的树有 n 个节点"
            ],
            answer: 0,
            rationale: "满二叉树每层都满，所有叶节点在最后一层，非叶节点都有两个子节点。"
        },
        {
            id: "dsa-w4-1-q7",
            question: "N 叉树中，每个节点最多有？",
            options: ["2 个子节点", "N 个子节点", "1 个子节点", "无限个子节点"],
            answer: 1,
            rationale: "N 叉树中每个节点最多有 N 个子节点，二叉树是 N=2 的特例。"
        },
        {
            id: "dsa-w4-1-q8",
            question: "树和图的主要区别是？",
            options: [
                "树是有向的，图是无向的",
                "树没有环，且有唯一根节点",
                "树的节点更多",
                "图不能用递归处理"
            ],
            answer: 1,
            rationale: "树是一种特殊的图，无环且有唯一根节点，每个节点只有一个父节点（除根外）。"
        },
        {
            id: "dsa-w4-1-q9",
            question: "深度为 d 的完全二叉树最多有多少个节点？",
            options: ["d", "2^d", "2^(d+1) - 1", "2^d - 1"],
            answer: 2,
            rationale: "满二叉树节点数最多，深度 d 时有 1+2+4+...+2^d = 2^(d+1) - 1 个节点。"
        },
        {
            id: "dsa-w4-1-q10",
            question: "二叉树的高度定义是？",
            options: [
                "节点总数",
                "从根到最远叶的边数",
                "叶节点数",
                "根节点的深度"
            ],
            answer: 1,
            rationale: "树的高度是从根到最远叶节点的边数，也等于根节点的高度。"
        },
        {
            id: "dsa-w4-1-q11",
            question: "以下哪个不是树的应用？",
            options: ["文件系统", "DOM 结构", "哈希表", "决策树"],
            answer: 2,
            rationale: "哈希表基于数组和链表，不是树结构。文件系统、DOM、决策树都是树的应用。"
        },
        {
            id: "dsa-w4-1-q12",
            question: "平衡二叉树的主要优势是？",
            options: [
                "节省空间",
                "保证操作的时间复杂度为 O(log n)",
                "实现简单",
                "支持更多子节点"
            ],
            answer: 1,
            rationale: "平衡树保证高度为 O(log n)，使查找、插入、删除都是 O(log n)。"
        }
    ],
    "dsa-w4-2": [
        {
            id: "dsa-w4-2-q1",
            question: "前序遍历的顺序是？",
            options: ["左-根-右", "根-左-右", "左-右-根", "根-右-左"],
            answer: 1,
            rationale: "前序遍历：先访问根，再递归遍历左子树，最后右子树。"
        },
        {
            id: "dsa-w4-2-q2",
            question: "中序遍历的顺序是？",
            options: ["左-根-右", "根-左-右", "左-右-根", "根-右-左"],
            answer: 0,
            rationale: "中序遍历：先递归遍历左子树，再访问根，最后右子树。"
        },
        {
            id: "dsa-w4-2-q3",
            question: "后序遍历的顺序是？",
            options: ["左-根-右", "根-左-右", "左-右-根", "根-右-左"],
            answer: 2,
            rationale: "后序遍历：先递归遍历左子树，再右子树，最后访问根。"
        },
        {
            id: "dsa-w4-2-q4",
            question: "层序遍历使用的数据结构是？",
            options: ["栈", "队列", "堆", "哈希表"],
            answer: 1,
            rationale: "层序遍历逐层访问，用队列实现 FIFO 的访问顺序。"
        },
        {
            id: "dsa-w4-2-q5",
            question: "迭代前序遍历时，为什么先将右子节点入栈？",
            options: [
                "右子节点更重要",
                "保证左子节点先出栈被访问",
                "减少栈的使用",
                "没有特殊原因"
            ],
            answer: 1,
            rationale: "栈是 LIFO，先入后出。先右后左入栈，保证左子节点先出栈。"
        },
        {
            id: "dsa-w4-2-q6",
            question: "Morris 遍历的空间复杂度是？",
            options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
            answer: 2,
            rationale: "Morris 遍历利用空闲指针，不使用栈，空间复杂度 O(1)。"
        },
        {
            id: "dsa-w4-2-q7",
            question: "前序 + 中序可以唯一确定一棵二叉树吗？",
            options: ["是", "否", "只有特殊情况可以", "需要后序"],
            answer: 0,
            rationale: "前序确定根，中序划分左右子树，递归即可重建。需要节点值不重复。"
        },
        {
            id: "dsa-w4-2-q8",
            question: "层序遍历如何区分不同层？",
            options: [
                "无法区分",
                "记录每层的节点数或用 null 分隔",
                "使用栈",
                "使用递归"
            ],
            answer: 1,
            rationale: "可以记录当前层节点数，出队这么多个后进入下一层，或用 null 分隔层。"
        },
        {
            id: "dsa-w4-2-q9",
            question: "迭代中序遍历的关键是？",
            options: [
                "先将所有节点入栈",
                "先走到最左，边走边入栈，回溯时处理",
                "使用两个栈",
                "按层处理"
            ],
            answer: 1,
            rationale: "用指针从根走到最左入栈，弹出处理后转向右子树，重复。"
        },
        {
            id: "dsa-w4-2-q10",
            question: "BST 的中序遍历结果是？",
            options: ["随机顺序", "升序", "降序", "取决于树的形状"],
            answer: 1,
            rationale: "BST 左 < 根 < 右，中序（左-根-右）遍历结果是升序。"
        },
        {
            id: "dsa-w4-2-q11",
            question: "二叉树遍历的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 2,
            rationale: "遍历访问每个节点恰好一次，时间 O(n)。"
        },
        {
            id: "dsa-w4-2-q12",
            question: "后序遍历的一个应用是？",
            options: [
                "表达式求值",
                "复制二叉树",
                "删除二叉树（先删除子节点再删根）",
                "以上都是"
            ],
            answer: 3,
            rationale: "后序遍历先处理子节点后处理根，适合需要先处理子树再处理根的场景。"
        }
    ],
    "dsa-w4-3": [
        {
            id: "dsa-w4-3-q1",
            question: "BST 的定义是？",
            options: [
                "左子树 > 根 > 右子树",
                "左子树 < 根 < 右子树",
                "所有左节点 < 所有右节点",
                "根是最大值"
            ],
            answer: 1,
            rationale: "BST：左子树所有值 < 根 < 右子树所有值，支持高效查找。"
        },
        {
            id: "dsa-w4-3-q2",
            question: "在 BST 中查找元素的时间复杂度是？",
            options: ["O(1)", "O(log n) 平均，O(n) 最坏", "O(n)", "O(n log n)"],
            answer: 1,
            rationale: "平衡时高度 O(log n)，退化为链表时 O(n)。"
        },
        {
            id: "dsa-w4-3-q3",
            question: "BST 插入操作的时间复杂度是？",
            options: ["O(1)", "O(log n) 到 O(n)", "O(n)", "O(n²)"],
            answer: 1,
            rationale: "插入需要查找位置，时间取决于树高，O(log n) 到 O(n)。"
        },
        {
            id: "dsa-w4-3-q4",
            question: "删除有两个子节点的 BST 节点时，通常用什么替代？",
            options: [
                "左子节点",
                "右子节点",
                "中序后继或前驱",
                "任意节点"
            ],
            answer: 2,
            rationale: "用中序后继（右子树最小）或中序前驱（左子树最大）替代，保持 BST 性质。"
        },
        {
            id: "dsa-w4-3-q5",
            question: "BST 的中序后继是？",
            options: [
                "父节点",
                "右子节点",
                "中序遍历的下一个节点",
                "左子树最大节点"
            ],
            answer: 2,
            rationale: "中序后继是中序遍历中当前节点的下一个节点。"
        },
        {
            id: "dsa-w4-3-q6",
            question: "验证 BST 时，不能只检查什么？",
            options: [
                "根节点值",
                "node.left.val < node.val < node.right.val",
                "所有节点",
                "叶节点"
            ],
            answer: 1,
            rationale: "必须确保左子树所有值都小于根，不只是直接左子节点。"
        },
        {
            id: "dsa-w4-3-q7",
            question: "BST 什么情况下会退化为链表？",
            options: [
                "随机插入",
                "按升序或降序插入",
                "频繁删除",
                "不会退化"
            ],
            answer: 1,
            rationale: "按顺序插入时，每个新节点都成为最右（或最左）子节点，形成链表。"
        },
        {
            id: "dsa-w4-3-q8",
            question: "如果节点没有右子树，它的中序后继是？",
            options: [
                "不存在",
                "父节点",
                "第一个作为左子树的祖先",
                "根节点"
            ],
            answer: 2,
            rationale: "向上走到第一个当前节点在其左子树中的祖先，该祖先就是后继。"
        },
        {
            id: "dsa-w4-3-q9",
            question: "BST 的第 K 小元素可以通过什么方式找到？",
            options: [
                "前序遍历第 K 个",
                "中序遍历第 K 个",
                "后序遍历第 K 个",
                "层序遍历第 K 个"
            ],
            answer: 1,
            rationale: "BST 中序遍历是升序，第 K 个访问的元素就是第 K 小。"
        },
        {
            id: "dsa-w4-3-q10",
            question: "BST 范围搜索 [low, high] 的时间复杂度是？",
            options: ["O(n)", "O(log n + k)，k 是结果数", "O(log n)", "O(k)"],
            answer: 1,
            rationale: "O(log n) 定位起点，O(k) 收集范围内的元素。"
        },
        {
            id: "dsa-w4-3-q11",
            question: "以下哪种树可以保证 BST 的操作都是 O(log n)？",
            options: [
                "普通二叉树",
                "链表",
                "AVL 树或红黑树",
                "N 叉树"
            ],
            answer: 2,
            rationale: "AVL 树和红黑树是自平衡 BST，保证树高 O(log n)。"
        },
        {
            id: "dsa-w4-3-q12",
            question: "删除 BST 叶节点的操作是？",
            options: [
                "找到替代节点",
                "直接删除，父节点指向 null",
                "用子节点替代",
                "无法删除"
            ],
            answer: 1,
            rationale: "叶节点没有子节点，直接让父节点的对应指针指向 null。"
        }
    ],
    "dsa-w4-4": [
        {
            id: "dsa-w4-4-q1",
            question: "计算二叉树最大深度的递归公式是？",
            options: [
                "左深度 + 右深度",
                "max(左深度, 右深度) + 1",
                "min(左深度, 右深度)",
                "左深度 × 右深度"
            ],
            answer: 1,
            rationale: "最大深度 = 左右子树最大深度的较大值 + 1（当前层）。"
        },
        {
            id: "dsa-w4-4-q2",
            question: "路径总和问题中，到达叶节点时检查的条件是？",
            options: [
                "sum == target",
                "sum == 0（target 已递减）",
                "node.val == target",
                "左右子树相等"
            ],
            answer: 1,
            rationale: "递归时减去当前值，到叶节点时检查剩余目标是否为 0。"
        },
        {
            id: "dsa-w4-4-q3",
            question: "最近公共祖先(LCA)的定义是？",
            options: [
                "两节点中深度更浅的那个",
                "同时是两节点祖先的最深节点",
                "根节点",
                "两节点的父节点"
            ],
            answer: 1,
            rationale: "LCA 是同时拥有 p 和 q 作为后代的最深节点。"
        },
        {
            id: "dsa-w4-4-q4",
            question: "LCA 问题中，如果 p 在左子树、q 在右子树，LCA 是？",
            options: [
                "p",
                "q",
                "当前节点",
                "根节点"
            ],
            answer: 2,
            rationale: "p 和 q 分布在当前节点两侧，当前节点就是 LCA。"
        },
        {
            id: "dsa-w4-4-q5",
            question: "二叉树的直径定义是？",
            options: [
                "根到最远叶的距离",
                "任意两节点间的最长路径",
                "最大深度",
                "节点数"
            ],
            answer: 1,
            rationale: "直径是任意两节点间经过边数最多的路径，不一定过根。"
        },
        {
            id: "dsa-w4-4-q6",
            question: "计算直径时，经过节点 node 的最长路径长度是？",
            options: [
                "左高度 × 右高度",
                "左高度 + 右高度",
                "max(左高度, 右高度)",
                "左高度 - 右高度"
            ],
            answer: 1,
            rationale: "经过 node 的路径 = 左子树高度 + 右子树高度（边数）。"
        },
        {
            id: "dsa-w4-4-q7",
            question: "判断对称二叉树时，比较的是？",
            options: [
                "左子树和左子树",
                "左子树和右子树（镜像位置）",
                "所有节点值相等",
                "深度相等"
            ],
            answer: 1,
            rationale: "对称要求：左左 == 右右，左右 == 右左，即镜像位置节点值相等。"
        },
        {
            id: "dsa-w4-4-q8",
            question: "路径总和中，如何判断当前节点是叶节点？",
            options: [
                "node.val == 0",
                "node.left == null && node.right == null",
                "node 是根",
                "没有父节点"
            ],
            answer: 1,
            rationale: "叶节点的定义是没有左右子节点。"
        },
        {
            id: "dsa-w4-4-q9",
            question: "LCA 问题的时间复杂度是？",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 2,
            rationale: "最坏情况需要遍历所有节点才能确定 LCA，时间 O(n)。"
        },
        {
            id: "dsa-w4-4-q10",
            question: "如果 p 是 q 的祖先，那么 p 和 q 的 LCA 是？",
            options: ["q", "p", "p 的父节点", "根节点"],
            answer: 1,
            rationale: "如果 p 是 q 的祖先，p 自己就是最近公共祖先。"
        },
        {
            id: "dsa-w4-4-q11",
            question: "计算直径为什么常用全局变量记录最大值？",
            options: [
                "递归返回值只能是高度，直径需要额外记录",
                "全局变量更快",
                "减少参数传递",
                "没有特殊原因"
            ],
            answer: 0,
            rationale: "递归返回高度用于计算父节点，但直径是左高+右高，需要单独记录最大值。"
        },
        {
            id: "dsa-w4-4-q12",
            question: "二叉树最大路径和问题中，路径可以？",
            options: [
                "只能从根开始",
                "只能到叶结束",
                "任意节点开始，任意节点结束",
                "必须经过根"
            ],
            answer: 2,
            rationale: "最大路径和的路径可以从任意节点开始到任意节点结束，不要求过根或到叶。"
        }
    ]
}
