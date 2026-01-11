import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "tm-5-1": {
        lessonId: "tm-5-1",
        background: [
            "【Engineering Ladders 框架】Engineering Ladders 提供了一个系统化的能力评估框架，'allows software engineering managers to have meaningful conversations with their direct reports'——帮助管理者与团队成员进行有意义的职业发展对话。",
            "【五大成长维度】Engineering Ladders 定义了五个关键成长维度：Technology（从采用工具到创造新技术）、System（从增强功能到引领技术卓越）、People（从向他人学习到管理职业和绩效）、Process（从遵循流程到定义团队流程）、Influence（从子系统影响到全社区影响）。",
            "【Dropbox 能力框架】Dropbox 的职业框架强调它'is not a promotion checklist'——不是晋升清单，而是帮助你理解下一级别的影响力可能是什么样子。成功取决于展示'business impact'而非打勾。框架覆盖 Results、Direction、Talent、Culture 四大支柱。",
            "【CircleCI 矩阵设计原则】CircleCI 的能力矩阵分配：技术技能占 20%，反馈沟通协作占 40%，领导力占 17%（初级工程师）。他们强调'what makes a good engineer goes far beyond their coding skills'——优秀工程师的定义远超编码能力。",
            "【多元职业路径】CircleCI 明确支持多元职业路径：'career paths are as diverse as the people that work with us'——拒绝管理是唯一晋升路径的假设。使用主动描述词'does'而非'can do'，确保清晰度。"
        ],
        keyDifficulties: [
            "【个人能力不均衡】Engineering Ladders 明确指出'people are usually stronger in some areas and weaker in others'——人们通常在某些领域更强、其他领域较弱。框架应作为对话指南而非晋升清单。",
            "【晋升时机判断】Engineering Ladders 建议晋升准备度通常需要'performing at the next level consistently for several months'——持续数月在下一级别表现后才能正式晋升。",
            "【标准一致性】不同管理者对同一标准理解可能不同。CircleCI 强调五大设计原则：Consistency（一致性）、Approachability（可理解性）、Simplicity（简洁性）、Clear language（清晰语言）、Straightforward structure（直观结构）。",
            "【Title Inflation】不同公司同名职级差异巨大，建立内部体系时需要与市场校准，避免内外期望错位。",
            "【评估偏见】缺乏校准会导致同样表现被不同经理打出不同分数。研究显示 85% 的员工认为绩效评估不公平，因此考虑离职。"
        ],
        handsOnPath: [
            "研究 Engineering Ladders 的四种职业路径（Developer、Tech Lead、TPM、Engineering Manager），理解各自的独特价值和成长轨迹。",
            "参考 Dropbox 的四大支柱（Results、Direction、Talent、Culture），为团队设计或评估现有能力模型的完整性。",
            "为每位团队成员在五大维度（Technology、System、People、Process、Influence）上进行能力盘点，识别优势和发展领域。",
            "与每位成员讨论当前级别的期望和下一级别的差距，确保使用具体行为示例而非抽象描述。",
            "审视团队是否有真正的双轨制——IC 和管理路径是否同等受重视？高级 IC 是否获得足够的尊重和发展空间？"
        ],
        selfCheck: [
            "你能用具体行为描述每个职级的期望吗？是否避免了'展示技术领导力'这类模糊表述？",
            "团队成员是否清楚晋升到下一级需要持续展示什么能力？",
            "你的能力模型是否覆盖了技术之外的沟通、协作、领导力维度？",
            "IC 和管理路径在团队中是否被同等重视？",
            "不同管理者对能力标准的理解是否经过校准？"
        ],
        extensions: [
            "深入研究 Progression.fyi 收集的各公司能力模型，寻找适合你团队的参考。",
            "阅读《Staff Engineer》了解高级 IC 的影响范围如何从团队扩展到多团队再到组织。",
            "了解 Radford 等第三方职级对标方法，校准内部体系与市场的差距。",
            "研究如何设计公平透明的晋升评审流程，包括评审委员会组成和标准校准。"
        ],
        sourceUrls: [
            "https://www.engineeringladders.com/",
            "https://dropbox.github.io/dbx-career-framework/",
            "https://circleci.com/blog/why-we-re-designed-our-engineering-career-paths-at-circleci/"
        ]
    },
    "tm-5-2": {
        lessonId: "tm-5-2",
        background: [
            "【Radical Candor 核心框架】Kim Scott 的 Radical Candor 建立在两个维度上：Care Personally（关心个人）+ Challenge Directly（直接挑战）。Scott 强调这'is not a license to act like a jerk'也'not an invitation to get creepily personal'——既不是粗鲁的借口，也不是侵犯隐私的许可。",
            "【四象限模型】Radical Candor 定义四种反馈模式：Radical Candor（关心+挑战，理想状态）、Ruinous Empathy（关心但不挑战，表面善意实则有害）、Obnoxious Aggression（挑战但不关心，损害关系）、Manipulative Insincerity（既不关心也不挑战，最糟糕的状态）。",
            "【Thanks for the Feedback 三种触发器】Douglas Stone 和 Sheila Heen 识别了阻碍接收反馈的三种触发器：Truth Triggers（认为反馈内容不对）、Relationship Triggers（认为给反馈的人不可信）、Identity Triggers（反馈威胁到自我认知）。",
            "【GROW 教练模型】John Whitmore 的 GROW 模型：Goal（目标）→ Reality（现实）→ Options（选项）→ Will（意愿）。Whitmore 强调'any dictator can use GROW'——框架本身不够，必须配合情商和真正的倾听。",
            "【教练的本质】Whitmore 指出教练不只是纠正错误，更是'guiding individuals to realize their potential'——引导个人实现潜力。需要主动倾听、开放式问题和建设性反馈。"
        ],
        keyDifficulties: [
            "【Ruinous Empathy 陷阱】最常见的反馈失败不是残忍，而是 Ruinous Empathy——因为害怕伤害关系而避免给出必要的建设性反馈，实际上阻碍了对方成长。",
            "【反馈触发器处理】Stone 和 Heen 指出'triggers can make the conversation about the triggers, rather than about the original feedback'——触发器会让对话偏离轨道。需要识别并重新聚焦到反馈本身。",
            "【Switchtracking 现象】Thanks for the Feedback 描述的'switchtracks'——双方各自谈论自己关心的问题，形成两个独白而非对话。需要一次处理一个议题。",
            "【教练 vs 告知的时机】不是所有情况都适合教练式对话。Whitmore 提醒不要机械使用 GROW，需要根据情境判断何时引导、何时直接告知。",
            "【GROW 的误用】Whitmore 警告不要'follow the model slavishly'——机械套用模型。框架只在情商基础上才有效，需要真正倾听而非走过场。"
        ],
        handsOnPath: [
            "用 Radical Candor 框架审视你最近的反馈：是否同时做到了关心个人和直接挑战？是否落入了 Ruinous Empathy？",
            "识别一位你一直避免给建设性反馈的团队成员，准备并进行一次 Radical Candor 对话。",
            "在下次 1:1 中实践 GROW 模型：从对方的目标出发，探索现实，生成选项，确认行动意愿。",
            "主动向团队成员请求对你的反馈，识别自己的反馈触发器（Truth/Relationship/Identity），练习接收反馈。",
            "阅读《The Coaching Habit》并实践其核心问题，特别是'And what else?'来深化对话。"
        ],
        selfCheck: [
            "你最近一次给出建设性反馈是什么时候？是否及时，还是累积了很久？",
            "你的反馈是否具体到情境、行为和影响（SBI 模型）？",
            "当收到批评性反馈时，你能识别自己的触发器类型吗？",
            "在 1:1 中，你说话和倾听的比例是多少？是否给对方足够空间？",
            "你是否有意识地区分何时使用教练式引导、何时直接告知？"
        ],
        extensions: [
            "深入学习《Thanks for the Feedback》，从接收反馈的角度提升能力。",
            "研究 SBI（Situation-Behavior-Impact）模型，让反馈更具体可执行。",
            "了解 Feedforward 方法——关注未来改进而非过去错误。",
            "学习非暴力沟通（NVC）框架，改善反馈的表达方式。"
        ],
        sourceUrls: [
            "https://www.radicalcandor.com/",
            "https://www.stoneandheen.com/thanks-feedback",
            "https://www.amazon.com/Coaching-Performance-Principles-Practice-Leadership/dp/185788535X"
        ]
    },
    "tm-5-3": {
        lessonId: "tm-5-3",
        background: [
            "【OKR 起源与定义】John Doerr 在《Measure What Matters》中介绍了 OKR（Objectives and Key Results）。Objective 是'clearly defined goal'，Key Results 是'measurable outcomes that benchmark and monitor the achievement'——目标要鼓舞人心，关键结果要脚踏实地、可衡量。",
            "【OKR 四大超能力】Doerr 定义 OKR 的四大超能力：Focus and commit to priorities（聚焦优先级）、Align and connect for teamwork（对齐协作）、Track for accountability（追踪问责）、Stretch for amazing results（挑战卓越）。",
            "【绩效管理革命】HBR 研究显示超过三分之一的美国公司已放弃传统年度评审。问题在于'accountability for past behavior rather than developing talent'——关注过去而非发展人才。约 70% 的跨国公司正转向频繁反馈模式。",
            "【校准会议的价值】绩效校准是多位经理讨论评级的过程，目的是'find common ground that makes consistent employee performance evaluations possible'——建立一致标准。研究显示 85% 的员工认为评估不公平。",
            "【偏见识别训练】HBR 实验显示，教授偏见识别后，针对有色人种的负面人格评价从 14% 降至 0%。需要警惕 188 种隐性偏见，包括宽容偏见、确认偏见、近因偏见等。"
        ],
        keyDifficulties: [
            "【目标量化挑战】很多工程工作难以量化。Doerr 建议每个周期限制 3-5 个 OKR，每个目标绑定 5 个以内的关键结果，确保聚焦而非分散。",
            "【OKR 与薪酬分离】Doerr 明确建议'OKRs should not be tied to compensation'——OKR 不应与薪酬挂钩，否则会导致保守目标设定。OKR 是工具而非武器。",
            "【校准会议的偏见风险】HBR 研究警告校准会议可能引入新偏见：锚定效应、首位发言者主导等。需要确保所有声音被听到，用数据驱动讨论。",
            "【年度评审周期太长】年度评审导致'feedback delays'——问题发现时已累积。需要更频繁的检查点，如季度 OKR 回顾。",
            "【艰难对话的勇气】处理绩效不达标员工需要勇气和技巧。HBR 指出很多公司用'third way'——季度多维度评估，平衡发展与问责。"
        ],
        handsOnPath: [
            "与团队一起设定下季度 OKR，确保 Objective 鼓舞人心、Key Results 可衡量可验证。检验是否符合'少即是多'原则。",
            "建立月度或季度中期检查机制，用 CFR（Conversations、Feedback、Recognition）补充 OKR 的持续性。",
            "参加或组织一次绩效校准会议，观察和改进评估一致性。会前准备数据仪表板，识别异常值。",
            "为有晋升潜力的团队成员制定发展计划，明确'已经在做下一级工作'的具体表现。",
            "培训团队识别常见偏见（宽容偏见、确认偏见、近因偏见），在下次评估中有意识规避。"
        ],
        selfCheck: [
            "团队的 OKR 是否与薪酬解绑？成员是否敢于设定挑战性目标？",
            "你是否定期进行绩效对话，而非只在年终？检查点频率是否足够？",
            "晋升决策的标准是否透明？是基于'已经在做下一级工作'还是对潜力的赌注？",
            "你的团队是否进行校准会议？不同经理的评估标准是否一致？",
            "在评估中，你是否警惕了近因偏见——过度重视最近表现而忽视全年贡献？"
        ],
        extensions: [
            "深入阅读《Measure What Matters》，学习 Intel 和 Google 的 OKR 实践案例。",
            "研究 CFR（Conversations、Feedback、Recognition）作为持续绩效管理的补充工具。",
            "了解 Netflix 的 360 度反馈机制和'Keeper Test'——如果这个人要离职，你会全力挽留吗？",
            "学习如何进行有效的晋升提名和答辩，包括收集 360 度证据和准备答辩材料。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221",
            "https://hbr.org/2016/10/the-performance-management-revolution",
            "https://lattice.com/articles/the-how-and-why-of-performance-review-calibration"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "tm-5-1": [
        {
            id: "tm-5-1-q1",
            question: "Engineering Ladders 框架的核心目的是什么？",
            options: [
                "提供一个晋升清单让员工打勾完成",
                "帮助管理者与直接下属进行有意义的职业发展对话",
                "统一所有公司的职级标准",
                "替代绩效评估流程"
            ],
            answer: 1,
            rationale: "Engineering Ladders 的目的是'allows software engineering managers to have meaningful conversations with their direct reports'——帮助进行有意义的职业发展对话，而非作为晋升清单。"
        },
        {
            id: "tm-5-1-q2",
            question: "Engineering Ladders 定义的五大成长维度不包括哪个？",
            options: [
                "Technology（技术）",
                "People（人员）",
                "Revenue（营收）",
                "Influence（影响力）"
            ],
            answer: 2,
            rationale: "五大维度是 Technology、System、People、Process、Influence，不包括 Revenue。这些维度覆盖了工程师成长的核心方面。"
        },
        {
            id: "tm-5-1-q3",
            question: "Dropbox 职业框架强调成功取决于什么？",
            options: [
                "完成清单上的所有项目",
                "展示 business impact（业务影响）",
                "工作年限",
                "技术证书数量"
            ],
            answer: 1,
            rationale: "Dropbox 强调框架'is not a promotion checklist'，成功取决于展示'business impact'而非打勾。"
        },
        {
            id: "tm-5-1-q4",
            question: "根据 CircleCI 的能力矩阵，反馈沟通协作占总能力的多少比例？",
            options: [
                "20%",
                "30%",
                "40%",
                "50%"
            ],
            answer: 2,
            rationale: "CircleCI 的矩阵中，反馈、沟通和协作合计占 40%，技术技能只占 20%，体现了软技能的重要性。"
        },
        {
            id: "tm-5-1-q5",
            question: "CircleCI 对职业路径的核心理念是什么？",
            options: [
                "管理是唯一的高级发展路径",
                "职业路径与人一样多元",
                "所有人应该走相同的路径",
                "技术路径是次要选择"
            ],
            answer: 1,
            rationale: "CircleCI 明确'career paths are as diverse as the people that work with us'，拒绝管理是唯一晋升路径的假设。"
        },
        {
            id: "tm-5-1-q6",
            question: "Engineering Ladders 建议晋升准备度需要什么条件？",
            options: [
                "完成特定项目",
                "持续数月在下一级别表现",
                "通过晋升考试",
                "获得所有同事的推荐"
            ],
            answer: 1,
            rationale: "Engineering Ladders 指出晋升准备度需要'performing at the next level consistently for several months'——持续表现而非一次性证明。"
        },
        {
            id: "tm-5-1-q7",
            question: "Engineering Ladders 关于个人能力分布的观点是什么？",
            options: [
                "优秀工程师在所有维度都强",
                "人们通常在某些领域更强、其他领域较弱",
                "能力分布不重要",
                "应该只关注最强的领域"
            ],
            answer: 1,
            rationale: "Engineering Ladders 指出'people are usually stronger in some areas and weaker in others'，这是正常的，框架应用于对话而非打分。"
        },
        {
            id: "tm-5-1-q8",
            question: "Dropbox 框架覆盖的四大支柱是什么？",
            options: [
                "Code、Review、Design、Deploy",
                "Results、Direction、Talent、Culture",
                "技术、管理、沟通、执行",
                "Planning、Development、Testing、Release"
            ],
            answer: 1,
            rationale: "Dropbox 的四大支柱是 Results（结果）、Direction（方向）、Talent（人才）、Culture（文化）。"
        },
        {
            id: "tm-5-1-q9",
            question: "CircleCI 在能力描述中使用什么语言风格？",
            options: [
                "使用'can do'（能做）",
                "使用'does'（做到）",
                "使用'might do'（可能做）",
                "使用'should do'（应该做）"
            ],
            answer: 1,
            rationale: "CircleCI 使用主动描述词'does'而非'can do'，确保清晰度——是已展示的行为而非潜在能力。"
        },
        {
            id: "tm-5-1-q10",
            question: "CircleCI 强调优秀工程师的定义是什么？",
            options: [
                "编码速度最快",
                "远超编码能力，包括协作反馈沟通",
                "Bug 最少",
                "工作时间最长"
            ],
            answer: 1,
            rationale: "CircleCI 强调'what makes a good engineer goes far beyond their coding skills'——技术能力只是一部分。"
        },
        {
            id: "tm-5-1-q11",
            question: "研究显示多少比例的员工认为绩效评估不公平？",
            options: [
                "55%",
                "65%",
                "75%",
                "85%"
            ],
            answer: 3,
            rationale: "研究显示 85% 的员工认为绩效评估不公平，因此考虑离职。这凸显了校准和透明度的重要性。"
        },
        {
            id: "tm-5-1-q12",
            question: "CircleCI 能力矩阵设计的五大原则不包括哪个？",
            options: [
                "一致性（Consistency）",
                "可理解性（Approachability）",
                "全面性（Comprehensiveness）",
                "清晰语言（Clear language）"
            ],
            answer: 2,
            rationale: "五大原则是 Consistency、Approachability、Simplicity、Clear language、Straightforward structure，强调简洁而非全面。"
        }
    ],
    "tm-5-2": [
        {
            id: "tm-5-2-q1",
            question: "Radical Candor 框架的两个核心维度是什么？",
            options: [
                "技术能力和管理能力",
                "关心个人和直接挑战",
                "正面反馈和负面反馈",
                "口头沟通和书面沟通"
            ],
            answer: 1,
            rationale: "Radical Candor 建立在 Care Personally（关心个人）+ Challenge Directly（直接挑战）两个维度上。"
        },
        {
            id: "tm-5-2-q2",
            question: "Ruinous Empathy 是指什么？",
            options: [
                "过度批评导致关系破裂",
                "关心对方但避免直接挑战，表面善意实则有害",
                "完全不关心对方",
                "只关注工作不关注人"
            ],
            answer: 1,
            rationale: "Ruinous Empathy 是关心但不挑战的象限，表面上善意但实际阻碍了对方成长。"
        },
        {
            id: "tm-5-2-q3",
            question: "《Thanks for the Feedback》识别的三种反馈触发器不包括哪个？",
            options: [
                "Truth Triggers（真相触发器）",
                "Relationship Triggers（关系触发器）",
                "Time Triggers（时间触发器）",
                "Identity Triggers（身份触发器）"
            ],
            answer: 2,
            rationale: "三种触发器是 Truth Triggers、Relationship Triggers、Identity Triggers，没有 Time Triggers。"
        },
        {
            id: "tm-5-2-q4",
            question: "GROW 模型中的 W 代表什么？",
            options: [
                "Work（工作）",
                "Will（意愿）",
                "Win（胜利）",
                "Way（方式）"
            ],
            answer: 1,
            rationale: "Whitmore 明确 W 代表'will'——承诺行动的意愿，而非其他含义。"
        },
        {
            id: "tm-5-2-q5",
            question: "John Whitmore 关于 GROW 模型使用的警告是什么？",
            options: [
                "GROW 模型已过时",
                "任何独裁者都可以使用 GROW——框架本身不够",
                "GROW 只适用于销售团队",
                "GROW 应该每次完整走完"
            ],
            answer: 1,
            rationale: "Whitmore 警告'any dictator can use GROW'——框架必须配合情商和真正的倾听才有效。"
        },
        {
            id: "tm-5-2-q6",
            question: "Kim Scott 关于 Radical Candor 的澄清是什么？",
            options: [
                "它是粗鲁的许可证",
                "它允许侵犯个人隐私",
                "它既不是粗鲁的借口，也不是侵犯隐私的许可",
                "它只适用于管理者"
            ],
            answer: 2,
            rationale: "Scott 强调 Radical Candor 'is not a license to act like a jerk'也'not an invitation to get creepily personal'。"
        },
        {
            id: "tm-5-2-q7",
            question: "《Thanks for the Feedback》描述的'switchtracks'现象是什么？",
            options: [
                "频繁更换话题",
                "双方各自谈论自己关心的问题，形成两个独白",
                "从正面转向负面反馈",
                "在不同会议间切换"
            ],
            answer: 1,
            rationale: "'Switchtracks'是指双方都在谈自己的议题而非对话，需要一次处理一个议题。"
        },
        {
            id: "tm-5-2-q8",
            question: "Whitmore 认为教练的本质是什么？",
            options: [
                "纠正错误",
                "引导个人实现潜力",
                "给出正确答案",
                "评估绩效"
            ],
            answer: 1,
            rationale: "Whitmore 指出教练是'guiding individuals to realize their potential'——不只是纠正，更是引导实现潜力。"
        },
        {
            id: "tm-5-2-q9",
            question: "Identity Triggers 是指什么？",
            options: [
                "认为反馈内容不对",
                "认为给反馈的人不可信",
                "反馈威胁到自我认知",
                "反馈时机不对"
            ],
            answer: 2,
            rationale: "Identity Triggers 是反馈触及到'我是谁'的核心认知，产生防御反应。"
        },
        {
            id: "tm-5-2-q10",
            question: "Manipulative Insincerity 在 Radical Candor 框架中是指什么？",
            options: [
                "关心且挑战",
                "关心但不挑战",
                "挑战但不关心",
                "既不关心也不挑战"
            ],
            answer: 3,
            rationale: "Manipulative Insincerity 是最糟糕的象限——既不真正关心对方，也不给出直接反馈。"
        },
        {
            id: "tm-5-2-q11",
            question: "Whitmore 关于机械使用 GROW 的警告是什么？",
            options: [
                "应该严格按顺序执行",
                "不要机械套用模型，问题类型比问题本身更重要",
                "每次都必须完整走完四个步骤",
                "GROW 应该由 HR 执行"
            ],
            answer: 1,
            rationale: "Whitmore 警告不要'follow the model slavishly'——框架只是指引问题类型的工具。"
        },
        {
            id: "tm-5-2-q12",
            question: "Stone 和 Heen 关于反馈触发器的观点是什么？",
            options: [
                "触发器无法被识别",
                "触发器会让对话偏离原本的反馈内容",
                "触发器总是有益的",
                "只有接收者有触发器"
            ],
            answer: 1,
            rationale: "'Triggers can make the conversation about the triggers, rather than about the original feedback'——需要识别并重新聚焦。"
        }
    ],
    "tm-5-3": [
        {
            id: "tm-5-3-q1",
            question: "John Doerr 定义的 OKR 四大超能力不包括哪个？",
            options: [
                "Focus and commit to priorities（聚焦优先级）",
                "Align and connect for teamwork（对齐协作）",
                "Compete and win against rivals（竞争取胜）",
                "Stretch for amazing results（挑战卓越）"
            ],
            answer: 2,
            rationale: "四大超能力是 Focus、Align、Track、Stretch，不包括 Compete。OKR 关注内部对齐而非外部竞争。"
        },
        {
            id: "tm-5-3-q2",
            question: "Doerr 关于 OKR 与薪酬的建议是什么？",
            options: [
                "OKR 应该与奖金直接挂钩",
                "OKR 不应与薪酬挂钩",
                "只有 Key Results 应该挂钩",
                "只有管理层的 OKR 应该挂钩"
            ],
            answer: 1,
            rationale: "Doerr 明确建议'OKRs should not be tied to compensation'——否则会导致保守目标设定。"
        },
        {
            id: "tm-5-3-q3",
            question: "HBR 研究显示有多少比例的美国公司已放弃传统年度评审？",
            options: [
                "约 10%",
                "超过三分之一",
                "约一半",
                "超过 70%"
            ],
            answer: 1,
            rationale: "HBR 研究显示超过三分之一的美国公司已放弃传统年度评审，转向更频繁的反馈模式。"
        },
        {
            id: "tm-5-3-q4",
            question: "绩效校准会议的核心目的是什么？",
            options: [
                "减少评估次数",
                "建立一致的评估标准",
                "增加管理层权力",
                "简化流程"
            ],
            answer: 1,
            rationale: "校准的目的是'find common ground that makes consistent employee performance evaluations possible'——建立一致标准。"
        },
        {
            id: "tm-5-3-q5",
            question: "Doerr 建议每个周期应该设定多少个 OKR？",
            options: [
                "1-2 个",
                "3-5 个",
                "6-8 个",
                "10 个以上"
            ],
            answer: 1,
            rationale: "Doerr 建议每个周期限制 3-5 个 OKR，每个目标绑定 5 个以内的关键结果，确保聚焦。"
        },
        {
            id: "tm-5-3-q6",
            question: "HBR 实验显示偏见识别训练后，针对有色人种的负面人格评价变化如何？",
            options: [
                "从 30% 降至 15%",
                "从 14% 降至 0%",
                "从 50% 降至 25%",
                "没有变化"
            ],
            answer: 1,
            rationale: "HBR 实验显示偏见识别训练后，针对有色人种的负面人格评价从 14% 降至 0%。"
        },
        {
            id: "tm-5-3-q7",
            question: "传统年度评审的主要问题是什么？",
            options: [
                "太频繁",
                "关注过去而非发展人才",
                "太简单",
                "员工参与度太高"
            ],
            answer: 1,
            rationale: "HBR 指出问题在于'accountability for past behavior rather than developing talent'——关注过去而非发展。"
        },
        {
            id: "tm-5-3-q8",
            question: "CFR 作为 OKR 的补充工具代表什么？",
            options: [
                "Code、Feature、Release",
                "Conversations、Feedback、Recognition",
                "Clarity、Focus、Results",
                "Check、Fix、Review"
            ],
            answer: 1,
            rationale: "CFR 代表 Conversations（对话）、Feedback（反馈）、Recognition（认可），是持续绩效管理的工具。"
        },
        {
            id: "tm-5-3-q9",
            question: "校准会议可能引入的偏见风险包括什么？",
            options: [
                "过于公平",
                "锚定效应和首位发言者主导",
                "评估太少",
                "时间太长"
            ],
            answer: 1,
            rationale: "HBR 警告校准会议可能引入锚定效应、首位发言者主导等新偏见，需要确保所有声音被听到。"
        },
        {
            id: "tm-5-3-q10",
            question: "Doerr 对 Objective 和 Key Results 的区分是什么？",
            options: [
                "两者都应该可量化",
                "Objective 鼓舞人心，Key Results 可衡量可验证",
                "两者都应该抽象",
                "Objective 可量化，Key Results 抽象"
            ],
            answer: 1,
            rationale: "Doerr 定义 Objective 是鼓舞人心的目标，Key Results 是'measurable outcomes'——脚踏实地可衡量。"
        },
        {
            id: "tm-5-3-q11",
            question: "HBR 描述的'third way'绩效管理方法是什么？",
            options: [
                "完全取消评估",
                "季度多维度评估，平衡发展与问责",
                "每日评估",
                "只有年度评估"
            ],
            answer: 1,
            rationale: "HBR 描述的'third way'是季度在多个维度评估，平衡发展与问责。"
        },
        {
            id: "tm-5-3-q12",
            question: "研究显示需要警惕的 188 种隐性偏见包括哪些？",
            options: [
                "技术偏见、管理偏见、沟通偏见",
                "宽容偏见、确认偏见、近因偏见",
                "性别偏见是唯一需要注意的",
                "偏见无法被识别"
            ],
            answer: 1,
            rationale: "需要警惕宽容偏见（高估相似人）、确认偏见（寻找支持已有观点的信息）、近因偏见（过度重视最近事件）等。"
        }
    ]
}
