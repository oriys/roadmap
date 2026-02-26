import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const psychologyStages: Stage[] = [
  {
    id: "psy-s1",
    title: "阶段一：心理学基础",
    duration: "第 1-3 周",
    goal: "理解心理学主要流派，掌握脑科学基础与感知觉、记忆、学习等核心认知过程。",
    weeks: [
      {
        id: "psy-w1",
        title: "第 1 周：心理学流派概览",
        summary: "了解心理学的起源及行为主义、认知、人本主义、精神分析四大流派。",
        overview: "心理学从哲学中分离并发展为实证科学，形成了多种理论流派。本周从全局视角审视各流派的核心主张、研究方法和历史贡献，为后续深入学习奠定框架。",
        keyPoints: [
          "行为主义关注可观察行为，强调刺激-反应和强化学习",
          "认知心理学研究内部心理过程，如思维、记忆和问题解决",
          "人本主义与精神分析分别关注自我实现和无意识动机",
        ],
        lessons: [
          {
            id: "psy-w1-1",
            title: "行为主义心理学",
            detail: "理解华生与斯金纳的行为主义理论：经典条件反射、操作性条件反射及其在教育与治疗中的应用。",
            keyPoints: [
              "华生主张心理学应仅研究可观察行为，排除内省法。",
              "斯金纳的操作性条件反射强调强化与惩罚对行为塑造的作用。",
              "行为主义在行为矫正与程序化教学中有广泛应用。",
            ],
            resources: [
              { title: "B.F. Skinner Foundation", url: "https://www.bfskinner.org/about-b-f-skinner/" },
              { title: "Khan Academy: Behaviorism", url: "https://www.khanacademy.org/test-prep/mcat/behavior/theories-of-personality/v/behavioral-theory" },
              { title: "Simply Psychology: Behaviorism", url: "https://www.simplypsychology.org/behaviorism.html" },
            ],
          },
          {
            id: "psy-w1-2",
            title: "认知心理学",
            detail: "探索认知心理学的研究范式：信息加工模型、心理表征与认知革命的历史背景。",
            keyPoints: [
              "认知革命挑战行为主义，将内部心理过程纳入科学研究范畴。",
              "信息加工模型将人脑类比为计算机，研究编码、存储与提取过程。",
              "认知心理学催生了认知行为疗法（CBT）等重要应用。",
            ],
            resources: [
              { title: "APA: Cognitive Psychology", url: "https://www.apa.org/topics/cognitive-psychology" },
              { title: "Coursera: Introduction to Psychology", url: "https://www.coursera.org/learn/introduction-psychology" },
              { title: "Stanford Encyclopedia: Cognitive Science", url: "https://plato.stanford.edu/entries/cognitive-science/" },
            ],
          },
          {
            id: "psy-w1-3",
            title: "人本主义与精神分析",
            detail: "对比马斯洛的需求层次理论、罗杰斯的来访者中心疗法与弗洛伊德的精神分析学说。",
            keyPoints: [
              "马斯洛提出五层需求层次，最高层是自我实现。",
              "罗杰斯强调无条件积极关注和真诚一致，推动人本主义治疗。",
              "弗洛伊德关注无意识、本我/自我/超我及防御机制。",
            ],
            resources: [
              { title: "Simply Psychology: Maslow", url: "https://www.simplypsychology.org/maslow.html" },
              { title: "APA: Humanistic Psychology", url: "https://www.apa.org/topics/humanistic-psychology" },
              { title: "Khan Academy: Freud", url: "https://www.khanacademy.org/test-prep/mcat/behavior/theories-of-personality/v/freud-id-ego-superego" },
            ],
          },
        ],
      },
      {
        id: "psy-w2",
        title: "第 2 周：脑科学与神经心理学基础",
        summary: "学习大脑结构、神经元通信机制及脑功能与行为的关系。",
        overview: "理解心理过程的生物基础是现代心理学的核心。本周从神经元到脑区，建立心理活动与神经机制之间的联系。",
        keyPoints: [
          "神经元通过突触传递化学和电信号，是心理活动的物质基础",
          "大脑各区域功能分工明确，如前额叶负责执行功能、海马体参与记忆",
          "神经可塑性表明大脑在整个生命周期都能发生结构和功能变化",
        ],
        lessons: [
          {
            id: "psy-w2-1",
            title: "神经元与突触传递",
            detail: "理解神经元的结构、动作电位产生过程以及突触化学传递的基本原理。",
            keyPoints: [
              "神经元由树突、细胞体和轴突组成，通过电化学信号传递信息。",
              "神经递质（如多巴胺、血清素）在突触间隙传递信号，影响情绪与行为。",
              "神经递质失衡与多种心理障碍（如抑郁症、焦虑症）相关。",
            ],
            resources: [
              { title: "Khan Academy: Neurons", url: "https://www.khanacademy.org/science/biology/human-biology/neuron-nervous-system/v/anatomy-of-a-neuron" },
              { title: "Coursera: Medical Neuroscience", url: "https://www.coursera.org/learn/medical-neuroscience" },
            ],
          },
          {
            id: "psy-w2-2",
            title: "大脑结构与功能分区",
            detail: "学习大脑皮层四个叶区的功能分工以及边缘系统在情绪中的角色。",
            keyPoints: [
              "额叶负责计划、决策和执行功能，是高级认知的核心区域。",
              "边缘系统（杏仁核、海马体）调控情绪反应和记忆编码。",
              "布洛卡区和韦尼克区分别负责语言产生和语言理解。",
            ],
            resources: [
              { title: "Khan Academy: Brain Regions", url: "https://www.khanacademy.org/test-prep/mcat/organ-systems/the-nervous-system/v/functions-of-the-cerebral-cortex" },
              { title: "APA: Brain Science", url: "https://www.apa.org/topics/brain-science" },
              { title: "Coursera: Understanding the Brain", url: "https://www.coursera.org/learn/neurobiology" },
            ],
          },
          {
            id: "psy-w2-3",
            title: "神经可塑性与脑成像",
            detail: "了解大脑在经验驱动下的结构与功能变化，以及 fMRI、EEG 等脑成像技术的原理与应用。",
            keyPoints: [
              "神经可塑性包括突触可塑性和结构可塑性，支撑学习和康复。",
              "fMRI 通过监测血氧水平变化间接反映脑区活动。",
              "EEG 直接记录脑电波，时间分辨率高，常用于睡眠和注意力研究。",
            ],
            resources: [
              { title: "Nature: Neuroplasticity", url: "https://www.nature.com/subjects/neuronal-plasticity" },
              { title: "Khan Academy: fMRI", url: "https://www.khanacademy.org/test-prep/mcat/organ-systems/the-nervous-system/v/functional-mri-fmri" },
            ],
          },
        ],
      },
      {
        id: "psy-w3",
        title: "第 3 周：感知觉、注意力、记忆与学习",
        summary: "掌握感知觉加工、注意力机制以及记忆与学习的核心理论。",
        overview: "从感觉输入到记忆存储，本周系统学习信息在大脑中的加工流程，理解注意力的有限资源特性及记忆的编码、存储与提取规律。",
        keyPoints: [
          "感知觉是大脑对感觉信息的主动组织和解释过程",
          "注意力是有限资源，选择性注意和分配性注意影响信息处理效率",
          "记忆分为感觉记忆、短时记忆和长时记忆，遗忘遵循艾宾浩斯曲线",
        ],
        lessons: [
          {
            id: "psy-w3-1",
            title: "感知觉与注意力",
            detail: "学习感觉阈限、知觉组织原则（格式塔法则）以及选择性注意的经典实验与模型。",
            keyPoints: [
              "绝对阈限和差别阈限决定感知的最低刺激量和可分辨差异。",
              "格式塔法则（接近性、相似性、闭合性）揭示知觉组织的规律。",
              "鸡尾酒会效应展示了选择性注意在复杂环境中的作用。",
            ],
            resources: [
              { title: "Khan Academy: Sensation & Perception", url: "https://www.khanacademy.org/test-prep/mcat/behavior/sensing-the-environment/v/vision-and-perception" },
              { title: "Simply Psychology: Attention", url: "https://www.simplypsychology.org/attention-models.html" },
              { title: "APA: Sensation and Perception", url: "https://www.apa.org/topics/sensation-perception" },
            ],
          },
          {
            id: "psy-w3-2",
            title: "记忆系统与遗忘",
            detail: "理解阿特金森-希弗林多存储模型、工作记忆模型以及遗忘的干扰理论与衰退理论。",
            keyPoints: [
              "多存储模型将记忆分为感觉记忆、短时记忆和长时记忆三个阶段。",
              "巴德利的工作记忆模型包含中央执行、语音环和视空间画板。",
              "遗忘主要由干扰（前摄/倒摄）和提取失败导致，而非单纯的记忆衰退。",
            ],
            resources: [
              { title: "Simply Psychology: Memory", url: "https://www.simplypsychology.org/memory.html" },
              { title: "Coursera: Learning How to Learn", url: "https://www.coursera.org/learn/learning-how-to-learn" },
            ],
          },
          {
            id: "psy-w3-3",
            title: "学习理论",
            detail: "对比经典条件反射、操作性条件反射、观察学习与建构主义学习理论。",
            keyPoints: [
              "巴甫洛夫的经典条件反射揭示了无意识的联结学习机制。",
              "班杜拉的社会学习理论强调观察与模仿在行为习得中的重要作用。",
              "建构主义认为学习者主动建构知识，而非被动接受信息。",
            ],
            resources: [
              { title: "Khan Academy: Learning", url: "https://www.khanacademy.org/test-prep/mcat/behavior/learning-and-memory/v/classical-conditioning" },
              { title: "Simply Psychology: Bandura", url: "https://www.simplypsychology.org/bandura.html" },
              { title: "APA: Learning Theory", url: "https://www.apa.org/topics/learning" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "psy-s2",
    title: "阶段二：发展与社会心理学",
    duration: "第 4-6 周",
    goal: "理解人类心理的毕生发展规律，掌握社会情境如何影响个体行为与人际互动。",
    weeks: [
      {
        id: "psy-w4",
        title: "第 4 周：发展心理学",
        summary: "学习皮亚杰认知发展阶段论与埃里克森心理社会发展理论。",
        overview: "发展心理学研究个体从出生到老年的心理变化规律。本周聚焦认知发展和心理社会发展两大理论框架，理解不同阶段的关键任务。",
        keyPoints: [
          "皮亚杰将认知发展分为感知运动、前运算、具体运算和形式运算四个阶段",
          "埃里克森提出八个心理社会发展阶段，每个阶段都有核心冲突需要解决",
          "依恋理论揭示了早期亲子关系对终身人际关系的深远影响",
        ],
        lessons: [
          {
            id: "psy-w4-1",
            title: "皮亚杰认知发展理论",
            detail: "理解皮亚杰四个认知发展阶段的特征、关键概念（同化、顺应、图式）及其教育启示。",
            keyPoints: [
              "感知运动阶段（0-2 岁）：通过感觉和动作认识世界，发展客体永久性。",
              "前运算阶段（2-7 岁）：出现符号思维但存在自我中心和不可逆性。",
              "具体运算与形式运算阶段逐步获得守恒、可逆性和抽象推理能力。",
            ],
            resources: [
              { title: "Simply Psychology: Piaget", url: "https://www.simplypsychology.org/piaget.html" },
              { title: "Khan Academy: Piaget", url: "https://www.khanacademy.org/test-prep/mcat/behavior/theories-of-personality/v/piaget-stages-of-development" },
              { title: "Coursera: Child Development", url: "https://www.coursera.org/learn/child-development" },
            ],
          },
          {
            id: "psy-w4-2",
            title: "埃里克森心理社会发展",
            detail: "学习埃里克森八阶段理论中每个阶段的核心冲突、美德及对人格形成的影响。",
            keyPoints: [
              "婴儿期的信任 vs 不信任奠定安全感基础，影响后续社交能力。",
              "青少年期的同一性 vs 角色混乱是自我认同形成的关键。",
              "成年期的亲密 vs 孤立和繁殖 vs 停滞反映了关系与贡献的需求。",
            ],
            resources: [
              { title: "Simply Psychology: Erikson", url: "https://www.simplypsychology.org/erik-erikson.html" },
              { title: "Psychology Today: Erikson", url: "https://www.psychologytoday.com/us/basics/eriksons-stages-of-development" },
            ],
          },
          {
            id: "psy-w4-3",
            title: "依恋理论与毕生发展",
            detail: "探索鲍尔比的依恋理论、安斯沃斯的陌生情境实验以及毕生发展视角下的成人依恋。",
            keyPoints: [
              "鲍尔比认为安全依恋是儿童探索世界的安全基地。",
              "安斯沃斯识别了安全型、回避型和矛盾型三种依恋类型。",
              "成人依恋风格影响亲密关系、情绪调节和心理健康。",
            ],
            resources: [
              { title: "APA: Attachment Theory", url: "https://www.apa.org/topics/parenting/attachment" },
              { title: "Simply Psychology: Attachment", url: "https://www.simplypsychology.org/attachment.html" },
              { title: "Psychology Today: Attachment", url: "https://www.psychologytoday.com/us/basics/attachment" },
            ],
          },
        ],
      },
      {
        id: "psy-w5",
        title: "第 5 周：社会心理学核心",
        summary: "研究从众、服从与偏见等社会影响现象的心理机制。",
        overview: "社会心理学揭示了社会情境对个体思维和行为的强大影响。本周学习经典实验背后的理论，理解为什么「好人」也会做出令人意外的行为。",
        keyPoints: [
          "阿希实验揭示了群体压力下的从众行为及其信息性与规范性动机",
          "米尔格拉姆服从实验表明权威情境能使普通人做出极端行为",
          "偏见源于社会分类和刻板印象，可通过群际接触和去类别化减少",
        ],
        lessons: [
          {
            id: "psy-w5-1",
            title: "从众与社会影响",
            detail: "分析阿希从众实验的经典范式，理解信息性社会影响和规范性社会影响的区分。",
            keyPoints: [
              "信息性社会影响：在不确定情况下参考他人行为获取正确信息。",
              "规范性社会影响：为获得社会认可而顺从群体，即使知道群体是错的。",
              "从众程度受群体规模、一致性和个体自信心等因素影响。",
            ],
            resources: [
              { title: "Simply Psychology: Asch", url: "https://www.simplypsychology.org/asch-conformity.html" },
              { title: "Khan Academy: Conformity", url: "https://www.khanacademy.org/test-prep/mcat/behavior/social-interactions/v/asch-conformity-studies" },
            ],
          },
          {
            id: "psy-w5-2",
            title: "服从与权威",
            detail: "深入分析米尔格拉姆服从实验及斯坦福监狱实验，探讨情境力量对行为的影响。",
            keyPoints: [
              "米尔格拉姆实验中 65% 的参与者在权威指令下施加了最大强度电击。",
              "情境因素（如权威距离、受害者可见性）显著影响服从水平。",
              "理解情境力量有助于设计减少盲目服从的组织制度。",
            ],
            resources: [
              { title: "Simply Psychology: Milgram", url: "https://www.simplypsychology.org/milgram.html" },
              { title: "APA: Obedience", url: "https://www.apa.org/topics/obedience" },
              { title: "Psychology Today: Obedience", url: "https://www.psychologytoday.com/us/basics/obedience" },
            ],
          },
          {
            id: "psy-w5-3",
            title: "偏见与刻板印象",
            detail: "理解偏见的认知根源（社会分类与刻板印象）、情感成分和行为表现（歧视），以及减少偏见的策略。",
            keyPoints: [
              "内隐联想测验（IAT）揭示了人们可能意识不到的隐性偏见。",
              "群际接触假说：平等互动可减少群体间偏见。",
              "认知去偏见策略包括个体化、换位思考和反刻板印象训练。",
            ],
            resources: [
              { title: "Project Implicit", url: "https://implicit.harvard.edu/implicit/" },
              { title: "APA: Reducing Prejudice", url: "https://www.apa.org/topics/prejudice-discrimination" },
              { title: "Coursera: Social Psychology", url: "https://www.coursera.org/learn/social-psychology" },
            ],
          },
        ],
      },
      {
        id: "psy-w6",
        title: "第 6 周：群体心理与人际关系",
        summary: "掌握群体决策机制、社会影响策略与人际沟通心理学。",
        overview: "人在群体中的行为往往不同于独处时。本周探索群体极化、旁观者效应等群体现象，同时学习人际吸引和有效沟通的心理学原理。",
        keyPoints: [
          "群体极化使群体讨论后态度趋向更极端，而非更理性",
          "旁观者效应说明在场人数越多，个体出手相助的概率反而越低",
          "人际吸引受接近性、相似性、互惠和外表吸引力等因素影响",
        ],
        lessons: [
          {
            id: "psy-w6-1",
            title: "群体决策与群体思维",
            detail: "分析群体极化、群体思维（Groupthink）的形成条件及预防策略。",
            keyPoints: [
              "群体思维在高度凝聚力群体中更易发生，导致决策质量下降。",
              "症状包括无懈可击幻觉、合理化、对异议者施压。",
              "预防方法：指定魔鬼代言人、鼓励批判性讨论、引入外部意见。",
            ],
            resources: [
              { title: "Psychology Today: Groupthink", url: "https://www.psychologytoday.com/us/basics/groupthink" },
              { title: "Simply Psychology: Groupthink", url: "https://www.simplypsychology.org/groupthink.html" },
            ],
          },
          {
            id: "psy-w6-2",
            title: "旁观者效应与亲社会行为",
            detail: "理解旁观者效应的心理机制（责任分散与多元无知），以及促进利他行为的因素。",
            keyPoints: [
              "责任分散：在场人数越多，每个人感到的个人责任越小。",
              "多元无知：每个人都在观察他人反应，导致集体不行动。",
              "明确指定帮助者和提高责任意识可有效减少旁观者效应。",
            ],
            resources: [
              { title: "Simply Psychology: Bystander Effect", url: "https://www.simplypsychology.org/bystander-effect.html" },
              { title: "Khan Academy: Prosocial Behavior", url: "https://www.khanacademy.org/test-prep/mcat/behavior/social-interactions/v/prosocial-behavior" },
              { title: "APA: Bystander Intervention", url: "https://www.apa.org/topics/bystander-intervention" },
            ],
          },
          {
            id: "psy-w6-3",
            title: "人际吸引与沟通心理",
            detail: "探索人际吸引的决定因素以及非暴力沟通、积极倾听等有效沟通策略的心理学基础。",
            keyPoints: [
              "接近效应和曝光效应表明熟悉度会增加好感。",
              "非暴力沟通四步法：观察、感受、需要、请求，减少人际冲突。",
              "积极倾听包括复述、澄清和共情回应，增进理解与信任。",
            ],
            resources: [
              { title: "Psychology Today: Attraction", url: "https://www.psychologytoday.com/us/basics/attraction" },
              { title: "APA: Communication", url: "https://www.apa.org/topics/communication" },
              { title: "Coursera: Improving Communication Skills", url: "https://www.coursera.org/learn/wharton-communication-skills" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "psy-s3",
    title: "阶段三：应用心理学",
    duration: "第 7-9 周",
    goal: "将心理学理论应用于情绪管理、积极生活、理性决策和消费行为等日常场景。",
    weeks: [
      {
        id: "psy-w7",
        title: "第 7 周：情绪管理与压力应对",
        summary: "理解情绪的本质及压力的生理与心理机制，掌握科学的情绪调节方法。",
        overview: "情绪是进化赋予我们的适应工具，但不当的情绪反应会损害身心健康。本周学习情绪理论和循证的压力管理策略。",
        keyPoints: [
          "情绪包含主观体验、生理唤醒和行为表达三个成分",
          "拉扎勒斯的认知评价理论强调个体对事件的解读决定情绪反应",
          "慢性压力导致皮质醇持续升高，损害免疫和认知功能",
        ],
        lessons: [
          {
            id: "psy-w7-1",
            title: "情绪理论与识别",
            detail: "对比詹姆斯-兰格理论、坎农-巴德理论和沙赫特-辛格理论，学习基本情绪的识别与表达。",
            keyPoints: [
              "詹姆斯-兰格理论认为生理反应先于情绪体验（先哭后悲）。",
              "坎农-巴德理论主张生理反应和情绪体验同时发生。",
              "沙赫特-辛格二因素理论强调认知标签对情绪定义的重要作用。",
            ],
            resources: [
              { title: "Khan Academy: Emotion", url: "https://www.khanacademy.org/test-prep/mcat/behavior/theories-of-emotion/v/emotions-the-james-lange-theory" },
              { title: "Simply Psychology: Theories of Emotion", url: "https://www.simplypsychology.org/theories-of-emotion.html" },
              { title: "APA: Emotion", url: "https://www.apa.org/topics/emotions" },
            ],
          },
          {
            id: "psy-w7-2",
            title: "压力与应对策略",
            detail: "学习塞利的一般适应综合征（GAS）、拉扎勒斯的压力评价模型及问题聚焦与情绪聚焦应对策略。",
            keyPoints: [
              "一般适应综合征分为警觉、抵抗和耗竭三个阶段。",
              "问题聚焦应对直接解决压力源，情绪聚焦应对调节情绪反应。",
              "社会支持是缓解压力最有效的外部资源之一。",
            ],
            resources: [
              { title: "APA: Stress", url: "https://www.apa.org/topics/stress" },
              { title: "Psychology Today: Coping", url: "https://www.psychologytoday.com/us/basics/coping" },
            ],
          },
          {
            id: "psy-w7-3",
            title: "情绪调节技术",
            detail: "掌握认知重评、正念呼吸、情绪日记等循证的情绪调节方法及其神经科学基础。",
            keyPoints: [
              "认知重评通过改变对事件的解释来调节情绪反应，激活前额叶皮层。",
              "正念冥想训练注意力和接纳态度，减少情绪反应的自动化。",
              "书写表达（情绪日记）有助于情绪加工和压力缓解。",
            ],
            resources: [
              { title: "Yale: Science of Well-Being", url: "https://www.coursera.org/learn/the-science-of-well-being" },
              { title: "APA: Mindfulness", url: "https://www.apa.org/topics/mindfulness" },
              { title: "Psychology Today: Emotion Regulation", url: "https://www.psychologytoday.com/us/basics/emotion-regulation" },
            ],
          },
        ],
      },
      {
        id: "psy-w8",
        title: "第 8 周：积极心理学与幸福感",
        summary: "探索积极心理学的科学框架，学习提升主观幸福感的循证方法。",
        overview: "积极心理学不只关注治愈心理疾病，更研究如何让普通人活得更充实。本周学习塞利格曼的 PERMA 模型和心流理论，理解幸福的科学基础。",
        keyPoints: [
          "PERMA 模型将幸福分解为积极情绪、投入、关系、意义和成就五个维度",
          "心流状态发生在技能与挑战匹配时，带来深度投入和满足感",
          "感恩练习和性格优势运用是提升幸福感最有效的干预措施",
        ],
        lessons: [
          {
            id: "psy-w8-1",
            title: "积极心理学与 PERMA 模型",
            detail: "理解塞利格曼的积极心理学框架，学习 PERMA 五要素模型及其在生活中的应用。",
            keyPoints: [
              "积极心理学研究人的优势和美德，而非仅仅聚焦于病理和缺陷。",
              "PERMA：积极情绪、投入（心流）、人际关系、意义感和成就感。",
              "性格优势量表（VIA）帮助识别个人核心优势并在日常中有意运用。",
            ],
            resources: [
              { title: "Authentic Happiness (UPenn)", url: "https://www.authentichappiness.sas.upenn.edu/" },
              { title: "Coursera: Positive Psychology", url: "https://www.coursera.org/specializations/positivepsychology" },
              { title: "VIA Character Strengths", url: "https://www.viacharacter.org/" },
            ],
          },
          {
            id: "psy-w8-2",
            title: "心流与内在动机",
            detail: "学习契克森米哈赖的心流理论以及德西与瑞安的自我决定理论（SDT）对内在动机的解释。",
            keyPoints: [
              "心流发生在高技能与高挑战匹配时，产生时间感消失和深度投入。",
              "自我决定理论认为自主性、胜任感和归属感是内在动机的三大需求。",
              "外在奖励可能削弱内在动机（过度辩护效应），需谨慎使用。",
            ],
            resources: [
              { title: "Psychology Today: Flow", url: "https://www.psychologytoday.com/us/basics/flow" },
              { title: "Self-Determination Theory", url: "https://selfdeterminationtheory.org/" },
              { title: "Khan Academy: Motivation", url: "https://www.khanacademy.org/test-prep/mcat/behavior/motivation/v/motivation-and-behavior" },
            ],
          },
          {
            id: "psy-w8-3",
            title: "幸福感干预实践",
            detail: "掌握感恩日记、善行练习、最佳可能自我等循证的幸福感干预方法及其效果研究。",
            keyPoints: [
              "每日三件好事练习持续 6 个月可显著提升生活满意度。",
              "善行练习（每周做 5 件善事）能同时提升助人者和受助者的幸福感。",
              "正念减压课程（MBSR）8 周训练可降低焦虑和提升主观幸福感。",
            ],
            resources: [
              { title: "Yale: Science of Well-Being", url: "https://www.coursera.org/learn/the-science-of-well-being" },
              { title: "Greater Good Science Center", url: "https://greatergood.berkeley.edu/" },
              { title: "APA: Happiness", url: "https://www.apa.org/topics/happiness" },
            ],
          },
        ],
      },
      {
        id: "psy-w9",
        title: "第 9 周：决策心理学与行为经济学",
        summary: "学习认知偏误如何影响决策，以及行为经济学如何应用于消费与公共政策。",
        overview: "人并非完全理性的决策者。本周学习卡尼曼的双系统理论和常见认知偏误，理解助推理论如何设计更优的选择架构。",
        keyPoints: [
          "系统 1（快思考）自动、快速但易出错；系统 2（慢思考）深思熟虑但消耗资源",
          "锚定效应、可得性启发和损失厌恶是最常见的认知偏误",
          "助推（Nudge）通过改变选择架构引导人们做出更优决策",
        ],
        lessons: [
          {
            id: "psy-w9-1",
            title: "双系统理论与启发式",
            detail: "学习卡尼曼的系统 1 和系统 2 理论框架，理解代表性启发、可得性启发等常见认知捷径。",
            keyPoints: [
              "系统 1 依赖直觉和经验快速判断，适合日常简单决策。",
              "代表性启发导致忽略基准概率（如将典型特征等同于高概率）。",
              "可得性启发使人高估容易回忆起的事件的发生概率。",
            ],
            resources: [
              { title: "Khan Academy: Heuristics", url: "https://www.khanacademy.org/test-prep/mcat/behavior/cognition/v/heuristics-and-biases" },
              { title: "Psychology Today: Heuristics", url: "https://www.psychologytoday.com/us/basics/heuristics" },
              { title: "Coursera: Behavioral Finance", url: "https://www.coursera.org/learn/duke-behavioral-finance" },
            ],
          },
          {
            id: "psy-w9-2",
            title: "认知偏误与非理性决策",
            detail: "深入分析锚定效应、确认偏误、沉没成本谬误和损失厌恶，学习去偏见策略。",
            keyPoints: [
              "锚定效应：初始信息（即使无关）显著影响后续判断。",
              "确认偏误：人倾向于搜集支持已有信念的信息，忽略反面证据。",
              "损失厌恶：等量损失的心理痛苦约为等量获益快乐的 2 倍。",
            ],
            resources: [
              { title: "Psychology Today: Cognitive Biases", url: "https://www.psychologytoday.com/us/basics/bias" },
              { title: "APA: Decision Making", url: "https://www.apa.org/topics/decision-making" },
            ],
          },
          {
            id: "psy-w9-3",
            title: "消费心理与助推理论",
            detail: "探索消费者决策中的心理因素，学习泰勒的助推理论及其在健康、储蓄等领域的应用。",
            keyPoints: [
              "默认选项设计是最强大的助推工具（如器官捐献默认同意）。",
              "心理账户导致人们对不同来源的金钱做出不同消费决策。",
              "选择过载：选项过多反而降低决策满意度和行动率。",
            ],
            resources: [
              { title: "Coursera: Behavioral Economics", url: "https://www.coursera.org/learn/behavioral-economics" },
              { title: "Psychology Today: Consumer Behavior", url: "https://www.psychologytoday.com/us/basics/consumer-behavior" },
              { title: "APA: Behavioral Economics", url: "https://www.apa.org/monitor/2014/05/nudging-behavior" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "psy-s4",
    title: "阶段四：高级主题",
    duration: "第 10-12 周",
    goal: "探索心理咨询、组织心理学、研究方法等专业领域，将心理学整合应用于人生发展。",
    weeks: [
      {
        id: "psy-w10",
        title: "第 10 周：心理咨询入门",
        summary: "了解 CBT 与正念疗法的核心技术及心理咨询的基本伦理。",
        overview: "心理咨询是心理学最直接的应用。本周介绍认知行为疗法和正念疗法的原理与技术，帮助理解专业心理帮助的工作方式。",
        keyPoints: [
          "CBT 的核心假设：认知影响情绪和行为，改变不合理认知可改善心理问题",
          "正念疗法强调对当下体验的非评判性觉察，减少自动化反应",
          "心理咨询关系中的共情、真诚和保密是治疗有效性的基础",
        ],
        lessons: [
          {
            id: "psy-w10-1",
            title: "认知行为疗法（CBT）",
            detail: "理解 CBT 的理论模型（认知三角）、常用技术（认知重构、行为实验）及其循证有效性。",
            keyPoints: [
              "认知三角：思维、情绪和行为相互影响，改变任一成分可改善整体。",
              "认知重构通过识别和挑战自动化负性思维来改善情绪。",
              "CBT 对抑郁症、焦虑障碍和失眠等问题有强效循证支持。",
            ],
            resources: [
              { title: "APA: Cognitive Behavioral Therapy", url: "https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral" },
              { title: "Psychology Today: CBT", url: "https://www.psychologytoday.com/us/basics/cognitive-behavioral-therapy" },
              { title: "Beck Institute", url: "https://beckinstitute.org/about/understanding-cbt/" },
            ],
          },
          {
            id: "psy-w10-2",
            title: "正念与接纳疗法",
            detail: "学习正念减压（MBSR）和接纳承诺疗法（ACT）的核心理念及基本正念练习技术。",
            keyPoints: [
              "MBSR 通过身体扫描、正念呼吸和正念瑜伽培养觉察能力。",
              "ACT 强调接纳而非控制痛苦体验，关注价值导向的行动。",
              "正念练习可改变大脑结构，增强前额叶与杏仁核的调控连接。",
            ],
            resources: [
              { title: "UMass MBSR Program", url: "https://www.umassmed.edu/cfm/mindfulness-based-programs/mbsr-courses/" },
              { title: "APA: Mindfulness Meditation", url: "https://www.apa.org/topics/mindfulness/meditation" },
              { title: "Psychology Today: ACT", url: "https://www.psychologytoday.com/us/therapy-types/acceptance-and-commitment-therapy" },
            ],
          },
          {
            id: "psy-w10-3",
            title: "心理咨询伦理与实践",
            detail: "了解心理咨询的伦理原则（保密、知情同意、双重关系）以及何时应寻求专业心理帮助。",
            keyPoints: [
              "保密原则是咨询关系的基石，但在自伤/伤人风险时需突破。",
              "咨询师应避免与来访者建立咨询以外的关系（双重关系）。",
              "持续两周以上的情绪低落、焦虑或功能受损应考虑寻求专业帮助。",
            ],
            resources: [
              { title: "APA: Ethics Code", url: "https://www.apa.org/ethics/code" },
              { title: "Psychology Today: Therapy", url: "https://www.psychologytoday.com/us/basics/therapy" },
            ],
          },
        ],
      },
      {
        id: "psy-w11",
        title: "第 11 周：组织与管理心理学",
        summary: "将心理学应用于职场情境，理解领导力、动机和团队效能的心理机制。",
        overview: "组织心理学（I/O Psychology）研究工作环境中的人类行为。本周学习如何运用心理学原理提升领导效能、团队协作和员工满意度。",
        keyPoints: [
          "变革型领导通过愿景激励和智力激发提升团队绩效",
          "赫兹伯格双因素理论区分保健因素（防止不满）和激励因素（驱动满足）",
          "心理安全感是高效团队最重要的特征，鼓励成员承担风险和分享想法",
        ],
        lessons: [
          {
            id: "psy-w11-1",
            title: "领导心理学",
            detail: "对比特质理论、情境领导和变革型领导等领导力理论，理解有效领导的心理特征。",
            keyPoints: [
              "特质理论关注领导者的人格特征（如外向性、责任心、情绪稳定性）。",
              "情境领导理论认为有效领导风格应根据下属成熟度灵活调整。",
              "变革型领导通过感召力、智力激发和个性化关怀激励追随者。",
            ],
            resources: [
              { title: "APA: Leadership", url: "https://www.apa.org/topics/leadership" },
              { title: "Psychology Today: Leadership", url: "https://www.psychologytoday.com/us/basics/leadership" },
              { title: "Coursera: Inspiring Leadership", url: "https://www.coursera.org/learn/inspirational-leadership" },
            ],
          },
          {
            id: "psy-w11-2",
            title: "工作动机与满意度",
            detail: "学习赫兹伯格双因素理论、期望理论及工作特征模型对员工动机和满意度的解释。",
            keyPoints: [
              "保健因素（薪资、环境）不足会导致不满，但充足不会带来满足。",
              "激励因素（成就感、认可、成长）是驱动工作满足感的关键。",
              "工作特征模型：技能多样性、任务完整性和自主权提升内在动机。",
            ],
            resources: [
              { title: "APA: Job Satisfaction", url: "https://www.apa.org/topics/healthy-workplaces" },
              { title: "Simply Psychology: Herzberg", url: "https://www.simplypsychology.org/herzbergs-two-factor-theory.html" },
            ],
          },
          {
            id: "psy-w11-3",
            title: "团队效能与心理安全",
            detail: "探索谷歌亚里士多德项目的发现，理解心理安全感对团队效能的核心作用及其构建方法。",
            keyPoints: [
              "谷歌研究发现心理安全感是预测团队效能的第一要素。",
              "心理安全感意味着团队成员可以放心表达意见、承认错误。",
              "领导者以身作则展示脆弱性、积极回应失败是构建心理安全的关键。",
            ],
            resources: [
              { title: "Google: Project Aristotle", url: "https://rework.withgoogle.com/guides/understanding-team-effectiveness/" },
              { title: "Psychology Today: Psychological Safety", url: "https://www.psychologytoday.com/us/basics/psychological-safety" },
              { title: "APA: Teamwork", url: "https://www.apa.org/topics/teamwork" },
            ],
          },
        ],
      },
      {
        id: "psy-w12",
        title: "第 12 周：研究方法与人生整合",
        summary: "掌握心理学研究方法，将心理学知识整合应用于自我成长和人生规划。",
        overview: "心理学是一门实证科学，理解研究方法有助于批判性地评估心理学信息。本周同时将 12 周所学整合，应用于个人发展和人生规划。",
        keyPoints: [
          "实验法是建立因果关系的金标准，包括随机分配和控制变量",
          "心理测量需关注信度和效度，量表的科学性决定结果的可信度",
          "将心理学知识应用于自我认知、关系管理和职业发展是终身学习的实践",
        ],
        lessons: [
          {
            id: "psy-w12-1",
            title: "心理学研究方法",
            detail: "学习实验法、相关研究和调查法等心理学研究方法的设计原则和局限性。",
            keyPoints: [
              "实验法通过随机分配和控制变量建立自变量与因变量的因果关系。",
              "相关研究揭示变量间的关联强度和方向，但不能推断因果。",
              "研究伦理要求知情同意、最小伤害和事后说明。",
            ],
            resources: [
              { title: "APA: Research Methods", url: "https://www.apa.org/education-career/guide/research-methods" },
              { title: "Khan Academy: Research Methods", url: "https://www.khanacademy.org/test-prep/mcat/behavior/research-design-and-statistics/v/experimental-design" },
              { title: "Coursera: Research Methods", url: "https://www.coursera.org/learn/research-methods" },
            ],
          },
          {
            id: "psy-w12-2",
            title: "心理测量与评估",
            detail: "理解心理测量的基本概念（信度、效度、常模）以及常用心理量表（大五人格、MBTI）的科学性评估。",
            keyPoints: [
              "信度指测量的一致性和稳定性，效度指测量是否真正测到了目标特质。",
              "大五人格模型（OCEAN）有强实证支持，是人格研究的主流框架。",
              "MBTI 广泛流行但信效度较低，不宜作为重大决策的依据。",
            ],
            resources: [
              { title: "APA: Psychological Testing", url: "https://www.apa.org/topics/testing-assessment-measurement" },
              { title: "Psychology Today: Big Five", url: "https://www.psychologytoday.com/us/basics/big-5-personality-traits" },
            ],
          },
          {
            id: "psy-w12-3",
            title: "心理学与人生规划",
            detail: "整合心理学知识制定个人成长计划，涵盖自我认知、关系经营、职业发展和心理健康维护。",
            keyPoints: [
              "自我认知：运用性格优势量表和价值观澄清练习了解真实自我。",
              "成长型思维（德韦克）相信能力可通过努力发展，面对挑战更有韧性。",
              "定期心理自检、建立支持系统和保持终身学习是心理健康的基础。",
            ],
            resources: [
              { title: "Coursera: Science of Well-Being", url: "https://www.coursera.org/learn/the-science-of-well-being" },
              { title: "Psychology Today: Personal Growth", url: "https://www.psychologytoday.com/us/basics/self-improvement" },
              { title: "APA: Resilience", url: "https://www.apa.org/topics/resilience" },
            ],
          },
        ],
      },
    ],
  },
]

export const psychologyKnowledgeCards: KnowledgeCard[] = [
  {
    id: "psy-card-schools",
    title: "心理学四大流派",
    summary: "四大流派从不同视角解释人类心理与行为。",
    points: [
      "行为主义：关注可观察行为，强调环境和学习的决定作用。",
      "认知心理学：研究内部心理过程（思维、记忆、注意），以信息加工为框架。",
      "人本主义与精神分析：分别关注自我实现潜能和无意识动机对行为的驱动。",
    ],
    practice: "选择一个日常行为（如拖延），分别从四大流派视角给出解释，比较异同。",
  },
  {
    id: "psy-card-memory",
    title: "记忆与学习策略",
    summary: "理解记忆机制能帮助设计更高效的学习方法。",
    points: [
      "间隔重复比集中复习更有效，利用遗忘曲线的规律安排复习节点。",
      "精加工编码（与已有知识建立联系）比机械重复更能促进长期记忆。",
      "测试效应：主动提取练习比被动重读更能增强记忆保持。",
    ],
    practice: "设计一个使用间隔重复和主动提取策略的 30 天学习计划，追踪记忆保持率。",
  },
  {
    id: "psy-card-development",
    title: "毕生发展关键阶段",
    summary: "了解各年龄段的发展任务有助于理解自己和他人。",
    points: [
      "儿童期：认知发展（皮亚杰）和安全依恋的建立为未来发展奠定基础。",
      "青少年期：自我同一性（埃里克森）是核心任务，影响价值观和职业选择。",
      "成年期：亲密关系、职业发展和中年反思构成成人发展的主要主题。",
    ],
    practice: "回顾自己的成长经历，用埃里克森理论分析每个阶段的核心冲突及其解决情况。",
  },
  {
    id: "psy-card-social-influence",
    title: "社会影响三机制",
    summary: "理解从众、服从和说服机制，提升社会情境中的自主性。",
    points: [
      "从众：群体压力导致个体改变行为或意见，信息性和规范性影响是两大动机。",
      "服从：权威情境下人们可能做出违背个人价值观的行为。",
      "说服：中心路径（理性论证）与边缘路径（情感线索）影响态度改变。",
    ],
    practice: "记录一周内自己被社会影响的场景，分析属于从众、服从还是说服，思考应对策略。",
  },
  {
    id: "psy-card-emotion",
    title: "情绪调节核心策略",
    summary: "有效的情绪调节是心理健康的关键能力。",
    points: [
      "认知重评：改变对事件的解读来改变情绪反应，是最推荐的策略。",
      "正念觉察：不评判地观察情绪的生起和消退，减少情绪化反应。",
      "表达性书写：用文字记录和加工情绪体验，降低身心压力。",
    ],
    practice: "练习一周的认知重评日记：记录触发事件、自动化思维、替代解读和情绪变化。",
  },
  {
    id: "psy-card-cognitive-bias",
    title: "关键认知偏误清单",
    summary: "识别常见认知偏误是做出理性决策的第一步。",
    points: [
      "锚定效应和可得性启发导致判断偏离客观概率。",
      "确认偏误和后见之明偏误损害信息的客观评估。",
      "损失厌恶和沉没成本谬误导致非理性的坚持或放弃。",
    ],
    practice: "分析一次重要决策中可能存在的认知偏误，设计去偏见检查清单。",
  },
  {
    id: "psy-card-wellbeing",
    title: "幸福感提升实践",
    summary: "循证的幸福感干预方法可以显著提升生活满意度。",
    points: [
      "感恩练习：每日记录三件好事，持续练习 6 个月效果最佳。",
      "运用优势：识别个人性格优势并在日常中有意运用。",
      "社会联结：投资深度人际关系是幸福感最可靠的预测因素。",
    ],
    practice: "进行 21 天幸福感干预实验：感恩日记 + 每周善行 + 每日正念 10 分钟。",
  },
  {
    id: "psy-card-research",
    title: "心理学研究素养",
    summary: "批判性评估心理学信息是科学素养的核心。",
    points: [
      "区分相关关系和因果关系：相关不等于因果。",
      "关注样本量和代表性：小样本或特殊群体的结论可能无法推广。",
      "检查是否经过同行评审和可重复性：可复制危机提醒我们谨慎对待单一研究。",
    ],
    practice: "找一篇心理学科普文章，从研究方法角度评估其结论的可信度和局限性。",
  },
]

export const psychologyExamQuestions: QuizQuestion[] = [
  { id: "psy-q1", question: "斯金纳的操作性条件反射强调什么？", options: ["无意识动机", "强化与惩罚对行为的塑造作用", "自我实现的需求", "认知图式的建构"], answer: 1, rationale: "斯金纳认为行为是由其后果（强化或惩罚）塑造的，正强化增加行为频率，惩罚减少行为频率。" },
  { id: "psy-q2", question: "认知心理学将人脑类比为什么？", options: ["一块白板", "一台计算机", "一面镜子", "一棵大树"], answer: 1, rationale: "认知心理学采用信息加工模型，将人脑比作计算机，研究信息的编码、存储和提取过程。" },
  { id: "psy-q3", question: "马斯洛需求层次理论的最高层需求是？", options: ["安全需求", "归属需求", "尊重需求", "自我实现需求"], answer: 3, rationale: "马斯洛的需求层次从低到高为：生理、安全、归属与爱、尊重、自我实现。" },
  { id: "psy-q4", question: "神经递质多巴胺主要与什么功能相关？", options: ["睡眠调节", "奖赏和动机系统", "肌肉收缩", "骨骼生长"], answer: 1, rationale: "多巴胺在大脑奖赏系统中起关键作用，与愉悦感、动机和学习密切相关。" },
  { id: "psy-q5", question: "艾宾浩斯遗忘曲线揭示了什么规律？", options: ["记忆随时间线性下降", "遗忘在学习后最初阶段最快然后趋缓", "长时记忆永不遗忘", "睡眠不影响记忆保持"], answer: 1, rationale: "艾宾浩斯发现遗忘在学习后立即大量发生，之后遗忘速度逐渐变慢，呈负加速曲线。" },
  { id: "psy-q6", question: "皮亚杰前运算阶段的典型特征是？", options: ["抽象逻辑推理", "自我中心思维和不可逆性", "守恒概念的掌握", "形式运算能力"], answer: 1, rationale: "前运算阶段（2-7 岁）儿童能使用符号但表现出自我中心主义，无法从他人角度思考。" },
  { id: "psy-q7", question: "埃里克森认为青少年期的核心发展任务是？", options: ["信任 vs 不信任", "勤奋 vs 自卑", "同一性 vs 角色混乱", "亲密 vs 孤立"], answer: 2, rationale: "青少年期的核心任务是建立自我同一性，回答「我是谁」的问题。" },
  { id: "psy-q8", question: "阿希从众实验中，参与者从众的主要原因是？", options: ["实验者的威胁", "规范性社会影响（渴望被群体接纳）", "无法看清线段长度", "经济奖励"], answer: 1, rationale: "阿希实验中参与者大多知道正确答案，但出于对群体压力的顺从（规范性影响）而选择错误答案。" },
  { id: "psy-q9", question: "米尔格拉姆服从实验的核心发现是？", options: ["人天生具有暴力倾向", "权威情境能使普通人做出极端服从行为", "人们拒绝伤害他人", "教育程度决定服从水平"], answer: 1, rationale: "实验发现 65% 的参与者在权威指令下施加了最大强度电击，说明情境力量大于人格因素。" },
  { id: "psy-q10", question: "拉扎勒斯压力理论强调什么因素决定压力反应？", options: ["事件的客观严重性", "个体对事件的认知评价", "生理体质的差异", "社会经济地位"], answer: 1, rationale: "拉扎勒斯认为同一事件对不同个体产生不同压力反应，关键在于个体如何评价威胁和应对资源。" },
  { id: "psy-q11", question: "PERMA 模型中的 E 代表什么？", options: ["教育（Education）", "投入（Engagement）", "经济（Economy）", "环境（Environment）"], answer: 1, rationale: "PERMA 中 E 代表 Engagement（投入/心流），指深度沉浸在有挑战性活动中的状态。" },
  { id: "psy-q12", question: "卡尼曼双系统理论中，系统 1 的特点是？", options: ["缓慢、深思熟虑、消耗认知资源", "自动、快速、依赖直觉", "只处理数学问题", "仅在睡眠中激活"], answer: 1, rationale: "系统 1 是快速、自动化的直觉加工系统，处理日常决策但易受认知偏误影响。" },
  { id: "psy-q13", question: "损失厌恶指的是？", options: ["人们讨厌任何形式的损失", "等量损失带来的心理痛苦大于等量获益的快乐", "人们只在乎损失不在乎收益", "损失可以通过遗忘消除"], answer: 1, rationale: "卡尼曼和特沃斯基发现损失的心理权重约为等量收益的 2 倍，这导致人们过度规避风险。" },
  { id: "psy-q14", question: "CBT 认知三角指的是？", options: ["本我、自我、超我", "思维、情绪和行为的相互影响", "过去、现在和未来", "意识、前意识和无意识"], answer: 1, rationale: "CBT 的核心模型认为思维、情绪和行为三者相互影响，改变任一成分可改善整体。" },
  { id: "psy-q15", question: "正念练习的核心态度是？", options: ["积极思考、忽略消极", "对当下体验保持非评判性觉察", "专注于改变不良习惯", "分析过去创伤的根源"], answer: 1, rationale: "正念强调以开放、好奇和非评判的态度观察当下体验，而非试图改变或回避。" },
  { id: "psy-q16", question: "赫兹伯格双因素理论中，保健因素的作用是？", options: ["直接提升工作满意度", "消除不满但不能带来满足", "替代薪酬激励", "仅影响管理层"], answer: 1, rationale: "保健因素（如薪资、工作环境）不足会导致不满，但充分满足只能消除不满而无法产生满足感。" },
  { id: "psy-q17", question: "心理安全感对团队最重要的作用是？", options: ["提高团队成员的技术能力", "让成员敢于表达意见、承认错误和承担风险", "减少团队会议时间", "确保领导者的权威不受挑战"], answer: 1, rationale: "心理安全感使团队成员可以放心地冒险和暴露脆弱性，这是高效团队的首要特征。" },
  { id: "psy-q18", question: "实验法区别于相关研究的关键特征是？", options: ["使用问卷收集数据", "随机分配被试到不同条件以建立因果关系", "研究样本量更大", "研究时间更长"], answer: 1, rationale: "实验法通过随机分配和控制变量来操纵自变量，从而推断自变量与因变量之间的因果关系。" },
  { id: "psy-q19", question: "大五人格模型中不包括以下哪个维度？", options: ["开放性", "外向性", "直觉性", "责任心"], answer: 2, rationale: "大五人格（OCEAN）包括开放性、责任心、外向性、宜人性和神经质，不包括直觉性。" },
  { id: "psy-q20", question: "班杜拉的社会学习理论强调什么学习机制？", options: ["仅通过直接强化学习", "通过观察和模仿他人行为来学习", "仅通过经典条件反射学习", "学习完全由基因决定"], answer: 1, rationale: "班杜拉认为人可以通过观察他人（榜样）的行为及其后果来学习，无需亲身经历强化。" },
]

export const psychologyRoadmap: RoadmapDefinition = {
  id: "psychology" as RoadmapDefinition["id"],
  label: "心理学",
  title: "心理学学习路线",
  durationLabel: "12 周·36 课时",
  description: "从心理学基础理论到应用实践，系统掌握认知、发展、社会和积极心理学核心知识，培养科学的自我认知与人际理解能力。",
  heroBadge: "认知科学 · 社会心理 · 积极心理 · 心理咨询",
  stages: psychologyStages,
  knowledgeCards: psychologyKnowledgeCards,
  examQuestions: psychologyExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始心理学之旅，先了解四大流派和脑科学基础。"
    if (percent < 25) return "继续探索感知觉与记忆机制，打好认知心理学基础。"
    if (percent < 50) return "深入发展心理学和社会心理学，理解人际互动的规律。"
    if (percent < 75) return "学习情绪管理和积极心理学，将理论应用于日常生活。"
    if (percent < 100) return "探索心理咨询与研究方法，完成心理学知识体系的整合。"
    return "恭喜完成！你已建立系统的心理学知识框架，持续实践、觉察成长！"
  },
  resourceGuide: {
    environment: "准备笔记本用于反思日记，可选安装冥想 App（如 Headspace）进行正念练习。",
    fallbackKeyPoints: [
      "心理学四大流派从不同角度解释人类行为，互为补充",
      "记忆遵循编码-存储-提取过程，间隔重复和主动提取是高效学习策略",
      "社会情境对行为的影响远超人们的预期（从众、服从实验）",
      "认知偏误导致系统性的非理性决策，觉察是矫正的第一步",
      "积极心理学循证干预（感恩、善行、正念）可显著提升幸福感",
    ],
    handsOnSteps: [
      "完成 VIA 性格优势量表测评，识别自己的核心优势",
      "进行 7 天情绪日记实践，记录触发事件和认知重评过程",
      "用双系统框架分析一次重要决策中的认知偏误",
      "练习 21 天感恩日记（每日三件好事）并记录幸福感变化",
      "设计一份基于间隔重复和主动提取的个人学习计划",
    ],
    selfChecks: [
      "能否用四大流派视角分析同一个心理现象？",
      "是否理解记忆的多存储模型和工作记忆的运作方式？",
      "能否识别日常生活中的从众、服从和认知偏误？",
      "是否掌握至少两种循证的情绪调节策略？",
      "能否区分相关研究和实验研究的适用场景？",
    ],
    extensions: [
      "阅读卡尼曼《思考，快与慢》深入理解决策心理学",
      "学习 MBTI 与大五人格的科学性对比研究",
      "探索进化心理学对人类行为的解释框架",
      "了解积极心理学干预在教育和企业中的应用案例",
    ],
    lessonQuizAdvice: "每周学习后结合自身经历做反思练习，重点理解心理机制而非死记理论名词。",
  },
}
