import type { QuizQuestion } from "../types";

export const week5: Record<string, QuizQuestion[]> = {
  // Lesson 1: Tutorial（教程）写作 (8题)
  "tw-w5-1": [
    {
      id: "tw-w5-1-q1",
      question: "Diátaxis 对 Tutorial 的核心定义是什么？",
      options: [
        "在导师指导下的学习体验，目标是帮助学习者获得技能而非完成任务",
        "解决具体问题的步骤指南",
        "API 参数的详细说明",
        "产品功能的完整列表",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Tutorial 是'在导师指导下的经验'，以学习为导向，通过做事来获得技能。",
    },
    {
      id: "tw-w5-1-q2",
      question: "Diátaxis 提出的教学第一原则是什么？",
      options: [
        "不要试图教学（Don't try to teach），而是提供让学习者自己发现的体验",
        "尽可能多地解释概念",
        "让学习者自己探索",
        "使用最先进的教学技术",
      ],
      answer: 0,
      rationale:
        "Diátaxis: 'The first rule of teaching is simply: don't try to teach.' 提供体验让学习自然发生。",
    },
    {
      id: "tw-w5-1-q3",
      question: "Tutorial 写作中为什么要'尽早且频繁地展示可见结果'？",
      options: [
        "让学习者看到行动与结果的联系，保持学习动力和信心",
        "为了增加截图数量",
        "为了让文档更长",
        "为了减少需要解释的内容",
      ],
      answer: 0,
      rationale:
        "Diátaxis: 'Deliver visible results early and often' 让用户看到行动与结果的连接，维持学习动力。",
    },
    {
      id: "tw-w5-1-q4",
      question: "Tutorial 为什么需要'完美的可靠性'（Perfect Reliability）？",
      options: [
        "学习者按照指示操作必须得到承诺的结果，否则会丧失信心",
        "为了减少支持工单",
        "为了满足合规要求",
        "为了节省更新成本",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Tutorial 必须确保学习者成功，失败会破坏学习体验和信心。",
    },
    {
      id: "tw-w5-1-q5",
      question: "Tutorial 中的叙事线索（Narrative Cues）如'你会注意到...'的作用是什么？",
      options: [
        "确认学习者在正确的轨道上，引导他们观察重要细节",
        "增加文档的篇幅",
        "展示作者的写作技巧",
        "替代代码示例",
      ],
      answer: 0,
      rationale:
        "Diátaxis: 叙事线索确认学习者在正确轨道上，并引导他们主动观察和反思。",
    },
    {
      id: "tw-w5-1-q6",
      question: "Tutorial 应该使用什么人称？",
      options: [
        "第一人称复数（我们 / We will...），营造师生共同学习的氛围",
        "第三人称（用户应该...）",
        "第二人称祈使句（做这个...）",
        "被动语态",
      ],
      answer: 0,
      rationale:
        "Diátaxis: 使用第一人称复数'我们'，创造导师与学习者共同学习的氛围。",
    },
    {
      id: "tw-w5-1-q7",
      question: "为什么 Tutorial 要'消除可选的替代方案'？",
      options: [
        "保持清晰聚焦，避免学习者在选择中迷失",
        "减少文档维护工作",
        "因为替代方案都不好用",
        "为了减少翻译成本",
      ],
      answer: 0,
      rationale:
        "Diátaxis: 消除可选项保持路径清晰，让学习者专注于学习本身而非做选择。",
    },
    {
      id: "tw-w5-1-q8",
      question: "Tutorial 与 How-to Guide 的本质区别是什么？",
      options: [
        "Tutorial 面向学习，How-to 面向完成特定任务",
        "Tutorial 更短，How-to 更长",
        "Tutorial 用于新手，How-to 用于专家",
        "两者没有本质区别",
      ],
      answer: 0,
      rationale:
        "Tutorial 的目的是学习技能，How-to 的目的是解决具体问题。用户状态和目标完全不同。",
    },
  ],
  // Lesson 2: How-to（操作指南）写作 (8题)
  "tw-w5-2": [
    {
      id: "tw-w5-2-q1",
      question: "Microsoft 步骤写作指南建议，复杂步骤应该用什么格式？",
      options: [
        "编号列表，每个步骤一个编号，保持一致性和可扫描性",
        "无序列表",
        "纯文本段落",
        "表格形式",
      ],
      answer: 0,
      rationale:
        "Microsoft Style: 复杂步骤使用编号列表，保持一致性和可扫描性。",
    },
    {
      id: "tw-w5-2-q2",
      question: "根据 Microsoft 指南，一个步骤列表最多应该包含多少步？",
      options: [
        "最多 7 步，最好更少，尽量让所有步骤在同一屏幕显示",
        "没有限制",
        "最多 20 步",
        "必须正好 5 步",
      ],
      answer: 0,
      rationale:
        "Microsoft Style: 限制在 7 步以内，最好更少，尽量让所有步骤在同一屏幕显示。",
    },
    {
      id: "tw-w5-2-q3",
      question: "步骤说明中，位置信息应该放在什么位置？",
      options: [
        "在步骤开头提供位置上下文，如'在设计选项卡上，选择...'",
        "放在步骤末尾",
        "单独写一个步骤",
        "不需要位置信息",
      ],
      answer: 0,
      rationale:
        "Microsoft Style: 在步骤开头提供位置上下文，帮助用户定位到正确的界面位置。",
    },
    {
      id: "tw-w5-2-q4",
      question: "对于只有一步的简单操作，应该如何格式化？",
      options: [
        "使用与复杂步骤相同的格式，但用项目符号替代数字",
        "不使用任何列表格式",
        "使用编号 1",
        "用粗体显示",
      ],
      answer: 0,
      rationale:
        "Microsoft Style: 单步操作使用与复杂步骤相同的格式，用项目符号替代数字。",
    },
    {
      id: "tw-w5-2-q5",
      question: "使用尖括号表示简化路径（如 菜单 > 设置 > 高级）时需要注意什么？",
      options: [
        "屏幕阅读器可能跳过括号，影响无障碍性，需咨询无障碍专家",
        "这是最佳实践，应该广泛使用",
        "只能用于菜单导航",
        "必须使用全角符号",
      ],
      answer: 0,
      rationale:
        "Microsoft Style: 屏幕阅读器可能跳过括号，需要考虑无障碍性影响。",
    },
    {
      id: "tw-w5-2-q6",
      question: "步骤中的动词应该使用什么形式？",
      options: [
        "祈使句形式，直接告诉用户做什么（如'选择'、'点击'、'输入'）",
        "被动语态",
        "将来时",
        "过去时",
      ],
      answer: 0,
      rationale:
        "Microsoft Style: 使用祈使动词形式，直接告诉用户做什么，如 Open、Select、Enter。",
    },
    {
      id: "tw-w5-2-q7",
      question: "How-to 指南的标题应该如何命名？",
      options: [
        "使用动词短语描述任务目标，如'如何配置 SSL 证书'",
        "使用名词短语，如'SSL 证书'",
        "使用问句，如'什么是 SSL 证书？'",
        "使用版本号",
      ],
      answer: 0,
      rationale:
        "How-to 标题应明确说明要完成的任务，使用动词短语让用户知道这是一个操作指南。",
    },
    {
      id: "tw-w5-2-q8",
      question: "步骤中应该包含确认按钮（如确定、应用）吗？",
      options: [
        "大多数情况下应该包含，确保用户完成完整的操作流程",
        "永远不包含",
        "只在最后一步包含",
        "只有高级用户才需要",
      ],
      answer: 0,
      rationale:
        "Microsoft Style: 大多数情况下应包含确认按钮（OK、Apply），确保用户完成完整操作。",
    },
  ],
  // Lesson 3: Reference（参考）写作 (7题)
  "tw-w5-3": [
    {
      id: "tw-w5-3-q1",
      question: "Reference 文档的核心特征是什么？",
      options: [
        "信息导向，提供准确、完整、客观的技术描述",
        "教学导向，帮助用户学习",
        "任务导向，帮助用户完成工作",
        "理解导向，解释原理",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Reference 是信息导向的，提供准确、完整的技术事实，如地图对应地理位置。",
    },
    {
      id: "tw-w5-3-q2",
      question: "Reference 文档的用户通常处于什么状态？",
      options: [
        "正在工作中，需要快速查阅具体信息（如参数、配置项）",
        "刚开始学习，需要入门指导",
        "遇到问题，需要解决方案",
        "想了解背景，需要深度解释",
      ],
      answer: 0,
      rationale:
        "Reference 服务于'at work'状态的用户，他们需要快速查阅准确信息来完成当前任务。",
    },
    {
      id: "tw-w5-3-q3",
      question: "Reference 文档为什么要采用一致的格式模式？",
      options: [
        "一致的格式让用户能快速定位所需信息，降低认知负荷",
        "为了满足公司的文档规范",
        "为了减少维护工作",
        "为了自动化生成",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Reference 在保持一致时最有用，统一的格式让用户能快速找到需要的信息。",
    },
    {
      id: "tw-w5-3-q4",
      question: "Reference 文档中的参数说明应该包含哪些信息？",
      options: [
        "参数名、类型、是否必需、默认值、取值范围、说明、示例",
        "只需要参数名和类型",
        "只需要一个使用示例",
        "详细的设计原理",
      ],
      answer: 0,
      rationale:
        "完整的参数说明帮助用户准确使用 API，需要包含类型、约束、默认值等关键信息。",
    },
    {
      id: "tw-w5-3-q5",
      question: "Reference 文档的结构应该如何组织？",
      options: [
        "镜像产品的结构，让用户能将代码理解直接映射到文档",
        "按字母顺序排列",
        "按使用频率排列",
        "按添加时间排列",
      ],
      answer: 0,
      rationale:
        "Diátaxis: 文档结构应镜像产品结构，帮助用户同步理解代码与文档的逻辑关系。",
    },
    {
      id: "tw-w5-3-q6",
      question: "Reference 文档中应该避免什么？",
      options: [
        "避免混入说明性步骤或个人观点，保持纯粹的事实描述",
        "避免使用代码示例",
        "避免使用表格",
        "避免详细说明参数类型",
      ],
      answer: 0,
      rationale:
        "Diátaxis: Reference 应'仅描述，勿指导'，保持客观中立，不混入说明或观点。",
    },
    {
      id: "tw-w5-3-q7",
      question: "Reference 文档中的示例有什么作用？",
      options: [
        "在避免过度解释的前提下，简洁有效地说明用法和上下文",
        "替代所有文字说明",
        "展示所有可能的用法",
        "让文档看起来更专业",
      ],
      answer: 0,
      rationale:
        "Diátaxis: 示例能在保持简洁的同时有效说明用法，补充纯文字描述的不足。",
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
