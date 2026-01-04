import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "jf-w9-1": {
        lessonId: "jf-w9-1",
        background: [
            "【Record 定义】JEP 395：Records are classes that serve as transparent carriers for immutable data——Record 是不可变数据的透明载体类。",
            "【声明语法】record Point(int x, int y) {} 声明记录，括号内是组件（components）列表。",
            "【自动生成】JEP 395：Records automatically generate fields, accessors, equals, hashCode, toString——自动生成所有样板代码。",
            "【不可变性】组件字段是 private final，没有 setter，天然线程安全。",
            "【Java 16 正式】JEP 395：Records finalized in JDK 16——Java 14/15 预览，Java 16 正式发布。"
        ],
        keyDifficulties: [
            "【访问器命名】组件访问器方法名与组件名相同：x() 而非 getX()。这是 Record 的约定。",
            "【equals/hashCode】JEP 395：Based on component values——基于所有组件值实现，自动且正确。",
            "【toString 格式】toString() 返回 Point[x=1, y=2] 格式，包含组件名和值。",
            "【不能继承】Record 隐式继承 java.lang.Record，不能 extends 其他类，但可以实现接口。"
        ],
        handsOnPath: [
            "声明 Record：record Point(int x, int y) {}",
            "创建实例：Point p = new Point(1, 2);",
            "访问组件：int x = p.x(); int y = p.y(); // 不是 getX()",
            "比较相等：new Point(1, 2).equals(new Point(1, 2)) // true",
            "toString：System.out.println(p); // Point[x=1, y=2]",
            "实现接口：record Point(int x, int y) implements Comparable<Point> { ... }"
        ],
        selfCheck: [
            "Record 自动生成哪些成员？",
            "Record 的访问器方法命名规则是什么？与 JavaBean 有什么不同？",
            "为什么说 Record 是不可变的？",
            "Record 可以继承其他类吗？可以实现接口吗？",
            "Record 的 equals() 如何判断相等？"
        ],
        extensions: [
            "研究 Record 与 Lombok @Value 的对比。",
            "了解 Record 在 JPA/Hibernate 中的使用限制。",
            "探索 Record 的反射 API：getRecordComponents()。",
            "学习 Record 与 Jackson JSON 序列化的配合。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/395",
            "https://dev.java/learn/records/"
        ]
    },
    "jf-w9-2": {
        lessonId: "jf-w9-2",
        background: [
            "【紧凑构造器】JEP 395：Compact constructors eliminate parameter lists——省略参数列表的简洁构造器语法。",
            "【验证用途】JEP 395：Focus on validating parameters without tedious field assignment——用于参数验证，字段赋值由编译器完成。",
            "【静态成员】Record 可以有 static 字段、static 方法和 static 初始化块。",
            "【实例方法】Record 可以添加实例方法，但不能添加实例字段。",
            "【规范构造器】canonical constructor 是与组件列表匹配的构造器，可以显式声明以添加验证。"
        ],
        keyDifficulties: [
            "【紧凑 vs 规范】紧凑构造器省略参数和赋值，规范构造器可以完整控制。两者不能同时存在。",
            "【字段赋值时机】JEP 395：Compiler automatically assigns fields after compact constructor body——紧凑构造器执行完后自动赋值。",
            "【不能声明实例字段】JEP 395：Records cannot declare instance fields——所有字段必须在组件列表中声明。",
            "【隐式 final】Record 类隐式是 final 的，不能被继承。组件字段也是 final 的。"
        ],
        handsOnPath: [
            "紧凑构造器：record Range(int lo, int hi) { Range { if (lo > hi) throw new IllegalArgumentException(); } }",
            "规范构造器：record Point(int x, int y) { public Point(int x, int y) { this.x = x; this.y = y; } }",
            "添加实例方法：record Point(int x, int y) { public double distanceFromOrigin() { return Math.hypot(x, y); } }",
            "静态工厂：record Point(int x, int y) { public static Point origin() { return new Point(0, 0); } }",
            "自定义访问器：record Point(int x, int y) { @Override public int x() { return Math.abs(x); } }",
            "实现接口方法：record Point(int x, int y) implements Comparable<Point> { public int compareTo(Point o) { ... } }"
        ],
        selfCheck: [
            "紧凑构造器和规范构造器有什么区别？",
            "紧凑构造器中需要手动赋值字段吗？为什么？",
            "Record 可以有实例字段吗？为什么？",
            "如何在 Record 中添加验证逻辑？",
            "Record 可以被继承吗？为什么？"
        ],
        extensions: [
            "研究 Record 的规范化（canonical）和紧凑（compact）构造器的字节码差异。",
            "了解 Record 的序列化机制和 serialVersionUID。",
            "探索 Record 与 Sealed Classes 的组合使用。",
            "学习如何为 Record 添加 Builder 模式。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/395",
            "https://dev.java/learn/records/"
        ]
    },
    "jf-w9-3": {
        lessonId: "jf-w9-3",
        background: [
            "【DTO 场景】JEP 395：Records excel at modeling immutable data aggregates——非常适合作为数据传输对象。",
            "【Stream 中使用】Record 适合在 Stream 操作中作为中间值载体，简洁高效。",
            "【Map Key】Record 自动正确实现 hashCode 和 equals，可安全用作 Map 的 key。",
            "【Local Record】可以在方法内部定义 Record，作为局部数据结构。",
            "【与框架集成】现代框架如 Spring、Jackson 已支持 Record。"
        ],
        keyDifficulties: [
            "【JPA 限制】JPA 实体需要无参构造器和 setter，传统上不适合 Record。Hibernate 6+ 有改进支持。",
            "【序列化注意】JEP 395：Records cannot customize serialization via writeObject/readObject——不能自定义序列化方法。",
            "【可变组件】组件本身如果是可变对象（如 List），Record 不能阻止其被修改。需要在构造器中防御性拷贝。",
            "【Local Record 作用域】方法内定义的 Record 只在该方法内可见，不能在外部使用。"
        ],
        handsOnPath: [
            "DTO 示例：record UserDTO(Long id, String name, String email) {}",
            "Stream 使用：records.stream().map(r -> new ProcessedRecord(r.id(), transform(r.data()))).toList();",
            "Map Key：Map<Point, String> map = new HashMap<>(); map.put(new Point(1, 2), \"A\");",
            "Local Record：void process() { record Pair(int a, int b) {} var p = new Pair(1, 2); }",
            "Jackson 反序列化：objectMapper.readValue(json, UserDTO.class);",
            "防御性拷贝：record Container(List<String> items) { Container { items = List.copyOf(items); } }"
        ],
        selfCheck: [
            "为什么 Record 适合作为 DTO？",
            "Record 作为 Map key 有什么优势？",
            "Local Record 的作用域是什么？有什么用途？",
            "如果 Record 组件是可变对象，如何保证不可变性？",
            "Record 与 JPA 实体有什么兼容性问题？"
        ],
        extensions: [
            "研究 Spring Boot 3.x 对 Record 的支持。",
            "了解 Record 在 GraphQL schema 映射中的应用。",
            "探索 Record Patterns（Java 21）解构 Record。",
            "学习 Record 与微服务 API 设计的最佳实践。"
        ],
        sourceUrls: [
            "https://dev.java/learn/records/",
            "https://openjdk.org/jeps/395"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w9-1": [
        {
            id: "jf-w9-1-q1",
            question: "Record 在哪个 Java 版本成为正式特性？",
            options: [
                "Java 14（预览）",
                "Java 15（预览）",
                "Java 16（正式）",
                "Java 17"
            ],
            answer: 2,
            rationale: "JEP 395：Records finalized in JDK 16 after two preview releases in Java 14 and 15。"
        },
        {
            id: "jf-w9-1-q2",
            question: "record Point(int x, int y) {} 自动生成哪些成员？",
            options: [
                "只有构造器",
                "构造器、getter、setter",
                "构造器、访问器、equals、hashCode、toString",
                "只有 equals 和 hashCode"
            ],
            answer: 2,
            rationale: "JEP 395：Records automatically generate fields, accessors, equals, hashCode, toString——完整的样板代码。"
        },
        {
            id: "jf-w9-1-q3",
            question: "Record Point(int x, int y) 的访问器方法名是什么？",
            options: [
                "getX() 和 getY()",
                "x() 和 y()",
                "get_x() 和 get_y()",
                "X() 和 Y()"
            ],
            answer: 1,
            rationale: "Record 的访问器方法名与组件名相同：x() 而非 getX()，这是 Record 的命名约定。"
        },
        {
            id: "jf-w9-1-q4",
            question: "Record 可以继承其他类吗？",
            options: [
                "可以",
                "不可以，隐式继承 java.lang.Record",
                "只能继承抽象类",
                "只能继承 Object"
            ],
            answer: 1,
            rationale: "JEP 395：Records cannot extend other classes——隐式继承 java.lang.Record，不能 extends 其他类。"
        },
        {
            id: "jf-w9-1-q5",
            question: "Record 可以实现接口吗？",
            options: [
                "不可以",
                "可以",
                "只能实现函数式接口",
                "只能实现 Serializable"
            ],
            answer: 1,
            rationale: "Record 不能继承类，但可以实现任意数量的接口：record Point(int x, int y) implements Comparable<Point> {}。"
        },
        {
            id: "jf-w9-1-q6",
            question: "new Point(1, 2).equals(new Point(1, 2)) 返回什么？",
            options: [
                "false（不同实例）",
                "true（组件值相同）",
                "编译错误",
                "取决于实现"
            ],
            answer: 1,
            rationale: "JEP 395：equals and hashCode based on component values——基于组件值比较，值相同则相等。"
        },
        {
            id: "jf-w9-1-q7",
            question: "Record 的 toString() 返回什么格式？",
            options: [
                "Point@hashcode",
                "Point{x=1, y=2}",
                "Point[x=1, y=2]",
                "(1, 2)"
            ],
            answer: 2,
            rationale: "Record 的 toString() 返回 ClassName[component1=value1, component2=value2] 格式。"
        },
        {
            id: "jf-w9-1-q8",
            question: "Record 的组件字段有什么特性？",
            options: [
                "public final",
                "private final",
                "protected final",
                "package-private"
            ],
            answer: 1,
            rationale: "组件自动生成 private final 字段，通过同名访问器方法访问。"
        },
        {
            id: "jf-w9-1-q9",
            question: "为什么说 Record 是不可变的？",
            options: [
                "有 final 关键字",
                "组件字段是 final 且没有 setter",
                "使用了 immutable 注解",
                "继承了 Immutable 类"
            ],
            answer: 1,
            rationale: "Record 的所有组件字段都是 private final，且不生成 setter 方法，创建后不能修改。"
        },
        {
            id: "jf-w9-1-q10",
            question: "Record 类本身有什么修饰符特性？",
            options: [
                "可以是 abstract",
                "隐式是 final",
                "可以是 sealed",
                "必须是 public"
            ],
            answer: 1,
            rationale: "JEP 395：Records cannot be abstract or non-final——Record 类隐式是 final 的，不能被继承。"
        },
        {
            id: "jf-w9-1-q11",
            question: "如何创建 Record 实例？",
            options: [
                "Point.create(1, 2)",
                "new Point(1, 2)",
                "Point.of(1, 2)",
                "Point.builder().x(1).y(2).build()"
            ],
            answer: 1,
            rationale: "使用自动生成的规范构造器：new Point(1, 2)，也可以添加静态工厂方法。"
        },
        {
            id: "jf-w9-1-q12",
            question: "Record 适合什么场景？",
            options: [
                "需要继承层次的实体类",
                "不可变数据载体，如 DTO、坐标等",
                "需要 ORM 映射的实体",
                "需要动态修改的配置类"
            ],
            answer: 1,
            rationale: "JEP 395：Records excel at modeling immutable data aggregates——适合简单数据载体、DTO、值对象等。"
        }
    ],
    "jf-w9-2": [
        {
            id: "jf-w9-2-q1",
            question: "什么是紧凑构造器（Compact Constructor）？",
            options: [
                "没有参数的构造器",
                "省略参数列表的构造器语法",
                "私有构造器",
                "静态构造器"
            ],
            answer: 1,
            rationale: "JEP 395：Compact constructors eliminate parameter lists——紧凑构造器省略参数列表，用于验证逻辑。"
        },
        {
            id: "jf-w9-2-q2",
            question: "紧凑构造器中需要手动赋值字段吗？",
            options: [
                "需要，必须手动赋值",
                "不需要，编译器在构造器执行后自动赋值",
                "只需要赋值部分字段",
                "取决于组件类型"
            ],
            answer: 1,
            rationale: "JEP 395：Compiler automatically assigns fields after compact constructor body——自动赋值。"
        },
        {
            id: "jf-w9-2-q3",
            question: "紧凑构造器的主要用途是什么？",
            options: [
                "提高性能",
                "参数验证和规范化",
                "实现继承",
                "生成文档"
            ],
            answer: 1,
            rationale: "JEP 395：Focus on validating parameters without tedious field assignment——验证参数，无需写赋值代码。"
        },
        {
            id: "jf-w9-2-q4",
            question: "Record 可以声明实例字段吗？",
            options: [
                "可以",
                "不可以，所有字段必须在组件列表中",
                "只能声明 final 字段",
                "只能声明 transient 字段"
            ],
            answer: 1,
            rationale: "JEP 395：Records cannot declare instance fields——所有状态必须在组件列表中声明。"
        },
        {
            id: "jf-w9-2-q5",
            question: "Record 可以有 static 成员吗？",
            options: [
                "不可以",
                "可以有 static 字段、方法和初始化块",
                "只能有 static 方法",
                "只能有 static final 常量"
            ],
            answer: 1,
            rationale: "Record 可以有静态成员：static 字段、static 方法、static 初始化块都可以声明。"
        },
        {
            id: "jf-w9-2-q6",
            question: "Record 可以添加实例方法吗？",
            options: [
                "不可以",
                "可以",
                "只能添加 final 方法",
                "只能重写已有方法"
            ],
            answer: 1,
            rationale: "Record 可以添加实例方法来扩展功能，如 distanceFromOrigin() 计算距离。"
        },
        {
            id: "jf-w9-2-q7",
            question: "紧凑构造器和规范构造器可以同时存在吗？",
            options: [
                "可以",
                "不可以，只能有一个",
                "取决于组件数量",
                "取决于访问修饰符"
            ],
            answer: 1,
            rationale: "紧凑构造器和规范构造器是互斥的，同一个 Record 只能有一个。"
        },
        {
            id: "jf-w9-2-q8",
            question: "如何在紧凑构造器中修改参数值？",
            options: [
                "不能修改",
                "直接给参数名赋值：x = Math.abs(x);",
                "使用 this.x = value",
                "调用 setter"
            ],
            answer: 1,
            rationale: "在紧凑构造器中可以直接修改参数值，编译器会用修改后的值赋给字段。"
        },
        {
            id: "jf-w9-2-q9",
            question: "可以自定义 Record 的访问器方法吗？",
            options: [
                "不可以",
                "可以，使用 @Override",
                "只能添加新方法",
                "只能私有化"
            ],
            answer: 1,
            rationale: "可以重写访问器方法添加逻辑：@Override public int x() { return Math.abs(x); }。"
        },
        {
            id: "jf-w9-2-q10",
            question: "Record 可以被继承吗？",
            options: [
                "可以",
                "不可以，Record 隐式是 final",
                "只能被其他 Record 继承",
                "只能被 sealed class 继承"
            ],
            answer: 1,
            rationale: "Record 类隐式是 final 的，不能被任何类继承。"
        },
        {
            id: "jf-w9-2-q11",
            question: "Record 可以声明 native 方法吗？",
            options: [
                "可以",
                "不可以",
                "只能声明 static native",
                "取决于 JVM"
            ],
            answer: 1,
            rationale: "JEP 395：Records cannot declare native methods——不允许声明 native 方法。"
        },
        {
            id: "jf-w9-2-q12",
            question: "以下哪个是有效的紧凑构造器？",
            options: [
                "public Point() { }",
                "Range { if (lo > hi) throw new IllegalArgumentException(); }",
                "public Range(int lo, int hi) { }",
                "private Range { }"
            ],
            answer: 1,
            rationale: "紧凑构造器省略参数列表和赋值，只写验证逻辑：Range { validation; }。"
        }
    ],
    "jf-w9-3": [
        {
            id: "jf-w9-3-q1",
            question: "Record 作为 Map key 有什么优势？",
            options: [
                "性能更好",
                "自动正确实现 hashCode 和 equals",
                "占用内存更少",
                "支持并发"
            ],
            answer: 1,
            rationale: "Record 自动基于组件值实现 hashCode 和 equals，作为 Map key 安全可靠。"
        },
        {
            id: "jf-w9-3-q2",
            question: "什么是 Local Record？",
            options: [
                "本地化的 Record",
                "在方法内部定义的 Record",
                "只读的 Record",
                "数据库本地 Record"
            ],
            answer: 1,
            rationale: "Local Record 是在方法内部定义的 Record 类，作用域仅限该方法。"
        },
        {
            id: "jf-w9-3-q3",
            question: "如果 Record 组件是 List，如何保证不可变性？",
            options: [
                "无法保证",
                "在紧凑构造器中使用 List.copyOf() 防御性拷贝",
                "声明为 final",
                "使用 synchronized"
            ],
            answer: 1,
            rationale: "可变组件需要防御性拷贝：record Container(List<String> items) { Container { items = List.copyOf(items); } }。"
        },
        {
            id: "jf-w9-3-q4",
            question: "Record 与传统 JPA 实体有什么兼容性问题？",
            options: [
                "没有问题",
                "JPA 需要无参构造器和 setter，Record 都没有",
                "Record 不支持注解",
                "Record 不能有 ID 字段"
            ],
            answer: 1,
            rationale: "传统 JPA 实体需要无参构造器和 setter，Record 是不可变的且没有无参构造器。"
        },
        {
            id: "jf-w9-3-q5",
            question: "Record 适合作为 DTO 的原因是什么？",
            options: [
                "支持继承",
                "不可变、自动 equals/hashCode、代码简洁",
                "可以修改字段",
                "性能更好"
            ],
            answer: 1,
            rationale: "DTO 通常只是数据载体，Record 的不可变性、自动方法生成和简洁语法非常适合。"
        },
        {
            id: "jf-w9-3-q6",
            question: "Record 可以自定义序列化方法吗？",
            options: [
                "可以，实现 writeObject",
                "不可以，Record 不允许自定义序列化",
                "只能用注解配置",
                "只能用 Externalizable"
            ],
            answer: 1,
            rationale: "JEP 395：Records cannot customize serialization via writeObject/readObject——不能自定义序列化方法。"
        },
        {
            id: "jf-w9-3-q7",
            question: "Jackson 如何反序列化 Record？",
            options: [
                "使用 setter 方法",
                "使用规范构造器",
                "使用反射修改字段",
                "不支持 Record"
            ],
            answer: 1,
            rationale: "Jackson 2.12+ 支持 Record，通过调用规范构造器进行反序列化。"
        },
        {
            id: "jf-w9-3-q8",
            question: "Record 在 Stream 中的常见用途是什么？",
            options: [
                "作为数据源",
                "作为中间值载体，存储转换结果",
                "替代 Stream API",
                "性能优化"
            ],
            answer: 1,
            rationale: "JEP 395：Stream processing with intermediate values——Record 适合在 map 操作中封装中间结果。"
        },
        {
            id: "jf-w9-3-q9",
            question: "Local Record 的作用域是什么？",
            options: [
                "整个类",
                "整个包",
                "只在定义它的方法内",
                "整个模块"
            ],
            answer: 2,
            rationale: "Local Record 是方法内定义的，作用域仅限该方法，不能在外部使用。"
        },
        {
            id: "jf-w9-3-q10",
            question: "Record 的反射 API 新增了什么方法？",
            options: [
                "getFields()",
                "getRecordComponents()",
                "getMembers()",
                "getProperties()"
            ],
            answer: 1,
            rationale: "Class.getRecordComponents() 返回 Record 的组件信息数组。"
        },
        {
            id: "jf-w9-3-q11",
            question: "Spring Boot 3.x 对 Record 的支持情况如何？",
            options: [
                "不支持",
                "完全支持，可用于 @ConfigurationProperties 等",
                "只支持 Controller",
                "需要额外配置"
            ],
            answer: 1,
            rationale: "Spring Boot 3.x 完全支持 Record，可用于配置属性、DTO、请求体等场景。"
        },
        {
            id: "jf-w9-3-q12",
            question: "Record 与 Sealed Classes 如何配合使用？",
            options: [
                "不能配合",
                "Record 可以作为 Sealed 类的 permits 子类",
                "只能在同一文件",
                "需要特殊注解"
            ],
            answer: 1,
            rationale: "Record 隐式 final，非常适合作为 Sealed 类层次的叶子节点实现代数数据类型。"
        }
    ]
}
