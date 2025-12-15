import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const gitGithubStages: Stage[] = [
    {
        id: "git-foundation",
        title: "阶段 1：Git 基础与工作流",
        duration: "第 1-2 周",
        goal: "熟练使用 Git 进行日常版本管理与分支协作。",
        weeks: [
            {
                id: "git-w1",
                title: "第 1 周：Git 基础操作",
                summary: "建立 commit/branch/remote 心智模型，能独立管理个人仓库。",
                overview: "掌握 Git 基本命令与状态机：工作区、暂存区与提交历史。",
                keyPoints: [
                    "区分工作区、暂存区与提交历史（git status / add / commit）。",
                    "学会分支与合并（git branch / checkout / merge）。",
                    "理解远程同步（git remote / fetch / pull / push）的差异。",
                ],
                lessons: [
                    {
                        id: "git-w1-1",
                        title: "Git 模型与配置",
                        detail: "认识工作区、暂存区、HEAD 与远程别名，配置用户名与默认分支。",
                        keyPoints: ["git init / config / status 的常见用法"],
                        resources: [
                            { title: "Pro Git · 基础", url: "https://git-scm.com/book/zh/v2/起步-关于版本控制" },
                            { title: "git config", url: "https://git-scm.com/docs/git-config" },
                            { title: "git status", url: "https://git-scm.com/docs/git-status" },
                        ],
                    },
                    {
                        id: "git-w1-2",
                        title: "提交与回滚",
                        detail: "创建提交、查看历史与安全回退。",
                        resources: [
                            { title: "git add & commit", url: "https://git-scm.com/docs/git-commit" },
                            { title: "git log / show", url: "https://git-scm.com/docs/git-log" },
                            { title: "git restore / reset", url: "https://git-scm.com/docs/git-restore" },
                        ],
                    },
                    {
                        id: "git-w1-3",
                        title: "分支与合并基础",
                        detail: "创建、切换与合并分支，解决简单冲突。",
                        resources: [
                            { title: "git branch", url: "https://git-scm.com/docs/git-branch" },
                            { title: "git merge", url: "https://git-scm.com/docs/git-merge" },
                            { title: "冲突解决指南", url: "https://git-scm.com/docs/git-mergetool" },
                        ],
                    },
                ],
            },
            {
                id: "git-w2",
                title: "第 2 周：协作与分支策略",
                summary: "在团队中使用分支策略、Pull Request 与 Cherry-pick。",
                overview: "理解协作流程：fork/clone、PR、保护分支与评审。",
                keyPoints: [
                    "选用合适的分支模型：main + feature、Git Flow 或 trunk-based。",
                    "用 rebase/merge 维护整洁历史，避免强制 push 覆盖他人。",
                    "Pull Request 流程：描述、检查、评审与合并策略。",
                ],
                lessons: [
                    {
                        id: "git-w2-1",
                        title: "远程协作与 PR",
                        detail: "clone/fetch/pull/push 与 PR 评审的基本流程。",
                        resources: [
                            { title: "git fetch / pull / push", url: "https://git-scm.com/docs/git-pull" },
                            { title: "GitHub Pull Requests", url: "https://docs.github.com/zh/pull-requests" },
                            { title: "分支保护规则", url: "https://docs.github.com/zh/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches" },
                        ],
                    },
                    {
                        id: "git-w2-2",
                        title: "历史整理：rebase 与 cherry-pick",
                        detail: "用交互式 rebase 整理提交，安全地挑选或回滚。",
                        resources: [
                            { title: "git rebase", url: "https://git-scm.com/docs/git-rebase" },
                            { title: "git cherry-pick", url: "https://git-scm.com/docs/git-cherry-pick" },
                            { title: "避免破坏历史的最佳实践", url: "https://docs.github.com/zh/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "github-practices",
        title: "阶段 2：GitHub 实战与自动化",
        duration: "第 3-4 周",
        goal: "用 GitHub 构建安全、可审计、自动化的协作流程。",
        weeks: [
            {
                id: "git-w3",
                title: "第 3 周：仓库健康与安全",
                summary: "设置合规的分支保护、模板与安全扫描。",
                overview: "为团队仓库启用模板、Reviewers、Actions 安全策略。",
                keyPoints: [
                    "Issue/PR 模板与 CODEOWNERS 提升协作效率。",
                    "使用 Dependabot / 安全扫描提前发现依赖风险。",
                    "分支保护 + 签名提交确保变更可追踪。",
                ],
                lessons: [
                    {
                        id: "git-w3-1",
                        title: "模板与代码所有者",
                        detail: "设置 Issue/PR 模板与 CODEOWNERS，规范协作入口。",
                        resources: [
                            { title: "Issue/PR 模板", url: "https://docs.github.com/zh/communities/using-templates-to-encourage-useful-issues-and-pull-requests" },
                            { title: "CODEOWNERS", url: "https://docs.github.com/zh/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners" },
                            { title: "提交签名", url: "https://docs.github.com/zh/authentication/managing-commit-signature-verification/signing-commits" },
                        ],
                    },
                    {
                        id: "git-w3-2",
                        title: "安全与合规",
                        detail: "启用 Dependabot、安全策略与 secret 检测。",
                        resources: [
                            { title: "Dependabot 设置", url: "https://docs.github.com/zh/code-security/dependabot" },
                            { title: "Secret scanning", url: "https://docs.github.com/zh/code-security/secret-scanning" },
                            { title: "安全策略 (SECURITY.md)", url: "https://docs.github.com/zh/code-security/getting-started/adding-a-security-policy-to-your-repository" },
                        ],
                    },
                ],
            },
            {
                id: "git-w4",
                title: "第 4 周：GitHub Actions 与交付",
                summary: "用 CI/CD 自动化测试、构建与发布，形成可复现流水线。",
                overview: "理解 Actions 组成：workflow、job、step、runner 与 secrets。",
                keyPoints: [
                    "写一个最小可行的 CI：lint + test + build。",
                    "缓存、矩阵、环境分发与 artifact 上传的常见模式。",
                    "发布与环境保护：环境审批、required checks、rollback 策略。",
                ],
                lessons: [
                    {
                        id: "git-w4-1",
                        title: "GitHub Actions 基础",
                        detail: "编写 workflow，使用官方 actions 完成 CI。",
                        resources: [
                            { title: "Actions 概览", url: "https://docs.github.com/zh/actions" },
                            { title: "官方 actions 目录", url: "https://github.com/marketplace?type=actions" },
                            { title: "缓存与矩阵", url: "https://docs.github.com/zh/actions/using-jobs/using-a-matrix-for-your-jobs" },
                        ],
                    },
                    {
                        id: "git-w4-2",
                        title: "发布与环境管理",
                        detail: "使用环境、审批与 artifact 提升发布可靠性。",
                        resources: [
                            { title: "部署环境与审批", url: "https://docs.github.com/zh/actions/managing-workflow-runs/reviewing-deployments" },
                            { title: "Artifact 上传", url: "https://docs.github.com/zh/actions/managing-workflow-runs/downloading-workflow-artifacts" },
                            { title: "版本发布", url: "https://docs.github.com/zh/repositories/releasing-projects-on-github/managing-releases-in-a-repository" },
                        ],
                    },
                ],
            },
        ],
    },
]

export const gitGithubKnowledgeCards: KnowledgeCard[] = [
    {
        id: "git-foundation",
        title: "Git 三状态：工作区 / 暂存区 / 历史",
        summary: "Git 不是“云盘”，而是快照+指针的有向图。掌握三状态才能自信回滚与整理历史。",
        points: [
            "用 git status 观察状态机，add 把变更移入暂存区，commit 生成不可变快照。",
            "HEAD -> 分支 -> 提交 的指针关系决定 checkout/reset 的效果。",
            "善用 git restore/git reset --patch 在不破坏历史的前提下撤销或拆分修改。",
        ],
        practice: "创建一个仓库，分别演练 add/commit/log/show 与 restore/reset 的效果，并记录每步状态。",
    },
    {
        id: "git-collab",
        title: "协作 = 分支策略 + PR 流程",
        summary: "在团队里，分支模型与评审流程决定交付节奏。",
        points: [
            "main 受保护，feature 分支短生命周期，避免长时间漂移。",
            "PR 模板与 CODEOWNERS 明确责任，required checks 保障质量。",
            "遇到冲突先 rebase/fetch 保持同步，避免强制 push 覆盖他人。",
        ],
        practice: "为示例仓库建立 PR 模板与 CODEOWNERS，提交一个包含描述、检查清单与截图的 PR。",
    },
    {
        id: "git-automation",
        title: "自动化流水线 = Actions + 审批 + 产物",
        summary: "CI 负责验证，CD 负责发布；GitHub Actions 串联检查、构建与发布。",
        points: [
            "workflow/job/step 的层级：可复用 action + matrix + cache 提升效率。",
            "环境与审批保护生产：required reviewers、环境锁、artifact 产物可追踪。",
            "安全第一：最小权限 token、密钥存储在 secrets/环境变量，避免明文。",
        ],
        practice: "编写一个 workflow：pnpm install → lint/test → build，上传 artifact，并为 main 分支启用环境审批。",
    },
]

export const gitGithubExamQuestions: QuizQuestion[] = [
    {
        id: "git-q1",
        question: "git add 的作用是什么？",
        options: ["将修改直接提交到远程", "把工作区修改移入暂存区", "回滚到上一个提交", "删除本地分支"],
        answer: 1,
        rationale: "git add 负责把工作区改动放入暂存区，便于后续 commit。",
    },
    {
        id: "git-q2",
        question: "哪种描述更符合 Pull Request 的最佳实践？",
        options: ["直接 force push 到 main", "PR 里包含描述、检查清单与关联 Issue", "不需要评审就合并", "跳过 CI"],
        answer: 1,
        rationale: "清晰的 PR 描述 + 关联检查有助于评审与追踪。",
    },
    {
        id: "git-q3",
        question: "git rebase 与 git merge 的主要差异是？",
        options: ["rebase 会创建新的基线、重写提交历史", "merge 会删除分支", "rebase 只能在远程执行", "merge 永远是快进模式"],
        answer: 0,
        rationale: "rebase 会重放提交以获得线性历史，merge 保留原有拓扑。",
    },
    {
        id: "git-q4",
        question: "在 GitHub 上保护主分支的常见做法是？",
        options: ["允许任何人强制 push", "关闭审查与检查", "启用分支保护并要求评审/状态检查", "阻止所有推送"],
        answer: 2,
        rationale: "分支保护 + required checks 能保障历史可审计且质量受控。",
    },
    {
        id: "git-q5",
        question: "GitHub Actions workflow 中，哪项做法更安全？",
        options: ["在仓库明文存储 token", "使用 secrets/环境限制权限", "把 secrets 直接写到脚本", "让任何人修改受信任的 action"],
        answer: 1,
        rationale: "最小权限 + secrets 存储能降低凭证泄露风险。",
    },
    {
        id: "git-q6",
        question: "想在发布前阻止未经审批的部署，应使用？",
        options: ["环境与审批保护", "取消所有检查", "改为 FTP 手动上传", "关闭流水线"],
        answer: 0,
        rationale: "GitHub Actions 的环境保护与审批能在生产发布前增加人工把关。",
    },
    {
        id: "git-q7",
        question: "git cherry-pick 适用于哪种场景？",
        options: ["删除整个分支", "挑选某个提交应用到当前分支", "初始化仓库", "强制覆盖远程"],
        answer: 1,
        rationale: "cherry-pick 可将指定提交引入当前分支用于热修或补丁。",
    },
    {
        id: "git-q8",
        question: "以下哪项更能代表“最小可行”CI？",
        options: ["仅上传 artifact", "只运行构建不测试", "安装依赖后运行 lint/test/build", "等待人工执行"],
        answer: 2,
        rationale: "基础 CI 应至少验证 lint/test/build，保证产物质量。",
    },
]

export const gitGithubRoadmap: RoadmapDefinition = {
    id: "git-github",
    label: "Git & GitHub",
    title: "Git & GitHub 协作加固路线",
    durationLabel: "4 周",
    description:
        "4 周跑通可审计的 Git/GitHub 工作流：掌握三状态心智模型 → 规范分支/PR 协作 → 做好仓库健康与安全 → 上线 Actions 自动化与发布。打卡进度与测验自动保存，便于持续练习。",
    heroBadge: "Version Control Essentials · shadcn UI",
    stages: gitGithubStages,
    knowledgeCards: gitGithubKnowledgeCards,
    examQuestions: gitGithubExamQuestions,
    suggestion: (percent: number) => {
        if (percent < 25) {
            return "先完成 Git 基础：add/commit/log 与分支合并，确保能安全回退。"
        }
        if (percent < 50) {
            return "实践 PR 协作：写好描述、检查清单与分支保护，避免 force push。"
        }
        if (percent < 75) {
            return "给仓库加上模板、CODEOWNERS 与安全扫描，再跑一遍完整协作流程。"
        }
        return "完善 Actions 流水线：为 main 启用审批与 artifact 产物，做一次端到端发布演练。"
    },
    resourceGuide: {
        environment: "已安装 Git 的本地终端 + GitHub 账号（可访问 HTTPS/SSH），Node 或项目所需工具链。",
        fallbackKeyPoints: [
            "始终确认当前分支与远程状态：git status / git fetch / git log --oneline。",
            "变更最小化：小步提交、写好 message，避免强制覆盖。",
            "在 PR 中跑自动化检查与截图，确保 reviewer 可复现。",
        ],
        handsOnSteps: [
            "创建一个示例仓库：初始化、首个 commit、推送到 GitHub。",
            "新建 feature 分支完成一次改动，提交 PR，添加描述与 checklist。",
            "配置一条 Actions 工作流（lint/test/build），为 main 启用 required checks 与审批。",
        ],
        selfChecks: [
            "能否解释 HEAD、分支、远程跟踪分支的关系？",
            "遇到冲突时，如何用 fetch + rebase/merge 解决且不覆盖他人提交？",
            "流水线失败时，能否通过日志/产物定位问题并修复？",
        ],
        extensions: [
            "为仓库添加 CODEOWNERS、Issue/PR 模板、Dependabot 配置。",
            "练习 git bisect 定位缺陷，记录排查脚本。",
            "把 CI 产物部署到临时环境，演练带审批的发布流程。",
        ],
        lessonQuizAdvice: "复盘错题对应的命令或流程，重新在仓库中跑一遍并截图记录。",
    },
}
