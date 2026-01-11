import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week11Guides: Record<string, LessonGuide> = {
    "tm-11-1": {
        lessonId: "tm-11-1",
        background: [
            "【Kotter八步变革法起源】John Kotter在其1996年著作《Leading Change》中首次提出八步变革模型。他通过观察数百位企业领导者的变革实践，总结出成功变革的共同因素。Kotter指出：'Most major change initiatives generate only lukewarm results. Many fail miserably.'——大多数重大变革只产生平庸的结果，很多甚至彻底失败。",
            "【八步法核心框架】Kotter的八个步骤是：1) Create a Sense of Urgency（建立紧迫感）；2) Build a Guiding Coalition（组建领导联盟）；3) Form a Strategic Vision（创建战略愿景）；4) Communicate the Vision（沟通愿景）；5) Enable Action by Removing Barriers（移除障碍授权行动）；6) Generate Short-Term Wins（创造短期胜利）；7) Sustain Acceleration（持续加速）；8) Institute Change（锚定文化）。",
            "【紧迫感的关键性】Kotter强调变革成功需要'75 percent of a company's management needs to buy into the change'——75%的管理层需要认可变革的必要性。建立紧迫感是通过识别关键机会或风险来获得支持和承诺。",
            "【Switch框架】Chip Heath和Dan Heath在《Switch》中提出了变革的核心隐喻：骑象人(Rider)代表理性思维，大象(Elephant)代表情感力量，道路(Path)代表环境条件。'The Rider may appear to be in control, but whenever the Rider and Elephant cannot agree on where to go, the Rider eventually loses.'——当理性与情感冲突时，情感终将获胜。",
            "【Switch三步框架】Heath兄弟提出三步变革策略：1) Direct the Rider——'What looks like resistance is often a lack of clarity'（看似抵触往往是缺乏清晰度）；2) Motivate the Elephant——'What looks like laziness is often exhaustion'（看似懒惰往往是疲惫）；3) Shape the Path——'What looks like a people problem is often a situation problem'（看似人的问题往往是情境问题）。"
        ],
        keyDifficulties: [
            "【找到亮点(Bright Spots)】Switch强调'Find the bright spots—figure out what's already working and clone it'——找到已经有效的做法并复制它。很多变革失败是因为只关注问题，而忽视了已有的成功经验。",
            "【缩小变革规模】Heath兄弟指出：'If you want a reluctant Elephant to get moving, you need to shrink the change'——如果要让不情愿的大象行动，需要缩小变革的规模。通过小步骤和小胜利来建立动力。",
            "【愿景必须清晰可沟通】Kotter强调愿景必须是'clear, achievable, and inspiring'——清晰、可实现、激励人心。成功的愿景将组织目标与员工价值观连接起来，让人们'excel and learn, not because they are told to, but because they want to'。",
            "【过早宣布胜利的危险】Kotter警告：'Many change projects fail because victory is declared too early. Real change runs deep.'——很多变革项目失败是因为过早宣布胜利。真正的变革需要深入，快速胜利只是开始。",
            "【变革锚定文化】第八步'Institute Change'要求将新的流程、行为和心态嵌入组织文化：'Leaders must continue demonstrating the benefits of the changes, ensuring they become the new standard'——领导者必须持续展示变革的好处，确保它们成为新的标准。"
        ],
        handsOnPath: [
            "应用Switch的'找到亮点'方法：识别团队中已经在有效运作的一个实践，分析为什么它有效，并制定复制计划。",
            "使用Kotter框架进行变革诊断：评估当前变革项目在八个步骤中的位置，识别薄弱环节。",
            "设计'脚本关键行动(Script the Critical Moves)'：为团队成员定义2-3个具体、明确的行为改变，而非宏大模糊的目标。",
            "创建短期胜利清单：列出未来30-60天内可以实现的3个可见成果，用于维持变革动力。",
            "制定愿景沟通计划：用'五分钟电梯演讲'格式描述变革愿景，确保任何人都能理解和转述。"
        ],
        selfCheck: [
            "你能用Switch的隐喻分析当前变革的挑战吗？是骑象人(方向不清)、大象(情感抵触)还是道路(环境障碍)的问题？",
            "团队中是否有75%以上的成员认识到变革的紧迫性？如果没有，你计划如何建立紧迫感？",
            "你是否识别并利用了组织中已有的'亮点'——那些已经在有效运作的实践？",
            "变革愿景是否足够清晰，能在五分钟内向任何人解释清楚？",
            "有没有在30-60天内可以展示的短期胜利来证明变革方向正确？"
        ],
        extensions: [
            "深入阅读《Leading Change》理解Kotter从八步法到八个加速器(Accelerators)的演进——他在《Accelerate》(2014)和《CHANGE》(2021)中更新了框架。",
            "研究ADKAR模型（Awareness, Desire, Knowledge, Ability, Reinforcement）作为个人变革的补充框架。",
            "探索Kurt Lewin的'解冻-变革-再冻结'三阶段模型，理解变革的心理动力学。",
            "学习如何将Kotter模型与敏捷方法论结合，应对快速变化的技术环境。"
        ],
        sourceUrls: [
            "https://www.kotterinc.com/methodology/8-steps/",
            "https://www.amazon.com/Switch-Change-Things-When-Hard/dp/0385528752",
            "https://hbr.org/2007/01/leading-change-why-transformation-efforts-fail"
        ]
    },
    "tm-11-2": {
        lessonId: "tm-11-2",
        background: [
            "【DevOps手册核心理念】《The DevOps Handbook》由Gene Kim、Jez Humble、Patrick Debois和John Willis共同撰写，是技术组织转型的权威指南。书中指出DevOps是'a manifestation of creating dynamic, learning organizations that continually reinforce high-trust cultural norms'——创建动态、持续学习、强化高信任文化规范的组织。",
            "【三条道路(Three Ways)】DevOps手册围绕三条道路组织：1) The First Way (Flow)——实现从开发到运维到客户的快速左到右流动；2) The Second Way (Feedback)——创建反馈循环系统和支持文化；3) The Third Way (Continual Learning)——建立支持实验和风险承担的生成性高信任文化，促进组织学习。",
            "【SAFe与敏捷转型】Scaled Agile Framework (SAFe)是最广泛采用的大规模敏捷框架。2025年报告显示'over 70% of Fortune 100 companies use SAFe Agile as their primary scaling method'——超过70%的财富100强公司使用SAFe作为主要的规模化方法。SAFe的核心价值包括对齐(Alignment)、内建质量(Built-in Quality)、透明(Transparency)和项目执行(Program Execution)。",
            "【数字化转型五领域】David Rogers在《The Digital Transformation Playbook》中指出数字化转型不是'about updating your technology but about upgrading your strategic thinking'——不是更新技术而是升级战略思维。他提出五个需要重新思考的战略领域：客户(Customers)、竞争(Competition)、数据(Data)、创新(Innovation)和价值(Value)。",
            "【敏捷领导力】SAFe强调'Leading the organization through the transformation needed to achieve business agility requires a mindset that reflects the core values and principles of Lean, Agile, and SAFe'——领导组织实现业务敏捷需要反映精益、敏捷和SAFe核心价值观和原则的心态。领导者需要'routinely reference Lean-Agile principles and practices'作为日常职责的一部分。"
        ],
        keyDifficulties: [
            "【文化变革先于工具】DevOps手册强调'DevOps is about culture as much as it is about technology'——DevOps关乎文化与技术同等重要。常见反模式是'只关注工具不关注文化'，技术转型必须伴随文化变革。",
            "【变革阻力管理】SAFe指导文件指出：'Resistance to change, siloed departments, and lack of a unified vision can hinder the progress of a SAFe adoption'——变革阻力、部门壁垒和缺乏统一愿景会阻碍SAFe实施。需要'comprehensive organizational commitment to the principles of agility'。",
            "【渐进式实验方法】Rogers强调创新过程正在改变：'Innovation is moving towards a process of constant and rapid experimentation'——创新正在转向持续快速实验的过程。技术组织转型也应采用小规模实验、快速学习的方法。",
            "【DORA度量指标】如何知道转型是否有效？DORA(DevOps Research and Assessment)提供四个关键指标：部署频率(Deployment Frequency)、变更前置时间(Lead Time for Changes)、变更失败率(Change Failure Rate)、服务恢复时间(Time to Restore Service)。",
            "【Kotter与敏捷结合】SAFe实施路线图'is based partly on John Kotter's work in organizational change management'——部分基于Kotter的变革管理工作。将八步变革法与敏捷原则结合可以提高转型成功率。"
        ],
        handsOnPath: [
            "使用DORA指标评估团队当前交付效能：测量部署频率、变更前置时间、变更失败率和恢复时间，建立基线。",
            "应用三条道路框架诊断：评估团队在Flow(流动)、Feedback(反馈)和Continual Learning(持续学习)三个维度的成熟度。",
            "设计小规模DevOps实验：选择一个具体改进（如自动化部署、监控告警），定义成功标准，快速验证效果。",
            "创建价值流图(Value Stream Map)：可视化从需求到交付的完整流程，识别等待时间和瓶颈。",
            "建立转型度量仪表板：整合DORA指标和其他关键度量，使转型进展可见。"
        ],
        selfCheck: [
            "团队的DORA指标处于什么水平？是Elite、High、Medium还是Low Performer？",
            "转型是否同时关注文化和工具？有没有陷入'只换工具不改文化'的反模式？",
            "组织是否采用了小规模实验的方法，还是试图一次性完成大规模变革？",
            "领导层是否以身作则践行敏捷原则？还是'说一套做一套'？",
            "转型进展是否可见和可度量？团队是否清楚变革的方向和进度？"
        ],
        extensions: [
            "深入学习DORA研究和年度State of DevOps报告，了解高效能技术组织的最新研究发现。",
            "研究Spotify的'Squads、Tribes、Chapters、Guilds'敏捷模型，理解规模化敏捷的不同方法。",
            "探索《Accelerate》中的科学发现——该书基于四年研究，涵盖23,000份调查，证明DevOps实践与组织绩效的相关性。",
            "学习SAFe Implementation Roadmap的12个步骤，理解系统性实施大规模敏捷的方法。"
        ],
        sourceUrls: [
            "https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002",
            "https://framework.scaledagile.com/implementation-roadmap",
            "https://www.amazon.com/Digital-Transformation-Playbook-Business-Publishing/dp/0231175442"
        ]
    },
    "tm-11-3": {
        lessonId: "tm-11-3",
        background: [
            "【学习型组织定义】Peter Senge在《The Fifth Discipline》中定义学习型组织为：'organizations where people continually expand their capacity to create the results they truly desire, where new and expansive patterns of thinking are nurtured, where collective aspiration is set free, and where people are continually learning how to learn together'——人们持续扩展能力创造真正期望的结果、培育新的思维模式、释放集体抱负、并不断学习如何一起学习的组织。",
            "【五项修炼框架】Senge提出学习型组织的五项修炼：1) Personal Mastery(自我超越)——个人成长和学习；2) Mental Models(心智模式)——检视我们的思维方式；3) Shared Vision(共同愿景)——建立共同目标；4) Team Learning(团队学习)——集体思考和对话；5) Systems Thinking(系统思考)——看到整体而非局部。系统思考是第五项修炼，是'the cornerstone of the learning organization'——学习型组织的基石。",
            "【系统思考的本质】Senge指出：'The essence of the discipline of systems thinking lies in a shift of mind: seeing interrelationships rather than linear cause-effect chains, and seeing processes of change rather than snapshots'——系统思考的本质在于心智转变：看到相互关系而非线性因果链，看到变化过程而非快照。",
            "【刻意发展型组织(DDO)】Robert Kegan和Lisa Lahey在《An Everyone Culture》中提出：'In most organizations, nearly everyone is doing a second job no one is paying them for—namely, covering their weaknesses, trying to look their best, and managing other people's impressions of them'——在大多数组织中，几乎每个人都在做一份没人付钱的第二份工作——即掩盖弱点、展现最好的一面、管理他人对自己的印象。这是巨大的资源浪费。",
            "【DDO的核心理念】Kegan和Lahey指出：'A DDO is organized around the simple but radical conviction that organizations will best prosper when they are more deeply aligned with people's strongest motive, which is to grow'——DDO围绕一个简单但激进的信念组织：当组织与人们最强烈的动机——成长——更深度对齐时，组织将最繁荣。"
        ],
        keyDifficulties: [
            "【共同愿景的力量】Senge强调：'When there is a genuine vision (as opposed to the all-too-familiar vision statement), people excel and learn, not because they are told to, but because they want to'——当有真正的愿景时，人们出色表现和学习，不是因为被要求，而是因为他们想要。真正的愿景与空洞的愿景声明有本质区别。",
            "【持续竞争优势】Senge明确指出：'In the long run the only sustainable competitive advantage is your organization's ability to learn faster than the competition'——从长远看，唯一可持续的竞争优势是你的组织比竞争对手学习得更快。",
            "【走出隐藏】DDO的标志是创造足够安全和要求足够高的文化，让'everyone comes out of hiding'——每个人都走出隐藏。这需要刻意构建将人员发展'woven into the daily fabric of working life and the company's regular operations, daily routines, and conversations'——编织进日常工作生活和公司常规运营中。",
            "【心智模式的陷阱】Senge描述心智模式'are integral in order to focus on the openness needed to unearth shortcomings in perceptions'——对于发掘感知中的缺陷所需的开放性至关重要。我们的隐性假设和偏见会限制我们看到可能性。",
            "【团队学习超越个人】Senge指出团队学习包括两个方面：'effective teamwork leads to results which individuals could not have achieved on their own, and individuals within a team learn more and faster than they would have without the team'——有效的团队合作产生个人无法单独实现的结果，团队中的个人学习得比没有团队时更多更快。"
        ],
        handsOnPath: [
            "实践'心智模式检视'：在下次重要决策前，列出你的关键假设，邀请团队成员挑战这些假设。",
            "启动团队学习实验：组织一次'深度对话(Dialogue)'会议——不是辩论，而是共同探索复杂问题，暂停判断。",
            "评估组织的'隐藏文化'：匿名调查团队成员在工作中花费多少精力管理他人印象，识别改进机会。",
            "创建系统思考图：选择一个团队面临的复杂问题，绘制因果关系图，识别反馈循环和杠杆点。",
            "制定知识分享制度：建立每周技术分享会、学习小组或实践社区，将学习融入日常工作。"
        ],
        selfCheck: [
            "团队成员是否敢于暴露自己的弱点和发展需求？还是花大量精力在'看起来不错'上？",
            "团队是否有真正的共同愿景，还是只有挂在墙上的愿景声明？",
            "你能识别出团队工作中的系统性模式和反馈循环吗？还是只看到孤立事件？",
            "团队的学习是否被编织进日常工作，还是只存在于培训课程中？",
            "组织学习的速度是否快于竞争对手和环境变化的速度？"
        ],
        extensions: [
            "深入阅读《The Fifth Discipline》，特别关注'啤酒游戏'等系统思考案例的分析。",
            "研究《An Everyone Culture》中的三个DDO案例公司：Decurion、Next Jump和Bridgewater，学习他们的具体实践。",
            "探索Amy Edmondson关于心理安全的研究——Google的Project Aristotle发现心理安全是高效团队的首要特征。",
            "了解实践社区(Community of Practice)的建设方法，促进跨团队知识流动。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Fifth-Discipline-Practice-Learning-Organization/dp/0385517254",
            "https://www.amazon.com/Everyone-Culture-Deliberately-Developmental-Organization/dp/1625278624",
            "https://rework.withgoogle.com/guides/understanding-team-effectiveness/"
        ]
    }
}

export const week11Quizzes: Record<string, QuizQuestion[]> = {
    "tm-11-1": [
        {
            id: "tm-11-1-q1",
            question: "根据Kotter的研究，变革成功需要多大比例的管理层认可？",
            options: [
                "25%",
                "50%",
                "75%",
                "100%"
            ],
            answer: 2,
            rationale: "Kotter指出'75 percent of a company's management needs to buy into the change'——75%的管理层需要认可变革的必要性。"
        },
        {
            id: "tm-11-1-q2",
            question: "Switch书中'骑象人(Rider)'代表什么？",
            options: [
                "情感和直觉",
                "理性和分析思维",
                "环境和条件",
                "组织文化"
            ],
            answer: 1,
            rationale: "在Switch的隐喻中，Rider(骑象人)代表'our analytical, long-term planning, thinking, and understanding mind'——我们的分析性、长期规划、思考和理解的心智。"
        },
        {
            id: "tm-11-1-q3",
            question: "Switch框架认为'看似抵触往往是什么'？",
            options: [
                "懒惰",
                "能力不足",
                "缺乏清晰度",
                "利益冲突"
            ],
            answer: 2,
            rationale: "Switch指出：'What looks like resistance is often a lack of clarity'——看似抵触往往是缺乏清晰度。这是'Direct the Rider'策略的核心洞察。"
        },
        {
            id: "tm-11-1-q4",
            question: "Switch的'找到亮点(Bright Spots)'策略建议什么？",
            options: [
                "聘请外部顾问",
                "找出已经有效的做法并复制",
                "完全从零开始设计",
                "等待问题自然解决"
            ],
            answer: 1,
            rationale: "Switch强调'Find the bright spots—figure out what's already working and clone it'——找到已经有效的做法并复制它。"
        },
        {
            id: "tm-11-1-q5",
            question: "Kotter八步法的第一步是什么？",
            options: [
                "组建领导联盟",
                "建立紧迫感",
                "创建愿景",
                "沟通愿景"
            ],
            answer: 1,
            rationale: "Kotter八步法的第一步是'Create a Sense of Urgency'——建立紧迫感，让组织意识到改变的必要性。"
        },
        {
            id: "tm-11-1-q6",
            question: "Switch认为'如果要让不情愿的大象行动'应该怎么做？",
            options: [
                "增加压力",
                "提高奖励",
                "缩小变革规模",
                "延长时间"
            ],
            answer: 2,
            rationale: "Heath兄弟指出：'If you want a reluctant Elephant to get moving, you need to shrink the change'——需要缩小变革的规模。"
        },
        {
            id: "tm-11-1-q7",
            question: "Kotter警告很多变革项目失败是因为什么？",
            options: [
                "预算不足",
                "团队能力不够",
                "过早宣布胜利",
                "没有使用正确工具"
            ],
            answer: 2,
            rationale: "Kotter警告：'Many change projects fail because victory is declared too early. Real change runs deep.'——很多变革失败是因为过早宣布胜利。"
        },
        {
            id: "tm-11-1-q8",
            question: "Switch框架的'Shape the Path'策略基于什么洞察？",
            options: [
                "人们需要更多培训",
                "看似人的问题往往是情境问题",
                "领导力是最重要的",
                "激励机制决定行为"
            ],
            answer: 1,
            rationale: "Switch指出：'What looks like a people problem is often a situation problem'——看似人的问题往往是情境问题。这是'Shape the Path'的核心洞察。"
        },
        {
            id: "tm-11-1-q9",
            question: "Kotter八步法的最后一步是什么？",
            options: [
                "创造短期胜利",
                "持续加速",
                "锚定文化",
                "移除障碍"
            ],
            answer: 2,
            rationale: "第八步是'Institute Change'或'Anchor Change in the Culture'——将新的流程、行为和心态嵌入组织文化。"
        },
        {
            id: "tm-11-1-q10",
            question: "当骑象人(Rider)和大象(Elephant)意见不一致时会发生什么？",
            options: [
                "骑象人获胜",
                "大象最终获胜",
                "双方妥协",
                "什么都不会发生"
            ],
            answer: 1,
            rationale: "Switch指出：'whenever the Rider and Elephant cannot agree on where to go, the Rider eventually loses'——当理性与情感冲突时，情感(大象)终将获胜。"
        },
        {
            id: "tm-11-1-q11",
            question: "Switch认为'看似懒惰往往是什么'？",
            options: [
                "缺乏动力",
                "疲惫",
                "能力问题",
                "态度问题"
            ],
            answer: 1,
            rationale: "Switch指出：'What looks like laziness is often exhaustion'——看似懒惰往往是疲惫。这是'Motivate the Elephant'策略的核心洞察。"
        },
        {
            id: "tm-11-1-q12",
            question: "Kotter在《Accelerate》和《CHANGE》中对八步法做了什么更新？",
            options: [
                "完全废弃了原框架",
                "将八步法演进为八个加速器(Accelerators)",
                "减少到四个步骤",
                "增加到十二个步骤"
            ],
            answer: 1,
            rationale: "Kotter在后续书籍中'evolved his original eight steps to eight accelerators'——将原始八步演进为八个加速器，适应更快节奏的变革需求。"
        }
    ],
    "tm-11-2": [
        {
            id: "tm-11-2-q1",
            question: "DevOps手册中的'三条道路(Three Ways)'不包括哪个？",
            options: [
                "Flow(流动)",
                "Feedback(反馈)",
                "Continual Learning(持续学习)",
                "Automation(自动化)"
            ],
            answer: 3,
            rationale: "三条道路是：1) Flow(流动)；2) Feedback(反馈)；3) Continual Learning(持续学习)。自动化是实践，不是三条道路之一。"
        },
        {
            id: "tm-11-2-q2",
            question: "根据2025年报告，财富100强公司中使用SAFe的比例是多少？",
            options: [
                "超过30%",
                "超过50%",
                "超过70%",
                "超过90%"
            ],
            answer: 2,
            rationale: "2025年报告显示'over 70% of Fortune 100 companies use SAFe Agile as their primary scaling method'——超过70%的财富100强公司使用SAFe。"
        },
        {
            id: "tm-11-2-q3",
            question: "DevOps手册强调DevOps关乎什么与技术同等重要？",
            options: [
                "工具",
                "流程",
                "文化",
                "预算"
            ],
            answer: 2,
            rationale: "DevOps手册强调'DevOps is about culture as much as it is about technology'——DevOps关乎文化与技术同等重要。"
        },
        {
            id: "tm-11-2-q4",
            question: "David Rogers认为数字化转型不是更新技术而是什么？",
            options: [
                "更换团队",
                "升级战略思维",
                "增加预算",
                "采用新工具"
            ],
            answer: 1,
            rationale: "Rogers指出数字化转型'is not about updating your technology but about upgrading your strategic thinking'——不是更新技术而是升级战略思维。"
        },
        {
            id: "tm-11-2-q5",
            question: "SAFe的核心价值不包括哪个？",
            options: [
                "对齐(Alignment)",
                "内建质量(Built-in Quality)",
                "速度(Speed)",
                "透明(Transparency)"
            ],
            answer: 2,
            rationale: "SAFe的四个核心价值是：对齐(Alignment)、内建质量(Built-in Quality)、透明(Transparency)和项目执行(Program Execution)。速度不是核心价值。"
        },
        {
            id: "tm-11-2-q6",
            question: "DORA四个关键指标不包括哪个？",
            options: [
                "部署频率",
                "变更前置时间",
                "代码覆盖率",
                "服务恢复时间"
            ],
            answer: 2,
            rationale: "DORA四个关键指标是：部署频率、变更前置时间、变更失败率、服务恢复时间。代码覆盖率不是DORA核心指标。"
        },
        {
            id: "tm-11-2-q7",
            question: "SAFe实施路线图部分基于谁的变革管理工作？",
            options: [
                "Peter Senge",
                "John Kotter",
                "Gene Kim",
                "Peter Drucker"
            ],
            answer: 1,
            rationale: "SAFe实施路线图'is based partly on John Kotter's work in organizational change management'——部分基于Kotter的变革管理工作。"
        },
        {
            id: "tm-11-2-q8",
            question: "David Rogers提出的数字化转型五个领域不包括哪个？",
            options: [
                "客户",
                "竞争",
                "技术",
                "数据"
            ],
            answer: 2,
            rationale: "Rogers的五个领域是：客户(Customers)、竞争(Competition)、数据(Data)、创新(Innovation)和价值(Value)。技术不是五个领域之一。"
        },
        {
            id: "tm-11-2-q9",
            question: "DevOps手册认为DevOps是什么的体现？",
            options: [
                "技术工具的进步",
                "创建动态学习组织、强化高信任文化规范",
                "自动化流程的采用",
                "组织结构的调整"
            ],
            answer: 1,
            rationale: "DevOps是'a manifestation of creating dynamic, learning organizations that continually reinforce high-trust cultural norms'——创建动态学习组织、强化高信任文化规范的体现。"
        },
        {
            id: "tm-11-2-q10",
            question: "Rogers认为创新过程正在如何改变？",
            options: [
                "变得更加集中化",
                "转向持续快速实验的过程",
                "变得更加缓慢",
                "更依赖个人天才"
            ],
            answer: 1,
            rationale: "Rogers强调'Innovation is moving towards a process of constant and rapid experimentation'——创新正在转向持续快速实验的过程。"
        },
        {
            id: "tm-11-2-q11",
            question: "成功实施SAFe后组织可能获得什么成果？",
            options: [
                "成本增加50%",
                "上市时间加快50%，员工参与度提高35%",
                "团队规模减少50%",
                "会议时间增加35%"
            ],
            answer: 1,
            rationale: "研究显示'Organizations can achieve up to 50% faster time-to-market and 35% increases in employee engagement'——上市时间加快50%，员工参与度提高35%。"
        },
        {
            id: "tm-11-2-q12",
            question: "什么因素会阻碍SAFe实施的进展？",
            options: [
                "技术太先进",
                "变革阻力、部门壁垒和缺乏统一愿景",
                "预算太充足",
                "团队太小"
            ],
            answer: 1,
            rationale: "SAFe指出'Resistance to change, siloed departments, and lack of a unified vision can hinder the progress'——变革阻力、部门壁垒和缺乏统一愿景会阻碍进展。"
        }
    ],
    "tm-11-3": [
        {
            id: "tm-11-3-q1",
            question: "Peter Senge认为唯一可持续的竞争优势是什么？",
            options: [
                "更多的资金",
                "更好的技术",
                "组织比竞争对手学习得更快",
                "更大的市场份额"
            ],
            answer: 2,
            rationale: "Senge明确指出：'In the long run the only sustainable competitive advantage is your organization's ability to learn faster than the competition'——唯一可持续的竞争优势是学习速度。"
        },
        {
            id: "tm-11-3-q2",
            question: "Senge的'第五项修炼'是什么？",
            options: [
                "自我超越",
                "心智模式",
                "共同愿景",
                "系统思考"
            ],
            answer: 3,
            rationale: "系统思考是第五项修炼，是'the cornerstone of the learning organization'——学习型组织的基石，将其他四项修炼融合成连贯的理论和实践体系。"
        },
        {
            id: "tm-11-3-q3",
            question: "Kegan和Lahey在《An Everyone Culture》中指出大多数人在做什么'第二份工作'？",
            options: [
                "加班做项目",
                "掩盖弱点、管理他人印象",
                "学习新技能",
                "建立人际关系"
            ],
            answer: 1,
            rationale: "他们指出：'nearly everyone is doing a second job no one is paying them for—covering their weaknesses, trying to look their best, and managing other people's impressions'——掩盖弱点、展现最好的一面、管理他人对自己的印象。"
        },
        {
            id: "tm-11-3-q4",
            question: "系统思考的本质是什么心智转变？",
            options: [
                "从慢到快",
                "从复杂到简单",
                "从看线性因果到看相互关系和变化过程",
                "从感性到理性"
            ],
            answer: 2,
            rationale: "Senge指出系统思考的本质是'seeing interrelationships rather than linear cause-effect chains, and seeing processes of change rather than snapshots'——看到相互关系而非线性因果链，看到变化过程而非快照。"
        },
        {
            id: "tm-11-3-q5",
            question: "DDO(刻意发展型组织)围绕什么核心信念组织？",
            options: [
                "利润最大化",
                "组织与人们最强烈的动机(成长)对齐时最繁荣",
                "效率优先",
                "客户第一"
            ],
            answer: 1,
            rationale: "Kegan和Lahey指出DDO围绕'the conviction that organizations will best prosper when they are more deeply aligned with people's strongest motive, which is to grow'——组织与人们的成长动机对齐时最繁荣。"
        },
        {
            id: "tm-11-3-q6",
            question: "Senge认为真正的愿景与愿景声明有什么区别？",
            options: [
                "更长更详细",
                "人们主动追求而非被要求",
                "更模糊",
                "更正式"
            ],
            answer: 1,
            rationale: "Senge强调：'When there is a genuine vision, people excel and learn, not because they are told to, but because they want to'——真正的愿景让人们主动追求，而非被要求。"
        },
        {
            id: "tm-11-3-q7",
            question: "团队学习的两个方面是什么？",
            options: [
                "理论学习和实践学习",
                "产生超越个人的结果，个人学习更多更快",
                "线上学习和线下学习",
                "正式培训和非正式学习"
            ],
            answer: 1,
            rationale: "Senge指出团队学习包括：'effective teamwork leads to results which individuals could not have achieved on their own, and individuals within a team learn more and faster'——产生个人无法单独实现的结果，个人学习更多更快。"
        },
        {
            id: "tm-11-3-q8",
            question: "DDO的标志是创造什么样的文化？",
            options: [
                "高压力高竞争",
                "足够安全且要求足够高，让每个人都走出隐藏",
                "完全放松自由",
                "严格等级制度"
            ],
            answer: 1,
            rationale: "DDO的标志是创造足够安全和要求足够高的文化，让'everyone comes out of hiding'——每个人都走出隐藏。"
        },
        {
            id: "tm-11-3-q9",
            question: "Senge的五项修炼中'心智模式'指什么？",
            options: [
                "智力水平",
                "我们看待世界的内在假设和思维方式",
                "心理健康状态",
                "学习方法"
            ],
            answer: 1,
            rationale: "心智模式指'our otherwise implicit personal and organizational assumptions, biases, schemata, and point of view'——我们隐性的个人和组织假设、偏见、图式和观点。"
        },
        {
            id: "tm-11-3-q10",
            question: "《An Everyone Culture》中提到的DDO案例公司不包括哪个？",
            options: [
                "Decurion",
                "Next Jump",
                "Google",
                "Bridgewater"
            ],
            answer: 2,
            rationale: "书中的三个DDO案例公司是Decurion、Next Jump和Bridgewater，不包括Google。"
        },
        {
            id: "tm-11-3-q11",
            question: "DDO如何将人员发展融入组织？",
            options: [
                "只通过年度培训",
                "编织进日常工作生活和公司常规运营中",
                "只通过外部教练",
                "只通过晋升机制"
            ],
            answer: 1,
            rationale: "DDO将人员发展'woven into the daily fabric of working life and the company's regular operations, daily routines, and conversations'——编织进日常工作生活和公司常规运营中。"
        },
        {
            id: "tm-11-3-q12",
            question: "心智模式为什么对学习型组织重要？",
            options: [
                "决定预算分配",
                "对发掘感知缺陷所需的开放性至关重要",
                "影响组织架构",
                "决定技术选型"
            ],
            answer: 1,
            rationale: "Senge描述心智模式'are integral in order to focus on the openness needed to unearth shortcomings in perceptions'——对于发掘感知中的缺陷所需的开放性至关重要。"
        }
    ]
}
