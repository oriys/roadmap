import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const techManagementStages: Stage[] = [
  {
    id: "foundation",
    title: "第一阶段：技术管理基础",
    duration: "第 1-3 周",
    goal: "建立技术管理的核心认知，理解从工程师到管理者的角色转变",
    weeks: [
      {
        id: "w1",
        title: "第 1 周：角色转变与心态调整",
        summary: "理解技术管理者的角色定位，建立正确的管理心态",
        overview: "从优秀的工程师到技术管理者，需要经历一次重大的角色转变。本周我们将深入探讨这个转变过程，帮助你建立正确的管理思维模式。",
        keyPoints: [
          "理解工程师与管理者的核心差异",
          "识别常见的转型陷阱",
          "建立以团队为中心的思维方式",
          "平衡技术深度与管理宽度"
        ],
        lessons: [
          {
            id: "tm-1-1",
            title: "从工程师到管理者的蜕变",
            detail: "深入理解角色转变的本质，学习如何从\"做事\"转向\"成事\"",
            overview: "作为工程师，你的价值体现在个人贡献上。作为管理者，你的价值体现在团队的整体产出上。",
            keyPoints: [
              "工程师思维 vs 管理者思维",
              "从个人贡献者到团队赋能者",
              "技术专家陷阱与应对策略",
              "建立管理者的自我认知"
            ],
            resources: [
              { title: "The Manager's Path - Camille Fournier", url: "https://www.oreilly.com/library/view/the-managers-path/9781491973882/" },
              { title: "What Got You Here Won't Get You There", url: "https://www.amazon.com/What-Got-Here-Wont-There/dp/1401301304" },
              { title: "5 Pieces of Advice for First-Time Managers", url: "https://hbr.org/2022/06/5-pieces-of-advice-for-first-time-managers" }
            ]
          },
          {
            id: "tm-1-2",
            title: "技术管理者的核心职责",
            detail: "明确技术管理者的关键职责领域，建立工作优先级",
            overview: "技术管理者需要在人员管理、技术方向、项目交付和组织建设之间找到平衡。",
            keyPoints: [
              "四大核心职责：People、Process、Technology、Strategy",
              "时间分配的黄金比例",
              "避免过度干预技术细节",
              "建立有效的授权机制"
            ],
            resources: [
              { title: "An Elegant Puzzle - Will Larson", url: "https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management/dp/1732265186" },
              { title: "Tech Lead 职责手册", url: "https://docs.google.com/document/d/1kngKHUCS0DHNvZAO8PfkcsTD4Mq7b11L09RIaVpQnwI" },
              { title: "Engineering Manager Role", url: "https://www.patkua.com/blog/the-definition-of-a-tech-lead/" }
            ]
          },
          {
            id: "tm-1-3",
            title: "建立管理者心智模型",
            detail: "培养成长型思维，学习如何面对管理中的不确定性",
            overview: "管理工作充满模糊性和不确定性，建立正确的心智模型帮助你更好地应对挑战。",
            keyPoints: [
              "成长型思维与固定型思维",
              "拥抱不确定性",
              "从失败中学习",
              "建立反馈循环"
            ],
            resources: [
              { title: "Mindset by Carol Dweck", url: "https://www.amazon.com/Mindset-Psychology-Carol-S-Dweck/dp/0345472322" },
              { title: "High Output Management", url: "https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884" },
              { title: "管理者的心理建设", url: "https://hbr.org/2017/01/the-new-rules-of-talent-management" }
            ]
          }
        ]
      },
      {
        id: "w2",
        title: "第 2 周：沟通与影响力",
        summary: "掌握技术管理者必备的沟通技能和影响力构建方法",
        overview: "技术管理者60%以上的时间都在沟通。高效的沟通能力是技术管理成功的基础。",
        keyPoints: [
          "向上沟通与向下沟通的差异",
          "跨部门协作的沟通策略",
          "建立技术影响力",
          "处理冲突与分歧"
        ],
        lessons: [
          {
            id: "tm-2-1",
            title: "向上管理与汇报",
            detail: "学习如何有效地与上级沟通，管理预期，获取资源支持",
            overview: "向上管理不是迎合，而是建立信任、对齐目标、高效协作的过程。",
            keyPoints: [
              "理解上级的关注点和压力",
              "结构化汇报的技巧",
              "管理预期与风险暴露",
              "争取资源与支持的策略"
            ],
            resources: [
              { title: "Managing Up - Mary Abbajay", url: "https://www.amazon.com/Managing-Up-Move-Work-Succeed/dp/1119436656" },
              { title: "How to Manage Your Boss", url: "https://hbr.org/2015/01/how-to-manage-your-boss" },
              { title: "Status Update 最佳实践", url: "https://lethain.com/weekly-updates/" }
            ]
          },
          {
            id: "tm-2-2",
            title: "团队沟通与 1:1",
            detail: "建立有效的团队沟通机制，掌握一对一会议的技巧",
            overview: "1:1 是管理者最重要的工具之一，用于建立信任、了解团队、解决问题。",
            keyPoints: [
              "1:1 的目的与频率",
              "有效 1:1 的结构设计",
              "倾听与提问的艺术",
              "处理敏感话题"
            ],
            resources: [
              { title: "The Art of the One-on-One", url: "https://www.manager-tools.com/2005/07/the-single-most-effective-management-tool-part-1" },
              { title: "Questions for 1:1s", url: "https://github.com/VGraupera/1on1-questions" },
              { title: "Radical Candor - Kim Scott", url: "https://www.radicalcandor.com/the-book/" }
            ]
          },
          {
            id: "tm-2-3",
            title: "技术影响力构建",
            detail: "通过技术判断力和决策能力建立在团队和组织中的影响力",
            overview: "技术管理者需要在保持技术敏感度的同时，通过决策质量建立信任。",
            keyPoints: [
              "技术判断力的培养",
              "决策透明与解释",
              "技术布道与知识分享",
              "建立技术品牌"
            ],
            resources: [
              { title: "Staff Engineer - Will Larson", url: "https://staffeng.com/book" },
              { title: "技术领导力", url: "https://www.infoq.cn/article/technical-leadership" },
              { title: "Building Technical Credibility", url: "https://leaddev.com/skills-new-managers/building-and-maintaining-technical-credibility" }
            ]
          }
        ]
      },
      {
        id: "w3",
        title: "第 3 周：时间管理与优先级",
        summary: "学习如何高效管理时间，在多重职责中找到平衡",
        overview: "技术管理者面临大量的会议、沟通、决策需求，有效的时间管理是生存和成功的关键。",
        keyPoints: [
          "识别高杠杆活动",
          "会议管理与优化",
          "深度工作时间保护",
          "授权与委托"
        ],
        lessons: [
          {
            id: "tm-3-1",
            title: "高杠杆活动识别",
            detail: "学习识别和专注于能产生最大影响的管理活动",
            overview: "不是所有管理活动价值相等，识别高杠杆活动能帮助你事半功倍。",
            keyPoints: [
              "杠杆率的概念",
              "高杠杆管理活动清单",
              "避免低价值陷阱",
              "定期审视时间分配"
            ],
            resources: [
              { title: "High Output Management - Andy Grove", url: "https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884" },
              { title: "The Effective Executive", url: "https://www.amazon.com/Effective-Executive-Definitive-Harperbusiness-Essentials/dp/0060833459" },
              { title: "管理者的杠杆", url: "https://lethain.com/work-on-what-matters/" }
            ]
          },
          {
            id: "tm-3-2",
            title: "会议效率提升",
            detail: "优化会议数量和质量，减少无效会议时间",
            overview: "会议是管理者的主要工作形式，但低效会议是最大的时间杀手。",
            keyPoints: [
              "会议前的准备工作",
              "会议中的高效引导",
              "会议后的跟进机制",
              "识别和取消不必要的会议"
            ],
            resources: [
              { title: "Meeting 最佳实践", url: "https://www.amazon.com/Read-This-Before-Our-Next/dp/1989603173" },
              { title: "Maker's Schedule, Manager's Schedule", url: "http://www.paulgraham.com/makersschedule.html" },
              { title: "Amazon 的 6 页备忘录", url: "https://writingcooperative.com/the-anatomy-of-an-amazon-6-pager-fc79f31a41c9" }
            ]
          },
          {
            id: "tm-3-3",
            title: "授权的艺术",
            detail: "学习有效授权，通过他人完成工作",
            overview: "授权是管理者规模化的关键，但有效授权需要系统性的方法。",
            keyPoints: [
              "授权的层次模型",
              "选择合适的授权对象",
              "授权后的跟进机制",
              "避免微观管理"
            ],
            resources: [
              { title: "Turn the Ship Around", url: "https://www.amazon.com/Turn-Ship-Around-Turning-Followers/dp/1591846404" },
              { title: "授权矩阵", url: "https://www.manager-tools.com/2005/09/the-delegation-matrix" },
              { title: "Delegation 101", url: "https://hbr.org/2017/10/to-be-a-great-leader-you-have-to-learn-how-to-delegate-well" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "team-building",
    title: "第二阶段：团队建设与人才管理",
    duration: "第 4-6 周",
    goal: "掌握团队建设的核心方法，学会招聘、培养和留住优秀人才",
    weeks: [
      {
        id: "w4",
        title: "第 4 周：招聘与面试",
        summary: "建立高效的招聘流程，学习技术面试的最佳实践",
        overview: "招聘是技术管理者最重要的职责之一。一个错误的招聘决策成本远超培养现有团队成员。",
        keyPoints: [
          "定义理想候选人画像",
          "设计有效的面试流程",
          "技术面试的评估维度",
          "避免招聘偏见"
        ],
        lessons: [
          {
            id: "tm-4-1",
            title: "招聘策略与人才画像",
            detail: "学习如何定义团队需要的人才，制定招聘策略",
            overview: "明确的人才画像是高效招聘的起点，它帮助团队统一评估标准。",
            keyPoints: [
              "人才画像的构建方法",
              "硬技能与软技能的平衡",
              "文化契合度的定义",
              "招聘渠道的选择"
            ],
            resources: [
              { title: "Who - The A Method for Hiring", url: "https://www.amazon.com/Who-Method-Hiring-Geoff-Smart/dp/0345504194" },
              { title: "Hiring Engineering Leaders", url: "https://lethain.com/hiring-engineering-executives/" },
              { title: "Job Description 写作指南", url: "https://www.lever.co/blog/how-to-write-a-job-description" }
            ]
          },
          {
            id: "tm-4-2",
            title: "技术面试设计与执行",
            detail: "设计公平有效的技术面试流程，准确评估候选人能力",
            overview: "好的面试既能评估候选人的真实能力，也能给候选人良好的体验。",
            keyPoints: [
              "面试环节设计",
              "编程面试的最佳实践",
              "系统设计面试技巧",
              "行为面试的 STAR 法则"
            ],
            resources: [
              { title: "The Holloway Guide to Technical Recruiting", url: "https://www.holloway.com/g/technical-recruiting-hiring" },
              { title: "Interview 反模式", url: "https://www.joelonsoftware.com/2006/10/25/the-guerrilla-guide-to-interviewing-version-30/" },
              { title: "Structured Interviews", url: "https://rework.withgoogle.com/guides/hiring-use-structured-interviewing/steps/introduction/" }
            ]
          },
          {
            id: "tm-4-3",
            title: "Offer 谈判与入职体验",
            detail: "完成招聘闭环，确保新员工成功融入团队",
            overview: "招聘不止于 offer，新员工的前 90 天决定了他们的长期表现。",
            keyPoints: [
              "Offer 谈判的艺术",
              "竞争力薪酬的考量",
              "入职流程设计",
              "新人 Buddy 机制"
            ],
            resources: [
              { title: "Onboarding 最佳实践", url: "https://www.glassdoor.com/employers/blog/new-hire-onboarding-best-practices/" },
              { title: "First 90 Days", url: "https://www.amazon.com/First-90-Days-Strategies-Expanded/dp/1422188612" },
              { title: "Remote Onboarding", url: "https://about.gitlab.com/company/culture/all-remote/onboarding/" }
            ]
          }
        ]
      },
      {
        id: "w5",
        title: "第 5 周：人才培养与职业发展",
        summary: "建立人才培养体系，帮助团队成员实现职业成长",
        overview: "优秀的技术管理者不仅完成业务目标，更培养出下一代技术领导者。",
        keyPoints: [
          "建立技术能力模型",
          "制定个人发展计划",
          "反馈与辅导技巧",
          "识别和培养高潜人才"
        ],
        lessons: [
          {
            id: "tm-5-1",
            title: "技术能力模型与职级体系",
            detail: "建立清晰的技术能力评估标准和晋升通道",
            overview: "透明的能力模型帮助工程师了解成长方向，也让评估更加客观。",
            keyPoints: [
              "能力模型的设计原则",
              "技术职级体系搭建",
              "IC vs Manager 双通道",
              "跨级别能力差异"
            ],
            resources: [
              { title: "Engineering Ladders", url: "https://www.engineeringladders.com/" },
              { title: "Dropbox Career Framework", url: "https://dropbox.github.io/dbx-career-framework/" },
              { title: "CircleCI Engineering Competency Matrix", url: "https://circleci.com/blog/why-we-re-designed-our-engineering-career-paths-at-circleci/" }
            ]
          },
          {
            id: "tm-5-2",
            title: "反馈与辅导",
            detail: "掌握有效反馈的技巧，成为团队成员的教练",
            overview: "持续的反馈和辅导是人才成长的加速器，但给出有效反馈需要技巧。",
            keyPoints: [
              "及时反馈的重要性",
              "SBI 反馈模型",
              "正向反馈与建设性反馈",
              "教练式对话技巧"
            ],
            resources: [
              { title: "Radical Candor", url: "https://www.radicalcandor.com/" },
              { title: "Thanks for the Feedback", url: "https://www.amazon.com/Thanks-Feedback-Science-Receiving-Well/dp/0670014664" },
              { title: "Coaching for Performance", url: "https://www.amazon.com/Coaching-Performance-Principles-Practice-Leadership/dp/185788535X" }
            ]
          },
          {
            id: "tm-5-3",
            title: "绩效管理与晋升",
            detail: "建立公平的绩效评估体系，支持团队成员的职业发展",
            overview: "绩效管理不是年终的一次性活动，而是持续的过程。",
            keyPoints: [
              "目标设定（OKR/KPI）",
              "绩效评估校准",
              "晋升提名与答辩",
              "处理绩效问题"
            ],
            resources: [
              { title: "Measure What Matters - John Doerr", url: "https://www.amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221" },
              { title: "绩效管理反模式", url: "https://hbr.org/2016/10/the-performance-management-revolution" },
              { title: "Calibration 最佳实践", url: "https://lattice.com/library/performance-calibration-101" }
            ]
          }
        ]
      },
      {
        id: "w6",
        title: "第 6 周：团队文化与留存",
        summary: "塑造积极的团队文化，提升团队凝聚力和人才留存",
        overview: "文化是团队的隐性规则，好的文化能吸引和留住优秀人才。",
        keyPoints: [
          "团队价值观的建立",
          "心理安全感的构建",
          "团队仪式与传统",
          "人才留存策略"
        ],
        lessons: [
          {
            id: "tm-6-1",
            title: "构建心理安全感",
            detail: "创造让团队成员敢于发言、敢于犯错的环境",
            overview: "心理安全感是高绩效团队的基础，它让创新和学习成为可能。",
            keyPoints: [
              "心理安全感的定义",
              "识别不安全信号",
              "领导者的示范作用",
              "处理失败的态度"
            ],
            resources: [
              { title: "The Fearless Organization", url: "https://www.amazon.com/Fearless-Organization-Psychological-Workplace-Innovation/dp/1119477247" },
              { title: "Google's Project Aristotle", url: "https://rework.withgoogle.com/print/guides/5721312655835136/" },
              { title: "Psychological Safety 实践", url: "https://hbr.org/2017/08/high-performing-teams-need-psychological-safety-heres-how-to-create-it" }
            ]
          },
          {
            id: "tm-6-2",
            title: "团队凝聚力建设",
            detail: "通过有效的团建活动和日常互动增强团队凝聚力",
            overview: "凝聚力强的团队更有战斗力，但凝聚力需要刻意培养。",
            keyPoints: [
              "远程团队的挑战",
              "有意义的团队活动",
              "日常社交互动",
              "庆祝成功的仪式"
            ],
            resources: [
              { title: "The Culture Code", url: "https://www.amazon.com/Culture-Code-Secrets-Highly-Successful/dp/0804176981" },
              { title: "Remote Team Building", url: "https://about.gitlab.com/company/culture/all-remote/informal-communication/" },
              { title: "团队仪式设计", url: "https://www.atlassian.com/team-playbook" }
            ]
          },
          {
            id: "tm-6-3",
            title: "人才留存与离职管理",
            detail: "识别离职风险，采取有效的留存策略，优雅处理离职",
            overview: "优秀人才的流失成本巨大，但有时离职也是必要的。",
            keyPoints: [
              "离职预警信号",
              "Stay Interview 技巧",
              "挽留 vs 放手的判断",
              "离职面谈与知识转移"
            ],
            resources: [
              { title: "留存策略", url: "https://hbr.org/2019/05/what-keeps-people-from-quitting" },
              { title: "Exit Interview 指南", url: "https://www.shrm.org/resourcesandtools/tools-and-samples/how-to-guides/pages/exitinterviews.aspx" },
              { title: "Offboarding 最佳实践", url: "https://lattice.com/library/offboarding-best-practices" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "tech-leadership",
    title: "第三阶段：技术领导力",
    duration: "第 7-9 周",
    goal: "培养技术决策能力，掌握架构治理和技术债务管理",
    weeks: [
      {
        id: "w7",
        title: "第 7 周：技术决策与架构治理",
        summary: "建立技术决策框架，平衡短期交付与长期演进",
        overview: "技术管理者需要在业务压力下做出正确的技术决策，这需要系统性的方法。",
        keyPoints: [
          "技术决策框架",
          "架构决策记录（ADR）",
          "技术评审流程",
          "平衡创新与稳定"
        ],
        lessons: [
          {
            id: "tm-7-1",
            title: "技术决策框架",
            detail: "建立结构化的技术决策流程，提高决策质量",
            overview: "好的技术决策需要平衡多方因素，框架化的方法能帮助做出更好的选择。",
            keyPoints: [
              "决策矩阵的使用",
              "利益相关者分析",
              "风险评估方法",
              "可逆 vs 不可逆决策"
            ],
            resources: [
              { title: "Technical Decision Making", url: "https://www.amazon.com/Thinking-Systems-Primer-Donella-Meadows/dp/1603580557" },
              { title: "Amazon 的决策原则", url: "https://www.sec.gov/Archives/edgar/data/1018724/000119312516530910/d168744dex991.htm" },
              { title: "ADR 模板", url: "https://adr.github.io/" }
            ]
          },
          {
            id: "tm-7-2",
            title: "架构评审与治理",
            detail: "建立有效的架构评审机制，确保技术方向的一致性",
            overview: "架构治理帮助团队在分散决策的同时保持系统的整体性。",
            keyPoints: [
              "架构评审会议设计",
              "设计文档模板",
              "技术雷达的使用",
              "架构原则的制定"
            ],
            resources: [
              { title: "Design Docs at Google", url: "https://www.industrialempathy.com/posts/design-docs-at-google/" },
              { title: "Tech Radar", url: "https://www.thoughtworks.com/radar" },
              { title: "Architecture Decision Records", url: "https://github.com/joelparkerhenderson/architecture-decision-record" }
            ]
          },
          {
            id: "tm-7-3",
            title: "技术选型与标准化",
            detail: "制定技术标准，在自由与一致性之间找到平衡",
            overview: "过度标准化扼杀创新，过度自由导致混乱，需要找到平衡点。",
            keyPoints: [
              "技术选型的考量因素",
              "标准化的层次",
              "试点与推广策略",
              "技术栈演进路线"
            ],
            resources: [
              { title: "Technology Strategy Patterns", url: "https://www.amazon.com/Technology-Strategy-Patterns-Architecture-Analysis/dp/1492040878" },
              { title: "技术标准化策略", url: "https://increment.com/teams/how-to-make-technical-standards-stick/" },
              { title: "Inner Source", url: "https://innersourcecommons.org/" }
            ]
          }
        ]
      },
      {
        id: "w8",
        title: "第 8 周：技术债务管理",
        summary: "理解和管理技术债务，平衡短期交付与长期健康",
        overview: "技术债务是不可避免的，关键是如何有意识地管理它。",
        keyPoints: [
          "技术债务的分类",
          "债务可视化与量化",
          "偿还策略制定",
          "与业务沟通技术债务"
        ],
        lessons: [
          {
            id: "tm-8-1",
            title: "技术债务识别与分类",
            detail: "建立技术债务的识别机制，了解不同类型债务的特点",
            overview: "并非所有技术债务都是坏的，有意识的债务是战略工具。",
            keyPoints: [
              "技术债务四象限",
              "债务来源分析",
              "债务影响评估",
              "债务登记与跟踪"
            ],
            resources: [
              { title: "Technical Debt Quadrant", url: "https://martinfowler.com/bliki/TechnicalDebtQuadrant.html" },
              { title: "Managing Technical Debt", url: "https://www.amazon.com/Managing-Technical-Debt-Reducing-Development/dp/013564593X" },
              { title: "技术债务度量", url: "https://www.sonarsource.com/products/sonarqube/" }
            ]
          },
          {
            id: "tm-8-2",
            title: "技术债务偿还策略",
            detail: "制定技术债务的偿还计划，持续改善代码质量",
            overview: "偿还技术债务需要策略，不能影响正常业务交付。",
            keyPoints: [
              "债务优先级排序",
              "渐进式重构策略",
              "技术债务预算",
              "与业务目标对齐"
            ],
            resources: [
              { title: "Refactoring - Martin Fowler", url: "https://refactoring.com/" },
              { title: "Working Effectively with Legacy Code", url: "https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052" },
              { title: "20% 时间策略", url: "https://lethain.com/migrations/" }
            ]
          },
          {
            id: "tm-8-3",
            title: "与业务沟通技术投资",
            detail: "学习如何向非技术干系人解释技术债务和技术投资的价值",
            overview: "技术债务需要业务理解和支持，有效沟通是关键。",
            keyPoints: [
              "技术债务的业务语言",
              "可视化技术健康度",
              "ROI 计算方法",
              "争取技术投资预算"
            ],
            resources: [
              { title: "Talking to Non-Technical Stakeholders", url: "https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/1942788290" },
              { title: "技术债务仪表板", url: "https://www.thoughtworks.com/insights/blog/tech-debt-dashboard" },
              { title: "Technical Investment ROI", url: "https://hbr.org/2015/05/how-to-quantify-sustainability-impact" }
            ]
          }
        ]
      },
      {
        id: "w9",
        title: "第 9 周：工程效率与质量",
        summary: "提升团队的工程效率，建立质量保障体系",
        overview: "效率和质量是技术团队的核心竞争力，需要系统性地投入。",
        keyPoints: [
          "开发者体验优化",
          "CI/CD 成熟度提升",
          "代码质量门禁",
          "事故管理与复盘"
        ],
        lessons: [
          {
            id: "tm-9-1",
            title: "开发者体验与效率",
            detail: "优化开发者的日常工作流程，减少摩擦提高效率",
            overview: "开发者体验直接影响团队的生产力和士气。",
            keyPoints: [
              "开发环境标准化",
              "工具链优化",
              "文档与知识库",
              "Developer Experience 指标"
            ],
            resources: [
              { title: "Developer Experience", url: "https://queue.acm.org/detail.cfm?id=3595878" },
              { title: "SPACE Framework", url: "https://queue.acm.org/detail.cfm?id=3454124" },
              { title: "Platform Engineering", url: "https://platformengineering.org/" }
            ]
          },
          {
            id: "tm-9-2",
            title: "持续集成与交付",
            detail: "建立成熟的 CI/CD 流程，加速价值交付",
            overview: "成熟的 CI/CD 是现代软件工程的基础设施。",
            keyPoints: [
              "CI/CD 成熟度模型",
              "流水线设计最佳实践",
              "部署策略选择",
              "DevOps 文化培养"
            ],
            resources: [
              { title: "Accelerate", url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339" },
              { title: "DORA Metrics", url: "https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance" },
              { title: "Continuous Delivery", url: "https://continuousdelivery.com/" }
            ]
          },
          {
            id: "tm-9-3",
            title: "事故管理与学习",
            detail: "建立事故响应流程，从失败中学习",
            overview: "事故是学习的机会，好的事故管理能让团队变得更强。",
            keyPoints: [
              "事故响应流程",
              "On-call 轮值设计",
              "事后复盘最佳实践",
              "无责备文化"
            ],
            resources: [
              { title: "Site Reliability Engineering", url: "https://sre.google/sre-book/table-of-contents/" },
              { title: "Incident Management", url: "https://response.pagerduty.com/" },
              { title: "Blameless Postmortems", url: "https://www.etsy.com/codeascraft/blameless-postmortems-and-a-just-culture" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "org-leadership",
    title: "第四阶段：组织领导力",
    duration: "第 10-12 周",
    goal: "培养组织层面的领导力，掌握跨团队协作和变革管理",
    weeks: [
      {
        id: "w10",
        title: "第 10 周：跨团队协作与依赖管理",
        summary: "掌握跨团队协作的方法，有效管理团队间依赖",
        overview: "随着组织规模增长，跨团队协作成为关键挑战。",
        keyPoints: [
          "团队拓扑与边界",
          "依赖识别与管理",
          "跨团队沟通机制",
          "共享服务与平台"
        ],
        lessons: [
          {
            id: "tm-10-1",
            title: "团队拓扑设计",
            detail: "理解不同的团队组织模式，设计有效的团队结构",
            overview: "团队结构影响沟通模式，而沟通模式影响系统架构。",
            keyPoints: [
              "康威定律",
              "四种团队类型",
              "团队认知负荷",
              "团队规模与边界"
            ],
            resources: [
              { title: "Team Topologies", url: "https://teamtopologies.com/" },
              { title: "Conway's Law", url: "https://www.melconway.com/Home/Conways_Law.html" },
              { title: "Inverse Conway Maneuver", url: "https://www.thoughtworks.com/radar/techniques/inverse-conway-maneuver" }
            ]
          },
          {
            id: "tm-10-2",
            title: "依赖管理与协调",
            detail: "识别和管理团队间依赖，减少协作摩擦",
            overview: "依赖是跨团队协作的主要瓶颈，需要有效的管理机制。",
            keyPoints: [
              "依赖识别与可视化",
              "依赖优先级排序",
              "异步协作模式",
              "契约与接口管理"
            ],
            resources: [
              { title: "Managing Dependencies", url: "https://www.amazon.com/Dynamics-Software-Development-Jim-McCarthy/dp/1556158238" },
              { title: "Program Management", url: "https://www.scaledagileframework.com/program-increment/" },
              { title: "API Contract", url: "https://www.openapis.org/" }
            ]
          },
          {
            id: "tm-10-3",
            title: "平台思维与内部产品",
            detail: "将内部服务产品化，提升组织效率",
            overview: "平台团队为其他团队提供杠杆，加速整体交付能力。",
            keyPoints: [
              "平台即产品",
              "内部用户研究",
              "平台采用策略",
              "平台团队组织"
            ],
            resources: [
              { title: "Platform Engineering", url: "https://platformengineering.org/blog/what-is-platform-engineering" },
              { title: "Internal Developer Platform", url: "https://internaldeveloperplatform.org/" },
              { title: "Treating Platform as a Product", url: "https://martinfowler.com/articles/talk-about-platforms.html" }
            ]
          }
        ]
      },
      {
        id: "w11",
        title: "第 11 周：变革管理与组织发展",
        summary: "学习如何推动组织变革，带领团队适应变化",
        overview: "技术组织需要不断演进，管理者需要成为变革的推动者。",
        keyPoints: [
          "变革管理框架",
          "获取高层支持",
          "处理变革阻力",
          "持续改进文化"
        ],
        lessons: [
          {
            id: "tm-11-1",
            title: "变革管理基础",
            detail: "理解组织变革的本质，掌握变革管理的核心方法",
            overview: "变革是困难的，但有方法可以提高变革成功的概率。",
            keyPoints: [
              "Kotter 八步变革法",
              "变革曲线",
              "变革愿景与沟通",
              "快速见效的重要性"
            ],
            resources: [
              { title: "Leading Change", url: "https://www.amazon.com/Leading-Change-New-Preface-Author/dp/1422186431" },
              { title: "Switch - Chip Heath", url: "https://www.amazon.com/Switch-Change-Things-When-Hard/dp/0385528752" },
              { title: "变革管理实践", url: "https://hbr.org/2007/01/leading-change-why-transformation-efforts-fail" }
            ]
          },
          {
            id: "tm-11-2",
            title: "技术组织转型",
            detail: "学习技术组织常见的转型模式，如敏捷转型、DevOps 转型",
            overview: "技术组织转型需要技术和管理的双重能力。",
            keyPoints: [
              "敏捷转型路径",
              "DevOps 文化落地",
              "转型度量指标",
              "避免常见陷阱"
            ],
            resources: [
              { title: "The DevOps Handbook", url: "https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002" },
              { title: "Agile Transformation", url: "https://www.scaledagileframework.com/" },
              { title: "Digital Transformation", url: "https://www.amazon.com/Digital-Transformation-Playbook-Business-Publishing/dp/0231175442" }
            ]
          },
          {
            id: "tm-11-3",
            title: "建立学习型组织",
            detail: "培养持续学习和改进的组织文化，通过知识共享与复盘机制推动团队不断进化",
            overview: "学习型组织能够快速适应变化，持续创新。",
            keyPoints: [
              "学习型组织特征",
              "知识管理体系",
              "复盘与回顾",
              "实验与创新"
            ],
            resources: [
              { title: "The Fifth Discipline", url: "https://www.amazon.com/Fifth-Discipline-Practice-Learning-Organization/dp/0385517254" },
              { title: "An Everyone Culture", url: "https://www.amazon.com/Everyone-Culture-Deliberately-Developmental-Organization/dp/1625278624" },
              { title: "学习型团队实践", url: "https://rework.withgoogle.com/print/guides/5722484712316928/" }
            ]
          }
        ]
      },
      {
        id: "w12",
        title: "第 12 周：技术战略与规划",
        summary: "制定技术战略，对齐业务目标，规划技术发展路线",
        overview: "技术管理者需要具备战略思维，确保技术投资产生业务价值。",
        keyPoints: [
          "技术战略制定",
          "技术路线图规划",
          "技术投资决策",
          "技术品牌建设"
        ],
        lessons: [
          {
            id: "tm-12-1",
            title: "技术战略制定",
            detail: "学习如何制定与业务战略对齐的技术战略",
            overview: "技术战略是业务战略的支撑，需要深入理解业务。",
            keyPoints: [
              "业务战略解读",
              "技术能力评估",
              "战略主题识别",
              "技术愿景表达"
            ],
            resources: [
              { title: "Technology Strategy Patterns", url: "https://www.amazon.com/Technology-Strategy-Patterns-Architecture-Analysis/dp/1492040878" },
              { title: "Good Strategy Bad Strategy", url: "https://www.amazon.com/Good-Strategy-Bad-Difference-Matters/dp/0307886239" },
              { title: "Technical Vision", url: "https://lethain.com/strategies-visions/" }
            ]
          },
          {
            id: "tm-12-2",
            title: "技术路线图规划",
            detail: "制定清晰的技术演进路线，管理技术投资组合",
            overview: "技术路线图帮助团队对齐方向，管理预期。",
            keyPoints: [
              "路线图的层次",
              "主题与里程碑",
              "依赖与风险识别",
              "路线图沟通与更新"
            ],
            resources: [
              { title: "Product Roadmaps", url: "https://www.amazon.com/Product-Roadmaps-Relaunched-Direction-Uncertainty/dp/149197172X" },
              { title: "技术路线图模板", url: "https://roadmap.sh/" },
              { title: "Now-Next-Later Framework", url: "https://www.prodpad.com/blog/invented-now-next-later-roadmap/" }
            ]
          },
          {
            id: "tm-12-3",
            title: "技术影响力与品牌",
            detail: "建立技术团队的外部影响力和雇主品牌",
            overview: "技术品牌帮助吸引人才，提升团队影响力。",
            keyPoints: [
              "技术博客运营",
              "开源战略",
              "技术会议参与",
              "工程文化传播"
            ],
            resources: [
              { title: "Developer Relations", url: "https://www.amazon.com/Developer-Relations-Community-Development-Companies/dp/1484271637" },
              { title: "Engineering Blogs", url: "https://github.com/kilimchoi/engineering-blogs" },
              { title: "Open Source Strategy", url: "https://opensource.guide/starting-a-project/" }
            ]
          }
        ]
      }
    ]
  }
]

export const techManagementKnowledgeCards: KnowledgeCard[] = [
  {
    id: "role-transition",
    title: "角色转变",
    summary: "从工程师到管理者的核心转变",
    points: [
      "从个人贡献到团队赋能",
      "从技术深度到管理宽度",
      "从直接执行到通过他人完成",
      "从问题解决到问题预防"
    ],
    practice: "反思你过去一周的时间分配，有多少时间用于赋能他人？"
  },
  {
    id: "one-on-one",
    title: "1:1 会议",
    summary: "管理者最重要的工具",
    points: [
      "每周30分钟到1小时",
      "属于下属的时间，让他们主导议程",
      "关注人而非仅仅是工作",
      "建立信任的持续过程"
    ],
    practice: "设计一个 1:1 问题清单，覆盖职业发展、工作障碍、个人状态"
  },
  {
    id: "high-leverage",
    title: "高杠杆活动",
    summary: "识别最有价值的管理活动",
    points: [
      "招聘优秀人才",
      "培养团队成员",
      "制定清晰方向",
      "移除团队障碍"
    ],
    practice: "审视你的日历，识别并增加高杠杆活动的时间"
  },
  {
    id: "psychological-safety",
    title: "心理安全感",
    summary: "高绩效团队的基础",
    points: [
      "允许犯错和失败",
      "鼓励提出不同意见",
      "领导者示范脆弱性",
      "建设无责备文化"
    ],
    practice: "在下次团队会议上主动分享你的一个失误及学习"
  },
  {
    id: "tech-debt",
    title: "技术债务管理",
    summary: "平衡短期交付与长期健康",
    points: [
      "技术债务是投资决策",
      "可视化债务帮助沟通",
      "预留固定时间偿还",
      "用业务语言解释价值"
    ],
    practice: "建立技术债务登记表，用业务影响量化每项债务"
  }
]

export const techManagementExamQuestions: QuizQuestion[] = [
  {
    id: "tm-q1",
    question: "作为新晋技术管理者，以下哪项是最需要避免的陷阱？",
    options: [
      "过度关注技术细节，事必躬亲",
      "花太多时间在 1:1 上",
      "授权给团队成员",
      "寻求上级的反馈"
    ],
    answer: 0,
    rationale: "技术专家陷阱是新管理者最常犯的错误。管理者的价值在于通过团队完成工作，而非事必躬亲。"
  },
  {
    id: "tm-q2",
    question: "高效 1:1 会议的最佳实践是？",
    options: [
      "管理者主导议程，主要讨论项目进度",
      "让下属主导议程，关注他们的需求和成长",
      "每月进行一次详细回顾",
      "主要用于绩效评估和反馈"
    ],
    answer: 1,
    rationale: "1:1 是属于下属的时间，应该让他们主导议程，关注他们的需求、障碍和职业发展。"
  },
  {
    id: "tm-q3",
    question: "关于技术债务，以下哪项描述是正确的？",
    options: [
      "技术债务总是坏的，应该完全避免",
      "技术债务可以是有意识的战略决策",
      "技术债务只关乎代码质量",
      "技术债务只有技术团队需要关心"
    ],
    answer: 1,
    rationale: "有意识的技术债务可以是战略工具，帮助快速验证想法。关键是有意识地管理，而非无意识地积累。"
  },
  {
    id: "tm-q4",
    question: "心理安全感的核心含义是？",
    options: [
      "团队成员不需要承担责任",
      "永远不会有冲突",
      "敢于表达不同意见和承认错误而不担心惩罚",
      "管理者不批评团队成员"
    ],
    answer: 2,
    rationale: "心理安全感是指团队成员敢于表达不同意见、承认错误、寻求帮助，而不用担心被惩罚或嘲笑。"
  },
  {
    id: "tm-q5",
    question: "关于授权，以下哪项是正确的做法？",
    options: [
      "完全放手，不再过问",
      "只授权简单任务",
      "明确预期、提供支持、跟进结果",
      "让下属自己决定所有事情"
    ],
    answer: 2,
    rationale: "有效的授权需要明确预期和边界、提供必要支持、建立跟进机制，而不是完全放手或过度控制。"
  },
  {
    id: "tm-q6",
    question: "Andy Grove 提出的\"高杠杆活动\"概念主要强调？",
    options: [
      "管理者应该专注于技术最难的问题",
      "管理者应该专注于能产生最大影响的活动",
      "管理者应该花更多时间写代码",
      "管理者应该减少会议时间"
    ],
    answer: 1,
    rationale: "高杠杆活动是指那些能产生倍数效应的管理活动，如培养人才、制定方向、移除障碍等。"
  },
  {
    id: "tm-q7",
    question: "康威定律（Conway's Law）指出？",
    options: [
      "系统架构决定团队结构",
      "团队结构决定系统架构",
      "团队规模应该保持在两个披萨大小",
      "远程团队效率更高"
    ],
    answer: 1,
    rationale: "康威定律指出组织设计的系统会反映其沟通结构。因此团队结构会影响系统架构。"
  },
  {
    id: "tm-q8",
    question: "处理绩效问题员工时，首先应该？",
    options: [
      "立即启动绩效改进计划（PIP）",
      "与 HR 讨论辞退流程",
      "明确反馈问题，了解根因，提供支持",
      "降低对该员工的期望"
    ],
    answer: 2,
    rationale: "处理绩效问题应该先明确反馈、了解根因、提供改进支持，而非直接启动PIP或降低预期。"
  },
  {
    id: "tm-q9",
    question: "技术管理者与业务沟通技术投资时，最有效的方式是？",
    options: [
      "详细解释技术实现细节",
      "强调技术债务的严重性",
      "用业务语言阐述技术投资的业务价值和风险",
      "要求业务方信任技术团队的判断"
    ],
    answer: 2,
    rationale: "与业务沟通时，用业务语言阐述价值和风险更有效，避免陷入技术细节或单方面要求信任。"
  },
  {
    id: "tm-q10",
    question: "关于团队拓扑（Team Topologies），\"平台团队\"的主要职责是？",
    options: [
      "控制其他团队的技术选型",
      "提供内部服务，减少其他团队的认知负荷",
      "管理所有基础设施",
      "审批所有技术决策"
    ],
    answer: 1,
    rationale: "平台团队的核心职责是提供内部服务和工具，帮助其他团队更高效地交付价值，减少认知负荷。"
  },
  {
    id: "tm-q11",
    question: "无责备事后复盘（Blameless Postmortem）的核心原则是？",
    options: [
      "不追究任何人的责任",
      "只讨论流程问题，不讨论人的问题",
      "假设每个人都尽力了，专注于系统改进",
      "由管理层主导整个复盘过程"
    ],
    answer: 2,
    rationale: "无责备复盘假设每个人都尽力了，专注于识别系统性问题和改进机会，而非指责个人。"
  },
  {
    id: "tm-q12",
    question: "DORA 指标中，以下哪个不属于四个关键指标？",
    options: [
      "部署频率",
      "代码覆盖率",
      "变更前置时间",
      "服务恢复时间"
    ],
    answer: 1,
    rationale: "DORA 四个关键指标是部署频率、变更前置时间、变更失败率、服务恢复时间。代码覆盖率不属于核心指标。"
  },
  {
    id: "tm-q13",
    question: "Radical Candor（彻底坦诚）的核心理念是？",
    options: [
      "直接批评，不考虑对方感受",
      "关心个人的同时直接挑战",
      "先表扬再批评",
      "避免冲突，维护和谐"
    ],
    answer: 1,
    rationale: "Radical Candor 强调在真诚关心对方的前提下，直接给出反馈和挑战，两者缺一不可。"
  },
  {
    id: "tm-q14",
    question: "关于技术选型标准化，最佳实践是？",
    options: [
      "完全统一所有技术栈",
      "让每个团队自由选择",
      "定义核心标准，允许有控制的创新",
      "由架构团队决定所有选型"
    ],
    answer: 2,
    rationale: "最佳实践是定义核心标准以保证一致性，同时建立机制允许有控制的创新和例外。"
  },
  {
    id: "tm-q15",
    question: "Kotter 变革八步法的第一步是？",
    options: [
      "组建变革团队",
      "创建变革愿景",
      "建立紧迫感",
      "授权行动"
    ],
    answer: 2,
    rationale: "Kotter 变革八步法的第一步是建立紧迫感，帮助人们认识到变革的必要性。"
  }
]

export const techManagementRoadmap: RoadmapDefinition = {
  id: "tech-management",
  label: "技术管理",
  title: "技术管理能力提升路线图",
  durationLabel: "12 周系统学习",
  description: "从优秀工程师到卓越技术管理者的转型指南，涵盖角色转变、团队建设、技术领导力和组织发展四大核心领域",
  heroBadge: "管理进阶",
  stages: techManagementStages,
  knowledgeCards: techManagementKnowledgeCards,
  examQuestions: techManagementExamQuestions,
  suggestion: (percent: number) => {
    if (percent < 25)
      return "你正在开始技术管理的学习之旅。建议从角色转变和心态调整开始，这是成为优秀管理者的基础。多反思自己作为工程师和管理者的差异。"
    if (percent < 50)
      return "你已经掌握了管理基础。现在重点学习团队建设和人才管理，这是管理者最重要的杠杆。尝试将学到的技巧应用到日常 1:1 和招聘中。"
    if (percent < 75)
      return "你在技术领导力方面取得了进步。继续深化技术决策和工程效率的实践，建立自己的决策框架和技术治理机制。"
    if (percent < 100)
      return "你即将完成学习。最后阶段专注于组织层面的领导力，思考如何影响更大范围，推动组织变革。"
    return "恭喜你完成了技术管理路线图！管理是一场持续的修炼。建议定期回顾所学，在实践中不断精进。考虑阅读推荐书籍深入学习。"
  },
  resourceGuide: {
    environment: "技术管理的学习环境主要是实践场景。建议准备：1) 管理日志，记录日常管理思考；2) 1:1 文档模板；3) 团队健康度仪表板；4) 技术债务跟踪表。",
    fallbackKeyPoints: [
      "管理者的价值在于通过团队完成工作，而非事必躬亲",
      "1:1 是建立信任和了解团队的最重要工具",
      "心理安全感是高绩效团队的基础",
      "技术决策需要平衡短期交付与长期演进",
      "有效沟通是技术管理者成功的关键"
    ],
    handsOnSteps: [
      "与每位直接下属建立定期 1:1，使用结构化问题清单",
      "建立技术债务登记表，用业务影响量化",
      "设计并实施团队的入职 checklist",
      "组织一次无责备事后复盘"
    ],
    selfChecks: [
      "你能说清楚每位下属的职业目标和当前障碍吗？",
      "团队成员敢于在会议上提出不同意见吗？",
      "你的时间分配中高杠杆活动占比多少？",
      "业务方了解技术团队正在做什么投资及原因吗？",
      "团队的技术债务有清晰的可视化和偿还计划吗？"
    ],
    extensions: [
      "研读《The Manager's Path》深入理解技术管理职业路径",
      "学习教练技术，提升辅导能力",
      "了解组织行为学，增强组织洞察力",
      "参与技术管理社区，与同行交流实践"
    ],
    lessonQuizAdvice: "测验问题侧重于管理理念和最佳实践的理解。建议结合自己的实际管理场景思考，而非死记硬背答案。"
  }
}
