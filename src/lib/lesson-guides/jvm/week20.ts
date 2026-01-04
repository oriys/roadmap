import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week20Guides: Record<string, LessonGuide> = {
    "jvm-w20-1": {
        lessonId: "jvm-w20-1",
        background: [
            "【调优原则】先测量再优化，用数据说话。不要过早优化，先确认有问题。一次只改一个参数，观察效果。保持简单，现代 JVM 自动调优能力强。",
            "【性能指标】吞吐量（Throughput）：应用运行时间占比。延迟（Latency）：响应时间，关注 P99/P999。容量（Capacity）：在给定资源下能处理的负载。三者相互权衡。",
            "【基准测试】使用 JMH 进行微基准测试。模拟生产负载进行压力测试。收集 GC 日志、JFR 数据作为基准。对比调优前后的指标变化。",
            "【调优流程】1. 确定目标（延迟、吞吐量、资源）。2. 收集数据（GC 日志、JFR、监控）。3. 分析瓶颈（CPU、内存、I/O、锁）。4. 制定方案。5. 验证效果。6. 记录文档。",
            "【持续监控】调优不是一次性工作。应用负载、数据量、代码都会变化。建立持续监控，设置告警。定期 review 性能指标，及时发现问题。"
        ],
        keyDifficulties: [
            "【避免常见误区】不要迷信参数模板，每个应用不同。不要追求极致参数，够用就好。不要禁用 JVM 的自适应机制。不要在生产环境直接调优，先在测试环境验证。",
            "【理解权衡】降低延迟可能降低吞吐量。增大堆可能增加暂停时间。并发 GC 占用 CPU。理解这些权衡，根据业务需求选择。",
            "【瓶颈定位】CPU 密集：火焰图分析热点。内存问题：堆转储分析。锁竞争：线程转储、JFR 锁事件。I/O 阻塞：async-profiler wall 模式。",
            "【版本升级】升级 JDK 版本是最简单有效的调优。新版 JVM 通常有性能改进。JDK 11→17→21 都有显著优化。升级前充分测试兼容性。"
        ],
        handsOnPath: [
            "使用 JMH 编写基准测试，验证优化效果。",
            "建立应用的性能基准（GC 日志、JFR、监控指标）。",
            "使用 GCEasy、JMC 分析 GC 和性能数据。",
            "模拟性能问题场景，练习定位和解决。",
            "记录调优过程和结果，建立知识库。"
        ],
        selfCheck: [
            "JVM 调优的基本原则是什么？",
            "性能的三大指标是什么？它们如何权衡？",
            "调优的基本流程是什么？",
            "如何避免调优的常见误区？",
            "如何定位不同类型的性能瓶颈？",
            "为什么升级 JDK 版本是有效的调优？"
        ],
        extensions: [
            "研究性能工程的方法论（如 USE Method、TSA Method）。",
            "了解 Google SRE 的性能管理实践。",
            "探索自动化性能测试和回归检测。",
            "研究 AI 辅助性能调优的前沿技术。"
        ],
        sourceUrls: [
            "https://www.brendangregg.com/methodology.html",
            "https://docs.oracle.com/en/java/javase/21/gctuning/",
            "https://www.baeldung.com/java-microbenchmark-harness"
        ]
    },
    "jvm-w20-2": {
        lessonId: "jvm-w20-2",
        background: [
            "【内存泄漏】症状：堆使用持续增长，Full GC 后释放很少，最终 OOM。诊断：获取堆转储，使用 MAT 分析 Retained Size 大的对象，追踪 GC Roots 路径。",
            "【CPU 飙高】症状：CPU 使用率持续 100%。诊断：top -H 找高 CPU 线程，jstack 获取线程转储，找到对应线程的调用栈。常见原因：死循环、正则回溯、GC。",
            "【响应变慢】症状：P99 延迟增加。可能原因：GC 暂停（检查 GC 日志）、锁竞争（线程转储）、外部依赖变慢（分布式追踪）、资源不足。",
            "【死锁】症状：线程卡住不进展。诊断：jstack 自动检测并报告死锁。原因：锁顺序不一致、获取锁超时不当。解决：使用 tryLock、统一锁顺序。",
            "【OOM 类型】Java heap space：堆不够。Metaspace：类太多。Direct buffer memory：DirectByteBuffer 太多。Unable to create new native thread：线程太多或系统限制。"
        ],
        keyDifficulties: [
            "【间歇性问题】难以复现的问题：启用持续监控（JFR 持续记录）、设置 -XX:+HeapDumpOnOutOfMemoryError、多次采样线程转储。问题发生时保留现场数据。",
            "【生产环境诊断】生产环境限制：不能随意重启、不能影响服务。使用低开销工具（JFR、async-profiler）。在问题窗口快速收集数据。准备好诊断脚本。",
            "【分布式问题】微服务环境问题定位更复杂。使用分布式追踪（如 Jaeger、Zipkin）。关联日志、指标、追踪数据。确定是哪个服务、哪个实例有问题。",
            "【ClassLoader 泄漏】应用重部署后老 ClassLoader 不释放。常见于使用 ThreadLocal、静态变量持有类引用。诊断：MAT 查看 ClassLoader 引用链。"
        ],
        handsOnPath: [
            "模拟内存泄漏（如无限增长的集合），使用 MAT 分析定位。",
            "模拟高 CPU（如死循环），使用 top + jstack 定位。",
            "模拟死锁，使用 jstack 检测。",
            "触发各种 OOM 类型，理解错误信息和解决方法。",
            "使用 JFR 持续记录，在问题发生时分析数据。"
        ],
        selfCheck: [
            "内存泄漏的症状和诊断方法是什么？",
            "如何定位高 CPU 线程？",
            "响应变慢可能的原因有哪些？",
            "如何检测和解决死锁？",
            "不同类型的 OOM 分别表示什么？",
            "如何诊断间歇性问题？"
        ],
        extensions: [
            "研究 Arthas 的在线诊断能力。",
            "了解 BTrace/JMC Agent 动态注入诊断代码。",
            "探索混沌工程在故障演练中的应用。",
            "研究 AIOps 在故障诊断中的应用。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/troubleshoot/",
            "https://arthas.aliyun.com/",
            "https://www.baeldung.com/java-memory-leaks"
        ]
    },
    "jvm-w20-3": {
        lessonId: "jvm-w20-3",
        background: [
            "【容器资源限制】容器限制 CPU 和内存。JVM 需要正确识别这些限制。JDK 10+ 默认开启 -XX:+UseContainerSupport。JDK 8u191+ 可手动开启。",
            "【CPU 限制】-XX:ActiveProcessorCount 手动设置 CPU 数。容器 CPU 限制可能是小数（如 0.5 核）。GC 线程数、ForkJoinPool 并行度都受影响。",
            "【内存限制】容器内存限制包括堆 + 非堆 + 其他（如 OS 缓存）。不要把 -Xmx 设置为容器限制的 100%，留 20-30% 给非堆和系统。使用 -XX:MaxRAMPercentage。",
            "【资源配额】-XX:MaxRAMPercentage=70：堆使用容器内存的 70%。-XX:InitialRAMPercentage=70：初始堆也是 70%。比固定 -Xmx 更灵活，适应不同容器配置。",
            "【启动时间】容器环境关注启动时间：Kubernetes 健康检查、弹性伸缩。优化：CDS、-XX:TieredStopAtLevel=1、GraalVM Native Image、减小堆初始大小。"
        ],
        keyDifficulties: [
            "【OOM Killer】容器内存超限会被 OOM Killer 杀死，不是 Java OOM。检查 dmesg 或容器日志。解决：增大容器内存限制或减小 JVM 内存使用。",
            "【CPU 节流】容器 CPU 限制可能导致节流（Throttling）。表现为延迟增加但 CPU 使用率看起来不高。检查 cgroup 的 cpu.stat 中的 throttled_time。",
            "【基础镜像】选择合适的 JDK 基础镜像：Alpine（小但兼容性问题）、Debian/Ubuntu（大但兼容好）、Distroless（最小但难调试）。考虑镜像大小和安全更新。",
            "【Kubernetes 配置】resources.requests：调度依据。resources.limits：硬限制。requests 和 limits 设置相同可以保证 QoS。合理设置 liveness/readiness probe。"
        ],
        handsOnPath: [
            "在 Docker 中运行 Java 应用，验证 JVM 对资源限制的识别。",
            "使用 -XX:MaxRAMPercentage 配置内存，观察效果。",
            "模拟容器内存超限，观察 OOM Killer 行为。",
            "在 Kubernetes 中部署 Java 应用，配置资源限制和健康检查。",
            "对比不同 JDK 基础镜像的大小和启动时间。"
        ],
        selfCheck: [
            "JVM 如何识别容器资源限制？",
            "-XX:MaxRAMPercentage 的作用是什么？",
            "为什么不应该把 -Xmx 设为容器限制的 100%？",
            "容器被 OOM Killer 杀死和 Java OOM 有什么区别？",
            "什么是 CPU 节流？如何检测？",
            "容器环境如何优化启动时间？"
        ],
        extensions: [
            "研究 JDK 的容器支持演进（JEP 181）。",
            "了解 GraalVM Native Image 在容器中的应用。",
            "探索 Kubernetes Java Operator 的使用。",
            "研究 Serverless Java（如 AWS Lambda）的优化策略。"
        ],
        sourceUrls: [
            "https://www.oracle.com/technical-resources/articles/java/anintroductiontojavacontainerization.html",
            "https://developers.redhat.com/articles/2022/04/19/best-practices-java-single-core-containers",
            "https://www.baeldung.com/ops/docker-jvm-heap-size"
        ]
    }
}

export const week20Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w20-1": [
        {
            id: "jvm-w20-1-q1",
            question: "JVM 调优的首要原则是什么？",
            options: [
                "先调参数再测量",
                "先测量再优化，用数据说话",
                "尽可能多调参数",
                "复制别人的配置"
            ],
            answer: 1,
            rationale: "调优首要原则：先测量再优化，用数据说话。不要凭感觉调优。"
        },
        {
            id: "jvm-w20-1-q2",
            question: "性能的三大指标是什么？",
            options: [
                "CPU、内存、磁盘",
                "吞吐量、延迟、容量",
                "GC、JIT、类加载",
                "堆、栈、Metaspace"
            ],
            answer: 1,
            rationale: "性能三大指标：吞吐量（应用运行时间占比）、延迟（响应时间）、容量（处理能力）。"
        },
        {
            id: "jvm-w20-1-q3",
            question: "调优时应该一次改几个参数？",
            options: [
                "尽可能多",
                "一次只改一个，观察效果",
                "随意改",
                "全部改完再测"
            ],
            answer: 1,
            rationale: "一次只改一个参数，观察效果。这样才能知道哪个改动产生了影响。"
        },
        {
            id: "jvm-w20-1-q4",
            question: "为什么升级 JDK 版本是有效的调优？",
            options: [
                "新版有新功能",
                "新版 JVM 通常有性能改进和优化",
                "新版更稳定",
                "新版更安全"
            ],
            answer: 1,
            rationale: "新版 JDK 通常包含 GC、JIT、运行时的性能改进。JDK 11→17→21 都有显著优化。"
        },
        {
            id: "jvm-w20-1-q5",
            question: "如何定位 CPU 密集型瓶颈？",
            options: [
                "看 GC 日志",
                "火焰图分析热点",
                "堆转储分析",
                "线程转储"
            ],
            answer: 1,
            rationale: "CPU 密集型瓶颈使用火焰图（async-profiler、JFR）分析热点方法。"
        },
        {
            id: "jvm-w20-1-q6",
            question: "使用什么工具进行微基准测试？",
            options: [
                "JUnit",
                "JMH",
                "Mockito",
                "JFR"
            ],
            answer: 1,
            rationale: "JMH（Java Microbenchmark Harness）是 OpenJDK 官方的微基准测试框架。"
        },
        {
            id: "jvm-w20-1-q7",
            question: "延迟敏感应用应该关注什么指标？",
            options: [
                "平均延迟",
                "P99/P999 延迟",
                "最小延迟",
                "吞吐量"
            ],
            answer: 1,
            rationale: "延迟敏感应用应关注 P99/P999 延迟（99% 或 99.9% 请求的延迟），而非平均值。"
        },
        {
            id: "jvm-w20-1-q8",
            question: "调优的常见误区是什么？",
            options: [
                "测量太多",
                "迷信参数模板、禁用自适应机制、追求极致",
                "改参数太少",
                "升级 JDK"
            ],
            answer: 1,
            rationale: "常见误区：迷信参数模板（每个应用不同）、禁用 JVM 自适应机制、追求极致参数。"
        },
        {
            id: "jvm-w20-1-q9",
            question: "调优的基本流程是什么？",
            options: [
                "直接调参数",
                "确定目标→收集数据→分析瓶颈→制定方案→验证效果→记录文档",
                "复制配置→运行",
                "升级版本"
            ],
            answer: 1,
            rationale: "调优流程：确定目标→收集数据→分析瓶颈→制定方案→验证效果→记录文档。"
        },
        {
            id: "jvm-w20-1-q10",
            question: "如何定位 I/O 阻塞问题？",
            options: [
                "GC 日志",
                "async-profiler wall 模式",
                "堆转储",
                "CPU 火焰图"
            ],
            answer: 1,
            rationale: "I/O 阻塞问题使用 async-profiler 的 wall 模式，它采样挂钟时间包括等待时间。"
        },
        {
            id: "jvm-w20-1-q11",
            question: "为什么需要持续监控？",
            options: [
                "调优只做一次",
                "应用负载、数据量、代码都会变化，需要及时发现问题",
                "不需要监控",
                "只需要 GC 日志"
            ],
            answer: 1,
            rationale: "调优不是一次性工作。应用负载、数据量、代码会变化，需要持续监控及时发现问题。"
        },
        {
            id: "jvm-w20-1-q12",
            question: "如何定位锁竞争问题？",
            options: [
                "GC 日志",
                "线程转储分析 BLOCKED 线程，或 JFR 锁事件",
                "堆转储",
                "CPU 使用率"
            ],
            answer: 1,
            rationale: "锁竞争使用线程转储（jstack）分析 BLOCKED 线程，或 JFR 的锁事件分析。"
        }
    ],
    "jvm-w20-2": [
        {
            id: "jvm-w20-2-q1",
            question: "内存泄漏的典型症状是什么？",
            options: [
                "CPU 高",
                "堆使用持续增长，Full GC 后释放很少",
                "线程多",
                "启动慢"
            ],
            answer: 1,
            rationale: "内存泄漏症状：堆使用持续增长，Full GC 后释放很少，最终 OOM。"
        },
        {
            id: "jvm-w20-2-q2",
            question: "如何诊断内存泄漏？",
            options: [
                "看 GC 日志",
                "获取堆转储，使用 MAT 分析 Retained Size 大的对象",
                "看线程转储",
                "看 CPU 使用"
            ],
            answer: 1,
            rationale: "诊断内存泄漏：获取堆转储，使用 MAT 分析 Retained Size 大的对象，追踪 GC Roots 路径。"
        },
        {
            id: "jvm-w20-2-q3",
            question: "如何定位高 CPU 线程？",
            options: [
                "看堆转储",
                "top -H 找高 CPU 线程 tid，转十六进制后在 jstack 中搜索",
                "看 GC 日志",
                "看内存使用"
            ],
            answer: 1,
            rationale: "定位高 CPU：top -H -p <pid> 找高 CPU 线程 tid，转为十六进制，在 jstack 中搜索 nid=0x...。"
        },
        {
            id: "jvm-w20-2-q4",
            question: "jstack 可以自动检测什么问题？",
            options: [
                "内存泄漏",
                "死锁",
                "CPU 高",
                "OOM"
            ],
            answer: 1,
            rationale: "jstack 可以自动检测死锁，并在线程转储末尾报告 'Found one Java-level deadlock'。"
        },
        {
            id: "jvm-w20-2-q5",
            question: "OOM: Java heap space 表示什么？",
            options: [
                "Metaspace 不够",
                "堆内存不够",
                "栈溢出",
                "线程太多"
            ],
            answer: 1,
            rationale: "OOM: Java heap space 表示堆内存不够，需要增大 -Xmx 或优化内存使用。"
        },
        {
            id: "jvm-w20-2-q6",
            question: "OOM: Metaspace 表示什么？",
            options: [
                "堆不够",
                "类元数据空间不够，类太多",
                "栈溢出",
                "线程太多"
            ],
            answer: 1,
            rationale: "OOM: Metaspace 表示类元数据空间不够，通常是动态生成类太多或 ClassLoader 泄漏。"
        },
        {
            id: "jvm-w20-2-q7",
            question: "如何诊断间歇性问题？",
            options: [
                "等问题复现",
                "启用持续监控（JFR 持续记录）、HeapDumpOnOutOfMemoryError、多次采样",
                "忽略问题",
                "重启解决"
            ],
            answer: 1,
            rationale: "间歇性问题：启用持续监控（JFR）、HeapDumpOnOutOfMemoryError、多次采样线程转储，保留现场数据。"
        },
        {
            id: "jvm-w20-2-q8",
            question: "响应变慢的可能原因有哪些？",
            options: [
                "只有 GC",
                "GC 暂停、锁竞争、外部依赖变慢、资源不足",
                "只有网络",
                "只有代码问题"
            ],
            answer: 1,
            rationale: "响应变慢可能原因：GC 暂停、锁竞争、外部依赖变慢、资源（CPU/内存/IO）不足。"
        },
        {
            id: "jvm-w20-2-q9",
            question: "生产环境诊断有什么限制？",
            options: [
                "没有限制",
                "不能随意重启、不能影响服务、需要低开销工具",
                "可以随意操作",
                "必须停服务"
            ],
            answer: 1,
            rationale: "生产环境限制：不能随意重启、不能影响服务。使用低开销工具（JFR、async-profiler）。"
        },
        {
            id: "jvm-w20-2-q10",
            question: "什么是 ClassLoader 泄漏？",
            options: [
                "类加载太慢",
                "应用重部署后老 ClassLoader 不释放，被 ThreadLocal/静态变量持有",
                "类加载失败",
                "类太多"
            ],
            answer: 1,
            rationale: "ClassLoader 泄漏：应用重部署后老 ClassLoader 不释放，常因 ThreadLocal、静态变量持有类引用。"
        },
        {
            id: "jvm-w20-2-q11",
            question: "Unable to create new native thread 表示什么？",
            options: [
                "堆不够",
                "线程太多或系统限制（ulimit）",
                "CPU 不够",
                "内存泄漏"
            ],
            answer: 1,
            rationale: "Unable to create new native thread 表示线程太多或系统限制，检查线程数和 ulimit 设置。"
        },
        {
            id: "jvm-w20-2-q12",
            question: "什么工具可以在线诊断 Java 应用？",
            options: [
                "MAT",
                "Arthas",
                "GCEasy",
                "JMH"
            ],
            answer: 1,
            rationale: "Arthas 是阿里开源的 Java 在线诊断工具，可以不重启应用进行诊断。"
        }
    ],
    "jvm-w20-3": [
        {
            id: "jvm-w20-3-q1",
            question: "JVM 如何识别容器资源限制？",
            options: [
                "无法识别",
                "JDK 10+ 默认开启 -XX:+UseContainerSupport",
                "需要特殊配置",
                "只看物理内存"
            ],
            answer: 1,
            rationale: "JDK 10+ 默认开启 -XX:+UseContainerSupport，自动识别容器 CPU 和内存限制。"
        },
        {
            id: "jvm-w20-3-q2",
            question: "-XX:MaxRAMPercentage=70 的作用是什么？",
            options: [
                "设置物理内存",
                "堆使用容器内存的 70%",
                "设置 CPU",
                "设置 GC 比例"
            ],
            answer: 1,
            rationale: "-XX:MaxRAMPercentage=70 表示堆使用容器内存限制的 70%，比固定 -Xmx 更灵活。"
        },
        {
            id: "jvm-w20-3-q3",
            question: "为什么不应该把 -Xmx 设为容器限制的 100%？",
            options: [
                "性能问题",
                "需要留空间给非堆（Metaspace、Code Cache）和系统",
                "浪费内存",
                "启动慢"
            ],
            answer: 1,
            rationale: "容器内存需要分配给堆 + 非堆 + 系统开销，-Xmx 100% 会导致内存超限被 OOM Killer 杀死。"
        },
        {
            id: "jvm-w20-3-q4",
            question: "容器被 OOM Killer 杀死和 Java OOM 有什么区别？",
            options: [
                "没有区别",
                "OOM Killer 是系统杀进程，Java OOM 是 JVM 抛异常",
                "Java OOM 更严重",
                "OOM Killer 可以恢复"
            ],
            answer: 1,
            rationale: "OOM Killer 是 Linux 系统在内存超限时杀死进程，不是 Java OOM。检查 dmesg 或容器日志。"
        },
        {
            id: "jvm-w20-3-q5",
            question: "什么是 CPU 节流（Throttling）？",
            options: [
                "CPU 过热",
                "容器 CPU 限制导致进程被暂停，延迟增加但 CPU 使用率看起来不高",
                "CPU 不够",
                "GC 问题"
            ],
            answer: 1,
            rationale: "CPU 节流：容器 CPU 限制导致进程被暂停。表现为延迟增加但 CPU 使用率看起来不高。"
        },
        {
            id: "jvm-w20-3-q6",
            question: "如何检测 CPU 节流？",
            options: [
                "看 CPU 使用率",
                "检查 cgroup 的 cpu.stat 中的 throttled_time",
                "看内存使用",
                "看 GC 日志"
            ],
            answer: 1,
            rationale: "检测 CPU 节流：查看 cgroup 的 cpu.stat 文件中的 throttled_time 指标。"
        },
        {
            id: "jvm-w20-3-q7",
            question: "容器环境如何优化启动时间？",
            options: [
                "增大堆",
                "CDS、-XX:TieredStopAtLevel=1、GraalVM Native Image",
                "使用更多 CPU",
                "禁用 GC"
            ],
            answer: 1,
            rationale: "启动优化：CDS 类数据共享、-XX:TieredStopAtLevel=1 只用 C1、GraalVM Native Image AOT 编译。"
        },
        {
            id: "jvm-w20-3-q8",
            question: "-XX:ActiveProcessorCount 的作用是什么？",
            options: [
                "设置线程数",
                "手动设置 JVM 识别的 CPU 数",
                "设置 GC 线程",
                "设置并行度"
            ],
            answer: 1,
            rationale: "-XX:ActiveProcessorCount 手动设置 JVM 识别的 CPU 数，影响 GC 线程数和 ForkJoinPool 并行度。"
        },
        {
            id: "jvm-w20-3-q9",
            question: "Kubernetes 中 resources.requests 和 limits 的区别是什么？",
            options: [
                "没有区别",
                "requests 是调度依据，limits 是硬限制",
                "limits 更重要",
                "requests 更重要"
            ],
            answer: 1,
            rationale: "requests 是调度依据（节点选择），limits 是硬限制（超过会被限制或杀死）。"
        },
        {
            id: "jvm-w20-3-q10",
            question: "选择 JDK 基础镜像应该考虑什么？",
            options: [
                "只看大小",
                "镜像大小、兼容性、安全更新、调试便利性",
                "只看版本",
                "随意选择"
            ],
            answer: 1,
            rationale: "选择 JDK 镜像考虑：镜像大小、兼容性（Alpine musl libc）、安全更新、调试便利性。"
        },
        {
            id: "jvm-w20-3-q11",
            question: "容器中留给非堆和系统的内存比例建议是多少？",
            options: [
                "5%",
                "20-30%",
                "50%",
                "不需要预留"
            ],
            answer: 1,
            rationale: "建议留 20-30% 给非堆（Metaspace、Code Cache、Direct Buffer）和系统开销。"
        },
        {
            id: "jvm-w20-3-q12",
            question: "JDK 8 如何开启容器支持？",
            options: [
                "默认开启",
                "JDK 8u191+ 使用 -XX:+UseCGroupMemoryLimitForHeap",
                "无法开启",
                "升级到 JDK 11"
            ],
            answer: 1,
            rationale: "JDK 8u191+ 可以使用 -XX:+UseCGroupMemoryLimitForHeap 开启容器内存限制识别。"
        }
    ]
}
