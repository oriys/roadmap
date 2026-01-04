import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "jvm-w1-1": {
        lessonId: "jvm-w1-1",
        background: [
            "【规范定义】JVM 规范（Java SE 21 Edition）明确指出：JVM 是'an abstract computing machine'——它定义的是抽象计算模型，而非具体实现。这意味着不同厂商可以用不同方式实现 JVM，只要符合规范即可。",
            "【规范内容】官方规范定义了：class 文件格式（.class bytecode structure）、数据类型（primitive and reference types）、运行时数据区（runtime data areas）、指令集（bytecode operations）、加载链接初始化（loading, linking, initialization）。",
            "【规范不定义】规范采用'Public Design, Private Implementation'原则——不规定 GC 算法、JIT 编译策略、内部数据结构、性能特征。这给予实现者优化空间，如 HotSpot 的分层编译、ZGC 的并发收集等都是实现细节。",
            "【七章结构】JVM 规范分为七章：Introduction（历史与符号）、JVM Structure（核心架构）、Compiling for JVM（编译示例）、Class File Format（二进制格式）、Loading/Linking/Initialization（类生命周期）、Instruction Set（指令参考）、Opcode Mnemonics（操作码查找）。",
            "【版本对应】规范版本与 Java 版本一一对应，如 Java 21 对应 JVM SE 21 规范。class 文件的主版本号决定了最低 JVM 版本要求，高版本 JVM 可以运行低版本 class 文件。"
        ],
        keyDifficulties: [
            "【规范 vs 实现】理解规范与实现的区别至关重要：规范说'必须支持 int 类型加法'，但不规定用几条 CPU 指令实现。HotSpot、OpenJ9、GraalVM 各有不同的优化策略，都符合同一规范。",
            "【抽象层次】规范使用抽象术语，如'frame'、'operand stack'。实际实现可能完全不同——HotSpot 可能通过 JIT 将栈操作编译为寄存器操作，但对外行为仍符合规范定义。",
            "【常见误解】规范规定的运行时数据区（堆、栈、方法区等）是逻辑概念，不是物理内存布局。实际 JVM 可能合并或拆分这些区域，只要语义正确即可。",
            "【向后兼容】JVM 规范保证向后兼容——新版 JVM 必须能运行旧版 class 文件。但反过来不行，新版 class 文件可能使用新版特性（如 invokedynamic），旧 JVM 无法识别。"
        ],
        handsOnPath: [
            "访问 Oracle 官方 JVM Specification 页面，浏览目录结构，了解规范覆盖的主题范围。",
            "阅读规范第 2 章（JVM Structure）的 2.5 节（Runtime Data Areas），理解 PC Register、JVM Stack、Heap、Method Area 等区域的规范定义。",
            "使用 javap -version 查看当前 JDK 版本，编译一个简单类后用 javap -v 查看 class 文件的版本号，理解版本对应关系。",
            "对比 HotSpot 和 OpenJ9 的启动日志，观察不同实现如何输出 GC 和编译信息，体会'同一规范，不同实现'。"
        ],
        selfCheck: [
            "JVM 规范定义了哪些内容？不定义哪些内容？",
            "为什么说 JVM 是'抽象计算机'而非'具体程序'？",
            "规范中定义的五大运行时数据区分别是什么？",
            "class 文件版本号的作用是什么？新旧版本兼容性如何？",
            "为什么不同厂商的 JVM 实现可以有不同的 GC 算法？",
            "JVM 规范采用的'Public Design, Private Implementation'原则是什么意思？"
        ],
        extensions: [
            "阅读 JVM 规范第 4 章（Class File Format），了解 class 文件的详细二进制结构。",
            "研究 JSR（Java Specification Request）机制，了解 JVM 规范的演进流程。",
            "比较 JVM 规范与 ECMA-335（CLR 规范）的设计差异，理解不同虚拟机规范的取舍。",
            "阅读 OpenJDK 源码中的规范实现，如 hotspot/share/interpreter 目录下的解释器代码。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jvms/se21/html/index.html",
            "https://blog.jamesdbloom.com/JVMInternals.html"
        ]
    },
    "jvm-w1-2": {
        lessonId: "jvm-w1-2",
        background: [
            "【三大子系统】JVM 由三大核心子系统组成：类加载子系统（Class Loader Subsystem）负责加载 class 文件；运行时数据区（Runtime Data Areas）管理内存；执行引擎（Execution Engine）执行字节码。",
            "【类加载子系统】负责三个阶段：Loading（读取 class 文件为字节数组，创建 Class 对象）、Linking（验证字节码安全性、准备静态变量内存、解析符号引用）、Initialization（执行 <clinit> 初始化静态变量）。",
            "【运行时数据区】包含五个区域：PC Register（程序计数器，线程私有）、JVM Stack（Java 栈，线程私有）、Heap（堆，线程共享）、Method Area（方法区，线程共享）、Native Method Stack（本地方法栈，线程私有）。",
            "【执行引擎组成】包含三个组件：Interpreter（解释器，逐条解释执行字节码）、JIT Compiler（即时编译器，将热点代码编译为本地机器码）、Garbage Collector（垃圾收集器，自动回收不再使用的对象内存）。",
            "【JNI 接口】Java Native Interface 允许 Java 代码调用 C/C++ 编写的本地库。Native Method Libraries 提供操作系统级别的功能，如文件 I/O、网络操作、图形界面等。"
        ],
        keyDifficulties: [
            "【线程共享 vs 私有】堆和方法区是所有线程共享的，这意味着需要处理并发访问问题；PC、栈、本地方法栈是线程私有的，每个线程有独立副本，天然线程安全。",
            "【方法区演变】Java 8 之前方法区实现为 PermGen（永久代），是堆的一部分；Java 8 之后改为 Metaspace，使用本地内存而非堆内存，解决了 PermGen OOM 问题。",
            "【解释 vs 编译】解释执行启动快但运行慢，JIT 编译启动慢但运行快。HotSpot 采用混合模式：先解释执行，识别热点后 JIT 编译。分层编译（C1+C2）平衡启动速度和峰值性能。",
            "【常量池与方法区】运行时常量池是方法区的一部分，存储编译期生成的字面量和符号引用。动态链接时，符号引用被解析为直接引用（内存地址）。"
        ],
        handsOnPath: [
            "使用 java -version 和 java -XshowSettings:all 查看 JVM 配置，包括堆大小、GC 类型等信息。",
            "编写一个简单程序打印 Runtime.getRuntime().maxMemory()、totalMemory()、freeMemory()，观察堆内存使用情况。",
            "使用 jcmd <pid> VM.flags 查看运行中 JVM 的所有参数，了解默认配置。",
            "使用 jconsole 或 VisualVM 连接运行中的 Java 进程，观察堆、非堆、线程等实时数据，体验各个组件的运行状态。",
            "使用 -XX:+PrintCompilation 参数运行程序，观察 JIT 编译输出，识别哪些方法被编译。"
        ],
        selfCheck: [
            "JVM 的三大核心子系统分别是什么？各自的职责是什么？",
            "运行时数据区的五个区域分别是什么？哪些是线程共享的？",
            "类加载的三个阶段是什么？每个阶段做什么？",
            "解释器和 JIT 编译器各有什么优缺点？HotSpot 如何平衡两者？",
            "方法区在 Java 8 前后有什么变化？为什么要改变？",
            "JNI 的作用是什么？什么场景需要使用 JNI？"
        ],
        extensions: [
            "研究类加载器的层次结构：Bootstrap、Platform（Extension）、Application ClassLoader。",
            "学习双亲委派模型的工作原理，理解为什么 java.lang.String 不能被用户类覆盖。",
            "探索 JIT 编译的触发条件：方法调用计数器、回边计数器、编译阈值。",
            "研究不同 GC 算法（G1、ZGC、Shenandoah）的选择原则和配置方法。"
        ],
        sourceUrls: [
            "https://blog.jamesdbloom.com/JVMInternals.html",
            "https://www.geeksforgeeks.org/jvm-works-jvm-architecture/"
        ]
    },
    "jvm-w1-3": {
        lessonId: "jvm-w1-3",
        background: [
            "【基于栈 vs 基于寄存器】JVM 是基于栈的虚拟机，指令从操作数栈获取操作数；Dalvik/ART 是基于寄存器的虚拟机，指令直接指定寄存器地址。JVM 规范明确：'The Java virtual machine has no registers'。",
            "【栈帧结构】每次方法调用创建一个栈帧（Frame），包含三部分：局部变量表（Local Variables Array）存储方法参数和局部变量；操作数栈（Operand Stack）作为计算工作区；帧数据（Frame Data）存储动态链接和返回信息。",
            "【操作数栈工作方式】操作数栈是 LIFO 结构，初始为空。指令通过 push/pop 操作栈：iload 将局部变量压栈，iadd 弹出两个 int 相加后压回结果。JVM 规范：'Instructions take their operands from the operand stack rather than from registers'。",
            "【局部变量表】组织为从零开始的数组，实例方法的 index 0 存储 this 引用。int/float/reference 占一个槽位（4 字节），long/double 占两个连续槽位（8 字节）。byte/short/char/boolean 存储时转换为 int。",
            "【栈深度确定】操作数栈和局部变量表的最大深度在编译时确定，写入 class 文件的 Code 属性。JVM 根据这些信息在方法调用时分配栈帧空间。"
        ],
        keyDifficulties: [
            "【架构权衡】基于栈：指令紧凑（隐式操作数地址）、易于移植（不依赖特定寄存器数量）、但指令数量多。基于寄存器：指令大（显式寄存器地址）、但指令数少、更接近 CPU 原生模型。",
            "【性能差异】研究显示基于寄存器的 VM 平均快 1.15-1.48 倍，因为消除了 push/pop 开销。但 JIT 编译器可以将栈操作编译为寄存器操作，缩小差距。",
            "【类型约束】JVM 强制类型安全：操作数栈上的值必须类型匹配指令要求。fconst 压入 float 后不能用 iadd（int 加法）。编译器和验证器共同保证类型正确。",
            "【long/double 的双槽位】long 和 double 占用两个栈深度单位，但只能通过较小索引访问。例如 dload_1 加载 index 1-2 的 double，但不存在 dload_2 来访问同一个值。"
        ],
        handsOnPath: [
            "编写简单的加法方法：public int add(int a, int b) { return a + b; }，用 javap -c 查看字节码：iload_1, iload_2, iadd, ireturn，理解栈操作序列。",
            "编写包含局部变量的方法，观察 javap -l 输出的 LocalVariableTable，理解变量到槽位的映射。",
            "编写包含 long 或 double 的方法，观察它们如何占用两个槽位，以及对后续变量索引的影响。",
            "使用 javap -v 查看方法的 stack=N 和 locals=M 属性，理解编译器如何计算栈深度和局部变量数量。",
            "对比同一算法的 Java 字节码和 Dalvik smali 代码，体会基于栈和基于寄存器的差异。"
        ],
        selfCheck: [
            "为什么 JVM 选择基于栈的架构而不是基于寄存器？各有什么优缺点？",
            "栈帧的三个组成部分是什么？各自的作用？",
            "iadd 指令执行时操作数栈发生了什么变化？",
            "为什么 long 和 double 需要占用两个槽位？这对变量索引有什么影响？",
            "如何通过 javap 查看方法的最大栈深度和局部变量数量？",
            "实例方法和静态方法的局部变量表有什么不同？"
        ],
        extensions: [
            "研究 JIT 编译如何将基于栈的字节码转换为基于寄存器的机器码，实现性能优化。",
            "学习 Android ART 的执行模式，对比 AOT 编译和 JIT 编译的权衡。",
            "探索栈上分配（Stack Allocation）优化：逃逸分析确定对象不逃逸后，可以在栈上而非堆上分配。",
            "研究 invokedynamic 指令如何支持动态语言（如 Kotlin Lambda）在 JVM 上高效运行。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.6.2",
            "https://markfaction.wordpress.com/2012/07/15/stack-based-vs-register-based-virtual-machine-architecture-and-the-dalvik-vm/",
            "https://www.artima.com/insidejvm/ed2/jvm8.html"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w1-1": [
        {
            id: "jvm-w1-1-q1",
            question: "JVM 规范采用的设计原则是什么？",
            options: [
                "Open Source, Open Implementation",
                "Public Design, Private Implementation",
                "Closed Design, Open Implementation",
                "Private Design, Private Implementation"
            ],
            answer: 1,
            rationale: "JVM 规范采用 'Public Design, Private Implementation' 原则——公开定义行为规范，但不限制具体实现方式，给予厂商优化空间。"
        },
        {
            id: "jvm-w1-1-q2",
            question: "以下哪项是 JVM 规范明确定义的内容？",
            options: [
                "垃圾收集算法",
                "JIT 编译策略",
                "class 文件格式",
                "内部数据结构"
            ],
            answer: 2,
            rationale: "JVM 规范定义了 class 文件格式、数据类型、运行时数据区、指令集等。GC 算法、JIT 策略、内部数据结构是实现细节，规范不做规定。"
        },
        {
            id: "jvm-w1-1-q3",
            question: "JVM 规范共分为几章？",
            options: [
                "5 章",
                "6 章",
                "7 章",
                "8 章"
            ],
            answer: 2,
            rationale: "JVM 规范分为 7 章：Introduction、JVM Structure、Compiling for JVM、Class File Format、Loading/Linking/Initialization、Instruction Set、Opcode Mnemonics。"
        },
        {
            id: "jvm-w1-1-q4",
            question: "为什么说 JVM 是 'abstract computing machine'？",
            options: [
                "因为 JVM 是用抽象类实现的",
                "因为 JVM 定义的是抽象计算模型，而非具体实现",
                "因为 JVM 只能运行抽象类",
                "因为 JVM 的代码是抽象的"
            ],
            answer: 1,
            rationale: "JVM 规范定义的是抽象计算模型，描述行为规范而非具体实现。不同厂商可以用不同方式实现 JVM，只要符合规范即可。"
        },
        {
            id: "jvm-w1-1-q5",
            question: "class 文件主版本号的作用是什么？",
            options: [
                "标识 Java 源代码版本",
                "标识编译器版本",
                "决定运行该 class 文件的最低 JVM 版本",
                "标识 class 文件的创建日期"
            ],
            answer: 2,
            rationale: "class 文件的主版本号决定了运行它的最低 JVM 版本要求。高版本 JVM 可以运行低版本 class 文件（向后兼容），但低版本 JVM 无法运行高版本 class 文件。"
        },
        {
            id: "jvm-w1-1-q6",
            question: "JVM 规范的第 4 章主要定义什么内容？",
            options: [
                "JVM 整体架构",
                "字节码指令集",
                "Class 文件格式",
                "类加载机制"
            ],
            answer: 2,
            rationale: "JVM 规范第 4 章（Class File Format）详细定义了 class 文件的二进制结构，包括魔数、版本号、常量池、字段表、方法表等。"
        },
        {
            id: "jvm-w1-1-q7",
            question: "以下哪项关于 JVM 规范的描述是正确的？",
            options: [
                "规范要求所有 JVM 必须使用相同的 GC 算法",
                "规范定义了 JIT 编译的具体优化策略",
                "规范保证新版 JVM 可以运行旧版 class 文件",
                "规范限制了 JVM 的内部数据结构"
            ],
            answer: 2,
            rationale: "JVM 规范保证向后兼容——新版 JVM 必须能运行旧版 class 文件。GC 算法、JIT 策略、内部数据结构是实现细节，规范不做限制。"
        },
        {
            id: "jvm-w1-1-q8",
            question: "规范中定义的运行时数据区不包括以下哪个？",
            options: [
                "PC Register",
                "JVM Stack",
                "Code Cache",
                "Method Area"
            ],
            answer: 2,
            rationale: "JVM 规范定义了 PC Register、JVM Stack、Heap、Method Area、Native Method Stack 五个运行时数据区。Code Cache（存储 JIT 编译后的代码）是 HotSpot 的实现细节，不在规范中。"
        },
        {
            id: "jvm-w1-1-q9",
            question: "HotSpot、OpenJ9、GraalVM 能运行相同的 class 文件，原因是？",
            options: [
                "它们使用相同的源代码",
                "它们共享相同的库文件",
                "它们都符合 JVM 规范",
                "它们由同一家公司开发"
            ],
            answer: 2,
            rationale: "HotSpot（Oracle）、OpenJ9（IBM/Eclipse）、GraalVM 都是符合 JVM 规范的实现，因此能运行相同的 class 文件。实现方式不同，但行为符合规范。"
        },
        {
            id: "jvm-w1-1-q10",
            question: "JVM 规范第 6 章的主题是什么？",
            options: [
                "JVM 架构概述",
                "类加载机制",
                "字节码指令集",
                "Class 文件格式"
            ],
            answer: 2,
            rationale: "JVM 规范第 6 章（Instruction Set）定义了完整的字节码指令参考，包括 200 多条指令的语义和操作。"
        },
        {
            id: "jvm-w1-1-q11",
            question: "为什么规范中的运行时数据区是'逻辑概念'？",
            options: [
                "因为它们只存在于文档中，不需要实现",
                "因为实际 JVM 可以用不同的物理内存布局实现",
                "因为程序员无法访问这些区域",
                "因为它们在运行时会消失"
            ],
            answer: 1,
            rationale: "规范定义的是逻辑语义而非物理实现。实际 JVM 可以合并、拆分或以不同方式组织这些区域，只要对外行为符合规范即可。"
        },
        {
            id: "jvm-w1-1-q12",
            question: "如果 class 文件使用了 Java 21 新增的字节码特性，会发生什么？",
            options: [
                "任何版本的 JVM 都能运行",
                "只有 Java 21+ 的 JVM 能运行",
                "需要重新编译才能运行",
                "会自动降级为旧版特性"
            ],
            answer: 1,
            rationale: "使用新版特性的 class 文件只能在对应版本或更高版本的 JVM 上运行。旧版 JVM 无法识别新版字节码或特性，会抛出 UnsupportedClassVersionError。"
        }
    ],
    "jvm-w1-2": [
        {
            id: "jvm-w1-2-q1",
            question: "JVM 的三大核心子系统是什么？",
            options: [
                "编译器、解释器、调试器",
                "类加载子系统、运行时数据区、执行引擎",
                "堆、栈、方法区",
                "JIT、GC、JNI"
            ],
            answer: 1,
            rationale: "JVM 由三大核心子系统组成：类加载子系统（加载 class 文件）、运行时数据区（管理内存）、执行引擎（执行字节码）。"
        },
        {
            id: "jvm-w1-2-q2",
            question: "以下哪个运行时数据区是线程共享的？",
            options: [
                "PC Register",
                "JVM Stack",
                "Heap",
                "Native Method Stack"
            ],
            answer: 2,
            rationale: "Heap（堆）和 Method Area（方法区）是线程共享的。PC Register、JVM Stack、Native Method Stack 是线程私有的，每个线程有独立副本。"
        },
        {
            id: "jvm-w1-2-q3",
            question: "类加载的三个阶段按正确顺序是？",
            options: [
                "Linking → Loading → Initialization",
                "Loading → Initialization → Linking",
                "Loading → Linking → Initialization",
                "Initialization → Loading → Linking"
            ],
            answer: 2,
            rationale: "类加载按顺序分为三个阶段：Loading（加载 class 文件）→ Linking（验证、准备、解析）→ Initialization（执行静态初始化）。"
        },
        {
            id: "jvm-w1-2-q4",
            question: "执行引擎包含以下哪些组件？",
            options: [
                "只有解释器",
                "只有 JIT 编译器",
                "解释器、JIT 编译器、垃圾收集器",
                "类加载器、链接器、初始化器"
            ],
            answer: 2,
            rationale: "执行引擎包含三个组件：Interpreter（解释器）、JIT Compiler（即时编译器）、Garbage Collector（垃圾收集器）。"
        },
        {
            id: "jvm-w1-2-q5",
            question: "Java 8 之后，类元数据存储在哪里？",
            options: [
                "PermGen（永久代）",
                "Heap（堆）",
                "Metaspace",
                "Code Cache"
            ],
            answer: 2,
            rationale: "Java 8 之后，方法区的实现从 PermGen（永久代）改为 Metaspace，使用本地内存而非堆内存，解决了 PermGen OOM 问题。"
        },
        {
            id: "jvm-w1-2-q6",
            question: "HotSpot JVM 采用什么执行模式？",
            options: [
                "纯解释执行",
                "纯编译执行",
                "混合模式（解释+JIT）",
                "AOT 编译执行"
            ],
            answer: 2,
            rationale: "HotSpot 采用混合模式：先解释执行以快速启动，识别热点代码后进行 JIT 编译以提升性能。分层编译（C1+C2）平衡启动速度和峰值性能。"
        },
        {
            id: "jvm-w1-2-q7",
            question: "JNI 的主要作用是什么？",
            options: [
                "进行 JIT 编译",
                "管理内存分配",
                "允许 Java 调用本地代码",
                "加载 class 文件"
            ],
            answer: 2,
            rationale: "JNI（Java Native Interface）允许 Java 代码调用 C/C++ 编写的本地库，实现操作系统级别的功能，如文件 I/O、网络操作等。"
        },
        {
            id: "jvm-w1-2-q8",
            question: "运行时常量池是哪个区域的一部分？",
            options: [
                "Heap",
                "JVM Stack",
                "Method Area",
                "PC Register"
            ],
            answer: 2,
            rationale: "运行时常量池是方法区的一部分，存储编译期生成的字面量和符号引用。动态链接时，符号引用被解析为直接引用。"
        },
        {
            id: "jvm-w1-2-q9",
            question: "为什么 PC Register、JVM Stack 是线程私有的？",
            options: [
                "为了节省内存",
                "为了简化实现",
                "为了保证线程安全，追踪各线程独立的执行状态",
                "因为规范要求"
            ],
            answer: 2,
            rationale: "PC Register 追踪当前线程执行的字节码地址，JVM Stack 存储当前线程的方法调用栈。这些是线程执行状态的一部分，必须独立以保证线程安全。"
        },
        {
            id: "jvm-w1-2-q10",
            question: "解释执行和 JIT 编译的主要区别是？",
            options: [
                "解释执行更快",
                "JIT 编译启动更快",
                "解释执行启动快但运行慢，JIT 编译启动慢但运行快",
                "两者性能相同"
            ],
            answer: 2,
            rationale: "解释执行逐条翻译字节码，启动快但运行效率低；JIT 将热点代码编译为机器码，有编译开销但运行效率高。HotSpot 混合两者以平衡。"
        },
        {
            id: "jvm-w1-2-q11",
            question: "Linking 阶段包含哪三个步骤？",
            options: [
                "Loading、Parsing、Executing",
                "Verification、Preparation、Resolution",
                "Compiling、Linking、Running",
                "Reading、Writing、Executing"
            ],
            answer: 1,
            rationale: "Linking 阶段包含三个步骤：Verification（验证字节码安全性）、Preparation（为静态变量分配内存）、Resolution（解析符号引用）。"
        },
        {
            id: "jvm-w1-2-q12",
            question: "为什么 Java 8 要将 PermGen 改为 Metaspace？",
            options: [
                "为了提高编译速度",
                "为了支持更多类型",
                "为了解决 PermGen OOM 问题，使用本地内存代替堆内存",
                "为了兼容旧版本"
            ],
            answer: 2,
            rationale: "PermGen 是堆的一部分，大小固定，容易 OOM。Metaspace 使用本地内存，可以动态扩展，解决了类元数据过多导致的 OOM 问题。"
        }
    ],
    "jvm-w1-3": [
        {
            id: "jvm-w1-3-q1",
            question: "JVM 是基于什么架构的虚拟机？",
            options: [
                "基于寄存器",
                "基于栈",
                "基于堆",
                "基于队列"
            ],
            answer: 1,
            rationale: "JVM 是基于栈的虚拟机，指令从操作数栈获取操作数。JVM 规范明确：'The Java virtual machine has no registers'。"
        },
        {
            id: "jvm-w1-3-q2",
            question: "栈帧（Frame）包含哪三个部分？",
            options: [
                "堆、栈、方法区",
                "局部变量表、操作数栈、帧数据",
                "PC、Stack、Heap",
                "Class、Method、Field"
            ],
            answer: 1,
            rationale: "栈帧包含三部分：局部变量表（Local Variables Array）、操作数栈（Operand Stack）、帧数据（Frame Data，包括动态链接和返回信息）。"
        },
        {
            id: "jvm-w1-3-q3",
            question: "实例方法的局部变量表 index 0 存储什么？",
            options: [
                "第一个参数",
                "返回值",
                "this 引用",
                "null"
            ],
            answer: 2,
            rationale: "实例方法的局部变量表 index 0 存储 this 引用，参数从 index 1 开始。静态方法没有 this，参数从 index 0 开始。"
        },
        {
            id: "jvm-w1-3-q4",
            question: "long 和 double 类型在局部变量表中占用多少槽位？",
            options: [
                "1 个槽位",
                "2 个连续槽位",
                "4 个槽位",
                "取决于 JVM 实现"
            ],
            answer: 1,
            rationale: "long 和 double 是 64 位类型，占用两个连续槽位（8 字节）。int/float/reference 占用一个槽位（4 字节）。"
        },
        {
            id: "jvm-w1-3-q5",
            question: "iadd 指令执行时，操作数栈发生什么变化？",
            options: [
                "压入两个 int 值",
                "弹出一个 int 值",
                "弹出两个 int 值，将相加结果压入",
                "不改变栈"
            ],
            answer: 2,
            rationale: "iadd 指令从操作数栈弹出两个 int 值，执行加法运算，然后将结果压回栈顶。这是典型的基于栈的计算方式。"
        },
        {
            id: "jvm-w1-3-q6",
            question: "基于栈的虚拟机相比基于寄存器的虚拟机，有什么优势？",
            options: [
                "执行速度更快",
                "指令更少",
                "指令紧凑、易于移植",
                "内存占用更少"
            ],
            answer: 2,
            rationale: "基于栈的 VM 指令紧凑（操作数地址隐式）、不依赖特定寄存器数量因此易于移植。缺点是指令数量多，需要频繁 push/pop。"
        },
        {
            id: "jvm-w1-3-q7",
            question: "操作数栈的最大深度是什么时候确定的？",
            options: [
                "运行时动态确定",
                "类加载时确定",
                "编译时确定",
                "JIT 编译时确定"
            ],
            answer: 2,
            rationale: "操作数栈和局部变量表的最大深度在编译时确定，写入 class 文件的 Code 属性（stack=N, locals=M）。JVM 根据这些信息分配栈帧空间。"
        },
        {
            id: "jvm-w1-3-q8",
            question: "为什么 byte/short/char 存入局部变量表时要转换为 int？",
            options: [
                "为了类型安全",
                "因为 JVM 指令集主要针对 int 设计，简化实现",
                "为了节省内存",
                "因为 Java 不支持这些类型"
            ],
            answer: 1,
            rationale: "JVM 的整数运算指令主要针对 int 设计（如 iadd、isub）。byte/short/char 存储时转换为 int，简化了指令集设计和实现。"
        },
        {
            id: "jvm-w1-3-q9",
            question: "Dalvik VM 与 JVM 的主要架构区别是什么？",
            options: [
                "Dalvik 是解释执行，JVM 是编译执行",
                "Dalvik 是基于寄存器的，JVM 是基于栈的",
                "Dalvik 不支持 GC",
                "Dalvik 只能运行 Java 代码"
            ],
            answer: 1,
            rationale: "Dalvik（Android 旧版 VM）是基于寄存器的，指令直接指定寄存器地址；JVM 是基于栈的，指令从操作数栈获取操作数。"
        },
        {
            id: "jvm-w1-3-q10",
            question: "研究显示基于寄存器的 VM 比基于栈的 VM 快多少？",
            options: [
                "慢 50%",
                "性能相同",
                "快 1.15-1.48 倍",
                "快 10 倍"
            ],
            answer: 2,
            rationale: "研究显示基于寄存器的 VM 平均快 1.15-1.48 倍，因为消除了 push/pop 开销。但 JIT 编译可以缩小这个差距。"
        },
        {
            id: "jvm-w1-3-q11",
            question: "以下哪个操作会使栈帧被销毁？",
            options: [
                "调用另一个方法",
                "创建对象",
                "方法正常返回或抛出未捕获异常",
                "执行循环"
            ],
            answer: 2,
            rationale: "栈帧在方法调用时创建，在方法完成时销毁——无论是正常返回（return）还是异常完成（抛出未捕获异常）。"
        },
        {
            id: "jvm-w1-3-q12",
            question: "如果在 float 值上使用 iadd 指令会怎样？",
            options: [
                "自动类型转换后执行",
                "抛出运行时异常",
                "编译器/验证器会拒绝，不符合类型安全",
                "结果不确定"
            ],
            answer: 2,
            rationale: "JVM 强制类型安全：指令要求的操作数类型必须匹配。在 float 上使用 iadd（int 加法）会被编译器拒绝或字节码验证器检测到，这是非法操作。"
        }
    ]
}
