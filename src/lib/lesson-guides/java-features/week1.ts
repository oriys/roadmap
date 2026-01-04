import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "jf-w1-1": {
        lessonId: "jf-w1-1",
        background: [
            "【Lambda 本质】Oracle 官方教程：Lambda expressions enable you to treat functionality as a method argument, or code as data——Lambda 让我们能够将行为作为参数传递，代码即数据。",
            "【语法结构】Lambda 由三部分组成：参数列表、箭头符号 -> 和方法体。单参数可省略括号 p -> p.getAge()，多参数需要括号 (a, b) -> a + b，代码块需要花括号和 return。",
            "【目标类型】Oracle 文档：The Java compiler determines a lambda expression's type from its context (the target type)——编译器从上下文推断 Lambda 类型，包括变量声明、赋值、返回语句、方法参数等场景。",
            "【函数式接口】Lambda 实现的是函数式接口——只有一个抽象方法的接口。JDK 在 java.util.function 包中提供了 Predicate、Consumer、Function、Supplier 等标准接口。",
            "【类型推断】Lambda 参数类型可省略，编译器自动推断。(Person p) -> p.getAge() 可简写为 p -> p.getAge()，让代码更简洁。"
        ],
        keyDifficulties: [
            "【变量捕获限制】Oracle 文档：Captured variables must be final or effectively final——Lambda 可访问外部局部变量，但这些变量必须是 final 或事实上不变的（effectively final），不能在 Lambda 内外被重新赋值。",
            "【词法作用域】与匿名类不同，Lambda 是词法作用域的（lexically scoped），不会引入新的作用域。Lambda 内的 this 指向外围类，而匿名类的 this 指向匿名类实例本身。",
            "【序列化问题】Lambda 可以序列化（如果目标类型和捕获的参数都可序列化），但 Oracle 强烈不建议这样做——serialization of lambda expressions is strongly discouraged。",
            "【单表达式 vs 代码块】单表达式 Lambda 自动返回结果：p -> p.getAge()；代码块需要显式 return：p -> { return p.getAge(); }。void 方法调用不需要 return：email -> System.out.println(email)。"
        ],
        handsOnPath: [
            "编写一个 Comparator<String> 的 Lambda：(s1, s2) -> s1.length() - s2.length()，用于按字符串长度排序。",
            "使用 List.forEach() 配合 Lambda 遍历集合：list.forEach(item -> System.out.println(item))。",
            "将匿名类重构为 Lambda：new Runnable() { public void run() { ... } } 改为 () -> { ... }。",
            "实验变量捕获：在 Lambda 外声明变量，在 Lambda 内使用，尝试修改变量观察编译错误。",
            "比较 Lambda 和匿名类中 this 的指向：在两者内部打印 this.getClass().getName()。"
        ],
        selfCheck: [
            "Lambda 表达式的基本语法是什么？参数列表何时可以省略括号？",
            "什么是目标类型（target type）？编译器如何确定 Lambda 的类型？",
            "effectively final 是什么意思？为什么 Lambda 有这个限制？",
            "Lambda 和匿名类在 this 引用上有什么区别？",
            "什么情况下 Lambda 需要花括号和 return 语句？"
        ],
        extensions: [
            "探索 java.util.function 包中的 40+ 个函数式接口，了解它们的命名规律。",
            "学习如何自定义函数式接口，使用 @FunctionalInterface 注解。",
            "研究 Lambda 的实现原理：invokedynamic 指令和 LambdaMetafactory。",
            "了解 Lambda 与 Stream API 的配合使用模式。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html",
            "https://dev.java/learn/lambdas/"
        ]
    },
    "jf-w1-2": {
        lessonId: "jf-w1-2",
        background: [
            "【函数式接口定义】A functional interface has exactly one abstract method——函数式接口只有一个抽象方法，Lambda 表达式就是这个抽象方法的实现。",
            "【四大核心接口】java.util.function 包的四个基础接口：Predicate<T>（返回 boolean）、Consumer<T>（无返回值）、Function<T,R>（类型转换）、Supplier<T>（无参数生成值）。",
            "【Predicate 用途】Predicate<T> 的方法签名是 boolean test(T t)，用于条件判断。Stream.filter() 接受 Predicate 参数进行元素过滤。",
            "【Consumer 用途】Consumer<T> 的方法签名是 void accept(T t)，用于消费数据。forEach() 方法内部使用 Consumer 函数式接口。",
            "【Function 用途】Function<T,R> 的方法签名是 R apply(T t)，用于类型转换。Stream.map() 接受 Function 参数进行元素映射。",
            "【Supplier 用途】Supplier<T> 的方法签名是 T get()，用于延迟生成数据。Optional.orElseGet() 接受 Supplier 实现懒加载。"
        ],
        keyDifficulties: [
            "【Bi- 变体】BiFunction<T,U,R>、BiConsumer<T,U>、BiPredicate<T,U> 处理两个参数的场景。Map.forEach() 就使用 BiConsumer。",
            "【Operator 特化】UnaryOperator<T> 是 Function<T,T> 的特化，BinaryOperator<T> 是 BiFunction<T,T,T> 的特化，用于输入输出同类型的场景。",
            "【原始类型特化】为避免自动装箱开销，包提供 IntPredicate、LongConsumer、DoubleFunction 等原始类型特化版本。性能敏感场景应优先使用。",
            "【方法组合】Predicate 提供 and()、or()、negate() 方法，Function 提供 andThen()、compose() 方法，可链式组合多个函数。",
            "【@FunctionalInterface】此注解可选但推荐，它让编译器验证接口确实只有一个抽象方法，防止意外添加方法破坏函数式特性。"
        ],
        handsOnPath: [
            "实现 Predicate<String>：s -> s.length() > 5，使用 test() 方法测试不同字符串。",
            "实现 Function<String, Integer>：String::length，配合 Stream.map() 将字符串列表转为长度列表。",
            "实现 Consumer<String>：System.out::println，配合 List.forEach() 打印所有元素。",
            "实现 Supplier<Double>：Math::random，用于生成随机数。",
            "使用 Predicate 的 and()、or() 方法组合多个条件：p1.and(p2).or(p3)。",
            "自定义一个 @FunctionalInterface 接口，尝试添加第二个抽象方法观察编译错误。"
        ],
        selfCheck: [
            "Predicate、Consumer、Function、Supplier 四个接口的方法签名分别是什么？",
            "BiFunction 和 Function 有什么区别？什么场景使用 BiFunction？",
            "为什么存在 IntPredicate、LongFunction 这些原始类型特化版本？",
            "如何使用 Predicate 的 and() 和 or() 方法组合多个条件？",
            "@FunctionalInterface 注解的作用是什么？不加会怎样？"
        ],
        extensions: [
            "研究 java.util.function 包中的所有 43 个接口，总结命名规律。",
            "学习 Function 的 compose() 和 andThen() 的区别：执行顺序相反。",
            "探索 Comparator 接口的函数式特性和静态工厂方法。",
            "了解如何在自定义接口中添加 default 方法而不破坏函数式特性。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html",
            "https://dev.java/learn/lambdas/functional-interfaces/"
        ]
    },
    "jf-w1-3": {
        lessonId: "jf-w1-3",
        background: [
            "【方法引用本质】Oracle 文档：Method references are compact, easy-to-read lambda expressions for methods that already have a name——方法引用是对已有方法的简洁引用，比完整 Lambda 更易读。",
            "【四种引用类型】Java 支持四种方法引用：静态方法引用 ClassName::staticMethod、特定对象实例方法引用 instance::method、任意对象实例方法引用 ClassName::method、构造方法引用 ClassName::new。",
            "【静态方法引用】语法 ContainingClass::staticMethodName，例如 Person::compareByAge 等价于 (a, b) -> Person.compareByAge(a, b)。",
            "【特定对象方法引用】语法 containingObject::instanceMethodName，例如 myApp::appendStrings 调用特定对象的实例方法。方法引用绑定到特定对象实例。",
            "【任意对象方法引用】语法 ContainingType::methodName，例如 String::compareToIgnoreCase。第一个参数作为方法调用者，等价于 (a, b) -> a.compareToIgnoreCase(b)。",
            "【构造方法引用】语法 ClassName::new，例如 HashSet::new。编译器根据目标类型推断调用哪个构造函数。"
        ],
        keyDifficulties: [
            "【Bound vs Unbound】特定对象方法引用（bound）：对象在引用中指定，如 System.out::println。任意对象方法引用（unbound）：对象作为第一个参数传入，如 String::length。",
            "【参数映射规则】静态方法引用：所有参数传给静态方法。实例方法引用（unbound）：第一个参数是调用者，其余参数传给方法。理解这个映射是掌握方法引用的关键。",
            "【构造函数重载】构造方法引用 ArrayList::new 可匹配不同签名的构造函数，取决于目标函数式接口。Supplier<List> 匹配无参构造，Function<Integer, List> 匹配带容量参数的构造。",
            "【IDE 辅助】dev.java 提到 IDE 通常能识别可转换为方法引用的 Lambda，提供重构建议。合理利用 IDE 功能提高代码质量。"
        ],
        handsOnPath: [
            "将 Lambda (s) -> s.toUpperCase() 改写为方法引用 String::toUpperCase。",
            "将 Lambda (s) -> System.out.println(s) 改写为 System.out::println。",
            "使用静态方法引用：Arrays.sort(array, String::compareToIgnoreCase)。",
            "使用构造方法引用：stream.collect(Collectors.toCollection(ArrayList::new))。",
            "比较 String::length（unbound，需要字符串参数）和 someString::length（bound，无参数）的使用场景。",
            "使用 IDE 的重构功能，自动将 Lambda 转换为方法引用。"
        ],
        selfCheck: [
            "四种方法引用的语法分别是什么？各举一个例子。",
            "String::length 和 str::length（str 是具体字符串变量）有什么区别？",
            "为什么 String::compareToIgnoreCase 可以用在 Comparator<String> 类型的位置？",
            "构造方法引用 ArrayList::new 如何匹配不同的构造函数？",
            "什么情况下应该使用方法引用而不是 Lambda？"
        ],
        extensions: [
            "研究数组构造方法引用：int[]::new 可用于 Stream.toArray() 方法。",
            "了解父类方法引用 super::methodName 和当前类方法引用 this::methodName。",
            "探索泛型方法引用的类型推断机制。",
            "学习在 Stream API 中大量使用方法引用简化代码。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html",
            "https://dev.java/learn/lambdas/method-references/"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w1-1": [
        {
            id: "jf-w1-1-q1",
            question: "Lambda 表达式的基本语法是什么？",
            options: [
                "(参数) => { 方法体 }",
                "(参数) -> 表达式 或 (参数) -> { 语句块 }",
                "function(参数) { 方法体 }",
                "[参数] -> { 方法体 }"
            ],
            answer: 1,
            rationale: "Oracle 官方教程明确 Lambda 语法为 (参数) -> 表达式 或 (参数) -> { 语句块 }，使用箭头符号 -> 分隔参数和方法体。"
        },
        {
            id: "jf-w1-1-q2",
            question: "以下哪个是有效的 Lambda 表达式？",
            options: [
                "p -> { p.getAge() }",
                "p -> return p.getAge()",
                "p -> p.getAge()",
                "(p) => p.getAge()"
            ],
            answer: 2,
            rationale: "单表达式 Lambda 不需要花括号，自动返回结果。选项 A 缺少 return，选项 B 缺少花括号，选项 D 使用了错误的箭头符号。"
        },
        {
            id: "jf-w1-1-q3",
            question: "Lambda 表达式可以捕获外部变量，但这些变量必须是：",
            options: [
                "static 的",
                "public 的",
                "final 或 effectively final 的",
                "volatile 的"
            ],
            answer: 2,
            rationale: "Oracle 文档明确指出：Captured variables must be final or effectively final——被捕获的变量必须是 final 或事实上不变的。"
        },
        {
            id: "jf-w1-1-q4",
            question: "在 Lambda 表达式内部，this 关键字指向什么？",
            options: [
                "Lambda 表达式本身",
                "函数式接口的实例",
                "外围类的实例",
                "null"
            ],
            answer: 2,
            rationale: "Lambda 是词法作用域的（lexically scoped），this 指向外围类的实例，而不是像匿名类那样指向匿名类实例本身。"
        },
        {
            id: "jf-w1-1-q5",
            question: "以下代码的 Lambda 表达式类型是什么？\nPredicate<String> p = s -> s.isEmpty();",
            options: [
                "String",
                "boolean",
                "Predicate<String>",
                "Function<String, Boolean>"
            ],
            answer: 2,
            rationale: "编译器根据目标类型（target type）推断 Lambda 类型。这里目标类型是 Predicate<String>，所以 Lambda 的类型就是 Predicate<String>。"
        },
        {
            id: "jf-w1-1-q6",
            question: "单参数 Lambda 可以省略括号，以下哪个是正确的写法？",
            options: [
                "s, t -> s + t",
                "s -> s.toUpperCase()",
                "-> System.out.println(\"hello\")",
                "(s, t -> s + t)"
            ],
            answer: 1,
            rationale: "单参数可以省略括号：s -> s.toUpperCase()。无参数需要空括号 ()，多参数需要括号包围。"
        },
        {
            id: "jf-w1-1-q7",
            question: "以下哪种情况不是 Lambda 表达式的有效目标类型上下文？",
            options: [
                "变量声明",
                "方法参数",
                "类的字段初始化",
                "instanceof 检查"
            ],
            answer: 3,
            rationale: "Oracle 文档列出目标类型的有效上下文包括：变量声明、赋值、返回语句、方法参数、Lambda 体、条件表达式等。instanceof 不是有效的目标类型上下文。"
        },
        {
            id: "jf-w1-1-q8",
            question: "void 方法调用的 Lambda 表达式需要哪种写法？",
            options: [
                "必须使用花括号和 return null",
                "必须使用花括号但不需要 return",
                "可以直接写表达式，不需要花括号",
                "必须返回 Void 类型"
            ],
            answer: 2,
            rationale: "Oracle 文档示例：email -> System.out.println(email)。void 方法调用可以直接作为 Lambda 表达式体，不需要花括号。"
        },
        {
            id: "jf-w1-1-q9",
            question: "为什么 Lambda 表达式比匿名类更简洁？",
            options: [
                "Lambda 可以有多个抽象方法",
                "Lambda 不需要指定方法名和返回类型",
                "Lambda 可以访问私有变量",
                "Lambda 运行速度更快"
            ],
            answer: 1,
            rationale: "Lambda 表达式只需要参数和方法体，不需要 new 关键字、类名、方法名、返回类型等样板代码，因此更加简洁。"
        },
        {
            id: "jf-w1-1-q10",
            question: "以下代码会发生什么？\nint x = 10;\nConsumer<Integer> c = y -> System.out.println(x + y);\nx = 20;",
            options: [
                "正常编译，使用 x = 20",
                "正常编译，使用 x = 10",
                "编译错误：x 不是 effectively final",
                "运行时错误"
            ],
            answer: 2,
            rationale: "x 被重新赋值，不再是 effectively final。Lambda 捕获的变量必须是 final 或 effectively final，所以编译器会报错。"
        },
        {
            id: "jf-w1-1-q11",
            question: "Lambda 表达式可以序列化吗？",
            options: [
                "不能，Lambda 不支持序列化",
                "可以，如果目标类型和捕获的参数都可序列化",
                "可以，无条件支持",
                "只有无状态 Lambda 可以"
            ],
            answer: 1,
            rationale: "Lambda 可以序列化，但 Oracle 文档强调 serialization of lambda expressions is strongly discouraged——强烈不建议这样做。"
        },
        {
            id: "jf-w1-1-q12",
            question: "以下哪个不是函数式接口？",
            options: [
                "Runnable",
                "Comparator<T>",
                "List<T>",
                "Callable<V>"
            ],
            answer: 2,
            rationale: "函数式接口只有一个抽象方法。Runnable 有 run()，Comparator 有 compare()，Callable 有 call()，而 List 有多个抽象方法（add、get、size 等），不是函数式接口。"
        }
    ],
    "jf-w1-2": [
        {
            id: "jf-w1-2-q1",
            question: "Predicate<T> 接口的抽象方法签名是什么？",
            options: [
                "void accept(T t)",
                "T get()",
                "boolean test(T t)",
                "R apply(T t)"
            ],
            answer: 2,
            rationale: "java.util.function 文档明确：Predicate<T> 的方法是 boolean test(T t)，用于条件判断，返回布尔值。"
        },
        {
            id: "jf-w1-2-q2",
            question: "Consumer<T> 接口的特点是什么？",
            options: [
                "接收参数并返回结果",
                "不接收参数但返回结果",
                "接收参数但不返回结果",
                "既不接收参数也不返回结果"
            ],
            answer: 2,
            rationale: "Consumer<T> 的方法签名是 void accept(T t)，接收一个参数但不返回结果，用于消费数据。"
        },
        {
            id: "jf-w1-2-q3",
            question: "Function<T, R> 和 UnaryOperator<T> 的区别是什么？",
            options: [
                "Function 接收两个参数，UnaryOperator 接收一个",
                "UnaryOperator 的输入和输出类型必须相同",
                "UnaryOperator 没有返回值",
                "Function 是 UnaryOperator 的子接口"
            ],
            answer: 1,
            rationale: "UnaryOperator<T> 是 Function<T,T> 的特化版本，要求输入和输出类型相同，适用于值转换场景。"
        },
        {
            id: "jf-w1-2-q4",
            question: "Supplier<T> 接口的用途是什么？",
            options: [
                "消费数据",
                "判断条件",
                "无参数生成数据",
                "转换数据类型"
            ],
            answer: 2,
            rationale: "Supplier<T> 的方法签名是 T get()，无参数但返回结果，常用于延迟生成数据或工厂模式。"
        },
        {
            id: "jf-w1-2-q5",
            question: "为什么存在 IntPredicate、LongConsumer 等原始类型特化接口？",
            options: [
                "提供更多方法",
                "支持更大的数值范围",
                "避免自动装箱的性能开销",
                "支持多线程"
            ],
            answer: 2,
            rationale: "java.util.function 文档说明，原始类型特化版本避免了 int/long/double 与 Integer/Long/Double 之间的自动装箱开销，提高性能。"
        },
        {
            id: "jf-w1-2-q6",
            question: "BiFunction<T, U, R> 与 Function<T, R> 的主要区别是什么？",
            options: [
                "BiFunction 返回两个值",
                "BiFunction 接收两个参数",
                "BiFunction 没有返回值",
                "BiFunction 只能用于基本类型"
            ],
            answer: 1,
            rationale: "BiFunction<T,U,R> 接收两个参数（T 和 U）并返回结果 R，而 Function<T,R> 只接收一个参数。"
        },
        {
            id: "jf-w1-2-q7",
            question: "@FunctionalInterface 注解的作用是什么？",
            options: [
                "让接口支持 Lambda",
                "让编译器验证接口只有一个抽象方法",
                "提高运行时性能",
                "允许接口有多个抽象方法"
            ],
            answer: 1,
            rationale: "文档指出 @FunctionalInterface 是可选的，但推荐使用，它让编译器验证接口确实只有一个抽象方法。"
        },
        {
            id: "jf-w1-2-q8",
            question: "如何组合两个 Predicate 实现 AND 逻辑？",
            options: [
                "p1.combine(p2)",
                "p1.and(p2)",
                "Predicate.and(p1, p2)",
                "p1 && p2"
            ],
            answer: 1,
            rationale: "Predicate 接口提供 and()、or()、negate() 等默认方法用于组合，p1.and(p2) 返回两个条件都满足的新 Predicate。"
        },
        {
            id: "jf-w1-2-q9",
            question: "BinaryOperator<T> 等价于哪个接口？",
            options: [
                "Function<T, T>",
                "BiFunction<T, T, T>",
                "UnaryOperator<T>",
                "BiConsumer<T, T>"
            ],
            answer: 1,
            rationale: "BinaryOperator<T> 是 BiFunction<T,T,T> 的特化，接收两个相同类型参数并返回相同类型结果。"
        },
        {
            id: "jf-w1-2-q10",
            question: "ToIntFunction<T> 的作用是什么？",
            options: [
                "将 int 转换为 T",
                "将 T 转换为 int",
                "接收 int 返回 T",
                "接收两个 int 参数"
            ],
            answer: 1,
            rationale: "java.util.function 文档：ToXxx 前缀表示返回类型特化，ToIntFunction<T> 将 T 转换为 int，避免自动装箱。"
        },
        {
            id: "jf-w1-2-q11",
            question: "以下哪个不属于 java.util.function 包的四大基础接口？",
            options: [
                "Predicate",
                "Consumer",
                "Comparator",
                "Supplier"
            ],
            answer: 2,
            rationale: "四大基础接口是 Predicate、Consumer、Function、Supplier。Comparator 在 java.util 包中，虽然也是函数式接口但不属于 function 包。"
        },
        {
            id: "jf-w1-2-q12",
            question: "Function 的 andThen() 和 compose() 方法有什么区别？",
            options: [
                "没有区别，只是名称不同",
                "andThen() 先执行当前函数，compose() 先执行参数函数",
                "andThen() 用于 Consumer，compose() 用于 Supplier",
                "compose() 返回新类型，andThen() 返回相同类型"
            ],
            answer: 1,
            rationale: "f.andThen(g) 先执行 f 再执行 g，f.compose(g) 先执行 g 再执行 f。执行顺序相反。"
        }
    ],
    "jf-w1-3": [
        {
            id: "jf-w1-3-q1",
            question: "静态方法引用的语法是什么？",
            options: [
                "ClassName.staticMethod",
                "ClassName::staticMethod",
                "ClassName->staticMethod",
                "ClassName#staticMethod"
            ],
            answer: 1,
            rationale: "Oracle 文档：静态方法引用使用双冒号语法 ContainingClass::staticMethodName，例如 Person::compareByAge。"
        },
        {
            id: "jf-w1-3-q2",
            question: "String::length 属于哪种方法引用类型？",
            options: [
                "静态方法引用",
                "特定对象实例方法引用",
                "任意对象实例方法引用",
                "构造方法引用"
            ],
            answer: 2,
            rationale: "String::length 是任意对象实例方法引用（unbound），等价于 s -> s.length()，第一个参数作为方法调用者。"
        },
        {
            id: "jf-w1-3-q3",
            question: "System.out::println 属于哪种方法引用类型？",
            options: [
                "静态方法引用",
                "特定对象实例方法引用",
                "任意对象实例方法引用",
                "构造方法引用"
            ],
            answer: 1,
            rationale: "System.out::println 是特定对象实例方法引用（bound），绑定到 System.out 这个特定对象，等价于 x -> System.out.println(x)。"
        },
        {
            id: "jf-w1-3-q4",
            question: "构造方法引用 ArrayList::new 可以匹配哪些函数式接口？",
            options: [
                "只能匹配 Supplier<ArrayList>",
                "只能匹配 Function<Integer, ArrayList>",
                "根据目标类型推断，可匹配不同的构造函数",
                "不能匹配任何函数式接口"
            ],
            answer: 2,
            rationale: "Oracle 文档说明构造方法引用根据目标函数式接口类型推断调用哪个构造函数。Supplier 匹配无参构造，Function<Integer, List> 匹配带容量参数的构造。"
        },
        {
            id: "jf-w1-3-q5",
            question: "以下哪个 Lambda 可以转换为 String::compareToIgnoreCase？",
            options: [
                "s -> s.compareToIgnoreCase()",
                "(s1, s2) -> s1.compareToIgnoreCase(s2)",
                "(s1, s2) -> String.compareToIgnoreCase(s1, s2)",
                "s -> String.compareToIgnoreCase(s)"
            ],
            answer: 1,
            rationale: "String::compareToIgnoreCase 是任意对象实例方法引用，第一个参数作为调用者，等价于 (a, b) -> a.compareToIgnoreCase(b)。"
        },
        {
            id: "jf-w1-3-q6",
            question: "Bound 方法引用和 Unbound 方法引用的主要区别是什么？",
            options: [
                "Bound 可以有返回值，Unbound 没有",
                "Bound 绑定特定对象，Unbound 的对象作为第一个参数传入",
                "Unbound 只能用于静态方法",
                "Bound 只能用于无参方法"
            ],
            answer: 1,
            rationale: "dev.java 文档：Bound 方法引用（如 System.out::println）绑定到特定对象；Unbound 方法引用（如 String::length）的对象作为第一个参数传入。"
        },
        {
            id: "jf-w1-3-q7",
            question: "数组构造方法引用的语法是什么？",
            options: [
                "int[]::new()",
                "new int[]",
                "int[]::new",
                "Array<int>::new"
            ],
            answer: 2,
            rationale: "数组构造方法引用使用 Type[]::new 语法，例如 int[]::new，常用于 Stream.toArray(int[]::new)。"
        },
        {
            id: "jf-w1-3-q8",
            question: "以下代码中的方法引用类型是什么？\nComparisonProvider cp = new ComparisonProvider();\nArrays.sort(array, cp::compareByName);",
            options: [
                "静态方法引用",
                "特定对象实例方法引用",
                "任意对象实例方法引用",
                "构造方法引用"
            ],
            answer: 1,
            rationale: "cp::compareByName 绑定到特定对象 cp，属于特定对象实例方法引用（Reference to an instance method of a particular object）。"
        },
        {
            id: "jf-w1-3-q9",
            question: "什么情况下应该使用方法引用而不是 Lambda？",
            options: [
                "当需要多行代码时",
                "当已有方法可以直接使用时",
                "当需要捕获局部变量时",
                "当需要修改参数时"
            ],
            answer: 1,
            rationale: "Oracle 文档：Method references are compact, easy-to-read lambda expressions for methods that already have a name——当已有命名方法可用时，方法引用更简洁易读。"
        },
        {
            id: "jf-w1-3-q10",
            question: "Person::new 可以用在什么场景？",
            options: [
                "只能作为 Supplier<Person> 使用",
                "只能作为 Function<String, Person> 使用",
                "取决于目标类型，可匹配不同构造函数",
                "不能用于创建对象"
            ],
            answer: 2,
            rationale: "构造方法引用根据目标函数式接口推断使用哪个构造函数。Person::new 可以是 Supplier（无参）、Function（一参）、BiFunction（两参）等。"
        },
        {
            id: "jf-w1-3-q11",
            question: "以下哪个不是有效的方法引用？",
            options: [
                "Math::max",
                "String::new",
                "list::size",
                "Object::new::"
            ],
            answer: 3,
            rationale: "方法引用使用双冒号 :: 分隔类名/对象和方法名，Object::new:: 语法错误。正确的构造方法引用是 Object::new。"
        },
        {
            id: "jf-w1-3-q12",
            question: "this::methodName 和 super::methodName 分别引用什么？",
            options: [
                "都引用静态方法",
                "this 引用当前类方法，super 引用父类方法",
                "this 引用父类方法，super 引用当前类方法",
                "都只能在 Lambda 内使用"
            ],
            answer: 1,
            rationale: "this::methodName 引用当前类实例的方法，super::methodName 引用父类的方法，都属于特定对象实例方法引用。"
        }
    ]
}
