import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
  "bc-w3-1": {
    lessonId: "bc-w3-1",
    background: [
      "【EVM 概述】以太坊虚拟机（EVM）是一个基于栈的虚拟机，执行编译后的字节码。所有节点运行相同的 EVM 保证状态一致性。",
      "【Gas 机制】每条 EVM 指令消耗固定数量的 gas，用户为交易设置 gas limit 和 gas price。gas 防止无限循环并量化计算成本。",
      "【存储布局】合约存储是一个 2^256 大小的键值映射。状态变量按声明顺序占据 slot，理解布局对优化 gas 和避免冲突至关重要。",
      "【Solidity 数据类型】基本类型包括 uint/int（8-256位）、address（20字节）、bool、bytes 等。引用类型包括数组、映射和结构体。",
      "【事件日志】Solidity 的 event 和 emit 关键字将数据写入交易日志（不存储在合约状态中）。indexed 参数可被高效过滤，是前端监听链上变化的主要方式。"
    ],
    keyDifficulties: [
      "【Gas 优化】storage 操作最贵（SSTORE 约 20000 gas），memory 次之，calldata 最便宜。合理使用数据位置是 gas 优化的关键。",
      "【Slot 打包】多个小于 32 字节的变量可被编译器打包到同一个 storage slot 中。变量声明顺序影响打包效率，进而影响 gas 消耗。",
      "【可见性修饰符】public、external、internal、private 控制函数访问范围。external 函数参数通过 calldata 传递比 public 更省 gas。",
      "【值类型 vs 引用类型】值类型赋值时复制数据，引用类型需要指定数据位置（storage/memory/calldata），错误使用会导致意外的状态修改。"
    ],
    handsOnPath: [
      "在 Remix IDE（remix.ethereum.org）中编写一个简单的计数器合约：包含状态变量、increment 函数和事件。",
      "部署合约到 Remix 的 JavaScript VM，观察每次函数调用消耗的 gas 数量。",
      "尝试声明不同数据类型（uint8、uint256、string、mapping），对比它们的 gas 消耗。",
      "编写一个带有 indexed 参数的事件，部署后在 Remix 的 logs 面板中观察事件输出。",
      "使用 Remix 的 Debugger 功能逐步执行交易，观察 EVM 栈和存储的变化。"
    ],
    selfCheck: [
      "EVM 为什么采用基于栈的架构？这对合约执行有什么影响？",
      "gas 机制的设计目的是什么？gas limit 和 gas price 分别控制什么？",
      "storage、memory 和 calldata 三种数据位置的 gas 成本排序是怎样的？",
      "如何通过变量声明顺序优化 storage slot 的打包？",
      "事件日志存储在哪里？indexed 参数和非 indexed 参数有什么区别？"
    ],
    extensions: [
      "阅读 EVM 操作码表（evm.codes），了解 SLOAD/SSTORE/MLOAD/MSTORE 等指令的 gas 消耗。",
      "学习 Solidity 汇编（assembly/Yul），了解如何绕过高级语言限制直接操作 EVM。",
      "研究 EIP-1559 的费用模型：base fee、priority fee 和费用燃烧机制。",
      "了解 Solidity 编译器的优化器选项（optimizer runs）及其对字节码大小和运行时 gas 的影响。"
    ],
    sourceUrls: [
      "https://docs.soliditylang.org/en/latest/",
      "https://ethereum.org/en/developers/docs/",
      "https://roadmap.sh/solidity"
    ]
  },
  "bc-w3-2": {
    lessonId: "bc-w3-2",
    background: [
      "【Hardhat 框架】Hardhat 是主流的以太坊开发环境，提供编译、测试、部署和调试功能。内置 Hardhat Network 支持 console.log 和堆栈追踪。",
      "【Foundry 框架】Foundry 使用 Solidity 编写测试（而非 JavaScript），执行速度快。核心工具包括 forge（测试/构建）、cast（链交互）和 anvil（本地节点）。",
      "【测试结构】合约测试通常包含 setUp 函数（初始化）和多个 test 函数。好的测试覆盖正常路径、边界条件和异常路径。",
      "【断言与期望】Hardhat 使用 chai/expect 断言；Foundry 使用 assertEq、assertTrue 等原生断言和 vm.expectRevert 检查回滚。",
      "【执行痕迹】调试时可查看完整的调用栈和状态变化。Hardhat 的 console.log 在合约内打印日志，Foundry 的 -vvvv 标志显示详细执行痕迹。"
    ],
    keyDifficulties: [
      "【测试隔离】每个测试应独立运行，不依赖其他测试的状态。Foundry 的 setUp 在每个测试前重新执行，Hardhat 使用 beforeEach。",
      "【模拟与作弊码】Foundry 的 vm.prank 可模拟不同调用者，vm.deal 设置账户余额，vm.warp 修改区块时间。Hardhat 使用 hardhat_impersonateAccount。",
      "【Gas 报告】Foundry 的 --gas-report 生成每个函数的 gas 消耗报告，帮助定位优化点。持续跟踪 gas 变化可防止回归。",
      "【Fuzzing 测试】Foundry 原生支持模糊测试：test 函数接受参数时自动运行随机输入。可发现手动测试难以覆盖的边界情况。"
    ],
    handsOnPath: [
      "使用 `npx hardhat init` 或 `forge init` 创建新项目，了解项目结构。",
      "编写一个 ERC-20 代币合约，包含 mint、transfer 和 balanceOf 功能。",
      "为 ERC-20 合约编写测试：测试初始余额、转账成功、余额不足回滚等场景。",
      "在 Hardhat 合约中使用 console.log 打印调试信息，或在 Foundry 中使用 -vvvv 查看执行痕迹。",
      "运行 gas 报告（forge test --gas-report 或 hardhat-gas-reporter），分析各函数的 gas 消耗。"
    ],
    selfCheck: [
      "Hardhat 和 Foundry 各自的核心优势是什么？",
      "如何确保每个测试独立运行，不受其他测试状态的影响？",
      "Foundry 的 vm.prank 和 vm.expectRevert 分别用于什么场景？",
      "模糊测试（Fuzzing）相比手动测试有什么优势？",
      "如何利用 gas 报告定位需要优化的函数？"
    ],
    extensions: [
      "使用 Foundry 的 invariant 测试功能编写不变量检查，验证合约状态始终满足预期。",
      "探索 Hardhat 的 fork 功能，在本地复刻主网状态进行集成测试。",
      "学习使用 Tenderly 或 Blocknative 进行交易模拟和调试。",
      "研究形式化验证工具（如 Certora）如何数学证明合约属性。"
    ],
    sourceUrls: [
      "https://hardhat.org/tutorial",
      "https://book.getfoundry.sh/",
      "https://roadmap.sh/blockchain"
    ]
  }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
  "bc-w3-1": [
    {
      id: "bc-w3-1-q1",
      question: "EVM 中 gas 机制的主要设计目的是？",
      options: [
        "增加代币通缩压力",
        "防止无限循环并量化计算资源消耗",
        "加速交易确认速度",
        "限制合约源码长度"
      ],
      answer: 1,
      rationale: "gas 为每条 EVM 指令定价，确保计算可终止且执行者承担资源成本，有效防止拒绝服务攻击。"
    },
    {
      id: "bc-w3-1-q2",
      question: "Solidity 中 storage、memory、calldata 三种数据位置按 gas 成本从高到低排列是？",
      options: [
        "calldata > memory > storage",
        "storage > memory > calldata",
        "memory > storage > calldata",
        "三者成本相同"
      ],
      answer: 1,
      rationale: "storage 操作涉及链上持久化存储最贵（SSTORE 约 20000 gas），memory 为临时内存次之，calldata 只读且最便宜。"
    },
    {
      id: "bc-w3-1-q3",
      question: "Solidity 事件中 indexed 参数的作用是？",
      options: [
        "将参数存入合约 storage",
        "允许外部按该参数高效过滤和搜索日志",
        "自动创建 getter 函数",
        "参数值会被加密"
      ],
      answer: 1,
      rationale: "indexed 参数会被哈希后存入日志的 topics 字段，允许客户端按该参数值快速过滤事件，是 DApp 监听链上变化的核心机制。"
    }
  ],
  "bc-w3-2": [
    {
      id: "bc-w3-2-q1",
      question: "Foundry 框架相比 Hardhat 的核心特点是？",
      options: [
        "使用 JavaScript 编写测试",
        "使用 Solidity 编写测试，执行速度更快",
        "不支持本地节点",
        "只能部署到主网"
      ],
      answer: 1,
      rationale: "Foundry 的测试直接用 Solidity 编写，避免 JavaScript/TypeScript 的运行时开销，测试执行速度显著快于 Hardhat。"
    },
    {
      id: "bc-w3-2-q2",
      question: "Foundry 中 vm.prank(address) 作弊码的作用是？",
      options: [
        "部署合约到指定地址",
        "模拟下一次调用来自指定地址，用于测试权限逻辑",
        "删除指定地址的状态",
        "暂停合约执行"
      ],
      answer: 1,
      rationale: "vm.prank 将下一次外部调用的 msg.sender 设置为指定地址，常用于测试 onlyOwner 等权限控制逻辑。"
    },
    {
      id: "bc-w3-2-q3",
      question: "模糊测试（Fuzzing）在智能合约开发中的价值是？",
      options: [
        "加速编译过程",
        "通过大量随机输入自动发现手动测试难以覆盖的边界问题",
        "减少合约字节码大小",
        "自动修复漏洞"
      ],
      answer: 1,
      rationale: "模糊测试自动生成随机输入运行函数，能发现开发者未预见的边界条件和异常路径，是提升合约安全性的重要手段。"
    }
  ]
}
