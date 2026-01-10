import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "grpc-w2-1": {
        lessonId: "grpc-w2-1",
        background: [
            "【Proto3 版本声明】每个 .proto 文件必须以 syntax = \"proto3\"; 开头作为第一个非注释行，明确使用 proto3 语法。这是 gRPC 推荐的版本。",
            "【消息定义】使用 message 关键字定义消息类型，每个字段需要指定类型、名称和唯一的字段编号。字段编号一旦使用就不能更改，因为它标识了线格式中的字段。",
            "【字段编号规则】字段编号范围 1-536,870,911，其中 19,000-19,999 是 Protocol Buffers 实现保留的。编号 1-15 只用 1 字节编码，应留给频繁使用的字段。",
            "【标量类型】Proto3 支持多种标量类型：int32/int64、uint32/uint64、sint32/sint64（更高效编码负数）、fixed32/fixed64、float/double、bool、string、bytes。",
            "【字段基数】Proto3 支持三种字段基数：implicit（默认，标量类型无 presence 追踪）、optional（可检查是否显式设置）、repeated（零或多个值，保持顺序）。"
        ],
        keyDifficulties: [
            "【字段编号不可变】'This number cannot be changed once your message type is in use'——字段编号在消息使用后不能更改，这是向后兼容的关键。删除字段时应标记为 reserved。",
            "【默认值行为】Proto3 标量字段有类型特定的默认值：string 为空字符串，数值为 0，bool 为 false。implicit 字段无法区分'未设置'和'设置为默认值'。",
            "【optional vs implicit】optional 字段可以检查是否显式设置（has_field），implicit 字段只有值。需要区分'未设置'和'设置为默认值'时使用 optional。",
            "【packed 编码】repeated 标量数字字段默认使用 packed 编码（连续存储），减少序列化体积。非数字类型的 repeated 字段不使用 packed。"
        ],
        handsOnPath: [
            "创建一个简单的 .proto 文件，定义 Person 消息（name、age、email 字段），使用 protoc 编译生成目标语言代码。",
            "实验字段编号：故意使用 1-15 范围和 16+ 范围的编号，观察序列化后的字节大小差异。",
            "测试默认值行为：创建空消息并序列化，观察字段是否被包含；使用 optional 和 implicit 字段对比差异。",
            "定义嵌套消息：Address 作为 Person 的内嵌类型，或作为独立消息引用，理解两种方式的使用场景。",
            "使用 repeated 字段：定义 PhoneNumber 列表，测试添加、遍历、修改操作。",
            "尝试删除字段：将已删除的字段编号标记为 reserved，验证旧数据兼容性。"
        ],
        selfCheck: [
            ".proto 文件的第一行必须是什么？Proto3 相比 Proto2 有哪些主要变化？",
            "字段编号的有效范围是多少？为什么 1-15 编号应该留给频繁使用的字段？",
            "optional 和 implicit 字段的区别是什么？什么场景需要使用 optional？",
            "Proto3 的默认值规则是什么？如何区分'字段未设置'和'字段设置为默认值'？",
            "什么是 reserved 关键字？为什么删除字段时需要使用它？",
            "repeated 字段的 packed 编码是什么？它适用于哪些类型？"
        ],
        extensions: [
            "学习 Proto2 和 Proto3 的差异，了解 required 字段被移除的原因。",
            "研究 Protocol Buffers 的二进制编码格式，理解 Varint、ZigZag 编码原理。",
            "探索 buf CLI 工具，它提供更好的 lint、格式化和依赖管理。",
            "了解 Protocol Buffers 的 JSON 映射规则，实现 Proto 和 JSON 的互转。"
        ],
        sourceUrls: [
            "https://protobuf.dev/",
            "https://protobuf.dev/programming-guides/proto3/",
            "https://protobuf.dev/overview/"
        ]
    },
    "grpc-w2-2": {
        lessonId: "grpc-w2-2",
        background: [
            "【枚举类型】enum 定义一组命名的整数常量。Proto3 要求第一个枚举值必须为 0，通常命名为 ENUM_TYPE_UNSPECIFIED 表示默认/未知值。",
            "【枚举别名】通过设置 allow_alias = true 选项，可以让多个枚举名映射到同一个数值。这在需要向后兼容重命名时很有用。",
            "【Oneof 字段】oneof 确保同一时间只有一个字段被设置，'Setting any member of the oneof automatically clears all the other members'，节省内存并表达互斥关系。",
            "【Map 类型】map<key_type, value_type> 创建键值对关联。Key 必须是标量类型（除 float/double 和 bytes），Value 可以是任意类型（但不能是另一个 map）。",
            "【Any 类型】google.protobuf.Any 允许存储任意序列化的消息，包含消息字节和类型 URL 标识符。适用于需要动态类型的场景。"
        ],
        keyDifficulties: [
            "【枚举零值】Proto3 强制第一个枚举值为 0，这与 C++ 习惯不同。原因是未设置的枚举字段默认为 0，UNSPECIFIED 语义更清晰。",
            "【Oneof 限制】oneof 字段不能是 repeated 或 map。设置 oneof 成员会自动清除其他成员，需要注意这种隐式行为可能导致数据丢失。",
            "【Map 无序性】map 字段的迭代顺序是未定义的，不同语言实现可能不同。如果需要有序，应使用 repeated message 代替。",
            "【Any 类型解析】使用 Any 需要知道具体类型才能解析，type_url 字段提供类型信息。滥用 Any 会丧失类型安全优势。"
        ],
        handsOnPath: [
            "定义枚举类型：创建 Status 枚举（UNKNOWN=0, ACTIVE=1, INACTIVE=2），在消息中使用并测试默认值行为。",
            "实验 oneof：定义包含 email 和 phone 的 oneof 联系方式，验证设置其中一个会清除另一个。",
            "使用 Map：定义 map<string, int32> 存储标签计数，测试添加、删除、遍历操作。",
            "导入并使用 Any：import google/protobuf/any.proto，将不同类型的消息打包到 Any 字段中。",
            "使用 Wrapper 类型：导入 google/protobuf/wrappers.proto，用 StringValue、Int32Value 包装标量，实现可空语义。",
            "实验枚举别名：设置 allow_alias = true，创建两个同值的枚举名，观察代码生成结果。"
        ],
        selfCheck: [
            "Proto3 枚举为什么要求第一个值必须为 0？UNSPECIFIED 命名惯例的作用是什么？",
            "oneof 字段有什么特点？设置一个 oneof 成员时会发生什么？",
            "map 字段的 key 类型有什么限制？为什么不能用 float 作为 key？",
            "Any 类型的使用场景是什么？它包含哪两个关键信息？",
            "Wrapper 类型（如 StringValue）为什么存在？Proto3 原生如何处理可空？",
            "什么是枚举别名？如何启用？"
        ],
        extensions: [
            "研究 Well-Known Types 的完整列表：Timestamp、Duration、FieldMask、Struct 等。",
            "了解 FieldMask 在 API 设计中的应用，实现部分更新（Partial Update）。",
            "探索 google.protobuf.Struct 如何表示动态 JSON 结构。",
            "学习枚举的 JSON 映射规则：数值 vs 字符串名称。"
        ],
        sourceUrls: [
            "https://protobuf.dev/programming-guides/proto3/",
            "https://protobuf.dev/reference/protobuf/google.protobuf/",
            "https://protobuf.dev/reference/"
        ]
    },
    "grpc-w2-3": {
        lessonId: "grpc-w2-3",
        background: [
            "【protoc 编译器】protoc 是 Protocol Buffers 的官方编译器，将 .proto 文件转换为目标语言代码。需要安装 protoc version 3 才能使用 proto3 语法。",
            "【语言插件】protoc 通过插件机制支持不同语言。C++、Java、Python 等内置支持；Go 需要安装 protoc-gen-go 和 protoc-gen-go-grpc 插件。",
            "【生成文件】编译后生成两类文件：消息序列化代码（如 *_pb2.py）和 gRPC 服务代码（如 *_pb2_grpc.py 或 *_grpc.pb.go）。",
            "【导入路径】使用 -I 或 --proto_path 指定 .proto 文件的搜索路径。import 语句的路径相对于这些搜索路径解析。",
            "【输出选项】--xxx_out 指定输出目录，--xxx_opt 指定输出选项。如 Go 的 paths=source_relative 表示输出路径相对于源文件。"
        ],
        keyDifficulties: [
            "【插件版本兼容】protoc、语言插件、运行时库的版本必须兼容。版本不匹配是常见错误来源，建议使用包管理器（如 buf）统一管理。",
            "【Go 包路径】Go 生成需要在 .proto 文件中指定 option go_package，或通过命令行 --go_opt=M<proto>=<package> 映射。",
            "【多文件编译】大型项目有多个 .proto 文件互相引用，需要正确设置 import 路径和编译顺序，或一次编译所有文件。",
            "【gRPC 代码分离】Go 1.20+ 版本 gRPC 代码生成独立为 protoc-gen-go-grpc 插件，需要分别安装和调用。"
        ],
        handsOnPath: [
            "安装 protoc：下载预编译二进制或使用包管理器（apt/brew/choco），验证 protoc --version。",
            "安装 Go 插件：go install google.golang.org/protobuf/cmd/protoc-gen-go@latest 和 protoc-gen-go-grpc@latest。",
            "编译简单 proto：protoc --go_out=. --go-grpc_out=. hello.proto，观察生成的 .pb.go 和 _grpc.pb.go 文件。",
            "Python 代码生成：python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. hello.proto。",
            "使用 buf CLI：安装 buf，创建 buf.yaml 配置，用 buf generate 替代 protoc 命令。",
            "编写 Makefile 或脚本自动化代码生成，在 CI/CD 中验证生成的代码是否最新。"
        ],
        selfCheck: [
            "protoc 编译器的作用是什么？如何检查安装的版本？",
            "Go 语言需要安装哪些 protoc 插件？它们分别生成什么文件？",
            "-I（--proto_path）参数的作用是什么？import 路径如何解析？",
            "Go 的 go_package 选项为什么是必需的？有哪些设置方式？",
            "buf CLI 相比原生 protoc 有什么优势？",
            "如何在项目中组织 .proto 文件和生成的代码？"
        ],
        extensions: [
            "深入学习 buf CLI：lint 规则、breaking change 检测、远程仓库（BSR）。",
            "研究 protoc 插件开发，了解如何编写自定义代码生成器。",
            "探索 gRPC 生态工具：grpc-gateway（REST 转 gRPC）、grpcurl、grpcui。",
            "了解 Bazel 构建系统中的 proto 规则，适合大型 monorepo 项目。"
        ],
        sourceUrls: [
            "https://protobuf.dev/getting-started/",
            "https://github.com/protocolbuffers/protobuf",
            "https://protobuf.dev/programming-guides/"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "grpc-w2-1": [
        {
            id: "grpc-w2-1-q1",
            question: "Proto3 文件的第一行（非注释）必须是什么？",
            options: [
                "package declaration",
                "import statement",
                "syntax = \"proto3\";",
                "message definition"
            ],
            answer: 2,
            rationale: "Proto3 官方文档指出：'The first line of the file specifies that you're using the proto3 revision of the protobuf language spec'，必须以 syntax = \"proto3\"; 开头。"
        },
        {
            id: "grpc-w2-1-q2",
            question: "Proto3 字段编号的有效范围是多少？",
            options: [
                "1 到 65535",
                "0 到 2^31-1",
                "1 到 536,870,911（除 19000-19999 保留）",
                "1 到 2^16-1"
            ],
            answer: 2,
            rationale: "Proto3 文档指出字段编号范围 1-536,870,911，其中'Field numbers 19,000 to 19,999 are reserved for the Protocol Buffers implementation'。"
        },
        {
            id: "grpc-w2-1-q3",
            question: "关于 Proto3 字段编号，以下哪项描述是正确的？",
            options: [
                "字段编号可以在消息类型使用后随时更改",
                "编号 1-15 和 16+ 的编码效率相同",
                "字段编号一旦使用就不能更改，因为它标识了线格式中的字段",
                "字段编号必须连续，不能有间隔"
            ],
            answer: 2,
            rationale: "文档明确指出：'This number cannot be changed once your message type is in use because it identifies the field in the message wire format'。"
        },
        {
            id: "grpc-w2-1-q4",
            question: "Proto3 中 optional 和 implicit 字段的主要区别是什么？",
            options: [
                "optional 字段可以检查是否显式设置，implicit 字段不能",
                "implicit 字段支持默认值，optional 不支持",
                "optional 字段必须设置值，implicit 可以省略",
                "两者没有区别"
            ],
            answer: 0,
            rationale: "Proto3 文档说明 optional 字段'A field that may or may not be set, with the ability to check if it was explicitly assigned'，而 implicit 字段'scalar types lack presence tracking'。"
        },
        {
            id: "grpc-w2-1-q5",
            question: "Proto3 repeated 标量数字字段默认使用什么编码？",
            options: [
                "length-prefixed encoding",
                "packed encoding",
                "varint encoding",
                "fixed encoding"
            ],
            answer: 1,
            rationale: "文档指出：'Repeated fields of scalar numeric types use packed encoding by default'——连续存储减少序列化体积。"
        },
        {
            id: "grpc-w2-1-q6",
            question: "Proto3 标量字段的默认值规则是什么？",
            options: [
                "所有字段必须显式初始化",
                "string 为空字符串，数值为 0，bool 为 false",
                "所有字段默认为 null",
                "默认值由用户在 proto 文件中指定"
            ],
            answer: 1,
            rationale: "Proto3 文档说明：'empty strings for string fields, zero for numeric types, false for booleans, and empty collections for repeated fields'。"
        },
        {
            id: "grpc-w2-1-q7",
            question: "为什么字段编号 1-15 应该留给频繁使用的字段？",
            options: [
                "编译器要求前 15 个字段必须使用 1-15",
                "1-15 编号只用 1 字节编码，16+ 需要 2 字节",
                "1-15 编号支持更多数据类型",
                "1-15 编号的字段默认为 required"
            ],
            answer: 1,
            rationale: "Proto3 使用 Varint 编码，字段编号 1-15 只需 1 字节存储编号和类型信息，16+ 需要 2 字节，频繁使用的字段用小编号可减少序列化体积。"
        },
        {
            id: "grpc-w2-1-q8",
            question: "Protocol Buffers 官方描述其定位是什么？",
            options: [
                "一种数据库查询语言",
                "Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data",
                "一种 REST API 设计规范",
                "一种网络传输协议"
            ],
            answer: 1,
            rationale: "Protocol Buffers 官网描述：'Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data'。"
        },
        {
            id: "grpc-w2-1-q9",
            question: "Proto3 与 JSON 相比的优势不包括？",
            options: [
                "更小的序列化体积",
                "更快的解析速度",
                "更好的人类可读性",
                "跨语言类型安全"
            ],
            answer: 2,
            rationale: "Protobuf Overview 描述：'It's like JSON, except it's smaller and faster'。Protobuf 是二进制格式，不如 JSON 人类可读，但更小更快。"
        },
        {
            id: "grpc-w2-1-q10",
            question: "Protocol Buffers 不适合的场景是？",
            options: [
                "跨语言服务通信",
                "数据存储和持久化",
                "超过几 MB 的大数据",
                "定义通信协议"
            ],
            answer: 2,
            rationale: "Protobuf Overview 明确指出不适合的场景：'data exceeding several megabytes'，以及需要压缩、多维科学数组、非 OO 语言环境。"
        },
        {
            id: "grpc-w2-1-q11",
            question: "如何在 Proto3 中删除已使用的字段？",
            options: [
                "直接删除字段定义即可",
                "将字段类型改为 bytes",
                "使用 reserved 关键字标记字段编号/名称",
                "将字段值设为 null"
            ],
            answer: 2,
            rationale: "Proto3 文档指出：'Deleted fields must be marked as reserved'，使用 reserved 防止字段编号被重用，确保向后兼容。"
        },
        {
            id: "grpc-w2-1-q12",
            question: "Proto3 消息类型字段与标量字段在 presence 方面有什么区别？",
            options: [
                "两者行为完全相同",
                "消息类型字段原生支持 presence 检查，标量字段需要 optional",
                "只有标量字段支持 presence",
                "两者都需要显式的 optional 修饰"
            ],
            answer: 1,
            rationale: "Proto3 文档指出：'Message-type fields already have field presence built-in'，消息类型字段天然支持 presence，而标量字段的 implicit 版本不支持。"
        }
    ],
    "grpc-w2-2": [
        {
            id: "grpc-w2-2-q1",
            question: "Proto3 枚举定义的第一个值必须满足什么条件？",
            options: [
                "必须是 1",
                "必须是 0",
                "可以是任意正整数",
                "必须是负数"
            ],
            answer: 1,
            rationale: "Proto3 文档明确：'the first value defined in an enum definition must have the value zero'，这是 Proto3 的强制要求。"
        },
        {
            id: "grpc-w2-2-q2",
            question: "Proto3 建议的枚举第一个值命名模式是什么？",
            options: [
                "ENUM_DEFAULT",
                "ENUM_TYPE_NAME_UNSPECIFIED",
                "UNKNOWN_VALUE",
                "NONE"
            ],
            answer: 1,
            rationale: "Proto3 文档建议：'Names should follow the pattern ENUM_TYPE_NAME_UNSPECIFIED for the default value'，表示默认/未知值。"
        },
        {
            id: "grpc-w2-2-q3",
            question: "oneof 字段的关键行为是什么？",
            options: [
                "所有成员可以同时被设置",
                "Setting any member of the oneof automatically clears all the other members",
                "必须设置至少一个成员",
                "成员只能是标量类型"
            ],
            answer: 1,
            rationale: "Proto3 文档明确：'Setting any member of the oneof automatically clears all the other members'，确保同时只有一个成员有值。"
        },
        {
            id: "grpc-w2-2-q4",
            question: "Proto3 map 字段的 key 类型有什么限制？",
            options: [
                "只能是 string 类型",
                "可以是任何标量类型",
                "必须是标量类型，但不能是 float/double 和 bytes",
                "必须是整数类型"
            ],
            answer: 2,
            rationale: "Proto3 文档指出：'Keys must be scalar types (excluding floating-point and bytes); values can be any type except another map'。"
        },
        {
            id: "grpc-w2-2-q5",
            question: "google.protobuf.Any 类型包含什么信息？",
            options: [
                "只有序列化的消息字节",
                "序列化的消息字节和类型 URL",
                "只有类型名称",
                "JSON 格式的消息内容"
            ],
            answer: 1,
            rationale: "Proto3 文档说明 Any 类型'contains serialized message bytes plus a type URL identifier'，需要类型 URL 才能正确反序列化。"
        },
        {
            id: "grpc-w2-2-q6",
            question: "关于 Proto3 枚举别名，以下哪项是正确的？",
            options: [
                "默认启用枚举别名",
                "需要设置 allow_alias = true 才能让多个枚举名映射到同一数值",
                "枚举别名会导致编译错误",
                "枚举别名只在 Proto2 中支持"
            ],
            answer: 1,
            rationale: "Proto3 文档指出：'Enum aliases are supported with the allow_alias = true option'，需要显式启用。"
        },
        {
            id: "grpc-w2-2-q7",
            question: "oneof 字段的限制不包括？",
            options: [
                "不能是 repeated",
                "不能是 map",
                "不能包含消息类型",
                "设置成员会清除其他成员"
            ],
            answer: 2,
            rationale: "oneof 可以包含消息类型成员。限制是：不能是 repeated、不能是 map、设置一个会清除其他。"
        },
        {
            id: "grpc-w2-2-q8",
            question: "google.protobuf.Duration 的 JSON 格式是什么？",
            options: [
                "整数毫秒值",
                "以 's' 结尾的字符串格式，如 \"1.212s\"",
                "ISO 8601 格式",
                "{\"seconds\": 1, \"nanos\": 212000000}"
            ],
            answer: 1,
            rationale: "Well-Known Types 文档指出 Duration 的 JSON 格式是'String format ending in \"s\" (e.g., \"1.212s\")'。"
        },
        {
            id: "grpc-w2-2-q9",
            question: "关于 Wrapper 类型（如 StringValue、Int32Value），以下哪项是正确的？",
            options: [
                "是 Proto3 必须使用的类型",
                "文档标注为 obsolete，建议使用 optional 字段代替",
                "只能用于 map 的 value",
                "比原生标量类型更高效"
            ],
            answer: 1,
            rationale: "Well-Known Types 文档明确指出：'These are now obsolete.'，建议使用 optional 字段或扩展，但仍可用于线兼容和存储到 Any。"
        },
        {
            id: "grpc-w2-2-q10",
            question: "google.protobuf.FieldMask 的主要用途是什么？",
            options: [
                "加密敏感字段",
                "在 API 操作中指定投影和部分更新的字段路径",
                "验证消息格式",
                "压缩消息体积"
            ],
            answer: 1,
            rationale: "Well-Known Types 文档说明 FieldMask'represents symbolic field paths for projections and updates in API operations'。"
        },
        {
            id: "grpc-w2-2-q11",
            question: "Proto3 map 字段的迭代顺序有什么特点？",
            options: [
                "按 key 的字典序排列",
                "按插入顺序排列",
                "迭代顺序是未定义的",
                "按 key 的数值大小排列"
            ],
            answer: 2,
            rationale: "Proto3 文档指出 map 字段的迭代顺序是未定义的，不同语言实现可能不同。如需有序应使用 repeated message。"
        },
        {
            id: "grpc-w2-2-q12",
            question: "google.protobuf.Timestamp 的精度和时间范围是？",
            options: [
                "毫秒精度，1970-2100 年",
                "纳秒精度，0001-9999 年",
                "秒精度，无限制",
                "微秒精度，1900-2100 年"
            ],
            answer: 1,
            rationale: "Well-Known Types 文档说明 Timestamp'represents a point in time (UTC epoch-based, nanosecond precision, range year 1-9999)'。"
        }
    ],
    "grpc-w2-3": [
        {
            id: "grpc-w2-3-q1",
            question: "使用 proto3 语法需要安装什么版本的 protoc？",
            options: [
                "任何版本都可以",
                "protoc version 2 或以上",
                "protoc version 3",
                "不需要安装 protoc"
            ],
            answer: 2,
            rationale: "gRPC Go Quickstart 指出需要'Protocol Buffer Compiler: \"version 3\" of protoc'才能使用 proto3 语法。"
        },
        {
            id: "grpc-w2-3-q2",
            question: "Go 语言使用 gRPC 需要安装哪些 protoc 插件？",
            options: [
                "只需要 protoc-gen-go",
                "protoc-gen-go 和 protoc-gen-go-grpc",
                "只需要 protoc-gen-go-grpc",
                "不需要任何插件"
            ],
            answer: 1,
            rationale: "gRPC Go Quickstart 要求安装两个插件：'protoc-gen-go@latest' 和 'protoc-gen-go-grpc@latest'，分别生成消息代码和 gRPC 服务代码。"
        },
        {
            id: "grpc-w2-3-q3",
            question: "Python gRPC 代码生成工具包的名称是什么？",
            options: [
                "grpc-python",
                "grpcio-tools",
                "python-grpc-tools",
                "protobuf-python"
            ],
            answer: 1,
            rationale: "gRPC Python Quickstart 指出：'Install development tools for code generation: python -m pip install grpcio-tools'，工具包名为 grpcio-tools。"
        },
        {
            id: "grpc-w2-3-q4",
            question: "Python protoc 生成的两个文件分别是什么？",
            options: [
                "hello.py 和 hello_server.py",
                "hello_pb2.py 和 hello_pb2_grpc.py",
                "hello_proto.py 和 hello_service.py",
                "hello_message.py 和 hello_rpc.py"
            ],
            answer: 1,
            rationale: "gRPC Python Quickstart 说明生成两个文件：'helloworld_pb2.py (request and response classes)' 和 'helloworld_pb2_grpc.py (client and server classes)'。"
        },
        {
            id: "grpc-w2-3-q5",
            question: "Go 语言 protoc 命令中 paths=source_relative 选项的作用是？",
            options: [
                "使用绝对路径输出",
                "输出路径相对于 proto 源文件位置",
                "忽略 import 路径",
                "启用相对导入"
            ],
            answer: 1,
            rationale: "gRPC Go Quickstart 中 --go_opt=paths=source_relative 表示生成的代码输出路径相对于 proto 源文件位置，而非 go_package 指定的路径。"
        },
        {
            id: "grpc-w2-3-q6",
            question: "Java gRPC 代码生成通常使用什么构建工具？",
            options: [
                "npm",
                "pip",
                "Gradle",
                "cargo"
            ],
            answer: 2,
            rationale: "gRPC Java Quickstart 使用'./gradlew installDist'进行构建，代码生成在构建过程中自动完成。"
        },
        {
            id: "grpc-w2-3-q7",
            question: "protoc -I 或 --proto_path 参数的作用是什么？",
            options: [
                "指定输出目录",
                "指定 .proto 文件的搜索路径",
                "指定使用的编程语言",
                "指定编译器版本"
            ],
            answer: 1,
            rationale: "-I 或 --proto_path 指定 .proto 文件的搜索路径，import 语句的路径相对于这些搜索路径解析。"
        },
        {
            id: "grpc-w2-3-q8",
            question: "protoc 原生支持哪些语言（不需要额外插件）？",
            options: [
                "只有 C++ 和 Java",
                "C++, C#, Java, Kotlin, Objective-C, PHP, Python, Ruby",
                "Go, Rust, Swift",
                "所有主流语言"
            ],
            answer: 1,
            rationale: "Protobuf Overview 指出 protoc 直接支持：'C++, C#, Java, Kotlin, Objective-C, PHP, Python, and Ruby'，Go 等语言需要 GitHub 插件。"
        },
        {
            id: "grpc-w2-3-q9",
            question: "Java gRPC 代码生成后，服务端需要继承什么基类？",
            options: [
                "GreeterService",
                "GreeterGrpc.GreeterImplBase",
                "AbstractGreeter",
                "GreeterHandler"
            ],
            answer: 1,
            rationale: "gRPC Java Quickstart 说明：'Developers extend GreeterGrpc.GreeterImplBase and override RPC methods'来实现服务端逻辑。"
        },
        {
            id: "grpc-w2-3-q10",
            question: "Python gRPC 代码生成命令中 --grpc_python_out 的作用是什么？",
            options: [
                "指定 Python 版本",
                "生成 gRPC 服务相关代码（stub 和 servicer）",
                "生成消息序列化代码",
                "启用 asyncio 支持"
            ],
            answer: 1,
            rationale: "--grpc_python_out 生成 gRPC 服务相关代码，包括 RouteGuideStub（客户端）和 RouteGuideServicer（服务端基类）。"
        },
        {
            id: "grpc-w2-3-q11",
            question: "gRPC Java 服务端响应客户端使用什么对象？",
            options: [
                "ResponseWriter",
                "StreamObserver",
                "OutputChannel",
                "ResponseStream"
            ],
            answer: 1,
            rationale: "gRPC Java Quickstart 说明服务端方法'receives a request object and a StreamObserver for sending responses back to clients via onNext() and onCompleted() calls'。"
        },
        {
            id: "grpc-w2-3-q12",
            question: "Go gRPC 要求使用什么版本的 Go？",
            options: [
                "Go 1.11 或以上",
                "最新的两个主要版本",
                "任何版本都可以",
                "只支持 Go 1.18"
            ],
            answer: 1,
            rationale: "gRPC Go Quickstart 要求：'any one of the two latest major releases of Go'，确保使用相对较新的 Go 版本。"
        }
    ]
}
