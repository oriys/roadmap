import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "jf-w2-1": {
        lessonId: "jf-w2-1",
        background: [
            "【Stream 本质】Oracle 教程：A stream is a sequence of elements that carries values from a source through a pipeline——Stream 是从源通过管道传输值的元素序列，不存储数据，只处理数据。",
            "【管道结构】Stream 管道由三部分组成：数据源（Source）、零或多个中间操作（Intermediate Operations）、一个终端操作（Terminal Operation）。",
            "【惰性求值】dev.java：Intermediate operations are lazy——中间操作是惰性的，不会立即执行，直到终端操作被调用时才真正处理数据。",
            "【创建方式】Collection.stream() 从集合创建、Arrays.stream(array) 从数组创建、Stream.of(elements) 从元素创建、Stream.generate() 和 Stream.iterate() 创建无限流。",
            "【内部迭代】与外部迭代（Iterator）不同，Stream 使用内部迭代，由 JDK 控制迭代过程，更容易支持并行处理。"
        ],
        keyDifficulties: [
            "【filter 过滤】filter(Predicate) 保留满足条件的元素，不满足条件的元素被丢弃。filter 不改变元素类型，只改变元素数量。",
            "【map vs flatMap】map 是一对一转换，产生相同数量的元素；flatMap 是一对多转换，可以展平嵌套结构，例如将 Stream<List<String>> 展平为 Stream<String>。",
            "【distinct 实现】dev.java：distinct() uses hashCode() and equals() to spot duplicates——去重操作内部使用 Set 存储已见元素，需要正确实现 hashCode 和 equals。",
            "【sorted 限制】sorted() 需要缓冲所有元素才能排序，不适用于无限流。无参版本要求元素实现 Comparable，有参版本接受 Comparator。",
            "【peek 仅用于调试】dev.java：peek() is for debugging purposes only——peek 接受 Consumer 用于观察流中元素，不应用于生产逻辑。"
        ],
        handsOnPath: [
            "使用 Collection.stream() 创建流：list.stream().filter(x -> x > 10).forEach(System.out::println);",
            "使用 map 转换类型：names.stream().map(String::toUpperCase).collect(Collectors.toList());",
            "使用 flatMap 展平嵌套：listOfLists.stream().flatMap(Collection::stream).distinct().toList();",
            "链式调用多个中间操作：stream.filter(x -> x > 0).map(x -> x * 2).sorted().limit(10);",
            "使用 peek 调试：stream.peek(x -> System.out.println(\"Processing: \" + x)).collect(...);",
            "使用 skip 和 limit 分页：stream.skip(page * size).limit(size).toList();"
        ],
        selfCheck: [
            "Stream 与 Collection 的主要区别是什么？为什么说 Stream 不存储数据？",
            "什么是惰性求值？中间操作为什么是惰性的？",
            "map() 和 flatMap() 的区别是什么？什么情况下需要用 flatMap？",
            "distinct() 如何判断元素是否重复？对自定义类有什么要求？",
            "为什么 sorted() 不适用于无限流？"
        ],
        extensions: [
            "学习 mapMulti()（Java 16+）：比 flatMap 更高效的一对多映射方式。",
            "研究 Stream 的 SIZED、ORDERED、DISTINCT 等特性（Spliterator characteristics）。",
            "了解 Stream.concat() 与 flatMap 的区别：concat 保留 SIZED 特性。",
            "探索原始类型流：IntStream、LongStream、DoubleStream 避免装箱开销。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/tutorial/collections/streams/",
            "https://dev.java/learn/api/streams/intermediate-operation/"
        ]
    },
    "jf-w2-2": {
        lessonId: "jf-w2-2",
        background: [
            "【终端操作定义】终端操作触发整个流管道的执行，产生非 Stream 结果（如值、集合、副作用）。每个 Stream 只能有一个终端操作。",
            "【forEach 遍历】forEach(Consumer) 对每个元素执行操作，无返回值。forEachOrdered 保证按遇见顺序处理，即使在并行流中。",
            "【reduce 归约】reduce 将流元素组合为单个结果。三种形式：reduce(BinaryOperator)、reduce(identity, BinaryOperator)、reduce(identity, BiFunction, BinaryOperator)。",
            "【collect 收集】collect(Collector) 是最强大的终端操作，Collectors 工具类提供丰富的预定义收集器。",
            "【短路操作】findFirst()、findAny()、anyMatch()、allMatch()、noneMatch() 等操作可能提前终止流处理。"
        ],
        keyDifficulties: [
            "【toList vs Collectors.toList】Java 16+ 的 toList() 返回不可变列表，Collectors.toList() 返回可变 ArrayList。根据需求选择。",
            "【toMap 键冲突】Collectors.toMap() 遇到重复键默认抛异常。需要提供合并函数处理冲突：toMap(keyMapper, valueMapper, mergeFunction)。",
            "【groupingBy 级联】groupingBy 支持下游收集器实现多级分组或统计：groupingBy(classifier, downstream)。",
            "【partitioningBy 限制】partitioningBy 只能按布尔条件分成两组，返回 Map<Boolean, List<T>>，键始终包含 true 和 false。",
            "【reduce vs collect】reduce 适合不可变归约（如求和），collect 适合可变归约（如收集到集合）。collect 在并行流中更高效。"
        ],
        handsOnPath: [
            "使用 toList() 收集：stream.filter(x -> x > 0).toList(); // Java 16+",
            "使用 toMap 转换：persons.stream().collect(Collectors.toMap(Person::getId, Function.identity()));",
            "使用 groupingBy 分组：employees.stream().collect(Collectors.groupingBy(Employee::getDepartment));",
            "使用 groupingBy + counting 统计：stream.collect(Collectors.groupingBy(x -> x, Collectors.counting()));",
            "使用 joining 拼接字符串：names.stream().collect(Collectors.joining(\", \", \"[\", \"]\"));",
            "使用 reduce 求和：stream.reduce(0, Integer::sum); 或 stream.mapToInt(x -> x).sum();"
        ],
        selfCheck: [
            "forEach 和 forEachOrdered 有什么区别？什么时候需要用 forEachOrdered？",
            "reduce 的三参数形式各参数的作用是什么？为什么需要 combiner？",
            "toMap 遇到重复键会怎样？如何解决？",
            "groupingBy 和 partitioningBy 有什么区别？",
            "Java 16+ 的 toList() 与 Collectors.toList() 有什么区别？"
        ],
        extensions: [
            "学习自定义 Collector：实现 Collector 接口的 supplier、accumulator、combiner、finisher、characteristics。",
            "研究 teeing 收集器（Java 12+）：同时应用两个下游收集器并合并结果。",
            "了解 collectingAndThen：在收集后应用最终转换，如创建不可变集合。",
            "探索 summarizingInt/Long/Double：一次获取 count、sum、min、max、average。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collectors.html",
            "https://docs.oracle.com/javase/tutorial/collections/streams/"
        ]
    },
    "jf-w2-3": {
        lessonId: "jf-w2-3",
        background: [
            "【并行流创建】两种方式：collection.parallelStream() 或 stream.parallel()。可用 sequential() 切回顺序流。",
            "【底层实现】并行流使用 ForkJoinPool.commonPool()，这是整个应用共享的线程池。默认并行度是 Runtime.availableProcessors() - 1。",
            "【分而治之】并行流基于 Fork/Join 框架，将数据拆分成子任务并行处理，最后合并结果。数据源的可拆分性影响并行效率。",
            "【数据局部性】dev.java：Arrays of primitive types offer excellent data locality——原始类型数组数据连续存储，并行效率最高；LinkedList 需要指针追踪，效率最低。",
            "【开销考量】并行处理有额外开销：数据拆分、线程管理、结果合并、线程协调。只有数据量足够大且操作足够重时才值得并行。"
        ],
        keyDifficulties: [
            "【共享可变状态】dev.java：Any access to non-concurrent external element may lead to race conditions——绝不能在并行流中访问或修改外部可变状态，会导致竞态条件。",
            "【有状态操作】limit()、skip()、findFirst() 等有序依赖的操作在并行流中有额外开销，可能抵消并行收益。findAny() 比 findFirst() 更适合并行。",
            "【线程池共享问题】commonPool 被整个应用共享，如果其他任务占用池中线程，并行流性能会受影响。可以使用自定义 ForkJoinPool 隔离。",
            "【何时并行】dev.java 四原则：1) 确有性能需求 2) 选择合适数据源 3) 避免共享可变状态 4) 测量实际性能——不要假设，要测量。"
        ],
        handsOnPath: [
            "创建并行流：list.parallelStream().filter(...).map(...).collect(...);",
            "比较顺序流和并行流性能：用 System.nanoTime() 测量大数据集的处理时间。",
            "观察线程：stream.parallel().peek(x -> System.out.println(Thread.currentThread().getName())).toList();",
            "配置 commonPool 并行度：-Djava.util.concurrent.ForkJoinPool.common.parallelism=4",
            "使用自定义 ForkJoinPool：new ForkJoinPool(4).submit(() -> stream.parallel()...).get();",
            "对比不同数据源：分别用 ArrayList、LinkedList、数组测试并行流性能差异。"
        ],
        selfCheck: [
            "并行流底层使用什么线程池？默认并行度是多少？",
            "为什么 ArrayList 比 LinkedList 更适合并行流处理？",
            "在并行流中使用共享可变状态会有什么问题？",
            "findFirst() 和 findAny() 在并行流中有什么区别？",
            "什么情况下不应该使用并行流？"
        ],
        extensions: [
            "研究 Spliterator 接口：理解 trySplit()、estimateSize() 和特性标志如何影响并行效率。",
            "了解 ForkJoinPool 的工作窃取（work-stealing）算法。",
            "探索 CompletableFuture 作为并行流的替代方案。",
            "学习 NQ 模型（N 元素数 × Q 每元素操作量）评估并行是否值得。"
        ],
        sourceUrls: [
            "https://dev.java/learn/api/streams/parallel-streams/",
            "https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ForkJoinPool.html"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w2-1": [
        {
            id: "jf-w2-1-q1",
            question: "Stream 管道由哪三部分组成？",
            options: [
                "输入、处理、输出",
                "数据源、中间操作、终端操作",
                "创建、转换、收集",
                "生产者、消费者、订阅者"
            ],
            answer: 1,
            rationale: "Oracle 教程明确指出 Stream 管道由 Source（数据源）、Intermediate Operations（中间操作）和 Terminal Operation（终端操作）三部分组成。"
        },
        {
            id: "jf-w2-1-q2",
            question: "关于中间操作的惰性求值，以下说法正确的是：",
            options: [
                "中间操作会立即执行",
                "中间操作只在终端操作调用时才执行",
                "只有 filter 是惰性的",
                "惰性求值会降低性能"
            ],
            answer: 1,
            rationale: "dev.java 文档：Intermediate operations are lazy——所有中间操作都是惰性的，不会立即执行，直到终端操作被调用时才真正处理数据。"
        },
        {
            id: "jf-w2-1-q3",
            question: "map() 和 flatMap() 的主要区别是什么？",
            options: [
                "map 只能用于对象，flatMap 只能用于基本类型",
                "map 是一对一转换，flatMap 可以一对多转换并展平结果",
                "flatMap 比 map 性能更好",
                "map 返回 Optional，flatMap 返回 Stream"
            ],
            answer: 1,
            rationale: "文档说明：map() produces one output for one input value, whereas flatMap() produces an arbitrary number of values——map 是一对一，flatMap 是一对多并展平。"
        },
        {
            id: "jf-w2-1-q4",
            question: "distinct() 如何判断元素是否重复？",
            options: [
                "使用 == 比较引用",
                "使用 compareTo() 方法",
                "使用 hashCode() 和 equals() 方法",
                "使用 toString() 比较"
            ],
            answer: 2,
            rationale: "dev.java 明确指出：distinct() uses hashCode() and equals() to spot duplicates——使用 hashCode 和 equals 方法判断重复。"
        },
        {
            id: "jf-w2-1-q5",
            question: "以下哪个操作不适用于无限流？",
            options: [
                "filter()",
                "map()",
                "sorted()",
                "limit()"
            ],
            answer: 2,
            rationale: "sorted() 需要缓冲所有元素才能排序，对于无限流会导致无限等待。filter、map 是逐元素处理，limit 可以截断流，都可用于无限流。"
        },
        {
            id: "jf-w2-1-q6",
            question: "peek() 操作的推荐用途是什么？",
            options: [
                "修改流中的元素",
                "作为终端操作使用",
                "仅用于调试目的",
                "替代 forEach 进行遍历"
            ],
            answer: 2,
            rationale: "dev.java 明确说明：peek() is for debugging purposes only——peek 接受 Consumer 用于观察流中元素，仅用于调试，不应用于生产逻辑。"
        },
        {
            id: "jf-w2-1-q7",
            question: "以下哪种方式不能创建 Stream？",
            options: [
                "Collection.stream()",
                "Arrays.stream(array)",
                "Stream.of(elements)",
                "new Stream(elements)"
            ],
            answer: 3,
            rationale: "Stream 是接口，不能直接 new。正确的创建方式包括 Collection.stream()、Arrays.stream()、Stream.of() 等静态工厂方法。"
        },
        {
            id: "jf-w2-1-q8",
            question: "Stream 与 Iterator 的主要区别是什么？",
            options: [
                "Stream 使用外部迭代，Iterator 使用内部迭代",
                "Stream 使用内部迭代，更容易支持并行处理",
                "Iterator 支持并行，Stream 不支持",
                "没有区别，只是语法不同"
            ],
            answer: 1,
            rationale: "Oracle 教程对比：Stream 使用 Internal iteration（内部迭代），由 JDK 控制；Iterator 使用 External iteration（外部迭代），由应用控制。内部迭代更容易实现并行。"
        },
        {
            id: "jf-w2-1-q9",
            question: "skip(n) 和 limit(n) 配合实现分页时，以下哪个写法正确？",
            options: [
                "stream.limit(pageSize).skip(page * pageSize)",
                "stream.skip(page * pageSize).limit(pageSize)",
                "stream.skip(pageSize).limit(page)",
                "stream.limit(page).skip(pageSize)"
            ],
            answer: 1,
            rationale: "正确的分页写法是先跳过前面的元素 skip(page * pageSize)，再取当前页的元素 limit(pageSize)。顺序很重要。"
        },
        {
            id: "jf-w2-1-q10",
            question: "以下哪个是 Stream 的特点？",
            options: [
                "存储数据并可以多次遍历",
                "不存储数据，只能消费一次",
                "可以修改源数据",
                "必须是有限的"
            ],
            answer: 1,
            rationale: "Oracle 教程：Stream 不存储数据，只处理数据。每个 Stream 只能被一个终端操作消费一次，之后就无法再使用。"
        },
        {
            id: "jf-w2-1-q11",
            question: "mapToInt() 相比 map() 的优势是什么？",
            options: [
                "支持更多数据类型",
                "避免自动装箱，提供 sum/average 等便捷方法",
                "可以返回 null",
                "支持并行处理"
            ],
            answer: 1,
            rationale: "mapToInt() 返回 IntStream，避免了 int 和 Integer 之间的自动装箱开销，并提供 sum()、average()、max() 等专用方法。"
        },
        {
            id: "jf-w2-1-q12",
            question: "以下哪个中间操作会改变流中元素的数量？",
            options: [
                "map()",
                "sorted()",
                "filter()",
                "peek()"
            ],
            answer: 2,
            rationale: "filter() 根据条件过滤元素，可能减少元素数量。map 和 peek 保持一对一关系，sorted 只改变顺序不改变数量。"
        }
    ],
    "jf-w2-2": [
        {
            id: "jf-w2-2-q1",
            question: "forEach 和 forEachOrdered 的区别是什么？",
            options: [
                "forEach 只能用于顺序流",
                "forEachOrdered 保证按遇见顺序处理元素",
                "forEachOrdered 性能更好",
                "forEach 有返回值"
            ],
            answer: 1,
            rationale: "forEachOrdered 保证按元素遇见顺序（encounter order）处理，即使在并行流中也保持顺序。forEach 在并行流中可能乱序。"
        },
        {
            id: "jf-w2-2-q2",
            question: "Collectors.toMap() 遇到重复键时默认行为是什么？",
            options: [
                "保留第一个值",
                "保留最后一个值",
                "抛出 IllegalStateException",
                "合并两个值"
            ],
            answer: 2,
            rationale: "Collectors 文档：toMap() 遇到重复键时默认抛出 IllegalStateException。需要提供第三个参数（合并函数）来处理键冲突。"
        },
        {
            id: "jf-w2-2-q3",
            question: "groupingBy 的返回类型是什么？",
            options: [
                "List<T>",
                "Set<T>",
                "Map<K, List<T>>",
                "Map<Boolean, List<T>>"
            ],
            answer: 2,
            rationale: "Collectors.groupingBy(classifier) 返回 Map<K, List<T>>，其中 K 是分类函数返回的键类型，值是该组的元素列表。"
        },
        {
            id: "jf-w2-2-q4",
            question: "partitioningBy 和 groupingBy 的主要区别是什么？",
            options: [
                "partitioningBy 性能更好",
                "partitioningBy 只能分成两组（true/false）",
                "groupingBy 只能用于字符串",
                "partitioningBy 返回 List"
            ],
            answer: 1,
            rationale: "partitioningBy 使用 Predicate 将元素分成两组，返回 Map<Boolean, List<T>>，键只有 true 和 false。groupingBy 可以分成任意多组。"
        },
        {
            id: "jf-w2-2-q5",
            question: "以下哪个是正确的 joining 用法？",
            options: [
                "Collectors.joining() // 无分隔符",
                "Collectors.joining(\",\") // 逗号分隔",
                "Collectors.joining(\", \", \"[\", \"]\") // 带前后缀",
                "以上都正确"
            ],
            answer: 3,
            rationale: "Collectors 文档：joining() 有三种重载形式：无参（直接连接）、单参数（指定分隔符）、三参数（分隔符、前缀、后缀）都是有效的。"
        },
        {
            id: "jf-w2-2-q6",
            question: "reduce(identity, accumulator) 中 identity 的作用是什么？",
            options: [
                "指定返回类型",
                "作为初始值和空流时的返回值",
                "指定并行度",
                "定义比较规则"
            ],
            answer: 1,
            rationale: "identity 是归约操作的初始值，同时也是空流时的返回值。例如 reduce(0, Integer::sum) 中，0 是初始值，空流时返回 0。"
        },
        {
            id: "jf-w2-2-q7",
            question: "Java 16+ 的 toList() 与 Collectors.toList() 的区别是什么？",
            options: [
                "没有区别",
                "toList() 返回不可变列表，Collectors.toList() 返回可变 ArrayList",
                "toList() 性能更差",
                "toList() 不能用于并行流"
            ],
            answer: 1,
            rationale: "Java 16+ 的 Stream.toList() 返回不可变列表，Collectors.toList() 返回可变的 ArrayList。根据是否需要修改结果选择。"
        },
        {
            id: "jf-w2-2-q8",
            question: "以下哪个是短路终端操作？",
            options: [
                "collect()",
                "forEach()",
                "findFirst()",
                "reduce()"
            ],
            answer: 2,
            rationale: "findFirst()、findAny()、anyMatch()、allMatch()、noneMatch() 是短路操作，可能在处理完所有元素前提前返回结果。collect、forEach、reduce 必须处理所有元素。"
        },
        {
            id: "jf-w2-2-q9",
            question: "如何使用 Collectors 统计每个元素出现的次数？",
            options: [
                "Collectors.counting()",
                "Collectors.groupingBy(x -> x, Collectors.counting())",
                "Collectors.summarizingInt()",
                "Collectors.toMap(x -> x, x -> 1)"
            ],
            answer: 1,
            rationale: "groupingBy(x -> x, Collectors.counting()) 按元素本身分组，然后统计每组数量，得到 Map<T, Long> 形式的频率统计。"
        },
        {
            id: "jf-w2-2-q10",
            question: "reduce 和 collect 的主要区别是什么？",
            options: [
                "reduce 返回 Optional，collect 返回集合",
                "reduce 适合不可变归约，collect 适合可变归约",
                "reduce 只能用于数值，collect 只能用于对象",
                "reduce 不支持并行"
            ],
            answer: 1,
            rationale: "reduce 适合不可变归约（如求和，每次产生新值），collect 适合可变归约（如收集到集合，复用容器）。collect 在并行流中更高效。"
        },
        {
            id: "jf-w2-2-q11",
            question: "collectingAndThen 的用途是什么？",
            options: [
                "并行收集",
                "在收集后应用最终转换",
                "条件收集",
                "分组收集"
            ],
            answer: 1,
            rationale: "Collectors.collectingAndThen(downstream, finisher) 先用下游收集器收集，然后应用 finisher 函数转换结果，如创建不可变集合。"
        },
        {
            id: "jf-w2-2-q12",
            question: "summarizingInt() 返回什么信息？",
            options: [
                "只返回总和",
                "只返回平均值",
                "返回 count、sum、min、max、average",
                "返回中位数"
            ],
            answer: 2,
            rationale: "Collectors.summarizingInt() 返回 IntSummaryStatistics，包含 count（数量）、sum（总和）、min（最小值）、max（最大值）、average（平均值）。"
        }
    ],
    "jf-w2-3": [
        {
            id: "jf-w2-3-q1",
            question: "并行流使用的默认线程池是什么？",
            options: [
                "Executors.newFixedThreadPool()",
                "Executors.newCachedThreadPool()",
                "ForkJoinPool.commonPool()",
                "ThreadPoolExecutor"
            ],
            answer: 2,
            rationale: "并行流默认使用 ForkJoinPool.commonPool()，这是整个应用共享的线程池。"
        },
        {
            id: "jf-w2-3-q2",
            question: "ForkJoinPool.commonPool() 的默认并行度是多少？",
            options: [
                "固定为 4",
                "Runtime.availableProcessors()",
                "Runtime.availableProcessors() - 1",
                "无限制"
            ],
            answer: 2,
            rationale: "文档说明：默认并行度是 Runtime.getRuntime().availableProcessors() - 1，保留一个核心给主线程。"
        },
        {
            id: "jf-w2-3-q3",
            question: "以下哪种数据源最适合并行流处理？",
            options: [
                "LinkedList",
                "TreeSet",
                "原始类型数组",
                "HashMap"
            ],
            answer: 2,
            rationale: "dev.java：Arrays of primitive types offer excellent data locality——原始类型数组数据连续存储在内存中，易于分割，并行效率最高。"
        },
        {
            id: "jf-w2-3-q4",
            question: "在并行流中使用共享可变状态会导致什么问题？",
            options: [
                "编译错误",
                "竞态条件和数据不一致",
                "性能提升",
                "自动同步"
            ],
            answer: 1,
            rationale: "dev.java 警告：Any access to non-concurrent external element may lead to race conditions and data inconsistency——访问共享可变状态会导致竞态条件。"
        },
        {
            id: "jf-w2-3-q5",
            question: "findFirst() 和 findAny() 在并行流中的主要区别是什么？",
            options: [
                "没有区别",
                "findAny() 可能返回任意元素，性能更好",
                "findFirst() 性能更好",
                "findAny() 只能用于顺序流"
            ],
            answer: 1,
            rationale: "findFirst() 保证返回流中第一个元素，在并行流中需要额外同步开销。findAny() 可以返回任意匹配元素，更适合并行场景。"
        },
        {
            id: "jf-w2-3-q6",
            question: "如何配置 ForkJoinPool.commonPool() 的并行度？",
            options: [
                "调用 setParallelism() 方法",
                "设置系统属性 java.util.concurrent.ForkJoinPool.common.parallelism",
                "在 Stream 上调用 parallel(n)",
                "无法配置"
            ],
            answer: 1,
            rationale: "官方文档：通过设置系统属性 java.util.concurrent.ForkJoinPool.common.parallelism 可以配置 commonPool 的并行度。"
        },
        {
            id: "jf-w2-3-q7",
            question: "以下哪个操作在并行流中可能有性能问题？",
            options: [
                "filter()",
                "map()",
                "limit()",
                "forEach()"
            ],
            answer: 2,
            rationale: "dev.java：limit()、skip()、findFirst() 等有序依赖的操作在并行流中有额外开销，可能抵消并行收益。"
        },
        {
            id: "jf-w2-3-q8",
            question: "何时应该考虑使用并行流？",
            options: [
                "所有情况都应该用并行流",
                "数据量大且操作计算密集时",
                "任何有循环的地方",
                "处理网络请求时"
            ],
            answer: 1,
            rationale: "dev.java 四原则之一：只有在确有性能需求、数据量足够大、操作足够重时才考虑并行流。并行有开销，不是万能药。"
        },
        {
            id: "jf-w2-3-q9",
            question: "将顺序流转换为并行流的方法是什么？",
            options: [
                "stream.toParallel()",
                "stream.parallel()",
                "ParallelStream.of(stream)",
                "stream.concurrent()"
            ],
            answer: 1,
            rationale: "两种方式创建并行流：collection.parallelStream() 或 stream.parallel()。可用 sequential() 切回顺序流。"
        },
        {
            id: "jf-w2-3-q10",
            question: "为什么 LinkedList 不适合并行流处理？",
            options: [
                "不支持并行",
                "需要指针追踪，数据不连续，难以高效分割",
                "元素太多",
                "没有实现 Spliterator"
            ],
            answer: 1,
            rationale: "dev.java：LinkedList 需要 pointer chasing——指针追踪来访问元素，数据不连续存储在内存中，难以高效分割，并行效率低。"
        },
        {
            id: "jf-w2-3-q11",
            question: "如何使用自定义 ForkJoinPool 执行并行流？",
            options: [
                "stream.parallel(pool)",
                "pool.submit(() -> stream.parallel().collect(...)).get()",
                "stream.withPool(pool).parallel()",
                "无法使用自定义池"
            ],
            answer: 1,
            rationale: "可以将并行流操作提交到自定义 ForkJoinPool：new ForkJoinPool(n).submit(() -> stream.parallel()...).get()。注意需要关闭池。"
        },
        {
            id: "jf-w2-3-q12",
            question: "dev.java 关于并行流的四个原则中，哪个最重要？",
            options: [
                "总是使用并行流",
                "避免共享可变状态",
                "测量实际性能，不要假设",
                "只用 ArrayList"
            ],
            answer: 2,
            rationale: "dev.java 强调：only testing and measuring execution times can definitively determine whether parallelization benefits——测量是验证并行是否有效的唯一方法。"
        }
    ]
}
