import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "api-w5-1": {
        lessonId: "api-w5-1",
        background: [
            "【Schema 定义语言】Apollo 文档：'The schema is not responsible for defining where data comes from or how it's stored. It is entirely implementation-agnostic'——Schema 只描述数据结构，不涉及存储实现。",
            "【命名规范】Apollo 命名约定：字段名使用 camelCase，类型名使用 PascalCase，枚举值使用 SCREAMING_SNAKE_CASE。Query 字段省略 get/list 前缀（products 而非 getProducts）。",
            "【Mutation 命名】Mutation 字段应以动词开头：addCustomer 优于 customerAdd。输入类型使用 Input 后缀（AddCustomerInput），输出类型使用 Response 或 Payload 后缀。",
            "【无版本演进】GraphQL 最佳实践：'Avoid API versioning by utilizing new data types, queries, or mutations'——通过添加新类型/字段而非版本号来演进 Schema，保持向后兼容。",
            "【弃用机制】使用 @deprecated 指令标记弃用字段，提供 reason 说明替代方案和移除时间。GraphQL 客户端工具会警告使用已弃用字段的查询。",
            "【类型系统】GraphQL 支持六种类型：Scalar（标量）、Object（对象）、Input（输入）、Enum（枚举）、Union/Interface（联合/接口）、Root Operation（根操作）。"
        ],
        keyDifficulties: [
            "【非空标记】字段的 ! 标记表示非空，但在 resolver 中必须确保返回值。List 类型如 [String!]! 表示列表非空且元素非空，需要理解不同组合的语义。",
            "【命名冲突】当不同领域有同名类型时，使用命名空间前缀：PascalCase 前缀（StoreCustomer、SiteCustomer）或下划线前缀（Store_Customer）。选择一种并保持一致。",
            "【Mutation 串行执行】Apollo 文档：'top-level Mutation fields are resolved serially'——顶层 Mutation 字段串行执行，其他字段可并行。这影响批量操作的设计。",
            "【输入类型限制】Input 类型不能包含其他 Object 类型，只能包含 Scalar、Enum 或其他 Input 类型。需要为复杂输入设计专门的 Input 类型层级。",
            "【全局对象标识】GraphQL 最佳实践建议每个实体类型有唯一标识字段 id: ID!，支持客户端缓存和全局对象查找。需要设计一致的 ID 生成策略。"
        ],
        handsOnPath: [
            "设计 Schema 命名规范：创建项目的 GraphQL 风格指南，定义字段、类型、枚举、Mutation 的命名规则，配置 GraphOS Schema Linting。",
            "实现类型系统：定义核心业务类型（User、Product、Order），使用 Interface 提取共同字段，使用 Union 表示多态关系。",
            "设计 Mutation 模式：为每个 Mutation 创建对应的 Input 和 Payload 类型，Payload 包含成功数据和错误信息，支持部分成功场景。",
            "配置弃用策略：使用 @deprecated(reason: 'Use newField instead, will be removed 2024-06') 标记待移除字段，在文档中维护弃用时间表。",
            "实现分页模式：采用 Relay Connection 规范实现分页，定义 Edge、PageInfo 类型，支持 first/after 和 last/before 参数。",
            "设置 Schema 版本控制：将 Schema 文件纳入 Git 管理，使用 oasdiff 或 graphql-inspector 检测破坏性变更，在 CI 中阻止不兼容修改。"
        ],
        selfCheck: [
            "GraphQL Schema 中字段名、类型名、枚举值应该使用什么命名风格？",
            "为什么 GraphQL 提倡无版本演进？如何实现向后兼容的 Schema 变更？",
            "@deprecated 指令如何使用？应该在 reason 中包含什么信息？",
            "Mutation 的命名规范是什么？Input 和 Payload 类型如何命名？",
            "顶层 Mutation 字段的执行顺序是什么？这对设计有什么影响？",
            "如何解决不同领域的类型命名冲突？"
        ],
        extensions: [
            "学习 Relay Cursor Connections 规范，理解边缘（Edge）和连接（Connection）的完整模式。",
            "研究 GraphQL Federation 中的 @key、@external、@requires 指令，理解分布式 Schema 设计。",
            "探索 GraphQL Code Generator，从 Schema 自动生成 TypeScript 类型定义。",
            "学习 Schema Stitching 与 Federation 的对比，理解不同的 Schema 组合策略。"
        ],
        sourceUrls: [
            "https://roadmap.sh/graphql",
            "https://www.apollographql.com/docs/graphos/schema-design/guides/naming-conventions",
            "https://graphql.org/learn/best-practices/"
        ]
    },
    "api-w5-2": {
        lessonId: "api-w5-2",
        background: [
            "【N+1 问题本质】GraphQL N+1 问题：查询作者列表时，每个作者需要额外查询其书籍，导致 1 + N 次数据库查询。'neither clients nor servers can predict how expensive a request is until after it's executed'。",
            "【DataLoader 原理】DataLoader 是 Facebook 开发的批量加载工具：'used as part of your application's data fetching layer to provide a consistent API over various backends and reduce requests via batching and caching'。",
            "【批量机制】DataLoader 在单个事件循环中收集所有请求，然后批量处理：'a naive application may have issued four round-trips, but with DataLoader this application will make at most two'。",
            "【请求级缓存】DataLoader 实现请求级记忆化缓存：'memoization caching isn't safe when using a long-lived DataLoader, since it could consume too much memory'——每个请求创建新实例。",
            "【APQ 机制】Apollo Persisted Queries：'clients send GraphQL queries as compact SHA-256 hashes rather than full query strings'——用哈希替代完整查询字符串，大幅减少网络传输。",
            "【CDN 缓存】APQ 配合 GET 请求可利用 CDN 缓存：'Many CDNs only cache GET requests'——将查询转为 GET 请求，结合 @cacheControl 指令实现边缘缓存。"
        ],
        keyDifficulties: [
            "【批量函数顺序】DataLoader 文档：批量函数必须返回与输入键相同顺序的结果数组。如果数据库返回顺序不同，需要重新排序以匹配输入键。",
            "【缓存失效】Mutation 后需要手动清除 DataLoader 缓存：使用 .clear(key) 清除特定键，或 .clearAll() 清除全部。否则后续查询会返回过期数据。",
            "【APQ 首次请求】APQ 首次请求会收到 PERSISTED_QUERY_NOT_FOUND，需要重发包含完整查询的请求。这是正常流程，但增加了首次请求的延迟。",
            "【查询复杂度预测】GraphQL 无法像 REST 那样预测请求成本：'In REST, costs are predictable because there's one trip per endpoint. In GraphQL, there's only one endpoint'——需要额外的复杂度分析。",
            "【广度优先加载】WunderGraph 提出的新算法：'load data breadth-first rather than depth-first'——可将并发从 O(N²) 降到 O(1)，性能提升最高 5 倍。"
        ],
        handsOnPath: [
            "实现 DataLoader：为每个数据源创建 DataLoader 实例，批量函数使用 WHERE id IN (...) 查询，确保返回顺序与输入键一致。",
            "配置请求级实例：在 GraphQL context 中为每个请求创建新的 DataLoader 实例，避免跨请求缓存污染。",
            "处理缓存失效：在 Mutation resolver 中调用相关 DataLoader 的 .clear() 方法，确保后续查询获取最新数据。",
            "启用 APQ：客户端配置 createPersistedQueryLink，服务端 Apollo Server 默认支持，可设置 persistedQueries.ttl 控制缓存时间。",
            "配置响应缓存：使用 @cacheControl(maxAge: 300) 指令标记可缓存字段，配合 CDN 实现边缘缓存。",
            "监控批量效率：记录每个 DataLoader 的批量大小和命中率，识别未能有效批量化的查询模式。"
        ],
        selfCheck: [
            "什么是 GraphQL N+1 问题？为什么它比 REST API 更难预测？",
            "DataLoader 如何解决 N+1 问题？它的两个核心机制是什么？",
            "为什么每个请求需要创建新的 DataLoader 实例？",
            "DataLoader 批量函数的返回值有什么要求？",
            "APQ（Automatic Persisted Queries）的工作流程是什么？",
            "如何配合 CDN 缓存 GraphQL 响应？"
        ],
        extensions: [
            "研究 WunderGraph 的广度优先数据加载算法，理解其相比传统 DataLoader 的优势。",
            "学习 @defer 和 @stream 指令，实现响应的增量交付。",
            "探索 GraphQL 响应缓存策略：全响应缓存 vs 部分响应缓存。",
            "研究 GraphQL 订阅（Subscription）的性能优化，包括连接复用和消息批处理。"
        ],
        sourceUrls: [
            "https://github.com/graphql/dataloader",
            "https://www.apollographql.com/docs/apollo-server/performance/apq/",
            "https://roadmap.sh/graphql"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "api-w5-1": [
        {
            id: "api-w5-1-q1",
            question: "Apollo 命名规范中，GraphQL 字段名应该使用什么命名风格？",
            options: [
                "PascalCase",
                "camelCase",
                "snake_case",
                "SCREAMING_SNAKE_CASE"
            ],
            answer: 1,
            rationale: "Apollo 命名约定：字段名和参数名使用 camelCase（如 myCamelCaseFieldNames）。类型名使用 PascalCase，枚举值使用 SCREAMING_SNAKE_CASE。"
        },
        {
            id: "api-w5-1-q2",
            question: "GraphQL Query 字段的命名最佳实践是什么？",
            options: [
                "使用 get 前缀，如 getProducts",
                "使用 list 前缀，如 listProducts",
                "省略动词前缀，直接使用 products",
                "使用 fetch 前缀，如 fetchProducts"
            ],
            answer: 2,
            rationale: "Apollo 命名约定：Query 字段省略 get/list 等动词前缀，直接使用名词（products 而非 getProducts），保持根字段和嵌套字段的一致性。"
        },
        {
            id: "api-w5-1-q3",
            question: "GraphQL Mutation 字段的命名规范是什么？",
            options: [
                "名词在前，如 customerAdd",
                "动词在前，如 addCustomer",
                "使用下划线，如 add_customer",
                "使用全大写，如 ADD_CUSTOMER"
            ],
            answer: 1,
            rationale: "Apollo 命名约定：Mutation 字段以动词开头（addCustomer 优于 customerAdd），使用 camelCase 格式。"
        },
        {
            id: "api-w5-1-q4",
            question: "GraphQL 输入类型和输出类型应该使用什么后缀？",
            options: [
                "输入用 Data，输出用 Result",
                "输入用 Input，输出用 Response 或 Payload",
                "输入用 Request，输出用 Output",
                "都不需要后缀"
            ],
            answer: 1,
            rationale: "Apollo 命名约定：输入类型使用 Input 后缀（如 AddCustomerInput），Mutation 输出类型使用 Response 或 Payload 后缀（如 AddCustomerResponse）。"
        },
        {
            id: "api-w5-1-q5",
            question: "GraphQL 如何实现 API 演进而无需版本号？",
            options: [
                "每次都重新设计整个 Schema",
                "通过添加新类型、查询或 Mutation，保持向后兼容",
                "强制所有客户端同时升级",
                "使用 URL 路径区分版本"
            ],
            answer: 1,
            rationale: "GraphQL 最佳实践：'Avoid API versioning by utilizing new data types, queries, or mutations'——通过添加新内容而非版本号来演进，保持向后兼容。"
        },
        {
            id: "api-w5-1-q6",
            question: "@deprecated 指令的 reason 参数应该包含什么信息？",
            options: [
                "只需要说 deprecated",
                "应包含替代方案和移除时间",
                "只需要说不再使用",
                "不需要 reason 参数"
            ],
            answer: 1,
            rationale: "弃用最佳实践：reason 应说明替代方案和预计移除时间，如 @deprecated(reason: 'Use newField instead, will be removed 2024-06')。"
        },
        {
            id: "api-w5-1-q7",
            question: "GraphQL 顶层 Mutation 字段的执行顺序是什么？",
            options: [
                "全部并行执行",
                "串行执行，按列出顺序",
                "随机顺序执行",
                "按字母顺序执行"
            ],
            answer: 1,
            rationale: "Apollo 文档：'top-level Mutation fields are resolved serially in the order they're listed'——顶层 Mutation 串行执行，其他字段可并行。"
        },
        {
            id: "api-w5-1-q8",
            question: "GraphQL Schema 支持哪六种类型？",
            options: [
                "String、Int、Float、Boolean、ID、Object",
                "Scalar、Object、Input、Enum、Union/Interface、Root Operation",
                "Query、Mutation、Subscription、Type、Input、Enum",
                "Primitive、Complex、List、Map、Set、Tuple"
            ],
            answer: 1,
            rationale: "Apollo 文档：Schema 支持六种类型——Scalar（标量）、Object（对象）、Input（输入）、Enum（枚举）、Union/Interface（联合/接口）、Root Operation（根操作）。"
        },
        {
            id: "api-w5-1-q9",
            question: "如何解决不同领域的类型命名冲突？",
            options: [
                "使用完全不同的名称",
                "使用命名空间前缀如 StoreCustomer 或 Store_Customer",
                "在 Schema 中禁止重名",
                "使用数字后缀如 Customer1、Customer2"
            ],
            answer: 1,
            rationale: "Apollo 命名约定：解决命名冲突可使用 PascalCase 前缀（StoreCustomer、SiteCustomer）或下划线前缀（Store_Customer），选择一种并保持一致。"
        },
        {
            id: "api-w5-1-q10",
            question: "Apollo 文档对 Schema 定义的描述是什么？",
            options: [
                "Schema 定义数据存储方式",
                "Schema 与实现完全无关，只描述数据结构",
                "Schema 定义数据来源",
                "Schema 必须与数据库表一一对应"
            ],
            answer: 1,
            rationale: "Apollo 文档：'The schema is not responsible for defining where data comes from or how it's stored. It is entirely implementation-agnostic'。"
        },
        {
            id: "api-w5-1-q11",
            question: "[String!]! 类型声明表示什么意思？",
            options: [
                "列表可以为空，元素可以为 null",
                "列表非空，元素也非空",
                "列表非空，元素可以为 null",
                "列表可以为空，元素非空"
            ],
            answer: 1,
            rationale: "外层 ! 表示列表本身非空，内层 ! 表示列表元素非空。[String!]! 表示必须返回一个列表，且列表中每个元素都不能为 null。"
        },
        {
            id: "api-w5-1-q12",
            question: "GraphQL 最佳实践建议每个实体类型应该有什么？",
            options: [
                "createdAt 和 updatedAt 字段",
                "唯一标识字段 id: ID!",
                "name 和 description 字段",
                "version 字段"
            ],
            answer: 1,
            rationale: "GraphQL 最佳实践：每个表示实体的输出对象类型应有唯一标识字段 id: ID!，支持客户端缓存和全局对象查找。"
        }
    ],
    "api-w5-2": [
        {
            id: "api-w5-2-q1",
            question: "什么是 GraphQL N+1 问题？",
            options: [
                "查询返回 N+1 个结果",
                "查询列表时需要 1 + N 次数据库查询",
                "需要 N+1 个 resolver",
                "Schema 有 N+1 个类型"
            ],
            answer: 1,
            rationale: "N+1 问题：查询作者列表时，1 次查询获取作者，然后每个作者需要额外查询其书籍，导致 1 + N 次数据库查询。"
        },
        {
            id: "api-w5-2-q2",
            question: "为什么 GraphQL 的请求成本比 REST 更难预测？",
            options: [
                "GraphQL 查询更复杂",
                "GraphQL 只有一个端点，无法从 URL 判断请求大小",
                "GraphQL 不支持缓存",
                "GraphQL 必须返回所有字段"
            ],
            answer: 1,
            rationale: "文档指出：'In REST, costs are predictable because there's one trip per endpoint. In GraphQL, there's only one endpoint, and it's not indicative of the potential size of incoming requests'。"
        },
        {
            id: "api-w5-2-q3",
            question: "DataLoader 的两个核心机制是什么？",
            options: [
                "查询和变更",
                "批量加载和缓存",
                "订阅和推送",
                "分页和过滤"
            ],
            answer: 1,
            rationale: "DataLoader 文档：'provide a consistent API over various backends and reduce requests to those backends via batching and caching'——批量加载和缓存是两个核心机制。"
        },
        {
            id: "api-w5-2-q4",
            question: "DataLoader 可以将多少次往返减少到多少次？",
            options: [
                "N 次减少到 1 次",
                "四次往返减少到最多两次",
                "不能减少往返次数",
                "只能减少一半"
            ],
            answer: 1,
            rationale: "DataLoader 文档：'a naive application may have issued four round-trips to a backend for the required information, but with DataLoader this application will make at most two'。"
        },
        {
            id: "api-w5-2-q5",
            question: "为什么 DataLoader 需要为每个请求创建新实例？",
            options: [
                "性能原因",
                "长生命周期的 DataLoader 可能消耗过多内存",
                "技术限制",
                "安全原因"
            ],
            answer: 1,
            rationale: "DataLoader 文档：'memoization caching isn't safe when using a long-lived DataLoader, since it could consume too much memory'——长生命周期实例会导致内存问题。"
        },
        {
            id: "api-w5-2-q6",
            question: "DataLoader 批量函数的返回值有什么要求？",
            options: [
                "可以任意顺序返回",
                "必须返回与输入键相同顺序的结果数组",
                "只需要返回非空结果",
                "可以返回部分结果"
            ],
            answer: 1,
            rationale: "DataLoader 最佳实践：'Always return results in the same order as the input keys. This is required by the DataLoader contract'——必须保持顺序一致。"
        },
        {
            id: "api-w5-2-q7",
            question: "Mutation 后如何处理 DataLoader 缓存？",
            options: [
                "不需要处理",
                "使用 .clear(key) 清除相关缓存",
                "重启服务器",
                "等待缓存自动过期"
            ],
            answer: 1,
            rationale: "DataLoader 最佳实践：Mutation 后需要调用 .clear(key) 清除特定键的缓存，或 .clearAll() 清除全部缓存，避免返回过期数据。"
        },
        {
            id: "api-w5-2-q8",
            question: "APQ（Automatic Persisted Queries）用什么替代完整查询字符串？",
            options: [
                "查询 ID",
                "SHA-256 哈希",
                "查询缩写",
                "Base64 编码"
            ],
            answer: 1,
            rationale: "Apollo APQ 文档：'clients send GraphQL queries as compact SHA-256 hashes rather than full query strings'——使用 SHA-256 哈希替代完整查询。"
        },
        {
            id: "api-w5-2-q9",
            question: "APQ 首次请求时服务端会返回什么？",
            options: [
                "正常结果",
                "PERSISTED_QUERY_NOT_FOUND",
                "400 错误",
                "空响应"
            ],
            answer: 1,
            rationale: "APQ 工作流程：首次请求服务端返回 PERSISTED_QUERY_NOT_FOUND，客户端需要重发包含完整查询的请求，服务端缓存后续只需哈希。"
        },
        {
            id: "api-w5-2-q10",
            question: "为什么 APQ 有利于 CDN 缓存？",
            options: [
                "APQ 使用更小的响应",
                "APQ 可以将查询转为 GET 请求，而很多 CDN 只缓存 GET",
                "APQ 自动设置缓存头",
                "APQ 不需要 CDN"
            ],
            answer: 1,
            rationale: "Apollo 文档：'Many CDNs only cache GET requests'——APQ 将查询转为 GET 请求（useGETForHashedQueries: true），使 CDN 可以缓存响应。"
        },
        {
            id: "api-w5-2-q11",
            question: "WunderGraph 的新数据加载算法相比 DataLoader 有什么优势？",
            options: [
                "更简单的 API",
                "广度优先加载，并发从 O(N²) 降到 O(1)，性能提升最高 5 倍",
                "不需要配置",
                "自动处理所有情况"
            ],
            answer: 1,
            rationale: "WunderGraph 文档：'Instead of resolving depth-first, they load the data breadth-first, which allows reducing concurrency from O(N²) to O(1) and improves performance by up to 5x'。"
        },
        {
            id: "api-w5-2-q12",
            question: "DataLoader 批量函数应该使用什么样的数据库查询？",
            options: [
                "单独查询每个 ID",
                "使用 WHERE id IN (...) 批量查询",
                "使用 JOIN 查询",
                "使用子查询"
            ],
            answer: 1,
            rationale: "DataLoader 最佳实践：'Design batch functions to use queries like WHERE id IN (…) so related requests are fetched in one optimized call'——使用 IN 子句批量查询。"
        }
    ]
}
