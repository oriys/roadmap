import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const grpcStages: Stage[] = [
    {
        id: "phase1",
        title: "基础入门",
        duration: "第 1-3 周",
        goal: "理解 gRPC 核心概念，掌握 Protocol Buffers，完成第一个 gRPC 服务",
        weeks: [
            {
                id: "w1",
                title: "gRPC 概述与核心概念",
                summary: "理解 gRPC 的设计理念、架构特点和核心组件",
                overview: "gRPC 是 Google 开源的高性能 RPC 框架，基于 HTTP/2 和 Protocol Buffers。本周将深入理解 gRPC 的设计哲学、与 REST 的对比、以及其核心架构组件。",
                keyPoints: [
                    "gRPC 基于 HTTP/2 协议，支持双向流、多路复用和头部压缩",
                    "使用 Protocol Buffers 作为默认的 IDL 和序列化格式",
                    "支持四种 RPC 模式：Unary、Server Streaming、Client Streaming、Bidirectional Streaming",
                    "跨语言支持：客户端和服务端可以使用不同的编程语言实现"
                ],
                lessons: [
                    {
                        id: "grpc-w1-1",
                        title: "gRPC 简介与设计理念",
                        detail: "理解 gRPC 的核心设计理念、适用场景和技术优势",
                        resources: [
                            { title: "gRPC 官方介绍", url: "https://grpc.io/docs/what-is-grpc/introduction/" },
                            { title: "gRPC 核心概念", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" },
                            { title: "gRPC FAQ", url: "https://grpc.io/docs/what-is-grpc/faq/" }
                        ]
                    },
                    {
                        id: "grpc-w1-2",
                        title: "gRPC vs REST：架构对比",
                        detail: "深入对比 gRPC 和 REST 的架构差异、性能特点和适用场景",
                        resources: [
                            { title: "gRPC 概念理解与最佳实践", url: "https://www.infracloud.io/blogs/understanding-grpc-concepts-best-practices/" },
                            { title: "gRPC 官方文档", url: "https://grpc.io/docs/" },
                            { title: "awesome-grpc 资源汇总", url: "https://github.com/grpc-ecosystem/awesome-grpc" }
                        ]
                    },
                    {
                        id: "grpc-w1-3",
                        title: "HTTP/2 协议基础",
                        detail: "理解 HTTP/2 的核心特性：多路复用、流控制、头部压缩",
                        resources: [
                            { title: "HTTP/2 RFC 规范", url: "https://www.rfc-editor.org/rfc/rfc7540" },
                            { title: "HTTP/2 简介 (Google)", url: "https://developers.google.com/web/fundamentals/performance/http2" },
                            { title: "gRPC on HTTP/2", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" }
                        ]
                    }
                ]
            },
            {
                id: "w2",
                title: "Protocol Buffers 深入",
                summary: "掌握 Protocol Buffers 语法、类型系统和最佳实践",
                overview: "Protocol Buffers 是 gRPC 的基石。本周将深入学习 proto3 语法、消息定义、枚举、服务声明，以及 protoc 编译器的使用。",
                keyPoints: [
                    "proto3 是推荐的协议版本，语法更简洁",
                    "字段编号是消息兼容性的关键，一旦使用不应更改",
                    "支持标量类型、枚举、嵌套消息、repeated 字段和 map",
                    "protoc 编译器生成各语言的客户端和服务端代码"
                ],
                lessons: [
                    {
                        id: "grpc-w2-1",
                        title: "Proto3 语法与消息定义",
                        detail: "学习 proto3 语法规范、标量类型、消息结构和字段规则",
                        resources: [
                            { title: "Protocol Buffers 官方文档", url: "https://protobuf.dev/" },
                            { title: "Proto3 语言指南", url: "https://protobuf.dev/programming-guides/proto3/" },
                            { title: "Protocol Buffers 概述", url: "https://protobuf.dev/overview/" }
                        ]
                    },
                    {
                        id: "grpc-w2-2",
                        title: "高级类型：枚举、Oneof、Map 和 Any",
                        detail: "掌握 Protocol Buffers 的高级类型系统和使用场景",
                        resources: [
                            { title: "Proto3 编程指南", url: "https://protobuf.dev/programming-guides/proto3/" },
                            { title: "Well-Known Types", url: "https://protobuf.dev/reference/protobuf/google.protobuf/" },
                            { title: "Protocol Buffers 参考", url: "https://protobuf.dev/reference/" }
                        ]
                    },
                    {
                        id: "grpc-w2-3",
                        title: "protoc 编译器与代码生成",
                        detail: "使用 protoc 生成多语言代码，理解生成代码的结构",
                        resources: [
                            { title: "Protocol Buffers 入门教程", url: "https://protobuf.dev/getting-started/" },
                            { title: "protobuf GitHub 仓库", url: "https://github.com/protocolbuffers/protobuf" },
                            { title: "Proto3 编程指南", url: "https://protobuf.dev/programming-guides/" }
                        ]
                    }
                ]
            },
            {
                id: "w3",
                title: "第一个 gRPC 服务",
                summary: "动手实现完整的 gRPC 客户端和服务端",
                overview: "理论结合实践。本周将从零开始，定义 proto 文件，生成代码，实现服务端和客户端，完成一个完整的 gRPC 通信示例。",
                keyPoints: [
                    "服务定义在 .proto 文件中，使用 service 关键字",
                    "服务端实现服务接口，启动 gRPC Server 监听请求",
                    "客户端通过 Stub 调用远程方法，如同本地调用",
                    "Channel 是客户端与服务端之间的连接抽象"
                ],
                lessons: [
                    {
                        id: "grpc-w3-1",
                        title: "定义 gRPC 服务接口",
                        detail: "在 .proto 文件中定义服务、方法和消息类型",
                        resources: [
                            { title: "gRPC 快速入门 (Go)", url: "https://grpc.io/docs/languages/go/quickstart/" },
                            { title: "gRPC 快速入门 (Java)", url: "https://grpc.io/docs/languages/java/quickstart/" },
                            { title: "gRPC 快速入门 (Python)", url: "https://grpc.io/docs/languages/python/quickstart/" }
                        ]
                    },
                    {
                        id: "grpc-w3-2",
                        title: "实现 gRPC 服务端",
                        detail: "实现服务接口，启动 gRPC Server，处理客户端请求",
                        resources: [
                            { title: "gRPC 基础教程 (Go)", url: "https://grpc.io/docs/languages/go/basics/" },
                            { title: "gRPC 基础教程 (Java)", url: "https://grpc.io/docs/languages/java/basics/" },
                            { title: "gRPC 基础教程 (Python)", url: "https://grpc.io/docs/languages/python/basics/" }
                        ]
                    },
                    {
                        id: "grpc-w3-3",
                        title: "实现 gRPC 客户端",
                        detail: "创建 Channel 和 Stub，发起 RPC 调用，处理响应",
                        resources: [
                            { title: "gRPC 基础教程 (Go)", url: "https://grpc.io/docs/languages/go/basics/" },
                            { title: "gRPC 生成代码参考 (Go)", url: "https://grpc.io/docs/languages/go/generated-code/" },
                            { title: "gRPC API 参考", url: "https://grpc.io/docs/languages/" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "phase2",
        title: "核心机制",
        duration: "第 4-6 周",
        goal: "掌握四种 RPC 模式、错误处理、Metadata 和 Deadline 机制",
        weeks: [
            {
                id: "w4",
                title: "四种 RPC 模式",
                summary: "深入理解 Unary、Server Streaming、Client Streaming 和 Bidirectional Streaming",
                overview: "gRPC 支持四种 RPC 模式，适用于不同的通信场景。本周将逐一学习每种模式的特点、实现方式和适用场景。",
                keyPoints: [
                    "Unary RPC：一请求一响应，最常见的 RPC 模式",
                    "Server Streaming：客户端发送一个请求，服务端返回消息流",
                    "Client Streaming：客户端发送消息流，服务端返回一个响应",
                    "Bidirectional Streaming：双向独立的消息流，顺序灵活"
                ],
                lessons: [
                    {
                        id: "grpc-w4-1",
                        title: "Unary RPC 详解",
                        detail: "理解 Unary RPC 的工作流程、生命周期和实现细节",
                        resources: [
                            { title: "gRPC 核心概念", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" },
                            { title: "gRPC 基础教程 (Go)", url: "https://grpc.io/docs/languages/go/basics/" },
                            { title: "gRPC 基础教程 (Java)", url: "https://grpc.io/docs/languages/java/basics/" }
                        ]
                    },
                    {
                        id: "grpc-w4-2",
                        title: "Server Streaming 与 Client Streaming",
                        detail: "实现单向流式 RPC，处理大数据传输和实时推送场景",
                        resources: [
                            { title: "gRPC 核心概念 - 流式 RPC", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" },
                            { title: "gRPC 基础教程 (Python)", url: "https://grpc.io/docs/languages/python/basics/" },
                            { title: "流控制指南", url: "https://grpc.io/docs/guides/flow-control/" }
                        ]
                    },
                    {
                        id: "grpc-w4-3",
                        title: "Bidirectional Streaming",
                        detail: "实现双向流式 RPC，适用于实时通信和聊天场景",
                        resources: [
                            { title: "gRPC 核心概念", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" },
                            { title: "gRPC 基础教程 (Go)", url: "https://grpc.io/docs/languages/go/basics/" },
                            { title: "性能最佳实践", url: "https://grpc.io/docs/guides/performance/" }
                        ]
                    }
                ]
            },
            {
                id: "w5",
                title: "错误处理与状态码",
                summary: "掌握 gRPC 错误处理机制和标准状态码",
                overview: "gRPC 定义了一套标准的状态码体系。本周将学习如何正确使用状态码、传递错误详情、以及在客户端处理各种错误情况。",
                keyPoints: [
                    "gRPC 定义了 17 个标准状态码（OK 到 UNAUTHENTICATED）",
                    "区分 gRPC 库生成的错误和应用程序生成的错误",
                    "使用 google.rpc.Status 传递丰富的错误详情",
                    "客户端应根据状态码决定重试策略"
                ],
                lessons: [
                    {
                        id: "grpc-w5-1",
                        title: "gRPC 状态码体系",
                        detail: "理解所有 gRPC 状态码的含义和使用场景",
                        resources: [
                            { title: "gRPC 状态码指南", url: "https://grpc.io/docs/guides/status-codes/" },
                            { title: "gRPC 错误处理", url: "https://grpc.io/docs/guides/error/" },
                            { title: "gRPC 核心概念", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" }
                        ]
                    },
                    {
                        id: "grpc-w5-2",
                        title: "错误详情与 Rich Error Model",
                        detail: "使用 google.rpc.Status 和标准错误详情类型传递结构化错误信息",
                        resources: [
                            { title: "gRPC 错误处理指南", url: "https://grpc.io/docs/guides/error/" },
                            { title: "Google API 错误模型", url: "https://cloud.google.com/apis/design/errors" },
                            { title: "googleapis/googleapis", url: "https://github.com/googleapis/googleapis/blob/master/google/rpc/error_details.proto" }
                        ]
                    },
                    {
                        id: "grpc-w5-3",
                        title: "客户端错误处理策略",
                        detail: "在客户端正确处理错误，实现重试逻辑和降级策略",
                        resources: [
                            { title: "gRPC 重试指南", url: "https://grpc.io/docs/guides/retry/" },
                            { title: "请求对冲 (Hedging)", url: "https://grpc.io/docs/guides/request-hedging/" },
                            { title: "Wait-for-Ready 指南", url: "https://grpc.io/docs/guides/wait-for-ready/" }
                        ]
                    }
                ]
            },
            {
                id: "w6",
                title: "Metadata 与 Deadline",
                summary: "掌握 gRPC 的元数据传递和超时控制机制",
                overview: "Metadata 用于传递请求上下文信息（如认证令牌、追踪 ID），Deadline 用于控制 RPC 超时。本周将深入学习这两个关键机制。",
                keyPoints: [
                    "Metadata 是键值对形式的边信道信息，通过 HTTP/2 头部传输",
                    "Headers 在请求/响应开始时发送，Trailers 在结束时发送",
                    "Deadline 指定 RPC 的绝对截止时间，超时返回 DEADLINE_EXCEEDED",
                    "Deadline 可以在服务链中传播，自动扣减已消耗时间"
                ],
                lessons: [
                    {
                        id: "grpc-w6-1",
                        title: "Metadata 传递机制",
                        detail: "理解 Metadata 的结构、传输方式和常见用途",
                        resources: [
                            { title: "gRPC Metadata 指南", url: "https://grpc.io/docs/guides/metadata/" },
                            { title: "gRPC 核心概念", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" },
                            { title: "gRPC 认证指南", url: "https://grpc.io/docs/guides/auth/" }
                        ]
                    },
                    {
                        id: "grpc-w6-2",
                        title: "Deadline 与超时控制",
                        detail: "设置和传播 Deadline，处理超时场景",
                        resources: [
                            { title: "gRPC Deadline 指南", url: "https://grpc.io/docs/guides/deadlines/" },
                            { title: "gRPC 核心概念", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" },
                            { title: "gRPC 取消指南", url: "https://grpc.io/docs/guides/cancellation/" }
                        ]
                    },
                    {
                        id: "grpc-w6-3",
                        title: "RPC 取消与传播",
                        detail: "理解 RPC 取消机制及其在服务链中的传播",
                        resources: [
                            { title: "gRPC 取消指南", url: "https://grpc.io/docs/guides/cancellation/" },
                            { title: "gRPC Deadline 指南", url: "https://grpc.io/docs/guides/deadlines/" },
                            { title: "gRPC 核心概念", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "phase3",
        title: "进阶特性",
        duration: "第 7-9 周",
        goal: "掌握拦截器、认证安全、负载均衡和服务发现",
        weeks: [
            {
                id: "w7",
                title: "拦截器与中间件",
                summary: "使用拦截器实现横切关注点：日志、认证、监控",
                overview: "拦截器是 gRPC 的中间件机制，用于在 RPC 调用前后注入通用逻辑。本周将学习如何实现和组合拦截器。",
                keyPoints: [
                    "拦截器分为客户端拦截器和服务端拦截器",
                    "Unary 拦截器和 Streaming 拦截器分别处理不同的 RPC 类型",
                    "多个拦截器按顺序形成拦截器链",
                    "常见用途：日志、指标收集、认证、授权、错误处理"
                ],
                lessons: [
                    {
                        id: "grpc-w7-1",
                        title: "拦截器基础",
                        detail: "理解拦截器的工作原理和类型分类",
                        resources: [
                            { title: "gRPC 拦截器指南", url: "https://grpc.io/docs/guides/interceptors/" },
                            { title: "gRPC 基础教程", url: "https://grpc.io/docs/languages/go/basics/" },
                            { title: "grpc-ecosystem/go-grpc-middleware", url: "https://github.com/grpc-ecosystem/go-grpc-middleware" }
                        ]
                    },
                    {
                        id: "grpc-w7-2",
                        title: "服务端拦截器实战",
                        detail: "实现服务端日志、认证和授权拦截器",
                        resources: [
                            { title: "gRPC 拦截器指南", url: "https://grpc.io/docs/guides/interceptors/" },
                            { title: "go-grpc-middleware", url: "https://github.com/grpc-ecosystem/go-grpc-middleware" },
                            { title: "gRPC 认证指南", url: "https://grpc.io/docs/guides/auth/" }
                        ]
                    },
                    {
                        id: "grpc-w7-3",
                        title: "客户端拦截器实战",
                        detail: "实现客户端重试、超时和指标收集拦截器",
                        resources: [
                            { title: "gRPC 拦截器指南", url: "https://grpc.io/docs/guides/interceptors/" },
                            { title: "gRPC 重试指南", url: "https://grpc.io/docs/guides/retry/" },
                            { title: "OpenTelemetry 指标", url: "https://grpc.io/docs/guides/opentelemetry-metrics/" }
                        ]
                    }
                ]
            },
            {
                id: "w8",
                title: "认证与安全",
                summary: "实现 gRPC 服务的认证和传输安全",
                overview: "安全是生产系统的基础。本周将学习 gRPC 的内置认证机制、TLS 配置和自定义认证实现。",
                keyPoints: [
                    "gRPC 支持 SSL/TLS 传输加密，推荐在生产环境使用",
                    "Channel Credentials 用于通道级别的认证（如 TLS）",
                    "Call Credentials 用于每次调用的认证（如 OAuth2 Token）",
                    "可以组合多种凭证实现复合认证策略"
                ],
                lessons: [
                    {
                        id: "grpc-w8-1",
                        title: "TLS/SSL 传输安全",
                        detail: "配置 gRPC 的 TLS 加密，实现服务端和双向认证",
                        resources: [
                            { title: "gRPC 认证指南", url: "https://grpc.io/docs/guides/auth/" },
                            { title: "gRPC 安全最佳实践", url: "https://grpc.io/docs/guides/" },
                            { title: "TLS 基础 (Mozilla)", url: "https://wiki.mozilla.org/Security/Server_Side_TLS" }
                        ]
                    },
                    {
                        id: "grpc-w8-2",
                        title: "Token 认证与 OAuth2",
                        detail: "实现基于 Token 的认证，集成 OAuth2 和 JWT",
                        resources: [
                            { title: "gRPC 认证指南", url: "https://grpc.io/docs/guides/auth/" },
                            { title: "gRPC Metadata 指南", url: "https://grpc.io/docs/guides/metadata/" },
                            { title: "gRPC API 安全最佳实践", url: "https://www.stackhawk.com/blog/best-practices-for-grpc-security/" }
                        ]
                    },
                    {
                        id: "grpc-w8-3",
                        title: "自定义认证与授权",
                        detail: "实现自定义认证机制和细粒度的授权控制",
                        resources: [
                            { title: "gRPC 认证指南", url: "https://grpc.io/docs/guides/auth/" },
                            { title: "gRPC 拦截器指南", url: "https://grpc.io/docs/guides/interceptors/" },
                            { title: "grpc-ecosystem/go-grpc-middleware", url: "https://github.com/grpc-ecosystem/go-grpc-middleware" }
                        ]
                    }
                ]
            },
            {
                id: "w9",
                title: "负载均衡与服务发现",
                summary: "实现 gRPC 的客户端负载均衡和服务发现",
                overview: "gRPC 内置了客户端负载均衡支持。本周将学习负载均衡策略、自定义 Name Resolver 和服务发现集成。",
                keyPoints: [
                    "gRPC 推荐使用客户端负载均衡（Thick Client）",
                    "内置策略：pick_first（默认）、round_robin",
                    "通过 Name Resolver 集成服务发现（DNS、Consul、etcd）",
                    "可以实现自定义负载均衡策略"
                ],
                lessons: [
                    {
                        id: "grpc-w9-1",
                        title: "gRPC 负载均衡机制",
                        detail: "理解 gRPC 的负载均衡架构和内置策略",
                        resources: [
                            { title: "gRPC 负载均衡策略", url: "https://grpc.io/docs/guides/custom-load-balancing/" },
                            { title: "gRPC 自定义名称解析", url: "https://grpc.io/docs/guides/custom-name-resolution/" },
                            { title: "gRPC 负载均衡 Blog", url: "https://grpc.io/blog/grpc-load-balancing/" }
                        ]
                    },
                    {
                        id: "grpc-w9-2",
                        title: "服务发现与 Name Resolver",
                        detail: "实现自定义 Name Resolver，集成 Consul、etcd 等服务发现",
                        resources: [
                            { title: "gRPC 自定义名称解析", url: "https://grpc.io/docs/guides/custom-name-resolution/" },
                            { title: "gRPC 服务配置", url: "https://grpc.io/docs/guides/service-config/" },
                            { title: "gRPC 文档", url: "https://grpc.io/docs/guides/" }
                        ]
                    },
                    {
                        id: "grpc-w9-3",
                        title: "自定义负载均衡策略",
                        detail: "实现自定义负载均衡策略，如加权轮询、一致性哈希",
                        resources: [
                            { title: "gRPC 自定义负载均衡", url: "https://grpc.io/docs/guides/custom-load-balancing/" },
                            { title: "gRPC 自定义后端指标", url: "https://grpc.io/docs/guides/custom-backend-metrics/" },
                            { title: "gRPC 指南", url: "https://grpc.io/docs/guides/" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "phase4",
        title: "生产实践",
        duration: "第 10-12 周",
        goal: "性能优化、监控调试、微服务架构实践",
        weeks: [
            {
                id: "w10",
                title: "性能优化",
                summary: "优化 gRPC 服务的吞吐量和延迟",
                overview: "生产环境对性能有严格要求。本周将学习 gRPC 的性能最佳实践、连接管理和压缩配置。",
                keyPoints: [
                    "复用 Channel 和 Stub，避免频繁创建连接",
                    "使用 Keepalive 保持连接活跃，减少冷启动延迟",
                    "根据场景选择流式 RPC 还是 Unary RPC",
                    "启用消息压缩减少网络传输"
                ],
                lessons: [
                    {
                        id: "grpc-w10-1",
                        title: "连接管理与复用",
                        detail: "优化 Channel 和连接池配置，实现高效的连接复用",
                        resources: [
                            { title: "gRPC 性能最佳实践", url: "https://grpc.io/docs/guides/performance/" },
                            { title: "gRPC Keepalive 指南", url: "https://grpc.io/docs/guides/keepalive/" },
                            { title: "gRPC 核心概念", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" }
                        ]
                    },
                    {
                        id: "grpc-w10-2",
                        title: "消息压缩与流控制",
                        detail: "配置消息压缩，实现流量控制防止资源耗尽",
                        resources: [
                            { title: "gRPC 压缩指南", url: "https://grpc.io/docs/guides/compression/" },
                            { title: "gRPC 流控制指南", url: "https://grpc.io/docs/guides/flow-control/" },
                            { title: "gRPC 性能最佳实践", url: "https://grpc.io/docs/guides/performance/" }
                        ]
                    },
                    {
                        id: "grpc-w10-3",
                        title: "基准测试与性能分析",
                        detail: "使用 gRPC 基准测试工具，分析和优化性能瓶颈",
                        resources: [
                            { title: "gRPC 基准测试", url: "https://grpc.io/docs/guides/benchmarking/" },
                            { title: "gRPC 性能最佳实践", url: "https://grpc.io/docs/guides/performance/" },
                            { title: "gRPC 调试指南", url: "https://grpc.io/docs/guides/debugging/" }
                        ]
                    }
                ]
            },
            {
                id: "w11",
                title: "监控与健康检查",
                summary: "实现 gRPC 服务的可观测性和健康检查",
                overview: "生产服务需要完善的监控和健康检查。本周将学习 gRPC 的健康检查协议、OpenTelemetry 集成和调试工具。",
                keyPoints: [
                    "gRPC 健康检查使用标准的 health/v1 协议",
                    "客户端可以通过 Watch 自动监控服务健康状态",
                    "OpenTelemetry 提供标准化的指标和追踪集成",
                    "grpcdebug 工具帮助诊断 gRPC 问题"
                ],
                lessons: [
                    {
                        id: "grpc-w11-1",
                        title: "gRPC 健康检查协议",
                        detail: "实现服务端健康检查，配置客户端自动健康监控",
                        resources: [
                            { title: "gRPC 健康检查指南", url: "https://grpc.io/docs/guides/health-checking/" },
                            { title: "gRPC 服务配置", url: "https://grpc.io/docs/guides/service-config/" },
                            { title: "gRPC 优雅关闭", url: "https://grpc.io/docs/guides/graceful-shutdown/" }
                        ]
                    },
                    {
                        id: "grpc-w11-2",
                        title: "OpenTelemetry 指标与追踪",
                        detail: "集成 OpenTelemetry 实现分布式追踪和指标收集",
                        resources: [
                            { title: "gRPC OpenTelemetry 指标", url: "https://grpc.io/docs/guides/opentelemetry-metrics/" },
                            { title: "gRPC 反射", url: "https://grpc.io/docs/guides/reflection/" },
                            { title: "OpenTelemetry 官方文档", url: "https://opentelemetry.io/docs/" }
                        ]
                    },
                    {
                        id: "grpc-w11-3",
                        title: "调试与故障排查",
                        detail: "使用 grpcdebug 和其他工具诊断 gRPC 问题",
                        resources: [
                            { title: "gRPC 调试指南", url: "https://grpc.io/docs/guides/debugging/" },
                            { title: "gRPC 反射", url: "https://grpc.io/docs/guides/reflection/" },
                            { title: "grpcurl 工具", url: "https://github.com/fullstorydev/grpcurl" }
                        ]
                    }
                ]
            },
            {
                id: "w12",
                title: "微服务架构实践",
                summary: "在微服务架构中应用 gRPC 的最佳实践",
                overview: "gRPC 是微服务通信的理想选择。本周将学习 API 设计规范、版本兼容性、gRPC-Gateway 和服务网格集成。",
                keyPoints: [
                    "遵循 Google API 设计指南设计 gRPC 服务",
                    "使用保留字段和新增字段保持向后兼容",
                    "gRPC-Gateway 将 gRPC 服务暴露为 REST API",
                    "gRPC 与 Istio 等服务网格无缝集成"
                ],
                lessons: [
                    {
                        id: "grpc-w12-1",
                        title: "API 设计与版本管理",
                        detail: "设计可演化的 gRPC API，管理版本兼容性",
                        resources: [
                            { title: "Google API 设计指南", url: "https://cloud.google.com/apis/design" },
                            { title: "Protocol Buffers 兼容性", url: "https://protobuf.dev/programming-guides/proto3/#updating" },
                            { title: "gRPC 有效使用指南 (Go)", url: "https://www.bytesizego.com/blog/effective-grpc-usage-go" }
                        ]
                    },
                    {
                        id: "grpc-w12-2",
                        title: "gRPC-Gateway：REST 转换",
                        detail: "使用 gRPC-Gateway 将 gRPC 服务暴露为 RESTful API",
                        resources: [
                            { title: "gRPC-Gateway 文档", url: "https://grpc-ecosystem.github.io/grpc-gateway/" },
                            { title: "grpc-gateway GitHub", url: "https://github.com/grpc-ecosystem/grpc-gateway" },
                            { title: "Google API HTTP 注解", url: "https://cloud.google.com/endpoints/docs/grpc/transcoding" }
                        ]
                    },
                    {
                        id: "grpc-w12-3",
                        title: "服务网格与 gRPC",
                        detail: "在 Istio 等服务网格中部署和管理 gRPC 服务",
                        resources: [
                            { title: "Istio gRPC 支持", url: "https://istio.io/latest/docs/ops/configuration/traffic-management/protocol-selection/" },
                            { title: "gRPC 与 Kubernetes", url: "https://grpc.io/docs/" },
                            { title: "Envoy gRPC", url: "https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/other_protocols/grpc" }
                        ]
                    }
                ]
            }
        ]
    }
]

export const grpcCards: KnowledgeCard[] = [
    {
        id: "card1",
        title: "gRPC 核心架构",
        summary: "gRPC 是基于 HTTP/2 和 Protocol Buffers 的高性能 RPC 框架",
        points: [
            "使用 HTTP/2 提供多路复用、流控制和头部压缩",
            "Protocol Buffers 提供高效的二进制序列化",
            "服务定义在 .proto 文件中，生成各语言的 Stub 代码",
            "支持 Unary、Server Streaming、Client Streaming、Bidirectional Streaming 四种模式"
        ],
        practice: "创建一个简单的 gRPC 服务，体验从 proto 定义到服务实现的完整流程"
    },
    {
        id: "card2",
        title: "Protocol Buffers 类型系统",
        summary: "Proto3 提供了丰富的类型系统和消息定义能力",
        points: [
            "标量类型：int32、int64、float、double、bool、string、bytes 等",
            "复合类型：message、enum、oneof、map、repeated",
            "字段编号是消息兼容性的关键，范围 1-536870911",
            "使用 optional 明确字段存在性，使用 reserved 保护废弃字段"
        ],
        practice: "设计一个包含嵌套消息、枚举和 map 的 proto 文件"
    },
    {
        id: "card3",
        title: "四种 RPC 模式",
        summary: "gRPC 支持四种 RPC 通信模式，适用于不同场景",
        points: [
            "Unary：一请求一响应，最常用的模式",
            "Server Streaming：服务端返回消息流，适合推送场景",
            "Client Streaming：客户端发送消息流，适合上传场景",
            "Bidirectional Streaming：双向独立流，适合实时通信"
        ],
        practice: "分别实现四种 RPC 模式的服务，对比其适用场景"
    },
    {
        id: "card4",
        title: "错误处理与状态码",
        summary: "gRPC 定义了标准的错误处理机制和状态码体系",
        points: [
            "17 个标准状态码：OK、CANCELLED、UNKNOWN、INVALID_ARGUMENT 等",
            "区分 gRPC 库错误（如 UNAVAILABLE）和应用错误（如 NOT_FOUND）",
            "使用 google.rpc.Status 传递丰富的错误详情",
            "客户端根据状态码决定重试策略（如 UNAVAILABLE 可重试）"
        ],
        practice: "实现一个服务，返回带有详细错误信息的 Status"
    },
    {
        id: "card5",
        title: "Metadata 与 Deadline",
        summary: "Metadata 传递上下文，Deadline 控制超时",
        points: [
            "Metadata 是键值对，通过 HTTP/2 Headers 传输",
            "常用于传递认证令牌、追踪 ID、自定义头部",
            "Deadline 是绝对时间点，超时返回 DEADLINE_EXCEEDED",
            "Deadline 在服务链中传播，自动扣减已消耗时间"
        ],
        practice: "实现一个服务链，观察 Deadline 的传播和剩余时间变化"
    },
    {
        id: "card6",
        title: "拦截器模式",
        summary: "拦截器用于实现横切关注点，类似中间件",
        points: [
            "分为 Unary 拦截器和 Streaming 拦截器",
            "客户端和服务端都可以配置拦截器",
            "多个拦截器按顺序组成拦截器链",
            "常用于日志、指标、认证、授权、错误处理"
        ],
        practice: "实现一个日志拦截器，记录每个 RPC 的请求和响应"
    },
    {
        id: "card7",
        title: "认证与安全",
        summary: "gRPC 提供多层次的安全机制",
        points: [
            "Channel Credentials：通道级别（如 TLS）",
            "Call Credentials：调用级别（如 OAuth2 Token）",
            "支持服务端 TLS 和双向 TLS（mTLS）",
            "可组合多种凭证实现复合认证"
        ],
        practice: "配置双向 TLS 认证的 gRPC 服务"
    },
    {
        id: "card8",
        title: "负载均衡策略",
        summary: "gRPC 推荐客户端负载均衡",
        points: [
            "pick_first：使用第一个可用地址（默认）",
            "round_robin：轮询所有可用地址",
            "Name Resolver 解析服务地址（DNS、Consul、etcd）",
            "可实现自定义负载均衡策略"
        ],
        practice: "集成 Consul 服务发现，实现动态服务地址解析"
    },
    {
        id: "card9",
        title: "性能优化要点",
        summary: "gRPC 性能优化的关键实践",
        points: [
            "复用 Channel 和 Stub，避免频繁创建",
            "使用 Keepalive 保持连接活跃",
            "根据场景选择 Unary 或 Streaming",
            "启用消息压缩减少网络传输"
        ],
        practice: "使用 gRPC 基准测试工具测试服务性能"
    },
    {
        id: "card10",
        title: "健康检查与可观测性",
        summary: "生产环境必备的健康检查和监控",
        points: [
            "health/v1 协议提供标准健康检查接口",
            "客户端可通过 Watch 自动监控健康状态",
            "OpenTelemetry 提供指标和追踪集成",
            "grpcdebug 和 grpcurl 帮助调试"
        ],
        practice: "实现完整的健康检查服务，集成 Prometheus 指标"
    }
]

export const grpcExamQuestions: QuizQuestion[] = [
    {
        id: "grpc-exam-q1",
        question: "gRPC 默认使用什么协议进行传输？",
        options: [
            "HTTP/1.1",
            "HTTP/2",
            "WebSocket",
            "TCP Raw"
        ],
        answer: 1,
        rationale: "gRPC 基于 HTTP/2 协议，利用其多路复用、流控制和头部压缩等特性。"
    },
    {
        id: "grpc-exam-q2",
        question: "Protocol Buffers 的字段编号有什么重要作用？",
        options: [
            "用于消息排序",
            "标识消息中的字段，是兼容性的关键",
            "仅用于调试",
            "决定序列化顺序"
        ],
        answer: 1,
        rationale: "字段编号在消息二进制格式中标识字段，一旦使用不应更改，是版本兼容性的关键。"
    },
    {
        id: "grpc-exam-q3",
        question: "gRPC 的 Bidirectional Streaming 模式有什么特点？",
        options: [
            "只有服务端可以发送流",
            "只有客户端可以发送流",
            "客户端和服务端可以独立发送消息流",
            "必须交替发送消息"
        ],
        answer: 2,
        rationale: "双向流中，客户端和服务端的流是独立的，可以按任意顺序读写。"
    },
    {
        id: "grpc-exam-q4",
        question: "当 gRPC 调用超时时，返回什么状态码？",
        options: [
            "CANCELLED",
            "DEADLINE_EXCEEDED",
            "UNAVAILABLE",
            "TIMEOUT"
        ],
        answer: 1,
        rationale: "当操作未能在 Deadline 前完成时，返回 DEADLINE_EXCEEDED 状态码。"
    },
    {
        id: "grpc-exam-q5",
        question: "以下哪个状态码表示可以安全重试？",
        options: [
            "INVALID_ARGUMENT",
            "NOT_FOUND",
            "UNAVAILABLE",
            "PERMISSION_DENIED"
        ],
        answer: 2,
        rationale: "UNAVAILABLE 表示服务暂时不可用，通常可以通过退避重试解决。"
    },
    {
        id: "grpc-exam-q6",
        question: "gRPC Metadata 通过什么机制传输？",
        options: [
            "消息体",
            "HTTP/2 Headers",
            "单独的 TCP 连接",
            "Query 参数"
        ],
        answer: 1,
        rationale: "Metadata 是键值对，通过 HTTP/2 的 Headers 和 Trailers 传输。"
    },
    {
        id: "grpc-exam-q7",
        question: "Proto3 中枚举的第一个值必须是什么？",
        options: [
            "任意值",
            "1",
            "0",
            "-1"
        ],
        answer: 2,
        rationale: "Proto3 要求枚举的第一个值必须是 0，作为默认值。"
    },
    {
        id: "grpc-exam-q8",
        question: "gRPC 拦截器的主要用途不包括以下哪项？",
        options: [
            "日志记录",
            "认证授权",
            "消息序列化",
            "指标收集"
        ],
        answer: 2,
        rationale: "消息序列化由 Protocol Buffers 处理，拦截器用于日志、认证、指标等横切关注点。"
    },
    {
        id: "grpc-exam-q9",
        question: "gRPC 的 Channel Credentials 用于什么？",
        options: [
            "每次调用的认证",
            "通道级别的认证（如 TLS）",
            "消息加密",
            "负载均衡"
        ],
        answer: 1,
        rationale: "Channel Credentials 附加到 Channel，用于通道级别的认证，如 TLS。"
    },
    {
        id: "grpc-exam-q10",
        question: "gRPC 默认的负载均衡策略是什么？",
        options: [
            "round_robin",
            "pick_first",
            "random",
            "least_connection"
        ],
        answer: 1,
        rationale: "gRPC 默认使用 pick_first 策略，选择第一个可用的服务器地址。"
    },
    {
        id: "grpc-exam-q11",
        question: "为什么应该复用 gRPC Channel？",
        options: [
            "节省内存",
            "避免创建新连接的开销",
            "简化代码",
            "提高安全性"
        ],
        answer: 1,
        rationale: "创建 Channel 涉及 TCP 连接和 TLS 握手开销，复用可以提高性能。"
    },
    {
        id: "grpc-exam-q12",
        question: "gRPC 健康检查使用什么协议？",
        options: [
            "自定义协议",
            "health/v1 标准协议",
            "HTTP 健康端点",
            "TCP 探测"
        ],
        answer: 1,
        rationale: "gRPC 使用标准的 health/v1 协议进行健康检查。"
    },
    {
        id: "grpc-exam-q13",
        question: "Keepalive PING 的主要作用是什么？",
        options: [
            "测量延迟",
            "在空闲期间保持连接活跃",
            "进行健康检查",
            "压缩数据"
        ],
        answer: 1,
        rationale: "Keepalive 通过定期发送 PING 帧保持 HTTP/2 连接活跃，避免被代理或防火墙关闭。"
    },
    {
        id: "grpc-exam-q14",
        question: "gRPC-Gateway 的作用是什么？",
        options: [
            "负载均衡",
            "将 gRPC 服务暴露为 REST API",
            "服务发现",
            "消息压缩"
        ],
        answer: 1,
        rationale: "gRPC-Gateway 可以将 gRPC 服务自动转换为 RESTful HTTP API。"
    },
    {
        id: "grpc-exam-q15",
        question: "Proto3 中如何表示字段可选且跟踪其存在性？",
        options: [
            "使用 required",
            "使用 optional",
            "默认就是可选的",
            "使用 nullable"
        ],
        answer: 1,
        rationale: "Proto3 中使用 optional 关键字可以明确跟踪字段的存在性。"
    },
    {
        id: "grpc-exam-q16",
        question: "gRPC 调用被取消时，服务端收到什么状态？",
        options: [
            "DEADLINE_EXCEEDED",
            "CANCELLED",
            "ABORTED",
            "UNAVAILABLE"
        ],
        answer: 1,
        rationale: "当客户端取消 RPC 或 Deadline 超过时，服务端收到 CANCELLED 状态。"
    },
    {
        id: "grpc-exam-q17",
        question: "Deadline 在服务链中如何传播？",
        options: [
            "不传播",
            "作为绝对时间传播，转换为超时时自动扣减已消耗时间",
            "每个服务重新设置",
            "通过 Metadata 传递"
        ],
        answer: 1,
        rationale: "gRPC 将 Deadline 转换为超时传播时，会自动扣减已消耗的时间。"
    },
    {
        id: "grpc-exam-q18",
        question: "以下哪种类型不是 Protocol Buffers 的标量类型？",
        options: [
            "int32",
            "string",
            "array",
            "bytes"
        ],
        answer: 2,
        rationale: "array 不是标量类型，Protocol Buffers 使用 repeated 关键字表示数组。"
    },
    {
        id: "grpc-exam-q19",
        question: "gRPC 的 Server Streaming 适用于什么场景？",
        options: [
            "文件上传",
            "实时数据推送",
            "请求-响应查询",
            "双向聊天"
        ],
        answer: 1,
        rationale: "Server Streaming 适合服务端向客户端推送大量数据或实时更新的场景。"
    },
    {
        id: "grpc-exam-q20",
        question: "使用 gRPC 反射的主要好处是什么？",
        options: [
            "提高性能",
            "无需 proto 文件即可发现和调用服务",
            "增强安全性",
            "减少内存使用"
        ],
        answer: 1,
        rationale: "gRPC 反射允许客户端在运行时发现服务定义，无需 proto 文件即可调用服务。"
    },
    {
        id: "grpc-exam-q21",
        question: "Metadata 键名有什么限制？",
        options: [
            "必须大写",
            "不能以 grpc- 开头",
            "必须是数字",
            "长度限制 10 字符"
        ],
        answer: 1,
        rationale: "Metadata 键名不能以 grpc- 开头，这是保留前缀。"
    },
    {
        id: "grpc-exam-q22",
        question: "gRPC 客户端拦截器和服务端拦截器的执行顺序是怎样的？",
        options: [
            "随机执行",
            "按添加顺序依次执行",
            "并行执行",
            "只执行第一个"
        ],
        answer: 1,
        rationale: "拦截器按添加顺序形成链，请求时正序执行，响应时逆序执行。"
    },
    {
        id: "grpc-exam-q23",
        question: "gRPC 性能优化中，为什么要谨慎使用流式 RPC？",
        options: [
            "流式 RPC 更慢",
            "流式 RPC 无法进行负载均衡",
            "流式 RPC 占用更多内存",
            "流式 RPC 不支持压缩"
        ],
        answer: 1,
        rationale: "流式 RPC 建立后无法进行负载均衡，需要权衡使用场景。"
    },
    {
        id: "grpc-exam-q24",
        question: "Proto3 中 oneof 字段的特点是什么？",
        options: [
            "所有字段都必须设置",
            "最多只能设置一个字段",
            "至少设置一个字段",
            "可以设置任意数量的字段"
        ],
        answer: 1,
        rationale: "oneof 保证同一时间最多只有一个字段被设置，设置新字段会清除旧字段。"
    },
    {
        id: "grpc-exam-q25",
        question: "gRPC 的 Call Credentials 用于什么？",
        options: [
            "通道加密",
            "每次 RPC 调用的认证（如 Token）",
            "服务发现",
            "负载均衡"
        ],
        answer: 1,
        rationale: "Call Credentials 附加到每次 RPC 调用，用于传递认证信息如 OAuth2 Token。"
    }
]

export const grpcRoadmap: RoadmapDefinition = {
    id: "grpc",
    label: "gRPC",
    title: "gRPC 高性能 RPC 框架",
    durationLabel: "12 周完整学习路线",
    description: "从 Protocol Buffers 到生产实践，系统掌握 gRPC 的核心概念、四种 RPC 模式、认证安全、性能优化和微服务最佳实践。",
    heroBadge: "12 周 · 36 主题",
    stages: grpcStages,
    knowledgeCards: grpcCards,
    examQuestions: grpcExamQuestions,
    suggestion: (percent: number) => {
        if (percent >= 90) return "出色！你已经掌握了 gRPC 的核心知识，可以在生产环境中应用。"
        if (percent >= 70) return "不错！继续深入实践，特别关注性能优化和安全认证。"
        if (percent >= 50) return "及格了，建议重点复习 RPC 模式和错误处理。"
        return "需要重新学习基础内容，从 Protocol Buffers 开始。"
    },
    resourceGuide: {
        environment: "安装 protoc 编译器和 gRPC 插件，推荐使用 Go、Java 或 Python 进行实践",
        fallbackKeyPoints: [
            "gRPC 基于 HTTP/2 和 Protocol Buffers",
            "支持四种 RPC 模式满足不同场景",
            "使用拦截器实现横切关注点",
            "Metadata 和 Deadline 是重要的请求上下文机制"
        ],
        handsOnSteps: [
            "安装 protoc 和对应语言的 gRPC 插件",
            "定义 .proto 文件，生成服务代码",
            "实现服务端接口，启动 gRPC Server",
            "创建客户端 Stub，发起 RPC 调用",
            "添加拦截器实现日志和认证"
        ],
        selfChecks: [
            "能否解释 gRPC 与 REST 的主要区别？",
            "能否实现四种 RPC 模式？",
            "能否正确使用 Deadline 和处理超时？",
            "能否实现自定义拦截器？"
        ],
        extensions: [
            "集成 gRPC-Gateway 提供 REST API",
            "实现自定义负载均衡策略",
            "集成 OpenTelemetry 实现可观测性",
            "在 Kubernetes 中部署 gRPC 服务"
        ],
        lessonQuizAdvice: "每个课时测验侧重于核心概念理解，完成后对照官方文档验证理解"
    }
}
