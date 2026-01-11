import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "ap-1-1": {
        lessonId: "ap-1-1",
        background: [
            "【术语起源】反模式(Anti-pattern)一词由 Andrew Koenig 于 1995 年首创，灵感来自《设计模式》(Design Patterns) 一书。该书记录了可靠有效的软件设计模式，而反模式则记录了常见但有害的做法。",
            "【核心定义】反模式是'a solution to a class of problem which may be commonly used but is likely to be ineffective or counterproductive'——一种常被采用但实际上无效或适得其反的问题解决方案。",
            "【两个关键特征】正式区分反模式与简单坏习惯需要满足两个条件：(1) 某种重复出现的行为或结构最初看似有益，但最终产生的坏处多于好处；(2) 存在经过文档化和验证的替代方案。",
            "【三法则】反模式识别的重要原则：至少需要在三个独立案例中观察到该模式才能确认为反模式。这避免了将单一失败案例错误归类为普遍问题。",
            "【历史发展】1998 年出版的《AntiPatterns: Refactoring Software, Architectures, and Projects in Crisis》一书不仅普及了反模式概念，还将其范围从软件设计扩展到软件架构和项目管理领域。"
        ],
        keyDifficulties: [
            "【与坏习惯的区别】反模式不是简单的编码错误或坏习惯。它必须是重复出现的模式，且表面上看起来合理有效，这使得它更具欺骗性和危害性。",
            "【短期收益的陷阱】反模式往往在短期内提供便利或解决紧迫问题，但长期来看会造成更大的技术债务和维护成本。识别这种'短期有效、长期有害'的特征是关键。",
            "【替代方案的重要性】好的反模式文档不仅描述问题，还必须提供经过验证的替代方案或改善措施。没有解决方案的问题描述只是抱怨，不是反模式分析。",
            "【跨领域扩展】反模式概念已从最初的软件设计领域扩展到架构、项目管理、组织文化甚至环境因素，理解其在不同层面的表现形式至关重要。"
        ],
        handsOnPath: [
            "回顾你参与的项目，尝试识别至少 3 个符合反模式特征的实践：(1) 是否重复出现？(2) 最初是否看起来有效？(3) 是否造成了长期问题？",
            "为识别出的每个反模式，尝试找到其'替代方案'——如果当时采用不同方法，问题是否可以避免？",
            "建立团队级反模式识别机制：在代码评审中加入反模式检查项，将发现的反模式记录到团队知识库。",
            "阅读《AntiPatterns》书中的软件开发反模式目录，对照检查项目中是否存在类似问题。",
            "实践'三法则'：当怀疑某个做法是反模式时，收集至少三个独立案例作为证据，避免过早下结论。"
        ],
        selfCheck: [
            "什么是反模式？它与简单的坏习惯或编码错误有什么本质区别？",
            "正式定义反模式需要满足哪两个关键特征？为什么替代方案是必要条件？",
            "为什么反模式往往在短期内看起来有效？这种特性为什么使它更危险？",
            "三法则是什么？它在反模式识别中起什么作用？",
            "Andrew Koenig 创造'反模式'这个术语的灵感来源是什么？",
            "1998 年的《AntiPatterns》一书对反模式概念做了哪些扩展？"
        ],
        extensions: [
            "阅读《AntiPatterns: Refactoring Software, Architectures, and Projects in Crisis》原书，深入理解反模式的完整理论框架。",
            "研究 SourceMaking 网站上的反模式目录，了解软件开发中最常见的反模式案例。",
            "探索反模式与设计模式的关系：理解如何将反模式重构为设计模式。",
            "建立团队反模式案例库，记录项目中遇到的反模式及其解决方案。"
        ],
        sourceUrls: [
            "https://en.wikipedia.org/wiki/Anti-pattern",
            "https://en.wikipedia.org/wiki/AntiPatterns",
            "https://sourcemaking.com/antipatterns/software-development-antipatterns"
        ]
    },
    "ap-1-2": {
        lessonId: "ap-1-2",
        background: [
            "【技术债务概念】技术债务(Technical Debt)是 Ward Cunningham 创造的比喻，用于描述代码库中的'陈旧代码'(cruft)。这些内部质量缺陷使系统的修改和扩展变得困难，如同金融债务产生利息。",
            "【代码异味定义】代码异味(Code Smell)由 Kent Beck 提出，Martin Fowler 定义为'a surface indication that usually corresponds to a deeper problem in the system'——表面迹象往往对应系统中更深层的问题。",
            "【康威定律】Melvin Conway 于 1968 年提出：'Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure'——软件架构往往反映组织的沟通结构。",
            "【债务形成原因】技术债务形成的主要原因：(1) 开发人员在变更时未能维持内部质量标准；(2) 压力驱使团队优先交付功能而非改进代码质量；(3) 变更越频繁，陈旧代码积累风险越大。",
            "【技术债务象限】Martin Fowler 提出 TechnicalDebtQuadrant 分类法，区分债务是有意(deliberate)还是无意(inadvertent)产生的，以及是谨慎(prudent)还是鲁莽(reckless)的决策。"
        ],
        keyDifficulties: [
            "【异味不等于问题】代码异味'don't always indicate a problem'——它们是警告信号而非确定性问题。识别异味后需要调查更深层的结构性问题。",
            "【债务利息效应】仓促采纳技术债务以加快交付往往适得其反，因为陈旧代码会直接减缓新功能的实现速度，形成恶性循环。",
            "【康威定律的三种应对】(1) 忽视：不考虑组织影响（通常付出代价）；(2) 接纳：确保架构与团队沟通模式适应；(3) 反向康威机制：有意调整团队结构以促进期望的架构。",
            "【隐含假设的耦合】康威定律指出，开发者之间的紧密沟通不仅导致显式函数调用的耦合，还产生隐含的共同假设，这是更难察觉的耦合形式。"
        ],
        handsOnPath: [
            "使用 Martin Fowler 的'smell of the week'方法：团队每周选择一种代码异味集中关注，在日常开发中识别和讨论。",
            "绘制团队组织结构图与系统架构图，对比分析两者的对应关系，识别康威定律的影响。",
            "应用技术债务象限评估现有债务：区分哪些是有意为之的谨慎决策，哪些是无意产生的问题。",
            "实践逐步偿还策略：在处理每个功能时，花额外时间清理部分陈旧代码，优先处理频繁变更的区域。",
            "建立代码异味识别训练：让资深开发者带领团队识别长方法(Long methods)、数据类(Data classes)等常见异味。"
        ],
        selfCheck: [
            "什么是技术债务？Ward Cunningham 为什么使用'债务'这个比喻？",
            "代码异味是什么？它与确定性的代码问题有什么区别？",
            "康威定律的核心观点是什么？它对软件架构设计有什么启示？",
            "Martin Fowler 的技术债务象限如何分类不同类型的技术债务？",
            "为什么仓促采纳技术债务反而会减缓交付速度？",
            "应对康威定律的三种策略是什么？什么是'反向康威机制'？"
        ],
        extensions: [
            "深入阅读 Martin Fowler 的《Refactoring》一书，系统学习代码异味的识别和重构方法。",
            "研究 Team Topologies 如何通过团队结构设计来影响系统架构。",
            "探索技术债务量化方法：如何衡量和跟踪技术债务水平？",
            "学习 SonarQube 等工具如何自动检测代码异味和技术债务。"
        ],
        sourceUrls: [
            "https://martinfowler.com/bliki/TechnicalDebt.html",
            "https://martinfowler.com/bliki/CodeSmell.html",
            "https://martinfowler.com/bliki/ConwaysLaw.html"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "ap-1-1": [
        {
            id: "ap-1-1-q1",
            question: "反模式(Anti-pattern)这个术语是由谁在什么时候创造的？",
            options: [
                "Gang of Four，1994 年",
                "Andrew Koenig，1995 年",
                "Martin Fowler，1999 年",
                "Ward Cunningham，1992 年"
            ],
            answer: 1,
            rationale: "反模式术语由 Andrew Koenig 于 1995 年首创，灵感来自记录可靠设计模式的《Design Patterns》一书。"
        },
        {
            id: "ap-1-1-q2",
            question: "根据定义，反模式与简单的坏习惯最大的区别是什么？",
            options: [
                "反模式只出现在大型项目中",
                "反模式必须重复出现且最初看似有益，并有经过验证的替代方案",
                "反模式只涉及代码层面的问题",
                "反模式是由初级开发者造成的"
            ],
            answer: 1,
            rationale: "正式区分反模式需要两个要素：(1) 重复出现的模式最初看似有益但最终害多于利；(2) 存在经过文档化和验证的替代方案。"
        },
        {
            id: "ap-1-1-q3",
            question: "三法则(Rule of Three)在反模式识别中的作用是什么？",
            options: [
                "反模式必须影响至少三个模块才算严重",
                "反模式至少需要在三个独立案例中观察到才能确认",
                "修复反模式需要三次迭代",
                "反模式会造成三种类型的问题"
            ],
            answer: 1,
            rationale: "三法则要求反模式至少在三个独立案例中被观察到才能确认，避免将单一失败案例错误归类为普遍问题。"
        },
        {
            id: "ap-1-1-q4",
            question: "1998 年的《AntiPatterns》一书对反模式概念做了什么扩展？",
            options: [
                "将范围限定在编码层面",
                "将范围从软件设计扩展到架构和项目管理领域",
                "只关注 Java 语言的反模式",
                "废弃了原有的反模式定义"
            ],
            answer: 1,
            rationale: "《AntiPatterns: Refactoring Software, Architectures, and Projects in Crisis》不仅普及了反模式概念，还将其范围从软件设计扩展到架构和项目管理领域。"
        },
        {
            id: "ap-1-1-q5",
            question: "为什么反模式比简单的编码错误更具危害性？",
            options: [
                "反模式会导致系统崩溃",
                "反模式表面上看起来合理有效，具有欺骗性",
                "反模式只影响性能",
                "反模式无法被检测"
            ],
            answer: 1,
            rationale: "反模式的危害在于它在短期内看起来合理有效，这种表面的'成功'使团队难以识别其长期危害，从而继续传播。"
        },
        {
            id: "ap-1-1-q6",
            question: "好的反模式文档必须包含什么关键内容？",
            options: [
                "只需描述问题的严重程度",
                "只需列出受影响的项目",
                "必须提供经过验证的替代方案或改善措施",
                "只需要代码示例"
            ],
            answer: 2,
            rationale: "好的反模式文档不仅描述问题的负面后果，还必须提供替代方案或改善措施。没有解决方案的问题描述只是抱怨，不是反模式分析。"
        },
        {
            id: "ap-1-1-q7",
            question: "以下哪个是反模式的正式定义？",
            options: [
                "任何导致 bug 的编码实践",
                "a solution that may be commonly used but is ineffective or counterproductive",
                "只在遗留系统中出现的问题",
                "违反编码规范的做法"
            ],
            answer: 1,
            rationale: "反模式的正式定义是'a solution to a class of problem which may be commonly used but is likely to be ineffective or counterproductive'。"
        },
        {
            id: "ap-1-1-q8",
            question: "Andrew Koenig 创造'反模式'术语的灵感来自什么？",
            options: [
                "软件工程的失败案例研究",
                "《Design Patterns》一书记录的可靠设计模式",
                "编程语言规范",
                "项目管理理论"
            ],
            answer: 1,
            rationale: "Andrew Koenig 受《Design Patterns》一书启发创造了反模式术语。该书记录了可靠有效的软件设计模式，反模式则记录相反的情况。"
        },
        {
            id: "ap-1-1-q9",
            question: "反模式的'短期有效、长期有害'特征为什么难以识别？",
            options: [
                "因为需要高级工具才能检测",
                "因为短期内的成功掩盖了长期风险，团队倾向于继续使用",
                "因为只有专家才能理解",
                "因为反模式只在特定语言中出现"
            ],
            answer: 1,
            rationale: "反模式往往在短期内提供便利或解决紧迫问题，这种表面成功使团队难以察觉长期积累的技术债务和维护成本。"
        },
        {
            id: "ap-1-1-q10",
            question: "反模式概念已经扩展到哪些领域？",
            options: [
                "仅限于编程语言设计",
                "软件设计、架构、项目管理、组织文化等多个领域",
                "只适用于遗留系统维护",
                "仅限于开源项目"
            ],
            answer: 1,
            rationale: "反模式概念已从最初的软件设计扩展到架构、项目管理、组织文化甚至环境因素等多个领域。"
        },
        {
            id: "ap-1-1-q11",
            question: "以下哪个不是典型的软件反模式？",
            options: [
                "God Class - 承担过多职责的类",
                "Spaghetti Code - 缺乏结构难以跟踪的代码",
                "Single Responsibility - 类只有一个职责",
                "Golden Hammer - 过度使用特定工具"
            ],
            answer: 2,
            rationale: "Single Responsibility (单一职责) 是设计原则，不是反模式。God Class、Spaghetti Code 和 Golden Hammer 都是典型的反模式。"
        },
        {
            id: "ap-1-1-q12",
            question: "《AntiPatterns》一书的作者最初被误解为什么？",
            options: [
                "反对所有设计模式",
                "只关心代码质量",
                "不理解软件架构",
                "忽视项目管理"
            ],
            answer: 0,
            rationale: "《AntiPatterns》作者解释说他们是设计模式的支持者，书中对反模式的记录是为了帮助识别和解决'失败的模式'，而非反对设计模式本身。"
        }
    ],
    "ap-1-2": [
        {
            id: "ap-1-2-q1",
            question: "技术债务(Technical Debt)这个比喻是由谁创造的？",
            options: [
                "Martin Fowler",
                "Kent Beck",
                "Ward Cunningham",
                "Andrew Koenig"
            ],
            answer: 2,
            rationale: "技术债务是 Ward Cunningham 创造的比喻，用于描述代码库中的'陈旧代码'(cruft)导致的维护难度增加。"
        },
        {
            id: "ap-1-2-q2",
            question: "代码异味(Code Smell)的最佳描述是什么？",
            options: [
                "确定性的代码错误",
                "表面迹象，通常对应系统中更深层的问题",
                "编译器警告",
                "运行时异常"
            ],
            answer: 1,
            rationale: "Martin Fowler 定义代码异味为'a surface indication that usually corresponds to a deeper problem in the system'——表面迹象往往对应更深层问题。"
        },
        {
            id: "ap-1-2-q3",
            question: "康威定律的核心观点是什么？",
            options: [
                "软件复杂度与团队规模成正比",
                "软件架构往往反映组织的沟通结构",
                "软件质量取决于测试覆盖率",
                "软件应该每两周发布一次"
            ],
            answer: 1,
            rationale: "康威定律指出'Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure'。"
        },
        {
            id: "ap-1-2-q4",
            question: "关于代码异味，以下哪个说法是正确的？",
            options: [
                "所有代码异味都必须立即修复",
                "代码异味一定表示存在 bug",
                "代码异味是警告信号，不一定表示存在问题",
                "代码异味只出现在动态语言中"
            ],
            answer: 2,
            rationale: "Martin Fowler 强调代码异味'don't always indicate a problem'——它们是警告信号而非确定性问题，需要进一步调查。"
        },
        {
            id: "ap-1-2-q5",
            question: "Martin Fowler 的技术债务象限如何分类技术债务？",
            options: [
                "按严重程度分为高中低三级",
                "按有意/无意和谨慎/鲁莽两个维度分类",
                "按语言和框架分类",
                "按团队规模分类"
            ],
            answer: 1,
            rationale: "TechnicalDebtQuadrant 区分债务是有意(deliberate)还是无意(inadvertent)产生的，以及是谨慎(prudent)还是鲁莽(reckless)的决策。"
        },
        {
            id: "ap-1-2-q6",
            question: "为什么仓促采纳技术债务反而会减缓交付速度？",
            options: [
                "因为需要更多的测试",
                "因为陈旧代码会直接减缓新功能的实现速度",
                "因为需要更多的文档",
                "因为需要更多的代码审查"
            ],
            answer: 1,
            rationale: "Martin Fowler 指出仓促采纳技术债务往往适得其反，因为'cruft slows the adding of new features'——陈旧代码会直接减缓新功能的实现速度。"
        },
        {
            id: "ap-1-2-q7",
            question: "Martin Fowler 推荐的代码异味识别团队实践是什么？",
            options: [
                "每月进行一次全面代码审查",
                "每周选择一种代码异味集中关注(smell of the week)",
                "使用自动化工具替代人工识别",
                "只关注新代码的异味"
            ],
            answer: 1,
            rationale: "Fowler 建议采用'smell of the week'方法——团队每周选择一种代码异味集中关注，帮助团队成员逐步建立识别能力。"
        },
        {
            id: "ap-1-2-q8",
            question: "应对康威定律的三种策略不包括哪个？",
            options: [
                "忽视组织影响",
                "确保架构与团队沟通模式适应",
                "强制所有团队使用相同的编程语言",
                "反向康威机制：调整团队结构以促进期望的架构"
            ],
            answer: 2,
            rationale: "应对康威定律的三种策略是：(1)忽视(2)接纳并适应(3)反向康威机制。强制使用相同语言不是应对康威定律的策略。"
        },
        {
            id: "ap-1-2-q9",
            question: "什么是'反向康威机制'(Inverse Conway Maneuver)？",
            options: [
                "反对康威定律的观点",
                "有意调整团队组织结构以促进期望的软件架构",
                "忽视组织结构对架构的影响",
                "让架构师决定团队划分"
            ],
            answer: 1,
            rationale: "反向康威机制是有意调整团队组织结构以促进期望的软件架构，例如微服务架构需要建立围绕业务能力的自治团队。"
        },
        {
            id: "ap-1-2-q10",
            question: "技术债务的'利息'指的是什么？",
            options: [
                "修复债务需要支付的费用",
                "添加新功能所需的额外工作量",
                "代码行数的增长",
                "测试用例的数量"
            ],
            answer: 1,
            rationale: "技术债务比喻中，'利息'指的是由于代码质量问题导致添加新功能所需的额外工作量——质量越差，'利息'越高。"
        },
        {
            id: "ap-1-2-q11",
            question: "Martin Fowler 推荐的技术债务偿还策略是什么？",
            options: [
                "停止所有功能开发，集中偿还债务",
                "在处理每个功能时逐步清理部分陈旧代码",
                "每季度进行一次大规模重构",
                "只在代码审查时偿还债务"
            ],
            answer: 1,
            rationale: "Fowler 推荐逐步偿还策略：在处理每个功能时花额外时间清理部分陈旧代码，这样能集中于最需要改进的高活跃区域。"
        },
        {
            id: "ap-1-2-q12",
            question: "康威定律指出开发者沟通会导致什么类型的耦合？",
            options: [
                "只有显式的函数调用耦合",
                "只有数据结构耦合",
                "显式函数调用和隐含的共同假设两种耦合",
                "只有数据库耦合"
            ],
            answer: 2,
            rationale: "康威定律指出，开发者间的紧密沟通不仅导致显式函数调用的耦合，还产生隐含的共同假设，这是更难察觉的耦合形式。"
        }
    ]
}
