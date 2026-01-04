import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week14Guides: Record<string, LessonGuide> = {
    "jvm-w14-1": {
        lessonId: "jvm-w14-1",
        background: [
            "【ZGC 简介】ZGC（Z Garbage Collector）是 Oracle 开发的低延迟垃圾收集器。设计目标是暂停时间不超过 1ms，且与堆大小无关。支持 TB 级堆。Java 15 正式发布。",
            "【Colored Pointers】ZGC 的核心技术是 Colored Pointers（着色指针）。在 64 位指针中使用几个 bit 存储元数据：Finalizable、Remapped、Marked1、Marked0。这些标记用于并发处理。",
            "【Load Barrier】ZGC 使用 Load Barrier（读屏障/加载屏障）而非写屏障。每次加载引用时检查指针颜色，如果需要则进行处理（如修复指针、标记对象）。",
            "【并发处理】ZGC 的大部分工作都是并发进行的：并发标记、并发转移准备、并发转移（对象移动）、并发重定位。只有初始标记和最终标记需要短暂 STW。",
            "【Region 设计】ZGC 也使用 Region（称为 ZPage），有三种大小：Small（2MB）、Medium（32MB）、Large（N*2MB）。Large Page 用于大对象，大小是 2MB 的整数倍。"
        ],
        keyDifficulties: [
            "【指针自愈】当 Load Barrier 检测到指针需要修复时，会原地更新引用（Self-Healing）。这样下次访问同一引用时不需要再处理。减少了重复的屏障开销。",
            "【多重映射】ZGC 使用多重映射（Multi-Mapping）技术：同一物理内存映射到多个虚拟地址，每个映射对应不同的指针视图。这使得指针颜色切换非常高效。",
            "【并发转移】ZGC 可以在应用运行时移动对象（并发转移）。通过 Load Barrier 和转发表（Forwarding Table），确保应用总是访问到正确的对象位置。",
            "【内存占用】ZGC 需要额外的内存：多重映射需要更多虚拟地址空间，转发表占用堆外内存。建议给 ZGC 预留足够的内存余量。"
        ],
        handsOnPath: [
            "使用 -XX:+UseZGC 启用 ZGC。",
            "使用 -Xlog:gc*=info 观察 ZGC 的 GC 日志。",
            "创建大堆应用（如 -Xmx64g），验证 ZGC 的暂停时间不随堆增大而增加。",
            "使用 jcmd <pid> GC.heap_info 查看 ZGC 的堆信息。",
            "对比 ZGC 和 G1 在相同负载下的暂停时间差异。"
        ],
        selfCheck: [
            "ZGC 的设计目标是什么？",
            "什么是 Colored Pointers？它存储什么信息？",
            "ZGC 为什么使用 Load Barrier 而不是 Write Barrier？",
            "ZGC 的 Region（ZPage）有哪几种大小？",
            "什么是指针自愈（Self-Healing）？",
            "ZGC 的并发转移是如何实现的？"
        ],
        extensions: [
            "研究 ZGC 的 Colored Pointers 在不同平台上的实现差异。",
            "了解 ZGC 的内存多重映射技术细节。",
            "探索 ZGC 与 NUMA 的交互。",
            "研究 ZGC 在不同 JDK 版本中的演进。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/en/java/javase/21/gctuning/z-garbage-collector.html",
            "https://malloc.se/blog/zgc-jdk16",
            "https://www.baeldung.com/jvm-zgc-garbage-collector"
        ]
    },
    "jvm-w14-2": {
        lessonId: "jvm-w14-2",
        background: [
            "【分代 ZGC 背景】早期 ZGC 是非分代的，所有对象同等对待。这在处理大量短命对象时效率不高。Java 21 引入 Generational ZGC（JEP 439），结合分代和低延迟的优势。",
            "【启用方式】Java 21：-XX:+UseZGC -XX:+ZGenerational 启用分代 ZGC。Java 23+：分代 ZGC 成为默认，-XX:+UseZGC 即可。非分代 ZGC：-XX:+UseZGC -XX:-ZGenerational。",
            "【性能提升】分代 ZGC 相比非分代版本可提升最高 4 倍吞吐量，同时保持亚毫秒级暂停。对于短命对象多的应用（如 Web 服务）改进尤为明显。",
            "【年轻代收集】分代 ZGC 为年轻代使用专门的收集策略，频繁收集短命对象。年轻代收集更快更高效，减少了老年代的压力。",
            "【向后兼容】分代 ZGC 保持了与非分代 ZGC 相同的暂停时间保证（<1ms）。现有使用 ZGC 的应用可以无缝迁移到分代 ZGC。"
        ],
        keyDifficulties: [
            "【记忆集变化】分代 ZGC 引入了跨代引用追踪。使用不同于 G1 的记忆集实现，与 Load Barrier 配合工作，维护成本更低。",
            "【双色指针】分代 ZGC 使用两组颜色标记分别标记年轻代和老年代对象。指针中包含更多元数据信息。",
            "【年轻代大小】分代 ZGC 动态调整年轻代大小。可以通过 -XX:ZYoungGCThreads 等参数进行一定程度的调优，但通常使用默认值即可。",
            "【选择建议】Java 21+：优先使用分代 ZGC，它在大多数场景下性能更好。只有特殊情况（如极低延迟要求、特定的内存模式）才考虑非分代 ZGC。"
        ],
        handsOnPath: [
            "在 Java 21 上使用 -XX:+UseZGC -XX:+ZGenerational 启用分代 ZGC。",
            "对比分代 ZGC 和非分代 ZGC 在相同负载下的吞吐量差异。",
            "使用 -Xlog:gc* 观察分代 ZGC 的年轻代收集和老年代收集。",
            "使用 JMH 基准测试对比不同 GC 的性能。",
            "在 Web 应用中测试分代 ZGC 的效果。"
        ],
        selfCheck: [
            "为什么要在 ZGC 中引入分代？",
            "如何在 Java 21 中启用分代 ZGC？",
            "分代 ZGC 相比非分代版本有什么性能提升？",
            "分代 ZGC 的暂停时间保证是什么？",
            "什么场景下分代 ZGC 改进最明显？",
            "什么时候应该选择非分代 ZGC？"
        ],
        extensions: [
            "研究 JEP 439: Generational ZGC 的设计决策。",
            "了解分代 ZGC 的记忆集实现与 G1 的区别。",
            "探索 ZGC 在不同 JDK 版本中的默认行为变化。",
            "研究分代 ZGC 在云原生环境中的应用。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/439",
            "https://malloc.se/blog/zgc-jdk21",
            "https://inside.java/2023/09/26/zgc-generational/"
        ]
    },
    "jvm-w14-3": {
        lessonId: "jvm-w14-3",
        background: [
            "【Shenandoah 简介】Shenandoah 是 Red Hat 开发的低延迟垃圾收集器，目标与 ZGC 类似：亚毫秒级暂停时间，与堆大小无关。它是 OpenJDK 的一部分，但 Oracle JDK 不包含。",
            "【Brooks Pointer】Shenandoah 使用 Brooks Pointer（布鲁克斯指针）技术。每个对象头部有一个额外的转发指针，指向对象当前的实际位置。对象移动时只需更新转发指针。",
            "【并发压缩】Shenandoah 可以在应用运行时移动对象（并发压缩）。通过 Brooks Pointer 和读写屏障确保应用总是访问到正确的对象。",
            "【收集阶段】Shenandoah 的收集周期包括：Init Mark（STW）→ Concurrent Mark → Final Mark（STW）→ Concurrent Cleanup → Concurrent Evacuation → Init Update Refs（STW）→ Concurrent Update Refs → Final Update Refs（STW）→ Concurrent Cleanup。",
            "【与 ZGC 比较】Shenandoah 和 ZGC 目标相同但实现不同：ZGC 用 Colored Pointers 和 Load Barrier；Shenandoah 用 Brooks Pointer 和读写屏障。两者性能相近，选择取决于具体场景和 JDK 发行版。"
        ],
        keyDifficulties: [
            "【读写屏障】Shenandoah 使用读屏障和写屏障。读屏障确保读取到的是对象的最新位置；写屏障维护并发标记的正确性。屏障开销是 Shenandoah 的主要成本。",
            "【Load Reference Barrier】Shenandoah 2.0 引入了 Load Reference Barrier（LRB），优化了屏障实现，减少了读屏障的开销。大多数读操作不再需要屏障。",
            "【对象头开销】Brooks Pointer 需要在每个对象头部增加一个额外的字（8 字节），增加了内存开销。这是 Shenandoah 与 ZGC（使用指针位）的主要差异之一。",
            "【JDK 支持】Shenandoah 在 OpenJDK 中可用，但 Oracle JDK 不包含。使用 Shenandoah 需要选择支持它的 JDK 发行版（如 Red Hat OpenJDK、Adoptium）。"
        ],
        handsOnPath: [
            "使用支持 Shenandoah 的 JDK（如 Red Hat OpenJDK）。",
            "使用 -XX:+UseShenandoahGC 启用 Shenandoah。",
            "使用 -Xlog:gc*=info 观察 Shenandoah 的 GC 日志。",
            "对比 Shenandoah 和 G1 在相同负载下的暂停时间。",
            "使用 async-profiler 分析 Shenandoah 的开销。"
        ],
        selfCheck: [
            "Shenandoah 是由谁开发的？",
            "什么是 Brooks Pointer？它如何支持并发压缩？",
            "Shenandoah 和 ZGC 的主要技术差异是什么？",
            "Shenandoah 的收集周期包括哪些阶段？",
            "Oracle JDK 是否包含 Shenandoah？",
            "什么是 Load Reference Barrier？"
        ],
        extensions: [
            "研究 Shenandoah 的 Passive 模式和其他运行模式。",
            "了解 Shenandoah 在不同 JDK 版本中的演进。",
            "探索 Shenandoah 和 ZGC 的性能对比研究。",
            "研究低延迟 GC 在金融交易系统中的应用。"
        ],
        sourceUrls: [
            "https://wiki.openjdk.org/display/shenandoah/Main",
            "https://developers.redhat.com/articles/2024/05/28/beginners-guide-shenandoah-garbage-collector",
            "https://www.baeldung.com/jvm-garbage-collectors#shenandoah"
        ]
    }
}

export const week14Quizzes: Record<string, QuizQuestion[]> = {
    "jvm-w14-1": [
        {
            id: "jvm-w14-1-q1",
            question: "ZGC 的暂停时间目标是多少？",
            options: [
                "10ms",
                "不超过 1ms",
                "100ms",
                "200ms"
            ],
            answer: 1,
            rationale: "ZGC 的设计目标是暂停时间不超过 1ms，且与堆大小无关。"
        },
        {
            id: "jvm-w14-1-q2",
            question: "什么是 Colored Pointers？",
            options: [
                "彩色打印",
                "在指针中使用几个 bit 存储元数据（标记信息）",
                "指针着色算法",
                "内存着色"
            ],
            answer: 1,
            rationale: "Colored Pointers 在 64 位指针中使用几个 bit 存储元数据：Finalizable、Remapped、Marked1、Marked0 等标记。"
        },
        {
            id: "jvm-w14-1-q3",
            question: "ZGC 使用什么类型的屏障？",
            options: [
                "Write Barrier（写屏障）",
                "Load Barrier（读屏障/加载屏障）",
                "同时使用两种",
                "不使用屏障"
            ],
            answer: 1,
            rationale: "ZGC 使用 Load Barrier（读屏障），每次加载引用时检查指针颜色并进行必要的处理。"
        },
        {
            id: "jvm-w14-1-q4",
            question: "ZGC 正式发布于 Java 哪个版本？",
            options: [
                "Java 11",
                "Java 13",
                "Java 15",
                "Java 17"
            ],
            answer: 2,
            rationale: "ZGC 在 Java 11 中作为实验性功能引入，Java 15 正式发布（Production Ready）。"
        },
        {
            id: "jvm-w14-1-q5",
            question: "ZGC 的 ZPage（Region）有几种大小？",
            options: [
                "1 种",
                "2 种",
                "3 种（Small、Medium、Large）",
                "4 种"
            ],
            answer: 2,
            rationale: "ZGC 的 ZPage 有三种大小：Small（2MB）、Medium（32MB）、Large（N*2MB 用于大对象）。"
        },
        {
            id: "jvm-w14-1-q6",
            question: "什么是指针自愈（Self-Healing）？",
            options: [
                "指针自动修复 bug",
                "Load Barrier 检测到需要修复的指针时原地更新引用",
                "指针自动优化",
                "内存自动回收"
            ],
            answer: 1,
            rationale: "指针自愈：当 Load Barrier 检测到指针需要修复时，原地更新引用，下次访问不需要再处理。"
        },
        {
            id: "jvm-w14-1-q7",
            question: "ZGC 的并发转移如何保证正确性？",
            options: [
                "STW",
                "通过 Load Barrier 和转发表确保应用访问到正确的对象位置",
                "禁止对象移动",
                "复制所有对象"
            ],
            answer: 1,
            rationale: "ZGC 通过 Load Barrier 和转发表（Forwarding Table），确保应用在并发转移期间总是访问到正确的对象位置。"
        },
        {
            id: "jvm-w14-1-q8",
            question: "什么是多重映射（Multi-Mapping）？",
            options: [
                "多个堆",
                "同一物理内存映射到多个虚拟地址",
                "多个 GC 同时运行",
                "多线程映射"
            ],
            answer: 1,
            rationale: "多重映射：同一物理内存映射到多个虚拟地址，每个映射对应不同的指针视图，使指针颜色切换非常高效。"
        },
        {
            id: "jvm-w14-1-q9",
            question: "ZGC 支持多大的堆？",
            options: [
                "最大 32GB",
                "最大 64GB",
                "支持 TB 级堆",
                "没有限制"
            ],
            answer: 2,
            rationale: "ZGC 设计支持 TB 级堆，暂停时间与堆大小无关，非常适合大内存应用。"
        },
        {
            id: "jvm-w14-1-q10",
            question: "如何启用 ZGC？",
            options: [
                "-XX:+UseG1GC",
                "-XX:+UseZGC",
                "-XX:+UseShenandoahGC",
                "-XX:+UseParallelGC"
            ],
            answer: 1,
            rationale: "使用 -XX:+UseZGC 启用 ZGC。Java 21+ 可以加 -XX:+ZGenerational 启用分代 ZGC。"
        },
        {
            id: "jvm-w14-1-q11",
            question: "ZGC 的大部分工作是如何进行的？",
            options: [
                "STW",
                "并发进行",
                "增量进行",
                "串行进行"
            ],
            answer: 1,
            rationale: "ZGC 的大部分工作（标记、转移、重定位）都是并发进行的，只有初始标记和最终标记需要短暂 STW。"
        },
        {
            id: "jvm-w14-1-q12",
            question: "ZGC 需要额外的什么资源？",
            options: [
                "更多 CPU",
                "额外内存（多重映射和转发表）",
                "更多磁盘",
                "不需要额外资源"
            ],
            answer: 1,
            rationale: "ZGC 需要额外内存：多重映射需要更多虚拟地址空间，转发表占用堆外内存。建议预留足够内存余量。"
        }
    ],
    "jvm-w14-2": [
        {
            id: "jvm-w14-2-q1",
            question: "分代 ZGC 在哪个 Java 版本引入？",
            options: [
                "Java 17",
                "Java 19",
                "Java 21",
                "Java 23"
            ],
            answer: 2,
            rationale: "分代 ZGC（Generational ZGC，JEP 439）在 Java 21 引入。"
        },
        {
            id: "jvm-w14-2-q2",
            question: "Java 21 中如何启用分代 ZGC？",
            options: [
                "-XX:+UseZGC",
                "-XX:+UseZGC -XX:+ZGenerational",
                "-XX:+UseG1GC",
                "-XX:+UseGenerationalZGC"
            ],
            answer: 1,
            rationale: "Java 21 中使用 -XX:+UseZGC -XX:+ZGenerational 启用分代 ZGC。Java 23+ 默认启用。"
        },
        {
            id: "jvm-w14-2-q3",
            question: "分代 ZGC 相比非分代版本性能提升多少？",
            options: [
                "10%",
                "50%",
                "最高 4 倍吞吐量",
                "没有提升"
            ],
            answer: 2,
            rationale: "分代 ZGC 相比非分代版本可提升最高 4 倍吞吐量，同时保持亚毫秒级暂停。"
        },
        {
            id: "jvm-w14-2-q4",
            question: "什么场景下分代 ZGC 改进最明显？",
            options: [
                "长期存活对象多的应用",
                "短命对象多的应用（如 Web 服务）",
                "大对象多的应用",
                "所有场景都一样"
            ],
            answer: 1,
            rationale: "分代 ZGC 对短命对象多的应用（如 Web 服务）改进尤为明显，年轻代收集更高效。"
        },
        {
            id: "jvm-w14-2-q5",
            question: "分代 ZGC 的暂停时间保证是什么？",
            options: [
                "10ms",
                "保持亚毫秒级（<1ms）",
                "100ms",
                "没有保证"
            ],
            answer: 1,
            rationale: "分代 ZGC 保持与非分代 ZGC 相同的暂停时间保证：亚毫秒级（<1ms）。"
        },
        {
            id: "jvm-w14-2-q6",
            question: "Java 23+ 中 ZGC 的默认行为是什么？",
            options: [
                "非分代 ZGC",
                "分代 ZGC 成为默认",
                "禁用 ZGC",
                "G1GC"
            ],
            answer: 1,
            rationale: "Java 23+ 中分代 ZGC 成为默认，使用 -XX:+UseZGC 即启用分代 ZGC。"
        },
        {
            id: "jvm-w14-2-q7",
            question: "如何在 Java 23+ 中使用非分代 ZGC？",
            options: [
                "-XX:+UseZGC",
                "-XX:+UseZGC -XX:-ZGenerational",
                "-XX:+UseOldZGC",
                "无法使用"
            ],
            answer: 1,
            rationale: "Java 23+ 中使用 -XX:+UseZGC -XX:-ZGenerational 可以禁用分代，使用非分代 ZGC。"
        },
        {
            id: "jvm-w14-2-q8",
            question: "为什么要在 ZGC 中引入分代？",
            options: [
                "减少内存使用",
                "非分代 ZGC 处理大量短命对象效率不高",
                "简化实现",
                "兼容 G1"
            ],
            answer: 1,
            rationale: "早期 ZGC 是非分代的，所有对象同等对待。对于大量短命对象效率不高，引入分代可以更高效处理。"
        },
        {
            id: "jvm-w14-2-q9",
            question: "分代 ZGC 是否向后兼容？",
            options: [
                "不兼容，需要修改代码",
                "是，现有 ZGC 应用可以无缝迁移",
                "部分兼容",
                "需要重新编译"
            ],
            answer: 1,
            rationale: "分代 ZGC 保持向后兼容，现有使用 ZGC 的应用可以无缝迁移到分代 ZGC。"
        },
        {
            id: "jvm-w14-2-q10",
            question: "分代 ZGC 的年轻代大小是如何确定的？",
            options: [
                "固定大小",
                "动态调整",
                "用户必须设置",
                "等于老年代"
            ],
            answer: 1,
            rationale: "分代 ZGC 动态调整年轻代大小，通常使用默认值即可。"
        },
        {
            id: "jvm-w14-2-q11",
            question: "什么时候应该选择非分代 ZGC？",
            options: [
                "所有场景",
                "特殊情况（如极低延迟要求、特定内存模式）",
                "永远不应该",
                "Java 21 之前"
            ],
            answer: 1,
            rationale: "Java 21+ 优先使用分代 ZGC。只有特殊情况（极低延迟要求、特定内存模式）才考虑非分代 ZGC。"
        },
        {
            id: "jvm-w14-2-q12",
            question: "JEP 439 是关于什么的？",
            options: [
                "G1GC 改进",
                "Generational ZGC（分代 ZGC）",
                "Shenandoah",
                "内存管理"
            ],
            answer: 1,
            rationale: "JEP 439 是关于 Generational ZGC（分代 ZGC）的提案，在 Java 21 中实现。"
        }
    ],
    "jvm-w14-3": [
        {
            id: "jvm-w14-3-q1",
            question: "Shenandoah 是由谁开发的？",
            options: [
                "Oracle",
                "Red Hat",
                "Google",
                "IBM"
            ],
            answer: 1,
            rationale: "Shenandoah 是由 Red Hat 开发的低延迟垃圾收集器，是 OpenJDK 的一部分。"
        },
        {
            id: "jvm-w14-3-q2",
            question: "什么是 Brooks Pointer？",
            options: [
                "一种算法",
                "每个对象头部的额外转发指针",
                "内存映射",
                "GC Root"
            ],
            answer: 1,
            rationale: "Brooks Pointer 是每个对象头部的额外转发指针，指向对象当前的实际位置，支持并发压缩。"
        },
        {
            id: "jvm-w14-3-q3",
            question: "Shenandoah 和 ZGC 的主要技术差异是什么？",
            options: [
                "完全相同",
                "ZGC 用 Colored Pointers 和 Load Barrier；Shenandoah 用 Brooks Pointer 和读写屏障",
                "Shenandoah 更快",
                "ZGC 不能并发"
            ],
            answer: 1,
            rationale: "技术差异：ZGC 使用 Colored Pointers 和 Load Barrier；Shenandoah 使用 Brooks Pointer 和读写屏障。"
        },
        {
            id: "jvm-w14-3-q4",
            question: "Oracle JDK 是否包含 Shenandoah？",
            options: [
                "是",
                "否",
                "只有付费版",
                "只有 Java 21+"
            ],
            answer: 1,
            rationale: "Shenandoah 在 OpenJDK 中可用，但 Oracle JDK 不包含。需要使用 Red Hat OpenJDK、Adoptium 等发行版。"
        },
        {
            id: "jvm-w14-3-q5",
            question: "如何启用 Shenandoah？",
            options: [
                "-XX:+UseZGC",
                "-XX:+UseShenandoahGC",
                "-XX:+UseG1GC",
                "-XX:+UseParallelGC"
            ],
            answer: 1,
            rationale: "使用 -XX:+UseShenandoahGC 启用 Shenandoah。需要使用支持它的 JDK 发行版。"
        },
        {
            id: "jvm-w14-3-q6",
            question: "Shenandoah 使用什么类型的屏障？",
            options: [
                "只有写屏障",
                "读屏障和写屏障",
                "只有读屏障",
                "不使用屏障"
            ],
            answer: 1,
            rationale: "Shenandoah 使用读屏障（确保读取到最新位置）和写屏障（维护并发标记正确性）。"
        },
        {
            id: "jvm-w14-3-q7",
            question: "Brooks Pointer 会增加多少内存开销？",
            options: [
                "无开销",
                "每个对象增加 8 字节（一个字）",
                "每个对象增加 1 字节",
                "取决于对象大小"
            ],
            answer: 1,
            rationale: "Brooks Pointer 需要在每个对象头部增加一个额外的字（8 字节），增加了内存开销。"
        },
        {
            id: "jvm-w14-3-q8",
            question: "什么是 Load Reference Barrier（LRB）？",
            options: [
                "加载屏障",
                "Shenandoah 2.0 优化的屏障实现，减少读屏障开销",
                "写屏障优化",
                "内存屏障"
            ],
            answer: 1,
            rationale: "LRB 是 Shenandoah 2.0 引入的优化，减少了读屏障的开销，大多数读操作不再需要屏障。"
        },
        {
            id: "jvm-w14-3-q9",
            question: "Shenandoah 的暂停时间目标是什么？",
            options: [
                "10ms",
                "亚毫秒级（<1ms）",
                "100ms",
                "200ms"
            ],
            answer: 1,
            rationale: "Shenandoah 的目标与 ZGC 类似：亚毫秒级暂停时间，与堆大小无关。"
        },
        {
            id: "jvm-w14-3-q10",
            question: "Shenandoah 的并发压缩是如何实现的？",
            options: [
                "STW",
                "通过 Brooks Pointer 和屏障确保应用访问正确的对象",
                "不支持并发压缩",
                "复制整个堆"
            ],
            answer: 1,
            rationale: "Shenandoah 通过 Brooks Pointer 和读写屏障，在应用运行时移动对象（并发压缩），确保应用访问正确的对象。"
        },
        {
            id: "jvm-w14-3-q11",
            question: "Shenandoah 收集周期的第一步是什么？",
            options: [
                "Concurrent Mark",
                "Init Mark（STW）",
                "Cleanup",
                "Evacuation"
            ],
            answer: 1,
            rationale: "Shenandoah 收集周期第一步是 Init Mark（STW），标记 GC Roots 直接可达的对象。"
        },
        {
            id: "jvm-w14-3-q12",
            question: "选择 Shenandoah 还是 ZGC 取决于什么？",
            options: [
                "ZGC 总是更好",
                "具体场景和 JDK 发行版",
                "Shenandoah 总是更好",
                "没有区别"
            ],
            answer: 1,
            rationale: "两者性能相近，选择取决于具体场景（应用特点、负载模式）和 JDK 发行版（Oracle JDK 不含 Shenandoah）。"
        }
    ]
}
