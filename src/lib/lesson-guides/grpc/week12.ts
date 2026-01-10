import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week12Guides: Record<string, LessonGuide> = {
    "grpc-w12-1": {
        lessonId: "grpc-w12-1",
        background: [
            "【资源导向设计】Google Cloud API 设计指南强调 resource-oriented design（AIP-121）作为 API 设计的基础，资源是 API 的核心抽象，每个资源都有唯一的名称。",
            "【标准方法】Google Cloud API 设计指南定义了五个核心操作：Get（AIP-131 获取单个资源）、List（AIP-132 获取资源集合）、Create（AIP-133 创建资源）、Update（AIP-134 更新资源）、Delete（AIP-135 删除资源）。",
            "【字段更新安全性】Protobuf 官方文档：'Adding new fields is safe'——添加新字段是安全的，旧消息可以被新代码解析。'Removing fields is safe'——删除字段也是安全的，但不应重用字段编号。",
            "【字段编号变更】Protobuf 官方文档：'Changing field numbers for any existing field is not safe'——更改现有字段的字段编号不安全，因为它等同于删除并重新创建字段，会导致不兼容的线格式变化。",
            "【版本管理】Google Cloud API 设计指南通过 AIP-185 定义版本策略，AIP-180 定义向后兼容性原则，确保 API 演进不破坏现有客户端。"
        ],
        keyDifficulties: [
            "【Wire-Safe vs Wire-Unsafe 变更】Wire-safe 变更（添加/删除字段、添加枚举值、oneof 重构）保持向后兼容；Wire-unsafe 变更（更改字段编号、将字段移入现有 oneof）会破坏兼容性。",
            "【reserved 关键字】删除字段时最佳实践是使用 reserved 关键字保留字段编号，防止未来开发者意外重用。也可以添加 'OBSOLETE_' 前缀重命名字段。",
            "【类型转换风险】int32/int64/uint32/uint64/bool 之间的转换是兼容的但有损，值超出类型边界会被截断。sint32/sint64 相互兼容但与其他整数类型不兼容。",
            "【服务名和方法设计】gRPC 最佳实践建议使用清晰、描述性的名称，每个服务应该聚焦于特定的业务能力，保持消息精简只包含必要字段。"
        ],
        handsOnPath: [
            "设计一个资源导向的 gRPC API：定义资源（如 User、Order）和标准方法（Get、List、Create、Update、Delete），遵循 Google API 设计指南。",
            "实践向后兼容的字段演进：在现有 protobuf 消息中添加新字段，验证旧客户端仍能正常工作。",
            "使用 reserved 关键字：删除一个字段并将其编号添加到 reserved 列表，尝试重用该编号观察编译器错误。",
            "实现 API 版本管理：创建 v1 和 v2 版本的 API，使用不同的 package（如 myapi.v1 和 myapi.v2），实现版本间的渐进迁移。",
            "添加 proto 文件注释：为服务、方法和消息字段添加详细注释，生成文档并验证注释是否清晰。",
            "测试类型演进风险：将 int32 字段改为 int64，发送超出 int32 范围的值，观察旧客户端的行为。"
        ],
        selfCheck: [
            "Google Cloud API 设计指南定义的五个标准方法是什么？它们分别对应什么操作？",
            "向 protobuf 消息添加新字段是否安全？为什么？",
            "删除 protobuf 字段时的最佳实践是什么？为什么不应该重用字段编号？",
            "什么是 wire-safe 和 wire-unsafe 的变更？各举一个例子。",
            "如何设计 gRPC API 的版本管理策略？v1 和 v2 如何共存？",
            "proto 文件中的注释有什么作用？应该在哪些地方添加注释？"
        ],
        extensions: [
            "研究 Google AIP（API Improvement Proposals）：深入了解 Google 的 API 设计最佳实践和标准。",
            "探索 Buf：了解如何使用 Buf 工具进行 protobuf lint、breaking change 检测和依赖管理。",
            "学习 proto 验证：了解如何使用 protoc-gen-validate 或 buf 验证插件为 proto 字段添加验证规则。",
            "研究 gRPC API 的 Deprecation 策略：了解如何优雅地废弃 API 字段和方法。"
        ],
        sourceUrls: [
            "https://cloud.google.com/apis/design",
            "https://protobuf.dev/programming-guides/proto3/#updating",
            "https://www.bytesizego.com/blog/effective-grpc-usage-go"
        ]
    },
    "grpc-w12-2": {
        lessonId: "grpc-w12-2",
        background: [
            "【gRPC-Gateway 定义】gRPC-Gateway 官方文档：是一个 protoc 插件，'reads a gRPC service definition and generates a reverse-proxy server which translates a RESTful JSON API into gRPC'——读取 gRPC 服务定义并生成反向代理服务器，将 RESTful JSON API 转换为 gRPC。",
            "【双 API 支持】gRPC-Gateway 官方文档：支持从同一代码库同时提供 gRPC 和 RESTful JSON 接口，无需维护独立的实现，支持不同通信风格偏好的客户端。",
            "【HTTP 注解映射】gRPC-Gateway 使用 google.api.http 注解在 proto 文件中定义 REST 端点映射、HTTP 方法和请求/响应映射。",
            "【Google Cloud Transcoding】Google Cloud 官方文档：Cloud Endpoints 支持协议转码，允许客户端使用 HTTP/JSON 访问 gRPC API。Extensible Service Proxy (ESP) 执行实际的协议转码。",
            "【配置方式】gRPC-Gateway 支持三种配置方式：默认 HTTP 映射（无需修改 proto）、自定义 proto 注解（使用 google.api.http）、外部 gRPC 服务配置文件。"
        ],
        keyDifficulties: [
            "【HTTP 映射示例】List 方法：get: \"/v1/shelves\"；Get 方法：get: \"/v1/shelves/{shelf}\"；Create 方法：post: \"/v1/shelves\" body: \"shelf\"。body: \"*\" 通配符语法将所有未映射的请求字段映射到 HTTP 请求体。",
            "【资源导向设计】Google Cloud 文档建议以类似 REST API 的'资源导向方式'构建 gRPC API，使用标准方法（List、Get、Create、Update、Delete）对应 HTTP 动词。",
            "【部署端口配置】非 SSL 部署需要配置单独的端口：--http_port 用于 HTTP/1.1，--http2_port 用于 gRPC；SSL 部署可以使用单个端口同时服务两种协议。",
            "【OpenAPI 生成】gRPC-Gateway 包含 protoc-gen-openapiv2 用于自动生成 OpenAPI 规范，支持与现有 REST 生态系统工具（如 Swagger UI）集成。"
        ],
        handsOnPath: [
            "安装 gRPC-Gateway 插件：配置 protoc 或 buf 生成 gRPC-Gateway 代码。",
            "为 gRPC 服务添加 HTTP 注解：在 proto 文件中使用 google.api.http 定义 REST 端点映射。",
            "启动反向代理服务器：运行生成的 gRPC-Gateway 代码，同时提供 gRPC 和 REST 接口。",
            "使用 curl 测试 REST 端点：通过 HTTP/JSON 调用 gRPC 服务，验证请求/响应的自动转换。",
            "生成 OpenAPI 规范：使用 protoc-gen-openapiv2 生成 Swagger/OpenAPI 文档，使用 Swagger UI 浏览 API。",
            "配置自定义路由：实现路径参数、查询参数和请求体的复杂映射场景。"
        ],
        selfCheck: [
            "gRPC-Gateway 的核心功能是什么？它解决了什么问题？",
            "google.api.http 注解如何映射 HTTP 方法到 gRPC 方法？body 字段的作用是什么？",
            "gRPC-Gateway 支持哪三种配置方式？各自适用于什么场景？",
            "如何同时支持 gRPC 和 REST 客户端？端口配置有什么考虑？",
            "gRPC-Gateway 如何生成 OpenAPI 规范？这有什么好处？",
            "将现有的 REST API 迁移到 gRPC 时，gRPC-Gateway 如何帮助保持向后兼容？"
        ],
        extensions: [
            "研究 gRPC-Web：了解如何在浏览器中直接使用 gRPC，与 gRPC-Gateway 的区别和适用场景。",
            "探索 Envoy 的 gRPC-JSON transcoding：了解服务网格中的 REST-gRPC 转换能力。",
            "学习 Connect protocol：了解 Buf 的 Connect 协议如何提供原生的 HTTP 友好 gRPC。",
            "研究 Google Cloud Endpoints：了解托管的 gRPC API 网关解决方案。"
        ],
        sourceUrls: [
            "https://grpc-ecosystem.github.io/grpc-gateway/",
            "https://github.com/grpc-ecosystem/grpc-gateway",
            "https://cloud.google.com/endpoints/docs/grpc/transcoding"
        ]
    },
    "grpc-w12-3": {
        lessonId: "grpc-w12-3",
        background: [
            "【Istio gRPC 支持】Istio 官方文档：Istio 将 gRPC 视为 HTTP/2 协议，'grpc' 和 'grpc-web' 在 sidecar 和 gateway 用途上'Same as http2'——与 http2 相同。",
            "【协议选择配置】Istio 官方文档：可以通过端口命名约定（name: grpc[-<suffix>]）或 AppProtocol 字段（appProtocol: grpc）指定 gRPC 协议，'If both are defined, appProtocol takes precedence over the port name'。",
            "【Envoy gRPC 支持】Envoy 官方文档：Envoy 提供'first class support for gRPC both at the transport layer as well as at the application layer'——在传输层和应用层都提供一流的 gRPC 支持。",
            "【gRPC 桥接滤器】Envoy 提供多种桥接滤器：grpc_http1_bridge（HTTP/1.1 转 HTTP/2）、grpc_http1_reverse_bridge（gRPC 转 HTTP/1.1）、connect_grpc_bridge（Connect 协议转 gRPC）、gRPC-JSON transcoder（REST JSON 转 gRPC）。",
            "【HTTP/2 代理挑战】Envoy 官方文档：gRPC 使用 HTTP/2 进行复用和 trailers 传递请求状态，'Envoy is one of very few HTTP proxies that correctly supports'这些特性——Envoy 是少数正确支持这些特性的 HTTP 代理之一。"
        ],
        keyDifficulties: [
            "【Gateway vs Sidecar 协议检测】Istio 官方文档：sidecar 可以自动检测 HTTP/2 流量（包括 gRPC），但 gateway 需要显式协议规范才能正确转发 gRPC，不配置时 gateway 默认使用 HTTP/1.1。",
            "【Kubernetes Service 配置】正确配置 gRPC Service 需要设置 port name（如 grpc-myservice）或 appProtocol: grpc，确保 Istio/Envoy 能正确识别和处理 gRPC 流量。",
            "【gRPC-JSON Transcoder】Envoy 官方文档：'gRPC-JSON transcoder allows a RESTful JSON API client to send requests to Envoy over HTTP and get proxied to a gRPC service'——允许 REST 客户端通过 Envoy 访问 gRPC 服务。",
            "【控制平面 gRPC】Envoy 内部使用 gRPC 进行配置管理和服务功能（如速率限制和授权），提供两种客户端实现，在复杂度和高级能力之间有不同权衡。"
        ],
        handsOnPath: [
            "在 Kubernetes 中配置 gRPC Service：创建正确命名端口的 Service 定义，确保 Istio 能识别 gRPC 协议。",
            "配置 Istio Gateway 和 VirtualService：为 gRPC 服务配置入口流量路由，处理 TLS 终止和路径路由。",
            "测试 Istio 的 gRPC 负载均衡：部署多副本 gRPC 服务，观察 Istio 如何分配流量。",
            "配置 Envoy 的 gRPC-JSON transcoding：设置 transcoding 滤器，测试 REST 客户端访问 gRPC 服务。",
            "启用 gRPC 的分布式追踪：配置 Istio 或 Envoy 自动注入追踪 header，在 Jaeger 中查看 gRPC 调用链。",
            "测试 gRPC 的重试和超时策略：通过 Istio VirtualService 配置重试策略，验证故障恢复行为。"
        ],
        selfCheck: [
            "Istio 如何处理 gRPC 流量？gRPC 与 HTTP/2 在 Istio 中有什么关系？",
            "如何在 Kubernetes Service 中正确指定 gRPC 协议？有哪些配置方式？",
            "Istio Gateway 和 Sidecar 在协议检测上有什么区别？",
            "Envoy 提供哪些 gRPC 桥接滤器？各自解决什么问题？",
            "为什么说 Envoy 是少数正确支持 gRPC 的 HTTP 代理？gRPC 有什么特殊要求？",
            "在服务网格中部署 gRPC 服务的最佳实践是什么？"
        ],
        extensions: [
            "研究 Linkerd 的 gRPC 支持：了解另一个服务网格如何处理 gRPC 流量。",
            "探索 gRPC 的 xDS API：了解 gRPC 原生的控制平面集成，无需 sidecar 代理。",
            "学习 gRPC-LB 与服务网格的集成：了解客户端负载均衡如何与服务网格协作。",
            "研究 Multi-cluster gRPC：了解跨 Kubernetes 集群的 gRPC 服务发现和路由。"
        ],
        sourceUrls: [
            "https://istio.io/latest/docs/ops/configuration/traffic-management/protocol-selection/",
            "https://grpc.io/docs/",
            "https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/other_protocols/grpc"
        ]
    }
}

export const week12Quizzes: Record<string, QuizQuestion[]> = {
    "grpc-w12-1": [
        {
            id: "grpc-w12-1-q1",
            question: "Google Cloud API 设计指南定义的五个标准方法是什么？",
            options: [
                "Read、Write、Delete、Update、List",
                "Get、List、Create、Update、Delete",
                "Fetch、Store、Remove、Modify、Query",
                "Select、Insert、Delete、Update、Search"
            ],
            answer: 1,
            rationale: "Google Cloud API 设计指南定义了五个核心操作：Get（获取单个资源）、List（获取集合）、Create（创建）、Update（更新）、Delete（删除）。"
        },
        {
            id: "grpc-w12-1-q2",
            question: "Protobuf 官方文档对添加新字段的描述是什么？",
            options: [
                "添加新字段会破坏兼容性",
                "'Adding new fields is safe'——添加新字段是安全的",
                "只能在消息末尾添加新字段",
                "需要同时更新所有客户端"
            ],
            answer: 1,
            rationale: "Protobuf 官方文档：'Adding new fields is safe' because old messages serialized without them can still be parsed by new code——添加新字段是安全的。"
        },
        {
            id: "grpc-w12-1-q3",
            question: "删除 Protobuf 字段时的最佳实践是什么？",
            options: [
                "直接删除字段即可",
                "使用 reserved 关键字保留字段编号，防止未来重用",
                "将字段值设为空",
                "添加新版本的消息"
            ],
            answer: 1,
            rationale: "Protobuf 官方文档：Best practice involves either renaming the field with an 'OBSOLETE_' prefix or adding it to a reserved list to prevent accidental reuse。"
        },
        {
            id: "grpc-w12-1-q4",
            question: "Protobuf 官方文档对更改字段编号的描述是什么？",
            options: [
                "更改字段编号是安全的",
                "'Changing field numbers for any existing field is not safe'——不安全，等同于删除并重新创建字段",
                "只能增加不能减少",
                "需要发布新版本"
            ],
            answer: 1,
            rationale: "Protobuf 官方文档：'Changing field numbers for any existing field is not safe' because it's equivalent to deleting and recreating the field。"
        },
        {
            id: "grpc-w12-1-q5",
            question: "int32 和 int64 之间的类型转换有什么风险？",
            options: [
                "完全不兼容",
                "兼容但有损，值超出类型边界会被截断",
                "完全兼容无风险",
                "只能从小转大"
            ],
            answer: 1,
            rationale: "Protobuf 官方文档：Type conversions between int32/int64/uint32/uint64/bool are compatible but lossy if values exceed type boundaries。"
        },
        {
            id: "grpc-w12-1-q6",
            question: "将字段移入现有 oneof 的安全性如何？",
            options: [
                "完全安全",
                "'Moving fields into an existing oneof is not safe'——不安全，会造成向后兼容问题",
                "只在同一消息内安全",
                "需要客户端更新"
            ],
            answer: 1,
            rationale: "Protobuf 官方文档：'Moving fields into an existing oneof is not safe' and creates backward compatibility issues。"
        },
        {
            id: "grpc-w12-1-q7",
            question: "Google Cloud API 设计指南强调什么设计方法？",
            options: [
                "函数导向设计",
                "资源导向设计（resource-oriented design）",
                "事件导向设计",
                "文档导向设计"
            ],
            answer: 1,
            rationale: "Google Cloud API 设计指南强调 resource-oriented design（AIP-121）作为 API 设计的基础。"
        },
        {
            id: "grpc-w12-1-q8",
            question: "gRPC 服务设计的最佳实践建议是什么？",
            options: [
                "每个服务包含所有功能",
                "每个服务应该聚焦于特定的业务能力",
                "服务越大越好",
                "避免使用多个服务"
            ],
            answer: 1,
            rationale: "gRPC 最佳实践建议：Focus on specific capabilities: Each service should target a distinct business capability to improve maintainability and clarity。"
        },
        {
            id: "grpc-w12-1-q9",
            question: "添加新枚举值的兼容性如何？",
            options: [
                "完全不兼容",
                "保持兼容，但可能破坏使用穷尽 switch 语句的应用代码",
                "只能在末尾添加",
                "需要更新所有客户端"
            ],
            answer: 1,
            rationale: "Protobuf 官方文档：Adding new enum values maintains compatibility, though it may break application code with exhaustive switch statements。"
        },
        {
            id: "grpc-w12-1-q10",
            question: "sint32 和 sint64 的兼容性如何？",
            options: [
                "与所有整数类型兼容",
                "相互兼容但与其他整数类型不兼容",
                "完全不兼容",
                "只与 int32 兼容"
            ],
            answer: 1,
            rationale: "Protobuf 官方文档：sint32/sint64 are compatible with each other but not other integer types。"
        },
        {
            id: "grpc-w12-1-q11",
            question: "gRPC 最佳实践对 proto 文件注释的建议是什么？",
            options: [
                "不需要注释",
                "只注释服务",
                "'Document everything': Add comments in .proto files to provide context",
                "只注释复杂字段"
            ],
            answer: 2,
            rationale: "gRPC 最佳实践建议：Document everything: Add comments in .proto files to provide context for future developers。"
        },
        {
            id: "grpc-w12-1-q12",
            question: "gRPC 最佳实践对消息设计的建议是什么？",
            options: [
                "包含所有可能的字段",
                "'Keep messages lean': Include only necessary fields",
                "使用嵌套消息",
                "避免使用 repeated 字段"
            ],
            answer: 1,
            rationale: "gRPC 最佳实践建议：Keep messages lean: Include only necessary fields to improve performance and reduce serialization time。"
        }
    ],
    "grpc-w12-2": [
        {
            id: "grpc-w12-2-q1",
            question: "gRPC-Gateway 官方对其功能的描述是什么？",
            options: [
                "一个 gRPC 客户端库",
                "'Reads a gRPC service definition and generates a reverse-proxy server which translates a RESTful JSON API into gRPC'",
                "一个性能测试工具",
                "一个代码生成器"
            ],
            answer: 1,
            rationale: "gRPC-Gateway 官方文档：是一个 protoc 插件，'reads a gRPC service definition and generates a reverse-proxy server which translates a RESTful JSON API into gRPC'。"
        },
        {
            id: "grpc-w12-2-q2",
            question: "gRPC-Gateway 的核心价值是什么？",
            options: [
                "提高 gRPC 性能",
                "从同一代码库同时提供 gRPC 和 RESTful JSON 接口",
                "简化 protobuf 定义",
                "提供安全认证"
            ],
            answer: 1,
            rationale: "gRPC-Gateway 官方文档：支持从同一代码库同时提供 gRPC 和 RESTful JSON 接口，无需维护独立的实现。"
        },
        {
            id: "grpc-w12-2-q3",
            question: "List 方法的 HTTP 映射示例是什么？",
            options: [
                "post: \"/v1/shelves\"",
                "get: \"/v1/shelves\"",
                "put: \"/v1/shelves\"",
                "delete: \"/v1/shelves\""
            ],
            answer: 1,
            rationale: "Google Cloud 文档示例：List Method: option (google.api.http) = { get: \"/v1/shelves\" };。"
        },
        {
            id: "grpc-w12-2-q4",
            question: "google.api.http 注解中 body: \"*\" 的含义是什么？",
            options: [
                "接受任意内容类型",
                "将所有未映射的请求字段映射到 HTTP 请求体",
                "允许空请求体",
                "压缩请求体"
            ],
            answer: 1,
            rationale: "Google Cloud 文档：The body: \"*\" wildcard syntax maps all unmapped request fields to the HTTP request body。"
        },
        {
            id: "grpc-w12-2-q5",
            question: "gRPC-Gateway 支持哪三种配置方式？",
            options: [
                "YAML、JSON、XML",
                "默认 HTTP 映射、自定义 proto 注解、外部 gRPC 服务配置文件",
                "环境变量、配置文件、命令行",
                "代码、注解、API"
            ],
            answer: 1,
            rationale: "gRPC-Gateway 支持三种配置方式：默认 HTTP 映射（无需修改 proto）、自定义 proto 注解（使用 google.api.http）、外部 gRPC 服务配置文件。"
        },
        {
            id: "grpc-w12-2-q6",
            question: "非 SSL 部署 gRPC-Gateway 需要如何配置端口？",
            options: [
                "只需要一个端口",
                "需要配置单独的端口：--http_port 用于 HTTP/1.1，--http2_port 用于 gRPC",
                "不支持非 SSL 部署",
                "自动选择端口"
            ],
            answer: 1,
            rationale: "Google Cloud 文档：For non-SSL deployments, configure separate ports: --http_port for HTTP/1.1 and --http2_port for gRPC。"
        },
        {
            id: "grpc-w12-2-q7",
            question: "gRPC-Gateway 如何生成 OpenAPI 规范？",
            options: [
                "手动编写",
                "包含 protoc-gen-openapiv2 用于自动生成",
                "从运行时反射生成",
                "不支持 OpenAPI"
            ],
            answer: 1,
            rationale: "gRPC-Gateway 包含 protoc-gen-openapiv2 for automatic OpenAPI specification generation。"
        },
        {
            id: "grpc-w12-2-q8",
            question: "Google Cloud HTTP/JSON transcoding 默认是否启用？",
            options: [
                "默认禁用",
                "HTTP/JSON transcoding is enabled by default——默认启用",
                "需要付费启用",
                "只在特定区域启用"
            ],
            answer: 1,
            rationale: "Google Cloud 文档：HTTP/JSON transcoding is enabled by default。"
        },
        {
            id: "grpc-w12-2-q9",
            question: "Create 方法的 HTTP 映射示例中 body 字段通常设置为什么？",
            options: [
                "body: \"*\"",
                "body: \"shelf\"（资源名称）",
                "body: \"\"",
                "没有 body 字段"
            ],
            answer: 1,
            rationale: "Google Cloud 文档示例：Create Method: option (google.api.http) = { post: \"/v1/shelves\" body: \"shelf\" };。"
        },
        {
            id: "grpc-w12-2-q10",
            question: "Google Cloud 文档建议如何构建 gRPC API？",
            options: [
                "以函数为中心",
                "以'resource-oriented way'类似 REST API 的资源导向方式",
                "以事件为中心",
                "以数据流为中心"
            ],
            answer: 1,
            rationale: "Google Cloud 文档：recommends structuring gRPC APIs in a 'resource-oriented way' similar to REST APIs。"
        },
        {
            id: "grpc-w12-2-q11",
            question: "SSL 部署 gRPC-Gateway 的端口配置是什么？",
            options: [
                "需要两个独立端口",
                "可以使用单个端口同时服务 gRPC 和 HTTP",
                "只能使用 HTTPS 端口",
                "不支持 SSL"
            ],
            answer: 1,
            rationale: "Google Cloud 文档：SSL deployments can use a single port for both protocols。"
        },
        {
            id: "grpc-w12-2-q12",
            question: "执行 HTTP/JSON 到 gRPC 转码的组件是什么？",
            options: [
                "gRPC 服务器",
                "Extensible Service Proxy (ESP)",
                "Kubernetes Ingress",
                "DNS 服务器"
            ],
            answer: 1,
            rationale: "Google Cloud 文档：The Extensible Service Proxy (ESP) performs the actual transcoding between protocols。"
        }
    ],
    "grpc-w12-3": [
        {
            id: "grpc-w12-3-q1",
            question: "Istio 如何处理 gRPC 协议？",
            options: [
                "作为独立协议处理",
                "将 gRPC 视为 HTTP/2 协议，'grpc' 和 'grpc-web' 与 http2 相同",
                "不支持 gRPC",
                "需要特殊插件"
            ],
            answer: 1,
            rationale: "Istio 官方文档：Istio treats gRPC as an HTTP/2 protocol，'grpc' and 'grpc-web' are 'Same as http2' for sidecar and gateway purposes。"
        },
        {
            id: "grpc-w12-3-q2",
            question: "Istio 中如何指定 gRPC 协议？",
            options: [
                "只能通过 ConfigMap",
                "端口命名约定（name: grpc[-<suffix>]）或 AppProtocol 字段（appProtocol: grpc）",
                "通过环境变量",
                "只能通过 Istio CRD"
            ],
            answer: 1,
            rationale: "Istio 官方文档：可以通过端口命名约定（name: grpc[-<suffix>]）或 AppProtocol 字段（appProtocol: grpc）指定 gRPC 协议。"
        },
        {
            id: "grpc-w12-3-q3",
            question: "当端口名和 appProtocol 都定义时，Istio 使用哪个？",
            options: [
                "使用端口名",
                "'If both are defined, appProtocol takes precedence over the port name'——appProtocol 优先",
                "报错",
                "随机选择"
            ],
            answer: 1,
            rationale: "Istio 官方文档：'If both are defined, appProtocol takes precedence over the port name'。"
        },
        {
            id: "grpc-w12-3-q4",
            question: "Envoy 官方对 gRPC 支持的描述是什么？",
            options: [
                "基本支持",
                "'First class support for gRPC both at the transport layer as well as at the application layer'——一流支持",
                "有限支持",
                "不支持"
            ],
            answer: 1,
            rationale: "Envoy 官方文档：Envoy provides 'first class support for gRPC both at the transport layer as well as at the application layer'。"
        },
        {
            id: "grpc-w12-3-q5",
            question: "Envoy 提供哪些 gRPC 桥接滤器？",
            options: [
                "只有 grpc_http1_bridge",
                "grpc_http1_bridge、grpc_http1_reverse_bridge、connect_grpc_bridge、gRPC-JSON transcoder",
                "只有 gRPC-JSON transcoder",
                "不提供桥接滤器"
            ],
            answer: 1,
            rationale: "Envoy 提供多种桥接滤器：grpc_http1_bridge、grpc_http1_reverse_bridge、connect_grpc_bridge、gRPC-JSON transcoder。"
        },
        {
            id: "grpc-w12-3-q6",
            question: "为什么 Envoy 能正确支持 gRPC？",
            options: [
                "因为 gRPC 很简单",
                "因为 gRPC 使用 HTTP/2 复用和 trailers 传递状态，'Envoy is one of very few HTTP proxies that correctly supports'这些特性",
                "因为 Envoy 专为 gRPC 设计",
                "因为 gRPC 和 HTTP/1.1 相同"
            ],
            answer: 1,
            rationale: "Envoy 官方文档：gRPC 使用 HTTP/2 进行复用和 trailers 传递请求状态，'Envoy is one of very few HTTP proxies that correctly supports'这些特性。"
        },
        {
            id: "grpc-w12-3-q7",
            question: "Istio Gateway 和 Sidecar 在协议检测上有什么区别？",
            options: [
                "完全相同",
                "Sidecar 可以自动检测 HTTP/2，但 Gateway 需要显式协议规范，否则默认使用 HTTP/1.1",
                "Gateway 自动检测，Sidecar 需要配置",
                "两者都不支持自动检测"
            ],
            answer: 1,
            rationale: "Istio 官方文档：Unlike sidecars that auto-detect protocols, gateways require explicit protocol specification for proper gRPC forwarding. Without explicit configuration, gateways default to HTTP/1.1。"
        },
        {
            id: "grpc-w12-3-q8",
            question: "gRPC-JSON transcoder 的功能是什么？",
            options: [
                "将 gRPC 转换为二进制格式",
                "'Allows a RESTful JSON API client to send requests to Envoy over HTTP and get proxied to a gRPC service'",
                "压缩 JSON 数据",
                "验证 JSON 格式"
            ],
            answer: 1,
            rationale: "Envoy 官方文档：'gRPC-JSON transcoder allows a RESTful JSON API client to send requests to Envoy over HTTP and get proxied to a gRPC service'。"
        },
        {
            id: "grpc-w12-3-q9",
            question: "grpc_http1_bridge 滤器的功能是什么？",
            options: [
                "只转换响应",
                "接受 HTTP/1.1 的 gRPC 请求，转换为 HTTP/2 或 HTTP/3 发送到上游，并将响应转回 HTTP/1.1",
                "只转换请求",
                "压缩数据"
            ],
            answer: 1,
            rationale: "Envoy 官方文档：grpc_http1_bridge accepts gRPC requests over HTTP/1.1, converts them to HTTP/2 or HTTP/3 for upstream transport, and translates responses back to HTTP/1.1。"
        },
        {
            id: "grpc-w12-3-q10",
            question: "Kubernetes Service 中正确配置 gRPC 的示例是什么？",
            options: [
                "port: 50051 name: tcp",
                "port: 50051 name: grpc appProtocol: grpc",
                "port: 50051 protocol: gRPC",
                "port: 50051 type: gRPC"
            ],
            answer: 1,
            rationale: "Istio 文档示例：ports: - port: 50051 name: grpc appProtocol: grpc。"
        },
        {
            id: "grpc-w12-3-q11",
            question: "Envoy 内部使用 gRPC 做什么？",
            options: [
                "只用于日志",
                "进行配置管理和服务功能（如速率限制和授权）",
                "只用于健康检查",
                "不内部使用 gRPC"
            ],
            answer: 1,
            rationale: "Envoy 官方文档：Envoy uses gRPC internally for configuration management and service features like rate limiting and authorization。"
        },
        {
            id: "grpc-w12-3-q12",
            question: "grpc_http1_reverse_bridge 滤器的功能是什么？",
            options: [
                "将 HTTP/1.1 转换为 gRPC",
                "将传入的 gRPC 请求转换为 HTTP/1.1 发送到上游，然后将响应转回 gRPC 格式",
                "只处理 streaming",
                "压缩 gRPC 数据"
            ],
            answer: 1,
            rationale: "Envoy 官方文档：grpc_http1_reverse_bridge translates incoming gRPC requests to HTTP/1.1 for upstream services, then converts responses back to gRPC format。"
        }
    ]
}
