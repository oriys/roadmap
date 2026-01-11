import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "tm-8-1": {
        lessonId: "tm-8-1",
        background: [
            "【技术债务四象限】Martin Fowler 提出技术债务四象限模型，用两个维度分类：Deliberate（故意）vs Inadvertent（无意）和 Prudent（审慎）vs Reckless（鲁莽）。四种组合代表性质完全不同的债务。",
            "【审慎-故意型债务】'We must ship now and deal with consequences'——团队知道在承担债务，经过权衡后做出的战略决策。Fowler 指出：'the team knows they are taking on a debt, and thus puts some thought as to whether the payoff for an earlier release is greater than the costs of paying it off.' 这是可管理的债务。",
            "【审慎-无意型债务】'Now we know how we should have done it'——随着对领域理解的深入，才发现之前的设计不够好。Fowler 解释：'it can take a year of programming on a project before you understand what the best design approach should have been.' 这是学习的自然结果，不可避免。",
            "【鲁莽-故意型债务】'We don't have time for design'——故意走捷径又不打算偿还，是最危险的类型。Fowler 认为这通常是不明智的：'developers underestimate where quality investments pay off.'",
            "【鲁莽-无意型债务】'What's Layering?'——因为能力不足而产生的债务，团队甚至不知道自己在制造债务。这会产生'crippling interest payments'，解决方案是培训和技术指导，而非简单的重构。"
        ],
        keyDifficulties: [
            "【审慎与鲁莽的区分】Fowler 强调：'The distinction between prudent and reckless matters more than whether something qualifies as debt.'——真正重要的是区分审慎与鲁莽，而非纠结是否符合'债务'的定义。",
            "【隐性债务识别】显性债务（如 TODO 注释、已知 bug）容易识别，但隐性债务（架构腐化、知识流失、文档缺失）难以发现。需要定期代码审计和架构评审来揭示隐性债务。",
            "【债务量化挑战】技术债务难以精确量化。SonarQube 等工具可以测量代码质量指标，但这些指标与业务影响的关联需要人工判断。不同类型的债务影响差异巨大。",
            "【债务蔓延效应】技术债务会通过代码依赖蔓延。一个模块的债务可能影响所有依赖它的模块，形成债务网络。这使得早期偿还更有价值。",
            "【历史上下文理解】区分债务类型需要理解历史上下文。当时的'审慎决策'可能因为信息不对称而被误判为'鲁莽'。保持决策记录（如 ADR）有助于公正评估。"
        ],
        handsOnPath: [
            "创建技术债务登记表：建立团队共享的债务清单，记录每项债务的描述、四象限分类、影响范围、估计偿还成本、负责人。",
            "四象限分类练习：选取团队已知的 10 项技术债务，使用 Fowler 四象限进行分类，讨论分类依据和不同意见。",
            "代码质量扫描：使用 SonarQube 或类似工具扫描代码库，识别代码级别的债务（复杂度、重复、潜在 bug）。",
            "架构债务评审：组织一次架构评审，专门讨论系统层面的债务——紧耦合、单体过大、过时依赖、缺失的抽象层。",
            "债务来源分析：回顾过去三个月新增的债务，分析来源模式——是时间压力？能力不足？需求变化？找出根本原因。"
        ],
        selfCheck: [
            "你能列出团队当前最严重的三项技术债务吗？它们分别属于四象限中的哪一类？",
            "团队是否有系统性记录技术债务的机制？债务清单是否定期更新和审查？",
            "过去一个季度，有多少债务是'审慎-故意'型？这些债务是否有明确的偿还计划？",
            "团队是否存在'鲁莽-故意'型债务？这反映了什么文化问题？如何改变？",
            "新人加入团队时，能否快速了解系统中的已知技术债务和避免踩坑？"
        ],
        extensions: [
            "研究 SonarQube 的技术债务计算方法，理解其 SQALE 模型。",
            "阅读《Managing Technical Debt》一书，学习系统性管理债务的方法。",
            "了解 CodeScene 的代码健康度分析，它结合代码复杂度和变更热点进行分析。",
            "研究架构债务评估技术，如 ATAM (Architecture Tradeoff Analysis Method)。"
        ],
        sourceUrls: [
            "https://martinfowler.com/bliki/TechnicalDebtQuadrant.html",
            "https://www.amazon.com/Managing-Technical-Debt-Practices-Development/dp/0135645948",
            "https://www.sonarsource.com/products/sonarqube/"
        ]
    },
    "tm-8-2": {
        lessonId: "tm-8-2",
        background: [
            "【重构的定义】Martin Fowler 定义重构为：'a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior.'——改变内部结构但不改变外部行为，使代码更易理解和修改。",
            "【持续小步重构】Fowler 强调重构应该是'持续的、小步的'，而非大规模的'停业重写'。每次改动都应保持行为不变，降低引入 bug 的风险。大规模重写风险高且往往失败。",
            "【遗留代码的定义】Michael Feathers 在《Working Effectively with Legacy Code》中定义：'Legacy Code is code without tests'——遗留代码是没有测试的代码。测试覆盖是安全修改代码的前提。",
            "【遗留代码悖论】Feathers 指出核心挑战：'you need tests before changing code, yet adding tests often requires changing code.'——修改代码需要测试保护，但添加测试往往需要修改代码。解决方案是找到安全的切入点。",
            "【迁移三阶段模型】Will Larson 提出技术债务偿还的三阶段方法：Derisk（降低风险）、Enable（赋能）、Finish（完成）。迁移是'the only available avenue to make meaningful progress on technical debt at scale'。"
        ],
        keyDifficulties: [
            "【Seams 概念】Feathers 提出 Seam（接缝）的概念：'a place to alter program behavior, without changing the code.'——在不改变代码的情况下改变程序行为的地方。找到接缝是在遗留代码中添加测试的关键。常见的接缝类型包括：对象接缝（通过继承或接口替换）、链接接缝（替换实现函数）。",
            "【Characterization Tests】特征测试（Characterization Tests）捕获代码的实际当前行为，而非预期行为。Feathers 解释：'we write tests often not necessary for the sake of correctness but to really understand what the code does.'——目的是建立安全网，而非验证正确性。",
            "【Sprout 和 Wrap 技术】Sprout Method：将新功能提取到独立的、可测试的新代码中，然后从遗留代码调用。Wrap Technique：重命名原方法，创建新的包装方法，可以在原行为前后注入逻辑。两者都是最小化风险的策略。",
            "【20% 时间现实】Will Larson 观察到迁移'often happen kind of in the boundaries, in the shadows, in like the 20%, 120% time.'——迁移工作往往在边缘时间进行。这需要管理层明确支持和资源分配，而非依赖工程师的额外投入。",
            "【完成迁移的重要性】Larson 警告：'Starting but not finishing migrations often incurs significant technical debt'——开始但不完成的迁移会产生额外的技术债务。需要将认可和庆祝保留给真正完成的迁移。"
        ],
        handsOnPath: [
            "童子军规则实践：在下一个 PR 中，顺便改进一处相关的小债务——可能是重命名一个不清晰的变量、提取一个重复的方法、添加一个缺失的注释。",
            "特征测试练习：选择一段没有测试的遗留代码，为其编写特征测试——捕获当前行为而非验证'正确'行为。",
            "寻找接缝：在一段紧耦合的代码中识别可能的接缝——可以在哪里插入测试而不需要大规模修改？",
            "迁移计划制定：选择一项需要跨团队协调的技术债务，使用 Derisk-Enable-Finish 框架制定迁移计划。",
            "债务预算协商：与管理层讨论，为团队争取固定的技术债务偿还时间预算（建议 20-30%）。"
        ],
        selfCheck: [
            "团队是否有固定的技术债务偿还时间预算？占比多少？是否被实际执行？",
            "过去一个季度偿还了哪些债务？效果如何评估？是否有量化的改进数据？",
            "团队是否践行童子军规则？新代码是否在制造新债务？",
            "有没有债务累积到必须大规模改造的程度？决策是什么？是渐进重构还是重写？",
            "迁移项目的完成率如何？是否有开始但未完成的迁移？"
        ],
        extensions: [
            "深入阅读《Working Effectively with Legacy Code》，学习更多依赖打破技术。",
            "研究 Strangler Fig Pattern，用于渐进式系统重写。",
            "了解 CodeScene 等工具，它们可以识别变更热点和技术债务的交集。",
            "研究 Google 的大规模代码库维护实践，了解他们如何处理 monorepo 中的债务。"
        ],
        sourceUrls: [
            "https://refactoring.com/",
            "https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/",
            "https://lethain.com/migrations/"
        ]
    },
    "tm-8-3": {
        lessonId: "tm-8-3",
        background: [
            "【Phoenix Project 的核心教训】《The Phoenix Project》讲述 IT 经理 Bill Palmer 如何通过 DevOps 原则拯救濒临失败的 IT 项目。核心转变是：'transform IT from being a business-burden to a business-enabler'——将 IT 从业务负担转变为业务赋能者。",
            "【三种方式(Three Ways)】书中 Erik 介绍 DevOps 的三种方式：First Way - Flow（优化从开发到运维的工作流）；Second Way - Feedback（建立紧密的反馈循环）；Third Way - Continuous Learning（培养实验和持续学习的文化）。",
            "【四种工作类型】有效的 IT 组织必须认识和平衡四种工作：业务项目（支持战略目标）、内部 IT 基础设施改进、计划的系统变更、非计划的反应性工作（最大的吞吐量杀手）。技术债务偿还属于第二类。",
            "【ThoughtWorks 的健康追踪方法】ThoughtWorks 推荐'tracking health over debt'——追踪健康度而非债务。'Focusing on health instead of debt is a more constructive framing that connects a team to the ultimate value of reducing debt.' 使用系统健康度评级取代债务清单可能更有效。",
            "【技术债务的业务影响】ThoughtWorks 指出技术债务对业务的影响：'Tech debt undermines productivity and efficiency. It starts off small but tends to multiply quickly.'——债务会快速累积；系统故障可能导致业务停滞；影响开发者士气和留存；使招聘更困难。"
        ],
        keyDifficulties: [
            "【语言转换能力】技术人员习惯用技术语言描述债务（'重构数据库层'），业务方不理解这意味着什么。需要转换为业务语言：影响交付速度、增加运维成本、带来安全风险、延长新人上手时间。",
            "【投资框架而非成本】将技术债务管理框架为'投资'而非'成本'。ThoughtWorks 建议：'Strategic advantage comes from balancing new features against maintenance—avoiding both catastrophic under-investment and wasteful over-spending.'",
            "【量化技术债务影响】ThoughtWorks 推荐的度量指标：customer feedback（客户反馈）、delays to payments（支付延迟）、disrupted operations（运营中断）、longer times to deploy new features（功能部署时间延长）、longer lead times for onboarding new developers（新人上手时间延长）。",
            "【利益相关者沟通】有效沟通需要理解利益相关者的关注点。ThoughtWorks 建议：'Listen proactively—developers identify problems first; customers signal glitches indicating deeper issues.'——主动倾听开发者和客户的声音。",
            "【建立信任和信誉】持续交付承诺的技术改进收益是建立信任的关键。如果承诺'重构后部署时间减少50%'，需要跟踪并汇报实际结果。只有兑现承诺才能获得未来技术投资的支持。"
        ],
        handsOnPath: [
            "影响量化练习：选择一项技术债务，量化其对业务的具体影响——每次部署的手工步骤数、每月因技术问题的支持工时、功能延迟的天数。",
            "案例故事准备：收集 3 个具体案例，说明技术债务如何影响业务——使用真实数据和具体场景，而非抽象描述。",
            "投资提案撰写：用业务语言起草一份技术投资提案，包含：问题描述（业务影响）、投入估算、预期收益、度量方式、时间表。",
            "利益相关者地图：识别技术投资决策的关键利益相关者，了解他们各自的关注点和语言偏好。",
            "系统健康度仪表板：建立团队的系统健康度仪表板，追踪关键指标（部署频率、变更失败率、恢复时间、前置时间）。"
        ],
        selfCheck: [
            "你能用一分钟向非技术领导解释当前最重要的技术债务吗？用的是业务语言还是技术语言？",
            "业务方是否理解技术投资的必要性？他们的主要疑虑是什么？你如何回应？",
            "过去的技术投资是否交付了承诺的收益？有什么证据？是否进行了汇报？",
            "技术团队与业务团队的信任关系如何？有什么事件建立或损害了信任？",
            "团队是否有持续向业务方汇报技术改进收益的机制？频率和形式是什么？"
        ],
        extensions: [
            "阅读《The Phoenix Project》全书，理解 DevOps 转型的完整故事。",
            "学习 Value Stream Mapping，识别价值流中的浪费和瓶颈。",
            "研究 DORA 指标（部署频率、变更前置时间、变更失败率、服务恢复时间）作为技术健康度的度量。",
            "了解《Crucial Conversations》中的沟通技巧，处理与业务方的困难对话。"
        ],
        sourceUrls: [
            "https://itrevolution.com/articles/10-minute-summary-of-the-phoenix-project/",
            "https://www.thoughtworks.com/insights/blog/legacy-modernization/tech-debt-what-business-leaders-need-to-know",
            "https://www.thoughtworks.com/radar/techniques/tracking-health-over-debt"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "tm-8-1": [
        {
            id: "tm-8-1-q1",
            question: "Martin Fowler 技术债务四象限的两个维度是什么？",
            options: [
                "高/低 和 紧急/不紧急",
                "故意(Deliberate)/无意(Inadvertent) 和 审慎(Prudent)/鲁莽(Reckless)",
                "技术/业务 和 短期/长期",
                "代码/架构 和 可见/隐藏"
            ],
            answer: 1,
            rationale: "Fowler 四象限用两个维度分类技术债务：Deliberate（故意）vs Inadvertent（无意）和 Prudent（审慎）vs Reckless（鲁莽）。"
        },
        {
            id: "tm-8-1-q2",
            question: "'We must ship now and deal with consequences'（我们必须现在发布，稍后处理后果）属于哪类债务？",
            options: [
                "鲁莽-故意",
                "鲁莽-无意",
                "审慎-故意",
                "审慎-无意"
            ],
            answer: 2,
            rationale: "这是审慎-故意型债务。Fowler 说：'the team knows they are taking on a debt, and thus puts some thought as to whether the payoff for an earlier release is greater than the costs of paying it off.'"
        },
        {
            id: "tm-8-1-q3",
            question: "'Now we know how we should have done it'（现在我们才知道应该怎么做）属于哪类债务？",
            options: [
                "审慎-故意",
                "审慎-无意",
                "鲁莽-故意",
                "鲁莽-无意"
            ],
            answer: 1,
            rationale: "这是审慎-无意型债务。Fowler 解释：'it can take a year of programming on a project before you understand what the best design approach should have been.' 这是学习的自然结果。"
        },
        {
            id: "tm-8-1-q4",
            question: "'We don't have time for design'（我们没时间做设计）为什么是最危险的债务类型？",
            options: [
                "因为需要更多人参与",
                "因为故意走捷径又不打算偿还，源于不良的工程文化",
                "因为技术难度最高",
                "因为影响范围最大"
            ],
            answer: 1,
            rationale: "这是鲁莽-故意型债务，最危险是因为故意走捷径又不打算偿还。Fowler 认为这通常是不明智的：'developers underestimate where quality investments pay off.'"
        },
        {
            id: "tm-8-1-q5",
            question: "Fowler 认为比'是否是债务'更重要的区分是什么？",
            options: [
                "故意还是无意",
                "审慎还是鲁莽",
                "代码还是架构",
                "短期还是长期"
            ],
            answer: 1,
            rationale: "Fowler 强调：'The distinction between prudent and reckless matters more than whether something qualifies as debt.'——审慎与鲁莽的区分比是否是'债务'更重要。"
        },
        {
            id: "tm-8-1-q6",
            question: "鲁莽-无意型债务（'What's Layering?'）的解决方案是什么？",
            options: [
                "重构代码",
                "增加代码审查",
                "培训和技术指导",
                "招聘更好的开发者"
            ],
            answer: 2,
            rationale: "鲁莽-无意型债务源于能力不足，团队甚至不知道自己在制造债务。解决方案是培训和技术指导，而非简单的重构。"
        },
        {
            id: "tm-8-1-q7",
            question: "隐性技术债务的例子不包括以下哪项？",
            options: [
                "架构腐化",
                "TODO 注释",
                "知识流失",
                "文档缺失"
            ],
            answer: 1,
            rationale: "TODO 注释是显性债务，容易识别。隐性债务包括架构腐化、知识流失、文档缺失等，需要专门的审计才能发现。"
        },
        {
            id: "tm-8-1-q8",
            question: "技术债务蔓延效应指的是什么？",
            options: [
                "债务会自动消失",
                "一个模块的债务通过代码依赖影响所有依赖它的模块",
                "债务在团队间传播",
                "债务信息共享"
            ],
            answer: 1,
            rationale: "技术债务会通过代码依赖蔓延。一个模块的债务可能影响所有依赖它的模块，形成债务网络，使早期偿还更有价值。"
        },
        {
            id: "tm-8-1-q9",
            question: "为什么区分债务类型需要理解历史上下文？",
            options: [
                "方便追责",
                "当时的'审慎决策'可能因信息不对称而被误判为'鲁莽'",
                "历史记录是合规要求",
                "方便计算债务年龄"
            ],
            answer: 1,
            rationale: "区分债务类型需要理解历史上下文，因为当时的'审慎决策'可能因为信息不对称而被误判为'鲁莽'。保持决策记录有助于公正评估。"
        },
        {
            id: "tm-8-1-q10",
            question: "技术债务登记表应该包含哪些关键信息？",
            options: [
                "只需要债务描述",
                "描述、四象限分类、影响范围、估计偿还成本、负责人",
                "只需要负责人",
                "只需要创建日期"
            ],
            answer: 1,
            rationale: "有效的债务登记表应记录：债务描述、四象限分类、影响范围、估计偿还成本、负责人等关键信息。"
        },
        {
            id: "tm-8-1-q11",
            question: "SonarQube 等工具的主要局限性是什么？",
            options: [
                "不能扫描代码",
                "代码质量指标与业务影响的关联需要人工判断",
                "只支持 Java",
                "需要付费"
            ],
            answer: 1,
            rationale: "SonarQube 可以测量代码质量指标，但这些指标与业务影响的关联需要人工判断。工具不能自动评估业务层面的债务影响。"
        },
        {
            id: "tm-8-1-q12",
            question: "审慎-故意型债务与其他类型的关键区别是什么？",
            options: [
                "不需要偿还",
                "团队知道在承担债务，经过权衡，有偿还计划",
                "成本最低",
                "只影响代码质量"
            ],
            answer: 1,
            rationale: "审慎-故意型债务的关键特征是：团队知道在承担债务，经过权衡后做出战略决策，并且有偿还计划。这是唯一可以被主动管理的债务类型。"
        }
    ],
    "tm-8-2": [
        {
            id: "tm-8-2-q1",
            question: "Martin Fowler 对重构的定义是什么？",
            options: [
                "重写整个系统",
                "改变内部结构但不改变外部行为，使代码更易理解和修改",
                "添加新功能",
                "修复 bug"
            ],
            answer: 1,
            rationale: "Fowler 定义重构为：'a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior.'"
        },
        {
            id: "tm-8-2-q2",
            question: "Michael Feathers 对遗留代码的定义是什么？",
            options: [
                "超过 5 年的代码",
                "没有测试的代码",
                "没有文档的代码",
                "不再维护的代码"
            ],
            answer: 1,
            rationale: "Feathers 定义：'Legacy Code is code without tests'——遗留代码是没有测试的代码。测试覆盖是安全修改代码的前提。"
        },
        {
            id: "tm-8-2-q3",
            question: "遗留代码悖论是什么？",
            options: [
                "遗留代码总是比新代码好",
                "修改代码需要测试保护，但添加测试往往需要修改代码",
                "遗留代码不能被修改",
                "新代码比遗留代码更难维护"
            ],
            answer: 1,
            rationale: "Feathers 指出核心挑战：'you need tests before changing code, yet adding tests often requires changing code.'——这是需要找到安全切入点的原因。"
        },
        {
            id: "tm-8-2-q4",
            question: "Seam（接缝）的定义是什么？",
            options: [
                "代码中的 bug",
                "在不改变代码的情况下改变程序行为的地方",
                "代码的注释",
                "测试覆盖率"
            ],
            answer: 1,
            rationale: "Feathers 定义 Seam 为：'a place to alter program behavior, without changing the code.'——找到接缝是在遗留代码中添加测试的关键。"
        },
        {
            id: "tm-8-2-q5",
            question: "特征测试(Characterization Tests)的目的是什么？",
            options: [
                "验证代码的正确性",
                "捕获代码的实际当前行为，建立安全网",
                "测试新功能",
                "测量代码覆盖率"
            ],
            answer: 1,
            rationale: "Feathers 解释：'we write tests often not necessary for the sake of correctness but to really understand what the code does.'——特征测试捕获当前行为而非验证正确性。"
        },
        {
            id: "tm-8-2-q6",
            question: "Will Larson 的迁移三阶段模型是什么？",
            options: [
                "计划、执行、回顾",
                "设计、开发、测试",
                "降低风险(Derisk)、赋能(Enable)、完成(Finish)",
                "分析、重构、部署"
            ],
            answer: 2,
            rationale: "Will Larson 提出技术债务偿还的三阶段方法：Derisk（降低风险）、Enable（赋能）、Finish（完成）。"
        },
        {
            id: "tm-8-2-q7",
            question: "Sprout Method 技术是什么？",
            options: [
                "删除旧代码",
                "将新功能提取到独立的、可测试的新代码中，然后从遗留代码调用",
                "重写整个模块",
                "添加注释"
            ],
            answer: 1,
            rationale: "Sprout Method 是将新功能提取到独立的、可测试的新代码中，然后从遗留代码调用。这最小化了对遗留代码的修改风险。"
        },
        {
            id: "tm-8-2-q8",
            question: "Will Larson 观察到迁移工作往往在什么时间进行？",
            options: [
                "项目开始时",
                "在边缘时间，如 20% 时间",
                "项目结束时",
                "只在周末"
            ],
            answer: 1,
            rationale: "Larson 观察到迁移'often happen kind of in the boundaries, in the shadows, in like the 20%, 120% time.'——迁移往往在边缘时间进行，这需要管理层明确支持。"
        },
        {
            id: "tm-8-2-q9",
            question: "开始但不完成迁移的后果是什么？",
            options: [
                "没有后果",
                "产生额外的技术债务",
                "节省成本",
                "提高效率"
            ],
            answer: 1,
            rationale: "Larson 警告：'Starting but not finishing migrations often incurs significant technical debt'——未完成的迁移会产生额外的技术债务，因为系统同时存在新旧两套方案。"
        },
        {
            id: "tm-8-2-q10",
            question: "健康团队应该为技术债务偿还分配多少工程能力？",
            options: [
                "5-10%",
                "20-30%",
                "50% 以上",
                "不需要专门分配"
            ],
            answer: 1,
            rationale: "建议分配 20-30% 的工程能力用于技术改进，这是债务预算的推荐范围。"
        },
        {
            id: "tm-8-2-q11",
            question: "Wrap Technique 的作用是什么？",
            options: [
                "删除旧方法",
                "重命名原方法，创建新的包装方法，可以在原行为前后注入逻辑",
                "增加代码注释",
                "提高性能"
            ],
            answer: 1,
            rationale: "Wrap Technique 是重命名原方法，创建新的包装方法，可以在原行为前后注入逻辑，同时保持原有功能不变。"
        },
        {
            id: "tm-8-2-q12",
            question: "童子军规则(Scout Rule)的含义是什么？",
            options: [
                "只允许资深开发者修改代码",
                "离开时比来时更干净——每次修改代码时顺便改进相关的小债务",
                "每天写测试",
                "每周重构一次"
            ],
            answer: 1,
            rationale: "童子军规则是'离开时比来时更干净'——每次修改代码时顺便改进相关的小债务，通过持续小改进避免债务累积。"
        }
    ],
    "tm-8-3": [
        {
            id: "tm-8-3-q1",
            question: "《The Phoenix Project》中 IT 转型的核心目标是什么？",
            options: [
                "降低成本",
                "将 IT 从业务负担转变为业务赋能者",
                "增加员工",
                "引入新技术"
            ],
            answer: 1,
            rationale: "核心转变是：'transform IT from being a business-burden to a business-enabler'——将 IT 从业务负担转变为业务赋能者。"
        },
        {
            id: "tm-8-3-q2",
            question: "DevOps 的三种方式(Three Ways)的第一种是什么？",
            options: [
                "持续学习",
                "反馈循环",
                "Flow（优化从开发到运维的工作流）",
                "自动化"
            ],
            answer: 2,
            rationale: "First Way - Flow：'Optimize the flow of work from Development to IT Operations'——优化从开发到运维的工作流，通过减少批量大小和在制品来提高吞吐量。"
        },
        {
            id: "tm-8-3-q3",
            question: "ThoughtWorks 推荐的'tracking health over debt'方法的优势是什么？",
            options: [
                "更容易量化",
                "聚焦健康度是更建设性的框架，将团队与减少债务的最终价值联系起来",
                "不需要工具",
                "成本更低"
            ],
            answer: 1,
            rationale: "ThoughtWorks 解释：'Focusing on health instead of debt is a more constructive framing that connects a team to the ultimate value of reducing debt.'——追踪健康度比追踪债务更有建设性。"
        },
        {
            id: "tm-8-3-q4",
            question: "技术人员用技术语言描述债务的问题是什么？",
            options: [
                "技术语言更准确",
                "业务方不理解这意味着什么，无法获得支持",
                "技术语言太简单",
                "技术语言成本更低"
            ],
            answer: 1,
            rationale: "技术语言（如'重构数据库层'）业务方不理解。需要转换为业务语言：影响交付速度、增加运维成本、带来安全风险。"
        },
        {
            id: "tm-8-3-q5",
            question: "ThoughtWorks 指出技术债务对组织的影响不包括以下哪项？",
            options: [
                "削弱生产力和效率",
                "提高创新能力",
                "增加系统故障风险",
                "影响开发者士气和留存"
            ],
            answer: 1,
            rationale: "技术债务的负面影响包括：削弱生产力、增加故障风险、影响士气和留存、使招聘更困难。它不会提高创新能力。"
        },
        {
            id: "tm-8-3-q6",
            question: "《The Phoenix Project》中描述的四种工作类型不包括？",
            options: [
                "业务项目",
                "内部 IT 基础设施改进",
                "非计划的反应性工作",
                "代码审查"
            ],
            answer: 3,
            rationale: "四种工作类型是：业务项目、内部 IT 基础设施改进、计划的系统变更、非计划的反应性工作。代码审查是开发实践，不是独立的工作类型。"
        },
        {
            id: "tm-8-3-q7",
            question: "ThoughtWorks 推荐的技术债务业务影响度量指标不包括？",
            options: [
                "功能部署时间延长",
                "代码行数",
                "新人上手时间延长",
                "客户反馈"
            ],
            answer: 1,
            rationale: "ThoughtWorks 推荐的度量指标包括：客户反馈、支付延迟、运营中断、功能部署时间延长、新人上手时间延长。代码行数不是业务影响指标。"
        },
        {
            id: "tm-8-3-q8",
            question: "将技术债务管理框架为什么比'成本'更有效？",
            options: [
                "流程",
                "投资",
                "项目",
                "风险"
            ],
            answer: 1,
            rationale: "将技术债务管理框架为'投资'而非'成本'。投资意味着有回报：更快的交付、更低的事故率、更容易的招聘。"
        },
        {
            id: "tm-8-3-q9",
            question: "建立技术团队信誉的关键是什么？",
            options: [
                "承诺更多改进",
                "持续交付承诺的技术改进收益，跟踪并汇报实际结果",
                "避免做任何承诺",
                "只做容易的改进"
            ],
            answer: 1,
            rationale: "需要持续交付承诺的收益。如果承诺'重构后部署时间减少50%'，需要跟踪并汇报实际结果。只有兑现承诺才能获得未来技术投资的支持。"
        },
        {
            id: "tm-8-3-q10",
            question: "DevOps 的第二种方式(Second Way)是什么？",
            options: [
                "优化工作流",
                "建立紧密的反馈循环(Feedback)",
                "持续学习",
                "自动化测试"
            ],
            answer: 1,
            rationale: "Second Way - Feedback：建立紧密的反馈循环，在整个交付管道中及早发现和预防问题，实现快速纠偏。"
        },
        {
            id: "tm-8-3-q11",
            question: "《The Phoenix Project》中被描述为最大吞吐量杀手的是什么？",
            options: [
                "业务项目",
                "内部改进",
                "非计划的反应性工作",
                "计划的变更"
            ],
            answer: 2,
            rationale: "非计划的反应性工作（如紧急 bug 修复、系统故障）是'最大的吞吐量杀手'，会打断计划工作并消耗大量资源。"
        },
        {
            id: "tm-8-3-q12",
            question: "ThoughtWorks 建议如何主动发现技术债务问题？",
            options: [
                "等待系统崩溃",
                "主动倾听开发者和客户的声音",
                "只依赖自动化工具",
                "定期审计财务报表"
            ],
            answer: 1,
            rationale: "ThoughtWorks 建议：'Listen proactively—developers identify problems first; customers signal glitches indicating deeper issues.'——开发者最先发现问题，客户反馈暗示深层问题。"
        }
    ]
}
