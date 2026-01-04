import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week20Guides: Record<string, LessonGuide> = {
    "w20-1": {
        lessonId: "w20-1",
        background: [
            "【SaaS 成熟度模型】Microsoft 定义四个成熟度级别：定制、可配置、可扩展、弹性共享。",
            "【AWS SaaS Lens】AWS Well-Architected SaaS Lens 提供多租户架构评估框架。",
            "【架构模式】AWS 定义标准的 SaaS 架构模式，包括隔离策略和租户管理。",
            "【演进路径】从 Level 1 到 Level 4 的演进需要持续投入和架构改进。",
        ],
        keyDifficulties: [
            "【评估标准】如何客观评估当前成熟度级别。",
            "【演进规划】如何规划从当前到目标级别的路径。",
            "【投资回报】成熟度提升的成本和收益分析。",
            "【技术债务】历史架构决策带来的债务处理。",
        ],
        handsOnPath: [
            "评估当前 SaaS 成熟度级别",
            "使用 AWS SaaS Lens 进行架构评审",
            "制定成熟度提升路线图",
            "设计技术债务偿还计划",
        ],
        selfCheck: [
            "SaaS 成熟度模型的四个级别是什么？",
            "如何评估当前成熟度？",
            "成熟度提升的优先级如何确定？",
        ],
        extensions: [
            "研究 SaaS 行业标杆公司的架构",
            "了解 Gartner 的 SaaS 成熟度评估",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/archive/msdn-magazine/2006/september/architecture-strategies-for-catching-the-long-tail",
            "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/saas-lens.html",
            "https://aws.amazon.com/blogs/apn/defining-saas-architecture-patterns/",
        ],
    },
    "w20-2": {
        lessonId: "w20-2",
        background: [
            "【架构决策】Azure 多租户考虑因素涵盖关键架构决策点。",
            "【设计清单】AWS SaaS 构建考虑因素提供设计检查清单。",
            "【租户模型选择】隔离级别、数据模型、定价策略是核心决策。",
            "【权衡分析】每个决策都涉及成本、复杂度、安全性的权衡。",
        ],
        keyDifficulties: [
            "【决策互依】多个决策相互影响，需要整体考虑。",
            "【未来扩展】决策需要考虑未来的扩展性。",
            "【回退成本】某些决策一旦做出难以回退。",
            "【干系人沟通】技术决策需要业务干系人理解。",
        ],
        handsOnPath: [
            "创建多租户架构决策清单",
            "进行关键决策的权衡分析",
            "编写架构决策记录 (ADR)",
            "设计架构评审流程",
        ],
        selfCheck: [
            "多租户架构的关键决策点有哪些？",
            "如何进行架构权衡分析？",
            "ADR 应该包含什么内容？",
        ],
        extensions: [
            "研究 Architecture Decision Records 模板",
            "了解 C4 Model 架构文档",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/considerations",
            "https://aws.amazon.com/blogs/apn/building-saas-on-aws-multi-tenant-architecture-considerations/",
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/choose-tenancy-model",
        ],
    },
    "w20-3": {
        lessonId: "w20-3",
        background: [
            "【IAM 最佳实践】AWS SaaS 安全最佳实践包括动态 IAM 策略生成。",
            "【合规认证】SOC 2 是 SaaS 常见的安全合规认证。",
            "【安全清单】OWASP SaaS Top 10 定义 SaaS 特有的安全风险。",
            "【数据隔离验证】持续验证租户数据隔离的有效性。",
        ],
        keyDifficulties: [
            "【合规成本】获取和维护合规认证的成本。",
            "【安全与便捷】安全措施可能影响用户体验。",
            "【持续监控】安全是持续的过程而非一次性工作。",
            "【供应链安全】第三方依赖的安全管理。",
        ],
        handsOnPath: [
            "实施动态 IAM 策略",
            "准备 SOC 2 合规审计",
            "进行 OWASP Top 10 安全评估",
            "配置持续的安全监控",
        ],
        selfCheck: [
            "SaaS 安全的核心原则是什么？",
            "SOC 2 Type II 的要求是什么？",
            "如何验证租户隔离的有效性？",
        ],
        extensions: [
            "研究 ISO 27001 认证流程",
            "了解 CSA STAR 云安全认证",
        ],
        sourceUrls: [
            "https://aws.amazon.com/blogs/apn/isolating-saas-tenants-with-dynamically-generated-iam-policies/",
            "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome",
            "https://owasp.org/www-pdf-archive/OWASP_Top_10_for_SAAS.pdf",
        ],
    },
    "w20-4": {
        lessonId: "w20-4",
        background: [
            "【消除 Toil】Google SRE 强调识别和消除重复性运维工作。",
            "【SaaS 趋势】a16z 分析 SaaS 行业趋势，包括 Fintech 化和 AI 化。",
            "【AWS SaaS 架构】AWS SaaS 架构博客持续更新最佳实践。",
            "【持续改进】通过反馈循环不断优化多租户架构。",
        ],
        keyDifficulties: [
            "【优先级排序】众多改进项如何排序。",
            "【资源分配】改进工作与新功能开发的平衡。",
            "【度量效果】如何衡量改进的效果。",
            "【文化建设】建立持续改进的团队文化。",
        ],
        handsOnPath: [
            "识别和量化 Toil",
            "设计自动化减少 Toil",
            "建立改进效果度量体系",
            "创建持续改进路线图",
        ],
        selfCheck: [
            "什么是 Toil？如何识别？",
            "SaaS 的未来趋势有哪些？",
            "如何建立持续改进文化？",
        ],
        extensions: [
            "研究 Spotify 的工程文化",
            "了解 DevOps 成熟度模型",
        ],
        sourceUrls: [
            "https://sre.google/sre-book/eliminating-toil/",
            "https://a16z.com/2020/01/21/every-company-will-be-a-fintech-company/",
            "https://aws.amazon.com/blogs/apn/saas-architecture-on-aws/",
        ],
    },
}

export const week20Quizzes: Record<string, QuizQuestion[]> = {
    "w20-1": [
        { id: "w20-1-q1", question: "SaaS 成熟度模型的四个级别是什么？", options: ["1-2-3-4", "定制、可配置、可扩展、弹性共享", "A-B-C-D", "低中高最高"], answer: 1, rationale: "Microsoft 定义的四个成熟度级别。" },
        { id: "w20-1-q2", question: "Level 1 定制级别的特点是什么？", options: ["高度共享", "每个客户独立实例，定制化高", "完全自动化", "无隔离"], answer: 1, rationale: "Level 1 是传统的定制化部署模式。" },
        { id: "w20-1-q3", question: "Level 4 弹性共享的特点是什么？", options: ["独立部署", "多租户共享、自动扩缩、高效运营", "手动管理", "无弹性"], answer: 1, rationale: "Level 4 是最高效的多租户模式。" },
        { id: "w20-1-q4", question: "AWS SaaS Lens 的作用是什么？", options: ["代码审查", "评估和改进 SaaS 架构", "监控日志", "部署管理"], answer: 1, rationale: "SaaS Lens 提供架构评估框架。" },
        { id: "w20-1-q5", question: "成熟度评估应该包含什么？", options: ["只有技术", "技术、运营、商业多个维度", "只有商业", "只有运营"], answer: 1, rationale: "成熟度是多维度的评估。" },
        { id: "w20-1-q6", question: "技术债务的定义是什么？", options: ["资金债务", "因快速交付而积累的技术问题", "无债务", "业务债务"], answer: 1, rationale: "技术债务是为速度牺牲质量的积累。" },
        { id: "w20-1-q7", question: "成熟度提升的优先级如何确定？", options: ["随机", "基于业务价值和实施成本", "最难的优先", "最简单优先"], answer: 1, rationale: "应该优先处理高价值低成本的改进。" },
        { id: "w20-1-q8", question: "演进路径规划应该考虑什么？", options: ["只有技术", "当前状态、目标状态、资源约束", "只有成本", "只有时间"], answer: 1, rationale: "规划需要综合考虑多个因素。" },
        { id: "w20-1-q9", question: "Level 2 可配置的特点是什么？", options: ["无配置", "单一实例支持配置化定制", "完全共享", "独立实例"], answer: 1, rationale: "Level 2 通过配置而非代码实现定制。" },
        { id: "w20-1-q10", question: "Level 3 可扩展的特点是什么？", options: ["无扩展", "多租户共享但可以独立扩展", "完全隔离", "固定容量"], answer: 1, rationale: "Level 3 引入多租户和可扩展性。" },
        { id: "w20-1-q11", question: "Gartner 评估的价值是什么？", options: ["无价值", "提供行业标准的评估框架", "增加成本", "增加复杂度"], answer: 1, rationale: "Gartner 提供权威的评估参考。" },
        { id: "w20-1-q12", question: "技术债务偿还的策略是什么？", options: ["忽略", "持续分配时间逐步偿还", "一次性偿还", "继续积累"], answer: 1, rationale: "持续投入逐步偿还技术债务。" },
    ],
    "w20-2": [
        { id: "w20-2-q1", question: "多租户架构的核心决策有哪些？", options: ["只有数据库", "隔离级别、数据模型、定价策略", "只有定价", "只有隔离"], answer: 1, rationale: "多个关键决策相互关联。" },
        { id: "w20-2-q2", question: "ADR 的全称是什么？", options: ["自动部署", "Architecture Decision Record", "应用开发", "高级设计"], answer: 1, rationale: "架构决策记录用于文档化决策。" },
        { id: "w20-2-q3", question: "权衡分析应该考虑什么？", options: ["只有成本", "成本、复杂度、安全性、扩展性", "只有安全", "只有性能"], answer: 1, rationale: "多个维度的权衡分析。" },
        { id: "w20-2-q4", question: "决策互依性的含义是什么？", options: ["独立决策", "一个决策会影响其他决策", "无关联", "自动决策"], answer: 1, rationale: "架构决策相互影响。" },
        { id: "w20-2-q5", question: "ADR 应该包含什么内容？", options: ["只有结论", "上下文、决策、后果、备选方案", "只有日期", "只有作者"], answer: 1, rationale: "完整的 ADR 包含决策的完整上下文。" },
        { id: "w20-2-q6", question: "回退成本高的决策应该如何处理？", options: ["快速决策", "谨慎评估，充分讨论后决策", "推迟", "不决策"], answer: 1, rationale: "高风险决策需要更多分析。" },
        { id: "w20-2-q7", question: "C4 Model 的四个层级是什么？", options: ["只有一层", "Context、Container、Component、Code", "只有两层", "A-B-C-D"], answer: 1, rationale: "C4 从高到低四个层级描述架构。" },
        { id: "w20-2-q8", question: "干系人沟通的要点是什么？", options: ["技术细节", "用业务语言解释技术决策的影响", "不沟通", "只发邮件"], answer: 1, rationale: "需要让非技术人员理解决策。" },
        { id: "w20-2-q9", question: "架构评审的频率应该是什么？", options: ["只在上线前", "定期进行，重大变更时必须", "从不", "每天"], answer: 1, rationale: "架构评审应该持续进行。" },
        { id: "w20-2-q10", question: "租户模型选择的考虑因素是什么？", options: ["只有成本", "安全要求、成本、运维复杂度", "只有安全", "只有简单"], answer: 1, rationale: "多个因素影响租户模型选择。" },
        { id: "w20-2-q11", question: "设计清单的作用是什么？", options: ["增加工作", "确保关键考虑点不被遗漏", "减少质量", "增加成本"], answer: 1, rationale: "清单帮助系统化思考。" },
        { id: "w20-2-q12", question: "架构决策的文档化为什么重要？", options: ["不重要", "便于未来理解和演进", "增加工作", "浪费时间"], answer: 1, rationale: "文档支持知识传承和演进。" },
    ],
    "w20-3": [
        { id: "w20-3-q1", question: "动态 IAM 策略的优势是什么？", options: ["静态策略", "根据租户上下文生成精确权限", "固定权限", "无权限"], answer: 1, rationale: "动态策略提供更精确的权限控制。" },
        { id: "w20-3-q2", question: "SOC 2 的五个信任原则是什么？", options: ["只有安全", "安全、可用性、处理完整性、保密性、隐私", "只有隐私", "只有可用性"], answer: 1, rationale: "SOC 2 覆盖五个信任服务原则。" },
        { id: "w20-3-q3", question: "OWASP Top 10 for SaaS 关注什么？", options: ["Web 安全", "SaaS 特有的安全风险", "数据库安全", "网络安全"], answer: 1, rationale: "OWASP SaaS Top 10 针对 SaaS 场景。" },
        { id: "w20-3-q4", question: "持续安全监控包含什么？", options: ["只有日志", "漏洞扫描、访问监控、异常检测", "只有扫描", "只有审计"], answer: 1, rationale: "安全监控需要多种手段。" },
        { id: "w20-3-q5", question: "合规认证的成本包含什么？", options: ["只有审计费", "准备、审计、持续维护、工具", "免费", "固定费用"], answer: 1, rationale: "合规是持续的投入。" },
        { id: "w20-3-q6", question: "SOC 2 Type I 和 Type II 的区别是什么？", options: ["相同", "Type I 是时间点，Type II 是时间段", "Type I 更严", "Type II 更简"], answer: 1, rationale: "Type II 验证更长时间的控制有效性。" },
        { id: "w20-3-q7", question: "供应链安全的关注点是什么？", options: ["无关注", "第三方依赖和服务的安全", "只有内部", "只有代码"], answer: 1, rationale: "第三方组件可能引入风险。" },
        { id: "w20-3-q8", question: "ISO 27001 是什么认证？", options: ["财务认证", "信息安全管理体系认证", "质量认证", "环境认证"], answer: 1, rationale: "ISO 27001 是国际安全管理标准。" },
        { id: "w20-3-q9", question: "CSA STAR 的特点是什么？", options: ["只有云安全", "专门针对云服务的安全认证", "只有本地", "只有网络"], answer: 1, rationale: "STAR 是云安全联盟的认证。" },
        { id: "w20-3-q10", question: "数据隔离验证应该如何进行？", options: ["只在上线前", "持续的自动化测试和渗透测试", "手动测试", "不验证"], answer: 1, rationale: "隔离验证应该持续进行。" },
        { id: "w20-3-q11", question: "安全与用户体验如何平衡？", options: ["只要安全", "在保证安全的前提下优化用户体验", "只要体验", "不平衡"], answer: 1, rationale: "需要在两者间找到平衡。" },
        { id: "w20-3-q12", question: "安全事件响应的关键是什么？", options: ["忽略", "快速检测、有效响应、透明沟通", "隐瞒", "延迟"], answer: 1, rationale: "快速有效的响应减少影响。" },
    ],
    "w20-4": [
        { id: "w20-4-q1", question: "Toil 的定义是什么？", options: ["创新工作", "重复性、手动的运维工作", "战略规划", "产品设计"], answer: 1, rationale: "Toil 是低价值的重复工作。" },
        { id: "w20-4-q2", question: "消除 Toil 的方法是什么？", options: ["增加人员", "自动化和流程改进", "忽略", "外包"], answer: 1, rationale: "自动化是消除 Toil 的主要手段。" },
        { id: "w20-4-q3", question: "SaaS 的 Fintech 化趋势指什么？", options: ["金融危机", "SaaS 产品内嵌金融服务能力", "只做金融", "放弃金融"], answer: 1, rationale: "越来越多 SaaS 集成金融能力。" },
        { id: "w20-4-q4", question: "持续改进的核心是什么？", options: ["一次性", "建立反馈循环，不断迭代优化", "完美主义", "不改进"], answer: 1, rationale: "持续改进是迭代的过程。" },
        { id: "w20-4-q5", question: "Toil 的危害是什么？", options: ["提高效率", "占用时间、降低士气、阻碍创新", "增加价值", "提升技能"], answer: 1, rationale: "Toil 消耗资源却不产生价值。" },
        { id: "w20-4-q6", question: "改进效果如何度量？", options: ["不度量", "通过指标和 KPI 量化改进效果", "感觉", "猜测"], answer: 1, rationale: "量化指标支持改进决策。" },
        { id: "w20-4-q7", question: "资源分配的权衡是什么？", options: ["全部改进", "在改进和新功能开发间平衡", "全部功能", "不开发"], answer: 1, rationale: "需要平衡短期和长期投入。" },
        { id: "w20-4-q8", question: "团队改进文化的特点是什么？", options: ["责备文化", "鼓励尝试、接受失败、持续学习", "完美主义", "不变化"], answer: 1, rationale: "健康的文化支持持续改进。" },
        { id: "w20-4-q9", question: "Spotify 工程文化的特点是什么？", options: ["严格控制", "自治团队、实验精神、快速迭代", "瀑布模型", "不创新"], answer: 1, rationale: "Spotify 以工程文化著称。" },
        { id: "w20-4-q10", question: "DevOps 成熟度的关键指标是什么？", options: ["代码行数", "部署频率、变更失败率、恢复时间", "团队规模", "工具数量"], answer: 1, rationale: "DORA 指标衡量 DevOps 成熟度。" },
        { id: "w20-4-q11", question: "AI 在 SaaS 中的应用趋势是什么？", options: ["不使用 AI", "智能化功能、自动化运营、个性化体验", "完全替代", "只用 AI"], answer: 1, rationale: "AI 正在改变 SaaS 产品和运营。" },
        { id: "w20-4-q12", question: "持续改进路线图应该包含什么？", options: ["只有目标", "目标、优先级、里程碑、度量指标", "只有时间", "只有成本"], answer: 1, rationale: "完整的路线图指导改进工作。" },
    ],
}
