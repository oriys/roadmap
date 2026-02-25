import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
  "bc-w4-1": {
    lessonId: "bc-w4-1",
    background: [
      "【重入攻击】攻击者合约在 receive/fallback 中再次调用目标合约的提现函数。如果目标合约在转账前未更新状态，攻击者可反复提取资金。The DAO 事件即因此损失数亿美元。",
      "【整数溢出】Solidity 0.8 之前，uint 运算溢出不会报错而是静默回绕。攻击者可利用此漏洞使余额从 0 变为极大值。0.8+ 版本默认检查溢出。",
      "【前置运行（Front-running）】攻击者监控 mempool 中的待确认交易，提交更高 gas 的相同操作抢先执行获利。DEX 交易和 NFT 铸造是常见目标。",
      "【随机性攻击】使用 block.timestamp 或 blockhash 作为随机源是不安全的，矿工/验证者可以操控这些值。安全的随机性需要 Chainlink VRF 等预言机。",
      "【访问控制缺失】函数未限制调用者权限，导致任何人可以调用敏感操作（如 mint、pause、upgrade）。OpenZeppelin 的 Ownable 和 AccessControl 提供标准实现。"
    ],
    keyDifficulties: [
      "【Checks-Effects-Interactions】防重入的核心模式：先检查条件（Checks）、再更新状态（Effects）、最后外部调用（Interactions）。违反顺序就可能被重入。",
      "【重入锁（ReentrancyGuard）】OpenZeppelin 提供的 nonReentrant 修饰符在函数入口设置锁定标志，退出时解锁。锁定期间再次进入会回滚。",
      "【commit-reveal 方案】分两步提交以隐藏交易意图：第一步提交哈希承诺，第二步揭示原始数据。可有效防止前置运行。",
      "【tx.origin vs msg.sender】tx.origin 是交易发起的外部账户，msg.sender 是直接调用者。用 tx.origin 做权限检查存在钓鱼攻击风险。"
    ],
    handsOnPath: [
      "在 Remix 中实现一个存在重入漏洞的合约，编写攻击合约演示重入攻击过程。",
      "应用 Checks-Effects-Interactions 模式或 ReentrancyGuard 修复重入漏洞，验证攻击失败。",
      "查看 SWC Registry（swcregistry.io）中的漏洞分类，了解各类漏洞的编号和描述。",
      "使用 Slither 静态分析工具扫描示例合约，解读检测结果。",
      "为示例合约编写一份安全审查记录，列出发现的问题与改进建议。"
    ],
    selfCheck: [
      "重入攻击的原理是什么？Checks-Effects-Interactions 模式如何防御？",
      "Solidity 0.8 之前和之后对整数溢出的处理有什么区别？",
      "前置运行攻击的工作流程是什么？commit-reveal 如何缓解？",
      "为什么不能用 block.timestamp 作为随机数来源？",
      "tx.origin 和 msg.sender 有什么区别？为什么不应该用 tx.origin 做权限检查？"
    ],
    extensions: [
      "研究闪电贷攻击（Flash Loan Attack）的典型案例，理解经济攻击面。",
      "了解 MEV（最大可提取价值）及其对 DeFi 用户的影响，探索 Flashbots 等缓解方案。",
      "学习使用 MythX 或 Echidna 进行深度合约安全分析。",
      "阅读 OpenZeppelin 安全博客了解最新的漏洞发现和最佳实践。"
    ],
    sourceUrls: [
      "https://swcregistry.io/",
      "https://docs.openzeppelin.com/contracts/5.x/security-considerations",
      "https://roadmap.sh/blockchain"
    ]
  },
  "bc-w4-2": {
    lessonId: "bc-w4-2",
    background: [
      "【代理模式】智能合约部署后字节码不可修改。代理模式通过 delegatecall 将调用转发给可更换的逻辑合约，状态保存在代理中，实现可升级。",
      "【透明代理】管理员调用代理的管理函数（如 upgradeTo），普通用户调用被转发到逻辑合约。透明代理通过 msg.sender 区分两种调用路径。",
      "【UUPS 代理】升级逻辑在逻辑合约内部实现（而非代理），减少代理合约的复杂度和 gas 消耗。但逻辑合约必须包含升级函数。",
      "【角色控制（AccessControl）】OpenZeppelin 的 AccessControl 提供多角色权限管理。每个角色有独立的授权/撤销逻辑，比简单的 Ownable 更灵活。",
      "【多签治理】多签钱包（如 Safe/Gnosis Safe）要求多个签名者共同批准交易。常用于管理合约升级、资金转移等高风险操作，防止单点故障。"
    ],
    keyDifficulties: [
      "【存储冲突】代理和逻辑合约共享存储空间。升级时新逻辑合约的存储布局必须兼容旧版本，否则会读写错误的 slot 导致数据损坏。",
      "【初始化替代构造函数】代理模式中逻辑合约的 constructor 不会在代理上下文执行。必须使用 initializer 函数替代，且需防止重复初始化。",
      "【透明代理 vs UUPS】透明代理的管理逻辑在代理中，每次调用多一次 msg.sender 检查；UUPS 更轻量但逻辑合约遗漏升级函数则永远无法升级。",
      "【时间锁（Timelock）】关键操作（如升级、参数修改）通过 Timelock 延迟执行，给社区时间审查。通常与多签和治理投票结合使用。"
    ],
    handsOnPath: [
      "使用 OpenZeppelin Upgrades 插件（Hardhat 或 Foundry）部署一个可升级的计数器合约。",
      "将逻辑合约升级到 V2 版本（添加新函数），验证旧状态保持不变。",
      "故意修改 V2 的存储布局（交换变量顺序），观察存储冲突导致的数据错误。",
      "使用 AccessControl 为合约设置 ADMIN、MINTER、PAUSER 角色，编写测试验证权限。",
      "部署一个 Safe 多签钱包，配置 2-of-3 签名策略，模拟多人批准一笔交易。"
    ],
    selfCheck: [
      "为什么智能合约需要代理模式来实现升级？delegatecall 的工作原理是什么？",
      "透明代理和 UUPS 代理各自的优缺点是什么？",
      "存储冲突是什么？升级合约时如何避免？",
      "为什么可升级合约不能使用 constructor？initializer 函数需要注意什么？",
      "多签治理在合约管理中解决什么问题？常见的签名策略有哪些？"
    ],
    extensions: [
      "研究 Diamond 模式（EIP-2535），了解其多面合约的模块化升级方案。",
      "了解 Beacon 代理模式，适用于批量部署相同逻辑的场景（如工厂合约）。",
      "探索链上治理协议（如 Compound Governor、OpenZeppelin Governor），理解提案-投票-执行流程。",
      "研究不可变合约的哲学——何时选择不可升级的设计以增强用户信任。"
    ],
    sourceUrls: [
      "https://docs.openzeppelin.com/upgrades-plugins/1.x/",
      "https://gnosis-safe.io/",
      "https://roadmap.sh/blockchain"
    ]
  }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
  "bc-w4-1": [
    {
      id: "bc-w4-1-q1",
      question: "避免 Solidity 重入漏洞的推荐做法是？",
      options: [
        "禁用事件日志",
        "使用 Checks-Effects-Interactions 顺序或 ReentrancyGuard",
        "提高 gas 上限",
        "仅使用 view 函数"
      ],
      answer: 1,
      rationale: "先更新状态再进行外部调用，或使用 OpenZeppelin 的 nonReentrant 修饰符，可阻断递归调用导致的资金重复提取。"
    },
    {
      id: "bc-w4-1-q2",
      question: "前置运行（Front-running）攻击的防御措施包括？",
      options: [
        "增大区块大小",
        "使用 commit-reveal 方案或私有交易池隐藏交易意图",
        "降低 gas 价格",
        "禁用事件日志"
      ],
      answer: 1,
      rationale: "commit-reveal 分两步提交以隐藏交易内容，私有交易池避免在公开 mempool 中暴露意图，从而降低被抢跑风险。"
    },
    {
      id: "bc-w4-1-q3",
      question: "为什么不应该用 tx.origin 做权限检查？",
      options: [
        "tx.origin 的值不稳定",
        "攻击者可通过中间合约伪装 tx.origin 发起钓鱼攻击",
        "tx.origin 在 Solidity 0.8 中被移除",
        "tx.origin 比 msg.sender 消耗更多 gas"
      ],
      answer: 1,
      rationale: "tx.origin 始终是最初发起交易的外部账户。恶意合约可以诱导用户调用，此时 tx.origin 是用户地址，绕过权限检查。应使用 msg.sender。"
    }
  ],
  "bc-w4-2": [
    {
      id: "bc-w4-2-q1",
      question: "合约升级中透明代理模式的工作原理是？",
      options: [
        "直接修改已部署合约的字节码",
        "代理合约通过 delegatecall 将调用转发给逻辑合约，状态保存在代理中",
        "创建新地址并迁移所有用户",
        "使用 CREATE2 覆盖旧合约"
      ],
      answer: 1,
      rationale: "透明代理将存储与逻辑分离，通过 delegatecall 执行逻辑合约代码但使用代理的存储，升级时仅更换逻辑合约地址。"
    },
    {
      id: "bc-w4-2-q2",
      question: "可升级合约中存储冲突的根因是？",
      options: [
        "gas 不足导致存储失败",
        "新版逻辑合约的存储布局与旧版不兼容导致 slot 读写错误",
        "代理合约的地址变化",
        "编译器版本不同"
      ],
      answer: 1,
      rationale: "代理和逻辑合约共享存储空间，变量按 slot 位置读写。如果新版本修改了变量顺序或类型，会读写错误的 slot，造成数据损坏。"
    },
    {
      id: "bc-w4-2-q3",
      question: "多签钱包在合约治理中的核心作用是？",
      options: [
        "加速交易确认",
        "要求多个签名者共同批准高风险操作，防止单点故障",
        "减少 gas 消耗",
        "自动审计合约代码"
      ],
      answer: 1,
      rationale: "多签要求达到阈值数量的签名者批准后才执行交易，有效防止单人作恶或私钥泄露导致的资金损失。"
    }
  ]
}
