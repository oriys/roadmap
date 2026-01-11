import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "ap-2-1": {
        lessonId: "ap-2-1",
        background: [
            "【面条代码定义】Spaghetti Code 是一种源代码反模式，其控制流'convoluted, and therefore, hard to understand'——如同煮熟的意大利面一样纠缠混乱，难以理解和维护。",
            "【核心特征】面条代码的典型特征包括：(1) 复杂的长方法且无参数；(2) 通过实例变量交互；(3) 缺乏良好的结构定义；(4) 大量使用全局变量；(5) 放弃面向对象概念如继承和多态。",
            "【DRY 原则】Don't Repeat Yourself（不要重复自己）由 Andy Hunt 和 Dave Thomas 在《The Pragmatic Programmer》中提出：'Every piece of knowledge must have a single, unambiguous, authoritative representation within a system'。",
            "【拷贝粘贴危害】重复代码是 Martin Fowler《Refactoring》书中描述的第一个代码异味。重复代码违反 DRY 原则，导致维护困难、不一致性，以及更新逻辑时在多处引入 bug 的风险。",
            "【Extract Method 重构】Extract Function (Extract Method) 是基础重构技术，将代码片段提取为独立函数。Martin Fowler 描述其为'the inverse of Inline Function'，用于改善代码可读性和可维护性。"
        ],
        keyDifficulties: [
            "【认知负荷】面条代码'erodes the ability to understand how the system behaves'。阅读代码远比编写困难，因为需要在脑海中重建意图、副作用和流程，散乱的逻辑导致认知过载。",
            "【本质重复 vs 偶然重复】避免过度 DRY：需区分本质重复(essential duplication，解决同类问题的代码)和偶然重复(accidental duplication，恰好相似但目的不同)。只消除本质重复。",
            "【重构时机】'Three Strikes And You Refactor'启发法：可以重复一次，但当准备引入第三个实例时应重构。此时你已掌握各实例的异同，能设计更好的抽象。",
            "【面条代码成因】常见原因：(1) 紧迫的交付期限和缺乏规划；(2) 架构设计或模块边界缺失；(3) 初级开发者缺乏设计原则指导；(4) 小问题放任不管逐渐恶化。"
        ],
        handsOnPath: [
            "识别代码库中的长方法（超过 50 行），使用 Extract Method 将逻辑拆分为职责单一的小函数。",
            "搜索项目中的重复代码块，评估是本质重复还是偶然重复，对本质重复应用 Extract Method 或 Extract Class。",
            "为遗留的面条代码编写特征测试(characterization test)，在重构前确保行为被正确记录。",
            "实践关注点分离：确保每个函数和类只做一件事，且做好这件事。",
            "建立代码审查检查项：方法长度、参数数量、全局变量使用、控制流复杂度。"
        ],
        selfCheck: [
            "什么是面条代码？它的典型特征有哪些？",
            "DRY 原则的完整含义是什么？谁在什么书中首次提出？",
            "为什么重复代码被 Martin Fowler 列为第一个代码异味？",
            "Extract Method 重构的目的是什么？什么时候应该使用它？",
            "什么是'Three Strikes And You Refactor'启发法？为什么要等到第三次？",
            "本质重复和偶然重复有什么区别？为什么这种区分很重要？"
        ],
        extensions: [
            "阅读 Martin Fowler《Refactoring》完整的重复代码异味章节，学习 Form Template Method、Substitute Algorithm 等高级重构技术。",
            "研究结构化编程如何通过消除 goto 语句来避免面条代码的产生。",
            "探索静态分析工具（如 SonarQube、ESLint）如何自动检测重复代码和复杂度指标。",
            "学习特征测试(characterization testing)技术，为遗留代码重构提供安全网。"
        ],
        sourceUrls: [
            "https://refactoring.com/catalog/extractMethod.html",
            "https://martinfowler.com/books/refactoring.html",
            "https://en.wikipedia.org/wiki/Don't_repeat_yourself"
        ]
    },
    "ap-2-2": {
        lessonId: "ap-2-2",
        background: [
            "【魔数定义】Magic Number 是代码中'a numeric value that's encountered in the source but has no obvious meaning'——没有明显含义的数值字面量，是常见的代码异味。",
            "【魔数危害】魔数导致三个问题：(1) 可读性差——没有上下文难以理解含义；(2) 代码重复——同一数字散布各处；(3) 难以修改——无法简单地查找替换，因为相同数值可能有不同用途。",
            "【死代码定义】Dead Code 指不再被执行或调用的代码片段。这些代码增加认知负担，让维护者困惑其存在目的，并增加代码库的复杂度。",
            "【船锚代码】Boat Anchor 反模式指为'以防万一'而保留的未使用代码或组件。与死代码类似，但船锚代码往往是有意保留的，基于'将来可能用到'的假设。",
            "【Speculative Generality】推测性通用化是指为了预期的未来需求而提前创建的抽象或功能。这些代码增加系统复杂度，但往往永远不会被使用。"
        ],
        keyDifficulties: [
            "【魔数识别例外】并非所有数字都是魔数：数学公式中的常量（如动能公式中的 2）、百分比计算中的 100、循环初始化的 0 都是自解释的，不需要替换。",
            "【死代码的隐蔽性】死代码不仅包括永远不会执行的分支，还包括：未使用的函数、不可达的异常处理、注释掉的旧代码、废弃的 API 实现。",
            "【删除的心理障碍】团队往往害怕删除看似无用的代码：'万一有用呢？'但版本控制系统已保存历史，删除无用代码是低风险操作。",
            "【推测性设计的诱惑】开发者容易陷入'这个抽象将来肯定有用'的陷阱，但预测未来需求往往是错误的，结果是增加了不必要的复杂度。"
        ],
        handsOnPath: [
            "使用 IDE 的'查找未使用符号'功能或静态分析工具识别项目中的死代码，逐步清理。",
            "搜索代码中的数字字面量（排除 0、1 等常见值），评估是否为魔数，用命名常量替换。",
            "审查注释掉的代码块，如果超过一个版本周期未使用，删除它们（版本控制有历史记录）。",
            "识别项目中的'船锚'：那些为'将来可能用到'而保留但从未使用的模块或功能。",
            "应用 YAGNI 原则：在下次想要添加'可能有用'的功能时，停下来问'现在真的需要吗？'"
        ],
        selfCheck: [
            "什么是魔数？为什么它被认为是代码异味？",
            "哪些情况下数字字面量不被视为魔数？",
            "死代码除了未执行的分支外，还有哪些形式？",
            "什么是船锚代码？它与死代码有什么区别？",
            "为什么开发者往往不愿删除看似无用的代码？这种担心合理吗？",
            "什么是推测性通用化？如何避免这种反模式？"
        ],
        extensions: [
            "学习 SonarQube 等工具如何自动检测魔数和死代码。",
            "研究代码覆盖率工具如何帮助识别未被测试覆盖的死代码。",
            "探索如何在 CI/CD 流程中集成死代码检测，防止新的死代码进入代码库。",
            "阅读《Clean Code》中关于有意义命名的章节，学习如何为常量选择好的名称。"
        ],
        sourceUrls: [
            "https://refactoring.guru/replace-magic-number-with-symbolic-constant",
            "https://martinfowler.com/bliki/Yagni.html",
            "https://en.wikipedia.org/wiki/Dead_code"
        ]
    },
    "ap-2-3": {
        lessonId: "ap-2-3",
        background: [
            "【过早优化名言】Donald Knuth 的经典论述：'We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%.'",
            "【完整上下文】Knuth 的完整观点是：'Programmers waste enormous amounts of time thinking about, or worrying about, the speed of noncritical parts of their programs, and these attempts at efficiency actually have a strong negative impact when debugging and maintenance are considered.'",
            "【黄金锤定义】Golden Hammer 是'a familiar technology or concept applied obsessively to many software problems'——团队过度依赖熟悉的工具或方法论，将其应用于所有问题，即使不适合。",
            "【YAGNI 原则】You Aren't Gonna Need It 源自极限编程：不应提前构建预期未来会需要的功能。Martin Fowler 指出：'预期的需求很可能被证明是错误的'。",
            "【锤子法则】Law of the Instrument：'If all you have is a hammer, everything looks like a nail'——如果你只有锤子，所有东西看起来都像钉子。这是黄金锤反模式的心理学基础。"
        ],
        keyDifficulties: [
            "【过早优化的误解】这句名言常被误解为'永远不要优化代码'。实际上 Knuth 强调的是：应该关注算法设计和正确实现，而非过早关注微优化。",
            "【黄金锤的成因】团队在某个工具上积累了高水平能力，导致每个新项目都被视为该工具最适合解决的问题，而忽视探索替代方案。",
            "【YAGNI 的四类成本】Martin Fowler 分析了提前构建功能的成本：(1) 构建成本——分析、编程、测试的努力；(2) 延迟成本——高优先级功能被推迟；(3) 维护成本——额外代码增加复杂度；(4) 修复成本——未来实现时可能需要返工。",
            "【YAGNI 的限制】YAGNI 仅适用于增加复杂度的预期功能，不适用于改进代码可修改性的工作。保持代码的可变性是 YAGNI 的前提。"
        ],
        handsOnPath: [
            "在优化代码前，先用性能分析工具（profiler）确定真正的瓶颈在哪里，避免优化非关键的 97%。",
            "审查团队的技术选型决策：是否存在'因为我们熟悉 X，所以用 X 解决所有问题'的倾向？",
            "建立技术雷达：定期评估新技术、工具和方法论，避免黄金锤效应。",
            "实践 YAGNI：在添加新功能前问'现在真的需要这个吗？还是我们只是预测将来可能需要？'",
            "回顾过去的'预测性功能'：有多少被实际使用？这些数据可以帮助校准未来的决策。"
        ],
        selfCheck: [
            "Donald Knuth 关于过早优化的完整观点是什么？为什么他说要关注'关键的 3%'？",
            "这句名言常被怎样误解？正确的理解应该是什么？",
            "什么是黄金锤反模式？它是如何形成的？",
            "YAGNI 原则是什么？为什么预期的需求往往是错误的？",
            "Martin Fowler 分析的提前构建功能的四类成本是什么？",
            "YAGNI 有什么限制？它不适用于什么情况？"
        ],
        extensions: [
            "阅读 Knuth 1974 年的原文'Structured programming with go to statements'，理解这句名言的完整上下文。",
            "研究性能分析（profiling）工具和方法，学习如何科学地识别性能瓶颈。",
            "探索 ThoughtWorks 技术雷达如何帮助团队跟踪技术趋势，避免黄金锤效应。",
            "学习极限编程（XP）中 YAGNI 原则的完整实践背景。"
        ],
        sourceUrls: [
            "https://stackify.com/premature-optimization-evil/",
            "https://martinfowler.com/bliki/Yagni.html",
            "https://sourcemaking.com/antipatterns/golden-hammer"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "ap-2-1": [
        {
            id: "ap-2-1-q1",
            question: "面条代码(Spaghetti Code)的核心特征是什么？",
            options: [
                "代码运行速度慢",
                "控制流纠缠混乱，难以理解和维护",
                "代码文件太大",
                "没有使用面向对象编程"
            ],
            answer: 1,
            rationale: "面条代码的核心特征是控制流'convoluted, and therefore, hard to understand'——如同煮熟的意大利面一样纠缠混乱。"
        },
        {
            id: "ap-2-1-q2",
            question: "DRY 原则的完整含义是什么？",
            options: [
                "Don't Repeat Yourself - 不要写重复的代码",
                "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system",
                "删除所有重复的代码行",
                "使用函数避免复制粘贴"
            ],
            answer: 1,
            rationale: "DRY 原则的完整定义是：'Every piece of knowledge must have a single, unambiguous, authoritative representation within a system'——关注的是知识的单一表示，而非简单的代码重复。"
        },
        {
            id: "ap-2-1-q3",
            question: "为什么重复代码被 Martin Fowler 列为《Refactoring》中的第一个代码异味？",
            options: [
                "因为它最容易检测",
                "因为 Fowler 和 Beck 认为代码重复足够严重，值得最先讨论",
                "因为其他异味都源于重复代码",
                "因为它是最常见的异味"
            ],
            answer: 1,
            rationale: "Martin Fowler 和 Kent Beck 认为代码重复问题足够严重，值得作为第一个代码异味讨论，强调其对维护性和一致性的危害。"
        },
        {
            id: "ap-2-1-q4",
            question: "什么是'Three Strikes And You Refactor'启发法？",
            options: [
                "代码错误三次后必须重构",
                "可以重复一次，但准备引入第三个实例时应该重构",
                "每三个月进行一次重构",
                "三个人审查后才能重构"
            ],
            answer: 1,
            rationale: "'Three Strikes And You Refactor'意思是可以重复一次，但当准备引入第三个实例时应该重构，此时已经有足够信息设计更好的抽象。"
        },
        {
            id: "ap-2-1-q5",
            question: "本质重复(essential duplication)和偶然重复(accidental duplication)有什么区别？",
            options: [
                "本质重复出现在核心代码，偶然重复出现在测试代码",
                "本质重复是解决同类问题的代码，偶然重复是恰好相似但目的不同的代码",
                "本质重复是函数内的重复，偶然重复是跨文件的重复",
                "没有区别，所有重复都应该消除"
            ],
            answer: 1,
            rationale: "本质重复是解决同类问题的代码，应该消除；偶然重复是恰好相似但目的不同的代码，不应该强行抽象，否则会创建糟糕的抽象。"
        },
        {
            id: "ap-2-1-q6",
            question: "面条代码的常见成因不包括以下哪项？",
            options: [
                "紧迫的交付期限和缺乏规划",
                "使用静态类型语言",
                "架构设计或模块边界缺失",
                "初级开发者缺乏设计原则指导"
            ],
            answer: 1,
            rationale: "面条代码与使用静态或动态类型语言无关。常见成因包括：紧迫的期限、缺乏规划、架构缺失、缺乏指导等。"
        },
        {
            id: "ap-2-1-q7",
            question: "Extract Method 重构技术的目的是什么？",
            options: [
                "减少代码文件的大小",
                "将代码片段提取为独立函数，改善可读性和可维护性",
                "提高代码执行速度",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "Extract Method（提取方法）将代码片段转换为独立函数，目的是改善代码的可读性、可维护性，并创造代码重用的机会。"
        },
        {
            id: "ap-2-1-q8",
            question: "面条代码对团队的影响是什么？",
            options: [
                "仅影响代码性能",
                "逐渐侵蚀理解系统行为的能力，导致更多错误和更高的入职成本",
                "只影响新功能开发",
                "仅影响测试覆盖率"
            ],
            answer: 1,
            rationale: "面条代码'erodes the ability to understand how the system behaves'，阅读散乱的逻辑导致认知过载，最终造成更多错误、更慢的交付和更高的入职成本。"
        },
        {
            id: "ap-2-1-q9",
            question: "为什么说'有些重复比糟糕的抽象更好'？",
            options: [
                "因为重复代码更容易理解",
                "因为过早抽象可能创建错误的抽象，增加而非减少复杂度",
                "因为重复代码更容易测试",
                "因为抽象会降低性能"
            ],
            answer: 1,
            rationale: "'It is better to have some duplication than a bad abstraction'——过早或错误的抽象可能比重复代码更难维护，等到有足够信息（三个实例）再抽象更安全。"
        },
        {
            id: "ap-2-1-q10",
            question: "DRY 原则实际上关注的是什么？",
            options: [
                "删除所有重复的代码行",
                "消除重复的知识表示，而非简单的代码相似性",
                "减少代码文件数量",
                "统一代码风格"
            ],
            answer: 1,
            rationale: "DRY 原则关注的是'removing duplicate ideas and not duplicate code'——消除重复的知识表示，而非简单地消除相似的代码行。"
        },
        {
            id: "ap-2-1-q11",
            question: "历史上，什么编程实践与面条代码的产生密切相关？",
            options: [
                "使用全局变量",
                "过度使用 goto 语句",
                "缺少注释",
                "不使用版本控制"
            ],
            answer: 1,
            rationale: "goto 语句的过度使用与面条代码密切相关。结构化编程的实践就是为了消除 goto 语句的使用，从而避免产生面条代码。"
        },
        {
            id: "ap-2-1-q12",
            question: "如果发现两个类中有重复代码，且它们没有继承关系，应该如何重构？",
            options: [
                "直接复制粘贴到一个类中",
                "使用 Extract Superclass 创建共同父类，或使用 Extract Class 并在两处使用新组件",
                "删除其中一个类",
                "忽略重复，因为它们在不同的类中"
            ],
            answer: 1,
            rationale: "如果重复代码在两个不同的类中：如果可以，使用 Extract Superclass 创建共同父类；如果不行，使用 Extract Class 在一个类中提取新组件，在另一个类中使用它。"
        }
    ],
    "ap-2-2": [
        {
            id: "ap-2-2-q1",
            question: "什么是魔数(Magic Number)？",
            options: [
                "特别大的数字",
                "代码中没有明显含义的数值字面量",
                "随机生成的数字",
                "加密使用的数字"
            ],
            answer: 1,
            rationale: "魔数是'a numeric value that's encountered in the source but has no obvious meaning'——代码中出现但没有明显含义的数值字面量。"
        },
        {
            id: "ap-2-2-q2",
            question: "以下哪个不被视为魔数？",
            options: [
                "超时时间 3600 毫秒",
                "循环初始化的 0",
                "数组大小 42",
                "重试次数 5"
            ],
            answer: 1,
            rationale: "循环初始化的 0、百分比计算中的 100 等是自解释的常见用法，不被视为魔数。而没有上下文的 3600、42、5 等需要用命名常量替换。"
        },
        {
            id: "ap-2-2-q3",
            question: "魔数导致的主要问题不包括以下哪项？",
            options: [
                "可读性差",
                "代码运行更慢",
                "难以修改",
                "可能导致不一致性"
            ],
            answer: 1,
            rationale: "魔数的主要问题是可读性差、难以修改（无法简单查找替换）、可能导致不一致性。魔数不会直接影响代码运行速度。"
        },
        {
            id: "ap-2-2-q4",
            question: "死代码(Dead Code)的形式不包括以下哪项？",
            options: [
                "未使用的函数",
                "不可达的异常处理",
                "频繁调用的核心功能",
                "注释掉的旧代码"
            ],
            answer: 2,
            rationale: "死代码包括未使用的函数、不可达的分支、注释掉的旧代码等。频繁调用的核心功能是活跃代码，不是死代码。"
        },
        {
            id: "ap-2-2-q5",
            question: "船锚代码(Boat Anchor)与死代码的主要区别是什么？",
            options: [
                "船锚代码更大",
                "船锚代码是有意保留的，基于'将来可能用到'的假设",
                "船锚代码已被测试覆盖",
                "船锚代码在不同的仓库中"
            ],
            answer: 1,
            rationale: "船锚代码是为'以防万一'而有意保留的未使用代码，而死代码通常是无意遗留的。两者都增加不必要的复杂度。"
        },
        {
            id: "ap-2-2-q6",
            question: "为什么开发者往往不愿删除看似无用的代码？",
            options: [
                "因为删除代码很困难",
                "因为担心'万一有用'，害怕删除后出问题",
                "因为代码审查不允许删除",
                "因为会影响代码覆盖率指标"
            ],
            answer: 1,
            rationale: "团队往往害怕删除看似无用的代码：'万一有用呢？'但版本控制系统已保存历史，删除无用代码是低风险操作。"
        },
        {
            id: "ap-2-2-q7",
            question: "什么是推测性通用化(Speculative Generality)？",
            options: [
                "为了测试目的而创建的代码",
                "为了预期的未来需求而提前创建的抽象或功能",
                "通用的工具库",
                "框架提供的通用功能"
            ],
            answer: 1,
            rationale: "推测性通用化是为了预期的未来需求而提前创建的抽象或功能，这些代码增加系统复杂度，但往往永远不会被使用。"
        },
        {
            id: "ap-2-2-q8",
            question: "处理魔数的最佳实践是什么？",
            options: [
                "在注释中解释数字的含义",
                "用有意义的命名常量或变量替换",
                "使用更小的数字",
                "将数字移到配置文件中"
            ],
            answer: 1,
            rationale: "处理魔数的最佳实践是用有意义的命名常量、变量、枚举或配置替换，使代码更可读、可维护和可测试。"
        },
        {
            id: "ap-2-2-q9",
            question: "以下哪个工具可以自动检测魔数和死代码？",
            options: [
                "Git",
                "SonarQube",
                "Docker",
                "Kubernetes"
            ],
            answer: 1,
            rationale: "SonarQube 等静态分析工具有专门的规则用于检测代码中的魔数和死代码，可以集成到 CI/CD 流程中。"
        },
        {
            id: "ap-2-2-q10",
            question: "为什么动能公式中的 2 不是魔数？",
            options: [
                "因为 2 是一个小数字",
                "因为它是数学公式的一部分，具有明确的物理含义",
                "因为它在物理教科书中有记载",
                "因为它只出现一次"
            ],
            answer: 1,
            rationale: "数学和物理公式中的常量（如动能公式 E=mv²/2 中的 2）具有明确的学科含义，是公认的标准，不需要用命名常量替换。"
        },
        {
            id: "ap-2-2-q11",
            question: "删除死代码时应该考虑什么？",
            options: [
                "必须获得所有团队成员的同意",
                "版本控制系统已保存历史，如果需要可以恢复",
                "必须先备份整个项目",
                "只能由原作者删除"
            ],
            answer: 1,
            rationale: "版本控制系统已保存所有代码历史，删除死代码是低风险操作。如果将来真的需要，可以从历史中恢复。"
        },
        {
            id: "ap-2-2-q12",
            question: "如何识别项目中的推测性通用化？",
            options: [
                "寻找复杂的算法",
                "寻找只有一个实现的抽象类或接口、未使用的参数、从未调用的方法",
                "寻找长方法",
                "寻找深层嵌套"
            ],
            answer: 1,
            rationale: "推测性通用化的迹象包括：只有一个实现的抽象类/接口、方法中从未使用的参数、从未被调用的方法——都是为'将来可能需要'而创建的。"
        }
    ],
    "ap-2-3": [
        {
            id: "ap-2-3-q1",
            question: "Donald Knuth 关于过早优化的完整观点是什么？",
            options: [
                "永远不要优化代码",
                "97%的时间不要考虑小效率问题，但不要错过关键的 3%",
                "只有专家才能优化代码",
                "先优化再写功能"
            ],
            answer: 1,
            rationale: "Knuth 的完整观点是：'forget about small efficiencies, say about 97% of the time...Yet we should not pass up our opportunities in that critical 3%'——强调的是识别真正重要的优化点。"
        },
        {
            id: "ap-2-3-q2",
            question: "为什么过早优化被称为'万恶之源'？",
            options: [
                "因为它会导致程序崩溃",
                "因为程序员浪费大量时间优化非关键部分，对调试和维护有负面影响",
                "因为优化后的代码更难阅读",
                "因为优化需要更多内存"
            ],
            answer: 1,
            rationale: "Knuth 指出：'Programmers waste enormous amounts of time thinking about...the speed of noncritical parts...and these attempts at efficiency actually have a strong negative impact when debugging and maintenance are considered.'"
        },
        {
            id: "ap-2-3-q3",
            question: "什么是黄金锤(Golden Hammer)反模式？",
            options: [
                "使用最新的技术解决所有问题",
                "过度依赖熟悉的工具或方法论，将其应用于所有问题",
                "使用最昂贵的工具",
                "只使用开源工具"
            ],
            answer: 1,
            rationale: "黄金锤是'a familiar technology or concept applied obsessively to many software problems'——团队过度依赖熟悉的工具，即使它不适合当前问题。"
        },
        {
            id: "ap-2-3-q4",
            question: "YAGNI 原则是什么？",
            options: [
                "You Always Get New Ideas - 总是获得新想法",
                "You Aren't Gonna Need It - 你不会需要它",
                "Your Application Gets New Improvements - 你的应用获得新改进",
                "You Are Going to Need It - 你将会需要它"
            ],
            answer: 1,
            rationale: "YAGNI 是'You Aren't Gonna Need It'的缩写，主张不应提前构建预期未来会需要的功能，因为预测往往是错误的。"
        },
        {
            id: "ap-2-3-q5",
            question: "Martin Fowler 分析的提前构建功能的四类成本不包括以下哪项？",
            options: [
                "构建成本",
                "延迟成本",
                "学习成本",
                "维护成本"
            ],
            answer: 2,
            rationale: "四类成本是：构建成本（分析、编程、测试）、延迟成本（高优先级功能被推迟）、维护成本（额外复杂度）、修复成本（未来可能需要返工）。"
        },
        {
            id: "ap-2-3-q6",
            question: "锤子法则(Law of the Instrument)是什么？",
            options: [
                "每个问题都有最佳工具",
                "如果你只有锤子，所有东西看起来都像钉子",
                "工具决定方法论",
                "应该使用多种工具"
            ],
            answer: 1,
            rationale: "'If all you have is a hammer, everything looks like a nail'——如果你只熟悉一种工具，就倾向于用它解决所有问题，这是黄金锤反模式的心理学基础。"
        },
        {
            id: "ap-2-3-q7",
            question: "过早优化这句名言最常见的误解是什么？",
            options: [
                "认为只有专家才能优化",
                "被误解为'永远不要优化代码'",
                "认为优化只在最后阶段进行",
                "认为优化总是有害的"
            ],
            answer: 1,
            rationale: "这句名言常被误解为'you should never optimize your code!'，但 Knuth 实际上强调的是避免优化非关键部分，同时不要错过关键的 3%。"
        },
        {
            id: "ap-2-3-q8",
            question: "如何识别黄金锤反模式的警告信号？",
            options: [
                "团队使用多种不同的技术",
                "系统架构经常用单一产品或工具来描述，团队因依赖现有工具而无法满足新需求",
                "团队经常评估新技术",
                "团队有明确的技术选型标准"
            ],
            answer: 1,
            rationale: "黄金锤的警告信号包括：系统架构用单一产品/工具描述、团队因过度依赖现有工具而无法满足某些需求、很少探索替代方案。"
        },
        {
            id: "ap-2-3-q9",
            question: "YAGNI 原则有什么限制？",
            options: [
                "它不适用于大型项目",
                "它仅适用于增加复杂度的功能，不适用于改进代码可修改性的工作",
                "它只适用于初创公司",
                "它不适用于团队开发"
            ],
            answer: 1,
            rationale: "Martin Fowler 强调 YAGNI 仅适用于增加复杂度的预期功能，不适用于改进代码可修改性的工作。保持代码可变性是 YAGNI 的前提。"
        },
        {
            id: "ap-2-3-q10",
            question: "避免过早优化的正确做法是什么？",
            options: [
                "完全不考虑性能",
                "先用性能分析工具(profiler)确定真正的瓶颈",
                "根据直觉优化可能慢的部分",
                "优化所有可能慢的代码"
            ],
            answer: 1,
            rationale: "正确做法是先用性能分析工具确定真正的瓶颈在哪里，然后针对性优化，而不是凭直觉优化可能根本不是瓶颈的部分。"
        },
        {
            id: "ap-2-3-q11",
            question: "如何避免黄金锤反模式？",
            options: [
                "只使用最流行的工具",
                "承诺持续探索新技术，建立技术雷达，参加技术会议，阅读新书",
                "每个项目使用不同的技术栈",
                "只使用开源工具"
            ],
            answer: 1,
            rationale: "避免黄金锤需要：组织承诺持续探索新技术、建立内部学习小组、跟踪开源项目、阅读软件开发方法论新书、参加技术会议。"
        },
        {
            id: "ap-2-3-q12",
            question: "Knuth 说的'关键的 3%'指的是什么？",
            options: [
                "3%的代码需要删除",
                "程序中真正影响性能的关键路径，值得花时间优化",
                "3%的开发者应该做优化",
                "项目预算的 3%用于优化"
            ],
            answer: 1,
            rationale: "Knuth 说的'critical 3%'指的是程序中真正影响性能的关键路径，这部分值得花时间优化，而不是浪费时间在非关键的 97%上。"
        }
    ]
}
