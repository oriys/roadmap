import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week19Guides: Record<string, LessonGuide> = {
    "w19-1": {
        lessonId: "w19-1",
        background: [
            "【GraphQL 定义】GraphQL 是 API 查询语言和类型系统：'GraphQL provides a flexible, versionless API driven by a powerful type system'。客户端精确请求所需数据，避免过度获取或获取不足。",
            "【Schema 核心地位】Schema 是 GraphQL 的核心：'The GraphQL type system describes what data can be queried from an API'。Schema 定义了所有可查询的类型、字段和操作。",
            "【六种类型定义】GraphQL 定义六种命名类型：Object（对象类型）、Scalar（标量，如 Int/String/Boolean）、Enum（枚举）、Interface（接口）、Union（联合类型）、Input Object（输入对象，用于 Mutation 参数）。",
            "【三种操作类型】GraphQL 支持三种根操作：Query（查询，读取数据）、Mutation（变更，修改数据）、Subscription（订阅，实时数据推送）。每个 Schema 必须定义 Query 类型。",
            "【类型修饰符】Non-Null（!）表示字段不能为空，List（[]）表示数组。组合使用：[String!]! 表示非空数组且元素非空。类型系统确保数据形状的可预测性。"
        ],
        keyDifficulties: [
            "【Schema 设计原则】官方建议：'Design and evolve your type system without versioning'。通过添加字段而非修改/删除来演进 Schema，保持向后兼容。使用 @deprecated 标记废弃字段。",
            "【Resolver 执行】每个字段由 Resolver 函数解析。Resolver 接收父对象、参数、上下文，返回该字段的值。理解 Resolver 链对于优化查询性能至关重要。",
            "【类型的自省】GraphQL 支持 Introspection：'Dynamically explore the Schema'。客户端可以查询 __schema 和 __type 来发现可用的类型和字段。生产环境应禁用自省以增强安全性。",
            "【Fragments 复用】Fragments 允许复用字段集合：'fragment userFields on User { id name email }'。在多处查询相同字段时减少重复，提高可维护性。"
        ],
        handsOnPath: [
            "定义 Schema：type Query { user(id: ID!): User }; type User { id: ID! name: String! email: String! posts: [Post!]! }",
            "定义 Mutation：type Mutation { createUser(input: CreateUserInput!): User }; input CreateUserInput { name: String! email: String! }",
            "定义 Subscription：type Subscription { messageCreated: Message }",
            "使用 GraphiQL 探索 Schema：执行 { __schema { types { name } } } 查看所有类型。",
            "实现 Resolver：const resolvers = { Query: { user: (_, { id }, context) => context.db.findUser(id) } };"
        ],
        selfCheck: [
            "GraphQL 的六种命名类型是什么？",
            "Query、Mutation、Subscription 的区别是什么？",
            "Non-Null（!）修饰符的作用是什么？",
            "什么是 GraphQL Introspection？",
            "如何在 GraphQL 中实现字段复用？"
        ],
        extensions: [
            "研究 GraphQL Relay 规范的连接分页模式。",
            "学习 GraphQL Federation 实现分布式 Schema。",
            "了解 GraphQL Code Generator 自动生成类型。",
            "研究 GraphQL 与 TypeScript 的类型安全集成。"
        ],
        sourceUrls: [
            "https://graphql.org/learn/",
            "https://graphql.org/learn/schema/",
            "https://graphql.org/learn/best-practices/"
        ]
    },
    "w19-2": {
        lessonId: "w19-2",
        background: [
            "【N+1 问题】GraphQL 的 Resolver 按字段执行，可能导致 N+1 查询：获取用户列表后，每个用户的 posts 字段各触发一次数据库查询。这是 GraphQL 最常见的性能陷阱。",
            "【DataLoader 解决方案】DataLoader：'provides a consistent API over various backends while reducing backend requests through batching and caching'。它将同一事件循环中的多个请求合并为一个批量请求。",
            "【批处理原理】DataLoader 收集同一 tick 内的所有 load 调用，然后一次性执行批量函数。批量函数接收 keys 数组，返回对应顺序的 values 数组。将 N+1 查询减少为 2 次查询。",
            "【请求级缓存】DataLoader 维护请求级别的内存缓存：'Subsequent requests for already-loaded keys return cached values'。每个请求创建新的 DataLoader 实例，避免跨用户数据泄露。",
            "【查询复杂度分析】GraphQL 官方建议：'Apply weights to schema types and fields, estimate request cost before execution, reject requests exceeding cost threshold'。防止恶意查询消耗过多资源。"
        ],
        keyDifficulties: [
            "【深度限制】防止深层嵌套的循环查询：'Set maximum nesting depth in GraphQL configuration'。对于嵌套列表字段应用更小的深度限制，因为数据量呈指数增长。",
            "【Persisted Queries】Apollo 文档：'Clients can send this identifier instead of the corresponding query string, thus reducing request sizes dramatically'。使用 SHA-256 哈希替代完整查询，支持 CDN 缓存。",
            "【输入验证与净化】GraphQL 官方：'Sanitization in business logic layer during resolver execution'。类型系统提供基本验证，但业务规则和安全净化仍需在 Resolver 中处理。",
            "【禁用 Introspection】生产环境应禁用 Introspection：'Disable introspection in production environments'。但仅此不够，攻击者可通过试错推断 Schema，需结合 Trusted Documents。"
        ],
        handsOnPath: [
            "实现 DataLoader：const userLoader = new DataLoader(async (ids) => { const users = await db.users.findByIds(ids); return ids.map(id => users.find(u => u.id === id)); });",
            "在 Resolver 中使用：User: { posts: (user, _, { loaders }) => loaders.postLoader.loadMany(user.postIds) }",
            "配置深度限制：const depthLimit = require('graphql-depth-limit'); app.use('/graphql', depthLimit(5));",
            "配置复杂度分析：{ createComplexityLimitRule(1000) } // 最大复杂度 1000",
            "实现 Persisted Queries：使用 Apollo Client 的 createPersistedQueryLink。"
        ],
        selfCheck: [
            "什么是 GraphQL 的 N+1 问题？",
            "DataLoader 如何解决 N+1 问题？",
            "为什么 DataLoader 需要每个请求创建新实例？",
            "什么是 Persisted Queries？有什么优势？",
            "生产环境为什么要禁用 Introspection？"
        ],
        extensions: [
            "研究 graphql-cost-analysis 复杂度分析库。",
            "学习 Apollo Studio 的查询性能监控。",
            "了解 GraphQL 的批量执行（@defer、@stream）。",
            "研究 Hasura 的自动化 DataLoader 实现。"
        ],
        sourceUrls: [
            "https://github.com/graphql/dataloader",
            "https://graphql.org/learn/security/",
            "https://www.apollographql.com/docs/apollo-server/performance/apq/"
        ]
    },
    "w19-3": {
        lessonId: "w19-3",
        background: [
            "【WebSocket 定义】WebSocket 是全双工通信协议（RFC 6455）：'provides full-duplex, low-latency, event-driven connections between the server and the browser'。在单个 TCP 连接上实现双向实时通信。",
            "【HTTP 升级握手】WebSocket 通过 HTTP Upgrade 机制建立：客户端发送 Upgrade: websocket 头，服务端返回 101 Switching Protocols。握手后使用 WebSocket 协议通信。",
            "【帧格式】WebSocket 消息分为帧：FIN bit（是否最后一帧）、Opcode（帧类型：text/binary/close/ping/pong）、Mask bit（客户端到服务端必须掩码）、Payload length、Payload data。",
            "【SSE 对比】Server-Sent Events 是单向通信：'one-way messaging from server to client using HTTP streaming'。SSE 只支持 UTF-8 文本，但有内置重连支持，更简单且无防火墙问题。",
            "【选择标准】WebSocket 适合双向通信（聊天、游戏），SSE 适合单向推送（股票行情、通知）。SSE 每浏览器限制 6 个连接，WebSocket 无此限制。"
        ],
        keyDifficulties: [
            "【连接管理】WebSocket 是持久连接，需要处理：心跳保活（ping/pong 帧）、断线重连、连接状态追踪。服务端需维护活跃连接列表。",
            "【扩展性挑战】WebSocket 是有状态连接，难以水平扩展。解决方案：使用 Redis Pub/Sub 跨实例广播、使用 sticky sessions、使用专用的 WebSocket 服务层。",
            "【Long Polling 比较】Long Polling 是轮询的优化：客户端请求后服务端挂起，有数据时返回。延迟高于 WebSocket，但兼容性最好。适合不频繁更新的场景。",
            "【安全考虑】WebSocket 使用 wss:// 加密。Origin 检查防止 CSRF，但 WebSocket 不遵循同源策略。需要在应用层实现认证和授权。"
        ],
        handsOnPath: [
            "建立 WebSocket 连接：const ws = new WebSocket('wss://example.com/socket');",
            "处理消息：ws.onmessage = (event) => { console.log('Received:', event.data); };",
            "发送消息：ws.send(JSON.stringify({ type: 'chat', content: 'Hello' }));",
            "实现心跳：setInterval(() => ws.send('ping'), 30000); ws.onmessage = (e) => { if (e.data === 'pong') resetTimeout(); };",
            "SSE 客户端：const source = new EventSource('/events'); source.onmessage = (e) => console.log(e.data);"
        ],
        selfCheck: [
            "WebSocket 如何通过 HTTP 升级建立连接？",
            "WebSocket 和 SSE 的主要区别是什么？",
            "WebSocket 为什么需要心跳机制？",
            "WebSocket 水平扩展面临什么挑战？",
            "什么场景适合用 Long Polling 而非 WebSocket？"
        ],
        extensions: [
            "研究 Socket.IO 对 WebSocket 的封装和降级策略。",
            "学习 WebSocket 子协议（如 STOMP、MQTT）。",
            "了解 HTTP/2 Server Push 与 SSE 的区别。",
            "研究 WebTransport 作为 WebSocket 的替代。"
        ],
        sourceUrls: [
            "https://datatracker.ietf.org/doc/html/rfc6455",
            "https://ably.com/blog/websockets-vs-sse",
            "https://socket.io/docs/v4/"
        ]
    },
    "w19-4": {
        lessonId: "w19-4",
        background: [
            "【实时聊天架构】聊天系统核心：消息传递（WebSocket）、消息存储（数据库）、消息分发（Pub/Sub）、在线状态（心跳）。读写模式差异大，适合读写分离架构。",
            "【消息传递模式】点对点（1:1）使用直接投递，群聊使用 Fanout（向所有成员推送）。大群（1000+人）采用拉模式：客户端主动拉取，减少服务端推送压力。",
            "【推送通知架构】推送通知需要：设备令牌管理、消息队列缓冲、平台适配（APNs/FCM）、投递状态追踪。用户离线时消息暂存，上线后推送或批量同步。",
            "【协作编辑原理】Operational Transformation（OT）和 CRDT 解决并发编辑冲突。OT 在服务端变换操作，CRDT 使用可交换数据结构保证最终一致性。Google Docs 使用 OT。",
            "【在线状态系统】在线状态是高频更新的读多写少场景。使用 Redis 存储状态，定期心跳更新 TTL。订阅者通过 Pub/Sub 接收状态变更通知。"
        ],
        keyDifficulties: [
            "【消息顺序与幂等】消息可能乱序到达或重复投递。使用消息 ID 去重，使用时间戳或序列号排序。客户端需要处理乱序消息的 UI 显示。",
            "【大群消息分发】百万人群的消息分发是挑战。策略：写扩散（发送时写入每个成员的收件箱）vs 读扩散（读取时聚合）。通常混合使用：小群写扩散，大群读扩散。",
            "【消息存储设计】聊天消息是 append-only 的时序数据。索引设计：按会话 ID 分区，按时间排序。历史消息冷热分离：近期消息在热存储，历史消息在冷存储。",
            "【端到端加密】端到端加密（E2E）确保只有通信双方能解密。服务端只存储密文，无法读取内容。密钥交换使用 Signal 协议。挑战：多设备同步、群聊密钥管理。"
        ],
        handsOnPath: [
            "设计聊天消息表：CREATE TABLE messages (id BIGINT, conversation_id BIGINT, sender_id BIGINT, content TEXT, created_at TIMESTAMP, PRIMARY KEY (conversation_id, created_at, id));",
            "实现 WebSocket 消息路由：根据 conversation_id 查找在线成员，推送消息到对应的 WebSocket 连接。",
            "使用 Redis Pub/Sub 跨实例广播：PUBLISH conversation:123 '{\"type\":\"message\", \"content\":\"Hello\"}'",
            "实现在线状态：SET user:123:status 'online' EX 60; // 60 秒过期，需要心跳续期",
            "设计推送通知降级：1) WebSocket 在线推送 2) 离线时通过 APNs/FCM 推送 3) 用户打开 App 时同步未读消息"
        ],
        selfCheck: [
            "聊天系统的核心组件有哪些？",
            "大群消息分发有哪些策略？各自的优缺点？",
            "什么是 Operational Transformation？解决什么问题？",
            "在线状态系统如何实现高可用？",
            "端到端加密对服务端有什么影响？"
        ],
        extensions: [
            "研究 Signal 协议的端到端加密实现。",
            "学习 Discord 的大规模消息系统架构。",
            "了解 CRDT 在协作编辑中的应用。",
            "研究消息队列在聊天系统中的作用。"
        ],
        sourceUrls: [
            "https://blog.bytebytego.com/p/design-a-chat-system",
            "https://firebase.google.com/docs/cloud-messaging/concept-options",
            "https://en.wikipedia.org/wiki/Operational_transformation"
        ]
    }
}

export const week19Quizzes: Record<string, QuizQuestion[]> = {
    "w19-1": [
        {
            id: "w19-1-q1",
            question: "GraphQL 的六种命名类型不包括？",
            options: [
                "Object",
                "Scalar",
                "Array",
                "Union"
            ],
            answer: 2,
            rationale: "GraphQL 六种命名类型：Object、Scalar、Enum、Interface、Union、Input Object。Array 不是独立类型，而是通过 List 修饰符表示。"
        },
        {
            id: "w19-1-q2",
            question: "GraphQL Schema 必须定义哪个根操作类型？",
            options: [
                "Mutation",
                "Subscription",
                "Query",
                "Fragment"
            ],
            answer: 2,
            rationale: "每个 GraphQL Schema 必须定义 Query 类型，Mutation 和 Subscription 是可选的。Fragment 不是根操作类型。"
        },
        {
            id: "w19-1-q3",
            question: "[String!]! 类型修饰符的含义是什么？",
            options: [
                "可空数组，可空元素",
                "非空数组，可空元素",
                "可空数组，非空元素",
                "非空数组，非空元素"
            ],
            answer: 3,
            rationale: "[String!]! 表示非空数组且元素非空：外层 ! 表示数组不能为 null，内层 ! 表示元素不能为 null。"
        },
        {
            id: "w19-1-q4",
            question: "GraphQL 如何实现 Schema 演进而保持向后兼容？",
            options: [
                "使用版本号 /v1 /v2",
                "通过添加字段而非修改/删除，使用 @deprecated 标记废弃字段",
                "强制客户端升级",
                "使用 feature flags"
            ],
            answer: 1,
            rationale: "官方建议：'Design and evolve your type system without versioning'——通过添加字段演进，使用 @deprecated 标记废弃。"
        },
        {
            id: "w19-1-q5",
            question: "GraphQL Introspection 的作用是什么？",
            options: [
                "验证查询语法",
                "动态探索 Schema，检查类型和字段",
                "优化查询性能",
                "实现权限控制"
            ],
            answer: 1,
            rationale: "'Dynamically explore the Schema'——客户端可以查询 __schema 和 __type 来发现可用的类型和字段。"
        },
        {
            id: "w19-1-q6",
            question: "GraphQL Mutation 用于什么？",
            options: [
                "实时订阅数据",
                "修改数据",
                "查询数据",
                "定义类型"
            ],
            answer: 1,
            rationale: "Mutation 用于修改数据，Query 用于读取数据，Subscription 用于实时订阅。"
        },
        {
            id: "w19-1-q7",
            question: "GraphQL Input Object 的主要用途是什么？",
            options: [
                "定义查询返回的对象",
                "作为 Mutation 的复杂参数",
                "定义标量类型",
                "实现接口"
            ],
            answer: 1,
            rationale: "Input Object 是复杂对象用作参数（特别是在 Mutation 中），如 input CreateUserInput { name: String! email: String! }。"
        },
        {
            id: "w19-1-q8",
            question: "GraphQL Fragments 的作用是什么？",
            options: [
                "分割查询到多个请求",
                "复用字段集合，减少重复",
                "实现分页",
                "处理错误"
            ],
            answer: 1,
            rationale: "Fragments 允许复用字段集合：'fragment userFields on User { id name email }'。在多处查询相同字段时减少重复。"
        },
        {
            id: "w19-1-q9",
            question: "GraphQL 官方推荐在生产环境如何处理 Introspection？",
            options: [
                "始终启用",
                "禁用以增强安全性",
                "只允许认证用户使用",
                "限制查询深度"
            ],
            answer: 1,
            rationale: "生产环境应禁用 Introspection 以增强安全性，防止攻击者探索 Schema 结构。"
        },
        {
            id: "w19-1-q10",
            question: "GraphQL Interface 类型的作用是什么？",
            options: [
                "定义输入参数",
                "定义抽象类型，具体类型必须实现其字段",
                "组合不相关的类型",
                "定义标量类型"
            ],
            answer: 1,
            rationale: "Interface 是抽象类型，定义具体类型必须实现的字段。如 interface Character { id: ID! name: String! }。"
        },
        {
            id: "w19-1-q11",
            question: "GraphQL Union 和 Interface 的区别是什么？",
            options: [
                "没有区别",
                "Union 组合不相关的类型（无共享字段），Interface 定义共享字段",
                "Union 更快",
                "Interface 只能用于 Mutation"
            ],
            answer: 1,
            rationale: "Union 组合不相关的 Object 类型（无共享字段），Interface 定义具体类型必须实现的共享字段。"
        },
        {
            id: "w19-1-q12",
            question: "GraphQL Resolver 函数接收哪些参数？",
            options: [
                "只有参数",
                "父对象、参数、上下文",
                "只有上下文",
                "查询字符串"
            ],
            answer: 1,
            rationale: "Resolver 接收父对象（parent）、参数（args）、上下文（context），返回该字段的值。"
        }
    ],
    "w19-2": [
        {
            id: "w19-2-q1",
            question: "GraphQL 的 N+1 问题是什么？",
            options: [
                "查询深度超过限制",
                "获取列表后每个元素的关联字段各触发一次数据库查询",
                "响应体积过大",
                "类型定义错误"
            ],
            answer: 1,
            rationale: "N+1 问题：获取用户列表后，每个用户的 posts 字段各触发一次数据库查询——1 次列表查询 + N 次关联查询。"
        },
        {
            id: "w19-2-q2",
            question: "DataLoader 如何解决 N+1 问题？",
            options: [
                "缓存所有数据",
                "将同一事件循环中的多个请求合并为一个批量请求",
                "使用连接池",
                "禁用嵌套查询"
            ],
            answer: 1,
            rationale: "DataLoader：'reducing backend requests through batching'——收集同一 tick 内的所有 load 调用，一次性执行批量函数。"
        },
        {
            id: "w19-2-q3",
            question: "为什么 DataLoader 需要每个请求创建新实例？",
            options: [
                "性能优化",
                "避免跨用户数据泄露",
                "节省内存",
                "简化代码"
            ],
            answer: 1,
            rationale: "'Caching is per-request, not application-wide. Create fresh DataLoader instances per user request to prevent privacy violations across different users'。"
        },
        {
            id: "w19-2-q4",
            question: "GraphQL 深度限制解决什么问题？",
            options: [
                "N+1 查询",
                "深层嵌套的循环查询消耗过多资源",
                "响应解析错误",
                "类型不匹配"
            ],
            answer: 1,
            rationale: "'Set maximum nesting depth in GraphQL configuration'——防止 hero.friends.friends.friends... 这样的深层循环查询。"
        },
        {
            id: "w19-2-q5",
            question: "Persisted Queries 的主要优势是什么？",
            options: [
                "更强的类型检查",
                "用 SHA-256 哈希替代完整查询，减少请求体积，支持 CDN 缓存",
                "更好的错误处理",
                "更快的解析速度"
            ],
            answer: 1,
            rationale: "'Clients can send this identifier instead of the corresponding query string, thus reducing request sizes dramatically'。"
        },
        {
            id: "w19-2-q6",
            question: "GraphQL 查询复杂度分析的目的是什么？",
            options: [
                "优化数据库查询",
                "在执行前估计请求成本，拒绝超过阈值的请求",
                "验证类型正确性",
                "压缩响应体积"
            ],
            answer: 1,
            rationale: "'Apply weights to schema types and fields, estimate request cost before execution, reject requests exceeding cost threshold'。"
        },
        {
            id: "w19-2-q7",
            question: "DataLoader 的批量函数必须满足什么条件？",
            options: [
                "返回单个值",
                "返回与输入 keys 数组长度相同、顺序对应的 values 数组",
                "同步执行",
                "只接受字符串 key"
            ],
            answer: 1,
            rationale: "批量函数必须接收 keys 数组，返回相同长度和顺序的 values 数组，支持 Error 实例表示失败。"
        },
        {
            id: "w19-2-q8",
            question: "为什么生产环境应该禁用 GraphQL Introspection？",
            options: [
                "影响性能",
                "攻击者可以探索 Schema 结构",
                "占用内存",
                "与 Persisted Queries 冲突"
            ],
            answer: 1,
            rationale: "'Disable introspection in production environments'——防止攻击者通过 Introspection 探索 API 结构。"
        },
        {
            id: "w19-2-q9",
            question: "DataLoader 的缓存方法不包括？",
            options: [
                ".clear(key)",
                ".clearAll()",
                ".prime(key, value)",
                ".persist(key)"
            ],
            answer: 3,
            rationale: "DataLoader 缓存方法：.clear(key) 移除特定缓存、.clearAll() 重置全部、.prime(key, value) 预填充。没有 .persist()。"
        },
        {
            id: "w19-2-q10",
            question: "GraphQL 输入验证应该在哪里进行？",
            options: [
                "只在客户端",
                "只在类型系统",
                "在 Resolver 的业务逻辑层进行净化",
                "在网络层"
            ],
            answer: 2,
            rationale: "'Sanitization in business logic layer during resolver execution'——类型系统提供基本验证，业务规则在 Resolver 中处理。"
        },
        {
            id: "w19-2-q11",
            question: "嵌套列表字段为什么需要更小的深度限制？",
            options: [
                "解析更慢",
                "数据量呈指数增长",
                "类型检查更复杂",
                "缓存更困难"
            ],
            answer: 1,
            rationale: "对于嵌套列表字段应用更小的深度限制，因为 [User].friends[User].friends 数据量呈指数增长。"
        },
        {
            id: "w19-2-q12",
            question: "仅禁用 Introspection 为什么不足以保护 API？",
            options: [
                "影响开发体验",
                "攻击者可通过试错推断 Schema",
                "客户端无法工作",
                "性能下降"
            ],
            answer: 1,
            rationale: "'Attackers can infer schema through trial-and-error'——需要结合 Trusted Documents 等其他措施。"
        }
    ],
    "w19-3": [
        {
            id: "w19-3-q1",
            question: "WebSocket 的主要特点是什么？",
            options: [
                "单向通信",
                "全双工、低延迟、事件驱动的双向连接",
                "无状态",
                "仅支持文本"
            ],
            answer: 1,
            rationale: "'WebSockets provide full-duplex, low-latency, event-driven connections between the server and the browser'。"
        },
        {
            id: "w19-3-q2",
            question: "WebSocket 如何建立连接？",
            options: [
                "直接 TCP 连接",
                "通过 HTTP Upgrade 机制",
                "通过 DNS 解析",
                "通过 gRPC"
            ],
            answer: 1,
            rationale: "WebSocket 通过 HTTP Upgrade 机制建立：客户端发送 Upgrade: websocket 头，服务端返回 101 Switching Protocols。"
        },
        {
            id: "w19-3-q3",
            question: "SSE 与 WebSocket 的主要区别是什么？",
            options: [
                "SSE 更快",
                "SSE 是单向通信（服务器到客户端），WebSocket 是双向通信",
                "WebSocket 更安全",
                "SSE 支持二进制"
            ],
            answer: 1,
            rationale: "SSE 是'one-way messaging from server to client using HTTP streaming'，WebSocket 支持双向通信。"
        },
        {
            id: "w19-3-q4",
            question: "WebSocket 心跳机制的目的是什么？",
            options: [
                "提高传输速度",
                "保持连接活跃，检测断线",
                "压缩数据",
                "加密通信"
            ],
            answer: 1,
            rationale: "WebSocket 使用 ping/pong 帧实现心跳，保持连接活跃并检测断线。"
        },
        {
            id: "w19-3-q5",
            question: "SSE 相比 WebSocket 的优势是什么？",
            options: [
                "支持双向通信",
                "内置重连支持，无防火墙问题",
                "支持二进制数据",
                "延迟更低"
            ],
            answer: 1,
            rationale: "SSE 有'Built-in support for reconnection'，且因为使用标准 HTTP 所以'No firewall problems'。"
        },
        {
            id: "w19-3-q6",
            question: "WebSocket 水平扩展的挑战是什么？",
            options: [
                "协议不支持",
                "有状态连接，需要使用 Redis Pub/Sub 或 sticky sessions",
                "带宽限制",
                "加密开销"
            ],
            answer: 1,
            rationale: "WebSocket 是有状态连接，需要使用 Redis Pub/Sub 跨实例广播、sticky sessions 或专用 WebSocket 服务层。"
        },
        {
            id: "w19-3-q7",
            question: "WebSocket 帧格式中的 Mask bit 用于什么？",
            options: [
                "压缩数据",
                "客户端到服务端的消息必须掩码处理",
                "加密消息",
                "标记帧类型"
            ],
            answer: 1,
            rationale: "WebSocket 协议要求客户端到服务端的消息必须使用 XOR 掩码处理，服务端到客户端的消息不需要。"
        },
        {
            id: "w19-3-q8",
            question: "SSE 的连接数限制是什么？",
            options: [
                "无限制",
                "每浏览器限制 6 个并发连接",
                "每域名 1 个",
                "每标签页 1 个"
            ],
            answer: 1,
            rationale: "SSE 'Limited to 6 concurrent connections per browser'，WebSocket 无此限制。"
        },
        {
            id: "w19-3-q9",
            question: "Long Polling 与 WebSocket 相比的优势是什么？",
            options: [
                "延迟更低",
                "兼容性最好",
                "支持双向通信",
                "带宽更少"
            ],
            answer: 1,
            rationale: "Long Polling 使用标准 HTTP 请求，兼容性最好，适合不频繁更新的场景。但延迟高于 WebSocket。"
        },
        {
            id: "w19-3-q10",
            question: "WebSocket 安全连接使用什么协议前缀？",
            options: [
                "http://",
                "https://",
                "ws://",
                "wss://"
            ],
            answer: 3,
            rationale: "WebSocket 安全连接使用 wss:// 协议前缀（WebSocket Secure），对应 HTTPS 加密。"
        },
        {
            id: "w19-3-q11",
            question: "什么场景更适合使用 SSE 而非 WebSocket？",
            options: [
                "实时聊天",
                "多人游戏",
                "股票行情推送、新闻通知等单向数据流",
                "协作编辑"
            ],
            answer: 2,
            rationale: "'Choose SSE for: Read-only scenarios like stock tickers, news feeds, and live notifications where data flows exclusively server-to-client'。"
        },
        {
            id: "w19-3-q12",
            question: "WebSocket 的 Opcode 字段用于什么？",
            options: [
                "标识发送者",
                "标识帧类型（text/binary/close/ping/pong）",
                "计算校验和",
                "指定压缩方式"
            ],
            answer: 1,
            rationale: "Opcode 字段标识帧类型：0x1 文本帧、0x2 二进制帧、0x8 关闭帧、0x9 ping 帧、0xA pong 帧。"
        }
    ],
    "w19-4": [
        {
            id: "w19-4-q1",
            question: "聊天系统的核心组件不包括？",
            options: [
                "消息传递（WebSocket）",
                "消息存储（数据库）",
                "消息编译（编译器）",
                "消息分发（Pub/Sub）"
            ],
            answer: 2,
            rationale: "聊天系统核心组件：消息传递（WebSocket）、消息存储（数据库）、消息分发（Pub/Sub）、在线状态（心跳）。"
        },
        {
            id: "w19-4-q2",
            question: "大群（1000+人）消息分发为什么采用拉模式？",
            options: [
                "更安全",
                "减少服务端推送压力",
                "消息更可靠",
                "延迟更低"
            ],
            answer: 1,
            rationale: "大群采用拉模式：客户端主动拉取消息，减少服务端向大量成员推送的压力。"
        },
        {
            id: "w19-4-q3",
            question: "Operational Transformation (OT) 解决什么问题？",
            options: [
                "消息加密",
                "并发编辑冲突",
                "网络延迟",
                "数据压缩"
            ],
            answer: 1,
            rationale: "OT 和 CRDT 解决并发编辑冲突。OT 在服务端变换操作，CRDT 使用可交换数据结构保证最终一致性。"
        },
        {
            id: "w19-4-q4",
            question: "写扩散和读扩散的区别是什么？",
            options: [
                "没有区别",
                "写扩散在发送时写入每个成员的收件箱，读扩散在读取时聚合",
                "写扩散更快",
                "读扩散更安全"
            ],
            answer: 1,
            rationale: "写扩散在发送时写入每个成员的收件箱，读扩散在读取时聚合。通常小群写扩散，大群读扩散。"
        },
        {
            id: "w19-4-q5",
            question: "在线状态系统如何实现？",
            options: [
                "数据库轮询",
                "使用 Redis 存储状态，定期心跳更新 TTL",
                "HTTP 长连接",
                "邮件通知"
            ],
            answer: 1,
            rationale: "在线状态是高频更新的读多写少场景。使用 Redis 存储状态，定期心跳更新 TTL，通过 Pub/Sub 通知变更。"
        },
        {
            id: "w19-4-q6",
            question: "端到端加密（E2E）对服务端有什么影响？",
            options: [
                "需要更多存储",
                "服务端只存储密文，无法读取内容",
                "需要更快的 CPU",
                "无影响"
            ],
            answer: 1,
            rationale: "端到端加密确保只有通信双方能解密。服务端只存储密文，无法读取内容。挑战包括多设备同步、群聊密钥管理。"
        },
        {
            id: "w19-4-q7",
            question: "聊天消息的存储特点是什么？",
            options: [
                "随机访问为主",
                "append-only 的时序数据",
                "频繁更新",
                "小数据量"
            ],
            answer: 1,
            rationale: "聊天消息是 append-only 的时序数据。索引设计：按会话 ID 分区，按时间排序。历史消息冷热分离。"
        },
        {
            id: "w19-4-q8",
            question: "如何处理消息乱序到达？",
            options: [
                "丢弃乱序消息",
                "使用消息 ID 去重，使用时间戳或序列号排序",
                "重新请求",
                "忽略顺序"
            ],
            answer: 1,
            rationale: "消息可能乱序到达或重复投递。使用消息 ID 去重，使用时间戳或序列号排序。客户端需要处理乱序消息的 UI 显示。"
        },
        {
            id: "w19-4-q9",
            question: "推送通知的降级策略是什么？",
            options: [
                "只使用 WebSocket",
                "WebSocket 在线推送 → 离线时 APNs/FCM → 打开 App 时同步",
                "只使用邮件",
                "定时轮询"
            ],
            answer: 1,
            rationale: "推送降级：1) WebSocket 在线推送 2) 离线时通过 APNs/FCM 推送 3) 用户打开 App 时同步未读消息。"
        },
        {
            id: "w19-4-q10",
            question: "Google Docs 使用什么技术解决协作编辑冲突？",
            options: [
                "CRDT",
                "Operational Transformation (OT)",
                "锁机制",
                "版本控制"
            ],
            answer: 1,
            rationale: "Google Docs 使用 OT（Operational Transformation）。OT 在服务端变换操作，保证所有客户端最终看到相同结果。"
        },
        {
            id: "w19-4-q11",
            question: "Signal 协议用于什么？",
            options: [
                "消息压缩",
                "端到端加密的密钥交换",
                "负载均衡",
                "消息路由"
            ],
            answer: 1,
            rationale: "端到端加密的密钥交换使用 Signal 协议。WhatsApp、Facebook Messenger 等都采用此协议。"
        },
        {
            id: "w19-4-q12",
            question: "聊天消息表的索引设计应该如何？",
            options: [
                "只按 ID 索引",
                "按会话 ID 分区，按时间排序",
                "只按用户 ID 索引",
                "不需要索引"
            ],
            answer: 1,
            rationale: "聊天消息索引设计：按 conversation_id 分区，按 created_at 排序，支持高效的会话内消息查询。"
        }
    ]
}
