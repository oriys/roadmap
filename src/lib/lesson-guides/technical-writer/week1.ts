import type { LessonGuide } from "../types"

export const week1Guides: Record<string, LessonGuide> = {
    "tw-w1-1": {
        lessonId: "tw-w1-1",
        background: [
            "【元认知视角】技术写作本质上是一种认知卸载（Cognitive Offloading）机制——将头脑中的隐性知识外化为可检索、可验证的显性文档。Write the Docs 指出：'Your code from 6 months ago looks like code that someone else wrote'，这揭示了人类工作记忆的根本局限性。",
            "【系统论视角】文档不是代码的附属品，而是产品系统的核心组件。好的文档能产生杠杆效应：降低支持成本（O(n) → O(1) 的信息分发）、吸引开源贡献者（documentation itself is a valid contribution）、甚至反向改进代码设计（writing forces you to think through decisions）。",
            "【Diátaxis 框架】技术文档存在四种本质不同的类型，分别服务于用户的四种认知状态：Tutorials（学习态，构建心智模型）、How-to Guides（执行态，完成具体任务）、Reference（查询态，获取精确信息）、Explanation（理解态，建立因果关系）。混淆类型是文档质量低下的首要原因。",
            "【文档方程式】Google Technical Writing 给出了文档质量的核心公式：Good documentation = Knowledge audience needs − Knowledge audience already has。这个差值就是文档需要填补的'知识鸿沟'（Knowledge Gap）。",
            "【反模式识别】FAQ 是最常见的文档反模式——它看似解决问题，实则是'快速修复'的借口。FAQ 容易过时、内容散乱、难以检索，且'问题'往往来自作者想象而非真实用户。应将其系统化为 How-to 或 Troubleshooting 文档。"
        ],
        keyDifficulties: [
            "【知识诅咒的识别与克服】专家无意识地引用隐性知识（如'指针'对程序员显而易见，对新手却完全陌生）。克服方法：(1) 让非专家审阅，(2) 明确列出前置知识，(3) 假设读者的'文件未找到'——他们脑中不存在你默认存在的概念。",
            "【文档即接口的设计思维】像设计 API 一样设计文档：明确输入（前置条件）、处理（步骤）、输出（预期结果）。文档的'可用性'应与代码的'可测试性'同等重要——如果用户无法验证成功，文档就是失败的。",
            "【受众二分法的权衡】文档服务两类本质不同的读者：消费者（How do I use this?）和贡献者（How do I change this?）。试图在一份文档中满足两者必然失败——需要分离入口、分层组织内容。",
            "【最小可行文档的边界】README 的必要元素：问题陈述（Why）、安装说明（Install）、使用示例（Usage）、许可证（License）。但'最小'不等于'简陋'——每个要素都需要可执行、可验证，否则只是占位符。"
        ],
        handsOnPath: [
            "选择一个你维护的项目（或 GitHub 上 star 较高但文档欠佳的项目），用 Diátaxis 四象限进行系统审计：每个现有页面属于哪个象限？哪些象限完全缺失？哪些页面混杂了多个类型？",
            "执行'知识诅咒探测'：找一个完全不了解该项目的人（理想情况是目标用户画像），让他们尝试按照现有文档完成核心任务。全程观察但不干预，记录所有卡点和困惑——这些就是你的盲区。",
            "补写一份 Quickstart，严格遵循以下结构：前置条件（精确到版本号）→ 安装命令（可复制粘贴）→ 最小运行示例（< 10 行代码）→ 预期输出（精确到字符）→ 下一步（链接到完整教程）。",
            "将现有的 FAQ（如果有）进行'解构重组'：每个 Q 背后的真实问题是什么？应该归入 How-to（任务导向）还是 Troubleshooting（问题导向）？删除那些'作者想象的问题'。",
            "为项目创建一份'文档清单'（Documentation Checklist）：列出理想状态下应该存在的所有文档类型，标注当前状态（存在/缺失/过时），形成可追踪的改进路线图。"
        ],
        selfCheck: [
            "【验证目标清晰度】你能否用一句话描述文档的目标读者和他们期望完成的任务？如果这句话超过 20 个词，你可能还没想清楚。",
            "【验证可执行性】一个完全陌生的用户能否仅凭你的 Quickstart 在 5 分钟内成功运行示例？如果不能，哪一步是阻塞点？",
            "【验证可验证性】文档中的每个'操作步骤'是否都有对应的'预期结果'？用户如何知道自己做对了？",
            "【验证知识假设】你是否明确列出了读者需要具备的前置知识？如果读者不具备，文档是否提供了补充链接？",
            "【验证类型纯粹性】你的文档是否存在'类型污染'——在 Reference 中混入 Tutorial，在 How-to 中添加 Explanation？每个页面是否有明确的类型归属？",
            "【验证反模式规避】你是否有 FAQ？如果有，每个条目是否有明确的转化去向（How-to/Troubleshooting/删除）？"
        ],
        extensions: [
            "【框架深化】完整阅读 Diátaxis 官网（https://diataxis.fr/），特别是 'Tutorials vs How-to' 的区分——这是最容易混淆的边界，也是文档架构能力的核心体现。",
            "【技能系统化】完成 Google Technical Writing One 和 Two 课程（https://developers.google.com/tech-writing），建立清晰表达、受众分析、文档组织的系统能力。",
            "【社区嵌入】加入 Write the Docs 社区（Slack + 线下 Meetup），参与真实的文档评审——同行反馈是识别盲区最高效的方式。",
            "【逆向工程】选择 3 个你认为文档优秀的开源项目（如 Stripe API Docs、Django、React），系统分析：它们做对了什么？它们的 Diátaxis 覆盖度如何？它们如何处理不同读者的需求？"
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
            "【质量公式】Google Technical Writing 给出了文档质量的核心方程：Good documentation = Knowledge audience needs − Knowledge audience already has。质量不是绝对的，而是相对于特定受众的'适配度'（Fitness for purpose）。",
            "【Persona 本质】Nielsen Norman Group 定义：Persona 是'基于用户研究的虚构但现实的典型用户描述'。它利用人类心理——我们对具体个案比抽象统计更有共鸣——将数据转化为可共情的角色。",
            "【双轴模型】Diátaxis 框架基于两个正交维度：'行动 vs 认知'（用户是想做事还是想理解）和'获取 vs 应用'（用户是在学习还是在工作）。这两个轴形成四个象限，对应四种文档类型。",
            "【受众定义三要素】Google 建议从三个维度定义受众：角色（Role，如软件工程师/产品经理）、与主题的距离（Proximity，对相关领域的熟悉度）、时间因素（Time，知识是否因长期未用而衰退）。",
            "【知识诅咒机制】专家的问题不是'知道太多'，而是'忘记了曾经不知道'。他们无意识地引用隐性知识，创造出新手脑中'文件未找到'的状态——专家不知道自己不知道什么需要解释。"
        ],
        keyDifficulties: [
            "【Persona 的陷阱】Persona 必须基于真实用户研究（田野调查、访谈、问卷），而非团队臆测。NN/g 警告：每个细节都应该'有目的'（have a purpose），与设计决策无关的信息会稀释 Persona 的价值。",
            "【弹性用户反模式】'The Elastic User'——当团队说'用户会喜欢这个功能'时，这个'用户'往往被无限拉伸以适应任何设计决策。解决方法：用具名的 Persona 替代模糊的'用户'，强制回答'Alice 会用这个吗？为什么？'",
            "【状态切换盲区】同一个人在不同时刻处于不同认知状态：学习态（需要教程）、执行态（需要 How-to）、查询态（需要 Reference）、理解态（需要 Explanation）。文档必须服务于状态，而非抽象的'用户'。",
            "【知识鸿沟测量】如何确定'读者已知什么'？方法：(1) 明确前置条件并检验（如'需要熟悉 Python 3.x'），(2) 让目标用户实际测试，(3) 分析支持工单中的常见困惑。"
        ],
        handsOnPath: [
            "为你的文档定义 2-3 个目标 Persona，每个包含：名字、角色、技术背景（具体到工具/语言/年限）、核心目标、痛点、一句态度引用语。确保 Persona 之间有明显差异。",
            "对每个 Persona 执行'知识审计'：列出他们'已知的'和'需要学的'，识别知识鸿沟。检查你的文档是否填补了这个鸿沟，还是在重复他们已知的内容。",
            "执行'Persona 验证测试'：找到符合每个 Persona 特征的真实用户，让他们使用你的文档完成任务。记录他们的困惑点——这些是你 Persona 假设的盲区。",
            "检查文档是否犯了'弹性用户'错误：搜索文档中所有出现'用户'的地方，尝试替换为具体的 Persona 名字。如果句子变得不合理，说明你在为一个不存在的人写作。",
            "为你的文档创建'状态路由表'：列出用户可能的认知状态（学习/执行/查询/理解），标注每种状态应该使用哪个文档入口。"
        ],
        selfCheck: [
            "【Persona 完整性】你的 Persona 是否包含：角色、背景、目标、痛点、引用语？是否基于真实用户数据而非臆测？",
            "【知识鸿沟识别】你是否能明确说出'读者已知什么'和'读者需要学什么'？这个鸿沟是否与 Persona 匹配？",
            "【状态区分】你的文档是服务于学习态、执行态、查询态还是理解态的用户？是否混淆了多种状态？",
            "【弹性用户检查】你的文档中是否有'用户'这个词？能否替换为具体的 Persona 名字而不失去意义？",
            "【验证闭环】你是否用真实用户测试过你的 Persona 假设？他们的行为是否符合预期？"
        ],
        extensions: [
            "【深度阅读】NN/g Persona 完整指南（https://www.nngroup.com/articles/persona/）——学习如何从用户研究创建有效的 Persona，避免常见陷阱。",
            "【框架理解】Diátaxis 基础理论（https://diataxis.fr/）——理解双轴模型如何将用户需求映射到文档类型。",
            "【实战练习】在团队中引入 Persona 工作坊：用真实用户数据构建 3-5 个 Persona，并在后续设计评审中强制使用。",
            "【反模式识别】审阅 3 份你常用的产品文档，识别它们是否犯了'弹性用户'或'状态混淆'的错误。"
        ],
        sourceUrls: [
            "https://developers.google.com/tech-writing/one",
            "https://www.nngroup.com/articles/persona/",
            "https://diataxis.fr/"
        ]
    },
    "tw-w1-3": {
        lessonId: "tw-w1-3",
        background: [
            "【Diátaxis 三维解决方案】Diátaxis 框架系统性地解决文档的三个维度问题：内容（写什么）、风格（如何写）、架构（如何组织）。它不是风格指南，而是一种将用户需求映射到文档类型的认知框架。",
            "【四象限本质差异】Tutorial = 学习导向的实践活动，学习者通过'做'获得技能；How-to = 任务导向的指引，假定用户已知目标；Reference = 信息导向的技术描述，结构镜像产品本身；Explanation = 理解导向的反思性内容，建立因果关系和背景知识。",
            "【Every Page is Page One】假设用户可能通过搜索直接降落在任何页面。每个页面必须自包含：有足够的上下文让用户理解当前位置，有链接让用户获取前置知识，不依赖'从头读到尾'的假设。",
            "【结构化写作的工程化思维】内容与格式分离，以话题（Topic）为单位组织信息。每个话题自包含、可重用、可独立更新。这种模块化思维让文档像代码一样可维护。",
            "【文档与产品的同构性】Reference 文档的组织结构应该'mirror the structure of the product'——API 文档的层级应该对应 API 的层级，配置文档的结构应该对应配置系统的结构。"
        ],
        keyDifficulties: [
            "【Tutorial vs How-to 的边界】最容易混淆的两种类型。Tutorial 服务于'学习态'用户（我不知道怎么做），How-to 服务于'执行态'用户（我知道我要什么，告诉我怎么做）。Tutorial 可以重复、可以绕路；How-to 必须直接、高效。",
            "【Reference 的纯粹性要求】Reference 应该'仅描述，勿指导'（describe, don't explain）。保持中立、客观、完整。混入教学内容会破坏查询效率，混入观点会降低可信度。",
            "【Explanation 的价值被低估】Explanation 是'唯一可能在远离产品时阅读的文档'——它建立心智模型，解释'为什么这样设计'。但因为不直接帮助完成任务，常被忽视。",
            "【长页面 vs 多页面的权衡】相关内容放一页便于上下文连贯，但过长会让用户迷失。原则：一个页面解决一个问题，通过链接连接相关内容。"
        ],
        handsOnPath: [
            "对现有文档进行 Diátaxis 四象限审计：为每个页面标注类型（T/H/R/E），识别缺失的象限和类型污染的页面。创建一个 2x2 矩阵可视化覆盖度。",
            "选择一个功能，按 Diátaxis 创建完整的四类文档：Tutorial（从零到一的学习路径，最少解释，频繁反馈）、How-to（假定用户已知目标，直接给步骤）、Reference（参数/API 的中立描述）、Explanation（设计决策和背景）。",
            "执行'Every Page is Page One'测试：随机选 5 个页面，假设用户直接从搜索跳入。每个页面是否能让用户理解：我在哪？这是什么？我需要知道什么前置知识？下一步去哪？",
            "找一份'类型污染'严重的文档（在 Reference 中混入教学，在 How-to 中添加原理解释），将其拆分为纯粹的多个页面，并用链接连接。",
            "为你的文档系统创建一份'类型边界指南'：明确每种类型的写作规范、禁止事项、典型模板。"
        ],
        selfCheck: [
            "【象限覆盖】你能否为每个文档页面明确标注其 Diátaxis 类型？是否有完全缺失的象限？",
            "【类型纯粹性】你的 Reference 是否混入了教学内容？你的 How-to 是否混入了原理解释？每个页面是否有且只有一个主要类型？",
            "【Tutorial 七原则检验】你的 Tutorial 是否：早期展示目标、频繁提供可见结果、最小化解释、允许重复、忽略替代方案？",
            "【How-to 实用性检验】你的 How-to 是否：聚焦用户目标而非工具、假定基础能力、步骤符合工作流、开头结尾有意义？",
            "【Reference 纯粹性检验】你的 Reference 是否：采用一致的结构模板、镜像产品结构、只描述不指导、包含必要示例？",
            "【Explanation 完整性检验】你的 Explanation 是否：提供背景和历史、解释设计决策、承认替代方案、建立知识网络？"
        ],
        extensions: [
            "【框架精通】完整阅读 Diátaxis 官网的四个类型详解（https://diataxis.fr/tutorials/、how-to-guides/、reference/、explanation/），理解每种类型的写作原则和常见错误。",
            "【案例分析】研究 Stripe、Twilio、Django 的文档，分析它们如何实现 Diátaxis 四象限覆盖，如何处理类型边界。",
            "【信息架构进阶】学习信息架构（Information Architecture）理论，理解导航设计、分类法、标签系统如何支撑文档结构。",
            "【工具支持】探索支持结构化写作的工具（如 DITA、Antora、Docusaurus），理解单一来源发布（Single-source Publishing）的概念。"
        ],
        sourceUrls: [
            "https://diataxis.fr/",
            "https://diataxis.fr/tutorials/",
            "https://diataxis.fr/how-to-guides/",
            "https://diataxis.fr/reference/",
            "https://diataxis.fr/explanation/"
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
