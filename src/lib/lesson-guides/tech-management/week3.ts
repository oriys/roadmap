import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "tm-3-1": {
        lessonId: "tm-3-1",
        background: [
            "【杠杆率概念】Andy Grove 在《High Output Management》中提出：管理者的产出 = 组织的产出。关键是识别'高杠杆活动'——那些能产生倍数效应的管理行为。",
            "【三类低效活动】Will Larson 识别了三类低效活动：1) Snacking（零食式工作）——容易但低影响力；2) Preening（装饰性工作）——高可见但低价值；3) Chasing Ghosts（追逐幻影）——套用旧经验于新环境。",
            "【高杠杆活动清单】三个最高杠杆的管理活动：1) 培养团队——指导和辅导比招聘同样重要；2) 编辑优化——做出小改变产生大影响；3) 推进项目完成——将陷入困境的工作转变为可交付成果。",
            "【唯你能做】最大的杠杆机会是'如果你不做就不会发生'的工作。这类工作往往不紧急但极其重要。",
            "【生存优先】当公司面临存亡风险时，应立即聚焦于生存性问题，这时其他优化都可以暂时搁置。"
        ],
        keyDifficulties: [
            "【识别陷阱】很多管理者陷入'忙碌但不重要'的陷阱。需要定期审视时间分配，问自己'这件事如果不做会怎样'。",
            "【放弃感】放弃某些工作可能带来内疚感，需要认识到专注于高价值活动是更负责任的选择。",
            "【紧急vs重要】紧急事务总是抢占注意力，但真正重要的事情往往不紧急。需要刻意保护时间。"
        ],
        handsOnPath: [
            "1. 时间审计：记录一周的时间使用，按杠杆率分类每项活动",
            "2. 识别'唯你能做'的工作：列出只有你能完成的任务",
            "3. 清理低价值活动：找出3项可以停止或授权的工作",
            "4. 阅读《High Output Management》第一部分"
        ],
        selfCheck: [
            "你能列出过去一周的三个最高杠杆活动吗？",
            "有哪些工作是'如果你不做就不会发生'的？",
            "你花在'零食式工作'上的时间有多少？"
        ],
        extensions: [
            "研究 Eisenhower 矩阵区分紧急和重要",
            "学习 Getting Things Done 方法论",
            "了解 Deep Work 概念"
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
            "【双轨时间】Paul Graham 提出 Maker's Schedule vs Manager's Schedule：创造者需要大块连续时间，管理者以小时为单位切换任务。一场会议会摧毁整个下午的深度工作。",
            "【会议成本】对创造者来说，会议的真实成本远超会议时长本身，因为它打断了深度工作流，需要额外时间恢复状态。",
            "【办公时间】Y Combinator 采用固定办公时间制度，将所有会议安排在工作日末尾，保护核心工作时间。",
            "【Amazon 6页备忘录】Jeff Bezos 要求用6页叙述式备忘录代替 PPT，会议开始先沉默阅读，确保深度思考。"
        ],
        keyDifficulties: [
            "【会议过载】管理者容易被会议淹没，需要主动管理日程而非被动接受。",
            "【取消困难】取消会议可能得罪人，但低效会议更损害所有人的时间。",
            "【准备不足】很多会议效率低是因为准备不充分，需要建立会前准备机制。"
        ],
        handsOnPath: [
            "1. 会议审计：列出所有定期会议，评估每个会议的必要性",
            "2. 设立无会议时间块：在日历中保护至少2小时连续时间",
            "3. 会前准备：为下一个重要会议准备议程并提前发送",
            "4. 试验取消一个可能不必要的会议"
        ],
        selfCheck: [
            "你的会议时间占工作时间的比例是多少？",
            "有多少会议是你主动发起的 vs 被动参加的？",
            "你有保护的深度工作时间吗？"
        ],
        extensions: [
            "研究 Cal Newport 的 Deep Work 方法",
            "学习会议引导技巧",
            "了解异步沟通最佳实践"
        ],
        sourceUrls: [
            "https://www.amazon.com/Read-This-Before-Our-Next/dp/1989603173",
            "http://www.paulgraham.com/makersschedule.html",
            "https://writingcooperative.com/the-anatomy-of-an-amazon-6-pager-fc79f31a41c9"
        ]
    },
    "tm-3-3": {
        lessonId: "tm-3-3",
        background: [
            "【授权定义】有效授权不是'放手不管'，而是'明确预期、提供支持、跟进结果'的系统性过程。",
            "【四项策略】HBR 提出四项授权策略：1) 解释原因和重要性；2) 激发承诺，明确期望；3) 在合适的层级参与；4) 选择性地说'是'或'否'。",
            "【核心悖论】领导者必须'更重要但更少参与'。忙碌不等于重要——参与意味着亲自做，重要意味着使他人成功。",
            "【Turn the Ship Around】David Marquet 的领导力模型：从'领导者-追随者'转向'领导者-领导者'，通过授权创造更多领导者。"
        ],
        keyDifficulties: [
            "【放手焦虑】担心下属做不好是授权最大的障碍。需要接受'足够好'而非'完美'。",
            "【微观管理】授权后过度干预会适得其反，削弱下属信心和能力。",
            "【选人困难】选择合适的授权对象需要对团队成员能力和意愿的了解。"
        ],
        handsOnPath: [
            "1. 授权清单：列出你目前所有的工作，标记可以授权的项目",
            "2. 选择一项工作完整授权给团队成员",
            "3. 建立跟进机制：明确检查点但不微观管理",
            "4. 与被授权者沟通参与程度偏好"
        ],
        selfCheck: [
            "过去一个月你授权了哪些工作？效果如何？",
            "你的直接下属是否有足够的决策自主权？",
            "你是否知道每位团队成员的成长意愿和能力水平？"
        ],
        extensions: [
            "学习 Situational Leadership 模型",
            "研究《Turn the Ship Around》的领导力方法",
            "了解 RACI 矩阵明确职责"
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
            question: "Andy Grove 提出的管理者产出公式是什么？",
            options: ["管理者产出 = 个人工作量", "管理者产出 = 组织的产出", "管理者产出 = 会议数量", "管理者产出 = 团队规模"],
            answer: 1,
            rationale: "Andy Grove 在《High Output Management》中提出管理者的产出等于组织的产出。"
        },
        {
            id: "tm-3-1-q2",
            question: "'Snacking'（零食式工作）的特点是什么？",
            options: ["困难但高价值", "容易但低影响力", "需要团队协作", "需要长期投入"],
            answer: 1,
            rationale: "Snacking 指容易但低影响力的工作，虽然提供成就感但缺乏真正价值。"
        },
        {
            id: "tm-3-1-q3",
            question: "三个最高杠杆的管理活动是什么？",
            options: ["开会、写报告、做演示", "培养团队、编辑优化、推进项目完成", "招聘、考核、辞退", "规划、执行、复盘"],
            answer: 1,
            rationale: "Will Larson 提出三个高杠杆活动：培养团队、编辑优化、推进项目完成。"
        },
        {
            id: "tm-3-1-q4",
            question: "最大的杠杆机会是什么类型的工作？",
            options: ["最紧急的工作", "如果你不做就不会发生的工作", "最有趣的工作", "领导指派的工作"],
            answer: 1,
            rationale: "最大的杠杆机会是'如果你不做就不会发生'的工作。"
        },
        {
            id: "tm-3-1-q5",
            question: "'Preening'（装饰性工作）的问题是什么？",
            options: ["太难做", "低影响但高可见，常被误认为高价值", "需要太多人参与", "周期太长"],
            answer: 1,
            rationale: "Preening 是低影响力但高可见度的工作，常被误认为高价值，会分散精力。"
        },
        {
            id: "tm-3-1-q6",
            question: "当公司面临存亡风险时应该怎么做？",
            options: ["继续日常工作", "立即聚焦于生存性问题", "开始找新工作", "等待高层决策"],
            answer: 1,
            rationale: "Will Larson 强调当公司面临存亡风险时，应立即聚焦于生存性问题。"
        },
        {
            id: "tm-3-1-q7",
            question: "'Chasing Ghosts'（追逐幻影）指什么？",
            options: ["追求不存在的目标", "将前公司经验套用到新环境", "追求完美主义", "追逐市场热点"],
            answer: 1,
            rationale: "Chasing Ghosts 指新晋管理者将前公司经验套用到新环境，投入资源于实际无意义的项目。"
        },
        {
            id: "tm-3-1-q8",
            question: "高杠杆活动中的'编辑优化'指什么？",
            options: ["编辑文档", "利用特权和经验做出小改变产生大影响", "优化代码", "编辑流程"],
            answer: 1,
            rationale: "编辑优化指利用管理者的特权和经验做出小改变，产生大影响。"
        },
        {
            id: "tm-3-1-q9",
            question: "识别高杠杆活动应该问什么问题？",
            options: ["这件事有多紧急？", "这件事如果不做会怎样？", "这件事需要多长时间？", "这件事谁来做最好？"],
            answer: 1,
            rationale: "需要问'这件事如果不做会怎样'来识别真正重要的工作。"
        },
        {
            id: "tm-3-1-q10",
            question: "培养团队为什么是高杠杆活动？",
            options: ["因为需要很多时间", "因为指导和辅导的效果可以持续很长时间", "因为可以减少招聘成本", "因为团队会更感激你"],
            answer: 1,
            rationale: "培养团队是高杠杆活动因为指导和辅导的效果可以持续很长时间，产生复利效应。"
        },
        {
            id: "tm-3-1-q11",
            question: "应该寻找什么类型的工作领域？",
            options: ["最拥挤的优先事项", "现在很好但可以变得很棒的领域", "最容易完成的领域", "竞争最激烈的领域"],
            answer: 1,
            rationale: "Will Larson 建议寻找'现在很好但可以变得很棒'的领域，避免拥挤的优先事项。"
        },
        {
            id: "tm-3-1-q12",
            question: "《High Output Management》的作者是谁？",
            options: ["Peter Drucker", "Andy Grove", "Will Larson", "Jim Collins"],
            answer: 1,
            rationale: "《High Output Management》由 Intel 前 CEO Andy Grove 撰写。"
        }
    ],
    "tm-3-2": [
        {
            id: "tm-3-2-q1",
            question: "Paul Graham 提出的两种时间安排模式是什么？",
            options: ["工作模式和休息模式", "Maker's Schedule 和 Manager's Schedule", "线上模式和线下模式", "个人模式和团队模式"],
            answer: 1,
            rationale: "Paul Graham 提出 Maker's Schedule（创造者日程）和 Manager's Schedule（管理者日程）的区分。"
        },
        {
            id: "tm-3-2-q2",
            question: "为什么一场会议对创造者的成本远超会议时长？",
            options: ["需要准备材料", "打断深度工作流，需要时间恢复", "需要后续跟进", "需要写会议纪要"],
            answer: 1,
            rationale: "会议打断深度工作流，将下午分成太小的碎片无法完成困难工作，恢复需要额外时间。"
        },
        {
            id: "tm-3-2-q3",
            question: "Y Combinator 采用什么方式保护深度工作时间？",
            options: ["完全取消会议", "固定办公时间，将会议安排在工作日末尾", "让别人代开会议", "只开视频会议"],
            answer: 1,
            rationale: "Y Combinator 采用固定办公时间制度，将所有会议安排在工作日末尾，避免打断核心工作。"
        },
        {
            id: "tm-3-2-q4",
            question: "Amazon 的6页备忘录有什么特点？",
            options: ["只有6页PPT", "用叙述式备忘录代替PPT，会议开始先沉默阅读", "必须在6分钟内完成", "只讨论6个要点"],
            answer: 1,
            rationale: "Amazon 要求用6页叙述式备忘录代替PPT，会议开始先沉默阅读，确保深度思考。"
        },
        {
            id: "tm-3-2-q5",
            question: "创造者日程的时间单位通常是什么？",
            options: ["15分钟", "1小时", "至少半天", "整天"],
            answer: 2,
            rationale: "创造者需要至少半天的连续时间块才能进入深度工作状态。"
        },
        {
            id: "tm-3-2-q6",
            question: "如何处理双轨时间冲突？",
            options: ["完全按管理者日程", "相互理解与妥协", "完全按创造者日程", "让上级决定"],
            answer: 1,
            rationale: "关键在于相互理解与妥协，管理者认识创造者需求，创造者接受必要会议但要求理解中断成本。"
        },
        {
            id: "tm-3-2-q7",
            question: "Paul Graham 在90年代创业时如何安排时间？",
            options: ["只开会不编程", "晚间编程至凌晨3点，上午处理商务", "只编程不开会", "团队轮换开会和编程"],
            answer: 1,
            rationale: "Graham 晚间编程至凌晨3点（创造者模式），上午处理商务工作（管理者模式），每天有两个工作日。"
        },
        {
            id: "tm-3-2-q8",
            question: "为什么低效会议是时间杀手？",
            options: ["会议室不够用", "会议占用管理者大量时间，低效会议浪费所有参与者的时间", "视频会议技术问题多", "会议太少了"],
            answer: 1,
            rationale: "会议是管理者的主要工作形式，低效会议不仅浪费主持人时间，还浪费所有参与者的时间。"
        },
        {
            id: "tm-3-2-q9",
            question: "提高会议效率的关键步骤是什么？",
            options: ["缩短会议时间", "会前准备、会中引导、会后跟进", "增加会议频率", "只请必要的人参加"],
            answer: 1,
            rationale: "会议效率提升需要三个步骤：会前准备（议程和材料）、会中引导、会后跟进。"
        },
        {
            id: "tm-3-2-q10",
            question: "《Maker's Schedule, Manager's Schedule》的作者是谁？",
            options: ["Andy Grove", "Paul Graham", "Cal Newport", "Peter Drucker"],
            answer: 1,
            rationale: "Paul Graham 是这篇著名文章的作者，他是 Y Combinator 的联合创始人。"
        },
        {
            id: "tm-3-2-q11",
            question: "管理者日程的时间单位通常是什么？",
            options: ["半天", "整天", "1小时", "15分钟"],
            answer: 2,
            rationale: "管理者日程以小时为单位，便于频繁切换任务和处理各种事务。"
        },
        {
            id: "tm-3-2-q12",
            question: "取消不必要会议的障碍是什么？",
            options: ["技术问题", "可能得罪人，但低效会议更损害时间", "没有替代方案", "公司政策不允许"],
            answer: 1,
            rationale: "取消会议可能得罪人，但低效会议更损害所有人的时间，需要平衡考虑。"
        }
    ],
    "tm-3-3": [
        {
            id: "tm-3-3-q1",
            question: "有效授权的正确定义是什么？",
            options: ["完全放手不管", "明确预期、提供支持、跟进结果", "只授权简单任务", "让下属自己决定所有事情"],
            answer: 1,
            rationale: "有效授权是'明确预期、提供支持、跟进结果'的系统性过程，不是放手不管。"
        },
        {
            id: "tm-3-3-q2",
            question: "HBR 提出的四项授权策略的第一步是什么？",
            options: ["分配任务", "解释原因和重要性", "设定截止日期", "选择合适的人"],
            answer: 1,
            rationale: "第一步是解释原因和重要性，让被授权者理解上下文和意义。"
        },
        {
            id: "tm-3-3-q3",
            question: "领导者的核心悖论是什么？",
            options: ["更多权力但更少责任", "更重要但更少参与", "更忙碌但更轻松", "更资深但更年轻"],
            answer: 1,
            rationale: "领导者必须'更重要但更少参与'，参与意味着亲自做，重要意味着使他人成功。"
        },
        {
            id: "tm-3-3-q4",
            question: "《Turn the Ship Around》提倡什么领导模式？",
            options: ["领导者-追随者", "领导者-领导者", "独裁式领导", "完全授权"],
            answer: 1,
            rationale: "David Marquet 提倡从'领导者-追随者'转向'领导者-领导者'，通过授权创造更多领导者。"
        },
        {
            id: "tm-3-3-q5",
            question: "授权后在什么层级参与最合适？",
            options: ["完全不参与", "每天检查进度", "在微观管理和完全放手之间找平衡", "让HR参与监督"],
            answer: 2,
            rationale: "最优参与在微观管理和完全放手之间，应直接询问被授权者偏好的参与方式。"
        },
        {
            id: "tm-3-3-q6",
            question: "授权最大的障碍是什么？",
            options: ["没有时间", "担心下属做不好的放手焦虑", "团队人数不够", "公司政策限制"],
            answer: 1,
            rationale: "担心下属做不好是授权最大的障碍，需要接受'足够好'而非追求'完美'。"
        },
        {
            id: "tm-3-3-q7",
            question: "为什么授权后不应该过度干预？",
            options: ["会浪费时间", "会削弱下属信心和能力", "会增加成本", "会影响团队氛围"],
            answer: 1,
            rationale: "授权后过度干预会适得其反，削弱下属的信心和能力发展。"
        },
        {
            id: "tm-3-3-q8",
            question: "激发被授权者承诺的关键是什么？",
            options: ["许诺奖励", "明确期望并通过直接沟通确认", "威胁惩罚", "公开表扬"],
            answer: 1,
            rationale: "激发承诺需要明确期望并通过直接沟通确认，对方不能读心，所以要清楚表达。"
        },
        {
            id: "tm-3-3-q9",
            question: "选择性说'是'或'否'的标准是什么？",
            options: ["根据个人喜好", "基于战略对齐", "根据工作量", "根据关系亲疏"],
            answer: 1,
            rationale: "领导者应根据战略对齐来选择性地说'是'、'否'或'是，如果...'，避免在不对齐的事务上分散精力。"
        },
        {
            id: "tm-3-3-q10",
            question: "如何确定合适的授权对象？",
            options: ["选最资深的人", "需要了解团队成员的能力和意愿", "随机分配", "让他们自己报名"],
            answer: 1,
            rationale: "选择合适的授权对象需要对团队成员的能力和意愿有了解。"
        },
        {
            id: "tm-3-3-q11",
            question: "忙碌和重要的区别是什么？",
            options: ["没有区别", "忙碌是自己做，重要是使他人成功", "忙碌更有价值", "重要意味着更多工作量"],
            answer: 1,
            rationale: "忙碌是参与（自己做），重要是使他人成功，领导者需要更重要但更少参与。"
        },
        {
            id: "tm-3-3-q12",
            question: "《Turn the Ship Around》的作者是谁？",
            options: ["Andy Grove", "David Marquet", "Simon Sinek", "Peter Drucker"],
            answer: 1,
            rationale: "《Turn the Ship Around》由美国海军上尉 David Marquet 撰写，讲述他在核潜艇上的领导力转型。"
        }
    ]
}
