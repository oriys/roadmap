import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const golangStages: Stage[] = [
  {
    id: "go-foundation",
    title: "阶段一：Go 基础入门",
    duration: "第 1-3 周",
    goal: "搭建开发环境，掌握 Go 语言基础语法与数据类型。",
    weeks: [
      {
        id: "go-w1",
        title: "第 1 周：环境搭建与第一个程序",
        summary: "安装 Go 环境，理解 go 命令工具链，编写并运行 Hello World。",
        overview: "本周是 Go 语言学习的起点，重点搭建开发环境并熟悉基本的工具链和程序结构。",
        keyPoints: [
          "安装 Go 并配置 GOPATH/GOROOT。",
          "理解 go run、go build、go install 等核心命令。",
          "了解 Go 程序的基本结构：package、import、main 函数。",
        ],
        lessons: [
          {
            id: "go-w1-1",
            title: "环境搭建与配置",
            detail: "安装 Go 工具链，配置环境变量，选择合适的 IDE/编辑器。",
            keyPoints: [
              "下载并安装最新稳定版 Go。",
              "配置 GOPATH、GOROOT 和 PATH。",
              "推荐 VS Code + Go 扩展或 GoLand。",
            ],
            resources: [
              { title: "Go 官方下载", url: "https://go.dev/dl/" },
              { title: "Go 安装指南", url: "https://go.dev/doc/install" },
              { title: "VS Code Go 扩展", url: "https://marketplace.visualstudio.com/items?itemName=golang.Go" },
            ],
          },
          {
            id: "go-w1-2",
            title: "Hello World 与程序结构",
            detail: "编写第一个 Go 程序，理解 package main 和 func main() 的作用。",
            keyPoints: [
              "每个 Go 程序必须有一个 main 包和 main 函数。",
              "使用 fmt.Println 进行基本输出。",
              "Go 程序从 main 函数开始执行。",
            ],
            resources: [
              { title: "A Tour of Go", url: "https://go.dev/tour/welcome/1" },
              { title: "Go by Example: Hello World", url: "https://gobyexample.com/hello-world" },
              { title: "roadmap.sh: Go Roadmap", url: "https://roadmap.sh/golang" },
            ],
          },
          {
            id: "go-w1-3",
            title: "go 命令工具链",
            detail: "掌握 go run、go build、go install、go fmt、go doc 等核心命令。",
            keyPoints: [
              "go run 直接编译运行，go build 生成可执行文件。",
              "go fmt 自动格式化代码，保持风格一致。",
              "go doc 查看包和函数的文档。",
            ],
            resources: [
              { title: "Go 命令文档", url: "https://pkg.go.dev/cmd/go" },
              { title: "Go Blog: go 命令", url: "https://go.dev/blog/go-command" },
              { title: "Go by Example", url: "https://gobyexample.com/" },
            ],
          },
        ],
      },
      {
        id: "go-w2",
        title: "第 2 周：变量、常量与基本数据类型",
        summary: "掌握变量声明方式、常量定义、零值概念以及基本数据类型。",
        overview: "变量和类型是所有程序的基石，本周将系统学习 Go 独特的声明语法和零值机制。",
        keyPoints: [
          "区分 var 与 := 短声明语法。",
          "理解 Go 的零值机制。",
          "掌握 const 和 iota 的用法。",
        ],
        lessons: [
          {
            id: "go-w2-1",
            title: "变量与常量",
            detail: "学习 var 声明、:= 短声明、const 常量以及 iota 枚举。",
            keyPoints: [
              "var 可以在函数外声明，:= 只能在函数内使用。",
              "Go 变量有零值：数值为 0，字符串为空，布尔为 false。",
              "iota 用于创建递增的枚举常量。",
            ],
            resources: [
              { title: "Go by Example: Variables", url: "https://gobyexample.com/variables" },
              { title: "Go by Example: Constants", url: "https://gobyexample.com/constants" },
              { title: "Effective Go: Constants", url: "https://go.dev/doc/effective_go#constants" },
            ],
          },
          {
            id: "go-w2-2",
            title: "作用域与遮蔽",
            detail: "理解包级、函数级、块级作用域以及变量遮蔽问题。",
            keyPoints: [
              "Go 采用词法作用域，内部可访问外部变量。",
              "注意 := 在内层块中可能意外创建新变量。",
              "使用 go vet 检测遮蔽问题。",
            ],
            resources: [
              { title: "Go Spec: Declarations and Scope", url: "https://go.dev/ref/spec#Declarations_and_scope" },
              { title: "Go vet: shadow", url: "https://pkg.go.dev/golang.org/x/tools/go/analysis/passes/shadow" },
              { title: "Effective Go", url: "https://go.dev/doc/effective_go" },
            ],
          },
          {
            id: "go-w2-3",
            title: "基本数据类型",
            detail: "掌握布尔、整数、浮点、复数、Rune 和字符串类型。",
            keyPoints: [
              "整数分有符号 (int8-64) 和无符号 (uint8-64)。",
              "float32/float64 遵循 IEEE 754 标准。",
              "rune 是 int32 的别名，表示 Unicode 码点。",
            ],
            resources: [
              { title: "Go Spec: Types", url: "https://go.dev/ref/spec#Types" },
              { title: "Go by Example: Strings", url: "https://gobyexample.com/strings" },
              { title: "Go Blog: Strings, bytes, runes", url: "https://go.dev/blog/strings" },
            ],
          },
          {
            id: "go-w2-4",
            title: "字符串与类型转换",
            detail: "理解原始字符串与解释字符串，掌握类型转换语法。",
            keyPoints: [
              "反引号 `` 创建原始字符串，保留换行和转义符。",
              "双引号 \"\" 创建解释字符串，支持转义序列。",
              "Go 不支持隐式类型转换，必须显式转换。",
            ],
            resources: [
              { title: "Go by Example: String Functions", url: "https://gobyexample.com/string-functions" },
              { title: "Go Spec: Conversions", url: "https://go.dev/ref/spec#Conversions" },
              { title: "strings 包文档", url: "https://pkg.go.dev/strings" },
            ],
          },
        ],
      },
      {
        id: "go-w3",
        title: "第 3 周：复合数据类型",
        summary: "掌握数组、切片、Map 和结构体等复合类型的使用。",
        overview: "复合类型让你能组织和管理更复杂的数据，切片和 Map 是 Go 中最常用的数据结构。",
        keyPoints: [
          "区分数组（固定长度）与切片（动态长度）。",
          "理解切片的容量增长机制。",
          "掌握结构体与 JSON 标签的使用。",
        ],
        lessons: [
          {
            id: "go-w3-1",
            title: "数组与切片",
            detail: "学习数组声明、切片创建、make 函数以及容量增长机制。",
            keyPoints: [
              "数组长度是类型的一部分，[3]int 和 [4]int 是不同类型。",
              "切片是数组的引用，包含指针、长度和容量。",
              "使用 make([]T, len, cap) 创建指定容量的切片。",
            ],
            resources: [
              { title: "Go by Example: Arrays", url: "https://gobyexample.com/arrays" },
              { title: "Go by Example: Slices", url: "https://gobyexample.com/slices" },
              { title: "Go Blog: Go Slices", url: "https://go.dev/blog/slices" },
            ],
          },
          {
            id: "go-w3-2",
            title: "Map 与 Comma-Ok 模式",
            detail: "使用 Map 存储键值对，理解 comma-ok 模式检查键是否存在。",
            keyPoints: [
              "map 的零值是 nil，需要 make 初始化。",
              "v, ok := m[key] 模式安全地检查键是否存在。",
              "map 不是并发安全的，并发访问需要加锁。",
            ],
            resources: [
              { title: "Go by Example: Maps", url: "https://gobyexample.com/maps" },
              { title: "Go Blog: Go maps in action", url: "https://go.dev/blog/maps" },
              { title: "sync.Map 文档", url: "https://pkg.go.dev/sync#Map" },
            ],
          },
          {
            id: "go-w3-3",
            title: "结构体与 JSON 标签",
            detail: "定义结构体，使用标签控制 JSON 序列化，理解结构体嵌入。",
            keyPoints: [
              "结构体字段首字母大写才能被外部访问和序列化。",
              "使用 `json:\"name\"` 标签自定义 JSON 字段名。",
              "结构体嵌入实现组合，类似继承但更灵活。",
            ],
            resources: [
              { title: "Go by Example: Structs", url: "https://gobyexample.com/structs" },
              { title: "encoding/json 文档", url: "https://pkg.go.dev/encoding/json" },
              { title: "Go by Example: JSON", url: "https://gobyexample.com/json" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "go-control-func",
    title: "阶段二：控制流与函数",
    duration: "第 4-6 周",
    goal: "掌握条件判断、循环语句、函数定义以及指针和内存管理。",
    weeks: [
      {
        id: "go-w4",
        title: "第 4 周：条件语句与循环",
        summary: "学习 if、switch 条件判断以及 for 循环的各种用法。",
        overview: "Go 的流程控制语法简洁而强大，只用 for 一种循环就能覆盖所有迭代场景。",
        keyPoints: [
          "Go 只有 for 一种循环关键字。",
          "switch 默认不需要 break，使用 fallthrough 继续执行。",
          "for range 用于遍历切片、map 和字符串。",
        ],
        lessons: [
          {
            id: "go-w4-1",
            title: "if 与 switch 条件判断",
            detail: "学习 if-else 语句和 switch 多分支判断，包括无表达式 switch。",
            keyPoints: [
              "if 语句可以在条件前声明变量（作用域限于 if-else 块）。",
              "switch 不需要 break，匹配后自动退出。",
              "无表达式 switch 可替代多个 if-else if。",
            ],
            resources: [
              { title: "Go by Example: If/Else", url: "https://gobyexample.com/if-else" },
              { title: "Go by Example: Switch", url: "https://gobyexample.com/switch" },
              { title: "Effective Go: Control structures", url: "https://go.dev/doc/effective_go#control-structures" },
            ],
          },
          {
            id: "go-w4-2",
            title: "for 循环详解",
            detail: "掌握 for 循环的三种形式以及 break、continue、goto 的使用。",
            keyPoints: [
              "for init; cond; post {} 是标准三段式循环。",
              "for cond {} 类似 while 循环。",
              "for {} 是无限循环，需配合 break 使用。",
            ],
            resources: [
              { title: "Go by Example: For", url: "https://gobyexample.com/for" },
              { title: "Go Spec: For statements", url: "https://go.dev/ref/spec#For_statements" },
              { title: "Effective Go: For", url: "https://go.dev/doc/effective_go#for" },
            ],
          },
          {
            id: "go-w4-3",
            title: "for range 遍历",
            detail: "使用 for range 遍历切片、map、字符串，理解迭代变量语义。",
            keyPoints: [
              "遍历切片返回 index 和 value 的副本。",
              "遍历 map 顺序是随机的。",
              "遍历字符串按 rune 迭代，非按字节。",
            ],
            resources: [
              { title: "Go by Example: Range", url: "https://gobyexample.com/range" },
              { title: "Go Wiki: Range", url: "https://go.dev/wiki/Range" },
              { title: "Go Spec: Range clause", url: "https://go.dev/ref/spec#RangeClause" },
            ],
          },
        ],
      },
      {
        id: "go-w5",
        title: "第 5 周：函数基础",
        summary: "掌握函数定义、多返回值、可变参数、匿名函数和闭包。",
        overview: "函数是 Go 的一等公民，多返回值和闭包是编写惯用 Go 代码的关键特性。",
        keyPoints: [
          "Go 函数支持多返回值。",
          "可变参数函数使用 ...T 语法。",
          "闭包捕获外部变量的引用。",
        ],
        lessons: [
          {
            id: "go-w5-1",
            title: "函数定义与调用",
            detail: "学习函数声明、参数传递和多返回值语法。",
            keyPoints: [
              "func name(params) (returns) {} 是函数声明语法。",
              "Go 是值传递，传入函数的是参数的副本。",
              "命名返回值可以简化 return 语句。",
            ],
            resources: [
              { title: "Go by Example: Functions", url: "https://gobyexample.com/functions" },
              { title: "Go by Example: Multiple Return Values", url: "https://gobyexample.com/multiple-return-values" },
              { title: "Effective Go: Functions", url: "https://go.dev/doc/effective_go#functions" },
            ],
          },
          {
            id: "go-w5-2",
            title: "可变参数与匿名函数",
            detail: "使用 ...T 接收可变参数，定义和使用匿名函数。",
            keyPoints: [
              "可变参数在函数内是切片类型。",
              "使用 ... 展开切片传递给可变参数函数。",
              "匿名函数可以立即调用或赋值给变量。",
            ],
            resources: [
              { title: "Go by Example: Variadic Functions", url: "https://gobyexample.com/variadic-functions" },
              { title: "Go by Example: Closures", url: "https://gobyexample.com/closures" },
              { title: "Go Spec: Function types", url: "https://go.dev/ref/spec#Function_types" },
            ],
          },
          {
            id: "go-w5-3",
            title: "闭包与值传递",
            detail: "理解闭包捕获变量的机制以及 Go 的值传递语义。",
            keyPoints: [
              "闭包捕获外部变量的引用，注意循环中的陷阱。",
              "避免循环变量陷阱：使用局部变量或传参。",
              "defer 语句延迟执行，按 LIFO 顺序。",
            ],
            resources: [
              { title: "Go FAQ: Closures", url: "https://go.dev/doc/faq#closures_and_goroutines" },
              { title: "Go by Example: Defer", url: "https://gobyexample.com/defer" },
              { title: "Effective Go: Defer", url: "https://go.dev/doc/effective_go#defer" },
            ],
          },
        ],
      },
      {
        id: "go-w6",
        title: "第 6 周：指针与内存管理",
        summary: "掌握指针的使用场景，理解 Go 的内存管理和垃圾回收。",
        overview: "理解指针和内存模型有助于写出高效代码，Go 的垃圾回收让你无需手动管理内存。",
        keyPoints: [
          "指针用于避免大结构体的复制和实现修改。",
          "Go 有垃圾回收，无需手动释放内存。",
          "理解栈与堆分配、逃逸分析。",
        ],
        lessons: [
          {
            id: "go-w6-1",
            title: "指针基础",
            detail: "学习指针的声明、取地址和解引用操作。",
            keyPoints: [
              "*T 是指向 T 类型的指针，&v 取变量地址。",
              "Go 指针不支持算术运算（更安全）。",
              "nil 是指针的零值。",
            ],
            resources: [
              { title: "Go by Example: Pointers", url: "https://gobyexample.com/pointers" },
              { title: "Go Tour: Pointers", url: "https://go.dev/tour/moretypes/1" },
              { title: "Effective Go: Pointers vs Values", url: "https://go.dev/doc/effective_go#pointers_vs_values" },
            ],
          },
          {
            id: "go-w6-2",
            title: "指针与结构体/切片/Map",
            detail: "理解指针在结构体、切片和 Map 中的应用场景。",
            keyPoints: [
              "修改结构体字段时通常使用指针接收者。",
              "切片和 Map 本身是引用类型，通常不需要指针。",
              "大结构体传递时使用指针避免复制开销。",
            ],
            resources: [
              { title: "Go by Example: Struct Methods", url: "https://gobyexample.com/methods" },
              { title: "Go Blog: Go Data Structures", url: "https://research.swtch.com/godata" },
              { title: "Go FAQ: Pass by value", url: "https://go.dev/doc/faq#pass_by_value" },
            ],
          },
          {
            id: "go-w6-3",
            title: "内存管理与垃圾回收",
            detail: "了解 Go 的内存分配、垃圾回收机制和逃逸分析。",
            keyPoints: [
              "Go 使用三色标记并发垃圾回收。",
              "逃逸分析决定变量在栈还是堆上分配。",
              "使用 go build -gcflags='-m' 查看逃逸分析结果。",
            ],
            resources: [
              { title: "Go Blog: GC Pacer", url: "https://go.dev/blog/ismmkeynote" },
              { title: "Go GC Guide", url: "https://tip.golang.org/doc/gc-guide" },
              { title: "Go Memory Model", url: "https://go.dev/ref/mem" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "go-oop-interface",
    title: "阶段三：方法、接口与泛型",
    duration: "第 7-9 周",
    goal: "掌握 Go 的面向对象特性、接口多态和泛型编程。",
    weeks: [
      {
        id: "go-w7",
        title: "第 7 周：方法与接口",
        summary: "学习方法定义、接收者类型选择以及接口的隐式实现。",
        overview: "接口是 Go 实现多态的核心机制，隐式实现让代码解耦更加自然灵活。",
        keyPoints: [
          "方法是带接收者的函数。",
          "接口是方法签名的集合，隐式实现。",
          "空接口 interface{} 可以存储任何类型。",
        ],
        lessons: [
          {
            id: "go-w7-1",
            title: "方法定义与接收者",
            detail: "为类型定义方法，理解值接收者与指针接收者的区别。",
            keyPoints: [
              "方法可以定义在任何类型上（除了指针和接口）。",
              "值接收者操作副本，指针接收者操作原值。",
              "一般规则：需要修改或避免复制时用指针接收者。",
            ],
            resources: [
              { title: "Go by Example: Methods", url: "https://gobyexample.com/methods" },
              { title: "Go Tour: Methods", url: "https://go.dev/tour/methods/1" },
              { title: "Go FAQ: Receiver type", url: "https://go.dev/doc/faq#methods_on_values_or_pointers" },
            ],
          },
          {
            id: "go-w7-2",
            title: "接口基础",
            detail: "定义和实现接口，理解接口的隐式实现机制。",
            keyPoints: [
              "接口定义一组方法签名。",
              "类型只需实现接口的所有方法即可满足接口。",
              "接口变量存储具体类型的值和类型信息。",
            ],
            resources: [
              { title: "Go by Example: Interfaces", url: "https://gobyexample.com/interfaces" },
              { title: "Effective Go: Interfaces", url: "https://go.dev/doc/effective_go#interfaces" },
              { title: "Go Tour: Interfaces", url: "https://go.dev/tour/methods/9" },
            ],
          },
          {
            id: "go-w7-3",
            title: "接口组合与空接口",
            detail: "使用接口嵌入实现组合，理解空接口和类型断言。",
            keyPoints: [
              "接口可以嵌入其他接口形成更大的接口。",
              "interface{} / any 可以存储任意类型的值。",
              "类型断言 v.(T) 和类型 switch 用于类型检查。",
            ],
            resources: [
              { title: "Go by Example: Embedding", url: "https://gobyexample.com/interfaces" },
              { title: "Go Spec: Type assertions", url: "https://go.dev/ref/spec#Type_assertions" },
              { title: "Go Blog: Error handling", url: "https://go.dev/blog/error-handling-and-go" },
            ],
          },
        ],
      },
      {
        id: "go-w8",
        title: "第 8 周：泛型编程",
        summary: "学习 Go 1.18+ 引入的泛型，理解类型参数和约束。",
        overview: "泛型是 Go 1.18 的重大新特性，让你编写类型安全的通用函数和数据结构。",
        keyPoints: [
          "泛型允许编写类型安全的通用代码。",
          "类型约束定义类型参数的能力。",
          "Go 编译器进行类型推断简化调用。",
        ],
        lessons: [
          {
            id: "go-w8-1",
            title: "泛型函数",
            detail: "定义和使用泛型函数，理解类型参数语法。",
            keyPoints: [
              "func Name[T any](v T) T {} 定义泛型函数。",
              "any 是 interface{} 的别名，是最宽松的约束。",
              "调用时可以省略类型参数让编译器推断。",
            ],
            resources: [
              { title: "Go by Example: Generics", url: "https://gobyexample.com/generics" },
              { title: "Go Blog: Generics", url: "https://go.dev/blog/intro-generics" },
              { title: "Go Tutorial: Generics", url: "https://go.dev/doc/tutorial/generics" },
            ],
          },
          {
            id: "go-w8-2",
            title: "泛型类型与约束",
            detail: "定义泛型类型，使用接口约束限制类型参数。",
            keyPoints: [
              "type Stack[T any] struct {} 定义泛型类型。",
              "约束可以是接口，也可以使用 | 组合类型。",
              "constraints 包提供常用约束如 Ordered。",
            ],
            resources: [
              { title: "Go Spec: Type parameters", url: "https://go.dev/ref/spec#Type_parameter_declarations" },
              { title: "constraints 包", url: "https://pkg.go.dev/golang.org/x/exp/constraints" },
              { title: "Go Blog: When to use generics", url: "https://go.dev/blog/when-generics" },
            ],
          },
          {
            id: "go-w8-3",
            title: "泛型最佳实践",
            detail: "了解何时使用泛型，避免过度使用导致代码复杂化。",
            keyPoints: [
              "优先考虑接口，泛型用于类型安全的容器和算法。",
              "避免为了泛型而泛型，保持代码简单。",
              "泛型可能影响编译速度，权衡使用。",
            ],
            resources: [
              { title: "Go Blog: When to use generics", url: "https://go.dev/blog/when-generics" },
              { title: "Go Proverbs", url: "https://go-proverbs.github.io/" },
              { title: "Effective Go", url: "https://go.dev/doc/effective_go" },
            ],
          },
        ],
      },
      {
        id: "go-w9",
        title: "第 9 周：错误处理",
        summary: "掌握 Go 的错误处理哲学和最佳实践，理解 panic/recover。",
        overview: "Go 将错误视为普通值，通过显式返回值处理错误是其核心设计哲学之一。",
        keyPoints: [
          "Go 使用返回值而非异常处理错误。",
          "使用 errors.Is/As 进行错误检查和类型断言。",
          "panic/recover 用于不可恢复的错误。",
        ],
        lessons: [
          {
            id: "go-w9-1",
            title: "error 接口与创建错误",
            detail: "理解 error 接口，使用 errors.New 和 fmt.Errorf 创建错误。",
            keyPoints: [
              "error 是只有 Error() string 方法的接口。",
              "errors.New 创建简单错误。",
              "fmt.Errorf 支持格式化和 %w 包装错误。",
            ],
            resources: [
              { title: "Go by Example: Errors", url: "https://gobyexample.com/errors" },
              { title: "Go Blog: Error handling", url: "https://go.dev/blog/error-handling-and-go" },
              { title: "errors 包文档", url: "https://pkg.go.dev/errors" },
            ],
          },
          {
            id: "go-w9-2",
            title: "错误包装与检查",
            detail: "使用 %w 包装错误，用 errors.Is/As 进行错误检查。",
            keyPoints: [
              "fmt.Errorf(\"...: %w\", err) 包装错误保留链。",
              "errors.Is 检查错误链中是否包含特定错误。",
              "errors.As 提取错误链中特定类型的错误。",
            ],
            resources: [
              { title: "Go Blog: Working with Errors", url: "https://go.dev/blog/go1.13-errors" },
              { title: "errors.Is/As 文档", url: "https://pkg.go.dev/errors#Is" },
              { title: "Go Wiki: Error handling", url: "https://go.dev/wiki/Errors" },
            ],
          },
          {
            id: "go-w9-3",
            title: "panic 与 recover",
            detail: "理解 panic/recover 机制，用于处理不可恢复的错误。",
            keyPoints: [
              "panic 会立即停止当前函数并展开调用栈。",
              "recover 只能在 defer 中调用，捕获 panic。",
              "正常错误处理使用 error，panic 用于真正的异常。",
            ],
            resources: [
              { title: "Go by Example: Panic", url: "https://gobyexample.com/panic" },
              { title: "Go by Example: Recover", url: "https://gobyexample.com/recover" },
              { title: "Go Blog: Defer, Panic, Recover", url: "https://go.dev/blog/defer-panic-and-recover" },
            ],
          },
          {
            id: "go-w9-4",
            title: "哨兵错误与调试",
            detail: "使用哨兵错误进行比较，学习堆栈追踪和调试技巧。",
            keyPoints: [
              "哨兵错误是预定义的可比较错误值。",
              "使用 runtime/debug.Stack() 获取堆栈信息。",
              "delve 是 Go 的调试器。",
            ],
            resources: [
              { title: "Go Wiki: Sentinel Errors", url: "https://go.dev/wiki/Errors#sentinel-errors" },
              { title: "Delve 调试器", url: "https://github.com/go-delve/delve" },
              { title: "runtime/debug 包", url: "https://pkg.go.dev/runtime/debug" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "go-modules",
    title: "阶段四：代码组织与模块管理",
    duration: "第 10 周",
    goal: "掌握 Go Modules 依赖管理和包的组织方式。",
    weeks: [
      {
        id: "go-w10",
        title: "第 10 周：模块与包管理",
        summary: "学习 Go Modules、包导入规则和依赖管理。",
        overview: "模块和包管理是组织大型项目的基础，Go Modules 提供了简洁可靠的依赖管理方案。",
        keyPoints: [
          "Go Modules 是官方的依赖管理方案。",
          "理解 go.mod 和 go.sum 的作用。",
          "掌握包的可见性规则（大小写）。",
        ],
        lessons: [
          {
            id: "go-w10-1",
            title: "Go Modules 基础",
            detail: "使用 go mod init/tidy/vendor 管理依赖。",
            keyPoints: [
              "go mod init 创建 go.mod 文件。",
              "go mod tidy 整理依赖（添加缺失/移除无用）。",
              "go mod vendor 将依赖复制到 vendor 目录。",
            ],
            resources: [
              { title: "Go Modules 教程", url: "https://go.dev/doc/tutorial/create-module" },
              { title: "Go Blog: Modules", url: "https://go.dev/blog/using-go-modules" },
              { title: "Go Modules 参考", url: "https://go.dev/ref/mod" },
            ],
          },
          {
            id: "go-w10-2",
            title: "包组织与导入",
            detail: "理解包的组织结构、导入路径和可见性规则。",
            keyPoints: [
              "包名通常与目录名一致。",
              "首字母大写的标识符可导出，小写私有。",
              "internal 包只能被父目录导入。",
            ],
            resources: [
              { title: "Go by Example: Packages", url: "https://gobyexample.com/packages" },
              { title: "Effective Go: Package names", url: "https://go.dev/doc/effective_go#package-names" },
              { title: "Go Blog: Package names", url: "https://go.dev/blog/package-names" },
            ],
          },
          {
            id: "go-w10-3",
            title: "使用第三方包与发布模块",
            detail: "引入第三方依赖，了解如何发布自己的模块。",
            keyPoints: [
              "go get 添加依赖并更新 go.mod。",
              "使用语义化版本号标记模块版本。",
              "通过 Git 标签发布模块到 pkg.go.dev。",
            ],
            resources: [
              { title: "pkg.go.dev", url: "https://pkg.go.dev/" },
              { title: "Go Blog: Publishing", url: "https://go.dev/blog/publishing-go-modules" },
              { title: "Semantic Versioning", url: "https://semver.org/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "go-concurrency",
    title: "阶段五：并发编程",
    duration: "第 11-13 周",
    goal: "掌握 Goroutine、Channel 和并发同步机制。",
    weeks: [
      {
        id: "go-w11",
        title: "第 11 周：Goroutines 与 Channels",
        summary: "学习 Goroutine 的创建、Channel 的使用以及基本的并发模式。",
        overview: "并发是 Go 的核心优势，Goroutine 和 Channel 构成了其独特的 CSP 并发模型。",
        keyPoints: [
          "Goroutine 是轻量级的并发执行单元。",
          "Channel 是 Goroutine 之间的通信机制。",
          "遵循：不要通过共享内存来通信，而是通过通信来共享内存。",
        ],
        lessons: [
          {
            id: "go-w11-1",
            title: "Goroutines 基础",
            detail: "使用 go 关键字启动 Goroutine，理解调度和生命周期。",
            keyPoints: [
              "go func() 启动一个新的 Goroutine。",
              "Goroutine 由 Go 运行时调度，非 OS 线程。",
              "main 函数退出时所有 Goroutine 会被终止。",
            ],
            resources: [
              { title: "Go by Example: Goroutines", url: "https://gobyexample.com/goroutines" },
              { title: "Go Tour: Goroutines", url: "https://go.dev/tour/concurrency/1" },
              { title: "Effective Go: Goroutines", url: "https://go.dev/doc/effective_go#goroutines" },
            ],
          },
          {
            id: "go-w11-2",
            title: "Channel 基础",
            detail: "创建和使用 Channel，理解阻塞语义。",
            keyPoints: [
              "make(chan T) 创建无缓冲 Channel。",
              "无缓冲 Channel 发送和接收都会阻塞直到对方准备好。",
              "close(ch) 关闭 Channel，可用 range 遍历。",
            ],
            resources: [
              { title: "Go by Example: Channels", url: "https://gobyexample.com/channels" },
              { title: "Go Tour: Channels", url: "https://go.dev/tour/concurrency/2" },
              { title: "Effective Go: Channels", url: "https://go.dev/doc/effective_go#channels" },
            ],
          },
          {
            id: "go-w11-3",
            title: "缓冲 Channel 与 Select",
            detail: "使用缓冲 Channel 和 select 语句处理多 Channel。",
            keyPoints: [
              "make(chan T, n) 创建容量为 n 的缓冲 Channel。",
              "缓冲 Channel 在满之前发送不阻塞。",
              "select 同时监听多个 Channel，随机选择就绪的。",
            ],
            resources: [
              { title: "Go by Example: Channel Buffering", url: "https://gobyexample.com/channel-buffering" },
              { title: "Go by Example: Select", url: "https://gobyexample.com/select" },
              { title: "Go Tour: Select", url: "https://go.dev/tour/concurrency/5" },
            ],
          },
        ],
      },
      {
        id: "go-w12",
        title: "第 12 周：同步原语与 Context",
        summary: "学习 sync 包的同步原语和 context 包的取消/超时机制。",
        overview: "在实际并发场景中，同步原语和 Context 是控制 Goroutine 生命周期的必备工具。",
        keyPoints: [
          "sync.Mutex 用于保护共享资源。",
          "sync.WaitGroup 用于等待多个 Goroutine 完成。",
          "context 用于传递取消信号、超时和请求范围的值。",
        ],
        lessons: [
          {
            id: "go-w12-1",
            title: "Mutex 与 WaitGroup",
            detail: "使用互斥锁保护共享数据，使用 WaitGroup 同步 Goroutine。",
            keyPoints: [
              "sync.Mutex 的 Lock/Unlock 保护临界区。",
              "sync.RWMutex 允许多读单写。",
              "WaitGroup 的 Add/Done/Wait 协调并发任务。",
            ],
            resources: [
              { title: "Go by Example: Mutexes", url: "https://gobyexample.com/mutexes" },
              { title: "Go by Example: WaitGroups", url: "https://gobyexample.com/waitgroups" },
              { title: "sync 包文档", url: "https://pkg.go.dev/sync" },
            ],
          },
          {
            id: "go-w12-2",
            title: "Context 包",
            detail: "使用 context 传递取消信号、超时和截止时间。",
            keyPoints: [
              "context.Background() 是根 Context。",
              "WithCancel/WithTimeout/WithDeadline 创建可取消的 Context。",
              "Context 应作为函数的第一个参数传递。",
            ],
            resources: [
              { title: "Go by Example: Context", url: "https://gobyexample.com/context" },
              { title: "Go Blog: Context", url: "https://go.dev/blog/context" },
              { title: "context 包文档", url: "https://pkg.go.dev/context" },
            ],
          },
          {
            id: "go-w12-3",
            title: "Worker Pool 模式",
            detail: "实现 Worker Pool 并发模式处理任务队列。",
            keyPoints: [
              "固定数量的 Worker 从任务 Channel 获取工作。",
              "控制并发度，避免资源耗尽。",
              "优雅关闭：关闭输入 Channel 并等待所有 Worker 完成。",
            ],
            resources: [
              { title: "Go by Example: Worker Pools", url: "https://gobyexample.com/worker-pools" },
              { title: "Go Blog: Pipelines", url: "https://go.dev/blog/pipelines" },
              { title: "Go Concurrency Patterns", url: "https://go.dev/talks/2012/concurrency.slide" },
            ],
          },
        ],
      },
      {
        id: "go-w13",
        title: "第 13 周：并发模式与竞态检测",
        summary: "学习高级并发模式和竞态条件检测。",
        keyPoints: [
          "fan-in/fan-out 模式用于并行处理。",
          "pipeline 模式用于数据处理流水线。",
          "使用 -race 标志检测数据竞争。",
        ],
        lessons: [
          {
            id: "go-w13-1",
            title: "Fan-in 与 Fan-out",
            detail: "使用 fan-out 并行处理，fan-in 合并结果。",
            keyPoints: [
              "Fan-out: 多个 Goroutine 从同一 Channel 读取任务。",
              "Fan-in: 多个 Channel 的结果合并到一个 Channel。",
              "适用于 CPU 密集型任务的并行处理。",
            ],
            resources: [
              { title: "Go Blog: Pipelines", url: "https://go.dev/blog/pipelines" },
              { title: "Go Concurrency Patterns", url: "https://go.dev/talks/2012/concurrency.slide" },
              { title: "Advanced Patterns", url: "https://go.dev/talks/2013/advconc.slide" },
            ],
          },
          {
            id: "go-w13-2",
            title: "Pipeline 模式",
            detail: "构建数据处理流水线，每个阶段是一个 Goroutine。",
            keyPoints: [
              "每个阶段从输入 Channel 读取，处理后写入输出 Channel。",
              "可以轻松添加、移除或重组阶段。",
              "注意正确处理取消和错误传播。",
            ],
            resources: [
              { title: "Go Blog: Pipelines", url: "https://go.dev/blog/pipelines" },
              { title: "errgroup 包", url: "https://pkg.go.dev/golang.org/x/sync/errgroup" },
              { title: "Go Wiki: Pipelines", url: "https://go.dev/wiki/Pipelines" },
            ],
          },
          {
            id: "go-w13-3",
            title: "竞态检测与调试",
            detail: "使用 race detector 检测数据竞争，学习并发调试技巧。",
            keyPoints: [
              "go run/build/test -race 启用竞态检测。",
              "竞态检测器会报告并发读写冲突的位置。",
              "生产环境不要开启 -race（有性能开销）。",
            ],
            resources: [
              { title: "Go Blog: Race Detector", url: "https://go.dev/blog/race-detector" },
              { title: "Go Doc: Race Detector", url: "https://go.dev/doc/articles/race_detector" },
              { title: "Data Race Patterns", url: "https://go.dev/wiki/DataRaceBugs" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "go-stdlib-test",
    title: "阶段六：标准库与测试",
    duration: "第 14-15 周",
    goal: "熟悉常用标准库，掌握测试和基准测试。",
    weeks: [
      {
        id: "go-w14",
        title: "第 14 周：标准库核心模块",
        summary: "学习 I/O、文件处理、JSON、时间等常用标准库。",
        keyPoints: [
          "io 包定义了核心 I/O 接口。",
          "encoding/json 处理 JSON 序列化。",
          "time 包处理时间和持续时间。",
        ],
        lessons: [
          {
            id: "go-w14-1",
            title: "I/O 与文件操作",
            detail: "使用 io、os、bufio 包进行文件读写。",
            keyPoints: [
              "io.Reader 和 io.Writer 是核心接口。",
              "os.Open/Create 打开和创建文件。",
              "bufio 提供带缓冲的 I/O 操作。",
            ],
            resources: [
              { title: "Go by Example: Reading Files", url: "https://gobyexample.com/reading-files" },
              { title: "Go by Example: Writing Files", url: "https://gobyexample.com/writing-files" },
              { title: "io 包文档", url: "https://pkg.go.dev/io" },
            ],
          },
          {
            id: "go-w14-2",
            title: "JSON 与编码",
            detail: "使用 encoding/json 进行 JSON 编解码。",
            keyPoints: [
              "json.Marshal/Unmarshal 处理 []byte。",
              "json.Encoder/Decoder 处理流式 JSON。",
              "使用 struct tag 控制字段映射。",
            ],
            resources: [
              { title: "Go by Example: JSON", url: "https://gobyexample.com/json" },
              { title: "Go Blog: JSON and Go", url: "https://go.dev/blog/json" },
              { title: "encoding/json 文档", url: "https://pkg.go.dev/encoding/json" },
            ],
          },
          {
            id: "go-w14-3",
            title: "时间、日志与正则",
            detail: "使用 time、slog、regexp 包处理时间、日志和正则表达式。",
            keyPoints: [
              "time.Now()、time.Parse、time.Format 处理时间。",
              "slog 是 Go 1.21+ 的结构化日志包。",
              "regexp.MustCompile 编译正则表达式。",
            ],
            resources: [
              { title: "Go by Example: Time", url: "https://gobyexample.com/time" },
              { title: "slog 包文档", url: "https://pkg.go.dev/log/slog" },
              { title: "regexp 包文档", url: "https://pkg.go.dev/regexp" },
            ],
          },
          {
            id: "go-w14-4",
            title: "flag 与 go:embed",
            detail: "使用 flag 解析命令行参数，使用 go:embed 嵌入文件。",
            keyPoints: [
              "flag.String/Int/Bool 定义命令行参数。",
              "//go:embed 指令在编译时嵌入文件。",
              "embed.FS 类型可以嵌入整个目录。",
            ],
            resources: [
              { title: "Go by Example: Command-Line Flags", url: "https://gobyexample.com/command-line-flags" },
              { title: "Go Blog: Embed", url: "https://go.dev/blog/embed" },
              { title: "embed 包文档", url: "https://pkg.go.dev/embed" },
            ],
          },
        ],
      },
      {
        id: "go-w15",
        title: "第 15 周：测试与基准测试",
        summary: "学习 Go 的测试框架、表驱动测试、Mock 和基准测试。",
        keyPoints: [
          "testing 包是 Go 内置的测试框架。",
          "表驱动测试是 Go 的惯用测试模式。",
          "go test -bench 运行基准测试。",
        ],
        lessons: [
          {
            id: "go-w15-1",
            title: "testing 包基础",
            detail: "编写单元测试，使用 *testing.T 报告测试结果。",
            keyPoints: [
              "测试文件以 _test.go 结尾。",
              "测试函数以 Test 开头，参数为 *testing.T。",
              "t.Error/Fatal/Log 报告测试结果。",
            ],
            resources: [
              { title: "Go by Example: Testing", url: "https://gobyexample.com/testing" },
              { title: "testing 包文档", url: "https://pkg.go.dev/testing" },
              { title: "Go Blog: Table Driven Tests", url: "https://go.dev/wiki/TableDrivenTests" },
            ],
          },
          {
            id: "go-w15-2",
            title: "表驱动测试与子测试",
            detail: "使用表驱动方式组织测试用例，使用 t.Run 创建子测试。",
            keyPoints: [
              "表驱动测试将测试数据与逻辑分离。",
              "t.Run 创建子测试，可以并行运行。",
              "t.Parallel() 标记测试可以并行执行。",
            ],
            resources: [
              { title: "Go Wiki: Table Driven Tests", url: "https://go.dev/wiki/TableDrivenTests" },
              { title: "Go Blog: Subtests", url: "https://go.dev/blog/subtests" },
              { title: "testing 包文档", url: "https://pkg.go.dev/testing#hdr-Subtests_and_Sub_benchmarks" },
            ],
          },
          {
            id: "go-w15-3",
            title: "Mock 与 HTTP 测试",
            detail: "使用接口进行 Mock，使用 httptest 测试 HTTP 处理器。",
            keyPoints: [
              "通过接口注入依赖，便于 Mock。",
              "httptest.NewServer 创建测试服务器。",
              "httptest.NewRecorder 记录 HTTP 响应。",
            ],
            resources: [
              { title: "httptest 包文档", url: "https://pkg.go.dev/net/http/httptest" },
              { title: "testify 库", url: "https://github.com/stretchr/testify" },
              { title: "gomock 库", url: "https://github.com/uber-go/mock" },
            ],
          },
          {
            id: "go-w15-4",
            title: "基准测试与覆盖率",
            detail: "编写基准测试，收集测试覆盖率报告。",
            keyPoints: [
              "基准函数以 Benchmark 开头，参数为 *testing.B。",
              "go test -bench=. 运行所有基准测试。",
              "go test -cover 查看覆盖率。",
            ],
            resources: [
              { title: "Go by Example: Benchmarking", url: "https://gobyexample.com/testing-and-benchmarking" },
              { title: "Go Blog: Profiling", url: "https://go.dev/blog/pprof" },
              { title: "Go 测试覆盖率", url: "https://go.dev/blog/cover" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "go-ecosystem",
    title: "阶段七：生态与框架",
    duration: "第 16-17 周",
    goal: "学习 Web 开发、CLI 工具、ORM 等流行库和框架。",
    weeks: [
      {
        id: "go-w16",
        title: "第 16 周：Web 开发",
        summary: "学习 net/http 标准库和流行 Web 框架。",
        keyPoints: [
          "net/http 是功能完备的 HTTP 服务器。",
          "Gin、Echo、Fiber 等框架提供路由和中间件。",
          "gRPC 用于高性能 RPC 通信。",
        ],
        lessons: [
          {
            id: "go-w16-1",
            title: "net/http 标准库",
            detail: "使用标准库构建 HTTP 服务器和客户端。",
            keyPoints: [
              "http.ListenAndServe 启动服务器。",
              "http.HandleFunc 注册路由处理函数。",
              "http.Client 发送 HTTP 请求。",
            ],
            resources: [
              { title: "Go by Example: HTTP Server", url: "https://gobyexample.com/http-servers" },
              { title: "Go by Example: HTTP Client", url: "https://gobyexample.com/http-clients" },
              { title: "net/http 文档", url: "https://pkg.go.dev/net/http" },
            ],
          },
          {
            id: "go-w16-2",
            title: "Web 框架：Gin/Echo/Fiber",
            detail: "了解流行 Web 框架的特点和使用场景。",
            keyPoints: [
              "Gin: 高性能，丰富的中间件生态。",
              "Echo: 简洁 API，内置验证。",
              "Fiber: Express 风格，基于 fasthttp。",
            ],
            resources: [
              { title: "Gin Web Framework", url: "https://gin-gonic.com/docs/" },
              { title: "Echo Framework", url: "https://echo.labstack.com/" },
              { title: "Fiber Framework", url: "https://docs.gofiber.io/" },
            ],
          },
          {
            id: "go-w16-3",
            title: "gRPC 与 Protocol Buffers",
            detail: "使用 gRPC 构建高性能 RPC 服务。",
            keyPoints: [
              "Protocol Buffers 定义服务接口和消息。",
              "protoc 编译器生成 Go 代码。",
              "gRPC 支持流式通信和双向流。",
            ],
            resources: [
              { title: "gRPC Go 快速入门", url: "https://grpc.io/docs/languages/go/quickstart/" },
              { title: "Protocol Buffers 教程", url: "https://protobuf.dev/getting-started/gotutorial/" },
              { title: "gRPC 最佳实践", url: "https://grpc.io/docs/guides/performance/" },
            ],
          },
        ],
      },
      {
        id: "go-w17",
        title: "第 17 周：CLI、ORM 与日志",
        summary: "学习 CLI 框架、数据库访问和结构化日志。",
        keyPoints: [
          "Cobra 是最流行的 CLI 框架。",
          "GORM 和 pgx 是常用的数据库库。",
          "Zap 和 Zerolog 是高性能日志库。",
        ],
        lessons: [
          {
            id: "go-w17-1",
            title: "CLI 框架：Cobra 与 Bubbletea",
            detail: "使用 Cobra 构建命令行工具，使用 Bubbletea 构建 TUI。",
            keyPoints: [
              "Cobra 提供子命令、参数解析和帮助生成。",
              "urfave/cli 是另一个流行的 CLI 库。",
              "Bubbletea 用于构建交互式终端界面。",
            ],
            resources: [
              { title: "Cobra 文档", url: "https://cobra.dev/" },
              { title: "urfave/cli", url: "https://cli.urfave.org/" },
              { title: "Bubbletea", url: "https://github.com/charmbracelet/bubbletea" },
            ],
          },
          {
            id: "go-w17-2",
            title: "数据库访问：pgx 与 GORM",
            detail: "使用 pgx 直接访问 PostgreSQL，使用 GORM 进行 ORM 操作。",
            keyPoints: [
              "pgx 是高性能的 PostgreSQL 驱动。",
              "GORM 是全功能 ORM，支持迁移和关联。",
              "sqlx 是 database/sql 的增强版本。",
            ],
            resources: [
              { title: "pgx 文档", url: "https://github.com/jackc/pgx" },
              { title: "GORM 文档", url: "https://gorm.io/docs/" },
              { title: "sqlx", url: "https://jmoiron.github.io/sqlx/" },
            ],
          },
          {
            id: "go-w17-3",
            title: "日志与实时通信",
            detail: "使用 Zap/Zerolog 进行结构化日志，使用 Melody 处理 WebSocket。",
            keyPoints: [
              "Zap 和 Zerolog 都是高性能结构化日志库。",
              "Melody 简化 WebSocket 服务端开发。",
              "Centrifugo 是实时消息服务器。",
            ],
            resources: [
              { title: "Zap 日志库", url: "https://pkg.go.dev/go.uber.org/zap" },
              { title: "Zerolog", url: "https://github.com/rs/zerolog" },
              { title: "Melody WebSocket", url: "https://github.com/olahol/melody" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "go-toolchain-advanced",
    title: "阶段八：工具链与进阶",
    duration: "第 18 周",
    goal: "掌握 Go 工具链、代码质量工具和高级主题。",
    weeks: [
      {
        id: "go-w18",
        title: "第 18 周：工具链、质量与部署",
        summary: "学习 Go 工具链、静态分析、性能调优和部署。",
        keyPoints: [
          "go vet 和 linter 帮助发现代码问题。",
          "pprof 用于性能分析和优化。",
          "交叉编译生成多平台可执行文件。",
        ],
        lessons: [
          {
            id: "go-w18-1",
            title: "代码质量与静态分析",
            detail: "使用 go vet、goimports 和 linter 保证代码质量。",
            keyPoints: [
              "go vet 检测常见错误。",
              "goimports 自动管理 import 语句。",
              "golangci-lint 集成多个 linter。",
            ],
            resources: [
              { title: "go vet 文档", url: "https://pkg.go.dev/cmd/vet" },
              { title: "golangci-lint", url: "https://golangci-lint.run/" },
              { title: "staticcheck", url: "https://staticcheck.io/" },
            ],
          },
          {
            id: "go-w18-2",
            title: "性能分析与调试",
            detail: "使用 pprof 进行 CPU/内存分析，使用 trace 追踪执行。",
            keyPoints: [
              "go tool pprof 分析 CPU 和内存。",
              "go tool trace 追踪 Goroutine 调度。",
              "net/http/pprof 在线性能分析。",
            ],
            resources: [
              { title: "Go Blog: Profiling", url: "https://go.dev/blog/pprof" },
              { title: "pprof 文档", url: "https://pkg.go.dev/runtime/pprof" },
              { title: "Go Trace", url: "https://go.dev/blog/execution-tracer" },
            ],
          },
          {
            id: "go-w18-3",
            title: "安全与构建",
            detail: "使用 govulncheck 检查漏洞，理解构建标签和代码生成。",
            keyPoints: [
              "govulncheck 检测已知漏洞。",
              "//go:build 控制条件编译。",
              "go generate 运行代码生成工具。",
            ],
            resources: [
              { title: "govulncheck", url: "https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck" },
              { title: "Go Build Constraints", url: "https://pkg.go.dev/go/build#hdr-Build_Constraints" },
              { title: "Go Generate", url: "https://go.dev/blog/generate" },
            ],
          },
          {
            id: "go-w18-4",
            title: "部署与高级话题",
            detail: "交叉编译、Docker 部署以及反射、CGO 等高级话题概览。",
            keyPoints: [
              "GOOS/GOARCH 环境变量控制交叉编译。",
              "多阶段 Docker 构建减小镜像体积。",
              "reflect 包用于运行时类型检查。",
            ],
            resources: [
              { title: "Go 交叉编译", url: "https://go.dev/doc/install/source#environment" },
              { title: "Docker 多阶段构建", url: "https://docs.docker.com/build/building/multi-stage/" },
              { title: "reflect 包", url: "https://pkg.go.dev/reflect" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "go-advanced",
    title: "阶段九：高级话题",
    duration: "第 19-20 周",
    goal: "深入理解 Go 底层机制，掌握反射、unsafe、CGO 等高级特性。",
    weeks: [
      {
        id: "go-w19",
        title: "第 19 周：内存管理与反射",
        summary: "深入理解 Go 内存模型、逃逸分析和反射机制。",
        keyPoints: [
          "理解栈与堆分配的区别和逃逸分析。",
          "掌握 reflect 包进行运行时类型操作。",
          "了解 Go 运行时的内存管理机制。",
        ],
        lessons: [
          {
            id: "go-w19-1",
            title: "内存管理深度解析",
            detail: "深入理解 Go 的内存分配、栈增长和垃圾回收机制。",
            keyPoints: [
              "Go 使用分段栈（segmented stack）到连续栈的演进。",
              "小对象使用 mcache/mcentral/mheap 三级分配。",
              "GC 使用三色标记和写屏障实现并发回收。",
            ],
            resources: [
              { title: "Go 内存分配器", url: "https://go.dev/src/runtime/malloc.go" },
              { title: "Go GC Guide", url: "https://tip.golang.org/doc/gc-guide" },
              { title: "Go Memory Model", url: "https://go.dev/ref/mem" },
            ],
          },
          {
            id: "go-w19-2",
            title: "逃逸分析详解",
            detail: "理解编译器如何决定变量在栈还是堆上分配。",
            keyPoints: [
              "使用 go build -gcflags='-m -m' 查看详细逃逸分析。",
              "返回局部变量指针、闭包捕获、接口转换会导致逃逸。",
              "减少逃逸可以降低 GC 压力，提高性能。",
            ],
            resources: [
              { title: "逃逸分析详解", url: "https://go.dev/doc/faq#stack_or_heap" },
              { title: "Go 编译器优化", url: "https://github.com/golang/go/wiki/CompilerOptimizations" },
              { title: "性能优化建议", url: "https://go.dev/doc/diagnostics" },
            ],
          },
          {
            id: "go-w19-3",
            title: "反射基础",
            detail: "使用 reflect 包进行运行时类型检查和值操作。",
            keyPoints: [
              "reflect.TypeOf 和 reflect.ValueOf 获取类型和值信息。",
              "通过 Value.Elem() 获取指针指向的值。",
              "反射性能开销大，应谨慎使用。",
            ],
            resources: [
              { title: "Go Blog: Laws of Reflection", url: "https://go.dev/blog/laws-of-reflection" },
              { title: "reflect 包文档", url: "https://pkg.go.dev/reflect" },
              { title: "反射性能分析", url: "https://go.dev/doc/faq#reflection" },
            ],
          },
          {
            id: "go-w19-4",
            title: "反射高级应用",
            detail: "使用反射实现通用函数、结构体操作和动态调用。",
            keyPoints: [
              "遍历结构体字段和标签。",
              "动态创建和修改值。",
              "调用方法和函数。",
            ],
            resources: [
              { title: "encoding/json 源码", url: "https://go.dev/src/encoding/json/encode.go" },
              { title: "反射最佳实践", url: "https://go.dev/blog/laws-of-reflection" },
              { title: "ORM 实现原理", url: "https://gorm.io/docs/" },
            ],
          },
        ],
      },
      {
        id: "go-w20",
        title: "第 20 周：Unsafe、CGO 与底层编程",
        summary: "学习 unsafe 包、CGO 调用 C 代码以及编译器/链接器高级用法。",
        keyPoints: [
          "理解 unsafe 包的使用场景和风险。",
          "掌握 CGO 调用 C 库的方法。",
          "了解编译器标志和链接器选项。",
        ],
        lessons: [
          {
            id: "go-w20-1",
            title: "unsafe 包详解",
            detail: "使用 unsafe 包进行底层内存操作和类型转换。",
            keyPoints: [
              "unsafe.Pointer 是通用指针类型，可与任何指针互转。",
              "unsafe.Sizeof/Alignof/Offsetof 获取内存布局信息。",
              "违反 unsafe 规则会导致未定义行为。",
            ],
            resources: [
              { title: "unsafe 包文档", url: "https://pkg.go.dev/unsafe" },
              { title: "Unsafe Pointer Rules", url: "https://go.dev/ref/spec#Package_unsafe" },
              { title: "unsafe 使用模式", url: "https://go101.org/article/unsafe.html" },
            ],
          },
          {
            id: "go-w20-2",
            title: "CGO 基础",
            detail: "使用 CGO 调用 C 代码，理解 Go 与 C 的交互机制。",
            keyPoints: [
              "import \"C\" 启用 CGO，注释块定义 C 代码。",
              "C.xxx 访问 C 类型和函数。",
              "CGO 有性能开销，交叉编译更复杂。",
            ],
            resources: [
              { title: "CGO 文档", url: "https://go.dev/cmd/cgo/" },
              { title: "CGO Wiki", url: "https://go.dev/wiki/cgo" },
              { title: "CGO 最佳实践", url: "https://dave.cheney.net/2016/01/18/cgo-is-not-go" },
            ],
          },
          {
            id: "go-w20-3",
            title: "编译器与链接器标志",
            detail: "使用 -gcflags 和 -ldflags 控制编译和链接行为。",
            keyPoints: [
              "-gcflags='-N -l' 禁用优化便于调试。",
              "-ldflags='-s -w' 去除调试信息减小体积。",
              "-ldflags='-X main.version=v1.0' 注入版本信息。",
            ],
            resources: [
              { title: "Go 编译器", url: "https://go.dev/cmd/compile/" },
              { title: "Go 链接器", url: "https://go.dev/cmd/link/" },
              { title: "构建模式", url: "https://go.dev/cmd/go/#hdr-Build_modes" },
            ],
          },
          {
            id: "go-w20-4",
            title: "插件与动态加载",
            detail: "使用 plugin 包实现动态加载和扩展机制。",
            keyPoints: [
              "go build -buildmode=plugin 构建插件。",
              "plugin.Open 加载 .so 文件。",
              "plugin.Lookup 获取导出的符号。",
            ],
            resources: [
              { title: "plugin 包文档", url: "https://pkg.go.dev/plugin" },
              { title: "Go 插件系统", url: "https://go.dev/blog/plugins" },
              { title: "构建模式", url: "https://go.dev/cmd/go/#hdr-Build_modes" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "go-runtime-lowlevel",
    title: "阶段十：运行时与底层编程",
    duration: "第 21-22 周",
    goal: "深入理解 Go 运行时调度器和底层汇编编程。",
    weeks: [
      {
        id: "go-w21",
        title: "第 21 周：运行时与调度器",
        summary: "深入理解 GMP 调度模型、调度器实现和运行时机制。",
        keyPoints: [
          "理解 G（Goroutine）、M（Machine）、P（Processor）模型。",
          "掌握调度器的工作窃取和抢占机制。",
          "了解 sysmon 系统监控线程的作用。",
        ],
        lessons: [
          {
            id: "go-w21-1",
            title: "GMP 调度模型",
            detail: "深入理解 Goroutine、Machine、Processor 三者的关系和调度原理。",
            keyPoints: [
              "G 是 Goroutine，包含栈、程序计数器等状态。",
              "M 是操作系统线程，执行 G 的载体。",
              "P 是逻辑处理器，管理本地 G 队列。",
            ],
            resources: [
              { title: "Go 调度器设计文档", url: "https://go.dev/src/runtime/HACKING.md" },
              { title: "GMP 模型详解", url: "https://go.dev/src/runtime/proc.go" },
              { title: "调度器演进", url: "https://docs.google.com/document/d/1TTj4T2JO42uD5ID9e89oa0sLKhJYD0Y_kqxDv3I3XMw" },
            ],
          },
          {
            id: "go-w21-2",
            title: "调度器源码分析",
            detail: "阅读 runtime/proc.go 理解调度器核心实现。",
            keyPoints: [
              "schedule() 函数是调度核心循环。",
              "findrunnable() 查找可运行的 G。",
              "工作窃取从其他 P 偷取 G。",
            ],
            resources: [
              { title: "runtime/proc.go", url: "https://go.dev/src/runtime/proc.go" },
              { title: "调度器 trace", url: "https://go.dev/doc/diagnostics#execution-tracer" },
              { title: "GODEBUG=schedtrace", url: "https://pkg.go.dev/runtime#hdr-Environment_Variables" },
            ],
          },
          {
            id: "go-w21-3",
            title: "sysmon 与抢占",
            detail: "理解系统监控线程和 Go 1.14+ 的异步抢占机制。",
            keyPoints: [
              "sysmon 是后台监控线程，不绑定 P。",
              "检测长时间运行的 G 并触发抢占。",
              "Go 1.14 引入信号抢占，解决紧密循环问题。",
            ],
            resources: [
              { title: "sysmon 实现", url: "https://go.dev/src/runtime/proc.go" },
              { title: "抢占设计文档", url: "https://go.dev/design/24543-non-cooperative-preemption" },
              { title: "runtime 包文档", url: "https://pkg.go.dev/runtime" },
            ],
          },
          {
            id: "go-w21-4",
            title: "运行时内部结构",
            detail: "了解 runtime 包的内部数据结构和调试方法。",
            keyPoints: [
              "runtime.g 结构体包含 Goroutine 状态。",
              "runtime.m 结构体包含线程信息。",
              "使用 GODEBUG 环境变量调试运行时。",
            ],
            resources: [
              { title: "runtime2.go", url: "https://go.dev/src/runtime/runtime2.go" },
              { title: "GODEBUG 变量", url: "https://pkg.go.dev/runtime#hdr-Environment_Variables" },
              { title: "运行时调试", url: "https://go.dev/doc/diagnostics" },
            ],
          },
        ],
      },
      {
        id: "go-w22",
        title: "第 22 周：Go 汇编编程",
        summary: "学习 Plan9 汇编语法，编写高性能汇编函数。",
        keyPoints: [
          "理解 Go 使用的 Plan9 汇编语法。",
          "掌握函数调用约定和栈布局。",
          "学习 SIMD 指令优化。",
        ],
        lessons: [
          {
            id: "go-w22-1",
            title: "Plan9 汇编基础",
            detail: "学习 Go 汇编的基本语法和寄存器约定。",
            keyPoints: [
              "Go 使用 Plan9 风格汇编，与 AT&T/Intel 不同。",
              "伪寄存器：FP（帧指针）、SP（栈指针）、SB（静态基址）、PC。",
              "TEXT 指令定义函数，DATA/GLOBL 定义数据。",
            ],
            resources: [
              { title: "Go 汇编指南", url: "https://go.dev/doc/asm" },
              { title: "Plan9 汇编手册", url: "https://9p.io/sys/doc/asm.html" },
              { title: "汇编函数示例", url: "https://go.dev/src/runtime/asm_amd64.s" },
            ],
          },
          {
            id: "go-w22-2",
            title: "函数调用约定",
            detail: "理解 Go 函数的栈布局和参数传递方式。",
            keyPoints: [
              "Go 1.17+ 使用寄存器传参（ABI 内部调用约定）。",
              "栈帧包含返回地址、参数、局部变量。",
              "NOSPLIT 标志表示函数不需要栈分裂检查。",
            ],
            resources: [
              { title: "Go 内部 ABI", url: "https://go.dev/src/cmd/compile/abi-internal.md" },
              { title: "栈布局", url: "https://go.dev/src/runtime/stack.go" },
              { title: "调用约定演进", url: "https://go.dev/doc/go1.17#compiler" },
            ],
          },
          {
            id: "go-w22-3",
            title: "SIMD 与向量化",
            detail: "使用 SIMD 指令实现高性能数值计算。",
            keyPoints: [
              "SSE/AVX 指令可以并行处理多个数据。",
              "使用 MOVOU、PADDQ 等向量指令。",
              "对齐要求：16 字节（SSE）或 32 字节（AVX）。",
            ],
            resources: [
              { title: "crypto 包汇编", url: "https://go.dev/src/crypto/aes/asm_amd64.s" },
              { title: "SIMD 优化示例", url: "https://go.dev/src/math/dim_amd64.s" },
              { title: "Intel 指令参考", url: "https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html" },
            ],
          },
          {
            id: "go-w22-4",
            title: "汇编实战与调试",
            detail: "编写汇编函数并与 Go 代码集成。",
            keyPoints: [
              "在 .s 文件中编写汇编，Go 文件中声明函数签名。",
              "使用 go tool objdump 反汇编检查。",
              "使用 go tool compile -S 查看编译器生成的汇编。",
            ],
            resources: [
              { title: "go tool objdump", url: "https://pkg.go.dev/cmd/objdump" },
              { title: "go tool compile", url: "https://pkg.go.dev/cmd/compile" },
              { title: "汇编最佳实践", url: "https://go.dev/wiki/AssemblyPolicy" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "go-network-distributed",
    title: "阶段十一：网络与分布式系统",
    duration: "第 23-24 周",
    goal: "深入网络编程原理，掌握分布式系统核心模式。",
    weeks: [
      {
        id: "go-w23",
        title: "第 23 周：网络编程深度",
        summary: "深入理解 net 包实现原理和高性能网络编程技术。",
        keyPoints: [
          "理解 net 包与操作系统网络 API 的交互。",
          "掌握 epoll/kqueue 事件驱动模型。",
          "学习连接池设计和高性能服务器模式。",
        ],
        lessons: [
          {
            id: "go-w23-1",
            title: "net 包底层实现",
            detail: "理解 Go 网络库如何与操作系统交互。",
            keyPoints: [
              "net 包封装了 socket、bind、listen、accept 等系统调用。",
              "使用 netpoll 实现非阻塞 I/O。",
              "Conn 接口抽象了 TCP、UDP、Unix 等连接。",
            ],
            resources: [
              { title: "net 包源码", url: "https://go.dev/src/net/" },
              { title: "netpoll 实现", url: "https://go.dev/src/runtime/netpoll.go" },
              { title: "net 包文档", url: "https://pkg.go.dev/net" },
            ],
          },
          {
            id: "go-w23-2",
            title: "epoll/kqueue 集成",
            detail: "理解 Go 运行时如何集成操作系统事件机制。",
            keyPoints: [
              "Linux 使用 epoll，BSD/macOS 使用 kqueue。",
              "Go 运行时将网络 I/O 与调度器集成。",
              "网络 Goroutine 在 I/O 阻塞时会被调度出去。",
            ],
            resources: [
              { title: "netpoll_epoll.go", url: "https://go.dev/src/runtime/netpoll_epoll.go" },
              { title: "netpoll_kqueue.go", url: "https://go.dev/src/runtime/netpoll_kqueue.go" },
              { title: "epoll 手册", url: "https://man7.org/linux/man-pages/man7/epoll.7.html" },
            ],
          },
          {
            id: "go-w23-3",
            title: "连接池设计",
            detail: "实现高效的连接池管理连接复用。",
            keyPoints: [
              "连接池减少连接建立开销。",
              "需要处理连接健康检查和过期。",
              "database/sql 的连接池是好的参考。",
            ],
            resources: [
              { title: "sql 连接池", url: "https://go.dev/src/database/sql/sql.go" },
              { title: "http 连接复用", url: "https://pkg.go.dev/net/http#Transport" },
              { title: "连接池模式", url: "https://go.dev/doc/database/manage-connections" },
            ],
          },
          {
            id: "go-w23-4",
            title: "高性能网络框架",
            detail: "了解 gnet、netpoll 等高性能网络框架的设计。",
            keyPoints: [
              "gnet 使用 Reactor 模式实现高性能。",
              "字节跳动 netpoll 针对 RPC 场景优化。",
              "适用于需要处理百万连接的场景。",
            ],
            resources: [
              { title: "gnet 框架", url: "https://github.com/panjf2000/gnet" },
              { title: "netpoll 框架", url: "https://github.com/cloudwego/netpoll" },
              { title: "百万连接实践", url: "https://go.dev/blog/io2013-talk-concurrency" },
            ],
          },
        ],
      },
      {
        id: "go-w24",
        title: "第 24 周：分布式系统",
        summary: "学习分布式系统核心概念和 Go 实现模式。",
        keyPoints: [
          "理解分布式一致性和 Raft 算法。",
          "掌握分布式锁和服务发现模式。",
          "学习分布式追踪和可观测性。",
        ],
        lessons: [
          {
            id: "go-w24-1",
            title: "Raft 一致性算法",
            detail: "理解 Raft 算法原理，学习 etcd/raft 实现。",
            keyPoints: [
              "Raft 实现领导者选举、日志复制、安全性。",
              "etcd 使用 Raft 实现分布式键值存储。",
              "HashiCorp Raft 是独立的 Go Raft 库。",
            ],
            resources: [
              { title: "Raft 论文", url: "https://raft.github.io/raft.pdf" },
              { title: "etcd/raft", url: "https://github.com/etcd-io/raft" },
              { title: "HashiCorp Raft", url: "https://github.com/hashicorp/raft" },
            ],
          },
          {
            id: "go-w24-2",
            title: "分布式锁",
            detail: "使用 Redis 或 etcd 实现分布式锁。",
            keyPoints: [
              "Redis RedLock 算法实现分布式锁。",
              "etcd 使用租约（Lease）实现锁。",
              "需要处理锁续期和故障恢复。",
            ],
            resources: [
              { title: "Redlock 算法", url: "https://redis.io/docs/manual/patterns/distributed-locks/" },
              { title: "etcd 分布式锁", url: "https://etcd.io/docs/v3.5/dev-guide/api_concurrency_reference_v3/" },
              { title: "分布式锁分析", url: "https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html" },
            ],
          },
          {
            id: "go-w24-3",
            title: "服务发现",
            detail: "使用 Consul、etcd 或 Kubernetes 实现服务发现。",
            keyPoints: [
              "服务注册：服务启动时注册自己。",
              "服务发现：客户端查找服务地址。",
              "健康检查：检测服务是否可用。",
            ],
            resources: [
              { title: "Consul 服务发现", url: "https://developer.hashicorp.com/consul/docs/concepts/service-discovery" },
              { title: "etcd 服务发现", url: "https://etcd.io/docs/v3.5/dev-guide/grpc_naming/" },
              { title: "Kubernetes 服务", url: "https://kubernetes.io/docs/concepts/services-networking/service/" },
            ],
          },
          {
            id: "go-w24-4",
            title: "分布式追踪",
            detail: "使用 OpenTelemetry 实现分布式追踪和可观测性。",
            keyPoints: [
              "OpenTelemetry 是可观测性标准。",
              "Trace、Span、Context 是核心概念。",
              "支持 Jaeger、Zipkin 等后端。",
            ],
            resources: [
              { title: "OpenTelemetry Go", url: "https://opentelemetry.io/docs/languages/go/" },
              { title: "分布式追踪概念", url: "https://opentelemetry.io/docs/concepts/signals/traces/" },
              { title: "Jaeger", url: "https://www.jaegertracing.io/docs/getting-started/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "go-wasm",
    title: "阶段十二：WebAssembly",
    duration: "第 25 周",
    goal: "学习使用 Go 编译 WebAssembly，实现浏览器端 Go 程序。",
    weeks: [
      {
        id: "go-w25",
        title: "第 25 周：Go 与 WebAssembly",
        summary: "使用 Go 编译 WASM，实现浏览器和 Go 的交互。",
        keyPoints: [
          "使用 GOOS=js GOARCH=wasm 编译 WASM。",
          "使用 syscall/js 与 JavaScript 交互。",
          "了解 TinyGo 生成更小的 WASM。",
        ],
        lessons: [
          {
            id: "go-w25-1",
            title: "WASM 编译与运行",
            detail: "将 Go 程序编译为 WebAssembly 并在浏览器运行。",
            keyPoints: [
              "GOOS=js GOARCH=wasm go build -o main.wasm",
              "需要 wasm_exec.js 作为 Go 运行时。",
              "使用 WebAssembly.instantiateStreaming 加载。",
            ],
            resources: [
              { title: "Go WebAssembly Wiki", url: "https://go.dev/wiki/WebAssembly" },
              { title: "wasm_exec.js", url: "https://go.dev/misc/wasm/wasm_exec.js" },
              { title: "WASM 教程", url: "https://golangbot.com/webassembly-using-go/" },
            ],
          },
          {
            id: "go-w25-2",
            title: "syscall/js 包",
            detail: "使用 syscall/js 与 JavaScript 和 DOM 交互。",
            keyPoints: [
              "js.Global() 获取全局对象（window）。",
              "js.FuncOf 创建可被 JS 调用的 Go 函数。",
              "js.Value 表示 JS 值，支持方法调用。",
            ],
            resources: [
              { title: "syscall/js 文档", url: "https://pkg.go.dev/syscall/js" },
              { title: "DOM 操作示例", url: "https://go.dev/wiki/WebAssembly#interacting-with-the-dom" },
              { title: "事件处理", url: "https://go.dev/wiki/WebAssembly#callbacks" },
            ],
          },
          {
            id: "go-w25-3",
            title: "TinyGo for WASM",
            detail: "使用 TinyGo 生成更小的 WASM 文件。",
            keyPoints: [
              "TinyGo 生成的 WASM 比标准 Go 小得多。",
              "支持 WASI（WebAssembly System Interface）。",
              "部分标准库功能受限。",
            ],
            resources: [
              { title: "TinyGo WASM", url: "https://tinygo.org/docs/guides/webassembly/" },
              { title: "TinyGo 安装", url: "https://tinygo.org/getting-started/install/" },
              { title: "WASI 支持", url: "https://tinygo.org/docs/guides/webassembly/wasi/" },
            ],
          },
          {
            id: "go-w25-4",
            title: "WASM 实战项目",
            detail: "构建一个完整的 Go WASM 应用。",
            keyPoints: [
              "前后端分离：Go WASM 作为前端逻辑。",
              "性能考虑：WASM 适合计算密集型任务。",
              "调试技巧：使用浏览器开发者工具。",
            ],
            resources: [
              { title: "Go WASM 示例", url: "https://github.com/nicholasjackson/go-wasm-example" },
              { title: "Vugu 框架", url: "https://www.vugu.org/" },
              { title: "Vecty 框架", url: "https://github.com/hexops/vecty" },
            ],
          },
        ],
      },
    ],
  },
]

export const golangKnowledgeCards: KnowledgeCard[] = [
  {
    id: "go-simplicity",
    title: "简洁至上",
    summary: "Go 的设计哲学是简洁：少即是多，清晰胜于聪明。",
    points: [
      "一种循环（for），一种条件（if/switch），一种声明（:=或 var）。",
      "没有继承，用组合和接口实现多态。",
      "显式错误处理，拒绝异常机制。",
    ],
    practice: "重构一段使用复杂继承的代码，改用 Go 的组合和接口实现相同功能。",
  },
  {
    id: "go-concurrency",
    title: "并发模型",
    summary: "Don't communicate by sharing memory; share memory by communicating.",
    points: [
      "Goroutine 是轻量级协程，可以创建成千上万个。",
      "Channel 是 Goroutine 之间的通信管道。",
      "select 语句处理多个 Channel 操作。",
    ],
    practice: "实现一个 Worker Pool，从 Channel 接收任务并并发处理，控制并发数量。",
  },
  {
    id: "go-interface",
    title: "接口隐式实现",
    summary: "接口是方法签名的集合，类型只需实现方法即可满足接口。",
    points: [
      "无需显式声明 implements，降低耦合。",
      "小接口更灵活，如 io.Reader 只有一个方法。",
      "空接口 any 可以存储任意值。",
    ],
    practice: "为 io.Reader 接口实现一个自定义类型，包装另一个 Reader 并计数读取字节数。",
  },
  {
    id: "go-error",
    title: "错误即值",
    summary: "Go 将错误视为普通值，通过返回值而非异常传递。",
    points: [
      "if err != nil 是惯用的错误检查模式。",
      "使用 %w 包装错误保留上下文。",
      "errors.Is/As 用于错误链检查。",
    ],
    practice: "实现一个函数，调用多层函数，每层用 %w 包装错误，最后用 errors.Is 检查根因。",
  },
  {
    id: "go-tooling",
    title: "工具链完善",
    summary: "Go 自带格式化、测试、分析等工具，无需额外配置。",
    points: [
      "go fmt 统一代码风格，消除团队争议。",
      "go test 内置测试框架和覆盖率。",
      "go mod 管理依赖，无需额外工具。",
    ],
    practice: "为一个包编写表驱动测试，运行 go test -cover 并优化至 80% 覆盖率。",
  },
]

export const golangExamQuestions: QuizQuestion[] = [
  {
    id: "go-q1",
    question: "以下哪种声明方式只能在函数内部使用？",
    options: [
      "var x int",
      "const y = 10",
      "x := 10",
      "type Point struct{}",
    ],
    answer: 2,
    rationale: ":= 短声明语法只能在函数内部使用，不能在包级别使用。",
  },
  {
    id: "go-q2",
    question: "关于 Go 切片，以下哪项描述是正确的？",
    options: [
      "切片的长度是类型的一部分",
      "切片是值类型，传递时会复制底层数组",
      "切片包含指向底层数组的指针、长度和容量",
      "切片和数组可以相互赋值",
    ],
    answer: 2,
    rationale: "切片是一个包含指针、长度和容量的结构体，是对底层数组的引用视图。",
  },
  {
    id: "go-q3",
    question: "以下哪种情况应该使用指针接收者而非值接收者？",
    options: [
      "方法只读取结构体字段",
      "结构体很小（如 Point{X, Y int}）",
      "方法需要修改结构体的字段",
      "为了保持代码一致性，始终用值接收者",
    ],
    answer: 2,
    rationale: "当方法需要修改接收者的字段时，必须使用指针接收者；值接收者操作的是副本。",
  },
  {
    id: "go-q4",
    question: "关于 Go 接口，以下哪项描述是错误的？",
    options: [
      "接口是方法签名的集合",
      "类型必须显式声明 implements 来实现接口",
      "空接口 interface{} 可以存储任何类型的值",
      "接口变量的零值是 nil",
    ],
    answer: 1,
    rationale: "Go 接口是隐式实现的，类型只需实现接口定义的所有方法即可，无需显式声明。",
  },
  {
    id: "go-q5",
    question: "以下哪种方式可以安全地检测 map 中是否存在某个键？",
    options: [
      "if m[key] != nil",
      "if m[key] != 0",
      "v, ok := m[key]; if ok { ... }",
      "if len(m[key]) > 0",
    ],
    answer: 2,
    rationale: "comma-ok 模式 v, ok := m[key] 是检查 map 键是否存在的惯用方式，ok 为 bool 表示键是否存在。",
  },
  {
    id: "go-q6",
    question: "关于 Goroutine 和 Channel，以下哪项描述是正确的？",
    options: [
      "向已关闭的 Channel 发送数据会返回零值",
      "从已关闭的 Channel 接收会返回零值和 false",
      "无缓冲 Channel 发送不会阻塞",
      "Goroutine 是操作系统线程",
    ],
    answer: 1,
    rationale: "从已关闭的 Channel 接收会立即返回零值和 false；向已关闭的 Channel 发送会 panic。",
  },
  {
    id: "go-q7",
    question: "使用 defer 语句时，以下哪项是正确的？",
    options: [
      "defer 语句立即执行",
      "多个 defer 按 FIFO（先进先出）顺序执行",
      "defer 函数的参数在 defer 语句执行时求值",
      "defer 只能用于关闭文件",
    ],
    answer: 2,
    rationale: "defer 语句的参数在声明时立即求值，但函数调用延迟到外层函数返回前；多个 defer 按 LIFO 执行。",
  },
  {
    id: "go-q8",
    question: "关于 Go 错误处理，以下哪项是最佳实践？",
    options: [
      "使用 panic 处理所有错误",
      "忽略不重要的错误",
      "使用 fmt.Errorf 和 %w 包装错误以保留上下文",
      "总是创建自定义错误类型",
    ],
    answer: 2,
    rationale: "使用 %w 包装错误可以保留错误链，便于使用 errors.Is/As 进行错误检查和类型断言。",
  },
  {
    id: "go-q9",
    question: "以下哪个命令可以检测 Go 程序中的数据竞争？",
    options: [
      "go fmt -race",
      "go build -race",
      "go vet -race",
      "go mod -race",
    ],
    answer: 1,
    rationale: "go build -race 或 go run -race 或 go test -race 可以启用竞态检测器检测数据竞争。",
  },
  {
    id: "go-q10",
    question: "关于 Go 泛型，以下哪项描述是正确的？",
    options: [
      "Go 1.0 就支持泛型",
      "泛型只能用于函数，不能用于类型",
      "any 是 interface{} 的别名，是最宽松的类型约束",
      "泛型不支持类型推断",
    ],
    answer: 2,
    rationale: "Go 1.18 引入泛型，any 是 interface{} 的别名；泛型可用于函数和类型；支持类型推断。",
  },
  {
    id: "go-q11",
    question: "以下哪种类型在 Go 中是引用类型？",
    options: [
      "数组（[3]int）",
      "结构体（struct）",
      "切片（[]int）",
      "整数（int）",
    ],
    answer: 2,
    rationale: "切片、Map 和 Channel 是引用类型，赋值和传参时不会复制底层数据；数组和结构体是值类型。",
  },
  {
    id: "go-q12",
    question: "关于 Go 的 init 函数，以下哪项描述是正确的？",
    options: [
      "每个包只能有一个 init 函数",
      "init 函数可以有参数和返回值",
      "init 函数在 main 函数之前自动执行",
      "init 函数可以被其他函数显式调用",
    ],
    answer: 2,
    rationale: "init 函数在包被导入时自动执行，先于 main；同一包可以有多个 init，不能有参数和返回值，不可被显式调用。",
  },
  {
    id: "go-q13",
    question: "以下哪种方式可以正确地遍历 map 的所有键值对？",
    options: [
      "for i := 0; i < len(m); i++ { m[i] }",
      "for k, v := range m { ... }",
      "m.forEach(func(k, v) { ... })",
      "while k, v := m.next() { ... }",
    ],
    answer: 1,
    rationale: "Go 使用 for range 遍历 map，每次迭代返回键和值；map 的遍历顺序是随机的。",
  },
  {
    id: "go-q14",
    question: "关于 Go 的 select 语句，以下哪项描述是正确的？",
    options: [
      "select 只能监听一个 Channel",
      "select 中多个 case 同时就绪时会随机选择一个执行",
      "select 不支持 default 分支",
      "select 只能用于发送操作，不能用于接收",
    ],
    answer: 1,
    rationale: "select 可以同时监听多个 Channel 操作，当多个 case 都就绪时会随机选择一个执行，支持 default 实现非阻塞操作。",
  },
  {
    id: "go-q15",
    question: "以下哪个是 Go 中正确的类型断言写法？",
    options: [
      "(string)value",
      "value.(string)",
      "value as string",
      "string(value)",
    ],
    answer: 1,
    rationale: "Go 的类型断言语法是 value.(Type)，用于从接口值中提取具体类型；string(value) 是类型转换而非断言。",
  },
  {
    id: "go-q16",
    question: "关于 Go 的 struct 嵌入，以下哪项描述是正确的？",
    options: [
      "嵌入等同于面向对象语言中的继承",
      "嵌入的字段不能被外层结构体的方法访问",
      "嵌入的类型的方法会被提升到外层结构体",
      "Go 结构体不支持匿名嵌入",
    ],
    answer: 2,
    rationale: "嵌入类型的方法和字段会被提升到外层结构体，可以直接访问；这是组合而非继承。",
  },
  {
    id: "go-q17",
    question: "以下哪项关于 Go 的 goroutine 描述是错误的？",
    options: [
      "goroutine 的初始栈大小通常为几 KB",
      "goroutine 由 Go 运行时调度，而非操作系统",
      "goroutine 的栈大小是固定的，无法动态增长",
      "可以同时运行成千上万个 goroutine",
    ],
    answer: 2,
    rationale: "goroutine 的栈是动态增长和收缩的，初始约 2-8 KB，可按需扩展到 GB 级别。",
  },
  {
    id: "go-q18",
    question: "以下哪个表驱动测试的写法是 Go 推荐的惯用模式？",
    options: [
      "为每个测试用例编写单独的 Test 函数",
      "使用 t.Run 配合测试用例切片进行子测试",
      "使用全局变量存储测试结果",
      "在 init 函数中执行测试逻辑",
    ],
    answer: 1,
    rationale: "表驱动测试配合 t.Run 是 Go 推荐的测试模式，方便组织用例、并行执行和定位失败。",
  },
  {
    id: "go-q19",
    question: "关于 Go Modules，以下哪项描述是错误的？",
    options: [
      "go.mod 文件定义模块路径和依赖版本",
      "go.sum 文件记录依赖的校验和",
      "go mod tidy 会清理未使用的依赖",
      "Go Modules 要求所有代码必须放在 GOPATH 下",
    ],
    answer: 3,
    rationale: "Go Modules 的设计目的之一就是摆脱 GOPATH 的限制，项目可以放在任意目录下。",
  },
  {
    id: "go-q20",
    question: "关于 context.Context，以下哪项是正确的？",
    options: [
      "Context 可以用来传递大量业务数据",
      "Context 的 Value 方法是类型安全的",
      "Context 主要用于传递取消信号、截止时间和请求范围的值",
      "Context 一旦创建就不能派生子 Context",
    ],
    answer: 2,
    rationale: "Context 主要用于跨 API 边界传递取消信号、超时和少量请求范围的值；不应用于传递大量业务数据。",
  },
]

export const golangRoadmap: RoadmapDefinition = {
  id: "golang",
  label: "Go 语言",
  title: "Go 语言",
  durationLabel: "25 个主题",
  description:
    "从环境搭建到并发编程，从标准库到生态框架，系统化掌握 Go 语言核心特性与生产实践。路线基于 roadmap.sh Go 开发者路线图扩展而来。",
  heroBadge: "云原生首选",
  stages: golangStages,
  knowledgeCards: golangKnowledgeCards,
  examQuestions: golangExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "从环境搭建和 Hello World 开始，熟悉 Go 的简洁语法。"
    if (percent < 30) return "重点掌握数据类型、函数和指针，理解 Go 的值传递语义。"
    if (percent < 50) return "深入学习接口和错误处理，这是 Go 的核心设计哲学。"
    if (percent < 70) return "开始并发编程，掌握 Goroutine 和 Channel 的使用模式。"
    if (percent < 90) return "探索标准库和生态，尝试构建 Web 服务或 CLI 工具。"
    return "恭喜完成基础学习！继续深入性能优化和高级话题。"
  },
  resourceGuide: {
    environment: "安装 Go 1.21+，配置 VS Code + Go 扩展或 GoLand IDE，确保 go version 和 go env 正常。",
    fallbackKeyPoints: [
      "简洁至上：一种循环、显式错误、组合优于继承。",
      "并发模型：通过通信共享内存，而非通过共享内存通信。",
      "工具链完善：fmt/test/mod/vet 开箱即用。",
    ],
    handsOnSteps: [
      "完成 A Tour of Go 官方教程。",
      "实现一个 CLI 工具（如 todo list 或文件搜索）。",
      "构建一个 REST API 服务，包含数据库和测试。",
    ],
    selfChecks: [
      "能否解释值接收者和指针接收者的区别？",
      "能否使用 Channel 实现 Worker Pool？",
      "是否为代码编写了表驱动测试？",
    ],
    extensions: [
      "学习 Kubernetes 源码，理解大型 Go 项目架构。",
      "使用 pprof 进行性能调优。",
      "探索 CGO 和 unsafe 包的高级用法。",
    ],
    lessonQuizAdvice: "Go 语法简单但细节重要，遇到不确定的题目时回顾语言规范和官方文档。",
  },
}
