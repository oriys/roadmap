import type { QuizQuestion } from "../types";

export const week1: Record<string, QuizQuestion[]> = {
  // Lesson 1: 技术写作的目标与交付物 (8题)
  "tw-w1-1": [
    {
      id: "tw-w1-1-q1",
      question: "Write the Docs 指出，技术文档能帮助代码质量提升的原因是什么？",
      options: [
        "撰写文档的思考过程会迫使开发者理清设计决策，从而改进代码架构",
        "文档越长说明功能越完善",
        "写文档时会自动检测代码 Bug",
        "文档字数与代码质量成正比",
      ],
      answer: 0,
      rationale:
        "Write the Docs: 撰写文档的思考过程（the process of writing）能改进设计决策，而非文档本身直接改进代码。",
    },
    {
      id: "tw-w1-1-q2",
      question: "根据 Write the Docs，一份最小可用的 README 应至少包含哪些要素？",
      options: [
        "项目名称、解决的问题、安装说明、代码示例、许可证",
        "项目历史、团队成员介绍、开发计划",
        "完整的 API 参考和架构图",
        "每个函数的详细注释",
      ],
      answer: 0,
      rationale:
        "Write the Docs 建议 README 包含：问题描述、安装说明、代码示例、许可证和支持渠道等基础要素。",
    },
    {
      id: "tw-w1-1-q3",
      question: "为什么 Write the Docs 建议避免过度依赖 FAQ？",
      options: [
        "FAQ 容易积累杂乱内容、难以搜索且往往成为逃避写正式文档的借口",
        "FAQ 格式不支持 Markdown",
        "FAQ 无法被搜索引擎索引",
        "FAQ 必须放在文档最后",
      ],
      answer: 0,
      rationale:
        "Write the Docs: FAQ 虽然初期有用，但容易导致'快速修复'而非真正的文档，内容杂乱无章且难以维护。",
    },
    {
      id: "tw-w1-1-q4",
      question: "Diátaxis 框架将文档分为四种类型，它们分别服务于什么需求？",
      options: [
        "学习（Tutorials）、完成任务（How-to）、查阅信息（Reference）、理解概念（Explanation）",
        "入门、进阶、高级、专家",
        "计划、执行、检查、改进",
        "需求、设计、开发、测试",
      ],
      answer: 0,
      rationale:
        "Diátaxis 框架基于用户需求将文档分为四个象限：Tutorials（学习导向）、How-to Guides（任务导向）、Reference（信息导向）、Explanation（理解导向）。",
    },
    {
      id: "tw-w1-1-q5",
      question: "技术文档中的'许可证（License）'部分为何重要？",
      options: [
        "明确用户使用、修改与分发代码的法律边界",
        "增加文档的专业感",
        "防止代码被复制",
        "满足代码仓库的格式要求",
      ],
      answer: 0,
      rationale:
        "许可证定义了代码的法律使用范围，用户需要知道能否在商业项目中使用、是否需要开源衍生作品等。",
    },
    {
      id: "tw-w1-1-q6",
      question: "根据 Write the Docs，文档对开源项目吸引贡献者有什么作用？",
      options: [
        "降低参与门槛，且文档贡献本身也是有效的贡献形式",
        "可以用来筛选不合格的贡献者",
        "强制贡献者先阅读所有文档",
        "减少代码审核的工作量",
      ],
      answer: 0,
      rationale:
        "Write the Docs: 文档降低了参与门槛，对于新手来说修改文档往往比修改代码更容易上手。",
    },
    {
      id: "tw-w1-1-q7",
      question: "关于代码示例（Code Examples），技术文档的最佳实践是什么？",
      options: [
        "提供可复制粘贴、可运行的完整示例，展示常见用例",
        "示例越复杂越能展示功能强大",
        "只提供伪代码让用户自己理解",
        "示例应该覆盖所有边界情况",
      ],
      answer: 0,
      rationale:
        "代码示例应该是可运行的、展示常见用例的，帮助用户快速理解如何使用，而非覆盖所有情况。",
    },
    {
      id: "tw-w1-1-q8",
      question: "Diátaxis 框架认为，文档系统需要同时解决哪三个维度的问题？",
      options: [
        "内容（写什么）、风格（怎么写）、架构（如何组织）",
        "语法、词汇、标点",
        "标题、正文、附录",
        "文字、图片、视频",
      ],
      answer: 0,
      rationale:
        "Diátaxis: 'solves problems related to documentation content (what to write), style (how to write it) and architecture (how to organise it)'.",
    },
  ],
  // Lesson 2: 读者分析与任务导向 (8题)
  "tw-w1-2": [
    {
      id: "tw-w1-2-q1",
      question: "Nielsen Norman Group 对用户画像（Persona）的定义是什么？",
      options: [
        "基于用户研究的虚构但现实的典型用户描述，包含行为、需求、目标和关切",
        "真实用户的详细个人档案",
        "市场营销部门创建的理想客户模型",
        "用户满意度调查的统计结果",
      ],
      answer: 0,
      rationale:
        "NN/G: Persona 是'虚构但现实的产品典型或目标用户的描述'，利用人类对具体个案比笼统概括更感兴趣的心理特点。",
    },
    {
      id: "tw-w1-2-q2",
      question: "Google Technical Writing 中提到的'知识诅咒'（Curse of Knowledge）是指什么？",
      options: [
        "专家难以理解初学者的困惑，默认读者拥有与自己相同的背景知识",
        "知道太多反而写不出好文档",
        "文档中包含了过多的术语",
        "读者知识水平超过了作者",
      ],
      answer: 0,
      rationale:
        "Google Tech Writing: 专家往往难以识别哪些内容需要解释，因为他们已经忘记了当初不懂时的感受。",
    },
    {
      id: "tw-w1-2-q3",
      question: "有效的用户画像应包含哪些核心要素？",
      options: [
        "行为习惯、需求与目标、与产品互动的背景、态度引用语",
        "姓名、年龄、收入水平、购买历史",
        "职位、工作年限、技术栈偏好",
        "学历、性格类型、兴趣爱好",
      ],
      answer: 0,
      rationale:
        "NN/G: 有效的 Persona 需要包含行为特征、需求关切、目标、与产品互动的频率和背景，以及态度描述的引用语。",
    },
    {
      id: "tw-w1-2-q4",
      question: "为什么不应该试图在一份文档中满足所有类型读者的需求？",
      options: [
        "因为'为所有人设计'往往意味着'谁都无法满足'，导致文档缺乏重点",
        "因为文档会变得太长",
        "因为不同读者使用不同的语言",
        "因为文档格式有限制",
      ],
      answer: 0,
      rationale:
        "The Elastic User 陷阱：试图满足所有人会导致产品或文档过于泛化，反而无法有效服务任何特定群体。",
    },
    {
      id: "tw-w1-2-q5",
      question: "对于新手读者，最有效的文档形式是什么？",
      options: [
        "教程（Tutorials）：通过具体步骤建立信心和直觉",
        "API 参考手册：列出所有可用参数",
        "架构文档：展示系统全貌",
        "变更日志：了解版本演进",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Tutorials 是学习导向的，通过手把手的指导帮助新手获得技能和信心。",
    },
    {
      id: "tw-w1-2-q6",
      question: "用户画像在团队协作中的主要价值是什么？",
      options: [
        "作为简写，让团队成员能快速对齐'这个功能对 Persona A 是否合适'",
        "替代用户调研",
        "用于向投资人展示市场规模",
        "作为产品文档的封面插图",
      ],
      answer: 0,
      rationale:
        "NN/G: Persona 在会议中充当'属性、欲望和行为的简写'，确保团队对用户有一致的认知。",
    },
    {
      id: "tw-w1-2-q7",
      question: "创建用户画像（Persona）应该基于什么？",
      options: [
        "基于用户研究的真实数据，如田野研究、问卷调查、访谈等",
        "基于产品经理的直觉判断",
        "基于竞争对手的用户群体分析",
        "基于公司高管的期望目标",
      ],
      answer: 0,
      rationale:
        "NN/G: Persona 必须基于用户研究的真实数据，而非臆测。常用方法包括田野研究、问卷调查和用户访谈。",
    },
    {
      id: "tw-w1-2-q8",
      question: "当读者群技术水平参差不齐时，最佳的处理策略是什么？",
      options: [
        "分层写作：提供概览给所有人，将深层细节放入链接或拆分为不同文档",
        "按平均水平写作，不深不浅",
        "只为专家读者写作，让新手自己学习",
        "添加大量脚注解释基础概念",
      ],
      answer: 0,
      rationale:
        "分层（Layering）或拆分内容是处理混合读者群的最佳方式，让不同水平的读者都能找到适合的内容。",
    },
  ],
  // Lesson 3: 结构化写作与 Diátaxis 框架 (7题)
  "tw-w1-3": [
    {
      id: "tw-w1-3-q1",
      question: "Diátaxis 框架中，Tutorial（教程）的核心特征是什么？",
      options: [
        "学习导向的实践活动，让学习者通过做有意义的事来获得技能",
        "解决具体工作问题的步骤指南",
        "提供准确完整的技术参数描述",
        "解释设计决策和历史背景",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Tutorial 是'学习导向的实践活动'，目的是帮助学习者获得技能，而非完成具体任务。",
    },
    {
      id: "tw-w1-3-q2",
      question: "Tutorial 与 How-to Guide 的关键区别是什么？",
      options: [
        "Tutorial 面向学习者从零开始教学，How-to Guide 假定用户已知目标并具备基础能力",
        "Tutorial 更长，How-to Guide 更短",
        "Tutorial 有图片，How-to Guide 只有文字",
        "Tutorial 是官方写的，How-to Guide 是社区贡献的",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Tutorial 教学完整全面；How-to Guide 假定用户已知目标，仅提供行动指引，无需教学。",
    },
    {
      id: "tw-w1-3-q3",
      question: "写作 Tutorial 时，为什么应该'最小化解释'（Minimize Explanation）？",
      options: [
        "Tutorial 的目标是提供学习体验而非传授理论，过多解释会分散注意力",
        "因为 Tutorial 的篇幅有限制",
        "因为解释内容会增加翻译成本",
        "因为新手看不懂解释",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Tutorial 应让学习自然发生，避免抽象讨论，仅在必要时提供链接到 Explanation 文档。",
    },
    {
      id: "tw-w1-3-q4",
      question: "Reference 文档的核心写作原则是什么？",
      options: [
        "采用中立描述，强调准确性、精确性、完整性，避免混入说明或观点",
        "用大量例子替代参数说明",
        "按使用频率排列内容",
        "包含详细的设计原理解释",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Reference 应'仅描述，勿指导'，保持中立和权威，如同地图对应地理位置。",
    },
    {
      id: "tw-w1-3-q5",
      question: "How-to Guide 为什么应该'面向问题而非工具'？",
      options: [
        "用户关心的是如何达成目标，工具只是实现目标的手段",
        "工具会随版本更新而变化",
        "面向问题的标题更容易被搜索引擎索引",
        "这样可以减少维护工作量",
      ],
      answer: 0,
      rationale:
        "Diátaxis: 'The user's purpose is the defining factor, tools are secondary actors'。用户为目标而来，而非为工具而来。",
    },
    {
      id: "tw-w1-3-q6",
      question: "Explanation 文档与其他三类文档的主要区别是什么？",
      options: [
        "Explanation 关注理解和反思，可以表达观点、讨论历史背景和设计权衡",
        "Explanation 必须包含代码示例",
        "Explanation 是唯一需要翻译的文档类型",
        "Explanation 应该最先编写",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Explanation 是'面向理解'的，可以讨论历史、替代方案、表达观点，帮助读者建立完整知识体系。",
    },
    {
      id: "tw-w1-3-q7",
      question: "Tutorial 作者需要承担的四项关键义务是什么？",
      options: [
        "让学习有意义、可成功完成、逻辑连贯、完整周全",
        "简洁、准确、全面、及时",
        "有趣、互动、可分享、可打印",
        "免费、开源、可离线、多语言",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Tutorial 创作者的四项义务——让学习者获得成就感、能成功执行、路径清晰、接触所有必要的概念和工具。",
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
