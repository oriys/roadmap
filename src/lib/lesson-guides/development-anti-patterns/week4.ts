import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "ap-4-1": {
        lessonId: "ap-4-1",
        background: [
            "【死亡进军定义】Death March 是'a project which participants believe to be destined for failure, or that requires a stretch of unsustainable overwork'——参与者认为注定失败或需要不可持续的过度工作的项目。",
            "【Yourdon 的量化定义】Edward Yourdon 定义：'a death march project is one whose project parameters exceed the norm by at least 50 percent'——项目参数至少超出正常值 50%，包括时间压缩、人员削减或范围膨胀。",
            "【典型约束】死亡进军项目通常涉及：(1) 时间压缩至正常估算的一半以下；(2) 人员减少到正常配置的一半以下；(3) 功能范围是正常情况的两倍。",
            "【项目管理三角】Iron Triangle（铁三角）：范围、时间、成本三者相互制约。当一个或多个约束被不合理地压缩而不调整其他因素时，项目就走向死亡进军。",
            "【人员代价】死亡进军的影响远超项目失败：'colleagues who left the field permanently, whose marriages ended, whose health was destroyed, who required psychological treatment'——对团队成员身心健康造成严重损害。"
        ],
        keyDifficulties: [
            "【识别预警信号】预警信号：进度、预算、人员约为完成所需的一半；功能需求不切实际；团队每天工作 14 小时、每周 6-7 天；管理层对风险视而不见或无替代方案。",
            "【敏捷 vs 死亡进军】核心区别在于可持续性：敏捷方法强调'sustainable pace'（可持续节奏），而死亡进军要求不可持续的工作强度。",
            "【常见成因】不切实际的进度或功能预期；缺乏适当文档、培训或外部专业知识；各方误解、未解决的假设、不匹配的期望；外部变化导致需求漂移。",
            "【管理盲点】管理层往往因为沉没成本、政治压力或缺乏风险意识而继续推进注定失败的项目，拒绝承认现实或调整计划。"
        ],
        handsOnPath: [
            "评估当前项目的'铁三角'：范围、时间、成本是否平衡？是否有约束被不合理压缩？",
            "建立项目健康度检查清单：工作时长、团队情绪、技术债务增长率、需求变更频率。",
            "实践敏捷回顾：定期评估团队是否保持可持续节奏，识别过度工作的早期信号。",
            "建立升级机制：当项目参数超出正常值 50%时，如何及时升级并重新协商约束。",
            "记录项目假设和依赖：明确哪些假设如果错误会导致项目失败，定期验证这些假设。"
        ],
        selfCheck: [
            "什么是死亡进军项目？Yourdon 的量化定义是什么？",
            "死亡进军项目的典型约束有哪些？项目管理铁三角是什么？",
            "死亡进军对团队成员的人员代价有哪些？",
            "敏捷方法与死亡进军的核心区别是什么？",
            "死亡进军项目的常见成因有哪些？",
            "如何识别死亡进军的预警信号？"
        ],
        extensions: [
            "阅读 Edward Yourdon 的《Death March》一书，了解如何识别和应对死亡进军项目。",
            "研究项目管理铁三角及其在实践中的应用。",
            "学习敏捷方法中关于可持续节奏的实践。",
            "探索如何通过 OKR 或其他目标设定框架避免不切实际的项目期望。"
        ],
        sourceUrls: [
            "https://en.wikipedia.org/wiki/Death_march_(project_management)",
            "https://www.informit.com/articles/article.aspx?p=169512",
            "https://en.wikipedia.org/wiki/Project_management_triangle"
        ]
    },
    "ap-4-2": {
        lessonId: "ap-4-2",
        background: [
            "【分析瘫痪定义】Analysis Paralysis 是过度分析导致无法做出决策的反模式。团队陷入无尽的评估、会议和文档中，而非实际行动和交付。",
            "【表现形式】典型表现：需求文档越写越详细但永远不完整；技术选型评估无限期延长；每个决策都需要完美信息；恐惧做出'错误'选择导致不做选择。",
            "【幻灯片工程】Slideware Engineering 指产出大量演示文稿、架构图和规划文档，但实际可运行的代码极少。产出看起来很'专业'，但没有可验证的价值。",
            "【MVP 思维】Minimum Viable Product（最小可行产品）理念：用最小的努力构建可测试假设的产品，通过快速迭代学习，而非试图一次性设计完美方案。",
            "【精益 UX】Lean UX 强调通过小实验和快速反馈替代冗长的前期分析，'build-measure-learn'循环比完美文档更有价值。"
        ],
        keyDifficulties: [
            "【追求完美的陷阱】分析瘫痪源于对不确定性的恐惧和对'完美'的追求。但软件开发本质上充满不确定性，完美信息永远不可能获得。",
            "【文档主义风险】过度依赖文档和计划会创造虚假的确定感。文档本身不创造价值，只有可运行的软件才能验证假设。",
            "【决策疲劳】需要做的决策太多时，团队可能陷入决策疲劳，导致要么不决策，要么做出草率决策。",
            "【时间盒的价值】为分析和决策设定时间限制（time-boxing）可以打破分析瘫痪，强制团队在不完美信息下做出决策。"
        ],
        handsOnPath: [
            "识别当前项目中的分析瘫痪迹象：哪些决策已经讨论多久了？有哪些文档在不断更新但从未'完成'？",
            "实践时间盒：为下一个技术决策设定固定的时间限制（如 2 小时评估 + 30 分钟决策会议）。",
            "应用 MVP 思维：选择一个功能，设计最小可验证的版本，快速交付并收集反馈。",
            "建立决策日志：记录做出的决策、背景和理由，接受'决策可以被修正'的事实。",
            "评估产出价值：审视过去一个月的产出，有多少是可运行的软件 vs 文档/演示？"
        ],
        selfCheck: [
            "什么是分析瘫痪？它的典型表现有哪些？",
            "什么是幻灯片工程？它的危害是什么？",
            "MVP 思维的核心理念是什么？",
            "为什么追求'完美'的分析会导致瘫痪？",
            "时间盒(time-boxing)如何帮助打破分析瘫痪？",
            "精益 UX 的 build-measure-learn 循环是什么？"
        ],
        extensions: [
            "阅读《Lean UX》了解如何用实验替代冗长的前期分析。",
            "研究 MVP 的概念和实践，学习如何定义'最小可行'。",
            "探索看板方法如何通过可视化和限制在制品来避免分析瘫痪。",
            "学习决策框架（如 RAPID、DACI）来加速组织决策。"
        ],
        sourceUrls: [
            "https://en.wikipedia.org/wiki/Analysis_paralysis",
            "https://www.productplan.com/glossary/minimum-viable-product/",
            "https://www.atlassian.com/agile/kanban"
        ]
    },
    "ap-4-3": {
        lessonId: "ap-4-3",
        background: [
            "【心理安全定义】Amy Edmondson 定义心理安全为'a shared belief held by members of a team that the team is safe for interpersonal risk taking'——团队成员共同相信在团队中承担人际风险是安全的。",
            "【Google Project Aristotle】Google 的 Project Aristotle 研究发现，心理安全是团队成功的最关键因素。团队组成（资历、教育、背景）远不如团队协作方式重要。",
            "【五个关键因素】Google 识别的团队成功五要素（按重要性排序）：(1) 心理安全；(2) 可靠性；(3) 结构与清晰度；(4) 工作意义；(5) 工作影响力。",
            "【负面人格影响】团队中的负面人格（如攻击性、贬低他人、拒绝承担责任）会破坏心理安全，导致成员不敢发言、不敢承认错误、不敢提出挑战性想法。",
            "【发言平等性】高绩效团队的特征之一是'equality in conversational turn-taking'——所有成员有平等的发言机会，而非由少数人主导讨论。"
        ],
        keyDifficulties: [
            "【识别心理不安全】信号：团队成员不主动发言或只说领导想听的话；错误被隐藏而非公开讨论；没人挑战明显有问题的决策；归咎文化而非学习文化。",
            "【建立安全的挑战】心理安全需要时间和一致的行为来建立，但可能因为一次糟糕的反应而被摧毁。领导者的示范作用至关重要。",
            "【冲突 vs 心理安全】心理安全不等于没有冲突。健康的团队能够进行建设性冲突——挑战想法而非攻击人。",
            "【难以衡量】心理安全是主观感受，难以直接衡量。需要通过行为观察和调查问卷间接评估。"
        ],
        handsOnPath: [
            "使用 Google 的团队效能自评工具评估团队的五个关键因素。",
            "在回顾会议中增加安全检查：团队成员是否感到可以畅所欲言？",
            "作为领导者练习：主动承认自己的错误和不确定性，为团队示范'脆弱性'。",
            "观察会议中的发言模式：是否所有人都有发言机会？谁在主导讨论？",
            "建立'无责备'事后分析机制：聚焦系统改进而非个人责备。"
        ],
        selfCheck: [
            "什么是心理安全？谁首先提出这个概念？",
            "Google Project Aristotle 的核心发现是什么？",
            "团队成功的五个关键因素是什么？排序如何？",
            "如何识别团队缺乏心理安全的信号？",
            "心理安全与'没有冲突'有什么区别？",
            "为什么发言平等性对高绩效团队重要？"
        ],
        extensions: [
            "阅读 Amy Edmondson 的《The Fearless Organization》深入理解心理安全。",
            "研究 Google re:Work 的团队效能指南和自评工具。",
            "学习《Crucial Conversations》中的关键对话技巧。",
            "探索如何在远程/混合团队中建立心理安全。"
        ],
        sourceUrls: [
            "https://rework.withgoogle.com/guides/understanding-team-effectiveness/",
            "https://psychsafety.com/googles-project-aristotle/",
            "https://hbr.org/2000/09/managing-your-difficult-people"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "ap-4-1": [
        {
            id: "ap-4-1-q1",
            question: "什么是死亡进军(Death March)项目？",
            options: [
                "一种敏捷开发方法",
                "参与者认为注定失败或需要不可持续的过度工作的项目",
                "一种项目管理认证",
                "快速交付的项目"
            ],
            answer: 1,
            rationale: "死亡进军是'a project which participants believe to be destined for failure, or that requires a stretch of unsustainable overwork'。"
        },
        {
            id: "ap-4-1-q2",
            question: "Edward Yourdon 对死亡进军项目的量化定义是什么？",
            options: [
                "项目延期超过 30 天",
                "项目参数至少超出正常值 50%",
                "项目预算超出 100%",
                "项目团队超过 50 人"
            ],
            answer: 1,
            rationale: "Yourdon 定义：'a death march project is one whose project parameters exceed the norm by at least 50 percent'——时间、人员或范围超出正常值 50%。"
        },
        {
            id: "ap-4-1-q3",
            question: "项目管理铁三角(Iron Triangle)包括哪三个约束？",
            options: [
                "质量、速度、成本",
                "范围、时间、成本",
                "团队、技术、流程",
                "计划、执行、监控"
            ],
            answer: 1,
            rationale: "项目管理铁三角包括：范围(Scope)、时间(Time)、成本(Cost)三个相互制约的约束。"
        },
        {
            id: "ap-4-1-q4",
            question: "死亡进军对团队成员的影响不包括以下哪项？",
            options: [
                "永久离开行业",
                "婚姻破裂",
                "获得丰厚奖金",
                "健康受损"
            ],
            answer: 2,
            rationale: "死亡进军对人员的代价包括：离开行业、婚姻破裂、健康受损、需要心理治疗等。丰厚奖金不是死亡进军的典型结果。"
        },
        {
            id: "ap-4-1-q5",
            question: "敏捷方法与死亡进军的核心区别是什么？",
            options: [
                "使用的工具不同",
                "可持续性——敏捷强调可持续节奏",
                "文档数量不同",
                "团队规模不同"
            ],
            answer: 1,
            rationale: "'The main difference between an Agile project and a Death March project is sustainability'——敏捷方法强调可持续节奏(sustainable pace)。"
        },
        {
            id: "ap-4-1-q6",
            question: "死亡进军的典型预警信号不包括以下哪项？",
            options: [
                "进度、预算、人员约为完成所需的一半",
                "团队每天工作 14 小时、每周 6-7 天",
                "定期进行敏捷回顾会议",
                "管理层对风险视而不见"
            ],
            answer: 2,
            rationale: "死亡进军的预警信号包括资源不足、过度工作、管理层盲目等。定期敏捷回顾是健康项目的特征，不是死亡进军的信号。"
        },
        {
            id: "ap-4-1-q7",
            question: "死亡进军项目的常见成因不包括以下哪项？",
            options: [
                "不切实际的进度或功能预期",
                "缺乏适当文档和培训",
                "充分的需求评审流程",
                "各方误解和不匹配的期望"
            ],
            answer: 2,
            rationale: "死亡进军的常见成因包括不切实际的预期、缺乏培训、各方误解等。充分的需求评审流程有助于避免死亡进军。"
        },
        {
            id: "ap-4-1-q8",
            question: "谁写了关于死亡进军项目的权威书籍？",
            options: [
                "Martin Fowler",
                "Kent Beck",
                "Edward Yourdon",
                "Robert C. Martin"
            ],
            answer: 2,
            rationale: "Edward Yourdon 写了《Death March: The Complete Software Developer's Guide to Surviving 'Mission Impossible' Projects》。"
        },
        {
            id: "ap-4-1-q9",
            question: "死亡进军项目的时间约束通常表现为什么？",
            options: [
                "时间延长到正常估算的两倍",
                "时间压缩到正常估算的一半以下",
                "时间与正常估算相同",
                "时间由团队自行决定"
            ],
            answer: 1,
            rationale: "死亡进军的时间约束：'The schedule has been compressed to less than half the amount estimated by a rational estimating process'。"
        },
        {
            id: "ap-4-1-q10",
            question: "如何避免项目成为死亡进军？",
            options: [
                "增加更多的工作时间",
                "减少团队沟通",
                "建立合理的估算流程并在约束超出时及时升级",
                "忽略风险继续推进"
            ],
            answer: 2,
            rationale: "避免死亡进军需要：合理的估算流程、及时识别约束超出、升级并重新协商，而非简单增加工作时间。"
        },
        {
            id: "ap-4-1-q11",
            question: "死亡进军项目的范围约束通常表现为什么？",
            options: [
                "功能范围减少到正常的一半",
                "功能范围是正常情况的两倍",
                "功能范围与正常相同",
                "没有明确的功能范围"
            ],
            answer: 1,
            rationale: "死亡进军的范围约束：'The functionality, features...are twice what they would be under normal circumstances'——功能范围是正常的两倍。"
        },
        {
            id: "ap-4-1-q12",
            question: "为什么管理层往往继续推进明显会失败的项目？",
            options: [
                "因为项目一定会成功",
                "沉没成本、政治压力或缺乏风险意识",
                "因为团队能力很强",
                "因为有充足的资源"
            ],
            answer: 1,
            rationale: "管理层继续推进失败项目往往是因为沉没成本（已投入太多）、政治压力或缺乏风险意识，拒绝承认现实。"
        }
    ],
    "ap-4-2": [
        {
            id: "ap-4-2-q1",
            question: "什么是分析瘫痪(Analysis Paralysis)？",
            options: [
                "分析能力不足",
                "过度分析导致无法做出决策的反模式",
                "分析工具故障",
                "数据分析方法"
            ],
            answer: 1,
            rationale: "分析瘫痪是过度分析导致无法做出决策的反模式，团队陷入无尽的评估和会议中，而非实际行动。"
        },
        {
            id: "ap-4-2-q2",
            question: "分析瘫痪的典型表现不包括以下哪项？",
            options: [
                "需求文档越写越详细但永远不完整",
                "技术选型评估无限期延长",
                "快速原型验证假设",
                "每个决策都需要完美信息"
            ],
            answer: 2,
            rationale: "分析瘫痪的表现包括无尽的文档、无限期评估、追求完美信息等。快速原型是打破分析瘫痪的方法，不是其表现。"
        },
        {
            id: "ap-4-2-q3",
            question: "什么是幻灯片工程(Slideware Engineering)？",
            options: [
                "使用 PowerPoint 进行培训",
                "产出大量演示文稿和文档，但实际可运行代码极少",
                "制作精美的用户界面",
                "创建技术演示视频"
            ],
            answer: 1,
            rationale: "幻灯片工程指产出大量演示文稿、架构图和规划文档，但实际可运行的代码极少，没有可验证的价值。"
        },
        {
            id: "ap-4-2-q4",
            question: "MVP(最小可行产品)的核心理念是什么？",
            options: [
                "构建功能最少的产品",
                "用最小努力构建可测试假设的产品，通过快速迭代学习",
                "只做最简单的功能",
                "减少测试工作"
            ],
            answer: 1,
            rationale: "MVP 理念是用最小的努力构建可测试假设的产品，通过快速迭代学习，而非试图一次性设计完美方案。"
        },
        {
            id: "ap-4-2-q5",
            question: "时间盒(time-boxing)如何帮助打破分析瘫痪？",
            options: [
                "延长分析时间",
                "为分析和决策设定时间限制，强制在不完美信息下做出决策",
                "取消所有分析活动",
                "增加更多分析师"
            ],
            answer: 1,
            rationale: "时间盒为分析和决策设定时间限制，强制团队在不完美信息下做出决策，打破无限期分析的循环。"
        },
        {
            id: "ap-4-2-q6",
            question: "精益 UX 的核心循环是什么？",
            options: [
                "计划-执行-检查-行动",
                "构建-测量-学习(build-measure-learn)",
                "分析-设计-实现-测试",
                "需求-设计-编码-测试"
            ],
            answer: 1,
            rationale: "精益 UX 强调'build-measure-learn'（构建-测量-学习）循环，通过小实验和快速反馈替代冗长的前期分析。"
        },
        {
            id: "ap-4-2-q7",
            question: "分析瘫痪的根本原因是什么？",
            options: [
                "分析工具不足",
                "对不确定性的恐惧和对'完美'的追求",
                "团队能力不足",
                "项目预算不足"
            ],
            answer: 1,
            rationale: "分析瘫痪源于对不确定性的恐惧和对'完美'的追求。但软件开发充满不确定性，完美信息永远不可能获得。"
        },
        {
            id: "ap-4-2-q8",
            question: "为什么过度依赖文档和计划会有风险？",
            options: [
                "文档太贵",
                "文档本身不创造价值，创造虚假的确定感",
                "文档太难写",
                "文档会过时"
            ],
            answer: 1,
            rationale: "过度依赖文档和计划会创造虚假的确定感。文档本身不创造价值，只有可运行的软件才能验证假设。"
        },
        {
            id: "ap-4-2-q9",
            question: "如何评估团队是否陷入分析瘫痪？",
            options: [
                "检查代码行数",
                "审视产出中可运行软件 vs 文档/演示的比例",
                "统计会议次数",
                "计算加班时间"
            ],
            answer: 1,
            rationale: "评估分析瘫痪可以审视产出价值：过去一个月有多少是可运行的软件 vs 文档/演示？如果大部分是后者，可能存在问题。"
        },
        {
            id: "ap-4-2-q10",
            question: "什么是决策疲劳？",
            options: [
                "做决策太快",
                "需要做的决策太多导致不决策或草率决策",
                "决策能力提升",
                "决策工具故障"
            ],
            answer: 1,
            rationale: "决策疲劳是指需要做的决策太多时，团队可能陷入要么不决策，要么做出草率决策的状态。"
        },
        {
            id: "ap-4-2-q11",
            question: "打破分析瘫痪的有效方法不包括以下哪项？",
            options: [
                "设定时间盒",
                "应用 MVP 思维",
                "追求更完美的信息",
                "建立决策日志接受决策可修正的事实"
            ],
            answer: 2,
            rationale: "打破分析瘫痪的方法包括时间盒、MVP 思维、接受决策可修正等。追求更完美信息会加剧而非解决分析瘫痪。"
        },
        {
            id: "ap-4-2-q12",
            question: "看板方法如何帮助避免分析瘫痪？",
            options: [
                "增加更多的分析阶段",
                "通过可视化和限制在制品来推动流动",
                "取消所有会议",
                "延长分析时间"
            ],
            answer: 1,
            rationale: "看板方法通过可视化工作流程和限制在制品(WIP)来避免工作堆积在分析阶段，推动工作向完成流动。"
        }
    ],
    "ap-4-3": [
        {
            id: "ap-4-3-q1",
            question: "Amy Edmondson 如何定义心理安全？",
            options: [
                "没有任何压力的工作环境",
                "团队成员共同相信在团队中承担人际风险是安全的",
                "物理安全的工作场所",
                "永远不会被批评"
            ],
            answer: 1,
            rationale: "Amy Edmondson 定义心理安全为'a shared belief held by members of a team that the team is safe for interpersonal risk taking'。"
        },
        {
            id: "ap-4-3-q2",
            question: "Google Project Aristotle 的核心发现是什么？",
            options: [
                "团队规模是成功的关键",
                "心理安全是团队成功的最关键因素",
                "技术能力决定团队绩效",
                "薪酬水平影响团队表现"
            ],
            answer: 1,
            rationale: "Project Aristotle 发现'psychological safety is the single most critical factor in team success'——心理安全是团队成功的最关键因素。"
        },
        {
            id: "ap-4-3-q3",
            question: "Google 识别的团队成功五要素中排第一的是什么？",
            options: [
                "可靠性",
                "结构与清晰度",
                "心理安全",
                "工作影响力"
            ],
            answer: 2,
            rationale: "五个关键因素按重要性排序：(1) 心理安全；(2) 可靠性；(3) 结构与清晰度；(4) 工作意义；(5) 工作影响力。"
        },
        {
            id: "ap-4-3-q4",
            question: "Project Aristotle 关于团队组成的发现是什么？",
            options: [
                "团队组成是最重要的因素",
                "团队组成（资历、教育、背景）远不如团队协作方式重要",
                "高学历团队表现更好",
                "资深团队更成功"
            ],
            answer: 1,
            rationale: "研究发现'the composition of a team (e.g., seniority, education, background) mattered far less than how the team worked together'。"
        },
        {
            id: "ap-4-3-q5",
            question: "缺乏心理安全的团队信号不包括以下哪项？",
            options: [
                "成员不主动发言",
                "错误被隐藏而非公开讨论",
                "成员积极挑战有问题的决策",
                "归咎文化而非学习文化"
            ],
            answer: 2,
            rationale: "缺乏心理安全的信号包括：不主动发言、隐藏错误、没人挑战问题决策、归咎文化等。积极挑战是心理安全的表现，不是缺乏的信号。"
        },
        {
            id: "ap-4-3-q6",
            question: "心理安全与'没有冲突'的关系是什么？",
            options: [
                "心理安全等于没有冲突",
                "心理安全的团队能够进行建设性冲突——挑战想法而非攻击人",
                "有心理安全的团队从不争论",
                "冲突总是破坏心理安全"
            ],
            answer: 1,
            rationale: "心理安全不等于没有冲突。健康的团队能够进行建设性冲突——挑战想法而非攻击人，这恰恰需要心理安全作为基础。"
        },
        {
            id: "ap-4-3-q7",
            question: "高绩效团队的发言特征是什么？",
            options: [
                "由领导主导讨论",
                "最资深的人发言最多",
                "所有成员有平等的发言机会(conversational turn-taking)",
                "只有专家可以发言"
            ],
            answer: 2,
            rationale: "研究发现高绩效团队的特征之一是'equality in conversational turn-taking'——所有成员有平等的发言机会。"
        },
        {
            id: "ap-4-3-q8",
            question: "心理安全的团队有什么表现？",
            options: [
                "从不犯错误",
                "更愿意承认错误并从中学习，更愿意协作和互相帮助",
                "工作更轻松",
                "从不加班"
            ],
            answer: 1,
            rationale: "心理安全的团队'more likely to admit to making mistakes and to learn from them...more willing to collaborate and help one another'。"
        },
        {
            id: "ap-4-3-q9",
            question: "建立心理安全的挑战是什么？",
            options: [
                "需要大量预算",
                "需要时间和一致的行为，但可能因一次糟糕反应而被摧毁",
                "需要特殊的培训认证",
                "只有大公司才能做到"
            ],
            answer: 1,
            rationale: "心理安全需要时间和一致的行为来建立，但可能因为一次糟糕的反应而被摧毁。领导者的示范作用至关重要。"
        },
        {
            id: "ap-4-3-q10",
            question: "负面人格对团队的影响是什么？",
            options: [
                "提高团队效率",
                "破坏心理安全，导致成员不敢发言、不敢承认错误",
                "增加创新",
                "改善沟通"
            ],
            answer: 1,
            rationale: "团队中的负面人格（攻击性、贬低他人等）会破坏心理安全，导致成员不敢发言、不敢承认错误、不敢提出挑战性想法。"
        },
        {
            id: "ap-4-3-q11",
            question: "谁写了《The Fearless Organization》一书？",
            options: [
                "Simon Sinek",
                "Amy Edmondson",
                "Patrick Lencioni",
                "Brené Brown"
            ],
            answer: 1,
            rationale: "Amy Edmondson 是心理安全概念的提出者，她的 2018 年著作《The Fearless Organization》深入探讨了这一主题。"
        },
        {
            id: "ap-4-3-q12",
            question: "领导者如何示范心理安全？",
            options: [
                "永远不承认错误",
                "主动承认自己的错误和不确定性，为团队示范'脆弱性'",
                "严格批评团队成员的错误",
                "避免任何冲突"
            ],
            answer: 1,
            rationale: "领导者可以通过主动承认自己的错误和不确定性，为团队示范'脆弱性'，从而建立心理安全的文化。"
        }
    ]
}
