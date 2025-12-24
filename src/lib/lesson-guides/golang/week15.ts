import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week15Guides: Record<string, LessonGuide> = {
    "go-w15-1": {
        lessonId: "go-w15-1",
        background: [
            "【testing 包】Go 内置测试框架，测试文件以 _test.go 结尾。",
            "【Test 函数】测试函数以 Test 开头，参数为 *testing.T。",
            "【报告结果】t.Error/Fatal/Log 报告测试结果。"
        ],
        keyDifficulties: ["【Fatal vs Error】Fatal 立即终止测试，Error 继续执行。", "【测试隔离】每个测试函数独立运行。"],
        handsOnPath: ["编写第一个测试", "使用 t.Run 子测试", "运行 go test"],
        selfCheck: ["测试文件的命名规则？", "t.Error 和 t.Fatal 的区别？"],
        extensions: ["学习 testing.Short() 跳过慢测试"],
        sourceUrls: ["https://gobyexample.com/testing", "https://pkg.go.dev/testing", "https://go.dev/wiki/TableDrivenTests"]
    },
    "go-w15-2": {
        lessonId: "go-w15-2",
        background: [
            "【表驱动测试】测试数据与逻辑分离，易于添加用例。",
            "【t.Run】创建子测试，可以并行运行。",
            "【t.Parallel】标记测试可以并行执行。"
        ],
        keyDifficulties: ["【循环变量】Go 1.22 前需要捕获循环变量。", "【子测试名称】子测试名用于过滤和报告。"],
        handsOnPath: ["重构为表驱动测试", "使用 t.Run 和 t.Parallel", "使用 -run 过滤测试"],
        selfCheck: ["表驱动测试的优点？", "如何运行特定的子测试？"],
        extensions: ["学习 go-cmp 进行复杂比较"],
        sourceUrls: ["https://go.dev/wiki/TableDrivenTests", "https://go.dev/blog/subtests", "https://pkg.go.dev/testing#hdr-Subtests_and_Sub_benchmarks"]
    },
    "go-w15-3": {
        lessonId: "go-w15-3",
        background: [
            "【接口 Mock】通过接口注入依赖便于测试。",
            "【httptest】httptest.NewServer 创建测试服务器。",
            "【httptest.Recorder】记录 HTTP 响应用于断言。"
        ],
        keyDifficulties: ["【依赖注入】设计接口便于测试时替换实现。", "【服务器关闭】使用 defer server.Close()。"],
        handsOnPath: ["编写 Mock 实现", "使用 httptest 测试 HTTP 处理器", "测试 HTTP 客户端"],
        selfCheck: ["如何 Mock 数据库？", "httptest.NewRecorder 的作用？"],
        extensions: ["学习 testify, gomock"],
        sourceUrls: ["https://pkg.go.dev/net/http/httptest", "https://github.com/stretchr/testify", "https://github.com/uber-go/mock"]
    },
    "go-w15-4": {
        lessonId: "go-w15-4",
        background: [
            "【Benchmark】基准函数以 Benchmark 开头，参数为 *testing.B。",
            "【b.N】框架自动调整 N 直到结果稳定。",
            "【覆盖率】go test -cover 查看覆盖率。"
        ],
        keyDifficulties: ["【避免优化】注意编译器可能优化掉无效代码。", "【稳定环境】基准测试需要稳定的运行环境。"],
        handsOnPath: ["编写基准测试", "使用 -bench 运行", "查看和提高覆盖率"],
        selfCheck: ["基准测试的函数签名？", "如何生成覆盖率报告？"],
        extensions: ["学习 benchstat 比较基准结果"],
        sourceUrls: ["https://gobyexample.com/testing-and-benchmarking", "https://go.dev/blog/pprof", "https://go.dev/blog/cover"]
    }
}

export const week15Quizzes: Record<string, QuizQuestion[]> = {
    "go-w15-1": [
        { id: "go-w15-1-q1", question: "测试文件的后缀是什么？", options: [".test.go", "_test.go", ".spec.go", "_spec.go"], answer: 1, rationale: "Go 测试文件必须以 _test.go 结尾。" },
        { id: "go-w15-1-q2", question: "测试函数的命名规则是什么？", options: ["test_xxx", "TestXxx", "xxx_test", "任意"], answer: 1, rationale: "测试函数必须以 Test 开头，后跟大写字母。" }
    ],
    "go-w15-2": [
        { id: "go-w15-2-q1", question: "表驱动测试的主要优点是什么？", options: ["更快", "数据与逻辑分离，易于添加用例", "自动生成", "无需断言"], answer: 1, rationale: "表驱动测试将测试数据组织在表格中，逻辑只写一次。" }
    ],
    "go-w15-3": [
        { id: "go-w15-3-q1", question: "httptest.NewRecorder 的作用是什么？", options: ["发送请求", "记录 HTTP 响应用于测试", "启动服务器", "Mock 数据库"], answer: 1, rationale: "ResponseRecorder 实现 ResponseWriter，记录响应内容用于断言。" }
    ],
    "go-w15-4": [
        { id: "go-w15-4-q1", question: "基准测试函数以什么开头？", options: ["Test", "Benchmark", "Perf", "Speed"], answer: 1, rationale: "基准测试函数必须以 Benchmark 开头，参数为 *testing.B。" },
        { id: "go-w15-4-q2", question: "如何查看测试覆盖率？", options: ["go test -v", "go test -cover", "go cover", "go test -bench"], answer: 1, rationale: "使用 go test -cover 查看覆盖率概要。" }
    ]
}
