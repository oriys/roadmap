import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
    "tm-2-1": {
        lessonId: "tm-2-1",
        background: [
            "【向上管理本质】Mary Abbajay 在《Managing Up》中指出：'It's not about sucking up or brown-nosing; it's about figuring out who you are, who your boss is, and finding where you meet.'——向上管理不是迎合，而是建立真正的工作关系，这对你、你的上级和整个组织都有益。",
            "【自我认知基础】Abbajay 强调自我认知是成功的标志：'Self-awareness is also a hallmark of success'——理解自己的个性和上级的个性，找到适应点是向上管理的核心技能。管理向上意味着'taking responsibility for your relationship with your manager'。",
            "【5-15 报告方法】Will Larson 介绍的高效周报方法：'spending fifteen minutes a week writing a report that can be read in five minutes'——每周花 15 分钟写作，5 分钟阅读。具体做法是每天在 Google Doc 中记录进展，周五花约 10 分钟润色成可读格式。",
            "【周报三大目标】周报服务于三个核心目标：1) 弥合领导力对齐差距——'It's easy for folks to become detached from their leadership's priorities'；2) 创建跨团队连接组织——分享跨项目学习；3) 个人文档记录——为绩效评审周期编制'brag documents'。",
            "【信息群体免疫】Will Larson 发现有趣的现象：'sporadic reading is sufficient'——即使只有少数人阅读周报，存在'herd-immunity for missing information'，重要信息最终会传播到需要的人那里。"
        ],
        keyDifficulties: [
            "【汇报核心需求确认】'接收到任务第一件要做的事情，是问出核心需求'——了解 What 之前最重要的是问出 Why。如果因为上级疏忽没有完整讲出背后需求，按表面理解工作会南辕北辙。",
            "【带方案汇报问题】'汇报时，不是不能讲问题，而是要带着方案，甚至要带着多个方案讲问题，让领导做选择题。'——每个方案的优劣、你选择的倾向、选择的思路都要给领导讲清楚。",
            "【及时主动汇报】'很多一线员工会误以为领导会清楚自己的每个工作进度，然而，这种假设通常并不正确。'——领导需要同时管理多个项目和团队，作为下属应主动、定期地沟通。",
            "【适应上级风格】'Every manager has a unique leadership and management style. Adapting your approach to your boss's style is crucial for a harmonious and effective working relationship.'——观察和理解上级偏好的沟通、决策和委派方式。",
            "【示范推广优于强制】Will Larson 发现最有效的推广方式是'modeling behavior rather than mandating participation'——通过以身作则而非强制要求来推动周报文化。"
        ],
        handsOnPath: [
            "建立周报习惯：创建专用 Google Doc，每天花 2 分钟记录完成事项，周五整理成周报。使用 Will Larson 的 5-15 格式：15 分钟写、5 分钟读。",
            "创建专用邮件列表：避免污染现有沟通渠道，设置周报为可选阅读，管理信息过载。",
            "与上级进行一次深入对话：问出'你最关心什么指标？''我的汇报方式有什么需要调整的？''你偏好的沟通频率和方式是什么？'",
            "准备风险登记表：记录当前项目的主要风险、影响范围、应对计划。汇报问题时带着 2-3 个解决方案供上级选择。",
            "练习电梯演讲：用一分钟总结团队当前最重要的工作、进展和障碍。汇报做到简明扼要、重点突出。"
        ],
        selfCheck: [
            "你的上级是否清楚知道你团队当前最重要的工作是什么？你通过什么方式让他们保持了解？",
            "上一次你主动向上级汇报风险或问题是什么时候？你当时带了解决方案吗？",
            "你是否了解上级的管理风格和沟通偏好？你如何适应这些偏好？",
            "当你需要资源或支持时，是否能用业务影响来表达需求？给出一个例子。",
            "你的周报（如果有）是否遵循了 5-15 原则？上级和同事从中获得了什么价值？"
        ],
        extensions: [
            "深入阅读《Managing Up》全书，学习针对不同类型上级（微观管理者、有毒上级等）的应对策略。",
            "学习 BLUF（Bottom Line Up Front）写作技巧——先给结论，再展开细节，让汇报更高效。",
            "研究彼得-德鲁克关于'manage up'的原始论述，理解这一概念的管理学根源。",
            "了解不同文化背景下向上沟通的差异，特别是在跨国团队中的应用。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Managing-Up-Move-Work-Succeed/dp/1119436656",
            "https://hbr.org/2015/01/how-to-manage-your-boss",
            "https://lethain.com/weekly-updates/"
        ]
    },
    "tm-2-2": {
        lessonId: "tm-2-2",
        background: [
            "【1:1 核心价值】Manager Tools 经过 30 年研究发现：'trust correlates better than any other with results and retention'——信任是与结果和留存相关性最高的指标。1:1 是建立信任'最快速和可持续改善'的管理工具。",
            "【1:1 三大关注点】Manager Tools 指出 1:1 解决三个关键管理问题：1) 如何与团队成员建立真正的关系；2) 如何确保任务完成和绩效达标；3) 确定一对一会议中讨论的主题。",
            "【Radical Candor 框架】Kim Scott 提出的反馈框架结合两个维度：'Care Personally'（关心个人）和'Challenge Directly'（直接挑战）。'Radical Candor happens when you put these two things together to give feedback that's kind, clear, specific and sincere.'",
            "【反馈四象限】1) Radical Candor（关心+挑战）是目标状态；2) Ruinous Empathy（只关心不挑战）——'what happens when you want to spare someone's short-term feelings, so you don't tell them something they need to know'；3) Obnoxious Aggression（只挑战不关心）——'brutal honesty or front stabbing'；4) Manipulative Insincerity——Kim Scott 称之为'the worst of all places'。",
            "【问题资源库】GitHub 上的 1on1-questions 仓库收集了 300+ 个问题，分为 7 大类：关于管理者（48 题）、职业发展（65 题）、对话开场（25 题）、工作满意度（80 题）、团队与公司（100+ 题）、工作生活平衡（50+ 题）等。"
        ],
        keyDifficulties: [
            "【议程主导权】1:1 是属于下属的时间，应该让他们主导议程。Manager Tools 强调管理者的挑战是引导但不主导，建立'genuine relationships with team members'。",
            "【Ruinous Empathy 陷阱】Kim Scott 警告：'Ruinous Empathy may feel nice or safe, but is ultimately unhelpful and even damaging'——为了避免短期不适而回避必要的反馈，长期对被反馈者有害。",
            "【即时反馈实践】Radical Candor 强调反馈应该即时进行：'Give impromptu feedback regularly rather than waiting for formal reviews'——日常中找到合适时机是挑战。",
            "【一致性维护】保持 1:1 的一致性和优先级至关重要。取消 1:1 会传递'你不重要'的错误信号，破坏信任基础。",
            "【开放式问题设计】仓库强调使用'open-ended questions that encourage reflection rather than yes/no responses'——支持更深入的管理对话和员工发展。"
        ],
        handsOnPath: [
            "建立固定 1:1 日程：与每位直接下属设定每周或每两周固定时间，30-60 分钟，坚持不取消。",
            "创建共享 1:1 文档：为每位下属创建共享文档，双方都可以提前添加议题。记录讨论要点和行动项。",
            "从问题库选择问题：本周尝试这个问题——'As your manager, what would you like me to stop, start, or continue doing?'",
            "实践 Radical Candor：本周用框架给出一次反馈。先确认你真的关心这个人，再直接但善意地表达挑战。",
            "评估说话比例：在下次 1:1 后反思你和下属的说话比例。目标是让下属说 80%，你说 20%。"
        ],
        selfCheck: [
            "你与所有直接下属都有固定的 1:1 吗？过去一个月你取消过几次？",
            "在 1:1 中，你和下属的说话比例大约是多少？你是否做到了 20:80？",
            "你最近一次在 1:1 中讨论职业发展是什么时候？下属的职业目标你清楚吗？",
            "用 Radical Candor 框架评估：你上次给出的反馈落在哪个象限？如何改进？",
            "团队成员是否愿意在 1:1 中分享困难和挑战？有什么证据？"
        ],
        extensions: [
            "研究 GROW 模型（Goal, Reality, Options, Will）用于教练式对话，帮助下属自主找到解决方案。",
            "学习 SBI 模型（Situation, Behavior, Impact）用于结构化反馈，让反馈更具体、更可操作。",
            "阅读《Thanks for the Feedback》了解如何成为更好的反馈接收者——这能帮助你理解给反馈时对方的心理。",
            "探索 1on1-questions 仓库中的更多问题类别，如'What's one thing about your job that, if we fixed, would make you never want to leave?'"
        ],
        sourceUrls: [
            "https://www.manager-tools.com/2005/07/the-single-most-effective-management-tool-part-1",
            "https://github.com/VGraupera/1on1-questions",
            "https://www.radicalcandor.com/the-book/"
        ]
    },
    "tm-2-3": {
        lessonId: "tm-2-3",
        background: [
            "【Staff Engineer 四种原型】Will Larson 在《Staff Engineer》中识别了四种 Staff+ 工程师模式：1) Tech Lead——'guides execution for one or a cluster of teams'，与管理者紧密配合，大约每 8 名工程师配备一名；2) Architect——'owns direction within critical technical areas'；3) Solver——'tackles arbitrarily complex, high-risk problems'；4) Right Hand——'extends senior leader's authority without direct management'。",
            "【晋升也是工作变化】《Staff Engineer》的核心洞察：'becoming a Staff engineer is both a promotion and a job change'——技术能力本身不足以成功，还需要更广泛的领导力能力。",
            "【技术可信度重要性】'Even though an engineering manager's job description doesn't leave much room for technical tasks, the person in this role must have a technical background.'——技术背景帮助向非技术利益相关者解释复杂概念，更重要的是在被管理的工程师中建立可信度。",
            "【技术能力的演变】'The transition from hands-on engineering to engineering management doesn't mean leaving your technical identity behind. Instead, it means evolving how you engage with technology.'——你的价值不在于写最好的代码，而在于理解技术选择如何影响团队、产品和组织。",
            "【影响力而非职权】Larson 强调 Staff 工程师'are leaders of the companies...but they're not managerial leaders – they're their own different type of technical leadership'——通过技术可信度和赞助而非直接汇报关系来驱动影响力。"
        ],
        keyDifficulties: [
            "【原型选择】'The work people should seek depends on the archetype that their company actually wants from them.'——关键挑战是解耦你想做什么、公司实际重视什么，将大部分工作集中在公司重视的方向。",
            "【Tech Lead vs Solver 取舍】Larson 建议反思什么能激励你：'Tech Lead/Architect: Deep relationships over years on shared problems; Solver/Right Hand: Transactional work on executive priorities with less community continuity'。",
            "【技术深度维护】随着职责增加，保持技术深度变得困难。关键洞察：'successful engineering managers maintained their technical edge, but not by writing code daily'——需要重新定义'技术能力'在领导角色中的含义。",
            "【赞助 vs 指导】'Effective staff engineers leverage their experience to mentor others, but more importantly, they sponsor them.'——赞助意味着在组织内为他人倡导和提升，是持久影响力的关键。",
            "【组织与权力对齐】'Borrowing authority comes with the obligation of remaining deeply aligned with that leader's approach, beliefs, and values'——Right Hand 原型需要与高管深度对齐。"
        ],
        handsOnPath: [
            "识别你的原型：反思 Tech Lead、Architect、Solver、Right Hand 四种模式，哪种最符合你当前角色和公司期望？",
            "技术写作实践：本月写一篇技术决策文档或 ADR（Architecture Decision Record），记录决策背景、考虑的选项和最终选择的理由。",
            "架构原则草案：为你的团队起草 3-5 条架构原则，帮助团队自主做技术决策而无需等待你的批准。",
            "技术分享：在团队内或跨团队做一次技术分享，练习将复杂技术概念转化为不同受众能理解的语言。",
            "选择深度领域：识别一个技术领域作为你的深度投资方向，制定学习计划保持专业深度。"
        ],
        selfCheck: [
            "你属于哪种 Staff 原型？这与公司对你的期望一致吗？",
            "团队成员在技术决策上是否信任你的判断？有什么证据？",
            "你能否用非技术语言向产品经理或高管解释技术概念？举一个最近的例子。",
            "你有哪些技术领域保持着专业深度？这些领域对团队和业务足够重要吗？",
            "你最近一次赞助（不仅仅是指导）团队成员是什么时候？效果如何？"
        ],
        extensions: [
            "阅读《Staff Engineer》完整内容，特别是关于'Work on What Matters'的章节——理解如何优先处理能产生最大影响的工作。",
            "研究 ThoughtWorks 技术雷达，了解行业技术趋势，保持技术敏感度。",
            "学习 RFC（Request for Comments）流程用于技术提案，在组织中建立技术决策的透明度。",
            "探索 Dropbox、CircleCI 等公司的工程职级框架，理解不同公司对 Staff+ 角色的期望差异。"
        ],
        sourceUrls: [
            "https://staffeng.com/book",
            "https://staffeng.com/guides/staff-archetypes/",
            "https://leaddev.com/skills-new-managers/building-and-maintaining-technical-credibility"
        ]
    }
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
    "tm-2-1": [
        {
            id: "tm-2-1-q1",
            question: "根据 Mary Abbajay 的定义，向上管理的本质是什么？",
            options: [
                "讨好上级的政治技巧",
                "弄清楚你是谁、你的上级是谁，找到你们的交汇点",
                "让上级按照自己的想法行事",
                "避免与上级产生任何冲突"
            ],
            answer: 1,
            rationale: "Abbajay 明确指出：'It's not about sucking up or brown-nosing; it's about figuring out who you are, who your boss is, and finding where you meet.'——向上管理是建立真正的工作关系。"
        },
        {
            id: "tm-2-1-q2",
            question: "Will Larson 的 5-15 报告方法指的是什么？",
            options: [
                "每 5-15 人需要写一份报告",
                "花费 15 分钟撰写、5 分钟阅读的周度更新",
                "每 5-15 天写一次报告",
                "报告长度应该是 5-15 页"
            ],
            answer: 1,
            rationale: "Will Larson 描述：'spending fifteen minutes a week writing a report that can be read in five minutes'——这是一种高效的周报方法。"
        },
        {
            id: "tm-2-1-q3",
            question: "周报的三个核心目标不包括以下哪项？",
            options: [
                "弥合领导力对齐差距",
                "创建跨团队连接组织",
                "为绩效评审编制个人文档",
                "展示个人工作量以争取加薪"
            ],
            answer: 3,
            rationale: "周报的三个核心目标是：弥合领导力对齐差距、创建跨团队连接组织、为绩效评审周期编制'brag documents'。展示工作量争取加薪不是核心目标。"
        },
        {
            id: "tm-2-1-q4",
            question: "Will Larson 发现的'信息群体免疫'现象是什么？",
            options: [
                "信息会被自动过滤和屏蔽",
                "即使只有少数人阅读，重要信息最终会传播到需要的人",
                "信息只在团队内部传播",
                "敏感信息需要特殊保护"
            ],
            answer: 1,
            rationale: "Larson 发现存在'herd-immunity for missing information'——即使'sporadic reading is sufficient'，重要信息最终会传播到需要它们的人那里。"
        },
        {
            id: "tm-2-1-q5",
            question: "推广周报实践最有效的方式是什么？",
            options: [
                "强制要求所有人写周报",
                "与绩效考核挂钩",
                "通过示范行为而非明确要求",
                "由 HR 统一推动"
            ],
            answer: 2,
            rationale: "Larson 发现采用最有效的方式是'modeling behavior rather than mandating participation'——通过以身作则而非强制要求。"
        },
        {
            id: "tm-2-1-q6",
            question: "接收任务时第一件要做的事情是什么？",
            options: [
                "立即开始执行",
                "估算时间和资源",
                "问出核心需求（Why）",
                "分配给团队成员"
            ],
            answer: 2,
            rationale: "'接收到任务第一件要做的事情，是问出核心需求'——了解 What 之前最重要的是问出 Why，避免按表面理解工作导致南辕北辙。"
        },
        {
            id: "tm-2-1-q7",
            question: "汇报问题时应该遵循什么原则？",
            options: [
                "只汇报好消息，避免负面信息",
                "带着多个方案讲问题，让领导做选择题",
                "等问题解决后再汇报",
                "只描述问题，让领导自己想办法"
            ],
            answer: 1,
            rationale: "'汇报时，不是不能讲问题，而是要带着方案，甚至要带着多个方案讲问题，让领导做选择题'——每个方案的优劣、选择倾向都要讲清楚。"
        },
        {
            id: "tm-2-1-q8",
            question: "关于汇报进度，常见的错误假设是什么？",
            options: [
                "领导太忙没时间看汇报",
                "领导会清楚自己的每个工作进度",
                "汇报频率越高越好",
                "只需要在项目结束时汇报"
            ],
            answer: 1,
            rationale: "'很多一线员工会误以为领导会清楚自己的每个工作进度，然而，这种假设通常并不正确'——领导需要管理多个项目，需要主动汇报。"
        },
        {
            id: "tm-2-1-q9",
            question: "Abbajay 强调向上管理成功的标志是什么？",
            options: [
                "获得更多加薪和晋升",
                "自我认知（self-awareness）",
                "让上级完全信任你",
                "避免所有冲突"
            ],
            answer: 1,
            rationale: "Abbajay 强调：'Self-awareness is also a hallmark of success'——理解自己和上级的个性，找到适应点是向上管理的核心。"
        },
        {
            id: "tm-2-1-q10",
            question: "创建周报邮件列表时 Larson 的建议是什么？",
            options: [
                "使用公司全员列表确保覆盖",
                "创建专用邮件列表，避免污染现有渠道",
                "使用个人邮箱发送",
                "只发给直接上级"
            ],
            answer: 1,
            rationale: "Larson 建议'Create a dedicated mailing list to avoid cluttering existing communication channels'，并设置为可选阅读。"
        },
        {
            id: "tm-2-1-q11",
            question: "适应上级管理风格的关键是什么？",
            options: [
                "完全改变自己的工作方式",
                "观察和理解上级偏好的沟通、决策和委派方式",
                "让上级适应你的风格",
                "避免与上级有任何风格差异"
            ],
            answer: 1,
            rationale: "'Adapting your approach to your boss's style is crucial'——关键是'observing and understanding how your boss prefers to communicate, make decisions, and delegate tasks'。"
        },
        {
            id: "tm-2-1-q12",
            question: "处理有毒上级时 Abbajay 的建议不包括？",
            options: [
                "采用生存者心态",
                "保持专业性",
                "直接对抗挑战上级",
                "记录所有事情"
            ],
            answer: 2,
            rationale: "Abbajay 对有毒上级的建议包括：Adopt a survivor mentality、Maintain your professionalism、Document everything 等，但不包括直接对抗挑战。"
        }
    ],
    "tm-2-2": [
        {
            id: "tm-2-2-q1",
            question: "根据 Manager Tools 30 年研究，与结果和留存相关性最高的指标是什么？",
            options: [
                "薪酬满意度",
                "技术能力",
                "信任",
                "晋升速度"
            ],
            answer: 2,
            rationale: "Manager Tools 研究发现：'trust correlates better than any other with results and retention'——信任是与结果和留存相关性最高的指标。"
        },
        {
            id: "tm-2-2-q2",
            question: "Radical Candor 框架的两个核心维度是什么？",
            options: [
                "表扬和批评",
                "Care Personally（关心个人）和 Challenge Directly（直接挑战）",
                "正式和非正式",
                "公开和私下"
            ],
            answer: 1,
            rationale: "Kim Scott 的 Radical Candor 框架结合'Care Personally'和'Challenge Directly'两个维度来给出有效反馈。"
        },
        {
            id: "tm-2-2-q3",
            question: "Kim Scott 将 Manipulative Insincerity 描述为什么？",
            options: [
                "最常见的反馈方式",
                "可以接受的备选方案",
                "最糟糕的位置（the worst of all places）",
                "管理者的默认模式"
            ],
            answer: 2,
            rationale: "Kim Scott 称 Manipulative Insincerity 为'the worst of all places'——既不关心个人也不直接挑战，是最糟糕的状态。"
        },
        {
            id: "tm-2-2-q4",
            question: "Ruinous Empathy 的问题是什么？",
            options: [
                "过于严厉伤害感情",
                "为避免短期不适而不告诉对方需要知道的事",
                "完全不关心个人",
                "政治操纵行为"
            ],
            answer: 1,
            rationale: "Kim Scott 解释：'Ruinous Empathy is what happens when you want to spare someone's short-term feelings, so you don't tell them something they need to know'——长期有害。"
        },
        {
            id: "tm-2-2-q5",
            question: "GitHub 1on1-questions 仓库收集了多少个问题，分为几大类？",
            options: [
                "100+ 个问题，5 大类",
                "200+ 个问题，6 大类",
                "300+ 个问题，7 大类",
                "500+ 个问题，10 大类"
            ],
            answer: 2,
            rationale: "仓库收集了 300+ 个问题，分为 7 大类：关于管理者、职业发展、对话开场、工作满意度、团队与公司、工作生活平衡、其他。"
        },
        {
            id: "tm-2-2-q6",
            question: "1:1 中说话比例的目标是什么？",
            options: [
                "管理者和下属各 50%",
                "管理者 80%，下属 20%",
                "管理者 20%，下属 80%",
                "没有固定比例要求"
            ],
            answer: 2,
            rationale: "1:1 是属于下属的时间，管理者应该倾听多于说话。目标比例是管理者说 20%，让下属说 80%。"
        },
        {
            id: "tm-2-2-q7",
            question: "Radical Candor 强调反馈应该什么时候给出？",
            options: [
                "年度评审时统一给出",
                "季度回顾会议上",
                "即时给出而非等待正式评审",
                "只在问题严重时"
            ],
            answer: 2,
            rationale: "Radical Candor 强调：'Give impromptu feedback regularly rather than waiting for formal reviews'——即时反馈比等待正式场合更有效。"
        },
        {
            id: "tm-2-2-q8",
            question: "Obnoxious Aggression 在 Radical Candor 框架中指什么？",
            options: [
                "关心个人但不敢挑战",
                "直接挑战但不关心个人（brutal honesty）",
                "既不关心也不挑战",
                "关心同时直接挑战"
            ],
            answer: 1,
            rationale: "Kim Scott 描述 Obnoxious Aggression 为'brutal honesty or front stabbing'——直接挑战但不展示关心，会伤害关系。"
        },
        {
            id: "tm-2-2-q9",
            question: "Manager Tools 将 1:1 描述为什么？",
            options: [
                "可选的管理工具",
                "有效管理者的基石（bedrock of effective managers）",
                "高级管理者才需要的技能",
                "只适用于大型团队"
            ],
            answer: 1,
            rationale: "Manager Tools 强调 1:1 是'the bedrock of effective managers'——是有效管理者的基石和最有效的单一管理工具。"
        },
        {
            id: "tm-2-2-q10",
            question: "1on1-questions 仓库强调使用什么类型的问题？",
            options: [
                "是非题方便快速回答",
                "多选题覆盖更多话题",
                "开放式问题鼓励反思",
                "技术问题考察能力"
            ],
            answer: 2,
            rationale: "仓库强调使用'open-ended questions that encourage reflection rather than yes/no responses'——开放式问题支持更深入的管理对话。"
        },
        {
            id: "tm-2-2-q11",
            question: "为什么不应该轻易取消 1:1？",
            options: [
                "公司政策要求必须进行",
                "会传递你不重视下属的错误信号，破坏信任",
                "会影响项目进度",
                "会减少可报告的会议数量"
            ],
            answer: 1,
            rationale: "取消 1:1 会传递'你不重要'的错误信号，破坏与下属建立的信任基础。保持一致性是 1:1 有效的关键。"
        },
        {
            id: "tm-2-2-q12",
            question: "1on1-questions 中建议的管理者效能问题是什么？",
            options: [
                "你这周完成了什么任务？",
                "作为你的经理，你希望我停止、开始或继续做什么？",
                "你对公司有什么建议？",
                "你的绩效目标完成得怎么样？"
            ],
            answer: 1,
            rationale: "仓库推荐的管理者效能问题：'As your manager, what would you like me to stop, start, or continue doing?'——帮助获取对管理方式的反馈。"
        }
    ],
    "tm-2-3": [
        {
            id: "tm-2-3-q1",
            question: "Will Larson 在《Staff Engineer》中识别了几种 Staff+ 工程师原型？",
            options: [
                "2 种",
                "3 种",
                "4 种",
                "5 种"
            ],
            answer: 2,
            rationale: "Larson 识别了四种原型：Tech Lead、Architect、Solver、Right Hand——每种都有不同的关注点和工作方式。"
        },
        {
            id: "tm-2-3-q2",
            question: "Tech Lead 原型的特点是什么？",
            options: [
                "专注于跨团队的系统设计",
                "引导一个或一组团队的执行，与管理者紧密配合",
                "解决高风险复杂问题",
                "延伸高管的权限范围"
            ],
            answer: 1,
            rationale: "Tech Lead 'guides execution for one or a cluster of teams'，与管理者紧密配合，大约每 8 名工程师配备一名。"
        },
        {
            id: "tm-2-3-q3",
            question: "《Staff Engineer》的核心洞察是什么？",
            options: [
                "技术能力是唯一重要的因素",
                "晋升也是工作变化，技术能力本身不足以成功",
                "Staff Engineer 不需要领导力",
                "管理是唯一的晋升路径"
            ],
            answer: 1,
            rationale: "核心洞察：'becoming a Staff engineer is both a promotion and a job change'——技术能力本身不足以成功，还需要更广泛的领导力能力。"
        },
        {
            id: "tm-2-3-q4",
            question: "Right Hand 原型通常在什么规模的组织出现？",
            options: [
                "10+ 工程师",
                "50+ 工程师",
                "100+ 工程师",
                "任何规模"
            ],
            answer: 2,
            rationale: "Right Hand 原型'Operates at 100+ engineer companies'——在大型组织中延伸高管的权限范围。"
        },
        {
            id: "tm-2-3-q5",
            question: "选择 Staff 原型时应该考虑什么？",
            options: [
                "只考虑自己想做什么",
                "只考虑公司给的职位",
                "解耦你想做什么、公司实际重视什么，将工作集中在公司重视的方向",
                "选择薪酬最高的方向"
            ],
            answer: 2,
            rationale: "'The work people should seek depends on the archetype that their company actually wants from them'——需要解耦个人意愿和公司期望，集中在公司重视的方向。"
        },
        {
            id: "tm-2-3-q6",
            question: "关于工程管理者的技术能力，正确的观点是什么？",
            options: [
                "完全不需要技术能力",
                "需要每天写代码保持技术能力",
                "技术背景帮助解释复杂概念并在工程师中建立可信度",
                "技术能力越深越好，应该是团队最强的"
            ],
            answer: 2,
            rationale: "'The person in this role must have a technical background'——技术背景帮助向非技术人员解释复杂概念，更重要的是在被管理的工程师中建立可信度。"
        },
        {
            id: "tm-2-3-q7",
            question: "从工程师转向工程管理的正确理解是什么？",
            options: [
                "必须完全放弃技术身份",
                "应该继续保持每天写代码",
                "意味着演变与技术的互动方式，价值在于理解技术选择如何影响团队和组织",
                "技术能力不再重要"
            ],
            answer: 2,
            rationale: "'The transition doesn't mean leaving your technical identity behind. Instead, it means evolving how you engage with technology'——价值在于理解技术选择的影响。"
        },
        {
            id: "tm-2-3-q8",
            question: "Staff 工程师的领导力特点是什么？",
            options: [
                "通过直接管理下属来领导",
                "是公司的领导者，但是不同类型的技术领导力而非管理领导力",
                "不需要任何领导力",
                "领导力仅限于技术决策"
            ],
            answer: 1,
            rationale: "Larson 强调：'Staff engineers are leaders of the companies...but they're not managerial leaders – they're their own different type of technical leadership'。"
        },
        {
            id: "tm-2-3-q9",
            question: "Effective Staff Engineer 与 Mentorship 的区别是什么？",
            options: [
                "两者完全相同",
                "不仅指导他人，更重要的是赞助他人——在组织内为他人倡导和提升",
                "只关注技术培训",
                "只关注自己的技术成长"
            ],
            answer: 1,
            rationale: "'Effective staff engineers leverage their experience to mentor others, but more importantly, they sponsor them'——赞助意味着在组织内为他人倡导和提升。"
        },
        {
            id: "tm-2-3-q10",
            question: "借用权限（Borrowing authority）的义务是什么？",
            options: [
                "可以自由使用不受限制",
                "需要与该领导者的方法、信念和价值观保持深度对齐",
                "只在紧急情况下使用",
                "必须获得书面授权"
            ],
            answer: 1,
            rationale: "'Borrowing authority comes with the obligation of remaining deeply aligned with that leader's approach, beliefs, and values'——需要深度对齐。"
        },
        {
            id: "tm-2-3-q11",
            question: "Tech Lead 与 Architect 的主要区别是什么？",
            options: [
                "薪酬水平不同",
                "Tech Lead 引导团队执行，Architect 负责关键技术领域的方向和质量",
                "完全相同没有区别",
                "只是职称不同"
            ],
            answer: 1,
            rationale: "Tech Lead 'guides execution for a team'；Architect 'owns direction, quality, and approach within a critical area'——关注范围和职责不同。"
        },
        {
            id: "tm-2-3-q12",
            question: "Solver 原型的特点是什么？",
            options: [
                "关注团队建设和人员发展",
                "专注跨团队架构设计",
                "深入研究任意复杂的高风险问题，在组织优先的热点之间流动",
                "延伸高管的权限和范围"
            ],
            answer: 2,
            rationale: "Solver 'Digs deep into arbitrarily complex problems and finds an appropriate path forward'——专注于解决高风险复杂问题，在组织优先的热点间流动。"
        }
    ]
}
