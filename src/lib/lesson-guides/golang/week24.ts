import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week24Guides: Record<string, LessonGuide> = {
    "go-w24-1": {
        lessonId: "go-w24-1",
        background: [
            "【Raft 算法】分布式一致性算法，比 Paxos 更易理解和实现。",
            "【领导者选举】集群选出一个 Leader 处理所有写请求。",
            "【日志复制】Leader 将日志条目复制到 Follower，多数确认后提交。",
            "【安全性保证】确保所有节点最终看到相同的日志。",
            "【etcd/raft】etcd 的 Raft 实现，被广泛使用。"
        ],
        keyDifficulties: [
            "【任期机制】每个 Leader 有唯一任期号，用于检测过期 Leader。",
            "【日志匹配】Follower 的日志必须与 Leader 匹配才能追加。",
            "【网络分区】需要正确处理网络分区场景。",
            "【成员变更】动态添加/删除节点需要特殊处理。"
        ],
        handsOnPath: [
            "阅读 Raft 论文理解核心概念",
            "使用 etcd/raft 构建简单 KV 存储",
            "实现 Raft 状态机接口",
            "模拟网络分区测试"
        ],
        selfCheck: [
            "Raft 的三个子问题是什么？",
            "什么是任期（term）？",
            "日志什么时候被提交？",
            "如何处理领导者故障？"
        ],
        extensions: [
            "研究 Multi-Raft 优化",
            "了解 Paxos 算法",
            "学习 Raft 可视化工具"
        ],
        sourceUrls: [
            "https://raft.github.io/raft.pdf",
            "https://github.com/etcd-io/raft",
            "https://github.com/hashicorp/raft"
        ]
    },
    "go-w24-2": {
        lessonId: "go-w24-2",
        background: [
            "【分布式锁】在分布式系统中协调对共享资源的访问。",
            "【Redis RedLock】Martin Kleppmann 提出质疑的 Redis 分布式锁算法。",
            "【etcd 租约】使用 Lease 实现带超时的分布式锁。",
            "【锁续期】长时间操作需要续期锁，防止被释放。",
            "【防护令牌】fencing token 防止脑裂问题。"
        ],
        keyDifficulties: [
            "【时钟问题】分布式系统中时钟不可靠，影响超时判断。",
            "【脑裂】网络分区可能导致多个节点认为自己持有锁。",
            "【GC 暂停】长 GC 可能导致锁意外过期。",
            "【正确性 vs 活性】需要权衡锁的安全性和可用性。"
        ],
        handsOnPath: [
            "使用 go-redis 实现分布式锁",
            "使用 etcd 的 concurrency 包",
            "实现锁续期机制",
            "测试各种故障场景"
        ],
        selfCheck: [
            "分布式锁面临什么挑战？",
            "RedLock 算法的争议是什么？",
            "etcd 如何实现分布式锁？",
            "什么是 fencing token？"
        ],
        extensions: [
            "阅读 Martin Kleppmann 的分布式锁分析",
            "研究 ZooKeeper 分布式锁",
            "了解数据库乐观锁"
        ],
        sourceUrls: [
            "https://redis.io/docs/manual/patterns/distributed-locks/",
            "https://etcd.io/docs/v3.5/dev-guide/api_concurrency_reference_v3/",
            "https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html"
        ]
    },
    "go-w24-3": {
        lessonId: "go-w24-3",
        background: [
            "【服务注册】服务启动时将自己的地址注册到注册中心。",
            "【服务发现】客户端从注册中心获取服务地址列表。",
            "【健康检查】定期检查服务是否存活，移除失效服务。",
            "【Consul】HashiCorp 的服务网格和服务发现工具。",
            "【etcd】除了 KV 存储，也常用于服务发现。"
        ],
        keyDifficulties: [
            "【一致性 vs 可用性】CAP 定理的权衡。",
            "【客户端缓存】本地缓存服务列表，watch 变更。",
            "【负载均衡】客户端或服务端负载均衡策略。",
            "【优雅下线】服务下线前先从注册中心移除。"
        ],
        handsOnPath: [
            "使用 Consul 注册和发现服务",
            "使用 etcd 的 naming 包",
            "实现健康检查接口",
            "集成 gRPC 服务发现"
        ],
        selfCheck: [
            "服务发现解决什么问题？",
            "Consul 和 etcd 的区别？",
            "如何实现健康检查？",
            "什么是优雅下线？"
        ],
        extensions: [
            "研究 Kubernetes 服务发现",
            "了解 DNS 服务发现",
            "学习服务网格概念"
        ],
        sourceUrls: [
            "https://developer.hashicorp.com/consul/docs/concepts/service-discovery",
            "https://etcd.io/docs/v3.5/dev-guide/grpc_naming/",
            "https://kubernetes.io/docs/concepts/services-networking/service/"
        ]
    },
    "go-w24-4": {
        lessonId: "go-w24-4",
        background: [
            "【分布式追踪】跟踪请求在分布式系统中的完整路径。",
            "【OpenTelemetry】CNCF 的可观测性标准，统一 Trace、Metrics、Logs。",
            "【Trace】一次请求的完整调用链。",
            "【Span】Trace 中的一个操作单元。",
            "【Context 传播】通过 Context 传递 Trace ID 和 Span ID。"
        ],
        keyDifficulties: [
            "【采样策略】全量采集开销大，需要合理采样。",
            "【Context 传播】跨进程边界传播 Context。",
            "【性能开销】追踪代码有一定性能开销。",
            "【数据量】大规模系统追踪数据量巨大。"
        ],
        handsOnPath: [
            "集成 OpenTelemetry SDK",
            "创建 Span 并添加属性",
            "配置 Jaeger 后端",
            "实现跨服务 Context 传播"
        ],
        selfCheck: [
            "Trace 和 Span 的关系？",
            "如何传播 Trace Context？",
            "常见的采样策略有哪些？",
            "OpenTelemetry 包含哪些信号？"
        ],
        extensions: [
            "研究 Jaeger 架构",
            "了解 W3C Trace Context 标准",
            "学习 eBPF 无侵入追踪"
        ],
        sourceUrls: [
            "https://opentelemetry.io/docs/languages/go/",
            "https://opentelemetry.io/docs/concepts/signals/traces/",
            "https://www.jaegertracing.io/docs/getting-started/"
        ]
    }
}

export const week24Quizzes: Record<string, QuizQuestion[]> = {
    "go-w24-1": [
        {
            id: "go-w24-1-q1",
            question: "Raft 算法的三个子问题是什么？",
            options: [
                "加密、解密、签名",
                "领导者选举、日志复制、安全性",
                "读取、写入、删除",
                "注册、发现、负载均衡"
            ],
            answer: 1,
            rationale: "Raft 将一致性问题分解为领导者选举、日志复制和安全性三个子问题。"
        },
        {
            id: "go-w24-1-q2",
            question: "Raft 中日志条目何时被提交？",
            options: ["Leader 写入时", "多数节点确认时", "所有节点确认时", "客户端确认时"],
            answer: 1,
            rationale: "当日志条目被复制到多数节点后，Leader 可以提交该条目。"
        }
    ],
    "go-w24-2": [
        {
            id: "go-w24-2-q1",
            question: "分布式锁面临的主要挑战是什么？",
            options: ["性能太好", "时钟同步和网络分区", "内存不足", "CPU 过载"],
            answer: 1,
            rationale: "分布式系统中时钟不可靠和网络分区是分布式锁的主要挑战。"
        },
        {
            id: "go-w24-2-q2",
            question: "etcd 使用什么机制实现分布式锁？",
            options: ["Redis", "租约 (Lease)", "文件锁", "信号量"],
            answer: 1,
            rationale: "etcd 使用租约 (Lease) 机制实现带超时的分布式锁。"
        }
    ],
    "go-w24-3": [
        {
            id: "go-w24-3-q1",
            question: "服务发现的主要目的是什么？",
            options: ["加密通信", "动态获取服务地址", "压缩数据", "负载测试"],
            answer: 1,
            rationale: "服务发现让客户端能够动态获取服务实例的地址。"
        },
        {
            id: "go-w24-3-q2",
            question: "优雅下线需要做什么？",
            options: ["直接关闭", "先从注册中心移除再关闭", "发送通知", "等待所有请求"],
            answer: 1,
            rationale: "优雅下线需要先从注册中心移除服务，再关闭服务进程。"
        }
    ],
    "go-w24-4": [
        {
            id: "go-w24-4-q1",
            question: "OpenTelemetry 的三种信号是什么？",
            options: [
                "HTTP、gRPC、WebSocket",
                "Traces、Metrics、Logs",
                "CPU、Memory、Disk",
                "Read、Write、Delete"
            ],
            answer: 1,
            rationale: "OpenTelemetry 定义了 Traces、Metrics、Logs 三种可观测性信号。"
        },
        {
            id: "go-w24-4-q2",
            question: "Span 是什么？",
            options: ["完整的调用链", "调用链中的一个操作", "日志记录", "指标数据"],
            answer: 1,
            rationale: "Span 是 Trace 中的一个操作单元，代表一次具体的调用。"
        }
    ]
}
