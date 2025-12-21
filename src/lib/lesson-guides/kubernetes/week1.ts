import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
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
            "Linux Namespace 是内核提供的资源隔离抽象层，使 namespace 内的进程看起来拥有独立的全局资源实例——这正是容器技术的核心基石。",
            "Linux 共有 8 种 Namespace 类型：Cgroup（cgroup 根目录）、IPC（System V IPC 与 POSIX 消息队列）、Network（网络设备与协议栈）、Mount（挂载点）、PID（进程 ID）、Time（启动与单调时钟）、User（用户与组 ID）、UTS（主机名与 NIS 域名）。",
            "容器运行时（如 Docker、containerd）通过 clone()、unshare()、setns() 三个系统调用操作 namespace：clone() 在创建进程时指定隔离标志，unshare() 将当前进程移入新 namespace，setns() 加入已存在的 namespace。",
            "理解 namespace 是理解 K8s Pod 安全边界的基础——hostPID、hostNetwork、hostIPC 配置本质上就是选择性突破这些隔离边界。"
        ],
        keyDifficulties: [
            "区分 8 种 namespace 的隔离范围：PID namespace 让容器内进程从 PID 1 开始计数，但宿主机可通过 /proc 看到真实 PID；Network namespace 隔离网络栈但共享内核网络参数（如 sysctl）。",
            "权限模型差异：大多数 namespace 创建需要 CAP_SYS_ADMIN 权限，唯独 User Namespace 自 Linux 3.8 起可由非特权用户创建——这是 rootless container 的技术基础，但也带来复杂的 UID/GID 映射问题。",
            "生命周期管理：namespace 在进程退出后不会立即销毁，只要存在文件描述符引用（/proc/[pid]/ns/*）、bind mount 或子层级依赖，namespace 就会持续存在——pause 容器正是利用这一特性为 Pod 保持 namespace。",
            "继承与共享：子进程默认继承父进程的 namespace，除非显式使用 CLONE_NEW* 标志；同一 Pod 内的容器通过 setns() 共享网络和 IPC namespace。"
        ],
        handsOnPath: [
            "使用 ls -la /proc/self/ns/ 或 lsns 查看当前进程所属的所有 namespace，观察每个 namespace 的 inode 编号作为唯一标识符。",
            "运行 docker run --rm -it alpine sh，在容器内执行 ps aux 和 hostname，对比宿主机输出，体会 PID namespace 和 UTS namespace 的隔离效果。",
            "使用 unshare -p -f --mount-proc /bin/bash 创建新 PID namespace，验证新 namespace 中 PID 从 1 开始，并理解 --mount-proc 的必要性。",
            "实验 docker run --pid=host 和 docker run --net=host，观察取消隔离后容器能看到的资源范围变化，思考安全边界被突破的影响。"
        ],
        selfCheck: [
            "你能说出 Linux 8 种 namespace 各自隔离的资源类型以及对应的 CLONE_NEW* 标志吗？",
            "当 K8s Pod 配置 hostNetwork: true 时，Pod 内进程与宿主机共享什么？有哪些安全风险？",
            "为什么说 User Namespace 是 rootless container 的基础？它如何将容器内 UID 0 映射到宿主机非特权用户？",
            "解释 pause 容器的作用：为什么它需要持续运行？如果 pause 容器被杀死会发生什么？",
            "clone()、unshare()、setns() 三个系统调用在容器生命周期中分别扮演什么角色？"
        ],
        extensions: [
            "深入阅读 man namespaces(7)，了解每种 namespace 的详细行为和边界条件，特别关注 User Namespace 的能力降级机制。",
            "研究 rootless Podman 的实现原理，了解如何在完全无特权的情况下运行容器。",
            "探索 K8s Pod Security Standards（PSS），理解 Baseline 和 Restricted 策略如何限制 hostPID、hostIPC、hostNetwork 的使用。",
            "阅读 runc 或 containerd 源码中 namespace 创建流程，理解容器运行时如何调用 Linux namespace API。"
        ],
        sourceUrls: [
            "https://man7.org/linux/man-pages/man7/namespaces.7.html",
            "https://docs.kernel.org/admin-guide/namespaces/index.html",
            "https://www.docker.com/play-with-docker/"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
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
            question: "Linux Namespace 的核心作用是什么？",
            options: [
                "限制进程使用的 CPU 和内存资源",
                "将全局系统资源包装成隔离的抽象层，使进程看起来拥有独立的资源实例",
                "加密容器之间的网络通信",
                "管理容器镜像的存储层"
            ],
            answer: 1,
            rationale: "Namespace 的核心是资源视图隔离，让 namespace 内的进程认为自己拥有独立的系统资源。资源用量限制是 Cgroups 的功能，两者配合构成容器隔离基础。"
        },
        {
            id: "w1-1-q2",
            question: "Linux 共有多少种 Namespace 类型？",
            options: [
                "5 种",
                "6 种",
                "7 种",
                "8 种"
            ],
            answer: 3,
            rationale: "Linux 有 8 种 Namespace：Cgroup、IPC、Network、Mount、PID、Time、User、UTS。Time namespace 是较新添加的（Linux 5.6）。"
        },
        {
            id: "w1-1-q3",
            question: "以下哪个 Namespace 负责隔离主机名和 NIS 域名？",
            options: [
                "PID Namespace",
                "User Namespace",
                "UTS Namespace",
                "IPC Namespace"
            ],
            answer: 2,
            rationale: "UTS（Unix Time-Sharing System）Namespace 隔离主机名和 NIS 域名，对应 CLONE_NEWUTS 标志，使容器可以拥有独立的 hostname。"
        },
        {
            id: "w1-1-q4",
            question: "哪个系统调用用于将当前进程移入新创建的 namespace？",
            options: [
                "clone()",
                "unshare()",
                "setns()",
                "fork()"
            ],
            answer: 1,
            rationale: "unshare(2) 将调用进程从当前 namespace 移入新创建的 namespace。clone() 在创建新进程时指定 namespace，setns() 加入已存在的 namespace。"
        },
        {
            id: "w1-1-q5",
            question: "哪个 Namespace 可以在不需要特权的情况下创建？",
            options: [
                "PID Namespace",
                "Network Namespace",
                "User Namespace",
                "Mount Namespace"
            ],
            answer: 2,
            rationale: "自 Linux 3.8 起，User Namespace 是唯一不需要 CAP_SYS_ADMIN 权限就能创建的 namespace，这是 rootless container 技术的基础。"
        },
        {
            id: "w1-1-q6",
            question: "当 K8s Pod 配置 hostNetwork: true 时，会发生什么？",
            options: [
                "Pod 使用独立的网络栈，与宿主机完全隔离",
                "Pod 直接使用宿主机的 Network Namespace，可看到宿主机网络接口和端口",
                "Pod 的网络流量被加密传输",
                "Pod 无法访问集群内其他 Pod"
            ],
            answer: 1,
            rationale: "hostNetwork: true 使 Pod 跳过 Network Namespace 隔离，直接使用宿主机网络栈。这意味着 Pod 可以看到宿主机的所有网络接口，并直接绑定宿主机端口。"
        },
        {
            id: "w1-1-q7",
            question: "进程的 namespace 信息存储在文件系统的哪个位置？",
            options: [
                "/etc/namespaces/",
                "/proc/[pid]/ns/",
                "/sys/fs/ns/",
                "/var/run/ns/"
            ],
            answer: 1,
            rationale: "/proc/[pid]/ns/ 目录包含该进程所属各 namespace 的符号链接，可通过 setns() 使用这些文件描述符加入对应 namespace。"
        },
        {
            id: "w1-1-q8",
            question: "以下哪种情况下 Namespace 会被销毁？",
            options: [
                "namespace 内所有进程退出后立即销毁",
                "namespace 创建 24 小时后自动销毁",
                "只有当 namespace 内无进程且无文件描述符引用、无 bind mount、无子层级时才销毁",
                "需要管理员手动执行命令销毁"
            ],
            answer: 2,
            rationale: "Namespace 使用引用计数管理生命周期。即使所有进程退出，只要存在文件描述符引用、bind mount 或子 namespace 依赖，namespace 就会持续存在。"
        },
        {
            id: "w1-1-q9",
            question: "docker exec 进入容器后能看到容器内进程（而非宿主机进程）的原因是？",
            options: [
                "docker exec 创建了全新的 PID namespace",
                "docker exec 使用 setns() 将新进程加入容器的 PID namespace",
                "Docker 修改了 /proc 文件系统的内容",
                "容器内进程的 PID 与宿主机相同"
            ],
            answer: 1,
            rationale: "docker exec 通过 setns() 系统调用将新 shell 进程加入目标容器的各个 namespace（包括 PID、Network、Mount 等），因此在容器视角中看到的是容器内的进程树。"
        },
        {
            id: "w1-1-q10",
            question: "pause 容器在 Kubernetes Pod 中的核心作用是？",
            options: [
                "负责处理 Pod 的所有网络流量和负载均衡",
                "持有 Pod 的 Network/IPC namespace，确保其他容器重启时 namespace 不被销毁",
                "收集 Pod 内所有容器的监控指标和日志",
                "管理 Pod 内容器的资源配额分配"
            ],
            answer: 1,
            rationale: "pause 容器是 Pod 中第一个启动的容器，它创建并持有 Network 和 IPC namespace。其他容器通过 setns() 共享这些 namespace，即使业务容器重启，namespace 也不会消失。"
        },
        {
            id: "w1-1-q11",
            question: "Network Namespace 隔离了以下哪些资源？",
            options: [
                "仅隔离 IP 地址和路由表",
                "隔离网络设备、协议栈、端口等，但共享内核网络参数",
                "完全隔离所有网络相关的内核参数",
                "仅隔离端口号，共享 IP 地址"
            ],
            answer: 1,
            rationale: "Network Namespace（CLONE_NEWNET）隔离网络设备、IP 地址、路由表、端口号、协议栈等，但某些 sysctl 参数是 per-namespace 的，某些是全局共享的。"
        },
        {
            id: "w1-1-q12",
            question: "使用 unshare -p -f --mount-proc /bin/bash 创建新 PID namespace 时，--mount-proc 的作用是？",
            options: [
                "挂载额外的存储卷",
                "重新挂载 /proc 使其反映新 PID namespace 的进程视图",
                "限制进程可访问的 /proc 条目",
                "加密 /proc 中的敏感信息"
            ],
            answer: 1,
            rationale: "新 PID namespace 中的进程如果仍使用旧的 /proc 挂载点，会看到宿主机的进程信息。--mount-proc 重新挂载 /proc，使其反映新 namespace 中 PID 从 1 开始的进程树。"
        },
        {
            id: "w1-1-q13",
            question: "关于子进程的 namespace 继承，以下说法正确的是？",
            options: [
                "子进程总是创建新的 namespace",
                "子进程默认继承父进程的 namespace，除非使用 CLONE_NEW* 标志",
                "子进程必须显式指定要加入的 namespace",
                "子进程只继承 PID namespace，其他 namespace 需单独指定"
            ],
            answer: 1,
            rationale: "fork()/clone() 创建的子进程默认继承父进程所有 namespace。只有在 clone() 时显式指定 CLONE_NEW* 标志，或调用 unshare()，才会创建新的 namespace。"
        },
        {
            id: "w1-1-q14",
            question: "Cgroup Namespace 隔离的资源是？",
            options: [
                "CPU 和内存使用量限制",
                "cgroup 文件系统的根目录视图",
                "进程的 cgroup 控制器配置",
                "cgroup 的优先级权重"
            ],
            answer: 1,
            rationale: "Cgroup Namespace（CLONE_NEWCGROUP）隔离的是 cgroup 层级视图的根目录。进程在新 Cgroup Namespace 中看到的 /sys/fs/cgroup 以自己所在 cgroup 为根，而非宿主机的完整树。"
        },
        {
            id: "w1-1-q15",
            question: "IPC Namespace 隔离的资源包括？",
            options: [
                "网络套接字和端口",
                "System V IPC 对象（信号量、消息队列、共享内存）和 POSIX 消息队列",
                "文件锁和管道",
                "进程信号和信号处理器"
            ],
            answer: 1,
            rationale: "IPC Namespace（CLONE_NEWIPC）隔离 System V IPC 标识符（信号量、消息队列、共享内存段）和 POSIX 消息队列，确保不同 namespace 的进程无法访问彼此的 IPC 资源。"
        }
    ]
}
