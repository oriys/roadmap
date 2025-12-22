import type { QuizQuestion } from "../types";

export const week5: Record<string, QuizQuestion[]> = {
  // Lesson 1: Tutorial（教程）写作 (12题，答案随机分布)
  "tw-w5-1": [
    {
      id: "tw-w5-1-q1",
      question: "Diátaxis 对 Tutorial 的定义中，核心关键词是什么？",
      options: [
        "task-oriented——以任务为导向完成具体工作",
        "information-oriented——以信息为导向提供参考",
        "learning-oriented——以学习为导向，在导师指导下获得技能",
        "understanding-oriented——以理解为导向解释原理",
      ],
      answer: 2,
      rationale:
        "Diátaxis 明确定义：'A tutorial is always learning-oriented'——教程始终以学习为导向，目标是获得技能而非完成任务。",
    },
    {
      id: "tw-w5-1-q2",
      question: "根据 Diátaxis，教程写作者常犯的最大错误是什么？",
      options: [
        "步骤太少，内容不够详细",
        "没有提供足够的替代方案",
        "解释太多——教程的目标是让学习者'做'，而非'理解'",
        "使用了太多代码示例",
      ],
      answer: 2,
      rationale:
        "Diátaxis 强调：教程写作者常犯的错误是解释太多。教程的目标是让学习者'做'，长解释应链接到 Explanation 文档。",
    },
    {
      id: "tw-w5-1-q3",
      question: "Diátaxis 关于教程可靠性的要求是什么？",
      options: [
        "教程必须每次都能成功运行——'A tutorial must inspire confidence'",
        "允许偶尔失败，用户可以自行调试",
        "只需要在作者的环境中能运行",
        "可靠性由用户自行保证",
      ],
      answer: 0,
      rationale:
        "Diátaxis：'A tutorial must inspire confidence.'——教程必须每次都能成功运行，无法像真实教师那样在现场纠正错误。",
    },
    {
      id: "tw-w5-1-q4",
      question: "教程中关于'展示结果'的原则是什么？",
      options: [
        "只在最后展示最终结果即可",
        "不需要展示中间结果，避免分散注意力",
        "只展示错误情况的结果",
        "'Every step the learner follows should produce a comprehensible result'——每一步都应产生可理解的结果",
      ],
      answer: 3,
      rationale:
        "Diátaxis：'Every step the learner follows should produce a comprehensible result, however small.'——每一步都应产生可理解的结果，建立因果关系的理解。",
    },
    {
      id: "tw-w5-1-q5",
      question: "教程中的叙事线索（如'Notice that...'、'Remember that...'）的作用是什么？",
      options: [
        "增加文档的专业感",
        "保持学习者在正轨上的确认，引导观察重要细节",
        "替代代码注释的功能",
        "满足文档字数要求",
      ],
      answer: 1,
      rationale:
        "通过示例输出、警告标志和解释性提示（如'Notice that...'、'Remember that...'），保持学习者在正轨上的确认。",
    },
    {
      id: "tw-w5-1-q6",
      question: "Diátaxis 明确列出教程应该避免的内容不包括以下哪项？",
      options: [
        "抽象化和泛化概念",
        "过度解释",
        "提供可见的预期输出",
        "提供选项和替代方案",
      ],
      answer: 2,
      rationale:
        "Diátaxis 明确要避免：抽象化和泛化概念、过度解释、提供选项和替代方案、过多信息。提供可见的预期输出恰恰是应该做的。",
    },
    {
      id: "tw-w5-1-q7",
      question: "教程应该使用什么语言风格？",
      options: [
        "第三人称客观描述（'用户应该...'）",
        "被动语态（'应该被点击...'）",
        "第一人称复数（'我们 / We will...'）建立师生关系",
        "纯命令式（'点击这里'）无任何人称",
      ],
      answer: 2,
      rationale:
        "使用第一人称复数'我们'（We will...）建立师生关系，让学习者感到有导师陪伴。",
    },
    {
      id: "tw-w5-1-q8",
      question: "关于教程中'忽略选项'的原则，以下说法正确的是？",
      options: [
        "应该列出所有可能的选项让用户选择最适合的",
        "只在高级教程中讨论替代方案",
        "教程中不应讨论替代方案或高级选项——保持单一路径",
        "替代方案应该放在脚注中",
      ],
      answer: 2,
      rationale:
        "Diátaxis：教程中不应讨论替代方案或高级选项——这会分散注意力。保持单一路径，让学习者专注于当前任务。",
    },
    {
      id: "tw-w5-1-q9",
      question: "教程中'从具体到抽象'原则意味着什么？",
      options: [
        "先解释理论原理，再给出具体操作",
        "只讲具体操作，永远不提抽象原理",
        "先让学习者做具体的事，再引导他们理解抽象原理",
        "具体和抽象应该交替进行",
      ],
      answer: 2,
      rationale:
        "先让学习者做具体的事，再引导他们理解抽象原理。过早讲原理会让初学者迷失。",
    },
    {
      id: "tw-w5-1-q10",
      question: "教程与操作指南（How-to Guide）的根本区别是什么？",
      options: [
        "教程更长，操作指南更短",
        "教程面向初学者，操作指南面向有基础的用户完成特定任务",
        "教程用中文，操作指南用英文",
        "教程有代码，操作指南没有代码",
      ],
      answer: 1,
      rationale:
        "教程面向初学者，提供完整的学习路径；操作指南面向已有基础的用户，假设用户知道想要达成什么目标。",
    },
    {
      id: "tw-w5-1-q11",
      question: "根据 Diátaxis，教程中教师承担的责任包括以下哪些？",
      options: [
        "只需要提供操作步骤，其他由学习者自行负责",
        "确保内容有意义、可成功完成、逻辑清晰、内容完整",
        "让学习者自主决定学习路径",
        "提供尽可能多的背景知识",
      ],
      answer: 1,
      rationale:
        "教师承担几乎所有责任：确保内容有意义（学生能获得成就感）、可成功完成、逻辑清晰、内容完整（涵盖必要的行动、概念和工具）。",
    },
    {
      id: "tw-w5-1-q12",
      question: "测试教程有效性的最佳方法是什么？",
      options: [
        "让作者自己反复阅读检查",
        "使用自动化工具验证代码语法",
        "让一个完全不了解该功能的人测试，观察他们在哪里卡住",
        "检查文档的字数是否达标",
      ],
      answer: 2,
      rationale:
        "找一个完全不了解该功能的人测试你的教程：观察他们在哪里卡住、困惑或跳过。记录问题点并修订。",
    },
  ],
  // Lesson 2: How-to（操作指南）写作 (12题，答案随机分布)
  "tw-w5-2": [
    {
      id: "tw-w5-2-q1",
      question: "Diátaxis 对 How-to guides 的核心定义是什么？",
      options: [
        "学习导向的教程体验",
        "信息导向的参考文档",
        "目标导向的方向指引，引导读者解决问题或达成结果",
        "理解导向的概念解释",
      ],
      answer: 2,
      rationale:
        "Diátaxis：'How-to guides are directions that guide the reader through a problem or towards a result. How-to guides are goal-oriented.'",
    },
    {
      id: "tw-w5-2-q2",
      question: "Diátaxis 使用什么类比来说明理想的 How-to guide？",
      options: [
        "食谱——回答特定问题、排除教学和讨论、专注于执行步骤",
        "教科书——系统性地讲解原理",
        "词典——按字母顺序列出所有术语",
        "地图——展示完整的系统结构",
      ],
      answer: 0,
      rationale:
        "Diátaxis 将食谱作为 How-to 的理想模型——它们回答特定问题、排除教学/讨论、专注于执行。",
    },
    {
      id: "tw-w5-2-q3",
      question: "How-to guide 对读者的假设是什么？",
      options: [
        "读者是完全的新手，需要从基础概念学起",
        "读者是专家，不需要任何解释",
        "读者已具备基本能力（basic competence），知道自己想要达成什么目标",
        "读者只想了解原理，不关心实操",
      ],
      answer: 2,
      rationale:
        "Diátaxis：How-to 假设读者已具备基本能力，知道自己想要达成什么目标。不需要从零教起。",
    },
    {
      id: "tw-w5-2-q4",
      question: "Google 步骤写作指南中'动作优先原则'的含义是什么？",
      options: [
        "先解释为什么，再说怎么做",
        "先给出完整背景，再开始步骤",
        "先陈述动作，再陈述结果；先给位置/上下文，再给动作",
        "先列出所有可能的选项，再让用户选择",
      ],
      answer: 2,
      rationale:
        "Google：'State the action first and the result second'——先陈述动作，再陈述结果。先给位置/上下文，再给动作。",
    },
    {
      id: "tw-w5-2-q5",
      question: "Microsoft 建议一个步骤列表最多应该包含多少步？",
      options: [
        "不超过 3 步",
        "不超过 5 步",
        "不超过 7 步，最好更少，尽量在同一屏幕显示",
        "不超过 10 步",
      ],
      answer: 2,
      rationale:
        "Microsoft：'限制在 7 步以内，最好更少'——尽量在同一屏幕显示所有步骤，减少用户认知负担。",
    },
    {
      id: "tw-w5-2-q6",
      question: "对于只有一步的简单操作，应该如何格式化？",
      options: [
        "使用编号 1",
        "用项目符号替代编号，保持格式一致",
        "不使用任何列表格式",
        "用粗体突出显示",
      ],
      answer: 1,
      rationale:
        "Microsoft：单步骤程序用项目符号替代编号，保持与复杂步骤相同的格式风格。",
    },
    {
      id: "tw-w5-2-q7",
      question: "使用右角括号简化路径（如 File > New > Document）时需要注意什么？",
      options: [
        "必须对所有界面操作都使用这种格式",
        "只能用于文件操作",
        "屏幕阅读器可能跳过括号，影响无障碍性，使用前应咨询无障碍专家",
        "这是已废弃的格式，不应使用",
      ],
      answer: 2,
      rationale:
        "Microsoft 警告：屏幕阅读器可能跳过括号，导致用户混淆。使用前应咨询无障碍专家。",
    },
    {
      id: "tw-w5-2-q8",
      question: "Diátaxis 强调 How-to 应聚焦什么？",
      options: [
        "聚焦人的问题（human problem），而非工具机制",
        "聚焦工具的所有功能和选项",
        "聚焦系统的内部实现原理",
        "聚焦历史演进和设计决策",
      ],
      answer: 0,
      rationale:
        "Diátaxis 强调 How-to 应聚焦人的问题，而非工具机制。'turn the tap clockwise' 是无用信息，因为它只描述机械动作。",
    },
    {
      id: "tw-w5-2-q9",
      question: "步骤中的动词应该使用什么形式？",
      options: [
        "被动语态（如'应该被点击'）",
        "将来时态（如'用户将会看到'）",
        "祈使动词形式，直接告诉用户做什么（如 Select、Open、Enter）",
        "过去时态（如'用户已经完成'）",
      ],
      answer: 2,
      rationale:
        "Google/Microsoft：使用祈使动词形式，直接告诉用户做什么，如 Select、Open、Enter。",
    },
    {
      id: "tw-w5-2-q10",
      question: "关于 How-to 中的信息完整性，正确的原则是？",
      options: [
        "必须覆盖所有可能的场景和边缘情况",
        "省略不必要的信息，实用性优先于完整性",
        "完整性永远优先于实用性",
        "尽可能多地提供背景知识",
      ],
      answer: 1,
      rationale:
        "Google：'Omit unnecessary information; prioritize practical usability over completeness'——省略不必要的信息，实用性优先于完整性。",
    },
    {
      id: "tw-w5-2-q11",
      question: "How-to 标题的最佳格式是什么？",
      options: [
        "使用名词短语，如'SSL 证书配置'",
        "使用'如何做 X'格式，直接回答用户的问题",
        "使用问句，如'什么是 SSL？'",
        "使用版本号开头，如'v2.0 功能说明'",
      ],
      answer: 1,
      rationale:
        "标题应直接回答'如何做 X'：'How to integrate APM' 优于模糊的'Monitoring guide'。用户通过标题判断是否是他们要找的。",
    },
    {
      id: "tw-w5-2-q12",
      question: "可选步骤在 How-to 中应该如何标记？",
      options: [
        "用斜体显示",
        "放在脚注中",
        "在步骤开头使用 'Optional:' 标记（而非括号形式）",
        "用灰色字体显示",
      ],
      answer: 2,
      rationale:
        "Google：可选步骤用 'Optional:' 标记在步骤开头，而非使用 '(Optional)' 括号形式。",
    },
  ],
  // Lesson 3: Reference（参考）写作 (12题，答案随机分布)
  "tw-w5-3": [
    {
      id: "tw-w5-3-q1",
      question: "Diátaxis 对 Reference 文档的核心定义是什么？",
      options: [
        "学习导向的教程体验",
        "目标导向的操作指南",
        "以信息为导向的技术性描述，提供用户工作中所需的理论性知识",
        "以理解为导向的概念解释",
      ],
      answer: 2,
      rationale:
        "Diátaxis：参考文档是'技术性描述'，以信息为导向。它提供用户在工作中所需的理论性知识，确保用户有'真理和确定性'的坚实基础。",
    },
    {
      id: "tw-w5-3-q2",
      question: "Diátaxis 用什么类比来说明 Reference 文档的特点？",
      options: [
        "教科书——系统讲解原理",
        "食谱——步骤式指导操作",
        "食品包装上的营养信息——用户期待标准化、可信赖的事实陈述",
        "地图——展示完整的路径",
      ],
      answer: 2,
      rationale:
        "Diátaxis 将 Reference 比作食品包装上的营养信息——用户期待标准化、可信赖的事实陈述，而非解释或推销。",
    },
    {
      id: "tw-w5-3-q3",
      question: "Reference 文档的用户通常处于什么状态？",
      options: [
        "刚开始学习，需要入门指导",
        "遇到问题，需要解决方案",
        "想了解背景，需要深度解释",
        "正在工作中，需要快速查阅具体信息（如参数、配置项）",
      ],
      answer: 3,
      rationale:
        "Reference 服务于'at work'状态的用户，他们在工作时快速参考，而非从头到尾阅读。结构比叙述更重要。",
    },
    {
      id: "tw-w5-3-q4",
      question: "Diátaxis 关于 Reference 文档的'仅描述不指导'原则意味着什么？",
      options: [
        "采用中立的表述，避免混入教学、说明或个人观点，只陈述事实",
        "只描述成功路径，不描述错误情况",
        "只描述主要功能，忽略边缘情况",
        "只描述 API，不描述 CLI",
      ],
      answer: 0,
      rationale:
        "Diátaxis：采用中立的表述方式，避免混入教学、说明或个人观点。应该'纯粹描述'而非解释。",
    },
    {
      id: "tw-w5-3-q5",
      question: "Google 对 Reference 文档中方法描述的动词形式要求是什么？",
      options: [
        "使用祈使语气（Create、List、Get）",
        "使用过去时态（Created、Listed、Got）",
        "使用第三人称单数现在时（Creates、Lists、Gets）",
        "使用将来时态（Will create、Will list）",
      ],
      answer: 2,
      rationale:
        "Google：描述方法时使用第三人称单数现在时（Creates、Lists、Gets），而非祈使语气——这更准确地反映方法的功能。",
    },
    {
      id: "tw-w5-3-q6",
      question: "Reference 文档为什么要'镜像产品结构'？",
      options: [
        "让文档看起来更专业",
        "使用户能同步理解代码与文档，在文档中找到对应代码位置",
        "减少文档维护工作量",
        "便于自动化生成文档",
      ],
      answer: 1,
      rationale:
        "Diátaxis：文档的逻辑组织应'反映产品的结构'，使用户能同步理解代码与文档。用户阅读文档时应能在代码中找到对应位置。",
    },
    {
      id: "tw-w5-3-q7",
      question: "Diátaxis 关于 Reference 文档一致性的要求是什么？",
      options: [
        "一致性不重要，内容准确即可",
        "只有表格需要一致的格式",
        "'参考材料在一致时最有用'——同类内容必须使用完全相同的格式",
        "一致性只适用于 API 文档",
      ],
      answer: 2,
      rationale:
        "Diátaxis：'参考材料在一致时最有用'——同类内容必须使用完全相同的格式，让用户在期望的地方找到所需材料。",
    },
    {
      id: "tw-w5-3-q8",
      question: "Microsoft 对表格中空白单元格的处理建议是什么？",
      options: [
        "留空即可，用户能理解",
        "避免空白单元格——用'Not applicable'或'None'代替",
        "用破折号（-）填充",
        "合并相邻的空白单元格",
      ],
      answer: 1,
      rationale:
        "Microsoft：避免空白单元格——用'Not applicable'或'None'代替，这样更清晰地传达信息。",
    },
    {
      id: "tw-w5-3-q9",
      question: "表格条目为什么需要保持'平行结构'？",
      options: [
        "让表格看起来更美观",
        "减少表格的行数",
        "让用户能快速扫描和比较，降低认知负担",
        "便于自动排序",
      ],
      answer: 2,
      rationale:
        "Microsoft：表格条目必须保持平行（全是名词或动词开头的短语），这样用户能快速扫描和比较。",
    },
    {
      id: "tw-w5-3-q10",
      question: "Reference 文档中的示例有什么作用？",
      options: [
        "替代所有文字说明",
        "在保持简洁的同时有效说明用法，是'有价值的说明方式'",
        "展示所有可能的用法组合",
        "主要用于测试文档的准确性",
      ],
      answer: 1,
      rationale:
        "Diátaxis：示例是'有价值的说明方式'，既能帮助理解又不偏离描述本职。应简洁且可直接复制使用。",
    },
    {
      id: "tw-w5-3-q11",
      question: "参数文档应该包含哪些信息？",
      options: [
        "只需要参数名和简短描述",
        "参数名、类型、是否必需、默认值、约束条件、描述",
        "只需要一个使用示例",
        "参数名和完整的实现原理",
      ],
      answer: 1,
      rationale:
        "完整的参数文档需要：参数名、类型、是否必需、默认值、约束条件、描述——让用户准确理解如何使用。",
    },
    {
      id: "tw-w5-3-q12",
      question: "Reference 文档应该避免什么？",
      options: [
        "避免使用表格",
        "避免提供示例",
        "避免混入教学、说明、观点、推测或行销宣传",
        "避免描述边缘情况",
      ],
      answer: 2,
      rationale:
        "Reference 应避免：观点、推测、行销宣传、教学指导。应保持严谨、客观、精确的事实描述。",
    },
  ],
  // Lesson 4: Explanation（概念解释）写作 (7题)
  "tw-w5-4": [
    {
      id: "tw-w5-4-q1",
      question: "Explanation 文档的核心目的是什么？",
      options: [
        "帮助读者理解概念、原理、设计决策和背景知识",
        "教会读者如何操作",
        "提供准确的参数说明",
        "解决具体的技术问题",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Explanation 是理解导向的，帮助读者建立对主题的深层理解和心智模型。",
    },
    {
      id: "tw-w5-4-q2",
      question: "Explanation 与其他三类文档的独特之处是什么？",
      options: [
        "可以表达观点、讨论历史背景、比较替代方案",
        "必须包含可执行的步骤",
        "必须保持完全客观",
        "只能讨论当前版本",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Explanation 可以包含观点、历史追溯、替代方案比较等其他类型不适合的内容。",
    },
    {
      id: "tw-w5-4-q3",
      question: "Explanation 文档通常包含哪些内容？",
      options: [
        "背景、上下文、类比、设计原因、历史演进、权衡考量",
        "只有概念定义",
        "操作步骤和命令",
        "参数列表和返回值",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Explanation 包含背景、上下文、类比、理由、历史等帮助理解的内容。",
    },
    {
      id: "tw-w5-4-q4",
      question: "Explanation 文档的典型标题格式是什么？",
      options: [
        "名词短语或'理解...'形式，如'认证架构'或'理解 OAuth'",
        "动词短语，如'如何配置...'",
        "问句，如'什么是 OAuth？'",
        "版本号开头",
      ],
      answer: 0,
      rationale:
        "Explanation 标题通常使用名词短语或'Understanding...'形式，表明这是概念性内容。",
    },
    {
      id: "tw-w5-4-q5",
      question: "为什么说 Explanation 文档虽然'不紧急'但'同样重要'？",
      options: [
        "它帮助从业者建立完整的知识体系，避免知识碎片化",
        "因为它最容易写",
        "因为它不需要更新",
        "因为它字数最少",
      ],
      answer: 0,
      rationale:
        "Diátaxis: 没有 Explanation，从业者的知识会'松散、碎片化和脆弱'，难以形成完整体系。",
    },
    {
      id: "tw-w5-4-q6",
      question: "Explanation 文档中可以使用什么样的语言？",
      options: [
        "可以使用'因为历史上...'、'X 比 Y 更好因为...'等评价性语言",
        "只能使用纯客观描述",
        "必须使用被动语态",
        "必须使用祈使句",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Explanation 可以包含'The reason for x is because historically, y...'等评价和历史追溯。",
    },
    {
      id: "tw-w5-4-q7",
      question: "Explanation 文档应该避免什么？",
      options: [
        "避免混入操作说明或技术描述，严格界定范围",
        "避免使用类比",
        "避免讨论替代方案",
        "避免表达任何观点",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Explanation 应讨论主题而非指导操作，避免混入 How-to 或 Reference 内容。",
    },
  ],
};
