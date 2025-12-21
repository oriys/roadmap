import type { LessonGuide } from "../types"

export const week2Guides: Record<string, LessonGuide> = {
    "tw-w2-1": {
        lessonId: "tw-w2-1",
        background: [
            "Markdown 是一种轻量级标记语言，设计目标是'易读易写'——源文件本身就是可读的纯文本，同时能转换为结构化的 HTML。",
            "CommonMark 是 Markdown 的标准化规范，解决了不同 Markdown 解析器之间的不一致问题。从 2014 年至今持续迭代，确保实现的一致性。",
            "GitHub Flavored Markdown（GFM）在 CommonMark 基础上扩展了表格、任务列表、代码高亮、自动链接等功能，是技术文档的事实标准。",
            "Docs-as-Code 的核心理念：用纯文本格式（如 Markdown）编写文档，用 Git 管理版本，用 CI/CD 自动发布——让文档享受与代码相同的工程实践。"
        ],
        keyDifficulties: [
            "Markdown 方言差异：不同平台（GitHub、GitLab、Notion）对 Markdown 的扩展不同，需要了解目标平台支持的语法子集。",
            "格式一致性：团队成员使用不同的编辑器和习惯，容易导致格式混乱。需要约定：标题层级、列表符号、代码块语言标注等。",
            "模板复用 vs 僵化：模板能提高一致性，但过于死板会限制表达。关键是识别'必须统一'的结构和'可以灵活'的内容。",
            "图片和链接管理：外部链接可能失效，图片路径在不同环境下可能失效。需要建立资源管理策略（相对路径 vs CDN）。"
        ],
        handsOnPath: [
            "用 Markdown 写一份完整的 README：包含项目描述、安装步骤（代码块）、使用示例（代码块）、贡献指南（链接）和许可证。",
            "创建三个可复用模板：Quickstart（3-5 步跑通）、How-to Guide（解决具体问题）、API Reference（参数表格）。保存为团队共享的模板文件。",
            "在 GitHub 上创建一个文档仓库，尝试 GFM 扩展功能：任务列表、表格、折叠部分（<details>）、Mermaid 图表。",
            "用 markdownlint 检查你的 Markdown 文件，修复所有警告，建立团队的 .markdownlint.json 配置。"
        ],
        selfCheck: [
            "你的 Markdown 文件在 GitHub、VS Code、其他平台上渲染结果是否一致？",
            "你是否有一套可复用的文档模板？新文档是否基于模板创建？",
            "你的图片和链接是否使用相对路径？外部链接是否定期检查可用性？",
            "你的团队是否有 Markdown 格式约定？是否用 linter 自动检查？",
            "你能否在 5 分钟内用模板创建一份新的 How-to 文档？"
        ],
        extensions: [
            "深入学习 Markdown 扩展语法：https://www.markdownguide.org/extended-syntax/ —— 表格、脚注、定义列表等。",
            "了解 CommonMark 规范细节：https://spec.commonmark.org/ —— 理解 Markdown 的'边缘情况'处理。",
            "学习 Mermaid 图表语法，用 Markdown 画流程图、时序图：https://mermaid.js.org/",
            "配置 VS Code 的 Markdown 插件：预览、linting、自动格式化。"
        ],
        sourceUrls: [
            "https://www.markdownguide.org/basic-syntax/",
            "https://spec.commonmark.org/",
            "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github"
        ]
    },
    "tw-w2-2": {
        lessonId: "tw-w2-2",
        background: [
            "Git 是分布式版本控制系统，核心特性：Fast（快速）、Everything is local（本地化）、Local branching on the cheap（廉价分支）。",
            "Pull Request（PR）是 GitHub 的核心协作功能——'proposals to merge code changes into a project'。它让团队在合并前讨论和审查变更，帮助捕获问题并维护质量。",
            "Docs as Code 哲学：用与代码相同的工具写文档——问题追踪、版本控制（Git）、纯文本标记语言、代码审查、自动化测试。",
            "PR 的四个核心标签页：Conversation（讨论）、Commits（提交历史）、Checks（自动化检查）、Files changed（差异对比）。"
        ],
        keyDifficulties: [
            "分支策略选择：main-only、GitFlow、GitHub Flow 各有适用场景。文档项目通常用简单的 main + feature branch 模式即可。",
            "冲突解决：多人同时编辑同一文件会产生冲突。文档冲突通常是结构性的（如两人都加了新章节），需要人工判断合并顺序。",
            "PR 粒度把控：PR 太大难以审查，太小又增加管理成本。文档 PR 建议按'一个主题一个 PR'组织。",
            "审查反馈的处理：收到修改建议后，是直接修改还是讨论？关键是区分'必须改'（错误）和'可以商量'（风格偏好）。"
        ],
        handsOnPath: [
            "在 GitHub 上 fork 一个开源文档项目，创建分支修复一个 typo 或补充一段说明，提交你的第一个文档 PR。",
            "练习完整的 PR 流程：创建分支 → 提交变更 → 推送 → 创建 PR → 请求审查 → 根据反馈修改 → 合并。",
            "故意制造一个冲突并解决它：两个分支修改同一文件的同一行，然后合并并手动解决冲突。",
            "为你的文档仓库配置 PR 模板（.github/PULL_REQUEST_TEMPLATE.md），包含：变更类型、变更描述、检查清单。"
        ],
        selfCheck: [
            "你是否能熟练使用 git branch、git checkout、git merge、git pull、git push？",
            "你的 PR 描述是否清晰说明了'改了什么'和'为什么改'？",
            "你是否在合并前确保所有自动检查（Checks）都通过？",
            "你是否知道如何解决合并冲突？",
            "你的团队是否有 PR 审查的流程和标准？"
        ],
        extensions: [
            "阅读 Pro Git 书籍（免费）：https://git-scm.com/book/en/v2 —— 深入理解 Git 内部机制。",
            "学习 GitHub Flow 工作流：https://docs.github.com/en/get-started/quickstart/github-flow",
            "配置 Git Hooks（pre-commit）自动运行检查：拼写、链接、格式。",
            "学习使用 GitHub Actions 自动化文档构建和部署。"
        ],
        sourceUrls: [
            "https://git-scm.com/book/en/v2",
            "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",
            "https://www.writethedocs.org/guide/docs-as-code/"
        ]
    }
}
