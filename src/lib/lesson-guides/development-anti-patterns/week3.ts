import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "ap-3-1": {
        lessonId: "ap-3-1",
        background: [
            "【上帝对象定义】God Object（上帝对象）是面向对象编程中的反模式，指一个类'takes on too many responsibilities'——承担了过多职责，违反了单一职责原则(SRP)。",
            "【单一职责原则】SRP 要求一个类应该只有一个改变的理由。上帝对象恰恰相反，它处理几乎所有事情，导致'tangled software architecture, making the codebase hard to maintain and extend'。",
            "【大泥球定义】Big Ball of Mud 是'a haphazardly structured, sprawling, sloppy, duct-tape-and-baling-wire, spaghetti-code jungle'——缺乏模块化设计的混乱架构，由 Brian Foote 和 Joseph Yoder 于 1997 年提出。",
            "【大泥球特征】典型特征包括：缺乏清晰的架构设计或模块结构；组件紧密耦合且依赖交织；信息在系统各部分间混乱共享，几乎所有重要信息变成全局或重复的。",
            "【Extract Class 重构】当类承担过多职责时，使用 Extract Class 将相关功能和数据提取到新类中。例如将 Person 类中的电话信息提取为独立的 TelephoneNumber 类。"
        ],
        keyDifficulties: [
            "【识别上帝对象】上帝对象的识别信号：类有数千行代码；类名过于通用（如 Manager、Handler、Controller）；类的修改频率远高于其他类；很多功能都依赖这个类。",
            "【大泥球的成因】常见原因：(1) 高压下快速交付缺乏架构关注；(2) 原型代码未被抛弃；(3) 渐进式维护和增量增长侵蚀成熟系统结构；(4) 重构被延迟以交付更多功能。",
            "【变更风险放大】大泥球系统中'changes become riskier because bugs in parts of the system unrelated to where the change was made can show up'——变更风险传播到不相关的部分。",
            "【重构上帝对象】重构策略：识别类中的内聚功能组；使用 Extract Class 创建专注的新类；使用 Move Method 和 Move Field 迁移功能；保持向后兼容的委托方法。"
        ],
        handsOnPath: [
            "识别代码库中的上帝对象：找出代码行数最多的类、被最多其他类依赖的类、修改最频繁的类。",
            "分析上帝对象的职责：列出它处理的所有功能领域，识别可以分离的内聚功能组。",
            "实践 Extract Class：从上帝对象中提取一个内聚的功能组到新类，更新所有调用点。",
            "为大泥球系统绘制依赖图，识别高耦合区域和循环依赖。",
            "建立架构决策记录(ADR)，记录模块边界和职责划分的决策理由。"
        ],
        selfCheck: [
            "什么是上帝对象？它违反了什么设计原则？",
            "如何识别代码库中的上帝对象？有哪些信号？",
            "什么是大泥球架构？谁首次提出这个概念？",
            "大泥球架构是如何形成的？有哪些常见原因？",
            "Extract Class 重构如何帮助解决上帝对象问题？",
            "为什么大泥球系统中的变更风险会传播到不相关的部分？"
        ],
        extensions: [
            "阅读 Brian Foote 和 Joseph Yoder 的原始论文'Big Ball of Mud'，了解这个反模式的完整描述。",
            "学习 SOLID 原则中的单一职责原则(SRP)，理解其与上帝对象的关系。",
            "研究如何使用架构适应度函数(fitness functions)监控系统是否退化为大泥球。",
            "探索 ArchUnit、JDepend 等工具如何自动检测架构违规和模块边界侵蚀。"
        ],
        sourceUrls: [
            "https://en.wikipedia.org/wiki/God_object",
            "http://www.laputan.org/mud/",
            "https://refactoring.com/catalog/extractClass.html"
        ]
    },
    "ap-3-2": {
        lessonId: "ap-3-2",
        background: [
            "【康威定律回顾】系统架构往往反映组织的沟通结构。烟囱式系统(Stovepipe System)正是康威定律负面效应的典型表现——组织孤岛导致系统孤岛。",
            "【烟囱式系统定义】Stovepipe System 指各部门独立建设、缺乏统一标准和集成的系统。每个烟囱都有自己的技术栈、数据存储和接口，无法互操作。",
            "【Team Topologies 框架】Matthew Skelton 和 Manuel Pais 提出的团队组织框架，定义四种团队类型：流对齐团队(Stream-Aligned)、赋能团队(Enabling)、复杂子系统团队(Complicated-Subsystem)、平台团队(Platform)。",
            "【平台团队的价值】Martin Fowler 指出：'A crucial insight of Team Topologies is that the primary benefit of a platform is to reduce cognitive load on stream-aligned teams'——平台的主要价值是减少业务团队的认知负担。",
            "【三种交互模式】团队通过三种模式交互：协作(Collaboration)——紧密合作解决共同问题；即服务(X-as-a-Service)——一个团队向其他团队提供能力；促进(Facilitating)——赋能团队帮助消除障碍和传递知识。"
        ],
        keyDifficulties: [
            "【烟囱系统成因】组织结构导致：每个部门有自己的预算和优先级；缺乏跨部门协调机制；技术选型各自为政；数据定义不统一。",
            "【打破烟囱的挑战】挑战包括：政治阻力（部门保护自己的领地）；技术债务累积（集成成本高）；缺乏全局视角的人员；变更管理困难。",
            "【反向康威机制】有意识地调整团队组织结构以促进期望的系统架构。微服务架构需要围绕业务能力建立自治团队，而非按技术分层。",
            "【平台思维陷阱】避免将平台团队变成瓶颈或看门人。平台应该是自助服务的，目标是赋能而非控制。"
        ],
        handsOnPath: [
            "绘制组织结构图与系统架构图，对比分析烟囱效应的表现。",
            "识别组织中的孤岛：哪些团队有独立的技术栈？哪些数据是重复存储的？哪些接口是定制而非标准化的？",
            "评估当前团队类型：按 Team Topologies 框架，当前团队分别是什么类型？交互模式是否合理？",
            "设计跨团队标准：选择一个领域（如 API 设计、日志格式），建立跨团队共识。",
            "规划平台能力：识别多个团队共同需要的能力，评估是否应该建立平台团队提供。"
        ],
        selfCheck: [
            "什么是烟囱式系统？它与康威定律有什么关系？",
            "烟囱式系统是如何形成的？有哪些组织因素？",
            "Team Topologies 定义的四种团队类型分别是什么？各自的职责是什么？",
            "三种团队交互模式分别是什么？各适用于什么场景？",
            "什么是反向康威机制？如何应用？",
            "平台团队的主要价值是什么？如何避免平台成为瓶颈？"
        ],
        extensions: [
            "阅读《Team Topologies》完整书籍，深入理解团队组织与系统架构的关系。",
            "研究如何建立内部开发者平台(Internal Developer Platform)来打破技术孤岛。",
            "探索 API Gateway 和服务网格如何帮助统一跨团队的通信标准。",
            "学习领域驱动设计(DDD)中的限界上下文如何帮助定义团队边界。"
        ],
        sourceUrls: [
            "https://martinfowler.com/bliki/ConwaysLaw.html",
            "https://teamtopologies.com/",
            "https://martinfowler.com/articles/talk-about-platforms.html"
        ]
    },
    "ap-3-3": {
        lessonId: "ap-3-3",
        background: [
            "【供应商锁定定义】Vendor Lock-in 是'when a customer is essentially forced to continue using a specific vendor's product or service because the cost and effort of switching are prohibitively high'——切换成本过高导致被迫继续使用特定供应商。",
            "【三种云锁定类型】(1) 平台锁定——依赖特定虚拟化平台或运行时；(2) 数据锁定——数据格式或存储机制特定于供应商；(3) 工具锁定——管理工具只能管理特定供应商的环境。",
            "【过度工程定义】Over-engineering 指为了预期但可能永远不会发生的需求而构建过于复杂的解决方案，增加不必要的抽象层和功能。",
            "【内部平台效应】Inner Platform Effect 是过度工程的一种表现：在现有平台上重新实现平台本身的功能，创建'平台上的平台'，通常比直接使用原始平台更复杂、更脆弱。",
            "【供应商锁定的代价】'Today's vendor lock-in is tomorrow's technical debt'——供应商锁定否定了云的核心价值主张：灵活性。当业务逻辑与单一供应商紧密耦合时，各种问题随之而来。"
        ],
        keyDifficulties: [
            "【锁定 vs 优势权衡】供应商锁定'is not always bad if it provides a unique capability that enables you to differentiate from competitors'——需要权衡锁定风险与供应商特有能力带来的竞争优势。",
            "【多云复杂度代价】多云策略虽然降低锁定风险，但增加运维复杂度和成本。坚持单一供应商可以简化 IT 运营，减少需要管理的系统和供应商数量。",
            "【抽象层权衡】构建抽象层可以降低锁定，但增加复杂度和维护成本。需要评估：抽象层的价值是否超过其成本？是否会成为另一种形式的锁定？",
            "【过度工程的诱惑】开发者容易陷入'让系统更灵活、更通用'的陷阱，结果创建了比问题本身更复杂的解决方案。"
        ],
        handsOnPath: [
            "审计当前系统的供应商依赖：列出所有使用的供应商特定 API、服务和数据格式。",
            "评估锁定风险：对每个依赖，评估切换成本、供应商变更风险、是否有替代方案。",
            "识别过度工程：审查系统中的抽象层和框架，是否有'为将来可能需要'而创建但从未使用的？",
            "制定退出策略：为关键供应商依赖制定退出计划，包括数据迁移、API 适配、时间和成本估算。",
            "建立技术选型决策记录：记录为什么选择某个供应商，接受了什么锁定风险，以及缓解措施。"
        ],
        selfCheck: [
            "什么是供应商锁定？为什么说它是云计算的反模式？",
            "云计算中的三种锁定类型分别是什么？",
            "如何平衡供应商锁定风险与供应商特有能力带来的优势？",
            "什么是内部平台效应？它是如何产生的？",
            "多云策略有什么优缺点？",
            "什么时候供应商锁定可能是可接受的？"
        ],
        extensions: [
            "研究 Kubernetes 和容器技术如何帮助实现云无关的应用部署。",
            "学习 AWS Well-Architected Framework 中关于避免供应商锁定的建议。",
            "探索开放标准（如 OpenAPI、CloudEvents）如何促进跨供应商互操作性。",
            "阅读关于内部平台效应的 AntiPatterns 书籍章节。"
        ],
        sourceUrls: [
            "https://www.cloudflare.com/learning/cloud/what-is-vendor-lock-in/",
            "https://en.wikipedia.org/wiki/Vendor_lock-in",
            "https://sourcemaking.com/antipatterns/the-blob"
        ]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "ap-3-1": [
        {
            id: "ap-3-1-q1",
            question: "什么是上帝对象(God Object)反模式？",
            options: [
                "一个设计良好的核心类",
                "一个承担过多职责的类，违反单一职责原则",
                "一个抽象基类",
                "一个单例模式的实现"
            ],
            answer: 1,
            rationale: "上帝对象是一个'takes on too many responsibilities'的类，违反单一职责原则，导致代码难以维护和扩展。"
        },
        {
            id: "ap-3-1-q2",
            question: "识别上帝对象的信号不包括以下哪项？",
            options: [
                "类有数千行代码",
                "类名过于通用如 Manager、Handler",
                "类有完善的单元测试覆盖",
                "很多功能都依赖这个类"
            ],
            answer: 2,
            rationale: "上帝对象的识别信号包括：代码量巨大、命名过于通用、修改频率高、被大量依赖。完善的测试覆盖不是上帝对象的特征。"
        },
        {
            id: "ap-3-1-q3",
            question: "大泥球(Big Ball of Mud)架构的定义是什么？",
            options: [
                "一种微服务架构模式",
                "一种缺乏模块化设计的混乱架构，像杂乱的意大利面条代码丛林",
                "一种分层架构模式",
                "一种事件驱动架构"
            ],
            answer: 1,
            rationale: "大泥球是'a haphazardly structured, sprawling, sloppy, duct-tape-and-baling-wire, spaghetti-code jungle'——缺乏模块化设计的混乱架构。"
        },
        {
            id: "ap-3-1-q4",
            question: "谁首次提出大泥球(Big Ball of Mud)这个概念？",
            options: [
                "Martin Fowler",
                "Robert C. Martin",
                "Brian Foote 和 Joseph Yoder",
                "Kent Beck"
            ],
            answer: 2,
            rationale: "Big Ball of Mud 概念由 Brian Foote 和 Joseph Yoder 于 1997 年在 PLoP 会议上提出。"
        },
        {
            id: "ap-3-1-q5",
            question: "大泥球架构形成的常见原因不包括以下哪项？",
            options: [
                "高压下快速交付缺乏架构关注",
                "原型代码未被抛弃继续使用",
                "严格的代码审查流程",
                "重构被延迟以交付更多功能"
            ],
            answer: 2,
            rationale: "大泥球形成原因包括：高压交付、原型未抛弃、渐进式维护侵蚀结构、重构延迟等。严格的代码审查恰恰有助于避免大泥球。"
        },
        {
            id: "ap-3-1-q6",
            question: "Extract Class 重构技术的目的是什么？",
            options: [
                "删除不需要的类",
                "将类中的部分功能和数据提取到新类中，使每个类职责单一",
                "合并多个类为一个",
                "重命名类"
            ],
            answer: 1,
            rationale: "Extract Class 将一个类中的部分功能和数据提取出来创建新类，使每个类具有单一明确的职责，提高可维护性和可复用性。"
        },
        {
            id: "ap-3-1-q7",
            question: "为什么大泥球系统中的变更风险会传播到不相关的部分？",
            options: [
                "因为缺少版本控制",
                "因为组件紧密耦合，依赖交织，信息混乱共享",
                "因为测试覆盖率低",
                "因为使用了动态语言"
            ],
            answer: 1,
            rationale: "大泥球系统中'components are tightly coupled, and dependencies are intertwined'，导致变更一个部分可能在不相关的部分引发 bug。"
        },
        {
            id: "ap-3-1-q8",
            question: "重构上帝对象的第一步应该是什么？",
            options: [
                "立即删除多余的代码",
                "识别类中的内聚功能组",
                "添加更多注释",
                "增加单元测试"
            ],
            answer: 1,
            rationale: "重构上帝对象的第一步是识别类中的内聚功能组——哪些数据和方法是紧密相关的，应该被提取到同一个新类中。"
        },
        {
            id: "ap-3-1-q9",
            question: "大泥球架构的典型信号不包括以下哪项？",
            options: [
                "缺乏清晰的模块边界",
                "几乎所有重要信息变成全局或重复的",
                "明确的 API 契约",
                "修改一处可能破坏不相关的功能"
            ],
            answer: 2,
            rationale: "大泥球的典型信号包括缺乏模块边界、信息全局化/重复、变更风险传播。明确的 API 契约恰恰是良好架构的特征。"
        },
        {
            id: "ap-3-1-q10",
            question: "如何避免系统退化为大泥球？",
            options: [
                "避免任何重构以保持稳定",
                "系统达到一定规模后就要投入思考和努力进行架构设计",
                "尽可能快地添加新功能",
                "使用最新的框架和库"
            ],
            answer: 1,
            rationale: "避免大泥球的方法是'put thought and effort into its design once it reaches a certain size'——系统成长到一定规模后需要认真考虑架构设计。"
        },
        {
            id: "ap-3-1-q11",
            question: "单一职责原则(SRP)的核心含义是什么？",
            options: [
                "每个方法只能有一行代码",
                "一个类应该只有一个改变的理由",
                "每个文件只能有一个类",
                "每个项目只能有一个入口点"
            ],
            answer: 1,
            rationale: "单一职责原则要求一个类应该只有一个改变的理由，即只负责一个功能领域。上帝对象违反了这个原则。"
        },
        {
            id: "ap-3-1-q12",
            question: "大泥球架构累积技术债务的表现是什么？",
            options: [
                "代码行数减少",
                "写得很差的代码、过时的依赖、未解决的问题阻碍系统的可维护性和稳定性",
                "测试覆盖率提高",
                "文档更加完善"
            ],
            answer: 1,
            rationale: "大泥球'accumulates technical debt as developers take shortcuts...This manifests as poorly written code, outdated dependencies, and unresolved issues that impede maintainability.'"
        }
    ],
    "ap-3-2": [
        {
            id: "ap-3-2-q1",
            question: "什么是烟囱式系统(Stovepipe System)？",
            options: [
                "一种高效的分布式架构",
                "各部门独立建设、缺乏统一标准和集成的系统",
                "一种数据仓库架构",
                "一种微服务架构"
            ],
            answer: 1,
            rationale: "烟囱式系统指各部门独立建设、缺乏统一标准和集成的系统。每个烟囱都有自己的技术栈、数据存储和接口，无法互操作。"
        },
        {
            id: "ap-3-2-q2",
            question: "烟囱式系统与什么概念密切相关？",
            options: [
                "微服务架构",
                "康威定律——组织孤岛导致系统孤岛",
                "领域驱动设计",
                "事件驱动架构"
            ],
            answer: 1,
            rationale: "烟囱式系统是康威定律负面效应的典型表现——组织的沟通结构决定了系统结构，组织孤岛导致系统孤岛。"
        },
        {
            id: "ap-3-2-q3",
            question: "Team Topologies 定义的四种团队类型不包括以下哪个？",
            options: [
                "流对齐团队(Stream-Aligned)",
                "赋能团队(Enabling)",
                "测试团队(Testing)",
                "平台团队(Platform)"
            ],
            answer: 2,
            rationale: "Team Topologies 定义四种团队类型：流对齐团队、赋能团队、复杂子系统团队、平台团队。测试不是独立的团队类型。"
        },
        {
            id: "ap-3-2-q4",
            question: "Martin Fowler 指出平台团队的主要价值是什么？",
            options: [
                "控制所有技术决策",
                "减少流对齐团队的认知负担",
                "管理所有基础设施",
                "审批所有代码变更"
            ],
            answer: 1,
            rationale: "Martin Fowler 指出：'the primary benefit of a platform is to reduce cognitive load on stream-aligned teams'——平台的主要价值是减少业务团队的认知负担。"
        },
        {
            id: "ap-3-2-q5",
            question: "Team Topologies 的三种团队交互模式不包括以下哪个？",
            options: [
                "协作(Collaboration)",
                "即服务(X-as-a-Service)",
                "审批(Approval)",
                "促进(Facilitating)"
            ],
            answer: 2,
            rationale: "三种团队交互模式是：协作——紧密合作；即服务——一个团队向其他团队提供能力；促进——赋能团队帮助消除障碍。审批不是交互模式。"
        },
        {
            id: "ap-3-2-q6",
            question: "什么是反向康威机制(Inverse Conway Maneuver)？",
            options: [
                "忽视组织结构对架构的影响",
                "有意识地调整团队组织结构以促进期望的系统架构",
                "让架构适应现有组织结构",
                "增加更多管理层级"
            ],
            answer: 1,
            rationale: "反向康威机制是有意识地调整团队组织结构以促进期望的系统架构，而非被动接受组织结构对架构的影响。"
        },
        {
            id: "ap-3-2-q7",
            question: "打破烟囱式系统的挑战不包括以下哪项？",
            options: [
                "政治阻力——部门保护自己的领地",
                "技术债务累积——集成成本高",
                "团队技术能力提升",
                "缺乏全局视角的人员"
            ],
            answer: 2,
            rationale: "打破烟囱的挑战包括：政治阻力、技术债务、缺乏全局视角、变更管理困难等。团队技术能力提升不是挑战，而是有利因素。"
        },
        {
            id: "ap-3-2-q8",
            question: "如何避免平台团队成为瓶颈？",
            options: [
                "增加更多审批流程",
                "平台应该是自助服务的，目标是赋能而非控制",
                "减少平台团队的人数",
                "让平台团队控制所有技术决策"
            ],
            answer: 1,
            rationale: "平台应该是自助服务的，目标是赋能而非控制。如果平台成为看门人和瓶颈，就违背了减少认知负担的初衷。"
        },
        {
            id: "ap-3-2-q9",
            question: "流对齐团队(Stream-Aligned Team)的职责是什么？",
            options: [
                "管理基础设施",
                "专注于向特定客户流或业务领域交付价值",
                "提供跨团队的通用服务",
                "处理复杂的技术子系统"
            ],
            answer: 1,
            rationale: "流对齐团队'focused on delivering value to specific customer streams or business domains'——专注于向特定客户流或业务领域交付价值。"
        },
        {
            id: "ap-3-2-q10",
            question: "烟囱式系统形成的组织因素不包括以下哪项？",
            options: [
                "每个部门有自己的预算和优先级",
                "缺乏跨部门协调机制",
                "统一的技术治理委员会",
                "技术选型各自为政"
            ],
            answer: 2,
            rationale: "烟囱形成的组织因素包括：独立预算、缺乏协调、各自选型、数据定义不统一等。统一的技术治理委员会恰恰有助于避免烟囱。"
        },
        {
            id: "ap-3-2-q11",
            question: "赋能团队(Enabling Team)的主要职责是什么？",
            options: [
                "直接开发业务功能",
                "支持流对齐团队，减少认知负担和消除障碍",
                "管理生产环境",
                "审批所有变更"
            ],
            answer: 1,
            rationale: "赋能团队'support stream-aligned teams by reducing cognitive load and removing blockers'——通过减少认知负担和消除障碍来支持流对齐团队。"
        },
        {
            id: "ap-3-2-q12",
            question: "什么时候应该使用'协作'交互模式？",
            options: [
                "当需要审批时",
                "当团队需要紧密合作解决共同问题时",
                "当一个团队向另一个团队提供服务时",
                "当需要知识传递时"
            ],
            answer: 1,
            rationale: "协作(Collaboration)模式适用于'Working closely together on shared problems'——团队需要紧密合作解决共同问题时。"
        }
    ],
    "ap-3-3": [
        {
            id: "ap-3-3-q1",
            question: "什么是供应商锁定(Vendor Lock-in)？",
            options: [
                "选择最好的供应商",
                "因切换成本过高而被迫继续使用特定供应商",
                "与供应商签订长期合同",
                "使用开源软件"
            ],
            answer: 1,
            rationale: "供应商锁定是'when a customer is essentially forced to continue using a specific vendor because the cost and effort of switching are prohibitively high'。"
        },
        {
            id: "ap-3-3-q2",
            question: "云计算中的三种锁定类型不包括以下哪个？",
            options: [
                "平台锁定",
                "数据锁定",
                "人员锁定",
                "工具锁定"
            ],
            answer: 2,
            rationale: "云计算中的三种锁定类型是：平台锁定（虚拟化平台依赖）、数据锁定（数据格式依赖）、工具锁定（管理工具依赖）。"
        },
        {
            id: "ap-3-3-q3",
            question: "为什么说供应商锁定否定了云的核心价值主张？",
            options: [
                "因为云计算成本更高",
                "因为供应商锁定否定了云的灵活性",
                "因为云安全性更低",
                "因为云性能更差"
            ],
            answer: 1,
            rationale: "文章指出'vendor lock-in altogether negates a primary value proposition of the cloud: its flexibility'——供应商锁定否定了云的核心价值：灵活性。"
        },
        {
            id: "ap-3-3-q4",
            question: "什么是内部平台效应(Inner Platform Effect)？",
            options: [
                "建立内部开发者平台",
                "在现有平台上重新实现平台功能，创建比原始平台更复杂的'平台上的平台'",
                "使用内部API",
                "共享内部代码库"
            ],
            answer: 1,
            rationale: "内部平台效应是在现有平台上重新实现平台本身的功能，创建'平台上的平台'，通常比直接使用原始平台更复杂、更脆弱。"
        },
        {
            id: "ap-3-3-q5",
            question: "避免供应商锁定的策略不包括以下哪个？",
            options: [
                "使用开放标准",
                "采用多云策略",
                "只使用单一供应商的所有服务",
                "确保数据可移植性"
            ],
            answer: 2,
            rationale: "避免供应商锁定的策略包括：使用开放标准、多云策略、云无关技术、构建抽象层、确保数据可移植性。只用单一供应商会增加锁定风险。"
        },
        {
            id: "ap-3-3-q6",
            question: "什么时候供应商锁定可能是可接受的？",
            options: [
                "永远不可接受",
                "当供应商提供独特能力使你能够与竞争对手差异化时",
                "当供应商最便宜时",
                "当供应商是市场领导者时"
            ],
            answer: 1,
            rationale: "文章指出供应商锁定'is not always bad if it provides a unique capability that enables you to differentiate from competitors'——需要权衡锁定风险与独特能力带来的竞争优势。"
        },
        {
            id: "ap-3-3-q7",
            question: "多云策略的缺点是什么？",
            options: [
                "成本更低",
                "增加运维复杂度和成本",
                "更安全",
                "性能更好"
            ],
            answer: 1,
            rationale: "多云策略虽然降低锁定风险，但'increase the complexity of your application'——增加运维复杂度，需要管理更多系统和供应商。"
        },
        {
            id: "ap-3-3-q8",
            question: "什么是过度工程(Over-engineering)？",
            options: [
                "使用最新的技术",
                "为预期但可能永远不会发生的需求构建过于复杂的解决方案",
                "进行充分的测试",
                "编写详细的文档"
            ],
            answer: 1,
            rationale: "过度工程是为了预期但可能永远不会发生的需求而构建过于复杂的解决方案，增加不必要的抽象层和功能。"
        },
        {
            id: "ap-3-3-q9",
            question: "构建抽象层来降低供应商锁定的权衡是什么？",
            options: [
                "没有任何缺点",
                "增加复杂度和维护成本，可能成为另一种形式的锁定",
                "提高性能",
                "降低开发成本"
            ],
            answer: 1,
            rationale: "构建抽象层可以降低锁定，但增加复杂度和维护成本。需要评估抽象层的价值是否超过其成本，是否会成为另一种形式的锁定。"
        },
        {
            id: "ap-3-3-q10",
            question: "如何确保数据可移植性？",
            options: [
                "使用供应商专有的数据格式",
                "清晰定义数据模型，保持数据格式可跨多平台使用",
                "将所有数据加密",
                "减少数据存储量"
            ],
            answer: 1,
            rationale: "确保数据可移植性应该'clearly defining their data models and keeping data in formats that are usable across a variety of platforms'。"
        },
        {
            id: "ap-3-3-q11",
            question: "什么技术可以帮助实现云无关的应用部署？",
            options: [
                "AWS Lambda",
                "Kubernetes 和容器技术",
                "Azure Functions",
                "Google Cloud Run"
            ],
            answer: 1,
            rationale: "Kubernetes 作为容器编排平台可以部署在任何云供应商或本地环境，帮助实现云无关的应用部署。"
        },
        {
            id: "ap-3-3-q12",
            question: "为什么应该制定退出策略(Exit Strategy)？",
            options: [
                "为了与供应商谈判更好的价格",
                "因为供应商可能倒闭或大幅改变服务条款",
                "为了雇佣更多员工",
                "为了加快开发速度"
            ],
            answer: 1,
            rationale: "应该制定退出策略因为'Cloud vendors can go out of business or make drastic changes in their Terms of Service'——供应商可能倒闭或大幅改变条款。"
        }
    ]
}
