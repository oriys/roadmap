import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week16Guides: Record<string, LessonGuide> = {
    "jf-w16-1": {
        lessonId: "jf-w16-1",
        background: [
            "【String Templates】JEP 459：Template expressions embed variables and expressions in strings——模板表达式将变量和表达式嵌入字符串。",
            "【STR 处理器】STR 是标准字符串模板处理器，执行简单插值：STR.\"Hello \\{name}\"。",
            "【表达式嵌入】\\{expression} 语法嵌入任意表达式，包括方法调用、三元运算等。",
            "【多行支持】String Templates 可以与 Text Blocks 结合使用。",
            "【Java 21 预览】String Templates 在 Java 21 为预览特性（JEP 430），Java 22 继续预览（JEP 459）。"
        ],
        keyDifficulties: [
            "【语法注意】使用 \\{} 而非 ${}，反斜杠开始嵌入表达式。",
            "【编译时类型安全】模板表达式在编译时检查，类型错误会报编译错误。",
            "【处理器选择】必须指定处理器（如 STR、FMT），不能省略。",
            "【与字符串拼接对比】模板比 + 拼接更可读，比 String.format 更类型安全。"
        ],
        handsOnPath: [
            "基本插值：String msg = STR.\"Hello \\{name}, you are \\{age} years old.\";",
            "表达式：String result = STR.\"Sum: \\{a + b}, Product: \\{a * b}\";",
            "方法调用：String upper = STR.\"Name: \\{name.toUpperCase()}\";",
            "三元运算：String status = STR.\"Status: \\{active ? \"active\" : \"inactive\"}\";",
            "多行：String html = STR.\"\"\"\\n<div>\\n    <span>\\{content}</span>\\n</div>\\n\"\"\";",
            "嵌套对象：String info = STR.\"User: \\{user.getName()}, Email: \\{user.getEmail()}\";"
        ],
        selfCheck: [
            "String Templates 解决了什么问题？",
            "STR 处理器的作用是什么？",
            "\\{expression} 语法支持哪些表达式？",
            "String Templates 与 String.format 有什么区别？",
            "如何在 Text Block 中使用模板表达式？"
        ],
        extensions: [
            "研究 String Templates 的编译时处理。",
            "了解模板表达式与国际化的结合。",
            "探索 String Templates 在日志记录中的应用。",
            "学习 RAW 模板处理器的用途。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/459",
            "https://dev.java/learn/string-templates/"
        ]
    },
    "jf-w16-2": {
        lessonId: "jf-w16-2",
        background: [
            "【FMT 处理器】FMT 支持格式化说明符，类似 printf：FMT.\"金额：%,.2f\\{amount}\"。",
            "【格式化语法】格式化说明符紧跟 %，在 \\{} 之前：%s、%.2f、%d 等。",
            "【Formatter 规范】FMT 支持所有 java.util.Formatter 的格式化规范。",
            "【数字格式化】支持千分位、小数位、科学计数法等数字格式。",
            "【日期格式化】支持日期时间格式化：%tY-%tm-%td。"
        ],
        keyDifficulties: [
            "【格式说明符位置】格式说明符在 % 和 \\{} 之间，如 %,.2f\\{value}。",
            "【宽度和精度】%10.2f\\{value} 表示宽度 10，小数 2 位。",
            "【Locale 支持】结合 Locale 实现国际化数字格式。",
            "【类型匹配】格式说明符必须与嵌入值的类型兼容。"
        ],
        handsOnPath: [
            "数字格式：String price = FMT.\"Price: $%,.2f\\{amount}\";",
            "百分比：String pct = FMT.\"Completion: %.1f%%\\{progress * 100}\";",
            "宽度对齐：String row = FMT.\"|%10s\\{name}|%8d\\{count}|\";",
            "日期格式：String date = FMT.\"Date: %tY-%tm-%td\\{localDate}\\{localDate}\\{localDate}\";",
            "十六进制：String hex = FMT.\"Hex: 0x%08X\\{value}\";",
            "科学计数：String sci = FMT.\"Value: %e\\{largeNumber}\";"
        ],
        selfCheck: [
            "FMT 与 STR 处理器有什么区别？",
            "格式说明符应该放在什么位置？",
            "如何格式化数字为千分位逗号分隔？",
            "FMT 支持哪些格式化规范？",
            "如何实现国际化数字格式？"
        ],
        extensions: [
            "研究 FMT 与 String.format 的性能对比。",
            "了解复杂格式化场景的最佳实践。",
            "探索 FMT 在报表生成中的应用。",
            "学习自定义格式化器的实现。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/459",
            "https://dev.java/learn/string-templates/"
        ]
    },
    "jf-w16-3": {
        lessonId: "jf-w16-3",
        background: [
            "【自定义处理器】实现 StringTemplate.Processor 接口创建自定义处理器。",
            "【安全处理】自定义处理器可以实现 SQL 注入防护、HTML 转义等安全措施。",
            "【fragments 和 values】StringTemplate 提供 fragments()（静态部分）和 values()（动态值）。",
            "【编译时验证】自定义处理器可以在编译时验证模板结构。",
            "【领域特定】为 SQL、JSON、HTML 等创建专用处理器。"
        ],
        keyDifficulties: [
            "【Processor 接口】process(StringTemplate) 方法接收模板并返回处理结果。",
            "【安全拼接】遍历 fragments 和 values 交替拼接，对 values 进行转义。",
            "【类型参数】Processor<R, E> 中 R 是返回类型，E 是异常类型。",
            "【静态导入】可以静态导入自定义处理器简化使用。"
        ],
        handsOnPath: [
            "SQL 处理器：var SQL = StringTemplate.Processor.of(st -> sanitize(st));",
            "使用：String query = SQL.\"SELECT * FROM users WHERE name = \\{name}\";",
            "HTML 转义：var HTML = Processor.of(st -> escapeHtml(st));",
            "JSON 构建：var JSON = Processor.of(st -> buildJson(st));",
            "fragments 遍历：st.fragments().forEach(...); st.values().forEach(...);",
            "完整实现：record SafeSQL implements Processor<PreparedStatement, SQLException> { ... }"
        ],
        selfCheck: [
            "为什么需要自定义模板处理器？",
            "StringTemplate 的 fragments 和 values 分别是什么？",
            "如何实现 SQL 注入防护的处理器？",
            "Processor 接口的类型参数含义是什么？",
            "自定义处理器如何提供编译时安全？"
        ],
        extensions: [
            "研究生产级 SQL 模板处理器的实现。",
            "了解模板处理器在 Web 框架中的应用。",
            "探索模板处理器与 ORM 的集成。",
            "学习模板处理器的测试策略。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/459",
            "https://dev.java/learn/string-templates/"
        ]
    }
}

export const week16Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w16-1": [
        {
            id: "jf-w16-1-q1",
            question: "String Templates 的嵌入表达式语法是什么？",
            options: [
                "${expression}",
                "#{expression}",
                "\\{expression}",
                "{{expression}}"
            ],
            answer: 2,
            rationale: "String Templates 使用 \\{expression} 语法嵌入表达式，反斜杠开始。"
        },
        {
            id: "jf-w16-1-q2",
            question: "STR 处理器的作用是什么？",
            options: [
                "格式化数字",
                "执行简单字符串插值",
                "SQL 查询",
                "HTML 转义"
            ],
            answer: 1,
            rationale: "STR 是标准字符串模板处理器，执行简单插值，将表达式值转为字符串。"
        },
        {
            id: "jf-w16-1-q3",
            question: "以下哪个是正确的 String Template 语法？",
            options: [
                "\"Hello ${name}\"",
                "STR.\"Hello \\{name}\"",
                "\"Hello \\{name}\"",
                "String.template(\"Hello\", name)"
            ],
            answer: 1,
            rationale: "必须指定处理器（如 STR），然后使用点号调用模板字符串。"
        },
        {
            id: "jf-w16-1-q4",
            question: "\\{} 中可以包含什么？",
            options: [
                "只能是变量",
                "只能是字面量",
                "任意表达式，包括方法调用",
                "只能是字符串"
            ],
            answer: 2,
            rationale: "\\{} 中可以包含任意表达式，包括变量、方法调用、三元运算等。"
        },
        {
            id: "jf-w16-1-q5",
            question: "String Templates 相比 + 拼接的优势是什么？",
            options: [
                "性能更好",
                "可读性更高，更接近最终字符串",
                "占用更少内存",
                "支持更多类型"
            ],
            answer: 1,
            rationale: "模板表达式更接近最终字符串的结构，可读性更高。"
        },
        {
            id: "jf-w16-1-q6",
            question: "String Templates 相比 String.format 的优势是什么？",
            options: [
                "性能更好",
                "编译时类型安全",
                "支持更多格式",
                "更短"
            ],
            answer: 1,
            rationale: "模板表达式在编译时检查类型，String.format 是运行时检查。"
        },
        {
            id: "jf-w16-1-q7",
            question: "可以省略模板处理器吗？",
            options: [
                "可以，默认使用 STR",
                "不可以，必须指定处理器",
                "取决于 JDK 版本",
                "只有 Text Block 可以省略"
            ],
            answer: 1,
            rationale: "必须显式指定处理器，如 STR、FMT 等，不能省略。"
        },
        {
            id: "jf-w16-1-q8",
            question: "如何在 Text Block 中使用模板表达式？",
            options: [
                "不支持",
                "STR.\"\"\"\\n...\\{expr}...\\n\"\"\"",
                "TEXT.\"\"\"...\"\"\"",
                "需要特殊处理器"
            ],
            answer: 1,
            rationale: "STR 处理器可以与三引号 Text Block 结合使用。"
        },
        {
            id: "jf-w16-1-q9",
            question: "String Templates 是哪个 Java 版本引入的预览特性？",
            options: [
                "Java 17",
                "Java 19",
                "Java 21",
                "Java 22"
            ],
            answer: 2,
            rationale: "String Templates 在 Java 21 作为预览特性引入（JEP 430）。"
        },
        {
            id: "jf-w16-1-q10",
            question: "以下哪个表达式是合法的？",
            options: [
                "STR.\"Value: \\{a + b}\"",
                "STR.\"Value: ${a + b}\"",
                "\"Value: \\{a + b}\"",
                "format(\"Value: %d\", a + b)"
            ],
            answer: 0,
            rationale: "STR.\"Value: \\{a + b}\" 是正确的语法，嵌入表达式 a + b。"
        },
        {
            id: "jf-w16-1-q11",
            question: "String Templates 的编译时检查包括什么？",
            options: [
                "只检查语法",
                "检查表达式类型是否能转为字符串",
                "检查性能",
                "检查安全性"
            ],
            answer: 1,
            rationale: "编译器检查嵌入表达式的类型是否有效，能否转为字符串。"
        },
        {
            id: "jf-w16-1-q12",
            question: "String Templates 的主要设计目标是什么？",
            options: [
                "替代 StringBuilder",
                "简化字符串构建，提高可读性和安全性",
                "提高性能",
                "支持正则表达式"
            ],
            answer: 1,
            rationale: "JEP 459 的目标是简化字符串构建，提高可读性，并通过处理器提供安全保障。"
        }
    ],
    "jf-w16-2": [
        {
            id: "jf-w16-2-q1",
            question: "FMT 处理器的作用是什么？",
            options: [
                "简单插值",
                "支持格式化说明符的字符串模板",
                "SQL 查询",
                "JSON 生成"
            ],
            answer: 1,
            rationale: "FMT 支持格式化说明符，类似 printf 的格式化能力。"
        },
        {
            id: "jf-w16-2-q2",
            question: "FMT 中格式说明符的位置是什么？",
            options: [
                "在 \\{} 之后",
                "在 % 和 \\{} 之间",
                "在变量名之后",
                "在字符串开头"
            ],
            answer: 1,
            rationale: "格式说明符紧跟 %，在 \\{} 之前：%,.2f\\{value}。"
        },
        {
            id: "jf-w16-2-q3",
            question: "以下哪个是正确的 FMT 语法？",
            options: [
                "FMT.\"Price: %,.2f{amount}\"",
                "FMT.\"Price: $%,.2f\\{amount}\"",
                "FMT.\"Price: \\{amount:,.2f}\"",
                "FMT.format(\"Price: %,.2f\", amount)"
            ],
            answer: 1,
            rationale: "FMT 语法：%格式说明符\\{表达式}，如 %,.2f\\{amount}。"
        },
        {
            id: "jf-w16-2-q4",
            question: "%,.2f 表示什么？",
            options: [
                "科学计数法",
                "千分位分隔，保留两位小数",
                "十六进制",
                "百分比"
            ],
            answer: 1,
            rationale: ", 表示千分位分隔，.2 表示保留两位小数，f 表示浮点数。"
        },
        {
            id: "jf-w16-2-q5",
            question: "FMT 支持哪些格式化规范？",
            options: [
                "自定义规范",
                "java.util.Formatter 的所有规范",
                "只有数字格式",
                "只有日期格式"
            ],
            answer: 1,
            rationale: "FMT 支持所有 java.util.Formatter 的格式化规范。"
        },
        {
            id: "jf-w16-2-q6",
            question: "如何格式化日期？",
            options: [
                "FMT.\"Date: \\{date.format()}\"",
                "FMT.\"Date: %tY-%tm-%td\\{date}\\{date}\\{date}\"",
                "FMT.\"Date: %date\\{date}\"",
                "无法格式化日期"
            ],
            answer: 1,
            rationale: "日期格式化需要多个格式说明符，每个部分需要重复引用日期变量。"
        },
        {
            id: "jf-w16-2-q7",
            question: "%10s\\{name} 表示什么？",
            options: [
                "字符串长度 10",
                "宽度 10 的字符串，右对齐",
                "重复 10 次",
                "截断为 10 字符"
            ],
            answer: 1,
            rationale: "%10s 表示宽度 10 的字符串字段，默认右对齐。"
        },
        {
            id: "jf-w16-2-q8",
            question: "%-10s\\{name} 中的 - 表示什么？",
            options: [
                "负数",
                "左对齐",
                "减法",
                "删除"
            ],
            answer: 1,
            rationale: "- 标志表示左对齐，%-10s 表示宽度 10 的左对齐字符串。"
        },
        {
            id: "jf-w16-2-q9",
            question: "如何格式化十六进制？",
            options: [
                "%h\\{value}",
                "%x\\{value} 或 %X\\{value}",
                "%hex\\{value}",
                "不支持十六进制"
            ],
            answer: 1,
            rationale: "%x 格式化为小写十六进制，%X 格式化为大写十六进制。"
        },
        {
            id: "jf-w16-2-q10",
            question: "FMT 与 String.format 的主要区别是什么？",
            options: [
                "性能不同",
                "FMT 编译时类型安全，format 运行时检查",
                "支持的格式不同",
                "没有区别"
            ],
            answer: 1,
            rationale: "FMT 在编译时检查类型匹配，String.format 在运行时检查。"
        },
        {
            id: "jf-w16-2-q11",
            question: "如何格式化百分比？",
            options: [
                "%p\\{value}",
                "%.1f%%\\{value * 100}",
                "%percent\\{value}",
                "FMT.percent(value)"
            ],
            answer: 1,
            rationale: "使用 %.1f 格式化数字，%% 输出百分号，手动乘以 100。"
        },
        {
            id: "jf-w16-2-q12",
            question: "%08d\\{value} 表示什么？",
            options: [
                "8 位数字",
                "宽度 8，前导零填充",
                "8 进制",
                "最多 8 位"
            ],
            answer: 1,
            rationale: "0 标志表示前导零填充，8 是宽度，d 表示十进制整数。"
        }
    ],
    "jf-w16-3": [
        {
            id: "jf-w16-3-q1",
            question: "如何创建自定义模板处理器？",
            options: [
                "继承 STR",
                "实现 StringTemplate.Processor 接口",
                "使用注解",
                "无法自定义"
            ],
            answer: 1,
            rationale: "实现 StringTemplate.Processor 接口创建自定义处理器。"
        },
        {
            id: "jf-w16-3-q2",
            question: "StringTemplate 的 fragments() 返回什么？",
            options: [
                "所有值",
                "模板的静态文本部分",
                "处理后的字符串",
                "表达式列表"
            ],
            answer: 1,
            rationale: "fragments() 返回模板的静态文本部分（\\{} 之间和两侧的文本）。"
        },
        {
            id: "jf-w16-3-q3",
            question: "StringTemplate 的 values() 返回什么？",
            options: [
                "静态文本",
                "嵌入表达式的求值结果",
                "变量名",
                "格式说明符"
            ],
            answer: 1,
            rationale: "values() 返回所有嵌入表达式的求值结果列表。"
        },
        {
            id: "jf-w16-3-q4",
            question: "自定义处理器可以用于什么安全场景？",
            options: [
                "加密",
                "SQL 注入防护",
                "身份验证",
                "授权"
            ],
            answer: 1,
            rationale: "自定义处理器可以对 values 进行转义/参数化，防止 SQL 注入。"
        },
        {
            id: "jf-w16-3-q5",
            question: "Processor<R, E> 中 R 表示什么？",
            options: [
                "请求类型",
                "返回类型",
                "运行时类型",
                "资源类型"
            ],
            answer: 1,
            rationale: "R 是处理器的返回类型，如 String、PreparedStatement 等。"
        },
        {
            id: "jf-w16-3-q6",
            question: "Processor<R, E> 中 E 表示什么？",
            options: [
                "元素类型",
                "可能抛出的异常类型",
                "表达式类型",
                "错误码"
            ],
            answer: 1,
            rationale: "E 是处理器可能抛出的检查异常类型，如 SQLException。"
        },
        {
            id: "jf-w16-3-q7",
            question: "如何快速创建简单的自定义处理器？",
            options: [
                "new Processor()",
                "StringTemplate.Processor.of(lambda)",
                "Processor.create()",
                "@Processor 注解"
            ],
            answer: 1,
            rationale: "使用 StringTemplate.Processor.of(lambda) 工厂方法快速创建处理器。"
        },
        {
            id: "jf-w16-3-q8",
            question: "fragments 和 values 的数量关系是什么？",
            options: [
                "相等",
                "fragments = values + 1",
                "values = fragments + 1",
                "不确定"
            ],
            answer: 1,
            rationale: "fragments 的数量比 values 多 1，因为每个值两侧都有文本片段。"
        },
        {
            id: "jf-w16-3-q9",
            question: "SQL 模板处理器应该返回什么类型？",
            options: [
                "String",
                "PreparedStatement",
                "ResultSet",
                "Connection"
            ],
            answer: 1,
            rationale: "安全的 SQL 处理器应返回 PreparedStatement，使用参数化查询。"
        },
        {
            id: "jf-w16-3-q10",
            question: "HTML 模板处理器应该做什么？",
            options: [
                "直接拼接",
                "对 values 进行 HTML 转义",
                "添加样式",
                "压缩 HTML"
            ],
            answer: 1,
            rationale: "HTML 处理器应该对 values 进行 HTML 转义，防止 XSS 攻击。"
        },
        {
            id: "jf-w16-3-q11",
            question: "自定义处理器如何提供编译时安全？",
            options: [
                "运行时检查",
                "通过返回类型和类型参数确保正确使用",
                "注解处理",
                "不提供"
            ],
            answer: 1,
            rationale: "处理器的返回类型确保调用者正确处理结果，如必须处理异常。"
        },
        {
            id: "jf-w16-3-q12",
            question: "RAW 处理器的用途是什么？",
            options: [
                "原始字符串",
                "返回 StringTemplate 对象本身，用于调试或进一步处理",
                "性能优化",
                "加密"
            ],
            answer: 1,
            rationale: "RAW 处理器返回 StringTemplate 对象，可以检查 fragments 和 values。"
        }
    ]
}
