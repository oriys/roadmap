import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week19Guides: Record<string, LessonGuide> = {
    "go-w19-1": {
        lessonId: "go-w19-1",
        background: [
            "【内存分配器】Go 使用 tcmalloc 风格的内存分配器，分为 mcache（每 P 本地缓存）、mcentral（中央缓存）、mheap（堆）三级。",
            "【栈管理】Go 1.4+ 使用连续栈（contiguous stack）替代分段栈，栈增长时复制整个栈并更新指针。",
            "【GC 算法】Go 使用并发三色标记清除 GC，结合写屏障实现与程序并发运行，减少 STW 时间。",
            "【内存模型】Go 内存模型定义了 goroutine 之间的可见性规则，happens-before 关系保证正确的同步。",
            "【GOGC 调优】GOGC 环境变量控制 GC 触发阈值，默认 100 表示堆增长 100% 时触发 GC。"
        ],
        keyDifficulties: [
            "【对象大小类】Go 将对象按大小分类（tiny < 16B, small < 32KB, large >= 32KB），不同大小有不同分配路径。",
            "【GC Pacer】GC Pacer 算法动态调整 GC 触发时机，平衡 CPU 使用和内存占用。",
            "【写屏障开销】GC 运行时启用写屏障有 ~2-3% 性能开销。",
            "【内存碎片】长期运行的程序可能产生内存碎片，使用 debug.FreeOSMemory() 归还内存给 OS。"
        ],
        handsOnPath: [
            "使用 runtime.MemStats 监控内存使用",
            "设置 GOGC=off 和不同值测试 GC 行为",
            "使用 GODEBUG=gctrace=1 查看 GC 日志",
            "使用 go tool trace 分析 GC 暂停"
        ],
        selfCheck: [
            "Go 内存分配器的三级结构是什么？",
            "Go GC 使用什么算法？",
            "GOGC 环境变量的作用是什么？",
            "什么是写屏障？为什么需要它？"
        ],
        extensions: [
            "阅读 runtime/malloc.go 源码理解分配器实现",
            "学习 Go 1.19 引入的软内存限制 GOMEMLIMIT",
            "研究 arena 包（实验性）的手动内存管理"
        ],
        sourceUrls: [
            "https://go.dev/src/runtime/malloc.go",
            "https://tip.golang.org/doc/gc-guide",
            "https://go.dev/ref/mem"
        ]
    },
    "go-w19-2": {
        lessonId: "go-w19-2",
        background: [
            "【逃逸分析定义】编译器分析变量的生命周期，决定在栈还是堆上分配。栈分配更快，无需 GC。",
            "【逃逸原因】返回局部变量指针、存入全局变量、闭包捕获、接口转换、大对象等会导致逃逸。",
            "【分析命令】使用 go build -gcflags='-m' 查看逃逸分析结果，-m -m 显示更详细信息。",
            "【内联影响】函数内联会改变逃逸分析结果，内联后变量可能不再逃逸。",
            "【性能影响】堆分配会增加 GC 压力，减少逃逸可以显著提升性能。"
        ],
        keyDifficulties: [
            "【接口逃逸】将值转换为接口类型通常会导致逃逸，因为接口是动态类型。",
            "【切片逃逸】make([]T, n) 当 n 是变量时可能逃逸。预分配已知大小的数组可避免。",
            "【闭包捕获】闭包捕获的变量会逃逸到堆上，生命周期延长到闭包结束。",
            "【sync.Pool】使用 sync.Pool 复用对象可以减少分配，但对象可能被 GC 回收。"
        ],
        handsOnPath: [
            "对常见代码模式运行逃逸分析，观察结果",
            "重构代码减少逃逸，对比性能",
            "使用 benchmark 测量逃逸优化效果",
            "使用 sync.Pool 优化高频分配"
        ],
        selfCheck: [
            "什么情况会导致变量逃逸？",
            "如何查看逃逸分析结果？",
            "接口转换为什么会导致逃逸？",
            "如何使用 sync.Pool 减少分配？"
        ],
        extensions: [
            "学习编译器内联决策机制",
            "研究 go:noescape 和 go:noinline 指令",
            "使用 pprof allocs 分析内存分配热点"
        ],
        sourceUrls: [
            "https://go.dev/doc/faq#stack_or_heap",
            "https://github.com/golang/go/wiki/CompilerOptimizations",
            "https://go.dev/doc/diagnostics"
        ]
    },
    "go-w19-3": {
        lessonId: "go-w19-3",
        background: [
            "【反射三定律】1. 从接口值可获取反射对象；2. 从反射对象可获取接口值；3. 要修改反射对象，值必须可设置。",
            "【Type 和 Value】reflect.TypeOf 返回类型信息，reflect.ValueOf 返回值信息。",
            "【Kind】Type.Kind() 返回底层类型（如 Struct, Slice, Ptr），区别于具体类型名。",
            "【可设置性】只有可寻址的值（如指针指向的值）才能通过反射修改。",
            "【性能开销】反射比直接代码慢 10-100 倍，应避免在热路径使用。"
        ],
        keyDifficulties: [
            "【指针解引用】Value.Elem() 获取指针指向的值，必须传入指针才能修改。",
            "【结构体字段】Value.Field(i) 或 Value.FieldByName 访问字段，只能访问导出字段。",
            "【nil 处理】反射 nil 接口时 TypeOf 返回 nil，需要特殊处理。",
            "【类型断言替代】已知类型时使用类型断言而非反射。"
        ],
        handsOnPath: [
            "使用 TypeOf 和 ValueOf 检查值",
            "遍历结构体字段和方法",
            "通过反射修改变量值",
            "实现简单的 struct-to-map 转换"
        ],
        selfCheck: [
            "反射的三定律是什么？",
            "如何通过反射修改值？",
            "Kind 和 Type 的区别？",
            "反射的性能开销大约是多少？"
        ],
        extensions: [
            "阅读 encoding/json 的反射实现",
            "学习 reflect.MakeFunc 动态创建函数",
            "研究 reflect.Select 动态 select"
        ],
        sourceUrls: [
            "https://go.dev/blog/laws-of-reflection",
            "https://pkg.go.dev/reflect",
            "https://go.dev/doc/faq#reflection"
        ]
    },
    "go-w19-4": {
        lessonId: "go-w19-4",
        background: [
            "【字段遍历】NumField/Field 遍历结构体字段，FieldByName 按名称查找。",
            "【标签读取】StructField.Tag.Get(\"json\") 读取 struct tag，广泛用于序列化。",
            "【方法调用】Value.MethodByName.Call 动态调用方法，参数和返回值都是 []reflect.Value。",
            "【动态创建】reflect.New 创建指针，reflect.MakeSlice/MakeMap 创建复合类型。",
            "【DeepEqual】reflect.DeepEqual 深度比较任意类型，常用于测试。"
        ],
        keyDifficulties: [
            "【私有字段】反射可以读取私有字段但不能修改（除非使用 unsafe）。",
            "【参数转换】调用方法时需要将参数转换为 reflect.Value。",
            "【泛型交互】Go 1.18+ 反射和泛型的交互有限制。",
            "【循环引用】DeepEqual 处理循环引用，但可能导致无限递归。"
        ],
        handsOnPath: [
            "实现读取所有 struct tag 的工具函数",
            "使用反射实现简单的依赖注入",
            "实现动态方法调用器",
            "使用 DeepEqual 编写测试断言"
        ],
        selfCheck: [
            "如何读取 struct tag？",
            "如何通过反射调用方法？",
            "如何动态创建 slice 或 map？",
            "DeepEqual 和 == 的区别？"
        ],
        extensions: [
            "学习 mapstructure 库的实现",
            "研究 wire 依赖注入的代码生成方案",
            "了解 go-cmp 用于测试的深度比较"
        ],
        sourceUrls: [
            "https://go.dev/src/encoding/json/encode.go",
            "https://go.dev/blog/laws-of-reflection",
            "https://gorm.io/docs/"
        ]
    }
}

export const week19Quizzes: Record<string, QuizQuestion[]> = {
    "go-w19-1": [
        {
            id: "go-w19-1-q1",
            question: "Go 内存分配器的三级缓存结构是什么？",
            options: [
                "L1/L2/L3 Cache",
                "mcache/mcentral/mheap",
                "stack/heap/mmap",
                "local/global/system"
            ],
            answer: 1,
            rationale: "Go 使用 mcache（每 P 本地缓存）、mcentral（中央缓存）、mheap（堆）三级分配器。"
        },
        {
            id: "go-w19-1-q2",
            question: "Go GC 使用什么算法？",
            options: [
                "引用计数",
                "分代收集",
                "并发三色标记清除",
                "复制收集"
            ],
            answer: 2,
            rationale: "Go 使用并发三色标记清除 GC，结合写屏障实现与程序并发运行。"
        },
        {
            id: "go-w19-1-q3",
            question: "GOGC=100 表示什么？",
            options: [
                "GC 使用 100% CPU",
                "堆增长 100% 时触发 GC",
                "GC 暂停最多 100ms",
                "保留 100MB 内存"
            ],
            answer: 1,
            rationale: "GOGC=100（默认值）表示当堆大小比上次 GC 后增长 100% 时触发 GC。"
        },
        {
            id: "go-w19-1-q4",
            question: "Go 1.4+ 使用什么栈管理方式？",
            options: [
                "分段栈",
                "连续栈",
                "固定栈",
                "无栈协程"
            ],
            answer: 1,
            rationale: "Go 1.4+ 使用连续栈替代分段栈，栈增长时复制整个栈并更新指针。"
        }
    ],
    "go-w19-2": [
        {
            id: "go-w19-2-q1",
            question: "如何查看 Go 编译器的逃逸分析结果？",
            options: [
                "go run -escape",
                "go build -gcflags='-m'",
                "go vet -escape",
                "go analyze"
            ],
            answer: 1,
            rationale: "使用 go build -gcflags='-m' 查看逃逸分析结果，-m -m 显示更详细信息。"
        },
        {
            id: "go-w19-2-q2",
            question: "以下哪种情况会导致变量逃逸？",
            options: [
                "在函数内声明并使用局部变量",
                "返回局部变量的指针",
                "使用基本类型参数",
                "调用内联函数"
            ],
            answer: 1,
            rationale: "返回局部变量指针会导致逃逸，因为变量需要在函数返回后继续存在。"
        },
        {
            id: "go-w19-2-q3",
            question: "为什么接口转换会导致逃逸？",
            options: [
                "接口占用更多内存",
                "接口是动态类型，需要堆分配存储类型信息",
                "编译器不支持接口优化",
                "接口必须是指针"
            ],
            answer: 1,
            rationale: "接口是动态类型，需要在运行时存储类型信息，通常会导致值逃逸到堆上。"
        }
    ],
    "go-w19-3": [
        {
            id: "go-w19-3-q1",
            question: "反射的三定律第三条是什么？",
            options: [
                "反射可以读取任何值",
                "反射可以调用任何方法",
                "要修改反射对象，值必须可设置（settable）",
                "反射没有性能开销"
            ],
            answer: 2,
            rationale: "反射第三定律：要修改反射对象，值必须可设置。只有可寻址的值才能修改。"
        },
        {
            id: "go-w19-3-q2",
            question: "如何通过反射修改变量的值？",
            options: [
                "直接传值给 ValueOf",
                "传指针给 ValueOf，然后用 Elem() 获取值并修改",
                "使用 SetValue 方法",
                "无法通过反射修改值"
            ],
            answer: 1,
            rationale: "必须传入指针给 ValueOf，然后调用 Elem() 获取可设置的值。"
        },
        {
            id: "go-w19-3-q3",
            question: "反射的性能开销大约是直接代码的多少倍？",
            options: [
                "2-3 倍",
                "10-100 倍",
                "没有额外开销",
                "1000 倍以上"
            ],
            answer: 1,
            rationale: "反射通常比直接代码慢 10-100 倍，应避免在热路径使用。"
        }
    ],
    "go-w19-4": [
        {
            id: "go-w19-4-q1",
            question: "如何通过反射读取 struct tag？",
            options: [
                "Value.Tag.Get()",
                "Type.Field(i).Tag.Get(key)",
                "reflect.GetTag()",
                "struct.Tag()"
            ],
            answer: 1,
            rationale: "使用 Type.Field(i).Tag.Get(key) 或 StructField.Tag.Get(key) 读取 struct tag。"
        },
        {
            id: "go-w19-4-q2",
            question: "reflect.DeepEqual 的作用是什么？",
            options: [
                "浅比较两个值",
                "深度比较任意类型的值",
                "比较类型是否相同",
                "比较内存地址"
            ],
            answer: 1,
            rationale: "DeepEqual 递归比较两个值的所有字段，常用于测试复杂结构的相等性。"
        }
    ]
}
