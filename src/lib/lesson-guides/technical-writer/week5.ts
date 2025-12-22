import type { LessonGuide } from "../types"

export const week5Guides: Record<string, LessonGuide> = {
    "tw-w5-1": {
        lessonId: "tw-w5-1",
        background: [
            "【Tutorial 定义】Diátaxis：'A tutorial is an experience that takes place under the guidance of a tutor. A tutorial is always learning-oriented.'——在导师指导下的学习体验，目标是获得技能而非完成任务。",
            "【导师责任】教师承担几乎所有责任：确保内容有意义（学生能获得成就感）、可成功完成、逻辑清晰、内容完整（涵盖必要的行动、概念和工具）。",
            "【尽早展示结果】Diátaxis：'Every step the learner follows should produce a comprehensible result, however small.'——每一步都应产生可理解的结果，建立因果关系的理解。",
            "【完美可靠性】Diátaxis：'A tutorial must inspire confidence.'——教程必须每次都能成功运行，无法像真实教师那样在现场纠正错误。",
            "【语言风格】使用第一人称复数'我们'（We will...）建立师生关系；使用清晰的命令式语气；提供明确的预期输出示例。"
        ],
        keyDifficulties: [
            "【最小化解释陷阱】教程写作者常犯的错误是解释太多。教程的目标是让学习者'做'，而非'理解'。长解释应链接到 Explanation 文档。",
            "【忽略选项的纪律】教程中不应讨论替代方案或高级选项——这会分散注意力。Diátaxis：保持单一路径，让学习者专注于当前任务。",
            "【叙事线索维护】通过示例输出、警告标志和解释性提示（如'Notice that...'、'Remember that...'），保持学习者在正轨上的确认。",
            "【从具体到抽象】先让学习者做具体的事，再引导他们理解抽象原理。过早讲原理会让初学者迷失。",
            "【反面警告】Diátaxis 明确要避免：抽象化和泛化概念、过度解释、提供选项和替代方案、过多信息。"
        ],
        handsOnPath: [
            "选择一个你熟悉的功能，规划一个 15-30 分钟的教程：明确学习目标、划分 5-10 个步骤、每步都有可见结果。",
            "写出教程的第一版：使用'我们'语气，每个步骤包含动作、预期输出、检查点。避免任何解释性段落。",
            "添加叙事线索：在关键步骤后加入'你会注意到...'、'这说明...'等确认提示，引导学习者观察重要细节。",
            "找一个完全不了解该功能的人测试你的教程：观察他们在哪里卡住、困惑或跳过。记录问题点。",
            "根据测试反馈修订教程：简化困难步骤、补充遗漏的输出示例、删除不必要的解释。再次测试直到通过率 100%。"
        ],
        selfCheck: [
            "【学习目标】你的教程是否有明确的学习目标？学习者完成后能获得什么技能？",
            "【可见结果】每个步骤是否都有可见的结果？学习者能否验证自己做对了？",
            "【解释控制】你是否避免了长段解释？解释性内容是否链接到了 Explanation 文档？",
            "【可靠性测试】你的教程是否在多个环境中测试过？是否每次都能成功运行？",
            "【语气一致】你是否使用了'我们'语气？是否让学习者感到有导师陪伴？"
        ],
        extensions: [
            "【Diátaxis 教程指南】深入学习：https://diataxis.fr/tutorials/ —— 理解教程的十大原则。",
            "【优秀案例】研究 Django Girls Tutorial、The Odin Project、freeCodeCamp 的课程设计。",
            "【教学设计基础】学习布鲁姆分类法、学习目标写法、形成性评估（Instructional Design）。",
            "【屏幕录制验证】录下自己按教程操作的过程，检查是否流畅无阻。"
        ],
        sourceUrls: [
            "https://diataxis.fr/tutorials/",
            "https://developers.google.com/style/headings",
            "https://www.writethedocs.org/videos/portland/2021/writing-a-perfect-technical-tutorial-jessica-garson.html"
        ]
    },
    "tw-w5-2": {
        lessonId: "tw-w5-2",
        background: [
            "【How-to 定义】Diátaxis：'How-to guides are directions that guide the reader through a problem or towards a result. How-to guides are goal-oriented.'——目标导向的方向指引，引导读者解决问题或达成结果。",
            "【与 Tutorial 的关键区别】Tutorial 面向学习者（不知道要什么），How-to 面向有目标的用户（知道要什么）。如同食谱——读者知道想做什么菜，只需要步骤。",
            "【用户假设】How-to 假设读者已具备基本能力（basic competence），知道自己想要达成什么目标。不需要从零教起。",
            "【食谱类比】Diátaxis 将食谱作为 How-to 的理想模型——它们回答特定问题、排除教学和讨论、专注于执行步骤。",
            "【标题精准性】标题应直接回答'如何做 X'：'How to integrate APM' 优于模糊的'Monitoring guide'。用户通过标题判断是否是他们要找的。"
        ],
        keyDifficulties: [
            "【聚焦问题而非工具】Diátaxis 强调 How-to 应聚焦人的问题（human problem），而非工具机制。'turn the tap clockwise' 是无用信息，因为它只描述机械动作而非有意义的目标。",
            "【省略优于完整】Google：'Omit unnecessary information; prioritize practical usability over completeness'——省略不必要的信息，实用性优先于完整性。",
            "【动作优先原则】Google：'State the action first and the result second'——先陈述动作，再陈述结果。先给位置/上下文，再给动作；先给目标，再给动作。",
            "【步骤数量控制】Microsoft：'限制在 7 步以内，最好更少'——尽量在同一屏幕显示所有步骤，减少用户的认知负担。",
            "【前置条件明确】用户开始操作前需要什么？环境、权限、依赖、已有知识——都要在开头清晰列出，让用户判断是否准备就绪。"
        ],
        handsOnPath: [
            "选择一个用户常问的'如何做 X'问题，用 Diátaxis 原则写操作指南：包含前置条件、编号步骤、验证方法、常见问题。",
            "使用 Google 的步骤格式：编号步骤、祈使动词开头（如 Select、Open、Enter）、位置优先（如'On the Design tab, select...'）。",
            "为操作指南添加'常见坑'部分：列出 2-3 个用户经常遇到的问题和解决方案——这是区分优秀 How-to 的关键。",
            "用右角括号简化简单序列：'File > New > Document'。注意 Microsoft 提醒：屏幕阅读器可能跳过括号，影响无障碍性。",
            "让一个有基础但没做过这个任务的人测试你的指南：观察他们是否能独立完成，哪里需要更多细节。"
        ],
        selfCheck: [
            "【标题检验】你的标题是否清晰回答'如何做 X'？用户能否通过标题判断这是不是他们要找的？",
            "【前置条件】你是否列出了所有前置条件？用户开始前是否知道需要准备什么？",
            "【步骤聚焦】你的步骤是否专注于行动？是否避免了长段解释和背景知识？",
            "【动作验证】每个步骤是否有验证方法？用户如何知道这步做对了？",
            "【步骤数量】步骤是否控制在 7 步以内？是否能在一屏内显示？"
        ],
        extensions: [
            "【Diátaxis How-to 规范】深入学习：https://diataxis.fr/how-to-guides/ —— 理解 How-to 与其他文档类型的边界。",
            "【Google 步骤式说明】完整指南：https://developers.google.com/style/procedures —— 编号、子步骤、可选步骤的格式规范。",
            "【Microsoft 程序写作】详细规范：https://learn.microsoft.com/en-us/style-guide/procedures-instructions/ —— 位置说明、简化序列、无障碍考量。",
            "【比较同一主题】找一个技术话题，比较其官方 Tutorial 和 How-to（如 Django、React），观察两者在假设、深度、风格上的差异。"
        ],
        sourceUrls: [
            "https://diataxis.fr/how-to-guides/",
            "https://developers.google.com/style/procedures",
            "https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions"
        ]
    },
    "tw-w5-3": {
        lessonId: "tw-w5-3",
        background: [
            "【Reference 定义】Diátaxis：参考文档是'技术性描述'，以信息为导向。它提供用户在工作中所需的理论性知识，确保用户有'真理和确定性'的坚实基础。",
            "【核心特点】Reference 很少被阅读，常被查阅——用户在工作时快速参考，而非从头到尾阅读。结构比叙述更重要。如同食品包装上的营养信息——用户期待标准化、可信赖的事实陈述。",
            "【仅描述不指导】Diátaxis：采用中立的表述方式，避免混入教学、说明或个人观点。应该'纯粹描述'而非解释，确保'准确性、精确性、完整性和清晰性'。",
            "【镜像产品结构】Diátaxis：文档的逻辑组织应'反映产品的结构'，使用户能同步理解代码与文档。用户在阅读文档时应能在代码中找到对应的位置。",
            "【动词形式】Google：描述方法时使用第三人称单数现在时（Creates、Lists、Gets），而非祈使语气（Create、List、Get）——这更准确地反映方法的功能。"
        ],
        keyDifficulties: [
            "【保持中立描述】避免掺杂教学、解释或意见。这是最难的纪律——写作者总想'帮助'读者理解，但参考文档应只陈述事实。",
            "【一致性的维护】Diátaxis：'参考材料在一致时最有用'——同类内容必须使用完全相同的格式。让用户'在他们期望的地方找到所需材料，采用熟悉的格式'。",
            "【表格的平行结构】Microsoft：表格条目必须保持平行（全是名词或动词开头的短语）。避免空白单元格——用'Not applicable'或'None'代替。",
            "【完整性与简洁性平衡】参考文档需要覆盖所有参数和选项，但每个条目的描述应尽可能简洁——理想情况下每个单元格一行文字。"
        ],
        handsOnPath: [
            "为一个函数或 API 端点写参考文档：参数表格（名称、类型、必需/可选、默认值、描述）、返回值、异常/错误。",
            "使用一致的模板：创建一个参考文档模板，确保所有同类内容使用相同的结构和格式——表头、列顺序、描述风格都要统一。",
            "添加简洁的示例：每个功能点附上最小可用示例，但不要解释原理。示例应能直接复制使用。",
            "检查与代码的对应：确保文档结构与代码结构一致——类、方法、参数的组织方式应该镜像代码。",
            "使用正确的动词形式：方法描述用'Creates a new user'而非'Create a new user'。"
        ],
        selfCheck: [
            "【描述纯粹性】你的参考文档是否只描述、不指导？是否避免了教学和解释？",
            "【格式一致性】同类内容是否使用了一致的格式？用户能否快速找到熟悉的结构？",
            "【参数完整性】参数文档是否包含：类型、是否必需、默认值、约束条件？",
            "【表格规范性】表格是否有明确的表头？条目是否保持平行结构？是否避免了空白单元格？",
            "【示例可用性】你是否提供了简洁的使用示例？示例是否可以直接复制使用？"
        ],
        extensions: [
            "【Diátaxis Reference 规范】深入学习：https://diataxis.fr/reference/ —— 理解 Reference 与其他文档类型的边界。",
            "【Stripe API 文档】研究 Stripe API 文档的结构：每个端点的描述、参数、响应、错误的一致格式——业界标杆。",
            "【JSDoc/TSDoc 自动生成】学习使用 JSDoc/TSDoc 从代码生成参考文档：保持代码和文档同步。",
            "【OpenAPI/Swagger】了解 OpenAPI 如何结构化 API 参考：https://swagger.io/specification/ —— 机器可读的参考文档标准。"
        ],
        sourceUrls: [
            "https://diataxis.fr/reference/",
            "https://developers.google.com/style/reference-verbs",
            "https://learn.microsoft.com/en-us/style-guide/scannable-content/tables"
        ]
    },
    "tw-w5-4": {
        lessonId: "tw-w5-4",
        background: [
            "Explanation（概念解释）是'一种深入讨论的处理方式，允许反思'，其本质是以理解为导向。它旨在加深和拓展读者对主题的认知。",
            "Explanation 的核心特征：反思性质——发生在其他活动之后，能带来新的视角；宽阔视角——比操作指南或参考采取更高更广的立场。",
            "Explanation 是独立的：可在远离产品的环境中阅读（甚至可以在浴室读），不依赖于立即的实践。",
            "Explanation 的独特价值：'为读者编织理解的网络，与其他事物相关联'——建立概念之间的联系，提供背景和历史。"
        ],
        keyDifficulties: [
            "与教程和操作指南的区分：Explanation 不应包含步骤式指导。如果你发现自己在写'首先做 X，然后做 Y'，那应该是操作指南。",
            "避免变成参考文档：Explanation 是讨论和反思，不是列举参数和选项。它应该回答'为什么'而非'是什么'。",
            "范围控制：Explanation 容易发散。需要严格界定范围，防止说明性或技术性内容混入，保持焦点。",
            "观点的呈现：Explanation 可以考虑替代方案、反例或不同方法。但要平衡呈现，不要变成单方面的辩护。"
        ],
        handsOnPath: [
            "选择一个设计决策（如'为什么用 X 而不用 Y'），写一篇 Explanation：背景、权衡、选择的原因、局限性。",
            "用图表辅助解释：画一张架构图或流程图，展示组件之间的关系和数据流向。",
            "建立概念联系：在 Explanation 中链接到相关的教程、操作指南和参考文档，编织知识网络。",
            "让一个知道'怎么用'但不知道'为什么这样设计'的人阅读你的 Explanation，检验是否回答了他们的疑问。"
        ],
        selfCheck: [
            "你的 Explanation 是否回答'为什么'而非'怎么做'？是否避免了步骤式指导？",
            "你是否提供了设计决策的背景和历史？读者能否理解选择的原因？",
            "你是否讨论了替代方案和权衡？是否平衡呈现了不同观点？",
            "你的范围是否明确？是否避免了变成参考文档或操作指南？",
            "你是否使用了图表来辅助概念解释？"
        ],
        extensions: [
            "深入学习 Diátaxis 的 Explanation 规范：https://diataxis.fr/explanation/",
            "研究架构决策记录（ADR）的写法：https://adr.github.io/ —— 结构化记录设计决策。",
            "学习 C4 Model 画架构图：https://c4model.com/ —— 从上下文到代码分层展示系统架构。",
            "阅读优秀的技术博客（如 Martin Fowler、Netflix Tech Blog），学习如何解释复杂概念。"
        ],
        sourceUrls: [
            "https://diataxis.fr/explanation/",
            "https://developers.google.com/style/headings",
            "https://podcast.writethedocs.org/2020/07/19/episode-30-documentation-templates/"
        ]
    }
}
