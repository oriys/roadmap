import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week13Guides: Record<string, LessonGuide> = {
    "w13-1": {
        lessonId: "w13-1",
        background: [
            "服务网格（Service Mesh）是处理服务间通信的基础设施层，将流量管理、安全通信和可观测性等能力从应用代码下沉到基础设施。核心理念是让应用专注于业务逻辑，网络治理交给网格统一处理。",
            "服务网格的典型架构由数据面（Data Plane）和控制面（Control Plane）组成。数据面由 Sidecar 代理（如 Envoy）构成，拦截所有进出服务的流量；控制面（如 Istio 的 istiod）负责配置管理、证书签发和策略下发。",
            "服务网格提供的核心能力包括：零信任安全（mTLS 加密、身份认证、访问控制）、流量治理（金丝雀发布、熔断、限流、故障注入）、可观测性（自动生成指标、追踪、访问日志）。这些能力对应用透明，无需修改业务代码。",
            "服务网格并非银弹，引入成本包括：资源开销（每个 Pod 一个 Sidecar）、延迟增加（多一跳代理）、运维复杂度（需要专业知识管理网格）。应根据实际需求评估是否引入，不是所有场景都需要服务网格。"
        ],
        keyDifficulties: [
            "理解下沉治理的价值：传统方式需要在每个服务中实现重试、超时、熔断等逻辑（如 Netflix OSS 套件）。服务网格将这些能力下沉到代理层，应用只需 HTTP/gRPC 调用，网络弹性由网格保证。跨语言一致性是最大优势。",
            "适用场景判断：多语言微服务架构、需要强安全合规（mTLS）、需要统一流量治理的场景适合服务网格。单体应用、服务数量少（< 10 个）、团队无运维能力的场景可能不值得引入的复杂度。",
            "Sidecar vs Ambient 模式：传统 Sidecar 模式每个 Pod 注入代理，资源消耗大但功能完整。Istio Ambient 模式（新）使用共享的节点级代理，降低资源开销但仍在演进中。选择取决于资源敏感度和功能需求。",
            "网格的性能影响：Sidecar 增加约 1-3ms 延迟（取决于配置）、每 Pod 约 50-100MB 内存。高性能场景需要权衡。可以选择性启用网格功能（如只用 mTLS 不用复杂路由）来平衡。"
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
            "Istio 是目前最流行的服务网格实现，由 Google、Lyft 和 IBM 联合开发，现为 CNCF 毕业项目。核心架构分为控制面（istiod）和数据面（Envoy Sidecar），通过声明式配置实现复杂的流量治理。",
            "控制面 istiod 是 Istio 的「大脑」，整合了 Pilot（配置下发）、Citadel（证书管理）、Galley（配置验证）三个组件。istiod 监听 Kubernetes API，将 VirtualService、DestinationRule 等 CRD 转换为 Envoy 配置，通过 xDS 协议推送到数据面。",
            "数据面由 Envoy Sidecar 代理构成，作为每个 Pod 的「贴身保镖」拦截所有网络流量。Envoy 是高性能的 C++ 代理，支持 HTTP/1.1、HTTP/2、gRPC、TCP 等协议，通过 xDS API 动态接收配置，无需重启即可更新路由规则。",
            "Sidecar 注入是 Istio 的核心机制。通过 Kubernetes Admission Controller，在 Pod 创建时自动注入 Envoy 容器和 init 容器。init 容器配置 iptables 规则，将 Pod 的所有入站出站流量重定向到 Envoy。"
        ],
        keyDifficulties: [
            "理解 xDS 协议：Envoy 通过 xDS（LDS/RDS/CDS/EDS/SDS）协议从控制面获取配置。LDS（监听器）、RDS（路由）、CDS（集群）、EDS（端点）、SDS（密钥）分别管理代理的不同层面。理解这些概念有助于调试配置问题。",
            "Sidecar 注入条件：命名空间需要标记 istio-injection=enabled，或 Pod 添加 sidecar.istio.io/inject=true 注解。某些系统 Pod（如 DaemonSet）可能不应该注入。验证注入状态：kubectl get pods -l app=xxx -o jsonpath='{.items[*].spec.containers[*].name}'。",
            "Envoy 配置调试：使用 istioctl proxy-config 命令查看 Envoy 的实际配置（clusters、routes、listeners、endpoints）。当路由不生效时，通过这些命令排查配置是否正确下发到代理。",
            "资源配置优化：Sidecar 默认资源可能过大或过小，需要根据流量调整。使用 Sidecar CRD 限制代理只监听需要的服务，减少配置大小和内存消耗。大型集群尤其重要。"
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
            question: "服务网格的核心架构由哪两部分组成？",
            options: [
                "前端和后端",
                "数据面和控制面",
                "客户端和服务端",
                "网关和代理"
            ],
            answer: 1,
            rationale: "服务网格由数据面（Sidecar 代理，如 Envoy）和控制面（如 istiod）组成。数据面拦截流量，控制面管理配置和策略。"
        },
        {
            id: "w13-1-q2",
            question: "服务网格「下沉治理」的含义是什么？",
            options: [
                "将服务部署到更低层的基础设施",
                "将流量治理能力从应用代码下沉到基础设施层",
                "减少服务数量",
                "将数据存储到更底层"
            ],
            answer: 1,
            rationale: "下沉治理指将重试、超时、熔断等网络治理能力从应用代码移到网格代理层，应用只需关注业务逻辑，治理由网格统一处理。"
        },
        {
            id: "w13-1-q3",
            question: "以下哪种场景最适合引入服务网格？",
            options: [
                "单体应用",
                "服务数量少于 5 个的小型系统",
                "多语言微服务架构且需要统一流量治理",
                "对延迟极度敏感的高频交易系统"
            ],
            answer: 2,
            rationale: "多语言微服务架构中，服务网格可以提供语言无关的统一治理能力。单体应用、小型系统或对延迟敏感的系统可能不需要网格的复杂度。"
        },
        {
            id: "w13-1-q4",
            question: "Sidecar 模式的主要缺点是什么？",
            options: [
                "不支持 HTTP 协议",
                "每个 Pod 都需要一个代理，资源开销大",
                "无法实现 mTLS",
                "不支持金丝雀发布"
            ],
            answer: 1,
            rationale: "Sidecar 模式为每个 Pod 注入一个 Envoy 代理，消耗额外的 CPU 和内存（约 50-100MB/Pod），在大规模集群中资源开销显著。"
        },
        {
            id: "w13-1-q5",
            question: "Istio Ambient 模式与传统 Sidecar 模式的区别是什么？",
            options: [
                "Ambient 功能更完整",
                "Ambient 使用共享的节点级代理，资源开销更低",
                "Ambient 只支持 TCP 协议",
                "Ambient 需要修改应用代码"
            ],
            answer: 1,
            rationale: "Ambient 模式使用节点级共享代理替代每 Pod 的 Sidecar，降低资源消耗。但仍在演进中，功能可能不如 Sidecar 模式完整。"
        },
        {
            id: "w13-1-q6",
            question: "服务网格提供的核心能力不包括哪个？",
            options: [
                "mTLS 加密",
                "流量治理",
                "数据库事务管理",
                "可观测性"
            ],
            answer: 2,
            rationale: "服务网格提供安全（mTLS）、流量治理（路由、熔断）、可观测性（指标、追踪）能力。数据库事务管理是应用层功能，不在网格范围内。"
        },
        {
            id: "w13-1-q7",
            question: "引入服务网格会增加约多少延迟？",
            options: [
                "0ms，没有额外延迟",
                "约 1-3ms",
                "约 100ms",
                "约 1 秒"
            ],
            answer: 1,
            rationale: "Sidecar 代理会增加约 1-3ms 的延迟（取决于配置和硬件）。对于大多数应用可以接受，但高性能场景需要评估。"
        },
        {
            id: "w13-1-q8",
            question: "以下关于服务网格的说法哪个是正确的？",
            options: [
                "所有微服务系统都应该使用服务网格",
                "服务网格可以完全替代应用层的错误处理",
                "服务网格的收益需要与引入的复杂度权衡",
                "服务网格只能用于 Kubernetes 环境"
            ],
            answer: 2,
            rationale: "服务网格不是银弹，需要权衡收益（统一治理、安全）和成本（资源、复杂度、团队学习）。不是所有场景都需要。"
        },
        {
            id: "w13-1-q9",
            question: "Envoy 在服务网格中的角色是什么？",
            options: [
                "控制面组件",
                "数据面代理，拦截和处理服务间流量",
                "证书颁发机构",
                "配置存储"
            ],
            answer: 1,
            rationale: "Envoy 是高性能的 C++ 代理，作为 Sidecar 部署在每个 Pod 中，拦截所有入站和出站流量，执行路由、负载均衡、安全等功能。"
        },
        {
            id: "w13-1-q10",
            question: "推广服务网格的建议策略是什么？",
            options: [
                "一次性全集群启用所有功能",
                "从核心业务服务开始",
                "从非核心服务开始试点，先启用可观测性",
                "先启用复杂的流量治理规则"
            ],
            answer: 2,
            rationale: "建议从非核心服务开始试点，降低风险。先启用可观测性（风险最低），再逐步启用 mTLS 和流量治理，积累经验后推广到核心服务。"
        },
        {
            id: "w13-1-q11",
            question: "与 Spring Cloud 等应用层治理方案相比，服务网格的优势是什么？",
            options: [
                "性能更高",
                "跨语言一致性，不需要每个语言实现治理逻辑",
                "配置更简单",
                "不需要 Kubernetes"
            ],
            answer: 1,
            rationale: "服务网格的最大优势是语言无关。Spring Cloud 只能用于 Java，而网格可以为 Go、Python、Node.js 等所有语言提供一致的治理能力。"
        },
        {
            id: "w13-1-q12",
            question: "以下哪个不是主流的服务网格实现？",
            options: [
                "Istio",
                "Linkerd",
                "Consul Connect",
                "Kubernetes Ingress"
            ],
            answer: 3,
            rationale: "Istio、Linkerd、Consul Connect 都是服务网格实现。Kubernetes Ingress 是入口控制器，不是服务网格。"
        },
        {
            id: "w13-1-q13",
            question: "服务网格的可观测性能力包括什么？",
            options: [
                "只包括日志",
                "只包括指标",
                "自动生成指标、追踪和访问日志",
                "只包括追踪"
            ],
            answer: 2,
            rationale: "服务网格自动为所有服务间通信生成 RED 指标（Rate/Error/Duration）、分布式追踪和访问日志，无需修改应用代码。"
        },
        {
            id: "w13-1-q14",
            question: "评估是否引入服务网格时，应该考虑什么因素？",
            options: [
                "只考虑功能需求",
                "只考虑性能影响",
                "功能需求、性能影响、团队能力和运维成本",
                "只考虑流行程度"
            ],
            answer: 2,
            rationale: "评估应该综合考虑：是否真的需要网格提供的能力、可接受的性能开销、团队是否有能力运维、以及长期维护成本。"
        },
        {
            id: "w13-1-q15",
            question: "eBPF 对服务网格的影响是什么？",
            options: [
                "与服务网格无关",
                "可以实现 Sidecar-less 架构，降低资源开销",
                "只能用于日志收集",
                "会增加延迟"
            ],
            answer: 1,
            rationale: "eBPF 允许在内核层面拦截和处理网络流量，Cilium Service Mesh 利用这一能力实现无 Sidecar 的网格，显著降低资源消耗和延迟。"
        }
    ],
    "w13-2": [
        {
            id: "w13-2-q1",
            question: "Istio 的控制面组件是什么？",
            options: [
                "Envoy",
                "istiod",
                "Kiali",
                "Prometheus"
            ],
            answer: 1,
            rationale: "istiod 是 Istio 的控制面，整合了 Pilot（配置）、Citadel（证书）、Galley（验证）功能。Envoy 是数据面代理。"
        },
        {
            id: "w13-2-q2",
            question: "Envoy Sidecar 通过什么协议从控制面获取配置？",
            options: [
                "HTTP REST",
                "gRPC/xDS",
                "MQTT",
                "WebSocket"
            ],
            answer: 1,
            rationale: "Envoy 通过 xDS（LDS/RDS/CDS/EDS/SDS）协议从 istiod 获取配置。xDS 基于 gRPC，支持增量更新和流式推送。"
        },
        {
            id: "w13-2-q3",
            question: "启用命名空间级别 Sidecar 自动注入的命令是什么？",
            options: [
                "kubectl label namespace default sidecar=enabled",
                "kubectl label namespace default istio-injection=enabled",
                "kubectl annotate namespace default istio.io/inject=true",
                "istioctl inject namespace default"
            ],
            answer: 1,
            rationale: "kubectl label namespace <name> istio-injection=enabled 为命名空间启用自动 Sidecar 注入。新创建的 Pod 会自动注入 Envoy。"
        },
        {
            id: "w13-2-q4",
            question: "Istio 的 init 容器做了什么？",
            options: [
                "启动 Envoy 代理",
                "配置 iptables 规则重定向流量到 Envoy",
                "下载证书",
                "验证应用健康"
            ],
            answer: 1,
            rationale: "istio-init 容器配置 iptables 规则，将 Pod 的所有入站和出站流量重定向到 Envoy 代理的端口（15001/15006）。"
        },
        {
            id: "w13-2-q5",
            question: "查看 Pod 的 Envoy 路由配置的命令是什么？",
            options: [
                "kubectl describe pod",
                "istioctl proxy-config routes <pod>",
                "kubectl logs istio-proxy",
                "istioctl analyze"
            ],
            answer: 1,
            rationale: "istioctl proxy-config routes <pod> 显示 Envoy 代理的路由配置。类似命令还有 clusters、listeners、endpoints 等。"
        },
        {
            id: "w13-2-q6",
            question: "xDS 协议中，EDS 负责什么配置？",
            options: [
                "监听器",
                "路由",
                "端点（服务实例）",
                "密钥"
            ],
            answer: 2,
            rationale: "EDS（Endpoint Discovery Service）负责服务端点发现，即服务背后的 Pod IP 列表。LDS 是监听器、RDS 是路由、CDS 是集群、SDS 是密钥。"
        },
        {
            id: "w13-2-q7",
            question: "如何验证 Pod 是否正确注入了 Sidecar？",
            options: [
                "检查 Pod 是否有 istio-proxy 容器",
                "检查 Pod 标签",
                "检查 Service 配置",
                "检查 ConfigMap"
            ],
            answer: 0,
            rationale: "正确注入 Sidecar 的 Pod 会有 istio-proxy 容器。可以用 kubectl get pod -o jsonpath='{.spec.containers[*].name}' 验证。"
        },
        {
            id: "w13-2-q8",
            question: "istioctl analyze 的作用是什么？",
            options: [
                "分析流量",
                "检查 Istio 配置的潜在问题",
                "分析性能",
                "分析日志"
            ],
            answer: 1,
            rationale: "istioctl analyze 检查 Istio 配置（VirtualService、DestinationRule 等）的潜在问题，如引用不存在的主机、配置冲突等。"
        },
        {
            id: "w13-2-q9",
            question: "Istio 的 demo profile 与 default profile 的区别是什么？",
            options: [
                "demo 不包含 istiod",
                "demo 包含更多可观测性组件，资源需求更高",
                "default 不支持 mTLS",
                "两者完全相同"
            ],
            answer: 1,
            rationale: "demo profile 启用更多组件（如 Kiali、Jaeger、Grafana）用于学习和演示，资源需求更高。default 适合生产环境。"
        },
        {
            id: "w13-2-q10",
            question: "Sidecar CRD 的主要用途是什么？",
            options: [
                "定义 Sidecar 资源限制",
                "限制代理只监听需要的服务，减少配置大小",
                "配置日志级别",
                "启用或禁用注入"
            ],
            answer: 1,
            rationale: "Sidecar CRD 允许配置 Envoy 只监听指定的服务（egress.hosts），减少配置大小和内存消耗，对大型集群尤其重要。"
        },
        {
            id: "w13-2-q11",
            question: "istiod 整合了哪些原先独立的组件？",
            options: [
                "Envoy 和 Kiali",
                "Pilot、Citadel 和 Galley",
                "Prometheus 和 Grafana",
                "Jaeger 和 Zipkin"
            ],
            answer: 1,
            rationale: "istiod 是 Istio 1.5+ 的单一控制面二进制，整合了 Pilot（配置下发）、Citadel（证书管理）、Galley（配置验证）。"
        },
        {
            id: "w13-2-q12",
            question: "以下哪种情况不应该注入 Sidecar？",
            options: [
                "普通业务服务",
                "系统组件如 kube-system 命名空间的 Pod",
                "需要 mTLS 的服务",
                "需要流量治理的服务"
            ],
            answer: 1,
            rationale: "系统组件（如 CoreDNS、kube-proxy）通常不应注入 Sidecar，可能导致循环依赖或启动问题。kube-system 默认不启用注入。"
        },
        {
            id: "w13-2-q13",
            question: "Envoy 为什么需要动态配置而不是静态配置文件？",
            options: [
                "静态配置性能差",
                "动态配置允许不重启代理就更新路由规则",
                "静态配置不支持 TLS",
                "Kubernetes 不支持静态配置"
            ],
            answer: 1,
            rationale: "动态配置（xDS）允许 Envoy 在运行时更新路由、端点等配置，无需重启代理，支持快速响应服务变化和配置更新。"
        },
        {
            id: "w13-2-q14",
            question: "Kiali 在 Istio 生态中的作用是什么？",
            options: [
                "存储指标",
                "提供服务网格可视化和管理界面",
                "签发证书",
                "收集日志"
            ],
            answer: 1,
            rationale: "Kiali 是 Istio 的管理控制台，提供服务拓扑图、流量可视化、配置验证等功能，是理解和管理网格的重要工具。"
        },
        {
            id: "w13-2-q15",
            question: "Istio CNI 插件的优势是什么？",
            options: [
                "提高性能",
                "避免 init 容器需要 NET_ADMIN 权限",
                "简化安装",
                "支持更多协议"
            ],
            answer: 1,
            rationale: "Istio CNI 使用 CNI 插件而非 init 容器配置流量重定向，避免了 Pod 需要 NET_ADMIN 特权，提高安全性。"
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
