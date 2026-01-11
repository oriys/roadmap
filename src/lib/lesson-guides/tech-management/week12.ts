import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week12Guides: Record<string, LessonGuide> = {
    "tm-12-1": {
        lessonId: "tm-12-1",
        background: [
            "【技术战略模式】Eben Hewitt在《Technology Strategy Patterns》中指出，该书提供了'a shared language—in the form of repeatable, practical patterns and templates—to produce great technology strategies'——以可重复、实用的模式和模板形式，提供制定优秀技术战略的共享语言。他在担任CTO、CIO和首席架构师的十年间开发了39个模式。",
            "【战略的内核】Richard Rumelt在《Good Strategy Bad Strategy》中提出好战略的'内核(Kernel)'包含三个要素：1) Diagnosis(诊断)——定义挑战，解释'为什么要这样做'；2) Guiding Policy(指导方针)——处理挑战的方法，说明'做什么'；3) Coherent Actions(一致行动)——执行指导方针的具体步骤，解释'如何实现'。",
            "【好战略的特征】Rumelt强调：'Good strategy almost always looks simple'——好的战略几乎总是看起来简单。'A talented leader identifies the one or two critical issues in the situation—the pivot points that can multiply the effectiveness of effort—and then focuses and concentrates action and resources on them.'——优秀领导者识别一两个关键问题(杠杆点)并集中资源。",
            "【技术愿景框架】Will Larson在《Strategies and Visions》中定义：'A vision describes how you want your technology and organization to work in two to three years'——愿景描述你希望技术和组织在两到三年后如何运作。愿景是'aspirational documents that enable folks who don't work closely together to make decisions that fit together cleanly'——使不紧密合作的人能做出相互契合的决策的愿望性文档。",
            "【自下而上的战略】Larson提出：'To write an engineering strategy, write five design documents, and pull the similarities out. That's your engineering strategy. To write an engineering vision, write five engineering strategies, and forecast their implications two years into the future.'——写五份设计文档提取共性得出战略，写五份战略预测两年后得出愿景。"
        ],
        keyDifficulties: [
            "【坏战略的四个特征】Rumelt列出坏战略的四个标志：1) Fluff(空话)——用大词和流行语掩盖思想空洞；2) Failure to face the challenge(回避挑战)——不直面核心问题；3) Mistaking goals for strategy(混淆目标与战略)——只有愿望清单没有行动计划；4) Bad strategic goals(糟糕的战略目标)——不可行的目标。",
            "【战略是假设】Rumelt指出：'A new strategy is, in the language of science, a hypothesis, and its implementation is an experiment'——新战略是假设，实施是实验。好的领导者'learn more about what does and doesn't work and adjust their strategies accordingly'——不断学习并调整战略。",
            "【愿景要具体】Larson强调：'Visions get more useful as they get more specific. Generic statements are easy to agree with but don't help reconcile conflicting strategies'——愿景越具体越有用，泛泛的陈述无法调和冲突的战略。细节'are often illustrative rather than declarative, giving a taste of the future's flavor'——是说明性而非宣言性的，展示未来的味道。",
            "【好战略是无聊的】Larson观察到：'Good engineering strategy is boring'——好的工程战略是无聊的。'It's easier to write an effective strategy than a bad one'——写有效的战略比写糟糕的更容易。很多人认为战略神秘，其实这些只是'mundane documents'——普通的文档。",
            "【惯性与熵】Rumelt描述组织面临的两大挑战：'Inertia, as the resistance to change in motion, is rooted in the unwillingness or inability to adapt'——惯性是改变的阻力；'Entropy, where disorder invariably escalates'——熵导致混乱不断升级。领导者必须持续维护组织的目的、结构和方法。"
        ],
        handsOnPath: [
            "应用Rumelt的'内核'框架：选择一个技术战略决策，明确写出诊断(挑战是什么)、指导方针(如何应对)和一致行动(具体步骤)。",
            "检视现有'战略'文档：用Rumelt的四个坏战略标志审视，识别空话、回避挑战、混淆目标或不可行目标的问题。",
            "尝试Larson的自下而上方法：收集过去一年的5份技术设计文档，提取共性模式，形成战略草案。",
            "制定2-3年技术愿景：参考Larson的建议，控制在1-2页，包含具体说明性细节而非空泛声明。",
            "学习Technology Strategy Patterns中的具体模式：如PESTEL分析、波特五力、价值链分析、情景规划等工具。"
        ],
        selfCheck: [
            "你能用一句话描述当前技术战略的'诊断'——团队面临的核心挑战是什么？",
            "现有的战略文档是否存在Rumelt描述的四个坏战略特征？特别是'空话'和'混淆目标与战略'？",
            "技术愿景是否足够具体？还是充满了谁都不会反对的泛泛之词？",
            "战略是否被当作假设来对待？有没有机制来验证和调整？",
            "组织中的惯性和熵对战略执行有什么影响？如何应对？"
        ],
        extensions: [
            "深入学习《Technology Strategy Patterns》中的39个模式，特别是MECE、情景规划、未来漏斗、回溯法等分析工具。",
            "研究Wardley Mapping作为战略分析的可视化方法——帮助理解技术组件的演进和竞争格局。",
            "探索技术雷达(Technology Radar)的制定方法，建立组织级的技术趋势追踪机制。",
            "学习Will Larson的《Crafting Engineering Strategy》——提供从诊断到推出的可重复战略制定流程。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Technology-Strategy-Patterns-Architecture/dp/1492040878",
            "https://www.amazon.com/Good-Strategy-Bad-Difference-Matters/dp/0307886239",
            "https://lethain.com/strategies-visions/"
        ]
    },
    "tm-12-2": {
        lessonId: "tm-12-2",
        background: [
            "【产品路线图重新定义】C. Todd Lombardo等人在《Product Roadmaps Relaunched》中指出：'A good product roadmap is one of the most important and influential documents an organization can develop'——好的产品路线图是组织能开发的最重要、最有影响力的文档之一。路线图'challenges product professionals to move beyond static, feature-laden plans and embrace a dynamic, strategic communication tool'——要求产品专业人员超越静态、功能堆砌的计划，拥抱动态的战略沟通工具。",
            "【路线图应该做什么】根据该书，路线图应该：'provide strategic context, focus on customer and organizational value, embrace learning in product development, align the organization around shared priorities, and generate excitement about the product direction'——提供战略背景、聚焦客户和组织价值、拥抱产品开发中的学习、围绕共同优先级对齐组织、对产品方向产生兴奋。",
            "【路线图不应该做什么】书中强调路线图'should not make promises a team cannot deliver on, should not require wasteful up-front design and estimation, and should not be conflated with a release plan or a project plan'——不应该做团队无法兑现的承诺、不应该要求浪费的前期设计和估算、不应该与发布计划或项目计划混淆。",
            "【Now-Next-Later框架】Janna Bastow(ProdPad联合创始人)发明了Now-Next-Later路线图。她解释：'The fundamental thing about the NNL is that it removes the constraints of the timeline and gives you something much more human: time horizons'——NNL的根本是移除时间线的约束，给你更人性化的时间视野。三列分别是：'Now'(正在做的)、'Next'(即将做的)、'Later'(未来想做的)。",
            "【时间视野的力量】Bastow指出：'Time horizons are powerful because they allow you to move forward with a broad plan, yet only make commitments to what lies directly ahead of you'——时间视野的力量在于允许你带着广泛计划前进，但只对眼前的事情做承诺。'You can't make decisions far off in the distance or future, because you can't see it clearly yet.'——你无法对遥远的未来做决定，因为你还看不清楚。"
        ],
        keyDifficulties: [
            "【路线图的核心组成】必需元素包括：Product Vision(产品愿景——指导原则)、Business Objectives(业务目标——解释'为什么'并证明资源分配合理)、Themes(主题——高层次的客户需求或要解决的问题)、Timeframes(时间框架)和Disclaimer(免责声明——表明路线图可能变化)。",
            "【聚焦影响而非产出】书中强调'focusing on impact (outcomes) rather than just deliverables (outputs)'——聚焦影响(结果)而非仅仅是交付物(产出)。这需要从'功能列表'思维转向'问题解决'思维。",
            "【为什么避免时间线】Bastow解释：'By setting deadlines on your roadmap, especially on potential ideas planned way in advance, you may be going too granular too early'——通过在路线图上设置截止日期，特别是对提前很久计划的潜在想法，你可能过早过于细化。这导致'deadlines getting pushed back or changed'和'overpromise and underdeliver'——截止日期推迟和过度承诺。",
            "【OKR与路线图结合】《Product Roadmaps Relaunched》推荐将路线图与OKR结合：'OKRs consist of qualitative goals (objectives) paired with quantitative measures (key results)'——OKR由定性目标配对定量衡量组成。业务目标应该与愿景关联。",
            "【六步启动流程】书中提出六步流程：1) Assess your situation(评估现状)；2) Get buy-in for change(获得变革支持)；3) Train your stakeholders(培训利益相关者)；4) Start small and work incrementally(从小处开始渐进)；5) Evaluate your results(评估结果)；6) Keep relaunching(持续重启)。"
        ],
        handsOnPath: [
            "评估现有路线图：用《Product Roadmaps Relaunched》的标准审视，它是战略沟通工具还是功能列表？",
            "尝试Now-Next-Later格式：将现有路线图转换为三列格式，移除具体日期，用时间视野表达。",
            "定义路线图主题：将功能和项目聚合成高层次的客户需求或要解决的问题主题。",
            "添加置信度标记：为路线图项目添加'已确认/计划中/探索中'状态，明确表达不确定性。",
            "设计利益相关者沟通：为不同受众(工程团队、产品团队、领导层)定制不同粒度的路线图视图。"
        ],
        selfCheck: [
            "现有路线图是否提供战略背景，还是只是功能列表？",
            "路线图是否聚焦客户价值和业务目标，还是只关注技术产出？",
            "路线图是否明确表达不确定性？利益相关者是否理解它会变化？",
            "使用时间线还是时间视野？是否因为过早细化而导致承诺无法兑现？",
            "路线图是否帮助组织对齐？还是造成了混淆？"
        ],
        extensions: [
            "深入学习《Product Roadmaps Relaunched》中的案例研究和模板。",
            "研究ProdPad团队关于Now-Next-Later的详细指南和最佳实践。",
            "探索如何将技术路线图与产品路线图整合——确保技术投资支撑产品能力。",
            "学习敏捷环境中的滚动规划方法——定期更新，近期详细、远期粗略。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Product-Roadmaps-Relaunched-Direction-Uncertainty/dp/149197172X",
            "https://www.prodpad.com/blog/invented-now-next-later-roadmap/",
            "https://www.prodpad.com/guides/product-roadmaps/"
        ]
    },
    "tm-12-3": {
        lessonId: "tm-12-3",
        background: [
            "【开发者关系定义】Caroline Lewko和James Parton在《Developer Relations》中指出：'software developers are finally recognized as legitimate decision makers in the technology buying process'——软件开发者终于被认可为技术采购过程中的合法决策者。DevRel的核心是'strategic, repeatable, and adoptable frameworks, processes, and tools'——战略性、可重复、可采用的框架、流程和工具。",
            "【DevRel的价值】该书解释DevRel贡献于公司成功的方式包括：'how to launch a DevRel program, how to operate a successful DevRel program, how to measure the success of your program, and how to manage your stakeholders'——如何启动、运营、衡量DevRel项目以及管理利益相关者。",
            "【工程博客的价值】研究表明：'Engineer-driven company blogs allow your current developers to speak to your potential future tech talent – and do it in a language that they understand'——工程师驱动的公司博客让现有开发者用目标受众理解的语言与未来潜在技术人才交流。例如Etsy的Code as Craft博客是工程文化展示的典范。",
            "【开源战略】GitHub指出：'One of the benefits of putting your company's open source code out into other communities is inviting other developers to establish an interest in your own projects'——开源的好处之一是邀请外部开发者对你的项目产生兴趣。'90% of businesses today rely on open source software'——90%的企业依赖开源软件。开源战略'can further build a company's reputation in open source, and make the company even more attractive to open source developers'——可以增强公司在开源社区的声誉，吸引开源开发者。",
            "【雇主品牌重要性】研究显示：'50% of job candidates will reject offers from companies with unfavorable reputations, even when they come with a higher salary'——50%的求职者会拒绝声誉不好的公司，即使薪资更高。'86% of HR professionals admit that recruitment is now more like marketing'——86%的HR承认招聘现在更像营销。"
        ],
        keyDifficulties: [
            "【开源程序办公室(OSPO)】Linux Foundation定义：'An open source program office (OSPO) is the competency center for an organization's open source strategy and operations'——OSPO是组织开源战略和运营的能力中心。OSPO'sets policy on using and creating open source, provides organizational training and education'——制定使用和创建开源的政策，提供组织培训和教育。",
            "【启动开源项目的要素】开源项目需要：许可证(MIT、Apache 2.0、GPLv3最流行)、版权声明、使用文档。'The technical review should include verification of all license and copyright notices, and private code comments should be scrubbed.'——技术审查应包括验证所有许可证和版权声明，清理私有代码注释。",
            "【工程师作为品牌大使】最佳实践建议：'Want engineers to help with branding? Make it official. Put it in performance reviews, make Jira projects, get leadership buy-in'——想让工程师帮助品牌建设？让它正式化，纳入绩效评估，创建项目，获得领导支持。'One company got 200+ ambassadors this way, reaching millions.'——一家公司通过这种方式获得200+大使，触达数百万人。",
            "【真实性胜过包装】研究指出：'The winners aren't the ones with flashy campaigns — they're showing real engineering culture, warts and all'——赢家不是那些有炫目活动的，而是展示真实工程文化(包括缺点)的。Cisco'centering its employer branding on authenticity'——将雇主品牌建立在真实性上，鼓励员工分享真实故事。",
            "【DevRel受众】《Developer Relations》指出目标受众包括：'executives to investors, from marketing professionals to engineers'——从高管到投资者，从营销专业人员到工程师。DevRel需要理解并服务多元受众。"
        ],
        handsOnPath: [
            "进行技术影响力审计：盘点组织当前的技术影响力渠道(博客、开源、会议、社区)，评估效果和投入产出比。",
            "设计工程博客计划：制定博客内容策略，识别可以分享的技术故事，建立作者培养机制。",
            "评估开源机会：识别可以开源的内部项目，评估开源的收益和成本，制定开源策略。",
            "创建工程师大使计划：设计机制鼓励工程师参与对外分享，将其纳入职业发展路径。",
            "制定DevRel指标：定义衡量技术影响力的代理指标，如内容阅读量、开源项目Stars、招聘漏斗转化率等。"
        ],
        selfCheck: [
            "组织的技术品牌如何？是否有助于吸引优秀人才？",
            "工程师是否被鼓励和支持建立个人技术影响力？",
            "是否有系统性的方式展示组织的技术能力——博客、开源、会议？",
            "技术品牌传递的是真实的工程文化还是包装过的形象？",
            "DevRel投入是否有清晰的度量指标？是否能证明ROI？"
        ],
        extensions: [
            "深入阅读《Developer Relations》了解DevRel项目的完整生命周期管理。",
            "研究成功的工程博客案例：Etsy Code as Craft、Netflix Tech Blog、Spotify Engineering。",
            "了解TODO Group的开源最佳实践指南——提供政策模板和案例研究。",
            "探索如何平衡个人技术品牌与组织技术品牌——它们应该相辅相成。"
        ],
        sourceUrls: [
            "https://www.amazon.com/Developer-Relations-Build-Successful-Program/dp/1484271637",
            "https://opensource.guide/starting-a-project/",
            "https://github.com/kilimchoi/engineering-blogs"
        ]
    }
}

export const week12Quizzes: Record<string, QuizQuestion[]> = {
    "tm-12-1": [
        {
            id: "tm-12-1-q1",
            question: "Rumelt认为好战略的'内核(Kernel)'包含哪三个要素？",
            options: [
                "愿景、使命、价值观",
                "诊断、指导方针、一致行动",
                "目标、战术、执行",
                "问题、方案、评估"
            ],
            answer: 1,
            rationale: "Rumelt提出好战略的内核包含三个要素：Diagnosis(诊断)、Guiding Policy(指导方针)和Coherent Actions(一致行动)。"
        },
        {
            id: "tm-12-1-q2",
            question: "Rumelt描述的坏战略四个特征不包括哪个？",
            options: [
                "空话(Fluff)",
                "回避挑战",
                "混淆目标与战略",
                "预算不足"
            ],
            answer: 3,
            rationale: "Rumelt的四个坏战略特征是：Fluff(空话)、Failure to face the challenge(回避挑战)、Mistaking goals for strategy(混淆目标与战略)、Bad strategic goals(糟糕的战略目标)。预算不是特征之一。"
        },
        {
            id: "tm-12-1-q3",
            question: "Will Larson认为技术愿景应该描述多长时间后的状态？",
            options: [
                "6个月",
                "1年",
                "2-3年",
                "5-10年"
            ],
            answer: 2,
            rationale: "Larson定义：'A vision describes how you want your technology and organization to work in two to three years'——愿景描述2-3年后的状态。"
        },
        {
            id: "tm-12-1-q4",
            question: "Larson建议如何写工程战略？",
            options: [
                "聘请咨询公司",
                "写五份设计文档并提取共性",
                "复制行业最佳实践",
                "由CEO直接制定"
            ],
            answer: 1,
            rationale: "Larson提出：'To write an engineering strategy, write five design documents, and pull the similarities out'——写五份设计文档并提取共性得出战略。"
        },
        {
            id: "tm-12-1-q5",
            question: "Rumelt认为好战略几乎总是什么样的？",
            options: [
                "复杂的",
                "简单的",
                "神秘的",
                "昂贵的"
            ],
            answer: 1,
            rationale: "Rumelt强调：'Good strategy almost always looks simple'——好的战略几乎总是看起来简单。"
        },
        {
            id: "tm-12-1-q6",
            question: "Larson对好的工程战略有什么评价？",
            options: [
                "令人兴奋的",
                "无聊的(boring)",
                "复杂的",
                "保密的"
            ],
            answer: 1,
            rationale: "Larson观察到：'Good engineering strategy is boring'——好的工程战略是无聊的，它们只是'mundane documents'(普通的文档)。"
        },
        {
            id: "tm-12-1-q7",
            question: "Rumelt认为新战略在科学语言中是什么？",
            options: [
                "定律",
                "事实",
                "假设",
                "结论"
            ],
            answer: 2,
            rationale: "Rumelt指出：'A new strategy is, in the language of science, a hypothesis, and its implementation is an experiment'——新战略是假设，实施是实验。"
        },
        {
            id: "tm-12-1-q8",
            question: "Eben Hewitt在《Technology Strategy Patterns》中开发了多少个模式？",
            options: [
                "12个",
                "25个",
                "39个",
                "50个"
            ],
            answer: 2,
            rationale: "Hewitt在担任CTO、CIO和首席架构师的十年间开发了39个技术战略模式。"
        },
        {
            id: "tm-12-1-q9",
            question: "Larson认为愿景越怎样越有用？",
            options: [
                "越模糊",
                "越具体",
                "越简短",
                "越全面"
            ],
            answer: 1,
            rationale: "Larson强调：'Visions get more useful as they get more specific'——愿景越具体越有用。泛泛的陈述无法调和冲突的战略。"
        },
        {
            id: "tm-12-1-q10",
            question: "Rumelt描述的'空话(Fluff)'是什么？",
            options: [
                "具体的计划",
                "用大词和流行语掩盖思想空洞",
                "详细的预算",
                "清晰的目标"
            ],
            answer: 1,
            rationale: "Rumelt定义Fluff是'a form of gibberish masquerading as strategic concepts'——伪装成战略概念的胡言乱语，用大词和流行语创造高层次思维的假象。"
        },
        {
            id: "tm-12-1-q11",
            question: "Rumelt认为领导者必须持续应对什么两大挑战？",
            options: [
                "成本和收入",
                "惯性和熵",
                "技术和人才",
                "竞争和合作"
            ],
            answer: 1,
            rationale: "Rumelt描述两大挑战：'Inertia, as the resistance to change'(惯性——改变的阻力)和'Entropy, where disorder invariably escalates'(熵——混乱升级)。"
        },
        {
            id: "tm-12-1-q12",
            question: "Larson建议愿景文档应该多长？",
            options: [
                "5-10页",
                "1-2页",
                "20页以上",
                "越长越好"
            ],
            answer: 1,
            rationale: "Larson建议：'Keep it one to two pages long. The reality is that most people don't read long documents.'——控制在1-2页，因为大多数人不读长文档。"
        }
    ],
    "tm-12-2": [
        {
            id: "tm-12-2-q1",
            question: "《Product Roadmaps Relaunched》认为好的产品路线图是什么？",
            options: [
                "功能列表",
                "项目计划",
                "组织最重要、最有影响力的文档之一",
                "技术规格"
            ],
            answer: 2,
            rationale: "书中指出：'A good product roadmap is one of the most important and influential documents an organization can develop'——好的产品路线图是组织最重要、最有影响力的文档之一。"
        },
        {
            id: "tm-12-2-q2",
            question: "谁发明了Now-Next-Later路线图？",
            options: [
                "Steve Jobs",
                "Janna Bastow",
                "Eric Ries",
                "Marty Cagan"
            ],
            answer: 1,
            rationale: "Janna Bastow是ProdPad的联合创始人，发明了Now-Next-Later路线图格式。"
        },
        {
            id: "tm-12-2-q3",
            question: "Now-Next-Later框架的根本意义是什么？",
            options: [
                "增加更多功能",
                "移除时间线约束，给予更人性化的时间视野",
                "加快开发速度",
                "减少沟通成本"
            ],
            answer: 1,
            rationale: "Bastow解释：'The fundamental thing about the NNL is that it removes the constraints of the timeline and gives you something much more human: time horizons'——移除时间线约束，给予时间视野。"
        },
        {
            id: "tm-12-2-q4",
            question: "路线图不应该做什么？",
            options: [
                "提供战略背景",
                "做团队无法兑现的承诺",
                "生成对产品方向的兴奋",
                "对齐组织优先级"
            ],
            answer: 1,
            rationale: "书中强调路线图'should not make promises a team cannot deliver on'——不应该做团队无法兑现的承诺。"
        },
        {
            id: "tm-12-2-q5",
            question: "《Product Roadmaps Relaunched》认为路线图应该聚焦什么而非产出？",
            options: [
                "功能数量",
                "影响(结果)",
                "代码行数",
                "会议次数"
            ],
            answer: 1,
            rationale: "书中强调'focusing on impact (outcomes) rather than just deliverables (outputs)'——聚焦影响(结果)而非仅仅是交付物(产出)。"
        },
        {
            id: "tm-12-2-q6",
            question: "时间视野为什么有力量？",
            options: [
                "可以设置更多截止日期",
                "允许带着广泛计划前进但只对眼前做承诺",
                "可以增加更多功能",
                "减少团队人数"
            ],
            answer: 1,
            rationale: "Bastow指出：'Time horizons allow you to move forward with a broad plan, yet only make commitments to what lies directly ahead of you'——允许带着广泛计划前进但只对眼前做承诺。"
        },
        {
            id: "tm-12-2-q7",
            question: "路线图的必需元素不包括哪个？",
            options: [
                "产品愿景",
                "业务目标",
                "详细的工时估算",
                "主题"
            ],
            answer: 2,
            rationale: "必需元素包括：产品愿景、业务目标、主题、时间框架和免责声明。详细的工时估算不是必需元素。"
        },
        {
            id: "tm-12-2-q8",
            question: "在路线图上设置截止日期会导致什么问题？",
            options: [
                "提高效率",
                "过早过于细化，导致过度承诺",
                "减少沟通",
                "增加创新"
            ],
            answer: 1,
            rationale: "Bastow解释设置截止日期'may be going too granular too early'——可能过早过于细化，导致'overpromise and underdeliver'。"
        },
        {
            id: "tm-12-2-q9",
            question: "《Product Roadmaps Relaunched》提出的六步启动流程的第一步是什么？",
            options: [
                "培训利益相关者",
                "评估现状",
                "获得变革支持",
                "评估结果"
            ],
            answer: 1,
            rationale: "六步流程的第一步是'Assess your situation'——评估现状。"
        },
        {
            id: "tm-12-2-q10",
            question: "Now-Next-Later路线图的三列分别是什么？",
            options: [
                "过去、现在、未来",
                "现在、即将、以后",
                "计划、执行、完成",
                "想法、开发、发布"
            ],
            answer: 1,
            rationale: "三列是：Now(正在做的)、Next(即将做的)、Later(未来想做的)。"
        },
        {
            id: "tm-12-2-q11",
            question: "路线图为什么需要免责声明？",
            options: [
                "法律要求",
                "表明路线图可能变化",
                "增加页数",
                "满足格式要求"
            ],
            answer: 1,
            rationale: "免责声明是必需元素，用于'An indication that the roadmap is subject to change'——表明路线图可能变化。"
        },
        {
            id: "tm-12-2-q12",
            question: "路线图应该与什么工具结合使用？",
            options: [
                "甘特图",
                "OKR",
                "时间表",
                "预算表"
            ],
            answer: 1,
            rationale: "书中推荐将路线图与OKR结合：'OKRs consist of qualitative goals paired with quantitative measures'——OKR由定性目标配对定量衡量组成。"
        }
    ],
    "tm-12-3": [
        {
            id: "tm-12-3-q1",
            question: "《Developer Relations》指出软件开发者被认可为什么？",
            options: [
                "成本中心",
                "技术采购过程中的合法决策者",
                "辅助人员",
                "外包资源"
            ],
            answer: 1,
            rationale: "书中指出：'software developers are finally recognized as legitimate decision makers in the technology buying process'——开发者被认可为技术采购的合法决策者。"
        },
        {
            id: "tm-12-3-q2",
            question: "根据研究，多少比例的求职者会拒绝声誉不好的公司？",
            options: [
                "20%",
                "35%",
                "50%",
                "75%"
            ],
            answer: 2,
            rationale: "研究显示：'50% of job candidates will reject offers from companies with unfavorable reputations, even when they come with a higher salary'——50%会拒绝，即使薪资更高。"
        },
        {
            id: "tm-12-3-q3",
            question: "根据GitHub数据，多少比例的企业依赖开源软件？",
            options: [
                "50%",
                "70%",
                "80%",
                "90%"
            ],
            answer: 3,
            rationale: "GitHub指出：'90% of businesses today rely on open source software'——90%的企业依赖开源软件。"
        },
        {
            id: "tm-12-3-q4",
            question: "OSPO是什么的缩写？",
            options: [
                "Open Source Product Organization",
                "Open Source Program Office",
                "Online Software Platform Organization",
                "Operational Software Project Office"
            ],
            answer: 1,
            rationale: "OSPO是'Open Source Program Office'——开源程序办公室，是组织开源战略和运营的能力中心。"
        },
        {
            id: "tm-12-3-q5",
            question: "最流行的开源许可证不包括哪个？",
            options: [
                "MIT",
                "Apache 2.0",
                "GPLv3",
                "Creative Commons"
            ],
            answer: 3,
            rationale: "MIT、Apache 2.0和GPLv3是最流行的开源许可证。Creative Commons主要用于非软件内容。"
        },
        {
            id: "tm-12-3-q6",
            question: "如何让工程师帮助品牌建设？",
            options: [
                "强制要求",
                "让它正式化，纳入绩效评估，获得领导支持",
                "只靠自愿",
                "给予现金奖励"
            ],
            answer: 1,
            rationale: "最佳实践是：'Make it official. Put it in performance reviews, make Jira projects, get leadership buy-in'——让它正式化，纳入绩效评估，获得领导支持。"
        },
        {
            id: "tm-12-3-q7",
            question: "研究显示多少比例的HR认为招聘现在更像营销？",
            options: [
                "50%",
                "65%",
                "75%",
                "86%"
            ],
            answer: 3,
            rationale: "研究显示：'86% of HR professionals admit that recruitment is now more like marketing'——86%的HR承认招聘现在更像营销。"
        },
        {
            id: "tm-12-3-q8",
            question: "雇主品牌建设的赢家是什么样的？",
            options: [
                "有炫目活动的",
                "展示真实工程文化(包括缺点)的",
                "预算最多的",
                "团队最大的"
            ],
            answer: 1,
            rationale: "研究指出：'The winners aren't the ones with flashy campaigns — they're showing real engineering culture, warts and all'——赢家是展示真实工程文化的，包括缺点。"
        },
        {
            id: "tm-12-3-q9",
            question: "工程博客的价值是什么？",
            options: [
                "增加网站流量",
                "让现有开发者用目标受众理解的语言与潜在人才交流",
                "满足营销需求",
                "增加SEO排名"
            ],
            answer: 1,
            rationale: "研究表明：'Engineer-driven company blogs allow your current developers to speak to your potential future tech talent – and do it in a language that they understand'——让开发者用受众理解的语言交流。"
        },
        {
            id: "tm-12-3-q10",
            question: "开源项目启动前的技术审查应该包括什么？",
            options: [
                "性能测试",
                "验证所有许可证和版权声明，清理私有代码注释",
                "代码覆盖率检查",
                "安全扫描"
            ],
            answer: 1,
            rationale: "指南指出：'The technical review should include verification of all license and copyright notices, and private code comments should be scrubbed'——验证许可证和版权，清理私有注释。"
        },
        {
            id: "tm-12-3-q11",
            question: "《Developer Relations》的目标受众不包括谁？",
            options: [
                "高管",
                "投资者",
                "营销专业人员",
                "普通消费者"
            ],
            answer: 3,
            rationale: "书中指出受众是'executives to investors, from marketing professionals to engineers'——从高管到投资者，从营销专业人员到工程师。普通消费者不是主要受众。"
        },
        {
            id: "tm-12-3-q12",
            question: "开源战略可以给公司带来什么？",
            options: [
                "增加开发成本",
                "增强公司在开源社区的声誉，吸引开源开发者",
                "减少代码质量",
                "增加法律风险"
            ],
            answer: 1,
            rationale: "GitHub指出开源战略'can further build a company's reputation in open source, and make the company even more attractive to open source developers'——增强声誉，吸引开发者。"
        }
    ]
}
