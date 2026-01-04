import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "jf-w5-1": {
        lessonId: "jf-w5-1",
        background: [
            "【模块化动机】JPMS（Java Platform Module System）解决 JAR 地狱和类路径问题：依赖冲突、缺少强封装、难以维护大型代码库。",
            "【模块定义】模块是包的容器，通过 module-info.java 文件声明模块名、导出的包和依赖的模块。",
            "【JDK 模块化】JDK 本身已模块化为约 90 个模块，java.base 是根模块，所有模块隐式依赖它。",
            "【module-info.java】位于源码根目录，使用 module 关键字声明模块：module com.example.myapp { }。",
            "【强封装】未通过 exports 导出的包对其他模块不可见，实现了真正的封装。"
        ],
        keyDifficulties: [
            "【模块 vs 包】包是类的容器，模块是包的容器。一个模块可以包含多个包，但一个包只能属于一个模块。",
            "【可靠配置】requires 显式声明依赖，编译时和运行时都会检查。解决了类路径的隐式依赖问题。",
            "【兼容性】可以使用未模块化的 JAR（自动模块），但建议逐步迁移到模块化。",
            "【服务机制】uses 和 provides 实现服务提供者接口（SPI），支持松耦合的服务发现。"
        ],
        handsOnPath: [
            "创建 module-info.java：module com.example { exports com.example.api; requires java.sql; }",
            "使用 jdeps 分析依赖：jdeps --module-path mods -s myapp.jar",
            "编译模块：javac -d out --module-source-path src $(find src -name \"*.java\")",
            "运行模块：java --module-path out -m com.example/com.example.Main",
            "查看 JDK 模块：java --list-modules"
        ],
        selfCheck: [
            "module-info.java 应该放在什么位置？",
            "exports 和 requires 分别声明什么？",
            "什么是 java.base 模块？为什么不需要显式 requires？",
            "模块化如何解决 JAR 地狱问题？",
            "如何使用未模块化的第三方 JAR？"
        ],
        extensions: [
            "学习 jlink 工具创建自定义运行时镜像。",
            "研究自动模块（Automatic Modules）和未命名模块（Unnamed Module）的区别。",
            "了解模块层（Module Layer）和多版本 JAR。",
            "探索 ServiceLoader 在模块系统中的使用。"
        ],
        sourceUrls: [
            "https://openjdk.org/projects/jigsaw/quick-start",
            "https://dev.java/learn/modules/"
        ]
    },
    "jf-w5-2": {
        lessonId: "jf-w5-2",
        background: [
            "【exports】exports pkg 将包导出给所有模块，exports pkg to mod1, mod2 限定导出给特定模块。",
            "【requires】requires mod 声明对模块的编译时和运行时依赖。requires static 仅编译时依赖（可选依赖）。",
            "【requires transitive】requires transitive mod 传递依赖：依赖当前模块的模块也自动依赖 mod。",
            "【opens】opens pkg 允许运行时反射访问（即使未 exports）。opens pkg to mod 限定开放给特定模块。",
            "【open module】整个模块声明为 open module 允许所有包的反射访问，用于框架兼容。"
        ],
        keyDifficulties: [
            "【exports vs opens】exports 允许编译时访问公共 API，opens 允许运行时反射访问私有成员。框架（如 Spring、Hibernate）需要 opens。",
            "【transitive 用途】当你的 API 暴露了依赖模块的类型时，使用 requires transitive 让调用者自动获得依赖。",
            "【反射限制】默认情况下，反射无法访问未 opens 的包中的非公共成员。--add-opens 可在运行时绕过（不推荐）。",
            "【服务提供】provides ServiceInterface with ImplClass 声明服务实现，uses ServiceInterface 声明服务消费。"
        ],
        handsOnPath: [
            "导出包：module mymod { exports com.example.api; }",
            "限定导出：module mymod { exports com.example.internal to com.example.tests; }",
            "传递依赖：module mymod { requires transitive java.sql; }",
            "开放反射：module mymod { opens com.example.entity to org.hibernate.core; }",
            "声明服务：module mymod { provides MyService with MyServiceImpl; uses MyService; }"
        ],
        selfCheck: [
            "exports 和 opens 的区别是什么？什么时候用 opens？",
            "requires transitive 的作用是什么？什么时候需要用？",
            "如何让 Hibernate 能反射访问实体类？",
            "provides 和 uses 如何配合实现服务发现？",
            "--add-opens JVM 参数的作用是什么？为什么不推荐使用？"
        ],
        extensions: [
            "研究 Spring Boot 在模块化环境下的配置。",
            "了解 Gradle 和 Maven 对模块化项目的支持。",
            "学习 qualified exports/opens 的安全性考量。",
            "探索 jdeps 工具分析模块依赖图。"
        ],
        sourceUrls: [
            "https://dev.java/learn/modules/",
            "https://openjdk.org/projects/jigsaw/quick-start"
        ]
    },
    "jf-w5-3": {
        lessonId: "jf-w5-3",
        background: [
            "【JShell】Java 9 引入的 REPL（Read-Eval-Print-Loop）工具，支持交互式执行 Java 代码片段，快速验证和探索。",
            "【集合工厂方法】List.of()、Set.of()、Map.of() 创建不可变集合，语法简洁，无需 Arrays.asList 或 new ArrayList。",
            "【不可变特性】工厂方法返回的集合是不可变的：不能 add、remove、set。尝试修改抛出 UnsupportedOperationException。",
            "【null 限制】工厂方法不允许 null 元素或键/值，传入 null 抛出 NullPointerException。与 Arrays.asList 行为不同。",
            "【copyOf】List.copyOf()、Set.copyOf()、Map.copyOf() 创建现有集合的不可变副本。"
        ],
        keyDifficulties: [
            "【JShell 限制】JShell 适合快速实验，不适合完整程序开发。没有类定义的限制，代码片段直接执行。",
            "【Map.of 限制】Map.of() 最多支持 10 个键值对，超过需要用 Map.ofEntries(Map.entry(k1,v1), ...)。",
            "【Set.of 重复】Set.of() 如果传入重复元素抛出 IllegalArgumentException。Map.of 传入重复键同理。",
            "【不可变 vs unmodifiable】工厂方法返回的是真正不可变的集合（结构和内容都不可变），Collections.unmodifiable* 只是视图。"
        ],
        handsOnPath: [
            "启动 JShell：在终端输入 jshell",
            "JShell 中执行：var list = List.of(1, 2, 3); list.size();",
            "创建不可变 List：List<String> names = List.of(\"Alice\", \"Bob\", \"Carol\");",
            "创建不可变 Map：Map<String, Integer> scores = Map.of(\"Alice\", 90, \"Bob\", 85);",
            "创建不可变副本：List<String> copy = List.copyOf(mutableList);",
            "尝试修改并观察异常：List.of(1,2,3).add(4); // UnsupportedOperationException"
        ],
        selfCheck: [
            "JShell 的主要用途是什么？有什么限制？",
            "List.of() 返回的集合有什么特点？能否添加元素？",
            "Map.of() 最多支持多少个键值对？超过怎么办？",
            "List.of(null) 会发生什么？与 Arrays.asList(null) 有什么不同？",
            "copyOf 和 unmodifiableList 有什么区别？"
        ],
        extensions: [
            "学习 JShell 的 /save、/open、/edit 等命令。",
            "研究 Stream.of() 和 Stream.ofNullable() 的区别。",
            "了解 Java 10 的 copyOf 方法实现细节。",
            "探索 Guava 的 Immutable 集合与 JDK 不可变集合的对比。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/9/jshell/",
            "https://dev.java/learn/api/collections-framework/convenience-factory-methods/"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w5-1": [
        {
            id: "jf-w5-1-q1",
            question: "module-info.java 应该放在什么位置？",
            options: [
                "任意包目录下",
                "源码根目录",
                "resources 目录",
                "META-INF 目录"
            ],
            answer: 1,
            rationale: "module-info.java 必须放在源码根目录（模块根），与顶级包同级。"
        },
        {
            id: "jf-w5-1-q2",
            question: "所有模块隐式依赖哪个模块？",
            options: [
                "java.lang",
                "java.util",
                "java.base",
                "java.core"
            ],
            answer: 2,
            rationale: "java.base 是根模块，包含 java.lang、java.util 等核心包，所有模块自动依赖它，无需 requires。"
        },
        {
            id: "jf-w5-1-q3",
            question: "JPMS 主要解决什么问题？",
            options: [
                "提高运行速度",
                "JAR 地狱、缺少强封装、类路径问题",
                "简化语法",
                "支持多线程"
            ],
            answer: 1,
            rationale: "JPMS 解决了传统类路径的问题：依赖冲突（JAR 地狱）、缺少强封装、难以维护大型代码库。"
        },
        {
            id: "jf-w5-1-q4",
            question: "未通过 exports 导出的包会怎样？",
            options: [
                "可以被任何模块访问",
                "只能通过反射访问",
                "对其他模块完全不可见",
                "只读访问"
            ],
            answer: 2,
            rationale: "模块系统实现强封装，未导出的包对其他模块完全不可见，无法在编译时或运行时访问。"
        },
        {
            id: "jf-w5-1-q5",
            question: "如何查看 JDK 包含哪些模块？",
            options: [
                "java --modules",
                "java --list-modules",
                "jmod --list",
                "javac --show-modules"
            ],
            answer: 1,
            rationale: "java --list-modules 列出所有可用模块，包括 JDK 模块和模块路径上的模块。"
        },
        {
            id: "jf-w5-1-q6",
            question: "模块与包的关系是什么？",
            options: [
                "模块是包的别名",
                "包是模块的容器",
                "模块是包的容器，一个包只能属于一个模块",
                "它们是同一概念"
            ],
            answer: 2,
            rationale: "模块是包的容器，一个模块可以包含多个包。一个包只能属于一个模块，不能跨模块。"
        },
        {
            id: "jf-w5-1-q7",
            question: "什么是自动模块（Automatic Module）？",
            options: [
                "自动生成的模块",
                "放在模块路径上的未模块化 JAR",
                "只读模块",
                "系统模块"
            ],
            answer: 1,
            rationale: "自动模块是放在模块路径上的未模块化 JAR，系统自动为其创建模块，名称来自 JAR 文件名。"
        },
        {
            id: "jf-w5-1-q8",
            question: "jdeps 工具的作用是什么？",
            options: [
                "编译模块",
                "运行模块",
                "分析依赖关系",
                "打包模块"
            ],
            answer: 2,
            rationale: "jdeps 是依赖分析工具，可以分析类或 JAR 的依赖关系，帮助迁移到模块系统。"
        },
        {
            id: "jf-w5-1-q9",
            question: "编译模块化项目使用什么参数？",
            options: [
                "--classpath",
                "--module-path 和 --module-source-path",
                "--add-modules",
                "--module-info"
            ],
            answer: 1,
            rationale: "编译模块化项目使用 --module-source-path 指定源码路径，运行时用 --module-path（简写 -p）。"
        },
        {
            id: "jf-w5-1-q10",
            question: "运行模块化应用使用什么参数？",
            options: [
                "java -cp mods -m module/MainClass",
                "java --module-path mods -m module/MainClass",
                "java --module mods MainClass",
                "java -jar module.jar"
            ],
            answer: 1,
            rationale: "使用 java --module-path mods -m module/MainClass（或 -p mods -m module/MainClass）运行模块化应用。"
        },
        {
            id: "jf-w5-1-q11",
            question: "JDK 大约模块化为多少个模块？",
            options: [
                "约 20 个",
                "约 50 个",
                "约 90 个",
                "约 200 个"
            ],
            answer: 2,
            rationale: "JDK 模块化为约 90 个模块，可以通过 jlink 工具选择需要的模块创建精简运行时。"
        },
        {
            id: "jf-w5-1-q12",
            question: "模块化的主要优势不包括？",
            options: [
                "强封装",
                "可靠配置",
                "自动垃圾回收优化",
                "精简运行时"
            ],
            answer: 2,
            rationale: "模块化的主要优势包括强封装、可靠配置、精简运行时（jlink）。垃圾回收与模块化无关。"
        }
    ],
    "jf-w5-2": [
        {
            id: "jf-w5-2-q1",
            question: "exports 和 opens 的主要区别是什么？",
            options: [
                "exports 更快",
                "exports 用于编译时访问，opens 用于运行时反射访问",
                "opens 只能用于测试",
                "它们是同义词"
            ],
            answer: 1,
            rationale: "exports 允许编译时访问公共 API，opens 允许运行时反射访问（包括私有成员），框架需要后者。"
        },
        {
            id: "jf-w5-2-q2",
            question: "requires transitive 的作用是什么？",
            options: [
                "可选依赖",
                "仅编译时依赖",
                "传递依赖给依赖当前模块的模块",
                "延迟加载"
            ],
            answer: 2,
            rationale: "requires transitive mod 使得依赖当前模块的模块也自动依赖 mod，用于 API 暴露依赖类型的场景。"
        },
        {
            id: "jf-w5-2-q3",
            question: "requires static 表示什么？",
            options: [
                "静态导入",
                "仅编译时依赖（可选依赖）",
                "不可变依赖",
                "系统模块依赖"
            ],
            answer: 1,
            rationale: "requires static 表示编译时需要但运行时可选的依赖，类似 Maven 的 provided scope。"
        },
        {
            id: "jf-w5-2-q4",
            question: "Hibernate 等 ORM 框架需要什么模块声明？",
            options: [
                "exports 实体包",
                "opens 实体包 to hibernate 模块",
                "requires hibernate",
                "imports 实体包"
            ],
            answer: 1,
            rationale: "ORM 框架需要反射访问实体类的私有字段，需要 opens 包给框架模块，而不是 exports。"
        },
        {
            id: "jf-w5-2-q5",
            question: "exports pkg to mod1, mod2 的作用是什么？",
            options: [
                "导出给所有模块",
                "限定只导出给 mod1 和 mod2",
                "导出多个包",
                "创建别名"
            ],
            answer: 1,
            rationale: "限定导出（qualified exports）只将包导出给指定的模块，提供更精细的访问控制。"
        },
        {
            id: "jf-w5-2-q6",
            question: "open module 表示什么？",
            options: [
                "开源模块",
                "整个模块允许反射访问所有包",
                "可修改的模块",
                "公共模块"
            ],
            answer: 1,
            rationale: "open module 声明整个模块开放反射访问，等同于对所有包使用 opens，用于框架兼容。"
        },
        {
            id: "jf-w5-2-q7",
            question: "provides ServiceInterface with ImplClass 的作用是什么？",
            options: [
                "继承关系声明",
                "声明模块提供服务实现",
                "创建接口别名",
                "导入服务"
            ],
            answer: 1,
            rationale: "provides 声明模块提供的服务实现，配合 uses 实现服务发现机制（SPI）。"
        },
        {
            id: "jf-w5-2-q8",
            question: "--add-opens 参数的作用是什么？",
            options: [
                "添加模块",
                "运行时绕过模块封装允许反射",
                "打开调试模式",
                "添加类路径"
            ],
            answer: 1,
            rationale: "--add-opens 在运行时强制开放包的反射访问，用于兼容旧代码，但不推荐作为长期方案。"
        },
        {
            id: "jf-w5-2-q9",
            question: "uses ServiceInterface 声明什么？",
            options: [
                "实现服务",
                "消费/使用服务",
                "导出服务",
                "扩展服务"
            ],
            answer: 1,
            rationale: "uses 声明模块消费某服务，可通过 ServiceLoader 加载服务实现。与 provides 配对使用。"
        },
        {
            id: "jf-w5-2-q10",
            question: "什么时候应该使用 requires transitive？",
            options: [
                "所有依赖都应该使用",
                "当模块 API 暴露了依赖模块的类型时",
                "只用于测试",
                "仅用于可选依赖"
            ],
            answer: 1,
            rationale: "当你的公共 API 返回或参数使用了依赖模块的类型时，使用 requires transitive 让调用者自动获得依赖。"
        },
        {
            id: "jf-w5-2-q11",
            question: "默认情况下，反射能否访问模块中未导出包的公共类？",
            options: [
                "可以",
                "不可以，需要 opens",
                "只能访问方法",
                "取决于 JVM 版本"
            ],
            answer: 1,
            rationale: "模块系统的强封装也限制了反射，未 opens 的包中的类（即使是公共的）默认不能被反射访问。"
        },
        {
            id: "jf-w5-2-q12",
            question: "ServiceLoader 在模块系统中如何发现服务？",
            options: [
                "扫描类路径",
                "通过 provides 和 uses 声明",
                "自动发现所有实现",
                "需要手动注册"
            ],
            answer: 1,
            rationale: "模块系统中，ServiceLoader 根据 module-info.java 中的 provides/uses 声明发现服务实现。"
        }
    ],
    "jf-w5-3": [
        {
            id: "jf-w5-3-q1",
            question: "JShell 是什么？",
            options: [
                "Java 的 IDE",
                "Java 的 REPL 交互式编程工具",
                "Java 的编译器",
                "Java 的调试器"
            ],
            answer: 1,
            rationale: "JShell 是 Java 9 引入的 REPL（Read-Eval-Print-Loop）工具，支持交互式执行 Java 代码片段。"
        },
        {
            id: "jf-w5-3-q2",
            question: "List.of(1, 2, 3) 返回的集合有什么特点？",
            options: [
                "可以添加元素",
                "不可变，不能添加或删除元素",
                "允许 null 元素",
                "自动排序"
            ],
            answer: 1,
            rationale: "工厂方法返回的集合是不可变的，调用 add、remove 等方法会抛出 UnsupportedOperationException。"
        },
        {
            id: "jf-w5-3-q3",
            question: "Map.of() 最多支持多少个键值对？",
            options: [
                "5 个",
                "10 个",
                "无限制",
                "100 个"
            ],
            answer: 1,
            rationale: "Map.of() 重载方法最多支持 10 个键值对，超过需要用 Map.ofEntries(Map.entry(k, v), ...)。"
        },
        {
            id: "jf-w5-3-q4",
            question: "List.of(null) 会发生什么？",
            options: [
                "创建包含 null 的列表",
                "创建空列表",
                "抛出 NullPointerException",
                "自动过滤 null"
            ],
            answer: 2,
            rationale: "工厂方法不允许 null 元素，传入 null 会抛出 NullPointerException。这与 Arrays.asList 不同。"
        },
        {
            id: "jf-w5-3-q5",
            question: "Set.of(1, 2, 1) 会发生什么？",
            options: [
                "创建包含两个元素的 Set",
                "抛出 IllegalArgumentException",
                "保留第一个重复元素",
                "自动去重"
            ],
            answer: 1,
            rationale: "Set.of() 传入重复元素会抛出 IllegalArgumentException，不会自动去重。Map.of() 重复键同理。"
        },
        {
            id: "jf-w5-3-q6",
            question: "如何创建包含超过 10 个键值对的不可变 Map？",
            options: [
                "Map.of(k1,v1,...k11,v11)",
                "Map.ofEntries(Map.entry(k1,v1), ...)",
                "new ImmutableMap()",
                "Map.create()"
            ],
            answer: 1,
            rationale: "使用 Map.ofEntries(Map.entry(k1,v1), Map.entry(k2,v2), ...) 创建超过 10 个键值对的不可变 Map。"
        },
        {
            id: "jf-w5-3-q7",
            question: "List.copyOf(existingList) 的作用是什么？",
            options: [
                "创建可变副本",
                "创建不可变副本",
                "修改原列表",
                "深拷贝"
            ],
            answer: 1,
            rationale: "copyOf 创建现有集合的不可变副本。如果原集合已是不可变的，可能直接返回原集合。"
        },
        {
            id: "jf-w5-3-q8",
            question: "JShell 中如何定义变量？",
            options: [
                "必须指定类型",
                "可以使用 var 或指定类型",
                "不能定义变量",
                "必须使用 final"
            ],
            answer: 1,
            rationale: "JShell 支持 var 类型推断和显式类型声明，可以直接执行语句而无需完整的类定义。"
        },
        {
            id: "jf-w5-3-q9",
            question: "工厂方法返回的集合与 Collections.unmodifiableList 有什么区别？",
            options: [
                "没有区别",
                "工厂方法返回真正不可变的集合，unmodifiable 只是视图",
                "unmodifiableList 性能更好",
                "工厂方法支持 null"
            ],
            answer: 1,
            rationale: "工厂方法返回的是真正不可变的集合，unmodifiableList 是可变集合的不可修改视图，原集合修改会反映到视图。"
        },
        {
            id: "jf-w5-3-q10",
            question: "JShell 的主要用途是什么？",
            options: [
                "编译生产代码",
                "快速验证代码片段和学习探索",
                "部署应用",
                "性能测试"
            ],
            answer: 1,
            rationale: "JShell 适合快速实验、学习 API 和验证代码片段，不适合完整程序开发。"
        },
        {
            id: "jf-w5-3-q11",
            question: "Arrays.asList(1, null, 3) 与 List.of(1, null, 3) 的区别？",
            options: [
                "没有区别",
                "Arrays.asList 允许 null，List.of 抛出 NPE",
                "List.of 允许 null，Arrays.asList 不允许",
                "两者都不允许 null"
            ],
            answer: 1,
            rationale: "Arrays.asList 允许 null 元素，List.of 不允许 null，传入会抛出 NullPointerException。"
        },
        {
            id: "jf-w5-3-q12",
            question: "如何退出 JShell？",
            options: [
                "quit",
                "exit",
                "/exit",
                "Ctrl+C"
            ],
            answer: 2,
            rationale: "在 JShell 中输入 /exit 退出。JShell 命令都以 / 开头，如 /help、/save、/open 等。"
        }
    ]
}
