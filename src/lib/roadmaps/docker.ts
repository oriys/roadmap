import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const dockerStages: Stage[] = [
  {
    id: "docker-s1",
    title: "阶段一：基础入门与镜像构建",
    duration: "第 1-3 周",
    goal: "理解容器化核心概念，掌握 Dockerfile 编写与镜像分层机制，构建高效镜像。",
    weeks: [
      {
        id: "docker-w1",
        title: "第 1 周：容器化基础",
        summary: "理解容器与虚拟机的区别，掌握 Docker 架构与核心组件。",
        overview: "容器化是现代应用交付的基石。本周从底层原理出发，理解 Docker 的架构设计、namespace/cgroup 隔离机制，以及容器的生命周期管理。",
        keyPoints: [
          "容器基于 Linux namespace 和 cgroup 实现隔离与资源限制",
          "Docker 采用 C/S 架构：CLI → Docker Daemon → containerd → runc",
          "容器是进程级隔离，比虚拟机更轻量但共享宿主机内核",
        ],
        lessons: [
          {
            id: "docker-w1-1",
            title: "容器 vs 虚拟机",
            detail: "对比容器与虚拟机的隔离机制、资源开销与启动速度，理解容器化的核心优势。",
            keyPoints: [
              "虚拟机通过 Hypervisor 虚拟化硬件，容器共享宿主机内核。",
              "容器启动秒级，虚拟机启动分钟级，资源利用率差距显著。",
              "容器适合微服务和 CI/CD，虚拟机适合强隔离和异构 OS 场景。",
            ],
            resources: [
              { title: "Docker 概览", url: "https://docs.docker.com/get-started/overview/" },
              { title: "容器 vs 虚拟机", url: "https://www.docker.com/resources/what-container/" },
              { title: "OCI 运行时规范", url: "https://github.com/opencontainers/runtime-spec" },
            ],
          },
          {
            id: "docker-w1-2",
            title: "Docker 架构与组件",
            detail: "深入理解 Docker Engine、containerd、runc 的分层架构与各组件职责。",
            keyPoints: [
              "Docker CLI 通过 REST API 与 Docker Daemon 通信。",
              "containerd 管理容器生命周期，runc 负责创建和运行容器。",
              "理解 OCI 标准：镜像规范和运行时规范的开放标准。",
            ],
            resources: [
              { title: "Docker 架构", url: "https://docs.docker.com/get-started/docker-overview/#docker-architecture" },
              { title: "containerd", url: "https://containerd.io/docs/" },
              { title: "runc", url: "https://github.com/opencontainers/runc" },
            ],
          },
          {
            id: "docker-w1-3",
            title: "容器生命周期管理",
            detail: "掌握容器的创建、启动、停止、删除等基本操作与状态转换流程。",
            keyPoints: [
              "容器状态：created → running → paused → stopped → removed。",
              "docker run 等同于 docker create + docker start。",
              "使用 docker exec 进入运行中容器调试，docker logs 查看日志。",
            ],
            resources: [
              { title: "Docker CLI 参考", url: "https://docs.docker.com/reference/cli/docker/" },
              { title: "容器生命周期", url: "https://docs.docker.com/get-started/run-docker-hub-images/" },
            ],
          },
        ],
      },
      {
        id: "docker-w2",
        title: "第 2 周：Dockerfile 与镜像构建",
        summary: "掌握 Dockerfile 指令、镜像分层与构建缓存机制。",
        overview: "Dockerfile 是容器化的核心工件。本周学习编写高效的 Dockerfile，理解分层存储原理与构建缓存优化策略。",
        keyPoints: [
          "每条 Dockerfile 指令创建一个新的镜像层，层可被缓存复用",
          "指令顺序影响缓存命中率，不常变化的指令应放在前面",
          "使用 .dockerignore 排除无关文件，减小构建上下文",
        ],
        lessons: [
          {
            id: "docker-w2-1",
            title: "Dockerfile 核心指令",
            detail: "掌握 FROM、RUN、COPY、ADD、CMD、ENTRYPOINT、ENV、ARG 等指令的语义与最佳实践。",
            keyPoints: [
              "CMD 提供默认命令可被覆盖，ENTRYPOINT 定义固定入口点。",
              "COPY 优于 ADD（除非需要自动解压），语义更明确。",
              "合并 RUN 指令减少层数，使用 && 链接并清理缓存。",
            ],
            resources: [
              { title: "Dockerfile 参考", url: "https://docs.docker.com/reference/dockerfile/" },
              { title: "Dockerfile 最佳实践", url: "https://docs.docker.com/build/building/best-practices/" },
            ],
          },
          {
            id: "docker-w2-2",
            title: "镜像分层与缓存",
            detail: "理解联合文件系统、镜像层复用机制与构建缓存失效规则。",
            keyPoints: [
              "镜像由只读层叠加组成，容器运行时添加可写层。",
              "任何层变化会导致该层及后续层缓存失效。",
              "使用 docker history 查看镜像层，docker system df 查看空间占用。",
            ],
            resources: [
              { title: "镜像与层", url: "https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/" },
              { title: "构建缓存", url: "https://docs.docker.com/build/cache/" },
            ],
          },
          {
            id: "docker-w2-3",
            title: "多阶段构建",
            detail: "使用多阶段构建分离编译环境与运行环境，大幅减小最终镜像体积。",
            keyPoints: [
              "多阶段构建使用多个 FROM，只保留最终阶段的产物。",
              "编译阶段可包含 SDK/编译器，运行阶段只需最小运行时。",
              "典型场景：Go 应用从 golang 镜像编译，部署到 scratch/alpine。",
            ],
            resources: [
              { title: "多阶段构建", url: "https://docs.docker.com/build/building/multi-stage/" },
              { title: "最小化镜像", url: "https://docs.docker.com/build/building/best-practices/#minimize-the-number-of-layers" },
            ],
          },
        ],
      },
      {
        id: "docker-w3",
        title: "第 3 周：镜像管理与仓库",
        summary: "掌握镜像标签策略、推送拉取流程与私有仓库搭建。",
        overview: "镜像是容器化交付的核心载体。本周学习镜像的标签管理、分发策略与私有仓库运维。",
        keyPoints: [
          "使用语义化标签（semver）而非仅用 latest，确保可追溯",
          "私有仓库（Harbor/Registry）是企业镜像管理的基础设施",
          "镜像扫描应集成到 CI 流程，在推送前检查漏洞",
        ],
        lessons: [
          {
            id: "docker-w3-1",
            title: "镜像标签与版本策略",
            detail: "设计合理的镜像标签策略，包括语义化版本、Git SHA 标签与不可变标签实践。",
            keyPoints: [
              "避免生产环境使用 latest 标签，它是可变的且不可追溯。",
              "推荐双标签策略：semver 标签 + Git SHA 标签。",
              "使用 docker tag 创建别名，docker manifest 处理多架构镜像。",
            ],
            resources: [
              { title: "镜像标签最佳实践", url: "https://docs.docker.com/get-started/docker-concepts/building-images/build-tag-and-publish-an-image/" },
              { title: "Docker Hub", url: "https://hub.docker.com/" },
            ],
          },
          {
            id: "docker-w3-2",
            title: "私有镜像仓库",
            detail: "搭建和运维 Docker Registry 或 Harbor，配置认证、存储后端与镜像复制。",
            keyPoints: [
              "Docker Registry 是轻量方案，Harbor 提供 RBAC、漏洞扫描等企业特性。",
              "支持 S3/GCS/Azure Blob 等云存储后端。",
              "配置镜像复制实现多数据中心同步与灾备。",
            ],
            resources: [
              { title: "Docker Registry", url: "https://docs.docker.com/registry/" },
              { title: "Harbor", url: "https://goharbor.io/docs/" },
            ],
          },
          {
            id: "docker-w3-3",
            title: "镜像安全扫描",
            detail: "使用 Trivy、Grype 等工具扫描镜像漏洞，建立镜像安全基线。",
            keyPoints: [
              "镜像扫描检查 OS 包和应用依赖中的已知 CVE。",
              "选择最小基础镜像（alpine/distroless）减少攻击面。",
              "将扫描集成到 CI 流程，阻止高危漏洞镜像推送。",
            ],
            resources: [
              { title: "Trivy", url: "https://aquasecurity.github.io/trivy/" },
              { title: "Docker Scout", url: "https://docs.docker.com/scout/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "docker-s2",
    title: "阶段二：网络与存储",
    duration: "第 4-6 周",
    goal: "掌握 Docker 网络模型与存储驱动，使用 Docker Compose 编排多容器应用。",
    weeks: [
      {
        id: "docker-w4",
        title: "第 4 周：Docker 网络",
        summary: "理解 Docker 网络模型，掌握 bridge/host/overlay 网络的使用场景。",
        overview: "容器网络是微服务通信的基础。本周深入理解 Docker 的网络驱动、DNS 解析机制与跨主机通信方案。",
        keyPoints: [
          "bridge 是默认网络模式，通过 veth pair 连接容器与宿主机",
          "自定义 bridge 网络提供容器间 DNS 解析",
          "overlay 网络基于 VXLAN 实现跨主机容器通信",
        ],
        lessons: [
          {
            id: "docker-w4-1",
            title: "网络驱动与模式",
            detail: "对比 bridge、host、none、overlay、macvlan 网络驱动的隔离级别与适用场景。",
            keyPoints: [
              "bridge：默认隔离模式，适合单机多容器。",
              "host：容器直接使用宿主机网络栈，无隔离但性能最高。",
              "overlay：跨主机容器通信，用于 Swarm/K8s 集群。",
            ],
            resources: [
              { title: "Docker 网络概览", url: "https://docs.docker.com/engine/network/" },
              { title: "网络驱动", url: "https://docs.docker.com/engine/network/drivers/" },
            ],
          },
          {
            id: "docker-w4-2",
            title: "容器 DNS 与服务发现",
            detail: "理解 Docker 内置 DNS 服务器的工作原理，掌握容器间通过名称通信的机制。",
            keyPoints: [
              "自定义网络中容器可通过容器名或别名互相解析。",
              "Docker 内置 DNS 服务器监听 127.0.0.11:53。",
              "默认 bridge 网络不提供 DNS 解析，需使用 --link（已废弃）或自定义网络。",
            ],
            resources: [
              { title: "Docker DNS", url: "https://docs.docker.com/engine/network/#dns-services" },
              { title: "Bridge 网络教程", url: "https://docs.docker.com/engine/network/tutorials/standalone/" },
            ],
          },
          {
            id: "docker-w4-3",
            title: "端口映射与防火墙",
            detail: "掌握容器端口发布机制，理解 Docker 与 iptables 的交互以及安全配置。",
            keyPoints: [
              "-p 8080:80 将宿主机 8080 映射到容器 80 端口。",
              "Docker 通过 iptables nat 表实现端口转发，可能绕过 ufw。",
              "生产环境应限制端口绑定到特定 IP，避免意外暴露。",
            ],
            resources: [
              { title: "端口发布", url: "https://docs.docker.com/engine/network/#published-ports" },
              { title: "Docker 与 iptables", url: "https://docs.docker.com/engine/network/packet-filtering-firewalls/" },
            ],
          },
        ],
      },
      {
        id: "docker-w5",
        title: "第 5 周：存储与数据管理",
        summary: "掌握 Docker 存储类型与数据持久化策略。",
        overview: "容器是临时的，但数据需要持久化。本周学习 volumes、bind mounts 和 tmpfs 的区别与选型，以及存储驱动的原理。",
        keyPoints: [
          "volumes 是 Docker 管理的持久化存储，推荐用于生产数据",
          "bind mounts 直接挂载宿主机路径，适合开发环境",
          "tmpfs 存储在内存中，适合敏感临时数据",
        ],
        lessons: [
          {
            id: "docker-w5-1",
            title: "Volumes 与数据持久化",
            detail: "使用 Docker Volumes 实现数据持久化，掌握 volume 的创建、挂载、备份与清理操作。",
            keyPoints: [
              "volume 独立于容器生命周期，容器删除后数据不丢失。",
              "使用 docker volume create 创建命名 volume，匿名 volume 难以管理。",
              "volume 支持驱动插件，可对接 NFS、云存储等后端。",
            ],
            resources: [
              { title: "Docker Volumes", url: "https://docs.docker.com/engine/storage/volumes/" },
              { title: "存储概览", url: "https://docs.docker.com/engine/storage/" },
            ],
          },
          {
            id: "docker-w5-2",
            title: "Bind Mounts 与 tmpfs",
            detail: "对比 bind mount 和 tmpfs 的使用场景，理解文件权限和性能差异。",
            keyPoints: [
              "bind mount 挂载宿主机目录，适合开发时代码热重载。",
              "tmpfs 存储在宿主机内存中，容器停止后数据消失。",
              "bind mount 需注意文件权限问题（UID/GID 映射）。",
            ],
            resources: [
              { title: "Bind Mounts", url: "https://docs.docker.com/engine/storage/bind-mounts/" },
              { title: "tmpfs", url: "https://docs.docker.com/engine/storage/tmpfs/" },
            ],
          },
          {
            id: "docker-w5-3",
            title: "存储驱动与性能",
            detail: "理解 overlay2 等存储驱动的工作原理，优化容器 I/O 性能。",
            keyPoints: [
              "overlay2 是推荐的存储驱动，基于 OverlayFS 实现分层存储。",
              "写时复制（CoW）机制影响首次写入性能。",
              "数据库等 I/O 密集应用应使用 volume 而非容器可写层。",
            ],
            resources: [
              { title: "存储驱动", url: "https://docs.docker.com/engine/storage/drivers/" },
              { title: "overlay2", url: "https://docs.docker.com/engine/storage/drivers/overlayfs-driver/" },
            ],
          },
        ],
      },
      {
        id: "docker-w6",
        title: "第 6 周：Docker Compose",
        summary: "使用 Docker Compose 定义和运行多容器应用。",
        overview: "Docker Compose 是本地开发和测试环境的标准工具。本周学习 compose.yaml 的编写、服务编排与环境管理。",
        keyPoints: [
          "Docker Compose 用声明式 YAML 定义多容器应用栈",
          "服务间通过 Compose 网络自动 DNS 解析",
          "使用 profiles 和 env_file 管理多环境配置",
        ],
        lessons: [
          {
            id: "docker-w6-1",
            title: "Compose 文件与服务定义",
            detail: "掌握 compose.yaml 的核心语法，定义服务、网络、卷与依赖关系。",
            keyPoints: [
              "services 定义容器，networks 定义网络，volumes 定义持久化存储。",
              "depends_on 控制启动顺序，但不等待服务就绪（需配合 healthcheck）。",
              "使用 extends 和 YAML anchors 复用配置，减少重复。",
            ],
            resources: [
              { title: "Compose 文件参考", url: "https://docs.docker.com/reference/compose-file/" },
              { title: "Compose 快速入门", url: "https://docs.docker.com/compose/gettingstarted/" },
            ],
          },
          {
            id: "docker-w6-2",
            title: "环境变量与配置管理",
            detail: "使用 .env 文件、environment 和 env_file 管理多环境配置与密钥注入。",
            keyPoints: [
              ".env 文件在 Compose 解析时自动加载，用于变量替换。",
              "敏感信息使用 Docker Secrets 而非环境变量传递。",
              "使用 profiles 按需启动不同的服务组合（如 dev/test/prod）。",
            ],
            resources: [
              { title: "环境变量", url: "https://docs.docker.com/compose/how-tos/environment-variables/" },
              { title: "Compose Profiles", url: "https://docs.docker.com/compose/how-tos/profiles/" },
            ],
          },
          {
            id: "docker-w6-3",
            title: "Compose 实战项目",
            detail: "用 Docker Compose 编排一个完整的 Web 应用栈（前端 + API + 数据库 + 缓存）。",
            keyPoints: [
              "前端 Nginx + 后端 API + PostgreSQL + Redis 的典型栈。",
              "使用 healthcheck 确保依赖服务就绪后再启动应用。",
              "开发环境使用 bind mount 实现代码热重载。",
            ],
            resources: [
              { title: "Compose 示例", url: "https://github.com/docker/awesome-compose" },
              { title: "Compose Watch", url: "https://docs.docker.com/compose/how-tos/file-watch/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "docker-s3",
    title: "阶段三：安全与编排",
    duration: "第 7-9 周",
    goal: "建立容器安全基线，掌握容器编排与资源管理的核心能力。",
    weeks: [
      {
        id: "docker-w7",
        title: "第 7 周：容器安全",
        summary: "建立容器安全最佳实践，从镜像构建到运行时全链路防护。",
        overview: "容器安全是生产环境的前提。本周覆盖镜像安全、运行时安全与密钥管理三大维度。",
        keyPoints: [
          "使用非 root 用户运行容器，最小化权限",
          "只读文件系统 + 最小 capabilities 是运行时安全基线",
          "密钥管理使用 Docker Secrets 或外部 Vault",
        ],
        lessons: [
          {
            id: "docker-w7-1",
            title: "镜像安全加固",
            detail: "选择最小基础镜像，移除不必要的工具包，建立镜像安全基线。",
            keyPoints: [
              "distroless 镜像不含 shell 和包管理器，攻击面最小。",
              "alpine 镜像约 5MB，适合需要包管理器的场景。",
              "在 Dockerfile 中固定基础镜像的摘要（digest）防止供应链攻击。",
            ],
            resources: [
              { title: "Docker 安全", url: "https://docs.docker.com/engine/security/" },
              { title: "Distroless", url: "https://github.com/GoogleContainerTools/distroless" },
            ],
          },
          {
            id: "docker-w7-2",
            title: "运行时安全",
            detail: "配置用户命名空间、capabilities、seccomp 和 AppArmor 限制容器运行时权限。",
            keyPoints: [
              "使用 --cap-drop ALL --cap-add 只添加必要的 capabilities。",
              "seccomp profile 限制容器可用的系统调用。",
              "只读根文件系统（--read-only）防止运行时篡改。",
            ],
            resources: [
              { title: "运行时安全", url: "https://docs.docker.com/engine/security/seccomp/" },
              { title: "Rootless Docker", url: "https://docs.docker.com/engine/security/rootless/" },
            ],
          },
          {
            id: "docker-w7-3",
            title: "密钥与敏感信息管理",
            detail: "使用 Docker Secrets 和外部密钥管理服务安全地传递敏感配置。",
            keyPoints: [
              "Docker Secrets 将密钥挂载为文件而非环境变量，更安全。",
              "Swarm 模式下 Secrets 加密存储在 Raft 日志中。",
              "生产环境推荐集成 HashiCorp Vault 或云 KMS。",
            ],
            resources: [
              { title: "Docker Secrets", url: "https://docs.docker.com/engine/swarm/secrets/" },
              { title: "BuildKit Secrets", url: "https://docs.docker.com/build/building/secrets/" },
            ],
          },
        ],
      },
      {
        id: "docker-w8",
        title: "第 8 周：资源管理与健康检查",
        summary: "掌握容器资源限制、健康检查与重启策略。",
        overview: "资源管理是容器稳定运行的保障。本周学习 CPU/内存限制、健康检查机制与自动重启策略。",
        keyPoints: [
          "使用 --memory 和 --cpus 限制容器资源，防止单容器耗尽宿主机资源",
          "HEALTHCHECK 指令定期探测容器健康状态",
          "重启策略（unless-stopped/on-failure）实现基本的自愈能力",
        ],
        lessons: [
          {
            id: "docker-w8-1",
            title: "CPU 与内存限制",
            detail: "配置容器的 CPU、内存硬限制与软限制，理解 OOM Killer 行为。",
            keyPoints: [
              "--memory 设置硬限制，超出后触发 OOM Killer 终止进程。",
              "--cpus 限制 CPU 核数，--cpu-shares 设置相对权重。",
              "Java 应用需注意容器感知 JVM 参数（-XX:+UseContainerSupport）。",
            ],
            resources: [
              { title: "资源约束", url: "https://docs.docker.com/engine/containers/resource_constraints/" },
              { title: "运行时指标", url: "https://docs.docker.com/reference/cli/docker/container/stats/" },
            ],
          },
          {
            id: "docker-w8-2",
            title: "健康检查机制",
            detail: "在 Dockerfile 和 Compose 中配置 HEALTHCHECK，监控容器内应用的可用性。",
            keyPoints: [
              "HEALTHCHECK 支持 CMD 和 HTTP 探测，定义间隔、超时与重试次数。",
              "健康状态：starting → healthy → unhealthy。",
              "Compose 的 depends_on 可配合 condition: service_healthy 等待就绪。",
            ],
            resources: [
              { title: "HEALTHCHECK", url: "https://docs.docker.com/reference/dockerfile/#healthcheck" },
              { title: "Compose 健康检查", url: "https://docs.docker.com/reference/compose-file/services/#healthcheck" },
            ],
          },
          {
            id: "docker-w8-3",
            title: "重启策略与日志管理",
            detail: "配置容器重启策略实现自愈，管理容器日志驱动与轮转策略。",
            keyPoints: [
              "重启策略：no、on-failure、always、unless-stopped。",
              "日志驱动支持 json-file（默认）、syslog、fluentd 等。",
              "配置日志轮转（max-size/max-file）防止磁盘耗尽。",
            ],
            resources: [
              { title: "重启策略", url: "https://docs.docker.com/engine/containers/start-containers-automatically/" },
              { title: "日志驱动", url: "https://docs.docker.com/engine/logging/configure/" },
            ],
          },
        ],
      },
      {
        id: "docker-w9",
        title: "第 9 周：Docker Swarm 入门",
        summary: "理解 Docker Swarm 的集群管理、服务编排与滚动更新机制。",
        overview: "Docker Swarm 是 Docker 原生的容器编排工具。本周学习集群初始化、服务部署与滚动更新，为理解 K8s 打基础。",
        keyPoints: [
          "Swarm 使用 Raft 共识协议管理集群状态",
          "Service 是 Swarm 的核心调度单位，支持副本和全局两种模式",
          "滚动更新可配置并行度、延迟和回滚策略",
        ],
        lessons: [
          {
            id: "docker-w9-1",
            title: "Swarm 集群管理",
            detail: "初始化 Swarm 集群，管理 Manager 和 Worker 节点的加入与角色切换。",
            keyPoints: [
              "docker swarm init 初始化集群，生成 join token。",
              "Manager 节点负责调度和状态管理，建议 3 或 5 个。",
              "使用 docker node ls 查看节点状态，docker node promote/demote 切换角色。",
            ],
            resources: [
              { title: "Swarm 模式", url: "https://docs.docker.com/engine/swarm/" },
              { title: "管理节点", url: "https://docs.docker.com/engine/swarm/manage-nodes/" },
            ],
          },
          {
            id: "docker-w9-2",
            title: "服务部署与扩缩容",
            detail: "使用 docker service 命令部署服务，配置副本数、约束条件与放置策略。",
            keyPoints: [
              "docker service create 部署服务，--replicas 指定副本数。",
              "placement constraints 控制服务运行在特定节点。",
              "docker service scale 动态调整副本数，Swarm 自动分配。",
            ],
            resources: [
              { title: "部署服务", url: "https://docs.docker.com/engine/swarm/services/" },
              { title: "Swarm Stack", url: "https://docs.docker.com/engine/swarm/stack-deploy/" },
            ],
          },
          {
            id: "docker-w9-3",
            title: "滚动更新与回滚",
            detail: "配置服务的滚动更新参数，实现零停机部署与自动回滚。",
            keyPoints: [
              "--update-parallelism 控制并行更新的副本数。",
              "--update-delay 设置每批更新之间的等待时间。",
              "--rollback-on-failure 在健康检查失败时自动回滚到上一版本。",
            ],
            resources: [
              { title: "滚动更新", url: "https://docs.docker.com/engine/swarm/swarm-tutorial/rolling-update/" },
              { title: "服务回滚", url: "https://docs.docker.com/engine/swarm/services/#roll-back-to-a-previous-version-of-a-service" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "docker-s4",
    title: "阶段四：生产实践",
    duration: "第 10-12 周",
    goal: "掌握容器化生产环境的监控、性能调优、CI/CD 集成与常见模式。",
    weeks: [
      {
        id: "docker-w10",
        title: "第 10 周：监控与日志",
        summary: "构建容器化应用的监控与日志收集方案。",
        overview: "生产环境的可观测性决定排障效率。本周搭建 Prometheus + Grafana 监控容器指标，并集成集中式日志收集。",
        keyPoints: [
          "Docker daemon 暴露 metrics endpoint 供 Prometheus 采集",
          "cAdvisor 采集容器级 CPU/内存/网络/磁盘指标",
          "EFK/ELK 或 Loki 实现集中式日志收集与检索",
        ],
        lessons: [
          {
            id: "docker-w10-1",
            title: "容器指标监控",
            detail: "使用 Prometheus + cAdvisor + Grafana 搭建容器监控体系。",
            keyPoints: [
              "cAdvisor 自动发现容器并暴露资源使用指标。",
              "Prometheus 拉取指标并存储时序数据。",
              "Grafana 提供可视化仪表盘与告警配置。",
            ],
            resources: [
              { title: "Docker 指标", url: "https://docs.docker.com/engine/daemon/prometheus/" },
              { title: "cAdvisor", url: "https://github.com/google/cadvisor" },
            ],
          },
          {
            id: "docker-w10-2",
            title: "集中式日志收集",
            detail: "配置 Fluentd/Fluent Bit 或 Loki 收集容器日志，实现统一检索与告警。",
            keyPoints: [
              "日志驱动将容器输出转发到集中式存储。",
              "Fluent Bit 轻量高效，适合容器日志采集。",
              "结构化日志（JSON）便于检索、过滤与分析。",
            ],
            resources: [
              { title: "Fluentd 日志驱动", url: "https://docs.docker.com/engine/logging/drivers/fluentd/" },
              { title: "Grafana Loki", url: "https://grafana.com/docs/loki/latest/" },
            ],
          },
          {
            id: "docker-w10-3",
            title: "告警与运维看板",
            detail: "基于容器指标和日志设计告警规则，搭建运维仪表盘覆盖关键健康指标。",
            keyPoints: [
              "告警关注容器重启次数、OOM、CPU throttling 等异常。",
              "分层告警：P0 立即响应、P1 当天处理、P2 迭代解决。",
              "Grafana 仪表盘覆盖：服务健康、资源利用率、错误率。",
            ],
            resources: [
              { title: "Grafana Alerting", url: "https://grafana.com/docs/grafana/latest/alerting/" },
              { title: "Prometheus Alerting", url: "https://prometheus.io/docs/alerting/latest/overview/" },
            ],
          },
        ],
      },
      {
        id: "docker-w11",
        title: "第 11 周：性能调优与排障",
        summary: "诊断和优化容器化应用的性能瓶颈。",
        overview: "容器化引入额外的抽象层。本周学习容器环境下的性能分析工具与常见瓶颈排查方法。",
        keyPoints: [
          "docker stats 提供实时资源使用概览",
          "nsenter 进入容器命名空间使用宿主机工具排障",
          "构建时间和镜像大小是 CI 效率的关键指标",
        ],
        lessons: [
          {
            id: "docker-w11-1",
            title: "容器性能分析",
            detail: "使用 docker stats、docker top 和宿主机工具分析容器的资源使用与性能瓶颈。",
            keyPoints: [
              "docker stats 显示 CPU、内存、网络、磁盘 I/O 实时数据。",
              "cgroup 文件（/sys/fs/cgroup/）提供精确的资源计量。",
              "CPU throttling 是容器性能问题的常见原因，检查 nr_throttled。",
            ],
            resources: [
              { title: "docker stats", url: "https://docs.docker.com/reference/cli/docker/container/stats/" },
              { title: "容器性能调优", url: "https://docs.docker.com/engine/containers/resource_constraints/" },
            ],
          },
          {
            id: "docker-w11-2",
            title: "构建性能优化",
            detail: "优化 Dockerfile 构建速度，利用 BuildKit 并行构建、缓存挂载与远程缓存。",
            keyPoints: [
              "BuildKit 支持并行构建独立的 Dockerfile 阶段。",
              "--mount=type=cache 缓存包管理器目录（如 /root/.cache/pip）。",
              "远程缓存（registry cache）加速 CI 环境的首次构建。",
            ],
            resources: [
              { title: "BuildKit", url: "https://docs.docker.com/build/buildkit/" },
              { title: "构建缓存", url: "https://docs.docker.com/build/cache/" },
            ],
          },
          {
            id: "docker-w11-3",
            title: "常见故障排查",
            detail: "排查容器启动失败、网络不通、存储异常等常见故障，建立排障流程。",
            keyPoints: [
              "容器启动失败：检查 docker logs、exit code 和 entrypoint。",
              "网络不通：检查 DNS 解析、防火墙规则和网络命名空间。",
              "存储异常：检查 volume 挂载路径、权限和磁盘空间。",
            ],
            resources: [
              { title: "Docker 故障排查", url: "https://docs.docker.com/engine/daemon/troubleshoot/" },
              { title: "容器日志", url: "https://docs.docker.com/reference/cli/docker/container/logs/" },
            ],
          },
        ],
      },
      {
        id: "docker-w12",
        title: "第 12 周：CI/CD 集成与容器模式",
        summary: "将 Docker 集成到 CI/CD 流水线，掌握常见容器设计模式。",
        overview: "容器化的终极价值在于标准化交付流程。本周学习 Docker 与 CI/CD 的集成方式以及生产中常见的容器设计模式。",
        keyPoints: [
          "CI 中使用 Docker 构建/测试/推送实现环境一致性",
          "Sidecar 模式为主容器附加辅助功能（日志、代理）",
          "Init Container 模式处理启动前的初始化逻辑",
        ],
        lessons: [
          {
            id: "docker-w12-1",
            title: "Docker 与 CI/CD",
            detail: "在 GitHub Actions、GitLab CI 等平台中使用 Docker 构建、测试和推送镜像。",
            keyPoints: [
              "CI 中使用 Docker 构建确保构建环境一致性。",
              "利用 layer cache 和 registry cache 加速 CI 构建。",
              "推送前执行镜像扫描和集成测试，保证质量关卡。",
            ],
            resources: [
              { title: "GitHub Actions Docker", url: "https://docs.docker.com/build/ci/github-actions/" },
              { title: "GitLab CI Docker", url: "https://docs.gitlab.com/ci/docker/using_docker_build/" },
            ],
          },
          {
            id: "docker-w12-2",
            title: "容器设计模式",
            detail: "掌握 Sidecar、Ambassador、Adapter、Init Container 等容器编排设计模式。",
            keyPoints: [
              "Sidecar：在同一 Pod/Task 中运行辅助容器（日志采集、代理）。",
              "Ambassador：代理容器简化主容器的外部服务访问。",
              "Init Container：在主容器启动前完成初始化（等待依赖、迁移数据库）。",
            ],
            resources: [
              { title: "容器模式", url: "https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/" },
              { title: "多容器设计", url: "https://learn.microsoft.com/azure/architecture/patterns/sidecar" },
            ],
          },
          {
            id: "docker-w12-3",
            title: "生产环境迁移",
            detail: "制定容器化迁移策略，处理有状态服务、遗留应用与混合部署场景。",
            keyPoints: [
              "先迁移无状态服务，再处理有状态服务（数据库、消息队列）。",
              "遗留应用可使用 VM + 容器混合部署渐进迁移。",
              "制定回滚方案，确保迁移失败时可快速恢复。",
            ],
            resources: [
              { title: "Docker 迁移指南", url: "https://docs.docker.com/get-started/introduction/develop-with-containers/" },
              { title: "容器化策略", url: "https://cloud.google.com/architecture/modernize-apps-with-containers" },
            ],
          },
        ],
      },
    ],
  },
]

export const dockerKnowledgeCards: KnowledgeCard[] = [
  {
    id: "docker-card-layers",
    title: "镜像分层原理",
    summary: "理解分层存储是优化镜像构建的基础。",
    points: [
      "每条 Dockerfile 指令创建一个只读层，层可被多个镜像共享。",
      "构建缓存基于指令文本和文件校验和判断是否命中。",
      "合并 RUN 指令、排序依赖安装可提升缓存命中率。",
    ],
    practice: "构建一个 Node.js 应用镜像，分别用优化前后的 Dockerfile 对比层数和大小。",
  },
  {
    id: "docker-card-network",
    title: "容器网络模型",
    summary: "Docker 网络是容器间通信的基础设施。",
    points: [
      "bridge 网络通过 veth pair 和 iptables 实现容器隔离与通信。",
      "自定义 bridge 提供 DNS 解析，默认 bridge 不提供。",
      "overlay 网络基于 VXLAN 封装实现跨主机容器通信。",
    ],
    practice: "创建自定义 bridge 网络，部署两个容器验证 DNS 解析和端口映射。",
  },
  {
    id: "docker-card-security",
    title: "容器安全基线",
    summary: "从镜像到运行时的全链路安全防护。",
    points: [
      "使用非 root 用户 + 最小基础镜像 + 只读文件系统。",
      "drop ALL capabilities 后只添加必要的权限。",
      "密钥通过 Secrets 挂载为文件，不使用环境变量传递。",
    ],
    practice: "加固一个现有 Dockerfile：添加 USER、HEALTHCHECK、去除不必要的工具。",
  },
  {
    id: "docker-card-compose",
    title: "Compose 编排",
    summary: "Docker Compose 是本地开发和测试的标准编排工具。",
    points: [
      "声明式 YAML 定义服务栈，一条命令启停整个应用。",
      "healthcheck + depends_on.condition 确保服务按就绪顺序启动。",
      "profiles 实现按需启动不同服务组合（dev/test/prod）。",
    ],
    practice: "用 Compose 编排一个 Web + API + DB + Cache 的完整应用栈。",
  },
  {
    id: "docker-card-multistage",
    title: "多阶段构建",
    summary: "分离编译环境与运行环境是减小镜像的关键技术。",
    points: [
      "编译阶段包含 SDK 和工具链，运行阶段只保留产物和运行时。",
      "Go 应用可编译为静态二进制后部署到 scratch 镜像。",
      "COPY --from=builder 从前一阶段复制特定文件到最终镜像。",
    ],
    practice: "将一个 Go/Java 应用改为多阶段构建，对比前后镜像大小。",
  },
  {
    id: "docker-card-volumes",
    title: "数据持久化",
    summary: "正确选择存储类型是数据安全的保障。",
    points: [
      "生产数据使用 named volumes，开发代码使用 bind mounts。",
      "数据库容器必须使用 volume，容器可写层不适合持久化。",
      "定期备份 volume 数据，制定恢复演练计划。",
    ],
    practice: "为 PostgreSQL 容器配置 named volume，测试容器删除后数据恢复。",
  },
  {
    id: "docker-card-troubleshoot",
    title: "故障排查流程",
    summary: "系统化的排查流程是快速定位问题的关键。",
    points: [
      "第一步：docker logs 和 docker inspect 获取容器状态和配置。",
      "第二步：docker exec 或 nsenter 进入容器检查进程和网络。",
      "第三步：检查宿主机资源（磁盘/内存/CPU）和 Docker daemon 日志。",
    ],
    practice: "模拟一个容器 OOM 场景，用 docker inspect 和 dmesg 定位问题。",
  },
  {
    id: "docker-card-cicd",
    title: "CI/CD 集成",
    summary: "Docker 标准化了从开发到生产的交付流程。",
    points: [
      "CI 中使用 Docker 确保构建环境一致性和可重现性。",
      "利用 cache-from 和 registry cache 加速流水线构建。",
      "镜像推送前执行安全扫描和集成测试作为质量关卡。",
    ],
    practice: "在 GitHub Actions 中配置 Docker 构建、扫描和推送流水线。",
  },
]

export const dockerExamQuestions: QuizQuestion[] = [
  { id: "docker-q1", question: "容器与虚拟机最根本的区别是？", options: ["容器没有网络", "容器共享宿主机内核，虚拟机通过 Hypervisor 虚拟化硬件", "虚拟机更轻量", "容器不能运行 Linux"], answer: 1, rationale: "容器直接使用宿主机内核，通过 namespace 和 cgroup 实现隔离，而虚拟机需要完整的 Guest OS。" },
  { id: "docker-q2", question: "Dockerfile 中 CMD 和 ENTRYPOINT 的区别是？", options: ["CMD 不能被覆盖", "ENTRYPOINT 定义固定入口点，CMD 提供默认参数可被覆盖", "它们完全相同", "ENTRYPOINT 只在 Compose 中有效"], answer: 1, rationale: "ENTRYPOINT 定义容器启动时执行的命令，CMD 提供默认参数，docker run 时可覆盖 CMD。" },
  { id: "docker-q3", question: "优化 Dockerfile 构建缓存的最佳做法是？", options: ["把所有指令写在一行", "将不常变化的指令放在前面，经常变化的放在后面", "每次构建前清除缓存", "不使用基础镜像"], answer: 1, rationale: "Docker 按顺序检查缓存，一旦某层失效后续所有层都需要重建。" },
  { id: "docker-q4", question: "多阶段构建的核心价值是？", options: ["加快构建速度", "分离编译环境与运行环境，减小最终镜像体积", "支持多架构", "自动推送到仓库"], answer: 1, rationale: "多阶段构建只将编译产物复制到最终镜像，去除了 SDK、工具链等不需要的内容。" },
  { id: "docker-q5", question: "Docker 自定义 bridge 网络相比默认 bridge 的优势是？", options: ["性能更高", "提供容器间 DNS 解析和更好的隔离", "不需要 iptables", "支持 Windows"], answer: 1, rationale: "自定义 bridge 网络提供自动 DNS 解析，容器可通过名称互相访问。" },
  { id: "docker-q6", question: "数据库容器的数据应存储在哪里？", options: ["容器可写层", "Named Volume", "tmpfs", "环境变量"], answer: 1, rationale: "Named Volume 独立于容器生命周期，容器删除后数据不丢失，且性能优于容器可写层。" },
  { id: "docker-q7", question: "容器安全最佳实践中，运行容器时应该？", options: ["始终使用 root 用户", "使用 --privileged 模式", "使用非 root 用户，drop 不必要的 capabilities", "关闭所有安全特性提升性能"], answer: 2, rationale: "最小权限原则：使用非 root 用户，drop ALL capabilities 后只添加必要权限。" },
  { id: "docker-q8", question: "Docker Compose 的 depends_on 默认行为是？", options: ["等待依赖服务完全就绪", "只控制启动顺序，不等待服务就绪", "自动健康检查", "并行启动所有服务"], answer: 1, rationale: "depends_on 默认只控制启动顺序，需配合 healthcheck 和 condition: service_healthy 等待就绪。" },
  { id: "docker-q9", question: "容器中传递敏感信息的最安全方式是？", options: ["环境变量", "Dockerfile 中硬编码", "Docker Secrets 挂载为文件", "命令行参数"], answer: 2, rationale: "Docker Secrets 将敏感信息挂载为文件，避免泄露到环境变量、日志或镜像层中。" },
  { id: "docker-q10", question: "overlay2 存储驱动使用的文件系统机制是？", options: ["NFS", "OverlayFS 联合挂载", "ext4 直接挂载", "tmpfs"], answer: 1, rationale: "overlay2 基于 OverlayFS，将多个只读层与一个可写层联合挂载为统一的文件系统视图。" },
  { id: "docker-q11", question: "选择最小基础镜像的主要目的是？", options: ["节省磁盘费用", "减少攻击面和潜在漏洞", "加快网络速度", "兼容更多平台"], answer: 1, rationale: "最小基础镜像（alpine/distroless）包含的软件包更少，CVE 漏洞数量也更少。" },
  { id: "docker-q12", question: "Docker BuildKit 相比传统构建器的优势包括？", options: ["不需要 Dockerfile", "并行构建独立阶段、缓存挂载、Secret 支持", "自动优化代码", "无需安装 Docker"], answer: 1, rationale: "BuildKit 支持并行阶段构建、--mount=type=cache 缓存和 --mount=type=secret 安全注入。" },
  { id: "docker-q13", question: "容器出现 OOM Killed 的直接原因是？", options: ["CPU 不足", "网络超时", "内存使用超过 --memory 硬限制", "磁盘空间不足"], answer: 2, rationale: "当容器内存使用超过 --memory 设置的硬限制时，Linux OOM Killer 会终止容器内进程。" },
  { id: "docker-q14", question: "docker system prune 命令的作用是？", options: ["删除所有镜像", "清理未使用的容器、网络、悬挂镜像和构建缓存", "重启 Docker daemon", "备份所有数据"], answer: 1, rationale: "docker system prune 清理未使用的资源，释放磁盘空间，加 -a 标志会清理所有未使用的镜像。" },
  { id: "docker-q15", question: "Sidecar 容器模式的核心思想是？", options: ["替代主容器", "为主容器附加辅助功能而不修改主容器代码", "减少容器数量", "共享存储卷"], answer: 1, rationale: "Sidecar 在同一编排单元中运行辅助容器（如日志采集、代理），增强主容器功能而不侵入其代码。" },
  { id: "docker-q16", question: "在 CI 中加速 Docker 构建的最有效方法是？", options: ["使用更大的机器", "利用 registry cache 和 layer cache 复用之前构建的层", "减少测试", "不使用多阶段构建"], answer: 1, rationale: "通过 --cache-from 和 registry cache 复用之前构建的镜像层，避免每次重新构建。" },
  { id: "docker-q17", question: "Docker 网络中容器无法通过名称互相访问，最可能的原因是？", options: ["Docker 版本过低", "容器在默认 bridge 网络中，未使用自定义网络", "端口未映射", "容器 IP 冲突"], answer: 1, rationale: "默认 bridge 网络不提供 DNS 解析，需要创建自定义 bridge 网络才能通过名称访问。" },
  { id: "docker-q18", question: "distroless 镜像的特点是？", options: ["基于 Ubuntu", "不包含 shell 和包管理器，只有应用运行时", "体积最大但最安全", "只支持 Java"], answer: 1, rationale: "distroless 镜像去除了 shell、包管理器等非必要组件，只包含应用运行所需的最小依赖。" },
  { id: "docker-q19", question: "容器日志管理的最佳实践是？", options: ["将日志写入容器内文件", "应用输出到 stdout/stderr，通过日志驱动转发到集中式存储", "不记录日志", "每个容器单独配置日志"], answer: 1, rationale: "Docker 推荐应用输出到 stdout/stderr，由日志驱动统一处理转发，便于集中管理。" },
  { id: "docker-q20", question: "将有状态服务容器化时，最重要的考虑是？", options: ["选择最新的基础镜像", "确保数据持久化使用 Volume，并制定备份和恢复策略", "使用最大的内存限制", "禁用健康检查"], answer: 1, rationale: "有状态服务的数据必须使用 Volume 持久化，并配备完善的备份和恢复策略。" },
]

export const dockerRoadmap: RoadmapDefinition = {
  id: "docker",
  label: "Docker 容器化",
  title: "Docker 容器化学习路线",
  durationLabel: "12 周·36 课时",
  description: "从容器基础到生产实践，系统掌握 Docker 镜像构建、网络存储、安全加固、编排部署与 CI/CD 集成，构建企业级容器化能力。",
  heroBadge: "镜像构建 · 网络存储 · 安全加固 · 生产实践",
  stages: dockerStages,
  knowledgeCards: dockerKnowledgeCards,
  examQuestions: dockerExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 Docker 之旅，先理解容器化原理与 Dockerfile 编写。"
    if (percent < 25) return "继续掌握镜像构建优化和多阶段构建技巧。"
    if (percent < 50) return "深入网络模型和存储管理，搭建 Compose 多容器应用。"
    if (percent < 75) return "加固容器安全基线，学习资源管理与编排。"
    if (percent < 100) return "完善监控、性能调优与 CI/CD 集成。"
    return "恭喜完成！你已具备企业级 Docker 实践能力，继续深入 Kubernetes！"
  },
  resourceGuide: {
    environment: "安装 Docker Desktop 或在 Linux 上安装 Docker Engine，准备 VS Code + Docker 扩展。",
    fallbackKeyPoints: [
      "Dockerfile 指令顺序影响缓存效率，不常变化的指令放前面",
      "多阶段构建分离编译与运行环境，减小镜像体积",
      "自定义 bridge 网络提供容器间 DNS 解析",
      "生产数据使用 Named Volume 持久化",
      "非 root 用户 + 最小 capabilities 是安全基线",
    ],
    handsOnSteps: [
      "编写一个多阶段 Dockerfile，构建并优化应用镜像",
      "用 Docker Compose 编排前端 + API + 数据库 + 缓存的完整应用栈",
      "创建自定义 bridge 网络，验证容器间 DNS 解析和端口映射",
      "配置 HEALTHCHECK 和资源限制，模拟 OOM 场景并排查",
      "在 CI 中配置 Docker 构建、安全扫描和推送流水线",
    ],
    selfChecks: [
      "能否解释镜像分层机制和构建缓存失效规则？",
      "是否掌握 bridge/host/overlay 网络的区别与适用场景？",
      "容器安全加固覆盖了镜像、运行时和密钥管理三个维度？",
      "Docker Compose 中是否正确配置了 healthcheck 和 depends_on？",
      "CI/CD 流水线是否包含安全扫描和集成测试关卡？",
    ],
    extensions: [
      "深入学习 Kubernetes，将编排能力提升到生产级别",
      "探索 Podman、nerdctl 等 Docker 替代方案",
      "研究 WebAssembly 容器运行时（如 WasmEdge）",
      "学习 Buildpacks 自动化镜像构建",
    ],
    lessonQuizAdvice: "每周完成实操练习后做测验，确保理解底层原理而非仅会操作命令。",
  },
}
