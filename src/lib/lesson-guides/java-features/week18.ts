import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week18Guides: Record<string, LessonGuide> = {
    "jf-w18-1": {
        lessonId: "jf-w18-1",
        background: [
            "【Stream Gatherers】JEP 461：gather() is a new intermediate operation for custom stream transformations——自定义 Stream 中间操作。",
            "【Gatherer 接口】JEP 461：A Gatherer defines initializer, integrator, combiner, finisher——四个可选函数组成。",
            "【内置 Gatherers】JEP 461：Gatherers class provides fold, scan, windowFixed, windowSliding, mapConcurrent——内置实现。",
            "【可扩展性】JEP 461：Eliminates awkward workarounds——消除复杂的 Collector 变通方案。",
            "【Java 22 预览】Stream Gatherers 在 Java 22 为预览特性（JEP 461）。"
        ],
        keyDifficulties: [
            "【Integrator】JEP 461：Processes each element and emits downstream results——处理元素并向下游发送结果。",
            "【Downstream】Integrator 通过 Downstream 对象发送结果，可以发送 0 个、1 个或多个结果。",
            "【短路支持】Integrator 返回 boolean 指示是否继续处理。",
            "【并行支持】提供 Combiner 可以支持并行流。"
        ],
        handsOnPath: [
            "fold：stream.gather(Gatherers.fold(() -> 0, (a, b) -> a + b)).findFirst();",
            "scan：stream.gather(Gatherers.scan(() -> 0, Integer::sum)).toList();",
            "windowFixed：stream.gather(Gatherers.windowFixed(3)).toList(); // 每 3 个一组",
            "windowSliding：stream.gather(Gatherers.windowSliding(3)).toList(); // 滑动窗口",
            "mapConcurrent：stream.gather(Gatherers.mapConcurrent(10, fn)).toList(); // 并发映射",
            "链式使用：stream.gather(g1).gather(g2).toList();"
        ],
        selfCheck: [
            "gather() 方法的作用是什么？",
            "Gatherer 的四个组成部分是什么？",
            "Gatherers.fold 和 reduce 有什么区别？",
            "windowFixed 和 windowSliding 的区别是什么？",
            "如何创建支持并行的 Gatherer？"
        ],
        extensions: [
            "研究 Gatherer 接口的完整设计。",
            "了解 Gatherers 与 Collectors 的关系。",
            "探索自定义 Gatherer 的实现。",
            "学习 Gatherers 在数据处理中的应用。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/461",
            "https://dev.java/learn/stream-gatherers/"
        ]
    },
    "jf-w18-2": {
        lessonId: "jf-w18-2",
        background: [
            "【Unnamed Variables】JEP 456：Use _ to declare unused variables——使用下划线声明未使用的变量。",
            "【增强可读性】明确表示变量不会被使用，提高代码可读性。",
            "【适用场景】catch 块、Lambda 参数、模式匹配中不需要的绑定。",
            "【非标识符】_ 不是标识符，不能在表达式中使用。",
            "【Java 22 正式】Unnamed Variables 在 Java 22 成为正式特性（JEP 456）。"
        ],
        keyDifficulties: [
            "【catch 使用】catch (Exception _) {}——忽略异常对象。",
            "【Lambda 使用】(_, y) -> y * 2——忽略第一个参数。",
            "【模式匹配】case Point(int x, _) -> x——忽略 y 组件。",
            "【多次使用】同一作用域可以多次使用 _：(_, _) -> 0。"
        ],
        handsOnPath: [
            "catch：try { ... } catch (Exception _) { log(\"Error\"); }",
            "Lambda：map.forEach((_, v) -> process(v));",
            "模式匹配：case Point(var x, _) -> x;",
            "增强 for：for (var _ : list) { count++; }",
            "try-with-resources：try (var _ = new AutoCloseable()) { ... }",
            "多参数：BiFunction<String, String, Integer> f = (_, _) -> 42;"
        ],
        selfCheck: [
            "Unnamed Variables 解决了什么问题？",
            "在 catch 块中如何使用 _？",
            "在 Lambda 中如何忽略参数？",
            "在 Record 模式中如何忽略组件？",
            "_ 可以在表达式中使用吗？"
        ],
        extensions: [
            "研究 Unnamed Variables 的语法限制。",
            "了解 _ 在不同上下文中的语义。",
            "探索 Unnamed Variables 与其他语言的对比。",
            "学习代码重构中的应用。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/456",
            "https://dev.java/learn/unnamed-variables/"
        ]
    },
    "jf-w18-3": {
        lessonId: "jf-w18-3",
        background: [
            "【Project Amber】语言特性增强：模式匹配、数据类、字符串模板等。",
            "【Project Loom】并发改进：虚拟线程、结构化并发、作用域值。",
            "【Project Panama】外部函数和内存 API：与 C 库交互、堆外内存访问。",
            "【Project Valhalla】值类型和泛型特化：原始类、泛型优化。",
            "【发布节奏】每六个月发布一个版本，LTS 版本（8、11、17、21）适合生产。"
        ],
        keyDifficulties: [
            "【预览特性】需要 --enable-preview 启用，通常 2-3 个版本后转正。",
            "【孵化器模块】需要 --add-modules 添加，API 可能变化。",
            "【LTS 选择】生产环境推荐 LTS 版本，功能稳定且有长期支持。",
            "【迁移策略】渐进式迁移，逐步采用新特性。"
        ],
        handsOnPath: [
            "启用预览：java --enable-preview --source 22 Main.java",
            "添加孵化器：java --add-modules jdk.incubator.vector Main",
            "检查版本：java --version",
            "查看预览特性：java --help | grep preview",
            "JShell 预览：jshell --enable-preview",
            "Maven 配置：<compilerArgs><arg>--enable-preview</arg></compilerArgs>"
        ],
        selfCheck: [
            "Project Amber 的主要目标是什么？",
            "Project Loom 包含哪些特性？",
            "什么是 LTS 版本？当前有哪些？",
            "如何启用预览特性？",
            "预览特性到正式发布通常需要多久？"
        ],
        extensions: [
            "关注 OpenJDK 项目的最新进展。",
            "了解 JEP 草案中的未来特性。",
            "探索 Project Leyden 的启动优化。",
            "学习 Java 版本升级的最佳实践。"
        ],
        sourceUrls: [
            "https://openjdk.org/projects/amber/",
            "https://openjdk.org/projects/loom/",
            "https://openjdk.org/projects/panama/",
            "https://openjdk.org/projects/valhalla/"
        ]
    }
}

export const week18Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w18-1": [
        {
            id: "jf-w18-1-q1",
            question: "Stream Gatherers 是什么？",
            options: [
                "终端操作",
                "自定义中间操作",
                "收集器",
                "过滤器"
            ],
            answer: 1,
            rationale: "JEP 461：gather() is a new intermediate operation for custom stream transformations。"
        },
        {
            id: "jf-w18-1-q2",
            question: "Gatherer 接口有几个组成部分？",
            options: [
                "2 个",
                "3 个",
                "4 个",
                "5 个"
            ],
            answer: 2,
            rationale: "JEP 461：Gatherer defines initializer, integrator, combiner, finisher——四个可选函数。"
        },
        {
            id: "jf-w18-1-q3",
            question: "Gatherers.fold() 的作用是什么？",
            options: [
                "过滤元素",
                "累积元素到聚合值，完成时发送",
                "映射元素",
                "排序元素"
            ],
            answer: 1,
            rationale: "JEP 461：fold accumulates elements into an aggregate, emitting when complete。"
        },
        {
            id: "jf-w18-1-q4",
            question: "Gatherers.windowFixed(3) 的作用是什么？",
            options: [
                "只取前 3 个",
                "每 3 个元素分为一组",
                "跳过 3 个",
                "重复 3 次"
            ],
            answer: 1,
            rationale: "JEP 461：windowFixed groups elements into fixed-size lists, emitting when full。"
        },
        {
            id: "jf-w18-1-q5",
            question: "windowFixed 和 windowSliding 的区别是什么？",
            options: [
                "没有区别",
                "windowFixed 不重叠，windowSliding 重叠",
                "windowSliding 更快",
                "windowFixed 支持并行"
            ],
            answer: 1,
            rationale: "windowFixed 是不重叠的固定窗口，windowSliding 是重叠的滑动窗口。"
        },
        {
            id: "jf-w18-1-q6",
            question: "Gatherers.scan() 的作用是什么？",
            options: [
                "搜索元素",
                "累积计算，每步都发送结果",
                "扫描文件",
                "检查类型"
            ],
            answer: 1,
            rationale: "JEP 461：scan applies a function to current state and element, passing results downstream。"
        },
        {
            id: "jf-w18-1-q7",
            question: "Integrator 的返回值表示什么？",
            options: [
                "处理结果",
                "是否继续处理",
                "错误码",
                "元素数量"
            ],
            answer: 1,
            rationale: "JEP 461：Integrator returns a boolean indicating whether processing should continue。"
        },
        {
            id: "jf-w18-1-q8",
            question: "mapConcurrent 的参数表示什么？",
            options: [
                "元素数量",
                "最大并发数",
                "超时时间",
                "重试次数"
            ],
            answer: 1,
            rationale: "JEP 461：mapConcurrent applies functions concurrently with a specified limit。"
        },
        {
            id: "jf-w18-1-q9",
            question: "如何创建自定义 Gatherer？",
            options: [
                "继承 Gatherer",
                "实现 Gatherer 接口或使用 Gatherer.ofSequential()",
                "使用注解",
                "无法自定义"
            ],
            answer: 1,
            rationale: "JEP 461：实现 Gatherer 接口或使用工厂方法 Gatherer.ofSequential()。"
        },
        {
            id: "jf-w18-1-q10",
            question: "Gatherers 相比 Collectors 的优势是什么？",
            options: [
                "性能更好",
                "可以作为中间操作，不只是终端操作",
                "语法更简单",
                "支持更多类型"
            ],
            answer: 1,
            rationale: "Gatherers 是中间操作，可以链式使用；Collectors 只能作为终端操作。"
        },
        {
            id: "jf-w18-1-q11",
            question: "Combiner 在 Gatherer 中的作用是什么？",
            options: [
                "合并结果",
                "支持并行流",
                "组合多个 Gatherer",
                "错误处理"
            ],
            answer: 1,
            rationale: "JEP 461：Combiner enables parallel evaluation when provided。"
        },
        {
            id: "jf-w18-1-q12",
            question: "Finisher 在 Gatherer 中的作用是什么？",
            options: [
                "关闭资源",
                "在输入耗尽时处理剩余输出",
                "完成验证",
                "释放内存"
            ],
            answer: 1,
            rationale: "JEP 461：Finisher handles remaining output when input exhausted。"
        }
    ],
    "jf-w18-2": [
        {
            id: "jf-w18-2-q1",
            question: "Unnamed Variables 使用什么符号？",
            options: [
                "*",
                "_",
                "?",
                "$"
            ],
            answer: 1,
            rationale: "JEP 456：Use _ to declare unused variables——使用下划线。"
        },
        {
            id: "jf-w18-2-q2",
            question: "Unnamed Variables 的目的是什么？",
            options: [
                "提高性能",
                "表示变量不会被使用，提高可读性",
                "节省内存",
                "类型推断"
            ],
            answer: 1,
            rationale: "JEP 456：明确表示变量不会被使用，提高代码可读性。"
        },
        {
            id: "jf-w18-2-q3",
            question: "catch (Exception _) {} 的含义是什么？",
            options: [
                "捕获所有异常",
                "捕获异常但不使用异常对象",
                "忽略异常",
                "重新抛出异常"
            ],
            answer: 1,
            rationale: "JEP 456：在 catch 块中使用 _ 表示不需要使用异常对象。"
        },
        {
            id: "jf-w18-2-q4",
            question: "(_, y) -> y * 2 中 _ 表示什么？",
            options: [
                "任意值",
                "忽略的第一个参数",
                "默认值",
                "null"
            ],
            answer: 1,
            rationale: "JEP 456：Lambda 参数中的 _ 表示该参数不会被使用。"
        },
        {
            id: "jf-w18-2-q5",
            question: "case Point(int x, _) -> 中 _ 表示什么？",
            options: [
                "任意类型",
                "忽略的 y 组件",
                "默认值",
                "通配符"
            ],
            answer: 1,
            rationale: "JEP 456：Record 模式中的 _ 表示忽略该组件。"
        },
        {
            id: "jf-w18-2-q6",
            question: "同一作用域可以多次使用 _ 吗？",
            options: [
                "不可以",
                "可以，(_, _) -> 0 是合法的",
                "最多两次",
                "需要特殊声明"
            ],
            answer: 1,
            rationale: "JEP 456：同一作用域可以多次使用 _，如 (_, _) -> 0。"
        },
        {
            id: "jf-w18-2-q7",
            question: "_ 可以在表达式中使用吗？",
            options: [
                "可以",
                "不可以，_ 不是标识符",
                "只在赋值中",
                "只在返回中"
            ],
            answer: 1,
            rationale: "JEP 456：_ 不是标识符，不能在表达式中使用，如 _ + 1 是非法的。"
        },
        {
            id: "jf-w18-2-q8",
            question: "Unnamed Variables 在哪个 Java 版本成为正式特性？",
            options: [
                "Java 21",
                "Java 22",
                "Java 23",
                "Java 24"
            ],
            answer: 1,
            rationale: "JEP 456 在 Java 22 成为正式特性。"
        },
        {
            id: "jf-w18-2-q9",
            question: "for (var _ : list) { count++; } 的用途是什么？",
            options: [
                "遍历列表",
                "只计数，不使用元素",
                "删除元素",
                "排序"
            ],
            answer: 1,
            rationale: "使用 _ 表示只关心迭代次数，不关心具体元素。"
        },
        {
            id: "jf-w18-2-q10",
            question: "try (var _ = resource) 的用途是什么？",
            options: [
                "释放资源",
                "确保资源关闭但不使用资源对象",
                "忽略异常",
                "延迟关闭"
            ],
            answer: 1,
            rationale: "try-with-resources 中使用 _ 表示只需要自动关闭，不使用资源对象。"
        },
        {
            id: "jf-w18-2-q11",
            question: "以前如何表示未使用的变量？",
            options: [
                "使用 null",
                "使用 ignored、unused 等命名或编译器警告",
                "使用 void",
                "无法表示"
            ],
            answer: 1,
            rationale: "以前使用命名约定（如 ignored）或接受编译器警告，_ 提供了标准方式。"
        },
        {
            id: "jf-w18-2-q12",
            question: "Unnamed Variables 与 Unnamed Patterns 的关系是什么？",
            options: [
                "无关",
                "都使用 _，分别用于变量声明和模式匹配",
                "相同特性",
                "冲突"
            ],
            answer: 1,
            rationale: "JEP 456 同时引入 Unnamed Variables（声明）和 Unnamed Patterns（模式匹配）。"
        }
    ],
    "jf-w18-3": [
        {
            id: "jf-w18-3-q1",
            question: "Project Amber 的主要目标是什么？",
            options: [
                "并发改进",
                "语言特性增强（模式匹配、数据类等）",
                "外部函数",
                "值类型"
            ],
            answer: 1,
            rationale: "Project Amber 专注于语言特性增强：模式匹配、数据类、字符串模板等。"
        },
        {
            id: "jf-w18-3-q2",
            question: "Project Loom 包含哪些特性？",
            options: [
                "模式匹配",
                "虚拟线程、结构化并发、作用域值",
                "外部函数",
                "值类型"
            ],
            answer: 1,
            rationale: "Project Loom 专注于并发改进：虚拟线程、结构化并发、作用域值。"
        },
        {
            id: "jf-w18-3-q3",
            question: "Project Panama 的主要目标是什么？",
            options: [
                "语言特性",
                "与 C 库交互和堆外内存访问",
                "并发",
                "性能优化"
            ],
            answer: 1,
            rationale: "Project Panama 专注于外部函数和内存 API：与 C 库交互、堆外内存访问。"
        },
        {
            id: "jf-w18-3-q4",
            question: "Project Valhalla 的主要目标是什么？",
            options: [
                "语言特性",
                "值类型和泛型特化",
                "并发",
                "安全性"
            ],
            answer: 1,
            rationale: "Project Valhalla 专注于值类型（原始类）和泛型特化优化。"
        },
        {
            id: "jf-w18-3-q5",
            question: "当前的 LTS 版本有哪些？",
            options: [
                "8, 11, 17",
                "8, 11, 17, 21",
                "11, 17, 21",
                "17, 21, 25"
            ],
            answer: 1,
            rationale: "当前 LTS 版本是 Java 8、11、17、21。"
        },
        {
            id: "jf-w18-3-q6",
            question: "如何启用预览特性？",
            options: [
                "--preview",
                "--enable-preview",
                "--preview-features",
                "-preview"
            ],
            answer: 1,
            rationale: "使用 --enable-preview 标志启用预览特性。"
        },
        {
            id: "jf-w18-3-q7",
            question: "Java 的发布周期是什么？",
            options: [
                "每年一次",
                "每六个月一次",
                "每两年一次",
                "不定期"
            ],
            answer: 1,
            rationale: "Java 采用每六个月发布一个版本的节奏。"
        },
        {
            id: "jf-w18-3-q8",
            question: "预览特性到正式发布通常需要多久？",
            options: [
                "1 个版本",
                "2-3 个版本",
                "5 个版本",
                "不确定"
            ],
            answer: 1,
            rationale: "预览特性通常经过 2-3 个版本的迭代后成为正式特性。"
        },
        {
            id: "jf-w18-3-q9",
            question: "生产环境推荐使用什么版本？",
            options: [
                "最新版本",
                "LTS 版本",
                "预览版本",
                "测试版本"
            ],
            answer: 1,
            rationale: "生产环境推荐 LTS 版本，功能稳定且有长期支持。"
        },
        {
            id: "jf-w18-3-q10",
            question: "如何添加孵化器模块？",
            options: [
                "--enable-incubator",
                "--add-modules jdk.incubator.xxx",
                "--incubator",
                "--module"
            ],
            answer: 1,
            rationale: "使用 --add-modules 添加孵化器模块，如 jdk.incubator.vector。"
        },
        {
            id: "jf-w18-3-q11",
            question: "Project Leyden 的目标是什么？",
            options: [
                "语言特性",
                "启动时间和内存优化",
                "并发",
                "安全性"
            ],
            answer: 1,
            rationale: "Project Leyden 专注于 Java 应用的启动时间和内存占用优化。"
        },
        {
            id: "jf-w18-3-q12",
            question: "如何了解 Java 的未来特性？",
            options: [
                "查看源码",
                "关注 JEP 草案和 OpenJDK 项目",
                "等待发布",
                "阅读博客"
            ],
            answer: 1,
            rationale: "通过 JEP 草案和 OpenJDK 项目页面了解正在开发的未来特性。"
        }
    ]
}
