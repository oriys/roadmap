import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week16Guides: Record<string, LessonGuide> = {
    "w16-1": {
        lessonId: "w16-1",
        background: [
            "【etcdctl 快照备份】官方文档：使用'ETCDCTL_API=3 etcdctl --endpoints=127.0.0.1:2379 snapshot save backup.db'创建快照。快照可从运行中的成员创建'without affecting performance'——不影响性能。也可直接复制 member/snap/db 文件但需要停止 etcd。",
            "【etcdutl 恢复流程】官方文档：恢复使用 etcdutl——'etcdutl snapshot restore backup.db --data-dir=/var/lib/etcd'。恢复时需指定'--name'、'--initial-cluster'、'--initial-cluster-token'、'--initial-advertise-peer-urls'参数。恢复会创建新集群 ID，覆盖旧成员信息。",
            "【版本与集群规模】官方文档：生产环境推荐'3.4.22+ and 3.5.6+'版本。集群应使用奇数成员（3, 5, 7），可容忍'(N-1)/2 permanent member failures'——N 成员集群可承受 (N-1)/2 个永久故障。",
            "【维护操作】官方文档：Compaction'drops all information about keys superseded prior to a given keyspace revision'——压缩删除旧版本数据。Defragmentation'blocks the system from reading and writing data while rebuilding'——碎片整理会阻塞读写。Space quota 超出时集群进入'maintenance mode which only accepts key reads and deletes'。",
            "【工具分工】官方文档：etcdctl 用于'network operations and day-to-day management'——网络操作和日常管理；etcdutl 用于'data file operations (migration, defragmentation, restoration, validation)'——数据文件操作。恢复快照必须使用 etcdutl。"
        ],
        keyDifficulties: [
            "【恢复前置步骤】官方文档：恢复前必须'Stop the kube-apiserver'停止 API Server。完整流程：停止 kube-apiserver → 恢复快照 → 启动 etcd → 重启 kube-apiserver'to reconnect to etcd'重新连接 etcd。",
            "【Revision Bump 机制】官方恢复文档：针对 Kubernetes 场景使用'--bump-revision 1000000000 --mark-compacted'参数。这解决'controllers using informers require revision bumping to avoid inconsistent behavior'——控制器使用 informer 需要 revision 跳跃避免不一致。",
            "【快照完整性验证】官方文档：使用'etcdutl snapshot status snapshot.db -w table'验证快照状态。从 etcdctl 创建的快照包含'hash checks'；直接复制的 db 文件需要恢复时添加'--skip-hash-check'跳过哈希检查。",
            "【Space Quota 告警】官方维护文档：etcd 默认限制存储空间，超出 quota 时'raises a cluster-wide alarm that puts the cluster into a maintenance mode'——触发集群范围告警进入维护模式，只接受读取和删除操作。通过'--quota-backend-bytes'配置限制。",
            "【多成员恢复要点】官方文档：多成员集群恢复时每个成员使用相同快照但'different --name and --initial-cluster parameters'——不同的 name 和 initial-cluster 参数。恢复后形成新集群，需更新其他组件的 etcd 连接配置。"
        ],
        handsOnPath: [
            "执行 etcd 快照备份：使用 etcdctl snapshot save backup.db --endpoints --cacert --cert --key。验证快照：etcdctl snapshot status backup.db。理解各参数的含义。",
            "模拟灾难恢复：在测试集群中创建一些资源（Deployment、ConfigMap）。执行快照备份。删除这些资源。使用 etcdutl snapshot restore 恢复。验证资源恢复。",
            "配置自动备份：编写 CronJob 定期执行 etcd 备份。将备份存储到外部存储（S3、GCS）。配置备份保留策略（如保留 7 天）。监控备份任务状态。",
            "使用 Velero 备份集群：安装 Velero 并配置存储后端。创建 Backup 资源备份整个集群或特定命名空间。模拟灾难后用 Restore 恢复。对比 etcd 快照和 Velero 的差异。",
            "建立灾备演练流程：文档化备份和恢复步骤。定期（如每季度）执行恢复演练。测量实际 RTO。记录演练问题并改进流程。"
        ],
        selfCheck: [
            "etcd 在 Kubernetes 中存储什么数据？为什么 etcd 备份对灾备至关重要？",
            "etcdctl snapshot save 和 etcdutl snapshot restore 的区别是什么？各自适用于什么场景？",
            "恢复 etcd 快照后，为什么 Kubernetes 对象可能与实际状态不一致？控制器如何处理？",
            "设计一个 etcd 备份策略需要考虑哪些因素？如何平衡 RPO/RTO 与成本？",
            "除了 etcd 数据，完整的集群灾备还需要备份什么？Velero 与 etcd 快照的差异是什么？"
        ],
        extensions: [
            "研究 etcd 的 Raft 共识算法，了解多成员集群如何保证数据一致性，以及成员故障时的行为。",
            "探索 etcd 的性能调优，包括磁盘 IOPS 要求、网络延迟影响、压缩和碎片整理。",
            "学习 Velero 的高级功能，包括增量备份、跨集群迁移、Hooks 和资源过滤。",
            "研究多集群联邦场景下的灾备策略，了解如何实现跨区域的高可用。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
            "https://etcd.io/docs/v3.5/op-guide/recovery/",
            "https://etcd.io/docs/v3.5/op-guide/maintenance/"
        ]
    },
    "w16-2": {
        lessonId: "w16-2",
        background: [
            "Kubernetes 故障排查需要系统性思维：从表象定位根因。常见问题分层：应用层（Pod 不启动、CrashLoopBackOff）、服务层（Service 不通、Ingress 配置错误）、节点层（节点 NotReady、资源不足）、网络层（Pod 间不通、DNS 解析失败）。",
            "Pod 故障排查是最常见场景。关键命令：kubectl describe pod（查看事件和状态）、kubectl logs（查看容器日志）、kubectl exec（进入容器调试）。常见问题：镜像拉取失败、资源不足、健康检查失败、配置错误。",
            "Service 和网络故障排查：验证 Service selector 与 Pod label 匹配；检查 Endpoints 是否有后端 Pod；测试 Pod 内部 DNS 解析（nslookup service-name）；使用 kubectl port-forward 绑定调试。",
            "节点故障排查：kubectl describe node 查看 Conditions 和 Events；检查 kubelet 日志（journalctl -u kubelet）；验证容器运行时状态（crictl）；检查系统资源（CPU、内存、磁盘、inode）。",
            "高效排查需要可观测性基础设施：集中日志（Loki/ELK）快速搜索；指标监控（Prometheus）发现异常；分布式追踪（Jaeger）定位链路问题。没有可观测性基础设施，排查效率会大大降低。"
        ],
        keyDifficulties: [
            "理解 Pod 生命周期和状态：Pending（调度中）、ContainerCreating（拉取镜像/挂载卷）、Running（运行中）、CrashLoopBackOff（反复崩溃）。不同状态指向不同问题域。",
            "区分应用问题和平台问题：应用 bug 导致的崩溃 vs 资源限制导致的 OOMKilled vs 配置错误导致的启动失败。需要结合日志和 describe 信息判断。",
            "网络故障的分层排查：先验证 Pod IP 可达性（ping）→ 再验证端口连通性（nc/telnet）→ 再验证 DNS 解析 → 最后验证应用协议。逐层缩小问题范围。",
            "使用 ephemeral container 调试：kubectl debug 可以向运行中的 Pod 注入临时调试容器（带有调试工具），而不需要修改原始 Pod 配置。特别适合 distroless 镜像调试。"
        ],
        handsOnPath: [
            "Pod 故障排查实战：创建一个故意配置错误的 Pod（错误镜像名、资源请求过大、错误的健康检查）。使用 describe/logs 定位问题。修复后验证。",
            "Service 连通性调试：创建 Deployment 和 Service。故意制造 selector 不匹配或端口配置错误。使用 kubectl get endpoints、kubectl exec curl 调试。修复后验证。",
            "DNS 问题排查：部署一个应用依赖 DNS 解析其他服务。在 Pod 内执行 nslookup/dig 测试。检查 CoreDNS 状态和配置。模拟 CoreDNS 故障和恢复。",
            "节点问题排查：模拟节点资源不足（磁盘满、内存压力）。观察节点 Condition 变化和 Pod 驱逐。使用 kubectl describe node 和 journalctl 分析。恢复后验证。",
            "建立排查手册：整理团队常见故障的排查步骤和解决方案。创建故障排查 Runbook。定期更新和培训团队成员。"
        ],
        selfCheck: [
            "Pod 处于 Pending 状态通常是什么原因？如何排查？",
            "如何区分容器 OOMKilled 和应用自身崩溃？各自的排查方向是什么？",
            "Service 的 Endpoints 为空可能是什么原因？如何排查和修复？",
            "节点 NotReady 的常见原因有哪些？如何逐步排查？",
            "kubectl debug 命令的用途是什么？什么场景下特别有用？"
        ],
        extensions: [
            "研究 Kubernetes Events 的保留和聚合机制，了解如何长期存储事件用于问题回溯。",
            "探索 kubectl-debug 和其他调试增强工具，了解社区提供的调试能力扩展。",
            "学习 Chaos Engineering（混沌工程），了解如何主动注入故障来验证系统韧性和排查能力。",
            "研究 AIOps 在 Kubernetes 故障排查中的应用，了解如何利用 AI 辅助异常检测和根因分析。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/tasks/debug/debug-application/",
            "https://kubernetes.io/docs/tasks/debug/debug-cluster/",
            "https://kubernetes.io/docs/reference/kubectl/cheatsheet/"
        ]
    },
    "w16-3": {
        lessonId: "w16-3",
        background: [
            "CKA（Certified Kubernetes Administrator）是 CNCF 官方认证，证明持有者具备 Kubernetes 集群管理能力。考试形式为在线实操，2 小时内在真实集群中完成任务。费用 445 美元，包含一次免费重考。",
            "CKA 考试覆盖五大领域：集群架构与安装配置（25%）、工作负载与调度（15%）、服务与网络（20%）、存储（10%）、故障排查（30%）。故障排查权重最高，需要重点准备。",
            "CKAD（Certified Kubernetes Application Developer）侧重应用开发者视角，包括 Pod 设计、配置管理、可观测性等。CKA 侧重管理员视角，包括集群安装、升级、备份恢复等。根据角色选择合适认证。",
            "考试环境提供 kubectl、官方文档访问（kubernetes.io/docs）和 kubectl 别名（k）。熟练使用 kubectl 和快速查阅文档是关键技能。不允许访问其他网站或使用 AI 工具。",
            "考试每季度更新以匹配最新 Kubernetes 版本。建议考试前使用与考试版本一致的集群练习。Linux Foundation 提供官方培训课程和模拟考试。"
        ],
        keyDifficulties: [
            "时间管理：2 小时完成约 15-20 道题，平均每题 6-8 分钟。遇到难题先跳过，保证简单题不丢分。使用考试环境的标记功能标记待回顾的题目。",
            "kubectl 熟练度：必须熟练使用 kubectl create/run/expose 快速创建资源。善用 --dry-run=client -o yaml 生成模板后编辑。熟记常用资源的简写（po/svc/deploy/ns）。",
            "文档检索效率：考试允许使用 kubernetes.io/docs，但时间有限。提前熟悉文档结构，知道常用配置（如 PV/PVC、NetworkPolicy、RBAC）在哪个页面。使用浏览器搜索功能。",
            "YAML 编辑效率：考试环境使用 vim/nano。熟练使用 vim 的复制粘贴、查找替换功能。避免 YAML 缩进错误（使用 :set paste）。kubectl explain 可以查看字段说明。"
        ],
        handsOnPath: [
            "建立练习环境：使用 kind/minikube/kubeadm 创建集群。确保版本与考试版本一致。配置 kubectl 别名和补全。练习在命令行完成所有操作。",
            "按考纲练习：针对五大领域逐一练习。集群安装（kubeadm init/join）、RBAC 配置、NetworkPolicy、PV/PVC、故障排查。使用 Killer.sh 或 KodeKloud 模拟题。",
            "限时模拟考试：设置 2 小时计时器完成模拟题。记录每道题耗时。分析时间分配，识别薄弱环节。重复练习直到能稳定完成。",
            "总结速查清单：整理常用 kubectl 命令速查表。记录常见操作的 YAML 模板。整理官方文档常用页面书签。考前复习这些材料。",
            "考试当天准备：提前测试网络和设备。确保摄像头和麦克风正常。准备身份证件。保持桌面整洁（考官会检查）。提前 15 分钟进入考试系统。"
        ],
        selfCheck: [
            "CKA 考试的五大领域和权重分别是什么？哪个领域权重最高？",
            "考试中如何快速创建 Kubernetes 资源？--dry-run=client -o yaml 有什么用？",
            "考试允许访问哪些资源？如何高效使用官方文档？",
            "你的 kubectl 命令熟练度如何？能否在 1 分钟内创建一个 Deployment 并暴露为 Service？",
            "如何管理考试时间？遇到难题应该如何处理？"
        ],
        extensions: [
            "了解 CKS（Certified Kubernetes Security Specialist）认证，这是 CKA 的进阶认证，专注安全领域。",
            "探索其他云原生认证：KCNA（入门级）、Prometheus Certified Associate、Istio Certified Expert 等。",
            "研究企业招聘对认证的要求，了解认证在职业发展中的价值。",
            "加入认证学习社区，与其他考生交流备考经验和考试技巧。"
        ],
        sourceUrls: [
            "https://www.cncf.io/training/certification/cka/",
            "https://www.cncf.io/training/certification/ckad/",
            "https://killer.sh/"
        ]
    },
    "w16-4": {
        lessonId: "w16-4",
        background: [
            "16 周的 Kubernetes 学习路线涵盖了从基础到进阶的核心知识：容器基础 → 核心资源 → 网络存储 → 部署策略 → GitOps → 可观测性 → 服务网格 → 安全 → Serverless → 故障排查。这是成为 Kubernetes 专家的系统路径。",
            "技能树可分为三个层次：基础能力（kubectl 操作、YAML 编写、核心资源理解）、进阶能力（网络深入、存储方案、安全加固）、专家能力（架构设计、性能调优、多集群管理）。持续学习是云原生领域的常态。",
            "Kubernetes 生态持续演进：Gateway API 替代 Ingress、Sidecar-less 服务网格、eBPF 网络、Wasm 扩展等新技术不断涌现。保持对新技术的关注和学习是长期发展的关键。",
            "职业路线多样：DevOps 工程师（CI/CD、自动化）、SRE（可靠性、可观测性）、平台工程师（内部开发平台）、云原生架构师（技术选型、架构设计）。根据兴趣和优势选择发展方向。",
            "社区参与是成长加速器：贡献开源项目（Kubernetes、CNCF 项目）、参加 KubeCon 等技术会议、撰写技术博客、在本地 Meetup 分享。社区活动既能学习也能建立人脉。"
        ],
        keyDifficulties: [
            "从「会用」到「精通」的鸿沟：能部署应用只是起点，理解底层原理（如调度算法、网络实现、存储驱动）才能处理复杂问题。需要持续深入学习和实践。",
            "技术债务与新技术的平衡：生产环境需要稳定，不能盲目追新。评估新技术时考虑：成熟度、社区活跃度、迁移成本、团队学习曲线。渐进式采用是常见策略。",
            "软技能的重要性：技术能力之外，沟通协作、项目管理、成本意识也是高级工程师的必备能力。能够向非技术人员解释技术决策的价值。",
            "持续学习的方法论：订阅技术博客/Newsletter、关注 CNCF 项目动态、定期参加技术会议、在工作中实践新知识。建立自己的知识管理系统。"
        ],
        handsOnPath: [
            "复习核心知识：回顾 16 周的学习内容，整理笔记和速查清单。识别掌握不够扎实的领域，针对性补强。",
            "构建个人项目：设计并实现一个完整的云原生项目（如微服务应用、平台工具）。应用学到的知识，在实践中发现不足。将项目开源展示能力。",
            "制定学习计划：根据职业目标制定 3-6 个月学习计划。选择 1-2 个深入方向（如安全、可观测性）。设定可衡量的目标（如获得认证、完成项目）。",
            "建立技术影响力：开始撰写技术博客记录学习和实践。在公司内部分享知识。参与开源社区讨论或贡献代码。",
            "规划职业发展：了解目标职位的能力要求。寻找 mentor 获取职业建议。持续提升技术和软技能。"
        ],
        selfCheck: [
            "回顾 16 周学习，你掌握最好和需要加强的领域分别是什么？",
            "你的职业目标是什么？需要什么技能来达成这个目标？",
            "你计划如何持续学习和跟进云原生技术的发展？",
            "你有参与开源社区或技术分享的计划吗？",
            "你的下一步行动是什么？（如考取认证、深入某领域、构建项目）"
        ],
        extensions: [
            "研究平台工程（Platform Engineering）的理念和实践，了解如何构建内部开发者平台。",
            "探索 Kubernetes 的边缘计算应用（KubeEdge、K3s），了解边缘场景的特殊需求。",
            "学习 FinOps 和云成本优化，了解如何在 Kubernetes 环境中管理和优化成本。",
            "关注 CNCF Landscape，了解云原生生态的全貌和技术选型思路。"
        ],
        sourceUrls: [
            "https://www.cncf.io/",
            "https://landscape.cncf.io/",
            "https://kubernetes.io/docs/home/"
        ]
    }
}

export const week16Quizzes: Record<string, QuizQuestion[]> = {
    "w16-1": [
        {
            id: "w16-1-q1",
            question: "官方文档描述的 etcd 快照备份命令是什么？",
            options: [
                "etcdctl backup save",
                "etcdutl snapshot save",
                "kubectl backup etcd",
                "'ETCDCTL_API=3 etcdctl snapshot save backup.db'——使用 etcdctl 创建快照"
            ],
            answer: 3,
            rationale: "官方文档：使用'ETCDCTL_API=3 etcdctl --endpoints=127.0.0.1:2379 snapshot save backup.db'创建快照。"
        },
        {
            id: "w16-1-q2",
            question: "官方文档对 etcdctl 和 etcdutl 分工的描述是什么？",
            options: [
                "etcdctl 用于'network operations'网络操作，etcdutl 用于'data file operations'数据文件操作",
                "两者功能完全相同",
                "etcdutl 已弃用",
                "etcdctl 只能读取数据"
            ],
            answer: 0,
            rationale: "官方文档：etcdctl 用于'network operations and day-to-day management'；etcdutl 用于'data file operations (migration, defragmentation, restoration, validation)'。"
        },
        {
            id: "w16-1-q3",
            question: "官方文档描述的 etcd 恢复工具是什么？",
            options: [
                "etcdctl",
                "kubectl",
                "etcdutl——用于'data file operations'包括恢复",
                "kubeadm"
            ],
            answer: 2,
            rationale: "官方文档：恢复使用 etcdutl——'etcdutl snapshot restore backup.db --data-dir=/var/lib/etcd'。etcdutl 处理数据文件操作。"
        },
        {
            id: "w16-1-q4",
            question: "官方文档对 etcd 恢复前置步骤的描述是什么？",
            options: [
                "直接恢复即可",
                "只需重启 kubelet",
                "必须'Stop the kube-apiserver'——停止 API Server",
                "删除所有 Pod"
            ],
            answer: 2,
            rationale: "官方文档：恢复前必须'Stop the kube-apiserver'。完整流程是停止 API Server → 恢复快照 → 启动 etcd → 重启 API Server。"
        },
        {
            id: "w16-1-q5",
            question: "官方文档推荐的 etcd 生产版本是什么？",
            options: [
                "任何版本都可以",
                "'3.4.22+ and 3.5.6+'——这些版本修复了重要问题",
                "只能使用 2.x 版本",
                "必须使用最新开发版"
            ],
            answer: 1,
            rationale: "官方文档：Minimum recommended production versions: '3.4.22+ and 3.5.6+'。"
        },
        {
            id: "w16-1-q6",
            question: "官方文档描述 etcd 集群可以容忍多少永久成员故障？",
            options: [
                "N/2 个故障",
                "所有成员都可以故障",
                "'(N-1)/2 permanent member failures'——N 成员集群可承受 (N-1)/2 个故障",
                "不能容忍任何故障"
            ],
            answer: 2,
            rationale: "官方文档：集群可容忍'(N-1)/2 permanent member failures'。3 成员集群可承受 1 个故障，5 成员可承受 2 个故障。"
        },
        {
            id: "w16-1-q7",
            question: "官方文档对 Compaction 操作的描述是什么？",
            options: [
                "增加存储空间",
                "'drops all information about keys superseded prior to a given keyspace revision'——删除旧版本数据",
                "备份数据",
                "加密数据"
            ],
            answer: 1,
            rationale: "官方文档：Compaction 'drops all information about keys superseded prior to a given keyspace revision'——压缩删除指定修订版之前被替代的键信息。"
        },
        {
            id: "w16-1-q8",
            question: "官方文档对 Defragmentation 操作的警告是什么？",
            options: [
                "完全无影响",
                "只影响写入",
                "'blocks the system from reading and writing data while rebuilding'——阻塞读写",
                "只影响网络"
            ],
            answer: 2,
            rationale: "官方文档警告：Defragmentation 'blocks the system from reading and writing data while rebuilding its states'——碎片整理时会阻塞读写。"
        },
        {
            id: "w16-1-q9",
            question: "官方文档描述 Space Quota 超出时 etcd 进入什么状态？",
            options: [
                "正常运行",
                "完全关闭",
                "'maintenance mode which only accepts key reads and deletes'——只接受读取和删除",
                "自动扩容"
            ],
            answer: 2,
            rationale: "官方文档：超出 quota 时'raises a cluster-wide alarm that puts the cluster into a maintenance mode which only accepts key reads and deletes'。"
        },
        {
            id: "w16-1-q10",
            question: "官方文档描述验证快照状态的命令是什么？",
            options: [
                "'etcdutl snapshot status snapshot.db -w table'——显示快照元数据",
                "etcdctl check",
                "kubectl describe",
                "无法验证"
            ],
            answer: 0,
            rationale: "官方文档：使用'etcdutl snapshot status snapshot.db -w table'验证快照状态，显示修订版、键数量等元数据。"
        },
        {
            id: "w16-1-q11",
            question: "官方文档对 Kubernetes 场景 revision bump 的描述是什么？",
            options: [
                "不需要任何特殊处理",
                "使用'--bump-revision --mark-compacted'避免控制器 informer 不一致行为",
                "只用于开发环境",
                "会导致数据丢失"
            ],
            answer: 1,
            rationale: "官方文档：针对 Kubernetes 使用'--bump-revision 1000000000 --mark-compacted'，因为'controllers using informers require revision bumping to avoid inconsistent behavior'。"
        },
        {
            id: "w16-1-q12",
            question: "官方文档对直接复制 db 文件恢复的说明是什么？",
            options: [
                "与 etcdctl 快照完全相同",
                "需要添加'--skip-hash-check'跳过哈希检查",
                "更推荐使用",
                "不支持此方式"
            ],
            answer: 1,
            rationale: "官方文档：从 etcdctl 创建的快照包含 hash checks；直接复制的 db 文件需要恢复时添加'--skip-hash-check'跳过哈希检查。"
        }
    ],
    "w16-2": [
        {
            id: "w16-2-q1",
            question: "Pod 处于 Pending 状态通常是什么原因？",
            options: [
                "容器运行正常",
                "调度失败（资源不足、节点选择器不匹配等）",
                "容器崩溃",
                "网络问题"
            ],
            answer: 1,
            rationale: "Pending 表示 Pod 已创建但未被调度到节点。常见原因：资源请求超过可用资源、节点选择器/亲和性不匹配、PVC 未绑定等。"
        },
        {
            id: "w16-2-q2",
            question: "查看 Pod 详细信息和事件的命令是什么？",
            options: [
                "kubectl logs",
                "kubectl describe pod",
                "kubectl get pod -o wide",
                "kubectl top pod"
            ],
            answer: 1,
            rationale: "kubectl describe pod 显示 Pod 的完整信息，包括状态、条件、事件等，是排查问题的第一步。"
        },
        {
            id: "w16-2-q3",
            question: "容器 OOMKilled 表示什么？",
            options: [
                "网络超时",
                "内存使用超过限制被 Linux OOM Killer 终止",
                "CPU 使用过高",
                "磁盘空间不足"
            ],
            answer: 1,
            rationale: "OOMKilled 表示容器内存使用超过了 resources.limits.memory，被 Linux OOM Killer 终止。需要增加内存限制或优化应用内存使用。"
        },
        {
            id: "w16-2-q4",
            question: "Service 的 Endpoints 为空通常是什么原因？",
            options: [
                "Service 配置正确",
                "selector 与 Pod label 不匹配或 Pod 未 Ready",
                "网络策略阻止",
                "DNS 问题"
            ],
            answer: 1,
            rationale: "Endpoints 为空意味着没有 Pod 匹配 Service 的 selector，或匹配的 Pod 未通过 readinessProbe。检查 label 和 Pod 状态。"
        },
        {
            id: "w16-2-q5",
            question: "在 Pod 内测试 DNS 解析的命令是什么？",
            options: [
                "ping service-name",
                "nslookup service-name 或 dig service-name",
                "curl service-name",
                "traceroute service-name"
            ],
            answer: 1,
            rationale: "nslookup 或 dig 可以测试 DNS 解析。如果解析失败，检查 CoreDNS 状态、Service 名称和命名空间。"
        },
        {
            id: "w16-2-q6",
            question: "CrashLoopBackOff 表示什么状态？",
            options: [
                "Pod 正在创建",
                "容器反复启动后崩溃，Kubernetes 延长重启间隔",
                "Pod 调度失败",
                "镜像拉取中"
            ],
            answer: 1,
            rationale: "CrashLoopBackOff 表示容器反复崩溃，Kubernetes 使用指数退避延长重启间隔（10s, 20s, 40s...）。需要查看日志找出崩溃原因。"
        },
        {
            id: "w16-2-q7",
            question: "kubectl debug 命令的用途是什么？",
            options: [
                "删除 Pod",
                "向运行中的 Pod 注入临时调试容器",
                "重启 Pod",
                "修改 Pod 配置"
            ],
            answer: 1,
            rationale: "kubectl debug 可以创建临时调试容器（ephemeral container），在不修改原 Pod 的情况下注入调试工具，特别适合 distroless 镜像。"
        },
        {
            id: "w16-2-q8",
            question: "节点 NotReady 的常见原因是什么？",
            options: [
                "Pod 太多",
                "kubelet 故障、资源耗尽、网络问题",
                "只有镜像拉取问题",
                "ConfigMap 配置错误"
            ],
            answer: 1,
            rationale: "NotReady 常见原因：kubelet 服务故障、资源耗尽（磁盘、内存、PID）、容器运行时故障、网络问题、证书过期等。"
        },
        {
            id: "w16-2-q9",
            question: "如何查看 kubelet 的日志？",
            options: [
                "kubectl logs kubelet",
                "journalctl -u kubelet",
                "cat /var/log/kubelet",
                "kubectl describe node"
            ],
            answer: 1,
            rationale: "kubelet 作为 systemd 服务运行，使用 journalctl -u kubelet 查看日志。添加 -f 可以实时跟踪。"
        },
        {
            id: "w16-2-q10",
            question: "ImagePullBackOff 表示什么？",
            options: [
                "镜像正在拉取",
                "镜像拉取失败，Kubernetes 延长重试间隔",
                "镜像已存在",
                "镜像正在构建"
            ],
            answer: 1,
            rationale: "ImagePullBackOff 表示镜像拉取失败（镜像不存在、仓库认证失败、网络问题），Kubernetes 使用退避策略延长重试间隔。"
        },
        {
            id: "w16-2-q11",
            question: "网络故障排查应该从哪里开始？",
            options: [
                "直接检查应用代码",
                "从 Pod IP 连通性开始，逐层验证端口、DNS、应用协议",
                "重启所有 Pod",
                "检查镜像版本"
            ],
            answer: 1,
            rationale: "网络排查分层进行：验证 Pod IP 可达（ping）→ 端口连通（nc/telnet）→ DNS 解析 → 应用协议。逐层缩小问题范围。"
        },
        {
            id: "w16-2-q12",
            question: "kubectl port-forward 的用途是什么？",
            options: [
                "永久暴露服务",
                "临时将本地端口转发到 Pod/Service，用于调试",
                "配置网络策略",
                "修改 Service 端口"
            ],
            answer: 1,
            rationale: "kubectl port-forward 创建临时隧道，将本地端口转发到集群内的 Pod 或 Service，方便在本地调试而无需暴露服务。"
        },
        {
            id: "w16-2-q13",
            question: "如何查看节点的资源使用情况？",
            options: [
                "kubectl logs node",
                "kubectl describe node 或 kubectl top node",
                "kubectl get node -o wide",
                "kubectl exec node"
            ],
            answer: 1,
            rationale: "kubectl describe node 显示详细信息包括 Capacity 和 Allocatable。kubectl top node 显示实时 CPU 和内存使用（需要 metrics-server）。"
        },
        {
            id: "w16-2-q14",
            question: "crictl 工具的用途是什么？",
            options: [
                "管理 Kubernetes API",
                "调试容器运行时（containerd/CRI-O）",
                "管理 Helm Charts",
                "配置网络"
            ],
            answer: 1,
            rationale: "crictl 是 CRI（Container Runtime Interface）的客户端工具，用于调试和管理 containerd/CRI-O 容器运行时。"
        },
        {
            id: "w16-2-q15",
            question: "高效故障排查需要什么基础设施支持？",
            options: [
                "只需要 kubectl",
                "集中日志、指标监控、分布式追踪",
                "只需要更多节点",
                "只需要更大的磁盘"
            ],
            answer: 1,
            rationale: "可观测性基础设施大大提高排查效率：集中日志（Loki/ELK）快速搜索、指标（Prometheus）发现异常、追踪（Jaeger）定位链路问题。"
        }
    ],
    "w16-3": [
        {
            id: "w16-3-q1",
            question: "CKA 考试的时长是多少？",
            options: [
                "1 小时",
                "2 小时",
                "3 小时",
                "4 小时"
            ],
            answer: 1,
            rationale: "CKA 考试时长为 2 小时，需要在真实集群环境中完成约 15-20 道实操题目。时间管理是关键技能。"
        },
        {
            id: "w16-3-q2",
            question: "CKA 考试中权重最高的领域是什么？",
            options: [
                "集群架构（25%）",
                "工作负载（15%）",
                "故障排查（30%）",
                "存储（10%）"
            ],
            answer: 2,
            rationale: "故障排查占 30% 权重最高，其次是集群架构（25%）和服务网络（20%）。备考时应重点关注故障排查。"
        },
        {
            id: "w16-3-q3",
            question: "CKA 考试中可以使用什么资源？",
            options: [
                "任何网站",
                "只有 kubernetes.io/docs 官方文档",
                "ChatGPT",
                "Google 搜索"
            ],
            answer: 1,
            rationale: "考试只允许访问 kubernetes.io/docs 和相关子域名。不能使用 AI 工具、搜索引擎或其他网站。需要熟悉官方文档结构。"
        },
        {
            id: "w16-3-q4",
            question: "--dry-run=client -o yaml 参数的用途是什么？",
            options: [
                "直接创建资源",
                "生成资源 YAML 模板而不实际创建",
                "删除资源",
                "更新资源"
            ],
            answer: 1,
            rationale: "--dry-run=client 不实际创建资源，-o yaml 输出 YAML 格式。组合使用可以快速生成模板后编辑，是考试中的常用技巧。"
        },
        {
            id: "w16-3-q5",
            question: "CKA 和 CKAD 的主要区别是什么？",
            options: [
                "没有区别",
                "CKA 侧重集群管理，CKAD 侧重应用开发",
                "CKAD 更难",
                "CKA 只考理论"
            ],
            answer: 1,
            rationale: "CKA 侧重管理员视角（集群安装、升级、备份）；CKAD 侧重开发者视角（Pod 设计、配置、可观测性）。根据角色选择。"
        },
        {
            id: "w16-3-q6",
            question: "考试中遇到难题应该怎么处理？",
            options: [
                "必须完成每道题",
                "先跳过标记，保证简单题不丢分",
                "放弃整个考试",
                "花更多时间在难题上"
            ],
            answer: 1,
            rationale: "时间有限，遇到难题先跳过并标记，优先完成有把握的题目。最后回头处理难题，避免在一道题上花费过多时间。"
        },
        {
            id: "w16-3-q7",
            question: "CKA 考试费用是多少？包含什么？",
            options: [
                "100 美元",
                "445 美元，包含一次免费重考",
                "1000 美元",
                "免费"
            ],
            answer: 1,
            rationale: "CKA 考试费用 445 美元，包含一次免费重考机会。可以关注 Linux Foundation 的促销活动获取折扣。"
        },
        {
            id: "w16-3-q8",
            question: "kubectl 常用资源简写 po、svc、deploy 分别代表什么？",
            options: [
                "pods、services、deployments",
                "podTemplate、serviceAccount、deployment",
                "policy、secret、daemonset",
                "pod、service、daemon"
            ],
            answer: 0,
            rationale: "熟记常用简写节省时间：po=pods, svc=services, deploy=deployments, ns=namespaces, cm=configmaps, pv=persistentvolumes 等。"
        },
        {
            id: "w16-3-q9",
            question: "如何快速查看 YAML 字段说明？",
            options: [
                "只能查文档",
                "kubectl explain 资源.字段",
                "kubectl describe",
                "kubectl get -o yaml"
            ],
            answer: 1,
            rationale: "kubectl explain pod.spec.containers 可以查看字段说明和类型，支持递归（--recursive）。考试中可以快速确认字段格式。"
        },
        {
            id: "w16-3-q10",
            question: "考试前应该如何准备环境？",
            options: [
                "不需要准备",
                "测试网络、摄像头、身份证件，保持桌面整洁",
                "只需要检查网络",
                "只需要准备笔记"
            ],
            answer: 1,
            rationale: "考前准备：测试网络稳定性、摄像头和麦克风正常、准备有效身份证件、保持桌面整洁（考官会检查环境）、提前 15 分钟进入。"
        },
        {
            id: "w16-3-q11",
            question: "如何在 vim 中避免 YAML 缩进问题？",
            options: [
                "不使用 vim",
                "使用 :set paste 进入粘贴模式",
                "使用 Tab 键",
                "不需要任何设置"
            ],
            answer: 1,
            rationale: ":set paste 禁用自动缩进，避免粘贴 YAML 时格式错乱。粘贴完成后 :set nopaste 恢复正常模式。"
        },
        {
            id: "w16-3-q12",
            question: "CKA 考试多久更新一次以匹配 Kubernetes 版本？",
            options: [
                "每月",
                "每季度",
                "每年",
                "从不更新"
            ],
            answer: 1,
            rationale: "CKA 考试每季度更新以匹配最新 Kubernetes 版本。备考时确保使用与考试版本一致的集群练习。"
        },
        {
            id: "w16-3-q13",
            question: "Killer.sh 是什么？",
            options: [
                "考试管理系统",
                "CKA/CKAD 模拟考试平台",
                "Kubernetes 安装工具",
                "监控系统"
            ],
            answer: 1,
            rationale: "Killer.sh 是官方合作的模拟考试平台，提供与真实考试相似的环境和题目。购买考试后会获得模拟考试访问权限。"
        },
        {
            id: "w16-3-q14",
            question: "考试中快速创建 Deployment 的命令是什么？",
            options: [
                "kubectl apply -f deployment.yaml",
                "kubectl create deployment <name> --image=<image>",
                "kubectl run deployment",
                "kubectl generate deployment"
            ],
            answer: 1,
            rationale: "kubectl create deployment nginx --image=nginx 快速创建 Deployment。添加 --replicas 设置副本数，结合 --dry-run=client -o yaml 生成模板。"
        },
        {
            id: "w16-3-q15",
            question: "获得 CKA 认证后有效期是多久？",
            options: [
                "永久有效",
                "2 年",
                "3 年",
                "1 年"
            ],
            answer: 2,
            rationale: "CKA 认证有效期为 3 年。到期后需要重新考试以保持认证有效。建议在有效期内关注技术发展和实践。"
        }
    ],
    "w16-4": [
        {
            id: "w16-4-q1",
            question: "16 周学习路线从哪里开始，到哪里结束？",
            options: [
                "直接学习服务网格",
                "从容器基础开始，到故障排查和认证冲刺结束",
                "从安全开始",
                "只学习 kubectl"
            ],
            answer: 1,
            rationale: "系统学习路径：容器基础 → 核心资源 → 网络存储 → 部署策略 → GitOps → 可观测性 → 服务网格 → 安全 → Serverless → 故障排查。"
        },
        {
            id: "w16-4-q2",
            question: "Kubernetes 技能可以分为哪几个层次？",
            options: [
                "只有基础层",
                "基础能力、进阶能力、专家能力",
                "入门和高级",
                "理论和实践"
            ],
            answer: 1,
            rationale: "技能分三层：基础能力（kubectl、YAML、核心资源）、进阶能力（网络深入、存储、安全）、专家能力（架构设计、性能调优、多集群）。"
        },
        {
            id: "w16-4-q3",
            question: "云原生领域的常见职业路线有哪些？",
            options: [
                "只有一种路线",
                "DevOps、SRE、平台工程师、云原生架构师",
                "只能做开发",
                "只能做运维"
            ],
            answer: 1,
            rationale: "常见职业路线：DevOps（CI/CD、自动化）、SRE（可靠性、可观测性）、平台工程师（内部平台）、云原生架构师（技术选型、架构设计）。"
        },
        {
            id: "w16-4-q4",
            question: "如何持续跟进云原生技术的发展？",
            options: [
                "不需要学习新技术",
                "订阅技术博客、关注 CNCF 项目、参加技术会议、实践新知识",
                "只看书",
                "只等公司培训"
            ],
            answer: 1,
            rationale: "持续学习方法：订阅技术博客/Newsletter、关注 CNCF 项目动态、参加 KubeCon 等会议、在工作中实践、建立知识管理系统。"
        },
        {
            id: "w16-4-q5",
            question: "CNCF Landscape 的作用是什么？",
            options: [
                "安装 Kubernetes",
                "展示云原生生态全貌，帮助技术选型",
                "监控集群",
                "备份数据"
            ],
            answer: 1,
            rationale: "CNCF Landscape（landscape.cncf.io）展示云原生生态系统全貌，包括各类项目、产品和服务，是了解生态和技术选型的参考。"
        },
        {
            id: "w16-4-q6",
            question: "参与开源社区有什么好处？",
            options: [
                "浪费时间",
                "学习技术、建立人脉、提升影响力",
                "只能提交代码",
                "需要付费"
            ],
            answer: 1,
            rationale: "社区参与的好处：学习前沿技术、与专家交流、建立专业人脉、提升技术影响力、为职业发展积累资本。"
        },
        {
            id: "w16-4-q7",
            question: "平台工程（Platform Engineering）关注什么？",
            options: [
                "只关注代码编写",
                "构建内部开发者平台，提升开发者体验和效率",
                "只关注网络",
                "只关注安全"
            ],
            answer: 1,
            rationale: "平台工程专注于构建内部开发者平台（IDP），提供自助服务能力，让开发者能够高效地部署和运维应用，减少对运维团队的依赖。"
        },
        {
            id: "w16-4-q8",
            question: "评估新技术时应该考虑什么因素？",
            options: [
                "只看是否流行",
                "成熟度、社区活跃度、迁移成本、团队学习曲线",
                "只看性能",
                "只看价格"
            ],
            answer: 1,
            rationale: "评估新技术考虑：成熟度和稳定性、社区活跃度和支持、迁移成本和兼容性、团队学习曲线、与现有技术栈的集成。"
        },
        {
            id: "w16-4-q9",
            question: "高级工程师除了技术能力还需要什么？",
            options: [
                "只需要技术",
                "沟通协作、项目管理、成本意识等软技能",
                "只需要证书",
                "只需要经验"
            ],
            answer: 1,
            rationale: "高级工程师需要软技能：与团队和利益相关者沟通、项目规划和进度管理、成本意识、技术决策的表达能力。"
        },
        {
            id: "w16-4-q10",
            question: "FinOps 在 Kubernetes 环境中关注什么？",
            options: [
                "代码质量",
                "云成本管理和优化",
                "网络安全",
                "应用性能"
            ],
            answer: 1,
            rationale: "FinOps（Financial Operations）关注云成本管理：资源使用可视化、成本分配、优化建议、预算控制。在 Kubernetes 中包括资源请求优化、Spot 实例使用等。"
        },
        {
            id: "w16-4-q11",
            question: "Kubernetes 生态中正在演进的技术趋势包括什么？",
            options: [
                "没有任何变化",
                "Gateway API、Sidecar-less 服务网格、eBPF、Wasm 扩展",
                "只有容器",
                "只有虚拟机"
            ],
            answer: 1,
            rationale: "技术趋势：Gateway API 替代 Ingress、Ambient Mesh（Sidecar-less）、eBPF 网络和安全、WebAssembly 扩展、GitOps 普及等。"
        },
        {
            id: "w16-4-q12",
            question: "从「会用」到「精通」的关键是什么？",
            options: [
                "只需要更多时间",
                "理解底层原理，处理复杂问题",
                "只需要更多证书",
                "只需要更多工具"
            ],
            answer: 1,
            rationale: "精通需要理解原理：调度算法如何工作、网络实现细节、存储驱动机制等。只有理解原理才能在复杂问题面前游刃有余。"
        },
        {
            id: "w16-4-q13",
            question: "建立技术影响力的方式有哪些？",
            options: [
                "只在公司内工作",
                "撰写博客、技术分享、开源贡献、社区活动",
                "只需要更高职位",
                "不需要建立影响力"
            ],
            answer: 1,
            rationale: "建立影响力：撰写技术博客记录学习和实践、在公司/社区做技术分享、参与开源项目贡献、加入技术 Meetup 和会议。"
        },
        {
            id: "w16-4-q14",
            question: "制定学习计划应该考虑什么？",
            options: [
                "学习所有技术",
                "根据职业目标选择 1-2 个深入方向，设定可衡量目标",
                "只跟随热点",
                "不需要计划"
            ],
            answer: 1,
            rationale: "学习计划应该：明确职业目标、选择 1-2 个深入方向（如安全、可观测性）、设定可衡量的目标（认证、项目）、3-6 个月周期。"
        },
        {
            id: "w16-4-q15",
            question: "学完 16 周课程后的下一步应该是什么？",
            options: [
                "停止学习",
                "复习巩固、构建项目、获取认证、持续学习",
                "换一个领域",
                "等待新课程"
            ],
            answer: 1,
            rationale: "下一步行动：复习核心知识巩固基础、构建个人项目实践、考取 CKA/CKAD 认证验证能力、持续学习跟进新技术、建立技术影响力。"
        }
    ]
}
