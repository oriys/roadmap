import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "w10-1": {
        lessonId: "w10-1",
        background: [
            "【配置层级】全局默认配置、租户级配置、用户级配置形成层级覆盖关系。",
            "【12-Factor】配置应该从环境中获取，不硬编码在代码中。",
            "【配置合并】子级配置覆盖父级配置，形成最终有效配置。",
            "【Spring Cloud Config】分布式配置中心，支持多环境多租户配置管理。",
        ],
        keyDifficulties: [
            "【配置冲突】层级配置合并时的优先级和冲突解决。",
            "【配置验证】确保配置值的有效性和一致性。",
            "【配置安全】敏感配置的加密存储和访问控制。",
            "【配置变更】配置变更的影响范围评估和回滚。",
        ],
        handsOnPath: [
            "设计多层配置数据模型",
            "实现配置合并逻辑",
            "集成 Spring Cloud Config",
            "配置敏感信息加密",
        ],
        selfCheck: [
            "配置层级如何设计？",
            "配置合并的优先级规则是什么？",
            "如何保护敏感配置？",
        ],
        extensions: [
            "研究 Consul KV 的配置管理",
            "了解 AWS AppConfig 的特性",
        ],
        sourceUrls: [
            "https://12factor.net/config",
            "https://spring.io/projects/spring-cloud-config",
            "https://developer.hashicorp.com/consul/docs/dynamic-app-config/kv",
        ],
    },
    "w10-2": {
        lessonId: "w10-2",
        background: [
            "【Feature Flag】功能开关，控制功能的开启和关闭，支持租户级别控制。",
            "【灰度发布】新功能先向部分租户开放，验证后逐步全量。",
            "【A/B 测试】基于租户分组进行功能实验。",
            "【Unleash】开源的功能开关平台，支持多种策略。",
        ],
        keyDifficulties: [
            "【Flag 管理】大量 Flag 的生命周期管理和清理。",
            "【一致性】确保租户在会话期间看到一致的功能状态。",
            "【性能影响】频繁的 Flag 检查可能影响性能。",
            "【回滚策略】功能问题时的快速回滚。",
        ],
        handsOnPath: [
            "集成 LaunchDarkly 或 Unleash",
            "实现租户级别 Feature Flag",
            "设计灰度发布策略",
            "配置 Flag 监控和告警",
        ],
        selfCheck: [
            "Feature Flag 在多租户中的应用场景是什么？",
            "如何实现租户级别的灰度发布？",
            "Feature Flag 的生命周期如何管理？",
        ],
        extensions: [
            "研究 Split.io 的实验平台",
            "了解 ConfigCat 的功能",
        ],
        sourceUrls: [
            "https://launchdarkly.com/blog/feature-flags-for-saas/",
            "https://docs.getunleash.io/",
            "https://martinfowler.com/articles/feature-toggles.html",
        ],
    },
    "w10-3": {
        lessonId: "w10-3",
        background: [
            "【配置驱动】通过配置而非代码实现租户定制化。",
            "【插件架构】允许租户通过插件扩展系统功能。",
            "【Webhook】租户可以配置 Webhook 接收系统事件通知。",
            "【自定义字段】允许租户添加自定义数据字段。",
        ],
        keyDifficulties: [
            "【复杂度控制】定制化能力越强，系统复杂度越高。",
            "【性能影响】插件和 Webhook 可能影响系统性能。",
            "【安全风险】第三方插件可能带来安全风险。",
            "【版本兼容】定制化功能在升级时的兼容性。",
        ],
        handsOnPath: [
            "设计租户配置驱动的定制化框架",
            "实现安全的插件系统",
            "配置 Webhook 推送机制",
            "设计自定义字段数据模型",
        ],
        selfCheck: [
            "配置驱动定制化的边界在哪里？",
            "插件系统如何保证安全？",
            "Webhook 的可靠性如何保证？",
        ],
        extensions: [
            "研究 Zapier 的集成模式",
            "了解 Salesforce 的定制化架构",
        ],
        sourceUrls: [
            "https://www.martinfowler.com/articles/patterns-of-distributed-systems/single-socket-channel.html",
            "https://docs.github.com/en/developers/webhooks-and-events/webhooks",
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/customize-tenant",
        ],
    },
    "w10-4": {
        lessonId: "w10-4",
        background: [
            "【配置热更新】不重启服务更新配置的能力。",
            "【配置版本】配置变更的版本控制和审计追踪。",
            "【GitOps】使用 Git 管理配置，变更通过 PR 流程。",
            "【Archaius】Netflix 开源的动态配置库。",
        ],
        keyDifficulties: [
            "【生效时机】热更新配置何时对租户生效。",
            "【一致性】多实例环境下配置的一致性。",
            "【回滚】配置变更导致问题时的快速回滚。",
            "【审计】谁在什么时候改了什么配置。",
        ],
        handsOnPath: [
            "实现配置热更新机制",
            "配置 Git 管理配置文件",
            "设计配置变更审计日志",
            "实现配置回滚功能",
        ],
        selfCheck: [
            "配置热更新如何实现？",
            "GitOps 在配置管理中的应用是什么？",
            "配置变更如何审计？",
        ],
        extensions: [
            "研究 Kubernetes ConfigMap 热更新",
            "了解 AWS Secrets Manager 的轮换功能",
        ],
        sourceUrls: [
            "https://netflix.github.io/archaius/",
            "https://www.hashicorp.com/blog/managing-secrets-with-vault-and-consul",
            "https://www.gitops.tech/",
        ],
    },
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "w10-1": [
        { id: "w10-1-q1", question: "配置层级的标准顺序是什么？", options: ["用户 > 租户 > 全局", "全局 > 租户 > 用户", "租户 > 用户 > 全局", "随机"], answer: 0, rationale: "用户配置覆盖租户配置，租户配置覆盖全局默认。" },
        { id: "w10-1-q2", question: "12-Factor App 对配置的建议是什么？", options: ["硬编码", "从环境中获取配置", "放在代码中", "放在注释中"], answer: 1, rationale: "12-Factor 要求配置与代码分离，从环境获取。" },
        { id: "w10-1-q3", question: "Spring Cloud Config 的作用是什么？", options: ["代码管理", "分布式配置中心", "数据库管理", "日志管理"], answer: 1, rationale: "Spring Cloud Config 提供集中式配置管理。" },
        { id: "w10-1-q4", question: "敏感配置应该如何存储？", options: ["明文", "加密存储", "代码中", "注释中"], answer: 1, rationale: "敏感配置应该加密保护。" },
        { id: "w10-1-q5", question: "配置合并时的冲突如何解决？", options: ["随机选择", "按优先级覆盖", "都保留", "报错"], answer: 1, rationale: "通常子级配置覆盖父级配置。" },
        { id: "w10-1-q6", question: "Consul KV 的用途是什么？", options: ["服务发现", "键值配置存储", "负载均衡", "日志存储"], answer: 1, rationale: "Consul KV 是分布式键值存储，适合配置管理。" },
        { id: "w10-1-q7", question: "配置验证的目的是什么？", options: ["增加延迟", "确保配置值有效", "减少配置", "删除配置"], answer: 1, rationale: "验证防止无效配置导致系统问题。" },
        { id: "w10-1-q8", question: "AWS AppConfig 提供什么功能？", options: ["代码部署", "配置管理和渐进式发布", "数据库管理", "网络管理"], answer: 1, rationale: "AppConfig 支持配置的安全部署和回滚。" },
        { id: "w10-1-q9", question: "多租户配置存储的选择有哪些？", options: ["只有文件", "数据库、配置中心、环境变量", "只有代码", "只有缓存"], answer: 1, rationale: "可以选择多种存储方式。" },
        { id: "w10-1-q10", question: "配置变更的影响范围如何评估？", options: ["不评估", "分析配置的使用位置和依赖", "随意变更", "自动评估"], answer: 1, rationale: "变更前需要了解配置的影响范围。" },
        { id: "w10-1-q11", question: "租户配置缓存的作用是什么？", options: ["增加延迟", "减少配置获取的延迟", "增加存储", "减少安全"], answer: 1, rationale: "缓存可以减少频繁读取配置的开销。" },
        { id: "w10-1-q12", question: "配置回滚应该如何实现？", options: ["不支持回滚", "保留配置历史版本，支持快速恢复", "重新输入", "重启服务"], answer: 1, rationale: "配置版本化支持快速回滚到之前版本。" },
    ],
    "w10-2": [
        { id: "w10-2-q1", question: "Feature Flag 的主要用途是什么？", options: ["代码注释", "控制功能的开启和关闭", "性能优化", "安全加固"], answer: 1, rationale: "Feature Flag 允许动态控制功能可用性。" },
        { id: "w10-2-q2", question: "灰度发布的好处是什么？", options: ["全量发布", "降低风险，逐步验证", "增加风险", "跳过测试"], answer: 1, rationale: "灰度发布可以在小范围验证后再扩大。" },
        { id: "w10-2-q3", question: "Unleash 是什么类型的平台？", options: ["数据库", "开源功能开关平台", "监控平台", "日志平台"], answer: 1, rationale: "Unleash 是流行的开源 Feature Flag 平台。" },
        { id: "w10-2-q4", question: "租户级别 Feature Flag 如何实现？", options: ["全局开关", "基于租户 ID 的策略", "随机", "手动"], answer: 1, rationale: "可以基于租户标识决定功能状态。" },
        { id: "w10-2-q5", question: "Feature Flag 生命周期管理的挑战是什么？", options: ["太简单", "过多的 Flag 导致技术债务", "Flag 太少", "不需要管理"], answer: 1, rationale: "临时 Flag 如果不清理会成为负担。" },
        { id: "w10-2-q6", question: "A/B 测试在多租户中如何应用？", options: ["不应用", "按租户分组进行功能实验", "全部测试", "跳过测试"], answer: 1, rationale: "可以按租户分组测试不同功能版本。" },
        { id: "w10-2-q7", question: "Flag 检查的性能优化方法是什么？", options: ["每次远程调用", "缓存 Flag 状态", "不检查", "延迟检查"], answer: 1, rationale: "缓存可以减少频繁查询的开销。" },
        { id: "w10-2-q8", question: "功能回滚通过 Feature Flag 如何实现？", options: ["重新部署", "关闭对应的 Flag", "删除代码", "重启服务"], answer: 1, rationale: "关闭 Flag 可以立即禁用问题功能。" },
        { id: "w10-2-q9", question: "LaunchDarkly 的特点是什么？", options: ["开源免费", "企业级 Feature Flag 服务", "只支持 Java", "只支持前端"], answer: 1, rationale: "LaunchDarkly 是领先的商业 Feature Flag 平台。" },
        { id: "w10-2-q10", question: "Flag 一致性指什么？", options: ["代码一致", "租户在会话期间看到一致的功能状态", "数据一致", "配置一致"], answer: 1, rationale: "避免同一租户看到功能状态跳变。" },
        { id: "w10-2-q11", question: "Martin Fowler 对 Feature Toggle 的分类有哪些？", options: ["只有一种", "Release、Experiment、Ops、Permission 等", "只有两种", "没有分类"], answer: 1, rationale: "Martin Fowler 根据用途和生命周期分类。" },
        { id: "w10-2-q12", question: "租户级别灰度发布的步骤是什么？", options: ["一步到位", "选择试点租户 > 监控 > 扩大范围", "随机发布", "全部发布"], answer: 1, rationale: "逐步扩大发布范围，及时发现问题。" },
    ],
    "w10-3": [
        { id: "w10-3-q1", question: "配置驱动定制化的含义是什么？", options: ["修改代码", "通过配置而非代码实现定制", "删除功能", "添加代码"], answer: 1, rationale: "配置驱动使定制化无需代码变更。" },
        { id: "w10-3-q2", question: "插件架构的好处是什么？", options: ["增加耦合", "允许扩展系统功能而不修改核心代码", "减少功能", "增加复杂度"], answer: 1, rationale: "插件架构支持灵活的功能扩展。" },
        { id: "w10-3-q3", question: "Webhook 在多租户中的应用是什么？", options: ["数据存储", "租户接收系统事件通知", "用户认证", "日志记录"], answer: 1, rationale: "Webhook 允许租户订阅系统事件。" },
        { id: "w10-3-q4", question: "自定义字段的实现方式有哪些？", options: ["只有 JSON", "JSON 列、EAV 模式、Schema 扩展", "只有新表", "不支持"], answer: 1, rationale: "多种技术方案支持自定义字段。" },
        { id: "w10-3-q5", question: "第三方插件的安全风险如何控制？", options: ["不控制", "沙箱隔离、权限控制、代码审查", "完全信任", "禁止插件"], answer: 1, rationale: "需要多层措施控制插件风险。" },
        { id: "w10-3-q6", question: "Webhook 可靠性如何保证？", options: ["不保证", "重试机制、死信队列、签名验证", "只发一次", "同步调用"], answer: 1, rationale: "重试和确认机制确保消息送达。" },
        { id: "w10-3-q7", question: "Zapier 的集成模式是什么？", options: ["代码集成", "无代码自动化工作流", "手动集成", "不支持集成"], answer: 1, rationale: "Zapier 通过配置连接不同应用。" },
        { id: "w10-3-q8", question: "定制化功能的版本兼容性挑战是什么？", options: ["无挑战", "升级时可能破坏租户定制", "自动兼容", "不升级"], answer: 1, rationale: "系统升级需要考虑定制化的兼容性。" },
        { id: "w10-3-q9", question: "GitHub Webhook 的签名验证作用是什么？", options: ["加密内容", "验证请求来源的真实性", "压缩数据", "加速传输"], answer: 1, rationale: "签名确保 Webhook 来自可信来源。" },
        { id: "w10-3-q10", question: "定制化复杂度控制的原则是什么？", options: ["无限定制", "在可维护性和灵活性间平衡", "禁止定制", "只允许代码定制"], answer: 1, rationale: "需要限制定制化范围避免系统过于复杂。" },
        { id: "w10-3-q11", question: "Salesforce 定制化架构的特点是什么？", options: ["不支持定制", "元数据驱动的强大定制能力", "只支持代码", "只支持配置"], answer: 1, rationale: "Salesforce 以其灵活的定制能力著称。" },
        { id: "w10-3-q12", question: "插件性能影响如何控制？", options: ["不控制", "超时限制、资源配额、异步执行", "禁止插件", "同步执行"], answer: 1, rationale: "多种机制限制插件对系统的影响。" },
    ],
    "w10-4": [
        { id: "w10-4-q1", question: "配置热更新的含义是什么？", options: ["重启更新", "不重启服务更新配置", "删除配置", "备份配置"], answer: 1, rationale: "热更新允许运行时修改配置。" },
        { id: "w10-4-q2", question: "GitOps 配置管理的特点是什么？", options: ["手动管理", "Git 作为配置的唯一真实来源", "数据库存储", "内存存储"], answer: 1, rationale: "GitOps 使用 Git 管理所有配置变更。" },
        { id: "w10-4-q3", question: "Archaius 是什么？", options: ["数据库", "Netflix 开源的动态配置库", "Web 框架", "监控工具"], answer: 1, rationale: "Archaius 支持运行时配置更新。" },
        { id: "w10-4-q4", question: "配置变更审计应该记录什么？", options: ["只记录值", "谁在什么时候改了什么", "只记录时间", "不记录"], answer: 1, rationale: "完整的审计追踪支持问题排查。" },
        { id: "w10-4-q5", question: "多实例配置一致性如何保证？", options: ["不保证", "配置中心 + 推送/拉取机制", "手动同步", "文件复制"], answer: 1, rationale: "集中式配置中心确保一致性。" },
        { id: "w10-4-q6", question: "配置回滚的触发条件是什么？", options: ["定期回滚", "配置变更导致问题时", "随机回滚", "不回滚"], answer: 1, rationale: "当新配置导致问题时需要快速回滚。" },
        { id: "w10-4-q7", question: "Kubernetes ConfigMap 热更新的限制是什么？", options: ["无限制", "应用需要支持配置重新加载", "自动重启", "不支持更新"], answer: 1, rationale: "应用需要实现配置变更的监听和处理。" },
        { id: "w10-4-q8", question: "AWS Secrets Manager 轮换功能的作用是什么？", options: ["删除密钥", "自动更新和轮换密钥", "备份密钥", "共享密钥"], answer: 1, rationale: "轮换功能自动更新敏感配置。" },
        { id: "w10-4-q9", question: "配置生效时机的考虑是什么？", options: ["立即生效", "需要考虑对运行中请求的影响", "永不生效", "随机生效"], answer: 1, rationale: "热更新时机需要考虑系统状态。" },
        { id: "w10-4-q10", question: "配置版本控制的好处是什么？", options: ["增加存储", "支持变更追踪和回滚", "减少配置", "加密配置"], answer: 1, rationale: "版本化使配置变更可追溯可回滚。" },
        { id: "w10-4-q11", question: "Vault 在配置管理中的应用是什么？", options: ["日志存储", "密钥和敏感配置管理", "代码存储", "数据库"], answer: 1, rationale: "Vault 专门管理敏感配置和密钥。" },
        { id: "w10-4-q12", question: "配置推送 vs 拉取的区别是什么？", options: ["无区别", "推送主动通知，拉取定期获取", "相同机制", "只用拉取"], answer: 1, rationale: "两种机制各有优劣，可以组合使用。" },
    ],
}
