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
            "【VirtualService 职责】官方文档：VirtualService'configure how requests are routed to a service within an Istio service mesh'——定义请求如何路由到服务。支持匹配条件（headers、URIs、ports）和加权流量分配，实现 A/B 测试、金丝雀发布和流量分割。",
            "【DestinationRule 职责】官方文档：DestinationRule 在 VirtualService 路由之后应用于实际目标，职责包括——定义按标签分组的服务子集（subsets）、指定负载均衡算法、配置连接池和熔断阈值、设置 TLS 模式和异常检测策略。",
            "【路由规则顺序】官方文档：路由规则'evaluated in sequential order from top to bottom'——从上到下顺序评估，第一个匹配的规则生效。Match 条件支持精确值、URI 前缀和正则模式匹配。",
            "【金丝雀流量配置】官方文档：使用 VirtualService 的 weight 字段'configure a sequence of routing rules that redirect a percentage of traffic from one destination to another'——配置流量百分比重定向。典型流程：100% v1 → 50/50 分割 → 100% v3。",
            "【熔断配置模型】官方文档：通过 DestinationRule 的 trafficPolicy 配置熔断——connectionPool 控制连接和请求限制（tcp.maxConnections、http.http1MaxPendingRequests）；outlierDetection 检测并驱逐不健康实例（consecutive5xxErrors、interval、baseEjectionTime）。超过阈值返回 503。"
        ],
        keyDifficulties: [
            "【VS/DR 依赖关系】官方文档：VirtualService 的 destination.subset 引用 DestinationRule 中定义的子集。DestinationRule 使用 Kubernetes labels 将服务实例分组为'subsets such as all instances with a certain version'。没有 DestinationRule 定义子集，VirtualService 的子集路由不会生效。",
            "【路由匹配机制】官方文档：路由规则'evaluated in sequential order from top to bottom, with the first rule in the list having highest priority'——第一个匹配的规则生效。Match 条件支持 exact（精确匹配）、prefix（前缀匹配）和 regex（正则匹配）。",
            "【熔断阈值语义】官方文档：outlierDetection 的 consecutive5xxErrors 定义'the number of consecutive 5xx errors before a host is ejected'——连续 5xx 错误导致驱逐；baseEjectionTime 是'minimum eviction duration'——最小驱逐时间。超过 connectionPool 阈值返回 503。",
            "【流量权重规则】官方文档：金丝雀发布使用 weight 字段，'configure a sequence of routing rules that redirect a percentage of traffic from one destination to another'。所有 destination 的 weight 总和必须为 100。典型流程：100% v1 → 90/10 → 50/50 → 100% v2。",
            "【故障注入类型】官方文档：VirtualService 的 fault 字段支持两种注入——delay'used to mimic increased network latency or an overloaded upstream service'；abort'used to mimic failures in upstream services'。percentage.value 控制受影响请求的比例。"
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
            "【零信任架构】官方文档：Istio 实现'security by default: no changes needed to application code and infrastructure'——默认安全无需修改应用代码。基于零信任原则，假设所有流量都需要验证，提供'defense in depth: integrate with existing security systems to provide multiple layers of defense'多层防御。",
            "【双向认证机制】官方文档：Peer Authentication（mTLS）保护服务间通信，支持三种模式——PERMISSIVE（接受加密和明文，迁移友好）、STRICT（仅接受 mTLS）、DISABLE（不推荐）。Request Authentication 通过 JWT 验证终端用户凭证。",
            "【证书自动管理】官方文档：istiod 控制面自动管理 X.509 证书，处理工作负载代理的证书签名请求，执行周期性轮换'without manual intervention'——无需人工干预。证书绑定服务身份，防止冒充攻击。",
            "【授权策略类型】官方文档：AuthorizationPolicy CRD 支持三种动作——ALLOW rules（允许访问）、DENY rules（拒绝访问，'evaluated first for security'优先评估）、CUSTOM rules（委托外部授权系统）。策略基于工作负载选择器和请求属性（principals、namespaces、HTTP methods、paths）匹配。",
            "【安全命名机制】官方文档：'Server identities are encoded in certificates, but service names are retrieved through the discovery service or DNS'——服务器身份编码在证书中，服务名通过发现服务获取。这种绑定防止恶意行为者使用有效证书冒充未授权服务。"
        ],
        keyDifficulties: [
            "【mTLS 迁移策略】官方文档：建议三阶段迁移——首先 PERMISSIVE 模式'automatically configures workload sidecars to use mutual TLS when calling other workloads'；然后逐命名空间启用 STRICT；最后'deploy the authentication policy to the istio-system namespace to enforce STRICT mode across the entire cluster'全集群强制。",
            "【策略评估顺序】官方文档：AuthorizationPolicy 评估遵循层级顺序——'Explicit deny rules take precedence'显式拒绝优先；然后 Allow policies 决定允许的流量；Custom policies 集成外部授权系统。没有匹配 ALLOW 策略时请求被拒绝。",
            "【迁移验证方法】官方文档：通过 Grafana dashboard 监控迁移进度，识别仍发送明文流量的工作负载。测试方法：非 Sidecar Pod 访问 STRICT 服务返回'error code 000'，Sidecar Pod 继续收到 200 响应。",
            "【PERMISSIVE 安全权衡】官方文档：对于无法立即迁移所有服务的环境，'maintaining PERMISSIVE mode combined with authorization policies provides security without complete sidecar deployment'——PERMISSIVE + 授权策略可在不完全部署 Sidecar 的情况下提供安全保护。",
            "【身份与服务绑定】官方文档：安全命名机制确保'server identities are encoded in certificates'但服务名通过发现服务获取，这种绑定防止持有有效证书的攻击者冒充未授权服务，是零信任模型的关键组件。"
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
            question: "官方文档对 VirtualService 职责的描述是什么？",
            options: [
                "管理 Pod 的生命周期",
                "'configure how requests are routed to a service within an Istio service mesh'——定义请求路由",
                "存储服务的配置数据",
                "监控服务的健康状态"
            ],
            answer: 1,
            rationale: "官方文档：VirtualService 'configure how requests are routed to a service within an Istio service mesh'——定义请求如何路由到服务。"
        },
        {
            id: "w13-3-q2",
            question: "DestinationRule 的 subsets 如何选择服务实例？",
            options: [
                "通过 Kubernetes labels 将服务实例分组",
                "通过 Pod 名称匹配",
                "通过 IP 地址范围",
                "通过命名空间"
            ],
            answer: 0,
            rationale: "官方文档：DestinationRule 使用 Kubernetes labels 将服务实例分组为'subsets such as all instances with a certain version'。"
        },
        {
            id: "w13-3-q3",
            question: "官方文档对路由规则评估顺序的描述是什么？",
            options: [
                "按权重从高到低评估",
                "随机选择匹配的规则",
                "同时应用所有匹配规则",
                "'evaluated in sequential order from top to bottom'——从上到下顺序评估"
            ],
            answer: 3,
            rationale: "官方文档：路由规则'evaluated in sequential order from top to bottom, with the first rule in the list having highest priority'。"
        },
        {
            id: "w13-3-q4",
            question: "VirtualService 的 weight 字段总和必须是多少？",
            options: [
                "1",
                "10",
                "100",
                "任意值"
            ],
            answer: 2,
            rationale: "官方文档：金丝雀发布配置中，所有 destination 的 weight 总和必须为 100，表示百分比分配。"
        },
        {
            id: "w13-3-q5",
            question: "熔断器在 Istio 中通过什么资源配置？",
            options: [
                "VirtualService 的 fault 字段",
                "Gateway 资源",
                "DestinationRule 的 trafficPolicy",
                "ServiceEntry 资源"
            ],
            answer: 2,
            rationale: "官方文档：熔断器通过 DestinationRule 的 trafficPolicy 配置，包含 connectionPool 和 outlierDetection 设置。"
        },
        {
            id: "w13-3-q6",
            question: "官方文档对 outlierDetection 的 consecutive5xxErrors 的描述是什么？",
            options: [
                "5xx 错误的总数限制",
                "'the number of consecutive 5xx errors before a host is ejected'——连续错误导致驱逐",
                "5xx 错误的采样率",
                "5xx 错误的记录周期"
            ],
            answer: 1,
            rationale: "官方文档：consecutive5xxErrors 定义'the number of consecutive 5xx errors before a host is ejected from the connection pool'。"
        },
        {
            id: "w13-3-q7",
            question: "官方文档对 fault.delay 的用途描述是什么？",
            options: [
                "'used to mimic increased network latency or an overloaded upstream service'——模拟延迟",
                "用于重试失败的请求",
                "用于限制请求速率",
                "用于加密网络流量"
            ],
            answer: 0,
            rationale: "官方文档：delay'used to mimic increased network latency or an overloaded upstream service'——模拟网络延迟或过载。"
        },
        {
            id: "w13-3-q8",
            question: "如果只创建 VirtualService 的子集路由但没有 DestinationRule，会怎样？",
            options: [
                "自动创建默认 DestinationRule",
                "istiod 会报错阻止配置",
                "路由不生效，因为子集未定义",
                "使用轮询负载均衡"
            ],
            answer: 2,
            rationale: "官方文档：VirtualService 的 destination.subset 引用 DestinationRule 定义的子集。没有 DestinationRule 定义子集，VirtualService 的子集路由不会生效。"
        },
        {
            id: "w13-3-q9",
            question: "VirtualService match 条件支持哪些匹配类型？",
            options: [
                "只支持精确匹配",
                "只支持正则匹配",
                "exact（精确）、prefix（前缀）、regex（正则）",
                "只支持前缀匹配"
            ],
            answer: 2,
            rationale: "官方文档：Match 条件支持 exact（精确匹配）、prefix（前缀匹配）和 regex（正则匹配）三种类型。"
        },
        {
            id: "w13-3-q10",
            question: "官方文档对 baseEjectionTime 的描述是什么？",
            options: [
                "连接超时时间",
                "请求重试间隔",
                "'minimum eviction duration'——最小驱逐时间",
                "健康检查间隔"
            ],
            answer: 2,
            rationale: "官方文档：baseEjectionTime 是'minimum eviction duration'——主机被驱逐后的最小隔离时间。"
        },
        {
            id: "w13-3-q11",
            question: "官方文档对 fault.abort 的用途描述是什么？",
            options: [
                "用于终止长时间运行的请求",
                "用于取消排队的请求",
                "'used to mimic failures in upstream services'——模拟上游服务故障",
                "用于关闭空闲连接"
            ],
            answer: 2,
            rationale: "官方文档：abort'used to mimic failures in upstream services'——用于模拟上游服务返回错误。"
        },
        {
            id: "w13-3-q12",
            question: "超过 connectionPool 阈值时会返回什么状态码？",
            options: [
                "返回 200 但降级响应",
                "返回 503 Service Unavailable",
                "返回 429 Too Many Requests",
                "返回 504 Gateway Timeout"
            ],
            answer: 1,
            rationale: "官方文档：超过 connectionPool 配置的阈值（如 maxConnections、http1MaxPendingRequests）时返回 503。"
        }
    ],
    "w13-4": [
        {
            id: "w13-4-q1",
            question: "官方文档对 Istio 安全模型的核心描述是什么？",
            options: [
                "'security by default: no changes needed to application code and infrastructure'——默认安全无需修改代码",
                "需要大量代码修改才能启用安全功能",
                "只支持手动配置证书",
                "安全功能是付费企业版特性"
            ],
            answer: 0,
            rationale: "官方文档：Istio 实现'security by default: no changes needed to application code and infrastructure'——默认安全无需修改应用代码。"
        },
        {
            id: "w13-4-q2",
            question: "PeerAuthentication 的 STRICT 模式意味着什么？",
            options: [
                "允许 mTLS 和明文流量",
                "禁用所有安全功能",
                "只允许 mTLS 流量，拒绝明文",
                "只验证 JWT 令牌"
            ],
            answer: 2,
            rationale: "官方文档：Peer Authentication 支持三种模式——PERMISSIVE（接受加密和明文）、STRICT（仅接受 mTLS）、DISABLE（不推荐）。"
        },
        {
            id: "w13-4-q3",
            question: "官方文档建议的 mTLS 迁移策略是什么？",
            options: [
                "直接全集群启用 STRICT 模式",
                "永久保持 PERMISSIVE 模式",
                "三阶段迁移：先 PERMISSIVE，再逐命名空间 STRICT，最后全集群强制",
                "禁用 mTLS 使用其他加密方案"
            ],
            answer: 2,
            rationale: "官方文档：建议三阶段迁移——首先 PERMISSIVE 模式，然后逐命名空间启用 STRICT，最后部署到 istio-system 全集群强制。"
        },
        {
            id: "w13-4-q4",
            question: "官方文档对 AuthorizationPolicy 评估顺序的描述是什么？",
            options: [
                "ALLOW 规则优先于 DENY 规则",
                "按创建时间顺序评估",
                "'Explicit deny rules take precedence'——显式拒绝优先",
                "随机选择匹配的策略"
            ],
            answer: 2,
            rationale: "官方文档：AuthorizationPolicy 评估遵循层级顺序——'Explicit deny rules take precedence'显式拒绝优先。"
        },
        {
            id: "w13-4-q5",
            question: "官方文档对 PERMISSIVE 模式的描述是什么？",
            options: [
                "'automatically configures workload sidecars to use mutual TLS when calling other workloads'——自动配置 mTLS",
                "禁用所有加密功能",
                "只允许明文流量",
                "需要手动配置每个连接"
            ],
            answer: 0,
            rationale: "官方文档：PERMISSIVE 模式'automatically configures workload sidecars to use mutual TLS when calling other workloads'——同时接受加密和明文。"
        },
        {
            id: "w13-4-q6",
            question: "如何验证 STRICT 模式是否正确启用？",
            options: [
                "检查 Pod 日志",
                "非 Sidecar Pod 访问返回'error code 000'，Sidecar Pod 返回 200",
                "查看 ConfigMap 配置",
                "检查 DNS 解析"
            ],
            answer: 1,
            rationale: "官方文档：测试方法——非 Sidecar Pod 访问 STRICT 服务返回'error code 000'，Sidecar Pod 继续收到 200 响应。"
        },
        {
            id: "w13-4-q7",
            question: "官方文档对证书管理的描述是什么？",
            options: [
                "需要手动生成和轮换证书",
                "istiod 自动管理证书签名和轮换'without manual intervention'",
                "只支持自签名证书",
                "证书永不过期"
            ],
            answer: 1,
            rationale: "官方文档：istiod 控制面自动管理 X.509 证书，执行周期性轮换'without manual intervention'——无需人工干预。"
        },
        {
            id: "w13-4-q8",
            question: "官方文档对安全命名机制的描述是什么？",
            options: [
                "'Server identities are encoded in certificates, but service names are retrieved through the discovery service'",
                "服务名和身份完全独立",
                "不需要证书验证",
                "服务名直接编码在证书中"
            ],
            answer: 0,
            rationale: "官方文档：'Server identities are encoded in certificates, but service names are retrieved through the discovery service or DNS'——防止冒充攻击。"
        },
        {
            id: "w13-4-q9",
            question: "AuthorizationPolicy 支持哪三种动作？",
            options: [
                "CREATE、UPDATE、DELETE",
                "READ、WRITE、EXECUTE",
                "ALLOW、DENY、CUSTOM",
                "PERMIT、BLOCK、FORWARD"
            ],
            answer: 2,
            rationale: "官方文档：AuthorizationPolicy CRD 支持三种动作——ALLOW rules、DENY rules（优先评估）、CUSTOM rules（委托外部授权系统）。"
        },
        {
            id: "w13-4-q10",
            question: "官方文档对 Istio 防御策略的描述是什么？",
            options: [
                "单层防护足够安全",
                "'defense in depth: integrate with existing security systems to provide multiple layers of defense'",
                "只依赖网络隔离",
                "安全功能相互独立"
            ],
            answer: 1,
            rationale: "官方文档：Istio 提供'defense in depth: integrate with existing security systems to provide multiple layers of defense'——多层防御。"
        },
        {
            id: "w13-4-q11",
            question: "无法立即迁移所有服务时，官方建议的安全策略是什么？",
            options: [
                "'maintaining PERMISSIVE mode combined with authorization policies'——PERMISSIVE + 授权策略",
                "完全禁用安全功能",
                "等待所有服务就绪后再启用",
                "使用外部防火墙替代"
            ],
            answer: 0,
            rationale: "官方文档：'maintaining PERMISSIVE mode combined with authorization policies provides security without complete sidecar deployment'。"
        },
        {
            id: "w13-4-q12",
            question: "Request Authentication 的作用是什么？",
            options: [
                "加密服务间流量",
                "管理证书轮换",
                "通过 JWT 验证终端用户凭证",
                "配置负载均衡策略"
            ],
            answer: 2,
            rationale: "官方文档：Request Authentication 通过 JWT 验证终端用户凭证，支持 Keycloak 或 Auth0 等提供商，实现用户级访问决策。"
        }
    ]
}
