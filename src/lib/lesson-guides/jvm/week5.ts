import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "jvm-w5-1": {
        lessonId: "jvm-w5-1",
        background: [
            "【Class 文件概述】Class 文件是 JVM 的通用输入格式，由 Java 编译器将 .java 源文件编译而成。任何符合规范的 Class 文件都可以在任何实现了 JVM 规范的虚拟机上运行，这是'一次编译，到处运行'的基础。",
            "【魔数与版本】Class 文件以魔数 0xCAFEBABE 开头（咖啡宝贝），标识这是一个有效的 Class 文件。紧接着是版本号：主版本号决定最低 JVM 版本要求，如 Java 21 对应主版本号 65。高版本 JVM 可以运行低版本 Class 文件。",
            "【常量池】常量池（Constant Pool）是 Class 文件的核心部分，存储字面量（数值、字符串）和符号引用（类名、字段名、方法名、描述符）。常量池有 17 种类型，如 CONSTANT_Utf8、CONSTANT_Class、CONSTANT_Methodref 等。",
            "【类信息】访问标志（access_flags）表示类的修饰符（public、final、interface、abstract 等）。this_class 和 super_class 指向常量池中的 CONSTANT_Class 条目，表示本类和父类。interfaces 数组列出实现的接口。",
            "【字段表与方法表】field_info 结构描述字段（名称、描述符、访问标志、属性）。method_info 结构描述方法。属性表存储附加信息，如 Code（字节码）、LineNumberTable（行号映射）、SourceFile（源文件名）。"
        ],
        keyDifficulties: [
            "【描述符】字段描述符用单字符表示基本类型：B=byte、C=char、D=double、F=float、I=int、J=long、S=short、Z=boolean。对象类型用 L类名; 表示，数组用 [ 前缀。方法描述符格式：(参数)返回值，如 (II)V 表示两个 int 参数返回 void。",
            "【常量池索引】Class 文件大量使用索引引用常量池。索引从 1 开始（0 保留）。Long 和 Double 占两个常量池位置。理解索引关系是读懂 Class 文件的关键。",
            "【属性表】属性是可扩展机制，JVM 规范定义了 30 种预定义属性。Code 属性最重要，包含方法字节码、操作数栈深度、局部变量表大小、异常表、行号表等。属性可以嵌套（如 Code 内嵌 LineNumberTable）。",
            "【版本兼容性】高版本 JVM 可以运行低版本 Class 文件，但反之不行。预览特性使用 minor_version=65535 标记。模块信息文件（module-info.class）有特殊格式要求。"
        ],
        handsOnPath: [
            "编写简单的 HelloWorld.java，使用 javac 编译，然后用 hexdump 或 xxd 查看二进制格式，找到 CAFEBABE。",
            "使用 javap -v HelloWorld.class 查看完整的 Class 文件结构，重点观察常量池内容。",
            "对比 Java 8 和 Java 21 编译的同一个类，观察版本号差异。",
            "编写包含泛型的类，使用 javap -s 查看类型擦除后的描述符和 Signature 属性。",
            "故意用高版本 JDK 编译，尝试在低版本 JVM 运行，观察 UnsupportedClassVersionError。"
        ],
        selfCheck: [
            "Class 文件的魔数是什么？它的作用是什么？",
            "常量池存储哪些类型的数据？有多少种常量类型？",
            "如何用描述符表示 int[] 类型？如何表示 List<String> 类型？",
            "访问标志有哪些常见值？它们表示什么含义？",
            "Code 属性包含哪些信息？",
            "为什么 Long 和 Double 常量占两个常量池位置？"
        ],
        extensions: [
            "使用 ASM 的 ClassReader 解析 Class 文件，打印每个结构的详细信息。",
            "研究 Record 类型（Java 14+）在 Class 文件中的表示：Record 属性。",
            "了解 Sealed Classes（Java 17+）的 PermittedSubclasses 属性。",
            "探索 module-info.class 的特殊格式和 Module 属性。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-4.html",
            "https://blog.jamesdbloom.com/JavaCodeToByteCode_PartOne.html",
            "https://docs.oracle.com/en/java/javase/21/docs/specs/man/javap.html"
        ]
    },
    "jvm-w5-2": {
        lessonId: "jvm-w5-2",
        background: [
            "【指令格式】JVM 字节码指令由单字节的操作码（opcode，0-255）和零个或多个操作数组成。操作码决定指令类型，操作数提供附加参数。大多数指令隐式从操作数栈取操作数、将结果压回栈。",
            "【加载/存储指令】iload/istore 加载/存储 int 到局部变量表；aload/astore 操作引用类型；lload/lstore 操作 long。带数字后缀的变体（如 iload_0）是优化的短指令，操作特定位置的局部变量。",
            "【运算指令】算术运算：iadd、isub、imul、idiv、irem（整数加减乘除取余）。位运算：iand、ior、ixor、ishl、ishr、iushr。比较：lcmp、fcmpg、dcmpg。每种数据类型有对应的指令集（i/l/f/d 前缀）。",
            "【类型转换】JVM 不会自动进行类型转换，需要显式使用转换指令：i2l、i2f、i2d（int 转其他）；l2i、l2f、l2d（long 转其他）；f2i、f2l、f2d；d2i、d2l、d2f。窄化转换可能丢失精度。",
            "【对象操作】new 创建对象（只分配内存，不调用构造器）；getfield/putfield 访问实例字段；getstatic/putstatic 访问静态字段；invokevirtual/invokespecial/invokestatic/invokeinterface 调用方法。"
        ],
        keyDifficulties: [
            "【栈操作指令】dup 复制栈顶值；dup_x1 复制并插入到第二位；dup2 复制栈顶 1-2 个值（Category 2 类型占两个槽位）。pop/pop2 弹出值。swap 交换栈顶两个值。这些指令用于构建复杂的栈布局。",
            "【控制转移指令】条件分支：if_icmpeq、if_icmpne、if_icmplt 等比较两个 int 后跳转；ifeq、ifne、iflt 等与零比较。goto 无条件跳转。tableswitch/lookupswitch 实现 switch 语句。",
            "【异常处理】athrow 抛出异常对象。异常处理不是用指令实现，而是通过 Code 属性中的异常表（exception_table）。异常表记录：起始 PC、结束 PC、处理器 PC、捕获类型。",
            "【invokedynamic】Java 7 引入，用于动态语言支持和 Lambda 表达式。它不直接绑定目标方法，而是调用引导方法（Bootstrap Method）返回 CallSite，然后调用 CallSite 关联的 MethodHandle。"
        ],
        handsOnPath: [
            "编写包含算术运算的方法，用 javap -c 查看生成的字节码，对照源码理解每条指令。",
            "编写包含 if-else 和循环的代码，观察条件跳转指令和 goto 指令。",
            "编写包含 switch 的代码，对比稀疏 case 和连续 case 生成的 lookupswitch 和 tableswitch。",
            "编写 try-catch 块，用 javap -v 查看异常表（Exception table）的结构。",
            "编写 Lambda 表达式，观察生成的 invokedynamic 指令和 BootstrapMethods 属性。"
        ],
        selfCheck: [
            "JVM 字节码指令的基本格式是什么？操作码占几个字节？",
            "iload_0 和 iload 0 有什么区别？",
            "iadd 指令从哪里获取操作数？结果放在哪里？",
            "如何实现 int 到 long 的类型转换？需要什么指令？",
            "tableswitch 和 lookupswitch 的区别是什么？各适用于什么场景？",
            "invokedynamic 与其他 invoke 指令有什么不同？"
        ],
        extensions: [
            "研究 JVM 指令集的正交性设计：为什么没有 byte/short/char 的专用运算指令？",
            "了解 wide 指令如何扩展局部变量索引范围（从 256 到 65536）。",
            "探索 jsr/ret 指令的历史（用于 finally 块实现，现已废弃）。",
            "研究 VarHandle 操作如何生成字节码（Java 9+ 的原子操作）。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-6.html",
            "https://en.wikipedia.org/wiki/List_of_Java_bytecode_instructions",
            "https://docs.oracle.com/en/java/javase/21/docs/specs/man/javap.html"
        ]
    },
    "jvm-w5-3": {
        lessonId: "jvm-w5-3",
        background: [
            "【javap 工具】javap 是 JDK 自带的反汇编工具，将 Class 文件转换为人类可读的格式。-c 选项显示字节码指令；-v 显示详细信息包括常量池、行号表、局部变量表；-p 显示私有成员；-s 显示内部签名。",
            "【ASM 框架】ASM 是低级字节码操作框架，提供 ClassReader（读取）、ClassWriter（生成）、ClassVisitor（转换）三个核心类。它使用访问者模式，逐个访问 Class 文件的结构。ASM 是很多框架（如 Spring、Hibernate）的基础。",
            "【ByteBuddy】ByteBuddy 是高级字节码生成库，提供流畅的 API 简化字节码操作。相比 ASM，ByteBuddy 更易用，支持 Java Agent、运行时类生成、方法拦截等场景。它是 Mockito 2+ 的底层实现。",
            "【JITWatch】JITWatch 是 JIT 编译分析工具，可视化展示 HotSpot 的编译决策。它分析 -XX:+LogCompilation 生成的日志，显示哪些方法被编译、编译耗时、内联决策、逆优化等信息。",
            "【IDEA/Eclipse 插件】现代 IDE 提供字节码查看插件：IntelliJ IDEA 的 jclasslib 插件、Eclipse 的 Bytecode Visualizer。它们提供图形化界面查看 Class 文件结构，支持导航和搜索。"
        ],
        keyDifficulties: [
            "【ASM 访问者模式】ASM 的 ClassVisitor 定义了 visit、visitField、visitMethod、visitEnd 等回调方法。自定义 ClassVisitor 可以在访问过程中修改类结构。链式调用多个 Visitor 可以组合多个转换。",
            "【ByteBuddy Agent】ByteBuddy 支持创建 Java Agent：premain（启动时）或 agentmain（运行时）。Agent 可以拦截类加载、修改字节码，常用于 APM（应用性能监控）、Mock 框架、热修复等场景。",
            "【javap 输出解读】javap -v 输出包含：Classfile 路径、版本、访问标志、常量池（#1、#2...）、字段、方法。Code 属性内有 stack（最大栈深）、locals（局部变量数）、args_size（参数数）。理解这些需要熟悉 JVM 规范。",
            "【字节码验证】修改字节码时必须保证正确性：操作数栈平衡、类型安全、控制流正确。ASM 的 ClassWriter(COMPUTE_FRAMES) 可以自动计算栈帧信息，但性能开销较大。"
        ],
        handsOnPath: [
            "使用 javap -v -c 分析复杂类（如包含内部类、泛型、Lambda 的类），理解每个部分的含义。",
            "使用 ASM 编写简单的类生成器：生成一个 HelloWorld 类并运行。",
            "使用 ByteBuddy 创建动态代理：拦截方法调用，添加日志输出。",
            "安装 jclasslib 插件，在 IDE 中图形化浏览 Class 文件结构。",
            "使用 JITWatch 分析应用的 JIT 编译日志，找出热点方法和内联情况。"
        ],
        selfCheck: [
            "javap -c 和 javap -v 的区别是什么？",
            "ASM 框架的三个核心类是什么？各有什么作用？",
            "ByteBuddy 相比 ASM 有什么优势？",
            "如何使用 ByteBuddy 创建 Java Agent？",
            "JITWatch 分析的是什么日志？如何生成这个日志？",
            "为什么修改字节码时要注意操作数栈平衡？"
        ],
        extensions: [
            "研究 cglib 和 Javassist 等其他字节码库，对比它们与 ASM、ByteBuddy 的差异。",
            "了解 Instrumentation API 如何支持运行时类重定义（redefineClasses）和重转换（retransformClasses）。",
            "探索 Arthas 如何使用字节码技术实现运行时诊断（watch、trace、monitor 等）。",
            "研究 async-profiler 如何通过 JVMTI 采样获取调用栈信息。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/docs/specs/man/javap.html",
            "https://asm.ow2.io/",
            "https://bytebuddy.net/"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w5-1": [
        {
            id: "jvm-w5-1-q1",
            question: "Class 文件的魔数是什么？",
            options: [
                "0xDEADBEEF",
                "0xCAFEBABE",
                "0x12345678",
                "0xFFFFFFFF"
            ],
            answer: 1,
            rationale: "Class 文件以魔数 0xCAFEBABE（咖啡宝贝）开头，标识这是一个有效的 Java Class 文件。"
        },
        {
            id: "jvm-w5-1-q2",
            question: "Java 21 编译的 Class 文件主版本号是多少？",
            options: [
                "52",
                "55",
                "61",
                "65"
            ],
            answer: 3,
            rationale: "Java 21 对应主版本号 65。Java 8 是 52，Java 11 是 55，Java 17 是 61。"
        },
        {
            id: "jvm-w5-1-q3",
            question: "常量池中有多少种常量类型？",
            options: [
                "10 种",
                "14 种",
                "17 种",
                "20 种"
            ],
            answer: 2,
            rationale: "常量池有 17 种常量类型，包括 CONSTANT_Utf8、CONSTANT_Integer、CONSTANT_Class、CONSTANT_Methodref 等。"
        },
        {
            id: "jvm-w5-1-q4",
            question: "如何用描述符表示 String 类型？",
            options: [
                "S",
                "String",
                "Ljava/lang/String;",
                "[String"
            ],
            answer: 2,
            rationale: "对象类型用 L类名; 格式表示，String 类型描述符为 Ljava/lang/String;（注意末尾的分号）。"
        },
        {
            id: "jvm-w5-1-q5",
            question: "描述符中 I 表示什么类型？",
            options: [
                "interface",
                "int",
                "Integer",
                "instance"
            ],
            answer: 1,
            rationale: "描述符用单字符表示基本类型：I=int、J=long、F=float、D=double、B=byte、C=char、S=short、Z=boolean。"
        },
        {
            id: "jvm-w5-1-q6",
            question: "为什么 Long 和 Double 常量占两个常量池位置？",
            options: [
                "为了对齐",
                "它们是 64 位值，常量池条目按 32 位设计",
                "历史遗留问题",
                "为了提高访问速度"
            ],
            answer: 1,
            rationale: "Long 和 Double 是 64 位值，而常量池条目的设计基于 32 位，所以它们占用两个连续的常量池位置。"
        },
        {
            id: "jvm-w5-1-q7",
            question: "Code 属性包含哪些信息？",
            options: [
                "只包含字节码指令",
                "字节码、最大栈深、局部变量表大小、异常表、行号表等",
                "只包含源代码",
                "只包含方法签名"
            ],
            answer: 1,
            rationale: "Code 属性包含：方法字节码（code）、最大操作数栈深度（max_stack）、局部变量表大小（max_locals）、异常表、行号表等。"
        },
        {
            id: "jvm-w5-1-q8",
            question: "方法描述符 (II)V 表示什么？",
            options: [
                "两个 Integer 参数，返回 void",
                "两个 int 参数，返回 void",
                "两个 int 参数，返回 int",
                "一个 int 数组参数，返回 void"
            ],
            answer: 1,
            rationale: "方法描述符格式：(参数)返回值。I=int，V=void。(II)V 表示两个 int 参数，返回 void。"
        },
        {
            id: "jvm-w5-1-q9",
            question: "ACC_FINAL 和 ACC_ABSTRACT 可以同时设置吗？",
            options: [
                "可以",
                "不可以（对于非接口类）",
                "只有接口可以",
                "只有方法可以"
            ],
            answer: 1,
            rationale: "对于非接口类，ACC_FINAL 和 ACC_ABSTRACT 不能同时设置，因为 final 类不能被继承，abstract 类必须被继承。"
        },
        {
            id: "jvm-w5-1-q10",
            question: "常量池索引从几开始？",
            options: [
                "0",
                "1",
                "-1",
                "取决于常量池大小"
            ],
            answer: 1,
            rationale: "常量池索引从 1 开始，索引 0 是保留的，表示'无常量池条目引用'。"
        },
        {
            id: "jvm-w5-1-q11",
            question: "数组类型 int[][] 的描述符是什么？",
            options: [
                "[I[I",
                "[[I",
                "I[][]",
                "[int][int]"
            ],
            answer: 1,
            rationale: "数组用 [ 前缀表示维度。int[][] 是二维 int 数组，描述符为 [[I（两个 [ 表示二维）。"
        },
        {
            id: "jvm-w5-1-q12",
            question: "预览特性使用什么版本号标记？",
            options: [
                "minor_version = 0",
                "minor_version = 65535",
                "major_version = 0",
                "major_version = 65535"
            ],
            answer: 1,
            rationale: "预览特性使用 minor_version = 65535 标记。正常发布版本 minor_version 为 0。"
        }
    ],
    "jvm-w5-2": [
        {
            id: "jvm-w5-2-q1",
            question: "JVM 字节码操作码占几个字节？",
            options: [
                "1 字节",
                "2 字节",
                "4 字节",
                "可变长度"
            ],
            answer: 0,
            rationale: "JVM 字节码操作码固定占 1 字节（0-255），后面跟随零个或多个操作数。"
        },
        {
            id: "jvm-w5-2-q2",
            question: "iload 和 iload_0 的区别是什么？",
            options: [
                "完全相同",
                "iload_0 是优化的短指令，不需要操作数",
                "iload_0 只能用于第一个局部变量",
                "iload 更快"
            ],
            answer: 1,
            rationale: "iload_0 是优化的短指令变体，隐含操作数为 0，不需要额外的操作数字节。iload 需要一个字节的操作数指定变量索引。"
        },
        {
            id: "jvm-w5-2-q3",
            question: "iadd 指令从哪里获取操作数？",
            options: [
                "从操作数字节获取",
                "从操作数栈弹出两个值",
                "从局部变量表获取",
                "从常量池获取"
            ],
            answer: 1,
            rationale: "iadd 从操作数栈弹出两个 int 值，相加后将结果压回栈顶。大多数运算指令都是栈操作。"
        },
        {
            id: "jvm-w5-2-q4",
            question: "i2l 指令的作用是什么？",
            options: [
                "int 转 long",
                "long 转 int",
                "int 转 List",
                "int 加载到局部变量"
            ],
            answer: 0,
            rationale: "i2l 是类型转换指令，将 int 值转换为 long 值。命名规则：源类型2目标类型。"
        },
        {
            id: "jvm-w5-2-q5",
            question: "tableswitch 和 lookupswitch 的区别是什么？",
            options: [
                "完全相同",
                "tableswitch 用于连续 case，lookupswitch 用于稀疏 case",
                "tableswitch 更慢",
                "lookupswitch 只能用于字符串"
            ],
            answer: 1,
            rationale: "tableswitch 用于 case 值连续的情况，通过索引直接跳转（O(1)）；lookupswitch 用于 case 值稀疏的情况，需要二分查找（O(log n)）。"
        },
        {
            id: "jvm-w5-2-q6",
            question: "new 指令创建对象后会发生什么？",
            options: [
                "对象完全初始化完成",
                "只分配内存，不调用构造器",
                "自动调用构造器",
                "对象被添加到 GC 列表"
            ],
            answer: 1,
            rationale: "new 指令只分配内存并初始化为零值，不调用构造器。构造器通过 invokespecial 指令单独调用 <init> 方法。"
        },
        {
            id: "jvm-w5-2-q7",
            question: "异常处理在字节码层面如何实现？",
            options: [
                "使用专门的 try/catch 指令",
                "通过 Code 属性中的异常表",
                "使用 goto 指令跳转",
                "使用标签"
            ],
            answer: 1,
            rationale: "异常处理通过 Code 属性中的异常表（exception_table）实现，不是用指令。异常表记录：起始 PC、结束 PC、处理器 PC、捕获类型。"
        },
        {
            id: "jvm-w5-2-q8",
            question: "invokedynamic 指令的主要用途是什么？",
            options: [
                "调用静态方法",
                "动态语言支持和 Lambda 表达式",
                "调用构造器",
                "调用私有方法"
            ],
            answer: 1,
            rationale: "invokedynamic 是 Java 7 引入的，用于动态语言支持和 Lambda 表达式。它通过引导方法动态绑定调用目标。"
        },
        {
            id: "jvm-w5-2-q9",
            question: "dup 指令的作用是什么？",
            options: [
                "删除栈顶值",
                "复制栈顶值",
                "交换栈顶两个值",
                "将栈清空"
            ],
            answer: 1,
            rationale: "dup 指令复制操作数栈栈顶的值，并将复制的值压入栈顶。常用于需要多次使用同一个值的场景。"
        },
        {
            id: "jvm-w5-2-q10",
            question: "athrow 指令的作用是什么？",
            options: [
                "创建异常对象",
                "抛出操作数栈顶的异常对象",
                "捕获异常",
                "声明方法可能抛出的异常"
            ],
            answer: 1,
            rationale: "athrow 指令从操作数栈弹出一个引用（必须是 Throwable 或其子类），并抛出该异常。"
        },
        {
            id: "jvm-w5-2-q11",
            question: "为什么没有 byte/short/char 的专用运算指令？",
            options: [
                "JVM 不支持这些类型",
                "它们在运算时被提升为 int，使用 int 指令",
                "为了节省指令空间",
                "历史遗留问题"
            ],
            answer: 1,
            rationale: "byte、short、char 在 JVM 运算时都被提升为 int，使用 int 的运算指令。这是 JVM 指令集的正交性设计。"
        },
        {
            id: "jvm-w5-2-q12",
            question: "invokespecial 指令用于调用什么方法？",
            options: [
                "静态方法",
                "构造器、私有方法、super 方法",
                "接口方法",
                "虚方法"
            ],
            answer: 1,
            rationale: "invokespecial 用于调用构造器（<init>）、私有方法、父类方法（super.method()）。这些方法不需要动态分派。"
        }
    ],
    "jvm-w5-3": [
        {
            id: "jvm-w5-3-q1",
            question: "javap -c 选项的作用是什么？",
            options: [
                "显示常量池",
                "反汇编字节码指令",
                "显示私有成员",
                "显示行号"
            ],
            answer: 1,
            rationale: "javap -c 选项反汇编 Class 文件，显示方法的字节码指令。-v 显示详细信息包括常量池。"
        },
        {
            id: "jvm-w5-3-q2",
            question: "ASM 框架的三个核心类是什么？",
            options: [
                "ClassFile、Method、Field",
                "ClassReader、ClassWriter、ClassVisitor",
                "ByteCode、Instruction、Operand",
                "Parser、Generator、Transformer"
            ],
            answer: 1,
            rationale: "ASM 的三个核心类：ClassReader（读取解析 Class 文件）、ClassWriter（生成 Class 文件）、ClassVisitor（访问/转换类结构）。"
        },
        {
            id: "jvm-w5-3-q3",
            question: "ByteBuddy 相比 ASM 有什么优势？",
            options: [
                "更底层，性能更高",
                "API 更友好，更易用",
                "只能用于 Java Agent",
                "不需要了解字节码"
            ],
            answer: 1,
            rationale: "ByteBuddy 提供流畅的高级 API，比 ASM 更易用。它封装了底层细节，同时保持灵活性。但 ASM 更底层、更灵活。"
        },
        {
            id: "jvm-w5-3-q4",
            question: "JITWatch 分析的是什么日志？",
            options: [
                "GC 日志",
                "-XX:+LogCompilation 生成的编译日志",
                "应用程序日志",
                "系统日志"
            ],
            answer: 1,
            rationale: "JITWatch 分析 -XX:+LogCompilation 生成的 JIT 编译日志，可视化展示编译决策、内联、逆优化等信息。"
        },
        {
            id: "jvm-w5-3-q5",
            question: "ASM 使用什么设计模式？",
            options: [
                "工厂模式",
                "访问者模式",
                "单例模式",
                "策略模式"
            ],
            answer: 1,
            rationale: "ASM 使用访问者模式（Visitor Pattern）。ClassVisitor 定义了 visit、visitField、visitMethod 等回调方法。"
        },
        {
            id: "jvm-w5-3-q6",
            question: "ByteBuddy Agent 的 premain 方法何时执行？",
            options: [
                "程序启动时，main 方法之前",
                "程序退出时",
                "每次类加载时",
                "只在调试模式执行"
            ],
            answer: 0,
            rationale: "premain 是 Java Agent 的入口方法，在 JVM 启动时、main 方法执行之前调用。agentmain 用于运行时附加。"
        },
        {
            id: "jvm-w5-3-q7",
            question: "javap -v 输出中的 stack 表示什么？",
            options: [
                "方法的参数个数",
                "方法执行时的最大操作数栈深度",
                "方法的返回值类型",
                "方法的调用栈深度"
            ],
            answer: 1,
            rationale: "stack 表示方法执行时的最大操作数栈深度（max_stack），JVM 根据这个值分配操作数栈空间。"
        },
        {
            id: "jvm-w5-3-q8",
            question: "ClassWriter(COMPUTE_FRAMES) 的作用是什么？",
            options: [
                "计算常量池大小",
                "自动计算栈帧信息",
                "优化字节码",
                "验证字节码正确性"
            ],
            answer: 1,
            rationale: "ClassWriter(COMPUTE_FRAMES) 让 ASM 自动计算 StackMapTable（栈帧信息），简化字节码生成，但有性能开销。"
        },
        {
            id: "jvm-w5-3-q9",
            question: "Mockito 2+ 使用什么字节码库？",
            options: [
                "cglib",
                "Javassist",
                "ByteBuddy",
                "ASM"
            ],
            answer: 2,
            rationale: "Mockito 2+ 从 cglib 迁移到 ByteBuddy 作为底层字节码生成库，因为 ByteBuddy 更现代且维护更活跃。"
        },
        {
            id: "jvm-w5-3-q10",
            question: "IntelliJ IDEA 查看字节码的插件叫什么？",
            options: [
                "Bytecode Viewer",
                "jclasslib",
                "ASM Plugin",
                "Class Inspector"
            ],
            answer: 1,
            rationale: "jclasslib 是 IntelliJ IDEA 中流行的字节码查看插件，提供图形化界面浏览 Class 文件结构。"
        },
        {
            id: "jvm-w5-3-q11",
            question: "修改字节码时为什么要注意操作数栈平衡？",
            options: [
                "影响性能",
                "影响可读性",
                "JVM 验证器会检查，不平衡会抛出 VerifyError",
                "只是最佳实践，不是必须的"
            ],
            answer: 2,
            rationale: "JVM 字节码验证器检查操作数栈平衡。如果方法结束时栈不为空，或栈下溢，验证会失败并抛出 VerifyError。"
        },
        {
            id: "jvm-w5-3-q12",
            question: "Arthas 使用什么技术实现运行时诊断？",
            options: [
                "GC 日志分析",
                "字节码技术（Instrumentation API）",
                "JMX 监控",
                "线程 dump"
            ],
            answer: 1,
            rationale: "Arthas 使用 Instrumentation API 进行字节码增强，实现 watch、trace、monitor 等运行时诊断功能。"
        }
    ]
}
