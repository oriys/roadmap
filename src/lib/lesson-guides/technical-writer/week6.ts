import type { LessonGuide } from "../types"

export const week6Guides: Record<string, LessonGuide> = {
    "tw-w6-1": {
        lessonId: "tw-w6-1",
        background: [
            "【风格指南核心原则】Google：'Break any of these rules sooner than say anything outright barbarous'——清晰性和一致性优先于严格遵循规则。如果规则阻碍了清晰表达，应该选择清晰。",
            "【参考等级】Google 建议的优先级：1) 项目特定指南 → 2) Google Style Guide → 3) 第三方来源（Merriam-Webster 拼写、Chicago Manual 通用写作、Microsoft Style Guide 技术内容）。",
            "【Microsoft 核心哲学】'Make every word matter'——每个词都应该有意义。风格应该是：温暖放松（warm and relaxed）、简洁清晰（crisp and clear）、乐于助人（ready to lend a hand）。",
            "【术语表价值】术语表（Glossary）是风格指南的核心组件：统一命名、大小写规则、缩写定义。同一个概念必须在整个文档中使用相同的术语。",
            "【覆盖范围】风格指南应覆盖：语言与语法、标点规范、格式（标题、列表、表格）、代码接口（API 注释、命令行语法）、可访问性与包容性语言、全球化考量。"
        ],
        keyDifficulties: [
            "【规则与灵活性平衡】风格指南是指导而非法律。当规则与清晰表达冲突时，应选择清晰——但要记录例外情况和原因。",
            "【术语一致性执行】建立术语表容易，执行难。需要在 PR 审查中检查术语使用，并用 linter（如 Vale）自动检查。",
            "【新术语处理流程】技术领域不断出现新术语。需要建立添加新术语的流程——谁有权添加？如何通知团队？如何更新翻译？",
            "【多人协作挑战】不同作者有不同习惯。风格指南需要足够具体以消除歧义，但不能过于死板限制表达。"
        ],
        handsOnPath: [
            "为你的项目创建最小风格指南：列出 10-15 个最常用术语的统一写法、大小写规则、缩写定义。",
            "建立术语表格式：术语、定义、首次出现时是否需要解释、相关术语、禁用的同义词。",
            "审查现有文档的术语一致性：搜索同一概念的不同表述（如 user/customer/client），统一使用。",
            "配置 Vale 使用你的术语表：创建自定义规则检查术语使用，集成到 CI 自动检查。",
            "参考 Google 和 Microsoft 风格指南，补充你项目特有的规则。"
        ],
        selfCheck: [
            "【指南存在性】你是否有一份项目级风格指南？团队成员是否知道并遵循它？",
            "【术语完整性】你的术语表是否完整？是否覆盖了所有常用术语？",
            "【一致性检查】同一个概念在所有文档中是否使用相同的术语？",
            "【流程建立】新术语如何添加到术语表？是否有明确的流程？",
            "【自动化检查】风格规则是否在 PR 审查中检查？是否有自动化检查工具？"
        ],
        extensions: [
            "【Google Style Guide】完整参考：https://developers.google.com/style —— 开发者文档的事实标准。",
            "【Microsoft Style Guide】完整参考：https://learn.microsoft.com/en-us/style-guide/welcome/ —— 技术内容的权威指南。",
            "【Vale 风格检查】学习创建自定义规则：https://vale.sh/docs/ —— 将风格指南转化为可执行检查。",
            "【开源项目参考】研究 Kubernetes、React、Django 等大型开源项目的风格指南是如何组织的。"
        ],
        sourceUrls: [
            "https://developers.google.com/style",
            "https://learn.microsoft.com/en-us/style-guide/welcome/",
            "https://www.writethedocs.org/guide/writing/style-guides.html"
        ]
    },
    "tw-w6-2": {
        lessonId: "tw-w6-2",
        background: [
            "【W3C 可访问性定义】网页可访问性意味着'网站、工具和技术的设计与开发使残障人士能够使用'——具体包括能够感知、理解、导航和与网络互动，以及为网络做出贡献。",
            "【网络的通用性】Tim Berners-Lee：'网络的力量在于其通用性。无论是否有残障，每个人都能访问是一个基本要素。'——这是网络设计的核心理念。",
            "【涵盖的残障类型】可访问性涉及六大类：听觉、认知、神经、身体、言语和视觉障碍。但受益群体远不止残障人士。",
            "【非残障受益群体】小屏幕设备用户、老龄人群、临时性残障患者（如骨折）、特定环境限制下的人（强光、嘈杂环境）、网络连接受限的用户。",
            "【包容性语言核心】Google：消除排斥或伤害特定社区的语言——ableist（'crazy'、'insane'）、gendered（'man-hours'）、violent（暴力隐喻）。"
        ],
        keyDifficulties: [
            "【早期融入原则】W3C：可访问性在项目初期融入最有效且成本最低，事后补救代价高昂。这需要在规划阶段就考虑无障碍需求。",
            "【替代文本撰写】核心实践之一：为图像提供替代文本。好的 alt 文本应描述图片的功能和信息，而非仅描述外观。装饰性图片应使用空 alt 属性。",
            "【社区偏好研究】Google：'research the ways that the people in the communities that you're writing about prefer to be identified'——尊重身份优先语言偏好。",
            "【非包容行业术语】Google：对于'whitelist'等已建立的非包容术语，首次提及时在括号中说明，然后全文使用包容性替代词如'allowlist'。",
            "【避免'正常'表述】描述非残障人士时避免使用'normal'或'healthy'——这会边缘化残障人士。使用'nondisabled person'或'person without disabilities'。"
        ],
        handsOnPath: [
            "审查文档的三个核心可访问性实践：图片替代文本、键盘功能可用性、音频内容文字稿。",
            "搜索并替换 ableist 语言：用'final check for completeness'替代'sanity-check'，用'unresponsive'替代'blind to'。",
            "搜索并替换 gendered 语言：用'person-hours'替代'man-hours'，用'humanity'替代'mankind'。",
            "多样化示例：检查名字、性别、年龄、地理位置的多样性。避免美国中心的文化引用和节日假设。",
            "处理非包容技术术语：将'whitelist/blacklist'替换为'allowlist/denylist'，首次出现时可在括号中提及原术语。",
            "使用屏幕阅读器测试文档：体验视觉障碍用户的阅读体验，识别导航和理解的障碍点。"
        ],
        selfCheck: [
            "【图片检查】所有信息性图片是否有有意义的 alt 文本？装饰性图片是否使用空 alt？",
            "【键盘导航】用户能否仅用键盘完成所有操作？焦点顺序是否合理？",
            "【标题层级】是否使用正确的标题层级（h1 → h2 → h3，不跳级）？",
            "【ableist 语言】是否避免了'crazy'、'insane'、'blind to'、'cripple'等 ableist 表达？",
            "【gendered 语言】是否使用了性别中立的表达？'man-hours'是否改为'person-hours'？",
            "【多样化示例】示例中的人物是否反映了多样化的名字、性别、年龄和地理位置？",
            "【文化敏感性】是否避免了美国中心的文化引用？是否使用'older adults'而非'the elderly'？"
        ],
        extensions: [
            "【W3C WAI 完整资源】深入学习：https://www.w3.org/WAI/ —— 网页可访问性的权威资源。",
            "【WCAG 2.1 快速参考】标准规范：https://www.w3.org/WAI/WCAG21/quickref/ —— 可访问性的技术标准。",
            "【Microsoft 无障碍术语库】参考：https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/accessibility-terms",
            "【自动化检查工具】使用 axe、WAVE、Lighthouse 等工具检查网页可访问性问题。"
        ],
        sourceUrls: [
            "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
            "https://learn.microsoft.com/en-us/style-guide/accessibility/accessibility-guidelines-requirements",
            "https://developers.google.com/style/inclusive-documentation"
        ]
    },
    "tw-w6-3": {
        lessonId: "tw-w6-3",
        background: [
            "【W3C 国际化使命】确保'网络技术为所有人服务，无论其语言、文字或文化'——这是网络设计的核心原则。",
            "【翻译与本地化区别】Microsoft：翻译（Translation）是语言转换，通常可自动化；本地化（Localization）是适应特定地区的语言、文化和政治期望，由熟悉当地的人完成。",
            "【句子长度影响】Google：'Keep sentences brief'——英语长句翻译成其他语言后往往更长，增加翻译成本和理解难度。",
            "【术语一致性成本】Google：'Inconsistency in terminology and phrasing can greatly increase translation costs'——术语不一致会大幅增加翻译成本。",
            "【简单词汇原则】Google：'Choose simple, precise words'——使用'start'而非'commence'，使用主动语态，直接称呼读者为'you'。"
        ],
        keyDifficulties: [
            "【关系代词保留】Google：包含'that'、'which'等关系代词以防止歧义——翻译时需要明确的句法结构。",
            "【避免俚语习语】Google：避免 colloquialisms（'ballpark figure'）、idioms、slang 和 humor——这些文化特定表达难以翻译。",
            "【避免方向性词汇】Google：避免'above'或'below'等方向性术语——不同语言的阅读方向和布局可能不同。",
            "【首次定义缩写】Google：'Define all abbreviations on first use'——确保非母语读者和翻译者能理解术语。",
            "【文化敏感性】Microsoft：'Be curious about target audiences'——订阅当地新闻、访问当地网站、关注目标地区的动态。"
        ],
        handsOnPath: [
            "检查句子长度：将过长的句子（超过 25 个词）拆分为多个短句，便于翻译。",
            "替换复杂词汇：用简单词（'start'、'end'、'use'）替换正式词（'commence'、'terminate'、'utilize'）。",
            "消除习语和俚语：搜索并替换'ballpark'、'back burner'、'out of the box'等表达。",
            "添加关系代词：检查省略'that'、'which'的句子，补充完整以消除歧义。",
            "验证术语一致性：确保同一概念在全文使用完全相同的术语和大小写。",
            "标记不翻译内容：明确标注代码、变量名、URL、品牌名等不需要翻译的内容。"
        ],
        selfCheck: [
            "【句子长度】句子是否足够短（通常不超过 25 词）？",
            "【词汇选择】是否使用了简单、精确的词汇？是否避免了 phrasal verbs？",
            "【习语检查】是否避免了习语、俚语、幽默和文化特定引用？",
            "【缩写定义】所有缩写是否在首次使用时定义？",
            "【术语一致性】同一术语是否在全文使用完全一致的表述和大小写？",
            "【关系代词】是否保留了必要的关系代词（that、which）？",
            "【方向性词汇】是否避免了'above'、'below'等方向性引用？"
        ],
        extensions: [
            "【W3C 国际化资源】深入学习：https://www.w3.org/International/ —— 语言支持、双向文本、字符编码等专题。",
            "【推荐阅读】《The Global English Style Guide》by John R. Kohl —— Microsoft 推荐的全球化写作指南。",
            "【推荐阅读】《The Elements of International English Style》by Edmond H. Weiss。",
            "【Plain Language】美国 Plain Language 行动与信息网络：https://www.plainlanguage.gov/"
        ],
        sourceUrls: [
            "https://www.w3.org/International/",
            "https://developers.google.com/style/translation",
            "https://learn.microsoft.com/en-us/style-guide/global-communications"
        ]
    },
    "tw-w6-4": {
        lessonId: "tw-w6-4",
        background: [
            "Vale 是开源的命令行风格检查工具——'Your style, our editor'。它完全离线运行，确保内容不发送到远程服务器，支持自定义风格规则。",
            "markdownlint 是 Markdown 静态分析工具，使用 micromark 解析器，遵循 CommonMark 规范和 GFM 扩展，包含 60 条规则检查风格违规和结构问题。",
            "文档 QA 自动化的价值：把主观标准变成可执行规则，减少人工重复劳动，确保一致性——每次 PR 都自动检查，而非依赖人工审查。",
            "常见检查项：拼写错误、链接有效性、术语一致性、Markdown 格式、标题结构、图片 alt 文本、代码示例可运行性。"
        ],
        keyDifficulties: [
            "规则配置的平衡：规则太严格会产生大量误报，太宽松则失去意义。需要根据团队情况逐步调整，从核心规则开始。",
            "自定义规则的创建：Vale 允许创建自定义规则检查术语使用。需要学习 YAML 规则语法和正则表达式。",
            "CI 集成的配置：GitHub Actions、GitLab CI 等如何配置文档检查？如何让检查结果显示在 PR 中？",
            "链接检查的挑战：外部链接可能因网络问题误报，内部链接需要考虑构建后的路径。需要配置重试和白名单。"
        ],
        handsOnPath: [
            "在项目中配置 markdownlint：创建 .markdownlint.json，启用核心规则，运行检查并修复问题。",
            "配置 Vale 使用官方风格包（如 Google、Microsoft）：创建 .vale.ini，安装风格包，运行检查。",
            "为你的术语表创建 Vale 自定义规则：检查术语拼写、禁用的同义词、大小写一致性。",
            "配置 GitHub Actions 自动检查：每个 PR 运行 markdownlint 和 Vale，失败时阻止合并。"
        ],
        selfCheck: [
            "你的项目是否配置了 markdownlint？是否在 CI 中自动运行？",
            "你是否使用 Vale 或类似工具检查风格和术语？",
            "自定义规则是否覆盖了项目特定的术语和风格要求？",
            "CI 检查失败是否会阻止 PR 合并？",
            "链接检查是否配置？是否定期运行以发现失效链接？"
        ],
        extensions: [
            "深入学习 Vale 规则语法：https://vale.sh/docs/topics/styles/",
            "了解 markdownlint 的所有规则：https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md",
            "探索其他文档检查工具：textlint、write-good、alex（检查不包容语言）。",
            "学习使用 GitHub Actions 构建完整的文档 CI/CD 流水线。"
        ],
        sourceUrls: [
            "https://vale.sh/",
            "https://github.com/DavidAnson/markdownlint",
            "https://docs.github.com/en/actions"
        ]
    }
}
