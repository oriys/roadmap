import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week10Guides: Record<string, LessonGuide> = {
    "go-w10-1": {
        lessonId: "go-w10-1",
        background: [
            "【Go Modules】Go 1.11+ 引入的官方依赖管理方案。",
            "【go.mod】定义模块路径、Go 版本和依赖。",
            "【go.sum】记录依赖的加密哈希，确保可重现构建。"
        ],
        keyDifficulties: ["【版本选择】Go 使用最小版本选择算法。", "【replace 指令】用于本地开发或替换依赖。"],
        handsOnPath: ["go mod init 初始化模块", "go mod tidy 整理依赖", "查看 go.mod 和 go.sum"],
        selfCheck: ["go.mod 和 go.sum 的作用？", "go mod tidy 做了什么？"],
        extensions: ["学习 go mod graph 查看依赖图"],
        sourceUrls: ["https://go.dev/doc/tutorial/create-module", "https://go.dev/blog/using-go-modules", "https://go.dev/ref/mod"]
    },
    "go-w10-2": {
        lessonId: "go-w10-2",
        background: [
            "【包组织】包名通常与目录名一致。",
            "【可见性】首字母大写可导出，小写私有。",
            "【internal】internal 包只能被父目录导入。"
        ],
        keyDifficulties: ["【循环导入】Go 不允许循环导入，需要重构解决。", "【init 函数】每个包可以有 init 函数，自动执行。"],
        handsOnPath: ["创建多包项目", "使用 internal 包", "观察 init 函数执行顺序"],
        selfCheck: ["如何组织多包项目？", "internal 包有什么特殊性？"],
        extensions: ["学习大型项目的包组织模式"],
        sourceUrls: ["https://gobyexample.com/packages", "https://go.dev/doc/effective_go#package-names", "https://go.dev/blog/package-names"]
    },
    "go-w10-3": {
        lessonId: "go-w10-3",
        background: [
            "【go get】添加或更新依赖。",
            "【语义化版本】Major.Minor.Patch 版本号规范。",
            "【发布模块】通过 Git 标签发布到 pkg.go.dev。"
        ],
        keyDifficulties: ["【v2+】主版本 2 及以上需要修改导入路径。", "【伪版本】无标签时使用 commit hash 作为版本。"],
        handsOnPath: ["go get 添加依赖", "指定版本 go get pkg@v1.2.3", "浏览 pkg.go.dev"],
        selfCheck: ["如何发布 Go 模块？", "v2+ 版本有什么特殊要求？"],
        extensions: ["学习 GOPROXY 和私有模块"],
        sourceUrls: ["https://pkg.go.dev/", "https://go.dev/blog/publishing-go-modules", "https://semver.org/"]
    }
}

export const week10Quizzes: Record<string, QuizQuestion[]> = {
    "go-w10-1": [
        { id: "go-w10-1-q1", question: "go mod init 的作用是什么？", options: ["下载依赖", "创建 go.mod 文件初始化模块", "运行测试", "编译代码"], answer: 1, rationale: "go mod init 创建 go.mod 文件，初始化一个新的 Go 模块。" },
        { id: "go-w10-1-q2", question: "go.sum 文件的作用是什么？", options: ["存储源代码", "记录依赖的加密哈希确保可重现构建", "配置环境变量", "存储测试结果"], answer: 1, rationale: "go.sum 记录依赖的 SHA-256 哈希，确保依赖完整性。" }
    ],
    "go-w10-2": [
        { id: "go-w10-2-q1", question: "internal 包有什么特殊限制？", options: ["不能导出", "只能被父目录的包导入", "不能有依赖", "必须是 main 包"], answer: 1, rationale: "internal 包只能被其父目录树中的包导入，用于隐藏实现细节。" },
        { id: "go-w10-2-q2", question: "Go 允许循环导入吗？", options: ["允许", "不允许", "只允许 main 包", "取决于编译器"], answer: 1, rationale: "Go 不允许循环导入，需要通过接口或重构解决。" }
    ],
    "go-w10-3": [
        { id: "go-w10-3-q1", question: "v2+ 版本的模块需要什么特殊处理？", options: ["无需处理", "导入路径需要包含 /v2", "只能本地使用", "需要付费"], answer: 1, rationale: "主版本 2 及以上需要修改导入路径添加 /v2 后缀。" },
        { id: "go-w10-3-q2", question: "如何引入第三方依赖包？", options: ["手动下载源码", "go get 命令", "pip install", "npm install"], answer: 1, rationale: "使用 go get 命令下载并添加第三方依赖到 go.mod 文件中。" },
        { id: "go-w10-3-q3", question: "发布 Go 模块需要将代码托管在哪里？", options: ["只能在 GitHub", "任何 Git 仓库且路径匹配模块路径", "Go 官方仓库", "npm registry"], answer: 1, rationale: "Go 模块可以托管在任何 Git 仓库，只要模块路径与仓库地址匹配。" }
    ]
}
