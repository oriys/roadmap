import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week18Guides: Record<string, LessonGuide> = {
    "go-w18-1": {
        lessonId: "go-w18-1",
        background: [
            "【go vet】检测常见错误如 printf 格式不匹配。",
            "【goimports】自动管理 import 语句。",
            "【golangci-lint】集成多个 linter 的工具。"
        ],
        keyDifficulties: ["【CI 集成】在 CI 中运行 linter。", "【配置调优】根据项目需求配置规则。"],
        handsOnPath: ["运行 go vet", "配置 golangci-lint", "集成到 CI"],
        selfCheck: ["go vet 检查什么？", "golangci-lint 的优势？"],
        extensions: ["学习自定义 linter 规则"],
        sourceUrls: ["https://pkg.go.dev/cmd/vet", "https://golangci-lint.run/", "https://staticcheck.io/"]
    },
    "go-w18-2": {
        lessonId: "go-w18-2",
        background: [
            "【pprof】CPU 和内存性能分析工具。",
            "【trace】追踪 goroutine 调度和执行。",
            "【net/http/pprof】在线性能分析端点。"
        ],
        keyDifficulties: ["【采样开销】pprof 有一定性能开销。", "【分析技巧】学会阅读火焰图。"],
        handsOnPath: ["生成 CPU profile", "使用 go tool pprof 分析", "添加 pprof HTTP 端点"],
        selfCheck: ["如何获取 CPU profile？", "trace 和 pprof 的区别？"],
        extensions: ["学习连续性能分析"],
        sourceUrls: ["https://go.dev/blog/pprof", "https://pkg.go.dev/runtime/pprof", "https://go.dev/blog/execution-tracer"]
    },
    "go-w18-3": {
        lessonId: "go-w18-3",
        background: [
            "【govulncheck】检测已知安全漏洞。",
            "【构建标签】//go:build 控制条件编译。",
            "【go generate】运行代码生成工具。"
        ],
        keyDifficulties: ["【漏洞管理】定期运行 govulncheck。", "【构建标签语法】新语法 //go:build 替代旧语法。"],
        handsOnPath: ["运行 govulncheck 扫描", "使用构建标签", "编写 go:generate 指令"],
        selfCheck: ["govulncheck 检查什么？", "构建标签的作用？"],
        extensions: ["学习 SAST 安全扫描"],
        sourceUrls: ["https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck", "https://pkg.go.dev/go/build#hdr-Build_Constraints", "https://go.dev/blog/generate"]
    },
    "go-w18-4": {
        lessonId: "go-w18-4",
        background: [
            "【交叉编译】GOOS 和 GOARCH 控制目标平台。",
            "【多阶段构建】Docker 多阶段构建减小镜像。",
            "【reflect】运行时类型检查和操作。"
        ],
        keyDifficulties: ["【CGO 交叉编译】CGO 增加交叉编译复杂度。", "【unsafe 包】谨慎使用 unsafe 包。"],
        handsOnPath: ["交叉编译到不同平台", "编写多阶段 Dockerfile", "使用 reflect 包"],
        selfCheck: ["如何交叉编译到 Linux？", "多阶段构建的优势？"],
        extensions: ["学习 CGO 和 unsafe"],
        sourceUrls: ["https://go.dev/doc/install/source#environment", "https://docs.docker.com/build/building/multi-stage/", "https://pkg.go.dev/reflect"]
    }
}

export const week18Quizzes: Record<string, QuizQuestion[]> = {
    "go-w18-1": [
        { id: "go-w18-1-q1", question: "go vet 的作用是什么？", options: ["格式化代码", "检测常见错误", "运行测试", "编译代码"], answer: 1, rationale: "go vet 是静态分析工具，检测常见错误如 printf 格式不匹配。" },
        { id: "go-w18-1-q2", question: "golangci-lint 是什么？", options: ["单一 linter", "集成多个 linter 的工具", "格式化工具", "测试框架"], answer: 1, rationale: "golangci-lint 集成了多个 linter，提供统一的配置和运行方式。" }
    ],
    "go-w18-2": [
        { id: "go-w18-2-q1", question: "pprof 用于什么？", options: ["代码格式化", "CPU 和内存性能分析", "测试", "部署"], answer: 1, rationale: "pprof 是 Go 的性能分析工具，用于 CPU 和内存分析。" }
    ],
    "go-w18-3": [
        { id: "go-w18-3-q1", question: "govulncheck 检查什么？", options: ["代码风格", "已知安全漏洞", "性能问题", "内存泄漏"], answer: 1, rationale: "govulncheck 扫描代码中使用的依赖是否有已知安全漏洞。" }
    ],
    "go-w18-4": [
        { id: "go-w18-4-q1", question: "如何交叉编译到 Linux/amd64？", options: ["go build -os linux", "GOOS=linux GOARCH=amd64 go build", "go cross linux", "不支持"], answer: 1, rationale: "使用环境变量 GOOS 和 GOARCH 控制交叉编译目标平台。" }
    ]
}
