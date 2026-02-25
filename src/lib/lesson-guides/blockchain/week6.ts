import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
  "bc-w6-1": {
    lessonId: "bc-w6-1",
    background: [
      "【密钥托管】企业环境中私钥管理是首要安全问题。方案包括自托管 HSM（硬件安全模块）、云 KMS（如 AWS KMS）和第三方托管服务。",
      "【HSM 硬件安全模块】HSM 在专用硬件中生成和存储私钥，密钥从不离开设备。签名操作在 HSM 内部完成，即使服务器被入侵也无法提取私钥。",
      "【云 KMS】AWS KMS、GCP Cloud HSM 等云服务提供托管的密钥管理。密钥存储在 FIPS 140-2 认证的硬件中，通过 API 调用签名。",
      "【MPC 钱包】多方计算（MPC）将私钥分片分布在多个参与方，签名时各方协作计算而无需重建完整私钥。比链上多签更灵活且跨链兼容。",
      "【合规要求】不同司法管辖区对数字资产托管有不同要求。企业需关注反洗钱（AML）、了解你的客户（KYC）和数据保护法规。"
    ],
    keyDifficulties: [
      "【权限隔离】遵循最小权限原则：签名权限、部署权限和管理权限分离。使用 IAM 策略限制谁可以请求签名和管理密钥。",
      "【密钥轮换】定期轮换密钥降低泄露风险。区块链场景中密钥轮换需要迁移资产到新地址，需提前设计迁移流程。",
      "【灾难恢复】密钥备份方案需要平衡安全性和可恢复性。常见做法包括 Shamir 分片、多地理位置保险箱和银行保管箱。",
      "【审计追踪】所有密钥使用必须有完整的审计日志，记录谁在什么时间请求了什么操作。日志应防篡改并定期审查。"
    ],
    handsOnPath: [
      "评估自托管 HSM、云 KMS 和 MPC 钱包的成本、安全性和运维复杂度，形成对比表格。",
      "使用 AWS KMS 创建一个非对称密钥，通过 SDK 调用签名 API 对消息进行签名。",
      "设计一个企业级密钥管理方案：包含密钥生成、存储、使用、轮换和销毁的全生命周期。",
      "制定灾难恢复计划：定义 RTO/RPO 目标，设计密钥恢复流程并定期演练。",
      "检查 CIS Controls 列表，评估当前方案的合规差距。"
    ],
    selfCheck: [
      "HSM 如何保护私钥？与软件钱包相比有什么优势？",
      "MPC 钱包相比链上多签的优势和劣势是什么？",
      "企业密钥管理应遵循什么原则？如何实现权限隔离？",
      "密钥轮换在区块链场景中有什么特殊挑战？",
      "合规性审计需要记录哪些信息？审计日志应具备什么特性？"
    ],
    extensions: [
      "研究 TEE（可信执行环境）如 Intel SGX 在密钥管理中的应用。",
      "了解旅行规则（Travel Rule）对加密资产转账的合规要求。",
      "探索 Policy Engine（策略引擎）如何在密钥使用前自动执行风控规则。",
      "研究冷热钱包分层架构的设计模式和资金流转策略。"
    ],
    sourceUrls: [
      "https://www.cisecurity.org/controls/cis-controls-list",
      "https://docs.aws.amazon.com/kms/latest/developerguide/overview.html",
      "https://en.wikipedia.org/wiki/Multiparty_computation"
    ]
  },
  "bc-w6-2": {
    lessonId: "bc-w6-2",
    background: [
      "【Layer 2 扩容】L2 在 L1 之上构建执行层，将大量交易打包后在 L1 结算。主要方案包括 Optimistic Rollup、ZK Rollup 和状态通道。",
      "【Optimistic Rollup】假设交易默认有效，将交易数据压缩后提交到 L1。设置挑战期（通常 7 天），期间任何人可提交欺诈证明推翻无效交易。",
      "【ZK Rollup】每批交易附带零知识有效性证明，L1 合约验证证明后即可确认。无需挑战期，提现更快，但证明生成计算密集。",
      "【跨链桥】跨链桥实现不同区块链间的资产和消息传递。信任模型各异：外部验证（多签/见证人）、轻客户端验证、乐观验证等。",
      "【桥接安全】跨链桥是高价值攻击目标（历史上损失数十亿美元）。风险包括验证者串谋、智能合约漏洞和中继器故障。"
    ],
    keyDifficulties: [
      "【Optimistic vs ZK 取舍】Optimistic Rollup 开发更成熟、EVM 兼容性好，但提现延迟长。ZK Rollup 终局更快但 zkEVM 仍在完善中。",
      "【数据可用性】Rollup 需要保证交易数据在 L1 可用，否则验证者无法构建欺诈证明或重建状态。EIP-4844（Proto-Danksharding）通过 blob 降低数据发布成本。",
      "【桥接信任模型】外部验证桥依赖多签/委员会，安全性取决于签名阈值。轻客户端桥在目标链上验证源链区块头，信任假设最小但实现复杂。",
      "【消息验证 vs 资金托管】将消息验证层与资金托管层分离可降低单点风险。即使消息中继出错，锁定的资金仍受独立安全机制保护。"
    ],
    handsOnPath: [
      "在 Optimism Sepolia 或 Arbitrum Sepolia 测试网上部署一个简单合约，体验 L2 的低 gas 和快速确认。",
      "通过官方桥将测试网 ETH 从 L1 桥接到 L2，观察存取款流程和延迟差异。",
      "阅读 Vitalik 的 Rollup 不完全指南，对比 Optimistic 和 ZK Rollup 的安全模型。",
      "选择一条常用跨链桥（如 Wormhole、LayerZero），分析其验证模型和信任假设。",
      "写一份跨链桥安全评估报告，列出信任边界、攻击面和缓解措施。"
    ],
    selfCheck: [
      "Optimistic Rollup 和 ZK Rollup 的关键区别是什么？各自的优劣势？",
      "为什么 Rollup 需要保证数据可用性？EIP-4844 如何帮助降低成本？",
      "跨链桥的主要信任模型有哪些？各自的安全假设是什么？",
      "为什么跨链桥是高风险攻击目标？历史上有哪些重大桥接安全事件？",
      "消息验证与资金托管分离的设计原则是什么？"
    ],
    extensions: [
      "研究 Celestia 等模块化区块链的数据可用性层设计。",
      "了解 IBC（Inter-Blockchain Communication）协议在 Cosmos 生态中的跨链通信机制。",
      "探索意图（Intent）驱动的跨链方案（如 Across Protocol），对比其与传统桥的用户体验。",
      "研究基于 ZK 的跨链桥方案，了解零知识证明如何最小化桥接信任假设。"
    ],
    sourceUrls: [
      "https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/",
      "https://vitalik.ca/general/2021/01/05/rollup.html",
      "https://roadmap.sh/blockchain"
    ]
  }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
  "bc-w6-1": [
    {
      id: "bc-w6-1-q1",
      question: "HSM（硬件安全模块）保护私钥的核心机制是？",
      options: [
        "加密存储在普通磁盘上",
        "密钥在专用硬件中生成且从不离开设备，签名在内部完成",
        "定期自动更换密钥",
        "将密钥分发给多个服务器"
      ],
      answer: 1,
      rationale: "HSM 的核心安全保障是密钥从不离开硬件边界。所有签名操作在 HSM 内部的安全芯片中完成，即使宿主服务器被入侵也无法提取密钥。"
    },
    {
      id: "bc-w6-1-q2",
      question: "MPC 钱包相比链上多签的核心优势是？",
      options: [
        "gas 消耗更高",
        "密钥分片分布在多方，无需链上合约且可跨链使用",
        "仅支持以太坊",
        "不需要网络通信"
      ],
      answer: 1,
      rationale: "MPC 在链下分片密钥并协作签名，无需部署链上多签合约，因此天然跨链兼容。签名结果与普通单签交易无异，对链无感知。"
    },
    {
      id: "bc-w6-1-q3",
      question: "企业密钥管理中权限隔离的核心原则是？",
      options: [
        "所有管理员共享同一密钥",
        "遵循最小权限原则，签名、部署、管理权限分离",
        "密钥对所有员工公开",
        "仅在工作时间允许签名"
      ],
      answer: 1,
      rationale: "最小权限原则确保每个角色仅拥有完成其职责所需的最低权限，签名权限、部署权限和密钥管理权限应由不同角色持有。"
    }
  ],
  "bc-w6-2": [
    {
      id: "bc-w6-2-q1",
      question: "Optimistic Rollup 与 ZK Rollup 的关键区别是？",
      options: [
        "Optimistic Rollup 不使用以太坊结算",
        "Optimistic Rollup 假设交易有效并依赖欺诈证明，ZK Rollup 通过零知识证明保证有效性",
        "ZK Rollup 不压缩交易数据",
        "两者吞吐量完全相同"
      ],
      answer: 1,
      rationale: "Optimistic Rollup 乐观执行并在挑战期内接受欺诈证明；ZK Rollup 每批交易附带有效性证明，L1 验证通过后即确认，无需挑战期。"
    },
    {
      id: "bc-w6-2-q2",
      question: "跨链桥安全评估时最需要关注的是？",
      options: [
        "前端框架版本",
        "验证模型与托管资产的信任假设",
        "是否使用 TypeScript",
        "链上代币的名称"
      ],
      answer: 1,
      rationale: "桥接安全取决于验证者集合的去中心化程度、签名阈值和托管资金的安全假设。历史上多起重大安全事件都源于信任模型的薄弱环节。"
    },
    {
      id: "bc-w6-2-q3",
      question: "Rollup 为什么需要保证数据可用性？",
      options: [
        "为了降低 gas 费用",
        "确保任何人可以用链上数据重建状态或构建欺诈证明",
        "提高前端加载速度",
        "为了兼容更多浏览器"
      ],
      answer: 1,
      rationale: "如果交易数据不可用，验证者无法重建状态或在 Optimistic Rollup 中构建欺诈证明，整个 Rollup 的安全性将丧失。"
    }
  ]
}
