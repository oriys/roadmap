import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "w4-1": {
        lessonId: "w4-1",
        background: [
            "【时钟漂移问题】即使初始设置准确，'real clocks will differ after some amount of time due to clock drift, caused by clocks counting time at slightly different rates'。系统时钟可能每天漂移几秒，几周后可能偏差数分钟甚至数小时。这使得物理时钟无法可靠地排序分布式事件。",
            "【NTP 同步精度】NTP 在公网上可将同步误差降至'a few milliseconds'，在局域网内可达'sub-millisecond levels'。但网络不对称和拥塞可能导致'errors of 100 ms or more'——这对需要严格顺序的分布式系统是不可接受的。",
            "【Lamport 论文核心】1978 年 Lamport 的经典论文指出：'In a distributed system, it is not possible in practice to synchronize time across entities'。解决方案是放弃物理时间，转向逻辑时间——通过消息传递建立'happened-before'因果关系。",
            "【TrueTime 设计】Google Spanner 的 TrueTime'represents timestamps as intervals rather than precise points'——明确表示时间不确定性。通过 GPS 和原子钟双重时间源，将不确定性控制在 1-7ms 范围，远优于 NTP 的 100-250ms。",
            "【Commit Wait 机制】Spanner 利用时间不确定性的方式'surprisingly simple: it waits'——在提交事务前等待不确定性区间结束。这确保了外部一致性（external consistency）：'the system behaves as if all transactions run sequentially'。"
        ],
        keyDifficulties: [
            "【物理时钟的多重误差源】时钟漂移来自硬件（晶振频率偏差可达数百 PPM），环境因素（温度变化导致 PPM 级随机波动），网络延迟（NTP 测量中网络抖动可达毫秒级）。这些误差叠加使物理时钟在分布式系统中不可靠。",
            "【NTP 假设的局限】NTP 假设网络往返延迟对称，但实际路由常不对称。如果请求走 10ms 路径而响应走 50ms 路径，NTP 会引入 20ms 误差。这就是为什么 NTP 精度通常只有'100ms to 250ms'。",
            "【TrueTime 的工程代价】TrueTime 需要'dedicated GPS and atomic clocks in every datacenter'，这对多数组织不可行。CockroachDB 等开源替代品使用软件时钟同步，但不确定性区间更大（100-250ms vs 1-7ms），影响性能。",
            "【闰秒问题】闰秒（leap second）是 UTC 时间的微调，但许多系统处理不当会导致故障。2012 年闰秒导致 Reddit、LinkedIn 等网站宕机。Google 采用'leap smear'策略将闰秒分散到 24 小时内逐渐调整。"
        ],
        handsOnPath: [
            "使用 ntpstat 和 ntpq -p 检查本机 NTP 同步状态，观察 offset 和 jitter 值，理解'层级'(stratum) 概念。",
            "在两台服务器间测量时钟差异：同时运行 date +%s.%N，计算差值，连续测量观察漂移趋势。",
            "模拟网络延迟不对称：使用 tc 给出入方向添加不同延迟，观察 NTP 同步误差变化。",
            "阅读 Spanner 论文的 TrueTime 章节，理解 TT.now() 返回的 [earliest, latest] 区间含义。",
            "研究 CockroachDB 如何在没有原子钟的情况下模拟 TrueTime：使用 NTP 时钟 + 最大偏移量假设。"
        ],
        selfCheck: [
            "为什么物理时钟不能可靠地排序分布式事件？",
            "NTP 的典型同步精度是多少？为什么达不到微秒级？",
            "Google TrueTime 如何表示时间？为什么使用区间而非精确值？",
            "Spanner 的 Commit Wait 机制如何利用时间不确定性保证外部一致性？",
            "什么是闰秒？它对分布式系统有什么影响？"
        ],
        extensions: [
            "研究 PTP（Precision Time Protocol）如何在局域网内实现亚微秒级同步。",
            "学习 AWS Time Sync Service 和 Azure 时钟同步机制。",
            "阅读 Lamport 1978 年论文《Time, Clocks, and the Ordering of Events》原文。",
            "研究 Facebook 时间同步基础设施 Chrony 的设计。"
        ],
        sourceUrls: [
            "https://lamport.azurewebsites.net/pubs/time-clocks.pdf",
            "https://research.google/pubs/pub39966/",
            "https://www.ntp.org/documentation/4.2.8-series/ntp/"
        ]
    },
    "w4-2": {
        lessonId: "w4-2",
        background: [
            "【Happened-Before 关系】Lamport 定义了事件间的偏序关系（→）：1) 同一进程中，a 先于 b 发生则 a→b；2) 发送消息事件导致接收消息事件，则发送→接收；3) 传递性：若 a→b 且 b→c，则 a→c。'图形上，a→b 如果我们能沿时间向前从 a 追踪到 b'。",
            "【Lamport 时钟算法】每个进程维护计数器 Ci：1) 每个本地事件后递增 Ci；2) 发送消息时附带当前时间戳；3) 接收消息时，'接收方将其 Cj 设置为大于接收到的 Ci'。时钟条件保证：'a→b ⟹ C(a) < C(b)'。",
            "【偏序到全序】Lamport 时钟只能提供偏序——并发事件可能有相同时间戳。通过附加进程 ID 打破平局可以获得全序：'先按时间戳排序，若相等则按进程 ID 排序'。但这个全序是人为的，'不能依赖它暗示因果关系'。",
            "【向量时钟】向量时钟是'(node, counter) 对的列表'，每个节点维护自己对所有节点的计数。通过比较所有分量可以判断因果：'如果第一个对象时钟的所有计数器都小于等于第二个，则第一个是祖先'。这是 Lamport 时钟无法做到的。",
            "【Dynamo 的应用】Amazon Dynamo 使用向量时钟追踪对象版本。当版本分叉时，系统返回所有冲突版本给客户端，由应用层决定如何合并。'Amazon 观察到约 99.94% 的请求只看到一个版本'——冲突实际很少发生。"
        ],
        keyDifficulties: [
            "【Lamport 时钟不能检测并发】如果 C(a) < C(b)，我们只能说'可能 a→b 或 a||b'，不能确定。Lamport 时钟满足 a→b ⟹ C(a) < C(b)，但反向不成立——这就是为什么需要向量时钟来检测真正的并发。",
            "【向量时钟的空间开销】向量时钟大小与节点数成正比，在大规模系统中增长迅速。Dynamo 采用截断策略：'按时间戳升序驱逐条目直到大小低于阈值'。虽然可能导致一致性问题，但'生产环境中尚未发现问题'。",
            "【语义冲突解决】Dynamo 将冲突解决推到读取阶段，要求应用理解如何合并。例如购物车服务可以合并两个冲突版本保留所有商品。这比写入时拒绝更灵活，但增加了应用复杂度。",
            "【版本爆炸问题】如果网络分区持续，向量时钟可能产生大量并行版本。虽然可以通过 quorum 机制减少，但极端情况下仍需要垃圾回收或人工干预。"
        ],
        handsOnPath: [
            "实现简单的 Lamport 时钟：用三个进程模拟分布式系统，通过消息传递更新时间戳，验证时钟条件。",
            "实现向量时钟比较函数：给定两个向量时钟，判断是祖先关系、后代关系还是并发。",
            "模拟 Dynamo 场景：两个客户端同时更新同一 key，观察向量时钟如何分叉，以及如何在读取时呈现冲突。",
            "分析 Riak 源码（Erlang）中向量时钟的实现，理解截断策略如何工作。",
            "设计一个使用向量时钟的简单协作编辑系统，处理并发编辑冲突。"
        ],
        selfCheck: [
            "Happened-before 关系的三条规则是什么？",
            "Lamport 时钟的更新规则是什么？",
            "为什么 Lamport 时钟不能检测并发事件？",
            "向量时钟如何判断两个版本是祖先/后代关系还是并发？",
            "Dynamo 如何处理向量时钟的增长问题？"
        ],
        extensions: [
            "阅读 Amazon Dynamo 论文原文，理解向量时钟在实际系统中的应用。",
            "研究 CRDT（Conflict-free Replicated Data Types）如何避免向量时钟的冲突解决问题。",
            "学习 Riak 和 Cassandra 中向量时钟的不同实现方式。",
            "研究 Hybrid Logical Clocks（HLC）如何结合物理时间和逻辑时间。"
        ],
        sourceUrls: [
            "https://en.wikipedia.org/wiki/Lamport_timestamp",
            "https://en.wikipedia.org/wiki/Vector_clock",
            "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf"
        ]
    },
    "w4-3": {
        lessonId: "w4-3",
        background: [
            "【共识问题】共识是'agreeing on one result among a group of participants'的过程。在节点可能故障、网络可能分区的环境中，这个问题变得复杂——需要确保所有正常节点最终就某个值达成一致。",
            "【Paxos 三阶段】Paxos 通过三阶段实现共识：1) Prepare 阶段——proposer 发送带唯一提案编号的 prepare 消息；2) Promise 阶段——acceptor 承诺不接受更低编号的提案；3) Accept 阶段——'Once a majority of acceptors agree, consensus is achieved'。",
            "【Paxos 三种角色】1) Proposer——发起提案并协调消息交换；2) Acceptor——验证提案并通过 promise/accept 响应确保一致；3) Learner——观察共识过程并获知最终决定的值。实际系统中一个节点可能同时扮演多个角色。",
            "【Raft 设计理念】Raft 是'designed to be easy to understand'的共识算法。它将共识分解为清晰的子问题：Leader Election、Log Replication、Safety，'which makes it easier to reason about and implement reliably'。",
            "【Raft Term 概念】Term 是 Raft 中的逻辑时间单位，'lies at the heart of Raft, organizing leader elections and log replication'。每个 term 从选举开始，如果候选人获胜就作为 leader 服务直到 term 结束。term 单调递增，用于识别过时信息。"
        ],
        keyDifficulties: [
            "【Paxos 难以理解】Lamport 1998 年的原始论文《The Part-Time Parliament》以虚构议会故事呈现，晦涩难懂。直到 2001 年他发表《Paxos Made Simple》才有清晰解释。这种复杂性导致工程实现容易出错。",
            "【Raft Leader Election】follower 有随机超时（150-300ms），未收到心跳则变为 candidate，'incrementing its term and requesting votes'。节点只投票给 log 至少和自己一样新的候选人。获得多数票者成为 leader 并立即发送心跳。",
            "【Raft Log Replication】leader 接收客户端命令，追加到自己的 log，通过 AppendEntries RPC 发送给 followers。'Followers append entries only if the previous log index and term match'——这确保 log 一致性。当多数节点复制后，entry 被标记为 committed。",
            "【Paxos vs 2PC】与 2PC 不同，Paxos 不需要所有节点投票——'A simple majority quorum would suffice for a proposal to be accepted'。这使 Paxos 能容忍少数节点故障，而 2PC 在协调者故障时会阻塞。"
        ],
        handsOnPath: [
            "运行 Raft 可视化演示（raft.github.io）：观察 leader election、log replication 和 network partition 场景。",
            "阅读《Paxos Made Simple》论文：用纸笔模拟两个 proposer 同时提议的场景，理解提案编号如何打破冲突。",
            "搭建 3 节点 etcd 集群：手动停止 leader 节点，观察重新选举过程和 term 变化。",
            "分析 Raft 论文中的 Figure 2（状态机规范）：理解每个 RPC 的请求/响应格式和处理规则。",
            "使用 Jepsen 测试框架分析共识算法实现的正确性问题。"
        ],
        selfCheck: [
            "Paxos 的三个阶段分别做什么？",
            "Proposer、Acceptor、Learner 三种角色的职责是什么？",
            "Raft 中的 Term 是什么？它有什么作用？",
            "Raft 的 Leader Election 如何工作？随机超时有什么作用？",
            "Paxos 与 2PC 的核心区别是什么？"
        ],
        extensions: [
            "阅读 Raft 论文《In Search of an Understandable Consensus Algorithm》原文。",
            "研究 Multi-Paxos 如何优化单一提案的开销。",
            "学习 Egalitarian Paxos（EPaxos）如何避免单点 leader 瓶颈。",
            "研究 Paxos 变体：Fast Paxos、Flexible Paxos 的设计权衡。"
        ],
        sourceUrls: [
            "https://raft.github.io/",
            "https://raft.github.io/raft.pdf",
            "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf"
        ]
    },
    "w4-4": {
        lessonId: "w4-4",
        background: [
            "【etcd Raft 最小化设计】etcd 的 Raft 实现采用最小化设计哲学：'only implementing the core raft algorithm'。用户需要自己实现网络传输、磁盘存储等组件，这种设计换来了灵活性、确定性和性能。etcd Raft 是生产环境使用最广泛的 Raft 库，支撑 Kubernetes、Docker Swarm、CockroachDB 等系统。",
            "【etcd Learner 角色】etcd 引入 Learner（学习者）解决成员变更风险：新节点作为'非投票成员'接收 leader 更新但不计入 quorum。只有追上 leader 日志后才能提升为投票成员。这解决了三个问题：leader 过载、quorum 不稳定、误配置难以恢复。",
            "【ZooKeeper ZAB 协议】ZAB（ZooKeeper Atomic Broadcast）是 ZooKeeper 的原子广播协议，提供三项保证：可靠交付（'消息 m 被一个服务器交付，最终将被所有服务器交付'）、全序性、因果序。ZAB 分两阶段：Leader 激活阶段（建立正确状态）和活跃消息阶段（类似两阶段提交）。",
            "【Zxid 事务 ID】ZooKeeper 使用 64 位 zxid 唯一标识事务：高 32 位是 epoch（领导权时期），低 32 位是计数器。epoch 类似 Raft 的 term，在 leader 更替时递增。这种设计使每个提议都有全局唯一且有序的标识符。",
            "【ZAB vs Raft 核心相似】ZAB 与 Raft 概念上非常相似：都将 leader 选举与日志复制分离，任意时刻只有一个 leader 与客户端通信。ZAB 的 epoch 等价于 Raft 的 term。两者都使用多数派 quorum 保证一致性。"
        ],
        keyDifficulties: [
            "【ZAB vs Raft 关键差异】1) 消息模型——ZAB 每次更新需要 proposal/ack/commit 三条消息，Raft 依赖底层 RPC 系统；2) 读策略——ZAB 支持从副本读取（可能陈旧），Raft 默认通过 leader 读写；3) 选举策略——ZAB 选 ID 最大的服务器，Raft 使用随机超时。",
            "【etcd 成员变更风险】添加新成员存在三大风险：1) Leader 过载——新节点需要大量数据传输可能阻塞心跳；2) Quorum 不稳定——3 节点变 4 节点时 quorum 从 2 变为 3，2+2 分区将丢失 quorum；3) 误配置不可逆——无效 peer URL 可能导致集群永久卡死。",
            "【ZooKeeper 一致性模型】ZooKeeper 的一致性'介于顺序一致性和线性一致性之间'：写操作线性化处理，读操作非线性化但顺序一致。这意味着读可能返回陈旧数据，但保证看到的写顺序一致。sync 操作可强制读取最新数据。",
            "【etcd 状态机模型】etcd Raft 将协议建模为确定性状态机：输入是 Message（本地定时器更新或网络消息），输出是三元组 {[]Messages, []LogEntries, NextState}。'相同状态的状态机，相同输入应总是产生相同输出'——这确保了可测试性和可预测性。"
        ],
        handsOnPath: [
            "搭建 3 节点 etcd 集群：使用 etcdctl 观察 member list、endpoint status，理解 leader 选举和日志复制。",
            "测试 etcd Learner：使用 etcdctl member add --learner 添加学习者节点，观察其同步进度，然后 member promote 提升为投票成员。",
            "搭建 ZooKeeper 集群：配置 zoo.cfg，使用 zkCli.sh 连接，观察 stat 命令输出的 zxid 和 leader 信息。",
            "对比 etcd 和 ZooKeeper 的读写性能：使用 benchmark 工具测试不同读写比例下的吞吐量和延迟差异。",
            "模拟网络分区：使用 iptables 隔离部分节点，观察 etcd 和 ZooKeeper 在分区情况下的行为差异。"
        ],
        selfCheck: [
            "etcd Raft 的最小化设计哲学带来了什么好处？",
            "etcd Learner 角色解决了哪三个成员变更问题？",
            "ZAB 协议的两个阶段分别是什么？",
            "zxid 的高 32 位和低 32 位分别表示什么？",
            "ZAB 和 Raft 在读策略上有什么核心差异？"
        ],
        extensions: [
            "阅读 etcd Raft 库源码（go.etcd.io/raft），理解 Node 接口和 Progress 追踪机制。",
            "研究 TiKV 的 Multi-Raft 架构如何管理大规模数据分片。",
            "学习 CockroachDB 如何结合 Raft 和混合逻辑时钟实现分布式事务。",
            "比较 Consul（Raft）和 ZooKeeper（ZAB）在服务发现场景的性能差异。"
        ],
        sourceUrls: [
            "https://etcd.io/docs/v3.5/learning/design-learner/",
            "https://zookeeper.apache.org/doc/current/zookeeperInternals.html",
            "https://www.designgurus.io/answers/detail/explain-raft-vs-paxos-vs-zab"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "w4-1": [
        {
            id: "w4-1-q1",
            question: "时钟漂移（Clock Drift）是什么现象？",
            options: [
                "时钟突然停止",
                "时钟以略微不同的速率计时，导致逐渐偏差",
                "时钟显示格式错误",
                "时钟只能向前调整"
            ],
            answer: 1,
            rationale: "'Real clocks will differ after some amount of time due to clock drift, caused by clocks counting time at slightly different rates'——漂移是累积性的，可能每天偏差几秒。"
        },
        {
            id: "w4-1-q2",
            question: "NTP 在公共互联网上的典型同步精度是多少？",
            options: [
                "微秒级",
                "几毫秒",
                "几秒",
                "几分钟"
            ],
            answer: 1,
            rationale: "NTP'can reduce synchronization offsets to times of the order of a few milliseconds over the public Internet'，在局域网内可达亚毫秒级。"
        },
        {
            id: "w4-1-q3",
            question: "Lamport 1978 年论文的核心观点是什么？",
            options: [
                "物理时钟可以精确同步",
                "分布式系统中无法可靠同步物理时间，应使用逻辑时间",
                "应该使用原子钟",
                "NTP 足以解决所有问题"
            ],
            answer: 1,
            rationale: "Lamport 论文指出'In a distributed system, it is not possible in practice to synchronize time across entities'，提出用逻辑时钟和因果关系替代物理时间。"
        },
        {
            id: "w4-1-q4",
            question: "Google TrueTime 如何表示时间？",
            options: [
                "精确的时间戳",
                "时间区间 [earliest, latest]，明确表示不确定性",
                "逻辑时钟值",
                "UTC 字符串"
            ],
            answer: 1,
            rationale: "TrueTime'represents timestamps as intervals rather than precise points'——TT.now() 返回一个保证包含真实时间的区间。"
        },
        {
            id: "w4-1-q5",
            question: "TrueTime 的时间不确定性区间通常是多少？",
            options: [
                "100-250ms",
                "1-7ms",
                "1-10 秒",
                "0（精确）"
            ],
            answer: 1,
            rationale: "Google 控制网络环境，'in practice the uncertainty interval varies between 1ms and 7ms'，远优于 NTP 的 100-250ms。"
        },
        {
            id: "w4-1-q6",
            question: "Spanner 的 Commit Wait 机制如何工作？",
            options: [
                "等待所有节点确认",
                "在提交前等待时间不确定性区间结束",
                "等待网络延迟稳定",
                "等待磁盘写入完成"
            ],
            answer: 1,
            rationale: "Spanner 的策略'surprisingly simple: simply wait for the uncertainty time period to complete before committing any transactions'。"
        },
        {
            id: "w4-1-q7",
            question: "TrueTime 使用哪两种时间源？",
            options: [
                "NTP 和 PTP",
                "GPS 接收器和原子钟",
                "本地晶振和网络时间",
                "CPU 时钟和系统时钟"
            ],
            answer: 1,
            rationale: "TrueTime 使用'GPS Time Masters'和'Armageddon Masters equipped with atomic clocks'——两种独立故障模式的时间源。"
        },
        {
            id: "w4-1-q8",
            question: "为什么 NTP 在实际使用中精度有限？",
            options: [
                "GPS 信号不稳定",
                "网络路由不对称和网络拥塞导致测量误差",
                "服务器时间不准",
                "协议设计缺陷"
            ],
            answer: 1,
            rationale: "'Asymmetric routes and network congestion can cause errors of 100 ms or more'——NTP 假设网络往返延迟对称，但实际常不成立。"
        },
        {
            id: "w4-1-q9",
            question: "什么是外部一致性（External Consistency）？",
            options: [
                "数据在多个数据中心一致",
                "系统表现得像所有事务按顺序执行",
                "外部 API 调用一致",
                "外部存储一致"
            ],
            answer: 1,
            rationale: "外部一致性保证'the system behaves as if all transactions run sequentially, even though Spanner actually runs them across multiple servers'。"
        },
        {
            id: "w4-1-q10",
            question: "CockroachDB 如何在没有原子钟的情况下处理时钟问题？",
            options: [
                "不需要处理时钟问题",
                "使用软件时钟同步 + 更大的不确定性假设",
                "使用 GPS 接收器",
                "禁用分布式事务"
            ],
            answer: 1,
            rationale: "CockroachDB'emulates TrueTime by relying on software-based clock synchronization (e.g., NTP)'，但引入更大的不确定性边界。"
        },
        {
            id: "w4-1-q11",
            question: "2012 年闰秒事件导致了什么问题？",
            options: [
                "时钟走快了一秒",
                "多个知名网站（Reddit、LinkedIn 等）宕机",
                "NTP 服务器崩溃",
                "GPS 信号中断"
            ],
            answer: 1,
            rationale: "闰秒处理不当导致系统故障，Google 采用'leap smear'策略将闰秒分散到 24 小时内逐渐调整避免突变。"
        },
        {
            id: "w4-1-q12",
            question: "晶振频率偏差通常是什么量级？",
            options: [
                "百分之几",
                "数百 PPM（百万分之一）",
                "完全精确",
                "纳秒级"
            ],
            answer: 1,
            rationale: "'In common cases, R can have systematic offsets of several hundred parts-per-million (PPM)'——PPM 级偏差累积后可达秒/天级别。"
        }
    ],
    "w4-2": [
        {
            id: "w4-2-q1",
            question: "Happened-Before 关系（→）的三条规则不包括哪个？",
            options: [
                "同一进程中，a 先于 b 发生则 a→b",
                "发送消息→接收消息",
                "传递性：a→b 且 b→c 则 a→c",
                "时间戳小则先发生"
            ],
            answer: 3,
            rationale: "Happened-Before 关系基于进程内顺序、消息传递和传递性三条规则，不依赖物理时间戳。时间戳只是实现手段。"
        },
        {
            id: "w4-2-q2",
            question: "Lamport 时钟的更新规则是什么？",
            options: [
                "只在发送消息时递增",
                "接收消息时设置为接收值加一",
                "每个事件后递增，接收时取max(本地, 接收值)+1",
                "使用物理时钟同步"
            ],
            answer: 2,
            rationale: "Lamport 时钟规则：每个事件后递增，发送时附带时间戳，'接收方将其 Cj 设置为大于接收到的 Ci'。"
        },
        {
            id: "w4-2-q3",
            question: "Lamport 时钟的时钟条件是什么？",
            options: [
                "C(a) = C(b) ⟹ a = b",
                "a→b ⟹ C(a) < C(b)",
                "C(a) < C(b) ⟹ a→b",
                "所有时钟值相等"
            ],
            answer: 1,
            rationale: "时钟条件保证'a→b ⟹ C(a) < C(b)'。但反向不成立——C(a) < C(b) 不能推出 a→b，可能是并发。"
        },
        {
            id: "w4-2-q4",
            question: "Lamport 时钟为什么不能检测并发事件？",
            options: [
                "时间戳太小",
                "只满足 a→b ⟹ C(a)<C(b)，反向不成立",
                "需要物理时钟",
                "算法有 bug"
            ],
            answer: 1,
            rationale: "'如果 C(a) < C(b)，我们只能说可能 a→b 或 a||b，不能确定'——这就是为什么需要向量时钟。"
        },
        {
            id: "w4-2-q5",
            question: "向量时钟与 Lamport 时钟的核心区别是什么？",
            options: [
                "向量时钟更快",
                "向量时钟可以检测并发事件",
                "向量时钟使用物理时间",
                "向量时钟只需要一个计数器"
            ],
            answer: 1,
            rationale: "向量时钟可以'判断两个版本是祖先/后代关系还是并发'，这是 Lamport 时钟无法做到的。"
        },
        {
            id: "w4-2-q6",
            question: "向量时钟如何判断版本 A 是版本 B 的祖先？",
            options: [
                "A 的时间戳更小",
                "A 的所有分量都小于等于 B 的对应分量",
                "A 和 B 有相同的节点 ID",
                "A 先被创建"
            ],
            answer: 1,
            rationale: "'如果第一个对象时钟的所有计数器都小于等于第二个，则第一个是祖先'——否则是并发。"
        },
        {
            id: "w4-2-q7",
            question: "Dynamo 如何处理向量时钟的增长问题？",
            options: [
                "限制节点数量",
                "按时间戳升序驱逐条目直到大小低于阈值",
                "不处理，让它无限增长",
                "使用压缩算法"
            ],
            answer: 1,
            rationale: "Dynamo'按时间戳升序驱逐条目直到大小低于阈值'。虽然可能导致一致性问题，但'生产环境中尚未发现问题'。"
        },
        {
            id: "w4-2-q8",
            question: "Dynamo 中观察到多少比例的请求只看到一个版本（无冲突）？",
            options: [
                "约 50%",
                "约 75%",
                "约 90%",
                "约 99.94%"
            ],
            answer: 3,
            rationale: "'Amazon 观察到约 99.94% 的请求只看到一个版本'——冲突在实践中很少发生。"
        },
        {
            id: "w4-2-q9",
            question: "Lamport 如何将偏序扩展为全序？",
            options: [
                "使用物理时钟",
                "先按时间戳排序，相等时按进程 ID 排序",
                "随机排序",
                "按消息大小排序"
            ],
            answer: 1,
            rationale: "'先按时间戳排序，若相等则按进程 ID 排序'。但这个全序是人为的，'不能依赖它暗示因果关系'。"
        },
        {
            id: "w4-2-q10",
            question: "Dynamo 的冲突解决策略是什么？",
            options: [
                "写入时拒绝冲突",
                "最后写入者获胜",
                "读取时返回所有冲突版本，由应用层合并",
                "自动选择最新版本"
            ],
            answer: 2,
            rationale: "Dynamo'将冲突解决推到读取阶段，要求应用理解如何合并'。例如购物车服务可以合并保留所有商品。"
        },
        {
            id: "w4-2-q11",
            question: "向量时钟的空间复杂度与什么成正比？",
            options: [
                "事件数量",
                "节点数量",
                "消息数量",
                "数据大小"
            ],
            answer: 1,
            rationale: "'向量时钟大小与节点数成正比，在大规模系统中增长迅速'——这是其主要限制。"
        },
        {
            id: "w4-2-q12",
            question: "如果向量时钟 A=[2,3,1] 和 B=[2,4,1]，它们的关系是什么？",
            options: [
                "A 是 B 的祖先",
                "B 是 A 的祖先",
                "并发",
                "相等"
            ],
            answer: 0,
            rationale: "A 的所有分量都 ≤ B 的对应分量（2≤2, 3≤4, 1≤1），所以 A 是 B 的祖先。"
        }
    ],
    "w4-3": [
        {
            id: "w4-3-q1",
            question: "共识问题的核心是什么？",
            options: [
                "所有节点必须同时在线",
                "在可能故障的环境中，让所有正常节点就某个值达成一致",
                "选举一个永久的领导者",
                "保证网络永不分区"
            ],
            answer: 1,
            rationale: "共识是'agreeing on one result among a group of participants'——在节点可能故障、网络可能分区的环境中确保一致性。"
        },
        {
            id: "w4-3-q2",
            question: "Paxos 的三个阶段按顺序是什么？",
            options: [
                "Accept → Promise → Prepare",
                "Prepare → Promise → Accept",
                "Promise → Prepare → Accept",
                "Prepare → Accept → Promise"
            ],
            answer: 1,
            rationale: "Paxos 通过三阶段实现共识：1) Prepare 阶段发送提案编号；2) Promise 阶段 acceptor 承诺；3) Accept 阶段达成共识。"
        },
        {
            id: "w4-3-q3",
            question: "Paxos 中 Proposer 的职责是什么？",
            options: [
                "验证提案并投票",
                "观察共识过程并获知最终值",
                "发起提案并协调消息交换",
                "存储共识结果"
            ],
            answer: 2,
            rationale: "Proposer'发起提案并协调消息交换'——它是共识过程的发起者和协调者。Acceptor 负责投票，Learner 负责获知结果。"
        },
        {
            id: "w4-3-q4",
            question: "Raft 为什么被设计出来？",
            options: [
                "因为 Paxos 性能太差",
                "因为 Paxos 不正确",
                "因为 Paxos 难以理解和实现",
                "因为 Paxos 不支持多值共识"
            ],
            answer: 2,
            rationale: "Raft 是'designed to be easy to understand'——Lamport 的 Paxos 原始论文晦涩难懂，导致工程实现容易出错。"
        },
        {
            id: "w4-3-q5",
            question: "Raft 中 Term 的作用是什么？",
            options: [
                "限制 leader 任期时长",
                "作为逻辑时间单位，组织选举和日志复制",
                "记录节点加入时间",
                "计算网络延迟"
            ],
            answer: 1,
            rationale: "Term'lies at the heart of Raft, organizing leader elections and log replication'——它是逻辑时间单位，用于识别过时信息。"
        },
        {
            id: "w4-3-q6",
            question: "Raft Leader Election 中，follower 变为 candidate 的条件是什么？",
            options: [
                "收到其他 candidate 的请求",
                "超时未收到 leader 心跳",
                "检测到 leader 日志落后",
                "收到客户端请求"
            ],
            answer: 1,
            rationale: "follower 有随机超时（150-300ms），'未收到心跳则变为 candidate，incrementing its term and requesting votes'。"
        },
        {
            id: "w4-3-q7",
            question: "Raft 中节点投票的条件是什么？",
            options: [
                "随机投票",
                "投给第一个请求的候选人",
                "只投票给 log 至少和自己一样新的候选人",
                "投给 term 最大的候选人"
            ],
            answer: 2,
            rationale: "'节点只投票给 log 至少和自己一样新的候选人'——这确保了选出的 leader 拥有最完整的日志。"
        },
        {
            id: "w4-3-q8",
            question: "Raft Log Replication 中，follower 何时追加日志条目？",
            options: [
                "收到任何 AppendEntries 请求时",
                "当 previous log index 和 term 匹配时",
                "当 leader term 大于本地 term 时",
                "当本地日志为空时"
            ],
            answer: 1,
            rationale: "'Followers append entries only if the previous log index and term match'——这确保了日志一致性。"
        },
        {
            id: "w4-3-q9",
            question: "Paxos 与 2PC 的核心区别是什么？",
            options: [
                "Paxos 更快",
                "2PC 更安全",
                "Paxos 只需要多数节点同意，2PC 需要所有节点",
                "Paxos 不需要协调者"
            ],
            answer: 2,
            rationale: "'A simple majority quorum would suffice for a proposal to be accepted'——Paxos 能容忍少数节点故障，而 2PC 在协调者故障时会阻塞。"
        },
        {
            id: "w4-3-q10",
            question: "Raft 中 entry 何时被标记为 committed？",
            options: [
                "leader 写入本地日志后",
                "多数节点复制后",
                "所有节点复制后",
                "客户端确认后"
            ],
            answer: 1,
            rationale: "'当多数节点复制后，entry 被标记为 committed'——这是 Raft 的安全性保证。"
        },
        {
            id: "w4-3-q11",
            question: "Raft 随机选举超时（150-300ms）的目的是什么？",
            options: [
                "提高性能",
                "减少网络流量",
                "避免多个节点同时发起选举导致的分票",
                "节省 CPU 资源"
            ],
            answer: 2,
            rationale: "随机超时使得节点错开成为 candidate 的时间，避免多个节点同时请求投票导致无法获得多数票。"
        },
        {
            id: "w4-3-q12",
            question: "Paxos Acceptor 在 Promise 阶段承诺什么？",
            options: [
                "接受当前提案的值",
                "不接受编号更低的提案",
                "通知所有 Learner",
                "成为新的 Proposer"
            ],
            answer: 1,
            rationale: "在 Promise 阶段，acceptor'承诺不接受更低编号的提案'——这是 Paxos 保证一致性的关键机制。"
        }
    ],
    "w4-4": [
        {
            id: "w4-4-q1",
            question: "etcd Raft 库的设计哲学是什么？",
            options: [
                "提供完整的分布式系统框架",
                "只实现核心 Raft 算法，其他由用户实现",
                "优先考虑易用性而非性能",
                "专注于单机部署场景"
            ],
            answer: 1,
            rationale: "etcd Raft 采用'only implementing the core raft algorithm'的最小化设计，用户需自己实现网络传输和存储，换来灵活性和确定性。"
        },
        {
            id: "w4-4-q2",
            question: "etcd Learner 角色的主要作用是什么？",
            options: [
                "替代 leader 处理读请求",
                "作为非投票成员接收更新，解决成员变更风险",
                "存储冷数据减少主节点压力",
                "专门处理客户端写请求"
            ],
            answer: 1,
            rationale: "Learner 作为'非投票成员'接收 leader 更新但不计入 quorum，解决了 leader 过载、quorum 不稳定、误配置不可逆三个问题。"
        },
        {
            id: "w4-4-q3",
            question: "ZAB 协议提供的三项保证不包括哪个？",
            options: [
                "可靠交付",
                "全序性",
                "线性化读",
                "因果序"
            ],
            answer: 2,
            rationale: "ZAB 保证可靠交付、全序性和因果序。ZooKeeper 的读操作是非线性化的，可能返回陈旧数据。"
        },
        {
            id: "w4-4-q4",
            question: "ZooKeeper 的 zxid 是什么结构？",
            options: [
                "32 位随机数",
                "64 位：高 32 位是 epoch，低 32 位是计数器",
                "128 位 UUID",
                "时间戳 + 序列号字符串"
            ],
            answer: 1,
            rationale: "zxid 是 64 位数字：'高 32 位是 epoch（领导权时期），低 32 位是计数器'——确保每个提议全局唯一且有序。"
        },
        {
            id: "w4-4-q5",
            question: "ZAB 协议的两个阶段是什么？",
            options: [
                "Prepare 和 Accept",
                "Leader 激活和活跃消息",
                "选举和复制",
                "提案和确认"
            ],
            answer: 1,
            rationale: "ZAB 分两阶段：'Leader 激活阶段（建立正确状态）和活跃消息阶段（类似两阶段提交）'。"
        },
        {
            id: "w4-4-q6",
            question: "ZAB 和 Raft 在读策略上的核心差异是什么？",
            options: [
                "ZAB 不支持读操作",
                "ZAB 支持从副本读取，Raft 默认通过 leader 读写",
                "Raft 支持从副本读取，ZAB 只能从 leader 读",
                "两者读策略完全相同"
            ],
            answer: 1,
            rationale: "'ZAB 支持从副本读取（可能陈旧），Raft 默认通过 leader 读写'——这是两者的重要差异。"
        },
        {
            id: "w4-4-q7",
            question: "etcd 添加新成员时的 Quorum 不稳定问题是什么？",
            options: [
                "新成员可能成为 leader",
                "3 节点变 4 节点时 quorum 从 2 变为 3，2+2 分区将丢失 quorum",
                "新成员会占用过多带宽",
                "选举超时会变长"
            ],
            answer: 1,
            rationale: "添加新成员会立即改变 quorum 大小，'3 节点变 4 节点时 quorum 从 2 变为 3'，在网络分区时可能丢失 quorum。"
        },
        {
            id: "w4-4-q8",
            question: "ZooKeeper 的一致性模型是什么？",
            options: [
                "强一致性",
                "最终一致性",
                "介于顺序一致性和线性一致性之间",
                "因果一致性"
            ],
            answer: 2,
            rationale: "ZooKeeper 的一致性'介于顺序一致性和线性一致性之间'：写操作线性化，读操作非线性化但顺序一致。"
        },
        {
            id: "w4-4-q9",
            question: "etcd Raft 状态机的输出是什么？",
            options: [
                "单个布尔值",
                "日志索引",
                "三元组 {[]Messages, []LogEntries, NextState}",
                "错误码"
            ],
            answer: 2,
            rationale: "etcd Raft 状态机输出是三元组'{[]Messages, []LogEntries, NextState}'——消息数组、日志条目和状态变更。"
        },
        {
            id: "w4-4-q10",
            question: "ZAB 和 Raft 的选举策略有什么不同？",
            options: [
                "ZAB 使用随机超时，Raft 选 ID 最大的",
                "ZAB 选 ID 最大的服务器，Raft 使用随机超时",
                "两者都使用随机超时",
                "两者都选 ID 最大的"
            ],
            answer: 1,
            rationale: "'ZAB 选 ID 最大的服务器，Raft 使用随机超时'——这是两者选举机制的核心差异。"
        },
        {
            id: "w4-4-q11",
            question: "etcd Learner 何时可以被提升为投票成员？",
            options: [
                "加入集群后立即",
                "追上 leader 日志后",
                "运行一定时间后",
                "手动指定时"
            ],
            answer: 1,
            rationale: "Learner'只有追上 leader 日志后才能提升为投票成员'——这确保了新成员不会拖慢集群。"
        },
        {
            id: "w4-4-q12",
            question: "ZAB 的消息模型与 Raft 有什么不同？",
            options: [
                "ZAB 需要 proposal/ack/commit 三条消息，Raft 依赖底层 RPC",
                "Raft 需要更多消息",
                "两者消息模型相同",
                "ZAB 不需要确认消息"
            ],
            answer: 0,
            rationale: "'ZAB 每次更新需要 proposal/ack/commit 三条消息，Raft 依赖底层 RPC 系统'——消息模型是两者的重要区别。"
        }
    ]
}
