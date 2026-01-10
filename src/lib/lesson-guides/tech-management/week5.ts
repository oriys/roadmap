import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week5Guides: Record<string, LessonGuide> = {
    "tm-5-1": {
        lessonId: "tm-5-1",
        background: [
            "【能力模型定义】技术能力模型是对各级别工程师应具备能力的系统化描述。好的能力模型应该覆盖技术深度、系统思维、沟通协作、领导力等多个维度。",
            "【职级体系设计】典型的工程师职级体系：初级（Junior）→ 中级（Mid）→ 高级（Senior）→ Staff → Principal → Distinguished。每级应有明确的能力期望和影响范围。",
            "【影响范围递进】《Staff Engineer》指出职级的核心区分在于影响范围：Junior/Mid 影响自己的任务，Senior 影响团队，Staff 影响多个团队，Principal 影响整个组织。",
            "【Dropbox 案例】Dropbox 的 Engineering Career Framework 是公开的优秀案例，将能力分为：Results、Direction、Talent、Culture 四个维度，每个维度有6个级别的详细描述。",
            "【双梯制】成熟的技术公司采用双梯制（Dual Ladder）：IC（Individual Contributor）和 Management 两条平行路径，允许工程师在不做管理的情况下获得晋升。"
        ],
        keyDifficulties: [
            "【标准模糊】很多能力模型的描述过于抽象，如'展示技术领导力'——什么叫展示？什么叫技术领导力？需要具体行为示例。",
            "【级别通胀】不同公司的同名职级可能差异很大（Title Inflation），在建立内部体系时需要与市场校准。",
            "【评估一致性】不同经理对同一标准的理解可能不同，需要定期校准（Calibration）以确保公平性。",
            "【路径单一】如果只有管理一条晋升路径，会迫使优秀工程师做不适合的角色选择。"
        ],
        handsOnPath: [
            "1. 研究案例：阅读 Dropbox、Etsy、CircleCI 等公司公开的 Engineering Ladder",
            "2. 能力盘点：为你的团队每位成员进行能力盘点，识别优势和发展领域",
            "3. 期望对齐：与每位团队成员讨论其当前级别的期望和下一级别的差距",
            "4. 模型设计：如果团队还没有能力模型，起草一个初版与同僚讨论"
        ],
        selfCheck: [
            "你能清晰描述团队中每个职级的能力期望吗？",
            "团队成员是否了解晋升到下一级需要什么？",
            "你的能力模型是否有具体的行为示例？",
            "IC 和管理是否有平行的发展路径？",
            "不同经理对能力标准的理解是否一致？"
        ],
        extensions: [
            "研究 Progression.fyi 网站收集的各公司能力模型",
            "了解 Radford 等第三方薪酬调研公司的职级对标方法",
            "学习如何设计公平的晋升评审流程",
            "阅读《Staff Engineer》了解高级 IC 的能力要求"
        ],
        sourceUrls: [
            "https://dropbox.github.io/dbx-career-framework/",
            "https://staffeng.com/book",
            "https://www.progression.fyi/"
        ]
    },
    "tm-5-2": {
        lessonId: "tm-5-2",
        background: [
            "【反馈重要性】Gallup 研究表明，经常收到反馈的员工敬业度高3倍。反馈是成长的燃料，缺乏反馈会导致盲点和停滞。",
            "【Radical Candor】Kim Scott 的框架强调好的反馈需要同时具备'关心个人'和'直接挑战'。只有挑战没有关心是残忍；只有关心没有挑战是有害的。",
            "【SBI 模型】反馈的结构化方法：Situation（什么情境）→ Behavior（什么行为）→ Impact（什么影响）。避免泛泛而谈如'你做得很好'。",
            "【教练式辅导】《The Coaching Habit》提出7个核心问题，如'What's on your mind?'（你在想什么？）、'And what else?'（还有呢？）引导对方自主思考。",
            "【即时反馈】反馈应该及时，不要等到年度评审。Manager Tools 建议在事件发生后24-48小时内给出反馈，记忆最清晰。"
        ],
        keyDifficulties: [
            "【回避冲突】很多管理者害怕给负面反馈，导致问题积累。需要认识到及时反馈是对员工的尊重。",
            "【反馈过载】过于频繁或过于详细的反馈可能让人疲惫，需要找到合适的频率和粒度。",
            "【接受度问题】即使反馈方式正确，接收方也可能防御性反应。需要创造心理安全的环境。",
            "【教练 vs 告知】教练式辅导需要耐心引导，有时候直接告知更高效。需要判断何时用哪种方式。"
        ],
        handsOnPath: [
            "1. SBI 练习：用 SBI 模型为团队成员准备一条具体的反馈",
            "2. 教练对话：在下一次1:1中尝试使用'And what else?'问题深入探讨",
            "3. 反馈请求：主动向团队成员请求对你的反馈，建立双向反馈文化",
            "4. 阅读《The Coaching Habit》并实践书中的问题框架"
        ],
        selfCheck: [
            "你最近一次给出建设性反馈是什么时候？",
            "你的反馈是否具体到行为和影响？",
            "团队成员是否敢于给你反馈？",
            "你在1:1中倾听和提问的比例是多少？",
            "你是否有意识地区分教练和告知两种模式？"
        ],
        extensions: [
            "学习《Thanks for the Feedback》了解如何接收反馈",
            "研究 GROW 模型进行结构化教练对话",
            "了解 Feedforward 作为反馈的补充方法",
            "学习非暴力沟通（NVC）改善反馈表达"
        ],
        sourceUrls: [
            "https://www.radicalcandor.com/the-book/",
            "https://www.amazon.com/Coaching-Habit-Less-Change-Forever/dp/0978440749",
            "https://www.manager-tools.com/2005/07/giving-effective-feedback"
        ]
    },
    "tm-5-3": {
        lessonId: "tm-5-3",
        background: [
            "【绩效管理目的】绩效管理不只是年终打分，而是持续的目标对齐、反馈和发展过程。好的绩效管理帮助员工成长，而非只是评判。",
            "【OKR 框架】Intel 和 Google 推广的 OKR（Objectives and Key Results）将目标分解为可衡量的关键结果，强调对齐和透明。",
            "【校准会议】Calibration 是确保评估公平的关键机制。多位经理一起讨论各自团队成员的评级，消除个人偏见和标准差异。",
            "【晋升标准】《An Elegant Puzzle》建议晋升应该是'已经在做下一级工作'的认可，而非对未来潜力的赌注。",
            "【绩效改进计划】PIP（Performance Improvement Plan）是处理绩效问题的正式机制。应该清晰定义期望、时间框架和支持措施。"
        ],
        keyDifficulties: [
            "【目标量化】很多工程工作难以量化，如何设定可衡量的 Key Results 是挑战。",
            "【反馈延迟】年度评审周期太长，问题发现时往往已经累积。需要更频繁的检查点。",
            "【艰难对话】处理绩效不达标的员工需要勇气和技巧，既要直面问题，又要保持尊严。",
            "【晋升政治】晋升决策可能受到关系和可见度影响，需要建立透明公平的流程。"
        ],
        handsOnPath: [
            "1. OKR 设定：与团队成员一起设定下季度的 OKR，确保可衡量",
            "2. 中期检查：建立月度或季度中期检查机制，不要等到年终",
            "3. 校准参与：参加或组织一次绩效校准会议",
            "4. 晋升准备：为有潜力晋升的团队成员制定发展计划"
        ],
        selfCheck: [
            "团队成员是否清楚知道对他们的绩效期望？",
            "你是否定期进行绩效对话，而非只在年终？",
            "晋升决策的标准是否透明公开？",
            "你是否参与过绩效校准会议？",
            "处理绩效问题时，你是否及时直面？"
        ],
        extensions: [
            "阅读《Measure What Matters》深入了解 OKR",
            "研究 Netflix 的 360 度反馈机制",
            "了解 Continuous Performance Management 的实践",
            "学习如何进行有效的晋升提名和答辩"
        ],
        sourceUrls: [
            "https://www.amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221",
            "https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management/dp/1732265186",
            "https://rework.withgoogle.com/guides/set-goals-with-okrs/steps/introduction/"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "tm-5-1": [
        {
            id: "tm-5-1-q1",
            question: "技术能力模型应该覆盖哪些维度？",
            options: [
                "只有技术深度",
                "技术深度、系统思维、沟通协作、领导力等多个维度",
                "只有编码能力",
                "只有管理能力"
            ],
            answer: 1,
            rationale: "好的能力模型应该是多维度的，覆盖技术深度、系统思维、沟通协作、领导力等。"
        },
        {
            id: "tm-5-1-q2",
            question: "根据《Staff Engineer》，职级的核心区分在于什么？",
            options: [
                "工作年限",
                "影响范围",
                "代码量",
                "职位名称"
            ],
            answer: 1,
            rationale: "《Staff Engineer》指出职级的核心区分在于影响范围，从个人任务到团队再到整个组织。"
        },
        {
            id: "tm-5-1-q3",
            question: "Dropbox 的 Engineering Career Framework 将能力分为哪四个维度？",
            options: [
                "Code、Review、Design、Deploy",
                "Results、Direction、Talent、Culture",
                "Plan、Do、Check、Act",
                "技术、沟通、领导、管理"
            ],
            answer: 1,
            rationale: "Dropbox 将能力分为 Results、Direction、Talent、Culture 四个维度。"
        },
        {
            id: "tm-5-1-q4",
            question: "双梯制（Dual Ladder）的目的是什么？",
            options: [
                "增加管理岗位",
                "允许工程师不做管理也能晋升",
                "减少职级数量",
                "统一所有人的发展路径"
            ],
            answer: 1,
            rationale: "双梯制提供 IC 和 Management 两条平行路径，允许工程师在不做管理的情况下获得晋升。"
        },
        {
            id: "tm-5-1-q5",
            question: "Senior 工程师的影响范围通常是什么？",
            options: [
                "自己的任务",
                "整个团队",
                "多个团队",
                "整个公司"
            ],
            answer: 1,
            rationale: "Senior 工程师的影响范围通常是整个团队，而 Staff 影响多个团队，Principal 影响组织。"
        },
        {
            id: "tm-5-1-q6",
            question: "Title Inflation 问题指的是什么？",
            options: [
                "职位名称太长",
                "不同公司同名职级差异很大",
                "职级数量太多",
                "晋升太快"
            ],
            answer: 1,
            rationale: "Title Inflation 指不同公司的同名职级可能差异很大，需要与市场校准。"
        },
        {
            id: "tm-5-1-q7",
            question: "为什么能力模型需要具体的行为示例？",
            options: [
                "为了增加文档长度",
                "避免抽象描述导致理解不一致",
                "满足合规要求",
                "方便外部对标"
            ],
            answer: 1,
            rationale: "抽象描述如'展示技术领导力'容易导致理解不一致，需要具体行为示例。"
        },
        {
            id: "tm-5-1-q8",
            question: "Calibration 的目的是什么？",
            options: [
                "增加评估次数",
                "确保不同经理对标准理解一致",
                "减少晋升名额",
                "简化评估流程"
            ],
            answer: 1,
            rationale: "Calibration 确保不同经理对同一标准的理解一致，保证评估的公平性。"
        },
        {
            id: "tm-5-1-q9",
            question: "如果只有管理一条晋升路径会怎样？",
            options: [
                "所有人都能晋升",
                "优秀工程师被迫做不适合的角色",
                "晋升更容易",
                "团队更稳定"
            ],
            answer: 1,
            rationale: "单一的管理晋升路径会迫使优秀工程师做不适合的角色选择，可能失去技术人才。"
        },
        {
            id: "tm-5-1-q10",
            question: "Progression.fyi 网站收集的是什么内容？",
            options: [
                "公司财报",
                "各公司的能力模型和职级体系",
                "面试题目",
                "薪资数据"
            ],
            answer: 1,
            rationale: "Progression.fyi 收集了各公司公开的能力模型和职级体系，是很好的参考资源。"
        },
        {
            id: "tm-5-1-q11",
            question: "典型的工程师职级体系最高级别通常是什么？",
            options: [
                "Senior",
                "Staff",
                "Distinguished",
                "Director"
            ],
            answer: 2,
            rationale: "典型的 IC 职级体系最高是 Distinguished，通常是公司级别的技术权威。"
        },
        {
            id: "tm-5-1-q12",
            question: "能力盘点的目的是什么？",
            options: [
                "决定谁应该被解雇",
                "识别每位成员的优势和发展领域",
                "分配年终奖金",
                "完成 HR 的要求"
            ],
            answer: 1,
            rationale: "能力盘点帮助管理者了解团队成员的优势和发展领域，为发展规划提供依据。"
        }
    ],
    "tm-5-2": [
        {
            id: "tm-5-2-q1",
            question: "根据 Gallup 研究，经常收到反馈的员工敬业度高多少？",
            options: [
                "1.5倍",
                "2倍",
                "3倍",
                "4倍"
            ],
            answer: 2,
            rationale: "Gallup 研究表明，经常收到反馈的员工敬业度高3倍。"
        },
        {
            id: "tm-5-2-q2",
            question: "Radical Candor 框架强调什么？",
            options: [
                "只需要直接挑战",
                "只需要关心个人",
                "同时具备关心个人和直接挑战",
                "既不关心也不挑战"
            ],
            answer: 2,
            rationale: "Radical Candor 强调好的反馈需要同时具备'关心个人'和'直接挑战'。"
        },
        {
            id: "tm-5-2-q3",
            question: "SBI 模型代表什么？",
            options: [
                "Strategy-Business-Impact",
                "Situation-Behavior-Impact",
                "System-Build-Integrate",
                "Start-Begin-Implement"
            ],
            answer: 1,
            rationale: "SBI 模型代表 Situation（情境）→ Behavior（行为）→ Impact（影响）。"
        },
        {
            id: "tm-5-2-q4",
            question: "Manager Tools 建议反馈应该在事件发生后多久内给出？",
            options: [
                "1小时内",
                "24-48小时内",
                "一周内",
                "年终评审时"
            ],
            answer: 1,
            rationale: "Manager Tools 建议在事件发生后24-48小时内给出反馈，此时记忆最清晰。"
        },
        {
            id: "tm-5-2-q5",
            question: "《The Coaching Habit》提出的核心问题之一是什么？",
            options: [
                "你错在哪里？",
                "And what else?（还有呢？）",
                "你应该这样做",
                "为什么没完成？"
            ],
            answer: 1,
            rationale: "'And what else?'是《The Coaching Habit》的核心问题之一，帮助深入探讨。"
        },
        {
            id: "tm-5-2-q6",
            question: "只有关心没有挑战的反馈被称为什么？",
            options: [
                "Radical Candor",
                "Ruinous Empathy（有害的同理心）",
                "Obnoxious Aggression",
                "Manipulative Insincerity"
            ],
            answer: 1,
            rationale: "只有关心没有挑战被称为 Ruinous Empathy，表面上善意但实际有害。"
        },
        {
            id: "tm-5-2-q7",
            question: "为什么很多管理者害怕给负面反馈？",
            options: [
                "公司政策不允许",
                "害怕冲突和破坏关系",
                "不知道如何表达",
                "以上都对"
            ],
            answer: 3,
            rationale: "管理者回避负面反馈的原因包括害怕冲突、担心破坏关系、不知道如何表达等。"
        },
        {
            id: "tm-5-2-q8",
            question: "教练式辅导和直接告知的区别是什么？",
            options: [
                "没有区别",
                "教练引导对方思考，告知直接给出答案",
                "教练更快，告知更慢",
                "教练用于正面反馈，告知用于负面反馈"
            ],
            answer: 1,
            rationale: "教练式辅导通过提问引导对方自主思考，告知则直接给出答案或建议。"
        },
        {
            id: "tm-5-2-q9",
            question: "反馈过载的问题是什么？",
            options: [
                "反馈太少",
                "过于频繁或详细的反馈让人疲惫",
                "反馈不够具体",
                "反馈时机不对"
            ],
            answer: 1,
            rationale: "过于频繁或过于详细的反馈可能让人疲惫，需要找到合适的频率和粒度。"
        },
        {
            id: "tm-5-2-q10",
            question: "建立双向反馈文化需要什么？",
            options: [
                "只给下属反馈",
                "只接受上级反馈",
                "管理者主动请求对自己的反馈",
                "等待下属主动反馈"
            ],
            answer: 2,
            rationale: "建立双向反馈文化需要管理者主动请求对自己的反馈，以身作则。"
        },
        {
            id: "tm-5-2-q11",
            question: "《Thanks for the Feedback》这本书主要讲什么？",
            options: [
                "如何给反馈",
                "如何接收反馈",
                "如何避免反馈",
                "如何评估员工"
            ],
            answer: 1,
            rationale: "《Thanks for the Feedback》专注于如何接收反馈，是对给反馈技巧的补充。"
        },
        {
            id: "tm-5-2-q12",
            question: "GROW 模型用于什么？",
            options: [
                "绩效评估",
                "结构化教练对话",
                "项目管理",
                "招聘面试"
            ],
            answer: 1,
            rationale: "GROW（Goal-Reality-Options-Will）是进行结构化教练对话的模型。"
        }
    ],
    "tm-5-3": [
        {
            id: "tm-5-3-q1",
            question: "绩效管理的真正目的是什么？",
            options: [
                "年终打分",
                "持续的目标对齐、反馈和发展",
                "决定奖金分配",
                "记录员工表现"
            ],
            answer: 1,
            rationale: "绩效管理不只是年终打分，而是持续的目标对齐、反馈和发展过程。"
        },
        {
            id: "tm-5-3-q2",
            question: "OKR 代表什么？",
            options: [
                "Objectives and Key Requirements",
                "Objectives and Key Results",
                "Operations and Key Resources",
                "Outcomes and Key Responsibilities"
            ],
            answer: 1,
            rationale: "OKR 代表 Objectives and Key Results（目标和关键结果）。"
        },
        {
            id: "tm-5-3-q3",
            question: "根据《An Elegant Puzzle》，晋升应该是什么的认可？",
            options: [
                "未来的潜力",
                "已经在做下一级工作",
                "工作年限",
                "人际关系"
            ],
            answer: 1,
            rationale: "《An Elegant Puzzle》建议晋升应该是'已经在做下一级工作'的认可。"
        },
        {
            id: "tm-5-3-q4",
            question: "Calibration 会议的作用是什么？",
            options: [
                "增加工作量",
                "消除个人偏见和标准差异",
                "减少晋升名额",
                "简化评估流程"
            ],
            answer: 1,
            rationale: "Calibration 是多位经理一起讨论评级，消除个人偏见和标准差异。"
        },
        {
            id: "tm-5-3-q5",
            question: "PIP 代表什么？",
            options: [
                "Personal Improvement Program",
                "Performance Improvement Plan",
                "Project Implementation Plan",
                "People Integration Process"
            ],
            answer: 1,
            rationale: "PIP 代表 Performance Improvement Plan（绩效改进计划）。"
        },
        {
            id: "tm-5-3-q6",
            question: "年度评审周期太长的问题是什么？",
            options: [
                "评审太频繁",
                "问题发现时往往已经累积",
                "员工太忙",
                "没有问题"
            ],
            answer: 1,
            rationale: "年度评审周期太长导致问题发现时往往已经累积，需要更频繁的检查点。"
        },
        {
            id: "tm-5-3-q7",
            question: "OKR 框架最先由哪家公司推广？",
            options: [
                "Google",
                "Intel",
                "Microsoft",
                "Amazon"
            ],
            answer: 1,
            rationale: "OKR 最早由 Intel 的 Andy Grove 创立，后被 Google 推广。"
        },
        {
            id: "tm-5-3-q8",
            question: "很多工程工作难以设定可衡量目标的原因是什么？",
            options: [
                "工程师不配合",
                "工作性质难以量化",
                "目标太多",
                "时间不够"
            ],
            answer: 1,
            rationale: "很多工程工作如代码质量、技术债务治理等难以直接量化。"
        },
        {
            id: "tm-5-3-q9",
            question: "处理绩效不达标员工需要什么？",
            options: [
                "忽视问题",
                "勇气和技巧，直面问题同时保持尊严",
                "立即解雇",
                "降低标准"
            ],
            answer: 1,
            rationale: "处理绩效问题需要勇气和技巧，既要直面问题，又要保持对方尊严。"
        },
        {
            id: "tm-5-3-q10",
            question: "《Measure What Matters》这本书主要讲什么？",
            options: [
                "财务管理",
                "OKR 方法论",
                "项目管理",
                "人员招聘"
            ],
            answer: 1,
            rationale: "《Measure What Matters》由 John Doerr 撰写，深入介绍 OKR 方法论。"
        },
        {
            id: "tm-5-3-q11",
            question: "晋升政治化的主要原因是什么？",
            options: [
                "名额太少",
                "决策受关系和可见度影响，流程不透明",
                "标准太高",
                "竞争太激烈"
            ],
            answer: 1,
            rationale: "晋升政治化通常是因为决策受到关系和可见度影响，缺乏透明公平的流程。"
        },
        {
            id: "tm-5-3-q12",
            question: "PIP 应该包含什么内容？",
            options: [
                "只有期望",
                "期望、时间框架和支持措施",
                "只有惩罚措施",
                "只有时间框架"
            ],
            answer: 1,
            rationale: "PIP 应该清晰定义期望、时间框架和支持措施，帮助员工改进。"
        }
    ]
}
