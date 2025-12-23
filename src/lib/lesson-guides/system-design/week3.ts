import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "w3-3": {
        lessonId: "w3-3",
        background: [
            "【同步复制定义】同步复制要求主节点等待至少一个从节点确认收到数据后才向客户端返回成功。DDIA 指出：'synchronous replication guarantees data availability if the leader fails'——但代价是'if the synchronous follower does not respond, the write cannot be processed'。",
            "【异步复制定义】异步复制中，主节点更新后立即返回客户端，不等待从节点确认。优势是'the leader can continue processing writes, even if all its followers have fallen behind'——但风险是：'if the leader fails in the middle of a replication operation, we lose the data that's not replicated'。",
            "【半同步复制定义】半同步复制位于同步和异步之间，'once the Master node updates its own copy of the data, it synchronously replicates the data to a subset of Replicas and asynchronously to others'。实践中通常配置一个同步从节点加多个异步从节点，平衡持久性与性能。",
            "【复制延迟问题】DDIA 将异步复制的数据库称为'eventually consistent'——'The word eventually is intentionally vague because it's not certain how long the lag can be'。延迟产生三大读一致性问题：读己之写（read-your-own-writes）、单调读（monotonic reads）、一致前缀读（consistent prefix reads）。",
            "【RPO/RTO 影响】同步复制 RPO=0（无数据丢失），RTO 取决于故障转移速度；异步复制 RPO > 0（丢失复制延迟内的数据），但 RTO 更短因为不依赖从节点响应。半同步是'addresses durability without severely affecting throughput'的折衷。"
        ],
        keyDifficulties: [
            "【同步复制的可用性陷阱】DDIA 警告：'using synchronous replication for all followers is not a great solution, as any small problem in replication can block all write operations'。单个从节点故障会阻塞整个系统，这就是为什么实践中很少使用全同步模式。",
            "【半同步降级问题】MySQL 文档指出：'a semi-synchronous system will revert to asynchronous replication if the latency between nodes passes a certain threshold'。这意味着在系统压力最大时（最需要保护的时刻），系统可能恰好降级为异步模式，存在数据丢失风险。",
            "【AFTER_SYNC vs AFTER_COMMIT】MySQL 半同步有两个等待点：AFTER_SYNC（先等从节点确认再提交）更安全但客户端可能看不到刚提交的数据；AFTER_COMMIT（先提交再等确认）客户端立即看到数据但主节点崩溃可能丢失。默认使用更安全的 AFTER_SYNC。",
            "【读一致性难题】异步复制的三大读问题：1) 读己之写——用户刚写的数据从从节点读不到；2) 单调读——多次读取可能'moving backward in time'；3) 一致前缀读——因果相关的写被乱序读取。这些问题需要路由策略或版本追踪解决。"
        ],
        handsOnPath: [
            "配置 PostgreSQL 流复制：设置 primary_conninfo、synchronous_standby_names，测试 synchronous_commit 不同选项（off/on/remote_write/remote_apply）对写延迟的影响。",
            "配置 MySQL 半同步复制：安装 semisync_source/semisync_replica 插件，对比 AFTER_SYNC 和 AFTER_COMMIT 模式的行为差异。",
            "模拟网络延迟：使用 tc 命令给从节点添加延迟，观察半同步复制何时降级为异步，以及 Rpl_semi_sync_source_no_tx 计数器变化。",
            "测试故障转移数据丢失：在主节点写入大量数据后立即 kill -9，对比同步和异步复制模式下从节点的数据完整性。",
            "监控复制延迟：PostgreSQL 使用 pg_stat_replication 的 write_lag/flush_lag/replay_lag；MySQL 使用 SHOW REPLICA STATUS 的 Seconds_Behind_Source。"
        ],
        selfCheck: [
            "同步、异步、半同步复制各自的核心权衡是什么？",
            "为什么 DDIA 说'使用全同步复制不是好方案'？",
            "解释 MySQL 半同步复制的 AFTER_SYNC 和 AFTER_COMMIT 模式差异？",
            "什么是'读己之写'一致性问题？如何解决？",
            "半同步复制在什么情况下会降级为异步？这带来什么风险？"
        ],
        extensions: [
            "研究 PostgreSQL 的 Quorum-based 同步复制：synchronous_standby_names = 'ANY 2 (s1, s2, s3)'。",
            "学习 MySQL Group Replication 与半同步复制的区别。",
            "阅读 DDIA 第 5 章关于多主复制和无主复制的内容。",
            "研究 CockroachDB 和 TiDB 如何实现同步复制而不牺牲性能。"
        ],
        sourceUrls: [
            "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
            "https://www.postgresql.org/docs/current/warm-standby.html",
            "https://dev.mysql.com/doc/refman/8.0/en/replication-semisync.html"
        ]
    },
    "w3-2": {
        lessonId: "w3-2",
        background: [
            "【Active-Passive 架构定义】Active-Passive（主备）架构中，多个相同系统被部署，但只有一个主动处理生产流量，其他处于待命状态。目的是通过快速切换到备用系统来确保服务连续性。核心组件包括：备用服务器、心跳机制、数据复制。",
            "【Active-Active 架构定义】Active-Active（多活）架构中，多个节点同时运行并分担工作负载。即使一个节点失败，系统也能无中断继续运行。通常依赖负载均衡器在所有节点间分发流量，适用于高流量、对性能要求严格的系统。",
            "【RTO 与 RPO 概念】RTO（Recovery Time Objective）是服务恢复前的最大可接受停机时间；RPO（Recovery Point Objective）是自上次备份以来的最大可容忍数据丢失时间。这两个指标决定了灾难恢复策略的选择。",
            "【AWS 四种 DR 策略】从低成本到高可用：Backup & Restore（最慢恢复但最便宜）→ Pilot Light（最小备用环境）→ Warm Standby（缩减版的完整环境持续运行）→ Multi-Site Active/Active（主备同时服务生产流量，无恢复时间但成本最高）。",
            "【故障检测机制】心跳机制用于持续检查主服务器的健康和可用性，检测无响应或系统问题。AWS Route 53 的健康检查可配置 Active-Active 和 Active-Passive 故障转移——主资源健康时使用主记录，不健康时切换到辅助记录。"
        ],
        keyDifficulties: [
            "【Active-Passive 的可预测性优势】故障转移通常是可预测和受控的——备用系统仅在必要时激活。这种受控过程允许在不影响运行的情况下进行计划维护。银行、医疗、政府等需要明确灾难恢复流程和审计跟踪的行业常采用此架构。",
            "【Active-Active 的同步复杂性】所有好处都建立在良好设计的基础上——需要健壮的同步机制、负载均衡和规划。数据一致性是最大挑战：多个节点同时写入时如何避免冲突？常用方案包括分区写入、冲突解决算法（CRDT）、分布式锁。",
            "【脑裂问题】当网络分区发生时，两边的节点可能都认为自己是主节点，导致脑裂（Split-Brain）。解决方案包括：Quorum 投票（只有获得多数票的分区继续服务）、STONITH（Shoot The Other Node In The Head，强制关闭另一节点）。",
            "【遗留系统的适配】许多老应用未针对分布式计算构建，难以适应复杂的 Active-Active 架构。Active-Passive 为这些系统提供高可用性，无需昂贵的重写。这是实用主义的选择。"
        ],
        handsOnPath: [
            "使用 Keepalived 搭建两节点 Active-Passive 集群，配置虚拟 IP（VIP）和健康检查，模拟主节点故障观察自动切换。",
            "使用 HAProxy 配置 Active-Active 负载均衡，设置健康检查，模拟一个节点下线观察流量重分配。",
            "在 AWS 上使用 Route 53 健康检查配置 DNS 级别的故障转移，测试主资源不健康时的 DNS 解析变化。",
            "计算不同业务场景的 RTO/RPO 需求：电商订单系统、社交媒体 Feed、金融交易系统分别应该是什么？",
            "绘制 Pilot Light、Warm Standby、Multi-Site Active/Active 三种架构的成本 vs RTO 曲线图。"
        ],
        selfCheck: [
            "Active-Passive 和 Active-Active 架构的核心区别是什么？各自适用于什么场景？",
            "解释 RTO 和 RPO 的概念及其对灾难恢复策略选择的影响？",
            "什么是脑裂问题？如何预防和解决？",
            "AWS 的四种 DR 策略（Backup & Restore、Pilot Light、Warm Standby、Multi-Site）在成本和恢复时间上如何权衡？",
            "为什么说 Active-Active 架构'所有好处都建立在良好设计的基础上'？"
        ],
        extensions: [
            "研究 Pacemaker + Corosync 如何实现 Linux 高可用集群。",
            "学习 MySQL Group Replication 和 Galera Cluster 的多主复制原理。",
            "阅读 AWS Well-Architected Framework 的可靠性支柱。",
            "研究 Cloudflare 的 Anycast DNS 如何实现全球级别的 Active-Active。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/category/availability",
            "https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-i-strategies-for-recovery-in-the-cloud/",
            "https://www.geeksforgeeks.org/system-design/active-passive-active-active-architecture-for-high-availability-system/"
        ]
    },
    "w3-1": {
        lessonId: "w3-1",
        background: [
            "【SLI/SLO/SLA 三层体系】SLI（Service Level Indicator）是'精心定义的服务水平量化度量'，如请求延迟、错误率、可用性。SLO（Service Level Objective）是 SLI 的目标值，如'P99 延迟 < 200ms'。SLA（Service Level Agreement）是带有后果（通常是经济赔偿）的合同承诺。",
            "【选择 SLI 的核心原则】Google SRE 强调：从用户需求出发，而非从可测量的指标出发。不同类型服务优先关注不同指标：用户界面系统关注可用性和延迟；存储系统关注延迟、可用性和持久性；大数据系统关注吞吐量和端到端延迟。",
            "【避免均值陷阱】'大多数指标最好被视为分布而非平均值'——如果只看平均延迟 100ms，可能掩盖了 P99 是 5 秒的事实。设计 SLI 时应关注百分位数（P50、P99、P999），而非平均值。",
            "【错误预算概念】错误预算（Error Budget）= 100% - SLO。如果 SLO 是 99.9% 可用性，错误预算就是 0.1%（每月约 43 分钟）。这个预算用于平衡创新速度与可靠性——用完预算就冻结发布，专注修复可靠性问题。",
            "【可用性数字的含义】99.9%（三个9）意味着每年约 8.76 小时停机；99.99%（四个9）意味着每年约 52 分钟停机；99.999%（五个9）意味着每年约 5 分钟停机。Google 指出：'100% 可用性不是正确目标——用户无法察觉 100% 和 99.999% 的区别'。"
        ],
        keyDifficulties: [
            "【SLO 不是当前性能的反映】常见错误是根据当前系统性能设定 SLO。正确做法是：根据用户真正需要的服务水平来设定，然后努力达到。过于严格的 SLO 浪费资源，过于宽松的 SLO 让用户不满。",
            "【SLO 是决策工具，非报告指标】SLO 驱动运营决策的四步循环：监控 SLI → 与 SLO 比较 → 确定需要的行动 → 执行变更。没有 SLO，团队缺乏客观标准来判断何时需要干预。",
            "【Chubby 案例的教训】Google 的锁服务 Chubby 可靠性极高，导致依赖者假设它永远不会失败。解决方案：'SRE 确保 Chubby 达到但不显著超过其 SLO'——通过计划内停机消耗错误预算，强迫依赖方正确处理失败。",
            "【实施 SLO 的迭代原则】'第一次尝试 SLI 和 SLO 不必正确；最重要的目标是先建立并测量。'从 3-5 个 SLI 开始，使用四周滚动窗口，结合周总结和季度评审，根据用户满意度数据持续迭代。"
        ],
        handsOnPath: [
            "使用可用性计算器（availability.sre.xyz）计算不同可用性级别的允许停机时间，理解每增加一个 9 的成本跃升。",
            "为你负责的服务定义 3-5 个 SLI，区分用户侧指标（如页面加载时间）和服务侧指标（如 API 延迟）。",
            "设定初始 SLO 并计算错误预算：如果 SLO 是 99.9%，每月允许多少分钟停机？",
            "使用 Prometheus + Grafana 构建 SLO 仪表板，展示 SLI 当前值、SLO 目标线、错误预算消耗率。",
            "制定错误预算政策：当预算耗尽 50% 时采取什么行动？耗尽 100% 时呢？"
        ],
        selfCheck: [
            "SLI、SLO、SLA 三者的核心区别是什么？SLA 与 SLO 的本质区别在哪里？",
            "为什么 Google SRE 说'100% 可用性不是正确目标'？",
            "解释错误预算的概念及其在平衡创新与可靠性中的作用？",
            "99.9% 和 99.99% 可用性在年停机时间上的差异是多少？",
            "为什么说 SLO 应该基于用户需求而非当前性能来设定？"
        ],
        extensions: [
            "阅读 Google SRE Book 完整的 SLO 章节，理解控制循环框架。",
            "研究 Datadog、New Relic 等 APM 工具如何实现 SLO 监控和告警。",
            "学习 OpenSLO 规范——定义 SLO 的开放标准。",
            "研究 Netflix 的 'Error Budget' 实践和他们的可用性目标设定方法。"
        ],
        sourceUrls: [
            "https://sre.google/sre-book/service-level-objectives/",
            "https://sre.google/workbook/implementing-slos/",
            "https://availability.sre.xyz/"
        ]
    },
    "w3-4": {
        lessonId: "w3-4",
        background: [
            "【心跳机制基础】心跳是分布式系统中节点间定期发送的信号，用于表明'我还活着'。推荐心跳间隔 1-10 秒，超时设置应至少是心跳间隔的 2-3 倍。关键原则：'timeout should be at least 10 times the round-trip time'。",
            "【固定超时的局限】固定超时产生二元判断（存活/死亡），存在两难：'short timeouts cause false positives; long timeouts delay detection'。网络抖动或瞬时延迟容易导致误判，而过长超时则延误故障发现。",
            "【Phi Accrual Failure Detector】与固定超时不同，Phi 检测器'outputs the suspicion information on a continuous scale'。通过统计历史心跳到达时间，计算 φ 值：φ=1 表示 10% 误判率，φ=2 表示 1% 误判率，φ=3 表示 0.1% 误判率。Cassandra 默认阈值 φ=8（99.9999% 置信度）。",
            "【脑裂定义】脑裂发生在集群节点失去通信后分裂成多个独立组，'each believing it's the only active set'。后果严重：'two parts of the system simultaneously think they are in charge'，导致数据分歧、冲突更新甚至数据丢失。",
            "【Quorum 防脑裂】使用奇数节点确保只有持有多数的分区可以继续运行。少数派分区自动变为只读，'using an odd number of nodes ensures only the partition holding a majority can continue operating'。双节点集群需要第三方见证节点打破平局。"
        ],
        keyDifficulties: [
            "【STONITH 机制】Fencing/STONITH（Shoot The Other Node In The Head）通过强制隔离故障节点防止脑裂——'forcefully isolates faulty nodes to prevent it from simultaneously modifying shared data'。方式包括：断电、撤销存储访问、阻断网络。",
            "【互相 Fencing 问题】如果节点还活着，它会认为其他节点有问题并尝试 fence 对方，形成'infinite reboot loop'。解决方案：只有拥有 Quorum 的分区才能执行 fencing，'a cluster partition may execute fencing only if the partition has quorum'。",
            "【Phi 检测的自适应性】Phi 检测器基于正态分布建模历史心跳间隔，计算均值和方差，动态调整检测阈值。这使系统能'adapt to changing network conditions'——在高延迟环境自动放宽判定，在稳定环境快速检测故障。",
            "【双节点集群的挑战】两节点集群在网络分区时面临'coin-flip'困境：两边都可能宣称自己是主节点，或两边都等待而完全停止。解决方案是引入仲裁节点（witness/arbiter），'Its only role is to participate in node communication and provide a tie-break vote'。"
        ],
        handsOnPath: [
            "实现简单的心跳检测：用两个进程模拟节点，发送周期性心跳，测试不同超时设置对误判率的影响。",
            "研究 Cassandra 的 phi_convict_threshold 参数：在测试集群中调整此值，观察高延迟环境下的节点判活行为。",
            "使用 Pacemaker/Corosync 搭建高可用集群，配置 STONITH 设备，模拟网络分区观察 fencing 行为。",
            "在 3 节点 etcd 集群中模拟网络分区：隔离一个节点，验证 Quorum 机制是否正确工作（2 节点继续服务，1 节点只读）。",
            "实现 Phi Accrual 检测器原型：维护心跳间隔的滑动窗口，计算正态分布参数，输出 φ 值而非二元结果。"
        ],
        selfCheck: [
            "固定超时心跳检测的两难问题是什么？",
            "Phi Accrual Failure Detector 如何解决固定超时的局限？",
            "什么是脑裂？它会造成什么后果？",
            "Quorum 如何防止脑裂？为什么推荐使用奇数节点？",
            "STONITH 是什么？为什么只有拥有 Quorum 的分区才能执行 fencing？"
        ],
        extensions: [
            "阅读 Cassandra 源码中 Phi Accrual Failure Detector 的实现。",
            "研究 Raft 协议中的 Leader Election 和心跳机制。",
            "学习 Pacemaker 的 fencing 配置和最佳实践。",
            "研究 ZooKeeper 的会话和临时节点如何实现租约机制。"
        ],
        sourceUrls: [
            "https://www.researchgate.net/publication/29682135_The_ph_accrual_failure_detector",
            "https://raft.github.io/",
            "https://en.wikipedia.org/wiki/Split-brain_(computing)"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "w3-3": [
        {
            id: "w3-3-q1",
            question: "同步复制的核心权衡是什么？",
            options: [
                "高性能但数据可能丢失",
                "保证数据持久性但单个从节点故障可能阻塞系统",
                "延迟最低但一致性最弱",
                "成本最低但可用性最差"
            ],
            answer: 1,
            rationale: "DDIA 指出：'synchronous replication guarantees data availability if the leader fails'，但代价是'if the synchronous follower does not respond, the write cannot be processed'。"
        },
        {
            id: "w3-3-q2",
            question: "为什么 DDIA 说'使用全同步复制不是好方案'？",
            options: [
                "因为同步复制成本太高",
                "因为任何小问题都可能阻塞所有写操作",
                "因为同步复制延迟太大",
                "因为同步复制不支持跨数据中心"
            ],
            answer: 1,
            rationale: "DDIA 警告：'using synchronous replication for all followers is not a great solution, as any small problem in replication can block all write operations'。"
        },
        {
            id: "w3-3-q3",
            question: "异步复制的主要风险是什么？",
            options: [
                "写入延迟过高",
                "不支持读取扩展",
                "主节点故障时丢失未复制的数据",
                "配置过于复杂"
            ],
            answer: 2,
            rationale: "'if the leader fails in the middle of a replication operation, we lose the data that's not replicated to followers'——这是异步复制的核心风险。"
        },
        {
            id: "w3-3-q4",
            question: "半同步复制的典型配置是什么？",
            options: [
                "所有从节点都是同步的",
                "所有从节点都是异步的",
                "一个同步从节点加多个异步从节点",
                "没有从节点，只有主节点"
            ],
            answer: 2,
            rationale: "实践中'一个同步从节点加多个异步从节点'是常见配置，'addresses durability without severely affecting throughput'。"
        },
        {
            id: "w3-3-q5",
            question: "MySQL 半同步复制的 AFTER_SYNC 模式的特点是什么？",
            options: [
                "先提交事务再等待从节点确认",
                "先等待从节点确认再提交事务",
                "不等待任何确认直接提交",
                "等待所有从节点确认后提交"
            ],
            answer: 1,
            rationale: "AFTER_SYNC 模式'先等从节点确认再提交'，更安全但客户端可能看不到刚提交的数据。这是 MySQL 半同步的默认模式。"
        },
        {
            id: "w3-3-q6",
            question: "什么是'读己之写'（read-your-own-writes）一致性问题？",
            options: [
                "多个用户读取同一数据时产生冲突",
                "用户刚写入的数据从从节点读不到",
                "写入操作超时失败",
                "读取操作返回旧版本数据"
            ],
            answer: 1,
            rationale: "读己之写是异步复制的经典问题：'Users reading from asynchronous followers may see outdated data they just wrote, making it appear lost'。"
        },
        {
            id: "w3-3-q7",
            question: "DDIA 为什么将异步复制系统称为'eventually consistent'？",
            options: [
                "因为数据最终会被删除",
                "因为延迟不确定，'The word eventually is intentionally vague'",
                "因为只支持最终一致性级别",
                "因为性能最终会下降"
            ],
            answer: 1,
            rationale: "DDIA 指出'eventually'这个词故意模糊：'The word eventually is intentionally vague because it's not certain how long the lag can be'。"
        },
        {
            id: "w3-3-q8",
            question: "PostgreSQL 的 synchronous_commit = remote_apply 意味着什么？",
            options: [
                "不等待任何从节点",
                "等待从节点写入磁盘",
                "等待从节点应用更改（可读一致）",
                "等待从节点写入缓冲区"
            ],
            answer: 2,
            rationale: "remote_apply 选项'备用已应用'，提供最强的持久性保证——'强（可读一致）'，但延迟也最高。"
        },
        {
            id: "w3-3-q9",
            question: "半同步复制在什么情况下会降级为异步模式？",
            options: [
                "当主节点 CPU 使用率过高时",
                "当从节点延迟超过阈值时",
                "当磁盘空间不足时",
                "当网络带宽饱和时"
            ],
            answer: 1,
            rationale: "MySQL 文档指出：'a semi-synchronous system will revert to asynchronous replication if the latency between nodes passes a certain threshold'。"
        },
        {
            id: "w3-3-q10",
            question: "什么是'单调读'（monotonic reads）问题？",
            options: [
                "读取速度单调递减",
                "多次读取可能'moving backward in time'看到更旧的数据",
                "只能读取一次数据",
                "读取时锁定数据不允许其他读取"
            ],
            answer: 1,
            rationale: "单调读问题：'Distributing reads across multiple followers can cause moving backward in time effects, where subsequent reads show older data'。"
        },
        {
            id: "w3-3-q11",
            question: "同步复制对 RPO（Recovery Point Objective）的影响是什么？",
            options: [
                "RPO 取决于网络延迟",
                "RPO = 0，因为数据已复制到从节点",
                "RPO > 0，存在数据丢失窗口",
                "RPO 无法确定"
            ],
            answer: 1,
            rationale: "同步复制保证'RPO=0（无数据丢失）'，因为事务提交前数据已经到达至少一个从节点。"
        },
        {
            id: "w3-3-q12",
            question: "解决'读己之写'问题的常用方案是什么？",
            options: [
                "增加从节点数量",
                "将用户读取路由到主节点或追踪更新时间戳",
                "使用更快的网络",
                "禁用复制功能"
            ],
            answer: 1,
            rationale: "解决方案包括'routing user reads to the leader or tracking update timestamps'——要么读主节点，要么追踪时间戳确保读到足够新的数据。"
        }
    ],
    "w3-2": [
        {
            id: "w3-2-q1",
            question: "Active-Passive 架构的核心特点是什么？",
            options: [
                "所有节点同时处理生产流量",
                "只有一个节点主动服务，其他节点待命",
                "流量在所有节点间均匀分配",
                "不需要数据复制"
            ],
            answer: 1,
            rationale: "Active-Passive 架构中，'只有一个主动处理生产流量，其他处于待命状态'。备用节点仅在主节点故障时激活。"
        },
        {
            id: "w3-2-q2",
            question: "RTO（Recovery Time Objective）的定义是什么？",
            options: [
                "自上次备份以来的最大可容忍数据丢失时间",
                "服务恢复前的最大可接受停机时间",
                "系统正常运行的百分比",
                "故障检测的时间间隔"
            ],
            answer: 1,
            rationale: "RTO 是'服务恢复前的最大可接受停机时间'。RPO 才是'自上次备份以来的最大可容忍数据丢失时间'。两者共同决定 DR 策略。"
        },
        {
            id: "w3-2-q3",
            question: "AWS 四种 DR 策略中，恢复时间最短但成本最高的是？",
            options: [
                "Backup & Restore",
                "Pilot Light",
                "Warm Standby",
                "Multi-Site Active/Active"
            ],
            answer: 3,
            rationale: "Multi-Site Active/Active'主备同时服务生产流量，无恢复时间但成本最高'。Backup & Restore 恢复最慢但最便宜。"
        },
        {
            id: "w3-2-q4",
            question: "什么是脑裂（Split-Brain）问题？",
            options: [
                "服务器 CPU 过载导致性能下降",
                "网络分区时两边的节点都认为自己是主节点",
                "数据库表结构不一致",
                "负载均衡器故障"
            ],
            answer: 1,
            rationale: "脑裂发生在'网络分区时，两边的节点可能都认为自己是主节点'，导致数据不一致。解决方案包括 Quorum 投票和 STONITH。"
        },
        {
            id: "w3-2-q5",
            question: "Active-Active 架构的最大挑战是什么？",
            options: [
                "成本控制",
                "数据一致性——多个节点同时写入时如何避免冲突",
                "节点数量限制",
                "负载均衡器性能"
            ],
            answer: 1,
            rationale: "'数据一致性是最大挑战：多个节点同时写入时如何避免冲突？'常用方案包括分区写入、CRDT、分布式锁。"
        },
        {
            id: "w3-2-q6",
            question: "Pilot Light DR 策略的特点是什么？",
            options: [
                "完整的生产环境副本持续运行",
                "最小备用环境，仅维护核心组件和数据副本",
                "定期备份，故障时恢复",
                "两个站点同时服务生产流量"
            ],
            answer: 1,
            rationale: "Pilot Light 是'最小备用环境，仅维护核心组件和数据副本'。提供成本效益的同时允许故障时快速扩展。"
        },
        {
            id: "w3-2-q7",
            question: "STONITH 的含义和用途是什么？",
            options: [
                "一种负载均衡算法",
                "Shoot The Other Node In The Head——强制关闭另一节点以解决脑裂",
                "一种数据复制协议",
                "一种健康检查机制"
            ],
            answer: 1,
            rationale: "STONITH（Shoot The Other Node In The Head）是解决脑裂的方法——'强制关闭另一节点'，确保只有一个节点作为主节点。"
        },
        {
            id: "w3-2-q8",
            question: "哪种行业更适合使用 Active-Passive 架构？",
            options: [
                "高流量电商网站",
                "实时分析平台",
                "银行、医疗等需要明确审计跟踪的行业",
                "全球 SaaS 应用"
            ],
            answer: 2,
            rationale: "'银行、医疗、政府等需要明确灾难恢复流程和审计跟踪的行业常采用此架构'——Active-Passive 的可预测性和受控故障转移适合合规要求。"
        },
        {
            id: "w3-2-q9",
            question: "Warm Standby 与 Pilot Light 的主要区别是什么？",
            options: [
                "Warm Standby 不需要数据复制",
                "Warm Standby 是缩减版的完整环境持续运行，Pilot Light 只维护最小核心",
                "Pilot Light 更昂贵",
                "两者完全相同"
            ],
            answer: 1,
            rationale: "Warm Standby 是'缩减版的完整环境持续运行'，比 Pilot Light 更快恢复但成本更高。Pilot Light 只维护最小备用环境。"
        },
        {
            id: "w3-2-q10",
            question: "AWS Route 53 如何实现 DNS 级别的故障转移？",
            options: [
                "修改 DNS 记录的 TTL",
                "使用健康检查，主资源健康时使用主记录，不健康时切换到辅助记录",
                "增加 DNS 服务器数量",
                "使用 CDN 缓存"
            ],
            answer: 1,
            rationale: "Route 53'健康检查可配置故障转移——主资源健康时使用主记录，不健康时切换到辅助记录'。支持 Active-Active 和 Active-Passive。"
        },
        {
            id: "w3-2-q11",
            question: "为什么遗留系统更适合 Active-Passive 架构？",
            options: [
                "Active-Passive 成本更高",
                "遗留系统通常未针对分布式计算构建，Active-Passive 提供高可用性而无需重写",
                "Active-Active 不支持遗留系统",
                "遗留系统不需要高可用"
            ],
            answer: 1,
            rationale: "'许多老应用未针对分布式计算构建，难以适应复杂的 Active-Active 架构。Active-Passive 为这些系统提供高可用性，无需昂贵的重写。'"
        },
        {
            id: "w3-2-q12",
            question: "Quorum 投票如何解决脑裂问题？",
            options: [
                "让所有节点同时成为主节点",
                "只有获得多数票的分区继续服务",
                "随机选择一个节点",
                "关闭所有节点重新启动"
            ],
            answer: 1,
            rationale: "Quorum 投票确保'只有获得多数票的分区继续服务'——少数派分区会停止服务，避免两边同时作为主节点导致的数据不一致。"
        }
    ],
    "w3-4": [
        {
            id: "w3-4-q1",
            question: "心跳超时应该设置为心跳间隔的多少倍？",
            options: [
                "0.5 倍",
                "1 倍",
                "至少 2-3 倍",
                "10 倍以上"
            ],
            answer: 2,
            rationale: "推荐'timeout should be at least 2-3 times the heartbeat interval'，另一条原则是'timeout should be at least 10 times the round-trip time'。"
        },
        {
            id: "w3-4-q2",
            question: "固定超时心跳检测的核心问题是什么？",
            options: [
                "实现复杂度高",
                "短超时导致误判多，长超时延迟故障发现",
                "消耗带宽过多",
                "不支持集群模式"
            ],
            answer: 1,
            rationale: "固定超时存在两难：'short timeouts cause false positives; long timeouts delay detection'。无法同时满足快速检测和低误判率。"
        },
        {
            id: "w3-4-q3",
            question: "Phi Accrual Failure Detector 与固定超时的核心区别是什么？",
            options: [
                "使用更短的超时",
                "输出连续的怀疑级别而非二元判断",
                "不需要心跳",
                "只适用于小规模集群"
            ],
            answer: 1,
            rationale: "Phi 检测器'outputs the suspicion information on a continuous scale'，而非简单的存活/死亡二元判断。"
        },
        {
            id: "w3-4-q4",
            question: "在 Cassandra 中，默认的 phi_convict_threshold 是多少，代表什么置信度？",
            options: [
                "φ=1，90% 置信度",
                "φ=3，99.9% 置信度",
                "φ=8，约 99.9999% 置信度",
                "φ=10，99.99999% 置信度"
            ],
            answer: 2,
            rationale: "Cassandra 默认阈值 φ=8，'meaning a node is considered down when the algorithm is about 99.9999% confident it has failed'。"
        },
        {
            id: "w3-4-q5",
            question: "什么是脑裂（Split-brain）？",
            options: [
                "节点内存分裂导致崩溃",
                "集群分裂后多个分区都认为自己是主",
                "数据库分片不均匀",
                "网络延迟过高"
            ],
            answer: 1,
            rationale: "脑裂是'two parts of the system simultaneously think they are in charge'——集群分裂后各分区独立运行，导致数据分歧和冲突。"
        },
        {
            id: "w3-4-q6",
            question: "STONITH 的含义和用途是什么？",
            options: [
                "一种负载均衡算法",
                "Shoot The Other Node In The Head——强制隔离故障节点防止脑裂",
                "一种数据复制协议",
                "一种共识算法"
            ],
            answer: 1,
            rationale: "STONITH'forcefully isolates faulty nodes to prevent it from simultaneously modifying shared data'，方式包括断电、撤销存储访问等。"
        },
        {
            id: "w3-4-q7",
            question: "为什么只有拥有 Quorum 的分区才能执行 fencing？",
            options: [
                "因为 fencing 需要多数节点配合",
                "防止两边互相 fencing 形成无限重启循环",
                "因为少数派分区没有 fencing 设备",
                "因为规范要求"
            ],
            answer: 1,
            rationale: "如果两边都能 fencing，会形成'infinite reboot loop'。只有拥有 Quorum 的分区才能执行 fencing，确保单向控制。"
        },
        {
            id: "w3-4-q8",
            question: "双节点集群在网络分区时面临什么困境？",
            options: [
                "性能下降",
                "两边都可能宣称自己是主，或两边都停止等待",
                "数据复制失败",
                "磁盘空间不足"
            ],
            answer: 1,
            rationale: "双节点集群面临'coin-flip'困境：'both nodes might declare themselves primary, or both might shut down waiting for intervention'。"
        },
        {
            id: "w3-4-q9",
            question: "解决双节点集群 Quorum 问题的方案是什么？",
            options: [
                "增加更多数据节点",
                "引入仲裁节点（witness/arbiter）提供平局决定票",
                "使用更快的网络",
                "禁用 Quorum 机制"
            ],
            answer: 1,
            rationale: "仲裁节点'doesn't host any active services. Its only role is to participate in node communication and provide a tie-break vote'。"
        },
        {
            id: "w3-4-q10",
            question: "Phi 值 φ=2 意味着什么？",
            options: [
                "节点存活概率 50%",
                "误判概率约 1%",
                "误判概率约 10%",
                "误判概率约 0.1%"
            ],
            answer: 1,
            rationale: "Phi 值计算公式 -log10(x)：'φ=1 means 10% error margin; φ=2 means 1% error margin; φ=3 means 0.1% error margin'。"
        },
        {
            id: "w3-4-q11",
            question: "Phi Accrual 检测器为什么能适应网络变化？",
            options: [
                "使用固定的超时阈值",
                "基于历史心跳间隔的正态分布动态调整判定",
                "忽略网络延迟变化",
                "依赖人工干预调整参数"
            ],
            answer: 1,
            rationale: "Phi 检测器'maintains a sliding window of historical heartbeat arrival times'，基于正态分布建模，能'adapt to changing network conditions'。"
        },
        {
            id: "w3-4-q12",
            question: "推荐使用奇数节点集群的原因是什么？",
            options: [
                "奇数节点性能更好",
                "确保只有一个分区能获得多数票，防止脑裂",
                "奇数节点成本更低",
                "偶数节点不支持复制"
            ],
            answer: 1,
            rationale: "'Using an odd number of nodes ensures only the partition holding a majority can continue operating'——偶数节点可能导致两个分区票数相等。"
        }
    ],
    "w3-1": [
        {
            id: "w3-1-q1",
            question: "SLI、SLO、SLA 三者的正确定义关系是什么？",
            options: [
                "SLI 是合同，SLO 是指标，SLA 是目标",
                "SLI 是量化指标，SLO 是目标值，SLA 是带有后果的合同承诺",
                "三者是同一概念的不同名称",
                "SLA 是指标，SLI 是目标，SLO 是合同"
            ],
            answer: 1,
            rationale: "SLI 是'精心定义的服务水平量化度量'，SLO 是 SLI 的目标值或范围，SLA 是'包含满足或未满足 SLO 后果的合同'——关键区别是 SLA 有定义的惩罚（通常是经济）。"
        },
        {
            id: "w3-1-q2",
            question: "Google SRE 为什么说'100% 可用性不是正确目标'？",
            options: [
                "因为技术上无法实现",
                "因为用户无法察觉 100% 和 99.999% 的区别，且追求 100% 会阻止必要的更新",
                "因为成本太高",
                "因为法律不允许"
            ],
            answer: 1,
            rationale: "Google SRE 指出：'100% reliability is the wrong target because it prevents necessary updates and creates operational burnout'——用户察觉不到微小差异，但过度追求可靠性会牺牲创新和运维人员健康。"
        },
        {
            id: "w3-1-q3",
            question: "错误预算（Error Budget）的计算公式是什么？",
            options: [
                "错误预算 = SLO × 时间",
                "错误预算 = 100% - SLO",
                "错误预算 = 故障次数 / 总请求数",
                "错误预算 = SLA - SLO"
            ],
            answer: 1,
            rationale: "错误预算 = 100% - SLO。如果 SLO 是 99.9% 可用性，错误预算就是 0.1%。这个预算用于平衡创新速度与可靠性。"
        },
        {
            id: "w3-1-q4",
            question: "99.9% 可用性意味着每年允许多少停机时间？",
            options: [
                "约 52 分钟",
                "约 5 分钟",
                "约 8.76 小时",
                "约 1 天"
            ],
            answer: 2,
            rationale: "99.9%（三个9）意味着每年约 8.76 小时（或每月约 43 分钟）停机。99.99% 是约 52 分钟/年，99.999% 是约 5 分钟/年。"
        },
        {
            id: "w3-1-q5",
            question: "为什么 Google SRE 建议避免使用平均值来衡量延迟？",
            options: [
                "平均值计算太复杂",
                "平均值会掩盖长尾问题，无法反映最差情况的用户体验",
                "平均值不够精确",
                "平均值无法测量"
            ],
            answer: 1,
            rationale: "'Most metrics are better thought of as distributions rather than averages'——平均延迟 100ms 可能掩盖了 P99 是 5 秒的事实。应使用百分位数（P50、P99、P999）。"
        },
        {
            id: "w3-1-q6",
            question: "Google Chubby 案例的教训是什么？",
            options: [
                "应该追求尽可能高的可用性",
                "过高的可靠性会让依赖方错误假设服务永不失败，需要通过计划内停机强制处理失败",
                "分布式锁服务不需要高可用",
                "SLO 应该尽可能宽松"
            ],
            answer: 1,
            rationale: "Chubby 的极高可靠性导致依赖者假设它永不失败。Google 解决方案：'SRE 确保 Chubby 达到但不显著超过其 SLO'——通过计划内停机消耗错误预算。"
        },
        {
            id: "w3-1-q7",
            question: "Google SRE Workbook 推荐使用什么时间窗口来计算 SLO？",
            options: [
                "一天滚动窗口",
                "一周滚动窗口",
                "四周滚动窗口",
                "一年滚动窗口"
            ],
            answer: 2,
            rationale: "Google 推荐'a four-week rolling window'来平衡任务优先级和战略规划，同时配合周总结和季度评审。"
        },
        {
            id: "w3-1-q8",
            question: "设定 SLO 时，以下哪个做法是错误的？",
            options: [
                "从用户需求出发设定目标",
                "根据当前系统性能设定目标",
                "选择 3-5 个关键 SLI",
                "允许迭代改进"
            ],
            answer: 1,
            rationale: "常见错误是'根据当前性能设定 SLO'而不考虑改进潜力。正确做法是根据用户真正需要的服务水平来设定，然后努力达到。"
        },
        {
            id: "w3-1-q9",
            question: "对于用户界面系统，应该优先关注哪些 SLI？",
            options: [
                "吞吐量和持久性",
                "可用性、延迟和吞吐量",
                "端到端延迟和批处理时间",
                "磁盘 I/O 和 CPU 使用率"
            ],
            answer: 1,
            rationale: "Google SRE 指出不同服务类型优先关注不同指标：'user-facing systems: availability, latency, throughput'；存储系统关注延迟、可用性、持久性。"
        },
        {
            id: "w3-1-q10",
            question: "SLO 驱动运营决策的四步循环是什么？",
            options: [
                "设计 → 开发 → 测试 → 部署",
                "监控 SLI → 与 SLO 比较 → 确定行动 → 执行变更",
                "告警 → 响应 → 修复 → 复盘",
                "收集 → 分析 → 报告 → 归档"
            ],
            answer: 1,
            rationale: "SLO 驱动的控制循环：'monitor SLIs → compare to SLOs → determine needed actions → execute changes'。没有 SLO，团队缺乏客观标准判断何时需要干预。"
        },
        {
            id: "w3-1-q11",
            question: "Google SRE Workbook 关于首次实施 SLO 的建议是什么？",
            options: [
                "必须一次性设定完美的 SLO",
                "第一次不必正确，最重要的是先建立并测量",
                "应该等到系统稳定后再设定 SLO",
                "SLO 一旦设定就不能修改"
            ],
            answer: 1,
            rationale: "'Your first attempt at an SLI and SLO doesn't have to be correct; the most important goal is to get something in place and measured.'——从实践中迭代改进。"
        },
        {
            id: "w3-1-q12",
            question: "99.99% 和 99.9% 可用性之间的年停机时间差异大约是多少？",
            options: [
                "约 8 小时",
                "约 47 分钟",
                "约 5 分钟",
                "约 1 小时"
            ],
            answer: 0,
            rationale: "99.9% 约 8.76 小时/年，99.99% 约 52 分钟/年。差异约为 8.76 小时 - 52 分钟 ≈ 8 小时。每增加一个 9，允许的停机时间减少约 10 倍。"
        }
    ]
}
