import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const jvmStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：JVM 架构基础（第 1-2 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "jvm-architecture",
    title: "阶段一：JVM 架构基础",
    duration: "第 1-2 周",
    goal: "理解 JVM 规范、架构组成与不同实现的特点。",
    weeks: [
      {
        id: "jvm-w1",
        title: "第 1 周：JVM 规范与架构",
        summary: "理解 JVM 规范定义与整体架构组成。",
        keyPoints: [
          "JVM 规范定义了抽象机器，具体实现可以不同。",
          "JVM 由类加载子系统、运行时数据区、执行引擎组成。",
          "JVM 是基于栈的虚拟机，而非基于寄存器。",
        ],
        lessons: [
          {
            id: "jvm-w1-1",
            title: "JVM 规范概述",
            detail: "理解 JVM 规范的作用与核心定义。",
            keyPoints: [
              "JVM 规范定义了 class 文件格式、指令集、运行时数据区。",
              "规范不规定具体实现，如 GC 算法、JIT 策略。",
              "任何符合规范的实现都可以运行 Java 字节码。",
              "规范版本与 Java 版本对应，如 Java 21 对应 JVM SE 21。",
            ],
            resources: [
              { title: "JVM Specification SE 21", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/index.html" },
              { title: "JVM Architecture Overview", url: "https://www.oracle.com/technical-resources/articles/javase/index-jsp-138781.html" },
              { title: "Inside the JVM", url: "https://www.artima.com/insidejvm/ed2/" },
            ],
          },
          {
            id: "jvm-w1-2",
            title: "JVM 架构组成",
            detail: "了解 JVM 的三大核心子系统。",
            keyPoints: [
              "类加载子系统：加载、链接、初始化 class 文件。",
              "运行时数据区：堆、栈、方法区、程序计数器、本地方法栈。",
              "执行引擎：解释器、JIT 编译器、垃圾收集器。",
              "本地接口：JNI 连接 Java 与本地代码。",
            ],
            resources: [
              { title: "JVM Spec: Class File Format", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-4.html" },
              { title: "JVM Internals", url: "https://blog.jamesdbloom.com/JVMInternals.html" },
              { title: "JVM vs JRE vs JDK", url: "https://www.geeksforgeeks.org/java/differences-jdk-jre-jvm/" },
            ],
          },
          {
            id: "jvm-w1-3",
            title: "基于栈的执行模型",
            detail: "理解 JVM 为何采用基于栈的执行模型。",
            keyPoints: [
              "操作数栈：存储操作数和中间结果。",
              "基于栈 vs 基于寄存器：可移植性 vs 性能。",
              "字节码指令通常操作栈顶元素。",
              "局部变量表与操作数栈配合完成计算。",
            ],
            resources: [
              { title: "Stack-based vs Register-based VM", url: "https://markfaction.wordpress.com/2012/07/15/stack-based-vs-register-based-virtual-machine-architecture-and-the-dalvik-vm/" },
              { title: "JVM Operand Stack", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.6.2" },
              { title: "JVM Stack Architecture", url: "https://www.artima.com/insidejvm/ed2/jvm8.html" },
            ],
          },
        ],
      },
      {
        id: "jvm-w2",
        title: "第 2 周：JVM 实现对比",
        summary: "了解主流 JVM 实现的特点与选型。",
        keyPoints: [
          "HotSpot 是最广泛使用的 JVM 实现。",
          "OpenJ9 注重低内存占用和快速启动。",
          "GraalVM 支持多语言和 Native Image。",
        ],
        lessons: [
          {
            id: "jvm-w2-1",
            title: "HotSpot JVM",
            detail: "深入了解 Oracle HotSpot JVM 的特点。",
            keyPoints: [
              "HotSpot：Oracle/OpenJDK 默认 JVM，最成熟稳定。",
              "热点探测：识别热点代码进行 JIT 编译。",
              "分层编译：C1（快速编译）+ C2（深度优化）。",
              "多种 GC 选择：G1、ZGC、Shenandoah、Parallel、Serial。",
            ],
            resources: [
              { title: "HotSpot Virtual Machine", url: "https://docs.oracle.com/en/java/javase/21/vm/java-virtual-machine-technology-overview.html" },
              { title: "HotSpot Internals", url: "https://wiki.openjdk.org/display/HotSpot/Main" },
              { title: "HotSpot Glossary", url: "https://openjdk.org/groups/hotspot/docs/HotSpotGlossary.html" },
            ],
          },
          {
            id: "jvm-w2-2",
            title: "OpenJ9 与 GraalVM",
            detail: "了解 OpenJ9 和 GraalVM 的独特优势。",
            keyPoints: [
              "OpenJ9：IBM 开源，低内存占用，快速启动。",
              "OpenJ9 共享类缓存（SCC）加速启动。",
              "GraalVM：高性能 JIT 编译器，多语言支持。",
              "GraalVM Native Image：AOT 编译为本地可执行文件。",
            ],
            resources: [
              { title: "Eclipse OpenJ9", url: "https://eclipse.dev/openj9/" },
              { title: "OpenJ9 Performance", url: "https://eclipse.dev/openj9/performance/" },
              { title: "GraalVM", url: "https://www.graalvm.org/" },
            ],
          },
          {
            id: "jvm-w2-3",
            title: "JVM 发行版选择",
            detail: "了解不同 JDK 发行版的特点与选型建议。",
            keyPoints: [
              "Oracle JDK：商业支持，部分功能需许可。",
              "Eclipse Temurin：社区支持，完全开源。",
              "Amazon Corretto：AWS 支持，长期维护。",
              "Azul Zulu：企业支持，提供 CRaC 等特性。",
            ],
            resources: [
              { title: "Which JDK?", url: "https://whichjdk.com/" },
              { title: "Eclipse Temurin", url: "https://adoptium.net/" },
              { title: "JDK Distributions Comparison", url: "https://www.baeldung.com/java-jdk-distributions" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：类加载机制（第 3-4 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "jvm-classloading",
    title: "阶段二：类加载机制",
    duration: "第 3-4 周",
    goal: "深入理解类加载器、双亲委派模型与类的生命周期。",
    weeks: [
      {
        id: "jvm-w3",
        title: "第 3 周：类加载过程",
        summary: "理解类的加载、链接、初始化完整过程。",
        keyPoints: [
          "类加载分为加载、链接、初始化三个阶段。",
          "链接包括验证、准备、解析三个步骤。",
          "类初始化时机有严格的规定。",
        ],
        lessons: [
          {
            id: "jvm-w3-1",
            title: "加载阶段",
            detail: "理解类的加载过程与 Class 对象创建。",
            keyPoints: [
              "加载：通过全限定名获取类的二进制字节流。",
              "字节流来源：文件系统、JAR、网络、动态生成。",
              "将字节流转换为方法区的运行时数据结构。",
              "在堆中创建 java.lang.Class 对象作为访问入口。",
            ],
            resources: [
              { title: "JVM Spec: Loading", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html#jvms-5.3" },
              { title: "Class Loading Process", url: "https://www.baeldung.com/java-classloaders" },
              { title: "Understanding Class.forName", url: "https://www.baeldung.com/java-class-forname-class-loader" },
            ],
          },
          {
            id: "jvm-w3-2",
            title: "链接阶段",
            detail: "理解验证、准备、解析三个链接步骤。",
            keyPoints: [
              "验证：确保字节码符合 JVM 规范，保证安全性。",
              "准备：为类变量分配内存，设置初始零值。",
              "解析：将符号引用转换为直接引用。",
              "解析可能延迟到首次使用时（延迟解析）。",
            ],
            resources: [
              { title: "JVM Spec: Linking", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html#jvms-5.4" },
              { title: "Bytecode Verification", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-4.html#jvms-4.10" },
              { title: "Understanding Linking", url: "https://www.artima.com/insidejvm/ed2/linkmod.html" },
            ],
          },
          {
            id: "jvm-w3-3",
            title: "初始化阶段",
            detail: "理解类初始化的时机与 <clinit> 方法。",
            keyPoints: [
              "初始化：执行类构造器 <clinit> 方法。",
              "<clinit> 由编译器收集静态变量赋值和静态代码块生成。",
              "JVM 保证 <clinit> 的线程安全性。",
              "主动引用才会触发初始化（new、反射、子类初始化等）。",
            ],
            resources: [
              { title: "JVM Spec: Initialization", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html#jvms-5.5" },
              { title: "Class Initialization", url: "https://www.baeldung.com/java-static-class-initialization" },
              { title: "When Classes Initialize", url: "https://www.javaworld.com/article/2077260/java-tip-52--static-initializers.html" },
            ],
          },
        ],
      },
      {
        id: "jvm-w4",
        title: "第 4 周：类加载器",
        summary: "掌握类加载器层次结构与双亲委派模型。",
        keyPoints: [
          "双亲委派模型保证类的唯一性和安全性。",
          "自定义类加载器可实现热部署、隔离等特性。",
          "打破双亲委派：SPI、OSGi、热部署框架。",
        ],
        lessons: [
          {
            id: "jvm-w4-1",
            title: "类加载器层次",
            detail: "理解 JVM 类加载器的层次结构。",
            keyPoints: [
              "Bootstrap ClassLoader：加载 java.base 模块，C++ 实现。",
              "Platform ClassLoader：加载平台类（原 Extension）。",
              "Application ClassLoader：加载应用类路径。",
              "Java 9+ 模块系统改变了类加载器结构。",
            ],
            resources: [
              { title: "ClassLoader Hierarchy", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html" },
              { title: "Understanding ClassLoaders", url: "https://www.baeldung.com/java-classloaders" },
              { title: "Module System and ClassLoaders", url: "https://www.oracle.com/corporate/features/understanding-java-9-modules.html" },
            ],
          },
          {
            id: "jvm-w4-2",
            title: "双亲委派模型",
            detail: "理解双亲委派的工作原理与意义。",
            keyPoints: [
              "双亲委派：先委托父加载器，父加载器无法加载时才自己加载。",
              "保证核心类库安全：防止用户类冒充核心类。",
              "保证类的唯一性：同一个类只由一个加载器加载。",
              "loadClass 方法实现双亲委派逻辑。",
            ],
            resources: [
              { title: "Parent Delegation Model", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-5.html#jvms-5.3.2" },
              { title: "How Parent Delegation Works", url: "https://www.baeldung.com/java-classloaders#parent-delegation-model" },
              { title: "ClassLoader loadClass", url: "https://www.artima.com/insidejvm/ed2/security7.html" },
            ],
          },
          {
            id: "jvm-w4-3",
            title: "自定义类加载器",
            detail: "实现自定义类加载器与打破双亲委派。",
            keyPoints: [
              "继承 ClassLoader，重写 findClass 方法。",
              "打破双亲委派：重写 loadClass 方法。",
              "应用场景：热部署、类隔离、加密类加载。",
              "线程上下文类加载器：SPI 机制使用。",
            ],
            resources: [
              { title: "Custom ClassLoader", url: "https://www.baeldung.com/java-custom-class-loader" },
              { title: "Breaking Parent Delegation", url: "https://dzone.com/articles/java-class-loading" },
              { title: "Context ClassLoader", url: "https://www.baeldung.com/java-context-classloader" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：字节码与执行引擎（第 5-6 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "jvm-bytecode",
    title: "阶段三：字节码与执行引擎",
    duration: "第 5-6 周",
    goal: "理解 class 文件结构、字节码指令与执行引擎工作原理。",
    weeks: [
      {
        id: "jvm-w5",
        title: "第 5 周：Class 文件与字节码",
        summary: "深入理解 class 文件结构与字节码指令。",
        keyPoints: [
          "class 文件是 JVM 的通用输入格式。",
          "字节码指令是 JVM 的汇编语言。",
          "javap 是分析字节码的基本工具。",
        ],
        lessons: [
          {
            id: "jvm-w5-1",
            title: "Class 文件结构",
            detail: "理解 class 文件的二进制格式。",
            keyPoints: [
              "魔数：0xCAFEBABE，标识 class 文件。",
              "版本号：主版本号决定最低 JVM 版本要求。",
              "常量池：字面量和符号引用的集合。",
              "访问标志、类索引、字段表、方法表、属性表。",
            ],
            resources: [
              { title: "JVM Spec: Class File Format", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-4.html" },
              { title: "Understanding Class Files", url: "https://www.baeldung.com/java-class-file-format" },
              { title: "Class File Anatomy", url: "https://blog.jamesdbloom.com/JavaCodeToByteCode_PartOne.html" },
            ],
          },
          {
            id: "jvm-w5-2",
            title: "字节码指令集",
            detail: "掌握 JVM 字节码指令分类与常用指令。",
            keyPoints: [
              "加载/存储指令：iload、istore、aload、astore。",
              "运算指令：iadd、isub、imul、idiv。",
              "类型转换：i2l、l2d、checkcast。",
              "对象操作：new、getfield、putfield、invokevirtual。",
            ],
            resources: [
              { title: "JVM Instruction Set", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-6.html" },
              { title: "Bytecode Instructions", url: "https://www.baeldung.com/java-bytecode" },
              { title: "Bytecode Reference", url: "https://en.wikipedia.org/wiki/List_of_Java_bytecode_instructions" },
            ],
          },
          {
            id: "jvm-w5-3",
            title: "字节码分析工具",
            detail: "使用工具分析和理解字节码。",
            keyPoints: [
              "javap -c：反汇编 class 文件。",
              "javap -v：显示详细信息包括常量池。",
              "ASM：字节码操作框架。",
              "ByteBuddy：高级字节码生成库。",
            ],
            resources: [
              { title: "javap Tool", url: "https://docs.oracle.com/en/java/javase/21/docs/specs/man/javap.html" },
              { title: "ASM Guide", url: "https://asm.ow2.io/asm4-guide.pdf" },
              { title: "Byte Buddy", url: "https://bytebuddy.net/" },
            ],
          },
        ],
      },
      {
        id: "jvm-w6",
        title: "第 6 周：执行引擎",
        summary: "理解解释执行与即时编译的工作原理。",
        keyPoints: [
          "解释器逐条执行字节码，启动快但运行慢。",
          "JIT 编译器将热点代码编译为本地代码。",
          "分层编译结合两者的优势。",
        ],
        lessons: [
          {
            id: "jvm-w6-1",
            title: "解释执行",
            detail: "理解字节码解释器的工作方式。",
            keyPoints: [
              "解释器：逐条读取并执行字节码指令。",
              "模板解释器：使用预编译的本地代码模板。",
              "解释执行的优势：启动快、内存占用小。",
              "解释执行的劣势：运行速度慢。",
            ],
            resources: [
              { title: "Interpreter", url: "https://wiki.openjdk.org/display/HotSpot/Interpreter" },
              { title: "Template Interpreter", url: "https://shipilev.net/jvm/anatomy-quarks/11-moving-gc-locality/" },
              { title: "How Interpretation Works", url: "https://www.artima.com/insidejvm/ed2/jvm2.html" },
            ],
          },
          {
            id: "jvm-w6-2",
            title: "热点探测",
            detail: "理解 JVM 如何识别热点代码。",
            keyPoints: [
              "方法调用计数器：统计方法调用次数。",
              "回边计数器：统计循环回边次数。",
              "热点阈值：-XX:CompileThreshold 设置。",
              "OSR（On-Stack Replacement）：循环中触发编译。",
            ],
            resources: [
              { title: "HotSpot Detection", url: "https://www.oracle.com/technical-resources/articles/java/architect-evans-pt1.html" },
              { title: "Method Counters", url: "https://wiki.openjdk.org/display/HotSpot/MethodCounters" },
              { title: "On-Stack Replacement", url: "https://www.baeldung.com/jvm-method-inlining#on-stack-replacement" },
            ],
          },
          {
            id: "jvm-w6-3",
            title: "方法调用",
            detail: "理解 JVM 方法调用的不同方式。",
            keyPoints: [
              "invokestatic：调用静态方法。",
              "invokespecial：调用构造器、私有方法、super 方法。",
              "invokevirtual：调用实例方法（虚方法）。",
              "invokeinterface：调用接口方法。",
              "invokedynamic：动态调用，Lambda 和动态语言支持。",
            ],
            resources: [
              { title: "Method Invocation", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-6.html#jvms-6.5.invokevirtual" },
              { title: "invokedynamic Explained", url: "https://www.baeldung.com/java-invoke-dynamic" },
              { title: "Virtual Method Dispatch", url: "https://wiki.openjdk.org/display/HotSpot/VirtualCalls" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：运行时数据区（第 7-8 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "jvm-memory",
    title: "阶段四：运行时数据区",
    duration: "第 7-8 周",
    goal: "深入理解 JVM 内存区域划分与对象内存布局。",
    weeks: [
      {
        id: "jvm-w7",
        title: "第 7 周：内存区域",
        summary: "理解 JVM 各内存区域的作用与特点。",
        keyPoints: [
          "堆是对象存储的主要区域，由 GC 管理。",
          "栈是线程私有的，存储栈帧。",
          "方法区存储类元数据，Java 8 后改为 Metaspace。",
        ],
        lessons: [
          {
            id: "jvm-w7-1",
            title: "堆内存",
            detail: "理解堆的结构与对象分配策略。",
            keyPoints: [
              "堆是所有线程共享的内存区域。",
              "新生代：Eden + Survivor，存放新对象。",
              "老年代：长期存活对象晋升到此。",
              "-Xms/-Xmx：设置堆的初始和最大大小。",
            ],
            resources: [
              { title: "JVM Spec: Heap", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.5.3" },
              { title: "Heap Memory", url: "https://www.baeldung.com/java-stack-heap" },
              { title: "Generational Heap", url: "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-collector-implementation.html" },
            ],
          },
          {
            id: "jvm-w7-2",
            title: "虚拟机栈",
            detail: "理解栈帧的结构与方法执行。",
            keyPoints: [
              "每个线程有独立的虚拟机栈。",
              "栈帧：局部变量表、操作数栈、动态链接、返回地址。",
              "局部变量表：存储方法参数和局部变量。",
              "-Xss：设置线程栈大小。",
            ],
            resources: [
              { title: "JVM Spec: Stack", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.5.2" },
              { title: "Stack Frames", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.6" },
              { title: "Understanding Stack", url: "https://www.baeldung.com/java-stack-heap#stack-memory-in-java" },
            ],
          },
          {
            id: "jvm-w7-3",
            title: "方法区与 Metaspace",
            detail: "理解类元数据的存储区域。",
            keyPoints: [
              "方法区存储类结构、常量池、静态变量。",
              "Java 8 前：永久代（PermGen），堆的一部分。",
              "Java 8 后：Metaspace，使用本地内存。",
              "-XX:MetaspaceSize/-XX:MaxMetaspaceSize：控制 Metaspace。",
            ],
            resources: [
              { title: "Metaspace", url: "https://www.baeldung.com/java-permgen-metaspace" },
              { title: "Method Area", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.5.4" },
              { title: "Class Metadata", url: "https://stuefe.de/posts/metaspace/what-is-metaspace/" },
            ],
          },
        ],
      },
      {
        id: "jvm-w8",
        title: "第 8 周：对象内存布局",
        summary: "理解对象在堆中的存储结构。",
        keyPoints: [
          "对象由对象头、实例数据、对齐填充组成。",
          "对象头包含 Mark Word 和类型指针。",
          "指针压缩可减少内存占用。",
        ],
        lessons: [
          {
            id: "jvm-w8-1",
            title: "对象头结构",
            detail: "理解对象头的组成与作用。",
            keyPoints: [
              "Mark Word：存储哈希码、GC 年龄、锁状态。",
              "类型指针：指向类元数据，确定对象类型。",
              "数组长度：数组对象额外存储长度。",
              "64 位 JVM 对象头占 12-16 字节。",
            ],
            resources: [
              { title: "Object Header", url: "https://www.baeldung.com/java-memory-layout" },
              { title: "Mark Word", url: "https://wiki.openjdk.org/display/HotSpot/Synchronization" },
              { title: "JOL Examples", url: "https://shipilev.net/jvm/objects-inside-out/" },
            ],
          },
          {
            id: "jvm-w8-2",
            title: "指针压缩",
            detail: "理解压缩指针的原理与配置。",
            keyPoints: [
              "CompressedOops：压缩普通对象指针。",
              "32 位指针 + 位移实现 32GB 堆寻址。",
              "堆大小超过 32GB 时压缩失效。",
              "-XX:+UseCompressedOops（默认启用）。",
            ],
            resources: [
              { title: "Compressed OOPs", url: "https://wiki.openjdk.org/display/HotSpot/CompressedOops" },
              { title: "Pointer Compression", url: "https://www.baeldung.com/java-compressed-oops" },
              { title: "Memory Efficiency", url: "https://shipilev.net/jvm/anatomy-quarks/23-compressed-references/" },
            ],
          },
          {
            id: "jvm-w8-3",
            title: "对象分配与 TLAB",
            detail: "理解对象分配策略与 TLAB 优化。",
            keyPoints: [
              "TLAB（Thread Local Allocation Buffer）：线程私有的分配区域。",
              "TLAB 避免多线程分配时的锁竞争。",
              "大对象可能直接分配到老年代。",
              "逃逸分析可能导致栈上分配或标量替换。",
            ],
            resources: [
              { title: "TLAB", url: "https://alidg.me/blog/2019/6/21/tlab-jvm" },
              { title: "Object Allocation", url: "https://shipilev.net/jvm/anatomy-quarks/4-tlab-allocation/" },
              { title: "Escape Analysis", url: "https://www.baeldung.com/java-escape-analysis" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段五：Java 内存模型（第 9-10 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "jvm-jmm",
    title: "阶段五：Java 内存模型",
    duration: "第 9-10 周",
    goal: "深入理解 JMM 规范、可见性与有序性保证。",
    weeks: [
      {
        id: "jvm-w9",
        title: "第 9 周：JMM 基础",
        summary: "理解 Java 内存模型的核心概念。",
        keyPoints: [
          "JMM 定义了多线程环境下的内存可见性规则。",
          "主内存与工作内存是 JMM 的抽象概念。",
          "happens-before 是理解 JMM 的关键。",
        ],
        lessons: [
          {
            id: "jvm-w9-1",
            title: "JMM 概述",
            detail: "理解 Java 内存模型的设计目标与抽象。",
            keyPoints: [
              "JMM 解决多线程环境下的可见性、有序性问题。",
              "主内存：所有线程共享的内存区域。",
              "工作内存：每个线程私有的内存副本。",
              "JMM 是规范，不是物理内存结构。",
            ],
            resources: [
              { title: "JSR 133: Java Memory Model", url: "https://www.cs.umd.edu/~pugh/java/memoryModel/jsr133.pdf" },
              { title: "JMM Specification", url: "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.4" },
              { title: "Understanding JMM", url: "https://shipilev.net/blog/2014/jmm-pragmatics/" },
            ],
          },
          {
            id: "jvm-w9-2",
            title: "happens-before 规则",
            detail: "掌握 happens-before 的核心规则。",
            keyPoints: [
              "程序顺序规则：同一线程中前面的操作 happens-before 后面的操作。",
              "监视器锁规则：unlock happens-before 后续的 lock。",
              "volatile 规则：写 happens-before 后续的读。",
              "传递性：A happens-before B，B happens-before C，则 A happens-before C。",
            ],
            resources: [
              { title: "Happens-Before", url: "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.4.5" },
              { title: "Happens-Before Explained", url: "https://www.baeldung.com/java-volatile#happens-before" },
              { title: "JMM Cookbook", url: "https://gee.cs.oswego.edu/dl/jmm/cookbook.html" },
            ],
          },
          {
            id: "jvm-w9-3",
            title: "重排序",
            detail: "理解编译器和处理器的重排序行为。",
            keyPoints: [
              "编译器重排序：编译器优化改变执行顺序。",
              "处理器重排序：CPU 乱序执行和写缓冲。",
              "内存屏障：禁止特定类型的重排序。",
              "数据依赖关系限制重排序。",
            ],
            resources: [
              { title: "Reordering", url: "https://shipilev.net/blog/2014/jmm-pragmatics/#_reordering" },
              { title: "Memory Barriers", url: "https://mechanical-sympathy.blogspot.com/2011/07/memory-barriersfences.html" },
              { title: "CPU Memory Model", url: "https://www.cs.cmu.edu/~410-f10/lectures/L27_MemoryConsistency.pdf" },
            ],
          },
        ],
      },
      {
        id: "jvm-w10",
        title: "第 10 周：同步原语",
        summary: "掌握 volatile、synchronized 与锁优化。",
        keyPoints: [
          "volatile 保证可见性和有序性，不保证原子性。",
          "synchronized 保证原子性、可见性、有序性。",
          "JVM 对锁进行了大量优化。",
        ],
        lessons: [
          {
            id: "jvm-w10-1",
            title: "volatile 语义",
            detail: "深入理解 volatile 的内存语义。",
            keyPoints: [
              "可见性：写入立即刷新到主内存，读取从主内存获取。",
              "有序性：禁止 volatile 变量相关的重排序。",
              "不保证复合操作的原子性（如 i++）。",
              "适用场景：状态标志、双重检查锁定。",
            ],
            resources: [
              { title: "volatile Semantics", url: "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.4.4" },
              { title: "Understanding volatile", url: "https://www.baeldung.com/java-volatile" },
              { title: "volatile Deep Dive", url: "https://shipilev.net/blog/2014/jmm-pragmatics/#_volatile" },
            ],
          },
          {
            id: "jvm-w10-2",
            title: "synchronized 原理",
            detail: "理解 synchronized 的实现机制。",
            keyPoints: [
              "对象监视器（Monitor）：每个对象关联一个监视器。",
              "monitorenter/monitorexit 字节码指令。",
              "可重入性：同一线程可多次获取同一锁。",
              "synchronized 方法：ACC_SYNCHRONIZED 标志。",
            ],
            resources: [
              { title: "Synchronization", url: "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.1" },
              { title: "Monitor Mechanism", url: "https://wiki.openjdk.org/display/HotSpot/Synchronization" },
              { title: "synchronized Internals", url: "https://www.baeldung.com/java-synchronized#how-synchronization-works" },
            ],
          },
          {
            id: "jvm-w10-3",
            title: "锁优化",
            detail: "理解 JVM 的锁优化技术。",
            keyPoints: [
              "偏向锁：单线程访问时消除同步。",
              "轻量级锁：CAS 操作替代互斥量。",
              "自旋锁：短暂等待避免线程切换。",
              "锁消除：逃逸分析确定无竞争时消除锁。",
            ],
            resources: [
              { title: "Lock Optimization", url: "https://wiki.openjdk.org/display/HotSpot/Synchronization" },
              { title: "Biased Locking", url: "https://www.baeldung.com/java-biased-locking" },
              { title: "Lock Coarsening", url: "https://shipilev.net/jvm/anatomy-quarks/25-implicit-null-checks/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段六：垃圾收集原理（第 11-12 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "jvm-gc-theory",
    title: "阶段六：垃圾收集原理",
    duration: "第 11-12 周",
    goal: "深入理解垃圾收集算法与分代收集策略。",
    weeks: [
      {
        id: "jvm-w11",
        title: "第 11 周：GC 算法基础",
        summary: "理解垃圾收集的基本算法与原理。",
        keyPoints: [
          "可达性分析是判断对象存活的核心算法。",
          "标记-清除、复制、标记-整理是三种基本算法。",
          "分代假说是现代 GC 设计的基础。",
        ],
        lessons: [
          {
            id: "jvm-w11-1",
            title: "可达性分析",
            detail: "理解 JVM 如何判断对象是否存活。",
            keyPoints: [
              "GC Roots：栈帧引用、静态变量、JNI 引用、锁持有对象。",
              "从 GC Roots 出发遍历引用链。",
              "不可达对象可能被回收。",
              "finalize 方法可能让对象复活（不推荐使用）。",
            ],
            resources: [
              { title: "Reachability Analysis", url: "https://www.baeldung.com/java-gc-roots" },
              { title: "GC Roots Types", url: "https://help.eclipse.org/latest/index.jsp?topic=/org.eclipse.mat.ui.help/concepts/gcroots.html" },
              { title: "Tracing GC", url: "https://en.wikipedia.org/wiki/Tracing_garbage_collection" },
            ],
          },
          {
            id: "jvm-w11-2",
            title: "基本 GC 算法",
            detail: "理解标记-清除、复制、标记-整理算法。",
            keyPoints: [
              "标记-清除：标记存活对象，清除未标记对象。内存碎片问题。",
              "复制算法：将存活对象复制到另一区域。空间浪费问题。",
              "标记-整理：标记后将存活对象移动到一端。适合老年代。",
              "分代收集：不同代使用不同算法。",
            ],
            resources: [
              { title: "GC Algorithms", url: "https://www.baeldung.com/jvm-garbage-collectors#gc-implementations" },
              { title: "Mark-Sweep-Compact", url: "https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html" },
              { title: "Copying Collector", url: "https://en.wikipedia.org/wiki/Cheney%27s_algorithm" },
            ],
          },
          {
            id: "jvm-w11-3",
            title: "引用类型",
            detail: "理解 Java 中的四种引用类型。",
            keyPoints: [
              "强引用：普通引用，不会被回收。",
              "软引用：内存不足时回收，适合缓存。",
              "弱引用：下次 GC 时回收，WeakHashMap。",
              "虚引用：仅用于跟踪对象被回收的时机。",
            ],
            resources: [
              { title: "Reference Types", url: "https://www.baeldung.com/java-weak-reference" },
              { title: "Soft References", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/SoftReference.html" },
              { title: "Phantom References", url: "https://www.baeldung.com/java-phantom-reference" },
            ],
          },
        ],
      },
      {
        id: "jvm-w12",
        title: "第 12 周：分代收集与 SafePoint",
        summary: "理解分代收集策略与 SafePoint 机制。",
        keyPoints: [
          "分代假说决定了分代收集的设计。",
          "跨代引用通过记忆集和卡表追踪。",
          "SafePoint 是 GC 能够安全执行的点。",
        ],
        lessons: [
          {
            id: "jvm-w12-1",
            title: "分代收集策略",
            detail: "理解分代假说与分代收集的设计。",
            keyPoints: [
              "弱分代假说：大多数对象朝生夕死。",
              "强分代假说：熬过多次 GC 的对象更难死亡。",
              "Minor GC：回收新生代，频繁但快速。",
              "Major/Full GC：回收老年代或整个堆，耗时长。",
            ],
            resources: [
              { title: "Generational GC", url: "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-collector-implementation.html" },
              { title: "Generation Hypothesis", url: "https://www.memorymanagement.org/glossary/g.html#term-generational-hypothesis" },
              { title: "Minor vs Major GC", url: "https://www.baeldung.com/java-gc-minor-major-full" },
            ],
          },
          {
            id: "jvm-w12-2",
            title: "记忆集与卡表",
            detail: "理解跨代引用的追踪机制。",
            keyPoints: [
              "跨代引用问题：老年代对象引用新生代对象。",
              "记忆集（Remembered Set）：记录跨代引用。",
              "卡表（Card Table）：记忆集的一种实现。",
              "写屏障：在引用更新时维护卡表。",
            ],
            resources: [
              { title: "Card Table", url: "https://www.oracle.com/technetwork/java/javase/tech/g1-intro-jsp-135488.html" },
              { title: "Remembered Sets", url: "https://wiki.openjdk.org/display/HotSpot/G1GC+Remembered+Sets" },
              { title: "Write Barriers", url: "https://shipilev.net/jvm/anatomy-quarks/13-intergenerational-barriers/" },
            ],
          },
          {
            id: "jvm-w12-3",
            title: "SafePoint 机制",
            detail: "理解 SafePoint 与 Stop-The-World 暂停。",
            keyPoints: [
              "SafePoint：所有线程暂停的安全点。",
              "GC 需要在 SafePoint 进行，确保一致性。",
              "SafePoint 位置：方法调用、循环回边、异常跳转。",
              "TTSP（Time To SafePoint）：进入 SafePoint 的延迟。",
            ],
            resources: [
              { title: "Safepoints", url: "https://shipilev.net/jvm/anatomy-quarks/22-safepoint-polls/" },
              { title: "SafePoint Internals", url: "https://blog.ragozin.info/2012/10/safepoints-in-hotspot-jvm.html" },
              { title: "TTSP Issues", url: "https://www.baeldung.com/java-gc-time-to-safepoint" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段七：垃圾收集器（第 13-14 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "jvm-gc-collectors",
    title: "阶段七：垃圾收集器",
    duration: "第 13-14 周",
    goal: "掌握 G1GC、ZGC、Shenandoah 等主流垃圾收集器。",
    weeks: [
      {
        id: "jvm-w13",
        title: "第 13 周：G1GC",
        summary: "深入理解 G1GC 的设计与工作原理。",
        keyPoints: [
          "G1GC 是 Java 9+ 的默认垃圾收集器。",
          "Region 设计打破了传统的连续分代。",
          "G1GC 追求可预测的暂停时间。",
        ],
        lessons: [
          {
            id: "jvm-w13-1",
            title: "G1GC 架构",
            detail: "理解 G1GC 的 Region 设计与整体架构。",
            keyPoints: [
              "Region：堆划分为多个大小相等的 Region（1-32MB）。",
              "Region 类型：Eden、Survivor、Old、Humongous。",
              "Humongous Region：存储大对象（>Region 50%）。",
              "Collection Set（CSet）：每次 GC 回收的 Region 集合。",
            ],
            resources: [
              { title: "G1GC Overview", url: "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-first-g1-garbage-collector1.html" },
              { title: "G1GC Regions", url: "https://www.oracle.com/technical-resources/articles/java/g1gc.html" },
              { title: "G1GC Internals", url: "https://www.baeldung.com/jvm-garbage-collectors#g1-garbage-collector" },
            ],
          },
          {
            id: "jvm-w13-2",
            title: "G1GC 收集过程",
            detail: "理解 G1GC 的 Young GC 和 Mixed GC 过程。",
            keyPoints: [
              "Young GC：回收所有 Eden 和 Survivor Region。",
              "并发标记：识别老年代中的垃圾。",
              "Mixed GC：回收 Young Region + 部分价值高的 Old Region。",
              "Full GC：退化为串行收集，应尽量避免。",
            ],
            resources: [
              { title: "G1GC Phases", url: "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-first-g1-garbage-collector1.html#GUID-F1BE86FA-3EDC-4D4F-BDB4-4B044AD83180" },
              { title: "G1GC Collection Cycle", url: "https://www.oracle.com/technical-resources/articles/java/g1gc.html#collection-cycle" },
              { title: "Understanding Mixed GC", url: "https://tschatzl.github.io/2024/04/16/jdk22-g1-changes.html" },
            ],
          },
          {
            id: "jvm-w13-3",
            title: "G1GC 调优",
            detail: "掌握 G1GC 的关键调优参数。",
            keyPoints: [
              "-XX:MaxGCPauseMillis：目标暂停时间（默认 200ms）。",
              "-XX:G1HeapRegionSize：Region 大小。",
              "-XX:InitiatingHeapOccupancyPercent：触发并发标记的堆占用率。",
              "-XX:G1MixedGCCountTarget：Mixed GC 次数目标。",
            ],
            resources: [
              { title: "G1GC Tuning", url: "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-first-g1-garbage-collector1.html#GUID-082C967F-2DAC-4B59-8A81-0CEC6EEB9016" },
              { title: "G1GC Parameters", url: "https://www.baeldung.com/g1-garbage-collector-performance" },
              { title: "G1GC Best Practices", url: "https://www.oracle.com/technical-resources/articles/java/g1gc.html#recommendations" },
            ],
          },
        ],
      },
      {
        id: "jvm-w14",
        title: "第 14 周：ZGC 与 Shenandoah",
        summary: "掌握低延迟垃圾收集器 ZGC 和 Shenandoah。",
        keyPoints: [
          "ZGC 和 Shenandoah 追求亚毫秒级暂停。",
          "并发处理是低延迟 GC 的核心技术。",
          "Java 21 引入 Generational ZGC。",
        ],
        lessons: [
          {
            id: "jvm-w14-1",
            title: "ZGC 原理",
            detail: "理解 ZGC 的设计原理与核心技术。",
            keyPoints: [
              "目标：暂停时间 <1ms，与堆大小无关。",
              "Colored Pointers：指针中嵌入标记信息。",
              "Load Barrier：加载引用时的屏障处理。",
              "并发标记、并发转移、并发重定位。",
            ],
            resources: [
              { title: "ZGC Overview", url: "https://docs.oracle.com/en/java/javase/21/gctuning/z-garbage-collector.html" },
              { title: "ZGC Deep Dive", url: "https://malloc.se/blog/zgc-jdk16" },
              { title: "Colored Pointers", url: "https://www.baeldung.com/jvm-zgc-garbage-collector" },
            ],
          },
          {
            id: "jvm-w14-2",
            title: "Generational ZGC",
            detail: "理解 Java 21 分代 ZGC 的改进。",
            keyPoints: [
              "Java 21 引入分代 ZGC（JEP 439）。",
              "-XX:+UseZGC -XX:+ZGenerational 启用。",
              "分代设计提升吞吐量（最高 4 倍）。",
              "保持亚毫秒级暂停时间。",
            ],
            resources: [
              { title: "JEP 439: Generational ZGC", url: "https://openjdk.org/jeps/439" },
              { title: "Generational ZGC", url: "https://malloc.se/blog/zgc-jdk21" },
              { title: "ZGC Evolution", url: "https://inside.java/2023/09/26/zgc-generational/" },
            ],
          },
          {
            id: "jvm-w14-3",
            title: "Shenandoah GC",
            detail: "了解 Shenandoah 的设计与适用场景。",
            keyPoints: [
              "Shenandoah：Red Hat 开发的低延迟 GC。",
              "Brooks Pointer：转发指针处理对象移动。",
              "并发压缩：在应用运行时移动对象。",
              "与 ZGC 类似的低延迟目标，不同的实现方式。",
            ],
            resources: [
              { title: "Shenandoah GC", url: "https://wiki.openjdk.org/display/shenandoah/Main" },
              { title: "Shenandoah Guide", url: "https://developers.redhat.com/articles/2024/05/28/beginners-guide-shenandoah-garbage-collector" },
              { title: "ZGC vs Shenandoah", url: "https://www.baeldung.com/jvm-garbage-collectors#shenandoah" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段八：JIT 编译（第 15-16 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "jvm-jit",
    title: "阶段八：JIT 编译",
    duration: "第 15-16 周",
    goal: "深入理解 JIT 编译器的工作原理与优化技术。",
    weeks: [
      {
        id: "jvm-w15",
        title: "第 15 周：分层编译",
        summary: "理解 HotSpot 的分层编译架构。",
        keyPoints: [
          "分层编译结合解释器与 C1/C2 编译器的优势。",
          "编译级别从 0 到 4，逐步提升优化程度。",
          "Graal 编译器是 C2 的现代替代。",
        ],
        lessons: [
          {
            id: "jvm-w15-1",
            title: "C1 与 C2 编译器",
            detail: "理解 HotSpot 的两个 JIT 编译器。",
            keyPoints: [
              "C1（Client Compiler）：快速编译，基本优化。",
              "C2（Server Compiler）：深度优化，编译时间长。",
              "C1 适合启动阶段，C2 适合热点代码。",
              "-XX:+TieredCompilation 启用分层编译（默认）。",
            ],
            resources: [
              { title: "C1 and C2", url: "https://www.infoq.com/articles/OpenJDK-HotSpot-What-the-JIT/" },
              { title: "Tiered Compilation", url: "https://docs.oracle.com/en/java/javase/21/vm/java-virtual-machine-technology-overview.html" },
              { title: "Compiler Overview", url: "https://wiki.openjdk.org/display/HotSpot/Compiler" },
            ],
          },
          {
            id: "jvm-w15-2",
            title: "编译级别",
            detail: "理解分层编译的五个级别。",
            keyPoints: [
              "Level 0：解释执行。",
              "Level 1：C1 编译，无 profiling。",
              "Level 2：C1 编译，有限 profiling。",
              "Level 3：C1 编译，完整 profiling。",
              "Level 4：C2 编译，深度优化。",
            ],
            resources: [
              { title: "Compilation Levels", url: "https://www.baeldung.com/java-tiered-compilation" },
              { title: "Tiered Compilation Details", url: "https://shipilev.net/jvm/anatomy-quarks/1-lock-coarsening-for-loops/" },
              { title: "JIT Compilation Process", url: "https://www.oracle.com/technical-resources/articles/java/architect-evans-pt1.html" },
            ],
          },
          {
            id: "jvm-w15-3",
            title: "Graal 编译器",
            detail: "了解 Graal 编译器的特点与优势。",
            keyPoints: [
              "Graal：用 Java 编写的 JIT 编译器。",
              "可作为 C2 的替代：-XX:+UseJVMCICompiler。",
              "支持更激进的优化，如部分逃逸分析。",
              "GraalVM 的核心组件。",
            ],
            resources: [
              { title: "Graal Compiler", url: "https://www.graalvm.org/latest/reference-manual/java/compiler/" },
              { title: "Graal JIT", url: "https://www.baeldung.com/graal-java-jit-compiler" },
              { title: "JVMCI", url: "https://openjdk.org/jeps/243" },
            ],
          },
        ],
      },
      {
        id: "jvm-w16",
        title: "第 16 周：JIT 优化技术",
        summary: "掌握 JIT 编译器应用的主要优化技术。",
        keyPoints: [
          "内联是最重要的 JIT 优化技术。",
          "逃逸分析支持栈上分配和锁消除。",
          "编译日志帮助分析 JIT 行为。",
        ],
        lessons: [
          {
            id: "jvm-w16-1",
            title: "方法内联",
            detail: "理解方法内联的原理与限制。",
            keyPoints: [
              "内联：将方法调用替换为方法体。",
              "消除调用开销，支持进一步优化。",
              "内联限制：方法大小、调用深度、虚方法。",
              "-XX:MaxInlineSize、-XX:FreqInlineSize 控制内联。",
            ],
            resources: [
              { title: "Method Inlining", url: "https://www.baeldung.com/jvm-method-inlining" },
              { title: "Inlining Decisions", url: "https://wiki.openjdk.org/display/HotSpot/Inlining" },
              { title: "Inline Limits", url: "https://shipilev.net/jvm/anatomy-quarks/16-megamorphic-virtual-calls/" },
            ],
          },
          {
            id: "jvm-w16-2",
            title: "逃逸分析与优化",
            detail: "理解逃逸分析及相关优化。",
            keyPoints: [
              "逃逸分析：判断对象是否逃逸出方法或线程。",
              "栈上分配：不逃逸对象在栈上分配，减少 GC。",
              "标量替换：将对象拆解为标量变量。",
              "锁消除：不逃逸对象上的锁可以消除。",
            ],
            resources: [
              { title: "Escape Analysis", url: "https://www.baeldung.com/java-escape-analysis" },
              { title: "Scalar Replacement", url: "https://shipilev.net/jvm/anatomy-quarks/18-scalar-replacement/" },
              { title: "Lock Elision", url: "https://wiki.openjdk.org/display/HotSpot/Synchronization" },
            ],
          },
          {
            id: "jvm-w16-3",
            title: "编译日志分析",
            detail: "使用编译日志分析 JIT 行为。",
            keyPoints: [
              "-XX:+PrintCompilation：打印编译信息。",
              "-XX:+UnlockDiagnosticVMOptions -XX:+LogCompilation。",
              "JITWatch：可视化分析编译日志。",
              "分析内联决策、逆优化原因。",
            ],
            resources: [
              { title: "JITWatch", url: "https://github.com/AdoptOpenJDK/jitwatch" },
              { title: "Compilation Logs", url: "https://www.baeldung.com/java-analyze-jit-compilation" },
              { title: "PrintCompilation", url: "https://blog.joda.org/2011/08/printcompilation-jvm-flag.html" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段九：性能监控与诊断（第 17-18 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "jvm-monitoring",
    title: "阶段九：性能监控与诊断",
    duration: "第 17-18 周",
    goal: "掌握 JVM 性能监控工具与故障诊断方法。",
    weeks: [
      {
        id: "jvm-w17",
        title: "第 17 周：性能分析工具",
        summary: "掌握 JFR、async-profiler 等核心工具。",
        keyPoints: [
          "JFR 是低开销的生产级性能分析工具。",
          "async-profiler 提供准确的 CPU 和内存剖析。",
          "火焰图直观展示程序热点。",
        ],
        lessons: [
          {
            id: "jvm-w17-1",
            title: "JDK Flight Recorder",
            detail: "使用 JFR 进行生产环境性能分析。",
            keyPoints: [
              "JFR：内置于 JDK 的低开销事件记录框架。",
              "开销 <1%，可在生产环境长期运行。",
              "启动：-XX:StartFlightRecording 或 jcmd。",
              "JDK Mission Control 分析 JFR 数据。",
            ],
            resources: [
              { title: "JDK Flight Recorder", url: "https://docs.oracle.com/en/java/javase/21/jfapi/" },
              { title: "JFR Guide", url: "https://www.baeldung.com/java-flight-recorder-monitoring" },
              { title: "JDK Mission Control", url: "https://www.oracle.com/java/technologies/jdk-mission-control.html" },
            ],
          },
          {
            id: "jvm-w17-2",
            title: "async-profiler",
            detail: "使用 async-profiler 进行采样剖析。",
            keyPoints: [
              "async-profiler：低开销、高精度的采样剖析器。",
              "CPU 剖析：识别 CPU 热点方法。",
              "分配剖析：追踪对象分配热点。",
              "Wall-clock 剖析：包含阻塞和等待时间。",
            ],
            resources: [
              { title: "async-profiler", url: "https://github.com/async-profiler/async-profiler" },
              { title: "Profiling Guide", url: "https://krzysztofslusarski.github.io/2022/12/12/async-manual.html" },
              { title: "IntelliJ Profiler", url: "https://www.jetbrains.com/help/idea/profiler-intro.html" },
            ],
          },
          {
            id: "jvm-w17-3",
            title: "火焰图分析",
            detail: "使用火焰图可视化性能数据。",
            keyPoints: [
              "火焰图：X 轴是方法调用，Y 轴是调用深度。",
              "宽度代表采样占比，越宽越热。",
              "分析方向：自顶向下找热点，自底向上找调用者。",
              "工具：Speedscope、JFR Flame Graph。",
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
        id: "jvm-w18",
        title: "第 18 周：故障诊断",
        summary: "掌握 JVM 故障诊断方法与工具。",
        keyPoints: [
          "堆转储是诊断内存问题的核心数据。",
          "线程转储帮助分析死锁和线程问题。",
          "GC 日志是 GC 问题诊断的关键。",
        ],
        lessons: [
          {
            id: "jvm-w18-1",
            title: "堆转储分析",
            detail: "获取和分析堆转储诊断内存问题。",
            keyPoints: [
              "获取方式：jmap、jcmd、-XX:+HeapDumpOnOutOfMemoryError。",
              "Eclipse MAT：分析堆转储的强大工具。",
              "Dominator Tree：找出占用内存最多的对象。",
              "GC Roots 分析：追踪对象为何无法被回收。",
            ],
            resources: [
              { title: "Eclipse MAT", url: "https://eclipse.dev/mat/" },
              { title: "Heap Dump Analysis", url: "https://www.baeldung.com/java-heap-dump-capture" },
              { title: "Memory Leak Detection", url: "https://help.eclipse.org/latest/index.jsp?topic=/org.eclipse.mat.ui.help/gettingstarted/basictutorial.html" },
            ],
          },
          {
            id: "jvm-w18-2",
            title: "线程转储分析",
            detail: "使用线程转储诊断线程问题。",
            keyPoints: [
              "获取方式：jstack、jcmd Thread.print、kill -3。",
              "线程状态：RUNNABLE、BLOCKED、WAITING、TIMED_WAITING。",
              "死锁检测：jstack 自动检测死锁。",
              "分析工具：fastthread.io、TDA。",
            ],
            resources: [
              { title: "Thread Dump Analysis", url: "https://www.baeldung.com/java-analyze-thread-dumps" },
              { title: "fastthread.io", url: "https://fastthread.io/" },
              { title: "Detecting Deadlocks", url: "https://www.baeldung.com/java-thread-dump#detect-deadlocks" },
            ],
          },
          {
            id: "jvm-w18-3",
            title: "GC 日志分析",
            detail: "配置和分析 GC 日志定位 GC 问题。",
            keyPoints: [
              "-Xlog:gc*:file=gc.log：统一日志配置。",
              "GC 日志内容：GC 原因、各阶段耗时、堆变化。",
              "GCEasy、GCViewer：可视化分析工具。",
              "关注指标：GC 频率、暂停时间、吞吐量。",
            ],
            resources: [
              { title: "GC Logging", url: "https://docs.oracle.com/en/java/javase/21/gctuning/gc-tuning-basics.html" },
              { title: "GCEasy", url: "https://gceasy.io/" },
              { title: "GC Log Analysis", url: "https://www.baeldung.com/java-gc-log-analysis" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段十：JVM 调优（第 19-20 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "jvm-tuning",
    title: "阶段十：JVM 调优",
    duration: "第 19-20 周",
    goal: "掌握 JVM 参数调优与性能优化最佳实践。",
    weeks: [
      {
        id: "jvm-w19",
        title: "第 19 周：JVM 参数调优",
        summary: "掌握关键 JVM 参数的配置与调优。",
        keyPoints: [
          "堆大小设置是最基本的调优。",
          "GC 选择取决于应用特点和目标。",
          "调优应基于监控数据，避免盲目调优。",
        ],
        lessons: [
          {
            id: "jvm-w19-1",
            title: "内存参数",
            detail: "掌握 JVM 内存相关参数配置。",
            keyPoints: [
              "-Xms/-Xmx：初始和最大堆大小，建议设置相同。",
              "-Xmn：新生代大小（或 -XX:NewRatio）。",
              "-XX:MetaspaceSize/-XX:MaxMetaspaceSize。",
              "-Xss：线程栈大小。",
            ],
            resources: [
              { title: "Memory Settings", url: "https://docs.oracle.com/en/java/javase/21/gctuning/factors-affecting-garbage-collection-performance.html" },
              { title: "JVM Parameters", url: "https://www.baeldung.com/jvm-parameters" },
              { title: "Heap Sizing", url: "https://docs.oracle.com/en/java/javase/21/gctuning/sizing-generations.html" },
            ],
          },
          {
            id: "jvm-w19-2",
            title: "GC 参数",
            detail: "掌握垃圾收集器的配置参数。",
            keyPoints: [
              "-XX:+UseG1GC/-XX:+UseZGC/-XX:+UseShenandoahGC。",
              "G1GC：-XX:MaxGCPauseMillis、-XX:G1HeapRegionSize。",
              "ZGC：-XX:+ZGenerational（Java 21+）。",
              "-Xlog:gc*：配置 GC 日志。",
            ],
            resources: [
              { title: "GC Tuning Guide", url: "https://docs.oracle.com/en/java/javase/21/gctuning/" },
              { title: "Selecting a GC", url: "https://docs.oracle.com/en/java/javase/21/gctuning/available-collectors.html" },
              { title: "GC Parameters", url: "https://www.baeldung.com/jvm-garbage-collectors" },
            ],
          },
          {
            id: "jvm-w19-3",
            title: "JIT 参数",
            detail: "掌握 JIT 编译器的配置参数。",
            keyPoints: [
              "-XX:+TieredCompilation：分层编译（默认启用）。",
              "-XX:CompileThreshold：编译阈值。",
              "-XX:+PrintCompilation：打印编译信息。",
              "-XX:ReservedCodeCacheSize：代码缓存大小。",
            ],
            resources: [
              { title: "Compiler Control", url: "https://docs.oracle.com/en/java/javase/21/vm/java-virtual-machine-technology-overview.html" },
              { title: "JIT Tuning", url: "https://www.baeldung.com/java-tiered-compilation" },
              { title: "Code Cache", url: "https://www.baeldung.com/jvm-code-cache" },
            ],
          },
        ],
      },
      {
        id: "jvm-w20",
        title: "第 20 周：调优实战",
        summary: "JVM 调优最佳实践与常见问题处理。",
        keyPoints: [
          "调优应有明确目标：吞吐量、延迟、内存。",
          "基准测试验证调优效果。",
          "容器环境有特殊的调优考虑。",
        ],
        lessons: [
          {
            id: "jvm-w20-1",
            title: "调优方法论",
            detail: "建立系统的 JVM 调优方法。",
            keyPoints: [
              "明确目标：吞吐量优先还是延迟优先？",
              "建立基准：使用 JMH 进行基准测试。",
              "监控先行：基于数据调优，避免盲目调优。",
              "单一变量：每次只改一个参数。",
            ],
            resources: [
              { title: "Tuning Methodology", url: "https://docs.oracle.com/en/java/javase/21/gctuning/gc-tuning-basics.html" },
              { title: "JMH", url: "https://openjdk.org/projects/code-tools/jmh/" },
              { title: "Performance Testing", url: "https://www.baeldung.com/java-microbenchmark-harness" },
            ],
          },
          {
            id: "jvm-w20-2",
            title: "常见问题诊断",
            detail: "诊断和解决常见 JVM 性能问题。",
            keyPoints: [
              "频繁 Full GC：内存泄漏、对象晋升过快。",
              "长 GC 暂停：堆过大、大对象分配。",
              "OOM：堆不足、Metaspace 溢出、直接内存溢出。",
              "CPU 飙高：死循环、GC 过于频繁。",
            ],
            resources: [
              { title: "GC Troubleshooting", url: "https://docs.oracle.com/en/java/javase/21/troubleshoot/troubleshoot-memory-leaks.html" },
              { title: "OOM Errors", url: "https://www.baeldung.com/java-gc-cyclic-references" },
              { title: "CPU Issues", url: "https://www.baeldung.com/java-high-cpu-usage-causes" },
            ],
          },
          {
            id: "jvm-w20-3",
            title: "容器环境调优",
            detail: "在容器环境中调优 JVM。",
            keyPoints: [
              "-XX:+UseContainerSupport：容器感知（默认启用）。",
              "-XX:MaxRAMPercentage：基于容器内存设置堆大小。",
              "避免过度分配：预留内存给非堆和操作系统。",
              "资源限制：cgroup 限制 CPU 和内存。",
            ],
            resources: [
              { title: "Container Awareness", url: "https://www.baeldung.com/ops/docker-jvm-heap-size" },
              { title: "JVM in Containers", url: "https://developers.redhat.com/articles/2022/04/19/java-17-containers-whats-new-and-whats-improved" },
              { title: "Container Best Practices", url: "https://cloud.google.com/architecture/best-practices-java-serverless-container-apps" },
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
export const jvmKnowledgeCards: KnowledgeCard[] = [
  {
    id: "jvm-kc-1",
    title: "JVM 架构",
    summary: "JVM 由类加载子系统、运行时数据区、执行引擎三部分组成。",
    points: [
      "类加载子系统：加载、链接、初始化 class 文件",
      "运行时数据区：堆、栈、方法区、程序计数器",
      "执行引擎：解释器、JIT 编译器、垃圾收集器",
      "JVM 是基于栈的虚拟机",
    ],
    practice: "使用 javap -v 分析一个简单类的字节码，理解常量池和方法结构。",
  },
  {
    id: "jvm-kc-2",
    title: "类加载机制",
    summary: "双亲委派模型保证类的唯一性和安全性。",
    points: [
      "加载 → 链接（验证、准备、解析）→ 初始化",
      "Bootstrap → Platform → Application ClassLoader",
      "双亲委派：先委托父加载器加载",
      "可自定义类加载器实现热部署、隔离",
    ],
    practice: "实现一个自定义类加载器，从加密的 class 文件加载类。",
  },
  {
    id: "jvm-kc-3",
    title: "运行时数据区",
    summary: "JVM 内存分为堆、栈、方法区等区域，各有不同作用。",
    points: [
      "堆：对象存储，GC 主要区域，-Xms/-Xmx 配置",
      "栈：线程私有，存储栈帧，-Xss 配置",
      "Metaspace：类元数据，使用本地内存",
      "程序计数器：当前执行的字节码行号",
    ],
    practice: "使用 JOL 工具分析对象内存布局，理解对象头和指针压缩。",
  },
  {
    id: "jvm-kc-4",
    title: "Java 内存模型",
    summary: "JMM 定义了多线程环境下的内存可见性规则。",
    points: [
      "主内存与工作内存是抽象概念",
      "happens-before 定义操作间的可见性",
      "volatile 保证可见性和有序性",
      "synchronized 保证原子性、可见性、有序性",
    ],
    practice: "编写代码验证 volatile 的可见性和 happens-before 规则。",
  },
  {
    id: "jvm-kc-5",
    title: "垃圾收集基础",
    summary: "可达性分析判断对象存活，分代收集提高效率。",
    points: [
      "GC Roots：栈帧引用、静态变量、JNI 引用",
      "标记-清除、复制、标记-整理三种基本算法",
      "分代假说：大多数对象朝生夕死",
      "Minor GC 回收新生代，Full GC 回收整堆",
    ],
    practice: "配置不同 GC 参数，观察 GC 日志中的分代回收行为。",
  },
  {
    id: "jvm-kc-6",
    title: "G1GC",
    summary: "G1GC 是 Java 默认 GC，追求可预测的暂停时间。",
    points: [
      "Region 设计打破传统连续分代",
      "Young GC + Mixed GC 的收集策略",
      "-XX:MaxGCPauseMillis 设置目标暂停时间",
      "Remembered Set 追踪跨 Region 引用",
    ],
    practice: "使用 G1GC 运行应用，分析 GC 日志中的收集过程。",
  },
  {
    id: "jvm-kc-7",
    title: "ZGC",
    summary: "ZGC 是低延迟 GC，目标暂停时间 <1ms。",
    points: [
      "并发标记、并发转移，几乎不暂停",
      "Colored Pointers 在指针中嵌入标记信息",
      "Load Barrier 处理对象移动",
      "Generational ZGC 提升吞吐量",
    ],
    practice: "使用 ZGC 运行高并发应用，验证亚毫秒级暂停。",
  },
  {
    id: "jvm-kc-8",
    title: "JIT 编译",
    summary: "JIT 编译将热点代码编译为本地机器码提升性能。",
    points: [
      "分层编译：C1 快速编译 + C2 深度优化",
      "热点探测：方法调用计数器和回边计数器",
      "内联是最重要的优化技术",
      "逃逸分析支持栈上分配和锁消除",
    ],
    practice: "使用 JITWatch 分析编译日志，观察内联和优化决策。",
  },
  {
    id: "jvm-kc-9",
    title: "JFR 性能分析",
    summary: "JFR 是低开销的生产级性能分析工具。",
    points: [
      "开销 <1%，可长期运行",
      "事件类型：CPU、内存、锁、I/O、GC",
      "-XX:StartFlightRecording 启动录制",
      "JDK Mission Control 分析数据",
    ],
    practice: "在生产环境启用 JFR，生成火焰图分析热点。",
  },
  {
    id: "jvm-kc-10",
    title: "JVM 调优",
    summary: "JVM 调优应基于监控数据，有明确的优化目标。",
    points: [
      "-Xms/-Xmx 设置堆大小，建议设置相同",
      "根据场景选择 GC：G1（通用）、ZGC（低延迟）",
      "容器环境使用 -XX:MaxRAMPercentage",
      "单一变量原则：每次只改一个参数",
    ],
    practice: "对应用进行基准测试，调整 JVM 参数观察性能变化。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const jvmExamQuestions: QuizQuestion[] = [
  {
    id: "jvm-q1",
    question: "JVM 规范定义了以下哪项内容？",
    options: ["具体的 GC 算法", "JIT 编译策略", "class 文件格式", "线程池实现"],
    answer: 2,
    rationale: "JVM 规范定义了 class 文件格式、指令集、运行时数据区等抽象概念，但不规定具体的 GC 算法或 JIT 策略。",
  },
  {
    id: "jvm-q2",
    question: "JVM 是基于什么模型的虚拟机？",
    options: ["基于寄存器", "基于栈", "基于堆", "基于队列"],
    answer: 1,
    rationale: "JVM 是基于栈的虚拟机，使用操作数栈进行计算，这使得 JVM 更易于移植到不同硬件平台。",
  },
  {
    id: "jvm-q3",
    question: "类加载的三个阶段按顺序是？",
    options: ["加载、初始化、链接", "链接、加载、初始化", "加载、链接、初始化", "初始化、加载、链接"],
    answer: 2,
    rationale: "类加载按顺序分为加载、链接（验证、准备、解析）、初始化三个阶段。",
  },
  {
    id: "jvm-q4",
    question: "双亲委派模型中，最顶层的类加载器是？",
    options: ["Application ClassLoader", "Platform ClassLoader", "Bootstrap ClassLoader", "Custom ClassLoader"],
    answer: 2,
    rationale: "Bootstrap ClassLoader 是最顶层的类加载器，负责加载 java.base 模块，由 C++ 实现。",
  },
  {
    id: "jvm-q5",
    question: "字节码指令 invokevirtual 用于调用什么类型的方法？",
    options: ["静态方法", "实例方法（虚方法）", "构造方法", "接口方法"],
    answer: 1,
    rationale: "invokevirtual 用于调用实例方法（虚方法），支持多态。invokestatic 调用静态方法，invokespecial 调用构造器。",
  },
  {
    id: "jvm-q6",
    question: "JVM 存储对象实例的内存区域是？",
    options: ["虚拟机栈", "堆", "方法区", "程序计数器"],
    answer: 1,
    rationale: "堆（Heap）是 JVM 中用于存储对象实例的内存区域，是垃圾收集的主要区域。",
  },
  {
    id: "jvm-q7",
    question: "Java 8 之后，类元数据存储在哪里？",
    options: ["永久代", "堆", "Metaspace", "虚拟机栈"],
    answer: 2,
    rationale: "Java 8 移除了永久代（PermGen），类元数据改为存储在 Metaspace，使用本地内存而非堆内存。",
  },
  {
    id: "jvm-q8",
    question: "对象头中的 Mark Word 不包含以下哪项信息？",
    options: ["哈希码", "GC 年龄", "锁状态", "字段值"],
    answer: 3,
    rationale: "Mark Word 存储哈希码、GC 年龄、锁状态等信息。字段值存储在实例数据部分，不在对象头中。",
  },
  {
    id: "jvm-q9",
    question: "JMM 中 happens-before 规则保证的是？",
    options: ["执行时间顺序", "内存可见性", "原子性", "代码行号顺序"],
    answer: 1,
    rationale: "happens-before 规则定义了操作之间的内存可见性顺序，保证前一个操作的结果对后一个操作可见。",
  },
  {
    id: "jvm-q10",
    question: "volatile 关键字能保证以下哪项？",
    options: ["原子性", "可见性和有序性", "只有原子性", "只有有序性"],
    answer: 1,
    rationale: "volatile 保证可见性（写入立即刷新到主内存）和有序性（禁止重排序），但不保证复合操作的原子性。",
  },
  {
    id: "jvm-q11",
    question: "JVM 判断对象是否存活的算法是？",
    options: ["引用计数", "可达性分析", "标记清除", "复制算法"],
    answer: 1,
    rationale: "JVM 使用可达性分析算法判断对象是否存活，从 GC Roots 出发遍历引用链，不可达的对象可被回收。",
  },
  {
    id: "jvm-q12",
    question: "以下哪个不是 GC Roots？",
    options: ["栈帧中的局部变量", "静态变量", "堆中的普通对象", "JNI 引用"],
    answer: 2,
    rationale: "GC Roots 包括栈帧引用、静态变量、JNI 引用等，堆中的普通对象本身不是 GC Roots，它们是被 GC Roots 引用的对象。",
  },
  {
    id: "jvm-q13",
    question: "G1GC 中，堆被划分为多个什么？",
    options: ["Segment", "Region", "Block", "Zone"],
    answer: 1,
    rationale: "G1GC 将堆划分为多个大小相等的 Region（1-32MB），打破了传统的连续分代设计。",
  },
  {
    id: "jvm-q14",
    question: "ZGC 的设计目标暂停时间是多少？",
    options: ["<10ms", "<1ms", "<100ms", "<50ms"],
    answer: 1,
    rationale: "ZGC 的设计目标是暂停时间不超过 1 毫秒，且与堆大小无关。",
  },
  {
    id: "jvm-q15",
    question: "启用 Generational ZGC 的参数是？",
    options: ["-XX:+UseZGC", "-XX:+UseZGC -XX:+ZGenerational", "-XX:+UseG1GC", "-XX:+UseGenZGC"],
    answer: 1,
    rationale: "Java 21 的 Generational ZGC 需要同时使用 -XX:+UseZGC 和 -XX:+ZGenerational 两个参数启用。",
  },
  {
    id: "jvm-q16",
    question: "HotSpot 的 C2 编译器的特点是？",
    options: ["快速编译，基本优化", "深度优化，编译时间长", "只支持解释执行", "用 Java 编写"],
    answer: 1,
    rationale: "C2（Server Compiler）进行深度优化，编译时间较长，适合热点代码。C1 是快速编译，Graal 是用 Java 编写的。",
  },
  {
    id: "jvm-q17",
    question: "JIT 编译中最重要的优化技术是？",
    options: ["循环展开", "方法内联", "常量折叠", "死代码消除"],
    answer: 1,
    rationale: "方法内联是最重要的 JIT 优化技术，它消除方法调用开销，并为其他优化（如逃逸分析）创造条件。",
  },
  {
    id: "jvm-q18",
    question: "逃逸分析可以支持以下哪种优化？",
    options: ["循环向量化", "栈上分配", "指令重排序", "分支预测"],
    answer: 1,
    rationale: "逃逸分析判断对象是否逃逸出方法或线程，不逃逸的对象可以进行栈上分配、标量替换、锁消除等优化。",
  },
  {
    id: "jvm-q19",
    question: "JDK Flight Recorder (JFR) 的典型开销是多少？",
    options: ["5-10%", "1-2%", "<1%", "10-15%"],
    answer: 2,
    rationale: "JFR 的设计目标是开销低于 1%，可以在生产环境长期运行进行性能监控。",
  },
  {
    id: "jvm-q20",
    question: "在容器环境中，推荐使用哪个参数基于容器内存设置堆大小？",
    options: ["-Xmx", "-XX:MaxRAMPercentage", "-XX:HeapSize", "-XX:ContainerMemory"],
    answer: 1,
    rationale: "-XX:MaxRAMPercentage 可以基于容器的内存限制按百分比设置堆大小，比固定的 -Xmx 更适合容器环境。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const jvmRoadmap: RoadmapDefinition = {
  id: "jvm",
  label: "JVM",
  title: "JVM 深入解析",
  durationLabel: "20 周完整学习路线",
  description:
    "从 JVM 规范与架构出发，深入类加载机制、字节码执行、内存模型，掌握垃圾收集原理与 G1/ZGC 调优，理解 JIT 编译优化技术，学习性能监控诊断与调优最佳实践。",
  heroBadge: "JVM 规范 · 内存模型 · GC · JIT · 性能调优",
  stages: jvmStages,
  knowledgeCards: jvmKnowledgeCards,
  examQuestions: jvmExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 JVM 深入学习之旅！先从 JVM 规范与架构开始。"
    if (percent < 20) return "继续学习类加载机制和字节码，这是理解 JVM 的基础。"
    if (percent < 40) return "深入运行时数据区和内存模型，理解 JVM 内存管理。"
    if (percent < 60) return "垃圾收集是 JVM 性能的关键，重点掌握 G1GC 和 ZGC。"
    if (percent < 80) return "JIT 编译优化技术是提升性能的核心，深入理解内联和逃逸分析。"
    if (percent < 100) return "即将完成！性能监控和调优是 JVM 专家的必备技能。"
    return "恭喜完成！你已掌握 JVM 的完整知识体系。"
  },
  resourceGuide: {
    environment:
      "推荐使用 JDK 21 LTS 进行实践。安装 JDK Mission Control 用于 JFR 分析，Eclipse MAT 用于堆转储分析。",
    fallbackKeyPoints: [
      "JVM 由类加载子系统、运行时数据区、执行引擎三部分组成",
      "双亲委派模型保证类的唯一性和安全性",
      "JMM 定义 happens-before 规则保证内存可见性",
      "G1GC 是默认 GC，ZGC 追求 <1ms 暂停时间",
      "方法内联是最重要的 JIT 优化技术",
    ],
    handsOnSteps: [
      "使用 javap -v 分析字节码，理解常量池和方法结构",
      "实现自定义类加载器，体验类加载机制",
      "使用 JOL 工具分析对象内存布局",
      "配置不同 GC，分析 GC 日志",
      "使用 JFR 和 async-profiler 进行性能分析",
    ],
    selfChecks: [
      "能否解释类加载的三个阶段和双亲委派模型？",
      "能否说明 JMM 的 happens-before 规则？",
      "能否分析 GC 日志定位性能问题？",
      "能否解释 JIT 编译的分层编译机制？",
      "能否根据场景选择合适的 GC 和调优参数？",
    ],
    extensions: [
      "阅读 JVM 规范，深入理解字节码指令",
      "研究 HotSpot 源码，理解具体实现",
      "学习 GraalVM 和 Native Image",
      "探索 Project Leyden 和 CRaC",
    ],
    lessonQuizAdvice: "每周完成后测验，重点关注类加载、内存模型、GC 和 JIT 编译核心概念。",
  },
}
