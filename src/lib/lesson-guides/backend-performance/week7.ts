import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "bp-w7-1": {
        lessonId: "bp-w7-1",
        background: [
            "【Linux 内核调优意义】高性能后端往往受限于操作系统默认配置。Red Hat 指出：'The default kernel parameter settings are suitable for most workloads, but high-performance applications may benefit from tuning'——默认参数适合通用场景，高负载需要专门调优。",
            "【sysctl 机制】sysctl 是 Linux 内核参数的运行时配置接口。通过 /proc/sys/ 虚拟文件系统或 sysctl 命令修改参数，/etc/sysctl.conf 实现持久化配置。",
            "【TCP 缓冲区调优】net.core.rmem_max 和 net.core.wmem_max 控制 TCP 接收/发送缓冲区的最大值。高吞吐场景（如大文件传输）需要增大缓冲区，默认 212KB 可能不足。",
            "【文件描述符限制】ulimit -n 限制单进程可打开的文件描述符数量，默认 1024 对高并发服务器远远不够。fs.file-max 控制系统级上限，需同时调整 /etc/security/limits.conf。",
            "【SOMAXCONN 半连接队列】net.core.somaxconn 定义 listen() 系统调用的 backlog 上限，即等待 accept() 的已完成 TCP 三次握手的连接数。默认 128 在高并发下会导致连接被丢弃。",
            "【TCP TIME_WAIT 优化】高并发短连接场景会产生大量 TIME_WAIT 状态连接。net.ipv4.tcp_tw_reuse 允许重用 TIME_WAIT 连接，减少端口耗尽风险。"
        ],
        keyDifficulties: [
            "【参数生效范围】sysctl 参数分为全局参数（如 fs.file-max）和 per-connection 参数（如 tcp_rmem）。应用级参数（如 SO_RCVBUF）会覆盖系统默认值，但受 rmem_max 限制。",
            "【缓冲区自动调优】Linux 默认启用 TCP 缓冲区自动调优（net.ipv4.tcp_moderate_rcvbuf=1）。手动设置 SO_RCVBUF 会禁用自动调优，可能适得其反。",
            "【SYN Flood 防护与性能】net.ipv4.tcp_syncookies 启用 SYN cookies 防止 SYN flood 攻击，但会禁用 TCP 选项（如窗口缩放），影响高延迟网络性能。需权衡安全与性能。",
            "【容器环境限制】Docker/Kubernetes 环境中，部分 sysctl 参数需要在宿主机设置，容器内无法修改。net.* 参数通常需要特权模式或 securityContext 配置。",
            "【参数调优验证】参数修改后需要通过压测验证效果。某些参数（如增大缓冲区）会增加内存占用，需监控 OOM 风险。"
        ],
        handsOnPath: [
            "查看当前内核参数：sysctl -a | grep somaxconn 查看半连接队列大小；cat /proc/sys/fs/file-max 查看系统文件描述符上限。",
            "调整 TCP 缓冲区：sysctl -w net.core.rmem_max=16777216 && sysctl -w net.core.wmem_max=16777216 增大到 16MB，适合高吞吐场景。",
            "增大文件描述符限制：修改 /etc/security/limits.conf 添加 '* soft nofile 65535' 和 '* hard nofile 65535'，重新登录生效。",
            "调优 SOMAXCONN：sysctl -w net.core.somaxconn=65535 增大半连接队列，同时确保应用 listen() 的 backlog 参数足够大。",
            "启用 TIME_WAIT 重用：sysctl -w net.ipv4.tcp_tw_reuse=1 允许重用 TIME_WAIT 连接，减少短连接场景的端口耗尽。",
            "持久化配置：将参数写入 /etc/sysctl.conf 或 /etc/sysctl.d/99-performance.conf，使用 sysctl -p 加载。",
            "验证调优效果：使用 ss -s 查看 TCP 连接状态分布，使用 netstat -an | grep TIME_WAIT | wc -l 统计 TIME_WAIT 数量。"
        ],
        selfCheck: [
            "sysctl 参数的修改如何持久化？重启后如何生效？",
            "net.core.somaxconn 参数控制什么？默认值是多少？为什么需要增大？",
            "文件描述符限制有哪两个层级？如何分别调整？",
            "TCP 缓冲区自动调优是什么？什么情况下应该禁用？",
            "net.ipv4.tcp_tw_reuse 有什么作用？在什么场景下需要启用？",
            "容器环境中调整 sysctl 参数有什么限制？如何解决？"
        ],
        extensions: [
            "学习 Linux TCP/IP 协议栈调优的完整指南，了解 tcp_max_syn_backlog、tcp_fin_timeout 等参数的作用。",
            "研究 BPF/eBPF 在网络调优中的应用，使用 bpftrace 观察内核网络栈行为。",
            "探索 XDP（eXpress Data Path）加速网络处理，在网卡驱动层直接处理数据包。",
            "学习 Linux Performance Tuning 的系统化方法论，了解 Red Hat Tuned 自动调优工具。"
        ],
        sourceUrls: [
            "https://www.kernel.org/doc/Documentation/sysctl/net.txt",
            "https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt",
            "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/monitoring_and_managing_system_status_and_performance/index"
        ]
    },
    "bp-w7-2": {
        lessonId: "bp-w7-2",
        background: [
            "【中断处理机制】Linux 内核使用中断（Interrupt）机制处理硬件事件。网卡收到数据包时触发硬中断（Hard IRQ），内核快速响应后将实际处理推迟到软中断（Softirq）。",
            "【软中断瓶颈】/proc/softirqs 显示软中断统计。NET_RX（网络接收）和 NET_TX（网络发送）是网络密集型应用的关键指标。单核处理所有软中断会成为瓶颈。",
            "【NAPI 机制】New API (NAPI) 是 Linux 网络子系统的轮询机制。高负载时从中断驱动切换到轮询模式，减少中断次数。现代网卡驱动都支持 NAPI。",
            "【RSS 与 RPS】Receive Side Scaling (RSS) 在网卡硬件层面将数据包分发到多个队列；Receive Packet Steering (RPS) 在软件层面实现类似功能。两者都旨在利用多核并行处理网络包。",
            "【CPU 亲和性】通过 /proc/irq/<IRQ>/smp_affinity 或 irqbalance 服务可以将特定中断绑定到特定 CPU 核心。合理的中断分配可以减少缓存失效和上下文切换。",
            "【中断合并】网卡支持中断合并（Interrupt Coalescing），积累多个数据包后触发一次中断。ethtool -c eth0 查看当前设置，权衡延迟与 CPU 开销。"
        ],
        keyDifficulties: [
            "【单队列网卡瓶颈】老旧网卡只有单个接收队列，所有中断集中在一个 CPU 核心。mpstat -P ALL 1 可观察各核心的 %soft 列，单核 softirq 过高表示需要启用 RPS。",
            "【RSS 哈希不均】RSS 使用哈希算法分发数据包，但特定流量模式（如大量来自同一源 IP）可能导致负载不均。需要调整哈希算法或使用 RFS（Receive Flow Steering）。",
            "【NUMA 感知】多 NUMA 节点服务器上，跨节点内存访问延迟更高。应将中断绑定到处理该流量的应用所在的 NUMA 节点，使用 numactl 验证内存分布。",
            "【中断风暴】DDoS 攻击或网络故障可能导致中断风暴（Interrupt Storm）。可通过 /proc/interrupts 观察中断频率异常，需要启用中断合并或限速机制。",
            "【irqbalance 权衡】irqbalance 服务自动分配中断，但可能不适合延迟敏感应用。手动绑定需要深入了解硬件拓扑，使用 lstopo 或 lscpu 查看 CPU 和 NUMA 布局。"
        ],
        handsOnPath: [
            "观察软中断分布：cat /proc/softirqs 查看各类型软中断统计；mpstat -P ALL 1 观察各 CPU 核心的 %soft 占比。",
            "查看网卡中断分配：cat /proc/interrupts | grep eth0 查看网卡中断号及其在各 CPU 上的分布。",
            "配置 RPS：echo 'ff' > /sys/class/net/eth0/queues/rx-0/rps_cpus 将接收队列分发到 CPU 0-7（掩码 0xff）。",
            "检查 RSS 队列数：ethtool -l eth0 查看网卡支持的队列数和当前配置；ethtool -L eth0 combined 8 设置 8 个队列。",
            "手动绑定中断：echo 2 > /proc/irq/24/smp_affinity 将 IRQ 24 绑定到 CPU 1（掩码 0x2）；停止 irqbalance 服务。",
            "调整中断合并：ethtool -C eth0 rx-usecs 100 设置接收中断延迟为 100 微秒，权衡延迟与 CPU 开销。",
            "验证 NUMA 布局：numactl --hardware 查看 NUMA 节点配置；lstopo 可视化 CPU 和内存拓扑。"
        ],
        selfCheck: [
            "硬中断和软中断有什么区别？为什么网络处理要分两阶段？",
            "什么是 RSS 和 RPS？它们解决什么问题？有什么区别？",
            "如何观察软中断是否成为瓶颈？应该关注哪些指标？",
            "什么是 CPU 亲和性？如何手动绑定中断到特定 CPU？",
            "中断合并（Interrupt Coalescing）有什么作用？如何配置？",
            "在 NUMA 架构下，为什么要考虑中断和应用的位置关系？"
        ],
        extensions: [
            "学习 DPDK（Data Plane Development Kit）绕过内核网络栈，在用户态直接处理网络包实现极低延迟。",
            "研究 AF_XDP 套接字，结合 XDP 和 BPF 实现高性能网络处理。",
            "探索 io_uring 的网络支持，使用零拷贝和批量提交减少系统调用开销。",
            "学习 CPU 隔离（isolcpus）和实时调度（SCHED_FIFO）在低延迟系统中的应用。"
        ],
        sourceUrls: [
            "https://www.kernel.org/doc/Documentation/networking/scaling.txt",
            "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/performance_tuning_guide/sect-red_hat_enterprise_linux-performance_tuning_guide-networking-configuration_tools",
            "https://www.kernel.org/doc/html/latest/networking/napi.html"
        ]
    },
    "bp-w7-3": {
        lessonId: "bp-w7-3",
        background: [
            "【传统 I/O 路径】传统文件传输（read + write）需要 4 次上下文切换和 4 次数据拷贝：磁盘→内核缓冲区→用户缓冲区→Socket 缓冲区→网卡。这是极大的 CPU 和内存带宽浪费。",
            "【零拷贝定义】零拷贝（Zero-copy）技术减少或消除 CPU 参与的数据拷贝。Linux 提供 sendfile()、splice()、mmap() 等系统调用实现零拷贝。",
            "【sendfile 机制】sendfile(out_fd, in_fd, offset, count) 直接在内核中从文件描述符传输到 Socket。支持 DMA 的网卡（带 scatter-gather）可以实现真正的零 CPU 拷贝。",
            "【mmap 内存映射】mmap() 将文件直接映射到进程地址空间，读写文件等同于访问内存。避免了 read() 系统调用的数据拷贝，但仍需要从用户空间拷贝到 Socket。",
            "【splice 管道传输】splice() 在两个文件描述符之间移动数据，无需经过用户空间。配合 pipe 可以实现灵活的零拷贝数据流转，但需要一个中间管道。",
            "【Kafka 零拷贝实践】Apache Kafka 文档指出：'This allows data to be transferred at a rate limited only by the speed of the network connection'——零拷贝是 Kafka 高吞吐的关键技术之一。"
        ],
        keyDifficulties: [
            "【DMA 与 scatter-gather】真正的零拷贝需要网卡支持 DMA scatter-gather 功能。ethtool -k eth0 | grep scatter 检查支持情况。不支持时 sendfile 仍需要一次内核内数据拷贝。",
            "【mmap 的 Page Fault】mmap 首次访问会触发缺页中断（Page Fault）加载数据到页缓存。大文件随机读取可能导致频繁缺页，性能反而不如 read() + readahead。",
            "【文件系统与块大小】零拷贝性能受文件系统块大小和页大小影响。4KB 页面在处理大文件时可能产生过多元数据操作，可考虑使用大页（Huge Pages）。",
            "【TLS 与零拷贝冲突】HTTPS 加密需要 CPU 参与，与零拷贝冲突。Linux 5.0+ 的 kTLS（Kernel TLS）将加密移到内核，与 sendfile 结合实现加密场景下的零拷贝。",
            "【内存压力与 Page Cache】零拷贝依赖 Page Cache，内存压力大时频繁换页反而降低性能。需要监控 /proc/meminfo 的 Cached 和 Dirty 指标。"
        ],
        handsOnPath: [
            "对比传统 I/O 与 sendfile：编写测试程序分别使用 read+write 和 sendfile 传输大文件，使用 strace 统计系统调用次数和 perf stat 测量 CPU 周期。",
            "检查网卡 scatter-gather 支持：ethtool -k eth0 | grep scatter-gather 确认网卡支持 DMA scatter-gather 功能。",
            "使用 mmap 读取大文件：mmap 映射文件后直接访问内存，使用 madvise(MADV_SEQUENTIAL) 提示内核预读，观察缺页统计。",
            "观察 Page Cache 效果：dd if=/dev/zero of=testfile bs=1M count=1024 创建测试文件；使用 vmtouch 预热缓存后再测试 sendfile 性能。",
            "启用 kTLS：加载 tls 内核模块（modprobe tls），配置支持 kTLS 的 Nginx/OpenSSL，使用 sendfile on; 实现加密零拷贝。",
            "监控零拷贝效果：使用 sar -n DEV 1 观察网络吞吐量；使用 perf top 确认 CPU 不再花费在数据拷贝函数上。"
        ],
        selfCheck: [
            "传统文件传输（read + write）涉及多少次数据拷贝和上下文切换？",
            "sendfile() 系统调用如何减少数据拷贝？需要什么硬件支持？",
            "mmap() 和 sendfile() 有什么区别？各自适合什么场景？",
            "什么是 DMA scatter-gather？为什么对零拷贝很重要？",
            "为什么 TLS 加密与零拷贝冲突？kTLS 如何解决这个问题？",
            "零拷贝技术在哪些开源项目中被广泛使用？"
        ],
        extensions: [
            "学习 Netty 的零拷贝实现，包括 FileRegion 和 CompositeByteBuf 的原理。",
            "研究 io_uring 的零拷贝 send/recv 支持，使用 IORING_OP_SEND_ZC 实现用户态零拷贝。",
            "探索 RDMA（Remote Direct Memory Access）技术，绕过 CPU 直接在网卡之间传输数据。",
            "学习 Linux 大页（Huge Pages）和透明大页（THP）对内存密集型应用的性能影响。"
        ],
        sourceUrls: [
            "https://man7.org/linux/man-pages/man2/sendfile.2.html",
            "https://man7.org/linux/man-pages/man2/mmap.2.html",
            "https://kafka.apache.org/documentation/#maximizingefficiency",
            "https://www.kernel.org/doc/html/latest/networking/tls.html"
        ]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w7-1": [
        {
            id: "bp-w7-1-q1",
            question: "sysctl 参数配置的持久化应该写入哪个文件？",
            options: [
                "/etc/passwd",
                "/etc/sysctl.conf 或 /etc/sysctl.d/*.conf",
                "/proc/sys/kernel/",
                "/var/log/sysctl.log"
            ],
            answer: 1,
            rationale: "sysctl 参数应写入 /etc/sysctl.conf 或 /etc/sysctl.d/ 目录下的配置文件，使用 sysctl -p 加载或重启后自动生效。"
        },
        {
            id: "bp-w7-1-q2",
            question: "net.core.somaxconn 参数控制什么？",
            options: [
                "最大文件描述符数量",
                "listen() 系统调用的 backlog 上限，即等待 accept 的连接数",
                "TCP 发送缓冲区大小",
                "最大并发线程数"
            ],
            answer: 1,
            rationale: "net.core.somaxconn 定义 listen() 的 backlog 上限，即已完成 TCP 三次握手但等待 accept() 的连接数。默认 128 在高并发下可能导致连接丢弃。"
        },
        {
            id: "bp-w7-1-q3",
            question: "Linux 默认的单进程文件描述符限制（ulimit -n）是多少？",
            options: [
                "256",
                "1024",
                "65535",
                "无限制"
            ],
            answer: 1,
            rationale: "Linux 默认的软限制是 1024，对于高并发服务器（如 Nginx、数据库）远远不够，需要通过 /etc/security/limits.conf 调整。"
        },
        {
            id: "bp-w7-1-q4",
            question: "net.ipv4.tcp_tw_reuse 参数的作用是什么？",
            options: [
                "禁用 TCP 连接",
                "允许重用 TIME_WAIT 状态的连接，减少端口耗尽",
                "增加 TCP 超时时间",
                "启用 TCP 快速打开"
            ],
            answer: 1,
            rationale: "tcp_tw_reuse=1 允许重用 TIME_WAIT 连接，对于高并发短连接场景可以减少端口耗尽风险，但需注意不适用于 NAT 环境。"
        },
        {
            id: "bp-w7-1-q5",
            question: "为什么手动设置 SO_RCVBUF 可能适得其反？",
            options: [
                "会导致连接失败",
                "会禁用 TCP 缓冲区自动调优功能",
                "会增加延迟",
                "会减少吞吐量"
            ],
            answer: 1,
            rationale: "Linux 默认启用 TCP 缓冲区自动调优。手动设置 SO_RCVBUF 会禁用自动调优，可能导致缓冲区大小不适合实际负载。"
        },
        {
            id: "bp-w7-1-q6",
            question: "如何查看当前系统的 TCP 缓冲区最大值？",
            options: [
                "cat /etc/passwd",
                "sysctl net.core.rmem_max",
                "ulimit -a",
                "top"
            ],
            answer: 1,
            rationale: "使用 sysctl net.core.rmem_max（接收）和 sysctl net.core.wmem_max（发送）查看 TCP 缓冲区最大值。"
        },
        {
            id: "bp-w7-1-q7",
            question: "net.ipv4.tcp_syncookies 参数有什么权衡？",
            options: [
                "没有任何副作用",
                "防止 SYN flood 攻击，但会禁用 TCP 选项如窗口缩放",
                "增加 CPU 开销",
                "减少可用端口"
            ],
            answer: 1,
            rationale: "tcp_syncookies 启用 SYN cookies 防止 SYN flood 攻击，但会禁用 TCP 选项（如窗口缩放），可能影响高延迟网络的性能。"
        },
        {
            id: "bp-w7-1-q8",
            question: "在 Docker 容器中修改 sysctl 参数有什么限制？",
            options: [
                "没有任何限制",
                "部分参数需要在宿主机设置，容器内无法修改",
                "所有参数都必须在容器内设置",
                "只能使用环境变量"
            ],
            answer: 1,
            rationale: "Docker 环境中，net.* 等参数通常需要在宿主机设置或使用特权模式。Kubernetes 需要通过 securityContext 配置允许的 sysctl。"
        },
        {
            id: "bp-w7-1-q9",
            question: "如何查看当前系统的 TIME_WAIT 连接数量？",
            options: [
                "top",
                "netstat -an | grep TIME_WAIT | wc -l 或 ss -s",
                "free -m",
                "df -h"
            ],
            answer: 1,
            rationale: "使用 netstat -an | grep TIME_WAIT | wc -l 或更高效的 ss -s 命令可以统计 TIME_WAIT 状态的连接数量。"
        },
        {
            id: "bp-w7-1-q10",
            question: "fs.file-max 和 ulimit -n 的区别是什么？",
            options: [
                "没有区别",
                "fs.file-max 是系统级上限，ulimit -n 是进程级限制",
                "fs.file-max 是进程级限制，ulimit -n 是系统级上限",
                "两者控制不同的资源"
            ],
            answer: 1,
            rationale: "fs.file-max 是系统级文件描述符上限，ulimit -n 是单进程限制。两者都需要调整才能支持高并发。"
        },
        {
            id: "bp-w7-1-q11",
            question: "高吞吐场景（如大文件传输）为什么需要增大 TCP 缓冲区？",
            options: [
                "减少延迟",
                "增大带宽延迟积（BDP）容量，充分利用网络带宽",
                "减少 CPU 使用",
                "增加安全性"
            ],
            answer: 1,
            rationale: "TCP 缓冲区应至少等于 BDP（带宽 × 延迟），才能在数据传输过程中保持管道满载。默认 212KB 在高带宽高延迟网络中不足。"
        },
        {
            id: "bp-w7-1-q12",
            question: "sysctl -p 命令的作用是什么？",
            options: [
                "显示所有参数",
                "从配置文件加载 sysctl 参数使其生效",
                "删除所有配置",
                "备份当前配置"
            ],
            answer: 1,
            rationale: "sysctl -p 从 /etc/sysctl.conf（或指定文件）加载参数使其立即生效，无需重启系统。"
        }
    ],
    "bp-w7-2": [
        {
            id: "bp-w7-2-q1",
            question: "Linux 内核中硬中断和软中断的区别是什么？",
            options: [
                "硬中断和软中断完全相同",
                "硬中断由硬件触发需快速响应，软中断是延迟处理的内核任务",
                "软中断由硬件触发，硬中断由软件触发",
                "只有软中断用于网络处理"
            ],
            answer: 1,
            rationale: "硬中断由硬件事件触发，需要快速响应；软中断（Softirq）是延迟处理机制，将耗时操作从硬中断处理程序中分离出来。"
        },
        {
            id: "bp-w7-2-q2",
            question: "/proc/softirqs 中的 NET_RX 表示什么？",
            options: [
                "网络发送软中断",
                "网络接收软中断的统计",
                "网络错误数",
                "网络连接数"
            ],
            answer: 1,
            rationale: "NET_RX 是网络接收软中断的统计，NET_TX 是发送。高 NET_RX 表示网络接收处理繁忙，可能需要调优 RPS/RSS。"
        },
        {
            id: "bp-w7-2-q3",
            question: "RSS 和 RPS 的主要区别是什么？",
            options: [
                "没有区别",
                "RSS 在网卡硬件层面分发，RPS 在软件层面分发",
                "RPS 在网卡硬件层面分发，RSS 在软件层面分发",
                "RSS 用于接收，RPS 用于发送"
            ],
            answer: 1,
            rationale: "RSS（Receive Side Scaling）在网卡硬件层面将数据包分发到多个队列；RPS（Receive Packet Steering）在软件层面实现类似功能，用于不支持 RSS 的网卡。"
        },
        {
            id: "bp-w7-2-q4",
            question: "如何查看软中断是否成为单核瓶颈？",
            options: [
                "cat /proc/cpuinfo",
                "mpstat -P ALL 1 观察各核心的 %soft 列",
                "free -m",
                "df -h"
            ],
            answer: 1,
            rationale: "使用 mpstat -P ALL 1 可以观察各 CPU 核心的 %soft 列，如果某一核心的软中断占比远高于其他核心，说明存在瓶颈。"
        },
        {
            id: "bp-w7-2-q5",
            question: "ethtool -C eth0 rx-usecs 100 命令的作用是什么？",
            options: [
                "设置 MTU 大小",
                "设置接收中断合并延迟为 100 微秒",
                "设置接收缓冲区大小",
                "设置连接超时"
            ],
            answer: 1,
            rationale: "ethtool -C 配置中断合并参数，rx-usecs 100 表示接收中断延迟 100 微秒，积累数据包后批量触发中断，权衡延迟与 CPU 开销。"
        },
        {
            id: "bp-w7-2-q6",
            question: "什么是 NAPI 机制？",
            options: [
                "一种网络加密协议",
                "Linux 网络子系统的轮询机制，高负载时减少中断次数",
                "一种路由协议",
                "一种存储协议"
            ],
            answer: 1,
            rationale: "NAPI（New API）是 Linux 网络子系统的轮询机制。高负载时从中断驱动切换到轮询模式，减少中断次数，提高效率。"
        },
        {
            id: "bp-w7-2-q7",
            question: "如何将 IRQ 24 绑定到 CPU 1？",
            options: [
                "sysctl -w irq.24=1",
                "echo 2 > /proc/irq/24/smp_affinity",
                "ethtool -L eth0 24 1",
                "taskset -c 1 irq24"
            ],
            answer: 1,
            rationale: "使用 echo 2 > /proc/irq/24/smp_affinity 将 IRQ 24 绑定到 CPU 1（2 是 CPU 1 的掩码，二进制 10）。"
        },
        {
            id: "bp-w7-2-q8",
            question: "在 NUMA 架构下，为什么要考虑中断和应用的位置关系？",
            options: [
                "没有影响",
                "跨 NUMA 节点访问内存延迟更高，应将中断绑定到应用所在节点",
                "NUMA 只影响 CPU 调度",
                "NUMA 只影响磁盘 I/O"
            ],
            answer: 1,
            rationale: "NUMA 架构下跨节点内存访问延迟更高。应将网卡中断绑定到处理网络流量的应用所在的 NUMA 节点，减少跨节点数据拷贝。"
        },
        {
            id: "bp-w7-2-q9",
            question: "irqbalance 服务的作用是什么？",
            options: [
                "禁用所有中断",
                "自动在 CPU 核心之间分配中断负载",
                "增加中断频率",
                "记录中断日志"
            ],
            answer: 1,
            rationale: "irqbalance 服务自动在 CPU 核心之间平衡中断负载，但可能不适合延迟敏感应用。手动绑定时需要停止此服务。"
        },
        {
            id: "bp-w7-2-q10",
            question: "ethtool -l eth0 命令显示什么信息？",
            options: [
                "网卡的 MAC 地址",
                "网卡支持的队列数和当前配置",
                "网卡的 IP 地址",
                "网卡的速度"
            ],
            answer: 1,
            rationale: "ethtool -l 显示网卡支持的 combined/rx/tx 队列数量和当前配置。多队列网卡可以利用 RSS 分发负载到多个 CPU。"
        },
        {
            id: "bp-w7-2-q11",
            question: "什么是中断风暴（Interrupt Storm）？",
            options: [
                "正常的高负载情况",
                "中断频率异常高，导致 CPU 大量时间花在中断处理上",
                "网络带宽满载",
                "磁盘 I/O 瓶颈"
            ],
            answer: 1,
            rationale: "中断风暴是中断频率异常高的情况（如 DDoS 攻击），CPU 大量时间花在中断处理上，影响正常业务。可通过中断合并或限速缓解。"
        },
        {
            id: "bp-w7-2-q12",
            question: "如何配置 RPS 将接收队列分发到 CPU 0-7？",
            options: [
                "ethtool -K eth0 rps on",
                "echo 'ff' > /sys/class/net/eth0/queues/rx-0/rps_cpus",
                "sysctl -w net.rps.cpus=ff",
                "ip link set eth0 rps ff"
            ],
            answer: 1,
            rationale: "将 CPU 掩码 ff（二进制 11111111，表示 CPU 0-7）写入 /sys/class/net/eth0/queues/rx-0/rps_cpus 即可启用 RPS。"
        }
    ],
    "bp-w7-3": [
        {
            id: "bp-w7-3-q1",
            question: "传统文件传输（read + write 到 socket）涉及多少次数据拷贝？",
            options: [
                "1 次",
                "2 次",
                "4 次",
                "不确定"
            ],
            answer: 2,
            rationale: "传统方式涉及 4 次拷贝：磁盘→内核缓冲区→用户缓冲区→Socket 缓冲区→网卡。零拷贝技术旨在减少这些拷贝。"
        },
        {
            id: "bp-w7-3-q2",
            question: "sendfile() 系统调用的主要优势是什么？",
            options: [
                "增加安全性",
                "直接在内核中从文件传输到 Socket，避免用户空间拷贝",
                "支持加密传输",
                "增加并发连接数"
            ],
            answer: 1,
            rationale: "sendfile() 直接在内核中从文件描述符传输到 Socket，跳过用户空间，减少数据拷贝和上下文切换。"
        },
        {
            id: "bp-w7-3-q3",
            question: "真正的零 CPU 拷贝需要网卡支持什么功能？",
            options: [
                "TSO（TCP Segmentation Offload）",
                "DMA scatter-gather",
                "VLAN tagging",
                "Jumbo frames"
            ],
            answer: 1,
            rationale: "DMA scatter-gather 允许网卡直接从多个不连续的内存位置收集数据发送，无需 CPU 参与拷贝。使用 ethtool -k 可检查支持情况。"
        },
        {
            id: "bp-w7-3-q4",
            question: "mmap() 和 sendfile() 的主要区别是什么？",
            options: [
                "没有区别",
                "mmap 将文件映射到用户空间，sendfile 完全在内核空间操作",
                "sendfile 比 mmap 慢",
                "mmap 只能用于小文件"
            ],
            answer: 1,
            rationale: "mmap() 将文件映射到用户地址空间，应用可直接访问；sendfile() 完全在内核空间操作，数据不经过用户空间。"
        },
        {
            id: "bp-w7-3-q5",
            question: "使用 mmap 读取大文件可能遇到什么性能问题？",
            options: [
                "无法读取大文件",
                "首次访问触发缺页中断（Page Fault），随机读取可能频繁缺页",
                "只能顺序读取",
                "不支持并发访问"
            ],
            answer: 1,
            rationale: "mmap 首次访问会触发缺页中断加载数据。大文件随机读取可能导致频繁缺页，性能反而不如 read() + readahead。"
        },
        {
            id: "bp-w7-3-q6",
            question: "Apache Kafka 使用什么技术实现高吞吐？",
            options: [
                "压缩算法",
                "零拷贝（sendfile）技术",
                "内存数据库",
                "分布式锁"
            ],
            answer: 1,
            rationale: "Kafka 文档指出零拷贝是其高吞吐的关键技术之一，使用 sendfile 系统调用直接在内核中将日志文件数据传输到网络。"
        },
        {
            id: "bp-w7-3-q7",
            question: "为什么 TLS 加密与零拷贝技术冲突？",
            options: [
                "TLS 需要更多内存",
                "TLS 加密需要 CPU 参与数据处理，无法直接跳过",
                "TLS 不支持大文件",
                "两者没有冲突"
            ],
            answer: 1,
            rationale: "TLS 加密需要 CPU 读取数据、加密后再发送，无法使用传统零拷贝。kTLS 将加密移到内核层解决此问题。"
        },
        {
            id: "bp-w7-3-q8",
            question: "kTLS（Kernel TLS）解决什么问题？",
            options: [
                "增加加密强度",
                "将 TLS 加密移到内核，与 sendfile 结合实现加密场景下的零拷贝",
                "减少密钥长度",
                "支持更多加密算法"
            ],
            answer: 1,
            rationale: "kTLS 将 TLS 加密/解密移到内核层处理，允许与 sendfile 结合使用，在 HTTPS 场景下也能享受零拷贝的性能优势。"
        },
        {
            id: "bp-w7-3-q9",
            question: "splice() 系统调用的特点是什么？",
            options: [
                "只能用于文件",
                "在两个文件描述符之间移动数据，无需经过用户空间",
                "只能用于网络",
                "需要 root 权限"
            ],
            answer: 1,
            rationale: "splice() 在两个文件描述符之间移动数据，无需经过用户空间。配合 pipe 可以实现灵活的零拷贝数据流转。"
        },
        {
            id: "bp-w7-3-q10",
            question: "如何检查网卡是否支持 scatter-gather 功能？",
            options: [
                "ip link show",
                "ethtool -k eth0 | grep scatter-gather",
                "lspci",
                "dmesg"
            ],
            answer: 1,
            rationale: "使用 ethtool -k eth0 | grep scatter-gather 可以检查网卡是否支持 scatter-gather 功能，这对真正的零拷贝很重要。"
        },
        {
            id: "bp-w7-3-q11",
            question: "零拷贝性能受什么内核机制影响？",
            options: [
                "进程调度",
                "Page Cache 和内存压力",
                "用户权限",
                "文件系统类型"
            ],
            answer: 1,
            rationale: "零拷贝依赖 Page Cache。内存压力大时频繁换页反而降低性能。需要监控 /proc/meminfo 的 Cached 和 Dirty 指标。"
        },
        {
            id: "bp-w7-3-q12",
            question: "madvise(MADV_SEQUENTIAL) 的作用是什么？",
            options: [
                "锁定内存页",
                "提示内核数据将被顺序访问，优化预读策略",
                "释放内存页",
                "禁用缓存"
            ],
            answer: 1,
            rationale: "madvise(MADV_SEQUENTIAL) 告诉内核该内存区域将被顺序访问，内核会积极预读，减少缺页中断。"
        }
    ]
}
