import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week8Guides: Record<string, LessonGuide> = {
    "tw-w8-1": {
        lessonId: "tw-w8-1",
        background: [
            "【作品集核心价值】作品集是技术写作面试中最有效的材料——'展示你实际完成的工作，比任何描述都更有说服力'。包含你'为之感到骄傲'或'展示特定技能'的作品。",
            "【针对性定制】根据职位定制作品集：编辑岗位需要 before/after 对比，API 文档岗位展示 HTTP 和 OpenAPI 知识，信息架构岗位展示 TOC 和知识管理示例。",
            "【版权严格限制】'当你为他人工作时，他们拥有你创作的内容，而非你'——需获得'书面明确许可'，且不能包含密码、商业机密、未发布功能或敏感信息。",
            "【简洁原则】'hiring managers and interviewers are pressed for time'——样本应简洁有力，添加简短描述解释你的创作过程、咨询对象和工作流程。",
            "【托管选择】云存储（Google Drive、Dropbox）、自建网站、WordPress、静态网站生成器（Hugo、MkDocs）通过 GitHub Pages 或 Netlify 托管。'有作品集比打造完美作品集更重要'。"
        ],
        keyDifficulties: [
            "【无权使用真实工作】替代方案：记录常用工具、编写游戏攻略、为开源项目撰写文档。这展现了'你擅长什么样的写作，以及你想向哪个方向发展'。",
            "【作品集范围选择】不需要完整的文档站点——可以是单个高质量的 README、API 参考页面或教程。质量优于数量。",
            "【展示过程而非结果】如果可能，展示你的设计决策、修订过程、用户反馈如何影响了最终版本。作品集创建过程本身就是展示问题解决和技术应用能力的样本。",
            "【技术栈抉择】使用 SSG 构建作品集本身就是展示技能的机会。但不要让技术实现阻碍内容创作——'有作品集比打造完美作品集更重要'。"
        ],
        handsOnPath: [
            "选择项目：挑选一个开源或个人项目，用 Diátaxis 框架规划文档结构——确定需要哪些 Tutorial、How-to、Reference、Explanation。",
            "创建文档站点：使用 VitePress/MkDocs/Docusaurus，配置导航和主题，部署到 GitHub Pages 或 Netlify。",
            "撰写关键页面：至少包含一份 Quickstart、一份 How-to、一份 API Reference。确保代码示例可运行、可复制。",
            "添加创作说明：为每个样本添加简短描述——你咨询了谁、遵循了什么流程、做了什么决策。",
            "质量保障：配置 markdownlint、链接检查，设置 CI 自动检查，展示你对 Docs-as-Code 的理解。",
            "最终校对：仔细检查语法和拼写错误——你的简历和作品集本身就是你能力的第一印象。"
        ],
        selfCheck: [
            "【可访问性】你的作品集是否可在线访问？招聘方能否通过 URL 直接查看？",
            "【多样性展示】你是否展示了多种文档类型（教程、指南、参考）？是否覆盖了目标职位需要的技能？",
            "【过程记录】你的作品是否有变更记录（Git history）？能否展示你的修订过程？",
            "【示例可运行】代码示例是否可运行？你是否实际测试过？",
            "【版权合规】你是否获得了所有作品的书面使用授权？是否避免了敏感信息？",
            "【简洁有力】样本是否足够简洁？是否有简短描述解释你的创作过程？"
        ],
        extensions: [
            "【Write the Docs 作品集指南】完整参考：https://www.writethedocs.org/hiring-guide/portfolios.html",
            "【优秀文档研究】研究 Stripe、Twilio、Tailwind CSS 的文档设计——信息架构、视觉层次、代码示例。",
            "【设计说明】为作品集添加'设计说明'页面：解释你的信息架构决策、受众分析、迭代过程。",
            "【社区反馈】向 Write the Docs 社区（Slack 频道或本地 Meetup）寻求作品集反馈。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/hiring-guide/portfolios.html",
            "https://diataxis.fr/",
            "https://pages.github.com/"
        ]
    },
    "tw-w8-2": {
        lessonId: "tw-w8-2",
        background: [
            "【写作测试形式】技术写作面试的常见环节：改写现有文档、为给定场景写新文档、识别并修复文档问题、现场编辑练习、限时写作任务。",
            "【评估核心能力】写作测试评估：理解受众、组织信息、清晰表达、技术准确性、遵循风格指南、在时间压力下工作的能力。",
            "【复盘核心问题】Checklist 的六个维度：读者是谁？结构是否清晰？示例是否可运行？术语是否一致？是否可搜索？是否可维护？",
            "【简历即作品】你的简历本身是作品集的首要部分——它展示了你如何组织信息、选择用词、格式化内容。'Proofread meticulously for grammar and spelling errors'。",
            "【STAR 方法】行为面试的回答框架：Situation（情境）、Task（任务）、Action（行动）、Result（结果）——用具体例子证明你的能力。"
        ],
        keyDifficulties: [
            "【时间管理】写作测试通常有时间限制。需要快速理解任务 → 规划结构 → 执行写作 → 预留时间校对。不要试图写完美的草稿。",
            "【隐含要求识别】测试题目可能没有说明所有细节。需要做出合理假设，或在提交时说明你的假设和推理过程。",
            "【展示思考过程】有时面试官更关心你的思考过程而非最终结果。可以添加注释说明你的决策理由和权衡考量。",
            "【处理不熟悉技术】你可能被要求为不熟悉的技术写文档。展示你的学习能力、信息提取能力、以及如何提出正确的问题。"
        ],
        handsOnPath: [
            "限时写作练习：给自己 30 分钟为一个功能写 Quickstart，练习在时间压力下的组织和表达能力。",
            "文档审查练习：找一份有问题的文档，列出问题（受众不匹配、结构混乱、示例错误）并提供改进建议。",
            "创建个人 Checklist：基于 Google/Microsoft 风格指南，创建你自己的快速校对检查清单。",
            "模拟面试练习：让朋友给你一个写作任务，在规定时间内完成，然后讨论你的决策过程和权衡。",
            "准备 STAR 故事：为常见行为面试问题（如'描述一次改进文档的经历'）准备具体的 STAR 回答。"
        ],
        selfCheck: [
            "【限时能力】你能否在 30 分钟内完成一份 500 字的结构清晰的 Quickstart？",
            "【校对习惯】你是否有个人的校对 Checklist？是否包含了你常犯的错误类型？",
            "【问题识别】你能否快速识别文档中的受众不匹配、结构问题、术语不一致？",
            "【决策解释】你是否准备好解释你的写作决策？能否说明为什么选择这个结构或用词？",
            "【简历质量】你的简历是否展示了技术写作技能？格式、用词、组织是否专业无误？"
        ],
        extensions: [
            "【Write the Docs 招聘指南】面试准备：https://www.writethedocs.org/hiring-guide/ —— 常见问题和建议。",
            "【Google 技术写作课程】练习题：https://developers.google.com/tech-writing —— 官方练习材料。",
            "【社区经验分享】Write the Docs Slack、Reddit r/technicalwriting 的面试经验帖。",
            "【行为面试准备】掌握 STAR 方法，为常见问题准备具体故事。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/guide/tools/testing.html",
            "https://developers.google.com/style",
            "https://learn.microsoft.com/en-us/style-guide/procedures-instructions"
        ]
    },
    "tw-w8-3": {
        lessonId: "tw-w8-3",
        background: [
            "【利益相关者访谈定义】NN/g：'与对项目有既得利益的人进行的对话，目标是收集见解以推动项目成功'——这是技术写作者获取信息的核心技能。",
            "【访谈四大目标】1) 收集背景信息（项目历史、已知约束）；2) 识别业务目标（关键指标、成功定义）；3) 达成共同愿景；4) 增强支持度（'使利益相关者感到被倾听'）。",
            "【访谈四大主题】成功指标（具体样子是什么）、优先事项（用户反馈和需要解决的问题）、历史与专业知识（约束条件）、流程与沟通（参与水平和沟通偏好）。",
            "【半结构化访谈】使用讨论指南而非脚本，确保灵活的自然对话。访谈理想在项目启动早期进行，但'永远不会太晚'。",
            "【开放式探探问题】'能否展开说一下…?'、'能举个例子吗…?'、'你为什么觉得那样…?'——引导深入而非是/否回答。"
        ],
        keyDifficulties: [
            "【从工程师获取信息】工程师忙于编码，可能没时间解释。需要准备具体问题、尊重他们的时间、展示你已做的功课——先查看代码/设计文档再提问。",
            "【处理冲突优先级】PM 想要 A，工程师想要 B，支持团队想要 C。技术写作者需要帮助协调、识别共同目标、找到平衡点。",
            "【推动文档同步交付】文档常被视为'事后工作'。需要在规划阶段就参与，将文档纳入 Definition of Done 或发布清单。",
            "【建立长期协作关系】单次成功不够，需要建立持续的信任和沟通渠道。定期同步、主动分享进展、及时响应需求。"
        ],
        handsOnPath: [
            "准备访谈指南：列出关键问题——功能目标、目标用户、已知限制、成功指标、时间线、沟通偏好。",
            "练习信息提取：与开发者交流技术概念，用你的话复述，验证理解是否准确。'能举个例子吗？'",
            "模拟需求澄清：PM 给你模糊需求，练习提问以澄清：谁是读者？完成什么任务？什么时候需要？成功标准？",
            "建立反馈渠道：为你负责的文档创建反馈机制，定期与支持团队沟通了解用户痛点和高频问题。",
            "推动流程改进：提议将文档检查点纳入产品开发流程，让文档与功能同步交付。"
        ],
        selfCheck: [
            "【访谈准备】你是否有一套标准的访谈问题？是否覆盖了业务目标、用户需求、技术约束？",
            "【信息验证】你能否用非技术语言解释复杂的技术概念？能否验证你的理解是否准确？",
            "【流程参与】你是否了解产品发布流程？文档是否被纳入发布计划？",
            "【沟通渠道】你与工程师、PM、支持团队的沟通渠道是否畅通？他们是否主动分享信息？",
            "【用户洞察】你是否定期与用户接触的团队（支持、销售）沟通以了解用户痛点？"
        ],
        extensions: [
            "【NN/g 利益相关者访谈】方法详解：https://www.nngroup.com/articles/stakeholder-interviews/ —— 问题设计、访谈技巧。",
            "【Write the Docs 协作指南】https://www.writethedocs.org/guide/doc-ops.html —— 跨团队协作最佳实践。",
            "【推荐阅读】《The Product is Docs》——了解文档在产品团队中的角色定位。",
            "【积极倾听技巧】复述对方观点、提问深入理解、避免打断——建立信任的沟通方式。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/book-club/splunk-product-docs/17-working-with-engineers/",
            "https://www.writethedocs.org/guide/doc-ops.html",
            "https://www.nngroup.com/articles/stakeholder-interviews/"
        ]
    },
    "tw-w8-4": {
        lessonId: "tw-w8-4",
        background: [
            "【Write the Docs 社区定位】全球文档工作者社区，成员包括程序员、技术写作者、开发者关系、客户支持等——'considers anyone who cares about communication, documentation, and their users to be a member of our community'。",
            "【职业发展双路径】深度方向：领域专家（API 文档、安全文档）、信息架构师、内容策略师；广度方向：产品经理、开发者关系（DevRel）、技术培训、用户体验写作。",
            "【核心软技能】Write the Docs：'Be bold. Own what you do'——主动展示技术写作工作的价值，积极提问不畏惧看似'愚蠢'的问题，持续学习新技术提升市场竞争力。",
            "【技术技能基础】必备技能包括：Git 版本控制、命令行操作、Markdown/DITA 标记语言、HTML/CSS 基础、专业工具（MadCap Flare、Adobe Tech Comms Suite）。",
            "【薪资透明倡议】Write the Docs 自 2019 年启动年度薪资调查，'help community members better understand what an appropriate salary is and provide a basis for future negotiations'。"
        ],
        keyDifficulties: [
            "【深度 vs 广度抉择】是成为特定领域（云计算、区块链、API）的专家，还是通用型技术写作者？取决于个人兴趣、市场需求和职业目标。",
            "【价值量化挑战】文档价值难以直接量化。需学习用数据证明贡献：支持工单减少率、用户满意度提升、首次解决率改善、文档使用指标。",
            "【晋升路径模糊】技术写作可能没有明确的晋升阶梯。需主动定义成长方向，与管理者沟通期望，建立个人品牌和影响力。",
            "【远程协作障碍】技术写作日益远程化。需掌握异步沟通技巧、跨时区协作工具、主动建立信任关系、推动虚拟环境中的项目进展。",
            "【持续学习压力】技术不断演进，新框架、新工具、新最佳实践持续涌现。Write the Docs：文档指南是'living, breathing guide'，需保持学习习惯。"
        ],
        handsOnPath: [
            "技能评估：对照 Write the Docs 技能清单（soft skills + technical skills），识别强项和发展领域，建立个人技能矩阵。",
            "学习计划：选择 1-2 个目标技能（API 文档、视频教程、信息架构），制定学习资源清单和实践项目。",
            "社区参与：加入 Write the Docs Slack（数千名成员）、参加本地 Meetup 或虚拟活动，建立专业网络。",
            "贡献记录：建立'成就日志'——完成的项目、获得的反馈、可量化的成果、解决的问题，为绩效评估和面试准备素材。",
            "面试准备：按 Write the Docs 面试指南准备——用具体项目回答而非抽象描述，准备向面试官提问的问题清单。",
            "薪资研究：查阅 Write the Docs 年度薪资调查数据（2019-2024），了解行业薪资水平，为谈判做准备。"
        ],
        selfCheck: [
            "【方向清晰度】你是否清楚职业发展方向？是向深度（领域专家）还是广度（跨领域角色）发展？",
            "【技能差距】你是否识别了需要发展的技能？是否有具体的学习计划和时间表？",
            "【社区连接】你是否加入了技术写作社区？是否与同行保持交流、获取反馈？",
            "【成就记录】你是否记录了贡献和成就？能否在面试中用 STAR 方法讲述具体例子？",
            "【行业关注】你是否关注行业趋势？是否持续学习新工具和最佳实践？",
            "【薪资认知】你是否了解行业薪资水平？是否有数据支持薪资谈判？"
        ],
        extensions: [
            "【Write the Docs 招聘指南】完整资源：https://www.writethedocs.org/hiring-guide/ —— 社区访谈、面试问题、技能清单、自由职业指南。",
            "【全球 Meetup 网络】北美 13 个、欧洲 6 个、亚洲 2 个、大洋洲和非洲各有活跃社区，支持线上和线下参与。",
            "【薪资调查数据】2019-2024 年度调查结果，涵盖薪资基准、福利、远程工作模式、工作满意度。",
            "【软件文档指南】Write the Docs 社区维护的'living guide'，涵盖 Docs-as-Code、风格指南、可访问性、工具选择等主题。",
            "【行业播客和博客】Write the Docs Podcast、I'd Rather Be Writing、Every Page is Page One——持续学习的优质来源。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/hiring-guide/",
            "https://www.writethedocs.org/",
            "https://www.writethedocs.org/meetups/",
            "https://www.writethedocs.org/surveys/",
            "https://www.writethedocs.org/guide/"
        ]
    }
}

export const week8Quizzes: Record<string, QuizQuestion[]> = {
    "tw-w8-1": [
        {
            id: "tw-w8-1-q1",
            question: "技术写作作品集中使用前雇主的工作内容时，需要注意什么？",
            options: [
                "可以自由使用所有之前的工作成果",
                "需获得书面明确许可，且不能包含密码、商业机密、未发布功能或敏感信息",
                "只要注明来源即可使用",
                "离职后自动获得所有内容的版权"
            ],
            answer: 1,
            rationale: "版权严格限制：'当你为他人工作时，他们拥有你创作的内容'——需获得'书面明确许可'，且不能包含密码、商业机密、未发布功能或敏感信息。"
        },
        {
            id: "tw-w8-1-q2",
            question: "如果无权使用真实工作成果作为作品集，有什么替代方案？",
            options: [
                "没有替代方案，必须使用真实工作成果",
                "记录常用工具、编写游戏攻略、为开源项目撰写文档",
                "只能使用在线课程的作业",
                "只能提交空白模板"
            ],
            answer: 1,
            rationale: "替代方案包括：记录常用工具、编写游戏攻略、为开源项目撰写文档——这展现了你擅长的写作类型和发展方向。"
        },
        {
            id: "tw-w8-1-q3",
            question: "关于技术写作作品集的构建，最重要的原则是什么？",
            options: [
                "必须使用最先进的技术栈",
                "作品集必须包含至少 20 份文档",
                "'有作品集比打造完美作品集更重要'",
                "必须有专业设计师参与设计"
            ],
            answer: 2,
            rationale: "核心原则是'有作品集比打造完美作品集更重要'——不要让技术实现阻碍内容创作，招聘方更看重内容质量而非外观。"
        }
    ],
    "tw-w8-2": [
        {
            id: "tw-w8-2-q1",
            question: "技术写作面试中的写作测试主要评估哪些核心能力？",
            options: [
                "打字速度和词汇量",
                "理解受众、组织信息、清晰表达、技术准确性、遵循风格指南",
                "编程能力和数据库知识",
                "项目管理和团队领导力"
            ],
            answer: 1,
            rationale: "写作测试评估：理解受众、组织信息、清晰表达、技术准确性、遵循风格指南、在时间压力下工作的能力。"
        },
        {
            id: "tw-w8-2-q2",
            question: "行为面试中的 STAR 方法包含哪四个要素？",
            options: [
                "Strategy、Tools、Approach、Review",
                "Situation（情境）、Task（任务）、Action（行动）、Result（结果）",
                "Summary、Timeline、Assessment、Reflection",
                "Scope、Target、Activity、Report"
            ],
            answer: 1,
            rationale: "STAR 方法是行为面试的回答框架：Situation（情境）、Task（任务）、Action（行动）、Result（结果）——用具体例子证明能力。"
        },
        {
            id: "tw-w8-2-q3",
            question: "文档复盘 Checklist 的六个核心维度是什么？",
            options: [
                "字数、格式、字体、颜色、排版、间距",
                "读者是谁、结构是否清晰、示例是否可运行、术语是否一致、是否可搜索、是否可维护",
                "标题、正文、图片、链接、表格、代码",
                "创建日期、更新日期、作者、审核人、版本、状态"
            ],
            answer: 1,
            rationale: "复盘 Checklist 的六个维度：读者是谁？结构是否清晰？示例是否可运行？术语是否一致？是否可搜索？是否可维护？"
        }
    ],
    "tw-w8-3": [
        {
            id: "tw-w8-3-q1",
            question: "NN/g 定义的利益相关者访谈有哪四大目标？",
            options: [
                "销售产品、获取投资、招聘人才、扩大市场",
                "收集背景信息、识别业务目标、达成共同愿景、增强支持度",
                "编写代码、测试功能、部署上线、监控运营",
                "设计界面、开发功能、发布产品、收集反馈"
            ],
            answer: 1,
            rationale: "访谈四大目标：收集背景信息（项目历史、已知约束）、识别业务目标（关键指标、成功定义）、达成共同愿景、增强支持度（使利益相关者感到被倾听）。"
        },
        {
            id: "tw-w8-3-q2",
            question: "从工程师获取信息时，最有效的准备策略是什么？",
            options: [
                "不需要准备，直接提问即可",
                "准备具体问题、先查看代码/设计文档再提问、尊重他们的时间",
                "发送长邮件列出所有问题",
                "要求工程师自己写文档"
            ],
            answer: 1,
            rationale: "工程师忙于编码，可能没时间解释。需要准备具体问题、尊重他们的时间、展示你已做的功课——先查看代码/设计文档再提问。"
        },
        {
            id: "tw-w8-3-q3",
            question: "利益相关者访谈中应使用什么类型的问题来引导深入讨论？",
            options: [
                "是/否的封闭式问题",
                "开放式探探问题，如'能否展开说一下…?'、'能举个例子吗…?'",
                "带有预设答案的引导性问题",
                "技术细节的专业问题"
            ],
            answer: 1,
            rationale: "使用开放式探探问题引导深入讨论：'能否展开说一下…?'、'能举个例子吗…?'、'你为什么觉得那样…?'——引导深入而非是/否回答。"
        }
    ],
    "tw-w8-4": [
        {
            id: "tw-w8-4-q1",
            question: "Write the Docs 社区认为哪些人属于'社区成员'？",
            options: [
                "只有专业的技术写作者",
                "任何关心沟通、文档和用户体验的人",
                "只有拥有技术写作证书的人",
                "只有开源项目的贡献者"
            ],
            answer: 1,
            rationale: "Write the Docs 社区认为'任何关心沟通、文档和用户体验的人都是社区成员'，包括程序员、技术写作者、开发者关系、客户支持等。"
        },
        {
            id: "tw-w8-4-q2",
            question: "技术写作者如何量化自身的贡献价值？",
            options: [
                "通过写出的文档数量来衡量",
                "通过支持工单减少率、用户满意度提升、首次解决率改善等数据",
                "通过获得的证书数量来衡量",
                "通过参加的会议数量来衡量"
            ],
            answer: 1,
            rationale: "文档价值需要用数据证明：支持工单减少率、用户满意度提升、首次解决率改善、文档使用指标等，将主观感受转化为可量化的贡献。"
        },
        {
            id: "tw-w8-4-q3",
            question: "技术写作的职业发展有哪两个主要方向？",
            options: [
                "前端和后端",
                "深度方向（领域专家、信息架构师）和广度方向（产品经理、DevRel、UX 写作）",
                "管理方向和技术方向",
                "国内市场和国际市场"
            ],
            answer: 1,
            rationale: "职业发展双路径：深度方向（领域专家、信息架构师、内容策略师）；广度方向（产品经理、开发者关系、技术培训、用户体验写作）。"
        }
    ]
}
