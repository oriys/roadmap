import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "jvm-w3-1": {
        lessonId: "jvm-w3-1",
        background: [
            "【加载定义】加载（Loading）是类生命周期的第一个阶段，JVM 通过类的全限定名（如 java.lang.String）获取该类的二进制字节流，然后将这些数据转换为方法区中的运行时数据结构。",
            "【字节流来源】二进制字节流可以来自多种渠道：本地文件系统的 .class 文件、JAR/WAR 包、网络下载、运行时动态生成（如动态代理）、从数据库读取、从加密文件解密等。这种灵活性是 Java 平台动态性的基础。",
            "【Class 对象创建】加载完成后，JVM 会在堆内存中创建一个 java.lang.Class 对象，作为程序访问方法区中该类数据的入口。每个类只有一个 Class 对象，它是反射的基础。",
            "【两种加载器】JVM 规范定义了两类加载器：引导类加载器（Bootstrap ClassLoader）由 JVM 实现提供，用户定义类加载器（User-defined ClassLoader）继承自 java.lang.ClassLoader。",
            "【数组类特殊性】数组类不通过类加载器创建，而是由 JVM 直接在内存中动态构造。但数组的元素类型（如果是引用类型）仍需要类加载器加载。"
        ],
        keyDifficulties: [
            "【发起加载器 vs 定义加载器】发起加载器（Initiating Loader）是被请求加载类的加载器；定义加载器（Defining Loader）是实际创建 Class 对象的加载器。由于委派机制，两者可能不同。JVM 用 <N, Ld> 唯一标识一个类（N 是全限定名，Ld 是定义加载器）。",
            "【加载时机】JVM 规范没有强制规定何时加载类，这给了实现很大灵活性。预加载可以在启动时加载常用类；延迟加载可以等到首次使用时再加载。但初始化时机是严格规定的。",
            "【运行时包】只有同一个类加载器加载的、在同一个包中的类才属于同一个运行时包。运行时包决定了包访问权限（default/package-private）的边界。",
            "【加载约束】为保证类型安全，JVM 施加加载约束（Loading Constraints）：如果类 C 引用类 D，那么 C 的定义加载器和 D 的定义加载器对类型的解析必须一致，否则抛出 LinkageError。"
        ],
        handsOnPath: [
            "使用 javap -v MyClass.class 查看类的常量池，理解符号引用的结构。",
            "编写代码获取类的加载器：MyClass.class.getClassLoader()，比较不同类的加载器。",
            "使用 -verbose:class 参数运行程序，观察类加载顺序和加载器信息。",
            "尝试 Class.forName(name) 和 ClassLoader.loadClass(name) 的区别：前者会初始化类，后者只加载不初始化。",
            "观察数组类的加载器：new String[0].getClass().getClassLoader() 返回 null（Bootstrap），new MyClass[0].getClass().getClassLoader() 返回 MyClass 的加载器。"
        ],
        selfCheck: [
            "类加载的三个阶段分别是什么？加载阶段具体做了什么？",
            "二进制字节流可以从哪些渠道获取？",
            "Class 对象存储在哪里？它的作用是什么？",
            "发起加载器和定义加载器有什么区别？",
            "数组类是如何创建的？数组的类加载器是什么？",
            "什么是运行时包？它对访问控制有什么影响？"
        ],
        extensions: [
            "研究 Java Agent 如何在类加载时修改字节码（Instrumentation API）。",
            "了解 Spring 的 PathMatchingResourcePatternResolver 如何扫描类路径资源。",
            "探索 OSGi 如何通过自定义类加载器实现模块化和动态更新。",
            "研究 Unsafe.defineClass 和 MethodHandles.Lookup.defineClass 的区别。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html#jvms-5.3",
            "https://www.geeksforgeeks.org/java/classloader-in-java/",
            "https://www.artima.com/insidejvm/ed2/lifetype.html"
        ]
    },
    "jvm-w3-2": {
        lessonId: "jvm-w3-2",
        background: [
            "【链接概述】链接（Linking）是将已加载的类/接口整合到 JVM 运行时状态的过程，使其可以被执行。链接分为三个步骤：验证（Verification）、准备（Preparation）、解析（Resolution）。",
            "【验证目的】验证确保类的二进制表示结构正确、符合 JVM 规范，防止恶意或错误的字节码危害 JVM。验证失败抛出 VerifyError。验证是保障 JVM 安全性的关键环节。",
            "【验证内容】验证包括：文件格式验证（魔数、版本号）、元数据验证（类继承关系）、字节码验证（数据流分析、控制流分析）、符号引用验证（确保引用的类/方法/字段存在）。",
            "【准备阶段】准备为类变量（static 变量）分配内存并设置初始零值（如 int 为 0，对象引用为 null）。注意：这里设置的是零值，不是代码中的初始值，初始值在初始化阶段赋予。",
            "【解析阶段】解析将常量池中的符号引用（Symbolic Reference）转换为直接引用（Direct Reference）。符号引用是字面量描述（如类名字符串），直接引用是内存地址或偏移量。"
        ],
        keyDifficulties: [
            "【final static 特例】如果静态变量同时被 final 修饰且值是编译期常量（如 static final int X = 10），则在准备阶段就直接赋予指定值，而非零值。因为 ConstantValue 属性存储了编译期常量。",
            "【解析时机】JVM 规范允许延迟解析（Lazy Resolution）：符号引用可以等到首次使用时才解析。但对于 invokedynamic，每次调用都可能重新解析。解析结果会被缓存。",
            "【解析内容】解析涉及多种符号引用：类或接口解析（CONSTANT_Class_info）、字段解析（CONSTANT_Fieldref_info）、方法解析（CONSTANT_Methodref_info）、接口方法解析、方法类型和方法句柄解析。",
            "【方法覆写规则】解析方法时需要考虑覆写规则：方法 mC 可以覆写 mA 需满足：同名同签名、mC 非 private、mA 是 public/protected 或同包 default。这影响 invokevirtual 的方法选择。"
        ],
        handsOnPath: [
            "故意制造一个 VerifyError：用 ASM 或 ByteBuddy 生成不合法的字节码，观察验证失败。",
            "编写代码验证准备阶段的零值：在静态代码块中打印 static 变量，观察其初始值。",
            "使用 -Xverify:none（不推荐生产使用）跳过验证，对比启动时间。",
            "使用 javap -v 查看常量池中的符号引用（CONSTANT_Fieldref_info 等）。",
            "对比 static final int X = 10 和 static final int Y = getValue() 在字节码中的差异。"
        ],
        selfCheck: [
            "链接的三个步骤分别是什么？各自的作用是什么？",
            "验证阶段检查哪些内容？为什么需要验证？",
            "准备阶段对类变量做什么？final static 常量有什么特殊处理？",
            "什么是符号引用？什么是直接引用？它们的区别是什么？",
            "解析可以延迟到什么时候？解析结果是否会缓存？",
            "方法覆写需要满足什么条件？"
        ],
        extensions: [
            "研究 StackMapTable 属性如何加速字节码验证（Java 6+ 的类型检验器）。",
            "了解 -XX:+UseSplitVerifier 和 -XX:+FailOverToOldVerifier 的历史。",
            "探索 invokedynamic 指令的解析过程（Bootstrap Method 和 CallSite）。",
            "研究 VarHandle 和 MethodHandle 的解析机制。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html#jvms-5.4",
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-4.html#jvms-4.10",
            "https://www.artima.com/insidejvm/ed2/linkmod.html"
        ]
    },
    "jvm-w3-3": {
        lessonId: "jvm-w3-3",
        background: [
            "【初始化定义】初始化（Initialization）是执行类构造器 <clinit> 方法的过程。<clinit> 由编译器自动收集类中所有静态变量的赋值动作和静态代码块（static {}）中的语句合并生成。",
            "【<clinit> 特点】<clinit> 方法不需要显式调用父类的 <clinit>，JVM 保证父类的 <clinit> 先于子类执行。因此 Object 类的 <clinit>（如果有）最先执行。如果类没有静态变量和静态代码块，可能不生成 <clinit>。",
            "【线程安全】JVM 保证 <clinit> 方法在多线程环境下的同步执行：如果多个线程同时初始化一个类，只有一个线程执行 <clinit>，其他线程阻塞等待。这是单例模式利用类初始化实现线程安全的基础。",
            "【主动引用】只有主动引用才会触发初始化：new 创建实例、访问/修改静态字段（非 final 常量）、调用静态方法、反射调用（Class.forName）、初始化子类会先初始化父类、main 方法所在类、MethodHandle/VarHandle 解析。",
            "【被动引用】被动引用不会触发初始化：通过子类引用父类的静态字段（只初始化父类）、数组定义引用类（MyClass[] arr = new MyClass[10]）、引用编译期 final 常量（常量传播优化已内联）。"
        ],
        keyDifficulties: [
            "【执行顺序】静态变量赋值和静态代码块按源码顺序执行。如果静态代码块在变量声明之前使用该变量，编译器会报错（非法前向引用）。但可以在静态代码块中给后面声明的变量赋值。",
            "【接口初始化】接口的初始化与类不同：初始化一个接口不会触发其父接口的初始化，除非真正使用父接口定义的非常量字段。接口不能有静态代码块，但可以有静态变量初始化。",
            "【初始化异常】如果 <clinit> 抛出异常：若是 Error 类型则直接传播；若是其他异常则包装为 ExceptionInInitializerError。一旦初始化失败，该类将永远标记为 erroneous，后续访问抛出 NoClassDefFoundError。",
            "【死锁风险】如果类 A 的 <clinit> 中触发类 B 的初始化，而类 B 的 <clinit> 又触发类 A 的初始化，就可能产生死锁。需要注意静态初始化块中的依赖关系。"
        ],
        handsOnPath: [
            "编写验证初始化时机的代码：在静态代码块中打印信息，观察何时触发初始化。",
            "验证被动引用：通过子类访问父类静态字段，观察哪个类被初始化。",
            "验证 final 常量的被动引用：引用 static final int 常量不会触发类初始化。",
            "使用 Class.forName(name, false, loader) 加载但不初始化类，与默认行为对比。",
            "故意制造 ExceptionInInitializerError，观察后续访问该类时抛出的异常。"
        ],
        selfCheck: [
            "<clinit> 方法是如何生成的？它的执行顺序是怎样的？",
            "JVM 如何保证 <clinit> 的线程安全？这有什么实际应用？",
            "哪些操作属于主动引用，会触发类初始化？",
            "哪些操作属于被动引用，不会触发类初始化？",
            "接口的初始化规则与类有什么不同？",
            "如果 <clinit> 抛出异常会发生什么？"
        ],
        extensions: [
            "研究 enum 类型的初始化：枚举值本质上是 static final 实例，在类初始化时创建。",
            "了解 Lazy Initialization Holder Class 惯用法（static inner class 实现懒加载单例）。",
            "探索 JEP 8209964 提出的类数据共享（Class Data Sharing）如何优化启动时初始化。",
            "研究 GraalVM Native Image 如何在编译时执行类初始化（Build-time Initialization）。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html#jvms-5.5",
            "https://www.artima.com/insidejvm/ed2/lifetype.html",
            "https://www.geeksforgeeks.org/java/classloader-in-java/"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w3-1": [
        {
            id: "jvm-w3-1-q1",
            question: "类加载的第一个阶段是什么？",
            options: [
                "链接（Linking）",
                "初始化（Initialization）",
                "加载（Loading）",
                "验证（Verification）"
            ],
            answer: 2,
            rationale: "类生命周期的第一个阶段是加载（Loading），JVM 通过类的全限定名获取二进制字节流，然后转换为方法区中的运行时数据结构。"
        },
        {
            id: "jvm-w3-1-q2",
            question: "Class 对象存储在 JVM 的哪个区域？",
            options: [
                "方法区",
                "堆",
                "栈",
                "程序计数器"
            ],
            answer: 1,
            rationale: "加载完成后，JVM 会在堆内存中创建一个 java.lang.Class 对象，作为程序访问方法区中该类数据的入口。"
        },
        {
            id: "jvm-w3-1-q3",
            question: "二进制字节流不能从以下哪个来源获取？",
            options: [
                "本地文件系统",
                "网络下载",
                "CPU 缓存",
                "动态生成"
            ],
            answer: 2,
            rationale: "二进制字节流可以从文件系统、JAR包、网络、动态生成（如动态代理）、数据库、加密文件等获取，但不能从 CPU 缓存直接获取。"
        },
        {
            id: "jvm-w3-1-q4",
            question: "数组类是如何创建的？",
            options: [
                "由类加载器从 class 文件加载",
                "由 JVM 直接在内存中动态构造",
                "由编译器在编译时生成",
                "由 Java 虚拟机规范预定义"
            ],
            answer: 1,
            rationale: "数组类不通过类加载器创建，而是由 JVM 直接在内存中动态构造。但数组的元素类型（如果是引用类型）仍需要类加载器加载。"
        },
        {
            id: "jvm-w3-1-q5",
            question: "发起加载器和定义加载器有什么关系？",
            options: [
                "两者总是相同的",
                "发起加载器总是定义加载器的父加载器",
                "由于委派机制，两者可能不同",
                "定义加载器总是 Bootstrap ClassLoader"
            ],
            answer: 2,
            rationale: "发起加载器是被请求加载类的加载器，定义加载器是实际创建 Class 对象的加载器。由于双亲委派机制，两者可能不同。"
        },
        {
            id: "jvm-w3-1-q6",
            question: "JVM 用什么来唯一标识一个类？",
            options: [
                "只用全限定名",
                "只用类加载器",
                "全限定名 + 定义加载器",
                "全限定名 + 包名"
            ],
            answer: 2,
            rationale: "JVM 用 <N, Ld> 唯一标识一个类，其中 N 是全限定名，Ld 是定义加载器。同名类被不同加载器加载会产生两个不同的类。"
        },
        {
            id: "jvm-w3-1-q7",
            question: "什么是运行时包？",
            options: [
                "编译时确定的包名",
                "同一个类加载器加载的、在同一个包中的类的集合",
                "JAR 包中的包结构",
                "JVM 预加载的核心包"
            ],
            answer: 1,
            rationale: "运行时包由同一个类加载器加载的、在同一个包中的类组成。运行时包决定了包访问权限（default/package-private）的边界。"
        },
        {
            id: "jvm-w3-1-q8",
            question: "Class.forName(name) 和 ClassLoader.loadClass(name) 的主要区别是什么？",
            options: [
                "返回值类型不同",
                "前者会初始化类，后者只加载不初始化",
                "后者更快",
                "前者只能加载系统类"
            ],
            answer: 1,
            rationale: "Class.forName(name) 会触发类的初始化，而 ClassLoader.loadClass(name) 只加载类但不会初始化。可以用 Class.forName(name, false, loader) 加载但不初始化。"
        },
        {
            id: "jvm-w3-1-q9",
            question: "使用什么 JVM 参数可以观察类加载过程？",
            options: [
                "-verbose:gc",
                "-verbose:class",
                "-verbose:jni",
                "-verbose:memory"
            ],
            answer: 1,
            rationale: "-verbose:class 参数可以让 JVM 输出类加载信息，包括加载的类名、加载器和加载时间，便于调试类加载问题。"
        },
        {
            id: "jvm-w3-1-q10",
            question: "new String[10].getClass().getClassLoader() 返回什么？",
            options: [
                "Application ClassLoader",
                "Platform ClassLoader",
                "null（Bootstrap ClassLoader）",
                "抛出异常"
            ],
            answer: 2,
            rationale: "String 类由 Bootstrap ClassLoader 加载，因此 String[] 数组的加载器也是 Bootstrap ClassLoader，返回 null。"
        },
        {
            id: "jvm-w3-1-q11",
            question: "加载约束（Loading Constraints）的作用是什么？",
            options: [
                "限制类的大小",
                "限制类加载器数量",
                "保证类型安全，确保不同加载器对同一类型的解析一致",
                "限制类的访问权限"
            ],
            answer: 2,
            rationale: "加载约束保证类型安全：如果类 C 引用类 D，那么 C 和 D 的定义加载器对类型的解析必须一致，否则抛出 LinkageError。"
        },
        {
            id: "jvm-w3-1-q12",
            question: "JVM 规范对类加载时机有什么规定？",
            options: [
                "必须在启动时加载所有类",
                "必须延迟到首次使用时加载",
                "没有强制规定，给实现很大灵活性",
                "必须按字母顺序加载"
            ],
            answer: 2,
            rationale: "JVM 规范没有强制规定何时加载类，实现可以选择预加载或延迟加载。但类的初始化时机是严格规定的。"
        }
    ],
    "jvm-w3-2": [
        {
            id: "jvm-w3-2-q1",
            question: "链接阶段包括哪三个步骤？",
            options: [
                "加载、验证、初始化",
                "验证、准备、解析",
                "编译、链接、执行",
                "加载、链接、卸载"
            ],
            answer: 1,
            rationale: "链接分为三个步骤：验证（确保字节码正确）、准备（分配内存设置零值）、解析（符号引用转直接引用）。"
        },
        {
            id: "jvm-w3-2-q2",
            question: "验证阶段的主要目的是什么？",
            options: [
                "优化字节码性能",
                "确保字节码符合 JVM 规范，保证安全性",
                "生成机器码",
                "分配内存"
            ],
            answer: 1,
            rationale: "验证确保类的二进制表示结构正确、符合 JVM 规范，防止恶意或错误的字节码危害 JVM。验证失败抛出 VerifyError。"
        },
        {
            id: "jvm-w3-2-q3",
            question: "准备阶段对 static int count = 10 做了什么？",
            options: [
                "将 count 赋值为 10",
                "将 count 赋值为 0",
                "不处理 count",
                "将 count 赋值为 -1"
            ],
            answer: 1,
            rationale: "准备阶段为类变量分配内存并设置初始零值。int 类型的零值是 0，而不是代码中的初始值 10。初始值 10 在初始化阶段才赋予。"
        },
        {
            id: "jvm-w3-2-q4",
            question: "static final int X = 10 在准备阶段会被赋什么值？",
            options: [
                "0",
                "10",
                "null",
                "-1"
            ],
            answer: 1,
            rationale: "如果静态变量同时被 final 修饰且值是编译期常量，则在准备阶段就直接赋予指定值（10），因为 ConstantValue 属性存储了编译期常量。"
        },
        {
            id: "jvm-w3-2-q5",
            question: "什么是符号引用？",
            options: [
                "内存地址",
                "方法表偏移量",
                "以字面量描述引用目标的引用",
                "CPU 寄存器地址"
            ],
            answer: 2,
            rationale: "符号引用是以一组符号（如类名字符串、方法名和描述符）来描述引用目标的引用，与实际内存地址无关。"
        },
        {
            id: "jvm-w3-2-q6",
            question: "解析阶段的作用是什么？",
            options: [
                "验证字节码正确性",
                "为类变量分配内存",
                "将符号引用转换为直接引用",
                "执行静态代码块"
            ],
            answer: 2,
            rationale: "解析将常量池中的符号引用（字面量描述）转换为直接引用（内存地址或偏移量），使 JVM 能够实际访问类/字段/方法。"
        },
        {
            id: "jvm-w3-2-q7",
            question: "验证阶段不包括以下哪项检查？",
            options: [
                "文件格式验证（魔数、版本号）",
                "元数据验证（类继承关系）",
                "性能验证（执行效率）",
                "字节码验证（数据流分析）"
            ],
            answer: 2,
            rationale: "验证包括文件格式验证、元数据验证、字节码验证和符号引用验证，但不包括性能验证。性能是 JIT 编译器关注的问题。"
        },
        {
            id: "jvm-w3-2-q8",
            question: "JVM 规范对解析时机有什么规定？",
            options: [
                "必须在链接时立即解析",
                "必须延迟到首次使用",
                "允许延迟解析，实现可以选择",
                "必须在初始化后解析"
            ],
            answer: 2,
            rationale: "JVM 规范允许延迟解析（Lazy Resolution）：符号引用可以等到首次使用时才解析。解析结果会被缓存，除了 invokedynamic。"
        },
        {
            id: "jvm-w3-2-q9",
            question: "验证失败时会抛出什么异常？",
            options: [
                "ClassNotFoundException",
                "VerifyError",
                "LinkageError",
                "IllegalAccessError"
            ],
            answer: 1,
            rationale: "如果验证发现字节码不符合 JVM 规范，会抛出 VerifyError。这是 LinkageError 的子类。"
        },
        {
            id: "jvm-w3-2-q10",
            question: "以下哪个不属于符号引用的类型？",
            options: [
                "类或接口引用",
                "字段引用",
                "方法引用",
                "CPU 寄存器引用"
            ],
            answer: 3,
            rationale: "符号引用包括类/接口解析、字段解析、方法解析、接口方法解析、方法类型和方法句柄解析，但不包括 CPU 寄存器引用。"
        },
        {
            id: "jvm-w3-2-q11",
            question: "方法覆写需要满足什么条件？",
            options: [
                "只需方法名相同",
                "同名同签名、mC 非 private、mA 是 public/protected 或同包 default",
                "只需返回类型相同",
                "任何方法都可以覆写"
            ],
            answer: 1,
            rationale: "方法 mC 覆写 mA 需满足：同名同签名、mC 非 private、mA 是 public/protected 或同包 default。这些规则在解析时验证。"
        },
        {
            id: "jvm-w3-2-q12",
            question: "static final int Y = getValue() 在准备阶段会被赋什么值？",
            options: [
                "getValue() 的返回值",
                "0",
                "null",
                "编译错误"
            ],
            answer: 1,
            rationale: "虽然是 final static，但值不是编译期常量（需要调用方法）。因此准备阶段赋零值 0，在初始化阶段才调用 getValue() 赋值。"
        }
    ],
    "jvm-w3-3": [
        {
            id: "jvm-w3-3-q1",
            question: "<clinit> 方法是由什么生成的？",
            options: [
                "程序员手动编写",
                "编译器自动收集静态变量赋值和静态代码块生成",
                "JVM 在运行时动态生成",
                "类加载器生成"
            ],
            answer: 1,
            rationale: "<clinit> 由编译器自动收集类中所有静态变量的赋值动作和静态代码块（static {}）中的语句合并生成。"
        },
        {
            id: "jvm-w3-3-q2",
            question: "JVM 如何保证 <clinit> 的线程安全？",
            options: [
                "不保证，需要程序员自己同步",
                "只有一个线程执行 <clinit>，其他线程阻塞等待",
                "所有线程同时执行 <clinit>",
                "使用乐观锁"
            ],
            answer: 1,
            rationale: "JVM 保证 <clinit> 方法的同步执行：如果多个线程同时初始化一个类，只有一个线程执行 <clinit>，其他线程阻塞等待。"
        },
        {
            id: "jvm-w3-3-q3",
            question: "以下哪个操作不会触发类初始化？",
            options: [
                "new 创建实例",
                "访问静态字段",
                "通过子类引用父类的静态字段",
                "调用 Class.forName()"
            ],
            answer: 2,
            rationale: "通过子类引用父类的静态字段是被动引用，只会初始化父类，不会初始化子类。这是常见的被动引用场景。"
        },
        {
            id: "jvm-w3-3-q4",
            question: "引用 static final int X = 10 常量会触发类初始化吗？",
            options: [
                "会",
                "不会，因为常量传播优化已将常量内联",
                "取决于 JVM 实现",
                "只有第一次引用会触发"
            ],
            answer: 1,
            rationale: "引用编译期 final 常量是被动引用，不会触发初始化。编译器会将常量直接内联到使用处，不需要访问原类。"
        },
        {
            id: "jvm-w3-3-q5",
            question: "父类和子类的 <clinit> 执行顺序是什么？",
            options: [
                "子类先执行",
                "父类先执行",
                "同时执行",
                "随机顺序"
            ],
            answer: 1,
            rationale: "JVM 保证父类的 <clinit> 先于子类执行，不需要显式调用。因此 Object 类的 <clinit>（如果有）最先执行。"
        },
        {
            id: "jvm-w3-3-q6",
            question: "如果 <clinit> 抛出非 Error 异常会发生什么？",
            options: [
                "异常被忽略",
                "直接传播原异常",
                "包装为 ExceptionInInitializerError",
                "转换为 RuntimeException"
            ],
            answer: 2,
            rationale: "如果 <clinit> 抛出异常：若是 Error 类型则直接传播；若是其他异常则包装为 ExceptionInInitializerError。"
        },
        {
            id: "jvm-w3-3-q7",
            question: "类初始化失败后，后续访问该类会发生什么？",
            options: [
                "重新尝试初始化",
                "返回 null",
                "抛出 NoClassDefFoundError",
                "忽略错误继续执行"
            ],
            answer: 2,
            rationale: "一旦初始化失败，该类将永远标记为 erroneous，后续访问该类会抛出 NoClassDefFoundError。"
        },
        {
            id: "jvm-w3-3-q8",
            question: "接口初始化与类初始化有什么不同？",
            options: [
                "接口不能有 <clinit>",
                "初始化接口会自动初始化其父接口",
                "初始化接口不会触发父接口初始化，除非使用父接口的非常量字段",
                "接口和类的初始化规则完全相同"
            ],
            answer: 2,
            rationale: "接口的初始化与类不同：初始化一个接口不会触发其父接口的初始化，除非真正使用父接口定义的非常量字段。"
        },
        {
            id: "jvm-w3-3-q9",
            question: "以下哪个是主动引用，会触发类初始化？",
            options: [
                "定义类的数组",
                "引用编译期 final 常量",
                "通过子类访问父类静态字段",
                "使用反射调用 Class.forName()"
            ],
            answer: 3,
            rationale: "反射调用 Class.forName() 是主动引用，会触发类初始化。其他三个选项都是被动引用。"
        },
        {
            id: "jvm-w3-3-q10",
            question: "如何加载类但不触发初始化？",
            options: [
                "使用 Class.forName(name)",
                "使用 Class.forName(name, false, loader)",
                "使用 new 关键字",
                "无法实现"
            ],
            answer: 1,
            rationale: "Class.forName(name, false, loader) 可以加载类但不初始化（第二个参数 false 表示不初始化）。默认的 Class.forName(name) 会初始化。"
        },
        {
            id: "jvm-w3-3-q11",
            question: "<clinit> 的线程安全特性有什么实际应用？",
            options: [
                "实现高性能缓存",
                "实现线程安全的单例模式",
                "实现并发集合",
                "实现锁机制"
            ],
            answer: 1,
            rationale: "JVM 保证 <clinit> 的线程安全是单例模式利用类初始化实现线程安全的基础（如 Lazy Initialization Holder Class 模式）。"
        },
        {
            id: "jvm-w3-3-q12",
            question: "什么情况下类可能没有 <clinit> 方法？",
            options: [
                "类是抽象类",
                "类没有静态变量和静态代码块",
                "类是接口",
                "类只有 final 方法"
            ],
            answer: 1,
            rationale: "如果类没有静态变量的赋值动作和静态代码块，编译器可能不生成 <clinit> 方法，因为没有需要执行的初始化代码。"
        }
    ]
}
