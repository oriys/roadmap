import type { QuizQuestion } from "../types";

export const week8: Record<string, QuizQuestion[]> = {
  // Lesson 1: 作品集项目：从 0 到 1 建一个文档站 (12题，答案随机分布)
  "tw-w8-1": [
    {
      id: "tw-w8-1-q1",
      question: "Write the Docs 指南强调作品集应该展示什么类型的作品？",
      options: [
        "所有你曾经写过的文档",
        "你'为之感到骄傲'或'展示特定技能'的作品",
        "只包含最近的作品",
        "只包含最长的文档",
      ],
      answer: 1,
      rationale:
        "Write the Docs：作品集应包含你'为之感到骄傲'或'展示特定技能'的作品，质量优于数量。",
    },
    {
      id: "tw-w8-1-q2",
      question: "关于作品集中使用前雇主的文档，Write the Docs 的警告是什么？",
      options: [
        "可以自由使用任何文档",
        "'当你为他人工作时，他们拥有你创作的内容'——需获得书面明确许可",
        "只需要口头同意即可",
        "只要离职后就可以使用",
      ],
      answer: 1,
      rationale:
        "Write the Docs 明确警告：'当你为他人工作时，他们拥有你创作的内容，而非你'——需获得书面明确许可。",
    },
    {
      id: "tw-w8-1-q3",
      question: "为什么作品集样本应该保持简洁？",
      options: [
        "节省存储空间",
        "减少托管费用",
        "'hiring managers and interviewers are pressed for time'——时间有限",
        "长文档不专业",
      ],
      answer: 2,
      rationale:
        "Write the Docs：'hiring managers and interviewers are pressed for time'——招聘经理时间有限，简洁样本更易评估。",
    },
    {
      id: "tw-w8-1-q4",
      question: "针对 API 文档岗位，作品集应该展示什么能力？",
      options: [
        "HTTP 知识和 OpenAPI 标准的理解",
        "只需要文字写作能力",
        "只需要排版设计能力",
        "只需要项目管理经验",
      ],
      answer: 0,
      rationale:
        "Write the Docs：API 文档岗位需要展示 HTTP 知识和 OpenAPI 标准的理解，证明技术能力匹配。",
    },
    {
      id: "tw-w8-1-q5",
      question: "当无法使用真实工作样本时，Write the Docs 建议的替代方案不包括？",
      options: [
        "记录常用工具的使用指南",
        "编写游戏攻略",
        "为开源项目撰写文档",
        "复制其他人的文档作为自己的作品",
      ],
      answer: 3,
      rationale:
        "Write the Docs 建议的替代方案包括：记录工具、写游戏攻略、贡献开源文档。复制他人作品是严重的诚信问题。",
    },
    {
      id: "tw-w8-1-q6",
      question: "作品集创建过程本身可以展示什么？",
      options: [
        "只是技术实现能力",
        "问题解决能力和技术应用能力",
        "只是写作速度",
        "只是设计审美",
      ],
      answer: 1,
      rationale:
        "Write the Docs：作品集创建过程本身就是展示'问题解决和技术应用能力'的样本。",
    },
    {
      id: "tw-w8-1-q7",
      question: "Write the Docs 关于作品集完美度的观点是什么？",
      options: [
        "必须完美才能发布",
        "需要获得专业认证",
        "'有作品集比打造完美作品集更重要'",
        "等到有足够多作品再发布",
      ],
      answer: 2,
      rationale:
        "Write the Docs 明确指出：'有作品集比打造完美作品集更重要'——开始比完美更重要。",
    },
    {
      id: "tw-w8-1-q8",
      question: "作品集应该避免包含哪些内容？",
      options: [
        "密码、商业机密、未发布功能、个人敏感信息",
        "代码示例",
        "技术术语",
        "表格和图表",
      ],
      answer: 0,
      rationale:
        "Write the Docs：绝不能包含密码、商业机密、未发布功能或个人敏感信息——这些都是敏感数据。",
    },
    {
      id: "tw-w8-1-q9",
      question: "针对编辑岗位，作品集应该展示什么？",
      options: [
        "只展示最终版本",
        "Before/after 编辑对比样本",
        "只展示原始草稿",
        "只展示工具使用能力",
      ],
      answer: 1,
      rationale:
        "Write the Docs：编辑岗位需要 before/after 编辑对比样本，展示你的编辑判断和改进能力。",
    },
    {
      id: "tw-w8-1-q10",
      question: "Write the Docs 建议为每个样本添加什么？",
      options: [
        "简短描述解释创作过程、咨询对象和工作流程",
        "详细的技术规格",
        "完整的项目时间线",
        "所有参与者的名单",
      ],
      answer: 0,
      rationale:
        "Write the Docs：为样本添加简短描述，解释你的创作过程——咨询了谁（PM、工程师、QA）和工作流程。",
    },
    {
      id: "tw-w8-1-q11",
      question: "作品集托管的选项不包括以下哪项？",
      options: [
        "云存储（Google Drive、Dropbox）",
        "静态网站生成器（Hugo、MkDocs）",
        "需要付费的企业级 CMS",
        "GitHub Pages 或 Netlify",
      ],
      answer: 2,
      rationale:
        "Write the Docs 列出的托管选项包括：云存储、自建网站、WordPress、SSG via GitHub Pages/Netlify。不需要付费企业 CMS。",
    },
    {
      id: "tw-w8-1-q12",
      question: "Write the Docs 指出简历在作品集中的地位是什么？",
      options: [
        "简历不重要，只看作品",
        "简历是作品集的'第一印象'，需要仔细校对",
        "简历只是形式要求",
        "简历应该尽量简短",
      ],
      answer: 1,
      rationale:
        "Write the Docs：你的简历是作品集的'第一印象'——它展示了你如何组织信息、选择用词、格式化内容。需要仔细校对。",
    },
  ],
  // Lesson 2: 写作测试与复盘方法 (12题，答案随机分布)
  "tw-w8-2": [
    {
      id: "tw-w8-2-q1",
      question: "技术写作面试中常见的写作测试形式不包括？",
      options: [
        "改写现有文档",
        "为给定场景写新文档",
        "编写产品代码",
        "识别并修复文档问题",
      ],
      answer: 2,
      rationale:
        "技术写作测试通常包括：改写文档、写新文档、识别问题、现场编辑等。编写产品代码不是技术写作测试的内容。",
    },
    {
      id: "tw-w8-2-q2",
      question: "写作测试评估的核心能力不包括以下哪项？",
      options: [
        "理解受众",
        "组织信息",
        "市场营销能力",
        "在时间压力下工作",
      ],
      answer: 2,
      rationale:
        "写作测试评估：理解受众、组织信息、清晰表达、技术准确性、遵循风格指南、时间压力下工作。市场营销不是核心评估点。",
    },
    {
      id: "tw-w8-2-q3",
      question: "复盘 Checklist 应该包含哪六个维度？",
      options: [
        "读者定位、结构清晰、示例可运行、术语一致、可搜索、可维护",
        "字数、格式、图片、链接、目录、版本",
        "标题、副标题、段落、代码、表格、列表",
        "语法、拼写、标点、引用、格式、排版",
      ],
      answer: 0,
      rationale:
        "复盘 Checklist 的六个核心维度：读者是谁？结构是否清晰？示例是否可运行？术语是否一致？是否可搜索？是否可维护？",
    },
    {
      id: "tw-w8-2-q4",
      question: "STAR 方法的四个组成部分是什么？",
      options: [
        "Strategy, Technique, Analysis, Results",
        "Situation, Task, Action, Result",
        "Story, Theme, Audience, Review",
        "Summary, Topic, Approach, Recommendation",
      ],
      answer: 1,
      rationale:
        "STAR 是行为面试的回答框架：Situation（情境）、Task（任务）、Action（行动）、Result（结果）。",
    },
    {
      id: "tw-w8-2-q5",
      question: "写作测试中时间管理的正确顺序是什么？",
      options: [
        "规划结构 → 理解任务 → 校对 → 执行写作",
        "理解任务 → 规划结构 → 执行写作 → 预留时间校对",
        "执行写作 → 理解任务 → 规划结构 → 校对",
        "校对 → 执行写作 → 规划结构 → 理解任务",
      ],
      answer: 1,
      rationale:
        "正确的时间管理顺序：快速理解任务 → 规划结构 → 执行写作 → 预留时间校对。不要试图写完美的草稿。",
    },
    {
      id: "tw-w8-2-q6",
      question: "当测试题目没有说明所有细节时应该怎么做？",
      options: [
        "等待面试官补充说明",
        "跳过这个任务",
        "做出合理假设，并在提交时说明你的假设和推理过程",
        "只完成明确说明的部分",
      ],
      answer: 2,
      rationale:
        "当题目有隐含要求时，应做出合理假设并在提交时说明。这展示了你的判断力和沟通能力。",
    },
    {
      id: "tw-w8-2-q7",
      question: "为什么有时面试官更关心你的思考过程而非最终结果？",
      options: [
        "因为结果不重要",
        "因为思考过程展示了你的决策能力和专业判断",
        "因为时间不够完成",
        "因为这样更容易评分",
      ],
      answer: 1,
      rationale:
        "思考过程展示了你的决策能力、权衡考量和专业判断——这些是资深技术写作者的关键能力。",
    },
    {
      id: "tw-w8-2-q8",
      question: "文档审查练习应该识别哪些问题？",
      options: [
        "受众不匹配、结构混乱、示例错误",
        "只检查拼写错误",
        "只检查格式问题",
        "只检查链接有效性",
      ],
      answer: 0,
      rationale:
        "文档审查应识别多层面问题：受众不匹配（内容太技术或太简单）、结构混乱（信息组织不当）、示例错误（代码无法运行）。",
    },
    {
      id: "tw-w8-2-q9",
      question: "当被要求为不熟悉的技术写文档时，你应该展示什么能力？",
      options: [
        "承认不会并拒绝任务",
        "学习能力、信息提取能力、以及如何提出正确的问题",
        "假装熟悉并编造内容",
        "只写你熟悉的部分",
      ],
      answer: 1,
      rationale:
        "面对不熟悉的技术，应展示学习能力、信息提取能力、以及如何提出正确的问题——这是技术写作者的核心技能。",
    },
    {
      id: "tw-w8-2-q10",
      question: "简历在技术写作面试中的地位是什么？",
      options: [
        "只是格式要求，不影响评估",
        "简历本身是作品集的首要部分，展示了你的信息组织和表达能力",
        "只看工作经历，不看写作质量",
        "简历越长越好",
      ],
      answer: 1,
      rationale:
        "简历本身是作品集的首要部分——它展示了你如何组织信息、选择用词、格式化内容。需要仔细校对。",
    },
    {
      id: "tw-w8-2-q11",
      question: "'示例可复现'为什么是文档质量的关键指标？",
      options: [
        "让文档看起来更专业",
        "增加代码覆盖率",
        "不可复现的示例会让用户失去信任，无法验证自己是否正确操作",
        "满足公司规范要求",
      ],
      answer: 2,
      rationale:
        "技术文档的价值在于帮助用户成功。不可复现的示例让用户无法验证操作是否正确，破坏了文档的核心价值。",
    },
    {
      id: "tw-w8-2-q12",
      question: "验证文档对目标读者有效性的最可靠方式是什么？",
      options: [
        "让符合目标读者特征的人实际使用文档，观察他们的操作",
        "自己多读几遍",
        "检查是否符合风格指南",
        "统计页面访问量",
      ],
      answer: 0,
      rationale:
        "真实用户测试是验证文档有效性的最可靠方式——能发现作者自己看不到的问题和认知偏差。",
    },
  ],
  // Lesson 3: 跨团队协作：与 PM/工程/支持对齐 (12题，答案随机分布)
  "tw-w8-3": [
    {
      id: "tw-w8-3-q1",
      question: "Nielsen Norman Group 对利益相关者访谈的定义是什么？",
      options: [
        "一种项目审批流程",
        "'与对项目有既得利益的人进行的对话，目标是收集见解以推动项目成功'",
        "用户调研的一种方法",
        "团队绩效评估",
      ],
      answer: 1,
      rationale:
        "NN/g 定义：利益相关者访谈是'与对项目有既得利益的人进行的对话，目标是收集见解以推动项目成功'。",
    },
    {
      id: "tw-w8-3-q2",
      question: "NN/g 列出的利益相关者访谈四大目标不包括？",
      options: [
        "收集背景信息",
        "识别业务目标",
        "确定项目预算",
        "增强支持度",
      ],
      answer: 2,
      rationale:
        "四大目标：收集背景信息、识别业务目标、达成共同愿景、增强支持度。确定项目预算不是访谈的核心目标。",
    },
    {
      id: "tw-w8-3-q3",
      question: "与工程师协作收集信息时，最有效的方法是什么？",
      options: [
        "准备具体问题、查看代码/设计文档后再提问、尊重他们的时间",
        "等工程师主动提供所有信息",
        "只通过邮件沟通",
        "直接复制代码注释作为文档",
      ],
      answer: 0,
      rationale:
        "有准备的沟通更高效。先了解上下文再提问展示专业性，也节省双方时间。工程师忙于编码，尊重他们的时间很重要。",
    },
    {
      id: "tw-w8-3-q4",
      question: "NN/g 建议使用什么类型的访谈方式？",
      options: [
        "严格按脚本进行的结构化访谈",
        "使用讨论指南的半结构化访谈，确保灵活的自然对话",
        "完全开放无准备的访谈",
        "只使用书面问卷",
      ],
      answer: 1,
      rationale:
        "NN/g 推荐半结构化访谈：使用讨论指南而非脚本，确保灵活的自然对话，能够深入探索意外发现。",
    },
    {
      id: "tw-w8-3-q5",
      question: "NN/g 推荐的开放式探探问题不包括？",
      options: [
        "'能否展开说一下…?'",
        "'能举个例子吗…?'",
        "'这个功能什么时候上线？'",
        "'你为什么觉得那样…?'",
      ],
      answer: 2,
      rationale:
        "开放式探探问题：'能否展开说一下…?'、'能举个例子吗…?'、'你为什么觉得那样…?'——引导深入理解。'什么时候上线'是封闭式问题。",
    },
    {
      id: "tw-w8-3-q6",
      question: "如何推动功能上线时文档同步就绪？",
      options: [
        "功能上线后再补文档",
        "只依靠发布前提醒",
        "在产品开发流程中建立文档检查点，把文档纳入 Definition of Done",
        "让开发者自己写文档",
      ],
      answer: 2,
      rationale:
        "将文档纳入 Definition of Done 或发布清单，确保文档不被视为'事后工作'，与功能同步交付。",
    },
    {
      id: "tw-w8-3-q7",
      question: "NN/g 访谈四大主题中的'优先事项'关注什么？",
      options: [
        "项目预算分配",
        "用户反馈和需要解决的问题",
        "团队人员配置",
        "技术架构选择",
      ],
      answer: 1,
      rationale:
        "NN/g 的'优先事项'主题关注：利益相关者听到的用户反馈、他们认为需要解决的问题——了解他们的关注点。",
    },
    {
      id: "tw-w8-3-q8",
      question: "与技术支持团队协作的核心价值是什么？",
      options: [
        "让支持团队写文档",
        "了解用户常见问题和痛点，识别文档改进机会",
        "转发所有问题给支持团队",
        "减少文档数量",
      ],
      answer: 1,
      rationale:
        "支持团队直接接触用户问题，他们的反馈是识别文档缺口和改进机会的宝贵来源——了解真实用户痛点。",
    },
    {
      id: "tw-w8-3-q9",
      question: "需求澄清时的核心问题不包括？",
      options: [
        "目标用户是谁？",
        "用户需要完成什么任务？",
        "文档需要多少页？",
        "成功的标准是什么？",
      ],
      answer: 2,
      rationale:
        "核心澄清问题：目标用户、完成任务、成功标准、时间线。'文档多少页'不是有意义的需求，内容应由任务需要决定。",
    },
    {
      id: "tw-w8-3-q10",
      question: "处理冲突优先级时，技术写作者的角色是什么？",
      options: [
        "完全听从 PM 的决定",
        "只支持工程师的观点",
        "帮助协调、识别共同目标、找到平衡点",
        "避免参与任何冲突",
      ],
      answer: 2,
      rationale:
        "当 PM、工程师、支持团队有不同优先级时，技术写作者需要帮助协调、识别共同目标、找到平衡点。",
    },
    {
      id: "tw-w8-3-q11",
      question: "NN/g 建议利益相关者访谈的最佳时机是什么？",
      options: [
        "只在项目结束时进行",
        "项目启动早期进行，但'永远不会太晚'",
        "只在出现问题时进行",
        "只在用户投诉时进行",
      ],
      answer: 1,
      rationale:
        "NN/g：访谈理想在项目启动早期进行以获取方向性输入，但'永远不会太晚'——任何阶段的洞察都有价值。",
    },
    {
      id: "tw-w8-3-q12",
      question: "与产品经理（PM）协作时，技术写作应该关注什么？",
      options: [
        "只关注技术细节",
        "理解功能的用户价值和使用场景，确保文档与产品定位一致",
        "等 PM 写好文档再修改",
        "不需要与 PM 沟通",
      ],
      answer: 1,
      rationale:
        "PM 了解用户需求和产品定位，这些信息帮助技术写作者从正确的角度组织内容，确保文档与产品定位一致。",
    },
  ],
  // Lesson 4: 职业成长路径 (12题，答案随机分布)
  "tw-w8-4": [
    {
      id: "tw-w8-4-q1",
      question: "Write the Docs 社区如何定义其成员范围？",
      options: [
        "只限于专职技术写作者",
        "'considers anyone who cares about communication, documentation, and their users to be a member'",
        "只包括程序员和工程师",
        "需要付费会员才能加入",
      ],
      answer: 1,
      rationale:
        "Write the Docs 社区定义广泛：'considers anyone who cares about communication, documentation, and their users to be a member of our community'——涵盖程序员、技术写作者、DevRel、客户支持等。",
    },
    {
      id: "tw-w8-4-q2",
      question: "技术写作的深度发展方向不包括以下哪项？",
      options: [
        "领域专家（API 文档、安全文档）",
        "信息架构师",
        "销售代表",
        "内容策略师",
      ],
      answer: 2,
      rationale:
        "深度发展方向包括：领域专家、信息架构师、内容策略师。销售代表不是技术写作的专业发展方向。",
    },
    {
      id: "tw-w8-4-q3",
      question: "Write the Docs 关于技术写作者核心软技能的观点是什么？",
      options: [
        "'Be bold. Own what you do'——主动展示工作价值，积极提问",
        "保持低调，等待被认可",
        "只关注技术技能",
        "避免提问以免显得无知",
      ],
      answer: 0,
      rationale:
        "Write the Docs：'Be bold. Own what you do'——需要主动展示技术写作工作的价值，积极提问不畏惧看似'愚蠢'的问题。",
    },
    {
      id: "tw-w8-4-q4",
      question: "技术写作者的广度发展方向包括什么？",
      options: [
        "只写更多类型的文档",
        "学习更多自然语言",
        "产品经理、开发者关系（DevRel）、技术培训、用户体验写作",
        "在更多公司工作积累经验",
      ],
      answer: 2,
      rationale:
        "广度发展包括跨领域角色：产品经理、DevRel、技术培训、UX 写作等，技术写作技能在这些领域都有应用。",
    },
    {
      id: "tw-w8-4-q5",
      question: "Write the Docs 薪资调查的核心目标是什么？",
      options: [
        "只是收集统计数据",
        "帮助公司制定薪资标准",
        "'help community members better understand what an appropriate salary is and provide a basis for future negotiations'",
        "评选最高薪资的技术写作者",
      ],
      answer: 2,
      rationale:
        "Write the Docs：薪资调查的目标是'help community members better understand what an appropriate salary is and provide a basis for future negotiations'——帮助成员了解合理薪资并为谈判提供依据。",
    },
    {
      id: "tw-w8-4-q6",
      question: "技术写作者必备的技术技能不包括以下哪项？",
      options: [
        "3D 建模软件",
        "Git 版本控制",
        "Markdown/DITA 标记语言",
        "HTML/CSS 基础",
      ],
      answer: 0,
      rationale:
        "必备技术技能包括：Git 版本控制、命令行操作、Markdown/DITA、HTML/CSS、专业工具。3D 建模不是核心技能。",
    },
    {
      id: "tw-w8-4-q7",
      question: "如何量化技术写作的贡献价值？",
      options: [
        "只统计文档数量和页数",
        "支持工单减少率、用户满意度提升、首次解决率改善、文档使用指标",
        "计算工作时间",
        "比较与同事的产出",
      ],
      answer: 1,
      rationale:
        "文档价值可通过数据证明：支持工单减少率、用户满意度提升、首次解决率改善、文档使用指标等业务相关指标。",
    },
    {
      id: "tw-w8-4-q8",
      question: "Write the Docs 面试指南建议避免什么类型的面试问题？",
      options: [
        "关于具体项目经验的问题",
        "关于技术工具使用的问题",
        "模糊的个人问题如'what's your passion?'",
        "关于团队协作的问题",
      ],
      answer: 2,
      rationale:
        "Write the Docs 建议避免模糊的个人问题如'what's your passion?'，用具体提示替代：'tell me about a project you're proud of?'",
    },
    {
      id: "tw-w8-4-q9",
      question: "Write the Docs 全球 Meetup 网络的规模如何？",
      options: [
        "只在美国有活动",
        "只有线上活动",
        "北美 13 个、欧洲 6 个、亚洲 2 个，覆盖全球六大洲",
        "只有年度大会，没有定期聚会",
      ],
      answer: 2,
      rationale:
        "Write the Docs Meetup 覆盖全球：北美 13 个城市、欧洲 6 个、亚洲 2 个、大洋洲和非洲也有活跃社区，支持线上线下参与。",
    },
    {
      id: "tw-w8-4-q10",
      question: "Write the Docs 软件文档指南的特点是什么？",
      options: [
        "固定不变的标准文档",
        "只有付费会员可访问",
        "'living, breathing guide'——持续更新并欢迎社区贡献",
        "只涵盖特定工具的使用",
      ],
      answer: 2,
      rationale:
        "Write the Docs 软件文档指南是'living, breathing guide'，持续更新并欢迎社区贡献，涵盖 Docs-as-Code、风格指南、可访问性等主题。",
    },
    {
      id: "tw-w8-4-q11",
      question: "面试中候选人应该向面试官提问什么以评估公司文化？",
      options: [
        "关于培训项目和资源配置的问题",
        "只问薪资和福利",
        "不需要提问，只回答问题",
        "只问技术栈和工具",
      ],
      answer: 0,
      rationale:
        "Write the Docs 建议候选人询问培训项目和资源配置。如果招聘经理'do not know or not going to tell'，这表明组织可能存在问题。",
    },
    {
      id: "tw-w8-4-q12",
      question: "技术写作者的'成就日志'应该记录什么？",
      options: [
        "只记录工作时间和出勤",
        "只记录写过的文档标题",
        "完成的项目、获得的反馈、可量化的成果、解决的问题",
        "只记录获得的奖励和表彰",
      ],
      answer: 2,
      rationale:
        "成就日志应记录：完成的项目、获得的反馈、可量化的成果、解决的问题——为绩效评估和面试准备具体素材，支持 STAR 方法讲述经历。",
    },
  ],
};
