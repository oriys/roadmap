import type { LessonGuide } from "../types"

export const week1Guides: Record<string, LessonGuide> = {
    "tw-w1-1": {
        lessonId: "tw-w1-1",
        background: [
            "技术写作（Technical Writing）是一种以任务为导向的实用写作，核心目标是帮助读者完成特定任务，而非展示文采或堆砌术语。",
            "Write the Docs 社区强调：撰写文档的过程本身能改进代码设计，因为它迫使开发者理清设计决策并显性化隐性假设。",
            "Diátaxis 框架将文档分为四象限：Tutorials（教程，学习导向）、How-to Guides（操作指南，问题导向）、Reference（参考，信息导向）、Explanation（解释，理解导向）。",
            "Google 技术写作课程指出：'知识的诅咒'（Curse of Knowledge）是写作者最大的障碍——专家往往难以理解初学者的困惑。"
        ],
        keyDifficulties: [
            "克服'知识诅咒'：你认为显而易见的事情，对读者可能完全陌生。需要显性化所有隐性假设，包括环境、版本、前置知识。",
            "避免 FAQ 陷阱：FAQ 看似有用，实则容易过时、内容散乱、难以检索，且常常不是真实用户的问题。应将其转化为结构化的正式文档。",
            "理解'文档即产品特性'：文档不是代码的附属品，而是产品的核心功能。好的文档能降低支持成本、吸引贡献者、提升用户留存。",
            "区分用户与开发者：文档的目标读者分为两类——想用代码的用户（关心怎么用）和想贡献代码的开发者（关心怎么改）。两者需要不同的文档。"
        ],
        handsOnPath: [
            "选择一个你熟悉的开源项目或个人项目，检查其 README 是否包含：问题描述、安装说明、使用示例、许可证。记录缺失项。",
            "用 Diátaxis 四象限审视该项目的文档结构：有没有教程（从零到一）？有没有操作指南（解决具体问题）？有没有参考文档（API/配置说明）？有没有概念解释？",
            "为该项目补写一份 Quickstart（3-5 步内跑通核心功能），确保包含：前置条件、安装命令、最小可运行示例、预期输出。",
            "邀请一位不熟悉该项目的同事测试你的 Quickstart，观察并记录他们的困惑点，这些就是你'知识诅咒'的盲区。"
        ],
        selfCheck: [
            "你能否用一句话说明这份文档的目标读者和他们要完成的任务？",
            "你的 README 是否回答了'这个项目解决什么问题'这个核心问题？",
            "如果用户只看 Quickstart，能否在 5 分钟内成功运行示例？",
            "你的文档中是否有 FAQ？如果有，能否将其转化为正式的 How-to 或 Troubleshooting？",
            "你是否为不同读者（用户 vs 开发者）提供了不同的入口？"
        ],
        extensions: [
            "深入学习 Diátaxis 框架：https://diataxis.fr/ —— 理解四种文档类型的边界和最佳实践。",
            "完成 Google Technical Writing One 课程：https://developers.google.com/tech-writing/one —— 系统学习清晰表达的技巧。",
            "加入 Write the Docs 社区（Slack/Meetup），获取行业动态和同行评审反馈。",
            "阅读你最喜欢的开源项目的文档，分析它们做对了什么、做错了什么。"
        ],
        sourceUrls: [
            "https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/",
            "https://diataxis.fr/start-here/",
            "https://developers.google.com/tech-writing/one"
        ]
    }
}
