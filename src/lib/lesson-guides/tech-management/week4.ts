import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "tm-4-1": {
        lessonId: "tm-4-1",
        background: [
            "【招聘的核心问题】《Who: The A Method for Hiring》开篇指出：'Hiring is the single biggest problem in business today'——招聘是当今商业中最大的问题。平均一次招聘错误的代价是年薪的 15 倍，包括直接成本、机会成本和团队士气损失。",
            "【A Method 四步法】Geoff Smart 和 Randy Street 提出系统化的 A Method：1) Scorecard(记分卡)——定义成功标准；2) Source(寻源)——主动建立人才管道；3) Select(甄选)——结构化面试；4) Sell(说服)——成功关闭候选人。这个方法可以将招聘成功率提升到 90%。",
            "【Scorecard 的三要素】记分卡不同于传统职位描述，它包含：Mission(岗位使命)——用简洁语言描述核心目标；Outcomes(期望成果)——设定足够高但合理的目标来吸引 A 级人才；Competencies(核心能力)——列出候选人需要具备的行为特质和文化契合度。",
            "【Sourcing 的核心原则】最好的人才来源是推荐而非广告(referrals, not advertising)。Smart 建议在没有招聘需求时就持续建立人才网络，'systematically looking for and identifying potential talents before you actually need them'。",
            "【Job Description 最佳实践】Will Larson 在讨论 Engineering Executive 招聘时强调：Job Description 应该清晰具体，避免创意标题如'Code Ninja'。包含薪资范围可以减少前期筛选时间，提高候选人满意度和留存率。"
        ],
        keyDifficulties: [
            "【Who vs What 的思维转变】《Who》的核心理念是：'It's about who not about what'——先有人才再有战略。当你解决了'Who'的问题，'What'的问题会自然解决。但很多管理者仍然本末倒置，先定策略再找人。",
            "【A Player 的定义难题】A 级人才的定义是'able to achieve the outcomes outlined in the scorecard with at least 90% probability'。但管理者常犯的错误是用模糊标准如'优秀'、'高级'来定义，导致评估不一致。",
            "【招聘委员会的价值】Will Larson 指出：'Hiring committees are a great mechanism for training hiring managers' judgment on what makes a good candidate'——招聘委员会可以统一评估标准，类似 Amazon 的 Bar Raiser 机制，虽然速度较慢但能保证一致性。",
            "【薪酬包的长期影响】Larson 警告：'Outsized compensation packages will always create ongoing problems in annual compensation processes'——过高的薪酬包会在后续的年度调薪中造成问题，招聘经理往往只关注当下而忽视长期影响。",
            "【文化契合 vs 技能匹配】《Who》强调 Cultural misfits affect the bottom line——文化不匹配的人会影响业绩。记分卡需要明确'what it means to be a good fit'，而不是仅关注技术能力。"
        ],
        handsOnPath: [
            "为当前或下一个招聘岗位创建 Scorecard：明确写出岗位使命(Mission)、3-5 个关键成果(Outcomes)、5-8 个核心能力(Competencies)。确保成果目标足够高以吸引 A 级人才。",
            "盘点你的推荐网络：列出 10 个可能推荐优秀人才的人脉，主动联系他们建立持续的人才推荐关系，而不是等到有职位空缺时才联系。",
            "审视当前的 Job Description：对照最佳实践检查是否包含清晰的职责、具体的技术要求、成长机会、薪资范围。删除模糊的创意标题和不必要的要求。",
            "建立团队的招聘委员会或 Bar Raiser 机制：定义评估标准，确保不同面试官的判断能够得到校准和统一。",
            "进行 5 Fs 分析：了解目标候选人最看重什么——Fit(角色契合)、Family(家庭因素)、Freedom(自主空间)、Fortune(薪酬)、Fun(工作乐趣)。"
        ],
        selfCheck: [
            "你能用一句话清晰描述招聘岗位的使命(Mission)吗？不需要进一步解释就能让所有人理解？",
            "你的 Scorecard 是否设定了足够高的成果目标，能够'scare off B and C Players'同时吸引 A 级人才？",
            "团队的人才来源中，内部推荐占比是多少？你是否在没有招聘需求时也在持续建立人才网络？",
            "最近一次招聘决策中，你是否因为时间压力而降低了标准？结果如何？",
            "你能说出每个候选人在 5 Fs 中最看重什么吗？你在 Offer 阶段是否针对性地展示了优势？"
        ],
        extensions: [
            "深入阅读《Who: The A Method for Hiring》全书，理解完整的招聘系统包括 Topgrading Interview 等高级技巧。",
            "研究 Amazon 的 Bar Raiser 机制，了解如何在组织层面保持招聘标准的一致性。",
            "学习 Vinod Khosla 的 Gene Pool Engineering 理论——根据团队风险而非仅仅是机会来招聘。",
            "探索 Blind Hiring 实践，了解如何通过隐藏候选人身份信息来减少无意识偏见。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Who-Method-Hiring-Geoff-Smart/dp/0345504194",
            "https://lethain.com/hiring-engineering-executives/",
            "https://www.lever.co/blog/how-to-write-a-job-description"
        ]
    },
    "tm-4-2": {
        lessonId: "tm-4-2",
        background: [
            "【结构化面试的定义】Google re:Work 定义：'Structured interviewing simply means using the same interviewing methods to assess candidates applying for the same job'——对所有候选人使用相同的问题、相同的评分标准和预定的资格要求。",
            "【结构化面试的四个组成部分】Google 的方法论包含：1) Vetted Questions——经过验证的高质量问题；2) Comprehensive Feedback——详细的候选人回答记录；3) Standardized Rubrics——所有评估者共享的评分标准；4) Interviewer Training——面试官校准培训。",
            "【告别脑筋急转弯】Google 曾经使用'How many golf balls would fit inside a 747 airplane?'这类问题，但后来发现：'performance on these kinds of questions is at best a discrete skill that can be improved through practice, eliminating their utility for assessing candidates'——它们无法预测工作表现。",
            "【Joel Spolsky 的核心原则】《The Guerrilla Guide to Interviewing》提出经典的两条标准：'Smart and Gets Things Done'——聪明且能把事情做成。这是评估候选人的唯一两个重要维度。",
            "【绝不说 Maybe】Spolsky 强调：'Never say \"Maybe, I can't tell.\" If you can't tell, that means No Hire'——犹豫就意味着不录用。接受一个糟糕的候选人比拒绝一个好候选人的代价大得多。"
        ],
        keyDifficulties: [
            "【Blowhard 面试官反模式】Spolsky 警告最糟糕的面试官是 Blowhard——'the kind who blabs the whole time and barely leaves the candidate time to respond'。他们录用所有人因为觉得候选人一定很聪明。面试应该让候选人说话而非面试官表演。",
            "【Quiz Show 反模式】'Quiz Show Interviewers test trivia knowledge rather than aptitude'——考察琐碎知识而非真实能力。像'What's the difference between varchar and varchar2?'这样的问题毫无意义，因为任何人都可以 Google 到答案。",
            "【结构化面试的执行难度】Google 承认：'Structured interviews are hard to develop. You have to write them, test them, and make sure interviewers stick to them'——需要编写、测试并确保面试官遵守。还要持续更新以防候选人共享答案。",
            "【面试官自信过度问题】'Research has shown that structured interviews aren't more frequently used because interviewers everywhere think they're good at interviewing and don't need the help'——面试官普遍认为自己不需要帮助，这是结构化面试推广的最大障碍。",
            "【多面试官原则】Spolsky 建议：'Always try to have at least six people interview each candidate that gets hired, including at least five who would be peers'——至少 6 人面试，其中 5 人是同级同事。如果 6 人中有 2 人认为不应该录用，就不要录用。"
        ],
        handsOnPath: [
            "设计一道结构化面试题：包含初始情景问题和预设的追问，定义差/中/良/优四个等级的回答标准(Rubric)，确保所有面试官理解评分一致。",
            "实践 Shadow 面试官培训：安排新面试官先旁听 3-5 场面试，然后进行 Reverse Shadow——新面试官主持、资深面试官观察并反馈。",
            "审计当前面试流程：检查是否使用了 Brainteaser 类问题，是否有面试官主导对话时间过长的 Blowhard 问题，是否有 Quiz Show 式的琐碎知识问题。",
            "建立面试反馈机制：要求面试官在面试结束后 15 分钟内提交书面反馈，避免印象随时间模糊。使用标准化模板确保反馈可比较。",
            "进行面试官校准会议(Calibration)：选取真实面试案例，让多位面试官独立评分后讨论差异，统一对'Smart'和'Gets Things Done'的理解。"
        ],
        selfCheck: [
            "你的技术面试是否对所有候选人使用相同的问题和评分标准？还是每次即兴发挥？",
            "你在面试中说话的时间占比是多少？是否存在 Blowhard 倾向，让自己说太多？",
            "最近一次面试中，你是否问了可以 Google 到答案的琐碎知识问题？",
            "面试后你多久提交反馈？是否在记忆模糊前完成？",
            "如果 6 个面试官中有 2 个说 No，你们会怎么决定？是否有明确的决策机制？"
        ],
        extensions: [
            "深入研究 Google re:Work 的完整结构化面试指南，包括如何设计 Behavioral 和 Hypothetical 问题。",
            "学习 STAR 方法(Situation-Task-Action-Result)进行行为面试，系统性地评估候选人过往经历。",
            "探索 Work Sample Test 作为传统面试的补充——让候选人完成实际工作样本而非回答假设问题。",
            "研究 Joel Spolsky 后来的反思——他在 2018 年承认传统面试方法需要更新，建议更多使用实习/学徒制来评估。"
        ],
        sourceUrls: [
            "https://www.holloway.com/g/technical-recruiting-hiring",
            "https://www.joelonsoftware.com/2006/10/25/the-guerrilla-guide-to-interviewing-version-30/",
            "https://rework.withgoogle.com/guides/hiring-use-structured-interviewing/steps/introduction/"
        ]
    },
    "tm-4-3": {
        lessonId: "tm-4-3",
        background: [
            "【The First 90 Days 核心概念】Michael Watkins 在《The First 90 Days》中指出：新员工需要尽快达到'Break-Even Point'——价值创造等于价值消耗的平衡点。这个点大约在入职后 6 个月，而前 90 天的表现决定了能否成功达到。",
            "【Onboarding 的商业价值】Glassdoor/Brandon Hall Group 研究表明：强大的入职流程可以将新员工留存率提高 82%，生产力提高 70% 以上。但只有 12% 的员工认为他们的组织在入职方面做得好。",
            "【STARS 模型】Watkins 提出 STARS 框架来诊断新员工面临的情境：Start-up(创业期)、Turnaround(扭转期)、Accelerated Growth(加速成长期)、Realignment(重新调整期)、Sustaining Success(维持成功期)——每种情境需要不同的策略。",
            "【GitLab 的远程入职实践】作为全球最大的全远程公司(2100+ 员工，60+ 国家)，GitLab 的入职培训包含三个维度：Organizational(组织流程)、Technical(工具熟练)、Social(关系建立)。他们预期入职需要'at least two full weeks'。",
            "【Preboarding 的重要性】65% 的雇主报告候选人接受 Offer 后在第一天不出现(no-show)。入职前的空档期是关键——需要发送欢迎包、保持联系、分享团队动态来降低爽约率。"
        ],
        keyDifficulties: [
            "【常见过渡陷阱】Watkins 警告几个典型陷阱：'Sticking with what you know'(固守过去经验)、'Falling prey to the action imperative'(过早行动)、'Coming in with the answer'(带着答案入职)、'Neglecting horizontal relationships'(忽视横向关系)。",
            "【期望与现实差距】研究显示 28% 的人在入职 90 天内离职，主要原因是期望与现实不符。需要在入职前诚实沟通工作内容、团队文化和挑战，而非过度承诺。",
            "【信息过载问题】Sapling 数据显示平均新员工需要完成 54 项入职任务。任务过多会造成负面体验——Facebook 的'45-minute rule'要求所有系统在新员工到达 45 分钟内可用。",
            "【远程入职的社交挑战】GitLab 承认：'Remote work can feel isolating without intentional effort'——远程工作容易感到孤立。他们要求每位新员工安排 10 次强制性的 Coffee Chat 与随机同事建立联系。",
            "【快速产出的压力】管理者常希望新员工快速产出，但过早承担高难度任务反而会延长适应期。GitLab 明确表示：新员工前两周'shouldn't be expected to contribute heavily'。"
        ],
        handsOnPath: [
            "设计 30-60-90 天入职计划：第 30 天——理解公司战略、团队目标、建立关键关系；第 60 天——开始小规模贡献、识别改进机会；第 90 天——独立承担项目、提出改进建议。",
            "建立 Buddy 机制：为每位新员工指定一位非直属经理的 Buddy，明确 Buddy 的职责(解答问题、介绍同事、分享非正式信息)和时间承诺(前两周每天 15 分钟)。",
            "创建 Preboarding 清单：从签约到入职期间的联系计划，包括发送欢迎邮件、团队成员介绍、设备邮寄、入职前阅读材料等。",
            "设计入职反馈循环：在第 1 周、第 30 天、第 60 天、第 90 天收集新员工反馈，使用标准化问题如'On a scale of 1-5, how confident are you about your decision to join?'",
            "建立文档化的入职知识库：参照 GitLab Handbook 的模式，将所有入职信息文档化，让新员工可以'self-sufficient and proactive when looking for answers'。"
        ],
        selfCheck: [
            "新员工的第一周是否有清晰的日程安排？他们是否知道每天要做什么、见谁？",
            "你能说出最近入职员工在 STARS 模型中属于哪种情境吗？你是否据此调整了入职策略？",
            "过去一年的 90 天新员工留存率是多少？离职的主要原因是什么？",
            "Preboarding 期间你们做了什么来保持候选人的参与度？爽约率是多少？",
            "新员工是否有指定的 Buddy？Buddy 的职责和时间投入是否明确？"
        ],
        extensions: [
            "深入阅读《The First 90 Days》，特别是关于建立联盟、获得早期胜利的章节。",
            "研究 GitLab 的完整 Handbook-First 文化，了解如何通过文档化实现异步协作和快速入职。",
            "学习 Google Noogler 项目——Google 如何系统化地帮助新员工在第一年成功。",
            "探索 Stay Interview 技巧——在新员工考虑离职之前就了解他们的满意度和改进建议。"
        ],
        sourceUrls: [
            "https://www.glassdoor.com/employers/blog/new-hire-onboarding-best-practices/",
            "https://www.amazon.com/First-90-Days-Strategies-Expanded/dp/1422188612",
            "https://about.gitlab.com/company/culture/all-remote/onboarding/"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "tm-4-1": [
        {
            id: "tm-4-1-q1",
            question: "根据《Who: The A Method for Hiring》，招聘错误的代价是该职位年薪的多少倍？",
            options: [
                "5 倍",
                "10 倍",
                "15 倍或更多",
                "2-3 倍"
            ],
            answer: 2,
            rationale: "《Who》指出：'The average hiring mistake costs a company $1.5 million or more a year'，大约是年薪的 15 倍，包括直接成本和无数浪费的时间。"
        },
        {
            id: "tm-4-1-q2",
            question: "A Method for Hiring 的四个步骤是什么？",
            options: [
                "Screen, Interview, Evaluate, Hire",
                "Scorecard, Source, Select, Sell",
                "Define, Recruit, Assess, Close",
                "Plan, Search, Interview, Offer"
            ],
            answer: 1,
            rationale: "Smart 和 Street 提出的 A Method 包含四步：Scorecard(记分卡)、Source(寻源)、Select(甄选)、Sell(说服)，可以实现 90% 的招聘成功率。"
        },
        {
            id: "tm-4-1-q3",
            question: "根据《Who》，Scorecard 的三个核心组成部分是什么？",
            options: [
                "Skills, Experience, Education",
                "Mission, Outcomes, Competencies",
                "Requirements, Responsibilities, Benefits",
                "Goals, Tasks, Metrics"
            ],
            answer: 1,
            rationale: "Scorecard 包含三个要素：Mission(岗位使命)——简洁描述核心目标；Outcomes(期望成果)——设定足够高的目标；Competencies(核心能力)——行为特质和文化契合度。"
        },
        {
            id: "tm-4-1-q4",
            question: "《Who》认为最好的人才来源是什么？",
            options: [
                "招聘网站",
                "猎头服务",
                "推荐(Referrals)",
                "校园招聘"
            ],
            answer: 2,
            rationale: "Smart 和 Street 强调：'The best way to find A Players is through referrals, not advertising'——最好的人才来源是推荐而非广告。"
        },
        {
            id: "tm-4-1-q5",
            question: "《Who》对 Sourcing 的核心建议是什么？",
            options: [
                "只在有职位空缺时才开始寻找",
                "在没有招聘需求时就持续建立人才网络",
                "主要依靠招聘广告",
                "等候选人主动应聘"
            ],
            answer: 1,
            rationale: "Sourcing 是关于'systematically looking for and identifying potential talents before you actually need them'——在需要之前就系统性地寻找和识别潜在人才。"
        },
        {
            id: "tm-4-1-q6",
            question: "Will Larson 认为招聘委员会(Hiring Committee)的主要价值是什么？",
            options: [
                "加快招聘速度",
                "降低招聘成本",
                "培训招聘经理的判断力并统一标准",
                "减少面试官数量"
            ],
            answer: 2,
            rationale: "Larson 指出：'Hiring committees are a great mechanism for training hiring managers' judgment on what makes a good candidate'——招聘委员会可以培训判断力并引入一致的招聘实践。"
        },
        {
            id: "tm-4-1-q7",
            question: "《Who》提到候选人选择工作时关注的 5 Fs 不包括？",
            options: [
                "Fit(角色契合)",
                "Family(家庭)",
                "Fame(名声)",
                "Freedom(自主空间)"
            ],
            answer: 2,
            rationale: "5 Fs 包括：Fit(角色契合——最重要)、Family(家庭)、Freedom(自主空间)、Fortune(薪酬)、Fun(工作乐趣)，不包括 Fame。"
        },
        {
            id: "tm-4-1-q8",
            question: "Larson 警告高薪酬包会造成什么长期问题？",
            options: [
                "招聘速度变慢",
                "在年度薪酬调整流程中造成持续问题",
                "候选人期望过高",
                "团队士气下降"
            ],
            answer: 1,
            rationale: "Larson 指出：'Outsized compensation packages will always create ongoing problems in annual compensation processes'——过高的薪酬包会在后续年度调薪中造成问题。"
        },
        {
            id: "tm-4-1-q9",
            question: "根据《Who》，A 级人才的定义是什么？",
            options: [
                "有最好学历和经验的人",
                "能以至少 90% 概率达成记分卡成果的人",
                "薪资要求最高的人",
                "面试表现最好的人"
            ],
            answer: 1,
            rationale: "A 级人才的定义是'able to achieve the outcomes outlined in the scorecard with at least 90% probability'——能以至少 90% 概率达成记分卡上的成果。"
        },
        {
            id: "tm-4-1-q10",
            question: "《Who》认为文化不匹配会导致什么？",
            options: [
                "只影响团队氛围",
                "影响业绩底线(bottom line)",
                "没有实际影响",
                "只影响离职率"
            ],
            answer: 1,
            rationale: "《Who》明确指出：'Cultural misfits affect the bottom line'——文化不匹配的人会直接影响业绩，因此记分卡需要明确文化契合的定义。"
        },
        {
            id: "tm-4-1-q11",
            question: "Job Description 最佳实践建议包含什么来提高效率？",
            options: [
                "创意职位标题如'Code Ninja'",
                "薪资范围",
                "尽可能多的要求",
                "公司历史详情"
            ],
            answer: 1,
            rationale: "最佳实践建议包含薪资范围：'Including transparent salary ranges... helps attract qualified developers who match your budget and skill needs, saving time on unqualified applicants'。"
        },
        {
            id: "tm-4-1-q12",
            question: "Vinod Khosla 的 Gene Pool Engineering 建议招聘时应该考虑什么？",
            options: [
                "只关注团队优势",
                "同时考虑机会和风险",
                "只招聘最便宜的人",
                "只招聘有相同背景的人"
            ],
            answer: 1,
            rationale: "Khosla 指出：'It is easy to hire to boost a team's strengths without addressing a team's weaknesses'——应该同时基于机会和风险来招聘，识别团队的五大风险并找到能解决这些风险的人才。"
        }
    ],
    "tm-4-2": [
        {
            id: "tm-4-2-q1",
            question: "Google 对结构化面试的定义是什么？",
            options: [
                "使用最难的技术问题",
                "对所有候选人使用相同的面试方法",
                "只进行技术面试",
                "由多人同时面试"
            ],
            answer: 1,
            rationale: "Google 定义：'Structured interviewing simply means using the same interviewing methods to assess candidates applying for the same job'——对同一岗位的所有候选人使用相同的面试方法。"
        },
        {
            id: "tm-4-2-q2",
            question: "Joel Spolsky 评估候选人的两个核心标准是什么？",
            options: [
                "Technical Skills and Experience",
                "Smart and Gets Things Done",
                "Culture Fit and Potential",
                "Education and Communication"
            ],
            answer: 1,
            rationale: "Spolsky 提出经典的两条标准：'Smart and Gets Things Done'——聪明且能把事情做成，这是评估候选人的唯一两个重要维度。"
        },
        {
            id: "tm-4-2-q3",
            question: "Google 为什么放弃了脑筋急转弯问题？",
            options: [
                "候选人不喜欢",
                "太容易回答",
                "无法预测工作表现，只是可以通过练习提高的技能",
                "花费时间太长"
            ],
            answer: 2,
            rationale: "Google 发现：'performance on these kinds of questions is at best a discrete skill that can be improved through practice, eliminating their utility for assessing candidates'——这类问题无法预测工作表现。"
        },
        {
            id: "tm-4-2-q4",
            question: "Spolsky 描述的 Blowhard 面试官是什么？",
            options: [
                "问太多技术问题的面试官",
                "整场面试自己说话、几乎不给候选人回应时间的面试官",
                "态度恶劣的面试官",
                "迟到的面试官"
            ],
            answer: 1,
            rationale: "Spolsky 警告 Blowhard 是最糟糕的面试官：'the kind who blabs the whole time and barely leaves the candidate time to respond'——他们录用所有人因为没给候选人展示的机会。"
        },
        {
            id: "tm-4-2-q5",
            question: "Spolsky 对'Maybe, I can't tell'的建议是什么？",
            options: [
                "进行更多面试",
                "询问其他面试官意见",
                "这意味着 No Hire",
                "给候选人第二次机会"
            ],
            answer: 2,
            rationale: "Spolsky 强调：'Never say \"Maybe, I can't tell.\" If you can't tell, that means No Hire'——犹豫就意味着不录用。"
        },
        {
            id: "tm-4-2-q6",
            question: "Google 结构化面试的四个组成部分不包括？",
            options: [
                "Vetted Questions(经过验证的问题)",
                "Standardized Rubrics(标准化评分标准)",
                "Brain Teasers(脑筋急转弯)",
                "Interviewer Training(面试官培训)"
            ],
            answer: 2,
            rationale: "Google 的四个组成部分是：Vetted Questions、Comprehensive Feedback、Standardized Rubrics、Interviewer Training——明确不包括 Brain Teasers。"
        },
        {
            id: "tm-4-2-q7",
            question: "Spolsky 建议每个候选人应该由多少人面试？",
            options: [
                "2-3 人",
                "4-5 人",
                "至少 6 人，其中 5 人是同级同事",
                "越多越好"
            ],
            answer: 2,
            rationale: "Spolsky 建议：'Always try to have at least six people interview each candidate that gets hired, including at least five who would be peers'——防止一个人被骗过。"
        },
        {
            id: "tm-4-2-q8",
            question: "根据 Spolsky，如果 6 个面试官中有 2 个说 No，应该怎么决定？",
            options: [
                "按多数意见录用",
                "让更高级别的人决定",
                "不录用(Don't hire them)",
                "进行加面"
            ],
            answer: 2,
            rationale: "Spolsky 明确：'If even two of the six interviewers think a person is not worth hiring, don't hire them'——如果 6 人中有 2 人反对，就不应该录用。"
        },
        {
            id: "tm-4-2-q9",
            question: "Quiz Show Interviewer 反模式是指什么？",
            options: [
                "问太多问题",
                "考察琐碎知识而非真实能力",
                "让候选人相互竞争",
                "使用记分系统"
            ],
            answer: 1,
            rationale: "Spolsky 批评 Quiz Show Interviewers：'test trivia knowledge rather than aptitude'——如'What's the difference between varchar and varchar2?'这类可以 Google 到答案的问题毫无意义。"
        },
        {
            id: "tm-4-2-q10",
            question: "Google 研究发现结构化面试相比非结构化面试有什么优势？",
            options: [
                "更快完成",
                "更能预测候选人表现、减少偏见、提升候选人体验",
                "成本更低",
                "面试官更喜欢"
            ],
            answer: 1,
            rationale: "Google 报告：'standardized interviews supported by rubrics improve predictive validity, reduce bias, and make the hiring experience more positive for candidates'——提升预测效度、减少偏见、改善体验。"
        },
        {
            id: "tm-4-2-q11",
            question: "Google 的面试官校准(Calibration)是指什么？",
            options: [
                "统一面试问题",
                "确保面试官对什么是好/中/差回答有一致的理解",
                "调整薪资范围",
                "安排面试时间"
            ],
            answer: 1,
            rationale: "Google 解释：'Calibration across interviewers is one of the most important ways to ensure valid ratings'——通过练习确保面试官对评分有一致的参照框架。"
        },
        {
            id: "tm-4-2-q12",
            question: "Spolsky 在 2018 年对传统面试方法的反思是什么？",
            options: [
                "传统方法仍然最好",
                "应该更多使用实习/学徒制来评估",
                "应该增加更多技术问题",
                "应该完全取消面试"
            ],
            answer: 1,
            rationale: "Spolsky 承认：'For 2018, I think you need a better system... it's probably going to be more like an apprenticeship or an internship'——传统面试方法需要更新，更多使用实习来评估候选人。"
        }
    ],
    "tm-4-3": [
        {
            id: "tm-4-3-q1",
            question: "根据《The First 90 Days》，Break-Even Point 是什么？",
            options: [
                "完成所有入职培训的时间点",
                "价值创造等于价值消耗的平衡点",
                "通过试用期的时间点",
                "获得第一次晋升的时间点"
            ],
            answer: 1,
            rationale: "Watkins 定义 Break-Even Point 为'how fast can you get to a point where your value created equals the value you have consumed'——大约在入职后 6 个月达到。"
        },
        {
            id: "tm-4-3-q2",
            question: "Glassdoor/Brandon Hall Group 研究显示强大的入职流程可以将新员工留存率提高多少？",
            options: [
                "25%",
                "50%",
                "82%",
                "95%"
            ],
            answer: 2,
            rationale: "研究表明：'a strong onboarding process improved new hire retention by 82%'——强大的入职流程可以将留存率提高 82%，生产力提高 70% 以上。"
        },
        {
            id: "tm-4-3-q3",
            question: "《The First 90 Days》提到的 STARS 模型代表什么？",
            options: [
                "五种面试类型",
                "五种新员工面临的情境类型",
                "五个绩效评估维度",
                "五种领导风格"
            ],
            answer: 1,
            rationale: "STARS 代表五种情境：Start-up(创业期)、Turnaround(扭转期)、Accelerated Growth(加速成长期)、Realignment(重新调整期)、Sustaining Success(维持成功期)。"
        },
        {
            id: "tm-4-3-q4",
            question: "GitLab 预期新员工入职培训需要多长时间？",
            options: [
                "一周",
                "至少两整周，第三周进行团队特定培训",
                "一个月",
                "三个月"
            ],
            answer: 1,
            rationale: "GitLab 表示入职培训需要'at least two full weeks, with the third week designated for team-specific onboarding'——前两周不应期望新员工大量贡献。"
        },
        {
            id: "tm-4-3-q5",
            question: "Watkins 提到的常见过渡陷阱不包括？",
            options: [
                "固守过去经验(Sticking with what you know)",
                "过早行动(Falling prey to the action imperative)",
                "慢慢适应(Taking time to adapt)",
                "带着答案入职(Coming in with the answer)"
            ],
            answer: 2,
            rationale: "常见陷阱包括：固守过去经验、过早行动、带着答案入职、忽视横向关系——'慢慢适应'实际上是建议的做法，不是陷阱。"
        },
        {
            id: "tm-4-3-q6",
            question: "研究显示多少比例的雇主报告候选人接受 Offer 后不出现？",
            options: [
                "25%",
                "45%",
                "65%",
                "85%"
            ],
            answer: 2,
            rationale: "数据显示：'65% of employers say candidates have accepted positions at their companies only to no-show on their first day of work'——Preboarding 至关重要。"
        },
        {
            id: "tm-4-3-q7",
            question: "GitLab 为解决远程工作孤立感采取了什么措施？",
            options: [
                "每周全员视频会议",
                "要求每位新员工安排 10 次强制性 Coffee Chat",
                "每月线下团建",
                "每天早会"
            ],
            answer: 1,
            rationale: "GitLab 承认远程工作容易孤立，因此'arranges ten mandatory coffee chats for new employees that pair them up with a random colleague'——建立社交连接。"
        },
        {
            id: "tm-4-3-q8",
            question: "Facebook 的'45-minute rule'是什么？",
            options: [
                "面试不超过 45 分钟",
                "新员工到达 45 分钟内可以开始工作(系统已准备好)",
                "每天工作会议不超过 45 分钟",
                "午休时间为 45 分钟"
            ],
            answer: 1,
            rationale: "Facebook 的规则意味着：'all new employees can begin to work within 45 minutes of arriving because all of their systems and devices have been set up before they report'——减少入职阻力。"
        },
        {
            id: "tm-4-3-q9",
            question: "根据统计，多少比例的员工认为他们的组织在入职方面做得好？",
            options: [
                "12%",
                "35%",
                "55%",
                "75%"
            ],
            answer: 0,
            rationale: "数据显示：'A mere 12% of employees agree their organization does a good job of onboarding new employees'——这表明大多数组织的入职流程有很大改进空间。"
        },
        {
            id: "tm-4-3-q10",
            question: "研究显示多少比例的人在入职 90 天内离职？",
            options: [
                "10%",
                "28%",
                "45%",
                "60%"
            ],
            answer: 1,
            rationale: "统计显示：'28% of people leave their new jobs within 90 days of starting'——主要原因是期望与现实不符，强调了诚实沟通的重要性。"
        },
        {
            id: "tm-4-3-q11",
            question: "GitLab Handbook-First 文化的主要优势不包括？",
            options: [
                "更快的入职速度",
                "增强的透明度",
                "减少文档工作量",
                "提高的效率(自助式答案)"
            ],
            answer: 2,
            rationale: "Handbook-First 的优势包括：更快入职、增强透明度、提高效率——但实际上需要更多而非更少的文档工作来维护 2700+ 页的手册。"
        },
        {
            id: "tm-4-3-q12",
            question: "Gallup 研究发现有'exceptional'入职体验的员工有什么特点？",
            options: [
                "薪资要求更高",
                "对组织极度满意的可能性是其他人的 2.6 倍",
                "离职率更高",
                "绩效没有明显差异"
            ],
            answer: 1,
            rationale: "Gallup 发现：'employees who reported exceptional onboarding experiences were 2.6 times more likely to be extremely satisfied with their organization'——入职体验直接影响满意度。"
        }
    ]
}
