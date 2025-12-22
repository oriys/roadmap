import type { QuizQuestion } from "../types";

export const week1: Record<string, QuizQuestion[]> = {
  // Lesson 1: 技术写作的目标与交付物 (12题，答案随机分布)
  "tw-w1-1": [
    {
      id: "tw-w1-1-q1",
      question: "Write the Docs 用 'Your code from 6 months ago looks like code that someone else wrote' 这句话想说明什么？",
      options: [
        "代码风格应该保持一致",
        "人类工作记忆有根本局限性，文档是必要的认知卸载机制",
        "应该定期重构代码",
        "代码注释比文档更重要",
      ],
      answer: 1,
      rationale:
        "Write the Docs 通过这句话揭示人类记忆的局限性——即使是自己写的代码，时间一长也会变得陌生。文档作为'外部记忆'是必需的。",
    },
    {
      id: "tw-w1-1-q2",
      question: "根据 Google Technical Writing 的'文档方程式'，好的文档等于什么？",
      options: [
        "所有技术细节的完整记录",
        "尽可能简短的说明",
        "读者需要的知识 减去 读者已有的知识",
        "专家认为重要的内容",
      ],
      answer: 2,
      rationale:
        "Google 的公式：Good documentation = Knowledge audience needs − Knowledge audience already has。文档应该填补'知识鸿沟'，而非重复读者已知的内容或遗漏他们需要的内容。",
    },
    {
      id: "tw-w1-1-q3",
      question: "Diátaxis 框架将文档分为四种类型，以下哪项正确描述了它们的区分维度？",
      options: [
        "按文档长度和复杂度区分",
        "按作者的技术水平区分",
        "按用户的认知状态（学习态/执行态/查询态/理解态）区分",
        "按发布时间和版本区分",
      ],
      answer: 2,
      rationale:
        "Diátaxis 基于用户在特定时刻的认知需求进行区分：Tutorials（学习态）、How-to（执行态）、Reference（查询态）、Explanation（理解态）。同一个用户在不同情境下需求完全不同。",
    },
    {
      id: "tw-w1-1-q4",
      question: "关于'知识诅咒'（Curse of Knowledge），以下哪项描述最准确？",
      options: [
        "专家无法分辨正确和错误的知识",
        "知道得越多写作能力越差",
        "专家难以识别哪些对新手来说需要解释，因为他们已忘记当初不懂时的感受",
        "技术知识会让人变得傲慢",
      ],
      answer: 2,
      rationale:
        "Google Technical Writing 指出：专家往往无意识地引用隐性知识，创造出新手脑中'文件未找到'的状态——他们不知道自己不知道什么。",
    },
    {
      id: "tw-w1-1-q5",
      question: "为什么 Write the Docs 建议避免过度依赖 FAQ？",
      options: [
        "FAQ 容易过时、内容散乱、难以检索，且往往是逃避写正式文档的借口",
        "FAQ 格式不兼容现代文档系统",
        "用户不喜欢阅读问答形式的内容",
        "FAQ 会增加文档的维护成本",
      ],
      answer: 0,
      rationale:
        "Write the Docs 明确警告：FAQ 看似有用，实则是'快速修复'的陷阱。它们内容杂乱、难以搜索，且'问题'往往来自作者想象而非真实用户反馈。",
    },
    {
      id: "tw-w1-1-q6",
      question: "一份最小可用的 README 必须包含哪些核心要素？",
      options: [
        "完整的 API 参考和架构图",
        "项目历史、团队成员、路线图",
        "每个函数的详细注释和测试结果",
        "问题陈述（Why）、安装说明（Install）、使用示例（Usage）、许可证（License）",
      ],
      answer: 3,
      rationale:
        "Write the Docs 指出 README 的必要元素：解决什么问题、如何安装、基本使用示例、许可证信息。这四者缺一不可，但也不必过度展开。",
    },
    {
      id: "tw-w1-1-q7",
      question: "文档对开源项目吸引贡献者的作用体现在哪里？",
      options: [
        "可以用来筛选不合格的贡献者",
        "强制贡献者必须先阅读所有文档",
        "降低参与门槛，且改进文档本身就是有效的贡献形式",
        "减少代码审核的工作量",
      ],
      answer: 2,
      rationale:
        "Write the Docs 强调：对于新手来说，修改文档往往比修改代码更容易上手，文档贡献本身是有效的参与方式（documentation itself is a valid contribution）。",
    },
    {
      id: "tw-w1-1-q8",
      question: "Diátaxis 框架中的 Reference 文档应该具有什么特征？",
      options: [
        "详细解释设计决策和历史背景",
        "提供从零到一的学习路径",
        "面向具体工作任务的步骤指南",
        "中立、准确、完整的技术描述，像地图对应地理位置",
      ],
      answer: 3,
      rationale:
        "Diátaxis 明确指出：Reference 应该'仅描述，勿指导'（describe, don't explain），保持中立和权威，如实反映系统的结构和行为。",
    },
    {
      id: "tw-w1-1-q9",
      question: "撰写技术文档的过程本身能改进代码设计，其原因是什么？",
      options: [
        "文档写作会自动检测代码 Bug",
        "写文档时必须遵循代码规范",
        "写作迫使开发者理清设计决策并显性化隐性假设",
        "文档工具会分析代码质量",
      ],
      answer: 2,
      rationale:
        "Write the Docs 指出：撰写文档的思考过程（the process of writing）能改进设计，因为它强制你解释'为什么这样做'，从而暴露潜在的设计问题。",
    },
    {
      id: "tw-w1-1-q10",
      question: "在为国际受众写作时，应该避免什么？",
      options: [
        "使用简单句和清晰的结构",
        "成语、文化隐喻和特定地区的幽默（如 'a piece of cake'、'Bob's your uncle'）",
        "使用第二人称 'you'",
        "提供代码示例",
      ],
      answer: 1,
      rationale:
        "Google Technical Writing 强调：成语和文化隐喻难以翻译且可能造成误解。'Kosher'、'sticky wicket' 等表达对非母语读者毫无意义。",
    },
    {
      id: "tw-w1-1-q11",
      question: "关于文档的'可验证性'，以下哪项做法是正确的？",
      options: [
        "只需要描述操作步骤，用户自己判断是否成功",
        "在每个章节末尾添加'常见问题'部分",
        "每个操作步骤都应有对应的预期结果，让用户能验证自己做对了",
        "提供详细的理论背景让用户理解原理",
      ],
      answer: 2,
      rationale:
        "文档的可用性与代码的可测试性同等重要——如果用户无法验证成功，文档就是失败的。每个步骤都需要明确的'预期输出'。",
    },
    {
      id: "tw-w1-1-q12",
      question: "Tutorial 与 How-to Guide 的核心区别是什么？",
      options: [
        "Tutorial 面向学习者从零开始教学，How-to Guide 假定用户已知目标并具备基础能力",
        "Tutorial 更长，How-to Guide 更短",
        "Tutorial 只有文字，How-to Guide 必须有图片",
        "Tutorial 由官方编写，How-to Guide 由社区贡献",
      ],
      answer: 0,
      rationale:
        "Diátaxis 明确区分：Tutorial 是学习导向的完整教学；How-to Guide 假定用户已知自己想做什么，仅提供行动指引，无需从头教起。",
    },
  ],
  // Lesson 2: 读者分析与任务导向 (12题，答案随机分布)
  "tw-w1-2": [
    {
      id: "tw-w1-2-q1",
      question: "Google Technical Writing 给出的'文档质量方程'是什么？",
      options: [
        "质量 = 文档长度 × 技术深度",
        "质量 = 专家认可度 + 格式规范度",
        "质量 = 读者需要的知识 − 读者已有的知识",
        "质量 = 完整性 + 准确性 + 及时性",
      ],
      answer: 2,
      rationale:
        "Google 的公式：Good documentation = Knowledge audience needs − Knowledge audience already has。质量是相对于特定受众的'适配度'。",
    },
    {
      id: "tw-w1-2-q2",
      question: "Nielsen Norman Group 定义的 Persona 的本质是什么？",
      options: [
        "真实用户的匿名化档案",
        "基于用户研究的虚构但现实的典型用户描述，利用人类对具体个案的共鸣",
        "市场细分的统计模型",
        "用户访谈的原始记录",
      ],
      answer: 1,
      rationale:
        "NN/G: Persona 是'虚构但现实的'描述，利用心理学原理——我们对具体个案比抽象统计更有共鸣。",
    },
    {
      id: "tw-w1-2-q3",
      question: "Google 建议从哪三个维度定义目标受众？",
      options: [
        "角色（Role）、与主题的距离（Proximity）、时间因素（Time）",
        "年龄、职业、收入",
        "学历、经验、偏好",
        "地区、语言、文化",
      ],
      answer: 0,
      rationale:
        "Google Technical Writing 的三维度：角色（如工程师/PM）、Proximity（对相关领域的熟悉度）、Time（知识是否因久未使用而衰退）。",
    },
    {
      id: "tw-w1-2-q4",
      question: "'知识诅咒'（Curse of Knowledge）的核心机制是什么？",
      options: [
        "专家知道太多，无法简化表达",
        "专家傲慢，不愿意解释基础概念",
        "专家忘记了曾经不知道，无意识引用隐性知识，创造新手脑中的'文件未找到'",
        "专家使用的术语太专业",
      ],
      answer: 2,
      rationale:
        "关键不是'知道太多'，而是'忘记了曾经不知道'。专家不知道自己不知道什么需要解释。",
    },
    {
      id: "tw-w1-2-q5",
      question: "NN/g 警告 Persona 的哪个陷阱？",
      options: [
        "Persona 太详细会分散注意力",
        "Persona 必须基于研究，每个细节都应'有目的'，与决策无关的信息会稀释价值",
        "Persona 不能有名字和照片",
        "Persona 只能有一个",
      ],
      answer: 1,
      rationale:
        "NN/g 强调：Persona 必须基于真实用户研究，且'each piece of information should have a purpose'。",
    },
    {
      id: "tw-w1-2-q6",
      question: "'The Elastic User'（弹性用户）反模式指的是什么？",
      options: [
        "用户需求经常变化",
        "用户群体太分散",
        "当团队说'用户会喜欢'时，'用户'被无限拉伸以适应任何设计决策",
        "用户对产品的期望过高",
      ],
      answer: 2,
      rationale:
        "弹性用户反模式：模糊的'用户'可以证明任何决策。解决方法是用具名 Persona 强制回答'Alice 会用这个吗？'",
    },
    {
      id: "tw-w1-2-q7",
      question: "Diátaxis 框架的双轴模型基于哪两个维度？",
      options: [
        "简单 vs 复杂，短 vs 长",
        "官方 vs 社区，理论 vs 实践",
        "行动 vs 认知（做事/理解），获取 vs 应用（学习/工作）",
        "入门 vs 进阶，概念 vs 操作",
      ],
      answer: 2,
      rationale:
        "Diátaxis 的两个正交轴：行动/认知（用户是想做事还是想理解）、获取/应用（用户是在学习还是在工作）。",
    },
    {
      id: "tw-w1-2-q8",
      question: "同一个用户在不同时刻可能处于哪些认知状态？",
      options: [
        "只有'使用'和'不使用'两种状态",
        "学习态、执行态、查询态、理解态——需求完全不同",
        "满意和不满意",
        "新手和专家",
      ],
      answer: 1,
      rationale:
        "用户状态是动态的：学习时需要 Tutorial，执行时需要 How-to，查询时需要 Reference，理解时需要 Explanation。",
    },
    {
      id: "tw-w1-2-q9",
      question: "如何测量'读者已知什么'这个知识鸿沟？",
      options: [
        "猜测用户的技术水平",
        "明确前置条件并检验、让目标用户测试、分析支持工单中的常见困惑",
        "参考竞争对手的文档",
        "询问团队内部的专家",
      ],
      answer: 1,
      rationale:
        "三种方法：(1) 明确前置条件并检验，(2) 让目标用户实际测试，(3) 分析支持工单中的常见困惑。",
    },
    {
      id: "tw-w1-2-q10",
      question: "有效的 Persona 应该包含哪些核心要素？",
      options: [
        "只需要名字和职位",
        "名字、角色、技术背景、核心目标、痛点、态度引用语",
        "年龄、性别、收入",
        "购买历史和消费偏好",
      ],
      answer: 1,
      rationale:
        "NN/G 建议 Persona 包含：名字（增强记忆）、角色、背景、目标、痛点、引用语（体现态度）。",
    },
    {
      id: "tw-w1-2-q11",
      question: "检测文档是否犯了'弹性用户'错误的方法是什么？",
      options: [
        "检查文档长度",
        "搜索所有'用户'一词，尝试替换为具体 Persona 名字，看句子是否仍然合理",
        "统计文档中术语的使用频率",
        "让 AI 分析文档质量",
      ],
      answer: 1,
      rationale:
        "如果'用户想要 X'替换为'Alice 想要 X'后变得不合理，说明你在为一个不存在的人写作。",
    },
    {
      id: "tw-w1-2-q12",
      question: "Persona 在团队协作中的核心价值是什么？",
      options: [
        "装饰会议室墙壁",
        "替代用户调研",
        "作为'属性、欲望和行为的简写'，让团队快速对齐'这个功能对 Alice 合适吗？'",
        "向投资人展示用户规模",
      ],
      answer: 2,
      rationale:
        "NN/G: Persona 在会议中充当简写，将抽象讨论转化为具体决策：'Alice 会用这个功能吗？为什么？'",
    },
  ],
  // Lesson 3: 结构化写作与 Diátaxis 框架 (12题，答案随机分布)
  "tw-w1-3": [
    {
      id: "tw-w1-3-q1",
      question: "Diátaxis 框架解决文档的哪三个维度问题？",
      options: [
        "语法、词汇、标点",
        "内容（写什么）、风格（如何写）、架构（如何组织）",
        "标题、正文、附录",
        "计划、执行、发布",
      ],
      answer: 1,
      rationale:
        "Diátaxis 系统性地解决三个维度：content（内容）、style（风格）、architecture（架构）。",
    },
    {
      id: "tw-w1-3-q2",
      question: "Tutorial 与 How-to Guide 的本质区别是什么？",
      options: [
        "Tutorial 服务于'学习态'用户，How-to 服务于'执行态'用户",
        "Tutorial 更长，How-to 更短",
        "Tutorial 用于入门，How-to 用于进阶",
        "Tutorial 有视频，How-to 只有文字",
      ],
      answer: 0,
      rationale:
        "关键区别：Tutorial 面向'我不知道怎么做'的学习者；How-to 面向'我知道我要什么，告诉我怎么做'的执行者。",
    },
    {
      id: "tw-w1-3-q3",
      question: "Diátaxis 对 Tutorial 写作的核心建议'最小化解释'的原因是什么？",
      options: [
        "解释会增加翻译成本",
        "新手看不懂复杂的解释",
        "Tutorial 目标是提供学习体验，过多解释分散注意力，应让学习自然发生",
        "篇幅限制",
      ],
      answer: 2,
      rationale:
        "Diátaxis: Tutorial 的目标是让学习者'通过做来学'，解释性内容应该链接到 Explanation 文档。",
    },
    {
      id: "tw-w1-3-q4",
      question: "Reference 文档的四项核心原则是什么？",
      options: [
        "有趣、互动、可分享、可打印",
        "纯粹描述、采用标准模式、镜像产品结构、包含示例",
        "简短、快速、易懂、免费",
        "完整、正确、及时、美观",
      ],
      answer: 1,
      rationale:
        "Diátaxis 的 Reference 四原则：neutral description（纯描述）、consistent structure（标准模式）、mirror product（镜像产品）、include examples（示例）。",
    },
    {
      id: "tw-w1-3-q5",
      question: "How-to Guide 中'工具是配角'（tools are secondary actors）意味着什么？",
      options: [
        "不需要提及工具名称",
        "工具版本不重要",
        "应该聚焦用户目标而非工具操作，用户为达成目的而来",
        "工具说明应放在附录",
      ],
      answer: 2,
      rationale:
        "Diátaxis: 'The user's purpose is the defining factor'。How-to 应该回答'如何达成 X'而非'如何使用工具 Y'。",
    },
    {
      id: "tw-w1-3-q6",
      question: "Explanation 文档的独特价值是什么？",
      options: [
        "它是必须最先编写的文档",
        "它是唯一可能在远离产品时阅读的文档，建立心智模型和因果理解",
        "它替代了所有其他类型",
        "它是最短的文档类型",
      ],
      answer: 1,
      rationale:
        "Diátaxis: Explanation 是'唯一可能在洗澡时阅读的文档'——它不服务于即时任务，但建立深层理解。",
    },
    {
      id: "tw-w1-3-q7",
      question: "'Every Page is Page One'原则要求文档做到什么？",
      options: [
        "所有页面长度相同",
        "每个页面自包含，有足够上下文让从搜索直接跳入的用户理解当前位置",
        "每个页面必须是独立的 PDF",
        "每个页面只能有一个作者",
      ],
      answer: 1,
      rationale:
        "假设用户可能通过搜索直接降落在任何页面，因此每个页面必须提供足够的上下文和前置知识链接。",
    },
    {
      id: "tw-w1-3-q8",
      question: "Reference 文档为什么应该'镜像产品结构'（mirror the structure of the product）？",
      options: [
        "这样更容易生成",
        "让文档组织结构与产品逻辑对应，用户可以根据产品层级找到对应文档",
        "这是法律要求",
        "这样翻译更方便",
      ],
      answer: 1,
      rationale:
        "Diátaxis: Reference 的组织应该反映产品本身的结构——API 文档层级对应 API 层级，配置文档结构对应配置系统。",
    },
    {
      id: "tw-w1-3-q9",
      question: "Tutorial 的七项写作原则中，'频繁提供可见结果'的目的是什么？",
      options: [
        "增加页面浏览量",
        "让学习者快速建立因果联系，保持动力和信心",
        "方便添加截图",
        "减少用户提问",
      ],
      answer: 1,
      rationale:
        "Diátaxis: 频繁的可见反馈让学习者能够'connect cause and effect rapidly'，保持学习动力。",
    },
    {
      id: "tw-w1-3-q10",
      question: "Explanation 与其他三类文档的根本不同在于什么？",
      options: [
        "它可以表达观点、讨论替代方案、承认多元性",
        "它必须最短",
        "它不需要审核",
        "它只能由资深作者编写",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Explanation 是唯一可以'表达观点、讨论历史、承认替代方案'的类型，因为它面向理解而非行动。",
    },
    {
      id: "tw-w1-3-q11",
      question: "什么是'类型污染'（type contamination）？",
      options: [
        "文档格式不统一",
        "在 Reference 中混入教学，在 How-to 中添加原理解释，破坏类型纯粹性",
        "使用了过时的术语",
        "文档版本混乱",
      ],
      answer: 1,
      rationale:
        "类型污染是 Diátaxis 的常见反模式——混杂不同类型的内容会降低文档的效率和可用性。",
    },
    {
      id: "tw-w1-3-q12",
      question: "How-to Guide 使用条件式祈使句（如'If you want X, do Y'）的原因是什么？",
      options: [
        "这是语法规范要求",
        "尊重用户已知目标，直接给出达成目标的方法，而非假设用户需要被教导",
        "翻译更容易",
        "减少字数",
      ],
      answer: 1,
      rationale:
        "How-to 假定用户知道自己要什么，使用'If you want X, do Y'直接响应用户目标，而非像 Tutorial 那样引导学习。",
    },
  ],
  // Lesson 4: 清晰表达与风格指南 (7题)
  "tw-w1-4": [
    {
      id: "tw-w1-4-q1",
      question: "为什么技术文档风格指南普遍推荐使用主动语态（Active Voice）？",
      options: [
        "主动语态明确了'谁做了什么'，减少歧义且通常更简洁",
        "主动语态是语法规范的要求",
        "被动语态在技术文档中是错误的",
        "主动语态翻译成本更低",
      ],
      answer: 0,
      rationale:
        "Google/Microsoft Style Guide: 主动语态直接清晰，被动语态往往隐藏了动作执行者，造成理解困难。",
    },
    {
      id: "tw-w1-4-q2",
      question: "Google Style Guide 建议对'将来时态'（Future Tense）采取什么态度？",
      options: [
        "尽量避免，优先使用现在时态描述软件行为",
        "只在描述新功能时使用",
        "与过去时态交替使用增加变化",
        "在 API 文档中必须使用将来时态",
      ],
      answer: 0,
      rationale:
        "Google Style Guide: 文档描述的是软件'现在'的工作方式，使用现在时态更准确且易于维护。",
    },
    {
      id: "tw-w1-4-q3",
      question: "在技术文档中，如何正确处理首字母缩写词（Acronyms）？",
      options: [
        "首次出现时拼写全称并附带缩写，如'Content Delivery Network (CDN)'",
        "始终只使用缩写以节省空间",
        "在文档末尾统一解释所有缩写",
        "假设读者都知道常见缩写的含义",
      ],
      answer: 0,
      rationale:
        "风格指南普遍要求：首次使用缩写时必须给出全称，不要假设读者知道缩写的含义。",
    },
    {
      id: "tw-w1-4-q4",
      question: "Microsoft Style Guide 建议用'Select'替代'Click'的原因是什么？",
      options: [
        "'Select'适用于多种输入设备（鼠标、触屏、键盘），更具设备无关性",
        "'Select'听起来更专业",
        "'Click'在某些语言中有负面含义",
        "这是 Windows 系统的术语规范",
      ],
      answer: 0,
      rationale:
        "Microsoft Style Guide: 使用设备无关的术语，让文档适用于所有用户，不论他们使用什么输入方式。",
    },
    {
      id: "tw-w1-4-q5",
      question: "风格指南中的'Parallel Structure'（平行结构）是指什么？",
      options: [
        "列表中的每一项保持语法一致，如都用动词开头或都用名词短语",
        "文档的左右两栏对齐",
        "中英文使用相同的句式",
        "所有标题使用相同的长度",
      ],
      answer: 0,
      rationale:
        "平行结构让列表更易扫描和理解，降低读者的认知负荷。",
    },
    {
      id: "tw-w1-4-q6",
      question: "技术文档中应如何处理模糊修饰语（如 very, quickly, easily）？",
      options: [
        "尽量删除或替换为具体数据，如用'50ms'替代'Fast'",
        "使用模糊修饰语让语气更友好",
        "在技术指标旁边加上模糊修饰语作为补充",
        "只在营销文档中使用模糊修饰语",
      ],
      answer: 0,
      rationale:
        "技术文档追求精确，主观的模糊表述应替换为可验证的客观数据。",
    },
    {
      id: "tw-w1-4-q7",
      question: "Global English（全球英语）写作建议避免什么？",
      options: [
        "避免成语、文化隐喻和幽默，因为非母语读者可能无法理解",
        "避免使用简单句，因为太过基础",
        "避免使用图片，因为不同文化解读不同",
        "避免使用数字，因为不同地区格式不同",
      ],
      answer: 0,
      rationale:
        "为全球读者写作时应保持文化中立，成语和隐喻难以翻译且可能造成误解。",
    },
  ],
};
