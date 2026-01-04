import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "jvm-w2-1": {
        lessonId: "jvm-w2-1",
        background: [
            "【HotSpot 定位】HotSpot 是 Oracle/OpenJDK 的默认 JVM 实现，是目前使用最广泛、最成熟稳定的 JVM。从 JRE 8 之后，Oracle 只保留服务器 VM（Server VM），移除了客户端 VM 和最小 VM。",
            "【热点探测】HotSpot 的名字来源于其核心技术——热点探测（Hotspot Detection）。JVM 在运行时分析代码，检测'热点'（性能瓶颈），然后对这些关键代码进行 JIT 编译优化。",
            "【分层编译】HotSpot 采用分层编译策略：C1 编译器（Client Compiler）快速编译，使用简单的 CFG SSA 表示；C2 编译器（Server Compiler）深度优化，使用 'sea of nodes' IR 进行激进内联和循环变换。",
            "【自适应编译】HotSpot 使用自适应编译器决定优化策略：标准解释器启动 → 代码运行时分析 → 检测热点 → JIT 编译优化。大部分很少执行的代码保持解释执行，只有关键路径被编译。",
            "【内联优化】内联（Inlining）是 HotSpot 的主要优化技术之一。通过将方法调用替换为方法体，消除调用开销并为其他优化创造条件。"
        ],
        keyDifficulties: [
            "【C1 vs C2 权衡】C1 编译快但优化简单，C2 优化深度但编译慢。分层编译（Tiered Compilation）结合两者：先用 C1 快速编译获得基本性能，识别真正的热点后用 C2 深度优化。",
            "【逆优化机制】Deoptimization 是将优化后的栈帧转回解释执行状态的过程。当编译器假设失效时（如假设某引用非空但实际为空），必须逆优化回退。这是投机优化的安全网。",
            "【TLAB 分配】Thread-Local Allocation Buffer 是 HotSpot 的快速分配优化。每个线程有私有的堆分配缓冲区，分配对象时无需同步，只需简单的指针碰撞（bump pointer）。",
            "【安全点机制】Safepoint 是所有 GC 根可知、堆一致性得到保证的执行点。GC 前需要协调所有线程到达安全点。过多安全点影响性能，过少导致 GC 延迟。"
        ],
        handsOnPath: [
            "使用 java -XX:+PrintCompilation 运行程序，观察哪些方法被编译、编译级别（0-4）、编译耗时。",
            "使用 java -XX:+PrintInlining 查看内联决策，了解哪些方法被内联、哪些因为太大或太热而跳过。",
            "使用 jcmd <pid> Compiler.codecache 查看代码缓存使用情况，了解编译代码的存储空间。",
            "使用 -XX:+UnlockDiagnosticVMOptions -XX:+LogCompilation 生成详细的编译日志，配合 JITWatch 可视化分析。",
            "对比 -XX:TieredStopAtLevel=1（只用 C1）和默认分层编译的性能差异，体会 C2 优化的价值。"
        ],
        selfCheck: [
            "HotSpot 的名字来源是什么？它的核心技术是什么？",
            "C1 和 C2 编译器的主要区别是什么？分层编译如何结合两者的优势？",
            "什么是逆优化（Deoptimization）？为什么需要这个机制？",
            "TLAB 是什么？它如何提高对象分配性能？",
            "什么是安全点（Safepoint）？为什么 GC 需要等待所有线程到达安全点？",
            "内联为什么是最重要的优化技术之一？"
        ],
        extensions: [
            "研究 Graal 编译器如何作为 C2 的替代：-XX:+UseJVMCICompiler。",
            "学习使用 JITWatch 分析编译日志，理解 JIT 编译决策过程。",
            "探索 Escape Analysis 如何影响对象分配：栈上分配、标量替换、锁消除。",
            "研究不同 GC 算法（G1、ZGC、Shenandoah）的特点和选择原则。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/vm/java-virtual-machine-technology-overview.html",
            "https://wiki.openjdk.org/display/HotSpot/Main",
            "https://openjdk.org/groups/hotspot/docs/HotSpotGlossary.html"
        ]
    },
    "jvm-w2-2": {
        lessonId: "jvm-w2-2",
        background: [
            "【OpenJ9 定位】Eclipse OpenJ9 是 IBM 开源的 JVM 实现，专为云环境优化。其核心优势是低内存占用和快速启动，适合微服务和容器化部署场景。",
            "【性能对比】官方测试显示：相比 HotSpot，OpenJ9 启动时间快 51%，启动后内存占用小 50%，负载期间内存占用小 33%。配合 Quarkus 框架可实现启动时间快 66%。",
            "【共享类缓存】Shared Class Cache（SCC）是 OpenJ9 的核心技术。通过在多个 JVM 实例间共享编译后的类数据，显著减少启动时间和内存占用。AOT 编译配合 SCC 进一步加速启动。",
            "【GraalVM 定位】GraalVM 提供高性能 JIT 编译器（Graal）和 Native Image 技术。Graal 编译器可作为 HotSpot C2 的替代，提供更好的峰值性能。",
            "【Native Image】GraalVM Native Image 将 Java 应用 AOT 编译为本地可执行文件，实现毫秒级启动、更低内存占用、更小的容器镜像。适合 Serverless 和云原生场景。"
        ],
        keyDifficulties: [
            "【HotSpot vs OpenJ9 取舍】HotSpot 峰值性能更高，适合长时间运行的应用；OpenJ9 启动快、内存省，适合短生命周期的微服务和 Serverless。选择取决于工作负载特点。",
            "【SCC 工作原理】SCC 将 AOT 编译的代码和类元数据存储在共享内存区。多个 JVM 实例可以读取同一个 SCC，避免重复编译。适合 Kubernetes 中同一镜像启动多个 Pod 的场景。",
            "【Native Image 限制】Native Image 采用'闭合世界假设'——编译时必须确定所有类和方法。反射、动态代理、序列化等需要额外配置。不支持运行时类加载。",
            "【GraalVM 多语言】GraalVM 支持在 JVM 上运行多种语言（JavaScript、Python、Ruby、R、WebAssembly）并实现语言间互操作。这通过 Truffle 框架实现。"
        ],
        handsOnPath: [
            "下载 Eclipse Temurin（HotSpot）和 Semeru（OpenJ9）同版本 JDK，对比相同应用的启动时间和内存占用。",
            "使用 OpenJ9 的 -Xshareclasses 参数启用共享类缓存，对比首次启动和后续启动的时间差异。",
            "下载 GraalVM，使用 native-image 命令将简单 Java 应用编译为本地可执行文件，对比启动时间。",
            "使用 GraalVM 的 --jvm 模式运行应用，与标准 HotSpot 对比性能，体验 Graal JIT 编译器。",
            "尝试在 GraalVM 上运行 JavaScript 代码：graalpython 或 js 命令，体验多语言互操作。"
        ],
        selfCheck: [
            "OpenJ9 相比 HotSpot 有什么优势？适合什么场景？",
            "什么是共享类缓存（SCC）？它如何加速启动？",
            "GraalVM 的两个核心特性是什么？",
            "Native Image 的'闭合世界假设'是什么意思？有什么限制？",
            "什么情况下应该选择 OpenJ9 而不是 HotSpot？",
            "GraalVM 如何支持多语言运行？"
        ],
        extensions: [
            "研究 OpenJ9 的 InstantOn 技术，了解如何进一步加速容器启动。",
            "学习 Spring Native / Quarkus Native 如何简化 Native Image 配置。",
            "探索 GraalVM Truffle 框架，了解如何实现新语言的 JVM 运行。",
            "对比 CRaC（Coordinated Restore at Checkpoint）和 Native Image 的启动优化策略。"
        ],
        sourceUrls: [
            "https://eclipse.dev/openj9/",
            "https://eclipse.dev/openj9/performance/",
            "https://www.graalvm.org/"
        ]
    },
    "jvm-w2-3": {
        lessonId: "jvm-w2-3",
        background: [
            "【发行版多样性】JDK 有多个发行版：Oracle JDK、Eclipse Temurin、Amazon Corretto、Azul Zulu、BellSoft Liberica 等。它们都基于 OpenJDK 源码构建，但在许可证、支持周期、额外特性上有所不同。",
            "【推荐选择】whichjdk.com 推荐 Eclipse Temurin 21 作为首选：'high-quality, vendor-neutral, and TCK-tested'，由 Red Hat、IBM、Microsoft 等主要公司支持，完全开源免费。",
            "【Temurin 特点】Eclipse Temurin 由 Adoptium 工作组提供，经过 Java SE TCK 认证和 AQAvit 验证。拥有 8 亿+下载量，被 Microsoft、Red Hat、MongoDB、Arm 等主要组织信任。",
            "【Oracle JDK 风险】Oracle JDK 的许可条款多次变更，'internal business operations'等模糊措辞带来法律不确定性。版本 11-16 曾要求生产环境付费。建议避免使用以规避许可风险。",
            "【LTS 策略】LTS（Long Term Support）版本提供长期支持和安全更新。当前推荐 Java 21 LTS，下一个 LTS 是 Java 25（2025 年 9 月）。非 LTS 版本每 6 个月更新一次。"
        ],
        keyDifficulties: [
            "【Oracle OpenJDK vs Oracle JDK】Oracle 提供两种构建：Oracle OpenJDK builds（免费但只有 6 个月更新）和 Oracle JDK（许可复杂）。对于 LTS 版本，Oracle OpenJDK builds 不提供长期更新，应选择 Temurin 或 Corretto。",
            "【TCK 认证重要性】TCK（Technology Compatibility Kit）认证确保 JDK 实现符合 Java 规范。未经 TCK 认证的构建可能有兼容性问题。Temurin、Corretto、Zulu 都通过了 TCK 认证。",
            "【版本选择策略】生产环境推荐使用 LTS 版本（21、17、11、8）以获得长期安全更新。开发/测试可以使用最新版本体验新特性。版本管理工具（如 SDKMAN!）方便在多版本间切换。",
            "【云厂商优化】Amazon Corretto 针对 AWS 环境优化，Azul Zulu 提供 CRaC 等特殊特性。如果深度使用某云平台，可以考虑对应的 JDK 发行版。"
        ],
        handsOnPath: [
            "使用 SDKMAN! 安装和管理多个 JDK 版本：sdk install java 21-tem（Temurin）、sdk install java 21-amzn（Corretto）。",
            "使用 java -version 检查 JDK 发行版和版本信息，对比不同发行版的输出。",
            "访问 adoptium.net 下载 Temurin，检查 sha256 校验和确保下载完整性。",
            "查看不同发行版的发布周期和支持策略文档，了解 LTS 版本的支持时间线。",
            "在 Docker 中对比官方 openjdk 镜像和 eclipse-temurin 镜像的大小和构建日期。"
        ],
        selfCheck: [
            "为什么 whichjdk.com 推荐 Eclipse Temurin 而不是 Oracle JDK？",
            "什么是 TCK 认证？为什么它很重要？",
            "Oracle OpenJDK builds 和 Oracle JDK 有什么区别？",
            "什么是 LTS 版本？当前推荐使用哪个 LTS 版本？",
            "Amazon Corretto 和 Azul Zulu 各有什么特点？",
            "如何使用 SDKMAN! 管理多个 JDK 版本？"
        ],
        extensions: [
            "研究 Java 模块系统（JPMS）对 JDK 发行版打包的影响。",
            "了解 jlink 如何创建自定义精简 JRE，减少容器镜像大小。",
            "探索 Azul CRaC 如何实现检查点/恢复快速启动。",
            "研究 GraalVM 社区版和企业版的功能差异。"
        ],
        sourceUrls: [
            "https://whichjdk.com/",
            "https://adoptium.net/"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w2-1": [
        {
            id: "jvm-w2-1-q1",
            question: "HotSpot JVM 的名字来源于什么技术？",
            options: [
                "热量管理技术",
                "热点探测和 JIT 编译技术",
                "高温运行环境",
                "热启动技术"
            ],
            answer: 1,
            rationale: "HotSpot 的名字来源于其核心技术——热点探测（Hotspot Detection），即在运行时分析代码，检测性能瓶颈（热点），然后对这些关键代码进行 JIT 编译优化。"
        },
        {
            id: "jvm-w2-1-q2",
            question: "HotSpot 的 C1 和 C2 编译器分别有什么特点？",
            options: [
                "C1 优化深度，C2 编译快速",
                "C1 编译快速但优化简单，C2 编译慢但优化深度",
                "C1 和 C2 完全相同",
                "C1 用于客户端，C2 用于服务器，性能相同"
            ],
            answer: 1,
            rationale: "C1（Client Compiler）快速编译，使用简单的 CFG SSA 表示；C2（Server Compiler）深度优化，使用 'sea of nodes' IR 进行激进内联和循环变换。分层编译结合两者优势。"
        },
        {
            id: "jvm-w2-1-q3",
            question: "什么是逆优化（Deoptimization）？",
            options: [
                "将解释执行转为编译执行",
                "将优化后的栈帧转回解释执行状态",
                "删除优化后的代码",
                "禁用所有优化"
            ],
            answer: 1,
            rationale: "Deoptimization 是将优化后的栈帧转回解释执行状态的过程。当编译器假设失效时（如假设某引用非空但实际为空），必须逆优化回退。"
        },
        {
            id: "jvm-w2-1-q4",
            question: "TLAB（Thread-Local Allocation Buffer）的作用是什么？",
            options: [
                "存储线程局部变量",
                "缓存 JIT 编译结果",
                "提供无需同步的快速对象分配",
                "管理线程栈"
            ],
            answer: 2,
            rationale: "TLAB 是每个线程私有的堆分配缓冲区。分配对象时无需同步，只需简单的指针碰撞（bump pointer），显著提高对象分配性能。"
        },
        {
            id: "jvm-w2-1-q5",
            question: "什么是安全点（Safepoint）？",
            options: [
                "安全检查的代码位置",
                "所有 GC 根可知、堆一致性得到保证的执行点",
                "线程安全的临界区",
                "异常处理的位置"
            ],
            answer: 1,
            rationale: "Safepoint 是所有 GC 根可知、堆一致性得到保证的执行点。GC 前需要协调所有线程到达安全点，确保垃圾收集可以安全进行。"
        },
        {
            id: "jvm-w2-1-q6",
            question: "HotSpot 的分层编译策略是什么？",
            options: [
                "所有代码都用 C2 编译",
                "所有代码都用 C1 编译",
                "先用 C1 快速编译，识别热点后用 C2 深度优化",
                "交替使用 C1 和 C2"
            ],
            answer: 2,
            rationale: "分层编译（Tiered Compilation）结合 C1 和 C2 的优势：先用 C1 快速编译获得基本性能，通过 profiling 识别真正的热点后用 C2 深度优化。"
        },
        {
            id: "jvm-w2-1-q7",
            question: "从 JRE 8 之后，Oracle 对 HotSpot VM 做了什么调整？",
            options: [
                "增加了更多 VM 类型",
                "只保留服务器 VM，移除了客户端 VM 和最小 VM",
                "完全重写了 VM",
                "分离为多个独立产品"
            ],
            answer: 1,
            rationale: "从 JRE 8 之后，Oracle 只保留服务器 VM（Server VM），移除了客户端 VM 和最小 VM，简化了 JVM 产品线。"
        },
        {
            id: "jvm-w2-1-q8",
            question: "内联（Inlining）优化的主要好处是什么？",
            options: [
                "减少内存使用",
                "消除方法调用开销并为其他优化创造条件",
                "加快编译速度",
                "提高代码可读性"
            ],
            answer: 1,
            rationale: "内联将方法调用替换为方法体，消除调用开销并为其他优化（如逃逸分析、循环优化）创造条件。这是 HotSpot 的主要优化技术之一。"
        },
        {
            id: "jvm-w2-1-q9",
            question: "HotSpot 的自适应编译策略是什么？",
            options: [
                "编译所有代码",
                "只编译第一次执行的代码",
                "分析运行时行为，只编译热点代码",
                "随机选择代码编译"
            ],
            answer: 2,
            rationale: "HotSpot 使用自适应编译：标准解释器启动 → 代码运行时分析 → 检测热点 → JIT 编译优化。大部分很少执行的代码保持解释执行，只有关键路径被编译。"
        },
        {
            id: "jvm-w2-1-q10",
            question: "偏向锁（Biased Locking）优化的目的是什么？",
            options: [
                "加速多线程竞争",
                "优化单线程重复获取同一锁的场景",
                "消除所有锁",
                "将锁转换为无锁操作"
            ],
            answer: 1,
            rationale: "偏向锁优化单线程重复获取同一锁的场景：即使释放锁后也保持逻辑所有权，重新获取时无需 CAS 操作。当其他线程竞争时才撤销偏向。"
        },
        {
            id: "jvm-w2-1-q11",
            question: "Remembered Set（记忆集）在 GC 中的作用是什么？",
            options: [
                "记录所有对象的创建历史",
                "跟踪跨代引用指针",
                "存储 GC 日志",
                "缓存最近访问的对象"
            ],
            answer: 1,
            rationale: "Remembered Set 是跟踪跨代引用指针的数据结构。在分代 GC 中，它记录老年代到新生代的引用，避免 Minor GC 时扫描整个老年代。"
        },
        {
            id: "jvm-w2-1-q12",
            question: "使用哪个 JVM 参数可以查看 JIT 编译信息？",
            options: [
                "-XX:+PrintGC",
                "-XX:+PrintCompilation",
                "-XX:+PrintMemory",
                "-XX:+PrintJIT"
            ],
            answer: 1,
            rationale: "-XX:+PrintCompilation 参数可以输出 JIT 编译信息，包括哪些方法被编译、编译级别（0-4）、编译耗时等。"
        }
    ],
    "jvm-w2-2": [
        {
            id: "jvm-w2-2-q1",
            question: "Eclipse OpenJ9 相比 HotSpot 的主要优势是什么？",
            options: [
                "更高的峰值性能",
                "更快的启动时间和更低的内存占用",
                "更多的语言支持",
                "更好的调试能力"
            ],
            answer: 1,
            rationale: "OpenJ9 的主要优势是快速启动（比 HotSpot 快 51%）和低内存占用（启动后内存小 50%，负载期间小 33%），适合云环境和微服务。"
        },
        {
            id: "jvm-w2-2-q2",
            question: "OpenJ9 的共享类缓存（SCC）有什么作用？",
            options: [
                "共享运行时对象",
                "在多个 JVM 实例间共享编译后的类数据",
                "缓存网络请求",
                "共享配置文件"
            ],
            answer: 1,
            rationale: "Shared Class Cache（SCC）在多个 JVM 实例间共享 AOT 编译的代码和类元数据，避免重复编译，显著减少启动时间和内存占用。"
        },
        {
            id: "jvm-w2-2-q3",
            question: "GraalVM Native Image 的主要优势是什么？",
            options: [
                "更好的调试支持",
                "毫秒级启动、更低内存占用、更小的容器镜像",
                "更好的兼容性",
                "更快的编译速度"
            ],
            answer: 1,
            rationale: "GraalVM Native Image 将 Java 应用 AOT 编译为本地可执行文件，实现毫秒级启动、更低内存占用、更小的容器镜像，适合 Serverless 场景。"
        },
        {
            id: "jvm-w2-2-q4",
            question: "GraalVM Native Image 的'闭合世界假设'意味着什么？",
            options: [
                "只能在特定操作系统运行",
                "编译时必须确定所有类和方法，不支持运行时类加载",
                "不能使用网络",
                "只能单线程运行"
            ],
            answer: 1,
            rationale: "闭合世界假设意味着编译时必须确定所有会被使用的类和方法。反射、动态代理、序列化等需要额外配置，不支持运行时动态类加载。"
        },
        {
            id: "jvm-w2-2-q5",
            question: "什么场景应该选择 OpenJ9 而不是 HotSpot？",
            options: [
                "需要最高峰值性能的长时间运行应用",
                "需要快速启动和低内存占用的微服务和 Serverless",
                "需要最新语言特性的开发环境",
                "需要图形界面的桌面应用"
            ],
            answer: 1,
            rationale: "OpenJ9 适合短生命周期、需要快速启动和低内存占用的微服务和 Serverless 场景。HotSpot 更适合需要峰值性能的长时间运行应用。"
        },
        {
            id: "jvm-w2-2-q6",
            question: "GraalVM 如何支持多语言运行？",
            options: [
                "将所有语言编译为 Java",
                "通过 Truffle 框架在 JVM 上实现多语言解释器",
                "使用多个独立的虚拟机",
                "通过 JNI 调用"
            ],
            answer: 1,
            rationale: "GraalVM 通过 Truffle 框架支持多语言运行。Truffle 是语言实现框架，可以在 JVM 上运行 JavaScript、Python、Ruby、R、WebAssembly 等语言。"
        },
        {
            id: "jvm-w2-2-q7",
            question: "OpenJ9 配合 Quarkus 框架可以实现多快的启动时间提升？",
            options: [
                "20% 更快",
                "40% 更快",
                "66% 更快",
                "100% 更快"
            ],
            answer: 2,
            rationale: "官方测试显示，OpenJ9 配合 Quarkus 框架可以实现启动时间快 66%，这是通过 SCC 和 AOT 技术共同优化的结果。"
        },
        {
            id: "jvm-w2-2-q8",
            question: "Graal 编译器可以作为 HotSpot 中哪个编译器的替代？",
            options: [
                "C1 编译器",
                "C2 编译器",
                "解释器",
                "字节码编译器"
            ],
            answer: 1,
            rationale: "Graal 编译器可以通过 -XX:+UseJVMCICompiler 作为 HotSpot C2 编译器的替代，提供更好的峰值性能和更多优化技术。"
        },
        {
            id: "jvm-w2-2-q9",
            question: "OpenJ9 在负载期间相比 HotSpot 内存占用减少多少？",
            options: [
                "10%",
                "25%",
                "33%",
                "50%"
            ],
            answer: 2,
            rationale: "官方测试显示，OpenJ9 在负载期间（during load）内存占用比 HotSpot 小 33%，启动后（after startup）小 50%。"
        },
        {
            id: "jvm-w2-2-q10",
            question: "使用 OpenJ9 的 SCC 需要什么 JVM 参数？",
            options: [
                "-Xshared",
                "-Xshareclasses",
                "-Xscc",
                "-Xcache"
            ],
            answer: 1,
            rationale: "-Xshareclasses 参数启用 OpenJ9 的共享类缓存（SCC）功能，允许多个 JVM 实例共享 AOT 编译的代码和类元数据。"
        },
        {
            id: "jvm-w2-2-q11",
            question: "GraalVM 支持哪些编程语言？",
            options: [
                "只支持 Java",
                "只支持 Java 和 JavaScript",
                "JavaScript、Python、Ruby、R、WebAssembly 等多种语言",
                "只支持 JVM 语言"
            ],
            answer: 2,
            rationale: "GraalVM 通过 Truffle 框架支持多种语言：JavaScript、Python、Ruby、R、WebAssembly 等，并实现语言间的互操作。"
        },
        {
            id: "jvm-w2-2-q12",
            question: "Native Image 技术有什么限制？",
            options: [
                "只能在 Linux 上运行",
                "不支持多线程",
                "反射、动态代理等需要额外配置，不支持运行时类加载",
                "不能处理大于 1GB 的堆"
            ],
            answer: 2,
            rationale: "Native Image 采用闭合世界假设，反射、动态代理、序列化等动态特性需要额外的元数据配置，且不支持运行时动态类加载。"
        }
    ],
    "jvm-w2-3": [
        {
            id: "jvm-w2-3-q1",
            question: "whichjdk.com 推荐使用哪个 JDK 发行版？",
            options: [
                "Oracle JDK",
                "Oracle OpenJDK builds",
                "Eclipse Temurin",
                "Amazon Corretto"
            ],
            answer: 2,
            rationale: "whichjdk.com 推荐 Eclipse Temurin 21：'high-quality, vendor-neutral, and TCK-tested'，由 Red Hat、IBM、Microsoft 等主要公司支持，完全开源免费。"
        },
        {
            id: "jvm-w2-3-q2",
            question: "为什么不推荐使用 Oracle JDK？",
            options: [
                "性能较差",
                "不支持新特性",
                "许可条款不清晰，存在法律风险",
                "不兼容标准 Java"
            ],
            answer: 2,
            rationale: "Oracle JDK 的许可条款多次变更，'internal business operations'等模糊措辞带来法律不确定性。版本 11-16 曾要求生产环境付费。"
        },
        {
            id: "jvm-w2-3-q3",
            question: "什么是 TCK 认证？",
            options: [
                "性能测试认证",
                "安全审计认证",
                "确保 JDK 实现符合 Java 规范的兼容性测试",
                "代码质量认证"
            ],
            answer: 2,
            rationale: "TCK（Technology Compatibility Kit）认证确保 JDK 实现符合 Java 规范。未经 TCK 认证的构建可能有兼容性问题。Temurin、Corretto、Zulu 都通过了 TCK 认证。"
        },
        {
            id: "jvm-w2-3-q4",
            question: "Oracle OpenJDK builds 的主要问题是什么？",
            options: [
                "需要付费",
                "只有 6 个月更新，LTS 版本也不提供长期支持",
                "不兼容标准 Java",
                "性能较差"
            ],
            answer: 1,
            rationale: "Oracle OpenJDK builds 免费但只提供 6 个月更新，即使是 LTS 版本也不提供长期安全更新。生产环境应选择 Temurin 或 Corretto 以获得长期支持。"
        },
        {
            id: "jvm-w2-3-q5",
            question: "当前推荐使用哪个 LTS 版本？",
            options: [
                "Java 8",
                "Java 11",
                "Java 17",
                "Java 21"
            ],
            answer: 3,
            rationale: "当前推荐使用 Java 21 LTS。下一个 LTS 版本是 Java 25（2025 年 9 月）。LTS 版本提供长期安全更新和稳定性。"
        },
        {
            id: "jvm-w2-3-q6",
            question: "Eclipse Temurin 由哪个组织提供？",
            options: [
                "Oracle",
                "Eclipse Foundation / Adoptium 工作组",
                "Amazon",
                "Red Hat"
            ],
            answer: 1,
            rationale: "Eclipse Temurin 由 Eclipse Foundation 下的 Adoptium 工作组提供，经过 Java SE TCK 认证和 AQAvit 验证，拥有 8 亿+下载量。"
        },
        {
            id: "jvm-w2-3-q7",
            question: "使用什么工具可以方便地管理多个 JDK 版本？",
            options: [
                "Maven",
                "Gradle",
                "SDKMAN!",
                "Docker"
            ],
            answer: 2,
            rationale: "SDKMAN! 是管理多个 JDK 版本的便捷工具，可以轻松安装、切换不同发行版和版本，如 sdk install java 21-tem。"
        },
        {
            id: "jvm-w2-3-q8",
            question: "Amazon Corretto 有什么特点？",
            options: [
                "只能在 AWS 上运行",
                "针对 AWS 环境优化，提供长期更新和强 AWS 集成",
                "不支持 LTS 版本",
                "需要付费使用"
            ],
            answer: 1,
            rationale: "Amazon Corretto 是云优化的 JDK，提供长期更新，与 AWS 服务深度集成。虽然针对 AWS 优化，但可以在任何环境运行。"
        },
        {
            id: "jvm-w2-3-q9",
            question: "BellSoft Liberica 被哪个著名框架使用？",
            options: [
                "Quarkus",
                "Micronaut",
                "Spring Boot",
                "Helidon"
            ],
            answer: 2,
            rationale: "BellSoft Liberica 提供广泛的操作系统和架构支持，被 Spring Boot 官方使用。它是生产就绪的 JDK 发行版之一。"
        },
        {
            id: "jvm-w2-3-q10",
            question: "Azul Zulu 提供什么特殊特性？",
            options: [
                "图形界面工具",
                "数据库集成",
                "CRaC（检查点/恢复）等特殊特性",
                "AI 支持"
            ],
            answer: 2,
            rationale: "Azul Zulu 提供广泛的平台支持和企业级服务，以及 CRaC（Coordinated Restore at Checkpoint）等特殊特性用于快速启动优化。"
        },
        {
            id: "jvm-w2-3-q11",
            question: "LTS 版本的发布周期是怎样的？",
            options: [
                "每 6 个月一个 LTS",
                "每年一个 LTS",
                "每 2 年一个 LTS",
                "不固定"
            ],
            answer: 2,
            rationale: "Java 的 LTS 版本大约每 2 年发布一次。Java 21 是 2023 年的 LTS，Java 25 预计是 2025 年 9 月的下一个 LTS。"
        },
        {
            id: "jvm-w2-3-q12",
            question: "非 LTS 版本的更新周期是多久？",
            options: [
                "3 个月",
                "6 个月",
                "12 个月",
                "24 个月"
            ],
            answer: 1,
            rationale: "非 LTS 版本每 6 个月发布一次（3 月和 9 月），并且只提供到下一个版本发布为止的更新。生产环境建议使用 LTS 版本。"
        }
    ]
}
