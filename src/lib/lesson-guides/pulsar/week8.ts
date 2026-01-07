import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "pulsar-w8-1": {
        lessonId: "pulsar-w8-1",
        background: [
            "【压缩的价值】官方文档：消息压缩可以减少网络带宽占用和存储空间，特别适合消息体较大或文本类消息。压缩在 Producer 端进行，解压在 Consumer 端进行。",
            "【支持的压缩算法】Pulsar 支持多种压缩算法：LZ4（默认推荐）、ZLIB、ZSTD、Snappy。不同算法在压缩率和 CPU 开销之间有不同权衡。",
            "【LZ4 特点】LZ4 是默认推荐算法，压缩和解压速度极快，CPU 开销低，压缩率适中。适合对延迟敏感的实时场景。",
            "【ZSTD 特点】ZSTD（Zstandard）提供更高的压缩率，但 CPU 开销较大。支持多级压缩，可以在压缩率和速度之间调节。适合存储成本敏感场景。",
            "【压缩与批量配合】压缩在批量发送的基础上进行，整个批次作为一个单元压缩。批量越大，压缩效果越好，因为可以利用消息间的相似性。"
        ],
        keyDifficulties: [
            "【压缩算法选择】选择压缩算法需要权衡：LZ4 速度快适合实时场景，ZSTD 压缩率高适合存储优化，Snappy 是折中选择。需要根据业务特点测试选择。",
            "【压缩对延迟的影响】压缩和解压需要 CPU 时间，会增加端到端延迟。高压缩率算法（如 ZSTD）影响更大，需要评估是否可接受。",
            "【压缩与 Schema 的关系】压缩发生在序列化之后，与 Schema 无关。但某些序列化格式（如 Avro）本身就比较紧凑，压缩收益可能有限。",
            "【Consumer 端解压】Consumer 需要有对应的解压库才能读取压缩消息。Pulsar 客户端已内置支持，但自定义客户端需要注意兼容性。"
        ],
        handsOnPath: [
            "对比测试：发送相同数据使用不同压缩算法，对比压缩率、发送延迟、CPU 使用率。",
            "测试不同类型消息（JSON、二进制、文本）的压缩效果差异。",
            "使用 pulsar-admin topics stats 查看压缩后的存储大小变化。",
            "测试高吞吐场景下不同压缩算法对整体性能的影响。"
        ],
        selfCheck: [
            "Pulsar 支持哪些压缩算法？各自的特点是什么？",
            "压缩发生在哪个阶段？解压发生在哪个阶段？",
            "为什么 LZ4 是默认推荐的压缩算法？",
            "压缩与批量发送如何配合？为什么批量越大压缩效果越好？",
            "选择压缩算法需要考虑哪些因素？"
        ],
        extensions: [
            "研究 ZSTD 的压缩级别配置，了解如何在压缩率和速度之间调节。",
            "探索 Broker 端的压缩配置，了解是否可以强制要求压缩。",
            "学习如何监控压缩带来的性能影响，包括 CPU 使用和延迟变化。",
            "研究 Kafka 的压缩实现，对比与 Pulsar 的差异。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/concepts-messaging/#compression",
            "https://pulsar.apache.org/docs/client-libraries-java/#compression"
        ]
    },
    "pulsar-w8-2": {
        lessonId: "pulsar-w8-2",
        background: [
            "【Schema 的价值】官方文档：Schema 定义消息的数据结构，确保 Producer 和 Consumer 之间的数据兼容性。Pulsar 内置 Schema Registry 自动管理 Schema 版本。",
            "【Primitive Schema】基本类型 Schema：BYTES、STRING、INT8、INT16、INT32、INT64、FLOAT、DOUBLE、BOOLEAN、DATE、TIME、TIMESTAMP 等。",
            "【Struct Schema】复杂类型 Schema 支持三种格式：Avro（推荐，二进制紧凑）、JSON（可读性好）、Protobuf（高性能跨语言）。",
            "【Auto Schema】官方文档：AutoProduceSchema 和 AutoConsumeSchema 可以自动推断 Java POJO 的 Schema，简化开发。",
            "【Schema 注册】首次发送消息时，Producer 会将 Schema 注册到 Broker。后续 Producer 和 Consumer 会验证 Schema 兼容性。"
        ],
        keyDifficulties: [
            "【Schema 强制性】可以在 Namespace 级别配置 schema_validation_enforced，强制所有 Topic 必须使用 Schema，拒绝无 Schema 的消息。",
            "【Schema 与编程语言】不同语言客户端对 Schema 的支持程度不同。Java 客户端支持最完善，其他语言可能只支持部分功能。",
            "【Avro vs JSON vs Protobuf】Avro 紧凑高效且支持 Schema 演进；JSON 可读性好但体积大；Protobuf 性能最好但需要预编译。根据需求选择。",
            "【Generic Schema】除了强类型 Schema，还支持 GenericSchema 动态处理不知道具体类型的消息，适合通用处理场景。"
        ],
        handsOnPath: [
            "定义一个 Java POJO，使用 AutoSchema 发送和接收消息，观察自动推断的 Schema。",
            "使用 Avro Schema 发送消息，通过 pulsar-admin schemas get 查看注册的 Schema。",
            "测试 Schema 不匹配的场景，观察 Producer 和 Consumer 的错误信息。",
            "使用 GenericRecord 读取不知道具体类型的消息。"
        ],
        selfCheck: [
            "Pulsar 支持哪些类型的 Schema？Primitive Schema 和 Struct Schema 有什么区别？",
            "Avro、JSON、Protobuf 三种 Struct Schema 各有什么特点？",
            "AutoSchema 是什么？它如何简化开发？",
            "Schema 是在什么时候注册到 Broker 的？",
            "如何强制 Topic 必须使用 Schema？"
        ],
        extensions: [
            "研究 Pulsar 的 Schema Registry 实现，了解 Schema 如何存储和版本管理。",
            "探索 KeyValue Schema，了解如何分别定义 Key 和 Value 的 Schema。",
            "学习如何在不同语言客户端之间共享 Schema 定义。",
            "研究 Schema 与 Pulsar SQL 的集成，了解如何查询有 Schema 的消息。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/schema-overview/",
            "https://pulsar.apache.org/docs/schema-understand/",
            "https://pulsar.apache.org/docs/schema-get-started/"
        ]
    },
    "pulsar-w8-3": {
        lessonId: "pulsar-w8-3",
        background: [
            "【Schema 演进需求】业务发展过程中，消息结构可能需要变更：添加字段、删除字段、修改字段类型。Schema 演进机制允许安全地进行这些变更。",
            "【兼容性策略】官方文档定义四种兼容性策略：BACKWARD（新读旧）、FORWARD（旧读新）、FULL（双向兼容）、NONE（不检查）。",
            "【BACKWARD 兼容】新版本 Schema 可以读取旧版本消息。要求：只能添加有默认值的字段，不能删除必需字段。Consumer 先升级。",
            "【FORWARD 兼容】旧版本 Schema 可以读取新版本消息。要求：只能删除有默认值的字段，不能添加必需字段。Producer 先升级。",
            "【FULL 兼容】同时满足 BACKWARD 和 FORWARD。最严格的兼容性，允许 Producer 和 Consumer 以任意顺序升级。"
        ],
        keyDifficulties: [
            "【兼容性检查时机】Schema 兼容性在 Producer/Consumer 连接时检查。不兼容的 Schema 会被拒绝注册，连接失败。",
            "【默认值的重要性】Schema 演进中，默认值是关键。添加字段必须有默认值（BACKWARD），删除字段该字段必须有默认值（FORWARD）。",
            "【升级顺序规划】根据兼容性策略规划升级顺序：BACKWARD 要求 Consumer 先升级；FORWARD 要求 Producer 先升级；FULL 可任意顺序。",
            "【Schema 版本管理】每个 Topic 维护 Schema 版本历史。可以通过 pulsar-admin schemas get 查看当前版本，通过 --version 查看历史版本。"
        ],
        handsOnPath: [
            "实验 BACKWARD 兼容：先部署旧 Schema 的 Producer，再升级 Schema 添加有默认值的字段，验证 Consumer 能读取新旧消息。",
            "测试不兼容变更被拒绝的场景：尝试添加无默认值的必需字段，观察错误信息。",
            "使用 pulsar-admin schemas get --version 查看 Topic 的 Schema 版本历史。",
            "在 Namespace 级别配置 Schema 兼容性策略，测试策略生效。"
        ],
        selfCheck: [
            "四种 Schema 兼容性策略分别是什么含义？",
            "BACKWARD 兼容对 Schema 变更有什么限制？",
            "为什么默认值在 Schema 演进中如此重要？",
            "使用 BACKWARD 兼容性时，应该先升级 Producer 还是 Consumer？",
            "如何查看 Topic 的 Schema 版本历史？"
        ],
        extensions: [
            "研究 Avro 的 Schema Resolution 规则，了解字段匹配和默认值处理的细节。",
            "探索 Schema 的自动演进功能（schema_auto_update_compatibility_strategy）。",
            "学习如何处理不兼容的 Schema 变更：创建新 Topic 或使用数据迁移。",
            "研究 Confluent Schema Registry 与 Pulsar Schema Registry 的差异。"
        ],
        sourceUrls: [
            "https://pulsar.apache.org/docs/schema-evolution-compatibility/",
            "https://pulsar.apache.org/docs/schema-evolution-compatibility/#schema-compatibility-check-strategy"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "pulsar-w8-1": [
        {
            id: "pulsar-w8-1-q1",
            question: "Pulsar 推荐的默认压缩算法是哪个？",
            options: [
                "ZLIB",
                "LZ4",
                "ZSTD",
                "Snappy"
            ],
            answer: 1,
            rationale: "LZ4 是默认推荐的压缩算法，压缩和解压速度极快，CPU 开销低，适合对延迟敏感的实时场景。"
        },
        {
            id: "pulsar-w8-1-q2",
            question: "消息压缩发生在哪个阶段？",
            options: [
                "Broker 端",
                "Producer 端",
                "Consumer 端",
                "BookKeeper 端"
            ],
            answer: 1,
            rationale: "压缩在 Producer 端进行，解压在 Consumer 端进行。Broker 存储的是压缩后的数据。"
        },
        {
            id: "pulsar-w8-1-q3",
            question: "ZSTD 压缩算法的主要特点是什么？",
            options: [
                "压缩速度最快",
                "压缩率最高但 CPU 开销较大",
                "不支持流式压缩",
                "只适合小消息"
            ],
            answer: 1,
            rationale: "ZSTD 提供更高的压缩率，但 CPU 开销较大。适合存储成本敏感场景。"
        },
        {
            id: "pulsar-w8-1-q4",
            question: "为什么批量发送配合压缩效果更好？",
            options: [
                "因为可以并行压缩",
                "因为批量越大，可以利用消息间的相似性获得更高压缩率",
                "因为减少了压缩次数",
                "因为压缩算法要求批量数据"
            ],
            answer: 1,
            rationale: "压缩在批量发送的基础上进行，整个批次作为一个单元压缩。批量越大，可以利用消息间的相似性，压缩效果越好。"
        },
        {
            id: "pulsar-w8-1-q5",
            question: "压缩对消息延迟有什么影响？",
            options: [
                "降低延迟",
                "无影响",
                "增加延迟（压缩和解压需要 CPU 时间）",
                "只在 Broker 端增加延迟"
            ],
            answer: 2,
            rationale: "压缩和解压需要 CPU 时间，会增加端到端延迟。高压缩率算法影响更大。"
        },
        {
            id: "pulsar-w8-1-q6",
            question: "LZ4 算法为什么适合实时场景？",
            options: [
                "压缩率最高",
                "压缩和解压速度极快，CPU 开销低",
                "不需要额外配置",
                "支持增量压缩"
            ],
            answer: 1,
            rationale: "LZ4 压缩和解压速度极快，CPU 开销低，对延迟影响小，因此适合对延迟敏感的实时场景。"
        },
        {
            id: "pulsar-w8-1-q7",
            question: "如何在 Producer 中启用压缩？",
            options: [
                "修改 Broker 配置",
                "使用 compressionType() 配置",
                "在 Topic 上设置压缩策略",
                "自动启用无需配置"
            ],
            answer: 1,
            rationale: "在 Producer 配置中使用 compressionType(CompressionType.LZ4) 等方法启用压缩。"
        },
        {
            id: "pulsar-w8-1-q8",
            question: "Consumer 端需要做什么才能读取压缩消息？",
            options: [
                "手动解压",
                "配置解压算法",
                "无需特殊处理，客户端自动解压",
                "安装额外的解压库"
            ],
            answer: 2,
            rationale: "Pulsar 客户端已内置解压支持，Consumer 无需特殊处理，自动解压。"
        },
        {
            id: "pulsar-w8-1-q9",
            question: "什么类型的消息压缩效果最好？",
            options: [
                "已经压缩过的数据",
                "随机二进制数据",
                "文本类消息或有重复模式的数据",
                "加密后的数据"
            ],
            answer: 2,
            rationale: "文本类消息或有重复模式的数据压缩效果最好。已压缩或加密的数据压缩收益很小。"
        },
        {
            id: "pulsar-w8-1-q10",
            question: "Snappy 压缩算法的定位是什么？",
            options: [
                "压缩率最高",
                "速度最快",
                "速度和压缩率的折中选择",
                "内存占用最低"
            ],
            answer: 2,
            rationale: "Snappy 是速度和压缩率之间的折中选择，比 LZ4 压缩率略高，比 ZSTD 速度快。"
        },
        {
            id: "pulsar-w8-1-q11",
            question: "压缩与 Schema 是什么关系？",
            options: [
                "必须一起使用",
                "互斥，不能同时使用",
                "压缩发生在序列化之后，与 Schema 无关",
                "Schema 决定压缩算法"
            ],
            answer: 2,
            rationale: "压缩发生在序列化之后，与 Schema 无关。但某些序列化格式本身就比较紧凑，压缩收益可能有限。"
        },
        {
            id: "pulsar-w8-1-q12",
            question: "存储成本敏感场景应该选择什么压缩算法？",
            options: [
                "LZ4",
                "不压缩",
                "ZSTD（压缩率最高）",
                "Snappy"
            ],
            answer: 2,
            rationale: "存储成本敏感场景应选择压缩率最高的 ZSTD，虽然 CPU 开销较大，但可以显著减少存储空间。"
        }
    ],
    "pulsar-w8-2": [
        {
            id: "pulsar-w8-2-q1",
            question: "Pulsar Schema 的主要作用是什么？",
            options: [
                "加密消息",
                "定义消息结构，确保 Producer 和 Consumer 数据兼容",
                "压缩消息",
                "路由消息"
            ],
            answer: 1,
            rationale: "Schema 定义消息的数据结构，确保 Producer 和 Consumer 之间的数据兼容性。"
        },
        {
            id: "pulsar-w8-2-q2",
            question: "以下哪个不是 Pulsar 支持的 Struct Schema 格式？",
            options: [
                "Avro",
                "JSON",
                "Protobuf",
                "XML"
            ],
            answer: 3,
            rationale: "Pulsar 支持 Avro、JSON、Protobuf 三种 Struct Schema 格式，不原生支持 XML。"
        },
        {
            id: "pulsar-w8-2-q3",
            question: "Avro Schema 的主要优势是什么？",
            options: [
                "可读性最好",
                "二进制紧凑且支持 Schema 演进",
                "不需要预定义",
                "性能最高"
            ],
            answer: 1,
            rationale: "Avro 是二进制格式，紧凑高效，且原生支持 Schema 演进和兼容性检查。"
        },
        {
            id: "pulsar-w8-2-q4",
            question: "AutoSchema 的作用是什么？",
            options: [
                "自动压缩消息",
                "自动推断 Java POJO 的 Schema",
                "自动选择最佳 Schema 格式",
                "自动更新 Schema 版本"
            ],
            answer: 1,
            rationale: "AutoProduceSchema 和 AutoConsumeSchema 可以自动推断 Java POJO 的 Schema，简化开发。"
        },
        {
            id: "pulsar-w8-2-q5",
            question: "Schema 是在什么时候注册到 Broker 的？",
            options: [
                "创建 Topic 时",
                "首次发送消息时",
                "Consumer 订阅时",
                "手动注册"
            ],
            answer: 1,
            rationale: "首次发送消息时，Producer 会将 Schema 注册到 Broker。后续会验证兼容性。"
        },
        {
            id: "pulsar-w8-2-q6",
            question: "如何强制 Topic 必须使用 Schema？",
            options: [
                "无法强制",
                "在 Namespace 级别配置 schema_validation_enforced",
                "在 Topic 上设置属性",
                "在 Broker 配置中设置"
            ],
            answer: 1,
            rationale: "可以在 Namespace 级别配置 schema_validation_enforced，强制所有 Topic 必须使用 Schema。"
        },
        {
            id: "pulsar-w8-2-q7",
            question: "JSON Schema 相比 Avro 的优势是什么？",
            options: [
                "更紧凑",
                "性能更高",
                "可读性好，易于调试",
                "支持更复杂的类型"
            ],
            answer: 2,
            rationale: "JSON Schema 的消息是文本格式，可读性好，易于调试和排查问题，但体积较大。"
        },
        {
            id: "pulsar-w8-2-q8",
            question: "GenericSchema 的用途是什么？",
            options: [
                "提高性能",
                "动态处理不知道具体类型的消息",
                "自动转换 Schema",
                "压缩消息"
            ],
            answer: 1,
            rationale: "GenericSchema 支持动态处理不知道具体类型的消息，适合通用处理场景。"
        },
        {
            id: "pulsar-w8-2-q9",
            question: "Protobuf Schema 的特点是什么？",
            options: [
                "可读性最好",
                "高性能跨语言，但需要预编译",
                "动态类型",
                "不支持嵌套结构"
            ],
            answer: 1,
            rationale: "Protobuf 是高性能的跨语言序列化格式，但需要预编译生成代码。"
        },
        {
            id: "pulsar-w8-2-q10",
            question: "如何查看 Topic 已注册的 Schema？",
            options: [
                "pulsar-admin topics stats",
                "pulsar-admin schemas get",
                "pulsar-admin topics list",
                "pulsar-admin namespaces policies"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin schemas get <topic-name> 可以查看 Topic 注册的 Schema。"
        },
        {
            id: "pulsar-w8-2-q11",
            question: "以下哪个是 Primitive Schema 类型？",
            options: [
                "Avro",
                "JSON",
                "STRING",
                "Protobuf"
            ],
            answer: 2,
            rationale: "STRING 是 Primitive Schema 类型，Avro、JSON、Protobuf 是 Struct Schema 格式。"
        },
        {
            id: "pulsar-w8-2-q12",
            question: "Schema 不匹配时会发生什么？",
            options: [
                "自动转换",
                "Producer/Consumer 连接失败",
                "消息被丢弃",
                "降级为 BYTES"
            ],
            answer: 1,
            rationale: "Schema 兼容性在连接时检查，不兼容的 Schema 会被拒绝注册，连接失败。"
        }
    ],
    "pulsar-w8-3": [
        {
            id: "pulsar-w8-3-q1",
            question: "BACKWARD 兼容性策略意味着什么？",
            options: [
                "旧版本 Schema 可以读取新版本消息",
                "新版本 Schema 可以读取旧版本消息",
                "双向兼容",
                "不检查兼容性"
            ],
            answer: 1,
            rationale: "BACKWARD 兼容意味着新版本 Schema 可以读取旧版本消息。使用新 Consumer 可以读取旧消息。"
        },
        {
            id: "pulsar-w8-3-q2",
            question: "FORWARD 兼容性策略意味着什么？",
            options: [
                "新版本 Schema 可以读取旧版本消息",
                "旧版本 Schema 可以读取新版本消息",
                "双向兼容",
                "不检查兼容性"
            ],
            answer: 1,
            rationale: "FORWARD 兼容意味着旧版本 Schema 可以读取新版本消息。旧 Consumer 可以读取新消息。"
        },
        {
            id: "pulsar-w8-3-q3",
            question: "FULL 兼容性策略的要求是什么？",
            options: [
                "只需满足 BACKWARD",
                "只需满足 FORWARD",
                "同时满足 BACKWARD 和 FORWARD",
                "不需要任何兼容性"
            ],
            answer: 2,
            rationale: "FULL 兼容性同时满足 BACKWARD 和 FORWARD，允许 Producer 和 Consumer 以任意顺序升级。"
        },
        {
            id: "pulsar-w8-3-q4",
            question: "使用 BACKWARD 兼容性时，添加字段有什么要求？",
            options: [
                "无要求",
                "必须有默认值",
                "必须是必需字段",
                "只能添加基本类型"
            ],
            answer: 1,
            rationale: "BACKWARD 兼容要求只能添加有默认值的字段，这样新 Consumer 读取旧消息时可以使用默认值。"
        },
        {
            id: "pulsar-w8-3-q5",
            question: "使用 BACKWARD 兼容性时，应该先升级哪个组件？",
            options: [
                "Producer",
                "Consumer",
                "Broker",
                "任意顺序"
            ],
            answer: 1,
            rationale: "BACKWARD 兼容要求 Consumer 先升级。新 Consumer 可以读取旧 Producer 的消息。"
        },
        {
            id: "pulsar-w8-3-q6",
            question: "Schema 兼容性检查发生在什么时候？",
            options: [
                "消息发送时",
                "Producer/Consumer 连接时",
                "消息消费时",
                "Topic 创建时"
            ],
            answer: 1,
            rationale: "Schema 兼容性在 Producer/Consumer 连接时检查。不兼容的 Schema 会被拒绝注册。"
        },
        {
            id: "pulsar-w8-3-q7",
            question: "为什么默认值在 Schema 演进中很重要？",
            options: [
                "提高性能",
                "新旧版本读取时可以填充缺失字段",
                "减少存储空间",
                "简化代码"
            ],
            answer: 1,
            rationale: "默认值确保新旧版本读取时可以填充缺失字段，是 Schema 兼容性的关键。"
        },
        {
            id: "pulsar-w8-3-q8",
            question: "如何查看 Topic 的 Schema 版本历史？",
            options: [
                "pulsar-admin topics stats",
                "pulsar-admin schemas get --all-versions",
                "pulsar-admin topics list",
                "无法查看历史版本"
            ],
            answer: 1,
            rationale: "使用 pulsar-admin schemas get --all-versions 可以查看 Topic 的 Schema 版本历史。"
        },
        {
            id: "pulsar-w8-3-q9",
            question: "NONE 兼容性策略意味着什么？",
            options: [
                "最严格的兼容性检查",
                "不检查兼容性，允许任意变更",
                "只允许添加字段",
                "只允许删除字段"
            ],
            answer: 1,
            rationale: "NONE 策略不检查兼容性，允许任意 Schema 变更，但可能导致消费失败。"
        },
        {
            id: "pulsar-w8-3-q10",
            question: "使用 FORWARD 兼容性时，应该先升级哪个组件？",
            options: [
                "Consumer",
                "Producer",
                "Broker",
                "任意顺序"
            ],
            answer: 1,
            rationale: "FORWARD 兼容要求 Producer 先升级。旧 Consumer 可以读取新 Producer 的消息。"
        },
        {
            id: "pulsar-w8-3-q11",
            question: "如何处理不兼容的 Schema 变更？",
            options: [
                "强制升级",
                "创建新 Topic 或使用数据迁移",
                "回滚变更",
                "忽略不兼容"
            ],
            answer: 1,
            rationale: "不兼容的 Schema 变更无法直接升级，需要创建新 Topic 或通过数据迁移处理。"
        },
        {
            id: "pulsar-w8-3-q12",
            question: "在哪个级别可以配置 Schema 兼容性策略？",
            options: [
                "只能在 Topic 级别",
                "只能在 Broker 级别",
                "可以在 Namespace 级别配置",
                "无法配置"
            ],
            answer: 2,
            rationale: "可以在 Namespace 级别配置 Schema 兼容性策略，该策略会应用到所有 Topic。"
        }
    ]
}
