import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week19Guides: Record<string, LessonGuide> = {
    "w19-1": {
        lessonId: "w19-1",
        background: [
            "【租户入驻】Azure 租户生命周期指南涵盖从入驻到下线的完整流程。",
            "【自动化 Provisioning】AWS Serverless SaaS 提供自动化租户资源创建的参考实现。",
            "【IaC】Terraform 支持基础设施即代码，可以模板化租户资源创建。",
            "【欢迎流程】新租户入驻应该包含引导和初始配置。",
        ],
        keyDifficulties: [
            "【资源创建时间】资源创建可能需要较长时间。",
            "【失败处理】创建过程中失败的回滚。",
            "【资源配额】确保有足够资源支持新租户。",
            "【安全初始化】初始凭证和权限的安全处理。",
        ],
        handsOnPath: [
            "设计租户入驻自动化流程",
            "实现 Terraform 租户资源模板",
            "配置入驻失败回滚机制",
            "设计租户欢迎和引导流程",
        ],
        selfCheck: [
            "租户入驻应该包含哪些步骤？",
            "如何处理入驻过程中的失败？",
            "IaC 在租户管理中的应用是什么？",
        ],
        extensions: [
            "研究 Pulumi 的编程式 IaC",
            "了解 AWS CDK 的租户管理",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/tenant-lifecycle",
            "https://aws.amazon.com/blogs/apn/building-a-multi-tenant-saas-solution-using-aws-serverless-services/",
            "https://www.terraform.io/use-cases/multi-cloud-deployment",
        ],
    },
    "w19-2": {
        lessonId: "w19-2",
        background: [
            "【数据迁移】AWS 数据库迁移博客涵盖多租户数据迁移的策略和工具。",
            "【ETL 模式】Azure ETL 指南定义提取、转换、加载的最佳实践。",
            "【AWS DMS】Database Migration Service 支持异构数据库迁移。",
            "【迁移验证】迁移后需要验证数据完整性和一致性。",
        ],
        keyDifficulties: [
            "【数据格式】不同系统间的数据格式转换。",
            "【数据量】大量数据迁移的时间和资源。",
            "【业务连续性】迁移期间保持业务运行。",
            "【数据验证】确保迁移数据的完整和正确。",
        ],
        handsOnPath: [
            "设计租户数据导出 API",
            "实现数据转换管道",
            "配置 AWS DMS 迁移任务",
            "设计迁移验证检查清单",
        ],
        selfCheck: [
            "数据迁移的关键步骤是什么？",
            "如何验证迁移数据的正确性？",
            "大规模数据迁移如何减少停机？",
        ],
        extensions: [
            "研究 Airbyte 数据集成",
            "了解 Fivetran 的 ELT 模式",
        ],
        sourceUrls: [
            "https://aws.amazon.com/blogs/database/migrating-a-multi-tenant-database/",
            "https://docs.microsoft.com/en-us/azure/architecture/data-guide/relational-data/etl",
            "https://aws.amazon.com/dms/",
        ],
    },
    "w19-3": {
        lessonId: "w19-3",
        background: [
            "【租户下线】Azure 租户下线指南涵盖数据归档、资源释放、合规删除。",
            "【数据归档】AWS S3 归档存储适合长期保留历史数据。",
            "【GDPR 删除】被遗忘权要求能够完整删除租户的个人数据。",
            "【审计记录】下线过程需要记录以满足合规要求。",
        ],
        keyDifficulties: [
            "【数据完整删除】确保删除所有相关数据。",
            "【备份数据】备份中的数据也需要处理。",
            "【归档格式】选择长期可读的归档格式。",
            "【法律保留】某些数据可能需要法律保留。",
        ],
        handsOnPath: [
            "设计租户下线流程",
            "实现数据归档 API",
            "配置 S3 归档存储策略",
            "实现 GDPR 数据删除",
        ],
        selfCheck: [
            "租户下线应该包含哪些步骤？",
            "数据归档的注意事项是什么？",
            "如何满足被遗忘权要求？",
        ],
        extensions: [
            "研究数据保留法规要求",
            "了解 AWS Backup 的保留策略",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/tenant-lifecycle#offboarding",
            "https://aws.amazon.com/blogs/storage/archiving-data-for-compliance-in-amazon-s3/",
            "https://gdpr-info.eu/art-17-gdpr/",
        ],
    },
    "w19-4": {
        lessonId: "w19-4",
        background: [
            "【层级迁移】Azure 租户升降级指南涵盖功能和配额的变更。",
            "【Feature Rollout】LaunchDarkly 支持租户级别的功能发布控制。",
            "【配额管理】Google Cloud Quota 管理支持动态调整租户配额。",
            "【无缝切换】升降级应该尽量减少对租户的影响。",
        ],
        keyDifficulties: [
            "【功能降级】降级时如何处理已使用的高级功能。",
            "【计费调整】升降级的计费时间点计算。",
            "【数据处理】降级时超出限额的数据处理。",
            "【用户通知】提前通知租户即将生效的变更。",
        ],
        handsOnPath: [
            "实现租户升级流程",
            "配置降级功能限制",
            "设计计费调整逻辑",
            "实现升降级通知系统",
        ],
        selfCheck: [
            "升级和降级的差异是什么？",
            "降级时的功能处理策略是什么？",
            "计费调整如何计算？",
        ],
        extensions: [
            "研究 Stripe 升降级处理",
            "了解 Chargebee 的 Proration",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/tenant-lifecycle#upgrading-and-downgrading",
            "https://launchdarkly.com/blog/feature-flags-for-saas/",
            "https://cloud.google.com/docs/quota",
        ],
    },
}

export const week19Quizzes: Record<string, QuizQuestion[]> = {
    "w19-1": [
        { id: "w19-1-q1", question: "租户入驻流程应该包含什么？", options: ["只有账号创建", "资源创建、配置初始化、欢迎引导", "只有登录", "只有付款"], answer: 1, rationale: "入驻是完整的流程不只是账号创建。" },
        { id: "w19-1-q2", question: "自动化 Provisioning 的好处是什么？", options: ["增加成本", "减少人工干预，加快入驻速度", "增加错误", "降低安全"], answer: 1, rationale: "自动化提高效率和一致性。" },
        { id: "w19-1-q3", question: "Terraform 在多租户中的应用是什么？", options: ["代码托管", "模板化创建租户基础设施资源", "监控", "日志"], answer: 1, rationale: "IaC 支持一致的资源创建。" },
        { id: "w19-1-q4", question: "入驻失败应该如何处理？", options: ["忽略", "回滚已创建的资源，通知用户", "继续", "重试无限次"], answer: 1, rationale: "失败需要清理并通知。" },
        { id: "w19-1-q5", question: "初始凭证的安全处理是什么？", options: ["明文发送", "安全生成、加密传输、首次登录强制修改", "不设密码", "固定密码"], answer: 1, rationale: "初始凭证需要安全处理。" },
        { id: "w19-1-q6", question: "资源创建时间长如何处理？", options: ["同步等待", "异步创建，提供进度反馈", "放弃", "减少资源"], answer: 1, rationale: "异步处理改善用户体验。" },
        { id: "w19-1-q7", question: "欢迎流程的作用是什么？", options: ["增加复杂度", "帮助新租户快速上手", "浪费时间", "增加成本"], answer: 1, rationale: "引导帮助租户成功使用产品。" },
        { id: "w19-1-q8", question: "Pulumi 与 Terraform 的区别是什么？", options: ["完全相同", "Pulumi 使用通用编程语言", "Pulumi 不支持多云", "Terraform 不是 IaC"], answer: 1, rationale: "Pulumi 使用 Python、TypeScript 等语言。" },
        { id: "w19-1-q9", question: "AWS CDK 的特点是什么？", options: ["只支持 YAML", "使用编程语言定义基础设施", "不支持 AWS", "只支持 Terraform"], answer: 1, rationale: "CDK 使用代码定义 AWS 资源。" },
        { id: "w19-1-q10", question: "资源配额检查应该在什么时候？", options: ["创建后", "创建前检查是否有足够资源", "不检查", "随机"], answer: 1, rationale: "提前检查避免创建失败。" },
        { id: "w19-1-q11", question: "租户隔离资源 vs 共享资源如何决定？", options: ["全部隔离", "根据安全要求和成本考量决定", "全部共享", "随机"], answer: 1, rationale: "需要权衡隔离级别和成本。" },
        { id: "w19-1-q12", question: "入驻自动化测试的作用是什么？", options: ["增加时间", "确保入驻流程可靠", "减少功能", "增加成本"], answer: 1, rationale: "自动化测试保证流程质量。" },
    ],
    "w19-2": [
        { id: "w19-2-q1", question: "数据迁移的关键步骤是什么？", options: ["只有导入", "提取、转换、加载、验证", "只有导出", "只有验证"], answer: 1, rationale: "完整的 ETL 流程加验证。" },
        { id: "w19-2-q2", question: "AWS DMS 的作用是什么？", options: ["代码部署", "数据库迁移服务", "监控服务", "日志服务"], answer: 1, rationale: "DMS 支持数据库迁移。" },
        { id: "w19-2-q3", question: "数据格式转换的挑战是什么？", options: ["太简单", "不同系统的数据模型和格式不同", "无挑战", "自动转换"], answer: 1, rationale: "数据模型差异需要转换逻辑。" },
        { id: "w19-2-q4", question: "大数据量迁移的策略是什么？", options: ["一次性", "分批迁移、增量同步", "不迁移", "全部重建"], answer: 1, rationale: "分批和增量减少停机时间。" },
        { id: "w19-2-q5", question: "迁移验证应该检查什么？", options: ["只有数量", "数量、完整性、一致性、业务正确性", "只有格式", "不验证"], answer: 1, rationale: "多维度验证确保迁移质量。" },
        { id: "w19-2-q6", question: "ETL 和 ELT 的区别是什么？", options: ["相同", "ETL 先转换再加载，ELT 先加载再转换", "ELT 更旧", "ETL 更新"], answer: 1, rationale: "处理顺序不同适合不同场景。" },
        { id: "w19-2-q7", question: "迁移期间业务连续性如何保证？", options: ["停机迁移", "双写或增量同步保持服务可用", "不保证", "自动"], answer: 1, rationale: "需要策略保持业务运行。" },
        { id: "w19-2-q8", question: "Airbyte 的特点是什么？", options: ["闭源", "开源数据集成平台", "只支持 AWS", "只支持数据库"], answer: 1, rationale: "Airbyte 是开源的数据集成工具。" },
        { id: "w19-2-q9", question: "迁移回滚的准备是什么？", options: ["不准备", "保留源数据直到迁移验证完成", "删除源数据", "自动回滚"], answer: 1, rationale: "保留源数据支持必要时回滚。" },
        { id: "w19-2-q10", question: "增量迁移的优势是什么？", options: ["更复杂", "减少停机时间和数据丢失风险", "更慢", "更贵"], answer: 1, rationale: "增量迁移支持更短的切换窗口。" },
        { id: "w19-2-q11", question: "数据导出格式的选择应该考虑什么？", options: ["固定格式", "目标系统兼容性、数据完整性", "随机", "最小格式"], answer: 1, rationale: "格式需要满足目标系统需求。" },
        { id: "w19-2-q12", question: "迁移完成后的清理工作是什么？", options: ["立即删除", "验证后清理源数据、更新配置", "不清理", "保留所有"], answer: 1, rationale: "验证后进行有序的清理。" },
    ],
    "w19-3": [
        { id: "w19-3-q1", question: "租户下线应该包含哪些步骤？", options: ["只有删除", "通知、归档、资源释放、数据删除、审计", "只有通知", "只有归档"], answer: 1, rationale: "下线是完整的流程。" },
        { id: "w19-3-q2", question: "数据归档的目的是什么？", options: ["增加成本", "长期保留以满足合规和可能的恢复需求", "删除数据", "加密数据"], answer: 1, rationale: "归档支持合规和未来需求。" },
        { id: "w19-3-q3", question: "S3 归档存储的优势是什么？", options: ["最快", "成本低，适合长期存储", "最贵", "容量最小"], answer: 1, rationale: "Glacier 提供低成本的归档存储。" },
        { id: "w19-3-q4", question: "GDPR 被遗忘权要求什么？", options: ["保留数据", "能够完整删除个人数据", "加密数据", "备份数据"], answer: 1, rationale: "数据主体有权要求删除个人数据。" },
        { id: "w19-3-q5", question: "备份中的数据如何处理？", options: ["忽略", "需要从备份中识别并删除或使用加密密钥失效", "保留", "自动删除"], answer: 1, rationale: "备份数据也需要合规处理。" },
        { id: "w19-3-q6", question: "归档格式的选择应该考虑什么？", options: ["最小", "长期可读性和完整性", "最大", "随机"], answer: 1, rationale: "归档需要多年后仍可访问。" },
        { id: "w19-3-q7", question: "法律保留的含义是什么？", options: ["删除数据", "某些数据因法律要求必须保留特定期限", "立即删除", "永久保留"], answer: 1, rationale: "法律可能要求保留某些记录。" },
        { id: "w19-3-q8", question: "审计记录应该包含什么？", options: ["无记录", "谁何时删除了什么数据", "只有时间", "只有用户"], answer: 1, rationale: "完整的审计追踪支持合规。" },
        { id: "w19-3-q9", question: "资源释放的顺序应该是什么？", options: ["随机", "先归档数据，再释放计算，最后释放存储", "先删除存储", "先释放计算"], answer: 1, rationale: "正确的顺序避免数据丢失。" },
        { id: "w19-3-q10", question: "下线通知应该提前多久？", options: ["不通知", "根据合同和法规要求提前通知", "下线后通知", "立即下线"], answer: 1, rationale: "提前通知给租户时间准备。" },
        { id: "w19-3-q11", question: "AWS Backup 的作用是什么？", options: ["代码备份", "集中管理 AWS 资源的备份和保留", "日志备份", "监控"], answer: 1, rationale: "AWS Backup 提供统一的备份管理。" },
        { id: "w19-3-q12", question: "软删除的作用是什么？", options: ["立即删除", "标记删除支持恢复，延迟真正删除", "不删除", "部分删除"], answer: 1, rationale: "软删除提供误操作恢复窗口。" },
    ],
    "w19-4": [
        { id: "w19-4-q1", question: "升级和降级的主要区别是什么？", options: ["无区别", "升级增加功能配额，降级限制功能配额", "升级更复杂", "降级更复杂"], answer: 1, rationale: "方向不同但流程类似。" },
        { id: "w19-4-q2", question: "降级时已使用的高级功能如何处理？", options: ["立即禁用", "给予宽限期或只读访问", "保持使用", "删除数据"], answer: 1, rationale: "应该给租户时间迁移或导出。" },
        { id: "w19-4-q3", question: "计费调整 Proration 的含义是什么？", options: ["固定计费", "按使用时间比例计算费用", "免费", "全额收费"], answer: 1, rationale: "Pro-rata 按时间比例计费。" },
        { id: "w19-4-q4", question: "Feature Flag 在升降级中的作用是什么？", options: ["无作用", "控制租户可用的功能", "增加功能", "删除功能"], answer: 1, rationale: "Feature Flag 动态控制功能访问。" },
        { id: "w19-4-q5", question: "配额超限的处理策略是什么？", options: ["立即限制", "通知、宽限期、逐步限制", "忽略", "删除数据"], answer: 1, rationale: "渐进式处理改善用户体验。" },
        { id: "w19-4-q6", question: "升级的计费时机是什么？", options: ["下月开始", "通常立即生效并按比例计费", "免费期", "不计费"], answer: 1, rationale: "升级通常立即生效。" },
        { id: "w19-4-q7", question: "降级的计费时机是什么？", options: ["立即退款", "通常周期结束后生效", "立即生效", "不变化"], answer: 1, rationale: "降级通常在周期结束后生效。" },
        { id: "w19-4-q8", question: "LaunchDarkly 的作用是什么？", options: ["部署工具", "Feature Flag 管理平台", "监控工具", "日志工具"], answer: 1, rationale: "LaunchDarkly 提供功能开关管理。" },
        { id: "w19-4-q9", question: "用户通知的时机是什么？", options: ["变更后", "变更前提前通知", "不通知", "随机"], answer: 1, rationale: "提前通知给用户准备时间。" },
        { id: "w19-4-q10", question: "Chargebee Proration 的处理方式是什么？", options: ["不处理", "自动计算升降级的费用差额", "固定费用", "免费"], answer: 1, rationale: "Chargebee 自动处理 Pro-rata 计费。" },
        { id: "w19-4-q11", question: "无缝切换的要求是什么？", options: ["停机", "用户无感知的功能变更", "重新登录", "数据丢失"], answer: 1, rationale: "应该尽量减少对用户的影响。" },
        { id: "w19-4-q12", question: "升降级审计的作用是什么？", options: ["无作用", "记录变更历史支持追溯", "增加复杂度", "降低性能"], answer: 1, rationale: "审计支持问题追溯和合规。" },
    ],
}
