import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "w2-2": {
        lessonId: "w2-2",
        background: [
            "多阶段构建（Multi-Stage Build）允许在一个 Dockerfile 中使用多个 FROM 指令，每个 FROM 开始一个新的构建阶段。可以选择性地从一个阶段复制产物到另一个阶段，丢弃不需要的构建工具。",
            "典型用法：第一阶段使用完整的编译环境（如 golang:1.24）构建二进制文件，第二阶段使用最小的运行环境（如 scratch 或 alpine）只复制最终产物，最终镜像不包含编译器、源码等。",
            "镜像瘦身的核心原则：选择最小的基础镜像（Alpine < 6MB）、合并 RUN 指令减少层数、使用 .dockerignore 排除无关文件、清理包管理器缓存、不安装不必要的工具。",
            "BuildKit（Docker 现代构建器）会自动并行构建独立的阶段，只构建目标依赖的阶段，相比传统构建器更高效。使用 DOCKER_BUILDKIT=1 或 Docker 23.0+ 默认启用。"
        ],
        keyDifficulties: [
            "阶段引用语法：使用 AS <name> 命名阶段，COPY --from=<stage> 从指定阶段复制。也可以从外部镜像复制：COPY --from=nginx:latest /etc/nginx/nginx.conf /etc/nginx/。",
            "层缓存优化：RUN apt-get update && apt-get install 必须写在一行，否则 update 的缓存可能过时。频繁变化的指令（如 COPY . /app）放在 Dockerfile 末尾，利用缓存加速构建。",
            "基础镜像选择：scratch（空镜像，只能放静态编译的二进制）、alpine（musl libc，小但可能有兼容性问题）、distroless（Google 维护，无 shell）、debian-slim（glibc 兼容，略大）。",
            "镜像安全与可复现性：使用镜像摘要（SHA256）而非标签固定版本，确保构建可复现。但固定版本意味着需要主动更新以获取安全补丁。"
        ],
        handsOnPath: [
            "编写一个多阶段 Dockerfile：第一阶段用 golang 编译程序，第二阶段用 scratch 或 alpine 只复制二进制，对比最终镜像大小。",
            "使用 docker build --target <stage> 只构建到指定阶段，观察 BuildKit 如何跳过不相关的阶段。",
            "使用 docker history <image> 分析镜像层，找出占用空间大的层，尝试合并 RUN 指令或清理缓存来优化。",
            "使用 dive 工具（wagoodman/dive）可视化分析镜像层内容，找出可删除的文件和优化机会。"
        ],
        selfCheck: [
            "多阶段构建如何帮助减小镜像体积？为什么不把所有命令写在一个 FROM 下面？",
            "COPY --from=build /app/main /app/main 中的 build 是什么？如何定义？可以从外部镜像复制吗？",
            "为什么 RUN apt-get update && apt-get install -y package 要写在一行？分开写会有什么问题？",
            "scratch、alpine、distroless、debian-slim 这几个基础镜像有什么区别？各适合什么场景？",
            ".dockerignore 文件的作用是什么？忘记配置会有什么问题？"
        ],
        extensions: [
            "研究 BuildKit 的高级特性：--mount=type=cache（缓存目录）、--mount=type=secret（安全地传入密钥）、--mount=type=ssh（SSH agent 转发）。",
            "探索 Dockerfile 的 heredoc 语法（Docker 1.40+），在 RUN 中编写多行脚本更清晰。",
            "学习使用 docker sbom 和 docker scout 分析镜像的软件物料清单（SBOM）和漏洞。",
            "研究 Chainguard Images 和 Google Distroless，了解'无 shell'镜像的安全优势和使用限制。"
        ],
        sourceUrls: [
            "https://docs.docker.com/build/building/multi-stage/",
            "https://docs.docker.com/build/building/best-practices/",
            "https://docs.docker.com/build/ci/"
        ]
    },
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
    "w2-2": [
        {
            id: "w2-2-q1",
            question: "多阶段构建（Multi-Stage Build）的核心优势是什么？",
            options: [
                "加快镜像拉取速度",
                "允许选择性复制产物，丢弃构建工具，减小最终镜像体积",
                "自动修复安全漏洞",
                "支持多平台构建"
            ],
            answer: 1,
            rationale: "多阶段构建的核心价值是将构建环境与运行环境分离，只复制需要的产物到最终镜像，不包含编译器、源码等构建工具。"
        },
        {
            id: "w2-2-q2",
            question: "在多阶段构建中，如何给一个阶段命名？",
            options: [
                "FROM golang:1.24 NAME build",
                "FROM golang:1.24 AS build",
                "FROM golang:1.24 --name=build",
                "STAGE build FROM golang:1.24"
            ],
            answer: 1,
            rationale: "使用 FROM <image> AS <name> 语法给阶段命名，后续可以用 COPY --from=<name> 引用该阶段的产物。"
        },
        {
            id: "w2-2-q3",
            question: "COPY --from=build /app/main /app/ 中的 build 可以是什么？",
            options: [
                "只能是前面定义的阶段名",
                "可以是阶段名，也可以是外部镜像名（如 nginx:latest）",
                "只能是阶段序号（如 0、1）",
                "只能是外部镜像名"
            ],
            answer: 1,
            rationale: "--from 可以引用 Dockerfile 中的命名阶段，也可以引用外部镜像，如 COPY --from=nginx:latest /etc/nginx/nginx.conf。"
        },
        {
            id: "w2-2-q4",
            question: "为什么 RUN apt-get update && apt-get install 要写在一行？",
            options: [
                "减少 Dockerfile 行数",
                "防止 update 的缓存过时，确保安装最新版本的包",
                "加快构建速度",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "如果分开写，apt-get update 的层会被缓存。下次构建时如果包列表已更新，缓存的 update 层可能包含过时的包索引。"
        },
        {
            id: "w2-2-q5",
            question: "以下哪个是最小的 Docker 基础镜像？",
            options: [
                "alpine",
                "debian-slim",
                "scratch",
                "ubuntu:minimal"
            ],
            answer: 2,
            rationale: "scratch 是一个空镜像（0 字节），只能放静态编译的二进制文件。alpine 约 5MB，已经是最小的有用系统镜像。"
        },
        {
            id: "w2-2-q6",
            question: "docker build --target build 的作用是什么？",
            options: [
                "指定构建的目标平台",
                "只构建到指定阶段，不构建后续阶段",
                "指定构建的目标目录",
                "设置构建的目标标签"
            ],
            answer: 1,
            rationale: "--target 允许只构建到指定阶段，常用于调试构建过程或只需要中间产物的场景。BuildKit 会自动跳过不相关的阶段。"
        },
        {
            id: "w2-2-q7",
            question: ".dockerignore 文件的作用是什么？",
            options: [
                "列出不需要运行的容器",
                "排除文件和目录，不将它们发送到构建上下文",
                "列出已废弃的 Docker 命令",
                "配置 Docker 忽略的错误类型"
            ],
            answer: 1,
            rationale: ".dockerignore 排除不需要的文件（如 .git、node_modules、日志），减小构建上下文大小，加速构建并避免敏感信息泄露。"
        },
        {
            id: "w2-2-q8",
            question: "Alpine Linux 作为基础镜像的潜在问题是什么？",
            options: [
                "镜像太大",
                "使用 musl libc 而非 glibc，可能有兼容性问题",
                "不支持多阶段构建",
                "没有包管理器"
            ],
            answer: 1,
            rationale: "Alpine 使用 musl libc 代替 glibc，某些依赖 glibc 特性的程序可能无法正常运行或需要静态编译。"
        },
        {
            id: "w2-2-q9",
            question: "如何确保镜像构建的可复现性？",
            options: [
                "使用 latest 标签",
                "使用镜像摘要（SHA256 digest）而非标签固定版本",
                "不指定基础镜像版本",
                "使用本地缓存"
            ],
            answer: 1,
            rationale: "镜像标签（如 latest 或 1.0）可能指向不同的镜像。使用摘要（如 @sha256:abc...）可以精确固定版本，确保构建可复现。"
        },
        {
            id: "w2-2-q10",
            question: "BuildKit 相比传统 Docker 构建器的优势是什么？",
            options: [
                "只支持单阶段构建",
                "并行构建独立阶段，只构建目标依赖的阶段",
                "不支持缓存",
                "只能在 Linux 上运行"
            ],
            answer: 1,
            rationale: "BuildKit 可以并行执行独立的构建阶段，智能地只构建目标依赖的阶段，显著加速多阶段构建过程。"
        },
        {
            id: "w2-2-q11",
            question: "Google Distroless 镜像的特点是什么？",
            options: [
                "包含完整的 Linux 发行版",
                "不包含 shell 和包管理器，只有应用运行时需要的最小依赖",
                "专门用于开发环境",
                "只支持 Java 应用"
            ],
            answer: 1,
            rationale: "Distroless 镜像不包含 shell、包管理器等工具，只有应用需要的运行时依赖，减少攻击面，提高安全性。"
        },
        {
            id: "w2-2-q12",
            question: "以下哪个 Dockerfile 指令顺序更利于缓存？",
            options: [
                "COPY . /app → RUN npm install",
                "COPY package*.json /app/ → RUN npm install → COPY . /app",
                "RUN npm install → COPY . /app",
                "顺序不影响缓存"
            ],
            answer: 1,
            rationale: "先复制 package.json 并安装依赖，再复制源码。这样源码变化不会使依赖安装层失效，利用缓存加速构建。"
        },
        {
            id: "w2-2-q13",
            question: "使用 scratch 作为基础镜像时需要注意什么？",
            options: [
                "需要安装基本系统工具",
                "只能放静态编译的二进制文件，没有 libc 和其他运行时依赖",
                "必须配合 alpine 使用",
                "只支持 Go 语言程序"
            ],
            answer: 1,
            rationale: "scratch 是空镜像，没有任何文件系统内容。只有完全静态编译、不依赖动态库的二进制文件才能直接在 scratch 上运行。"
        },
        {
            id: "w2-2-q14",
            question: "如何在 RUN 指令中清理 apt 缓存以减小镜像体积？",
            options: [
                "单独写一个 RUN rm -rf /var/lib/apt/lists/*",
                "在同一个 RUN 中执行：apt-get install && rm -rf /var/lib/apt/lists/*",
                "使用 apt-get clean 作为独立层",
                "Docker 会自动清理"
            ],
            answer: 1,
            rationale: "必须在同一个 RUN 中清理缓存，否则清理操作只是在新层中标记删除，下层的缓存数据仍然存在于镜像中。"
        },
        {
            id: "w2-2-q15",
            question: "dive 工具的作用是什么？",
            options: [
                "潜入运行中的容器进行调试",
                "可视化分析镜像每一层的内容，找出优化机会",
                "测试容器的网络连通性",
                "监控容器资源使用"
            ],
            answer: 1,
            rationale: "dive 是一个镜像分析工具，可以逐层查看镜像内容，显示每层增加/删除的文件，帮助发现可优化的地方。"
        }
    ],
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
