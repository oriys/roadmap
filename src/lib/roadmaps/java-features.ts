import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const javaFeaturesStages: Stage[] = [
  {
    id: "java8-foundation",
    title: "阶段一：Java 8 革新特性",
    duration: "第 1-4 周",
    goal: "掌握 Java 8 引入的函数式编程特性，包括 Lambda、Stream、Optional 和新日期时间 API。",
    weeks: [
      {
        id: "jf-w1",
        title: "第 1 周：Lambda 表达式与函数式接口",
        summary: "理解 Lambda 语法，掌握函数式接口和方法引用，迈入函数式编程世界。",
        keyPoints: [
          "Lambda 表达式是匿名函数的简洁表示。",
          "函数式接口只有一个抽象方法，用 @FunctionalInterface 标注。",
          "方法引用是 Lambda 的简化写法：类名::方法名。",
        ],
        lessons: [
          {
            id: "jf-w1-1",
            title: "Lambda 表达式基础",
            detail: "学习 Lambda 语法、类型推断和变量捕获机制。",
            keyPoints: [
              "语法：(参数) -> 表达式 或 (参数) -> { 语句块 }。",
              "参数类型可省略，编译器自动推断。",
              "Lambda 可捕获 effectively final 的局部变量。",
            ],
            resources: [
              { title: "Oracle Lambda 教程", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html" },
              { title: "Java 8 Lambda 最佳实践", url: "https://www.baeldung.com/java-8-lambda-expressions-tips" },
              { title: "Lambda 表达式详解", url: "https://dev.java/learn/lambdas/" },
            ],
          },
          {
            id: "jf-w1-2",
            title: "函数式接口",
            detail: "掌握 java.util.function 包中的核心函数式接口。",
            keyPoints: [
              "Predicate<T>：接收 T 返回 boolean，用于条件判断。",
              "Function<T,R>：接收 T 返回 R，用于类型转换。",
              "Consumer<T>：接收 T 无返回值，用于消费数据。",
              "Supplier<T>：无参数返回 T，用于延迟生成数据。",
            ],
            resources: [
              { title: "函数式接口文档", url: "https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html" },
              { title: "Baeldung 函数式接口", url: "https://www.baeldung.com/java-8-functional-interfaces" },
              { title: "自定义函数式接口", url: "https://dev.java/learn/lambdas/functional-interfaces/" },
            ],
          },
          {
            id: "jf-w1-3",
            title: "方法引用",
            detail: "学习四种方法引用形式，简化 Lambda 表达式。",
            keyPoints: [
              "静态方法引用：ClassName::staticMethod。",
              "实例方法引用：instance::method 或 ClassName::method。",
              "构造方法引用：ClassName::new。",
              "方法引用必须与函数式接口签名兼容。",
            ],
            resources: [
              { title: "方法引用教程", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html" },
              { title: "方法引用详解", url: "https://www.baeldung.com/java-method-references" },
              { title: "Java 方法引用类型", url: "https://dev.java/learn/lambdas/method-references/" },
            ],
          },
        ],
      },
      {
        id: "jf-w2",
        title: "第 2 周：Stream API 核心操作",
        summary: "掌握 Stream 的创建、中间操作和终端操作，实现声明式数据处理。",
        keyPoints: [
          "Stream 是数据管道，支持链式调用。",
          "中间操作是惰性的，终端操作触发执行。",
          "避免在 Stream 中使用副作用操作。",
        ],
        lessons: [
          {
            id: "jf-w2-1",
            title: "Stream 创建与中间操作",
            detail: "学习 Stream 的多种创建方式和 filter、map、flatMap 等中间操作。",
            keyPoints: [
              "Collection.stream()、Stream.of()、Arrays.stream() 创建流。",
              "filter(Predicate) 过滤元素。",
              "map(Function) 转换元素，flatMap 扁平化嵌套结构。",
              "distinct()、sorted()、limit()、skip() 等常用操作。",
            ],
            resources: [
              { title: "Stream API 官方教程", url: "https://docs.oracle.com/javase/tutorial/collections/streams/" },
              { title: "Stream 完整指南", url: "https://www.baeldung.com/java-8-streams" },
              { title: "Stream 操作分类", url: "https://dev.java/learn/api/streams/intermediate-operations/" },
            ],
          },
          {
            id: "jf-w2-2",
            title: "Stream 终端操作与收集",
            detail: "掌握 forEach、reduce、collect 等终端操作和 Collectors 工具类。",
            keyPoints: [
              "forEach 遍历元素，forEachOrdered 保证顺序。",
              "reduce 将流归约为单个值。",
              "collect(Collectors.toList/toSet/toMap) 收集结果。",
              "Collectors.groupingBy/partitioningBy 实现分组统计。",
            ],
            resources: [
              { title: "Collectors 文档", url: "https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collectors.html" },
              { title: "Collectors 实战", url: "https://www.baeldung.com/java-8-collectors" },
              { title: "reduce 操作详解", url: "https://www.baeldung.com/java-stream-reduce" },
            ],
          },
          {
            id: "jf-w2-3",
            title: "并行流与性能优化",
            detail: "理解并行流原理，掌握何时使用并行流以及性能注意事项。",
            keyPoints: [
              "parallelStream() 或 stream().parallel() 创建并行流。",
              "并行流底层使用 ForkJoinPool.commonPool()。",
              "避免在并行流中使用有状态操作和共享可变状态。",
              "数据量大、计算密集型任务才适合并行流。",
            ],
            resources: [
              { title: "并行流指南", url: "https://www.baeldung.com/java-when-to-use-parallel-stream" },
              { title: "并行流陷阱", url: "https://dev.java/learn/api/streams/parallel-streams/" },
              { title: "ForkJoinPool 详解", url: "https://www.baeldung.com/java-fork-join" },
            ],
          },
        ],
      },
      {
        id: "jf-w3",
        title: "第 3 周：Optional 与空值处理",
        summary: "使用 Optional 优雅处理空值，避免 NullPointerException。",
        keyPoints: [
          "Optional 是一个容器，可能包含值也可能为空。",
          "使用 Optional 明确表达可能缺失的返回值。",
          "链式调用 map、flatMap、filter 处理 Optional。",
        ],
        lessons: [
          {
            id: "jf-w3-1",
            title: "Optional 基础与创建",
            detail: "学习 Optional 的创建方式和基本操作方法。",
            keyPoints: [
              "Optional.of(value) 创建非空 Optional，null 会抛异常。",
              "Optional.ofNullable(value) 安全创建，允许 null。",
              "Optional.empty() 创建空 Optional。",
              "isPresent()、isEmpty()（Java 11+）检查值是否存在。",
            ],
            resources: [
              { title: "Optional 官方文档", url: "https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html" },
              { title: "Optional 最佳实践", url: "https://www.baeldung.com/java-optional" },
              { title: "26 条 Optional 使用建议", url: "https://dzone.com/articles/using-optional-correctly-is-not-optional" },
            ],
          },
          {
            id: "jf-w3-2",
            title: "Optional 链式操作",
            detail: "掌握 map、flatMap、filter、orElse 等链式操作方法。",
            keyPoints: [
              "map(Function) 转换 Optional 中的值。",
              "flatMap 避免 Optional<Optional<T>> 嵌套。",
              "filter(Predicate) 条件过滤。",
              "orElse、orElseGet、orElseThrow 获取值或提供默认值。",
            ],
            resources: [
              { title: "Optional 链式调用", url: "https://www.baeldung.com/java-optional-or-else-vs-or-else-get" },
              { title: "map vs flatMap", url: "https://www.baeldung.com/java-difference-map-and-flatmap" },
              { title: "Optional 反模式", url: "https://dev.java/learn/api/streams/optionals/" },
            ],
          },
          {
            id: "jf-w3-3",
            title: "Optional 最佳实践",
            detail: "理解 Optional 的适用场景和常见反模式。",
            keyPoints: [
              "Optional 适用于方法返回值，不适用于字段、方法参数和集合。",
              "避免 optional.get() 前不检查 isPresent()。",
              "避免 Optional 序列化，它未实现 Serializable。",
              "Java 9+ 新增 ifPresentOrElse、or、stream 方法。",
            ],
            resources: [
              { title: "Optional 最佳实践", url: "https://www.baeldung.com/java-optional-best-practices" },
              { title: "Optional 反模式集锦", url: "https://blog.joda.org/2015/08/java-se-8-optional-pragmatic-approach.html" },
              { title: "Stuart Marks 的 Optional 指南", url: "https://www.youtube.com/watch?v=Ej0sss6cq14" },
            ],
          },
        ],
      },
      {
        id: "jf-w4",
        title: "第 4 周：新日期时间 API 与接口默认方法",
        summary: "掌握 java.time 包的日期时间处理，理解接口默认方法和静态方法。",
        keyPoints: [
          "java.time 取代旧的 Date/Calendar，线程安全且不可变。",
          "LocalDate、LocalTime、LocalDateTime 处理本地日期时间。",
          "接口默认方法实现向后兼容的 API 演进。",
        ],
        lessons: [
          {
            id: "jf-w4-1",
            title: "本地日期时间类",
            detail: "学习 LocalDate、LocalTime、LocalDateTime 的创建和操作。",
            keyPoints: [
              "LocalDate 表示日期（年月日），LocalTime 表示时间（时分秒）。",
              "now()、of()、parse() 创建实例。",
              "plusDays()、minusHours()、withYear() 等修改方法返回新对象。",
              "Period 表示日期间隔，Duration 表示时间间隔。",
            ],
            resources: [
              { title: "java.time 官方教程", url: "https://docs.oracle.com/javase/tutorial/datetime/" },
              { title: "日期时间 API 指南", url: "https://www.baeldung.com/java-8-date-time-intro" },
              { title: "LocalDateTime 详解", url: "https://dev.java/learn/date-time/" },
            ],
          },
          {
            id: "jf-w4-2",
            title: "时区与格式化",
            detail: "掌握 ZonedDateTime、Instant 和 DateTimeFormatter。",
            keyPoints: [
              "ZonedDateTime 带时区的日期时间。",
              "Instant 表示时间戳，自 1970-01-01T00:00:00Z 的秒数。",
              "DateTimeFormatter 线程安全的格式化器。",
              "ZoneId.of() 获取时区，支持时区转换。",
            ],
            resources: [
              { title: "ZonedDateTime 详解", url: "https://www.baeldung.com/java-zoneddatetime-offsetdatetime" },
              { title: "DateTimeFormatter 指南", url: "https://www.baeldung.com/java-datetimeformatter" },
              { title: "时区处理最佳实践", url: "https://dev.java/learn/date-time/time-zones/" },
            ],
          },
          {
            id: "jf-w4-3",
            title: "接口默认方法与静态方法",
            detail: "理解接口默认方法的设计目的和使用场景。",
            keyPoints: [
              "默认方法使用 default 关键字，提供方法实现。",
              "允许接口演进而不破坏现有实现类。",
              "多接口冲突时需显式重写。",
              "接口静态方法提供工具方法，不被继承。",
            ],
            resources: [
              { title: "默认方法教程", url: "https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html" },
              { title: "默认方法设计原则", url: "https://www.baeldung.com/java-static-default-methods" },
              { title: "接口演进策略", url: "https://dev.java/learn/classes-objects/interfaces/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "java9-11",
    title: "阶段二：Java 9-11 模块化与现代化",
    duration: "第 5-7 周",
    goal: "掌握模块系统、局部变量类型推断、HTTP Client 等 Java 9-11 新特性。",
    weeks: [
      {
        id: "jf-w5",
        title: "第 5 周：Java 9 模块系统",
        summary: "理解 Java 平台模块系统（JPMS），实现代码的强封装和可靠配置。",
        keyPoints: [
          "模块是包的容器，通过 module-info.java 声明。",
          "exports 导出包，requires 声明依赖。",
          "强封装：未导出的包对外不可访问。",
        ],
        lessons: [
          {
            id: "jf-w5-1",
            title: "模块基础概念",
            detail: "理解模块化的动机，学习 module-info.java 语法。",
            keyPoints: [
              "模块化解决 JAR 地狱和类路径问题。",
              "module-info.java 位于源码根目录。",
              "module 关键字声明模块名，通常与包名层级对应。",
              "JDK 本身已模块化，java.base 是根模块。",
            ],
            resources: [
              { title: "JPMS 官方指南", url: "https://openjdk.org/projects/jigsaw/quick-start" },
              { title: "模块系统详解", url: "https://www.baeldung.com/java-9-modularity" },
              { title: "模块化 JDK", url: "https://dev.java/learn/modules/" },
            ],
          },
          {
            id: "jf-w5-2",
            title: "模块声明与依赖",
            detail: "掌握 exports、requires、opens 等模块声明指令。",
            keyPoints: [
              "exports pkg 导出包给所有模块。",
              "exports pkg to mod 限定导出给特定模块。",
              "requires transitive 传递依赖。",
              "opens 允许运行时反射访问，配合框架使用。",
            ],
            resources: [
              { title: "模块声明语法", url: "https://www.baeldung.com/java-9-module-api" },
              { title: "服务提供者接口", url: "https://www.baeldung.com/java-spi" },
              { title: "模块迁移指南", url: "https://dev.java/learn/modules/migrating/" },
            ],
          },
          {
            id: "jf-w5-3",
            title: "JShell 与集合工厂方法",
            detail: "使用 JShell 交互式编程，掌握便捷的集合创建方法。",
            keyPoints: [
              "JShell 是 Java 的 REPL 工具，快速验证代码。",
              "List.of()、Set.of()、Map.of() 创建不可变集合。",
              "工厂方法返回的集合不允许 null 元素。",
              "copyOf() 方法创建集合的不可变副本。",
            ],
            resources: [
              { title: "JShell 用户指南", url: "https://docs.oracle.com/javase/9/jshell/" },
              { title: "集合工厂方法", url: "https://www.baeldung.com/java-9-collections-factory-methods" },
              { title: "不可变集合详解", url: "https://dev.java/learn/api/collections-framework/convenience-factory-methods/" },
            ],
          },
        ],
      },
      {
        id: "jf-w6",
        title: "第 6 周：Java 10-11 语法增强",
        summary: "掌握 var 局部变量类型推断和 Java 11 字符串、文件增强。",
        keyPoints: [
          "var 简化局部变量声明，类型由编译器推断。",
          "Java 11 是 LTS 版本，广泛用于生产环境。",
          "字符串 API 新增 isBlank、lines、strip 等方法。",
        ],
        lessons: [
          {
            id: "jf-w6-1",
            title: "var 局部变量类型推断",
            detail: "学习 var 的使用场景和最佳实践。",
            keyPoints: [
              "var 只能用于局部变量，必须初始化。",
              "var 不能用于方法参数、返回类型、字段。",
              "Lambda 参数可用 var（Java 11），支持添加注解。",
              "保持代码可读性，复杂类型用 var，简单类型显式声明。",
            ],
            resources: [
              { title: "var 使用指南", url: "https://www.baeldung.com/java-10-local-variable-type-inference" },
              { title: "var 风格指南", url: "https://openjdk.org/projects/amber/guides/lvti-style-guide" },
              { title: "var 最佳实践", url: "https://dev.java/learn/local-variable-type-inference/" },
            ],
          },
          {
            id: "jf-w6-2",
            title: "字符串 API 增强",
            detail: "掌握 Java 11 新增的字符串处理方法。",
            keyPoints: [
              "isBlank() 检查是否为空白字符串。",
              "lines() 返回按行分割的 Stream。",
              "strip()、stripLeading()、stripTrailing() Unicode 感知的去空白。",
              "repeat(n) 重复字符串 n 次。",
            ],
            resources: [
              { title: "Java 11 字符串方法", url: "https://www.baeldung.com/java-11-string-api" },
              { title: "String API 文档", url: "https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html" },
              { title: "字符串处理技巧", url: "https://dev.java/learn/strings/" },
            ],
          },
          {
            id: "jf-w6-3",
            title: "Files 与 Optional 增强",
            detail: "学习文件读写简化方法和 Optional 新增方法。",
            keyPoints: [
              "Files.readString(path) 一次性读取文件为字符串。",
              "Files.writeString(path, content) 一次性写入。",
              "Optional.isEmpty() 判断是否为空。",
              "Optional.ifPresentOrElse() 和 Optional.or() 方法。",
            ],
            resources: [
              { title: "Java 11 文件 API", url: "https://www.baeldung.com/java-11-new-features" },
              { title: "Files 类文档", url: "https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/Files.html" },
              { title: "Optional Java 11 增强", url: "https://www.baeldung.com/java-optional" },
            ],
          },
        ],
      },
      {
        id: "jf-w7",
        title: "第 7 周：HTTP Client API",
        summary: "掌握 Java 11 标准化的 HTTP Client，支持 HTTP/2 和异步请求。",
        keyPoints: [
          "新 HTTP Client 取代 HttpURLConnection。",
          "支持 HTTP/1.1 和 HTTP/2 协议。",
          "提供同步和异步两种请求方式。",
        ],
        lessons: [
          {
            id: "jf-w7-1",
            title: "HttpClient 基础",
            detail: "创建 HttpClient，发送同步 HTTP 请求。",
            keyPoints: [
              "HttpClient.newHttpClient() 创建默认客户端。",
              "HttpRequest.newBuilder(uri).GET().build() 构建请求。",
              "client.send(request, BodyHandlers.ofString()) 同步发送。",
              "HttpResponse 包含状态码、头信息和响应体。",
            ],
            resources: [
              { title: "HttpClient 教程", url: "https://www.baeldung.com/java-9-http-client" },
              { title: "HttpClient 官方文档", url: "https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpClient.html" },
              { title: "HTTP Client 实战", url: "https://dev.java/learn/networking/http-client/" },
            ],
          },
          {
            id: "jf-w7-2",
            title: "异步请求与 HTTP/2",
            detail: "使用 sendAsync 发送异步请求，配置 HTTP/2 支持。",
            keyPoints: [
              "sendAsync 返回 CompletableFuture<HttpResponse>。",
              "HttpClient.newBuilder().version(HTTP_2).build()。",
              "HTTP/2 支持多路复用和服务器推送。",
              "使用 thenApply、thenAccept 处理异步结果。",
            ],
            resources: [
              { title: "异步 HTTP 请求", url: "https://www.baeldung.com/java-9-http-client#3-handling-asynchronous-calls" },
              { title: "CompletableFuture 指南", url: "https://www.baeldung.com/java-completablefuture" },
              { title: "HTTP/2 特性", url: "https://dev.java/learn/networking/http-client/#http2" },
            ],
          },
          {
            id: "jf-w7-3",
            title: "请求配置与认证",
            detail: "配置超时、头信息、请求体和认证。",
            keyPoints: [
              "timeout(Duration.ofSeconds(10)) 设置超时。",
              "header(name, value) 和 headers(k1, v1, k2, v2) 设置头。",
              "POST(BodyPublishers.ofString(json)) 发送请求体。",
              "Authenticator 处理基本认证。",
            ],
            resources: [
              { title: "HttpRequest 配置", url: "https://www.baeldung.com/java-httpclient-post" },
              { title: "BodyPublishers 文档", url: "https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpRequest.BodyPublishers.html" },
              { title: "HTTP 认证", url: "https://www.baeldung.com/java-http-client-basic-auth" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "java12-17",
    title: "阶段三：Java 12-17 语言现代化",
    duration: "第 8-11 周",
    goal: "掌握 Records、Sealed Classes、Pattern Matching、Text Blocks 等现代 Java 特性。",
    weeks: [
      {
        id: "jf-w8",
        title: "第 8 周：Switch 表达式与 Text Blocks",
        summary: "使用新的 Switch 表达式语法和多行字符串 Text Blocks。",
        keyPoints: [
          "Switch 表达式使用箭头语法，无需 break。",
          "yield 在 Switch 块中返回值。",
          "Text Blocks 使用三引号，支持多行字符串。",
        ],
        lessons: [
          {
            id: "jf-w8-1",
            title: "Switch 表达式",
            detail: "学习 Switch 的表达式形式和箭头语法。",
            keyPoints: [
              "箭头语法：case VALUE -> expression 不会穿透。",
              "多个值：case A, B, C -> ... 合并多个 case。",
              "Switch 可作为表达式返回值。",
              "yield 关键字在代码块中返回值。",
            ],
            resources: [
              { title: "Switch 表达式", url: "https://www.baeldung.com/java-switch" },
              { title: "JEP 361", url: "https://openjdk.org/jeps/361" },
              { title: "Switch 模式匹配", url: "https://dev.java/learn/pattern-matching-for-switch/" },
            ],
          },
          {
            id: "jf-w8-2",
            title: "Text Blocks 多行字符串",
            detail: "使用 Text Blocks 编写可读性更高的多行字符串。",
            keyPoints: [
              "三引号 \"\"\" 开始和结束 Text Block。",
              "自动处理缩进，结束引号位置决定缩进剥离。",
              "支持转义序列和嵌入表达式占位符。",
              "适合 JSON、SQL、HTML 等多行文本。",
            ],
            resources: [
              { title: "Text Blocks 指南", url: "https://www.baeldung.com/java-text-blocks" },
              { title: "JEP 378", url: "https://openjdk.org/jeps/378" },
              { title: "Text Blocks 最佳实践", url: "https://dev.java/learn/text-blocks/" },
            ],
          },
          {
            id: "jf-w8-3",
            title: "增强的 NullPointerException",
            detail: "理解 Java 14 引入的详细空指针异常信息。",
            keyPoints: [
              "异常消息精确指出哪个变量为 null。",
              "对链式调用特别有用：a.b.c.d。",
              "JVM 参数 -XX:+ShowCodeDetailsInExceptionMessages。",
              "Java 15+ 默认启用详细消息。",
            ],
            resources: [
              { title: "Helpful NullPointerException", url: "https://www.baeldung.com/java-14-new-features#helpful-nullpointerexceptions" },
              { title: "JEP 358", url: "https://openjdk.org/jeps/358" },
              { title: "NPE 调试技巧", url: "https://dev.java/learn/debugging/" },
            ],
          },
        ],
      },
      {
        id: "jf-w9",
        title: "第 9 周：Records 记录类",
        summary: "使用 Records 创建不可变数据载体，减少样板代码。",
        keyPoints: [
          "Record 是不可变的数据载体类。",
          "自动生成构造器、getter、equals、hashCode、toString。",
          "Record 可以有紧凑构造器和实例方法。",
        ],
        lessons: [
          {
            id: "jf-w9-1",
            title: "Record 基础",
            detail: "学习 Record 的声明语法和自动生成的成员。",
            keyPoints: [
              "record Point(int x, int y) {} 声明记录。",
              "组件自动生成私有 final 字段和同名访问器。",
              "自动生成 equals、hashCode 基于所有组件。",
              "toString 返回组件名和值。",
            ],
            resources: [
              { title: "Records 教程", url: "https://www.baeldung.com/java-record-keyword" },
              { title: "JEP 395", url: "https://openjdk.org/jeps/395" },
              { title: "Records 详解", url: "https://dev.java/learn/records/" },
            ],
          },
          {
            id: "jf-w9-2",
            title: "Record 高级特性",
            detail: "掌握紧凑构造器、静态成员和 Record 限制。",
            keyPoints: [
              "紧凑构造器省略参数列表，用于验证。",
              "可以添加静态字段、静态方法和实例方法。",
              "Record 隐式 final，不能继承其他类。",
              "Record 可以实现接口。",
            ],
            resources: [
              { title: "Record 构造器", url: "https://www.baeldung.com/java-record-canonical-constructor" },
              { title: "Record 与接口", url: "https://www.baeldung.com/java-record-implementing-interfaces" },
              { title: "Record 序列化", url: "https://dev.java/learn/records/#serialization" },
            ],
          },
          {
            id: "jf-w9-3",
            title: "Record 实战应用",
            detail: "在实际项目中使用 Record 作为 DTO、值对象等。",
            keyPoints: [
              "Record 适合 DTO（数据传输对象）。",
              "与 Jackson 配合进行 JSON 序列化。",
              "作为 Map 的 key 时自动正确实现 hashCode。",
              "Local Record 在方法内定义临时数据结构。",
            ],
            resources: [
              { title: "Record 与 Spring", url: "https://www.baeldung.com/spring-boot-records" },
              { title: "Record 与 Jackson", url: "https://www.baeldung.com/jackson-serialize-deserialize-record" },
              { title: "Record 设计模式", url: "https://dev.java/learn/records/#patterns" },
            ],
          },
        ],
      },
      {
        id: "jf-w10",
        title: "第 10 周：Sealed Classes 密封类",
        summary: "使用 Sealed Classes 控制类层次结构，实现受限继承。",
        keyPoints: [
          "sealed 类限制哪些类可以继承它。",
          "permits 子句列出允许的子类。",
          "子类必须是 final、sealed 或 non-sealed。",
        ],
        lessons: [
          {
            id: "jf-w10-1",
            title: "Sealed Classes 基础",
            detail: "理解密封类的动机和声明语法。",
            keyPoints: [
              "sealed class Shape permits Circle, Rectangle {}。",
              "子类必须在 permits 中列出。",
              "子类可以是 final（终止继承）、sealed（继续限制）或 non-sealed（开放）。",
              "同一编译单元的子类可省略 permits。",
            ],
            resources: [
              { title: "Sealed Classes 教程", url: "https://www.baeldung.com/java-sealed-classes-interfaces" },
              { title: "JEP 409", url: "https://openjdk.org/jeps/409" },
              { title: "Sealed Classes 详解", url: "https://dev.java/learn/sealed-classes/" },
            ],
          },
          {
            id: "jf-w10-2",
            title: "Sealed Interfaces",
            detail: "将 sealed 应用于接口，构建受控的接口层次。",
            keyPoints: [
              "sealed interface 同样使用 permits。",
              "实现类必须声明为 final、sealed 或 non-sealed。",
              "Record 可以实现 sealed interface。",
              "sealed 与泛型接口配合使用。",
            ],
            resources: [
              { title: "Sealed Interfaces", url: "https://www.baeldung.com/java-sealed-classes-interfaces#sealed-interfaces" },
              { title: "Record 实现 Sealed", url: "https://dev.java/learn/sealed-classes/#records-and-sealed-types" },
              { title: "类型系统设计", url: "https://openjdk.org/projects/amber/" },
            ],
          },
          {
            id: "jf-w10-3",
            title: "Sealed 与模式匹配",
            detail: "结合 Pattern Matching 使用 Sealed 类实现穷尽性检查。",
            keyPoints: [
              "Switch 可以对 sealed 类型进行穷尽性检查。",
              "编译器确保所有 permits 子类都被处理。",
              "无需 default 分支，新增子类时编译器报错。",
              "与 instanceof pattern matching 配合使用。",
            ],
            resources: [
              { title: "Sealed + Pattern Matching", url: "https://www.baeldung.com/java-sealed-classes-interfaces#pattern-matching-for-switch-preview" },
              { title: "穷尽性检查", url: "https://dev.java/learn/pattern-matching-for-switch/#exhaustiveness" },
              { title: "代数数据类型", url: "https://openjdk.org/projects/amber/design-notes/patterns/pattern-match-semantics" },
            ],
          },
        ],
      },
      {
        id: "jf-w11",
        title: "第 11 周：Pattern Matching for instanceof",
        summary: "使用 instanceof 模式匹配简化类型检查和转换。",
        keyPoints: [
          "instanceof 后直接声明绑定变量。",
          "消除冗余的类型转换代码。",
          "模式变量有精确的作用域规则。",
        ],
        lessons: [
          {
            id: "jf-w11-1",
            title: "instanceof 模式匹配",
            detail: "学习 instanceof 与类型模式的结合使用。",
            keyPoints: [
              "if (obj instanceof String s) 同时检查类型并绑定变量。",
              "s 只在条件为 true 的分支中有效。",
              "支持在 && 表达式中使用：obj instanceof String s && s.length() > 0。",
              "不支持 || 表达式中使用模式变量。",
            ],
            resources: [
              { title: "Pattern Matching for instanceof", url: "https://www.baeldung.com/java-pattern-matching-instanceof" },
              { title: "JEP 394", url: "https://openjdk.org/jeps/394" },
              { title: "模式匹配详解", url: "https://dev.java/learn/pattern-matching-for-instanceof/" },
            ],
          },
          {
            id: "jf-w11-2",
            title: "模式变量作用域",
            detail: "理解模式变量的作用域规则和流敏感性。",
            keyPoints: [
              "模式变量在模式匹配成功的流程中有效。",
              "if (!instanceof) 模式变量在 else 分支有效。",
              "编译器进行流分析确定变量可用性。",
              "避免在复杂条件中使用，保持代码清晰。",
            ],
            resources: [
              { title: "模式变量作用域", url: "https://www.baeldung.com/java-pattern-matching-instanceof#scope" },
              { title: "流敏感分析", url: "https://dev.java/learn/pattern-matching-for-instanceof/#flow-scoping" },
              { title: "最佳实践", url: "https://openjdk.org/projects/amber/design-notes/patterns/pattern-match-object-model" },
            ],
          },
          {
            id: "jf-w11-3",
            title: "实战重构示例",
            detail: "将传统的 instanceof + 强制转换代码重构为模式匹配。",
            keyPoints: [
              "重构 equals 方法：if (o instanceof Point p)。",
              "重构访问者模式：简化 visit 方法。",
              "与 sealed classes 结合实现类型安全的处理。",
              "逐步迁移现有代码库。",
            ],
            resources: [
              { title: "重构示例", url: "https://www.baeldung.com/java-pattern-matching-instanceof#refactoring-example" },
              { title: "访问者模式重构", url: "https://dev.java/learn/pattern-matching-for-instanceof/#refactoring-visitor" },
              { title: "迁移指南", url: "https://inside.java/2021/03/15/pattern-matching-guide/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "java18-21",
    title: "阶段四：Java 18-21 并发革新",
    duration: "第 12-15 周",
    goal: "掌握 Virtual Threads、Structured Concurrency、Pattern Matching for Switch 等 Java 21 LTS 核心特性。",
    weeks: [
      {
        id: "jf-w12",
        title: "第 12 周：Pattern Matching for Switch",
        summary: "在 Switch 中使用类型模式、守卫条件和空值处理。",
        keyPoints: [
          "Switch 支持类型模式匹配。",
          "when 子句添加守卫条件。",
          "case null 显式处理空值。",
        ],
        lessons: [
          {
            id: "jf-w12-1",
            title: "Switch 类型模式",
            detail: "在 Switch 表达式中使用类型模式进行匹配。",
            keyPoints: [
              "case Integer i -> 匹配并绑定 Integer 类型。",
              "case String s -> 匹配 String 类型。",
              "模式按声明顺序匹配，具体类型先于父类型。",
              "default 处理未匹配的情况。",
            ],
            resources: [
              { title: "Pattern Matching for Switch", url: "https://www.baeldung.com/java-switch-pattern-matching" },
              { title: "JEP 441", url: "https://openjdk.org/jeps/441" },
              { title: "Switch 模式详解", url: "https://dev.java/learn/pattern-matching-for-switch/" },
            ],
          },
          {
            id: "jf-w12-2",
            title: "守卫条件与空值处理",
            detail: "使用 when 子句细化匹配，处理 null 值。",
            keyPoints: [
              "case String s when s.length() > 5 -> 带条件的模式。",
              "case null -> 显式处理 null，避免 NPE。",
              "case null, default -> 同时处理 null 和默认情况。",
              "when 条件在类型匹配后求值。",
            ],
            resources: [
              { title: "守卫条件", url: "https://www.baeldung.com/java-switch-pattern-matching#guarded-patterns" },
              { title: "null 处理", url: "https://dev.java/learn/pattern-matching-for-switch/#null-handling" },
              { title: "JEP 441 详解", url: "https://openjdk.org/jeps/441" },
            ],
          },
          {
            id: "jf-w12-3",
            title: "Record Patterns",
            detail: "使用 Record Patterns 解构 Record 组件。",
            keyPoints: [
              "case Point(int x, int y) -> 解构 Record。",
              "支持嵌套解构：case Line(Point(int x1, int y1), Point p2)。",
              "与 sealed classes 配合实现穷尽性检查。",
              "var 可用于推断组件类型。",
            ],
            resources: [
              { title: "Record Patterns", url: "https://www.baeldung.com/java-record-patterns" },
              { title: "JEP 440", url: "https://openjdk.org/jeps/440" },
              { title: "解构模式详解", url: "https://dev.java/learn/record-patterns/" },
            ],
          },
        ],
      },
      {
        id: "jf-w13",
        title: "第 13 周：Virtual Threads 虚拟线程",
        summary: "使用 Virtual Threads 实现高吞吐量并发，简化异步编程。",
        keyPoints: [
          "虚拟线程是轻量级线程，由 JVM 调度。",
          "一个进程可创建百万级虚拟线程。",
          "简化并发编程，用同步风格写高并发代码。",
        ],
        lessons: [
          {
            id: "jf-w13-1",
            title: "Virtual Threads 基础",
            detail: "理解虚拟线程的原理，学习创建方式。",
            keyPoints: [
              "虚拟线程由载体线程（平台线程）承载运行。",
              "Thread.startVirtualThread(runnable) 创建并启动。",
              "Thread.ofVirtual().start(runnable) Builder 方式。",
              "阻塞时自动让出载体线程，高效复用。",
            ],
            resources: [
              { title: "Virtual Threads 教程", url: "https://www.baeldung.com/java-virtual-thread-vs-thread" },
              { title: "JEP 444", url: "https://openjdk.org/jeps/444" },
              { title: "Virtual Threads 详解", url: "https://dev.java/learn/virtual-threads/" },
            ],
          },
          {
            id: "jf-w13-2",
            title: "ExecutorService 与虚拟线程",
            detail: "使用 newVirtualThreadPerTaskExecutor 管理虚拟线程。",
            keyPoints: [
              "Executors.newVirtualThreadPerTaskExecutor() 创建执行器。",
              "每个任务一个虚拟线程，不复用线程。",
              "try-with-resources 确保正确关闭。",
              "适合 I/O 密集型任务，不适合 CPU 密集型。",
            ],
            resources: [
              { title: "Virtual Thread Executor", url: "https://www.baeldung.com/java-virtual-thread-vs-thread#4-virtual-threads-with-executorservice" },
              { title: "最佳实践", url: "https://dev.java/learn/virtual-threads/#best-practices" },
              { title: "性能指南", url: "https://inside.java/2023/09/19/virtual-thread-performance/" },
            ],
          },
          {
            id: "jf-w13-3",
            title: "虚拟线程注意事项",
            detail: "了解虚拟线程的限制和最佳实践。",
            keyPoints: [
              "避免同步块内执行阻塞操作（Pin 问题）。",
              "用 ReentrantLock 替代 synchronized。",
              "不要池化虚拟线程，按需创建即可。",
              "ThreadLocal 谨慎使用，百万线程会占用大量内存。",
            ],
            resources: [
              { title: "Virtual Thread 陷阱", url: "https://www.baeldung.com/java-virtual-threads-performance-bottlenecks" },
              { title: "Pin 问题详解", url: "https://dev.java/learn/virtual-threads/#pinning" },
              { title: "迁移指南", url: "https://inside.java/2023/04/17/virtual-thread-pinning/" },
            ],
          },
        ],
      },
      {
        id: "jf-w14",
        title: "第 14 周：Structured Concurrency 结构化并发",
        summary: "使用结构化并发简化多任务协调，确保可靠的错误处理。",
        keyPoints: [
          "子任务的生命周期绑定到父任务作用域。",
          "自动等待所有子任务完成或取消。",
          "异常传播和取消策略简化错误处理。",
        ],
        lessons: [
          {
            id: "jf-w14-1",
            title: "StructuredTaskScope 基础",
            detail: "使用 StructuredTaskScope 管理并发子任务。",
            keyPoints: [
              "try (var scope = new StructuredTaskScope<>()) { }。",
              "scope.fork(callable) 启动子任务。",
              "scope.join() 等待所有子任务完成。",
              "自动取消：一个失败时取消其他任务。",
            ],
            resources: [
              { title: "Structured Concurrency", url: "https://www.baeldung.com/java-structured-concurrency" },
              { title: "JEP 453", url: "https://openjdk.org/jeps/453" },
              { title: "结构化并发详解", url: "https://dev.java/learn/structured-concurrency/" },
            ],
          },
          {
            id: "jf-w14-2",
            title: "ShutdownOnFailure 与 ShutdownOnSuccess",
            detail: "使用预定义策略处理子任务结果。",
            keyPoints: [
              "ShutdownOnFailure：任一失败立即取消其他并抛出异常。",
              "ShutdownOnSuccess：任一成功立即取消其他并返回结果。",
              "scope.throwIfFailed() 检查并抛出异常。",
              "subtask.get() 获取子任务结果。",
            ],
            resources: [
              { title: "ShutdownOnFailure", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.ShutdownOnFailure.html" },
              { title: "ShutdownOnSuccess", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.ShutdownOnSuccess.html" },
              { title: "策略选择指南", url: "https://dev.java/learn/structured-concurrency/#policies" },
            ],
          },
          {
            id: "jf-w14-3",
            title: "结构化并发实战",
            detail: "在实际场景中应用结构化并发模式。",
            keyPoints: [
              "并行调用多个服务，汇总结果。",
              "超时控制：joinUntil(Instant deadline)。",
              "嵌套作用域：子任务内再创建子作用域。",
              "与虚拟线程配合使用效果最佳。",
            ],
            resources: [
              { title: "实战示例", url: "https://inside.java/2023/08/01/structured-concurrency/" },
              { title: "错误处理模式", url: "https://dev.java/learn/structured-concurrency/#error-handling" },
              { title: "设计原则", url: "https://openjdk.org/jeps/453#Design" },
            ],
          },
        ],
      },
      {
        id: "jf-w15",
        title: "第 15 周：Sequenced Collections",
        summary: "使用 Sequenced Collections 统一访问有序集合的首尾元素。",
        keyPoints: [
          "新增 SequencedCollection、SequencedSet、SequencedMap 接口。",
          "统一的 getFirst()、getLast()、addFirst()、addLast() 方法。",
          "reversed() 返回反向视图。",
        ],
        lessons: [
          {
            id: "jf-w15-1",
            title: "SequencedCollection 接口",
            detail: "理解新的有序集合接口层次结构。",
            keyPoints: [
              "SequencedCollection extends Collection，定义遍历顺序。",
              "getFirst()、getLast() 获取首尾元素。",
              "addFirst()、addLast() 在首尾添加元素。",
              "reversed() 返回反向顺序的视图。",
            ],
            resources: [
              { title: "Sequenced Collections", url: "https://www.baeldung.com/java-21-sequenced-collections" },
              { title: "JEP 431", url: "https://openjdk.org/jeps/431" },
              { title: "接口详解", url: "https://dev.java/learn/sequenced-collections/" },
            ],
          },
          {
            id: "jf-w15-2",
            title: "SequencedSet 与 SequencedMap",
            detail: "使用 SequencedSet 和 SequencedMap 处理有序数据。",
            keyPoints: [
              "LinkedHashSet 现在实现 SequencedSet。",
              "LinkedHashMap 现在实现 SequencedMap。",
              "SequencedMap 提供 firstEntry()、lastEntry()、pollFirstEntry() 等。",
              "sequencedKeySet()、sequencedValues()、sequencedEntrySet() 返回有序视图。",
            ],
            resources: [
              { title: "SequencedMap 接口", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedMap.html" },
              { title: "接口层次变化", url: "https://www.baeldung.com/java-21-sequenced-collections#2-sequencedset-and-sequencedmap" },
              { title: "使用示例", url: "https://dev.java/learn/sequenced-collections/#examples" },
            ],
          },
          {
            id: "jf-w15-3",
            title: "Collections 工具类增强",
            detail: "使用 Collections 工具类创建不可修改的有序集合视图。",
            keyPoints: [
              "Collections.unmodifiableSequencedCollection()。",
              "Collections.unmodifiableSequencedSet()。",
              "Collections.unmodifiableSequencedMap()。",
              "现有集合类的改造兼容旧代码。",
            ],
            resources: [
              { title: "Collections 工具类", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html" },
              { title: "不可变视图", url: "https://www.baeldung.com/java-21-sequenced-collections#3-collections-utility-methods" },
              { title: "迁移指南", url: "https://dev.java/learn/sequenced-collections/#migration" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "java22-25",
    title: "阶段五：Java 22-25 前沿特性",
    duration: "第 16-18 周",
    goal: "掌握 String Templates、Scoped Values、Stream Gatherers 等最新 Java 特性。",
    weeks: [
      {
        id: "jf-w16",
        title: "第 16 周：String Templates 字符串模板",
        summary: "使用 String Templates 实现安全、可读的字符串插值。",
        keyPoints: [
          "模板表达式嵌入变量和表达式。",
          "模板处理器确保安全性（如 SQL 注入防护）。",
          "STR、FMT、RAW 是内置模板处理器。",
        ],
        lessons: [
          {
            id: "jf-w16-1",
            title: "String Templates 基础",
            detail: "学习字符串模板的语法和 STR 处理器。",
            keyPoints: [
              "STR.\"Hello \\{name}\" 基本插值语法。",
              "\\{expression} 嵌入任意表达式。",
              "多行模板与 Text Blocks 结合使用。",
              "表达式可以是方法调用、三元运算等。",
            ],
            resources: [
              { title: "String Templates", url: "https://www.baeldung.com/java-21-string-templates" },
              { title: "JEP 459", url: "https://openjdk.org/jeps/459" },
              { title: "模板详解", url: "https://dev.java/learn/string-templates/" },
            ],
          },
          {
            id: "jf-w16-2",
            title: "FMT 格式化处理器",
            detail: "使用 FMT 处理器进行格式化输出。",
            keyPoints: [
              "FMT.\"金额：%,.2f\\{amount}\" 支持格式化说明符。",
              "格式化说明符紧跟在 % 后，嵌入表达式前。",
              "支持所有 Formatter 规范。",
              "结合 Locale 实现国际化格式。",
            ],
            resources: [
              { title: "FMT 处理器", url: "https://www.baeldung.com/java-21-string-templates#fmt-template-processor" },
              { title: "Formatter 规范", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html" },
              { title: "格式化示例", url: "https://dev.java/learn/string-templates/#fmt" },
            ],
          },
          {
            id: "jf-w16-3",
            title: "自定义模板处理器",
            detail: "创建自定义模板处理器实现特定场景需求。",
            keyPoints: [
              "实现 StringTemplate.Processor 接口。",
              "处理 StringTemplate.fragments() 和 values()。",
              "用于 SQL 防注入、JSON 构建、日志格式化等。",
              "编译时类型安全检查。",
            ],
            resources: [
              { title: "自定义处理器", url: "https://www.baeldung.com/java-21-string-templates#custom-template-processor" },
              { title: "安全处理", url: "https://dev.java/learn/string-templates/#custom-processors" },
              { title: "设计原则", url: "https://openjdk.org/jeps/459#Design" },
            ],
          },
        ],
      },
      {
        id: "jf-w17",
        title: "第 17 周：Scoped Values 作用域值",
        summary: "使用 Scoped Values 在线程间安全共享不可变数据。",
        keyPoints: [
          "Scoped Values 是 ThreadLocal 的现代替代。",
          "值在作用域内绑定，作用域结束自动清理。",
          "不可变，天然线程安全。",
        ],
        lessons: [
          {
            id: "jf-w17-1",
            title: "ScopedValue 基础",
            detail: "理解 ScopedValue 的设计动机和基本用法。",
            keyPoints: [
              "ScopedValue.where(key, value).run(runnable)。",
              "key.get() 获取当前作用域绑定的值。",
              "值只在 run/call 的作用域内有效。",
              "子线程自动继承父线程的 ScopedValue。",
            ],
            resources: [
              { title: "Scoped Values", url: "https://www.baeldung.com/java-20-scoped-values" },
              { title: "JEP 446", url: "https://openjdk.org/jeps/446" },
              { title: "Scoped Values 详解", url: "https://dev.java/learn/scoped-values/" },
            ],
          },
          {
            id: "jf-w17-2",
            title: "ScopedValue vs ThreadLocal",
            detail: "对比 ScopedValue 和 ThreadLocal 的异同。",
            keyPoints: [
              "ScopedValue 不可变，ThreadLocal 可变。",
              "ScopedValue 有明确的生命周期，自动清理。",
              "ScopedValue 与虚拟线程配合更高效。",
              "ThreadLocal 在虚拟线程中可能导致内存问题。",
            ],
            resources: [
              { title: "对比分析", url: "https://www.baeldung.com/java-20-scoped-values#scoped-value-vs-thread-local" },
              { title: "性能考量", url: "https://dev.java/learn/scoped-values/#performance" },
              { title: "迁移指南", url: "https://inside.java/2023/01/18/scoped-values/" },
            ],
          },
          {
            id: "jf-w17-3",
            title: "ScopedValue 实战场景",
            detail: "在实际项目中应用 ScopedValue。",
            keyPoints: [
              "传递请求上下文（用户、租户、追踪 ID）。",
              "与结构化并发配合传递上下文到子任务。",
              "替代依赖注入传递运行时参数。",
              "日志上下文传递。",
            ],
            resources: [
              { title: "实战示例", url: "https://dev.java/learn/scoped-values/#examples" },
              { title: "Web 应用场景", url: "https://inside.java/2023/01/18/scoped-values/#web-applications" },
              { title: "设计模式", url: "https://openjdk.org/jeps/446#Design" },
            ],
          },
        ],
      },
      {
        id: "jf-w18",
        title: "第 18 周：Stream Gatherers 与其他新特性",
        summary: "使用 Stream Gatherers 自定义中间操作，了解最新预览特性。",
        keyPoints: [
          "Gatherers 允许自定义 Stream 中间操作。",
          "Unnamed Variables 简化未使用变量的声明。",
          "持续关注 Project Amber、Loom、Panama 进展。",
        ],
        lessons: [
          {
            id: "jf-w18-1",
            title: "Stream Gatherers",
            detail: "使用 Gatherers 创建自定义 Stream 中间操作。",
            keyPoints: [
              "stream.gather(gatherer) 应用自定义中间操作。",
              "Gatherers.fold() 有状态的折叠操作。",
              "Gatherers.windowFixed(n) 固定窗口分组。",
              "Gatherers.scan() 累积计算。",
            ],
            resources: [
              { title: "Stream Gatherers", url: "https://www.baeldung.com/java-stream-gatherers" },
              { title: "JEP 461", url: "https://openjdk.org/jeps/461" },
              { title: "Gatherers 详解", url: "https://dev.java/learn/stream-gatherers/" },
            ],
          },
          {
            id: "jf-w18-2",
            title: "Unnamed Variables 与 Patterns",
            detail: "使用下划线 _ 声明未使用的变量。",
            keyPoints: [
              "_ 表示未使用的变量，增强可读性。",
              "try-catch: catch (Exception _) {}。",
              "Lambda: (_, y) -> y * 2。",
              "Pattern: case Point(int x, _) -> x。",
            ],
            resources: [
              { title: "Unnamed Variables", url: "https://www.baeldung.com/java-unnamed-patterns-variables" },
              { title: "JEP 456", url: "https://openjdk.org/jeps/456" },
              { title: "使用示例", url: "https://dev.java/learn/unnamed-variables/" },
            ],
          },
          {
            id: "jf-w18-3",
            title: "Java 未来展望",
            detail: "了解 Project Amber、Loom、Panama、Valhalla 的进展。",
            keyPoints: [
              "Project Amber：语言特性增强（模式匹配、数据类）。",
              "Project Loom：并发改进（虚拟线程、结构化并发）。",
              "Project Panama：外部函数和内存 API。",
              "Project Valhalla：值类型和泛型特化。",
            ],
            resources: [
              { title: "Project Amber", url: "https://openjdk.org/projects/amber/" },
              { title: "Project Loom", url: "https://openjdk.org/projects/loom/" },
              { title: "Project Panama", url: "https://openjdk.org/projects/panama/" },
              { title: "Project Valhalla", url: "https://openjdk.org/projects/valhalla/" },
            ],
          },
        ],
      },
    ],
  },
]

export const javaFeaturesKnowledgeCards: KnowledgeCard[] = [
  {
    id: "jf-kc1",
    title: "函数式思维",
    summary: "从命令式转向声明式，关注「做什么」而非「怎么做」。",
    points: [
      "Stream API 描述数据转换流水线，而非循环逻辑。",
      "Lambda 使行为参数化，代码更具表达力。",
      "Optional 显式处理缺失值，避免空指针地狱。",
      "不可变性减少副作用，提高代码可预测性。",
    ],
    practice: "将一段使用 for 循环和 if-else 的代码重构为 Stream 链式调用。",
  },
  {
    id: "jf-kc2",
    title: "数据导向编程",
    summary: "Records 和模式匹配推动 Java 向数据导向风格演进。",
    points: [
      "Record 作为透明的数据载体，自动生成访问器和 equals/hashCode。",
      "Sealed Classes 定义封闭的类型层次，实现代数数据类型。",
      "模式匹配简化类型检查和解构，减少样板代码。",
      "数据与行为分离，更接近函数式编程范式。",
    ],
    practice: "用 sealed interface + records 建模一个表达式树（如 Add、Multiply、Constant）。",
  },
  {
    id: "jf-kc3",
    title: "轻量级并发",
    summary: "虚拟线程革新 Java 并发模型，用同步风格写高并发代码。",
    points: [
      "虚拟线程轻量级，可创建百万级别，无需池化。",
      "阻塞操作不阻塞底层平台线程，自动调度。",
      "结构化并发确保子任务生命周期与父任务绑定。",
      "Scoped Values 替代 ThreadLocal，更适合虚拟线程。",
    ],
    practice: "用虚拟线程重写一个使用线程池的 HTTP 客户端，对比代码简洁度。",
  },
  {
    id: "jf-kc4",
    title: "渐进式演进",
    summary: "Java 通过预览特性逐步引入变化，保持向后兼容。",
    points: [
      "预览特性需 --enable-preview 启用，允许社区反馈。",
      "从预览到正式通常需要 2-3 个版本迭代。",
      "LTS 版本（8、11、17、21）适合生产环境。",
      "六个月发布周期确保持续创新。",
    ],
    practice: "在项目中启用最新 LTS 版本的新特性，逐步替换旧写法。",
  },
  {
    id: "jf-kc5",
    title: "模块化封装",
    summary: "模块系统实现强封装，解决 JAR 地狱问题。",
    points: [
      "exports 精确控制 API 边界，内部实现不泄露。",
      "requires 显式声明依赖，避免类路径冲突。",
      "services 提供解耦的服务发现机制。",
      "jlink 构建精简运行时镜像。",
    ],
    practice: "将一个多模块项目改造为 JPMS 模块，定义清晰的模块边界。",
  },
]

export const javaFeaturesExamQuestions: QuizQuestion[] = [
  {
    id: "jf-q1",
    question: "以下哪个不是 Java 8 引入的函数式接口？",
    options: [
      "Predicate<T>",
      "Function<T, R>",
      "BiFunction<T, U, R>",
      "Callable<V>",
    ],
    answer: 3,
    rationale: "Callable 是 Java 5 引入的，用于有返回值的并发任务。Predicate、Function、BiFunction 都是 Java 8 新增的函数式接口。",
  },
  {
    id: "jf-q2",
    question: "关于 Stream 的以下说法，哪个是正确的？",
    options: [
      "Stream 可以被重复使用",
      "中间操作是立即执行的",
      "并行流总是比顺序流快",
      "终端操作触发整个流水线执行",
    ],
    answer: 3,
    rationale: "Stream 是一次性的，消费后不能重复使用。中间操作是惰性的，只有终端操作触发时才执行。并行流在数据量小时可能更慢。",
  },
  {
    id: "jf-q3",
    question: "Optional.orElseGet(supplier) 与 Optional.orElse(value) 的主要区别是什么？",
    options: [
      "orElseGet 可以返回 null，orElse 不能",
      "orElse 的参数在 Optional 有值时也会被求值",
      "orElseGet 只能用于基本类型",
      "orElse 支持链式调用，orElseGet 不支持",
    ],
    answer: 1,
    rationale: "orElse(value) 无论 Optional 是否有值都会求值 value；orElseGet(supplier) 只在 Optional 为空时才调用 supplier。当默认值的计算开销大时应使用 orElseGet。",
  },
  {
    id: "jf-q4",
    question: "var 关键字不能用于以下哪种场景？",
    options: [
      "局部变量初始化",
      "for-each 循环变量",
      "Lambda 参数（Java 11+）",
      "方法参数",
    ],
    answer: 3,
    rationale: "var 只能用于局部变量类型推断，必须在声明时初始化。不能用于方法参数、构造器参数、方法返回类型、字段、catch 块参数。",
  },
  {
    id: "jf-q5",
    question: "关于 Java 9 模块系统，以下说法哪个是错误的？",
    options: [
      "module-info.java 必须位于源码根目录",
      "未导出的包对其他模块不可见",
      "requires transitive 会传递依赖给使用者",
      "所有模块都必须显式依赖 java.base",
    ],
    answer: 3,
    rationale: "java.base 是所有模块的隐式依赖，无需显式声明 requires java.base。其他选项都是正确的。",
  },
  {
    id: "jf-q6",
    question: "以下 Record 声明，哪个是正确的？",
    options: [
      "record Point(int x, int y) extends Shape {}",
      "record Point(int x, int y) implements Comparable<Point> {}",
      "abstract record Point(int x, int y) {}",
      "record Point(var x, var y) {}",
    ],
    answer: 1,
    rationale: "Record 是 final 的，不能继承其他类（隐式继承 java.lang.Record），但可以实现接口。不能是 abstract，组件类型不能用 var。",
  },
  {
    id: "jf-q7",
    question: "Sealed class 的子类必须声明为以下哪种修饰符之一？",
    options: [
      "public、protected 或 private",
      "static、abstract 或 final",
      "final、sealed 或 non-sealed",
      "synchronized、volatile 或 transient",
    ],
    answer: 2,
    rationale: "Sealed 类的直接子类必须声明为 final（终止继承）、sealed（继续限制）或 non-sealed（开放继承）。这确保了类型层次的可控性。",
  },
  {
    id: "jf-q8",
    question: "关于虚拟线程，以下说法哪个是错误的？",
    options: [
      "虚拟线程由 JVM 调度，而非操作系统",
      "虚拟线程适合 I/O 密集型任务",
      "应该像使用平台线程一样池化虚拟线程",
      "synchronized 块内的阻塞可能导致载体线程被固定",
    ],
    answer: 2,
    rationale: "虚拟线程非常轻量，不应该池化，而应该按需创建。池化是针对平台线程的做法，对虚拟线程反而增加复杂性且无性能收益。",
  },
  {
    id: "jf-q9",
    question: "Pattern Matching for Switch 中，以下哪个是正确的语法？",
    options: [
      "case String s && s.length() > 5 ->",
      "case String s when s.length() > 5 ->",
      "case String s if s.length() > 5 ->",
      "case String s where s.length() > 5 ->",
    ],
    answer: 1,
    rationale: "Java 使用 when 关键字在 switch 的 case 模式后添加守卫条件。这与 Kotlin 使用的 when 和 C# 使用的 when 保持一致。",
  },
  {
    id: "jf-q10",
    question: "SequencedCollection 接口新增了哪个方法来获取反向视图？",
    options: [
      "reverse()",
      "reversed()",
      "descending()",
      "backward()",
    ],
    answer: 1,
    rationale: "SequencedCollection 接口提供 reversed() 方法返回集合的反向视图。这是一个视图，不会创建新的集合，修改视图会反映到原集合。",
  },
  {
    id: "jf-q11",
    question: "关于 Structured Concurrency，以下说法哪个是正确的？",
    options: [
      "子任务可以存活超过父任务的作用域",
      "StructuredTaskScope 不需要显式关闭",
      "ShutdownOnFailure 在任一子任务失败时取消其他子任务",
      "只能与平台线程一起使用",
    ],
    answer: 2,
    rationale: "Structured Concurrency 的核心原则是子任务的生命周期绑定到父任务。ShutdownOnFailure 策略在检测到任一子任务失败时会立即取消其他子任务并传播异常。",
  },
  {
    id: "jf-q12",
    question: "ScopedValue 相比 ThreadLocal 的主要优势是什么？",
    options: [
      "ScopedValue 支持可变值",
      "ScopedValue 有明确的生命周期，自动清理",
      "ScopedValue 可以跨进程共享",
      "ScopedValue 不支持继承",
    ],
    answer: 1,
    rationale: "ScopedValue 的值不可变，在作用域结束后自动清理。这避免了 ThreadLocal 常见的内存泄漏问题，且与虚拟线程配合更高效（虚拟线程可能有百万级别）。",
  },
]

export const javaFeaturesRoadmap: RoadmapDefinition = {
  id: "java-features",
  label: "Java 新特性",
  title: "Java 新特性",
  durationLabel: "18 个主题",
  description: "从 Java 8 到 Java 25，系统掌握 Lambda、Stream、Records、Virtual Threads 等核心新特性，紧跟 Java 现代化演进。",
  heroBadge: "Java 8-25",

  stages: javaFeaturesStages,
  knowledgeCards: javaFeaturesKnowledgeCards,
  examQuestions: javaFeaturesExamQuestions,

  suggestion: (percent: number) => {
    if (percent === 0) return "从 Lambda 和 Stream 开始，这是现代 Java 编程的基础。"
    if (percent < 25) return "继续深入 Java 8 特性，掌握函数式编程思维。"
    if (percent < 50) return "进入 Java 9-11 阶段，学习模块系统和 var 类型推断。"
    if (percent < 75) return "学习 Records、Sealed Classes 和模式匹配，体验现代 Java。"
    if (percent < 100) return "最后冲刺！掌握虚拟线程和结构化并发，成为 Java 专家。"
    return "恭喜完成 Java 新特性学习！持续关注每个新版本的特性演进。"
  },

  resourceGuide: {
    environment: "安装 JDK 21+（推荐 Eclipse Temurin 或 Oracle JDK），配置 IntelliJ IDEA 或 VS Code + Java 扩展。使用 --enable-preview 体验预览特性。",
    fallbackKeyPoints: [
      "函数式编程：Lambda、Stream、Optional 是 Java 8 的核心革新。",
      "数据导向：Records + Sealed Classes + Pattern Matching 简化数据建模。",
      "轻量并发：Virtual Threads 用同步风格实现高吞吐量。",
      "渐进演进：预览特性逐步转正，LTS 版本适合生产环境。",
    ],
    handsOnSteps: [
      "用 Stream API 重构现有的集合处理代码。",
      "定义 Record 类型替代 POJO，结合 Jackson 序列化。",
      "用虚拟线程重写一个 HTTP 客户端，体验并发简化。",
      "用 sealed interface + records + pattern matching 实现表达式求值器。",
    ],
    selfChecks: [
      "能否解释 map 和 flatMap 在 Stream 和 Optional 中的区别？",
      "能否说明 Record 与 Lombok @Data 的异同？",
      "能否描述虚拟线程的调度原理和 Pin 问题？",
      "能否使用 Pattern Matching for Switch 处理 sealed 类型？",
    ],
    extensions: [
      "阅读 OpenJDK 项目（Amber、Loom、Panama、Valhalla）了解未来方向。",
      "学习 Project Leyden 了解 Java 的启动时间和内存优化。",
      "关注 JEP 草案，参与预览特性反馈。",
    ],
    lessonQuizAdvice: "Java 新特性注重理解设计动机和最佳实践。遇到不确定的题目时，思考「为什么要引入这个特性」往往能帮助找到正确答案。",
  },
}
