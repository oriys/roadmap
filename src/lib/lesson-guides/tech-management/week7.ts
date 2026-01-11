import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week7Guides: Record<string, LessonGuide> = {
    "tm-7-1": {
        lessonId: "tm-7-1",
        background: [
            "【Type 1 与 Type 2 决策】Jeff Bezos 在 2016 年致股东信中提出决策分类框架：Type 1 决策是不可逆的'单向门'(one-way doors)——'must be made methodically, carefully, slowly, with great deliberation and consultation'；Type 2 决策是可逆的'双向门'——'If you've made a suboptimal Type 2 decision, you don't have to live with the consequences for that long. You can reopen the door and go back through.'",
            "【70% 信息原则】Bezos 建议：'Most decisions should probably be made with somewhere around 70 percent of the information you wish you had. If you wait for 90 percent, in most cases, you're probably being slow.' 关键是快速识别和纠正错误决策——'being wrong may be less costly than you think, whereas being slow is going to be expensive for sure.'",
            "【Day 1 文化与决策速度】当被问及'Day 2 是什么样子？'时，Bezos 回答：'Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death.' Day 1 公司做出高质量、高速度的决策；Day 2 公司决策质量高但速度慢。",
            "【ADR 定义与价值】Architecture Decision Records (ADR) 捕获单个架构决策及其理由。ADR 官方定义：'An Architectural Decision (AD) is a justified design choice that addresses a functionally or non-functionally significant requirement.' ADR 的核心价值在于'help you understand the reasons for a chosen architectural decision, along with its trade-offs and consequences.'",
            "【决策透明性】ADR 支持架构知识管理(Architectural Knowledge Management)，创建技术决策的公开历史记录。这不仅解释了决定了'什么'，更重要的是解释了'为什么'，包括权衡和后果。"
        ],
        keyDifficulties: [
            "【大组织的决策陷阱】Bezos 警告：'As organizations get larger, there seems to be a tendency to use the heavy-weight Type 1 decision-making process on most decisions, including many Type 2 decisions. The end result of this is slowness, unthoughtful risk aversion, failure to experiment sufficiently and, consequently, diminished invention.'",
            "【Disagree and Commit】当团队无法达成共识时，使用'disagree and commit'原则：'I disagree and commit all the time.' 这不是妥协——而是在表达不同意见后全力支持执行，节省无尽的辩论时间。",
            "【识别决策可逆性】新管理者的常见错误是将大多数决策当作 Type 1 处理。需要培养快速判断决策可逆性的能力：如果决策可以在几周或几个月内撤销或调整，它就是 Type 2。",
            "【决策疲劳管理】并非所有决策值得同等投入。高杠杆决策（影响架构方向、团队结构、技术栈选择）需要深入分析；低杠杆决策应快速决定或授权给团队。",
            "【Y-Statement 格式】ADR 社区推荐使用 Y-statement 格式记录决策：'In the context of [use case/story], facing [concern], we decided for [option] to achieve [quality], accepting [downside].' 这种结构化格式确保关键信息不被遗漏。"
        ],
        handsOnPath: [
            "回顾上周的技术决策，使用 Type 1/Type 2 框架重新分类：有多少被过度谨慎处理？有多少本可以更快做出？",
            "建立团队 ADR 仓库：创建 docs/adr 目录，定义编号规范（如 ADR-0001），选择适合团队的模板格式。",
            "实践 70% 原则：选择一个当前待决策的技术问题，列出你已知的信息和未知的信息，评估是否已达到 70% 阈值。",
            "起草一份 ADR：选择最近的一个架构决策，用 Y-statement 格式记录上下文、考虑的选项、最终决策和接受的折衷。",
            "建立决策原则清单：为团队制定 5-7 条技术决策原则，作为快速决策的指导（如'优先选择成熟技术'、'数据一致性优先于性能'）。"
        ],
        selfCheck: [
            "你能快速判断一个技术决策是 Type 1 还是 Type 2 吗？你的判断依据是什么？",
            "团队最近一次因为等待'完美信息'而延误的决策是什么？事后看这种等待是否值得？",
            "当团队有技术分歧时，你通常如何处理？是否使用过'disagree and commit'原则？",
            "团队的 ADR 是否被实际阅读和引用？还是写完就被遗忘？如何提高 ADR 的实用价值？",
            "回顾一个月前的决策，有多少因为'可逆'而被快速纠正？这验证了什么？"
        ],
        extensions: [
            "深入阅读 Bezos 的历年股东信，理解 Amazon 的决策文化如何演进。",
            "研究 DACI 框架（Driver, Approver, Contributor, Informed），明确决策中的角色分工。",
            "了解 RFC (Request for Comments) 流程，适用于需要广泛征集意见的重大技术提案。",
            "探索决策树和决策矩阵工具，系统化比较多个技术选项的优劣。"
        ],
        sourceUrls: [
            "https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders",
            "https://adr.github.io/",
            "https://aws.amazon.com/executive-insights/content/how-amazon-defines-and-operationalizes-a-day-1-culture/"
        ]
    },
    "tm-7-2": {
        lessonId: "tm-7-2",
        background: [
            "【Google 设计文档的目的】Google 的设计文档(Design Docs)服务于多个关键目标：'Early identification of design issues when making changes is still cheap'——在改变还相对便宜的时候发现问题；建立跨组织的设计共识；验证跨领域关注点（安全、隐私、可观测性）；'Scaling knowledge of senior engineers into the organization'——将资深工程师的知识传播到组织。",
            "【设计文档核心结构】Google 设计文档通常包含：Context and scope（上下文和范围）、Goals and non-goals（目标和非目标）、Design section（设计部分，先概述后详细）、Alternatives considered（考虑的替代方案及权衡）、Cross-cutting concerns（跨领域关注点）。关键是'emphasize trade-offs rather than implementation minutiae'。",
            "【Tech Radar 四象限四环】ThoughtWorks 技术雷达是'a twice-yearly snapshot of tools, techniques, platforms, languages and frameworks'。四个象限：Techniques（技术实践）、Platforms（平台）、Tools（工具）、Languages and Frameworks（语言框架）。四个环：Adopt（采纳）、Trial（试验）、Assess（评估）、Hold（暂缓）。",
            "【ADR 与设计文档的区别】ADR 记录单个架构决策及其理由，通常是精简的、聚焦的；设计文档是更全面的技术方案，包含完整的设计思路。两者互补：设计文档可以引用多个 ADR，ADR 可以从设计文档的决策部分提取。",
            "【轻量级治理原则】现代架构治理强调'Guardrails, not Gates'——通过原则和自动化检查而非繁重审批来实现治理。目标是在保护系统一致性的同时不拖慢团队速度。"
        ],
        keyDifficulties: [
            "【设计文档的时机选择】Google 建议：'Skip design docs for obvious solutions or rapid prototyping phases.'——不是所有项目都需要设计文档。重大功能需要；明显的解决方案或快速原型阶段可以跳过。判断标准是变更的影响范围和可逆性。",
            "【避免过度正式化】设计文档应该'write in whatever structure serves the project'——根据项目需要选择结构，而非追求形式上的完整。'Target 10-20 pages for substantial projects; mini-docs work for incremental improvements.'",
            "【评审效率问题】设计评审容易变成冗长低效的会议。Google 采用多种评审方式：轻量级的团队评论线程、正式的设计评审会议、历史上的集中邮件列表评审。关键是'incorporating organizational experience early, catching issues when changes are still relatively cheap.'",
            "【Tech Radar 的动态性】技术在不同环之间移动反映了推荐的变化：'Technologies can be new to the latest volume or move between rings as recommendations change based on accumulated experience.' 需要持续跟踪而非一次性参考。",
            "【跨团队架构一致性】在多团队环境中，确保架构一致性更困难。需要建立架构论坛或技术委员会，定期同步技术方向和决策。"
        ],
        handsOnPath: [
            "使用 Google 设计文档模板为当前一个中型项目撰写设计文档，重点包含：Goals/Non-goals、设计概述、替代方案分析。",
            "建立团队内部 Tech Radar：列出团队使用的技术，按四象限分类，并为每项技术确定所属环（Adopt/Trial/Assess/Hold）。",
            "组织一次设计评审：选择一个新功能设计，提前分发文档，限时 45 分钟讨论，聚焦关键决策和风险。",
            "制定架构原则清单：为团队定义 5-10 条架构原则（如'服务应该可独立部署'、'优先使用标准协议'）。",
            "评审触发点定义：明确哪些变更需要架构评审——新系统、重大功能变更、使用新技术、影响非功能需求的变更。"
        ],
        selfCheck: [
            "团队是否有标准的设计文档模板？模板是否过于繁重或过于简单？",
            "设计评审是建设性的学习机会，还是变成了批评会议？团队成员对评审的态度如何？",
            "你能列出团队的架构原则吗？这些原则是否被实际遵循？",
            "团队使用的技术中，有多少在 ThoughtWorks Tech Radar 的 Hold 环？是否需要计划迁移？",
            "新人加入团队时，能否通过阅读设计文档快速理解系统架构？"
        ],
        extensions: [
            "学习 C4 模型（Context, Container, Component, Code）提供标准化的架构视图层次。",
            "研究 Architecture Fitness Functions 用于自动化架构检查和持续架构验证。",
            "了解《Building Evolutionary Architectures》书中关于演进式架构的理念。",
            "探索 TOGAF 框架了解企业级架构治理方法。"
        ],
        sourceUrls: [
            "https://www.industrialempathy.com/posts/design-docs-at-google/",
            "https://www.thoughtworks.com/radar",
            "https://github.com/joelparkerhenderson/architecture-decision-record"
        ]
    },
    "tm-7-3": {
        lessonId: "tm-7-3",
        background: [
            "【技术标准化的价值】技术标准化带来多重收益：减少认知负荷（团队成员不需要学习多种技术栈）、简化招聘（可以明确技术要求）、便于知识共享（经验可以在团队间复用）、降低维护成本（统一的工具和流程）。但过度标准化会限制创新和团队自主权。",
            "【Inner Source 原则】Inner Source 将开源开发方法应用于企业内部：'Takes lessons learned from developing open source software and applies them to the way companies develop software internally.' 核心包括：打破组织壁垒、鼓励跨团队协作、加速新工程师入职、识别贡献代码回开源社区的机会。",
            "【Adopt-Trial-Assess-Hold 模型】ThoughtWorks Tech Radar 的四环模型提供技术采纳指导：Adopt（认真考虑使用）、Trial（已证明足以实验，但尚未完全建立）、Assess（值得深入调查后再承诺）、Hold（采纳前需谨慎）。这为技术选型提供了行业级参考。",
            "【渐进式采纳策略】引入新技术应遵循渐进式策略：先在低风险项目试点积累经验，然后再推广到关键系统。避免在核心系统上做技术实验，失败的代价太高。",
            "【Inner Source 规模】Inner Source Commons Foundation 已连接超过 3000 名来自 800 多家公司的个人，表明这种协作模式在企业中的广泛采纳。"
        ],
        keyDifficulties: [
            "【标准化与创新的平衡】核心问题是找到'合理的多样性'平衡点。一种策略是分层标准化：核心基础设施高度标准化，业务层给予更多自由度；或者区分'必须遵守'和'推荐遵守'的标准。",
            "【技术炒作与实质】技术领域充满炒作(Hype)。需要关注技术解决什么问题，而非流行度。Gartner 技术成熟度曲线(Hype Cycle)帮助理解技术所处的阶段——炒作高峰期的技术往往被高估。",
            "【沉没成本偏见】已有技术投资会影响客观判断。需要评估'继续投入'vs'迁移到更好技术'的真实成本收益，而非因为'已经投入很多'而坚持错误选择。这是管理者需要克服的认知偏见。",
            "【团队能力约束】最好的技术如果团队不会用，也不是好选择。技术选型必须考虑团队当前能力和学习成本。有时候'次优但团队熟悉'的技术比'最优但需要大量学习'的技术更实际。",
            "【政治因素干扰】技术选型有时涉及团队政治（如某团队想推广自己的工具）。决策者需要保持客观，建立基于技术优劣的评估机制，而非依赖个人影响力或政治博弈。"
        ],
        handsOnPath: [
            "创建团队内部 Tech Radar：使用 Adopt/Trial/Assess/Hold 环对团队现有技术进行分类，标注每项技术的状态和演进计划。",
            "制定技术选型流程：建立标准化的技术选型流程，包括提案模板、评估维度（功能、性能、学习曲线、社区、兼容性）、决策机制。",
            "标准化审计：列出团队当前的技术标准，评估哪些需要更新、哪些过于严格、哪些覆盖不足。",
            "POC 实践：选择一个正在评估的新技术，设计一个有限范围的 Proof of Concept，验证其在特定场景的可行性。",
            "Inner Source 探索：识别团队中可以开放给其他团队使用或贡献的项目，尝试建立内部开源模式。"
        ],
        selfCheck: [
            "团队是否有明确的技术栈标准？标准是否定期审查和更新？",
            "引入新技术的流程是什么？是否有试点机制？最近一次引入新技术是如何决策的？",
            "团队是否有'禁止使用'(Hold)的技术清单？原因是否被记录和沟通？",
            "团队如何平衡技术创新和稳定性？是过于保守还是过于激进？",
            "有没有因为沉没成本而坚持使用明知不是最优的技术？如何突破？"
        ],
        extensions: [
            "研究'Boring Technology'（无聊技术）理念——Dan McKinley 的'Choose Boring Technology'文章。",
            "了解 Gartner 技术成熟度曲线(Hype Cycle)，避免在炒作高峰期做出错误决策。",
            "学习如何进行系统化的技术 POC (Proof of Concept)。",
            "研究大型组织（如 Google、Netflix）的技术标准化和创新平衡实践。"
        ],
        sourceUrls: [
            "https://innersourcecommons.org/",
            "https://www.thoughtworks.com/radar",
            "https://mcfunley.com/choose-boring-technology"
        ]
    }
}

export const week7Quizzes: Record<string, QuizQuestion[]> = {
    "tm-7-1": [
        {
            id: "tm-7-1-q1",
            question: "根据 Jeff Bezos 的决策框架，Type 2 决策的核心特征是什么？",
            options: [
                "需要 CEO 批准的决策",
                "不可逆的重大决策，需要谨慎处理",
                "可逆的决策，可以快速做出并迭代",
                "涉及财务投资的决策"
            ],
            answer: 2,
            rationale: "Bezos 定义 Type 2 决策为可逆的'双向门'：'If you've made a suboptimal Type 2 decision, you don't have to live with the consequences for that long. You can reopen the door and go back through.'"
        },
        {
            id: "tm-7-1-q2",
            question: "Bezos 建议在拥有多少信息时就应该做出决策？",
            options: [
                "50% 的信息",
                "70% 的信息",
                "90% 的信息",
                "100% 的信息"
            ],
            answer: 1,
            rationale: "Bezos 在股东信中写道：'Most decisions should probably be made with somewhere around 70 percent of the information you wish you had. If you wait for 90 percent, in most cases, you're probably being slow.'"
        },
        {
            id: "tm-7-1-q3",
            question: "Bezos 描述的 Day 2 公司有什么特点？",
            options: [
                "快速成长的公司",
                "创新驱动的公司",
                "停滞、逐渐无关紧要、痛苦衰落、最终死亡",
                "刚成立的公司"
            ],
            answer: 2,
            rationale: "Bezos 回答 Day 2 的问题时说：'Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death. And that is why it is always Day 1.'"
        },
        {
            id: "tm-7-1-q4",
            question: "ADR (Architecture Decision Records) 的核心价值是什么？",
            options: [
                "自动生成代码",
                "帮助理解架构决策的原因、权衡和后果",
                "取代所有技术文档",
                "评估开发者绩效"
            ],
            answer: 1,
            rationale: "ADR 的核心价值在于'help you understand the reasons for a chosen architectural decision, along with its trade-offs and consequences'，记录决策的'为什么'而非仅仅是'什么'。"
        },
        {
            id: "tm-7-1-q5",
            question: "'Disagree and commit' 原则的含义是什么？",
            options: [
                "只有在完全同意时才承诺",
                "在表达不同意见后全力支持执行，节省辩论时间",
                "推迟决策直到达成共识",
                "让持不同意见的人退出项目"
            ],
            answer: 1,
            rationale: "Bezos 解释'disagree and commit'：这不是妥协，而是在表达不同意见后全力支持执行。他说：'I disagree and commit all the time.'——这节省了无尽的辩论时间。"
        },
        {
            id: "tm-7-1-q6",
            question: "大型组织在决策上常犯的错误是什么？",
            options: [
                "做太多快速决策",
                "将大多数决策（包括 Type 2）用 Type 1 的重量级流程处理",
                "完全不记录决策",
                "让太多人参与决策"
            ],
            answer: 1,
            rationale: "Bezos 警告：'As organizations get larger, there seems to be a tendency to use the heavy-weight Type 1 decision-making process on most decisions, including many Type 2 decisions. The end result is slowness, unthoughtful risk aversion, failure to experiment sufficiently.'"
        },
        {
            id: "tm-7-1-q7",
            question: "ADR 中的 Y-statement 格式包含哪些要素？",
            options: [
                "日期、作者、版本号",
                "上下文、关注点、选择、质量目标、接受的缺点",
                "问题、解决方案、代码示例",
                "需求、设计、测试用例"
            ],
            answer: 1,
            rationale: "Y-statement 格式为：'In the context of [use case/story], facing [concern], we decided for [option] to achieve [quality], accepting [downside].' 确保关键信息不被遗漏。"
        },
        {
            id: "tm-7-1-q8",
            question: "关于决策速度和错误的关系，Bezos 的观点是？",
            options: [
                "错误的代价总是很高，所以要避免",
                "速度不重要，正确性才重要",
                "犯错的代价可能比你想象的低，但慢的代价一定很高",
                "只有在完全确定时才做决定"
            ],
            answer: 2,
            rationale: "Bezos 写道：'You need to be good at quickly recognizing and correcting bad decisions. If you're good at course-correcting, being wrong may be less costly than you think, whereas being slow is going to be expensive for sure.'"
        },
        {
            id: "tm-7-1-q9",
            question: "如何判断一个决策是 Type 1 还是 Type 2？",
            options: [
                "看决策涉及的金额大小",
                "看决策是否可逆以及撤销/调整的时间成本",
                "看参与决策的人数",
                "看决策是否需要 CEO 批准"
            ],
            answer: 1,
            rationale: "Type 1 是不可逆的'单向门'，Type 2 是可逆的'双向门'。判断标准是：如果决策可以在几周或几个月内撤销或调整，它就是 Type 2。"
        },
        {
            id: "tm-7-1-q10",
            question: "ADR 支持的核心管理活动是什么？",
            options: [
                "项目进度管理",
                "架构知识管理 (Architectural Knowledge Management)",
                "人员绩效管理",
                "预算管理"
            ],
            answer: 1,
            rationale: "ADR 支持架构知识管理(Architectural Knowledge Management)，创建技术决策的公开历史记录，解释决策的'为什么'，包括权衡和后果。"
        },
        {
            id: "tm-7-1-q11",
            question: "Type 1 决策应该如何处理？",
            options: [
                "快速决定，迭代调整",
                "授权给团队成员",
                "缓慢、有条理、经过深思熟虑和咨询后做出",
                "投票决定"
            ],
            answer: 2,
            rationale: "Bezos 对 Type 1 决策的建议是：'must be made methodically, carefully, slowly, with great deliberation and consultation'——因为这些决策是不可逆的'单向门'。"
        },
        {
            id: "tm-7-1-q12",
            question: "建立团队决策原则清单的目的是什么？",
            options: [
                "限制团队的自主权",
                "满足审计要求",
                "作为快速决策的指导，提高决策一致性",
                "减少决策参与人数"
            ],
            answer: 2,
            rationale: "决策原则清单（如'优先选择成熟技术'）作为快速决策的指导，帮助团队在常见场景下做出一致的选择，减少重复讨论。"
        }
    ],
    "tm-7-2": [
        {
            id: "tm-7-2-q1",
            question: "Google 设计文档的首要目的是什么？",
            options: [
                "满足合规要求",
                "记录代码实现细节",
                "在改变还相对便宜的时候早期发现设计问题",
                "展示工程师的能力"
            ],
            answer: 2,
            rationale: "Google 设计文档的首要目的是'Early identification of design issues when making changes is still cheap'——在改变还相对便宜的时候早期发现设计问题。"
        },
        {
            id: "tm-7-2-q2",
            question: "设计文档应该强调什么而非什么？",
            options: [
                "代码结构而非设计理念",
                "权衡取舍(trade-offs)而非实现细节(implementation minutiae)",
                "技术细节而非业务需求",
                "团队职责而非技术方案"
            ],
            answer: 1,
            rationale: "Google 建议设计文档应该'emphasize trade-offs rather than implementation minutiae'——强调权衡取舍而非实现细节。"
        },
        {
            id: "tm-7-2-q3",
            question: "ThoughtWorks Tech Radar 的四个象限是什么？",
            options: [
                "前端、后端、数据库、运维",
                "Techniques、Platforms、Tools、Languages and Frameworks",
                "开发、测试、部署、监控",
                "设计、编码、测试、发布"
            ],
            answer: 1,
            rationale: "ThoughtWorks Tech Radar 将技术分为四个象限：Techniques（技术实践）、Platforms（平台）、Tools（工具）、Languages and Frameworks（语言框架）。"
        },
        {
            id: "tm-7-2-q4",
            question: "Tech Radar 的 Trial 环表示什么？",
            options: [
                "已被广泛采用，建议认真考虑使用",
                "已被证明足以实验，但尚未完全建立",
                "值得深入调查后再承诺",
                "采纳前需谨慎"
            ],
            answer: 1,
            rationale: "Trial 环表示技术'Proven enough to experiment with, though not fully established'——已被证明足以实验，但尚未完全建立。"
        },
        {
            id: "tm-7-2-q5",
            question: "设计文档中的 'Non-goals' 部分的作用是什么？",
            options: [
                "列出项目的缺点",
                "明确系统不会解决的问题，避免范围蔓延",
                "记录失败的设计尝试",
                "列出竞争对手的功能"
            ],
            answer: 1,
            rationale: "Goals and non-goals 部分明确'what the system explicitly will and won't address'——清晰界定范围边界，避免范围蔓延。"
        },
        {
            id: "tm-7-2-q6",
            question: "'Guardrails, not Gates' 原则在架构治理中意味着什么？",
            options: [
                "设置更多审批流程",
                "通过原则和自动化检查而非繁重审批来实现治理",
                "完全取消治理",
                "只允许资深工程师做架构决策"
            ],
            answer: 1,
            rationale: "现代架构治理强调'Guardrails, not Gates'——通过架构原则、设计模板、自动化检查取代繁重的审批流程，在保护一致性的同时不拖慢团队。"
        },
        {
            id: "tm-7-2-q7",
            question: "Google 设计文档的推荐长度是多少？",
            options: [
                "1-2 页",
                "10-20 页（重大项目），小型改进用迷你文档",
                "50 页以上",
                "没有长度限制"
            ],
            answer: 1,
            rationale: "Google 建议'Target 10-20 pages for substantial projects; mini-docs work for incremental improvements'——根据项目规模调整文档长度。"
        },
        {
            id: "tm-7-2-q8",
            question: "什么情况下可以跳过设计文档？",
            options: [
                "所有项目都需要设计文档",
                "只有小型 bug 修复可以跳过",
                "解决方案明显或快速原型阶段",
                "团队人数少于 5 人时"
            ],
            answer: 2,
            rationale: "Google 建议'Skip design docs for obvious solutions or rapid prototyping phases'——解决方案明显或快速原型阶段可以跳过设计文档。"
        },
        {
            id: "tm-7-2-q9",
            question: "设计文档的核心价值来自于什么？",
            options: [
                "满足文档要求",
                "早期纳入组织经验，在改变还相对便宜时发现问题",
                "记录代码细节",
                "展示技术能力"
            ],
            answer: 1,
            rationale: "设计文档的主要价值来自'incorporating organizational experience early, catching issues when changes are still relatively cheap'——早期引入组织智慧。"
        },
        {
            id: "tm-7-2-q10",
            question: "Tech Radar 的 Hold 环表示什么？",
            options: [
                "建议立即采用",
                "可以开始试验",
                "值得评估",
                "采纳前需谨慎，可能存在问题"
            ],
            answer: 3,
            rationale: "Hold 环表示'Exercise caution before adoption'——采纳前需谨慎，通常意味着该技术存在已知问题或有更好的替代方案。"
        },
        {
            id: "tm-7-2-q11",
            question: "设计评审最重要的目标是什么？",
            options: [
                "批评设计者的方案",
                "确保符合原则、识别风险、传播知识",
                "减少设计文档数量",
                "加快项目进度"
            ],
            answer: 1,
            rationale: "架构评审有三个目标：确保设计符合架构原则、识别潜在风险和技术债务、传播知识和最佳实践。评审应该是建设性的学习机会。"
        },
        {
            id: "tm-7-2-q12",
            question: "Tech Radar 中技术在不同环之间移动说明了什么？",
            options: [
                "技术雷达有错误",
                "推荐随着积累的经验而变化",
                "技术本身发生了改变",
                "评估标准变了"
            ],
            answer: 1,
            rationale: "Tech Radar 说明：'Technologies can be new to the latest volume or move between rings as recommendations change based on accumulated experience'——推荐随着经验积累而变化。"
        }
    ],
    "tm-7-3": [
        {
            id: "tm-7-3-q1",
            question: "技术标准化的主要价值不包括以下哪项？",
            options: [
                "减少认知负荷",
                "简化招聘",
                "限制所有创新",
                "便于知识共享"
            ],
            answer: 2,
            rationale: "技术标准化的价值包括：减少认知负荷、简化招聘、便于知识共享、降低维护成本。标准化应该平衡而非完全限制创新。"
        },
        {
            id: "tm-7-3-q2",
            question: "Inner Source 的核心理念是什么？",
            options: [
                "将所有代码开源",
                "将开源开发方法应用于企业内部",
                "只使用开源软件",
                "关闭所有内部项目"
            ],
            answer: 1,
            rationale: "Inner Source'Takes lessons learned from developing open source software and applies them to the way companies develop software internally'——将开源协作模式引入企业内部开发。"
        },
        {
            id: "tm-7-3-q3",
            question: "Tech Radar 的 Adopt 环表示什么？",
            options: [
                "值得评估",
                "可以开始试验",
                "应该认真考虑使用",
                "需要谨慎"
            ],
            answer: 2,
            rationale: "Adopt 环表示'Seriously consider using these technologies'——应该认真考虑使用，这是推荐度最高的环。"
        },
        {
            id: "tm-7-3-q4",
            question: "引入新技术的推荐策略是什么？",
            options: [
                "直接在核心系统使用",
                "先在低风险项目试点，积累经验后再推广",
                "等待技术完全成熟",
                "让每个团队自己决定"
            ],
            answer: 1,
            rationale: "引入新技术应遵循渐进式策略：先在低风险项目试点积累经验，然后再推广到关键系统。避免在核心系统做技术实验。"
        },
        {
            id: "tm-7-3-q5",
            question: "Inner Source 如何帮助新工程师入职？",
            options: [
                "提供更多文档",
                "通过开放的代码库和协作模式加速学习",
                "减少入职培训",
                "自动分配导师"
            ],
            answer: 1,
            rationale: "Inner Source 通过'Accelerating onboarding for new engineers'——开放的代码库和跨团队协作模式使新工程师更容易学习和贡献。"
        },
        {
            id: "tm-7-3-q6",
            question: "技术选型中的'沉没成本偏见'指什么？",
            options: [
                "新技术成本太高",
                "因为已有投资而坚持错误选择",
                "团队学习成本",
                "迁移成本"
            ],
            answer: 1,
            rationale: "沉没成本偏见是指因为'已经投入很多'而坚持明知不是最优的技术选择，这是管理者需要克服的认知偏见。"
        },
        {
            id: "tm-7-3-q7",
            question: "技术选型必须考虑团队当前能力的原因是什么？",
            options: [
                "限制团队学习",
                "最好的技术如果团队不会用，也不是好选择",
                "节省培训成本",
                "避免团队反对"
            ],
            answer: 1,
            rationale: "技术选型必须考虑团队能力：有时候'次优但团队熟悉'的技术比'最优但需要大量学习'的技术更实际。"
        },
        {
            id: "tm-7-3-q8",
            question: "分层标准化策略是什么？",
            options: [
                "所有层都高度标准化",
                "核心基础设施高度标准化，业务层给予更多自由度",
                "完全不标准化",
                "只标准化前端"
            ],
            answer: 1,
            rationale: "分层标准化是平衡标准化与创新的策略：核心基础设施高度标准化以确保稳定性，业务层给予更多自由度以鼓励创新。"
        },
        {
            id: "tm-7-3-q9",
            question: "Gartner 技术成熟度曲线(Hype Cycle)的作用是什么？",
            options: [
                "预测技术价格",
                "理解技术的成熟度和炒作周期，避免在高峰期做错误决策",
                "评估技术性能",
                "比较技术厂商"
            ],
            answer: 1,
            rationale: "Hype Cycle 帮助理解技术所处的阶段——炒作高峰期的技术往往被高估，需要等待其进入'生产力平台期'后再大规模采用。"
        },
        {
            id: "tm-7-3-q10",
            question: "Inner Source Commons Foundation 连接了多少人和公司？",
            options: [
                "100 人，50 家公司",
                "500 人，200 家公司",
                "超过 3000 人，800 多家公司",
                "10000 人，1000 家公司"
            ],
            answer: 2,
            rationale: "Inner Source Commons Foundation'now connects over 3,000 individuals from more than 800 companies, academic institutions, and government agencies'——表明 Inner Source 模式的广泛采纳。"
        },
        {
            id: "tm-7-3-q11",
            question: "如何处理技术选型中的政治因素？",
            options: [
                "完全服从领导意见",
                "保持客观，建立基于技术优劣的评估机制",
                "避免所有政治相关讨论",
                "让最有影响力的团队决定"
            ],
            answer: 1,
            rationale: "决策者需要保持客观，建立基于技术优劣的评估机制（如决策矩阵），而非依赖个人影响力或政治博弈。"
        },
        {
            id: "tm-7-3-q12",
            question: "POC (Proof of Concept) 在技术选型中的作用是什么？",
            options: [
                "证明技术最先进",
                "在有限范围内验证技术在特定场景的可行性",
                "获得供应商折扣",
                "满足采购流程"
            ],
            answer: 1,
            rationale: "POC 是在有限范围内验证技术在特定场景的可行性，通过实际试验而非理论分析来评估技术适用性，降低选型风险。"
        }
    ]
}
