import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week17Guides: Record<string, LessonGuide> = {
    "w17-1": {
        lessonId: "w17-1",
        background: [
            "【多区域架构】Azure 多区域多租户架构指南涵盖数据主权、延迟优化、成本考量。",
            "【AWS 全球基础设施】AWS 在全球有多个 Region 和 Availability Zone，支持就近部署。",
            "【数据主权】某些国家要求数据存储在本地，驱动多区域部署需求。",
            "【延迟优化】将应用部署在靠近用户的区域可以显著降低延迟。",
        ],
        keyDifficulties: [
            "【区域选择】如何为租户选择最佳区域。",
            "【成本增加】多区域部署增加基础设施成本。",
            "【运维复杂】多区域环境的运维和监控更复杂。",
            "【一致性挑战】跨区域数据一致性难以保证。",
        ],
        handsOnPath: [
            "设计多区域部署决策框架",
            "配置 AWS 多区域基础设施",
            "实现租户区域选择功能",
            "设计跨区域成本监控",
        ],
        selfCheck: [
            "多区域部署的主要驱动因素是什么？",
            "区域选择应该考虑哪些因素？",
            "如何平衡数据主权和运维成本？",
        ],
        extensions: [
            "研究 GCP 的全球负载均衡",
            "了解 Azure Front Door 的全球路由",
        ],
        sourceUrls: [
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/multi-region",
            "https://aws.amazon.com/about-aws/global-infrastructure/",
            "https://aws.amazon.com/blogs/security/how-to-address-data-residency-with-aws/",
        ],
    },
    "w17-2": {
        lessonId: "w17-2",
        background: [
            "【跨区域复制】AWS RDS 支持跨区域只读副本，用于灾备和读性能优化。",
            "【CockroachDB 多区域】CockroachDB 原生支持多区域部署，自动处理数据分布和复制。",
            "【冲突解决】分布式系统中的数据冲突需要解决策略，如 Last Write Wins、向量时钟。",
            "【最终一致性】跨区域同步通常使用异步复制，接受短暂的不一致。",
        ],
        keyDifficulties: [
            "【复制延迟】跨区域复制有网络延迟。",
            "【冲突处理】多主写入场景的冲突解决。",
            "【分区容忍】网络分区时的数据可用性。",
            "【一致性权衡】CAP 定理的权衡。",
        ],
        handsOnPath: [
            "配置 RDS 跨区域只读副本",
            "部署 CockroachDB 多区域集群",
            "实现冲突解决策略",
            "设计数据一致性监控",
        ],
        selfCheck: [
            "异步复制和同步复制的区别是什么？",
            "常见的冲突解决策略有哪些？",
            "CAP 定理在多区域场景的应用是什么？",
        ],
        extensions: [
            "研究 Spanner 的 TrueTime",
            "了解 DynamoDB Global Tables",
        ],
        sourceUrls: [
            "https://aws.amazon.com/blogs/database/cross-region-read-replicas-for-amazon-rds-for-postgresql/",
            "https://www.cockroachlabs.com/docs/stable/multiregion-overview.html",
            "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf",
        ],
    },
    "w17-3": {
        lessonId: "w17-3",
        background: [
            "【Route 53 Geolocation】AWS Route 53 支持基于用户地理位置的 DNS 路由。",
            "【全球负载均衡】GCP Global Load Balancer 提供跨区域的负载均衡能力。",
            "【租户区域亲和性】租户可以选择或自动分配到特定区域。",
            "【Anycast】使用相同 IP 在多个位置提供服务，自动路由到最近节点。",
        ],
        keyDifficulties: [
            "【路由准确性】DNS 地理位置路由可能不完全准确。",
            "【会话亲和】确保用户请求持续路由到同一区域。",
            "【故障切换】区域故障时的自动切换。",
            "【延迟测量】准确测量到各区域的延迟。",
        ],
        handsOnPath: [
            "配置 Route 53 地理位置路由",
            "实现租户区域亲和性",
            "设计多区域健康检查",
            "配置自动故障切换",
        ],
        selfCheck: [
            "地理位置路由的工作原理是什么？",
            "如何实现租户到区域的绑定？",
            "区域故障切换的策略是什么？",
        ],
        extensions: [
            "研究 Cloudflare Load Balancing",
            "了解 AWS Global Accelerator",
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html",
            "https://cloud.google.com/load-balancing/docs/https/cross-region-example",
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/tenant-routing",
        ],
    },
    "w17-4": {
        lessonId: "w17-4",
        background: [
            "【灾难恢复策略】AWS 定义四种 DR 策略：Backup & Restore、Pilot Light、Warm Standby、Multi-Site。",
            "【RTO/RPO】Recovery Time Objective 和 Recovery Point Objective 定义恢复目标。",
            "【多区域故障转移】区域级故障时自动或手动切换到备用区域。",
            "【数据恢复】从备份恢复数据的流程和时间。",
        ],
        keyDifficulties: [
            "【成本权衡】更高的可用性需要更高的成本。",
            "【切换决策】何时触发区域切换。",
            "【数据同步】确保切换后数据完整。",
            "【测试验证】定期测试 DR 流程。",
        ],
        handsOnPath: [
            "设计多租户 DR 策略",
            "配置跨区域备份",
            "实现故障检测和自动切换",
            "设计 DR 演练流程",
        ],
        selfCheck: [
            "四种 DR 策略的区别是什么？",
            "RTO 和 RPO 如何定义？",
            "DR 测试为什么重要？",
        ],
        extensions: [
            "研究 Chaos Engineering 实践",
            "了解 AWS Resilience Hub",
        ],
        sourceUrls: [
            "https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-i-strategies-for-recovery-in-the-cloud/",
            "https://docs.microsoft.com/en-us/azure/architecture/guide/saas-multitenant/disaster-recovery",
            "https://aws.amazon.com/blogs/architecture/selecting-the-right-disaster-recovery-strategy-for-your-workload/",
        ],
    },
}

export const week17Quizzes: Record<string, QuizQuestion[]> = {
    "w17-1": [
        { id: "w17-1-q1", question: "多区域部署的主要驱动因素有哪些？", options: ["只有成本", "数据主权、延迟优化、灾备", "只有性能", "只有安全"], answer: 1, rationale: "多种因素驱动多区域部署需求。" },
        { id: "w17-1-q2", question: "数据主权的含义是什么？", options: ["数据加密", "某些国家要求数据存储在本地", "数据备份", "数据压缩"], answer: 1, rationale: "数据主权要求数据物理位置符合法规。" },
        { id: "w17-1-q3", question: "AWS Region 和 AZ 的区别是什么？", options: ["相同", "Region 是地理区域，AZ 是区域内的独立数据中心", "AZ 更大", "Region 更小"], answer: 1, rationale: "每个 Region 包含多个 AZ。" },
        { id: "w17-1-q4", question: "多区域部署的成本考量有哪些？", options: ["无成本", "基础设施、数据传输、运维成本增加", "成本降低", "固定成本"], answer: 1, rationale: "多区域增加多方面成本。" },
        { id: "w17-1-q5", question: "延迟优化的方法是什么？", options: ["增加服务器", "将应用部署在靠近用户的区域", "增加带宽", "压缩数据"], answer: 1, rationale: "就近部署是降低延迟的有效方法。" },
        { id: "w17-1-q6", question: "区域选择应该考虑什么？", options: ["只有价格", "合规要求、延迟、服务可用性、成本", "只有延迟", "随机选择"], answer: 1, rationale: "需要综合考虑多个因素。" },
        { id: "w17-1-q7", question: "租户区域选择应该在什么时候？", options: ["随时", "入驻时选择，变更需要数据迁移", "自动选择", "不选择"], answer: 1, rationale: "区域选择通常在入驻时确定。" },
        { id: "w17-1-q8", question: "跨区域数据传输的成本如何？", options: ["免费", "通常按流量计费，成本较高", "固定费用", "忽略不计"], answer: 1, rationale: "跨区域数据传输是重要成本项。" },
        { id: "w17-1-q9", question: "多区域运维的挑战是什么？", options: ["太简单", "监控、部署、故障处理更复杂", "无挑战", "自动化"], answer: 1, rationale: "多区域增加运维复杂度。" },
        { id: "w17-1-q10", question: "Azure Front Door 的作用是什么？", options: ["前端框架", "全球应用加速和负载均衡", "数据库", "存储"], answer: 1, rationale: "Front Door 提供全球路由和加速。" },
        { id: "w17-1-q11", question: "GCP 全球负载均衡的特点是什么？", options: ["只支持单区域", "使用单一 Anycast IP 提供全球服务", "需要多个 IP", "不支持多区域"], answer: 1, rationale: "GCP 使用 Anycast 简化全球负载均衡。" },
        { id: "w17-1-q12", question: "多区域监控应该关注什么？", options: ["只有错误", "各区域健康状态、延迟对比、数据同步", "只有延迟", "只有成本"], answer: 1, rationale: "需要全面监控多区域状态。" },
    ],
    "w17-2": [
        { id: "w17-2-q1", question: "RDS 跨区域只读副本的用途是什么？", options: ["写入", "灾备和读性能优化", "删除数据", "压缩数据"], answer: 1, rationale: "跨区域副本支持灾备和读扩展。" },
        { id: "w17-2-q2", question: "CockroachDB 多区域的特点是什么？", options: ["手动配置", "原生支持多区域，自动处理数据分布", "不支持多区域", "只支持单区域"], answer: 1, rationale: "CockroachDB 原生支持多区域部署。" },
        { id: "w17-2-q3", question: "Last Write Wins 冲突解决的原理是什么？", options: ["保留第一个", "时间戳最新的写入生效", "随机选择", "合并所有"], answer: 1, rationale: "LWW 使用时间戳决定最终值。" },
        { id: "w17-2-q4", question: "异步复制和同步复制的区别是什么？", options: ["相同", "异步不等待确认，同步等待所有副本确认", "异步更慢", "同步更快"], answer: 1, rationale: "同步复制保证一致性但延迟更高。" },
        { id: "w17-2-q5", question: "CAP 定理说明什么？", options: ["全部可以", "分布式系统只能同时满足 CAP 中的两个", "无限制", "只需一个"], answer: 1, rationale: "CAP 定理说明了分布式系统的权衡。" },
        { id: "w17-2-q6", question: "向量时钟的作用是什么？", options: ["计时", "追踪事件因果关系，检测冲突", "加密", "压缩"], answer: 1, rationale: "向量时钟用于分布式系统的因果追踪。" },
        { id: "w17-2-q7", question: "最终一致性的含义是什么？", options: ["立即一致", "系统最终会达到一致状态，存在短暂不一致", "永不一致", "强一致"], answer: 1, rationale: "最终一致性允许短暂的不一致窗口。" },
        { id: "w17-2-q8", question: "跨区域复制延迟的量级是什么？", options: ["微秒", "通常是几十到几百毫秒", "秒级", "分钟级"], answer: 1, rationale: "跨区域网络延迟通常是毫秒级。" },
        { id: "w17-2-q9", question: "DynamoDB Global Tables 的特点是什么？", options: ["单区域", "多区域多主复制", "只读副本", "单主"], answer: 1, rationale: "Global Tables 支持多区域多主写入。" },
        { id: "w17-2-q10", question: "Spanner TrueTime 解决什么问题？", options: ["网络延迟", "分布式系统的时间同步和排序", "数据压缩", "加密"], answer: 1, rationale: "TrueTime 提供全球时间同步。" },
        { id: "w17-2-q11", question: "多主写入的挑战是什么？", options: ["太简单", "需要处理写入冲突", "性能更好", "无挑战"], answer: 1, rationale: "多主模式需要冲突解决机制。" },
        { id: "w17-2-q12", question: "数据一致性监控应该检查什么？", options: ["只有延迟", "复制延迟、数据差异、冲突频率", "只有错误", "只有成本"], answer: 1, rationale: "需要多维度监控数据一致性。" },
    ],
    "w17-3": [
        { id: "w17-3-q1", question: "Route 53 地理位置路由的原理是什么？", options: ["随机路由", "根据用户 IP 地理位置路由到不同端点", "轮询路由", "权重路由"], answer: 1, rationale: "根据用户地理位置选择最佳端点。" },
        { id: "w17-3-q2", question: "Anycast 的工作原理是什么？", options: ["多个 IP", "相同 IP 在多个位置，自动路由到最近", "单一位置", "随机选择"], answer: 1, rationale: "Anycast 使用相同 IP 在多点提供服务。" },
        { id: "w17-3-q3", question: "租户区域亲和性的含义是什么？", options: ["随机分配", "租户绑定到特定区域访问", "无绑定", "自动切换"], answer: 1, rationale: "亲和性确保租户请求路由到指定区域。" },
        { id: "w17-3-q4", question: "DNS 地理位置路由的局限是什么？", options: ["完全准确", "IP 地理位置可能不准确", "太慢", "太贵"], answer: 1, rationale: "IP 地理数据库可能有误差。" },
        { id: "w17-3-q5", question: "会话亲和的作用是什么？", options: ["无作用", "确保用户请求持续路由到同一后端", "随机路由", "负载均衡"], answer: 1, rationale: "亲和性保证会话连续性。" },
        { id: "w17-3-q6", question: "区域健康检查的目的是什么？", options: ["增加延迟", "检测区域故障触发切换", "增加成本", "减少流量"], answer: 1, rationale: "健康检查是故障切换的基础。" },
        { id: "w17-3-q7", question: "AWS Global Accelerator 的优势是什么？", options: ["更贵", "使用 AWS 全球网络降低延迟", "更慢", "更复杂"], answer: 1, rationale: "Global Accelerator 利用 AWS 骨干网。" },
        { id: "w17-3-q8", question: "故障切换的触发条件是什么？", options: ["定时切换", "健康检查失败超过阈值", "随机切换", "手动触发"], answer: 1, rationale: "基于健康检查自动触发切换。" },
        { id: "w17-3-q9", question: "延迟测量的方法有哪些？", options: ["估计", "Ping、TCP 连接时间、应用层延迟", "不测量", "固定值"], answer: 1, rationale: "多种方法测量延迟。" },
        { id: "w17-3-q10", question: "Cloudflare Load Balancing 的特点是什么？", options: ["只支持 HTTP", "全球负载均衡和健康检查", "只支持 DNS", "单区域"], answer: 1, rationale: "Cloudflare 提供全球负载均衡服务。" },
        { id: "w17-3-q11", question: "租户区域绑定的实现方式是什么？", options: ["硬编码", "通过租户配置或数据库记录", "随机", "不绑定"], answer: 1, rationale: "租户区域信息存储在配置或数据库中。" },
        { id: "w17-3-q12", question: "故障切换后的回切策略是什么？", options: ["不回切", "问题修复后手动或自动切回主区域", "自动立即回切", "永不回切"], answer: 1, rationale: "回切需要确认主区域恢复正常。" },
    ],
    "w17-4": [
        { id: "w17-4-q1", question: "AWS 定义的四种 DR 策略是什么？", options: ["只有备份", "Backup & Restore、Pilot Light、Warm Standby、Multi-Site", "只有多站点", "只有一种"], answer: 1, rationale: "AWS 定义四种从低到高的 DR 策略。" },
        { id: "w17-4-q2", question: "RTO 的含义是什么？", options: ["数据丢失", "Recovery Time Objective，恢复时间目标", "复制时间", "备份时间"], answer: 1, rationale: "RTO 定义服务恢复的时间目标。" },
        { id: "w17-4-q3", question: "RPO 的含义是什么？", options: ["恢复时间", "Recovery Point Objective，可接受的数据丢失量", "复制点", "备份点"], answer: 1, rationale: "RPO 定义可接受的数据丢失时间窗口。" },
        { id: "w17-4-q4", question: "Pilot Light 策略的特点是什么？", options: ["完全运行", "核心组件保持运行，其他按需启动", "完全关闭", "全量部署"], answer: 1, rationale: "Pilot Light 只保持最小核心运行。" },
        { id: "w17-4-q5", question: "Warm Standby 和 Multi-Site 的区别是什么？", options: ["相同", "Warm Standby 是缩减版，Multi-Site 是全量运行", "Warm 更贵", "Multi-Site 更简单"], answer: 1, rationale: "Multi-Site 提供完全冗余但成本最高。" },
        { id: "w17-4-q6", question: "DR 成本和可用性的关系是什么？", options: ["无关系", "更高的可用性需要更高的成本", "反向关系", "固定成本"], answer: 1, rationale: "DR 策略在成本和可用性间权衡。" },
        { id: "w17-4-q7", question: "故障检测的方法有哪些？", options: ["只有人工", "健康检查、告警、用户报告", "只有告警", "不检测"], answer: 1, rationale: "多种方法组合检测故障。" },
        { id: "w17-4-q8", question: "DR 测试为什么重要？", options: ["不重要", "验证 DR 流程有效，发现问题", "增加风险", "浪费资源"], answer: 1, rationale: "测试确保 DR 在需要时能正常工作。" },
        { id: "w17-4-q9", question: "Chaos Engineering 的目的是什么？", options: ["破坏系统", "通过注入故障提高系统韧性", "测试功能", "性能测试"], answer: 1, rationale: "混沌工程主动验证系统容错能力。" },
        { id: "w17-4-q10", question: "AWS Resilience Hub 提供什么？", options: ["代码托管", "评估和改进应用韧性", "监控告警", "日志管理"], answer: 1, rationale: "Resilience Hub 帮助评估和改进韧性。" },
        { id: "w17-4-q11", question: "数据备份的最佳实践是什么？", options: ["不备份", "3-2-1 规则：3 份副本、2 种介质、1 份异地", "只有一份", "只在本地"], answer: 1, rationale: "3-2-1 规则是备份的最佳实践。" },
        { id: "w17-4-q12", question: "DR 演练应该多久进行一次？", options: ["从不", "定期进行，如每季度或每半年", "每天", "只在上线时"], answer: 1, rationale: "定期演练确保 DR 能力持续有效。" },
    ],
}
