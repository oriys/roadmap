import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "dsa-w6-1": {
        lessonId: "dsa-w6-1",
        background: [
            "【图的基本概念】图由顶点(vertex)和边(edge)组成，记为 G = (V, E)。顶点表示实体，边表示实体间的关系。图可以表示社交网络、地图、网页链接等各种关系数据。",
            "【有向图与无向图】无向图的边没有方向，(u, v) 和 (v, u) 等价；有向图的边有方向，从 u 到 v 的边记为 <u, v>。社交网络的「互相关注」是无向图，「单向关注」是有向图。",
            "【加权图】边可以带有权重，表示距离、代价、容量等。地图导航是典型的加权图应用，边权代表道路长度或通行时间。",
            "【邻接矩阵】用 V×V 的二维数组存储，matrix[i][j] 表示顶点 i 到 j 是否有边（或边权）。空间 O(V²)，适合稠密图。判断边存在和更新边是 O(1)，但遍历邻接点需要 O(V)。",
            "【邻接表】每个顶点维护一个链表（或数组），存储其所有邻接点。空间 O(V + E)，适合稀疏图。遍历邻接点是 O(degree)，但判断边存在最坏 O(V)。"
        ],
        keyDifficulties: [
            "【稠密图 vs 稀疏图】稠密图边数接近 V²，用邻接矩阵；稀疏图边数远小于 V²，用邻接表。实际应用中大多数图是稀疏的。",
            "【存储方式的选择】需要快速判断边存在用邻接矩阵；需要遍历邻接点用邻接表；如果两者都需要，可以用哈希表存储邻接关系。",
            "【自环和重边】自环是顶点到自己的边，重边是两顶点间的多条边。简单图不包含自环和重边，处理时要注意检查。",
            "【图的输入处理】算法题常见的输入格式：边列表、邻接矩阵、邻接表。要熟练进行格式转换。"
        ],
        handsOnPath: [
            "实现邻接矩阵表示的图类，支持添加边、删除边、判断边存在",
            "实现邻接表表示的图类，对比两种实现的操作效率",
            "练习从边列表构建邻接表",
            "使用 Visualgo 可视化观察图的两种存储结构",
            "实现将邻接矩阵转换为邻接表的函数"
        ],
        selfCheck: [
            "邻接矩阵和邻接表的空间复杂度分别是？",
            "什么情况下用邻接矩阵更合适？什么情况下用邻接表？",
            "如何在邻接表中判断两个顶点之间是否有边？",
            "有向图和无向图在邻接矩阵中的存储有什么区别？",
            "加权图如何用邻接表表示？"
        ],
        extensions: [
            "了解十字链表和邻接多重表",
            "研究大规模图的压缩存储方法",
            "学习图数据库（如 Neo4j）的存储原理",
            "探索分布式图存储系统"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
            "https://visualgo.net/en/graphds",
            "https://www.baeldung.com/cs/adjacency-matrix-list-complexity"
        ]
    },
    "dsa-w6-2": {
        lessonId: "dsa-w6-2",
        background: [
            "【DFS 的本质】深度优先搜索（DFS）是一种图遍历策略，尽可能深地探索分支，直到无法继续才回溯。可以用递归或显式栈实现。时间 O(V + E)，空间 O(V)。",
            "【递归实现】从起点开始，标记已访问，递归访问所有未访问的邻接点。代码简洁，但深度过大可能栈溢出。",
            "【迭代实现】用栈模拟递归。起点入栈，循环：弹出栈顶，如果未访问则标记并将邻接点入栈。注意迭代版本的访问顺序可能与递归不同。",
            "【DFS 的应用】连通性判断、路径查找、环检测、拓扑排序、强连通分量、二分图判定等。DFS 是解决图问题的基础工具。",
            "【DFS 生成树】DFS 过程中访问的边构成一棵生成树（或森林）。未被访问的边可分为：回边（指向祖先）、前向边（指向后代）、横跨边（指向非祖先非后代）。"
        ],
        keyDifficulties: [
            "【visited 数组的作用】防止重复访问和死循环。无向图中每条边会被两个顶点共享，不标记会导致无限循环。",
            "【前序 vs 后序处理】进入节点时处理是前序（用于路径记录），离开节点时处理是后序（用于拓扑排序）。很多问题需要同时使用。",
            "【有向图的环检测】需要三种状态：未访问（0）、访问中（1）、已完成（2）。遇到状态 1 的节点说明有环（回边）。",
            "【路径回溯】找到目标后如何还原路径？可以用 parent 数组记录每个节点的前驱，或在递归中传递当前路径。"
        ],
        handsOnPath: [
            "实现图的 DFS 递归遍历，打印访问顺序",
            "实现 DFS 迭代版本，对比与递归版本的区别",
            "练习 LeetCode 200「岛屿数量」，用 DFS 找连通分量",
            "练习 LeetCode 46「全排列」，理解 DFS 与回溯的关系",
            "实现有向图的环检测算法"
        ],
        selfCheck: [
            "DFS 的时间和空间复杂度分别是？",
            "为什么 DFS 需要 visited 数组？",
            "递归 DFS 和迭代 DFS 的访问顺序一定相同吗？",
            "如何用 DFS 检测有向图中的环？",
            "DFS 和回溯算法有什么关系？"
        ],
        extensions: [
            "研究 Tarjan 强连通分量算法",
            "学习割点和桥的求解方法",
            "了解 DFS 在游戏 AI（如迷宫生成）中的应用",
            "探索双向 DFS 优化搜索效率"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/read/queue-stack/gwcw3/",
            "https://leetcode.cn/problems/number-of-islands/",
            "https://leetcode.cn/problems/permutations/"
        ]
    },
    "dsa-w6-3": {
        lessonId: "dsa-w6-3",
        background: [
            "【BFS 的本质】广度优先搜索（BFS）是一种图遍历策略，先访问所有距离为 1 的节点，再访问距离为 2 的节点，以此类推。用队列实现。时间 O(V + E)，空间 O(V)。",
            "【队列实现】起点入队，循环：出队一个节点，将其未访问的邻接点标记并入队。天然按层次遍历，先入队的先被处理。",
            "【最短路径特性】在无权图中，BFS 首次到达某节点时的路径就是最短路径。这是 BFS 最重要的性质，也是它和 DFS 的核心区别。",
            "【层次遍历】树的层序遍历是 BFS 的特例。如果需要区分层次，可以记录当前层的节点数，或者用 null/特殊标记分隔层。",
            "【多源 BFS】有多个起点的 BFS，所有起点同时入队开始搜索。用于「腐烂的橘子」「01 矩阵」等问题，计算每个点到最近起点的距离。"
        ],
        keyDifficulties: [
            "【为什么 BFS 能求最短路径】BFS 按层扩展，第 k 层的节点到起点的距离都是 k。因此首次访问时的距离就是最短距离。",
            "【visited 的时机】应该在入队时标记 visited，而不是出队时。否则同一节点可能被多次入队，影响正确性和效率。",
            "【双向 BFS】从起点和终点同时 BFS，相遇时结束。可以将搜索空间从 O(b^d) 降到 O(b^(d/2))，其中 b 是分支因子，d 是深度。",
            "【BFS 的局限】只能处理无权图或边权相等的图。带权图的最短路径需要 Dijkstra 等算法。"
        ],
        handsOnPath: [
            "实现图的 BFS 遍历，打印层次信息",
            "用 BFS 求无权图的最短路径",
            "练习 LeetCode 102「二叉树的层序遍历」",
            "练习 LeetCode 127「单词接龙」，经典 BFS 应用",
            "练习 LeetCode 994「腐烂的橘子」，多源 BFS"
        ],
        selfCheck: [
            "BFS 为什么能保证找到最短路径（无权图）？",
            "BFS 和 DFS 在什么场景下各有优势？",
            "为什么 visited 要在入队时标记而不是出队时？",
            "什么是双向 BFS？有什么优势？",
            "多源 BFS 和单源 BFS 的区别是什么？"
        ],
        extensions: [
            "研究 A* 算法对 BFS 的启发式优化",
            "学习 0-1 BFS 处理边权只有 0 和 1 的图",
            "了解 BFS 在网络爬虫中的应用",
            "探索 BFS 在社交网络分析中的应用"
        ],
        sourceUrls: [
            "https://leetcode.cn/leetbook/read/queue-stack/k8grh/",
            "https://leetcode.cn/problems/word-ladder/",
            "https://leetcode.cn/problems/binary-tree-level-order-traversal/"
        ]
    },
    "dsa-w6-4": {
        lessonId: "dsa-w6-4",
        background: [
            "【拓扑排序的定义】拓扑排序是将有向无环图（DAG）的顶点排成线性序列，使得对于每条边 <u, v>，u 都在 v 之前。一个 DAG 可能有多个有效的拓扑序列。",
            "【应用场景】课程安排（先修课程依赖）、任务调度（任务间依赖）、编译顺序（文件间依赖）、包管理器的依赖解析等。",
            "【Kahn 算法（BFS）】基于入度。将所有入度为 0 的顶点入队，每次出队一个顶点加入结果，并将其指向的顶点入度减 1。如果减为 0 则入队。最后结果长度等于顶点数则成功，否则有环。",
            "【DFS 方法】后序遍历的逆序就是拓扑排序。DFS 完成时将节点加入栈，最后栈的弹出顺序就是拓扑序列。需要检测环（访问到灰色节点）。",
            "【环检测】如果图中有环，则不存在拓扑排序。Kahn 算法中结果长度小于顶点数说明有环；DFS 中遇到灰色节点说明有环。"
        ],
        keyDifficulties: [
            "【DAG 的判定】只有有向无环图才有拓扑排序。环检测是拓扑排序的前提或副产品。",
            "【入度数组的维护】Kahn 算法需要预处理所有节点的入度。每次移除边时更新入度，入度变为 0 的节点才能入队。",
            "【DFS 中的三色标记】白色（未访问）、灰色（访问中）、黑色（已完成）。遇到灰色节点说明存在回边，即有环。",
            "【多个有效拓扑序列】当多个节点同时入度为 0 时，选择哪个先处理影响最终序列。如果需要字典序最小的序列，用优先队列代替普通队列。"
        ],
        handsOnPath: [
            "实现 Kahn 算法（BFS 版本）的拓扑排序",
            "实现 DFS 版本的拓扑排序",
            "练习 LeetCode 207「课程表」，判断是否能完成所有课程",
            "练习 LeetCode 210「课程表 II」，输出拓扑排序结果",
            "实现检测图中是否有环的算法"
        ],
        selfCheck: [
            "什么样的图才有拓扑排序？",
            "Kahn 算法的核心思想是什么？",
            "DFS 版本如何得到拓扑排序结果？",
            "如何在拓扑排序过程中检测环？",
            "如何得到字典序最小的拓扑序列？"
        ],
        extensions: [
            "研究拓扑排序在编译器中的应用",
            "了解关键路径法（CPM）与拓扑排序的关系",
            "学习强连通分量的缩点后进行拓扑排序",
            "探索动态添加边时的增量拓扑排序"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/topological-sorting/",
            "https://leetcode.cn/problems/course-schedule/",
            "https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "dsa-w6-1": [
        {
            id: "dsa-w6-1-q1",
            question: "邻接矩阵的空间复杂度是？",
            options: ["O(V)", "O(E)", "O(V²)", "O(V + E)"],
            answer: 2,
            rationale: "邻接矩阵用 V×V 的二维数组存储，空间复杂度是 O(V²)。"
        },
        {
            id: "dsa-w6-1-q2",
            question: "邻接表的空间复杂度是？",
            options: ["O(V)", "O(E)", "O(V²)", "O(V + E)"],
            answer: 3,
            rationale: "邻接表存储 V 个链表头和 E 条边的信息，空间复杂度是 O(V + E)。"
        },
        {
            id: "dsa-w6-1-q3",
            question: "以下哪种图更适合用邻接矩阵存储？",
            options: ["稀疏图", "稠密图", "树", "链表"],
            answer: 1,
            rationale: "稠密图的边数接近 V²，用邻接矩阵不浪费空间，且判断边存在是 O(1)。"
        },
        {
            id: "dsa-w6-1-q4",
            question: "邻接矩阵判断两顶点之间是否有边的时间复杂度是？",
            options: ["O(1)", "O(V)", "O(E)", "O(log V)"],
            answer: 0,
            rationale: "邻接矩阵直接访问 matrix[u][v] 即可判断，时间 O(1)。"
        },
        {
            id: "dsa-w6-1-q5",
            question: "无向图的邻接矩阵有什么特点？",
            options: ["上三角全为 0", "下三角全为 0", "关于主对角线对称", "全为 1"],
            answer: 2,
            rationale: "无向图中 (u,v) 和 (v,u) 等价，因此 matrix[u][v] = matrix[v][u]，矩阵对称。"
        },
        {
            id: "dsa-w6-1-q6",
            question: "用邻接表遍历顶点 u 的所有邻接点，时间复杂度是？",
            options: ["O(1)", "O(V)", "O(degree(u))", "O(E)"],
            answer: 2,
            rationale: "只需要遍历 u 的邻接表，时间与 u 的度数（邻接点数量）成正比。"
        },
        {
            id: "dsa-w6-1-q7",
            question: "加权图用邻接矩阵存储时，matrix[u][v] 存储的是？",
            options: ["0 或 1", "边的权重", "顶点的值", "边的数量"],
            answer: 1,
            rationale: "加权图中 matrix[u][v] 存储边 (u,v) 的权重，无边时通常用特殊值（如 0 或无穷）表示。"
        },
        {
            id: "dsa-w6-1-q8",
            question: "有向图中，顶点的入度可以通过邻接矩阵如何计算？",
            options: [
                "统计该行非零元素数",
                "统计该列非零元素数",
                "矩阵对角线元素",
                "无法计算"
            ],
            answer: 1,
            rationale: "入度是指向该顶点的边数，在邻接矩阵中对应该列的非零元素数。"
        },
        {
            id: "dsa-w6-1-q9",
            question: "以下关于图的说法，错误的是？",
            options: [
                "有向图的边有方向",
                "无向图的边没有方向",
                "简单图允许自环",
                "加权图的边有权重"
            ],
            answer: 2,
            rationale: "简单图不包含自环（顶点到自己的边）和重边（两顶点间的多条边）。"
        },
        {
            id: "dsa-w6-1-q10",
            question: "一个有 n 个顶点的无向完全图有多少条边？",
            options: ["n", "n²", "n(n-1)/2", "2n"],
            answer: 2,
            rationale: "完全图中任意两点间都有边，共 C(n,2) = n(n-1)/2 条边。"
        },
        {
            id: "dsa-w6-1-q11",
            question: "邻接表中判断边 (u,v) 是否存在的最坏时间复杂度是？",
            options: ["O(1)", "O(log V)", "O(V)", "O(E)"],
            answer: 2,
            rationale: "需要遍历 u 的邻接表查找 v，最坏情况 u 与所有其他顶点相连，时间 O(V)。"
        },
        {
            id: "dsa-w6-1-q12",
            question: "稀疏图通常是指边数 E 满足？",
            options: ["E = V²", "E 接近 V²", "E 远小于 V²", "E = V"],
            answer: 2,
            rationale: "稀疏图的边数远小于 V²，接近 O(V) 的量级，此时邻接表更省空间。"
        }
    ],
    "dsa-w6-2": [
        {
            id: "dsa-w6-2-q1",
            question: "DFS 使用的数据结构是？",
            options: ["队列", "栈", "堆", "哈希表"],
            answer: 1,
            rationale: "DFS 使用栈（递归调用栈或显式栈）来实现深度优先的遍历顺序。"
        },
        {
            id: "dsa-w6-2-q2",
            question: "图的 DFS 时间复杂度是？",
            options: ["O(V)", "O(E)", "O(V + E)", "O(V × E)"],
            answer: 2,
            rationale: "DFS 访问每个顶点一次 O(V)，每条边检查一次 O(E)，总时间 O(V + E)。"
        },
        {
            id: "dsa-w6-2-q3",
            question: "DFS 中 visited 数组的作用是？",
            options: [
                "记录访问顺序",
                "防止重复访问导致死循环",
                "存储路径",
                "计算距离"
            ],
            answer: 1,
            rationale: "visited 标记已访问的节点，防止在有环图中重复访问导致无限循环。"
        },
        {
            id: "dsa-w6-2-q4",
            question: "检测有向图中是否有环，DFS 需要几种状态？",
            options: ["1 种", "2 种", "3 种", "4 种"],
            answer: 2,
            rationale: "需要三种状态：未访问(0)、访问中(1)、已完成(2)。遇到访问中的节点说明有环。"
        },
        {
            id: "dsa-w6-2-q5",
            question: "DFS 的递归实现最大的问题是？",
            options: ["时间复杂度高", "空间复杂度高", "可能栈溢出", "无法处理有向图"],
            answer: 2,
            rationale: "递归 DFS 使用系统调用栈，图很深时可能导致栈溢出。可以改用迭代版本。"
        },
        {
            id: "dsa-w6-2-q6",
            question: "DFS 适合解决以下哪类问题？",
            options: ["最短路径", "路径存在性判断", "层次遍历", "最小生成树"],
            answer: 1,
            rationale: "DFS 擅长探索路径、检测连通性、判断路径是否存在。最短路径应该用 BFS。"
        },
        {
            id: "dsa-w6-2-q7",
            question: "岛屿数量问题本质上是求？",
            options: ["最短路径", "连通分量数", "环的数量", "最大度数"],
            answer: 1,
            rationale: "每个岛屿是一个连通分量，用 DFS/BFS 遍历并计数连通分量即可。"
        },
        {
            id: "dsa-w6-2-q8",
            question: "DFS 在无向图中检测环的方法是？",
            options: [
                "检测是否访问到未访问节点",
                "检测是否访问到已访问的非父节点",
                "使用三色标记",
                "无法检测"
            ],
            answer: 1,
            rationale: "无向图 DFS 时，访问到已访问的非父节点说明有环（通过另一条路径回到了）。"
        },
        {
            id: "dsa-w6-2-q9",
            question: "DFS 的空间复杂度是？",
            options: ["O(1)", "O(log V)", "O(V)", "O(V + E)"],
            answer: 2,
            rationale: "DFS 需要 O(V) 的 visited 数组和最坏 O(V) 的栈深度，空间 O(V)。"
        },
        {
            id: "dsa-w6-2-q10",
            question: "DFS 生成树中的回边是指？",
            options: [
                "指向子孙的边",
                "指向祖先的边",
                "指向兄弟的边",
                "指向未访问节点的边"
            ],
            answer: 1,
            rationale: "回边是 DFS 过程中遇到的指向祖先节点的边，说明存在环。"
        },
        {
            id: "dsa-w6-2-q11",
            question: "以下哪个问题不适合用 DFS 解决？",
            options: ["全排列", "连通分量", "无权图最短路径", "拓扑排序"],
            answer: 2,
            rationale: "无权图最短路径应该用 BFS，因为 BFS 保证首次到达时距离最短。"
        },
        {
            id: "dsa-w6-2-q12",
            question: "DFS 后序遍历的应用是？",
            options: ["求最短路径", "拓扑排序", "求最小生成树", "判断二分图"],
            answer: 1,
            rationale: "DFS 后序遍历的逆序就是拓扑排序结果，因为后处理的节点在拓扑序中更靠前。"
        }
    ],
    "dsa-w6-3": [
        {
            id: "dsa-w6-3-q1",
            question: "BFS 使用的数据结构是？",
            options: ["栈", "队列", "堆", "数组"],
            answer: 1,
            rationale: "BFS 使用队列实现，保证先入先出，按层次遍历。"
        },
        {
            id: "dsa-w6-3-q2",
            question: "BFS 在无权图中能保证找到最短路径的原因是？",
            options: [
                "BFS 速度快",
                "BFS 按层次扩展，首次到达即为最短",
                "BFS 使用更少空间",
                "BFS 遍历所有路径"
            ],
            answer: 1,
            rationale: "BFS 按距离递增的顺序访问节点，首次访问某节点时的路径一定是最短的。"
        },
        {
            id: "dsa-w6-3-q3",
            question: "BFS 的时间复杂度是？",
            options: ["O(V)", "O(E)", "O(V + E)", "O(V × E)"],
            answer: 2,
            rationale: "BFS 访问每个顶点一次，每条边检查一次，总时间 O(V + E)。"
        },
        {
            id: "dsa-w6-3-q4",
            question: "BFS 中何时标记节点为已访问？",
            options: ["出队时", "入队时", "处理邻接点时", "任意时刻"],
            answer: 1,
            rationale: "应该在入队时就标记 visited，否则同一节点可能被多次入队。"
        },
        {
            id: "dsa-w6-3-q5",
            question: "多源 BFS 是指？",
            options: [
                "有多个终点",
                "有多个起点同时开始搜索",
                "搜索多条路径",
                "使用多个队列"
            ],
            answer: 1,
            rationale: "多源 BFS 将所有起点同时加入初始队列，计算每个点到最近起点的距离。"
        },
        {
            id: "dsa-w6-3-q6",
            question: "二叉树的层序遍历是 BFS 的？",
            options: ["特例", "变体", "对立面", "无关"],
            answer: 0,
            rationale: "树的层序遍历是 BFS 在树结构上的特例，因为树无环，不需要 visited。"
        },
        {
            id: "dsa-w6-3-q7",
            question: "双向 BFS 的主要优势是？",
            options: [
                "代码更简单",
                "减少搜索空间",
                "不需要队列",
                "能处理负权边"
            ],
            answer: 1,
            rationale: "双向 BFS 从起点和终点同时搜索，搜索空间从 O(b^d) 降到 O(b^(d/2))。"
        },
        {
            id: "dsa-w6-3-q8",
            question: "BFS 的空间复杂度是？",
            options: ["O(1)", "O(log V)", "O(V)", "O(V²)"],
            answer: 2,
            rationale: "BFS 需要 O(V) 的 visited 数组和最坏 O(V) 的队列空间。"
        },
        {
            id: "dsa-w6-3-q9",
            question: "以下哪个问题最适合用 BFS 解决？",
            options: ["全排列", "拓扑排序", "无权图最短路径", "检测环"],
            answer: 2,
            rationale: "BFS 天然适合求无权图的最短路径，因为按层次扩展保证首次到达即为最短。"
        },
        {
            id: "dsa-w6-3-q10",
            question: "BFS 不能处理的情况是？",
            options: ["无向图", "有向图", "带负权边的最短路径", "多个连通分量"],
            answer: 2,
            rationale: "BFS 只能处理无权图或边权相等的图。带负权边需要 Bellman-Ford 等算法。"
        },
        {
            id: "dsa-w6-3-q11",
            question: "「单词接龙」问题为什么适合用 BFS？",
            options: [
                "单词数量少",
                "需要找最短转换序列",
                "单词可以重复使用",
                "没有其他方法"
            ],
            answer: 1,
            rationale: "问题要求最短转换序列，BFS 天然按步数递增搜索，首次到达目标即为最短。"
        },
        {
            id: "dsa-w6-3-q12",
            question: "0-1 BFS 适用于什么场景？",
            options: [
                "无权图",
                "边权只有 0 和 1 的图",
                "负权图",
                "完全图"
            ],
            answer: 1,
            rationale: "0-1 BFS 用双端队列处理边权只有 0 和 1 的图，权为 0 的边加到队首，权为 1 的加到队尾。"
        }
    ],
    "dsa-w6-4": [
        {
            id: "dsa-w6-4-q1",
            question: "拓扑排序只能应用于什么类型的图？",
            options: ["无向图", "有环图", "有向无环图(DAG)", "完全图"],
            answer: 2,
            rationale: "拓扑排序要求对于每条边 <u,v>，u 排在 v 前面。有环则无法满足，所以只能用于 DAG。"
        },
        {
            id: "dsa-w6-4-q2",
            question: "Kahn 算法（BFS 版本）首先将什么节点入队？",
            options: ["出度为 0 的节点", "入度为 0 的节点", "所有节点", "随机节点"],
            answer: 1,
            rationale: "Kahn 算法将所有入度为 0 的节点（没有前驱依赖）入队，作为拓扑排序的起点。"
        },
        {
            id: "dsa-w6-4-q3",
            question: "拓扑排序中，如何判断图中有环？",
            options: [
                "队列为空时",
                "拓扑排序结果的长度小于顶点数",
                "出现入度为负的节点",
                "无法判断"
            ],
            answer: 1,
            rationale: "如果有环，环中的节点入度永远不会变为 0，无法加入结果，结果长度小于 V。"
        },
        {
            id: "dsa-w6-4-q4",
            question: "DFS 版本的拓扑排序，结果是后序遍历的？",
            options: ["本身", "逆序", "前序", "中序"],
            answer: 1,
            rationale: "DFS 后序遍历时，先完成的节点在拓扑序中靠后，所以取逆序得到拓扑排序。"
        },
        {
            id: "dsa-w6-4-q5",
            question: "一个 DAG 的拓扑排序结果是？",
            options: ["唯一的", "可能有多个", "不存在", "循环的"],
            answer: 1,
            rationale: "当多个节点同时入度为 0 时，选择顺序不同会得到不同的拓扑序列。"
        },
        {
            id: "dsa-w6-4-q6",
            question: "课程表问题的本质是？",
            options: [
                "求最短路径",
                "判断 DAG 是否存在环并进行拓扑排序",
                "求最小生成树",
                "求连通分量"
            ],
            answer: 1,
            rationale: "课程之间的先修关系构成有向图，能完成所有课程等价于图是 DAG。"
        },
        {
            id: "dsa-w6-4-q7",
            question: "拓扑排序的时间复杂度是？",
            options: ["O(V)", "O(E)", "O(V + E)", "O(V × E)"],
            answer: 2,
            rationale: "需要遍历所有顶点和边来计算入度和更新，时间 O(V + E)。"
        },
        {
            id: "dsa-w6-4-q8",
            question: "如果要得到字典序最小的拓扑排序，应该？",
            options: [
                "用栈代替队列",
                "用优先队列（最小堆）代替普通队列",
                "用 DFS 代替 BFS",
                "无法实现"
            ],
            answer: 1,
            rationale: "用优先队列保证每次选择入度为 0 且编号最小的节点，得到字典序最小的拓扑序列。"
        },
        {
            id: "dsa-w6-4-q9",
            question: "DFS 拓扑排序中，三色标记的灰色表示？",
            options: ["未访问", "正在访问（当前 DFS 路径上）", "访问完成", "有环"],
            answer: 1,
            rationale: "灰色表示节点正在当前 DFS 路径上，遇到灰色节点说明存在回边，即有环。"
        },
        {
            id: "dsa-w6-4-q10",
            question: "以下哪个场景不适合用拓扑排序？",
            options: ["任务调度", "编译顺序", "无向图连通性", "课程安排"],
            answer: 2,
            rationale: "拓扑排序用于有向图的依赖排序，无向图的连通性应该用 DFS/BFS 或并查集。"
        },
        {
            id: "dsa-w6-4-q11",
            question: "Kahn 算法中，每次出队一个节点后，需要？",
            options: [
                "将所有节点入度加 1",
                "将该节点指向的节点入度减 1",
                "重新计算所有入度",
                "不需要操作"
            ],
            answer: 1,
            rationale: "出队节点相当于移除，其指向的节点少了一个前驱，入度减 1，变为 0 则入队。"
        },
        {
            id: "dsa-w6-4-q12",
            question: "关键路径法（CPM）与拓扑排序的关系是？",
            options: [
                "完全无关",
                "CPM 基于拓扑排序计算最早/最晚开始时间",
                "CPM 是拓扑排序的替代",
                "CPM 不需要 DAG"
            ],
            answer: 1,
            rationale: "关键路径法需要先进行拓扑排序，然后按拓扑序计算每个任务的最早和最晚开始时间。"
        }
    ]
}
