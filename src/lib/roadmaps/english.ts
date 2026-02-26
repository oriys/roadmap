import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const englishStages: Stage[] = [
  {
    id: "english-s1",
    title: "阶段一：语音与词汇基础",
    duration: "第 1-3 周",
    goal: "掌握英语音标与发音规则，建立高效词汇记忆方法，理解基础语法框架。",
    weeks: [
      {
        id: "english-w1",
        title: "第 1 周：音标与发音规则",
        summary: "系统学习国际音标（IPA）与自然拼读法，建立准确的英语语音基础。",
        overview: "发音是英语学习的基石。本周从 IPA 音标入手，掌握 44 个英语音素的正确发音方式，并学习自然拼读规则，建立字母与发音之间的对应关系。",
        keyPoints: [
          "掌握 44 个英语音素（20 个元音 + 24 个辅音）的标准发音",
          "理解自然拼读（Phonics）的基本规则，实现「见词能读」",
          "学会使用在线词典的音标标注纠正发音习惯",
        ],
        lessons: [
          {
            id: "english-w1-1",
            title: "国际音标（IPA）系统入门",
            detail: "学习国际音标的 44 个音素分类，掌握元音与辅音的发音方法和口腔位置。",
            keyPoints: [
              "元音分为单元音（12 个）和双元音（8 个），注意长短音区别。",
              "辅音分为清辅音和浊辅音，需掌握送气与不送气的差异。",
              "学会使用发音器官图（tongue position chart）辅助理解发音位置。",
            ],
            resources: [
              { title: "BBC Learning English - Pronunciation", url: "https://www.bbc.co.uk/learningenglish/english/features/pronunciation" },
              { title: "Cambridge Dictionary - IPA Guide", url: "https://dictionary.cambridge.org/help/phonetics.html" },
              { title: "Interactive IPA Chart", url: "https://www.ipachart.com/" },
            ],
          },
          {
            id: "english-w1-2",
            title: "自然拼读法（Phonics）",
            detail: "掌握字母与发音的对应规则，学习常见字母组合的发音模式，提升见词能读的能力。",
            keyPoints: [
              "单辅音字母有固定发音，元音字母在开/闭音节中发音不同。",
              "常见字母组合如 th、sh、ch、ph、tion 有固定发音规则。",
              "Magic E 规则：末尾 e 使前面的元音发字母本身的音。",
            ],
            resources: [
              { title: "Phonics on the Web", url: "https://www.phonicsontheweb.com/" },
              { title: "Oxford Phonics World", url: "https://elt.oup.com/student/oxfordphonicsworld/" },
            ],
          },
          {
            id: "english-w1-3",
            title: "发音自我诊断与纠正",
            detail: "识别中国学习者常见的发音问题，利用工具进行针对性纠正和跟读练习。",
            keyPoints: [
              "中国学习者常见问题：/θ/ 与 /s/ 混淆、/l/ 与 /r/ 不分、/v/ 发成 /w/。",
              "使用 Forvo 等发音网站比对母语者标准发音。",
              "每日 10 分钟最小对立体（minimal pairs）跟读训练效果显著。",
            ],
            resources: [
              { title: "Forvo - 母语者发音库", url: "https://forvo.com/" },
              { title: "YouGlish - 真实语境发音", url: "https://youglish.com/" },
              { title: "Rachel's English", url: "https://rachelsenglish.com/" },
            ],
          },
        ],
      },
      {
        id: "english-w2",
        title: "第 2 周：高频词汇记忆法",
        summary: "掌握科学的词汇记忆策略，运用词根词缀和间隔重复法高效扩充词汇量。",
        overview: "词汇量是英语能力的基础指标。本周学习词根词缀分析法、语境记忆法和间隔重复法（Spaced Repetition），建立可持续的词汇积累体系。",
        keyPoints: [
          "词根词缀法可以帮助推导陌生单词含义，覆盖约 60% 的英语词汇",
          "语境记忆法通过真实语料加深理解，避免孤立背单词",
          "间隔重复法（SRS）利用遗忘曲线科学安排复习时间",
        ],
        lessons: [
          {
            id: "english-w2-1",
            title: "词根词缀分析法",
            detail: "学习 50 个高频词根和 30 个常用词缀，掌握通过构词法推导词义的技巧。",
            keyPoints: [
              "常见词根如 duct（引导）、spect（看）、port（携带）可派生大量单词。",
              "前缀改变词义（un-/re-/pre-），后缀改变词性（-tion/-ment/-able）。",
              "掌握 50 个核心词根可覆盖约 10000 个英语常用词。",
            ],
            resources: [
              { title: "Membean - Word Roots", url: "https://membean.com/roots" },
              { title: "Online Etymology Dictionary", url: "https://www.etymonline.com/" },
              { title: "Vocabulary.com", url: "https://www.vocabulary.com/" },
            ],
          },
          {
            id: "english-w2-2",
            title: "语境记忆与搭配学习",
            detail: "通过真实语料学习词汇用法和搭配，理解单词在不同语境中的含义变化。",
            keyPoints: [
              "Collocation（搭配）比孤立背词更重要，如 make a decision 而非 do a decision。",
              "利用语料库（如 COCA）查询单词的高频搭配和用法。",
              "通过阅读英文原版材料在真实语境中习得词汇。",
            ],
            resources: [
              { title: "COCA 语料库", url: "https://www.english-corpora.org/coca/" },
              { title: "Oxford Collocations Dictionary", url: "https://www.oxfordlearnersdictionaries.com/" },
            ],
          },
          {
            id: "english-w2-3",
            title: "间隔重复法（SRS）实践",
            detail: "利用 Anki 等间隔重复软件科学安排词汇复习，结合艾宾浩斯遗忘曲线优化记忆效率。",
            keyPoints: [
              "艾宾浩斯遗忘曲线显示：学后 1 天遗忘 70%，需要及时复习。",
              "Anki 的 SM-2 算法根据记忆难度自动调整复习间隔。",
              "每日新词控制在 15-20 个，配合复习总量不超过 100 张卡片。",
            ],
            resources: [
              { title: "Anki 官方文档", url: "https://docs.ankiweb.net/" },
              { title: "Quizlet", url: "https://quizlet.com/" },
              { title: "SuperMemo 方法论", url: "https://supermemo.guru/wiki/SuperMemo" },
            ],
          },
        ],
      },
      {
        id: "english-w3",
        title: "第 3 周：基础语法框架",
        summary: "掌握英语五大基本句型、核心时态和主要词性，构建语法认知框架。",
        overview: "语法是语言的骨架。本周通过五大基本句型理解英语句子的构成逻辑，掌握八大时态的核心用法，并理清名词、动词、形容词等词性的功能。",
        keyPoints: [
          "五大基本句型（SV/SVO/SVP/SVOO/SVOC）是所有英语句子的基础",
          "重点掌握一般现在/过去/将来和现在完成时四大核心时态",
          "词性决定单词在句子中的位置和功能",
        ],
        lessons: [
          {
            id: "english-w3-1",
            title: "英语五大基本句型",
            detail: "学习 SV、SVO、SVP、SVOO、SVOC 五种基本句型的结构特点及常见动词搭配。",
            keyPoints: [
              "SV（主谓）：Birds fly. 不及物动词不需要宾语。",
              "SVO（主谓宾）/ SVOO（主谓双宾）：核心在于动词的及物性。",
              "SVOC（主谓宾补）：补语用于补充说明宾语的状态或身份。",
            ],
            resources: [
              { title: "British Council - Grammar", url: "https://learnenglish.britishcouncil.org/grammar" },
              { title: "Grammarly - Sentence Structure", url: "https://www.grammarly.com/blog/sentence-structure/" },
            ],
          },
          {
            id: "english-w3-2",
            title: "核心时态体系",
            detail: "系统学习英语八大核心时态，重点掌握一般时与完成时的区别和使用场景。",
            keyPoints: [
              "一般时态描述事实/习惯，进行时描述正在发生的动作。",
              "完成时强调「到某时间点的结果」，是中国学习者的重点难点。",
              "时态的选择本质上是「时间 + 状态」的组合。",
            ],
            resources: [
              { title: "English Page - Verb Tenses", url: "https://www.englishpage.com/verbpage/verbtenseintro.html" },
              { title: "Perfect English Grammar", url: "https://www.perfect-english-grammar.com/verb-tenses.html" },
              { title: "BBC - Grammar Challenge", url: "https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-1/tab/grammar" },
            ],
          },
          {
            id: "english-w3-3",
            title: "词性与句子成分",
            detail: "理解名词、动词、形容词、副词等核心词性的功能及其在句子中充当的成分。",
            keyPoints: [
              "名词充当主语/宾语，形容词修饰名词，副词修饰动词/形容词。",
              "介词短语可作定语、状语、补语，是句子扩展的重要手段。",
              "掌握词性转换（如 succeed → success → successful → successfully）。",
            ],
            resources: [
              { title: "Cambridge Grammar Guide", url: "https://dictionary.cambridge.org/grammar/british-grammar/" },
              { title: "Purdue OWL - Parts of Speech", url: "https://owl.purdue.edu/owl/general_writing/grammar/parts_of_speech_overview.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "english-s2",
    title: "阶段二：听说能力提升",
    duration: "第 4-6 周",
    goal: "通过精听泛听训练提升听力理解能力，掌握口语表达技巧与日常会话。",
    weeks: [
      {
        id: "english-w4",
        title: "第 4 周：听力训练方法",
        summary: "掌握精听、泛听和影子跟读三大听力训练方法，系统提升听力理解能力。",
        overview: "听力是语言输入的核心通道。本周学习精听与泛听的区别与侧重，掌握影子跟读法（Shadowing），并建立每日听力训练的习惯和材料选择策略。",
        keyPoints: [
          "精听注重逐句理解和细节捕捉，泛听注重整体理解和语感培养",
          "影子跟读法同时训练听力和口语，是提升流利度的高效方法",
          "选择略高于当前水平的材料（i+1 原则）效果最佳",
        ],
        lessons: [
          {
            id: "english-w4-1",
            title: "精听训练法",
            detail: "学习精听的具体操作步骤：盲听→查词→逐句听写→对照原文→复听，建立系统化训练流程。",
            keyPoints: [
              "精听的核心步骤：盲听大意 → 逐句听写 → 对照原文 → 分析错误 → 复听。",
              "选择 2-5 分钟的短音频，语速适中，内容清晰。",
              "重点关注连读、弱读、吞音等导致听不懂的音变现象。",
            ],
            resources: [
              { title: "BBC 6 Minute English", url: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english" },
              { title: "NPR News", url: "https://www.npr.org/podcasts" },
              { title: "Randall's ESL Listening Lab", url: "https://www.esl-lab.com/" },
            ],
          },
          {
            id: "english-w4-2",
            title: "泛听与材料选择",
            detail: "学习泛听的正确方法与材料选择策略，通过大量可理解输入培养英语语感和整体理解能力。",
            keyPoints: [
              "泛听要求理解 70% 以上内容，低于此比例说明材料偏难。",
              "推荐分级材料：ESL Podcast → TED Talks → 英语播客 → 英文影视。",
              "泛听时关注整体意思，不必纠结每个单词。",
            ],
            resources: [
              { title: "TED Talks", url: "https://www.ted.com/talks" },
              { title: "VOA Learning English", url: "https://learningenglish.voanews.com/" },
              { title: "Luke's English Podcast", url: "https://teacherluke.co.uk/" },
            ],
          },
          {
            id: "english-w4-3",
            title: "影子跟读法（Shadowing）",
            detail: "掌握影子跟读法的操作要领，通过同步跟读训练听说联动能力和英语反应速度。",
            keyPoints: [
              "影子跟读：听到内容后延迟 0.5-1 秒跟读，模仿语音语调。",
              "初级阶段可看文本辅助，熟练后过渡到纯听跟读。",
              "每次练习 10-15 分钟，选择语速适中的材料反复跟读。",
            ],
            resources: [
              { title: "FluentU - Shadowing Guide", url: "https://www.fluentu.com/blog/english/shadowing-english/" },
              { title: "Elllo - Listening Activities", url: "https://www.elllo.org/" },
            ],
          },
        ],
      },
      {
        id: "english-w5",
        title: "第 5 周：口语表达技巧",
        summary: "学习语音语调、连读弱读等口语核心技巧，提升英语口语表达的自然度。",
        overview: "口语不仅是「说对」，更要「说自然」。本周重点学习英语的语调模式、重读与弱读规则、连读和缩读等超音段特征，让口语更接近母语者。",
        keyPoints: [
          "英语是重音计时语言，重读词携带核心信息，弱读词快速带过",
          "连读（linking）、弱读（reduction）、缩读（contraction）是口语自然度的关键",
          "语调（intonation）传达态度和情感，升调表疑问、降调表陈述",
        ],
        lessons: [
          {
            id: "english-w5-1",
            title: "语音语调与重音",
            detail: "学习英语的重音规则、语调模式和节奏特点，理解重音计时语言的发音逻辑。",
            keyPoints: [
              "句子重音落在实词（名词/动词/形容词）上，虚词（冠词/介词）通常弱读。",
              "升调用于一般疑问句，降调用于陈述句和特殊疑问句。",
              "英语节奏的核心：重读音节之间的时间间隔大致相等。",
            ],
            resources: [
              { title: "Rachel's English - Intonation", url: "https://rachelsenglish.com/intonation-english/" },
              { title: "Sounds of English - Stress", url: "https://www.bbc.co.uk/learningenglish/english/features/pronunciation/tipssentstr" },
              { title: "English with Lucy", url: "https://www.youtube.com/@EnglishwithLucy" },
            ],
          },
          {
            id: "english-w5-2",
            title: "连读与弱读技巧",
            detail: "掌握英语口语中的连读、弱读、失去爆破等音变规则，理解母语者自然语流的形成机制。",
            keyPoints: [
              "辅元连读：前词尾辅音 + 后词首元音（an apple → a-napple）。",
              "弱读形式：of → /əv/，to → /tə/，and → /ən/，虚词常弱读。",
              "失去爆破：相邻爆破音中前一个只做口型不出声（good boy）。",
            ],
            resources: [
              { title: "Connected Speech - British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/connected-speech" },
              { title: "Pronuncian", url: "https://pronuncian.com/" },
            ],
          },
          {
            id: "english-w5-3",
            title: "日常对话与场景英语",
            detail: "学习常用社交场景（问候、点餐、购物、问路）的表达方式和文化礼仪。",
            keyPoints: [
              "掌握 20 个高频日常场景的核心句型和替换表达。",
              "学会使用 fillers（well, you know, I mean）让对话更自然。",
              "注意文化差异：Small Talk 的重要性、直接/间接表达的选择。",
            ],
            resources: [
              { title: "English Speaking Practice - BBC", url: "https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate" },
              { title: "Real English Conversations", url: "https://realenglishconversations.com/" },
              { title: "italki Community", url: "https://www.italki.com/" },
            ],
          },
        ],
      },
      {
        id: "english-w6",
        title: "第 6 周：语言环境营造",
        summary: "学习沉浸式英语学习方法，打造全方位的英语输入输出环境。",
        overview: "语言环境是学习效率的倍增器。本周学习如何在非英语环境中营造沉浸式学习条件，包括英语角、语言交换、媒体消费习惯调整等策略。",
        keyPoints: [
          "将手机、电脑系统语言切换为英语是最简单的沉浸式起步",
          "语言交换（Language Exchange）可以实现免费的口语练习",
          "每日保证至少 30 分钟的主动英语输出（说/写）",
        ],
        lessons: [
          {
            id: "english-w6-1",
            title: "沉浸式学习环境设计",
            detail: "设计个人化的英语沉浸环境方案，从媒体消费、社交互动到工作学习全面覆盖。",
            keyPoints: [
              "调整媒体习惯：新闻→BBC/CNN、音乐→英文歌、播客→英语频道。",
              "系统语言全面切换为英语，培养英语直觉思维。",
              "建立英语日记/英语思考的习惯，促进内化。",
            ],
            resources: [
              { title: "Immersion Learning Guide", url: "https://www.fluentu.com/blog/english/english-immersion/" },
              { title: "BBC World Service", url: "https://www.bbc.co.uk/worldserviceradio" },
            ],
          },
          {
            id: "english-w6-2",
            title: "语言交换与会话练习",
            detail: "利用语言交换平台找到母语者对练，掌握高效会话练习的方法和话题准备策略。",
            keyPoints: [
              "语言交换：一半时间说英语、一半时间帮对方练中文，互惠互利。",
              "每次练习前准备 3-5 个话题和关键表达，避免冷场。",
              "推荐平台：italki、HelloTalk、Tandem，找固定语伴长期练习。",
            ],
            resources: [
              { title: "HelloTalk", url: "https://www.hellotalk.com/" },
              { title: "Tandem", url: "https://www.tandem.net/" },
              { title: "ConversationExchange", url: "https://www.conversationexchange.com/" },
            ],
          },
          {
            id: "english-w6-3",
            title: "影视与媒体学习法",
            detail: "掌握通过英语影视、播客、新闻等媒体材料学习英语的科学方法和材料推荐。",
            keyPoints: [
              "影视学习三遍法：中文字幕看剧情→英文字幕学表达→无字幕练听力。",
              "选择贴近日常生活的题材（如 Friends、Modern Family）学口语。",
              "利用 Language Reactor 等工具实现双语字幕和生词标注。",
            ],
            resources: [
              { title: "Language Reactor", url: "https://www.languagereactor.com/" },
              { title: "Coursera - English for Media", url: "https://www.coursera.org/learn/media" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "english-s3",
    title: "阶段三：读写能力进阶",
    duration: "第 7-9 周",
    goal: "掌握阅读策略和写作方法，培养英文思维，提升学术和商务读写能力。",
    weeks: [
      {
        id: "english-w7",
        title: "第 7 周：阅读策略",
        summary: "掌握精读、泛读和 SQ3R 等阅读方法，系统提升英语阅读理解能力和速度。",
        overview: "阅读是最重要的语言输入方式。本周学习精读与泛读的区别和侧重，掌握 SQ3R（Survey-Question-Read-Recite-Review）系统阅读法，并建立分级阅读计划。",
        keyPoints: [
          "精读注重语言细节和深度理解，泛读注重阅读量和整体理解",
          "SQ3R 五步法让阅读更有目的性和系统性",
          "选择适合自己水平的分级读物（Graded Readers）逐步提升",
        ],
        lessons: [
          {
            id: "english-w7-1",
            title: "精读与泛读策略",
            detail: "理解精读与泛读的不同目标和操作方法，学会根据学习目的选择合适的阅读策略。",
            keyPoints: [
              "精读：逐句分析语法结构和词汇用法，每篇控制在 500-800 词。",
              "泛读：追求阅读量和流畅度，生词密度不超过 2-3%。",
              "精泛结合：每周精读 2-3 篇 + 泛读 5000-10000 词为最佳比例。",
            ],
            resources: [
              { title: "Extensive Reading Foundation", url: "https://erfoundation.org/" },
              { title: "News in Levels", url: "https://www.newsinlevels.com/" },
              { title: "Breaking News English", url: "https://breakingnewsenglish.com/" },
            ],
          },
          {
            id: "english-w7-2",
            title: "SQ3R 系统阅读法",
            detail: "掌握 SQ3R（Survey-Question-Read-Recite-Review）五步阅读法的具体操作和应用场景。",
            keyPoints: [
              "Survey：快速浏览标题、段首句、图表，形成整体印象。",
              "Question + Read：带着问题阅读，主动寻找答案，提升注意力。",
              "Recite + Review：合上材料复述要点，定期回顾巩固记忆。",
            ],
            resources: [
              { title: "Cornell University - SQ3R", url: "https://lsc.cornell.edu/how-to-study/reading-textbooks/sq3r-improving-reading-comprehension/" },
              { title: "ReadTheory - Reading Practice", url: "https://readtheory.org/" },
            ],
          },
          {
            id: "english-w7-3",
            title: "阅读材料选择与分级体系",
            detail: "了解英语阅读分级体系（Lexile、CEFR），学会选择适合自己水平的英语阅读材料。",
            keyPoints: [
              "CEFR 分级：A1-A2 基础 → B1-B2 中级 → C1-C2 高级。",
              "Lexile 值帮助精确匹配阅读水平和材料难度。",
              "从分级读物逐步过渡到英文原版书籍和专业文章。",
            ],
            resources: [
              { title: "Lexile Framework", url: "https://lexile.com/" },
              { title: "Project Gutenberg - Free eBooks", url: "https://www.gutenberg.org/" },
              { title: "Newsela - Leveled News", url: "https://newsela.com/" },
            ],
          },
        ],
      },
      {
        id: "english-w8",
        title: "第 8 周：写作基础",
        summary: "学习英语段落写作和论文结构，掌握论点展开和逻辑组织方法。",
        overview: "写作是语言输出的高级形式。本周从段落写作入手，学习主题句-支撑句-结尾句的三层结构，掌握常见的论点展开方式，为学术和商务写作打基础。",
        keyPoints: [
          "段落三层结构：Topic Sentence → Supporting Sentences → Concluding Sentence",
          "论点展开常用方法：举例、对比、因果、定义、引用数据",
          "写作流程：Brainstorm → Outline → Draft → Revise → Edit",
        ],
        lessons: [
          {
            id: "english-w8-1",
            title: "段落写作基础",
            detail: "学习英语段落的标准结构，掌握主题句的写法和支撑句的展开技巧。",
            keyPoints: [
              "主题句（Topic Sentence）应放在段首，明确表达段落核心观点。",
              "支撑句通过举例、解释、数据等方式证明主题句。",
              "段落内容应保持统一性（Unity）和连贯性（Coherence）。",
            ],
            resources: [
              { title: "Purdue OWL - Paragraphs", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/paragraphs_and_paragraphing/" },
              { title: "Grammarly - Writing Tips", url: "https://www.grammarly.com/blog/writing-tips/" },
            ],
          },
          {
            id: "english-w8-2",
            title: "论点展开与逻辑组织",
            detail: "掌握英语写作中常用的论点展开方式和逻辑连接词，让文章论证有力、结构清晰。",
            keyPoints: [
              "六大展开法：例证、对比、因果、类比、定义、数据引用。",
              "逻辑连接词分类：顺序（firstly）、补充（moreover）、转折（however）、总结（in conclusion）。",
              "每个论点遵循 PEEL 结构：Point → Evidence → Explain → Link。",
            ],
            resources: [
              { title: "Writing Center - Transitions", url: "https://writingcenter.unc.edu/tips-and-tools/transitions/" },
              { title: "BBC Bitesize - Writing", url: "https://www.bbc.co.uk/bitesize/subjects/z3kw2hv" },
              { title: "Write & Improve by Cambridge", url: "https://writeandimprove.com/" },
            ],
          },
          {
            id: "english-w8-3",
            title: "常见写作错误与修改技巧",
            detail: "识别中国学习者在英语写作中的常见错误类型，学习自我修改和润色文章的方法。",
            keyPoints: [
              "常见语法错误：主谓不一致、冠词误用、时态混乱、中式英语。",
              "修改顺序：先改内容和逻辑 → 再改语法和拼写 → 最后润色风格。",
              "利用 Grammarly/ProWritingAid 辅助检查，但不盲目依赖工具。",
            ],
            resources: [
              { title: "Grammarly", url: "https://www.grammarly.com/" },
              { title: "ProWritingAid", url: "https://prowritingaid.com/" },
            ],
          },
        ],
      },
      {
        id: "english-w9",
        title: "第 9 周：学术写作与英文思维",
        summary: "学习学术写作和商务写作的规范，培养直接用英文思考和表达的能力。",
        overview: "高阶写作需要学术规范和英文思维的双重支撑。本周学习学术论文和商务邮件的写作格式，并通过思维训练从「中文思考→翻译成英文」过渡到「直接用英文构思」。",
        keyPoints: [
          "学术写作要求客观、精确、有据，遵循特定的格式和引用规范",
          "商务写作追求简洁、清晰、专业，注重行动导向",
          "英文思维的培养需要持续的英语思考练习和文化理解",
        ],
        lessons: [
          {
            id: "english-w9-1",
            title: "学术写作入门",
            detail: "学习学术论文的基本结构（IMRaD）、引用格式（APA/MLA）和学术用语规范。",
            keyPoints: [
              "IMRaD 结构：Introduction → Methods → Results → Discussion。",
              "学术语言特点：正式用语、被动语态较多、避免第一人称和口语化表达。",
              "引用规范：APA 用于社科/理工、MLA 用于人文，避免抄袭。",
            ],
            resources: [
              { title: "Purdue OWL - Academic Writing", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/" },
              { title: "Academic Phrasebank", url: "https://www.phrasebank.manchester.ac.uk/" },
              { title: "Coursera - Academic English Writing", url: "https://www.coursera.org/specializations/academic-english" },
            ],
          },
          {
            id: "english-w9-2",
            title: "商务写作与邮件沟通",
            detail: "掌握商务邮件、报告和提案的写作格式和专业表达，提升职场英语书面沟通能力。",
            keyPoints: [
              "商务邮件三要素：清晰的主题行、简洁的正文、明确的行动请求。",
              "使用专业但不过分正式的语气，避免冗长和模糊表达。",
              "常用句型：I am writing to...、Please find attached...、I look forward to...。",
            ],
            resources: [
              { title: "Business English - British Council", url: "https://learnenglish.britishcouncil.org/business-english" },
              { title: "Harvard Business Review", url: "https://hbr.org/" },
            ],
          },
          {
            id: "english-w9-3",
            title: "英文思维培养",
            detail: "通过思维导图、英英释义和英语内心独白等方法，逐步实现从翻译思维到英文直觉思维的转变。",
            keyPoints: [
              "用英英词典替代英汉词典，用英语解释英语概念。",
              "练习英语思维导图：用英语进行头脑风暴和逻辑组织。",
              "每日 5 分钟「英语内心独白」：用英语描述所见所想。",
            ],
            resources: [
              { title: "Merriam-Webster Dictionary", url: "https://www.merriam-webster.com/" },
              { title: "Longman Dictionary (LDOCE)", url: "https://www.ldoceonline.com/" },
              { title: "Coursera - Think in English", url: "https://www.coursera.org/learn/tricky-american-english-pronunciation" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "english-s4",
    title: "阶段四：高级应用",
    duration: "第 10-12 周",
    goal: "掌握演讲与公开表达技巧，了解英语考试策略，培养跨文化沟通能力和终身学习方法论。",
    weeks: [
      {
        id: "english-w10",
        title: "第 10 周：演讲与公开表达",
        summary: "学习英语公开演讲的准备方法、表达技巧和克服紧张的策略。",
        overview: "英语演讲是综合能力的集中体现。本周学习演讲结构设计、肢体语言运用和即兴表达技巧，通过 TED 风格演讲训练提升公开表达的信心和影响力。",
        keyPoints: [
          "好的演讲遵循「开头抓注意力→中间三点展开→结尾回扣主题」的结构",
          "肢体语言和声音变化比内容本身更影响演讲效果",
          "反复练习和录像回放是提升演讲能力的最有效方法",
        ],
        lessons: [
          {
            id: "english-w10-1",
            title: "演讲结构与内容设计",
            detail: "学习英语演讲的经典结构（三段式、问题-解决方案式），掌握故事化表达和数据可视化技巧。",
            keyPoints: [
              "黄金圈法则：先说 Why → 再说 How → 最后说 What。",
              "「Hook → Story → Point」结构让演讲更有吸引力。",
              "Rule of Three：核心观点控制在三个，便于记忆和理解。",
            ],
            resources: [
              { title: "TED Talks - Public Speaking", url: "https://www.ted.com/topics/public+speaking" },
              { title: "Toastmasters International", url: "https://www.toastmasters.org/" },
              { title: "Coursera - Public Speaking", url: "https://www.coursera.org/learn/public-speaking" },
            ],
          },
          {
            id: "english-w10-2",
            title: "肢体语言与声音技巧",
            detail: "掌握演讲中的非语言沟通技巧，包括眼神交流、手势运用、声音节奏和停顿的使用。",
            keyPoints: [
              "眼神交流：每次注视一个区域 3-5 秒，覆盖全场。",
              "声音技巧：语速变化制造节奏，关键处降速 + 停顿突出重点。",
              "手势区域保持在腰部到肩部之间，开放式手势增强说服力。",
            ],
            resources: [
              { title: "Amy Cuddy - Body Language TED Talk", url: "https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are" },
              { title: "Presentation Skills - Coursera", url: "https://www.coursera.org/learn/presentation-skills" },
            ],
          },
          {
            id: "english-w10-3",
            title: "即兴表达与Q&A应对",
            detail: "训练英语即兴表达能力，学习应对问答环节和突发情况的策略和常用句型。",
            keyPoints: [
              "PREP 框架快速组织即兴表达：Point → Reason → Example → Point。",
              "Q&A 应对：先肯定问题价值 → 简要回答 → 提供延伸。",
              "遇到不会回答的问题：诚实承认 + 承诺后续跟进。",
            ],
            resources: [
              { title: "Impromptu Speaking - Toastmasters", url: "https://www.toastmasters.org/resources/table-topics" },
              { title: "English Speaking Course - Coursera", url: "https://www.coursera.org/learn/speak-english-professionally" },
            ],
          },
        ],
      },
      {
        id: "english-w11",
        title: "第 11 周：英语考试策略",
        summary: "针对雅思、托福、GRE 等主流英语考试，掌握各科目的应试策略和备考方法。",
        overview: "英语考试是检验学习成果和实现目标（留学/移民/求职）的重要途径。本周分析雅思、托福和 GRE 的考试特点和评分标准，掌握各科目的高效备考策略。",
        keyPoints: [
          "雅思偏英式英语和生活场景，托福偏美式英语和学术场景",
          "每种考试都有独特的评分标准和题型，需要针对性练习",
          "模拟考试 + 错题分析是备考效率最高的方法",
        ],
        lessons: [
          {
            id: "english-w11-1",
            title: "雅思（IELTS）备考策略",
            detail: "分析雅思考试四科（听说读写）的评分标准和高频题型，制定科学的备考计划。",
            keyPoints: [
              "雅思写作评分四维度：Task Achievement、Coherence、Lexical Resource、Grammar。",
              "听力注意审题和预测答案，阅读掌握定位词和同义替换技巧。",
              "口语 Part 2 使用思维导图准备话题卡，Part 3 展示深度思考能力。",
            ],
            resources: [
              { title: "IELTS Official - Practice Tests", url: "https://www.ielts.org/for-test-takers/sample-test-questions" },
              { title: "Cambridge IELTS Books", url: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/ielts-practice-tests" },
              { title: "IELTS Liz", url: "https://ieltsliz.com/" },
            ],
          },
          {
            id: "english-w11-2",
            title: "托福（TOEFL）备考策略",
            detail: "分析托福 iBT 的考试形式和评分标准，掌握综合写作和综合口语的应对技巧。",
            keyPoints: [
              "托福综合题（Integrated Tasks）需要结合听力和阅读内容作答。",
              "阅读长文用结构化笔记法，关注段落主旨和论证关系。",
              "口语评分关注流利度和逻辑性，不追求完美发音。",
            ],
            resources: [
              { title: "ETS TOEFL - Official Practice", url: "https://www.ets.org/toefl/test-takers/ibt/prepare.html" },
              { title: "TOEFL Resources", url: "https://www.toeflresources.com/" },
            ],
          },
          {
            id: "english-w11-3",
            title: "GRE 与高阶英语考试",
            detail: "了解 GRE Verbal 和 Analytical Writing 的考查重点，学习高阶词汇和逻辑推理的训练方法。",
            keyPoints: [
              "GRE Verbal 考查学术词汇和逻辑推理，核心是 3000 个高频词。",
              "Text Completion 和 Sentence Equivalence 重视语境逻辑推断。",
              "Analytical Writing 需要展示批判性思维，不仅是语言能力。",
            ],
            resources: [
              { title: "ETS GRE - Preparation", url: "https://www.ets.org/gre/test-takers/general-test/prepare.html" },
              { title: "Magoosh GRE Blog", url: "https://magoosh.com/gre/" },
              { title: "Manhattan Prep GRE", url: "https://www.manhattanprep.com/gre/" },
            ],
          },
        ],
      },
      {
        id: "english-w12",
        title: "第 12 周：跨文化沟通与终身学习",
        summary: "培养跨文化沟通意识，建立英语终身学习方法论和可持续的学习体系。",
        overview: "语言学习没有终点。本周探讨跨文化沟通的核心能力和常见误区，建立适合自己的终身英语学习体系，从「学英语」过渡到「用英语学习」。",
        keyPoints: [
          "跨文化沟通不仅是语言能力，更需要文化敏感度和适应力",
          "从「学英语」到「用英语」的转变是终身学习的关键里程碑",
          "建立个人化的学习体系和反馈循环，实现持续进步",
        ],
        lessons: [
          {
            id: "english-w12-1",
            title: "跨文化沟通核心能力",
            detail: "理解文化维度理论（Hofstede），学习在不同文化背景下有效沟通的策略和礼仪。",
            keyPoints: [
              "Hofstede 六大文化维度：权力距离、个人/集体主义、不确定性规避等。",
              "高语境 vs 低语境文化：中文偏高语境（含蓄），英语偏低语境（直接）。",
              "跨文化沟通原则：尊重差异 → 主动确认理解 → 避免刻板印象。",
            ],
            resources: [
              { title: "Hofstede Insights", url: "https://www.hofstede-insights.com/" },
              { title: "Coursera - Intercultural Communication", url: "https://www.coursera.org/learn/intercultural-communication" },
              { title: "Culture Crossing Guide", url: "https://www.commisceo-global.com/resources/country-guides" },
            ],
          },
          {
            id: "english-w12-2",
            title: "英语终身学习方法论",
            detail: "建立个人化的英语学习体系，掌握从「学英语」到「用英语学习」的过渡策略和习惯养成方法。",
            keyPoints: [
              "用英语作为工具学习其他领域知识，实现「以用促学」。",
              "建立学习反馈循环：输入 → 吸收 → 输出 → 反馈 → 调整。",
              "利用 SMART 目标设定法制定阶段性英语学习计划。",
            ],
            resources: [
              { title: "Coursera - Learning How to Learn", url: "https://www.coursera.org/learn/learning-how-to-learn" },
              { title: "Khan Academy", url: "https://www.khanacademy.org/" },
            ],
          },
          {
            id: "english-w12-3",
            title: "个人学习体系构建",
            detail: "设计包含目标设定、资源管理、进度追踪和定期复盘的完整个人英语学习系统。",
            keyPoints: [
              "构建个人知识管理系统（PKM）：Notion/Obsidian 记录学习笔记。",
              "设计周/月复盘模板，追踪词汇量、阅读量、口语练习时长。",
              "加入英语学习社区（Reddit r/EnglishLearning、Discord 频道）获取持续动力。",
            ],
            resources: [
              { title: "Reddit - English Learning", url: "https://www.reddit.com/r/EnglishLearning/" },
              { title: "Notion Templates", url: "https://www.notion.so/templates" },
              { title: "Polyglot Gathering", url: "https://www.polyglotconference.com/" },
            ],
          },
        ],
      },
    ],
  },
]

export const englishKnowledgeCards: KnowledgeCard[] = [
  {
    id: "english-card-pronunciation",
    title: "发音训练体系",
    summary: "准确的发音是听说能力的基础，需要系统训练音素、重音和语调。",
    points: [
      "44 个音素是英语发音的最小单位，通过最小对立体（minimal pairs）训练区分。",
      "重音节奏决定了英语的「韵律感」，实词重读、虚词弱读。",
      "每日 10-15 分钟的跟读练习比长时间突击更有效。",
    ],
    practice: "用 Forvo 听取 10 个易混淆最小对立体（如 ship/sheep），录音对比并纠正发音。",
  },
  {
    id: "english-card-vocabulary",
    title: "词汇习得策略",
    summary: "高效词汇记忆需要结合词根分析、语境学习和间隔重复三种方法。",
    points: [
      "词根词缀法适合快速扩展学术词汇，50 个核心词根可覆盖上万单词。",
      "搭配学习（Collocations）比孤立背词更能提升真实表达能力。",
      "Anki 间隔重复每日 15-20 个新词 + 复习旧词，贵在坚持。",
    ],
    practice: "创建一副 Anki 卡片组，用词根词缀法拆解 30 个学术高频词并配上例句。",
  },
  {
    id: "english-card-listening",
    title: "听力突破方法",
    summary: "听力提升需要精听和泛听结合，影子跟读法是同时训练听说的利器。",
    points: [
      "精听要求逐句听写并分析错误原因（词汇/语音/语法）。",
      "泛听选择理解度 70% 以上的材料，逐步提升难度。",
      "影子跟读法延迟 0.5 秒跟读，同时训练听力反应和口语流利度。",
    ],
    practice: "选择一段 3 分钟的 BBC 新闻进行精听听写，分析所有错误并归类原因。",
  },
  {
    id: "english-card-speaking",
    title: "口语提升路径",
    summary: "口语流利度的关键是大量练习 + 模仿 + 实战，而非完美语法。",
    points: [
      "流利度 > 准确度：先说出来，再逐步纠错，不要因怕犯错而沉默。",
      "模仿母语者的语音语调、节奏停顿，而非逐字翻译中文。",
      "找固定语伴或加入英语角，每周保证 2-3 次实战对话练习。",
    ],
    practice: "在 italki 上预约一次 30 分钟的会话课，记录 5 个表达不清的地方并课后改进。",
  },
  {
    id: "english-card-reading",
    title: "阅读能力进阶",
    summary: "阅读是词汇和语法的最佳输入途径，精泛结合效果最佳。",
    points: [
      "精读提升语言细节感知力，泛读扩大词汇量和培养语感。",
      "选择 i+1 难度的材料（生词密度 2-3%）实现高效输入。",
      "SQ3R 方法让阅读更有目的性：先扫视结构，再带问题精读。",
    ],
    practice: "使用 News in Levels 阅读同一新闻的三个难度版本，对比词汇和句式差异。",
  },
  {
    id: "english-card-writing",
    title: "写作核心技能",
    summary: "英语写作的核心是清晰的逻辑和准确的表达，而非华丽的辞藻。",
    points: [
      "段落结构：Topic Sentence 开门见山，Supporting Details 有据有理。",
      "PEEL 框架（Point-Evidence-Explain-Link）确保论证完整。",
      "修改比初稿更重要：内容 → 逻辑 → 语法 → 润色分层修改。",
    ],
    practice: "用 PEEL 框架写一个 150 词的论说段落，然后用 Grammarly 检查并修改。",
  },
  {
    id: "english-card-exam",
    title: "考试备考方法",
    summary: "英语考试需要针对性策略，了解评分标准比盲目刷题更重要。",
    points: [
      "先研究评分标准（如雅思写作四维度），再针对性练习薄弱项。",
      "模拟考试要严格计时，建立时间管理意识。",
      "错题分析比题海战术更高效：分类错因，集中突破。",
    ],
    practice: "完成一套雅思/托福模拟阅读，按错因分类（词汇/定位/推断），制定改进计划。",
  },
  {
    id: "english-card-culture",
    title: "跨文化沟通力",
    summary: "语言背后是文化，真正的英语能力包含跨文化理解和适应。",
    points: [
      "高/低语境文化差异决定了沟通方式：英语文化偏直接表达。",
      "Small Talk 在英语文化中是建立关系的重要环节，不可忽视。",
      "跨文化沟通核心：保持开放心态 → 主动确认理解 → 灵活调整表达。",
    ],
    practice: "观看一个 TED Talk 关于跨文化沟通的演讲，总结三个可应用到工作中的要点。",
  },
]

export const englishExamQuestions: QuizQuestion[] = [
  { id: "english-q1", question: "英语中共有多少个音素（phonemes）？", options: ["26 个", "36 个", "44 个", "52 个"], answer: 2, rationale: "英语共有 44 个音素，包括 20 个元音和 24 个辅音，远多于 26 个字母。" },
  { id: "english-q2", question: "自然拼读法（Phonics）中 Magic E 规则的作用是？", options: ["使前面的辅音不发音", "使前面的元音发字母本身的音", "使单词变成过去式", "表示复数形式"], answer: 1, rationale: "Magic E 规则：末尾的不发音 e 使前面的元音发其字母本身的音，如 make 中 a 发 /eɪ/。" },
  { id: "english-q3", question: "间隔重复法（SRS）的理论基础是？", options: ["巴甫洛夫条件反射", "艾宾浩斯遗忘曲线", "马斯洛需求层次", "布鲁姆教育目标分类"], answer: 1, rationale: "SRS 基于艾宾浩斯遗忘曲线，在记忆即将衰退时安排复习，实现高效长期记忆。" },
  { id: "english-q4", question: "以下哪个是正确的英语搭配（Collocation）？", options: ["do a decision", "make a decision", "take a decision（美式）", "have a decision"], answer: 1, rationale: "make a decision 是最标准的搭配。虽然 take a decision 在英式英语中偶尔使用，但 make 是全球通用的搭配。" },
  { id: "english-q5", question: "影子跟读法（Shadowing）的正确做法是？", options: ["看着文本同步朗读", "听完整段后复述", "听到内容后延迟 0.5-1 秒跟读", "只默读不出声"], answer: 2, rationale: "影子跟读法要求在听到内容后延迟约 0.5-1 秒跟读，模仿语音语调，同时训练听力和口语。" },
  { id: "english-q6", question: "英语是什么类型的节奏语言？", options: ["音节计时语言", "重音计时语言", "声调语言", "等时语言"], answer: 1, rationale: "英语是重音计时语言（stress-timed），重读音节之间的时间间隔大致相等，弱读音节被压缩。" },
  { id: "english-q7", question: "泛读时材料的生词密度建议控制在？", options: ["0%", "2-3%", "10-15%", "20% 以上"], answer: 1, rationale: "泛读材料的生词密度建议控制在 2-3%，确保 70% 以上的理解度，既能推进阅读又能习得新词。" },
  { id: "english-q8", question: "SQ3R 阅读法中的五个步骤是？", options: ["Search-Query-Read-Repeat-Review", "Survey-Question-Read-Recite-Review", "Scan-Question-Read-Reflect-Redo", "Study-Quiz-Read-Recall-Rewrite"], answer: 1, rationale: "SQ3R 代表 Survey（浏览）→ Question（提问）→ Read（阅读）→ Recite（复述）→ Review（回顾）。" },
  { id: "english-q9", question: "英语段落写作中 Topic Sentence 应放在什么位置？", options: ["段落末尾", "段落中间", "段落开头", "任意位置"], answer: 2, rationale: "英语写作中 Topic Sentence 通常放在段落开头，开门见山地表达核心观点，方便读者抓住要点。" },
  { id: "english-q10", question: "PEEL 写作框架的四个要素是？", options: ["Plan-Edit-Evaluate-Learn", "Point-Evidence-Explain-Link", "Prepare-Execute-Examine-List", "Purpose-Example-Effect-Logic"], answer: 1, rationale: "PEEL 代表 Point（论点）→ Evidence（证据）→ Explain（解释）→ Link（连接），确保论证完整。" },
  { id: "english-q11", question: "雅思写作的四个评分维度不包括？", options: ["Task Achievement", "Lexical Resource", "Pronunciation", "Grammatical Range and Accuracy"], answer: 2, rationale: "雅思写作评分四维度是 Task Achievement、Coherence and Cohesion、Lexical Resource、Grammatical Range and Accuracy，不包括 Pronunciation（发音是口语评分维度）。" },
  { id: "english-q12", question: "托福 iBT 综合写作（Integrated Writing）的特点是？", options: ["只根据提示写观点", "需要结合阅读和听力内容作答", "口头回答写作问题", "只写单词和短语"], answer: 1, rationale: "托福综合写作要求考生先阅读一篇文章，再听一段讲座，然后结合两者内容写出回应。" },
  { id: "english-q13", question: "Hofstede 文化维度理论中，中文文化通常被归类为？", options: ["低语境文化", "高语境文化", "无语境文化", "中等语境文化"], answer: 1, rationale: "中文文化属于高语境文化（High-context），沟通中大量信息隐含在语境中，而非直接表达。" },
  { id: "english-q14", question: "词根 spect 的含义是？", options: ["说", "看", "走", "写"], answer: 1, rationale: "词根 spect 意为「看」，如 inspect（检查=往里看）、spectator（观众）、prospect（展望=向前看）。" },
  { id: "english-q15", question: "连读规则中「辅元连读」指的是？", options: ["两个元音连读", "辅音结尾 + 元音开头的连读", "两个辅音连读", "元音结尾 + 辅音开头的连读"], answer: 1, rationale: "辅元连读：前词以辅音结尾 + 后词以元音开头时自然连读，如 an apple 读作 /ə-næpəl/。" },
  { id: "english-q16", question: "Krashen 的输入假说（Input Hypothesis）中 i+1 表示？", options: ["比当前水平低一级的输入", "比当前水平高一级的输入", "与当前水平相同的输入", "最高难度的输入"], answer: 1, rationale: "i+1 表示比学习者当前水平（i）略高一点的输入材料，这是最有效的语言习得输入。" },
  { id: "english-q17", question: "IMRaD 学术论文结构中 M 代表？", options: ["Motivation", "Methods", "Materials", "Meaning"], answer: 1, rationale: "IMRaD 代表 Introduction（引言）→ Methods（方法）→ Results（结果）→ Discussion（讨论）。" },
  { id: "english-q18", question: "GRE Verbal 主要考查的能力是？", options: ["日常口语交流", "学术词汇和逻辑推理", "听力理解", "语法改错"], answer: 1, rationale: "GRE Verbal 主要考查学术词汇和逻辑推理能力，包括 Text Completion、Sentence Equivalence 和 Reading Comprehension。" },
  { id: "english-q19", question: "以下哪种方法最有助于培养英文思维？", options: ["使用英汉词典查词", "用中文思考后翻译成英文", "使用英英词典理解词义", "背诵中英对照文章"], answer: 2, rationale: "使用英英词典直接用英语理解英语概念，跳过中文翻译环节，是培养英文思维的核心方法。" },
  { id: "english-q20", question: "TED 演讲中 Rule of Three 原则是指？", options: ["每次演讲时长 3 分钟", "核心观点控制在三个", "每段只说三个句子", "准备三个不同版本"], answer: 1, rationale: "Rule of Three：人类短期记忆最擅长处理三个要点，核心观点控制在三个便于听众记忆和理解。" },
]

export const englishRoadmap: RoadmapDefinition = {
  id: "english" as RoadmapDefinition["id"],
  label: "英语学习",
  title: "英语学习路线",
  durationLabel: "12 周·36 课时",
  description: "从语音词汇基础到高级应用，系统掌握听说读写四大核心技能，培养英文思维和跨文化沟通能力，建立终身英语学习体系。",
  heroBadge: "语音词汇 · 听说读写 · 考试策略 · 跨文化沟通",
  stages: englishStages,
  knowledgeCards: englishKnowledgeCards,
  examQuestions: englishExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始英语学习之旅，先从音标和发音规则打好语音基础。"
    if (percent < 25) return "继续巩固词汇记忆方法和基础语法，为听说读写打基础。"
    if (percent < 50) return "进入听说训练阶段，通过精听泛听和口语练习提升交流能力。"
    if (percent < 75) return "深入阅读写作进阶，培养英文思维和学术表达能力。"
    if (percent < 100) return "冲刺高级应用，掌握演讲技巧、考试策略和跨文化沟通。"
    return "恭喜完成！你已建立完整的英语学习体系，继续用英语探索世界！"
  },
  resourceGuide: {
    environment: "准备英英词典（Merriam-Webster/Cambridge）、Anki 间隔重复软件、英语播客订阅和语言交换伙伴。",
    fallbackKeyPoints: [
      "发音是基础：掌握 44 个音素和自然拼读规则",
      "词汇积累需要科学方法：词根词缀 + 语境记忆 + 间隔重复",
      "听说训练要精泛结合：精听练细节，泛听练语感，影子跟读练流利度",
      "读写能力靠大量练习：每周精读 + 泛读 + 段落写作",
      "英文思维是终极目标：从翻译思维过渡到直接用英文思考",
    ],
    handsOnSteps: [
      "用 IPA 音标标注 20 个常见易错单词并录音对比",
      "创建 Anki 词汇卡片组，每日学习 15 个新词并复习",
      "完成一周精听训练（每天一段 BBC 6 Minute English）",
      "在 italki/HelloTalk 上完成一次 30 分钟英语对话",
      "用 PEEL 框架写一篇 200 词英语论说段落",
    ],
    selfChecks: [
      "能否准确读出 44 个英语音素并区分易混淆音？",
      "是否掌握了词根词缀分析法和间隔重复的使用？",
      "能否在精听中捕捉到连读、弱读和吞音现象？",
      "是否能用英语进行 5 分钟以上的自由对话？",
      "写作中是否能使用逻辑连接词组织段落结构？",
    ],
    extensions: [
      "参加当地 Toastmasters 英语演讲俱乐部",
      "挑战英文原版书阅读（从 Graded Readers 开始）",
      "用英语写技术博客或学习笔记",
      "报名参加雅思/托福模拟考试检验学习成果",
    ],
    lessonQuizAdvice: "每周完成课时后做测验，重点理解语言学习的科学方法和策略选择，而非死记硬背语法规则。",
  },
}
