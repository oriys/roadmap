import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const softSkillsStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：沟通基础（第 1-3 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "soft-communication",
    title: "阶段一：沟通基础",
    duration: "第 1-3 周",
    goal: "掌握有效沟通的核心原则，提升书面和口头表达能力。",
    weeks: [
      {
        id: "soft-w1",
        title: "第 1 周：有效沟通原则",
        summary: "理解沟通的本质与有效沟通的核心要素。",
        overview: "本周从沟通模型入手，学习信息传递的完整流程和常见障碍，掌握积极倾听和非语言沟通技巧，为高效沟通打下坚实基础。",
        keyPoints: [
          "沟通是双向的信息交换过程。",
          "积极倾听是有效沟通的基础。",
          "非语言沟通传递大量信息。",
        ],
        lessons: [
          {
            id: "soft-w1-1",
            title: "沟通模型与障碍",
            detail: "理解沟通的基本模型和常见障碍。",
            keyPoints: [
              "沟通模型：发送者 → 编码 → 渠道 → 解码 → 接收者 → 反馈。",
              "噪音：物理噪音、心理噪音、语义噪音。",
              "常见障碍：信息过载、选择性感知、情绪干扰、文化差异。",
              "克服障碍：明确目的、选择合适渠道、确认理解。",
            ],
            resources: [
              { title: "Communication Models", url: "https://www.communicationtheory.org/shannon-and-weaver-model-of-communication/" },
              { title: "Barriers to Communication", url: "https://www.mindtools.com/ahbz4gx/barriers-to-effective-communication" },
              { title: "HBR: Communication", url: "https://hbr.org/topic/subject/communication" },
            ],
          },
          {
            id: "soft-w1-2",
            title: "积极倾听",
            detail: "学习专注倾听、复述确认和有效回应的核心技巧，培养深度倾听的习惯。",
            keyPoints: [
              "专注：全神贯注，避免分心和打断。",
              "理解：复述确认，提问澄清。",
              "回应：适当的肢体语言和语言反馈。",
              "记忆：关键信息记录，后续跟进。",
            ],
            resources: [
              { title: "Active Listening", url: "https://www.mindtools.com/az4wxv7/active-listening" },
              { title: "HBR: Listening", url: "https://hbr.org/2021/12/how-to-become-a-better-listener" },
              { title: "Carl Rogers on Listening", url: "https://www.psychologytoday.com/us/blog/what-would-aristotle-do/201505/the-lost-art-listening" },
            ],
          },
          {
            id: "soft-w1-3",
            title: "非语言沟通",
            detail: "掌握肢体语言、眼神交流和语调语速等非语言沟通要素，提升整体表达效果。",
            keyPoints: [
              "肢体语言：姿势、手势、面部表情。",
              "眼神交流：表达关注、建立信任。",
              "语调语速：传递情感和强调重点。",
              "空间距离：亲密区、个人区、社交区、公共区。",
            ],
            resources: [
              { title: "Body Language", url: "https://www.verywellmind.com/understand-body-language-and-facial-expressions-4147228" },
              { title: "Nonverbal Communication", url: "https://www.helpguide.org/articles/relationships-communication/nonverbal-communication.htm" },
              { title: "TED: Body Language", url: "https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are" },
            ],
          },
        ],
      },
      {
        id: "soft-w2",
        title: "第 2 周：书面沟通",
        summary: "提升书面表达能力，掌握职场写作技巧。",
        overview: "本周聚焦书面沟通，从职场邮件到技术文档和业务报告，学习金字塔原理和结构化写作方法，以及即时通讯工具的高效使用。",
        keyPoints: [
          "清晰简洁是书面沟通的核心原则。",
          "结构化写作提高信息传递效率。",
          "不同场景需要不同的写作风格。",
        ],
        lessons: [
          {
            id: "soft-w2-1",
            title: "职场邮件写作",
            detail: "掌握职场邮件的主题行撰写、金字塔结构和行动项管理，提升邮件沟通效率。",
            keyPoints: [
              "主题行：明确、具体、吸引注意。",
              "开头：明确目的，尊重对方时间。",
              "正文：金字塔原则，先结论后细节。",
              "收尾：明确行动项（Action Items）和截止日期。",
            ],
            resources: [
              { title: "Email Writing", url: "https://www.grammarly.com/blog/professional-email-in-english/" },
              { title: "HBR: Email Etiquette", url: "https://hbr.org/2020/03/how-to-write-email-with-military-precision" },
              { title: "Business Email", url: "https://www.mindtools.com/a8cvpkt/writing-effective-emails" },
            ],
          },
          {
            id: "soft-w2-2",
            title: "文档与报告写作",
            detail: "撰写结构化的技术文档和业务报告。",
            keyPoints: [
              "金字塔原理：结论先行，以上统下。",
              "MECE 原则：相互独立，完全穷尽。",
              "格式规范：标题层次、列表编号、图表标注。",
              "审阅修改：搁置后重读，请他人审阅。",
            ],
            resources: [
              { title: "Pyramid Principle", url: "https://www.amazon.com/Pyramid-Principle-Logic-Writing-Thinking/dp/0273710516" },
              { title: "Technical Writing", url: "https://developers.google.com/tech-writing" },
              { title: "Business Writing", url: "https://www.coursera.org/learn/writing-for-business" },
            ],
          },
          {
            id: "soft-w2-3",
            title: "即时通讯与协作",
            detail: "在 Slack/Teams 等工具中高效沟通。",
            keyPoints: [
              "消息简洁：一条消息一个主题。",
              "善用线程：保持讨论有序。",
              "状态管理：合理设置在线状态和勿扰。",
              "异步沟通：不期望即时回复，减少打扰。",
            ],
            resources: [
              { title: "Slack Etiquette", url: "https://slack.com/blog/collaboration/etiquette-tips-in-slack" },
              { title: "Async Communication", url: "https://about.gitlab.com/company/culture/all-remote/asynchronous/" },
              { title: "Remote Communication", url: "https://www.atlassian.com/blog/teamwork/remote-work-communication" },
            ],
          },
        ],
      },
      {
        id: "soft-w3",
        title: "第 3 周：口头表达与演讲",
        summary: "提升口头表达能力，克服演讲恐惧。",
        overview: "本周围绕演讲展开，学习演讲结构设计、声音和肢体表达技巧，以及用故事增强影响力的方法，全面提升口头表达能力。",
        keyPoints: [
          "演讲是可以学习和提高的技能。",
          "准备充分是成功演讲的关键。",
          "故事是最有力的沟通工具。",
        ],
        lessons: [
          {
            id: "soft-w3-1",
            title: "演讲结构设计",
            detail: "学习演讲的开场吸引、主体论证和收尾呼吁技巧，设计清晰有力的演讲结构。",
            keyPoints: [
              "开场：吸引注意，建立联系（故事、问题、数据）。",
              "主体：3-5 个要点，每点有论据支撑。",
              "收尾：总结要点，呼吁行动（Call to Action）。",
              "时间控制：练习确保在规定时间内完成。",
            ],
            resources: [
              { title: "TED Speaking", url: "https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/speakers-program/prepare-your-speaker" },
              { title: "Presentation Structure", url: "https://www.duarte.com/presentation-skills-resources/" },
              { title: "Nancy Duarte: Resonate", url: "https://www.duarte.com/resources/books/resonate/" },
            ],
          },
          {
            id: "soft-w3-2",
            title: "演讲技巧与呈现",
            detail: "掌握声音控制、肢体语言和眼神交流技巧，克服紧张情绪，提升演讲表现力。",
            keyPoints: [
              "声音控制：音量、语速、停顿、强调。",
              "肢体语言：开放姿态、手势辅助、移动自然。",
              "眼神交流：扫视全场，建立连接。",
              "处理紧张：深呼吸、准备充分、正向自我暗示。",
            ],
            resources: [
              { title: "Public Speaking Tips", url: "https://www.toastmasters.org/resources/public-speaking-tips" },
              { title: "TED: Secrets of Great Talks", url: "https://www.ted.com/talks/chris_anderson_ted_s_secret_to_great_public_speaking" },
              { title: "Overcoming Anxiety", url: "https://www.anxietycanada.com/articles/public-speaking-anxiety/" },
            ],
          },
          {
            id: "soft-w3-3",
            title: "故事讲述",
            detail: "学习故事结构和英雄之旅框架，用个人故事和数据叙事增强沟通感染力。",
            keyPoints: [
              "故事结构：情境 → 冲突 → 解决 → 启示。",
              "英雄之旅：平凡世界 → 冒险召唤 → 考验 → 转变 → 回归。",
              "个人故事：真实、相关、有情感共鸣。",
              "数据故事：用叙事框架呈现数据洞察。",
            ],
            resources: [
              { title: "Storytelling", url: "https://www.storytellingwithdata.com/" },
              { title: "Hero's Journey", url: "https://www.masterclass.com/articles/writing-101-what-is-the-heros-journey" },
              { title: "Data Storytelling", url: "https://www.forbes.com/sites/brentdykes/2016/03/31/data-storytelling-the-essential-data-science-skill-everyone-needs/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：团队协作（第 4-6 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "soft-teamwork",
    title: "阶段二：团队协作",
    duration: "第 4-6 周",
    goal: "掌握团队协作技能，学会处理冲突和跨文化沟通。",
    weeks: [
      {
        id: "soft-w4",
        title: "第 4 周：团队合作基础",
        summary: "理解团队动态，提升协作效能。",
        overview: "本周深入团队协作基础，学习 Tuckman 团队发展模型、心理安全感的构建方法，以及 SBI 反馈模型等实用工具。",
        keyPoints: [
          "高效团队有明确的目标和角色分工。",
          "心理安全感是团队创新的基础。",
          "有效的反馈促进团队成长。",
        ],
        lessons: [
          {
            id: "soft-w4-1",
            title: "团队发展阶段",
            detail: "学习 Tuckman 模型的形成期、风暴期、规范期和执行期，把握团队成长规律。",
            keyPoints: [
              "形成期（Forming）：礼貌客气，了解彼此。",
              "风暴期（Storming）：冲突产生，争夺影响力。",
              "规范期（Norming）：建立规则，形成共识。",
              "执行期（Performing）：高效协作，达成目标。",
            ],
            resources: [
              { title: "Tuckman's Stages", url: "https://www.mindtools.com/awe2th5/forming-storming-norming-and-performing" },
              { title: "Team Development", url: "https://hbr.org/2016/06/the-secrets-of-great-teamwork" },
              { title: "Google: Project Aristotle", url: "https://rework.withgoogle.com/guides/understanding-team-effectiveness/" },
            ],
          },
          {
            id: "soft-w4-2",
            title: "心理安全感",
            detail: "学习如何营造让成员敢于承担风险、提出不同意见的团队心理安全环境。",
            keyPoints: [
              "心理安全感：团队成员敢于承担风险而不担心被惩罚。",
              "领导者示范：承认错误、请求反馈。",
              "鼓励发言：邀请不同意见、感谢提出问题。",
              "容错文化：从失败中学习而非追究责任。",
            ],
            resources: [
              { title: "Psychological Safety", url: "https://www.ccl.org/articles/leading-effectively-articles/what-is-psychological-safety-at-work/" },
              { title: "Amy Edmondson", url: "https://www.ted.com/talks/amy_edmondson_how_to_turn_a_group_of_strangers_into_a_team" },
              { title: "Fearless Organization", url: "https://fearlessorganization.com/" },
            ],
          },
          {
            id: "soft-w4-3",
            title: "给予和接受反馈",
            detail: "学习 SBI 反馈模型，掌握及时、具体、对事不对人的建设性反馈与接受技巧。",
            keyPoints: [
              "SBI 模型：情境（Situation）→ 行为（Behavior）→ 影响（Impact）。",
              "及时反馈：事件发生后尽快反馈。",
              "具体而非笼统：描述具体行为而非性格特征。",
              "接受反馈：感谢、提问澄清、反思行动。",
            ],
            resources: [
              { title: "SBI Feedback Model", url: "https://www.ccl.org/articles/leading-effectively-articles/closing-the-gap-between-intent-vs-impact-sbii/" },
              { title: "Radical Candor", url: "https://www.radicalcandor.com/" },
              { title: "HBR: Feedback", url: "https://hbr.org/2019/03/the-feedback-fallacy" },
            ],
          },
        ],
      },
      {
        id: "soft-w5",
        title: "第 5 周：冲突管理",
        summary: "学会识别和有效处理团队冲突。",
        overview: "本周学习冲突管理，从识别冲突类型和根源开始，掌握 Thomas-Kilmann 冲突处理模型和调解对话技巧，将冲突转化为成长机会。",
        keyPoints: [
          "冲突是团队发展的自然组成部分。",
          "建设性冲突可以产生更好的决策。",
          "选择合适的冲突处理策略是关键。",
        ],
        lessons: [
          {
            id: "soft-w5-1",
            title: "冲突类型与来源",
            detail: "分析任务冲突、关系冲突和过程冲突的特征，识别资源稀缺和沟通不畅等根源。",
            keyPoints: [
              "任务冲突：关于工作内容和目标的分歧。",
              "关系冲突：人际紧张和情绪对立。",
              "过程冲突：关于如何完成工作的争议。",
              "常见根源：资源稀缺、目标差异、沟通不畅、个性冲突。",
            ],
            resources: [
              { title: "Types of Conflict", url: "https://www.pon.harvard.edu/daily/conflict-resolution/types-conflict/" },
              { title: "Conflict Sources", url: "https://www.mindtools.com/ahlbc68/conflict-resolution" },
              { title: "Managing Conflict", url: "https://hbr.org/2017/07/how-to-handle-a-disagreement-on-your-team" },
            ],
          },
          {
            id: "soft-w5-2",
            title: "冲突处理策略",
            detail: "选择和应用合适的冲突处理方式。",
            keyPoints: [
              "竞争（Competing）：追求己方利益，适合紧急决策。",
              "合作（Collaborating）：寻求双赢，适合重要议题。",
              "妥协（Compromising）：各让一步，适合时间紧迫。",
              "回避（Avoiding）：暂时搁置，适合小事或需冷静。",
              "迁就（Accommodating）：让步，适合维护关系。",
            ],
            resources: [
              { title: "Thomas-Kilmann Model", url: "https://kilmanndiagnostics.com/overview-thomas-kilmann-conflict-mode-instrument-tki/" },
              { title: "Conflict Styles", url: "https://www.mtdtraining.com/blog/five-conflict-resolution-styles.htm" },
              { title: "When to Use Each", url: "https://www.pon.harvard.edu/daily/conflict-resolution/conflict-management-styles/" },
            ],
          },
          {
            id: "soft-w5-3",
            title: "调解与对话",
            detail: "运用利益导向的调解方法，分离人与问题，促进建设性对话并创造双赢解决方案。",
            keyPoints: [
              "分离人与问题：关注利益而非立场。",
              "积极倾听双方：理解各方需求和关切。",
              "寻找共同点：从共识开始构建解决方案。",
              "创造选项：头脑风暴多种可能的解决方案。",
            ],
            resources: [
              { title: "Getting to Yes", url: "https://www.pon.harvard.edu/shop/getting-to-yes/" },
              { title: "Difficult Conversations", url: "https://www.stoneandheen.com/difficult-conversations" },
              { title: "Mediation Skills", url: "https://www.mediate.com/articles/zumeta.cfm" },
            ],
          },
        ],
      },
      {
        id: "soft-w6",
        title: "第 6 周：跨文化协作",
        summary: "提升跨文化沟通和协作能力。",
        overview: "本周探索跨文化协作，学习 Hofstede 文化维度理论、高低语境沟通差异，以及远程跨国团队的高效协作实践。",
        keyPoints: [
          "文化影响沟通风格和工作方式。",
          "文化智商（CQ）是全球化时代的关键能力。",
          "尊重差异，寻找共同点。",
        ],
        lessons: [
          {
            id: "soft-w6-1",
            title: "文化维度理论",
            detail: "学习 Hofstede 文化维度理论，理解权力距离、个人主义和不确定性规避等维度。",
            keyPoints: [
              "权力距离：对权力不平等的接受程度。",
              "个人主义 vs 集体主义：个人目标 vs 群体利益。",
              "不确定性规避：对模糊和风险的容忍度。",
              "长期导向 vs 短期导向：对时间和变化的态度。",
            ],
            resources: [
              { title: "Hofstede's Dimensions", url: "https://www.hofstede-insights.com/models/national-culture/" },
              { title: "Culture Map", url: "https://erinmeyer.com/books/the-culture-map/" },
              { title: "Cross-Cultural Management", url: "https://hbr.org/2014/05/navigating-the-cultural-minefield" },
            ],
          },
          {
            id: "soft-w6-2",
            title: "跨文化沟通技巧",
            detail: "掌握高低语境差异、时间观念差异等跨文化沟通技巧，避免文化偏见和误解。",
            keyPoints: [
              "高语境 vs 低语境：隐含意义 vs 直接表达。",
              "时间观念：单一时间 vs 多元时间文化。",
              "避免假设：不要以自己的文化标准评判他人。",
              "主动学习：了解对方文化背景和习惯。",
            ],
            resources: [
              { title: "High/Low Context", url: "https://www.businessinsider.com/high-context-and-low-context-cultures-2015-6" },
              { title: "Cross-Cultural Communication", url: "https://www.mindtools.com/a8u7omo/cross-cultural-communication" },
              { title: "Working Across Cultures", url: "https://hbr.org/2015/12/getting-to-si-ja-oui-hai-and-da" },
            ],
          },
          {
            id: "soft-w6-3",
            title: "远程跨国团队协作",
            detail: "学习时区协调、异步沟通和文档透明等实践，提升远程跨国团队协作效能。",
            keyPoints: [
              "时区协调：选择重叠时间，轮流牺牲。",
              "异步为主：减少对同步会议的依赖。",
              "文档透明：决策和讨论记录在案。",
              "建立联系：虚拟社交活动，增进了解。",
            ],
            resources: [
              { title: "Remote Team Management", url: "https://about.gitlab.com/company/culture/all-remote/" },
              { title: "Distributed Teams", url: "https://www.atlassian.com/blog/teamwork/how-to-manage-distributed-teams" },
              { title: "Virtual Team Building", url: "https://www.range.co/blog/virtual-team-building" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：个人效能（第 7-9 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "soft-effectiveness",
    title: "阶段三：个人效能",
    duration: "第 7-9 周",
    goal: "提升时间管理、压力管理和自我管理能力。",
    weeks: [
      {
        id: "soft-w7",
        title: "第 7 周：时间管理",
        summary: "掌握时间管理方法，提升工作效率。",
        overview: "本周专注时间管理，学习艾森豪威尔矩阵进行优先级排序、深度工作与番茄工作法，以及 GTD 任务管理系统的完整流程。",
        keyPoints: [
          "时间管理的本质是优先级管理。",
          "深度工作需要刻意保护。",
          "习惯和系统比意志力更可靠。",
        ],
        lessons: [
          {
            id: "soft-w7-1",
            title: "优先级管理",
            detail: "区分重要与紧急，聚焦高价值任务。",
            keyPoints: [
              "艾森豪威尔矩阵：重要紧急、重要不紧急、紧急不重要、不重要不紧急。",
              "80/20 法则：20% 的任务产生 80% 的价值。",
              "每日三件事：确定当天最重要的三项任务。",
              "学会说不：拒绝低价值的请求。",
            ],
            resources: [
              { title: "Eisenhower Matrix", url: "https://www.eisenhower.me/eisenhower-matrix/" },
              { title: "Pareto Principle", url: "https://www.investopedia.com/terms/p/paretoprinciple.asp" },
              { title: "Essentialism", url: "https://gregmckeown.com/books/essentialism/" },
            ],
          },
          {
            id: "soft-w7-2",
            title: "深度工作与专注",
            detail: "学习时间块和番茄工作法等专注技巧，创造无干扰环境以实现高效深度工作。",
            keyPoints: [
              "深度工作：在无干扰状态下进行高认知要求的工作。",
              "时间块（Time Blocking）：为深度工作预留专门时间。",
              "消除干扰：关闭通知、创造专注环境。",
              "番茄工作法：25 分钟专注 + 5 分钟休息。",
            ],
            resources: [
              { title: "Deep Work", url: "https://www.calnewport.com/books/deep-work/" },
              { title: "Time Blocking", url: "https://todoist.com/productivity-methods/time-blocking" },
              { title: "Pomodoro Technique", url: "https://francescocirillo.com/products/the-pomodoro-technique" },
            ],
          },
          {
            id: "soft-w7-3",
            title: "任务管理系统",
            detail: "学习 GTD 方法论，掌握捕获、澄清、组织、回顾和执行的完整任务管理流程。",
            keyPoints: [
              "GTD（Getting Things Done）：捕获 → 澄清 → 组织 → 回顾 → 执行。",
              "收件箱清零：定时处理，不让任务堆积。",
              "项目与下一步行动：大任务分解为具体行动。",
              "定期回顾：每日、每周、每月回顾。",
            ],
            resources: [
              { title: "Getting Things Done", url: "https://gettingthingsdone.com/" },
              { title: "Todoist GTD", url: "https://todoist.com/productivity-methods/getting-things-done" },
              { title: "Weekly Review", url: "https://www.calnewport.com/blog/2013/12/21/deep-habits-the-importance-of-planning-every-minute-of-your-work-day/" },
            ],
          },
        ],
      },
      {
        id: "soft-w8",
        title: "第 8 周：压力管理",
        summary: "理解压力机制，建立健康的应对策略。",
        overview: "本周关注压力管理，从认识压力源和耶克斯-多德森定律开始，学习多元应对策略和恢复韧性方法，实现身心可持续发展。",
        keyPoints: [
          "适度压力可以提升表现，过度压力有害健康。",
          "压力管理需要身心双重关注。",
          "建立恢复机制是长期可持续的关键。",
        ],
        lessons: [
          {
            id: "soft-w8-1",
            title: "压力认知与识别",
            detail: "识别工作负荷和不确定性等压力源，理解压力的生理、情绪和认知反应机制。",
            keyPoints: [
              "压力源：工作负荷、人际关系、不确定性、缺乏控制。",
              "压力反应：生理（心跳加速）、情绪（焦虑）、认知（注意力下降）。",
              "耶克斯-多德森定律：适度唤醒表现最佳。",
              "识别信号：早期发现压力过载的征兆。",
            ],
            resources: [
              { title: "Understanding Stress", url: "https://www.apa.org/topics/stress" },
              { title: "Yerkes-Dodson Law", url: "https://www.simplypsychology.org/what-is-the-yerkes-dodson-law.html" },
              { title: "Stress Signals", url: "https://www.helpguide.org/articles/stress/stress-symptoms-signs-and-causes.htm" },
            ],
          },
          {
            id: "soft-w8-2",
            title: "应对策略",
            detail: "学习问题导向、情绪调节和认知重构等应对策略，建立多元化的压力管理体系。",
            keyPoints: [
              "问题导向：直接解决压力源。",
              "情绪导向：调节对压力的情绪反应。",
              "认知重构：改变对压力事件的解读。",
              "社会支持：向信任的人倾诉和寻求帮助。",
            ],
            resources: [
              { title: "Coping Strategies", url: "https://www.verywellmind.com/forty-healthy-coping-skills-4586742" },
              { title: "Cognitive Reframing", url: "https://positivepsychology.com/cognitive-reframing/" },
              { title: "Stress Management", url: "https://www.mindtools.com/ay71sp8/stress-management" },
            ],
          },
          {
            id: "soft-w8-3",
            title: "恢复与韧性",
            detail: "掌握休息恢复、正念冥想和工作生活边界管理技巧，培养从挫折中成长的韧性。",
            keyPoints: [
              "休息恢复：充足睡眠、定期运动、健康饮食。",
              "正念冥想：活在当下，减少焦虑。",
              "工作生活边界：明确界限，保护个人时间。",
              "韧性培养：从挫折中学习和成长。",
            ],
            resources: [
              { title: "Recovery", url: "https://hbr.org/2016/06/resilience-is-about-how-you-recharge-not-how-you-endure" },
              { title: "Mindfulness", url: "https://www.mindful.org/meditation/mindfulness-getting-started/" },
              { title: "Building Resilience", url: "https://www.apa.org/topics/resilience/building-your-resilience" },
            ],
          },
        ],
      },
      {
        id: "soft-w9",
        title: "第 9 周：自我管理与成长",
        summary: "培养成长心态，持续自我提升。",
        overview: "本周聚焦自我管理与成长，学习固定心态与成长心态的差异、内在和外在自我意识的培养，以及 70-20-10 终身学习模型。",
        keyPoints: [
          "成长心态相信能力可以通过努力发展。",
          "自我意识是自我管理的基础。",
          "持续学习是职业发展的关键。",
        ],
        lessons: [
          {
            id: "soft-w9-1",
            title: "成长心态",
            detail: "对比固定心态与成长心态的差异，学习拥抱挑战、从失败中学习的积极思维方式。",
            keyPoints: [
              "固定心态 vs 成长心态：能力固定 vs 能力可发展。",
              "拥抱挑战：将困难视为成长机会。",
              "从失败中学习：失败是反馈，不是定义。",
              "重视过程：关注努力和策略，而非天赋。",
            ],
            resources: [
              { title: "Growth Mindset", url: "https://www.mindsetworks.com/science/" },
              { title: "Carol Dweck", url: "https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve" },
              { title: "Mindset Book", url: "https://www.penguinrandomhouse.com/books/44330/mindset-by-carol-s-dweck-phd/" },
            ],
          },
          {
            id: "soft-w9-2",
            title: "自我意识",
            detail: "培养内在和外在自我意识，通过反思实践和主动寻求反馈提升自我认知深度。",
            keyPoints: [
              "内在自我意识：了解自己的价值观、情绪、优劣势。",
              "外在自我意识：理解他人如何看待自己。",
              "反思实践：定期回顾和自我评估。",
              "寻求反馈：主动请求他人的观察和建议。",
            ],
            resources: [
              { title: "Self-Awareness", url: "https://hbr.org/2018/01/what-self-awareness-really-is-and-how-to-cultivate-it" },
              { title: "Insight", url: "https://www.insight-book.com/" },
              { title: "Johari Window", url: "https://www.communicationtheory.org/the-johari-window-model/" },
            ],
          },
          {
            id: "soft-w9-3",
            title: "持续学习",
            detail: "运用 70-20-10 学习模型，建立知识管理系统和分享输出的终身学习习惯。",
            keyPoints: [
              "学习目标：明确想要发展的技能和知识。",
              "学习方法：70-20-10 模型（实践-社交-正式）。",
              "知识管理：笔记系统、知识库。",
              "分享输出：教是最好的学。",
            ],
            resources: [
              { title: "70-20-10 Model", url: "https://trainingindustry.com/wiki/content-development/the-702010-model-for-learning-and-development/" },
              { title: "Learning How to Learn", url: "https://www.coursera.org/learn/learning-how-to-learn" },
              { title: "Personal Knowledge Management", url: "https://fortelabs.com/blog/basc-where-to-start-for-knowledge-workers/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：问题解决与决策（第 10-12 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "soft-problem-solving",
    title: "阶段四：问题解决与决策",
    duration: "第 10-12 周",
    goal: "提升批判性思维、问题解决和决策能力。",
    weeks: [
      {
        id: "soft-w10",
        title: "第 10 周：批判性思维",
        summary: "培养批判性思维能力，避免认知偏差。",
        overview: "本周培养批判性思维，学习系统化分析框架识别假设和评估证据，了解常见认知偏差及纠偏方法，掌握苏格拉底式提问技巧。",
        keyPoints: [
          "批判性思维是分析和评估信息的能力。",
          "认知偏差影响我们的判断和决策。",
          "提问是批判性思维的核心工具。",
        ],
        lessons: [
          {
            id: "soft-w10-1",
            title: "批判性思维框架",
            detail: "学习识别假设、评估证据和考虑替代解释的系统化批判性思维分析框架。",
            keyPoints: [
              "识别假设：区分事实与观点。",
              "评估证据：来源可靠性、样本大小、逻辑关联。",
              "考虑替代解释：是否有其他可能的原因。",
              "得出结论：基于证据的合理推断。",
            ],
            resources: [
              { title: "Critical Thinking", url: "https://www.criticalthinking.org/pages/defining-critical-thinking/766" },
              { title: "Thinking, Fast and Slow", url: "https://www.penguinrandomhouse.com/books/89308/thinking-fast-and-slow-by-daniel-kahneman/" },
              { title: "Paul-Elder Framework", url: "https://louisville.edu/ideastoaction/about/criticalthinking/framework" },
            ],
          },
          {
            id: "soft-w10-2",
            title: "认知偏差",
            detail: "了解确认偏差、锚定效应和可得性偏差等常见认知陷阱，学习系统化纠偏方法。",
            keyPoints: [
              "确认偏差：倾向于寻找支持现有观点的信息。",
              "锚定效应：过度依赖首先获得的信息。",
              "可得性偏差：高估容易想到的事物的重要性。",
              "后见之明偏差：事后觉得结果是可预测的。",
            ],
            resources: [
              { title: "Cognitive Biases", url: "https://www.visualcapitalist.com/50-cognitive-biases-in-the-modern-world/" },
              { title: "Debiasing", url: "https://fs.blog/mental-models/" },
              { title: "Predictably Irrational", url: "https://danariely.com/books/predictably-irrational/" },
            ],
          },
          {
            id: "soft-w10-3",
            title: "提问的艺术",
            detail: "掌握开放式提问、5 个为什么和苏格拉底式提问技巧，用提问引导深度思考。",
            keyPoints: [
              "开放式问题：激发思考和讨论。",
              "5 个为什么：追问根本原因。",
              "苏格拉底式提问：通过问题引导思考。",
              "挑战假设：如果这不是真的呢？",
            ],
            resources: [
              { title: "Powerful Questions", url: "https://www.mindtools.com/a9cwxmh/questioning-techniques" },
              { title: "5 Whys", url: "https://www.mindtools.com/a3mi00v/5-whys" },
              { title: "Socratic Questioning", url: "https://www.criticalthinking.org/pages/socratic-teaching/606" },
            ],
          },
        ],
      },
      {
        id: "soft-w11",
        title: "第 11 周：问题解决方法",
        summary: "掌握系统化的问题解决方法。",
        keyPoints: [
          "问题定义是解决问题的第一步。",
          "结构化方法提高问题解决效率。",
          "创造性思维产生创新解决方案。",
        ],
        lessons: [
          {
            id: "soft-w11-1",
            title: "问题定义与分析",
            detail: "学习清晰的问题陈述方法，运用鱼骨图和 5 Why 分析法精准定位问题根因。",
            keyPoints: [
              "问题陈述：清晰、具体、可衡量。",
              "问题分解：MECE 原则，分而治之。",
              "根因分析：鱼骨图、5 Why 分析。",
              "数据收集：定量和定性数据支撑分析。",
            ],
            resources: [
              { title: "Problem Definition", url: "https://www.mindtools.com/ayzm7lu/defining-problems" },
              { title: "Root Cause Analysis", url: "https://asq.org/quality-resources/root-cause-analysis" },
              { title: "Ishikawa Diagram", url: "https://www.mindtools.com/a3enm5s/cause-and-effect-analysis" },
            ],
          },
          {
            id: "soft-w11-2",
            title: "结构化问题解决",
            detail: "掌握麦肯锡方法、PDCA 循环和 A3 思维等结构化问题解决框架并实践应用。",
            keyPoints: [
              "麦肯锡方法：假设驱动、事实依据、结构清晰。",
              "PDCA 循环：计划 → 执行 → 检查 → 改进。",
              "A3 思维：一页纸呈现问题和解决方案。",
              "8D 方法：团队问题解决的结构化流程。",
            ],
            resources: [
              { title: "McKinsey Problem Solving", url: "https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-problem-solving" },
              { title: "PDCA Cycle", url: "https://asq.org/quality-resources/pdca-cycle" },
              { title: "A3 Thinking", url: "https://www.lean.org/lexicon-terms/a3-report/" },
            ],
          },
          {
            id: "soft-w11-3",
            title: "创造性问题解决",
            detail: "学习头脑风暴、逆向思维、类比思维和 SCAMPER 等创造性问题解决方法。",
            keyPoints: [
              "头脑风暴：数量优先、延迟判断、借力发挥。",
              "逆向思维：如果想让问题更糟会怎么做？",
              "类比思维：其他领域如何解决类似问题？",
              "SCAMPER：替代、结合、调整、修改、用途、消除、重组。",
            ],
            resources: [
              { title: "Brainstorming", url: "https://www.mindtools.com/abj1r8z/brainstorming" },
              { title: "SCAMPER", url: "https://www.mindtools.com/amtbj63/scamper" },
              { title: "Lateral Thinking", url: "https://www.edwdebono.com/lateral-thinking" },
            ],
          },
        ],
      },
      {
        id: "soft-w12",
        title: "第 12 周：决策制定",
        summary: "提升决策质量和效率。",
        keyPoints: [
          "好的决策过程比单次结果更重要。",
          "不同情境需要不同的决策方法。",
          "克服决策中的常见陷阱。",
        ],
        lessons: [
          {
            id: "soft-w12-1",
            title: "决策框架",
            detail: "学习决策矩阵、利弊分析和决策树等工具，系统化评估选项以提高决策质量。",
            keyPoints: [
              "决策矩阵：列出选项、标准、权重、评分。",
              "利弊分析：系统性列出优缺点。",
              "决策树：可视化选择和可能结果。",
              "预期值分析：概率 × 结果价值。",
            ],
            resources: [
              { title: "Decision Matrix", url: "https://www.mindtools.com/a3p3c95/decision-matrix-analysis" },
              { title: "Decision Tree", url: "https://www.mindtools.com/a8b5kya/decision-tree-analysis" },
              { title: "Expected Value", url: "https://fs.blog/expected-value/" },
            ],
          },
          {
            id: "soft-w12-2",
            title: "快速决策与深思决策",
            detail: "区分可逆与不可逆决策，掌握 OODA 循环和 70% 规则等快速决策方法论。",
            keyPoints: [
              "可逆 vs 不可逆：可逆决策快速决定，不可逆谨慎考虑。",
              "OODA 循环：观察 → 定向 → 决策 → 行动。",
              "70% 规则：信息达到 70% 时决策（贝佐斯）。",
              "决策日志：记录决策过程，事后复盘。",
            ],
            resources: [
              { title: "Two-Way Door Decisions", url: "https://www.inc.com/jeff-haden/amazon-founder-jeff-bezos-this-is-how-successful-people-make-such-smart-decisions.html" },
              { title: "OODA Loop", url: "https://www.mindtools.com/a3rxhpl/the-ooda-loop" },
              { title: "Decision Journal", url: "https://fs.blog/decision-journal/" },
            ],
          },
          {
            id: "soft-w12-3",
            title: "群体决策与共识",
            detail: "识别群体思维陷阱，运用 RAPID 框架明确决策角色，促进高质量的团队决策。",
            keyPoints: [
              "群体思维陷阱：追求和谐而压制不同意见。",
              "异议的价值：指定唱反调的人。",
              "共识与同意：共识不等于全票同意。",
              "RAPID 框架：明确决策角色和责任。",
            ],
            resources: [
              { title: "Groupthink", url: "https://www.mindtools.com/aikvx0e/avoiding-groupthink" },
              { title: "RAPID Decision Making", url: "https://www.bain.com/insights/rapid-tool-to-clarify-decision-accountability/" },
              { title: "Consensus Building", url: "https://www.pon.harvard.edu/daily/leadership-skills-daily/what-is-consensus-building/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段五：影响力与领导（第 13-15 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "soft-leadership",
    title: "阶段五：影响力与领导",
    duration: "第 13-15 周",
    goal: "提升影响力、谈判能力和领导技能。",
    weeks: [
      {
        id: "soft-w13",
        title: "第 13 周：影响力与说服",
        summary: "学习影响他人的原则和技巧。",
        keyPoints: [
          "影响力基于信任和互惠。",
          "了解对方需求是说服的基础。",
          "故事和情感比逻辑更有说服力。",
        ],
        lessons: [
          {
            id: "soft-w13-1",
            title: "影响力原则",
            detail: "学习 Cialdini 的互惠、社会认同、权威和稀缺等六大影响力心理原则及应用。",
            keyPoints: [
              "互惠原则：先给予，再请求。",
              "社会认同：人们跟随大众。",
              "权威：专业知识和可信度。",
              "稀缺性：稀有的更有价值。",
              "一致性：人们希望言行一致。",
              "喜好：我们更容易被喜欢的人影响。",
            ],
            resources: [
              { title: "Influence: Cialdini", url: "https://www.influenceatwork.com/7-principles-of-persuasion/" },
              { title: "Pre-Suasion", url: "https://www.simonandschuster.com/books/Pre-Suasion/Robert-Cialdini/9781501109805" },
              { title: "Psychology of Persuasion", url: "https://www.verywellmind.com/an-overview-of-the-6-principles-of-persuasion-5188722" },
            ],
          },
          {
            id: "soft-w13-2",
            title: "无权威影响力",
            detail: "通过建立信任、找到共同利益和构建支持网络，在缺乏正式权力时有效影响他人。",
            keyPoints: [
              "建立信任：展示能力、保持一致、真诚关心。",
              "找到共同利益：双赢的方案。",
              "网络和联盟：借助他人的支持。",
              "用数据说话：减少主观争议。",
            ],
            resources: [
              { title: "Influence Without Authority", url: "https://hbr.org/2013/01/three-ways-to-influence-people" },
              { title: "Leading Without Authority", url: "https://www.penguinrandomhouse.com/books/595736/leading-without-authority-by-keith-ferrazzi-with-noel-weyrich/" },
              { title: "Stakeholder Management", url: "https://www.mindtools.com/aez8t1e/stakeholder-analysis" },
            ],
          },
          {
            id: "soft-w13-3",
            title: "说服性沟通",
            detail: "运用 AIDA 模型和框架效应，结合受众分析构建有说服力的论点并处理异议。",
            keyPoints: [
              "了解受众：他们关心什么？担心什么？",
              "AIDA 模型：注意 → 兴趣 → 欲望 → 行动。",
              "框架效应：同一事实的不同呈现方式。",
              "处理异议：理解、认同、重构、解决。",
            ],
            resources: [
              { title: "Persuasive Communication", url: "https://www.mindtools.com/az1ydch/persuasion-skills" },
              { title: "AIDA Model", url: "https://www.mindtools.com/a8cvpkn/aida" },
              { title: "Framing Effect", url: "https://www.behavioraleconomics.com/resources/mini-encyclopedia-of-be/framing-effect/" },
            ],
          },
        ],
      },
      {
        id: "soft-w14",
        title: "第 14 周：谈判技巧",
        summary: "掌握谈判的原则和技巧。",
        keyPoints: [
          "谈判是寻找双方都能接受的方案。",
          "准备是谈判成功的关键。",
          "关注利益而非立场。",
        ],
        lessons: [
          {
            id: "soft-w14-1",
            title: "谈判准备",
            detail: "学习评估 BATNA 和 ZOPA，了解对方需求和约束，为谈判制定系统化准备方案。",
            keyPoints: [
              "BATNA：最佳替代方案，谈判的底牌。",
              "ZOPA：可能达成协议的区间。",
              "了解对方：他们的需求、约束、决策者。",
              "设定目标：理想结果、可接受结果、底线。",
            ],
            resources: [
              { title: "BATNA", url: "https://www.pon.harvard.edu/daily/batna/batna-basics-boost-your-power-at-the-bargaining-table/" },
              { title: "Negotiation Preparation", url: "https://www.pon.harvard.edu/daily/negotiation-skills-daily/negotiation-preparation-checklist/" },
              { title: "Getting to Yes", url: "https://www.pon.harvard.edu/shop/getting-to-yes/" },
            ],
          },
          {
            id: "soft-w14-2",
            title: "谈判策略与技巧",
            detail: "掌握利益导向谈判、价值创造和锚定效应等核心策略，实现互利共赢的谈判结果。",
            keyPoints: [
              "利益导向：探索背后的真正需求。",
              "创造价值：扩大蛋糕而非争夺份额。",
              "锚定效应：合理的首次出价。",
              "让步策略：逐步让步，换取回报。",
            ],
            resources: [
              { title: "Principled Negotiation", url: "https://www.pon.harvard.edu/daily/negotiation-skills-daily/principled-negotiation-focus-interests-create-value/" },
              { title: "Negotiation Tactics", url: "https://hbr.org/2016/06/negotiation-tactics-that-actually-work" },
              { title: "Never Split the Difference", url: "https://www.blackswanltd.com/never-split-the-difference" },
            ],
          },
          {
            id: "soft-w14-3",
            title: "困难谈判与僵局",
            detail: "学习在僵局中管理情绪、打破僵局和处理不当行为的技巧，把握离开谈判的时机。",
            keyPoints: [
              "情绪管理：保持冷静，不被激怒。",
              "打破僵局：改变议题、引入第三方、暂停休息。",
              "处理不当行为：命名行为、设定界限。",
              "知道何时离开：坚守底线，不勉强成交。",
            ],
            resources: [
              { title: "Difficult Negotiations", url: "https://www.pon.harvard.edu/daily/dealing-with-difficult-people-daily/" },
              { title: "Breaking Deadlocks", url: "https://hbr.org/2006/10/deal-making-when-negotiations-get-stuck" },
              { title: "Getting Past No", url: "https://www.williamury.com/books/getting-past-no/" },
            ],
          },
        ],
      },
      {
        id: "soft-w15",
        title: "第 15 周：领导力基础",
        summary: "理解领导力的本质和实践。",
        keyPoints: [
          "领导力是影响他人实现共同目标的能力。",
          "领导力可以在任何层级展现。",
          "情境决定最有效的领导风格。",
        ],
        lessons: [
          {
            id: "soft-w15-1",
            title: "领导力理论与风格",
            detail: "学习情境领导、变革型领导和仆人式领导等理论，根据团队需求选择合适风格。",
            keyPoints: [
              "情境领导：根据下属成熟度调整风格。",
              "变革型领导：激励愿景、智力激发、个性化关怀。",
              "仆人式领导：服务团队、赋能他人。",
              "真实领导：自我意识、价值观驱动、透明。",
            ],
            resources: [
              { title: "Situational Leadership", url: "https://situational.com/situational-leadership/" },
              { title: "Transformational Leadership", url: "https://www.verywellmind.com/what-is-transformational-leadership-2795313" },
              { title: "Servant Leadership", url: "https://www.greenleaf.org/what-is-servant-leadership/" },
            ],
          },
          {
            id: "soft-w15-2",
            title: "愿景与激励",
            detail: "学习如何设定清晰鼓舞人心的愿景，运用自主、精通和目的三要素激励团队。",
            keyPoints: [
              "愿景：清晰、鼓舞人心、有意义。",
              "沟通愿景：反复强调、以身作则。",
              "内在激励：自主、精通、目的。",
              "认可与赞赏：及时、具体、真诚。",
            ],
            resources: [
              { title: "Vision Statement", url: "https://www.mindtools.com/a5bl2ur/vision-statements-and-mission-statements" },
              { title: "Drive: Daniel Pink", url: "https://www.danpink.com/books/drive/" },
              { title: "Motivation Theory", url: "https://hbr.org/2003/01/one-more-time-how-do-you-motivate-employees" },
            ],
          },
          {
            id: "soft-w15-3",
            title: "授权与培养",
            detail: "掌握授权的目标设定和权限给予技巧，运用 GROW 模型教练式培养团队成员。",
            keyPoints: [
              "授权：明确目标、给予权限、支持而非干预。",
              "培养：教练式对话、提供发展机会。",
              "GROW 模型：目标 → 现状 → 选项 → 意愿。",
              "反馈与辅导：定期一对一，关注成长。",
            ],
            resources: [
              { title: "Delegation", url: "https://www.mindtools.com/a0anpvb/successful-delegation" },
              { title: "GROW Model", url: "https://www.mindtools.com/a5g35ng/the-grow-model-of-coaching-and-mentoring" },
              { title: "Coaching Skills", url: "https://hbr.org/2019/11/the-leader-as-coach" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段六：职业发展（第 16-18 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "soft-career",
    title: "阶段六：职业发展",
    duration: "第 16-18 周",
    goal: "提升情商、规划职业发展、建立个人品牌。",
    weeks: [
      {
        id: "soft-w16",
        title: "第 16 周：情商与人际关系",
        summary: "提升情商，建立有效的人际关系。",
        keyPoints: [
          "情商是职场成功的关键因素。",
          "管理情绪是情商的核心能力。",
          "良好的人际关系需要主动经营。",
        ],
        lessons: [
          {
            id: "soft-w16-1",
            title: "情绪智力",
            detail: "学习自我意识、自我管理、社会意识和关系管理四维度，系统性提升情绪智力。",
            keyPoints: [
              "自我意识：识别和理解自己的情绪。",
              "自我管理：调节情绪，适应变化。",
              "社会意识：同理心，理解他人情绪。",
              "关系管理：影响、教练、团队协作。",
            ],
            resources: [
              { title: "Emotional Intelligence", url: "https://www.danielgoleman.info/topics/emotional-intelligence/" },
              { title: "EQ-i 2.0", url: "https://www.mhs.com/MHS-Talent?prodname=eq-i2" },
              { title: "HBR: EI", url: "https://hbr.org/topic/subject/emotional-intelligence" },
            ],
          },
          {
            id: "soft-w16-2",
            title: "同理心与理解",
            detail: "发展认知同理心和情感同理心，通过同理心倾听和换位思考深入理解他人视角。",
            keyPoints: [
              "认知同理心：理解他人的思维方式。",
              "情感同理心：感受他人的情绪。",
              "同理心倾听：不评判，尝试理解。",
              "换位思考：站在对方立场考虑问题。",
            ],
            resources: [
              { title: "Empathy", url: "https://greatergood.berkeley.edu/topic/empathy" },
              { title: "Empathic Listening", url: "https://www.mindtools.com/a5xz5ok/empathic-listening" },
              { title: "Perspective Taking", url: "https://hbr.org/2019/04/how-to-be-a-more-effective-learner-take-on-others-perspectives" },
            ],
          },
          {
            id: "soft-w16-3",
            title: "职场人际关系",
            detail: "掌握向上管理、同事协作和跨部门关系建设技巧，主动经营职场人际网络。",
            keyPoints: [
              "向上管理：理解上级优先级，主动沟通进展。",
              "同事关系：合作互助，避免办公室政治。",
              "跨部门协作：建立联系，理解不同部门。",
              "导师关系：寻找导师，也成为他人导师。",
            ],
            resources: [
              { title: "Managing Up", url: "https://hbr.org/2015/01/what-everyone-should-know-about-managing-up" },
              { title: "Workplace Relationships", url: "https://www.mindtools.com/aihf3op/building-great-work-relationships" },
              { title: "Mentoring", url: "https://www.forbes.com/sites/forbescoachescouncil/2019/10/30/how-to-find-a-mentor-and-why-it-matters/" },
            ],
          },
        ],
      },
      {
        id: "soft-w17",
        title: "第 17 周：职业规划",
        summary: "规划职业发展路径和目标。",
        keyPoints: [
          "职业规划是一个持续的过程。",
          "了解自己是职业规划的基础。",
          "职业发展需要主动管理。",
        ],
        lessons: [
          {
            id: "soft-w17-1",
            title: "自我评估与探索",
            detail: "了解自己的优势、价值观和兴趣。",
            keyPoints: [
              "优势识别：你擅长什么？什么让你有能量？",
              "价值观澄清：什么对你最重要？",
              "兴趣探索：什么工作让你感到有意义？",
              "技能盘点：硬技能和软技能清单。",
            ],
            resources: [
              { title: "StrengthsFinder", url: "https://www.gallup.com/cliftonstrengths/" },
              { title: "Career Values", url: "https://www.mindtools.com/abkrpea/what-are-your-values" },
              { title: "Ikigai", url: "https://www.forbes.com/sites/chrismyers/2018/02/23/how-to-find-your-ikigai-and-transform-your-outlook-on-life-and-business/" },
            ],
          },
          {
            id: "soft-w17-2",
            title: "职业目标设定",
            detail: "制定长期职业愿景和中短期里程碑目标，运用 SMART 原则规划职业发展路径。",
            keyPoints: [
              "长期愿景：5-10 年后想成为什么样的人？",
              "中期目标：2-3 年的里程碑。",
              "短期行动：未来 6-12 个月的具体步骤。",
              "灵活调整：定期回顾和调整目标。",
            ],
            resources: [
              { title: "Career Planning", url: "https://www.mindtools.com/a6wmbek/career-planning" },
              { title: "SMART Goals", url: "https://www.mindtools.com/a4wo118/smart-goals" },
              { title: "Designing Your Life", url: "https://designingyour.life/" },
            ],
          },
          {
            id: "soft-w17-3",
            title: "职业转型与发展",
            detail: "识别可迁移技能，制定技能差距填补计划，掌握职业转型的探索和过渡策略。",
            keyPoints: [
              "技能可迁移性：识别跨领域通用技能。",
              "学习路径：填补技能差距的计划。",
              "职业转型：探索、准备、过渡。",
              "持续发展：保持竞争力的终身学习。",
            ],
            resources: [
              { title: "Career Change", url: "https://hbr.org/2016/07/what-to-do-when-youre-unhappy-in-your-job-but-dont-know-what-else-to-do" },
              { title: "Transferable Skills", url: "https://www.indeed.com/career-advice/resumes-cover-letters/transferable-skills" },
              { title: "Working Identity", url: "https://www.penguinrandomhouse.com/books/101367/working-identity-by-herminia-ibarra/" },
            ],
          },
        ],
      },
      {
        id: "soft-w18",
        title: "第 18 周：个人品牌与网络",
        summary: "建立个人品牌，拓展职业网络。",
        keyPoints: [
          "个人品牌是你的专业声誉。",
          "网络是职业发展的重要资源。",
          "在线存在感越来越重要。",
        ],
        lessons: [
          {
            id: "soft-w18-1",
            title: "个人品牌建设",
            detail: "明确个人品牌定位和独特价值，通过简历、作品集和内容输出建立专业形象。",
            keyPoints: [
              "品牌定位：你希望被如何认知？独特价值是什么？",
              "一致性：线上线下表现一致。",
              "专业形象：简历、LinkedIn、作品集。",
              "内容输出：博客、演讲、开源贡献。",
            ],
            resources: [
              { title: "Personal Branding", url: "https://www.forbes.com/sites/goldiechan/2018/11/08/10-golden-rules-personal-branding/" },
              { title: "LinkedIn Profile", url: "https://www.linkedin.com/pulse/how-write-perfect-linkedin-profile-optimize-your-career/" },
              { title: "Building Your Brand", url: "https://hbr.org/2017/03/a-new-more-rigorous-way-to-think-about-your-personal-brand" },
            ],
          },
          {
            id: "soft-w18-2",
            title: "职业网络建设",
            detail: "理解强弱连接理论，通过给予优先和定期跟进建立可持续的职业人际网络。",
            keyPoints: [
              "网络的价值：信息、机会、支持、影响力。",
              "强连接与弱连接：弱连接带来新信息和机会。",
              "给予优先：先帮助他人，不期待回报。",
              "保持联系：定期跟进，不只在需要时。",
            ],
            resources: [
              { title: "Networking", url: "https://hbr.org/2016/05/learn-to-love-networking" },
              { title: "Never Eat Alone", url: "https://www.keithferrazzi.com/nevereatalone" },
              { title: "Weak Ties", url: "https://www.forbes.com/sites/ryanholmes/2016/05/13/the-networking-mistake-youre-probably-making-how-to-fix-it/" },
            ],
          },
          {
            id: "soft-w18-3",
            title: "在线影响力",
            detail: "选择合适的在线平台，制定内容策略，通过知识分享和互动参与建立专业影响力。",
            keyPoints: [
              "平台选择：LinkedIn、Twitter/X、个人博客、GitHub。",
              "内容策略：分享知识、观点、经验。",
              "互动参与：评论、分享、参与讨论。",
              "管理声誉：谨慎发言，维护专业形象。",
            ],
            resources: [
              { title: "Digital Presence", url: "https://www.linkedin.com/pulse/how-build-your-digital-presence-professional-dorie-clark/" },
              { title: "Thought Leadership", url: "https://hbr.org/2021/01/what-thought-leadership-is-and-isnt" },
              { title: "Content Strategy", url: "https://buffer.com/library/content-strategy/" },
            ],
          },
        ],
      },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════
// 知识卡片
// ═══════════════════════════════════════════════════════════════
export const softSkillsKnowledgeCards: KnowledgeCard[] = [
  {
    id: "soft-kc-1",
    title: "积极倾听",
    summary: "积极倾听是有效沟通的基础。",
    points: [
      "专注：全神贯注，避免分心",
      "理解：复述确认，提问澄清",
      "回应：适当的肢体语言和反馈",
      "不打断：让对方完整表达",
    ],
    practice: "在下一次会议中，刻意练习积极倾听，复述对方观点并确认理解。",
  },
  {
    id: "soft-kc-2",
    title: "SBI 反馈模型",
    summary: "结构化反馈：情境 → 行为 → 影响。",
    points: [
      "Situation：描述具体情境",
      "Behavior：描述观察到的行为",
      "Impact：说明行为的影响",
      "及时、具体、对事不对人",
    ],
    practice: "用 SBI 模型给同事提供一次反馈。",
  },
  {
    id: "soft-kc-3",
    title: "艾森豪威尔矩阵",
    summary: "用紧急/重要四象限管理优先级。",
    points: [
      "重要且紧急：立即做",
      "重要不紧急：计划做（最应投入）",
      "紧急不重要：委托或快速处理",
      "不重要不紧急：删除或少做",
    ],
    practice: "将本周任务按四象限分类，聚焦重要不紧急的任务。",
  },
  {
    id: "soft-kc-4",
    title: "成长心态",
    summary: "相信能力可以通过努力发展。",
    points: [
      "拥抱挑战，视为成长机会",
      "从失败中学习，失败是反馈",
      "重视努力和策略，而非天赋",
      "受他人成功启发，而非威胁",
    ],
    practice: "当遇到困难时，将「我不会」改为「我还不会」。",
  },
  {
    id: "soft-kc-5",
    title: "BATNA 谈判原则",
    summary: "最佳替代方案是谈判的底牌。",
    points: [
      "BATNA：如果谈判失败的最佳替代",
      "BATNA 越强，谈判地位越高",
      "谈判前评估双方 BATNA",
      "不接受比 BATNA 差的条件",
    ],
    practice: "在下次谈判前，明确自己的 BATNA。",
  },
  {
    id: "soft-kc-6",
    title: "影响力六原则",
    summary: "Cialdini 的说服心理学原则。",
    points: [
      "互惠：先给予，再请求",
      "一致性：人们希望言行一致",
      "社会认同：人们跟随大众",
      "喜好：喜欢的人更有影响力",
    ],
    practice: "在需要说服他人时，思考可以应用哪个原则。",
  },
  {
    id: "soft-kc-7",
    title: "情绪智力",
    summary: "情商是职场成功的关键因素。",
    points: [
      "自我意识：识别自己的情绪",
      "自我管理：调节情绪，适应变化",
      "社会意识：同理心，理解他人",
      "关系管理：影响和协作能力",
    ],
    practice: "记录一周的情绪波动，分析触发因素。",
  },
  {
    id: "soft-kc-8",
    title: "职业网络建设",
    summary: "网络是职业发展的重要资源。",
    points: [
      "弱连接带来新信息和机会",
      "给予优先，不期待回报",
      "保持联系，不只在需要时",
      "真诚关系优于功利性社交",
    ],
    practice: "本周联系一位很久没联络的前同事或朋友。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const softSkillsExamQuestions: QuizQuestion[] = [
  {
    id: "soft-q1",
    question: "沟通模型中，导致信息失真的因素统称为？",
    options: ["反馈", "噪音", "编码", "解码"],
    answer: 1,
    rationale: "噪音是沟通过程中导致信息失真的因素，包括物理噪音、心理噪音和语义噪音。",
  },
  {
    id: "soft-q2",
    question: "积极倾听的核心要素不包括哪项？",
    options: ["专注", "打断纠正", "理解确认", "适当回应"],
    answer: 1,
    rationale: "积极倾听要求不打断对方，让其完整表达。打断纠正是倾听的障碍而非要素。",
  },
  {
    id: "soft-q3",
    question: "金字塔原理的核心主张是？",
    options: ["细节优先", "结论先行", "时间顺序", "因果关系"],
    answer: 1,
    rationale: "金字塔原理主张结论先行、以上统下，先呈现核心观点再展开支撑论据。",
  },
  {
    id: "soft-q4",
    question: "团队发展的 Tuckman 模型中，冲突最多的阶段是？",
    options: ["Forming", "Storming", "Norming", "Performing"],
    answer: 1,
    rationale: "Storming（风暴期）是冲突最多的阶段，团队成员开始表达不同意见，争夺影响力。",
  },
  {
    id: "soft-q5",
    question: "心理安全感是指团队成员敢于？",
    options: ["服从领导", "承担风险而不担心被惩罚", "保持沉默", "追求个人利益"],
    answer: 1,
    rationale: "心理安全感是指团队成员敢于提出问题、承认错误、提供不同意见而不担心被惩罚或羞辱。",
  },
  {
    id: "soft-q6",
    question: "SBI 反馈模型中的 B 代表什么？",
    options: ["Benefit", "Behavior", "Background", "Balance"],
    answer: 1,
    rationale: "SBI = Situation（情境）+ Behavior（行为）+ Impact（影响）。B 是描述观察到的具体行为。",
  },
  {
    id: "soft-q7",
    question: "Thomas-Kilmann 冲突模型中，追求双赢的策略是？",
    options: ["竞争", "回避", "合作", "妥协"],
    answer: 2,
    rationale: "合作（Collaborating）策略追求双方利益最大化，寻求双赢解决方案。",
  },
  {
    id: "soft-q8",
    question: "Hofstede 文化维度中，描述对权力不平等接受程度的是？",
    options: ["个人主义", "权力距离", "不确定性规避", "长期导向"],
    answer: 1,
    rationale: "权力距离（Power Distance）描述社会对权力不平等分布的接受程度。",
  },
  {
    id: "soft-q9",
    question: "艾森豪威尔矩阵中，应该优先投入时间的象限是？",
    options: ["重要且紧急", "重要不紧急", "紧急不重要", "不重要不紧急"],
    answer: 1,
    rationale: "重要不紧急的任务是应该优先投入的，因为它们创造最大价值且可以提前规划。",
  },
  {
    id: "soft-q10",
    question: "番茄工作法的标准工作时长是？",
    options: ["15 分钟", "25 分钟", "45 分钟", "60 分钟"],
    answer: 1,
    rationale: "番茄工作法标准是 25 分钟专注工作后休息 5 分钟。",
  },
  {
    id: "soft-q11",
    question: "GTD 方法的第一步是？",
    options: ["执行", "组织", "捕获", "回顾"],
    answer: 2,
    rationale: "GTD 流程：捕获 → 澄清 → 组织 → 回顾 → 执行。第一步是将所有事项从大脑中捕获出来。",
  },
  {
    id: "soft-q12",
    question: "Carol Dweck 提出的成长心态与什么心态相对？",
    options: ["开放心态", "固定心态", "乐观心态", "批判心态"],
    answer: 1,
    rationale: "成长心态（Growth Mindset）与固定心态（Fixed Mindset）相对，前者相信能力可以发展。",
  },
  {
    id: "soft-q13",
    question: "确认偏差是指人们倾向于？",
    options: ["寻找支持现有观点的信息", "过度依赖首次信息", "高估容易想到的事物", "事后觉得结果可预测"],
    answer: 0,
    rationale: "确认偏差是指人们倾向于寻找、解读、偏好支持自己现有观点的信息。",
  },
  {
    id: "soft-q14",
    question: "5 Why 分析法的目的是？",
    options: ["收集数据", "找到根本原因", "生成方案", "评估风险"],
    answer: 1,
    rationale: "5 Why 分析通过连续追问「为什么」来找到问题的根本原因，而非表面原因。",
  },
  {
    id: "soft-q15",
    question: "BATNA 在谈判中代表什么？",
    options: ["谈判目标", "最佳替代方案", "可能达成区间", "谈判底线"],
    answer: 1,
    rationale: "BATNA = Best Alternative To a Negotiated Agreement，即如果谈判失败的最佳替代方案。",
  },
  {
    id: "soft-q16",
    question: "Cialdini 的影响力原则不包括哪项？",
    options: ["互惠", "稀缺", "权力", "社会认同"],
    answer: 2,
    rationale: "Cialdini 六原则：互惠、一致性、社会认同、权威（不是权力）、喜好、稀缺。",
  },
  {
    id: "soft-q17",
    question: "情境领导理论主张根据什么调整领导风格？",
    options: ["任务复杂度", "下属成熟度", "组织规模", "行业特点"],
    answer: 1,
    rationale: "情境领导理论主张根据下属的能力和意愿（成熟度）调整领导风格。",
  },
  {
    id: "soft-q18",
    question: "Daniel Pink 提出的内在激励三要素是？",
    options: ["金钱、地位、权力", "自主、精通、目的", "安全、归属、尊重", "挑战、反馈、认可"],
    answer: 1,
    rationale: "Daniel Pink 在《Drive》中提出内在激励三要素：自主（Autonomy）、精通（Mastery）、目的（Purpose）。",
  },
  {
    id: "soft-q19",
    question: "情绪智力的四个维度不包括？",
    options: ["自我意识", "社会意识", "智商", "关系管理"],
    answer: 2,
    rationale: "情绪智力四维度：自我意识、自我管理、社会意识、关系管理。智商是认知智力，不是情绪智力。",
  },
  {
    id: "soft-q20",
    question: "职业网络理论中，什么类型的连接更可能带来新机会？",
    options: ["强连接", "弱连接", "直接连接", "单向连接"],
    answer: 1,
    rationale: "Granovetter 的弱连接理论指出，弱连接（不常联系的人）更可能带来新信息和新机会。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const softSkillsRoadmap: RoadmapDefinition = {
  id: "soft-skills",
  label: "软技能",
  title: "软技能",
  durationLabel: "18 个主题",
  description:
    "从沟通基础出发，掌握书面表达和演讲技巧，学习团队协作和冲突管理，提升时间管理和压力管理能力，培养批判性思维和问题解决能力，发展影响力和领导力，规划职业发展并建立个人品牌。",
  heroBadge: "沟通 · 协作 · 领导力 · 情商 · 职业发展",
  stages: softSkillsStages,
  knowledgeCards: softSkillsKnowledgeCards,
  examQuestions: softSkillsExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始软技能学习之旅！先从有效沟通开始。"
    if (percent < 25) return "继续提升团队协作能力，学会处理冲突。"
    if (percent < 50) return "个人效能是基础，掌握时间管理和压力管理。"
    if (percent < 75) return "问题解决和领导力是进阶技能，深入学习。"
    if (percent < 100) return "即将完成！职业发展和个人品牌是长期投资。"
    return "恭喜完成！持续练习是软技能提升的关键。"
  },
  resourceGuide: {
    environment:
      "软技能需要在实际工作和生活中练习。推荐参加 Toastmasters 练习演讲，利用工作中的每次沟通机会练习。",
    fallbackKeyPoints: [
      "积极倾听：专注、理解、回应，不打断",
      "SBI 反馈：情境 → 行为 → 影响",
      "艾森豪威尔矩阵：优先做重要不紧急的事",
      "BATNA：谈判前明确最佳替代方案",
      "成长心态：相信能力可以通过努力发展",
    ],
    handsOnSteps: [
      "用 SBI 模型给同事提供一次反馈",
      "将本周任务按四象限分类，聚焦重要不紧急",
      "在会议中练习积极倾听，复述确认理解",
      "为下一次谈判准备 BATNA 和目标",
      "本周联系一位很久没联络的职业朋友",
    ],
    selfChecks: [
      "能否用金字塔原理组织一份报告？",
      "能否识别和管理团队冲突？",
      "能否应用 GTD 管理日常任务？",
      "能否在没有权威时影响他人？",
      "能否清晰描述自己的职业发展目标？",
    ],
    extensions: [
      "深入学习谈判（哈佛谈判项目）",
      "参加 Toastmasters 提升演讲能力",
      "学习教练技术（ICF 认证）",
      "研究组织行为学和心理学",
    ],
    lessonQuizAdvice: "软技能的提升需要持续练习，每学完一周内容，找机会在实际工作中应用。",
  },
}
