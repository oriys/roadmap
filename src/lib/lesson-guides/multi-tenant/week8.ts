import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "w8-1": {
        lessonId: "w8-1",
        background: [
            "【GDPR】欧盟通用数据保护条例，规定个人数据处理的法律要求。",
            "【数据主体权利】包括访问权、更正权、删除权（被遗忘权）、数据可携带权。",
            "【数据处理协议】SaaS 作为数据处理者需要与租户（数据控制者）签订 DPA。",
            "【子处理者】SaaS 使用的第三方服务也需要合规，需要披露给租户。",
        ],
        keyDifficulties: [
            "【被遗忘权】在多租户系统中实现完整的数据删除非常复杂。",
            "【数据主体请求】需要能够识别和处理特定用户的数据请求。",
            "【数据可携带】需要以机器可读格式导出用户数据。",
            "【审计追踪】需要记录数据处理活动以证明合规。",
        ],
        handsOnPath: [
            "设计 GDPR 数据主体请求处理流程",
            "实现数据删除 API（支持被遗忘权）",
            "创建数据导出功能（数据可携带权）",
            "配置数据处理活动记录",
        ],
        selfCheck: [
            "GDPR 定义的数据主体权利有哪些？",
            "SaaS 提供商作为数据处理者有什么责任？",
            "如何在多租户系统中实现被遗忘权？",
        ],
        extensions: [
            "研究 CCPA（加州消费者隐私法案）的要求",
            "了解数据保护影响评估（DPIA）",
        ],
        sourceUrls: [
            "https://gdpr.eu/what-is-gdpr/",
            "https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/accountability-and-governance/contracts/",
            "https://gdpr-info.eu/art-17-gdpr/",
        ],
    },
    "w8-2": {
        lessonId: "w8-2",
        background: [
            "【数据本地化】某些国家要求数据存储在本地，不能跨境传输。",
            "【数据驻留】数据必须物理存储在指定地理位置。",
            "【跨境传输】GDPR 限制向非充分保护国家传输数据。",
            "【区域部署】为不同区域部署独立的数据存储和处理能力。",
        ],
        keyDifficulties: [
            "【区域路由】需要将租户请求路由到正确的区域。",
            "【数据隔离】确保数据不会跨区域流动。",
            "【功能一致】各区域功能应保持一致。",
            "【成本增加】多区域部署增加基础设施成本。",
        ],
        handsOnPath: [
            "设计多区域数据存储架构",
            "实现租户区域选择功能",
            "配置区域数据隔离策略",
            "设计跨区域数据传输合规审批流程",
        ],
        selfCheck: [
            "数据本地化的主要驱动因素是什么？",
            "如何实现租户数据的区域隔离？",
            "GDPR 对跨境数据传输有什么要求？",
        ],
        extensions: [
            "研究标准合同条款（SCC）在跨境传输中的应用",
            "了解中国数据出境安全评估要求",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/multi-region",
            "https://aws.amazon.com/blogs/security/how-to-address-data-residency-with-aws/",
            "https://www.cloudflare.com/learning/privacy/cross-border-data-transfer/",
        ],
    },
    "w8-3": {
        lessonId: "w8-3",
        background: [
            "【隔离验证】需要持续验证租户数据隔离的有效性。",
            "【自动化测试】编写测试用例验证一个租户无法访问另一个租户的数据。",
            "【渗透测试】专业安全测试，尝试突破租户隔离边界。",
            "【合规审计】第三方审计验证多租户安全控制的有效性。",
        ],
        keyDifficulties: [
            "【测试覆盖】确保测试覆盖所有数据访问路径。",
            "【持续验证】隔离验证应该是持续的，不仅仅是一次性的。",
            "【边界识别】识别所有可能的租户边界突破点。",
            "【误报处理】区分真正的漏洞和测试误报。",
        ],
        handsOnPath: [
            "设计租户隔离测试框架",
            "实现自动化跨租户访问测试",
            "配置持续的隔离监控",
            "规划渗透测试范围和方法",
        ],
        selfCheck: [
            "租户隔离测试应该覆盖哪些场景？",
            "如何实现持续的隔离验证？",
            "渗透测试和自动化测试有什么区别？",
        ],
        extensions: [
            "研究 OWASP 测试指南的多租户章节",
            "了解 Bug Bounty 项目在多租户安全中的应用",
        ],
        sourceUrls: [
            "https://aws.amazon.com/blogs/apn/defining-tenant-isolation-strategies-for-saas-workloads/",
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/tenant-isolation",
            "https://owasp.org/www-project-web-security-testing-guide/",
        ],
    },
    "w8-4": {
        lessonId: "w8-4",
        background: [
            "【审计日志】记录数据访问和操作的日志，支持合规审计。",
            "【SOC 2】服务组织控制报告，验证 SaaS 安全控制。",
            "【ISO 27001】信息安全管理体系标准。",
            "【合规报告】为租户生成合规报告，展示数据处理活动。",
        ],
        keyDifficulties: [
            "【日志完整性】确保审计日志不可篡改。",
            "【敏感信息】日志中可能包含敏感数据，需要脱敏。",
            "【存储成本】长期保留审计日志的成本。",
            "【查询效率】海量日志的查询和分析效率。",
        ],
        handsOnPath: [
            "设计多租户审计日志架构",
            "实现不可变的审计日志存储",
            "创建租户合规报告生成功能",
            "配置日志保留策略",
        ],
        selfCheck: [
            "SOC 2 报告包含哪些内容？",
            "如何确保审计日志的完整性？",
            "多租户审计日志应该记录哪些信息？",
        ],
        extensions: [
            "研究 HIPAA 对医疗数据的要求",
            "了解 PCI DSS 对支付数据的要求",
        ],
        sourceUrls: [
            "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html",
            "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome",
            "https://www.iso.org/isoiec-27001-information-security.html",
        ],
    },
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "w8-1": [
        { id: "w8-1-q1", question: "GDPR 的全称是什么？", options: ["General Data Privacy Regulation", "General Data Protection Regulation", "Global Data Protection Rules", "General Digital Privacy Rules"], answer: 1, rationale: "GDPR 全称 General Data Protection Regulation。" },
        { id: "w8-1-q2", question: "被遗忘权（Right to Erasure）要求什么？", options: ["备份数据", "根据请求删除个人数据", "加密数据", "分享数据"], answer: 1, rationale: "数据主体有权要求删除其个人数据。" },
        { id: "w8-1-q3", question: "SaaS 提供商在 GDPR 中通常是什么角色？", options: ["数据主体", "数据处理者", "数据控制者", "监管机构"], answer: 1, rationale: "SaaS 通常作为数据处理者，按租户（控制者）指示处理数据。" },
        { id: "w8-1-q4", question: "DPA 是什么？", options: ["数据隐私协议", "数据处理协议", "数据保护机构", "数据处理应用"], answer: 1, rationale: "Data Processing Agreement 是处理者与控制者的合同。" },
        { id: "w8-1-q5", question: "数据可携带权要求什么格式？", options: ["任意格式", "机器可读的结构化格式", "PDF", "纸质"], answer: 1, rationale: "GDPR 要求以机器可读格式提供数据。" },
        { id: "w8-1-q6", question: "什么是子处理者？", options: ["数据主体", "SaaS 使用的第三方服务提供商", "监管机构", "租户员工"], answer: 1, rationale: "子处理者是 SaaS 委托处理数据的第三方。" },
        { id: "w8-1-q7", question: "多租户系统实现被遗忘权的挑战是什么？", options: ["太简单", "数据分散在多处，完整删除复杂", "不需要实现", "自动完成"], answer: 1, rationale: "数据可能在数据库、缓存、备份、日志等多处存在。" },
        { id: "w8-1-q8", question: "数据主体访问请求（DSAR）的响应时限是多少？", options: ["24小时", "30天", "90天", "1年"], answer: 1, rationale: "GDPR 要求在 30 天内响应 DSAR。" },
        { id: "w8-1-q9", question: "GDPR 适用于哪些组织？", options: ["只有欧盟公司", "处理欧盟居民数据的所有组织", "只有大公司", "只有政府"], answer: 1, rationale: "GDPR 适用于所有处理欧盟居民数据的组织。" },
        { id: "w8-1-q10", question: "数据处理的合法基础包括什么？", options: ["只有同意", "同意、合同履行、法律义务等多种基础", "只有合同", "不需要基础"], answer: 1, rationale: "GDPR 规定了六种合法处理基础。" },
        { id: "w8-1-q11", question: "CCPA 与 GDPR 的主要区别是什么？", options: ["完全相同", "CCPA 侧重消费者销售数据的选择退出权", "CCPA 更严格", "CCPA 不涉及隐私"], answer: 1, rationale: "CCPA 强调消费者对数据销售的控制权。" },
        { id: "w8-1-q12", question: "DPIA 是什么？", options: ["数据处理指令", "数据保护影响评估", "数据隐私协议", "数据处理应用"], answer: 1, rationale: "Data Protection Impact Assessment 评估处理风险。" },
    ],
    "w8-2": [
        { id: "w8-2-q1", question: "数据本地化的主要驱动因素是什么？", options: ["性能优化", "国家法律和数据主权要求", "降低成本", "简化架构"], answer: 1, rationale: "各国数据保护法规要求数据存储在本地。" },
        { id: "w8-2-q2", question: "GDPR 对跨境数据传输有什么要求？", options: ["无限制", "只能传输到充分保护的国家或有其他保障措施", "禁止传输", "只能传输到欧盟"], answer: 1, rationale: "GDPR 限制向无充分保护的国家传输数据。" },
        { id: "w8-2-q3", question: "多区域部署的主要挑战是什么？", options: ["太简单", "成本增加、功能一致性、运维复杂", "性能更好", "更安全"], answer: 1, rationale: "多区域增加成本和运维复杂度。" },
        { id: "w8-2-q4", question: "租户区域选择功能应该在什么时候配置？", options: ["任意时候", "租户入驻时或有专门的迁移流程", "不需要配置", "自动选择"], answer: 1, rationale: "区域通常在入驻时选择，变更需要数据迁移。" },
        { id: "w8-2-q5", question: "标准合同条款（SCC）的作用是什么？", options: ["加密数据", "为跨境数据传输提供法律保障", "存储数据", "删除数据"], answer: 1, rationale: "SCC 是欧盟批准的跨境传输合同条款。" },
        { id: "w8-2-q6", question: "中国数据出境有什么要求？", options: ["无要求", "需要安全评估或其他合规措施", "禁止出境", "自由出境"], answer: 1, rationale: "中国对重要数据出境有安全评估要求。" },
        { id: "w8-2-q7", question: "区域数据隔离如何实现？", options: ["不需要隔离", "独立数据库、网络隔离、访问控制", "共享所有数据", "只隔离日志"], answer: 1, rationale: "需要多层措施确保数据不跨区域流动。" },
        { id: "w8-2-q8", question: "Cloudflare 如何帮助数据本地化？", options: ["不支持", "提供区域数据处理选项", "只加速", "只安全"], answer: 1, rationale: "Cloudflare 支持配置数据处理的地理位置。" },
        { id: "w8-2-q9", question: "多区域部署对延迟有什么影响？", options: ["增加延迟", "就近访问降低延迟", "无影响", "延迟固定"], answer: 1, rationale: "用户可以访问最近的区域，降低延迟。" },
        { id: "w8-2-q10", question: "AWS Region 选择应该考虑什么？", options: ["只考虑价格", "合规要求、延迟、服务可用性", "只考虑性能", "随机选择"], answer: 1, rationale: "需要综合考虑合规、性能和服务可用性。" },
        { id: "w8-2-q11", question: "跨区域数据同步的挑战是什么？", options: ["太简单", "延迟、一致性、带宽成本", "无挑战", "自动解决"], answer: 1, rationale: "跨区域同步面临网络延迟和一致性问题。" },
        { id: "w8-2-q12", question: "欧盟-美国数据传输目前的合规框架是什么？", options: ["Safe Harbor", "EU-US Data Privacy Framework", "Privacy Shield", "无框架"], answer: 1, rationale: "当前生效的是 EU-US Data Privacy Framework。" },
    ],
    "w8-3": [
        { id: "w8-3-q1", question: "租户隔离验证的目的是什么？", options: ["提高性能", "确保一个租户无法访问另一个租户的数据", "降低成本", "简化架构"], answer: 1, rationale: "隔离验证确保租户数据安全边界有效。" },
        { id: "w8-3-q2", question: "自动化隔离测试应该覆盖什么？", options: ["只有 API", "所有数据访问路径：API、数据库、缓存等", "只有数据库", "只有前端"], answer: 1, rationale: "需要覆盖所有可能的数据访问点。" },
        { id: "w8-3-q3", question: "渗透测试与自动化测试的区别是什么？", options: ["完全相同", "渗透测试由安全专家手动进行，更深入", "渗透测试更简单", "自动化更深入"], answer: 1, rationale: "渗透测试是专业的人工安全测试。" },
        { id: "w8-3-q4", question: "持续验证的意义是什么？", options: ["浪费资源", "随着系统变化持续发现潜在漏洞", "一次性就够", "不需要验证"], answer: 1, rationale: "系统持续变化，隔离验证也需要持续进行。" },
        { id: "w8-3-q5", question: "OWASP 是什么组织？", options: ["商业公司", "开放的 Web 应用安全项目", "政府机构", "学术机构"], answer: 1, rationale: "OWASP 是专注于 Web 安全的开放社区。" },
        { id: "w8-3-q6", question: "Bug Bounty 项目的作用是什么？", options: ["奖励 Bug", "通过奖励激励安全研究者发现漏洞", "创造 Bug", "忽略 Bug"], answer: 1, rationale: "Bug Bounty 利用外部研究者增强安全性。" },
        { id: "w8-3-q7", question: "隔离测试的一个常见场景是什么？", options: ["测试性能", "用租户 A 的身份尝试访问租户 B 的资源", "测试功能", "测试 UI"], answer: 1, rationale: "跨租户访问尝试是核心测试场景。" },
        { id: "w8-3-q8", question: "合规审计的目的是什么？", options: ["找茬", "第三方验证安全控制的有效性", "增加成本", "减少功能"], answer: 1, rationale: "审计提供独立的安全验证。" },
        { id: "w8-3-q9", question: "如何处理隔离测试中的误报？", options: ["全部忽略", "分析验证，区分真正漏洞和误报", "全部修复", "停止测试"], answer: 1, rationale: "需要人工分析确认是否是真正的安全问题。" },
        { id: "w8-3-q10", question: "AWS 建议的租户隔离测试方法是什么？", options: ["不测试", "创建测试租户，验证隔离策略", "只测试生产", "手动测试"], answer: 1, rationale: "使用专门的测试租户验证隔离有效性。" },
        { id: "w8-3-q11", question: "隔离边界突破点可能在哪里？", options: ["只在数据库", "API、数据库、缓存、文件存储、消息队列等", "只在 API", "只在前端"], answer: 1, rationale: "任何数据存储和传输点都是潜在的边界。" },
        { id: "w8-3-q12", question: "多租户安全测试应该多久进行一次？", options: ["只在上线前", "持续进行，尤其是重大变更后", "每年一次", "不需要"], answer: 1, rationale: "应该持续测试，特别是在代码变更后。" },
    ],
    "w8-4": [
        { id: "w8-4-q1", question: "SOC 2 报告验证什么？", options: ["财务状况", "服务组织的安全控制有效性", "产品功能", "市场份额"], answer: 1, rationale: "SOC 2 验证安全、可用性、处理完整性等控制。" },
        { id: "w8-4-q2", question: "审计日志应该记录什么？", options: ["只记录错误", "谁在何时访问了什么数据做了什么操作", "只记录成功", "不需要记录"], answer: 1, rationale: "完整的审计日志包含用户、时间、操作、数据。" },
        { id: "w8-4-q3", question: "如何确保审计日志不可篡改？", options: ["不需要", "追加写入、签名、独立存储", "加密即可", "压缩即可"], answer: 1, rationale: "多种机制确保日志完整性。" },
        { id: "w8-4-q4", question: "ISO 27001 是什么？", options: ["财务标准", "信息安全管理体系标准", "质量标准", "环境标准"], answer: 1, rationale: "ISO 27001 是国际信息安全管理标准。" },
        { id: "w8-4-q5", question: "审计日志中的敏感信息如何处理？", options: ["直接记录", "脱敏处理", "不记录任何信息", "加密日志"], answer: 1, rationale: "敏感信息应该脱敏后记录。" },
        { id: "w8-4-q6", question: "SOC 2 Type II 与 Type I 的区别是什么？", options: ["无区别", "Type II 覆盖一段时间的控制运行效果", "Type I 更详细", "Type II 更简单"], answer: 1, rationale: "Type II 评估控制在一段时间内的实际运行。" },
        { id: "w8-4-q7", question: "日志保留策略应该考虑什么？", options: ["只考虑成本", "合规要求、存储成本、查询需求", "保留越长越好", "不保留"], answer: 1, rationale: "需要平衡合规要求和成本。" },
        { id: "w8-4-q8", question: "HIPAA 适用于什么行业？", options: ["金融", "医疗健康", "零售", "制造"], answer: 1, rationale: "HIPAA 规范医疗数据的隐私和安全。" },
        { id: "w8-4-q9", question: "PCI DSS 适用于什么数据？", options: ["个人数据", "支付卡数据", "医疗数据", "政府数据"], answer: 1, rationale: "PCI DSS 保护信用卡等支付数据。" },
        { id: "w8-4-q10", question: "多租户合规报告应该包含什么？", options: ["只有错误", "租户的数据处理活动、安全控制、合规状态", "只有成本", "只有性能"], answer: 1, rationale: "报告应展示租户相关的合规信息。" },
        { id: "w8-4-q11", question: "OWASP Logging Cheat Sheet 建议记录什么？", options: ["一切", "安全相关事件、访问尝试、数据变更", "只有错误", "不记录"], answer: 1, rationale: "应聚焦于安全和审计相关的事件。" },
        { id: "w8-4-q12", question: "海量审计日志的查询效率如何保证？", options: ["全表扫描", "索引、分区、专用日志分析系统", "减少日志", "不查询"], answer: 1, rationale: "需要专门的日志架构支持高效查询。" },
    ],
}
