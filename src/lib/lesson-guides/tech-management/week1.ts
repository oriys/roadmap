import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "tm-1-1": {
        lessonId: "tm-1-1",
        background: [
            "【角色转变本质】《The Manager's Path》指出：'Becoming a Staff engineer is both a promotion and a job change; many immensely talented engineers pursue the first and arrive unprepared for the latter'——从工程师到管理者不仅是晋升，更是工作性质的根本转变。",
            "【价值衡量转变】作为工程师，你的价值体现在个人贡献上；作为管理者，你的价值体现在团队的整体产出上。Camille Fournier 强调：'If you don't stay in the code, you risk making yourself technically obsolete too early in your career'——但管理者需要平衡技术深度与管理宽度。",
            "【时间所有权变化】HBR 研究显示 65% 的新晋管理者经历角色转换焦虑。新管理者常期望保持工程师时的自由度，但现实是'other people own your time'——你在服务团队和公司。",
            "【技术专家陷阱】《The Manager's Path》警告不要仅因技术能力强就提拔为 Tech Lead，候选人还需要'interested in developing people skills and gaining project-management experience'。过度关注技术细节是新管理者最常见的陷阱。",
            "【管理三大核心技能】成功的工程管理者需要三项核心能力：清晰沟通(clear communication)、战略规划(strategic planning)和适应性(adaptability)——这与纯技术能力有显著差异。"
        ],
        keyDifficulties: [
            "【从做事到成事】新管理者最大的心理障碍是从'直接执行'转向'通过他人完成工作'。放下亲自动手的冲动，学会赋能团队是关键转变。",
            "【被喜欢 vs 有效领导】HBR 指出新管理者常'prioritize being liked over enabling genuine team growth'——需要平衡亲和力与有效领导，有时需要做出不受欢迎但正确的决定。",
            "【反馈文化建立】建立早期反馈文化至关重要：'Ask clarifying questions like \"Am I clear in my expectations?\" and \"What do you need from me?\"'——不要等到年度评审才给反馈。",
            "【信任授予而非保留】HBR 建议：'Give trust, don't withhold it'——员工被雇用是因为他们具备相关专业能力，微观管理会传递你不信任他们的信号。",
            "【系统分析替代指责】当问题发生时，抵制针对个人的冲动，转而问'Where did the process break down?'——消除责备，分析系统是建立心理安全感的基础。"
        ],
        handsOnPath: [
            "列出你过去一周的时间分配：多少时间用于个人贡献？多少时间用于赋能他人？评估当前的平衡状态。",
            "与每位直接下属安排 1:1 会议，使用开放式问题了解他们的期望和障碍：'What do you need from me to be more effective?'",
            "选择一个你通常会亲自完成的任务，练习授权给团队成员，提供清晰的预期和支持而非代劳。",
            "记录一次你想要直接干预技术细节的情况，分析是否真的需要你介入，还是可以通过指导让团队成员成长。",
            "寻找一位导师或同级管理者，定期交流管理挑战和经验，研究显示这能有效预防倦怠。"
        ],
        selfCheck: [
            "你能清晰区分工程师思维和管理者思维的核心差异吗？你目前更倾向于哪种？",
            "当团队成员犯错时，你的第一反应是责备个人还是分析系统流程？",
            "过去一周，你在赋能他人上投入了多少时间？这个比例是否需要调整？",
            "你是否有明确的反馈机制？团队成员是否敢于向你提出不同意见？",
            "面对不确定性和模糊性时，你感到焦虑还是能够接受这是管理工作的常态？"
        ],
        extensions: [
            "深入阅读《The Manager's Path》全书，理解从 IC 到 CTO 的完整职业路径。",
            "研究'彼得原理'(Peter Principle)——人们往往被提升到他们不胜任的层级，思考如何避免。",
            "探索教练式领导(Coaching Leadership)方法，学习如何通过提问而非指令帮助团队成长。",
            "了解'情境领导'(Situational Leadership)理论，根据下属的成熟度调整管理风格。"
        ],
        sourceUrls: [
            "https://www.oreilly.com/library/view/the-managers-path/9781491973882/",
            "https://www.amazon.com/What-Got-Here-Wont-There/dp/1401301304",
            "https://hbr.org/2022/06/5-pieces-of-advice-for-first-time-managers"
        ]
    },
    "tm-1-2": {
        lessonId: "tm-1-2",
        background: [
            "【Tech Lead 定义】Pat Kua 定义 Tech Lead 为'a developer responsible for leading a team and defining technical consistency'——融合技术专业知识与领导能力的角色。",
            "【四大核心职责】技术管理者需要平衡四个领域：People(人员管理)、Process(流程优化)、Technology(技术方向)、Strategy(战略规划)。不同层级的管理者在这四个维度上的时间分配不同。",
            "【角色区分】Pat Kua 明确区分：Product Manager 关注'What'(做什么)；Engineering Manager 关注人员与团队成长；Tech Lead 关注'How'(如何做)与技术成长；架构师关注跨团队的系统设计。",
            "【编码时间建议】Tech Lead 应保持至少 30% 的时间用于编码，以维持技术判断力和团队信任。但随着管理职责增加，这个比例需要有意识地调整。",
            "【周报最佳实践】Will Larson 推荐'5-15 report'方法：'spending fifteen minutes a week writing a report that can be read in five minutes'——既保持透明度又不过度消耗时间。"
        ],
        keyDifficulties: [
            "【时间分配的黄金比例】不存在通用的完美比例，但新管理者常犯的错误是在技术细节上花费过多时间，忽视了人员发展和流程优化。需要定期审视并调整分配。",
            "【避免过度干预】Will Larson 指出周报的目标之一是'Share leadership priorities and concerns to keep teams connected to organizational direction'——而不是事无巨细地追踪每个技术决定。",
            "【跨职能协作】Tech Lead 需要与 PM、EM 紧密协作，理解各自的关注点和语言，避免陷入'技术人员不理解业务'的困境。",
            "【授权层次模型】授权不是全有或全无，需要根据任务重要性和下属成熟度选择：告知、建议、参与、授权、放手五个层次。",
            "【状态更新的价值】周报看似简单，但'asynchronous reference value'使其成为组织记忆和绩效评估的重要依据。"
        ],
        handsOnPath: [
            "绘制你当前的时间分配饼图：People、Process、Technology、Strategy 各占多少？与你期望的比例相比如何？",
            "建立周报习惯：每周五花 15 分钟总结本周进展、下周计划、遇到的障碍和需要的支持。",
            "列出你团队中每个成员的职业发展目标，评估你在这方面投入了多少时间和精力。",
            "审视最近一次技术决策：你是直接做出决定，还是引导团队得出结论？哪种方式更有利于团队成长？",
            "与你的 PM/产品经理进行一次深入对话，理解他们的优先级和压力，寻找协作改进点。"
        ],
        selfCheck: [
            "你能清晰描述 Tech Lead、Engineering Manager、架构师三个角色的职责边界吗？",
            "团队成员是否清楚了解你的优先级和期望？你通过什么机制传达这些信息？",
            "你最近一次进行技术深潜(deep dive)是什么时候？频率是否合适？",
            "当你不在时，团队能否自主运作？这反映了你的授权是否到位。",
            "你的上级是否清楚了解你团队的进展和挑战？你的向上沟通是否有效？"
        ],
        extensions: [
            "研究'RACI 矩阵'(Responsible, Accountable, Consulted, Informed)，明确团队中的职责分工。",
            "阅读《An Elegant Puzzle》深入了解工程管理的系统性方法。",
            "探索 OKR 框架在技术团队中的应用，学习如何设定和追踪目标。",
            "了解'管理债务'(Management Debt)概念——类似技术债务，是为了短期效率而牺牲的管理实践。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management/dp/1732265186",
            "https://docs.google.com/document/d/1kngKHUCS0DHNvZAO8PfkcsTD4Mq7b11L09RIaVpQnwI",
            "https://www.patkua.com/blog/the-definition-of-a-tech-lead/"
        ]
    },
    "tm-1-3": {
        lessonId: "tm-1-3",
        background: [
            "【成长型 vs 固定型思维】Carol Dweck 在《Mindset》中定义：固定型思维认为'intelligence and creative ability are static givens'；成长型思维则认为能力可以通过努力和练习培养。",
            "【失败的重新定义】成长型思维者'don't actually see themselves as failing—they see themselves as learning'——失败不是能力不足的证据，而是成长的跳板。",
            "【高杠杆活动】Andy Grove 在《High Output Management》中提出管理者产出公式：'A manager's output = the output of his organization + the output of the neighboring organizations under his influence'——管理者是绩效的乘数。",
            "【杠杆的定义】高杠杆活动是指：a) 影响很多人；b) 短期行动长期影响一个人；c) 关键信息影响大群体工作。培训是管理者最高杠杆的活动之一。",
            "【任务相关成熟度(TRM)】Grove 提出没有'好'或'坏'的管理风格，只有有效和无效之分。管理风格应根据下属的任务相关成熟度调整——同一个人在不同任务上的 TRM 可能不同。"
        ],
        keyDifficulties: [
            "【假成长型思维警惕】Dweck 警告存在'false growth mindset'——口头上声称成长型思维，但行为和态度并未真正改变。'The path to a growth mindset is a journey, not a proclamation.'",
            "【负杠杆的危害】Grove 指出'waffling'(犹豫不决)是高负杠杆行为——管理者推迟决定等于否定决定，可能导致整个组织工作停滞。",
            "【不确定性的接受】管理工作充满模糊性，与工程工作的确定性形成对比。学会在信息不完整时做决定，而不是无限期等待'完美信息'。",
            "【努力不等于成长型思维】Dweck 澄清：'A growth mindset isn't just about effort'——需要配合新策略尝试和他人反馈。单纯的努力不足以确保成长。",
            "【从错误中学习的生理基础】研究显示固定型思维者在审视错误时大脑没有活动，而成长型思维者大脑显示处理活动——固定型思维可能从生理上阻止你从错误中学习。"
        ],
        handsOnPath: [
            "回顾最近一次失败或挫折：你的第一反应是什么？是责备自己/他人的能力，还是分析可改进的地方？",
            "列出你作为管理者的高杠杆活动清单：培训、1:1、方向设定、障碍移除。评估这些活动在你时间中的占比。",
            "识别一个你一直推迟的决定，分析推迟的原因。设定一个截止日期，在信息不完整的情况下做出决定。",
            "实践'yet'的力量：当你或团队成员说'我不会...'时，加上'yet'——'我还不会...'。这个小改变能改变对挑战的态度。",
            "建立个人反馈循环：每周记录一个学习点和一个改进点，月底回顾成长轨迹。"
        ],
        selfCheck: [
            "当面对挑战时，你更倾向于证明自己的能力，还是发展自己的能力？",
            "你能识别自己和团队成员在不同任务上的 TRM 吗？你是否据此调整管理方式？",
            "上一次你公开承认错误是什么时候？团队对此的反应如何？",
            "你的时间中有多少用于高杠杆活动？是否有低价值活动可以减少或委托？",
            "当收到批评性反馈时，你的第一反应是防御还是好奇？"
        ],
        extensions: [
            "深入阅读《High Output Management》，特别是关于会议、决策和绩效评估的章节。",
            "研究'心理韧性'(Psychological Resilience)的培养方法，增强面对压力和挫折的能力。",
            "探索'反脆弱'(Antifragile)概念——Nassim Taleb 提出的在压力下变得更强的系统特性。",
            "了解'复盘'(After Action Review)方法论，建立从经验中学习的系统性方法。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Mindset-Psychology-Carol-S-Dweck/dp/0345472322",
            "https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884",
            "https://hbr.org/2017/01/the-new-rules-of-talent-management"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "tm-1-1": [
        {
            id: "tm-1-1-q1",
            question: "《The Manager's Path》对工程师到管理者转变的核心描述是什么？",
            options: [
                "这只是职位名称的改变，工作内容基本相同",
                "这是晋升同时也是工作性质的转变，很多人追求前者却未准备好后者",
                "管理者应该完全停止编码",
                "技术能力是唯一重要的因素"
            ],
            answer: 1,
            rationale: "Camille Fournier 明确指出：'Becoming a Staff engineer is both a promotion and a job change; many immensely talented engineers pursue the first and arrive unprepared for the latter'——强调这是双重转变。"
        },
        {
            id: "tm-1-1-q2",
            question: "HBR 研究显示多少比例的新晋管理者经历角色转换焦虑？",
            options: [
                "约 25%",
                "约 45%",
                "约 65%",
                "约 85%"
            ],
            answer: 2,
            rationale: "HBR 研究表明'65% of first-time managers experience anxiety about role transitions'，寻求导师和同伴支持能有效预防倦怠。"
        },
        {
            id: "tm-1-1-q3",
            question: "根据 HBR 文章，新管理者最需要避免的陷阱是什么？",
            options: [
                "过度关注技术细节，事必躬亲",
                "花太多时间在 1:1 上",
                "授权给团队成员",
                "优先考虑被喜欢而非促进团队真正成长"
            ],
            answer: 3,
            rationale: "HBR 指出新管理者常犯的错误是'prioritize being liked over enabling genuine team growth'——需要平衡亲和力与有效领导。"
        },
        {
            id: "tm-1-1-q4",
            question: "HBR 建议新管理者如何对待信任？",
            options: [
                "信任需要慢慢建立，初期应该保留",
                "给予信任，不要保留它(Give trust, don't withhold it)",
                "只信任高绩效员工",
                "信任应该基于严格的绩效指标"
            ],
            answer: 1,
            rationale: "HBR 明确建议：'Give trust, don't withhold it'——员工被雇用是因为具备专业能力，微观管理传递不信任信号。"
        },
        {
            id: "tm-1-1-q5",
            question: "当问题发生时，HBR 建议管理者应该问什么问题？",
            options: [
                "谁应该为此负责？",
                "这个人是否适合这个岗位？",
                "流程在哪里出了问题？(Where did the process break down?)",
                "如何惩罚责任人？"
            ],
            answer: 2,
            rationale: "HBR 强调消除责备，分析系统：'When problems arise, resist targeting individuals. Instead, ask \"Where did the process break down?\"'"
        },
        {
            id: "tm-1-1-q6",
            question: "《The Manager's Path》对 Tech Lead 候选人的建议是什么？",
            options: [
                "只要技术能力最强就应该担任 Tech Lead",
                "候选人还需要对发展人际技能和获得项目管理经验感兴趣",
                "Tech Lead 不需要任何管理技能",
                "应该避免有管理兴趣的人担任 Tech Lead"
            ],
            answer: 1,
            rationale: "Fournier 警告不要仅因技术强就提拔为 Tech Lead，候选人还需要'interested in developing people skills and gaining project-management experience'。"
        },
        {
            id: "tm-1-1-q7",
            question: "关于管理者的时间所有权，正确的描述是？",
            options: [
                "管理者与工程师一样可以自主安排时间",
                "管理者应该保护至少 80% 的独立工作时间",
                "其他人拥有你的时间——你在服务团队和公司",
                "管理者不需要参与任何会议"
            ],
            answer: 2,
            rationale: "新管理者常期望保持工程师时的自由度，但现实是'other people own your time'——管理者在服务团队和公司。"
        },
        {
            id: "tm-1-1-q8",
            question: "成功的工程管理者需要的三项核心能力是什么？",
            options: [
                "编码、架构设计、代码审查",
                "清晰沟通、战略规划、适应性",
                "项目管理、预算控制、招聘",
                "技术深度、系统设计、性能优化"
            ],
            answer: 1,
            rationale: "研究表明成功的工程管理者需要三项核心能力：clear communication、strategic planning 和 adaptability——这与纯技术能力有显著差异。"
        },
        {
            id: "tm-1-1-q9",
            question: "HBR 建议如何建立反馈文化？",
            options: [
                "等到年度评审时给予全面反馈",
                "只在问题发生时提供反馈",
                "建立每周或双周 1:1，随时保持开放接受反馈",
                "通过匿名调查收集反馈"
            ],
            answer: 2,
            rationale: "HBR 建议建立'weekly or biweekly one-on-one meetings'，使用澄清性问题，并'remain open to feedback at all times'——而非等到年度评审。"
        },
        {
            id: "tm-1-1-q10",
            question: "HBR 推荐的团队连接仪式 'Rose and Thorn' 是什么？",
            options: [
                "每月一次的团队建设活动",
                "分享一件积极的事和一件消极的周事件",
                "代码评审的固定流程",
                "项目启动仪式"
            ],
            answer: 1,
            rationale: "HBR 推荐'Rose and Thorn check-ins'——'one positive, one negative weekly event'——作为远程和混合团队的结构化连接活动。"
        },
        {
            id: "tm-1-1-q11",
            question: "《The Manager's Path》对管理者保持技术能力的建议是什么？",
            options: [
                "管理者不需要保持技术能力",
                "如果不保持在代码中，风险是过早让自己技术过时",
                "管理者应该花 100% 时间在编码上",
                "技术能力与管理成功无关"
            ],
            answer: 1,
            rationale: "Fournier 强调：'If you don't stay in the code, you risk making yourself technically obsolete too early in your career'——需要平衡技术深度与管理宽度。"
        },
        {
            id: "tm-1-1-q12",
            question: "关于推动人们进入管理角色，《The Manager's Path》的观点是？",
            options: [
                "应该积极推动高绩效者进入管理",
                "管理是每个人自然的职业发展路径",
                "不应该推动人进入管理角色，如果没准备好就不要承担",
                "只有资深工程师才适合管理"
            ],
            answer: 2,
            rationale: "Fournier 持有强烈观点：'I have a strong opinion on pushing people into management roles, which is that you shouldn't do it. If you're not ready to take on management type responsibilities, don't take them on.'"
        }
    ],
    "tm-1-2": [
        {
            id: "tm-1-2-q1",
            question: "Pat Kua 对 Tech Lead 的定义是什么？",
            options: [
                "团队中技术最强的工程师",
                "负责领导团队和确定技术一致性的软件工程师",
                "不编码只做管理的角色",
                "专门处理技术债务的工程师"
            ],
            answer: 1,
            rationale: "Pat Kua 定义 Tech Lead 为'a developer responsible for leading a team and defining technical consistency'——融合技术专业知识与领导能力。"
        },
        {
            id: "tm-1-2-q2",
            question: "Tech Lead 建议保持多少比例的编码时间？",
            options: [
                "0%——Tech Lead 不应该编码",
                "至少 30% 的时间用于编码",
                "100%——与普通工程师相同",
                "至少 70% 的时间用于编码"
            ],
            answer: 1,
            rationale: "Pat Kua 建议 Tech Lead 应保持'at least 30% of their time coding'，以维持技术判断力和团队信任。"
        },
        {
            id: "tm-1-2-q3",
            question: "根据 Pat Kua 的框架，Product Manager 主要关注什么？",
            options: [
                "How——如何做",
                "What——做什么",
                "人员与团队成长",
                "跨团队的系统设计"
            ],
            answer: 1,
            rationale: "Pat Kua 明确区分：Product Manager 关注'What'(做什么)；Tech Lead 关注'How'(如何做)与技术成长。"
        },
        {
            id: "tm-1-2-q4",
            question: "Will Larson 推荐的'5-15 report'方法是什么？",
            options: [
                "每天花 5-15 分钟编码",
                "每月 5-15 页的详细报告",
                "花 15 分钟写一份可以在 5 分钟内读完的报告",
                "每周 5-15 次 1:1 会议"
            ],
            answer: 2,
            rationale: "Will Larson 推荐：'spending fifteen minutes a week writing a report that can be read in five minutes'——高效的周报方法。"
        },
        {
            id: "tm-1-2-q5",
            question: "周报的主要目标之一是什么？",
            options: [
                "事无巨细地追踪每个技术决定",
                "分享领导优先级和关注点，保持团队与组织方向的连接",
                "替代所有其他沟通方式",
                "展示个人工作量"
            ],
            answer: 1,
            rationale: "Will Larson 指出周报目标是'Share leadership priorities and concerns to keep teams connected to organizational direction'——而非微观管理。"
        },
        {
            id: "tm-1-2-q6",
            question: "Engineering Manager 主要关注什么？",
            options: [
                "技术架构设计",
                "产品功能定义",
                "人员与团队成长",
                "代码质量审查"
            ],
            answer: 2,
            rationale: "Pat Kua 的框架中，Engineering Manager 关注'人员与团队成长'，与 Tech Lead 关注技术方向形成互补。"
        },
        {
            id: "tm-1-2-q7",
            question: "关于周报的采用，Will Larson 的建议是？",
            options: [
                "强制所有人必须写和阅读",
                "通过以身作则而非强制要求来推广",
                "只有管理者需要写",
                "应该废除周报文化"
            ],
            answer: 1,
            rationale: "Will Larson 建议采用通过'modeling behavior rather than mandating participation'成功——以身作则而非强制要求。"
        },
        {
            id: "tm-1-2-q8",
            question: "技术管理者需要平衡的四个核心领域是什么？",
            options: [
                "编码、测试、部署、监控",
                "People、Process、Technology、Strategy",
                "需求、设计、开发、运维",
                "招聘、培训、考核、晋升"
            ],
            answer: 1,
            rationale: "技术管理者需要平衡四个领域：People(人员管理)、Process(流程优化)、Technology(技术方向)、Strategy(战略规划)。"
        },
        {
            id: "tm-1-2-q9",
            question: "周报的异步参考价值是什么？",
            options: [
                "只在发送时有价值",
                "人们经常在之后回顾它们来回答具体问题",
                "应该在阅读后立即删除",
                "只对写的人有价值"
            ],
            answer: 1,
            rationale: "Will Larson 指出周报有'asynchronous reference value'——'people often revisit them later to answer specific questions'，超越初次阅读的价值。"
        },
        {
            id: "tm-1-2-q10",
            question: "Tech Lead 需要平衡的三个核心能力领域是什么？",
            options: [
                "管理、销售、财务",
                "开发、架构、领导力",
                "编码、测试、文档",
                "沟通、谈判、演讲"
            ],
            answer: 1,
            rationale: "Pat Kua 强调 Tech Lead 需要三个平衡的能力领域：开发、架构和领导力——这些技能的组合使其能有效指导技术决策。"
        },
        {
            id: "tm-1-2-q11",
            question: "关于周报的阅读，Will Larson 的观点是？",
            options: [
                "每个人必须阅读每一份周报",
                "只有直接上级需要阅读",
                "零星阅读就足够，重要信息最终会到达需要的人",
                "应该设置阅读追踪确保全员覆盖"
            ],
            answer: 2,
            rationale: "Will Larson 接受'sporadic reading is sufficient'——存在'herd-immunity for missing information'，重要细节最终会到达需要它们的人。"
        },
        {
            id: "tm-1-2-q12",
            question: "架构师与 Tech Lead 的主要区别是什么？",
            options: [
                "架构师编码更多",
                "Tech Lead 关注跨团队系统设计，架构师关注团队内部",
                "架构师关注跨团队的系统设计，Tech Lead 关注团队级技术方向",
                "两者角色完全相同"
            ],
            answer: 2,
            rationale: "Pat Kua 区分：Tech Lead 关注团队级的'How'与技术成长；架构师关注'跨团队的系统设计'——范围不同。"
        }
    ],
    "tm-1-3": [
        {
            id: "tm-1-3-q1",
            question: "Carol Dweck 对固定型思维的定义是什么？",
            options: [
                "认为能力可以通过努力培养",
                "认为智力和创造力是可以改变的静态天赋",
                "认为智力和创造力是无法改变的静态天赋",
                "认为失败是学习的机会"
            ],
            answer: 2,
            rationale: "Dweck 定义固定型思维认为'intelligence and creative ability are static givens which we can't change in any meaningful way'。"
        },
        {
            id: "tm-1-3-q2",
            question: "Andy Grove 的管理者产出公式是什么？",
            options: [
                "管理者产出 = 个人编码量 × 代码质量",
                "管理者产出 = 其组织的产出 + 其影响的相邻组织的产出",
                "管理者产出 = 会议数量 × 决策数量",
                "管理者产出 = 团队规模 × 平均绩效"
            ],
            answer: 1,
            rationale: "Grove 提出：'A manager's output = the output of his organization + the output of the neighboring organizations under his influence'——管理者是乘数。"
        },
        {
            id: "tm-1-3-q3",
            question: "根据 Dweck 的研究，成长型思维者如何看待失败？",
            options: [
                "将失败视为能力不足的证据",
                "尽量避免失败以保护自尊",
                "不认为自己在失败——而是在学习",
                "失败后会质疑自己的天赋"
            ],
            answer: 2,
            rationale: "Dweck 指出成长型思维者'don't actually see themselves as failing—they see themselves as learning'——失败是成长的跳板。"
        },
        {
            id: "tm-1-3-q4",
            question: "Andy Grove 认为什么是管理者最高杠杆的活动之一？",
            options: [
                "参加更多会议",
                "亲自编写代码",
                "培训",
                "审批所有决定"
            ],
            answer: 2,
            rationale: "Grove 指出：'Training is the highest leverage activity a manager can do to increase the output of an organization'——培训有长期的高产出。"
        },
        {
            id: "tm-1-3-q5",
            question: "Grove 举的高负杠杆行为例子是什么？",
            options: [
                "快速决策",
                "犹豫不决(waffling)——推迟决定",
                "授权给下属",
                "定期培训团队"
            ],
            answer: 1,
            rationale: "Grove 指出'waffling'是高负杠杆行为——'a manager puts off a decision...no green light is a red light, and work can stop for a whole organization'。"
        },
        {
            id: "tm-1-3-q6",
            question: "Dweck 警告的'假成长型思维'是什么？",
            options: [
                "完全没有成长型思维",
                "口头声称成长型思维但行为和态度未真正改变",
                "只在工作中有成长型思维",
                "认为成长型思维不重要"
            ],
            answer: 1,
            rationale: "Dweck 警告'false growth mindset'——口头上声称但行为未变：'The path to a growth mindset is a journey, not a proclamation.'"
        },
        {
            id: "tm-1-3-q7",
            question: "任务相关成熟度(TRM)的核心观点是什么？",
            options: [
                "所有员工应该用相同方式管理",
                "没有好或坏的管理风格，只有有效和无效之分，应根据 TRM 调整",
                "高绩效者不需要任何管理",
                "低绩效者应该被立即淘汰"
            ],
            answer: 1,
            rationale: "Grove 提出没有'好'或'坏'的管理风格，只有有效和无效之分——应根据下属的任务相关成熟度调整管理方式。"
        },
        {
            id: "tm-1-3-q8",
            question: "研究显示固定型思维者在审视错误时大脑有什么表现？",
            options: [
                "大脑高度活跃",
                "大脑没有活动，而成长型思维者大脑显示处理活动",
                "与成长型思维者完全相同",
                "大脑活动比成长型思维者更多"
            ],
            answer: 1,
            rationale: "研究显示固定型思维者在审视错误时'showed no brain activity'，而成长型思维者'showed processing activity'——固定型思维可能从生理上阻止学习。"
        },
        {
            id: "tm-1-3-q9",
            question: "高杠杆活动的定义特征不包括？",
            options: [
                "影响很多人",
                "短期行动对一个人产生长期影响",
                "必须由管理者亲自完成所有细节",
                "关键信息影响大群体的工作"
            ],
            answer: 2,
            rationale: "Grove 定义高杠杆活动是：a) 影响很多人；b) 短期行动长期影响一个人；c) 关键信息影响大群体——不要求亲自完成所有细节。"
        },
        {
            id: "tm-1-3-q10",
            question: "Dweck 对成长型思维与努力的关系说明是什么？",
            options: [
                "成长型思维就等于努力",
                "成长型思维不需要努力",
                "成长型思维不只是努力，还需要新策略尝试和他人反馈",
                "努力是成长型思维的唯一要素"
            ],
            answer: 2,
            rationale: "Dweck 澄清：'A growth mindset isn't just about effort'——需要配合新策略尝试和他人反馈，单纯努力不足以确保成长。"
        },
        {
            id: "tm-1-3-q11",
            question: "Grove 认为 1:1 会议的核心目的是什么？",
            options: [
                "主要用于绩效评估",
                "帮助管理者增加整体产出(increase leverage)",
                "仅用于处理员工投诉",
                "展示管理者的权威"
            ],
            answer: 1,
            rationale: "Grove 指出 1:1 的目的是'help you increase your overall output'——通过直接下属获得最大杠杆，提高 ROI。"
        },
        {
            id: "tm-1-3-q12",
            question: "成长型思维的核心特征是什么？",
            options: [
                "追求认可和证明自己的智力",
                "避免挑战以保护自我形象",
                "创造学习热情而非追求认可",
                "相信天赋决定一切"
            ],
            answer: 2,
            rationale: "Dweck 指出成长型思维'creates a passion for learning rather than a hunger for approval'——核心是学习热情而非追求认可。"
        }
    ]
}
