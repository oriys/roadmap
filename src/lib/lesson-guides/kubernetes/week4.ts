import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "w4-1": {
        lessonId: "w4-1",
        background: [
            "Deployment 是 Kubernetes 中最常用的无状态应用控制器，通过声明式定义期望状态，自动管理 Pod 的创建、更新和删除。Deployment 不直接管理 Pod，而是通过创建和管理 ReplicaSet 来间接控制 Pod。",
            "滚动更新（Rolling Update）是 Deployment 的核心能力：更新 Pod 模板时，Deployment 创建新 ReplicaSet，逐步扩容新 RS 并缩容旧 RS，保持服务不中断。maxUnavailable 和 maxSurge 参数控制更新节奏。",
            "Job 是一次性任务控制器，确保 Pod 运行到成功完成。Job 支持并行执行（parallelism）和多次完成（completions），适合批处理、数据迁移等场景。backoffLimit 控制失败重试次数。",
            "CronJob 是 Job 的定时调度器，基于 cron 表达式周期性创建 Job。concurrencyPolicy 控制并发行为（Allow/Forbid/Replace），startingDeadlineSeconds 定义错过调度的容忍时间。"
        ],
        keyDifficulties: [
            "ReplicaSet 命名与 pod-template-hash：Deployment 创建的 ReplicaSet 名称格式为 [deployment-name]-[hash]，hash 由 Pod 模板计算得出。更新 Pod 模板会生成新 hash，触发创建新 ReplicaSet。",
            "滚动更新参数：maxUnavailable 定义更新时最多有多少 Pod 不可用（可以是数字或百分比），maxSurge 定义可以超出期望副本数的 Pod 数量。两者共同决定更新速度和资源占用。",
            "rollout 命令族：kubectl rollout status（查看更新进度）、kubectl rollout history（查看历史版本）、kubectl rollout undo（回滚到上一版本或指定版本）、kubectl rollout pause/resume（暂停/恢复更新）。",
            "Job 完成模式：NonIndexed（默认，任意 Pod 完成即计入）和 Indexed（每个 Pod 有唯一索引，适合分布式计算）。restartPolicy 只能是 Never 或 OnFailure，不能是 Always。"
        ],
        handsOnPath: [
            "创建一个 Deployment 并使用 kubectl set image 更新镜像版本，用 kubectl rollout status 观察滚动更新过程，用 kubectl get rs 查看新旧 ReplicaSet 的副本数变化。",
            "使用 kubectl rollout undo 回滚 Deployment，用 kubectl rollout history 查看 revision 历史，尝试回滚到指定版本（--to-revision=N）。",
            "创建一个 Job 运行批处理任务（如计算 π），设置 backoffLimit 和 completions，观察 Pod 完成后的状态。",
            "创建一个 CronJob 每分钟运行一次，观察 Job 的自动创建，测试 concurrencyPolicy: Forbid 防止并发执行。"
        ],
        selfCheck: [
            "Deployment 和 ReplicaSet 的关系是什么？为什么不直接使用 ReplicaSet？",
            "滚动更新时 maxUnavailable 和 maxSurge 各自控制什么？如何设置才能实现零停机更新？",
            "如何查看 Deployment 的历史版本？如何回滚到指定版本？",
            "Job 的 completions 和 parallelism 参数分别控制什么？restartPolicy 为什么不能是 Always？",
            "CronJob 的 concurrencyPolicy 三个选项各是什么含义？startingDeadlineSeconds 的作用是什么？"
        ],
        extensions: [
            "研究 Deployment 的 .spec.revisionHistoryLimit 参数，了解如何控制保留的历史 ReplicaSet 数量以节省资源。",
            "探索 Indexed Job 模式，了解如何通过 JOB_COMPLETION_INDEX 环境变量在 Pod 中获取索引，实现分布式任务分片。",
            "学习 Job 的 TTL 机制（ttlSecondsAfterFinished），了解如何自动清理已完成的 Job 和 Pod。",
            "对比 Deployment 与 StatefulSet 的更新策略差异，理解有状态应用的特殊更新需求（如有序更新、保持身份）。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
            "https://kubernetes.io/docs/concepts/workloads/controllers/job/",
            "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "w4-1": [
        {
            id: "w4-1-q1",
            question: "Deployment 如何管理 Pod？",
            options: [
                "直接创建和删除 Pod",
                "通过创建和管理 ReplicaSet 间接控制 Pod",
                "通过 kubelet 管理 Pod",
                "通过 Service 管理 Pod"
            ],
            answer: 1,
            rationale: "Deployment 不直接管理 Pod，而是创建 ReplicaSet，由 ReplicaSet 负责维护指定数量的 Pod 副本。"
        },
        {
            id: "w4-1-q2",
            question: "滚动更新时，maxUnavailable 参数的作用是什么？",
            options: [
                "定义可以超出期望副本数的 Pod 数量",
                "定义更新时最多有多少 Pod 处于不可用状态",
                "定义更新的超时时间",
                "定义失败重试次数"
            ],
            answer: 1,
            rationale: "maxUnavailable 限制更新过程中不可用的 Pod 数量上限，确保服务可用性。"
        },
        {
            id: "w4-1-q3",
            question: "什么操作会触发 Deployment 的滚动更新？",
            options: [
                "修改 replicas 数量",
                "修改 Pod 模板（如 image、labels、env）",
                "添加 annotation",
                "修改 Deployment 名称"
            ],
            answer: 1,
            rationale: "只有修改 .spec.template（Pod 模板）才会触发滚动更新，修改 replicas 只是扩缩容，不会创建新 ReplicaSet。"
        },
        {
            id: "w4-1-q4",
            question: "如何回滚 Deployment 到上一个版本？",
            options: [
                "kubectl rollback deployment",
                "kubectl rollout undo deployment/<name>",
                "kubectl revert deployment/<name>",
                "kubectl restore deployment/<name>"
            ],
            answer: 1,
            rationale: "kubectl rollout undo deployment/<name> 回滚到上一版本，可以加 --to-revision=N 回滚到指定版本。"
        },
        {
            id: "w4-1-q5",
            question: "ReplicaSet 名称中的 hash 是如何生成的？",
            options: [
                "随机生成",
                "根据 Pod 模板内容计算的哈希值",
                "根据创建时间生成",
                "用户手动指定"
            ],
            answer: 1,
            rationale: "pod-template-hash 是根据 Pod 模板内容计算的哈希值，确保每个唯一的 Pod 模板对应唯一的 ReplicaSet。"
        },
        {
            id: "w4-1-q6",
            question: "Job 的 completions 参数控制什么？",
            options: [
                "并行运行的 Pod 数量",
                "需要成功完成的 Pod 数量",
                "失败重试次数",
                "Job 的超时时间"
            ],
            answer: 1,
            rationale: "completions 定义 Job 需要多少个 Pod 成功完成才算整体完成，默认值是 1。"
        },
        {
            id: "w4-1-q7",
            question: "Job 的 restartPolicy 可以设置为哪些值？",
            options: [
                "Always、OnFailure、Never",
                "OnFailure 或 Never",
                "只能是 Never",
                "只能是 Always"
            ],
            answer: 1,
            rationale: "Job 的 restartPolicy 只能是 Never（失败时创建新 Pod）或 OnFailure（失败时在同一 Pod 中重启容器），不能是 Always。"
        },
        {
            id: "w4-1-q8",
            question: "backoffLimit 参数的作用是什么？",
            options: [
                "限制并行 Pod 数量",
                "限制 Job 失败重试次数",
                "限制 Job 运行时间",
                "限制 completions 数量"
            ],
            answer: 1,
            rationale: "backoffLimit 定义 Job 在判定失败前允许的 Pod 失败重试次数，默认值是 6。"
        },
        {
            id: "w4-1-q9",
            question: "CronJob 的 schedule 字段使用什么格式？",
            options: [
                "ISO 8601 时间格式",
                "标准 cron 表达式（5 个字段）",
                "Unix 时间戳",
                "自然语言描述"
            ],
            answer: 1,
            rationale: "CronJob 使用标准 cron 格式：分 时 日 月 周（如 '0 3 * * *' 表示每天凌晨 3 点）。"
        },
        {
            id: "w4-1-q10",
            question: "CronJob 的 concurrencyPolicy: Forbid 意味着什么？",
            options: [
                "允许多个 Job 并发运行",
                "如果上一个 Job 仍在运行，跳过新的调度",
                "用新 Job 替换正在运行的 Job",
                "禁止创建任何 Job"
            ],
            answer: 1,
            rationale: "Forbid 策略在前一个 Job 仍在运行时跳过新的调度，确保同时只有一个 Job 在运行。"
        },
        {
            id: "w4-1-q11",
            question: "如何查看 Deployment 的更新进度？",
            options: [
                "kubectl get deployment",
                "kubectl rollout status deployment/<name>",
                "kubectl describe pod",
                "kubectl logs deployment/<name>"
            ],
            answer: 1,
            rationale: "kubectl rollout status 实时显示 Deployment 的更新进度，直到更新完成或失败。"
        },
        {
            id: "w4-1-q12",
            question: "maxSurge: 25% 在 4 副本的 Deployment 中意味着什么？",
            options: [
                "最多有 1 个 Pod 不可用",
                "更新时最多可以有 5 个 Pod（4 + 1）同时运行",
                "更新速度为 25%",
                "保留 25% 的旧 Pod"
            ],
            answer: 1,
            rationale: "maxSurge: 25% 允许超出期望副本数 25%，4 副本时向上取整为 1，所以最多 5 个 Pod 同时运行。"
        },
        {
            id: "w4-1-q13",
            question: "Job 的 Indexed 完成模式有什么特点？",
            options: [
                "Pod 按字母顺序排列",
                "每个 Pod 有唯一的索引（0 到 completions-1）",
                "Pod 按创建时间排序",
                "只运行索引为 0 的 Pod"
            ],
            answer: 1,
            rationale: "Indexed 模式给每个 Pod 分配唯一索引，通过 JOB_COMPLETION_INDEX 环境变量暴露，适合分布式任务分片。"
        },
        {
            id: "w4-1-q14",
            question: "CronJob 的 startingDeadlineSeconds 的作用是什么？",
            options: [
                "Job 的最大运行时间",
                "错过调度后允许延迟启动的最大时间",
                "CronJob 的创建超时",
                "Pod 的启动超时"
            ],
            answer: 1,
            rationale: "startingDeadlineSeconds 定义错过调度时间后，在多少秒内仍然可以启动该次调度的 Job。"
        },
        {
            id: "w4-1-q15",
            question: "kubectl rollout pause 的用途是什么？",
            options: [
                "删除 Deployment",
                "暂停滚动更新，允许进行多次配置修改后再一起生效",
                "暂停 Pod 运行",
                "暂停 ReplicaSet"
            ],
            answer: 1,
            rationale: "pause 暂停 Deployment 的 rollout，可以进行多次修改而不触发多次滚动更新，修改完成后用 resume 恢复。"
        }
    ]
}
