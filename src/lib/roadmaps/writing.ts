import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const writingStages: Stage[] = [
  {
    id: "writing-s1",
    title: "阶段一：写作基础",
    duration: "第 1-3 周",
    goal: "理解写作的本质与目的，培养观察力和素材积累习惯，掌握段落结构与遣词造句的基本功。",
    weeks: [
      {
        id: "writing-w1",
        title: "第 1 周：写作的本质与观察力",
        summary: "理解写作作为思考工具的本质，培养敏锐的观察力与素材积累方法。",
        overview: "写作不只是文字输出，更是思考的外化过程。本周从写作的底层逻辑出发，学习如何观察世界、捕捉细节、建立属于自己的素材库。",
        keyPoints: [
          "写作是思考的延伸——先想清楚，才能写清楚",
          "观察力训练：从日常生活中捕捉有价值的细节和故事",
          "素材积累需要系统化方法：笔记、剪藏、分类与定期回顾",
        ],
        lessons: [
          {
            id: "writing-w1-1",
            title: "写作的本质与目的",
            detail: "理解写作作为思考工具的核心价值，区分表达驱动与目标驱动的写作方式。",
            keyPoints: [
              "写作是将模糊想法转化为清晰表达的过程，先于沟通而存在。",
              "目标驱动写作：明确读者是谁、他们需要什么、你希望达到什么效果。",
              "写作的三个层次：记录（备忘）、表达（传达）、影响（改变）。",
            ],
            resources: [
              { title: "哈佛写作中心：写作策略", url: "https://writingcenter.fas.harvard.edu/writing-process" },
              { title: "Purdue OWL：写作过程", url: "https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html" },
              { title: "写作的力量 — The Writing Center", url: "https://writingcenter.unc.edu/tips-and-tools/getting-started-with-an-essay/" },
            ],
          },
          {
            id: "writing-w1-2",
            title: "观察与素材积累",
            detail: "掌握系统化的观察方法和素材管理工具，建立个人写作素材库。",
            keyPoints: [
              "五感观察法：用视觉、听觉、触觉、嗅觉、味觉捕捉场景细节。",
              "素材分类体系：按主题、情感、场景等维度组织素材笔记。",
              "工具推荐：Notion、Obsidian 或纸质笔记本建立个人知识库。",
            ],
            resources: [
              { title: "Zettelkasten 笔记法", url: "https://zettelkasten.de/introduction/" },
              { title: "How to Take Smart Notes", url: "https://www.soenkeahrens.de/en/takesmartnotes" },
            ],
          },
          {
            id: "writing-w1-3",
            title: "自由写作与写作习惯",
            detail: "通过自由写作练习克服写作障碍，建立可持续的日常写作习惯。",
            keyPoints: [
              "自由写作：设定时间（10-15分钟）不停笔地写，不纠结质量。",
              "晨间写作法：每天固定时间写作，将写作融入日常节奏。",
              "克服完美主义：先完成再完善，初稿的目的是把想法落地。",
            ],
            resources: [
              { title: "The Artist's Way — Morning Pages", url: "https://juliacameronlive.com/basic-tools/morning-pages/" },
              { title: "Purdue OWL：克服写作障碍", url: "https://owl.purdue.edu/owl/general_writing/the_writing_process/writers_block/index.html" },
            ],
          },
        ],
      },
      {
        id: "writing-w2",
        title: "第 2 周：段落结构与逻辑",
        summary: "掌握段落的基本结构、主题句的运用以及段落间的逻辑衔接。",
        overview: "段落是文章的基本构建单元。本周学习如何写出结构清晰、逻辑连贯的段落，掌握主题句、展开句和过渡句的写作技巧。",
        keyPoints: [
          "每个段落围绕一个核心观点展开，主题句统领全段",
          "段落内部用证据、例子、解释支撑主题句",
          "段落间用过渡词和逻辑连接词实现流畅衔接",
        ],
        lessons: [
          {
            id: "writing-w2-1",
            title: "主题句与段落结构",
            detail: "学习主题句的写法与段落的「总-分-总」结构，让每个段落论点明确、层次清晰。",
            keyPoints: [
              "主题句放在段落开头，概括本段核心观点。",
              "支撑句用事实、数据、例子、引用来证明主题句。",
              "收束句总结或过渡，为下一段做铺垫。",
            ],
            resources: [
              { title: "Purdue OWL：段落写作", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/paragraphs_and_paragraphing/index.html" },
              { title: "哈佛写作中心：段落结构", url: "https://writingcenter.fas.harvard.edu/paragraphs" },
            ],
          },
          {
            id: "writing-w2-2",
            title: "逻辑连贯与过渡",
            detail: "掌握段落间和句子间的逻辑衔接技巧，使文章形成有机整体。",
            keyPoints: [
              "逻辑连接词：因果（因此/所以）、转折（然而/但是）、递进（此外/更重要的是）。",
              "重复关键词法：在段落衔接处复现核心概念保持连贯。",
              "平行结构：用对称的句式增强节奏感和可读性。",
            ],
            resources: [
              { title: "Purdue OWL：过渡与衔接", url: "https://owl.purdue.edu/owl/general_writing/mechanics/transitions_and_transitional_devices/index.html" },
              { title: "UNC Writing Center：过渡技巧", url: "https://writingcenter.unc.edu/tips-and-tools/transitions/" },
              { title: "Grammarly：过渡词指南", url: "https://www.grammarly.com/blog/writing-tips/transitional-words/" },
            ],
          },
          {
            id: "writing-w2-3",
            title: "常见逻辑谬误与避免",
            detail: "识别写作中常见的逻辑错误，学会用严谨的推理支撑论点。",
            keyPoints: [
              "滑坡谬误：不合理地将事件链条延伸到极端结论。",
              "稻草人谬误：歪曲对方观点后再反驳，而非回应原始论点。",
              "诉诸权威/情感：用权威或情绪替代证据和逻辑。",
            ],
            resources: [
              { title: "Purdue OWL：逻辑谬误", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/logic_in_argumentative_writing/fallacies.html" },
              { title: "Your Logical Fallacy Is", url: "https://yourlogicalfallacyis.com/" },
            ],
          },
        ],
      },
      {
        id: "writing-w3",
        title: "第 3 周：遣词造句与语感培养",
        summary: "锤炼用词精准度与句式表达力，培养对语言节奏和美感的敏感度。",
        overview: "好的写作不仅要逻辑清晰，还需要语言有力、精准、有节奏。本周从词汇选择、句式变化和语感训练三个维度提升文字质量。",
        keyPoints: [
          "精准用词：选择具体、生动、有画面感的词汇替代模糊表达",
          "句式变化：长短句交替、主动被动切换，避免单调",
          "语感培养：通过大量阅读和朗读优秀作品内化语言节奏",
        ],
        lessons: [
          {
            id: "writing-w3-1",
            title: "精准用词与词汇选择",
            detail: "学习如何选择精准、具体、有画面感的词汇，避免空洞和模糊的表达。",
            keyPoints: [
              "用具体名词替代抽象名词：「一只黄色拉布拉多」优于「一条狗」。",
              "用强动词替代弱动词+副词：「冲刺」优于「快速跑」。",
              "删除冗余修饰词：「非常独特」中的「非常」可以删除。",
            ],
            resources: [
              { title: "Purdue OWL：简洁写作", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/conciseness/index.html" },
              { title: "The Elements of Style", url: "https://www.gutenberg.org/ebooks/37134" },
            ],
          },
          {
            id: "writing-w3-2",
            title: "句式变化与节奏感",
            detail: "掌握长短句交替、句式变换和节奏控制的技巧，让文字富有韵律。",
            keyPoints: [
              "短句制造力量和紧迫感，长句适合描述和解释。",
              "开头变化：不要每句都以「我」或主语开头，尝试状语前置。",
              "三段式节奏：用三个并列的词组或短句创造韵律感。",
            ],
            resources: [
              { title: "Writing Tools by Roy Peter Clark", url: "https://www.penguinrandomhouse.com/books/110174/writing-tools-by-roy-peter-clark/" },
              { title: "Grammarly：句式多样性", url: "https://www.grammarly.com/blog/writing-tips/sentence-variety/" },
            ],
          },
          {
            id: "writing-w3-3",
            title: "阅读与语感内化",
            detail: "通过系统性阅读和朗读练习，内化优秀作品的语言节奏和表达方式。",
            keyPoints: [
              "精读法：逐句分析好文章的结构、用词和节奏。",
              "抄写与仿写：手抄经典段落，模仿其句式和节奏进行创作。",
              "朗读检验：把文章大声读出来，不顺畅的地方就是需要修改的地方。",
            ],
            resources: [
              { title: "On Writing Well by William Zinsser", url: "https://www.harpercollins.com/products/on-writing-well-william-zinsser" },
              { title: "哈佛写作中心：阅读与写作的关系", url: "https://writingcenter.fas.harvard.edu/reading-write" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "writing-s2",
    title: "阶段二：实用写作",
    duration: "第 4-6 周",
    goal: "掌握职场写作、新媒体写作和技术文档写作的核心技能，学会用故事化手法增强表达力。",
    weeks: [
      {
        id: "writing-w4",
        title: "第 4 周：职场写作",
        summary: "掌握邮件、报告和方案等职场核心写作场景的写作方法。",
        overview: "职场写作追求效率与清晰。本周学习如何用结构化方式撰写邮件、工作报告和项目方案，让职场沟通高效精准。",
        keyPoints: [
          "职场写作的核心原则：结论先行、结构清晰、语言简洁",
          "邮件写作：主题行概括要点，正文用金字塔结构",
          "报告和方案：用数据和事实说话，明确行动建议",
        ],
        lessons: [
          {
            id: "writing-w4-1",
            title: "高效邮件写作",
            detail: "学习专业邮件的结构、语气和常见场景的写作模板，提升邮件沟通效率。",
            keyPoints: [
              "主题行法则：用动词+核心内容概括邮件（如「请审批：Q3 预算方案」）。",
              "BLUF 原则（Bottom Line Up Front）：结论放在第一段。",
              "一封邮件一个主题，需要行动的内容用加粗或列表突出。",
            ],
            resources: [
              { title: "HBR：如何写专业邮件", url: "https://hbr.org/2016/11/how-to-write-email-with-military-precision" },
              { title: "Grammarly：邮件写作指南", url: "https://www.grammarly.com/blog/writing-tips/email-writing-tips/" },
            ],
          },
          {
            id: "writing-w4-2",
            title: "工作报告与汇报",
            detail: "掌握日报、周报、月报和项目汇报的写作结构，让汇报有据可依、重点突出。",
            keyPoints: [
              "金字塔原理：结论先行，然后按逻辑分组展开论据。",
              "数据驱动：用具体数字替代模糊描述（「增长 23%」优于「大幅增长」）。",
              "STAR 法则：情境（Situation）、任务（Task）、行动（Action）、结果（Result）。",
            ],
            resources: [
              { title: "金字塔原理 — Barbara Minto", url: "https://www.barbaraminto.com/" },
              { title: "Purdue OWL：商务写作", url: "https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/business_writing_for_administrative_and_clerical_staff/index.html" },
              { title: "McKinsey：结构化沟通", url: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-organization-blog/the-art-of-structured-thinking-and-communication" },
            ],
          },
          {
            id: "writing-w4-3",
            title: "项目方案写作",
            detail: "学习撰写清晰有说服力的项目方案，从问题定义到解决方案到执行计划。",
            keyPoints: [
              "方案结构：背景与问题 → 目标 → 方案选项 → 推荐方案 → 执行计划 → 风险评估。",
              "用对比分析（Pros/Cons）展示方案选择的理据。",
              "明确里程碑和交付物，让方案可执行、可衡量。",
            ],
            resources: [
              { title: "Purdue OWL：提案写作", url: "https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/basic_business_letters/index.html" },
              { title: "HBR：如何写商业提案", url: "https://hbr.org/2019/06/the-art-of-the-one-page-proposal" },
            ],
          },
        ],
      },
      {
        id: "writing-w5",
        title: "第 5 周：新媒体写作",
        summary: "掌握公众号、博客和社交媒体等新媒体平台的内容创作方法。",
        overview: "新媒体写作需要在碎片化阅读环境中抓住注意力。本周学习标题、开头、结构和互动等新媒体写作的核心技巧。",
        keyPoints: [
          "标题决定打开率：学会写有吸引力又不标题党的标题",
          "开头 3 秒定生死：用悬念、故事或痛点抓住读者",
          "内容结构适配移动端：短段落、小标题、视觉化排版",
        ],
        lessons: [
          {
            id: "writing-w5-1",
            title: "标题与开头的艺术",
            detail: "学习新媒体标题的写作公式和开头的钩子技巧，提高内容的打开率和完读率。",
            keyPoints: [
              "标题公式：数字+利益点（「5个技巧让你的写作效率翻倍」）。",
              "开头钩子：提问、讲故事、抛出反直觉观点、描述痛点场景。",
              "避免标题党：标题承诺的内容必须在正文中兑现。",
            ],
            resources: [
              { title: "CoSchedule：标题分析工具", url: "https://coschedule.com/headline-analyzer" },
              { title: "Copyblogger：标题写作", url: "https://copyblogger.com/how-to-write-headlines-that-work/" },
              { title: "Medium：写作指南", url: "https://medium.com/the-story/tips-for-writing-on-medium-a0d17e45e885" },
            ],
          },
          {
            id: "writing-w5-2",
            title: "博客与长文写作",
            detail: "掌握博客文章的结构设计、SEO 基础和读者互动技巧，建立持续的内容输出能力。",
            keyPoints: [
              "倒三角结构：最重要的信息放在最前面，逐步深入细节。",
              "SEO 基础：关键词布局、Meta 描述、内链外链策略。",
              "行动号召（CTA）：每篇文章结尾引导读者下一步行动。",
            ],
            resources: [
              { title: "HubSpot：博客写作指南", url: "https://blog.hubspot.com/marketing/how-to-start-a-blog" },
              { title: "Yoast：SEO 写作", url: "https://yoast.com/complete-guide-seo-copywriting/" },
            ],
          },
          {
            id: "writing-w5-3",
            title: "社交媒体文案",
            detail: "学习不同社交媒体平台的文案风格和内容策略，掌握短文案的写作技巧。",
            keyPoints: [
              "平台适配：Twitter/微博求精炼、LinkedIn 求专业、小红书求生活感。",
              "短文案公式：痛点+方案+行动（AIDA 模型的精简版）。",
              "互动设计：提问、投票、话题标签提升参与度。",
            ],
            resources: [
              { title: "Buffer：社交媒体写作", url: "https://buffer.com/library/social-media-copywriting/" },
              { title: "Sprout Social：文案技巧", url: "https://sproutsocial.com/insights/social-media-copywriting/" },
            ],
          },
        ],
      },
      {
        id: "writing-w6",
        title: "第 6 周：技术文档与故事化表达",
        summary: "掌握技术文档的写作规范和故事化表达的叙事技巧。",
        overview: "技术文档要求精准无歧义，故事化表达要求引人入胜。本周掌握这两种看似对立但都极为重要的写作能力。",
        keyPoints: [
          "技术文档：以用户任务为中心，结构化、可搜索、易维护",
          "故事化表达：用叙事结构让枯燥的内容变得有吸引力",
          "两者结合：在技术内容中嵌入故事和案例增强可读性",
        ],
        lessons: [
          {
            id: "writing-w6-1",
            title: "技术文档写作",
            detail: "学习技术文档的分类、结构规范和写作原则，产出清晰准确的技术内容。",
            keyPoints: [
              "文档类型：教程（Tutorial）、操作指南（How-to）、参考（Reference）、解释（Explanation）。",
              "Docs-as-Code：用 Markdown + Git 管理文档，与代码同步更新。",
              "以用户任务为中心写作，而非按功能模块罗列。",
            ],
            resources: [
              { title: "Google 技术写作课程", url: "https://developers.google.com/tech-writing" },
              { title: "Write the Docs", url: "https://www.writethedocs.org/guide/" },
              { title: "Divio 文档系统", url: "https://docs.divio.com/documentation-system/" },
            ],
          },
          {
            id: "writing-w6-2",
            title: "故事化表达与叙事技巧",
            detail: "学习经典叙事结构和故事化表达手法，让非虚构写作更有吸引力和感染力。",
            keyPoints: [
              "英雄之旅：普通人 → 遇到挑战 → 克服困难 → 获得成长。",
              "冲突驱动：好故事的核心是冲突和解决冲突的过程。",
              "场景描写：用具体的时间、地点、人物、对话还原现场感。",
            ],
            resources: [
              { title: "Pixar 故事公式", url: "https://www.khanacademy.org/computing/pixar/storytelling" },
              { title: "TED：故事的力量", url: "https://www.ted.com/playlists/62/how_to_tell_a_story" },
            ],
          },
          {
            id: "writing-w6-3",
            title: "案例写作与数据叙事",
            detail: "学习用案例和数据讲故事的技巧，让论证更有说服力和可信度。",
            keyPoints: [
              "案例写作结构：背景 → 挑战 → 方案 → 结果 → 启示。",
              "数据叙事：让数据讲故事，而非堆砌数字（「从 30% 增长到 85%」优于列表格）。",
              "可视化辅助：用图表、信息图强化数据的直觉冲击力。",
            ],
            resources: [
              { title: "Storytelling with Data", url: "https://www.storytellingwithdata.com/" },
              { title: "HBR：数据叙事", url: "https://hbr.org/2013/04/how-to-tell-a-story-with-data" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "writing-s3",
    title: "阶段三：表达进阶",
    duration: "第 7-9 周",
    goal: "掌握说服力写作、演讲稿设计、评论书评写作以及跨文化写作与翻译思维。",
    weeks: [
      {
        id: "writing-w7",
        title: "第 7 周：说服力写作",
        summary: "掌握构建论点、组织论据和使用修辞策略的说服力写作方法。",
        overview: "说服力写作是最具实用价值的写作能力之一。本周从亚里士多德修辞三要素出发，学习如何用逻辑、信誉和情感打动读者。",
        keyPoints: [
          "修辞三要素：逻辑（Logos）、信誉（Ethos）、情感（Pathos）",
          "论点要明确、可争辩、有立场，而非陈述事实",
          "论据的质量比数量重要：一个有力的例证胜过十个泛泛之谈",
        ],
        lessons: [
          {
            id: "writing-w7-1",
            title: "论点构建与论证结构",
            detail: "学习如何提炼明确的论点，并用图尔明论证模型构建有说服力的论证结构。",
            keyPoints: [
              "好论点的标准：明确、可争辩、有范围限定（避免绝对化）。",
              "图尔明模型：主张（Claim）→ 依据（Data）→ 保证（Warrant）→ 限定（Qualifier）。",
              "反驳预设：提前回应可能的反对意见，增强论证的严密性。",
            ],
            resources: [
              { title: "Purdue OWL：议论文写作", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html" },
              { title: "哈佛写作中心：论点构建", url: "https://writingcenter.fas.harvard.edu/developing-thesis" },
              { title: "图尔明论证模型", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/historical_perspectives_on_argumentation/toulmin_argument.html" },
            ],
          },
          {
            id: "writing-w7-2",
            title: "修辞策略与说服技巧",
            detail: "掌握经典修辞策略和说服心理学原理，让文字更有感染力和说服力。",
            keyPoints: [
              "Ethos（信誉）：通过专业背景、数据引用和客观语气建立信任。",
              "Pathos（情感）：用故事、类比和生动描写唤起读者的情感共鸣。",
              "Logos（逻辑）：用因果推理、数据分析和对比论证支撑观点。",
            ],
            resources: [
              { title: "Purdue OWL：修辞策略", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/rhetorical_strategies.html" },
              { title: "《影响力》Robert Cialdini", url: "https://www.influenceatwork.com/7-principles-of-persuasion/" },
            ],
          },
          {
            id: "writing-w7-3",
            title: "辩证思维与多角度分析",
            detail: "培养辩证思维能力，学会从多个角度分析问题并写出平衡客观的文章。",
            keyPoints: [
              "钢人论证：先用最强的方式呈现对方观点，再进行反驳。",
              "让步-反驳结构：「虽然...有道理，但...更值得关注」。",
              "避免非黑即白：承认问题的复杂性，用限定词保持论述的准确性。",
            ],
            resources: [
              { title: "Critical Thinking Web", url: "https://philosophy.hku.hk/think/" },
              { title: "UNC Writing Center：反驳技巧", url: "https://writingcenter.unc.edu/tips-and-tools/argument/" },
            ],
          },
        ],
      },
      {
        id: "writing-w8",
        title: "第 8 周：演讲稿与口头表达",
        summary: "学习演讲稿的结构设计和口头表达的写作技巧。",
        overview: "演讲稿是一种特殊的写作形式——为耳朵而非眼睛而写。本周学习如何设计演讲结构、写作口语化的文稿和提升现场表达力。",
        keyPoints: [
          "演讲的核心：一个演讲只传递一个核心信息",
          "为耳朵写作：短句、重复、口语化，避免书面语",
          "结构设计：开场吸引注意力 → 主体传递信息 → 结尾呼吁行动",
        ],
        lessons: [
          {
            id: "writing-w8-1",
            title: "演讲稿结构设计",
            detail: "学习经典的演讲结构模型，掌握开场、主体和结尾的设计技巧。",
            keyPoints: [
              "三段式结构：Tell them what you'll tell them → Tell them → Tell them what you told them。",
              "开场技巧：提问、讲故事、展示惊人数据、引用名言。",
              "结尾设计：总结核心观点 + 情感升华 + 行动号召。",
            ],
            resources: [
              { title: "TED：演讲的秘密", url: "https://www.ted.com/talks/chris_anderson_ted_s_secret_to_great_public_speaking" },
              { title: "Toastmasters：演讲技巧", url: "https://www.toastmasters.org/resources/public-speaking-tips" },
              { title: "Harvard：演讲写作", url: "https://writingcenter.fas.harvard.edu/oral-presentations" },
            ],
          },
          {
            id: "writing-w8-2",
            title: "口语化写作技巧",
            detail: "掌握将书面语转化为口语化表达的技巧，让演讲稿更自然、更有感染力。",
            keyPoints: [
              "短句优先：一句话一个意思，不超过 20 个字为佳。",
              "重复与节奏：关键信息重复三次，用排比句增强力量感。",
              "对话感：用「你」「我们」拉近与听众的距离。",
            ],
            resources: [
              { title: "Purdue OWL：口头展示", url: "https://owl.purdue.edu/owl/teacher_and_tutor_resources/teaching_resources/preparing_an_oral_presentation.html" },
              { title: "Presentation Zen", url: "https://www.presentationzen.com/" },
            ],
          },
          {
            id: "writing-w8-3",
            title: "即兴表达与框架思维",
            detail: "学习即兴表达的结构框架，掌握在没有准备时间的情况下清晰表达观点的能力。",
            keyPoints: [
              "PREP 框架：观点（Point）→ 理由（Reason）→ 例子（Example）→ 重申（Point）。",
              "过去-现在-未来框架：用时间线组织即兴发言。",
              "练习方法：每天用 2 分钟对随机话题进行即兴表达练习。",
            ],
            resources: [
              { title: "Think Fast, Talk Smart", url: "https://www.gsb.stanford.edu/insights/think-fast-talk-smart-communication-techniques" },
              { title: "Impromptu Speaking Guide", url: "https://www.toastmasters.org/magazine/articles/impromptu-speaking" },
            ],
          },
        ],
      },
      {
        id: "writing-w9",
        title: "第 9 周：评论写作与跨文化表达",
        summary: "掌握评论、书评的写作方法以及跨文化写作中的翻译思维。",
        overview: "评论写作锻炼批判性思考能力，跨文化写作拓展表达边界。本周学习如何写出有深度的评论，以及如何在不同语言和文化之间转换表达。",
        keyPoints: [
          "评论写作：不是简单的好坏评价，而是有标准、有分析的深度点评",
          "书评写作：概述 + 分析 + 评价 + 推荐，帮助读者做决策",
          "跨文化写作：理解不同文化的表达习惯，避免直译陷阱",
        ],
        lessons: [
          {
            id: "writing-w9-1",
            title: "评论与影评写作",
            detail: "学习评论写作的核心方法，掌握从观察到分析到评价的批判性写作能力。",
            keyPoints: [
              "评论框架：描述（是什么）→ 分析（为什么好/不好）→ 评价（我的判断和建议）。",
              "评论要有标准：明确你的评价维度（如内容、形式、创新性、实用性）。",
              "平衡性：既指出优点也分析不足，避免一味赞美或贬低。",
            ],
            resources: [
              { title: "哈佛写作中心：批判性写作", url: "https://writingcenter.fas.harvard.edu/critical-reading" },
              { title: "Purdue OWL：文学批评", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/writing_about_literature/index.html" },
            ],
          },
          {
            id: "writing-w9-2",
            title: "书评与读后感写作",
            detail: "掌握书评的结构化写作方法，学会从个人阅读体验中提炼有价值的观点分享。",
            keyPoints: [
              "书评结构：基本信息 → 内容概要 → 核心观点分析 → 个人评价 → 推荐理由。",
              "避免剧透式摘要：概述而非复述，突出核心论点而非细节。",
              "连接读者：将书中观点与读者可能的经验和需求关联。",
            ],
            resources: [
              { title: "New York Times Book Review", url: "https://www.nytimes.com/section/books/review" },
              { title: "UNC Writing Center：书评写作", url: "https://writingcenter.unc.edu/tips-and-tools/book-reviews/" },
            ],
          },
          {
            id: "writing-w9-3",
            title: "跨文化写作与翻译思维",
            detail: "理解不同文化的写作习惯差异，培养中英文之间的翻译思维和双语表达能力。",
            keyPoints: [
              "中文重意合（parataxis），英文重形合（hypotaxis）：翻译时需转换逻辑表达方式。",
              "避免翻译腔：不是逐字对应，而是用目标语言的思维方式重新表达。",
              "文化语境适配：同一内容面对不同文化背景的读者需要调整表达策略。",
            ],
            resources: [
              { title: "Purdue OWL：ESL 写作", url: "https://owl.purdue.edu/owl/english_as_a_second_language/esl_students/index.html" },
              { title: "翻译思维：中英文写作差异", url: "https://www.erudit.org/en/journals/meta/2005-v50-n4-meta882/019840ar/" },
              { title: "跨文化沟通写作", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/using_appropriate_language/index.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "writing-s4",
    title: "阶段四：高级创作",
    duration: "第 10-12 周",
    goal: "掌握创意写作技法、长文写作能力、个人品牌建设和编辑修改的专业方法。",
    weeks: [
      {
        id: "writing-w10",
        title: "第 10 周：创意写作与文学手法",
        summary: "学习创意写作的核心技法和文学修辞手法，提升文字的表现力和感染力。",
        overview: "创意写作是写作技术的极致运用。本周学习比喻、象征、视角等文学手法，以及如何在非虚构写作中运用创意写作技巧。",
        keyPoints: [
          "修辞手法：比喻让抽象概念具象化，排比增强节奏和力量",
          "视角选择：第一人称增强亲近感，第三人称保持客观距离",
          "创意与实用的融合：在商业和技术写作中运用文学手法",
        ],
        lessons: [
          {
            id: "writing-w10-1",
            title: "修辞手法与意象构建",
            detail: "掌握比喻、拟人、象征等核心修辞手法，学会用意象构建文字的画面感和层次感。",
            keyPoints: [
              "明喻和暗喻：将抽象概念映射到具体意象（「时间是条河流」）。",
              "象征与意象：用具体事物承载抽象含义，贯穿全文形成意象系统。",
              "通感：打破感官界限的描写（「甜蜜的嗓音」「刺耳的颜色」）。",
            ],
            resources: [
              { title: "Literary Devices", url: "https://literarydevices.net/" },
              { title: "Purdue OWL：修辞手法", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/rhetorical_strategies.html" },
              { title: "MasterClass：创意写作", url: "https://www.masterclass.com/categories/writing" },
            ],
          },
          {
            id: "writing-w10-2",
            title: "视角与叙事声音",
            detail: "理解不同叙事视角的特点和适用场景，找到属于自己的写作声音。",
            keyPoints: [
              "第一人称：亲近、主观、适合个人叙事和观点文章。",
              "第三人称全知：上帝视角、适合分析性文章和案例研究。",
              "写作声音：在专业性和个人风格之间找到平衡。",
            ],
            resources: [
              { title: "Writer's Digest：叙事视角", url: "https://www.writersdigest.com/write-better-fiction/point-of-view-in-2024" },
              { title: "UNC：风格与声音", url: "https://writingcenter.unc.edu/tips-and-tools/style/" },
            ],
          },
          {
            id: "writing-w10-3",
            title: "创意非虚构写作",
            detail: "学习将创意写作技巧应用于非虚构领域，让真实故事和专业内容更有文学质感。",
            keyPoints: [
              "新新闻主义：用小说技巧写新闻和纪实（场景、对话、细节）。",
              "个人散文：将个人经历与普遍主题连接，引发读者共鸣。",
              "创意技术写作：用类比和故事让技术概念易于理解。",
            ],
            resources: [
              { title: "Creative Nonfiction Magazine", url: "https://creativenonfiction.org/" },
              { title: "Nieman Storyboard", url: "https://niemanstoryboard.org/" },
            ],
          },
        ],
      },
      {
        id: "writing-w11",
        title: "第 11 周：长文写作与系列创作",
        summary: "掌握长文和系列文章的规划、组织和执行方法。",
        overview: "长文写作是对写作能力的综合考验。本周学习如何规划和执行长篇内容——从系列文章到书籍级别的写作项目。",
        keyPoints: [
          "长文规划：用大纲和思维导图组织复杂内容的结构",
          "系列文章：每篇独立完整又形成整体的连续叙事",
          "写作项目管理：制定计划、追踪进度、保持动力",
        ],
        lessons: [
          {
            id: "writing-w11-1",
            title: "长文结构与大纲设计",
            detail: "学习长文（5000字以上）的结构设计方法，掌握用大纲组织复杂内容的技巧。",
            keyPoints: [
              "自上而下规划：先确定核心论点和章节框架，再逐层展开。",
              "逻辑线索：用一条主线贯穿全文，每个章节都为主线服务。",
              "节奏控制：在密集论述之间插入故事、案例或类比调节阅读节奏。",
            ],
            resources: [
              { title: "Scrivener：长文写作工具", url: "https://www.literatureandlatte.com/scrivener/overview" },
              { title: "Harvard：论文组织结构", url: "https://writingcenter.fas.harvard.edu/outlining" },
            ],
          },
          {
            id: "writing-w11-2",
            title: "系列文章策划",
            detail: "学习系列文章的选题策划、内容分配和连载策略，建立持续的内容体系。",
            keyPoints: [
              "系列规划：确定总主题 → 拆分子话题 → 安排顺序 → 设计钩子。",
              "每篇独立完整：新读者能从任意一篇进入，不依赖前文。",
              "连续性设计：在每篇结尾预告下期内容，保持读者期待。",
            ],
            resources: [
              { title: "Content Marketing Institute", url: "https://contentmarketinginstitute.com/articles/" },
              { title: "Animalz：内容策略", url: "https://www.animalz.co/blog/" },
            ],
          },
          {
            id: "writing-w11-3",
            title: "写作项目管理",
            detail: "学习将写作视为项目进行管理的方法，包括制定计划、追踪进度和保持写作动力。",
            keyPoints: [
              "制定写作计划：明确字数目标、截止日期和里程碑。",
              "番茄钟法：25 分钟专注写作 + 5 分钟休息，保持高效产出。",
              "写作社群：加入写作小组或找写作搭档，用社交压力保持动力。",
            ],
            resources: [
              { title: "NaNoWriMo：写作挑战", url: "https://nanowrimo.org/" },
              { title: "Notion：写作项目模板", url: "https://www.notion.so/templates/category/writing" },
            ],
          },
        ],
      },
      {
        id: "writing-w12",
        title: "第 12 周：个人品牌与编辑修改",
        summary: "建立写作者的个人品牌，掌握专业的编辑和修改方法。",
        overview: "写作的最后一环是修改和传播。本周学习如何通过写作建立个人品牌，以及专业编辑修改的方法论。",
        keyPoints: [
          "个人品牌：通过持续写作建立专业形象和影响力",
          "编辑修改：好文章不是写出来的，是改出来的",
          "写作变现：将写作能力转化为职业竞争力和收入来源",
        ],
        lessons: [
          {
            id: "writing-w12-1",
            title: "个人品牌与写作定位",
            detail: "学习通过写作建立个人品牌的策略，找到自己的写作定位和差异化优势。",
            keyPoints: [
              "写作定位：选择一个细分领域深耕，成为该领域的可信赖声音。",
              "平台选择：根据目标受众选择主阵地（博客/公众号/Newsletter）。",
              "一致性原则：保持发布频率、写作风格和内容方向的一致性。",
            ],
            resources: [
              { title: "Substack：Newsletter 平台", url: "https://substack.com/" },
              { title: "个人品牌写作策略", url: "https://buffer.com/resources/personal-branding/" },
            ],
          },
          {
            id: "writing-w12-2",
            title: "写作变现与商业模式",
            detail: "了解写作变现的多种路径和商业模式，将写作能力转化为可持续的收入来源。",
            keyPoints: [
              "变现路径：付费订阅、出版、约稿、课程、咨询、品牌合作。",
              "价值阶梯：免费内容引流 → 低价产品建立信任 → 高价服务深度合作。",
              "版权意识：了解原创保护和授权协议的基本知识。",
            ],
            resources: [
              { title: "The Creative Penn", url: "https://www.thecreativepenn.com/how-to-make-money-writing/" },
              { title: "Ali Abdaal：创作者经济", url: "https://aliabdaal.com/" },
              { title: "Gumroad：数字内容销售", url: "https://gumroad.com/" },
            ],
          },
          {
            id: "writing-w12-3",
            title: "编辑与修改的艺术",
            detail: "掌握专业编辑的多轮修改方法论，学会从结构、逻辑、语言和细节四个层面系统修改文章。",
            keyPoints: [
              "多轮修改法：第一轮改结构 → 第二轮改逻辑 → 第三轮改语言 → 第四轮改细节。",
              "冷却期：写完后放置 24 小时再修改，用新鲜的眼光重新审视。",
              "删减原则：如果一段话删掉不影响全文理解，就应该删掉。",
            ],
            resources: [
              { title: "Self-Editing for Fiction Writers", url: "https://www.harpercollins.com/products/self-editing-for-fiction-writers-renni-browne-dave-king" },
              { title: "Hemingway Editor", url: "https://hemingwayapp.com/" },
              { title: "Grammarly：编辑清单", url: "https://www.grammarly.com/blog/writing-tips/editing-checklist/" },
            ],
          },
        ],
      },
    ],
  },
]

export const writingKnowledgeCards: KnowledgeCard[] = [
  {
    id: "writing-card-structure",
    title: "文章结构设计",
    summary: "好的文章结构让读者轻松跟随你的思路。",
    points: [
      "总分总结构：开头提出观点，中间展开论证，结尾总结升华。",
      "金字塔原理：结论先行，从最重要的信息开始，逐层展开细节。",
      "倒三角结构：适合新闻和新媒体，把最吸引人的内容放在最前面。",
    ],
    practice: "选一个你熟悉的话题，分别用总分总和倒三角结构各写一个 500 字的短文，对比两种结构的表达效果。",
  },
  {
    id: "writing-card-audience",
    title: "读者意识",
    summary: "写作的核心不是你想说什么，而是读者需要什么。",
    points: [
      "读者画像：明确你的目标读者是谁——年龄、职业、知识水平、阅读场景。",
      "价值导向：每篇文章都应回答读者的核心问题「这对我有什么用？」。",
      "语言适配：技术文档用精确术语，大众文章用通俗类比。",
    ],
    practice: "将同一个技术概念分别写给技术人员和非技术人员，对比两个版本的用词和结构差异。",
  },
  {
    id: "writing-card-persuasion",
    title: "说服力三要素",
    summary: "亚里士多德的修辞三角——逻辑、信誉、情感。",
    points: [
      "Logos（逻辑）：用数据、因果推理和对比论证让观点有理有据。",
      "Ethos（信誉）：通过专业背景、引用权威和客观态度建立信任。",
      "Pathos（情感）：用故事、类比和生动描写唤起读者的情感共鸣。",
    ],
    practice: "写一篇说服文章，有意识地在三个段落中分别运用逻辑、信誉和情感策略。",
  },
  {
    id: "writing-card-editing",
    title: "多轮修改法",
    summary: "好文章是改出来的，不是写出来的。",
    points: [
      "第一轮看结构：文章的逻辑是否通顺，章节安排是否合理。",
      "第二轮看内容：论据是否充分，信息是否准确，有无遗漏。",
      "第三轮看语言：用词是否精准，句式是否多样，有无冗余。",
    ],
    practice: "拿一篇自己之前的文章，严格按照三轮修改法逐轮修改，记录每轮修改的改动数量和类型。",
  },
  {
    id: "writing-card-storytelling",
    title: "故事化表达",
    summary: "故事是人类最古老、最有效的信息传递方式。",
    points: [
      "故事三要素：人物（谁）、冲突（遇到什么问题）、解决（如何克服）。",
      "场景描写：用具体的时间、地点、细节还原现场，让读者「看到」而非「被告知」。",
      "情感弧线：从平静到冲突到高潮到解决，让读者跟随情绪起伏。",
    ],
    practice: "选一个工作中的真实案例，用故事化手法改写成一篇 800 字的案例分析。",
  },
  {
    id: "writing-card-conciseness",
    title: "简洁写作原则",
    summary: "简洁不是短，而是每个字都有存在的理由。",
    points: [
      "删除冗余词：「进行讨论」→「讨论」，「做出决定」→「决定」。",
      "用主动语态：「报告由我完成」→「我完成了报告」，更直接有力。",
      "一个意思一句话：长句拆成短句，每句话只传递一个信息。",
    ],
    practice: "找一篇自己写过的 1000 字文章，在不丢失信息的前提下缩减到 700 字以内。",
  },
  {
    id: "writing-card-newmedia",
    title: "新媒体写作要诀",
    summary: "在注意力稀缺的时代，让内容被看到是第一步。",
    points: [
      "标题决定生死：用数字、利益点和好奇心激发点击欲望。",
      "移动端适配：短段落（3-4 行）、小标题分隔、关键信息加粗。",
      "互动收尾：用提问或行动号召引导读者参与讨论或分享。",
    ],
    practice: "将一篇传统文章改写为适合公众号发布的版本，重点优化标题、排版和结尾。",
  },
  {
    id: "writing-card-brand",
    title: "写作与个人品牌",
    summary: "持续写作是建立个人品牌最可靠的方式。",
    points: [
      "垂直深耕：选择一个细分领域持续输出，成为该领域的「去找的人」。",
      "一致性：保持固定的发布频率和写作风格，让读者形成期待。",
      "价值阶梯：免费内容 → 付费产品 → 深度服务，逐步建立商业模式。",
    ],
    practice: "制定一个 30 天写作计划：确定你的写作定位、目标平台和发布频率，并坚持执行第一周。",
  },
]

export const writingExamQuestions: QuizQuestion[] = [
  { id: "writing-q1", question: "写作的本质是什么？", options: ["文字堆砌", "将思考外化为清晰表达的过程", "语法练习", "词汇积累"], answer: 1, rationale: "写作的本质是思考的延伸，是将模糊的想法转化为清晰、有结构的表达过程。" },
  { id: "writing-q2", question: "段落中主题句的最佳位置是？", options: ["段落结尾", "段落中间", "段落开头", "不需要主题句"], answer: 2, rationale: "主题句放在段落开头，概括本段核心观点，帮助读者快速理解段落主旨。" },
  { id: "writing-q3", question: "自由写作的核心原则是？", options: ["写完后立即修改", "设定时间不停笔地写，不纠结质量", "只写自己擅长的领域", "先写大纲再动笔"], answer: 1, rationale: "自由写作的核心是在设定时间内持续写作不停笔，目的是克服写作障碍并激发创意。" },
  { id: "writing-q4", question: "金字塔原理的核心要求是？", options: ["从细节开始逐步推导结论", "结论先行，从最重要的信息开始", "按时间顺序叙述", "用大量数据开头"], answer: 1, rationale: "金字塔原理要求结论先行，先给出核心观点，再按逻辑分组展开论据。" },
  { id: "writing-q5", question: "BLUF 原则在邮件写作中意味着？", options: ["用复杂的开场白", "将结论放在第一段", "按时间顺序叙述", "越长越好"], answer: 1, rationale: "BLUF（Bottom Line Up Front）要求将最重要的结论或请求放在邮件的最前面。" },
  { id: "writing-q6", question: "技术文档的四种类型中，教用户完成特定任务的是？", options: ["参考文档（Reference）", "解释文档（Explanation）", "操作指南（How-to）", "教程（Tutorial）"], answer: 2, rationale: "操作指南（How-to）以用户任务为中心，指导用户完成特定的操作步骤。" },
  { id: "writing-q7", question: "亚里士多德修辞三要素中，Ethos 指的是？", options: ["逻辑推理", "情感共鸣", "信誉与可信度", "语言修辞"], answer: 2, rationale: "Ethos 是通过专业背景、引用权威和客观态度建立作者的信誉和可信度。" },
  { id: "writing-q8", question: "图尔明论证模型中，连接论据和结论的是？", options: ["限定词（Qualifier）", "保证（Warrant）", "反驳（Rebuttal）", "数据（Data）"], answer: 1, rationale: "保证（Warrant）是连接论据（Data）和主张（Claim）的桥梁，解释为什么论据能支撑结论。" },
  { id: "writing-q9", question: "演讲稿写作与一般写作的最大区别是？", options: ["不需要结构", "为耳朵而非眼睛写作，需要口语化", "不需要论据", "越长越好"], answer: 1, rationale: "演讲稿是为听觉设计的，需要短句、重复、口语化表达，让听众能跟上节奏。" },
  { id: "writing-q10", question: "新媒体文章开头的核心任务是？", options: ["详细交代背景", "在 3 秒内抓住读者注意力", "列出全部要点", "进行自我介绍"], answer: 1, rationale: "新媒体环境中读者注意力极短，开头必须用悬念、故事或痛点快速吸引读者继续阅读。" },
  { id: "writing-q11", question: "「钢人论证」（Steelmanning）是指？", options: ["歪曲对方观点再反驳", "用最强的方式呈现对方观点后再反驳", "只陈述自己的观点", "回避争议话题"], answer: 1, rationale: "钢人论证是先以最有力的方式呈现对方的观点，再进行反驳，比稻草人论证更有说服力。" },
  { id: "writing-q12", question: "多轮修改法中第一轮应该关注的是？", options: ["标点符号", "用词精准度", "文章结构和逻辑", "排版格式"], answer: 2, rationale: "多轮修改法遵循从大到小的原则：第一轮先看结构和逻辑是否通顺，再逐步细化到语言和细节。" },
  { id: "writing-q13", question: "SEO 写作中最基础的策略是？", options: ["堆砌关键词", "关键词自然布局在标题、正文和 Meta 描述中", "忽略搜索引擎", "只写短文章"], answer: 1, rationale: "SEO 写作要求在标题、正文和 Meta 描述中自然地布局关键词，而非生硬堆砌。" },
  { id: "writing-q14", question: "PREP 即兴表达框架中的 R 代表？", options: ["Result（结果）", "Reason（理由）", "Review（回顾）", "Resource（资源）"], answer: 1, rationale: "PREP 框架为 Point（观点）→ Reason（理由）→ Example（例子）→ Point（重申观点）。" },
  { id: "writing-q15", question: "数据叙事的核心原则是？", options: ["展示所有数据", "让数据讲故事而非堆砌数字", "只用表格呈现", "避免使用图表"], answer: 1, rationale: "数据叙事的核心是让数据服务于故事和论点，用可视化和叙事结构让数字产生冲击力。" },
  { id: "writing-q16", question: "系列文章的每一篇应该满足什么条件？", options: ["必须按顺序阅读", "独立完整，新读者能从任意一篇进入", "内容越短越好", "不需要相互关联"], answer: 1, rationale: "好的系列文章每篇独立完整，新读者可以从任意一篇进入理解，又能形成整体连续性。" },
  { id: "writing-q17", question: "中文写作和英文写作在逻辑表达上的核心差异是？", options: ["没有差异", "中文重意合，英文重形合", "中文更简洁", "英文不需要连接词"], answer: 1, rationale: "中文倾向意合（parataxis），依靠语义推断关系；英文倾向形合（hypotaxis），依靠连接词明确表达逻辑关系。" },
  { id: "writing-q18", question: "建立个人写作品牌最重要的策略是？", options: ["尽量多的平台同时运营", "选择细分领域深耕并保持一致性", "只追热点话题", "匿名写作"], answer: 1, rationale: "垂直深耕一个细分领域并保持发布频率和风格的一致性，是建立可信赖写作品牌的基础。" },
  { id: "writing-q19", question: "删减原则的核心判断标准是？", options: ["字数是否超标", "删掉后是否影响全文理解", "是否包含专业术语", "段落是否太长"], answer: 1, rationale: "删减原则的标准是：如果一段话删掉后不影响全文的理解和论证，那就应该删掉。" },
  { id: "writing-q20", question: "写完文章后，进行编辑修改前应该？", options: ["立即修改", "让文章冷却 24 小时再用新鲜眼光审视", "交给别人修改", "不需要修改"], answer: 1, rationale: "写完后放置一段时间（至少24小时）再修改，能用新鲜的视角发现写作时忽略的问题。" },
]

export const writingRoadmap: RoadmapDefinition = {
  id: "writing",
  label: "写作表达",
  title: "写作表达学习路线",
  durationLabel: "12 周·36 课时",
  description: "从写作基础到高级创作，系统掌握段落结构、职场写作、新媒体表达、说服力写作和编辑修改，全面提升文字表达能力与写作影响力。",
  heroBadge: "写作基础 · 实用写作 · 表达进阶 · 高级创作",
  stages: writingStages,
  knowledgeCards: writingKnowledgeCards,
  examQuestions: writingExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始写作之旅，先理解写作的本质并建立日常写作习惯。"
    if (percent < 25) return "打好基础，重点练习段落结构和遣词造句。"
    if (percent < 50) return "进入实用写作阶段，掌握职场和新媒体写作技巧。"
    if (percent < 75) return "提升表达深度，学习说服力写作和演讲稿设计。"
    if (percent < 100) return "冲刺高级创作，打磨编辑修改能力和个人品牌。"
    return "恭喜完成！你已系统掌握写作表达的核心能力，持续练习精进吧！"
  },
  resourceGuide: {
    environment: "准备一个写作工具（Notion/Obsidian/Google Docs）和一个发布平台（博客/公众号/Substack）。",
    fallbackKeyPoints: [
      "写作的本质是思考的外化，先想清楚才能写清楚",
      "段落是文章的基本单元，每段围绕一个核心观点展开",
      "职场写作追求结论先行、结构清晰、语言简洁",
      "说服力写作需要逻辑、信誉和情感三者结合",
      "好文章是改出来的——多轮修改从结构到细节逐步打磨",
    ],
    handsOnSteps: [
      "每天进行 15 分钟的自由写作练习，坚持 30 天",
      "用金字塔原理重写一封工作邮件或项目方案",
      "撰写一篇 2000 字的新媒体文章并发布到平台",
      "用修辞三要素写一篇说服力文章，分析自己的论证策略",
      "对一篇旧文章进行三轮系统修改，对比修改前后的差异",
    ],
    selfChecks: [
      "能否在 10 分钟内用 PREP 框架对随机话题进行清晰表达？",
      "写的每个段落是否都有明确的主题句和充分的支撑论据？",
      "是否能根据不同读者和平台调整写作风格和内容深度？",
      "文章结构是否清晰，读者能否轻松跟随你的逻辑？",
      "是否建立了系统的素材积累和定期写作的习惯？",
    ],
    extensions: [
      "参加写作社群或工作坊，获得同行反馈",
      "尝试翻译一篇英文好文章，锻炼双语思维",
      "开设个人 Newsletter，建立写作的商业化路径",
      "阅读《风格的要素》《写作法宝》等经典写作指导书籍",
    ],
    lessonQuizAdvice: "每周完成写作练习后做测验，重点理解写作方法论背后的原理而非死记规则。",
  },
}
