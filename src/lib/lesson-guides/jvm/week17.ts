import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week17Guides: Record<string, LessonGuide> = {
    "jvm-w17-1": {
        lessonId: "jvm-w17-1",
        background: [
            "【JFR 简介】JDK Flight Recorder（JFR）是 JDK 内置的低开销性能分析和诊断工具。收集 JVM 和应用的详细运行数据，包括 GC、线程、I/O、锁、方法采样等事件。",
            "【低开销设计】JFR 设计目标是开销小于 1%，适合在生产环境持续运行。使用环形缓冲区、二进制格式、采样而非跟踪，最小化对应用性能的影响。",
            "【启用方式】启动时：-XX:StartFlightRecording=duration=60s,filename=recording.jfr。运行时：jcmd <pid> JFR.start 或通过 JMC（Java Mission Control）远程控制。",
            "【事件类型】JFR 记录多种事件：JVM 事件（GC、编译、类加载）、操作系统事件（CPU、内存、I/O）、应用事件（方法采样、锁等待、异常）。可以通过配置控制记录哪些事件。",
            "【自定义事件】可以创建自定义 JFR 事件，在应用代码中记录业务相关数据。继承 jdk.jfr.Event 类，使用 @Label、@Description 等注解描述事件。"
        ],
        keyDifficulties: [
            "【配置文件】JFR 使用 .jfc 配置文件控制事件收集。default.jfc 适合持续监控（开销低），profile.jfc 适合详细分析（开销较高）。可以自定义配置文件。",
            "【持续记录】-XX:StartFlightRecording=disk=true,maxsize=500m,maxage=1h 实现持续记录。数据自动轮转，保留最近 1 小时或最大 500MB。出问题时可以 dump 分析。",
            "【API 使用】Java 9+ 提供 JFR API（jdk.jfr 包）。可以编程方式启动/停止记录、创建自定义事件、读取和分析 .jfr 文件。结合 Streaming API 实时处理事件。",
            "【与 JMC 配合】Java Mission Control（JMC）是 JFR 数据的图形化分析工具。提供丰富的视图：方法采样、热点方法、内存泄漏分析、锁分析等。"
        ],
        handsOnPath: [
            "使用 -XX:StartFlightRecording 启动时开启 JFR 记录。",
            "使用 jcmd <pid> JFR.start 和 JFR.dump 运行时控制 JFR。",
            "使用 JMC 打开 .jfr 文件，分析 GC、CPU、锁等信息。",
            "创建自定义 JFR 事件，记录业务关键操作。",
            "使用 JFR Streaming API 实时处理 JFR 事件。"
        ],
        selfCheck: [
            "JFR 的设计目标开销是多少？",
            "如何在启动时开启 JFR 记录？",
            "如何在运行时控制 JFR？",
            "default.jfc 和 profile.jfc 的区别是什么？",
            "如何创建自定义 JFR 事件？",
            "JMC 是什么工具？"
        ],
        extensions: [
            "研究 JFR 事件的内部结构和存储格式。",
            "了解 JFR Streaming API 的高级用法。",
            "探索第三方 JFR 分析工具（如 JFR Analytics）。",
            "研究在容器环境中使用 JFR 的最佳实践。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/jfapi/",
            "https://www.baeldung.com/java-flight-recorder-monitoring",
            "https://openjdk.org/jeps/328"
        ]
    },
    "jvm-w17-2": {
        lessonId: "jvm-w17-2",
        background: [
            "【async-profiler 简介】async-profiler 是一个低开销的 Java 采样分析器，由 Andrei Pangin 开发。特点是使用 AsyncGetCallTrace API，不受 SafePoint 偏差影响，能准确反映热点。",
            "【SafePoint 偏差问题】传统 Java profiler 在 SafePoint 采样，但 JVM 只在特定位置设置 SafePoint。某些代码（如可数循环）可能被低估或高估。async-profiler 解决了这个问题。",
            "【支持的事件】async-profiler 支持多种事件：cpu（CPU 时间）、alloc（内存分配）、lock（锁竞争）、wall（挂钟时间）、cache-misses、page-faults 等。不同事件揭示不同性能问题。",
            "【使用方式】命令行：./profiler.sh -d 30 -f output.html <pid>。Java Agent：-agentpath:/path/to/libasyncProfiler.so=start,event=cpu,file=out.jfr。支持输出 HTML、JFR、火焰图格式。",
            "【集成工具】async-profiler 被广泛集成：IntelliJ IDEA Profiler、JMH -prof async、Datadog Continuous Profiler、Pyroscope 等都使用 async-profiler 引擎。"
        ],
        keyDifficulties: [
            "【CPU vs Wall Clock】cpu 模式只采样 on-CPU 时间（实际执行）；wall 模式采样挂钟时间（包括等待）。I/O 密集应用用 wall 模式更能发现瓶颈。",
            "【分配采样】alloc 模式采样内存分配，可以找出分配热点。输出显示分配量而非 CPU 时间。对于频繁 GC 的应用非常有用。支持按字节或对象数采样。",
            "【Native 帧】async-profiler 可以捕获 native 帧（JNI、JVM 内部），展示完整调用栈。-XX:+PreserveFramePointer 可以提高 native 栈回溯的准确性。",
            "【权限要求】Linux 上需要 perf_event_paranoid 设置允许采样，或以 root 运行。Docker 容器中需要特权模式或 SYS_PTRACE 能力。"
        ],
        handsOnPath: [
            "下载 async-profiler，使用命令行对运行中的 Java 进程采样。",
            "使用 -e cpu 和 -e wall 对比 CPU 密集和 I/O 密集应用的分析结果。",
            "使用 -e alloc 分析内存分配热点。",
            "使用 -f output.html 生成 HTML 火焰图。",
            "在 JMH 中使用 -prof async 分析基准测试。"
        ],
        selfCheck: [
            "async-profiler 解决了什么问题？",
            "SafePoint 偏差是什么？",
            "cpu 和 wall 模式的区别是什么？",
            "alloc 模式用于分析什么？",
            "如何在 Docker 容器中使用 async-profiler？",
            "哪些工具集成了 async-profiler？"
        ],
        extensions: [
            "研究 AsyncGetCallTrace API 的工作原理。",
            "了解 async-profiler 的 lock 和 cache-misses 事件。",
            "探索 continuous profiling 方案（如 Pyroscope）。",
            "研究在 Kubernetes 环境中部署 async-profiler。"
        ],
        sourceUrls: [
            "https://github.com/async-profiler/async-profiler",
            "https://www.baeldung.com/java-async-profiler",
            "https://krzysztofslusarski.github.io/2022/12/12/async-profiler.html"
        ]
    },
    "jvm-w17-3": {
        lessonId: "jvm-w17-3",
        background: [
            "【火焰图概念】火焰图（Flame Graph）是由 Brendan Gregg 发明的性能可视化工具。X 轴表示采样比例，Y 轴表示调用栈深度，宽度表示时间占比。可以快速定位热点。",
            "【读图方法】从下往上是调用链（调用者→被调用者）。宽的平顶表示热点函数。颜色无特殊含义（随机分配），只用于区分不同函数。关注宽的塔顶，那是优化目标。",
            "【生成火焰图】async-profiler：-f output.html 直接生成。JFR：使用 JMC 或 jfr2flame 转换。也可以用 FlameGraph 工具从各种 profiler 输出生成。",
            "【差分火焰图】差分火焰图对比两次采样结果。红色表示增加，蓝色表示减少。用于分析性能回归：对比优化前后、版本升级前后的性能变化。",
            "【冰柱图】冰柱图（Icicle Graph）是火焰图的倒置版本：根在上，叶子在下。有些工具（如 IntelliJ Profiler）默认使用冰柱图。读法相同，只是方向相反。"
        ],
        keyDifficulties: [
            "【调用链折叠】火焰图会折叠相同的调用栈，同一个函数可能出现多次（从不同路径调用）。点击可以高亮该函数的所有出现。这是与调用树的主要区别。",
            "【采样 vs 跟踪】火焰图基于采样数据，是统计近似。采样间隔影响精度和开销。宽度是时间比例而非绝对时间。非常短的函数可能采样不到。",
            "【多维火焰图】除了 CPU 火焰图，还可以生成：off-CPU 火焰图（分析阻塞）、内存火焰图（分析分配）、锁火焰图（分析竞争）。不同维度揭示不同问题。",
            "【常见模式识别】认识常见模式：大面积 GC 帧表示 GC 压力；锁等待帧表示竞争；I/O 帧表示阻塞。平坦的高塔是热点；中间宽底部窄可能是递归。"
        ],
        handsOnPath: [
            "使用 async-profiler 生成 HTML 火焰图，交互式探索。",
            "使用 JMC 查看 JFR 记录的火焰图视图。",
            "生成 alloc 火焰图，分析内存分配热点。",
            "使用 difffolded.pl 生成差分火焰图，对比两次采样。",
            "分析实际应用的火焰图，识别优化机会。"
        ],
        selfCheck: [
            "火焰图的 X 轴和 Y 轴分别表示什么？",
            "如何读懂火焰图？应该关注哪里？",
            "差分火焰图的红色和蓝色表示什么？",
            "火焰图和调用树有什么区别？",
            "除了 CPU 火焰图还有哪些类型？",
            "火焰图基于什么数据？有什么局限？"
        ],
        extensions: [
            "研究 Brendan Gregg 的火焰图资源和博客。",
            "了解 off-CPU 火焰图的生成和分析。",
            "探索 d3-flame-graph 交互式火焰图库。",
            "研究在 Grafana 中展示火焰图（Flame Graph Panel）。"
        ],
        sourceUrls: [
            "https://www.brendangregg.com/flamegraphs.html",
            "https://github.com/brendangregg/FlameGraph",
            "https://www.baeldung.com/java-flame-graphs"
        ]
    }
}

export const week17Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w17-1": [
        {
            id: "jvm-w17-1-q1",
            question: "JFR 的设计目标开销是多少？",
            options: [
                "5% 以下",
                "1% 以下",
                "10% 以下",
                "无开销"
            ],
            answer: 1,
            rationale: "JFR 设计目标是开销小于 1%，适合在生产环境持续运行。"
        },
        {
            id: "jvm-w17-1-q2",
            question: "如何在启动时开启 JFR 记录？",
            options: [
                "-XX:+EnableJFR",
                "-XX:StartFlightRecording=duration=60s,filename=recording.jfr",
                "-XX:+RecordFlight",
                "-XX:+JFRStart"
            ],
            answer: 1,
            rationale: "使用 -XX:StartFlightRecording 参数在启动时开启 JFR 记录，可以指定持续时间和输出文件。"
        },
        {
            id: "jvm-w17-1-q3",
            question: "如何在运行时控制 JFR？",
            options: [
                "只能在启动时",
                "jcmd <pid> JFR.start 或 JMC",
                "jstat",
                "jmap"
            ],
            answer: 1,
            rationale: "可以使用 jcmd <pid> JFR.start、JFR.dump、JFR.stop 运行时控制，也可以通过 JMC 远程控制。"
        },
        {
            id: "jvm-w17-1-q4",
            question: "default.jfc 和 profile.jfc 的区别是什么？",
            options: [
                "没有区别",
                "default 适合持续监控（开销低），profile 适合详细分析（开销较高）",
                "default 更详细",
                "profile 开销更低"
            ],
            answer: 1,
            rationale: "default.jfc 开销低适合持续监控，profile.jfc 记录更多事件适合详细分析但开销较高。"
        },
        {
            id: "jvm-w17-1-q5",
            question: "JFR 可以记录哪些类型的事件？",
            options: [
                "只有 GC 事件",
                "JVM 事件、操作系统事件、应用事件",
                "只有 CPU 事件",
                "只有内存事件"
            ],
            answer: 1,
            rationale: "JFR 记录多种事件：JVM 事件（GC、编译）、操作系统事件（CPU、I/O）、应用事件（方法采样、锁）。"
        },
        {
            id: "jvm-w17-1-q6",
            question: "如何创建自定义 JFR 事件？",
            options: [
                "实现 Runnable 接口",
                "继承 jdk.jfr.Event 类",
                "使用注解 @JFREvent",
                "无法创建"
            ],
            answer: 1,
            rationale: "创建自定义 JFR 事件需要继承 jdk.jfr.Event 类，使用 @Label、@Description 等注解描述。"
        },
        {
            id: "jvm-w17-1-q7",
            question: "JMC 是什么？",
            options: [
                "Java Memory Controller",
                "Java Mission Control，JFR 数据的图形化分析工具",
                "Java Management Console",
                "Java Monitor Center"
            ],
            answer: 1,
            rationale: "JMC（Java Mission Control）是 JFR 数据的图形化分析工具，提供丰富的视图分析 JFR 记录。"
        },
        {
            id: "jvm-w17-1-q8",
            question: "如何实现 JFR 持续记录？",
            options: [
                "不支持持续记录",
                "-XX:StartFlightRecording=disk=true,maxsize=500m,maxage=1h",
                "只能手动重启",
                "-XX:+ContinuousJFR"
            ],
            answer: 1,
            rationale: "使用 disk=true,maxsize,maxage 参数实现持续记录，数据自动轮转，出问题时可以 dump 分析。"
        },
        {
            id: "jvm-w17-1-q9",
            question: "JFR Streaming API 的作用是什么？",
            options: [
                "流式传输 JFR 文件",
                "实时处理 JFR 事件",
                "压缩 JFR 数据",
                "网络传输"
            ],
            answer: 1,
            rationale: "JFR Streaming API 可以实时处理 JFR 事件，不需要等待记录结束再分析。"
        },
        {
            id: "jvm-w17-1-q10",
            question: "JFR 从哪个版本开始免费开源？",
            options: [
                "Java 8",
                "Java 11",
                "Java 17",
                "Java 21"
            ],
            answer: 1,
            rationale: "JFR 从 Java 11 开始免费开源，之前是 Oracle JDK 的商业功能。"
        },
        {
            id: "jvm-w17-1-q11",
            question: "JFR 使用什么技术减少开销？",
            options: [
                "增加内存",
                "环形缓冲区、二进制格式、采样",
                "多线程",
                "压缩算法"
            ],
            answer: 1,
            rationale: "JFR 使用环形缓冲区、二进制格式、采样而非跟踪等技术，最小化对应用性能的影响。"
        },
        {
            id: "jvm-w17-1-q12",
            question: "JFR 记录文件的扩展名是什么？",
            options: [
                ".log",
                ".jfr",
                ".rec",
                ".dat"
            ],
            answer: 1,
            rationale: "JFR 记录文件使用 .jfr 扩展名，是二进制格式，可以用 JMC 或 JFR API 读取分析。"
        }
    ],
    "jvm-w17-2": [
        {
            id: "jvm-w17-2-q1",
            question: "async-profiler 解决了什么问题？",
            options: [
                "内存泄漏",
                "SafePoint 偏差问题",
                "GC 问题",
                "死锁问题"
            ],
            answer: 1,
            rationale: "async-profiler 使用 AsyncGetCallTrace API，不受 SafePoint 偏差影响，能准确反映热点。"
        },
        {
            id: "jvm-w17-2-q2",
            question: "什么是 SafePoint 偏差？",
            options: [
                "SafePoint 太多",
                "传统 profiler 只在 SafePoint 采样，某些代码可能被低估或高估",
                "SafePoint 太少",
                "SafePoint 错误"
            ],
            answer: 1,
            rationale: "传统 Java profiler 在 SafePoint 采样，但某些代码（如可数循环）可能无 SafePoint，导致被低估或高估。"
        },
        {
            id: "jvm-w17-2-q3",
            question: "cpu 和 wall 模式的区别是什么？",
            options: [
                "没有区别",
                "cpu 采样 on-CPU 时间，wall 采样挂钟时间（包括等待）",
                "cpu 更准确",
                "wall 开销更低"
            ],
            answer: 1,
            rationale: "cpu 模式只采样实际执行的 on-CPU 时间；wall 模式采样挂钟时间，包括等待时间，更能发现 I/O 瓶颈。"
        },
        {
            id: "jvm-w17-2-q4",
            question: "alloc 模式用于分析什么？",
            options: [
                "CPU 使用",
                "内存分配热点",
                "线程问题",
                "网络 I/O"
            ],
            answer: 1,
            rationale: "alloc 模式采样内存分配，可以找出分配热点，对于频繁 GC 的应用非常有用。"
        },
        {
            id: "jvm-w17-2-q5",
            question: "如何生成 HTML 火焰图输出？",
            options: [
                "-f output.txt",
                "-f output.html",
                "-o html",
                "--html"
            ],
            answer: 1,
            rationale: "使用 -f output.html 可以生成交互式 HTML 火焰图，方便在浏览器中分析。"
        },
        {
            id: "jvm-w17-2-q6",
            question: "哪些工具集成了 async-profiler？",
            options: [
                "只有命令行",
                "IntelliJ IDEA Profiler、JMH、Datadog、Pyroscope",
                "只有 JMC",
                "只有 VisualVM"
            ],
            answer: 1,
            rationale: "async-profiler 被广泛集成：IntelliJ IDEA Profiler、JMH -prof async、Datadog、Pyroscope 等。"
        },
        {
            id: "jvm-w17-2-q7",
            question: "在 Docker 容器中使用 async-profiler 需要什么？",
            options: [
                "无特殊要求",
                "特权模式或 SYS_PTRACE 能力",
                "修改 JVM 参数",
                "安装 JDK"
            ],
            answer: 1,
            rationale: "Docker 容器中需要特权模式或 SYS_PTRACE 能力才能使用 async-profiler。"
        },
        {
            id: "jvm-w17-2-q8",
            question: "-XX:+PreserveFramePointer 的作用是什么？",
            options: [
                "加速执行",
                "提高 native 栈回溯的准确性",
                "减少内存",
                "启用优化"
            ],
            answer: 1,
            rationale: "-XX:+PreserveFramePointer 保留帧指针，可以提高 async-profiler 对 native 栈回溯的准确性。"
        },
        {
            id: "jvm-w17-2-q9",
            question: "async-profiler 支持哪些事件类型？",
            options: [
                "只有 CPU",
                "cpu、alloc、lock、wall、cache-misses、page-faults 等",
                "只有内存",
                "只有锁"
            ],
            answer: 1,
            rationale: "async-profiler 支持多种事件：cpu、alloc、lock、wall、cache-misses、page-faults 等。"
        },
        {
            id: "jvm-w17-2-q10",
            question: "如何在 JMH 中使用 async-profiler？",
            options: [
                "无法使用",
                "-prof async",
                "-XX:+AsyncProfiler",
                "--profiler=async"
            ],
            answer: 1,
            rationale: "在 JMH 中使用 -prof async 参数可以启用 async-profiler 分析基准测试。"
        },
        {
            id: "jvm-w17-2-q11",
            question: "I/O 密集应用应该用哪种采样模式？",
            options: [
                "cpu",
                "wall",
                "alloc",
                "lock"
            ],
            answer: 1,
            rationale: "I/O 密集应用用 wall 模式更能发现瓶颈，因为 wall 包括等待时间，cpu 只包括实际执行时间。"
        },
        {
            id: "jvm-w17-2-q12",
            question: "async-profiler 使用什么 API 采样？",
            options: [
                "JVMTI",
                "AsyncGetCallTrace",
                "JNI",
                "JFR API"
            ],
            answer: 1,
            rationale: "async-profiler 使用 AsyncGetCallTrace API 采样，不受 SafePoint 偏差影响。"
        }
    ],
    "jvm-w17-3": [
        {
            id: "jvm-w17-3-q1",
            question: "火焰图是谁发明的？",
            options: [
                "James Gosling",
                "Brendan Gregg",
                "Doug Lea",
                "Brian Goetz"
            ],
            answer: 1,
            rationale: "火焰图（Flame Graph）是由 Brendan Gregg 发明的性能可视化工具。"
        },
        {
            id: "jvm-w17-3-q2",
            question: "火焰图的 X 轴表示什么？",
            options: [
                "时间顺序",
                "采样比例（宽度表示时间占比）",
                "内存大小",
                "调用次数"
            ],
            answer: 1,
            rationale: "火焰图的 X 轴表示采样比例，宽度表示时间占比。不表示时间顺序。"
        },
        {
            id: "jvm-w17-3-q3",
            question: "火焰图的 Y 轴表示什么？",
            options: [
                "时间",
                "调用栈深度",
                "内存",
                "CPU 使用率"
            ],
            answer: 1,
            rationale: "火焰图的 Y 轴表示调用栈深度，从下往上是调用链（调用者→被调用者）。"
        },
        {
            id: "jvm-w17-3-q4",
            question: "火焰图中应该关注什么？",
            options: [
                "底部最宽的",
                "宽的平顶（塔顶）",
                "最深的栈",
                "颜色最红的"
            ],
            answer: 1,
            rationale: "应该关注宽的平顶（塔顶），那是热点函数，是优化的目标。宽度表示时间占比。"
        },
        {
            id: "jvm-w17-3-q5",
            question: "火焰图中颜色表示什么？",
            options: [
                "CPU 温度",
                "无特殊含义，只用于区分不同函数",
                "严重程度",
                "时间长短"
            ],
            answer: 1,
            rationale: "火焰图的颜色无特殊含义（随机分配），只用于视觉上区分不同函数。"
        },
        {
            id: "jvm-w17-3-q6",
            question: "差分火焰图的红色表示什么？",
            options: [
                "热点",
                "相比基准增加的部分",
                "错误",
                "GC"
            ],
            answer: 1,
            rationale: "差分火焰图中红色表示增加的部分，蓝色表示减少的部分，用于对比分析性能变化。"
        },
        {
            id: "jvm-w17-3-q7",
            question: "什么是冰柱图？",
            options: [
                "内存分析图",
                "火焰图的倒置版本（根在上）",
                "网络分析图",
                "GC 分析图"
            ],
            answer: 1,
            rationale: "冰柱图（Icicle Graph）是火焰图的倒置版本：根在上，叶子在下。读法相同，只是方向相反。"
        },
        {
            id: "jvm-w17-3-q8",
            question: "火焰图基于什么数据？",
            options: [
                "跟踪数据",
                "采样数据",
                "日志数据",
                "配置数据"
            ],
            answer: 1,
            rationale: "火焰图基于采样数据，是统计近似。采样间隔影响精度和开销。"
        },
        {
            id: "jvm-w17-3-q9",
            question: "除了 CPU 火焰图还有哪些类型？",
            options: [
                "只有 CPU",
                "off-CPU 火焰图、内存火焰图、锁火焰图",
                "只有内存",
                "只有网络"
            ],
            answer: 1,
            rationale: "除了 CPU 火焰图，还可以生成 off-CPU 火焰图（阻塞）、内存火焰图（分配）、锁火焰图（竞争）。"
        },
        {
            id: "jvm-w17-3-q10",
            question: "火焰图和调用树的主要区别是什么？",
            options: [
                "没有区别",
                "火焰图折叠相同调用栈，同一函数可能多次出现",
                "火焰图更慢",
                "调用树更准确"
            ],
            answer: 1,
            rationale: "火焰图会折叠相同的调用栈，同一个函数可能出现多次（从不同路径调用）。调用树每个节点只出现一次。"
        },
        {
            id: "jvm-w17-3-q11",
            question: "大面积 GC 帧在火焰图中表示什么？",
            options: [
                "正常",
                "GC 压力大",
                "内存充足",
                "性能良好"
            ],
            answer: 1,
            rationale: "大面积 GC 帧表示应用花费大量时间在 GC 上，说明 GC 压力大，需要优化。"
        },
        {
            id: "jvm-w17-3-q12",
            question: "如何生成差分火焰图？",
            options: [
                "只用一次采样",
                "使用 difffolded.pl 对比两次采样",
                "使用特殊 profiler",
                "无法生成"
            ],
            answer: 1,
            rationale: "使用 difffolded.pl 工具可以对比两次采样的 folded stacks，生成差分火焰图。"
        }
    ]
}
