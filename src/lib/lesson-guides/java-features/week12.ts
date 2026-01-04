import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week12Guides: Record<string, LessonGuide> = {
    "jf-w12-1": {
        lessonId: "jf-w12-1",
        background: [
            "【类型模式】JEP 441：Type patterns allow testing values against specific types within switch cases——Switch 中可以直接匹配类型并绑定变量。",
            "【表达式形式】Switch 可以作为表达式返回值，结合类型模式实现类型安全的多态处理。",
            "【替代 instanceof 链】JEP 441：Rather than chaining instanceof checks——类型模式替代繁琐的 instanceof 链。",
            "【Java 21 正式】Pattern Matching for Switch 在 Java 21 成为正式特性（JEP 441）。",
            "【统一语法】类型模式与 instanceof 模式匹配语法一致：case Type variable ->。"
        ],
        keyDifficulties: [
            "【匹配顺序】JEP 441：Dominance rules——具体类型必须在父类型之前，编译器会检测不可达的 case。",
            "【模式变量作用域】模式变量只在对应 case 的右侧（箭头或冒号后）有效。",
            "【穷尽性要求】JEP 441：Pattern switches must cover all possible input values——Switch 表达式必须穷尽所有可能。",
            "【与 Sealed 配合】对 sealed 类型的 switch，编译器可以验证穷尽性，无需 default。"
        ],
        handsOnPath: [
            "类型模式：switch (obj) { case Integer i -> i * 2; case String s -> s.length(); default -> 0; }",
            "多类型处理：switch (shape) { case Circle c -> c.radius(); case Rectangle r -> r.width(); }",
            "箭头语法：case Integer i -> { System.out.println(i); yield i; }",
            "冒号语法：case Integer i: return i * 2;",
            "穷尽检查：switch (sealedType) { case SubA a -> 1; case SubB b -> 2; } // 无需 default",
            "顺序注意：case Number n 必须在 case Integer i 之后，否则 Integer 不可达"
        ],
        selfCheck: [
            "类型模式 case Integer i -> 的作用是什么？",
            "为什么具体类型必须在父类型之前声明？",
            "Switch 表达式与 Switch 语句的穷尽性要求有何不同？",
            "如何处理 sealed 类型的穷尽性？",
            "模式变量的作用域是什么？"
        ],
        extensions: [
            "研究 Switch 类型模式的字节码实现。",
            "了解类型模式与泛型的交互。",
            "探索 JEP 441 的设计原则。",
            "学习类型模式在访问者模式重构中的应用。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/441",
            "https://dev.java/learn/pattern-matching-for-switch/"
        ]
    },
    "jf-w12-2": {
        lessonId: "jf-w12-2",
        background: [
            "【when 守卫】JEP 441：A guarded case label allows the boolean expression to filter matches——when 子句在类型匹配后添加额外条件。",
            "【null 处理】JEP 441：case null support, moving away from automatic NullPointerException——显式处理 null，避免 NPE。",
            "【条件细化】when 子句允许对匹配的值进行进一步筛选，如长度检查、范围判断等。",
            "【合并处理】case null, default -> 可以同时处理 null 和未匹配的情况。",
            "【求值顺序】when 条件在类型匹配成功后才求值，保证变量已绑定。"
        ],
        keyDifficulties: [
            "【when 语法】case Type variable when condition -> ——when 后接布尔表达式。",
            "【顺序敏感】带 when 的 case 必须在不带 when 的同类型 case 之前。",
            "【null 单独处理】case null 单独一个 case，或 case null, default 合并。",
            "【条件复杂度】when 条件不宜过于复杂，保持可读性。"
        ],
        handsOnPath: [
            "守卫条件：case String s when s.length() > 5 -> \"long string\";",
            "范围检查：case Integer i when i > 0 && i < 100 -> \"valid\";",
            "null 处理：case null -> \"null value\";",
            "合并处理：case null, default -> \"unknown\";",
            "多条件：case String s when s.startsWith(\"A\") && s.length() > 3 -> process(s);",
            "顺序正确：case String s when s.isEmpty() -> \"empty\"; case String s -> \"non-empty\";"
        ],
        selfCheck: [
            "when 子句在什么时候求值？",
            "case null 的作用是什么？没有 case null 时传入 null 会怎样？",
            "带 when 的 case 和不带 when 的 case 顺序有要求吗？",
            "如何同时处理 null 和 default 情况？",
            "when 条件可以使用模式变量吗？"
        ],
        extensions: [
            "研究 when 守卫与 if-else 的性能对比。",
            "了解其他语言（Scala、Kotlin）的守卫语法。",
            "探索 when 条件在业务规则引擎中的应用。",
            "学习如何用 when 实现复杂的匹配逻辑。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/441",
            "https://dev.java/learn/pattern-matching-for-switch/"
        ]
    },
    "jf-w12-3": {
        lessonId: "jf-w12-3",
        background: [
            "【Record 解构】JEP 440：A record pattern disaggregates an instance of a record into its components——Record 模式将记录分解为组件。",
            "【嵌套模式】JEP 440：Nested patterns elide the accidental complexity of navigating objects——嵌套模式简化对象导航。",
            "【var 推断】JEP 440：Point(var a, var b) is shorthand for Point(int a, int b)——var 自动推断组件类型。",
            "【Java 21 正式】Record Patterns 在 Java 21 成为正式特性（JEP 440）。",
            "【与 Sealed 配合】JEP 440：Exhaustiveness with sealed hierarchies——sealed 类型 + Record 模式实现穷尽匹配。"
        ],
        keyDifficulties: [
            "【解构语法】case Point(int x, int y) -> ——括号内是组件模式，按声明顺序匹配。",
            "【嵌套解构】case Line(Point(int x1, int y1), Point p2) -> ——可以嵌套多层。",
            "【部分解构】case Point(int x, var y) -> ——可以混用具体类型和 var。",
            "【null 安全】Record 模式不匹配 null，需要单独的 case null。"
        ],
        handsOnPath: [
            "基本解构：case Point(int x, int y) -> x + y;",
            "var 推断：case Point(var x, var y) -> x * y;",
            "嵌套解构：case Line(Point(int x1, int y1), Point(int x2, int y2)) -> distance(x1, y1, x2, y2);",
            "部分匹配：case Pair(String first, _) -> first; // Java 22+ 未命名模式",
            "sealed 穷尽：switch (expr) { case Add(var l, var r) -> eval(l) + eval(r); case Const(int v) -> v; }",
            "泛型 Record：case Box<String>(var s) -> s.length();"
        ],
        selfCheck: [
            "Record 模式如何解构 Record 组件？",
            "嵌套模式的作用是什么？如何使用？",
            "var 在 Record 模式中如何推断类型？",
            "Record 模式与 sealed classes 如何配合？",
            "如何处理 Record 模式中的 null？"
        ],
        extensions: [
            "研究 Record 模式的字节码实现。",
            "了解 Java 22+ 的未命名模式（_）。",
            "探索 Record 模式在 AST 处理中的应用。",
            "学习 Record 模式与泛型的交互。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/440",
            "https://dev.java/learn/record-patterns/"
        ]
    }
}

export const week12Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w12-1": [
        {
            id: "jf-w12-1-q1",
            question: "Pattern Matching for Switch 在哪个 Java 版本成为正式特性？",
            options: [
                "Java 17（预览）",
                "Java 19（预览）",
                "Java 21（正式）",
                "Java 22"
            ],
            answer: 2,
            rationale: "JEP 441 在 Java 21 成为正式特性，之前在 Java 17-20 为预览版本。"
        },
        {
            id: "jf-w12-1-q2",
            question: "case Integer i -> 的作用是什么？",
            options: [
                "只检查类型",
                "只绑定变量",
                "匹配 Integer 类型并将值绑定到变量 i",
                "创建新的 Integer"
            ],
            answer: 2,
            rationale: "JEP 441：类型模式同时检查类型并将匹配的值绑定到变量，供箭头右侧使用。"
        },
        {
            id: "jf-w12-1-q3",
            question: "以下哪个 case 顺序是正确的？",
            options: [
                "case Number n -> ... case Integer i -> ...",
                "case Integer i -> ... case Number n -> ...",
                "顺序无所谓",
                "只能有一个类型模式"
            ],
            answer: 1,
            rationale: "JEP 441：Dominance rules——具体类型 Integer 必须在父类型 Number 之前，否则 Integer 不可达。"
        },
        {
            id: "jf-w12-1-q4",
            question: "Switch 表达式的穷尽性要求是什么？",
            options: [
                "不需要穷尽",
                "必须覆盖所有可能的输入值",
                "只需要 default",
                "取决于类型"
            ],
            answer: 1,
            rationale: "JEP 441：Pattern switches must cover all possible input values——表达式必须穷尽。"
        },
        {
            id: "jf-w12-1-q5",
            question: "对 sealed 类型的 switch 需要 default 吗？",
            options: [
                "必须需要",
                "覆盖所有 permits 子类后不需要",
                "取决于 JVM",
                "只有接口需要"
            ],
            answer: 1,
            rationale: "JEP 441：编译器验证 sealed 类型的穷尽性，覆盖所有 permits 子类后无需 default。"
        },
        {
            id: "jf-w12-1-q6",
            question: "模式变量 i 在 case Integer i -> 中的作用域是什么？",
            options: [
                "整个 switch 块",
                "只在该 case 的箭头右侧",
                "整个方法",
                "所有 case"
            ],
            answer: 1,
            rationale: "模式变量只在对应 case 的处理代码中有效，不能在其他 case 中使用。"
        },
        {
            id: "jf-w12-1-q7",
            question: "类型模式替代了什么传统写法？",
            options: [
                "for 循环",
                "instanceof 链 + 强制转换",
                "try-catch",
                "泛型"
            ],
            answer: 1,
            rationale: "JEP 441：Rather than chaining instanceof checks——类型模式简化 instanceof 链。"
        },
        {
            id: "jf-w12-1-q8",
            question: "以下哪个是正确的类型模式语法？",
            options: [
                "case i Integer ->",
                "case Integer i ->",
                "case Integer(i) ->",
                "case Integer as i ->"
            ],
            answer: 1,
            rationale: "类型模式语法：case Type variable ->，类型在前，变量名在后。"
        },
        {
            id: "jf-w12-1-q9",
            question: "如果 case 顺序违反支配规则会怎样？",
            options: [
                "运行时异常",
                "编译时错误（不可达 case）",
                "警告但可编译",
                "自动调整顺序"
            ],
            answer: 1,
            rationale: "JEP 441：编译器强制执行支配规则，违反会导致编译错误。"
        },
        {
            id: "jf-w12-1-q10",
            question: "类型模式与 instanceof 模式匹配的关系是什么？",
            options: [
                "完全不同",
                "语法一致，都是 Type variable 形式",
                "只有 switch 支持",
                "需要不同的关键字"
            ],
            answer: 1,
            rationale: "类型模式语法与 instanceof 模式匹配一致：obj instanceof String s 与 case String s。"
        },
        {
            id: "jf-w12-1-q11",
            question: "switch (obj) { case String s -> ... } 中 obj 可以是 null 吗？",
            options: [
                "可以，自动匹配 String",
                "会抛出 NullPointerException",
                "需要 case null 显式处理",
                "取决于 String 的值"
            ],
            answer: 2,
            rationale: "没有 case null 时，null 输入会抛出 NPE。需要显式的 case null 处理。"
        },
        {
            id: "jf-w12-1-q12",
            question: "以下哪个不是类型模式的优势？",
            options: [
                "减少 instanceof 检查",
                "消除强制转换",
                "自动垃圾回收",
                "类型安全的多态处理"
            ],
            answer: 2,
            rationale: "类型模式减少 instanceof、消除转换、实现类型安全处理，与垃圾回收无关。"
        }
    ],
    "jf-w12-2": [
        {
            id: "jf-w12-2-q1",
            question: "when 子句的作用是什么？",
            options: [
                "替代 default",
                "在类型匹配后添加额外的布尔条件",
                "处理 null",
                "跳过匹配"
            ],
            answer: 1,
            rationale: "JEP 441：A guarded case label allows the boolean expression to filter matches。"
        },
        {
            id: "jf-w12-2-q2",
            question: "when 条件在什么时候求值？",
            options: [
                "在类型匹配之前",
                "在类型匹配成功之后",
                "编译时",
                "与类型匹配同时"
            ],
            answer: 1,
            rationale: "when 条件在类型匹配成功后才求值，此时模式变量已绑定，可以在条件中使用。"
        },
        {
            id: "jf-w12-2-q3",
            question: "以下哪个是正确的守卫语法？",
            options: [
                "case String s && s.length() > 5 ->",
                "case String s when s.length() > 5 ->",
                "case String s if s.length() > 5 ->",
                "case String s where s.length() > 5 ->"
            ],
            answer: 1,
            rationale: "Java 使用 when 关键字添加守卫条件：case Type variable when condition ->。"
        },
        {
            id: "jf-w12-2-q4",
            question: "case null 的作用是什么？",
            options: [
                "匹配空字符串",
                "显式处理 null 值，避免 NPE",
                "创建 null 对象",
                "终止 switch"
            ],
            answer: 1,
            rationale: "JEP 441：case null support, moving away from automatic NullPointerException。"
        },
        {
            id: "jf-w12-2-q5",
            question: "case null, default -> 的含义是什么？",
            options: [
                "语法错误",
                "同时处理 null 和未匹配的情况",
                "只处理 null",
                "只处理 default"
            ],
            answer: 1,
            rationale: "case null, default -> 合并处理 null 和其他未匹配的情况。"
        },
        {
            id: "jf-w12-2-q6",
            question: "带 when 的 case 和不带 when 的同类型 case 顺序如何？",
            options: [
                "顺序无所谓",
                "带 when 的必须在前",
                "带 when 的必须在后",
                "不能同时存在"
            ],
            answer: 1,
            rationale: "带 when 的 case 必须在不带 when 的同类型 case 之前，否则会被覆盖。"
        },
        {
            id: "jf-w12-2-q7",
            question: "没有 case null 时传入 null 会怎样？",
            options: [
                "匹配 default",
                "抛出 NullPointerException",
                "返回 null",
                "匹配第一个 case"
            ],
            answer: 1,
            rationale: "JEP 441：Without a null case, the switch preserves traditional null-throwing behavior。"
        },
        {
            id: "jf-w12-2-q8",
            question: "when 条件可以使用模式变量吗？",
            options: [
                "不可以",
                "可以，模式变量在 when 中可用",
                "只能用常量",
                "只能用字段"
            ],
            answer: 1,
            rationale: "when 条件在类型匹配后求值，此时模式变量已绑定，可以在条件中使用。"
        },
        {
            id: "jf-w12-2-q9",
            question: "case String s when s.isEmpty() -> 匹配什么？",
            options: [
                "所有字符串",
                "空字符串",
                "非空字符串",
                "null"
            ],
            answer: 1,
            rationale: "先匹配 String 类型，再检查 s.isEmpty() 条件，只有空字符串满足。"
        },
        {
            id: "jf-w12-2-q10",
            question: "以下哪个不是 when 守卫的合法使用？",
            options: [
                "case Integer i when i > 0 ->",
                "case String s when s.length() > 5 ->",
                "case null when true ->",
                "case Point p when p.x() > 0 ->"
            ],
            answer: 2,
            rationale: "case null 不能带 when 条件，因为 null 没有可访问的属性或方法。"
        },
        {
            id: "jf-w12-2-q11",
            question: "如何处理「空字符串或 null」的情况？",
            options: [
                "case null, String s when s.isEmpty() ->",
                "分别写 case null 和 case String s when s.isEmpty()",
                "case String s when s == null || s.isEmpty() ->",
                "无法实现"
            ],
            answer: 1,
            rationale: "null 和空字符串需要分别处理：case null 和 case String s when s.isEmpty()。"
        },
        {
            id: "jf-w12-2-q12",
            question: "when 条件过于复杂时应该怎么做？",
            options: [
                "继续写在 when 中",
                "提取为方法或保持条件简单，提高可读性",
                "使用 if-else 替代",
                "使用 default"
            ],
            answer: 1,
            rationale: "when 条件不宜过于复杂，可以提取为方法调用保持可读性。"
        }
    ],
    "jf-w12-3": [
        {
            id: "jf-w12-3-q1",
            question: "Record Patterns 在哪个 Java 版本成为正式特性？",
            options: [
                "Java 19（预览）",
                "Java 20（预览）",
                "Java 21（正式）",
                "Java 22"
            ],
            answer: 2,
            rationale: "JEP 440 在 Java 21 成为正式特性，之前在 Java 19-20 为预览版本。"
        },
        {
            id: "jf-w12-3-q2",
            question: "case Point(int x, int y) -> 的作用是什么？",
            options: [
                "创建 Point 对象",
                "匹配 Point 并解构其组件到 x 和 y",
                "调用 Point 构造器",
                "比较两个 Point"
            ],
            answer: 1,
            rationale: "JEP 440：A record pattern disaggregates an instance of a record into its components。"
        },
        {
            id: "jf-w12-3-q3",
            question: "嵌套模式的作用是什么？",
            options: [
                "创建嵌套对象",
                "简化对象导航，直接解构嵌套结构",
                "增加复杂度",
                "只用于调试"
            ],
            answer: 1,
            rationale: "JEP 440：Nested patterns elide the accidental complexity of navigating objects。"
        },
        {
            id: "jf-w12-3-q4",
            question: "case Point(var x, var y) -> 中 var 的作用是什么？",
            options: [
                "声明为 Object 类型",
                "让编译器推断组件类型",
                "创建可变变量",
                "忽略组件"
            ],
            answer: 1,
            rationale: "JEP 440：Point(var a, var b) is shorthand for Point(int a, int b)。"
        },
        {
            id: "jf-w12-3-q5",
            question: "Record 模式能匹配 null 吗？",
            options: [
                "能",
                "不能，需要单独的 case null",
                "取决于 Record 类型",
                "只有空 Record 能"
            ],
            answer: 1,
            rationale: "Record 模式不匹配 null，null 需要单独的 case null 处理。"
        },
        {
            id: "jf-w12-3-q6",
            question: "case Line(Point(int x1, int y1), Point p2) -> 是什么模式？",
            options: [
                "简单模式",
                "嵌套解构模式",
                "类型模式",
                "守卫模式"
            ],
            answer: 1,
            rationale: "这是嵌套模式，外层解构 Line，内层解构第一个 Point，第二个保持为整体。"
        },
        {
            id: "jf-w12-3-q7",
            question: "Record 模式中组件的顺序是什么？",
            options: [
                "任意顺序",
                "按 Record 组件声明顺序",
                "按字母顺序",
                "按类型顺序"
            ],
            answer: 1,
            rationale: "Record 模式的组件必须按 Record 声明时的组件顺序匹配。"
        },
        {
            id: "jf-w12-3-q8",
            question: "Sealed + Record 模式如何实现穷尽性？",
            options: [
                "需要 default",
                "编译器检查所有 permits 子类都被覆盖",
                "运行时检查",
                "无法实现"
            ],
            answer: 1,
            rationale: "JEP 440：Exhaustiveness with sealed hierarchies——编译器验证覆盖所有 permits 子类。"
        },
        {
            id: "jf-w12-3-q9",
            question: "以下哪个是正确的泛型 Record 模式？",
            options: [
                "case Box<>(var s) ->",
                "case Box<String>(var s) ->",
                "case Box(String s) ->",
                "case <String>Box(var s) ->"
            ],
            answer: 1,
            rationale: "泛型 Record 模式需要指定类型参数：case Box<String>(var s) ->。"
        },
        {
            id: "jf-w12-3-q10",
            question: "Java 22+ 的未命名模式是什么？",
            options: [
                "使用 null 忽略组件",
                "使用 _ 忽略不关心的组件",
                "使用 void 忽略组件",
                "不存在未命名模式"
            ],
            answer: 1,
            rationale: "Java 22 引入未命名模式 _，可以忽略不需要的组件：case Point(int x, _) ->。"
        },
        {
            id: "jf-w12-3-q11",
            question: "Record 模式相比手动解构的优势是什么？",
            options: [
                "性能更好",
                "减少样板代码，直接提取组件",
                "支持继承",
                "支持可变性"
            ],
            answer: 1,
            rationale: "JEP 440：Rather than extracting data via accessor methods——减少访问器调用，直接解构。"
        },
        {
            id: "jf-w12-3-q12",
            question: "switch (expr) { case Add(var l, var r) -> ... } 中 expr 应该是什么类型？",
            options: [
                "Object",
                "实现了包含 Add 的 sealed interface 的类型",
                "String",
                "任意类型"
            ],
            answer: 1,
            rationale: "expr 应该是 sealed 类型（如 Expr），Add 是其 permits 子类，实现穷尽性检查。"
        }
    ]
}
