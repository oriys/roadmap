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
            "【ImagePullBackOff 状态】官方文档：'ImagePullBackOff means that a container could not start because Kubernetes could not pull a container image (for reasons such as invalid image name, or pulling from a private registry without imagePullSecret)'——容器无法启动因为镜像拉取失败。BackOff 表示 Kubernetes 会以递增延迟持续重试，最大重试延迟 300 秒（5 分钟）。",
            "【Pod Pending 原因】官方文档：Pod 处于 Pending 表示无法调度到节点。常见原因包括'Insufficient resources'——资源不足（CPU/内存），需删除 Pod、调整资源请求或添加节点；'Using hostPort'——使用 hostPort 限制调度位置，建议使用 Service 替代。",
            "【Pod Waiting 状态】官方文档：Pod 已调度但无法运行，通常是镜像拉取问题。排查步骤：验证镜像名称正确、验证镜像在仓库中存在、手动执行'docker pull <image>'测试。如果是私有仓库，需配置 imagePullSecret。",
            "【Pod Terminating 卡住】官方文档：删除操作已发起但控制面无法移除 Pod，通常由于'Finalizers with blocking admission webhooks'——Finalizer 被 webhook 阻塞。检查 ValidatingWebhookConfiguration 和 MutatingWebhookConfiguration 是否对 pods UPDATE 操作有问题。",
            "【调试命令工作流】官方文档：系统化排查流程——1) 'kubectl describe pods ${POD_NAME}'查看状态、条件和事件；2) 检查 Container 状态（Running/Waiting/Terminated）；3) 查看最近重启信息；4) 如有调度器消息则分析调度失败原因。"
        ],
        keyDifficulties: [
            "【配置验证方法】官方文档：使用'kubectl apply --validate -f mypod.yaml'验证 Pod 清单。常见配置错误包括字段名拼写错误（如'commnd'而非'command'）、YAML 嵌套不正确、类型不匹配。对比期望配置与实际配置：'kubectl get pods/mypod -o yaml > mypod-on-apiserver.yaml'。",
            "【Service Endpoints 排查】官方文档：使用'kubectl get endpointslices -l kubernetes.io/service-name=${SERVICE_NAME}'查看 Service 端点。如果端点缺失，验证 Pod 选择器：'kubectl get pods --selector=name=nginx,type=frontend'。确认 Pod labels 匹配 selector，containerPort 匹配 Service targetPort。",
            "【私有仓库镜像拉取】官方文档：ImagePullBackOff 常因私有仓库认证失败。解决方案：创建 kubernetes.io/dockercfg 类型的 Secret，然后在 Pod spec 中引用'imagePullSecrets'。建议使用显式标签而非':latest'，生产环境使用镜像摘要'image@sha256:<hash>'保证版本一致。",
            "【Webhook 阻塞删除】官方文档：Pod 卡在 Terminating 状态时，检查'ValidatingWebhookConfiguration'和'MutatingWebhookConfiguration'是否阻塞。解决方案：更新 webhook 到最新版本、确保 mutating webhook 不修改不可变字段、确保 validating webhook 允许现有违规通过。",
            "【资源不足调度失败】官方文档：Pod Pending 且事件显示资源不足时，参考'Compute Resources document'。解决方案：删除不需要的 Pod 释放资源、调整 Pod 的资源请求（requests）、添加新节点扩展集群容量。"
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
            "https://kubernetes.io/docs/concepts/containers/images/#imagepullbackoff",
            "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/"
        ]
    },
    "w16-3": {
        lessonId: "w16-3",
        background: [
            "【CKA 认证定义】CNCF 官方：CKA（Certified Kubernetes Administrator）是'performance-based exam that tests your ability to deploy, manage, and troubleshoot Kubernetes clusters'——基于实操的考试，测试部署、管理和排错能力。费用 $445 USD，包含一次免费重考机会。",
            "【CKA 考试领域权重】官方课程大纲：五大领域——Cluster Architecture, Installation & Configuration（25%）、Workloads & Scheduling（15%）、Services & Networking（20%）、Storage（10%）、Troubleshooting（30%）。故障排查权重最高。",
            "【CKAD 认证定义】CNCF 官方：CKAD（Certified Kubernetes Application Developer）面向'application developers who want to demonstrate their ability to design, build, and deploy cloud-native applications for Kubernetes'——证明设计、构建和部署云原生应用的能力。",
            "【CKAD 考试领域权重】官方课程大纲：五大领域——Application Design and Build（20%）、Application Deployment（20%）、Application Observability and Maintenance（15%）、Application Environment, Configuration and Security（25%）、Services and Networking（20%）。",
            "【考试环境与规则】官方说明：考试采用'online proctored, performance-based test'——在线监考的实操测试。时间 2 小时，在真实 Kubernetes 集群中完成任务。允许访问 kubernetes.io/docs 官方文档，禁止访问其他网站。"
        ],
        keyDifficulties: [
            "【时间管理策略】考试技巧：2 小时完成约 15-20 道题，平均每题 6-8 分钟。遇到难题先跳过标记（flag for review），保证简单题不丢分。先完成高分值题目，最后回顾标记的题目。",
            "【kubectl 命令效率】官方文档：善用'kubectl create'和'kubectl run'快速创建资源。关键技巧：'--dry-run=client -o yaml'生成模板后编辑。熟记资源简写：po(pods)、svc(services)、deploy(deployments)、cm(configmaps)、ns(namespaces)。",
            "【文档检索技巧】考试规则：允许访问 kubernetes.io/docs 和相关子域名。提前熟悉文档结构，知道 PV/PVC、NetworkPolicy、RBAC 等常用配置的页面位置。使用浏览器 Ctrl+F 快速搜索关键词。",
            "【YAML 编辑效率】考试环境：使用 vim 或 nano 编辑器。关键 vim 技巧：':set paste'避免粘贴时缩进错乱、':set number'显示行号。使用'kubectl explain <resource>.<field>'查询字段格式。",
            "【CKA vs CKAD 选择】官方定位：CKA 侧重'Kubernetes administrator'——集群安装、升级、备份恢复、故障排查；CKAD 侧重'application developer'——Pod 设计、配置管理、部署策略。根据职业方向选择，可同时持有两个认证。"
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
            "https://github.com/cncf/curriculum"
        ]
    },
    "w16-4": {
        lessonId: "w16-4",
        background: [
            "【Kubernetes 文档学习路径】官方文档：学习路径分为五个阶段——Understand Kubernetes（理解核心概念）→ Try Kubernetes（动手实践教程）→ Set Up a K8s Cluster（搭建集群环境）→ Using Kubernetes（日常运维任务）→ Reference（API 和工具参考）。这是官方推荐的系统学习顺序。",
            "【五级认证体系】Linux Foundation 官方：Kubernetes 认证分五个级别——KCNA（Cloud Native Associate 基础）、KCSA（Security Associate 安全基础）、CKAD（Application Developer 应用开发）、CKA（Administrator 集群管理）、CKS（Security Specialist 安全专家，需要 CKA 前置）。",
            "【Kubestronaut 荣誉】Linux Foundation 官方：获得全部五项认证的专业人士可获得'Kubestronaut'称号，这是 Kubernetes 专业人士的最高荣誉，表明在云原生各领域的全面专业能力。",
            "【CNCF 社区活动类型】CNCF 官方：核心活动包括——KubeCon + CloudNativeCon（'gathering adopters and technologists from leading open source and cloud native communities'旗舰会议）、KCD（Kubernetes Community Days 社区日）、Co-Located Events（项目深度研讨）、Virtual Events（线上活动）。",
            "【社区参与价值】CNCF 官方：参与活动可获得——Access & Learning（深度学习云原生技术）、Community Building（与维护者和贡献者交流）、Career Development（招聘机会、演讲经验）、Influence（参与塑造云原生技术的未来）。"
        ],
        keyDifficulties: [
            "【学习路径选择】官方文档：Kubernetes 文档涵盖'current and previous 4 versions'——当前和前四个版本。学习时应选择与工作环境匹配的版本，避免版本差异导致的困惑。建议先完成 Tutorials 再深入 Concepts 和 Tasks。",
            "【认证路线规划】Linux Foundation 官方：CKS 需要'持有有效的 CKA 认证'作为前置条件。建议路径：KCNA（入门验证）→ CKA/CKAD（根据角色选择）→ CKS（安全专业方向）。每项认证有效期限不同，需要规划续证。",
            "【社区参与门槛】CNCF 官方：KCD Events 是'community-hosted, CNCF-supported local events'——本地社区活动，适合初次参与者。'Lower financial commitment for local events'降低参与门槛，可从本地活动开始，逐步参加 KubeCon。",
            "【技能到职业的转化】职业发展：Kubernetes 技能适用于多种角色——DevOps Engineer（CI/CD、自动化）、SRE（可靠性、可观测性）、Platform Engineer（内部开发者平台）、Cloud Native Architect（技术选型、架构设计）。需要根据兴趣和市场需求选择方向。",
            "【持续学习方法论】实践建议：建立个人知识管理系统——订阅 CNCF 官方博客和 Newsletter、关注 Kubernetes Enhancement Proposals (KEP)、定期参加线上/线下技术活动、在工作中实践新学到的知识。保持学习节奏是长期发展的关键。"
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
            "https://kubernetes.io/docs/home/",
            "https://kubernetes.io/training/",
            "https://www.cncf.io/events/"
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
            question: "官方文档对 ImagePullBackOff 状态的定义是什么？",
            options: [
                "镜像正在后台拉取",
                "镜像拉取成功等待启动",
                "'a container could not start because Kubernetes could not pull a container image'——容器无法启动因为镜像拉取失败",
                "镜像版本不兼容"
            ],
            answer: 2,
            rationale: "官方文档：'ImagePullBackOff means that a container could not start because Kubernetes could not pull a container image (for reasons such as invalid image name, or pulling from a private registry without imagePullSecret)'。"
        },
        {
            id: "w16-2-q2",
            question: "官方文档描述的 ImagePullBackOff 最大重试延迟是多少？",
            options: [
                "300 秒（5 分钟）——编译时固定的最大延迟",
                "60 秒",
                "600 秒",
                "无限制"
            ],
            answer: 0,
            rationale: "官方文档：ImagePullBackOff 的最大重试延迟是 300 秒（5 分钟），这是编译时固定的值。"
        },
        {
            id: "w16-2-q3",
            question: "官方文档描述的 Pod Pending 常见原因不包括哪个？",
            options: [
                "'Insufficient resources'——资源不足",
                "'Using hostPort'——使用 hostPort",
                "镜像拉取失败",
                "PVC 未绑定"
            ],
            answer: 2,
            rationale: "官方文档：Pod Pending 原因包括资源不足、hostPort 限制等调度问题。镜像拉取失败导致的是 Waiting 状态而非 Pending。"
        },
        {
            id: "w16-2-q4",
            question: "官方文档建议如何解决 hostPort 导致的调度问题？",
            options: [
                "增加节点数量",
                "使用 Service 对象替代 hostPort",
                "降低资源请求",
                "使用 DaemonSet"
            ],
            answer: 1,
            rationale: "官方文档：使用 hostPort 限制调度位置，'Consider using a Service object instead of hostPort'——建议使用 Service 替代。"
        },
        {
            id: "w16-2-q5",
            question: "官方文档描述的 Pod 卡在 Terminating 状态的原因是什么？",
            options: [
                "网络连接未断开",
                "容器进程未响应信号",
                "'Finalizers with blocking admission webhooks'——Finalizer 被 webhook 阻塞",
                "存储卷未卸载"
            ],
            answer: 2,
            rationale: "官方文档：Pod Terminating 卡住通常因为'Finalizers with blocking admission webhooks'，检查 ValidatingWebhookConfiguration 和 MutatingWebhookConfiguration。"
        },
        {
            id: "w16-2-q6",
            question: "官方文档建议的 Pod 调试第一步命令是什么？",
            options: [
                "kubectl logs",
                "kubectl exec",
                "kubectl get events",
                "'kubectl describe pods ${POD_NAME}'——查看状态、条件和事件"
            ],
            answer: 3,
            rationale: "官方文档：'Start by looking at the current state of the Pod and recent events with kubectl describe pods ${POD_NAME}'。"
        },
        {
            id: "w16-2-q7",
            question: "官方文档建议如何验证 Pod 配置是否正确？",
            options: [
                "直接部署观察结果",
                "使用'kubectl apply --validate -f mypod.yaml'验证清单",
                "检查 Pod 日志",
                "使用 kubectl diff"
            ],
            answer: 1,
            rationale: "官方文档：'Use kubectl apply --validate -f mypod.yaml to validate your pod manifest'——使用 --validate 参数验证配置。"
        },
        {
            id: "w16-2-q8",
            question: "官方文档列举的常见 YAML 配置错误不包括哪个？",
            options: [
                "字段名拼写错误（如'commnd'）",
                "YAML 嵌套不正确",
                "使用了错误的 API 版本",
                "类型不匹配"
            ],
            answer: 2,
            rationale: "官方文档列举的配置错误包括：字段名拼写错误（如'commnd'而非'command'）、YAML 嵌套不正确、类型不匹配。API 版本错误不在此列。"
        },
        {
            id: "w16-2-q9",
            question: "官方文档建议如何检查 Service 的端点？",
            options: [
                "kubectl describe service",
                "kubectl get pods",
                "'kubectl get endpointslices -l kubernetes.io/service-name=${SERVICE_NAME}'",
                "kubectl logs"
            ],
            answer: 2,
            rationale: "官方文档：使用'kubectl get endpointslices -l kubernetes.io/service-name=${SERVICE_NAME}'查看 Service 端点。"
        },
        {
            id: "w16-2-q10",
            question: "官方文档对私有仓库 ImagePullBackOff 的解决方案是什么？",
            options: [
                "使用公共镜像仓库",
                "在节点上预拉取镜像",
                "创建 imagePullSecret 并在 Pod spec 中引用",
                "修改 kubelet 配置"
            ],
            answer: 2,
            rationale: "官方文档：私有仓库需要创建 kubernetes.io/dockercfg 类型的 Secret，然后在 Pod spec 中通过 imagePullSecrets 引用。"
        },
        {
            id: "w16-2-q11",
            question: "官方文档建议生产环境使用什么格式指定镜像版本？",
            options: [
                "使用 latest 标签",
                "使用镜像摘要'image@sha256:<hash>'保证版本一致",
                "不指定标签",
                "使用日期标签"
            ],
            answer: 1,
            rationale: "官方文档：建议使用显式标签而非':latest'，生产环境使用镜像摘要'image@sha256:<hash>'保证版本一致。"
        },
        {
            id: "w16-2-q12",
            question: "官方文档描述 Service Endpoints 缺失时应验证什么？",
            options: [
                "网络策略配置",
                "DNS 解析是否正常",
                "Pod labels 匹配 selector 且 containerPort 匹配 targetPort",
                "Ingress 配置"
            ],
            answer: 2,
            rationale: "官方文档：如果端点缺失，验证'Pod labels match selector'且'containerPort matches Service targetPort'。"
        }
    ],
    "w16-3": [
        {
            id: "w16-3-q1",
            question: "CNCF 官方对 CKA 考试的定义是什么？",
            options: [
                "理论知识测试",
                "'performance-based exam that tests your ability to deploy, manage, and troubleshoot Kubernetes clusters'",
                "多选题考试",
                "口头问答考试"
            ],
            answer: 1,
            rationale: "CNCF 官方定义 CKA 为'performance-based exam that tests your ability to deploy, manage, and troubleshoot Kubernetes clusters'——基于实操的考试。"
        },
        {
            id: "w16-3-q2",
            question: "CKA 考试中权重最高的领域是什么？",
            options: [
                "Troubleshooting（30%）——故障排查",
                "Cluster Architecture（25%）",
                "Services & Networking（20%）",
                "Storage（10%）"
            ],
            answer: 0,
            rationale: "官方课程大纲：Troubleshooting 占 30% 权重最高，其次是 Cluster Architecture（25%）和 Services & Networking（20%）。"
        },
        {
            id: "w16-3-q3",
            question: "CKA 考试费用和重考政策是什么？",
            options: [
                "$395 USD，无重考机会",
                "$495 USD，两次重考",
                "$445 USD，包含一次免费重考",
                "$545 USD，无限重考"
            ],
            answer: 2,
            rationale: "CNCF 官方：CKA 考试费用 $445 USD，包含一次免费重考机会（one free retake）。"
        },
        {
            id: "w16-3-q4",
            question: "CKAD 考试面向什么人群？",
            options: [
                "系统管理员",
                "网络工程师",
                "数据库管理员",
                "'application developers who want to demonstrate their ability to design, build, and deploy cloud-native applications'"
            ],
            answer: 3,
            rationale: "CNCF 官方：CKAD 面向'application developers who want to demonstrate their ability to design, build, and deploy cloud-native applications for Kubernetes'。"
        },
        {
            id: "w16-3-q5",
            question: "CKA 考试中可以访问什么资源？",
            options: [
                "任何搜索引擎",
                "kubernetes.io/docs 官方文档",
                "Stack Overflow",
                "AI 工具"
            ],
            answer: 1,
            rationale: "考试规则：允许访问 kubernetes.io/docs 和相关子域名，禁止使用搜索引擎、AI 工具或其他网站。"
        },
        {
            id: "w16-3-q6",
            question: "CKAD 考试中权重最高的领域是什么？",
            options: [
                "Application Design and Build（20%）",
                "Application Deployment（20%）",
                "Application Environment, Configuration and Security（25%）",
                "Services and Networking（20%）"
            ],
            answer: 2,
            rationale: "官方课程大纲：Application Environment, Configuration and Security 占 25% 权重最高。"
        },
        {
            id: "w16-3-q7",
            question: "--dry-run=client -o yaml 参数组合的用途是什么？",
            options: [
                "删除资源并输出日志",
                "更新现有资源",
                "直接创建资源到集群",
                "生成资源 YAML 模板而不实际创建"
            ],
            answer: 3,
            rationale: "kubectl 技巧：--dry-run=client 不实际创建资源，-o yaml 输出 YAML 格式。组合使用可快速生成模板后编辑。"
        },
        {
            id: "w16-3-q8",
            question: "kubectl 资源简写 po、svc、deploy、cm 分别代表什么？",
            options: [
                "pods、services、deployments、configmaps",
                "policy、secret、daemon、cluster",
                "port、service、deployment、command",
                "podTemplate、serviceAccount、daemonset、certificate"
            ],
            answer: 0,
            rationale: "常用简写：po=pods, svc=services, deploy=deployments, cm=configmaps, ns=namespaces, pv=persistentvolumes。"
        },
        {
            id: "w16-3-q9",
            question: "如何使用 kubectl 查看 YAML 字段说明？",
            options: [
                "kubectl get -o wide",
                "kubectl describe --explain",
                "kubectl explain <resource>.<field>",
                "kubectl help yaml"
            ],
            answer: 2,
            rationale: "kubectl explain pod.spec.containers 可查看字段说明和类型，支持 --recursive 递归显示所有子字段。"
        },
        {
            id: "w16-3-q10",
            question: "在 vim 中避免 YAML 粘贴缩进问题的命令是什么？",
            options: [
                ":set autoindent",
                ":set paste",
                ":set tabstop=2",
                ":set expandtab"
            ],
            answer: 1,
            rationale: ":set paste 禁用自动缩进，避免粘贴 YAML 时格式错乱。粘贴完成后 :set nopaste 恢复正常模式。"
        },
        {
            id: "w16-3-q11",
            question: "CKA 和 CKAD 的主要区别是什么？",
            options: [
                "CKAD 考试时间更长",
                "CKA 只考理论不考实操",
                "两者完全相同",
                "CKA 侧重集群管理（administrator），CKAD 侧重应用开发（developer）"
            ],
            answer: 3,
            rationale: "官方定位：CKA 侧重'Kubernetes administrator'——集群安装、升级、备份恢复；CKAD 侧重'application developer'——Pod 设计、配置管理。"
        },
        {
            id: "w16-3-q12",
            question: "考试中遇到难题的最佳策略是什么？",
            options: [
                "花更多时间直到解决",
                "先跳过并标记（flag for review），保证简单题不丢分",
                "立即放弃该题",
                "重启考试系统"
            ],
            answer: 1,
            rationale: "时间管理技巧：2 小时完成约 15-20 道题，遇到难题先跳过标记，优先完成有把握的题目，最后回顾标记的题目。"
        }
    ],
    "w16-4": [
        {
            id: "w16-4-q1",
            question: "Kubernetes 官方文档推荐的学习路径顺序是什么？",
            options: [
                "Reference → Tasks → Concepts → Tutorials",
                "Tasks → Reference → Tutorials → Concepts",
                "Understand → Try → Set Up → Using → Reference",
                "Random 随机学习"
            ],
            answer: 2,
            rationale: "官方文档：学习路径分为五个阶段——Understand Kubernetes → Try Kubernetes → Set Up a K8s Cluster → Using Kubernetes → Reference。"
        },
        {
            id: "w16-4-q2",
            question: "Linux Foundation 提供的 Kubernetes 认证共有几个级别？",
            options: [
                "3 个级别",
                "5 个级别（KCNA、KCSA、CKAD、CKA、CKS）",
                "7 个级别",
                "10 个级别"
            ],
            answer: 1,
            rationale: "Linux Foundation 官方：五级认证——KCNA（基础）、KCSA（安全基础）、CKAD（应用开发）、CKA（集群管理）、CKS（安全专家）。"
        },
        {
            id: "w16-4-q3",
            question: "参加 CKS 认证考试的前置条件是什么？",
            options: [
                "无前置条件",
                "需要 KCNA 认证",
                "需要 CKAD 认证",
                "需要持有有效的 CKA 认证"
            ],
            answer: 3,
            rationale: "Linux Foundation 官方：CKS（Security Specialist）需要'持有有效的 CKA 认证'作为前置条件。"
        },
        {
            id: "w16-4-q4",
            question: "获得全部五项 Kubernetes 认证的专业人士可获得什么称号？",
            options: [
                "Kubestronaut",
                "Kubernetes Master",
                "Cloud Native Expert",
                "CNCF Ambassador"
            ],
            answer: 0,
            rationale: "Linux Foundation 官方：获得全部五项认证可获得'Kubestronaut'称号，是 Kubernetes 专业人士的最高荣誉。"
        },
        {
            id: "w16-4-q5",
            question: "CNCF 官方对 KubeCon + CloudNativeCon 的定义是什么？",
            options: [
                "仅限开发者的小型 meetup",
                "在线培训课程",
                "'gathering adopters and technologists from leading open source and cloud native communities'——旗舰会议",
                "认证考试场所"
            ],
            answer: 2,
            rationale: "CNCF 官方：KubeCon + CloudNativeCon 是'gathering adopters and technologists from leading open source and cloud native communities on a global level'。"
        },
        {
            id: "w16-4-q6",
            question: "KCD（Kubernetes Community Days）的特点是什么？",
            options: [
                "只在美国举办",
                "'community-hosted, CNCF-supported local events'——社区主办的本地活动",
                "需要高额费用",
                "仅限认证持有者参加"
            ],
            answer: 1,
            rationale: "CNCF 官方：KCD Events 是'community-hosted, CNCF-supported local events for growing regional cloud native communities'。"
        },
        {
            id: "w16-4-q7",
            question: "CNCF 社区活动为参与者提供哪些价值？",
            options: [
                "只提供食物和饮料",
                "仅提供休息和娱乐",
                "Access & Learning、Community Building、Career Development、Influence",
                "只提供认证考试优惠"
            ],
            answer: 2,
            rationale: "CNCF 官方：参与活动可获得——Access & Learning、Community Building、Career Development、Influence（参与塑造云原生技术的未来）。"
        },
        {
            id: "w16-4-q8",
            question: "Kubernetes 文档覆盖哪些版本？",
            options: [
                "只有最新版本",
                "当前和前四个版本（current and previous 4 versions）",
                "所有历史版本",
                "只有 LTS 版本"
            ],
            answer: 1,
            rationale: "官方文档：Kubernetes 文档涵盖'current and previous 4 versions'——当前和前四个版本。"
        },
        {
            id: "w16-4-q9",
            question: "Kubernetes 技能适用于哪些职业角色？",
            options: [
                "只适用于开发者",
                "只适用于运维人员",
                "只适用于安全专家",
                "DevOps Engineer、SRE、Platform Engineer、Cloud Native Architect"
            ],
            answer: 3,
            rationale: "Kubernetes 技能适用于多种角色——DevOps Engineer（CI/CD）、SRE（可靠性）、Platform Engineer（内部平台）、Cloud Native Architect（架构设计）。"
        },
        {
            id: "w16-4-q10",
            question: "建议的认证学习路径是什么？",
            options: [
                "直接考 CKS",
                "随机选择认证",
                "KCNA → CKA/CKAD → CKS",
                "只考一个认证即可"
            ],
            answer: 2,
            rationale: "建议路径：KCNA（入门验证）→ CKA/CKAD（根据角色选择）→ CKS（安全专业方向）。CKS 需要 CKA 前置。"
        },
        {
            id: "w16-4-q11",
            question: "初次参与 CNCF 社区活动的建议是什么？",
            options: [
                "从 KCD 本地活动开始，逐步参加 KubeCon",
                "直接参加海外 KubeCon",
                "等待公司组织",
                "只参加线上活动"
            ],
            answer: 0,
            rationale: "CNCF 官方：KCD 是本地社区活动，'Lower financial commitment for local events'降低参与门槛，适合初次参与者。"
        },
        {
            id: "w16-4-q12",
            question: "持续学习云原生技术的方法包括哪些？",
            options: [
                "等待公司培训",
                "只看视频教程",
                "订阅 CNCF 博客、关注 KEP、参加技术活动、在工作中实践",
                "只读一本书"
            ],
            answer: 2,
            rationale: "持续学习方法：订阅 CNCF 官方博客和 Newsletter、关注 Kubernetes Enhancement Proposals (KEP)、定期参加技术活动、在工作中实践。"
        }
    ]
}
