import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week12Guides: Record<string, LessonGuide> = {
    "w12-1": {
        lessonId: "w12-1",
        background: [
            "【容器化核心价值】Docker 官方文档：'Multi-stage builds allow developers to reduce the size of your final image, by creating a cleaner separation between the building of your image and the final output'——多阶段构建实现构建与运行时分离，大幅减小镜像体积。",
            "【基础镜像选择】选择最小化基础镜像是优化的第一步。推荐使用官方 Docker 镜像、经过验证的发布者镜像，或 Docker Hub 的赞助开源项目镜像。Alpine 镜像体积小但可能需要额外依赖。",
            "【镜像安全实践】Node.js Docker 最佳实践：以 node 用户（UID 1000）运行容器而非 root，遵循最小权限原则。使用 USER 指令切换用户，减少安全攻击面。",
            "【信号处理机制】Node.js 不是为 PID 1 设计的，直接作为 PID 1 运行会导致无法正确响应 SIGINT、SIGTERM 等信号。使用 --init 标志或 Tini 包装进程，正确处理内核信号。",
            "【构建缓存策略】使用 .dockerignore 排除不需要的文件（如 .env、.git、node_modules），合理安排 Dockerfile 指令顺序以最大化利用构建缓存。先复制 package.json 安装依赖，再复制源码。",
            "【环境变量配置】生产环境运行时设置 NODE_ENV=production 启用性能优化。使用 npm ci 而非 npm install 确保依赖版本一致性。"
        ],
        keyDifficulties: [
            "【多阶段构建优化】多阶段构建使用多个 FROM 指令创建构建链。第一阶段安装编译工具和依赖，执行构建；最终阶段仅复制构建产物，不包含开发依赖和构建工具，镜像体积可减少 50%-80%。",
            "【CMD vs npm 脚本】直接使用 CMD ['node', 'index.js'] 而非 CMD ['npm', 'start']。npm 会吞掉退出信号，导致优雅终止失败。直接调用 Node.js 可以正确接收和处理信号。",
            "【Alpine 镜像权衡】Alpine 使用 musl libc 而非 glibc，某些 npm 原生模块可能不兼容。需要权衡镜像大小与兼容性，必要时安装额外的构建依赖（python3、make、g++ 等）。",
            "【安全扫描集成】使用 docker scan 或第三方工具（Snyk、Trivy）扫描镜像漏洞。将安全扫描集成到 CI/CD 流水线，阻止含有高危漏洞的镜像部署。",
            "【资源限制配置】使用 -m 和 --memory-swap 限制容器内存使用，防止单个容器耗尽主机资源。生产环境应为每个容器设置合理的资源限制。"
        ],
        handsOnPath: [
            "创建基础 Dockerfile：以 node:20-alpine 为基础镜像，设置工作目录，复制 package.json，运行 npm ci --only=production。",
            "实现多阶段构建：创建 build 阶段安装所有依赖并执行构建，production 阶段仅复制 dist 目录和生产依赖。",
            "配置非 root 用户：在 Dockerfile 中使用 USER node 切换到非特权用户，验证容器以 node 用户运行。",
            "添加 .dockerignore：排除 node_modules、.git、*.log、.env 等不需要的文件，减少构建上下文大小。",
            "测试信号处理：使用 docker run --init 启动容器，测试 docker stop 时应用能否优雅关闭并处理完成中的请求。",
            "执行安全扫描：运行 docker scan 或使用 Trivy 扫描构建的镜像，分析并修复发现的漏洞。",
            "优化镜像大小：对比优化前后的镜像大小（docker images），目标将 Node.js 应用镜像控制在 200MB 以内。"
        ],
        selfCheck: [
            "多阶段构建如何减小镜像体积？每个阶段的作用是什么？",
            "为什么要以非 root 用户运行容器？如何正确配置？",
            "Node.js 作为 PID 1 有什么问题？--init 标志解决了什么？",
            "CMD ['node', 'index.js'] 与 CMD ['npm', 'start'] 有什么区别？",
            ".dockerignore 文件的作用是什么？应该排除哪些文件？",
            "Alpine 镜像有什么优势和潜在问题？",
            "如何验证容器的安全性？有哪些常用工具？",
            "生产环境 Dockerfile 应该遵循哪些最佳实践？"
        ],
        extensions: [
            "探索 Distroless 镜像，进一步减小镜像大小和攻击面，只包含应用运行时必需的组件。",
            "学习 Docker BuildKit 的高级特性：并行构建、缓存导出/导入、secret 挂载。",
            "研究 Kaniko、Buildah 等无 daemon 的容器构建工具，适用于 CI/CD 环境。",
            "实践容器镜像签名和验证（Docker Content Trust、Cosign），确保镜像完整性。"
        ],
        sourceUrls: [
            "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
            "https://docs.docker.com/build/building/multi-stage/",
            "https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md"
        ]
    },
    "w12-2": {
        lessonId: "w12-2",
        background: [
            "【Kubernetes 核心概念】Kubernetes 官方文档定义了声明式配置模型：描述期望状态，Kubernetes 自动协调实际状态与期望状态一致。核心资源包括 Deployment、Service、Ingress、ConfigMap、Secret。",
            "【Deployment 控制器】Deployment 管理无状态应用，支持滚动更新和回滚。定义 Pod 模板、副本数、更新策略，Kubernetes 自动维护指定数量的健康 Pod。",
            "【Service 服务发现】Service 将一组 Pod 暴露为网络服务，支持负载均衡和服务发现。类型包括 ClusterIP（内部）、NodePort（节点端口）、LoadBalancer（云负载均衡器）。",
            "【Ingress 入口路由】Ingress 提供 HTTP/HTTPS 层的路由规则，支持基于 URL 路径和主机名的路由、TLS 终止。需要 Ingress Controller（如 Nginx Ingress、Traefik）配合使用。",
            "【配置管理分离】ConfigMap 存储非敏感配置数据，Secret 存储敏感信息（密码、Token、证书）。两者都支持以环境变量或挂载卷的方式注入 Pod，实现配置与代码分离。",
            "【微服务部署模式】Google 电商微服务案例展示：11 个独立服务使用 gRPC 通信，部署在 GKE Autopilot 集群，Multi-Cluster Ingress 实现跨区域负载均衡。"
        ],
        keyDifficulties: [
            "【健康检查配置】合理配置 livenessProbe 和 readinessProbe。livenessProbe 失败触发重启，readinessProbe 失败从 Service 移除。初始延迟、检查间隔、失败阈值需要根据应用启动时间调整。",
            "【滚动更新策略】RollingUpdate 策略的 maxSurge 和 maxUnavailable 参数影响更新速度和可用性。maxSurge 控制可额外创建的 Pod 数，maxUnavailable 控制不可用 Pod 上限。",
            "【HPA 自动伸缩】Horizontal Pod Autoscaler 根据 CPU/内存使用率或自定义指标自动调整副本数。需要设置 resources.requests 作为伸缩基准，配置 metrics-server 采集指标。",
            "【Helm 包管理】Helm 是 Kubernetes 的包管理器，Chart 封装一组 K8s 资源。支持模板化配置、版本管理、一键部署/回滚。values.yaml 定义可配置参数。",
            "【多环境配置管理】使用 Kustomize 或 Helm values 管理多环境（dev/staging/prod）配置差异。保持基础配置一致，通过 overlay/values 覆盖环境特定参数。"
        ],
        handsOnPath: [
            "创建 Deployment：编写电商应用的 Deployment YAML，配置副本数、镜像、端口、资源限制和健康检查。",
            "配置 Service：创建 ClusterIP Service 暴露应用，配置端口映射和选择器标签。",
            "设置 Ingress：配置 Nginx Ingress 路由规则，实现域名到 Service 的映射，配置 TLS 证书。",
            "管理配置：创建 ConfigMap 存储应用配置，创建 Secret 存储数据库密码，在 Deployment 中引用。",
            "配置 HPA：设置 Horizontal Pod Autoscaler，CPU 目标 50%，最小 2 副本，最大 10 副本。",
            "使用 Helm 部署：创建电商应用的 Helm Chart，包含 Deployment、Service、Ingress、ConfigMap 模板。",
            "验证部署状态：使用 kubectl get/describe/logs 命令检查资源状态，排查部署问题。"
        ],
        selfCheck: [
            "Deployment、ReplicaSet、Pod 三者的关系是什么？",
            "Service 的四种类型分别适用于什么场景？",
            "livenessProbe 和 readinessProbe 的区别是什么？配置不当会有什么后果？",
            "如何实现零停机滚动更新？需要配置哪些参数？",
            "ConfigMap 和 Secret 有什么区别？如何在 Pod 中使用？",
            "HPA 如何工作？它依赖哪些组件？",
            "Helm Chart 的结构是怎样的？values.yaml 的作用是什么？"
        ],
        extensions: [
            "学习 Kubernetes Operator 模式，为复杂应用（如数据库）创建自定义控制器。",
            "研究 Service Mesh（Istio、Linkerd）实现服务间通信、流量管理、可观测性。",
            "探索 GitOps 工具（ArgoCD、Flux）实现声明式持续部署。",
            "学习 Kubernetes 网络策略（NetworkPolicy）实现 Pod 级别的网络隔离。",
            "研究 Pod Disruption Budget（PDB）确保应用在集群维护时的可用性。"
        ],
        sourceUrls: [
            "https://kubernetes.io/docs/home/",
            "https://developers.google.com/learn/pathways/solution-ecommerce-microservices-kubernetes",
            "https://helm.sh/docs/"
        ]
    },
    "w12-3": {
        lessonId: "w12-3",
        background: [
            "【Prometheus 数据模型】Prometheus 采用多维时间序列数据模型。每个指标由名称和一组键值对标签唯一标识，支持灵活的过滤和聚合。数据采用 Pull 模式从目标的 /metrics 端点拉取。",
            "【指标类型分类】Prometheus 支持四种指标类型：Counter（只增计数器）、Gauge（可增可减仪表）、Histogram（直方图，分布统计）、Summary（摘要，分位数统计）。选择合适的类型对监控效果至关重要。",
            "【PromQL 查询语言】PromQL 是 Prometheus 的查询语言，支持即时查询和范围查询，提供 rate()、sum()、avg()、histogram_quantile() 等函数，可以灵活地对多维数据进行切片和聚合。",
            "【Grafana 可视化】Grafana 是主流的监控可视化平台，支持 150+ 数据源插件。Dashboard 由多个 Panel 组成，每个 Panel 展示一个或多个查询结果，支持图表、表格、仪表盘等多种可视化类型。",
            "【告警设计原则】Google SRE Book：'at the scale our systems operate, being alerted for single-machine failures is unacceptable because such data is too noisy to be actionable'——告警应关注服务级别问题而非单机故障。",
            "【告警最佳实践】有效告警需要多条件组合（错误率 AND 最小请求量）、最小持续时间（避免抖动）、分级路由（紧急告警 → 页面，重要告警 → 工单）。"
        ],
        keyDifficulties: [
            "【指标选择策略】遵循 USE 方法（Utilization、Saturation、Errors）监控资源，RED 方法（Rate、Errors、Duration）监控服务。关注 P99 延迟而非平均值，因为平均值会掩盖长尾问题。",
            "【告警阈值设计】避免单一阈值告警，应组合多个条件。例如：错误率 > 1% AND 请求数 > 100/分钟。设置持续时间要求（如 5 分钟），防止瞬时波动触发告警。",
            "【告警疲劳防治】告警数量过多会导致疲劳和忽视。定期审计告警规则，删除无价值告警，调整阈值减少噪音，确保每个告警都是可操作的。",
            "【Dashboard 设计】遵循「概览 → 详情」层次。第一层展示关键业务指标（SLIs），第二层展示技术指标，第三层提供详细的诊断信息。使用变量实现动态过滤。",
            "【高基数问题】标签值过多（如 user_id）会导致时间序列爆炸，影响 Prometheus 性能。应避免高基数标签，必要时使用聚合或采样。"
        ],
        handsOnPath: [
            "部署 Prometheus：使用 Helm 在 Kubernetes 中部署 kube-prometheus-stack，包含 Prometheus、Grafana、Alertmanager。",
            "配置应用指标暴露：在 Node.js 应用中集成 prom-client 库，暴露 /metrics 端点，添加自定义业务指标。",
            "配置服务发现：设置 Prometheus ServiceMonitor 或 PodMonitor，自动发现并抓取目标应用的指标。",
            "创建 Grafana Dashboard：为电商应用创建监控面板，包含请求速率、延迟分布、错误率、活跃用户等指标。",
            "配置告警规则：在 Prometheus 中定义告警规则，监控错误率、P99 延迟、Pod 重启等关键指标。",
            "设置 Alertmanager：配置告警路由和通知渠道（Slack、Email、PagerDuty），实现告警分级和静默。",
            "验证告警流程：模拟故障场景（如返回 500 错误），验证告警触发、通知发送、恢复确认的完整流程。"
        ],
        selfCheck: [
            "Prometheus 的 Pull 模式有什么优势？与 Push 模式相比？",
            "Counter、Gauge、Histogram、Summary 分别适用于什么场景？",
            "什么是 USE 方法和 RED 方法？如何应用到监控实践中？",
            "如何设计告警规则避免告警疲劳？",
            "高基数标签有什么问题？如何避免？",
            "Grafana Dashboard 应该如何分层组织？",
            "Alertmanager 的告警路由是如何工作的？"
        ],
        extensions: [
            "学习 Prometheus Recording Rules，预计算常用查询提高性能。",
            "研究 Prometheus 长期存储方案（Thanos、Cortex、VictoriaMetrics）。",
            "探索 SLO/SLI 监控框架（Sloth、Pyrra），实现基于 SLO 的告警。",
            "学习 Grafana Alerting 与 Prometheus Alertmanager 的集成和差异。"
        ],
        sourceUrls: [
            "https://prometheus.io/docs/introduction/overview/",
            "https://grafana.com/docs/grafana/latest/dashboards/",
            "https://sre.google/sre-book/practical-alerting/"
        ]
    },
    "w12-4": {
        lessonId: "w12-4",
        background: [
            "【OpenTelemetry 统一标准】OpenTelemetry 提供厂商无关的可观测性标准，统一 Traces、Metrics、Logs 三大信号的采集和导出。支持 90+ 可观测性厂商，是 CNCF 的活跃项目。",
            "【分布式追踪原理】Trace 表示请求在分布式系统中的完整路径，由多个 Span 组成。每个 Span 代表一个操作单元，包含开始时间、持续时间、标签、事件等信息。Trace ID 贯穿整个调用链。",
            "【Jaeger 追踪系统】Jaeger 是 Uber 开源的分布式追踪系统，实现 OpenTracing 标准。支持多种存储后端（Elasticsearch、Cassandra、Kafka），提供追踪可视化和分析 UI。",
            "【Grafana Loki 日志系统】Loki 是受 Prometheus 启发的日志聚合系统，核心设计是 '只索引标签，不索引日志内容'，存储成本低。使用 LogQL 查询语言，与 Grafana 深度集成。",
            "【结构化日志规范】生产环境日志应使用结构化格式（JSON），包含时间戳、级别、服务名、Trace ID、请求 ID 等字段。便于解析、查询和关联分析。",
            "【可观测性三支柱】Metrics、Logs、Traces 构成可观测性三支柱。Metrics 提供系统健康概览，Logs 提供详细事件记录，Traces 提供请求路径分析。三者结合才能完整诊断问题。"
        ],
        keyDifficulties: [
            "【Trace Context 传播】跨服务追踪需要正确传播 Trace Context（Trace ID、Span ID、Baggage）。HTTP 使用 W3C Trace Context 标准，通过 traceparent、tracestate 头传递。gRPC 使用 metadata 传递。",
            "【采样策略选择】全量采集对存储和性能影响大，需要采样。策略包括：头部采样（概率采样）、尾部采样（基于延迟/错误决定保留）、自适应采样。平衡成本与可观测性。",
            "【日志与追踪关联】通过在日志中注入 Trace ID，实现日志与追踪的关联。在 Grafana 中可以从追踪跳转到相关日志，加速问题定位。",
            "【Collector 部署模式】OpenTelemetry Collector 支持 Agent 模式（与应用同节点）和 Gateway 模式（集中部署）。Agent 减少网络延迟，Gateway 便于统一处理和路由。",
            "【性能开销控制】追踪和日志采集有性能开销。应使用异步批量导出、合理采样率、避免记录敏感信息、控制 Span 属性数量。生产环境需要监控 SDK 自身开销。"
        ],
        handsOnPath: [
            "集成 OpenTelemetry SDK：在 Node.js 应用中安装 @opentelemetry 包，配置自动埋点和手动埋点。",
            "部署 OpenTelemetry Collector：使用 Helm 部署 Collector，配置 receivers（OTLP）、processors（batch、memory_limiter）、exporters（Jaeger、Loki）。",
            "配置 Jaeger 后端：部署 Jaeger 并配置 Elasticsearch 存储，设置数据保留策略和索引配置。",
            "配置结构化日志：使用 winston 或 pino 输出 JSON 格式日志，包含 trace_id、span_id 字段。",
            "部署 Grafana Loki：使用 Helm 部署 Loki，配置 Promtail 采集 Kubernetes Pod 日志。",
            "创建关联 Dashboard：在 Grafana 中配置数据源关联，实现从 Metrics → Traces → Logs 的无缝跳转。",
            "端到端验证：发起测试请求，在 Jaeger 中查看完整调用链，在 Grafana 中查看关联日志。"
        ],
        selfCheck: [
            "Traces、Metrics、Logs 三者的关系是什么？各自适用于什么场景？",
            "Trace Context 是如何跨服务传播的？W3C Trace Context 标准定义了什么？",
            "头部采样和尾部采样有什么区别？各自的优缺点？",
            "为什么 Loki 只索引标签而不索引日志内容？这带来什么优势？",
            "如何在日志中注入 Trace ID 实现日志与追踪关联？",
            "OpenTelemetry Collector 的 Agent 和 Gateway 模式有什么区别？",
            "生产环境的追踪和日志采集需要注意哪些性能问题？"
        ],
        extensions: [
            "学习 OpenTelemetry 的自动埋点机制，了解如何为不同框架编写 instrumentation。",
            "研究 eBPF 技术在无侵入追踪中的应用（如 Pixie、Cilium）。",
            "探索 APM 解决方案（Datadog、New Relic、Elastic APM）的功能和架构。",
            "学习 Span 链路分析，识别关键路径和性能瓶颈。",
            "研究 Continuous Profiling（持续性能分析）与追踪的结合。"
        ],
        sourceUrls: [
            "https://opentelemetry.io/docs/",
            "https://grafana.com/docs/loki/latest/",
            "https://www.jaegertracing.io/docs/"
        ]
    }
}

export const week12Quizzes: Record<string, QuizQuestion[]> = {
    "w12-1": [
        {
            id: "w12-1-q1",
            question: "多阶段构建（Multi-stage Build）的主要目的是什么？",
            options: [
                "加快构建速度",
                "减小最终镜像体积，分离构建和运行时环境",
                "支持多种操作系统",
                "增加镜像安全性"
            ],
            answer: 1,
            rationale: "多阶段构建允许在第一阶段使用完整的编译环境，最终镜像只包含运行时必需的文件，大幅减小体积。"
        },
        {
            id: "w12-1-q2",
            question: "为什么不建议以 root 用户运行容器？",
            options: [
                "会降低性能",
                "遵循最小权限原则，减少安全攻击面",
                "会增加镜像大小",
                "Docker 不支持 root 用户"
            ],
            answer: 1,
            rationale: "以非 root 用户（如 node 用户）运行容器遵循最小权限原则，即使容器被攻破，攻击者也只有有限权限。"
        },
        {
            id: "w12-1-q3",
            question: "Node.js 应用直接作为 PID 1 运行会有什么问题？",
            options: [
                "性能降低",
                "无法正确响应 SIGINT、SIGTERM 等信号",
                "内存泄漏",
                "无法访问网络"
            ],
            answer: 1,
            rationale: "Node.js 不是为 PID 1 设计的，作为 PID 1 运行时无法正确处理内核信号，导致 docker stop 时无法优雅关闭。"
        },
        {
            id: "w12-1-q4",
            question: "以下哪个命令更适合作为容器的 CMD？",
            options: [
                "CMD ['npm', 'start']",
                "CMD ['node', 'index.js']",
                "CMD ['bash', '-c', 'npm start']",
                "CMD ['nodemon', 'index.js']"
            ],
            answer: 1,
            rationale: "直接使用 node 命令可以正确接收信号，npm 会吞掉信号导致优雅终止失败。生产环境也不应使用 nodemon。"
        },
        {
            id: "w12-1-q5",
            question: ".dockerignore 文件的作用是什么？",
            options: [
                "忽略 Dockerfile 中的某些指令",
                "排除不需要的文件，减少构建上下文大小",
                "配置 Docker 网络",
                "设置环境变量"
            ],
            answer: 1,
            rationale: ".dockerignore 告诉 Docker 哪些文件不需要复制到构建上下文，排除 node_modules、.git 等可减小上下文并加速构建。"
        },
        {
            id: "w12-1-q6",
            question: "使用 Alpine 镜像有什么潜在问题？",
            options: [
                "镜像太大",
                "使用 musl libc，某些 npm 原生模块可能不兼容",
                "不支持 Node.js",
                "没有包管理器"
            ],
            answer: 1,
            rationale: "Alpine 使用 musl libc 而非 glibc，某些依赖 glibc 的原生模块可能无法正常工作，需要额外的兼容性处理。"
        },
        {
            id: "w12-1-q7",
            question: "生产环境应该如何安装 npm 依赖？",
            options: [
                "npm install",
                "npm ci --only=production",
                "npm install --save-dev",
                "yarn add"
            ],
            answer: 1,
            rationale: "npm ci 严格按照 package-lock.json 安装，确保版本一致性。--only=production 排除开发依赖，减小镜像。"
        },
        {
            id: "w12-1-q8",
            question: "如何解决 Node.js 的 PID 1 信号处理问题？",
            options: [
                "增加内存",
                "使用 docker run --init 或在镜像中集成 Tini",
                "使用更高版本的 Node.js",
                "减少并发连接"
            ],
            answer: 1,
            rationale: "--init 标志或 Tini 会作为 PID 1 运行，正确处理信号并传递给 Node.js 进程，确保优雅终止。"
        },
        {
            id: "w12-1-q9",
            question: "如何验证容器镜像的安全性？",
            options: [
                "只检查代码",
                "使用 docker scan、Trivy、Snyk 等工具扫描漏洞",
                "查看镜像大小",
                "检查 Dockerfile 语法"
            ],
            answer: 1,
            rationale: "使用安全扫描工具可以检测镜像中的已知漏洞（CVE），应集成到 CI/CD 流水线阻止高危漏洞进入生产。"
        },
        {
            id: "w12-1-q10",
            question: "为什么应该固定基础镜像版本而不是使用 latest？",
            options: [
                "latest 镜像更大",
                "保证构建的可重复性，避免意外升级带来的问题",
                "latest 不安全",
                "Docker 不支持 latest"
            ],
            answer: 1,
            rationale: "使用 latest 标签可能在不同时间构建出不同结果，固定版本（如 node:20-alpine）确保构建可重复和可预测。"
        },
        {
            id: "w12-1-q11",
            question: "Dockerfile 中指令顺序如何影响构建缓存？",
            options: [
                "顺序不影响缓存",
                "变化频率低的指令放前面，变化频繁的放后面以最大化缓存利用",
                "所有指令都会被缓存",
                "只有 FROM 指令被缓存"
            ],
            answer: 1,
            rationale: "Docker 按顺序执行指令，某条指令变化会使后续所有缓存失效。应先复制 package.json 安装依赖，再复制源码。"
        },
        {
            id: "w12-1-q12",
            question: "如何限制容器的内存使用？",
            options: [
                "无法限制",
                "使用 docker run -m 或在 docker-compose 中配置 mem_limit",
                "修改 Node.js 代码",
                "使用更小的镜像"
            ],
            answer: 1,
            rationale: "使用 -m 和 --memory-swap 参数可以限制容器内存使用，防止单个容器耗尽主机资源，是生产环境的最佳实践。"
        }
    ],
    "w12-2": [
        {
            id: "w12-2-q1",
            question: "Kubernetes 中 Deployment、ReplicaSet、Pod 的关系是？",
            options: [
                "它们是独立的资源",
                "Deployment 管理 ReplicaSet，ReplicaSet 管理 Pod",
                "Pod 管理 Deployment",
                "ReplicaSet 管理 Deployment"
            ],
            answer: 1,
            rationale: "Deployment 是顶层控制器，管理 ReplicaSet，ReplicaSet 负责维护指定数量的 Pod 副本，形成层级关系。"
        },
        {
            id: "w12-2-q2",
            question: "以下哪种 Service 类型会创建云负载均衡器？",
            options: [
                "ClusterIP",
                "NodePort",
                "LoadBalancer",
                "ExternalName"
            ],
            answer: 2,
            rationale: "LoadBalancer 类型会请求云提供商创建负载均衡器，并将外部流量转发到 Service，适用于对外暴露服务。"
        },
        {
            id: "w12-2-q3",
            question: "livenessProbe 失败会导致什么后果？",
            options: [
                "Pod 被从 Service 移除",
                "Pod 被重启",
                "Pod 被删除",
                "没有影响"
            ],
            answer: 1,
            rationale: "livenessProbe 检测容器是否存活，失败会触发容器重启。readinessProbe 失败则只是从 Service 移除。"
        },
        {
            id: "w12-2-q4",
            question: "ConfigMap 和 Secret 的主要区别是？",
            options: [
                "存储格式不同",
                "ConfigMap 存储非敏感配置，Secret 存储敏感信息且 Base64 编码",
                "使用方式不同",
                "性能不同"
            ],
            answer: 1,
            rationale: "ConfigMap 用于非敏感配置，Secret 用于敏感信息（密码、Token），数据会进行 Base64 编码（注意不是加密）。"
        },
        {
            id: "w12-2-q5",
            question: "滚动更新中 maxSurge 参数的作用是？",
            options: [
                "控制最大 Pod 数量",
                "控制更新期间可额外创建的 Pod 数量",
                "控制最大 CPU 使用",
                "控制最大内存使用"
            ],
            answer: 1,
            rationale: "maxSurge 定义更新期间可以比期望副本数多创建的 Pod 数量或百分比，影响更新速度和资源使用。"
        },
        {
            id: "w12-2-q6",
            question: "HPA 自动伸缩依赖什么组件？",
            options: [
                "只需要 HPA 资源",
                "需要 metrics-server 或自定义指标适配器",
                "需要 Ingress Controller",
                "需要 PersistentVolume"
            ],
            answer: 1,
            rationale: "HPA 需要 metrics-server 提供 CPU/内存指标，或 Prometheus Adapter 等提供自定义指标，才能进行自动伸缩决策。"
        },
        {
            id: "w12-2-q7",
            question: "Ingress 的主要功能是？",
            options: [
                "存储配置",
                "提供 HTTP/HTTPS 路由、TLS 终止、基于路径的流量分发",
                "管理 Pod 生命周期",
                "提供存储"
            ],
            answer: 1,
            rationale: "Ingress 提供七层负载均衡，支持基于域名和路径的路由规则、TLS 终止，需要 Ingress Controller 配合。"
        },
        {
            id: "w12-2-q8",
            question: "Helm Chart 中 values.yaml 的作用是？",
            options: [
                "定义 Kubernetes 资源",
                "定义可配置参数的默认值",
                "定义安装顺序",
                "定义依赖关系"
            ],
            answer: 1,
            rationale: "values.yaml 包含 Chart 的可配置参数及其默认值，安装时可以通过 --values 或 --set 覆盖这些参数。"
        },
        {
            id: "w12-2-q9",
            question: "readinessProbe 失败会导致什么后果？",
            options: [
                "Pod 被重启",
                "Pod 从 Service 的 Endpoints 中移除，不再接收流量",
                "Pod 被删除",
                "没有影响"
            ],
            answer: 1,
            rationale: "readinessProbe 检测容器是否准备好接收流量，失败时 Pod 从 Service 移除但不重启，适合处理启动预热。"
        },
        {
            id: "w12-2-q10",
            question: "如何在 Deployment 中引用 ConfigMap 的值作为环境变量？",
            options: [
                "直接写入 env",
                "使用 envFrom.configMapRef 或 env.valueFrom.configMapKeyRef",
                "使用 volumes",
                "无法引用"
            ],
            answer: 1,
            rationale: "可以使用 envFrom 批量导入 ConfigMap 所有键值，或用 valueFrom.configMapKeyRef 引用特定键。"
        },
        {
            id: "w12-2-q11",
            question: "maxUnavailable: 0 和 maxSurge: 1 的滚动更新策略意味着什么？",
            options: [
                "先删除旧 Pod 再创建新 Pod",
                "先创建新 Pod 确认就绪后再删除旧 Pod，实现零停机",
                "同时删除和创建",
                "不执行更新"
            ],
            answer: 1,
            rationale: "maxUnavailable: 0 保证不会减少可用 Pod，maxSurge: 1 允许多创建一个 Pod，实现先启后停的零停机更新。"
        },
        {
            id: "w12-2-q12",
            question: "Kubernetes 中 PersistentVolumeClaim 的作用是？",
            options: [
                "创建存储",
                "Pod 对存储资源的请求，自动绑定到可用的 PersistentVolume",
                "定义存储类型",
                "备份数据"
            ],
            answer: 1,
            rationale: "PVC 是 Pod 对存储的声明式请求，Kubernetes 会根据 PVC 的需求自动绑定到满足条件的 PV。"
        }
    ],
    "w12-3": [
        {
            id: "w12-3-q1",
            question: "Prometheus 采集指标使用什么模式？",
            options: [
                "Push 模式",
                "Pull 模式",
                "Pub/Sub 模式",
                "Streaming 模式"
            ],
            answer: 1,
            rationale: "Prometheus 使用 Pull 模式，主动从目标的 /metrics 端点拉取指标数据，这种模式便于服务发现和集中控制。"
        },
        {
            id: "w12-3-q2",
            question: "以下哪种 Prometheus 指标类型适合记录请求延迟分布？",
            options: [
                "Counter",
                "Gauge",
                "Histogram",
                "Info"
            ],
            answer: 2,
            rationale: "Histogram 将观测值分桶统计，可以计算分位数（如 P99）。Counter 用于累计计数，Gauge 用于可增可减的值。"
        },
        {
            id: "w12-3-q3",
            question: "什么是 USE 方法？",
            options: [
                "用户体验监控方法",
                "监控资源的 Utilization、Saturation、Errors",
                "监控服务的 Users、Sessions、Events",
                "性能测试方法"
            ],
            answer: 1,
            rationale: "USE 方法（Utilization、Saturation、Errors）是 Brendan Gregg 提出的资源监控方法论，适用于 CPU、内存、磁盘等。"
        },
        {
            id: "w12-3-q4",
            question: "为什么告警规则应该组合多个条件？",
            options: [
                "减少存储",
                "避免低流量时误报，提高告警准确性",
                "加快告警速度",
                "简化配置"
            ],
            answer: 1,
            rationale: "单一条件（如错误率 > 1%）在低流量时容易误报。组合条件（错误率 > 1% AND 请求数 > 100）更准确。"
        },
        {
            id: "w12-3-q5",
            question: "什么是告警疲劳？如何防治？",
            options: [
                "告警系统性能下降",
                "告警过多导致运维人员忽视告警，应减少噪音确保可操作",
                "告警延迟",
                "告警格式问题"
            ],
            answer: 1,
            rationale: "告警数量过多会导致疲劳和忽视。应定期审计告警规则，删除无价值告警，确保每个告警都是可操作的。"
        },
        {
            id: "w12-3-q6",
            question: "Grafana Dashboard 应该如何组织？",
            options: [
                "所有指标放在一个面板",
                "遵循「概览 → 详情」层次，从业务指标到技术指标再到诊断信息",
                "按字母顺序排列",
                "随机排列"
            ],
            answer: 1,
            rationale: "Dashboard 应分层：第一层关键业务指标，第二层技术指标，第三层诊断详情，便于快速定位问题。"
        },
        {
            id: "w12-3-q7",
            question: "什么是高基数（High Cardinality）问题？",
            options: [
                "指标数值过大",
                "标签值过多导致时间序列爆炸，影响 Prometheus 性能",
                "查询太复杂",
                "存储空间不足"
            ],
            answer: 1,
            rationale: "高基数标签（如 user_id）会创建大量时间序列，消耗内存和存储，应避免或使用聚合采样。"
        },
        {
            id: "w12-3-q8",
            question: "PromQL 中 rate() 函数的作用是？",
            options: [
                "计算平均值",
                "计算 Counter 类型指标的每秒增长率",
                "计算最大值",
                "计算分位数"
            ],
            answer: 1,
            rationale: "rate() 计算 Counter 指标在时间范围内的每秒平均增长率，常用于计算 QPS、错误率等。"
        },
        {
            id: "w12-3-q9",
            question: "什么是 RED 方法？",
            options: [
                "监控红色告警",
                "监控服务的 Rate、Errors、Duration",
                "监控 CPU、内存、磁盘",
                "告警分级方法"
            ],
            answer: 1,
            rationale: "RED 方法（Rate、Errors、Duration）是 Tom Wilkie 提出的服务监控方法论，关注请求速率、错误率和延迟。"
        },
        {
            id: "w12-3-q10",
            question: "Alertmanager 的告警静默（Silence）功能用于什么？",
            options: [
                "删除告警规则",
                "临时抑制符合条件的告警，如计划维护期间",
                "加速告警发送",
                "修改告警内容"
            ],
            answer: 1,
            rationale: "静默可以在指定时间内抑制符合条件的告警，适用于计划维护、已知问题处理中等场景。"
        },
        {
            id: "w12-3-q11",
            question: "为什么应该关注 P99 延迟而不是平均延迟？",
            options: [
                "P99 计算更简单",
                "平均值会掩盖长尾问题，P99 更能反映用户体验",
                "P99 数值更小",
                "平均值不准确"
            ],
            answer: 1,
            rationale: "平均值会被大量正常请求拉低，掩盖少数慢请求。P99 表示 99% 请求的延迟上限，更能反映真实用户体验。"
        },
        {
            id: "w12-3-q12",
            question: "告警规则设置持续时间要求（如 for: 5m）的目的是？",
            options: [
                "减少存储",
                "避免瞬时波动触发告警，减少误报",
                "加快告警速度",
                "增加安全性"
            ],
            answer: 1,
            rationale: "持续时间要求条件必须持续满足一定时间才触发告警，可以过滤掉瞬时抖动，减少无效告警。"
        }
    ],
    "w12-4": [
        {
            id: "w12-4-q1",
            question: "OpenTelemetry 统一了哪三种可观测性信号？",
            options: [
                "CPU、内存、磁盘",
                "Traces、Metrics、Logs",
                "HTTP、gRPC、WebSocket",
                "Dev、Staging、Prod"
            ],
            answer: 1,
            rationale: "OpenTelemetry 提供 Traces（追踪）、Metrics（指标）、Logs（日志）三种信号的统一采集和导出标准。"
        },
        {
            id: "w12-4-q2",
            question: "分布式追踪中 Trace ID 的作用是？",
            options: [
                "标识单个操作",
                "关联一个请求在分布式系统中的完整路径",
                "标识服务名称",
                "标识错误类型"
            ],
            answer: 1,
            rationale: "Trace ID 在请求入口生成，贯穿整个调用链路的所有 Span，用于关联跨服务的请求。"
        },
        {
            id: "w12-4-q3",
            question: "Grafana Loki 的核心设计理念是？",
            options: [
                "全文索引日志内容",
                "只索引标签，不索引日志内容，降低存储成本",
                "使用关系数据库存储",
                "实时流处理"
            ],
            answer: 1,
            rationale: "Loki 受 Prometheus 启发，只索引标签元数据，日志内容压缩存储，大幅降低存储成本和复杂性。"
        },
        {
            id: "w12-4-q4",
            question: "W3C Trace Context 标准使用哪个 HTTP 头传递追踪信息？",
            options: [
                "X-Trace-Id",
                "traceparent",
                "trace-context",
                "request-id"
            ],
            answer: 1,
            rationale: "W3C Trace Context 标准使用 traceparent 头传递 trace-id、parent-id、trace-flags，实现跨服务追踪上下文传播。"
        },
        {
            id: "w12-4-q5",
            question: "头部采样（Head-based Sampling）和尾部采样的区别是？",
            options: [
                "采样位置不同",
                "头部在请求入口决定是否采样，尾部在请求完成后根据特征决定",
                "采样率不同",
                "性能不同"
            ],
            answer: 1,
            rationale: "头部采样在请求入口概率性决定；尾部采样等请求完成后根据延迟、错误等特征决定，可以捕获更多异常情况。"
        },
        {
            id: "w12-4-q6",
            question: "如何实现日志与追踪的关联？",
            options: [
                "使用相同的存储",
                "在日志中注入 Trace ID，通过 Trace ID 关联日志和追踪",
                "使用相同的格式",
                "使用相同的协议"
            ],
            answer: 1,
            rationale: "在日志中包含 trace_id 字段，可以从追踪系统跳转到相关日志，加速问题定位。"
        },
        {
            id: "w12-4-q7",
            question: "OpenTelemetry Collector 的 Agent 模式有什么优势？",
            options: [
                "部署更简单",
                "与应用同节点部署，减少网络延迟和数据丢失风险",
                "处理能力更强",
                "成本更低"
            ],
            answer: 1,
            rationale: "Agent 模式在每个节点部署 Collector，数据就近采集和处理，减少网络延迟和跨网络传输的数据丢失风险。"
        },
        {
            id: "w12-4-q8",
            question: "结构化日志相比文本日志的优势是？",
            options: [
                "占用更少存储",
                "便于解析、查询和自动化分析",
                "人类更易阅读",
                "生成更快"
            ],
            answer: 1,
            rationale: "结构化日志（如 JSON）有固定格式，便于日志系统解析、建立索引、执行复杂查询和自动化告警。"
        },
        {
            id: "w12-4-q9",
            question: "Jaeger 支持哪些存储后端？",
            options: [
                "只支持内存",
                "Elasticsearch、Cassandra、Kafka、BadgerDB 等多种后端",
                "只支持 MySQL",
                "只支持文件系统"
            ],
            answer: 1,
            rationale: "Jaeger 支持多种存储后端包括 Elasticsearch、Cassandra、Kafka、BadgerDB、Memory 等，可根据规模和需求选择。"
        },
        {
            id: "w12-4-q10",
            question: "Span 代表什么？",
            options: [
                "完整的请求路径",
                "分布式追踪中的一个操作单元",
                "一条日志",
                "一个指标"
            ],
            answer: 1,
            rationale: "Span 是分布式追踪的基本单元，代表一个操作（如 HTTP 请求、数据库查询），包含时间、标签、事件等信息。"
        },
        {
            id: "w12-4-q11",
            question: "追踪和日志采集的性能开销如何控制？",
            options: [
                "无法控制",
                "使用异步批量导出、合理采样率、控制属性数量",
                "增加服务器",
                "减少日志级别"
            ],
            answer: 1,
            rationale: "控制开销的方法：异步批量导出减少 I/O，合理采样率减少数据量，控制 Span 属性数量减少序列化开销。"
        },
        {
            id: "w12-4-q12",
            question: "LogQL 是什么？",
            options: [
                "SQL 扩展",
                "Grafana Loki 的日志查询语言，语法受 PromQL 启发",
                "JSON 格式",
                "配置文件格式"
            ],
            answer: 1,
            rationale: "LogQL 是 Loki 的查询语言，语法与 PromQL 类似，使用标签选择器过滤日志流，支持正则匹配和聚合操作。"
        }
    ]
}
