import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week18Guides: Record<string, LessonGuide> = {
    "pulsar-w18-1": {
        lessonId: "pulsar-w18-1",
        background: [
            "【扩缩容概述】官方文档：Pulsar 集群可以通过增减 Broker、BookKeeper、ZooKeeper 节点来扩缩容，实现弹性伸缩。",
            "【Broker 扩缩容】添加 Broker 节点后，新连接和负载会自动分配到新节点。负载均衡器会重新分配 Topic 所有权。",
            "【BookKeeper 扩缩容】添加 Bookie 节点后，新写入的数据会分布到新节点。需要运行 Bookie 审计来重新均衡数据。",
            "【ZooKeeper 扩缩容】ZooKeeper 扩缩容需要谨慎，建议使用奇数节点（3、5、7）。扩容时需要逐个添加节点并更新配置。",
            "【自动负载均衡】Pulsar 支持自动负载均衡，根据 CPU、内存、网络、Topic 数等指标自动迁移 Topic 所有权。"
        ],
        keyDifficulties: [
            "【无损扩缩容】扩缩容期间需要保证服务不中断。Broker 扩容通常是无损的，缩容需要等待 Topic 迁移完成。",
            "【数据均衡】BookKeeper 扩容后，历史数据不会自动迁移到新节点。需要考虑是否运行均衡任务。",
            "【ZooKeeper 一致性】ZooKeeper 扩缩容过程中需要保持多数节点可用，避免服务中断。",
            "【容量规划】扩容前需要评估瓶颈（CPU、内存、磁盘、网络），针对性扩容。盲目扩容可能无法解决问题。"
        ],
        handsOnPath: [
            "在测试环境中添加 Broker 节点，观察负载重新分配。",
            "添加 Bookie 节点，监控新数据的分布情况。",
            "测试 Broker 缩容：下线节点前等待 Topic 迁移。",
            "配置自动负载均衡策略，观察 Topic 自动迁移。"
        ],
        selfCheck: [
            "如何添加 Broker 节点？添加后负载如何分配？",
            "BookKeeper 扩容后历史数据会自动均衡吗？",
            "ZooKeeper 扩缩容需要注意什么？",
            "Broker 缩容时如何保证服务不中断？",
            "自动负载均衡基于哪些指标？"
        ],
        extensions: [
            "研究 Pulsar 在 Kubernetes 上的自动伸缩配置。",
            "探索 BookKeeper AutoRecovery 的工作原理。",
            "学习大规模集群的容量规划方法。",
            "研究多租户环境下的资源隔离和扩容策略。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/administration-load-balance/",
            "https://pulsar.apache.org/docs/administration-zk-bk/#scaling"
        ]
    },
    "pulsar-w18-2": {
        lessonId: "pulsar-w18-2",
        background: [
            "【备份重要性】备份是灾难恢复的基础，保护数据免受硬件故障、人为错误、自然灾害等影响。",
            "【元数据备份】ZooKeeper 存储集群元数据，需要定期备份。可以使用 ZooKeeper 的 snapshot 或第三方工具。",
            "【BookKeeper 数据】BookKeeper 存储消息数据，通过多副本保证数据安全。可以额外备份到对象存储。",
            "【配置备份】Broker、BookKeeper、ZooKeeper 的配置文件需要备份，便于恢复时使用。",
            "【灾难恢复】灾难恢复计划应包括：RTO（恢复时间目标）、RPO（恢复点目标）、恢复流程、定期演练。"
        ],
        keyDifficulties: [
            "【一致性备份】分布式系统备份需要考虑一致性。ZooKeeper snapshot 和 BookKeeper ledger 的备份时间点应该协调。",
            "【增量备份】全量备份耗时长，增量备份可以减少备份时间和存储空间，但恢复更复杂。",
            "【恢复测试】备份必须定期测试恢复，确保备份有效。很多问题在恢复时才会发现。",
            "【跨区域备份】为防止区域性灾难，备份应存储在不同区域。考虑网络传输成本和延迟。"
        ],
        handsOnPath: [
            "配置 ZooKeeper 定期 snapshot 备份。",
            "实践 BookKeeper ledger 的备份和恢复。",
            "编写配置文件备份脚本，纳入版本控制。",
            "在测试环境进行完整的灾难恢复演练。"
        ],
        selfCheck: [
            "Pulsar 集群需要备份哪些数据？",
            "ZooKeeper 元数据如何备份？",
            "什么是 RTO 和 RPO？如何设定？",
            "为什么需要定期测试恢复？",
            "跨区域备份有什么挑战？"
        ],
        extensions: [
            "研究 Velero 在 Kubernetes 上备份 Pulsar 的方案。",
            "探索使用分层存储作为数据备份的策略。",
            "学习金融行业对备份的合规要求。",
            "研究混合云环境下的备份策略。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/administration-zk-bk/",
            "https://pulsar.apache.org/docs/cookbooks-retention-expiry/"
        ]
    },
    "pulsar-w18-3": {
        lessonId: "pulsar-w18-3",
        background: [
            "【故障排查方法论】系统性的故障排查：收集信息（日志、指标、配置）→ 分析现象 → 提出假设 → 验证 → 修复。",
            "【常见问题类型】连接问题、性能问题、数据问题、配置问题。不同类型问题有不同的排查入口。",
            "【日志分析】Broker、BookKeeper、ZooKeeper 日志是排查的重要信息源。了解常见错误日志的含义。",
            "【指标分析】通过 Prometheus 指标发现异常：延迟上升、吞吐下降、错误率增加、资源使用异常等。",
            "【工具使用】pulsar-admin 命令用于检查集群状态，pulsar-perf 用于性能测试，bookkeeper shell 用于检查存储。"
        ],
        keyDifficulties: [
            "【分布式排查】问题可能出在 Broker、BookKeeper、ZooKeeper、客户端任意环节，需要逐步定位。",
            "【间歇性问题】间歇性问题难以复现和诊断。需要持续收集数据，等待问题再次发生时分析。",
            "【性能问题根因】性能问题可能有多个原因：硬件、配置、应用逻辑、外部依赖。需要综合分析。",
            "【紧急响应】生产故障需要快速响应。应有预案、Runbook、值班机制，缩短故障恢复时间。"
        ],
        handsOnPath: [
            "模拟常见故障场景（Broker 宕机、网络分区），练习排查流程。",
            "学习解读 Pulsar 日志中的关键错误信息。",
            "使用 pulsar-admin 和 bookkeeper shell 检查集群状态。",
            "编写常见问题的 Runbook，记录排查和修复步骤。"
        ],
        selfCheck: [
            "故障排查的一般方法论是什么？",
            "Pulsar 常见的问题类型有哪些？",
            "如何分析 Broker 日志？常见错误有哪些？",
            "如何使用指标发现问题？",
            "生产故障紧急响应应该有哪些准备？"
        ],
        extensions: [
            "研究 Pulsar 社区的常见问题和解决方案。",
            "探索使用 AI 辅助日志分析和异常检测。",
            "学习混沌工程在 Pulsar 故障演练中的应用。",
            "研究 SRE 最佳实践在 Pulsar 运维中的应用。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/admin-api-overview/",
            "https://pulsar.apache.org/docs/reference-cli-tools/"
        ]
    }
}

export const week18Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w18-1": [
        {
            id: "pulsar-w18-1-q1",
            question: "添加 Broker 节点后，负载如何分配？",
            options: [
                "需要手动迁移",
                "新连接和负载自动分配到新节点",
                "需要重启集群",
                "不会分配到新节点"
            ],
            answer: 1,
            rationale: "添加 Broker 节点后，负载均衡器会自动将新连接和负载分配到新节点。"
        },
        {
            id: "pulsar-w18-1-q2",
            question: "BookKeeper 扩容后历史数据会怎样？",
            options: [
                "自动迁移到新节点",
                "不会自动迁移，新数据会分布到新节点",
                "需要重启才能使用新节点",
                "历史数据会丢失"
            ],
            answer: 1,
            rationale: "BookKeeper 扩容后历史数据不会自动迁移，新写入的数据会分布到新节点。"
        },
        {
            id: "pulsar-w18-1-q3",
            question: "ZooKeeper 集群推荐使用多少个节点？",
            options: [
                "偶数个",
                "奇数个（3、5、7）",
                "任意数量",
                "只能 3 个"
            ],
            answer: 1,
            rationale: "ZooKeeper 推荐使用奇数节点（3、5、7），便于选举和容错。"
        },
        {
            id: "pulsar-w18-1-q4",
            question: "Broker 缩容时需要注意什么？",
            options: [
                "直接停止节点",
                "等待 Topic 迁移完成后再停止",
                "无需注意",
                "先停止再迁移"
            ],
            answer: 1,
            rationale: "Broker 缩容需要等待 Topic 迁移完成，避免服务中断。"
        },
        {
            id: "pulsar-w18-1-q5",
            question: "自动负载均衡基于哪些指标？",
            options: [
                "只有 CPU",
                "CPU、内存、网络、Topic 数等",
                "只有 Topic 数",
                "只有内存"
            ],
            answer: 1,
            rationale: "自动负载均衡基于多个指标：CPU、内存、网络、Topic 数等综合判断。"
        },
        {
            id: "pulsar-w18-1-q6",
            question: "如何使 BookKeeper 历史数据均衡到新节点？",
            options: [
                "自动均衡",
                "运行 Bookie 审计/均衡任务",
                "重启集群",
                "删除旧数据"
            ],
            answer: 1,
            rationale: "需要运行 Bookie 审计/均衡任务来重新均衡历史数据到新节点。"
        },
        {
            id: "pulsar-w18-1-q7",
            question: "ZooKeeper 扩容时需要保持什么条件？",
            options: [
                "所有节点在线",
                "多数节点可用",
                "可以全部下线",
                "只需一个节点"
            ],
            answer: 1,
            rationale: "ZooKeeper 扩缩容过程中需要保持多数节点可用，避免服务中断。"
        },
        {
            id: "pulsar-w18-1-q8",
            question: "容量规划扩容前需要评估什么？",
            options: [
                "只看节点数量",
                "瓶颈（CPU、内存、磁盘、网络）",
                "只看磁盘",
                "只看 Topic 数"
            ],
            answer: 1,
            rationale: "扩容前需要评估瓶颈（CPU、内存、磁盘、网络），针对性扩容。"
        },
        {
            id: "pulsar-w18-1-q9",
            question: "Broker 扩容对现有服务有什么影响？",
            options: [
                "服务中断",
                "通常是无损的",
                "需要重启客户端",
                "数据丢失"
            ],
            answer: 1,
            rationale: "Broker 扩容通常是无损的，不会影响现有服务。"
        },
        {
            id: "pulsar-w18-1-q10",
            question: "什么是负载均衡器的作用？",
            options: [
                "存储数据",
                "重新分配 Topic 所有权",
                "压缩消息",
                "加密通信"
            ],
            answer: 1,
            rationale: "负载均衡器负责重新分配 Topic 所有权，使负载在 Broker 间均衡。"
        },
        {
            id: "pulsar-w18-1-q11",
            question: "Kubernetes 上如何实现 Pulsar 自动伸缩？",
            options: [
                "无法实现",
                "配置 HPA 或使用 Pulsar Operator",
                "手动调整",
                "使用脚本"
            ],
            answer: 1,
            rationale: "在 Kubernetes 上可以配置 HPA 或使用 Pulsar Operator 实现自动伸缩。"
        },
        {
            id: "pulsar-w18-1-q12",
            question: "BookKeeper AutoRecovery 的作用是什么？",
            options: [
                "备份数据",
                "自动恢复故障 Bookie 的数据副本",
                "压缩数据",
                "删除旧数据"
            ],
            answer: 1,
            rationale: "AutoRecovery 自动检测故障 Bookie 并将其数据副本恢复到其他健康节点。"
        }
    ],
    "pulsar-w18-2": [
        {
            id: "pulsar-w18-2-q1",
            question: "Pulsar 集群需要备份哪些数据？",
            options: [
                "只有消息数据",
                "元数据、消息数据、配置文件",
                "只有配置",
                "只有元数据"
            ],
            answer: 1,
            rationale: "需要备份：ZooKeeper 元数据、BookKeeper 消息数据、配置文件。"
        },
        {
            id: "pulsar-w18-2-q2",
            question: "ZooKeeper 元数据如何备份？",
            options: [
                "复制日志文件",
                "使用 snapshot 或第三方工具",
                "导出 SQL",
                "无法备份"
            ],
            answer: 1,
            rationale: "可以使用 ZooKeeper 的 snapshot 功能或第三方工具备份元数据。"
        },
        {
            id: "pulsar-w18-2-q3",
            question: "什么是 RTO？",
            options: [
                "备份频率",
                "恢复时间目标",
                "数据保留时间",
                "复制延迟"
            ],
            answer: 1,
            rationale: "RTO（Recovery Time Objective）是恢复时间目标，即故障后恢复服务的目标时间。"
        },
        {
            id: "pulsar-w18-2-q4",
            question: "什么是 RPO？",
            options: [
                "恢复时间目标",
                "恢复点目标（可接受的数据丢失量）",
                "备份存储位置",
                "复制副本数"
            ],
            answer: 1,
            rationale: "RPO（Recovery Point Objective）是恢复点目标，即可接受的数据丢失量。"
        },
        {
            id: "pulsar-w18-2-q5",
            question: "为什么需要定期测试恢复？",
            options: [
                "法规要求",
                "确保备份有效，发现恢复时才会暴露的问题",
                "提高性能",
                "节省成本"
            ],
            answer: 1,
            rationale: "备份必须定期测试恢复，确保备份有效。很多问题只在恢复时才会发现。"
        },
        {
            id: "pulsar-w18-2-q6",
            question: "跨区域备份的主要挑战是什么？",
            options: [
                "配置复杂",
                "网络传输成本和延迟",
                "不支持",
                "数据格式不兼容"
            ],
            answer: 1,
            rationale: "跨区域备份的主要挑战是网络传输成本和延迟。"
        },
        {
            id: "pulsar-w18-2-q7",
            question: "增量备份相比全量备份的优势是什么？",
            options: [
                "恢复更简单",
                "减少备份时间和存储空间",
                "数据更完整",
                "不需要测试"
            ],
            answer: 1,
            rationale: "增量备份可以减少备份时间和存储空间，但恢复过程更复杂。"
        },
        {
            id: "pulsar-w18-2-q8",
            question: "灾难恢复计划应包括什么？",
            options: [
                "只有备份脚本",
                "RTO、RPO、恢复流程、定期演练",
                "只有恢复流程",
                "只有演练计划"
            ],
            answer: 1,
            rationale: "完整的灾难恢复计划应包括：RTO、RPO、恢复流程、定期演练。"
        },
        {
            id: "pulsar-w18-2-q9",
            question: "BookKeeper 如何保证数据安全？",
            options: [
                "单副本",
                "多副本机制",
                "压缩存储",
                "加密存储"
            ],
            answer: 1,
            rationale: "BookKeeper 通过多副本机制保证数据安全，数据写入多个 Bookie。"
        },
        {
            id: "pulsar-w18-2-q10",
            question: "配置文件为什么需要备份？",
            options: [
                "不需要备份",
                "便于恢复时使用正确的配置",
                "占用空间小",
                "法规要求"
            ],
            answer: 1,
            rationale: "配置文件需要备份，便于恢复时使用正确的配置，快速恢复服务。"
        },
        {
            id: "pulsar-w18-2-q11",
            question: "分布式系统备份的关键挑战是什么？",
            options: [
                "空间不足",
                "一致性（各组件备份时间点协调）",
                "网络带宽",
                "格式兼容"
            ],
            answer: 1,
            rationale: "分布式系统备份的关键挑战是一致性，各组件备份时间点需要协调。"
        },
        {
            id: "pulsar-w18-2-q12",
            question: "分层存储如何辅助备份策略？",
            options: [
                "无关系",
                "可以将数据卸载到对象存储，作为额外备份",
                "替代备份",
                "只用于压缩"
            ],
            answer: 1,
            rationale: "分层存储可以将数据卸载到对象存储，作为额外的数据备份策略。"
        }
    ],
    "pulsar-w18-3": [
        {
            id: "pulsar-w18-3-q1",
            question: "故障排查的一般方法论是什么？",
            options: [
                "直接重启",
                "收集信息 → 分析 → 假设 → 验证 → 修复",
                "查看日志",
                "询问用户"
            ],
            answer: 1,
            rationale: "系统性故障排查：收集信息 → 分析现象 → 提出假设 → 验证 → 修复。"
        },
        {
            id: "pulsar-w18-3-q2",
            question: "Pulsar 常见的问题类型有哪些？",
            options: [
                "只有连接问题",
                "连接、性能、数据、配置问题",
                "只有性能问题",
                "只有配置问题"
            ],
            answer: 1,
            rationale: "常见问题类型：连接问题、性能问题、数据问题、配置问题。"
        },
        {
            id: "pulsar-w18-3-q3",
            question: "排查问题的重要信息源是什么？",
            options: [
                "只有用户反馈",
                "日志、指标、配置",
                "只有指标",
                "只有日志"
            ],
            answer: 1,
            rationale: "日志、指标、配置都是排查问题的重要信息源。"
        },
        {
            id: "pulsar-w18-3-q4",
            question: "如何通过指标发现问题？",
            options: [
                "查看所有指标",
                "关注延迟上升、吞吐下降、错误率增加、资源异常",
                "只看 CPU",
                "只看内存"
            ],
            answer: 1,
            rationale: "关注关键指标异常：延迟上升、吞吐下降、错误率增加、资源使用异常。"
        },
        {
            id: "pulsar-w18-3-q5",
            question: "检查集群状态应使用什么工具？",
            options: [
                "只有日志",
                "pulsar-admin 命令",
                "只有 curl",
                "只有浏览器"
            ],
            answer: 1,
            rationale: "pulsar-admin 命令用于检查集群状态，是主要的管理工具。"
        },
        {
            id: "pulsar-w18-3-q6",
            question: "间歇性问题的排查难点是什么？",
            options: [
                "日志太多",
                "难以复现，需要持续收集数据等待再次发生",
                "配置复杂",
                "工具不足"
            ],
            answer: 1,
            rationale: "间歇性问题难以复现，需要持续收集数据，等待问题再次发生时分析。"
        },
        {
            id: "pulsar-w18-3-q7",
            question: "性能问题可能的原因有哪些？",
            options: [
                "只有硬件问题",
                "硬件、配置、应用逻辑、外部依赖",
                "只有配置问题",
                "只有应用问题"
            ],
            answer: 1,
            rationale: "性能问题可能有多个原因：硬件、配置、应用逻辑、外部依赖，需要综合分析。"
        },
        {
            id: "pulsar-w18-3-q8",
            question: "生产故障紧急响应需要什么准备？",
            options: [
                "无需准备",
                "预案、Runbook、值班机制",
                "只需要 Runbook",
                "只需要值班"
            ],
            answer: 1,
            rationale: "生产故障需要：预案、Runbook、值班机制，缩短故障恢复时间。"
        },
        {
            id: "pulsar-w18-3-q9",
            question: "bookkeeper shell 的作用是什么？",
            options: [
                "管理 Broker",
                "检查 BookKeeper 存储状态",
                "管理 ZooKeeper",
                "发送消息"
            ],
            answer: 1,
            rationale: "bookkeeper shell 用于检查和管理 BookKeeper 存储状态。"
        },
        {
            id: "pulsar-w18-3-q10",
            question: "pulsar-perf 工具的用途是什么？",
            options: [
                "查看日志",
                "性能测试",
                "管理 Topic",
                "配置集群"
            ],
            answer: 1,
            rationale: "pulsar-perf 用于 Pulsar 性能测试，测量吞吐量和延迟。"
        },
        {
            id: "pulsar-w18-3-q11",
            question: "什么是 Runbook？",
            options: [
                "代码仓库",
                "记录排查和修复步骤的操作手册",
                "日志文件",
                "配置文件"
            ],
            answer: 1,
            rationale: "Runbook 是记录常见问题排查和修复步骤的操作手册。"
        },
        {
            id: "pulsar-w18-3-q12",
            question: "分布式排查的难点是什么？",
            options: [
                "日志格式不同",
                "问题可能出在任意环节，需要逐步定位",
                "工具太多",
                "语言不同"
            ],
            answer: 1,
            rationale: "分布式系统问题可能出在 Broker、BookKeeper、ZooKeeper、客户端任意环节，需要逐步定位。"
        }
    ]
}
