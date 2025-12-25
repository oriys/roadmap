import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const javaJvmStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：Java 现代特性（第 1-3 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "java-modern",
    title: "阶段一：Java 现代特性",
    duration: "第 1-3 周",
    goal: "掌握 Java 21 LTS 核心特性，深入函数式编程与现代并发模型。",
    weeks: [
      {
        id: "java-w1",
        title: "第 1 周：Java 21 LTS 核心特性",
        summary: "掌握 Virtual Threads、Record Patterns 等 Java 21 重要特性。",
        keyPoints: [
          "Virtual Threads 是轻量级线程，可创建百万级并发。",
          "Record 是不可变数据载体，自动生成 equals/hashCode/toString。",
          "Sealed Classes 限制继承层次，增强类型安全。",
        ],
        lessons: [
          {
            id: "java-w1-1",
            title: "Virtual Threads",
            detail: "理解 Virtual Threads 的原理与使用场景。",
            keyPoints: [
              "Virtual Threads 由 JVM 调度，挂载在 Carrier Thread 上。",
              "I/O 阻塞时自动卸载，释放 Carrier Thread 给其他 Virtual Thread。",
              "适合 I/O 密集型应用，不适合 CPU 密集型任务。",
              "Thread.startVirtualThread() 或 Executors.newVirtualThreadPerTaskExecutor()。",
            ],
            resources: [
              { title: "JEP 444: Virtual Threads", url: "https://openjdk.org/jeps/444" },
              { title: "Oracle: Virtual Threads", url: "https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html" },
              { title: "Netflix: Virtual Threads Experience", url: "https://netflixtechblog.com/java-21-virtual-threads-dude-wheres-my-lock-3052540e231d" },
            ],
          },
          {
            id: "java-w1-2",
            title: "Record 与 Sealed Classes",
            detail: "使用 Record 和 Sealed Classes 构建类型安全的数据模型。",
            keyPoints: [
              "Record：不可变数据类，自动生成构造器、访问器、equals、hashCode、toString。",
              "Record 可实现接口，可定义静态方法和实例方法。",
              "Sealed Classes：使用 permits 限制允许的子类。",
              "Sealed + Record + Pattern Matching = 代数数据类型。",
            ],
            resources: [
              { title: "JEP 395: Records", url: "https://openjdk.org/jeps/395" },
              { title: "JEP 409: Sealed Classes", url: "https://openjdk.org/jeps/409" },
              { title: "Baeldung: Java Records", url: "https://www.baeldung.com/java-record-keyword" },
            ],
          },
          {
            id: "java-w1-3",
            title: "Pattern Matching",
            detail: "使用模式匹配简化类型检查与数据提取。",
            keyPoints: [
              "instanceof 模式匹配：类型检查与变量绑定合一。",
              "Switch 模式匹配：支持类型模式、守卫条件。",
              "Record Patterns：解构 Record 组件。",
              "模式匹配的穷尽性检查与 Sealed Classes 配合。",
            ],
            resources: [
              { title: "JEP 441: Pattern Matching for switch", url: "https://openjdk.org/jeps/441" },
              { title: "JEP 440: Record Patterns", url: "https://openjdk.org/jeps/440" },
              { title: "Oracle: Pattern Matching", url: "https://docs.oracle.com/en/java/javase/21/language/pattern-matching.html" },
            ],
          },
        ],
      },
      {
        id: "java-w2",
        title: "第 2 周：函数式编程",
        summary: "深入 Stream API、Optional 与 Lambda 表达式的高级用法。",
        keyPoints: [
          "Stream API 是声明式数据处理的核心。",
          "Optional 是处理空值的函数式方式。",
          "Lambda 表达式简化函数式接口的实现。",
        ],
        lessons: [
          {
            id: "java-w2-1",
            title: "Stream API 深入",
            detail: "掌握 Stream 的中间操作、终端操作与并行流。",
            keyPoints: [
              "中间操作：filter、map、flatMap、distinct、sorted、peek。",
              "终端操作：collect、reduce、forEach、count、anyMatch。",
              "Collectors：toList、toMap、groupingBy、partitioningBy。",
              "并行流：parallelStream()，注意线程安全与顺序。",
            ],
            resources: [
              { title: "Oracle: Stream API", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html" },
              { title: "Baeldung: Java Streams", url: "https://www.baeldung.com/java-8-streams" },
              { title: "Java Streams Collectors", url: "https://www.baeldung.com/java-8-collectors" },
            ],
          },
          {
            id: "java-w2-2",
            title: "Optional 最佳实践",
            detail: "正确使用 Optional 避免 NullPointerException。",
            keyPoints: [
              "Optional 应作为返回值类型，不应作为字段或参数。",
              "map/flatMap/filter 链式处理值。",
              "orElse/orElseGet/orElseThrow 提供默认值或异常。",
              "避免 isPresent + get 反模式。",
            ],
            resources: [
              { title: "Oracle: Optional", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html" },
              { title: "Baeldung: Optional Guide", url: "https://www.baeldung.com/java-optional" },
              { title: "Optional Best Practices", url: "https://dzone.com/articles/optional-in-java" },
            ],
          },
          {
            id: "java-w2-3",
            title: "Lambda 与方法引用",
            detail: "理解 Lambda 表达式的原理与方法引用的使用。",
            keyPoints: [
              "Lambda 是函数式接口的匿名实现。",
              "方法引用：静态方法、实例方法、构造方法引用。",
              "有效 final：Lambda 捕获的变量不可修改。",
              "函数式接口：Function、Consumer、Supplier、Predicate。",
            ],
            resources: [
              { title: "Oracle: Lambda Expressions", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html" },
              { title: "Baeldung: Method References", url: "https://www.baeldung.com/java-method-references" },
              { title: "Functional Interfaces", url: "https://www.baeldung.com/java-8-functional-interfaces" },
            ],
          },
        ],
      },
      {
        id: "java-w3",
        title: "第 3 周：并发编程进阶",
        summary: "掌握 Structured Concurrency、CompletableFuture 与并发集合。",
        keyPoints: [
          "Structured Concurrency 将相关任务作为一个工作单元管理。",
          "CompletableFuture 是异步编程的核心工具。",
          "并发集合提供线程安全的数据结构。",
        ],
        lessons: [
          {
            id: "java-w3-1",
            title: "Structured Concurrency",
            detail: "使用 Structured Concurrency 管理并发任务组。",
            keyPoints: [
              "StructuredTaskScope：管理一组相关的并发任务。",
              "ShutdownOnFailure：任一任务失败时取消其他任务。",
              "ShutdownOnSuccess：任一任务成功时取消其他任务。",
              "确保子任务不会泄漏，简化错误处理。",
            ],
            resources: [
              { title: "JEP 453: Structured Concurrency", url: "https://openjdk.org/jeps/453" },
              { title: "Inside Java: Structured Concurrency", url: "https://inside.java/2023/09/26/structured-concurrency/" },
              { title: "Baeldung: Structured Concurrency", url: "https://www.baeldung.com/java-structured-concurrency" },
            ],
          },
          {
            id: "java-w3-2",
            title: "CompletableFuture",
            detail: "使用 CompletableFuture 进行异步编程。",
            keyPoints: [
              "创建：supplyAsync、runAsync、completedFuture。",
              "组合：thenApply、thenCompose、thenCombine。",
              "异常处理：exceptionally、handle、whenComplete。",
              "多任务：allOf、anyOf。",
            ],
            resources: [
              { title: "Oracle: CompletableFuture", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html" },
              { title: "Baeldung: CompletableFuture Guide", url: "https://www.baeldung.com/java-completablefuture" },
              { title: "CompletableFuture Patterns", url: "https://www.nurkiewicz.com/2013/05/java-8-definitive-guide-to.html" },
            ],
          },
          {
            id: "java-w3-3",
            title: "并发集合与原子类",
            detail: "使用线程安全的集合与原子操作。",
            keyPoints: [
              "ConcurrentHashMap：分段锁，高并发读写。",
              "CopyOnWriteArrayList：写时复制，适合读多写少。",
              "BlockingQueue：生产者消费者模式。",
              "AtomicInteger/AtomicReference：无锁原子操作。",
            ],
            resources: [
              { title: "Oracle: Concurrent Collections", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/package-summary.html" },
              { title: "Baeldung: ConcurrentHashMap", url: "https://www.baeldung.com/java-concurrent-map" },
              { title: "Java Atomic Variables", url: "https://www.baeldung.com/java-atomic-variables" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：JVM 内核（第 4-6 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "java-jvm-core",
    title: "阶段二：JVM 内核",
    duration: "第 4-6 周",
    goal: "深入理解 JVM 架构、内存模型与 JIT 编译原理。",
    weeks: [
      {
        id: "java-w4",
        title: "第 4 周：JVM 架构",
        summary: "理解 JVM 的类加载、运行时数据区与执行引擎。",
        keyPoints: [
          "类加载器采用双亲委派模型，保证类的唯一性。",
          "运行时数据区包括堆、栈、方法区、程序计数器。",
          "执行引擎负责字节码解释与 JIT 编译。",
        ],
        lessons: [
          {
            id: "java-w4-1",
            title: "类加载机制",
            detail: "理解类的加载、链接、初始化过程。",
            keyPoints: [
              "加载：读取 .class 文件，创建 Class 对象。",
              "链接：验证、准备（分配内存）、解析（符号引用转直接引用）。",
              "初始化：执行 <clinit> 方法，初始化静态变量。",
              "双亲委派：Bootstrap → Extension → Application ClassLoader。",
            ],
            resources: [
              { title: "Oracle: Class Loading", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html" },
              { title: "Baeldung: Class Loaders", url: "https://www.baeldung.com/java-classloaders" },
              { title: "Understanding ClassLoaders", url: "https://www.infoq.com/articles/java-class-loading/" },
            ],
          },
          {
            id: "java-w4-2",
            title: "运行时数据区",
            detail: "理解 JVM 各内存区域的作用与特点。",
            keyPoints: [
              "堆（Heap）：对象实例存储，GC 主要区域。",
              "虚拟机栈（Stack）：每个线程一个，存储栈帧。",
              "方法区/Metaspace：类元数据、常量池。",
              "程序计数器：当前执行的字节码行号。",
            ],
            resources: [
              { title: "JVM Specification: Runtime Data Areas", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.5" },
              { title: "Baeldung: JVM Memory", url: "https://www.baeldung.com/java-stack-heap" },
              { title: "Understanding Metaspace", url: "https://www.baeldung.com/java-permgen-metaspace" },
            ],
          },
          {
            id: "java-w4-3",
            title: "执行引擎",
            detail: "理解字节码解释与即时编译的工作原理。",
            keyPoints: [
              "解释器：逐条解释执行字节码。",
              "JIT 编译器：将热点代码编译为本地机器码。",
              "混合模式：解释执行 + JIT 编译。",
              "AOT 编译：GraalVM 提前编译为本地代码。",
            ],
            resources: [
              { title: "Oracle: Execution Engine", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.6" },
              { title: "JIT Compilation", url: "https://www.ibm.com/docs/en/sdk-java-technology/8?topic=compiler-jit" },
              { title: "Understanding JIT", url: "https://www.baeldung.com/graal-java-jit-compiler" },
            ],
          },
        ],
      },
      {
        id: "java-w5",
        title: "第 5 周：内存模型",
        summary: "深入理解 Java 内存模型与对象内存布局。",
        keyPoints: [
          "JMM 定义了多线程环境下的内存可见性规则。",
          "对象在堆中的布局影响内存占用与缓存效率。",
          "volatile 和 synchronized 提供不同级别的内存可见性。",
        ],
        lessons: [
          {
            id: "java-w5-1",
            title: "Java 内存模型 (JMM)",
            detail: "理解 JMM 的 happens-before 规则与内存可见性。",
            keyPoints: [
              "主内存与工作内存：线程不直接操作主内存。",
              "happens-before：定义操作之间的可见性顺序。",
              "volatile：保证可见性，禁止指令重排序。",
              "synchronized：保证原子性、可见性、有序性。",
            ],
            resources: [
              { title: "JSR 133: Java Memory Model", url: "https://www.cs.umd.edu/~pugh/java/memoryModel/jsr133.pdf" },
              { title: "Baeldung: JMM", url: "https://www.baeldung.com/java-volatile" },
              { title: "Java Memory Model Pragmatics", url: "https://shipilev.net/blog/2014/jmm-pragmatics/" },
            ],
          },
          {
            id: "java-w5-2",
            title: "对象内存布局",
            detail: "理解对象在堆中的存储结构。",
            keyPoints: [
              "对象头：Mark Word（锁状态、GC 年龄）、类型指针。",
              "实例数据：字段值，按类型对齐。",
              "对齐填充：保证对象大小是 8 字节的倍数。",
              "指针压缩：-XX:+UseCompressedOops 减少内存占用。",
            ],
            resources: [
              { title: "JOL: Java Object Layout", url: "https://openjdk.org/projects/code-tools/jol/" },
              { title: "Object Memory Layout", url: "https://www.baeldung.com/java-memory-layout" },
              { title: "Compressed OOPs", url: "https://wiki.openjdk.org/display/HotSpot/CompressedOops" },
            ],
          },
          {
            id: "java-w5-3",
            title: "逃逸分析与优化",
            detail: "理解 JVM 的逃逸分析与相关优化。",
            keyPoints: [
              "逃逸分析：判断对象是否逃逸出方法或线程。",
              "栈上分配：不逃逸对象可在栈上分配，减少 GC。",
              "标量替换：将对象拆解为标量变量。",
              "锁消除：不逃逸对象上的锁可以消除。",
            ],
            resources: [
              { title: "Escape Analysis", url: "https://www.baeldung.com/java-escape-analysis" },
              { title: "HotSpot Escape Analysis", url: "https://wiki.openjdk.org/display/HotSpot/EscapeAnalysis" },
              { title: "JVM Optimizations", url: "https://www.ibm.com/docs/en/sdk-java-technology/8?topic=techniques-escape-analysis" },
            ],
          },
        ],
      },
      {
        id: "java-w6",
        title: "第 6 周：JIT 编译",
        summary: "深入理解 JIT 编译器的工作原理与优化技术。",
        keyPoints: [
          "分层编译结合解释器与 C1/C2 编译器的优势。",
          "JIT 编译器应用多种优化技术提升性能。",
          "了解编译阈值与热点代码识别机制。",
        ],
        lessons: [
          {
            id: "java-w6-1",
            title: "分层编译",
            detail: "理解 C1/C2 编译器与分层编译策略。",
            keyPoints: [
              "C1 编译器：快速编译，基本优化，适合启动阶段。",
              "C2 编译器：深度优化，编译时间长，适合热点代码。",
              "分层编译：Level 0-4，逐步提升优化级别。",
              "-XX:+TieredCompilation（默认启用）。",
            ],
            resources: [
              { title: "Tiered Compilation", url: "https://docs.oracle.com/en/java/javase/21/vm/java-virtual-machine-technology-overview.html" },
              { title: "Understanding JIT Compilation", url: "https://www.baeldung.com/java-tiered-compilation" },
              { title: "C1 and C2 Compilers", url: "https://www.infoq.com/articles/OpenJDK-HotSpot-What-the-JIT/" },
            ],
          },
          {
            id: "java-w6-2",
            title: "JIT 优化技术",
            detail: "了解 JIT 编译器应用的主要优化技术。",
            keyPoints: [
              "内联（Inlining）：消除方法调用开销。",
              "循环优化：展开、向量化、不变量外提。",
              "死代码消除：删除不可达或无效代码。",
              "分支预测：优化条件跳转。",
            ],
            resources: [
              { title: "JIT Optimizations", url: "https://www.oracle.com/technical-resources/articles/java/architect-evans-pt1.html" },
              { title: "Method Inlining", url: "https://www.baeldung.com/jvm-method-inlining" },
              { title: "JIT Compiler Internals", url: "https://shipilev.net/jvm/anatomy-quarks/3-gc-roots-and-safepoints/" },
            ],
          },
          {
            id: "java-w6-3",
            title: "编译日志与调优",
            detail: "使用编译日志分析和调优 JIT 行为。",
            keyPoints: [
              "-XX:+PrintCompilation：打印编译信息。",
              "-XX:+UnlockDiagnosticVMOptions -XX:+LogCompilation：详细日志。",
              "JITWatch：可视化分析编译日志。",
              "编译阈值调优：-XX:CompileThreshold。",
            ],
            resources: [
              { title: "JITWatch", url: "https://github.com/AdoptOpenJDK/jitwatch" },
              { title: "Analyzing JIT Compilation", url: "https://www.baeldung.com/java-analyze-jit-compilation" },
              { title: "JVM Tuning Guide", url: "https://docs.oracle.com/en/java/javase/21/gctuning/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：垃圾收集（第 7-9 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "java-gc",
    title: "阶段三：垃圾收集",
    duration: "第 7-9 周",
    goal: "深入理解垃圾收集原理，掌握 G1GC、ZGC 调优技术。",
    weeks: [
      {
        id: "java-w7",
        title: "第 7 周：GC 基础",
        summary: "理解垃圾收集的基本原理与算法。",
        keyPoints: [
          "可达性分析是判断对象存活的核心算法。",
          "分代假说是现代 GC 设计的基础。",
          "SafePoint 是 JVM 执行 GC 的安全点。",
        ],
        lessons: [
          {
            id: "java-w7-1",
            title: "可达性分析与 GC Roots",
            detail: "理解 JVM 如何判断对象是否存活。",
            keyPoints: [
              "GC Roots：栈帧中的引用、静态变量、JNI 引用等。",
              "可达性分析：从 GC Roots 出发遍历引用链。",
              "不可达对象可能被回收，但需经过 finalize 检查。",
              "强/软/弱/虚引用：不同强度的引用类型。",
            ],
            resources: [
              { title: "Oracle: Garbage Collection", url: "https://docs.oracle.com/en/java/javase/21/gctuning/introduction-garbage-collection-tuning.html" },
              { title: "Understanding GC Roots", url: "https://www.baeldung.com/java-gc-roots" },
              { title: "Java Reference Types", url: "https://www.baeldung.com/java-weak-reference" },
            ],
          },
          {
            id: "java-w7-2",
            title: "分代收集",
            detail: "理解分代假说与分代收集策略。",
            keyPoints: [
              "弱分代假说：大多数对象朝生夕死。",
              "强分代假说：熬过多次 GC 的对象更难死亡。",
              "Young Generation：Eden + Survivor，Minor GC。",
              "Old Generation：长期存活对象，Major/Full GC。",
            ],
            resources: [
              { title: "Generational GC", url: "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-collector-implementation.html" },
              { title: "Baeldung: Generations", url: "https://www.baeldung.com/jvm-garbage-collectors" },
              { title: "Memory Management", url: "https://www.oracle.com/technical-resources/articles/java/g1gc.html" },
            ],
          },
          {
            id: "java-w7-3",
            title: "SafePoint 与 STW",
            detail: "理解 SafePoint 机制与 Stop-The-World 暂停。",
            keyPoints: [
              "SafePoint：所有线程暂停的安全点。",
              "STW（Stop-The-World）：GC 期间应用线程暂停。",
              "TTSP（Time To SafePoint）：进入 SafePoint 的时间。",
              "减少 STW 是现代 GC 的核心目标。",
            ],
            resources: [
              { title: "Safepoints", url: "https://shipilev.net/jvm/anatomy-quarks/22-safepoint-polls/" },
              { title: "Understanding STW", url: "https://www.baeldung.com/java-gc-time-to-safepoint" },
              { title: "JVM Safepoints", url: "https://medium.com/software-under-the-hood/under-the-hood-java-peak-safepoints-dd45af07d766" },
            ],
          },
        ],
      },
      {
        id: "java-w8",
        title: "第 8 周：G1GC 与 ZGC",
        summary: "掌握 G1GC 与 Generational ZGC 的原理与配置。",
        keyPoints: [
          "G1GC 是 Java 默认 GC，平衡吞吐量与延迟。",
          "ZGC 追求极低延迟，暂停时间 <1ms。",
          "Generational ZGC 结合分代收集与低延迟优势。",
        ],
        lessons: [
          {
            id: "java-w8-1",
            title: "G1GC 原理",
            detail: "理解 G1GC 的 Region 设计与混合收集策略。",
            keyPoints: [
              "Region：堆划分为多个大小相等的 Region。",
              "Remembered Set：跨 Region 引用追踪。",
              "Mixed GC：同时收集 Young 和部分 Old Region。",
              "Humongous Objects：大对象直接分配到 Humongous Region。",
            ],
            resources: [
              { title: "Oracle: G1GC", url: "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-first-g1-garbage-collector1.html" },
              { title: "G1GC Tuning", url: "https://www.oracle.com/technical-resources/articles/java/g1gc.html" },
              { title: "G1GC Deep Dive", url: "https://www.baeldung.com/jvm-garbage-collectors#g1-garbage-collector" },
            ],
          },
          {
            id: "java-w8-2",
            title: "ZGC 与 Generational ZGC",
            detail: "理解 ZGC 的并发处理与 Java 21 分代改进。",
            keyPoints: [
              "ZGC：并发标记、并发转移，暂停时间 <1ms。",
              "Colored Pointers：指针中嵌入标记信息。",
              "Load Barrier：加载引用时的屏障处理。",
              "Generational ZGC：-XX:+UseZGC -XX:+ZGenerational，吞吐量提升 4x。",
            ],
            resources: [
              { title: "Oracle: ZGC", url: "https://docs.oracle.com/en/java/javase/21/gctuning/z-garbage-collector.html" },
              { title: "Generational ZGC", url: "https://openjdk.org/jeps/439" },
              { title: "ZGC Deep Dive", url: "https://malloc.se/blog/zgc-jdk21" },
            ],
          },
          {
            id: "java-w8-3",
            title: "Shenandoah GC",
            detail: "了解 Shenandoah 的设计与适用场景。",
            keyPoints: [
              "Shenandoah：Red Hat 开发的低延迟 GC。",
              "并发压缩：在应用运行时移动对象。",
              "Brooks Pointer：转发指针处理对象移动。",
              "Generational Shenandoah（Java 24）：分代版本。",
            ],
            resources: [
              { title: "Shenandoah GC", url: "https://wiki.openjdk.org/display/shenandoah/Main" },
              { title: "Red Hat: Shenandoah Guide", url: "https://developers.redhat.com/articles/2024/05/28/beginners-guide-shenandoah-garbage-collector" },
              { title: "Shenandoah vs ZGC", url: "https://www.baeldung.com/jvm-garbage-collectors#shenandoah" },
            ],
          },
        ],
      },
      {
        id: "java-w9",
        title: "第 9 周：GC 调优实战",
        summary: "掌握 GC 日志分析与调优技巧。",
        keyPoints: [
          "GC 日志是诊断 GC 问题的核心数据。",
          "选择合适的 GC 取决于应用特点。",
          "调优目标应明确：吞吐量、延迟还是内存占用。",
        ],
        lessons: [
          {
            id: "java-w9-1",
            title: "GC 日志分析",
            detail: "配置和分析 GC 日志定位问题。",
            keyPoints: [
              "-Xlog:gc*:file=gc.log：统一日志配置。",
              "GC 日志内容：GC 原因、各阶段耗时、堆变化。",
              "GCEasy、GCViewer：可视化分析工具。",
              "关注指标：GC 频率、暂停时间、吞吐量。",
            ],
            resources: [
              { title: "GC Logging", url: "https://docs.oracle.com/en/java/javase/21/gctuning/gc-tuning-basics.html" },
              { title: "GCEasy", url: "https://gceasy.io/" },
              { title: "Analyzing GC Logs", url: "https://www.baeldung.com/java-gc-log-analysis" },
            ],
          },
          {
            id: "java-w9-2",
            title: "GC 选型指南",
            detail: "根据应用特点选择合适的垃圾收集器。",
            keyPoints: [
              "G1GC：通用场景，平衡吞吐与延迟。",
              "ZGC：大堆（TB 级）、低延迟（<1ms）。",
              "Shenandoah：低延迟、较小堆（几百 GB）。",
              "Parallel GC：批处理、高吞吐优先。",
            ],
            resources: [
              { title: "Selecting a GC", url: "https://docs.oracle.com/en/java/javase/21/gctuning/available-collectors.html" },
              { title: "GC Comparison", url: "https://blog.gceasy.io/java-garbage-collection-best-gc-algorithms/" },
              { title: "When to Use Which GC", url: "https://www.baeldung.com/jvm-garbage-collectors" },
            ],
          },
          {
            id: "java-w9-3",
            title: "常见 GC 问题诊断",
            detail: "诊断和解决常见的 GC 性能问题。",
            keyPoints: [
              "频繁 Full GC：内存泄漏、对象晋升过快。",
              "长暂停：堆过大、大对象分配。",
              "内存抖动：对象分配过快、Eden 过小。",
              "Metaspace OOM：类加载过多、动态代理。",
            ],
            resources: [
              { title: "GC Troubleshooting", url: "https://docs.oracle.com/en/java/javase/21/troubleshoot/troubleshoot-memory-leaks.html" },
              { title: "Memory Leak Detection", url: "https://www.baeldung.com/java-memory-leaks" },
              { title: "GC Performance Patterns", url: "https://dzone.com/articles/java-gc-tuning-for-fun-and-profit" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：Spring 生态（第 10-13 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "java-spring",
    title: "阶段四：Spring 生态",
    duration: "第 10-13 周",
    goal: "掌握 Spring Boot 3.x、Spring Framework 6.x 核心原理与实践。",
    weeks: [
      {
        id: "java-w10",
        title: "第 10 周：Spring Boot 3.x",
        summary: "掌握 Spring Boot 3.x 核心特性与最佳实践。",
        keyPoints: [
          "Spring Boot 3.x 基于 Spring Framework 6.x 和 Jakarta EE。",
          "自动配置大幅减少样板代码。",
          "Actuator 提供生产级监控与管理能力。",
        ],
        lessons: [
          {
            id: "java-w10-1",
            title: "自动配置原理",
            detail: "理解 Spring Boot 自动配置的工作机制。",
            keyPoints: [
              "@EnableAutoConfiguration：启用自动配置。",
              "spring.factories / AutoConfiguration.imports：配置类发现。",
              "@Conditional：条件化配置激活。",
              "配置属性绑定：@ConfigurationProperties。",
            ],
            resources: [
              { title: "Spring Boot Auto-configuration", url: "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-auto-configuration" },
              { title: "Understanding Auto-configuration", url: "https://www.baeldung.com/spring-boot-custom-auto-configuration" },
              { title: "Conditional Annotations", url: "https://www.baeldung.com/spring-conditional-annotations" },
            ],
          },
          {
            id: "java-w10-2",
            title: "Actuator 监控",
            detail: "使用 Actuator 监控和管理应用。",
            keyPoints: [
              "健康检查：/actuator/health，自定义健康指示器。",
              "指标暴露：/actuator/metrics，Micrometer 集成。",
              "端点安全：使用 Spring Security 保护端点。",
              "Prometheus 集成：/actuator/prometheus。",
            ],
            resources: [
              { title: "Spring Boot Actuator", url: "https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html" },
              { title: "Production-ready Features", url: "https://www.baeldung.com/spring-boot-actuators" },
              { title: "Micrometer with Spring", url: "https://micrometer.io/docs/registry/prometheus" },
            ],
          },
          {
            id: "java-w10-3",
            title: "结构化日志与可观测性",
            detail: "配置 Spring Boot 3.4 的结构化日志与追踪。",
            keyPoints: [
              "结构化日志：ECS、GELF、Logstash 格式。",
              "分布式追踪：Micrometer Tracing、OpenTelemetry。",
              "日志关联：trace_id、span_id 自动注入。",
              "Observability 自动配置。",
            ],
            resources: [
              { title: "Spring Boot 3.4 Structured Logging", url: "https://docs.spring.io/spring-boot/docs/3.4.0/reference/html/features.html#features.logging.structured" },
              { title: "Distributed Tracing", url: "https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator.tracing" },
              { title: "OpenTelemetry with Spring", url: "https://opentelemetry.io/docs/instrumentation/java/automatic/spring-boot/" },
            ],
          },
        ],
      },
      {
        id: "java-w11",
        title: "第 11 周：Spring Framework 6.x",
        summary: "深入理解 Spring 核心原理：IoC、AOP、事务管理。",
        keyPoints: [
          "IoC 容器管理 Bean 的生命周期与依赖关系。",
          "AOP 实现横切关注点的模块化。",
          "声明式事务简化事务管理代码。",
        ],
        lessons: [
          {
            id: "java-w11-1",
            title: "IoC 容器与 Bean 生命周期",
            detail: "理解 Spring IoC 容器的核心机制。",
            keyPoints: [
              "BeanFactory vs ApplicationContext：基础 vs 增强。",
              "Bean 生命周期：实例化 → 属性注入 → 初始化 → 销毁。",
              "作用域：singleton、prototype、request、session。",
              "循环依赖：三级缓存解决 setter 注入循环依赖。",
            ],
            resources: [
              { title: "Spring IoC Container", url: "https://docs.spring.io/spring-framework/reference/core/beans.html" },
              { title: "Bean Lifecycle", url: "https://www.baeldung.com/spring-bean-lifecycle" },
              { title: "Circular Dependencies", url: "https://www.baeldung.com/circular-dependencies-in-spring" },
            ],
          },
          {
            id: "java-w11-2",
            title: "AOP 原理",
            detail: "理解 Spring AOP 的实现原理与使用方式。",
            keyPoints: [
              "代理模式：JDK 动态代理（接口）、CGLIB（类）。",
              "切面概念：Pointcut、Advice、Joinpoint、Aspect。",
              "通知类型：Before、After、Around、AfterReturning、AfterThrowing。",
              "@Transactional 基于 AOP 实现。",
            ],
            resources: [
              { title: "Spring AOP", url: "https://docs.spring.io/spring-framework/reference/core/aop.html" },
              { title: "AOP Concepts", url: "https://www.baeldung.com/spring-aop" },
              { title: "Proxying Mechanisms", url: "https://www.baeldung.com/spring-aop-vs-aspectj" },
            ],
          },
          {
            id: "java-w11-3",
            title: "事务管理",
            detail: "掌握 Spring 声明式事务管理与传播行为。",
            keyPoints: [
              "@Transactional：声明式事务注解。",
              "传播行为：REQUIRED、REQUIRES_NEW、NESTED 等。",
              "隔离级别：READ_COMMITTED、REPEATABLE_READ 等。",
              "事务失效场景：自调用、异常类型、非 public 方法。",
            ],
            resources: [
              { title: "Spring Transactions", url: "https://docs.spring.io/spring-framework/reference/data-access/transaction.html" },
              { title: "Transaction Propagation", url: "https://www.baeldung.com/spring-transactional-propagation-isolation" },
              { title: "Common Pitfalls", url: "https://www.baeldung.com/spring-transactional-transaction-not-working" },
            ],
          },
        ],
      },
      {
        id: "java-w12",
        title: "第 12 周：Spring WebFlux",
        summary: "掌握响应式编程与 Spring WebFlux 开发。",
        keyPoints: [
          "响应式编程采用非阻塞、事件驱动模型。",
          "Project Reactor 提供 Mono 和 Flux 响应式类型。",
          "WebFlux 支持函数式端点和注解式端点。",
        ],
        lessons: [
          {
            id: "java-w12-1",
            title: "Project Reactor 基础",
            detail: "掌握 Mono 和 Flux 的核心操作。",
            keyPoints: [
              "Mono：0 或 1 个元素的异步序列。",
              "Flux：0 到 N 个元素的异步序列。",
              "操作符：map、flatMap、filter、zip、merge。",
              "背压（Backpressure）：控制数据流速。",
            ],
            resources: [
              { title: "Project Reactor", url: "https://projectreactor.io/docs/core/release/reference/" },
              { title: "Reactor Guide", url: "https://www.baeldung.com/reactor-core" },
              { title: "Reactor Operators", url: "https://projectreactor.io/docs/core/release/api/reactor/core/publisher/Flux.html" },
            ],
          },
          {
            id: "java-w12-2",
            title: "WebFlux 开发",
            detail: "使用 Spring WebFlux 构建响应式 Web 应用。",
            keyPoints: [
              "注解式：@RestController + Mono/Flux 返回值。",
              "函数式：RouterFunction + HandlerFunction。",
              "WebClient：响应式 HTTP 客户端。",
              "SSE/WebSocket：服务器推送与双向通信。",
            ],
            resources: [
              { title: "Spring WebFlux", url: "https://docs.spring.io/spring-framework/reference/web/webflux.html" },
              { title: "WebFlux Guide", url: "https://www.baeldung.com/spring-webflux" },
              { title: "WebClient", url: "https://www.baeldung.com/spring-5-webclient" },
            ],
          },
          {
            id: "java-w12-3",
            title: "R2DBC 响应式数据库",
            detail: "使用 R2DBC 进行响应式数据库访问。",
            keyPoints: [
              "R2DBC：Reactive Relational Database Connectivity。",
              "Spring Data R2DBC：响应式 Repository。",
              "支持数据库：PostgreSQL、MySQL、H2 等。",
              "事务管理：@Transactional 支持响应式事务。",
            ],
            resources: [
              { title: "Spring Data R2DBC", url: "https://spring.io/projects/spring-data-r2dbc" },
              { title: "R2DBC Guide", url: "https://www.baeldung.com/spring-data-r2dbc" },
              { title: "R2DBC Specification", url: "https://r2dbc.io/" },
            ],
          },
        ],
      },
      {
        id: "java-w13",
        title: "第 13 周：Spring Cloud",
        summary: "掌握 Spring Cloud 微服务核心组件。",
        keyPoints: [
          "服务发现实现服务的动态注册与发现。",
          "配置中心集中管理分布式配置。",
          "熔断限流保护服务免受故障传播。",
        ],
        lessons: [
          {
            id: "java-w13-1",
            title: "服务发现",
            detail: "使用 Spring Cloud 实现服务注册与发现。",
            keyPoints: [
              "Eureka：Netflix 服务发现（维护模式）。",
              "Consul：HashiCorp 服务发现。",
              "Nacos：阿里巴巴服务发现与配置中心。",
              "Kubernetes Service Discovery：云原生方案。",
            ],
            resources: [
              { title: "Spring Cloud Service Discovery", url: "https://spring.io/guides/gs/service-registration-and-discovery/" },
              { title: "Spring Cloud Consul", url: "https://spring.io/projects/spring-cloud-consul" },
              { title: "Spring Cloud Kubernetes", url: "https://spring.io/projects/spring-cloud-kubernetes" },
            ],
          },
          {
            id: "java-w13-2",
            title: "配置中心",
            detail: "使用配置中心管理分布式配置。",
            keyPoints: [
              "Spring Cloud Config：Git 后端配置中心。",
              "Consul KV：Consul 配置存储。",
              "Nacos Config：动态配置推送。",
              "配置加密：敏感配置加密存储。",
            ],
            resources: [
              { title: "Spring Cloud Config", url: "https://spring.io/projects/spring-cloud-config" },
              { title: "Config Server Guide", url: "https://www.baeldung.com/spring-cloud-configuration" },
              { title: "Nacos Config", url: "https://nacos.io/en-us/docs/quick-start-spring-cloud.html" },
            ],
          },
          {
            id: "java-w13-3",
            title: "熔断与限流",
            detail: "使用 Resilience4j 实现熔断、限流、重试。",
            keyPoints: [
              "Circuit Breaker：熔断器，防止故障传播。",
              "Rate Limiter：限流，保护系统免受过载。",
              "Retry：重试，处理临时故障。",
              "Bulkhead：舱壁隔离，限制并发。",
            ],
            resources: [
              { title: "Resilience4j", url: "https://resilience4j.readme.io/docs/getting-started" },
              { title: "Spring Cloud Circuit Breaker", url: "https://spring.io/projects/spring-cloud-circuitbreaker" },
              { title: "Resilience4j Guide", url: "https://www.baeldung.com/resilience4j" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段五：性能调优（第 14-16 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "java-performance",
    title: "阶段五：性能调优",
    duration: "第 14-16 周",
    goal: "掌握 Java 性能分析工具与调优技术。",
    weeks: [
      {
        id: "java-w14",
        title: "第 14 周：性能分析工具",
        summary: "掌握 JFR、async-profiler 等性能分析工具。",
        keyPoints: [
          "JFR 是低开销的生产级性能分析工具。",
          "async-profiler 提供准确的 CPU 和内存剖析。",
          "火焰图直观展示程序热点。",
        ],
        lessons: [
          {
            id: "java-w14-1",
            title: "JDK Flight Recorder (JFR)",
            detail: "使用 JFR 进行生产环境性能分析。",
            keyPoints: [
              "JFR：内置于 JDK 的低开销事件记录框架。",
              "启动方式：-XX:StartFlightRecording，jcmd。",
              "事件类型：CPU、内存、锁、I/O、GC。",
              "JDK Mission Control：JFR 数据分析工具。",
            ],
            resources: [
              { title: "JDK Flight Recorder", url: "https://docs.oracle.com/en/java/javase/21/jfapi/" },
              { title: "JFR Guide", url: "https://www.baeldung.com/java-flight-recorder-monitoring" },
              { title: "JDK Mission Control", url: "https://www.oracle.com/java/technologies/jdk-mission-control.html" },
            ],
          },
          {
            id: "java-w14-2",
            title: "async-profiler",
            detail: "使用 async-profiler 进行采样剖析。",
            keyPoints: [
              "async-profiler：低开销、高精度的采样剖析器。",
              "CPU 剖析：识别 CPU 热点方法。",
              "内存剖析：追踪对象分配。",
              "Wall-clock 剖析：包含阻塞时间。",
            ],
            resources: [
              { title: "async-profiler", url: "https://github.com/async-profiler/async-profiler" },
              { title: "Profiling Guide", url: "https://krzysztofslusarski.github.io/2022/12/12/async-manual.html" },
              { title: "IntelliJ Profiler", url: "https://www.jetbrains.com/help/idea/profiler-intro.html" },
            ],
          },
          {
            id: "java-w14-3",
            title: "火焰图分析",
            detail: "使用火焰图可视化性能数据。",
            keyPoints: [
              "火焰图：X 轴是方法调用栈，Y 轴是调用深度。",
              "宽度代表采样占比，越宽越热。",
              "颜色通常无特殊含义，仅用于区分。",
              "分析方向：自顶向下找热点，自底向上找调用者。",
            ],
            resources: [
              { title: "Flame Graphs", url: "https://www.brendangregg.com/flamegraphs.html" },
              { title: "Java Flame Graphs", url: "https://www.baeldung.com/java-flame-graphs" },
              { title: "Speedscope", url: "https://www.speedscope.app/" },
            ],
          },
        ],
      },
      {
        id: "java-w15",
        title: "第 15 周：内存分析",
        summary: "掌握堆转储分析与内存泄漏排查技术。",
        keyPoints: [
          "堆转储是诊断内存问题的核心数据。",
          "MAT 是分析堆转储的强大工具。",
          "内存泄漏通常是引用未正确释放导致。",
        ],
        lessons: [
          {
            id: "java-w15-1",
            title: "堆转储分析",
            detail: "获取和分析堆转储文件。",
            keyPoints: [
              "获取方式：jmap、jcmd、-XX:+HeapDumpOnOutOfMemoryError。",
              "MAT（Memory Analyzer Tool）：Eclipse 内存分析工具。",
              "Dominator Tree：对象支配树。",
              "Retained Heap：对象及其引用链占用的内存。",
            ],
            resources: [
              { title: "Eclipse MAT", url: "https://eclipse.dev/mat/" },
              { title: "Heap Dump Analysis", url: "https://www.baeldung.com/java-heap-dump-capture" },
              { title: "MAT Tutorial", url: "https://help.eclipse.org/latest/index.jsp?topic=/org.eclipse.mat.ui.help/gettingstarted/basictutorial.html" },
            ],
          },
          {
            id: "java-w15-2",
            title: "内存泄漏排查",
            detail: "识别和修复常见内存泄漏问题。",
            keyPoints: [
              "常见泄漏：静态集合、监听器未注销、ThreadLocal。",
              "GC Roots 分析：追踪对象为何无法被回收。",
              "内存增长趋势：监控堆使用量变化。",
              "使用弱引用：WeakHashMap、WeakReference。",
            ],
            resources: [
              { title: "Memory Leaks", url: "https://www.baeldung.com/java-memory-leaks" },
              { title: "Finding Memory Leaks", url: "https://dzone.com/articles/finding-memory-leaks-in-java" },
              { title: "ThreadLocal Leaks", url: "https://www.baeldung.com/java-threadlocal" },
            ],
          },
          {
            id: "java-w15-3",
            title: "堆外内存分析",
            detail: "监控和分析堆外内存使用。",
            keyPoints: [
              "堆外内存：DirectByteBuffer、Metaspace、JNI。",
              "Native Memory Tracking：-XX:NativeMemoryTracking=summary。",
              "jcmd VM.native_memory：查看本地内存使用。",
              "常见问题：DirectBuffer 泄漏、Metaspace 溢出。",
            ],
            resources: [
              { title: "Native Memory Tracking", url: "https://docs.oracle.com/en/java/javase/21/vm/native-memory-tracking.html" },
              { title: "Off-Heap Memory", url: "https://www.baeldung.com/java-native-memory-tracking" },
              { title: "DirectByteBuffer", url: "https://www.baeldung.com/java-bytebuffer" },
            ],
          },
        ],
      },
      {
        id: "java-w16",
        title: "第 16 周：应用性能优化",
        summary: "掌握 Java 应用性能优化技巧。",
        keyPoints: [
          "性能优化应基于数据，避免过早优化。",
          "I/O 和网络通常是性能瓶颈。",
          "缓存和连接池是常见优化手段。",
        ],
        lessons: [
          {
            id: "java-w16-1",
            title: "代码层优化",
            detail: "优化热点代码提升应用性能。",
            keyPoints: [
              "字符串优化：StringBuilder、String.intern()。",
              "集合选择：ArrayList vs LinkedList、HashMap 容量。",
              "避免装箱：使用原始类型和专用集合。",
              "延迟初始化：减少启动时间。",
            ],
            resources: [
              { title: "Java Performance", url: "https://www.oreilly.com/library/view/java-performance-2nd/9781492056119/" },
              { title: "Effective Java", url: "https://www.oreilly.com/library/view/effective-java/9780134686097/" },
              { title: "Performance Tips", url: "https://www.baeldung.com/java-performance-optimization" },
            ],
          },
          {
            id: "java-w16-2",
            title: "连接池与缓存",
            detail: "使用连接池和缓存提升性能。",
            keyPoints: [
              "数据库连接池：HikariCP 配置与调优。",
              "HTTP 连接池：连接复用，减少握手开销。",
              "本地缓存：Caffeine、Guava Cache。",
              "分布式缓存：Redis 集成。",
            ],
            resources: [
              { title: "HikariCP", url: "https://github.com/brettwooldridge/HikariCP" },
              { title: "Caffeine Cache", url: "https://github.com/ben-manes/caffeine" },
              { title: "Caching Guide", url: "https://www.baeldung.com/java-caching-caffeine" },
            ],
          },
          {
            id: "java-w16-3",
            title: "JVM 参数调优",
            detail: "调整 JVM 参数优化应用性能。",
            keyPoints: [
              "堆大小：-Xms、-Xmx 设置初始和最大堆。",
              "GC 选择：根据场景选择合适的 GC。",
              "JIT 调优：-XX:+TieredCompilation。",
              "容器感知：-XX:+UseContainerSupport。",
            ],
            resources: [
              { title: "JVM Tuning Guide", url: "https://docs.oracle.com/en/java/javase/21/gctuning/" },
              { title: "JVM Options", url: "https://www.baeldung.com/jvm-parameters" },
              { title: "Container Tuning", url: "https://www.baeldung.com/ops/docker-jvm-heap-size" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段六：云原生 Java（第 17-18 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "java-cloud-native",
    title: "阶段六：云原生 Java",
    duration: "第 17-18 周",
    goal: "掌握 GraalVM Native Image 与云原生 Java 技术。",
    weeks: [
      {
        id: "java-w17",
        title: "第 17 周：GraalVM Native Image",
        summary: "使用 GraalVM 将 Java 应用编译为本地可执行文件。",
        keyPoints: [
          "Native Image 实现毫秒级启动和更低内存占用。",
          "AOT 编译需要处理反射、动态代理等限制。",
          "Spring Boot 3.x 原生支持 Native Image。",
        ],
        lessons: [
          {
            id: "java-w17-1",
            title: "GraalVM 与 Native Image",
            detail: "理解 GraalVM 架构与 Native Image 原理。",
            keyPoints: [
              "GraalVM：高性能 JDK，支持多语言。",
              "Native Image：AOT 编译为本地可执行文件。",
              "闭合世界假设：编译时确定所有类和方法。",
              "优势：毫秒级启动、更低内存、更小体积。",
            ],
            resources: [
              { title: "GraalVM", url: "https://www.graalvm.org/" },
              { title: "Native Image Basics", url: "https://www.graalvm.org/latest/reference-manual/native-image/basics/" },
              { title: "GraalVM Guide", url: "https://www.baeldung.com/graalvm-introduction" },
            ],
          },
          {
            id: "java-w17-2",
            title: "Spring Native",
            detail: "使用 Spring Boot 构建 Native Image 应用。",
            keyPoints: [
              "Spring Boot 3.x 内置 Native Image 支持。",
              "native-maven-plugin / native-gradle-plugin。",
              "运行时提示：反射、资源、序列化配置。",
              "测试：Native 测试与 JVM 测试。",
            ],
            resources: [
              { title: "Spring Native", url: "https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html" },
              { title: "Native Image with Spring", url: "https://www.baeldung.com/spring-native-intro" },
              { title: "GraalVM Reachability Metadata", url: "https://github.com/oracle/graalvm-reachability-metadata" },
            ],
          },
          {
            id: "java-w17-3",
            title: "Native Image 限制与适配",
            detail: "处理 Native Image 的限制与兼容性问题。",
            keyPoints: [
              "反射：需要通过配置或 @RegisterReflection 注册。",
              "动态代理：需要预先声明接口。",
              "资源：需要显式包含资源文件。",
              "序列化：需要注册可序列化的类。",
            ],
            resources: [
              { title: "Native Image Limitations", url: "https://www.graalvm.org/latest/reference-manual/native-image/metadata/" },
              { title: "Reflection Configuration", url: "https://www.graalvm.org/latest/reference-manual/native-image/dynamic-features/Reflection/" },
              { title: "Troubleshooting", url: "https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html#native-image.advanced.troubleshooting" },
            ],
          },
        ],
      },
      {
        id: "java-w18",
        title: "第 18 周：容器化与启动优化",
        summary: "优化 Java 应用的容器化部署与启动性能。",
        keyPoints: [
          "容器镜像优化减少镜像体积和拉取时间。",
          "CRaC 实现检查点/恢复快速启动。",
          "Project Leyden 是 Java 启动优化的未来。",
        ],
        lessons: [
          {
            id: "java-w18-1",
            title: "容器镜像优化",
            detail: "构建精简、高效的 Java 容器镜像。",
            keyPoints: [
              "多阶段构建：分离构建和运行环境。",
              "基础镜像选择：distroless、Alpine、slim。",
              "JLink：创建自定义精简 JRE。",
              "分层 JAR：优化 Docker 层缓存。",
            ],
            resources: [
              { title: "Spring Boot Docker", url: "https://spring.io/guides/gs/spring-boot-docker/" },
              { title: "Containerizing Java", url: "https://www.baeldung.com/dockerizing-spring-boot-application" },
              { title: "JLink Guide", url: "https://www.baeldung.com/jlink" },
            ],
          },
          {
            id: "java-w18-2",
            title: "CRaC 快速恢复",
            detail: "使用 CRaC 实现检查点/恢复快速启动。",
            keyPoints: [
              "CRaC：Coordinated Restore at Checkpoint。",
              "原理：将运行中的 JVM 状态保存为检查点。",
              "恢复：从检查点恢复，跳过预热阶段。",
              "Spring Boot 3.2+ 支持 CRaC 集成。",
            ],
            resources: [
              { title: "CRaC Project", url: "https://openjdk.org/projects/crac/" },
              { title: "Spring Boot CRaC", url: "https://docs.spring.io/spring-boot/docs/current/reference/html/deployment.html#deployment.efficient.checkpoint-restore" },
              { title: "CRaC Guide", url: "https://www.azul.com/products/components/crac/" },
            ],
          },
          {
            id: "java-w18-3",
            title: "Project Leyden 与未来",
            detail: "了解 Java 启动优化的未来发展。",
            keyPoints: [
              "Project Leyden：Java 启动与预热优化项目。",
              "Class Data Sharing (CDS)：共享类元数据。",
              "AOT 缓存：缓存编译结果。",
              "Java 25/26：Leyden 特性逐步落地。",
            ],
            resources: [
              { title: "Project Leyden", url: "https://openjdk.org/projects/leyden/" },
              { title: "CDS Guide", url: "https://docs.oracle.com/en/java/javase/21/vm/class-data-sharing.html" },
              { title: "Leyden Roadmap", url: "https://inside.java/2024/05/23/the-early-stages-of-project-leyden/" },
            ],
          },
        ],
      },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════
// 知识卡片
// ═══════════════════════════════════════════════════════════════
export const javaJvmKnowledgeCards: KnowledgeCard[] = [
  {
    id: "java-kc-1",
    title: "Virtual Threads",
    summary: "Virtual Threads 是 Java 21 的轻量级线程，可创建百万级并发。",
    points: [
      "由 JVM 调度，挂载在 Carrier Thread 上",
      "I/O 阻塞时自动卸载，释放 Carrier Thread",
      "适合 I/O 密集型应用，不适合 CPU 密集型",
      "Thread.startVirtualThread() 创建",
    ],
    practice: "使用 Virtual Threads 实现一个高并发 HTTP 客户端，对比与传统线程池的性能差异。",
  },
  {
    id: "java-kc-2",
    title: "JVM 内存区域",
    summary: "JVM 运行时数据区包括堆、栈、方法区、程序计数器。",
    points: [
      "堆（Heap）：对象实例存储，GC 主要区域",
      "虚拟机栈（Stack）：每个线程一个，存储栈帧",
      "方法区/Metaspace：类元数据、常量池",
      "程序计数器：当前执行的字节码行号",
    ],
    practice: "使用 JOL 工具分析对象内存布局，理解对象头和对齐填充。",
  },
  {
    id: "java-kc-3",
    title: "GC 算法选择",
    summary: "不同 GC 适用于不同场景，需根据应用特点选择。",
    points: [
      "G1GC：通用场景，平衡吞吐与延迟（默认）",
      "ZGC：大堆、低延迟（<1ms），-XX:+UseZGC",
      "Shenandoah：低延迟，Red Hat 支持",
      "Parallel GC：批处理、高吞吐优先",
    ],
    practice: "对同一应用分别使用 G1GC 和 ZGC，对比 GC 暂停时间和吞吐量。",
  },
  {
    id: "java-kc-4",
    title: "Spring Boot 自动配置",
    summary: "自动配置通过条件注解实现按需加载配置。",
    points: [
      "@EnableAutoConfiguration 启用自动配置",
      "spring.factories / AutoConfiguration.imports 发现配置类",
      "@Conditional 条件化激活配置",
      "@ConfigurationProperties 绑定配置属性",
    ],
    practice: "编写一个自定义 Starter，包含自动配置和条件注解。",
  },
  {
    id: "java-kc-5",
    title: "Project Reactor",
    summary: "Project Reactor 提供 Mono 和 Flux 响应式类型。",
    points: [
      "Mono：0 或 1 个元素的异步序列",
      "Flux：0 到 N 个元素的异步序列",
      "操作符：map、flatMap、filter、zip、merge",
      "背压控制数据流速",
    ],
    practice: "使用 WebFlux 和 R2DBC 构建一个完整的响应式 REST API。",
  },
  {
    id: "java-kc-6",
    title: "JFR 性能分析",
    summary: "JDK Flight Recorder 是低开销的生产级性能分析工具。",
    points: [
      "内置于 JDK，开销 <1%",
      "事件类型：CPU、内存、锁、I/O、GC",
      "-XX:StartFlightRecording 启动录制",
      "JDK Mission Control 分析数据",
    ],
    practice: "在生产环境启用 JFR，分析应用热点和 GC 行为。",
  },
  {
    id: "java-kc-7",
    title: "GraalVM Native Image",
    summary: "Native Image 将 Java 应用编译为本地可执行文件。",
    points: [
      "AOT 编译，毫秒级启动",
      "内存占用更低，体积更小",
      "闭合世界假设：编译时确定所有类和方法",
      "需要处理反射、动态代理等限制",
    ],
    practice: "将一个 Spring Boot 应用编译为 Native Image，对比启动时间和内存占用。",
  },
  {
    id: "java-kc-8",
    title: "CRaC 快速恢复",
    summary: "CRaC 实现检查点/恢复快速启动。",
    points: [
      "将运行中的 JVM 状态保存为检查点",
      "从检查点恢复，跳过预热阶段",
      "Spring Boot 3.2+ 支持 CRaC",
      "适合 Serverless 和快速扩容场景",
    ],
    practice: "使用 CRaC 优化 Spring Boot 应用的冷启动时间。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const javaJvmExamQuestions: QuizQuestion[] = [
  {
    id: "java-q1",
    question: "Java 21 中 Virtual Threads 正式发布的 JEP 编号是？",
    options: ["JEP 425", "JEP 436", "JEP 444", "JEP 453"],
    answer: 2,
    rationale: "JEP 444 是 Virtual Threads 的正式版本，在 Java 21 中发布。JEP 425 和 JEP 436 是预览版本。",
  },
  {
    id: "java-q2",
    question: "Virtual Threads 最适合哪种类型的应用？",
    options: ["CPU 密集型", "I/O 密集型", "内存密集型", "图形处理"],
    answer: 1,
    rationale: "Virtual Threads 在 I/O 阻塞时会自动卸载，释放 Carrier Thread 给其他 Virtual Thread，因此最适合 I/O 密集型应用。",
  },
  {
    id: "java-q3",
    question: "Java 中的 Record 类型主要用于什么？",
    options: ["实现接口", "创建不可变数据载体", "定义抽象类", "实现多态"],
    answer: 1,
    rationale: "Record 是 Java 14 引入的不可变数据载体，自动生成构造器、访问器、equals、hashCode 和 toString 方法。",
  },
  {
    id: "java-q4",
    question: "JVM 中存储对象实例的内存区域是？",
    options: ["虚拟机栈", "堆", "方法区", "程序计数器"],
    answer: 1,
    rationale: "堆（Heap）是 JVM 中用于存储对象实例的内存区域，也是垃圾收集的主要区域。",
  },
  {
    id: "java-q5",
    question: "JVM 类加载器的双亲委派模型中，最顶层的类加载器是？",
    options: ["Application ClassLoader", "Extension ClassLoader", "Bootstrap ClassLoader", "Custom ClassLoader"],
    answer: 2,
    rationale: "Bootstrap ClassLoader 是最顶层的类加载器，负责加载 Java 核心类库，由 C++ 实现。",
  },
  {
    id: "java-q6",
    question: "Java 21 中默认的垃圾收集器是？",
    options: ["Serial GC", "Parallel GC", "G1GC", "ZGC"],
    answer: 2,
    rationale: "从 Java 9 开始，G1GC（Garbage-First Garbage Collector）成为默认的垃圾收集器。",
  },
  {
    id: "java-q7",
    question: "Generational ZGC 在 Java 21 中通过哪个参数启用？",
    options: ["-XX:+UseZGC", "-XX:+UseZGC -XX:+ZGenerational", "-XX:+UseG1GC", "-XX:+UseShenandoahGC"],
    answer: 1,
    rationale: "Generational ZGC 需要同时使用 -XX:+UseZGC 和 -XX:+ZGenerational 两个参数启用。",
  },
  {
    id: "java-q8",
    question: "ZGC 的目标暂停时间是多少？",
    options: ["<10ms", "<1ms", "<100ms", "<50ms"],
    answer: 1,
    rationale: "ZGC 的设计目标是暂停时间不超过 1 毫秒，且与堆大小无关。",
  },
  {
    id: "java-q9",
    question: "Spring Boot 自动配置的条件注解是？",
    options: ["@Autowired", "@Component", "@Conditional", "@Configuration"],
    answer: 2,
    rationale: "@Conditional 及其派生注解（如 @ConditionalOnClass、@ConditionalOnProperty）用于条件化激活自动配置。",
  },
  {
    id: "java-q10",
    question: "Spring AOP 默认使用什么代理方式处理类？",
    options: ["JDK 动态代理", "CGLIB", "AspectJ", "Javassist"],
    answer: 1,
    rationale: "当目标类没有实现接口时，Spring AOP 默认使用 CGLIB 生成代理类。",
  },
  {
    id: "java-q11",
    question: "Project Reactor 中表示 0 或 1 个元素的类型是？",
    options: ["Flux", "Mono", "Publisher", "Subscriber"],
    answer: 1,
    rationale: "Mono 表示 0 或 1 个元素的异步序列，Flux 表示 0 到 N 个元素的异步序列。",
  },
  {
    id: "java-q12",
    question: "R2DBC 是什么的缩写？",
    options: ["Reactive Relational Database Connectivity", "Remote Relational Database Connection", "Reactive Redis Database Client", "Reliable Relational Database Cache"],
    answer: 0,
    rationale: "R2DBC 是 Reactive Relational Database Connectivity 的缩写，是响应式关系数据库连接规范。",
  },
  {
    id: "java-q13",
    question: "JDK Flight Recorder (JFR) 的典型开销是多少？",
    options: ["5-10%", "1-2%", "<1%", "10-15%"],
    answer: 2,
    rationale: "JFR 的设计目标是开销低于 1%，可以在生产环境长期运行。",
  },
  {
    id: "java-q14",
    question: "分析堆转储文件的常用工具是？",
    options: ["JConsole", "VisualVM", "Eclipse MAT", "JMC"],
    answer: 2,
    rationale: "Eclipse MAT（Memory Analyzer Tool）是分析堆转储文件的强大工具，支持内存泄漏检测和对象分析。",
  },
  {
    id: "java-q15",
    question: "火焰图中，方法栈的宽度代表什么？",
    options: ["调用次数", "执行时间占比", "内存占用", "调用深度"],
    answer: 1,
    rationale: "火焰图中，方法栈的宽度代表该方法（及其子调用）在采样中的时间占比，越宽表示越热。",
  },
  {
    id: "java-q16",
    question: "GraalVM Native Image 的主要优势是什么？",
    options: ["更高的峰值性能", "更快的启动时间和更低的内存占用", "更好的动态性", "更简单的调试"],
    answer: 1,
    rationale: "Native Image 的主要优势是毫秒级启动时间和更低的内存占用，适合云原生和 Serverless 场景。",
  },
  {
    id: "java-q17",
    question: "Native Image 的「闭合世界假设」意味着什么？",
    options: ["只能在特定操作系统运行", "编译时需要确定所有类和方法", "不能使用网络", "只能单线程运行"],
    answer: 1,
    rationale: "闭合世界假设意味着在编译时需要确定所有会被使用的类和方法，不支持运行时动态加载类。",
  },
  {
    id: "java-q18",
    question: "CRaC 的全称是什么？",
    options: ["Concurrent Runtime and Compilation", "Coordinated Restore at Checkpoint", "Cloud Ready Application Container", "Compiled Runtime Application Cache"],
    answer: 1,
    rationale: "CRaC 是 Coordinated Restore at Checkpoint 的缩写，用于实现检查点/恢复快速启动。",
  },
  {
    id: "java-q19",
    question: "Spring Boot 3.x 要求的最低 Java 版本是？",
    options: ["Java 8", "Java 11", "Java 17", "Java 21"],
    answer: 2,
    rationale: "Spring Boot 3.x 基于 Spring Framework 6.x，要求最低 Java 17 版本。",
  },
  {
    id: "java-q20",
    question: "HikariCP 是什么类型的组件？",
    options: ["HTTP 客户端", "数据库连接池", "缓存框架", "消息队列"],
    answer: 1,
    rationale: "HikariCP 是一个高性能的 JDBC 数据库连接池，是 Spring Boot 的默认连接池实现。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const javaJvmRoadmap: RoadmapDefinition = {
  id: "java-jvm",
  label: "Java/JVM",
  title: "Java/JVM",
  durationLabel: "18 个主题",
  description:
    "从 Java 21 LTS 现代特性出发，深入 JVM 内核架构与垃圾收集原理，掌握 Spring Boot 3.x/Spring Framework 6.x 生态，学习性能分析与调优技术，探索 GraalVM Native Image 与云原生 Java 实践。",
  heroBadge: "Java 21 · JVM · Spring Boot · GraalVM",
  stages: javaJvmStages,
  knowledgeCards: javaJvmKnowledgeCards,
  examQuestions: javaJvmExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 Java/JVM 学习之旅！先从 Java 21 现代特性开始。"
    if (percent < 25) return "继续深入 JVM 内核，理解类加载、内存模型和 JIT 编译。"
    if (percent < 50) return "垃圾收集是 JVM 性能的关键，重点掌握 G1GC 和 ZGC。"
    if (percent < 75) return "Spring 生态是 Java 开发必备，深入理解 IoC、AOP 和响应式编程。"
    if (percent < 100) return "即将完成！性能调优和云原生是高级 Java 开发者的必备技能。"
    return "恭喜完成！你已掌握 Java/JVM 的完整知识体系。"
  },
  resourceGuide: {
    environment:
      "推荐使用 JDK 21 LTS（Temurin 或 GraalVM）进行实践。Spring Boot 3.x 项目可通过 start.spring.io 快速创建。",
    fallbackKeyPoints: [
      "Virtual Threads 是 Java 21 最重要的新特性，适合 I/O 密集型应用",
      "JVM 内存区域：堆存储对象，栈存储栈帧，Metaspace 存储类元数据",
      "G1GC 是默认 GC，ZGC 追求 <1ms 暂停时间",
      "Spring Boot 自动配置基于 @Conditional 条件注解",
      "Native Image 实现毫秒级启动，但有闭合世界假设的限制",
    ],
    handsOnSteps: [
      "使用 Virtual Threads 实现高并发 HTTP 客户端",
      "使用 JFR 分析应用性能，生成火焰图",
      "配置不同 GC，对比暂停时间和吞吐量",
      "使用 Spring WebFlux 构建响应式 REST API",
      "将 Spring Boot 应用编译为 GraalVM Native Image",
    ],
    selfChecks: [
      "能否解释 Virtual Threads 的工作原理？",
      "能否分析 GC 日志定位性能问题？",
      "能否理解 Spring IoC 容器的 Bean 生命周期？",
      "能否使用 JFR 进行生产环境性能分析？",
      "能否处理 Native Image 的反射和动态代理问题？",
    ],
    extensions: [
      "深入 JVM 源码，理解 HotSpot 实现细节",
      "学习 Kotlin、Scala 等 JVM 语言",
      "探索 Project Loom、Project Leyden 的最新进展",
      "研究 GraalVM 多语言互操作",
    ],
    lessonQuizAdvice: "每周完成后测验，重点关注 Virtual Threads、GC 调优和 Spring 核心原理。",
  },
}
