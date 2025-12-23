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
    "w2-4": {
        lessonId: "w2-4",
        background: [
            "OCI（Open Container Initiative）是 Linux 基金会下的开放治理项目，定义容器行业标准。三大规范：Image Spec（镜像格式）、Runtime Spec（运行时行为）、Distribution Spec（分发协议）共同构成容器互操作的基础。",
            "OCI Image Spec 定义容器镜像的结构：manifest（描述镜像内容）、config（运行时配置）、layers（文件系统层）。采用内容寻址（content-addressable）机制，通过 SHA256 哈希引用各组件，确保完整性和可验证性。",
            "OCI Runtime Spec 定义容器的执行标准：bundle 目录结构、config.json 配置格式、容器生命周期操作（create/start/kill/delete）。runc 是参考实现，containerd/CRI-O 调用它执行容器。",
            "OCI Distribution Spec 定义镜像仓库的 HTTP API：push（上传镜像）、pull（拉取镜像）、content discovery（发现内容）。Docker Hub、Harbor、ghcr.io 等仓库都实现此规范，实现镜像跨平台流转。"
        ],
        keyDifficulties: [
            "Image Manifest 结构：包含 mediaType（内容类型）、config（镜像配置引用）、layers（层列表）。Image Index 支持多架构镜像（如同时包含 amd64 和 arm64），客户端根据平台选择合适的 manifest。",
            "Runtime Bundle 与 config.json：bundle 是包含 rootfs 和 config.json 的目录。config.json 定义 process（要执行的进程）、mounts（挂载点）、linux（namespace/cgroups/seccomp）等，是容器运行的完整描述。",
            "容器生命周期状态机：creating → created → running → stopped。运行时必须支持 create（准备容器）、start（启动进程）、kill（发送信号）、delete（清理资源）操作，并通过 state 命令查询状态。",
            "Distribution API 核心端点：GET /v2/<name>/manifests/<reference> 拉取 manifest，PUT 上传 manifest，GET/HEAD /v2/<name>/blobs/<digest> 操作 blob。支持分块上传大层，支持 cross-repository blob mounting 优化。"
        ],
        handsOnPath: [
            "使用 skopeo inspect docker://nginx:latest 查看镜像的 OCI manifest 结构，观察 layers、config digest 和 mediaType 字段。",
            "使用 docker save nginx:latest -o nginx.tar && tar -xvf nginx.tar 解包镜像，查看 manifest.json、layer tar 文件和 config json 的实际内容。",
            "使用 runc spec 生成默认的 config.json，阅读其中的 process、mounts、linux 配置，理解 OCI Runtime Spec 的配置模型。",
            "使用 curl 或 oras 命令直接与 OCI 兼容仓库交互（如 ghcr.io），体验 Distribution API 的 manifest 和 blob 操作。"
        ],
        selfCheck: [
            "OCI 的三大规范（Image/Runtime/Distribution）各自解决什么问题？它们之间如何协作？",
            "什么是内容寻址（content-addressable）？为什么 OCI 镜像使用 SHA256 digest 而不是文件名引用内容？",
            "OCI Image Index 的作用是什么？如何支持多架构镜像（multi-platform images）？",
            "config.json 中的 process、mounts、linux 字段分别定义什么？它们对应容器的哪些运行时行为？",
            "OCI Distribution API 如何实现镜像的增量传输？cross-repository blob mounting 是什么？"
        ],
        extensions: [
            "阅读 OCI Image Spec 的 descriptor 和 mediaType 设计，理解 OCI Artifacts（非容器镜像的通用制品）如何复用分发基础设施。",
            "研究 ORAS（OCI Registry As Storage）项目，了解如何将 Helm Chart、WASM 模块等任意制品存储到 OCI 仓库。",
            "探索 OCI Runtime Spec 的 hooks 机制（prestart/poststart/poststop），了解如何在容器生命周期中注入自定义逻辑。",
            "对比 Docker Image Format v1/v2 和 OCI Image Format 的差异，理解向 OCI 标准迁移的历史背景。"
        ],
        sourceUrls: [
            "https://github.com/opencontainers/runtime-spec",
            "https://github.com/opencontainers/image-spec",
            "https://github.com/opencontainers/distribution-spec"
        ]
    },
    "w2-3": {
        lessonId: "w2-3",
        background: [
            "CRI（Container Runtime Interface）是 Kubernetes 定义的插件接口，让 kubelet 无需重新编译即可使用不同的容器运行时。它基于 gRPC 协议，定义了 RuntimeService（容器生命周期）和 ImageService（镜像管理）两个核心服务。",
            "dockershim 是 Kubernetes 早期为适配 Docker 而维护的垫片层。Docker 不原生实现 CRI，kubelet 需要通过 dockershim 转换请求。K8s 1.20 宣布废弃，1.24 正式移除。",
            "containerd 和 CRI-O 是两个主流的 CRI 兼容运行时。containerd 来自 Docker 拆分，功能完整；CRI-O 专为 Kubernetes 设计，更轻量。两者都使用 runc 作为底层 OCI 运行时。",
            "CRI 构建在 OCI（Open Container Initiative）规范之上：OCI image-spec 定义镜像打包格式，OCI runtime-spec 定义容器执行标准。这让不同工具链可以互操作。"
        ],
        keyDifficulties: [
            "CRI 双服务模型：RuntimeService 处理 Pod 沙箱和容器的创建/启动/停止/删除，ImageService 处理镜像拉取/列表/删除。kubelet 通过 gRPC 调用这两个服务端点。",
            "dockershim 废弃的影响范围：现有 Docker 镜像继续兼容，但直接调用 docker socket 的脚本/工具需要迁移。日志收集、监控 agent、GPU 集成等可能需要适配 CRI 运行时。",
            "containerd vs CRI-O 选型：containerd 功能更全面（支持非 K8s 场景），CRI-O 更专注 K8s（更小的攻击面）。OpenShift 默认 CRI-O，大多数发行版默认 containerd。",
            "CRI v1 API 要求：Kubernetes 1.26+ 要求运行时必须支持 v1 CRI API，否则 kubelet 无法注册节点。升级集群前需确认运行时版本兼容性。"
        ],
        handsOnPath: [
            "使用 crictl（CRI 官方 CLI）替代 docker 命令：crictl ps、crictl images、crictl logs，体验直接与 CRI 运行时交互。",
            "在 kind 或 minikube 集群中检查容器运行时：kubectl get nodes -o wide 查看 CONTAINER-RUNTIME 列，确认使用的是 containerd 还是其他运行时。",
            "查看 kubelet 的 --container-runtime-endpoint 配置，理解 kubelet 如何连接到 CRI socket（如 unix:///run/containerd/containerd.sock）。",
            "对比 ctr（containerd CLI）和 crictl（CRI CLI）的命令差异：ctr 是 containerd 专用，crictl 是 CRI 通用，namespace 处理方式不同。"
        ],
        selfCheck: [
            "CRI 定义了哪两个核心 gRPC 服务？它们各自负责什么功能？",
            "为什么 Kubernetes 要废弃 dockershim？直接使用 CRI 兼容运行时有什么好处？",
            "现有的 Docker 镜像在 dockershim 移除后还能继续使用吗？为什么？",
            "containerd 和 CRI-O 的主要区别是什么？各适合什么场景？",
            "如果升级 Kubernetes 到 1.26+ 后节点无法注册，可能的原因是什么？如何排查？"
        ],
        extensions: [
            "阅读 CRI API protobuf 定义（github.com/kubernetes/cri-api），深入理解 PodSandbox、Container 等核心概念的字段设计。",
            "研究 crictl 的高级用法：crictl exec、crictl stats、crictl inspectp，用于生产环境故障排查。",
            "探索其他 CRI 实现：kata-containers（轻量级 VM 隔离）、gVisor（用户态内核），理解安全隔离与性能的权衡。",
            "了解 Mirantis/Docker 对 dockershim 的外部维护方案（cri-dockerd），用于需要保留 Docker 的过渡场景。"
        ],
        sourceUrls: [
            "https://kubernetes.io/blog/2020/12/02/dockershim-faq/",
            "https://kubernetes.io/docs/concepts/architecture/cri/",
            "https://cri-o.io/"
        ]
    },
    "w2-1": {
        lessonId: "w2-1",
        background: [
            "【客户端-服务器架构】Docker 官方文档：'Docker uses a client-server architecture'——docker CLI 通过 REST API 与 Docker daemon（dockerd）通信，daemon 负责构建、运行和分发容器。API 可以通过 Unix socket 或 TCP 访问。",
            "【核心对象定义】Docker 文档定义：'An image is a read-only template with instructions for creating a Docker container'——镜像是只读模板，容器是镜像的可运行实例，'You can create, start, stop, move, or delete a container'。",
            "【分层架构演进】现代 Docker 底层是 containerd + runc：dockerd 调用 containerd 管理容器生命周期，containerd 调用 runc 创建容器进程。这种解耦让 K8s 可以直接使用 containerd 而绑过 Docker。",
            "【智能客户端模型】containerd PLUGINS.md：'puts more responsibility on the client for managing data'——高层操作由客户端完成，daemon 只负责核心容器管理。这意味着构建、网络配置等由上层工具（Docker/K8s）负责。",
            "【插件扩展机制】containerd 支持两类外部插件：'proxy plugins are plugins which are external but are started and managed by containerd'（代理插件）和 binary plugins（二进制插件，需在 PATH 中）。"
        ],
        keyDifficulties: [
            "【调用链路全貌】docker run → dockerd REST API → containerd gRPC → containerd-shim → runc。文档指出 shim 的作用是'allows you to run daemonless containers'——解耦 containerd 与容器进程，允许 containerd 重启而不影响运行中的容器。",
            "【v2 Runtime 规范】containerd 文档：'v2 is started from a binary'，containerd 调用 v2 runtime 二进制启动 shim 进程，shim 再'connect back to containerd over ttrpc'。一个 shim 管理一个容器，负责收集退出状态和 stdio。",
            "【功能边界划分】containerd 专注运行时管理（create/start/stop/delete），不负责镜像构建、网络配置、存储管理。Docker 文档强调 daemon'manages Docker objects'——这些'高层'功能由 Docker Daemon 或 K8s 负责。",
            "【K8s dockershim 废弃】K8s 1.20 废弃 dockershim（额外的适配层），1.24 正式移除。直接使用 containerd（CRI 兼容）更简洁高效，减少维护负担和调用开销。"
        ],
        handsOnPath: [
            "使用 docker version 查看 Client 和 Server（dockerd）版本，使用 docker info 查看 containerd 和 runc 版本信息，验证架构组件。",
            "运行 docker run -d nginx 后，使用 ps aux | grep containerd-shim 观察 shim 进程，使用 pstree -p $(pgrep containerd) 查看进程树关系。",
            "使用 ctr（containerd CLI）直接与 containerd 交互：ctr -n moby images ls、ctr -n moby containers ls，体会绕过 Docker 直接操作 containerd。",
            "查看 /var/run/docker/containerd/ 和 /run/containerd/ 目录结构，了解 containerd 的 socket（containerd.sock）和状态文件布局。",
            "实验 containerd 重启：停止 containerd 服务后观察容器是否继续运行（shim 独立），重启后 containerd 是否能重新接管容器管理。"
        ],
        selfCheck: [
            "描述 docker run 命令从敲下回车到容器启动的完整调用链路，每个组件（docker CLI、dockerd、containerd、shim、runc）各负责什么？",
            "containerd-shim 的作用是什么？如果没有 shim，containerd 重启会发生什么？'daemonless containers'是什么意思？",
            "containerd 的'智能客户端'架构是什么意思？哪些功能在客户端/上层工具完成，哪些在 containerd daemon 完成？",
            "runc 作为 OCI runtime 参考实现，它具体做了什么工作？容器创建完成后 runc 进程还在吗？为什么？",
            "containerd 的 proxy plugins 和 binary plugins 有什么区别？它们各自适用于什么场景？"
        ],
        extensions: [
            "【架构深入】阅读 containerd 官方架构文档，理解 snapshotter（快照器）、content store（内容存储）、metadata store（元数据存储）等核心组件。",
            "【自定义运行时】研究 containerd v2 runtime 规范，了解如何编写自定义运行时插件，shim 与 containerd 的 ttrpc 通信协议。",
            "【OCI runtime 对比】探索 crun（C 实现，更快启动）、youki（Rust 实现）、gVisor runsc（用户态内核），比较与 runc 的性能和安全差异。",
            "【CRI 接口】阅读 K8s CRI（Container Runtime Interface）规范，理解 kubelet 如何通过 CRI 与 containerd 交互，避开 Docker daemon。"
        ],
        sourceUrls: [
            "https://docs.docker.com/get-started/docker-overview/",
            "https://github.com/containerd/containerd/blob/main/docs/PLUGINS.md",
            "https://docs.docker.com/get-started/"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "w2-4": [
        {
            id: "w2-4-q1",
            question: "OCI（Open Container Initiative）包含哪三大核心规范？",
            options: [
                "Build Spec、Deploy Spec、Monitor Spec",
                "Image Spec、Runtime Spec、Distribution Spec",
                "Container Spec、Network Spec、Storage Spec",
                "Docker Spec、Kubernetes Spec、Cloud Spec"
            ],
            answer: 1,
            rationale: "OCI 定义三大规范：Image Spec（镜像格式）、Runtime Spec（运行时行为）、Distribution Spec（分发协议），共同构成容器互操作基础。"
        },
        {
            id: "w2-4-q2",
            question: "OCI Image Spec 采用什么机制引用镜像组件？",
            options: [
                "文件名引用",
                "内容寻址（content-addressable），使用 SHA256 digest",
                "UUID 标识",
                "序列号"
            ],
            answer: 1,
            rationale: "OCI 镜像使用内容寻址机制，通过 SHA256 哈希值引用 manifest、config 和 layer，确保完整性和可验证性。"
        },
        {
            id: "w2-4-q3",
            question: "OCI Runtime Spec 中的 bundle 是什么？",
            options: [
                "压缩的镜像文件",
                "包含 rootfs 和 config.json 的目录，是容器运行的完整描述",
                "网络配置文件",
                "日志收集配置"
            ],
            answer: 1,
            rationale: "bundle 是 OCI Runtime Spec 定义的容器运行单元，包含 rootfs 目录和 config.json 配置文件。"
        },
        {
            id: "w2-4-q4",
            question: "OCI Runtime Spec 定义的容器生命周期状态包括哪些？",
            options: [
                "init → running → done",
                "creating → created → running → stopped",
                "pending → active → terminated",
                "new → ready → executing → finished"
            ],
            answer: 1,
            rationale: "OCI Runtime Spec 定义容器状态机：creating（准备中）→ created（已创建）→ running（运行中）→ stopped（已停止）。"
        },
        {
            id: "w2-4-q5",
            question: "OCI Image Index 的作用是什么？",
            options: [
                "索引镜像仓库中的所有镜像",
                "支持多架构镜像，让客户端根据平台选择合适的 manifest",
                "记录镜像的历史版本",
                "优化镜像搜索性能"
            ],
            answer: 1,
            rationale: "Image Index（也叫 manifest list）包含多个平台的 manifest 引用，支持同一个镜像标签对应多个架构（如 amd64、arm64）。"
        },
        {
            id: "w2-4-q6",
            question: "config.json 中的 linux 字段定义什么内容？",
            options: [
                "Linux 发行版信息",
                "namespace、cgroups、seccomp 等 Linux 特有的隔离和安全配置",
                "Linux 内核版本要求",
                "Linux 文件系统类型"
            ],
            answer: 1,
            rationale: "config.json 的 linux 字段定义 Linux 特有配置：namespaces（隔离）、cgroups（资源限制）、seccomp（系统调用过滤）等。"
        },
        {
            id: "w2-4-q7",
            question: "runc 与 OCI Runtime Spec 的关系是什么？",
            options: [
                "runc 定义了 OCI Runtime Spec",
                "runc 是 OCI Runtime Spec 的参考实现",
                "runc 与 OCI 无关",
                "runc 已被 OCI 废弃"
            ],
            answer: 1,
            rationale: "runc 是 OCI Runtime Spec 的参考实现，由 Docker 贡献给 OCI，containerd 和 CRI-O 都使用它执行容器。"
        },
        {
            id: "w2-4-q8",
            question: "OCI Distribution Spec 定义的三个核心操作是什么？",
            options: [
                "build、test、deploy",
                "push、pull、content discovery",
                "create、update、delete",
                "upload、download、sync"
            ],
            answer: 1,
            rationale: "OCI Distribution Spec 定义 push（上传镜像）、pull（拉取镜像）、content discovery（发现内容）三个核心操作。"
        },
        {
            id: "w2-4-q9",
            question: "如何通过 Distribution API 获取镜像 manifest？",
            options: [
                "POST /v2/<name>/manifests/<reference>",
                "GET /v2/<name>/manifests/<reference>",
                "FETCH /v2/<name>/manifests/<reference>",
                "PULL /v2/<name>/manifests/<reference>"
            ],
            answer: 1,
            rationale: "OCI Distribution API 使用标准 HTTP 方法，GET /v2/<name>/manifests/<reference> 用于拉取 manifest。"
        },
        {
            id: "w2-4-q10",
            question: "OCI Image Manifest 中的 layers 字段包含什么？",
            options: [
                "镜像的所有文件",
                "文件系统层的引用列表，每层用 digest 标识",
                "容器运行时的日志",
                "镜像的元数据标签"
            ],
            answer: 1,
            rationale: "layers 是一个描述符数组，每个元素包含层的 mediaType、size 和 digest（SHA256 哈希），用于按序组装文件系统。"
        },
        {
            id: "w2-4-q11",
            question: "什么是 cross-repository blob mounting？",
            options: [
                "跨仓库复制整个镜像",
                "在同一个 registry 中，引用已存在的 blob 而无需重新上传",
                "挂载远程仓库到本地",
                "合并多个仓库的内容"
            ],
            answer: 1,
            rationale: "cross-repository blob mounting 允许在推送镜像时引用同一 registry 中已存在的 blob，避免重复上传相同的层。"
        },
        {
            id: "w2-4-q12",
            question: "OCI Runtime Spec 中的 hooks 机制用于什么？",
            options: [
                "挂载文件系统",
                "在容器生命周期的特定阶段执行自定义脚本（如 prestart、poststart、poststop）",
                "配置网络钩子",
                "监控容器性能"
            ],
            answer: 1,
            rationale: "hooks 允许在容器生命周期的 prestart、poststart、poststop 等阶段注入自定义逻辑，如网络配置、清理等。"
        },
        {
            id: "w2-4-q13",
            question: "使用什么工具可以查看 OCI 镜像的 manifest 结构？",
            options: [
                "docker build",
                "skopeo inspect",
                "kubectl describe",
                "runc run"
            ],
            answer: 1,
            rationale: "skopeo 是专门操作容器镜像的工具，skopeo inspect 可以查看远程镜像的 manifest、层信息和配置。"
        },
        {
            id: "w2-4-q14",
            question: "OCI Artifacts 是什么概念？",
            options: [
                "OCI 定义的容器运行时",
                "利用 OCI Distribution 规范存储非容器镜像的通用制品（如 Helm Chart、WASM）",
                "OCI 的官方镜像仓库",
                "OCI 的构建工具"
            ],
            answer: 1,
            rationale: "OCI Artifacts 复用 OCI Distribution 基础设施存储任意制品，如 Helm Chart、Cosign 签名、WASM 模块等。"
        },
        {
            id: "w2-4-q15",
            question: "以下哪个仓库实现了 OCI Distribution Spec？",
            options: [
                "只有 Docker Hub",
                "Docker Hub、Harbor、ghcr.io、quay.io 等主流仓库",
                "只有私有仓库",
                "只有云厂商的仓库"
            ],
            answer: 1,
            rationale: "OCI Distribution Spec 被广泛实现，Docker Hub、Harbor、ghcr.io、quay.io、各云厂商 registry 都兼容这一规范。"
        }
    ],
    "w2-3": [
        {
            id: "w2-3-q1",
            question: "CRI（Container Runtime Interface）的主要作用是什么？",
            options: [
                "构建容器镜像",
                "让 kubelet 无需重新编译即可使用不同的容器运行时",
                "管理 Kubernetes 集群网络",
                "存储容器日志"
            ],
            answer: 1,
            rationale: "CRI 是 Kubernetes 定义的插件接口，通过标准化的 gRPC 协议让 kubelet 可以与任何兼容的容器运行时通信。"
        },
        {
            id: "w2-3-q2",
            question: "CRI 定义了哪两个核心 gRPC 服务？",
            options: [
                "BuildService 和 DeployService",
                "RuntimeService 和 ImageService",
                "ContainerService 和 PodService",
                "NetworkService 和 StorageService"
            ],
            answer: 1,
            rationale: "CRI 包含 RuntimeService（管理容器生命周期）和 ImageService（管理镜像拉取和存储）两个核心服务。"
        },
        {
            id: "w2-3-q3",
            question: "Kubernetes 废弃 dockershim 的主要原因是什么？",
            options: [
                "Docker 公司倒闭了",
                "Docker 镜像格式过时",
                "减少额外的适配层，直接使用 CRI 兼容运行时更简洁高效",
                "Docker 不支持 Linux"
            ],
            answer: 2,
            rationale: "dockershim 是额外的适配层，增加了维护负担和调用开销。直接使用 containerd 或 CRI-O 更简洁高效。"
        },
        {
            id: "w2-3-q4",
            question: "dockershim 在哪个 Kubernetes 版本被正式移除？",
            options: [
                "1.20",
                "1.22",
                "1.24",
                "1.26"
            ],
            answer: 2,
            rationale: "dockershim 在 K8s 1.20 宣布废弃，在 K8s 1.24 正式移除。1.26 开始要求 v1 CRI API。"
        },
        {
            id: "w2-3-q5",
            question: "dockershim 移除后，现有的 Docker 镜像会怎样？",
            options: [
                "无法使用，需要重新构建",
                "继续兼容，因为都遵循 OCI 镜像规范",
                "只能在 Docker 环境中使用",
                "需要转换格式"
            ],
            answer: 1,
            rationale: "Docker 镜像遵循 OCI 镜像规范，containerd 和 CRI-O 都支持这个规范，所以镜像可以继续使用。"
        },
        {
            id: "w2-3-q6",
            question: "以下哪个是 CRI 兼容的容器运行时？",
            options: [
                "Docker Engine（无 shim）",
                "containerd",
                "runc",
                "buildah"
            ],
            answer: 1,
            rationale: "containerd 原生实现 CRI 接口。Docker Engine 需要 dockershim 或 cri-dockerd 适配，runc 是 OCI 运行时，buildah 是构建工具。"
        },
        {
            id: "w2-3-q7",
            question: "CRI-O 与 containerd 的主要区别是什么？",
            options: [
                "CRI-O 不支持 Kubernetes",
                "containerd 只能在 Docker 中使用",
                "CRI-O 专为 Kubernetes 设计，更轻量；containerd 功能更全面",
                "两者完全相同"
            ],
            answer: 2,
            rationale: "CRI-O 专注 K8s 场景，攻击面更小；containerd 来自 Docker 拆分，功能更全面，也支持非 K8s 场景。"
        },
        {
            id: "w2-3-q8",
            question: "kubelet 通过什么方式与 CRI 运行时通信？",
            options: [
                "HTTP REST API",
                "gRPC 协议",
                "共享内存",
                "消息队列"
            ],
            answer: 1,
            rationale: "CRI 基于 gRPC 协议定义，kubelet 作为 gRPC 客户端连接到运行时提供的 gRPC 端点。"
        },
        {
            id: "w2-3-q9",
            question: "如何配置 kubelet 连接到容器运行时？",
            options: [
                "--docker-endpoint 参数",
                "--container-runtime-endpoint 参数",
                "--cri-socket 参数",
                "通过环境变量 RUNTIME_SOCKET"
            ],
            answer: 1,
            rationale: "kubelet 使用 --container-runtime-endpoint 参数指定 CRI socket 路径，如 unix:///run/containerd/containerd.sock。"
        },
        {
            id: "w2-3-q10",
            question: "crictl 工具的作用是什么？",
            options: [
                "构建容器镜像",
                "作为 CRI 兼容运行时的官方 CLI 工具，替代 docker 命令进行调试",
                "管理 Kubernetes 集群",
                "监控容器性能"
            ],
            answer: 1,
            rationale: "crictl 是 CRI 官方 CLI 工具，可以直接与 CRI 运行时交互，用于容器和镜像的调试操作。"
        },
        {
            id: "w2-3-q11",
            question: "Kubernetes 1.26+ 对 CRI 有什么要求？",
            options: [
                "必须使用 Docker",
                "运行时必须支持 v1 CRI API",
                "必须使用 CRI-O",
                "不再需要 CRI"
            ],
            answer: 1,
            rationale: "Kubernetes 1.26+ 要求容器运行时必须支持 v1 CRI API，否则 kubelet 无法注册节点。"
        },
        {
            id: "w2-3-q12",
            question: "如果直接调用 Docker socket 的脚本在 dockershim 移除后会怎样？",
            options: [
                "继续正常工作",
                "需要迁移到使用 CRI 工具（如 crictl）或运行时 CLI",
                "自动适配新运行时",
                "只影响镜像构建"
            ],
            answer: 1,
            rationale: "直接使用 Docker socket 的脚本/工具需要迁移，改用 crictl 或对应运行时的 CLI 工具。"
        },
        {
            id: "w2-3-q13",
            question: "cri-dockerd 的作用是什么？",
            options: [
                "Docker 官方的新版本",
                "Mirantis/Docker 维护的外部 dockershim，用于在 K8s 中继续使用 Docker",
                "CRI-O 的别名",
                "containerd 的插件"
            ],
            answer: 1,
            rationale: "cri-dockerd 是 Mirantis 和 Docker 维护的外部 dockershim 实现，用于需要保留 Docker 的过渡场景。"
        },
        {
            id: "w2-3-q14",
            question: "OpenShift 默认使用哪个容器运行时？",
            options: [
                "Docker",
                "containerd",
                "CRI-O",
                "runc"
            ],
            answer: 2,
            rationale: "OpenShift 4.x 默认使用 CRI-O，因为它专为 Kubernetes 设计，更轻量且攻击面更小。"
        },
        {
            id: "w2-3-q15",
            question: "以下哪项在 dockershim 移除后仍然正常工作？",
            options: [
                "kubectl exec 进入容器",
                "直接使用 docker ps 查看 K8s 容器",
                "docker build 在节点上构建镜像",
                "docker logs 查看容器日志"
            ],
            answer: 0,
            rationale: "kubectl exec 通过 CRI 接口工作，不依赖 Docker。docker 命令依赖 Docker daemon，在纯 containerd 节点上无法使用。"
        }
    ],
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
            question: "Docker 官方文档对 Docker 架构的描述是什么？",
            options: [
                "Docker uses a client-server architecture——docker CLI 通过 REST API 与 daemon 通信",
                "Docker 使用点对点架构",
                "Docker 只能本地运行，不支持远程",
                "Docker CLI 直接创建容器，无需 daemon"
            ],
            answer: 0,
            rationale: "Docker 官方文档明确指出：'Docker uses a client-server architecture'，CLI 作为客户端通过 REST API（Unix socket 或 TCP）与 daemon 通信。"
        },
        {
            id: "w2-1-q2",
            question: "docker run 命令的完整调用链路是什么？",
            options: [
                "docker CLI → runc → containerd → dockerd",
                "docker CLI → containerd → dockerd → runc",
                "docker CLI → dockerd → containerd → containerd-shim → runc",
                "docker CLI → dockerd → runc → containerd"
            ],
            answer: 2,
            rationale: "正确的调用链是：docker CLI → dockerd（REST API）→ containerd（gRPC）→ containerd-shim → runc。每层各有职责。"
        },
        {
            id: "w2-1-q3",
            question: "containerd PLUGINS.md 文档描述的'智能客户端'架构核心特点是什么？",
            options: [
                "客户端具有 AI 能力自动修复问题",
                "客户端可以离线工作",
                "daemon 负责所有高层操作",
                "puts more responsibility on the client——高层操作由客户端完成，daemon 只负责核心管理"
            ],
            answer: 3,
            rationale: "containerd 文档：'puts more responsibility on the client for managing data'——镜像构建、网络配置等由上层工具（Docker/K8s）负责。"
        },
        {
            id: "w2-1-q4",
            question: "containerd-shim 的作用是什么？文档中的关键描述是？",
            options: [
                "执行容器内的应用程序",
                "allows you to run daemonless containers——解耦 containerd 与容器，containerd 重启不影响容器",
                "管理容器的网络配置",
                "构建和推送容器镜像"
            ],
            answer: 1,
            rationale: "containerd 文档指出 shim'allows you to run daemonless containers'——shim 独立于 containerd 运行，允许 containerd 重启而不中断容器。"
        },
        {
            id: "w2-1-q5",
            question: "Docker 官方文档对镜像（image）的定义是什么？",
            options: [
                "镜像是运行中的容器实例",
                "镜像是容器的网络配置",
                "An image is a read-only template with instructions for creating a Docker container",
                "镜像是 Docker daemon 的配置文件"
            ],
            answer: 2,
            rationale: "Docker 文档定义：'An image is a read-only template with instructions for creating a Docker container'——镜像是只读模板。"
        },
        {
            id: "w2-1-q6",
            question: "containerd 支持的两类外部插件分别是什么？",
            options: [
                "Go 插件和 Python 插件",
                "proxy plugins（代理插件，gRPC 服务）和 binary plugins（二进制插件）",
                "Docker 插件和 K8s 插件",
                "网络插件和存储插件"
            ],
            answer: 1,
            rationale: "containerd 文档：支持 proxy plugins（'external but are started and managed by containerd'）和 binary plugins（需在 PATH 中）。"
        },
        {
            id: "w2-1-q7",
            question: "containerd v2 runtime 的启动方式是什么？",
            options: [
                "由 Docker daemon 直接启动",
                "v2 is started from a binary——containerd 调用二进制启动 shim，shim 再通过 ttrpc 连回 containerd",
                "由 kubelet 直接管理",
                "v2 runtime 是常驻服务"
            ],
            answer: 1,
            rationale: "containerd 文档：'v2 is started from a binary'，启动后 shim'connect back to containerd over ttrpc'，一个 shim 管理一个容器。"
        },
        {
            id: "w2-1-q8",
            question: "以下哪个命令可以直接与 containerd 交互，绕过 Docker？",
            options: [
                "docker ps",
                "kubectl get pods",
                "ctr containers ls",
                "runc list"
            ],
            answer: 2,
            rationale: "ctr 是 containerd 的官方 CLI 工具，可以直接操作 containerd（如 ctr -n moby images ls），不需要 Docker daemon。"
        },
        {
            id: "w2-1-q9",
            question: "如果 containerd 进程崩溃重启，运行中的容器会怎样？",
            options: [
                "所有容器立即停止",
                "容器暂停等待 containerd 恢复",
                "容器数据全部丢失",
                "容器继续运行，因为 shim 进程独立于 containerd"
            ],
            answer: 3,
            rationale: "shim 进程是容器的直接父进程，独立于 containerd 运行（daemonless）。containerd 重启后可重新连接 shim 恢复管理。"
        },
        {
            id: "w2-1-q10",
            question: "runc 创建容器进程后会怎样？",
            options: [
                "创建完成后退出，容器由 shim 接管",
                "持续运行监控容器健康",
                "转换为容器的 init 进程",
                "等待容器结束后清理资源"
            ],
            answer: 0,
            rationale: "runc 是 OCI 运行时参考实现，创建容器进程（设置 namespace、cgroups、rootfs）后就退出。容器由 shim 作为父进程管理。"
        },
        {
            id: "w2-1-q11",
            question: "K8s 为什么在 1.24 版本完全移除 dockershim？",
            options: [
                "Docker 公司停止维护 Docker Engine",
                "Docker 镜像格式不兼容 K8s",
                "减少额外适配层，直接使用 CRI 兼容运行时（如 containerd）更简洁高效",
                "Docker 不支持 Linux"
            ],
            answer: 2,
            rationale: "dockershim 是 K8s 维护的额外适配层，增加了维护负担和调用开销。直接使用 containerd（原生 CRI）更简洁高效。"
        },
        {
            id: "w2-1-q12",
            question: "以下哪项不是 containerd 的职责？",
            options: [
                "容器生命周期管理（create/start/stop）",
                "镜像拉取和存储",
                "执行 OCI runtime（如 runc）",
                "镜像构建（docker build）"
            ],
            answer: 3,
            rationale: "containerd 专注容器运行时管理，不负责镜像构建。Docker 文档明确 daemon'manages Docker objects'，镜像构建由 Docker/BuildKit 负责。"
        }
    ]
}
