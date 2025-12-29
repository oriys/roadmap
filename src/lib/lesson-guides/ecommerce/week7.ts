import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "w7-1": {
        lessonId: "w7-1",
        background: [
            "【Payment Intent 核心】Stripe 文档定义 PaymentIntent 为支付生命周期跟踪对象，'enables developers to manage complex payment flows by tracking transactions from creation through settlement'——从创建到结算的完整追踪。",
            "【Client Secret 机制】PaymentIntent 的 client_secret 是前端完成支付的凭证，Stripe 强调它允许'secure client-side payment completion without exposing sensitive PaymentIntent data'——不暴露敏感数据的安全支付。",
            "【Payment Element 优势】Stripe Payment Element 是一个安全的 UI 组件，'accepts 100+ payment methods, validates inputs, and handles errors'——支持 100 多种支付方式，自动验证输入并处理错误。",
            "【动态支付方式】Payment Element 采用动态支付方式策略，根据客户位置、货币和交易金额自动显示最相关的支付选项，支持通过仪表板无代码管理。",
            "【两种集成 API】Stripe 提供两个兼容的支付 API：Checkout Sessions API（适合大多数用例，模型化整个购买流程）和 Payment Intents API（更高级实现，仅模型化支付步骤）。",
            "【幂等性设计】Stripe 强调 'Always use idempotent keys to prevent duplicate PaymentIntent creation'——始终使用幂等键防止重复创建 PaymentIntent，这是支付系统的关键安全实践。"
        ],
        keyDifficulties: [
            "【状态管理复杂性】PaymentIntent 有多种状态（requires_payment_method、requires_confirmation、processing、succeeded、failed 等），需要正确处理每种状态的转换和对应的用户界面反馈。",
            "【Client Secret 安全】client_secret 必须安全传递到前端，不能通过 URL 参数传递，推荐通过 API 端点（SPA）或服务端渲染（传统应用）方式传递。",
            "【支付方式兼容性】不同支付方式有不同的确认流程，如信用卡需要 3D Secure 认证、银行转账需要重定向、钱包支付需要调用原生 SDK，需要统一处理这些差异。",
            "【错误处理策略】Payment Element 自动显示本地化的用户友好错误信息，但后端仍需处理 API 错误，区分可重试错误（网络超时）和不可重试错误（卡被拒绝）。",
            "【异步支付流程】部分支付方式（如银行转账、SEPA）是异步的，支付完成可能需要数天，需要通过 Webhook 而非同步响应来确认支付状态。"
        ],
        handsOnPath: [
            "安装 Stripe SDK：npm install stripe @stripe/stripe-js @stripe/react-stripe-js，配置 API 密钥（测试模式）。",
            "后端创建 PaymentIntent 端点：接收金额和货币，返回 clientSecret 给前端。",
            "前端集成 Payment Element：使用 Elements provider 包装组件，加载 Stripe.js 并挂载 Payment Element。",
            "实现支付确认逻辑：调用 stripe.confirmPayment()，处理成功、失败、需要额外操作等情况。",
            "测试不同支付场景：使用 Stripe 测试卡号（4242424242424242 成功、4000000000000002 拒绝）验证流程。",
            "实现支付状态页面：根据 payment_intent 参数查询状态，显示成功/失败/处理中等界面。",
            "配置错误处理和重试逻辑：捕获支付错误，区分类型并提供用户友好的错误提示。"
        ],
        selfCheck: [
            "PaymentIntent 的 client_secret 用途是什么？为什么不能直接暴露整个 PaymentIntent 对象给前端？",
            "Checkout Sessions API 和 Payment Intents API 的主要区别是什么？各适用于什么场景？",
            "如何使用幂等键防止重复创建 PaymentIntent？",
            "Payment Element 相比自己实现支付表单有什么优势？",
            "支付确认后返回 requires_action 状态意味着什么？应该如何处理？",
            "如何区分同步支付和异步支付？异步支付应该如何确认最终状态？",
            "Stripe 测试模式和生产模式的主要区别是什么？",
            "如何处理 3D Secure 认证流程？"
        ],
        extensions: [
            "探索 Stripe Checkout 托管支付页面，了解快速集成方案的优缺点。",
            "研究 Setup Intents 和 Payment Methods 的使用，实现保存卡片和后续扣款功能。",
            "学习 Stripe Connect 多方支付，了解如何实现平台抽成和分账。",
            "探索 Stripe Billing 订阅支付，理解周期性收费的实现方式。",
            "了解 Apple Pay 和 Google Pay 的集成方式，提升移动支付体验。"
        ],
        sourceUrls: [
            "https://docs.stripe.com",
            "https://docs.stripe.com/payments/payment-intents",
            "https://docs.stripe.com/payments/payment-element"
        ]
    },
    "w7-2": {
        lessonId: "w7-2",
        background: [
            "【Webhook 定义】Stripe Webhooks 使应用程序'automatically react to events occurring in your Stripe account'——自动响应账户中发生的事件，而非轮询检查变化。",
            "【事件类型分类】Webhook 处理同步和异步事件，关键事件包括：payment_intent.succeeded（支付成功）、payment_intent.payment_failed（支付失败）、checkout.session.completed（结账完成）等。",
            "【签名验证核心】Stripe 强调使用官方 SDK 进行签名验证：'Use official Stripe libraries for signature verification'——验证请求确实来自 Stripe，防止伪造通知。",
            "【Raw Body 要求】签名验证需要未修改的原始请求体，Stripe 文档强调'Raw request body is required'——任何框架处理都会导致验证失败。",
            "【幂等消费者模式】microservices.io 定义幂等消费者为'recording the IDs of processed messages in the database'——通过记录已处理消息 ID 确保重复调用不产生错误结果。",
            "【重试机制】Stripe 在 Webhook 投递失败时会自动重试，最多持续 72 小时。应用必须实现幂等处理，防止重复执行业务逻辑。"
        ],
        keyDifficulties: [
            "【Raw Body 保留】Express 等框架默认解析 JSON body，导致签名验证失败。必须使用 express.raw() 中间件保留原始 body：'The express.raw middleware keeps the request body unparsed'。",
            "【快速响应要求】Webhook 端点必须快速返回 2xx 状态码，Stripe 建议在执行复杂逻辑前就响应。可以将事件放入队列异步处理，避免超时。",
            "【事件顺序问题】Webhook 不保证按事件发生顺序投递，同一 PaymentIntent 的多个事件可能乱序到达。需要检查事件时间戳或 PaymentIntent 状态来正确处理。",
            "【幂等实现策略】使用数据库唯一索引（event_id）或 Redis SETNX 实现幂等，确保同一事件只处理一次。需要同时处理 JSON 解析错误和签名验证错误。",
            "【多账户处理】对于 Stripe Connect 多账户场景，需要从事件的 context 字段提取账户信息，使用对应的 API 密钥进行后续操作。"
        ],
        handsOnPath: [
            "创建 Webhook 端点：POST /webhooks/stripe，使用 express.raw({ type: 'application/json' }) 保留原始 body。",
            "实现签名验证：从 Stripe-Signature header 提取签名，使用 stripe.webhooks.constructEvent() 验证。",
            "本地测试：使用 Stripe CLI 转发事件：stripe listen --forward-to localhost:4242/webhooks/stripe。",
            "处理关键事件：payment_intent.succeeded 更新订单状态、发送确认邮件；payment_intent.payment_failed 通知用户重试。",
            "实现幂等处理：在数据库创建 processed_events 表，使用事务确保事件只处理一次。",
            "在 Stripe Dashboard 注册 Webhook 端点，选择需要监听的事件类型，获取 endpoint secret。",
            "实现错误处理：区分签名验证错误（400）和业务处理错误（500），记录日志便于排查。"
        ],
        selfCheck: [
            "为什么 Webhook 签名验证需要原始请求体而不是解析后的 JSON？",
            "Stripe CLI 的 stripe listen 命令有什么作用？如何用它测试 Webhook？",
            "Webhook 端点为什么需要快速响应？如果处理逻辑很复杂应该怎么办？",
            "什么是幂等消费者模式？为什么 Webhook 处理必须是幂等的？",
            "如何实现 Webhook 的幂等处理？列出至少两种方法。",
            "Stripe Webhook 的重试策略是什么？最多重试多长时间？",
            "如果收到 payment_intent.succeeded 事件但订单已经被标记为已支付，应该如何处理？",
            "Webhook endpoint secret 的作用是什么？如何安全存储？"
        ],
        extensions: [
            "研究 AWS SNS/SQS 或 Google Cloud Pub/Sub，了解企业级消息队列如何保证可靠投递。",
            "探索 Stripe Events API，实现 Webhook 失败时的主动轮询补偿机制。",
            "学习分布式事务和 Saga 模式，理解如何在微服务架构中保证数据一致性。",
            "研究 Outbox Pattern，了解如何可靠地发布领域事件到消息队列。",
            "探索 Dead Letter Queue（死信队列），了解如何处理无法成功处理的消息。"
        ],
        sourceUrls: [
            "https://docs.stripe.com/webhooks",
            "https://docs.stripe.com/webhooks/signatures",
            "https://microservices.io/patterns/communication-style/idempotent-consumer.html"
        ]
    },
    "w7-3": {
        lessonId: "w7-3",
        background: [
            "【退款类型】Stripe 支持两种退款方式：全额退款（金额等于原始支付）和部分退款（仅退款部分金额）。单笔支付可执行多次退款，但总额不得超过原付款额。",
            "【退款处理时间】Stripe 文档指出客户通常'在 5-10 个工作日后看到退款'，具体取决于银行处理速度和支付方式。",
            "【退款状态】退款有多种状态：pending（待处理）、succeeded（成功）、failed（失败）、canceled（已取消）。需要通过 Webhook 监听状态变化。",
            "【Refunds API】Stripe 提供完整的 Refunds API：创建（POST /v1/refunds）、更新、查询、列表、取消。退款对象关联原始 Charge 或 PaymentIntent。",
            "【争议处理】争议（Dispute/Chargeback）发生在持卡人向发卡机构质疑付款时。Stripe 会从商户账户扣除付款金额和争议费用，商户可提交证据申诉。",
            "【预防策略】Stripe 提供 Verifi 和 Ethoca 计划自动预防争议，Smart Dispute 功能可自动收集和提交证据。"
        ],
        keyDifficulties: [
            "【退款成本】退款不会退还 Stripe 手续费，且部分支付方式有额外退款费用。最佳实践：实施授权与结算分离，在结算前取消交易可避免退款费用。",
            "【部分退款逻辑】部分退款需要业务层面确定退款金额（如只退商品不退运费），同时确保多次部分退款不超过原支付总额。",
            "【退款失败处理】退款可能失败（如银行账户已关闭），需要监听 refund.failed 事件并通知客户选择其他退款方式。",
            "【争议时效】争议有严格的响应时限（通常 7-21 天），超时未响应将自动败诉。需要建立及时响应的流程和提醒机制。",
            "【证据准备】争议申诉需要准备充分的证据：交易记录、发货证明、客户通信、服务条款等。证据类型和格式有严格要求。"
        ],
        handsOnPath: [
            "实现退款申请 API：接收订单 ID 和退款原因，验证订单状态，调用 Stripe Refunds API 创建退款。",
            "实现部分退款逻辑：计算可退款金额，支持指定退款金额或按商品选择退款。",
            "处理退款 Webhook：监听 refund.succeeded、refund.failed 事件，更新订单状态和用户通知。",
            "设计退款状态机：申请中 -> 审核中 -> 已退款/已拒绝，支持人工审核流程。",
            "实现争议通知：监听 charge.dispute.created 事件，立即通知相关人员处理。",
            "创建争议证据收集界面：汇总订单信息、物流信息、客服记录，生成证据文档。",
            "实现退款报表：统计退款率、退款原因分布、争议率等关键指标。"
        ],
        selfCheck: [
            "全额退款和部分退款在 API 调用上有什么区别？",
            "为什么说退款不会退还 Stripe 手续费？如何优化退款成本？",
            "退款状态有哪些？如何通过 Webhook 监听退款状态变化？",
            "什么是争议（Dispute）？争议发生时 Stripe 会做什么？",
            "争议申诉需要准备哪些证据？有什么格式要求？",
            "如何设计退款审核流程？什么情况下需要人工审核？",
            "退款失败时应该如何处理？有哪些可能的失败原因？",
            "如何降低争议率？有哪些预防措施？"
        ],
        extensions: [
            "研究 Stripe Issuing，了解发卡业务中的退款和争议处理差异。",
            "探索 Stripe Sigma，使用 SQL 分析退款和争议数据，识别风险模式。",
            "学习 PCI DSS 对退款处理的合规要求，特别是日志和审计方面。",
            "研究各支付方式的退款规则差异：信用卡、借记卡、银行转账、数字钱包等。",
            "探索自动化争议响应工具和服务，提高争议胜诉率。"
        ],
        sourceUrls: [
            "https://docs.stripe.com/refunds",
            "https://docs.stripe.com/api/refunds",
            "https://docs.stripe.com/disputes"
        ]
    },
    "w7-4": {
        lessonId: "w7-4",
        background: [
            "【Balance Transactions】Stripe Balance Transactions'represent funds moving through your Stripe account'——代表账户中的资金流动，自动为所有进出交易创建记录。",
            "【交易类型】Balance Transactions 记录多种交易类型：charge（收款）、refund（退款）、payout（提现）、fee（手续费）、adjustment（调整）等，是财务对账的基础数据。",
            "【报表类型】Stripe 提供多种报表：Balance Report（余额报表）、Payout Reconciliation Report（提现对账报表）、Revenue Recognition（收入确认），支持仪表板查看、CSV 下载、API 获取。",
            "【对账定义】支付对账是将 Stripe 支付记录与银行入账记录进行匹配的过程，确保每笔交易都能追溯，发现差异并及时处理。",
            "【自动化工具】Stripe Bank Reconciliation 功能可自动匹配 Stripe 提现与银行存款，'track all Stripe payouts and their bank deposit matching status in one location'。",
            "【定期执行】最佳实践建议定期执行对账（通常按月），及时发现和解决差异，保持财务记录准确。"
        ],
        keyDifficulties: [
            "【时间戳差异】Revenue Recognition 和 Balance Summary 使用不同的时间戳，如果支付处理时间较长，可能导致对账不匹配。需要理解各报表的时间维度。",
            "【费用处理】2025 年 3 月起，Debits and Credits 报表自动包含费用、网络成本和贡献金。对账时需要正确处理这些扣除项。",
            "【提现延迟】Stripe 提现到银行账户通常需要 1-2 个工作日，对账时需要考虑这个时间差，不能简单按日期匹配。",
            "【货币转换】跨境交易涉及货币转换，Balance Transactions 会包含汇率和转换后金额，对账时需要统一货币单位。",
            "【异常处理】对账发现差异时需要分析原因：退款、争议、手续费变化、提现失败等，建立差异处理流程。"
        ],
        handsOnPath: [
            "设计交易记录表结构：记录 Stripe transaction_id、类型、金额、手续费、净额、创建时间、关联订单等字段。",
            "实现交易同步：通过 Webhook 监听 balance.available 事件，或定期调用 Balance Transactions API 同步数据。",
            "实现提现追踪：监听 payout.paid 和 payout.failed 事件，记录提现状态和银行到账时间。",
            "开发日对账功能：按日汇总交易金额，与 Stripe Dashboard 数据核对，标记差异项。",
            "实现月度财务报表：按月汇总收入、退款、手续费、净收入，生成财务报表。",
            "对接会计系统：将 Stripe 数据导出为 CSV 或通过 API 同步到 QuickBooks、Xero 等会计软件。",
            "建立对账预警：设置差异阈值，超过阈值自动告警，确保及时发现问题。"
        ],
        selfCheck: [
            "Balance Transactions 包含哪些交易类型？每种类型代表什么？",
            "Stripe 提供哪些报表？各自的用途是什么？",
            "什么是支付对账？为什么需要定期执行？",
            "对账时发现差异应该如何处理？有哪些常见的差异原因？",
            "Stripe 提现到银行账户通常需要多长时间？这对对账有什么影响？",
            "如何设计交易记录表结构来支持对账需求？",
            "Revenue Recognition 报表和 Balance Summary 报表有什么区别？",
            "如何实现自动化对账？有哪些关键步骤？"
        ],
        extensions: [
            "研究 Stripe Sigma，使用 SQL 对 Stripe 数据进行高级查询和分析。",
            "探索 Stripe Data Pipeline，将数据导出到 Snowflake、BigQuery 等数据仓库。",
            "学习 ASC 606 和 IFRS 15 收入确认准则，理解 Revenue Recognition 报表的合规价值。",
            "研究多实体、多货币场景下的财务合并和对账策略。",
            "探索财务自动化工具（如 Ramp、Brex）与 Stripe 的集成方案。"
        ],
        sourceUrls: [
            "https://docs.stripe.com/api/balance_transactions",
            "https://docs.stripe.com/reports",
            "https://docs.stripe.com/bank-reconciliation"
        ]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "w7-1": [
        {
            id: "w7-1-q1",
            question: "Stripe PaymentIntent 的核心作用是什么？",
            options: ["跟踪支付从创建到结算的完整生命周期", "存储用户信息", "生成发票", "计算运费"],
            answer: 0,
            rationale: "Stripe 文档明确 PaymentIntent 用于'tracking transactions from creation through settlement'——跟踪支付从创建到结算的完整生命周期。"
        },
        {
            id: "w7-1-q2",
            question: "PaymentIntent 的 client_secret 的用途是什么？",
            options: ["后端 API 认证", "数据库加密密钥", "用户密码哈希", "允许前端安全完成支付而不暴露敏感数据"],
            answer: 3,
            rationale: "Stripe 强调 client_secret 允许'secure client-side payment completion without exposing sensitive PaymentIntent data'。"
        },
        {
            id: "w7-1-q3",
            question: "Stripe Payment Element 支持多少种支付方式？",
            options: ["10+", "50+", "100+", "200+"],
            answer: 2,
            rationale: "Stripe 文档指出 Payment Element'accepts 100+ payment methods'——支持 100 多种支付方式。"
        },
        {
            id: "w7-1-q4",
            question: "Stripe 提供的两种支付集成 API 是什么？",
            options: ["REST API 和 GraphQL API", "Checkout Sessions API 和 Payment Intents API", "Charges API 和 Orders API", "Sources API 和 Tokens API"],
            answer: 1,
            rationale: "Stripe 提供 Checkout Sessions API（模型化整个购买流程）和 Payment Intents API（仅模型化支付步骤）两种集成方式。"
        },
        {
            id: "w7-1-q5",
            question: "为什么 Stripe 建议使用幂等键创建 PaymentIntent？",
            options: ["防止重复创建 PaymentIntent", "提高支付速度", "减少手续费", "支持多货币"],
            answer: 0,
            rationale: "Stripe 强调'Always use idempotent keys to prevent duplicate PaymentIntent creation'——防止因网络重试等原因重复创建。"
        },
        {
            id: "w7-1-q6",
            question: "Payment Element 的动态支付方式功能会根据什么显示支付选项？",
            options: ["商户偏好设置", "支付方式字母顺序", "手续费高低", "客户位置、货币和交易金额"],
            answer: 3,
            rationale: "Payment Element 根据客户位置、货币和交易金额自动显示最相关的支付选项。"
        },
        {
            id: "w7-1-q7",
            question: "Checkout Sessions API 相比 Payment Intents API 的主要特点是什么？",
            options: ["只支持信用卡", "模型化整个购买流程，包括行项目、税率和折扣", "需要更多代码", "不支持 Webhook"],
            answer: 1,
            rationale: "Checkout Sessions API 适合大多数用例，可模型化整个购买流程，包括行项目、税率和折扣。"
        },
        {
            id: "w7-1-q8",
            question: "支付确认后如果需要 3D Secure 认证，PaymentIntent 会返回什么状态？",
            options: ["succeeded", "failed", "requires_action", "canceled"],
            answer: 2,
            rationale: "需要额外认证（如 3D Secure）时，PaymentIntent 返回 requires_action 状态，前端需要处理认证流程。"
        },
        {
            id: "w7-1-q9",
            question: "Stripe 测试信用卡号 4242424242424242 代表什么场景？",
            options: ["支付成功", "支付失败", "需要 3D Secure", "卡被盗"],
            answer: 0,
            rationale: "4242424242424242 是 Stripe 的标准成功测试卡号，用于模拟成功支付场景。"
        },
        {
            id: "w7-1-q10",
            question: "关于 client_secret 的传递，以下哪种方式是推荐的？",
            options: ["通过 URL 参数传递", "存储在 localStorage", "硬编码在前端代码中", "通过 API 端点或服务端渲染传递"],
            answer: 3,
            rationale: "Stripe 推荐通过 API 端点（SPA）或服务端渲染（传统应用）方式传递 client_secret，不能通过 URL 参数传递。"
        },
        {
            id: "w7-1-q11",
            question: "Payment Element 如何处理支付错误？",
            options: ["静默忽略", "自动显示本地化的用户友好错误信息", "只记录日志", "重定向到错误页面"],
            answer: 1,
            rationale: "Payment Element 自动显示本地化的客户友好错误信息，涵盖卡被拒、资金不足、CVC 无效等常见场景。"
        },
        {
            id: "w7-1-q12",
            question: "对于银行转账等异步支付方式，如何确认最终支付状态？",
            options: ["同步等待 API 响应", "轮询 PaymentIntent 状态", "通过 Webhook 接收支付完成通知", "用户手动确认"],
            answer: 2,
            rationale: "异步支付方式（如银行转账）可能需要数天完成，需要通过 Webhook 而非同步响应来确认最终支付状态。"
        }
    ],
    "w7-2": [
        {
            id: "w7-2-q1",
            question: "Stripe Webhook 的核心作用是什么？",
            options: ["自动响应账户中发生的事件", "主动轮询检查变化", "发送营销邮件", "生成报表"],
            answer: 0,
            rationale: "Stripe Webhooks 使应用程序'automatically react to events occurring in your Stripe account'——自动响应事件，而非轮询。"
        },
        {
            id: "w7-2-q2",
            question: "Webhook 签名验证需要什么数据？",
            options: ["只需要 API 密钥", "只需要 JSON 解析后的数据", "用户 ID 和订单号", "原始请求体、Stripe-Signature header、endpoint secret"],
            answer: 3,
            rationale: "签名验证需要三个组件：原始请求体（未修改）、Stripe-Signature header、endpoint secret。"
        },
        {
            id: "w7-2-q3",
            question: "为什么 Webhook 签名验证必须使用原始请求体？",
            options: ["原始请求体更小", "框架解析会修改 body 导致签名验证失败", "JSON 格式不安全", "Stripe 要求使用 XML"],
            answer: 1,
            rationale: "Stripe 强调'Raw request body is required'——任何框架处理都会改变原始 body，导致签名验证失败。"
        },
        {
            id: "w7-2-q4",
            question: "幂等消费者模式的核心实现方式是什么？",
            options: ["记录已处理消息的 ID 到数据库", "使用全局锁", "限制并发数", "使用消息队列"],
            answer: 0,
            rationale: "microservices.io 定义幂等消费者为'recording the IDs of processed messages in the database'——记录已处理消息 ID。"
        },
        {
            id: "w7-2-q5",
            question: "Stripe Webhook 投递失败后的重试策略是什么？",
            options: ["不重试", "重试 3 次", "最多重试 72 小时", "无限重试"],
            answer: 2,
            rationale: "Stripe 在 Webhook 投递失败时会自动重试，最多持续 72 小时。"
        },
        {
            id: "w7-2-q6",
            question: "Stripe CLI 的 'stripe listen' 命令的作用是什么？",
            options: ["监控服务器状态", "将 Stripe 事件转发到本地开发端点", "监听数据库变化", "录制用户操作"],
            answer: 1,
            rationale: "stripe listen --forward-to localhost:4242 将 Stripe 事件转发到本地端点，便于开发测试。"
        },
        {
            id: "w7-2-q7",
            question: "Webhook 端点应该如何处理复杂的业务逻辑？",
            options: ["同步执行所有逻辑再响应", "拒绝复杂请求", "增加超时时间", "先快速返回 2xx，将事件放入队列异步处理"],
            answer: 3,
            rationale: "Webhook 端点必须快速响应，Stripe 建议在执行复杂逻辑前就响应，将事件放入队列异步处理。"
        },
        {
            id: "w7-2-q8",
            question: "Express 中保留原始请求体应该使用什么中间件？",
            options: ["express.json()", "express.urlencoded()", "express.raw({ type: 'application/json' })", "body-parser"],
            answer: 2,
            rationale: "Stripe 文档指出'express.raw middleware keeps the request body unparsed'——需要使用 express.raw 保留原始 body。"
        },
        {
            id: "w7-2-q9",
            question: "实现 Webhook 幂等处理的方法不包括以下哪项？",
            options: ["数据库唯一索引", "Redis SETNX", "增加服务器内存", "事务处理"],
            answer: 2,
            rationale: "幂等处理可通过数据库唯一索引、Redis SETNX、事务等实现，增加内存不能解决幂等问题。"
        },
        {
            id: "w7-2-q10",
            question: "Webhook 事件不按顺序到达时应该如何处理？",
            options: ["忽略乱序事件", "检查事件时间戳或 PaymentIntent 状态", "要求 Stripe 按顺序发送", "使用全局锁"],
            answer: 1,
            rationale: "Webhook 不保证按事件发生顺序投递，需要检查事件时间戳或 PaymentIntent 状态来正确处理。"
        },
        {
            id: "w7-2-q11",
            question: "Webhook 签名验证失败应该返回什么 HTTP 状态码？",
            options: ["200", "400", "500", "302"],
            answer: 1,
            rationale: "签名验证失败应返回 400 Bad Request，表示请求无效，与业务处理错误（500）区分。"
        },
        {
            id: "w7-2-q12",
            question: "对于 Stripe Connect 多账户场景，如何确定事件来源？",
            options: ["从事件的 context 字段提取账户信息", "查看 IP 地址", "检查 User-Agent", "通过域名判断"],
            answer: 0,
            rationale: "多账户场景需要从事件的 context 字段提取账户信息，使用对应的 API 密钥进行后续操作。"
        }
    ],
    "w7-3": [
        {
            id: "w7-3-q1",
            question: "Stripe 支持的退款类型有哪些？",
            options: ["全额退款和部分退款", "只有全额退款", "只有部分退款", "退款需要人工处理"],
            answer: 0,
            rationale: "Stripe 支持全额退款（金额等于原始支付）和部分退款（仅退款部分金额）两种类型。"
        },
        {
            id: "w7-3-q2",
            question: "单笔支付可以执行多次部分退款吗？",
            options: ["不可以", "可以，但总额不得超过原付款额", "可以，没有限制", "只能执行两次"],
            answer: 1,
            rationale: "Stripe 文档指出单笔支付可执行多次退款，'但总额不得超过原付款额'。"
        },
        {
            id: "w7-3-q3",
            question: "客户通常在退款后多长时间能看到退款？",
            options: ["立即", "1-2 个工作日", "5-10 个工作日", "30 个工作日"],
            answer: 2,
            rationale: "Stripe 文档指出客户通常'在 5-10 个工作日后看到退款'，取决于银行处理速度。"
        },
        {
            id: "w7-3-q4",
            question: "退款会退还 Stripe 手续费吗？",
            options: ["会全额退还", "退还一半", "取决于退款原因", "不会退还手续费"],
            answer: 3,
            rationale: "退款不会退还 Stripe 手续费，这是退款成本的一部分。"
        },
        {
            id: "w7-3-q5",
            question: "如何优化退款成本？",
            options: ["减少退款次数", "实施授权与结算分离，在结算前取消交易", "使用信用卡支付", "增加退款审核流程"],
            answer: 1,
            rationale: "最佳实践是实施授权与结算分离，在支付结算前取消交易或减少结算金额，可避免退款费用。"
        },
        {
            id: "w7-3-q6",
            question: "什么是争议（Dispute）？",
            options: ["持卡人向发卡机构质疑付款", "商户与 Stripe 的纠纷", "系统错误", "退款申请"],
            answer: 0,
            rationale: "争议发生在持卡人向发卡机构对付款提出质疑时，发卡机构会向卡网络提交正式申请。"
        },
        {
            id: "w7-3-q7",
            question: "争议发生时 Stripe 会做什么？",
            options: ["自动退款给客户", "等待商户决定", "拒绝争议请求", "从商户账户扣除付款金额和争议费用"],
            answer: 3,
            rationale: "Stripe 会从商户账户中扣除付款金额和争议费用，商户可以提交证据申诉。"
        },
        {
            id: "w7-3-q8",
            question: "退款的状态不包括以下哪项？",
            options: ["pending", "succeeded", "processing", "canceled"],
            answer: 2,
            rationale: "退款状态包括 pending、succeeded、failed、canceled，没有 processing 状态。"
        },
        {
            id: "w7-3-q9",
            question: "Stripe 提供哪些自动化争议处理工具？",
            options: ["只有人工审核", "Verifi、Ethoca 计划和 Smart Dispute 功能", "自动退款", "AI 聊天机器人"],
            answer: 1,
            rationale: "Stripe 提供 Verifi 和 Ethoca 计划自动预防争议，Smart Dispute 功能自动收集和提交证据。"
        },
        {
            id: "w7-3-q10",
            question: "争议申诉需要准备哪类证据？",
            options: ["只需要订单号", "只需要银行流水", "只需要身份证明", "交易记录、发货证明、客户通信、服务条款等"],
            answer: 3,
            rationale: "争议申诉需要准备充分的证据：交易记录、发货证明、客户通信、服务条款等。"
        },
        {
            id: "w7-3-q11",
            question: "退款失败的可能原因是什么？",
            options: ["银行账户已关闭", "网络延迟", "Stripe 系统维护", "退款金额太小"],
            answer: 0,
            rationale: "退款可能失败（如银行账户已关闭），需要监听 refund.failed 事件并通知客户选择其他退款方式。"
        },
        {
            id: "w7-3-q12",
            question: "争议响应的时效通常是多长？",
            options: ["24 小时", "7-21 天", "30-60 天", "无时间限制"],
            answer: 1,
            rationale: "争议有严格的响应时限（通常 7-21 天），超时未响应将自动败诉。"
        }
    ],
    "w7-4": [
        {
            id: "w7-4-q1",
            question: "Stripe Balance Transactions 代表什么？",
            options: ["账户中的资金流动", "用户余额", "信用额度", "预授权金额"],
            answer: 0,
            rationale: "Stripe Balance Transactions'represent funds moving through your Stripe account'——代表账户中的资金流动。"
        },
        {
            id: "w7-4-q2",
            question: "Balance Transactions 的交易类型不包括以下哪项？",
            options: ["charge", "refund", "login", "payout"],
            answer: 2,
            rationale: "Balance Transactions 记录 charge、refund、payout、fee 等交易类型，不记录 login（登录）行为。"
        },
        {
            id: "w7-4-q3",
            question: "支付对账的目的是什么？",
            options: ["增加销售额", "减少手续费", "优化用户体验", "将 Stripe 支付记录与银行入账记录进行匹配"],
            answer: 3,
            rationale: "支付对账是将 Stripe 支付记录与银行入账记录进行匹配的过程，确保每笔交易都能追溯。"
        },
        {
            id: "w7-4-q4",
            question: "Stripe 建议多久执行一次对账？",
            options: ["每日", "每月", "每季度", "每年"],
            answer: 1,
            rationale: "最佳实践建议定期执行对账（通常按月），及时发现和解决差异。"
        },
        {
            id: "w7-4-q5",
            question: "Stripe Bank Reconciliation 功能的作用是什么？",
            options: ["自动匹配 Stripe 提现与银行存款", "生成发票", "计算税费", "管理用户"],
            answer: 0,
            rationale: "Stripe Bank Reconciliation 可自动匹配提现与银行存款，'track all Stripe payouts and their bank deposit matching status'。"
        },
        {
            id: "w7-4-q6",
            question: "Stripe 提现到银行账户通常需要多长时间？",
            options: ["立即", "1-2 个工作日", "5-7 个工作日", "30 天"],
            answer: 1,
            rationale: "Stripe 提现到银行账户通常需要 1-2 个工作日，对账时需要考虑这个时间差。"
        },
        {
            id: "w7-4-q7",
            question: "2025 年 3 月起，Stripe Debits and Credits 报表有什么变化？",
            options: ["停止服务", "只支持 PDF 格式", "需要额外付费", "自动包含费用、网络成本和贡献金"],
            answer: 3,
            rationale: "2025 年 3 月起，journal entries 自动包含费用、网络成本和贡献金。"
        },
        {
            id: "w7-4-q8",
            question: "Stripe 提供的报表获取方式不包括以下哪项？",
            options: ["Dashboard 查看", "CSV 下载", "API 获取", "邮件自动发送"],
            answer: 3,
            rationale: "Stripe 报表支持 Dashboard 查看、CSV 下载、API 获取，但不会自动发送邮件。"
        },
        {
            id: "w7-4-q9",
            question: "对账发现差异的常见原因不包括以下哪项？",
            options: ["退款", "争议", "用户投诉", "手续费变化"],
            answer: 2,
            rationale: "对账差异常见原因包括退款、争议、手续费变化、提现失败等，用户投诉不会导致账务差异。"
        },
        {
            id: "w7-4-q10",
            question: "Revenue Recognition 报表和 Balance Summary 报表的主要区别是什么？",
            options: ["使用不同的时间戳", "格式不同", "支持的货币不同", "收费标准不同"],
            answer: 0,
            rationale: "Revenue Recognition 和 Balance Summary 使用不同的时间戳，可能导致对账不匹配。"
        },
        {
            id: "w7-4-q11",
            question: "跨境交易对账需要注意什么？",
            options: ["不需要特别注意", "需要统一货币单位，注意汇率转换", "只能用美元", "禁止对账"],
            answer: 1,
            rationale: "跨境交易涉及货币转换，Balance Transactions 会包含汇率和转换后金额，对账时需要统一货币单位。"
        },
        {
            id: "w7-4-q12",
            question: "Stripe Sigma 的主要功能是什么？",
            options: ["支付处理", "用户管理", "风控检测", "使用 SQL 对 Stripe 数据进行高级查询和分析"],
            answer: 3,
            rationale: "Stripe Sigma 允许使用 SQL 对 Stripe 数据进行高级查询和分析，创建自定义报表。"
        }
    ]
}
