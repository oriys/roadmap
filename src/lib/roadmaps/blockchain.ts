import type { KnowledgeCard, QuizQuestion, RoadmapDefinition, Stage } from "../types"

export const blockchainStages: Stage[] = [
  {
    id: "blockchain-foundation",
    title: "阶段一：区块链与密码学基础",
    duration: "第 1-2 周",
    goal: "理解去中心化网络、共识与密码学原语，为后续开发打好理论基础。",
    weeks: [
      {
        id: "bc-w1",
        title: "第 1 周：区块链工作原理",
        summary: "认识区块、链式结构、节点角色与共识需求。",
        keyPoints: [
          "区块由交易与状态根组成，通过哈希指针连接形成不可篡改链。",
          "全节点、轻节点、验证节点在安全性和资源消耗上各有侧重。",
          "共识目标是就同一账本状态达成一致并抵御拜占庭节点。",
        ],
        lessons: [
          {
            id: "bc-w1-1",
            title: "区块链数据结构",
            detail: "理解区块头、Merkle Tree 与链式哈希的防篡改能力。",
            resources: [
              { title: "Bitcoin Whitepaper", url: "https://bitcoin.org/bitcoin.pdf" },
              { title: "roadmap.sh: Blockchain", url: "https://roadmap.sh/blockchain" },
              { title: "Merkle Tree Basics", url: "https://en.wikipedia.org/wiki/Merkle_tree" },
            ],
          },
          {
            id: "bc-w1-2",
            title: "共识与节点角色",
            detail: "了解 PoW、PoS 的基本思路与区块生产/验证流程。",
            resources: [
              { title: "Ethereum PoS Intro", url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/" },
              { title: "PoW Explained", url: "https://en.bitcoin.it/wiki/Proof_of_work" },
              { title: "roadmap.sh: Blockchain", url: "https://roadmap.sh/blockchain" },
            ],
          },
        ],
      },
      {
        id: "bc-w2",
        title: "第 2 周：密码学基石",
        summary: "掌握公私钥、数字签名与地址生成方式。",
        lessons: [
          {
            id: "bc-w2-1",
            title: "公钥密码与哈希",
            detail: "理解椭圆曲线、哈希函数与随机数对安全性的影响。",
            resources: [
              { title: "ECDSA Overview", url: "https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm" },
              { title: "SHA-256", url: "https://en.wikipedia.org/wiki/SHA-2" },
              { title: "roadmap.sh: Cryptography", url: "https://roadmap.sh/cryptography" },
            ],
          },
          {
            id: "bc-w2-2",
            title: "地址与钱包安全",
            detail: "学习助记词、HD Wallet 与常见攻击面。",
            resources: [
              { title: "BIP-39", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" },
              { title: "HD Wallets", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" },
              { title: "roadmap.sh: Blockchain", url: "https://roadmap.sh/blockchain" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "blockchain-smart-contract",
    title: "阶段二：智能合约与开发实践",
    duration: "第 3-4 周",
    goal: "掌握以太坊开发栈，能够编写、测试和部署基础合约。",
    weeks: [
      {
        id: "bc-w3",
        title: "第 3 周：Solidity 入门",
        summary: "认识 EVM 模型、合约结构与常见数据类型。",
        lessons: [
          {
            id: "bc-w3-1",
            title: "EVM 与 Solidity 基础",
            detail: "了解 gas、存储布局与事件日志。",
            resources: [
              { title: "Solidity Docs", url: "https://docs.soliditylang.org/en/latest/" },
              { title: "Ethereum Developer Docs", url: "https://ethereum.org/en/developers/docs/" },
              { title: "roadmap.sh: Solidity", url: "https://roadmap.sh/solidity" },
            ],
          },
          {
            id: "bc-w3-2",
            title: "合约测试与调试",
            detail: "使用 Hardhat/Foundry 编写单测并阅读执行痕迹。",
            resources: [
              { title: "Hardhat Guide", url: "https://hardhat.org/tutorial" },
              { title: "Foundry Book", url: "https://book.getfoundry.sh/" },
              { title: "roadmap.sh: Blockchain", url: "https://roadmap.sh/blockchain" },
            ],
          },
        ],
      },
      {
        id: "bc-w4",
        title: "第 4 周：安全与最佳实践",
        summary: "避免常见漏洞，掌握升级与权限治理。",
        lessons: [
          {
            id: "bc-w4-1",
            title: "常见安全漏洞",
            detail: "重入、整数溢出、前置运行与随机性攻击的防护策略。",
            resources: [
              { title: "SWC Registry", url: "https://swcregistry.io/" },
              { title: "OpenZeppelin Security", url: "https://docs.openzeppelin.com/contracts/5.x/security-considerations" },
              { title: "roadmap.sh: Blockchain", url: "https://roadmap.sh/blockchain" },
            ],
          },
          {
            id: "bc-w4-2",
            title: "合约升级与权限",
            detail: "理解代理模式、角色控制与多签治理。",
            resources: [
              { title: "OpenZeppelin Upgrades", url: "https://docs.openzeppelin.com/upgrades-plugins/1.x/" },
              { title: "Multisig Basics", url: "https://gnosis-safe.io/" },
              { title: "roadmap.sh: Blockchain", url: "https://roadmap.sh/blockchain" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "blockchain-operations",
    title: "阶段三：生态集成与链上运维",
    duration: "第 5-6 周",
    goal: "能将链上组件与现有系统集成，并监控、运维生产环境。",
    weeks: [
      {
        id: "bc-w5",
        title: "第 5 周：节点与基础设施",
        summary: "搭建 RPC/归档节点，理解索引与数据服务。",
        lessons: [
          {
            id: "bc-w5-1",
            title: "节点部署与监控",
            detail: "选择全节点/轻节点方案，配置日志、告警与备份。",
            resources: [
              { title: "Geth Docs", url: "https://geth.ethereum.org/docs" },
              { title: "Erigon", url: "https://github.com/ledgerwatch/erigon" },
              { title: "Prometheus", url: "https://prometheus.io/docs/introduction/overview/" },
            ],
          },
          {
            id: "bc-w5-2",
            title: "事件订阅与索引",
            detail: "使用日志订阅、Graph Indexer 或自建 ETL 拉链业务数据。",
            resources: [
              { title: "The Graph Docs", url: "https://thegraph.com/docs/" },
              { title: "Ethers.js Filters", url: "https://docs.ethers.org/v6/api/contract/#Contract-on" },
              { title: "roadmap.sh: Blockchain", url: "https://roadmap.sh/blockchain" },
            ],
          },
        ],
      },
      {
        id: "bc-w6",
        title: "第 6 周：合规、安全与多链",
        summary: "做好密钥托管、审计与跨链集成。",
        lessons: [
          {
            id: "bc-w6-1",
            title: "合规与密钥托管",
            detail: "评估自托管 HSM、第三方托管与权限隔离。",
            resources: [
              { title: "CIS Controls", url: "https://www.cisecurity.org/controls/cis-controls-list" },
              { title: "AWS KMS", url: "https://docs.aws.amazon.com/kms/latest/developerguide/overview.html" },
              { title: "MPC Wallets", url: "https://en.wikipedia.org/wiki/Multiparty_computation" },
            ],
          },
          {
            id: "bc-w6-2",
            title: "跨链与 Layer2",
            detail: "理解 Rollup 安全模型与跨链桥的信任假设。",
            resources: [
              { title: "Optimistic Rollups", url: "https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/" },
              { title: "Bridges Overview", url: "https://vitalik.ca/general/2021/01/05/rollup.html" },
              { title: "roadmap.sh: Blockchain", url: "https://roadmap.sh/blockchain" },
            ],
          },
        ],
      },
    ],
  },
]

export const blockchainKnowledgeCards: KnowledgeCard[] = [
  {
    id: "bc-k1",
    title: "共识机制速览",
    summary: "比较 PoW、PoS 与 BFT 系统的取舍。",
    points: [
      "PoW 通过算力竞争获得随机性，安全性依赖算力成本。",
      "PoS 以质押为安全来源，需要应对长程攻击与惩罚机制。",
      "BFT 类算法在许可链中常见，强调快速终局性但节点数有限。",
    ],
    practice: "写一段话解释你选择的业务场景更适合哪类共识，并给出原因。",
  },
  {
    id: "bc-k2",
    title: "合约安全检查清单",
    summary: "部署前的自查要点。",
    points: [
      "是否使用最新的编译器与已审计的依赖库。",
      "是否覆盖权限、重入、整数边界与事件完整性。",
      "是否准备了暂停开关、升级/迁移与应急响应流程。",
    ],
    practice: "为示例合约写一份安全审查记录，列出发现的问题与改进。",
  },
  {
    id: "bc-k3",
    title: "链上数据读取模式",
    summary: "在性能与实时性之间取得平衡。",
    points: [
      "直接 RPC 读取成本低但缺少历史聚合。",
      "事件订阅适合异步处理与缓存。",
      "专用索引服务用于复杂查询与 BI 报表。",
    ],
    practice: "为一个 NFT 统计页面设计数据同步方案并说明延迟预期。",
  },
  {
    id: "bc-k4",
    title: "多链与桥接风险",
    summary: "识别跨链组件的信任边界。",
    points: [
      "桥接通常依赖见证人、轻客户端或多签，需评估安全假设。",
      "消息验证与资金托管分离可降低单点风险。",
      "Rollup 与 L1 的结算延迟会影响用户体验与资金流动。",
    ],
    practice: "选择一条常用跨链桥，写出其信任模型与可能的攻击面。",
  },
]

export const blockchainExamQuestions: QuizQuestion[] = [
  {
    id: "bc-q1",
    question: "Merkle Tree 在区块链中的作用是？",
    options: [
      "提供随机数种子",
      "压缩交易并允许对单条交易进行高效验证",
      "生成区块时间戳",
      "替代数字签名",
    ],
    answer: 1,
    rationale: "Merkle Tree 通过哈希汇总交易，允许 O(log n) 的交易存在性证明。",
  },
  {
    id: "bc-q2",
    question: "PoS 共识中，质押与惩罚机制的主要目的是什么？",
    options: [
      "提高吞吐量",
      "为节点提供随机种子",
      "确保验证者有经济激励诚实行为并惩罚作恶",
      "缩短区块大小",
    ],
    answer: 2,
    rationale: "质押与 Slash 让作恶成本高于潜在收益，从而提升安全性。",
  },
  {
    id: "bc-q3",
    question: "避免 Solidity 重入漏洞的常见做法是？",
    options: [
      "禁用事件日志",
      "使用 Checks-Effects-Interactions 顺序或重入锁",
      "提高 gas 上限",
      "仅使用 view 函数",
    ],
    answer: 1,
    rationale: "先更新状态再转账或使用重入保护可阻断递归调用导致的资金重复。",
  },
  {
    id: "bc-q4",
    question: "硬分叉与软分叉的区别在于？",
    options: [
      "硬分叉只影响钱包，软分叉只影响节点",
      "硬分叉向前不兼容需要所有节点升级，软分叉通常向后兼容",
      "硬分叉更安全",
      "软分叉只能发生在测试网",
    ],
    answer: 1,
    rationale: "硬分叉规则变更不兼容旧节点；软分叉对旧节点保持兼容但可能限制行为。",
  },
  {
    id: "bc-q5",
    question: "在生产环境读取链上数据时，使用索引服务（如 The Graph）的主要优势是？",
    options: [
      "降低 gas 消耗",
      "提供结构化、可查询的历史数据以支持复杂检索",
      "绕过共识规则",
      "避免签名验证",
    ],
    answer: 1,
    rationale: "索引服务提前加工事件/状态，便于低延迟的复杂查询。",
  },
  {
    id: "bc-q6",
    question: "跨链桥安全评估时最需要关注的是？",
    options: [
      "前端框架版本",
      "背后验证模型与托管资产的信任假设",
      "是否使用 TypeScript",
      "链上代币符号",
    ],
    answer: 1,
    rationale: "桥接安全取决于验证者集合、签名阈值及托管资金的安全假设。",
  },
]

export const blockchainRoadmap: RoadmapDefinition = {
  id: "blockchain",
  label: "区块链",
  title: "区块链开发路线",
  durationLabel: "12 个主题",
  description: "从基础共识到智能合约与运维实践的 6 周路线，帮助工程师快速掌握链上开发与安全基线。",
  heroBadge: "可信去中心化",
  stages: blockchainStages,
  knowledgeCards: blockchainKnowledgeCards,
  examQuestions: blockchainExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "先理解区块链数据结构与共识原理，为后续实践建立心智模型。"
    if (percent < 30) return "完成密码学基础与钱包安全练习，确保密钥管理习惯正确。"
    if (percent < 50) return "写出第一个 Solidity 合约并通过单测，熟悉 gas 与存储成本。"
    if (percent < 70) return "强化安全意识，梳理重入、权限与升级策略。"
    if (percent < 90) return "将链上组件与监控体系集成，验证索引与告警可靠性。"
    return "恭喜完成路线，可尝试多链部署与审计演练提升深度！"
  },
  resourceGuide: {
    environment: "准备 Node.js、VS Code + Solidity 插件、Hardhat/Foundry 与本地以太坊节点或测试网账户。",
    fallbackKeyPoints: [
      "保护私钥与助记词，不在代码库或日志中泄露。",
      "写测试覆盖安全边界，避免重入与溢出。",
      "监控节点健康与事件滞后，设置自动告警。",
    ],
    handsOnSteps: [
      "部署本地 Hardhat/Foundry 环境并跑通样例测试。",
      "在测试网部署一个简单合约，记录 gas 与事件日志。",
      "搭建基础监控，订阅关键事件并输出告警。",
    ],
    selfChecks: [
      "是否理解当前链的共识机制与安全假设？",
      "合约是否通过静态扫描与单元测试覆盖高风险路径？",
      "监控/索引链路出现延迟时，有无手动兜底方案？",
    ],
    extensions: [
      "尝试使用 ZK/Optimistic Rollup 发布合约并比较成本。",
      "编写一个跨链消息或资产桥的最小原型。",
      "研究账户抽象或 MPC 钱包，设计更安全的签名流。",
    ],
    lessonQuizAdvice: "关注安全边界，默认假设交易可能被重放或前置运行，优先选择防御性实现。",
  },
}
