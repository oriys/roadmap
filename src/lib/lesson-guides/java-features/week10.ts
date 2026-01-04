import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "jf-w10-1": {
        lessonId: "jf-w10-1",
        background: [
            "【Sealed 定义】JEP 409：A sealed class restricts which classes can extend it——密封类限制哪些类可以继承它。",
            "【permits 子句】sealed class Shape permits Circle, Rectangle {} 声明允许的子类列表。",
            "【设计目的】精确控制类层次结构，实现受限继承，支持穷尽性检查。",
            "【模块/包约束】JEP 409：Permitted subclasses must be in same module (or package if unnamed)——子类必须在同一模块。",
            "【Java 17 正式】Sealed Classes 在 Java 17 成为正式特性（JEP 409）。"
        ],
        keyDifficulties: [
            "【三种子类修饰符】JEP 409：Exactly one of final, sealed, non-sealed must be used——每个子类必须选择一个。",
            "【final】终止继承链，该类不能再被继承。Record 隐式 final，非常适合。",
            "【sealed】继续受控继承，需要自己的 permits 子句。",
            "【non-sealed】开放继承，任何类都可以继承它，打破密封链。"
        ],
        handsOnPath: [
            "声明密封类：public sealed class Shape permits Circle, Rectangle {}",
            "final 子类：public final class Circle extends Shape {}",
            "sealed 子类：public sealed class Rectangle extends Shape permits Square {}",
            "non-sealed 子类：public non-sealed class Triangle extends Shape {}",
            "省略 permits：同一文件内的子类可以省略 permits 子句。",
            "反射检查：shape.getClass().isSealed(); shape.getClass().getPermittedSubclasses();"
        ],
        selfCheck: [
            "sealed、final、non-sealed 三个修饰符的区别是什么？",
            "permits 子句可以省略吗？在什么情况下？",
            "为什么子类必须在同一模块或包中？",
            "non-sealed 的作用是什么？什么时候使用？",
            "Record 可以作为 sealed 类的子类吗？"
        ],
        extensions: [
            "研究 Sealed Classes 在编译器中的穷尽性检查实现。",
            "了解 PermittedSubclasses 字节码属性。",
            "探索 Sealed Classes 与 Visitor 模式的替代。",
            "学习代数数据类型（ADT）在 Java 中的实现。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/409",
            "https://dev.java/learn/sealed-classes/"
        ]
    },
    "jf-w10-2": {
        lessonId: "jf-w10-2",
        background: [
            "【Sealed Interface】接口同样可以使用 sealed 修饰，限制实现类。",
            "【语法相同】sealed interface Expr permits Const, Plus, Times {}。",
            "【实现选择】JEP 409：Implementation must be final, sealed, or non-sealed——实现类同样需要选择修饰符。",
            "【Record 配合】Record 隐式 final，非常适合实现 sealed interface。",
            "【泛型接口】Sealed 修饰符可以与泛型配合使用。"
        ],
        keyDifficulties: [
            "【类 vs 接口】类用 extends，接口用 implements，但 sealed 约束规则相同。",
            "【多重实现】一个类可以实现多个 sealed interface，每个都需要在各自的 permits 中。",
            "【Record 实现】record Const(int value) implements Expr {}——Record 天然适合。",
            "【匿名类限制】不能用匿名类实现 sealed interface，必须是命名类。"
        ],
        handsOnPath: [
            "声明密封接口：sealed interface Expr permits Const, Plus, Neg {}",
            "Record 实现：record Const(int value) implements Expr {}",
            "类实现：final class Plus implements Expr { private Expr left, right; }",
            "泛型接口：sealed interface Result<T> permits Success, Failure {}",
            "嵌套定义：将 permits 子类定义在接口内部作为嵌套类。",
            "组合模式：sealed interface Node permits Leaf, Branch {}"
        ],
        selfCheck: [
            "Sealed interface 和 sealed class 有什么区别？",
            "为什么 Record 特别适合实现 sealed interface？",
            "可以用匿名类实现 sealed interface 吗？为什么？",
            "一个类可以实现多个 sealed interface 吗？",
            "如何使用泛型和 sealed interface？"
        ],
        extensions: [
            "研究函数式编程中的 Sum Types 与 Sealed 的对应。",
            "了解 Scala 的 sealed trait 与 Java sealed interface 的对比。",
            "探索 Result<T, E> 模式使用 sealed interface 实现。",
            "学习 Sealed + Record 实现表达式求值器。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/409",
            "https://dev.java/learn/sealed-classes/"
        ]
    },
    "jf-w10-3": {
        lessonId: "jf-w10-3",
        background: [
            "【穷尽性检查】JEP 409：Compiler verifies all cases are covered——编译器确保所有 permits 子类都被处理。",
            "【无需 default】对 sealed 类型的 switch 覆盖所有子类后不需要 default 分支。",
            "【新增子类检查】如果 permits 新增子类，现有 switch 会编译报错，强制更新。",
            "【instanceof 配合】Pattern Matching for instanceof 与 sealed 配合实现类型安全处理。",
            "【运行时保护】JEP 409：PermittedSubclasses attribute prevents unauthorized extension at runtime——JVM 层面阻止未授权继承。"
        ],
        keyDifficulties: [
            "【Switch 类型模式】case Circle c -> 在 switch 中匹配类型并绑定变量。",
            "【顺序重要性】具体类型必须在父类型之前，否则编译器报错（unreachable code）。",
            "【完整性验证】编译器检查 switch 是否覆盖所有 permits 子类，遗漏会报错。",
            "【重构安全】新增 permits 子类时，所有相关 switch 都会编译失败，避免遗漏。"
        ],
        handsOnPath: [
            "穷尽 switch：switch (shape) { case Circle c -> area(c); case Rectangle r -> area(r); }",
            "类型模式：if (expr instanceof Const c) { return c.value(); }",
            "组合判断：switch (node) { case Leaf l -> l.value(); case Branch b -> process(b.left(), b.right()); }",
            "when 守卫：case Rectangle r when r.width() == r.height() -> \"square\";",
            "null 处理：case null -> handleNull(); case Circle c -> handleCircle(c);",
            "嵌套模式：case Plus(Const a, Const b) -> a.value() + b.value();"
        ],
        selfCheck: [
            "对 sealed 类型的 switch 为什么可以不写 default？",
            "如果 sealed 类新增了 permits 子类，现有代码会怎样？",
            "switch 中类型模式的匹配顺序重要吗？",
            "如何在 switch 中处理 null？",
            "穷尽性检查对代码维护有什么好处？"
        ],
        extensions: [
            "研究 Java 21 的 Record Patterns 解构嵌套结构。",
            "了解代数数据类型穷尽性检查的类型论基础。",
            "探索 Sealed + Pattern Matching 实现解释器模式。",
            "学习 when 守卫条件的高级用法。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/409",
            "https://dev.java/learn/pattern-matching-for-switch/"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w10-1": [
        {
            id: "jf-w10-1-q1",
            question: "Sealed Classes 在哪个 Java 版本成为正式特性？",
            options: [
                "Java 15（预览）",
                "Java 16（预览）",
                "Java 17（正式）",
                "Java 21"
            ],
            answer: 2,
            rationale: "JEP 409 在 Java 17 将 Sealed Classes 作为正式特性发布。"
        },
        {
            id: "jf-w10-1-q2",
            question: "sealed class 的子类必须使用哪个修饰符？",
            options: [
                "可以不用修饰符",
                "必须是 final、sealed 或 non-sealed 之一",
                "必须是 abstract",
                "必须是 public"
            ],
            answer: 1,
            rationale: "JEP 409：Exactly one of final, sealed, non-sealed must be used by each permitted subclass。"
        },
        {
            id: "jf-w10-1-q3",
            question: "non-sealed 修饰符的作用是什么？",
            options: [
                "终止继承",
                "继续受控继承",
                "开放继承，打破密封链",
                "禁止实例化"
            ],
            answer: 2,
            rationale: "non-sealed 打开继承，任何类都可以继承它，不再受 sealed 限制。"
        },
        {
            id: "jf-w10-1-q4",
            question: "permits 子句可以省略吗？",
            options: [
                "不可以",
                "可以，当子类在同一编译单元（文件）时",
                "只有接口可以省略",
                "只有 final 子类可以省略"
            ],
            answer: 1,
            rationale: "JEP 409：同一编译单元的子类可以省略 permits，编译器自动推断。"
        },
        {
            id: "jf-w10-1-q5",
            question: "permitted 子类必须在哪里？",
            options: [
                "任意位置",
                "同一模块（或无名模块的同一包）",
                "同一文件",
                "同一方法"
            ],
            answer: 1,
            rationale: "JEP 409：Permitted subclasses must be in same module (or package if unnamed)——同一模块约束。"
        },
        {
            id: "jf-w10-1-q6",
            question: "Record 可以作为 sealed 类的子类吗？",
            options: [
                "不可以",
                "可以，Record 隐式 final",
                "只能作为叶子节点",
                "需要特殊声明"
            ],
            answer: 1,
            rationale: "Record 隐式 final，非常适合作为 sealed 类层次的叶子节点。"
        },
        {
            id: "jf-w10-1-q7",
            question: "如何检查一个类是否是 sealed？",
            options: [
                "class.isSealed()",
                "class.isAbstract()",
                "class.isFinal()",
                "class.getModifiers()"
            ],
            answer: 0,
            rationale: "JEP 409：New reflection API methods isSealed() and getPermittedSubclasses() added to Class。"
        },
        {
            id: "jf-w10-1-q8",
            question: "final 子类的含义是什么？",
            options: [
                "可以被任何类继承",
                "继续受控继承",
                "终止继承链，不能再被继承",
                "抽象类"
            ],
            answer: 2,
            rationale: "final 子类终止继承链，该类不能再被任何类继承。"
        },
        {
            id: "jf-w10-1-q9",
            question: "sealed 子类需要什么？",
            options: [
                "无需额外声明",
                "自己的 permits 子句",
                "必须是抽象类",
                "必须在同一文件"
            ],
            answer: 1,
            rationale: "sealed 子类继续受控继承，需要声明自己的 permits 子句列出允许的子类。"
        },
        {
            id: "jf-w10-1-q10",
            question: "JVM 如何阻止未授权继承？",
            options: [
                "编译器检查",
                "PermittedSubclasses 字节码属性",
                "类加载器检查",
                "运行时异常"
            ],
            answer: 1,
            rationale: "JEP 409：PermittedSubclasses attribute prevents unauthorized extension at runtime——JVM 层面保护。"
        },
        {
            id: "jf-w10-1-q11",
            question: "以下哪个声明是正确的？",
            options: [
                "sealed class Shape {}",
                "sealed class Shape permits Circle, Rectangle {}",
                "sealed class Shape extends Object permits Circle {}",
                "public sealed Shape permits Circle {}"
            ],
            answer: 1,
            rationale: "sealed class 需要 permits 子句（除非子类在同一文件），选项 B 语法正确。"
        },
        {
            id: "jf-w10-1-q12",
            question: "sealed 的主要优势是什么？",
            options: [
                "性能优化",
                "精确控制继承层次，支持穷尽性检查",
                "简化语法",
                "支持多重继承"
            ],
            answer: 1,
            rationale: "Sealed 类精确控制类层次结构，编译器可以进行穷尽性检查，提高类型安全。"
        }
    ],
    "jf-w10-2": [
        {
            id: "jf-w10-2-q1",
            question: "Sealed interface 的语法是什么？",
            options: [
                "interface sealed Expr {}",
                "sealed interface Expr permits Const, Plus {}",
                "interface Expr sealed {}",
                "sealed Expr interface {}"
            ],
            answer: 1,
            rationale: "sealed interface 语法：sealed interface Name permits Impl1, Impl2 {}。"
        },
        {
            id: "jf-w10-2-q2",
            question: "Record 实现 sealed interface 需要什么修饰符？",
            options: [
                "必须声明 final",
                "不需要，Record 隐式 final",
                "必须声明 sealed",
                "必须声明 non-sealed"
            ],
            answer: 1,
            rationale: "Record 隐式 final，实现 sealed interface 时无需额外修饰符。"
        },
        {
            id: "jf-w10-2-q3",
            question: "可以用匿名类实现 sealed interface 吗？",
            options: [
                "可以",
                "不可以，必须是命名类",
                "取决于 permits",
                "只有 non-sealed 可以"
            ],
            answer: 1,
            rationale: "Sealed interface 的实现必须是命名类且在 permits 中列出，不能用匿名类。"
        },
        {
            id: "jf-w10-2-q4",
            question: "一个类可以实现多个 sealed interface 吗？",
            options: [
                "不可以",
                "可以，每个 interface 的 permits 都需要包含它",
                "只能实现一个",
                "需要特殊声明"
            ],
            answer: 1,
            rationale: "一个类可以实现多个 sealed interface，但必须在每个 interface 的 permits 中。"
        },
        {
            id: "jf-w10-2-q5",
            question: "Sealed interface 与普通 interface 的主要区别？",
            options: [
                "不能有默认方法",
                "限制了实现类，只有 permits 中的类可以实现",
                "不能有常量",
                "不能被继承"
            ],
            answer: 1,
            rationale: "Sealed interface 限制实现类，只有 permits 中列出的类可以实现它。"
        },
        {
            id: "jf-w10-2-q6",
            question: "以下哪个是有效的 Record 实现？",
            options: [
                "record Const implements Expr {}",
                "record Const(int value) implements Expr {}",
                "final record Const(int value) implements Expr {}",
                "sealed record Const(int value) implements Expr {}"
            ],
            answer: 1,
            rationale: "Record 语法：record Name(components) implements Interface {}，不需要 final（隐式）。"
        },
        {
            id: "jf-w10-2-q7",
            question: "Sealed interface 可以有泛型吗？",
            options: [
                "不可以",
                "可以",
                "只能有一个类型参数",
                "只有 permits 子类可以用泛型"
            ],
            answer: 1,
            rationale: "Sealed 修饰符可以与泛型配合：sealed interface Result<T> permits Success, Failure {}。"
        },
        {
            id: "jf-w10-2-q8",
            question: "为什么 Record 特别适合实现 sealed interface？",
            options: [
                "性能更好",
                "Record 隐式 final，且不可变，适合作为数据载体",
                "语法更简单",
                "支持继承"
            ],
            answer: 1,
            rationale: "Record 隐式 final 符合 sealed 要求，不可变性适合数据建模，代码简洁。"
        },
        {
            id: "jf-w10-2-q9",
            question: "Sealed interface 的 permits 子类可以是 interface 吗？",
            options: [
                "不可以，只能是类",
                "可以，该 interface 需要是 sealed 或 non-sealed",
                "只能是 final interface",
                "必须是 abstract interface"
            ],
            answer: 1,
            rationale: "permits 可以包含 interface，该 interface 需要声明为 sealed 或 non-sealed。"
        },
        {
            id: "jf-w10-2-q10",
            question: "如何实现类似 Rust Result<T, E> 的模式？",
            options: [
                "使用 Optional",
                "sealed interface Result<T> permits Ok, Err",
                "使用异常",
                "使用 null"
            ],
            answer: 1,
            rationale: "可以用 sealed interface Result<T> permits Ok, Err 实现类型安全的结果类型。"
        },
        {
            id: "jf-w10-2-q11",
            question: "嵌套 sealed interface 在同一文件中需要 permits 吗？",
            options: [
                "需要",
                "可以省略，编译器自动推断",
                "必须显式声明",
                "取决于子类数量"
            ],
            answer: 1,
            rationale: "同一编译单元的子类可以省略 permits 子句，编译器会自动推断。"
        },
        {
            id: "jf-w10-2-q12",
            question: "Sealed interface 相比抽象类的优势？",
            options: [
                "可以有状态",
                "支持多重继承（实现多个接口）",
                "可以有构造器",
                "可以有实例字段"
            ],
            answer: 1,
            rationale: "Interface 支持多重继承，类可以实现多个 sealed interface，而只能继承一个抽象类。"
        }
    ],
    "jf-w10-3": [
        {
            id: "jf-w10-3-q1",
            question: "对 sealed 类型的 switch 为什么可以不写 default？",
            options: [
                "编译器 bug",
                "编译器验证覆盖了所有 permits 子类",
                "默认返回 null",
                "自动添加 default"
            ],
            answer: 1,
            rationale: "JEP 409：Compiler verifies all cases are covered——穷尽性检查确保所有情况都被处理。"
        },
        {
            id: "jf-w10-3-q2",
            question: "如果 sealed 类新增 permits 子类，现有 switch 会怎样？",
            options: [
                "运行时异常",
                "编译错误，强制更新 switch",
                "默认忽略新子类",
                "自动处理"
            ],
            answer: 1,
            rationale: "新增子类后，原有 switch 不再穷尽，编译器报错要求处理新增情况。"
        },
        {
            id: "jf-w10-3-q3",
            question: "switch 中类型模式的顺序重要吗？",
            options: [
                "不重要",
                "重要，具体类型必须在父类型之前",
                "只有 default 位置重要",
                "按字母顺序"
            ],
            answer: 1,
            rationale: "具体类型必须在父类型之前，否则编译器报 unreachable code 错误。"
        },
        {
            id: "jf-w10-3-q4",
            question: "如何在 switch 中处理 null？",
            options: [
                "switch 自动处理 null",
                "case null -> handleNull();",
                "null 会抛出 NPE",
                "不支持 null"
            ],
            answer: 1,
            rationale: "Java 21+ switch 支持 case null -> 显式处理 null 值，避免 NPE。"
        },
        {
            id: "jf-w10-3-q5",
            question: "when 守卫条件的作用是什么？",
            options: [
                "替代 default",
                "在类型匹配后添加额外条件",
                "跳过匹配",
                "终止 switch"
            ],
            answer: 1,
            rationale: "when 子句在类型匹配成功后进一步检查条件：case String s when s.length() > 5 ->。"
        },
        {
            id: "jf-w10-3-q6",
            question: "穷尽性检查对代码维护的好处是什么？",
            options: [
                "性能优化",
                "新增子类时编译器强制更新所有相关代码",
                "减少代码量",
                "简化调试"
            ],
            answer: 1,
            rationale: "穷尽性检查确保重构安全，新增子类时所有相关 switch 都会编译失败提醒更新。"
        },
        {
            id: "jf-w10-3-q7",
            question: "case Circle c -> 的含义是什么？",
            options: [
                "创建 Circle 实例",
                "匹配 Circle 类型并绑定到变量 c",
                "调用 Circle 方法",
                "判断是否为 null"
            ],
            answer: 1,
            rationale: "类型模式匹配 Circle 类型，匹配成功后将值绑定到变量 c 供箭头右侧使用。"
        },
        {
            id: "jf-w10-3-q8",
            question: "Pattern Matching for Switch 在哪个版本正式发布？",
            options: [
                "Java 17（预览）",
                "Java 19（预览）",
                "Java 21（正式）",
                "Java 14"
            ],
            answer: 2,
            rationale: "Pattern Matching for Switch（JEP 441）在 Java 21 成为正式特性。"
        },
        {
            id: "jf-w10-3-q9",
            question: "case null, default -> 的含义是什么？",
            options: [
                "语法错误",
                "同时处理 null 和未匹配的情况",
                "只处理 null",
                "只处理 default"
            ],
            answer: 1,
            rationale: "case null, default -> 合并处理 null 值和其他未匹配的情况。"
        },
        {
            id: "jf-w10-3-q10",
            question: "Sealed + Pattern Matching 实现了什么编程范式？",
            options: [
                "面向对象",
                "代数数据类型（ADT）和穷尽匹配",
                "函数式编程",
                "响应式编程"
            ],
            answer: 1,
            rationale: "Sealed + Pattern Matching 在 Java 中实现了类似函数式语言的代数数据类型和穷尽匹配。"
        },
        {
            id: "jf-w10-3-q11",
            question: "如何解构嵌套 Record？",
            options: [
                "case Plus(Const a, Const b) ->",
                "case Plus p -> p.left()",
                "不支持嵌套解构",
                "使用 instanceof"
            ],
            answer: 0,
            rationale: "Record Patterns（Java 21）支持嵌套解构：case Plus(Const a, Const b) -> a.value() + b.value()。"
        },
        {
            id: "jf-w10-3-q12",
            question: "为什么 sealed 类型不需要运行时类型检查异常处理？",
            options: [
                "编译器在编译时验证穷尽性",
                "自动生成异常处理",
                "使用 try-catch",
                "运行时自动处理"
            ],
            answer: 0,
            rationale: "编译器在编译时验证 switch 覆盖所有 permits 子类，不需要运行时兜底逻辑。"
        }
    ]
}
