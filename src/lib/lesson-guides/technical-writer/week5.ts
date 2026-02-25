import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

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
            "【Explanation 定义】Diátaxis：'Explanation is a discursive treatment of a subject, that permits reflection'——允许反思的论述性处理，以理解为导向，提供概念层面的背景和清晰度。",
            "【核心问题】Explanation 回答的问题是：'Can you tell me about...?'——告诉我关于 X 的事情。它通过反思而非即时行动来加深读者理解。",
            "【宽阔视角】Diátaxis：Explanation 采用比 Tutorial、How-to、Reference 更宽阔的视角——它站得更高，看得更广，将主题放在更大的背景下讨论。",
            "【独立可读】Explanation 可以在远离产品的环境中阅读（甚至可以在浴室读）——它不依赖于立即的实践，是'反思性的'而非'行动性的'。",
            "【知识凝聚】Diátaxis：没有 Explanation，从业者的知识会'松散、碎片化和脆弱'——Explanation 创造知识的凝聚力，将片段连接成整体。"
        ],
        keyDifficulties: [
            "【与其他文档类型的边界】Explanation 不应包含步骤式指导（那是 How-to）或纯粹的技术描述（那是 Reference）。如果发现自己在写'首先做 X'，应该停下来重新定位。",
            "【范围控制】Explanation 容易发散。需要严格界定范围（keep boundaries tight），防止说明性或技术性内容混入，保持焦点在理解上。",
            "【观点的平衡呈现】Diátaxis：Explanation 可以'admit opinion and perspective'，但要同时考虑多种观点。不要变成单方面的辩护或推销。",
            "【讨论而非指导】使用论述性、讨论式的语言。承认系统中嵌入的人类创造性和决策过程——这是 Explanation 独有的空间。"
        ],
        handsOnPath: [
            "选择一个设计决策（如'为什么用 X 而不用 Y'），写一篇 Explanation：背景、权衡、选择的原因、局限性。",
            "用图表辅助解释：画一张架构图或流程图，展示组件之间的关系和数据流向——视觉化帮助建立心智模型。",
            "建立概念联系：在 Explanation 中链接到相关的 Tutorial、How-to 和 Reference 文档，编织知识网络。",
            "用名词短语写标题：'认证架构'而非'如何配置认证'。Google：概念性文档使用名词短语标题。",
            "让一个知道'怎么用'但不知道'为什么这样设计'的人阅读你的 Explanation，检验是否回答了他们的疑问。"
        ],
        selfCheck: [
            "【内容定位】你的 Explanation 是否回答'为什么'而非'怎么做'？是否避免了步骤式指导？",
            "【背景提供】你是否提供了设计决策的背景和历史？读者能否理解选择的原因？",
            "【观点平衡】你是否讨论了替代方案和权衡？是否平衡呈现了不同观点？",
            "【范围控制】你的范围是否明确？是否避免了变成 Reference 或 How-to？",
            "【视觉辅助】你是否使用了图表来辅助概念解释？"
        ],
        extensions: [
            "【Diátaxis Explanation 规范】深入学习：https://diataxis.fr/explanation/ —— 理解五大核心实践。",
            "【架构决策记录 ADR】学习 ADR 写法：https://adr.github.io/ —— 结构化记录设计决策的标准格式。",
            "【C4 Model 架构图】学习用 C4 画架构图：https://c4model.com/ —— 从上下文到代码分层展示系统架构。",
            "【优秀范例】Harold McGee 的《On Food and Cooking》是 Explanation 的典范——它通过多角度阐释烹饪技艺，不提供食谱或步骤指导。"
        ],
        sourceUrls: [
            "https://diataxis.fr/explanation/",
            "https://developers.google.com/style/headings",
            "https://podcast.writethedocs.org/2020/07/19/episode-30-documentation-templates/"
        ]
    }
}

export const week5Quizzes: Record<string, QuizQuestion[]> = {
    "tw-w5-1": [
        {
            id: "tw-w5-1-q1",
            question: "Diátaxis 框架中，Tutorial 的核心目标是什么？",
            options: [
                "让用户快速完成任务",
                "在导师指导下的学习体验，目标是让学习者获得技能",
                "提供完整的 API 参考信息",
                "解释系统设计决策的原因"
            ],
            answer: 1,
            rationale: "Diátaxis 定义：Tutorial 是'在导师指导下的学习体验，始终以学习为导向'——目标是获得技能而非完成任务。"
        },
        {
            id: "tw-w5-1-q2",
            question: "Tutorial 写作中最常犯的错误是什么？",
            options: [
                "步骤太少，内容太简单",
                "解释太多，偏离了让学习者'做'的目标",
                "使用了太多代码示例",
                "没有提供足够的替代方案"
            ],
            answer: 1,
            rationale: "教程写作者常犯的错误是解释太多。教程的目标是让学习者'做'，而非'理解'。长解释应链接到 Explanation 文档。"
        },
        {
            id: "tw-w5-1-q3",
            question: "Diátaxis 认为 Tutorial 为什么必须做到'完美可靠性'？",
            options: [
                "因为教程通常用于认证考试",
                "因为教程必须每次都能成功运行，无法像真实教师那样在现场纠正错误",
                "因为教程会被翻译成多种语言",
                "因为教程是唯一会被完整阅读的文档"
            ],
            answer: 1,
            rationale: "Diátaxis：教程必须激发信心——它必须每次都能成功运行，无法像真实教师那样在现场纠正错误，因此可靠性至关重要。"
        }
    ],
    "tw-w5-2": [
        {
            id: "tw-w5-2-q1",
            question: "Diátaxis 中 How-to 与 Tutorial 的关键区别是什么？",
            options: [
                "How-to 更长更详细",
                "Tutorial 面向不知道要什么的学习者，How-to 面向有明确目标的用户",
                "How-to 只有文字没有代码",
                "Tutorial 是在线文档，How-to 是 PDF"
            ],
            answer: 1,
            rationale: "Tutorial 面向学习者（不知道要什么），How-to 面向有目标的用户（知道要什么）。如同食谱——读者知道想做什么菜，只需要步骤。"
        },
        {
            id: "tw-w5-2-q2",
            question: "Microsoft 建议 How-to 的步骤数量应控制在多少步以内？",
            options: [
                "不超过 3 步",
                "不超过 7 步，最好更少",
                "不超过 15 步",
                "没有数量限制"
            ],
            answer: 1,
            rationale: "Microsoft 建议'限制在 7 步以内，最好更少'——尽量在同一屏幕显示所有步骤，减少用户的认知负担。"
        },
        {
            id: "tw-w5-2-q3",
            question: "Google 的'动作优先原则'要求步骤式说明如何排列信息？",
            options: [
                "先讲背景知识再给操作步骤",
                "先陈述动作再陈述结果，先给位置/上下文再给动作",
                "按字母顺序排列所有步骤",
                "先展示结果截图再给操作步骤"
            ],
            answer: 1,
            rationale: "Google：'State the action first and the result second'——先陈述动作，再陈述结果。先给位置/上下文，再给动作；先给目标，再给动作。"
        }
    ],
    "tw-w5-3": [
        {
            id: "tw-w5-3-q1",
            question: "Diátaxis 对 Reference 文档的核心写作要求是什么？",
            options: [
                "提供详细的教学和解释",
                "采用中立的表述方式，仅描述不指导",
                "用故事性的叙述吸引读者",
                "重点展示最佳实践和设计模式"
            ],
            answer: 1,
            rationale: "Diátaxis 要求 Reference 文档'纯粹描述'而非解释，采用中立的表述方式，避免混入教学、说明或个人观点，确保准确性、精确性和完整性。"
        },
        {
            id: "tw-w5-3-q2",
            question: "Google 规范中，Reference 文档的方法描述应使用什么动词形式？",
            options: [
                "祈使语气（Create、List、Get）",
                "第三人称单数现在时（Creates、Lists、Gets）",
                "过去时态（Created、Listed、Got）",
                "进行时态（Creating、Listing、Getting）"
            ],
            answer: 1,
            rationale: "Google 规范要求描述方法时使用第三人称单数现在时（Creates、Lists、Gets），而非祈使语气——这更准确地反映方法的功能。"
        },
        {
            id: "tw-w5-3-q3",
            question: "为什么 Reference 文档的一致性比叙述性更重要？",
            options: [
                "因为 Reference 文档需要被翻译成多种语言",
                "因为 Reference 很少被阅读常被查阅，用户期待标准化格式以快速找到信息",
                "因为 Reference 文档通常由多人同时编写",
                "因为搜索引擎偏好格式一致的页面"
            ],
            answer: 1,
            rationale: "Reference 很少被阅读，常被查阅——用户在工作时快速参考。结构比叙述更重要，如同营养信息标签，用户期待标准化、可信赖的事实陈述。"
        }
    ],
    "tw-w5-4": [
        {
            id: "tw-w5-4-q1",
            question: "Diátaxis 中 Explanation 文档的核心特征是什么？",
            options: [
                "提供步骤式的操作指南",
                "允许反思的论述性处理，以理解为导向，采用比其他类型更宽阔的视角",
                "精确描述 API 参数和返回值",
                "从零开始教会用户使用功能"
            ],
            answer: 1,
            rationale: "Diátaxis：Explanation 是'允许反思的论述性处理'，以理解为导向。它采用比 Tutorial、How-to、Reference 更宽阔的视角，将主题放在更大的背景下讨论。"
        },
        {
            id: "tw-w5-4-q2",
            question: "Explanation 文档的标题应该使用什么格式？",
            options: [
                "祈使句（如'配置认证'）",
                "疑问句（如'如何配置认证？'）",
                "名词短语（如'认证架构'）",
                "动词短语（如'使用认证功能'）"
            ],
            answer: 2,
            rationale: "Google 建议概念性文档使用名词短语标题——'认证架构'而非'如何配置认证'，这清楚表明文档的目的是解释而非指导。"
        },
        {
            id: "tw-w5-4-q3",
            question: "为什么说没有 Explanation 文档，从业者的知识会'松散、碎片化和脆弱'？",
            options: [
                "因为 Explanation 包含所有 API 参数的描述",
                "因为 Explanation 创造知识的凝聚力，将片段连接成整体，建立心智模型",
                "因为 Explanation 是唯一包含代码示例的文档类型",
                "因为没有 Explanation 用户无法安装软件"
            ],
            answer: 1,
            rationale: "Diátaxis 指出：没有 Explanation，从业者的知识会'松散、碎片化和脆弱'——Explanation 创造知识的凝聚力，将片段连接成整体。"
        }
    ]
}
