import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
  "bc-w1-1": {
    lessonId: "bc-w1-1",
    background: [
      "【区块结构】区块由区块头和交易列表组成。区块头包含前一区块哈希、时间戳、Merkle 根和难度目标等元数据，通过哈希指针将区块连成链。",
      "【Merkle Tree】交易通过两两哈希逐层汇总形成 Merkle 树，根哈希写入区块头。任何交易被篡改都会导致根哈希变化，从而破坏整条链的完整性。",
      "【链式哈希】每个区块头包含前一区块的哈希值，形成单向链表。要篡改历史区块，必须重新计算该区块及所有后续区块的哈希，计算成本极高。",
      "【状态根】以太坊等账户模型链在区块头中还包含状态根（State Root），记录所有账户余额与合约存储的全局快照。",
      "【轻节点验证】Merkle 证明允许轻节点仅下载区块头和少量哈希路径即可验证某笔交易是否被包含，无需存储完整区块数据。"
    ],
    keyDifficulties: [
      "【哈希指针 vs 普通指针】普通指针只记录地址，哈希指针同时记录数据的哈希摘要，可检测数据是否被篡改。理解这一区别是理解区块链防篡改的关键。",
      "【Merkle 证明复杂度】对于 n 笔交易，Merkle 证明只需 O(log n) 个哈希节点，验证效率远高于遍历所有交易。",
      "【UTXO vs 账户模型】比特币使用 UTXO 模型追踪未花费输出，以太坊使用账户模型维护全局状态。两种模型在并发性和隐私性上各有优劣。",
      "【区块大小与吞吐量】区块大小限制直接影响每秒交易数（TPS）。增大区块会提高吞吐量但增加节点存储和带宽负担。"
    ],
    handsOnPath: [
      "阅读比特币白皮书第 7 节，理解 Merkle 树如何实现简化支付验证（SPV）。",
      "使用区块浏览器（如 etherscan.io）查看一个以太坊区块，观察区块头字段和交易列表。",
      "用 Python 或 JavaScript 实现一个简单的区块结构：包含数据、前置哈希、时间戳和当前哈希。",
      "手动构建一棵 4 叶节点的 Merkle 树，验证修改任意叶节点后根哈希的变化。",
      "对比比特币区块头和以太坊区块头的字段差异，列出各自独有的字段。"
    ],
    selfCheck: [
      "区块头中包含哪些关键字段？各自的作用是什么？",
      "Merkle Tree 如何实现对单笔交易的高效验证？时间复杂度是多少？",
      "如果攻击者修改了链中间某个区块的交易，会产生什么连锁反应？",
      "UTXO 模型和账户模型各自的优缺点是什么？",
      "轻节点如何在不下载完整区块的情况下验证交易？"
    ],
    extensions: [
      "研究 Patricia Merkle Trie（以太坊使用的改进版 Merkle 树），了解其如何支持状态查询和证明。",
      "探索 Verkle Tree 作为以太坊未来升级方向，对比其与 Merkle Patricia Trie 的证明大小差异。",
      "了解区块链中的 bloom filter 如何加速日志查询。",
      "阅读 Bitcoin Improvement Proposal (BIP) 了解比特币协议的演进过程。"
    ],
    sourceUrls: [
      "https://bitcoin.org/bitcoin.pdf",
      "https://roadmap.sh/blockchain",
      "https://en.wikipedia.org/wiki/Merkle_tree"
    ]
  },
  "bc-w1-2": {
    lessonId: "bc-w1-2",
    background: [
      "【共识的必要性】分布式系统中节点可能故障或作恶，共识协议确保所有诚实节点就同一账本状态达成一致，是区块链去中心化的核心保障。",
      "【PoW 工作量证明】矿工通过不断尝试 nonce 使区块哈希满足难度目标。第一个找到有效 nonce 的矿工获得出块权和奖励，安全性依赖算力成本。",
      "【PoS 权益证明】验证者按质押代币比例被选中出块。作恶会被 Slash（罚没质押），经济激励替代算力竞争，大幅降低能耗。",
      "【全节点与轻节点】全节点存储完整链数据并验证所有交易，安全性最高但资源消耗大。轻节点仅存储区块头，依赖 Merkle 证明验证交易。",
      "【验证节点】在 PoS 网络中，验证节点负责提议和投票确认区块。需要质押一定数量的代币并保持在线，否则会被惩罚。"
    ],
    keyDifficulties: [
      "【拜占庭容错】经典 BFT 算法要求诚实节点超过 2/3（即 n ≥ 3f+1）。PoW 和 PoS 通过经济博弈放宽了这一假设。",
      "【分叉与最终性】PoW 链可能出现临时分叉，需等待多个确认才具有概率性终局。PoS 的 Casper FFG 提供确定性终局，但需要 2 个 epoch。",
      "【51% 攻击】在 PoW 中，控制超过 50% 算力可以重写历史。在 PoS 中，控制 1/3 质押可以阻止终局，控制 2/3 可以改写链。",
      "【Nothing-at-Stake】PoS 验证者可以在多条分叉上同时投票，因为成本为零。Slashing 机制通过惩罚双重投票来解决这一问题。"
    ],
    handsOnPath: [
      "阅读以太坊 PoS 官方文档，了解验证者的质押、提议和证明流程。",
      "用伪代码实现一个简单的 PoW 挖矿循环：不断递增 nonce 直到哈希值小于目标。",
      "在区块浏览器上查看以太坊 Beacon Chain 的验证者状态和 epoch 信息。",
      "对比比特币（PoW）和以太坊（PoS）的出块时间、终局性和能耗差异。",
      "写一段话解释你选择的业务场景更适合哪类共识，并给出原因。"
    ],
    selfCheck: [
      "PoW 和 PoS 各自的安全假设是什么？它们如何抵抗攻击？",
      "什么是拜占庭容错？BFT 算法对节点总数有什么要求？",
      "全节点、轻节点和验证节点在功能和资源消耗上有什么区别？",
      "PoW 中的 51% 攻击是什么？在 PoS 中对应的攻击阈值是多少？",
      "什么是 Nothing-at-Stake 问题？Slashing 如何解决它？"
    ],
    extensions: [
      "研究 Tendermint BFT 共识，了解其在许可链和 Cosmos 生态中的应用。",
      "探索以太坊 PBS（Proposer-Builder Separation）提案对共识角色的重新划分。",
      "了解 Avalanche 共识协议的亚采样投票机制及其扩展性优势。",
      "研究 Solana 的 PoH（Proof of History）如何作为 PoS 的辅助时钟机制。"
    ],
    sourceUrls: [
      "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/",
      "https://en.bitcoin.it/wiki/Proof_of_work",
      "https://roadmap.sh/blockchain"
    ]
  }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
  "bc-w1-1": [
    {
      id: "bc-w1-1-q1",
      question: "Merkle Tree 在区块链中的主要作用是什么？",
      options: [
        "生成区块时间戳",
        "压缩交易并允许对单条交易进行 O(log n) 的高效验证",
        "替代数字签名验证交易发送方",
        "决定区块的出块顺序"
      ],
      answer: 1,
      rationale: "Merkle Tree 通过逐层哈希汇总交易，允许轻节点仅凭 O(log n) 个哈希节点就能证明某笔交易存在于区块中。"
    },
    {
      id: "bc-w1-1-q2",
      question: "区块头中的「前一区块哈希」字段起什么作用？",
      options: [
        "记录交易金额",
        "将区块串联成链，确保篡改历史区块需要重新计算所有后续哈希",
        "存储矿工地址",
        "标记区块是否已被确认"
      ],
      answer: 1,
      rationale: "每个区块头包含前一区块的哈希值形成链式结构，修改任何历史区块都会导致后续所有区块哈希失效。"
    },
    {
      id: "bc-w1-1-q3",
      question: "轻节点验证交易的方式是？",
      options: [
        "下载并重新执行所有交易",
        "仅下载区块头，通过 Merkle 证明验证交易是否被包含",
        "向矿工发送验证请求",
        "读取智能合约日志"
      ],
      answer: 1,
      rationale: "轻节点通过 SPV（简化支付验证）方式仅存储区块头，利用 Merkle 路径证明交易存在性，无需下载完整区块。"
    }
  ],
  "bc-w1-2": [
    {
      id: "bc-w1-2-q1",
      question: "PoS 共识中，质押与 Slashing 机制的主要目的是什么？",
      options: [
        "提高区块链吞吐量",
        "确保验证者有经济激励诚实行为，作恶则被罚没质押",
        "缩短区块大小以节省存储",
        "为验证者提供随机种子"
      ],
      answer: 1,
      rationale: "质押让验证者承担经济风险，Slashing 使作恶成本高于收益，从而用经济博弈保障网络安全。"
    },
    {
      id: "bc-w1-2-q2",
      question: "经典 BFT 共识算法对拜占庭节点的容忍上限是？",
      options: [
        "少于总节点数的 1/2",
        "少于总节点数的 1/3",
        "少于总节点数的 2/3",
        "无上限"
      ],
      answer: 1,
      rationale: "经典 BFT 要求 n ≥ 3f+1，即拜占庭节点数 f 必须少于总节点数的 1/3 才能保证安全。"
    },
    {
      id: "bc-w1-2-q3",
      question: "PoW 中 51% 攻击的核心威胁是？",
      options: [
        "窃取其他矿工的私钥",
        "控制超过半数算力后可重写交易历史实现双花",
        "使全网节点离线",
        "修改共识规则代码"
      ],
      answer: 1,
      rationale: "51% 攻击者拥有最长链的生产能力，可以创建替代链覆盖已确认交易，从而实现双重支付。"
    }
  ]
}
