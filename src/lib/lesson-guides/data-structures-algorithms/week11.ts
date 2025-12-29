import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "dsa-w11-1": {
        lessonId: "dsa-w11-1",
        background: [
            "【单源最短路径】给定加权图和起点 s，求 s 到所有其他顶点的最短路径。Dijkstra 算法是解决非负权图单源最短路径的经典算法，基于贪心思想，时间复杂度 O((V+E) log V)（优先队列实现）。",
            "【Dijkstra 的贪心思想】维护已确定最短路径的顶点集合 S 和候选集合。每次从候选集合中选择距离起点最近的顶点 u 加入 S，然后用 u 松弛其邻居。这个贪心选择是正确的，因为所有边权非负，u 的最短路径不会被后续顶点更新。",
            "【松弛操作】对于边 (u, v)，如果 dist[u] + weight(u,v) < dist[v]，则更新 dist[v]。这个操作称为「松弛」(relaxation)，是最短路径算法的核心。",
            "【优先队列优化】朴素 Dijkstra 每轮从 V 个顶点中找最小值 O(V)，总共 O(V²)。用最小堆优先队列优化：插入和提取最小值都是 O(log V)，总时间 O((V+E) log V)。",
            "【Dijkstra 的局限性】不能处理负权边。原因：贪心选择基于「当前最近的顶点的最短路径已确定」，但负权边可能使得通过更远的顶点绕路反而更短，破坏贪心的正确性。"
        ],
        keyDifficulties: [
            "【重复入队问题】用优先队列时，同一顶点可能多次入队（每次被松弛都入队）。解决方案：1) 出队时检查是否已访问；2) 使用支持 decrease-key 的堆（如斐波那契堆）。",
            "【稀疏图 vs 稠密图】稀疏图 E ≈ V，用优先队列 O(V log V) 更优；稠密图 E ≈ V²，朴素 O(V²) 可能更好（避免堆操作的常数因子）。",
            "【路径还原】只记录 dist 只能得到距离，不能得到具体路径。需要额外数组 prev[] 记录每个顶点的前驱，最后从终点回溯到起点。",
            "【多源最短路径】如果需要所有点对的最短路径，可以对每个顶点运行一次 Dijkstra O(V(V+E) log V)，或使用 Floyd-Warshall O(V³)。"
        ],
        handsOnPath: [
            "用优先队列实现 Dijkstra 算法",
            "练习 LeetCode 743「网络延迟时间」，这是 Dijkstra 的直接应用",
            "练习 LeetCode 1514「概率最大的路径」，Dijkstra 的变体",
            "练习 LeetCode 787「K 站中转内最便宜的航班」，理解 Dijkstra 的限制",
            "比较朴素 Dijkstra 和优先队列 Dijkstra 的性能差异"
        ],
        selfCheck: [
            "Dijkstra 算法的贪心策略是什么？为什么这个策略是正确的？",
            "什么是「松弛」操作？",
            "Dijkstra 为什么不能处理负权边？举一个反例。",
            "如何从 Dijkstra 的结果中还原具体路径？",
            "优先队列实现 Dijkstra 的时间复杂度是多少？"
        ],
        extensions: [
            "学习 A* 算法，理解启发式搜索如何加速 Dijkstra",
            "研究双向 Dijkstra 的优化思想",
            "了解 Johnson 算法处理含负权边的全源最短路径",
            "探索 Dijkstra 在导航系统中的应用"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
            "https://leetcode.cn/problems/network-delay-time/",
            "https://visualgo.net/en/sssp"
        ]
    },
    "dsa-w11-2": {
        lessonId: "dsa-w11-2",
        background: [
            "【Bellman-Ford 算法】可以处理负权边的单源最短路径算法。核心思想：对所有边进行 V-1 轮松弛，每轮松弛保证至少有一个顶点的最短路径被确定。时间复杂度 O(VE)。",
            "【Bellman-Ford 的正确性】最短路径最多经过 V-1 条边（否则有环）。第 k 轮松弛后，所有经过 k 条边可达的顶点的最短路径被确定。V-1 轮后所有最短路径确定。",
            "【负权环检测】如果第 V 轮松弛仍然能更新某个顶点的距离，说明存在负权环。负权环上的顶点可以通过不断绕环使距离无限减小，此时不存在有意义的最短路径。",
            "【SPFA 算法】Bellman-Ford 的队列优化版本。只有被松弛过的顶点才可能松弛其他顶点，用队列维护待处理顶点。平均情况 O(kE)（k 是小常数），但最坏情况仍是 O(VE)。",
            "【SPFA 的适用场景】稀疏图、随机图中 SPFA 很快。但在特殊构造的图（如网格图）中可能退化。竞赛中常用，但因为最坏情况不稳定，工业界更青睐 Dijkstra 或 Bellman-Ford。"
        ],
        keyDifficulties: [
            "【Bellman-Ford vs Dijkstra】Dijkstra 每轮确定一个顶点，共 V 轮，但不能处理负权；Bellman-Ford 每轮松弛所有边，可以处理负权，但更慢。",
            "【负权边 vs 负权环】负权边不影响最短路径的存在（只要没有负权环）；负权环使得经过该环的顶点最短路径无意义（可以无限小）。",
            "【SPFA 的队列优化细节】顶点入队前检查是否已在队列中（用 inQueue 数组标记），避免重复入队浪费空间。SLF（Small Label First）优化可以进一步加速。",
            "【K 站中转限制】LeetCode 787 要求最多 K 次中转，即最多 K+1 条边。需要修改 Bellman-Ford：只进行 K+1 轮松弛，并防止同一轮使用更新后的值。"
        ],
        handsOnPath: [
            "实现 Bellman-Ford 算法，包括负权环检测",
            "实现 SPFA 算法，理解队列优化的思想",
            "练习 LeetCode 787「K 站中转内最便宜的航班」",
            "练习 LeetCode 1334「阈值距离内邻居最少的城市」",
            "构造一个让 SPFA 退化的图，体会最坏情况"
        ],
        selfCheck: [
            "Bellman-Ford 为什么需要 V-1 轮松弛？",
            "如何用 Bellman-Ford 检测负权环？",
            "SPFA 是如何优化 Bellman-Ford 的？",
            "SPFA 的最坏时间复杂度是多少？为什么？",
            "处理「最多 K 条边」的最短路径问题时，Bellman-Ford 如何修改？"
        ],
        extensions: [
            "学习 Johnson 算法：重新赋权消除负权后用 Dijkstra",
            "研究 SPFA 的各种优化：SLF、LLL",
            "了解差分约束系统与最短路径的关系",
            "探索最短路径算法在套利检测中的应用"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/",
            "https://leetcode.cn/problems/cheapest-flights-within-k-stops/",
            "https://www.geeksforgeeks.org/shortest-path-faster-algorithm/"
        ]
    },
    "dsa-w11-3": {
        lessonId: "dsa-w11-3",
        background: [
            "【最小生成树 MST】给定连通加权无向图，找一棵包含所有顶点的生成树，使得边权之和最小。MST 有 V-1 条边，可能不唯一（当存在权重相同的边时）。",
            "【切分定理】将图顶点分成两个不相交的集合（切分），连接两个集合的边称为「横切边」。切分定理：对于任意切分，权重最小的横切边一定属于某棵 MST。这是 Prim 和 Kruskal 正确性的基础。",
            "【Prim 算法】从任意顶点开始，维护已在 MST 中的顶点集合 S。每次选择连接 S 和非 S 的最小权重边，将新顶点加入 S。重复直到所有顶点都在 S 中。类似 Dijkstra，可用优先队列优化到 O(E log V)。",
            "【Kruskal 算法】按边权从小到大排序所有边，依次考虑每条边：如果这条边的两个端点不在同一连通分量中，就加入 MST（用并查集判断和合并）。时间 O(E log E)（排序主导）。",
            "【Prim vs Kruskal】Prim 从顶点出发，适合稠密图；Kruskal 从边出发，适合稀疏图。实现上 Kruskal 更简单（排序+并查集）。"
        ],
        keyDifficulties: [
            "【Prim 的优先队列实现】优先队列存储 (边权, 顶点) 对。每次取出最小边，如果对应顶点未访问则加入 MST，并将其所有邻边入队。注意重复入队的处理。",
            "【Kruskal 的并查集应用】边 (u, v) 加入前，用 find(u) 和 find(v) 检查是否在同一集合。如果不在则 union(u, v) 并将边计入 MST。",
            "【MST 的唯一性】如果所有边权都不同，MST 唯一。如果有相同权重的边，可能存在多棵 MST，但总权重相同。",
            "【次小生成树】在某些问题中需要求第二小的生成树。可以枚举 MST 中的边，删除后求新的 MST，取最小值。"
        ],
        handsOnPath: [
            "用优先队列实现 Prim 算法",
            "用排序+并查集实现 Kruskal 算法",
            "练习 LeetCode 1584「连接所有点的最小费用」",
            "练习 LeetCode 1135「最低成本联通所有城市」",
            "比较 Prim 和 Kruskal 在稀疏图和稠密图上的性能"
        ],
        selfCheck: [
            "什么是切分定理？它如何保证 Prim/Kruskal 的正确性？",
            "Prim 和 Kruskal 的主要区别是什么？",
            "Kruskal 算法为什么需要并查集？",
            "MST 一定是唯一的吗？什么情况下不唯一？",
            "Prim 和 Dijkstra 有什么相似之处？"
        ],
        extensions: [
            "学习 Boruvka 算法，这是并行化更好的 MST 算法",
            "研究次小生成树的求法",
            "了解 MST 在聚类算法中的应用",
            "探索动态图上的 MST 维护问题"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/introduction-to-minimum-spanning-tree-mst/",
            "https://visualgo.net/en/mst",
            "https://leetcode.cn/problems/min-cost-to-connect-all-points/"
        ]
    },
    "dsa-w11-4": {
        lessonId: "dsa-w11-4",
        background: [
            "【网络流问题】网络流研究在有向图（网络）中从源点 s 到汇点 t 运送「流量」的问题。每条边有容量限制，流量不能超过容量。目标是找到从 s 到 t 的最大流量（最大流问题）。",
            "【最大流最小割定理】最大流等于最小割。「割」是将 s 和 t 分开的边集，割的容量是这些边的容量之和。最小割是容量最小的割。这个定理将最大流问题与最小割问题联系起来。",
            "【Ford-Fulkerson 方法】迭代寻找从 s 到 t 的增广路径（路径上所有边都有剩余容量），沿增广路径发送流量（等于路径上最小剩余容量），直到找不到增广路径。需要使用残余图处理「反悔」。",
            "【残余图与反向边】残余图包含正向边（剩余容量）和反向边（已发送流量）。反向边允许「撤销」之前的流量决策。没有反向边可能得不到最大流。",
            "【Edmonds-Karp 算法】Ford-Fulkerson 使用 BFS 寻找最短增广路径的版本，时间复杂度 O(VE²)。保证了算法一定终止（即使容量是实数），且效率有保证。"
        ],
        keyDifficulties: [
            "【为什么需要反向边】例如：s→a→t 和 s→b→a 两条路径，如果先走 s→a→t 用尽 a→t 的容量，没有反向边就无法再利用 s→b→a→t 的潜力。反向边允许「退还」a→t 的流量。",
            "【最大流的应用】二分图最大匹配、任务分配、棒球赛淘汰判定、图像分割等。很多看似无关的问题可以转化为最大流。",
            "【二分图匹配】左部连源点 s，右部连汇点 t，所有边容量为 1。最大流即最大匹配数。可以用匈牙利算法更高效地解决。",
            "【时间复杂度】Ford-Fulkerson 复杂度取决于寻找增广路径的方法。BFS 版本（Edmonds-Karp）O(VE²)，Dinic 算法 O(V²E)，更高效的算法如预流推进。"
        ],
        handsOnPath: [
            "实现 Ford-Fulkerson 算法（使用 BFS）",
            "用网络流解决二分图最大匹配问题",
            "理解残余图和反向边的作用",
            "探索 LeetCode 上的网络流相关问题",
            "学习 Dinic 算法的分层图优化思想"
        ],
        selfCheck: [
            "什么是增广路径？残余图？",
            "为什么需要反向边？举例说明。",
            "最大流最小割定理的含义是什么？",
            "Ford-Fulkerson 方法使用 DFS 和 BFS 的区别是什么？",
            "如何用最大流解决二分图匹配问题？"
        ],
        extensions: [
            "学习 Dinic 算法和预流推进算法",
            "研究最小费用最大流问题",
            "了解网络流在运筹学和组合优化中的应用",
            "探索最大流在计算机视觉（图割）中的应用"
        ],
        sourceUrls: [
            "https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/",
            "https://visualgo.net/en/maxflow",
            "https://www.geeksforgeeks.org/maximum-bipartite-matching/"
        ]
    }
}

export const week11Quizzes: Record<string, QuizQuestion[]> = {
    "dsa-w11-1": [
        {
            id: "dsa-w11-1-q1",
            question: "Dijkstra 算法基于什么思想？",
            options: ["动态规划", "分治", "贪心", "回溯"],
            answer: 2,
            rationale: "Dijkstra 每次选择距离起点最近的未访问顶点，这是贪心策略。"
        },
        {
            id: "dsa-w11-1-q2",
            question: "Dijkstra 算法不能处理什么类型的图？",
            options: ["有向图", "无向图", "含负权边的图", "稀疏图"],
            answer: 2,
            rationale: "Dijkstra 假设已确定的最短路径不会被更新，负权边会破坏这个假设。"
        },
        {
            id: "dsa-w11-1-q3",
            question: "使用优先队列实现 Dijkstra 的时间复杂度是？",
            options: ["O(V²)", "O(E log V)", "O(V + E)", "O((V+E) log V)"],
            answer: 3,
            rationale: "每个顶点入队出队 O(log V)，每条边可能导致一次入队，总共 O((V+E) log V)。"
        },
        {
            id: "dsa-w11-1-q4",
            question: "「松弛」操作是指？",
            options: [
                "删除一条边",
                "如果通过 u 到达 v 更短，则更新 v 的距离",
                "将顶点标记为已访问",
                "增加边的权重"
            ],
            answer: 1,
            rationale: "松弛是指：如果 dist[u] + weight(u,v) < dist[v]，则更新 dist[v]。"
        },
        {
            id: "dsa-w11-1-q5",
            question: "Dijkstra 初始化时，起点 s 的距离设为？",
            options: ["无穷大", "0", "1", "-1"],
            answer: 1,
            rationale: "起点到自身的距离是 0，其他顶点初始化为无穷大。"
        },
        {
            id: "dsa-w11-1-q6",
            question: "朴素 Dijkstra（不用优先队列）的时间复杂度是？",
            options: ["O(V log V)", "O(V²)", "O(E log V)", "O(VE)"],
            answer: 1,
            rationale: "朴素版本每轮从 V 个顶点中找最小值 O(V)，共 V 轮，总共 O(V²)。"
        },
        {
            id: "dsa-w11-1-q7",
            question: "如何从 Dijkstra 的结果中还原路径？",
            options: [
                "无法还原",
                "用 prev 数组记录每个顶点的前驱，从终点回溯",
                "直接从 dist 数组读取",
                "重新运行 Dijkstra"
            ],
            answer: 1,
            rationale: "额外记录每个顶点是从哪个顶点松弛而来（prev 数组），最后从终点回溯到起点。"
        },
        {
            id: "dsa-w11-1-q8",
            question: "优先队列版 Dijkstra 中，同一顶点可能多次入队，应该如何处理？",
            options: [
                "不需要处理",
                "出队时检查是否已访问，已访问则跳过",
                "禁止重复入队",
                "使用栈代替队列"
            ],
            answer: 1,
            rationale: "同一顶点可能因多次松弛而多次入队，出队时检查 visited 数组，已访问则跳过。"
        },
        {
            id: "dsa-w11-1-q9",
            question: "Dijkstra 的贪心选择为什么正确？",
            options: [
                "随机选择同样正确",
                "因为边权非负，已确定的最短路径不会被更远的顶点更新",
                "使用了动态规划",
                "因为使用了优先队列"
            ],
            answer: 1,
            rationale: "边权非负保证了：已确定最短路径的顶点，不可能通过其他更远的顶点找到更短的路径。"
        },
        {
            id: "dsa-w11-1-q10",
            question: "A* 算法与 Dijkstra 的关系是？",
            options: [
                "完全不同的算法",
                "A* 是 Dijkstra 加上启发式函数的版本",
                "A* 更慢但更准确",
                "Dijkstra 是 A* 的特例"
            ],
            answer: 1,
            rationale: "A* 在 Dijkstra 基础上引入启发式估计函数 h(n)，优先探索更有希望的方向，加速搜索。"
        },
        {
            id: "dsa-w11-1-q11",
            question: "稀疏图和稠密图分别适合用什么实现 Dijkstra？",
            options: [
                "都用优先队列",
                "都用邻接矩阵",
                "稀疏图用优先队列，稠密图可用朴素版本",
                "稀疏图用朴素版本，稠密图用优先队列"
            ],
            answer: 2,
            rationale: "稀疏图 E 小，优先队列 O((V+E)log V) 更优；稠密图 E≈V²，朴素 O(V²) 可能更好。"
        },
        {
            id: "dsa-w11-1-q12",
            question: "给定起点 s，Dijkstra 可以求出？",
            options: [
                "只能求 s 到指定终点的最短路径",
                "s 到所有顶点的最短路径",
                "任意两点间的最短路径",
                "最长路径"
            ],
            answer: 1,
            rationale: "Dijkstra 是单源最短路径算法，一次运行可以得到起点 s 到所有其他顶点的最短路径。"
        }
    ],
    "dsa-w11-2": [
        {
            id: "dsa-w11-2-q1",
            question: "Bellman-Ford 算法可以处理什么类型的图？",
            options: ["只能处理无向图", "只能处理正权图", "可以处理负权边", "可以处理负权环"],
            answer: 2,
            rationale: "Bellman-Ford 可以处理负权边，并能检测负权环（但不能求负权环上顶点的有意义最短路径）。"
        },
        {
            id: "dsa-w11-2-q2",
            question: "Bellman-Ford 需要对所有边进行多少轮松弛？",
            options: ["V 轮", "V-1 轮", "E 轮", "E-1 轮"],
            answer: 1,
            rationale: "最短路径最多经过 V-1 条边，V-1 轮松弛后所有最短路径被确定。"
        },
        {
            id: "dsa-w11-2-q3",
            question: "如何用 Bellman-Ford 检测负权环？",
            options: [
                "检查是否有负权边",
                "第 V 轮松弛如果还能更新距离，则存在负权环",
                "检查 dist 数组是否有负值",
                "无法检测"
            ],
            answer: 1,
            rationale: "V-1 轮后所有最短路径已确定，如果第 V 轮还能松弛，说明存在可以无限减小距离的负权环。"
        },
        {
            id: "dsa-w11-2-q4",
            question: "Bellman-Ford 的时间复杂度是？",
            options: ["O(V²)", "O(E log V)", "O(VE)", "O(V + E)"],
            answer: 2,
            rationale: "V-1 轮松弛，每轮遍历所有 E 条边，总时间 O(VE)。"
        },
        {
            id: "dsa-w11-2-q5",
            question: "SPFA 是什么的优化？",
            options: ["Dijkstra", "Bellman-Ford", "Floyd", "Prim"],
            answer: 1,
            rationale: "SPFA 是 Bellman-Ford 的队列优化版本，只处理被松弛过的顶点。"
        },
        {
            id: "dsa-w11-2-q6",
            question: "SPFA 的最坏时间复杂度是？",
            options: ["O(V log V)", "O(E log V)", "O(VE)", "O(V + E)"],
            answer: 2,
            rationale: "SPFA 平均很快 O(kE)，但最坏情况退化为 O(VE)，与 Bellman-Ford 相同。"
        },
        {
            id: "dsa-w11-2-q7",
            question: "负权边和负权环的区别是？",
            options: [
                "没有区别",
                "负权边不影响最短路径存在，负权环使最短路径无意义",
                "负权环不影响最短路径存在",
                "都会导致 Dijkstra 失效"
            ],
            answer: 1,
            rationale: "负权边只是边权为负，不影响最短路径存在；负权环可以无限绕圈减小距离，使最短路径无意义。"
        },
        {
            id: "dsa-w11-2-q8",
            question: "处理「最多 K 条边」的最短路径，Bellman-Ford 如何修改？",
            options: [
                "只进行 K 轮松弛",
                "只进行 K+1 轮松弛，且防止同一轮使用更新后的值",
                "使用 SPFA",
                "无法处理"
            ],
            answer: 1,
            rationale: "K 次中转 = K+1 条边，进行 K+1 轮松弛。需要备份上一轮的 dist 数组，防止链式更新。"
        },
        {
            id: "dsa-w11-2-q9",
            question: "SPFA 使用什么数据结构？",
            options: ["栈", "队列", "优先队列", "哈希表"],
            answer: 1,
            rationale: "SPFA 用普通队列存储待处理的顶点（被松弛过的顶点），不是优先队列。"
        },
        {
            id: "dsa-w11-2-q10",
            question: "Bellman-Ford 为什么比 Dijkstra 慢？",
            options: [
                "需要处理负权边",
                "每轮要遍历所有边，而不是只处理一个顶点",
                "使用了递归",
                "空间复杂度更高"
            ],
            answer: 1,
            rationale: "Dijkstra 每轮只处理一个顶点及其邻边，Bellman-Ford 每轮要遍历所有边。"
        },
        {
            id: "dsa-w11-2-q11",
            question: "SPFA 入队前需要检查什么？",
            options: [
                "顶点是否已访问",
                "顶点是否已在队列中",
                "边权是否为负",
                "队列是否为空"
            ],
            answer: 1,
            rationale: "入队前检查顶点是否已在队列中（用 inQueue 数组），避免重复入队。"
        },
        {
            id: "dsa-w11-2-q12",
            question: "Johnson 算法的作用是？",
            options: [
                "检测负权环",
                "通过重新赋权将负权图转化为非负权图，然后用 Dijkstra",
                "求最小生成树",
                "求最大流"
            ],
            answer: 1,
            rationale: "Johnson 算法用势函数重新赋权消除负权边（但保持最短路径不变），然后对每个顶点用 Dijkstra。"
        }
    ],
    "dsa-w11-3": [
        {
            id: "dsa-w11-3-q1",
            question: "最小生成树 MST 有多少条边？",
            options: ["V", "V-1", "E", "E-1"],
            answer: 1,
            rationale: "生成树是连通的无环图，V 个顶点需要恰好 V-1 条边。"
        },
        {
            id: "dsa-w11-3-q2",
            question: "切分定理说的是？",
            options: [
                "MST 中的边权都相等",
                "对于任意切分，最小权重的横切边属于某棵 MST",
                "MST 是唯一的",
                "MST 的边权之和等于 V-1"
            ],
            answer: 1,
            rationale: "切分定理：任意将顶点分成两部分的切分，跨越切分的最小权重边一定在某棵 MST 中。"
        },
        {
            id: "dsa-w11-3-q3",
            question: "Prim 算法从什么开始？",
            options: ["最小权重的边", "任意顶点", "最大度数的顶点", "随机边"],
            answer: 1,
            rationale: "Prim 从任意一个顶点开始，逐步扩展 MST 集合。"
        },
        {
            id: "dsa-w11-3-q4",
            question: "Kruskal 算法使用什么数据结构判断是否形成环？",
            options: ["栈", "队列", "并查集", "哈希表"],
            answer: 2,
            rationale: "Kruskal 用并查集判断边的两个端点是否已在同一连通分量（在则会形成环）。"
        },
        {
            id: "dsa-w11-3-q5",
            question: "Kruskal 算法的时间复杂度是？",
            options: ["O(V²)", "O(E log V)", "O(E log E)", "O(VE)"],
            answer: 2,
            rationale: "排序边 O(E log E)，并查集操作近似 O(E)，总时间由排序主导 O(E log E)。"
        },
        {
            id: "dsa-w11-3-q6",
            question: "Prim 和 Dijkstra 的相似之处是？",
            options: [
                "都基于动态规划",
                "都维护已处理顶点集合，每次贪心选择最小权重扩展",
                "都不能处理负权",
                "都求最短路径"
            ],
            answer: 1,
            rationale: "两者都是贪心算法，维护已处理集合，每次选择最小权重边/顶点扩展。区别是选择标准不同。"
        },
        {
            id: "dsa-w11-3-q7",
            question: "MST 一定是唯一的吗？",
            options: [
                "一定唯一",
                "一定不唯一",
                "如果所有边权不同则唯一，否则可能不唯一",
                "取决于算法"
            ],
            answer: 2,
            rationale: "边权都不同时 MST 唯一；有相同权重的边时可能存在多棵 MST（但总权重相同）。"
        },
        {
            id: "dsa-w11-3-q8",
            question: "Kruskal 算法每次选择什么边？",
            options: [
                "随机边",
                "权重最大的边",
                "权重最小的且不形成环的边",
                "连接已访问和未访问顶点的边"
            ],
            answer: 2,
            rationale: "Kruskal 按边权排序，每次选择最小权重的边，如果不形成环就加入 MST。"
        },
        {
            id: "dsa-w11-3-q9",
            question: "稀疏图更适合用哪种 MST 算法？",
            options: ["Prim", "Kruskal", "都一样", "都不适合"],
            answer: 1,
            rationale: "稀疏图边少，Kruskal 排序边的代价低 O(E log E)；Prim 需要频繁的堆操作。"
        },
        {
            id: "dsa-w11-3-q10",
            question: "优先队列实现 Prim 的时间复杂度是？",
            options: ["O(V²)", "O(E log V)", "O(E log E)", "O(VE)"],
            answer: 1,
            rationale: "类似 Dijkstra，优先队列操作 O(log V)，每条边最多入队一次，总时间 O(E log V)。"
        },
        {
            id: "dsa-w11-3-q11",
            question: "以下哪个不是 MST 的应用？",
            options: ["网络设计", "聚类算法", "最短路径", "电路设计"],
            answer: 2,
            rationale: "MST 用于最小代价连接所有点，不是求两点间最短路径。最短路径用 Dijkstra 等算法。"
        },
        {
            id: "dsa-w11-3-q12",
            question: "次小生成树的求法是？",
            options: [
                "用 Kruskal 选第二小的边",
                "枚举 MST 中的每条边，删除后求新 MST，取最小值",
                "用 Prim 从第二个顶点开始",
                "无法求得"
            ],
            answer: 1,
            rationale: "枚举删除 MST 的每条边，每次求剩余图的 MST，所有结果中的最小值就是次小生成树。"
        }
    ],
    "dsa-w11-4": [
        {
            id: "dsa-w11-4-q1",
            question: "网络流问题中，「流」必须满足什么约束？",
            options: [
                "只需要不超过容量",
                "流量守恒（除源汇外，流入 = 流出）和容量约束",
                "流量必须是整数",
                "必须经过所有边"
            ],
            answer: 1,
            rationale: "网络流的两个约束：容量约束（流量 ≤ 容量）和流量守恒（除源汇外，每个顶点流入 = 流出）。"
        },
        {
            id: "dsa-w11-4-q2",
            question: "最大流最小割定理说的是？",
            options: [
                "最大流 < 最小割",
                "最大流 > 最小割",
                "最大流 = 最小割",
                "两者无关"
            ],
            answer: 2,
            rationale: "最大流最小割定理：从源到汇的最大流量等于将源和汇分开的最小割的容量。"
        },
        {
            id: "dsa-w11-4-q3",
            question: "Ford-Fulkerson 方法的核心操作是？",
            options: [
                "找最短路径",
                "找增广路径并发送流量",
                "找最大权边",
                "拓扑排序"
            ],
            answer: 1,
            rationale: "Ford-Fulkerson 反复寻找增广路径（从源到汇且有剩余容量的路径），沿路径发送流量。"
        },
        {
            id: "dsa-w11-4-q4",
            question: "残余图中的「反向边」的作用是？",
            options: [
                "表示原图的反向边",
                "允许撤销之前的流量决策",
                "增加图的连通性",
                "减少时间复杂度"
            ],
            answer: 1,
            rationale: "反向边的容量等于已发送的流量，允许后续增广路径「退还」之前发送的流量，实现更优分配。"
        },
        {
            id: "dsa-w11-4-q5",
            question: "Edmonds-Karp 算法是 Ford-Fulkerson 的什么版本？",
            options: [
                "使用 DFS 找增广路径",
                "使用 BFS 找最短增广路径",
                "使用随机搜索",
                "不使用残余图"
            ],
            answer: 1,
            rationale: "Edmonds-Karp 使用 BFS 找最短增广路径（边数最少），保证时间复杂度 O(VE²)。"
        },
        {
            id: "dsa-w11-4-q6",
            question: "如何用最大流解决二分图最大匹配？",
            options: [
                "直接用 Dijkstra",
                "添加源汇，所有边容量为 1，求最大流",
                "用 MST 算法",
                "无法用最大流解决"
            ],
            answer: 1,
            rationale: "添加超级源连接左部所有点，超级汇连接右部所有点，所有边容量 1，最大流即最大匹配数。"
        },
        {
            id: "dsa-w11-4-q7",
            question: "增广路径的「瓶颈容量」是指？",
            options: [
                "路径上所有边容量之和",
                "路径上剩余容量最小的边的容量",
                "路径上最大容量边的容量",
                "路径长度"
            ],
            answer: 1,
            rationale: "瓶颈容量是路径上剩余容量最小的边，决定了这条路径能发送的最大流量。"
        },
        {
            id: "dsa-w11-4-q8",
            question: "Ford-Fulkerson 什么时候终止？",
            options: [
                "找到一条增广路径后",
                "找不到增广路径时",
                "遍历完所有边后",
                "流量达到某个阈值时"
            ],
            answer: 1,
            rationale: "当残余图中不存在从源到汇的增广路径时，说明已达到最大流，算法终止。"
        },
        {
            id: "dsa-w11-4-q9",
            question: "Edmonds-Karp 算法的时间复杂度是？",
            options: ["O(VE)", "O(V²E)", "O(VE²)", "O(E²)"],
            answer: 2,
            rationale: "Edmonds-Karp 最多 O(VE) 次增广，每次 BFS 是 O(E)，总时间 O(VE²)。"
        },
        {
            id: "dsa-w11-4-q10",
            question: "「割」在网络流中的定义是？",
            options: [
                "删除的边",
                "将源和汇分开的边集",
                "容量为 0 的边",
                "增广路径"
            ],
            answer: 1,
            rationale: "割是将顶点分成两部分 S 和 T（源在 S，汇在 T）的边集，割的容量是从 S 到 T 的边的容量之和。"
        },
        {
            id: "dsa-w11-4-q11",
            question: "没有反向边的 Ford-Fulkerson 会有什么问题？",
            options: [
                "运行更快",
                "可能找不到最大流",
                "会陷入死循环",
                "无法处理无向图"
            ],
            answer: 1,
            rationale: "没有反向边就不能「撤销」之前的流量决策，可能导致次优解，无法找到真正的最大流。"
        },
        {
            id: "dsa-w11-4-q12",
            question: "以下哪个不是最大流的应用？",
            options: ["二分图匹配", "任务分配", "最短路径", "图像分割"],
            answer: 2,
            rationale: "最短路径用 Dijkstra/Bellman-Ford 等算法。最大流用于匹配、分配、分割等问题。"
        }
    ]
}
