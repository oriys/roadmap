import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "w1-1": {
        lessonId: "w1-1",
        background: [
            "Linux Namespace 是 Linux 内核提供的一种资源隔离机制，它将全局系统资源包装成一个抽象层，使得 namespace 内的进程看起来拥有独立的资源实例。",
            "容器技术的核心就是利用 Namespace 创造'隔离的假象'——容器内的进程认为自己独占整个系统，但实际上只是被限制在特定的资源视图中。",
            "Linux 共有 8 种 Namespace 类型：PID（进程ID）、Network（网络栈）、Mount（挂载点）、UTS（主机名）、IPC（进程间通信）、User（用户ID）、Cgroup（控制组）、Time（时钟）。",
            "理解 Namespace 是理解容器安全边界的基础——当你在 K8s 中看到 hostPID、hostNetwork 等配置时，就是在突破这些隔离边界。"
        ],
        keyDifficulties: [
            "区分不同 Namespace 的隔离范围：PID namespace 让容器内进程从 PID 1 开始计数，但宿主机仍能看到真实 PID；Network namespace 隔离网络栈但不隔离内核网络参数。",
            "理解 Namespace 的继承关系：子进程默认继承父进程的 namespace，除非显式使用 clone() 或 unshare() 创建新的 namespace。",
            "User Namespace 是唯一不需要 root 权限就能创建的 namespace，这是 rootless container 的基础，但也带来了复杂的 UID/GID 映射问题。",
            "Namespace 的生命周期管理：即使所有进程退出，只要还有文件描述符引用该 namespace，它就不会被销毁——这是 pause 容器存在的原因之一。"
        ],
        handsOnPath: [
            "使用 lsns 或 ls -la /proc/self/ns/ 查看当前进程所属的所有 namespace，观察每个 namespace 的 inode 编号。",
            "运行 docker run --rm -it alpine sh，然后在容器内执行 ps aux 和 hostname，对比宿主机的输出，体会 PID 和 UTS namespace 的隔离效果。",
            "使用 unshare -p -f --mount-proc /bin/bash 创建一个新的 PID namespace，验证在新 namespace 中 PID 从 1 开始。",
            "实验 docker run --pid=host 和 docker run --net=host，观察取消隔离后容器能看到的资源范围变化。"
        ],
        selfCheck: [
            "你能说出 8 种 Linux Namespace 各自隔离的资源类型吗？",
            "当 K8s Pod 配置 hostNetwork: true 时，会发生什么？有什么安全风险？",
            "为什么 docker exec 进入容器后能看到容器内的进程，而不是宿主机的进程？",
            "如果容器内的 root 用户（UID 0）映射到宿主机的非 root 用户，这种机制叫什么？它如何提升安全性？",
            "为什么说'容器只是被雕刻过的 Linux 进程'？"
        ],
        extensions: [
            "深入阅读 man namespaces(7)，了解每种 namespace 的详细行为和 API（clone, unshare, setns）。",
            "研究 rootless container 的实现原理，了解 User Namespace 如何让普通用户运行容器。",
            "探索 K8s 的 Pod Security Standards，理解 hostPID、hostIPC、hostNetwork 等配置的安全影响。",
            "阅读 Docker 和 containerd 的源码，了解它们如何调用 Linux namespace API。"
        ],
        sourceUrls: [
            "https://man7.org/linux/man-pages/man7/namespaces.7.html",
            "https://docs.kernel.org/admin-guide/namespaces/index.html",
            "https://www.docker.com/play-with-docker/"
        ]
    },
    "w1-2": {
        lessonId: "w1-2",
        background: [
            "Cgroups（Control Groups）是 Linux 内核提供的资源限制机制，用于限制、记录和隔离进程组使用的物理资源（CPU、内存、I/O 等）。",
            "如果说 Namespace 决定了'能看到什么'，那么 Cgroups 决定了'能用多少'——两者配合构成了容器隔离的完整基础。",
            "Cgroups v2 是现代 Linux 系统的标准，采用统一的层级结构，所有进程在同一棵树中；而 v1 每个控制器有独立的层级，更复杂但某些场景下更灵活。",
            "K8s 的 requests/limits、Docker 的 --memory 和 --cpus 参数，底层都是通过 Cgroups 实现的。"
        ],
        keyDifficulties: [
            "理解 Cgroups v1 和 v2 的核心区别：v2 使用单一层级树，所有控制器共享；v1 每个控制器独立层级。v2 更简洁但迁移需要适配。",
            "CPU 限制的两种模式：shares（权重，软限制，资源空闲时可超用）vs quota/period（配额，硬限制，绝对上限）。K8s 的 requests 对应 shares，limits 对应 quota。",
            "内存限制与 OOM：当进程超过 memory.limit 时会触发 OOM Killer。理解 OOM Score 计算和 oom_score_adj 的调整对排查容器 OOMKilled 至关重要。",
            "Cgroups 的'no internal process'约束（v2）：非根 cgroup 如果有子 cgroup，就不能直接包含进程——这影响了资源分配的层级设计。"
        ],
        handsOnPath: [
            "查看系统的 cgroup 版本：cat /proc/filesystems | grep cgroup，并检查 /sys/fs/cgroup 的目录结构。",
            "运行 docker run -m 100m --memory-swap 100m stress --vm 1 --vm-bytes 150M，观察容器因内存超限被 OOM Kill 的过程。",
            "使用 docker stats 实时监控容器的 CPU 和内存使用，对比 cgroup 文件中的原始数据：cat /sys/fs/cgroup/docker/<container-id>/memory.current。",
            "实验 --cpus=0.5 和 --cpu-shares=512 的区别：前者是硬限制，后者是软限制，在 CPU 空闲时行为不同。"
        ],
        selfCheck: [
            "Cgroups v1 和 v2 的主要区别是什么？你的系统使用的是哪个版本？",
            "K8s Pod 的 resources.requests 和 resources.limits 分别对应 cgroup 的什么机制？",
            "当容器被 OOMKilled 时，如何通过 dmesg 或 /var/log/messages 找到相关日志？",
            "为什么设置 --memory-swap 等于 --memory 可以禁用容器的 swap？",
            "如果一个容器的 CPU limit 是 2，它能同时使用 4 个 CPU 核心各 50% 吗？"
        ],
        extensions: [
            "阅读 Linux 内核文档的 cgroup v2 章节，深入理解各控制器的参数和行为。",
            "研究 K8s 的 QoS 类（Guaranteed、Burstable、BestEffort）如何基于 cgroup 配置实现不同的服务质量保证。",
            "了解 CPU Manager 和 Memory Manager 如何在 K8s 节点级别优化资源分配。",
            "探索 systemd-cgtop 和 cadvisor 等工具如何监控 cgroup 资源使用。"
        ],
        sourceUrls: [
            "https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html",
            "https://man7.org/linux/man-pages/man7/cgroups.7.html",
            "https://docs.docker.com/engine/containers/resource_constraints/"
        ]
    },
    "w1-3": {
        lessonId: "w1-3",
        background: [
            "OverlayFS 是一种联合文件系统（Union Filesystem），它将多个目录层叠合并成一个统一的视图，是 Docker 默认使用的存储驱动。",
            "容器镜像的分层结构依赖于 OverlayFS：每个镜像层是只读的（lowerdir），容器运行时会在顶部添加一个可写层（upperdir），两者合并后呈现给容器（merged）。",
            "Copy-on-Write（写时复制）是 OverlayFS 的核心机制：当容器首次修改来自镜像的文件时，整个文件会被复制到可写层，之后的修改都在副本上进行。",
            "理解镜像分层对于优化 Dockerfile、减小镜像体积、加速构建和部署都至关重要。"
        ],
        keyDifficulties: [
            "Copy-on-Write 的性能影响：首次写入大文件时会有明显延迟，因为需要完整复制。对于频繁修改的大文件，建议使用 Volume 绕过存储驱动。",
            "Whiteout 文件机制：当在容器中删除来自镜像的文件时，并不会真正删除，而是创建一个特殊的 whiteout 文件来'遮盖'它，这就是为什么删除文件不会减小镜像体积。",
            "层数限制与合并：overlay2 驱动支持最多 128 层，过多的层会影响性能。多阶段构建可以减少最终镜像的层数。",
            "POSIX 兼容性问题：OverlayFS 不完全兼容 POSIX，例如先以只读模式打开文件，再以读写模式打开，可能得到两个不同的文件描述符指向不同版本。"
        ],
        handsOnPath: [
            "使用 docker image inspect <image> 查看镜像的层信息，找到每层在 /var/lib/docker/overlay2/ 中的位置。",
            "进入一个容器，创建一个文件，然后在宿主机的 upperdir 目录中找到这个文件，验证写入发生在上层。",
            "写一个简单的 Dockerfile，故意在某一层添加大文件再删除，构建后观察镜像大小，理解为什么'删除不减小体积'。",
            "使用 docker history <image> 查看每一层的大小和创建命令，分析哪些层可以优化。"
        ],
        selfCheck: [
            "OverlayFS 的三层结构（lowerdir、upperdir、merged）各自的作用是什么？",
            "为什么在 Dockerfile 中 RUN apt-get install && apt-get clean 比分开写两行更好？",
            "什么是 whiteout 文件？它解决了什么问题？",
            "为什么数据库等写密集型应用建议使用 Volume 而不是直接写容器文件系统？",
            "多阶段构建如何帮助减少镜像层数和体积？"
        ],
        extensions: [
            "阅读 Docker 官方文档，比较不同存储驱动（overlay2、btrfs、zfs）的特点和适用场景。",
            "深入研究 OCI Image Spec，了解镜像层的标准格式和分发机制。",
            "学习使用 dive 工具分析镜像层，找出体积优化的机会。",
            "探索 buildkit 的缓存机制，了解如何利用层缓存加速镜像构建。"
        ],
        sourceUrls: [
            "https://docs.docker.com/engine/storage/drivers/overlayfs-driver/",
            "https://docs.kernel.org/filesystems/overlayfs.html",
            "https://docs.docker.com/get-started/docker-overview/#images"
        ]
    },
    "w1-4": {
        lessonId: "w1-4",
        background: [
            "容器网络的基础是 Linux 的虚拟网络设备：veth pair（虚拟以太网对）用于连接不同的网络命名空间，bridge（网桥）用于在同一宿主机上连接多个容器。",
            "Docker 的默认网络模式是 bridge：每个容器获得一个 veth pair，一端在容器的 network namespace 中，另一端连接到宿主机的 docker0 网桥。",
            "iptables 是 Linux 的包过滤和 NAT 工具，Docker 用它实现容器的端口映射（-p 参数）和网络隔离。",
            "理解这条数据路径（容器 eth0 → veth → bridge → iptables → 物理网卡）是排查容器网络问题的基础。"
        ],
        keyDifficulties: [
            "veth pair 的工作原理：它总是成对创建，数据从一端发送会立即在另一端接收，就像一根虚拟网线。任一端断开，整个链路都会失效。",
            "默认 bridge 网络 vs 用户自定义 bridge：默认的 docker0 不支持容器间 DNS 解析（需要 --link 或 IP），自定义 bridge 网络自带 DNS，推荐使用。",
            "NAT 和端口映射：-p 8080:80 实际上是在 iptables 的 PREROUTING 和 POSTROUTING 链中添加 DNAT/SNAT 规则，理解这一点有助于排查端口不通的问题。",
            "网络命名空间的抓包位置：在容器内抓包只能看到 namespace 内的流量，在宿主机的 veth 端或 bridge 上抓包可以看到多个容器的流量。"
        ],
        handsOnPath: [
            "运行一个容器，使用 ip link show 和 brctl show（或 ip link show type bridge）查看 veth 和 bridge 的对应关系。",
            "在容器内和宿主机上分别使用 tcpdump 抓包，对比同一请求在不同位置看到的数据包。",
            "查看 iptables -t nat -L -n 和 iptables -L -n，找到 Docker 添加的 NAT 规则和 FORWARD 规则。",
            "创建一个用户自定义 bridge 网络，启动两个容器，验证它们可以通过容器名互相 ping 通（DNS 解析）。"
        ],
        selfCheck: [
            "veth pair 是什么？它在容器网络中扮演什么角色？",
            "为什么官方推荐使用用户自定义 bridge 网络而不是默认的 docker0？",
            "当你使用 -p 8080:80 发布端口时，Docker 在 iptables 中做了什么？",
            "如果容器无法访问外网，你会检查哪些地方？（提示：NAT、FORWARD、IP 转发）",
            "在哪里抓包可以同时看到多个容器的网络流量？"
        ],
        extensions: [
            "学习 ip netns 命令，手动创建网络命名空间和 veth pair，不借助 Docker 搭建容器网络。",
            "研究 Docker 的其他网络驱动：host、none、macvlan、ipvlan 的适用场景和实现原理。",
            "阅读 K8s CNI（Container Network Interface）规范，了解 K8s 网络插件如何工作。",
            "探索 Calico、Flannel、Cilium 等 CNI 插件的架构差异：Overlay vs 路由/BGP。"
        ],
        sourceUrls: [
            "https://docs.docker.com/engine/network/drivers/bridge/",
            "https://man7.org/linux/man-pages/man4/veth.4.html",
            "https://docs.docker.com/engine/network/packet-filtering-firewalls/"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "w1-1": [
        {
            id: "w1-1-q1",
            question: "Linux Namespace 的核心作用是什么？",
            options: [
                "限制进程使用的 CPU 和内存资源",
                "将全局系统资源包装成隔离的抽象，使进程看起来拥有独立的资源实例",
                "加密容器之间的网络通信",
                "管理容器镜像的存储层"
            ],
            answer: 1,
            rationale: "Namespace 的核心是资源隔离，让 namespace 内的进程认为自己拥有独立的系统资源。资源限制是 Cgroups 的功能。"
        },
        {
            id: "w1-1-q2",
            question: "以下哪个 Namespace 负责隔离进程 ID？",
            options: [
                "Network Namespace",
                "Mount Namespace",
                "PID Namespace",
                "UTS Namespace"
            ],
            answer: 2,
            rationale: "PID Namespace 隔离进程 ID，使容器内的进程可以从 PID 1 开始编号。"
        },
        {
            id: "w1-1-q3",
            question: "当 K8s Pod 配置 hostNetwork: true 时，会发生什么？",
            options: [
                "Pod 使用独立的网络栈，与宿主机完全隔离",
                "Pod 直接使用宿主机的网络命名空间，可以看到宿主机的网络接口",
                "Pod 的网络流量会被加密",
                "Pod 无法访问外部网络"
            ],
            answer: 1,
            rationale: "hostNetwork: true 会让 Pod 跳过 Network Namespace 隔离，直接使用宿主机的网络栈，这可能带来安全风险。"
        },
        {
            id: "w1-1-q4",
            question: "哪个 Namespace 是唯一不需要 root 权限就能创建的？",
            options: [
                "PID Namespace",
                "Network Namespace",
                "User Namespace",
                "Mount Namespace"
            ],
            answer: 2,
            rationale: "User Namespace 允许普通用户创建，这是 rootless container 技术的基础。"
        },
        {
            id: "w1-1-q5",
            question: "以下哪个命令可以查看当前进程所属的所有 namespace？",
            options: [
                "ps aux",
                "ls -la /proc/self/ns/",
                "docker inspect",
                "cat /etc/namespace"
            ],
            answer: 1,
            rationale: "/proc/self/ns/ 目录包含当前进程所属的所有 namespace 的符号链接。"
        },
        {
            id: "w1-1-q6",
            question: "UTS Namespace 主要隔离的是什么？",
            options: [
                "进程间通信资源",
                "主机名和 NIS 域名",
                "用户和组 ID",
                "挂载点"
            ],
            answer: 1,
            rationale: "UTS（Unix Time-Sharing System）Namespace 隔离主机名和域名，让容器可以有独立的 hostname。"
        },
        {
            id: "w1-1-q7",
            question: "unshare 命令的主要作用是什么？",
            options: [
                "在不同容器之间共享文件",
                "将当前进程移动到新的 namespace 中",
                "列出系统中所有的 namespace",
                "删除一个 namespace"
            ],
            answer: 1,
            rationale: "unshare(2) 系统调用（以及同名命令）用于将调用进程移动到新创建的 namespace 中。"
        },
        {
            id: "w1-1-q8",
            question: "为什么 Kubernetes 的 pause 容器需要持续运行？",
            options: [
                "它负责处理 Pod 的所有网络流量",
                "它持有 Pod 的网络 namespace，防止在其他容器重启时 namespace 被销毁",
                "它负责收集 Pod 的监控指标",
                "它是 Pod 中唯一可以访问宿主机资源的容器"
            ],
            answer: 1,
            rationale: "pause 容器是 Pod 中第一个启动的容器，它创建并持有网络和 IPC namespace，其他容器共享这些 namespace。"
        },
        {
            id: "w1-1-q9",
            question: "setns 系统调用的作用是什么？",
            options: [
                "创建一个新的 namespace",
                "允许进程加入一个已存在的 namespace",
                "销毁一个 namespace",
                "列出 namespace 中的所有进程"
            ],
            answer: 1,
            rationale: "setns(2) 允许进程通过 /proc/[pid]/ns 文件描述符加入已存在的 namespace。"
        },
        {
            id: "w1-1-q10",
            question: "Cgroup Namespace 隔离的是什么？",
            options: [
                "CPU 和内存使用量",
                "cgroup 文件系统的根目录视图",
                "进程的 cgroup 权限",
                "cgroup 控制器的配置"
            ],
            answer: 1,
            rationale: "Cgroup Namespace 让容器内的进程只能看到以自己为根的 cgroup 层级，而看不到宿主机的完整 cgroup 树。"
        },
        {
            id: "w1-1-q11",
            question: "以下哪种情况下 namespace 会被销毁？",
            options: [
                "namespace 中的所有进程退出后立即销毁",
                "只有当 namespace 中没有进程且没有文件描述符引用时才会销毁",
                "namespace 创建 24 小时后自动销毁",
                "需要手动运行命令销毁"
            ],
            answer: 1,
            rationale: "Namespace 的生命周期由引用计数管理，只有当没有进程且没有文件描述符引用时才会被内核回收。"
        },
        {
            id: "w1-1-q12",
            question: "docker exec 进入容器后能看到容器内进程的原因是？",
            options: [
                "docker exec 创建了一个新的 PID namespace",
                "docker exec 将新进程加入到容器的 PID namespace 中",
                "Docker 修改了 /proc 文件系统",
                "容器内进程的 PID 与宿主机相同"
            ],
            answer: 1,
            rationale: "docker exec 使用 setns 将新进程加入到目标容器的各个 namespace 中，包括 PID namespace。"
        }
    ],
    "w1-2": [
        {
            id: "w1-2-q1",
            question: "Cgroups 的主要作用是什么？",
            options: [
                "隔离进程可见的系统资源",
                "限制、记录和隔离进程组使用的物理资源",
                "管理容器的网络配置",
                "存储容器的文件系统"
            ],
            answer: 1,
            rationale: "Cgroups 用于限制和监控进程组的 CPU、内存、I/O 等物理资源使用。"
        },
        {
            id: "w1-2-q2",
            question: "Cgroups v1 和 v2 的主要区别是什么？",
            options: [
                "v1 支持更多的控制器",
                "v2 使用统一的层级结构，而 v1 每个控制器有独立的层级",
                "v1 更适合容器，v2 更适合虚拟机",
                "v2 不支持 CPU 限制"
            ],
            answer: 1,
            rationale: "Cgroups v2 最大的变化是采用统一层级，所有控制器共享同一棵树，简化了管理。"
        },
        {
            id: "w1-2-q3",
            question: "K8s Pod 的 resources.limits.cpu 对应 cgroup 的什么机制？",
            options: [
                "cpu.shares（权重）",
                "cpu.quota/cpu.period（配额）",
                "cpuset.cpus（CPU 绑定）",
                "cpu.weight（v2 权重）"
            ],
            answer: 1,
            rationale: "limits 是硬限制，通过 cpu.quota/period 实现绝对上限；requests 对应 shares，是软限制。"
        },
        {
            id: "w1-2-q4",
            question: "当容器的内存使用超过 memory.limit 时会发生什么？",
            options: [
                "容器自动扩容",
                "容器被暂停直到内存释放",
                "触发 OOM Killer，可能杀死容器进程",
                "内存使用被自动限制在 limit 值"
            ],
            answer: 2,
            rationale: "超过内存硬限制会触发 OOM Killer，内核会选择进程杀死以释放内存。"
        },
        {
            id: "w1-2-q5",
            question: "--cpu-shares=512 和 --cpus=0.5 的区别是什么？",
            options: [
                "两者完全等价",
                "shares 是软限制（CPU 空闲时可超用），cpus 是硬限制（绝对上限）",
                "shares 用于 v2，cpus 用于 v1",
                "shares 限制单核，cpus 限制所有核心总和"
            ],
            answer: 1,
            rationale: "cpu-shares 是权重，在 CPU 竞争时按比例分配；cpus 是配额，设置绝对上限。"
        },
        {
            id: "w1-2-q6",
            question: "如何查看一个进程所属的 cgroup？",
            options: [
                "ps aux | grep cgroup",
                "cat /proc/[PID]/cgroup",
                "cgroup --list [PID]",
                "docker cgroup [PID]"
            ],
            answer: 1,
            rationale: "/proc/[PID]/cgroup 文件包含进程所属的 cgroup 路径信息。"
        },
        {
            id: "w1-2-q7",
            question: "设置 --memory-swap 等于 --memory 的效果是什么？",
            options: [
                "容器可以使用双倍内存",
                "禁用容器的 swap 使用",
                "swap 使用量等于内存使用量",
                "没有任何效果"
            ],
            answer: 1,
            rationale: "--memory-swap 是内存+swap 的总量，设为与 --memory 相等意味着 swap=0。"
        },
        {
            id: "w1-2-q8",
            question: "K8s 的 Guaranteed QoS 类需要满足什么条件？",
            options: [
                "只设置 requests",
                "只设置 limits",
                "requests 和 limits 必须相等，且都要设置",
                "不设置任何资源限制"
            ],
            answer: 2,
            rationale: "Guaranteed QoS 要求 CPU 和内存的 requests 都等于 limits。"
        },
        {
            id: "w1-2-q9",
            question: "Cgroups v2 中的 'no internal process' 约束是什么意思？",
            options: [
                "cgroup 不能包含内核进程",
                "非根 cgroup 如果有子 cgroup，就不能直接包含进程",
                "每个 cgroup 最多只能包含一个进程",
                "cgroup 不能嵌套超过 5 层"
            ],
            answer: 1,
            rationale: "这是 v2 的设计约束，避免父子 cgroup 之间的资源竞争混乱，根 cgroup 例外。"
        },
        {
            id: "w1-2-q10",
            question: "以下哪个不是 cgroup 的控制器？",
            options: [
                "cpu",
                "memory",
                "network",
                "io"
            ],
            answer: 2,
            rationale: "网络限制不是通过 cgroup 控制器实现的，而是通过 tc（流量控制）等其他机制。"
        },
        {
            id: "w1-2-q11",
            question: "如何在 cgroup v2 中启用子 cgroup 的控制器？",
            options: [
                "编辑 /etc/cgroup.conf",
                "向 cgroup.subtree_control 文件写入 +controller 名称",
                "运行 cgroupctl enable",
                "重启系统"
            ],
            answer: 1,
            rationale: "通过向父 cgroup 的 cgroup.subtree_control 写入如 '+cpu +memory' 来启用子 cgroup 的控制器。"
        },
        {
            id: "w1-2-q12",
            question: "容器的 CPU limit 设为 2，它能否同时使用 4 个核心各 50%？",
            options: [
                "不能，只能使用指定的 2 个核心",
                "可以，只要总使用量不超过 200%",
                "不能，每个核心的使用率不能超过 50%",
                "取决于 cpuset 配置"
            ],
            answer: 1,
            rationale: "CPU quota 限制的是总量而非特定核心。容器可以跨多核运行，只要总使用量不超过 limit。"
        }
    ],
    "w1-3": [
        {
            id: "w1-3-q1",
            question: "OverlayFS 是什么类型的文件系统？",
            options: [
                "日志文件系统",
                "联合文件系统（Union Filesystem）",
                "网络文件系统",
                "加密文件系统"
            ],
            answer: 1,
            rationale: "OverlayFS 是联合文件系统，将多个目录层叠合并成统一视图。"
        },
        {
            id: "w1-3-q2",
            question: "OverlayFS 的三层结构中，容器写入的数据存储在哪里？",
            options: [
                "lowerdir（只读层）",
                "upperdir（可写层）",
                "merged（合并层）",
                "workdir（工作目录）"
            ],
            answer: 1,
            rationale: "upperdir 是可写层，所有容器运行时的修改都存储在这里。"
        },
        {
            id: "w1-3-q3",
            question: "Copy-on-Write 机制在什么时候触发？",
            options: [
                "读取文件时",
                "容器启动时",
                "容器首次修改来自镜像的文件时",
                "容器停止时"
            ],
            answer: 2,
            rationale: "当容器首次修改镜像中的文件时，整个文件会被复制到可写层，这就是 Copy-on-Write。"
        },
        {
            id: "w1-3-q4",
            question: "为什么在 Dockerfile 中 RUN apt-get install && apt-get clean 比分开写两行好？",
            options: [
                "执行速度更快",
                "两者没有区别",
                "合并到一层可以避免中间层包含已删除的文件",
                "分开写会导致构建失败"
            ],
            answer: 2,
            rationale: "每个 RUN 指令创建一层。分开写时，第一层包含安装的文件，即使第二层删除，第一层仍然存在。"
        },
        {
            id: "w1-3-q5",
            question: "什么是 whiteout 文件？",
            options: [
                "空白的配置文件",
                "用于标记在上层被删除的文件，遮盖下层的同名文件",
                "加密的临时文件",
                "存储文件元数据的文件"
            ],
            answer: 1,
            rationale: "Whiteout 是特殊文件，用于在联合文件系统中标记删除，而不实际删除只读层的文件。"
        },
        {
            id: "w1-3-q6",
            question: "Docker overlay2 驱动最多支持多少个下层？",
            options: [
                "32 层",
                "64 层",
                "128 层",
                "无限层"
            ],
            answer: 2,
            rationale: "overlay2 原生支持最多 128 个 lower 层，这是内核的限制。"
        },
        {
            id: "w1-3-q7",
            question: "为什么数据库建议使用 Volume 而不是直接写容器文件系统？",
            options: [
                "Volume 支持加密",
                "Volume 绕过存储驱动，避免 Copy-on-Write 的性能开销",
                "Volume 可以跨容器共享",
                "以上都是"
            ],
            answer: 1,
            rationale: "Volume 直接挂载到容器，绕过 OverlayFS，避免写放大和 CoW 开销，对写密集型应用性能更好。"
        },
        {
            id: "w1-3-q8",
            question: "以下哪个命令可以查看镜像的每一层信息？",
            options: [
                "docker images",
                "docker history <image>",
                "docker layer <image>",
                "docker inspect --layers <image>"
            ],
            answer: 1,
            rationale: "docker history 显示镜像每一层的大小、创建时间和创建命令。"
        },
        {
            id: "w1-3-q9",
            question: "多阶段构建的主要优势是什么？",
            options: [
                "加快构建速度",
                "减少最终镜像体积，不包含构建工具",
                "支持并行构建",
                "自动优化 Dockerfile"
            ],
            answer: 1,
            rationale: "多阶段构建允许在一个阶段编译，只将产物复制到最终镜像，避免包含编译器等构建工具。"
        },
        {
            id: "w1-3-q10",
            question: "OverlayFS 的 POSIX 兼容性问题可能导致什么？",
            options: [
                "文件无法创建",
                "先只读后读写打开同一文件可能得到不同版本",
                "文件权限丢失",
                "文件名长度受限"
            ],
            answer: 1,
            rationale: "OverlayFS 不完全兼容 POSIX，某些文件操作顺序可能导致不一致的行为。"
        },
        {
            id: "w1-3-q11",
            question: "删除镜像中的文件为什么不能减小镜像体积？",
            options: [
                "Docker 禁止删除文件",
                "删除操作创建 whiteout 文件而非真正删除下层文件",
                "文件被移动到回收站",
                "删除需要管理员权限"
            ],
            answer: 1,
            rationale: "联合文件系统的下层是只读的，删除只是在上层创建 whiteout 遮盖，下层文件仍然存在。"
        },
        {
            id: "w1-3-q12",
            question: "页面缓存（Page Cache）在多容器场景下如何优化内存使用？",
            options: [
                "每个容器独立缓存",
                "共享镜像层的页面缓存可以被多个容器共享",
                "禁用页面缓存以节省内存",
                "页面缓存与容器无关"
            ],
            answer: 1,
            rationale: "使用相同镜像层的容器可以共享页面缓存，这是 OverlayFS 的内存效率优势。"
        }
    ],
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
            rationale: "Veth 总是成对创建，像一根虚拟网线，一端发送的数据立即在另一端可见。"
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
            rationale: "Docker 默认使用 bridge 网络模式，创建 docker0 网桥连接容器。"
        },
        {
            id: "w1-4-q3",
            question: "为什么官方推荐使用用户自定义 bridge 网络？",
            options: [
                "性能更好",
                "提供自动 DNS 解析，容器可以通过名称互相访问",
                "更安全",
                "占用更少资源"
            ],
            answer: 1,
            rationale: "自定义 bridge 网络内置 DNS 服务，容器可以通过名称或别名互相访问，默认 bridge 不支持。"
        },
        {
            id: "w1-4-q4",
            question: "docker run -p 8080:80 在 iptables 中做了什么？",
            options: [
                "创建防火墙规则阻止 80 端口",
                "添加 DNAT 规则将宿主机 8080 端口流量转发到容器 80 端口",
                "直接绑定宿主机端口",
                "创建端口别名"
            ],
            answer: 1,
            rationale: "Docker 通过 iptables NAT 表的 PREROUTING/POSTROUTING 链实现端口映射。"
        },
        {
            id: "w1-4-q5",
            question: "在哪里抓包可以看到多个容器的网络流量？",
            options: [
                "容器内的 eth0",
                "宿主机的 docker0 网桥或 veth 端",
                "宿主机的物理网卡",
                "无法同时看到多个容器的流量"
            ],
            answer: 1,
            rationale: "在网桥或 veth 的宿主机端抓包可以看到连接到该网桥的所有容器流量。"
        },
        {
            id: "w1-4-q6",
            question: "如果 veth pair 的一端断开会发生什么？",
            options: [
                "另一端继续工作",
                "整个链路状态变为 down",
                "自动重新配对",
                "数据暂存等待重连"
            ],
            answer: 1,
            rationale: "Veth pair 是强耦合的，任一端停止工作会导致整个链路失效。"
        },
        {
            id: "w1-4-q7",
            question: "默认 bridge 网络中容器如何互相访问？",
            options: [
                "通过容器名直接访问",
                "只能通过 IP 地址访问（或使用 --link）",
                "通过 DNS 服务自动解析",
                "无法互相访问"
            ],
            answer: 1,
            rationale: "默认 bridge 网络不提供 DNS 解析，容器只能通过 IP 或 --link（已废弃）访问。"
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
            rationale: "Docker 的端口映射规则存储在 iptables 的 nat 表中。"
        },
        {
            id: "w1-4-q9",
            question: "bridge 网络的容器数量上限是多少会影响稳定性？",
            options: [
                "100 个容器",
                "500 个容器",
                "1000 个容器",
                "无限制"
            ],
            answer: 2,
            rationale: "Docker 文档指出超过 1000 个容器连接到单个网络时可能不稳定。"
        },
        {
            id: "w1-4-q10",
            question: "容器无法访问外网时，首先应该检查什么？",
            options: [
                "DNS 配置",
                "IP 转发是否启用（ip_forward）和 iptables FORWARD 链",
                "容器内存是否不足",
                "Docker 版本"
            ],
            answer: 1,
            rationale: "外网访问依赖 IP 转发和 iptables FORWARD 链允许流量通过。"
        },
        {
            id: "w1-4-q11",
            question: "以下哪个不是 Docker 支持的网络驱动？",
            options: [
                "bridge",
                "host",
                "tunnel",
                "macvlan"
            ],
            answer: 2,
            rationale: "Docker 支持 bridge、host、none、overlay、macvlan、ipvlan 等，但没有 tunnel 驱动。"
        },
        {
            id: "w1-4-q12",
            question: "K8s CNI 插件的作用是什么？",
            options: [
                "管理容器镜像",
                "为 Pod 配置网络，实现容器间通信",
                "监控容器资源使用",
                "调度 Pod 到节点"
            ],
            answer: 1,
            rationale: "CNI（Container Network Interface）插件负责 K8s 中 Pod 的网络配置和容器间通信。"
        }
    ]
}
