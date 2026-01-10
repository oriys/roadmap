import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "tm-9-1": {
        lessonId: "tm-9-1",
        background: [
            "【开发者体验定义】开发者体验（Developer Experience, DX）是指开发者在完成工作时的整体感受和效率。它涵盖工具、流程、文档、支持系统等多个方面。良好的 DX 直接影响生产力和满意度。",
            "【认知负荷】心理学研究表明，工作记忆容量有限。复杂的开发环境、不一致的 API、缺失的文档都会增加认知负荷，降低开发效率。减少不必要的认知负荷是 DX 改进的核心。",
            "【工具链效率】Google 的研究发现，开发者花费大量时间在非编码活动上：等待构建、配置环境、调试工具问题。优化工具链可以显著提升整体效率。",
            "【内部平台】大型科技公司（如 Netflix、Spotify）投资内部开发者平台，提供自助服务能力。通过标准化和自动化，减少团队间依赖和手工操作。",
            "【流状态】Mihaly Csikszentmihalyi 的心流理论指出，最高生产力发生在完全沉浸的状态。频繁的打断和上下文切换会破坏心流，降低代码质量和效率。"
        ],
        keyDifficulties: [
            "【度量困难】开发者效率难以精确度量。行数、提交数等表面指标可能产生误导。需要综合考虑多个维度。",
            "【投资优先级】DX 改进往往被视为'nice to have'而非必需。需要量化 DX 问题的成本来争取投资。",
            "【个性化需求】不同开发者有不同偏好和工作方式。需要在标准化和灵活性之间找到平衡。",
            "【技术债务关联】DX 问题往往是技术债务的症状。需要区分快速修复和根本解决。"
        ],
        handsOnPath: [
            "1. DX 调研：设计调研问卷，了解团队开发者的痛点和改进建议",
            "2. 时间审计：让团队成员记录一周的时间使用，识别等待和浪费",
            "3. 环境优化：评估开发环境设置时间，目标是新人一天内可以提交代码",
            "4. 工具链评估：测量构建、测试、部署的时间，识别瓶颈",
            "5. 文档改进：识别缺失或过时的文档，制定改进计划"
        ],
        selfCheck: [
            "新人加入团队后多久可以提交第一个 PR？流程是否顺畅？",
            "团队日常开发中最常抱怨的痛点是什么？有解决计划吗？",
            "构建和测试需要多长时间？是否有优化空间？",
            "开发者是否有足够的自助服务能力，还是需要等待其他团队支持？",
            "团队是否定期收集和回应开发者反馈？"
        ],
        extensions: [
            "研究 SPACE 框架（Satisfaction, Performance, Activity, Communication, Efficiency）",
            "了解 Netflix 的开发者平台实践",
            "学习《Team Topologies》了解平台团队设计",
            "研究 Backstage（Spotify 开源的开发者门户）"
        ],
        sourceUrls: [
            "https://queue.acm.org/detail.cfm?id=3454124",
            "https://backstage.io/",
            "https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819"
        ]
    },
    "tm-9-2": {
        lessonId: "tm-9-2",
        background: [
            "【DORA 研究】DevOps Research and Assessment（DORA）是 Google Cloud 支持的研究项目，通过大规模调查研究软件交付和运维能力。研究成果发表在年度《State of DevOps Report》中。",
            "【四个关键指标】DORA 定义了四个关键指标：1) 部署频率（Deployment Frequency）——多久部署一次到生产环境；2) 变更前置时间（Lead Time for Changes）——从代码提交到生产部署的时间。",
            "【四个关键指标续】3) 变更失败率（Change Failure Rate）——导致生产故障的部署比例；4) 服务恢复时间（Time to Restore Service）——从故障到恢复服务的时间。这四个指标相互关联。",
            "【精英表现】DORA 研究发现，精英团队可以同时实现高频部署和低故障率。速度和稳定性不是对立的，而是通过良好的工程实践共同提升。",
            "【CI/CD 核心实践】持续集成（CI）要求频繁集成代码，每次集成都通过自动化测试验证。持续交付（CD）确保软件始终处于可发布状态。这是高效能团队的基础。"
        ],
        keyDifficulties: [
            "【度量正确性】指标可能被 game，例如通过拆分小部署来提高频率，但不改善实质。需要结合多个指标综合评估。",
            "【文化障碍】提高部署频率需要信任：信任自动化测试、信任回滚机制、信任团队能快速响应。建立这种信任需要时间。",
            "【遗留系统挑战】在遗留系统上实施 CI/CD 可能困难重重：缺少测试、耦合严重、部署复杂。需要渐进式改进。",
            "【组织阻力】改变发布流程可能遇到来自运维、安全、合规等团队的阻力。需要跨团队协作和沟通。"
        ],
        handsOnPath: [
            "1. 基线测量：测量团队当前的四个 DORA 指标，建立基线",
            "2. CI 审计：评估当前 CI 流程，确保每次提交都触发自动化测试",
            "3. 部署频率提升：识别阻碍更频繁部署的因素，制定改进计划",
            "4. 回滚演练：如果没有，建立自动化回滚机制并进行演练",
            "5. 监控增强：确保有足够的监控来快速发现部署问题"
        ],
        selfCheck: [
            "团队当前的部署频率是多少？目标是什么？阻碍因素是什么？",
            "从代码提交到生产部署平均需要多长时间？瓶颈在哪里？",
            "过去一个季度有多少次部署导致了生产问题？原因是什么？",
            "团队能在多长时间内恢复服务？有没有演练过回滚流程？",
            "CI/CD 流程是否可靠？自动化测试覆盖率如何？"
        ],
        extensions: [
            "阅读《Accelerate》了解 DORA 研究的完整发现",
            "研究 Google 的 Four Keys 开源项目用于度量 DORA 指标",
            "了解蓝绿部署、金丝雀发布等高级部署策略",
            "学习 GitOps 实践"
        ],
        sourceUrls: [
            "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339",
            "https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance",
            "https://dora.dev/"
        ]
    },
    "tm-9-3": {
        lessonId: "tm-9-3",
        background: [
            "【事故不可避免】在复杂系统中，事故是不可避免的。目标不是消除所有事故，而是快速检测、快速恢复、从中学习。这是 SRE（Site Reliability Engineering）的核心理念。",
            "【无责备文化】无责备（Blameless）复盘的核心假设：人们在事故发生时已尽其所能做出最好决策。问题出在系统和流程，而非个人错误。追责会抑制信息共享和学习。",
            "【Etsy 的贡献】Etsy 是无责备复盘的先驱。John Allspaw 在《Etsy's Debriefing Facilitation Guide》中详细阐述了如何进行有效的事故复盘，避免寻找'根本原因'和'人为错误'。",
            "【学习型组织】高可靠性组织（如航空、医疗）认识到事故是学习机会。通过公开分享事故报告，整个组织可以从每次事故中学习，而非仅限于直接相关人员。",
            "【系统思维】事故通常是多因素叠加的结果，很少是单一'根本原因'。有效的复盘识别贡献因素网络，而非寻找单点责任。"
        ],
        keyDifficulties: [
            "【追责本能】人类本能倾向于寻找责任人。转向无责备文化需要持续的意识培养和领导示范。",
            "【复盘质量】低质量的复盘沦为'走过场'，没有产出有价值的学习。需要培训复盘引导技巧。",
            "【行动跟进】复盘产出的行动项经常被遗忘。需要建立跟踪机制确保改进措施被实施。",
            "【信息共享】部分组织因为担心法律风险而限制事故报告的分享。需要平衡透明度和风险。"
        ],
        handsOnPath: [
            "1. 复盘模板：创建或采用无责备复盘模板（如 Google SRE 的事后分析模板）",
            "2. 引导培训：学习复盘引导技巧，或指定团队成员接受培训",
            "3. 实施复盘：对下一个生产事故进行无责备复盘",
            "4. 知识库建设：建立事故报告知识库，便于跨团队学习",
            "5. 行动跟踪：建立复盘行动项的跟踪机制"
        ],
        selfCheck: [
            "团队是否有正式的事故复盘流程？最近一次复盘是什么时候？",
            "复盘中是否曾出现指责个人的情况？团队如何应对？",
            "复盘产出的行动项完成率如何？有跟踪机制吗？",
            "事故报告是否在更广范围内分享？其他团队能从中学习吗？",
            "团队成员是否愿意主动报告问题和失误？"
        ],
        extensions: [
            "阅读《The Field Guide to Understanding Human Error》by Sidney Dekker",
            "研究 Google SRE 的事后分析实践",
            "了解 Chaos Engineering 主动发现系统弱点",
            "学习《Learning from Incidents》播客和社区"
        ],
        sourceUrls: [
            "https://www.amazon.com/Field-Guide-Understanding-Human-Error/dp/1472439058",
            "https://sre.google/sre-book/postmortem-culture/",
            "https://codeascraft.com/2012/05/22/blameless-postmortems/"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "tm-9-1": [
        {
            id: "tm-9-1-q1",
            question: "开发者体验（Developer Experience）涵盖哪些方面？",
            options: [
                "只包括代码编辑器",
                "工具、流程、文档、支持系统等多个方面",
                "只包括薪酬福利",
                "只包括办公环境"
            ],
            answer: 1,
            rationale: "开发者体验涵盖工具、流程、文档、支持系统等多个方面，是开发者完成工作时的整体感受和效率。"
        },
        {
            id: "tm-9-1-q2",
            question: "认知负荷对开发者效率的影响是什么？",
            options: [
                "认知负荷越高效率越高",
                "复杂环境、不一致的 API、缺失文档会增加认知负荷，降低效率",
                "认知负荷与效率无关",
                "只有新手会受认知负荷影响"
            ],
            answer: 1,
            rationale: "工作记忆容量有限，复杂环境、不一致的 API、缺失文档都会增加认知负荷，降低开发效率。"
        },
        {
            id: "tm-9-1-q3",
            question: "心流（Flow）状态对生产力的意义是什么？",
            options: [
                "心流状态会降低代码质量",
                "最高生产力发生在完全沉浸的心流状态",
                "心流状态应该避免",
                "心流状态只适用于初级开发者"
            ],
            answer: 1,
            rationale: "Csikszentmihalyi 的心流理论指出，最高生产力发生在完全沉浸的状态，频繁打断会破坏心流。"
        },
        {
            id: "tm-9-1-q4",
            question: "内部开发者平台的价值是什么？",
            options: [
                "增加团队间依赖",
                "通过标准化和自动化，减少依赖和手工操作",
                "增加复杂性",
                "只适用于大公司"
            ],
            answer: 1,
            rationale: "内部开发者平台通过标准化和自动化，提供自助服务能力，减少团队间依赖和手工操作。"
        },
        {
            id: "tm-9-1-q5",
            question: "DX 改进的投资优先级挑战是什么？",
            options: [
                "DX 改进成本太高",
                "DX 改进往往被视为'nice to have'，需要量化问题成本来争取投资",
                "DX 改进总是最高优先级",
                "只有管理层关心 DX"
            ],
            answer: 1,
            rationale: "DX 改进往往被视为'nice to have'而非必需，需要量化 DX 问题的成本来争取投资。"
        },
        {
            id: "tm-9-1-q6",
            question: "SPACE 框架包含哪些维度？",
            options: [
                "Speed, Power, Agility, Cost, Efficiency",
                "Satisfaction, Performance, Activity, Communication, Efficiency",
                "Software, Platform, Architecture, Code, Engineering",
                "Security, Privacy, Availability, Compliance, Encryption"
            ],
            answer: 1,
            rationale: "SPACE 框架包含 Satisfaction（满意度）、Performance（性能）、Activity（活动）、Communication（沟通）、Efficiency（效率）。"
        },
        {
            id: "tm-9-1-q7",
            question: "新人入职的理想体验目标是什么？",
            options: [
                "一周内了解代码库",
                "一天内可以提交代码",
                "一个月内独立工作",
                "三天内完成培训"
            ],
            answer: 1,
            rationale: "开发环境设置应该足够简单，目标是新人一天内可以提交代码。"
        },
        {
            id: "tm-9-1-q8",
            question: "开发者效率度量的挑战是什么？",
            options: [
                "有现成的完美指标",
                "行数、提交数等表面指标可能误导，需要综合多个维度",
                "效率不需要度量",
                "只需要度量代码行数"
            ],
            answer: 1,
            rationale: "开发者效率难以精确度量，行数、提交数等表面指标可能产生误导，需要综合考虑多个维度。"
        },
        {
            id: "tm-9-1-q9",
            question: "Backstage 是什么？",
            options: [
                "一个编程语言",
                "Spotify 开源的开发者门户",
                "一个测试框架",
                "一个数据库"
            ],
            answer: 1,
            rationale: "Backstage 是 Spotify 开源的开发者门户，用于统一管理服务、文档和工具。"
        },
        {
            id: "tm-9-1-q10",
            question: "DX 问题与技术债务的关系是什么？",
            options: [
                "完全无关",
                "DX 问题往往是技术债务的症状",
                "DX 问题比技术债务更重要",
                "技术债务会自动改善 DX"
            ],
            answer: 1,
            rationale: "DX 问题往往是技术债务的症状，需要区分快速修复和根本解决。"
        },
        {
            id: "tm-9-1-q11",
            question: "Google 研究发现开发者时间使用的特点是什么？",
            options: [
                "大部分时间在写代码",
                "大量时间花在非编码活动：等待构建、配置环境、调试工具",
                "大部分时间在开会",
                "大部分时间在学习"
            ],
            answer: 1,
            rationale: "Google 研究发现开发者花费大量时间在非编码活动上，优化工具链可以显著提升整体效率。"
        },
        {
            id: "tm-9-1-q12",
            question: "《Team Topologies》与 DX 的关系是什么？",
            options: [
                "无关",
                "讲述平台团队如何支持其他团队的开发者体验",
                "只讲组织架构",
                "只讲技术架构"
            ],
            answer: 1,
            rationale: "《Team Topologies》讲述如何设计平台团队来支持其他团队，直接影响开发者体验。"
        }
    ],
    "tm-9-2": [
        {
            id: "tm-9-2-q1",
            question: "DORA 的四个关键指标是什么？",
            options: [
                "代码行数、测试覆盖率、bug 数量、文档数量",
                "部署频率、变更前置时间、变更失败率、服务恢复时间",
                "团队规模、预算、工期、范围",
                "CPU、内存、磁盘、网络"
            ],
            answer: 1,
            rationale: "DORA 四个关键指标：部署频率、变更前置时间、变更失败率、服务恢复时间。"
        },
        {
            id: "tm-9-2-q2",
            question: "部署频率（Deployment Frequency）衡量的是什么？",
            options: [
                "代码提交频率",
                "多久部署一次到生产环境",
                "会议频率",
                "代码审查频率"
            ],
            answer: 1,
            rationale: "部署频率衡量团队多久部署一次到生产环境。"
        },
        {
            id: "tm-9-2-q3",
            question: "变更前置时间（Lead Time for Changes）衡量的是什么？",
            options: [
                "需求提出到开始开发的时间",
                "从代码提交到生产部署的时间",
                "从 bug 报告到修复的时间",
                "会议准备时间"
            ],
            answer: 1,
            rationale: "变更前置时间衡量从代码提交到生产部署的时间。"
        },
        {
            id: "tm-9-2-q4",
            question: "DORA 研究关于速度和稳定性的发现是什么？",
            options: [
                "速度和稳定性是对立的",
                "精英团队可以同时实现高频部署和低故障率",
                "只能二选一",
                "稳定性更重要"
            ],
            answer: 1,
            rationale: "DORA 研究发现精英团队可以同时实现高频部署和低故障率，速度和稳定性通过良好实践共同提升。"
        },
        {
            id: "tm-9-2-q5",
            question: "持续集成（CI）的核心要求是什么？",
            options: [
                "每月集成一次代码",
                "频繁集成代码，每次集成都通过自动化测试验证",
                "只需要手工测试",
                "只在发布前集成"
            ],
            answer: 1,
            rationale: "持续集成要求频繁集成代码，每次集成都通过自动化测试验证。"
        },
        {
            id: "tm-9-2-q6",
            question: "DORA 指标被 game 的风险是什么？",
            options: [
                "不存在这种风险",
                "例如通过拆分小部署来提高频率，但不改善实质",
                "指标总是准确的",
                "只有技术团队会 game 指标"
            ],
            answer: 1,
            rationale: "指标可能被 game，例如通过拆分小部署来提高频率但不改善实质，需要综合评估。"
        },
        {
            id: "tm-9-2-q7",
            question: "变更失败率（Change Failure Rate）衡量的是什么？",
            options: [
                "测试失败率",
                "导致生产故障的部署比例",
                "代码审查拒绝率",
                "构建失败率"
            ],
            answer: 1,
            rationale: "变更失败率衡量导致生产故障的部署比例。"
        },
        {
            id: "tm-9-2-q8",
            question: "服务恢复时间（Time to Restore Service）衡量的是什么？",
            options: [
                "服务启动时间",
                "从故障到恢复服务的时间",
                "服务运行时间",
                "服务响应时间"
            ],
            answer: 1,
            rationale: "服务恢复时间衡量从故障到恢复服务的时间。"
        },
        {
            id: "tm-9-2-q9",
            question: "《Accelerate》一书的主要内容是什么？",
            options: [
                "敏捷开发方法论",
                "DORA 研究的完整发现",
                "编程技巧",
                "项目管理"
            ],
            answer: 1,
            rationale: "《Accelerate》由 DORA 研究团队撰写，详细阐述了研究发现和高效能团队的特征。"
        },
        {
            id: "tm-9-2-q10",
            question: "在遗留系统上实施 CI/CD 的挑战是什么？",
            options: [
                "没有挑战",
                "缺少测试、耦合严重、部署复杂，需要渐进式改进",
                "遗留系统不需要 CI/CD",
                "直接重写更容易"
            ],
            answer: 1,
            rationale: "遗留系统可能缺少测试、耦合严重、部署复杂，需要渐进式改进。"
        },
        {
            id: "tm-9-2-q11",
            question: "提高部署频率需要什么样的文化基础？",
            options: [
                "不需要文化改变",
                "信任自动化测试、回滚机制和团队响应能力",
                "只需要技术改进",
                "只需要管理层支持"
            ],
            answer: 1,
            rationale: "提高部署频率需要信任：信任自动化测试、信任回滚机制、信任团队能快速响应。"
        },
        {
            id: "tm-9-2-q12",
            question: "Four Keys 是什么？",
            options: [
                "四个编程原则",
                "Google 开源的 DORA 指标度量项目",
                "四个安全密钥",
                "四个架构模式"
            ],
            answer: 1,
            rationale: "Four Keys 是 Google 开源的项目，用于度量 DORA 四个关键指标。"
        }
    ],
    "tm-9-3": [
        {
            id: "tm-9-3-q1",
            question: "无责备（Blameless）复盘的核心假设是什么？",
            options: [
                "总有人需要为事故负责",
                "人们在事故发生时已尽其所能做出最好决策",
                "事故是随机发生的",
                "只有技术问题需要复盘"
            ],
            answer: 1,
            rationale: "无责备复盘假设人们在事故发生时已尽其所能做出最好决策，问题出在系统和流程。"
        },
        {
            id: "tm-9-3-q2",
            question: "为什么追责会抑制学习？",
            options: [
                "追责可以促进学习",
                "追责会抑制信息共享，人们不敢报告问题",
                "追责与学习无关",
                "只有严重事故才需要追责"
            ],
            answer: 1,
            rationale: "追责会抑制信息共享和学习，因为人们担心被惩罚而不敢报告问题和失误。"
        },
        {
            id: "tm-9-3-q3",
            question: "Etsy 在无责备复盘领域的贡献是什么？",
            options: [
                "发明了编程语言",
                "John Allspaw 详细阐述了如何进行有效的事故复盘",
                "创建了云平台",
                "开发了监控工具"
            ],
            answer: 1,
            rationale: "Etsy 是无责备复盘的先驱，John Allspaw 的指南详细阐述了有效复盘方法。"
        },
        {
            id: "tm-9-3-q4",
            question: "事故通常是什么原因导致的？",
            options: [
                "总是单一根本原因",
                "多因素叠加的结果，很少是单一根本原因",
                "总是人为错误",
                "总是技术故障"
            ],
            answer: 1,
            rationale: "事故通常是多因素叠加的结果，有效复盘识别贡献因素网络，而非寻找单点责任。"
        },
        {
            id: "tm-9-3-q5",
            question: "高可靠性组织如何看待事故？",
            options: [
                "事故应该被隐藏",
                "事故是学习机会，通过公开分享让整个组织学习",
                "事故只与直接责任人相关",
                "事故应该被惩罚"
            ],
            answer: 1,
            rationale: "高可靠性组织认识到事故是学习机会，通过公开分享事故报告让整个组织学习。"
        },
        {
            id: "tm-9-3-q6",
            question: "转向无责备文化的挑战是什么？",
            options: [
                "技术复杂",
                "人类本能倾向于寻找责任人，需要持续意识培养",
                "成本太高",
                "没有挑战"
            ],
            answer: 1,
            rationale: "人类本能倾向于寻找责任人，转向无责备文化需要持续的意识培养和领导示范。"
        },
        {
            id: "tm-9-3-q7",
            question: "低质量复盘的问题是什么？",
            options: [
                "低质量复盘也有价值",
                "沦为'走过场'，没有产出有价值的学习",
                "低质量复盘更高效",
                "复盘质量不重要"
            ],
            answer: 1,
            rationale: "低质量的复盘沦为'走过场'，没有产出有价值的学习，需要培训复盘引导技巧。"
        },
        {
            id: "tm-9-3-q8",
            question: "复盘行动项跟踪的重要性是什么？",
            options: [
                "跟踪不重要",
                "复盘产出的行动项经常被遗忘，需要机制确保实施",
                "行动项会自动完成",
                "只需要记录，不需要跟踪"
            ],
            answer: 1,
            rationale: "复盘产出的行动项经常被遗忘，需要建立跟踪机制确保改进措施被实施。"
        },
        {
            id: "tm-9-3-q9",
            question: "《The Field Guide to Understanding Human Error》的作者是谁？",
            options: [
                "John Allspaw",
                "Sidney Dekker",
                "Gene Kim",
                "Martin Fowler"
            ],
            answer: 1,
            rationale: "《The Field Guide to Understanding Human Error》由 Sidney Dekker 撰写，是理解人为错误的经典著作。"
        },
        {
            id: "tm-9-3-q10",
            question: "SRE（Site Reliability Engineering）对事故的核心理念是什么？",
            options: [
                "消除所有事故",
                "事故不可避免，目标是快速检测、恢复和学习",
                "事故是员工的责任",
                "事故不需要关注"
            ],
            answer: 1,
            rationale: "SRE 认为在复杂系统中事故不可避免，目标是快速检测、快速恢复、从中学习。"
        },
        {
            id: "tm-9-3-q11",
            question: "Chaos Engineering 的作用是什么？",
            options: [
                "创造混乱",
                "主动发现系统弱点",
                "增加系统复杂性",
                "减少测试工作"
            ],
            answer: 1,
            rationale: "Chaos Engineering 通过主动注入故障来发现系统弱点，提高系统韧性。"
        },
        {
            id: "tm-9-3-q12",
            question: "事故报告分享的平衡考虑是什么？",
            options: [
                "不需要分享",
                "平衡透明度和法律风险",
                "分享越多越好",
                "只在团队内部分享"
            ],
            answer: 1,
            rationale: "部分组织因担心法律风险而限制事故报告分享，需要平衡透明度和风险。"
        }
    ]
}
