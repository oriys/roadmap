import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "jf-w3-1": {
        lessonId: "jf-w3-1",
        background: [
            "【Optional 定义】Oracle 文档：Optional<T> is a container class that may or may not contain a non-null value——Optional 是一个容器类，可能包含也可能不包含非空值。",
            "【设计目的】Optional 提供类型安全的方式处理可空值，避免 NullPointerException。它强制调用者显式处理值可能缺失的情况。",
            "【值类型类】Optional 是值类型类（value-based class），应避免使用身份敏感操作如 ==、synchronization。使用 equals() 比较。",
            "【三种创建方式】Optional.of(value) 创建非空 Optional（null 抛异常）、Optional.ofNullable(value) 安全创建（允许 null）、Optional.empty() 创建空 Optional。",
            "【检查方法】isPresent() 检查值是否存在返回 boolean。Java 11+ 新增 isEmpty() 方法检查是否为空。"
        ],
        keyDifficulties: [
            "【of vs ofNullable】Optional.of(null) 抛出 NullPointerException，只用于确定非空的值。Optional.ofNullable(value) 安全处理可能为 null 的值。",
            "【get 的危险性】Oracle 文档：get() throws NoSuchElementException if no value is present——直接调用 get() 不检查会抛异常，这是常见错误。",
            "【ifPresent 替代模式】避免 if (opt.isPresent()) { opt.get()... } 的写法，使用 opt.ifPresent(consumer) 更简洁安全。",
            "【空 Optional 比较】使用 opt.isPresent() 检查而不是 opt == Optional.empty()，因为 Optional 是值类型类，不应使用 == 比较。"
        ],
        handsOnPath: [
            "使用 Optional.of() 包装非空值：Optional<String> opt = Optional.of(\"hello\");",
            "使用 Optional.ofNullable() 处理可能为 null 的值：Optional<String> opt = Optional.ofNullable(possibleNull);",
            "使用 ifPresent 处理存在的值：opt.ifPresent(value -> System.out.println(value));",
            "使用 isPresent 和 isEmpty 检查：if (opt.isEmpty()) { /* handle empty */ }",
            "对比 of 和 ofNullable：尝试 Optional.of(null) 观察异常。"
        ],
        selfCheck: [
            "Optional.of() 和 Optional.ofNullable() 有什么区别？什么时候用哪个？",
            "为什么直接调用 get() 是危险的？应该怎么做？",
            "ifPresent(Consumer) 方法的作用是什么？为什么推荐使用它？",
            "为什么不应该用 == 比较 Optional？",
            "Optional.empty() 返回的是同一个实例吗？"
        ],
        extensions: [
            "了解 OptionalInt、OptionalLong、OptionalDouble 原始类型特化版本。",
            "研究 Optional 作为 Stream 操作返回值：findFirst()、findAny()、reduce() 等。",
            "学习 Java 9 新增的 Optional 方法：ifPresentOrElse()、or()、stream()。",
            "探索 Optional 在函数式编程中的 Monad 概念。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html",
            "https://dev.java/learn/api/streams/optionals/"
        ]
    },
    "jf-w3-2": {
        lessonId: "jf-w3-2",
        background: [
            "【map 转换】Oracle 文档：map(Function) applies mapping function if value is present, returns Optional with mapped result——如果值存在则应用映射函数，返回包含结果的 Optional。",
            "【flatMap 避免嵌套】当映射函数返回 Optional 时，使用 flatMap 避免 Optional<Optional<T>> 的双层嵌套。flatMap 会自动展平结果。",
            "【filter 条件过滤】filter(Predicate) 如果值存在且满足条件则返回原 Optional，否则返回空 Optional。",
            "【orElse 默认值】orElse(T other) 如果值存在返回值，否则返回 other。注意：other 参数总是被求值，即使值存在。",
            "【orElseGet 懒加载】orElseGet(Supplier) 只在值不存在时才调用 Supplier 获取默认值，实现懒加载。"
        ],
        keyDifficulties: [
            "【orElse vs orElseGet】关键区别：orElse 的参数总是被求值（eager），orElseGet 的 Supplier 只在需要时调用（lazy）。性能测试显示差异可达数千倍。",
            "【何时用 orElseGet】当默认值需要计算（如数据库查询、网络调用）时必须用 orElseGet，避免不必要的开销。orElse 只适合常量或简单值。",
            "【map 返回 null】如果 map 的函数返回 null，结果是空 Optional 而不是包含 null 的 Optional。",
            "【链式调用顺序】map、filter、flatMap 的顺序影响结果。通常先 filter 过滤再 map 转换效率更高。"
        ],
        handsOnPath: [
            "使用 map 转换值：opt.map(String::toUpperCase).orElse(\"\");",
            "使用 flatMap 处理返回 Optional 的函数：person.flatMap(Person::getAddress).flatMap(Address::getCity);",
            "使用 filter 条件过滤：opt.filter(s -> s.length() > 3).orElse(\"too short\");",
            "对比 orElse 和 orElseGet 性能：分别用 orElse(expensiveOperation()) 和 orElseGet(() -> expensiveOperation()) 测试。",
            "链式调用：opt.filter(x -> x > 0).map(x -> x * 2).orElse(0);"
        ],
        selfCheck: [
            "map() 和 flatMap() 的区别是什么？什么时候需要用 flatMap？",
            "orElse() 和 orElseGet() 的关键区别是什么？什么时候用哪个？",
            "如果 map 的函数返回 null 会怎样？",
            "filter() 返回什么类型？如果条件不满足返回什么？",
            "为什么说 orElseGet 可以节省资源？"
        ],
        extensions: [
            "学习 orElseThrow(Supplier<Exception>) 在值缺失时抛出自定义异常。",
            "研究 Java 9 的 or(Supplier<Optional>) 方法：提供备选 Optional。",
            "了解 Java 9 的 ifPresentOrElse(Consumer, Runnable) 处理两种情况。",
            "探索 Optional 与 Stream 的互操作：opt.stream() 方法（Java 9+）。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html",
            "https://howtodoinjava.com/java8/optional-orelse-and-oreleseget/"
        ]
    },
    "jf-w3-3": {
        lessonId: "jf-w3-3",
        background: [
            "【返回值使用】Stephen Colebourne：Return Optional from getters when results may not exist——Optional 最适合用于方法返回值，明确表示结果可能缺失。",
            "【不用于字段】Colebourne：Never declare instance variables as Optional——不要将类字段声明为 Optional，在内部使用 null 管理，在 getter 中用 Optional.ofNullable() 包装返回。",
            "【不用于参数】避免将 Optional 作为方法参数，这会强制调用者创建 Optional 对象，增加不便。直接使用可空参数加 @Nullable 注解。",
            "【集合不用 Optional】返回集合时不要用 Optional<List>，而是返回空集合。空集合已经表达了「没有元素」的语义。",
            "【性能考虑】Optional 是短命对象，JVM 对短命对象优化良好。在 API 边界创建的 Optional 很快被回收，开销可接受。"
        ],
        keyDifficulties: [
            "【get() 反模式】直接调用 get() 前不检查 isPresent() 是最常见的 Optional 反模式，可能抛出 NoSuchElementException。",
            "【序列化问题】Optional 没有实现 Serializable 接口。在需要序列化的场景（如 JPA 实体、远程调用）不要使用 Optional 字段。",
            "【isPresent + get 反模式】if (opt.isPresent()) { return opt.get(); } 是反模式，应使用 orElse/orElseGet/map 等函数式方法。",
            "【Optional 包装集合】Optional<List<T>> 是反模式，应直接返回 List<T>，用空列表表示无结果。"
        ],
        handsOnPath: [
            "重构 getter 返回 Optional：public Optional<Address> getAddress() { return Optional.ofNullable(this.address); }",
            "使用 orElseThrow 替代 get：opt.orElseThrow(() -> new IllegalStateException(\"Value required\"));",
            "使用 map 链式处理替代 isPresent + get：opt.map(User::getName).orElse(\"Unknown\");",
            "处理嵌套 Optional：user.flatMap(User::getAddress).flatMap(Address::getCity).orElse(\"Unknown City\");",
            "使用 Java 9+ 的 ifPresentOrElse：opt.ifPresentOrElse(System.out::println, () -> System.out.println(\"Empty\"));"
        ],
        selfCheck: [
            "为什么不应该将类字段声明为 Optional 类型？",
            "为什么不推荐将 Optional 作为方法参数？",
            "为什么返回集合时不需要用 Optional 包装？",
            "if (opt.isPresent()) { opt.get()... } 为什么是反模式？应该怎么写？",
            "Optional 可以序列化吗？在什么场景需要注意？"
        ],
        extensions: [
            "研究 Stuart Marks 在 Devoxx 的 Optional 演讲和 12 条规则。",
            "了解 Vavr（原 Javaslang）库中增强的 Option 类型。",
            "学习 Kotlin 的可空类型系统作为 Optional 的替代方案。",
            "探索 Project Valhalla 对值类型的优化如何影响 Optional 性能。"
        ],
        sourceUrls: [
            "https://blog.joda.org/2015/08/java-se-8-optional-pragmatic-approach.html",
            "https://dev.java/learn/api/streams/optionals/"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w3-1": [
        {
            id: "jf-w3-1-q1",
            question: "Optional.of(null) 会发生什么？",
            options: [
                "返回空 Optional",
                "返回包含 null 的 Optional",
                "抛出 NullPointerException",
                "抛出 IllegalArgumentException"
            ],
            answer: 2,
            rationale: "Oracle 文档：Optional.of() throws NullPointerException if value is null。of() 只能用于确定非空的值。"
        },
        {
            id: "jf-w3-1-q2",
            question: "以下哪种方式最适合包装可能为 null 的值？",
            options: [
                "Optional.of(value)",
                "Optional.ofNullable(value)",
                "Optional.empty()",
                "new Optional(value)"
            ],
            answer: 1,
            rationale: "Optional.ofNullable(value) 是安全的包装方式，如果值为 null 返回空 Optional，否则返回包含值的 Optional。"
        },
        {
            id: "jf-w3-1-q3",
            question: "直接调用 optional.get() 的问题是什么？",
            options: [
                "性能较差",
                "可能抛出 NoSuchElementException",
                "返回 null",
                "需要类型转换"
            ],
            answer: 1,
            rationale: "Oracle 文档：get() throws NoSuchElementException if no value is present。应该先检查 isPresent() 或使用 orElse 等方法。"
        },
        {
            id: "jf-w3-1-q4",
            question: "ifPresent(Consumer) 方法的作用是什么？",
            options: [
                "检查值是否存在并返回 boolean",
                "如果值存在则执行 Consumer，否则不做任何事",
                "如果值不存在则执行 Consumer",
                "返回一个新的 Optional"
            ],
            answer: 1,
            rationale: "Oracle 文档：ifPresent invokes the consumer with the value if present, does nothing if value is absent——值存在时执行，不存在时什么都不做。"
        },
        {
            id: "jf-w3-1-q5",
            question: "Java 11 新增的 isEmpty() 方法与什么等价？",
            options: [
                "isPresent()",
                "!isPresent()",
                "get() == null",
                "equals(Optional.empty())"
            ],
            answer: 1,
            rationale: "isEmpty() 是 Java 11 新增的方法，等价于 !isPresent()，用于检查 Optional 是否为空。"
        },
        {
            id: "jf-w3-1-q6",
            question: "为什么不应该用 == 比较 Optional？",
            options: [
                "== 会抛出异常",
                "Optional 是值类型类，应使用 equals()",
                "== 比较太慢",
                "== 只比较引用不比较值"
            ],
            answer: 1,
            rationale: "Oracle 文档指出 Optional 是值类型类（value-based class），应避免使用身份敏感操作如 ==，应使用 equals() 比较。"
        },
        {
            id: "jf-w3-1-q7",
            question: "以下哪个是 Optional 的有效用法？",
            options: [
                "Optional<String> field = Optional.of(\"value\");",
                "public void setName(Optional<String> name) {}",
                "public Optional<String> getName() { return Optional.ofNullable(name); }",
                "Optional<List<String>> getNames() { return Optional.of(names); }"
            ],
            answer: 2,
            rationale: "Optional 最适合用于方法返回值。不应用于字段声明、方法参数或包装集合。"
        },
        {
            id: "jf-w3-1-q8",
            question: "Optional.empty() 的返回值有什么特点？",
            options: [
                "每次返回新实例",
                "返回 null",
                "返回缓存的单例实例",
                "抛出异常"
            ],
            answer: 2,
            rationale: "Optional.empty() 返回一个共享的空 Optional 实例，不会每次创建新对象，节省内存。"
        },
        {
            id: "jf-w3-1-q9",
            question: "两个 Optional 在什么情况下 equals() 返回 true？",
            options: [
                "只有当它们是同一个实例时",
                "当它们都为空，或都包含相等的值时",
                "只有当它们都不为空时",
                "总是返回 false"
            ],
            answer: 1,
            rationale: "Oracle 文档：Two Optionals are equal if both are empty, OR both contain equal values——两个都为空或都包含相等的值时相等。"
        },
        {
            id: "jf-w3-1-q10",
            question: "OptionalInt、OptionalLong、OptionalDouble 存在的原因是什么？",
            options: [
                "支持更大的数值范围",
                "避免自动装箱的性能开销",
                "提供更多方法",
                "支持并行处理"
            ],
            answer: 1,
            rationale: "OptionalInt 等原始类型特化版本避免了 int/Integer 之间的自动装箱开销，在性能敏感场景更高效。"
        },
        {
            id: "jf-w3-1-q11",
            question: "以下代码的输出是什么？\nOptional.ofNullable(null).isPresent()",
            options: [
                "true",
                "false",
                "抛出 NullPointerException",
                "抛出 NoSuchElementException"
            ],
            answer: 1,
            rationale: "Optional.ofNullable(null) 返回空 Optional，isPresent() 返回 false。这是 ofNullable 的安全行为。"
        },
        {
            id: "jf-w3-1-q12",
            question: "Optional 是在哪个 Java 版本引入的？",
            options: [
                "Java 7",
                "Java 8",
                "Java 9",
                "Java 11"
            ],
            answer: 1,
            rationale: "Oracle 文档：Optional introduced in Java 8。Optional 是 Java 8 函数式编程特性的一部分。"
        }
    ],
    "jf-w3-2": [
        {
            id: "jf-w3-2-q1",
            question: "map() 和 flatMap() 的主要区别是什么？",
            options: [
                "map 性能更好",
                "flatMap 用于函数返回 Optional 的情况，避免双层嵌套",
                "map 只能用于字符串",
                "flatMap 会修改原 Optional"
            ],
            answer: 1,
            rationale: "当映射函数返回 Optional 时，map 会产生 Optional<Optional<T>>。flatMap 会自动展平，返回 Optional<T>。"
        },
        {
            id: "jf-w3-2-q2",
            question: "orElse() 和 orElseGet() 的关键区别是什么？",
            options: [
                "返回类型不同",
                "orElse 的参数总是被求值，orElseGet 的 Supplier 只在需要时调用",
                "orElseGet 可以返回 null",
                "orElse 只能用于字符串"
            ],
            answer: 1,
            rationale: "orElse(value) 中 value 总是被求值（eager），orElseGet(supplier) 中 supplier 只在 Optional 为空时调用（lazy）。"
        },
        {
            id: "jf-w3-2-q3",
            question: "什么情况下应该使用 orElseGet 而不是 orElse？",
            options: [
                "默认值是常量时",
                "默认值需要计算、数据库查询或网络调用时",
                "总是应该用 orElseGet",
                "默认值是字符串时"
            ],
            answer: 1,
            rationale: "当默认值需要昂贵计算时必须用 orElseGet，避免不必要的开销。orElse 只适合常量或简单值。"
        },
        {
            id: "jf-w3-2-q4",
            question: "如果 map() 的函数返回 null，结果是什么？",
            options: [
                "包含 null 的 Optional",
                "空 Optional",
                "抛出 NullPointerException",
                "原 Optional 不变"
            ],
            answer: 1,
            rationale: "Oracle 文档：map returns Optional with mapped result (or empty if null)——如果映射函数返回 null，结果是空 Optional。"
        },
        {
            id: "jf-w3-2-q5",
            question: "filter(Predicate) 如果条件不满足返回什么？",
            options: [
                "null",
                "空 Optional",
                "原 Optional",
                "抛出异常"
            ],
            answer: 1,
            rationale: "Oracle 文档：filter returns Optional with value if predicate matches, returns empty Optional if predicate fails——条件不满足返回空 Optional。"
        },
        {
            id: "jf-w3-2-q6",
            question: "以下代码的结果是什么？\nOptional.of(\"hello\").map(String::length).orElse(0)",
            options: [
                "\"hello\"",
                "5",
                "0",
                "Optional<5>"
            ],
            answer: 1,
            rationale: "map(String::length) 将 \"hello\" 转换为 5，orElse(0) 返回存在的值 5。"
        },
        {
            id: "jf-w3-2-q7",
            question: "orElseThrow(Supplier) 在什么情况下抛出异常？",
            options: [
                "值存在时",
                "值不存在时",
                "总是抛出",
                "从不抛出"
            ],
            answer: 1,
            rationale: "Oracle 文档：orElseThrow returns value if present, throws exception created by supplier if absent——值不存在时抛出 Supplier 创建的异常。"
        },
        {
            id: "jf-w3-2-q8",
            question: "性能测试显示 orElse 和 orElseGet 在什么情况下差异最大？",
            options: [
                "默认值是常量时",
                "默认值需要昂贵计算时",
                "Optional 为空时",
                "Optional 不为空时"
            ],
            answer: 1,
            rationale: "当默认值计算昂贵时，orElse 每次都计算（即使不需要），orElseGet 只在需要时计算。测试显示性能差异可达数千倍。"
        },
        {
            id: "jf-w3-2-q9",
            question: "Java 9 新增的 or(Supplier<Optional>) 方法的作用是什么？",
            options: [
                "返回默认值",
                "如果当前 Optional 为空，返回 Supplier 提供的备选 Optional",
                "合并两个 Optional",
                "转换 Optional 类型"
            ],
            answer: 1,
            rationale: "or(Supplier<Optional>) 在当前 Optional 为空时返回 Supplier 提供的备选 Optional，支持链式备选逻辑。"
        },
        {
            id: "jf-w3-2-q10",
            question: "以下链式调用的推荐顺序是什么？",
            options: [
                "map -> filter -> orElse",
                "filter -> map -> orElse",
                "orElse -> filter -> map",
                "顺序不重要"
            ],
            answer: 1,
            rationale: "通常先 filter 过滤再 map 转换效率更高，因为可以减少不必要的转换操作。"
        },
        {
            id: "jf-w3-2-q11",
            question: "以下代码输出什么？\nOptional.empty().map(x -> x + \"!\").orElse(\"default\")",
            options: [
                "null",
                "\"!\"",
                "\"default\"",
                "抛出异常"
            ],
            answer: 2,
            rationale: "空 Optional 调用 map 仍然是空 Optional（不执行映射函数），orElse 返回默认值 \"default\"。"
        },
        {
            id: "jf-w3-2-q12",
            question: "flatMap 和 map 处理相同函数时，何时结果不同？",
            options: [
                "函数返回普通值时",
                "函数返回 Optional 时",
                "函数返回 null 时",
                "永远相同"
            ],
            answer: 1,
            rationale: "当函数返回 Optional 时，map 产生 Optional<Optional<T>>，flatMap 产生 Optional<T>。flatMap 自动展平嵌套。"
        }
    ],
    "jf-w3-3": [
        {
            id: "jf-w3-3-q1",
            question: "Optional 最适合用于什么场景？",
            options: [
                "类的实例字段",
                "方法参数",
                "方法返回值",
                "集合元素"
            ],
            answer: 2,
            rationale: "Colebourne：Return Optional from getters when results may not exist——Optional 最适合用于方法返回值，明确表示结果可能缺失。"
        },
        {
            id: "jf-w3-3-q2",
            question: "为什么不应该将类字段声明为 Optional？",
            options: [
                "会导致编译错误",
                "增加不必要的装箱开销，在内部使用 null 更高效",
                "Optional 不支持字段",
                "会导致内存泄漏"
            ],
            answer: 1,
            rationale: "Colebourne：Never declare instance variables as Optional——在内部使用 null 管理，在 getter 中用 Optional.ofNullable() 包装返回更高效。"
        },
        {
            id: "jf-w3-3-q3",
            question: "为什么不推荐将 Optional 作为方法参数？",
            options: [
                "会导致性能问题",
                "强制调用者创建 Optional 对象，增加不便",
                "会导致编译错误",
                "Optional 不能作为参数"
            ],
            answer: 1,
            rationale: "Colebourne：Avoid Optional in setters/constructors——不要强制调用者包装参数，直接使用可空参数更方便。"
        },
        {
            id: "jf-w3-3-q4",
            question: "返回集合时为什么不需要 Optional 包装？",
            options: [
                "Optional 不支持集合",
                "空集合已经表达了「没有元素」的语义",
                "会导致性能问题",
                "编译器不允许"
            ],
            answer: 1,
            rationale: "返回 List/Set 等集合时，空集合本身就表示没有结果，不需要再用 Optional<List> 包装。"
        },
        {
            id: "jf-w3-3-q5",
            question: "以下哪个是 Optional 的常见反模式？",
            options: [
                "opt.map(x -> x + 1).orElse(0)",
                "if (opt.isPresent()) { return opt.get(); }",
                "opt.orElseThrow(() -> new RuntimeException())",
                "opt.filter(x -> x > 0).orElse(0)"
            ],
            answer: 1,
            rationale: "if (opt.isPresent()) { opt.get()... } 是反模式，应使用 map/orElse 等函数式方法：opt.map(x -> x).orElse(default)。"
        },
        {
            id: "jf-w3-3-q6",
            question: "Optional 为什么不能序列化？",
            options: [
                "技术上无法实现",
                "Optional 没有实现 Serializable 接口",
                "会导致性能问题",
                "其实可以序列化"
            ],
            answer: 1,
            rationale: "Optional 没有实现 Serializable 接口。在需要序列化的场景（JPA 实体、远程调用）不要使用 Optional 字段。"
        },
        {
            id: "jf-w3-3-q7",
            question: "以下哪个是正确的 getter 写法？",
            options: [
                "public Optional<String> getName() { return name; }",
                "public Optional<String> getName() { return Optional.ofNullable(name); }",
                "public String getName() { return Optional.of(name).get(); }",
                "public Optional<String> getName() { return Optional.of(name); }"
            ],
            answer: 1,
            rationale: "在 getter 中使用 Optional.ofNullable() 包装可能为 null 的字段，安全地返回 Optional。"
        },
        {
            id: "jf-w3-3-q8",
            question: "Java 9 新增的 ifPresentOrElse 的作用是什么？",
            options: [
                "返回值或默认值",
                "值存在时执行 Consumer，不存在时执行 Runnable",
                "总是执行两个操作",
                "检查两个 Optional"
            ],
            answer: 1,
            rationale: "ifPresentOrElse(Consumer, Runnable) 在值存在时执行 Consumer 处理值，不存在时执行 Runnable 作为备选操作。"
        },
        {
            id: "jf-w3-3-q9",
            question: "为什么 Colebourne 说 Optional 不会造成性能问题？",
            options: [
                "Optional 是编译时优化的",
                "Optional 是短命对象，JVM 对短命对象优化良好",
                "Optional 使用原始类型",
                "Optional 是单例的"
            ],
            answer: 1,
            rationale: "Colebourne：JVM handles these short-lived objects well——在 API 边界创建的 Optional 很快被回收，HotSpot 对短命对象有良好优化。"
        },
        {
            id: "jf-w3-3-q10",
            question: "处理嵌套 Optional（如获取用户的地址的城市）应该用什么方法？",
            options: [
                "多层 map 调用",
                "flatMap 链式调用",
                "isPresent 多层嵌套检查",
                "get 直接获取"
            ],
            answer: 1,
            rationale: "使用 flatMap 链式调用：user.flatMap(User::getAddress).flatMap(Address::getCity)，避免 Optional 嵌套和 null 检查。"
        },
        {
            id: "jf-w3-3-q11",
            question: "以下哪个不是 Stuart Marks 的 Optional 规则？",
            options: [
                "不要用 Optional 作为字段类型",
                "不要用 Optional.get() 前不检查",
                "总是使用 Optional 作为方法参数",
                "不要用 Optional 包装集合"
            ],
            answer: 2,
            rationale: "Stuart Marks 明确建议不要将 Optional 作为方法参数，这会给调用者带来不便。Optional 主要用于返回值。"
        },
        {
            id: "jf-w3-3-q12",
            question: "Optional.stream() 方法（Java 9+）的作用是什么？",
            options: [
                "将 Optional 转换为 List",
                "返回空流或单元素流，便于与 Stream API 集成",
                "检查 Optional 是否为流类型",
                "创建 Optional 的并行流"
            ],
            answer: 1,
            rationale: "dev.java：Optional.stream() opens a stream on the content——返回空流（Optional 为空）或单元素流（Optional 有值），便于在 flatMap 中过滤空值。"
        }
    ]
}
