import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
  "bc-w5-1": {
    lessonId: "bc-w5-1",
    background: [
      "【全节点】全节点存储完整的链数据并独立验证所有交易和区块。运行全节点是参与网络最安全的方式，但需要大量磁盘空间（以太坊约 1TB+）。",
      "【归档节点】归档节点保存所有历史状态快照，可查询任意区块高度的账户余额和合约状态。存储需求极大（数 TB），通常用于数据服务和分析。",
      "【轻节点】轻节点仅同步区块头，通过向全节点请求 Merkle 证明来验证数据。资源消耗最低，适合嵌入式设备和移动应用。",
      "【客户端选择】以太坊主流执行层客户端包括 Geth（Go）、Erigon（Go，优化存储）、Nethermind（C#）、Besu（Java）。多客户端策略提高网络弹性。",
      "【监控与告警】生产节点需要监控同步状态、peer 连接数、内存/磁盘使用率和 RPC 延迟。Prometheus + Grafana 是常见的监控方案。"
    ],
    keyDifficulties: [
      "【同步模式】Geth 支持 snap sync（快速同步最新状态）和 full sync（从创世块逐块验证）。snap sync 更快但不保留完整历史状态。",
      "【数据膨胀】链数据持续增长，需要定期清理或使用 pruning（状态裁剪）策略。Erigon 通过平坦存储和 MDBX 数据库显著降低磁盘占用。",
      "【RPC 安全】公开的 RPC 端点可能被滥用（DoS 攻击、隐私泄露）。应限制访问（白名单/API Key）、设置速率限制、关闭不必要的 API 模块。",
      "【高可用部署】生产环境通常部署多个节点做负载均衡，配合健康检查自动切换。使用 Infura、Alchemy 等服务作为备用 RPC。"
    ],
    handsOnPath: [
      "在本地或云服务器上使用 Docker 启动一个 Geth 节点（可使用测试网 Sepolia 降低资源需求）。",
      "配置 Geth 的 HTTP RPC 和 WebSocket 端点，使用 curl 调用 eth_blockNumber 验证同步状态。",
      "安装 Prometheus 并配置 Geth 的 metrics 导出，在 Grafana 中创建节点监控仪表板。",
      "设置磁盘空间和 peer 数量的告警规则，模拟告警触发流程。",
      "对比 Geth 和 Erigon 在同步速度和磁盘占用上的差异。"
    ],
    selfCheck: [
      "全节点、归档节点和轻节点各自适合什么场景？资源需求如何？",
      "snap sync 和 full sync 有什么区别？各自的优缺点是什么？",
      "为什么公开的 RPC 端点需要安全防护？应采取哪些措施？",
      "如何监控节点的健康状态？应关注哪些关键指标？",
      "为什么以太坊提倡多客户端策略？单一客户端主导有什么风险？"
    ],
    extensions: [
      "研究以太坊的 Portal Network（轻客户端协议），了解其如何降低节点准入门槛。",
      "探索 Flashbots Protect RPC，了解如何通过私有交易池保护用户免受 MEV 攻击。",
      "学习使用 Ansible/Terraform 自动化节点部署和配置管理。",
      "了解 DVT（Distributed Validator Technology）如何提高验证节点的弹性和去中心化程度。"
    ],
    sourceUrls: [
      "https://geth.ethereum.org/docs",
      "https://github.com/ledgerwatch/erigon",
      "https://prometheus.io/docs/introduction/overview/"
    ]
  },
  "bc-w5-2": {
    lessonId: "bc-w5-2",
    background: [
      "【事件日志】合约通过 emit 将结构化数据写入交易收据的日志字段。日志不存储在合约状态中，gas 成本远低于 storage 写入。",
      "【日志订阅】WebSocket 或 IPC 连接节点后可实时订阅新日志（eth_subscribe + logs）。适合需要快速响应的场景如交易通知和清算监控。",
      "【The Graph】去中心化的索引协议，通过 Subgraph 定义感兴趣的事件和实体，自动索引链上数据并提供 GraphQL 查询接口。",
      "【自建 ETL】使用 ethers.js/web3.py 监听事件，解析后写入数据库（PostgreSQL/ClickHouse）。适合需要自定义业务逻辑和复杂聚合的场景。",
      "【数据完整性】索引服务必须处理链重组（reorg）情况。当区块被回滚时，已索引的数据需要相应撤销，否则会出现数据不一致。"
    ],
    keyDifficulties: [
      "【重组处理】以太坊的 PoS 共识偶尔会发生 1-2 个区块的重组。索引服务需要监听 chain_head 事件并在重组时回滚对应数据。",
      "【数据延迟】从事件发生到被索引可查询存在延迟。The Graph 的 Hosted Service 延迟通常在数秒到数十秒。自建方案可优化到更低延迟。",
      "【日志过滤效率】bloom filter 嵌入区块头用于快速排除不含目标事件的区块。理解 bloom filter 的假阳性特性有助于优化查询策略。",
      "【大批量历史数据】从创世块索引全量历史数据需要归档节点和高效的批量 RPC 调用（如 eth_getLogs 的区块范围参数）。"
    ],
    handsOnPath: [
      "使用 ethers.js 连接节点的 WebSocket 端点，订阅特定合约的 Transfer 事件。",
      "编写脚本使用 eth_getLogs 获取过去 1000 个区块的日志，解析并格式化输出。",
      "在 The Graph 上创建一个简单的 Subgraph，索引 ERC-20 Transfer 事件，通过 GraphQL 查询。",
      "搭建一个最小的自建 ETL：监听事件 → 解析 → 写入 SQLite/PostgreSQL → 提供 REST API。",
      "模拟链重组场景，验证索引服务是否正确处理回滚。"
    ],
    selfCheck: [
      "事件日志存储在哪里？与合约 storage 相比有什么优劣？",
      "WebSocket 订阅和轮询 eth_getLogs 各自适合什么场景？",
      "The Graph 的 Subgraph 定义了什么？索引流程是怎样的？",
      "链重组对索引服务有什么影响？如何处理？",
      "bloom filter 在事件查询中起什么作用？"
    ],
    extensions: [
      "研究 Ponder 或 Envio 等新一代索引框架，对比其与 The Graph 的开发体验。",
      "了解 ERC-721/ERC-1155 的事件结构，设计 NFT 交易历史的索引方案。",
      "探索 Dune Analytics 的数据模型，学习如何用 SQL 查询链上数据。",
      "研究 Archive Node 替代方案（如 Alchemy 的 Archive API），评估自建与托管的成本取舍。"
    ],
    sourceUrls: [
      "https://thegraph.com/docs/",
      "https://docs.ethers.org/v6/api/contract/#Contract-on",
      "https://roadmap.sh/blockchain"
    ]
  }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
  "bc-w5-1": [
    {
      id: "bc-w5-1-q1",
      question: "归档节点与全节点的关键区别是？",
      options: [
        "归档节点不验证交易",
        "归档节点保存所有历史状态快照，可查询任意区块高度的状态",
        "全节点的磁盘占用更大",
        "归档节点无法参与共识"
      ],
      answer: 1,
      rationale: "归档节点在全节点基础上保留所有历史状态（而非仅最新状态），可查询任意区块的账户余额和合约状态，但存储需求数 TB。"
    },
    {
      id: "bc-w5-1-q2",
      question: "公开 RPC 端点面临的主要安全风险是？",
      options: [
        "编译错误",
        "被滥用进行 DoS 攻击和泄露用户隐私",
        "自动部署恶意合约",
        "节点自动停止"
      ],
      answer: 1,
      rationale: "无防护的公开 RPC 可被大量请求耗尽资源，eth_call 等接口也可能泄露用户地址和交易模式。需设置速率限制和访问控制。"
    },
    {
      id: "bc-w5-1-q3",
      question: "以太坊提倡多客户端策略的原因是？",
      options: [
        "不同客户端 gas 消耗不同",
        "避免单一实现的 bug 导致全网故障，提高网络弹性",
        "每个客户端支持不同的共识机制",
        "降低节点运行成本"
      ],
      answer: 1,
      rationale: "如果绝大多数节点使用同一客户端，该客户端的严重 bug 可能导致网络停摆或链分裂。多客户端策略分散了这一风险。"
    }
  ],
  "bc-w5-2": [
    {
      id: "bc-w5-2-q1",
      question: "在生产环境使用索引服务（如 The Graph）读取链上数据的主要优势是？",
      options: [
        "降低链上 gas 消耗",
        "提供结构化、可查询的历史数据以支持复杂检索",
        "绕过共识规则",
        "避免签名验证"
      ],
      answer: 1,
      rationale: "索引服务提前加工链上事件和状态数据，提供 GraphQL/SQL 等结构化查询接口，支持低延迟的复杂检索。"
    },
    {
      id: "bc-w5-2-q2",
      question: "链重组（reorg）对索引服务的影响是？",
      options: [
        "不影响，索引数据始终正确",
        "被回滚区块中的已索引数据需要相应撤销，否则数据不一致",
        "仅影响未确认交易",
        "索引服务会自动停止"
      ],
      answer: 1,
      rationale: "链重组意味着部分已确认区块被替换。索引服务必须检测重组并回滚对应数据，否则会包含无效的交易和事件。"
    },
    {
      id: "bc-w5-2-q3",
      question: "事件日志相比 storage 写入的优势是？",
      options: [
        "支持合约间调用",
        "gas 成本更低且允许外部高效过滤查询",
        "数据永不过期",
        "可被合约内部读取"
      ],
      answer: 1,
      rationale: "事件日志写入交易收据的 gas 成本远低于 storage 写入（约 1/10），且 indexed 参数支持高效的外部过滤查询。但合约内部无法读取日志。"
    }
  ]
}
