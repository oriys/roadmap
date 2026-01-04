import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "jf-w6-1": {
        lessonId: "jf-w6-1",
        background: [
            "【var 定义】Oracle 文档：var is a reserved type name introduced in JDK 10——var 是保留类型名（非关键字），允许编译器从初始化表达式推断局部变量类型。",
            "【设计目的】官方风格指南：reduce the ceremony associated with writing Java code——减少代码冗余，提高可读性，同时保持 Java 的静态类型安全。",
            "【适用范围】var 只能用于：局部变量声明（有初始化）、增强 for 循环索引、传统 for 循环索引、try-with-resources 变量。",
            "【Java 11 扩展】Oracle 文档：Lambda expression parameters with var——Java 11 允许在 Lambda 参数中使用 var，主要用于添加注解如 @Nullable。",
            "【类型推断本质】var 不是动态类型，编译时类型已确定。var list = new ArrayList<String>() 推断为 ArrayList<String>，不是 List 接口。"
        ],
        keyDifficulties: [
            "【必须初始化】var 声明必须有初始化表达式，var x; 是非法的。编译器需要右侧表达式推断类型。",
            "【不能用于字段】var 只能用于局部变量，不能用于类字段、方法参数、方法返回类型。这是设计决策，保持 API 清晰。",
            "【钻石操作符陷阱】var list = new ArrayList<>() 推断为 ArrayList<Object>，因为没有类型上下文。需要 var list = new ArrayList<String>()。",
            "【Lambda 参数限制】Oracle 文档：Cannot mix inferred and var-declared parameters——Lambda 中不能混用 var 和显式类型：(var x, int y) 非法。"
        ],
        handsOnPath: [
            "基本使用：var list = new ArrayList<String>(); var map = new HashMap<String, Integer>();",
            "for 循环：for (var i = 0; i < 10; i++) { ... } 或 for (var item : collection) { ... }",
            "try-with-resources：try (var input = new FileInputStream(\"file.txt\")) { ... }",
            "Lambda 参数（Java 11）：(@Nullable var x, @Nullable var y) -> x + y",
            "链式调用：var stream = list.stream(); var result = stream.filter(x -> x > 0).toList();",
            "避免陷阱：var list = new ArrayList<String>() 而非 var list = new ArrayList<>()"
        ],
        selfCheck: [
            "var 是关键字还是保留类型名？有什么区别？",
            "var 可以用在哪些位置？不能用在哪些位置？",
            "var list = new ArrayList<>() 推断出的类型是什么？如何修正？",
            "Java 11 允许在 Lambda 参数中使用 var 的主要目的是什么？",
            "为什么说 var 不是动态类型？"
        ],
        extensions: [
            "研究 var 与泛型方法的交互：var result = Collections.emptyList() 推断为什么类型？",
            "了解 var 对代码可读性的影响：何时应该显式声明类型？",
            "探索 Kotlin 的 val/var 与 Java var 的对比。",
            "学习 IDE 如何显示 var 变量的推断类型。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/17/language/local-variable-type-inference.html",
            "https://openjdk.org/projects/amber/guides/lvti-style-guide"
        ]
    },
    "jf-w6-2": {
        lessonId: "jf-w6-2",
        background: [
            "【isBlank】Oracle 文档：Returns true if the string is empty or contains only white space codepoints——检查字符串是否为空或仅包含空白字符（Unicode 感知）。",
            "【lines】Oracle 文档：Returns a stream of lines extracted from this string——返回按行分割的 Stream，自动处理 \\n、\\r、\\r\\n 换行符。",
            "【strip 方法】strip()、stripLeading()、stripTrailing() 去除 Unicode 空白字符，比 trim() 更全面。",
            "【repeat】Oracle 文档：Returns a string whose value is the concatenation of this string repeated count times——重复字符串 n 次。",
            "【与旧方法对比】strip() vs trim()：strip 使用 Character.isWhitespace() 判断，支持更多 Unicode 空白字符。"
        ],
        keyDifficulties: [
            "【isBlank vs isEmpty】isEmpty() 只检查长度为 0，isBlank() 还检查纯空白字符串。\"   \".isEmpty() 返回 false，isBlank() 返回 true。",
            "【strip vs trim】Oracle 文档：strip() removes Unicode whitespace, trim() only removes characters ≤ U+0020——trim 只处理 ASCII 空格，strip 处理所有 Unicode 空白。",
            "【lines 流特性】lines() 返回的是 Stream<String>，可以与 Stream API 配合使用：str.lines().filter(...).collect(...)。",
            "【repeat 边界条件】repeat(0) 返回空字符串，repeat 负数抛出 IllegalArgumentException。"
        ],
        handsOnPath: [
            "isBlank 检查：\"  \".isBlank() // true，\"\".isBlank() // true，\"hello\".isBlank() // false",
            "lines 分割：\"a\\nb\\nc\".lines().forEach(System.out::println);",
            "strip 去空白：\"  hello  \".strip() // \"hello\"",
            "stripLeading/Trailing：\"  hello  \".stripLeading() // \"hello  \"",
            "repeat 重复：\"ab\".repeat(3) // \"ababab\"",
            "组合使用：text.lines().filter(line -> !line.isBlank()).map(String::strip).toList()"
        ],
        selfCheck: [
            "isBlank() 和 isEmpty() 的区别是什么？",
            "strip() 和 trim() 有什么不同？什么时候用 strip？",
            "lines() 返回什么类型？如何处理不同的换行符？",
            "repeat(0) 和 repeat(-1) 分别会发生什么？",
            "如何用 lines() 和 filter() 过滤空行？"
        ],
        extensions: [
            "研究 indent(n) 方法（Java 12）：调整每行缩进。",
            "了解 transform(Function) 方法（Java 12）：对字符串应用函数。",
            "探索 formatted() 方法（Java 15）：格式化字符串。",
            "学习 String 的 Unicode 规范化和国际化处理。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html",
            "https://dev.java/learn/strings/"
        ]
    },
    "jf-w6-3": {
        lessonId: "jf-w6-3",
        background: [
            "【Files.readString】Oracle 文档：Reads all content from a file into a string——一次性读取文件全部内容为字符串，默认 UTF-8 编码。",
            "【Files.writeString】Oracle 文档：Writes a CharSequence to a file——一次性将字符串写入文件，默认创建或覆盖，可指定选项如 APPEND。",
            "【Optional.isEmpty】Oracle 文档：Returns true if a value is not present——Java 11 新增，与 isPresent() 互补，代码更清晰。",
            "【Optional.ifPresentOrElse】Oracle 文档：If a value is present, performs action, otherwise performs emptyAction——Java 9 新增，替代 if-else 模式。",
            "【Optional.or】Oracle 文档：Returns Optional produced by supplier if empty——Java 9 新增，返回备选 Optional 而非展开的值。"
        ],
        keyDifficulties: [
            "【readString 内存限制】readString 将整个文件加载到内存，大文件应使用 lines() 或 BufferedReader 流式读取。",
            "【writeString 默认行为】默认选项是 CREATE, TRUNCATE_EXISTING, WRITE。要追加内容需显式指定 StandardOpenOption.APPEND。",
            "【or vs orElse】or() 返回 Optional<T>，orElse() 返回 T。or() 用于链式 Optional 操作，orElse() 用于获取最终值。",
            "【ifPresentOrElse 无返回值】ifPresentOrElse 返回 void，不能用于链式调用。需要返回值时用 map/orElse 组合。"
        ],
        handsOnPath: [
            "读取文件：String content = Files.readString(Path.of(\"file.txt\"));",
            "写入文件：Files.writeString(Path.of(\"output.txt\"), \"Hello World\");",
            "追加写入：Files.writeString(path, text, StandardOpenOption.APPEND);",
            "isEmpty 检查：if (optional.isEmpty()) { handleEmpty(); }",
            "ifPresentOrElse：opt.ifPresentOrElse(System.out::println, () -> System.out.println(\"Empty\"));",
            "or 备选：opt.or(() -> Optional.of(defaultValue)).get();"
        ],
        selfCheck: [
            "Files.readString 和 Files.writeString 的默认字符编码是什么？",
            "writeString 默认会覆盖还是追加？如何追加内容？",
            "Optional.or() 和 orElse() 有什么区别？分别返回什么类型？",
            "ifPresentOrElse() 解决了什么问题？与 ifPresent() 有什么不同？",
            "大文件为什么不应该用 readString()？应该用什么替代？"
        ],
        extensions: [
            "研究 Files.mismatch() 方法（Java 12）：比较两个文件内容。",
            "了解 Optional.stream() 方法：将 Optional 转为 Stream 用于 flatMap。",
            "探索 Files.lines() 的懒加载特性和资源管理。",
            "学习 Path.of() 与 Paths.get() 的区别（Java 11）。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/Files.html",
            "https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Optional.html"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w6-1": [
        {
            id: "jf-w6-1-q1",
            question: "var 在 Java 中是什么？",
            options: [
                "一个关键字",
                "一个保留类型名（reserved type name）",
                "一个注解",
                "一个运算符"
            ],
            answer: 1,
            rationale: "Oracle 文档：var is a reserved type name, not a keyword——var 是保留类型名，这意味着可以继续使用 var 作为变量名。"
        },
        {
            id: "jf-w6-1-q2",
            question: "var 可以用在以下哪个位置？",
            options: [
                "类的实例字段",
                "方法参数",
                "局部变量声明",
                "方法返回类型"
            ],
            answer: 2,
            rationale: "Oracle 文档：var can only be used for local variable declarations with initializers——var 只能用于有初始化的局部变量声明。"
        },
        {
            id: "jf-w6-1-q3",
            question: "var list = new ArrayList<>() 推断出的类型是什么？",
            options: [
                "ArrayList<String>",
                "List<Object>",
                "ArrayList<Object>",
                "编译错误"
            ],
            answer: 2,
            rationale: "没有类型上下文时，钻石操作符推断为 Object。应该写 var list = new ArrayList<String>() 明确类型。"
        },
        {
            id: "jf-w6-1-q4",
            question: "以下哪个 var 声明是合法的？",
            options: [
                "var x;",
                "var x = null;",
                "var x = 10;",
                "var x = {1, 2, 3};"
            ],
            answer: 2,
            rationale: "Oracle 文档：variables must have non-null initializers——var 必须有初始化表达式，且不能是 null 或数组初始化器。"
        },
        {
            id: "jf-w6-1-q5",
            question: "Java 11 允许在 Lambda 中使用 var 的主要目的是什么？",
            options: [
                "提高性能",
                "允许为参数添加注解如 @Nullable",
                "简化语法",
                "支持动态类型"
            ],
            answer: 1,
            rationale: "官方风格指南：使用 var 可以为 Lambda 参数添加注解，如 (@Nullable var x) -> x.length()。"
        },
        {
            id: "jf-w6-1-q6",
            question: "以下 Lambda 表达式哪个是合法的？",
            options: [
                "(var x, int y) -> x + y",
                "(var x, y) -> x + y",
                "(var x, var y) -> x + y",
                "(var x) -> { return x; } 且不声明类型"
            ],
            answer: 2,
            rationale: "Oracle 文档：Cannot mix inferred and var-declared parameters——Lambda 参数要么都用 var，要么都不用，不能混用。"
        },
        {
            id: "jf-w6-1-q7",
            question: "var 可以用在增强 for 循环中吗？",
            options: [
                "不可以",
                "可以，for (var item : collection)",
                "只能用于数组",
                "只能用于 List"
            ],
            answer: 1,
            rationale: "Oracle 文档：var can be used for enhanced for-loop indexes——可以写 for (var element : myList) { ... }。"
        },
        {
            id: "jf-w6-1-q8",
            question: "官方风格指南建议什么时候使用 var？",
            options: [
                "所有局部变量都应该用 var",
                "只有构造函数返回类型明确时用 var",
                "当能减少冗余且不影响可读性时使用",
                "永远不要使用 var"
            ],
            answer: 2,
            rationale: "风格指南：Use judiciously - improves readability by eliminating redundancy, but can reduce clarity by omitting useful type information。"
        },
        {
            id: "jf-w6-1-q9",
            question: "var 声明的变量是什么类型系统？",
            options: [
                "动态类型",
                "静态类型，编译时确定",
                "运行时推断",
                "弱类型"
            ],
            answer: 1,
            rationale: "var 是静态类型推断，编译时类型已确定。var x = \"hello\"; x = 10; 会编译错误，因为 x 已推断为 String。"
        },
        {
            id: "jf-w6-1-q10",
            question: "try-with-resources 中可以使用 var 吗？",
            options: [
                "不可以",
                "可以",
                "只能用于 FileInputStream",
                "需要特殊语法"
            ],
            answer: 1,
            rationale: "Oracle 文档：var can be used for try-with-resources variables——try (var input = new FileInputStream(\"file\")) { ... }。"
        },
        {
            id: "jf-w6-1-q11",
            question: "var 变量的作用域应该如何？",
            options: [
                "越大越好",
                "应该最小化以提高 var 的有效性",
                "必须是方法级别",
                "必须是类级别"
            ],
            answer: 1,
            rationale: "风格指南：Minimize variable scope—a key practice that magnifies var's effectiveness and safety。"
        },
        {
            id: "jf-w6-1-q12",
            question: "使用 var 时，变量命名应该？",
            options: [
                "使用单字母变量名",
                "改进命名以补偿缺失的类型信息",
                "必须包含类型前缀",
                "使用下划线开头"
            ],
            answer: 1,
            rationale: "风格指南：Improve variable naming alongside var adoption——如用 customers 代替 List<Customer> x。"
        }
    ],
    "jf-w6-2": [
        {
            id: "jf-w6-2-q1",
            question: "\"   \".isBlank() 和 \"   \".isEmpty() 分别返回什么？",
            options: [
                "true, true",
                "true, false",
                "false, true",
                "false, false"
            ],
            answer: 1,
            rationale: "Oracle 文档：isBlank() returns true if empty or contains only whitespace——空白字符串 isBlank() 为 true，isEmpty() 为 false。"
        },
        {
            id: "jf-w6-2-q2",
            question: "strip() 和 trim() 的主要区别是什么？",
            options: [
                "没有区别",
                "strip() 只处理 ASCII 空格",
                "strip() 处理所有 Unicode 空白字符",
                "trim() 更快"
            ],
            answer: 2,
            rationale: "Oracle 文档：strip() removes Unicode whitespace, trim() only removes characters ≤ U+0020——strip 支持更多 Unicode 空白。"
        },
        {
            id: "jf-w6-2-q3",
            question: "lines() 方法返回什么类型？",
            options: [
                "String[]",
                "List<String>",
                "Stream<String>",
                "Iterable<String>"
            ],
            answer: 2,
            rationale: "Oracle 文档：Returns a stream of lines extracted from this string——lines() 返回 Stream<String>，支持 Stream API 操作。"
        },
        {
            id: "jf-w6-2-q4",
            question: "\"ab\".repeat(3) 的结果是什么？",
            options: [
                "\"ab3\"",
                "\"ababab\"",
                "\"ab ab ab\"",
                "编译错误"
            ],
            answer: 1,
            rationale: "Oracle 文档：repeat(int count) returns concatenation of this string repeated count times——\"ab\".repeat(3) 返回 \"ababab\"。"
        },
        {
            id: "jf-w6-2-q5",
            question: "\"  hello  \".stripLeading() 返回什么？",
            options: [
                "\"hello\"",
                "\"hello  \"",
                "\"  hello\"",
                "\"  hello  \""
            ],
            answer: 1,
            rationale: "Oracle 文档：stripLeading() removes all leading white space——只去除前导空白，保留尾部空白。"
        },
        {
            id: "jf-w6-2-q6",
            question: "\"abc\".repeat(0) 返回什么？",
            options: [
                "\"abc\"",
                "\"\"",
                "null",
                "抛出异常"
            ],
            answer: 1,
            rationale: "repeat(0) 返回空字符串 \"\"，不会抛出异常。repeat 负数才会抛出 IllegalArgumentException。"
        },
        {
            id: "jf-w6-2-q7",
            question: "lines() 方法如何处理换行符？",
            options: [
                "只识别 \\n",
                "只识别 \\r\\n",
                "识别 \\n、\\r、\\r\\n",
                "不处理换行符"
            ],
            answer: 2,
            rationale: "Oracle 文档：lines() handles \\n, \\r, and \\r\\n line terminators——自动识别三种换行符格式。"
        },
        {
            id: "jf-w6-2-q8",
            question: "\"\".isBlank() 返回什么？",
            options: [
                "true",
                "false",
                "null",
                "抛出异常"
            ],
            answer: 0,
            rationale: "Oracle 文档：isBlank() returns true if the string is empty or contains only white space——空字符串也是 blank。"
        },
        {
            id: "jf-w6-2-q9",
            question: "如何过滤文本中的空行？",
            options: [
                "text.lines().filter(line -> line.length() > 0)",
                "text.lines().filter(line -> !line.isBlank())",
                "text.split(\"\\n\")",
                "text.lines().map(String::trim)"
            ],
            answer: 1,
            rationale: "使用 isBlank() 可以过滤空行和纯空白行：text.lines().filter(line -> !line.isBlank())。"
        },
        {
            id: "jf-w6-2-q10",
            question: "\"abc\".repeat(-1) 会发生什么？",
            options: [
                "返回空字符串",
                "返回 null",
                "抛出 IllegalArgumentException",
                "返回 \"abc\""
            ],
            answer: 2,
            rationale: "repeat 方法对负数参数抛出 IllegalArgumentException，count 必须 >= 0。"
        },
        {
            id: "jf-w6-2-q11",
            question: "strip() 与 trim() 对于普通 ASCII 空格，结果是否相同？",
            options: [
                "不相同",
                "相同",
                "取决于 JVM 版本",
                "取决于操作系统"
            ],
            answer: 1,
            rationale: "对于普通 ASCII 空格（U+0020），strip() 和 trim() 结果相同。区别在于 Unicode 空白字符。"
        },
        {
            id: "jf-w6-2-q12",
            question: "以下哪个方法是 Java 11 新增的？",
            options: [
                "trim()",
                "split()",
                "isBlank()",
                "substring()"
            ],
            answer: 2,
            rationale: "isBlank()、lines()、strip()、stripLeading()、stripTrailing()、repeat() 都是 Java 11 新增的 String 方法。"
        }
    ],
    "jf-w6-3": [
        {
            id: "jf-w6-3-q1",
            question: "Files.readString(path) 的默认字符编码是什么？",
            options: [
                "系统默认编码",
                "ISO-8859-1",
                "UTF-8",
                "UTF-16"
            ],
            answer: 2,
            rationale: "Oracle 文档：Default charset is UTF-8 when no charset is specified——Files.readString 默认使用 UTF-8。"
        },
        {
            id: "jf-w6-3-q2",
            question: "Files.writeString 的默认行为是什么？",
            options: [
                "追加到文件末尾",
                "创建文件，如果存在则覆盖",
                "如果文件存在则失败",
                "创建备份后覆盖"
            ],
            answer: 1,
            rationale: "Oracle 文档：Default behavior is CREATE, TRUNCATE_EXISTING, WRITE——创建或覆盖文件。"
        },
        {
            id: "jf-w6-3-q3",
            question: "Optional.isEmpty() 在哪个 Java 版本引入？",
            options: [
                "Java 8",
                "Java 9",
                "Java 10",
                "Java 11"
            ],
            answer: 3,
            rationale: "Oracle 文档：isEmpty() was added in Java 11——作为 isPresent() 的补充方法。"
        },
        {
            id: "jf-w6-3-q4",
            question: "Optional.or() 和 orElse() 的返回类型有什么区别？",
            options: [
                "都返回 Optional",
                "都返回展开的值",
                "or() 返回 Optional，orElse() 返回展开的值",
                "or() 返回展开的值，orElse() 返回 Optional"
            ],
            answer: 2,
            rationale: "Oracle 文档：or() returns Optional produced by supplier, orElse() returns the value——or() 用于链式 Optional 操作。"
        },
        {
            id: "jf-w6-3-q5",
            question: "ifPresentOrElse(Consumer, Runnable) 的返回类型是什么？",
            options: [
                "Optional<T>",
                "T",
                "void",
                "boolean"
            ],
            answer: 2,
            rationale: "Oracle 文档：ifPresentOrElse returns void——它是终端操作，用于执行副作用，不能用于链式调用。"
        },
        {
            id: "jf-w6-3-q6",
            question: "如何使用 writeString 追加内容到文件？",
            options: [
                "Files.writeString(path, content, APPEND)",
                "Files.writeString(path, content, StandardOpenOption.APPEND)",
                "Files.appendString(path, content)",
                "Files.writeString(path, content, true)"
            ],
            answer: 1,
            rationale: "需要显式指定 StandardOpenOption.APPEND：Files.writeString(path, text, StandardOpenOption.APPEND)。"
        },
        {
            id: "jf-w6-3-q7",
            question: "大文件为什么不应该用 Files.readString()？",
            options: [
                "不支持大文件",
                "将整个文件加载到内存，可能导致 OOM",
                "读取速度慢",
                "不支持 UTF-8"
            ],
            answer: 1,
            rationale: "readString 将整个文件内容加载到内存中，大文件应使用 Files.lines() 或 BufferedReader 流式读取。"
        },
        {
            id: "jf-w6-3-q8",
            question: "Optional.or() 在哪个 Java 版本引入？",
            options: [
                "Java 8",
                "Java 9",
                "Java 10",
                "Java 11"
            ],
            answer: 1,
            rationale: "Oracle 文档：or() was added in Java 9——与 ifPresentOrElse() 和 stream() 同一版本引入。"
        },
        {
            id: "jf-w6-3-q9",
            question: "以下代码的作用是什么？opt.or(() -> Optional.of(default))",
            options: [
                "如果 opt 为空，返回 default 值",
                "如果 opt 为空，返回包含 default 的 Optional",
                "总是返回 default",
                "编译错误"
            ],
            answer: 1,
            rationale: "or() 返回 Optional：如果当前 Optional 为空，返回 Supplier 提供的备选 Optional。"
        },
        {
            id: "jf-w6-3-q10",
            question: "Files.writeString 返回什么？",
            options: [
                "void",
                "boolean",
                "写入的 Path",
                "写入的字节数"
            ],
            answer: 2,
            rationale: "Oracle 文档：writeString returns the path to the file——返回写入的文件路径，便于链式调用。"
        },
        {
            id: "jf-w6-3-q11",
            question: "Optional.stream() 的作用是什么？",
            options: [
                "将 Optional 转换为 List",
                "返回空流或单元素流，便于 flatMap",
                "检查 Optional 是否为流类型",
                "并行处理 Optional"
            ],
            answer: 1,
            rationale: "Oracle 文档：stream() returns a sequential Stream containing only the value if present, or empty Stream——用于 flatMap 过滤空值。"
        },
        {
            id: "jf-w6-3-q12",
            question: "ifPresentOrElse 解决了什么问题？",
            options: [
                "返回默认值",
                "替代 if (opt.isPresent()) { ... } else { ... } 模式",
                "链式调用",
                "类型转换"
            ],
            answer: 1,
            rationale: "ifPresentOrElse 提供了更函数式的方式处理 Optional 的两种情况，替代传统的 if-else 分支。"
        }
    ]
}
