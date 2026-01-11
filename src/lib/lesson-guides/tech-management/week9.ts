import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week9Guides: Record<string, LessonGuide> = {
    "tm-9-1": {
        lessonId: "tm-9-1",
        background: [
            "【开发者体验定义】DevEx 框架将开发者体验定义为开发者在完成工作过程中对工具、流程和环境的整体感受。ACM Queue 研究指出：'Developer experience encompasses how developers feel about, think about, and value their work'——开发者体验直接影响生产力和团队士气。",
            "【DevEx 三大维度】2023年由 Abi Noda、Dr. Margaret-Anne Storey、Dr. Nicole Forsgren 等人提出的 DevEx 框架，将开发者体验提炼为三个核心维度：反馈循环(Feedback Loops)、认知负荷(Cognitive Load)和心流状态(Flow State)。这三个维度来自对 25 个社会技术因素的实证研究。",
            "【反馈循环的重要性】反馈循环指的是开发者执行操作后获得响应的速度和质量。快速的反馈循环让开发者能够顺畅地完成工作；而缓慢的反馈循环会打断开发流程，导致挫败感和延迟——'Slow feedback loops interrupt the development process, leading to frustration and delays'。",
            "【认知负荷的影响】认知负荷指开发者完成任务所需的心理处理量。软件开发本身复杂，不断增长的工具和技术进一步增加了开发者面临的认知负荷。组织应致力于通过消除开发过程中不必要的障碍来减少认知负荷。",
            "【心流状态与生产力】心流状态是指一个人在进行活动时完全沉浸其中，感受到高度的专注、投入和享受。研究表明：'Developers who enjoy their work and frequently experience the flow state perform better and produce higher-quality products'——频繁体验心流状态的开发者表现更好。"
        ],
        keyDifficulties: [
            "【SPACE 框架全景】SPACE 框架由 Nicole Forsgren 等人于 2021 年在 ACM Queue 发表，包含五个维度：Satisfaction and Well-being(满意度与幸福感)、Performance(绩效)、Activity(活动)、Communication and Collaboration(沟通与协作)、Efficiency and Flow(效率与心流)。核心观点是：'Productivity cannot be reduced to a single dimension or metric'——生产力不能被简化为单一指标。",
            "【平台工程的兴起】平台工程是构建和运营自服务内部开发者平台的学科。Gartner 将其定义为：'Building and operating self-service internal developer platforms to improve developer experience and scale agile and DevOps practices'——通过自服务平台提升开发者体验并扩展敏捷和 DevOps 实践。",
            "【IDP 核心组件】内部开发者平台(IDP)包含五大核心组件：应用配置管理(Application Configuration Management)、基础设施编排(Infrastructure Orchestration)、环境管理(Environment Management)、部署管理(Deployment Management)和基于角色的访问控制(Role-Based Access Control)。正如 Kelsey Hightower 所说：'The majority of people managing infrastructure just want a PaaS. The only requirement: it has to be built by them.'",
            "【测量与改进实践】eBay 的 DevEx 团队进行季度调查并与功能团队协作识别改进领域。改进措施包括：修复工具和文档缺陷、自动化或移除开发和发布中的冗余步骤、简化团队协作流程。DevEx 测量需要同时捕获开发者感知和工程系统的客观数据。",
            "【黄金路径设计】黄金路径(Golden Paths)定义并自动化了软件开发和部署的首选和批准方法。这些预定义的最佳实践路径减少了开发者的决策负担，同时保证了质量和一致性。UI 层面，Backstage（Spotify 开源）是目前市场份额最大的开发者门户解决方案。"
        ],
        handsOnPath: [
            "对团队进行开发者体验调查，使用 DevEx 三维度框架评估当前状态：反馈循环有多快？认知负荷有多重？心流状态有多频繁？",
            "识别团队中最慢的反馈循环（如构建时间、测试时间、代码审查等待），制定改进计划将其缩短 50%。",
            "审计开发者日常工作中的认知负荷来源：需要记住多少上下文？需要在多少工具间切换？文档是否易于查找？",
            "实施'保护心流时间'策略：设立每天至少 2 小时的无会议编码时间，减少即时通讯的打扰。",
            "建立开发环境标准化方案，确保新成员能在 1 天内完成环境搭建并提交第一个 PR。"
        ],
        selfCheck: [
            "你能说出团队中最慢的三个反馈循环是什么吗？它们对开发者体验有什么影响？",
            "团队的构建和测试流水线需要多长时间？这个时间是否在可接受范围内？",
            "新入职的开发者需要多长时间才能独立完成第一个任务？这个过程中有哪些障碍？",
            "开发者平均每天有多少不被打扰的专注编码时间？这个时间是否足够？",
            "你的团队有没有建立开发者体验的定期测量和改进机制？"
        ],
        extensions: [
            "深入研读 ACM Queue 上的 DevEx 论文《DevEx: What Actually Drives Productivity》，理解三维度框架的理论基础和测量方法。",
            "探索 Backstage（Spotify 开源的开发者门户）如何实现内部开发者平台的自服务体验。",
            "学习 SPACE 框架的完整内容，理解如何综合多个维度来评估和改进开发者生产力。",
            "了解 Netflix、Spotify 等公司的开发者体验实践，学习他们如何构建开发者平台。"
        ],
        sourceUrls: [
            "https://queue.acm.org/detail.cfm?id=3595878",
            "https://queue.acm.org/detail.cfm?id=3454124",
            "https://platformengineering.org/"
        ]
    },
    "tm-9-2": {
        lessonId: "tm-9-2",
        background: [
            "【Accelerate 研究背景】《Accelerate》一书由 Dr. Nicole Forsgren、Jez Humble 和 Gene Kim 基于四年的严格研究撰写，包含来自 2000 多个组织、超过 23,000 名受访者的数据。研究证明了软件交付绩效与组织绩效之间存在直接关系——'The book associates the idea of software delivery performance with organizational performance'。",
            "【DORA 四大指标】DORA 研究团队确定了衡量软件交付绩效的四个关键指标：部署频率(Deployment Frequency)——组织多久成功发布到生产环境一次；变更前置时间(Lead Time for Changes)——'The amount of time it takes a commit to get into production'；变更失败率(Change Failure Rate)——导致生产故障的部署比例；服务恢复时间(Time to Restore Service)——组织从生产故障中恢复需要多长时间。",
            "【速度与稳定的平衡】四个指标分为两类：速度指标（部署频率、变更前置时间）倾向于开发导向的变更目标；稳定性指标（变更失败率、服务恢复时间）倾向于运维导向的稳定目标。研究证明高绩效团队可以同时实现速度和稳定——这打破了传统的'速度 vs 稳定'二分法。",
            "【精英级别绩效】2017年 DORA 研究发现，高绩效团队的代码部署频率是低绩效团队的 46 倍，从提交到部署的前置时间快 440 倍。'Elite teams are twice as likely to meet or exceed their organizational performance goals'——精英团队达成组织目标的可能性是其他团队的两倍。注：2022 年报告后，精英级别被合并到高绩效类别。",
            "【持续交付定义】持续交付是'the ability to deliver changes—features, configurations, bug fixes, experiments—into production safely, quickly, and sustainably'——安全、快速、可持续地将变更交付到生产环境的能力，使部署变得可预测和常规化。核心原则是：'If it hurts, do it more often, and bring the pain forward'——如果某事痛苦，就更频繁地做它。"
        ],
        keyDifficulties: [
            "【24 项关键能力】《Accelerate》识别了显著改善软件交付绩效的 24 项关键能力，分为五个类别：持续交付、架构、产品与流程、精益管理与监控、文化。这些能力相互关联，共同驱动绩效提升。该书获得了 Shingo Institute Publication Award，表彰其对精益和运营卓越知识的贡献。",
            "【低风险发布】蓝绿部署(Blue-green deployments)等部署模式'enable zero-downtime updates undetectable to users'——使零停机更新成为可能，对用户不可察觉。持续交付消除了传统的集成、测试和加固阶段，代码始终保持可部署状态。",
            "【更高质量】'Automated regression detection frees teams to focus on exploratory, usability, and security testing throughout delivery'——自动化回归检测使团队能够专注于探索性测试、可用性测试和安全测试。研究证明高绩效团队在速度提升的同时，质量也更高而非更低。",
            "【更快上市与更低成本】'Automating build, deployment, and testing processes eliminates weeks or months of integration delays'——自动化构建、部署和测试流程消除了数周或数月的集成延迟。同时，自动化大幅降低了发布增量变更的相关成本。",
            "【更幸福的团队】'Research demonstrates that frequent releases reduce burnout and allow teams to directly witness their work's impact on users'——研究表明频繁发布减少了倦怠，让团队能够直接看到他们工作对用户的影响。"
        ],
        handsOnPath: [
            "测量团队当前的四个 DORA 指标：部署频率、变更前置时间、变更失败率、服务恢复时间。与行业基准对比，确定当前绩效级别。",
            "建立 DORA 指标的自动化数据收集，使用 Four Keys 开源项目或类似工具实现持续监控。",
            "识别并消除部署流水线中最大的瓶颈。目标是将部署频率提升一个级别（如从每月到每周，或从每周到每天）。",
            "实施蓝绿部署或金丝雀发布策略，减少部署风险，为更频繁的发布创造条件。",
            "组织《Accelerate》读书会，与团队讨论 24 项关键能力，识别最需要改进的能力并制定行动计划。"
        ],
        selfCheck: [
            "你能准确说出团队的四个 DORA 指标吗？它们处于什么绩效级别（低、中、高）？",
            "从代码提交到生产部署，典型的等待时间是多少？其中有多少是不必要的等待？",
            "团队的部署过程中有多少是手动操作？自动化程度如何？",
            "最近一次生产事故的恢复时间是多少？是否有快速恢复的机制和流程？",
            "团队是否相信可以同时提升速度和稳定性？还是认为这是不可调和的矛盾？"
        ],
        extensions: [
            "完整阅读《Accelerate: The Science of Lean Software and DevOps》，理解研究方法和完整的能力模型。",
            "学习 Google 的 DORA 研究报告系列（dora.dev），了解指标的演变和最新发现，包括 2021 年新增的第五个指标——可靠性。",
            "研究 Jez Humble 的《Continuous Delivery》网站和书籍，深入理解持续交付的技术实践。",
            "探索 Feature Flags、渐进式发布等技术，学习如何将大变更拆分为小批量发布。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339",
            "https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance",
            "https://continuousdelivery.com/"
        ]
    },
    "tm-9-3": {
        lessonId: "tm-9-3",
        background: [
            "【SRE 定义与起源】站点可靠性工程(SRE)是 Google 创立的一门学科，将软件工程实践应用于基础设施和运维问题。Google SRE Book 是该领域的权威著作，涵盖紧急响应(Emergency Response)、事故管理(Managing Incidents)、中断跟踪(Tracking Outages)和事后复盘文化(Postmortem Culture: Learning from Failure)等核心章节。",
            "【事故管理框架】PagerDuty 的事故响应文档定义了事故管理的四个关键阶段：准备(Preparation)、主动响应(Active Response)、解决(Resolution)和学习(Learning)。文档强调：'Provides information not only on preparing for an incident, but also what to do during and after the incident'。",
            "【事故响应角色】有效的事故响应需要明确的角色分工：事故指挥官(Incident Commander, IC)负责领导响应工作、副指挥官(Deputy)提供支持、记录员(Scribe)记录过程、主题专家(Subject Matter Expert)提供技术专长、客户联络人(Customer Liaison)处理外部沟通、内部联络人(Internal Liaison)协调组织内部。",
            "【严重级别分类】事故严重级别（SEV-1/2/3）帮助团队理解响应的紧急程度和资源分配。清晰的分级定义是快速响应的前提——'What constitutes a SEV-3 vs SEV-1, and what response do they get'。在事故发生前就应建立明确的定义、角色清晰度和沟通规范。",
            "【无责备事后复盘】John Allspaw（前 Etsy CTO）创造了'无责备事后复盘'(Blameless Postmortem)一词。其 2012 年的文章被认为是该领域的经典之作。核心理念是：'A blameless postmortem stays focused on how a mistake was made instead of who made it'——关注错误是如何发生的，而不是谁犯了错。"
        ],
        keyDifficulties: [
            "【无责备文化的深层含义】无责备不意味着工程师'脱钩'——'Engineers are not at all off the hook with a blameless postmortem process—they are very much on the hook for helping their organization become safer and more resilient'。工程师非常需要帮助组织变得更安全和更有韧性。",
            "【责备文化的危害】Allspaw 指出：'A culture of blame leads to people not providing information, and the information is what you need to improve things'——责备文化导致人们不提供信息，而信息正是改进所需要的。无责备复盘通过消除惩罚恐惧，赋能工程师提供真正客观的事件描述。",
            "【问'如何'而非'为什么'】在《The Infinite Hows》中，Allspaw 鼓励问'如何'问题而非'为什么'问题，因为'How questions get people to describe the conditions that allowed an event to take place'——'如何'问题让人描述导致事件发生的条件。",
            "【威慑策略 vs 预防策略】'Blame implies a strategy of deterrence versus a strategy of prevention'——责备暗示的是威慑策略而非预防策略。仅仅说'某人应该做 Y 而不是 Z'对下一个人没有帮助，除非你也理解为什么这个人首先做了 Z。",
            "【第二故事方法与正义文化】无责备复盘寻求'第二故事'(Second Stories)——从多个视角收集失败的详细信息。Allspaw 的文章引导很多实践者发现了 Sidney Dekker 关于人因和安全的著作，包括《Just Culture》和《The Field Guide to Understanding Human Error》。"
        ],
        handsOnPath: [
            "建立团队的事故严重级别定义（SEV-1/2/3），明确每个级别的响应流程、升级路径和通知范围。",
            "设计 On-call 轮值表，确保覆盖 24/7，同时避免过度负担。包括主要值班人员和备份人员，参考 Google SRE Book 第 11 章'Being On-Call'。",
            "创建事故响应剧本(Runbook)，包含常见问题的诊断和修复步骤，减少响应时间和认知负荷。",
            "组织一次无责备事后复盘实践：选择最近的一个事故，使用'如何'问题引导讨论，产出具体的改进行动。",
            "建立事故指标追踪：MTTR（平均恢复时间）、MTTD（平均检测时间）、事故数量趋势，定期回顾改进。"
        ],
        selfCheck: [
            "团队是否有明确的事故严重级别定义？每个人是否理解什么情况下该升级？",
            "On-call 轮值是否合理？值班人员是否有足够的权限和资源来处理事故？是否存在倦怠风险？",
            "事后复盘是否真正做到无责备？参与者是否敢于分享完整信息而不担心惩罚？",
            "复盘产出的改进行动是否得到跟踪和执行？还是复盘后就被遗忘？",
            "团队是否从事故中学习？同类问题的再次发生率是否在下降？"
        ],
        extensions: [
            "阅读 Google SRE Book 的事故管理相关章节，特别是第 13-16 章和附录 C、D 中的事后复盘模板。",
            "学习 Sidney Dekker 的《Just Culture》和《The Field Guide to Understanding Human Error》，深入理解人因工程和正义文化。",
            "研究 PagerDuty 的开源事故响应文档(response.pagerduty.com)，建立团队的事故响应框架。",
            "了解混沌工程(Chaos Engineering)实践，通过主动注入故障来提高系统韧性，将事故从被动响应转为主动预防。"
        ],
        sourceUrls: [
            "https://sre.google/sre-book/table-of-contents/",
            "https://response.pagerduty.com/",
            "https://www.etsy.com/codeascraft/blameless-postmortems-and-a-just-culture"
        ]
    }
}

export const week9Quizzes: Record<string, QuizQuestion[]> = {
    "tm-9-1": [
        {
            id: "tm-9-1-q1",
            question: "DevEx 框架将开发者体验提炼为哪三个核心维度？",
            options: [
                "速度、质量、成本",
                "反馈循环、认知负荷、心流状态",
                "工具、流程、文化",
                "代码、测试、部署"
            ],
            answer: 1,
            rationale: "DevEx 框架由 Abi Noda 等人于 2023 年提出，将开发者体验提炼为三个核心维度：Feedback Loops（反馈循环）、Cognitive Load（认知负荷）和 Flow State（心流状态），这三个维度来自对 25 个社会技术因素的实证研究。"
        },
        {
            id: "tm-9-1-q2",
            question: "SPACE 框架中的 'S' 代表什么？",
            options: [
                "Speed（速度）",
                "Satisfaction and Well-being（满意度与幸福感）",
                "System（系统）",
                "Scalability（可扩展性）"
            ],
            answer: 1,
            rationale: "SPACE 框架由 Nicole Forsgren 等人于 2021 年在 ACM Queue 发表，S 代表 Satisfaction and Well-being（满意度与幸福感），关注开发者对工作、团队、工具和文化的满足感以及他们的健康和幸福状态。"
        },
        {
            id: "tm-9-1-q3",
            question: "关于反馈循环对开发者体验的影响，正确的描述是？",
            options: [
                "反馈循环速度对开发者体验影响不大",
                "慢速反馈循环会打断开发流程，导致挫败感和延迟",
                "反馈循环越少越好",
                "反馈循环只影响代码质量，不影响开发者体验"
            ],
            answer: 1,
            rationale: "研究指出：'Slow feedback loops interrupt the development process, leading to frustration and delays'——缓慢的反馈循环会打断开发流程，导致挫败感和延迟，开发者可能需要等待或切换任务。"
        },
        {
            id: "tm-9-1-q4",
            question: "内部开发者平台(IDP)的核心组件不包括？",
            options: [
                "应用配置管理",
                "基础设施编排",
                "代码审查系统",
                "部署管理"
            ],
            answer: 2,
            rationale: "IDP 的五大核心组件是：应用配置管理(Application Configuration Management)、基础设施编排(Infrastructure Orchestration)、环境管理(Environment Management)、部署管理(Deployment Management)和基于角色的访问控制(Role-Based Access Control)。代码审查系统不属于 IDP 核心组件。"
        },
        {
            id: "tm-9-1-q5",
            question: "Gartner 对平台工程的定义是什么？",
            options: [
                "一种新的编程语言",
                "构建和运营自服务内部开发者平台以改善开发者体验并扩展敏捷和 DevOps 实践",
                "管理云基础设施的方法",
                "自动化测试的框架"
            ],
            answer: 1,
            rationale: "Gartner 将平台工程定义为：'Building and operating self-service internal developer platforms to improve developer experience and scale agile and DevOps practices'——构建和运营自服务内部开发者平台以改善开发者体验并扩展敏捷和 DevOps 实践。"
        },
        {
            id: "tm-9-1-q6",
            question: "关于心流状态与开发者生产力的关系，研究表明？",
            options: [
                "心流状态与生产力无关",
                "心流状态会导致开发者过度工作",
                "频繁体验心流状态的开发者表现更好，产出更高质量的产品",
                "心流状态只对初级开发者重要"
            ],
            answer: 2,
            rationale: "研究表明：'Developers who enjoy their work and frequently experience the flow state perform better and produce higher-quality products'——享受工作并频繁体验心流状态的开发者表现更好，产出更高质量的产品。"
        },
        {
            id: "tm-9-1-q7",
            question: "SPACE 框架的核心观点是什么？",
            options: [
                "生产力可以用单一指标衡量",
                "活动量是最重要的生产力指标",
                "生产力不能被简化为单一维度或指标",
                "只需要关注效率和产出"
            ],
            answer: 2,
            rationale: "SPACE 框架的核心观点是：'Productivity cannot be reduced to a single dimension or metric'——生产力不能被简化为单一维度或指标，需要综合多个维度来评估，只有通过检验相互制约的一系列指标才能理解和影响开发者生产力。"
        },
        {
            id: "tm-9-1-q8",
            question: "什么是'黄金路径'(Golden Paths)？",
            options: [
                "最短的代码路径",
                "性能最优的系统架构",
                "定义并自动化软件开发和部署的首选和批准方法",
                "最高薪资的职业发展路径"
            ],
            answer: 2,
            rationale: "黄金路径(Golden Paths)定义并自动化了软件开发和部署的首选和批准方法，减少开发者的决策负担，同时保证质量和一致性。它们是 IDP 的重要组成部分。"
        },
        {
            id: "tm-9-1-q9",
            question: "根据 2025 年平台工程趋势，IDP 与 AI 的关系是？",
            options: [
                "IDP 会被 AI 完全取代",
                "IDP 是构建 AI 采用和添加必要护栏的最佳基础",
                "AI 与 IDP 无关",
                "AI 会降低 IDP 的价值"
            ],
            answer: 1,
            rationale: "根据 2025 DORA 调查：'An internal developer platform was pinpointed as the best foundation upon which to build AI adoption and to add the guardrails and gates necessary'——IDP 被确定为构建 AI 采用和添加必要护栏的最佳基础。"
        },
        {
            id: "tm-9-1-q10",
            question: "eBay 的 DevEx 团队如何进行开发者体验改进？",
            options: [
                "只依赖自动化指标",
                "进行季度调查并与功能团队协作识别改进领域",
                "完全由管理层决定改进方向",
                "每年进行一次大规模改造"
            ],
            answer: 1,
            rationale: "eBay 的 DevEx 团队进行季度调查并与功能团队协作识别改进领域。通过这些结果修复工具和文档缺陷，自动化或移除冗余步骤，简化团队协作流程。"
        },
        {
            id: "tm-9-1-q11",
            question: "SPACE 框架与 DORA 指标的关系是什么？",
            options: [
                "它们是互相竞争的框架",
                "SPACE 完全取代了 DORA",
                "DORA 是'信号'（表现如何），SPACE 是'需要采取的行动'（如何改进）",
                "两者完全相同"
            ],
            answer: 2,
            rationale: "Nicole Forsgren 解释两者的关系：DORA 指标是'the signal'（我们做得如何），而 SPACE 是'the action required'（需要采取的行动来改进）。两者互补，SPACE 在个人和团队层面更深入。"
        },
        {
            id: "tm-9-1-q12",
            question: "Kelsey Hightower 对 IDP 的观点是什么？",
            options: [
                "IDP 应该完全外包",
                "大多数管理基础设施的人只想要一个 PaaS，唯一的要求是它必须由他们自己构建",
                "IDP 只适合大公司",
                "IDP 会增加复杂性"
            ],
            answer: 1,
            rationale: "Kelsey Hightower 指出：'I'm convinced the majority of people managing infrastructure just want a PaaS. The only requirement: it has to be built by them'——大多数人只想要一个自己构建的 PaaS。"
        }
    ],
    "tm-9-2": [
        {
            id: "tm-9-2-q1",
            question: "DORA 四个关键指标不包括哪个？",
            options: [
                "部署频率",
                "代码覆盖率",
                "变更前置时间",
                "服务恢复时间"
            ],
            answer: 1,
            rationale: "DORA 四个关键指标是：部署频率(Deployment Frequency)、变更前置时间(Lead Time for Changes)、变更失败率(Change Failure Rate)、服务恢复时间(Time to Restore Service)。代码覆盖率不属于 DORA 核心指标。"
        },
        {
            id: "tm-9-2-q2",
            question: "《Accelerate》研究发现，高绩效团队的部署频率是低绩效团队的多少倍？",
            options: [
                "2 倍",
                "10 倍",
                "46 倍",
                "100 倍"
            ],
            answer: 2,
            rationale: "2017年 DORA 研究发现，高绩效团队的代码部署频率是低绩效团队的 46 倍，从提交到部署的前置时间快 440 倍。"
        },
        {
            id: "tm-9-2-q3",
            question: "持续交付的核心原则是什么？",
            options: [
                "尽量减少部署次数",
                "如果某事痛苦，就更频繁地做它，把痛苦提前",
                "只在周末进行部署",
                "手动控制每次部署"
            ],
            answer: 1,
            rationale: "持续交付的核心原则是：'If it hurts, do it more often, and bring the pain forward'——如果某事痛苦，就更频繁地做它，把痛苦提前。通过频繁执行来减少每次的痛苦程度。"
        },
        {
            id: "tm-9-2-q4",
            question: "DORA 指标分为哪两类？",
            options: [
                "开发指标和测试指标",
                "速度指标和稳定性指标",
                "代码指标和系统指标",
                "个人指标和团队指标"
            ],
            answer: 1,
            rationale: "DORA 四个指标分为两类：速度指标/Velocity Metrics（部署频率、变更前置时间）倾向于开发导向的变更目标；稳定性指标/Stability Metrics（变更失败率、服务恢复时间）倾向于运维导向的稳定目标。"
        },
        {
            id: "tm-9-2-q5",
            question: "《Accelerate》研究基于多少受访者的数据？",
            options: [
                "约 1,000 人",
                "约 5,000 人",
                "超过 23,000 人",
                "超过 100,000 人"
            ],
            answer: 2,
            rationale: "《Accelerate》基于四年研究，包含来自 2000 多个组织、超过 23,000 名受访者的数据，涵盖从初创企业到财富 500 强的各类组织。"
        },
        {
            id: "tm-9-2-q6",
            question: "蓝绿部署的主要优势是什么？",
            options: [
                "减少代码量",
                "实现零停机更新，对用户不可察觉",
                "降低测试成本",
                "简化代码审查"
            ],
            answer: 1,
            rationale: "蓝绿部署等部署模式'enable zero-downtime updates undetectable to users'——使零停机更新成为可能，对用户不可察觉，从而实现低风险发布。"
        },
        {
            id: "tm-9-2-q7",
            question: "关于频繁发布对团队的影响，研究表明？",
            options: [
                "频繁发布会增加团队倦怠",
                "频繁发布减少倦怠，让团队能看到工作对用户的影响",
                "发布频率与团队幸福感无关",
                "频繁发布只适合小团队"
            ],
            answer: 1,
            rationale: "研究表明：'Frequent releases reduce burnout and allow teams to directly witness their work's impact on users'——频繁发布减少倦怠，让团队直接看到工作对用户的影响。"
        },
        {
            id: "tm-9-2-q8",
            question: "精英级别团队达成组织目标的可能性是其他团队的多少倍？",
            options: [
                "1.5 倍",
                "2 倍",
                "5 倍",
                "10 倍"
            ],
            answer: 1,
            rationale: "DORA 研究表明：'Elite teams are twice as likely to meet or exceed their organizational performance goals'——精英团队达成或超越组织绩效目标的可能性是其他团队的两倍。"
        },
        {
            id: "tm-9-2-q9",
            question: "《Accelerate》识别了多少项显著改善软件交付绩效的关键能力？",
            options: [
                "12 项",
                "18 项",
                "24 项",
                "30 项"
            ],
            answer: 2,
            rationale: "《Accelerate》识别了 24 项显著改善软件交付绩效的关键能力，分为五个类别：持续交付、架构、产品与流程、精益管理与监控、文化。"
        },
        {
            id: "tm-9-2-q10",
            question: "关于速度与稳定性的关系，《Accelerate》研究证明了什么？",
            options: [
                "速度和稳定性是不可调和的矛盾",
                "必须牺牲稳定性来获得速度",
                "高绩效团队可以同时实现速度和稳定",
                "稳定性比速度更重要"
            ],
            answer: 2,
            rationale: "《Accelerate》研究证明高绩效团队可以同时实现高频部署和低故障率，速度和稳定性通过良好的工程实践共同提升，打破了传统的'速度 vs 稳定'二分法。"
        },
        {
            id: "tm-9-2-q11",
            question: "DORA 指标中，'变更前置时间'测量的是什么？",
            options: [
                "从需求提出到开发完成的时间",
                "从代码提交到生产部署的时间",
                "从发现 bug 到修复的时间",
                "从项目启动到交付的时间"
            ],
            answer: 1,
            rationale: "变更前置时间(Lead Time for Changes)测量的是'The amount of time it takes a commit to get into production'——从代码提交到生产部署所需的时间。"
        },
        {
            id: "tm-9-2-q12",
            question: "持续交付如何提高产品质量？",
            options: [
                "通过增加手动测试",
                "通过减少发布次数",
                "自动化回归检测使团队能专注于探索性、可用性和安全测试",
                "通过延长测试周期"
            ],
            answer: 2,
            rationale: "持续交付通过'Automated regression detection frees teams to focus on exploratory, usability, and security testing throughout delivery'——自动化回归检测使团队能专注于更高价值的测试类型。"
        }
    ],
    "tm-9-3": [
        {
            id: "tm-9-3-q1",
            question: "PagerDuty 事故管理框架定义的四个关键阶段是什么？",
            options: [
                "发现、分析、修复、验证",
                "准备、主动响应、解决、学习",
                "监控、告警、响应、复盘",
                "识别、升级、处理、关闭"
            ],
            answer: 1,
            rationale: "PagerDuty 的事故响应文档定义了事故管理的四个关键阶段：准备(Preparation)、主动响应(Active Response)、解决(Resolution)和学习(Learning)。"
        },
        {
            id: "tm-9-3-q2",
            question: "谁创造了'无责备事后复盘'这个术语？",
            options: [
                "Gene Kim",
                "John Allspaw",
                "Nicole Forsgren",
                "Jez Humble"
            ],
            answer: 1,
            rationale: "John Allspaw（前 Etsy CTO）创造了'无责备事后复盘'(Blameless Postmortem)这个术语，他 2012 年的文章《Blameless PostMortems and a Just Culture》被认为是该领域的经典之作。"
        },
        {
            id: "tm-9-3-q3",
            question: "无责备事后复盘的核心是什么？",
            options: [
                "不追究任何人的责任",
                "关注错误是如何发生的，而不是谁犯了错",
                "只讨论技术问题",
                "由管理层主导整个过程"
            ],
            answer: 1,
            rationale: "无责备事后复盘的核心是：'A blameless postmortem stays focused on how a mistake was made instead of who made it'——关注错误是如何发生的，而不是谁犯了错。"
        },
        {
            id: "tm-9-3-q4",
            question: "责备文化对组织改进的影响是什么？",
            options: [
                "责备文化帮助明确责任",
                "责备文化导致人们不提供信息，而信息正是改进所需要的",
                "责备文化与改进无关",
                "责备文化只影响低绩效者"
            ],
            answer: 1,
            rationale: "Allspaw 指出：'A culture of blame leads to people not providing information, and the information is what you need to improve things'——责备文化导致人们不提供信息，而信息正是改进所需要的。"
        },
        {
            id: "tm-9-3-q5",
            question: "在事后复盘中，John Allspaw 为什么鼓励问'如何'问题而非'为什么'问题？",
            options: [
                "'如何'问题更简单",
                "'如何'问题让人描述导致事件发生的条件",
                "'为什么'问题太技术性",
                "'如何'问题更适合文档记录"
            ],
            answer: 1,
            rationale: "在《The Infinite Hows》中，Allspaw 鼓励问'如何'问题，因为'How questions get people to describe the conditions that allowed an event to take place'——'如何'问题让人描述导致事件发生的条件。"
        },
        {
            id: "tm-9-3-q6",
            question: "关于无责备复盘中工程师的角色，正确的描述是？",
            options: [
                "工程师完全'脱钩'，不需要承担任何责任",
                "工程师非常需要帮助组织变得更安全和更有韧性",
                "工程师只需要参与技术讨论",
                "工程师不应该参与复盘"
            ],
            answer: 1,
            rationale: "无责备不意味着工程师'脱钩'——'Engineers are not at all off the hook with a blameless postmortem process—they are very much on the hook for helping their organization become safer and more resilient'。"
        },
        {
            id: "tm-9-3-q7",
            question: "事故指挥官(Incident Commander)的主要职责是什么？",
            options: [
                "编写代码修复问题",
                "领导事故响应工作",
                "与媒体沟通",
                "记录事故过程"
            ],
            answer: 1,
            rationale: "事故指挥官(Incident Commander, IC)的主要职责是领导整个事故响应工作，协调各方资源和行动。记录工作由 Scribe 负责。"
        },
        {
            id: "tm-9-3-q8",
            question: "责备暗示的是什么策略？",
            options: [
                "预防策略",
                "威慑策略而非预防策略",
                "改进策略",
                "学习策略"
            ],
            answer: 1,
            rationale: "Allspaw 指出：'Blame implies a strategy of deterrence versus a strategy of prevention'——责备暗示的是威慑策略而非预防策略，它无法帮助组织真正预防问题再次发生。"
        },
        {
            id: "tm-9-3-q9",
            question: "Google SRE Book 中关于事故管理的核心理念是什么？",
            options: [
                "惩罚犯错的人",
                "将失败转化为组织知识而非责备",
                "避免所有事故",
                "只关注技术修复"
            ],
            answer: 1,
            rationale: "Google SRE Book 第 15 章'Postmortem Culture: Learning from Failure'强调'converting failures into institutional knowledge rather than blame'——将失败转化为组织知识而非责备。"
        },
        {
            id: "tm-9-3-q10",
            question: "事故严重级别(SEV)的主要作用是什么？",
            options: [
                "决定谁应该被惩罚",
                "帮助团队理解响应的紧急程度和资源分配",
                "记录事故历史",
                "计算事故成本"
            ],
            answer: 1,
            rationale: "事故严重级别（SEV-1/2/3）帮助团队理解响应的紧急程度和资源分配——'What constitutes a SEV-3 vs SEV-1, and what response do they get'，清晰的分级定义是快速响应的前提。"
        },
        {
            id: "tm-9-3-q11",
            question: "'第二故事'(Second Stories)方法在无责备复盘中的作用是什么？",
            options: [
                "创造一个虚假的故事",
                "从多个视角收集失败的详细信息",
                "让管理层讲述他们的版本",
                "简化事故报告"
            ],
            answer: 1,
            rationale: "无责备复盘寻求'第二故事'(Second Stories)——从多个视角收集失败的详细信息，获得更完整的事件图景，理解导致事件发生的条件。"
        },
        {
            id: "tm-9-3-q12",
            question: "Sidney Dekker 的《Just Culture》与无责备复盘有什么关系？",
            options: [
                "两者毫无关系",
                "Just Culture 是无责备复盘的理论基础，很多人通过 Allspaw 的文章发现了这本书",
                "Just Culture 反对无责备复盘",
                "Just Culture 只适用于航空业"
            ],
            answer: 1,
            rationale: "Allspaw 的无责备复盘文章引导很多实践者发现了 Sidney Dekker 关于人因和安全的著作，包括《Just Culture》和《The Field Guide to Understanding Human Error》，它们是无责备文化的重要理论基础。"
        }
    ]
}
