import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "w2-1": {
        lessonId: "w2-1",
        background: [
            "Docker 采用客户端-服务器架构：docker CLI 是用户交互入口，dockerd（Docker Daemon）监听 API 请求并管理镜像、容器、网络、卷等对象。两者通过 REST API（Unix socket 或 TCP）通信。",
            "现代 Docker 的底层是 containerd + runc：dockerd 调用 containerd 管理容器生命周期，containerd 调用 runc 真正创建容器进程。这种分层解耦让 K8s 可以直接使用 containerd 而绑过 Docker。",
            "containerd 采用'智能客户端'架构：高层操作（如镜像拉取、容器创建）由客户端完成，daemon 只负责核心容器管理。通过插件机制（proxy plugins、v2 runtimes）扩展功能。",
            "runc 是 OCI 运行时规范的参考实现，负责根据 OCI runtime-spec 创建和运行容器进程。它设置 namespace、cgroups、rootfs，然后 exec 容器入口进程。"
        ],
        keyDifficulties: [
            "调用链路理解：docker run → dockerd API → containerd（gRPC）→ containerd-shim → runc。shim 进程的作用是解耦 containerd 与容器进程，允许 containerd 重启而不影响运行中的容器。",
            "containerd vs Docker Daemon：containerd 专注容器运行时管理（create/start/stop/delete），不负责镜像构建、网络配置、存储管理。这些'高层'功能由 Docker Daemon 或 K8s 组件负责。",
            "v2 Runtime 与 shim：containerd 调用 v2 runtime 二进制文件启动 shim 进程。shim 成为容器的直接父进程，负责收集退出状态、管理 stdio。一个 shim 管理一个容器。",
            "为何 K8s 弃用 Docker Shim：K8s 1.20 废弃 dockershim，因为它是额外的适配层。直接使用 containerd（CRI）更简洁高效，减少维护负担和调用开销。"
        ],
        handsOnPath: [
            "使用 docker version 查看 Client 和 Server（dockerd）版本，使用 docker info 查看 containerd 和 runc 版本信息。",
            "运行一个容器后，使用 ps aux | grep containerd-shim 观察 shim 进程，使用 pstree -p $(pgrep containerd) 查看进程树关系。",
            "使用 ctr（containerd CLI）直接与 containerd 交互：ctr images ls、ctr containers ls，体会绑过 Docker 直接操作 containerd 的方式。",
            "查看 /var/run/docker/containerd/ 目录结构，了解 containerd 的 socket 和状态文件布局。"
        ],
        selfCheck: [
            "描述 docker run 命令从敲下回车到容器启动的完整调用链路，每个组件（docker CLI、dockerd、containerd、shim、runc）各负责什么？",
            "containerd-shim 的作用是什么？如果没有 shim，containerd 重启会发生什么？",
            "K8s 为什么在 1.24 版本完全移除 dockershim？直接使用 containerd 有什么好处？",
            "containerd 的'智能客户端'架构是什么意思？哪些功能在客户端完成，哪些在 daemon 完成？",
            "runc 作为 OCI runtime 参考实现，它具体做了什么工作？容器创建完成后 runc 进程还在吗？"
        ],
        extensions: [
            "阅读 containerd 官方架构文档，深入理解 snapshotter、content store、metadata store 等核心组件。",
            "研究 containerd 的 v2 runtime 规范，了解如何编写自定义运行时插件。",
            "探索 crun（C 语言实现的 OCI runtime）和 youki（Rust 实现），比较与 runc 的性能差异。",
            "阅读 K8s CRI（Container Runtime Interface）规范，理解 kubelet 如何与 containerd 交互。"
        ],
        sourceUrls: [
            "https://docs.docker.com/get-started/docker-overview/",
            "https://github.com/containerd/containerd/blob/main/docs/PLUGINS.md",
            "https://docs.docker.com/get-started/"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "w2-1": [
        {
            id: "w2-1-q1",
            question: "Docker 的客户端-服务器架构中，docker CLI 和 dockerd 之间通过什么方式通信？",
            options: [
                "共享内存",
                "REST API（Unix socket 或 TCP）",
                "消息队列",
                "直接函数调用"
            ],
            answer: 1,
            rationale: "Docker CLI 和 Docker Daemon 通过 REST API 通信，默认使用 Unix socket（/var/run/docker.sock），也可以配置为 TCP 远程访问。"
        },
        {
            id: "w2-1-q2",
            question: "docker run 命令的完整调用链路是什么？",
            options: [
                "docker CLI → runc → containerd → dockerd",
                "docker CLI → dockerd → containerd → runc",
                "docker CLI → containerd → dockerd → runc",
                "docker CLI → dockerd → runc → containerd"
            ],
            answer: 1,
            rationale: "正确的调用链是：docker CLI → dockerd（API）→ containerd（gRPC）→ containerd-shim → runc。每层各有职责。"
        },
        {
            id: "w2-1-q3",
            question: "containerd-shim 进程的主要作用是什么？",
            options: [
                "执行容器内的应用程序",
                "解耦 containerd 与容器进程，允许 containerd 重启而不影响运行中的容器",
                "管理容器的网络配置",
                "构建容器镜像"
            ],
            answer: 1,
            rationale: "shim 进程是容器的直接父进程，负责收集退出状态、管理 stdio。它解耦了 containerd 与容器，使 containerd 可以独立重启。"
        },
        {
            id: "w2-1-q4",
            question: "runc 在容器创建过程中的角色是什么？",
            options: [
                "监听用户命令并调度容器",
                "根据 OCI runtime-spec 创建容器进程（设置 namespace、cgroups、rootfs），然后退出",
                "持续运行并监控容器健康状态",
                "管理容器镜像的存储和分发"
            ],
            answer: 1,
            rationale: "runc 是 OCI 运行时参考实现，负责创建容器进程。创建完成后 runc 退出，容器由 shim 接管。"
        },
        {
            id: "w2-1-q5",
            question: "K8s 1.24 完全移除 dockershim 的主要原因是什么？",
            options: [
                "Docker 公司停止维护 Docker Engine",
                "减少额外的适配层，直接使用符合 CRI 的运行时（如 containerd）更简洁高效",
                "Docker 不支持容器化",
                "为了强制用户购买商业版"
            ],
            answer: 1,
            rationale: "dockershim 是 K8s 维护的适配层，增加了维护负担和调用开销。直接使用 containerd（CRI 兼容）更简洁。"
        },
        {
            id: "w2-1-q6",
            question: "containerd 的'智能客户端'架构是什么意思？",
            options: [
                "客户端具有人工智能能力",
                "高层操作（如镜像拉取、容器创建）由客户端完成，daemon 只负责核心容器管理",
                "客户端可以自动修复错误",
                "客户端可以离线工作"
            ],
            answer: 1,
            rationale: "containerd 将复杂的高层操作（构建、推送、网络配置）留给客户端或上层工具，daemon 专注于核心的容器生命周期管理。"
        },
        {
            id: "w2-1-q7",
            question: "以下哪个命令可以直接与 containerd 交互，绑过 Docker？",
            options: [
                "docker ps",
                "ctr containers ls",
                "kubectl get pods",
                "runc list"
            ],
            answer: 1,
            rationale: "ctr 是 containerd 的官方 CLI 工具，可以直接操作 containerd，不需要 Docker。常用于调试和低层操作。"
        },
        {
            id: "w2-1-q8",
            question: "dockerd（Docker Daemon）负责管理以下哪些对象？",
            options: [
                "只管理容器",
                "镜像、容器、网络、卷等所有 Docker 对象",
                "只管理镜像和容器",
                "只管理网络和卷"
            ],
            answer: 1,
            rationale: "Docker Daemon 是 Docker 的核心服务，负责管理镜像、容器、网络、卷等所有 Docker 对象，响应 Docker API 请求。"
        },
        {
            id: "w2-1-q9",
            question: "一个 containerd-shim 进程管理多少个容器？",
            options: [
                "所有容器共享一个 shim",
                "每个容器有一个独立的 shim 进程",
                "每个节点一个 shim",
                "每个 Pod 一个 shim"
            ],
            answer: 1,
            rationale: "v2 shim 模型中，每个容器有一个独立的 shim 进程，确保容器之间的隔离和独立管理。"
        },
        {
            id: "w2-1-q10",
            question: "containerd 支持哪些类型的外部插件？",
            options: [
                "只支持 Go 语言插件",
                "二进制插件（PATH 中的可执行文件）和代理插件（gRPC 服务）",
                "只支持 Docker 插件格式",
                "只支持 K8s 插件格式"
            ],
            answer: 1,
            rationale: "containerd 支持两种外部插件：二进制插件（可执行文件）和 proxy plugins（通过 Unix socket 连接的 gRPC 服务）。"
        },
        {
            id: "w2-1-q11",
            question: "如果 containerd 进程崩溃重启，运行中的容器会怎样？",
            options: [
                "所有容器立即停止",
                "容器继续运行，因为 shim 进程独立于 containerd",
                "容器暂停等待 containerd 恢复",
                "容器数据全部丢失"
            ],
            answer: 1,
            rationale: "shim 进程是容器的直接父进程，独立于 containerd 运行。containerd 重启后可以重新连接到 shim，恢复对容器的管理。"
        },
        {
            id: "w2-1-q12",
            question: "以下哪项不是 containerd 的职责？",
            options: [
                "容器生命周期管理（create/start/stop）",
                "镜像构建（docker build）",
                "镜像拉取和存储",
                "执行 OCI runtime"
            ],
            answer: 1,
            rationale: "containerd 专注于容器运行时管理，不负责镜像构建。docker build 是 Docker Daemon 的功能，或使用 BuildKit。"
        },
        {
            id: "w2-1-q13",
            question: "Docker 默认的 Unix socket 路径是什么？",
            options: [
                "/var/run/containerd.sock",
                "/var/run/docker.sock",
                "/var/lib/docker/docker.sock",
                "/tmp/docker.sock"
            ],
            answer: 1,
            rationale: "Docker Daemon 默认监听 /var/run/docker.sock，Docker CLI 和其他客户端通过这个 socket 与 daemon 通信。"
        },
        {
            id: "w2-1-q14",
            question: "runc 创建容器进程后会怎样？",
            options: [
                "持续运行监控容器",
                "创建完成后退出，容器由 shim 接管",
                "转换为容器的 init 进程",
                "等待容器结束后清理资源"
            ],
            answer: 1,
            rationale: "runc 是一次性工具，创建容器进程（设置 namespace、cgroups 等）后就退出。容器由 shim 作为父进程管理。"
        },
        {
            id: "w2-1-q15",
            question: "containerd 的 v2 runtime 是什么？",
            options: [
                "第二代容器格式",
                "containerd 调用的运行时二进制文件，用于启动 shim 进程",
                "Docker 的第二版本",
                "K8s 的运行时接口"
            ],
            answer: 1,
            rationale: "v2 runtime 是 containerd 的运行时规范，containerd 调用 v2 runtime 二进制文件来启动 shim 进程，shim 再调用 runc 创建容器。"
        }
    ]
}
