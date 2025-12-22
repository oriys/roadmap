import type { QuizQuestion } from "../types";

export const week6: Record<string, QuizQuestion[]> = {
  // Lesson 1: 风格指南与术语表 (12题，答案随机分布)
  "tw-w6-1": [
    {
      id: "tw-w6-1-q1",
      question: "Google Style Guide 对规则灵活性的核心观点是什么？",
      options: [
        "规则必须严格遵循，不允许例外",
        "规则只是建议，可以随意忽略",
        "'Break any of these rules sooner than say anything outright barbarous'——清晰性优先于规则",
        "规则应该每年重新制定",
      ],
      answer: 2,
      rationale:
        "Google：'Break any of these rules sooner than say anything outright barbarous'——清晰性和一致性优先于严格遵循规则。",
    },
    {
      id: "tw-w6-1-q2",
      question: "Google 建议的风格参考优先级是什么？",
      options: [
        "Google Style Guide → 项目指南 → 第三方来源",
        "项目特定指南 → Google Style Guide → 第三方来源（Merriam-Webster、Chicago、Microsoft）",
        "第三方来源 → 项目指南 → Google Style Guide",
        "只需要参考 Google Style Guide",
      ],
      answer: 1,
      rationale:
        "Google 建议的优先级：1) 项目特定指南 → 2) Google Style Guide → 3) 第三方来源（Merriam-Webster 拼写、Chicago Manual 通用写作）。",
    },
    {
      id: "tw-w6-1-q3",
      question: "Microsoft Style Guide 的核心哲学是什么？",
      options: [
        "'Make every word matter'——每个词都应该有意义",
        "'Write as much as possible'——尽可能多写",
        "'Technical accuracy above all'——技术准确性高于一切",
        "'Follow the template'——严格遵循模板",
      ],
      answer: 0,
      rationale:
        "Microsoft：'Make every word matter'——每个词都应该有意义。风格应该温暖放松、简洁清晰、乐于助人。",
    },
    {
      id: "tw-w6-1-q4",
      question: "术语表（Glossary）在风格指南中的核心价值是什么？",
      options: [
        "增加文档页数",
        "展示作者的词汇量",
        "作为术语的'单一事实来源'，确保团队和用户对词汇理解一致",
        "用于 SEO 优化",
      ],
      answer: 2,
      rationale:
        "术语表确保整个文档体系中相同概念使用相同术语，是统一命名、大小写规则、缩写定义的核心组件。",
    },
    {
      id: "tw-w6-1-q5",
      question: "风格指南应该覆盖哪些内容？",
      options: [
        "只需要覆盖语法规则",
        "只需要覆盖代码格式",
        "语言语法、标点、格式、代码接口、可访问性、全球化等方面",
        "只需要覆盖术语表",
      ],
      answer: 2,
      rationale:
        "风格指南应覆盖：语言与语法、标点规范、格式（标题、列表、表格）、代码接口、可访问性与包容性语言、全球化考量。",
    },
    {
      id: "tw-w6-1-q6",
      question: "当风格规则与清晰表达冲突时，应该如何处理？",
      options: [
        "始终遵循风格规则",
        "选择清晰表达，但要记录例外情况和原因",
        "放弃这段内容",
        "请求上级决定",
      ],
      answer: 1,
      rationale:
        "风格指南是指导而非法律。当规则与清晰表达冲突时，应选择清晰——但要记录例外情况和原因。",
    },
    {
      id: "tw-w6-1-q7",
      question: "术语一致性执行的主要挑战是什么？",
      options: [
        "术语表太难建立",
        "术语表太大无法使用",
        "建立术语表容易，执行难——需要 PR 审查和自动化检查（如 Vale）",
        "术语不需要一致",
      ],
      answer: 2,
      rationale:
        "建立术语表容易，执行难。需要在 PR 审查中检查术语使用，并用 linter（如 Vale）自动检查。",
    },
    {
      id: "tw-w6-1-q8",
      question: "Microsoft Style Guide 描述的理想语气特征不包括以下哪项？",
      options: [
        "温暖放松（warm and relaxed）",
        "简洁清晰（crisp and clear）",
        "严肃正式（serious and formal）",
        "乐于助人（ready to lend a hand）",
      ],
      answer: 2,
      rationale:
        "Microsoft 的风格特征：温暖放松、简洁清晰、乐于助人。不包括'严肃正式'。",
    },
    {
      id: "tw-w6-1-q9",
      question: "如何处理有多个常见叫法的技术概念？",
      options: [
        "在术语表中选定一个首选术语，首次使用时可注明其他叫法",
        "随机使用不同的叫法",
        "每个章节使用不同的叫法",
        "避免提及该概念",
      ],
      answer: 0,
      rationale:
        "选定首选术语并在术语表中记录，首次使用时可说明'也称为...'，之后统一使用首选术语。",
    },
    {
      id: "tw-w6-1-q10",
      question: "新术语处理流程需要解决什么问题？",
      options: [
        "谁有权添加新术语、如何通知团队、如何更新翻译",
        "如何删除旧术语",
        "如何缩短术语长度",
        "如何避免使用术语",
      ],
      answer: 0,
      rationale:
        "技术领域不断出现新术语。需要建立流程明确：谁有权添加？如何通知团队？如何更新翻译？",
    },
    {
      id: "tw-w6-1-q11",
      question: "风格指南在多人协作中需要满足什么平衡？",
      options: [
        "足够复杂以展示专业性",
        "足够具体以消除歧义，但不能过于死板限制表达",
        "越简单越好",
        "只有高级作者才能使用",
      ],
      answer: 1,
      rationale:
        "不同作者有不同习惯。风格指南需要足够具体以消除歧义，但不能过于死板限制表达。",
    },
    {
      id: "tw-w6-1-q12",
      question: "风格指南应该如何演进？",
      options: [
        "一旦确定永不更改",
        "每天都更新",
        "只有出现错误时才更新",
        "随着产品和团队发展定期审查和更新，记录变更历史",
      ],
      answer: 3,
      rationale:
        "风格指南是活的文档，应随产品演进、用户反馈和最佳实践更新而持续改进。",
    },
  ],
  // Lesson 2: 可访问性与包容性写作 (12题，答案随机分布)
  "tw-w6-2": [
    {
      id: "tw-w6-2-q1",
      question: "根据 W3C，网页可访问性的核心定义是什么？",
      options: [
        "网站的加载速度快",
        "网站、工具和技术的设计与开发使残障人士能够感知、理解、导航和互动",
        "网站支持多种语言",
        "网站有美观的界面设计",
      ],
      answer: 1,
      rationale:
        "W3C 定义：网页可访问性意味着'网站、工具和技术的设计与开发使残障人士能够使用'，包括感知、理解、导航和贡献。",
    },
    {
      id: "tw-w6-2-q2",
      question: "Tim Berners-Lee 关于网络通用性的核心观点是什么？",
      options: [
        "网络应该只服务于技术人员",
        "网络的力量在于速度",
        "网络的力量在于其通用性——无论是否有残障，每个人都能访问是基本要素",
        "网络应该分为不同等级的访问权限",
      ],
      answer: 2,
      rationale:
        "Tim Berners-Lee：'网络的力量在于其通用性。无论是否有残障，每个人都能访问是一个基本要素。'",
    },
    {
      id: "tw-w6-2-q3",
      question: "W3C 可访问性涵盖哪些残障类型？",
      options: [
        "只涵盖视觉障碍",
        "只涵盖身体障碍",
        "听觉、认知、神经、身体、言语和视觉障碍六大类",
        "只涵盖听觉和视觉障碍",
      ],
      answer: 2,
      rationale:
        "W3C：可访问性涉及六大类——听觉、认知、神经、身体、言语和视觉障碍。",
    },
    {
      id: "tw-w6-2-q4",
      question: "除了残障人士，可访问性还惠及哪些群体？",
      options: [
        "小屏幕设备用户、老龄人群、临时性残障患者、特定环境限制下的人",
        "只有老年人",
        "只有移动用户",
        "没有其他受益群体",
      ],
      answer: 0,
      rationale:
        "W3C：受益群体包括小屏幕设备用户、老龄人群、临时性残障患者（如骨折）、特定环境限制下的人（强光、嘈杂）。",
    },
    {
      id: "tw-w6-2-q5",
      question: "W3C 关于可访问性融入项目的最佳时机是什么？",
      options: [
        "项目上线后再处理",
        "用户投诉时再处理",
        "项目初期融入最有效且成本最低，事后补救代价高昂",
        "可以随时处理，没有区别",
      ],
      answer: 2,
      rationale:
        "W3C：可访问性在项目初期融入最有效，而非事后补救。这是成本效益最高的方式。",
    },
    {
      id: "tw-w6-2-q6",
      question: "Google 建议如何替代'sanity-check'这个 ableist 术语？",
      options: [
        "完整性测试",
        "最终验证",
        "用'final check for completeness'替代",
        "健全性检查",
      ],
      answer: 2,
      rationale:
        "Google：用'final check for completeness'替代'sanity-check'，避免 ableist 语言。",
    },
    {
      id: "tw-w6-2-q7",
      question: "Google 建议如何处理'whitelist'等已建立的非包容行业术语？",
      options: [
        "完全避免使用",
        "继续使用，因为是行业标准",
        "首次提及时在括号中说明，然后全文使用'allowlist'等包容性替代词",
        "只在正式文档中使用",
      ],
      answer: 2,
      rationale:
        "Google：对于'whitelist'等术语，首次提及时在括号中说明，然后全文使用包容性替代词如'allowlist'。",
    },
    {
      id: "tw-w6-2-q8",
      question: "描述非残障人士时应避免使用什么表述？",
      options: [
        "使用'nondisabled person'",
        "使用'person without disabilities'",
        "避免使用'normal'或'healthy'——这会边缘化残障人士",
        "使用'一般人'",
      ],
      answer: 2,
      rationale:
        "Google：描述非残障人士时避免'normal'或'healthy'，使用'nondisabled person'或'person without disabilities'。",
    },
    {
      id: "tw-w6-2-q9",
      question: "Google 包容性文档指南建议如何处理社区身份称呼？",
      options: [
        "研究写作对象社区的偏好称呼方式，尊重身份优先语言偏好",
        "统一使用人优先语言",
        "统一使用身份优先语言",
        "避免提及任何身份",
      ],
      answer: 0,
      rationale:
        "Google：'research the ways that the people in the communities that you're writing about prefer to be identified'。",
    },
    {
      id: "tw-w6-2-q10",
      question: "gendered 语言的替换中，'man-hours'应该替换为什么？",
      options: [
        "work-hours",
        "person-hours",
        "labor-hours",
        "staff-hours",
      ],
      answer: 1,
      rationale:
        "Google：用'person-hours'替代'man-hours'，用'humanity'替代'mankind'以确保性别中立。",
    },
    {
      id: "tw-w6-2-q11",
      question: "W3C 列出的三个核心可访问性实践是什么？",
      options: [
        "快速加载、响应式设计、SEO 优化",
        "为图像提供替代文本、确保键盘功能可用、为音频内容提供文字稿",
        "使用标准字体、统一配色、简化导航",
        "多语言支持、移动适配、社交分享",
      ],
      answer: 1,
      rationale:
        "W3C 三个核心实践：1) 为图像提供替代文本，2) 确保键盘功能可用，3) 为音频内容提供文字稿。",
    },
    {
      id: "tw-w6-2-q12",
      question: "Google 建议如何称呼老年人群体？",
      options: [
        "the elderly",
        "seniors",
        "older adults",
        "old people",
      ],
      answer: 2,
      rationale:
        "Google：使用'older adults'而非'the elderly'或'seniors'，这是更包容的表达方式。",
    },
  ],
  // Lesson 3: 本地化与国际化（I18n/L10n）(7题)
  "tw-w6-3": [
    {
      id: "tw-w6-3-q1",
      question: "编写可翻译文档的首要原则是什么？",
      options: [
        "术语一致、避免歧义、避免文化特定的表达",
        "使用尽可能复杂的句子",
        "大量使用缩写",
        "每段话尽量长",
      ],
      answer: 0,
      rationale:
        "可翻译的文档需要术语一致（翻译记忆可复用）、表达明确（减少歧义）、文化中立（易于本地化）。",
    },
    {
      id: "tw-w6-3-q2",
      question: "为什么要避免在可翻译文档中使用习语和比喻？",
      options: [
        "习语难以翻译且可能在不同文化中有不同或冒犯性的含义",
        "习语会增加文档长度",
        "翻译工具无法识别习语",
        "习语只在口语中使用",
      ],
      answer: 0,
      rationale:
        "习语是文化特定的，直译可能无意义或冒犯，需要本地化团队额外处理，增加成本和错误风险。",
    },
    {
      id: "tw-w6-3-q3",
      question: "术语表对翻译工作有什么帮助？",
      options: [
        "确保专业术语在所有语言版本中翻译一致",
        "减少需要翻译的内容",
        "让翻译自动完成",
        "替代人工翻译",
      ],
      answer: 0,
      rationale:
        "术语表帮助翻译团队保持术语一致性，同一概念在所有语言版本中使用相同的翻译。",
    },
    {
      id: "tw-w6-3-q4",
      question: "文档中的日期和时间应该如何处理以支持国际化？",
      options: [
        "使用明确的格式（如 ISO 8601）或在界面中使用本地化格式",
        "始终使用 MM/DD/YYYY 格式",
        "只写星期几",
        "使用相对时间（如'昨天'）",
      ],
      answer: 0,
      rationale:
        "不同地区日期格式不同（MM/DD vs DD/MM），应使用明确格式避免歧义，或在本地化时适配。",
    },
    {
      id: "tw-w6-3-q5",
      question: "为什么说源语言的质量直接影响翻译质量？",
      options: [
        "歧义、不一致或复杂的源文本会导致翻译错误和成本增加",
        "翻译工具只能处理简单文本",
        "源文本越复杂翻译越准确",
        "翻译不依赖源文本质量",
      ],
      answer: 0,
      rationale:
        "翻译团队依赖源文本理解意图，歧义会导致错误翻译，不一致会破坏翻译记忆复用。",
    },
    {
      id: "tw-w6-3-q6",
      question: "文档中的硬编码字符串（如按钮文本）为什么需要外部化？",
      options: [
        "便于在本地化时替换为不同语言版本，无需修改代码",
        "减少代码体积",
        "提高运行速度",
        "满足安全要求",
      ],
      answer: 0,
      rationale:
        "将字符串外部化到资源文件，本地化团队可以翻译资源文件而无需接触代码。",
    },
    {
      id: "tw-w6-3-q7",
      question: "设计界面时为什么要为文本预留扩展空间？",
      options: [
        "不同语言的文本长度差异很大，翻译后可能比原文长 30%-50%",
        "为了美观",
        "为了添加注释",
        "为了兼容旧版本",
      ],
      answer: 0,
      rationale:
        "翻译后文本长度可能显著增加（如德语常比英语长 30%），需要预留空间避免布局问题。",
    },
  ],
  // Lesson 4: 文档 QA 与自动化检查 (7题)
  "tw-w6-4": [
    {
      id: "tw-w6-4-q1",
      question: "Vale 等风格检查工具的主要作用是什么？",
      options: [
        "自动检查文档是否符合风格指南规则，如术语、语态、可读性",
        "翻译文档",
        "生成 PDF",
        "管理版本控制",
      ],
      answer: 0,
      rationale:
        "Vale 等 linter 可配置风格规则，自动检查文档中的术语、语态、禁用词等，减少人工审查负担。",
    },
    {
      id: "tw-w6-4-q2",
      question: "markdownlint 工具检查什么？",
      options: [
        "Markdown 语法规范，如标题层级、列表格式、空行规则",
        "文档的技术准确性",
        "代码的运行结果",
        "图片的分辨率",
      ],
      answer: 0,
      rationale:
        "markdownlint 检查 Markdown 语法一致性，如标题层级、列表缩进、空行等格式规则。",
    },
    {
      id: "tw-w6-4-q3",
      question: "链接检查（Link Check）在文档 QA 中的重要性是什么？",
      options: [
        "发现死链接，确保所有引用的资源可访问",
        "检查链接的 SEO 价值",
        "统计链接数量",
        "加快页面加载",
      ],
      answer: 0,
      rationale:
        "死链接破坏用户体验和信任，自动化链接检查可在 CI 中持续监控，及时发现问题。",
    },
    {
      id: "tw-w6-4-q4",
      question: "将文档检查集成到 CI/CD 的好处是什么？",
      options: [
        "在合并前自动发现问题，防止低质量内容进入主分支",
        "让构建更慢",
        "增加开发者负担",
        "替代人工审查",
      ],
      answer: 0,
      rationale:
        "CI 集成让质量检查自动化，在 PR 阶段就发现问题，与代码审查流程一致。",
    },
    {
      id: "tw-w6-4-q5",
      question: "拼写检查工具在技术文档中需要注意什么？",
      options: [
        "需要配置技术术语和项目特有词汇的白名单，避免误报",
        "默认配置足够",
        "应该禁用所有技术术语检查",
        "只检查标题",
      ],
      answer: 0,
      rationale:
        "技术文档包含大量专有名词和术语，需要配置白名单避免这些正确的词被标记为错误。",
    },
    {
      id: "tw-w6-4-q6",
      question: "文档的可读性检查通常评估什么？",
      options: [
        "句子长度、词汇复杂度、段落结构等影响阅读难度的因素",
        "文档的页数",
        "图片数量",
        "代码行数",
      ],
      answer: 0,
      rationale:
        "可读性检查评估文本的阅读难度，如 Flesch-Kincaid 等指标，帮助作者简化复杂表达。",
    },
    {
      id: "tw-w6-4-q7",
      question: "代码示例的自动化测试有什么价值？",
      options: [
        "确保文档中的代码示例实际可运行，不会因产品更新而失效",
        "检查代码风格",
        "测量代码性能",
        "生成 API 文档",
      ],
      answer: 0,
      rationale:
        "产品更新可能导致文档中的代码示例失效，自动化测试可在 CI 中验证示例仍然有效。",
    },
  ],
};
