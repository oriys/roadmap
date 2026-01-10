import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "tm-1-1": {
        lessonId: "tm-1-1",
        background: [
            "【核心转变】《The Manager's Path》强调：'在科技行业中管理也是一门技术学科'，从工程师到管理者的学习曲线陡峭。管理者的价值不再体现在个人贡献上，而在于团队的整体产出。",
            "【角色差异】工程师思维聚焦于解决技术问题，追求代码质量和系统优化；管理者思维则需要关注人的发展、团队协作和组织目标的达成。这是从'做事'到'成事'的根本转变。",
            "【技术专家陷阱】HBR 调查发现 65% 的首次管理者对转型感到不确定。常见陷阱包括：事必躬亲、过度干预技术细节、难以放手让他人完成工作。",
            "【信任基础】Manager Tools 研究表明：'与结果和留存相关性最高的职业指标是信任'。新管理者需要从第一天起就开始建立与团队的信任关系。",
            "【反馈文化】HBR 建议首次管理者'从一开始就建立反馈文化'，通过定期一对一会议询问：'我设定的期望清楚吗？你需要我做什么来帮你突破障碍？'"
        ],
        keyDifficulties: [
            "【身份认同】从技术专家转变为管理者，需要重新定义自我价值。不再以代码行数或技术难题解决量来衡量贡献，而是以团队成长和交付能力来评估。",
            "【放手困难】《The Manager's Path》指出管理者需要'保持技术相关性的同时发展新技能'，这个平衡点难以把握。过度技术化会变成微观管理，过度放手又会失去技术判断力。",
            "【信任悖论】HBR 提出反直觉建议：'信任应该被给予，而非严格赚取'。团队成员因专业能力被雇用，微观管理会破坏他们的信心。",
            "【责备文化】当问题出现时，新管理者容易陷入'谁的错'的思维模式。正确做法是采用系统思维，问'流程哪里出了问题'而非指责个人。"
        ],
        handsOnPath: [
            "1. 反思练习：列出过去一周你的时间分配，标记哪些是个人贡献（写代码、解决技术问题）vs 团队赋能（辅导、移除障碍、规划）",
            "2. 建立一对一：与每位直接下属建立每周或每两周一次的固定一对一会议，时长30-60分钟",
            "3. 信任实验：选择一个你习惯亲自完成的任务，完整委托给团队成员，只在被请求时提供支持",
            "4. 反馈收集：在下一次一对一中询问'你需要我做什么不同的事情来帮助你更成功？'",
            "5. 阅读《The Manager's Path》第1-3章，特别关注 Management 101 和 Tech Lead 章节"
        ],
        selfCheck: [
            "你能否用一句话描述管理者与工程师核心价值的区别？",
            "过去一周中，你用于赋能他人的时间占比是多少？目标应该是多少？",
            "你的团队成员是否感到被信任？他们有空间自主决策吗？",
            "当出现问题时，你的第一反应是找人还是找流程原因？",
            "你是否已经与所有直接下属建立了定期一对一机制？",
            "团队成员是否愿意主动向你寻求帮助或反馈问题？"
        ],
        extensions: [
            "深入阅读《What Got You Here Won't Get You There》了解成功人士的行为陷阱",
            "学习 Situational Leadership 模型，了解如何根据下属成熟度调整管理风格",
            "研究 First 90 Days 框架，制定你的转型计划",
            "寻找一位管理导师，建立定期交流机制"
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
            "【四大职责】技术管理者的核心职责可归纳为四个维度：People（人员发展）、Process（流程优化）、Technology（技术方向）、Strategy（战略规划）。平衡这四者是管理者的核心挑战。",
            "【Tech Lead 定义】Pat Kua 定义：'Tech Lead 是负责领导团队和对齐技术方向的软件工程师'。这个角色专注于技术方向的确立与维护，与 Engineering Manager 的人员管理焦点不同。",
            "【角色区分】Tech Lead 关注 'How'（技术实现），Product Manager 关注 'What'（功能需求），Engineering Manager 关注 'Who'（人员成长）。三者协作但各有侧重。",
            "【代码参与】Pat Kua 建议 Tech Lead 应保持至少 30% 的时间编写代码，以维持技术判断力和团队信任。完全脱离代码会削弱技术领导力。",
            "【文化塑造】《The Manager's Path》强调通过'去个性化决策'来塑造文化，包括代码评审、事故复盘和架构评审等制度化实践。"
        ],
        keyDifficulties: [
            "【时间平衡】在人员管理、技术方向、项目交付和组织建设之间找到平衡是最大挑战。没有固定公式，需要根据团队和业务阶段动态调整。",
            "【授权边界】既要避免微观管理，又要确保技术质量。关键是建立清晰的技术标准和评审机制，而非事事亲自把关。",
            "【技术深度 vs 管理宽度】随着管理范围扩大，难以在所有技术领域保持深度。需要发展'T型'能力：广泛了解 + 选择性深入。",
            "【角色模糊】在 Tech Lead、Engineering Manager、Architect 之间的边界往往模糊，需要与组织明确期望和职责划分。"
        ],
        handsOnPath: [
            "1. 职责审计：列出你当前的所有工作，按 People/Process/Technology/Strategy 四个维度分类",
            "2. 时间追踪：用一周时间记录实际时间分配，与理想分配对比",
            "3. 代码参与：评估你当前的代码参与度，如果低于 30%，规划如何重新参与关键技术工作",
            "4. 授权清单：识别 3-5 项你可以授权的技术决策，建立授权和跟进机制",
            "5. 阅读《An Elegant Puzzle》中关于组织调试和团队设计的章节"
        ],
        selfCheck: [
            "你能清晰地向团队成员解释你的核心职责吗？",
            "过去一个月你在 People/Process/Technology/Strategy 四个维度的时间分配是否合理？",
            "你的代码参与度是多少？是否足以维持技术判断力？",
            "团队是否清楚在什么情况下需要你参与技术决策，什么情况下可以自主决定？",
            "你是否有系统性的方式来跟踪团队的技术质量和债务？"
        ],
        extensions: [
            "研究 Engineering Manager vs Tech Lead 的不同职业路径",
            "了解《An Elegant Puzzle》中的组织调试框架",
            "学习 RACI 矩阵明确职责分工",
            "探索双梯制（IC vs Manager）的职级设计"
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
            "【成长型思维】Carol Dweck 的研究区分了两种心智模式：固定型思维认为能力是天生的，成长型思维相信能力可以通过努力发展。管理者需要培养后者来应对持续的学习挑战。",
            "【高产出管理】Andy Grove 在《High Output Management》中提出管理者的产出等于组织的产出。关键不是个人生产力，而是如何提升整个组织的效能。",
            "【杠杆率概念】Grove 强调识别'高杠杆活动'——那些能产生倍数效应的管理行为，如培养人才、移除障碍、做出关键决策。",
            "【不确定性拥抱】管理工作充满模糊性，没有标准答案。优秀管理者学会在不完整信息下做决策，并通过快速反馈循环进行调整。",
            "【失败学习】高效团队将失败视为学习机会。Google 的 Project Aristotle 研究表明，心理安全感（敢于犯错）是高绩效团队的首要特征。"
        ],
        keyDifficulties: [
            "【完美主义陷阱】工程师背景的管理者往往追求完美方案，但管理决策经常需要在信息不完整时做出'足够好'的选择。",
            "【控制欲放下】习惯于控制代码质量的工程师，需要学会接受他人的不同做法，只要结果符合预期。",
            "【反馈恐惧】给出建设性反馈可能让人不舒服，但回避反馈会导致更大问题。Radical Candor 强调'关心个人的同时直接挑战'。",
            "【短期 vs 长期】管理者经常面临短期交付压力与长期团队建设的冲突，需要智慧地平衡。"
        ],
        handsOnPath: [
            "1. 心智模式评估：反思你对自己管理能力的信念，是'我天生不适合管理'还是'我正在学习成为更好的管理者'？",
            "2. 杠杆活动识别：审视你的日历，识别哪些活动是高杠杆的（培养人才、关键决策），哪些是低杠杆的（可授权的执行任务）",
            "3. 失败复盘：选择一个近期的挫折或错误，用学习视角分析：学到了什么？下次如何改进？",
            "4. 反馈练习：本周给出一次建设性反馈，使用 SBI 模型（Situation-Behavior-Impact）",
            "5. 阅读《High Output Management》第一部分，理解杠杆率概念"
        ],
        selfCheck: [
            "当面对不确定性时，你的第一反应是回避还是拥抱？",
            "你最近一次从失败中学习是什么时候？学到了什么？",
            "你能识别出日常工作中的高杠杆活动吗？你花足够时间在这些活动上吗？",
            "你上一次给出建设性反馈是什么时候？对方的反应如何？",
            "你是否定期寻求他人对你管理方式的反馈？"
        ],
        extensions: [
            "深入阅读 Carol Dweck 的《Mindset》了解成长型思维的研究基础",
            "学习《Thinking, Fast and Slow》理解决策偏见",
            "研究 OKR 框架作为目标设定和反馈循环的工具",
            "了解 Coaching 技术，学习如何通过提问引导他人成长"
        ],
        sourceUrls: [
            "https://www.amazon.com/Mindset-Psychology-Carol-S-Dweck/dp/0345472322",
            "https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884",
            "https://lethain.com/work-on-what-matters/"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "tm-1-1": [
        {
            id: "tm-1-1-q1",
            question: "根据《The Manager's Path》，技术管理最大的特点是什么？",
            options: [
                "管理比技术工作更简单",
                "管理也是一门技术学科，学习曲线陡峭",
                "管理不需要技术背景",
                "管理主要是行政工作"
            ],
            answer: 1,
            rationale: "《The Manager's Path》强调'在科技行业中管理也是一门技术学科'，学习曲线陡峭，需要系统性学习。"
        },
        {
            id: "tm-1-1-q2",
            question: "HBR 调查显示，多少比例的首次管理者对转型感到不确定？",
            options: [
                "25%",
                "45%",
                "65%",
                "85%"
            ],
            answer: 2,
            rationale: "HBR 调查发现 65% 的首次管理者对转型感到不确定，这说明管理转型是普遍的挑战。"
        },
        {
            id: "tm-1-1-q3",
            question: "关于信任，HBR 给出的反直觉建议是什么？",
            options: [
                "信任必须通过长期考验才能建立",
                "新管理者应该先保持怀疑态度",
                "信任应该被给予，而非严格赚取",
                "信任只适用于资深员工"
            ],
            answer: 2,
            rationale: "HBR 建议'信任应该被给予，而非严格赚取'，因为团队成员因专业能力被雇用，微观管理会破坏他们的信心。"
        },
        {
            id: "tm-1-1-q4",
            question: "根据 Manager Tools 研究，什么指标与结果和留存相关性最高？",
            options: [
                "薪酬水平",
                "技术能力",
                "信任",
                "工作经验"
            ],
            answer: 2,
            rationale: "Manager Tools 研究表明'与结果和留存相关性最高的职业指标是信任'，这是管理者需要首先建立的基础。"
        },
        {
            id: "tm-1-1-q5",
            question: "当问题出现时，新管理者应该采用什么思维方式？",
            options: [
                "追究个人责任",
                "系统思维，问'流程哪里出了问题'",
                "等待问题自行解决",
                "向上级汇报后等待指示"
            ],
            answer: 1,
            rationale: "HBR 建议采用系统思维，问'流程哪里出了问题'而非指责个人，这有助于建立信任和协作文化。"
        },
        {
            id: "tm-1-1-q6",
            question: "《The Manager's Path》将管理者转型的核心描述为什么？",
            options: [
                "从编码到开会",
                "从个人贡献向团队倍增效应的转变",
                "从技术岗到行政岗",
                "从执行者到监督者"
            ],
            answer: 1,
            rationale: "《The Manager's Path》强调管理者需要从个人贡献向团队倍增效应转变，发展倾听、建立信任、进行困难对话等新技能。"
        },
        {
            id: "tm-1-1-q7",
            question: "HBR 建议新管理者在一对一中应该问什么问题？",
            options: [
                "你今天做了什么？",
                "你的 KPI 完成情况如何？",
                "我设定的期望清楚吗？你需要我做什么来帮你突破障碍？",
                "你为什么进度落后？"
            ],
            answer: 2,
            rationale: "HBR 建议询问'我设定的期望清楚吗？'和'你需要我做什么来帮你突破障碍？'，这些问题体现了服务型领导的理念。"
        },
        {
            id: "tm-1-1-q8",
            question: "技术专家陷阱的主要表现是什么？",
            options: [
                "完全不参与技术工作",
                "事必躬亲、过度干预技术细节",
                "只关注管理不关注技术",
                "将所有工作都委托出去"
            ],
            answer: 1,
            rationale: "技术专家陷阱的表现是事必躬亲、过度干预技术细节，难以放手让他人完成工作，这会阻碍团队成长。"
        },
        {
            id: "tm-1-1-q9",
            question: "在混合工作环境中，HBR 建议通过什么来建立团队连接？",
            options: [
                "增加监控软件",
                "每天开站会",
                "创建团队仪式如'Meme Monday'和'Rose and Thorn'",
                "要求全员返回办公室"
            ],
            answer: 2,
            rationale: "HBR 建议通过有意义的团队仪式如'Meme Monday'（分享周末反思）和'Rose and Thorn'（分享一正一负）来建立连接。"
        },
        {
            id: "tm-1-1-q10",
            question: "根据《The Manager's Path》，建立反馈文化的最佳方式是什么？",
            options: [
                "只在年度评审时给反馈",
                "始终保持开放接受反馈的态度",
                "只给正面反馈",
                "让 HR 负责所有反馈"
            ],
            answer: 1,
            rationale: "HBR 强调管理者应该'始终保持开放接受反馈的态度'，而不是等待年度评审，这有助于建立持续改进的文化。"
        },
        {
            id: "tm-1-1-q11",
            question: "从工程师到管理者，核心价值衡量方式如何变化？",
            options: [
                "从代码行数变为会议数量",
                "从解决技术问题变为团队整体产出",
                "从技术能力变为政治能力",
                "没有变化，仍然是技术贡献"
            ],
            answer: 1,
            rationale: "管理者的价值从个人技术贡献转变为团队整体产出，衡量标准从'我做了什么'变为'团队达成了什么'。"
        },
        {
            id: "tm-1-1-q12",
            question: "HBR 建议首次管理者应该在何时开始建立反馈文化？",
            options: [
                "入职三个月后",
                "完成第一个项目后",
                "从一开始就建立",
                "等团队稳定后"
            ],
            answer: 2,
            rationale: "HBR 明确建议'从一开始就建立反馈文化'，通过定期一对一会议建立持续的反馈机制。"
        }
    ],
    "tm-1-2": [
        {
            id: "tm-1-2-q1",
            question: "Pat Kua 如何定义 Tech Lead 角色？",
            options: [
                "负责管理团队人员的工程师",
                "负责领导团队和对齐技术方向的软件工程师",
                "只负责写代码的高级工程师",
                "负责项目进度的项目经理"
            ],
            answer: 1,
            rationale: "Pat Kua 定义：'Tech Lead 是负责领导团队和对齐技术方向的软件工程师'，强调技术方向而非人员管理。"
        },
        {
            id: "tm-1-2-q2",
            question: "Tech Lead、Product Manager、Engineering Manager 的焦点区别是什么？",
            options: [
                "都关注技术实现",
                "Tech Lead关注How，PM关注What，EM关注Who",
                "都关注人员管理",
                "没有本质区别"
            ],
            answer: 1,
            rationale: "Tech Lead 关注 'How'（技术实现），Product Manager 关注 'What'（功能需求），Engineering Manager 关注 'Who'（人员成长）。"
        },
        {
            id: "tm-1-2-q3",
            question: "Pat Kua 建议 Tech Lead 应该保持多少比例的时间编写代码？",
            options: [
                "0%",
                "至少 10%",
                "至少 30%",
                "至少 50%"
            ],
            answer: 2,
            rationale: "Pat Kua 建议 Tech Lead 应保持至少 30% 的时间编写代码，以维持技术判断力和团队信任。"
        },
        {
            id: "tm-1-2-q4",
            question: "技术管理者的四大核心职责维度是什么？",
            options: [
                "Code、Review、Deploy、Monitor",
                "People、Process、Technology、Strategy",
                "Plan、Do、Check、Act",
                "Design、Build、Test、Release"
            ],
            answer: 1,
            rationale: "技术管理者的四大核心职责是 People（人员发展）、Process（流程优化）、Technology（技术方向）、Strategy（战略规划）。"
        },
        {
            id: "tm-1-2-q5",
            question: "根据《The Manager's Path》，如何通过制度塑造文化？",
            options: [
                "口头强调价值观",
                "通过代码评审、事故复盘和架构评审等'去个性化决策'",
                "频繁开全员大会",
                "制定详细的规章制度"
            ],
            answer: 1,
            rationale: "《The Manager's Path》强调通过'去个性化决策'来塑造文化，包括代码评审、事故复盘和架构评审等制度化实践。"
        },
        {
            id: "tm-1-2-q6",
            question: "Tech Lead 的主要职责不包括以下哪项？",
            options: [
                "建立并演进团队的技术愿景",
                "管理团队可交付成果的技术质量",
                "负责团队成员的薪酬和晋升决策",
                "解决技术分歧与争议"
            ],
            answer: 2,
            rationale: "薪酬和晋升决策通常是 Engineering Manager 或 People Manager 的职责，Tech Lead 主要关注技术方向和质量。"
        },
        {
            id: "tm-1-2-q7",
            question: "随着管理范围扩大，Tech Lead 应该发展什么类型的能力？",
            options: [
                "在所有领域保持同等深度",
                "T型能力：广泛了解 + 选择性深入",
                "完全放弃技术能力",
                "只关注一个狭窄领域"
            ],
            answer: 1,
            rationale: "随着管理范围扩大，难以在所有技术领域保持深度，需要发展'T型'能力：广泛了解 + 选择性深入。"
        },
        {
            id: "tm-1-2-q8",
            question: "Tech Lead 需要平衡的三大能力是什么？",
            options: [
                "编码、测试、部署",
                "开发技能、架构能力、领导力",
                "沟通、协调、执行",
                "计划、组织、控制"
            ],
            answer: 1,
            rationale: "Pat Kua 指出 Tech Lead 需要三大平衡能力：开发技能（编写和评审代码）、架构能力（系统级设计思维）、领导力（教练、影响与授权）。"
        },
        {
            id: "tm-1-2-q9",
            question: "建立有效授权机制的关键是什么？",
            options: [
                "完全放手不再过问",
                "事事亲自把关",
                "建立清晰的技术标准和评审机制",
                "只授权简单任务"
            ],
            answer: 2,
            rationale: "有效授权的关键是建立清晰的技术标准和评审机制，而非事事亲自把关或完全放手。"
        },
        {
            id: "tm-1-2-q10",
            question: "Tech Lead 在技术投资方面的职责包括什么？",
            options: [
                "只关注新功能开发",
                "投资技术改进与债务管理",
                "将所有技术债务推迟到下季度",
                "让团队自行决定技术投资"
            ],
            answer: 1,
            rationale: "Pat Kua 指出 Tech Lead 的职责包括'投资技术改进与债务管理'，需要主动关注技术健康度。"
        },
        {
            id: "tm-1-2-q11",
            question: "为什么 Tech Lead 不应该完全脱离代码？",
            options: [
                "公司要求必须写代码",
                "会削弱技术判断力和团队信任",
                "没有其他人可以写代码",
                "为了显示技术能力"
            ],
            answer: 1,
            rationale: "完全脱离代码会削弱技术判断力和团队信任，Tech Lead 需要保持一定的代码参与度来维持技术领导力。"
        },
        {
            id: "tm-1-2-q12",
            question: "Tech Lead 与 Engineering Manager 的主要区别是什么？",
            options: [
                "Tech Lead 更资深",
                "Tech Lead 更动手且技术深度更强",
                "Engineering Manager 必须写代码",
                "两者没有区别"
            ],
            answer: 1,
            rationale: "Pat Kua 指出 Tech Lead 更动手且技术深度更强，不同于高度管理化的 Engineering Manager 的人员管理焦点。"
        }
    ],
    "tm-1-3": [
        {
            id: "tm-1-3-q1",
            question: "Carol Dweck 提出的两种心智模式是什么？",
            options: [
                "乐观型和悲观型",
                "固定型思维和成长型思维",
                "内向型和外向型",
                "分析型和直觉型"
            ],
            answer: 1,
            rationale: "Carol Dweck 的研究区分了固定型思维（认为能力是天生的）和成长型思维（相信能力可以通过努力发展）。"
        },
        {
            id: "tm-1-3-q2",
            question: "根据 Andy Grove 的《High Output Management》，管理者的产出等于什么？",
            options: [
                "个人完成的任务数量",
                "组织的产出",
                "开会的时间",
                "写的文档数量"
            ],
            answer: 1,
            rationale: "Andy Grove 提出管理者的产出等于组织的产出，关键不是个人生产力，而是如何提升整个组织的效能。"
        },
        {
            id: "tm-1-3-q3",
            question: "根据 Will Larson 的文章，'Snacking'（零食式工作）指的是什么？",
            options: [
                "在工作时吃零食",
                "容易但低影响力的工作",
                "休息时间",
                "快速完成的重要任务"
            ],
            answer: 1,
            rationale: "Will Larson 指出'Snacking'是指'容易但低影响力的工作'，虽然提供成就感，但缺乏学习机会且机会成本高。"
        },
        {
            id: "tm-1-3-q4",
            question: "'Preening'（装饰性工作）的问题是什么？",
            options: [
                "工作太难",
                "低影响力、高可见度的工作常被误认为高价值",
                "工作量太大",
                "需要太多协作"
            ],
            answer: 1,
            rationale: "Will Larson 警告'做低影响力、高可见度的工作'常被误认为高价值，会分散真实工作的精力，长期损害职业发展。"
        },
        {
            id: "tm-1-3-q5",
            question: "Will Larson 提出的三个高杠杆活动是什么？",
            options: [
                "开会、写文档、做演示",
                "培养团队、编辑优化、推进项目完成",
                "写代码、做评审、修 bug",
                "规划、执行、复盘"
            ],
            answer: 1,
            rationale: "Will Larson 提出三个高杠杆活动：培养团队（指导和辅导）、编辑优化（做出小改变产生大影响）、推进项目完成（将陷入困境的工作转变为可交付成果）。"
        },
        {
            id: "tm-1-3-q6",
            question: "管理者应该聚焦于什么类型的工作？",
            options: [
                "最紧急的工作",
                "最简单的工作",
                "如果你不做就不会发生的工作",
                "最有趣的工作"
            ],
            answer: 2,
            rationale: "Will Larson 建议聚焦于'如果你不做就不会发生'的工作——这是最大的杠杆机会。"
        },
        {
            id: "tm-1-3-q7",
            question: "Radical Candor 的核心是什么？",
            options: [
                "直接批评不考虑感受",
                "关心个人的同时直接挑战",
                "避免任何负面反馈",
                "让别人来传达坏消息"
            ],
            answer: 1,
            rationale: "Radical Candor 强调'关心个人的同时直接挑战'，两者缺一不可，既不能无情批评也不能回避反馈。"
        },
        {
            id: "tm-1-3-q8",
            question: "Radical Candor 框架中，'Ruinous Empathy'（毁灭性同理心）指什么？",
            options: [
                "过度批评",
                "关心但不敢挑战，回避必要的反馈",
                "既不关心也不挑战",
                "只挑战不关心"
            ],
            answer: 1,
            rationale: "Ruinous Empathy 是指关心个人但不敢直接挑战，回避必要的反馈，长期来看对被反馈者有害。"
        },
        {
            id: "tm-1-3-q9",
            question: "新晋管理者容易犯的'Chasing Ghosts'（追逐幻影）错误是什么？",
            options: [
                "追求不存在的晋升机会",
                "将前公司经验套用到新环境，投入资源于实际无意义的项目",
                "追求完美的解决方案",
                "追求过多的认可"
            ],
            answer: 1,
            rationale: "Will Larson 指出新晋管理者容易将前公司的经验套用到新环境，投入大量资源于实际在当前环境中无意义的项目。"
        },
        {
            id: "tm-1-3-q10",
            question: "面对公司存亡风险时，管理者应该怎么做？",
            options: [
                "继续按原计划工作",
                "立即聚焦于生存性问题",
                "开始寻找新工作",
                "等待上级指示"
            ],
            answer: 1,
            rationale: "Will Larson 强调当公司面临存亡风险时，应立即聚焦于生存性问题，这是最高优先级。"
        },
        {
            id: "tm-1-3-q11",
            question: "Google 的 Project Aristotle 研究发现高绩效团队的首要特征是什么？",
            options: [
                "技术能力强",
                "经验丰富",
                "心理安全感",
                "高薪酬"
            ],
            answer: 2,
            rationale: "Google 的 Project Aristotle 研究表明，心理安全感（敢于犯错和表达不同意见）是高绩效团队的首要特征。"
        },
        {
            id: "tm-1-3-q12",
            question: "根据 Radical Candor，反馈应该何时给出？",
            options: [
                "只在年度评审时",
                "只在出现严重问题时",
                "即时提供而非等待正式评审",
                "只在被要求时"
            ],
            answer: 2,
            rationale: "Radical Candor 强调即时提供反馈而非等待正式评审，这样可以更快解决问题并建立持续改进的文化。"
        }
    ]
}
