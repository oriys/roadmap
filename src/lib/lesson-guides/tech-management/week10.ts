import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "tm-10-1": {
        lessonId: "tm-10-1",
        background: [
            "【Team Topologies 核心】Matthew Skelton 和 Manuel Pais 在《Team Topologies》中提出了四种基本团队类型，旨在优化团队间的认知负荷和协作效率。Martin Fowler 评价道：'A crucial insight of Team Topologies is that the primary benefit of a platform is to reduce the cognitive load on stream-aligned teams'——平台的主要价值在于减少流对齐团队的认知负荷。",
            "【四种团队类型】框架定义了四种团队类型：1) Stream-Aligned Team（流对齐团队）——直接对齐业务价值流，端到端负责特定业务领域；2) Enabling Team（赋能团队）——帮助其他团队掌握新技能或技术；3) Platform Team（平台团队）——提供共享服务和基础设施；4) Complicated-Subsystem Team（复杂子系统团队）——处理需要深度专业化的复杂技术领域。",
            "【三种交互模式】团队通过三种定义明确的模式协调：Collaboration（协作）——两个团队紧密合作解决共同问题；X-as-a-Service——一个团队以自服务方式向其他团队提供能力；Facilitating（辅导）——一个团队帮助另一个团队发展能力然后退出。",
            "【康威定律】Mel Conway 在 1968 年的论文中提出：'Any organization that designs a system will produce a design whose structure is a copy of the organization\\'s communication structure'——任何设计系统的组织都会产出一个结构上复制其沟通结构的设计。系统架构不可避免地反映组织的沟通模式。",
            "【康威定律的机制】康威解释这一定律背后的机制：软件模块要正确协作，它们的设计者必须进行沟通。这种沟通需求不可避免地塑造系统架构，使其镜像组织结构。组织有孤立的部门就会产生碎片化的系统；有集成团队的组织则会产出更具内聚性的设计。"
        ],
        keyDifficulties: [
            "【逆康威策略】Thoughtworks 技术雷达将逆康威策略(Inverse Conway Maneuver)列为'值得尝试'(Trial)的技术。其核心思想是：与其接受组织沟通结构作为固定约束，不如有意识地演进团队结构和组织层级来支持你期望的技术架构，实现'isomorphism with your business architecture'——与业务架构的同构。",
            "【逆康威的实践】通过重组团队以匹配架构目标，组织可以：消除因结构不对齐产生的意外摩擦点；创建更能反映组织意图的系统设计；围绕技术目标实现更顺畅的沟通和协调。本质上是反转传统问题：不再接受组织结构决定架构，而是刻意塑造组织以产出期望的架构。",
            "【认知负荷管理】每个团队能承载的认知负荷有限。Team Topologies 强调：过多的职责、技术栈或领域知识会导致团队疲于奔命。设计团队拓扑时必须考虑认知负荷的合理分配，这是平台团队存在的核心原因。",
            "【交互模式选择】三种交互模式各有适用场景：协作模式适合探索新领域或解决跨领域复杂问题，但持续的紧密协作会增加协调成本；X-as-a-Service 适合稳定的服务消费关系；辅导模式适合能力建设但需要明确退出时机。",
            "【组织设计的灵活性】Conway 在原始论文中强调一个重要的管理原则：由于初始设计很少是最优的，组织需要结构上的灵活性来支持迭代改进。僵化的层级结构会限制有效系统演进所必需的设计迭代。"
        ],
        handsOnPath: [
            "绘制当前组织的团队拓扑图：标记每个团队的类型（流对齐、赋能、平台、复杂子系统），以及团队之间的主要依赖关系。",
            "分析团队之间的交互模式：识别哪些是协作模式、哪些是服务模式、哪些是辅导模式。评估当前模式是否与业务需求匹配。",
            "进行认知负荷评估：与团队讨论他们需要掌握的领域知识、技术栈和外部依赖，识别是否存在过载信号（如频繁加班、质量下降）。",
            "对比当前组织结构与目标系统架构：识别是否存在不对齐，考虑是否需要应用逆康威策略进行组织调整。",
            "阅读《Team Topologies》第 1-4 章，深入理解四种团队类型和三种交互模式的设计原则。"
        ],
        selfCheck: [
            "你能清晰地说明组织中每个团队的类型和职责边界吗？是否存在类型模糊的团队？",
            "团队之间的交互模式是否明确？是否存在模糊地带导致效率损失或冲突？",
            "平台团队是否真正提供自服务能力，还是成为了其他团队的瓶颈？",
            "流对齐团队是否具备端到端交付能力，还是过度依赖其他团队导致交付延迟？",
            "组织的团队结构是否与目标系统架构对齐？如果不对齐，计划如何调整？"
        ],
        extensions: [
            "深入研究逆康威策略及其在组织设计中的应用，包括成功案例和常见陷阱。",
            "了解 Spotify 模型（Squads, Tribes, Chapters, Guilds）与 Team Topologies 的异同和适用场景。",
            "学习如何进行团队认知负荷评估，包括定量和定性方法。",
            "探索团队拓扑在微服务架构和领域驱动设计(DDD)中的应用。"
        ],
        sourceUrls: [
            "https://teamtopologies.com/",
            "https://www.melconway.com/Home/Conways_Law.html",
            "https://www.thoughtworks.com/radar/techniques/inverse-conway-maneuver"
        ]
    },
    "tm-10-2": {
        lessonId: "tm-10-2",
        background: [
            "【依赖的代价】Martin Fowler 在平台文章中指出：'When work items require dependencies across multiple team backlogs, tasks become 10-12x slower'——当工作项需要跨多个团队积压列表时，任务会慢 10-12 倍。减少积压列表耦合(backlog coupling)是高效组织的关键目标。",
            "【依赖类型】跨团队依赖可分为三类：知识依赖（需要其他团队的专业知识）——可以通过文档、培训或赋能团队解决；资源依赖（需要其他团队的人力或工具）——可以通过自服务平台解决；顺序依赖（需要其他团队先完成某些工作）——需要通过 API 契约和异步协作模式解决。",
            "【Planning Interval 机制】SAFe 框架中的计划间隔(Planning Interval, PI)是一个 8-12 周的结构化时间盒，包含 4-5 个开发迭代和 1 个创新与计划迭代。PI 的核心功能之一是依赖管理：'Enables collective visibility and coordination across teams working on interconnected features'——实现跨团队对互连特性的集体可见性和协调。",
            "【API 契约的价值】OpenAPI Initiative 将其规范描述为'a formal standard for describing HTTP APIs'——描述 HTTP API 的正式标准。标准化 API 契约的三大好处：1) 工具灵活性——减少供应商锁定；2) 知识标准化——简化团队协作和人员流动；3) 面向未来——保护基础设施投资。",
            "【契约优先开发】明确的 API 契约让团队能够'understand how an API works, how a sequence of APIs work together, generate client code, create tests, apply design standards'——理解 API 如何工作、如何协作、生成客户端代码、创建测试、应用设计标准。这大大减少了跨团队的沟通和误解。"
        ],
        keyDifficulties: [
            "【协调成本的增长】每增加一个跨团队依赖，协调成本就会指数级增长。高效组织的目标是最小化必要的跨团队依赖，同时保持必要的协作。需要在自主性和对齐之间找到平衡。",
            "【隐性依赖识别】很多依赖是隐性的，不在正式的架构图或项目计划中。定期的依赖审计可以帮助发现这些隐藏的耦合，避免在关键时刻出现意外延期。",
            "【优先级冲突】不同团队有不同的优先级和压力，依赖请求可能被搁置。PI Planning 等机制可以帮助在更高层面进行优先级对齐，但需要投入时间和组织承诺。",
            "【风险传递】一个团队的延期会连锁影响下游团队。需要建立风险预警机制、缓冲时间和备选方案。SAFe 的 PI 规划通过集体可见性帮助提前识别和管理这些风险。",
            "【接口稳定性】模糊的接口边界会导致反复沟通和误解。明确的接口契约（API 契约、SLA、沟通协议）是减少跨团队摩擦的关键。契约变更需要有版本管理和通知机制。"
        ],
        handsOnPath: [
            "绘制团队依赖地图：列出你的团队对其他团队的所有依赖（知识、资源、顺序），按紧迫程度和影响范围排序。",
            "接口契约清晰化：与依赖团队明确接口契约，包括 API 规范、响应时间 SLA、变更通知流程、版本管理策略。",
            "建立依赖同步机制：如果没有类似 PI Planning 的机制，建立定期的跨团队依赖同步会议，提前识别风险和阻塞。",
            "选择一个高摩擦依赖进行改进实验：分析是否可以通过技术手段（如自服务 API）或组织手段（如能力转移）来消除或减轻这个依赖。",
            "引入 API 契约测试(Contract Testing)：确保提供方和消费方对接口的理解一致，变更时能及时发现兼容性问题。"
        ],
        selfCheck: [
            "你能列出团队当前的主要跨团队依赖吗？哪些是阻塞性的，哪些是可以异步处理的？",
            "依赖团队的响应时间是否可预期？是否有明确的 SLA？当 SLA 被打破时有什么升级机制？",
            "当依赖方延期时，你有什么备选方案？是否预留了缓冲时间？",
            "过去一个季度因为跨团队依赖导致的延期有多少次？这些延期是否可以被提前识别？",
            "团队之间的 API 契约是否明确、文档化并被遵守？变更时是否有通知和协商机制？"
        ],
        extensions: [
            "学习价值流图(Value Stream Mapping)方法，识别跨团队瓶颈和价值流动中的浪费。",
            "研究微服务架构中的服务间依赖管理，包括服务网格、断路器等模式。",
            "了解特性团队(Feature Team) vs 组件团队(Component Team)的权衡，以及混合模式。",
            "探索 Consumer-Driven Contract Testing（消费者驱动的契约测试），如 Pact 框架。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Dynamics-Software-Development-Jim-McCarthy/dp/1556158238",
            "https://framework.scaledagile.com/program-increment/",
            "https://www.openapis.org/"
        ]
    },
    "tm-10-3": {
        lessonId: "tm-10-3",
        background: [
            "【数字平台定义】Martin Fowler 将数字平台定义为：'A foundation of self-service APIs, tools, services, knowledge and support arranged as a compelling internal product, enabling autonomous delivery teams to ship features faster with reduced coordination'——一个由自服务 API、工具、服务、知识和支持组成的基础，作为引人注目的内部产品，使自主交付团队能够更快地发布功能并减少协调。",
            "【自服务是核心】平台必须提供'self-service provisioning, configuration, and management without requiring teams to submit tickets or wait for other teams\\' backlogs'——自服务的配置、配置和管理，无需提交工单或等待其他团队的积压处理。这是区分真正平台和伪装成平台的基础设施团队的关键。",
            "【平台即产品】平台必须是'compelling to use—they cannot rely solely on mandates. They compete with alternatives teams might build independently'——引人注目、令人愿意使用——不能仅靠强制。它们与团队可能独立构建的替代方案竞争。强制使用会引起抵触，价值证明才能吸引用户。",
            "【引人注目的平台特征】优秀平台的特征包括：大多数用例自服务、可组合的离散服务可独立使用、灵活而非强制僵化的工作流、简单的入门流程和指南、默认安全合规、维护良好并保持更新。",
            "【平台的关键好处】自主性驱动：更快的上市时间、更多的创新、更高的员工参与度、消除团队依赖。但平台不仅仅是代码——还需要内部咨询、培训和布道。"
        ],
        keyDifficulties: [
            "【用户采纳挑战】内部平台最大的挑战是获得用户采纳。Fowler 强调：'Platforms must be compelling to use—they cannot rely solely on mandates'——平台必须令人愿意使用，不能仅靠强制。需要通过价值证明和优秀的用户体验来吸引用户。",
            "【避免平台陷阱】常见的平台陷阱包括：简单地将现有的锁定基础设施重新标记为'平台'；在没有验证需求的情况下大规模构建；忽视培训和文档等非代码工作；强制使用而非通过价值吸引。",
            "【从小处开始】Fowler 建议：'Start small with proven needs rather than guessing requirements upfront'——从已验证的需求开始，而非提前猜测需求。MVP 方法同样适用于内部平台。",
            "【平衡标准化与灵活性】不同团队有不同的需求，平台团队需要在标准化（一致性、可维护性）和灵活性（满足特殊需求）之间找到平衡。提供'铺好的路'(paved roads)作为默认选项，但允许有理由的偏离。",
            "【技术债务风险】平台如果设计不当，会成为全组织的技术债务来源，影响所有使用平台的团队。平台的技术决策需要更高的标准和更多的审慎。"
        ],
        handsOnPath: [
            "内部平台审计：盘点组织现有的内部平台或共享服务，评估它们是否真正提供自服务能力，还是仍然需要大量人工干预。",
            "用户访谈：与内部平台的用户（开发者）交流，了解他们的痛点、需求和对当前平台的评价。使用产品管理方法。",
            "自服务程度评估：对每个平台功能，评估用户是否可以完全自服务，还是需要提交工单或等待。识别瓶颈并制定改进计划。",
            "建立平台度量：为内部平台建立使用度量，包括采纳率、自服务比例、用户满意度(NPS)、平均上手时间。",
            "阅读 Martin Fowler 的'Talk About Platforms'文章，理解平台即产品的完整理念和实践建议。"
        ],
        selfCheck: [
            "组织的内部平台是否真正提供自服务能力？用户是否需要等待平台团队才能完成工作？",
            "平台团队是否像产品团队一样运营——有用户研究、路线图、迭代发布和反馈收集吗？",
            "内部平台的使用率和满意度如何？有没有定量和定性的度量？",
            "平台是'铺路'还是'造墙'？用户是否有选择的余地，还是被强制使用不合适的方案？",
            "平台的技术决策是否经过充分审慎？是否考虑到对所有消费团队的影响？"
        ],
        extensions: [
            "研究 Netflix、Spotify、Airbnb 等公司的内部平台实践，学习他们如何构建和运营开发者平台。",
            "了解 Backstage（Spotify 开源的开发者门户）如何统一服务目录、文档和工具。",
            "学习内部开源(Inner Source)模式，允许不同团队对共享代码库进行贡献。",
            "探索平台工程(Platform Engineering)的最新趋势，包括 AI 增强的平台能力。"
        ],
        sourceUrls: [
            "https://platformengineering.org/blog/what-is-platform-engineering",
            "https://internaldeveloperplatform.org/",
            "https://martinfowler.com/articles/talk-about-platforms.html"
        ]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "tm-10-1": [
        {
            id: "tm-10-1-q1",
            question: "Team Topologies 定义的四种基本团队类型是什么？",
            options: [
                "开发团队、测试团队、运维团队、产品团队",
                "Stream-Aligned、Enabling、Platform、Complicated-Subsystem",
                "前端团队、后端团队、数据团队、基础设施团队",
                "核心团队、支持团队、外包团队、管理团队"
            ],
            answer: 1,
            rationale: "Team Topologies 定义了四种团队类型：Stream-Aligned（流对齐）、Enabling（赋能）、Platform（平台）、Complicated-Subsystem（复杂子系统）。"
        },
        {
            id: "tm-10-1-q2",
            question: "根据 Martin Fowler 的评价，平台的主要价值是什么？",
            options: [
                "提供最新的技术栈",
                "减少流对齐团队的认知负荷",
                "集中控制所有技术决策",
                "降低基础设施成本"
            ],
            answer: 1,
            rationale: "Martin Fowler 评价道：'A crucial insight of Team Topologies is that the primary benefit of a platform is to reduce the cognitive load on stream-aligned teams'——平台的主要价值在于减少流对齐团队的认知负荷。"
        },
        {
            id: "tm-10-1-q3",
            question: "康威定律（Conway's Law）的核心含义是什么？",
            options: [
                "软件复杂度随时间增长",
                "任何设计系统的组织都会产出一个结构上复制其沟通结构的设计",
                "团队规模应该限制在两个披萨能喂饱的人数",
                "技术债务会指数增长"
            ],
            answer: 1,
            rationale: "Conway 在 1968 年提出：'Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure'——系统设计反映组织沟通结构。"
        },
        {
            id: "tm-10-1-q4",
            question: "逆康威策略（Inverse Conway Maneuver）的核心思想是什么？",
            options: [
                "让系统架构适应现有组织结构",
                "有意识地演进团队结构来支持期望的技术架构",
                "保持组织结构不变",
                "让每个团队自己决定架构"
            ],
            answer: 1,
            rationale: "逆康威策略的核心是：与其接受组织沟通结构作为固定约束，不如有意识地演进团队结构和组织层级来支持期望的技术架构，实现与业务架构的同构。"
        },
        {
            id: "tm-10-1-q5",
            question: "Team Topologies 定义的三种团队交互模式是什么？",
            options: [
                "同步、异步、混合",
                "Collaboration、X-as-a-Service、Facilitating",
                "串行、并行、分布式",
                "拉取、推送、订阅"
            ],
            answer: 1,
            rationale: "Team Topologies 定义了三种交互模式：Collaboration（协作）——紧密合作解决共同问题；X-as-a-Service——自服务方式提供能力；Facilitating（辅导）——帮助发展能力然后退出。"
        },
        {
            id: "tm-10-1-q6",
            question: "Stream-Aligned Team（流对齐团队）的主要特征是什么？",
            options: [
                "负责构建内部平台",
                "直接对齐业务价值流，端到端负责特定业务领域",
                "帮助其他团队掌握新技能",
                "负责高度复杂的技术子系统"
            ],
            answer: 1,
            rationale: "流对齐团队直接对齐业务价值流，端到端负责特定业务领域，是组织的主力团队，具有完整的交付能力。"
        },
        {
            id: "tm-10-1-q7",
            question: "Enabling Team（赋能团队）的职责是什么？",
            options: [
                "直接交付业务功能",
                "帮助其他团队掌握新技能或技术",
                "维护生产环境",
                "管理项目进度"
            ],
            answer: 1,
            rationale: "赋能团队帮助其他团队掌握新技能或技术，不直接交付业务功能，而是通过培训、辅导和临时支持来提升其他团队的能力。"
        },
        {
            id: "tm-10-1-q8",
            question: "认知负荷在团队设计中的作用是什么？",
            options: [
                "可以忽略不计",
                "每个团队能承载的认知负荷有限，需要通过团队拓扑合理分配",
                "只影响新员工",
                "只与技术复杂度相关"
            ],
            answer: 1,
            rationale: "每个团队能承载的认知负荷有限，过多的职责、技术栈或领域知识会导致团队疲于奔命，需要通过团队拓扑来合理分配认知负荷。"
        },
        {
            id: "tm-10-1-q9",
            question: "康威定律背后的机制是什么？",
            options: [
                "管理层的偏好决定架构",
                "软件模块要正确协作，其设计者必须进行沟通，这塑造了系统架构",
                "技术选型决定团队结构",
                "预算分配决定系统设计"
            ],
            answer: 1,
            rationale: "Conway 解释：软件模块要正确协作，它们的设计者必须进行沟通。这种沟通需求不可避免地塑造系统架构，使其镜像组织结构。"
        },
        {
            id: "tm-10-1-q10",
            question: "Thoughtworks 技术雷达对逆康威策略的评级是什么？",
            options: [
                "Adopt（采用）",
                "Trial（尝试）",
                "Assess（评估）",
                "Hold（暂缓）"
            ],
            answer: 1,
            rationale: "Thoughtworks 技术雷达将逆康威策略列为'Trial'（尝试）状态，意味着'值得追求'，建议在能够承担风险的项目上尝试。"
        },
        {
            id: "tm-10-1-q11",
            question: "《Team Topologies》的作者是谁？",
            options: [
                "Martin Fowler 和 Kent Beck",
                "Matthew Skelton 和 Manuel Pais",
                "Eric Evans 和 Vaughn Vernon",
                "Sam Newman 和 Chris Richardson"
            ],
            answer: 1,
            rationale: "《Team Topologies》由 Matthew Skelton 和 Manuel Pais 合著，提出了优化团队间认知负荷和协作效率的框架。"
        },
        {
            id: "tm-10-1-q12",
            question: "协作模式（Collaboration）最适合什么场景？",
            options: [
                "稳定的服务消费关系",
                "两个团队需要紧密合作探索新领域或解决跨领域复杂问题时",
                "日常运维工作",
                "独立交付的项目"
            ],
            answer: 1,
            rationale: "协作模式适合两个团队需要紧密合作的场景，如探索新领域或解决跨领域的复杂问题。但持续的紧密协作会增加协调成本，应该是临时性的。"
        }
    ],
    "tm-10-2": [
        {
            id: "tm-10-2-q1",
            question: "根据 Martin Fowler 的研究，跨多个团队积压列表的工作项会慢多少倍？",
            options: [
                "2-3 倍",
                "5-6 倍",
                "10-12 倍",
                "20-30 倍"
            ],
            answer: 2,
            rationale: "Fowler 指出：'When work items require dependencies across multiple team backlogs, tasks become 10-12x slower'——跨多个团队积压列表的任务会慢 10-12 倍。"
        },
        {
            id: "tm-10-2-q2",
            question: "跨团队依赖可以分为哪三类？",
            options: [
                "技术依赖、业务依赖、管理依赖",
                "知识依赖、资源依赖、顺序依赖",
                "内部依赖、外部依赖、混合依赖",
                "强依赖、弱依赖、可选依赖"
            ],
            answer: 1,
            rationale: "跨团队依赖可分为三类：知识依赖（需要专业知识）、资源依赖（需要人力或工具）、顺序依赖（需要先完成某些工作）。"
        },
        {
            id: "tm-10-2-q3",
            question: "SAFe 中 Planning Interval (PI) 的典型时长是多少？",
            options: [
                "2-4 周",
                "8-12 周",
                "4-6 个月",
                "1 年"
            ],
            answer: 1,
            rationale: "Planning Interval 是一个 8-12 周的结构化时间盒，通常包含 4-5 个开发迭代和 1 个创新与计划迭代。"
        },
        {
            id: "tm-10-2-q4",
            question: "OpenAPI Initiative 将其规范描述为什么？",
            options: [
                "一种编程语言",
                "描述 HTTP API 的正式标准",
                "测试框架",
                "部署工具"
            ],
            answer: 1,
            rationale: "OpenAPI Initiative 将其规范描述为'a formal standard for describing HTTP APIs'——描述 HTTP API 的正式标准，是供应商中立、可移植的框架。"
        },
        {
            id: "tm-10-2-q5",
            question: "跨团队依赖增加时，协调成本如何变化？",
            options: [
                "线性增长",
                "保持不变",
                "指数级增长",
                "逐渐减少"
            ],
            answer: 2,
            rationale: "每增加一个跨团队依赖，协调成本就会指数级增长。这是高效组织最小化依赖的主要原因。"
        },
        {
            id: "tm-10-2-q6",
            question: "PI Planning 在依赖管理中的核心功能是什么？",
            options: [
                "分配预算",
                "实现跨团队对互连特性的集体可见性和协调",
                "评估个人绩效",
                "审批技术方案"
            ],
            answer: 1,
            rationale: "PI Planning 的核心功能是'Enables collective visibility and coordination across teams working on interconnected features'——实现跨团队对互连特性的集体可见性和协调。"
        },
        {
            id: "tm-10-2-q7",
            question: "标准化 API 契约的好处不包括？",
            options: [
                "工具灵活性——减少供应商锁定",
                "知识标准化——简化团队协作",
                "增加代码行数",
                "面向未来——保护基础设施投资"
            ],
            answer: 2,
            rationale: "标准化 API 契约的三大好处是：工具灵活性、知识标准化、面向未来。增加代码行数不是其好处。"
        },
        {
            id: "tm-10-2-q8",
            question: "隐性依赖的问题是什么？",
            options: [
                "容易被识别",
                "需要主动挖掘，否则会在关键时刻导致意外延期",
                "不影响项目进度",
                "自动会被解决"
            ],
            answer: 1,
            rationale: "很多依赖是隐性的，不在正式的架构图或项目计划中，需要主动挖掘，否则会在关键时刻出现意外延期。"
        },
        {
            id: "tm-10-2-q9",
            question: "处理依赖团队延期风险的方法是什么？",
            options: [
                "等待对方完成",
                "建立风险预警机制、缓冲时间和备选方案",
                "向上级投诉",
                "取消依赖需求"
            ],
            answer: 1,
            rationale: "一个团队的延期会连锁影响下游团队，需要建立风险预警机制、缓冲时间和备选方案，PI Planning 通过集体可见性帮助提前识别这些风险。"
        },
        {
            id: "tm-10-2-q10",
            question: "明确的 API 契约能帮助团队做什么？",
            options: [
                "只能生成文档",
                "理解 API 如何工作、生成客户端代码、创建测试、应用设计标准",
                "只能进行部署",
                "只能进行监控"
            ],
            answer: 1,
            rationale: "明确的 API 契约让团队能够'understand how an API works, how a sequence of APIs work together, generate client code, create tests, apply design standards'。"
        },
        {
            id: "tm-10-2-q11",
            question: "高效组织在依赖管理上的目标是什么？",
            options: [
                "增加跨团队协作",
                "最小化必要的跨团队依赖，同时保持必要的协作",
                "集中所有决策权",
                "统一所有团队的技术栈"
            ],
            answer: 1,
            rationale: "高效组织的目标是最小化必要的跨团队依赖，同时保持必要的协作，需要在自主性和对齐之间找到平衡。"
        },
        {
            id: "tm-10-2-q12",
            question: "Consumer-Driven Contract Testing 的作用是什么？",
            options: [
                "测试用户界面",
                "确保 API 提供方和消费方对接口的理解一致",
                "测试数据库性能",
                "测试网络延迟"
            ],
            answer: 1,
            rationale: "Consumer-Driven Contract Testing（消费者驱动的契约测试）确保提供方和消费方对接口的理解一致，变更时能及时发现兼容性问题。"
        }
    ],
    "tm-10-3": [
        {
            id: "tm-10-3-q1",
            question: "Martin Fowler 对数字平台的定义是什么？",
            options: [
                "一个技术工具集合",
                "一个由自服务 API、工具、服务、知识和支持组成的内部产品基础",
                "一个外部服务市场",
                "一个代码仓库"
            ],
            answer: 1,
            rationale: "Fowler 定义数字平台为'A foundation of self-service APIs, tools, services, knowledge and support arranged as a compelling internal product, enabling autonomous delivery teams to ship features faster with reduced coordination'。"
        },
        {
            id: "tm-10-3-q2",
            question: "关于平台的自服务能力，正确的描述是？",
            options: [
                "用户可以通过提交工单获得服务",
                "用户无需提交工单或等待其他团队的积压处理",
                "用户需要平台团队的批准",
                "用户需要管理层审批"
            ],
            answer: 1,
            rationale: "平台必须提供'self-service provisioning, configuration, and management without requiring teams to submit tickets or wait for other teams' backlogs'——无需提交工单或等待。"
        },
        {
            id: "tm-10-3-q3",
            question: "Fowler 强调平台必须具备什么特质？",
            options: [
                "技术最先进",
                "引人注目、令人愿意使用，不能仅靠强制",
                "功能最全面",
                "成本最低"
            ],
            answer: 1,
            rationale: "Fowler 强调：'Platforms must be compelling to use—they cannot rely solely on mandates. They compete with alternatives teams might build independently'——平台必须引人注目，不能仅靠强制。"
        },
        {
            id: "tm-10-3-q4",
            question: "优秀内部平台的特征不包括？",
            options: [
                "大多数用例自服务",
                "可组合的离散服务",
                "强制所有团队使用统一方式",
                "默认安全合规"
            ],
            answer: 2,
            rationale: "优秀平台的特征包括：自服务、可组合、灵活而非强制僵化的工作流、简单入门、默认安全合规、维护良好。强制统一方式不是优秀平台的特征。"
        },
        {
            id: "tm-10-3-q5",
            question: "Fowler 建议如何开始构建平台？",
            options: [
                "一次性构建完整功能",
                "从已验证的需求开始，而非提前猜测需求",
                "照搬其他公司的方案",
                "让管理层决定功能"
            ],
            answer: 1,
            rationale: "Fowler 建议：'Start small with proven needs rather than guessing requirements upfront'——从已验证的需求开始，而非提前猜测需求。MVP 方法同样适用于内部平台。"
        },
        {
            id: "tm-10-3-q6",
            question: "平台不仅仅是代码，还需要什么？",
            options: [
                "更多代码",
                "内部咨询、培训和布道",
                "更多服务器",
                "更多预算"
            ],
            answer: 1,
            rationale: "Fowler 强调：'Platforms require more than code—they need internal consulting, training, and evangelism'——平台不仅仅是代码，还需要内部咨询、培训和布道。"
        },
        {
            id: "tm-10-3-q7",
            question: "内部平台面临的最大挑战是什么？",
            options: [
                "技术实现难度",
                "获得用户采纳",
                "预算限制",
                "团队规模"
            ],
            answer: 1,
            rationale: "内部平台最大的挑战是获得用户采纳。强制使用会引起抵触，需要通过价值证明和优秀的用户体验来吸引用户。"
        },
        {
            id: "tm-10-3-q8",
            question: "平台设计不当会带来什么问题？",
            options: [
                "只影响平台团队",
                "成为全组织的技术债务来源",
                "容易被替换",
                "不会有长期影响"
            ],
            answer: 1,
            rationale: "平台如果设计不当，会成为全组织的技术债务来源，影响所有使用平台的团队。平台的技术决策需要更高的标准。"
        },
        {
            id: "tm-10-3-q9",
            question: "常见的平台陷阱不包括？",
            options: [
                "简单地将现有基础设施重新标记为'平台'",
                "在没有验证需求的情况下大规模构建",
                "从已验证的小需求开始迭代",
                "强制使用而非通过价值吸引"
            ],
            answer: 2,
            rationale: "常见陷阱包括：简单重新标记、大规模构建未验证需求、忽视非代码工作、强制使用。从小需求开始迭代是正确做法，不是陷阱。"
        },
        {
            id: "tm-10-3-q10",
            question: "自主性驱动的平台好处包括什么？",
            options: [
                "增加团队依赖",
                "更快的上市时间、更多的创新、更高的员工参与度、消除团队依赖",
                "增加协调成本",
                "减少创新"
            ],
            answer: 1,
            rationale: "自主性驱动的好处包括：更快的上市时间(faster time-to-market)、更多的创新(increased innovation)、更高的员工参与度(higher staff engagement)、消除团队依赖(eliminated team dependencies)。"
        },
        {
            id: "tm-10-3-q11",
            question: "平台团队应该如何运营？",
            options: [
                "像传统 IT 支持团队一样",
                "像产品团队一样——有用户研究、路线图、迭代发布和反馈收集",
                "只关注技术实现",
                "按需响应请求"
            ],
            answer: 1,
            rationale: "平台团队应该像产品团队一样运营，应用产品管理方法：用户研究、路线图规划、迭代发布、反馈收集。"
        },
        {
            id: "tm-10-3-q12",
            question: "内部开源（Inner Source）模式的特点是什么？",
            options: [
                "将内部代码开源到公网",
                "在组织内部应用开源协作模式，允许跨团队贡献",
                "只使用开源软件",
                "禁止使用商业软件"
            ],
            answer: 1,
            rationale: "内部开源是在组织内部应用开源协作模式，允许不同团队对共享代码库进行贡献，打破孤岛，促进协作。"
        }
    ]
}
