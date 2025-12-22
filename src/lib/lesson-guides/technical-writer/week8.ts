import type { LessonGuide } from "../types"

export const week8Guides: Record<string, LessonGuide> = {
    "tw-w8-1": {
        lessonId: "tw-w8-1",
        background: [
            "【作品集核心价值】作品集是技术写作面试中最有效的材料——'展示你实际完成的工作，比任何描述都更有说服力'。包含你'为之感到骄傲'或'展示特定技能'的作品。",
            "【针对性定制】根据职位定制作品集：编辑岗位需要 before/after 对比，API 文档岗位展示 HTTP 和 OpenAPI 知识，信息架构岗位展示 TOC 和知识管理示例。",
            "【版权严格限制】'当你为他人工作时，他们拥有你创作的内容，而非你'——需获得'书面明确许可'，且不能包含密码、商业机密、未发布功能或敏感信息。",
            "【简洁原则】'hiring managers and interviewers are pressed for time'——样本应简洁有力，添加简短描述解释你的创作过程、咨询对象和工作流程。",
            "【托管选择】云存储（Google Drive、Dropbox）、自建网站、WordPress、静态网站生成器（Hugo、MkDocs）通过 GitHub Pages 或 Netlify 托管。'有作品集比打造完美作品集更重要'。"
        ],
        keyDifficulties: [
            "【无权使用真实工作】替代方案：记录常用工具、编写游戏攻略、为开源项目撰写文档。这展现了'你擅长什么样的写作，以及你想向哪个方向发展'。",
            "【作品集范围选择】不需要完整的文档站点——可以是单个高质量的 README、API 参考页面或教程。质量优于数量。",
            "【展示过程而非结果】如果可能，展示你的设计决策、修订过程、用户反馈如何影响了最终版本。作品集创建过程本身就是展示问题解决和技术应用能力的样本。",
            "【技术栈抉择】使用 SSG 构建作品集本身就是展示技能的机会。但不要让技术实现阻碍内容创作——'有作品集比打造完美作品集更重要'。"
        ],
        handsOnPath: [
            "选择项目：挑选一个开源或个人项目，用 Diátaxis 框架规划文档结构——确定需要哪些 Tutorial、How-to、Reference、Explanation。",
            "创建文档站点：使用 VitePress/MkDocs/Docusaurus，配置导航和主题，部署到 GitHub Pages 或 Netlify。",
            "撰写关键页面：至少包含一份 Quickstart、一份 How-to、一份 API Reference。确保代码示例可运行、可复制。",
            "添加创作说明：为每个样本添加简短描述——你咨询了谁、遵循了什么流程、做了什么决策。",
            "质量保障：配置 markdownlint、链接检查，设置 CI 自动检查，展示你对 Docs-as-Code 的理解。",
            "最终校对：仔细检查语法和拼写错误——你的简历和作品集本身就是你能力的第一印象。"
        ],
        selfCheck: [
            "【可访问性】你的作品集是否可在线访问？招聘方能否通过 URL 直接查看？",
            "【多样性展示】你是否展示了多种文档类型（教程、指南、参考）？是否覆盖了目标职位需要的技能？",
            "【过程记录】你的作品是否有变更记录（Git history）？能否展示你的修订过程？",
            "【示例可运行】代码示例是否可运行？你是否实际测试过？",
            "【版权合规】你是否获得了所有作品的书面使用授权？是否避免了敏感信息？",
            "【简洁有力】样本是否足够简洁？是否有简短描述解释你的创作过程？"
        ],
        extensions: [
            "【Write the Docs 作品集指南】完整参考：https://www.writethedocs.org/hiring-guide/portfolios.html",
            "【优秀文档研究】研究 Stripe、Twilio、Tailwind CSS 的文档设计——信息架构、视觉层次、代码示例。",
            "【设计说明】为作品集添加'设计说明'页面：解释你的信息架构决策、受众分析、迭代过程。",
            "【社区反馈】向 Write the Docs 社区（Slack 频道或本地 Meetup）寻求作品集反馈。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/hiring-guide/portfolios.html",
            "https://diataxis.fr/",
            "https://pages.github.com/"
        ]
    },
    "tw-w8-2": {
        lessonId: "tw-w8-2",
        background: [
            "写作测试是技术写作面试的常见环节——可能包括：改写现有文档、为给定场景写新文档、识别并修复文档问题、现场编辑练习。",
            "写作测试评估的核心能力：理解受众、组织信息、清晰表达、技术准确性、遵循风格指南、在时间压力下工作。",
            "复盘 Checklist 的核心问题：读者是谁？结构是否清晰？示例是否可运行？术语是否一致？是否可搜索？是否可维护？",
            "你的简历本身是作品集的首要部分——它展示了你如何组织信息、选择用词、格式化内容。确保简历无语法错误。"
        ],
        keyDifficulties: [
            "时间管理：写作测试通常有时间限制。需要快速理解任务、规划结构、执行写作、预留时间校对。",
            "理解隐含要求：测试题目可能没有说明所有细节。需要做出合理假设，或在提交时说明你的假设。",
            "展示思考过程：有时面试官更关心你的思考过程而非最终结果。可以添加注释说明你的决策理由。",
            "处理不熟悉的技术：你可能被要求为不熟悉的技术写文档。展示你的学习能力和信息提取能力。"
        ],
        handsOnPath: [
            "练习限时写作：给自己 30 分钟为一个功能写 Quickstart，练习在时间压力下组织和表达。",
            "进行文档审查练习：找一份有问题的文档，列出问题并提供改进建议。练习识别受众不匹配、结构混乱、示例错误等问题。",
            "创建个人复盘 Checklist：基于 Google/Microsoft 风格指南，创建你自己的检查清单，用于快速校对。",
            "模拟面试场景：让朋友给你一个写作任务，在规定时间内完成，然后讨论你的决策过程。"
        ],
        selfCheck: [
            "你能否在 30 分钟内完成一份 500 字的 Quickstart？结构是否清晰？",
            "你是否有个人的校对 Checklist？是否包含了常见错误类型？",
            "你能否快速识别文档中的受众不匹配、结构问题、术语不一致？",
            "你是否准备好解释你的写作决策？能否说明为什么选择这个结构或用词？",
            "你的简历是否展示了技术写作技能？格式、用词、组织是否专业？"
        ],
        extensions: [
            "研究常见的技术写作面试问题：https://www.writethedocs.org/hiring-guide/",
            "练习 Google 技术写作课程的练习题：https://developers.google.com/tech-writing",
            "阅读技术写作社区的面试经验分享（Write the Docs Slack、Reddit r/technicalwriting）。",
            "准备你的'STAR'故事：情境、任务、行动、结果，用于行为面试问题。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/guide/tools/testing.html",
            "https://developers.google.com/style",
            "https://learn.microsoft.com/en-us/style-guide/procedures-instructions"
        ]
    },
    "tw-w8-3": {
        lessonId: "tw-w8-3",
        background: [
            "利益相关者访谈是'与对项目有直接利益的人进行的对话，目标是收集洞见以推动项目成功'——这是技术写作者获取信息的核心技能。",
            "进行访谈的四大原因：收集背景与历史、识别业务目标、达成共同愿景、增强支持度。让利益相关者感到被重视，提升对文档项目的认可度。",
            "访谈的四个高级主题：成功指标（从他们角度定义成功）、优先事项（他们听到的用户需求）、历史与专业知识（独特视角）、流程与工作方式（沟通偏好）。",
            "采用半结构化访谈方式：使用讨论指南而非脚本，确保灵活的自然对话。访谈理想在项目启动早期进行，但'永远不会太晚'。"
        ],
        keyDifficulties: [
            "从工程师获取信息：工程师忙于编码，可能没时间解释。需要准备具体问题、尊重他们的时间、展示你已做的功课。",
            "处理冲突的优先级：PM 想要 A，工程师想要 B，支持团队想要 C。技术写作者需要帮助协调，找到平衡点。",
            "推动文档与产品同步交付：文档常被视为'事后工作'。需要在规划阶段就参与，确保文档时间线被纳入发布计划。",
            "建立长期协作关系：单次成功不够，需要建立持续的信任和沟通渠道，让团队主动分享信息。"
        ],
        handsOnPath: [
            "准备一份利益相关者访谈指南：列出你需要了解的关键问题——功能目标、目标用户、已知限制、成功指标。",
            "练习信息提取：与一位开发者交流，让他们解释一个技术概念，然后用你的话复述，验证理解是否准确。",
            "模拟需求澄清场景：PM 给你一个模糊的文档需求，练习提问以澄清：谁是读者？他们想完成什么任务？什么时候需要？",
            "建立反馈渠道：为你负责的文档创建一个收集反馈的机制，定期与支持团队沟通了解用户痛点。"
        ],
        selfCheck: [
            "你是否有一套标准的访谈问题？是否覆盖了业务目标、用户需求、技术约束？",
            "你能否用非技术语言解释复杂的技术概念？能否验证你的理解是否准确？",
            "你是否了解产品发布流程？文档是否被纳入发布计划？",
            "你与工程师、PM、支持团队的沟通渠道是否畅通？他们是否主动分享信息？",
            "你是否定期与用户接触的团队（支持、销售）沟通以了解用户痛点？"
        ],
        extensions: [
            "学习 NN/g 的利益相关者访谈方法：https://www.nngroup.com/articles/stakeholder-interviews/",
            "研究 Write the Docs 的跨团队协作指南：https://www.writethedocs.org/guide/doc-ops.html",
            "阅读《The Product is Docs》了解文档在产品团队中的角色。",
            "练习'积极倾听'技巧：复述对方的观点、提问以深入理解、避免打断。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/book-club/splunk-product-docs/17-working-with-engineers/",
            "https://www.writethedocs.org/guide/doc-ops.html",
            "https://www.nngroup.com/articles/stakeholder-interviews/"
        ]
    },
    "tw-w8-4": {
        lessonId: "tw-w8-4",
        background: [
            "技术写作的职业路径可以向深度或广度发展：深度方向包括领域专家（API 文档、安全文档）、信息架构师、内容策略师；广度方向包括产品经理、开发者关系、技术培训。",
            "核心技能的发展：产品理解（知道用户要什么）、技术能力（能读懂代码、使用工具）、信息架构（组织复杂信息）、团队影响力（推动文档文化）。",
            "Write the Docs 社区是技术写作者的重要资源：Slack 社区、本地 Meetup、年度大会、播客、招聘信息。加入社区获取行业动态和同行支持。",
            "持续学习是必须的：技术不断变化，新的框架、工具、最佳实践不断涌现。保持学习习惯，关注行业趋势。"
        ],
        keyDifficulties: [
            "技术深度 vs 广度的选择：是成为特定领域（如云计算、区块链）的专家，还是成为通用型的技术写作者？取决于个人兴趣和市场需求。",
            "量化贡献的挑战：文档的价值难以直接量化。需要学习如何用数据（支持工单减少、用户满意度提升）证明文档的价值。",
            "职业发展路径的不确定性：技术写作可能没有明确的晋升阶梯。需要主动定义自己的成长方向，与管理者沟通期望。",
            "远程工作的协作挑战：技术写作越来越多是远程工作。需要在异步环境中有效沟通、建立信任、推动项目。"
        ],
        handsOnPath: [
            "评估你的技能差距：对照 Google/Microsoft 的技术写作者技能模型，识别你的强项和需要发展的领域。",
            "建立学习计划：选择 1-2 个你想发展的技能（如 API 文档、视频教程、信息架构），制定学习资源和实践计划。",
            "加入 Write the Docs 社区：加入 Slack、参加本地 Meetup 或线上活动，与同行交流、获取反馈。",
            "开始记录你的贡献：建立一个'成就日志'，记录你完成的项目、获得的反馈、可量化的成果，为绩效评估和面试准备材料。"
        ],
        selfCheck: [
            "你是否清楚自己的职业发展方向？是向深度还是广度发展？",
            "你是否识别了需要发展的技能？是否有学习计划？",
            "你是否加入了技术写作社区？是否与同行保持交流？",
            "你是否记录了自己的贡献和成就？能否在面试中用具体例子证明你的价值？",
            "你是否关注行业趋势？是否持续学习新工具和最佳实践？"
        ],
        extensions: [
            "研究 Write the Docs 的招聘指南：https://www.writethedocs.org/hiring-guide/",
            "关注技术写作播客：Write the Docs Podcast、The Content Strategy Podcast。",
            "阅读行业博客：I'd Rather Be Writing、Every Page is Page One。",
            "考虑认证：如 Society for Technical Communication (STC) 认证，展示专业承诺。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/hiring-guide/",
            "https://roadmap.sh/",
            "https://www.writethedocs.org/"
        ]
    }
}
