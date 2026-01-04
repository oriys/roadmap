import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week16Guides: Record<string, LessonGuide> = {
    "w16-1": {
        lessonId: "w16-1",
        background: [
            "【Stripe Usage-Based】Stripe 支持基于使用量的计费，通过 Usage Records API 上报使用量。",
            "【计量指标设计】定义可计量的指标：API 调用、存储使用、计算时间、用户数等。",
            "【AWS 成本分配标签】AWS Cost Allocation Tags 支持按租户追踪资源成本。",
            "【实时计量】使用量应该实时或近实时记录，确保计费准确。",
        ],
        keyDifficulties: [
            "【指标选择】选择能反映价值的计量指标。",
            "【数据准确性】确保计量数据准确无遗漏。",
            "【实时性】高频使用场景的实时计量挑战。",
            "【聚合效率】大量计量数据的高效聚合。",
        ],
        handsOnPath: [
            "设计多租户计量指标体系",
            "实现 Stripe Usage Records 集成",
            "配置 AWS Cost Allocation Tags",
            "设计计量数据聚合管道",
        ],
        selfCheck: [
            "常见的 SaaS 计量指标有哪些？",
            "Stripe Usage Records 如何工作？",
            "如何确保计量数据的准确性？",
        ],
        extensions: [
            "研究 Lago 开源计量计费",
            "了解 Orb 的实时计量能力",
        ],
        sourceUrls: [
            "https://stripe.com/docs/billing/subscriptions/usage-based",
            "https://aws.amazon.com/blogs/apn/metering-and-billing-saas-offerings-on-aws/",
            "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
        ],
    },
    "w16-2": {
        lessonId: "w16-2",
        background: [
            "【订阅制】固定周期收费，简单可预测，适合大多数 SaaS。",
            "【按量计费】根据实际使用量收费，更公平但收入不稳定。",
            "【分层定价】不同功能层级不同价格，如 Free、Pro、Enterprise。",
            "【Stripe Billing】Stripe 提供完整的订阅管理、计费、发票功能。",
        ],
        keyDifficulties: [
            "【定价策略】定价过高流失客户，过低影响收入。",
            "【升降级】租户层级变更时的计费处理。",
            "【试用期】免费试用到付费的转化。",
            "【国际化】多币种、多税率的复杂性。",
        ],
        handsOnPath: [
            "设计多层级定价模型",
            "实现 Stripe 订阅管理",
            "配置升降级计费规则",
            "实现免费试用流程",
        ],
        selfCheck: [
            "订阅制和按量计费各有什么优劣？",
            "分层定价如何设计？",
            "升降级的计费逻辑是什么？",
        ],
        extensions: [
            "研究 OpenView 的 SaaS 定价报告",
            "了解 Paddle 的多币种支付",
        ],
        sourceUrls: [
            "https://www.priceintelligently.com/blog/saas-pricing-models",
            "https://stripe.com/docs/billing",
            "https://openviewpartners.com/blog/state-of-usage-based-pricing/",
        ],
    },
    "w16-3": {
        lessonId: "w16-3",
        background: [
            "【成本分摊】将共享资源成本按一定规则分配给各租户。",
            "【直接成本】可以直接归属到租户的成本（如专用资源）。",
            "【间接成本】多租户共享的成本（如平台运维、共享基础设施）。",
            "【Kubecost】Kubernetes 成本分析和优化工具，支持 Namespace 级别成本追踪。",
        ],
        keyDifficulties: [
            "【分摊公平】如何公平分配共享成本。",
            "【归属准确】准确追踪资源使用到租户。",
            "【成本可见】让租户了解自己的成本构成。",
            "【优化建议】基于成本数据给出优化建议。",
        ],
        handsOnPath: [
            "设计成本分摊模型",
            "配置 Kubecost 租户成本追踪",
            "实现租户成本报告",
            "设计成本优化建议引擎",
        ],
        selfCheck: [
            "直接成本和间接成本如何区分？",
            "共享成本的分摊方法有哪些？",
            "租户成本报告应该包含什么？",
        ],
        extensions: [
            "研究 FinOps 最佳实践",
            "了解 CloudHealth 成本管理",
        ],
        sourceUrls: [
            "https://aws.amazon.com/blogs/apn/calculating-cost-per-tenant-a-saas-lens-perspective/",
            "https://kubecost.com/",
            "https://www.finops.org/introduction/what-is-finops/",
        ],
    },
    "w16-4": {
        lessonId: "w16-4",
        background: [
            "【Stripe 订阅生命周期】创建订阅、周期计费、升降级、取消、恢复的完整流程。",
            "【发票生成】自动生成包含明细的发票，支持自定义模板。",
            "【支付网关】处理信用卡、银行转账等多种支付方式。",
            "【税务合规】Stripe Tax 自动计算和代收税款。",
        ],
        keyDifficulties: [
            "【支付失败】处理支付失败和重试。",
            "【退款处理】部分或全额退款的逻辑。",
            "【发票合规】满足不同地区的发票要求。",
            "【税务复杂性】全球化经营的多税区处理。",
        ],
        handsOnPath: [
            "实现 Stripe 订阅集成",
            "配置自动发票生成",
            "集成 Stripe Tax 自动税务",
            "实现支付失败重试逻辑",
        ],
        selfCheck: [
            "Stripe 订阅的生命周期事件有哪些？",
            "发票应该包含哪些信息？",
            "支付失败时应该如何处理？",
        ],
        extensions: [
            "研究 Chargebee 的订阅管理",
            "了解 Recurly 的收入优化",
        ],
        sourceUrls: [
            "https://stripe.com/docs/billing/subscriptions/build-subscription",
            "https://stripe.com/docs/invoicing",
            "https://stripe.com/docs/tax",
        ],
    },
}

export const week16Quizzes: Record<string, QuizQuestion[]> = {
    "w16-1": [
        { id: "w16-1-q1", question: "Stripe Usage Records 的作用是什么？", options: ["创建订阅", "上报租户的使用量用于计费", "发送发票", "处理退款"], answer: 1, rationale: "Usage Records 用于基于使用量的计费。" },
        { id: "w16-1-q2", question: "常见的 SaaS 计量指标有哪些？", options: ["只有用户数", "API 调用、存储、计算时间、用户数等", "只有存储", "只有时间"], answer: 1, rationale: "多种指标可以用于使用量计费。" },
        { id: "w16-1-q3", question: "AWS Cost Allocation Tags 的作用是什么？", options: ["资源创建", "按租户追踪和分配资源成本", "资源删除", "资源监控"], answer: 1, rationale: "Tags 支持成本归属到租户。" },
        { id: "w16-1-q4", question: "实时计量的挑战是什么？", options: ["太简单", "高频使用场景的数据准确性和性能", "太便宜", "太慢"], answer: 1, rationale: "高频场景需要高效的计量机制。" },
        { id: "w16-1-q5", question: "计量数据遗漏的后果是什么？", options: ["无后果", "收入损失或租户投诉", "性能提升", "成本降低"], answer: 1, rationale: "遗漏会导致计费不准确。" },
        { id: "w16-1-q6", question: "计量聚合的最佳实践是什么？", options: ["实时计算", "批量聚合减少计算开销", "不聚合", "手动计算"], answer: 1, rationale: "批量聚合更高效。" },
        { id: "w16-1-q7", question: "Lago 是什么类型的工具？", options: ["监控工具", "开源计量计费平台", "日志工具", "部署工具"], answer: 1, rationale: "Lago 是开源的使用量计费解决方案。" },
        { id: "w16-1-q8", question: "计量指标选择的原则是什么？", options: ["越多越好", "能反映客户价值和资源消耗", "越少越好", "固定指标"], answer: 1, rationale: "指标应该与价值和成本相关。" },
        { id: "w16-1-q9", question: "计量数据的存储要求是什么？", options: ["临时存储", "持久化存储支持审计和争议解决", "内存存储", "不存储"], answer: 1, rationale: "计量数据需要长期保留。" },
        { id: "w16-1-q10", question: "使用量计费的好处是什么？", options: ["收入稳定", "按实际使用收费更公平，降低使用门槛", "简单实现", "无好处"], answer: 1, rationale: "使用量计费对小客户更友好。" },
        { id: "w16-1-q11", question: "计量 API 的幂等性为什么重要？", options: ["不重要", "避免重复计量导致多收费", "提高性能", "减少存储"], answer: 1, rationale: "幂等性防止重复计量。" },
        { id: "w16-1-q12", question: "Orb 的特点是什么？", options: ["开源免费", "实时使用量计费和分析平台", "只支持 AWS", "只支持订阅"], answer: 1, rationale: "Orb 提供实时使用量计费能力。" },
    ],
    "w16-2": [
        { id: "w16-2-q1", question: "订阅制定价的优势是什么？", options: ["最灵活", "收入可预测，简单易理解", "最便宜", "最复杂"], answer: 1, rationale: "订阅制提供稳定的收入预期。" },
        { id: "w16-2-q2", question: "按量计费的优势是什么？", options: ["收入稳定", "按使用付费更公平，降低采用门槛", "最简单", "最稳定"], answer: 1, rationale: "按量计费让客户只付实际使用。" },
        { id: "w16-2-q3", question: "分层定价的典型层级有哪些？", options: ["只有一层", "Free、Pro、Enterprise", "只有两层", "无层级"], answer: 1, rationale: "多层级满足不同客户需求。" },
        { id: "w16-2-q4", question: "升级时的计费处理是什么？", options: ["不处理", "按比例计算剩余时间的差价", "全额收费", "免费升级"], answer: 1, rationale: "Pro-rata 计算是常见做法。" },
        { id: "w16-2-q5", question: "免费试用的目的是什么？", options: ["永久免费", "让客户体验价值后转化为付费", "减少收入", "增加成本"], answer: 1, rationale: "试用降低决策门槛促进转化。" },
        { id: "w16-2-q6", question: "Stripe Billing 提供什么功能？", options: ["只有支付", "订阅管理、计费、发票等完整功能", "只有发票", "只有退款"], answer: 1, rationale: "Stripe Billing 提供完整计费能力。" },
        { id: "w16-2-q7", question: "多币种定价的挑战是什么？", options: ["无挑战", "汇率变动、本地化定价、税务复杂性", "太简单", "自动处理"], answer: 1, rationale: "国际化定价有多种挑战。" },
        { id: "w16-2-q8", question: "定价过低的风险是什么？", options: ["客户太多", "收入不足以支撑业务和产品投入", "竞争加剧", "功能过多"], answer: 1, rationale: "定价需要支撑业务可持续发展。" },
        { id: "w16-2-q9", question: "混合定价模型是什么？", options: ["只有订阅", "订阅费 + 使用量超额费用", "只有使用量", "免费"], answer: 1, rationale: "混合模型结合两种定价优势。" },
        { id: "w16-2-q10", question: "降级时应该如何处理？", options: ["立即生效", "当前周期结束后生效，可能有退款", "不允许降级", "收取费用"], answer: 1, rationale: "降级通常在周期结束后生效。" },
        { id: "w16-2-q11", question: "试用期转付费的关键是什么？", options: ["延长试用", "在试用期内展示产品价值", "降低价格", "增加功能"], answer: 1, rationale: "价值展示是转化的关键。" },
        { id: "w16-2-q12", question: "OpenView 的定价报告关注什么？", options: ["技术架构", "SaaS 定价趋势和最佳实践", "代码质量", "安全合规"], answer: 1, rationale: "OpenView 研究 SaaS 定价策略。" },
    ],
    "w16-3": [
        { id: "w16-3-q1", question: "成本分摊的目的是什么？", options: ["增加成本", "将共享成本公平分配给各租户", "减少租户", "简化计费"], answer: 1, rationale: "分摊确保成本归属透明公平。" },
        { id: "w16-3-q2", question: "直接成本和间接成本的区别是什么？", options: ["相同", "直接成本可归属单一租户，间接成本需分摊", "间接更贵", "直接更贵"], answer: 1, rationale: "直接成本可以直接追踪到租户。" },
        { id: "w16-3-q3", question: "Kubecost 的作用是什么？", options: ["容器部署", "Kubernetes 成本分析和优化", "日志管理", "监控告警"], answer: 1, rationale: "Kubecost 追踪 K8s 资源成本。" },
        { id: "w16-3-q4", question: "共享成本分摊的方法有哪些？", options: ["只有平均", "按使用量、按用户数、按固定比例", "只有使用量", "不分摊"], answer: 1, rationale: "多种分摊方法可以选择。" },
        { id: "w16-3-q5", question: "FinOps 的核心理念是什么？", options: ["降低成本", "工程、财务、业务协作优化云成本", "增加预算", "外包管理"], answer: 1, rationale: "FinOps 强调跨团队协作管理云成本。" },
        { id: "w16-3-q6", question: "租户成本报告应该包含什么？", options: ["只有总额", "资源明细、趋势、与预算对比", "只有日期", "只有服务"], answer: 1, rationale: "报告应该提供详细的成本洞察。" },
        { id: "w16-3-q7", question: "成本优化建议的来源是什么？", options: ["随机", "分析资源使用和成本数据发现优化机会", "用户反馈", "竞品分析"], answer: 1, rationale: "数据分析是优化建议的基础。" },
        { id: "w16-3-q8", question: "成本可见性的价值是什么？", options: ["无价值", "帮助租户了解和优化自己的使用", "增加工作", "增加争议"], answer: 1, rationale: "透明度帮助租户做出明智决策。" },
        { id: "w16-3-q9", question: "CloudHealth 提供什么功能？", options: ["代码部署", "多云成本管理和优化", "监控告警", "日志管理"], answer: 1, rationale: "CloudHealth 是云成本管理平台。" },
        { id: "w16-3-q10", question: "成本归属准确性的挑战是什么？", options: ["太简单", "共享资源难以精确追踪到租户", "太便宜", "自动完成"], answer: 1, rationale: "共享资源的归属需要合理的分摊规则。" },
        { id: "w16-3-q11", question: "按 Namespace 追踪成本的好处是什么？", options: ["无好处", "与 Kubernetes 多租户模型对齐", "增加成本", "增加复杂度"], answer: 1, rationale: "Namespace 是自然的租户边界。" },
        { id: "w16-3-q12", question: "成本预算告警的作用是什么？", options: ["无作用", "在接近或超过预算时及时通知", "增加成本", "删除资源"], answer: 1, rationale: "预算告警帮助控制成本。" },
    ],
    "w16-4": [
        { id: "w16-4-q1", question: "Stripe 订阅生命周期包含什么？", options: ["只有创建", "创建、续费、升降级、取消、恢复", "只有取消", "只有续费"], answer: 1, rationale: "订阅有完整的生命周期状态。" },
        { id: "w16-4-q2", question: "自动发票生成的好处是什么？", options: ["增加工作", "减少手动操作，确保及时准确", "增加错误", "增加成本"], answer: 1, rationale: "自动化减少人工错误和工作量。" },
        { id: "w16-4-q3", question: "Stripe Tax 的作用是什么？", options: ["税务咨询", "自动计算和代收适用的税款", "税务申报", "税务审计"], answer: 1, rationale: "Stripe Tax 自动化税务处理。" },
        { id: "w16-4-q4", question: "支付失败应该如何处理？", options: ["立即取消", "重试支付并通知客户", "忽略", "手动处理"], answer: 1, rationale: "应该有自动重试和通知机制。" },
        { id: "w16-4-q5", question: "发票应该包含哪些信息？", options: ["只有金额", "客户信息、服务明细、金额、税款、日期", "只有日期", "只有服务"], answer: 1, rationale: "发票需要满足合规要求。" },
        { id: "w16-4-q6", question: "退款处理的考虑是什么？", options: ["全额退款", "根据政策可能全额或按比例退款", "不退款", "只退一半"], answer: 1, rationale: "退款需要有清晰的政策。" },
        { id: "w16-4-q7", question: "支付重试的策略是什么？", options: ["无限重试", "智能重试时间间隔，多次失败后暂停", "只重试一次", "不重试"], answer: 1, rationale: "智能重试提高成功率。" },
        { id: "w16-4-q8", question: "Webhook 在计费中的作用是什么？", options: ["发送邮件", "接收支付和订阅状态变更通知", "创建订阅", "生成发票"], answer: 1, rationale: "Webhook 用于同步计费状态。" },
        { id: "w16-4-q9", question: "多税区处理的挑战是什么？", options: ["无挑战", "不同地区税率和规则不同", "税率相同", "自动处理"], answer: 1, rationale: "全球化经营需要处理复杂税务。" },
        { id: "w16-4-q10", question: "Chargebee 的特点是什么？", options: ["只支持 Stripe", "订阅管理和收入运营平台", "只支持发票", "开源免费"], answer: 1, rationale: "Chargebee 提供完整的订阅管理。" },
        { id: "w16-4-q11", question: "订阅取消的处理是什么？", options: ["立即停止", "可以立即或周期结束后生效", "不能取消", "强制退款"], answer: 1, rationale: "取消策略需要明确定义。" },
        { id: "w16-4-q12", question: "Recurly 的优势是什么？", options: ["最便宜", "订阅恢复和收入优化能力", "开源", "最简单"], answer: 1, rationale: "Recurly 在降低流失方面有优势。" },
    ],
}
