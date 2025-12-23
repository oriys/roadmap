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
            "【联合文件系统本质】OverlayFS 是 Linux 内核的联合文件系统，内核文档描述为'overlaying one filesystem on top of the other'。Docker 的 overlay2 驱动正是基于此实现镜像分层。",
            "【四层目录结构】Docker 文档明确定义四层：lowerdir（只读镜像层）、upperdir（可写容器层）、merged（统一挂载点，容器视图）、workdir（OverlayFS 内部临时空间，必须与 upperdir 同一文件系统）。",
            "【层数限制】overlay2 驱动'supports up to 128 lower OverlayFS layers'——这是内核限制。过多层影响性能，Dockerfile 每条指令创建一层，需要合理规划指令数量。",
            "【镜像与容器关系】Docker 官方：镜像是'只读模板'，容器运行时添加'读写文件系统作为最后一层'。镜像层不可变，多容器共享同一镜像的只读层。",
            "【Copy-on-Write 触发】Docker 文档：'On first write to an existing file, overlay2 performs a copy-up operation'——整个文件从 lowerdir 复制到 upperdir，后续写入直接操作副本。"
        ],
        keyDifficulties: [
            "【copy_up 性能代价】Docker 文档警告首次写入大文件时有明显延迟。最佳实践：'use volumes for write-heavy workloads to bypass the storage driver entirely'——数据库、日志等应使用 Volume。",
            "【Whiteout 删除机制】内核文档：删除操作创建 whiteout 标记（字符设备 0/0 或 xattr），'遮盖'下层文件而非真正删除。opaque 目录（trusted.overlay.opaque xattr）隐藏整个下层目录。",
            "【POSIX 兼容性缺陷】内核文档列出三种非标准行为：1) st_atime 读取下层文件不更新 2) 内存映射文件不反映后续修改 3) 执行下层文件不阻止写操作。Docker 建议预先 touch 文件规避 fd 不一致。",
            "【inode 一致性问题】内核文档指出对象'may report an st_dev from the lower filesystem or upper filesystem'造成不一致。xino 特性通过组合 inode 号和文件系统 ID 解决此问题。"
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
            "【资源治理核心】Cgroups（Control Groups）是 Linux 内核的资源限制与监控机制。如果说 Namespace 决定进程'能看到什么'，Cgroups 决定'能用多少'——两者配合构成容器隔离的完整基础。",
            "【v2 统一层级】cgroups v2 采用 single unified hierarchy，所有控制器在同一棵树上管理。cgroup-v2.html 指出这解决了 v1 多层级的协调问题，简化了配置和管理复杂度。",
            "【控制器启用】通过向父 cgroup 的 cgroup.subtree_control 写入 '+cpu +memory' 启用子 cgroup 的控制器。这体现了 Top-down constraint：资源从父向下分配，子 cgroup 不能突破父级限制。",
            "【核心控制器】cpu（CPU 时间分配）、memory（内存限制与 OOM 控制）、io（块设备 I/O 限速）、pids（限制进程数量防止 fork bomb）。K8s 的 requests/limits、Docker 的 --memory/--cpus 底层都是 Cgroups。",
            "【K8s 映射】Pod 的 resources.requests 对应 cpu.weight/shares（软限制，竞争时按比例分配），resources.limits 对应 cpu.max/quota（硬限制，绝对上限）。"
        ],
        keyDifficulties: [
            "【v1 vs v2 核心区别】v2 强制单一层级且有'no internal process'规则——非根 cgroup 如果有子 cgroup 就不能直接包含进程，必须把进程放到叶子节点。这避免了父子 cgroup 之间的资源竞争混乱。",
            "【CPU 限制双模式】cpu.weight（范围 1-10000，默认 100）是权重/软限制，资源空闲时可超用；cpu.max（$MAX $PERIOD 微秒）是配额/硬限制，绝对上限。理解两者区别对 K8s 资源配置至关重要。",
            "【内存四层阈值】memory.min（硬保证）→ memory.low（软保护，best-effort 回收）→ memory.high（触发节流但不 OOM）→ memory.max（硬限制，超出触发 OOM Killer）。排查 OOMKilled 必须理解这个层级。",
            "【swap 与 OOM 风险】Docker 文档警告：--oom-kill-disable 必须配合 --memory 使用，否则'the host can run out of memory'。设置 --memory-swap 等于 --memory 可禁用容器 swap。"
        ],
        handsOnPath: [
            "查看系统 cgroup 版本：cat /proc/filesystems | grep cgroup，检查 /sys/fs/cgroup 目录结构（v2 是统一目录，v1 有多个子目录）。",
            "运行 docker run -m 100m --memory-swap 100m stress --vm 1 --vm-bytes 150M，观察 OOM Kill 过程，使用 dmesg | tail 查看日志。",
            "使用 docker stats 实时监控资源，对比 cgroup 文件原始数据：cat /sys/fs/cgroup/docker/<container-id>/memory.current。",
            "实验 --cpus=0.5 和 --cpu-shares=512 的区别：前者是硬限制（最多 50% CPU），后者是软限制（竞争时按比例分配）。",
            "在 cgroup v2 系统上手动创建子 cgroup：mkdir /sys/fs/cgroup/test，向 cgroup.subtree_control 写入 '+cpu +memory' 启用控制器。",
            "观察 K8s Pod 的 cgroup 位置：在节点上 find /sys/fs/cgroup -name '*<pod-uid>*' 找到对应 cgroup 目录。"
        ],
        selfCheck: [
            "Cgroups v1 和 v2 的主要架构区别是什么？如何确认系统使用的版本？'no internal process' 规则是什么意思？",
            "K8s Pod 的 resources.requests.cpu 和 resources.limits.cpu 分别对应 cgroup 的什么机制？在调度和运行时的作用有何不同？",
            "解释 memory.min/low/high/max 四个参数的区别，容器内存使用逼近各阈值时分别会发生什么？",
            "为什么设置 --memory-swap 等于 --memory 可以禁用容器 swap？如果不设置 --memory-swap 会怎样？",
            "如果一个容器 CPU limit 是 2，它能同时使用 4 个核心各 50% 吗？为什么？",
            "为什么 Docker 文档警告 --oom-kill-disable 必须配合 --memory 使用？"
        ],
        extensions: [
            "【内核文档深入】阅读 cgroup-v2.html 完整文档，特别关注 cpu.max.burst、io.latency 等高级参数。",
            "【K8s QoS 类】研究 Guaranteed、Burstable、BestEffort 三种 QoS 类如何基于 cgroup 配置实现不同的服务质量和驱逐优先级。",
            "【CPU Manager】了解 Kubelet 的 CPU Manager 和 Memory Manager 如何在节点级别优化资源分配，实现 CPU 绑核等高级调度。",
            "【监控工具】探索 systemd-cgtop、cadvisor 等工具如何读取 cgroup 文件系统监控容器资源使用。"
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
            question: "内核文档对 OverlayFS 的核心描述是什么？",
            options: [
                "一种日志文件系统，提供数据完整性保护",
                "overlaying one filesystem on top of the other——将一个文件系统覆盖在另一个之上",
                "一种分布式文件系统，支持跨节点访问",
                "一种加密文件系统，保护数据隐私"
            ],
            answer: 1,
            rationale: "Linux 内核文档明确描述 OverlayFS 为'overlaying one filesystem on top of the other'，将上层和下层合并呈现为统一视图。"
        },
        {
            id: "w1-3-q2",
            question: "Docker 文档定义的 OverlayFS 四层目录结构中，workdir 的作用是什么？",
            options: [
                "存储容器的工作文件和应用数据",
                "OverlayFS 内部使用的临时空间，必须与 upperdir 在同一文件系统",
                "存储镜像层的元数据和索引",
                "用于存放 whiteout 文件"
            ],
            answer: 1,
            rationale: "Docker 文档指出 workdir 是'Internal OverlayFS workspace'，用于原子操作如 copy_up，必须与 upperdir 位于同一文件系统。"
        },
        {
            id: "w1-3-q3",
            question: "overlay2 驱动最多支持多少个下层（lower layers）？",
            options: [
                "supports up to 128 lower OverlayFS layers",
                "最多 64 层",
                "最多 256 层",
                "没有层数限制"
            ],
            answer: 0,
            rationale: "Docker 文档明确指出 overlay2 驱动'supports up to 128 lower OverlayFS layers'，这是 Linux 内核的限制。"
        },
        {
            id: "w1-3-q4",
            question: "Docker 文档对 Copy-on-Write 触发时机的描述是什么？",
            options: [
                "容器启动时预复制所有镜像文件",
                "读取镜像中的文件时触发",
                "On first write to an existing file, overlay2 performs a copy-up operation",
                "容器停止时保存状态触发"
            ],
            answer: 2,
            rationale: "Docker 文档明确：'On first write to an existing file, overlay2 performs a copy-up operation'——首次写入时整个文件从 lowerdir 复制到 upperdir。"
        },
        {
            id: "w1-3-q5",
            question: "Docker 对写密集型工作负载的最佳实践建议是什么？",
            options: [
                "增加 overlay2 层数提高性能",
                "use volumes for write-heavy workloads to bypass the storage driver entirely",
                "启用 metacopy 功能加速写入",
                "使用 SSD 存储替代 HDD"
            ],
            answer: 1,
            rationale: "Docker 文档最佳实践：'use volumes for write-heavy workloads to bypass the storage driver entirely'——数据库、日志等应使用 Volume 绕过存储驱动。"
        },
        {
            id: "w1-3-q6",
            question: "内核文档描述的 whiteout 机制如何实现？",
            options: [
                "直接删除下层文件释放空间",
                "移动文件到回收站目录",
                "创建字符设备 0/0 或带特殊 xattr 的文件遮盖下层",
                "修改下层文件的权限位为 000"
            ],
            answer: 2,
            rationale: "内核文档：删除操作创建 whiteout 标记——'character devices with 0/0 device numbers or regular files with special extended attributes'，遮盖下层而非真正删除。"
        },
        {
            id: "w1-3-q7",
            question: "opaque 目录（trusted.overlay.opaque xattr）的作用是什么？",
            options: [
                "加密目录内容",
                "prevent merging with lower-layer directories of the same name——阻止与下层同名目录合并",
                "标记目录为只读",
                "记录目录的访问时间"
            ],
            answer: 1,
            rationale: "内核文档：带 trusted.overlay.opaque xattr 的目录'prevent merging with lower-layer directories of the same name'，有效隐藏整个下层目录。"
        },
        {
            id: "w1-3-q8",
            question: "内核文档列出的 OverlayFS POSIX 非标准行为不包括？",
            options: [
                "st_atime 读取下层文件不更新",
                "内存映射文件不反映后续修改",
                "执行下层文件不阻止写操作",
                "文件权限完全丢失"
            ],
            answer: 3,
            rationale: "内核文档列出三种非标准行为：st_atime 不更新、mmap 不反映修改、执行不阻止写入。文件权限不会丢失，copy_up 会保留所有元数据。"
        },
        {
            id: "w1-3-q9",
            question: "Docker 官方对镜像的定义是什么？",
            options: [
                "一个运行中的进程实例",
                "一个可执行的二进制文件",
                "一个具有创建容器指令的只读模板",
                "一个网络配置文件"
            ],
            answer: 2,
            rationale: "Docker 官方文档定义镜像为'一个具有创建 Docker 容器指令的只读模板'，容器运行时添加可写层。"
        },
        {
            id: "w1-3-q10",
            question: "Dockerfile 指令与镜像层的关系是什么？",
            options: [
                "所有指令合并成一层",
                "只有 RUN 指令创建新层",
                "每条指令创建一个新层，且只重建已更改的层",
                "层数由用户手动指定"
            ],
            answer: 2,
            rationale: "Docker 官方：'当您更改 Dockerfile 并重新构建镜像时，仅重建已更改的层'——每条指令创建一层，增量构建提高效率。"
        },
        {
            id: "w1-3-q11",
            question: "Docker 文档指出 overlay2 在 XFS 上需要什么条件？",
            options: [
                "必须启用 journaling 和 quota",
                "d_type=true enabled（ftype=1）",
                "必须禁用 SELinux",
                "必须使用 4K 块大小"
            ],
            answer: 1,
            rationale: "Docker 文档：XFS 文件系统需要'd_type=true enabled'（通过 ftype=1），否则 overlay2 无法正确识别文件类型。"
        },
        {
            id: "w1-3-q12",
            question: "Docker 文档提到的页面缓存共享优势是什么？",
            options: [
                "每个容器独立缓存提高隔离性",
                "禁用页面缓存节省内存",
                "Page cache sharing across containers——多容器共享镜像层的页面缓存",
                "页面缓存自动持久化到磁盘"
            ],
            answer: 2,
            rationale: "Docker 文档列出 overlay2 优势：'Page cache sharing across containers'——共享 lowerdir 的容器可共享页面缓存，提高高密度部署的内存效率。"
        }
    ],
    "w1-2": [
        {
            id: "w1-2-q1",
            question: "cgroup v2 相比 v1 的核心架构变化是什么？",
            options: [
                "v1 支持更多控制器类型",
                "v2 使用统一层级（所有控制器共享一棵树），v1 每个控制器有独立层级",
                "v1 只能限制内存，v2 可以限制 CPU",
                "v2 不支持容器化场景"
            ],
            answer: 1,
            rationale: "cgroup-v2.html 指出 v2 最大变化是 single unified hierarchy，解决了 v1 多层级的协调问题。所有控制器在同一棵树上管理。"
        },
        {
            id: "w1-2-q2",
            question: "在 cgroup v2 中启用子 cgroup 控制器的方式是？",
            options: [
                "向子 cgroup 的 cgroup.controllers 写入控制器名",
                "向父 cgroup 的 cgroup.subtree_control 写入 +controller 名称",
                "运行 cgroupctl enable controller",
                "在挂载 cgroup2 文件系统时指定控制器"
            ],
            answer: 1,
            rationale: "cgroup-v2.html 说明：通过向父 cgroup 的 cgroup.subtree_control 写入如 '+cpu +memory' 来启用子 cgroup 的控制器，体现 top-down 约束原则。"
        },
        {
            id: "w1-2-q3",
            question: "cgroup v2 的 'no internal process' 规则是什么意思？",
            options: [
                "cgroup 不能包含内核进程",
                "非根 cgroup 如果有子 cgroup，就不能直接包含进程",
                "每个 cgroup 最多只能包含一个进程",
                "cgroup 层级不能超过 5 层嵌套"
            ],
            answer: 1,
            rationale: "cgroup-v2.html 的 No Internal Process Constraint：非根 cgroup 要么包含进程，要么管理子 cgroup，不能同时做两件事，避免父子间资源竞争混乱。"
        },
        {
            id: "w1-2-q4",
            question: "cpu.weight 和 cpu.max 的核心区别是什么？",
            options: [
                "两者完全等价，只是语法不同",
                "weight 是软限制（CPU 空闲时可超用），max 是硬限制（绝对上限）",
                "weight 用于 cgroups v2，max 用于 v1",
                "weight 限制单核使用率，max 限制所有核心总和"
            ],
            answer: 1,
            rationale: "cgroup-v2.html：cpu.weight（范围 1-10000）是比例权重，CPU 竞争时按权重分配；cpu.max（$MAX $PERIOD）是带宽硬上限。"
        },
        {
            id: "w1-2-q5",
            question: "K8s Pod 的 resources.limits.cpu 对应 cgroup 的什么机制？",
            options: [
                "cpu.shares / cpu.weight（权重软限制）",
                "cpuset.cpus（CPU 绑核）",
                "cpu.max / cpu.quota（配额硬限制）",
                "cpu.pressure（CPU 压力指标）"
            ],
            answer: 2,
            rationale: "limits 是硬限制，通过 cpu.max（v2）或 cpu.quota/period（v1）实现绝对上限；requests 对应 weight/shares，是软限制。"
        },
        {
            id: "w1-2-q6",
            question: "memory.high 和 memory.max 的区别是什么？",
            options: [
                "memory.high 是绝对上限，memory.max 是软限制",
                "memory.high 触发节流/回收但不 OOM，memory.max 超过会触发 OOM Killer",
                "两者功能相同，只是命名不同",
                "memory.high 用于 v1，memory.max 用于 v2"
            ],
            answer: 1,
            rationale: "cgroup-v2.html：memory.high 是节流阈值，超出后内核积极回收但不杀进程；memory.max 是硬上限，无法回收时触发 OOM Killer。"
        },
        {
            id: "w1-2-q7",
            question: "Docker 文档对 --oom-kill-disable 的警告是什么？",
            options: [
                "会自动提升容器 CPU 配额",
                "必须配合 --memory 使用，否则可能导致宿主机内存耗尽",
                "会关闭容器网络",
                "会让容器变成只读文件系统"
            ],
            answer: 1,
            rationale: "Docker 文档警告：'if the -m flag isn't set, the host can run out of memory'。禁用 OOM killer 必须配合内存硬限制。"
        },
        {
            id: "w1-2-q8",
            question: "设置 --memory-swap 等于 --memory 的效果是什么？",
            options: [
                "容器可以使用双倍内存（内存+swap）",
                "禁用容器的 swap 使用（swap=0）",
                "swap 使用量等于物理内存使用量",
                "启用透明大页优化"
            ],
            answer: 1,
            rationale: "Docker 文档：--memory-swap 是内存+swap 的总量上限。设为与 --memory 相等意味着 swap 配额为 0，'the container doesn't have access to swap'。"
        },
        {
            id: "w1-2-q9",
            question: "容器 CPU limit 是 2，能否同时使用 4 个核心各 50%？",
            options: [
                "不能，只能使用指定的 2 个物理核心",
                "不能，每个核心使用率不能超过 50%",
                "可以，只要总使用量不超过 200%（相当于 2 核）",
                "取决于是否配置了 cpuset"
            ],
            answer: 2,
            rationale: "CPU quota 限制的是总量（时间片配额）而非特定核心。容器可以跨多核运行，只要总使用量不超过 limit 值（2 核 = 200%）。"
        },
        {
            id: "w1-2-q10",
            question: "cgroup v2 中 cpu.weight 的默认值和范围是什么？",
            options: [
                "默认 100，范围 1-10000",
                "默认 1024，范围 2-65535",
                "默认 1，范围 1-100",
                "默认 0，范围 0-1"
            ],
            answer: 0,
            rationale: "cgroup-v2.html：cpu.weight 默认值为 100，非 idle groups 的范围是 [1, 10000]。"
        },
        {
            id: "w1-2-q11",
            question: "向 cgroup.procs 写入 PID 时，以下哪个说法正确？",
            options: [
                "一次 write 可以写多个 PID 批量迁移",
                "zombie 进程可以被迁移",
                "一次 write 只能迁移一个进程，且写入任一线程 PID 会迁移整个进程",
                "只能在 root cgroup 执行写入操作"
            ],
            answer: 2,
            rationale: "cgroup-v2.html：'Only one process can be migrated on a single write(2) call'，且写入任一线程 PID 会迁移整个进程的所有线程。"
        },
        {
            id: "w1-2-q12",
            question: "K8s 的 Guaranteed QoS 类需要满足什么条件？",
            options: [
                "只设置 requests",
                "只设置 limits",
                "requests 和 limits 必须相等，且 CPU 和内存都要设置",
                "不设置任何资源限制"
            ],
            answer: 2,
            rationale: "Guaranteed QoS 要求 Pod 内所有容器的 CPU 和内存 requests 都等于 limits，确保资源完全预留，不会被驱逐。"
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
