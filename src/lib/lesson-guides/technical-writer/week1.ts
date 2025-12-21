import type { LessonGuide } from "../types"

export const week1Guides: Record<string, LessonGuide> = {
    "tw-w1-1": {
        lessonId: "tw-w1-1",
        background: [
            "技术写作（Technical Writing）是一种以任务为导向的实用写作，核心目标是帮助读者完成特定任务，而非展示文采或堆砌术语。",
            "Write the Docs 社区强调：撰写文档的过程本身能改进代码设计，因为它迫使开发者理清设计决策并显性化隐性假设。",
            "Diátaxis 框架将文档分为四象限：Tutorials（教程，学习导向）、How-to Guides（操作指南，问题导向）、Reference（参考，信息导向）、Explanation（解释，理解导向）。",
            "Google 技术写作课程指出：'知识的诅咒'（Curse of Knowledge）是写作者最大的障碍——专家往往难以理解初学者的困惑。"
        ],
        keyDifficulties: [
            "克服'知识诅咒'：你认为显而易见的事情，对读者可能完全陌生。需要显性化所有隐性假设，包括环境、版本、前置知识。",
            "避免 FAQ 陷阱：FAQ 看似有用，实则容易过时、内容散乱、难以检索，且常常不是真实用户的问题。应将其转化为结构化的正式文档。",
            "理解'文档即产品特性'：文档不是代码的附属品，而是产品的核心功能。好的文档能降低支持成本、吸引贡献者、提升用户留存。",
            "区分用户与开发者：文档的目标读者分为两类——想用代码的用户（关心怎么用）和想贡献代码的开发者（关心怎么改）。两者需要不同的文档。"
        ],
        handsOnPath: [
            "选择一个你熟悉的开源项目或个人项目，检查其 README 是否包含：问题描述、安装说明、使用示例、许可证。记录缺失项。",
            "用 Diátaxis 四象限审视该项目的文档结构：有没有教程（从零到一）？有没有操作指南（解决具体问题）？有没有参考文档（API/配置说明）？有没有概念解释？",
            "为该项目补写一份 Quickstart（3-5 步内跑通核心功能），确保包含：前置条件、安装命令、最小可运行示例、预期输出。",
            "邀请一位不熟悉该项目的同事测试你的 Quickstart，观察并记录他们的困惑点，这些就是你'知识诅咒'的盲区。"
        ],
        selfCheck: [
            "你能否用一句话说明这份文档的目标读者和他们要完成的任务？",
            "你的 README 是否回答了'这个项目解决什么问题'这个核心问题？",
            "如果用户只看 Quickstart，能否在 5 分钟内成功运行示例？",
            "你的文档中是否有 FAQ？如果有，能否将其转化为正式的 How-to 或 Troubleshooting？",
            "你是否为不同读者（用户 vs 开发者）提供了不同的入口？"
        ],
        extensions: [
            "深入学习 Diátaxis 框架：https://diataxis.fr/ —— 理解四种文档类型的边界和最佳实践。",
            "完成 Google Technical Writing One 课程：https://developers.google.com/tech-writing/one —— 系统学习清晰表达的技巧。",
            "加入 Write the Docs 社区（Slack/Meetup），获取行业动态和同行评审反馈。",
            "阅读你最喜欢的开源项目的文档，分析它们做对了什么、做错了什么。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/",
            "https://diataxis.fr/start-here/",
            "https://developers.google.com/tech-writing/one"
        ]
    },
    "tw-w1-2": {
        lessonId: "tw-w1-2",
        background: [
            "Quality = Fitness for purpose. 文档质量的衡量标准是它是否适合其目的——即服务于特定读者的特定任务。",
            "用户画像（Persona）是'一种虚构但现实的典型用户描述'，它利用人类对具体实例的更强吸引力，将抽象的用户群体转化为可感知的个体。",
            "Diátaxis 框架基于两个核心维度：'行动 vs 认知'（做什么 vs 想什么）和'获取 vs 应用'（学习 vs 工作），形成四种文档类型。",
            "Google 技术写作课程强调：在写作前必须先识别目标受众（Identify your target audience），并确定他们'已知什么'和'需要学什么'。"
        ],
        keyDifficulties: [
            "'知识诅咒'（Curse of Knowledge）：专家因太熟悉主题而难以站在初学者角度思考。你认为'显然'的事，读者可能完全不懂。",
            "'弹性用户'陷阱（The Elastic User）：试图在一份文档中满足所有人会导致谁都不满意。初学者需要教程，专家需要参考手册，两者不能混为一谈。",
            "区分'学习态'与'工作态'：用户有时在学习（需要教程/解释），有时在工作（需要指南/参考）。同一个人在不同情境下需求完全不同。",
            "创建有效的 Persona 需要真实的用户研究（访谈、调研、田野观察），而非凭空想象。虚构但可信的画像才能帮助决策。"
        ],
        handsOnPath: [
            "为你正在写的文档定义 1-2 个目标 Persona，包含：角色（Role）、目标（Goal）、技术背景（Tech Level）、痛点（Pain Points）。",
            "用'他们已知什么'和'他们需要学什么'这个问题审视你的文档，列出知识鸿沟清单。",
            "检查你的文档是否混杂了'教程'和'参考'——如果一段内容既想教概念又想列参数，考虑拆分成两个独立页面。",
            "找一个真实用户（或模拟用户），让他们在你旁边使用文档完成任务，观察他们在哪里卡住、困惑或跳过。"
        ],
        selfCheck: [
            "你能否清晰描述这份文档的目标读者是谁？他们的技术水平如何？",
            "这份文档服务于'学习态'还是'工作态'的用户？你是否混淆了两者？",
            "你是否列出了读者需要具备的前置知识？如果读者不具备，他们能否找到补充材料？",
            "你的文档是否避免了'弹性用户'陷阱——试图同时满足新手和专家？",
            "你是否验证过你的 Persona 假设？还是仅凭猜测？"
        ],
        extensions: [
            "阅读 NN/g 关于用户画像的完整指南：https://www.nngroup.com/articles/persona/ —— 学习如何基于研究创建有效的 Persona。",
            "深入理解 Diátaxis 的'两个维度'：https://diataxis.fr/foundations/ —— 理解行动/认知、获取/应用的区分。",
            "尝试 5 秒测试：让用户看你的文档 5 秒后描述它是做什么的——这能快速验证你的目标定位是否清晰。",
            "研究你使用的产品文档，识别它们是否清晰区分了不同受众的入口。"
        ],
        sourceUrls: [
            "https://developers.google.com/tech-writing/one#audience",
            "https://www.nngroup.com/articles/persona/",
            "https://diataxis.fr/foundations/"
        ]
    },
    "tw-w1-3": {
        lessonId: "tw-w1-3",
        background: [
            "Diátaxis 是一个系统化的技术文档创作方法论，解决三个维度问题：内容（写什么）、风格（如何写）和架构（如何组织）。",
            "结构化写作（Structured Writing）强调内容与格式分离，以话题（Topic）为单位组织信息，每个话题自包含、可重用、可独立更新。",
            "'Every Page is Page One'原则：假设用户可能通过搜索直接降落在任何页面，因此每个页面都需具备自包含的上下文，不依赖'从头读到尾'的假设。",
            "Google 技术写作强调：在文档开头陈述关键要点（State key points at the start），将长主题分解为适当的章节（Break long topics into appropriate sections）。"
        ],
        keyDifficulties: [
            "区分四种文档类型的边界：Tutorial（学习导向，循序渐进）、How-to Guide（任务导向，解决具体问题）、Reference（信息导向，完整准确）、Explanation（理解导向，讲清为什么）。",
            "避免'意识流'写作：不要想到哪写到哪，而是先用大纲规划结构，再填充内容。每个段落聚焦单一主题（Focus each paragraph on a single topic）。",
            "处理'长页面 vs 多页面'的取舍：相关内容放一页便于上下文连贯，但过长的页面会让用户迷失。需要根据内容性质和用户习惯权衡。",
            "保持结构一致性：同类文档（如所有 API 端点的参考文档）应使用相同的结构模板，降低用户的认知负担。"
        ],
        handsOnPath: [
            "用 Diátaxis 四象限审视你现有的文档：列出每个页面属于哪个象限，识别缺失的象限和边界模糊的页面。",
            "为一个功能创建完整的四类文档：一份 Tutorial（从零到一的学习路径）、一份 How-to（解决具体问题）、一份 Reference（参数/API 说明）、一份 Explanation（原理/架构解释）。",
            "重构一份'意识流'文档：先提炼大纲，确保每个小节标题清晰表达该节内容，然后让每个段落只讲一件事。",
            "检查你的文档是否满足'Every Page is Page One'：随机选一个页面，假设用户直接跳到这里，他们能理解上下文吗？需要补充什么背景链接？"
        ],
        selfCheck: [
            "你能否清晰说明每个文档页面属于 Diátaxis 的哪个象限？",
            "你的文档是否有一个清晰的大纲？读者能否通过标题快速定位所需内容？",
            "每个段落是否只讲一件事？段落首句是否概括了该段的核心观点？",
            "如果用户通过搜索直接跳到某个页面，他们能否理解上下文？",
            "同类文档（如多个 API 端点）是否使用了一致的结构模板？"
        ],
        extensions: [
            "深入学习 Diátaxis 框架：https://diataxis.fr/ —— 理解四种文档类型的边界、关系和最佳实践。",
            "阅读 Diátaxis 的'教程 vs How-to 指南'对比：https://diataxis.fr/tutorials-how-to/ —— 这是最容易混淆的两种类型。",
            "学习信息架构（Information Architecture）基础，理解如何设计文档的导航结构。",
            "研究优秀的开源项目文档（如 Stripe、Twilio），分析它们如何组织不同类型的内容。"
        ],
        sourceUrls: [
            "https://diataxis.fr/",
            "https://developers.google.com/tech-writing/one",
            "https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/"
        ]
    },
    "tw-w1-4": {
        lessonId: "tw-w1-4",
        background: [
            "清晰性（Clarity）是技术文档的第一原则。Google Style Guide 强调：'清晰性和一致性优先于严格遵循规则'（Clarity and consistency over strict adherence）。",
            "风格指南（Style Guide）通过维持一致的风格、声音和语调来减少认知负担（Cognitive Load），提升内容的权威性和可信度。",
            "Microsoft 现代声调三要素：Warm and relaxed（温暖放松）、Crisp and clear（简洁清晰）、Ready to lend a hand（乐于助人）。",
            "主流风格指南参考等级：项目特定指南 > Google/Microsoft Style Guide > Chicago Manual of Style > Merriam-Webster（拼写）。"
        ],
        keyDifficulties: [
            "主动语态 vs 被动语态：主动语态更直接、更清晰（'Click the button' 优于 'The button should be clicked'），但被动语态在强调结果或隐藏主体时仍有用。",
            "术语一致性：同一个概念在整个文档中必须使用相同的术语。建立术语表（Glossary）并严格执行，避免同义词混用造成混淆。",
            "避免行话陷阱：对内部团队显而易见的术语对外部读者可能完全陌生。需要定义首次出现的专业术语，或提供链接到术语表。",
            "打破'文字墙'（Wall of Text）：大段落让读者望而却步。使用标题、列表、表格、代码块等视觉元素提高可扫描性（Scannability）。"
        ],
        handsOnPath: [
            "选择一份你写过的文档，用以下清单检查：是否使用主动语态？是否使用第二人称（you）？是否使用现在时？术语是否一致？",
            "为你的项目创建一份最小风格指南：列出 5-10 个最常用术语的统一写法、大小写规则、缩写规范。",
            "重写一段'文字墙'：将一个超过 5 行的段落拆分成更短的段落、列表或表格，确保每个段落只讲一件事。",
            "做一次'行话审计'：找一个不熟悉你项目的人阅读文档，让他们标记所有不理解的术语，然后补充解释或链接。"
        ],
        selfCheck: [
            "你的文档是否主要使用主动语态？被动语态的使用是否有明确的理由？",
            "你是否有一份术语表或风格指南？团队成员是否知道并遵循它？",
            "首次出现的专业术语是否有定义或链接？",
            "你的文档是否有'文字墙'？能否用列表、表格或更短的段落替代？",
            "如果一个完全不了解你项目的人阅读文档，他们能理解吗？"
        ],
        extensions: [
            "阅读完整的 Google Developer Style Guide：https://developers.google.com/style —— 作为技术写作的权威参考。",
            "阅读 Microsoft Writing Style Guide：https://learn.microsoft.com/en-us/style-guide/ —— 学习'现代声调'的写作方式。",
            "学习无偏见写作（Bias-free Communication）：检查你的文档是否使用了包容性语言。",
            "为你的团队创建一份项目级风格指南，从常见决策开始，逐步完善。"
        ],
        sourceUrls: [
            "https://developers.google.com/style",
            "https://learn.microsoft.com/en-us/style-guide/welcome/",
            "https://www.writethedocs.org/guide/writing/style-guides/"
        ]
    }
}
