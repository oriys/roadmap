import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "jvm-w4-1": {
        lessonId: "jvm-w4-1",
        background: [
            "【三层类加载器】JVM 定义了三层类加载器层次：Bootstrap ClassLoader（引导类加载器）加载核心类库；Platform ClassLoader（平台类加载器，Java 9 前叫 Extension ClassLoader）加载平台扩展类；Application ClassLoader（应用类加载器，也叫 System ClassLoader）加载应用类路径上的类。",
            "【Bootstrap ClassLoader】引导类加载器是 JVM 的一部分，用 C++ 实现（HotSpot），负责加载 java.base 模块（Java 9+）或 rt.jar（Java 8）中的核心类。由于是 JVM 内置，getClassLoader() 返回 null。",
            "【Platform ClassLoader】平台类加载器加载 JDK 平台模块和扩展类。Java 9 之前叫 Extension ClassLoader，从 $JAVA_HOME/lib/ext 加载。Java 9+ 加载平台模块（如 java.sql、java.xml）。",
            "【Application ClassLoader】应用类加载器是最常用的加载器，加载 CLASSPATH 环境变量、-classpath/-cp 参数、模块路径（--module-path）指定的类。可通过 ClassLoader.getSystemClassLoader() 获取。",
            "【Java 9 模块系统影响】Java 9 引入模块系统（JPMS）后，类加载器结构有所调整：Extension ClassLoader 重命名为 Platform ClassLoader，加载器不再是 URLClassLoader 的实例，增加了模块可见性控制。"
        ],
        keyDifficulties: [
            "【层次关系】类加载器形成父子层次结构：Bootstrap（根）→ Platform（子）→ Application（孙）。但这不是类继承关系，而是通过 parent 字段组成的逻辑委派链。",
            "【可见性原则】父加载器加载的类对子加载器可见，但子加载器加载的类对父加载器不可见。这意味着核心类库可以被应用代码访问，但核心类库无法访问应用类。",
            "【唯一性原则】同一个类只会被一个类加载器加载一次。相同的类文件被不同加载器加载会产生不同的 Class 对象，instanceof 比较会返回 false。",
            "【命名空间】每个类加载器有独立的命名空间。不同加载器可以加载同名类，它们被视为不同类型。这是实现类隔离（如 OSGi、Tomcat）的基础。"
        ],
        handsOnPath: [
            "打印类加载器层次：遍历 loader.getParent() 直到 null，观察加载器链。",
            "使用 String.class.getClassLoader() 验证核心类由 Bootstrap 加载（返回 null）。",
            "使用 ClassLoader.getSystemClassLoader() 获取应用类加载器，打印其类名。",
            "编写代码验证可见性：尝试从 Bootstrap 加载的类中反射调用应用类。",
            "使用 java --show-module-resolution 观察 Java 9+ 模块加载过程。"
        ],
        selfCheck: [
            "JVM 的三层类加载器分别是什么？各自负责加载什么类？",
            "为什么 String.class.getClassLoader() 返回 null？",
            "Java 9 对类加载器层次做了什么调整？",
            "什么是类加载器的可见性原则？",
            "什么是类加载器的命名空间？它有什么作用？",
            "Platform ClassLoader 和 Extension ClassLoader 是什么关系？"
        ],
        extensions: [
            "研究 Tomcat 的类加载器架构：CommonClassLoader、CatalinaClassLoader、WebappClassLoader。",
            "了解 OSGi 如何使用类加载器实现模块隔离和动态更新。",
            "探索 Spring Boot 的 LaunchedURLClassLoader 如何加载嵌套 JAR。",
            "研究 Java 9 Layer API 如何创建类加载器层次。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html",
            "https://www.geeksforgeeks.org/java/classloader-in-java/",
            "https://dev.java/learn/modules/"
        ]
    },
    "jvm-w4-2": {
        lessonId: "jvm-w4-2",
        background: [
            "【双亲委派定义】双亲委派模型（Parent Delegation Model）是类加载的核心机制：当一个类加载器收到加载请求时，它首先把请求委派给父加载器，只有父加载器无法完成加载时，子加载器才尝试自己加载。",
            "【工作流程】加载请求流程：Application → Platform → Bootstrap。Bootstrap 搜索核心类库，找到则返回；否则 Platform 搜索平台类库；最后 Application 搜索应用类路径。找不到则抛出 ClassNotFoundException。",
            "【安全保障】双亲委派保障安全性：即使用户定义了 java.lang.String 类，也会被委派到 Bootstrap 加载，返回的是真正的核心 String 类。这防止了恶意代码冒充核心类。",
            "【唯一性保障】双亲委派保证类的唯一性：同一个类只会被加载一次，由能够找到它的最高层加载器加载。这避免了同一个类被多个加载器重复加载。",
            "【loadClass 实现】双亲委派逻辑在 ClassLoader.loadClass() 方法中实现：先检查是否已加载（findLoadedClass），再委派父加载器（parent.loadClass），最后自己加载（findClass）。"
        ],
        keyDifficulties: [
            "【破坏双亲委派】某些场景需要打破双亲委派：SPI（如 JDBC）父加载器需要调用子加载器加载的实现类；热部署需要重新加载修改后的类；模块化系统需要平等的类加载关系。",
            "【线程上下文类加载器】Thread.currentThread().getContextClassLoader() 是打破双亲委派的机制。SPI 使用它让 Bootstrap 加载的接口找到 Application 加载的实现类。ServiceLoader 依赖此机制。",
            "【JDBC 加载问题】JDBC 是经典的 SPI 案例：DriverManager 由 Bootstrap 加载，但具体的数据库驱动（如 MySQL Driver）在应用类路径，需要 Application 加载。通过线程上下文类加载器解决。",
            "【OSGi 模型】OSGi 使用网状的类加载器结构而非树状，不遵循双亲委派。每个 Bundle 有独立的类加载器，根据导入/导出规则相互委派。"
        ],
        handsOnPath: [
            "阅读 ClassLoader.loadClass() 源码，理解双亲委派的实现逻辑。",
            "尝试创建一个 java.lang.MyClass，观察加载时的行为（会被 Bootstrap 拒绝）。",
            "使用 Thread.currentThread().getContextClassLoader() 获取上下文类加载器。",
            "阅读 ServiceLoader 源码，观察它如何使用上下文类加载器。",
            "编写 JDBC 连接代码，使用 -verbose:class 观察 Driver 类的加载过程。"
        ],
        selfCheck: [
            "什么是双亲委派模型？请描述类加载的委派流程。",
            "双亲委派模型有什么好处？它如何保证安全性？",
            "loadClass 方法是如何实现双亲委派的？",
            "什么场景需要打破双亲委派？如何打破？",
            "什么是线程上下文类加载器？它解决什么问题？",
            "JDBC 如何解决 DriverManager 加载驱动的问题？"
        ],
        extensions: [
            "研究 Java 6 对 JDBC 驱动自动注册的改进（ServiceProvider 机制）。",
            "了解 Tomcat 如何打破双亲委派实现 Web 应用隔离。",
            "探索 JDK 9+ 的 ModuleLayer 如何替代部分类加载器功能。",
            "研究 Dubbo、Spring 等框架如何处理类加载问题。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html#jvms-5.3.2",
            "https://www.geeksforgeeks.org/java/classloader-in-java/",
            "https://www.oodlestechnologies.com/blogs/class-loader-delegation-in-java-with-example/"
        ]
    },
    "jvm-w4-3": {
        lessonId: "jvm-w4-3",
        background: [
            "【自定义类加载器】通过继承 java.lang.ClassLoader 并重写 findClass() 方法，可以实现自定义的类加载逻辑。常见场景：从网络加载类、从加密文件解密加载、实现热部署、实现类隔离。",
            "【关键方法】loadClass()：实现双亲委派逻辑，通常不重写；findClass()：定义如何查找类的字节码，需要重写；defineClass()：将字节数组转换为 Class 对象，由 JVM 实现，直接调用。",
            "【热部署原理】热部署的核心是卸载旧类、加载新类。但 JVM 中类不能直接卸载，只有当类加载器被回收时其加载的类才能卸载。因此热部署需要：创建新加载器 → 加载新版本 → 丢弃旧加载器。",
            "【类隔离原理】不同类加载器加载的同名类被视为不同类型。利用这一特性可以在同一 JVM 中运行多个版本的同一个库。Tomcat、OSGi、Maven 插件都使用这种技术。",
            "【线程上下文类加载器】Thread.setContextClassLoader() 可以设置当前线程的上下文类加载器。框架代码使用 getContextClassLoader() 获取应用类加载器，从而加载应用代码中的类。"
        ],
        keyDifficulties: [
            "【重写 findClass vs loadClass】遵守双亲委派应重写 findClass()；打破双亲委派才重写 loadClass()。重写 loadClass() 需要谨慎，可能破坏类加载的基本保障。",
            "【defineClass 的限制】defineClass() 有安全限制：不能定义 java.* 包下的类（SecurityException）；类名必须与字节码中的全限定名匹配；同一个类不能被同一个加载器重复定义。",
            "【热部署的复杂性】热部署存在复杂问题：静态字段状态丢失、ThreadLocal 泄漏、老类的实例与新类不兼容、类加载器泄漏（内存泄漏的常见原因）。",
            "【类加载器泄漏】如果类加载器被意外持有（如 ThreadLocal、静态字段、监听器未注销），它加载的所有类和相关对象都无法回收。这是 Web 应用常见的内存泄漏原因。"
        ],
        handsOnPath: [
            "实现简单的自定义类加载器：从指定目录读取 .class 文件，用 defineClass() 创建 Class。",
            "实现加密类加载器：class 文件用简单加密存储，加载时解密。",
            "实现热部署演示：修改类文件后，创建新加载器重新加载，对比新旧实例。",
            "验证类隔离：同一个类用不同加载器加载，验证 instanceof 返回 false。",
            "使用 jcmd <pid> GC.class_histogram 观察类加载器加载的类数量。"
        ],
        selfCheck: [
            "如何实现自定义类加载器？需要重写哪个方法？",
            "findClass 和 loadClass 有什么区别？分别在什么情况下重写？",
            "热部署的原理是什么？为什么需要新建类加载器？",
            "什么是类隔离？它是如何实现的？",
            "什么是类加载器泄漏？如何避免？",
            "defineClass 有什么限制？"
        ],
        extensions: [
            "研究 JRebel 如何实现更完善的热部署（无需重启加载器）。",
            "了解 Arthas 如何实现运行时类重定义（Instrumentation.redefineClasses）。",
            "探索 ByteBuddy 如何简化字节码生成和类加载。",
            "研究 Maven 的 Plexus Container 如何实现插件隔离。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html",
            "https://www.geeksforgeeks.org/java/classloader-in-java/",
            "https://www.oodlestechnologies.com/blogs/class-loader-delegation-in-java-with-example/"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w4-1": [
        {
            id: "jvm-w4-1-q1",
            question: "JVM 的三层类加载器从顶到底的顺序是什么？",
            options: [
                "Application → Platform → Bootstrap",
                "Bootstrap → Platform → Application",
                "Platform → Bootstrap → Application",
                "Application → Bootstrap → Platform"
            ],
            answer: 1,
            rationale: "类加载器层次从顶到底是：Bootstrap（引导）→ Platform（平台）→ Application（应用）。委派方向是从下往上。"
        },
        {
            id: "jvm-w4-1-q2",
            question: "String.class.getClassLoader() 返回什么？",
            options: [
                "Application ClassLoader",
                "Platform ClassLoader",
                "Bootstrap ClassLoader 对象",
                "null"
            ],
            answer: 3,
            rationale: "String 类由 Bootstrap ClassLoader 加载。由于 Bootstrap 是 JVM 内置的 C++ 实现，不是 Java 对象，所以 getClassLoader() 返回 null。"
        },
        {
            id: "jvm-w4-1-q3",
            question: "Java 9 之前的 Extension ClassLoader 在 Java 9 之后叫什么？",
            options: [
                "Module ClassLoader",
                "Platform ClassLoader",
                "System ClassLoader",
                "Boot ClassLoader"
            ],
            answer: 1,
            rationale: "Java 9 引入模块系统后，Extension ClassLoader 被重命名为 Platform ClassLoader。它加载平台模块而不是 ext 目录。"
        },
        {
            id: "jvm-w4-1-q4",
            question: "Application ClassLoader 加载哪些位置的类？",
            options: [
                "只加载 rt.jar",
                "只加载 lib/ext 目录",
                "CLASSPATH、-classpath/-cp 参数、模块路径指定的类",
                "只加载 JDK 核心类"
            ],
            answer: 2,
            rationale: "Application ClassLoader 加载 CLASSPATH 环境变量、-classpath/-cp 参数、模块路径（--module-path）指定的类，是最常用的加载器。"
        },
        {
            id: "jvm-w4-1-q5",
            question: "类加载器的父子关系是通过什么建立的？",
            options: [
                "类继承",
                "parent 字段组成的逻辑委派链",
                "接口实现",
                "JVM 硬编码"
            ],
            answer: 1,
            rationale: "类加载器的父子层次结构不是类继承关系，而是通过 parent 字段组成的逻辑委派链。可以在构造函数中指定 parent。"
        },
        {
            id: "jvm-w4-1-q6",
            question: "什么是类加载器的可见性原则？",
            options: [
                "所有加载器加载的类相互可见",
                "只有同一个加载器加载的类相互可见",
                "父加载器加载的类对子可见，子加载器加载的类对父不可见",
                "子加载器加载的类对父可见"
            ],
            answer: 2,
            rationale: "可见性原则：父加载器加载的类对子加载器可见，但子加载器加载的类对父加载器不可见。核心类可以被应用代码访问，反之不行。"
        },
        {
            id: "jvm-w4-1-q7",
            question: "如果同一个类被不同的类加载器加载，会发生什么？",
            options: [
                "只加载一次，忽略后续请求",
                "抛出异常",
                "产生不同的 Class 对象，被视为不同类型",
                "自动合并为一个 Class 对象"
            ],
            answer: 2,
            rationale: "不同加载器加载的同名类会产生不同的 Class 对象，被 JVM 视为不同类型。instanceof 比较会返回 false。"
        },
        {
            id: "jvm-w4-1-q8",
            question: "ClassLoader.getSystemClassLoader() 返回什么？",
            options: [
                "Bootstrap ClassLoader",
                "Platform ClassLoader",
                "Application ClassLoader",
                "当前类的加载器"
            ],
            answer: 2,
            rationale: "ClassLoader.getSystemClassLoader() 返回应用类加载器（Application ClassLoader），也叫系统类加载器。"
        },
        {
            id: "jvm-w4-1-q9",
            question: "Java 9 的模块系统对类加载器有什么影响？",
            options: [
                "取消了所有类加载器",
                "加载器不再是 URLClassLoader 实例，增加了模块可见性控制",
                "只保留一个类加载器",
                "没有任何影响"
            ],
            answer: 1,
            rationale: "Java 9 模块系统后，类加载器不再是 URLClassLoader 的实例，增加了模块可见性控制，Extension 重命名为 Platform。"
        },
        {
            id: "jvm-w4-1-q10",
            question: "什么是类加载器的命名空间？",
            options: [
                "类的包名",
                "每个类加载器独立的类型空间，不同加载器可以加载同名类",
                "类的全限定名",
                "类加载器的名称"
            ],
            answer: 1,
            rationale: "每个类加载器有独立的命名空间，不同加载器可以加载同名类且被视为不同类型。这是实现类隔离的基础。"
        },
        {
            id: "jvm-w4-1-q11",
            question: "Bootstrap ClassLoader 由什么语言实现？",
            options: [
                "Java",
                "C++",
                "Python",
                "JavaScript"
            ],
            answer: 1,
            rationale: "Bootstrap ClassLoader 是 JVM 的一部分，在 HotSpot 中用 C++ 实现。它不是 Java 对象，所以 getClassLoader() 返回 null。"
        },
        {
            id: "jvm-w4-1-q12",
            question: "Tomcat 使用什么技术实现 Web 应用隔离？",
            options: [
                "进程隔离",
                "虚拟机隔离",
                "类加载器命名空间隔离",
                "容器隔离"
            ],
            answer: 2,
            rationale: "Tomcat 为每个 Web 应用创建独立的 WebappClassLoader，利用类加载器命名空间隔离实现多个应用在同一 JVM 中互不干扰。"
        }
    ],
    "jvm-w4-2": [
        {
            id: "jvm-w4-2-q1",
            question: "什么是双亲委派模型？",
            options: [
                "子类加载器继承父类加载器",
                "收到加载请求先委派给父加载器，父无法加载时才自己加载",
                "父子加载器同时加载同一个类",
                "只有父加载器能加载类"
            ],
            answer: 1,
            rationale: "双亲委派模型：当类加载器收到加载请求时，首先委派给父加载器处理，只有父加载器无法完成时，子加载器才尝试自己加载。"
        },
        {
            id: "jvm-w4-2-q2",
            question: "双亲委派模型的主要优点是什么？",
            options: [
                "加载速度更快",
                "保证安全性和类的唯一性",
                "支持更多类格式",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "双亲委派保障安全性（防止恶意代码冒充核心类）和唯一性（同一个类只被加载一次），是 Java 类加载的核心机制。"
        },
        {
            id: "jvm-w4-2-q3",
            question: "如果用户定义了 java.lang.String 类，会发生什么？",
            options: [
                "覆盖核心 String 类",
                "被委派到 Bootstrap 加载，返回核心 String 类",
                "抛出编译错误",
                "两个 String 类并存"
            ],
            answer: 1,
            rationale: "由于双亲委派，加载请求被委派到 Bootstrap，它会返回核心类库中的 String 类。用户定义的 java.lang.String 不会被加载。"
        },
        {
            id: "jvm-w4-2-q4",
            question: "loadClass 方法实现双亲委派的步骤是什么？",
            options: [
                "findClass → defineClass → loadClass",
                "findLoadedClass → parent.loadClass → findClass",
                "defineClass → findClass → parent.loadClass",
                "parent.loadClass → findLoadedClass → defineClass"
            ],
            answer: 1,
            rationale: "loadClass 实现：先检查是否已加载（findLoadedClass），再委派父加载器（parent.loadClass），最后自己查找（findClass）。"
        },
        {
            id: "jvm-w4-2-q5",
            question: "什么场景需要打破双亲委派模型？",
            options: [
                "加载核心类库",
                "SPI、热部署、模块化系统",
                "普通应用开发",
                "加载系统配置"
            ],
            answer: 1,
            rationale: "需要打破双亲委派的场景：SPI（父加载器需调用子加载器）、热部署（重新加载修改后的类）、模块化（平等加载关系）。"
        },
        {
            id: "jvm-w4-2-q6",
            question: "线程上下文类加载器的作用是什么？",
            options: [
                "加载线程类",
                "让父加载器访问子加载器加载的类",
                "加速类加载",
                "缓存已加载的类"
            ],
            answer: 1,
            rationale: "线程上下文类加载器（getContextClassLoader）让 Bootstrap 加载的核心类可以获取 Application 加载器，从而加载应用类。"
        },
        {
            id: "jvm-w4-2-q7",
            question: "JDBC 如何解决 DriverManager 加载数据库驱动的问题？",
            options: [
                "把驱动放入核心类库",
                "使用线程上下文类加载器",
                "修改 Bootstrap 加载器",
                "不使用 DriverManager"
            ],
            answer: 1,
            rationale: "DriverManager 由 Bootstrap 加载，但数据库驱动在应用类路径。通过线程上下文类加载器，DriverManager 可以使用应用加载器加载驱动。"
        },
        {
            id: "jvm-w4-2-q8",
            question: "ServiceLoader 使用什么机制加载服务实现？",
            options: [
                "反射",
                "双亲委派",
                "线程上下文类加载器",
                "直接实例化"
            ],
            answer: 2,
            rationale: "ServiceLoader 使用线程上下文类加载器加载 META-INF/services 中定义的服务实现类，这是 SPI 机制的核心。"
        },
        {
            id: "jvm-w4-2-q9",
            question: "OSGi 的类加载模型有什么特点？",
            options: [
                "严格遵守双亲委派",
                "使用网状结构而非树状，不遵循双亲委派",
                "只使用一个类加载器",
                "不支持自定义加载"
            ],
            answer: 1,
            rationale: "OSGi 使用网状的类加载器结构，每个 Bundle 有独立的类加载器，根据导入/导出规则相互委派，不是树状的双亲委派。"
        },
        {
            id: "jvm-w4-2-q10",
            question: "如何获取当前线程的上下文类加载器？",
            options: [
                "ClassLoader.getSystemClassLoader()",
                "Thread.currentThread().getContextClassLoader()",
                "this.getClass().getClassLoader()",
                "Class.forName().getClassLoader()"
            ],
            answer: 1,
            rationale: "使用 Thread.currentThread().getContextClassLoader() 获取当前线程的上下文类加载器。可以用 setContextClassLoader() 设置。"
        },
        {
            id: "jvm-w4-2-q11",
            question: "Tomcat 如何实现 Web 应用的类隔离？",
            options: [
                "严格遵守双亲委派",
                "打破双亲委派，优先使用 WebappClassLoader 加载应用类",
                "使用单独的 JVM",
                "不支持类隔离"
            ],
            answer: 1,
            rationale: "Tomcat 的 WebappClassLoader 打破双亲委派：对于应用类，优先自己加载而不是委派父加载器，从而实现应用间的类隔离。"
        },
        {
            id: "jvm-w4-2-q12",
            question: "类加载器找不到类时会抛出什么异常？",
            options: [
                "NullPointerException",
                "ClassNotFoundException",
                "RuntimeException",
                "IllegalStateException"
            ],
            answer: 1,
            rationale: "当所有加载器都无法找到请求的类时，会抛出 ClassNotFoundException。如果是链接阶段找不到则抛出 NoClassDefFoundError。"
        }
    ],
    "jvm-w4-3": [
        {
            id: "jvm-w4-3-q1",
            question: "实现自定义类加载器通常需要重写哪个方法？",
            options: [
                "loadClass()",
                "findClass()",
                "defineClass()",
                "getParent()"
            ],
            answer: 1,
            rationale: "自定义类加载器通常重写 findClass() 方法，定义如何查找类的字节码。这样可以保持双亲委派机制。"
        },
        {
            id: "jvm-w4-3-q2",
            question: "defineClass() 方法的作用是什么？",
            options: [
                "查找类的字节码",
                "委派父加载器",
                "将字节数组转换为 Class 对象",
                "卸载类"
            ],
            answer: 2,
            rationale: "defineClass() 将字节数组转换为 Class 对象，由 JVM 实现，是创建 Class 对象的底层方法。"
        },
        {
            id: "jvm-w4-3-q3",
            question: "热部署的核心原理是什么？",
            options: [
                "直接修改已加载的类",
                "创建新加载器加载新版本，丢弃旧加载器",
                "重启 JVM",
                "使用反射修改字段"
            ],
            answer: 1,
            rationale: "JVM 中类不能直接卸载，只有类加载器被回收时其加载的类才能卸载。热部署需要：创建新加载器 → 加载新版本 → 丢弃旧加载器。"
        },
        {
            id: "jvm-w4-3-q4",
            question: "什么情况下应该重写 loadClass() 而不是 findClass()？",
            options: [
                "总是重写 loadClass()",
                "需要打破双亲委派时",
                "需要加载网络类时",
                "从不重写 loadClass()"
            ],
            answer: 1,
            rationale: "遵守双亲委派应重写 findClass()；需要打破双亲委派才重写 loadClass()。重写 loadClass() 需要谨慎。"
        },
        {
            id: "jvm-w4-3-q5",
            question: "defineClass() 有什么限制？",
            options: [
                "没有任何限制",
                "不能定义 java.* 包下的类",
                "只能定义接口",
                "只能在 main 方法中调用"
            ],
            answer: 1,
            rationale: "defineClass() 有安全限制：不能定义 java.* 包下的类（SecurityException），类名必须与字节码中的全限定名匹配。"
        },
        {
            id: "jvm-w4-3-q6",
            question: "什么是类加载器泄漏？",
            options: [
                "类加载器加载了太多类",
                "类加载器被意外持有导致无法回收，造成内存泄漏",
                "类加载器加载了错误的类",
                "类加载器运行过慢"
            ],
            answer: 1,
            rationale: "如果类加载器被意外持有（如 ThreadLocal、静态字段、监听器未注销），它加载的所有类和相关对象都无法回收，导致内存泄漏。"
        },
        {
            id: "jvm-w4-3-q7",
            question: "热部署存在什么问题？",
            options: [
                "没有任何问题",
                "静态字段状态丢失、ThreadLocal 泄漏、新旧类不兼容",
                "只能部署一次",
                "需要重启 JVM"
            ],
            answer: 1,
            rationale: "热部署存在复杂问题：静态字段状态丢失、ThreadLocal 泄漏、老类的实例与新类不兼容、类加载器泄漏等。"
        },
        {
            id: "jvm-w4-3-q8",
            question: "同一个类被不同加载器加载后，instanceof 比较结果是什么？",
            options: [
                "返回 true",
                "返回 false",
                "抛出异常",
                "取决于具体情况"
            ],
            answer: 1,
            rationale: "不同加载器加载的同名类被视为不同类型，instanceof 比较返回 false。这是类隔离的基础。"
        },
        {
            id: "jvm-w4-3-q9",
            question: "Thread.setContextClassLoader() 的作用是什么？",
            options: [
                "设置系统类加载器",
                "设置当前线程的上下文类加载器",
                "替换 Bootstrap 加载器",
                "卸载类加载器"
            ],
            answer: 1,
            rationale: "Thread.setContextClassLoader() 设置当前线程的上下文类加载器，框架代码使用 getContextClassLoader() 获取它来加载应用类。"
        },
        {
            id: "jvm-w4-3-q10",
            question: "使用什么命令可以查看类加载器加载的类数量？",
            options: [
                "jps",
                "jcmd <pid> GC.class_histogram",
                "jstat",
                "jmap -dump"
            ],
            answer: 1,
            rationale: "使用 jcmd <pid> GC.class_histogram 可以查看类的实例数量和大小统计，包括类加载器加载的类信息。"
        },
        {
            id: "jvm-w4-3-q11",
            question: "类隔离技术被哪些框架使用？",
            options: [
                "只有 JVM 内部使用",
                "Tomcat、OSGi、Maven 插件等",
                "只有 Spring 使用",
                "只有数据库驱动使用"
            ],
            answer: 1,
            rationale: "类隔离技术被广泛使用：Tomcat（Web 应用隔离）、OSGi（模块隔离）、Maven（插件隔离）等框架都依赖此技术。"
        },
        {
            id: "jvm-w4-3-q12",
            question: "JRebel 如何实现更完善的热部署？",
            options: [
                "重启 JVM",
                "使用 Instrumentation API 重定义类，无需重建加载器",
                "只支持静态页面",
                "不支持热部署"
            ],
            answer: 1,
            rationale: "JRebel 使用 Instrumentation.redefineClasses() API 在运行时重定义类，无需重新创建类加载器，实现更平滑的热部署。"
        }
    ]
}
