import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "w7-1": {
        lessonId: "w7-1",
        background: [
            "【Gateway Aggregation 定义】Azure 官方文档：'Use a gateway to aggregate multiple individual requests into a single request'——使用网关将客户端的多个单独请求聚合成一个请求，由网关负责分发、处理和汇总响应，减少网络往返次数。",
            "【Chattiness 问题】官方文档指出客户端与多个后端服务通信时存在'chattiness'问题：多个请求导致资源消耗增加、连接开销大、失败风险增加、响应时间延长，尤其在高延迟网络（如移动网络）上影响更显著。",
            "【API Gateway 核心价值】microservices.io 官方定义：'An API gateway acts as a single entry point into the application, routing and composing requests to services'——API Gateway 是微服务架构的统一入口点，负责路由和组合请求到各个服务。",
            "【Apollo Federation 架构】Apollo 官方文档：'Apollo Federation is a declarative approach to combining multiple APIs into a unified GraphQL supergraph'——通过声明式方式将多个 API 组合成统一的 GraphQL supergraph，Router 智能编排请求到各个 subgraph。",
            "【客户端透明性】Apollo Federation 官方：'Clients can interact with the federated schema as if it were a monolith. Consumers of your API shouldn't know or care that it's implemented as microservices'——客户端无需感知微服务实现细节。"
        ],
        keyDifficulties: [
            "【单点故障风险】Azure 官方文档警告：Gateway 可能成为单点故障，需设计高可用网关满足应用可用性要求；需进行负载测试确保足够的吞吐量，支持水平扩展避免成为性能瓶颈。",
            "【级联故障防护】官方文档建议：实现 bulkhead、circuit breaker、重试、超时机制保护网关；使用异步 I/O 防止后端延迟影响整个应用，避免请求堆积。",
            "【部分失败处理】官方文档指出：当部分后端请求失败时，需考虑返回部分数据或使用缓存回退策略；设计时应考虑优雅降级而非完全失败。",
            "【服务耦合陷阱】Azure 官方警告：'The gateway shouldn't introduce coupling between services'——网关不应该在后端服务之间创建耦合关系，应保持服务的独立性。",
            "【可观测性要求】官方文档建议：使用 correlation ID 进行分布式追踪，监控请求指标；每个请求应有唯一标识便于跨服务追踪问题。"
        ],
        handsOnPath: [
            "理解 Gateway Aggregation 问题：设计一个需要调用多个后端服务的场景（如电商商品详情页需要调用商品、库存、评论服务），评估不使用聚合时的网络往返次数。",
            "学习 Nginx Lua 实现聚合网关的示例：阅读官方文档中使用 ngx.location.capture_multi 并行请求多个后端并聚合响应的代码模式。",
            "探索 Kong Gateway 配置：使用 Kong Gateway 配置基本的 API 聚合，理解 Services、Routes、Plugins 的概念和配置方式。",
            "研究 Apollo Federation：了解如何通过 GraphQL supergraph 实现跨服务数据聚合，理解 subgraph 和 router 的职责划分。",
            "实践故障处理：在网关层配置超时、熔断和重试策略，模拟后端服务延迟和失败，观察网关的行为。"
        ],
        selfCheck: [
            "Gateway Aggregation 模式解决什么问题？它与直接让客户端调用多个服务有什么区别？",
            "什么是 'chattiness' 问题？为什么在移动网络环境下这个问题更加严重？",
            "网关成为单点故障和性能瓶颈的风险如何缓解？",
            "部分后端请求失败时，网关应该如何处理？有哪些降级策略？",
            "Apollo Federation 的 supergraph 和 subgraph 分别是什么？Router 的职责是什么？"
        ],
        extensions: [
            "研究 GraphQL DataLoader：了解如何通过批处理和缓存优化 N+1 查询问题，减少后端服务调用次数。",
            "探索 gRPC Gateway：了解如何使用 gRPC 协议提高服务间通信效率，同时对外暴露 REST API。",
            "学习 API 组合最佳实践：研究 Parallel vs Sequential 调用策略的选择，以及如何根据依赖关系优化调用顺序。",
            "研究 Service Mesh 数据聚合：了解 Istio/Envoy 如何在基础设施层面支持请求聚合和路由优化。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway-aggregation",
            "https://microservices.io/patterns/apigateway.html",
            "https://www.apollographql.com/docs/federation/"
        ]
    },
    "w7-2": {
        lessonId: "w7-2",
        background: [
            "【Gateway Offloading 定义】Azure 官方文档：'Offload shared or specialized service functionality to a gateway proxy'——将共享或专门化的服务功能卸载到网关代理中，简化应用开发和降低维护成本。",
            "【可卸载的功能】官方文档列出可卸载的跨切关注点：SSL/TLS 终止（证书管理）、身份认证和授权、协议转换、日志和监控、限流/节流、加密等。这些功能由网关集中处理而非分散在各服务中。",
            "【Gateway Routing 定义】Azure 官方文档：'Route requests to multiple services or multiple service instances using a single endpoint'——通过单个端点使用 Layer 7 路由将请求转发到适当的服务实例。",
            "【路由策略】官方文档：网关路由基于 Layer 7（应用层），可基于 IP 地址、端口、HTTP 头、URL 路径进行路由决策，支持多个不同服务、同服务多实例、同服务多版本（蓝绿部署）等场景。",
            "【Kong Gateway 架构】Kong 官方文档：Kong 是'lightweight, fast, and flexible cloud-native API gateway'，支持控制平面和数据平面分离，核心概念包括 Services（上游 API）、Routes（入站路径）、Consumers（API 用户）、Plugins（扩展功能）。"
        ],
        keyDifficulties: [
            "【职责边界】Azure 官方警告：网关不应该卸载业务逻辑或服务特定的功能；只卸载整个应用通用的跨切关注点，避免网关变得过于复杂。",
            "【SSL 终止位置】官方文档：SSL 终止可在网关层完成，后端服务之间可使用 HTTP 或内部 TLS；需权衡安全性（全链路加密）和性能（减少加解密开销）。",
            "【路由器高可用】Azure 官方文档：网关需确保高可用性、足够的吞吐量和自动扩展能力；区分全局网关（跨区域）和区域网关的适用场景。",
            "【配置管理复杂度】Kong 文档：Kong 支持多种配置方式——YAML 配置文件、decK 工具声明式配置、Terraform IaC、Admin API 和 Konnect 控制平面；选择适合团队的配置管理方式。",
            "【版本路由策略】官方文档：实现蓝绿部署、金丝雀发布时，需要精确控制流量比例；流量切换策略需要考虑回滚方案。"
        ],
        handsOnPath: [
            "配置 Nginx SSL 终止：使用官方文档示例配置 Nginx 作为 SSL 终止点，代理到后端 HTTP 服务。理解 ssl_certificate、ssl_certificate_key 配置和 proxy_pass 指令。",
            "实现 URL 路径路由：配置 Nginx 根据 URL 路径将请求路由到不同后端服务（如 /app1 到服务 A，/app2 到服务 B）。",
            "探索 Kong 基本配置：安装 Kong Gateway，配置 Service 和 Route，添加认证插件（如 Key Auth）和限流插件（Rate Limiting）。",
            "配置负载均衡：使用 Nginx upstream 指令配置多个后端实例，设置健康检查（max_fails、fail_timeout）。",
            "实践蓝绿部署路由：配置基于权重的流量分配，模拟将 10% 流量导向新版本服务进行金丝雀测试。"
        ],
        selfCheck: [
            "Gateway Offloading 和 Gateway Routing 模式各自解决什么问题？它们如何配合使用？",
            "哪些功能适合卸载到网关？哪些功能不应该放在网关层？",
            "SSL/TLS 终止放在网关层有什么优缺点？什么场景需要全链路加密？",
            "Kong Gateway 的 Services、Routes、Plugins 分别是什么概念？如何配合工作？",
            "如何使用网关实现蓝绿部署或金丝雀发布？需要考虑哪些回滚策略？"
        ],
        extensions: [
            "研究 Azure Application Gateway：了解 Azure 提供的托管 API Gateway 服务，包括 WAF（Web 应用防火墙）、自动扩展、SSL 卸载等功能。",
            "探索 AWS API Gateway：比较 REST API 和 HTTP API 的区别，了解 Lambda 集成和 VPC Link 的使用场景。",
            "学习 mTLS 配置：了解如何在网关和后端服务之间配置双向 TLS 认证，实现零信任网络架构。",
            "研究 OpenID Connect 集成：了解如何在网关层集成 OIDC 身份提供商，实现统一的身份认证。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway-offloading",
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway-routing",
            "https://developer.konghq.com/gateway/"
        ]
    },
    "w7-3": {
        lessonId: "w7-3",
        background: [
            "【Ambassador 模式定义】Azure 官方文档：'Create helper services that send network requests on behalf of a consumer service or application'——创建辅助服务代表消费者服务发送网络请求，可视为与客户端共地部署的进程外代理（out-of-process proxy）。",
            "【问题背景】官方文档列出 Ambassador 解决的问题：遗留应用难以修改添加新功能、跨语言/框架的网络配置重复、中央团队难以管理分散的网络/安全功能、熔断器、路由、监控、TLS 等功能难以统一实现。",
            "【Envoy Proxy 定位】Envoy 官方文档：'Envoy is an L7 proxy and communication bus designed for large modern service-oriented architectures'——为大型现代面向服务架构设计的 L7 代理和通信总线，设计哲学是让'网络对应用透明，当问题发生时易于诊断'。",
            "【进程外架构优势】Envoy 官方文档：相比传统库方法，进程外代理支持多语言生态（Java、C++、Go、PHP、Python 等）、快速部署和升级无需更新应用依赖。单一 Envoy 部署可形成跨异构技术栈的透明通信网格。",
            "【Istio Service Mesh】Istio 官方文档：Envoy 作为 sidecar 部署，数据平面由'intelligent proxies deployed as sidecars that mediate and control all network communication between microservices'组成，控制平面（Istiod）管理和配置代理。"
        ],
        keyDifficulties: [
            "【延迟开销评估】Azure 官方文档警告：'The proxy adds latency overhead'——Ambassador 代理会增加网络延迟，需评估额外的网络跳转是否可接受，对延迟敏感的服务需仔细测试。",
            "【幂等性要求】官方文档：当 Ambassador 实现重试功能时，需确保被调用的操作是幂等的，否则重试可能导致数据不一致。",
            "【部署策略选择】官方文档：需决定是每个客户端一个 Ambassador 实例还是共享单一实例；Sidecar 容器随应用生命周期部署，Daemon 服务可供多个进程共享。",
            "【Envoy 分层过滤器】官方文档：Envoy 包含两层过滤架构——L3/L4 层处理 TCP/UDP 代理、TLS 认证、Redis、MongoDB 等协议；HTTP L7 层支持缓冲、限流、路由、请求镜像等功能。",
            "【控制平面配置】Istio 官方文档：Istiod 将高级路由规则转换为 Envoy 配置并推送到 sidecar，提供服务发现、配置转换、证书管理和策略执行功能。"
        ],
        handsOnPath: [
            "理解 Ambassador 架构：绘制 Ambassador 模式的架构图，标注应用程序、Ambassador 代理、外部服务之间的通信流程，以及代理处理的功能（路由、熔断、日志、安全）。",
            "学习 Envoy 核心概念：阅读 Envoy 官方文档，理解 Cluster、Listener、Route、Filter 等核心概念，以及静态配置和动态配置（xDS API）的区别。",
            "探索 Envoy 配置示例：参考官方示例配置一个简单的 Envoy 代理，实现 HTTP 路由和后端负载均衡。",
            "了解 Istio Sidecar 注入：在 Kubernetes 中启用 Istio 自动 sidecar 注入，部署一个简单应用观察 Envoy sidecar 如何被自动添加到 Pod 中。",
            "实践流量管理：使用 Istio VirtualService 配置请求超时、重试策略和流量分割，观察 Envoy sidecar 的实际行为。"
        ],
        selfCheck: [
            "Ambassador 模式与 Sidecar 模式有什么关系？Ambassador 是 Sidecar 的一种特定用例吗？",
            "Envoy 的'进程外架构'相比传统客户端库有什么优势？",
            "在什么场景下 Ambassador 模式不适用？延迟敏感型服务应该如何处理？",
            "Envoy 的 L3/L4 层和 L7 层分别处理什么类型的功能？",
            "Istio 的数据平面和控制平面各自的职责是什么？Istiod 做了哪些工作？"
        ],
        extensions: [
            "研究 Envoy xDS API：了解 EDS、CDS、LDS、RDS 等动态配置 API，理解控制平面如何动态更新 Envoy 配置。",
            "探索 WebAssembly 扩展：了解如何使用 WASM 扩展 Envoy 功能，在不修改 Envoy 源码的情况下添加自定义逻辑。",
            "学习 Service Mesh 安全：研究 Istio 的 mTLS 自动配置和证书轮换机制，了解零信任网络的实现。",
            "比较 Service Mesh 方案：对比 Istio、Linkerd、Consul Connect 的架构差异和适用场景。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/ambassador",
            "https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy",
            "https://istio.io/latest/docs/ops/deployment/architecture/"
        ]
    },
    "w7-4": {
        lessonId: "w7-4",
        background: [
            "【Sidecar 模式定义】Azure 官方文档：'Deploy components of an application into a separate process or container to provide isolation and encapsulation'——将应用程序组件部署到独立进程或容器中，提供隔离、封装和异构组件支持。",
            "【Sidecar 核心特征】官方文档：Sidecar 与主应用共置于同一主机/容器，共享相同的生命周期（同时创建和销毁），但独立的进程/容器；可访问主应用相同的系统资源（CPU、内存），进程间通信无显著延迟。",
            "【BFF 模式定义】Azure 官方文档：'Create separate backend services to be consumed by specific frontend applications or interfaces'——为不同的客户端接口创建专用的后端服务，优化特定用户界面的体验。",
            "【BFF 核心价值】Sam Newman 博客：'One experience, one BFF'——每个独特的用户界面获得专属的后端服务，紧密耦合该特定客户端的需求。前端团队可独立管理各自的 BFF，控制语言、发布周期、优先级。",
            "【Sidecar 与 Ambassador 关系】Azure 官方文档：Ambassador 模式是 Sidecar 的一个特定用例——Ambassador 专注于网络/连接功能（代理、路由、连接管理），Sidecar 是更通用的容器模式（日志、监控、配置等）。"
        ],
        keyDifficulties: [
            "【IPC 延迟权衡】Azure 官方文档警告：进程间通信（IPC）开销在高频调用场景下可能不可接受；性能敏感场景需评估 Sidecar 带来的延迟开销是否值得其架构收益。",
            "【Sidecar 扩展限制】官方文档：Sidecar 不应该独立于主应用扩展——如果某功能需要独立扩展，应该考虑将其部署为独立服务而非 Sidecar。",
            "【BFF 代码重复】Azure 官方文档：不同 BFF 之间可能出现代码重复；需权衡代码复用（抽取共享服务）与客户端体验优化（BFF 独立性）。",
            "【BFF 运维成本】官方文档警告：维护多个 BFF 服务增加运维开销，每个服务有独立的生命周期、部署和安全需求；额外的网络跳转可能增加延迟。",
            "【职责边界划分】Azure 官方文档：BFF 应处理客户端特定逻辑、数据聚合、分页；跨域功能（监控、授权、限流、路由）应分离到网关层，使用 Gatekeeper、Rate Limiting 等模式。"
        ],
        handsOnPath: [
            "理解 Sidecar 架构：绘制 Kubernetes Pod 中主应用容器和 Sidecar 容器的架构图，标注它们共享的资源（网络命名空间、存储卷）和通信方式。",
            "部署 Nginx Sidecar：在 Kubernetes 中部署一个应用，添加 Nginx Sidecar 处理静态文件服务和反向代理；理解 Pod 内容器通过 localhost 通信的机制。",
            "分析 BFF 场景：设计一个同时服务 Web 和 Mobile 客户端的系统，分析两个客户端的不同需求（屏幕尺寸、带宽、交互模式），规划各自的 BFF 服务。",
            "实现简单 BFF：使用 Node.js 或 Go 为移动端实现一个简化的 BFF，聚合多个微服务调用，返回移动端优化的精简数据结构。",
            "探索 API Management 集成：了解如何在 BFF 前使用 API Management 网关统一处理认证、日志、缓存、限流等横切关注点。"
        ],
        selfCheck: [
            "Sidecar 模式适用于哪些场景？什么情况下不应该使用 Sidecar？",
            "Sidecar 与主应用共享生命周期有什么优缺点？",
            "BFF 模式解决什么问题？为什么不使用单一后端服务所有客户端？",
            "如何处理不同 BFF 之间的代码重复？共享服务和独立 BFF 各有什么权衡？",
            "BFF 和 API Gateway 的职责边界如何划分？哪些功能应该放在网关层？"
        ],
        extensions: [
            "研究 Dapr Sidecar：了解 Dapr 如何通过 Sidecar 提供分布式应用构建块（服务调用、状态管理、发布订阅、Actor 等）。",
            "探索 GraphQL 与 BFF：研究使用 GraphQL 替代传统 REST BFF 的场景，了解 GraphQL 的灵活查询如何简化客户端数据获取。",
            "学习 Sidecar 标准化：了解 Multi-Runtime Microservices Architecture（多运行时微服务架构）的概念和实践。",
            "研究无服务器 BFF：探索使用 AWS Lambda、Azure Functions 实现 BFF 的模式，了解其成本和冷启动特性。"
        ],
        sourceUrls: [
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar",
            "https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends",
            "https://samnewman.io/patterns/architectural/bff/"
        ]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "w7-1": [
        {
            id: "w7-1-q1",
            question: "Azure 官方文档对 Gateway Aggregation 模式的定义是什么？",
            options: [
                "将所有服务合并为一个单体应用",
                "'Use a gateway to aggregate multiple individual requests into a single request'——使用网关将多个请求聚合为单个请求",
                "在客户端实现请求缓存",
                "使用消息队列异步处理请求"
            ],
            answer: 1,
            rationale: "Azure 官方文档定义：'Use a gateway to aggregate multiple individual requests into a single request'——网关将客户端的多个请求聚合成一个请求，减少网络往返。"
        },
        {
            id: "w7-1-q2",
            question: "官方文档指出的 'chattiness' 问题主要影响是什么？",
            options: [
                "代码复杂度增加",
                "数据库性能下降",
                "资源消耗增加、连接开销大、失败风险增加、响应时间延长",
                "安全性降低"
            ],
            answer: 2,
            rationale: "官方文档指出 chattiness 问题导致：资源消耗增加、连接开销大、失败风险增加、响应时间延长，在高延迟网络上更严重。"
        },
        {
            id: "w7-1-q3",
            question: "microservices.io 对 API Gateway 的定义是什么？",
            options: [
                "一种数据库代理",
                "一种消息队列实现",
                "'An API gateway acts as a single entry point into the application, routing and composing requests to services'",
                "一种服务发现机制"
            ],
            answer: 2,
            rationale: "microservices.io 定义：'An API gateway acts as a single entry point into the application, routing and composing requests to services'——API Gateway 是应用的单一入口点。"
        },
        {
            id: "w7-1-q4",
            question: "Apollo Federation 官方对客户端透明性的描述是什么？",
            options: [
                "客户端必须知道所有微服务的地址",
                "'Clients can interact with the federated schema as if it were a monolith'——客户端无需感知微服务实现",
                "客户端需要实现复杂的聚合逻辑",
                "客户端必须使用特定的 SDK"
            ],
            answer: 1,
            rationale: "Apollo 官方：'Clients can interact with the federated schema as if it were a monolith. Consumers of your API shouldn't know or care that it's implemented as microservices'。"
        },
        {
            id: "w7-1-q5",
            question: "Azure 官方文档对网关单点故障风险的建议是什么？",
            options: [
                "避免使用网关模式",
                "只在测试环境使用网关",
                "设计高可用网关，进行负载测试，支持水平扩展",
                "使用客户端直接调用服务"
            ],
            answer: 2,
            rationale: "Azure 官方文档建议：设计高可用网关满足应用可用性要求；进行负载测试确保足够的吞吐量，支持水平扩展避免成为瓶颈。"
        },
        {
            id: "w7-1-q6",
            question: "官方文档建议如何防护网关的级联故障？",
            options: [
                "禁用所有后端服务",
                "增加更多网关实例",
                "实现 bulkhead、circuit breaker、重试、超时机制",
                "只使用同步调用"
            ],
            answer: 2,
            rationale: "官方文档建议：实现 bulkhead、circuit breaker、重试、超时机制保护网关；使用异步 I/O 防止后端延迟影响整个应用。"
        },
        {
            id: "w7-1-q7",
            question: "当部分后端请求失败时，官方文档建议网关如何处理？",
            options: [
                "立即返回错误给客户端",
                "无限重试直到成功",
                "考虑返回部分数据或使用缓存回退策略",
                "丢弃整个请求不做响应"
            ],
            answer: 2,
            rationale: "官方文档：当部分后端请求失败时，需考虑返回部分数据或使用缓存回退策略；设计时应考虑优雅降级而非完全失败。"
        },
        {
            id: "w7-1-q8",
            question: "Azure 官方对网关与服务耦合的警告是什么？",
            options: [
                "网关应该尽可能多地了解服务细节",
                "'The gateway shouldn't introduce coupling between services'——网关不应该创建服务间耦合",
                "网关必须与所有服务强耦合",
                "服务之间应该通过网关相互调用"
            ],
            answer: 1,
            rationale: "Azure 官方警告：'The gateway shouldn't introduce coupling between services'——网关不应该在后端服务之间创建耦合关系，应保持服务的独立性。"
        },
        {
            id: "w7-1-q9",
            question: "Apollo Federation 中 supergraph 和 subgraph 的关系是什么？",
            options: [
                "supergraph 是 subgraph 的子集",
                "supergraph 是由多个 subgraph 组成的统一 GraphQL schema",
                "两者是完全独立的系统",
                "subgraph 是 supergraph 的备份"
            ],
            answer: 1,
            rationale: "Apollo 官方文档：'Apollo Federation is a declarative approach to combining multiple APIs into a unified GraphQL supergraph'——supergraph 是由多个 subgraph API 组合而成。"
        },
        {
            id: "w7-1-q10",
            question: "官方文档对分布式追踪的建议是什么？",
            options: [
                "每个服务独立记录日志即可",
                "使用 correlation ID 进行分布式追踪，监控请求指标",
                "不需要追踪跨服务请求",
                "只追踪失败的请求"
            ],
            answer: 1,
            rationale: "官方文档建议：使用 correlation ID 进行分布式追踪，监控请求指标；每个请求应有唯一标识便于跨服务追踪问题。"
        },
        {
            id: "w7-1-q11",
            question: "Gateway Aggregation 模式最适合的场景是什么？",
            options: [
                "单个服务的简单 CRUD 操作",
                "客户端需要与多个后端服务通信完成操作，且网络延迟较高",
                "只有一个后端服务的应用",
                "客户端与后端物理距离近、延迟不是问题"
            ],
            answer: 1,
            rationale: "官方文档适用场景：客户端需要与多个后端服务通信完成操作、网络延迟较高（如移动网络）。不适用于延迟不是主要因素的简单场景。"
        },
        {
            id: "w7-1-q12",
            question: "Gateway Aggregation 模式对 Well-Architected Framework 哪些支柱有贡献？",
            options: [
                "只对性能效率有贡献",
                "可靠性（故障处理集中）、安全性（减少暴露面）、卓越运营（后端独立演进）、性能效率（减少连接数）",
                "只对安全性有贡献",
                "对所有支柱都没有贡献"
            ],
            answer: 1,
            rationale: "官方文档列出网关聚合模式对多个支柱的贡献：可靠性（集中故障处理）、安全性（减少暴露面）、卓越运营（后端独立演进）、性能效率（减少连接数和延迟）。"
        }
    ],
    "w7-2": [
        {
            id: "w7-2-q1",
            question: "Azure 官方文档对 Gateway Offloading 模式的定义是什么？",
            options: [
                "将所有业务逻辑移到网关",
                "'Offload shared or specialized service functionality to a gateway proxy'——将共享功能卸载到网关代理",
                "将数据库移到网关",
                "将前端代码移到网关"
            ],
            answer: 1,
            rationale: "Azure 官方文档：'Offload shared or specialized service functionality to a gateway proxy'——将共享或专门化的服务功能卸载到网关代理中。"
        },
        {
            id: "w7-2-q2",
            question: "官方文档列出的可卸载功能不包括以下哪项？",
            options: [
                "SSL/TLS 终止",
                "身份认证和授权",
                "核心业务逻辑",
                "日志和监控"
            ],
            answer: 2,
            rationale: "官方文档列出可卸载的跨切关注点：SSL/TLS 终止、身份认证授权、协议转换、日志监控、限流等。明确警告不应卸载业务逻辑或服务特定功能。"
        },
        {
            id: "w7-2-q3",
            question: "Azure 官方文档对 Gateway Routing 模式的定义是什么？",
            options: [
                "只支持单个服务的路由",
                "'Route requests to multiple services or multiple service instances using a single endpoint'",
                "只用于负载均衡",
                "只用于协议转换"
            ],
            answer: 1,
            rationale: "Azure 官方文档：'Route requests to multiple services or multiple service instances using a single endpoint'——通过单个端点路由请求到多个服务或实例。"
        },
        {
            id: "w7-2-q4",
            question: "官方文档指出网关路由可以基于哪些因素？",
            options: [
                "只能基于 IP 地址",
                "只能基于端口",
                "IP 地址、端口、HTTP 头、URL 路径（Layer 7 路由）",
                "只能基于用户身份"
            ],
            answer: 2,
            rationale: "官方文档：网关路由基于 Layer 7（应用层），可基于 IP 地址、端口、HTTP 头、URL 路径进行路由决策。"
        },
        {
            id: "w7-2-q5",
            question: "Kong 官方文档对 Kong Gateway 的定位是什么？",
            options: [
                "一种数据库系统",
                "'Lightweight, fast, and flexible cloud-native API gateway'",
                "一种消息队列",
                "一种前端框架"
            ],
            answer: 1,
            rationale: "Kong 官方文档：Kong 是'lightweight, fast, and flexible cloud-native API gateway'，支持控制平面和数据平面分离。"
        },
        {
            id: "w7-2-q6",
            question: "Kong Gateway 的核心概念不包括以下哪项？",
            options: [
                "Services（上游 API）",
                "Routes（入站路径）",
                "Schemas（数据模型）",
                "Plugins（扩展功能）"
            ],
            answer: 2,
            rationale: "Kong 官方文档核心概念：Services（定义上游 API）、Routes（定义入站请求路径）、Consumers（API 用户）、Plugins（扩展功能）。Schemas 不是 Kong 的核心概念。"
        },
        {
            id: "w7-2-q7",
            question: "Azure 官方文档对网关职责边界的警告是什么？",
            options: [
                "网关应该处理所有功能",
                "网关不应该卸载业务逻辑或服务特定功能",
                "网关应该尽量复杂",
                "网关应该直接访问数据库"
            ],
            answer: 1,
            rationale: "Azure 官方警告：网关不应该卸载业务逻辑或服务特定的功能；只卸载整个应用通用的跨切关注点，避免网关变得过于复杂。"
        },
        {
            id: "w7-2-q8",
            question: "Gateway Routing 模式支持的部署场景不包括以下哪项？",
            options: [
                "多个不同服务",
                "同服务多实例（负载均衡）",
                "同服务多版本（蓝绿部署）",
                "数据库分片路由"
            ],
            answer: 3,
            rationale: "官方文档列出支持场景：多个不同服务、同服务多实例（负载均衡）、同服务多版本（蓝绿部署/金丝雀发布）。数据库分片路由不是 Gateway Routing 的主要场景。"
        },
        {
            id: "w7-2-q9",
            question: "Kong 官方文档列出的 Kong 配置方式不包括以下哪项？",
            options: [
                "YAML 配置文件",
                "decK 声明式配置",
                "直接修改源代码",
                "Terraform IaC"
            ],
            answer: 2,
            rationale: "Kong 文档配置方式：YAML 配置文件、decK 工具声明式配置、Terraform IaC、Admin API 和 Konnect 控制平面。不需要修改源代码。"
        },
        {
            id: "w7-2-q10",
            question: "SSL/TLS 终止放在网关层的主要优势是什么？",
            options: [
                "增加加密强度",
                "集中管理证书，减少后端服务的加解密开销",
                "提高数据库性能",
                "减少代码量"
            ],
            answer: 1,
            rationale: "官方文档：SSL 终止在网关层完成可集中管理证书，后端服务之间可使用 HTTP 减少加解密开销；但需权衡安全性（全链路加密）。"
        },
        {
            id: "w7-2-q11",
            question: "Azure 官方文档对网关高可用的要求是什么？",
            options: [
                "只需要单个实例即可",
                "确保高可用性、足够的吞吐量和自动扩展能力",
                "高可用不重要",
                "只在生产环境考虑高可用"
            ],
            answer: 1,
            rationale: "Azure 官方文档：网关需确保高可用性、足够的吞吐量和自动扩展能力；需区分全局网关和区域网关的适用场景。"
        },
        {
            id: "w7-2-q12",
            question: "Kong Gateway 支持的认证方式不包括以下哪项？",
            options: [
                "OAuth2",
                "JWT",
                "API Key",
                "生物识别"
            ],
            answer: 3,
            rationale: "Kong 官方文档：支持 OAuth2、JWT、API Key、LDAP、SAML 等认证方式。生物识别不是 Kong 直接支持的认证方式。"
        }
    ],
    "w7-3": [
        {
            id: "w7-3-q1",
            question: "Azure 官方文档对 Ambassador 模式的定义是什么？",
            options: [
                "一种数据库代理模式",
                "'Create helper services that send network requests on behalf of a consumer service'——创建代表消费者服务发送网络请求的辅助服务",
                "一种前端框架",
                "一种消息队列实现"
            ],
            answer: 1,
            rationale: "Azure 官方文档：'Create helper services that send network requests on behalf of a consumer service or application'——创建辅助服务代表消费者服务发送网络请求。"
        },
        {
            id: "w7-3-q2",
            question: "官方文档将 Ambassador 描述为什么类型的代理？",
            options: [
                "数据库代理",
                "进程外代理（out-of-process proxy）",
                "前端代理",
                "存储代理"
            ],
            answer: 1,
            rationale: "官方文档：Ambassador 可视为与客户端共地部署的进程外代理（out-of-process proxy），处理路由、熔断、日志、安全等功能。"
        },
        {
            id: "w7-3-q3",
            question: "Envoy 官方文档对 Envoy 的定位是什么？",
            options: [
                "一种数据库",
                "'An L7 proxy and communication bus designed for large modern service-oriented architectures'",
                "一种前端框架",
                "一种操作系统"
            ],
            answer: 1,
            rationale: "Envoy 官方文档：'Envoy is an L7 proxy and communication bus designed for large modern service-oriented architectures'——为大型现代 SOA 设计的 L7 代理和通信总线。"
        },
        {
            id: "w7-3-q4",
            question: "Envoy 进程外架构相比传统库方法的优势是什么？",
            options: [
                "更快的编译速度",
                "支持多语言生态，快速部署和升级无需更新应用依赖",
                "更低的内存占用",
                "更简单的配置"
            ],
            answer: 1,
            rationale: "Envoy 官方文档：进程外代理支持多语言生态（Java、C++、Go、PHP、Python 等）、快速部署和升级无需更新应用依赖。"
        },
        {
            id: "w7-3-q5",
            question: "Azure 官方文档对 Ambassador 模式延迟开销的警告是什么？",
            options: [
                "延迟开销可以忽略",
                "'The proxy adds latency overhead'——代理会增加延迟开销，需评估是否可接受",
                "没有任何延迟影响",
                "延迟只影响写操作"
            ],
            answer: 1,
            rationale: "Azure 官方文档警告：'The proxy adds latency overhead'——Ambassador 代理会增加网络延迟，需评估额外的网络跳转是否可接受。"
        },
        {
            id: "w7-3-q6",
            question: "Istio 官方文档对数据平面的描述是什么？",
            options: [
                "只是一个配置管理系统",
                "'Intelligent proxies deployed as sidecars that mediate and control all network communication between microservices'",
                "一种数据库集群",
                "一种存储系统"
            ],
            answer: 1,
            rationale: "Istio 官方文档：数据平面由'intelligent proxies deployed as sidecars that mediate and control all network communication between microservices'组成。"
        },
        {
            id: "w7-3-q7",
            question: "Envoy 的分层过滤器架构包括哪两层？",
            options: [
                "前端层和后端层",
                "L3/L4 层（TCP/UDP、TLS）和 HTTP L7 层（路由、限流）",
                "应用层和数据层",
                "用户层和系统层"
            ],
            answer: 1,
            rationale: "官方文档：Envoy 包含两层过滤架构——L3/L4 层处理 TCP/UDP 代理、TLS 认证等；HTTP L7 层支持缓冲、限流、路由、请求镜像等功能。"
        },
        {
            id: "w7-3-q8",
            question: "Istio 的 Istiod 控制平面提供哪些功能？",
            options: [
                "只提供日志功能",
                "服务发现、配置转换为 Envoy 配置、证书管理、策略执行",
                "只提供监控功能",
                "只提供路由功能"
            ],
            answer: 1,
            rationale: "Istio 官方文档：Istiod 提供服务发现、将高级路由规则转换为 Envoy 配置、证书管理和策略执行功能。"
        },
        {
            id: "w7-3-q9",
            question: "官方文档对 Ambassador 实现重试功能的要求是什么？",
            options: [
                "无需考虑任何限制",
                "需确保被调用的操作是幂等的",
                "只能重试读操作",
                "必须使用特定的 SDK"
            ],
            answer: 1,
            rationale: "官方文档：当 Ambassador 实现重试功能时，需确保被调用的操作是幂等的，否则重试可能导致数据不一致。"
        },
        {
            id: "w7-3-q10",
            question: "Ambassador 模式不适用于以下哪种场景？",
            options: [
                "为多种语言/框架构建通用客户端连接功能",
                "为遗留应用支持云连接",
                "网络延迟是关键性能指标的场景",
                "需要将跨切面关注点卸载给基础设施团队"
            ],
            answer: 2,
            rationale: "官方文档不适用场景：网络延迟是关键性能指标、连接功能仅由单一语言使用（优先考虑客户端库）、连接功能无法泛化需与应用深度集成。"
        },
        {
            id: "w7-3-q11",
            question: "Azure 官方文档对 Ambassador 和 Sidecar 关系的描述是什么？",
            options: [
                "两者完全无关",
                "Ambassador 是 Sidecar 的一种特定用例，专注于网络/连接功能",
                "Sidecar 是 Ambassador 的子集",
                "两者是竞争关系"
            ],
            answer: 1,
            rationale: "Azure 官方文档：Ambassador 模式是 Sidecar 的一个特定用例——Ambassador 专注于网络/连接功能（代理、路由、连接管理），Sidecar 是更通用的容器模式。"
        },
        {
            id: "w7-3-q12",
            question: "Envoy 的设计哲学是什么？",
            options: [
                "让网络尽可能复杂",
                "让'网络对应用透明，当问题发生时易于诊断'",
                "让应用直接处理网络问题",
                "隐藏所有网络问题"
            ],
            answer: 1,
            rationale: "Envoy 官方文档设计哲学：让'网络对应用透明，当问题发生时易于诊断'——应用不需要关心网络细节，但网络问题容易排查。"
        }
    ],
    "w7-4": [
        {
            id: "w7-4-q1",
            question: "Azure 官方文档对 Sidecar 模式的定义是什么？",
            options: [
                "将所有功能放在一个容器中",
                "'Deploy components of an application into a separate process or container to provide isolation and encapsulation'",
                "只用于日志收集",
                "只用于监控"
            ],
            answer: 1,
            rationale: "Azure 官方文档：'Deploy components of an application into a separate process or container to provide isolation and encapsulation'——将组件部署到独立进程或容器中提供隔离和封装。"
        },
        {
            id: "w7-4-q2",
            question: "官方文档描述的 Sidecar 核心特征是什么？",
            options: [
                "与主应用完全独立部署在不同主机",
                "与主应用共置于同一主机/容器，共享生命周期",
                "只能使用相同的编程语言",
                "必须比主应用先启动"
            ],
            answer: 1,
            rationale: "官方文档：Sidecar 与主应用共置于同一主机/容器，共享相同的生命周期（同时创建和销毁），但独立的进程/容器。"
        },
        {
            id: "w7-4-q3",
            question: "Azure 官方文档对 BFF 模式的定义是什么？",
            options: [
                "为所有客户端提供相同的后端",
                "'Create separate backend services to be consumed by specific frontend applications'——为特定前端创建专用后端服务",
                "只用于移动端开发",
                "只用于 Web 开发"
            ],
            answer: 1,
            rationale: "Azure 官方文档：'Create separate backend services to be consumed by specific frontend applications or interfaces'——为不同客户端创建专用后端服务。"
        },
        {
            id: "w7-4-q4",
            question: "Sam Newman 博客对 BFF 模式的核心理念是什么？",
            options: [
                "'One API for all'——一个 API 服务所有客户端",
                "'One experience, one BFF'——每个用户体验一个 BFF",
                "'No BFF needed'——不需要 BFF",
                "'BFF is optional'——BFF 是可选的"
            ],
            answer: 1,
            rationale: "Sam Newman 博客：'One experience, one BFF'——每个独特的用户界面获得专属的后端服务，紧密耦合该特定客户端的需求。"
        },
        {
            id: "w7-4-q5",
            question: "Azure 官方文档对 IPC 延迟的警告是什么？",
            options: [
                "IPC 延迟可以忽略",
                "进程间通信开销在高频调用场景下可能不可接受",
                "IPC 比网络调用更慢",
                "IPC 只影响写操作"
            ],
            answer: 1,
            rationale: "Azure 官方文档警告：进程间通信（IPC）开销在高频调用场景下可能不可接受；性能敏感场景需评估 Sidecar 带来的延迟开销是否值得。"
        },
        {
            id: "w7-4-q6",
            question: "官方文档对 Sidecar 扩展的限制是什么？",
            options: [
                "Sidecar 可以独立于主应用扩展",
                "Sidecar 不应该独立于主应用扩展，需独立扩展的功能应部署为独立服务",
                "Sidecar 必须比主应用更多实例",
                "Sidecar 不能扩展"
            ],
            answer: 1,
            rationale: "官方文档：Sidecar 不应该独立于主应用扩展——如果某功能需要独立扩展，应该考虑将其部署为独立服务而非 Sidecar。"
        },
        {
            id: "w7-4-q7",
            question: "Azure 官方文档对 BFF 代码重复问题的建议是什么？",
            options: [
                "不允许任何代码重复",
                "需权衡代码复用与客户端体验优化",
                "必须使用共享库",
                "每个 BFF 必须完全独立"
            ],
            answer: 1,
            rationale: "Azure 官方文档：不同 BFF 之间可能出现代码重复；需权衡代码复用（抽取共享服务）与客户端体验优化（BFF 独立性）。"
        },
        {
            id: "w7-4-q8",
            question: "官方文档对 BFF 运维成本的警告是什么？",
            options: [
                "BFF 没有额外运维成本",
                "维护多个 BFF 服务增加运维开销，每个服务有独立的生命周期和安全需求",
                "BFF 会降低运维成本",
                "只有大型项目才需要考虑运维成本"
            ],
            answer: 1,
            rationale: "Azure 官方文档警告：维护多个 BFF 服务增加运维开销，每个服务有独立的生命周期、部署和安全需求；额外的网络跳转可能增加延迟。"
        },
        {
            id: "w7-4-q9",
            question: "官方文档对 BFF 与 API Gateway 职责划分的建议是什么？",
            options: [
                "BFF 应该处理所有功能",
                "BFF 处理客户端特定逻辑；跨域功能（监控、授权、限流）应在网关层",
                "API Gateway 应该处理业务逻辑",
                "两者职责完全相同"
            ],
            answer: 1,
            rationale: "Azure 官方文档：BFF 应处理客户端特定逻辑、数据聚合、分页；跨域功能（监控、授权、限流、路由）应分离到网关层。"
        },
        {
            id: "w7-4-q10",
            question: "Sidecar 模式不适用于以下哪种场景？",
            options: [
                "异构技术栈（多种语言/框架）",
                "组件需要独立于主应用扩展",
                "需要细粒度控制特定资源限制",
                "功能必须与应用在同一主机共置"
            ],
            answer: 1,
            rationale: "官方文档不适用场景：IPC 开销不可接受、小型应用部署 Sidecar 成本不值、需独立于主应用扩展的功能——这种情况应部署为独立服务。"
        },
        {
            id: "w7-4-q11",
            question: "BFF 模式不适用于以下哪种场景？",
            options: [
                "共享后端需要大量开发维护",
                "需要为不同客户端优化后端",
                "多个接口发送相同或相似的请求",
                "不同编程语言更适合特定前端"
            ],
            answer: 2,
            rationale: "Azure 官方文档 BFF 不适用场景：多个接口发送相同/相似请求（此时共享后端更高效）、只有一个接口使用后端。"
        },
        {
            id: "w7-4-q12",
            question: "官方文档对 Sidecar 进程间通信的建议是什么？",
            options: [
                "必须使用 RPC",
                "推荐使用语言/框架无关技术（HTTP、gRPC），避免过度的聊天式接口",
                "只能使用共享内存",
                "只能使用消息队列"
            ],
            answer: 1,
            rationale: "官方文档建议：进程间通信推荐使用语言/框架无关技术（HTTP、gRPC）；避免过度的聊天式接口（chatty interfaces）。"
        }
    ]
}
