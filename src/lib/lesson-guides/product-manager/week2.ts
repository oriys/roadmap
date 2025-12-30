import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week2Guides: Record<string, LessonGuide> = {
  "pm-w2-1": {
    lessonId: "pm-w2-1",
    background: [
      "【访谈定义】User Interviews 指出用户访谈是「30-60 分钟与单个参与者的结构化对话，研究者通过提问深入了解参与者的态度、信念、愿望和经历」。这是一种主持式的实时对话方法。",
      "【三种访谈类型】User Interviews 区分三种类型：生成式访谈（Generative）用于早期发现机会；情境访谈（Contextual）在用户自然环境中进行；持续访谈（Continuous）定期与客户保持接触。",
      "【样本量建议】User Interviews 建议 'start with 5 participants'，因为研究显示每次后续访谈获得的新洞察会递减。5 人通常足以发现主要模式。",
      "【半结构化最佳】UX Studio 推荐半结构化访谈（Semi-structured），包含主要问题但允许灵活追问。这比严格结构化或完全开放式更能获得深度洞察。",
      "【Teresa Torres 方法】Teresa Torres 强调收集「具体故事」而非假设性回答。例如询问「告诉我你上次观看 Netflix 的情况」而非「你喜欢看什么」，能获得更可靠的答案。",
    ],
    keyDifficulties: [
      "【避免引导性提问】Teresa Torres 警告不要在没有上下文的情况下提出开放性问题，因为「这类问题获得的答案往往不可靠」。要基于具体情境提问。",
      "【双人访谈模式】IxDF 建议「理想的用户访谈涉及两名 UX 研究者和一名用户」——一人提问引导，一人记录。同时做三件事非常困难。",
      "【自我报告的局限】User Interviews 提醒「访谈数据主要是自我报告的」，应与定量方法结合。用户说的和实际做的可能不一致。",
      "【招聘受访者的挑战】Teresa Torres 指出「如果需要费力寻找受访者，你将不会这样做」，建议在产品使用过程中自动招聘用户，降低执行门槛。",
    ],
    handsOnPath: [
      "1. 确定访谈目标：你想了解什么？是发现机会、验证假设还是理解行为？",
      "2. 创建访谈指南：准备 3-6 个讨论话题而非死板的问题清单",
      "3. 招募 5 位参与者：从现有用户、潜在用户或特定细分群体中招募",
      "4. 准备双人访谈：一人提问引导，一人专注记录",
      "5. 使用 Teresa Torres 的「故事映射法」：让用户讲述具体的过去经历",
      "6. 创建单页访谈快照：总结每次访谈的关键发现",
      "7. 与团队分享发现：定期展示访谈洞察，建立共同认知",
    ],
    selfCheck: [
      "你能区分生成式访谈、情境访谈和持续访谈吗？各适用什么场景？",
      "为什么 5 个参与者通常足够？什么情况下需要更多？",
      "你的访谈问题中有多少是开放式的、基于过去行为的？",
      "你如何避免引导性提问？能举出一个反例吗？",
      "你的团队有固定的用户访谈招募渠道吗？",
      "访谈后你如何整理和分享发现？",
    ],
    extensions: [
      "学习 Teresa Torres 的机会解决方案树（Opportunity Solution Tree）方法",
      "探索远程用户访谈工具（如 Zoom、UserTesting、Lookback）",
      "学习如何进行情境访谈（Contextual Inquiry）",
      "研究如何将访谈洞察与定量数据结合分析",
    ],
    sourceUrls: [
      "https://www.producttalk.org/getting-started-with-discovery/",
      "https://www.userinterviews.com/ux-research-field-guide-chapter/user-interviews",
      "https://www.interaction-design.org/literature/topics/user-interviews",
    ],
  },
  "pm-w2-2": {
    lessonId: "pm-w2-2",
    background: [
      "【画像定义】Nielsen Norman Group 定义用户画像为「对产品典型或目标用户的虚构但现实的描述」。画像利用人类倾向于被具体实例而非概括性描述所吸引的心理特点。",
      "【研究基础】NNGroup 强调画像必须基于用户研究数据，建议的研究方法包括：实地研究、问卷调查、纵向研究、用户访谈。不能凭空想象用户。",
      "【画像要素】NNGroup 建议画像包含：姓名、年龄、性别和照片；总结特征的标签线；与产品的交互背景；目标和关键点；体现态度的引用语。",
      "【关键原则】NNGroup 强调「仅包含与设计相关的信息」，无关细节会削弱可记忆性。画像应该简洁聚焦，而非面面俱到。",
      "【IxDF 补充】Interaction Design Foundation 指出画像是「在 UX 研究过程中创建的原型用户表现」，用于指导设计决策并保持用户聚焦。",
    ],
    keyDifficulties: [
      "【避免假想用户】NNGroup 反复强调画像必须基于真实研究数据，而非团队的假设或刻板印象。没有研究支撑的画像是危险的。",
      "【过度细节陷阱】很多团队为画像添加过多无关细节（如爱好、宠物名字），这会分散注意力。NNGroup 建议只保留与产品决策相关的信息。",
      "【画像数量控制】不要创建太多画像，通常 3-5 个核心画像足够。太多画像会导致团队无法记住，失去实用价值。",
      "【画像 vs JTBD】画像关注「谁」，JTBD 关注「为什么」。Intercom 批评画像「依赖人口统计特征，忽略因果关系」，建议结合使用。",
    ],
    handsOnPath: [
      "1. 收集现有用户研究数据：访谈记录、问卷结果、行为数据",
      "2. 识别用户特征模式：从数据中发现共同特征和行为模式",
      "3. 将特征分组形成 3-5 个清晰的人物角色",
      "4. 为每个画像添加核心要素：姓名、背景、目标、痛点、引用语",
      "5. 验证画像：与一线员工（销售、客服）确认画像是否符合真实用户",
      "6. 将画像可视化并分享给全团队",
      "7. 在设计评审中使用画像作为决策依据",
    ],
    selfCheck: [
      "你的用户画像是基于真实研究数据还是团队假设？",
      "你能说出每个画像的核心目标和痛点吗？",
      "团队成员都熟悉并使用这些画像吗？",
      "画像中是否有与产品决策无关的细节？",
      "你多久更新一次用户画像？",
      "画像和 JTBD 有什么区别？如何结合使用？",
    ],
    extensions: [
      "学习如何创建用户旅程图（User Journey Map）配合画像使用",
      "探索负面画像（Negative Persona）的创建和应用",
      "研究如何将画像用于 A/B 测试的用户分群",
      "学习同理心地图（Empathy Map）作为画像的补充工具",
    ],
    sourceUrls: [
      "https://www.nngroup.com/articles/persona/",
      "https://www.interaction-design.org/literature/topics/user-personas",
    ],
  },
  "pm-w2-3": {
    lessonId: "pm-w2-3",
    background: [
      "【JTBD 起源】JTBD 框架由 Tony Ulwick 开发，后由 Clayton Christensen（哈佛商学院教授）推广。核心理念是「人们购买产品和服务是为了完成特定任务（jobs）」。",
      "【核心转变】Clayton Christensen 指出 JTBD 从根本上改变了创新方法——不再依赖客户人口统计和数据相关性，而是识别「客户在特定情境下试图取得的进步」。",
      "【雇佣比喻】HBR 文章解释：当客户购买产品时，他们本质上是「雇佣」解决方案来完成特定目标。「如果产品做得好，下次遇到同样的任务，我们会再次雇佣它。」",
      "【三个维度】HBR 指出 Jobs 包含三个维度：功能性（需要完成什么任务）、情感性（客户想要什么感受）、社会性（什么身份或地位重要）。",
      "【Job Stories 格式】Intercom 提出 Job Stories 格式：「当 [情境] 时，我想要 [动机]，以便 [预期结果]」。这比传统用户故事更强调因果关系和情境。",
    ],
    keyDifficulties: [
      "【超越人口统计】HBR 用公寓案例说明：人口统计相似性无法预测购买行为；真正决定购买的是情感焦虑——对离开有意义的餐桌的担忧。",
      "【Job Stories vs User Stories】Intercom 指出用户故事有三个关键局限：依赖画像（忽略因果）、将实现与动机假设耦合、忽略情境和焦虑。Job Stories 将动机与实现解耦。",
      "【避免功能堆砌】JTBD 的核心洞察是：用户不是购买产品，而是「雇佣」产品完成任务。这意味着竞争对手可能来自完全不同的品类。",
      "【发现隐藏需求】HBR 提出五个发现问题：什么任务真正需要解决？哪里存在未被满足的需求？用户创造了什么变通方案？用户想避免什么任务？产品有什么意外用途？",
    ],
    handsOnPath: [
      "1. 选择一个产品功能或用户行为进行 JTBD 分析",
      "2. 使用 Intercom 的五步法：识别高层任务 → 分解为子任务 → 观察现有解决方案 → 创建 Job Stories → 设计解决方案",
      "3. 用 Job Story 格式重写 3 个传统用户故事",
      "4. 分析用户的功能性、情感性、社会性需求",
      "5. 识别「意外竞争对手」——用户可能用什么替代方案完成同样的任务？",
      "6. 进行 JTBD 访谈：聚焦于「上次你做 X 是什么时候？为什么？」",
    ],
    selfCheck: [
      "你能用一句话解释 JTBD 的核心理念吗？",
      "Job Story 和 User Story 的格式有什么区别？",
      "你的产品帮助用户完成什么「任务」？",
      "用户的功能性、情感性、社会性需求分别是什么？",
      "你的产品有哪些「意外竞争对手」？",
      "你如何发现用户创造的变通方案？",
    ],
    extensions: [
      "阅读 Clayton Christensen 的《Competing Against Luck》深入学习 JTBD",
      "学习 Tony Ulwick 的 Outcome-Driven Innovation (ODI) 方法",
      "探索 Bob Moesta 的 Switch Interview 技术",
      "研究如何将 JTBD 应用于产品定位和市场策略",
    ],
    sourceUrls: [
      "https://strategyn.com/jobs-to-be-done/",
      "https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/",
      "https://hbr.org/2016/09/know-your-customers-jobs-to-be-done",
    ],
  },
  "pm-w2-4": {
    lessonId: "pm-w2-4",
    background: [
      "【持续发现定义】Teresa Torres 定义持续发现为「产品团队每周至少与客户有一次接触，进行小型研究活动以追求期望的产品结果」。这与一次性项目式研究形成对比。",
      "【核心理念】Lyssna 强调「如果你在等待'完美'反馈才行动，你已经落后了。持续发现意味着边学边做——而非等待确定性。」",
      "【两项关键活动】Teresa Torres 指出优秀的产品发现团队每周进行两项活动：客户访谈（发现机会）和假设测试（发现解决方案）。",
      "【产品三人组】Teresa Torres 提出「产品三人组」（Product Trio）概念——PM、设计师、工程师应该协作进行发现工作，而非由单一角色主导。",
      "【六项策略】Lyssna 总结六项关键策略：定期客户参与、跨职能协作、假设驱动开发、敏捷反馈流程、出声思考协议、市场趋势整合。",
    ],
    keyDifficulties: [
      "【打破项目式思维】传统团队只在项目开始时做研究。Teresa Torres 指出数字产品可以持续迭代，因此研究也应该持续进行。",
      "【建立习惯的挑战】从「不做研究」到「每周研究」需要文化转变。Lyssna 建议从小处开始，让发现成为习惯而非事件。",
      "【知识的诅咒】Teresa Torres 提到随着团队对产品越来越熟悉，会逐渐失去用户视角。定期接触用户是解决方法。",
      "【利益相关者支持】Lyssna 强调需要用「具体的用户反馈数据」获得组织支持，建立「反馈积极型心态」。",
    ],
    handsOnPath: [
      "1. 评估当前状态：团队多久与用户交流一次？",
      "2. 建立自动招募机制：在产品中嵌入调研邀请或反馈入口",
      "3. 设定每周访谈目标：从每周 1 次开始，逐步增加",
      "4. 组建产品三人组：PM、设计师、工程师共同参与发现",
      "5. 创建共享的研究仓库：集中存储所有访谈记录和发现",
      "6. 建立定期分享机制：每周或每两周分享发现洞察",
      "7. 将发现纳入 Sprint：每个 Sprint 都包含发现活动",
    ],
    selfCheck: [
      "你的团队目前多久与真实用户交流一次？",
      "你有自动化的用户招募流程吗？",
      "谁负责用户研究？是单一角色还是「产品三人组」？",
      "你的研究发现存储在哪里？团队成员能方便访问吗？",
      "你如何获得利益相关者对持续发现的支持？",
      "什么阻碍了你进行更频繁的用户研究？",
    ],
    extensions: [
      "阅读 Teresa Torres 的《Continuous Discovery Habits》系统学习",
      "学习 Dual-Track Agile：发现轨道与交付轨道并行",
      "探索远程用户研究工具和方法",
      "研究如何在大型组织中推广持续发现文化",
    ],
    sourceUrls: [
      "https://www.producttalk.org/getting-started-with-discovery/",
      "https://www.lyssna.com/blog/continuous-product-discovery/",
    ],
  },
}

export const week2Quizzes: Record<string, QuizQuestion[]> = {
  "pm-w2-1": [
    {
      id: "pm-w2-1-q1",
      question: "根据 User Interviews，用户访谈的典型时长是多少？",
      options: [
        "10-15 分钟",
        "30-60 分钟",
        "2-3 小时",
        "整天",
      ],
      answer: 1,
      rationale:
        "User Interviews 定义用户访谈为 '30-60 分钟与单个参与者的结构化对话'。",
    },
    {
      id: "pm-w2-1-q2",
      question: "User Interviews 建议的初始参与者数量是多少？",
      options: [
        "1 人",
        "5 人",
        "15 人",
        "50 人",
      ],
      answer: 1,
      rationale:
        "User Interviews 建议 'start with 5 participants'，因为研究显示每次后续访谈获得的新洞察会递减。",
    },
    {
      id: "pm-w2-1-q3",
      question: "Teresa Torres 推荐用什么替代假设性问题？",
      options: [
        "是/否问题",
        "收集具体的过去行为故事",
        "多选问卷",
        "满意度评分",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 强调收集「具体故事」而非假设性回答，例如询问「告诉我你上次观看 Netflix 的情况」而非「你喜欢看什么」。",
    },
    {
      id: "pm-w2-1-q4",
      question: "IxDF 建议理想的用户访谈应该有几名研究者参与？",
      options: [
        "1 名",
        "2 名",
        "3 名",
        "5 名",
      ],
      answer: 1,
      rationale:
        "IxDF 建议「理想的用户访谈涉及两名 UX 研究者和一名用户」——一人提问引导，一人记录。",
    },
    {
      id: "pm-w2-1-q5",
      question: "User Interviews 列出的三种访谈类型不包括以下哪种？",
      options: [
        "生成式访谈（Generative）",
        "情境访谈（Contextual）",
        "验证式访谈（Validation）",
        "持续访谈（Continuous）",
      ],
      answer: 2,
      rationale:
        "User Interviews 列出三种类型：生成式访谈（发现机会）、情境访谈（自然环境）、持续访谈（定期接触）。验证式访谈不在其中。",
    },
    {
      id: "pm-w2-1-q6",
      question: "Teresa Torres 建议如何降低招募受访者的门槛？",
      options: [
        "提高访谈报酬",
        "在产品使用过程中自动招募用户",
        "通过市场调研公司外包",
        "只访谈内部员工",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 指出「如果需要费力寻找受访者，你将不会这样做」，建议在产品使用过程中自动招募用户。",
    },
    {
      id: "pm-w2-1-q7",
      question: "UX Studio 推荐哪种访谈结构？",
      options: [
        "完全结构化",
        "完全非结构化",
        "半结构化",
        "问卷式",
      ],
      answer: 2,
      rationale:
        "UX Studio 推荐半结构化访谈（Semi-structured），包含主要问题但允许灵活追问。",
    },
    {
      id: "pm-w2-1-q8",
      question: "User Interviews 提醒访谈数据的主要局限是什么？",
      options: [
        "成本太高",
        "数据主要是自我报告的，用户说的和做的可能不一致",
        "时间太长",
        "样本太小",
      ],
      answer: 1,
      rationale:
        "User Interviews 提醒「访谈数据主要是自我报告的」，应与定量方法结合。",
    },
    {
      id: "pm-w2-1-q9",
      question: "Teresa Torres 建议用什么方法整理和分享访谈发现？",
      options: [
        "完整录音转录",
        "单页访谈快照总结关键学习",
        "仅口头汇报",
        "不需要整理",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 建议创建单页采访快照总结关键学习，定期分享以「让利益相关者参与学习历程」。",
    },
    {
      id: "pm-w2-1-q10",
      question: "根据 User Interviews，什么时候应该使用用户访谈？",
      options: [
        "只在产品发布后",
        "发现阶段（产品存在前）、可用性测试后、发布后跟踪",
        "只在竞品分析时",
        "只在销售演示时",
      ],
      answer: 1,
      rationale:
        "User Interviews 指出访谈适用于发现阶段（产品存在前）、可用性测试后理解用户决策、发布后跟踪变化的期望。",
    },
    {
      id: "pm-w2-1-q11",
      question: "User Interviews 建议访谈指南应该包含什么？",
      options: [
        "100 个详细问题",
        "3-6 个讨论话题而非死板脚本",
        "只有开场白",
        "完整的产品演示",
      ],
      answer: 1,
      rationale:
        "User Interviews 建议创建访谈指南时「包含 3-6 个讨论话题而非严格脚本」以保持自然对话流程。",
    },
    {
      id: "pm-w2-1-q12",
      question: "Teresa Torres 推荐与谁一起进行用户访谈？",
      options: [
        "只有 PM 自己",
        "跨职能团队一起访谈，建立共同的信息基础",
        "只有设计师",
        "外部顾问",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 建议与跨职能团队一起访谈，「建立共同的信息基础」，减少基于不同信息源的分歧。",
    },
  ],
  "pm-w2-2": [
    {
      id: "pm-w2-2-q1",
      question: "根据 Nielsen Norman Group，用户画像的定义是什么？",
      options: [
        "真实用户的完整档案",
        "对产品典型或目标用户的虚构但现实的描述",
        "用户行为数据的统计报告",
        "市场调研问卷的结果",
      ],
      answer: 1,
      rationale:
        "NNGroup 定义用户画像为「对产品典型或目标用户的虚构但现实的描述」。",
    },
    {
      id: "pm-w2-2-q2",
      question: "NNGroup 强调用户画像必须基于什么创建？",
      options: [
        "团队头脑风暴",
        "竞品分析",
        "用户研究数据",
        "管理层指示",
      ],
      answer: 2,
      rationale:
        "NNGroup 强调画像必须基于用户研究数据，建议的方法包括实地研究、问卷调查、纵向研究、用户访谈。",
    },
    {
      id: "pm-w2-2-q3",
      question: "NNGroup 建议用户画像应该包含哪些核心要素？",
      options: [
        "只需要姓名和年龄",
        "姓名、照片、标签线、交互背景、目标、痛点、引用语",
        "完整的人生履历",
        "只需要购买记录",
      ],
      answer: 1,
      rationale:
        "NNGroup 建议画像包含：姓名、年龄、性别和照片；总结特征的标签线；与产品的交互背景；目标和关键点；体现态度的引用语。",
    },
    {
      id: "pm-w2-2-q4",
      question: "NNGroup 关于画像细节的关键原则是什么？",
      options: [
        "细节越多越好",
        "仅包含与设计相关的信息",
        "包含所有可能的用户特征",
        "细节由管理层决定",
      ],
      answer: 1,
      rationale:
        "NNGroup 强调「仅包含与设计相关的信息」，无关细节会削弱可记忆性。",
    },
    {
      id: "pm-w2-2-q5",
      question: "根据 IxDF，用户画像在 UX 设计中的主要作用是什么？",
      options: [
        "用于财务预算",
        "指导设计决策并保持用户聚焦",
        "用于法律合规",
        "用于技术选型",
      ],
      answer: 1,
      rationale:
        "IxDF 指出画像是「在 UX 研究过程中创建的原型用户表现」，用于指导设计决策并保持用户聚焦。",
    },
    {
      id: "pm-w2-2-q6",
      question: "NNGroup 建议的画像研究方法不包括以下哪种？",
      options: [
        "实地研究",
        "问卷调查",
        "竞品功能对比",
        "用户访谈",
      ],
      answer: 2,
      rationale:
        "NNGroup 建议的研究方法包括实地研究、问卷调查、纵向研究、用户访谈。竞品功能对比不在其中。",
    },
    {
      id: "pm-w2-2-q7",
      question: "画像利用了人类的什么心理特点？",
      options: [
        "喜欢抽象概念",
        "倾向于被具体实例而非概括性描述所吸引",
        "喜欢复杂信息",
        "害怕不确定性",
      ],
      answer: 1,
      rationale:
        "NNGroup 指出画像利用人类「倾向于被具体实例而非概括性描述所吸引」的心理特点。",
    },
    {
      id: "pm-w2-2-q8",
      question: "NNGroup 列出的画像应用场景不包括以下哪种？",
      options: [
        "与外部机构沟通目标受众",
        "专家评审指导",
        "代码审查",
        "用户研究参与者招募",
      ],
      answer: 2,
      rationale:
        "NNGroup 的画像应用场景包括：与外部机构沟通、专家评审、用户研究招募、分析数据分段。不包括代码审查。",
    },
    {
      id: "pm-w2-2-q9",
      question: "通常建议创建多少个核心用户画像？",
      options: [
        "1 个",
        "3-5 个",
        "10-15 个",
        "越多越好",
      ],
      answer: 1,
      rationale:
        "一般建议创建 3-5 个核心画像。太多画像会导致团队无法记住，失去实用价值。",
    },
    {
      id: "pm-w2-2-q10",
      question: "Intercom 对用户画像的批评主要集中在什么方面？",
      options: [
        "创建成本太高",
        "依赖人口统计特征，忽略因果关系",
        "需要太多研究数据",
        "无法可视化",
      ],
      answer: 1,
      rationale:
        "Intercom 批评画像「依赖人口统计特征，忽略因果关系」，建议结合 JTBD 使用。",
    },
    {
      id: "pm-w2-2-q11",
      question: "NNGroup 将画像描述为什么类型的工具？",
      options: [
        "数据分析工具",
        "创建可记忆的用户表现来培养团队同理心的速记工具",
        "项目管理工具",
        "编程辅助工具",
      ],
      answer: 1,
      rationale:
        "NNGroup 指出画像通过创建「可记忆的用户表现」来培养团队同理心，作为设计决策的速记工具。",
    },
    {
      id: "pm-w2-2-q12",
      question: "以下哪种做法违反了 NNGroup 的画像创建原则？",
      options: [
        "基于用户访谈数据创建",
        "仅包含与产品相关的信息",
        "添加用户的宠物名字和最爱的电影等无关细节",
        "与团队分享并用于设计决策",
      ],
      answer: 2,
      rationale:
        "NNGroup 明确指出「仅包含与设计相关的信息」，无关细节会削弱可记忆性。宠物名字等与产品决策无关。",
    },
  ],
  "pm-w2-3": [
    {
      id: "pm-w2-3-q1",
      question: "JTBD 框架的核心理念是什么？",
      options: [
        "用户购买产品是因为品牌",
        "用户购买产品是为了完成特定任务（jobs）",
        "用户购买产品是因为价格",
        "用户购买产品是因为广告",
      ],
      answer: 1,
      rationale:
        "JTBD 核心理念是「人们购买产品和服务是为了完成特定任务（jobs）」。",
    },
    {
      id: "pm-w2-3-q2",
      question: "JTBD 框架由谁开发并由谁推广？",
      options: [
        "Steve Jobs 开发，Tim Cook 推广",
        "Tony Ulwick 开发，Clayton Christensen 推广",
        "Jeff Bezos 开发，Elon Musk 推广",
        "Mark Zuckerberg 开发并推广",
      ],
      answer: 1,
      rationale:
        "JTBD 由 Tony Ulwick 开发（作为 Outcome-Driven Innovation），后由哈佛商学院教授 Clayton Christensen 推广。",
    },
    {
      id: "pm-w2-3-q3",
      question: "根据 HBR，Jobs 包含哪三个维度？",
      options: [
        "价格、质量、服务",
        "功能性、情感性、社会性",
        "技术、设计、营销",
        "需求、痛点、解决方案",
      ],
      answer: 1,
      rationale:
        "HBR 指出 Jobs 包含三个维度：功能性（需要完成什么任务）、情感性（客户想要什么感受）、社会性（什么身份或地位重要）。",
    },
    {
      id: "pm-w2-3-q4",
      question: "Intercom 的 Job Story 格式是什么？",
      options: [
        "作为 [用户类型]，我想要 [功能]，以便 [好处]",
        "当 [情境] 时，我想要 [动机]，以便 [预期结果]",
        "如果 [条件]，那么 [结果]",
        "给定 [前提]，当 [行为]，则 [结果]",
      ],
      answer: 1,
      rationale:
        "Intercom 提出 Job Stories 格式：「当 [情境] 时，我想要 [动机]，以便 [预期结果]」。",
    },
    {
      id: "pm-w2-3-q5",
      question: "Intercom 指出用户故事（User Stories）的三个关键局限是什么？",
      options: [
        "太简单、太短、太模糊",
        "依赖画像忽略因果、将实现与动机假设耦合、忽略情境和焦虑",
        "成本高、时间长、难以验证",
        "需要太多技术知识",
      ],
      answer: 1,
      rationale:
        "Intercom 指出用户故事有三个关键局限：依赖画像（忽略因果）、将实现与动机假设耦合、忽略情境和焦虑。",
    },
    {
      id: "pm-w2-3-q6",
      question: "HBR 文章用什么比喻解释 JTBD？",
      options: [
        "用户「购买」产品",
        "用户「雇佣」产品来完成特定目标",
        "用户「租用」产品",
        "用户「收藏」产品",
      ],
      answer: 1,
      rationale:
        "HBR 解释：当客户购买产品时，他们本质上是「雇佣」解决方案来完成特定目标。",
    },
    {
      id: "pm-w2-3-q7",
      question: "HBR 提出的五个发现问题不包括以下哪个？",
      options: [
        "什么任务真正需要解决？",
        "用户创造了什么变通方案？",
        "竞品的功能有哪些？",
        "产品有什么意外用途？",
      ],
      answer: 2,
      rationale:
        "HBR 的五个发现问题：什么任务需要解决？哪里存在未满足需求？用户创造了什么变通方案？用户想避免什么任务？产品有什么意外用途？不包括竞品功能分析。",
    },
    {
      id: "pm-w2-3-q8",
      question: "Intercom 推荐的 Job Stories 应用五步法的第一步是什么？",
      options: [
        "设计解决方案",
        "识别高层任务",
        "进行用户访谈",
        "创建原型",
      ],
      answer: 1,
      rationale:
        "Intercom 五步法：1.识别高层任务 → 2.分解为子任务 → 3.观察现有解决方案 → 4.创建 Job Stories → 5.设计解决方案。",
    },
    {
      id: "pm-w2-3-q9",
      question: "HBR 的公寓案例说明了什么？",
      options: [
        "价格是购买决策的唯一因素",
        "人口统计相似性无法预测购买行为，情感焦虑才是关键",
        "位置是最重要的因素",
        "品牌知名度决定购买",
      ],
      answer: 1,
      rationale:
        "HBR 用公寓案例说明：人口统计相似性无法预测购买行为；真正决定购买的是情感焦虑——对离开有意义的餐桌的担忧。",
    },
    {
      id: "pm-w2-3-q10",
      question: "根据 JTBD 理论，Theodore Levitt 的著名观点是什么？",
      options: [
        "人们想要买最便宜的产品",
        "人们不想买四分之一英寸的钻头，他们想要四分之一英寸的孔",
        "人们总是追求最新技术",
        "人们只关心品牌",
      ],
      answer: 1,
      rationale:
        "Theodore Levitt 的著名观点是「人们不想买四分之一英寸的钻头，他们想要四分之一英寸的孔」，这成为 JTBD 的经典引用。",
    },
    {
      id: "pm-w2-3-q11",
      question: "Job Stories 相比 User Stories 的主要优势是什么？",
      options: [
        "更短更简洁",
        "将动机与实现解耦，更容易诊断功能失败的原因",
        "不需要用户研究",
        "更容易写代码",
      ],
      answer: 1,
      rationale:
        "Intercom 指出 Job Stories 将动机与实现解耦，使得更容易诊断功能失败的原因——是实现有问题还是动机假设错误。",
    },
    {
      id: "pm-w2-3-q12",
      question: "HBR 强调成功实施 JTBD 需要什么？",
      options: [
        "只需要添加功能",
        "设计与任务对齐的整合客户体验和组织流程",
        "只需要降低价格",
        "只需要增加营销预算",
      ],
      answer: 1,
      rationale:
        "HBR 强调成功需要「设计与任务对齐的整合客户体验和组织流程」——不仅是添加竞品有的功能。",
    },
  ],
  "pm-w2-4": [
    {
      id: "pm-w2-4-q1",
      question: "Teresa Torres 定义的持续发现最低频率是什么？",
      options: [
        "每年至少与客户接触一次",
        "每季度至少与客户接触一次",
        "每周至少与客户接触一次",
        "每天与客户接触",
      ],
      answer: 2,
      rationale:
        "Teresa Torres 定义持续发现为「产品团队每周至少与客户有一次接触」。",
    },
    {
      id: "pm-w2-4-q2",
      question: "Lyssna 关于持续发现的核心理念是什么？",
      options: [
        "等待完美反馈再行动",
        "边学边做，不等待确定性",
        "只依赖数据分析",
        "外包给研究公司",
      ],
      answer: 1,
      rationale:
        "Lyssna 强调「如果你在等待'完美'反馈才行动，你已经落后了。持续发现意味着边学边做——而非等待确定性。」",
    },
    {
      id: "pm-w2-4-q3",
      question: "Teresa Torres 提出的「产品三人组」包括哪些角色？",
      options: [
        "CEO、CTO、CFO",
        "PM、设计师、工程师",
        "销售、市场、客服",
        "产品、运营、法务",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 提出「产品三人组」（Product Trio）——PM、设计师、工程师应该协作进行发现工作。",
    },
    {
      id: "pm-w2-4-q4",
      question: "Teresa Torres 指出优秀的产品发现团队每周进行哪两项活动？",
      options: [
        "写代码和测试",
        "客户访谈和假设测试",
        "开会和汇报",
        "设计和评审",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 指出优秀的产品发现团队每周进行两项活动：客户访谈（发现机会）和假设测试（发现解决方案）。",
    },
    {
      id: "pm-w2-4-q5",
      question: "Lyssna 总结的六项持续发现策略不包括以下哪项？",
      options: [
        "定期客户参与",
        "跨职能协作",
        "竞品功能复制",
        "假设驱动开发",
      ],
      answer: 2,
      rationale:
        "Lyssna 的六项策略：定期客户参与、跨职能协作、假设驱动开发、敏捷反馈流程、出声思考协议、市场趋势整合。不包括竞品功能复制。",
    },
    {
      id: "pm-w2-4-q6",
      question: "Teresa Torres 提到的「知识的诅咒」是什么意思？",
      options: [
        "学习太多会变笨",
        "团队对产品越熟悉，越容易失去用户视角",
        "知识产权的法律问题",
        "技术知识过时",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 提到随着团队对产品越来越熟悉，会逐渐「失去用户视角」，这就是知识的诅咒。",
    },
    {
      id: "pm-w2-4-q7",
      question: "Lyssna 建议用什么方法获得利益相关者对持续发现的支持？",
      options: [
        "强制执行",
        "用具体的用户反馈数据",
        "只在内部推进",
        "不需要利益相关者支持",
      ],
      answer: 1,
      rationale:
        "Lyssna 强调需要用「具体的用户反馈数据」获得组织支持，建立「反馈积极型心态」。",
    },
    {
      id: "pm-w2-4-q8",
      question: "Lyssna 提到的「出声思考协议」（Think-Aloud Protocol）的作用是什么？",
      options: [
        "让用户朗读产品说明",
        "让用户在测试时口述想法，发现数据无法发现的可用性问题",
        "让团队大声讨论",
        "记录用户的声音",
      ],
      answer: 1,
      rationale:
        "Lyssna 指出出声思考协议让用户在测试时口述想法，「发现数据无法发现的可用性问题」。",
    },
    {
      id: "pm-w2-4-q9",
      question: "传统团队在用户研究上的主要问题是什么？",
      options: [
        "研究太频繁",
        "只在项目开始时做研究",
        "研究成本太低",
        "研究方法太多",
      ],
      answer: 1,
      rationale:
        "传统团队只在项目开始时做研究。Teresa Torres 指出数字产品可以持续迭代，因此研究也应该持续进行。",
    },
    {
      id: "pm-w2-4-q10",
      question: "Lyssna 建议如何让发现成为习惯？",
      options: [
        "一开始就做大规模研究",
        "从小处开始，让发现成为习惯而非事件",
        "外包给专业公司",
        "只在季度末进行",
      ],
      answer: 1,
      rationale:
        "Lyssna 建议从小处开始，让发现成为「习惯」而非「事件」。",
    },
    {
      id: "pm-w2-4-q11",
      question: "Lyssna 建议团队如何处理研究发现？",
      options: [
        "每个人各自保存",
        "只有 PM 可以访问",
        "集中存储在共享研究仓库中",
        "不需要保存",
      ],
      answer: 2,
      rationale:
        "Lyssna 建议「集中研究发现」让团队从相同的洞察工作，建立共同理解。",
    },
    {
      id: "pm-w2-4-q12",
      question: "Teresa Torres 解决「知识的诅咒」的方法是什么？",
      options: [
        "减少学习",
        "定期接触用户",
        "只依赖数据",
        "外包研究",
      ],
      answer: 1,
      rationale:
        "Teresa Torres 指出解决「知识的诅咒」的方法是定期接触用户，保持用户视角。",
    },
  ],
}
