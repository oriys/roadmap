import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

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
            "【Vale 核心定位】开源命令行工具，将编辑风格指南付诸实践——'Your style, our editor'。完全离线运行，确保内容永不发送到远程服务器。",
            "【Vale 技术能力】理解标记语言和代码，内置流行风格指南（Google、Microsoft、write-good）的实现方案，支持用户创建和分享自定义规则。",
            "【markdownlint 定义】Node.js 风格检查器和 Markdown/CommonMark 文件的 lint 工具——静态分析工具，确保 Markdown 文档的标准和一致性。",
            "【markdownlint 规则覆盖】实现 60+ 条内置规则（MD001-MD060），覆盖标题结构、间距、代码块、链接、表格等格式问题。",
            "【GitHub Actions 核心】'Automate, customize, and execute your software development workflows right in your repository'——在仓库中自动化、定制和执行软件开发工作流。"
        ],
        keyDifficulties: [
            "【规则配置平衡】规则太严格产生大量误报，太宽松则失去意义。需要根据团队情况逐步调整，从核心规则开始。",
            "【markdownlint 配置】三种主要配置方式：行内注释（HTML comments）、配置对象（options.config）、样式文件（JSON with extends）。",
            "【CommonMark 兼容】markdownlint 遵循 CommonMark 规范，支持 GitHub Flavored Markdown (GFM) 语法——自动链接、表格、脚注、数学公式。",
            "【CI 集成配置】GitHub Actions 工作流使用 YAML 文件定义，可触发于 push、pull_request 等事件，支持条件执行和并发控制。",
            "【自定义规则创建】Vale 允许用 YAML 语法创建自定义规则检查术语使用，需要学习规则语法和正则表达式。"
        ],
        handsOnPath: [
            "安装 Vale 并运行首次检查：`vale --init` 创建 .vale.ini，安装官方风格包（如 Google、Microsoft）。",
            "配置 markdownlint：创建 .markdownlint.json 或 .markdownlint.yaml，启用核心规则，运行检查并修复问题。",
            "为术语表创建 Vale 自定义规则：检查术语拼写、禁用的同义词、大小写一致性。",
            "配置 GitHub Actions 工作流：创建 .github/workflows/docs.yml，在每个 PR 运行 markdownlint 和 Vale。",
            "添加链接检查：集成 lychee 或 linkcheck 等工具，发现死链接和失效引用。",
            "设置检查失败阻止合并：配置 branch protection rules，要求 CI 检查通过才能合并。"
        ],
        selfCheck: [
            "【Vale 配置】项目是否有 .vale.ini 配置文件？是否安装了风格包？",
            "【markdownlint 配置】项目是否有 markdownlint 配置？是否在 CI 中运行？",
            "【自定义规则】是否为项目特定术语创建了 Vale 自定义规则？",
            "【CI 集成】文档检查是否集成到 GitHub Actions？每个 PR 是否自动检查？",
            "【链接检查】是否配置了链接有效性检查？是否定期运行发现死链？",
            "【合并保护】CI 检查失败是否会阻止 PR 合并？"
        ],
        extensions: [
            "【Vale 规则语法】深入学习：https://vale.sh/docs/topics/styles/ —— 创建自定义规则的完整文档。",
            "【markdownlint 规则】完整规则列表：https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md",
            "【其他检查工具】探索 textlint、write-good、alex（检查不包容语言）、proselint 等工具。",
            "【GitHub Actions 文档 CI/CD】学习构建完整的文档发布流水线——检查、构建、部署一体化。"
        ],
        sourceUrls: [
            "https://vale.sh/",
            "https://github.com/DavidAnson/markdownlint",
            "https://docs.github.com/en/actions"
        ]
    }
}

export const week6Quizzes: Record<string, QuizQuestion[]> = {
    "tw-w6-1": [
        {
            id: "tw-w6-1-q1",
            question: "Google 建议的风格指南参考优先级顺序是什么？",
            options: [
                "Microsoft Style Guide > Google Style Guide > 项目特定指南",
                "项目特定指南 > Google Style Guide > 第三方来源（Merriam-Webster、Chicago Manual）",
                "Chicago Manual > Google Style Guide > 项目特定指南",
                "所有风格指南优先级相同"
            ],
            answer: 1,
            rationale: "Google 建议的优先级：项目特定指南 > Google Style Guide > 第三方来源（Merriam-Webster 拼写、Chicago Manual 通用写作、Microsoft Style Guide 技术内容）。"
        },
        {
            id: "tw-w6-1-q2",
            question: "Microsoft 风格指南的核心哲学是什么？",
            options: [
                "用最专业的术语展示技术深度",
                "'Make every word matter'——每个词都应有意义，风格应温暖放松、简洁清晰、乐于助人",
                "严格遵循学术写作规范",
                "尽可能使用被动语态保持客观"
            ],
            answer: 1,
            rationale: "Microsoft 核心哲学：'Make every word matter'——每个词都应有意义。风格应温暖放松（warm and relaxed）、简洁清晰（crisp and clear）、乐于助人（ready to lend a hand）。"
        },
        {
            id: "tw-w6-1-q3",
            question: "为什么术语表（Glossary）是风格指南的核心组件？",
            options: [
                "因为术语表可以自动翻译文档",
                "因为术语表统一命名、大小写规则、缩写定义，确保同一概念使用相同术语",
                "因为术语表是法律合规要求",
                "因为术语表可以替代文档搜索功能"
            ],
            answer: 1,
            rationale: "术语表统一命名、大小写规则、缩写定义。同一个概念必须在整个文档中使用相同的术语，术语不一致会让用户困惑。"
        }
    ],
    "tw-w6-2": [
        {
            id: "tw-w6-2-q1",
            question: "W3C 定义的网页可访问性涵盖哪些残障类型？",
            options: [
                "只涵盖视觉障碍",
                "听觉、认知、神经、身体、言语和视觉六大类障碍",
                "只涵盖身体和视觉障碍",
                "只涵盖听觉和言语障碍"
            ],
            answer: 1,
            rationale: "W3C 可访问性涉及六大类：听觉、认知、神经、身体、言语和视觉障碍。但受益群体远不止残障人士，还包括老龄人群、临时性残障患者等。"
        },
        {
            id: "tw-w6-2-q2",
            question: "以下哪个是 ableist 语言的正确替换？",
            options: [
                "将'review'替换为'sanity-check'",
                "将'sanity-check'替换为'final check for completeness'",
                "将'allowlist'替换为'whitelist'",
                "将'person-hours'替换为'man-hours'"
            ],
            answer: 1,
            rationale: "应搜索并替换 ableist 语言：用'final check for completeness'替代'sanity-check'，用'unresponsive'替代'blind to'，使用包容性语言。"
        },
        {
            id: "tw-w6-2-q3",
            question: "Google 对已建立的非包容行业术语（如 whitelist）的处理建议是什么？",
            options: [
                "继续使用原术语不做改变",
                "首次提及时在括号中说明，然后全文使用包容性替代词如 allowlist",
                "完全删除相关内容",
                "在文档末尾统一说明"
            ],
            answer: 1,
            rationale: "Google 建议：对于'whitelist'等已建立的非包容术语，首次提及时在括号中说明，然后全文使用包容性替代词如'allowlist'。"
        }
    ],
    "tw-w6-3": [
        {
            id: "tw-w6-3-q1",
            question: "Google 建议在面向国际化的写作中应避免什么？",
            options: [
                "使用列表和表格",
                "使用俚语、习语、幽默和文化特定表达",
                "使用代码示例",
                "使用简单的词汇"
            ],
            answer: 1,
            rationale: "Google 要求避免 colloquialisms（如'ballpark figure'）、idioms、slang 和 humor——这些文化特定表达难以翻译，容易造成误解。"
        },
        {
            id: "tw-w6-3-q2",
            question: "为什么文档写作中应保留关系代词（that、which）？",
            options: [
                "因为这样可以增加词数",
                "因为省略关系代词会导致翻译时句法结构不明确、产生歧义",
                "因为语法规则要求必须使用",
                "因为搜索引擎更容易索引"
            ],
            answer: 1,
            rationale: "Google 要求包含'that'、'which'等关系代词以防止歧义——翻译时需要明确的句法结构，省略会导致多种理解。"
        },
        {
            id: "tw-w6-3-q3",
            question: "术语不一致对翻译成本有什么影响？",
            options: [
                "没有影响",
                "会大幅增加翻译成本",
                "会降低翻译成本因为译者可以自由选择",
                "只影响机器翻译不影响人工翻译"
            ],
            answer: 1,
            rationale: "Google 明确指出：'Inconsistency in terminology and phrasing can greatly increase translation costs'——术语不一致会大幅增加翻译成本。"
        }
    ],
    "tw-w6-4": [
        {
            id: "tw-w6-4-q1",
            question: "Vale 工具的核心定位是什么？",
            options: [
                "一个 Markdown 格式化工具",
                "将编辑风格指南付诸实践的开源命令行工具，完全离线运行",
                "一个代码编译器",
                "一个在线文档协作平台"
            ],
            answer: 1,
            rationale: "Vale 是开源命令行工具，将编辑风格指南付诸实践——'Your style, our editor'。完全离线运行，确保内容永不发送到远程服务器。"
        },
        {
            id: "tw-w6-4-q2",
            question: "markdownlint 实现了多少条内置规则？",
            options: [
                "约 10 条",
                "约 30 条",
                "60 多条，覆盖标题结构、间距、代码块、链接、表格等",
                "超过 200 条"
            ],
            answer: 2,
            rationale: "markdownlint 实现了 60+ 条内置规则（MD001-MD060），覆盖标题结构、间距、代码块、链接、表格等格式问题。"
        },
        {
            id: "tw-w6-4-q3",
            question: "在 CI 中集成文档质量检查时，规则配置的关键挑战是什么？",
            options: [
                "CI 工具不支持文档检查",
                "规则太严格产生大量误报，太宽松则失去意义，需根据团队情况逐步调整",
                "文档检查会大幅增加构建时间",
                "只有付费工具才支持 CI 集成"
            ],
            answer: 1,
            rationale: "规则配置的关键挑战在平衡：规则太严格产生大量误报，太宽松则失去意义。需要根据团队情况逐步调整，从核心规则开始。"
        }
    ]
}
