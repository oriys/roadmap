import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week17Guides: Record<string, LessonGuide> = {
    "go-w17-1": {
        lessonId: "go-w17-1",
        background: [
            "【Cobra】最流行的 CLI 框架，支持子命令和参数。",
            "【urfave/cli】简单易用的 CLI 库。",
            "【Bubbletea】构建交互式终端界面。"
        ],
        keyDifficulties: ["【命令结构】设计好命令层级。", "【配置文件】结合 Viper 处理配置。"],
        handsOnPath: ["使用 Cobra 创建 CLI", "添加子命令和参数", "使用 Bubbletea 创建 TUI"],
        selfCheck: ["Cobra 的命令结构？", "如何添加持久化标志？"],
        extensions: ["学习 Cobra 代码生成工具"],
        sourceUrls: ["https://cobra.dev/", "https://cli.urfave.org/", "https://github.com/charmbracelet/bubbletea"]
    },
    "go-w17-2": {
        lessonId: "go-w17-2",
        background: [
            "【pgx】高性能 PostgreSQL 驱动，支持连接池。",
            "【GORM】全功能 ORM，支持迁移和关联。",
            "【sqlx】database/sql 的增强版本。"
        ],
        keyDifficulties: ["【ORM vs 原生】ORM 方便但有性能开销。", "【连接池】合理配置连接池大小。"],
        handsOnPath: ["使用 pgx 连接数据库", "使用 GORM 定义模型", "执行 CRUD 操作"],
        selfCheck: ["GORM 的优缺点？", "如何配置连接池？"],
        extensions: ["学习数据库迁移工具"],
        sourceUrls: ["https://github.com/jackc/pgx", "https://gorm.io/docs/", "https://jmoiron.github.io/sqlx/"]
    },
    "go-w17-3": {
        lessonId: "go-w17-3",
        background: [
            "【Zap】Uber 开源的高性能结构化日志库。",
            "【Zerolog】零分配 JSON 日志库。",
            "【Melody】简化 WebSocket 服务端开发。"
        ],
        keyDifficulties: ["【结构化日志】使用字段而非字符串拼接。", "【性能考量】高流量下日志库选择重要。"],
        handsOnPath: ["使用 Zap 记录日志", "配置日志级别和输出", "使用 Melody 处理 WebSocket"],
        selfCheck: ["结构化日志的优势？", "Zap 和 Zerolog 的区别？"],
        extensions: ["学习日志聚合和分析"],
        sourceUrls: ["https://pkg.go.dev/go.uber.org/zap", "https://github.com/rs/zerolog", "https://github.com/olahol/melody"]
    }
}

export const week17Quizzes: Record<string, QuizQuestion[]> = {
    "go-w17-1": [
        { id: "go-w17-1-q1", question: "Cobra 的主要用途是什么？", options: ["Web 框架", "CLI 命令行工具框架", "数据库 ORM", "日志库"], answer: 1, rationale: "Cobra 是最流行的 Go CLI 框架，用于构建命令行工具。" }
    ],
    "go-w17-2": [
        { id: "go-w17-2-q1", question: "GORM 是什么类型的库？", options: ["HTTP 客户端", "ORM 对象关系映射", "日志库", "测试框架"], answer: 1, rationale: "GORM 是 Go 的全功能 ORM 库，用于数据库操作。" }
    ],
    "go-w17-3": [
        { id: "go-w17-3-q1", question: "Zap 日志库的主要特点是什么？", options: ["最简单", "高性能结构化日志", "官方库", "无依赖"], answer: 1, rationale: "Zap 是 Uber 开源的高性能结构化日志库。" }
    ]
}
