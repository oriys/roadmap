import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "tm-6-1": {
        lessonId: "tm-6-1",
        background: [
            "【心理安全感定义】Amy Edmondson 定义心理安全感为'the belief that one will not be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes'——团队成员相信提出想法、问题、担忧或错误时不会受到惩罚或羞辱。",
            "【Project Aristotle 发现】Google 对 180+ 团队进行两年研究后发现：'what really mattered was less about who is on the team, and more about how the team worked together'——关键不是团队里有谁，而是团队如何协作。心理安全感是五个关键因素中最重要的。",
            "【五大团队效能因素】Google 识别的五大因素：Psychological Safety（心理安全感）、Dependability（可靠性）、Structure and Clarity（结构清晰）、Meaning（意义感）、Impact（影响力）。心理安全感是基础，'by far the most important'。",
            "【量化业务影响】Google 研究显示心理安全感高的销售团队超额完成目标 17%，而心理安全感低的团队低于目标 19%——差距达 36%。团队采用新规范后，心理安全感评分提升 6%，结构清晰度提升 10%。",
            "【领导者的关键作用】Edmondson 指出心理安全感'is not a personality trait'而是'a feature of the workplace'，是领导者行为的结果。三个核心领导行为：将工作定义为学习问题、承认自己的可犯错性、示范好奇心和提问。"
        ],
        keyDifficulties: [
            "【不等于舒适】Edmondson 强调心理安全感'is not the same as group cohesiveness'——不是群体凝聚力，也不是'a careless sense of permissiveness'——不是放任。恰恰相反，它是创造可以进行建设性冲突的环境。",
            "【沉默文化的代价】Edmondson 警告'low levels of psychological safety can create a culture of silence'——沉默文化会导致创新和学习受阻，甚至产生'Cassandra culture'——警告被忽视的文化。",
            "【信任建立缓慢】心理安全感需要长期积累，但可以在一瞬间被破坏。一次公开批评或羞辱可能需要数月才能修复。管理者如何回应错误至关重要。",
            "【平衡安全与问责】HBR 研究指出需要在'安全'和'问责'之间找平衡。心理安全感不是降低标准的借口，高绩效团队同时具备高心理安全感和高标准。",
            "【远程团队挑战】远程团队更难建立心理安全感，非语言信号缺失使沟通更容易被误解。需要更刻意的设计来传递温暖和开放。"
        ],
        handsOnPath: [
            "在团队会议中实践领导者示范脆弱性：分享一个你最近犯的错误和学到的教训，观察团队反应。",
            "当有人报告问题时，先说'谢谢你告诉我'——明确表达对报告问题行为的认可，然后再讨论解决方案。",
            "使用 Google 的团队效能评估问题，如'If I make a mistake on our team, it is not held against me'来测量团队心理安全感。",
            "建立无责备事后复盘（Blameless Postmortem）机制：关注'系统哪里出了问题'而非'谁应该负责'。",
            "实践'Just Like Me'反思：认识到同事和你一样有信念、希望、脆弱性、家庭、对尊重的渴望——自然引发信任。"
        ],
        selfCheck: [
            "团队成员是否敢于在会议中表达不同意见？最近一次有人公开质疑你是什么时候？",
            "当有人犯错时，你的第一反应是追问责任还是探索系统问题？",
            "团队有多久没有人提出'愚蠢'的问题了？这可能是心理安全感不足的信号。",
            "你是否在团队面前展示过自己的脆弱性和可犯错性？",
            "远程成员是否感到被包容？他们的声音是否在会议中被听到？"
        ],
        extensions: [
            "深入阅读 Amy Edmondson 的《The Fearless Organization》，理解心理安全感的完整理论和实践。",
            "研究 Google re:Work 的团队效能指南，学习如何系统性评估和改进团队动态。",
            "了解 Just Culture 在组织中的应用——平衡问责与学习的框架。",
            "学习无责备事后复盘（Blameless Postmortem）的具体实施方法，参考 Etsy 的实践。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Fearless-Organization-Psychological-Workplace-Innovation/dp/1119477247",
            "https://rework.withgoogle.com/guides/understanding-team-effectiveness/steps/introduction/",
            "https://hbr.org/2017/08/high-performing-teams-need-psychological-safety-heres-how-to-create-it"
        ]
    },
    "tm-6-2": {
        lessonId: "tm-6-2",
        background: [
            "【The Culture Code 三大技能】Daniel Coyle 在《The Culture Code》中识别了高绩效文化的三大核心技能：Build Safety（建立安全感）、Share Vulnerability（分享脆弱性）、Establish Purpose（建立目标感）。这些技能让多元群体能够'function with a single mind'。",
            "【安全感的归属信号】Coyle 指出人类通过'belonging cues'——归属信号来建立安全连接，包括眼神接触、肢体语言、语调等。安全感是'interconnection'的基石，促进直接沟通、诚实反馈和超越职责的付出。",
            "【脆弱性循环】Coyle 发现'the key to building trusting cooperation in groups is sharing vulnerability'——建立信任协作的关键是分享脆弱性。当一个人对脆弱性信号做出积极回应时，会形成脆弱性循环，鼓励他人也放下防备。",
            "【GitLab 远程团队实践】GitLab 创始人 Sid Sijbrandij 强调：'When working remote it is important to formalize informal communication'——远程工作时必须正式设计非正式沟通。他们用 Coffee Chats、团队社交电话、异步连接点等方式维护关系。",
            "【Atlassian 团队仪式】Atlassian 的 Team Playbook 研究显示，定期运行 Plays 可提升团队绩效 15-20%。有清晰目标的团队'4.5x more likely to collaborate effectively'——协作效率是其他团队的 4.5 倍。"
        ],
        keyDifficulties: [
            "【高绩效团队的误解】Coyle 指出'One misconception about highly successful cultures is that they are happy, lighthearted places. This is mostly not the case'——成功文化不是轻松愉快的，而是'oriented around solving hard problems together'。",
            "【强文化分享弱点】Coyle 观察'Strong cultures don't hide their weaknesses; they make a habit of sharing them, so they can improve together'——强大的文化不隐藏弱点，而是习惯性分享以共同改进。",
            "【分布式团队挑战】GitLab 认识到远程团队建立凝聚力需要'more deliberate design and investment'——需要更刻意的设计和投入。他们通过全球披萨派对、虚拟寻宝等活动克服距离障碍。",
            "【尊重个人边界】GitLab 承认'informal communication preferences vary'——非正式沟通偏好因人而异。需要透明沟通个人的互动舒适度，不强迫内向者参加所有社交活动。",
            "【时间投资误解】业务压力下，团队建设活动往往被视为'浪费时间'而被牺牲。Atlassian 研究显示这是投资而非浪费——持续的规划和追踪实践可释放 13% 更多时间用于有意义的工作。"
        ],
        handsOnPath: [
            "设计或改进一个团队仪式：每周开会时分享'本周冒的一个风险'——Google 研究显示这能提升心理安全感 6%。",
            "参考 GitLab 实践：安排 Coffee Chats——新员工入职时至少安排 5 次，所有员工每周花几小时进行 25 分钟的跨部门对话。",
            "实践 Coyle 的脆弱性分享：在团队回顾中坦诚讨论失败和问题，而非只庆祝成功。'The best teams intentionally create awkward, painful interactions to discuss hard problems.'",
            "运行 Atlassian 的 Working Agreements Play：建立团队共同的工作规范，明确沟通方式、决策流程、会议规则。",
            "对远程成员特别关注：使用'How are you?'作为会议开场，欢迎宠物/家人出镜，自由使用表情符号传递温暖。"
        ],
        selfCheck: [
            "团队成员是否认同'我们是谁'？你们有清晰的共同使命和价值观吗？",
            "团队有哪些仪式正在发挥作用？哪些已经流于形式？",
            "你的团队目前处于 Tuckman 的哪个阶段（Forming、Storming、Norming、Performing）？",
            "团队成员之间的非正式关系如何？是否了解彼此的背景和兴趣？",
            "远程成员是否感到被包含？他们的贡献是否被看到和认可？"
        ],
        extensions: [
            "深入阅读 Daniel Coyle 的《The Culture Code》，学习 Navy SEALs、Pixar、San Antonio Spurs 等高绩效团队的文化密码。",
            "研究 Patrick Lencioni 的《The Five Dysfunctions of a Team》——理解信任缺失、害怕冲突等团队功能障碍。",
            "探索 GitLab 的全远程手册，学习完全分布式团队的最佳实践。",
            "尝试 Atlassian Team Playbook 中的不同 Plays，如 User Manual、Retrospectives、Network of Teams。"
        ],
        sourceUrls: [
            "https://danielcoyle.com/the-culture-code/",
            "https://handbook.gitlab.com/handbook/company/culture/all-remote/informal-communication/",
            "https://www.atlassian.com/team-playbook"
        ]
    },
    "tm-6-3": {
        lessonId: "tm-6-3",
        background: [
            "【留存成本与价值】替换一位员工的成本是其年薪的 50-200%，包括招聘、培训和生产力损失。Gallup 研究显示'52% of exiting employees say their manager could have done something to prevent them from leaving—but no one ever asked'——超过一半的离职本可预防。",
            "【Stay Interview 的价值】Stay Interview 是与现有员工进行的留任对话，填补了年度评审和离职面谈之间的空白。它'fills the middle ground: a real-time, personal dialogue focused on why an employee continues to work'——实时、个人化地了解员工留任原因。",
            "【离职的真正原因】Gallup 研究表明员工离职的首要原因是与直接经理的关系：'People don't leave companies, they leave managers'——人们不是离开公司，而是离开经理。缺乏成长和发展机会是另一主要原因。",
            "【Exit Interview 最佳实践】Exit Interview 应由非直接经理进行，HBR 研究显示'second line managers receive more honest feedback'——隔级经理能获得更诚实的反馈。时机选择在提交辞职和离职日期之间的中间点。",
            "【Offboarding 知识转移】离职带来的知识流失可能'take new employees or other team members months or maybe years to re-acquire'——需要数月甚至数年才能重建。需要系统化的知识交接流程。"
        ],
        keyDifficulties: [
            "【预警信号识别】离职预警信号包括参与度下降、请假增加、避免长期承诺等，但容易被忽视。需要建立定期的敬业度检测机制，而非等到离职面谈才了解问题。",
            "【留与放的判断】不是每个人都应该被挽留：'needs to judge who is worth the extra effort, while not letting retention strategies become rewarding those who complain'——需要判断投入产出比，避免'会哭的孩子有糖吃'。",
            "【行动的关键性】Stay Interview 最重要的部分是行动：'Even a 15-minute check-in 30 days later can reinforce trust and momentum'——30 天后的 15 分钟跟进就能巩固信任。不采取行动会破坏信任。",
            "【Exit Interview 诚实度】员工在 Exit Interview 中可能因担心影响推荐信而不敢坦诚。需要提供多种参与方式，包括匿名调查或离职后延迟面谈，并明确承诺反馈不影响推荐。",
            "【被动离职的艰难】解雇员工是管理者最难的对话之一，需要'legal compliance, human dignity, team communication'——法律合规、人道尊重、团队沟通三者兼顾。处理不当会影响留任员工的心理安全感。"
        ],
        handsOnPath: [
            "选择一位你认为有离职风险的成员，进行一次诚恳的 Stay Interview：'是什么让你留在这里？''什么可能让你考虑离开？'",
            "确保每位团队成员都有明确的发展计划和下一步目标——缺乏发展机会是离职的主要原因之一。",
            "审视当前的离职交接流程：是否有系统化的知识文档要求？是否安排了足够的交接时间？是否有 mentor 陪伴接任者？",
            "建立定期的员工敬业度检测机制：季度脉搏调查或每月 1:1 中的固定问题，及时发现问题。",
            "设计 Exit Interview 问题清单，使用开放式问题如'什么因素最影响你的离职决定？''如果重来，我们可以做什么不同？'"
        ],
        selfCheck: [
            "你知道每位团队成员留在这里的原因吗？你最近一次问他们这个问题是什么时候？",
            "过去一年有多少人离职？你是否分析过离职原因的模式？",
            "团队成员是否有清晰的职业发展路径？他们是否看得到在公司的未来？",
            "你能识别出哪些成员可能有离职风险吗？你有预警系统吗？",
            "最近一次离职的知识交接做得如何？接任者是否顺利接手？"
        ],
        extensions: [
            "阅读《Love 'Em or Lose 'Em》深入了解员工留存的 26 种策略。",
            "研究员工敬业度调查的设计和实施，包括 Gallup Q12 等成熟工具。",
            "了解校友网络（Alumni Network）的价值和建设——离职员工可能成为推荐来源、客户或未来回流人才。",
            "学习如何进行艰难的解雇对话，包括准备、执行、后续沟通的完整流程。"
        ],
        sourceUrls: [
            "https://www.gallup.com/workplace/231593/why-employees-quit-jobs.aspx",
            "https://nectarhr.com/blog/exit-interview",
            "https://www.aihr.com/blog/offboarding-checklist/"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "tm-6-1": [
        {
            id: "tm-6-1-q1",
            question: "Amy Edmondson 如何定义心理安全感？",
            options: [
                "让每个人都感到舒适的环境",
                "相信提出想法、问题或错误时不会受到惩罚或羞辱",
                "避免所有冲突的团队氛围",
                "高绩效团队的自然结果"
            ],
            answer: 1,
            rationale: "Edmondson 定义心理安全感为'the belief that one will not be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes'。"
        },
        {
            id: "tm-6-1-q2",
            question: "Google Project Aristotle 研究发现什么是高绩效团队最重要的因素？",
            options: [
                "团队成员的智力水平",
                "心理安全感",
                "团队规模",
                "技术专业度"
            ],
            answer: 1,
            rationale: "Google 发现心理安全感是五个关键因素中'by far the most important'——最重要的因素。"
        },
        {
            id: "tm-6-1-q3",
            question: "Google 研究显示心理安全感高的销售团队与低的团队业绩差距是多少？",
            options: [
                "10%",
                "20%",
                "36%",
                "50%"
            ],
            answer: 2,
            rationale: "心理安全感高的团队超额 17%，低的团队低于目标 19%——差距达 36%。"
        },
        {
            id: "tm-6-1-q4",
            question: "Edmondson 指出心理安全感不等于什么？",
            options: [
                "高绩效",
                "群体凝聚力或放任",
                "创新能力",
                "团队协作"
            ],
            answer: 1,
            rationale: "Edmondson 强调心理安全感'is not the same as group cohesiveness'也不是'a careless sense of permissiveness'。"
        },
        {
            id: "tm-6-1-q5",
            question: "Edmondson 识别的三个核心领导行为不包括哪个？",
            options: [
                "将工作定义为学习问题",
                "承认自己的可犯错性",
                "确保所有决策正确",
                "示范好奇心和提问"
            ],
            answer: 2,
            rationale: "三个核心行为是：将工作定义为学习问题、承认可犯错性、示范好奇心和提问——不是确保决策正确。"
        },
        {
            id: "tm-6-1-q6",
            question: "Project Aristotle 识别的五大团队效能因素不包括哪个？",
            options: [
                "心理安全感（Psychological Safety）",
                "技术能力（Technical Skills）",
                "结构清晰（Structure and Clarity）",
                "意义感（Meaning）"
            ],
            answer: 1,
            rationale: "五大因素是心理安全感、可靠性、结构清晰、意义感、影响力——不包括技术能力。"
        },
        {
            id: "tm-6-1-q7",
            question: "Edmondson 关于心理安全感来源的观点是什么？",
            options: [
                "是团队成员的人格特质",
                "是工作场所的特征，是领导者行为的结果",
                "是公司政策决定的",
                "是团队规模决定的"
            ],
            answer: 1,
            rationale: "Edmondson 指出心理安全感'is not a personality trait'而是'a feature of the workplace'，是领导者行为的结果。"
        },
        {
            id: "tm-6-1-q8",
            question: "低心理安全感可能导致什么问题？",
            options: [
                "过度创新",
                "沉默文化和'Cassandra culture'——警告被忽视的文化",
                "过度沟通",
                "决策太慢"
            ],
            answer: 1,
            rationale: "Edmondson 警告'low levels of psychological safety can create a culture of silence'甚至'Cassandra culture'。"
        },
        {
            id: "tm-6-1-q9",
            question: "当有人报告问题时，HBR 建议应该先说什么？",
            options: [
                "这是谁的责任？",
                "为什么会发生？",
                "谢谢你告诉我",
                "这太糟糕了"
            ],
            answer: 2,
            rationale: "先说'谢谢你告诉我'表达对报告问题行为的认可，然后再讨论解决方案。"
        },
        {
            id: "tm-6-1-q10",
            question: "Google 研究显示团队采用新规范后心理安全感评分提升了多少？",
            options: [
                "3%",
                "6%",
                "10%",
                "15%"
            ],
            answer: 1,
            rationale: "研究显示采用'每周分享一个冒的风险'等新规范后，心理安全感评分提升 6%，结构清晰度提升 10%。"
        },
        {
            id: "tm-6-1-q11",
            question: "'Just Like Me'反思练习的目的是什么？",
            options: [
                "寻找与自己相似的人",
                "认识到同事和你一样有信念、脆弱性和对尊重的渴望",
                "模仿他人的工作方式",
                "找出团队中的不同意见"
            ],
            answer: 1,
            rationale: "'Just Like Me'是认识到同事和你一样有信念、希望、脆弱性、家庭、对尊重的渴望——自然引发信任。"
        },
        {
            id: "tm-6-1-q12",
            question: "心理安全感与问责的关系是什么？",
            options: [
                "心理安全感意味着不需要问责",
                "需要在安全和问责之间找平衡，高绩效团队两者都高",
                "两者是完全对立的",
                "问责比心理安全感更重要"
            ],
            answer: 1,
            rationale: "HBR 指出需要在'安全'和'问责'之间找平衡，高绩效团队同时具备高心理安全感和高标准。"
        }
    ],
    "tm-6-2": [
        {
            id: "tm-6-2-q1",
            question: "Daniel Coyle 在《The Culture Code》中识别的三大核心技能是什么？",
            options: [
                "技术、管理、沟通",
                "建立安全感、分享脆弱性、建立目标感",
                "招聘、培训、考核",
                "计划、执行、复盘"
            ],
            answer: 1,
            rationale: "Coyle 识别的三大技能是 Build Safety、Share Vulnerability、Establish Purpose。"
        },
        {
            id: "tm-6-2-q2",
            question: "Coyle 关于高绩效文化的误解澄清是什么？",
            options: [
                "高绩效团队都是快乐轻松的",
                "高绩效团队不是轻松愉快的，而是专注于共同解决难题",
                "高绩效团队不需要社交",
                "高绩效团队只关注结果"
            ],
            answer: 1,
            rationale: "Coyle 指出'This is mostly not the case'——成功文化是'oriented around solving hard problems together'而非轻松愉快。"
        },
        {
            id: "tm-6-2-q3",
            question: "Coyle 认为建立信任协作的关键是什么？",
            options: [
                "提高薪酬",
                "分享脆弱性",
                "增加会议",
                "技术培训"
            ],
            answer: 1,
            rationale: "Coyle 发现'the key to building trusting cooperation in groups is sharing vulnerability'。"
        },
        {
            id: "tm-6-2-q4",
            question: "GitLab 创始人关于远程工作非正式沟通的观点是什么？",
            options: [
                "远程工作不需要非正式沟通",
                "必须正式设计非正式沟通",
                "只需要更多会议",
                "使用更多工具即可"
            ],
            answer: 1,
            rationale: "Sid Sijbrandij 强调'When working remote it is important to formalize informal communication'。"
        },
        {
            id: "tm-6-2-q5",
            question: "Atlassian 研究显示定期运行 Plays 可以提升团队绩效多少？",
            options: [
                "5-10%",
                "15-20%",
                "25-30%",
                "35-40%"
            ],
            answer: 1,
            rationale: "Atlassian 的 Team Playbook 研究显示定期运行 Plays 可提升团队绩效 15-20%。"
        },
        {
            id: "tm-6-2-q6",
            question: "Coyle 关于强文化和弱点的观点是什么？",
            options: [
                "强文化隐藏弱点",
                "强文化习惯性分享弱点以共同改进",
                "弱点不重要",
                "弱点应该只与管理者分享"
            ],
            answer: 1,
            rationale: "Coyle 观察'Strong cultures don't hide their weaknesses; they make a habit of sharing them, so they can improve together'。"
        },
        {
            id: "tm-6-2-q7",
            question: "Atlassian 研究显示有清晰目标的团队协作效率是其他团队的多少倍？",
            options: [
                "2.5 倍",
                "3.5 倍",
                "4.5 倍",
                "5.5 倍"
            ],
            answer: 2,
            rationale: "研究显示有清晰目标的团队'4.5x more likely to collaborate effectively'。"
        },
        {
            id: "tm-6-2-q8",
            question: "GitLab 的 Coffee Chats 实践是什么？",
            options: [
                "每天喝咖啡休息",
                "新员工入职至少安排 5 次，所有员工每周进行跨部门 25 分钟对话",
                "只有管理者参加的会议",
                "年度团建活动"
            ],
            answer: 1,
            rationale: "GitLab 的 Coffee Chats：新员工入职至少安排 5 次，所有员工每周花几小时进行 25 分钟的跨部门对话。"
        },
        {
            id: "tm-6-2-q9",
            question: "Coyle 描述的'归属信号'(belonging cues)包括什么？",
            options: [
                "薪酬和福利",
                "眼神接触、肢体语言、语调",
                "组织架构图",
                "工作头衔"
            ],
            answer: 1,
            rationale: "Coyle 指出归属信号包括眼神接触、肢体语言、语调等，用于建立安全连接。"
        },
        {
            id: "tm-6-2-q10",
            question: "GitLab 关于非正式沟通偏好的认识是什么？",
            options: [
                "所有人都喜欢社交活动",
                "偏好因人而异，需要尊重个人边界",
                "内向者应该被强制参加",
                "只有外向者需要社交"
            ],
            answer: 1,
            rationale: "GitLab 承认'informal communication preferences vary'——需要透明沟通个人互动舒适度。"
        },
        {
            id: "tm-6-2-q11",
            question: "Coyle 描述的高绩效团队行为特征不包括哪个？",
            options: [
                "每个人发言和倾听的比例大致相等",
                "成员之间有高眼神接触",
                "只通过团队领导沟通",
                "成员定期探索外部并带回信息"
            ],
            answer: 2,
            rationale: "高绩效团队成员直接沟通'not just through the team leader'——不是只通过领导沟通。"
        },
        {
            id: "tm-6-2-q12",
            question: "Atlassian 研究显示持续的规划和追踪实践可释放多少时间用于有意义的工作？",
            options: [
                "5%",
                "8%",
                "13%",
                "20%"
            ],
            answer: 2,
            rationale: "研究显示持续的规划和追踪实践可释放 13% 更多时间用于有意义的工作。"
        }
    ],
    "tm-6-3": [
        {
            id: "tm-6-3-q1",
            question: "替换一位员工的成本是其年薪的多少？",
            options: [
                "10-30%",
                "30-50%",
                "50-200%",
                "200-300%"
            ],
            answer: 2,
            rationale: "替换一位员工的成本是其年薪的 50-200%，包括招聘、培训和生产力损失。"
        },
        {
            id: "tm-6-3-q2",
            question: "Gallup 研究显示多少比例的离职员工认为经理本可以采取行动预防？",
            options: [
                "32%",
                "42%",
                "52%",
                "62%"
            ],
            answer: 2,
            rationale: "Gallup 研究显示'52% of exiting employees say their manager could have done something to prevent them from leaving—but no one ever asked'。"
        },
        {
            id: "tm-6-3-q3",
            question: "根据 Gallup，员工离职的首要原因是什么？",
            options: [
                "薪酬太低",
                "与直接经理的关系",
                "工作太累",
                "通勤太远"
            ],
            answer: 1,
            rationale: "Gallup 研究表明'People don't leave companies, they leave managers'——与直接经理的关系是首要原因。"
        },
        {
            id: "tm-6-3-q4",
            question: "HBR 研究建议 Exit Interview 应该由谁进行？",
            options: [
                "直接经理",
                "隔级经理或 HR",
                "同事",
                "外部顾问"
            ],
            answer: 1,
            rationale: "HBR 研究显示'second line managers receive more honest feedback'——隔级经理能获得更诚实的反馈。"
        },
        {
            id: "tm-6-3-q5",
            question: "Stay Interview 的最佳进行时机是什么？",
            options: [
                "只在员工提出离职时",
                "定期进行，新员工 3 个月和 6 个月时",
                "只在年终评审时",
                "只在发现问题时"
            ],
            answer: 1,
            rationale: "Stay Interview 应定期进行，新员工可以在 3 个月和 6 个月时安排，确保他们在角色和公司都满意。"
        },
        {
            id: "tm-6-3-q6",
            question: "Exit Interview 的最佳时机是什么？",
            options: [
                "员工最后一天",
                "员工提交辞职当天",
                "提交辞职和离职日期之间的中间点",
                "员工离职后一周"
            ],
            answer: 2,
            rationale: "Exit Interview 应在提交辞职和离职日期之间的中间点进行——太早太情绪化，太晚员工已关注新工作。"
        },
        {
            id: "tm-6-3-q7",
            question: "Stay Interview 后最重要的步骤是什么？",
            options: [
                "记录对话",
                "采取行动",
                "通知 HR",
                "更新绩效记录"
            ],
            answer: 1,
            rationale: "Stay Interview 最重要的部分是行动：'Even a 15-minute check-in 30 days later can reinforce trust and momentum'。"
        },
        {
            id: "tm-6-3-q8",
            question: "离职带来的知识流失可能需要多长时间才能重建？",
            options: [
                "几天",
                "几周",
                "数月甚至数年",
                "可以立即重建"
            ],
            answer: 2,
            rationale: "知识流失可能'take new employees or other team members months or maybe years to re-acquire'。"
        },
        {
            id: "tm-6-3-q9",
            question: "解雇员工时需要兼顾哪三个方面？",
            options: [
                "速度、效率、成本",
                "法律合规、人道尊重、团队沟通",
                "薪酬、福利、股票",
                "招聘、培训、交接"
            ],
            answer: 1,
            rationale: "解雇需要'legal compliance, human dignity, team communication'——法律合规、人道尊重、团队沟通三者兼顾。"
        },
        {
            id: "tm-6-3-q10",
            question: "离职预警信号不包括哪个？",
            options: [
                "参与度下降",
                "请假增加",
                "主动承担长期项目",
                "避免长期承诺"
            ],
            answer: 2,
            rationale: "预警信号包括参与度下降、请假增加、避免长期承诺——主动承担长期项目反而是积极信号。"
        },
        {
            id: "tm-6-3-q11",
            question: "为什么不是每个人都应该被挽留？",
            options: [
                "预算有限",
                "需要判断投入产出比，避免奖励抱怨行为",
                "HR 政策限制",
                "团队规模限制"
            ],
            answer: 1,
            rationale: "需要判断谁值得投入额外努力，同时不让留存策略变成'会哭的孩子有糖吃'。"
        },
        {
            id: "tm-6-3-q12",
            question: "优雅处理离职为什么重要？",
            options: [
                "只影响离职者",
                "影响团队士气和雇主品牌，离职员工可能成为推荐来源或回流人才",
                "没有实际影响",
                "只是 HR 的要求"
            ],
            answer: 1,
            rationale: "优雅处理离职影响团队士气和雇主品牌，离职员工可能成为推荐来源、客户或未来回流人才。"
        }
    ]
}
