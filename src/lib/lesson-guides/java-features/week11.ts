import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "jf-w11-1": {
        lessonId: "jf-w11-1",
        background: [
            "【模式匹配语法】JEP 394：if (obj instanceof String s)——同时检查类型并绑定变量，无需强制转换。",
            "【消除冗余】JEP 394：doing both the type test and cast should be unnecessary——一行代码完成类型检查和转换。",
            "【类型模式】语法 Type variable 构成类型模式，如 String s、Integer i。",
            "【Java 16 正式】JEP 394 在 Java 16 成为正式特性，Java 14/15 预览。",
            "【模式变量】JEP 394：Pattern variables are local variables extracted from target——从匹配目标提取的局部变量。"
        ],
        keyDifficulties: [
            "【&& 可用】JEP 394：obj instanceof String s && s.length() > 5——模式变量在 && 右侧可用。",
            "【|| 不可用】|| 表达式中模式变量不可用，因为模式可能未匹配。",
            "【非 final】JEP 394：Pattern variables are not implicitly final——模式变量可以重新赋值。",
            "【遮蔽规则】模式变量可以遮蔽字段声明，在其作用域内。"
        ],
        handsOnPath: [
            "基本用法：if (obj instanceof String s) { System.out.println(s.length()); }",
            "组合条件：if (obj instanceof String s && s.length() > 5) { process(s); }",
            "否定形式：if (!(obj instanceof String s)) { return; } // s 在后续代码中可用",
            "switch 结合：switch (obj) { case String s -> s.length(); case Integer i -> i; default -> 0; }",
            "equals 重构：return (o instanceof Point p) && x == p.x && y == p.y;",
            "类型转换消除：String s = (String) obj; 变为 if (obj instanceof String s) { use(s); }"
        ],
        selfCheck: [
            "instanceof 模式匹配相比传统写法有什么优势？",
            "为什么模式变量可以在 && 右侧使用，但不能在 || 右侧使用？",
            "模式变量是 final 的吗？可以重新赋值吗？",
            "如何用否定形式让模式变量在后续代码中可用？",
            "Pattern Matching for instanceof 在哪个版本正式发布？"
        ],
        extensions: [
            "研究 instanceof 模式匹配的字节码实现。",
            "了解 Record Patterns 对 instanceof 的扩展。",
            "探索模式匹配在空安全检查中的应用。",
            "学习 Kotlin 的智能类型转换与 Java 的对比。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/394",
            "https://dev.java/learn/pattern-matching-for-instanceof/"
        ]
    },
    "jf-w11-2": {
        lessonId: "jf-w11-2",
        background: [
            "【流敏感作用域】JEP 394：Uses flow scoping——编译器分析控制流确定变量可用性。",
            "【条件分支】模式变量只在模式匹配成功的流程中有效。",
            "【否定逻辑】if (!(obj instanceof String s)) return; 之后 s 可用，因为只有匹配成功才继续。",
            "【异常处理】如果条件分支总是抛出异常，模式变量在后续代码中可用。",
            "【编译器分析】编译器进行数据流分析，确定模式变量在哪些位置绝对有效。"
        ],
        keyDifficulties: [
            "【if-else 作用域】模式变量只在 true 分支有效：if (obj instanceof String s) { /*s 可用*/ } else { /*s 不可用*/ }",
            "【提前返回模式】if (!(obj instanceof String s)) { return null; } // 之后 s 可用",
            "【复杂条件】编译器分析复杂条件表达式，如 && 链中的模式变量传播。",
            "【重新声明】不能在同一作用域重新声明同名模式变量。"
        ],
        handsOnPath: [
            "标准模式：if (obj instanceof String s) { use(s); }",
            "提前返回：if (!(obj instanceof String s)) return; use(s);",
            "异常分支：if (!(obj instanceof String s)) throw new IllegalArgumentException(); process(s);",
            "嵌套条件：if (obj instanceof Container c && c.value() instanceof String s) { ... }",
            "switch 作用域：case String s -> { s.length(); } // s 只在箭头右侧有效",
            "避免遮蔽：确保模式变量名不与重要字段冲突。"
        ],
        selfCheck: [
            "什么是流敏感作用域（flow scoping）？",
            "为什么 if (!(obj instanceof String s)) return; 之后 s 可用？",
            "模式变量在 else 分支中可用吗？",
            "如何使用提前返回模式简化代码？",
            "模式变量可以遮蔽字段吗？"
        ],
        extensions: [
            "研究编译器的数据流分析算法。",
            "了解其他语言（Kotlin、Swift）的类似特性。",
            "探索 IDE 对模式变量作用域的支持。",
            "学习如何避免模式变量命名冲突。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/394",
            "https://dev.java/learn/pattern-matching-for-instanceof/"
        ]
    },
    "jf-w11-3": {
        lessonId: "jf-w11-3",
        background: [
            "【equals 重构】JEP 394 示例：简化 equals 方法的类型检查和转换。",
            "【访问者模式】模式匹配可以简化复杂的访问者模式实现。",
            "【Sealed 配合】与 sealed classes 结合实现类型安全的穷尽处理。",
            "【渐进迁移】可以逐步将现有代码库迁移到模式匹配风格。",
            "【代码简化】典型场景：类型检查 + 强制转换 + 使用，三步变一步。"
        ],
        keyDifficulties: [
            "【传统 equals】多行代码：检查 null、检查类型、强制转换、字段比较。",
            "【模式匹配 equals】一行：return (o instanceof Point p) && x == p.x && y == p.y;",
            "【访问者简化】避免 accept/visit 的双重派发，直接在 switch 中处理类型。",
            "【保持可读性】复杂条件不要过度使用模式匹配，保持代码清晰。"
        ],
        handsOnPath: [
            "重构前：if (o == null || !(o instanceof Point)) return false; Point p = (Point) o; return x == p.x;",
            "重构后：return (o instanceof Point p) && x == p.x && y == p.y;",
            "访问者重构：switch (node) { case Add a -> visit(a); case Mult m -> visit(m); }",
            "空检查组合：if (obj != null && obj instanceof String s) { ... }",
            "Sealed 穷尽：switch (shape) { case Circle c -> area(c); case Rectangle r -> area(r); }",
            "渐进迁移：先重构关键方法，再逐步扩展到整个代码库。"
        ],
        selfCheck: [
            "如何用模式匹配简化 equals 方法？",
            "模式匹配如何简化访问者模式？",
            "与 sealed classes 结合有什么优势？",
            "什么情况下不应该使用模式匹配？",
            "如何渐进式迁移现有代码？"
        ],
        extensions: [
            "研究大型代码库的模式匹配迁移策略。",
            "了解 Record Patterns 进一步简化解构。",
            "探索模式匹配在领域驱动设计中的应用。",
            "学习函数式编程中模式匹配的高级用法。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/394",
            "https://dev.java/learn/pattern-matching-for-instanceof/"
        ]
    }
}

export const week11Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w11-1": [
        {
            id: "jf-w11-1-q1",
            question: "Pattern Matching for instanceof 在哪个版本正式发布？",
            options: [
                "Java 14（预览）",
                "Java 15（预览）",
                "Java 16（正式）",
                "Java 17"
            ],
            answer: 2,
            rationale: "JEP 394 在 Java 16 成为正式特性，Java 14/15 为预览版本。"
        },
        {
            id: "jf-w11-1-q2",
            question: "if (obj instanceof String s) 的作用是什么？",
            options: [
                "只检查类型",
                "只进行转换",
                "同时检查类型并绑定变量",
                "创建新字符串"
            ],
            answer: 2,
            rationale: "JEP 394：同时检查类型并将匹配的值绑定到变量 s，无需额外强制转换。"
        },
        {
            id: "jf-w11-1-q3",
            question: "模式变量在 && 右侧可用吗？",
            options: [
                "不可用",
                "可用，obj instanceof String s && s.length() > 5",
                "取决于类型",
                "只有 final 变量可用"
            ],
            answer: 1,
            rationale: "JEP 394：模式变量在 && 右侧可用，因为左侧匹配成功才会执行右侧。"
        },
        {
            id: "jf-w11-1-q4",
            question: "模式变量在 || 右侧可用吗？",
            options: [
                "可用",
                "不可用，因为模式可能未匹配",
                "取决于条件",
                "只有 String 可用"
            ],
            answer: 1,
            rationale: "|| 短路求值，左侧 false 时才执行右侧，此时模式未匹配，变量不可用。"
        },
        {
            id: "jf-w11-1-q5",
            question: "模式变量是 final 的吗？",
            options: [
                "是，隐式 final",
                "不是，可以重新赋值",
                "取决于声明",
                "只有 Record 是 final"
            ],
            answer: 1,
            rationale: "JEP 394：Pattern variables are not implicitly final——模式变量可以重新赋值。"
        },
        {
            id: "jf-w11-1-q6",
            question: "模式变量可以遮蔽字段吗？",
            options: [
                "不可以",
                "可以，在其作用域内",
                "只能遮蔽静态字段",
                "会编译错误"
            ],
            answer: 1,
            rationale: "JEP 394：Pattern variables can shadow field declarations within their scope。"
        },
        {
            id: "jf-w11-1-q7",
            question: "传统写法需要几步完成类型检查和使用？",
            options: [
                "一步",
                "两步",
                "三步：检查、转换、使用",
                "四步"
            ],
            answer: 2,
            rationale: "传统写法：if (obj instanceof String) { String s = (String) obj; use(s); }——检查、转换、使用三步。"
        },
        {
            id: "jf-w11-1-q8",
            question: "以下哪个写法正确？",
            options: [
                "if (obj instanceof s String)",
                "if (obj instanceof String s)",
                "if (String s instanceof obj)",
                "if (obj instanceof String)"
            ],
            answer: 1,
            rationale: "语法是 instanceof Type variable：obj instanceof String s。"
        },
        {
            id: "jf-w11-1-q9",
            question: "模式匹配主要解决什么问题？",
            options: [
                "性能优化",
                "消除冗余的类型检查和强制转换",
                "内存管理",
                "并发控制"
            ],
            answer: 1,
            rationale: "JEP 394：doing both the type test and cast should be unnecessary——消除冗余代码。"
        },
        {
            id: "jf-w11-1-q10",
            question: "模式变量 s 的类型是什么？",
            options: [
                "Object",
                "与 instanceof 后的类型相同（如 String）",
                "自动推断",
                "需要显式声明"
            ],
            answer: 1,
            rationale: "模式变量的类型就是模式中声明的类型：instanceof String s 中 s 是 String 类型。"
        },
        {
            id: "jf-w11-1-q11",
            question: "如何在 switch 中使用模式匹配？",
            options: [
                "switch (obj) { case String: }",
                "switch (obj) { case String s -> s.length(); }",
                "switch instanceof obj { }",
                "不支持 switch"
            ],
            answer: 1,
            rationale: "switch 中使用类型模式：case String s -> 匹配并绑定变量。"
        },
        {
            id: "jf-w11-1-q12",
            question: "以下哪个不是模式匹配的优势？",
            options: [
                "减少代码量",
                "提高可读性",
                "自动垃圾回收",
                "消除强制转换"
            ],
            answer: 2,
            rationale: "模式匹配减少代码量、提高可读性、消除强制转换，与垃圾回收无关。"
        }
    ],
    "jf-w11-2": [
        {
            id: "jf-w11-2-q1",
            question: "什么是流敏感作用域（flow scoping）？",
            options: [
                "变量在整个方法中有效",
                "编译器分析控制流确定变量有效位置",
                "变量随时可用",
                "变量在 finally 块中有效"
            ],
            answer: 1,
            rationale: "JEP 394：Uses flow scoping——编译器分析控制流确定模式变量在哪些位置有效。"
        },
        {
            id: "jf-w11-2-q2",
            question: "if (!(obj instanceof String s)) return; 之后 s 可用吗？",
            options: [
                "不可用",
                "可用，因为只有匹配成功才会继续执行",
                "取决于 s 的值",
                "需要重新声明"
            ],
            answer: 1,
            rationale: "否定形式提前返回，后续代码只有在模式匹配成功时才执行，所以 s 可用。"
        },
        {
            id: "jf-w11-2-q3",
            question: "模式变量在 else 分支中可用吗？",
            options: [
                "可用",
                "不可用，模式在 else 分支未匹配",
                "取决于条件",
                "只有 final 可用"
            ],
            answer: 1,
            rationale: "else 分支意味着模式匹配失败，变量未绑定，不可用。"
        },
        {
            id: "jf-w11-2-q4",
            question: "如何使模式变量在后续代码中可用？",
            options: [
                "使用 final",
                "使用否定形式 + 提前返回/抛出异常",
                "使用 static",
                "无法实现"
            ],
            answer: 1,
            rationale: "使用 if (!(obj instanceof String s)) return; 或 throw，后续代码中 s 可用。"
        },
        {
            id: "jf-w11-2-q5",
            question: "嵌套条件中模式变量如何传播？",
            options: [
                "不传播",
                "沿 && 链传播到后续条件",
                "只在第一个条件有效",
                "需要显式传递"
            ],
            answer: 1,
            rationale: "&& 链中，前面的模式变量在后续条件中可用：a instanceof B b && b.x() > 0。"
        },
        {
            id: "jf-w11-2-q6",
            question: "可以在同一作用域重新声明同名模式变量吗？",
            options: [
                "可以",
                "不可以，会编译错误",
                "取决于类型",
                "只有不同类型可以"
            ],
            answer: 1,
            rationale: "同一作用域不能重复声明同名变量，这是 Java 的通用规则。"
        },
        {
            id: "jf-w11-2-q7",
            question: "switch case 中模式变量的作用域是什么？",
            options: [
                "整个 switch 块",
                "只在该 case 的箭头右侧",
                "整个方法",
                "所有 case"
            ],
            answer: 1,
            rationale: "case String s -> 中的 s 只在箭头右侧（该 case 的处理代码）有效。"
        },
        {
            id: "jf-w11-2-q8",
            question: "以下哪种情况模式变量在后续可用？",
            options: [
                "if (obj instanceof String s) { }",
                "if (!(obj instanceof String s)) throw new Exception();",
                "if (obj instanceof String s) { } else { }",
                "obj instanceof String s 单独表达式"
            ],
            answer: 1,
            rationale: "否定 + 抛出异常后，后续代码只有模式匹配成功才会执行，s 可用。"
        },
        {
            id: "jf-w11-2-q9",
            question: "为什么编译器能确定模式变量的有效范围？",
            options: [
                "运行时检查",
                "数据流分析",
                "类型推断",
                "反射"
            ],
            answer: 1,
            rationale: "编译器进行数据流分析，追踪每个执行路径，确定变量在哪些位置绝对有效。"
        },
        {
            id: "jf-w11-2-q10",
            question: "if (obj != null && obj instanceof String s) 中 s 在哪可用？",
            options: [
                "整个方法",
                "if 块内和 && 右侧",
                "只在 if 块内",
                "不可用"
            ],
            answer: 2,
            rationale: "s 在 if 的 true 分支中可用，即 if 块内。"
        },
        {
            id: "jf-w11-2-q11",
            question: "以下哪个是提前返回模式的正确用法？",
            options: [
                "if (obj instanceof String s) return s;",
                "if (!(obj instanceof String s)) return null; use(s);",
                "String s = obj instanceof String;",
                "return obj instanceof String s;"
            ],
            answer: 1,
            rationale: "否定 + 提前返回，让模式变量在后续代码中可用：if (!(...)) return; use(s);。"
        },
        {
            id: "jf-w11-2-q12",
            question: "模式变量遮蔽字段时应该注意什么？",
            options: [
                "会编译错误",
                "使用 this.fieldName 访问被遮蔽的字段",
                "不允许遮蔽",
                "需要 @SuppressWarnings"
            ],
            answer: 1,
            rationale: "模式变量可以遮蔽字段，需要时使用 this.fieldName 显式访问被遮蔽的字段。"
        }
    ],
    "jf-w11-3": [
        {
            id: "jf-w11-3-q1",
            question: "传统 equals 方法需要多少行代码？",
            options: [
                "1-2 行",
                "4-5 行：null 检查、类型检查、转换、比较",
                "10+ 行",
                "取决于字段数"
            ],
            answer: 1,
            rationale: "传统写法：if (o == null) return false; if (!(o instanceof Type)) return false; Type t = (Type)o; return ...。"
        },
        {
            id: "jf-w11-3-q2",
            question: "模式匹配重构后 equals 可以简化为？",
            options: [
                "多行",
                "一行：return (o instanceof Type t) && field == t.field;",
                "需要辅助方法",
                "无法简化"
            ],
            answer: 1,
            rationale: "JEP 394 示例：return (o instanceof Point p) && x == p.x && y == p.y; 一行搞定。"
        },
        {
            id: "jf-w11-3-q3",
            question: "模式匹配如何简化访问者模式？",
            options: [
                "无法简化",
                "避免 accept/visit 双重派发，直接 switch 处理类型",
                "需要更多接口",
                "性能更差"
            ],
            answer: 1,
            rationale: "switch (node) { case Add a -> ...; case Mult m -> ...; } 直接处理，无需双重派发。"
        },
        {
            id: "jf-w11-3-q4",
            question: "与 sealed classes 结合有什么优势？",
            options: [
                "没有优势",
                "编译器穷尽性检查，不遗漏任何子类型",
                "性能优化",
                "减少内存"
            ],
            answer: 1,
            rationale: "Sealed + Pattern Matching 实现穷尽匹配，编译器确保所有子类型都被处理。"
        },
        {
            id: "jf-w11-3-q5",
            question: "什么情况下不应该使用模式匹配？",
            options: [
                "所有情况都应该用",
                "过于复杂的条件，影响可读性时",
                "只有简单类型时",
                "只有 Record 时"
            ],
            answer: 1,
            rationale: "复杂条件过度使用模式匹配会降低可读性，应保持代码清晰。"
        },
        {
            id: "jf-w11-3-q6",
            question: "如何渐进式迁移现有代码？",
            options: [
                "必须一次性迁移",
                "先重构关键方法，再逐步扩展",
                "不建议迁移",
                "使用工具自动迁移"
            ],
            answer: 1,
            rationale: "渐进迁移：先重构 equals、访问者等关键方法，验证后逐步扩展到其他代码。"
        },
        {
            id: "jf-w11-3-q7",
            question: "以下哪个是正确的重构示例？",
            options: [
                "if (o instanceof Point) return ((Point)o).x == x;",
                "return (o instanceof Point p) && x == p.x;",
                "return o instanceof Point && o.x == x;",
                "Point p = (Point)(o instanceof Point);"
            ],
            answer: 1,
            rationale: "正确的模式匹配：(o instanceof Point p) 绑定变量，然后在 && 右侧使用 p.x。"
        },
        {
            id: "jf-w11-3-q8",
            question: "Record Patterns 进一步提供什么能力？",
            options: [
                "创建 Record",
                "解构 Record 组件：case Point(int x, int y) ->",
                "修改 Record",
                "删除 Record"
            ],
            answer: 1,
            rationale: "Record Patterns（Java 21）支持直接解构 Record 组件：case Point(int x, int y) ->。"
        },
        {
            id: "jf-w11-3-q9",
            question: "模式匹配对空检查有什么影响？",
            options: [
                "自动处理 null",
                "null instanceof Type 返回 false，可以合并空检查",
                "会抛出 NPE",
                "需要额外检查"
            ],
            answer: 1,
            rationale: "null instanceof Type 总是返回 false，可以简化空检查：(o instanceof Point p) 隐含非 null。"
        },
        {
            id: "jf-w11-3-q10",
            question: "传统访问者模式的缺点是什么？",
            options: [
                "性能差",
                "需要双重派发，代码分散",
                "不支持多态",
                "不能处理新类型"
            ],
            answer: 1,
            rationale: "传统访问者需要 accept + visit 双重派发，逻辑分散在多个类中。"
        },
        {
            id: "jf-w11-3-q11",
            question: "模式匹配 equals 相比自动生成有什么优势？",
            options: [
                "更长",
                "手写可控制比较逻辑，但 Record 自动生成也很好",
                "必须手写",
                "性能更好"
            ],
            answer: 1,
            rationale: "手写可以自定义比较逻辑，但 Record 自动生成的 equals 通常足够。"
        },
        {
            id: "jf-w11-3-q12",
            question: "在领域驱动设计中模式匹配的作用？",
            options: [
                "没有作用",
                "简化领域对象的类型分发和处理逻辑",
                "只用于持久化",
                "只用于 API"
            ],
            answer: 1,
            rationale: "模式匹配简化领域对象的类型分发，如处理不同类型的领域事件或值对象。"
        }
    ]
}
