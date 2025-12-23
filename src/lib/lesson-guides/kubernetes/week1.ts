import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "w1-4": {
        lessonId: "w1-4",
        background: [
            "容器网络的基础是 Linux 的虚拟网络设备：veth pair（虚拟以太网对）连接不同的网络命名空间，bridge（网桥）在同一宿主机上连接多个容器，iptables/nftables 实现 NAT 和防火墙规则。",
            "Docker 默认使用 bridge 网络模式：每个容器获得一个 veth pair，一端在容器的 Network Namespace 中（通常叫 eth0），另一端连接到宿主机的 docker0 网桥。容器间通过网桥二层转发通信。",
            "veth pair 总是成对创建，像一根虚拟网线——一端发送的数据立即在另一端接收。任一端断开，整个链路状态变为 down。这是容器与宿主机网络连接的基础设施。",
            "iptables 是 Linux 的包过滤和 NAT 工具。Docker 用它实现容器的端口映射（-p 参数，DNAT）、源地址伪装（MASQUERADE，让容器访问外网）和网络隔离规则。"
        ],
        keyDifficulties: [
            "用户自定义 bridge vs 默认 docker0：默认 bridge 不支持容器名 DNS 解析（需用 IP 或废弃的 --link），用户自定义 bridge 自带 DNS 服务，容器可通过名称互相访问，推荐使用。",
            "端口映射原理：-p 8080:80 在 iptables NAT 表的 PREROUTING 链添加 DNAT 规则，将宿主机 8080 端口流量转发到容器 80 端口。POSTROUTING 链的 MASQUERADE 规则让容器回包能正确返回。",
            "网络命名空间抓包位置：在容器内 eth0 抓包只能看到该容器的流量；在宿主机的 veth 端或 docker0 网桥抓包可以看到多个容器的流量，便于排查网络问题。",
            "IP 转发与路由：Docker 需要启用 net.ipv4.ip_forward。容器访问外网依赖 IP 转发和 iptables FORWARD 链允许流量通过。容器无法访问外网时应首先检查这两项。"
        ],
        handsOnPath: [
            "运行一个容器，使用 ip link show 和 bridge link（或 brctl show）查看 veth pair 和 docker0 网桥的对应关系，确认容器 eth0 的 peer 在宿主机上。",
            "在容器内和宿主机上分别使用 tcpdump 抓包，发起请求后对比同一数据包在不同位置的表现，理解数据路径。",
            "查看 iptables -t nat -L -n 和 iptables -L DOCKER -n，找到 Docker 添加的 NAT 规则（DNAT/MASQUERADE）和 FORWARD 规则，理解端口映射和网络隔离的实现。",
            "创建用户自定义 bridge 网络：docker network create mynet，启动两个容器连接该网络，验证它们可以通过容器名互相 ping 通（DNS 解析生效）。"
        ],
        selfCheck: [
            "veth pair 是什么？它在容器网络中扮演什么角色？如果一端断开会发生什么？",
            "为什么官方推荐使用用户自定义 bridge 网络而不是默认的 docker0？列出至少两个优势。",
            "当你使用 -p 8080:80 发布端口时，Docker 在 iptables 中做了什么？请描述 DNAT 规则的作用。",
            "如果容器无法访问外网，你会检查哪些地方？（提示：IP 转发、FORWARD 链、NAT 规则）",
            "在哪里抓包可以同时看到多个容器的网络流量？为什么？"
        ],
        extensions: [
            "学习 ip netns 命令，手动创建网络命名空间和 veth pair，不借助 Docker 搭建类似容器网络的实验环境。",
            "研究 Docker 的其他网络驱动：host（共享宿主机网络栈）、none（无网络）、macvlan（容器直接获得物理网络 IP）、ipvlan 的适用场景。",
            "阅读 K8s CNI（Container Network Interface）规范，了解 K8s 如何通过插件机制为 Pod 配置网络。",
            "探索 Calico、Flannel、Cilium 等 CNI 插件的架构差异：Overlay（VXLAN）vs 路由/BGP 模式，以及 eBPF 数据平面。"
        ],
        sourceUrls: [
            "https://docs.docker.com/engine/network/drivers/bridge/",
            "https://man7.org/linux/man-pages/man4/veth.4.html",
            "https://docs.docker.com/engine/network/packet-filtering-firewalls/"
        ]
    },
    "w1-3": {
        lessonId: "w1-3",
        background: [
            "OverlayFS 是一种联合文件系统（Union Filesystem），将多个目录层叠合并成一个统一视图呈现给用户。Docker 默认使用 overlay2 驱动，原生支持最多 128 个下层。",
            "容器镜像的分层结构依赖于 OverlayFS：lowerdir（只读镜像层）+ upperdir（可写容器层）= merged（合并视图）。Dockerfile 中每条指令创建一个新层，层层堆叠形成最终镜像。",
            "Copy-on-Write（写时复制）是 OverlayFS 的核心机制：当容器首次修改来自镜像的文件时，整个文件先被复制到 upperdir，后续修改都在副本上进行。这就是为什么删除镜像中的文件不会减小镜像体积。",
            "理解镜像分层对于优化 Dockerfile、减小镜像体积、加速构建和部署都至关重要——每一层都是不可变的，只增不减。"
        ],
        keyDifficulties: [
            "Copy-on-Write 的性能影响：首次写入大文件时会有明显延迟（copy_up 操作复制整个文件）。对于频繁修改的大文件（如数据库），建议使用 Volume 绕过存储驱动。",
            "Whiteout 机制：当在容器中删除来自镜像的文件时，并不会真正删除，而是创建一个特殊的 whiteout 文件（字符设备或 xattr）来'遮盖'它。opaque 目录则隐藏整个镜像目录而不实际删除。",
            "层数与性能：overlay2 支持最多 128 层，过多的层会影响文件查找性能。多阶段构建可以减少最终镜像的层数。同时，共享镜像层的容器可以共享页面缓存，提高内存效率。",
            "POSIX 兼容性问题：OverlayFS 不完全兼容 POSIX。例如先以只读模式打开文件，再以读写模式打开，由于 copy_up 时机，可能得到两个不同文件描述符指向不同版本——某些应用需要预先 touch 文件来规避。"
        ],
        handsOnPath: [
            "使用 docker image inspect <image> 查看镜像层信息，找到每层在 /var/lib/docker/overlay2/ 中的位置，观察 diff/、link、lower、merged/ 目录结构。",
            "运行一个容器，在其中创建文件，然后在宿主机的 upperdir（merged 的上层目录）中找到这个文件，验证写入发生在可写层。",
            "写一个 Dockerfile，故意在某一层添加 100MB 文件再删除：RUN dd if=/dev/zero of=/bigfile bs=1M count=100 && rm /bigfile，构建后观察镜像大小，理解'删除不减小体积'。",
            "使用 docker history <image> 查看每一层的大小和创建命令，分析哪些层可以通过合并 RUN 指令来优化。"
        ],
        selfCheck: [
            "OverlayFS 的三层结构（lowerdir、upperdir、merged）以及 workdir 各自的作用是什么？",
            "为什么在 Dockerfile 中 RUN apt-get install && apt-get clean 比分开写两个 RUN 更好？如果分开写会有什么问题？",
            "什么是 whiteout 文件？它解决了什么问题？opaque 目录又是什么？",
            "为什么数据库、日志等写密集型应用建议使用 Volume 而不是直接写容器文件系统？",
            "多阶段构建（multi-stage build）如何帮助减少镜像层数和体积？"
        ],
        extensions: [
            "阅读 Docker 官方文档，比较不同存储驱动（overlay2、btrfs、zfs、devicemapper）的特点和适用场景。",
            "深入研究 OCI Image Spec，了解镜像层的标准格式（tar+gzip）和 manifest 分发机制。",
            "学习使用 dive 工具分析镜像每一层的内容和体积占用，找出优化机会。",
            "探索 BuildKit 的缓存挂载（--mount=type=cache）和并行构建机制，了解如何加速镜像构建。"
        ],
        sourceUrls: [
            "https://docs.docker.com/engine/storage/drivers/overlayfs-driver/",
            "https://docs.kernel.org/filesystems/overlayfs.html",
            "https://docs.docker.com/get-started/docker-overview/#images"
        ]
    },
    "w1-2": {
        lessonId: "w1-2",
        background: [
            "Cgroups（Control Groups）是 Linux 内核提供的资源限制与监控机制，用于将进程组织成层级结构，并沿层级分配和限制 CPU、内存、I/O 等物理资源。",
            "如果说 Namespace 决定了进程'能看到什么'，那么 Cgroups 决定了'能用多少'——两者配合构成容器隔离的完整基础。K8s 的 requests/limits、Docker 的 --memory/--cpus 参数底层都是 Cgroups。",
            "Cgroups v2 采用统一层级（single unified hierarchy），所有控制器共享同一棵树；v1 每个控制器独立层级，更灵活但也更复杂。现代容器运行时和 K8s 默认使用 v2。",
            "核心控制器包括：cpu（CPU 时间分配）、memory（内存限制与 OOM 控制）、io（块设备 I/O 限速）、pids（限制进程数量防止 fork bomb）。"
        ],
        keyDifficulties: [
            "Cgroups v1 vs v2 核心区别：v2 强制单一层级，所有控制器在同一棵树上；v2 有'no internal process'规则——非根 cgroup 如果有子 cgroup，就不能直接包含进程。",
            "CPU 限制的两种模式：cpu.weight（权重/软限制，资源空闲时可超用）vs cpu.max（配额/硬限制，绝对上限）。K8s 的 requests 对应 shares/weight，limits 对应 quota/max。",
            "内存限制层级：memory.min（硬保证）→ memory.low（软保护）→ memory.high（触发回收但不 OOM）→ memory.max（硬限制，超出触发 OOM Killer）。理解这个层级对排查 OOMKilled 至关重要。",
            "Top-Down 约束：资源从父 cgroup 向下流动，子 cgroup 不能突破父级限制。在父 cgroup 的 cgroup.subtree_control 中启用控制器后，子 cgroup 才能使用。"
        ],
        handsOnPath: [
            "查看系统 cgroup 版本：cat /proc/filesystems | grep cgroup，检查 /sys/fs/cgroup 目录结构（v2 是统一目录，v1 有多个子目录如 cpu、memory）。",
            "运行 docker run -m 100m --memory-swap 100m stress --vm 1 --vm-bytes 150M，观察容器因内存超限被 OOM Kill 的过程，使用 dmesg | tail 查看 OOM 日志。",
            "使用 docker stats 实时监控容器 CPU/内存使用，对比 cgroup 文件中的原始数据：cat /sys/fs/cgroup/docker/<container-id>/memory.current。",
            "实验 --cpus=0.5 和 --cpu-shares=512 的区别：前者是硬限制（最多用 50% CPU），后者是软限制（资源竞争时按比例分配，空闲时可超用）。"
        ],
        selfCheck: [
            "Cgroups v1 和 v2 的主要架构区别是什么？你的系统使用的是哪个版本？如何确认？",
            "K8s Pod 的 resources.requests.cpu 和 resources.limits.cpu 分别对应 cgroup 的什么机制？它们在调度和运行时的作用有何不同？",
            "解释 memory.min、memory.low、memory.high、memory.max 四个参数的区别，容器内存使用逼近各阈值时分别会发生什么？",
            "为什么设置 --memory-swap 等于 --memory 可以禁用容器的 swap？如果不设置会怎样？",
            "如果一个容器的 CPU limit 是 2，它能同时使用 4 个 CPU 核心各 50% 吗？为什么？"
        ],
        extensions: [
            "阅读 Linux 内核文档 cgroup-v2.html，深入理解各控制器的参数和行为，特别是 cpu.max.burst 和 io.latency。",
            "研究 K8s 的三种 QoS 类（Guaranteed、Burstable、BestEffort）如何基于 cgroup 配置实现不同的服务质量保证和驱逐优先级。",
            "了解 CPU Manager 和 Memory Manager（Kubelet 组件）如何在节点级别优化资源分配，实现 CPU 绑核等高级调度。",
            "探索 systemd-cgtop、cadvisor、cAdvisor 等工具如何读取 cgroup 文件系统来监控容器资源使用。"
        ],
        sourceUrls: [
            "https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html",
            "https://man7.org/linux/man-pages/man7/cgroups.7.html",
            "https://docs.docker.com/engine/containers/resource_constraints/"
        ]
    },
    "w1-1": {
        lessonId: "w1-1",
        background: [
            "【隔离本质】Linux Namespace 是内核级资源隔离抽象层，使 namespace 内的进程看起来拥有独立的全局资源实例。namespaces(7) 明确指出这是'wrapping a global system resource in an abstraction'——容器技术的核心基石。",
            "【八种类型】Linux 共有 8 种 Namespace：Cgroup (CLONE_NEWCGROUP)、IPC (CLONE_NEWIPC)、Network (CLONE_NEWNET)、Mount (CLONE_NEWNS)、PID (CLONE_NEWPID)、Time (CLONE_NEWTIME)、User (CLONE_NEWUSER)、UTS (CLONE_NEWUTS)。Time namespace 是最新添加的（Linux 5.6）。",
            "【三大系统调用】clone(2) 创建新进程时指定隔离标志；unshare(2) 将当前进程移入新 namespace；setns(2) 通过 /proc/[pid]/ns/* 文件描述符加入已存在的 namespace。这三个 API 构成 namespace 操作的完整接口。",
            "【权限模型】namespaces(7) 指出：'Creation of new namespaces using clone(2) and unshare(2) in most cases requires CAP_SYS_ADMIN'，唯独 User Namespace 自 Linux 3.8 起可由非特权用户创建——rootless container 的技术基础。",
            "【K8s 安全边界】hostPID、hostNetwork、hostIPC 配置本质上就是选择性突破 namespace 隔离边界。理解 namespace 是理解 Pod 安全模型的前提。"
        ],
        keyDifficulties: [
            "【隔离范围差异】PID namespace 让容器内进程从 PID 1 开始，但宿主机通过 /proc 可见真实 PID；Network namespace 隔离网络栈但某些 sysctl 参数是全局共享的。每种 namespace 的隔离边界需要精确理解。",
            "【pid vs pid_for_children】namespaces(7) 区分 /proc/[pid]/ns/pid（进程当前所属，生命周期内不变）与 pid_for_children（影响子进程的 namespace，可被 unshare/setns 改变）。这是理解 namespace 继承的关键。",
            "【生命周期 Pin 机制】namespace 在所有成员进程退出后不会立即销毁——只要存在 fd 引用、bind mount 或层级依赖就会持续存在。pause 容器正是利用此特性为 Pod 保持 namespace。",
            "【per-user limits】Linux 4.9+ 的 /proc/sys/user/max_*_namespaces 限制每个用户可创建的 namespace 数量，对所有用户（包括 UID 0）生效，且会计入祖先 user namespace 防止逃逸。"
        ],
        handsOnPath: [
            "执行 ls -la /proc/self/ns/ 或 lsns 查看当前进程所属 namespace，观察 inode 编号作为唯一标识符（如 net:[4026531969]）。",
            "运行 docker run --rm -it alpine sh，容器内执行 ps aux 和 hostname，对比宿主机输出，体会 PID/UTS namespace 隔离效果。",
            "使用 unshare -Ur 创建新 user namespace 并映射为内部 root（-r），验证 id 命令输出变化，理解 UID 映射机制。",
            "使用 unshare -p -f --mount-proc /bin/bash 创建新 PID namespace，验证 PID 从 1 开始，理解 --mount-proc 重新挂载 /proc 的必要性。",
            "实验 docker run --pid=host 和 docker run --net=host，观察取消隔离后容器可见资源范围变化，评估安全影响。",
            "查看 /proc/sys/user/max_user_namespaces 等限制文件，尝试创建超过限制数量的 namespace 观察 ENOSPC 错误。"
        ],
        selfCheck: [
            "你能说出 Linux 8 种 namespace 各自隔离的资源类型及对应的 CLONE_NEW* 标志吗？哪种 namespace 最新添加？",
            "创建新 namespace 需要什么权限？哪种 namespace 是例外？这对 rootless container 有什么意义？",
            "解释 /proc/[pid]/ns/pid 与 /proc/[pid]/ns/pid_for_children 的区别，后者何时可能返回空链接？",
            "namespace 在进程退出后如何被'pin'住不销毁？列举至少三种 pin 机制。",
            "K8s Pod 配置 hostNetwork: true 时，Pod 内进程与宿主机共享什么？存在哪些安全风险？",
            "pause 容器在 K8s Pod 中扮演什么角色？如果被杀死会发生什么？"
        ],
        extensions: [
            "【深入 man 页】阅读 namespaces(7) 完整文档，特别关注 Namespace lifetime 部分的所有 pin 因素和 /proc/sys/user 限制机制。",
            "【rootless 实践】研究 rootless Podman 的实现原理，了解 User Namespace 如何在完全无特权的情况下运行容器。",
            "【PSS 策略】探索 K8s Pod Security Standards，理解 Baseline 和 Restricted 策略如何限制 hostPID/hostIPC/hostNetwork。",
            "【源码追踪】阅读 runc 或 containerd 中 namespace 创建流程，理解容器运行时如何调用 clone/unshare/setns。"
        ],
        sourceUrls: [
            "https://man7.org/linux/man-pages/man7/namespaces.7.html",
            "https://docs.kernel.org/admin-guide/namespaces/index.html",
            "https://www.docker.com/play-with-docker/"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "w1-4": [
        {
            id: "w1-4-q1",
            question: "veth pair 的工作原理是什么？",
            options: [
                "单向数据传输管道",
                "成对创建的虚拟网卡，数据从一端发送立即在另一端接收",
                "共享内存通信机制",
                "无线网络模拟设备"
            ],
            answer: 1,
            rationale: "veth 总是成对创建，像一根虚拟网线。一端发送的数据立即在另一端接收，任一端断开整个链路状态变为 down。"
        },
        {
            id: "w1-4-q2",
            question: "Docker 默认的网络模式是什么？",
            options: [
                "host",
                "none",
                "bridge",
                "overlay"
            ],
            answer: 2,
            rationale: "Docker 默认使用 bridge 网络模式，创建 docker0 网桥，每个容器通过 veth pair 连接到该网桥。"
        },
        {
            id: "w1-4-q3",
            question: "为什么官方推荐使用用户自定义 bridge 网络？",
            options: [
                "性能更好",
                "提供自动 DNS 解析，容器可通过名称互相访问",
                "占用更少的 IP 地址",
                "自动分配公网 IP"
            ],
            answer: 1,
            rationale: "用户自定义 bridge 网络内置 DNS 服务，容器可通过名称或别名互相访问。默认 docker0 不支持 DNS 解析，只能用 IP 或废弃的 --link。"
        },
        {
            id: "w1-4-q4",
            question: "docker run -p 8080:80 在 iptables 中做了什么？",
            options: [
                "创建防火墙规则阻止 80 端口",
                "添加 DNAT 规则将宿主机 8080 端口流量转发到容器 80 端口",
                "直接绑定宿主机物理网卡端口",
                "创建端口别名映射"
            ],
            answer: 1,
            rationale: "Docker 通过 iptables NAT 表的 PREROUTING 链添加 DNAT 规则实现端口映射，将目标地址改写为容器 IP:80。"
        },
        {
            id: "w1-4-q5",
            question: "在哪里抓包可以看到多个容器的网络流量？",
            options: [
                "容器内的 eth0 接口",
                "宿主机的 docker0 网桥或 veth 端",
                "宿主机的物理网卡",
                "无法同时看到多个容器的流量"
            ],
            answer: 1,
            rationale: "在 docker0 网桥或 veth 的宿主机端抓包可以看到连接到该网桥的所有容器流量，便于排查容器间通信问题。"
        },
        {
            id: "w1-4-q6",
            question: "如果 veth pair 的一端断开（down）会发生什么？",
            options: [
                "另一端继续正常工作",
                "整个链路状态变为 down，无法通信",
                "自动创建新的配对",
                "数据暂存等待重连"
            ],
            answer: 1,
            rationale: "veth pair 是强耦合的，任一端停止工作会导致整个链路失效，这是其设计特性。"
        },
        {
            id: "w1-4-q7",
            question: "默认 bridge 网络中容器如何互相访问？",
            options: [
                "通过容器名直接访问",
                "只能通过 IP 地址访问（或使用废弃的 --link）",
                "通过 DNS 服务自动解析",
                "容器间无法直接通信"
            ],
            answer: 1,
            rationale: "默认 bridge 网络（docker0）不提供 DNS 解析，容器只能通过 IP 地址或废弃的 --link 方式互相访问。推荐使用用户自定义 bridge。"
        },
        {
            id: "w1-4-q8",
            question: "以下哪个命令可以查看 Docker 创建的 NAT 规则？",
            options: [
                "docker network ls",
                "iptables -t nat -L -n",
                "netstat -an",
                "ip route show"
            ],
            answer: 1,
            rationale: "Docker 的端口映射规则存储在 iptables 的 nat 表中，可通过 iptables -t nat -L -n 查看 DNAT 和 MASQUERADE 规则。"
        },
        {
            id: "w1-4-q9",
            question: "容器无法访问外网时，首先应该检查什么？",
            options: [
                "DNS 配置是否正确",
                "IP 转发是否启用（ip_forward）和 iptables FORWARD 链是否允许",
                "容器内存是否不足",
                "Docker 版本是否最新"
            ],
            answer: 1,
            rationale: "外网访问依赖 IP 转发（net.ipv4.ip_forward=1）和 iptables FORWARD 链允许流量通过。这是最常见的容器网络问题根因。"
        },
        {
            id: "w1-4-q10",
            question: "以下哪个不是 Docker 支持的网络驱动？",
            options: [
                "bridge",
                "host",
                "tunnel",
                "macvlan"
            ],
            answer: 2,
            rationale: "Docker 支持 bridge、host、none、overlay、macvlan、ipvlan 等网络驱动，但没有 tunnel 驱动。"
        },
        {
            id: "w1-4-q11",
            question: "Docker 使用 MASQUERADE 规则的作用是什么？",
            options: [
                "隐藏容器的真实 IP 地址，防止被攻击",
                "让容器使用宿主机 IP 访问外网，实现源地址转换",
                "加速网络数据包传输",
                "为容器分配公网 IP 地址"
            ],
            answer: 1,
            rationale: "MASQUERADE 是动态 SNAT，将容器的源 IP 替换为宿主机出口 IP，使容器能够访问外部网络并正确接收返回数据包。"
        },
        {
            id: "w1-4-q12",
            question: "K8s CNI 插件的作用是什么？",
            options: [
                "管理容器镜像的构建和分发",
                "为 Pod 配置网络，实现容器间通信和网络策略",
                "监控容器资源使用情况",
                "调度 Pod 到合适的节点"
            ],
            answer: 1,
            rationale: "CNI（Container Network Interface）插件负责 K8s 中 Pod 的网络配置、IP 分配和容器间通信，是 K8s 网络的核心组件。"
        },
        {
            id: "w1-4-q13",
            question: "使用 ip link add 创建 veth pair 时，正确的命令格式是？",
            options: [
                "ip link add veth0 type veth",
                "ip link add veth0 type veth peer name veth1",
                "ip link create veth0 veth1",
                "ip veth add veth0 veth1"
            ],
            answer: 1,
            rationale: "veth 必须成对创建，正确格式是 ip link add <name1> type veth peer name <name2>，创建互联的两个虚拟网卡。"
        },
        {
            id: "w1-4-q14",
            question: "Docker bridge 网络中的 com.docker.network.bridge.enable_icc 选项控制什么？",
            options: [
                "是否启用 IP 伪装（masquerade）",
                "是否允许容器间通信（Inter-Container Connectivity）",
                "是否启用 IPv6 支持",
                "是否允许外部访问容器"
            ],
            answer: 1,
            rationale: "enable_icc 控制同一 bridge 网络上的容器间是否可以直接通信。默认为 true，设为 false 可实现更严格的隔离。"
        },
        {
            id: "w1-4-q15",
            question: "关于 Docker 与 ufw 防火墙的兼容性，以下说法正确的是？",
            options: [
                "两者完美兼容，可以同时使用",
                "Docker 的 NAT 规则可能绕过 ufw 的 INPUT/OUTPUT 链，导致规则被忽略",
                "ufw 优先级高于 Docker 规则",
                "需要先禁用 ufw 才能使用 Docker"
            ],
            answer: 1,
            rationale: "Docker 在 NAT 表中路由容器流量，可能绕过 ufw 的 INPUT 和 OUTPUT 链，导致防火墙配置被忽略。这是一个已知的兼容性问题。"
        }
    ],
    "w1-3": [
        {
            id: "w1-3-q1",
            question: "OverlayFS 是什么类型的文件系统？",
            options: [
                "日志文件系统（Journaling Filesystem）",
                "联合文件系统（Union Filesystem）",
                "网络文件系统（Network Filesystem）",
                "加密文件系统（Encrypted Filesystem）"
            ],
            answer: 1,
            rationale: "OverlayFS 是联合文件系统，将多个目录（上层+下层）层叠合并成统一视图呈现给用户。"
        },
        {
            id: "w1-3-q2",
            question: "OverlayFS 的三层结构中，容器运行时的写入数据存储在哪里？",
            options: [
                "lowerdir（只读层）",
                "upperdir（可写层）",
                "merged（合并视图层）",
                "workdir（工作目录）"
            ],
            answer: 1,
            rationale: "upperdir 是可写层，所有容器运行时的修改（新建、修改、删除）都记录在这里。lowerdir 是只读的镜像层。"
        },
        {
            id: "w1-3-q3",
            question: "Copy-on-Write（写时复制）机制在什么时候触发？",
            options: [
                "读取镜像中的文件时",
                "容器启动时预复制所有文件",
                "容器首次修改来自镜像的文件时",
                "容器停止时保存状态"
            ],
            answer: 2,
            rationale: "当容器首次需要修改镜像中的文件时（写入或元数据变更），整个文件会被复制到 upperdir，这就是 copy_up 操作。"
        },
        {
            id: "w1-3-q4",
            question: "为什么 Dockerfile 中 RUN apt-get install && apt-get clean 比分开写两个 RUN 更好？",
            options: [
                "执行速度更快",
                "两者没有区别",
                "合并到一层可以避免中间层包含已删除的文件，减小镜像体积",
                "分开写会导致构建失败"
            ],
            answer: 2,
            rationale: "每个 RUN 指令创建一层。分开写时，第一层包含安装的文件，即使第二层删除，第一层仍然存在于镜像中，体积不会减少。"
        },
        {
            id: "w1-3-q5",
            question: "什么是 whiteout 文件？",
            options: [
                "空白的配置文件占位符",
                "用于标记在上层被删除的文件，遮盖下层的同名文件",
                "加密后的临时文件",
                "存储文件元数据的隐藏文件"
            ],
            answer: 1,
            rationale: "Whiteout 是特殊标记（字符设备或 xattr），用于在联合文件系统中标记删除操作，遮盖只读层的文件而不实际删除它。"
        },
        {
            id: "w1-3-q6",
            question: "Docker overlay2 驱动最多原生支持多少个下层（lower layers）？",
            options: [
                "32 层",
                "64 层",
                "128 层",
                "256 层"
            ],
            answer: 2,
            rationale: "overlay2 驱动原生支持最多 128 个 lower 层，这是 Linux 内核的限制。过多层会影响文件查找性能。"
        },
        {
            id: "w1-3-q7",
            question: "为什么数据库应用建议使用 Volume 而不是直接写容器文件系统？",
            options: [
                "Volume 提供加密功能",
                "Volume 绕过存储驱动，避免 Copy-on-Write 的性能开销",
                "Volume 自动备份数据",
                "容器文件系统不支持大文件"
            ],
            answer: 1,
            rationale: "Volume 直接挂载到容器，绕过 OverlayFS，避免写放大和 copy_up 开销。对写密集型应用（数据库、日志）性能更好，数据也不会随容器删除而丢失。"
        },
        {
            id: "w1-3-q8",
            question: "以下哪个命令可以查看镜像每一层的大小和创建命令？",
            options: [
                "docker images",
                "docker history <image>",
                "docker layer <image>",
                "docker inspect --layers <image>"
            ],
            answer: 1,
            rationale: "docker history 显示镜像每一层的大小、创建时间和创建命令（Dockerfile 指令），有助于分析镜像体积优化机会。"
        },
        {
            id: "w1-3-q9",
            question: "多阶段构建（multi-stage build）的主要优势是什么？",
            options: [
                "加快构建速度",
                "减少最终镜像体积，不包含构建工具和中间产物",
                "支持并行构建多个镜像",
                "自动生成 Kubernetes YAML"
            ],
            answer: 1,
            rationale: "多阶段构建允许在一个阶段编译/构建，只将最终产物（如二进制文件）复制到运行时镜像，避免包含编译器、源码等构建工具。"
        },
        {
            id: "w1-3-q10",
            question: "OverlayFS 的 POSIX 兼容性问题可能导致什么？",
            options: [
                "文件无法创建",
                "先只读后读写打开同一文件可能得到指向不同版本的文件描述符",
                "文件权限完全丢失",
                "文件名长度受到严格限制"
            ],
            answer: 1,
            rationale: "OverlayFS 不完全兼容 POSIX。由于 copy_up 时机问题，先以只读打开再以读写打开同一文件，可能得到两个不同的 inode。"
        },
        {
            id: "w1-3-q11",
            question: "删除镜像中的文件为什么不能减小镜像体积？",
            options: [
                "Docker 禁止删除镜像中的文件",
                "删除操作创建 whiteout 标记而非真正删除下层文件，下层数据仍然存在",
                "删除的文件被移动到回收站层",
                "需要管理员权限才能真正删除"
            ],
            answer: 1,
            rationale: "联合文件系统的下层是只读的、不可变的。删除只是在上层创建 whiteout 标记来遮盖，下层的文件数据仍然存在于镜像中。"
        },
        {
            id: "w1-3-q12",
            question: "页面缓存（Page Cache）在多容器场景下如何优化内存使用？",
            options: [
                "每个容器独立缓存镜像文件",
                "共享镜像层（lowerdir）的页面缓存可以被多个容器共享",
                "禁用页面缓存以节省内存",
                "页面缓存与容器完全无关"
            ],
            answer: 1,
            rationale: "使用相同镜像层的容器可以共享页面缓存（因为 lowerdir 相同），这是 OverlayFS 的内存效率优势，特别适合高密度容器部署。"
        },
        {
            id: "w1-3-q13",
            question: "OverlayFS 中的 workdir 目录的作用是什么？",
            options: [
                "存储容器的工作文件",
                "OverlayFS 内部使用的临时空间，必须与 upperdir 在同一文件系统",
                "存储镜像层的元数据",
                "用于存放 whiteout 文件"
            ],
            answer: 1,
            rationale: "workdir 是 OverlayFS 内部使用的临时目录，用于原子操作（如 copy_up），必须与 upperdir 位于同一文件系统上。"
        },
        {
            id: "w1-3-q14",
            question: "关于 Dockerfile 每条指令与镜像层的关系，以下说法正确的是？",
            options: [
                "所有指令合并成一层",
                "每条指令创建一个新层，层层堆叠形成最终镜像",
                "只有 RUN 指令创建新层",
                "层数由用户手动指定"
            ],
            answer: 1,
            rationale: "Dockerfile 中每条指令（RUN、COPY、ADD 等）都会创建一个新的只读层。这些层层叠加形成最终镜像，每层都是不可变的。"
        },
        {
            id: "w1-3-q15",
            question: "使用 overlay2 存储驱动时，XFS 文件系统需要满足什么条件？",
            options: [
                "必须启用 journaling",
                "必须设置 d_type=true（ftype=1）",
                "必须禁用 quota",
                "必须使用 4K 扇区"
            ],
            answer: 1,
            rationale: "overlay2 在 XFS 上要求 d_type 支持（ftype=1），否则无法正确识别文件类型。可通过 xfs_info 检查或在 mkfs.xfs 时指定 -n ftype=1。"
        }
    ],
    "w1-2": [
        {
            id: "w1-2-q1",
            question: "Cgroups 的核心作用是什么？",
            options: [
                "隔离进程可见的系统资源视图",
                "将进程组织成层级结构，并限制、监控其物理资源使用",
                "管理容器的网络配置和路由",
                "存储和管理容器镜像的文件系统层"
            ],
            answer: 1,
            rationale: "Cgroups 用于限制和监控进程组的 CPU、内存、I/O 等物理资源使用。资源视图隔离是 Namespace 的功能，两者配合构成容器基础。"
        },
        {
            id: "w1-2-q2",
            question: "Cgroups v1 和 v2 的主要架构区别是什么？",
            options: [
                "v1 支持更多控制器类型",
                "v2 使用统一层级（所有控制器共享一棵树），v1 每个控制器有独立层级",
                "v1 只能限制内存，v2 可以限制 CPU",
                "v2 不支持容器化场景"
            ],
            answer: 1,
            rationale: "Cgroups v2 最大的变化是采用 single unified hierarchy，所有控制器在同一棵树上管理，简化了配置和管理复杂度。"
        },
        {
            id: "w1-2-q3",
            question: "K8s Pod 的 resources.limits.cpu 对应 cgroup 的什么机制？",
            options: [
                "cpu.shares / cpu.weight（权重）",
                "cpu.max / cpu.quota（配额硬限制）",
                "cpuset.cpus（CPU 绑核）",
                "cpu.pressure（CPU 压力指标）"
            ],
            answer: 1,
            rationale: "limits 是硬限制，通过 cpu.max（v2）或 cpu.quota/period（v1）实现绝对上限；requests 对应 shares/weight，是软限制。"
        },
        {
            id: "w1-2-q4",
            question: "当容器内存使用超过 memory.max 时会发生什么？",
            options: [
                "容器内存使用被暂停，等待释放",
                "内核触发回收压力，但不会 OOM",
                "触发 OOM Killer，可能杀死容器内进程",
                "系统自动扩展容器的内存限制"
            ],
            answer: 2,
            rationale: "memory.max 是硬限制，超过时触发 OOM Killer。memory.high 是软限制，超过会触发回收但不会立即 OOM。"
        },
        {
            id: "w1-2-q5",
            question: "--cpu-shares=512 和 --cpus=0.5 的核心区别是什么？",
            options: [
                "两者完全等价，只是语法不同",
                "shares 是软限制（CPU 空闲时可超用），cpus 是硬限制（绝对上限）",
                "shares 用于 cgroups v2，cpus 用于 v1",
                "shares 限制单核使用率，cpus 限制所有核心总和"
            ],
            answer: 1,
            rationale: "cpu-shares 是权重，在 CPU 竞争时按比例分配资源，空闲时可超用；cpus 通过 quota 实现绝对上限。"
        },
        {
            id: "w1-2-q6",
            question: "如何查看一个进程所属的 cgroup？",
            options: [
                "ps aux | grep cgroup",
                "cat /proc/[PID]/cgroup",
                "cgroup --list [PID]",
                "docker inspect --cgroup [PID]"
            ],
            answer: 1,
            rationale: "/proc/[PID]/cgroup 文件包含该进程所属的 cgroup 路径信息，格式为 hierarchy-ID:controller-list:cgroup-path。"
        },
        {
            id: "w1-2-q7",
            question: "设置 --memory-swap 等于 --memory 的效果是什么？",
            options: [
                "容器可以使用双倍内存（内存+swap）",
                "禁用容器的 swap 使用（swap=0）",
                "swap 使用量等于物理内存使用量",
                "启用透明大页优化"
            ],
            answer: 1,
            rationale: "--memory-swap 是内存+swap 的总量上限。设为与 --memory 相等意味着 swap 配额为 0，容器不能使用 swap。"
        },
        {
            id: "w1-2-q8",
            question: "K8s 的 Guaranteed QoS 类需要满足什么条件？",
            options: [
                "只设置 requests",
                "只设置 limits",
                "requests 和 limits 必须相等，且 CPU 和内存都要设置",
                "不设置任何资源限制"
            ],
            answer: 2,
            rationale: "Guaranteed QoS 要求 Pod 内所有容器的 CPU 和内存 requests 都等于 limits，确保资源完全预留。"
        },
        {
            id: "w1-2-q9",
            question: "Cgroups v2 的 'no internal process' 规则是什么意思？",
            options: [
                "cgroup 不能包含内核进程",
                "非根 cgroup 如果有子 cgroup，就不能直接包含进程",
                "每个 cgroup 最多只能包含一个进程",
                "cgroup 层级不能超过 5 层嵌套"
            ],
            answer: 1,
            rationale: "这是 v2 的设计约束：非根 cgroup 要么包含进程，要么管理子 cgroup，不能同时做两件事，避免父子 cgroup 之间的资源竞争混乱。"
        },
        {
            id: "w1-2-q10",
            question: "以下哪个不是 cgroup 的标准控制器？",
            options: [
                "cpu",
                "memory",
                "network",
                "io"
            ],
            answer: 2,
            rationale: "Cgroups 标准控制器包括 cpu、memory、io、pids、cpuset 等，但不包括 network。网络限制通过 tc（流量控制）或 NetworkPolicy 实现。"
        },
        {
            id: "w1-2-q11",
            question: "如何在 cgroup v2 中为子 cgroup 启用控制器？",
            options: [
                "编辑 /etc/cgroup.conf 配置文件",
                "向父 cgroup 的 cgroup.subtree_control 文件写入 +controller 名称",
                "运行 cgroupctl enable controller",
                "在挂载 cgroup2 文件系统时指定控制器"
            ],
            answer: 1,
            rationale: "通过向父 cgroup 的 cgroup.subtree_control 写入如 '+cpu +memory' 来启用子 cgroup 的控制器，体现 top-down 约束原则。"
        },
        {
            id: "w1-2-q12",
            question: "容器的 CPU limit 设为 2，它能否同时使用 4 个核心各 50%？",
            options: [
                "不能，只能使用指定的 2 个物理核心",
                "可以，只要总使用量不超过 200%（相当于 2 核）",
                "不能，每个核心的使用率不能超过 50%",
                "取决于是否配置了 cpuset"
            ],
            answer: 1,
            rationale: "CPU quota 限制的是总量（时间片配额）而非特定核心。容器可以跨多核运行，只要总使用量不超过 limit 值（2 核 = 200%）。"
        },
        {
            id: "w1-2-q13",
            question: "memory.high 和 memory.max 的区别是什么？",
            options: [
                "memory.high 是绝对上限，memory.max 是软限制",
                "memory.high 触发回收压力但不 OOM，memory.max 超过会触发 OOM Killer",
                "两者功能相同，只是命名不同",
                "memory.high 用于 v1，memory.max 用于 v2"
            ],
            answer: 1,
            rationale: "memory.high 是节流阈值，超过后内核积极回收内存但不会杀进程；memory.max 是硬上限，超过触发 OOM Killer。"
        },
        {
            id: "w1-2-q14",
            question: "pids 控制器的主要作用是什么？",
            options: [
                "限制容器可以使用的物理 CPU 核心数",
                "限制 cgroup 内可创建的最大进程数量，防止 fork bomb",
                "追踪容器内进程的 PID 映射关系",
                "管理容器进程的优先级调度"
            ],
            answer: 1,
            rationale: "pids 控制器通过 pids.max 限制 cgroup 内可创建的进程总数，防止恶意或错误代码通过无限 fork 耗尽系统资源。"
        },
        {
            id: "w1-2-q15",
            question: "关于 cgroup 资源约束的继承关系，以下说法正确的是？",
            options: [
                "子 cgroup 可以突破父 cgroup 的资源限制",
                "资源从父 cgroup 向下流动，子 cgroup 不能突破父级限制（Top-Down 约束）",
                "所有 cgroup 共享同一份资源配额，没有层级关系",
                "只有根 cgroup 可以设置资源限制"
            ],
            answer: 1,
            rationale: "Cgroups 采用 Top-Down 约束模型：资源从父向子流动，子 cgroup 的资源使用不能超过父级分配的上限。"
        }
    ],
    "w1-1": [
        {
            id: "w1-1-q1",
            question: "namespaces(7) 对 Linux Namespace 核心作用的描述是什么？",
            options: [
                "将全局系统资源包装成隔离的抽象层（wrapping a global system resource in an abstraction）",
                "限制进程使用的 CPU 和内存资源上限",
                "加密容器之间的网络通信数据",
                "管理容器镜像的分层存储结构"
            ],
            answer: 0,
            rationale: "namespaces(7) 明确指出 namespace 的作用是'wrapping a global system resource in an abstraction'，使 namespace 内进程看起来拥有独立的资源实例。资源用量限制是 Cgroups 的职责。"
        },
        {
            id: "w1-1-q2",
            question: "Linux 8 种 Namespace 中，哪一种是最新添加的（Linux 5.6）？",
            options: [
                "User Namespace",
                "Cgroup Namespace",
                "Time Namespace",
                "PID Namespace"
            ],
            answer: 2,
            rationale: "Time Namespace (CLONE_NEWTIME) 是 Linux 5.6 引入的最新 namespace 类型，用于隔离 CLOCK_BOOTTIME 和 CLOCK_MONOTONIC 时钟。"
        },
        {
            id: "w1-1-q3",
            question: "关于创建新 namespace 的权限要求，namespaces(7) 的描述是？",
            options: [
                "所有 namespace 类型都必须 root 权限才能创建",
                "只有 Network namespace 需要 CAP_NET_ADMIN",
                "大多数需要 CAP_SYS_ADMIN，但 User namespace 自 Linux 3.8 起可由非特权用户创建",
                "创建 User namespace 需要 CAP_SYS_ADMIN，其它都不需要"
            ],
            answer: 2,
            rationale: "namespaces(7) 指出：'Creation of new namespaces using clone(2) and unshare(2) in most cases requires CAP_SYS_ADMIN'，User namespace 是唯一例外——这是 rootless container 的技术基础。"
        },
        {
            id: "w1-1-q4",
            question: "/proc/[pid]/ns/pid 与 /proc/[pid]/ns/pid_for_children 的区别是什么？",
            options: [
                "两者完全等价，只是名字不同",
                "pid 指向当前进程所属 PID namespace（生命周期内不变）；pid_for_children 影响子进程的 namespace，可被 unshare/setns 改变",
                "pid_for_children 记录父进程 PID 值，pid 记录子进程 PID",
                "pid 可通过 setns 改变，pid_for_children 永远不变"
            ],
            answer: 1,
            rationale: "namespaces(7) 明确区分：pid 指向进程当前所属的 PID namespace（不可变）；pid_for_children 可被 unshare/setns 修改，影响后续创建的子进程。"
        },
        {
            id: "w1-1-q5",
            question: "当 namespace 内已没有成员进程时，哪种方式可以'pin'住它使其继续存在？",
            options: [
                "发送 SIGSTOP 给 init 进程",
                "把 /proc 重新挂载为只读",
                "保持 /proc/[pid]/ns/* 的打开 fd 或对其做 bind mount",
                "删除 /proc/[pid]/ns/* 以阻止回收"
            ],
            answer: 2,
            rationale: "namespaces(7) 的 Namespace lifetime 部分说明：打开 fd 或 bind mount /proc/[pid]/ns/* 会保持对应 namespace 的引用从而不被回收。"
        },
        {
            id: "w1-1-q6",
            question: "Linux 4.9+ 的 /proc/sys/user/max_*_namespaces 限制对哪些用户生效？",
            options: [
                "仅对非 root 用户生效",
                "仅对容器内用户生效",
                "对所有用户生效，包括 UID 0",
                "仅对 systemd 管理的进程生效"
            ],
            answer: 2,
            rationale: "namespaces(7) 明确指出：'These limits apply to all users, including UID 0'。这些限制是 per-user 的，且会计入祖先 user namespace 防止逃逸。"
        },
        {
            id: "w1-1-q7",
            question: "setns(2) 系统调用的作用是什么？",
            options: [
                "创建新进程并指定隔离标志",
                "将当前进程移入新创建的 namespace",
                "通过指向 /proc/[pid]/ns/* 的文件描述符加入已存在的 namespace",
                "销毁指定的 namespace"
            ],
            answer: 2,
            rationale: "namespaces(7) 描述 setns(2) 用于加入已存在的 namespace，目标通过 /proc/pid/ns 下的 fd 指定。clone() 创建新进程，unshare() 移入新 namespace。"
        },
        {
            id: "w1-1-q8",
            question: "当达到 /proc/sys/user/max_*_namespaces 上限时，clone(2)/unshare(2) 会返回什么错误？",
            options: [
                "EACCES",
                "EINVAL",
                "ENOSPC",
                "EEXIST"
            ],
            answer: 2,
            rationale: "namespaces(7) 指出：遇到这些限制时 clone(2) 与 unshare(2) 会以 ENOSPC 失败。"
        },
        {
            id: "w1-1-q9",
            question: "pause 容器在 Kubernetes Pod 中的核心作用是什么？",
            options: [
                "负责处理 Pod 的所有网络流量和负载均衡",
                "收集 Pod 内所有容器的监控指标和日志",
                "管理 Pod 内容器的资源配额分配",
                "持有 Pod 的 Network/IPC namespace，确保业务容器重启时 namespace 不被销毁"
            ],
            answer: 3,
            rationale: "pause 容器作为 Pod 中第一个启动的容器，创建并持有 Network 和 IPC namespace。其他容器通过 setns() 加入这些 namespace，利用 namespace 的 pin 机制确保隔离边界稳定。"
        },
        {
            id: "w1-1-q10",
            question: "K8s Pod 配置 hostNetwork: true 时，Pod 内进程与宿主机共享什么？",
            options: [
                "共享宿主机的 PID namespace，可看到宿主机所有进程",
                "共享宿主机的 Mount namespace，可看到宿主机所有文件",
                "共享宿主机的 Network namespace，可看到宿主机网络接口和端口",
                "共享宿主机的 User namespace，以 root 身份运行"
            ],
            answer: 2,
            rationale: "hostNetwork: true 使 Pod 跳过 Network Namespace 隔离，直接使用宿主机网络栈。Pod 可看到宿主机所有网络接口并绑定宿主机端口，存在端口冲突和安全风险。"
        },
        {
            id: "w1-1-q11",
            question: "执行 unshare -Ur 的效果是什么？",
            options: [
                "创建新的 user namespace（-U）并把调用者映射为新 userns 内的 root（-r）",
                "创建新的 UTS namespace 并修改 hostname",
                "加入一个已存在的 user namespace",
                "创建新的 PID namespace 并让当前进程 PID 变为 1"
            ],
            answer: 0,
            rationale: "unshare(1) 的 -U 创建 user namespace，-r 将调用者映射为新 userns 内的 root（UID 0）。这展示了 User Namespace 允许非特权用户创建的特性。"
        },
        {
            id: "w1-1-q12",
            question: "使用 unshare -p -f --mount-proc /bin/bash 时，--mount-proc 的必要性在于？",
            options: [
                "加密 /proc 中的敏感信息",
                "限制进程可访问的 /proc 条目",
                "挂载额外的存储卷用于容器数据",
                "重新挂载 /proc 使其反映新 PID namespace 的进程视图"
            ],
            answer: 3,
            rationale: "新 PID namespace 中的进程如果使用旧的 /proc 挂载点，会看到宿主机的进程信息。--mount-proc 重新挂载 /proc，使其正确反映新 namespace 中 PID 从 1 开始的进程树。"
        }
    ]
}
