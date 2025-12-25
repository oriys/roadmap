import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week16Guides: Record<string, LessonGuide> = {
    "bp-w16-1": {
        lessonId: "bp-w16-1",
        background: [
            "【边缘计算定义】将计算和数据处理从中心化数据中心移动到更靠近用户的位置（边缘节点），减少网络延迟，提升用户体验。",
            "【CDN 进化】传统 CDN 只缓存静态内容；现代边缘平台支持在边缘运行代码（Edge Functions），实现动态内容处理。",
            "【边缘计算场景】静态资源缓存、API 响应缓存、A/B 测试、地理位置路由、认证校验、请求/响应转换、实时个性化。",
            "【主要平台】Cloudflare Workers、AWS CloudFront Functions / Lambda@Edge、Vercel Edge Functions、Fastly Compute@Edge。",
            "【延迟优化原理】物理距离决定最小延迟（光速约 200km/ms）。边缘节点靠近用户，减少 RTT（往返时间），显著改善 TTFB。",
            "【冷启动问题】边缘函数也有冷启动，但通常比传统 Serverless 快得多。Cloudflare Workers 使用 V8 Isolates，冷启动约 5ms。"
        ],
        keyDifficulties: [
            "【边缘与源站协调】边缘处理后可能仍需请求源站。需要设计好缓存策略、回源逻辑、错误处理。",
            "【边缘状态管理】边缘节点是分布式的，状态管理困难。使用边缘 KV 存储（如 Cloudflare KV、Durable Objects）或回源获取状态。",
            "【调试与可观测性】边缘环境调试困难，日志分散在全球节点。需要集中式日志收集和追踪。",
            "【运行时限制】边缘函数有 CPU 时间、内存、执行时间限制。Cloudflare Workers 限制 CPU 时间 50ms（免费）/50s（付费）。",
            "【一致性挑战】边缘缓存更新存在传播延迟。需要设计合理的缓存失效策略，接受最终一致性。"
        ],
        handsOnPath: [
            "部署 Cloudflare Worker：创建简单的 Hello World Worker，理解部署流程和 wrangler CLI。",
            "实现边缘缓存：使用 Cache API 在边缘缓存 API 响应，设置合适的缓存键和 TTL。",
            "实现地理路由：根据请求的地理位置（cf.country）返回不同内容或路由到不同后端。",
            "配置边缘 KV：使用 Cloudflare KV 存储配置或特征开关，实现边缘动态配置。",
            "实现 A/B 测试：在边缘随机分配用户到不同实验组，记录分组信息到 Cookie。",
            "监控边缘性能：配置 Cloudflare Analytics 或自定义日志，监控边缘函数延迟和错误率。",
            "优化边缘函数：减少依赖、避免阻塞操作、利用 Streams API 流式处理大响应。"
        ],
        selfCheck: [
            "边缘计算如何减少延迟？",
            "边缘函数和传统 Serverless 有什么区别？",
            "边缘状态管理有什么挑战？有哪些解决方案？",
            "边缘函数有哪些运行时限制？",
            "如何在边缘实现 A/B 测试？",
            "边缘缓存的一致性如何保证？"
        ],
        extensions: [
            "学习 Cloudflare Durable Objects 实现边缘有状态应用。",
            "研究 WebAssembly 在边缘计算的应用（Fastly Compute@Edge）。",
            "探索 Cloudflare R2 边缘对象存储的使用。",
            "学习边缘数据库（如 Cloudflare D1、PlanetScale Edge）。"
        ],
        sourceUrls: [
            "https://developers.cloudflare.com/workers/",
            "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-at-the-edge.html",
            "https://vercel.com/docs/functions/edge-functions",
            "https://developer.fastly.com/learning/compute/"
        ]
    },
    "bp-w16-2": {
        lessonId: "bp-w16-2",
        background: [
            "【全球负载均衡】使用 DNS（GeoDNS）或 Anycast 将用户路由到最近的数据中心。减少延迟，提供故障转移能力。",
            "【GeoDNS 原理】根据用户 DNS 解析请求的来源 IP 地理位置，返回最近数据中心的 IP。实现简单但精度有限。",
            "【Anycast 原理】多个数据中心宣告相同 IP 地址，BGP 路由自动选择最近路径。延迟更优但需要 BGP 支持。",
            "【多区域架构模式】Active-Active（所有区域同时服务）、Active-Passive（备用区域只在故障时启用）。",
            "【数据复制挑战】跨区域数据同步是难点。同步复制延迟高，异步复制有一致性问题。根据业务需求选择。",
            "【区域故障转移】自动检测区域故障并切换流量。需要健康检查、DNS TTL 或 BGP 撤销、流量切换自动化。"
        ],
        keyDifficulties: [
            "【延迟与一致性权衡】CAP 定理：跨区域场景下延迟等同于分区，需要在一致性和可用性间权衡。",
            "【跨区域事务】强一致性跨区域事务延迟高（Spanner 使用 TrueTime）。大多数场景应接受最终一致性。",
            "【数据本地性法规】GDPR 等法规要求数据留在特定地区。需要设计数据分区策略满足合规。",
            "【成本控制】跨区域流量费用昂贵。应优化数据复制策略，使用边缘缓存减少回源。",
            "【故障切换测试】故障转移机制需要定期测试。自动化切换可能误判，需要设置合理阈值。"
        ],
        handsOnPath: [
            "配置 Route 53 GeoDNS：设置基于地理位置的 DNS 路由，将用户导向最近区域。",
            "配置健康检查：设置端点健康检查，故障时自动从 DNS 移除不健康端点。",
            "实现多区域数据库：使用 Aurora Global Database 或 CockroachDB 实现跨区域复制。",
            "配置 CloudFront 多源站：设置多个源站和故障转移策略。",
            "测量跨区域延迟：使用 ping、traceroute 和合成监控测量各区域间延迟。",
            "模拟区域故障：关闭一个区域的服务，验证流量是否自动切换到其他区域。",
            "优化跨区域复制：配置异步复制减少延迟，监控复制滞后。"
        ],
        selfCheck: [
            "GeoDNS 和 Anycast 的区别是什么？",
            "Active-Active 和 Active-Passive 架构各有什么优缺点？",
            "跨区域数据复制有哪些挑战？",
            "如何设计故障转移机制？",
            "数据本地性法规如何影响架构设计？",
            "跨区域架构的成本优化有哪些方法？"
        ],
        extensions: [
            "学习 Google Spanner 的 TrueTime 如何实现全球一致性。",
            "研究 Cloudflare 的 Anycast 网络架构。",
            "探索多区域 Kubernetes 集群联邦。",
            "学习 AWS Global Accelerator 的工作原理。"
        ],
        sourceUrls: [
            "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html",
            "https://cloud.google.com/spanner/docs/replication",
            "https://www.cockroachlabs.com/docs/stable/topology-patterns.html",
            "https://blog.cloudflare.com/cloudflare-network/"
        ]
    },
    "bp-w16-3": {
        lessonId: "bp-w16-3",
        background: [
            "【K8s 性能维度】调度延迟、Pod 启动时间、网络性能、存储性能、控制平面性能。每个维度都可能成为瓶颈。",
            "【调度器性能】大规模集群调度器可能成为瓶颈。调度延迟影响扩容速度。可以使用调度框架扩展或多调度器。",
            "【Pod 启动优化】启动时间 = 调度 + 镜像拉取 + 容器创建 + 应用启动。每个环节都可优化。",
            "【网络性能】CNI 选择影响性能。Cilium (eBPF) 性能优于传统 iptables。Service Mesh 增加额外延迟。",
            "【资源配额】正确设置 requests/limits 对调度和性能至关重要。过低导致 OOM，过高浪费资源。",
            "【节点压力驱逐】节点资源不足时会驱逐 Pod。理解驱逐阈值和优先级，避免关键服务被驱逐。"
        ],
        keyDifficulties: [
            "【资源配额调优】确定合适的 CPU/内存 requests 和 limits 需要负载测试和监控分析。可以使用 VPA 自动调整。",
            "【大规模集群挑战】etcd 性能、API Server 负载、调度器吞吐量在大规模集群成为瓶颈。需要分片或联邦。",
            "【存储性能】PVC 性能取决于底层存储。需要选择合适的 StorageClass，考虑 IOPS、吞吐量、延迟。",
            "【网络策略开销】NetworkPolicy 由 CNI 实现，复杂策略可能影响性能。Cilium 使用 eBPF 性能较好。",
            "【HPA 扩容延迟】从指标变化到新 Pod 就绪的延迟包括：指标采集间隔 + 决策 + 调度 + 启动。可能需要预扩容。"
        ],
        handsOnPath: [
            "分析 Pod 启动时间：使用 kubectl describe pod 分析各阶段耗时，找出瓶颈。",
            "优化镜像拉取：使用镜像缓存、预拉取（DaemonSet）、减小镜像大小加速拉取。",
            "配置资源配额：基于负载测试设置合理的 requests/limits，使用 LimitRange 设置默认值。",
            "使用 VPA：部署 Vertical Pod Autoscaler，自动推荐和调整资源配额。",
            "测试 CNI 性能：对比不同 CNI（Calico、Cilium、Flannel）的网络延迟和吞吐量。",
            "监控控制平面：配置 etcd、API Server、调度器的 Prometheus 监控，关注延迟和错误率。",
            "配置 PodDisruptionBudget：保护关键服务在节点维护或驱逐时的可用性。"
        ],
        selfCheck: [
            "Pod 启动时间由哪些环节组成？如何优化？",
            "CPU requests 和 limits 的区别是什么？如何设置？",
            "Cilium 为什么性能比传统 CNI 好？",
            "大规模 K8s 集群有哪些性能挑战？",
            "HPA 扩容延迟来自哪些环节？如何减少？",
            "什么是节点压力驱逐？如何保护关键服务？"
        ],
        extensions: [
            "学习 Kubernetes 调度框架插件开发。",
            "研究 Volcano 批处理调度器的设计。",
            "探索 Karpenter 基于需求的节点自动扩缩容。",
            "学习 Kubernetes 联邦（KubeFed）管理多集群。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/concepts/scheduling-eviction/",
            "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
            "https://cilium.io/blog/2021/05/11/cni-benchmark/",
            "https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler"
        ]
    }
}

export const week16Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w16-1": [
        {
            id: "bp-w16-1-q1",
            question: "边缘计算如何减少延迟？",
            options: [
                "使用更快的服务器",
                "将计算移动到靠近用户的位置，减少物理距离和网络 RTT",
                "压缩数据",
                "使用更快的协议"
            ],
            answer: 1,
            rationale: "光速限制了最小延迟（约 200km/ms），边缘节点靠近用户减少物理传输距离和 RTT。"
        },
        {
            id: "bp-w16-1-q2",
            question: "Cloudflare Workers 使用什么技术实现快速冷启动？",
            options: [
                "Docker 容器",
                "V8 Isolates，冷启动约 5ms",
                "虚拟机",
                "原生进程"
            ],
            answer: 1,
            rationale: "Workers 使用 V8 Isolates 而非容器，隔离轻量级，冷启动时间约 5ms，远快于传统 Serverless。"
        },
        {
            id: "bp-w16-1-q3",
            question: "边缘状态管理的挑战是什么？",
            options: [
                "无挑战",
                "边缘节点分布式，状态同步困难，需要边缘 KV 或回源",
                "内存不足",
                "CPU 不够"
            ],
            answer: 1,
            rationale: "边缘节点遍布全球，传统状态管理不适用。需要使用边缘 KV 存储或回源站获取状态。"
        },
        {
            id: "bp-w16-1-q4",
            question: "边缘函数有哪些常见限制？",
            options: [
                "无限制",
                "CPU 时间、内存、执行时间、请求体大小限制",
                "只限制网络",
                "只限制存储"
            ],
            answer: 1,
            rationale: "边缘函数有严格限制：CPU 时间（如 50ms）、内存、最大执行时间、请求/响应体大小等。"
        },
        {
            id: "bp-w16-1-q5",
            question: "如何在边缘实现 A/B 测试？",
            options: [
                "无法实现",
                "在边缘随机分配用户到实验组，使用 Cookie 记录分组",
                "只能在后端实现",
                "只能使用第三方服务"
            ],
            answer: 1,
            rationale: "边缘函数可以根据用户特征或随机数分配实验组，通过 Cookie 持久化分组，无需回源。"
        },
        {
            id: "bp-w16-1-q6",
            question: "边缘函数和 Lambda@Edge 有什么区别？",
            options: [
                "完全相同",
                "Lambda@Edge 运行在 CloudFront POP，限制更多；Workers 更轻量快速",
                "Lambda@Edge 更快",
                "Workers 限制更多"
            ],
            answer: 1,
            rationale: "Lambda@Edge 基于 Lambda 运行在 CloudFront POP，冷启动较慢；Workers 使用 Isolates 更轻量。"
        },
        {
            id: "bp-w16-1-q7",
            question: "Cloudflare KV 的特点是什么？",
            options: [
                "强一致性",
                "最终一致性的边缘键值存储，读取快写入有传播延迟",
                "只支持小数据",
                "实时同步"
            ],
            answer: 1,
            rationale: "KV 是最终一致的，写入后全球传播需要时间（通常 < 60s），读取从最近边缘节点返回。"
        },
        {
            id: "bp-w16-1-q8",
            question: "边缘缓存失效的挑战是什么？",
            options: [
                "无挑战",
                "缓存更新存在传播延迟，需要接受最终一致性",
                "无法失效",
                "失效太快"
            ],
            answer: 1,
            rationale: "边缘节点分布全球，缓存失效需要时间传播到所有节点，应用需要接受短暂不一致。"
        },
        {
            id: "bp-w16-1-q9",
            question: "边缘函数适合什么场景？",
            options: [
                "所有场景",
                "静态缓存、API 缓存、A/B 测试、地理路由、简单转换",
                "复杂计算",
                "大数据处理"
            ],
            answer: 1,
            rationale: "边缘函数适合延迟敏感且计算简单的场景，如缓存、路由、认证、请求转换，不适合复杂计算。"
        },
        {
            id: "bp-w16-1-q10",
            question: "Durable Objects 解决什么问题？",
            options: [
                "静态缓存",
                "边缘有状态应用，提供单点协调和强一致性存储",
                "日志存储",
                "文件存储"
            ],
            answer: 1,
            rationale: "Durable Objects 在边缘提供有状态计算能力，每个对象有唯一位置，支持事务和协调。"
        },
        {
            id: "bp-w16-1-q11",
            question: "如何调试边缘函数？",
            options: [
                "传统调试器",
                "本地模拟、远程日志、wrangler tail 实时日志",
                "不能调试",
                "只看错误信息"
            ],
            answer: 1,
            rationale: "使用 wrangler dev 本地模拟，wrangler tail 查看实时日志，配置日志推送到集中式系统。"
        },
        {
            id: "bp-w16-1-q12",
            question: "边缘计算的成本模型通常是什么？",
            options: [
                "按 CPU 计费",
                "按请求数和 CPU 时间计费，比传统 Serverless 便宜",
                "固定月费",
                "按带宽计费"
            ],
            answer: 1,
            rationale: "边缘函数通常按请求数和 CPU 时间计费，由于执行快成本通常较低，但有免费额度。"
        }
    ],
    "bp-w16-2": [
        {
            id: "bp-w16-2-q1",
            question: "GeoDNS 和 Anycast 的区别是什么？",
            options: [
                "没有区别",
                "GeoDNS 基于 IP 地理位置返回不同 IP；Anycast 相同 IP 由 BGP 路由选择",
                "GeoDNS 更快",
                "Anycast 更简单"
            ],
            answer: 1,
            rationale: "GeoDNS 根据解析请求来源返回不同 IP；Anycast 多地宣告相同 IP，BGP 自动选择最近路径。"
        },
        {
            id: "bp-w16-2-q2",
            question: "Active-Active 架构的优势是什么？",
            options: [
                "更简单",
                "所有区域同时服务，更好利用资源，故障时无需切换",
                "成本更低",
                "一致性更好"
            ],
            answer: 1,
            rationale: "Active-Active 所有区域都处理流量，资源利用率高，一个区域故障只影响部分用户。"
        },
        {
            id: "bp-w16-2-q3",
            question: "跨区域数据复制的主要挑战是什么？",
            options: [
                "无挑战",
                "延迟与一致性权衡，同步复制慢，异步复制有数据滞后",
                "存储成本",
                "网络带宽"
            ],
            answer: 1,
            rationale: "同步复制保证一致性但延迟高；异步复制延迟低但有数据滞后风险。需要根据业务权衡。"
        },
        {
            id: "bp-w16-2-q4",
            question: "如何实现区域故障自动转移？",
            options: [
                "手动切换",
                "健康检查 + DNS TTL 更新或 BGP 撤销 + 自动化流量切换",
                "不需要转移",
                "重启服务"
            ],
            answer: 1,
            rationale: "配置健康检查检测故障，通过低 TTL DNS 更新或 BGP 路由撤销，自动将流量切换到健康区域。"
        },
        {
            id: "bp-w16-2-q5",
            question: "数据本地性法规如何影响架构？",
            options: [
                "无影响",
                "GDPR 等要求数据留在特定地区，需要数据分区策略",
                "只影响备份",
                "只影响日志"
            ],
            answer: 1,
            rationale: "GDPR 要求欧洲用户数据留在欧洲。需要按地区分区数据，控制复制范围。"
        },
        {
            id: "bp-w16-2-q6",
            question: "跨区域架构如何优化成本？",
            options: [
                "无法优化",
                "使用边缘缓存减少回源、优化复制策略、选择合适的区域",
                "减少区域数",
                "使用更便宜的云"
            ],
            answer: 1,
            rationale: "跨区域流量费用高。使用 CDN/边缘缓存减少回源，异步复制减少带宽，选择低成本区域。"
        },
        {
            id: "bp-w16-2-q7",
            question: "Google Spanner 如何实现全球一致性？",
            options: [
                "放弃一致性",
                "使用 TrueTime GPS/原子钟提供精确时间，实现外部一致性",
                "同步复制",
                "无法实现"
            ],
            answer: 1,
            rationale: "Spanner 使用 TrueTime API（GPS + 原子钟）提供有界时间不确定性，实现外部一致性事务。"
        },
        {
            id: "bp-w16-2-q8",
            question: "故障转移测试为什么重要？",
            options: [
                "不重要",
                "验证自动化切换有效，发现配置问题，建立信心",
                "只是合规要求",
                "只测试一次"
            ],
            answer: 1,
            rationale: "故障转移机制可能有配置错误或误判，定期测试验证有效性，发现问题。"
        },
        {
            id: "bp-w16-2-q9",
            question: "Aurora Global Database 的复制延迟通常是多少？",
            options: [
                "0ms",
                "通常小于 1 秒",
                "几分钟",
                "几小时"
            ],
            answer: 1,
            rationale: "Aurora Global Database 使用存储层复制，跨区域复制延迟通常小于 1 秒。"
        },
        {
            id: "bp-w16-2-q10",
            question: "AWS Global Accelerator 如何工作？",
            options: [
                "DNS 解析",
                "使用 AWS 全球网络和 Anycast，优化路由到最近入口点",
                "CDN 缓存",
                "负载均衡"
            ],
            answer: 1,
            rationale: "Global Accelerator 使用 Anycast IP 和 AWS 骨干网，将流量路由到最近 AWS 入口点，优化延迟。"
        },
        {
            id: "bp-w16-2-q11",
            question: "CockroachDB 的多区域模式有哪些？",
            options: [
                "只有一种",
                "Regional、Global、Geo-Partitioned 等模式",
                "不支持多区域",
                "只支持双区域"
            ],
            answer: 1,
            rationale: "CockroachDB 支持多种拓扑：Regional（区域优先）、Global（全球一致）、Geo-Partitioned（数据分区）。"
        },
        {
            id: "bp-w16-2-q12",
            question: "DNS TTL 对故障转移有什么影响？",
            options: [
                "无影响",
                "TTL 越短故障转移越快，但 DNS 查询负载越高",
                "TTL 越长越好",
                "不相关"
            ],
            answer: 1,
            rationale: "低 TTL 允许更快的 DNS 更新切换流量，但增加 DNS 查询负载。通常设置 60-300 秒。"
        }
    ],
    "bp-w16-3": [
        {
            id: "bp-w16-3-q1",
            question: "Pod 启动时间由哪些环节组成？",
            options: [
                "只有应用启动",
                "调度 + 镜像拉取 + 容器创建 + 应用启动",
                "只有镜像拉取",
                "只有调度"
            ],
            answer: 1,
            rationale: "Pod 启动 = 调度决策 + 镜像拉取（如未缓存）+ 容器运行时创建 + 应用初始化。"
        },
        {
            id: "bp-w16-3-q2",
            question: "CPU requests 和 limits 的区别是什么？",
            options: [
                "没有区别",
                "requests 用于调度保证，limits 是硬性上限可能被限流",
                "limits 用于调度",
                "requests 是上限"
            ],
            answer: 1,
            rationale: "requests 是调度时的资源保证；limits 是运行时的硬性上限，超过会被 CPU 限流。"
        },
        {
            id: "bp-w16-3-q3",
            question: "Cilium 为什么性能比传统 CNI 好？",
            options: [
                "使用更多内存",
                "使用 eBPF 替代 iptables，避免规则遍历开销",
                "使用更多 CPU",
                "网络带宽更高"
            ],
            answer: 1,
            rationale: "Cilium 使用 eBPF 在内核直接处理网络，避免了 iptables 的线性规则匹配开销。"
        },
        {
            id: "bp-w16-3-q4",
            question: "大规模 K8s 集群有哪些性能挑战？",
            options: [
                "无挑战",
                "etcd 性能、API Server 负载、调度器吞吐量瓶颈",
                "只有网络问题",
                "只有存储问题"
            ],
            answer: 1,
            rationale: "大规模集群中 etcd 写入、API Server 请求处理、调度器决策都可能成为瓶颈。"
        },
        {
            id: "bp-w16-3-q5",
            question: "HPA 扩容延迟来自哪些环节？",
            options: [
                "只有调度",
                "指标采集间隔 + HPA 决策 + 调度 + Pod 启动",
                "只有 Pod 启动",
                "无延迟"
            ],
            answer: 1,
            rationale: "HPA 延迟 = 指标采集间隔（默认 15s）+ 决策 + 调度 + 镜像拉取 + 应用启动，总计可能几分钟。"
        },
        {
            id: "bp-w16-3-q6",
            question: "什么是节点压力驱逐？",
            options: [
                "手动删除 Pod",
                "节点资源不足时 kubelet 自动驱逐低优先级 Pod",
                "升级节点",
                "重启节点"
            ],
            answer: 1,
            rationale: "当节点内存、磁盘等资源低于阈值时，kubelet 会按优先级驱逐 Pod 释放资源。"
        },
        {
            id: "bp-w16-3-q7",
            question: "VPA 的作用是什么？",
            options: [
                "水平扩容",
                "自动推荐和调整 Pod 的 CPU/内存 requests 和 limits",
                "网络扩容",
                "存储扩容"
            ],
            answer: 1,
            rationale: "Vertical Pod Autoscaler 分析 Pod 实际资源使用，自动推荐或调整 requests/limits。"
        },
        {
            id: "bp-w16-3-q8",
            question: "如何优化镜像拉取速度？",
            options: [
                "无法优化",
                "镜像缓存、预拉取 DaemonSet、减小镜像大小、使用镜像仓库镜像",
                "增加带宽",
                "增加 CPU"
            ],
            answer: 1,
            rationale: "使用镜像缓存、DaemonSet 预拉取、多阶段构建减小镜像、就近镜像仓库可以加速拉取。"
        },
        {
            id: "bp-w16-3-q9",
            question: "PodDisruptionBudget 的作用是什么？",
            options: [
                "限制 Pod 数量",
                "保证维护或驱逐时保持最小可用 Pod 数",
                "限制资源使用",
                "限制网络流量"
            ],
            answer: 1,
            rationale: "PDB 定义服务的最小可用副本数，防止节点维护或驱逐导致服务不可用。"
        },
        {
            id: "bp-w16-3-q10",
            question: "etcd 在大规模集群中的性能优化方法？",
            options: [
                "无法优化",
                "使用 SSD、调整参数、分片、减少不必要的 watch",
                "增加节点数",
                "使用 HDD"
            ],
            answer: 1,
            rationale: "etcd 优化：使用低延迟 SSD、调整心跳和选举参数、减少不必要的 watch、考虑分片。"
        },
        {
            id: "bp-w16-3-q11",
            question: "Karpenter 相比 Cluster Autoscaler 有什么优势？",
            options: [
                "没有优势",
                "更快的扩容速度，基于需求直接创建节点而非节点组",
                "更便宜",
                "更简单"
            ],
            answer: 1,
            rationale: "Karpenter 直接根据 Pod 需求选择最优实例类型创建节点，比基于节点组的 CA 更快更灵活。"
        },
        {
            id: "bp-w16-3-q12",
            question: "NetworkPolicy 如何影响性能？",
            options: [
                "无影响",
                "复杂策略可能增加网络延迟，Cilium 比 iptables 实现更高效",
                "加速网络",
                "减少带宽"
            ],
            answer: 1,
            rationale: "NetworkPolicy 需要检查每个网络包，复杂规则增加开销。eBPF 实现比 iptables 高效。"
        }
    ]
}
