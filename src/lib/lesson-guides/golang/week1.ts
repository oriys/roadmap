import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week1Guides: Record<string, LessonGuide> = {
    "go-w1-1": {
        lessonId: "go-w1-1",
        background: [
            "【安装要点】官方文档：安装 Go 需要先移除旧版本，'不要将归档文件解压到现有的 /usr/local/go 目录，这会导致 Go 安装损坏'——必须删除旧版本后再安装新版本。",
            "【环境变量】安装后需要配置 PATH 环境变量，添加 `export PATH=$PATH:/usr/local/go/bin` 到 `$HOME/.profile` 或 `/etc/profile`（系统范围安装）。",
            "【验证安装】安装完成后使用 `go version` 命令验证。macOS 使用 pkg 安装包会自动配置 PATH，Windows 需要重启命令提示符。",
            "【IDE 选择】官方推荐 VS Code + Go 扩展或 GoLand IDE。VS Code 扩展提供代码补全、调试、重构等功能。",
            "【模块模式】Go 1.11+ 引入 Go Modules 作为官方依赖管理方案，不再依赖 GOPATH 组织代码。现代 Go 开发推荐使用 Go Modules。"
        ],
        keyDifficulties: [
            "【旧版本冲突】在 Linux 上安装新版本前必须完全删除 /usr/local/go 目录，否则会导致安装损坏。使用 `rm -rf /usr/local/go` 命令彻底清除。",
            "【环境变量生效】修改 profile 文件后需要执行 `source $HOME/.profile` 或重新打开终端才能生效。常见问题是修改后未刷新环境。",
            "【GOPATH vs Go Modules】历史上 Go 使用 GOPATH 管理代码和依赖，现代 Go（1.16+）默认使用 Go Modules。新项目应使用 `go mod init` 初始化模块。",
            "【多版本管理】如需同时使用多个 Go 版本，可以使用 gvm 或官方的 go install golang.org/dl/goX.Y.Z@latest 方式安装多版本。"
        ],
        handsOnPath: [
            "访问 go.dev/dl 下载适合操作系统的安装包（macOS .pkg、Windows .msi、Linux .tar.gz）。",
            "Linux 用户执行：`rm -rf /usr/local/go && tar -C /usr/local -xzf go1.XX.X.linux-amd64.tar.gz`",
            "配置环境变量：将 `export PATH=$PATH:/usr/local/go/bin` 添加到 shell 配置文件。",
            "执行 `source ~/.profile` 或重启终端使环境变量生效。",
            "运行 `go version` 验证安装成功，应输出类似 `go version go1.XX.X linux/amd64`。",
            "运行 `go env` 查看所有 Go 环境变量配置。"
        ],
        selfCheck: [
            "Go 安装到哪个默认目录？为什么安装新版本前必须删除旧目录？",
            "如何验证 Go 是否正确安装？应该使用什么命令？",
            "环境变量 PATH 需要添加什么路径才能在任意位置运行 go 命令？",
            "修改了 .profile 文件后，如何让新的环境变量立即生效？",
            "GOPATH 和 Go Modules 有什么区别？现代 Go 开发推荐使用哪种？",
            "如何查看当前 Go 环境的所有配置信息？"
        ],
        extensions: [
            "探索 Go 官方 Getting Started 教程，约 10 分钟完成第一个 Go 模块：go.dev/doc/tutorial/getting-started",
            "了解 VS Code Go 扩展的高级功能：代码补全、调试、测试运行、重构工具。",
            "学习使用 gopls（Go 语言服务器）提升开发体验，支持智能补全和跳转定义。",
            "研究 Go 多版本管理工具：gvm 或官方的 golang.org/dl 方式。"
        ],
        sourceUrls: [
            "https://go.dev/dl/",
            "https://go.dev/doc/install",
            "https://marketplace.visualstudio.com/items?itemName=golang.Go"
        ]
    },
    "go-w1-2": {
        lessonId: "go-w1-2",
        background: [
            "【程序结构】Go by Example：每个可执行 Go 程序必须包含 `package main` 声明和 `func main()` 函数。main 包是程序的入口点。",
            "【包声明】`package main` 表示这是一个可执行程序而非库。其他包名（如 package mylib）用于创建可重用的库。",
            "【导入语句】`import \"fmt\"` 导入标准库的格式化 I/O 包。fmt 包提供 Println、Printf、Sprintf 等函数。",
            "【main 函数】`func main()` 是程序执行的起点。Go 程序从 main 函数开始，main 函数结束时程序退出。",
            "【Hello World】最简单的 Go 程序：package main + import \"fmt\" + func main() { fmt.Println(\"hello world\") }。"
        ],
        keyDifficulties: [
            "【包名规则】package 名必须与目录名一致（main 包除外）。main 包的文件可以放在任意目录，但只能有一个 main 函数。",
            "【可见性规则】Go 使用大小写控制可见性：首字母大写的标识符（如 Println）可被外部包访问，小写的只能在包内使用。",
            "【导入未使用】Go 编译器要求导入的包必须被使用，否则编译失败。这是设计决策，避免依赖膨胀。",
            "【分号省略】Go 词法分析器会在特定标记后自动插入分号，因此大括号 { 不能另起一行（会导致语法错误）。"
        ],
        handsOnPath: [
            "创建目录 hello-world 并进入：`mkdir hello-world && cd hello-world`",
            "创建 main.go 文件，写入 Hello World 程序代码。",
            "使用 `go run main.go` 直接编译运行，观察输出 'hello world'。",
            "使用 `go build main.go` 编译生成可执行文件，然后运行 `./main`。",
            "修改 Println 为 Printf，使用格式化输出：`fmt.Printf(\"Hello %s!\\n\", \"Go\")`",
            "尝试导入一个未使用的包，观察编译错误信息。"
        ],
        selfCheck: [
            "package main 声明表示什么？与其他包名有何不同？",
            "func main() 在 Go 程序中扮演什么角色？程序从哪里开始执行？",
            "fmt.Println 和 fmt.Printf 有什么区别？",
            "为什么 Go 要求导入的包必须被使用？这样设计有什么好处？",
            "Go 的可见性规则是什么？如何让一个函数可以被其他包调用？",
            "为什么 { 不能放在新的一行？这与 Go 的哪个特性有关？"
        ],
        extensions: [
            "完成 A Tour of Go 官方教程的前几章：go.dev/tour",
            "探索 fmt 包的其他函数：Sprintf（返回字符串）、Fprintf（写入 io.Writer）。",
            "了解 Go 程序的编译过程：词法分析、语法分析、类型检查、代码生成。",
            "学习 go doc 命令查看包文档：`go doc fmt` 和 `go doc fmt.Println`。"
        ],
        sourceUrls: [
            "https://go.dev/tour/welcome/1",
            "https://gobyexample.com/hello-world",
            "https://roadmap.sh/golang"
        ]
    },
    "go-w1-3": {
        lessonId: "go-w1-3",
        background: [
            "【go build】官方文档：'编译指定的包及其依赖，但不安装结果'——生成可执行文件（主包）或仅检查编译（库包）。忽略 *_test.go 文件。",
            "【go run】'编译并直接运行 Go 程序'——适合开发调试，不生成持久化的可执行文件。支持文件列表或导入路径。",
            "【go install】'编译包并将可执行文件安装到 $GOBIN 目录'——默认是 $GOPATH/bin。支持版本后缀如 @latest、@v1.0.0。",
            "【go fmt】'对包源代码执行 gofmt -l -w'——自动格式化代码，保持团队代码风格一致。修改文件后打印文件名。",
            "【go test】'自动化测试指定包'——编译 *_test.go 文件，自动执行 go vet 静态检查。支持测试、基准测试、模糊测试。",
            "【go mod】模块管理命令集：init 初始化模块、tidy 清理依赖、download 下载模块、vendor 创建依赖副本。"
        ],
        keyDifficulties: [
            "【go run vs go build】go run 直接运行适合开发，go build 生成可执行文件适合分发。go run 默认不生成调试信息。",
            "【构建标志】常用标志：-o 指定输出文件、-v 打印编译的包名、-x 打印执行的命令、-race 启用数据竞态检测。",
            "【go install 版本】支持 @latest 安装最新版、@v1.2.3 安装特定版本、@none 移除依赖。",
            "【go test 缓存】成功的测试结果会被缓存。使用 go clean -testcache 清除测试缓存，或使用 -count=1 禁用缓存。",
            "【构建约束】使用 //go:build 指令控制条件编译，支持操作系统（linux/windows/darwin）、架构（amd64/arm64）等标签。"
        ],
        handsOnPath: [
            "运行 `go version` 和 `go env` 查看当前 Go 版本和环境配置。",
            "使用 `go run main.go` 直接运行程序，观察输出。",
            "使用 `go build -o myapp main.go` 编译并指定输出文件名。",
            "运行 `go fmt ./...` 格式化当前目录下所有 Go 文件。",
            "使用 `go doc fmt.Println` 查看函数文档。",
            "运行 `go mod init example.com/myapp` 初始化模块。",
            "使用 `go get github.com/some/package@latest` 添加依赖。",
            "运行 `go mod tidy` 清理未使用的依赖。"
        ],
        selfCheck: [
            "go run 和 go build 有什么区别？各自适合什么场景？",
            "go build -race 标志的作用是什么？什么时候应该使用它？",
            "go install 和 go build 有什么区别？可执行文件安装到哪里？",
            "go fmt 命令的作用是什么？为什么 Go 强制统一代码风格？",
            "go mod tidy 命令做了什么？为什么需要定期运行它？",
            "如何查看一个包或函数的文档？",
            "什么是构建约束？如何让代码只在 Linux 上编译？"
        ],
        extensions: [
            "深入学习 go build 的链接器标志 -ldflags，用于注入版本信息：`go build -ldflags \"-X main.version=1.0.0\"`",
            "探索 go generate 命令用于代码生成，结合 //go:generate 指令。",
            "学习 go vet 静态分析工具，检测常见错误如 printf 格式字符串不匹配。",
            "了解 go tool 命令访问底层工具：pprof（性能分析）、trace（执行追踪）、cover（覆盖率）。"
        ],
        sourceUrls: [
            "https://pkg.go.dev/cmd/go",
            "https://go.dev/blog/go-command",
            "https://gobyexample.com/"
        ]
    }
}

export const week1Quizzes: Record<string, QuizQuestion[]> = {
    "go-w1-1": [
        {
            id: "go-w1-1-q1",
            question: "在 Linux 上安装新版本 Go 之前，为什么必须先删除旧的 /usr/local/go 目录？",
            options: [
                "为了节省磁盘空间",
                "因为直接解压到现有目录会导致 Go 安装损坏",
                "旧版本会自动升级",
                "Go 只允许安装一个版本"
            ],
            answer: 1,
            rationale: "官方文档明确警告：'不要将归档文件解压到现有的 /usr/local/go 目录，这会导致 Go 安装损坏'。必须先删除旧版本再安装新版本。"
        },
        {
            id: "go-w1-1-q2",
            question: "安装 Go 后，需要将什么路径添加到 PATH 环境变量？",
            options: [
                "/usr/local/bin",
                "/usr/local/go/bin",
                "/home/go/bin",
                "/opt/go/bin"
            ],
            answer: 1,
            rationale: "官方安装指南指定：将 `export PATH=$PATH:/usr/local/go/bin` 添加到配置文件，这样才能在任意位置运行 go 命令。"
        },
        {
            id: "go-w1-1-q3",
            question: "修改了 $HOME/.profile 添加环境变量后，如何让更改立即生效？",
            options: [
                "重启电脑",
                "执行 source $HOME/.profile 或重新打开终端",
                "运行 go env",
                "不需要任何操作，立即生效"
            ],
            answer: 1,
            rationale: "官方文档说明：修改 profile 文件后，需要执行 `source $HOME/.profile` 应用更改，或者关闭并重新打开终端。"
        },
        {
            id: "go-w1-1-q4",
            question: "如何验证 Go 是否正确安装？",
            options: [
                "运行 go check",
                "运行 go version",
                "运行 go verify",
                "运行 go status"
            ],
            answer: 1,
            rationale: "官方安装指南的最后一步是运行 `go version` 验证安装，应输出类似 'go version go1.XX.X linux/amd64' 的信息。"
        },
        {
            id: "go-w1-1-q5",
            question: "在 macOS 上使用 .pkg 安装包安装 Go 后，PATH 环境变量需要手动配置吗？",
            options: [
                "需要，必须手动添加到 .profile",
                "不需要，安装程序会自动配置 PATH",
                "需要，但只添加 GOPATH",
                "取决于 Go 版本"
            ],
            answer: 1,
            rationale: "官方文档说明：macOS 使用 .pkg 安装包时，'自动安装到 /usr/local/go，自动配置 PATH（可能需要重启终端）'。"
        },
        {
            id: "go-w1-1-q6",
            question: "Go 的默认安装路径是什么？",
            options: [
                "/opt/go",
                "/usr/bin/go",
                "/usr/local/go",
                "/home/go"
            ],
            answer: 2,
            rationale: "官方文档指定 Go 安装到 /usr/local/go 目录。删除命令也是 `rm -rf /usr/local/go`。"
        },
        {
            id: "go-w1-1-q7",
            question: "在 Windows 上安装 Go 后，需要做什么才能使用 go 命令？",
            options: [
                "立即可用",
                "关闭并重新打开命令提示符",
                "重启电脑",
                "运行 go init"
            ],
            answer: 1,
            rationale: "官方文档说明 Windows 安装后：'需要关闭并重新打开命令提示符'，这样新的环境变量才能生效。"
        },
        {
            id: "go-w1-1-q8",
            question: "安装 Go 后，可以访问什么教程开始学习？",
            options: [
                "Go Tutorial 需要额外购买",
                "Getting Started 教程，约 10 分钟完成第一个程序",
                "只能阅读源代码学习",
                "必须先完成认证"
            ],
            answer: 1,
            rationale: "官方安装指南建议安装后访问 Getting Started 教程：'约 10 分钟完成第一个 Go 程序'。"
        },
        {
            id: "go-w1-1-q9",
            question: "如何查看当前 Go 环境的所有配置信息？",
            options: [
                "go config",
                "go env",
                "go info",
                "go settings"
            ],
            answer: 1,
            rationale: "使用 `go env` 命令可以打印所有 Go 环境变量配置，包括 GOPATH、GOROOT、GOOS、GOARCH 等。"
        },
        {
            id: "go-w1-1-q10",
            question: "现代 Go 开发推荐使用什么来管理依赖？",
            options: [
                "GOPATH",
                "dep 工具",
                "Go Modules",
                "手动下载"
            ],
            answer: 2,
            rationale: "Go 1.11+ 引入 Go Modules 作为官方依赖管理方案。Go 1.16+ 默认启用 Go Modules，不再依赖 GOPATH。"
        },
        {
            id: "go-w1-1-q11",
            question: "推荐的 Go 开发 IDE 或编辑器是什么？",
            options: [
                "只能使用 GoLand",
                "VS Code + Go 扩展或 GoLand",
                "只能使用命令行",
                "必须使用 Vim"
            ],
            answer: 1,
            rationale: "官方推荐 VS Code + Go 扩展或 GoLand IDE，都提供代码补全、调试、重构等功能。"
        },
        {
            id: "go-w1-1-q12",
            question: "Linux 上安装 Go 的完整命令是什么？",
            options: [
                "apt install go",
                "rm -rf /usr/local/go && tar -C /usr/local -xzf goX.X.X.linux-amd64.tar.gz",
                "yum install golang",
                "snap install go"
            ],
            answer: 1,
            rationale: "官方安装指南给出的命令是：先删除旧版本 `rm -rf /usr/local/go`，然后解压到 /usr/local：`tar -C /usr/local -xzf goX.X.X.linux-amd64.tar.gz`。"
        }
    ],
    "go-w1-2": [
        {
            id: "go-w1-2-q1",
            question: "Go 程序的入口点是什么？",
            options: [
                "任意函数都可以",
                "package main 中的 func main()",
                "func init()",
                "func start()"
            ],
            answer: 1,
            rationale: "Go by Example 说明：每个可执行 Go 程序必须包含 `package main` 声明和 `func main()` 函数。main 函数是程序执行的起点。"
        },
        {
            id: "go-w1-2-q2",
            question: "package main 声明表示什么？",
            options: [
                "这是一个库包",
                "这是一个可执行程序",
                "这是一个测试包",
                "这是一个插件包"
            ],
            answer: 1,
            rationale: "package main 表示这是一个可执行程序而非库。其他包名（如 package mylib）用于创建可重用的库。"
        },
        {
            id: "go-w1-2-q3",
            question: "以下哪个命令可以直接编译运行 Go 程序？",
            options: [
                "go build hello.go",
                "go run hello.go",
                "go exec hello.go",
                "go start hello.go"
            ],
            answer: 1,
            rationale: "Go by Example 说明：使用 `go run hello-world.go` 命令直接运行程序。go build 则是生成可执行文件后手动运行。"
        },
        {
            id: "go-w1-2-q4",
            question: "go build 和 go run 的主要区别是什么？",
            options: [
                "没有区别",
                "go build 生成可执行文件，go run 直接运行不保存文件",
                "go run 更快",
                "go build 只能用于库"
            ],
            answer: 1,
            rationale: "Go by Example 说明：go run 直接编译运行，go build 将代码编译成可执行文件后通过 ./hello-world 运行。编译方式适合需要独立分发的应用程序。"
        },
        {
            id: "go-w1-2-q5",
            question: "fmt 包的主要用途是什么？",
            options: [
                "文件管理",
                "格式化 I/O，如 Println、Printf",
                "网络通信",
                "数据库操作"
            ],
            answer: 1,
            rationale: "fmt 包是 Go 标准库的格式化 I/O 包，提供 Println、Printf、Sprintf 等函数用于格式化输出。"
        },
        {
            id: "go-w1-2-q6",
            question: "如果导入了一个包但没有使用，Go 编译器会怎么做？",
            options: [
                "发出警告但继续编译",
                "编译失败，报错未使用的导入",
                "自动移除未使用的导入",
                "忽略这个导入"
            ],
            answer: 1,
            rationale: "Go 编译器要求导入的包必须被使用，否则编译失败。这是设计决策，避免依赖膨胀。"
        },
        {
            id: "go-w1-2-q7",
            question: "Go 如何控制标识符的可见性？",
            options: [
                "使用 public/private 关键字",
                "首字母大写可导出，小写私有",
                "使用 export 关键字",
                "所有标识符都是公开的"
            ],
            answer: 1,
            rationale: "Go 使用大小写控制可见性：首字母大写的标识符（如 Println）可被外部包访问，小写的只能在包内使用。"
        },
        {
            id: "go-w1-2-q8",
            question: "为什么 Go 中 { 不能放在新的一行？",
            options: [
                "这是代码风格偏好",
                "Go 词法分析器会自动插入分号，导致语法错误",
                "编译器不支持",
                "为了节省空间"
            ],
            answer: 1,
            rationale: "Go 词法分析器会在特定标记后自动插入分号，因此大括号 { 不能另起一行（会导致语法错误）。"
        },
        {
            id: "go-w1-2-q9",
            question: "Hello World 程序的最小结构包含哪些部分？",
            options: [
                "只需要 main 函数",
                "package main + import \"fmt\" + func main()",
                "只需要 package main",
                "import 语句是可选的"
            ],
            answer: 1,
            rationale: "Go by Example 展示的 Hello World 程序包含三个核心部分：package main 声明、import \"fmt\" 导入语句、func main() 主函数。"
        },
        {
            id: "go-w1-2-q10",
            question: "fmt.Println 和 fmt.Printf 有什么区别？",
            options: [
                "没有区别",
                "Println 自动换行，Printf 需要格式化字符串",
                "Printf 更快",
                "Println 只能打印数字"
            ],
            answer: 1,
            rationale: "fmt.Println 自动在输出末尾添加换行符，fmt.Printf 使用格式化字符串，需要显式添加 \\n 换行。"
        },
        {
            id: "go-w1-2-q11",
            question: "go build 编译后的可执行文件在 Windows 上会有什么特点？",
            options: [
                "没有后缀名",
                "自动添加 .exe 后缀",
                "添加 .bin 后缀",
                "添加 .out 后缀"
            ],
            answer: 1,
            rationale: "官方文档说明：主包输出可执行文件时，Windows 系统会自动添加 .exe 后缀。"
        },
        {
            id: "go-w1-2-q12",
            question: "包名与目录名的关系是什么？",
            options: [
                "没有关系",
                "包名必须与目录名一致（main 包除外）",
                "包名必须比目录名短",
                "目录名无所谓"
            ],
            answer: 1,
            rationale: "Go 的约定是包名必须与目录名一致，但 main 包是例外，main 包的文件可以放在任意目录。"
        }
    ],
    "go-w1-3": [
        {
            id: "go-w1-3-q1",
            question: "go build 命令的主要作用是什么？",
            options: [
                "运行程序",
                "编译指定的包及其依赖，但不安装结果",
                "下载依赖",
                "格式化代码"
            ],
            answer: 1,
            rationale: "官方文档：go build '编译指定的包及其依赖，但不安装结果'——生成可执行文件但不安装到 $GOBIN。"
        },
        {
            id: "go-w1-3-q2",
            question: "go build 时会编译 *_test.go 文件吗？",
            options: [
                "会编译所有文件",
                "不会，go build 忽略 *_test.go 文件",
                "只编译测试文件",
                "取决于参数"
            ],
            answer: 1,
            rationale: "官方文档明确说明：go build '忽略 *_test.go 文件'。测试文件只在 go test 时编译。"
        },
        {
            id: "go-w1-3-q3",
            question: "go install 将可执行文件安装到哪个目录？",
            options: [
                "/usr/local/bin",
                "$GOBIN（默认 $GOPATH/bin）",
                "当前目录",
                "/usr/bin"
            ],
            answer: 1,
            rationale: "官方文档：go install '编译包并将可执行文件安装到 $GOBIN 目录'——默认是 $GOPATH/bin。"
        },
        {
            id: "go-w1-3-q4",
            question: "如何使用 go install 安装特定版本的包？",
            options: [
                "不支持版本指定",
                "使用 @version 后缀，如 @v1.0.0 或 @latest",
                "使用 -version 标志",
                "使用 --tag 参数"
            ],
            answer: 1,
            rationale: "官方文档：go install '支持版本后缀如 @latest、@v1.0.0'，例如 `go install example.com/pkg@v1.2.3`。"
        },
        {
            id: "go-w1-3-q5",
            question: "go fmt 命令的作用是什么？",
            options: [
                "检查代码错误",
                "对包源代码执行 gofmt -l -w，自动格式化",
                "编译代码",
                "运行测试"
            ],
            answer: 1,
            rationale: "官方文档：go fmt '对包源代码执行 gofmt -l -w'——自动格式化代码，保持团队代码风格一致。"
        },
        {
            id: "go-w1-3-q6",
            question: "go test 命令会自动执行什么检查？",
            options: [
                "不执行任何检查",
                "自动执行 go vet 静态分析",
                "只检查语法",
                "只检查依赖"
            ],
            answer: 1,
            rationale: "官方文档：go test '自动执行 go vet'静态检查，在运行测试前检测常见错误。"
        },
        {
            id: "go-w1-3-q7",
            question: "go mod init 命令的作用是什么？",
            options: [
                "下载依赖",
                "初始化一个新的 Go 模块，创建 go.mod 文件",
                "更新依赖",
                "删除依赖"
            ],
            answer: 1,
            rationale: "官方文档：go mod init '初始化模块'，创建 go.mod 文件定义模块路径和依赖。"
        },
        {
            id: "go-w1-3-q8",
            question: "go mod tidy 命令做什么？",
            options: [
                "只下载依赖",
                "添加缺失的模块，移除未使用的模块",
                "只删除依赖",
                "格式化 go.mod"
            ],
            answer: 1,
            rationale: "官方文档：go mod tidy '添加缺失的模块，移除未使用的模块，更新 go.sum'——清理依赖关系。"
        },
        {
            id: "go-w1-3-q9",
            question: "go build -race 标志的作用是什么？",
            options: [
                "加快编译速度",
                "启用数据竞态检测",
                "减小可执行文件大小",
                "启用优化"
            ],
            answer: 1,
            rationale: "官方文档列出的常用标志包括 '-race: 启用数据竞态检测'，用于检测并发程序中的数据竞争问题。"
        },
        {
            id: "go-w1-3-q10",
            question: "如何查看 fmt.Println 函数的文档？",
            options: [
                "go help fmt.Println",
                "go doc fmt.Println",
                "go info fmt.Println",
                "go man fmt.Println"
            ],
            answer: 1,
            rationale: "官方文档示例：使用 'go doc json.Decoder.Decode' 查看特定方法文档，同理 'go doc fmt.Println' 查看 Println 文档。"
        },
        {
            id: "go-w1-3-q11",
            question: "go clean -testcache 的作用是什么？",
            options: [
                "删除所有源代码",
                "使测试缓存过期",
                "清除模块缓存",
                "删除可执行文件"
            ],
            answer: 1,
            rationale: "官方文档：go clean 的 '-testcache: 过期测试缓存'——成功的测试结果会被缓存，此命令清除这些缓存。"
        },
        {
            id: "go-w1-3-q12",
            question: "如何使用 go get 移除一个依赖？",
            options: [
                "go remove package",
                "go get example.com/pkg@none",
                "go delete package",
                "go uninstall package"
            ],
            answer: 1,
            rationale: "官方文档示例：'go get example.com/mod@none' 用于移除依赖，@none 表示移除该包。"
        }
    ]
}
