import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "api-w6-1": {
        lessonId: "api-w6-1",
        background: [
            "【深度限制】Apollo GraphOS Router：max_depth 控制选择集的最深嵌套层级。例如查询 book → details → country 深度为 3。超出限制返回 400 错误，错误码 MAX_DEPTH_LIMIT。",
            "【高度限制】max_height 计算操作中的唯一字段数，别名重复只计一次。查询 id、name 和两个 name 别名的高度为 3，而非 4。",
            "【别名限制】max_aliases 限制操作中的别名总数。攻击者可能使用大量别名放大查询成本，如 nickname、username、handle 消耗 3 个别名配额。",
            "【根字段限制】max_root_fields 限制根级字段选择，别名分别计数。查询 topBooks、topMovies、topGames 为 3 个根字段。",
            "【复杂度分析】OWASP 建议：'Assign costs to field resolutions and enforce maximum query complexity'——为字段解析分配成本，强制执行最大查询复杂度限制。",
            "【字段级授权】OWASP 安全清单：验证每个数据字段访问的请求者权限，在 Schema 的边和节点上实现授权检查，通过接口和联合类型控制属性暴露。"
        ],
        keyDifficulties: [
            "【warn_only 模式】Apollo 建议在测试阶段使用 warn_only 模式：正常处理超出限制的操作但记录警告，用于确定最适合的限制阈值。",
            "【内省禁用】OWASP：'Disable introspection queries in production environments'——生产环境禁用内省查询，移除 GraphiQL 和 Schema 探索工具，防止攻击者发现 Schema 结构。",
            "【错误信息泄露】OWASP：'Don't return stack traces or be in debug mode in production'——生产环境不返回堆栈跟踪，掩盖错误响应但内部记录完整日志。",
            "【批量攻击】攻击者可能在单个请求中包含多个查询，绕过简单的速率限制。需要在代码层面对对象请求实施速率限制，而非仅限制 HTTP 请求数。",
            "【输入验证】OWASP：'Use specific GraphQL data types such as scalars or enums for type safety'，'List allowed characters - don't use a denylist'——使用类型安全和允许列表验证。"
        ],
        handsOnPath: [
            "配置深度限制：在 router.yaml 中设置 max_depth: 10，测试深层嵌套查询被正确拒绝，记录 MAX_DEPTH_LIMIT 错误。",
            "配置复杂度限制：使用 graphql-cost-analysis 或 graphql-query-complexity，为字段定义 @cost 指令，设置全局复杂度上限。",
            "禁用生产内省：在 Apollo Server 中设置 introspection: false，确保生产环境不暴露 Schema 结构。",
            "实现字段级授权：在 resolver 中检查用户角色和权限，使用 @auth 指令或中间件统一处理授权逻辑。",
            "配置错误处理：自定义错误格式化器，生产环境返回通用错误消息，开发环境返回详细堆栈跟踪。",
            "设置 warn_only 测试：启用 warn_only: true，收集一段时间的日志分析查询模式，然后设置合理的限制阈值。"
        ],
        selfCheck: [
            "Apollo GraphOS Router 支持哪四种操作限制？",
            "max_depth 和 max_height 的区别是什么？",
            "为什么生产环境应该禁用内省查询？",
            "如何防止 GraphQL 批量攻击？",
            "OWASP 对 GraphQL 输入验证有什么建议？",
            "warn_only 模式的用途是什么？"
        ],
        extensions: [
            "学习 graphql-shield 库，使用声明式规则实现复杂的授权逻辑。",
            "研究 GraphQL Armor 等安全中间件，一站式配置多种防护措施。",
            "探索 Apollo Studio 的安全洞察功能，分析潜在的滥用模式。",
            "学习 GraphQL 查询允许列表（Persisted Queries Only），只执行预注册的查询。"
        ],
        sourceUrls: [
            "https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html",
            "https://www.apollographql.com/docs/graphos/routing/security/request-limits",
            "https://roadmap.sh/graphql"
        ]
    },
    "api-w6-2": {
        lessonId: "api-w6-2",
        background: [
            "【联邦架构】Apollo Federation：'declaratively combining multiple APIs into a single federated GraphQL API'——声明式地将多个 API 组合成单一的联邦 GraphQL API。",
            "【超图与子图】联邦术语：组合后的联邦图称为 supergraph（超图），组成部分称为 subgraph（子图）。不同子图可以使用不同的服务器实现和编程语言。",
            "【路由器职责】Router 作为单一入口点：接收所有客户端请求、智能编排跨 API 的分发、返回统一响应。客户端无需了解子图分布。",
            "【@key 指令】@key 指令定义实体的唯一键：'tells other subgraphs which field(s) of the type to use to uniquely identify a particular instance'——告诉其他子图如何唯一标识实体实例。",
            "【引用解析器】__resolveReference：'tells the gateway how to fetch an entity by its @key fields'——告诉网关如何通过 @key 字段获取实体。每个贡献唯一字段的子图必须定义引用解析器。",
            "【实体表示】$representations 变量包含 @key 字段加 __typename：'A representation is an object that contains all fields from one of an entity's @keys, plus that entity's __typename field'。"
        ],
        keyDifficulties: [
            "【不可解析键】使用 resolvable: false 表示子图不能解析某实体：'This is an indication to the gateway to avoid resolving any fields in this subgraph'——仅用于定义关系而非解析。",
            "【@external 指令】标记子图通常无法解析的字段，但需要定义该字段用于其他目的（如 @requires 依赖）。",
            "【@requires 指令】表示实体字段的解析器依赖于其他子图解析的字段值。网关会先从其他子图获取依赖字段。",
            "【Query._entities】每个联邦子图必须能解析 Query._entities。网关将 $representations 传递给子图，子图返回解析后的实体。",
            "【跨子图性能】联邦查询可能涉及多个子图的串行请求。需要监控跨子图延迟，优化实体解析路径，考虑数据本地性。"
        ],
        handsOnPath: [
            "创建联邦子图：使用 @apollo/subgraph 的 buildSubgraphSchema 函数，定义带 @key 的实体类型，实现 __resolveReference 解析器。",
            "配置 Apollo Router：部署 Apollo Router 作为超图网关，配置子图端点，启用查询规划日志观察执行路径。",
            "实现跨子图实体：在产品子图定义 Product 实体，在评论子图扩展 Product 添加 reviews 字段，验证联邦查询正确解析。",
            "配置 @requires 依赖：在子图 B 的字段需要子图 A 的数据时，使用 @external 声明外部字段，@requires 声明依赖关系。",
            "监控联邦性能：在 Apollo Studio 中查看查询跟踪，识别慢子图和热点实体，优化 __resolveReference 实现。",
            "实现渐进式迁移：从单体 GraphQL 逐步迁移到联邦架构，先将一个域提取为子图，验证后逐步拆分其他域。"
        ],
        selfCheck: [
            "什么是 supergraph 和 subgraph？它们的关系是什么？",
            "Apollo Router 在联邦架构中扮演什么角色？",
            "@key 指令的作用是什么？如何定义复合键？",
            "什么是引用解析器（__resolveReference）？什么时候需要实现它？",
            "@external 和 @requires 指令分别用于什么场景？",
            "如何监控和优化联邦查询的性能？"
        ],
        extensions: [
            "学习 Apollo Federation 2 的新特性，如 @shareable、@inaccessible、@override 指令。",
            "研究 Schema Stitching 与 Federation 的对比，理解各自的适用场景。",
            "探索 GraphQL Mesh，将 REST/gRPC/GraphQL 统一为联邦图。",
            "学习 Rover CLI 工具，管理联邦 Schema 的发布、检查和组合。"
        ],
        sourceUrls: [
            "https://www.apollographql.com/docs/federation/",
            "https://www.apollographql.com/docs/graphos/platform/insights/field-usage",
            "https://roadmap.sh/graphql"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "api-w6-1": [
        {
            id: "api-w6-1-q1",
            question: "Apollo GraphOS Router 的 max_depth 限制什么？",
            options: [
                "查询中的字段总数",
                "选择集的最深嵌套层级",
                "返回结果的大小",
                "请求的超时时间"
            ],
            answer: 1,
            rationale: "Apollo 文档：max_depth 控制选择集的最深嵌套层级，包括片段字段。例如 book → details → country 深度为 3。"
        },
        {
            id: "api-w6-1-q2",
            question: "max_height 如何计算别名字段？",
            options: [
                "每个别名计为独立字段",
                "别名重复只计一次",
                "别名不计入高度",
                "别名计为 0.5 个字段"
            ],
            answer: 1,
            rationale: "Apollo 文档：max_height 计算唯一字段数，'aliased duplicates count only once'——别名重复只计一次。id、name 和两个 name 别名的高度为 3。"
        },
        {
            id: "api-w6-1-q3",
            question: "为什么需要 max_aliases 限制？",
            options: [
                "别名影响缓存",
                "攻击者可能使用大量别名放大查询成本",
                "别名会改变返回结构",
                "别名消耗更多内存"
            ],
            answer: 1,
            rationale: "攻击者可能使用大量别名（如 a1: field, a2: field...）放大单个查询的成本，max_aliases 限制别名总数防止此类滥用。"
        },
        {
            id: "api-w6-1-q4",
            question: "超出操作限制时返回什么 HTTP 状态码？",
            options: [
                "200 OK",
                "400 Bad Request",
                "403 Forbidden",
                "500 Internal Server Error"
            ],
            answer: 1,
            rationale: "Apollo 文档：'If an operation exceeds any of the set limits, the router will reject it with a 400 BAD_REQUEST status code'。"
        },
        {
            id: "api-w6-1-q5",
            question: "warn_only 模式的用途是什么？",
            options: [
                "禁用所有限制",
                "正常处理但记录警告，用于确定合适的阈值",
                "只警告不执行查询",
                "发送警告邮件"
            ],
            answer: 1,
            rationale: "Apollo 文档：warn_only 模式'processes exceeding operations normally while logging warnings—useful for establishing appropriate baselines'。"
        },
        {
            id: "api-w6-1-q6",
            question: "OWASP 建议在生产环境对内省查询怎么处理？",
            options: [
                "保持启用便于调试",
                "禁用内省查询",
                "只对管理员启用",
                "限制每小时次数"
            ],
            answer: 1,
            rationale: "OWASP 安全清单：'Disable introspection queries in production environments'——生产环境禁用内省查询，防止攻击者发现 Schema 结构。"
        },
        {
            id: "api-w6-1-q7",
            question: "OWASP 对生产环境的错误响应有什么建议？",
            options: [
                "返回详细堆栈跟踪",
                "不返回堆栈跟踪，掩盖错误响应但内部记录日志",
                "返回数据库错误信息",
                "不返回任何错误信息"
            ],
            answer: 1,
            rationale: "OWASP：'Don't return stack traces or be in debug mode in production'——掩盖错误响应防止信息泄露，但内部完整记录日志用于调试。"
        },
        {
            id: "api-w6-1-q8",
            question: "如何防止 GraphQL 批量攻击？",
            options: [
                "只限制 HTTP 请求数",
                "在代码层面对对象请求实施速率限制",
                "禁用批量查询",
                "限制响应大小"
            ],
            answer: 1,
            rationale: "OWASP 建议：'Mitigate batching attacks through code-level rate limiting on object requests'——在代码层面限制对象请求，而非仅限制 HTTP 请求数。"
        },
        {
            id: "api-w6-1-q9",
            question: "OWASP 对 GraphQL 输入验证有什么建议？",
            options: [
                "使用黑名单过滤危险字符",
                "使用特定类型如 scalar 或 enum，使用允许列表验证",
                "只在客户端验证",
                "不需要验证因为 GraphQL 有类型系统"
            ],
            answer: 1,
            rationale: "OWASP：'Use specific GraphQL data types such as scalars or enums for type safety'，'List allowed characters - don't use a denylist'。"
        },
        {
            id: "api-w6-1-q10",
            question: "复杂度分析如何工作？",
            options: [
                "计算查询字符串长度",
                "为字段解析分配成本，强制执行最大复杂度",
                "计算返回对象数量",
                "测量执行时间"
            ],
            answer: 1,
            rationale: "OWASP：'Assign costs to field resolutions and enforce maximum query complexity'——为字段解析分配成本值，累加后强制执行最大复杂度限制。"
        },
        {
            id: "api-w6-1-q11",
            question: "Apollo Router 默认的解析器递归深度限制是多少？",
            options: [
                "100",
                "500",
                "1000",
                "无限制"
            ],
            answer: 1,
            rationale: "Apollo 文档：'The router limits the deepest level of recursion allowed by the GraphQL parser to prevent stack overflows. The default value is 500'。"
        },
        {
            id: "api-w6-1-q12",
            question: "非 Enterprise 版 Apollo Server 如何实现深度限制？",
            options: [
                "内置支持无需配置",
                "使用 graphql-depth-limit 等 npm 包添加 validationRules",
                "无法实现深度限制",
                "修改 GraphQL 规范"
            ],
            answer: 1,
            rationale: "Apollo Server 可使用 npm 包如 graphql-depth-limit 实现深度限制：validationRules: [depthLimit(10)]。"
        }
    ],
    "api-w6-2": [
        {
            id: "api-w6-2-q1",
            question: "Apollo Federation 的核心思想是什么？",
            options: [
                "将多个 GraphQL 服务合并为一个代码库",
                "声明式地将多个 API 组合成单一的联邦 GraphQL API",
                "将 REST API 转换为 GraphQL",
                "自动生成 GraphQL Schema"
            ],
            answer: 1,
            rationale: "Apollo 文档：Federation 实现'declaratively combining multiple APIs into a single federated GraphQL API'——声明式组合多个 API。"
        },
        {
            id: "api-w6-2-q2",
            question: "在联邦术语中，supergraph 和 subgraph 分别是什么？",
            options: [
                "supergraph 是主服务器，subgraph 是备份",
                "supergraph 是组合后的联邦图，subgraph 是组成部分",
                "supergraph 是 Schema，subgraph 是 resolver",
                "supergraph 是客户端，subgraph 是服务端"
            ],
            answer: 1,
            rationale: "Apollo 文档：'The combined federated graph is called a supergraph. The constituent APIs are called subgraphs'——超图是组合结果，子图是组成部分。"
        },
        {
            id: "api-w6-2-q3",
            question: "Apollo Router 在联邦架构中的三个职责是什么？",
            options: [
                "编译、执行、缓存",
                "接收请求、编排分发、返回统一响应",
                "认证、授权、日志",
                "解析、验证、执行"
            ],
            answer: 1,
            rationale: "Apollo 文档：Router 作为单一入口点接收请求、'intelligently orchestrates and distributes the request across your APIs'、返回统一响应。"
        },
        {
            id: "api-w6-2-q4",
            question: "@key 指令的作用是什么？",
            options: [
                "定义主键用于数据库",
                "告诉其他子图如何唯一标识实体实例",
                "加密字段值",
                "定义缓存键"
            ],
            answer: 1,
            rationale: "Apollo 文档：@key 指令'tells other subgraphs which field(s) of the type to use to uniquely identify a particular instance'。"
        },
        {
            id: "api-w6-2-q5",
            question: "__resolveReference 解析器的作用是什么？",
            options: [
                "解析查询参数",
                "告诉网关如何通过 @key 字段获取实体",
                "解析字段类型",
                "处理错误"
            ],
            answer: 1,
            rationale: "Apollo 文档：'A reference resolver tells the gateway how to fetch an entity by its @key fields'——通过 @key 字段获取实体。"
        },
        {
            id: "api-w6-2-q6",
            question: "什么时候需要实现 __resolveReference？",
            options: [
                "所有类型都需要",
                "每个贡献唯一字段的子图必须为该实体实现",
                "只有根类型需要",
                "从不需要手动实现"
            ],
            answer: 1,
            rationale: "Apollo 文档：'Every subgraph that contributes at least one unique field to an entity must define a reference resolver for that entity'。"
        },
        {
            id: "api-w6-2-q7",
            question: "实体表示（representation）包含什么内容？",
            options: [
                "所有字段",
                "@key 字段加 __typename 字段",
                "只有 ID",
                "只有 __typename"
            ],
            answer: 1,
            rationale: "Apollo 文档：'A representation is an object that contains all fields from one of an entity's @keys, plus that entity's __typename field'。"
        },
        {
            id: "api-w6-2-q8",
            question: "resolvable: false 的作用是什么？",
            options: [
                "标记字段为必需",
                "告诉网关不在此子图解析该实体",
                "禁用缓存",
                "标记字段为弃用"
            ],
            answer: 1,
            rationale: "Apollo 文档：resolvable: false 'is an indication to the gateway to avoid resolving any fields in this subgraph'——仅用于定义关系。"
        },
        {
            id: "api-w6-2-q9",
            question: "@external 指令用于什么场景？",
            options: [
                "标记外部 API",
                "标记子图通常无法解析但需要定义的字段",
                "导出字段到其他子图",
                "标记公开字段"
            ],
            answer: 1,
            rationale: "Apollo 文档：@external 'indicates that this subgraph usually can't resolve a particular object field, but it still needs to define that field for other purposes'。"
        },
        {
            id: "api-w6-2-q10",
            question: "@requires 指令表示什么？",
            options: [
                "字段是必需的",
                "解析器依赖于其他子图解析的字段值",
                "需要认证",
                "需要特定权限"
            ],
            answer: 1,
            rationale: "Apollo 文档：@requires 'indicates that the resolver for a particular entity field depends on the values of other entity fields that are resolved by other subgraphs'。"
        },
        {
            id: "api-w6-2-q11",
            question: "每个联邦子图必须能解析什么查询？",
            options: [
                "Query.health",
                "Query._entities",
                "Query.schema",
                "Query.version"
            ],
            answer: 1,
            rationale: "Apollo 文档：'Every federated subgraph has to be able to resolve Query._entities'——这是联邦协议的核心要求。"
        },
        {
            id: "api-w6-2-q12",
            question: "联邦架构的一个关键优势是什么？",
            options: [
                "所有代码必须用同一种语言",
                "不同子图可以使用不同的服务器实现和编程语言",
                "不需要网络通信",
                "自动生成所有代码"
            ],
            answer: 1,
            rationale: "Apollo 文档：'Different subgraphs can use different server implementations and programming languages, provided they are federation-compatible'。"
        }
    ]
}
