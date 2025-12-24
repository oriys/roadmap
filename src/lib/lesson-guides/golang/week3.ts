import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week3Guides: Record<string, LessonGuide> = {
    "go-w3-1": {
        lessonId: "go-w3-1",
        background: [
            "【数组定义】Go 数组是固定长度的同类型元素序列，长度是类型的一部分：[3]int 和 [4]int 是不同类型。",
            "【切片特性】切片是对底层数组的引用视图，包含指针、长度和容量三个属性。",
            "【make 函数】使用 make([]T, len, cap) 创建指定长度和容量的切片。",
            "【容量增长】切片 append 超过容量时会自动扩容，通常是翻倍增长（大切片增长约 25%）。"
        ],
        keyDifficulties: [
            "【数组 vs 切片】数组是值类型（复制），切片是引用类型（共享底层数组）。大多数场景使用切片。",
            "【切片陷阱】多个切片可能共享同一底层数组，修改一个会影响其他。使用 copy 创建独立副本。",
            "【nil vs 空切片】nil 切片没有底层数组，空切片有但长度为 0。两者的 len 都是 0。"
        ],
        handsOnPath: [
            "声明数组：`var arr [5]int`",
            "创建切片：`s := make([]int, 3, 10)`",
            "使用 append 添加元素并观察容量变化",
            "测试切片共享底层数组的行为"
        ],
        selfCheck: ["数组和切片的主要区别是什么？", "切片的三个属性是什么？", "append 操作何时会导致重新分配？"],
        extensions: ["学习 slices 包（Go 1.21+）的通用切片函数", "了解切片表达式 s[low:high:max]"],
        sourceUrls: ["https://gobyexample.com/arrays", "https://gobyexample.com/slices", "https://go.dev/blog/slices"]
    },
    "go-w3-2": {
        lessonId: "go-w3-2",
        background: [
            "【Map 定义】Map 是键值对的无序集合，键必须是可比较的类型。",
            "【零值问题】Map 的零值是 nil，必须用 make 初始化后才能使用。",
            "【comma-ok】使用 v, ok := m[key] 模式安全地检查键是否存在，ok 为 bool。",
            "【并发安全】Map 不是并发安全的，并发读写需要加锁或使用 sync.Map。"
        ],
        keyDifficulties: [
            "【nil map】向 nil map 写入会 panic，读取返回零值。始终初始化 map。",
            "【遍历顺序】Map 遍历顺序是随机的，不能依赖顺序。需要有序时先排序键。",
            "【键类型限制】切片、map、函数不能作为键（不可比较）。结构体可以作为键（如果所有字段可比较）。"
        ],
        handsOnPath: [
            "创建 map：`m := make(map[string]int)`",
            "使用 comma-ok 模式检查键存在",
            "使用 delete 删除键值对",
            "测试 nil map 的行为"
        ],
        selfCheck: ["Map 的零值是什么？为什么需要 make？", "comma-ok 模式如何工作？", "为什么切片不能作为 map 的键？"],
        extensions: ["学习 sync.Map 用于并发场景", "了解 maps 包（Go 1.21+）"],
        sourceUrls: ["https://gobyexample.com/maps", "https://go.dev/blog/maps", "https://pkg.go.dev/sync#Map"]
    },
    "go-w3-3": {
        lessonId: "go-w3-3",
        background: [
            "【结构体定义】使用 type Name struct {} 定义结构体，是字段的集合。",
            "【可见性规则】首字母大写的字段可导出，小写私有。JSON 序列化需要导出字段。",
            "【struct tag】使用标签控制序列化行为：`json:\"name,omitempty\"`",
            "【结构体嵌入】嵌入其他结构体实现组合，类似继承但更灵活。"
        ],
        keyDifficulties: [
            "【JSON 序列化】未导出字段不会被 JSON 序列化。使用 json 标签自定义字段名。",
            "【指针 vs 值】小结构体用值，大结构体或需要修改时用指针。",
            "【嵌入字段】嵌入的字段和方法可以直接访问，发生冲突时需要显式指定。"
        ],
        handsOnPath: [
            "定义结构体并创建实例",
            "使用 JSON 标签进行序列化/反序列化",
            "尝试结构体嵌入和字段访问",
            "测试未导出字段的 JSON 行为"
        ],
        selfCheck: ["如何让结构体字段能被 JSON 序列化？", "omitempty 标签的作用是什么？", "结构体嵌入和继承有什么区别？"],
        extensions: ["学习 json.RawMessage 延迟解析", "了解 encoding/gob 二进制序列化"],
        sourceUrls: ["https://gobyexample.com/structs", "https://pkg.go.dev/encoding/json", "https://gobyexample.com/json"]
    }
}

export const week3Quizzes: Record<string, QuizQuestion[]> = {
    "go-w3-1": [
        { id: "go-w3-1-q1", question: "[3]int 和 [4]int 是同一类型吗？", options: ["是", "否，长度是类型的一部分", "取决于元素值", "运行时确定"], answer: 1, rationale: "数组长度是类型的一部分，[3]int 和 [4]int 是不同类型。" },
        { id: "go-w3-1-q2", question: "切片的三个属性是什么？", options: ["类型、长度、值", "指针、长度、容量", "名称、类型、大小", "索引、值、类型"], answer: 1, rationale: "切片包含指向底层数组的指针、长度（len）和容量（cap）。" },
        { id: "go-w3-1-q3", question: "make([]int, 3, 10) 创建的切片长度和容量分别是？", options: ["10 和 3", "3 和 10", "3 和 3", "10 和 10"], answer: 1, rationale: "make([]T, len, cap) 第二个参数是长度，第三个是容量。" }
    ],
    "go-w3-2": [
        { id: "go-w3-2-q1", question: "向 nil map 写入会发生什么？", options: ["正常写入", "panic", "返回错误", "自动初始化"], answer: 1, rationale: "向 nil map 写入会导致 panic，必须先用 make 初始化。" },
        { id: "go-w3-2-q2", question: "如何安全检查 map 中键是否存在？", options: ["m[key] != nil", "v, ok := m[key]", "m.has(key)", "m.exists(key)"], answer: 1, rationale: "使用 v, ok := m[key] 模式，ok 为 true 表示键存在。" },
        { id: "go-w3-2-q3", question: "Map 遍历顺序是怎样的？", options: ["按插入顺序", "按键排序", "随机顺序", "按值排序"], answer: 2, rationale: "Map 遍历顺序是随机的，Go 故意随机化以避免依赖顺序。" }
    ],
    "go-w3-3": [
        { id: "go-w3-3-q1", question: "结构体字段首字母大写表示什么？", options: ["常量", "可导出", "私有", "只读"], answer: 1, rationale: "首字母大写的字段可被外部包访问，小写私有。" },
        { id: "go-w3-3-q2", question: "如何自定义 JSON 字段名？", options: ["使用注释", "使用 json 标签", "重命名字段", "不能自定义"], answer: 1, rationale: "使用 `json:\"fieldname\"` 标签自定义 JSON 序列化时的字段名。" }
    ]
}
