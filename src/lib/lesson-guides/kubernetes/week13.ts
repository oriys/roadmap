import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week13Guides: Record<string, LessonGuide> = {
    "w13-1": {
        lessonId: "w13-1",
        background: [
            "【Service Mesh 定义】Istio 官方文档：Service Mesh 是'an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes'——无需代码修改即可获得安全、可观测性和流量管理能力的基础设施层。",
            "【核心价值三支柱】官方文档：Service Mesh 提供三大核心能力——Security（mutual TLS encryption, policy management, and access control）；Traffic（canary deployments, A/B testing, load balancing, and failure recovery）；Observability（telemetry generation for service behavior monitoring）。",
            "【Sidecar 代理架构】官方文档：'By using application proxies, Istio lets you program application-aware traffic management, incredible observability, and robust security capabilities into your network'——通过应用代理实现应用感知的流量管理。基于 Envoy，'the industry standard gateway proxy for cloud native applications'。",
            "【跨平台部署能力】官方文档：Istio'not confined to the boundaries of a single cluster, network or runtime — services running on Kubernetes or VMs, multi-cloud, hybrid, or on-premises, can be included'——支持跨集群、跨云、混合部署。",
            "【SMI 标准化努力】SMI 规范（CNCF 存档项目）：定义'A standard interface for service meshes on Kubernetes'——基于 CRD 的标准化接口。支持三大功能：Traffic Policy（身份认证和传输加密）、Traffic Telemetry（错误率、延迟指标）、Traffic Management（服务间流量转移）。"
        ],
        keyDifficulties: [
            "【下沉治理价值】官方文档核心观点：'without code changes'——无需修改代码即可获得治理能力。传统方式需要在每个服务中用特定语言实现重试、超时、熔断逻辑；网格将这些能力下沉到代理层，应用只需关注业务逻辑。跨语言一致性是最大优势。",
            "【适用场景判断】官方文档：Service Mesh 适合需要'zero-trust security, observability, and advanced traffic management'的场景。多语言微服务架构、需要 mTLS 合规、需要统一流量治理时收益最大。单体应用、服务数量少、团队无 K8s 运维能力时，引入的复杂度可能超过收益。",
            "【Sidecar vs Ambient 模式】官方文档：传统 Sidecar 模式'application proxies'在每个 Pod 注入 Envoy，功能完整但资源开销大。Istio Ambient 模式使用共享的节点级代理（ztunnel），降低资源消耗但仍在演进中，功能集不如 Sidecar 完整。",
            "【SMI 标准化局限】SMI 规范虽然定义了'A standard interface for service meshes on Kubernetes'，但已被 CNCF 归档（Archived），各网格实现对 SMI 的支持程度不一。选型时应优先考虑网格原生 API 而非依赖 SMI 抽象层。",
            "【性能开销权衡】Envoy Sidecar 增加约 1-3ms 延迟和每 Pod 50-100MB 内存。官方建议：高性能场景可选择性启用功能（如只用 mTLS 不启用复杂路由规则），或考虑 Ambient 模式降低开销。"
        ],
        handsOnPath: [
            "评估当前架构：列出服务数量、编程语言、现有的服务治理方案（如 Spring Cloud、gRPC 拦截器）。评估哪些能力已经有，哪些需要网格提供。讨论引入网格的预期收益和成本。",
            "对比方案调研：了解 Istio（功能全面但复杂）、Linkerd（轻量但功能少）、Cilium Service Mesh（基于 eBPF）的差异。根据团队能力和需求选择合适方案。",
            "规划落地策略：从非核心服务开始试点；先启用可观测性（最低风险），再逐步启用 mTLS（安全）和流量治理（最后）。定义回滚策略和成功指标。",
            "性能基线测试：在引入网格前后分别进行压测，测量延迟 P50/P99、吞吐量、资源消耗。量化网格的性能影响，确保在可接受范围内。",
            "运维准备：团队学习网格核心概念和工具（istioctl、Kiali）；建立监控告警（控制面健康、代理注入状态）；制定故障排查手册（常见问题和解决方案）。"
        ],
        selfCheck: [
            "服务网格解决的核心问题是什么？为什么说它实现了「下沉治理」？与传统的服务治理方案（如 Spring Cloud）有什么区别？",
            "什么场景适合引入服务网格？什么场景可能不值得引入的复杂度？如何做出决策？",
            "Sidecar 模式和 Ambient 模式的区别是什么？各有什么优缺点？",
            "服务网格会带来哪些性能开销？如何量化和优化这些开销？",
            "如果你要在团队中推广服务网格，会采取什么策略？如何平衡收益和风险？"
        ],
        extensions: [
            "研究 eBPF 对服务网格的影响，了解 Cilium Service Mesh 如何用 eBPF 实现 Sidecar-less 架构，以及与传统 Sidecar 模式的性能对比。",
            "探索 CNCF 的服务网格接口（SMI）标准，了解它如何提供跨服务网格实现的抽象层，以及各网格对 SMI 的支持程度。",
            "学习 Gateway API 与服务网格的关系，了解 Kubernetes Gateway API 如何统一 Ingress 和网格网关的配置模型。",
            "研究多集群服务网格的挑战，了解 Istio Multi-Cluster 的架构模式（共享控制面 vs 独立控制面）和跨集群服务发现机制。"
        ],
        sourceUrls: [
            "https://istio.io/latest/docs/concepts/what-is-istio/",
            "https://linkerd.io/2/overview/",
            "https://istio.io/latest/docs/ops/deployment/architecture/"
        ]
    },
    "w13-2": {
        lessonId: "w13-2",
        background: [
            "【双平面架构】官方架构文档：Istio 分为数据面和控制面——数据面由'intelligent proxies (Envoy) deployed as sidecars'组成，处理服务间所有网络流量；控制面 istiod 负责管理和配置代理以路由流量、执行策略。",
            "【istiod 核心职责】官方文档：istiod 整合三大功能——Traffic Management（将高层路由规则转换为 Envoy 配置并运行时分发）；Service Discovery（抽象平台特定机制为 Envoy API 兼容格式）；Security & Certificates（作为 CA 管理 mTLS 证书和访问控制）。",
            "【Envoy 数据面能力】官方文档：Envoy 代理提供'Dynamic service discovery and load balancing, TLS termination and protocol support (HTTP/2, gRPC), Circuit breaking and health checks, Traffic splitting and fault injection, Rich telemetry collection'——全面的流量管理能力。",
            "【Sidecar 设计价值】官方文档：Sidecar 模式允许 Istio'enforce policies and extract telemetry without requiring code changes'——无需代码修改即可执行策略和收集遥测。Envoy 代理中介所有流量，istiod 编排其行为。",
            "【安装方式】官方文档：使用'istioctl install'命令安装，可通过'--set profile=demo'选择配置 profile。生产环境推荐使用 YAML 配置文件而非内联 --set 参数，'istioctl manifest generate'可预览清单而不实际部署。"
        ],
        keyDifficulties: [
            "【xDS 协议体系】官方文档：Envoy 通过 xDS 协议从 istiod 获取动态配置。核心协议包括：LDS（Listener Discovery Service）管理监听器、RDS（Route）管理路由、CDS（Cluster）管理集群定义、EDS（Endpoint）管理服务端点、SDS（Secret）管理证书密钥。",
            "【流量流向理解】官方调试文档：流量经过 Envoy 的配置链——Listeners（接收流量，15001 出站/15006 入站端口）→ Routes（决定请求路由到哪个集群）→ Clusters（定义服务端点通过 EDS）→ Endpoints（实际 Pod IP 和健康状态）。",
            "【proxy-status 命令】官方文档：'istioctl proxy-status'显示 Envoy 与 istiod 的同步状态——SYNCED（已同步）、NOT SENT（未发送）、STALE（过期）。这是排查配置下发问题的首要命令。",
            "【proxy-config 调试】官方文档：'istioctl proxy-config [clusters|listeners|routes|endpoints] <pod-name>'检查特定代理配置。'understanding Envoy clusters/listeners/routes/endpoints and how they all interact is essential for effective debugging'——理解交互是有效调试的基础。",
            "【安装 profile 选择】官方文档：default profile 适合生产环境；demo profile 包含更多组件用于学习。'istioctl manifest generate > manifest.yaml'可预览安装内容，'istioctl uninstall --purge'完全卸载。"
        ],
        handsOnPath: [
            "安装 Istio：下载 istioctl，执行 istioctl install --set profile=demo。验证安装：kubectl get pods -n istio-system。了解不同 profile（minimal/default/demo）的差异。",
            "启用 Sidecar 注入：为命名空间添加标签 kubectl label namespace default istio-injection=enabled。部署示例应用，验证 Pod 中包含 istio-proxy 容器。使用 kubectl describe pod 查看 init 容器。",
            "验证流量拦截：进入应用容器执行 curl 其他服务，观察请求经过 Envoy（通过访问日志或 Kiali）。使用 istioctl proxy-config clusters <pod> 查看代理知道的服务列表。",
            "部署可观测性组件：安装 Kiali（网格可视化）、Jaeger（追踪）、Prometheus/Grafana（指标）。在 Kiali 中查看服务拓扑图，发送请求观察追踪数据。",
            "调试配置下发：创建一个 VirtualService，使用 istioctl proxy-config routes <pod> 验证路由是否下发到代理。如果不生效，使用 istioctl analyze 检查配置问题。"
        ],
        selfCheck: [
            "Istio 的控制面和数据面分别由什么组成？istiod 整合了哪些功能？Envoy 在网格中扮演什么角色？",
            "xDS 协议是什么？LDS、RDS、CDS、EDS 分别管理什么配置？为什么 Envoy 需要动态配置？",
            "Sidecar 注入的工作原理是什么？init 容器做了什么？如何验证 Pod 是否正确注入了 Sidecar？",
            "如何调试 Istio 配置问题？istioctl proxy-config 命令有哪些常用子命令？istioctl analyze 的作用是什么？",
            "大型集群中如何优化 Istio 的资源消耗？Sidecar CRD 的作用是什么？"
        ],
        extensions: [
            "研究 Istio CNI 插件，了解如何使用 CNI 替代 init 容器进行流量重定向，避免 NET_ADMIN 权限需求。",
            "探索 WebAssembly（Wasm）扩展 Envoy，了解如何编写自定义过滤器实现业务特定的流量处理逻辑。",
            "学习 Istio 的多集群安装模式，了解主-从、多主、外部控制面等架构的适用场景和配置方法。",
            "研究 istioctl 的高级用法，如 istioctl bug-report（收集调试信息）、istioctl experimental（实验功能）等。"
        ],
        sourceUrls: [
            "https://istio.io/latest/docs/ops/deployment/architecture/",
            "https://istio.io/latest/docs/setup/install/istioctl/",
            "https://istio.io/latest/docs/ops/diagnostic-tools/proxy-cmd/"
        ]
    },
    "w13-3": {
        lessonId: "w13-3",
        background: [
            "Istio 的流量治理通过 VirtualService 和 DestinationRule 两个核心 CRD 实现。VirtualService 定义流量路由规则（如何到达服务），DestinationRule 定义目标策略（到达后如何处理）。两者配合实现金丝雀、熔断、故障注入等高级功能。",
            "VirtualService 支持基于请求属性的路由：按权重（金丝雀）、按 Header（A/B 测试）、按 URI（路径路由）。路由规则按顺序匹配，第一个匹配的规则生效。未匹配的请求走默认路由或返回错误。",
            "DestinationRule 定义服务子集（subsets）和流量策略。子集通过 Pod 标签选择不同版本（如 v1/v2）；流量策略包括负载均衡（ROUND_ROBIN/LEAST_CONN/RANDOM）、连接池、熔断器等。这些策略应用于到达目标服务的流量。",
            "熔断和故障注入是提高系统韧性的关键能力。熔断器通过限制连接数和请求队列防止级联故障；故障注入（延迟和中止）用于混沌工程测试，验证系统在异常条件下的行为。"
        ],
        keyDifficulties: [
            "理解 VirtualService 和 DestinationRule 的关系：VirtualService 的 destination.subset 引用 DestinationRule 定义的子集。没有 DestinationRule，VirtualService 的子集路由不会生效。常见错误是只配置了一个而忘记另一个。",
            "金丝雀发布的配置：VirtualService 使用 weight 字段分配流量比例（如 v1: 90%, v2: 10%）。权重必须加起来等于 100。DestinationRule 定义 v1 和 v2 子集对应的 Pod 标签（如 version: v1）。",
            "熔断器参数调优：connectionPool 控制连接限制（tcp.maxConnections、http.h2UpgradePolicy）；outlierDetection 配置异常检测（连续错误数、驱逐时间）。参数需要根据服务特性调整，过严会误伤正常请求，过松则失去保护作用。",
            "故障注入的使用场景：延迟注入（fault.delay）测试超时处理；中止注入（fault.abort）测试错误处理。建议在测试环境或 A/B 测试中使用，生产环境需谨慎。percentage 字段控制影响范围。"
        ],
        handsOnPath: [
            "部署多版本应用：创建同一服务的 v1 和 v2 版本（只有 Pod 标签 version 不同）。创建 DestinationRule 定义两个子集。验证两个版本都能正常访问。",
            "配置金丝雀发布：创建 VirtualService 将 10% 流量路由到 v2，90% 到 v1。发送多个请求，验证流量分配比例。逐步调整权重（20%, 50%, 100%）模拟完整发布过程。",
            "配置基于 Header 的路由：创建规则将带有 x-user: test 头的请求路由到 v2（内部测试），其他请求路由到 v1。使用 curl -H 'x-user: test' 验证路由生效。",
            "配置熔断器：在 DestinationRule 中设置 connectionPool 和 outlierDetection。使用压测工具（如 fortio）模拟高负载，观察熔断器触发（返回 503）。调整参数观察行为变化。",
            "实践故障注入：在 VirtualService 中添加 5 秒延迟（影响 50% 请求）。观察客户端超时处理。再添加 HTTP 500 中止，验证错误处理逻辑。测试完成后移除故障注入。"
        ],
        selfCheck: [
            "VirtualService 和 DestinationRule 各自的职责是什么？它们如何配合实现流量治理？",
            "如何配置金丝雀发布？VirtualService 的 weight 和 DestinationRule 的 subsets 如何关联？",
            "熔断器的工作原理是什么？connectionPool 和 outlierDetection 分别控制什么？如何调优这些参数？",
            "故障注入有哪些类型？在什么场景下使用？如何控制故障注入的影响范围？",
            "如果金丝雀路由不生效，应该从哪些方面排查？常见的配置错误有哪些？"
        ],
        extensions: [
            "研究 Istio 的流量镜像（Mirror）功能，了解如何将生产流量复制到测试环境进行验证，而不影响用户。",
            "探索 Istio 的请求重试和超时配置，了解如何在 VirtualService 中设置重试策略和超时，以及与应用层重试的关系。",
            "学习 EnvoyFilter CRD，了解如何直接修改 Envoy 配置实现 VirtualService/DestinationRule 不支持的高级功能。",
            "研究 Istio 与 Flagger 的集成，了解如何实现自动化的金丝雀发布，根据指标自动晋级或回滚。"
        ],
        sourceUrls: [
            "https://istio.io/latest/docs/concepts/traffic-management/",
            "https://istio.io/latest/docs/tasks/traffic-management/traffic-shifting/",
            "https://istio.io/latest/docs/tasks/traffic-management/circuit-breaking/"
        ]
    },
    "w13-4": {
        lessonId: "w13-4",
        background: [
            "Istio 的安全模型基于零信任原则：默认不信任任何流量，所有通信需要经过身份验证和授权。核心能力包括：mTLS（双向 TLS 加密）、身份认证（PeerAuthentication/RequestAuthentication）、访问控制（AuthorizationPolicy）。",
            "mTLS（双向 TLS）是网格安全的基石。Istio 为每个工作负载签发 X.509 证书（基于 ServiceAccount），Sidecar 自动进行 TLS 握手和证书轮换。服务间通信加密且双向认证，防止窃听和中间人攻击。",
            "PeerAuthentication 控制服务接收流量的 mTLS 要求：PERMISSIVE（允许 mTLS 和明文）、STRICT（仅允许 mTLS）、DISABLE（禁用 mTLS）。迁移期通常先用 PERMISSIVE，稳定后切换到 STRICT。",
            "AuthorizationPolicy 实现细粒度访问控制，支持 ALLOW、DENY、CUSTOM 三种动作。策略基于来源（from，如 ServiceAccount、命名空间）、操作（to，如 HTTP 方法、路径）和条件（when，如请求属性）进行匹配。"
        ],
        keyDifficulties: [
            "mTLS 模式的选择和迁移：新集群建议直接 STRICT；已有集群从 PERMISSIVE 开始，用 Kiali 观察哪些服务还有明文流量，逐步切换到 STRICT。端口级别配置允许特殊端口例外（如健康检查）。",
            "证书管理和 SPIFFE：Istio 使用 SPIFFE（Secure Production Identity Framework For Everyone）标准的身份格式：spiffe://cluster.local/ns/<namespace>/sa/<serviceaccount>。证书默认 24 小时轮换，可配置。外部 CA 集成需要额外配置。",
            "AuthorizationPolicy 的评估顺序：DENY 优先于 ALLOW。多个策略叠加时：先评估 CUSTOM，再 DENY，最后 ALLOW。没有匹配的 ALLOW 策略时，请求被拒绝（默认拒绝）。需要仔细设计策略避免意外阻断。",
            "JWT 认证（RequestAuthentication）：验证 JWT token 的签名和声明，但不强制携带 token。需要配合 AuthorizationPolicy 要求 requestPrincipals 存在来强制认证。支持多个 JWT 发行者配置。"
        ],
        handsOnPath: [
            "启用全局 mTLS：创建命名空间级别的 PeerAuthentication（mode: STRICT）。使用 Kiali 观察流量是否全部加密（锁图标）。尝试从非网格客户端访问，验证被拒绝。",
            "配置 AuthorizationPolicy 白名单：创建策略只允许 frontend 命名空间访问 backend 服务。从 frontend Pod 访问成功，从其他命名空间访问被拒绝（403）。",
            "配置 HTTP 方法和路径限制：创建策略只允许 GET /api/public/*，禁止 POST /api/admin/*。测试不同请求组合，验证策略生效。",
            "集成 JWT 认证：配置 RequestAuthentication 指定 JWT issuer 和 jwksUri。创建 AuthorizationPolicy 要求 requestPrincipals 存在。测试带 token 和不带 token 的请求。",
            "调试安全策略：使用 istioctl analyze 检查策略配置。使用 kubectl logs -n istio-system istiod 查看控制面日志。使用 istioctl proxy-config log <pod> --level debug 开启代理调试日志。"
        ],
        selfCheck: [
            "Istio 的零信任安全模型包含哪些核心能力？它们如何协同工作？",
            "mTLS 的三种模式（PERMISSIVE/STRICT/DISABLE）分别是什么含义？如何规划从 PERMISSIVE 迁移到 STRICT？",
            "AuthorizationPolicy 的评估顺序是什么？如何设计策略避免意外阻断合法请求？",
            "RequestAuthentication 和 AuthorizationPolicy 如何配合实现 JWT 认证强制？为什么只有 RequestAuthentication 不够？",
            "如何调试 Istio 安全策略导致的访问拒绝问题？有哪些常用的排查工具和方法？"
        ],
        extensions: [
            "研究 Istio 的外部授权（CUSTOM action），了解如何集成外部授权服务（如 OPA、Authzed）实现更复杂的访问控制逻辑。",
            "探索 Istio 的审计日志功能，了解如何记录所有访问控制决策用于合规审计。",
            "学习 Istio 与 SPIRE 的集成，了解如何使用外部 SPIFFE 身份提供者替代 Istio 内置 CA。",
            "研究 Istio 的 Egress 安全控制，了解如何控制网格内服务对外部服务的访问，防止数据泄露。"
        ],
        sourceUrls: [
            "https://istio.io/latest/docs/concepts/security/",
            "https://istio.io/latest/docs/tasks/security/authentication/mtls-migration/",
            "https://istio.io/latest/docs/tasks/security/authorization/"
        ]
    }
}

export const week13Quizzes: Record<string, QuizQuestion[]> = {
    "w13-1": [
        {
            id: "w13-1-q1",
            question: "官方文档对 Service Mesh 的定义是什么？",
            options: [
                "一种容器编排平台",
                "一种微服务框架",
                "'an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes'",
                "一种 API 网关解决方案"
            ],
            answer: 2,
            rationale: "Istio 官方文档明确定义：Service Mesh 是'an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes'——无需代码修改的基础设施层。"
        },
        {
            id: "w13-1-q2",
            question: "官方文档描述的 Service Mesh 三大核心能力是什么？",
            options: [
                "Security（安全）、Traffic（流量管理）、Observability（可观测性）",
                "日志、指标、追踪",
                "部署、监控、告警",
                "构建、测试、发布"
            ],
            answer: 0,
            rationale: "官方文档：Service Mesh 提供三大核心能力——Security（mutual TLS encryption, policy management）；Traffic（canary deployments, A/B testing, load balancing）；Observability（telemetry generation）。"
        },
        {
            id: "w13-1-q3",
            question: "官方文档对 Istio 使用的代理的描述是什么？",
            options: [
                "自研的轻量代理",
                "NGINX 代理",
                "HAProxy",
                "Envoy——'the industry standard gateway proxy for cloud native applications'"
            ],
            answer: 3,
            rationale: "官方文档明确指出 Istio 基于 Envoy，'the industry standard gateway proxy for cloud native applications'——云原生应用的行业标准网关代理。"
        },
        {
            id: "w13-1-q4",
            question: "「下沉治理」的核心价值是什么？",
            options: [
                "提高应用性能",
                "减少服务数量",
                "'without code changes'——无需修改应用代码即可获得治理能力",
                "简化数据库操作"
            ],
            answer: 2,
            rationale: "官方文档核心观点：'without code changes'——服务网格将重试、超时、熔断等能力下沉到代理层，应用无需修改代码即可获得这些能力。"
        },
        {
            id: "w13-1-q5",
            question: "官方文档对 Istio 跨平台能力的描述是什么？",
            options: [
                "只支持 Kubernetes",
                "只支持单集群部署",
                "'not confined to the boundaries of a single cluster, network or runtime'——支持跨集群、跨云、混合部署",
                "只支持云环境"
            ],
            answer: 2,
            rationale: "官方文档：Istio 'not confined to the boundaries of a single cluster, network or runtime — services running on Kubernetes or VMs, multi-cloud, hybrid, or on-premises, can be included'。"
        },
        {
            id: "w13-1-q6",
            question: "SMI 规范的定义和当前状态是什么？",
            options: [
                "'A standard interface for service meshes on Kubernetes'——CNCF 归档项目",
                "Istio 的官方 API",
                "Kubernetes 内置功能",
                "AWS 专有标准"
            ],
            answer: 0,
            rationale: "SMI 规范定义'A standard interface for service meshes on Kubernetes'——基于 CRD 的标准化接口，但已被 CNCF 归档（Archived），各网格支持程度不一。"
        },
        {
            id: "w13-1-q7",
            question: "Sidecar 模式的主要缺点是什么？",
            options: [
                "不支持 HTTP 协议",
                "无法实现 mTLS",
                "不支持流量管理",
                "每个 Pod 都需要代理，资源开销大（约 50-100MB/Pod）"
            ],
            answer: 3,
            rationale: "Sidecar 模式为每个 Pod 注入 Envoy 代理，消耗额外资源（约 50-100MB/Pod）。在大规模集群中资源开销显著，这是推动 Ambient 模式发展的原因。"
        },
        {
            id: "w13-1-q8",
            question: "Istio Ambient 模式与传统 Sidecar 模式的区别是什么？",
            options: [
                "Ambient 功能更完整",
                "Ambient 使用共享的节点级代理（ztunnel），资源开销更低",
                "Ambient 需要修改应用代码",
                "Ambient 只支持 TCP 协议"
            ],
            answer: 1,
            rationale: "Ambient 模式使用节点级共享代理（ztunnel）替代每 Pod 的 Sidecar，降低资源消耗。但仍在演进中，功能集不如 Sidecar 完整。"
        },
        {
            id: "w13-1-q9",
            question: "引入服务网格会增加约多少延迟？",
            options: [
                "约 100ms",
                "约 1 秒",
                "约 1-3ms",
                "0ms，没有额外延迟"
            ],
            answer: 2,
            rationale: "Sidecar 代理会增加约 1-3ms 的延迟（取决于配置和硬件）。对于大多数应用可以接受，但高性能场景需要评估和权衡。"
        },
        {
            id: "w13-1-q10",
            question: "与 Spring Cloud 等应用层治理方案相比，服务网格的最大优势是什么？",
            options: [
                "配置更简单",
                "性能更高",
                "不需要 Kubernetes",
                "跨语言一致性，不需要每个语言实现治理逻辑"
            ],
            answer: 3,
            rationale: "服务网格的最大优势是语言无关。Spring Cloud 只能用于 Java，而网格可以为 Go、Python、Node.js 等所有语言提供一致的治理能力，这正是'without code changes'的体现。"
        },
        {
            id: "w13-1-q11",
            question: "推广服务网格的建议策略是什么？",
            options: [
                "一次性全集群启用所有功能",
                "先启用复杂的流量治理规则",
                "从核心业务服务开始",
                "从非核心服务开始试点，先启用可观测性"
            ],
            answer: 3,
            rationale: "建议从非核心服务开始试点，降低风险。先启用可观测性（风险最低），再逐步启用 mTLS 和流量治理，积累经验后推广到核心服务。"
        },
        {
            id: "w13-1-q12",
            question: "以下哪种场景最适合引入服务网格？",
            options: [
                "单体应用",
                "多语言微服务架构且需要 zero-trust security 和统一流量治理",
                "服务数量少于 5 个的小型系统",
                "对延迟极度敏感的高频交易系统"
            ],
            answer: 1,
            rationale: "官方文档强调 Service Mesh 适合需要'zero-trust security, observability, and advanced traffic management'的场景。多语言微服务架构中收益最大，单体、小型系统或极端延迟敏感场景可能不值得引入复杂度。"
        }
    ],
    "w13-2": [
        {
            id: "w13-2-q1",
            question: "官方架构文档对 Istio 数据面的描述是什么？",
            options: [
                "由 istiod 组件组成",
                "由 Kubernetes API Server 管理",
                "'intelligent proxies (Envoy) deployed as sidecars'——作为 Sidecar 部署的智能代理",
                "由 Prometheus 组成"
            ],
            answer: 2,
            rationale: "官方架构文档明确：数据面由'intelligent proxies (Envoy) deployed as sidecars'组成，处理服务间所有网络流量。"
        },
        {
            id: "w13-2-q2",
            question: "官方文档描述的 istiod 三大核心职责是什么？",
            options: [
                "Traffic Management、Service Discovery、Security & Certificates",
                "日志收集、指标暴露、追踪生成",
                "Pod 调度、资源分配、存储管理",
                "代码编译、镜像构建、部署推送"
            ],
            answer: 0,
            rationale: "官方文档：istiod 整合三大功能——Traffic Management（配置分发）、Service Discovery（服务发现抽象）、Security & Certificates（证书和访问控制管理）。"
        },
        {
            id: "w13-2-q3",
            question: "官方文档描述的 Envoy 数据面能力不包括哪项？",
            options: [
                "Dynamic service discovery",
                "TLS termination",
                "数据库事务管理",
                "Circuit breaking"
            ],
            answer: 2,
            rationale: "官方文档列出 Envoy 能力：Dynamic service discovery, TLS termination, Circuit breaking, Traffic splitting, Rich telemetry。数据库事务管理是应用层功能。"
        },
        {
            id: "w13-2-q4",
            question: "官方文档对 Sidecar 模式核心价值的描述是什么？",
            options: [
                "提高应用性能",
                "简化代码开发",
                "减少网络延迟",
                "'enforce policies and extract telemetry without requiring code changes'"
            ],
            answer: 3,
            rationale: "官方文档：Sidecar 模式允许 Istio'enforce policies and extract telemetry without requiring code changes'——无需代码修改即可执行策略和收集遥测。"
        },
        {
            id: "w13-2-q5",
            question: "xDS 协议中 EDS 的全称和职责是什么？",
            options: [
                "Event Discovery Service——管理事件",
                "Endpoint Discovery Service——管理服务端点",
                "Extension Discovery Service——管理扩展",
                "Encryption Discovery Service——管理加密"
            ],
            answer: 1,
            rationale: "xDS 协议中 EDS 是 Endpoint Discovery Service，负责管理服务端点信息，即服务背后的实际 Pod IP 列表。"
        },
        {
            id: "w13-2-q6",
            question: "官方调试文档描述的流量经过 Envoy 的配置链顺序是什么？",
            options: [
                "Clusters → Routes → Listeners → Endpoints",
                "Endpoints → Clusters → Routes → Listeners",
                "Routes → Listeners → Endpoints → Clusters",
                "Listeners → Routes → Clusters → Endpoints"
            ],
            answer: 3,
            rationale: "官方文档：流量流向为 Listeners（接收流量）→ Routes（决定路由）→ Clusters（定义服务）→ Endpoints（实际 Pod IP）。"
        },
        {
            id: "w13-2-q7",
            question: "istioctl proxy-status 命令显示的同步状态有哪些？",
            options: [
                "SYNCED、NOT SENT、STALE",
                "OK、ERROR、PENDING",
                "READY、NOT READY、UNKNOWN",
                "ACTIVE、INACTIVE、FAILED"
            ],
            answer: 0,
            rationale: "官方文档：'istioctl proxy-status'显示 Envoy 与 istiod 的同步状态——SYNCED（已同步）、NOT SENT（未发送）、STALE（过期）。"
        },
        {
            id: "w13-2-q8",
            question: "查看 Pod 的 Envoy 路由配置应该使用什么命令？",
            options: [
                "kubectl describe pod",
                "kubectl logs istio-proxy",
                "istioctl proxy-config routes <pod>",
                "istioctl analyze"
            ],
            answer: 2,
            rationale: "官方文档：'istioctl proxy-config [clusters|listeners|routes|endpoints] <pod-name>'检查特定代理配置，routes 子命令查看路由配置。"
        },
        {
            id: "w13-2-q9",
            question: "安装 Istio 时如何使用 demo profile？",
            options: [
                "istioctl install --profile demo",
                "istioctl install -f demo.yaml",
                "istioctl install --demo",
                "istioctl install --set profile=demo"
            ],
            answer: 3,
            rationale: "官方文档：使用'istioctl install --set profile=demo'选择 demo profile 安装，demo 包含更多组件用于学习和演示。"
        },
        {
            id: "w13-2-q10",
            question: "官方文档对 default 和 demo profile 的区别描述是什么？",
            options: [
                "两者完全相同",
                "default 适合生产环境，demo 包含更多组件用于学习",
                "demo 适合生产环境，default 用于学习",
                "都不适合生产环境"
            ],
            answer: 1,
            rationale: "官方文档：default profile 适合生产环境（suits production environments better than the larger demo profile），demo 包含更多可观测性组件用于学习。"
        },
        {
            id: "w13-2-q11",
            question: "预览 Istio 安装内容而不实际部署应使用什么命令？",
            options: [
                "istioctl preview",
                "istioctl install --dry-run",
                "istioctl manifest generate > manifest.yaml",
                "istioctl plan"
            ],
            answer: 2,
            rationale: "官方文档：'istioctl manifest generate > manifest.yaml'可以预览安装清单而不实际部署（Preview the installation without deploying）。"
        },
        {
            id: "w13-2-q12",
            question: "官方文档对有效调试 Envoy 的关键建议是什么？",
            options: [
                "只需查看日志即可",
                "重启 Pod 解决大多数问题",
                "直接修改 Envoy 配置文件",
                "'understanding Envoy clusters/listeners/routes/endpoints and how they all interact is essential'"
            ],
            answer: 3,
            rationale: "官方调试文档强调：'understanding Envoy clusters/listeners/routes/endpoints and how they all interact is essential for effective debugging'——理解组件交互是有效调试的基础。"
        }
    ],
    "w13-3": [
        {
            id: "w13-3-q1",
            question: "VirtualService 和 DestinationRule 的关系是什么？",
            options: [
                "两者功能完全相同",
                "VirtualService 定义路由规则，DestinationRule 定义目标策略",
                "DestinationRule 必须先于 VirtualService 创建",
                "它们不能同时使用"
            ],
            answer: 1,
            rationale: "VirtualService 定义流量如何路由到服务（路由规则），DestinationRule 定义到达目标后的处理策略（负载均衡、熔断、子集）。"
        },
        {
            id: "w13-3-q2",
            question: "如何配置金丝雀发布将 10% 流量路由到 v2 版本？",
            options: [
                "只配置 DestinationRule",
                "在 VirtualService 中设置 weight: 10 到 v2 子集",
                "修改 Deployment 副本数",
                "配置 HPA"
            ],
            answer: 1,
            rationale: "VirtualService 的 route.destination.weight 字段控制流量比例。设置 v1: 90, v2: 10 实现 10% 金丝雀流量。"
        },
        {
            id: "w13-3-q3",
            question: "DestinationRule 的 subsets 如何选择 Pod？",
            options: [
                "通过 Pod 名称",
                "通过 Pod 标签（如 version: v1）",
                "通过命名空间",
                "通过 IP 地址"
            ],
            answer: 1,
            rationale: "DestinationRule 的 subsets 通过 labels 字段匹配 Pod 标签。例如 labels: {version: v1} 选择所有带有 version=v1 标签的 Pod。"
        },
        {
            id: "w13-3-q4",
            question: "熔断器在 Istio 中通过什么资源配置？",
            options: [
                "VirtualService",
                "DestinationRule 的 trafficPolicy",
                "PeerAuthentication",
                "AuthorizationPolicy"
            ],
            answer: 1,
            rationale: "熔断器通过 DestinationRule 的 trafficPolicy.connectionPool 和 outlierDetection 配置，控制连接限制和异常检测。"
        },
        {
            id: "w13-3-q5",
            question: "Istio 故障注入支持哪些类型？",
            options: [
                "只支持延迟注入",
                "延迟（delay）和中止（abort）",
                "只支持网络分区",
                "只支持 CPU 压力"
            ],
            answer: 1,
            rationale: "Istio 支持两种故障注入：delay（模拟网络延迟或服务过载）和 abort（模拟服务错误，返回 HTTP 错误码或 TCP 失败）。"
        },
        {
            id: "w13-3-q6",
            question: "VirtualService 路由规则的匹配顺序是什么？",
            options: [
                "随机匹配",
                "按定义顺序，第一个匹配的规则生效",
                "同时应用所有规则",
                "按优先级字段排序"
            ],
            answer: 1,
            rationale: "VirtualService 的路由规则按定义顺序从上到下匹配，第一个匹配的规则生效。因此更具体的规则应该放在前面。"
        },
        {
            id: "w13-3-q7",
            question: "如果只创建了 VirtualService 的子集路由但没有 DestinationRule，会怎样？",
            options: [
                "路由正常工作",
                "路由不生效，因为子集未定义",
                "自动创建默认 DestinationRule",
                "istiod 会报错"
            ],
            answer: 1,
            rationale: "VirtualService 的 destination.subset 引用 DestinationRule 定义的子集。如果 DestinationRule 不存在或没有定义对应子集，路由不会生效。"
        },
        {
            id: "w13-3-q8",
            question: "outlierDetection 的作用是什么？",
            options: [
                "检测恶意流量",
                "检测并驱逐异常的服务实例",
                "检测配置错误",
                "检测证书过期"
            ],
            answer: 1,
            rationale: "outlierDetection 配置异常检测，当某个实例连续出错超过阈值时，将其从负载均衡池中临时驱逐，防止持续向故障实例发送请求。"
        },
        {
            id: "w13-3-q9",
            question: "如何配置基于 HTTP Header 的路由（A/B 测试）？",
            options: [
                "使用 DestinationRule",
                "在 VirtualService 的 match 条件中匹配 headers",
                "修改 Service 选择器",
                "使用 NetworkPolicy"
            ],
            answer: 1,
            rationale: "VirtualService 的 match.headers 字段可以匹配 HTTP 请求头。例如 match: headers: x-user: exact: test 将测试用户路由到特定版本。"
        },
        {
            id: "w13-3-q10",
            question: "connectionPool.tcp.maxConnections 的作用是什么？",
            options: [
                "限制 Envoy 的内存使用",
                "限制到目标服务的最大 TCP 连接数",
                "限制请求速率",
                "限制响应大小"
            ],
            answer: 1,
            rationale: "maxConnections 限制 Envoy 到上游服务的最大 TCP 连接数。超过限制的请求会排队或返回错误，是熔断的一部分。"
        },
        {
            id: "w13-3-q11",
            question: "故障注入的 percentage 字段用于什么？",
            options: [
                "设置错误码",
                "控制受影响请求的比例",
                "设置延迟时间",
                "设置重试次数"
            ],
            answer: 1,
            rationale: "percentage.value 控制故障注入影响的请求百分比。例如 percentage: value: 50 表示 50% 的请求会受到故障注入影响。"
        },
        {
            id: "w13-3-q12",
            question: "VirtualService 的 weight 字段的总和必须是多少？",
            options: [
                "1",
                "10",
                "100",
                "任意值"
            ],
            answer: 2,
            rationale: "VirtualService 中同一规则的所有 destination 的 weight 必须加起来等于 100，表示百分比分配。"
        },
        {
            id: "w13-3-q13",
            question: "流量镜像（Mirror）的用途是什么？",
            options: [
                "加密流量",
                "将生产流量复制到测试环境进行验证",
                "记录流量日志",
                "限制流量速率"
            ],
            answer: 1,
            rationale: "流量镜像将真实流量的副本发送到另一个服务（如测试环境），用于验证新版本，而不影响用户。镜像请求是「发后即忘」的。"
        },
        {
            id: "w13-3-q14",
            question: "以下哪个不是 DestinationRule 支持的负载均衡策略？",
            options: [
                "ROUND_ROBIN",
                "LEAST_CONN",
                "RANDOM",
                "PRIORITY"
            ],
            answer: 3,
            rationale: "DestinationRule 支持 ROUND_ROBIN（轮询）、LEAST_CONN（最少连接）、RANDOM（随机）、PASSTHROUGH（直通）。没有 PRIORITY 策略。"
        },
        {
            id: "w13-3-q15",
            question: "如果金丝雀路由不生效，应该首先检查什么？",
            options: [
                "Kubernetes 版本",
                "DestinationRule 的 subsets 是否正确定义，VirtualService 是否引用正确",
                "网络带宽",
                "CPU 使用率"
            ],
            answer: 1,
            rationale: "金丝雀路由不生效的常见原因：DestinationRule 未创建或 subsets 未定义；VirtualService 引用的 subset 名称拼写错误；Pod 标签与 subset 定义不匹配。"
        }
    ],
    "w13-4": [
        {
            id: "w13-4-q1",
            question: "Istio 的 mTLS 提供什么能力？",
            options: [
                "只加密流量",
                "加密流量并双向身份验证",
                "只验证客户端身份",
                "只验证服务端身份"
            ],
            answer: 1,
            rationale: "mTLS（双向 TLS）同时加密流量和验证双方身份。客户端和服务端都需要提供证书，确保通信双方都是可信的。"
        },
        {
            id: "w13-4-q2",
            question: "PeerAuthentication 的 STRICT 模式意味着什么？",
            options: [
                "允许 mTLS 和明文流量",
                "只允许 mTLS 流量，拒绝明文",
                "禁用所有安全功能",
                "只验证 JWT"
            ],
            answer: 1,
            rationale: "STRICT 模式只接受 mTLS 加密流量，明文请求会被拒绝。适合在迁移完成后全面启用，确保所有通信加密。"
        },
        {
            id: "w13-4-q3",
            question: "从 PERMISSIVE 迁移到 STRICT mTLS 的建议策略是什么？",
            options: [
                "直接切换到 STRICT",
                "在 Kiali 观察还有哪些明文流量，逐步迁移后切换",
                "禁用 mTLS",
                "等待自动切换"
            ],
            answer: 1,
            rationale: "建议先用 PERMISSIVE 模式允许混合流量，用 Kiali 或指标观察哪些服务还有明文通信，确保所有服务都支持 mTLS 后再切换到 STRICT。"
        },
        {
            id: "w13-4-q4",
            question: "AuthorizationPolicy 的评估顺序是什么？",
            options: [
                "ALLOW -> DENY -> CUSTOM",
                "CUSTOM -> DENY -> ALLOW",
                "DENY -> ALLOW -> CUSTOM",
                "按创建时间顺序"
            ],
            answer: 1,
            rationale: "AuthorizationPolicy 评估顺序：先 CUSTOM（外部授权），再 DENY（任一匹配则拒绝），最后 ALLOW（任一匹配则允许）。DENY 优先于 ALLOW。"
        },
        {
            id: "w13-4-q5",
            question: "如何配置只允许来自 frontend 命名空间的请求？",
            options: [
                "使用 VirtualService",
                "在 AuthorizationPolicy 的 from.source.namespaces 指定 frontend",
                "使用 NetworkPolicy",
                "配置 DestinationRule"
            ],
            answer: 1,
            rationale: "AuthorizationPolicy 的 rules.from.source.namespaces 字段可以限制请求来源命名空间。配合 ALLOW action 实现命名空间级别的访问控制。"
        },
        {
            id: "w13-4-q6",
            question: "RequestAuthentication 和 AuthorizationPolicy 如何配合实现 JWT 强制认证？",
            options: [
                "只需要 RequestAuthentication",
                "RequestAuthentication 验证 token，AuthorizationPolicy 要求 requestPrincipals 存在",
                "只需要 AuthorizationPolicy",
                "需要修改应用代码"
            ],
            answer: 1,
            rationale: "RequestAuthentication 验证 JWT 的有效性但不强制携带。需要配合 AuthorizationPolicy 的 from.source.requestPrincipals 条件，要求必须有有效的身份。"
        },
        {
            id: "w13-4-q7",
            question: "Istio 使用什么标准定义服务身份？",
            options: [
                "OAuth 2.0",
                "SPIFFE",
                "LDAP",
                "Kerberos"
            ],
            answer: 1,
            rationale: "Istio 使用 SPIFFE（Secure Production Identity Framework For Everyone）标准，身份格式为 spiffe://cluster.local/ns/<namespace>/sa/<serviceaccount>。"
        },
        {
            id: "w13-4-q8",
            question: "AuthorizationPolicy 中没有任何 ALLOW 规则时会怎样？",
            options: [
                "允许所有流量",
                "默认拒绝所有流量",
                "使用上级策略",
                "报错"
            ],
            answer: 1,
            rationale: "如果有 AuthorizationPolicy 但没有 ALLOW 规则匹配请求，请求会被拒绝（默认拒绝原则）。这是零信任模型的体现。"
        },
        {
            id: "w13-4-q9",
            question: "Istio 证书的默认轮换周期是多少？",
            options: [
                "1 小时",
                "24 小时",
                "7 天",
                "30 天"
            ],
            answer: 1,
            rationale: "Istio 工作负载证书默认 24 小时轮换。这个周期可以配置，频繁轮换增加安全性但也增加控制面负载。"
        },
        {
            id: "w13-4-q10",
            question: "如何限制只允许 GET 方法访问 /api/public 路径？",
            options: [
                "使用 VirtualService",
                "在 AuthorizationPolicy 的 to.operation 指定 methods 和 paths",
                "使用 NetworkPolicy",
                "配置 Ingress"
            ],
            answer: 1,
            rationale: "AuthorizationPolicy 的 rules.to.operation.methods 和 paths 字段可以限制 HTTP 方法和路径。配合 ALLOW action 实现细粒度访问控制。"
        },
        {
            id: "w13-4-q11",
            question: "PERMISSIVE mTLS 模式的用途是什么？",
            options: [
                "生产环境最佳实践",
                "迁移期间允许同时接受 mTLS 和明文流量",
                "禁用安全功能",
                "仅用于测试"
            ],
            answer: 1,
            rationale: "PERMISSIVE 模式允许服务同时接受加密和明文流量，用于迁移期间。非网格客户端可以继续访问，逐步迁移到全 mTLS。"
        },
        {
            id: "w13-4-q12",
            question: "以下哪个不是 AuthorizationPolicy 的有效 action？",
            options: [
                "ALLOW",
                "DENY",
                "CUSTOM",
                "REJECT"
            ],
            answer: 3,
            rationale: "AuthorizationPolicy 支持三种 action：ALLOW（允许匹配请求）、DENY（拒绝匹配请求）、CUSTOM（委托外部授权服务）。没有 REJECT。"
        },
        {
            id: "w13-4-q13",
            question: "RequestAuthentication 对没有携带 JWT 的请求会怎样处理？",
            options: [
                "直接拒绝",
                "默认接受（不强制携带 token）",
                "返回 401",
                "转发到认证服务"
            ],
            answer: 1,
            rationale: "RequestAuthentication 只验证携带的 token 是否有效，不强制要求携带 token。无 token 的请求默认被接受，需要 AuthorizationPolicy 强制认证。"
        },
        {
            id: "w13-4-q14",
            question: "如何调试 Istio 授权策略导致的 403 错误？",
            options: [
                "重启 Pod",
                "检查 AuthorizationPolicy 配置，使用 istioctl analyze 和代理日志",
                "增加超时时间",
                "修改 Service 端口"
            ],
            answer: 1,
            rationale: "排查 403 错误应检查 AuthorizationPolicy 配置是否正确、使用 istioctl analyze 检查问题、查看 Envoy 访问日志确定拒绝原因。"
        },
        {
            id: "w13-4-q15",
            question: "PeerAuthentication 支持端口级别配置的用途是什么？",
            options: [
                "提高性能",
                "允许特定端口（如健康检查）不使用 mTLS",
                "配置负载均衡",
                "设置超时"
            ],
            answer: 1,
            rationale: "端口级别配置允许为特定端口设置不同的 mTLS 模式。例如健康检查端口可以设置为 DISABLE，而其他端口保持 STRICT。"
        }
    ]
}
