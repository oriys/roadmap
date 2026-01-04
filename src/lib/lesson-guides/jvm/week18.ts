import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week18Guides: Record<string, LessonGuide> = {
    "jvm-w18-1": {
        lessonId: "jvm-w18-1",
        background: [
            "【堆转储概念】堆转储（Heap Dump）是 JVM 堆内存的快照，包含所有对象实例、类信息、GC Roots 等。是诊断内存问题（泄漏、OOM）的关键数据。文件格式通常是 HPROF。",
            "【获取堆转储】主动获取：jmap -dump:format=b,file=heap.hprof <pid>、jcmd <pid> GC.heap_dump heap.hprof。自动获取：-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/path/。",
            "【Eclipse MAT】Eclipse Memory Analyzer（MAT）是最流行的堆转储分析工具。提供 Dominator Tree、Histogram、Leak Suspects 报告、OQL 查询等功能，帮助定位内存问题。",
            "【VisualVM】VisualVM 是 JDK 自带的可视化工具，可以获取和分析堆转储。功能比 MAT 简单，但足够日常使用。也支持 CPU 和线程分析。",
            "【IntelliJ Profiler】IntelliJ IDEA 内置的 Profiler 可以获取和分析堆转储。与 IDE 集成，可以直接跳转到源代码。提供 Biggest Objects、GC Roots 等视图。"
        ],
        keyDifficulties: [
            "【Shallow vs Retained Size】Shallow Size 是对象自身占用的内存；Retained Size 是对象被回收后能释放的总内存（包括只被它引用的对象）。分析内存泄漏主要看 Retained Size。",
            "【Dominator Tree】Dominator Tree 展示对象的支配关系。如果所有到对象 B 的路径都经过对象 A，则 A 支配 B。Dominator 被回收时，被支配的对象也会被回收。",
            "【GC Roots 分析】从泄漏对象反向追踪到 GC Roots，理解为什么对象不能被回收。常见原因：静态变量、线程、JNI 引用、类加载器等持有引用。",
            "【内存泄漏模式】常见泄漏模式：集合无限增长、监听器未取消注册、ThreadLocal 未清理、缓存无限制、ClassLoader 泄漏。MAT 的 Leak Suspects 可以自动检测。"
        ],
        handsOnPath: [
            "使用 jmap -dump 和 jcmd GC.heap_dump 获取堆转储。",
            "使用 Eclipse MAT 打开堆转储，查看 Histogram 和 Dominator Tree。",
            "使用 MAT 的 Leak Suspects 自动分析潜在内存泄漏。",
            "使用 OQL 查询特定对象，如 SELECT * FROM java.util.HashMap WHERE size > 1000。",
            "从泄漏对象追踪 GC Roots 路径，理解泄漏原因。"
        ],
        selfCheck: [
            "什么是堆转储？包含什么信息？",
            "如何在 OOM 时自动生成堆转储？",
            "Shallow Size 和 Retained Size 的区别是什么？",
            "什么是 Dominator Tree？",
            "如何从泄漏对象找到 GC Roots？",
            "常见的内存泄漏模式有哪些？"
        ],
        extensions: [
            "研究 HPROF 文件格式的内部结构。",
            "了解 MAT 的 OQL 高级查询语法。",
            "探索使用 jhat 命令行分析堆转储。",
            "研究大堆转储（几十 GB）的分析策略。"
        ],
        sourceUrls: [
            "https://www.eclipse.org/mat/",
            "https://www.baeldung.com/java-heap-dump-capture",
            "https://docs.oracle.com/en/java/javase/21/troubleshoot/diagnostic-tools.html#GUID-6F5B9AAC-BC44-4B1D-81D9-BA0E92636E1B"
        ]
    },
    "jvm-w18-2": {
        lessonId: "jvm-w18-2",
        background: [
            "【线程转储概念】线程转储（Thread Dump）是 JVM 中所有线程状态的快照，包含线程名、状态、调用栈、持有的锁等。是诊断死锁、性能问题、线程泄漏的关键数据。",
            "【获取线程转储】jstack <pid>：命令行获取。jcmd <pid> Thread.print：功能类似。kill -3 <pid>（Linux）或 Ctrl+Break（Windows）：信号方式。JMC/VisualVM：图形界面。",
            "【线程状态】主要状态：NEW（未启动）、RUNNABLE（运行中）、BLOCKED（等待锁）、WAITING（无限等待）、TIMED_WAITING（限时等待）、TERMINATED（已终止）。",
            "【锁信息】线程转储显示锁信息：'waiting to lock'（等待获取）、'locked'（已持有）、'waiting on'（wait 状态）。通过锁地址可以追踪锁的持有者和等待者。",
            "【死锁检测】jstack 和 jcmd 可以自动检测死锁。死锁信息会在线程转储末尾显示：'Found one Java-level deadlock'，列出参与死锁的线程和锁。"
        ],
        keyDifficulties: [
            "【高 CPU 分析】步骤：1. top -H -p <pid> 找到高 CPU 线程的 tid；2. 将 tid 转为十六进制；3. 在线程转储中搜索 nid=0x... 找到该线程；4. 分析调用栈。",
            "【BLOCKED 分析】大量 BLOCKED 线程表示锁竞争。查看等待的锁地址，找到持有者线程。分析持有者为什么长时间不释放锁：可能在做 I/O、调用远程服务、死循环。",
            "【线程池分析】检查线程池状态：活跃线程数、队列大小、拒绝策略。线程都在等待任务可能是任务不足；都在执行可能是任务太多或执行太慢。",
            "【多次采样】单次线程转储只是快照。间隔几秒多次采样，分析线程状态变化趋势。始终处于同一位置的线程可能有问题（死锁、阻塞、死循环）。"
        ],
        handsOnPath: [
            "使用 jstack <pid> 获取线程转储。",
            "使用 top -H -p <pid> + jstack 分析高 CPU 线程。",
            "编写死锁代码，使用 jstack 检测死锁。",
            "使用 fastthread.io 在线分析线程转储。",
            "分析实际应用的线程转储，识别锁竞争和阻塞。"
        ],
        selfCheck: [
            "什么是线程转储？包含什么信息？",
            "如何获取线程转储？有哪些方式？",
            "线程的主要状态有哪些？",
            "如何分析高 CPU 线程问题？",
            "如何检测死锁？",
            "为什么需要多次采样？"
        ],
        extensions: [
            "研究 Native Thread Stack 的获取和分析。",
            "了解使用 async-profiler 的 wall 模式替代线程转储分析。",
            "探索 Arthas 的 thread 命令高级用法。",
            "研究虚拟线程（Project Loom）的线程转储变化。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/troubleshoot/diagnostic-tools.html#GUID-E6F0B72D-9A15-4C24-A8A9-D6C3C5D50221",
            "https://fastthread.io/",
            "https://www.baeldung.com/java-thread-dump"
        ]
    },
    "jvm-w18-3": {
        lessonId: "jvm-w18-3",
        background: [
            "【GC 日志概述】GC 日志记录每次 GC 的详细信息：时间、类型、回收前后堆大小、暂停时间、各阶段耗时。是 GC 调优和问题诊断的基础数据。",
            "【启用 GC 日志】JDK 9+：-Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=10m。JDK 8：-XX:+PrintGCDetails -XX:+PrintGCDateStamps -Xloggc:gc.log。",
            "【日志格式】统一日志格式（JEP 158）：[时间][日志级别][标签] 消息。标签包括 gc、gc,start、gc,heap、gc,phases 等。级别有 trace、debug、info、warning、error。",
            "【关键指标】关注：GC 频率（多久一次）、暂停时间（STW 时长）、吞吐量（应用运行时间占比）、堆使用趋势（是否持续增长）、Full GC 次数（应尽量为 0）。",
            "【分析工具】GCEasy（在线）：上传日志自动分析，生成报告。GCViewer（本地）：开源 GC 日志可视化工具。JClarity Censum：商业工具，功能更强。"
        ],
        keyDifficulties: [
            "【G1 日志分析】G1 日志包含：Young GC、Mixed GC、Full GC、并发标记周期。关注 Evacuation Pause 时间、Humongous 分配、并发周期是否完成、Full GC 是否发生。",
            "【识别问题模式】内存泄漏：堆使用持续增长，Full GC 后释放很少。分配压力：Minor GC 频繁，对象晋升快。暂停时间长：单次 GC 耗时长。吞吐量低：GC 占用时间过多。",
            "【ZGC/Shenandoah 日志】低延迟 GC 日志与 G1 不同。关注并发阶段耗时、暂停时间（应 <1ms）、内存使用趋势。这些 GC 的日志更侧重并发处理统计。",
            "【日志轮转】生产环境应配置日志轮转：filecount 和 filesize 参数。避免日志文件无限增长。保留足够历史用于问题回溯，但不占用过多磁盘。"
        ],
        handsOnPath: [
            "配置 GC 日志，运行应用收集日志。",
            "使用 GCEasy 上传日志，分析生成的报告。",
            "使用 GCViewer 可视化 GC 日志，观察堆使用趋势。",
            "识别日志中的 Full GC，分析触发原因。",
            "对比不同 GC 参数下的日志差异。"
        ],
        selfCheck: [
            "如何启用 GC 日志？JDK 8 和 JDK 9+ 有什么区别？",
            "GC 日志中应该关注哪些关键指标？",
            "如何识别内存泄漏的 GC 日志模式？",
            "G1 日志中有哪些类型的 GC？",
            "什么是日志轮转？为什么需要？",
            "有哪些 GC 日志分析工具？"
        ],
        extensions: [
            "研究 JDK 17+ 的 GC 日志增强功能。",
            "了解使用 Grafana + Prometheus 实时监控 GC 指标。",
            "探索 GC 日志与 JFR 事件的关联分析。",
            "研究大规模系统的 GC 日志收集和分析方案。"
        ],
        sourceUrls: [
            "https://gceasy.io/",
            "https://github.com/chewiebug/GCViewer",
            "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-collection-tuning-introduction.html#GUID-A82E0C0D-A74C-4F4B-A2AA-88D2B0B71A34"
        ]
    }
}

export const week18Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w18-1": [
        {
            id: "jvm-w18-1-q1",
            question: "什么是堆转储？",
            options: [
                "线程状态快照",
                "JVM 堆内存的快照，包含所有对象实例",
                "GC 日志",
                "配置文件"
            ],
            answer: 1,
            rationale: "堆转储是 JVM 堆内存的快照，包含所有对象实例、类信息、GC Roots 等，用于诊断内存问题。"
        },
        {
            id: "jvm-w18-1-q2",
            question: "如何在 OOM 时自动生成堆转储？",
            options: [
                "-XX:+PrintGC",
                "-XX:+HeapDumpOnOutOfMemoryError",
                "-XX:+AutoHeapDump",
                "-XX:+DumpOnOOM"
            ],
            answer: 1,
            rationale: "-XX:+HeapDumpOnOutOfMemoryError 在 OOM 时自动生成堆转储，配合 -XX:HeapDumpPath 指定路径。"
        },
        {
            id: "jvm-w18-1-q3",
            question: "Shallow Size 和 Retained Size 的区别是什么？",
            options: [
                "没有区别",
                "Shallow 是对象自身大小，Retained 是回收后能释放的总内存",
                "Shallow 更大",
                "Retained 是类大小"
            ],
            answer: 1,
            rationale: "Shallow Size 是对象自身占用的内存；Retained Size 是对象被回收后能释放的总内存。"
        },
        {
            id: "jvm-w18-1-q4",
            question: "什么是 Dominator Tree？",
            options: [
                "对象继承树",
                "展示对象支配关系的树，Dominator 被回收时被支配的对象也会被回收",
                "类加载器树",
                "调用栈"
            ],
            answer: 1,
            rationale: "Dominator Tree 展示对象的支配关系。Dominator 被回收时，被支配的对象也会被回收。"
        },
        {
            id: "jvm-w18-1-q5",
            question: "使用什么命令获取堆转储？",
            options: [
                "jstack",
                "jmap -dump:format=b,file=heap.hprof <pid>",
                "jstat",
                "jinfo"
            ],
            answer: 1,
            rationale: "jmap -dump:format=b,file=heap.hprof <pid> 或 jcmd <pid> GC.heap_dump 可以获取堆转储。"
        },
        {
            id: "jvm-w18-1-q6",
            question: "Eclipse MAT 是什么？",
            options: [
                "IDE 插件",
                "堆转储分析工具",
                "GC 分析工具",
                "性能监控工具"
            ],
            answer: 1,
            rationale: "Eclipse MAT（Memory Analyzer）是最流行的堆转储分析工具，提供多种分析功能。"
        },
        {
            id: "jvm-w18-1-q7",
            question: "MAT 的 Leak Suspects 功能是什么？",
            options: [
                "查找代码错误",
                "自动分析潜在内存泄漏",
                "查找安全漏洞",
                "分析 GC"
            ],
            answer: 1,
            rationale: "MAT 的 Leak Suspects 可以自动分析堆转储，识别潜在的内存泄漏并生成报告。"
        },
        {
            id: "jvm-w18-1-q8",
            question: "常见的内存泄漏模式有哪些？",
            options: [
                "只有 OOM",
                "集合无限增长、监听器未取消、ThreadLocal 未清理、缓存无限制",
                "只有集合泄漏",
                "只有线程泄漏"
            ],
            answer: 1,
            rationale: "常见泄漏模式：集合无限增长、监听器未取消注册、ThreadLocal 未清理、缓存无限制、ClassLoader 泄漏。"
        },
        {
            id: "jvm-w18-1-q9",
            question: "OQL 在 MAT 中的作用是什么？",
            options: [
                "优化查询",
                "使用类 SQL 语法查询堆中的对象",
                "操作系统查询",
                "GC 查询"
            ],
            answer: 1,
            rationale: "OQL（Object Query Language）允许使用类 SQL 语法查询堆中的对象，如 SELECT * FROM java.util.HashMap。"
        },
        {
            id: "jvm-w18-1-q10",
            question: "堆转储文件的常见格式是什么？",
            options: [
                ".log",
                ".hprof",
                ".dump",
                ".heap"
            ],
            answer: 1,
            rationale: "堆转储文件通常使用 HPROF 格式，扩展名为 .hprof。"
        },
        {
            id: "jvm-w18-1-q11",
            question: "如何从泄漏对象找到泄漏原因？",
            options: [
                "看对象大小",
                "反向追踪到 GC Roots，分析引用链",
                "看对象类型",
                "看创建时间"
            ],
            answer: 1,
            rationale: "从泄漏对象反向追踪到 GC Roots，分析引用链，找出为什么对象不能被回收。"
        },
        {
            id: "jvm-w18-1-q12",
            question: "分析内存泄漏主要看什么？",
            options: [
                "Shallow Size",
                "Retained Size",
                "对象数量",
                "类数量"
            ],
            answer: 1,
            rationale: "分析内存泄漏主要看 Retained Size，它表示对象被回收后能释放的总内存。"
        }
    ],
    "jvm-w18-2": [
        {
            id: "jvm-w18-2-q1",
            question: "什么是线程转储？",
            options: [
                "线程代码",
                "JVM 中所有线程状态的快照",
                "线程配置",
                "线程日志"
            ],
            answer: 1,
            rationale: "线程转储是 JVM 中所有线程状态的快照，包含线程名、状态、调用栈、持有的锁等。"
        },
        {
            id: "jvm-w18-2-q2",
            question: "使用什么命令获取线程转储？",
            options: [
                "jmap",
                "jstack <pid>",
                "jstat",
                "jinfo"
            ],
            answer: 1,
            rationale: "jstack <pid> 可以获取线程转储，也可以用 jcmd <pid> Thread.print。"
        },
        {
            id: "jvm-w18-2-q3",
            question: "线程状态 BLOCKED 表示什么？",
            options: [
                "线程终止",
                "线程等待获取锁",
                "线程运行中",
                "线程休眠"
            ],
            answer: 1,
            rationale: "BLOCKED 表示线程在等待获取一个被其他线程持有的锁。"
        },
        {
            id: "jvm-w18-2-q4",
            question: "如何检测死锁？",
            options: [
                "看 CPU 使用",
                "jstack 或 jcmd 自动检测并在转储末尾显示",
                "看内存使用",
                "无法检测"
            ],
            answer: 1,
            rationale: "jstack 和 jcmd 可以自动检测死锁，死锁信息会在线程转储末尾显示。"
        },
        {
            id: "jvm-w18-2-q5",
            question: "分析高 CPU 线程的步骤是什么？",
            options: [
                "直接看 jstack",
                "top -H 找 tid，转十六进制，在 jstack 中搜索 nid",
                "看 GC 日志",
                "看堆转储"
            ],
            answer: 1,
            rationale: "步骤：top -H -p <pid> 找高 CPU 线程的 tid，转为十六进制，在 jstack 中搜索 nid=0x... 找到该线程。"
        },
        {
            id: "jvm-w18-2-q6",
            question: "大量 BLOCKED 线程表示什么？",
            options: [
                "正常",
                "锁竞争严重",
                "内存不足",
                "CPU 不足"
            ],
            answer: 1,
            rationale: "大量 BLOCKED 线程表示锁竞争严重，需要分析锁持有者为什么长时间不释放锁。"
        },
        {
            id: "jvm-w18-2-q7",
            question: "为什么需要多次采样线程转储？",
            options: [
                "一次不够准确",
                "单次只是快照，多次可以分析状态变化趋势",
                "需要平均值",
                "为了备份"
            ],
            answer: 1,
            rationale: "单次线程转储只是快照。多次采样可以分析状态变化趋势，始终处于同一位置的线程可能有问题。"
        },
        {
            id: "jvm-w18-2-q8",
            question: "线程转储中 'waiting to lock' 表示什么？",
            options: [
                "已持有锁",
                "正在等待获取该锁",
                "等待条件",
                "锁释放"
            ],
            answer: 1,
            rationale: "'waiting to lock' 表示线程正在等待获取该锁，锁被其他线程持有。"
        },
        {
            id: "jvm-w18-2-q9",
            question: "WAITING 和 TIMED_WAITING 的区别是什么？",
            options: [
                "没有区别",
                "WAITING 无限等待，TIMED_WAITING 限时等待",
                "WAITING 更快",
                "TIMED_WAITING 更安全"
            ],
            answer: 1,
            rationale: "WAITING 是无限等待（如 Object.wait()），TIMED_WAITING 是限时等待（如 Thread.sleep(1000)）。"
        },
        {
            id: "jvm-w18-2-q10",
            question: "什么在线工具可以分析线程转储？",
            options: [
                "GCEasy",
                "fastthread.io",
                "MAT",
                "JMC"
            ],
            answer: 1,
            rationale: "fastthread.io 是一个在线线程转储分析工具，可以上传转储自动生成分析报告。"
        },
        {
            id: "jvm-w18-2-q11",
            question: "如何通过信号获取线程转储？",
            options: [
                "kill -9",
                "kill -3 <pid>（Linux）或 Ctrl+Break（Windows）",
                "kill -1",
                "无法通过信号"
            ],
            answer: 1,
            rationale: "Linux 上使用 kill -3 <pid>（SIGQUIT），Windows 上使用 Ctrl+Break 可以触发线程转储。"
        },
        {
            id: "jvm-w18-2-q12",
            question: "线程转储中 'locked' 表示什么？",
            options: [
                "等待锁",
                "已经持有该锁",
                "锁被释放",
                "锁冲突"
            ],
            answer: 1,
            rationale: "'locked' 表示线程已经持有该锁，可以通过锁地址追踪锁的持有者和等待者。"
        }
    ],
    "jvm-w18-3": [
        {
            id: "jvm-w18-3-q1",
            question: "GC 日志记录什么信息？",
            options: [
                "只有 GC 次数",
                "GC 时间、类型、堆大小变化、暂停时间、各阶段耗时",
                "只有内存大小",
                "只有错误"
            ],
            answer: 1,
            rationale: "GC 日志记录每次 GC 的详细信息：时间、类型、回收前后堆大小、暂停时间、各阶段耗时。"
        },
        {
            id: "jvm-w18-3-q2",
            question: "JDK 9+ 如何启用 GC 日志？",
            options: [
                "-XX:+PrintGCDetails",
                "-Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=10m",
                "-verbose:gc",
                "-XX:+GCLog"
            ],
            answer: 1,
            rationale: "JDK 9+ 使用统一日志框架：-Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=10m。"
        },
        {
            id: "jvm-w18-3-q3",
            question: "GC 日志中应该关注哪些关键指标？",
            options: [
                "只有 GC 次数",
                "GC 频率、暂停时间、吞吐量、堆使用趋势、Full GC 次数",
                "只有内存大小",
                "只有时间"
            ],
            answer: 1,
            rationale: "关键指标：GC 频率、暂停时间、吞吐量、堆使用趋势、Full GC 次数（应尽量为 0）。"
        },
        {
            id: "jvm-w18-3-q4",
            question: "如何识别内存泄漏的 GC 日志模式？",
            options: [
                "GC 频率低",
                "堆使用持续增长，Full GC 后释放很少",
                "暂停时间短",
                "没有 Full GC"
            ],
            answer: 1,
            rationale: "内存泄漏模式：堆使用持续增长，即使 Full GC 后也释放很少，最终导致 OOM。"
        },
        {
            id: "jvm-w18-3-q5",
            question: "什么工具可以在线分析 GC 日志？",
            options: [
                "MAT",
                "GCEasy",
                "jstack",
                "VisualVM"
            ],
            answer: 1,
            rationale: "GCEasy 是在线 GC 日志分析工具，上传日志自动分析生成报告。"
        },
        {
            id: "jvm-w18-3-q6",
            question: "G1 日志中应该关注什么？",
            options: [
                "只有 Young GC",
                "Young GC、Mixed GC、Full GC、并发标记周期、Evacuation Pause",
                "只有 Full GC",
                "只有并发标记"
            ],
            answer: 1,
            rationale: "G1 日志应关注：Young GC、Mixed GC、Full GC、并发标记周期是否完成、Evacuation Pause 时间。"
        },
        {
            id: "jvm-w18-3-q7",
            question: "什么是日志轮转？",
            options: [
                "日志加密",
                "日志文件达到大小限制后创建新文件，保留指定数量的历史文件",
                "日志压缩",
                "日志删除"
            ],
            answer: 1,
            rationale: "日志轮转：文件达到 filesize 后创建新文件，保留 filecount 个历史文件，避免无限增长。"
        },
        {
            id: "jvm-w18-3-q8",
            question: "JDK 8 如何启用 GC 日志？",
            options: [
                "-Xlog:gc*",
                "-XX:+PrintGCDetails -XX:+PrintGCDateStamps -Xloggc:gc.log",
                "-verbose:class",
                "-XX:+GCLog"
            ],
            answer: 1,
            rationale: "JDK 8 使用旧日志格式：-XX:+PrintGCDetails -XX:+PrintGCDateStamps -Xloggc:gc.log。"
        },
        {
            id: "jvm-w18-3-q9",
            question: "什么是 GCViewer？",
            options: [
                "在线工具",
                "开源本地 GC 日志可视化工具",
                "JDK 自带工具",
                "收费工具"
            ],
            answer: 1,
            rationale: "GCViewer 是开源的本地 GC 日志可视化工具，可以分析和展示 GC 日志数据。"
        },
        {
            id: "jvm-w18-3-q10",
            question: "分配压力的 GC 日志模式是什么？",
            options: [
                "GC 很少",
                "Minor GC 频繁，对象晋升快",
                "只有 Full GC",
                "没有 GC"
            ],
            answer: 1,
            rationale: "分配压力模式：Minor GC 频繁发生，对象快速晋升到老年代，可能导致频繁 Full GC。"
        },
        {
            id: "jvm-w18-3-q11",
            question: "ZGC 日志应该关注什么？",
            options: [
                "只有 Full GC",
                "并发阶段耗时、暂停时间（应 <1ms）、内存使用趋势",
                "只有 Young GC",
                "只有 Old GC"
            ],
            answer: 1,
            rationale: "ZGC 日志关注：并发阶段耗时、暂停时间（应 <1ms）、内存使用趋势。侧重并发处理统计。"
        },
        {
            id: "jvm-w18-3-q12",
            question: "统一日志格式（JEP 158）引入于哪个版本？",
            options: [
                "JDK 8",
                "JDK 9",
                "JDK 11",
                "JDK 17"
            ],
            answer: 1,
            rationale: "统一日志格式（JEP 158）在 JDK 9 引入，使用 -Xlog 参数配置，格式统一规范。"
        }
    ]
}
