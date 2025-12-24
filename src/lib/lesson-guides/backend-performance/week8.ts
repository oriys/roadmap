import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "bp-w8-1": {
        lessonId: "bp-w8-1",
        background: [
            "【GC 与延迟关系】很多长尾延迟（P99/P999）其实是由 GC 停顿引起的。垃圾回收器需要暂停应用线程（Stop-The-World, STW）来安全回收内存，这个暂停时间直接影响响应延迟。",
            "【Java GC 演进】Java 的 GC 从串行 GC → 并行 GC → CMS → G1 → ZGC/Shenandoah 演进。每代都在努力减少 STW 时间，ZGC 目标是将暂停控制在 10ms 以内。",
            "【G1 GC 原理】G1（Garbage-First）将堆分成多个等大小的 Region，优先回收垃圾最多的 Region。-XX:MaxGCPauseMillis 设置目标暂停时间，G1 会自动调整策略。",
            "【ZGC 低延迟】ZGC 使用着色指针（Colored Pointers）和读屏障（Read Barriers）实现并发回收，大部分工作与应用并行执行。Oracle 声称 ZGC 暂停时间不超过 10ms，与堆大小无关。",
            "【Go GC 特性】Go 使用三色标记法（Tricolor Mark-and-Sweep）和写屏障实现并发 GC。Go 1.5 后 GC 延迟大幅降低，目标是将 STW 控制在 1ms 以内。GOGC 参数控制触发阈值。",
            "【GC Pacing】Go 的 GC Pacing 算法根据内存分配速率动态调整 GC 触发时机，平衡内存占用和 CPU 开销。GOMEMLIMIT（Go 1.19+）提供软内存上限控制。"
        ],
        keyDifficulties: [
            "【堆大小权衡】堆越大，单次 GC 扫描时间越长（对传统 GC）；堆越小，GC 频率越高。需要根据应用特征和 SLO 选择合适的堆大小。",
            "【GC 日志分析】Java 使用 -Xlog:gc*:file=gc.log 输出 GC 日志；Go 使用 GODEBUG=gctrace=1。需要关注 STW 时间、GC 频率、回收效率（回收前后堆大小比例）。",
            "【Full GC 触发】Java 的 Full GC 通常由 Old Generation 满触发，会暂停较长时间。应避免频繁 Full GC：减少大对象分配、避免 System.gc() 调用、合理设置堆大小。",
            "【GC 调优误区】不应盲目增大堆或降低 GC 频率。内存分配速率高时，延迟回收会导致内存快速耗尽，触发更长的 Full GC。应先用 profiler 找出分配热点。",
            "【容器环境 GC】容器内 JVM 可能无法正确识别可用内存，导致 OOM。Java 10+ 支持 -XX:+UseContainerSupport 自动适应容器限制。"
        ],
        handsOnPath: [
            "启用 Java GC 日志：使用 -Xlog:gc*:file=gc.log:time,uptime,level,tags -XX:+UseG1GC 运行应用，收集 GC 事件。",
            "分析 GC 日志：使用 GCViewer 或 GCEasy 工具可视化 GC 日志，关注 Pause 时间分布、GC 频率、堆使用趋势。",
            "配置 G1 目标暂停：-XX:MaxGCPauseMillis=50 设置 50ms 目标暂停时间，G1 会自动调整 Region 数量和回收策略。",
            "启用 ZGC：Java 15+ 使用 -XX:+UseZGC 启用 ZGC，观察 STW 时间是否显著降低。注意 ZGC 会增加约 10-15% 的内存开销。",
            "Go GC 调优：设置 GOGC=200 将 GC 触发阈值从默认 100% 增加到 200%，减少 GC 频率但增加内存占用。",
            "使用 GOMEMLIMIT：Go 1.19+ 设置 GOMEMLIMIT=4GiB 提供软内存上限，GC 会更积极地在接近限制时回收内存。",
            "观察 Go GC：使用 GODEBUG=gctrace=1 运行程序，观察 '@' 后的 STW 时间（如 0.023ms+1.2ms）。"
        ],
        selfCheck: [
            "什么是 Stop-The-World (STW)？为什么它会影响 P99 延迟？",
            "G1 GC 和 ZGC 的主要区别是什么？各自适合什么场景？",
            "Java 的 -XX:MaxGCPauseMillis 参数如何工作？设置过低会有什么问题？",
            "Go 的 GOGC 参数控制什么？设置为 200 意味着什么？",
            "什么情况下会触发 Full GC？如何避免频繁 Full GC？",
            "容器环境中 JVM GC 可能遇到什么问题？如何解决？"
        ],
        extensions: [
            "学习 Shenandoah GC 的实现原理，与 ZGC 对比其读屏障 vs 写屏障的设计选择。",
            "研究 GraalVM Native Image 的 AOT 编译如何消除 JIT 预热和减少内存占用。",
            "探索 Go runtime 源码中 GC 相关的实现，理解三色标记和写屏障的具体机制。",
            "学习 JFR（Java Flight Recorder）进行生产环境 GC 分析，低开销收集详细的 GC 事件。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/17/gctuning/",
            "https://wiki.openjdk.org/display/zgc",
            "https://go.dev/doc/gc-guide",
            "https://tip.golang.org/doc/gc-guide"
        ]
    },
    "bp-w8-2": {
        lessonId: "bp-w8-2",
        background: [
            "【内存分配开销】频繁的内存分配和释放会导致：1) GC 压力增加；2) 内存碎片化；3) 分配器锁竞争。高性能系统通常使用对象池减少分配。",
            "【对象池原理】对象池（Object Pool）预先创建一批对象，使用时从池中借用，用完后归还而非销毁。减少了对象创建和 GC 的开销，适合创建成本高或使用频繁的对象。",
            "【sync.Pool（Go）】Go 的 sync.Pool 是标准库提供的临时对象池。适合存放可重用的临时对象，但不保证对象存活（GC 时可能清空），不适合做连接池。",
            "【Java 对象池】Apache Commons Pool 提供 GenericObjectPool 实现。支持对象验证、驱逐策略、借用等待等特性。数据库连接池（如 HikariCP）是典型应用。",
            "【内存对齐与伪共享】CPU 缓存以缓存行（通常 64 字节）为单位加载。多线程修改同一缓存行中的不同变量会导致伪共享（False Sharing），严重影响并发性能。",
            "【栈分配优化】Go 编译器会尝试将对象分配在栈上（逃逸分析）。栈分配无需 GC，使用 go build -gcflags='-m' 可观察逃逸分析结果。"
        ],
        keyDifficulties: [
            "【池大小设置】对象池太小会导致等待，太大会浪费内存。应根据并发度和对象使用时间动态调整。HikariCP 建议：connections = Tn × (Cm - 1) + 1（Tn=线程数，Cm=单请求最大连接数）。",
            "【对象状态重置】从池中取出对象前或归还后需要重置状态，否则会导致数据泄露或状态污染。bytes.Buffer 使用 Reset() 方法清空内容但保留底层数组。",
            "【sync.Pool 陷阱】sync.Pool 中的对象可能在 GC 时被回收，不能用于需要持久化的场景。每次 Get 可能返回 nil（池空时），需要处理 nil 情况。",
            "【伪共享检测】使用 perf c2c（cache-to-cache）或 VTune 可以检测伪共享。Go 可使用 //go:nosplit 和 padding 避免热点变量在同一缓存行。",
            "【逃逸分析限制】某些操作会强制堆分配：返回局部变量指针、存入接口、发送到 channel、闭包捕获。理解逃逸规则有助于减少堆分配。"
        ],
        handsOnPath: [
            "使用 sync.Pool：创建 Pool 并设置 New 函数，使用 Get() 获取对象，用完后 Put() 归还。对比有无 Pool 的内存分配次数。",
            "观察逃逸分析：go build -gcflags='-m -m' 查看逃逸分析详细结果，识别哪些变量逃逸到堆上。",
            "使用 pprof 分析分配：go tool pprof -alloc_objects 分析内存分配热点，识别高频分配的对象类型和调用栈。",
            "配置 HikariCP 连接池：设置 maximumPoolSize、minimumIdle、connectionTimeout，启用 metricsTrackerFactory 监控池状态。",
            "避免伪共享：对热点计数器使用 padding 填充至 64 字节边界，或使用 @Contended 注解（Java）隔离变量。",
            "实现自定义对象池：使用 channel 实现固定大小的 goroutine-safe 对象池，支持超时获取和池耗尽处理。",
            "验证池化效果：使用 benchstat 对比池化前后的 allocs/op 和 B/op，确认内存分配确实减少。"
        ],
        selfCheck: [
            "对象池解决什么问题？什么类型的对象适合池化？",
            "sync.Pool 和连接池有什么区别？为什么 sync.Pool 不适合做连接池？",
            "什么是伪共享（False Sharing）？如何避免？",
            "Go 的逃逸分析是什么？哪些操作会导致变量逃逸到堆？",
            "如何确定数据库连接池的合适大小？",
            "从对象池获取对象时需要注意什么？归还时需要做什么处理？"
        ],
        extensions: [
            "学习 Netty 的 ByteBuf 池化实现，包括 PooledByteBufAllocator 和 arena/page 分配策略。",
            "研究 jemalloc/tcmalloc 等高性能内存分配器的实现原理，如何减少锁竞争和碎片化。",
            "探索 Go 的内存分配器实现，理解 mcache/mcentral/mheap 的层级结构。",
            "学习 Java 的 DirectByteBuffer 和堆外内存管理，减少 GC 对大缓冲区的影响。"
        ],
        sourceUrls: [
            "https://pkg.go.dev/sync#Pool",
            "https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing",
            "https://mechanical-sympathy.blogspot.com/2011/07/false-sharing.html",
            "https://go.dev/doc/faq#stack_or_heap"
        ]
    },
    "bp-w8-3": {
        lessonId: "bp-w8-3",
        background: [
            "【JIT 编译原理】JIT（Just-In-Time）编译器在运行时将热点字节码编译为机器码。Java 的 HotSpot 使用 C1（客户端编译器，快速编译）和 C2（服务端编译器，深度优化）分层编译。",
            "【热点代码识别】JVM 通过采样和计数器识别热点代码。方法调用超过阈值（-XX:CompileThreshold，默认 10000）时触发编译。编译完成前代码以解释模式执行，较慢。",
            "【预热问题】应用刚启动时，JIT 尚未编译热点代码，解释执行性能较差。高流量场景下，冷启动可能导致初期请求超时或延迟飙升。需要预热策略。",
            "【AOT 编译】AOT（Ahead-of-Time）在部署前将代码编译为机器码。GraalVM Native Image 支持 Java AOT，消除预热时间但牺牲部分运行时优化能力。",
            "【JIT 优化技术】JIT 编译器执行多种优化：方法内联（Inlining）、逃逸分析（Escape Analysis）、循环展开（Loop Unrolling）、死代码消除等。这些优化需要运行时 profile 信息。",
            "【去优化（Deoptimization）】当 JIT 做出的假设失效时（如多态调用突然出现新类型），需要去优化回解释执行。频繁去优化会严重影响性能。"
        ],
        keyDifficulties: [
            "【分层编译】Java 8+ 默认启用分层编译：0 级解释执行→1-3 级 C1 编译→4 级 C2 编译。每层都在运行，收集 profile 信息。-XX:TieredStopAtLevel=1 可强制只用 C1。",
            "【编译队列阻塞】编译线程数有限（默认 CPU 核数相关），大量热点代码同时触发编译可能导致编译队列堆积，影响预热速度。可通过 -XX:CICompilerCount 调整。",
            "【内联阈值】方法内联受多个参数控制：-XX:MaxInlineSize（小方法阈值）、-XX:FreqInlineSize（热点方法阈值）。过度内联导致代码膨胀，反而降低缓存效率。",
            "【Native Image 限制】GraalVM Native Image 不支持某些动态特性：运行时反射（需显式配置）、动态类加载、JNI（需配置）。迁移需要处理这些兼容性问题。",
            "【Go 的编译模型】Go 使用 AOT 编译，没有预热问题。但也意味着无法利用运行时 profile 进行深度优化。Go 编译器的优化相对保守。"
        ],
        handsOnPath: [
            "观察 JIT 编译日志：使用 -XX:+PrintCompilation 或 -XX:+UnlockDiagnosticVMOptions -XX:+LogCompilation 查看方法编译过程。",
            "分析内联决策：使用 -XX:+PrintInlining 观察内联决策，了解哪些方法被内联、哪些被拒绝及原因。",
            "实现应用预热：在应用启动后、接收真实流量前，模拟调用核心业务路径，触发 JIT 编译。可使用定时任务或健康检查。",
            "测试 Native Image：使用 GraalVM 的 native-image 工具编译 Java 应用，对比启动时间和内存占用。处理反射配置。",
            "使用 JITWatch 分析：JITWatch 工具可视化 JIT 编译日志，显示方法的编译历史、内联树、汇编代码。",
            "监控编译活动：使用 JMX 或 JFR 监控 compilation.totalTime、compilation.osrTime，识别编译瓶颈。",
            "配置 CDS 加速启动：使用 -XX:+UseAppCDS 和共享归档加速类加载，配合 JIT 预热减少启动时间。"
        ],
        selfCheck: [
            "什么是 JIT 编译？为什么需要热点代码识别？",
            "Java 的分层编译包含哪些级别？C1 和 C2 编译器有什么区别？",
            "什么是应用预热？为什么它对高流量服务很重要？",
            "AOT 编译相比 JIT 有什么优缺点？",
            "什么是去优化（Deoptimization）？什么情况下会触发？",
            "GraalVM Native Image 有哪些限制？如何处理反射问题？"
        ],
        extensions: [
            "学习 GraalVM 编译器的原理，包括 Truffle 框架如何支持多语言运行时。",
            "研究 Java CRaC（Coordinated Restore at Checkpoint）项目，使用检查点恢复加速启动。",
            "探索 OpenJDK Leyden 项目，了解 Java AOT 的未来发展方向。",
            "学习 LLVM 的优化 pass，理解现代编译器的优化技术。"
        ],
        sourceUrls: [
            "https://www.oracle.com/technical-resources/articles/java/architect-evans-pt1.html",
            "https://www.graalvm.org/reference-manual/native-image/",
            "https://shipilev.net/jvm/anatomy-quarks/",
            "https://wiki.openjdk.org/display/HotSpot/Tiered+Compilation"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "bp-w8-1": [
        {
            id: "bp-w8-1-q1",
            question: "什么是 Stop-The-World (STW)？",
            options: [
                "服务器关机",
                "GC 暂停所有应用线程进行垃圾回收的时间",
                "网络中断",
                "数据库锁等待"
            ],
            answer: 1,
            rationale: "Stop-The-World 是 GC 暂停所有应用线程的时间。在 STW 期间，应用无法处理请求，直接影响 P99 延迟。"
        },
        {
            id: "bp-w8-1-q2",
            question: "ZGC 的目标暂停时间是多少？",
            options: [
                "100ms 以内",
                "50ms 以内",
                "10ms 以内，与堆大小无关",
                "1ms 以内"
            ],
            answer: 2,
            rationale: "Oracle 声称 ZGC 暂停时间不超过 10ms，且与堆大小无关。这是通过并发标记和着色指针技术实现的。"
        },
        {
            id: "bp-w8-1-q3",
            question: "Java 的 -XX:MaxGCPauseMillis 参数的作用是什么？",
            options: [
                "强制 GC 暂停时间不超过指定值",
                "设置 G1 GC 的目标暂停时间，G1 会自动调整策略",
                "设置堆大小",
                "设置 GC 频率"
            ],
            answer: 1,
            rationale: "-XX:MaxGCPauseMillis 设置目标暂停时间，G1 会自动调整 Region 数量和回收策略来尽量达到目标，但不保证。"
        },
        {
            id: "bp-w8-1-q4",
            question: "Go 的 GOGC=200 意味着什么？",
            options: [
                "使用 200MB 内存",
                "堆增长到上次 GC 后存活数据的 200% 时触发 GC",
                "每 200ms 触发一次 GC",
                "最多 200 个 goroutine"
            ],
            answer: 1,
            rationale: "GOGC 控制 GC 触发阈值。GOGC=200 表示堆增长到上次 GC 后存活数据的 300%（100% + 200%）时触发 GC。"
        },
        {
            id: "bp-w8-1-q5",
            question: "G1 GC 的 Region 设计有什么优势？",
            options: [
                "减少内存使用",
                "将堆分成多个区域，优先回收垃圾最多的区域，控制暂停时间",
                "加快对象分配",
                "支持更大的堆"
            ],
            answer: 1,
            rationale: "G1 将堆分成多个等大小的 Region，可以选择性地回收垃圾最多的 Region，从而控制单次 GC 的暂停时间。"
        },
        {
            id: "bp-w8-1-q6",
            question: "如何启用 Java GC 日志（Java 9+）？",
            options: [
                "-verbose:gc",
                "-Xlog:gc*:file=gc.log:time,uptime,level,tags",
                "-XX:+PrintGC",
                "System.gc()"
            ],
            answer: 1,
            rationale: "Java 9+ 使用统一日志框架，-Xlog:gc*:file=gc.log:time,uptime,level,tags 可以输出详细的 GC 日志。"
        },
        {
            id: "bp-w8-1-q7",
            question: "Go 的三色标记法中，三种颜色分别代表什么？",
            options: [
                "新对象、旧对象、待删除对象",
                "白色（未扫描）、灰色（已扫描但引用未处理）、黑色（已完成扫描）",
                "堆、栈、全局变量",
                "小对象、中对象、大对象"
            ],
            answer: 1,
            rationale: "三色标记法：白色表示未扫描（潜在垃圾），灰色表示已扫描但其引用的对象未处理，黑色表示已完成扫描（存活）。"
        },
        {
            id: "bp-w8-1-q8",
            question: "什么情况下会触发 Java 的 Full GC？",
            options: [
                "每次 Minor GC 后",
                "Old Generation 满、System.gc() 调用、Metaspace 满等",
                "每隔固定时间",
                "只有手动触发"
            ],
            answer: 1,
            rationale: "Full GC 通常由 Old Generation 满、System.gc() 调用、Metaspace 满、晋升失败等情况触发，暂停时间较长。"
        },
        {
            id: "bp-w8-1-q9",
            question: "GOMEMLIMIT（Go 1.19+）的作用是什么？",
            options: [
                "硬性内存限制，超过就 OOM",
                "软内存上限，GC 会在接近限制时更积极地回收",
                "设置 GOGC 值",
                "限制 goroutine 数量"
            ],
            answer: 1,
            rationale: "GOMEMLIMIT 设置软内存上限，GC 会在接近限制时更积极地回收内存，避免 OOM，同时平衡 CPU 开销。"
        },
        {
            id: "bp-w8-1-q10",
            question: "容器环境中 JVM 可能遇到什么 GC 相关问题？",
            options: [
                "GC 变快",
                "JVM 无法正确识别可用内存，设置不当导致 OOM",
                "不能运行 GC",
                "GC 日志无法输出"
            ],
            answer: 1,
            rationale: "老版本 JVM 可能无法正确识别容器的内存限制。Java 10+ 支持 -XX:+UseContainerSupport 自动适应容器限制。"
        },
        {
            id: "bp-w8-1-q11",
            question: "如何使用 GODEBUG 观察 Go GC？",
            options: [
                "go run -gc main.go",
                "GODEBUG=gctrace=1 go run main.go",
                "go build -gcflags main.go",
                "go test -gc"
            ],
            answer: 1,
            rationale: "设置环境变量 GODEBUG=gctrace=1 运行程序，会输出每次 GC 的详细信息，包括 STW 时间、堆大小变化等。"
        },
        {
            id: "bp-w8-1-q12",
            question: "ZGC 使用什么技术实现低延迟？",
            options: [
                "增大堆内存",
                "着色指针（Colored Pointers）和读屏障（Read Barriers）",
                "禁用并发",
                "减少对象分配"
            ],
            answer: 1,
            rationale: "ZGC 使用着色指针在指针中存储 GC 元数据，配合读屏障实现并发回收，大部分工作与应用并行执行。"
        }
    ],
    "bp-w8-2": [
        {
            id: "bp-w8-2-q1",
            question: "对象池（Object Pool）解决什么问题？",
            options: [
                "增加并发数",
                "减少频繁对象创建的开销和 GC 压力",
                "加密数据",
                "压缩内存"
            ],
            answer: 1,
            rationale: "对象池预先创建对象，重复使用而非频繁创建/销毁，减少分配开销和 GC 压力，特别适合创建成本高的对象。"
        },
        {
            id: "bp-w8-2-q2",
            question: "Go 的 sync.Pool 有什么限制？",
            options: [
                "只能存储字符串",
                "对象可能在 GC 时被回收，不保证持久化",
                "不支持并发",
                "最多存储 100 个对象"
            ],
            answer: 1,
            rationale: "sync.Pool 是临时对象池，GC 时可能清空池中对象。不适合需要持久化的场景（如连接池），适合临时缓冲区。"
        },
        {
            id: "bp-w8-2-q3",
            question: "什么是伪共享（False Sharing）？",
            options: [
                "多线程共享同一个对象",
                "多线程修改同一缓存行中的不同变量，导致缓存失效",
                "多个进程共享内存",
                "网络数据共享"
            ],
            answer: 1,
            rationale: "CPU 缓存以缓存行（64 字节）为单位。多线程修改同一缓存行中的不同变量会导致缓存失效，严重影响并发性能。"
        },
        {
            id: "bp-w8-2-q4",
            question: "Go 的逃逸分析决定什么？",
            options: [
                "是否使用 goroutine",
                "变量分配在栈上还是堆上",
                "是否使用 channel",
                "是否需要 GC"
            ],
            answer: 1,
            rationale: "逃逸分析判断变量是否会逃逸出函数作用域。不逃逸的变量可以分配在栈上，无需 GC，性能更好。"
        },
        {
            id: "bp-w8-2-q5",
            question: "如何查看 Go 的逃逸分析结果？",
            options: [
                "go run main.go",
                "go build -gcflags='-m' main.go",
                "go test main.go",
                "go fmt main.go"
            ],
            answer: 1,
            rationale: "使用 go build -gcflags='-m' 可以查看逃逸分析结果，-m -m 可以看到更详细的决策原因。"
        },
        {
            id: "bp-w8-2-q6",
            question: "HikariCP 建议的连接池大小公式是什么？",
            options: [
                "connections = CPU 核数 × 2",
                "connections = Tn × (Cm - 1) + 1",
                "connections = 内存 / 100",
                "connections = 并发数 × 10"
            ],
            answer: 1,
            rationale: "HikariCP 建议 connections = Tn × (Cm - 1) + 1，其中 Tn 是线程数，Cm 是单请求最大同时使用的连接数。"
        },
        {
            id: "bp-w8-2-q7",
            question: "从对象池获取对象时需要注意什么？",
            options: [
                "必须加锁",
                "可能返回 nil（池空时），需要创建新对象或处理 nil",
                "必须等待",
                "需要付费"
            ],
            answer: 1,
            rationale: "sync.Pool 的 Get() 在池空时返回 nil（如果未设置 New 函数），或返回 New() 创建的新对象。需要正确处理。"
        },
        {
            id: "bp-w8-2-q8",
            question: "如何避免伪共享？",
            options: [
                "减少线程数",
                "使用 padding 将热点变量填充至不同缓存行",
                "使用全局锁",
                "减少变量数量"
            ],
            answer: 1,
            rationale: "通过 padding 将热点变量填充至 64 字节边界，确保它们位于不同缓存行。Java 可使用 @Contended 注解。"
        },
        {
            id: "bp-w8-2-q9",
            question: "哪些操作会导致 Go 变量逃逸到堆？",
            options: [
                "局部变量赋值",
                "返回局部变量指针、存入接口、发送到 channel",
                "循环计数",
                "函数调用"
            ],
            answer: 1,
            rationale: "返回局部变量指针、存入接口类型、发送到 channel、闭包捕获等操作会导致变量逃逸到堆，需要 GC。"
        },
        {
            id: "bp-w8-2-q10",
            question: "归还对象到池之前应该做什么？",
            options: [
                "直接归还即可",
                "重置对象状态，避免数据泄露或状态污染",
                "删除对象",
                "复制对象"
            ],
            answer: 1,
            rationale: "归还前需要重置对象状态（如 Buffer.Reset()），否则下次取出可能包含上次的数据，导致数据泄露或污染。"
        },
        {
            id: "bp-w8-2-q11",
            question: "sync.Pool 为什么不适合做连接池？",
            options: [
                "不支持网络连接",
                "对象可能被 GC 回收，连接需要持久保持",
                "没有超时机制",
                "不支持并发"
            ],
            answer: 1,
            rationale: "sync.Pool 中的对象可能在 GC 时被回收。连接需要持久保持，应使用专门的连接池实现（如 database/sql 的连接池）。"
        },
        {
            id: "bp-w8-2-q12",
            question: "CPU 缓存行的典型大小是多少？",
            options: [
                "16 字节",
                "32 字节",
                "64 字节",
                "128 字节"
            ],
            answer: 2,
            rationale: "现代 CPU 的缓存行典型大小是 64 字节。避免伪共享时，热点变量应该 padding 到 64 字节边界。"
        }
    ],
    "bp-w8-3": [
        {
            id: "bp-w8-3-q1",
            question: "什么是 JIT（Just-In-Time）编译？",
            options: [
                "编译期将代码编译为机器码",
                "运行时将热点字节码编译为机器码",
                "解释执行字节码",
                "将源码编译为字节码"
            ],
            answer: 1,
            rationale: "JIT 编译器在运行时识别热点代码（执行频率高的方法），将其从字节码编译为优化的机器码，提高执行效率。"
        },
        {
            id: "bp-w8-3-q2",
            question: "Java HotSpot 的 C1 和 C2 编译器有什么区别？",
            options: [
                "C1 用于客户端，C2 用于服务端",
                "C1 快速编译轻度优化，C2 深度优化但编译慢",
                "C1 编译字节码，C2 编译机器码",
                "没有区别"
            ],
            answer: 1,
            rationale: "C1（客户端编译器）快速编译，优化较轻；C2（服务端编译器）编译慢但执行深度优化。分层编译结合两者优势。"
        },
        {
            id: "bp-w8-3-q3",
            question: "什么是应用预热（Warmup）？",
            options: [
                "启动更多服务器",
                "在接收真实流量前模拟调用，触发 JIT 编译",
                "增加 JVM 内存",
                "重启应用"
            ],
            answer: 1,
            rationale: "预热是在接收真实流量前模拟调用核心业务路径，触发 JIT 编译，使应用进入最佳性能状态。"
        },
        {
            id: "bp-w8-3-q4",
            question: "Java 的 -XX:CompileThreshold 参数控制什么？",
            options: [
                "最大编译时间",
                "方法调用多少次后触发 JIT 编译",
                "编译线程数",
                "编译器类型"
            ],
            answer: 1,
            rationale: "-XX:CompileThreshold 设置方法调用次数阈值（默认 10000），超过阈值的方法会触发 JIT 编译。"
        },
        {
            id: "bp-w8-3-q5",
            question: "AOT（Ahead-of-Time）编译相比 JIT 有什么优势？",
            options: [
                "运行时性能更好",
                "无需预热，启动即达最佳性能",
                "可以动态优化",
                "支持更多语言特性"
            ],
            answer: 1,
            rationale: "AOT 在部署前完成编译，启动即达最佳性能，无需预热。但牺牲了 JIT 的运行时优化能力（如基于 profile 的优化）。"
        },
        {
            id: "bp-w8-3-q6",
            question: "什么是去优化（Deoptimization）？",
            options: [
                "取消编译",
                "JIT 假设失效时回退到解释执行",
                "减少代码量",
                "删除死代码"
            ],
            answer: 1,
            rationale: "当 JIT 做出的投机优化假设失效时（如类型变化），需要去优化回解释执行。频繁去优化会严重影响性能。"
        },
        {
            id: "bp-w8-3-q7",
            question: "GraalVM Native Image 有什么限制？",
            options: [
                "不支持任何框架",
                "不支持运行时反射、动态类加载（需显式配置）",
                "不能运行在 Linux 上",
                "只支持 Java 8"
            ],
            answer: 1,
            rationale: "Native Image 不支持某些动态特性：运行时反射需显式配置、不支持动态类加载、JNI 需配置。"
        },
        {
            id: "bp-w8-3-q8",
            question: "方法内联（Inlining）有什么好处？",
            options: [
                "减少代码量",
                "消除方法调用开销，使更多优化成为可能",
                "增加可读性",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "内联消除方法调用的开销，并使调用者和被调用者的代码一起优化，如常量传播、死代码消除等。"
        },
        {
            id: "bp-w8-3-q9",
            question: "如何观察 JIT 编译活动？",
            options: [
                "top 命令",
                "-XX:+PrintCompilation 或 JFR 监控",
                "netstat",
                "ps aux"
            ],
            answer: 1,
            rationale: "使用 -XX:+PrintCompilation 可以实时输出方法编译信息，JFR（Java Flight Recorder）可以低开销地记录编译事件。"
        },
        {
            id: "bp-w8-3-q10",
            question: "Go 使用什么编译模型？",
            options: [
                "JIT 编译",
                "AOT 编译，没有预热问题",
                "解释执行",
                "虚拟机执行"
            ],
            answer: 1,
            rationale: "Go 使用 AOT 编译，编译时直接生成机器码，没有预热问题。但也无法利用运行时 profile 进行深度优化。"
        },
        {
            id: "bp-w8-3-q11",
            question: "Java 分层编译包含多少个级别？",
            options: [
                "2 个",
                "3 个",
                "5 个（0-4 级）",
                "10 个"
            ],
            answer: 2,
            rationale: "分层编译有 5 个级别：0 级解释执行，1-3 级 C1 编译（不同 profile 级别），4 级 C2 完全优化。"
        },
        {
            id: "bp-w8-3-q12",
            question: "什么是 CDS（Class Data Sharing）？",
            options: [
                "网络协议",
                "共享类元数据归档，加速类加载和启动",
                "代码压缩",
                "数据加密"
            ],
            answer: 1,
            rationale: "CDS 将类元数据保存到归档文件，启动时直接映射到内存，减少类加载时间。AppCDS 支持应用类。"
        }
    ]
}
