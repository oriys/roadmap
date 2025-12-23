import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "w2-2": {
        lessonId: "w2-2",
        background: [
            "【多阶段构建核心价值】Docker 文档：'Split your Dockerfile instructions into distinct stages to make sure that the resulting output only contains the files that are needed to run the application'——多阶段构建通过分离构建和运行环境大幅减小镜像体积。",
            "【阶段引用语法】使用 FROM baseimage AS stagename 命名阶段，COPY --from=stagename 从指定阶段复制。文档强调：'use the COPY --from instruction to copy from a separate image'——也可直接从外部镜像复制。",
            "【BuildKit 智能构建】文档指出 BuildKit 'only builds the stages that the target stage depends on'——自动跳过不需要的阶段。传统 Docker Engine 会构建所有前置阶段。使用 --target 可只构建到指定阶段。",
            "【基础镜像选择】最佳实践推荐从 Docker Official Images、Verified Publishers 或 Docker-Sponsored Open Source 开始。选择最小基础镜像（scratch/alpine/distroless）减少攻击面和体积。",
            "【供应链安全】文档强调：'By pinning your images to a digest, you're guaranteed to always use the same image version'——使用摘要（SHA256）而非标签固定版本，确保构建可复现和供应链完整性。"
        ],
        keyDifficulties: [
            "【层缓存失效陷阱】文档警告：apt-get update 与 install 必须在同一 RUN 中，否则'cached layers become stale, potentially installing outdated packages'——缓存的 update 层可能包含过时的包索引。",
            "【清理时机问题】rm -rf /var/lib/apt/lists/* 必须在安装指令同一层执行。分开写只是在新层标记删除，下层数据仍在镜像中——'删除不减小体积'是常见误区。",
            "【基础镜像权衡】scratch（空镜像，只能放静态编译二进制）vs alpine（musl libc，小但有兼容性风险）vs distroless（Google 维护，无 shell，攻击面小）vs debian-slim（glibc 兼容，略大）。",
            "【CI 缓存策略】文档提到三种缓存方式：本地缓存、registry 缓存、GitHub Actions 缓存。选择取决于 CI 环境特点和跨构建共享需求。"
        ],
        handsOnPath: [
            "编写多阶段 Dockerfile：第一阶段用 golang:1.24 编译，第二阶段用 scratch 或 alpine 只复制二进制，使用 docker images 对比镜像大小。",
            "使用 docker build --target build 只构建到 build 阶段，观察 BuildKit 如何跳过后续阶段。对比启用/禁用 BuildKit 的构建行为差异。",
            "使用 docker history <image> 分析镜像层，找出占用空间大的层。尝试合并 RUN 指令或在同一层清理缓存来优化。",
            "配置 .dockerignore 排除 .git、node_modules、日志文件等。对比有无 .dockerignore 时构建上下文大小和构建时间。",
            "使用 docker build --pull 和 --no-cache 验证基础镜像更新。尝试用摘要（docker pull image@sha256:xxx）固定版本。"
        ],
        selfCheck: [
            "多阶段构建的核心优势是什么？为什么不把所有命令写在一个 FROM 下面？BuildKit 如何优化多阶段构建？",
            "COPY --from=build /app/main /app/ 中的 build 可以是什么？如何定义阶段名？能否从 nginx:latest 等外部镜像复制？",
            "为什么 RUN apt-get update && apt-get install -y package && rm -rf /var/lib/apt/lists/* 要写在一行？分开写会有什么问题？",
            "scratch、alpine、distroless、debian-slim 这几个基础镜像有什么区别？musl libc 与 glibc 的兼容性问题是什么？",
            "如何确保镜像构建的可复现性？使用标签（如 node:18）和摘要（sha256:xxx）有什么区别？",
            ".dockerignore 的作用是什么？忘记配置会造成什么问题？"
        ],
        extensions: [
            "【BuildKit 高级特性】研究 --mount=type=cache（缓存目录加速依赖安装）、--mount=type=secret（安全传入密钥）、--mount=type=ssh（SSH agent 转发克隆私有仓库）。",
            "【Heredoc 语法】探索 Dockerfile heredoc 语法（Docker 1.40+），在 RUN 中编写多行脚本更清晰，避免反斜杠续行。",
            "【安全扫描集成】学习 docker scout、trivy、grype 扫描镜像漏洞，将扫描集成到 CI/CD 流程中。",
            "【多平台构建】研究 docker buildx 和 --platform 参数，构建同时支持 amd64 和 arm64 的多架构镜像。"
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
            "【OCI 项目定位】OCI（Open Container Initiative）是 Linux 基金会下的开放治理项目。Runtime Spec 文档：'creates and maintains the software shipping container image format spec'——定义容器行业标准，三大规范（Image/Runtime/Distribution）构成互操作基础。",
            "【Bundle 核心概念】Runtime Spec：'bundles — directories containing all files needed to launch a containerized application'——bundle 是包含运行容器所需全部文件的目录，核心是 config.json 配置文件。",
            "【内容寻址机制】Image Spec：'cryptographic digest-based addressing, ensuring immutability and integrity verification'——镜像采用基于摘要的内容寻址，确保不可变性和完整性验证，无论存储位置如何都能确定性标识。",
            "【分发协议设计】Distribution Spec：'API protocol to facilitate and standardize the distribution of content'——标准化内容分发协议，支持 OCI Images 和通用制品分发，实现跨 registry 互操作。",
            "【通用制品支持】Distribution Spec：'The format of uploaded manifests need not necessarily adhere to the OCI Image Format Specification'——manifest 格式不必严格遵循 Image Spec，允许存储任意制品（Helm Chart、WASM 等）。"
        ],
        keyDifficulties: [
            "【config.json 结构】Runtime Spec：配置文件包含'Process specification（执行的进程）、Mount definitions（文件系统挂载点）、Platform-specific sections（Linux namespaces/cgroups、Windows 设置等）'——跨平台容器的完整描述。",
            "【生命周期操作】Runtime Spec 定义四个核心操作：'Create（从 bundle 初始化容器但不启动进程）、Start（执行主进程）、Kill（终止运行中容器）、Delete（移除容器资源）'——运行时必须实现这些操作。",
            "【Hooks 扩展机制】Runtime Spec：hooks 用于'extending functionality of an OCI-compliant runtime by hooking into a container's lifecycle with an external application'——常用于网络配置和存储卷管理。",
            "【Image Index 多架构】Image Spec：Image Index'enables multi-platform image support, allowing a single image reference to resolve to architecture-specific implementations'——单个镜像引用可解析到特定架构的实现。",
            "【Descriptor 标准化】Image Spec：Descriptor'provide standardized metadata for image components, including digest, size, and mediaType'——作为规范数据模型中的标准引用结构。"
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
            "【CRI 核心定义】K8s 文档：'Container Runtime Interface (CRI) is a plugin interface that enables the kubelet to use a wide variety of container runtimes without recompiling cluster components'——基于 gRPC 的标准化接口，解耦 kubelet 与运行时实现。",
            "【双服务架构】CRI 定义两个 gRPC 服务：RuntimeService（处理 Pod 沙箱和容器的创建/启动/停止/删除）和 ImageService（镜像拉取/列表/删除）。kubelet 作为 gRPC 客户端连接到运行时。",
            "【dockershim 废弃原因】FAQ 列出五点：维护负担重、Docker 不原生支持 CRI 需要垫片、dockershim 本就是临时方案、与 cgroups v2 和 user namespaces 等新特性不兼容。",
            "【迁移影响范围】FAQ 强调：'All Docker images will continue to work with CRI implementations'——镜像完全兼容。但需检查：日志配置、直接调用 docker 的脚本、kubectl 插件、监控 agent、GPU 集成。",
            "【CRI-O 定位】官方描述为'Kubernetes CRI 的实现'，'Docker 在 Kubernetes 中的轻量级替代方案'，专为 K8s 优化，支持任何 OCI 兼容运行时。"
        ],
        keyDifficulties: [
            "【版本兼容要求】K8s 文档：'Kubernetes v1.26+ requires container runtime support for CRI v1 API'——如果运行时不支持 v1 API，kubelet 将无法注册节点，不会调度 Pod。",
            "【containerd vs CRI-O 选型】FAQ 推荐 containerd（'Relatively easy swap from Docker'，性能好，CNCF 支持）。CRI-O 专为 K8s 设计（OpenShift 4.x 自 2019 年使用），攻击面更小。两者都用 runc 作为底层 OCI 运行时。",
            "【crictl vs docker 命令】FAQ 指出：'crictl is a drop-in replacement for docker CLI when managing containers'——用 crictl 替代 docker ps/logs/exec 进行系统维护和调试。",
            "【外部 dockershim 维护】FAQ：'Mirantis and Docker have committed to maintaining a replacement for dockershim'——cri-dockerd 项目为需要保留 Docker 的场景提供过渡方案。"
        ],
        handsOnPath: [
            "使用 crictl（CRI 官方 CLI）替代 docker 命令：crictl ps、crictl images、crictl logs <container-id>，体验直接与 CRI 运行时交互。",
            "在 kind 或 minikube 集群中检查容器运行时：kubectl get nodes -o wide 查看 CONTAINER-RUNTIME 列，确认使用的是 containerd 还是 CRI-O。",
            "查看 kubelet 的 --container-runtime-endpoint 配置，理解 kubelet 如何连接到 CRI socket（如 unix:///run/containerd/containerd.sock）。",
            "对比 ctr（containerd CLI）和 crictl（CRI CLI）的命令差异：ctr 是 containerd 专用，crictl 是 CRI 通用。注意 namespace 处理方式（ctr -n k8s.io）。",
            "如果有 Docker 节点，尝试配置 cri-dockerd 作为过渡方案，理解它如何在 Docker 之上提供 CRI 兼容接口。"
        ],
        selfCheck: [
            "CRI 定义了哪两个核心 gRPC 服务？它们各自负责什么功能？kubelet 如何与运行时通信？",
            "FAQ 列出的 dockershim 废弃原因有哪些？为什么说'dockershim was always intended as a temporary solution'？",
            "现有的 Docker 镜像在 dockershim 移除后还能继续使用吗？为什么？docker build 产出的镜像呢？",
            "containerd 和 CRI-O 的主要区别是什么？各适合什么场景？它们共同使用的底层 OCI 运行时是什么？",
            "如果升级 Kubernetes 到 1.26+ 后节点无法注册，可能的原因是什么？如何排查？",
            "crictl 与 docker CLI 的关系是什么？在什么场景下应该使用 crictl？"
        ],
        extensions: [
            "【CRI API 规范】阅读 github.com/kubernetes/cri-api 的 protobuf 定义，深入理解 PodSandbox、Container 等核心概念的字段设计。",
            "【crictl 高级用法】探索 crictl exec、crictl stats、crictl inspectp、crictl runp 用于生产环境故障排查和调试。",
            "【安全隔离运行时】研究 Kata Containers（轻量级 VM 隔离）和 gVisor（用户态内核），理解安全隔离与性能的权衡。",
            "【CRI-O 架构深入】了解 CRI-O 的组件：containers/image 拉取、containers/storage 存储、conmon 监控，与 containerd 架构对比。"
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
                "Image Spec、Runtime Spec、Distribution Spec",
                "Build Spec、Deploy Spec、Monitor Spec",
                "Container Spec、Network Spec、Storage Spec",
                "Docker Spec、Kubernetes Spec、Cloud Spec"
            ],
            answer: 0,
            rationale: "OCI 定义三大规范：Image Spec（镜像格式）、Runtime Spec（运行时行为）、Distribution Spec（分发协议），共同构成容器互操作基础。"
        },
        {
            id: "w2-4-q2",
            question: "Runtime Spec 对 bundle 的定义是什么？",
            options: [
                "压缩的镜像文件",
                "网络配置目录",
                "'directories containing all files needed to launch a containerized application'",
                "日志收集配置"
            ],
            answer: 2,
            rationale: "Runtime Spec 明确定义 bundle 为'directories containing all files needed to launch a containerized application'，包含 config.json 配置文件。"
        },
        {
            id: "w2-4-q3",
            question: "Image Spec 采用的内容寻址机制有什么特点？",
            options: [
                "使用文件名引用组件",
                "使用 UUID 标识",
                "使用序列号",
                "'cryptographic digest-based addressing, ensuring immutability and integrity verification'"
            ],
            answer: 3,
            rationale: "Image Spec 明确采用'cryptographic digest-based addressing, ensuring immutability and integrity verification'——基于摘要的寻址确保不可变性。"
        },
        {
            id: "w2-4-q4",
            question: "OCI Runtime Spec 定义的四个核心生命周期操作是什么？",
            options: [
                "init、run、pause、stop",
                "Create、Start、Kill、Delete",
                "build、push、pull、run",
                "new、ready、executing、finished"
            ],
            answer: 1,
            rationale: "Runtime Spec 定义四个核心操作：Create（初始化容器）、Start（执行主进程）、Kill（终止容器）、Delete（移除资源）。"
        },
        {
            id: "w2-4-q5",
            question: "Runtime Spec 中 config.json 包含哪些主要配置部分？",
            options: [
                "只有进程配置",
                "只有网络配置",
                "Process specification、Mount definitions、Platform-specific sections",
                "只有存储配置"
            ],
            answer: 2,
            rationale: "Runtime Spec 指出 config.json 包含'Process specification、Mount definitions、Platform-specific sections（Linux namespaces/cgroups 等）'。"
        },
        {
            id: "w2-4-q6",
            question: "Image Index 的作用是什么？",
            options: [
                "索引仓库中的所有镜像",
                "记录镜像历史版本",
                "优化搜索性能",
                "'enables multi-platform image support, allowing a single image reference to resolve to architecture-specific implementations'"
            ],
            answer: 3,
            rationale: "Image Spec 指出 Image Index'enables multi-platform image support, allowing a single image reference to resolve to architecture-specific implementations'。"
        },
        {
            id: "w2-4-q7",
            question: "Runtime Spec 中 hooks 机制的用途是什么？",
            options: [
                "'extending functionality by hooking into a container's lifecycle with an external application'",
                "挂载文件系统",
                "监控容器性能",
                "配置网络路由"
            ],
            answer: 0,
            rationale: "Runtime Spec 明确 hooks 用于'extending functionality of an OCI-compliant runtime by hooking into a container's lifecycle with an external application'。"
        },
        {
            id: "w2-4-q8",
            question: "Distribution Spec 的核心目标是什么？",
            options: [
                "定义容器运行时行为",
                "定义镜像存储格式",
                "'API protocol to facilitate and standardize the distribution of content'",
                "定义容器网络配置"
            ],
            answer: 2,
            rationale: "Distribution Spec 明确定义为'API protocol to facilitate and standardize the distribution of content'——标准化内容分发协议。"
        },
        {
            id: "w2-4-q9",
            question: "Distribution Spec 对 manifest 格式的要求是什么？",
            options: [
                "必须严格遵循 Image Spec",
                "'need not necessarily adhere to the OCI Image Format Specification'——允许存储任意制品",
                "必须使用 JSON 格式",
                "必须包含签名"
            ],
            answer: 1,
            rationale: "Distribution Spec 指出'The format of uploaded manifests need not necessarily adhere to the OCI Image Format Specification'，支持通用制品。"
        },
        {
            id: "w2-4-q10",
            question: "Image Spec 中 Descriptor 的作用是什么？",
            options: [
                "描述容器进程",
                "描述网络配置",
                "描述存储卷",
                "'provide standardized metadata for image components, including digest, size, and mediaType'"
            ],
            answer: 3,
            rationale: "Image Spec 指出 Descriptor'provide standardized metadata for image components, including digest, size, and mediaType'——标准化元数据结构。"
        },
        {
            id: "w2-4-q11",
            question: "runc 与 OCI Runtime Spec 的关系是什么？",
            options: [
                "runc 定义了 OCI Runtime Spec",
                "runc 与 OCI 无关",
                "runc 已被 OCI 废弃",
                "runc 是 OCI Runtime Spec 的参考实现"
            ],
            answer: 3,
            rationale: "runc 是 OCI Runtime Spec 的参考实现，由 Docker 贡献给 OCI，containerd 和 CRI-O 都使用它执行容器。"
        },
        {
            id: "w2-4-q12",
            question: "OCI 三大规范如何协作形成容器生态？",
            options: [
                "Image Spec 定义镜像格式，Runtime Spec 定义执行标准，Distribution Spec 定义分发协议",
                "三者完全独立，无关联",
                "只有 Runtime Spec 是核心，其他可选",
                "只有 Distribution Spec 被广泛采用"
            ],
            answer: 0,
            rationale: "OCI 三大规范协作：Image Spec 定义镜像格式、Runtime Spec 定义执行标准、Distribution Spec 定义分发协议，共同构成完整的容器生态。"
        }
    ],
    "w2-3": [
        {
            id: "w2-3-q1",
            question: "K8s 文档对 CRI（Container Runtime Interface）的定义是什么？",
            options: [
                "a plugin interface that enables the kubelet to use a wide variety of container runtimes without recompiling",
                "一种容器镜像格式",
                "一种网络协议",
                "一种存储驱动"
            ],
            answer: 0,
            rationale: "K8s 文档明确定义 CRI 为'a plugin interface that enables the kubelet to use a wide variety of container runtimes without recompiling cluster components'。"
        },
        {
            id: "w2-3-q2",
            question: "CRI 定义了哪两个核心 gRPC 服务？",
            options: [
                "BuildService 和 DeployService",
                "ContainerService 和 PodService",
                "RuntimeService 和 ImageService",
                "NetworkService 和 StorageService"
            ],
            answer: 2,
            rationale: "CRI 定义 RuntimeService（管理 Pod/容器生命周期）和 ImageService（管理镜像拉取和存储）两个核心 gRPC 服务。"
        },
        {
            id: "w2-3-q3",
            question: "dockershim FAQ 列出的废弃原因不包括以下哪项？",
            options: [
                "维护负担重",
                "Docker 性能太差",
                "Docker 不原生支持 CRI 需要垫片",
                "与 cgroups v2 等新特性不兼容"
            ],
            answer: 1,
            rationale: "FAQ 列出五点：维护负担、不原生支持 CRI、临时方案、新特性不兼容。Docker 性能不是废弃原因——问题是维护成本和架构不匹配。"
        },
        {
            id: "w2-3-q4",
            question: "dockershim 移除后，现有 Docker 镜像会怎样？",
            options: [
                "需要重新构建为 OCI 格式",
                "只能在 Docker 环境中使用",
                "All Docker images will continue to work with CRI implementations——完全兼容",
                "需要转换格式才能使用"
            ],
            answer: 2,
            rationale: "FAQ 强调：'All Docker images will continue to work with CRI implementations'——因为都遵循 OCI 镜像规范，镜像完全兼容。"
        },
        {
            id: "w2-3-q5",
            question: "dockershim 在哪个 Kubernetes 版本被正式移除？",
            options: [
                "1.20（只是废弃警告）",
                "1.22",
                "1.24",
                "1.26"
            ],
            answer: 2,
            rationale: "FAQ 时间线：1.20 只是废弃警告，1.24 正式移除。1.26 开始要求 v1 CRI API。"
        },
        {
            id: "w2-3-q6",
            question: "FAQ 对 crictl 工具的描述是什么？",
            options: [
                "用于构建容器镜像",
                "drop-in replacement for docker CLI when managing containers",
                "用于管理 Kubernetes 集群",
                "用于监控容器性能"
            ],
            answer: 1,
            rationale: "FAQ 指出：'crictl is a drop-in replacement for docker CLI when managing containers'——用于系统维护和调试。"
        },
        {
            id: "w2-3-q7",
            question: "FAQ 推荐的首选 CRI 运行时是什么？原因是？",
            options: [
                "CRI-O，因为专为 K8s 设计",
                "Docker，因为功能最全",
                "containerd——'Relatively easy swap from Docker'，性能好，CNCF 支持",
                "runc，因为最底层"
            ],
            answer: 2,
            rationale: "FAQ 推荐 containerd：'Relatively easy swap from Docker'，Better performance and less overhead，Strong CNCF adoption and vendor support。"
        },
        {
            id: "w2-3-q8",
            question: "K8s 1.26+ 对 CRI 有什么版本要求？",
            options: [
                "只需支持任意 CRI 版本",
                "requires container runtime support for CRI v1 API，否则 kubelet 无法注册节点",
                "必须使用 Docker",
                "不再需要 CRI"
            ],
            answer: 1,
            rationale: "K8s 文档：'Kubernetes v1.26+ requires container runtime support for CRI v1 API'——如果不支持，kubelet 将无法注册。"
        },
        {
            id: "w2-3-q9",
            question: "CRI-O 官方对自身的定位是什么？",
            options: [
                "通用容器运行时",
                "Kubernetes CRI 的实现，Docker 在 Kubernetes 中的轻量级替代方案",
                "Docker 的增强版",
                "镜像构建工具"
            ],
            answer: 1,
            rationale: "CRI-O 官方描述为'Kubernetes CRI 的实现'和'Docker 在 Kubernetes 中的轻量级替代方案'，专为 K8s 优化。"
        },
        {
            id: "w2-3-q10",
            question: "containerd 和 CRI-O 共同使用的底层 OCI 运行时是什么？",
            options: [
                "containerd",
                "Docker Engine",
                "runc",
                "crictl"
            ],
            answer: 2,
            rationale: "FAQ 指出 containerd 和 CRI-O 都使用 runc（OCI runtime-spec 实现）作为底层容器运行时。"
        },
        {
            id: "w2-3-q11",
            question: "cri-dockerd 的作用是什么？",
            options: [
                "Docker 官方的新版本",
                "CRI-O 的别名",
                "Mirantis 和 Docker 维护的外部 dockershim，用于在 K8s 中继续使用 Docker",
                "containerd 的插件"
            ],
            answer: 2,
            rationale: "FAQ：'Mirantis and Docker have committed to maintaining a replacement for dockershim'——cri-dockerd 为需要保留 Docker 的场景提供过渡方案。"
        },
        {
            id: "w2-3-q12",
            question: "迁移到 CRI 运行时后，以下哪项可能需要检查或调整？",
            options: [
                "容器镜像格式需要重新构建",
                "Pod 的资源限制配置需要改写",
                "日志配置、直接调用 docker 的脚本、监控 agent、GPU 集成",
                "所有 YAML 文件需要改写"
            ],
            answer: 2,
            rationale: "FAQ 列出需检查项：日志配置、直接调用 docker 的脚本、kubectl 插件、监控 agent、GPU 集成等。镜像和 YAML 不需要改变。"
        }
    ],
    "w2-2": [
        {
            id: "w2-2-q1",
            question: "Docker 文档对多阶段构建核心价值的描述是什么？",
            options: [
                "加快镜像拉取速度",
                "Split your Dockerfile instructions into distinct stages——确保最终输出只包含运行应用所需的文件",
                "自动修复安全漏洞",
                "支持多用户同时构建"
            ],
            answer: 1,
            rationale: "Docker 文档明确指出多阶段构建的核心是：'Split your Dockerfile instructions into distinct stages to make sure that the resulting output only contains the files that are needed'。"
        },
        {
            id: "w2-2-q2",
            question: "在多阶段构建中，如何给一个阶段命名并从该阶段复制？",
            options: [
                "FROM golang:1.24 AS build，然后 COPY --from=build /app/main /app/",
                "FROM golang:1.24 NAME build",
                "STAGE build FROM golang:1.24",
                "FROM golang:1.24 --name=build"
            ],
            answer: 0,
            rationale: "使用 FROM baseimage AS stagename 命名阶段，COPY --from=stagename 从指定阶段复制产物。"
        },
        {
            id: "w2-2-q3",
            question: "COPY --from 指令除了可以从 Dockerfile 中的阶段复制，还可以从哪里复制？",
            options: [
                "只能从前面定义的阶段复制",
                "只能从阶段序号（如 0、1）复制",
                "可以从外部镜像复制，如 COPY --from=nginx:latest",
                "只能从本地文件系统复制"
            ],
            answer: 2,
            rationale: "文档强调：'use the COPY --from instruction to copy from a separate image'——可以直接从 registry 中的外部镜像复制文件。"
        },
        {
            id: "w2-2-q4",
            question: "BuildKit 相比传统 Docker Engine 在多阶段构建中的优化是什么？",
            options: [
                "传统 Engine 更快",
                "两者行为完全相同",
                "BuildKit 会构建所有阶段，传统 Engine 跳过不需要的",
                "BuildKit 'only builds the stages that the target stage depends on'——只构建依赖的阶段"
            ],
            answer: 3,
            rationale: "文档指出 BuildKit'only builds the stages that the target stage depends on'，而传统 Docker Engine 会构建所有前置阶段。"
        },
        {
            id: "w2-2-q5",
            question: "Docker 最佳实践推荐从哪些来源选择基础镜像？",
            options: [
                "任意 Docker Hub 镜像",
                "Docker Official Images、Verified Publishers 或 Docker-Sponsored Open Source",
                "只能使用 Alpine",
                "必须自己从 scratch 构建"
            ],
            answer: 1,
            rationale: "最佳实践推荐从 Docker Official Images、Verified Publishers 或 Docker-Sponsored Open Source 开始，确保来源可信。"
        },
        {
            id: "w2-2-q6",
            question: "为什么 RUN apt-get update && apt-get install 必须写在同一行？",
            options: [
                "减少 Dockerfile 行数",
                "分开写会导致 'cached layers become stale, potentially installing outdated packages'",
                "加快构建速度",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "文档警告：分开写会导致'cached layers become stale, potentially installing outdated packages'——update 层被缓存后，后续 install 可能使用过时的包索引。"
        },
        {
            id: "w2-2-q7",
            question: "Docker 文档关于镜像版本固定的建议是什么？",
            options: [
                "使用 latest 标签最方便",
                "不需要固定版本",
                "'By pinning your images to a digest, you're guaranteed to always use the same image version'",
                "只固定主版本号即可"
            ],
            answer: 2,
            rationale: "文档强调：'By pinning your images to a digest, you're guaranteed to always use the same image version'——使用摘要确保构建可复现。"
        },
        {
            id: "w2-2-q8",
            question: "以下哪个是最小的 Docker 基础镜像？",
            options: [
                "alpine（约 5MB）",
                "debian-slim（约 80MB）",
                "scratch（0 字节，空镜像）",
                "ubuntu:minimal"
            ],
            answer: 2,
            rationale: "scratch 是空镜像（0 字节），没有任何文件系统内容。只有完全静态编译的二进制才能在 scratch 上运行。"
        },
        {
            id: "w2-2-q9",
            question: "docker build --target build 的作用是什么？",
            options: [
                "只构建到指定阶段，不构建后续阶段",
                "指定构建的目标平台",
                "指定构建的目标目录",
                "设置构建的目标标签"
            ],
            answer: 0,
            rationale: "--target 允许只构建到指定阶段，常用于调试构建过程或只需要中间产物的场景。配合 BuildKit 会自动跳过无关阶段。"
        },
        {
            id: "w2-2-q10",
            question: "CI/CD 中 Docker 文档提到的缓存策略不包括以下哪项？",
            options: [
                "本地缓存",
                "Registry 缓存",
                "内存缓存",
                "GitHub Actions 缓存"
            ],
            answer: 2,
            rationale: "文档提到三种 CI 缓存策略：本地缓存、registry 缓存、GitHub Actions 缓存集成。内存缓存不是 Docker 构建缓存的类型。"
        },
        {
            id: "w2-2-q11",
            question: "Alpine Linux 作为基础镜像的潜在问题是什么？",
            options: [
                "使用 musl libc 而非 glibc，某些程序可能有兼容性问题",
                "镜像太大",
                "不支持多阶段构建",
                "没有包管理器"
            ],
            answer: 0,
            rationale: "Alpine 使用 musl libc 代替 glibc，某些依赖 glibc 特性的程序可能无法正常运行或需要静态编译。"
        },
        {
            id: "w2-2-q12",
            question: "rm -rf /var/lib/apt/lists/* 清理缓存为什么必须与 apt-get install 在同一 RUN 中？",
            options: [
                "Docker 要求必须这样写",
                "分开写只是在新层标记删除，下层数据仍在镜像中，不减小体积",
                "分开写会导致构建失败",
                "清理操作需要安装时的环境变量"
            ],
            answer: 1,
            rationale: "分开写只是在新层标记删除，下层的缓存数据仍然存在于镜像中——这是'删除不减小体积'的常见误区。"
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
