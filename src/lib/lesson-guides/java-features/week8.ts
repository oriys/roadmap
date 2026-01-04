import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "jf-w8-1": {
        lessonId: "jf-w8-1",
        background: [
            "【Switch 表达式】JEP 361：Switch can function as both expression and statement——Switch 现在可以作为表达式返回值，不仅仅是语句。",
            "【箭头语法】JEP 361：case L -> eliminates fall-through behavior——箭头语法不会穿透到下一个 case，无需 break。",
            "【yield 关键字】JEP 361：yield is a restricted identifier (like var)——yield 用于在代码块中返回值，是受限标识符而非关键字。",
            "【多标签合并】JEP 361：Cases can combine multiple constants separated by commas——case A, B, C -> 替代重复的 case 声明。",
            "【穷尽性要求】Switch 表达式必须穷尽所有可能值（exhaustive），语句形式不强制要求。"
        ],
        keyDifficulties: [
            "【表达式 vs 语句】JEP 361：switch expression must be exhaustive and return a value——表达式必须穷尽且返回值，语句可以不完整。",
            "【yield vs return】yield 只从 switch 返回值，return 从方法返回。在 switch 块内不能用 return 返回 switch 的值。",
            "【箭头右侧】箭头右侧可以是：表达式、throw 语句、或 {} 代码块（需要 yield）。",
            "【冒号语法兼容】传统冒号语法仍可用，但不能与箭头语法混用在同一个 switch 中。"
        ],
        handsOnPath: [
            "箭头语法：int result = switch (day) { case MONDAY -> 1; case TUESDAY -> 2; default -> 0; };",
            "多标签：case SATURDAY, SUNDAY -> \"weekend\";",
            "yield 使用：case FRIDAY -> { System.out.println(\"Friday!\"); yield 5; }",
            "穷尽枚举：switch (color) { case RED -> 1; case GREEN -> 2; case BLUE -> 3; } // 无需 default",
            "传统语法配合 yield：case MONDAY: case TUESDAY: yield \"workday\";",
            "switch 表达式赋值：String type = switch(obj) { case Integer i -> \"int\"; default -> \"other\"; };"
        ],
        selfCheck: [
            "Switch 表达式和 Switch 语句有什么区别？",
            "箭头语法 -> 和传统冒号语法 : 可以混用吗？",
            "yield 和 return 有什么区别？什么时候用 yield？",
            "case A, B, C -> 等价于什么传统写法？",
            "什么是穷尽性要求？枚举类型需要 default 吗？"
        ],
        extensions: [
            "研究 Pattern Matching for Switch（Java 21）：case Integer i ->。",
            "了解 switch 表达式在 Stream 中的应用。",
            "探索 null 处理：case null -> (Java 21)。",
            "学习 when 守卫条件（Java 21）。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/361",
            "https://dev.java/learn/pattern-matching-for-switch/"
        ]
    },
    "jf-w8-2": {
        lessonId: "jf-w8-2",
        background: [
            "【Text Blocks 定义】JEP 378：Multi-line string literal that simplifies writing strings spanning multiple lines——使用三引号的多行字符串字面量。",
            "【三引号语法】使用 \"\"\" 开始和结束，开始引号后必须换行，内容从下一行开始。",
            "【缩进剥离】JEP 378：removing incidental white space from each line——自动移除公共缩进，结束引号位置决定基准。",
            "【行终止符规范化】JEP 378：All line endings convert to LF——所有换行符统一为 \\n，跨平台一致。",
            "【新转义序列】JEP 378：\\<line-terminator> suppresses newline, \\s produces single space——支持行续和保留空格。"
        ],
        keyDifficulties: [
            "【缩进规则】结束 \"\"\" 的位置决定缩进基线。左移结束引号会保留更多缩进，右移会剥离更多。",
            "【尾随空白】行尾空白默认被移除。使用 \\s 或 fence 方法保留尾随空格。",
            "【转义处理顺序】JEP 378：Escape sequences processed last, after whitespace handling——先处理缩进，后处理转义。",
            "【不能内联开始】开始 \"\"\" 后必须换行，String s = \"\"\"content\"\"\" 是非法的。"
        ],
        handsOnPath: [
            "基本用法：String html = \"\"\"\n    <html>\n        <body>Hello</body>\n    </html>\n    \"\"\";",
            "控制缩进：通过移动结束 \"\"\" 位置调整最终字符串的缩进。",
            "行续转义：String line = \"\"\"\n    Hello \\s\n    World\n    \"\"\"; // 保留空格",
            "JSON 示例：String json = \"\"\"\n    {\"name\": \"John\", \"age\": 30}\n    \"\"\";",
            "SQL 示例：String sql = \"\"\"\n    SELECT * FROM users\n    WHERE status = 'active'\n    \"\"\";",
            "格式化：String msg = \"\"\"\n    Hello %s!\n    \"\"\".formatted(name);"
        ],
        selfCheck: [
            "Text Blocks 的开始 \"\"\" 后面可以直接写内容吗？",
            "结束 \"\"\" 的位置如何影响最终字符串的缩进？",
            "如何在 Text Block 中保留行尾空格？",
            "\\s 和 \\<newline> 转义序列的作用是什么？",
            "Text Blocks 适合哪些使用场景？"
        ],
        extensions: [
            "研究 String.stripIndent() 方法的实现。",
            "了解 String.translateEscapes() 处理转义。",
            "探索 IDE 对 Text Blocks 的格式化支持。",
            "学习 Text Blocks 在单元测试中嵌入测试数据的技巧。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/378",
            "https://dev.java/learn/text-blocks/"
        ]
    },
    "jf-w8-3": {
        lessonId: "jf-w8-3",
        background: [
            "【Helpful NPE】JEP 358：NullPointerException messages provide null-detail message——详细说明哪个表达式为 null。",
            "【两部分信息】JEP 358：Consequence (what couldn't be done) and Reason (which expression was null)——后果和原因。",
            "【链式调用支持】对于 a.b.c.d 这样的链式调用，精确指出 a.b 为 null 导致无法访问 c。",
            "【字节码分析】JVM 通过分析字节码重建源码表达式，生成有意义的错误消息。",
            "【默认启用】Java 15+ 默认启用详细 NPE 消息，Java 14 需要手动开启。"
        ],
        keyDifficulties: [
            "【JVM 参数】JEP 358：-XX:+ShowCodeDetailsInExceptionMessages 启用详细消息。Java 14 默认关闭，15+ 默认开启。",
            "【消息格式】Cannot read field \"c\" because \"a.b\" is null——清晰指出问题位置。",
            "【数组访问】Cannot load from int array because \"arr\" is null——数组访问也有详细信息。",
            "【性能影响】详细消息在异常抛出时计算，正常执行路径无额外开销。"
        ],
        handsOnPath: [
            "触发详细 NPE：String s = null; s.length(); // Cannot invoke \"String.length()\" because \"s\" is null",
            "链式调用：a.b.c.d = 1; // Cannot read field \"c\" because \"a.b\" is null",
            "数组访问：int[] arr = null; arr[0] = 1; // Cannot store to int array because \"arr\" is null",
            "方法调用：obj.toString().length(); // 指出哪个调用返回 null",
            "禁用详细消息：java -XX:-ShowCodeDetailsInExceptionMessages Main",
            "启用详细消息（Java 14）：java -XX:+ShowCodeDetailsInExceptionMessages Main"
        ],
        selfCheck: [
            "Helpful NullPointerException 提供哪两部分信息？",
            "对于 a.b.c = 1，如果 a.b 为 null，异常消息会怎么显示？",
            "Java 14 和 Java 15+ 的默认行为有什么区别？",
            "详细 NPE 消息是编译时生成还是运行时生成？",
            "如何禁用详细 NullPointerException 消息？"
        ],
        extensions: [
            "研究 JVM 如何通过字节码重建源码表达式。",
            "了解详细 NPE 对调试和日志分析的帮助。",
            "探索 Objects.requireNonNull() 的最佳实践。",
            "学习如何编写 null 安全的代码以减少 NPE。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/358",
            "https://dev.java/learn/debugging/"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w8-1": [
        {
            id: "jf-w8-1-q1",
            question: "Switch 表达式在哪个 Java 版本成为正式特性？",
            options: [
                "Java 12（预览）",
                "Java 13（预览）",
                "Java 14（正式）",
                "Java 15"
            ],
            answer: 2,
            rationale: "JEP 361：Switch expressions delivered as permanent feature in Java 14 after preview in JDK 12-13。"
        },
        {
            id: "jf-w8-1-q2",
            question: "箭头语法 case VALUE -> 的特点是什么？",
            options: [
                "需要 break 语句",
                "不会穿透到下一个 case",
                "只能用于表达式",
                "必须返回值"
            ],
            answer: 1,
            rationale: "JEP 361：case L -> eliminates fall-through behavior——箭头语法不会穿透，无需 break。"
        },
        {
            id: "jf-w8-1-q3",
            question: "yield 关键字的作用是什么？",
            options: [
                "从方法返回值",
                "从 switch 表达式返回值",
                "中断循环",
                "抛出异常"
            ],
            answer: 1,
            rationale: "JEP 361：yield statement returns a value from switch expression——在代码块中返回 switch 的值。"
        },
        {
            id: "jf-w8-1-q4",
            question: "case MONDAY, TUESDAY, WEDNESDAY -> 等价于？",
            options: [
                "三个独立的 case",
                "逻辑或条件",
                "合并多个 case 共享同一处理",
                "编译错误"
            ],
            answer: 2,
            rationale: "JEP 361：Cases can combine multiple constants separated by commas——合并多个 case。"
        },
        {
            id: "jf-w8-1-q5",
            question: "Switch 表达式对枚举类型有什么要求？",
            options: [
                "必须有 default",
                "覆盖所有枚举值即可，无需 default",
                "只能用传统语法",
                "不支持枚举"
            ],
            answer: 1,
            rationale: "Switch 表达式必须穷尽所有可能值。枚举覆盖全部值时无需 default，编译器检查完整性。"
        },
        {
            id: "jf-w8-1-q6",
            question: "yield 是什么类型的标识符？",
            options: [
                "保留关键字",
                "受限标识符（like var）",
                "类名",
                "方法名"
            ],
            answer: 1,
            rationale: "JEP 361：yield is a restricted identifier (like var)——不是关键字，现有代码中 yield 作为类名仍有效。"
        },
        {
            id: "jf-w8-1-q7",
            question: "Switch 表达式和语句可以混用箭头和冒号语法吗？",
            options: [
                "可以自由混用",
                "不可以，同一 switch 只能用一种",
                "只有表达式可以混用",
                "只有语句可以混用"
            ],
            answer: 1,
            rationale: "同一个 switch 中不能混用箭头语法和传统冒号语法，必须统一使用一种。"
        },
        {
            id: "jf-w8-1-q8",
            question: "箭头右侧可以是什么？",
            options: [
                "只能是表达式",
                "只能是代码块",
                "表达式、throw 语句或代码块",
                "只能是 yield"
            ],
            answer: 2,
            rationale: "箭头右侧可以是单个表达式、throw 语句、或需要 yield 的代码块。"
        },
        {
            id: "jf-w8-1-q9",
            question: "以下哪个是有效的 switch 表达式？",
            options: [
                "switch (x) { case 1: return 1; }",
                "switch (x) { case 1 -> 1; default -> 0; }",
                "switch (x) { case 1 -> 1; case 2: 2; }",
                "switch (x) { case 1, 2: -> 1; }"
            ],
            answer: 1,
            rationale: "选项 B 是正确的箭头语法。A 使用 return 而非 yield，C 混用语法，D 语法错误。"
        },
        {
            id: "jf-w8-1-q10",
            question: "什么时候必须使用 yield？",
            options: [
                "所有 switch 表达式",
                "箭头语法后是代码块时",
                "传统冒号语法",
                "default 分支"
            ],
            answer: 1,
            rationale: "当箭头右侧是 {} 代码块时，必须用 yield 返回值：case X -> { ...; yield value; }。"
        },
        {
            id: "jf-w8-1-q11",
            question: "Switch 语句（非表达式）需要穷尽所有情况吗？",
            options: [
                "需要",
                "不需要",
                "取决于类型",
                "编译器警告但不报错"
            ],
            answer: 1,
            rationale: "JEP 361：switch statement but not expression can be incomplete——语句形式不强制穷尽。"
        },
        {
            id: "jf-w8-1-q12",
            question: "在 switch 表达式中能否使用 return？",
            options: [
                "可以，替代 yield",
                "不可以，return 从方法返回",
                "可以，但只在 default",
                "取决于上下文"
            ],
            answer: 1,
            rationale: "JEP 361：return 从方法返回，yield 从 switch 返回。在 switch 表达式中应使用 yield。"
        }
    ],
    "jf-w8-2": [
        {
            id: "jf-w8-2-q1",
            question: "Text Blocks 在哪个 Java 版本成为正式特性？",
            options: [
                "Java 13（预览）",
                "Java 14（预览）",
                "Java 15（正式）",
                "Java 11"
            ],
            answer: 2,
            rationale: "JEP 378：Text blocks delivered in Java 15——Java 13/14 预览，Java 15 正式。"
        },
        {
            id: "jf-w8-2-q2",
            question: "Text Block 的开始 \"\"\" 后面可以直接写内容吗？",
            options: [
                "可以",
                "不可以，必须换行",
                "取决于内容",
                "可以写单行内容"
            ],
            answer: 1,
            rationale: "JEP 378：开始 \"\"\" 后必须是换行符，内容从下一行开始。String s = \"\"\"text\"\"\" 非法。"
        },
        {
            id: "jf-w8-2-q3",
            question: "结束 \"\"\" 的位置如何影响缩进？",
            options: [
                "没有影响",
                "决定缩进剥离的基准线",
                "只影响最后一行",
                "只影响第一行"
            ],
            answer: 1,
            rationale: "JEP 378：The closing delimiter's position determines the indentation baseline——结束引号位置决定缩进基线。"
        },
        {
            id: "jf-w8-2-q4",
            question: "Text Block 中 \\s 转义序列的作用是什么？",
            options: [
                "表示换行",
                "表示制表符",
                "产生单个空格，防止被剥离",
                "转义斜杠"
            ],
            answer: 2,
            rationale: "JEP 378：\\s produces a single space, preventing trailing whitespace stripping——保留可能被剥离的空格。"
        },
        {
            id: "jf-w8-2-q5",
            question: "Text Block 中行尾换行可以被什么取消？",
            options: [
                "\\n",
                "\\r",
                "\\<newline>（行末反斜杠）",
                "\\t"
            ],
            answer: 2,
            rationale: "JEP 378：\\<line-terminator> suppresses newline insertion——行末反斜杠取消换行，实现行续。"
        },
        {
            id: "jf-w8-2-q6",
            question: "Text Block 处理的三个步骤顺序是什么？",
            options: [
                "转义 → 缩进 → 换行",
                "换行规范化 → 缩进剥离 → 转义处理",
                "缩进 → 换行 → 转义",
                "转义 → 换行 → 缩进"
            ],
            answer: 1,
            rationale: "JEP 378：Line terminator normalization → Indentation stripping → Escape sequence processing。"
        },
        {
            id: "jf-w8-2-q7",
            question: "Text Block 中的换行符统一转换为什么？",
            options: [
                "\\r",
                "\\r\\n",
                "\\n (LF)",
                "保持原样"
            ],
            answer: 2,
            rationale: "JEP 378：All line endings convert to LF——跨平台一致性，统一为 \\n。"
        },
        {
            id: "jf-w8-2-q8",
            question: "如何在 Text Block 中保留行尾空格？",
            options: [
                "无法保留",
                "使用 \\s 或 fence 方法",
                "使用 \\t",
                "使用 \\n"
            ],
            answer: 1,
            rationale: "行尾空白默认被剥离。使用 \\s 占位可以保留尾随空格。"
        },
        {
            id: "jf-w8-2-q9",
            question: "Text Block 最适合的使用场景是？",
            options: [
                "短字符串",
                "SQL、JSON、HTML 等多行文本",
                "数字",
                "单行长字符串"
            ],
            answer: 1,
            rationale: "JEP 378：Primary use cases include SQL queries, HTML, XML, JSON——减少转义，提高可读性。"
        },
        {
            id: "jf-w8-2-q10",
            question: "String.formatted() 方法的作用是什么？",
            options: [
                "格式化日期",
                "类似 printf 的格式化，支持占位符替换",
                "去除空格",
                "转换大小写"
            ],
            answer: 1,
            rationale: "JEP 378：formatted(Object... args) enables value substitution——实例方法版本的 String.format。"
        },
        {
            id: "jf-w8-2-q11",
            question: "Text Block 中如何嵌入 \"\"\" 三引号？",
            options: [
                "直接写",
                "使用 \\\"\\\"\\\" 转义",
                "无法嵌入",
                "使用 Unicode"
            ],
            answer: 1,
            rationale: "在 Text Block 中嵌入三引号需要至少转义一个：\\\"\"\" 或 \"\\\"\" 等。"
        },
        {
            id: "jf-w8-2-q12",
            question: "incidental white space 是什么？",
            options: [
                "字符串中的空格",
                "源码缩进产生的、不属于字符串内容的空白",
                "制表符",
                "换行符"
            ],
            answer: 1,
            rationale: "JEP 378：incidental white space 是源码格式化的缩进，编译器自动剥离，不是字符串内容。"
        }
    ],
    "jf-w8-3": [
        {
            id: "jf-w8-3-q1",
            question: "Helpful NullPointerException 在哪个版本引入？",
            options: [
                "Java 11",
                "Java 13",
                "Java 14",
                "Java 8"
            ],
            answer: 2,
            rationale: "JEP 358 在 Java 14 引入 Helpful NullPointerExceptions。"
        },
        {
            id: "jf-w8-3-q2",
            question: "详细 NPE 消息包含哪两部分？",
            options: [
                "行号和类名",
                "后果（Consequence）和原因（Reason）",
                "方法名和参数",
                "堆栈和变量"
            ],
            answer: 1,
            rationale: "JEP 358：null-detail message contains Consequence and Reason——描述做什么失败和哪个为 null。"
        },
        {
            id: "jf-w8-3-q3",
            question: "a.b.c = 1 中如果 a.b 为 null，消息会怎样？",
            options: [
                "NullPointerException",
                "Cannot read field \"c\" because \"a.b\" is null",
                "a is null",
                "field c not found"
            ],
            answer: 1,
            rationale: "JEP 358：消息精确指出 a.b 为 null，无法读取 c 字段。"
        },
        {
            id: "jf-w8-3-q4",
            question: "Java 14 中详细 NPE 消息默认是什么状态？",
            options: [
                "默认启用",
                "默认禁用",
                "取决于 JVM",
                "取决于代码"
            ],
            answer: 1,
            rationale: "JEP 358：Default behavior in Java 14 is false (disabled)——需要手动启用。"
        },
        {
            id: "jf-w8-3-q5",
            question: "Java 15+ 中详细 NPE 消息默认是什么状态？",
            options: [
                "默认禁用",
                "默认启用",
                "需要配置",
                "不支持"
            ],
            answer: 1,
            rationale: "Java 15+ 默认启用详细 NPE 消息，无需额外配置。"
        },
        {
            id: "jf-w8-3-q6",
            question: "如何启用详细 NPE 消息（Java 14）？",
            options: [
                "-XX:+DetailedNPE",
                "-XX:+ShowCodeDetailsInExceptionMessages",
                "-verbose:npe",
                "-Dnpe.details=true"
            ],
            answer: 1,
            rationale: "JEP 358：-XX:+ShowCodeDetailsInExceptionMessages 启用详细消息。"
        },
        {
            id: "jf-w8-3-q7",
            question: "详细 NPE 消息对哪类调用特别有用？",
            options: [
                "静态方法调用",
                "链式调用如 a.b.c.d",
                "构造函数",
                "Lambda 表达式"
            ],
            answer: 1,
            rationale: "JEP 358：For complex expressions like a.b.c.d, full access path is shown——链式调用精确定位。"
        },
        {
            id: "jf-w8-3-q8",
            question: "详细 NPE 消息是在什么时候生成的？",
            options: [
                "编译时",
                "类加载时",
                "异常抛出时（运行时）",
                "JVM 启动时"
            ],
            answer: 2,
            rationale: "详细消息在异常抛出时通过字节码分析生成，正常执行路径无额外开销。"
        },
        {
            id: "jf-w8-3-q9",
            question: "数组访问 null 时的消息格式是什么？",
            options: [
                "Array is null",
                "Cannot store to int array because \"arr\" is null",
                "ArrayNullException",
                "Index out of bounds"
            ],
            answer: 1,
            rationale: "JEP 358：Cannot store to int array because \"arr\" is null——数组操作也有详细说明。"
        },
        {
            id: "jf-w8-3-q10",
            question: "如何禁用详细 NPE 消息？",
            options: [
                "-XX:-ShowCodeDetailsInExceptionMessages",
                "无法禁用",
                "-XX:+DisableNPEDetails",
                "-Dnpe=false"
            ],
            answer: 0,
            rationale: "JEP 358：-XX:-ShowCodeDetailsInExceptionMessages 禁用详细消息。"
        },
        {
            id: "jf-w8-3-q11",
            question: "详细 NPE 消息对性能有影响吗？",
            options: [
                "严重影响正常执行",
                "只在异常抛出时有开销，正常执行无影响",
                "影响所有方法调用",
                "需要额外内存"
            ],
            answer: 1,
            rationale: "详细消息只在异常抛出时计算，正常执行路径不受影响。"
        },
        {
            id: "jf-w8-3-q12",
            question: "JVM 如何生成详细的表达式信息？",
            options: [
                "从源码读取",
                "通过字节码分析重建",
                "从调试符号读取",
                "从注释读取"
            ],
            answer: 1,
            rationale: "JEP 358：JVM reconstructs source expression from bytecode analysis——不需要源码。"
        }
    ]
}
