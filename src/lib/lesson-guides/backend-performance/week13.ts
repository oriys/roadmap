import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week13Guides: Record<string, LessonGuide> = {
    "bp-w13-1": {
        lessonId: "bp-w13-1",
        background: [
            "【eBPF 定义】eBPF (extended Berkeley Packet Filter) 是 Linux 内核中的一个革命性技术，允许在内核空间安全地运行沙箱程序，无需修改内核源码或加载内核模块。",
            "【eBPF 优势】传统内核追踪需要重新编译内核或使用内核模块，风险高且不灵活。eBPF 程序在加载时由验证器检查安全性，运行时接近原生性能。",
            "【eBPF 应用场景】可观测性（追踪系统调用、函数调用）、网络（XDP 加速、负载均衡）、安全（运行时安全检测）、性能分析（CPU、内存、I/O 剖析）。",
            "【BCC 与 bpftrace】BCC (BPF Compiler Collection) 提供 Python/C++ 接口；bpftrace 是高级追踪语言，类似 awk，适合快速编写一次性追踪脚本。",
            "【内核追踪点】kprobes（动态内核函数探针）、tracepoints（静态内核追踪点）、uprobes（用户空间函数探针）、USDT（用户静态定义追踪点）。",
            "【eBPF 性能开销】eBPF 程序运行开销极低（纳秒级），但频繁触发的探针仍可能影响性能。生产环境需要权衡采样率和追踪点选择。"
        ],
        keyDifficulties: [
            "【验证器限制】eBPF 验证器对程序有严格限制：有界循环、限制栈大小（512 字节）、禁止无限递归。编写复杂逻辑需要技巧绕过这些限制。",
            "【内核版本兼容】不同内核版本的 eBPF 能力不同。生产环境需要使用 CO-RE (Compile Once, Run Everywhere) 技术确保跨版本兼容。",
            "【Map 数据结构选择】eBPF Maps 用于内核与用户空间通信。选择合适的 Map 类型（hash、array、ringbuf、perf_event）影响性能和功能。",
            "【追踪点稳定性】kprobes 追踪内部函数，内核升级可能导致函数签名变化。应优先使用稳定的 tracepoints 或 BTF (BPF Type Format)。",
            "【生产环境风险】虽然 eBPF 有验证器保护，错误的追踪逻辑仍可能导致性能下降。应先在测试环境验证，生产使用采样策略。"
        ],
        handsOnPath: [
            "安装 bpftrace：在 Ubuntu 上使用 apt install bpftrace，或从源码编译获取最新功能。",
            "追踪系统调用：bpftrace -e 'tracepoint:syscalls:sys_enter_read { @[comm] = count(); }' 统计各进程的 read 系统调用。",
            "追踪延迟分布：使用 bpftrace 的 hist() 函数绘制系统调用延迟直方图：tracepoint:syscalls:sys_exit_read { @latency = hist(nsecs - @start[tid]); }",
            "使用 BCC 工具：运行 execsnoop 追踪新进程、opensnoop 追踪文件打开、tcpconnect 追踪 TCP 连接。",
            "编写自定义 eBPF：使用 libbpf 或 cilium/ebpf (Go) 编写可复用的 eBPF 程序，实现特定业务追踪。",
            "集成 Prometheus：使用 ebpf_exporter 将 eBPF 指标导出到 Prometheus，构建内核级可观测性。",
            "分析 CPU 火焰图：使用 profile 工具采样 CPU 栈，生成火焰图定位热点函数。"
        ],
        selfCheck: [
            "eBPF 相比传统内核模块有什么优势？",
            "kprobes、tracepoints、uprobes 分别用于什么场景？",
            "什么是 CO-RE？为什么需要它？",
            "eBPF 验证器有哪些主要限制？",
            "如何使用 bpftrace 追踪系统调用延迟？",
            "生产环境使用 eBPF 追踪需要注意什么？"
        ],
        extensions: [
            "学习 Cilium 如何使用 eBPF 实现高性能 Kubernetes 网络。",
            "研究 Falco 基于 eBPF 的运行时安全检测。",
            "探索 Pixie 的自动化 Kubernetes 可观测性方案。",
            "学习使用 BTF 和 CO-RE 编写可移植的 eBPF 程序。"
        ],
        sourceUrls: [
            "https://ebpf.io/",
            "https://github.com/iovisor/bpftrace",
            "https://github.com/iovisor/bcc",
            "https://nakryiko.com/posts/bpf-core-reference-guide/"
        ]
    },
    "bp-w13-2": {
        lessonId: "bp-w13-2",
        background: [
            "【XDP 定义】XDP (eXpress Data Path) 是 eBPF 在网络数据包处理的应用，在网卡驱动层（最早可能的点）处理数据包，绕过内核网络栈。",
            "【XDP 性能】传统 Linux 网络栈处理约 1-2 Mpps（每秒百万包），XDP 可达 10+ Mpps，接近网卡线速。适合 DDoS 防护、负载均衡。",
            "【XDP 动作】XDP_PASS（继续内核处理）、XDP_DROP（丢弃）、XDP_TX（从同一网卡发回）、XDP_REDIRECT（重定向到其他网卡或 CPU）。",
            "【AF_XDP】AF_XDP 是 XDP 的用户空间接口，允许将数据包直接送到用户空间处理，实现用户态高性能网络应用。",
            "【XDP vs DPDK】DPDK 完全绕过内核，独占网卡；XDP 在内核中运行，可与内核网络栈共存。XDP 更易集成，DPDK 延迟更低。",
            "【硬件卸载】部分智能网卡支持 XDP 硬件卸载（offload），eBPF 程序直接在网卡上运行，CPU 零开销。"
        ],
        keyDifficulties: [
            "【驱动支持】并非所有网卡驱动都支持 XDP，且支持程度不同（native、generic、offload）。需确认网卡和驱动兼容性。",
            "【内存模型】XDP 程序直接操作网卡 DMA 内存，需要理解 headroom、tailroom 和数据包布局。修改包大小需要特别处理。",
            "【调试困难】XDP 程序运行在极早期阶段，传统调试工具不可用。需要使用 bpf_trace_printk 和 bpftool 进行调试。",
            "【多核扩展】XDP 程序在每个 CPU 上独立运行。共享状态需要使用 per-CPU maps 或原子操作，避免竞争。",
            "【与 TC 配合】复杂场景可能需要 XDP 做初步过滤，TC (Traffic Control) eBPF 做更复杂的处理。理解两者定位。"
        ],
        handsOnPath: [
            "检查 XDP 支持：使用 ethtool -i eth0 查看驱动，确认驱动支持 XDP native 模式。",
            "编写简单 XDP 程序：使用 C 编写丢弃特定端口流量的 XDP 程序，使用 clang 编译为 eBPF 字节码。",
            "加载 XDP 程序：使用 ip link set dev eth0 xdp obj xdp_drop.o 加载程序，查看统计信息。",
            "实现简单负载均衡：使用 XDP_REDIRECT 将流量分发到不同后端，使用 BPF_MAP_TYPE_DEVMAP 管理目标网卡。",
            "测试 XDP 性能：使用 pktgen 或 MoonGen 生成高速流量，测量 XDP 处理速率和 CPU 使用。",
            "集成 Katran：学习 Facebook 开源的 XDP 负载均衡器 Katran 的架构和实现。",
            "使用 AF_XDP：编写用户态程序通过 AF_XDP 零拷贝接收数据包，实现高性能应用。"
        ],
        selfCheck: [
            "XDP 在网络栈的哪个位置运行？为什么这很重要？",
            "XDP 的四种动作分别用于什么场景？",
            "XDP 相比 DPDK 有什么优缺点？",
            "什么是 XDP 硬件卸载？需要什么条件？",
            "如何调试 XDP 程序？",
            "多核环境下 XDP 程序如何处理共享状态？"
        ],
        extensions: [
            "研究 Cloudflare 如何使用 XDP 进行 DDoS 防护。",
            "学习 Cilium 的 XDP 加速模式实现原理。",
            "探索使用 XDP 实现网络虚拟化功能（VXLAN 封装等）。",
            "研究 P4 语言与 XDP 的结合。"
        ],
        sourceUrls: [
            "https://www.kernel.org/doc/html/latest/networking/af_xdp.html",
            "https://github.com/xdp-project/xdp-tutorial",
            "https://github.com/facebookincubator/katran",
            "https://blog.cloudflare.com/how-to-drop-10-million-packets/"
        ]
    },
    "bp-w13-3": {
        lessonId: "bp-w13-3",
        background: [
            "【服务网格定义】服务网格（Service Mesh）是处理服务间通信的基础设施层，通过 Sidecar 代理实现流量管理、可观测性、安全性。",
            "【Sidecar 开销】每个 Pod 运行一个 Sidecar 代理（如 Envoy），增加：内存（约 50-100MB）、CPU（约 0.5-2% 额外延迟）、延迟（1-3ms per hop）。",
            "【Istio 架构】Control Plane（istiod）管理配置；Data Plane（Envoy sidecars）处理流量。配置下发和同步也有开销。",
            "【mTLS 开销】服务网格默认启用 mTLS 加密服务间通信。TLS 握手和加解密增加 CPU 开销，首次连接延迟增加。",
            "【流量路径】请求路径：App → Sidecar（出站）→ 网络 → Sidecar（入站）→ App。每个 Sidecar 增加一次用户态/内核态切换。",
            "【配置复杂度】大规模部署时，每个 Sidecar 需要同步大量服务发现和路由配置。配置膨胀可能导致内存和 CPU 问题。"
        ],
        keyDifficulties: [
            "【延迟优化】减少 Sidecar 延迟：启用 HTTP/2 连接复用、调整 Envoy 缓冲区大小、使用连接池减少握手。",
            "【内存优化】大型集群中 Envoy 配置可能占用大量内存。使用 Sidecar 资源限制、懒加载配置、Namespace 隔离减少配置范围。",
            "【Sidecar-less 模式】Istio Ambient Mesh 和 Cilium Service Mesh 提供无 Sidecar 模式，使用共享代理或 eBPF 降低开销。",
            "【mTLS 优化】使用 TLS 1.3 减少握手开销、启用 Session Resumption、考虑使用 eBPF 加速 mTLS。",
            "【故障排查】Sidecar 增加了故障排查复杂度。需要熟悉 istioctl analyze、Envoy admin API、分布式追踪。"
        ],
        handsOnPath: [
            "测量 Sidecar 延迟：对比启用和禁用 Sidecar 时的 P50/P99 延迟，使用 Fortio 进行基准测试。",
            "监控 Sidecar 资源：配置 Prometheus 采集 Envoy 指标，监控 CPU、内存、连接数。",
            "优化 Envoy 配置：调整 --concurrency 参数匹配 CPU 限制，配置连接池大小。",
            "配置 mTLS 策略：使用 PeerAuthentication 配置 mTLS 模式（STRICT/PERMISSIVE），测量加解密开销。",
            "实现渐进式采纳：先对非关键服务启用服务网格，逐步扩展，监控性能影响。",
            "测试 Ambient Mesh：在测试环境部署 Istio Ambient 模式，对比与 Sidecar 模式的性能差异。",
            "配置流量旁路：对高频内部调用使用 Sidecar 旁路（如同 Pod 通信），减少代理开销。"
        ],
        selfCheck: [
            "服务网格 Sidecar 模式的性能开销主要包括哪些？",
            "mTLS 如何影响性能？如何优化？",
            "什么是 Sidecar-less 服务网格？它如何降低开销？",
            "大规模集群中 Envoy 配置膨胀如何解决？",
            "如何测量服务网格增加的延迟？",
            "什么场景适合使用服务网格？什么场景应该避免？"
        ],
        extensions: [
            "研究 Linkerd 相比 Istio 的轻量级设计和性能差异。",
            "学习 Cilium Service Mesh 的 eBPF 原生实现。",
            "探索 gRPC 的 xDS 协议，理解服务网格配置下发机制。",
            "研究 WASM 插件对 Envoy 性能的影响。"
        ],
        sourceUrls: [
            "https://istio.io/latest/docs/ops/deployment/performance-and-scalability/",
            "https://linkerd.io/2/overview/",
            "https://cilium.io/blog/2021/12/01/cilium-service-mesh-beta/",
            "https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/arch_overview"
        ]
    }
}

export const week13Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w13-1": [
        {
            id: "bp-w13-1-q1",
            question: "eBPF 相比传统内核模块有什么优势？",
            options: [
                "更慢但更安全",
                "无需修改内核源码，验证器保证安全，接近原生性能",
                "只能用于网络",
                "需要重启才能加载"
            ],
            answer: 1,
            rationale: "eBPF 在加载时由验证器检查安全性，运行时接近原生性能，无需修改内核源码或重启。"
        },
        {
            id: "bp-w13-1-q2",
            question: "kprobes、tracepoints、uprobes 分别用于什么？",
            options: [
                "都用于网络追踪",
                "kprobes 动态内核函数，tracepoints 静态内核点，uprobes 用户空间函数",
                "都用于用户空间",
                "只有 kprobes 可用"
            ],
            answer: 1,
            rationale: "kprobes 动态探测内核函数，tracepoints 是预定义的静态追踪点，uprobes 探测用户空间函数。"
        },
        {
            id: "bp-w13-1-q3",
            question: "什么是 CO-RE (Compile Once, Run Everywhere)？",
            options: [
                "一种编程语言",
                "使 eBPF 程序能够跨不同内核版本运行的技术",
                "一种网络协议",
                "一种压缩算法"
            ],
            answer: 1,
            rationale: "CO-RE 结合 BTF 类型信息，使 eBPF 程序编译一次后可在不同内核版本上运行。"
        },
        {
            id: "bp-w13-1-q4",
            question: "eBPF 验证器有哪些主要限制？",
            options: [
                "无限制",
                "有界循环、栈大小限制（512字节）、禁止无限递归",
                "只限制内存",
                "只限制 CPU"
            ],
            answer: 1,
            rationale: "验证器限制：循环必须有界、栈大小最大 512 字节、禁止无限递归和不安全的内存访问。"
        },
        {
            id: "bp-w13-1-q5",
            question: "bpftrace 的主要用途是什么？",
            options: [
                "编译内核",
                "高级追踪语言，用于快速编写一次性追踪脚本",
                "网络配置",
                "文件系统管理"
            ],
            answer: 1,
            rationale: "bpftrace 是类似 awk 的高级追踪语言，适合快速编写一次性的系统追踪和分析脚本。"
        },
        {
            id: "bp-w13-1-q6",
            question: "eBPF Maps 的作用是什么？",
            options: [
                "只用于存储地图数据",
                "内核与用户空间通信，存储状态和统计数据",
                "只用于网络路由",
                "只用于日志记录"
            ],
            answer: 1,
            rationale: "eBPF Maps 是内核与用户空间共享数据的主要机制，可存储统计、状态、配置等数据。"
        },
        {
            id: "bp-w13-1-q7",
            question: "为什么应该优先使用 tracepoints 而非 kprobes？",
            options: [
                "tracepoints 更快",
                "tracepoints 是稳定 API，kprobes 追踪的内部函数可能在内核升级时变化",
                "kprobes 已废弃",
                "没有区别"
            ],
            answer: 1,
            rationale: "tracepoints 是内核提供的稳定追踪点，kprobes 追踪的内部函数签名可能随内核版本变化。"
        },
        {
            id: "bp-w13-1-q8",
            question: "eBPF 程序的性能开销如何？",
            options: [
                "非常高，不适合生产",
                "极低（纳秒级），但频繁触发的探针仍需注意",
                "与内核模块相同",
                "无法测量"
            ],
            answer: 1,
            rationale: "单次 eBPF 程序执行开销极低（纳秒级），但高频触发的探针累积开销仍可能影响性能。"
        },
        {
            id: "bp-w13-1-q9",
            question: "BCC 提供什么功能？",
            options: [
                "只有 Python 接口",
                "Python/C++ 接口编写 eBPF 程序，以及大量预置工具",
                "只用于编译",
                "只用于调试"
            ],
            answer: 1,
            rationale: "BCC (BPF Compiler Collection) 提供 Python/C++ 编程接口和大量预置工具如 execsnoop、tcpconnect。"
        },
        {
            id: "bp-w13-1-q10",
            question: "如何将 eBPF 指标导出到 Prometheus？",
            options: [
                "无法导出",
                "使用 ebpf_exporter 将 eBPF Maps 中的指标导出",
                "直接写入数据库",
                "使用文件共享"
            ],
            answer: 1,
            rationale: "ebpf_exporter 可以读取 eBPF Maps 中的数据并以 Prometheus 格式暴露指标端点。"
        },
        {
            id: "bp-w13-1-q11",
            question: "生产环境使用 eBPF 追踪需要注意什么？",
            options: [
                "无需注意",
                "先在测试环境验证，使用采样策略，监控追踪本身的开销",
                "只在开发环境使用",
                "禁用所有追踪"
            ],
            answer: 1,
            rationale: "生产环境应先测试验证，使用采样减少开销，监控追踪程序本身对系统的影响。"
        },
        {
            id: "bp-w13-1-q12",
            question: "Cilium 如何使用 eBPF？",
            options: [
                "只用于日志",
                "实现高性能 Kubernetes 网络、安全策略和可观测性",
                "只用于存储",
                "只用于调度"
            ],
            answer: 1,
            rationale: "Cilium 使用 eBPF 替代 iptables 实现 Kubernetes 网络、网络策略执行和可观测性。"
        }
    ],
    "bp-w13-2": [
        {
            id: "bp-w13-2-q1",
            question: "XDP 在网络栈的哪个位置运行？",
            options: [
                "应用层",
                "网卡驱动层，在内核网络栈之前",
                "传输层",
                "会话层"
            ],
            answer: 1,
            rationale: "XDP 在网卡驱动层运行，是数据包进入系统最早可以处理的点，绕过内核网络栈。"
        },
        {
            id: "bp-w13-2-q2",
            question: "XDP 的四种动作是什么？",
            options: [
                "ACCEPT, REJECT, DROP, FORWARD",
                "XDP_PASS, XDP_DROP, XDP_TX, XDP_REDIRECT",
                "ALLOW, DENY, REDIRECT, LOG",
                "INPUT, OUTPUT, FORWARD, DROP"
            ],
            answer: 1,
            rationale: "XDP 动作：PASS（继续内核处理）、DROP（丢弃）、TX（发回同一网卡）、REDIRECT（重定向）。"
        },
        {
            id: "bp-w13-2-q3",
            question: "XDP 可以达到什么样的处理速率？",
            options: [
                "约 100 Kpps",
                "10+ Mpps（每秒千万包），接近网卡线速",
                "约 1 Kpps",
                "与普通网络栈相同"
            ],
            answer: 1,
            rationale: "传统网络栈约 1-2 Mpps，XDP 可达 10+ Mpps，接近网卡硬件线速。"
        },
        {
            id: "bp-w13-2-q4",
            question: "XDP 相比 DPDK 有什么优势？",
            options: [
                "延迟更低",
                "可与内核网络栈共存，更易集成，无需独占网卡",
                "性能更高",
                "更容易编程"
            ],
            answer: 1,
            rationale: "DPDK 完全绕过内核需独占网卡；XDP 在内核运行可与网络栈共存，集成更容易。"
        },
        {
            id: "bp-w13-2-q5",
            question: "什么是 XDP 硬件卸载（offload）？",
            options: [
                "将 XDP 程序复制到磁盘",
                "eBPF 程序直接在智能网卡上运行，CPU 零开销",
                "使用 GPU 加速",
                "网络压缩"
            ],
            answer: 1,
            rationale: "支持的智能网卡可将 eBPF 程序卸载到网卡硬件执行，主机 CPU 完全不参与处理。"
        },
        {
            id: "bp-w13-2-q6",
            question: "AF_XDP 的作用是什么？",
            options: [
                "一种文件格式",
                "XDP 的用户空间接口，实现用户态零拷贝接收数据包",
                "一种加密算法",
                "一种压缩格式"
            ],
            answer: 1,
            rationale: "AF_XDP 允许将 XDP 处理的数据包直接送到用户空间，实现用户态高性能网络应用。"
        },
        {
            id: "bp-w13-2-q7",
            question: "如何调试 XDP 程序？",
            options: [
                "使用 gdb",
                "使用 bpf_trace_printk 和 bpftool，传统调试器不可用",
                "使用 printf",
                "无法调试"
            ],
            answer: 1,
            rationale: "XDP 运行在极早期阶段，需要使用 bpf_trace_printk 输出调试信息，bpftool 检查程序状态。"
        },
        {
            id: "bp-w13-2-q8",
            question: "XDP 多核扩展需要注意什么？",
            options: [
                "无需注意",
                "使用 per-CPU maps 或原子操作处理共享状态，避免竞争",
                "只能单核运行",
                "自动处理"
            ],
            answer: 1,
            rationale: "XDP 程序在每个 CPU 独立运行，共享状态需要使用 per-CPU maps 或原子操作避免竞争。"
        },
        {
            id: "bp-w13-2-q9",
            question: "如何检查网卡是否支持 XDP native 模式？",
            options: [
                "查看 CPU 信息",
                "使用 ethtool -i 查看驱动，确认驱动支持",
                "查看内存大小",
                "无法检查"
            ],
            answer: 1,
            rationale: "使用 ethtool -i eth0 查看网卡驱动，需要确认该驱动支持 XDP native 模式。"
        },
        {
            id: "bp-w13-2-q10",
            question: "Katran 是什么？",
            options: [
                "一种编程语言",
                "Facebook 开源的基于 XDP 的四层负载均衡器",
                "一种数据库",
                "一种文件系统"
            ],
            answer: 1,
            rationale: "Katran 是 Facebook 开源的高性能四层负载均衡器，使用 XDP 实现接近线速的转发。"
        },
        {
            id: "bp-w13-2-q11",
            question: "XDP generic 模式和 native 模式有什么区别？",
            options: [
                "没有区别",
                "native 在驱动层运行性能更高，generic 在网络栈更高层兼容性更好",
                "generic 更快",
                "native 兼容性更好"
            ],
            answer: 1,
            rationale: "native 模式在网卡驱动层运行性能最高；generic 模式在更高层运行，兼容更多网卡但性能较低。"
        },
        {
            id: "bp-w13-2-q12",
            question: "Cloudflare 如何使用 XDP？",
            options: [
                "只用于日志",
                "在网络边缘进行高速 DDoS 防护和数据包过滤",
                "只用于缓存",
                "只用于加密"
            ],
            answer: 1,
            rationale: "Cloudflare 使用 XDP 在边缘服务器上实现高速 DDoS 攻击过滤，可丢弃每秒千万级恶意包。"
        }
    ],
    "bp-w13-3": [
        {
            id: "bp-w13-3-q1",
            question: "服务网格 Sidecar 模式的主要开销包括什么？",
            options: [
                "只有网络开销",
                "内存（50-100MB）、CPU、延迟（1-3ms per hop）",
                "只有延迟",
                "无开销"
            ],
            answer: 1,
            rationale: "每个 Sidecar 增加约 50-100MB 内存、额外 CPU 消耗，以及每跳 1-3ms 的延迟。"
        },
        {
            id: "bp-w13-3-q2",
            question: "mTLS 如何影响服务网格性能？",
            options: [
                "无影响",
                "TLS 握手和加解密增加 CPU 开销和首次连接延迟",
                "减少延迟",
                "减少 CPU 使用"
            ],
            answer: 1,
            rationale: "mTLS 需要进行 TLS 握手和数据加解密，增加 CPU 开销，特别是首次连接延迟更明显。"
        },
        {
            id: "bp-w13-3-q3",
            question: "什么是 Sidecar-less 服务网格？",
            options: [
                "不使用代理的网格",
                "使用共享代理或 eBPF 替代每 Pod Sidecar，降低资源开销",
                "无服务网格功能",
                "只有安全功能"
            ],
            answer: 1,
            rationale: "Istio Ambient 和 Cilium Service Mesh 使用共享代理或 eBPF 替代 per-Pod Sidecar。"
        },
        {
            id: "bp-w13-3-q4",
            question: "大规模集群中 Envoy 配置膨胀如何解决？",
            options: [
                "无法解决",
                "使用 Sidecar 资源限制、懒加载配置、Namespace 隔离",
                "增加内存",
                "减少服务数"
            ],
            answer: 1,
            rationale: "可以通过设置 Sidecar 资源限制、懒加载配置、按 Namespace 隔离减少每个 Sidecar 的配置范围。"
        },
        {
            id: "bp-w13-3-q5",
            question: "如何测量服务网格增加的延迟？",
            options: [
                "无法测量",
                "对比启用和禁用 Sidecar 时的 P50/P99 延迟，使用 Fortio 基准测试",
                "只看 CPU",
                "只看内存"
            ],
            answer: 1,
            rationale: "使用 Fortio 等负载测试工具对比启用和禁用 Sidecar 时的延迟分布，特别关注 P99。"
        },
        {
            id: "bp-w13-3-q6",
            question: "Istio 的 Control Plane 和 Data Plane 分别是什么？",
            options: [
                "都是代理",
                "Control Plane (istiod) 管理配置，Data Plane (Envoy) 处理流量",
                "都是配置服务",
                "没有区别"
            ],
            answer: 1,
            rationale: "Control Plane 即 istiod 负责配置管理和下发；Data Plane 即 Envoy sidecars 负责实际流量处理。"
        },
        {
            id: "bp-w13-3-q7",
            question: "如何优化服务网格中的 mTLS 性能？",
            options: [
                "禁用加密",
                "使用 TLS 1.3、启用 Session Resumption、考虑 eBPF 加速",
                "使用更长的密钥",
                "增加握手次数"
            ],
            answer: 1,
            rationale: "TLS 1.3 减少握手开销，Session Resumption 复用连接，eBPF 可加速内核中的加解密。"
        },
        {
            id: "bp-w13-3-q8",
            question: "Envoy 的 --concurrency 参数有什么作用？",
            options: [
                "控制连接数",
                "控制工作线程数，应匹配 CPU 限制",
                "控制内存大小",
                "控制日志级别"
            ],
            answer: 1,
            rationale: "--concurrency 控制 Envoy 工作线程数，应设置为匹配容器的 CPU 限制以优化性能。"
        },
        {
            id: "bp-w13-3-q9",
            question: "什么场景适合使用服务网格？",
            options: [
                "所有场景",
                "需要统一流量管理、可观测性、安全策略的微服务架构",
                "只有小型应用",
                "只有单体应用"
            ],
            answer: 1,
            rationale: "服务网格适合需要统一管理服务间通信、可观测性和安全策略的微服务架构，但会增加复杂度。"
        },
        {
            id: "bp-w13-3-q10",
            question: "Linkerd 相比 Istio 有什么特点？",
            options: [
                "功能更多",
                "更轻量级，资源消耗更少，但功能相对简单",
                "更复杂",
                "不支持 mTLS"
            ],
            answer: 1,
            rationale: "Linkerd 设计更轻量，使用 Rust 编写的代理，资源消耗更少，但功能比 Istio 简单。"
        },
        {
            id: "bp-w13-3-q11",
            question: "如何实现服务网格的渐进式采纳？",
            options: [
                "一次性全部部署",
                "先对非关键服务启用，逐步扩展，监控性能影响",
                "只部署 Control Plane",
                "随机部署"
            ],
            answer: 1,
            rationale: "渐进式采纳：先在非关键服务启用 Sidecar 注入，观察性能影响，再逐步扩展到关键服务。"
        },
        {
            id: "bp-w13-3-q12",
            question: "Istio Ambient Mesh 如何降低开销？",
            options: [
                "禁用所有功能",
                "使用节点级共享代理替代每 Pod Sidecar",
                "只支持 HTTP",
                "不支持 mTLS"
            ],
            answer: 1,
            rationale: "Ambient Mesh 使用节点级的 ztunnel 代理替代每 Pod 的 Sidecar，大幅降低资源消耗。"
        }
    ]
}
