import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "tm-3-1": {
        lessonId: "tm-3-1",
        background: [
            "【管理者产出公式】Andy Grove 在《High Output Management》中提出核心公式：'A manager's output = the output of their organization + the output of the neighboring organizations under their influence'——管理者的价值不在于个人贡献，而在于团队和影响力范围内的整体产出。",
            "【杠杆率概念】高杠杆活动是指能产生不成比例高产出的活动。Grove 强调应专注于：a) 同时影响很多人；b) 短期行动产生长期行为改变；c) 关键信息影响大群体的工作。杠杆是管理者最重要的思维工具。",
            "【培训是最高杠杆】Grove 指出：'Training is the highest leverage activity a manager can do'——如果管理者花 12 小时准备培训，让 10 名团队成员的年度产出提升 1%，结果是 200 小时的产出提升（每人年工作约 2000 小时），这是 17:1 的回报率。",
            "【避免零食型工作】Will Larson 在《Work on What Matters》中警告'Snacking'陷阱——那些简单、低影响但感觉有成就感的工作：'you're unlikely to learn much from doing them, others are likely equally capable'。这些工作浪费了你独特贡献的机会。",
            "【贡献思维】Peter Drucker 在《The Effective Executive》中强调：与其问'我必须做什么工作？'，不如问'对我期望的结果是什么？'——这将努力从活动导向转变为结果导向，是高效管理者的核心思维转变。"
        ],
        keyDifficulties: [
            "【负杠杆的危害】Grove 警告'waffling'(犹豫不决)是高负杠杆行为：'a manager puts off a decision...no green light is a red light, and work can stop for a whole organization'——推迟决定等于否定决定，导致整个组织工作停滞。",
            "【表演型工作陷阱】Larson 指出'Preening'——低影响但高可见度的工作。许多公司'conflate high-visibility and high-impact'，创造虚假的成功信号，消耗真正贡献的精力。区分可见度和影响力是关键能力。",
            "【追逐幽灵陷阱】新管理者常基于过去经验而非当前现实投入大量精力，'misjudge the familiar as the essential'——实施昨天问题的解决方案。需要持续评估当前环境的真实需求。",
            "【设定后验性困难】Drucker 指出设定优先级不难，难的是设定'posteriorities'——决定什么不做。'Every posteriority is somebody else's top priority'——拒绝做某事总会让某些人不满意，但不设后验性意味着什么都做不好。",
            "【时间碎片化】Drucker 观察到高管的时间很少在自己控制下，'small chunks are of no value at all'——碎片化时间无法完成重要工作。必须有意识地整合可支配时间成大块。"
        ],
        handsOnPath: [
            "记录一周的时间日志，分类为：高杠杆活动（培训、方向设定、障碍移除）、低杠杆活动（可委托的执行工作）、零食型工作（简单但低价值）。计算各类占比。",
            "识别你过去一个月推迟的三个决定，分析推迟原因和对团队的影响。为每个决定设定一个截止日期，强制自己在信息不完整时做决定。",
            "审视你的日历，找出最近一次'表演型工作'——高可见度但低影响的活动。评估是否可以减少或拒绝类似活动。",
            "使用 Drucker 的方法：列出你当前的所有优先事项，然后强制自己设定三个'后验性'——明确宣布暂时不做的事情，并通知相关方。",
            "找出一个只有你能做的独特贡献领域——Larson 称之为'work that simply won't happen if you don't do it'。评估你在这个领域投入的时间是否足够。"
        ],
        selfCheck: [
            "你能说出上周最高杠杆的三个活动吗？它们在你时间中占比多少？",
            "你最近推迟了哪些决定？推迟的真正原因是需要更多信息，还是逃避困难对话？",
            "你的可见度活动（会议、演讲、邮件回复）与实际影响力活动的比例是多少？",
            "你有明确的'不做清单'吗？团队是否知道你的优先级和后验性？",
            "如果你消失一周，团队中有多少工作会完全停滞？这反映了什么问题？"
        ],
        extensions: [
            "深入阅读《High Output Management》关于杠杆和产出的章节，理解 Grove 的完整管理框架。",
            "研究艾森豪威尔矩阵(Eisenhower Matrix)——紧急/重要四象限，作为日常优先级工具。",
            "探索'时间盒'(Timeboxing)技术——Drucker 推荐的时间整合方法，确保大块不被打断的工作时间。",
            "了解 Pareto 原则(80/20 法则)在管理中的应用——识别产生 80% 价值的 20% 活动。"
        ],
        sourceUrls: [
            "https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884",
            "https://www.amazon.com/Effective-Executive-Definitive-Harperbusiness-Essentials/dp/0060833459",
            "https://lethain.com/work-on-what-matters/"
        ]
    },
    "tm-3-2": {
        lessonId: "tm-3-2",
        background: [
            "【两种时间表】Paul Graham 在《Maker's Schedule, Manager's Schedule》中区分两种截然不同的时间表：管理者时间表以小时为单位切分，会议可以安排在任何空闲时段；而创造者时间表需要至少半天的完整块来进行深度工作。",
            "【会议对创造者的毁灭性影响】Graham 指出：'A single meeting can blow a whole afternoon, by breaking it into two pieces each too small to do anything hard in'——一个会议可以毁掉整个下午，因为它把时间分成两段都太短而无法做困难的事情。",
            "【心理预期效应】创造者知道下午会被打断时，上午开始雄心勃勃的项目的动力会下降。Graham 说：'A small decrease in morale is enough to kill them off'——士气的微小下降足以扼杀雄心勃勃的项目。",
            "【Amazon 禁止 PPT】Jeff Bezos 在 2004 年禁止了 PowerPoint，要求使用'well structured, narrative text'。他解释：'The narrative structure of a good memo forces better thought and better understanding of what's more important than what, and how things are related'——叙事结构强迫更好的思考。",
            "【静默会议】Amazon 的高管会议以 30 分钟静默阅读 6 页备忘录开始。Bezos 说：'The other problem with PowerPoint is it's easy for the author and hard for the audience. And a memo is the opposite'——备忘录对作者难、对听众易，这促进了更深入的准备。"
        ],
        keyDifficulties: [
            "【理解成本】Graham 请求管理者：'All we ask from those on the manager's schedule is that they understand the cost'——理解对创造者来说，投机性会议的成本是灾难性的。管理者需要对安排会议保持敏感。",
            "【6 页备忘录的时间投入】Bezos 在 2017 年致股东信中指出：'a high-standards, six-page memo can be written in one or two days or even a few hours, when really it might take a week or more'——许多人低估了准备高质量备忘录的时间。",
            "【叙事暴露弱点】Bezos 说：'When you have to write in complete sentences with narrative structure, it's really hard to hide sloppy thinking'——PPT 允许模糊思考，而叙事无处可藏。这对会议组织者提出更高要求。",
            "【现代会议标准】Al Pittampalli 在《Read This Before Our Next Meeting》中提出：会议应该'only to support a decision that has already been made'——会议不是用来做决定的，而是用来支持已经做出的决定。",
            "【平均会议时间浪费】Pittampalli 研究显示：'The average office worker spends eleven hours in meetings every week'——但这些时间并没有让我们更有生产力，传统会议'reduce efficiency, kill urgency, and breed compromise and complacency'。"
        ],
        handsOnPath: [
            "审视你团队中工程师的日历，识别有多少'创造者时间'被会议打断。考虑设立'无会议日'或'无会议上午'。",
            "对你下周的每个会议问三个问题：1) 这个会议必须开吗？2) 可以缩短吗？3) 必须邀请这么多人吗？尝试砍掉或缩短至少 25% 的会议。",
            "尝试 Amazon 风格：为下次重要会议准备一份 1-2 页的叙事备忘录替代 PPT，在会议开始时给参与者 10 分钟静默阅读时间。",
            "实践 Graham 的'办公时间'模式：将所有 1:1 和可选会议集中到一天的特定时段，保护其他时间块。",
            "与团队讨论并建立'会议契约'：包括准时开始/结束、必须有议程、必须有会后行动项等基本规则。"
        ],
        selfCheck: [
            "你团队的工程师每天有多少连续不被打断的时间？这个时间足够做深度工作吗？",
            "你上次取消一个不必要的会议是什么时候？你有拒绝低价值会议的习惯吗？",
            "你的会议是否经常超时？会议结束时是否有明确的行动项和负责人？",
            "你尝试过静默会议或叙事备忘录吗？效果如何？",
            "如果要求所有会议都有书面议程，多少比例的会议会被取消？"
        ],
        extensions: [
            "阅读《Read This Before Our Next Meeting》了解 Modern Meeting Standard 的完整七项原则。",
            "研究 Cal Newport 的'深度工作'(Deep Work)概念——在无干扰状态下进行专注的职业活动。",
            "探索异步沟通工具(如 Loom、Notion)作为会议替代方案的可能性。",
            "了解 Basecamp 的'Shape Up'方法中关于无会议周期(Cooldown)的实践。"
        ],
        sourceUrls: [
            "http://www.paulgraham.com/makersschedule.html",
            "https://www.amazon.com/Read-This-Before-Our-Next/dp/1989603173",
            "https://writingcooperative.com/the-anatomy-of-an-amazon-6-pager-fc79f31a41c9"
        ]
    },
    "tm-3-3": {
        lessonId: "tm-3-3",
        background: [
            "【意图型领导力】David Marquet 在《Turn the Ship Around》中创造了'Intent-Based Leadership'——从'leader-follower'(领导者-追随者)模式转变为'leader-leader'(领导者-领导者)模式。他将 USS Santa Fe 从舰队最差的潜艇转变为最好的。",
            "【'我打算...'语言】Marquet 用'I intend to...'替代了'请求许可'。关键区别：'With intent, the default is action absent a veto; with permission the default is stasis absent approval'——意图默认是行动，权限默认是停滞。",
            "【两大支柱】有效授权需要两个支柱：Competence(能力——你能做对吗？)和 Clarity(清晰——这是正确的事情吗？)。没有这两者，授权就是冒险。培训增加技能，同时增加决策权。",
            "【移动权力到信息】Marquet 的核心原则：'Don't move information to authority; move authority to the information'——决策应该发生在信息所在的地方，而不是把信息层层上报给有权力的人。",
            "【授权的核心悖论】HBR 文章指出授权的核心悖论：领导者必须'become more essential and less involved'——更本质但更少参与。混淆参与和本质是常见错误：'being involved with being essential...just as being busy and being productive are not necessarily equal'。"
        ],
        keyDifficulties: [
            "【技能-意愿矩阵】Max Landsberg 的 Skill-Will Matrix 帮助确定授权级别：高技能高意愿——授权；高技能低意愿——激励；低技能高意愿——培养；低技能低意愿——指导。同一个人在不同任务上可能处于不同象限。",
            "【五级授权模型】Michael Hyatt 的五级授权：1) 做我说的；2) 研究后建议；3) 建议后行动；4) 行动后报告；5) 自主行动。根据下属成熟度选择合适级别，并随时间逐步提升。",
            "【授权三支柱】有效授权平衡三个要素：Authority(做决定的权力)、Responsibility(完成任务的责任)、Accountability(对结果负责)。三者必须一致，授权无责任会导致混乱，责任无权力会导致挫败。",
            "【微观管理的诱惑】Grove 警告'managerial meddling'是负杠杆行为——管理者用自己的知识和经验接管情况，而不是让下属自己解决。这削弱了下属的主动性和成长机会。",
            "【解放而非赋权】Marquet 区分'emancipation over empowerment'——真正的自主来自能力和清晰度，而不是领导者的许可。赋权意味着权力仍在领导者手中，解放意味着权力真正转移。"
        ],
        handsOnPath: [
            "列出你目前不愿授权的三项任务，使用 Skill-Will Matrix 分析每项任务的潜在接受者。识别授权的真正障碍是对方能力、你的信任还是你的控制欲。",
            "选择一项你经常直接决定的事务，改用'告诉我你打算...'的方式让下属先提出方案。观察这种语言转变如何改变对话动态。",
            "与每位直接下属讨论他们希望在哪些领域获得更多自主权，以及他们认为需要什么支持才能胜任。建立个人化的授权发展计划。",
            "实践'规定目标，不规定方法'——Marquet 的'Begin with the end in mind'原则。在下次项目中只说明期望结果，让团队自己决定如何实现。",
            "建立一个'授权日志'，记录你每次授权或未授权的决定，以及结果。一个月后回顾，识别可以进一步授权的模式。"
        ],
        selfCheck: [
            "如果你休假两周，有多少决定会完全停滞等你回来？这反映了什么问题？",
            "你的下属在做决定前会说'请求许可'还是'我打算...'？这反映了你的领导风格。",
            "你最近一次主动提升下属授权级别是什么时候？有系统性的发展路径吗？",
            "当下属的决定与你不同时，你的第一反应是纠正还是询问理由？",
            "你的团队成员在你不在时能做出的最大决定是什么金额/影响级别的？"
        ],
        extensions: [
            "深入阅读《Turn the Ship Around》，学习 Marquet 如何系统性地实施意图型领导力。",
            "研究'情境领导'(Situational Leadership)理论——Paul Hersey 和 Ken Blanchard 的经典框架，根据下属成熟度调整领导风格。",
            "探索 OKR 作为授权工具——设定目标但授权方法选择，是规模化授权的有效机制。",
            "了解'单向门 vs 双向门'决策框架——Bezos 提出的根据可逆性决定授权程度的方法。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Turn-Ship-Around-Turning-Followers/dp/1591846404",
            "https://www.manager-tools.com/2005/09/the-delegation-matrix",
            "https://hbr.org/2017/10/to-be-a-great-leader-you-have-to-learn-how-to-delegate-well"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "tm-3-1": [
        {
            id: "tm-3-1-q1",
            question: "Andy Grove 在《High Output Management》中提出的管理者产出公式是什么？",
            options: [
                "管理者产出 = 个人编码量 + 技术决策数量",
                "管理者产出 = 其组织的产出 + 其影响的相邻组织的产出",
                "管理者产出 = 会议次数 × 参与人数",
                "管理者产出 = 团队规模 × 平均绩效评分"
            ],
            answer: 1,
            rationale: "Grove 提出：'A manager's output = the output of their organization + the output of the neighboring organizations under their influence'——管理者的价值体现在团队和影响范围内的整体产出。"
        },
        {
            id: "tm-3-1-q2",
            question: "根据 Andy Grove 的观点，什么是管理者最高杠杆的活动？",
            options: [
                "参加高层会议",
                "亲自编写代码",
                "培训",
                "审批所有决策"
            ],
            answer: 2,
            rationale: "Grove 指出：'Training is the highest leverage activity a manager can do'——12 小时的培训准备可以产生 200 小时的产出提升，实现 17:1 的回报率。"
        },
        {
            id: "tm-3-1-q3",
            question: "Will Larson 在《Work on What Matters》中警告的'Snacking'陷阱是指什么？",
            options: [
                "花太多时间在茶歇和社交上",
                "做简单、低影响但感觉有成就感的工作",
                "过度关注团队成员的日常细节",
                "频繁检查电子邮件"
            ],
            answer: 1,
            rationale: "Larson 警告'Snacking'是指那些'unlikely to learn much from, others are likely equally capable'的工作——简单低价值但让人感觉有成就感，浪费了独特贡献的机会。"
        },
        {
            id: "tm-3-1-q4",
            question: "Andy Grove 认为什么是高负杠杆行为的典型例子？",
            options: [
                "快速做出决定",
                "犹豫不决(waffling)——推迟决定",
                "授权给下属",
                "定期进行培训"
            ],
            answer: 1,
            rationale: "Grove 指出'waffling'是高负杠杆行为：'a manager puts off a decision...no green light is a red light, and work can stop for a whole organization'——推迟决定等于否定决定。"
        },
        {
            id: "tm-3-1-q5",
            question: "Peter Drucker 认为有效管理者应该问的核心问题是什么？",
            options: [
                "我必须做什么工作？",
                "我的团队有多少人？",
                "对我期望的结果是什么？",
                "我的预算是多少？"
            ],
            answer: 2,
            rationale: "Drucker 强调应该问'What results are expected of me?'而非'What work must I do?'——这将努力从活动导向转变为结果导向。"
        },
        {
            id: "tm-3-1-q6",
            question: "Will Larson 描述的'Preening'陷阱的特征是什么？",
            options: [
                "高影响力、低可见度的工作",
                "低影响力、高可见度的工作",
                "高影响力、高可见度的工作",
                "低影响力、低可见度的工作"
            ],
            answer: 1,
            rationale: "Larson 指出'Preening'是低影响但高可见度的工作，许多公司'conflate high-visibility and high-impact'，创造虚假的成功信号。"
        },
        {
            id: "tm-3-1-q7",
            question: "Drucker 认为设定优先级最难的部分是什么？",
            options: [
                "识别最重要的任务",
                "设定'后验性'(posteriorities)——决定什么不做",
                "说服团队接受优先级",
                "平衡短期和长期目标"
            ],
            answer: 1,
            rationale: "Drucker 指出难点不在设定优先级，而在'posteriorities'——决定什么不做。'Every posteriority is somebody else's top priority'——拒绝总会让人不满。"
        },
        {
            id: "tm-3-1-q8",
            question: "关于时间管理，Drucker 关于碎片时间的观点是什么？",
            options: [
                "碎片时间可以用来处理邮件",
                "小块时间完全没有价值",
                "碎片时间最适合做简单任务",
                "应该把碎片时间分配给下属"
            ],
            answer: 1,
            rationale: "Drucker 观察到'small chunks are of no value at all'——碎片化时间无法完成重要工作，必须有意识地整合可支配时间成大块。"
        },
        {
            id: "tm-3-1-q9",
            question: "Will Larson 建议管理者应该专注于什么类型的工作？",
            options: [
                "任何高可见度的工作",
                "如果你不做就不会发生的工作",
                "团队中其他人都能做的工作",
                "最容易完成的工作"
            ],
            answer: 1,
            rationale: "Larson 建议专注于'work that simply won't happen if you don't do it'——这是你独特贡献的领域，其他工作可以委托。"
        },
        {
            id: "tm-3-1-q10",
            question: "Grove 描述的'managerial meddling'为什么是负杠杆行为？",
            options: [
                "因为它消耗太多管理者时间",
                "因为它削弱下属的主动性和成长机会",
                "因为它导致决策过慢",
                "因为它增加了沟通成本"
            ],
            answer: 1,
            rationale: "Grove 警告'managerial meddling'——管理者用自己的知识和经验接管情况，而不是让下属自己解决，这削弱了下属的主动性和成长机会。"
        },
        {
            id: "tm-3-1-q11",
            question: "关于提高管理生产力，Grove 提出的三种方式不包括？",
            options: [
                "提高活动执行速度",
                "增加与各项活动相关的杠杆",
                "增加工作时间",
                "将活动组合从低杠杆转向高杠杆"
            ],
            answer: 2,
            rationale: "Grove 提出三种方式：(1)提高活动执行速度；(2)增加活动的杠杆率；(3)将活动组合从低杠杆转向高杠杆活动——不包括单纯增加工作时间。"
        },
        {
            id: "tm-3-1-q12",
            question: "Larson 警告的'Chasing Ghosts'陷阱是指什么？",
            options: [
                "追求不存在的技术解决方案",
                "基于过去经验而非当前现实投入精力",
                "试图解决团队中的人际冲突",
                "花太多时间在战略规划上"
            ],
            answer: 1,
            rationale: "Larson 警告'Chasing Ghosts'——基于过去经验投入大量精力，'misjudge the familiar as the essential'——实施昨天问题的解决方案，忽视当前真实需求。"
        }
    ],
    "tm-3-2": [
        {
            id: "tm-3-2-q1",
            question: "Paul Graham 区分的两种时间表是什么？",
            options: [
                "工作时间表和休息时间表",
                "管理者时间表和创造者时间表",
                "早班时间表和晚班时间表",
                "固定时间表和弹性时间表"
            ],
            answer: 1,
            rationale: "Graham 区分'Manager's Schedule'(以小时为单位切分)和'Maker's Schedule'(需要至少半天的完整块进行深度工作)这两种截然不同的时间表。"
        },
        {
            id: "tm-3-2-q2",
            question: "根据 Graham 的观点，一个会议对创造者的影响是什么？",
            options: [
                "可以提高创造力和灵感",
                "可以毁掉整个下午，因为把时间分成两段都太短做困难的事",
                "对创造者没有明显影响",
                "只影响会议期间的时间"
            ],
            answer: 1,
            rationale: "Graham 指出：'A single meeting can blow a whole afternoon, by breaking it into two pieces each too small to do anything hard in'——一个会议可以毁掉整个下午。"
        },
        {
            id: "tm-3-2-q3",
            question: "Jeff Bezos 在 2004 年做出什么决定来改善 Amazon 的会议质量？",
            options: [
                "限制所有会议不超过 30 分钟",
                "禁止 PowerPoint，要求使用叙事备忘录",
                "要求所有会议必须站着开",
                "禁止所有超过 5 人的会议"
            ],
            answer: 1,
            rationale: "Bezos 在 2004 年禁止了 PowerPoint，要求使用'well structured, narrative text'，因为'the narrative structure of a good memo forces better thought'。"
        },
        {
            id: "tm-3-2-q4",
            question: "Bezos 认为 PowerPoint 的主要问题是什么？",
            options: [
                "太难制作",
                "对作者容易、对听众困难",
                "需要太多技术设备",
                "不够直观"
            ],
            answer: 1,
            rationale: "Bezos 说：'The other problem with PowerPoint is it's easy for the author and hard for the audience. And a memo is the opposite'——备忘录对作者难、对听众易。"
        },
        {
            id: "tm-3-2-q5",
            question: "Amazon 的高管会议如何开始？",
            options: [
                "每人做 5 分钟自我介绍",
                "30 分钟静默阅读 6 页备忘录",
                "观看预录的视频演示",
                "进行团队破冰活动"
            ],
            answer: 1,
            rationale: "Amazon 的高管会议是'静默会议'，开始时所有人静默阅读备忘录并做笔记约 30 分钟，然后才开始讨论。"
        },
        {
            id: "tm-3-2-q6",
            question: "Bezos 认为写一份高质量的 6 页备忘录需要多长时间？",
            options: [
                "几个小时",
                "一到两天",
                "一周或更长",
                "一个月"
            ],
            answer: 2,
            rationale: "Bezos 在 2017 年致股东信中指出：许多人'mistakenly believe a high-standards, six-page memo can be written in one or two days or even a few hours, when really it might take a week or more'。"
        },
        {
            id: "tm-3-2-q7",
            question: "Graham 请求管理者理解什么？",
            options: [
                "创造者需要更高的薪水",
                "投机性会议对创造者的成本是灾难性的",
                "创造者不喜欢沟通",
                "所有会议都应该取消"
            ],
            answer: 1,
            rationale: "Graham 请求：'All we ask from those on the manager's schedule is that they understand the cost'——理解对创造者来说，投机性会议的成本是灾难性的。"
        },
        {
            id: "tm-3-2-q8",
            question: "Al Pittampalli 在《Read This Before Our Next Meeting》中认为会议应该用于什么目的？",
            options: [
                "头脑风暴和创意生成",
                "支持已经做出的决定",
                "社交和团队建设",
                "分享信息和状态更新"
            ],
            answer: 1,
            rationale: "Pittampalli 提出会议应该'only to support a decision that has already been made'——会议不是用来做决定的，而是用来支持已经做出的决定。"
        },
        {
            id: "tm-3-2-q9",
            question: "根据 Pittampalli 的研究，办公室员工平均每周花多少时间在会议上？",
            options: [
                "3 小时",
                "7 小时",
                "11 小时",
                "20 小时"
            ],
            answer: 2,
            rationale: "Pittampalli 研究显示：'The average office worker spends eleven hours in meetings every week'——但这些时间并没有让我们更有生产力。"
        },
        {
            id: "tm-3-2-q10",
            question: "Bezos 认为叙事结构强迫什么？",
            options: [
                "更快的决策",
                "更好的思考和理解事物的重要性及关联",
                "更多的创意",
                "更短的文档"
            ],
            answer: 1,
            rationale: "Bezos 解释：'The narrative structure of a good memo forces better thought and better understanding of what's more important than what, and how things are related'——叙事结构强迫更好的思考。"
        },
        {
            id: "tm-3-2-q11",
            question: "Graham 建议的'办公时间'模式是什么？",
            options: [
                "全天开放办公室随时可以被打断",
                "将所有会议集中到一天的特定时段，保护其他时间块",
                "每天只工作 4 小时",
                "取消所有面对面会议"
            ],
            answer: 1,
            rationale: "Graham 建议'Office Hours'模式：将所有会议集中到一天结束时，防止中途打断，保护创造者的深度工作时间。"
        },
        {
            id: "tm-3-2-q12",
            question: "Pittampalli 认为传统会议的主要问题是什么？",
            options: [
                "会议室不够",
                "减少效率、扼杀紧迫感、滋生妥协和自满",
                "技术设备不完善",
                "参与者太少"
            ],
            answer: 1,
            rationale: "Pittampalli 指出传统会议'reduce efficiency, kill urgency, and breed compromise and complacency'——减少效率、扼杀紧迫感、滋生妥协和自满。"
        }
    ],
    "tm-3-3": [
        {
            id: "tm-3-3-q1",
            question: "David Marquet 在《Turn the Ship Around》中提出的领导力模式转变是什么？",
            options: [
                "从远程领导到现场领导",
                "从 leader-follower 到 leader-leader 模式",
                "从民主领导到专制领导",
                "从个人领导到委员会领导"
            ],
            answer: 1,
            rationale: "Marquet 创造了从'leader-follower'(领导者-追随者)到'leader-leader'(领导者-领导者)模式的转变，让每个人都成为领导者。"
        },
        {
            id: "tm-3-3-q2",
            question: "Marquet 用什么替代了传统的'请求许可'方式？",
            options: [
                "发送电子邮件",
                "'我打算...'(I intend to...) 语言",
                "召开委员会会议",
                "填写正式申请表"
            ],
            answer: 1,
            rationale: "Marquet 用'I intend to...'替代'请求许可'。区别在于：'With intent, the default is action absent a veto; with permission the default is stasis absent approval'。"
        },
        {
            id: "tm-3-3-q3",
            question: "Marquet 认为有效授权的两大支柱是什么？",
            options: [
                "速度和效率",
                "能力(Competence)和清晰度(Clarity)",
                "权力和资源",
                "信任和沟通"
            ],
            answer: 1,
            rationale: "Marquet 识别两大支柱：Competence(能力——你能做对吗？)和 Clarity(清晰——这是正确的事情吗？)。没有这两者，授权就是冒险。"
        },
        {
            id: "tm-3-3-q4",
            question: "HBR 文章指出的授权核心悖论是什么？",
            options: [
                "授权越多工作越多",
                "领导者必须更本质但更少参与",
                "授权会失去控制",
                "下属不愿意接受授权"
            ],
            answer: 1,
            rationale: "HBR 指出授权的核心悖论：领导者必须'become more essential and less involved'——更本质但更少参与，避免混淆参与和本质。"
        },
        {
            id: "tm-3-3-q5",
            question: "Skill-Will Matrix 中，高技能高意愿的人应该如何处理？",
            options: [
                "密切监督",
                "授权和赋能",
                "提供大量培训",
                "降低工作难度"
            ],
            answer: 1,
            rationale: "Skill-Will Matrix 中，高技能高意愿的人是'Delegate and Empower'——授权和赋能，他们是承担自主任务的理想人选。"
        },
        {
            id: "tm-3-3-q6",
            question: "Marquet 的核心原则'移动权力到信息'是什么意思？",
            options: [
                "管理者应该获取更多信息",
                "决策应该发生在信息所在的地方，而不是层层上报",
                "信息应该公开透明",
                "使用更先进的信息系统"
            ],
            answer: 1,
            rationale: "Marquet 的原则是：'Don't move information to authority; move authority to the information'——决策应该发生在信息所在的地方，而不是把信息层层上报。"
        },
        {
            id: "tm-3-3-q7",
            question: "有效授权必须平衡的三个要素是什么？",
            options: [
                "速度、质量、成本",
                "权力(Authority)、责任(Responsibility)、问责(Accountability)",
                "计划、执行、评估",
                "人员、流程、工具"
            ],
            answer: 1,
            rationale: "有效授权平衡三个要素：Authority(做决定的权力)、Responsibility(完成任务的责任)、Accountability(对结果负责)。三者必须一致。"
        },
        {
            id: "tm-3-3-q8",
            question: "Michael Hyatt 的五级授权模型中，最高级别是什么？",
            options: [
                "做我说的",
                "研究后建议",
                "行动后报告",
                "自主行动"
            ],
            answer: 3,
            rationale: "Hyatt 的五级授权：1)做我说的；2)研究后建议；3)建议后行动；4)行动后报告；5)自主行动。第五级是最高授权级别。"
        },
        {
            id: "tm-3-3-q9",
            question: "Marquet 区分'解放'(emancipation)和'赋权'(empowerment)的关键区别是什么？",
            options: [
                "解放更正式，赋权更非正式",
                "赋权意味着权力仍在领导者手中，解放意味着权力真正转移",
                "解放只适用于高层，赋权适用于所有层级",
                "没有实质区别"
            ],
            answer: 1,
            rationale: "Marquet 区分：'Emancipation over empowerment'——赋权意味着权力仍在领导者手中可以收回，解放意味着权力真正转移，真正的自主来自能力和清晰度。"
        },
        {
            id: "tm-3-3-q10",
            question: "Grove 警告的'managerial meddling'会导致什么问题？",
            options: [
                "增加管理成本",
                "削弱下属的主动性和成长机会",
                "降低决策速度",
                "增加沟通成本"
            ],
            answer: 1,
            rationale: "Grove 警告'managerial meddling'——管理者用自己的知识接管情况而不是让下属解决——这是负杠杆行为，削弱了下属的主动性和成长机会。"
        },
        {
            id: "tm-3-3-q11",
            question: "Marquet 的'Begin with the end in mind'原则强调什么？",
            options: [
                "先做计划再行动",
                "规定目标而不规定方法",
                "从结果倒推时间表",
                "先设定预算再开始项目"
            ],
            answer: 1,
            rationale: "Marquet 的原则强调：'Specify goals, not methods'——规定目标而不规定方法，让人们专注于目的而非流程僵化，这是授权的关键。"
        },
        {
            id: "tm-3-3-q12",
            question: "Skill-Will Matrix 中，低技能高意愿的人应该如何处理？",
            options: [
                "完全授权",
                "发展和教练(Develop and Coach)",
                "密切监督和指导",
                "提供激励和支持"
            ],
            answer: 1,
            rationale: "Skill-Will Matrix 中，低技能高意愿的人处于'Develop and Coach'象限——他们渴望贡献但缺乏技能，领导者应该利用这个机会进行培养和教练。"
        }
    ]
}
