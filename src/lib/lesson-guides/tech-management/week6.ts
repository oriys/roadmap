import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week6Guides: Record<string, LessonGuide> = {
    "tm-6-1": {
        lessonId: "tm-6-1",
        background: [
            "【心理安全感定义】Amy Edmondson 提出心理安全感是'团队成员相信不会因为提出想法、问题、担忧或错误而受到惩罚或羞辱的共同信念'。",
            "【Project Aristotle】Google 的研究发现，心理安全感是高绩效团队的首要特征，比技术能力、个人绩效更重要。没有心理安全感，创新和协作都会受阻。",
            "【表现形式】心理安全感高的团队：敢于承认错误、愿意寻求帮助、主动分享不同意见、敢于尝试新方法、能够提出困难问题。",
            "【领导者作用】领导者是心理安全感的首要塑造者。如何回应错误、如何对待不同意见、是否自己示范脆弱性，都会影响团队的心理安全感。",
            "【不等于舒适】心理安全感不是'让每个人都舒服'或'避免冲突'。恰恰相反，它是创造一个可以进行建设性冲突的环境。"
        ],
        keyDifficulties: [
            "【信任建立慢】心理安全感需要长期积累，但可以在一瞬间被破坏。一次公开批评可能需要数月才能修复。",
            "【文化惯性】在竞争激烈或惩罚性文化中，转变需要时间和持续努力。员工不会因为一次宣言就相信改变。",
            "【平衡挑战】需要在'安全'和'问责'之间找平衡。心理安全感不是降低标准或避免绩效对话的借口。",
            "【远程挑战】远程团队更难建立心理安全感，非语言信号缺失使得沟通更容易被误解。"
        ],
        handsOnPath: [
            "1. 自我示范：在团队会议中分享一个你最近犯的错误和学到的教训",
            "2. 回应方式：下次有人报告问题时，先说'谢谢你告诉我'再讨论解决方案",
            "3. 团队评估：使用 Amy Edmondson 的心理安全感量表评估团队现状",
            "4. 复盘机制：建立无责备的事后复盘（Blameless Postmortem）机制"
        ],
        selfCheck: [
            "团队成员是否敢于在会议中表达不同意见？",
            "当有人犯错时，你的第一反应是什么？",
            "团队成员是否愿意承认自己不知道或需要帮助？",
            "你是否在团队面前展示过自己的脆弱性？",
            "团队有多久没有人提出'愚蠢'的问题了？"
        ],
        extensions: [
            "阅读 Amy Edmondson 的《The Fearless Organization》",
            "研究 Google re:Work 的团队效能指南",
            "学习无责备的事后复盘（Blameless Postmortem）最佳实践",
            "了解 Just Culture 在组织中的应用"
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
            "【团队凝聚力】Tuckman 模型描述团队发展四阶段：Forming（形成）→ Storming（风暴）→ Norming（规范）→ Performing（执行）。理解团队所处阶段有助于采取合适的干预。",
            "【共同目标】高凝聚力团队有清晰的共同目标和身份认同。'我们是谁'和'我们在做什么重要的事'是凝聚力的基础。",
            "【仪式感】团队仪式（如周五分享会、里程碑庆祝、新人欢迎）创造归属感。这些看似'浪费时间'的活动有重要的文化价值。",
            "【社交资本】团队成员之间的非正式关系（社交资本）影响协作效率。了解彼此的背景、兴趣、工作方式可以减少摩擦。",
            "【多样性与包容】多样化的团队需要更刻意的包容努力。确保所有声音都被听到，避免形成小圈子。"
        ],
        keyDifficulties: [
            "【分布式团队】远程/分布式团队建立凝聚力更困难，需要更刻意的设计和投入。",
            "【时间压力】业务压力下，团队建设活动往往被牺牲。需要认识到这是投资而非浪费。",
            "【内向者照顾】不是每个人都喜欢社交活动。需要设计包容不同性格的团队建设方式。",
            "【冲突处理】团队发展必经'风暴'阶段，冲突是正常的。回避冲突会阻碍团队成熟。"
        ],
        handsOnPath: [
            "1. 团队仪式：设计或改进一个团队仪式（如周会、庆祝方式）",
            "2. 1:1 深入：在1:1中花时间了解团队成员的个人背景和职业期望",
            "3. 跨职能互动：组织与其他团队的交流机会，扩展社交网络",
            "4. 冲突对话：如果团队有未解决的冲突，主动推动开放讨论"
        ],
        selfCheck: [
            "你的团队目前处于 Tuckman 的哪个阶段？",
            "团队成员是否认同'我们是谁'？",
            "有哪些团队仪式正在发挥作用？",
            "远程成员是否感到被包含？",
            "团队成员之间的非正式关系如何？"
        ],
        extensions: [
            "研究 Patrick Lencioni 的《The Five Dysfunctions of a Team》",
            "学习分布式团队建设的最佳实践",
            "了解团队章程（Team Charter）的设计方法",
            "研究如何组织有效的团建活动"
        ],
        sourceUrls: [
            "https://www.amazon.com/Five-Dysfunctions-Team-Leadership-Fable/dp/0787960756",
            "https://hbr.org/2017/01/building-a-sense-of-belonging-on-your-team",
            "https://rework.withgoogle.com/guides/understanding-team-effectiveness/steps/foster-psychological-safety/"
        ]
    },
    "tm-6-3": {
        lessonId: "tm-6-3",
        background: [
            "【留存重要性】替换一位员工的成本是其年薪的50-200%（招聘、培训、生产力损失）。留住优秀人才比招聘新人更划算。",
            "【离职原因】Gallup 研究表明员工离职的首要原因是与直接经理的关系。'人们不是离开公司，而是离开经理。'",
            "【Stay Interview】与其等到离职面谈才了解问题，不如定期进行'留任面谈'：'是什么让你留在这里？''什么可能让你考虑离开？'",
            "【发展机会】缺乏成长和发展机会是离职的主要原因之一。管理者需要主动创造学习和晋升机会。",
            "【离职管理】离职是不可避免的。优雅地处理离职——无论是主动还是被动——影响团队士气和雇主品牌。"
        ],
        keyDifficulties: [
            "【预警识别】离职往往有预警信号（参与度下降、请假增加、避免长期承诺），但容易被忽视。",
            "【留与放】不是每个人都应该被挽留。需要判断谁值得投入额外努力，同时不让留存策略变成'会哭的孩子有糖吃'。",
            "【被动离职】解雇员工是管理者最难的对话之一。需要法律合规、人道尊重、团队沟通三者兼顾。",
            "【知识交接】离职带来的知识流失可能超出预期。需要有系统的知识交接流程。"
        ],
        handsOnPath: [
            "1. Stay Interview：选择一位你认为有离职风险的成员，进行一次诚恳的留任对话",
            "2. 发展规划：确保每位团队成员都有明确的发展计划和下一步目标",
            "3. 离职流程：审视当前的离职交接流程，是否有知识沉淀机制",
            "4. 预警系统：建立定期的员工满意度/敬业度检测机制"
        ],
        selfCheck: [
            "你知道每位团队成员留在这里的原因吗？",
            "过去一年有多少人离职？原因是什么？",
            "团队成员是否有清晰的职业发展路径？",
            "你能识别出哪些成员可能有离职风险吗？",
            "最近一次离职的知识交接做得如何？"
        ],
        extensions: [
            "研究员工敬业度调查的设计和实施",
            "学习如何进行艰难的绩效对话和解雇对话",
            "了解校友网络（Alumni Network）的价值和建设",
            "阅读《Love 'Em or Lose 'Em》了解留存最佳实践"
        ],
        sourceUrls: [
            "https://www.amazon.com/Love-Em-Lose-Getting-People/dp/1523089318",
            "https://www.gallup.com/workplace/231593/why-employees-quit-jobs.aspx",
            "https://hbr.org/2019/03/do-exit-interviews-even-help-companies-improve"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "tm-6-1": [
        {
            id: "tm-6-1-q1",
            question: "Amy Edmondson 如何定义心理安全感？",
            options: [
                "让每个人都感到舒服",
                "避免所有冲突",
                "团队成员相信不会因为提出想法或错误而受到惩罚",
                "保护员工免受工作压力"
            ],
            answer: 2,
            rationale: "心理安全感是'团队成员相信不会因为提出想法、问题、担忧或错误而受到惩罚或羞辱的共同信念'。"
        },
        {
            id: "tm-6-1-q2",
            question: "Google 的 Project Aristotle 发现什么是高绩效团队的首要特征？",
            options: [
                "技术能力",
                "个人绩效",
                "心理安全感",
                "工作经验"
            ],
            answer: 2,
            rationale: "Google 研究发现心理安全感是高绩效团队的首要特征，比技术能力更重要。"
        },
        {
            id: "tm-6-1-q3",
            question: "心理安全感不等于什么？",
            options: [
                "敢于提出问题",
                "愿意承认错误",
                "让每个人都舒适，避免所有冲突",
                "敢于尝试新方法"
            ],
            answer: 2,
            rationale: "心理安全感不是'让每个人都舒服'或'避免冲突'，而是可以进行建设性冲突的环境。"
        },
        {
            id: "tm-6-1-q4",
            question: "谁是心理安全感的首要塑造者？",
            options: [
                "HR 部门",
                "团队领导者",
                "最资深的成员",
                "公司CEO"
            ],
            answer: 1,
            rationale: "领导者是心理安全感的首要塑造者，他们的行为直接影响团队氛围。"
        },
        {
            id: "tm-6-1-q5",
            question: "心理安全感高的团队有什么表现？",
            options: [
                "从不犯错",
                "敢于承认错误、愿意寻求帮助、主动分享不同意见",
                "总是保持一致意见",
                "工作效率最高"
            ],
            answer: 1,
            rationale: "心理安全感高的团队敢于承认错误、愿意寻求帮助、主动分享不同意见、敢于尝试新方法。"
        },
        {
            id: "tm-6-1-q6",
            question: "为什么信任建立慢但破坏快？",
            options: [
                "这是错误的说法",
                "因为一次公开批评可能需要数月才能修复",
                "因为员工记性不好",
                "因为管理者经常换人"
            ],
            answer: 1,
            rationale: "心理安全感需要长期积累，但一次公开批评或羞辱可能需要数月才能修复。"
        },
        {
            id: "tm-6-1-q7",
            question: "无责备事后复盘（Blameless Postmortem）的目的是什么？",
            options: [
                "找出谁应该被惩罚",
                "避免追究责任，从系统层面分析问题",
                "只讨论成功案例",
                "减少复盘次数"
            ],
            answer: 1,
            rationale: "无责备事后复盘关注系统层面的改进而非个人指责，鼓励诚实报告问题。"
        },
        {
            id: "tm-6-1-q8",
            question: "远程团队建立心理安全感的挑战是什么？",
            options: [
                "没有挑战",
                "非语言信号缺失使得沟通更容易被误解",
                "时区问题",
                "技术问题"
            ],
            answer: 1,
            rationale: "远程团队更难建立心理安全感，因为非语言信号缺失使得沟通更容易被误解。"
        },
        {
            id: "tm-6-1-q9",
            question: "领导者示范脆弱性的作用是什么？",
            options: [
                "让团队看不起领导",
                "表明承认错误是安全的，鼓励他人也这样做",
                "减少领导权威",
                "没有任何作用"
            ],
            answer: 1,
            rationale: "领导者自己示范脆弱性和承认错误，表明这样做是安全的，鼓励他人也这样做。"
        },
        {
            id: "tm-6-1-q10",
            question: "心理安全感和问责的关系是什么？",
            options: [
                "心理安全感意味着不需要问责",
                "需要在安全和问责之间找平衡",
                "两者完全矛盾",
                "问责比安全感更重要"
            ],
            answer: 1,
            rationale: "需要在'安全'和'问责'之间找平衡，心理安全感不是降低标准的借口。"
        },
        {
            id: "tm-6-1-q11",
            question: "《The Fearless Organization》的作者是谁？",
            options: [
                "Kim Scott",
                "Amy Edmondson",
                "Patrick Lencioni",
                "Simon Sinek"
            ],
            answer: 1,
            rationale: "《The Fearless Organization》由哈佛商学院教授 Amy Edmondson 撰写。"
        },
        {
            id: "tm-6-1-q12",
            question: "当有人报告问题时应该先说什么？",
            options: [
                "这是谁的责任？",
                "为什么会发生这种事？",
                "谢谢你告诉我",
                "这太糟糕了"
            ],
            answer: 2,
            rationale: "先说'谢谢你告诉我'表达对报告问题行为的认可，然后再讨论解决方案。"
        }
    ],
    "tm-6-2": [
        {
            id: "tm-6-2-q1",
            question: "Tuckman 模型描述的团队发展四阶段是什么？",
            options: [
                "计划、执行、检查、改进",
                "Forming、Storming、Norming、Performing",
                "组建、培训、执行、解散",
                "招聘、入职、发展、离职"
            ],
            answer: 1,
            rationale: "Tuckman 模型描述团队发展四阶段：Forming（形成）→ Storming（风暴）→ Norming（规范）→ Performing（执行）。"
        },
        {
            id: "tm-6-2-q2",
            question: "高凝聚力团队的基础是什么？",
            options: [
                "高薪酬",
                "清晰的共同目标和身份认同",
                "轻松的工作环境",
                "没有截止日期"
            ],
            answer: 1,
            rationale: "'我们是谁'和'我们在做什么重要的事'是凝聚力的基础。"
        },
        {
            id: "tm-6-2-q3",
            question: "团队仪式的作用是什么？",
            options: [
                "浪费时间",
                "创造归属感和文化认同",
                "只是为了好玩",
                "满足管理者的要求"
            ],
            answer: 1,
            rationale: "团队仪式创造归属感，这些看似'浪费时间'的活动有重要的文化价值。"
        },
        {
            id: "tm-6-2-q4",
            question: "社交资本对团队的影响是什么？",
            options: [
                "没有影响",
                "增加协作效率，减少摩擦",
                "降低工作效率",
                "只影响团队氛围"
            ],
            answer: 1,
            rationale: "团队成员之间的非正式关系（社交资本）影响协作效率，了解彼此可以减少摩擦。"
        },
        {
            id: "tm-6-2-q5",
            question: "Storming（风暴）阶段对团队意味着什么？",
            options: [
                "团队失败了",
                "是正常的发展阶段，冲突是必经的",
                "应该解散团队",
                "管理者失职"
            ],
            answer: 1,
            rationale: "团队发展必经'风暴'阶段，冲突是正常的，回避冲突会阻碍团队成熟。"
        },
        {
            id: "tm-6-2-q6",
            question: "远程团队建立凝聚力的挑战是什么？",
            options: [
                "没有挑战",
                "需要更刻意的设计和投入",
                "完全无法建立",
                "只需要更多视频会议"
            ],
            answer: 1,
            rationale: "远程/分布式团队建立凝聚力更困难，需要更刻意的设计和投入。"
        },
        {
            id: "tm-6-2-q7",
            question: "如何照顾团队中的内向者？",
            options: [
                "强迫参加所有社交活动",
                "设计包容不同性格的团队建设方式",
                "忽略他们的需求",
                "单独组织内向者活动"
            ],
            answer: 1,
            rationale: "不是每个人都喜欢社交活动，需要设计包容不同性格的团队建设方式。"
        },
        {
            id: "tm-6-2-q8",
            question: "《The Five Dysfunctions of a Team》的作者是谁？",
            options: [
                "Amy Edmondson",
                "Patrick Lencioni",
                "Kim Scott",
                "Bruce Tuckman"
            ],
            answer: 1,
            rationale: "《The Five Dysfunctions of a Team》由 Patrick Lencioni 撰写。"
        },
        {
            id: "tm-6-2-q9",
            question: "多样化团队需要什么额外的努力？",
            options: [
                "不需要额外努力",
                "更刻意的包容努力，确保所有声音被听到",
                "减少多样性",
                "只关注相似点"
            ],
            answer: 1,
            rationale: "多样化的团队需要更刻意的包容努力，确保所有声音都被听到，避免形成小圈子。"
        },
        {
            id: "tm-6-2-q10",
            question: "Team Charter（团队章程）的作用是什么？",
            options: [
                "法律文件",
                "明确团队的使命、价值观和工作方式",
                "考勤记录",
                "绩效合同"
            ],
            answer: 1,
            rationale: "Team Charter 帮助团队明确使命、价值观、协作规则和决策方式。"
        },
        {
            id: "tm-6-2-q11",
            question: "业务压力下团队建设活动为什么容易被牺牲？",
            options: [
                "不应该牺牲",
                "被视为非必要，但这是投资而非浪费",
                "因为太贵了",
                "因为员工不喜欢"
            ],
            answer: 1,
            rationale: "业务压力下团队建设活动往往被视为非必要而被牺牲，但需要认识到这是投资而非浪费。"
        },
        {
            id: "tm-6-2-q12",
            question: "如何处理团队未解决的冲突？",
            options: [
                "忽略它，希望自己消失",
                "主动推动开放讨论",
                "惩罚冲突双方",
                "让HR介入"
            ],
            answer: 1,
            rationale: "如果团队有未解决的冲突，管理者应该主动推动开放讨论。"
        }
    ],
    "tm-6-3": [
        {
            id: "tm-6-3-q1",
            question: "替换一位员工的成本是其年薪的多少？",
            options: [
                "10-20%",
                "30-40%",
                "50-200%",
                "300%以上"
            ],
            answer: 2,
            rationale: "替换一位员工的成本是其年薪的50-200%，包括招聘、培训和生产力损失。"
        },
        {
            id: "tm-6-3-q2",
            question: "根据 Gallup，员工离职的首要原因是什么？",
            options: [
                "薪资太低",
                "与直接经理的关系",
                "工作太累",
                "没有晋升机会"
            ],
            answer: 1,
            rationale: "Gallup 研究表明员工离职的首要原因是与直接经理的关系，'人们不是离开公司，而是离开经理'。"
        },
        {
            id: "tm-6-3-q3",
            question: "Stay Interview 的目的是什么？",
            options: [
                "了解员工为什么离职",
                "定期了解什么让员工留下来或考虑离开",
                "说服员工不要离职",
                "评估员工绩效"
            ],
            answer: 1,
            rationale: "Stay Interview 是定期进行的留任面谈，了解员工留下来的原因和可能导致离开的因素。"
        },
        {
            id: "tm-6-3-q4",
            question: "缺乏什么是员工离职的主要原因之一？",
            options: [
                "休假时间",
                "成长和发展机会",
                "办公室设施",
                "团队聚餐"
            ],
            answer: 1,
            rationale: "缺乏成长和发展机会是离职的主要原因之一，管理者需要主动创造学习和晋升机会。"
        },
        {
            id: "tm-6-3-q5",
            question: "离职的预警信号包括什么？",
            options: [
                "工作太努力",
                "参与度下降、请假增加、避免长期承诺",
                "经常加班",
                "参加太多会议"
            ],
            answer: 1,
            rationale: "离职预警信号包括参与度下降、请假增加、避免长期承诺等。"
        },
        {
            id: "tm-6-3-q6",
            question: "为什么不是每个人都应该被挽留？",
            options: [
                "所有人都应该被挽留",
                "需要判断投入产出比，避免'会哭的孩子有糖吃'",
                "公司预算有限",
                "HR的要求"
            ],
            answer: 1,
            rationale: "需要判断谁值得投入额外努力，同时不让留存策略变成'会哭的孩子有糖吃'。"
        },
        {
            id: "tm-6-3-q7",
            question: "解雇员工时需要兼顾什么？",
            options: [
                "只需要法律合规",
                "法律合规、人道尊重、团队沟通三者兼顾",
                "只需要人道尊重",
                "只需要团队沟通"
            ],
            answer: 1,
            rationale: "解雇员工需要法律合规、人道尊重、团队沟通三者兼顾。"
        },
        {
            id: "tm-6-3-q8",
            question: "优雅处理离职为什么重要？",
            options: [
                "只影响离职者",
                "影响团队士气和雇主品牌",
                "没有什么重要性",
                "只影响招聘"
            ],
            answer: 1,
            rationale: "优雅地处理离职影响团队士气和雇主品牌，无论是主动还是被动离职。"
        },
        {
            id: "tm-6-3-q9",
            question: "知识交接流程的重要性是什么？",
            options: [
                "不重要",
                "减少离职带来的知识流失",
                "只是形式",
                "只对新人有用"
            ],
            answer: 1,
            rationale: "离职带来的知识流失可能超出预期，需要有系统的知识交接流程。"
        },
        {
            id: "tm-6-3-q10",
            question: "《Love 'Em or Lose 'Em》这本书主要讲什么？",
            options: [
                "招聘方法",
                "员工留存最佳实践",
                "绩效管理",
                "解雇技巧"
            ],
            answer: 1,
            rationale: "《Love 'Em or Lose 'Em》专注于员工留存的最佳实践。"
        },
        {
            id: "tm-6-3-q11",
            question: "Alumni Network（校友网络）的价值是什么？",
            options: [
                "没有价值",
                "保持与离职员工的联系，可能带来推荐、回流或合作机会",
                "只是社交",
                "增加招聘成本"
            ],
            answer: 1,
            rationale: "校友网络保持与离职员工的联系，可能带来推荐、人才回流或未来合作机会。"
        },
        {
            id: "tm-6-3-q12",
            question: "员工敬业度检测应该多久进行一次？",
            options: [
                "只在年底",
                "定期进行（季度或更频繁）",
                "只在有问题时",
                "不需要检测"
            ],
            answer: 1,
            rationale: "需要建立定期的员工敬业度检测机制，及时发现问题而非等到离职面谈。"
        }
    ]
}
